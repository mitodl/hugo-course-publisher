---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine reviews
  hashing in the context of randomized algorithms.</p>
  <p><strong>Instructors:</strong> Erik Demaine</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: z0lJ2k0sl1g
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 386c1835fdba542129a3bfe73f6d398a
  - id: z0lJ2k0sl1g.srt
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-8-randomization-universal-perfect-hashing/z0lJ2k0sl1g.srt
    title: 3play caption file
    type: null
    uid: d983386b8133ac2abde7714104e1aa01
  - id: z0lJ2k0sl1g.pdf
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-8-randomization-universal-perfect-hashing/z0lJ2k0sl1g.pdf
    title: 3play pdf file
    type: null
    uid: 2bdf2d018dd29ed93f84c300b2c95e25
  - id: Caption-3Play YouTube id-SRT
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a57f9a63b590d85d5bbc466eadf38749
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f810217d384220887687303e1b573a98
  - id: Video-YouTube-Stream
    media_location: z0lJ2k0sl1g
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    title: Video-YouTube-Stream
    type: Video
    uid: ddcd17cbdc89a79c68a740fc92ca31b6
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/z0lJ2k0sl1g/default.jpg'
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5cdce8d11161f4d9ee8f36eb7902fded
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    title: Video-iTunes U-MP4
    type: Video
    uid: ac70dd9d24b9355a6a5ffbee2b157113
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec08_300k.mp4'
    parent_uid: f5041f11c09b8737ac786cae5fb98fb9
    title: Video-Internet Archive-MP4
    type: Video
    uid: 81c6591cb1b94adbe0bb957d746d0d1d
inline_embed_id: '69038584lecture8:randomization:universal&perfecthashing13248889'
order_index: 177
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-8-randomization-universal-perfect-hashing
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-8-randomization-universal-perfect-hashing
title: 'Lecture 8: Randomization: Universal & Perfect Hashing'
transcript: >-
  <p><span m="90">The</span> <span m="190">following</span> <span
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
  m="12800">materials</span> <span m="13340">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="22420">ERIK DEMAINE: All</span> <span m="22540">right,</span> <span
  m="22770">let's</span> <span m="22990">get</span> <span
  m="23160">started.</span> <span m="25460">Today</span> <span
  m="26300">we're</span> <span m="26540">going</span> <span m="26760">to</span>
  <span m="26900">continue</span> <span m="27320">the</span> <span
  m="27450">theme</span> <span m="27750">of</span> <span
  m="27910">randomization</span> <span m="29060">and</span> <span
  m="29580">data</span> <span m="29800">structures.</span> <span
  m="30320">Last</span> <span m="30540">time</span> <span m="30720">we</span>
  <span m="30810">saw</span> <span m="31080">skip</span> <span
  m="31570">lists.</span> <span m="31880">Skip</span> <span
  m="32200">lists</span> <span m="33450">solve</span> <span m="34090">the</span>
  <span m="34470">predecessor-successor</span> <span m="35710">problem.</span>
  <span m="36010">You</span> <span m="36150">can</span> <span
  m="36300">search</span> <span m="36620">for</span> <span m="36730">an</span>
  <span m="36830">item and</span> <span m="37110">if</span> <span
  m="37300">it's</span> <span m="37450">not</span> <span m="37770">there,</span>
  <span m="38080">you</span> <span m="38220">get</span> <span
  m="38520">the</span> <span m="38900">closest</span> <span
  m="39400">item</span> <span m="39690">on</span> <span m="39850">either</span>
  <span m="40130">side</span> <span m="40870">in</span> <span
  m="41100">log</span> <span m="41520">n</span> <span m="41660">with</span>
  <span m="41800">high</span> <span m="41950">probability.</span></p><p><span
  m="43840">But</span> <span m="44070">we</span> <span m="44220">already</span>
  <span m="44420">knew</span> <span m="44550">how</span> <span
  m="44670">to</span> <span m="44780">do</span> <span m="44890">that</span>
  <span m="45080">deterministically.</span> <span m="46650">Today</span> <span
  m="47110">we're</span> <span m="47320">going</span> <span m="47450">to</span>
  <span m="47530">solve</span> <span m="47980">a</span> <span
  m="48040">slightly</span> <span m="48430">different</span> <span
  m="48880">problem,</span> <span m="49400">the</span> <span
  m="49540">dictionary</span> <span m="50080">problem</span> <span
  m="51180">with</span> <span m="51390">hash</span> <span
  m="51650">tables.</span> <span m="52000">Something</span> <span
  m="52340">you</span> <span m="52540">already</span> <span
  m="53590">think</span> <span m="53880">you</span> <span m="54010">know.</span>
  <span m="54610">But</span> <span m="55410">we're</span> <span
  m="55560">going</span> <span m="55680">to</span> <span m="55740">show</span>
  <span m="55940">you</span> <span m="56460">how</span> <span
  m="56560">much</span> <span m="56790">you</span> <span m="56940">didn't</span>
  <span m="57230">know.</span> <span m="57450">But</span> <span
  m="57600">after</span> <span m="57890">today</span> <span m="58180">you</span>
  <span m="58310">will</span> <span m="58440">know.</span></p><p><span
  m="60080">And</span> <span m="60840">we're</span> <span m="61020">going</span>
  <span m="61170">to</span> <span m="61230">get</span> <span
  m="61580">constant</span> <span m="62160">time</span> <span
  m="63720">and</span> <span m="63950">not</span> <span m="64160">with</span>
  <span m="64269">high</span> <span m="64440">probability.</span> <span
  m="65030">That's</span> <span m="65480">hard.</span> <span
  m="66110">But</span> <span m="66280">we'll</span> <span m="66570">do</span>
  <span m="66730">constant</span> <span m="67240">expected</span> <span
  m="67730">time.</span> <span m="68640">So</span> <span m="70330">that's</span>
  <span m="70730">in</span> <span m="70840">some</span> <span
  m="71000">sense</span> <span m="71260">better.</span> <span
  m="71870">It's</span> <span m="72010">going</span> <span m="72100">to</span>
  <span m="72150">solve</span> <span m="72340">a</span> <span
  m="72420">weaker</span> <span m="72740">problem.</span> <span
  m="73250">But</span> <span m="73480">we're</span> <span m="73600">going</span>
  <span m="73740">to</span> <span m="73790">get</span> <span
  m="74420">tighter</span> <span m="75160">bound</span> <span
  m="75590">constant</span> <span m="75970">instead</span> <span
  m="76230">of</span> <span m="76320">logarithmic.</span></p><p><span
  m="77940">So</span> <span m="78330">for</span> <span m="78530">starters</span>
  <span m="79120">let</span> <span m="79280">me</span> <span
  m="79440">remind</span> <span m="79900">you</span> <span m="81130">what</span>
  <span m="81440">problem</span> <span m="81830">we're</span> <span
  m="81970">solving</span> <span m="82830">and</span> <span m="83430">the</span>
  <span m="83740">basics</span> <span m="84210">of</span> <span
  m="84870">hashing</span> <span m="85400">which</span> <span
  m="85690">you</span> <span m="86100">learned</span> <span m="86470">in</span>
  <span m="86740">6006.</span> <span m="90770">I'm</span> <span
  m="90920">going</span> <span m="91000">to</span> <span m="91050">give</span>
  <span m="91200">this</span> <span m="91380">problem</span> <span
  m="91700">a</span> <span m="91790">name</span> <span m="92260">because</span>
  <span m="92600">it's</span> <span m="93760">important</span> <span
  m="94600">and</span> <span m="96080">we</span> <span m="96410">often</span>
  <span m="96650">forget</span> <span m="97070">to</span> <span
  m="97230">distinguish</span> <span m="97880">between</span> <span
  m="99840">two</span> <span m="100090">types</span> <span m="100500">of</span>
  <span m="100900">things.</span> <span m="104070">This is</span> <span
  m="104350">kind</span> <span m="104510">of</span> <span m="104590">an</span>
  <span m="104720">old</span> <span m="104990">term,</span> <span
  m="106350">but</span> <span m="106540">I</span> <span m="106650">would</span>
  <span m="106810">call</span> <span m="107060">this</span> <span
  m="107350">an</span> <span m="107660">abstract</span> <span
  m="108990">data</span> <span m="109260">type.</span></p><p><span
  m="111400">This</span> <span m="111610">is</span> <span m="111710">just</span>
  <span m="111960">the</span> <span m="112820">problem</span> <span
  m="113260">specification</span> <span m="114290">of</span> <span
  m="114790">what</span> <span m="114960">you're</span> <span
  m="115090">trying</span> <span m="115380">to</span> <span
  m="115470">do.</span> <span m="116580">You</span> <span
  m="116700">might</span> <span m="116840">call</span> <span
  m="116980">this</span> <span m="117120">an</span> <span
  m="117200">interface</span> <span m="117810">or</span> <span
  m="117880">something.</span> <span m="118780">This is</span> <span
  m="118910">the</span> <span m="119150">problem</span> <span
  m="119490">statement</span> <span m="119980">versus</span> <span
  m="120280">the</span> <span m="120410">data</span> <span m="120670">structure
  is</span> <span m="121120">how</span> <span m="121240">you</span> <span
  m="121400">actually</span> <span m="121750">solve</span> <span
  m="122090">it.</span> <span m="122220">The</span> <span m="122400">hash</span>
  <span m="122690">tables</span> <span m="123100">are</span> <span
  m="123190">the</span> <span m="123300">data</span> <span
  m="123510">structure.</span> <span m="124330">The</span> <span
  m="124380">dictionary</span> <span m="125010">is</span> <span
  m="125210">the</span> <span m="125800">problem</span> <span
  m="126270">or</span> <span m="126380">the</span> <span
  m="126510">abstract</span> <span m="126880">data</span> <span
  m="127090">type.</span> <span m="128300">So</span> <span
  m="128660">what</span> <span m="128800">we're</span> <span
  m="128910">trying</span> <span m="129199">to</span> <span m="129360">do</span>
  <span m="129570">today,</span> <span m="131480">as</span> <span
  m="131740">in</span> <span m="131860">most</span> <span m="132130">data</span>
  <span m="132330">structures,</span> <span m="132890">is</span> <span
  m="133070">maintain</span> <span m="133530">a</span> <span
  m="133600">dynamic</span> <span m="134090">set</span> <span
  m="134280">of</span> <span m="134380">items.</span></p><p><span
  m="138150">And</span> <span m="138520">here</span> <span m="138720">I'm</span>
  <span m="138780">going</span> <span m="138910">to</span> <span
  m="139000">distinguish</span> <span m="139470">between</span> <span
  m="139810">the</span> <span m="139970">items</span> <span
  m="140920">and</span> <span m="141210">their</span> <span
  m="141370">keys.</span> <span m="144310">Each</span> <span
  m="144570">item</span> <span m="144890">has</span> <span m="145120">a</span>
  <span m="145180">key.</span> <span m="146190">And</span> <span
  m="146380">normally you'd</span> <span m="146760">think</span> <span
  m="146970">of</span> <span m="147070">there</span> <span
  m="147220">also</span> <span m="147440">being</span> <span m="147660">a</span>
  <span m="147690">value</span> <span m="148230">like</span> <span
  m="148460">in</span> <span m="148540">Python.</span> <span
  m="149640">But</span> <span m="149840">we're</span> <span
  m="150280">just</span> <span m="150520">worrying</span> <span
  m="150830">about</span> <span m="151090">the</span> <span
  m="151170">keys</span> <span m="151500">and</span> <span m="151590">moving
  the</span> <span m="151910">items</span> <span m="152230">around.</span> <span
  m="153760">And</span> <span m="154360">we</span> <span m="154420">want</span>
  <span m="154570">to</span> <span m="154630">support</span> <span
  m="156270">three</span> <span m="156540">operations.</span> <span
  m="159770">We</span> <span m="160000">want</span> <span m="160180">to</span>
  <span m="160230">be</span> <span m="160370">able</span> <span
  m="160590">to</span> <span m="160930">insert</span> <span m="161370">an</span>
  <span m="161460">item,</span> <span m="165920">delete</span> <span
  m="166290">an</span> <span m="166420">item,</span> <span m="173170">and</span>
  <span m="173450">search</span> <span m="173710">for</span> <span
  m="173810">an</span> <span m="173900">item.</span></p><p><span
  m="178920">But</span> <span m="179460">search</span> <span
  m="179790">is</span> <span m="179890">going</span> <span m="180090">to</span>
  <span m="180160">be</span> <span m="180290">different</span> <span
  m="180780">from</span> <span m="182130">what</span> <span m="182340">we</span>
  <span m="182450">know</span> <span m="182590">from</span> <span
  m="183050">AVL</span> <span m="183150">trees</span> <span m="183600">or</span>
  <span m="183690">skip</span> <span m="184000">lists</span> <span
  m="184380">or</span> <span m="184570">even</span> <span
  m="184770">Venom</span> <span m="185400">[INAUDIBLE]</span> <span
  m="186470">That</span> <span m="186610">was</span> <span m="186760">a</span>
  <span m="186830">predecessor-successor</span> <span m="188120">search.</span>
  <span m="188820">Here</span> <span m="188990">we</span> <span
  m="189120">just</span> <span m="189370">want</span> <span m="189560">to</span>
  <span m="189630">know--</span> <span m="190430">sorry,</span> <span
  m="190830">your</span> <span m="191230">not</span> <span
  m="191300">searching</span> <span m="191580">for</span> <span
  m="191720">an</span> <span m="191810">item.</span> <span
  m="192070">Usually</span> <span m="192400">you're</span> <span
  m="192480">searching</span> <span m="192810">for</span> <span m="192980">just
  a</span> <span m="193270">key--</span> <span m="197490">here</span> <span
  m="197760">you</span> <span m="197850">just</span> <span
  m="198060">want</span> <span m="198200">to</span> <span m="198260">know</span>
  <span m="198680">is</span> <span m="198890">there</span> <span
  m="199050">any</span> <span m="199290">item</span> <span
  m="199570">with</span> <span m="199710">that</span> <span
  m="199930">key,</span> <span m="200840">and</span> <span
  m="201640">return</span> <span m="201980">it.</span> <span
  m="208880">This</span> <span m="209070">is</span> <span
  m="209190">often</span> <span m="209570">called</span> <span
  m="210740">an</span> <span m="210860">exact</span> <span
  m="211370">search</span> <span m="211980">because</span> <span
  m="212530">if</span> <span m="212720">the</span> <span m="212820">key</span>
  <span m="212990">is</span> <span m="213110">not</span> <span
  m="213330">in</span> <span m="213430">there,</span> <span
  m="213600">you</span> <span m="213740">learn</span> <span
  m="213990">absolutely</span> <span m="214570">nothing.</span> <span
  m="216310">You</span> <span m="216430">can't</span> <span
  m="216800">find</span> <span m="217060">the</span> <span
  m="217140">nearest</span> <span m="217670">key.</span></p><p><span
  m="218400">And</span> <span m="218620">for</span> <span
  m="218720">whatever</span> <span m="219000">reason</span> <span
  m="219290">this</span> <span m="219450">is</span> <span
  m="219560">called</span> <span m="220310">a</span> <span
  m="220390">dictionary</span> <span m="220840">problem</span> <span
  m="221480">though</span> <span m="221810">it's</span> <span m="222230">unlike
  a</span> <span m="222320">real</span> <span m="222530">dictionary.</span>
  <span m="223150">Usually</span> <span m="223520">when</span> <span
  m="223630">you</span> <span m="223690">search</span> <span m="223920">for
  a</span> <span m="224090">word</span> <span m="224220">you</span> <span
  m="224390">do</span> <span m="224540">find</span> <span m="224790">its</span>
  <span m="224910">neighbors.</span> <span m="225820">Here</span> <span
  m="226540">we're</span> <span m="226760">just</span> <span
  m="227000">going</span> <span m="227130">to</span> <span
  m="227400">either--</span> <span m="227800">if</span> <span
  m="227960">the</span> <span m="228040">key's</span> <span
  m="228280">there</span> <span m="228510">we</span> <span
  m="228610">find</span> <span m="228830">that,</span> <span
  m="229530">otherwise</span> <span m="229920">not.</span> <span
  m="230630">And</span> <span m="230830">this</span> <span m="230990">is</span>
  <span m="231030">exactly</span> <span m="232490">what</span> <span
  m="233230">a</span> <span m="233310">Python</span> <span
  m="233680">dictionary</span> <span m="234290">implements.</span> <span
  m="235930">So</span> <span m="236280">I</span> <span m="236440">guess</span>
  <span m="236650">that's</span> <span m="236860">why</span> <span
  m="237250">Python</span> <span m="237560">dictionaries</span> <span
  m="238000">are</span> <span m="238090">called</span> <span
  m="239190">dicts.</span></p><p><span m="240980">So</span> <span
  m="243010">today</span> <span m="243420">I'm</span> <span
  m="243550">going</span> <span m="243760">to</span> <span
  m="243880">assume</span> <span m="244910">all</span> <span
  m="245140">items</span> <span m="245480">have</span> <span
  m="245630">distinct</span> <span m="246050">keys.</span> <span
  m="247540">So</span> <span m="247760">in</span> <span m="247850">the</span>
  <span m="247950">insertion</span> <span m="248580">I</span> <span
  m="248710">will</span> <span m="248900">assume</span> <span
  m="250570">key</span> <span m="252030">is</span> <span m="252440">not</span>
  <span m="252780">already</span> <span m="253480">in</span> <span
  m="253650">the</span> <span m="253760">table.</span> <span
  m="257760">With</span> <span m="258430">a</span> <span
  m="258529">little</span> <span m="258730">bit</span> <span
  m="258850">of</span> <span m="258920">work,</span> <span m="259220">you</span>
  <span m="259370">can</span> <span m="261769">allow</span> <span
  m="262260">inserting</span> <span m="262730">an</span> <span
  m="262830">item</span> <span m="263140">with</span> <span m="263320">an</span>
  <span m="263390">existing</span> <span m="263770">key,</span> <span
  m="264040">and</span> <span m="264100">you</span> <span m="264200">just</span>
  <span m="264400">overwrite</span> <span m="265650">that</span> <span
  m="266250">existing</span> <span m="266710">item.</span> <span
  m="267560">But</span> <span m="267750">I don't</span> <span
  m="267910">want</span> <span m="268080">to</span> <span
  m="268150">worry</span> <span m="268310">about</span> <span
  m="268530">that</span> <span m="268660">here.</span></p><p><span
  m="271540">So</span> <span m="271780">we</span> <span m="271940">could,</span>
  <span m="272110">of</span> <span m="272200">course,</span> <span
  m="272500">solve</span> <span m="272830">this</span> <span
  m="273090">using</span> <span m="273560">an</span> <span m="273640">AVL</span>
  <span m="273970">tree</span> <span m="274300">in</span> <span
  m="274620">log</span> <span m="274680">n</span> <span m="275030">time.</span>
  <span m="276010">But</span> <span m="276210">our</span> <span
  m="276370">goal</span> <span m="276690">is</span> <span m="276870">to</span>
  <span m="277000">do</span> <span m="277150">better</span> <span
  m="277460">because</span> <span m="277720">it's</span> <span
  m="278570">an</span> <span m="278730">easier</span> <span
  m="278990">problem.</span> <span m="280720">And</span> <span
  m="281600">I'm</span> <span m="281740">going</span> <span m="281850">to</span>
  <span m="281910">remind</span> <span m="282320">you</span> <span
  m="282530">of</span> <span m="282770">the</span> <span
  m="282910">simplest</span> <span m="283510">way</span> <span
  m="284250">you</span> <span m="284380">learn</span> <span m="284540">to</span>
  <span m="284660">do</span> <span m="284800">this</span> <span
  m="285010">which</span> <span m="285460">was</span> <span
  m="285720">hashing</span> <span m="286130">with</span> <span
  m="286260">chaining</span> <span m="290030">in 006.</span> <span
  m="290950">And</span> <span m="291130">the</span> <span
  m="291250">catch</span> <span m="291600">is</span> <span m="291920">you
  didn't</span> <span m="292220">really</span> <span m="292640">analyze</span>
  <span m="293880">this</span> <span m="294320">in</span> <span
  m="294570">006.</span> <span m="297930">So</span> <span m="298220">we're
  going</span> <span m="298505">make a</span> <span m="298790">constant</span>
  <span m="301840">time</span> <span m="302300">per</span> <span
  m="302400">operation.</span> <span m="306950">It's</span> <span
  m="307100">going</span> <span m="307200">to</span> <span m="307340">be</span>
  <span m="308012">expected</span> <span m="312080">or</span> <span
  m="312170">something</span> <span m="313510">and</span> <span
  m="313920">linear</span> <span m="314270">space.</span></p><p><span
  m="318230">And</span> <span m="319800">remember</span> <span
  m="320240">the</span> <span m="321630">variables</span> <span
  m="322030">we</span> <span m="322120">care</span> <span
  m="322340">about,</span> <span m="323040">there's</span> <span
  m="323916">u,</span> <span m="324792">n,</span> <span m="325770">and</span>
  <span m="325930">m.</span> <span m="327330">So u</span> <span
  m="327650">is</span> <span m="327800">the</span> <span m="327880">size</span>
  <span m="328190">of</span> <span m="328230">the</span> <span
  m="328390">universe.</span> <span m="328860">This</span> <span
  m="328930">is</span> <span m="329080">the</span> <span m="329740">all</span>
  <span m="330010">possible</span> <span m="330570">keys.</span> <span
  m="330970">The</span> <span m="331070">space</span> <span m="331380">of</span>
  <span m="331470">all</span> <span m="331640">possible</span> <span
  m="332060">keys.</span> <span m="338900">n</span> <span m="339340">is</span>
  <span m="340040">the</span> <span m="340160">size</span> <span
  m="340650">of</span> <span m="341000">the</span> <span m="341160">set</span>
  <span m="341490">your</span> <span m="341610">currently</span> <span
  m="342000">storing.</span> <span m="342460">So</span> <span
  m="342600">that's</span> <span m="342880">the</span> <span
  m="343000">number</span> <span m="344280">of</span> <span
  m="344690">items</span> <span m="345200">or</span> <span
  m="345390">keys</span> <span m="347130">currently</span> <span
  m="348150">in</span> <span m="348300">the</span> <span m="348380">data</span>
  <span m="348600">structure.</span> <span m="354510">And</span> <span
  m="354690">then</span> <span m="355370">m</span> <span m="355680">is</span>
  <span m="355800">the</span> <span m="355890">size</span> <span
  m="356160">of</span> <span m="356200">your</span> <span
  m="356330">table.</span> <span m="357950">So</span> <span
  m="358260">say</span> <span m="358430">it's</span> <span m="358620">the</span>
  <span m="358760">number</span> <span m="359120">of</span> <span
  m="359400">slots</span> <span m="360900">in</span> <span m="360980">the</span>
  <span m="361100">table.</span></p><p><span m="364460">So</span> <span
  m="364700">you</span> <span m="364860">remember</span> <span
  m="365070">the</span> <span m="365170">picture.</span> <span
  m="365760">You</span> <span m="365780">have</span> <span m="365990">a</span>
  <span m="366050">table</span> <span m="367980">of</span> <span
  m="368370">slots.</span> <span m="370630">Let's</span> <span
  m="371260">say</span> <span m="371530">0</span> <span m="371730">to</span>
  <span m="371880">m</span> <span m="372090">minus</span> <span
  m="372390">1.</span> <span m="373340">Each</span> <span m="373540">of</span>
  <span m="373640">them</span> <span m="373850">is</span> <span
  m="373960">a</span> <span m="374020">pointer</span> <span m="374580">to</span>
  <span m="374710">a</span> <span m="374760">linked</span> <span
  m="375000">list.</span> <span m="378610">And</span> <span m="379020">if</span>
  <span m="379180">you</span> <span m="379300">have,</span> <span
  m="380370">let's</span> <span m="380520">say</span> <span
  m="380640">over</span> <span m="380820">here</span> <span m="381140">is</span>
  <span m="381370">your</span> <span m="381600">universe</span> <span
  m="382300">of</span> <span m="382530">all</span> <span
  m="382730">possible</span> <span m="383220">keys,</span> <span
  m="384660">then</span> <span m="384910">we</span> <span m="385030">have</span>
  <span m="385990">a</span> <span m="386040">hash</span> <span
  m="386380">function</span> <span m="386830">which</span> <span
  m="387050">maps</span> <span m="388030">each</span> <span
  m="388260">universe</span> <span m="388810">item</span> <span
  m="391190">into</span> <span m="391520">one</span> <span m="391700">of</span>
  <span m="391750">these</span> <span m="391910">slots.</span> <span
  m="392950">And</span> <span m="393010">then</span> <span m="393140">the</span>
  <span m="393230">linked</span> <span m="393470">list</span> <span
  m="393790">here</span> <span m="394450">is</span> <span
  m="394620">storing</span> <span m="395100">all</span> <span
  m="395390">of</span> <span m="395510">the</span> <span m="395660">items</span>
  <span m="396000">that</span> <span m="396120">hash</span> <span
  m="396410">to</span> <span m="396520">that</span> <span
  m="396800">slot.</span> <span m="398720">So</span> <span m="405970">we</span>
  <span m="406090">have</span> <span m="406310">a</span> <span
  m="406350">hash</span> <span m="406650">function</span> <span
  m="407640">which</span> <span m="407850">maps</span> <span
  m="409120">the</span> <span m="409280">universe.</span></p><p><span
  m="409810">I'm</span> <span m="409950">going</span> <span m="410170">to</span>
  <span m="410320">assume</span> <span m="410670">the</span> <span
  m="410760">universe</span> <span m="411260">has</span> <span
  m="411520">already</span> <span m="411830">been</span> <span
  m="412020">mapped</span> <span m="412340">into</span> <span
  m="412760">integers</span> <span m="413110">0</span> <span
  m="413390">to</span> <span m="413600">u</span> <span m="413910">minus
  1.</span> <span m="414685">And</span> <span m="415090">it maps</span> <span
  m="415630">to</span> <span m="416070">slots.</span> <span
  m="422660">And</span> <span m="423010">when</span> <span m="423300">we</span>
  <span m="423450">do</span> <span m="424200">hashing</span> <span
  m="424540">with</span> <span m="424630">chaining,</span> <span
  m="427280">I</span> <span m="427640">think</span> <span m="427800">I</span>
  <span m="427860">mentioned</span> <span m="428230">this</span> <span
  m="428580">last</span> <span m="428910">week,</span> <span
  m="429360">the</span> <span m="429450">bounds</span> <span
  m="429780">you</span> <span m="430110">get,</span> <span m="435450">we</span>
  <span m="435860">achieve</span> <span m="439883">a</span> <span
  m="440362">bound</span> <span m="440841">of</span> <span m="442760">1</span>
  <span m="443390">plus</span> <span m="443950">alpha</span> <span
  m="445282">where</span> <span m="445670">alpha</span> <span
  m="446210">is</span> <span m="446610">the</span> <span m="446730">load</span>
  <span m="447010">factor</span> <span m="448280">n/m.</span> <span
  m="449450">The</span> <span m="450340">average</span> <span
  m="450780">number</span> <span m="451140">of</span> <span
  m="451210">items</span> <span m="451510">you'd</span> <span
  m="451660">expect</span> <span m="452090">to</span> <span
  m="452390">hash</span> <span m="452680">to a</span> <span
  m="452860">slot</span> <span m="453300">is the</span> <span m="453650">number
  of</span> <span m="453950">items</span> <span m="454330">divided</span> <span
  m="454650">by</span> <span m="454790">the</span> <span
  m="454830">number</span> <span m="455040">of</span> <span
  m="455100">slots.</span> <span m="456710">OK.</span> <span
  m="458810">And</span> <span m="459000">you</span> <span
  m="459100">proved</span> <span m="459380">this</span> <span
  m="459630">in</span> <span m="459750">6006</span> <span m="461070">but</span>
  <span m="461560">you</span> <span m="461770">assumed</span> <span
  m="463460">something</span> <span m="463830">called</span> <span
  m="465990">simple</span> <span m="466450">uniform</span> <span
  m="466890">hashing.</span></p><p><span m="485590">Simple</span> <span
  m="485960">uniform</span> <span m="486360">hashing</span> <span
  m="486830">is</span> <span m="486970">an</span> <span
  m="487060">assumption,</span> <span m="488900">I think</span> <span
  m="489130">invented</span> <span m="489550">for</span> <span
  m="489680">CLRS.</span> <span m="490750">It</span> <span
  m="490880">makes</span> <span m="491120">the</span> <span
  m="491250">analysis</span> <span m="491770">very</span> <span
  m="491930">simple,</span> <span m="493380">but</span> <span
  m="493650">it's</span> <span m="493900">also</span> <span
  m="494350">basically</span> <span m="494830">cheating.</span> <span
  m="495480">So</span> <span m="495820">today</span> <span m="496220">our</span>
  <span m="496310">goal is</span> <span m="496630">to</span> <span
  m="496740">not</span> <span m="496980">cheat.</span> <span
  m="497820">It's</span> <span m="497990">nice</span> <span m="498410">as</span>
  <span m="498600">a</span> <span m="498660">warm</span> <span
  m="498920">up.</span> <span m="499690">But</span> <span m="500760">we</span>
  <span m="500850">don't</span> <span m="500960">like</span> <span
  m="501150">cheating.</span> <span m="501520">So</span> <span
  m="503830">you</span> <span m="503920">may</span> <span
  m="504100">recall</span> <span m="511692">the</span> <span
  m="512115">assumption</span> <span m="513130">is</span> <span
  m="513299">about</span> <span m="513539">the</span> <span
  m="513590">hash</span> <span m="513909">function.</span> <span
  m="514270">You</span> <span m="514390">want</span> <span m="514559">a</span>
  <span m="514620">good</span> <span m="514870">hash</span> <span
  m="515169">function.</span></p><p><span m="517740">And</span> <span
  m="518010">good</span> <span m="518280">means</span> <span
  m="521730">this.</span> <span m="523080">I</span> <span m="523250">want</span>
  <span m="523549">the</span> <span m="523750">probability</span> <span
  m="524530">of</span> <span m="524650">two</span> <span
  m="525070">distinct</span> <span m="525650">keys</span> <span
  m="526480">mapping</span> <span m="526960">to</span> <span
  m="527080">the</span> <span m="527190">same</span> <span
  m="527500">slot</span> <span m="528180">to</span> <span m="528420">be</span>
  <span m="528690">1/m</span> <span m="529855">if</span> <span m="530180">there
  are</span> <span m="530290">m</span> <span m="530480">slots.</span> <span
  m="531520">If</span> <span m="531980">everything</span> <span
  m="532420">was</span> <span m="532580">completely</span> <span
  m="533010">random,</span> <span m="533430">if</span> <span m="533560">h</span>
  <span m="533800">was</span> <span m="533930">basically</span> <span
  m="534270">choosing</span> <span m="534580">a</span> <span
  m="534640">random</span> <span m="534920">number</span> <span
  m="535210">for</span> <span m="535380">every</span> <span
  m="535790">key,</span> <span m="537290">then</span> <span
  m="538030">that's</span> <span m="538250">what</span> <span
  m="538380">we</span> <span m="538520">would</span> <span
  m="538640">expect</span> <span m="539000">to</span> <span
  m="539050">happen.</span> <span m="540090">So</span> <span
  m="540260">this</span> <span m="540430">is</span> <span m="540540">like</span>
  <span m="540690">the</span> <span m="540840">idealized</span> <span
  m="541430">scenario.</span></p><p><span m="542550">Now,</span> <span
  m="542860">we</span> <span m="543090">can't</span> <span
  m="543390">have</span> <span m="543630">a</span> <span m="543670">hash</span>
  <span m="543930">function</span> <span m="544270">could</span> <span
  m="544830">choosing</span> <span m="545930">a</span> <span
  m="546070">random</span> <span m="546370">number</span> <span
  m="546660">for</span> <span m="546820">every</span> <span
  m="547090">key</span> <span m="547280">because</span> <span
  m="547470">it</span> <span m="547530">has</span> <span m="547690">to</span>
  <span m="547800">choose</span> <span m="548060">the</span> <span
  m="548180">same</span> <span m="548510">value</span> <span
  m="548820">if</span> <span m="548910">you</span> <span m="548980">give</span>
  <span m="549140">it</span> <span m="549250">the</span> <span
  m="549330">same</span> <span m="549720">key.</span> <span m="550520">So</span>
  <span m="550640">it</span> <span m="550700">has</span> <span
  m="550870">to</span> <span m="550950">be</span> <span m="551060">some</span>
  <span m="551420">kind</span> <span m="551710">of</span> <span
  m="552750">deterministic</span> <span m="553650">strategy</span> <span
  m="554160">or at least</span> <span m="554500">repeatable</span> <span
  m="555010">strategy</span> <span m="555450">where</span> <span
  m="555570">if</span> <span m="555640">you</span> <span m="555720">plug
  in</span> <span m="556040">the</span> <span m="556110">same</span> <span
  m="556370">key</span> <span m="556480">you</span> <span m="556590">get</span>
  <span m="556760">the</span> <span m="556840">same</span> <span
  m="557120">thing.</span> <span m="558570">So</span> <span
  m="558780">really</span> <span m="559210">what</span> <span
  m="559370">this</span> <span m="559530">assumption</span> <span
  m="559980">is</span> <span m="560090">saying</span> <span m="560520">is</span>
  <span m="560770">that</span> <span m="562780">the</span> <span
  m="562970">key's</span> <span m="563450">that</span> <span
  m="563620">you</span> <span m="564260">give</span> <span m="565650">are</span>
  <span m="567430">in</span> <span m="567580">some</span> <span
  m="567780">sense</span> <span m="568030">random.</span> <span
  m="568750">If</span> <span m="568820">I</span> <span m="568880">give</span>
  <span m="569090">you</span> <span m="569550">random</span> <span
  m="569840">keys</span> <span m="570230">and</span> <span m="570330">I</span>
  <span m="570380">have</span> <span m="571360">not-too-crazy</span> <span
  m="572830">hash</span> <span m="573100">function</span> <span
  m="573970">then</span> <span m="574150">this</span> <span
  m="574250">will</span> <span m="574430">be</span> <span
  m="574590">true.</span></p><p><span m="576460">But</span> <span
  m="577350">I</span> <span m="577500">don't</span> <span m="577680">like</span>
  <span m="577920">assuming</span> <span m="578370">anything</span> <span
  m="578680">about</span> <span m="578900">the</span> <span m="578990">keys
  maybe.</span> <span m="579630">I</span> <span m="579720">want</span> <span
  m="579960">my</span> <span m="580070">keys</span> <span m="580370">to</span>
  <span m="580470">be</span> <span m="580620">worst</span> <span
  m="580940">case</span> <span m="583000">maybe.</span> <span
  m="584190">There</span> <span m="584370">are</span> <span
  m="584530">lots</span> <span m="584810">of</span> <span
  m="584850">examples</span> <span m="585430">in</span> <span
  m="586300">the</span> <span m="586410">real</span> <span
  m="586650">world</span> <span m="587060">where</span> <span
  m="587810">you</span> <span m="587950">apply</span> <span
  m="588190">some</span> <span m="588350">hash</span> <span
  m="588600">function</span> <span m="589000">and it</span> <span
  m="589240">turns out</span> <span m="589330">your</span> <span
  m="589450">data</span> <span m="589710">has</span> <span
  m="589970">some</span> <span m="590010">very</span> <span
  m="590270">particular</span> <span m="590750">structure.</span> <span
  m="591660">And</span> <span m="591910">if</span> <span m="592000">you</span>
  <span m="592100">choose</span> <span m="592320">a</span> <span
  m="592380">bad</span> <span m="592600">hash</span> <span
  m="592850">function,</span> <span m="593260">then</span> <span
  m="594610">your</span> <span m="594890">hash</span> <span
  m="595110">table</span> <span m="595380">gets</span> <span
  m="595530">really,</span> <span m="595870">really</span> <span
  m="595990">slow.</span> <span m="596350">Maybe</span> <span
  m="596480">everything</span> <span m="596880">hashes</span> <span
  m="597250">to</span> <span m="597330">the</span> <span m="597450">same</span>
  <span m="597700">slot.</span> <span m="600250">Or</span> <span
  m="600740">say</span> <span m="600980">you</span> <span
  m="601110">take--</span> <span m="601930">well</span> <span
  m="602390">yeah,</span> <span m="602590">there</span> <span
  m="602920">are</span> <span m="602960">lots</span> <span m="603230">of</span>
  <span m="603270">examples</span> <span m="603660">of</span> <span
  m="603710">that.</span> <span m="605440">We</span> <span
  m="605550">want</span> <span m="605720">to</span> <span
  m="605770">avoid</span> <span m="606090">that.</span></p><p><span
  m="606360">After</span> <span m="606710">today</span> <span
  m="607150">you</span> <span m="607300">will</span> <span
  m="607450">know</span> <span m="608150">how</span> <span m="608420">to</span>
  <span m="608560">achieve</span> <span m="609650">constant</span> <span
  m="609950">expected</span> <span m="610390">time</span> <span
  m="610650">no</span> <span m="610750">matter</span> <span
  m="611070">what</span> <span m="611290">your</span> <span
  m="611420">keys</span> <span m="611770">are,</span> <span
  m="612110">for</span> <span m="612260">worst</span> <span
  m="612540">case</span> <span m="612790">keys.</span> <span
  m="614580">But</span> <span m="614720">it's</span> <span
  m="614910">going</span> <span m="615020">to</span> <span
  m="615100">take</span> <span m="615290">some</span> <span
  m="615460">work</span> <span m="615660">to</span> <span m="615770">do</span>
  <span m="615930">that.</span> <span m="618140">So</span> <span
  m="618310">this</span> <span m="618530">assumption</span> <span
  m="619220">requires</span> <span m="625540">assuming</span> <span
  m="626080">that</span> <span m="626290">the</span> <span
  m="626390">keys</span> <span m="627420">are</span> <span
  m="627600">random.</span> <span m="632460">And</span> <span
  m="632620">this</span> <span m="632760">is</span> <span m="632880">what</span>
  <span m="633040">we</span> <span m="633170">would</span> <span
  m="633290">call</span> <span m="633590">an</span> <span
  m="633730">average</span> <span m="634160">case</span> <span
  m="634430">analysis.</span></p><p><span m="641390">You</span> <span
  m="641540">might</span> <span m="641780">think</span> <span
  m="641970">that</span> <span m="642100">average</span> <span
  m="642390">case</span> <span m="642590">analysis</span> <span
  m="643010">is</span> <span m="643170">necessary</span> <span
  m="644370">for</span> <span m="644880">randomized</span> <span
  m="645370">algorithms,</span> <span m="645800">but</span> <span
  m="645930">that's</span> <span m="646160">not</span> <span
  m="646380">true.</span> <span m="647800">And</span> <span m="648010">we</span>
  <span m="648100">saw</span> <span m="648350">that</span> <span
  m="649020">last</span> <span m="649340">week</span> <span
  m="649490">with</span> <span m="649630">quicksort.</span> <span
  m="650580">Quicksort,</span> <span m="651200">if</span> <span
  m="651380">you</span> <span m="651510">say</span> <span m="652600">I</span>
  <span m="652790">will</span> <span m="652960">always</span> <span
  m="653300">choose</span> <span m="653900">a</span> <span m="654130">of</span>
  <span m="654210">1</span> <span m="654660">to</span> <span
  m="654810">be</span> <span m="655140">my</span> <span
  m="655300">partition</span> <span m="655780">element,</span> <span
  m="656770">that's</span> <span m="657130">what</span> <span
  m="657340">the</span> <span m="657470">textbook</span> <span
  m="657850">calls</span> <span m="658060">basic</span> <span
  m="658550">quicksort,</span> <span m="659910">then</span> <span
  m="660770">for</span> <span m="660970">an</span> <span
  m="661050">average</span> <span m="661550">input</span> <span
  m="661910">that</span> <span m="662070">will</span> <span m="662210">do</span>
  <span m="662390">really</span> <span m="662640">well.</span> <span
  m="663830">If</span> <span m="663970">you</span> <span m="664050">have</span>
  <span m="664260">a</span> <span m="665600">uniform</span> <span
  m="666110">random</span> <span m="666490">permutation</span> <span
  m="667130">of</span> <span m="667210">items</span> <span m="667610">and</span>
  <span m="667680">you</span> <span m="667780">sort</span> <span
  m="668140">with</span> <span m="668360">the</span> <span
  m="668690">method</span> <span m="669050">of</span> <span
  m="669160">always</span> <span m="669480">choosing</span> <span
  m="669790">the</span> <span m="669870">first</span> <span
  m="670200">item</span> <span m="670450">as</span> <span m="670560">your</span>
  <span m="670690">partition,</span> <span m="671970">then</span> <span
  m="672190">that</span> <span m="672360">will</span> <span m="672470">be</span>
  <span m="672670">n</span> <span m="672820">log</span> <span
  m="673090">n</span> <span m="674680">on</span> <span m="674930">average</span>
  <span m="676090">if</span> <span m="676240">your</span> <span
  m="676360">data</span> <span m="677310">is</span> <span
  m="677600">average.</span></p><p><span m="678230">But</span> <span
  m="678590">we</span> <span m="678730">saw</span> <span m="679040">we</span>
  <span m="679270">could</span> <span m="679410">avoid</span> <span
  m="679900">that</span> <span m="680120">assumption</span> <span
  m="681270">by</span> <span m="681430">choosing</span> <span
  m="681850">a</span> <span m="681980">random</span> <span
  m="682440">pivot.</span> <span m="684000">If</span> <span
  m="684100">you</span> <span m="684200">choose</span> <span m="684280">a</span>
  <span m="684360">random</span> <span m="684730">pivot,</span> <span
  m="685650">then</span> <span m="685820">you</span> <span
  m="685920">don't</span> <span m="686070">need</span> <span
  m="686220">to</span> <span m="686260">assume</span> <span
  m="686510">anything</span> <span m="686890">about</span> <span
  m="687110">the</span> <span m="687210">input.</span> <span
  m="687500">You</span> <span m="687580">just</span> <span
  m="687780">need</span> <span m="687900">to</span> <span
  m="687940">assume</span> <span m="688220">that</span> <span
  m="688370">the</span> <span m="688450">pivots</span> <span
  m="688910">are</span> <span m="689220">random.</span> <span
  m="690060">So</span> <span m="690190">it's</span> <span m="690290">a</span>
  <span m="690340">big</span> <span m="690530">difference</span> <span
  m="690900">between</span> <span m="691180">assuming</span> <span
  m="691500">your</span> <span m="691640">inputs</span> <span
  m="692050">are</span> <span m="692130">random</span> <span
  m="692540">versus</span> <span m="692900">assuming</span> <span
  m="693320">your</span> <span m="693500">coin</span> <span
  m="693780">flips</span> <span m="694100">are</span> <span
  m="694170">random.</span> <span m="695230">It's</span> <span
  m="695340">pretty</span> <span m="695610">reasonable</span> <span
  m="696020">to assume</span> <span m="696290">you</span> <span
  m="696895">can</span> <span m="697210">flip</span> <span
  m="697620">coins.</span> <span m="699570">If</span> <span
  m="699610">you've</span> <span m="699730">got</span> <span
  m="699940">enough</span> <span m="700300">dexterity</span> <span
  m="700860">in</span> <span m="700980">your</span> <span
  m="701100">thumb</span> <span m="701430">then</span> <span
  m="701610">you</span> <span m="701720">can</span> <span m="701850">do</span>
  <span m="702010">it.</span></p><p><span m="703520">But</span> <span
  m="703620">it's</span> <span m="703780">not</span> <span m="703990">so</span>
  <span m="704150">reasonable to</span> <span m="704550">assume</span> <span
  m="704840">that</span> <span m="704960">your</span> <span
  m="705110">input</span> <span m="705420">is</span> <span
  m="705530">random.</span> <span m="705920">So</span> <span
  m="706190">we'd</span> <span m="706370">like</span> <span m="706550">to</span>
  <span m="706700">avoid</span> <span m="708250">average</span> <span
  m="708600">case</span> <span m="708820">analysis</span> <span
  m="709330">whenever</span> <span m="709670">we</span> <span
  m="709790">can,</span> <span m="710050">and</span> <span
  m="710160">that's</span> <span m="710380">the</span> <span m="710490">goal
  of</span> <span m="710820">today.</span> <span m="711220">So</span> <span
  m="711400">what</span> <span m="711540">you</span> <span m="711610">saw</span>
  <span m="711790">in</span> <span m="711920">006</span> <span
  m="712470">was</span> <span m="712610">essentially</span> <span
  m="713040">assuming</span> <span m="713960">the</span> <span
  m="714100">inputs</span> <span m="714470">are</span> <span
  m="714550">random.</span> <span m="715290">We're</span> <span
  m="715420">going</span> <span m="715510">to</span> <span m="715550">get</span>
  <span m="715740">rid</span> <span m="715920">of</span> <span
  m="716000">that</span> <span m="716300">unreasonable</span> <span
  m="716880">assumption</span> <span m="717310">today.</span> <span
  m="723860">So</span> <span m="724080">that's,</span> <span
  m="724835">in</span> <span m="725090">some</span> <span
  m="725160">sense,</span> <span m="725560">review</span> <span
  m="726030">from</span> <span m="726410">006.</span></p><p><span
  m="727780">I'm</span> <span m="727940">going</span> <span m="728140">to</span>
  <span m="728290">take</span> <span m="728560">a</span> <span
  m="728620">brief</span> <span m="729350">pause</span> <span
  m="730000">and</span> <span m="730210">tell</span> <span m="730330">you</span>
  <span m="730430">about</span> <span m="730590">the</span> <span
  m="730700">etymology</span> <span m="731300">of</span> <span
  m="731390">the</span> <span m="731480">word</span> <span
  m="731650">hash</span> <span m="732210">in</span> <span m="732530">case</span>
  <span m="732730">you're</span> <span m="732840">curious.</span> <span
  m="734220">Hash</span> <span m="734720">is an</span> <span
  m="735200">English</span> <span m="735530">word</span> <span
  m="736430">since</span> <span m="736840">the</span> <span
  m="738430">1650's,</span> <span m="743020">so</span> <span
  m="743150">it's</span> <span m="743240">pretty</span> <span
  m="743450">old.</span> <span m="745020">It</span> <span
  m="745200">means</span> <span m="746740">literally</span> <span
  m="747130">cut</span> <span m="747400">into</span> <span
  m="747740">small</span> <span m="748110">pieces.</span> <span
  m="749070">It's</span> <span m="749200">usually</span> <span
  m="749650">used</span> <span m="749910">in</span> <span m="749990">a</span>
  <span m="750080">culinary</span> <span m="750580">sense,</span> <span
  m="751520">like</span> <span m="752180">these</span> <span
  m="752350">days</span> <span m="752540">you</span> <span
  m="752630">have</span> <span m="752790">corned</span> <span
  m="753010">beef</span> <span m="753180">hash</span> <span m="753550">or</span>
  <span m="753630">something.</span></p><p><span m="756590">I'll put the</span>
  <span m="756680">definition</span> <span m="757015">over</span> <span
  m="757350">here.</span> <span m="765480">It</span> <span
  m="765720">comes</span> <span m="766170">from</span> <span
  m="766710">French,</span> <span m="769950">hacher,</span> <span
  m="776290">which</span> <span m="776690">means</span> <span
  m="780370">to</span> <span m="780480">chop</span> <span m="780790">up.</span>
  <span m="784320">You</span> <span m="784620">know</span> <span
  m="784860">it</span> <span m="785040">in</span> <span
  m="785380">English</span> <span m="785960">from</span> <span
  m="786240">the</span> <span m="786330">word</span> <span
  m="786470">hatchet.</span> <span m="788660">So</span> <span
  m="788930">it's</span> <span m="789060">the</span> <span
  m="789140">same</span> <span m="789870">derivation.</span> <span
  m="792800">And</span> <span m="793310">it</span> <span m="793400">comes</span>
  <span m="793760">from</span> <span m="794410">old</span> <span
  m="794630">French--</span> <span m="799200">I</span> <span
  m="799280">don't</span> <span m="799450">actually</span> <span
  m="799770">know</span> <span m="800260">whether</span> <span
  m="800520">that's</span> <span m="800800">&quot;hash-ay&quot;</span> <span
  m="800950">or</span> <span m="801280">&quot;hash&quot;</span> <span
  m="802060">but--</span> <span m="807460">which</span> <span
  m="807740">means</span> <span m="808080">axe.</span> <span
  m="810930">So</span> <span m="811130">you</span> <span m="811300">can</span>
  <span m="811420">see</span> <span m="811620">the</span> <span
  m="811740">derivation.</span> <span m="815940">If</span> <span
  m="816080">you</span> <span m="816200">look</span> <span
  m="816380">this</span> <span m="816570">up</span> <span m="816700">in</span>
  <span m="816980">OED</span> <span m="817440">or</span> <span
  m="817860">pick</span> <span m="818020">your</span> <span
  m="818120">favorite</span> <span m="818420">dictionary</span> <span
  m="818950">or</span> <span m="819190">even</span> <span
  m="819400">Google,</span> <span m="820290">that's</span> <span
  m="821070">what</span> <span m="821260">you</span> <span
  m="821370">find.</span></p><p><span m="821760">But</span> <span
  m="821980">in</span> <span m="822070">fact</span> <span
  m="822890">there's</span> <span m="823190">a</span> <span
  m="823460">new</span> <span m="823760">prevailing</span> <span
  m="824310">theory</span> <span m="825120">that</span> <span
  m="825430">in</span> <span m="825580">fact</span> <span m="825850">hash</span>
  <span m="826300">comes</span> <span m="826690">from</span> <span
  m="827790">another</span> <span m="828320">language</span> <span
  m="833290">which</span> <span m="833570">is</span> <span
  m="834020">Vulcan,</span> <span m="837640">la'ash,</span> <span
  m="838670">I</span> <span m="838720">mean</span> <span m="838830">you</span>
  <span m="838920">can</span> <span m="839080">see</span> <span
  m="839230">the</span> <span m="839340">derivation</span> <span
  m="840010">right?</span> <span m="841140">Actually</span> <span
  m="841490">means</span> <span m="841940">axe.</span> <span
  m="843160">So</span> <span m="844580">maybe</span> <span
  m="844890">French</span> <span m="845180">got</span> <span m="845320">it
  from</span> <span m="845390">Vulcan</span> <span m="846000">or</span> <span
  m="846060">vice</span> <span m="846330">versa</span> <span
  m="846800">but</span> <span m="847670">I</span> <span m="847790">think</span>
  <span m="848810">that's</span> <span m="849010">pretty</span> <span
  m="849220">clear.</span> <span m="850600">Live</span> <span
  m="850770">long</span> <span m="850990">and</span> <span
  m="851110">prosper,</span> <span m="852480">and</span> <span
  m="853050">farewell</span> <span m="853440">to</span> <span
  m="853520">Spock.</span> <span m="856720">Sad</span> <span
  m="857100">news</span> <span m="857240">of</span> <span m="857330">last</span>
  <span m="857610">week.</span></p><p><span m="860880">So</span> <span
  m="861260">enough</span> <span m="861630">about</span> <span
  m="862450">hashing.</span> <span m="862770">We'll</span> <span
  m="862910">come</span> <span m="863090">back</span> <span m="863290">to</span>
  <span m="863390">that</span> <span m="863950">in</span> <span
  m="864060">a</span> <span m="864120">little</span> <span
  m="864310">bit.</span> <span m="864870">But</span> <span
  m="865320">hash</span> <span m="865630">functions</span> <span
  m="866070">essentially</span> <span m="866620">take</span> <span
  m="866900">up</span> <span m="867050">this</span> <span m="867240">idea</span>
  <span m="867520">of</span> <span m="867600">taking</span> <span
  m="867900">your</span> <span m="868010">key,</span> <span
  m="868580">chopping</span> <span m="869020">up</span> <span
  m="869160">into</span> <span m="869390">pieces,</span> <span
  m="870410">and</span> <span m="870760">mixing</span> <span
  m="871140">it</span> <span m="871790">like</span> <span m="872040">in</span>
  <span m="872190">a</span> <span m="872310">good</span> <span
  m="873730">dish.</span> <span m="875910">All</span> <span
  m="875960">right,</span> <span m="876290">so</span> <span
  m="876770">we're</span> <span m="877000">going</span> <span
  m="877090">to</span> <span m="877170">cover</span> <span m="877500">two</span>
  <span m="877740">ways</span> <span m="878080">to</span> <span
  m="878190">get</span> <span m="879620">strong</span> <span
  m="880260">constant</span> <span m="880740">time</span> <span
  m="880990">bounds.</span> <span m="883340">Probably</span> <span
  m="883560">the</span> <span m="883640">most</span> <span
  m="883860">useful</span> <span m="884160">one</span> <span
  m="884310">is</span> <span m="884410">called</span> <span
  m="884580">universal</span> <span m="885120">hashing.</span> <span
  m="885560">We'll</span> <span m="885670">spend</span> <span m="885900">most of
  our</span> <span m="886270">time</span> <span m="886460">on</span> <span
  m="886570">that.</span></p><p><span m="887440">But</span> <span
  m="887640">the</span> <span m="887730">theoretically</span> <span
  m="888320">cooler</span> <span m="888710">one</span> <span
  m="888980">is</span> <span m="889100">called</span> <span
  m="889320">perfect</span> <span m="889650">hashing.</span> <span
  m="890760">Universal</span> <span m="891180">hashing,</span> <span
  m="891500">we're</span> <span m="891630">going</span> <span
  m="891750">to</span> <span m="891800">guarantee</span> <span
  m="892170">there</span> <span m="892270">are</span> <span
  m="892310">very</span> <span m="892510">few</span> <span
  m="892670">conflicts</span> <span m="893350">in</span> <span
  m="893470">expectation.</span> <span m="894580">Perfect</span> <span
  m="895000">hashing ,</span> <span m="895360">we're</span> <span
  m="895510">going</span> <span m="895630">to</span> <span
  m="895720">guarantee</span> <span m="896220">there are</span> <span
  m="896480">zero</span> <span m="896990">conflicts.</span> <span
  m="898240">The</span> <span m="898430">catch</span> <span
  m="898800">is,</span> <span m="900210">at</span> <span m="900250">least</span>
  <span m="900510">in</span> <span m="900600">its</span> <span
  m="900920">obvious</span> <span m="901310">form,</span> <span
  m="901570">it</span> <span m="901690">only</span> <span
  m="902000">works</span> <span m="902370">for</span> <span
  m="902720">static</span> <span m="903660">sets.</span> <span
  m="904290">If</span> <span m="904900">you</span> <span
  m="905690">forbid,</span> <span m="906070">insert,</span> <span
  m="906360">and</span> <span m="906460">delete</span> <span
  m="907070">and</span> <span m="907240">just</span> <span
  m="907480">want</span> <span m="907630">to</span> <span m="907700">do</span>
  <span m="907830">search,</span> <span m="908350">then</span> <span
  m="908980">perfect</span> <span m="909330">hashing</span> <span
  m="909690">is</span> <span m="909810">a</span> <span m="909870">good</span>
  <span m="910050">method.</span></p><p><span m="910930">So</span> <span
  m="911130">like</span> <span m="911300">if you're</span> <span
  m="911600">actually</span> <span m="911980">storing</span> <span
  m="912310">a</span> <span m="912340">dictionary,</span> <span
  m="913650">like</span> <span m="913890">the</span> <span
  m="914010">OED,</span> <span m="915350">English</span> <span
  m="915480">doesn't</span> <span m="915730">change</span> <span
  m="915970">that</span> <span m="916180">quickly.</span> <span
  m="916630">So</span> <span m="916840">you</span> <span m="917030">can</span>
  <span m="917170">afford</span> <span m="917530">to</span> <span
  m="918110">recompute</span> <span m="918250">your</span> <span
  m="918690">data</span> <span m="918910">structure</span> <span
  m="919330">whenever</span> <span m="919650">you</span> <span
  m="919950">release</span> <span m="920270">a</span> <span
  m="920310">new</span> <span m="920460">edition.</span> <span
  m="922430">But</span> <span m="922540">let's</span> <span
  m="922720">start</span> <span m="922920">with</span> <span
  m="923010">universal</span> <span m="923470">hashing.</span> <span
  m="923910">This</span> <span m="924110">is</span> <span m="924400">a</span>
  <span m="925460">nice</span> <span m="925720">powerful</span> <span
  m="926120">technique.</span> <span m="927600">It</span> <span
  m="927930">works</span> <span m="928140">for</span> <span
  m="928260">dynamic</span> <span m="928740">data.</span></p><p><span
  m="930030">Insert,</span> <span m="930490">delete,</span> <span m="930770">and
  search</span> <span m="931100">will</span> <span m="931190">be</span> <span
  m="931340">constant</span> <span m="932430">expected</span> <span
  m="933030">time</span> <span m="933730">with</span> <span m="933970">no</span>
  <span m="934320">assumptions</span> <span m="935100">about</span> <span
  m="935660">the</span> <span m="935830">input.</span> <span
  m="936340">So</span> <span m="936490">it</span> <span m="936540">will</span>
  <span m="936710">not</span> <span m="936960">be</span> <span
  m="937250">average</span> <span m="937560">case.</span> <span
  m="937800">It's</span> <span m="937940">in</span> <span m="938030">some</span>
  <span m="938200">sense</span> <span m="938450">worse</span> <span
  m="938740">case</span> <span m="939440">but</span> <span
  m="939680">randomized.</span> <span m="943000">So</span> <span
  m="943250">the</span> <span m="943410">idea</span> <span m="943790">is</span>
  <span m="944870">we</span> <span m="945000">need</span> <span
  m="945170">to</span> <span m="945260">do</span> <span
  m="945410">something</span> <span m="945850">random.</span> <span
  m="946320">If</span> <span m="946420">you</span> <span m="946490">just</span>
  <span m="946730">say,</span> <span m="947050">well,</span> <span
  m="947680">I</span> <span m="947720">choose</span> <span m="947980">one</span>
  <span m="948220">hash</span> <span m="948500">function</span> <span
  m="948900">once</span> <span m="949140">and</span> <span m="949240">for</span>
  <span m="949400">all,</span> <span m="949770">and</span> <span
  m="950050">I</span> <span m="950110">use</span> <span m="950340">that</span>
  <span m="950630">for</span> <span m="950750">my</span> <span
  m="950890">table,</span> <span m="951240">OK</span> <span
  m="951420">maybe</span> <span m="951690">my</span> <span
  m="951830">table</span> <span m="952160">doubles</span> <span
  m="952480">in</span> <span m="952570">size and</span> <span
  m="952930">I</span> <span m="953030">change</span> <span m="953330">the</span>
  <span m="953420">hash</span> <span m="953660">function.</span> <span
  m="954070">But</span> <span m="955620">there's</span> <span
  m="955830">no</span> <span m="956020">randomness</span> <span
  m="956660">there.</span></p><p><span m="957400">We</span> <span
  m="957750">need</span> <span m="957960">to</span> <span
  m="958150">introduce</span> <span m="958660">randomness</span> <span
  m="959270">somehow</span> <span m="959740">into</span> <span
  m="959940">this</span> <span m="960370">data</span> <span
  m="960610">structure.</span> <span m="961760">And</span> <span
  m="963320">the</span> <span m="963420">way</span> <span
  m="963560">we're</span> <span m="963670">going</span> <span
  m="963760">to</span> <span m="963830">do</span> <span m="963950">that</span>
  <span m="964090">is</span> <span m="964370">in</span> <span
  m="964530">how</span> <span m="964880">we</span> <span
  m="965050">choose</span> <span m="965440">the</span> <span
  m="965510">hash</span> <span m="965810">function.</span> <span
  m="967160">We're</span> <span m="967360">going</span> <span
  m="967590">to</span> <span m="967860">choose</span> <span
  m="969050">our</span> <span m="969250">hash</span> <span
  m="969570">function</span> <span m="973740">randomly</span> <span
  m="977580">from</span> <span m="977970">some</span> <span
  m="978230">set</span> <span m="978470">of</span> <span m="978550">hash</span>
  <span m="978830">functions.</span> <span m="979745">Call</span> <span
  m="980060">it</span> <span m="980090">h.</span> <span m="982430">This</span>
  <span m="982610">is</span> <span m="982730">going</span> <span
  m="982870">to</span> <span m="982940">be</span> <span m="983320">a</span>
  <span m="983560">universal</span> <span m="984590">hash</span> <span
  m="984890">family.</span> <span m="986220">We're</span> <span
  m="986330">going</span> <span m="986420">to</span> <span
  m="986460">imagine</span> <span m="986860">there</span> <span
  m="986970">are</span> <span m="987000">many</span> <span
  m="987370">possible</span> <span m="987740">hash</span> <span
  m="987970">functions</span> <span m="988310">we</span> <span
  m="988440">could</span> <span m="988590">choose.</span></p><p><span
  m="989260">If</span> <span m="989410">we</span> <span m="989490">choose</span>
  <span m="989750">one</span> <span m="990020">of</span> <span
  m="990080">them</span> <span m="990220">uniformly</span> <span
  m="990850">at</span> <span m="990950">random,</span> <span
  m="991780">that's</span> <span m="992020">a</span> <span
  m="992140">random</span> <span m="992560">choice.</span> <span
  m="993190">And</span> <span m="993350">that</span> <span
  m="993560">randomness</span> <span m="994120">is</span> <span
  m="994240">going</span> <span m="994430">to</span> <span m="994500">be</span>
  <span m="994640">enough</span> <span m="995500">that</span> <span
  m="995650">we</span> <span m="995910">no</span> <span m="996190">longer</span>
  <span m="996510">need</span> <span m="996680">to</span> <span
  m="996800">assume</span> <span m="997020">anything</span> <span
  m="997450">about</span> <span m="997690">the</span> <span
  m="997780">keys.</span> <span m="999750">So</span> <span
  m="1002600">for</span> <span m="1002800">that</span> <span
  m="1003010">to</span> <span m="1003110">work,</span> <span
  m="1003530">we</span> <span m="1003780">need</span> <span
  m="1004070">some</span> <span m="1004390">assumption</span> <span
  m="1004840">about</span> <span m="1005940">h.</span> <span
  m="1006800">Maybe</span> <span m="1007000">it's</span> <span
  m="1007120">just</span> <span m="1007610">a</span> <span
  m="1007680">set</span> <span m="1007880">of</span> <span
  m="1007980">one</span> <span m="1008240">hash</span> <span
  m="1008510">function.</span> <span m="1008900">That</span> <span
  m="1009070">wouldn't</span> <span m="1009310">add</span> <span
  m="1009480">much</span> <span m="1009680">randomness.</span> <span
  m="1010600">Two</span> <span m="1010960">also</span> <span
  m="1011340">would</span> <span m="1011470">not</span> <span
  m="1011710">add</span> <span m="1011890">much</span> <span
  m="1012060">randomness.</span> <span m="1012540">We</span> <span
  m="1012640">need</span> <span m="1012780">a</span> <span
  m="1012840">lot</span> <span m="1013080">of</span> <span
  m="1013160">them.</span></p><p><span m="1014130">And</span> <span
  m="1014300">so</span> <span m="1014420">we're</span> <span
  m="1014510">going</span> <span m="1014630">to</span> <span
  m="1014700">require</span> <span m="1015220">H</span> <span
  m="1015540">to</span> <span m="1015650">have</span> <span
  m="1015870">this</span> <span m="1016030">property.</span> <span
  m="1019070">And</span> <span m="1019360">we're</span> <span
  m="1019470">going</span> <span m="1019620">to</span> <span
  m="1019730">call</span> <span m="1020090">it</span> <span
  m="1021030">the</span> <span m="1021120">property</span> <span
  m="1021550">universality.</span> <span m="1024770">Generally you would</span>
  <span m="1025230">call it</span> <span m="1025599">a</span> <span
  m="1025710">universal</span> <span m="1027000">hash</span> <span
  m="1027440">family.</span> <span m="1031589">Just</span> <span
  m="1031900">a</span> <span m="1031950">set</span> <span m="1032140">of</span>
  <span m="1032210">hash</span> <span m="1032440">functions.</span> <span
  m="1034920">What</span> <span m="1035109">we</span> <span
  m="1035250">want</span> <span m="1036319">is</span> <span
  m="1036630">that--</span> <span m="1039210">so</span> <span
  m="1039400">we're</span> <span m="1039540">choosing</span> <span
  m="1040599">our</span> <span m="1040720">hash</span> <span
  m="1040990">function</span> <span m="1041390">h</span> <span
  m="1042050">from</span> <span m="1042329">H.</span> <span
  m="1043960">And</span> <span m="1044490">among</span> <span
  m="1044859">those</span> <span m="1045060">choices</span> <span
  m="1045490">we</span> <span m="1045640">want</span> <span
  m="1045849">the</span> <span m="1045930">probability</span> <span
  m="1048610">that</span> <span m="1048810">two</span> <span
  m="1049155">keys</span> <span m="1049500">hash</span> <span
  m="1049820">to</span> <span m="1049940">the</span> <span
  m="1050040">same</span> <span m="1050290">value</span> <span
  m="1051180">to</span> <span m="1051310">be</span> <span
  m="1051490">small.</span> <span m="1062520">I'll</span> <span
  m="1062640">say--</span> <span m="1069020">and</span> <span
  m="1070250">this</span> <span m="1070430">is</span> <span
  m="1070560">very</span> <span m="1070880">similar</span> <span
  m="1071610">looking</span> <span m="1072150">to</span> <span
  m="1074170">simple</span> <span m="1074500">uniform</span> <span
  m="1074930">hashing.</span> <span m="1075380">Looks</span> <span
  m="1075620">almost</span> <span m="1076090">the</span> <span
  m="1076160">same</span> <span m="1076460">here</span> <span
  m="1077550">except</span> <span m="1077790">I</span> <span
  m="1077880">switched</span> <span m="1078630">from</span> <span
  m="1078930">k1</span> <span m="1079130">and</span> <span m="1079340">k2</span>
  <span m="1079520">to</span> <span m="1079690">k and</span> <span
  m="1080110">k',</span> <span m="1080820">but</span> <span
  m="1081170">same</span> <span m="1081390">thing.</span></p><p><span
  m="1083470">But</span> <span m="1083760">what</span> <span
  m="1084050">we're</span> <span m="1084190">taking</span> <span
  m="1084600">the</span> <span m="1084720">probability</span> <span
  m="1085430">over,</span> <span m="1085770">what</span> <span
  m="1086060">we're</span> <span m="1086270">assuming</span> <span
  m="1086750">is</span> <span m="1086870">random</span> <span
  m="1087650">is</span> <span m="1087830">different.</span> <span
  m="1088190">Here</span> <span m="1088430">we're</span> <span
  m="1088580">assuming</span> <span m="1088940">k1</span> <span
  m="1089170">and</span> <span m="1089450">k2</span> <span m="1089870">a</span>
  <span m="1090000">are</span> <span m="1090910">because</span> <span
  m="1091180">h</span> <span m="1091440">was</span> <span
  m="1091620">fixed.</span> <span m="1092520">This</span> <span
  m="1092680">was</span> <span m="1092790">an</span> <span
  m="1092850">assumption</span> <span m="1093250">about</span> <span
  m="1094650">the</span> <span m="1094880">inputs.</span> <span
  m="1095820">Over</span> <span m="1096050">here</span> <span
  m="1097240">we're</span> <span m="1097790">thinking</span> <span
  m="1098200">of</span> <span m="1098340">k and</span> <span
  m="1098740">k'</span> <span m="1099270">as</span> <span
  m="1099370">being</span> <span m="1099600">fixed.</span> <span
  m="1099970">This</span> <span m="1100130">has</span> <span
  m="1100300">to</span> <span m="1100380">work</span> <span
  m="1100540">for</span> <span m="1100730">every</span> <span m="1101230">pair
  of</span> <span m="1101650">distinct</span> <span m="1102100">keys.</span>
  <span m="1103400">And</span> <span m="1103690">the</span> <span
  m="1103780">probability</span> <span m="1104560">we're</span> <span
  m="1104740">considering</span> <span m="1105400">is</span> <span
  m="1105680">the</span> <span m="1105820">distribution</span> <span
  m="1106390">of</span> <span m="1106530">h.</span></p><p><span
  m="1108010">So</span> <span m="1108190">we're</span> <span
  m="1108450">trying</span> <span m="1108890">all</span> <span
  m="1109060">the</span> <span m="1109160">different</span> <span
  m="1109480">h's</span> <span m="1110080">Or</span> <span
  m="1110310">we're</span> <span m="1110590">trying</span> <span
  m="1111470">little</span> <span m="1111670">h</span> <span
  m="1111880">uniformly</span> <span m="1112450">at</span> <span
  m="1112510">random.</span> <span m="1113330">We</span> <span
  m="1113430">want</span> <span m="1113500">the</span> <span
  m="1113600">probability</span> <span m="1114270">that</span> <span
  m="1114430">a</span> <span m="1114530">random</span> <span
  m="1114970">h</span> <span m="1115620">makes</span> <span m="1116020">k</span>
  <span m="1116315">and</span> <span m="1116610">k'</span> <span
  m="1116960">collide</span> <span m="1117730">to</span> <span
  m="1117880">be</span> <span m="1118070">at</span> <span
  m="1118150">most</span> <span m="1118600">1/m.</span> <span
  m="1120160">The</span> <span m="1120280">other</span> <span
  m="1120440">difference</span> <span m="1120840">is we</span> <span
  m="1120960">switch</span> <span m="1121190">from</span> <span
  m="1121350">equals</span> <span m="1121820">to</span> <span
  m="1122070">at</span> <span m="1122190">most.</span> <span
  m="1124030">I</span> <span m="1124110">mean</span> <span
  m="1124650">less</span> <span m="1124980">would</span> <span
  m="1125150">be</span> <span m="1125310">better.</span> <span
  m="1125900">And</span> <span m="1126150">there</span> <span
  m="1126270">are</span> <span m="1126390">ways</span> <span
  m="1126600">to</span> <span m="1126690">make</span> <span
  m="1126860">it</span> <span m="1127170">less</span> <span
  m="1127430">for</span> <span m="1127520">a</span> <span
  m="1127560">couple</span> <span m="1127850">pairs</span> <span
  m="1128160">but</span> <span m="1128370">it</span> <span
  m="1128470">doesn't</span> <span m="1128600">really</span> <span
  m="1128800">matter.</span> <span m="1130410">But</span> <span
  m="1130660">of</span> <span m="1130790">course</span> <span
  m="1130980">anything</span> <span m="1131270">less</span> <span
  m="1131520">than</span> <span m="1131620">or</span> <span
  m="1131720">equal</span> <span m="1131760">to</span> <span
  m="1131830">1/m</span> <span m="1132310">will</span> <span
  m="1132430">be</span> <span m="1132660">just</span> <span
  m="1132940">as</span> <span m="1133050">good.</span></p><p><span
  m="1135170">So</span> <span m="1135470">this</span> <span
  m="1135700">is</span> <span m="1135820">an</span> <span
  m="1135900">assumption</span> <span m="1136350">about</span> <span
  m="1136820">H.</span> <span m="1137960">We'll</span> <span
  m="1138200">see</span> <span m="1138440">how</span> <span
  m="1138570">to</span> <span m="1138640">achieve</span> <span
  m="1138950">this</span> <span m="1139140">assumption</span> <span
  m="1139670">in</span> <span m="1139810">a</span> <span
  m="1139850">little</span> <span m="1140070">bit.</span> <span
  m="1140700">Let</span> <span m="1140900">me</span> <span
  m="1141040">first</span> <span m="1141820">prove</span> <span m="1142170">to
  you</span> <span m="1142470">that</span> <span m="1142820">this</span> <span
  m="1143050">is</span> <span m="1143170">enough.</span> <span
  m="1144510">It's</span> <span m="1144860">going</span> <span
  m="1145030">to</span> <span m="1145090">be</span> <span
  m="1145220">basically</span> <span m="1145700">the</span> <span
  m="1145810">same</span> <span m="1146210">as</span> <span
  m="1147290">the</span> <span m="1147430">006</span> <span
  m="1148530">analysis.</span> <span m="1149280">But</span> <span
  m="1150570">it's</span> <span m="1150640">worth</span> <span
  m="1150870">repeating</span> <span m="1151360">just</span> <span
  m="1151530">so</span> <span m="1151740">we</span> <span m="1152540">are</span>
  <span m="1152650">sure</span> <span m="1152990">everything's</span> <span
  m="1153400">OK.</span> <span m="1160230">And</span> <span
  m="1160650">so</span> <span m="1160820">I</span> <span m="1160940">can</span>
  <span m="1161150">be</span> <span m="1161310">more</span> <span
  m="1161510">precise</span> <span m="1161970">about</span> <span
  m="1163966">what</span> <span m="1164390">we're</span> <span
  m="1164530">assuming.</span></p><p><span m="1179240">The</span> <span
  m="1179330">key</span> <span m="1179510">difference</span> <span
  m="1179840">between</span> <span m="1180030">this</span> <span
  m="1180200">theorem</span> <span m="1180410">and the</span> <span
  m="1180560">006</span> <span m="1181090">theorem</span> <span
  m="1181320">is</span> <span m="1182600">we</span> <span m="1182730">get</span>
  <span m="1182920">to</span> <span m="1183250">make</span> <span
  m="1183470">no</span> <span m="1183660">assumptions</span> <span
  m="1184120">about</span> <span m="1184370">the</span> <span
  m="1184460">keys.</span> <span m="1184740">They</span> <span
  m="1184890">are</span> <span m="1185230">arbitrary.</span> <span
  m="1185790">You</span> <span m="1185880">get</span> <span
  m="1186030">to</span> <span m="1186120">choose</span> <span
  m="1186420">them</span> <span m="1186620">however</span> <span
  m="1187090">you</span> <span m="1187220">want.</span> <span
  m="1188550">But</span> <span m="1188700">then</span> <span
  m="1189220">I</span> <span m="1189440">choose</span> <span
  m="1189760">a</span> <span m="1189850">random</span> <span
  m="1190170">hash</span> <span m="1190430">function.</span> <span
  m="1191680">The</span> <span m="1191890">hash</span> <span
  m="1192120">function</span> <span m="1192380">cannot</span> <span
  m="1192650">depend</span> <span m="1193040">on</span> <span
  m="1193120">these</span> <span m="1193320">keys.</span> <span
  m="1194160">But</span> <span m="1194280">it's</span> <span
  m="1194390">going</span> <span m="1194510">to</span> <span
  m="1194590">be</span> <span m="1194750">random.</span> <span
  m="1195980">And</span> <span m="1196480">I</span> <span
  m="1196680">choose</span> <span m="1196950">the</span> <span
  m="1197030">hash</span> <span m="1197240">function</span> <span
  m="1197560">after</span> <span m="1197930">you</span> <span
  m="1198150">choose</span> <span m="1198500">the</span> <span
  m="1198600">keys.</span> <span m="1199860">That's</span> <span
  m="1201020">important.</span> <span m="1207570">So</span> <span
  m="1207910">we're</span> <span m="1208020">going</span> <span
  m="1208120">to</span> <span m="1208190">choose</span> <span
  m="1208490">a</span> <span m="1208600">random</span> <span
  m="1209100">h</span> <span m="1209800">and</span> <span m="1210030">H.</span>
  <span m="1211430">And</span> <span m="1211710">we're</span> <span
  m="1211800">assuming</span> <span m="1212980">H</span> <span
  m="1213520">is</span> <span m="1213730">universal.</span></p><p><span
  m="1219060">Then</span> <span m="1221050">the</span> <span
  m="1221400">expected</span> <span m="1222060">number</span> <span
  m="1222350">of</span> <span m="1222450">keys</span> <span
  m="1222860">in</span> <span m="1222960">a</span> <span m="1223030">slot</span>
  <span m="1227070">among</span> <span m="1227340">those</span> <span
  m="1227590">n keys</span> <span m="1235680">is</span> <span
  m="1235840">at</span> <span m="1235940">most</span> <span m="1236570">1
  plus</span> <span m="1237160">alpha.</span> <span m="1239600">Alpha</span>
  <span m="1239930">is</span> <span m="1240040">n/m.</span> <span
  m="1241260">So</span> <span m="1241700">this</span> <span
  m="1241900">is</span> <span m="1241960">exactly</span> <span
  m="1243150">what</span> <span m="1243310">we</span> <span
  m="1243420">had</span> <span m="1243660">over</span> <span
  m="1243830">here.</span> <span m="1245470">Here</span> <span
  m="1245630">we're</span> <span m="1245720">talking</span> <span
  m="1246010">about</span> <span m="1246300">time</span> <span
  m="1246570">bound.</span> <span m="1247560">But</span> <span
  m="1247780">the</span> <span m="1247890">time</span> <span
  m="1248120">bound</span> <span m="1248340">followed</span> <span
  m="1248630">because</span> <span m="1249100">the</span> <span
  m="1249380">length</span> <span m="1249720">of</span> <span
  m="1249820">each</span> <span m="1250050">chain</span> <span
  m="1251600">was</span> <span m="1251790">expected</span> <span
  m="1252240">to</span> <span m="1252380">be</span> <span m="1252610">1
  plus</span> <span m="1253060">alpha.</span> <span m="1253630">And</span> <span
  m="1253860">here</span> <span m="1254050">the</span> <span
  m="1254200">expectation</span> <span m="1254900">is</span> <span
  m="1255030">over</span> <span m="1255250">the</span> <span
  m="1255380">choice</span> <span m="1255690">of</span> <span
  m="1255810">h.</span> <span m="1257136">Not</span> <span
  m="1257580">assuming</span> <span m="1257920">anything</span> <span
  m="1258700">about</span> <span m="1258940">the</span> <span
  m="1259020">keys.</span></p><p><span m="1261910">So</span> <span
  m="1262560">let's</span> <span m="1263190">prove</span> <span
  m="1263390">this</span> <span m="1263560">theorem.</span> <span
  m="1268920">It's</span> <span m="1269020">pretty</span> <span
  m="1269350">easy.</span> <span m="1269660">But</span> <span
  m="1270280">I'm</span> <span m="1270460">going</span> <span
  m="1270580">to</span> <span m="1270620">introduce</span> <span
  m="1271070">some</span> <span m="1271320">analysis</span> <span
  m="1271760">techniques</span> <span m="1272170">that</span> <span
  m="1272300">we</span> <span m="1272430">will</span> <span
  m="1272600">use</span> <span m="1273110">for</span> <span
  m="1274440">more</span> <span m="1274680">interesting</span> <span
  m="1275060">things.</span> <span m="1276880">So</span> <span
  m="1276990">let's</span> <span m="1277710">give</span> <span
  m="1277860">the</span> <span m="1277960">keys</span> <span
  m="1278260">a</span> <span m="1278320">name.</span> <span
  m="1280280">I'll</span> <span m="1280300">just</span> <span
  m="1280510">call</span> <span m="1280750">them--</span> <span
  m="1286390">I'll</span> <span m="1286840">be</span> <span
  m="1288000">lazy.</span> <span m="1288380">Use</span> <span
  m="1289110">k1</span> <span m="1289690">up</span> <span m="1289970">to</span>
  <span m="1290510">kn.</span> <span m="1295680">And</span> <span
  m="1299290">I</span> <span m="1299390">just</span> <span
  m="1299550">want</span> <span m="1299690">to</span> <span
  m="1299750">compute</span> <span m="1300180">that</span> <span
  m="1300630">expectation.</span></p><p><span m="1313620">So</span> <span
  m="1313760">I</span> <span m="1313910">want</span> <span m="1314100">to</span>
  <span m="1314170">compute</span> <span m="1318650">let's</span> <span
  m="1318830">say</span> <span m="1318940">the</span> <span
  m="1319070">number</span> <span m="1319440">of</span> <span
  m="1319560">keys</span> <span m="1321150">colliding</span> <span
  m="1321820">with</span> <span m="1322570">one</span> <span
  m="1322870">of</span> <span m="1322980">those</span> <span
  m="1323230">keys,</span> <span m="1324020">let's</span> <span
  m="1324270">say</span> <span m="1325580">ki.</span> <span
  m="1332840">So</span> <span m="1333130">this</span> <span
  m="1333330">is</span> <span m="1333460">of</span> <span
  m="1333560">course</span> <span m="1333870">the</span> <span
  m="1334060">size</span> <span m="1334390">of</span> <span
  m="1334490">the</span> <span m="1334580">slot</span> <span
  m="1335040">that</span> <span m="1335230">ki</span> <span
  m="1335580">happens</span> <span m="1335950">to</span> <span
  m="1336050">go.</span> <span m="1336760">This</span> <span
  m="1336930">is</span> <span m="1336990">going</span> <span
  m="1337110">to</span> <span m="1337180">work</span> <span
  m="1337340">for</span> <span m="1337480">all</span> <span
  m="1337690">i.</span> <span m="1338220">And</span> <span m="1338460">so</span>
  <span m="1338680">if</span> <span m="1338790">I</span> <span
  m="1338880">can</span> <span m="1339110">say</span> <span
  m="1339400">that</span> <span m="1339570">this</span> <span
  m="1339800">is</span> <span m="1340260">at</span> <span
  m="1340360">most</span> <span m="1340590">1/alpha</span> <span
  m="1341180">for</span> <span m="1341390">each i,</span> <span
  m="1342200">then</span> <span m="1342400">I</span> <span
  m="1342470">have</span> <span m="1342910">my</span> <span
  m="1343050">theorem.</span> <span m="1343920">Just</span> <span
  m="1344130">another</span> <span m="1344410">way</span> <span
  m="1344770">to</span> <span m="1345220">talk</span> <span
  m="1345440">about</span> <span m="1345650">it.</span></p><p><span
  m="1345760">Now</span> <span m="1346310">the</span> <span
  m="1346400">number</span> <span m="1347110">of</span> <span
  m="1347320">keys</span> <span m="1347670">colliding</span> <span
  m="1348210">with</span> <span m="1348360">ki,</span> <span
  m="1348840">here's</span> <span m="1349100">a</span> <span
  m="1349240">general</span> <span m="1349600">trick,</span> <span
  m="1349960">whenever</span> <span m="1350250">you</span> <span
  m="1350370">want</span> <span m="1350510">to</span> <span
  m="1350640">count</span> <span m="1351120">something</span> <span
  m="1352100">in</span> <span m="1352240">expectation,</span> <span
  m="1353780">a</span> <span m="1353870">very</span> <span
  m="1354090">helpful</span> <span m="1354440">tool</span> <span
  m="1354820">is</span> <span m="1355360">indicator</span> <span
  m="1355960">random</span> <span m="1356250">variables.</span> <span
  m="1357850">Let's</span> <span m="1358790">name</span> <span m="1359310">all
  of</span> <span m="1359690">the</span> <span m="1359800">different</span>
  <span m="1360110">events</span> <span m="1360530">that</span> <span
  m="1360670">we</span> <span m="1361130">want</span> <span
  m="1361400">to</span> <span m="1361500">count.</span> <span
  m="1362530">And</span> <span m="1362710">then</span> <span
  m="1363040">we're</span> <span m="1363420">basically</span> <span
  m="1363720">summing</span> <span m="1364220">those</span> <span
  m="1364460">variables.</span> <span m="1365860">So</span> <span
  m="1366110">I'm</span> <span m="1366330">going</span> <span
  m="1366590">to</span> <span m="1366710">say--</span> <span
  m="1369290">I'm</span> <span m="1369320">going</span> <span
  m="1369400">to</span> <span m="1369440">use</span> <span m="1370100">I</span>
  <span m="1370480">ij</span> <span m="1372440">to</span> <span
  m="1372560">be</span> <span m="1373030">an</span> <span
  m="1373170">indicator</span> <span m="1373620">random</span> <span
  m="1373870">variable.</span> <span m="1374180">It's</span> <span
  m="1374280">going</span> <span m="1374400">to</span> <span
  m="1374460">be</span> <span m="1374610">1</span> <span m="1374970">or</span>
  <span m="1375100">0.</span> <span m="1376320">1</span> <span
  m="1377210">if</span> <span m="1379420">hash</span> <span
  m="1380135">function</span> <span m="1380500">of</span> <span
  m="1382205">ki</span> <span m="1383150">equals</span> <span
  m="1384060">the</span> <span m="1384310">hash</span> <span
  m="1384390">function</span> <span m="1384700">of</span> <span
  m="1385410">kj.</span></p><p><span m="1386665">So</span> <span
  m="1387020">there's a</span> <span m="1387120">collision</span> <span
  m="1387630">between</span> <span m="1388000">ki</span> <span
  m="1388260">and</span> <span m="1388520">kj</span> <span m="1388770">j</span>
  <span m="1389440">and</span> <span m="1389760">0</span> <span m="1390790">if
  they</span> <span m="1390880">hash</span> <span m="1391260">to</span> <span
  m="1391310">different</span> <span m="1392040">slots.</span> <span
  m="1394830">Now</span> <span m="1395000">this</span> <span
  m="1395300">is,</span> <span m="1395910">it's</span> <span
  m="1396100">a</span> <span m="1396160">random</span> <span
  m="1396440">variable</span> <span m="1396860">because</span> <span
  m="1397170">it</span> <span m="1397270">depends</span> <span
  m="1397660">on</span> <span m="1397830">h</span> <span m="1398150">and</span>
  <span m="1398270">h</span> <span m="1398530">is</span> <span
  m="1398670">a</span> <span m="1399060">random</span> <span
  m="1399420">thing.</span> <span m="1399930">ki</span> <span m="1400150">and
  kj</span> <span m="1401390">are</span> <span m="1401510">not</span> <span
  m="1401700">random.</span> <span m="1402020">They're</span> <span
  m="1402750">given</span> <span m="1403060">to</span> <span
  m="1403170">you.</span> <span m="1404290">And</span> <span
  m="1404520">then</span> <span m="1404680">I</span> <span
  m="1404730">want</span> <span m="1405000">to</span> <span
  m="1405480">know</span> <span m="1405710">when</span> <span
  m="1406150">does</span> <span m="1406690">h</span> <span m="1407440">back
  those</span> <span m="1407720">two</span> <span m="1408620">keys</span> <span
  m="1408950">to</span> <span m="1409050">the</span> <span
  m="1409150">same</span> <span m="1409400">slot.</span></p><p><span
  m="1410660">And</span> <span m="1410790">so</span> <span
  m="1410920">this</span> <span m="1411640">number</span> <span
  m="1413110">is</span> <span m="1413290">really</span> <span
  m="1413510">just</span> <span m="1413810">the</span> <span
  m="1413980">sum</span> <span m="1415310">of</span> <span
  m="1415890">Iij</span> <span m="1416760">over</span> <span
  m="1417040">all</span> <span m="1417230">j.</span> <span m="1419070">This
  is</span> <span m="1419310">the</span> <span m="1419440">same</span> <span
  m="1419770">thing.</span> <span m="1422150">The</span> <span
  m="1422530">number</span> <span m="1422900">in</span> <span
  m="1422970">here</span> <span m="1423240">is</span> <span
  m="1423490">the</span> <span m="1423580">sum</span> <span
  m="1424500">for</span> <span m="1424880">j not</span> <span
  m="1425390">equal</span> <span m="1425700">to</span> <span
  m="1425790">i</span> <span m="1427446">of</span> <span m="1427860">Iij.</span>
  <span m="1430620">Because</span> <span m="1430820">we</span> <span
  m="1430940">get</span> <span m="1431080">a</span> <span m="1431140">1</span>
  <span m="1431530">every</span> <span m="1431780">time</span> <span
  m="1432000">they</span> <span m="1432120">collide,</span> <span
  m="1433030">zero</span> <span m="1433210">otherwise.</span> <span
  m="1433730">So</span> <span m="1434110">that</span> <span
  m="1434370">counts</span> <span m="1434750">how</span> <span
  m="1434900">many</span> <span m="1435140">collide.</span> <span
  m="1437170">Once</span> <span m="1437440">we</span> <span
  m="1437600">have</span> <span m="1437810">it</span> <span
  m="1437880">in</span> <span m="1437970">this</span> <span
  m="1438150">notation,</span> <span m="1438870">we</span> <span
  m="1438900">can</span> <span m="1439070">use</span> <span
  m="1439390">all</span> <span m="1439720">the</span> <span
  m="1439820">great</span> <span m="1441550">dilemmas</span> <span
  m="1442060">and</span> <span m="1442170">theorems</span> <span
  m="1442600">about</span> <span m="1443630">in</span> <span
  m="1443690">this</span> <span m="1443850">case,</span> <span
  m="1444490">E,</span> <span m="1445080">expectation.</span> <span
  m="1446600">What</span> <span m="1446790">should</span> <span
  m="1446930">I</span> <span m="1447010">use</span> <span
  m="1447220">here?</span></p><p><span m="1450442">STUDENT:
  What?</span></p><p><span m="1452350">ERIK DEMAINE: What's</span> <span
  m="1452680">a</span> <span m="1452780">good--</span> <span
  m="1453510">how</span> <span m="1453680">can</span> <span m="1453800">I</span>
  <span m="1453860">simplify</span> <span m="1454340">this</span> <span
  m="1454520">formula?</span></p><p><span m="1454970">STUDENT: The</span> <span
  m="1455680">linearity</span> <span m="1456220">of</span> <span
  m="1456300">expectation.</span></p><p><span m="1456625">ERIK DEMAINE: The
  linearity  of expectation.</span> <span m="1456950">Thank</span> <span
  m="1457210">you.</span> <span m="1460170">If</span> <span
  m="1460650">you</span> <span m="1460760">don't know</span> <span
  m="1461000">all</span> <span m="1461180">these</span> <span
  m="1461350">things,</span> <span m="1461640">read</span> <span
  m="1461940">the</span> <span m="1462450">probability</span> <span
  m="1463040">appendix</span> <span m="1463500">in</span> <span
  m="1463550">the</span> <span m="1463640">textbook.</span> <span
  m="1465340">So</span> <span m="1465820">we</span> <span
  m="1465930">want</span> <span m="1466195">to</span> <span
  m="1467980">talk</span> <span m="1468420">about</span> <span
  m="1468630">expectation</span> <span m="1469280">of</span> <span
  m="1469950">the</span> <span m="1470090">simplest</span> <span
  m="1470560">thing</span> <span m="1470740">possible.</span> <span
  m="1471450">So</span> <span m="1471710">linearity</span> <span
  m="1472620">let's</span> <span m="1472810">us</span> <span
  m="1472960">put</span> <span m="1473100">the</span> <span m="1473230">E</span>
  <span m="1473450">inside</span> <span m="1473920">the</span> <span
  m="1474010">sum</span> <span m="1475910">without</span> <span
  m="1476520">losing</span> <span m="1476920">anything.</span></p><p><span
  m="1477710">Now</span> <span m="1477980">the</span> <span
  m="1478300">expectation</span> <span m="1479970">of an</span> <span
  m="1480580">indicator</span> <span m="1481010">random</span> <span
  m="1481250">variable</span> <span m="1481600">is</span> <span
  m="1481710">pretty</span> <span m="1481930">simple</span> <span
  m="1482460">because</span> <span m="1483340">the</span> <span
  m="1483430">zeros</span> <span m="1483880">don't</span> <span
  m="1484050">contribute</span> <span m="1484510">to</span> <span
  m="1484600">the</span> <span m="1484690">expectation.</span> <span
  m="1485810">The</span> <span m="1485910">1's</span> <span
  m="1486380">contribute</span> <span m="1486820">1.</span> <span
  m="1487310">So</span> <span m="1487960">this</span> <span
  m="1488140">is</span> <span m="1488250">the</span> <span
  m="1488330">same</span> <span m="1488580">thing</span> <span
  m="1488810">as</span> <span m="1488920">just</span> <span
  m="1489150">the</span> <span m="1489360">probability</span> <span
  m="1490140">of</span> <span m="1490220">this</span> <span
  m="1490400">being</span> <span m="1490600">1.</span> <span
  m="1491971">So</span> <span m="1492360">we</span> <span m="1492570">get</span>
  <span m="1494590">sum</span> <span m="1495305">of</span> <span
  m="1495760">j9</span> <span m="1496080">equal to</span> <span
  m="1496520">I</span> <span m="1497560">of</span> <span m="1498010">the</span>
  <span m="1498100">probability</span> <span m="1499700">that</span> <span
  m="1499990">Iij</span> <span m="1501500">equals</span> <span
  m="1502480">1.</span> <span m="1504980">And</span> <span
  m="1505140">the</span> <span m="1505220">probability</span> <span
  m="1505920">that</span> <span m="1506120">Iij</span> <span
  m="1506680">equals</span> <span m="1506970">1,</span> <span
  m="1507270">well,</span> <span m="1507410">that's</span> <span
  m="1508230">the</span> <span m="1508340">probability</span> <span
  m="1509190">that</span> <span m="1509370">this</span> <span
  m="1509570">happens.</span> <span m="1511570">And</span> <span
  m="1511800">what's</span> <span m="1511970">the</span> <span
  m="1512040">probability</span> <span m="1512290">that</span> <span
  m="1512650">that</span> <span m="1512870">happens?</span> <span
  m="1515010">At</span> <span m="1515190">most</span> <span
  m="1515460">1/m</span> <span m="1516525">our</span> <span
  m="1516840">universality.</span></p><p><span m="1518520">So</span> <span
  m="1518930">I'm</span> <span m="1519120">going</span> <span
  m="1519690">to--</span> <span m="1520155">I'll</span> <span
  m="1520540">write</span> <span m="1520790">it</span> <span
  m="1520910">out.</span> <span m="1522665">This is</span> <span
  m="1523060">sum</span> <span m="1523395">j</span> <span m="1523730">not</span>
  <span m="1524150">equal</span> <span m="1524260">to</span> <span
  m="1524740">I.</span> <span m="1525490">Probability</span> <span
  m="1526450">that</span> <span m="1527410">h</span> <span
  m="1527790">maps</span> <span m="1528600">ki</span> <span
  m="1529640">and</span> <span m="1530080">kj</span> <span m="1530360">to</span>
  <span m="1530510">the</span> <span m="1530660">same</span> <span
  m="1530950">slot.</span> <span m="1534870">So</span> <span
  m="1535060">that's</span> <span m="1535320">the</span> <span
  m="1535410">definition</span> <span m="1535880">of</span> <span
  m="1535960">Iij.</span> <span m="1537340">And</span> <span
  m="1537990">this</span> <span m="1538490">is</span> <span
  m="1538670">at</span> <span m="1538810">most</span> <span
  m="1539460">sum</span> <span m="1540440">j</span> <span m="1540590">not</span>
  <span m="1540800">equal</span> <span m="1541090">to</span> <span
  m="1541230">i</span> <span m="1541950">of</span> <span m="1542110">1/m</span>
  <span m="1543300">by</span> <span m="1543450">universality.</span> <span
  m="1544670">So</span> <span m="1544820">here's</span> <span
  m="1545080">where</span> <span m="1545230">we're</span> <span
  m="1545310">using</span> <span m="1545600">it.</span> <span
  m="1550450">And</span> <span m="1551550">sum</span> <span
  m="1552150">of</span> <span m="1552390">j</span> <span m="1552650">not</span>
  <span m="1552860">equal</span> <span m="1553110">to</span> <span
  m="1553210">I,</span> <span m="1553540">well</span> <span
  m="1553720">that's</span> <span m="1555350">basically</span> <span
  m="1555690">n.</span></p><p><span m="1564920">But</span> <span
  m="1565330">I</span> <span m="1565610">made</span> <span m="1565830">a</span>
  <span m="1565870">mistake</span> <span m="1566320">here.</span> <span
  m="1567190">Slightly</span> <span m="1567530">off.</span> <span
  m="1568960">From</span> <span m="1569460">here--</span> <span
  m="1570910">yeah.</span> <span m="1571410">So</span> <span
  m="1571810">this</span> <span m="1573380">line</span> <span
  m="1573630">is</span> <span m="1573750">wrong.</span> <span
  m="1574570">Sorry.</span> <span m="1574950">Let me</span> <span
  m="1575150">fix</span> <span m="1575360">it.</span> <span
  m="1576130">Because</span> <span m="1576930">this</span> <span
  m="1577190">assumption</span> <span m="1577710">only</span> <span
  m="1578050">works</span> <span m="1578430">when</span> <span
  m="1578570">the</span> <span m="1578670">keys</span> <span
  m="1579010">are</span> <span m="1579110">distinct.</span> <span
  m="1580810">So</span> <span m="1581480">in</span> <span
  m="1581550">fact--</span> <span m="1583590">how</span> <span
  m="1583830">did</span> <span m="1584040">I</span> <span m="1584110">get</span>
  <span m="1584600">j--</span> <span m="1585090">yeah.</span> <span
  m="1585490">,</span> <span m="1589380">Yeah,</span> <span
  m="1589940">sorry.</span> <span m="1592070">This</span> <span
  m="1592270">should</span> <span m="1592420">have</span> <span
  m="1592490">been</span> <span m="1592640">this--</span> <span
  m="1593300">actually</span> <span m="1593920">everything</span> <span
  m="1594290">I</span> <span m="1594330">said</span> <span m="1594560">is</span>
  <span m="1594720">true,</span> <span m="1595200">but</span> <span
  m="1596460">if</span> <span m="1596650">you</span> <span
  m="1596770">want</span> <span m="1596880">to</span> <span
  m="1596950">count</span> <span m="1597140">the</span> <span
  m="1597230">number</span> <span m="1597530">of</span> <span
  m="1597650">keys--</span> <span m="1598230">I</span> <span
  m="1598310">really</span> <span m="1598530">wanted to</span> <span
  m="1598740">count</span> <span m="1599020">the</span> <span
  m="1599110">total</span> <span m="1599490">number</span> <span
  m="1599740">of</span> <span m="1599810">keys</span> <span
  m="1600110">that</span> <span m="1600210">hash</span> <span m="1600490">to
  the</span> <span m="1600610">same</span> <span m="1600860">place</span> <span
  m="1601330">as</span> <span m="1603110">ki.</span></p><p><span
  m="1603630">So</span> <span m="1603890">there's</span> <span
  m="1604110">one</span> <span m="1604420">more</span> <span
  m="1604830">which</span> <span m="1604900">is</span> <span
  m="1605070">ki</span> <span m="1605460">itself.</span> <span
  m="1606060">Always</span> <span m="1606420">hashes</span> <span
  m="1606920">to</span> <span m="1607070">wherever</span> <span
  m="1607370">ki</span> <span m="1607710">hashes.</span> <span
  m="1608920">So</span> <span m="1609040">I</span> <span m="1609120">did</span>
  <span m="1609280">a</span> <span m="1609350">summation</span> <span
  m="1609970">j</span> <span m="1610100">not</span> <span
  m="1610280">equal</span> <span m="1610540">i</span> <span
  m="1610800">but</span> <span m="1610980">I</span> <span
  m="1611050">should</span> <span m="1611240">also</span> <span
  m="1611610">have</span> <span m="1612740">a</span> <span
  m="1612830">plus</span> <span m="1613460">Iii--</span> <span
  m="1615800">captain.</span> <span m="1617670">So</span> <span
  m="1619770">there's</span> <span m="1620010">the</span> <span
  m="1620150">case</span> <span m="1620430">when</span> <span
  m="1621130">I</span> <span m="1621380">hashing</span> <span
  m="1621710">to</span> <span m="1622040">the</span> <span
  m="1622160">same</span> <span m="1622370">place</span> <span
  m="1623400">which</span> <span m="1623650">of</span> <span
  m="1623750">course</span> <span m="1623980">is</span> <span
  m="1624080">always</span> <span m="1624310">going</span> <span
  m="1624420">to</span> <span m="1624470">happen</span> <span
  m="1624960">so</span> <span m="1625170">you</span> <span
  m="1625290">get</span> <span m="1626970">basically</span> <span
  m="1627150">plus</span> <span m="1627290">1</span> <span
  m="1628200">everywhere.</span> <span m="1631390">So</span> <span
  m="1631520">that</span> <span m="1632290">makes</span> <span
  m="1632500">me</span> <span m="1632600">happier</span> <span
  m="1632970">because</span> <span m="1633190">then I</span> <span
  m="1633310">actually</span> <span m="1633630">get</span> <span
  m="1633770">with</span> <span m="1633890">the</span> <span
  m="1633970">theorem</span> <span m="1634230">said</span> <span
  m="1634500">which</span> <span m="1634650">is</span> <span m="1634760">1
  plus</span> <span m="1635080">alpha.</span> <span m="1635835">There</span>
  <span m="1636130">is</span> <span m="1636210">always</span> <span
  m="1636440">going</span> <span m="1636580">to</span> <span
  m="1636640">be</span> <span m="1637060">the</span> <span
  m="1637150">one</span> <span m="1637390">guy</span> <span
  m="1637580">hashing</span> <span m="1637940">there</span> <span
  m="1638540">when</span> <span m="1638790">I</span> <span
  m="1638880">assume</span> <span m="1639410">that</span> <span
  m="1639670">ki</span> <span m="1640730">hashed</span> <span
  m="1641110">to</span> <span m="1641260">wherever</span> <span m="1641560">it
  does.</span> <span m="1644650">So</span> <span m="1645180">this</span> <span
  m="1645420">tells</span> <span m="1645680">you</span> <span
  m="1645880">that</span> <span m="1646230">if</span> <span
  m="1646420">we</span> <span m="1646530">could</span> <span
  m="1646690">find</span> <span m="1647120">a</span> <span
  m="1647230">universal</span> <span m="1647700">hash</span> <span
  m="1647980">family,</span> <span m="1648980">then</span> <span
  m="1649670">we're</span> <span m="1649830">guaranteed</span> <span
  m="1650620">insert,</span> <span m="1651340">delete,</span> <span
  m="1651690">and</span> <span m="1651820">search</span> <span
  m="1652800">cost</span> <span m="1653850">order</span> <span m="1654080">1
  plus</span> <span m="1654470">alpha</span> <span m="1655000">in</span> <span
  m="1655160">expectation.</span> <span m="1655535">And</span> <span
  m="1655910">the</span> <span m="1656000">expectation</span> <span
  m="1656670">is</span> <span m="1656840">only</span> <span
  m="1657200">over</span> <span m="1657390">the</span> <span
  m="1657490">choice</span> <span m="1657770">of</span> <span
  m="1657880">h,</span> <span m="1658520">not over</span> <span
  m="1658810">the</span> <span m="1658930">inputs.</span> <span
  m="1659470">I</span> <span m="1659700">think</span> <span
  m="1659840">I've</span> <span m="1659930">stressed</span> <span
  m="1660230">that</span> <span m="1660420">enough</span> <span
  m="1660640">times.</span></p><p><span m="1662540">But</span> <span
  m="1662760">the</span> <span m="1662840">remaining</span> <span
  m="1663190">question</span> <span m="1663520">is</span> <span
  m="1663640">can</span> <span m="1663860">we</span> <span
  m="1663990">actually</span> <span m="1664340">design</span> <span
  m="1664840">a</span> <span m="1664880">universal</span> <span
  m="1665400">hash</span> <span m="1665680">family?</span> <span
  m="1666390">Are</span> <span m="1666560">there</span> <span
  m="1666700">any</span> <span m="1667000">universal</span> <span
  m="1667470">hash</span> <span m="1667700">families?</span> <span
  m="1673960">Yes,</span> <span m="1675170">as</span> <span
  m="1675330">you</span> <span m="1675440">might</span> <span
  m="1675600">expect</span> <span m="1676080">there</span> <span
  m="1676290">are.</span> <span m="1676920">Otherwise</span> <span
  m="1677370">this</span> <span m="1677510">wouldn't</span> <span
  m="1677700">be</span> <span m="1677810">very</span> <span
  m="1678030">interesting.</span></p><p><span m="1687140">Let</span> <span
  m="1687320">me</span> <span m="1687450">give</span> <span
  m="1687640">you</span> <span m="1687750">an</span> <span
  m="1687830">example</span> <span m="1688350">of</span> <span
  m="1688600">a</span> <span m="1689180">bad</span> <span
  m="1689940">universal</span> <span m="1690440">hash</span> <span
  m="1690720">family.</span> <span m="1692990">Sort</span> <span
  m="1693090">of</span> <span m="1693160">an</span> <span
  m="1693260">oxymoron</span> <span m="1694010">but</span> <span
  m="1694720">it's</span> <span m="1695140">possible.</span> <span
  m="1704190">Bad.</span> <span m="1705380">Here's</span> <span
  m="1705670">a</span> <span m="1705750">hash</span> <span
  m="1706000">family</span> <span m="1706400">that's</span> <span
  m="1706610">universal.</span> <span m="1707600">h</span> <span
  m="1707970">is</span> <span m="1708330">the</span> <span
  m="1708440">set</span> <span m="1708890">of</span> <span
  m="1709150">all</span> <span m="1709590">hash</span> <span
  m="1709880">functions.</span> <span m="1712360">h</span> <span
  m="1712700">from</span> <span m="1713450">0,1</span> <span
  m="1715030">to</span> <span m="1715500">u</span> <span
  m="1715680">minus</span> <span m="1716070">1.</span> <span
  m="1724010">This</span> <span m="1724190">is</span> <span
  m="1724330">what's</span> <span m="1724650">normally</span> <span
  m="1724920">called</span> <span m="1725160">uniform</span> <span
  m="1725720">hashing.</span></p><p><span m="1726790">It</span> <span
  m="1726880">makes</span> <span m="1727110">analysis</span> <span
  m="1727600">really</span> <span m="1727900">easy</span> <span
  m="1729450">because</span> <span m="1730190">you</span> <span
  m="1730350">get</span> <span m="1730530">to</span> <span
  m="1730660">assume--</span> <span m="1731510">I</span> <span
  m="1731560">mean</span> <span m="1731870">this</span> <span
  m="1732240">says</span> <span m="1733120">ahead</span> <span
  m="1733240">of</span> <span m="1733470">time</span> <span
  m="1734070">for</span> <span m="1734310">every</span> <span
  m="1734600">universe</span> <span m="1735040">item,</span> <span
  m="1735330">I'm</span> <span m="1735500">going</span> <span
  m="1735640">to</span> <span m="1735780">choose</span> <span
  m="1736030">a</span> <span m="1736130">random</span> <span
  m="1736720">slot</span> <span m="1737100">to</span> <span
  m="1737170">put</span> <span m="1737390">it.</span> <span
  m="1739300">And</span> <span m="1739480">then</span> <span
  m="1739890">I'll</span> <span m="1740080">just</span> <span
  m="1740610">remember</span> <span m="1740980">that.</span> <span
  m="1741510">And</span> <span m="1741730">so</span> <span
  m="1741860">whenever</span> <span m="1742130">you</span> <span
  m="1742340">give</span> <span m="1742610">me</span> <span
  m="1743200">the</span> <span m="1743280">key,</span> <span
  m="1743890">I'll</span> <span m="1744050">just</span> <span
  m="1744270">map</span> <span m="1744540">it</span> <span m="1744700">by</span>
  <span m="1744880">h.</span> <span m="1746030">And</span> <span
  m="1746220">I</span> <span m="1746290">get</span> <span m="1746570">a</span>
  <span m="1746630">consistent</span> <span m="1747200">slot</span> <span
  m="1747670">and</span> <span m="1748610">definitely</span> <span
  m="1748950">it's</span> <span m="1749110">universal.</span> <span
  m="1750420">What's</span> <span m="1750640">bad</span> <span
  m="1750890">about</span> <span m="1751100">this</span> <span
  m="1751250">hash</span> <span m="1751460">function?</span> <span
  m="1753460">Many</span> <span m="1753700">things</span> <span
  m="1754060">but--</span></p><p><span m="1757427">STUDENT: [INAUDIBLE]</span>
  <span m="1761300">That's</span> <span m="1761540">just as</span> <span
  m="1761890">hard as the</span> <span m="1762266">problem I'm</span> <span
  m="1762642">solving.</span></p><p><span m="1763020">ERIK DEMAINE: Sort</span>
  <span m="1763320">of.</span> <span m="1763820">I'm</span> <span
  m="1764060">begging</span> <span m="1764360">the</span> <span
  m="1764440">question</span> <span m="1764880">that</span> <span
  m="1764970">it's</span> <span m="1765230">just</span> <span
  m="1765460">as</span> <span m="1765570">hard</span> <span
  m="1765900">as</span> <span m="1766110">the</span> <span m="1766190">problem
  I'm</span> <span m="1766580">solving.</span> <span m="1767240">And</span>
  <span m="1767460">what,</span> <span m="1767850">algorithmically,</span> <span
  m="1768440">what</span> <span m="1768610">goes</span> <span
  m="1768830">wrong</span> <span m="1769120">here?</span> <span
  m="1771180">There</span> <span m="1771270">are</span> <span
  m="1771300">two</span> <span m="1771480">things</span> <span
  m="1771800">I</span> <span m="1771870">guess.</span> <span
  m="1778326">Yeah?</span></p><p><span m="1778804">STUDENT: It's</span> <span
  m="1779282">not</span> <span m="1779760">deterministic?</span></p><p><span
  m="1780730">ERIK DEMAINE: It's</span> <span m="1780830">not</span> <span
  m="1780990">deterministic.</span> <span m="1782650">That's</span> <span
  m="1782910">OK</span> <span m="1783330">because</span> <span
  m="1783560">we're</span> <span m="1783760">allowing</span> <span
  m="1784870">randomization</span> <span m="1785275">in</span> <span
  m="1785680">this</span> <span m="1785910">algorithm.</span> <span
  m="1786960">So</span> <span m="1787810">I</span> <span m="1787890">mean</span>
  <span m="1788040">how I</span> <span m="1788350">would</span> <span
  m="1788490">compute</span> <span m="1788860">this</span> <span
  m="1789100">is</span> <span m="1789600">I</span> <span
  m="1789740">would</span> <span m="1789970">do</span> <span
  m="1790130">a</span> <span m="1790230">four</span> <span
  m="1790360">loop</span> <span m="1790630">over</span> <span
  m="1790910">all</span> <span m="1791280">universe</span> <span
  m="1791690">items.</span> <span m="1792610">And</span> <span
  m="1792820">I</span> <span m="1792900">assume</span> <span
  m="1793180">I</span> <span m="1793250">have</span> <span m="1793490">a</span>
  <span m="1793570">way</span> <span m="1793710">to</span> <span
  m="1793950">generate</span> <span m="1794320">a</span> <span
  m="1794390">random</span> <span m="1794670">number</span> <span
  m="1794980">between</span> <span m="1795330">0</span> <span
  m="1795580">and</span> <span m="1795650">m</span> <span
  m="1795770">minus</span> <span m="1796050">1.</span> <span
  m="1796840">That's</span> <span m="1797210">legitimate.</span> <span
  m="1798570">But</span> <span m="1798890">there's</span> <span
  m="1799030">something</span> <span m="1799340">bad</span> <span
  m="1799600">about</span> <span m="1799830">that</span> <span
  m="1799970">algorithm.</span></p><p><span m="1801380">STUDENT: It's</span>
  <span m="1801670">not</span> <span m="1802110">consistent.</span></p><p><span
  m="1802550">ERIK DEMAINE: Not</span> <span m="1802770">consistent?</span>
  <span m="1803025">It</span> <span m="1803280">is</span> <span
  m="1803590">consistent</span> <span m="1804270">if</span> <span
  m="1804440">I</span> <span m="1804530">precompute</span> <span
  m="1805340">for</span> <span m="1805480">every</span> <span
  m="1805770">universe</span> <span m="1806170">item</span> <span
  m="1806470">where</span> <span m="1806650">to</span> <span m="1806720">map
  it.</span> <span m="1807700">That's good.</span> <span m="1808720">So</span>
  <span m="1809160">all</span> <span m="1809320">these</span> <span
  m="1809470">things</span> <span m="1809740">are</span> <span
  m="1809870">actually</span> <span m="1810180">OK.</span></p><p><span
  m="1810670">STUDENT: It takes</span> <span m="1811137">too much</span> <span
  m="1811604">time and</span> <span m="1812071">space.</span></p><p><span
  m="1812540">ERIK DEMAINE: It</span> <span m="1812720">takes</span> <span
  m="1813000">too</span> <span m="1813130">much</span> <span
  m="1813330">time</span> <span m="1813610">and</span> <span
  m="1813710">space.</span> <span m="1814160">Yeah.</span> <span
  m="1816460">That's</span> <span m="1818560">the</span> <span
  m="1818770">bad</span> <span m="1819150">thing.</span> <span
  m="1819380">It's</span> <span m="1819510">hard</span> <span
  m="1819770">to</span> <span m="1819940">isolate</span> <span
  m="1820580">in</span> <span m="1820790">a</span> <span m="1820890">bad</span>
  <span m="1821230">thing</span> <span m="1821440">what</span> <span
  m="1821580">is</span> <span m="1821850">so</span> <span m="1822040">bad</span>
  <span m="1822240">about</span> <span m="1822480">it.</span> <span
  m="1822640">But</span> <span m="1825930">we</span> <span
  m="1826050">need</span> <span m="1826240">u</span> <span
  m="1826490">time</span> <span m="1826910">to</span> <span
  m="1827660">compute</span> <span m="1828020">all</span> <span
  m="1828170">those</span> <span m="1828340">random</span> <span
  m="1828620">numbers.</span> <span m="1829710">And</span> <span
  m="1830090">we</span> <span m="1830210">need</span> <span m="1830400">u</span>
  <span m="1830530">space</span> <span m="1830950">to</span> <span
  m="1831050">store</span> <span m="1831320">that</span> <span
  m="1831490">hash</span> <span m="1831720">function.</span> <span
  m="1832540">In</span> <span m="1832710">order</span> <span
  m="1832890">to</span> <span m="1832960">get</span> <span m="1833140">to</span>
  <span m="1833240">the</span> <span m="1833340">consistency</span> <span
  m="1834100">we</span> <span m="1834250">have</span> <span
  m="1834510">to--</span> <span m="1836040">Oops.</span> <span
  m="1837270">Good</span> <span m="1837380">catch.</span> <span
  m="1838940">In</span> <span m="1839090">order</span> <span
  m="1839200">to</span> <span m="1839260">get</span> <span
  m="1839460">consistency,</span> <span m="1840000">we</span> <span
  m="1840140">need</span> <span m="1840350">to</span> <span
  m="1840490">keep</span> <span m="1840870">track</span> <span
  m="1841260">of</span> <span m="1841470">all</span> <span
  m="1841720">those</span> <span m="1841900">hash</span> <span
  m="1842140">function</span> <span m="1842450">values.</span> <span
  m="1843840">And</span> <span m="1844050">that's</span> <span
  m="1845140">not</span> <span m="1845280">good.</span></p><p><span
  m="1847600">You</span> <span m="1847770">could</span> <span
  m="1847910">try</span> <span m="1848180">to</span> <span
  m="1848350">not</span> <span m="1848560">store</span> <span
  m="1848780">them</span> <span m="1848880">all,</span> <span m="1849250">you
  know,</span> <span m="1849440">use</span> <span m="1849620">a</span> <span
  m="1849660">hash</span> <span m="1849920">table.</span> <span
  m="1850400">But</span> <span m="1851295">you</span> <span
  m="1851660">can't</span> <span m="1851870">use</span> <span
  m="1851980">a</span> <span m="1852030">hash</span> <span
  m="1852240">table</span> <span m="1852520">to</span> <span m="1852580">store
  a</span> <span m="1852820">hash</span> <span m="1853050">function.</span>
  <span m="1853620">That</span> <span m="1853760">would</span> <span
  m="1854010">be--</span> <span m="1854920">that</span> <span
  m="1855160">would</span> <span m="1855290">be</span> <span
  m="1855460">infinite</span> <span m="1855820">recursion.</span> <span
  m="1858180">So</span> <span m="1858630">but</span> <span m="1859190">at</span>
  <span m="1859260">least</span> <span m="1859440">they're</span> <span
  m="1859600">out</span> <span m="1859790">there.</span> <span
  m="1860100">So</span> <span m="1860480">the</span> <span
  m="1860630">challenge</span> <span m="1861020">is</span> <span
  m="1861110">to</span> <span m="1861200">find</span> <span
  m="1861430">an</span> <span m="1861540">efficient</span> <span
  m="1862150">hash</span> <span m="1862470">family</span> <span
  m="1863330">that</span> <span m="1863510">doesn't</span> <span
  m="1863850">take</span> <span m="1864080">much</span> <span
  m="1864290">space</span> <span m="1864640">to</span> <span
  m="1864730">store</span> <span m="1865160">and</span> <span
  m="1865390">doesn't</span> <span m="1865690">take</span> <span
  m="1865870">much</span> <span m="1866060">time</span> <span
  m="1866300">to</span> <span m="1866410">compute.</span></p><p><span
  m="1867850">OK,</span> <span m="1868010">we're</span> <span
  m="1868860">allowing</span> <span m="1869420">randomness.</span> <span
  m="1879720">But</span> <span m="1879850">we</span> <span
  m="1879950">don't</span> <span m="1880150">want</span> <span
  m="1880400">to</span> <span m="1880600">much</span> <span
  m="1880820">randomness.</span> <span m="1881280">We</span> <span
  m="1881370">can't</span> <span m="1881590">afford</span> <span
  m="1882000">u</span> <span m="1882310">units</span> <span
  m="1882700">of</span> <span m="1882790">time</span> <span
  m="1883020">of</span> <span m="1883090">randomness.</span> <span
  m="1883620">I</span> <span m="1883670">mean</span> <span m="1883880">u</span>
  <span m="1884090">could</span> <span m="1884240">be</span> <span
  m="1884360">huge.</span> <span m="1885630">We're only</span> <span
  m="1885910">doing</span> <span m="1886170">n</span> <span
  m="1886370">operations</span> <span m="1887160">probably</span> <span
  m="1887640">on</span> <span m="1887710">this</span> <span
  m="1887900">hash</span> <span m="1888140">table.</span> <span
  m="1888800">u</span> <span m="1888970">could</span> <span
  m="1889110">be</span> <span m="1889260">way</span> <span
  m="1889550">bigger</span> <span m="1889850">than</span> <span
  m="1890040">n.</span> <span m="1891030">We</span> <span
  m="1891230">don't</span> <span m="1891550">want</span> <span
  m="1891760">to</span> <span m="1891800">have</span> <span
  m="1891960">to</span> <span m="1892060">precompute</span> <span
  m="1892280">this</span> <span m="1892730">giant</span> <span
  m="1893070">table</span> <span m="1893400">and</span> <span
  m="1893480">then</span> <span m="1893610">use</span> <span
  m="1893800">it</span> <span m="1893920">for</span> <span
  m="1894020">like</span> <span m="1894200">five</span> <span
  m="1894430">steps.</span> <span m="1895170">It would</span> <span
  m="1895270">be</span> <span m="1895850">really,</span> <span
  m="1896190">really</span> <span m="1896270">slow</span> <span
  m="1896560">even</span> <span m="1896790">amortized.</span></p><p><span
  m="1898220">So</span> <span m="1899950">here's</span> <span
  m="1900210">one</span> <span m="1900380">that</span> <span
  m="1900520">I</span> <span m="1900610">will</span> <span
  m="1900790">analyze.</span> <span m="1902570">And</span> <span
  m="1902760">there's</span> <span m="1902890">another</span> <span
  m="1903170">one</span> <span m="1903350">in</span> <span
  m="1903460">the</span> <span m="1903550">textbook</span> <span
  m="1904240">which</span> <span m="1904490">I'll</span> <span
  m="1904720">mention.</span> <span m="1909800">This</span> <span
  m="1910000">one's</span> <span m="1910160">a</span> <span
  m="1910200">little</span> <span m="1910450">bit</span> <span
  m="1910660">simpler</span> <span m="1911515">to</span> <span
  m="1911850">analyze.</span> <span m="1913580">We're</span> <span
  m="1913690">going</span> <span m="1913810">to</span> <span
  m="1913850">need</span> <span m="1913980">a</span> <span
  m="1914040">little</span> <span m="1914380">bit</span> <span
  m="1914520">of</span> <span m="1914610">number</span> <span
  m="1914860">theory,</span> <span m="1915430">just</span> <span
  m="1915650">prime</span> <span m="1915880">numbers.</span> <span
  m="1917610">And</span> <span m="1917840">you've</span> <span
  m="1919970">probably</span> <span m="1920250">heard</span> <span
  m="1920560">of</span> <span m="1920710">the</span> <span m="1920840">idea
  of</span> <span m="1921160">your</span> <span m="1921370">hash</span> <span
  m="1921660">table</span> <span m="1921940">size</span> <span
  m="1922240">being</span> <span m="1922480">prime.</span> <span
  m="1923400">Here</span> <span m="1923570">you'll</span> <span
  m="1923730">see</span> <span m="1923970">why</span> <span
  m="1924340">that's</span> <span m="1924690">useful,</span> <span
  m="1926030">at least for</span> <span m="1926090">this</span> <span
  m="1926300">family.</span></p><p><span m="1926770">You don't</span> <span
  m="1926980">always</span> <span m="1927280">need</span> <span
  m="1927530">primality,</span> <span m="1928110">but</span> <span
  m="1928760">it's</span> <span m="1928860">going</span> <span
  m="1928970">to</span> <span m="1929030">make</span> <span
  m="1929370">this</span> <span m="1929980">family</span> <span
  m="1930450">work.</span> <span m="1931320">So</span> <span
  m="1931440">I'm</span> <span m="1931520">going</span> <span
  m="1931610">to</span> <span m="1931650">assume</span> <span
  m="1931970">that</span> <span m="1932110">my</span> <span
  m="1932230">table</span> <span m="1932600">size is</span> <span
  m="1933030">prime.</span> <span m="1934430">Now</span> <span
  m="1934610">really</span> <span m="1935590">my</span> <span
  m="1935700">table</span> <span m="1935970">size is</span> <span
  m="1936430">doubling,</span> <span m="1937750">so</span> <span
  m="1937900">that's</span> <span m="1938060">a</span> <span
  m="1938110">little</span> <span m="1938320">awkward.</span> <span
  m="1938840">But</span> <span m="1939120">luckily</span> <span
  m="1939490">there are</span> <span m="1939750">algorithms</span> <span
  m="1940310">given</span> <span m="1941070">a</span> <span
  m="1941160">number</span> <span m="1941550">to</span> <span
  m="1941680">find</span> <span m="1941990">a</span> <span
  m="1942050">nearby</span> <span m="1942440">prime</span> <span
  m="1942750">number.</span> <span m="1943170">We're</span> <span
  m="1943280">not</span> <span m="1943410">going</span> <span
  m="1943510">to</span> <span m="1943570">cover</span> <span
  m="1943790">that</span> <span m="1943960">here,</span> <span
  m="1945150">but</span> <span m="1945250">that's</span> <span
  m="1945350">an</span> <span m="1945440">algorithmic</span> <span
  m="1945950">number</span> <span m="1946160">theory</span> <span
  m="1946440">thing.</span></p><p><span m="1947500">And</span> <span
  m="1947760">in</span> <span m="1948410">polylogarithmic</span> <span
  m="1949190">time,</span> <span m="1949510">I</span> <span
  m="1949570">guess</span> <span m="1949860">you</span> <span
  m="1950000">can</span> <span m="1951070">find</span> <span
  m="1952100">a</span> <span m="1952190">nearby</span> <span
  m="1952570">prime</span> <span m="1952850">number.</span> <span
  m="1953340">So</span> <span m="1953430">you</span> <span
  m="1953580">want</span> <span m="1953820">it</span> <span
  m="1953910">to</span> <span m="1953980">be</span> <span m="1954080">a</span>
  <span m="1954140">power</span> <span m="1954380">of</span> <span
  m="1954460">2.</span> <span m="1955220">And</span> <span
  m="1955510">you'll</span> <span m="1955610">just</span> <span
  m="1956360">look</span> <span m="1956600">around</span> <span
  m="1956900">for</span> <span m="1957000">nearby</span> <span
  m="1957280">prime</span> <span m="1957530">numbers.</span> <span
  m="1958390">And</span> <span m="1958620">then</span> <span
  m="1958840">we</span> <span m="1958950">have</span> <span m="1959230">a</span>
  <span m="1959310">prime</span> <span m="1959670">that's</span> <span
  m="1959890">about</span> <span m="1960120">the</span> <span
  m="1960200">same</span> <span m="1960420">size</span> <span
  m="1960810">so</span> <span m="1960940">that</span> <span
  m="1961090">will</span> <span m="1961210">work</span> <span
  m="1961390">just</span> <span m="1961610">as</span> <span
  m="1961680">well</span> <span m="1962270">from</span> <span
  m="1962460">a</span> <span m="1962530">table</span> <span
  m="1962810">doubling</span> <span m="1963150">perspective.</span></p><p><span
  m="1965550">Then</span> <span m="1965870">furthermore,</span> <span
  m="1969110">for</span> <span m="1969250">convenience,</span> <span
  m="1969810">I'm going to</span> <span m="1970010">assume</span> <span
  m="1970350">that</span> <span m="1970780">u</span> <span m="1971800">is</span>
  <span m="1972120">an</span> <span m="1972370">integer</span> <span
  m="1972710">power</span> <span m="1973130">of</span> <span
  m="1973240">m.</span> <span m="1981404">I</span> <span m="1981856">want</span>
  <span m="1982310">my</span> <span m="1982440">universe</span> <span
  m="1983010">to</span> <span m="1983100">be</span> <span m="1983240">a</span>
  <span m="1983310">power</span> <span m="1983830">of</span> <span
  m="1984070">that</span> <span m="1984340">prime.</span> <span
  m="1986580">I</span> <span m="1986660">mean,</span> <span
  m="1987000">if</span> <span m="1987150">it</span> <span
  m="1987230">isn't,</span> <span m="1987480">just</span> <span
  m="1987680">make</span> <span m="1987840">u</span> <span m="1987960">a</span>
  <span m="1988000">little</span> <span m="1988180">bigger.</span> <span
  m="1988530">It's</span> <span m="1988620">OK</span> <span
  m="1988830">if</span> <span m="1988950">u</span> <span m="1989070">gets</span>
  <span m="1989300">bigger</span> <span m="1989620">as</span> <span
  m="1989710">long</span> <span m="1989890">as</span> <span
  m="1989980">it</span> <span m="1990090">covers</span> <span m="1990490">all
  of</span> <span m="1990780">the</span> <span m="1990870">same</span> <span
  m="1991470">items.</span> <span m="1993450">Now</span> <span
  m="1994170">once</span> <span m="1994510">I</span> <span
  m="1994630">view</span> <span m="1995250">my</span> <span
  m="1995420">universe</span> <span m="1996580">as</span> <span
  m="1996770">a</span> <span m="1996830">power</span> <span
  m="1997370">of</span> <span m="1997480">the</span> <span
  m="1997600">table</span> <span m="1997990">size,</span> <span
  m="1999340">a</span> <span m="1999480">natural</span> <span
  m="1999890">thing</span> <span m="2000070">to</span> <span
  m="2000200">do</span> <span m="2000500">is</span> <span
  m="2000730">take</span> <span m="2001040">my</span> <span
  m="2002150">universe</span> <span m="2002670">items,</span> <span
  m="2003140">to</span> <span m="2003240">take</span> <span
  m="2003430">my</span> <span m="2003620">input</span> <span
  m="2003990">integers,</span> <span m="2004600">and</span> <span
  m="2004800">think</span> <span m="2005020">of</span> <span
  m="2005140">them</span> <span m="2005370">in</span> <span
  m="2005620">base</span> <span m="2006270">m.</span></p><p><span m="2007530">So
  that's</span> <span m="2007740">what</span> <span m="2008560">I'm</span> <span
  m="2008640">going</span> <span m="2008780">to</span> <span
  m="2008870">do.</span> <span m="2009730">I'm</span> <span
  m="2009850">going</span> <span m="2009950">to</span> <span
  m="2010020">view</span> <span m="2011390">a</span> <span
  m="2011450">key</span> <span m="2013740">k</span> <span m="2014750">in</span>
  <span m="2015860">base</span> <span m="2017250">m.</span> <span
  m="2017880">Whenever</span> <span m="2018400">I</span> <span
  m="2018490">have</span> <span m="2019570">a</span> <span
  m="2019660">key,</span> <span m="2020770">I</span> <span
  m="2020910">can</span> <span m="2021080">think</span> <span
  m="2021300">of</span> <span m="2021420">it</span> <span m="2021640">as</span>
  <span m="2021880">a</span> <span m="2021930">vector</span> <span
  m="2023230">of</span> <span m="2023290">subkeys,</span> <span
  m="2025020">k1</span> <span m="2026530">up</span> <span m="2026900">to</span>
  <span m="2027790">kr</span> <span m="2029462">minus</span> <span
  m="2030350">1.</span> <span m="2031850">There</span> <span
  m="2032070">are</span> <span m="2032370">digits</span> <span
  m="2033680">in</span> <span m="2033830">base</span> <span m="2034190">m</span>
  <span m="2034800">because</span> <span m="2035240">of</span> <span
  m="2035340">this</span> <span m="2035570">relation.</span> <span
  m="2037200">And</span> <span m="2037440">I</span> <span
  m="2037520">don't</span> <span m="2037680">even</span> <span
  m="2037920">care</span> <span m="2038240">which</span> <span
  m="2038450">is</span> <span m="2038590">the</span> <span
  m="2038680">least</span> <span m="2038930">significant</span> <span
  m="2039190">and</span> <span m="2039450">which</span> <span
  m="2039640">is</span> <span m="2039720">the</span> <span
  m="2039800">most</span> <span m="2040000">significant.</span> <span
  m="2040550">That</span> <span m="2040700">won't</span> <span
  m="2040890">matter</span> <span m="2041280">so</span> <span
  m="2041570">whatever,</span> <span m="2042010">whichever</span> <span
  m="2042410">order</span> <span m="2042630">you</span> <span
  m="2042750">want</span> <span m="2042870">to</span> <span
  m="2042910">think</span> <span m="2043090">of</span> <span
  m="2043190">it.</span> <span m="2045130">And</span> <span
  m="2046470">each</span> <span m="2046670">of</span> <span
  m="2046800">the</span> <span m="2047160">ki's</span> <span
  m="2048170">here</span> <span m="2048520">I</span> <span
  m="2048580">guess</span> <span m="2048830">is</span> <span
  m="2048940">between</span> <span m="2049360">0</span> <span
  m="2050560">and</span> <span m="2051060">m</span> <span
  m="2051239">minus</span> <span m="2051394">1.</span> <span
  m="2057480">So</span> <span m="2057989">far</span> <span m="2058199">so</span>
  <span m="2058380">good.</span></p><p><span m="2077760">So</span> <span
  m="2078600">with</span> <span m="2078810">this</span> <span
  m="2079070">perspective,</span> <span m="2079670">the</span> <span
  m="2079730">base</span> <span m="2079960">m</span> <span
  m="2080110">perspective,</span> <span m="2080670">I</span> <span
  m="2080750">can</span> <span m="2080900">define</span> <span
  m="2081340">a</span> <span m="2081469">dot</span> <span
  m="2082000">product</span> <span m="2082630">hash</span> <span
  m="2082980">function</span> <span m="2084780">as</span> <span
  m="2084989">follows.</span> <span m="2085469">It's</span> <span
  m="2085590">going</span> <span m="2085710">to</span> <span
  m="2085770">be</span> <span m="2085929">parametrized</span> <span
  m="2086920">by</span> <span m="2087810">another</span> <span
  m="2088170">key,</span> <span m="2088520">I'll</span> <span
  m="2088670">call</span> <span m="2088909">it</span> <span
  m="2089080">a,</span> <span m="2091090">which</span> <span
  m="2091320">we</span> <span m="2091460">can think</span> <span
  m="2091750">of</span> <span m="2092040">again</span> <span
  m="2092389">as</span> <span m="2092530">a</span> <span
  m="2092610">vector.</span> <span m="2097380">I</span> <span
  m="2097570">want</span> <span m="2097890">to</span> <span
  m="2098120">define</span> <span m="2100900">h</span> <span
  m="2101370">sub</span> <span m="2101890">a</span> <span m="2102060">of</span>
  <span m="2102230">k.</span> <span m="2103040">So</span> <span
  m="2103190">this</span> <span m="2103360">is</span> <span
  m="2103540">parametrized</span> <span m="2104160">by</span> <span
  m="2104270">a,</span> <span m="2104510">but</span> <span
  m="2104650">it's</span> <span m="2104790">a</span> <span
  m="2104840">function</span> <span m="2105590">of</span> <span
  m="2105720">a</span> <span m="2106000">given</span> <span
  m="2106330">key</span> <span m="2106610">k</span> <span m="2107840">as</span>
  <span m="2109300">the</span> <span m="2109420">dot</span> <span
  m="2109730">product</span> <span m="2110910">of</span> <span
  m="2111100">those</span> <span m="2111290">two</span> <span
  m="2111420">vectors</span> <span m="2112510">mod</span> <span
  m="2112810">m.</span> <span m="2116390">So</span> <span
  m="2116880">remember</span> <span m="2117130">dot</span> <span
  m="2117360">products</span> <span m="2117780">are just</span> <span
  m="2117970">the</span> <span m="2118040">sum</span> <span
  m="2119250">from</span> <span m="2119760">i</span> <span
  m="2119930">equals</span> <span m="2120265">0</span> <span
  m="2121110">to</span> <span m="2121220">r</span> <span m="2121470">minus
  1</span> <span m="2122583">of</span> <span m="2123290">a1</span> <span
  m="2123680">times</span> <span m="2125020">ki.</span> <span
  m="2126800">I</span> <span m="2126900">want</span> <span m="2127100">to</span>
  <span m="2127150">do</span> <span m="2127320">all</span> <span
  m="2127520">of</span> <span m="2127610">that</span> <span
  m="2128830">modulo</span> <span m="2129350">m.</span></p><p><span
  m="2131230">We'll</span> <span m="2131390">worry</span> <span
  m="2131610">about</span> <span m="2133200">how</span> <span
  m="2133370">long</span> <span m="2133620">this</span> <span m="2133830">takes
  to</span> <span m="2134155">compute</span> <span m="2134480">in</span> <span
  m="2134640">a</span> <span m="2134690">moment</span> <span
  m="2135160">I</span> <span m="2135220">guess.</span> <span
  m="2137710">Maybe</span> <span m="2137940">very</span> <span
  m="2138130">soon.</span> <span m="2140680">But</span> <span
  m="2141630">the</span> <span m="2141700">hash</span> <span
  m="2142000">family</span> <span m="2142500">h</span> <span
  m="2143500">is</span> <span m="2143750">just</span> <span
  m="2143980">all</span> <span m="2144200">of</span> <span
  m="2144280">these</span> <span m="2144520">ha's</span> <span
  m="2145690">for</span> <span m="2145950">all</span> <span
  m="2146290">possible</span> <span m="2146730">choices</span> <span
  m="2147800">of</span> <span m="2148180">a.</span> <span m="2152276">a</span>
  <span m="2152750">was</span> <span m="2153120">a</span> <span
  m="2153220">key</span> <span m="2153790">so</span> <span m="2154030">it</span>
  <span m="2154150">comes</span> <span m="2154450">from</span> <span
  m="2155830">the</span> <span m="2156130">universe</span> <span
  m="2156620">u.</span></p><p><span m="2161770">And</span> <span
  m="2162060">so</span> <span m="2162220">what</span> <span
  m="2162340">that</span> <span m="2162500">means</span> <span
  m="2162740">is</span> <span m="2163190">to</span> <span m="2163340">do</span>
  <span m="2163420">universal</span> <span m="2164000">hashing,</span> <span
  m="2164530">I</span> <span m="2164630">want</span> <span m="2164790">to</span>
  <span m="2164860">choose</span> <span m="2165190">one</span> <span
  m="2165470">of</span> <span m="2165560">these</span> <span
  m="2165790">ha's</span> <span m="2166230">uniformly</span> <span
  m="2166870">at</span> <span m="2166970">random.</span> <span
  m="2167650">How</span> <span m="2167810">do</span> <span m="2167890">I</span>
  <span m="2167970">do</span> <span m="2168140">that?</span> <span
  m="2168700">I</span> <span m="2168800">just</span> <span
  m="2169010">choose</span> <span m="2169330">a</span> <span
  m="2169570">uniformly</span> <span m="2169885">at</span> <span
  m="2170200">random.</span> <span m="2171410">Pretty</span> <span
  m="2171640">easy.</span> <span m="2172390">It's</span> <span
  m="2172500">one</span> <span m="2172950">random</span> <span
  m="2173360">value</span> <span m="2174340">from</span> <span
  m="2174630">one</span> <span m="2174920">random</span> <span
  m="2175290">key.</span> <span m="2176230">So</span> <span
  m="2176390">that</span> <span m="2176550">should</span> <span
  m="2176650">take</span> <span m="2176910">constant</span> <span
  m="2177310">time</span> <span m="2178100">and</span> <span
  m="2178240">constant</span> <span m="2178660">space</span> <span
  m="2179500">to</span> <span m="2179590">store</span> <span
  m="2179820">one</span> <span m="2180110">number.</span></p><p><span
  m="2182660">In</span> <span m="2182790">general</span> <span
  m="2183370">we're</span> <span m="2183560">in</span> <span
  m="2183750">a</span> <span m="2184010">world</span> <span
  m="2184410">called</span> <span m="2184890">the</span> <span
  m="2185890">Word</span> <span m="2186170">RAM</span> <span
  m="2186450">model.</span> <span m="2188100">This</span> <span
  m="2188320">is</span> <span m="2188440">actually--</span> <span
  m="2190260">I</span> <span m="2190380">guess</span> <span m="2190580">m</span>
  <span m="2190910">stands</span> <span m="2191240">for</span> <span
  m="2191350">model</span> <span m="2191800">so</span> <span
  m="2192040">I</span> <span m="2192120">shouldn't</span> <span
  m="2192470">write</span> <span m="2192650">model.</span> <span
  m="2193610">Random</span> <span m="2194080">access</span> <span
  m="2194480">machine</span> <span m="2196890">which</span> <span
  m="2197170">you</span> <span m="2197260">may</span> <span
  m="2197390">have</span> <span m="2197480">heard.</span> <span
  m="2198240">The</span> <span m="2198370">word</span> <span
  m="2198700">RAM</span> <span m="2199100">assumes</span> <span
  m="2199610">that</span> <span m="2202340">in</span> <span
  m="2202540">general</span> <span m="2202860">we're</span> <span
  m="2202980">manipulating</span> <span m="2203540">integers.</span> <span
  m="2205180">And</span> <span m="2206560">the</span> <span
  m="2206700">integers</span> <span m="2207160">fit</span> <span
  m="2207350">in</span> <span m="2207490">a</span> <span
  m="2207560">word.</span> <span m="2209550">And</span> <span
  m="2209770">the</span> <span m="2209870">computational</span> <span
  m="2210610">assumption</span> <span m="2211170">is</span> <span
  m="2211430">that</span> <span m="2212100">manipulating</span> <span
  m="2213780">a</span> <span m="2213870">constant</span> <span
  m="2214360">number</span> <span m="2214620">of</span> <span
  m="2214700">words</span> <span m="2215210">and</span> <span
  m="2215330">doing</span> <span m="2215580">essentially</span> <span
  m="2216000">any</span> <span m="2216250">operation</span> <span
  m="2216690">you</span> <span m="2216800">want</span> <span
  m="2217160">on</span> <span m="2217230">constant</span> <span
  m="2217590">number</span> <span m="2217870">of</span> <span
  m="2217930">words</span> <span m="2219230">takes</span> <span
  m="2220220">constant</span> <span m="2220730">time.</span></p><p><span
  m="2226530">And</span> <span m="2226700">the</span> <span
  m="2226840">other</span> <span m="2227080">part</span> <span
  m="2227410">of</span> <span m="2227610">the</span> <span
  m="2227720">word</span> <span m="2227910">RAM</span> <span
  m="2228110">model</span> <span m="2228430">is</span> <span
  m="2228550">to</span> <span m="2228620">assume</span> <span
  m="2229050">that</span> <span m="2229310">the</span> <span
  m="2229490">things</span> <span m="2229770">you</span> <span
  m="2229910">care</span> <span m="2230230">about</span> <span
  m="2230940">fit</span> <span m="2231220">in</span> <span m="2231350">a</span>
  <span m="2231410">word.</span> <span m="2236950">Say</span> <span
  m="2237550">individual</span> <span m="2238060">data</span> <span
  m="2238310">values,</span> <span m="2240050">here</span> <span
  m="2240520">we're</span> <span m="2240630">talking</span> <span
  m="2240890">about</span> <span m="2241150">keys,</span> <span
  m="2244950">fit</span> <span m="2245230">in</span> <span m="2245430">a</span>
  <span m="2245520">word.</span> <span m="2248190">This</span> <span
  m="2248430">is</span> <span m="2248570">what</span> <span
  m="2248760">you</span> <span m="2248880">need</span> <span
  m="2249150">to</span> <span m="2249270">assume</span> <span
  m="2249730">in</span> <span m="2249930">[INAUDIBLE]</span> <span
  m="2250590">that</span> <span m="2250740">you</span> <span
  m="2250910">can</span> <span m="2251040">compute</span> <span
  m="2251420">high</span> <span m="2251710">of</span> <span m="2251860">x</span>
  <span m="2252210">in</span> <span m="2252380">constant</span> <span
  m="2252850">time</span> <span m="2253380">or</span> <span
  m="2253530">low</span> <span m="2253830">of x in</span> <span
  m="2254300">constant</span> <span m="2254680">time.</span> <span
  m="2255470">Here</span> <span m="2256240">I'm</span> <span
  m="2256370">going</span> <span m="2256570">to</span> <span
  m="2256690">use</span> <span m="2256880">it</span> <span m="2257010">to</span>
  <span m="2257090">assume</span> <span m="2257430">that</span> <span
  m="2257560">we</span> <span m="2257710">can</span> <span
  m="2257840">compute</span> <span m="2258250">h</span> <span
  m="2258450">sub</span> <span m="2258650">a</span> <span m="2258770">of</span>
  <span m="2258960">k</span> <span m="2259280">in</span> <span
  m="2259480">constant</span> <span m="2260000">time.</span></p><p><span
  m="2261790">In</span> <span m="2261980">practice</span> <span
  m="2262580">this</span> <span m="2262700">would</span> <span
  m="2262810">be</span> <span m="2262990">done</span> <span
  m="2263250">by</span> <span m="2263450">implementing</span> <span
  m="2264010">this</span> <span m="2264320">computation,</span> <span
  m="2264980">this</span> <span m="2265150">dot</span> <span
  m="2265350">product</span> <span m="2265620">computation,</span> <span
  m="2266870">in</span> <span m="2267050">hardware.</span> <span
  m="2268540">And</span> <span m="2268700">the</span> <span
  m="2268790">reason</span> <span m="2270240">a</span> <span
  m="2270680">64-bit</span> <span m="2271450">edition</span> <span
  m="2271940">on</span> <span m="2272080">a</span> <span
  m="2272120">modern</span> <span m="2272420">processor</span> <span
  m="2273420">or a</span> <span m="2273830">32-bit</span> <span
  m="2274450">on</span> <span m="2274580">most</span> <span
  m="2274830">phones</span> <span m="2275690">takes</span> <span
  m="2275930">constant</span> <span m="2276280">time</span> <span
  m="2276500">is</span> <span m="2276600">because</span> <span
  m="2276880">there's</span> <span m="2277090">hardware</span> <span
  m="2277530">that's</span> <span m="2277780">designed</span> <span
  m="2278150">to</span> <span m="2278230">do</span> <span
  m="2278340">that</span> <span m="2278530">really</span> <span
  m="2278760">fast.</span> <span m="2280050">And</span> <span
  m="2280330">in</span> <span m="2280420">general</span> <span
  m="2280840">we're</span> <span m="2281140">assuming</span> <span
  m="2282780">that</span> <span m="2282960">the</span> <span
  m="2283090">things</span> <span m="2283310">we</span> <span
  m="2283400">care</span> <span m="2283670">about</span> <span
  m="2283990">fit</span> <span m="2284270">in</span> <span m="2284380">a</span>
  <span m="2284440">single</span> <span m="2284790">word.</span></p><p><span
  m="2286230">And</span> <span m="2286380">we're</span> <span
  m="2286480">assuming</span> <span m="2286780">random</span> <span
  m="2287080">access</span> <span m="2287510">and</span> <span
  m="2287620">that</span> <span m="2287730">we</span> <span
  m="2287840">can</span> <span m="2287960">have</span> <span
  m="2288140">a</span> <span m="2288220">raise.</span> <span
  m="2288720">That's</span> <span m="2288910">what</span> <span m="2289010">we
  need</span> <span m="2289200">in</span> <span m="2289300">order</span> <span
  m="2289460">to</span> <span m="2289570">store a</span> <span
  m="2289820">table.</span> <span m="2290720">And</span> <span
  m="2291000">same</span> <span m="2291180">thing</span> <span
  m="2291305">in</span> <span m="2291430">[INAUDIBLE],</span> <span
  m="2292230">we</span> <span m="2292330">needed</span> <span
  m="2292460">to</span> <span m="2292540">assume</span> <span
  m="2292830">we</span> <span m="2292930">had</span> <span m="2293110">a</span>
  <span m="2293170">raise.</span> <span m="2296772">And</span> <span
  m="2297150">I</span> <span m="2297250">think</span> <span
  m="2297440">this</span> <span m="2297620">operation</span> <span
  m="2297980">is</span> <span m="2298070">actually</span> <span
  m="2298400">pretty--</span> <span m="2299010">exists</span> <span
  m="2299700">in</span> <span m="2299840">Intel</span> <span
  m="2300150">architectures</span> <span m="2300790">in</span> <span
  m="2300900">some</span> <span m="2301250">form.</span> <span
  m="2302540">But</span> <span m="2302920">it's</span> <span
  m="2303140">certainly</span> <span m="2303430">not</span> <span
  m="2303640">a</span> <span m="2303700">normal</span> <span
  m="2304220">operation.</span> <span m="2305180">If</span> <span
  m="2305300">you're</span> <span m="2305400">going</span> <span
  m="2305510">to</span> <span m="2305590">do</span> <span
  m="2305690">this</span> <span m="2305870">explicitly,</span> <span
  m="2306700">adding</span> <span m="2307060">up</span> <span
  m="2307240">and</span> <span m="2307340">multiplying</span> <span
  m="2307900">things</span> <span m="2308180">this</span> <span
  m="2308340">would</span> <span m="2308430">be</span> <span
  m="2308920">r</span> <span m="2309250">is</span> <span m="2310040">the</span>
  <span m="2310130">log</span> <span m="2310580">base</span> <span
  m="2310980">m</span> <span m="2311250">of</span> <span m="2311350">u,</span>
  <span m="2311730">so</span> <span m="2311880">it's</span> <span
  m="2312000">kind</span> <span m="2312150">of</span> <span
  m="2312250">logish</span> <span m="2312770">time.</span></p><p><span
  m="2314900">Maybe</span> <span m="2315160">I'll</span> <span
  m="2315250">mention</span> <span m="2316590">another</span> <span
  m="2317020">hash</span> <span m="2317330">family</span> <span
  m="2319700">that's</span> <span m="2319970">more</span> <span
  m="2320290">obviously</span> <span m="2321620">computable.</span> <span
  m="2325580">But</span> <span m="2325730">I</span> <span
  m="2325770">won't</span> <span m="2326000">analyze</span> <span
  m="2326360">here.</span> <span m="2326540">It's</span> <span
  m="2326650">analyzed</span> <span m="2327090">in</span> <span
  m="2327160">the</span> <span m="2327250">textbook.</span> <span
  m="2328000">So</span> <span m="2328070">if</span> <span
  m="2328260">you're</span> <span m="2328420">curious</span> <span
  m="2329340">you</span> <span m="2329500">can</span> <span
  m="2329630">check</span> <span m="2329830">it</span> <span
  m="2329910">out</span> <span m="2330070">there.</span> <span
  m="2332450">Let's</span> <span m="2332690">call</span> <span
  m="2332990">this</span> <span m="2335890">just</span> <span
  m="2336100">another.</span> <span m="2355620">It's a</span> <span
  m="2356120">bit</span> <span m="2356320">weird</span> <span
  m="2356550">because</span> <span m="2356720">it</span> <span
  m="2356800">has</span> <span m="2356990">two</span> <span
  m="2357170">mods.</span> <span m="2357520">You</span> <span
  m="2357610">take</span> <span m="2357810">mod</span> <span
  m="2357990">p</span> <span m="2358300">and then</span> <span
  m="2358450">mod</span> <span m="2358700">m.</span> <span
  m="2359100">But</span> <span m="2359880">the</span> <span
  m="2359980">main</span> <span m="2360150">computation</span> <span
  m="2360810">is</span> <span m="2360950">very</span> <span
  m="2361120">simple.</span> <span m="2362010">You</span> <span
  m="2362140">choose</span> <span m="2362370">a</span> <span
  m="2362590">uniformly</span> <span m="2363250">random</span> <span
  m="2363480">value</span> <span m="2363870">a.</span> <span
  m="2364390">You</span> <span m="2364510">multiply</span> <span
  m="2365040">it</span> <span m="2365110">by</span> <span
  m="2365240">your</span> <span m="2365400">key</span> <span
  m="2366400">in</span> <span m="2366760">usual</span> <span
  m="2367100">binary</span> <span m="2367520">multiplication</span> <span
  m="2369640">instead of</span> <span m="2369860">dot</span> <span
  m="2370150">product.</span> <span m="2370900">And</span> <span
  m="2371030">then</span> <span m="2371130">you</span> <span
  m="2371280">add</span> <span m="2371730">another</span> <span
  m="2372150">uniformly</span> <span m="2372800">random</span> <span
  m="2373030">key.</span> <span m="2374070">This</span> <span
  m="2374240">is</span> <span m="2374360">also</span> <span
  m="2374770">universal.</span> <span m="2376360">So</span> <span
  m="2377410">H</span> <span m="2378750">is</span> <span m="2380200">hab</span>
  <span m="2381480">for</span> <span m="2381670">all</span> <span
  m="2382465">a</span> <span m="2382720">and</span> <span m="2383000">b</span>
  <span m="2384110">that</span> <span m="2384270">are</span> <span
  m="2384380">keys.</span></p><p><span m="2388760">So</span> <span
  m="2388790">if</span> <span m="2388870">you're</span> <span
  m="2388980">not</span> <span m="2389160">happy</span> <span
  m="2389500">with</span> <span m="2389690">this</span> <span
  m="2389880">assumption</span> <span m="2390420">that</span> <span
  m="2390570">you</span> <span m="2390660">can</span> <span
  m="2390780">compute</span> <span m="2391090">this</span> <span
  m="2391260">in</span> <span m="2391340">constant</span> <span
  m="2391690">time,</span> <span m="2392370">you</span> <span
  m="2392480">should</span> <span m="2392680">be</span> <span
  m="2392800">happy</span> <span m="2393110">with</span> <span
  m="2393240">this</span> <span m="2393410">assumption.</span> <span
  m="2393980">If you</span> <span m="2394080">believe</span> <span
  m="2394410">in</span> <span m="2394490">addition</span> <span
  m="2394850">and</span> <span m="2394920">multiplication</span> <span
  m="2395650">and</span> <span m="2395860">division</span> <span
  m="2396290">being</span> <span m="2396490">constant</span> <span
  m="2396830">time,</span> <span m="2397530">then</span> <span
  m="2397700">this</span> <span m="2397850">will</span> <span
  m="2397930">be</span> <span m="2398070">constant</span> <span
  m="2398430">time.</span> <span m="2401860">So</span> <span
  m="2402010">both</span> <span m="2402270">of</span> <span
  m="2402340">these</span> <span m="2402520">families</span> <span
  m="2402900">are</span> <span m="2402950">universal.</span> <span
  m="2403640">I'm</span> <span m="2403810">going</span> <span
  m="2403930">to</span> <span m="2404010">prove</span> <span
  m="2404650">that</span> <span m="2404870">this</span> <span
  m="2405190">one</span> <span m="2405360">is</span> <span
  m="2405440">universal</span> <span m="2405950">because</span> <span
  m="2406120">it's a</span> <span m="2406180">little</span> <span
  m="2406420">bit</span> <span m="2406530">easier.</span> <span
  m="2406790">Yeah?</span></p><p><span m="2407264">STUDENT: Is</span> <span
  m="2407738">this</span> <span m="2408212">p</span> <span m="2408686">a</span>
  <span m="2409160">choice that</span> <span m="2409634">you
  made?</span></p><p><span m="2410110">ERIK DEMAINE: OK,</span> <span
  m="2410420">right.</span> <span m="2410640">What</span> <span
  m="2410810">is</span> <span m="2410940">p?</span> <span m="2411704">P</span>
  <span m="2413190">just</span> <span m="2413400">has</span> <span
  m="2413550">to</span> <span m="2413650">be</span> <span
  m="2413770">bigger</span> <span m="2414190">than</span> <span
  m="2415700">m,</span> <span m="2416930">and</span> <span m="2417490">it</span>
  <span m="2417610">should</span> <span m="2417760">be</span> <span
  m="2417900">prime.</span> <span m="2419030">It's</span> <span
  m="2419160">not</span> <span m="2419630">random.</span> <span m="2420940">You
  can</span> <span m="2420950">just</span> <span m="2421150">choose</span> <span
  m="2421390">one</span> <span m="2421730">prime</span> <span
  m="2422710">that's</span> <span m="2422930">bigger</span> <span
  m="2423310">than</span> <span m="2424140">your</span> <span
  m="2424250">table</span> <span m="2424550">size,</span> <span
  m="2425140">and</span> <span m="2425390">this</span> <span
  m="2425480">will</span> <span m="2425560">work.</span></p><p><span
  m="2426120">STUDENT: [INAUDIBLE]</span></p><p>&nbsp;</p><p><span
  m="2432390">ERIK DEMAINE: I</span> <span m="2433110">forget</span> <span
  m="2433560">whether</span> <span m="2433750">you</span> <span
  m="2433860">have</span> <span m="2434030">to</span> <span
  m="2434120">assume</span> <span m="2434380">that</span> <span
  m="2434500">m</span> <span m="2434680">is</span> <span
  m="2434800">prime.</span> <span m="2435160">I'd</span> <span
  m="2435520">have</span> <span m="2435640">to</span> <span
  m="2435740">check.</span> <span m="2437630">I'm</span> <span
  m="2437720">guessing</span> <span m="2438500">not,</span> <span
  m="2438940">but</span> <span m="2439990">don't</span> <span
  m="2440150">quote</span> <span m="2440350">me</span> <span
  m="2440470">on</span> <span m="2440580">that.</span> <span
  m="2443250">Check</span> <span m="2443560">the</span> <span
  m="2444100">section</span> <span m="2444430">in</span> <span
  m="2444510">the</span> <span m="2444590">textbook.</span> <span
  m="2446760">So</span> <span m="2447560">good.</span> <span
  m="2447920">Easy</span> <span m="2448170">to</span> <span
  m="2448280">compute.</span> <span m="2450480">The</span> <span
  m="2450620">analysis</span> <span m="2451020">is</span> <span
  m="2451090">simpler,</span> <span m="2451400">but</span> <span
  m="2451530">it's</span> <span m="2451640">a</span> <span
  m="2451680">little</span> <span m="2451880">bit</span> <span
  m="2452020">easier</span> <span m="2452340">here.</span> <span
  m="2452570">Essentially</span> <span m="2452990">this</span> <span
  m="2453250">is</span> <span m="2453430">very</span> <span
  m="2453660">much</span> <span m="2453930">like</span> <span
  m="2455390">products</span> <span m="2456070">but</span> <span
  m="2456790">there's</span> <span m="2457020">no</span> <span
  m="2457420">carries</span> <span m="2457980">here</span> <span
  m="2458290">from</span> <span m="2458600">one.</span></p><p><span
  m="2459720">When</span> <span m="2459840">we</span> <span
  m="2459930">do</span> <span m="2460040">the</span> <span
  m="2460180">dot</span> <span m="2460450">product</span> <span
  m="2460820">instead</span> <span m="2461100">of</span> <span
  m="2461180">just</span> <span m="2461400">multiplying</span> <span
  m="2462140">in</span> <span m="2462240">base</span> <span m="2462510">m</span>
  <span m="2463200">we</span> <span m="2463310">multiply</span> <span
  m="2463850">them</span> <span m="2463990">based</span> <span
  m="2464240">on</span> <span m="2464380">that</span> <span
  m="2464500">would</span> <span m="2464590">give</span> <span
  m="2464720">the</span> <span m="2464780">same</span> <span
  m="2465030">thing</span> <span m="2465220">as</span> <span
  m="2465310">multiplying</span> <span m="2465810">in</span> <span
  m="2465870">base</span> <span m="2466110">2,</span> <span
  m="2467150">but</span> <span m="2467360">we</span> <span
  m="2467470">get</span> <span m="2467660">carries</span> <span
  m="2468180">from</span> <span m="2468400">one</span> <span
  m="2468810">m-sized</span> <span m="2469360">digit</span> <span
  m="2469670">to</span> <span m="2469770">the</span> <span
  m="2469870">next</span> <span m="2470140">one.</span> <span
  m="2470330">And</span> <span m="2470440">that's</span> <span
  m="2470610">just</span> <span m="2470860">more</span> <span
  m="2471060">annoying</span> <span m="2471350">to</span> <span
  m="2471430">think</span> <span m="2471600">about.</span> <span
  m="2472280">So</span> <span m="2472380">here</span> <span
  m="2472670">we're</span> <span m="2472770">essentially</span> <span
  m="2473150">getting</span> <span m="2473370">rid</span> <span
  m="2473520">of</span> <span m="2473610">carries.</span> <span
  m="2474535">So</span> <span m="2474830">it's in</span> <span
  m="2475320">some</span> <span m="2475480">sense</span> <span
  m="2475690">even</span> <span m="2475900">easier</span> <span
  m="2476200">to</span> <span m="2476280">compute.</span> <span
  m="2477170">And</span> <span m="2477570">in</span> <span
  m="2479140">both</span> <span m="2479410">cases,</span> <span
  m="2479920">it's</span> <span m="2479960">universal.</span></p><p><span
  m="2484370">So</span> <span m="2491850">we</span> <span
  m="2491960">want</span> <span m="2492160">to</span> <span
  m="2492210">prove</span> <span m="2492490">this</span> <span
  m="2492700">property.</span> <span m="2494140">That</span> <span
  m="2494360">if</span> <span m="2494470">we</span> <span
  m="2494570">choose</span> <span m="2494810">a</span> <span
  m="2494930">random</span> <span m="2496442">a</span> <span
  m="2498330">then</span> <span m="2498460">the</span> <span
  m="2498550">probability</span> <span m="2499200">of</span> <span
  m="2499290">two</span> <span m="2499500">keys,</span> <span m="2499820">k
  and</span> <span m="2500120">k'</span> <span m="2500760">which</span> <span
  m="2500820">are</span> <span m="2500870">distinct</span> <span
  m="2501680">mapping</span> <span m="2502170">via</span> <span
  m="2502480">h</span> <span m="2502770">to</span> <span m="2502870">the</span>
  <span m="2503000">same</span> <span m="2503300">value</span> <span
  m="2504290">is</span> <span m="2504820">at</span> <span
  m="2504970">most</span> <span m="2505270">1/m</span> <span
  m="2507610">So</span> <span m="2508290">let's</span> <span
  m="2508720">prove</span> <span m="2509010">that.</span></p><p><span
  m="2526450">So</span> <span m="2530980">we're</span> <span
  m="2531120">given</span> <span m="2532120">two</span> <span
  m="2532330">keys.</span> <span m="2532640">We</span> <span
  m="2532740">have</span> <span m="2532850">no</span> <span
  m="2533090">control</span> <span m="2533520">over</span> <span
  m="2533660">them</span> <span m="2533790">because</span> <span
  m="2533960">this</span> <span m="2534130">has</span> <span
  m="2534290">to</span> <span m="2534390">work</span> <span
  m="2534570">for</span> <span m="2534750">all</span> <span
  m="2535100">keys</span> <span m="2536090">that</span> <span
  m="2536250">are</span> <span m="2536320">distinct.</span> <span
  m="2542430">The</span> <span m="2542550">only</span> <span
  m="2542730">thing</span> <span m="2542890">we</span> <span
  m="2542980">know</span> <span m="2543120">is</span> <span
  m="2543260">that</span> <span m="2543370">they're</span> <span
  m="2543520">distinct.</span> <span m="2544550">Now</span> <span
  m="2544850">if</span> <span m="2545020">two</span> <span
  m="2545200">keys</span> <span m="2545460">are</span> <span
  m="2545530">distinct,</span> <span m="2546550">then</span> <span
  m="2546810">their</span> <span m="2546960">vectors</span> <span
  m="2547370">must</span> <span m="2547610">be</span> <span
  m="2547720">distinct.</span> <span m="2547975">If</span> <span
  m="2548230">two</span> <span m="2548360">vectors</span> <span
  m="2548780">are</span> <span m="2548870">distinct,</span> <span
  m="2549310">that</span> <span m="2549360">means</span> <span
  m="2549570">at</span> <span m="2549620">least</span> <span
  m="2549870">one</span> <span m="2550180">item</span> <span
  m="2550930">must</span> <span m="2551200">be</span> <span
  m="2551290">different.</span> <span m="2552270">Should</span> <span
  m="2552690">sound</span> <span m="2552920">familiar.</span> <span
  m="2559870">So</span> <span m="2560190">this</span> <span
  m="2560390">was</span> <span m="2560560">like</span> <span
  m="2560760">in</span> <span m="2560890">the</span> <span
  m="2561090">matrix</span> <span m="2561770">multiplication</span> <span
  m="2562400">verification</span> <span m="2563240">algorithm</span> <span
  m="2563730">that</span> <span m="2563970">[INAUDIBLE]</span> <span
  m="2564830">taught.</span></p><p><span m="2566420">So</span> <span
  m="2571790">k and k'</span> <span m="2573100">differ</span> <span
  m="2573990">in</span> <span m="2574270">some</span> <span
  m="2574590">digit.</span> <span m="2578190">Let's</span> <span
  m="2578490">call</span> <span m="2578760">that</span> <span
  m="2579030">digit</span> <span m="2579100">d.</span> <span
  m="2582902">So</span> <span m="2583850">k</span> <span m="2584300">sub</span>
  <span m="2584440">d</span> <span m="2585200">is</span> <span
  m="2585390">different</span> <span m="2585830">from</span> <span m="2586380">k
  sub</span> <span m="2586720">d'.</span> <span m="2589370">And</span> <span
  m="2589720">I</span> <span m="2589750">want</span> <span m="2589940">to</span>
  <span m="2590020">compute</span> <span m="2592170">this</span> <span
  m="2592410">probability.</span> <span m="2594590">We'll</span> <span
  m="2595050">rewrite</span> <span m="2595310">it.</span> <span m="2613970">The
  probability</span> <span m="2614355">is</span> <span m="2614740">over</span>
  <span m="2615070">a.</span> <span m="2616450">I'm</span> <span
  m="2616650">choosing</span> <span m="2616970">a</span> <span
  m="2617160">uniformly</span> <span m="2617430">at</span> <span
  m="2617700">random.</span> <span m="2618490">I</span> <span
  m="2618580">want</span> <span m="2618770">another</span> <span
  m="2618980">probability</span> <span m="2619530">that</span> <span
  m="2619710">that</span> <span m="2619900">maps</span> <span m="2620170">k and
  k'</span> <span m="2620970">to</span> <span m="2621070">the</span> <span
  m="2621190">same</span> <span m="2621590">slot.</span></p><p><span
  m="2623520">So</span> <span m="2623880">let</span> <span m="2624030">me</span>
  <span m="2624120">just</span> <span m="2624790">write</span> <span
  m="2625080">out</span> <span m="2625230">the</span> <span
  m="2625320">definition.</span> <span m="2627210">It's</span> <span
  m="2627250">probability</span> <span m="2627900">over</span> <span
  m="2628150">a</span> <span m="2629040">that</span> <span
  m="2630030">the</span> <span m="2630300">dot</span> <span
  m="2630620">product</span> <span m="2631980">of</span> <span m="2632260">a
  and</span> <span m="2633900">k</span> <span m="2638750">is</span> <span
  m="2639020">the</span> <span m="2639100">same</span> <span
  m="2639370">thing</span> <span m="2640390">as</span> <span
  m="2641110">when</span> <span m="2641390">I</span> <span m="2641460">do</span>
  <span m="2641600">the</span> <span m="2641710">dot</span> <span
  m="2641920">product</span> <span m="2642260">with</span> <span
  m="2642380">k'</span> <span m="2649220">mod</span> <span m="2650060">m.</span>
  <span m="2652180">These</span> <span m="2652390">two,</span> <span
  m="2653570">that</span> <span m="2653900">sum</span> <span
  m="2654200">should</span> <span m="2654410">come</span> <span
  m="2654590">out</span> <span m="2654720">the</span> <span
  m="2654790">same,</span> <span m="2655080">mod</span> <span
  m="2655310">m.</span> <span m="2659570">So</span> <span m="2659780">let</span>
  <span m="2659950">me</span> <span m="2660320">move</span> <span
  m="2660710">this</span> <span m="2661460">part</span> <span
  m="2661780">over</span> <span m="2662100">to</span> <span
  m="2662210">this</span> <span m="2662440">side</span> <span
  m="2664140">because</span> <span m="2664590">in</span> <span
  m="2664710">both</span> <span m="2664920">cases</span> <span
  m="2665210">we</span> <span m="2665340">have</span> <span
  m="2665500">the</span> <span m="2665580">same</span> <span
  m="2665870">ai.</span> <span m="2666490">So</span> <span m="2666650">I</span>
  <span m="2666740">can</span> <span m="2666980">group</span> <span
  m="2667230">terms</span> <span m="2668220">and</span> <span
  m="2668440">say</span> <span m="2668670">this</span> <span
  m="2668920">is</span> <span m="2669260">the</span> <span
  m="2669380">probability--</span> <span m="2683190">probability</span> <span
  m="2684220">sum</span> <span m="2684870">over</span> <span
  m="2685330">i</span> <span m="2685640">equals</span> <span
  m="2686100">0</span> <span m="2686415">to</span> <span m="2686730">r
  minus</span> <span m="2686960">1</span> <span m="2688240">of</span> <span
  m="2688610">ai</span> <span m="2689080">times</span> <span
  m="2689750">ki</span> <span m="2690540">minus</span> <span
  m="2690900">ki</span> <span m="2692100">prime</span> <span
  m="2693620">equals</span> <span m="2693990">0.</span> <span
  m="2697730">Mod</span> <span m="2698060">m.</span> <span
  m="2712380">OK,</span> <span m="2712930">no</span> <span
  m="2713170">pun</span> <span m="2713390">intended.</span></p><p><span
  m="2714750">Now</span> <span m="2717130">we</span> <span
  m="2717230">care</span> <span m="2717420">about</span> <span
  m="2717620">this</span> <span m="2717810">digit</span> <span
  m="2718230">d.</span> <span m="2719430">d</span> <span m="2719830">is</span>
  <span m="2719950">a</span> <span m="2720030">place</span> <span
  m="2720390">where</span> <span m="2720540">we</span> <span
  m="2720660">know</span> <span m="2720830">that</span> <span
  m="2721050">this</span> <span m="2721330">is</span> <span
  m="2721480">non-zero.</span> <span m="2722210">So</span> <span
  m="2722390">let</span> <span m="2722560">me</span> <span
  m="2723120">separate</span> <span m="2723690">out</span> <span
  m="2723920">the</span> <span m="2724010">terms</span> <span
  m="2724940">for</span> <span m="2725090">d</span> <span m="2725730">and</span>
  <span m="2725930">everything</span> <span m="2726270">but</span> <span
  m="2726530">d.</span> <span m="2728270">So</span> <span
  m="2728490">this</span> <span m="2728700">is</span> <span
  m="2728830">the</span> <span m="2728910">same</span> <span
  m="2729890">as</span> <span m="2731420">ability</span> <span
  m="2732735">of,</span> <span m="2733170">let's</span> <span
  m="2733500">do</span> <span m="2733630">the</span> <span m="2733810">d</span>
  <span m="2734030">term</span> <span m="2734310">first,</span> <span
  m="2734630">so</span> <span m="2734720">we</span> <span
  m="2734820">have</span> <span m="2735090">ad</span> <span
  m="2736774">times</span> <span m="2737620">kd</span> <span
  m="2738030">minus</span> <span m="2739030">kd</span> <span
  m="2739310">prime.</span> <span m="2741920">That's</span> <span
  m="2742420">one</span> <span m="2742600">term.</span> <span
  m="2743240">I'm</span> <span m="2743370">going</span> <span
  m="2743480">to</span> <span m="2743540">write</span> <span
  m="2743840">the</span> <span m="2743930">summation</span> <span
  m="2744770">of</span> <span m="2746420">i</span> <span m="2746860">not</span>
  <span m="2747140">equal</span> <span m="2747550">to</span> <span
  m="2747640">d</span> <span m="2749630">of</span> <span m="2751277">ai</span>
  <span m="2753722">ki</span> <span m="2754700">minus</span> <span
  m="2755090">ki</span> <span m="2755480">prime.</span></p><p><span
  m="2756646">These ones,</span> <span m="2757050">some</span> <span
  m="2757320">of</span> <span m="2757370">them</span> <span
  m="2757470">might</span> <span m="2757660">be</span> <span
  m="2757740">zero.</span> <span m="2758110">Some</span> <span
  m="2758380">are</span> <span m="2758450">not.</span> <span
  m="2758990">We're</span> <span m="2759270">not</span> <span
  m="2759400">going</span> <span m="2759490">to</span> <span
  m="2759540">worry</span> <span m="2759700">about</span> <span
  m="2759960">it.</span> <span m="2760850">It's</span> <span
  m="2760920">enough</span> <span m="2761180">to</span> <span
  m="2761290">just</span> <span m="2761600">isolate</span> <span
  m="2761980">one</span> <span m="2762230">term</span> <span
  m="2762610">that</span> <span m="2762730">is</span> <span
  m="2762840">non-zero.</span> <span m="2768550">So</span> <span
  m="2768890">this</span> <span m="2769160">thing</span> <span
  m="2770010">we</span> <span m="2770510">know</span> <span
  m="2770590">does</span> <span m="2770730">not</span> <span
  m="2770920">equal</span> <span m="2771150">zero.</span> <span
  m="2774370">Cool.</span> <span m="2775350">Here's</span> <span
  m="2775600">where</span> <span m="2775710">I'm</span> <span
  m="2775770">going</span> <span m="2775860">to</span> <span
  m="2775900">use</span> <span m="2776040">a</span> <span
  m="2776090">little</span> <span m="2776340">bit</span> <span
  m="2776460">of</span> <span m="2776560">number</span> <span
  m="2776830">theory.</span> <span m="2777250">I</span> <span
  m="2777330">haven't</span> <span m="2777580">yet</span> <span
  m="2777790">used</span> <span m="2778090">that</span> <span
  m="2778330">m</span> <span m="2778570">is</span> <span
  m="2778730">prime.</span> <span m="2780360">I</span> <span
  m="2780450">required</span> <span m="2782120">m</span> <span
  m="2782340">is</span> <span m="2782470">prime</span> <span
  m="2783620">because</span> <span m="2785030">when</span> <span
  m="2785200">you're</span> <span m="2785310">working</span> <span
  m="2785680">modulo</span> <span m="2786190">m,</span> <span
  m="2787120">you</span> <span m="2787290">have</span> <span
  m="2787750">multiplicative</span> <span m="2788620">inverses.</span> <span
  m="2790470">Because</span> <span m="2790860">this</span> <span
  m="2791020">is</span> <span m="2791170">not zero,</span> <span
  m="2792270">there is</span> <span m="2792430">something</span> <span
  m="2792750">I</span> <span m="2792800">can</span> <span
  m="2792960">multiply</span> <span m="2793780">on</span> <span
  m="2793980">both</span> <span m="2794200">sides</span> <span
  m="2795190">and</span> <span m="2795430">get</span> <span
  m="2798510">this</span> <span m="2798930">to</span> <span
  m="2799070">cancel</span> <span m="2799500">out</span> <span
  m="2799630">and</span> <span m="2799730">become</span> <span
  m="2800020">one.</span></p><p><span m="2800800">For</span> <span
  m="2800970">every</span> <span m="2801250">value</span> <span
  m="2801770">x</span> <span m="2802600">there is</span> <span
  m="2802840">a</span> <span m="2802880">value</span> <span
  m="2803200">y.</span> <span m="2803650">So</span> <span m="2803900">x</span>
  <span m="2804100">times</span> <span m="2804320">y</span> <span
  m="2804610">equals</span> <span m="2804890">1 modulo</span> <span
  m="2805600">m.</span> <span m="2806170">And</span> <span
  m="2806300">you</span> <span m="2806380">can</span> <span
  m="2806510">even</span> <span m="2806720">compute</span> <span
  m="2807070">it</span> <span m="2807300">in</span> <span
  m="2807460">constant</span> <span m="2807810">time</span> <span
  m="2808070">in</span> <span m="2808140">a</span> <span
  m="2808220">reasonable</span> <span m="2808610">model.</span> <span
  m="2810410">So</span> <span m="2817090">then</span> <span m="2817480">I</span>
  <span m="2817590">can</span> <span m="2817750">say</span> <span
  m="2818380">I</span> <span m="2818530">want</span> <span
  m="2818810">the</span> <span m="2818890">probability</span> <span
  m="2820220">that</span> <span m="2820400">ad</span> <span
  m="2825940">is</span> <span m="2826500">minus</span> <span
  m="2828290">kd</span> <span m="2828890">minus</span> <span
  m="2829490">kd</span> <span m="2830280">prime</span> <span
  m="2831370">inverse.</span> <span m="2832030">This</span> <span
  m="2832210">is</span> <span m="2832320">the</span> <span
  m="2832420">multiplicative</span> <span m="2832950">inverse</span> <span
  m="2833210">I was</span> <span m="2833470">talking</span> <span
  m="2833740">about.</span></p><p><span m="2834520">And</span> <span
  m="2834760">then</span> <span m="2835030">the</span> <span
  m="2835300">sum</span> <span m="2836600">i</span> <span m="2836810">not</span>
  <span m="2837040">equal</span> <span m="2837310">to</span> <span
  m="2837390">d</span> <span m="2839010">whatever,</span> <span
  m="2839950">I</span> <span m="2840110">don't</span> <span
  m="2840240">actually</span> <span m="2840680">care</span> <span
  m="2841000">what</span> <span m="2841180">this</span> <span
  m="2841490">is</span> <span m="2841850">too</span> <span
  m="2841980">much,</span> <span m="2845280">I've</span> <span
  m="2845420">already done</span> <span m="2845690">the equals</span> <span
  m="2846020">part.</span> <span m="2847270">I still</span> <span
  m="2847660">need to write</span> <span m="2848130">mod m.</span> <span
  m="2851240">The</span> <span m="2851320">point</span> <span
  m="2851550">is</span> <span m="2851950">this</span> <span
  m="2852250">is</span> <span m="2852590">all</span> <span
  m="2853120">about</span> <span m="2853680">ad.</span> <span
  m="2856520">Remember</span> <span m="2857130">we're</span> <span
  m="2857260">choosing</span> <span m="2857620">a</span> <span
  m="2857860">uniformly</span> <span m="2858510">at</span> <span
  m="2858610">random.</span> <span m="2858850">That's</span> <span
  m="2859100">the</span> <span m="2859190">same</span> <span
  m="2859500">thing</span> <span m="2860160">as</span> <span
  m="2860330">choosing</span> <span m="2860700">each</span> <span
  m="2860960">of</span> <span m="2861060">the</span> <span
  m="2861190">ai's</span> <span m="2862220">independently</span> <span
  m="2863310">uniformly</span> <span m="2863910">at</span> <span
  m="2863990">random.</span> <span m="2865896">Yeah?</span></p><p><span
  m="2867372">STUDENT: Is</span> <span m="2867864">the second</span> <span
  m="2868356">line</span> <span m="2868848">over there</span> <span
  m="2869340">isolating</span> <span m="2869832">d</span> <span
  m="2870324">[INAUDIBLE]?</span> <span m="2873276">Second</span> <span
  m="2873768">from the</span> <span m="2874260">top.</span></p><p><span
  m="2874770">ERIK DEMAINE: Which?</span> <span m="2875500">This</span> <span
  m="2875680">one?</span></p><p><span m="2876020">STUDENT: No
  up.</span></p><p><span m="2876520">ERIK DEMAINE: This?</span></p><p><span
  m="2876970">STUDENT: Down.</span> <span m="2878416">That one.</span> <span
  m="2878898">No.</span> <span m="2879380">The one below
  that.</span></p><p><span m="2879862">ERIK DEMAINE: Yes.</span></p><p><span
  m="2881790">STUDENT: Is</span> <span m="2882272">that line</span> <span
  m="2882754">isolating</span> <span m="2883236">d or is
  that--</span></p><p><span m="2883730">ERIK DEMAINE: No.</span> <span
  m="2884300">I</span> <span m="2884430">haven't</span> <span
  m="2884660">isolated</span> <span m="2884950">d</span> <span
  m="2885240">yet.</span> <span m="2885490">This</span> <span
  m="2885640">is</span> <span m="2885760">all</span> <span
  m="2885980">the</span> <span m="2886080">terms.</span> <span
  m="2886970">And</span> <span m="2887090">then</span> <span
  m="2887280">going</span> <span m="2887470">from</span> <span
  m="2887660">this</span> <span m="2887860">line</span> <span
  m="2888070">to</span> <span m="2888160">this</span> <span
  m="2888380">one,</span> <span m="2888970">I'm</span> <span
  m="2889110">just</span> <span m="2889570">pulling out</span> <span
  m="2890190">the</span> <span m="2890750">i</span> <span
  m="2890940">equals</span> <span m="2891300">d</span> <span
  m="2891500">term.</span> <span m="2892910">That's</span> <span
  m="2893140">this</span> <span m="2893320">term.</span> <span
  m="2893650">And</span> <span m="2893780">then</span> <span
  m="2893920">separating</span> <span m="2894480">out</span> <span
  m="2894580">the</span> <span m="2894670">i not</span> <span
  m="2894980">equal</span> <span m="2895200">to</span> <span
  m="2895280">d.</span></p><p><span m="2896324">STUDENT: I</span> <span
  m="2896706">get it.</span></p><p><span m="2897090">ERIK DEMAINE: Right?</span>
  <span m="2897380">This</span> <span m="2897960">sum</span> <span
  m="2898250">is</span> <span m="2898360">just</span> <span
  m="2898520">the</span> <span m="2898590">same</span> <span
  m="2898810">as</span> <span m="2898880">that</span> <span
  m="2899090">sum.</span> <span m="2899290">But</span> <span
  m="2899440">I've</span> <span m="2899540">done</span> <span
  m="2899690">the</span> <span m="2899780">d</span> <span
  m="2899940">term</span> <span m="2900180">explicitly.</span></p><p><span
  m="2900480">STUDENT: Sure.</span> <span m="2900780">I</span> <span
  m="2901280">get it.</span></p><p><span m="2904310">ERIK DEMAINE: So</span>
  <span m="2905130">I've</span> <span m="2905620">done</span> <span
  m="2905850">all</span> <span m="2905980">this</span> <span
  m="2906140">rewriting</span> <span m="2907150">because</span> <span
  m="2907500">I</span> <span m="2907560">know</span> <span
  m="2907750">that</span> <span m="2907890">ad</span> <span
  m="2908220">is</span> <span m="2908360">chosen</span> <span
  m="2908660">uniformly</span> <span m="2909230">at</span> <span
  m="2909310">random.</span> <span m="2909780">Here</span> <span
  m="2910350">we</span> <span m="2910530">have</span> <span
  m="2910770">this</span> <span m="2911650">thing,</span> <span
  m="2912250">this</span> <span m="2912480">monstrosity,</span> <span
  m="2914340">but</span> <span m="2915050">it</span> <span
  m="2915250">does</span> <span m="2915430">not</span> <span
  m="2915770">depend</span> <span m="2916240">on</span> <span
  m="2916440">ad.</span> <span m="2916890">In</span> <span
  m="2916980">fact</span> <span m="2917230">it</span> <span
  m="2917310">is</span> <span m="2917610">independent</span> <span
  m="2918950">of</span> <span m="2919150">ad.</span> <span
  m="2919300">I'm</span> <span m="2920230">going</span> <span
  m="2920320">to</span> <span m="2920410">write</span> <span
  m="2920640">this</span> <span m="2920840">as</span> <span m="2921130">a</span>
  <span m="2921170">function</span> <span m="2922570">of</span> <span
  m="2922740">k</span> <span m="2923250">and</span> <span m="2923420">k'</span>
  <span m="2924570">because</span> <span m="2924740">those</span> <span
  m="2924920">are</span> <span m="2924980">given</span> <span
  m="2925290">to</span> <span m="2925430">us</span> <span m="2925600">and</span>
  <span m="2925720">fixed.</span> <span m="2926850">And</span> <span
  m="2927050">then</span> <span m="2927170">it's</span> <span
  m="2927310">also</span> <span m="2927550">a</span> <span
  m="2927600">function</span> <span m="2928020">of</span> <span
  m="2928460">a0</span> <span m="2929350">and</span> <span
  m="2929600">a1.</span> <span m="2930310">Everything</span> <span
  m="2931020">except</span> <span m="2931880">d.</span> <span
  m="2933520">So</span> <span m="2935000">ad</span> <span m="2935300">minus
  1,</span> <span m="2936580">ad</span> <span m="2937070">plus</span> <span
  m="2937410">1,</span> <span m="2938710">and</span> <span m="2938920">so</span>
  <span m="2939110">on</span> <span m="2939900">up</span> <span
  m="2940120">to</span> <span m="2940520">ar minus</span> <span
  m="2941020">1.</span></p><p><span m="2941920">This</span> <span
  m="2942060">is</span> <span m="2942440">awkward</span> <span
  m="2942830">to</span> <span m="2942990">write.</span> <span
  m="2943700">But</span> <span m="2944040">everything</span> <span
  m="2944410">except</span> <span m="2944725">ad</span> <span
  m="2945383">appears</span> <span m="2946070">here</span> <span
  m="2946230">because</span> <span m="2946500">we have</span> <span
  m="2946690">i</span> <span m="2946910">not</span> <span
  m="2947170">equal</span> <span m="2947450">to</span> <span
  m="2947530">d.</span> <span m="2949230">And</span> <span
  m="2949450">these</span> <span m="2949720">ai's</span> <span
  m="2950720">are</span> <span m="2951560">random</span> <span
  m="2951860">variables.</span> <span m="2953040">But</span> <span
  m="2953690">we're</span> <span m="2953890">assuming</span> <span
  m="2954290">that</span> <span m="2954430">they're</span> <span
  m="2954550">all</span> <span m="2954800">chosen</span> <span
  m="2955770">independently</span> <span m="2956460">from</span> <span
  m="2956660">each</span> <span m="2956830">other.</span> <span
  m="2957910">So</span> <span m="2958070">I</span> <span
  m="2958210">don't</span> <span m="2958570">really</span> <span
  m="2958920">care</span> <span m="2959940">what's</span> <span
  m="2960210">going</span> <span m="2960490">on in</span> <span
  m="2960740">this</span> <span m="2960910">function.</span> <span
  m="2961720">It's</span> <span m="2961860">something.</span> <span
  m="2962660">And</span> <span m="2962960">if</span> <span m="2963090">I</span>
  <span m="2963190">rewrite</span> <span m="2963690">this</span> <span
  m="2963850">probability,</span> <span m="2964390">it's</span> <span
  m="2964510">the</span> <span m="2964600">probability</span> <span
  m="2965100">over</span> <span m="2965260">the</span> <span
  m="2965350">choice</span> <span m="2965610">of</span> <span
  m="2965780">a.</span> <span m="2967636">I</span> <span m="2968100">can</span>
  <span m="2968300">separate</span> <span m="2968780">out</span> <span
  m="2968990">the</span> <span m="2969080">choice</span> <span
  m="2969550">of</span> <span m="2969710">all</span> <span
  m="2969910">these</span> <span m="2970190">things</span> <span
  m="2971720">from</span> <span m="2973710">the</span> <span
  m="2973820">choice</span> <span m="2974200">of</span> <span
  m="2974320">ad.</span> <span m="2975320">And this</span> <span
  m="2976010">is</span> <span m="2976190">just</span> <span m="2976400">a</span>
  <span m="2977015">useful</span> <span m="2977340">formula.</span></p><p><span
  m="2979560">I'm</span> <span m="2979570">going</span> <span
  m="2979660">to</span> <span m="2979750">write</span> <span
  m="2980100">a</span> <span m="2981460">not</span> <span
  m="2981850">equal</span> <span m="2982210">to</span> <span
  m="2982290">d.</span> <span m="2983500">All</span> <span
  m="2983680">the</span> <span m="2983820">other--</span> <span
  m="2985460">maybe</span> <span m="2985690">I'll</span> <span
  m="2985780">write</span> <span m="2986110">a</span> <span
  m="2986480">sub</span> <span m="2986760">i</span> <span m="2987150">not</span>
  <span m="2987400">equal</span> <span m="2987660">to</span> <span
  m="2987750">d.</span> <span m="2988400">All</span> <span
  m="2988690">the</span> <span m="2988790">choices</span> <span
  m="2989210">of</span> <span m="2989320">those</span> <span
  m="2989580">guys</span> <span m="2990360">separately</span> <span
  m="2991080">from</span> <span m="2992160">the</span> <span
  m="2992270">probability</span> <span m="2993880">of</span> <span
  m="2994130">choosing</span> <span m="2994550">ad</span> <span
  m="2997790">of</span> <span m="2998460">ad</span> <span
  m="2999700">equal</span> <span m="3000090">to</span> <span
  m="3000400">this</span> <span m="3000620">function.</span> <span
  m="3005090">If</span> <span m="3005230">you</span> <span
  m="3005320">just</span> <span m="3005470">think</span> <span
  m="3005640">about</span> <span m="3005860">the</span> <span
  m="3005940">definition</span> <span m="3006410">of</span> <span
  m="3006500">expectation,</span> <span m="3008200">this</span> <span
  m="3008380">is</span> <span m="3008700">doing</span> <span
  m="3008970">the</span> <span m="3009040">same</span> <span
  m="3009280">thing.</span> <span m="3009560">We're</span> <span
  m="3009690">thinking</span> <span m="3010100">of</span> <span
  m="3010990">first</span> <span m="3011390">choosing</span> <span
  m="3011740">the</span> <span m="3011920">ai's</span> <span
  m="3012460">where</span> <span m="3012780">i</span> <span
  m="3012930">is</span> <span m="3013070">not</span> <span
  m="3013260">equal</span> <span m="3013500">to</span> <span
  m="3013580">d.</span> <span m="3014370">And</span> <span
  m="3014530">then</span> <span m="3014710">we</span> <span
  m="3014810">choose</span> <span m="3015110">ad.</span> <span
  m="3015970">And</span> <span m="3016400">this</span> <span
  m="3016700">computational</span> <span m="3017080">will</span> <span
  m="3017460">come</span> <span m="3017670">out</span> <span
  m="3017830">the</span> <span m="3017920">same</span> <span
  m="3018770">as</span> <span m="3019150">that.</span></p><p><span
  m="3025110">But</span> <span m="3025240">this</span> <span
  m="3025450">is</span> <span m="3025540">the</span> <span
  m="3025650">probability</span> <span m="3026280">of</span> <span
  m="3026370">a</span> <span m="3026440">uniformly</span> <span
  m="3027190">random</span> <span m="3027500">number</span> <span
  m="3028720">equaling</span> <span m="3029480">something.</span> <span
  m="3031680">So</span> <span m="3032620">we</span> <span
  m="3032820">just</span> <span m="3033030">need</span> <span
  m="3033160">to</span> <span m="3033220">think</span> <span
  m="3033420">about--</span> <span m="3034690">sorry.</span> <span
  m="3035950">Important.</span> <span m="3037470">That</span> <span
  m="3037630">would</span> <span m="3037730">be</span> <span
  m="3038350">pretty</span> <span m="3038600">unlikely</span> <span
  m="3038920">that would</span> <span m="3039090">be</span> <span
  m="3039190">1/u,</span> <span m="3039810">but</span> <span
  m="3039990">this</span> <span m="3040140">is</span> <span
  m="3040270">all</span> <span m="3040570">working</span> <span
  m="3040900">modulo</span> <span m="3041440">m.</span> <span
  m="3042970">So</span> <span m="3043120">if</span> <span m="3043220">I</span>
  <span m="3043290">just</span> <span m="3043460">take</span> <span
  m="3043630">a</span> <span m="3043700">uniformly</span> <span
  m="3044380">random</span> <span m="3044610">integer</span> <span
  m="3045760">and</span> <span m="3045830">the</span> <span
  m="3045900">chance</span> <span m="3046230">of</span> <span m="3046410">it
  hitting</span> <span m="3046650">any</span> <span
  m="3046930">particular</span> <span m="3047410">value</span> <span
  m="3047760">mod</span> <span m="3047980">m</span> <span m="3048500">is</span>
  <span m="3049350">1/m.</span> <span m="3053230">And</span> <span
  m="3053380">that's</span> <span m="3053590">universality.</span> <span
  m="3057430">So</span> <span m="3057570">in</span> <span
  m="3057630">this</span> <span m="3057790">case,</span> <span
  m="3058090">you</span> <span m="3058190">get</span> <span
  m="3058200">exactly</span> <span m="3058690">1/m,</span> <span
  m="3059710">no</span> <span m="3059890">less</span> <span
  m="3060100">than</span> <span m="3060180">or</span> <span
  m="3060240">equal</span> <span m="3060460">to.</span> <span
  m="3062500">Sorry,</span> <span m="3062740">I</span> <span
  m="3062860">should</span> <span m="3063040">have</span> <span
  m="3063150">written</span> <span m="3063840">it's</span> <span
  m="3063990">the</span> <span m="3064130">expectation</span> <span
  m="3065450">of</span> <span m="3065600">1/m,</span> <span
  m="3066440">but</span> <span m="3066620">that's</span> <span
  m="3066830">1/m</span> <span m="3068100">because</span> <span
  m="3068390">1/m</span> <span m="3068920">has</span> <span
  m="3069130">no</span> <span m="3069320">random</span> <span
  m="3069720">parts</span> <span m="3070050">in</span> <span
  m="3070160">it.</span> <span m="3072540">Yeah?</span></p><p><span
  m="3073412">STUDENT: How do</span> <span m="3073864">we know</span> <span
  m="3074316">that the,</span> <span m="3075220">that</span> <span
  m="3075672">this</span> <span m="3076124">expression</span> <span
  m="3077028">doesn't</span> <span m="3077480">have</span> <span
  m="3077820">any</span> <span m="3078160">biases</span> <span
  m="3078960">in</span> <span m="3079380">the sense</span> <span
  m="3079735">that it</span> <span m="3080090">doesn't</span> <span
  m="3080480">give</span> <span m="3081390">more,</span> <span
  m="3082460">more,</span> <span m="3082870">like if you</span> <span
  m="3083351">give it</span> <span m="3083832">the</span> <span
  m="3084313">uniform</span> <span m="3085275">distribution</span> <span
  m="3085756">of</span> <span m="3086237">numbers,</span> <span m="3086718">it
  doesn't</span> <span m="3087199">spit out</span> <span m="3087680">more
  numbers</span> <span m="3088161">than others</span> <span
  m="3088642">and</span> <span m="3089123">that</span> <span
  m="3089604">could</span> <span m="3090085">potentially--</span></p><p><span
  m="3091050">ERIK DEMAINE: Oh,</span> <span m="3091210">so</span> <span
  m="3091340">you're</span> <span m="3091520">asking</span> <span
  m="3091930">how</span> <span m="3092200">do</span> <span m="3092310">we</span>
  <span m="3092430">know</span> <span m="3092770">that</span> <span
  m="3093050">this</span> <span m="3094010">hash</span> <span
  m="3094310">family</span> <span m="3094930">doesn't</span> <span
  m="3095360">prefer</span> <span m="3095730">some</span> <span
  m="3095960">slots</span> <span m="3096310">over</span> <span
  m="3096590">others,</span> <span m="3097610">I</span> <span
  m="3097720">guess.</span></p><p><span m="3098085">STUDENT: Of</span> <span
  m="3098450">course</span> <span m="3098938">like</span> <span
  m="3099426">after</span> <span m="3099914">the</span> <span
  m="3100402">equals</span> <span m="3100890">sign,</span> <span
  m="3101378">like</span> <span m="3103330">in this</span> <span
  m="3103818">middle</span> <span m="3104306">line</span> <span
  m="3104794">in</span> <span m="3105282">the</span> <span
  m="3105770">middle.</span> <span m="3106258">Middle board.</span></p><p><span
  m="3106760">ERIK DEMAINE: This</span> <span m="3106930">one?</span> <span
  m="3107590">Oh,</span> <span m="3107680">this</span> <span
  m="3107840">one.</span></p><p><span m="3109394">STUDENT: Middle</span> <span
  m="3109806">board.</span></p><p><span m="3110220">ERIK DEMAINE: Middle</span>
  <span m="3110640">board.</span> <span m="3111570">Here.</span></p><p><span
  m="3112030">STUDENT: Yes.</span> <span m="3113368">So how do</span> <span
  m="3113814">we know</span> <span m="3114260">that</span> <span
  m="3114480">if</span> <span m="3114530">you</span> <span
  m="3114580">give</span> <span m="3114630">it--</span></p><p><span
  m="3114680">ERIK DEMAINE: This function.</span></p><p><span
  m="3115100">STUDENT: --random</span> <span m="3115940">variables, it</span>
  <span m="3117200">won't</span> <span m="3117830">prefer</span> <span
  m="3118940">certain</span> <span m="3119260">numbers</span> <span
  m="3119760">over</span> <span m="3120120">others?</span></p><p><span
  m="3120480">ERIK DEMAINE: So</span> <span m="3120640">this</span> <span
  m="3120900">function</span> <span m="3121840">may</span> <span
  m="3122200">prefer</span> <span m="3122720">some</span> <span
  m="3122970">numbers</span> <span m="3123560">over</span> <span
  m="3123830">others.</span> <span m="3124940">But</span> <span
  m="3124970">it</span> <span m="3125090">doesn't</span> <span
  m="3125400">matter.</span> <span m="3126300">All</span> <span
  m="3126590">we</span> <span m="3126710">need</span> <span
  m="3126980">is</span> <span m="3127180">that</span> <span
  m="3127320">this</span> <span m="3127560">function</span> <span
  m="3128310">is</span> <span m="3128510">independent</span> <span
  m="3129080">of our</span> <span m="3129300">choice</span> <span
  m="3129560">of</span> <span m="3129680">ad.</span> <span m="3130285">So</span>
  <span m="3130730">you</span> <span m="3130840">can</span> <span
  m="3130990">think</span> <span m="3131230">of</span> <span
  m="3131350">this</span> <span m="3131650">function,</span> <span
  m="3132500">you</span> <span m="3132640">choose</span> <span
  m="3132940">all</span> <span m="3133160">of</span> <span
  m="3133280">these</span> <span m="3133640">random--</span> <span
  m="3134270">actually</span> <span m="3134580">k  and</span> <span
  m="3134870">k'</span> <span m="3135010">are</span> <span
  m="3135310">not</span> <span m="3135500">random--</span> <span
  m="3136170">but</span> <span m="3136500">you</span> <span
  m="3136640">choose</span> <span m="3136950">all</span> <span
  m="3137120">these</span> <span m="3137300">random</span> <span
  m="3137580">numbers.</span> <span m="3138360">Then</span> <span
  m="3138520">you</span> <span m="3138640">evaluate</span> <span
  m="3139090">your f.</span> <span m="3139220">Maybe</span> <span
  m="3139650">it</span> <span m="3139730">always</span> <span
  m="3139960">comes</span> <span m="3140170">out</span> <span
  m="3140320">to</span> <span m="3140390">5.</span></p><p><span
  m="3141040">Who</span> <span m="3141170">knows.</span> <span
  m="3141470">It</span> <span m="3141590">could</span> <span
  m="3141710">be</span> <span m="3141800">super biased.</span> <span
  m="3143090">But</span> <span m="3143270">then</span> <span
  m="3143520">you</span> <span m="3143660">choose ad</span> <span
  m="3144030">uniformly</span> <span m="3145060">at</span> <span
  m="3145120">random.</span> <span m="3146430">So</span> <span
  m="3147360">the</span> <span m="3147430">chance</span> <span
  m="3147710">of</span> <span m="3147790">ad</span> <span
  m="3147900">equalling</span> <span m="3148430">5</span> <span
  m="3148830">is</span> <span m="3148950">the</span> <span
  m="3149030">same</span> <span m="3149350">as</span> <span
  m="3149480">the</span> <span m="3149570">chance</span> <span
  m="3149830">of</span> <span m="3149890">ad</span> <span
  m="3150000">equaling</span> <span m="3150670">3.</span> <span
  m="3151730">So</span> <span m="3151910">in</span> <span m="3151970">all</span>
  <span m="3152240">cases,</span> <span m="3152780">you</span> <span
  m="3152830">get</span> <span m="3153010">the</span> <span
  m="3153110">probability</span> <span m="3153680">is</span> <span
  m="3153780">1/m.</span> <span m="3154410">What</span> <span
  m="3154600">we</span> <span m="3154740">need</span> <span
  m="3155140">is</span> <span m="3155340">independence.</span> <span
  m="3156020">We</span> <span m="3156150">need</span> <span m="3156370">that
  the</span> <span m="3156720">ad</span> <span m="3157540">is</span> <span
  m="3157950">chosen</span> <span m="3158240">independently</span> <span
  m="3158770">from</span> <span m="3158900">the</span> <span
  m="3159010">other</span> <span m="3159220">ai's.</span></p><p><span
  m="3159810">But</span> <span m="3160000">we</span> <span
  m="3160100">don't</span> <span m="3160250">need</span> <span
  m="3160390">to</span> <span m="3160470">know</span> <span
  m="3160630">anything</span> <span m="3160990">about</span> <span
  m="3161200">f</span> <span m="3162010">other</span> <span
  m="3162210">than</span> <span m="3162400">it</span> <span
  m="3162520">doesn't</span> <span m="3162780">depend</span> <span
  m="3163080">on</span> <span m="3163220">ad.</span> <span m="3164640">So</span>
  <span m="3165080">and</span> <span m="3165450">we</span> <span
  m="3165710">made</span> <span m="3165930">it</span> <span
  m="3166150">not</span> <span m="3166340">depend</span> <span
  m="3166600">on</span> <span m="3166720">ad</span> <span
  m="3166990">because</span> <span m="3167210">I</span> <span
  m="3167590">isolated</span> <span m="3168250">ad</span> <span
  m="3168690">by</span> <span m="3168860">pulling</span> <span
  m="3169320">it</span> <span m="3169400">out</span> <span m="3169590">of</span>
  <span m="3169700">that</span> <span m="3169890">summation.</span> <span
  m="3170600">So</span> <span m="3170680">we</span> <span
  m="3170760">know</span> <span m="3170910">there's</span> <span
  m="3171080">no</span> <span m="3171290">ad's</span> <span
  m="3171640">over</span> <span m="3171830">here.</span> <span
  m="3173370">Good</span> <span m="3173480">question.</span> <span
  m="3176110">You</span> <span m="3176290">get</span> <span m="3176610">a</span>
  <span m="3176930">bonus</span> <span m="3177360">Frisbee</span> <span
  m="3177760">for</span> <span m="3178070">your</span> <span
  m="3178380">question.</span></p><p><span m="3181500">All</span> <span
  m="3181590">right.</span> <span m="3182890">That</span> <span
  m="3183320">ends</span> <span m="3184280">universal</span> <span
  m="3184760">hashing.</span> <span m="3186520">Any</span> <span
  m="3186680">more</span> <span m="3186870">questions?</span> <span
  m="3188010">So</span> <span m="3188240">at</span> <span
  m="3188350">this</span> <span m="3188520">point</span> <span
  m="3188830">we</span> <span m="3188960">have</span> <span
  m="3189660">at</span> <span m="3189800">least</span> <span
  m="3190110">one</span> <span m="3190390">universal</span> <span
  m="3190900">hash</span> <span m="3191160">family.</span> <span
  m="3192350">So</span> <span m="3192640">we're</span> <span
  m="3192760">just</span> <span m="3192970">choosing,</span> <span
  m="3193590">in</span> <span m="3193670">this</span> <span
  m="3193820">case,</span> <span m="3194100">a</span> <span
  m="3194420">uniformly</span> <span m="3195050">at</span> <span
  m="3195150">random.</span> <span m="3195790">In</span> <span
  m="3196030">the</span> <span m="3196310">other</span> <span
  m="3196670">method,</span> <span m="3197050">we</span> <span
  m="3197130">choose</span> <span m="3197230">a and b</span> <span
  m="3197730">uniformly</span> <span m="3198300">at</span> <span
  m="3198400">random.</span> <span m="3199400">And</span> <span
  m="3199620">then</span> <span m="3200840">we</span> <span
  m="3200940">build</span> <span m="3201210">our</span> <span
  m="3201270">hash</span> <span m="3201510">table.</span> <span
  m="3203040">And</span> <span m="3203780">the</span> <span
  m="3204280">hash</span> <span m="3204510">function</span> <span
  m="3204810">depends</span> <span m="3205150">on</span> <span
  m="3205270">m.</span></p><p><span m="3205760">So also</span> <span
  m="3206000">every</span> <span m="3206220">time</span> <span
  m="3206400">we</span> <span m="3206500">double</span> <span
  m="3206830">our</span> <span m="3206940">table</span> <span
  m="3207210">size,</span> <span m="3207500">we're</span> <span
  m="3207600">going</span> <span m="3207740">to have to</span> <span
  m="3207850">choose</span> <span m="3208060">a</span> <span
  m="3208130">new</span> <span m="3208400">hash</span> <span
  m="3208630">function</span> <span m="3209570">for</span> <span
  m="3209670">the</span> <span m="3209770">new</span> <span
  m="3209920">value</span> <span m="3210230">of</span> <span
  m="3210310">m.</span> <span m="3212340">And</span> <span
  m="3212790">that's</span> <span m="3213150">about</span> <span
  m="3213390">it.</span> <span m="3214440">So</span> <span
  m="3214590">this</span> <span m="3214780">will</span> <span
  m="3214880">give</span> <span m="3215080">us</span> <span
  m="3215250">constant</span> <span m="3216140">expected</span> <span
  m="3216680">time--</span> <span m="3218220">or</span> <span
  m="3218430">in</span> <span m="3218480">general</span> <span m="3218790">1
  plus</span> <span m="3219180">alpha</span> <span m="3219510">if</span> <span
  m="3219620">you're</span> <span m="3219720">not</span> <span
  m="3219880">doing</span> <span m="3220050">table</span> <span
  m="3220310">doubling--</span> <span m="3221730">for</span> <span
  m="3222000">insert,</span> <span m="3222480">delete,</span> <span
  m="3222790">and</span> <span m="3222940">exact</span> <span
  m="3223290">search.</span> <span m="3225230">Just</span> <span
  m="3225440">building</span> <span m="3225880">on</span> <span
  m="3226340">the</span> <span m="3226570">hashing</span> <span
  m="3226960">with</span> <span m="3227050">chaining.</span> <span
  m="3229230">And</span> <span m="3229460">so</span> <span
  m="3229780">this</span> <span m="3230000">is a</span> <span
  m="3230040">good</span> <span m="3230190">method.</span> <span
  m="3230760">Question?</span></p><p><span m="3231551">STUDENT: Why do</span>
  <span m="3232042">you say</span> <span m="3232533">expected</span> <span
  m="3233024">value</span> <span m="3233515">of</span> <span m="3234006">the
  probability?</span> <span m="3234497">Isn't it</span> <span
  m="3234988">sufficient to</span> <span m="3235479">just say</span> <span
  m="3235970">the probability</span> <span m="3236461">of</span> <span
  m="3236952">[INAUDIBLE]?</span></p><p><span m="3238430">ERIK DEMAINE:
  Uh,</span> <span m="3239370">yeah,</span> <span m="3240880">I</span> <span
  m="3241160">wanted</span> <span m="3241370">to</span> <span
  m="3241540">isolate--</span> <span m="3242210">it</span> <span
  m="3242660">is</span> <span m="3242790">the</span> <span
  m="3243010">overall</span> <span m="3243360">probability</span> <span
  m="3244340">of</span> <span m="3244470">this</span> <span
  m="3244610">happening.</span> <span m="3245400">I</span> <span
  m="3245500">rewrote</span> <span m="3245940">it</span> <span
  m="3246070">this</span> <span m="3246260">way</span> <span
  m="3246440">because</span> <span m="3246770">I</span> <span
  m="3246830">wanted</span> <span m="3247140">to</span> <span
  m="3247250">think</span> <span m="3247480">about</span> <span
  m="3247790">first</span> <span m="3248130">choosing</span> <span
  m="3248460">the</span> <span m="3248600">ai's</span> <span
  m="3249030">where</span> <span m="3249180">i</span> <span
  m="3249290">does</span> <span m="3249460">not</span> <span
  m="3249640">equal</span> <span m="3249850">d</span> <span
  m="3250410">and</span> <span m="3250590">then</span> <span
  m="3250800">choosing</span> <span m="3251830">ad.</span> <span
  m="3252225">So</span> <span m="3252620">this</span> <span
  m="3252810">probability</span> <span m="3253340">was</span> <span
  m="3253430">supposed</span> <span m="3253680">to</span> <span
  m="3253740">be</span> <span m="3253900">only</span> <span
  m="3254180">over</span> <span m="3254360">the</span> <span
  m="3254480">choice</span> <span m="3254760">of</span> <span
  m="3254840">ad.</span> <span m="3255626">And</span> <span
  m="3256020">you</span> <span m="3256090">have</span> <span
  m="3256250">to</span> <span m="3256350">do</span> <span
  m="3256470">something</span> <span m="3256900">with</span> <span
  m="3257020">the</span> <span m="3257120">other</span> <span
  m="3257340">ai's</span> <span m="3257700">because</span> <span
  m="3257870">they're</span> <span m="3258020">random.</span></p><p><span
  m="3258470">You</span> <span m="3258580">can't just</span> <span
  m="3258860">say,</span> <span m="3259050">what's</span> <span
  m="3259300">the</span> <span m="3259400">probability</span> <span
  m="3259920">ad</span> <span m="3260110">equaling</span> <span
  m="3260870">a</span> <span m="3261040">random</span> <span
  m="3261360">variable?</span> <span m="3261800">That's</span> <span
  m="3262080">a</span> <span m="3262140">little</span> <span
  m="3262400">sketchy.</span> <span m="3263300">I</span> <span
  m="3263420">wanted</span> <span m="3263670">to</span> <span
  m="3263710">have</span> <span m="3263860">no</span> <span
  m="3264040">random</span> <span m="3264280">variables</span> <span
  m="3264700">over</span> <span m="3264950">all.</span> <span
  m="3265255">So</span> <span m="3265560">I</span> <span m="3265840">have</span>
  <span m="3266040">to</span> <span m="3266200">kind</span> <span
  m="3266390">of</span> <span m="3266560">bind</span> <span
  m="3266900">those</span> <span m="3267140">variables</span> <span
  m="3267630">with</span> <span m="3267930">something.</span> <span
  m="3268460">And</span> <span m="3269410">I</span> <span
  m="3269540">just</span> <span m="3269710">want</span> <span
  m="3269870">to</span> <span m="3270240">see</span> <span
  m="3270580">what</span> <span m="3270850">the--</span> <span
  m="3271642">This</span> <span m="3272040">doesn't</span> <span
  m="3272260">really</span> <span m="3272480">affect</span> <span
  m="3272840">very</span> <span m="3273000">much,</span> <span
  m="3273340">but</span> <span m="3274010">to</span> <span
  m="3274170">make</span> <span m="3274380">this</span> <span
  m="3275250">algebraically</span> <span m="3275860">correct</span> <span
  m="3276290">I</span> <span m="3276350">need</span> <span m="3276640">to</span>
  <span m="3276810">say</span> <span m="3277050">what</span> <span
  m="3277250">the</span> <span m="3277500">ai's,</span> <span
  m="3278260">i</span> <span m="3278420">not</span> <span
  m="3278610">equal</span> <span m="3278840">to</span> <span
  m="3278930">d</span> <span m="3279150">are</span> <span
  m="3279230">doing.</span> <span m="3281490">Other</span> <span
  m="3281600">questions?</span> <span m="3283226">Yeah.</span></p><p><span
  m="3283714">STUDENT: Um,</span> <span m="3284202">I'm a bit</span> <span
  m="3284690">confused about</span> <span m="3285178">your</span> <span
  m="3285666">definition of the</span> <span m="3286154">collision</span> <span
  m="3286642">in</span> <span m="3287130">the</span> <span
  m="3287618">lower</span> <span m="3288106">left</span> <span
  m="3288594">board.</span> <span m="3290546">Why are you</span> <span
  m="3291034">adding</span> <span m="3291522">i's</span> <span
  m="3292010">[INAUDIBLE]?</span></p><p><span m="3293970">ERIK DEMAINE:
  Yeah,</span> <span m="3294250">sorry.</span> <span m="3294440">This</span>
  <span m="3294600">is</span> <span m="3294720">a</span> <span
  m="3294780">funny</span> <span m="3295440">notion</span> <span
  m="3295750">of</span> <span m="3295850">colliding.</span> <span
  m="3296320">I</span> <span m="3296370">just</span> <span
  m="3296610">mean</span> <span m="3296970">I</span> <span
  m="3297100">want</span> <span m="3297260">to</span> <span
  m="3297320">count</span> <span m="3297560">the</span> <span
  m="3297630">number</span> <span m="3297980">of</span> <span
  m="3298060">keys</span> <span m="3298430">that</span> <span
  m="3298560">hash</span> <span m="3298940">to</span> <span
  m="3299060">the</span> <span m="3299180">same</span> <span
  m="3299490">slot</span> <span m="3299890">as</span> <span
  m="3300060">ki.</span></p><p><span m="3300350">STUDENT: So</span> <span
  m="3300820">it's not</span> <span m="3301265">necessarily</span> <span
  m="3301710">like</span> <span m="3302600">a</span> <span
  m="3303045">collision</span> <span m="3303490">[INAUDIBLE].</span></p><p><span
  m="3304380">ERIK DEMAINE: You</span> <span m="3304700">may</span> <span
  m="3304830">not</span> <span m="3305150">call</span> <span
  m="3305410">it</span> <span m="3305480">a</span> <span
  m="3305540">collision</span> <span m="3306060">when</span> <span
  m="3306190">it  collides</span> <span m="3306650">with</span> <span
  m="3306760">itself,</span> <span m="3307190">yeah.</span> <span
  m="3308250">Whatever</span> <span m="3308660">you</span> <span
  m="3308790">want</span> <span m="3308910">to</span> <span
  m="3308970">call</span> <span m="3309210">it.</span> <span
  m="3311050">But</span> <span m="3311200">I</span> <span
  m="3311280">just</span> <span m="3311460">mean</span> <span
  m="3311590">hashing</span> <span m="3311970">to</span> <span
  m="3312060">the</span> <span m="3312160">same</span> <span
  m="3312860">slot</span> <span m="3313250">is</span> <span
  m="3313390">ki.</span> <span m="3314920">Yeah.</span> <span
  m="3315470">Just</span> <span m="3315630">because</span> <span
  m="3315810">I</span> <span m="3315860">want</span> <span m="3316030">to</span>
  <span m="3316100">count</span> <span m="3316320">the</span> <span
  m="3316420">total</span> <span m="3316810">length</span> <span
  m="3317030">of</span> <span m="3317110">the</span> <span
  m="3317210">chain.</span> <span m="3317960">I</span> <span
  m="3318080">don't</span> <span m="3318190">want</span> <span
  m="3318290">to</span> <span m="3318360">count</span> <span
  m="3318690">the</span> <span m="3318770">number</span> <span
  m="3318990">of</span> <span m="3319070">collisions</span> <span
  m="3319580">in</span> <span m="3319660">the</span> <span
  m="3319760">chain.</span> <span m="3321280">Sorry.</span> <span
  m="3321710">Probably</span> <span m="3322020">a</span> <span m="3322490">poor
  choice</span> <span m="3322870">of</span> <span
  m="3322960">word.</span></p><p><span m="3327720">We're</span> <span
  m="3327880">hashing</span> <span m="3329530">because</span> <span
  m="3330060">we're</span> <span m="3330200">taking</span> <span
  m="3330560">our</span> <span m="3330660">key,</span> <span
  m="3331320">we're</span> <span m="3331450">cutting</span> <span
  m="3331830">it</span> <span m="3331900">up</span> <span
  m="3332050">into</span> <span m="3332240">little</span> <span
  m="3332450">bits,</span> <span m="3332720">and</span> <span
  m="3332810">then</span> <span m="3332930">we're</span> <span
  m="3333040">mixing</span> <span m="3333380">them</span> <span
  m="3333530">up</span> <span m="3333740">just</span> <span
  m="3333970">like</span> <span m="3334170">a</span> <span
  m="3334240">good</span> <span m="3335150">corned</span> <span
  m="3335300">beef</span> <span m="3335480">hash</span> <span
  m="3335840">or</span> <span m="3335910">something.</span></p><p><span
  m="3338550">All</span> <span m="3338620">right</span> <span
  m="3338950">let's</span> <span m="3339290">move</span> <span
  m="3339530">on</span> <span m="3339690">to</span> <span
  m="3339780">perfect</span> <span m="3340130">hashing.</span> <span
  m="3341140">This</span> <span m="3341360">is</span> <span
  m="3342580">more</span> <span m="3342770">exciting</span> <span
  m="3343230">I</span> <span m="3343270">would</span> <span
  m="3343390">say.</span> <span m="3344950">Even</span> <span
  m="3345170">cooler--</span> <span m="3345820">this</span> <span
  m="3346060">was</span> <span m="3346710">cool</span> <span
  m="3346930">from</span> <span m="3347240">a</span> <span
  m="3347320">probability</span> <span m="3347970">perspective,</span> <span
  m="3348690">depending</span> <span m="3349080">on</span> <span
  m="3349150">your</span> <span m="3349240">notion</span> <span
  m="3349480">of</span> <span m="3349580">cool.</span> <span
  m="3350590">This</span> <span m="3350770">method</span> <span
  m="3351040">will</span> <span m="3351170">be</span> <span
  m="3351560">cool</span> <span m="3351790">from</span> <span
  m="3352000">a</span> <span m="3352050">data</span> <span
  m="3352280">structures</span> <span m="3352700">perspective</span> <span
  m="3353280">and a</span> <span m="3353710">probability</span> <span
  m="3354290">perspective.</span> <span m="3357630">But</span> <span
  m="3358630">so</span> <span m="3358820">far</span> <span
  m="3359070">data</span> <span m="3359360">structures</span> <span
  m="3359670">are</span> <span m="3359840">what</span> <span
  m="3360020">we</span> <span m="3360120">know</span> <span
  m="3360260">from</span> <span m="3360400">006.</span> <span
  m="3361600">Now</span> <span m="3361810">we're</span> <span
  m="3361920">going</span> <span m="3362050">to</span> <span
  m="3362120">go</span> <span m="3364320">up</span> <span m="3364490">a</span>
  <span m="3364550">level,</span> <span m="3365530">literally.</span> <span
  m="3366080">We're</span> <span m="3366220">going</span> <span
  m="3366360">to</span> <span m="3366410">have</span> <span
  m="3366610">two</span> <span m="3366790">levels.</span></p><p><span
  m="3368930">So</span> <span m="3369450">here</span> <span
  m="3369700">we're</span> <span m="3369830">solving--</span> <span
  m="3370930">you</span> <span m="3371360">can</span> <span
  m="3371630">actually</span> <span m="3371890">make</span> <span
  m="3372070">this</span> <span m="3372200">data</span> <span
  m="3372410">structure</span> <span m="3372800">dynamic.</span> <span
  m="3373420">But</span> <span m="3374110">we're</span> <span
  m="3374220">going</span> <span m="3374300">to</span> <span
  m="3374370">solve</span> <span m="3374700">the</span> <span
  m="3374800">static</span> <span m="3375320">dictionary</span> <span
  m="3375800">problem</span> <span m="3380600">which</span> <span
  m="3380790">is</span> <span m="3382000">when</span> <span
  m="3382210">you</span> <span m="3382290">have</span> <span
  m="3382750">no</span> <span m="3383090">inserts</span> <span
  m="3383460">and</span> <span m="3383570">deletes.</span> <span
  m="3384530">You're</span> <span m="3384720">given</span> <span
  m="3385120">the</span> <span m="3385240">keys</span> <span
  m="3385660">up</span> <span m="3385870">front.</span> <span
  m="3389760">You're</span> <span m="3389850">given</span> <span
  m="3390140">n</span> <span m="3390380">keys.</span> <span
  m="3390900">You</span> <span m="3391030">want</span> <span
  m="3391230">to</span> <span m="3391280">build</span> <span
  m="3391500">a</span> <span m="3391590">table</span> <span
  m="3393450">that</span> <span m="3393640">supports</span> <span
  m="3394070">search.</span> <span m="3398424">And</span> <span
  m="3398910">that's</span> <span m="3399200">it.</span></p><p><span
  m="3399590">You</span> <span m="3399760">want</span> <span
  m="3399920">search</span> <span m="3401040">to</span> <span
  m="3401100">be</span> <span m="3401210">constant</span> <span
  m="3401570">time</span> <span m="3402550">and</span> <span
  m="3402960">perfect</span> <span m="3403240">hashing,</span> <span
  m="3410120">also</span> <span m="3410440">known</span> <span
  m="3410630">as</span> <span m="3410960">FKS</span> <span
  m="3411400">hashing</span> <span m="3411820">because</span> <span
  m="3412100">it</span> <span m="3412140">was</span> <span
  m="3412440">invented</span> <span m="3412820">by</span> <span
  m="3413150">Fredman,</span> <span m="3413640">Komlos,</span> <span
  m="3414200">and</span> <span m="3414480">Szemeredi</span> <span
  m="3415390">in</span> <span m="3415730">1984.</span> <span
  m="3419270">What</span> <span m="3419520">we</span> <span
  m="3419670">will</span> <span m="3420020">achieve</span> <span
  m="3421250">is</span> <span m="3422920">constant</span> <span
  m="3423500">time</span> <span m="3424570">worst</span> <span
  m="3424900">case</span> <span m="3429100">for</span> <span
  m="3429260">search.</span></p><p><span m="3436670">So</span> <span
  m="3436850">that's</span> <span m="3437050">a</span> <span
  m="3437100">little</span> <span m="3437310">better</span> <span
  m="3438210">because</span> <span m="3438720">here</span> <span
  m="3438890">we're</span> <span m="3439010">just</span> <span
  m="3439200">doing</span> <span m="3439450">constant</span> <span
  m="3440010">expected</span> <span m="3440630">time</span> <span
  m="3440920">for</span> <span m="3441060">search.</span> <span
  m="3442000">But</span> <span m="3442160">it's</span> <span
  m="3442260">worse</span> <span m="3442580">in that</span> <span
  m="3442840">we</span> <span m="3443070">have</span> <span
  m="3443240">to</span> <span m="3443360">know</span> <span
  m="3443470">the</span> <span m="3443570">keys</span> <span
  m="3443860">up</span> <span m="3444180">in</span> <span
  m="3444290">advance.</span> <span m="3446260">We're</span> <span
  m="3446430">going</span> <span m="3446550">to</span> <span
  m="3446690">take</span> <span m="3447110">the</span> <span
  m="3447280">linear</span> <span m="3447650">space</span> <span
  m="3449650">in</span> <span m="3449830">the</span> <span
  m="3449900">worst</span> <span m="3450170">case.</span> <span
  m="3460250">And</span> <span m="3460490">then</span> <span
  m="3460960">the</span> <span m="3461070">remaining</span> <span
  m="3461390">question is</span> <span m="3461750">how</span> <span
  m="3461940">long</span> <span m="3462300">does it</span> <span
  m="3462420">take</span> <span m="3462660">you</span> <span
  m="3462820">to</span> <span m="3463080">build</span> <span
  m="3463380">this</span> <span m="3463540">data</span> <span
  m="3463760">structure?</span> <span m="3464870">And</span> <span
  m="3465440">for</span> <span m="3465570">now</span> <span
  m="3465760">I'll</span> <span m="3465850">just</span> <span
  m="3466000">say</span> <span m="3466290">it's</span> <span
  m="3466430">polynomial</span> <span m="3467060">time.</span> <span
  m="3467570">It's</span> <span m="3467740">actually</span> <span
  m="3468000">going</span> <span m="3468120">to</span> <span
  m="3468160">be</span> <span m="3469020">nearly</span> <span
  m="3469500">linear.</span></p><p><span m="3476750">And</span> <span
  m="3477040">this</span> <span m="3477200">is</span> <span
  m="3477320">also</span> <span m="3477620">an</span> <span
  m="3477690">expected</span> <span m="3477980">bounds.</span> <span
  m="3480150">Actually</span> <span m="3482030">with</span> <span
  m="3482160">high</span> <span m="3482290">probability</span> <span
  m="3483440">could</span> <span m="3483560">be</span> <span
  m="3483650">a</span> <span m="3483690">little</span> <span
  m="3483890">more</span> <span m="3484940">strong</span> <span
  m="3485340">here.</span> <span m="3488210">So</span> <span
  m="3488430">it's</span> <span m="3488530">going</span> <span
  m="3488640">to</span> <span m="3488690">take</span> <span
  m="3488870">us</span> <span m="3488970">a</span> <span
  m="3489030">little</span> <span m="3489220">bit</span> <span
  m="3489340">of</span> <span m="3489400">time</span> <span
  m="3489620">to</span> <span m="3489670">build</span> <span
  m="3489910">this</span> <span m="3490000">structure,</span> <span
  m="3490370">but</span> <span m="3490470">once</span> <span
  m="3490660">you</span> <span m="3490760">have</span> <span
  m="3491000">it,</span> <span m="3491080">you</span> <span
  m="3491170">have</span> <span m="3491330">the</span> <span
  m="3491870">perfect</span> <span m="3492410">scenario.</span> <span
  m="3493310">There's</span> <span m="3493470">going</span> <span
  m="3493620">to</span> <span m="3493690">be</span> <span m="3493790">in</span>
  <span m="3493870">some</span> <span m="3494080">sense</span> <span
  m="3494300">no</span> <span m="3494570">collisions</span> <span
  m="3495030">in</span> <span m="3495130">our</span> <span
  m="3495200">hash</span> <span m="3495420">table</span> <span
  m="3495740">so</span> <span m="3495900">it would be</span> <span
  m="3496060">constant</span> <span m="3496470">times</span> <span
  m="3496730">first</span> <span m="3496920">search</span> <span
  m="3497820">and</span> <span m="3498280">linear</span> <span
  m="3498880">space.</span> <span m="3500010">So</span> <span
  m="3500150">that</span> <span m="3500390">part's</span> <span
  m="3500540">great.</span> <span m="3500810">The</span> <span
  m="3500910">only</span> <span m="3501130">catch</span> <span
  m="3501370">is</span> <span m="3501470">it's</span> <span
  m="3502400">static.</span> <span m="3504710">But</span> <span
  m="3506430">beggars</span> <span m="3506830">can't</span> <span
  m="3507020">be</span> <span m="3507140">choosers</span> <span
  m="3507580">I</span> <span m="3507650">guess.</span></p><p><span
  m="3510500">All</span> <span m="3510590">right.</span> <span
  m="3514220">I'm</span> <span m="3514430">not</span> <span
  m="3514570">sure</span> <span m="3514750">who's</span> <span
  m="3514950">begging</span> <span m="3515290">in</span> <span
  m="3515360">that</span> <span m="3515550">analogy</span> <span
  m="3515805">but.</span> <span m="3520370">The</span> <span
  m="3520450">keys</span> <span m="3520850">who</span> <span
  m="3520950">want</span> <span m="3521090">to</span> <span
  m="3521130">be</span> <span m="3521230">stored.</span> <span m="3521900">I
  don't know.</span> <span m="3523580">All right,</span> <span
  m="3523890">so</span> <span m="3524350">the</span> <span
  m="3524590">big</span> <span m="3524800">idea</span> <span
  m="3525670">for</span> <span m="3527000">perfect</span> <span
  m="3527350">hashing</span> <span m="3528170">is</span> <span m="3528350">to
  use</span> <span m="3528690">two</span> <span m="3528890">levels.</span> <span
  m="3535710">So</span> <span m="3537110">let</span> <span m="3537280">me</span>
  <span m="3537410">draw</span> <span m="3537580">a</span> <span
  m="3537650">picture.</span> <span m="3537980">We</span> <span
  m="3538100">have</span> <span m="3538380">our</span> <span
  m="3539300">universe,</span> <span m="3541040">and</span> <span
  m="3541760">we're</span> <span m="3541920">mapping</span> <span
  m="3542370">that</span> <span m="3542770">via</span> <span
  m="3543610">hash</span> <span m="3543880">function</span> <span
  m="3544240">h1</span> <span m="3545310">into</span> <span m="3545570">a</span>
  <span m="3545640">table.</span> <span m="3547180">Look</span> <span
  m="3547340">familiar?</span> <span m="3548640">Exactly</span> <span
  m="3549180">the</span> <span m="3549280">diagram</span> <span
  m="3549730">I</span> <span m="3549790">drew</span> <span
  m="3549960">before.</span></p><p><span m="3551540">It's</span> <span
  m="3551700">going</span> <span m="3551800">to</span> <span
  m="3551850">have</span> <span m="3552040">some</span> <span
  m="3552260">table</span> <span m="3552580">size</span> <span
  m="3553040">m.</span> <span m="3554970">And</span> <span
  m="3555280">we're</span> <span m="3555370">going</span> <span
  m="3555480">to</span> <span m="3555520">set</span> <span m="3556100">m</span>
  <span m="3557840">to</span> <span m="3558000">be</span> <span
  m="3558480">within</span> <span m="3558700">a</span> <span
  m="3558770">constant</span> <span m="3559750">factor</span> <span
  m="3560230">of</span> <span m="3560440">n.</span> <span m="3562090">So</span>
  <span m="3562750">right</span> <span m="3562940">now</span> <span
  m="3563240">it</span> <span m="3563310">looks</span> <span
  m="3563500">exactly</span> <span m="3564120">like</span> <span
  m="3564860">regular--</span> <span m="3565410">and</span> <span
  m="3565540">it's</span> <span m="3565670">going</span> <span
  m="3565780">to</span> <span m="3565840">be</span> <span m="3565990">a</span>
  <span m="3566020">universal,</span> <span m="3567380">h1</span> <span
  m="3568020">is</span> <span m="3568120">chosen</span> <span m="3568390">from
  a</span> <span m="3568550">universal</span> <span m="3569110">hash</span>
  <span m="3569370">family,</span> <span m="3570160">so</span> <span
  m="3572000">universal</span> <span m="3572470">hashing</span> <span
  m="3572770">applies.</span></p><p><span m="3574080">The</span> <span
  m="3574190">trouble</span> <span m="3574550">is</span> <span
  m="3575940">we're</span> <span m="3576090">going</span> <span
  m="3576220">to</span> <span m="3576270">get</span> <span
  m="3576480">some</span> <span m="3577010">lists</span> <span
  m="3577420">here.</span> <span m="3578760">And</span> <span
  m="3579380">we</span> <span m="3581360">don't</span> <span
  m="3581550">want</span> <span m="3581660">to</span> <span
  m="3581730">store</span> <span m="3582150">the</span> <span
  m="3583760">set</span> <span m="3583990">of</span> <span
  m="3584090">colliding</span> <span m="3584530">elements,</span> <span
  m="3584960">the</span> <span m="3585050">set</span> <span
  m="3585220">of</span> <span m="3585290">elements</span> <span
  m="3585570">that</span> <span m="3585660">hash</span> <span m="3585950">to
  that</span> <span m="3586150">place,</span> <span m="3586720">with</span>
  <span m="3586860">a</span> <span m="3586920">linked</span> <span
  m="3587140">list</span> <span m="3587380">because</span> <span
  m="3587570">linked</span> <span m="3587780">lists</span> <span
  m="3587990">are</span> <span m="3588100">slow.</span> <span
  m="3590550">Instead</span> <span m="3591080">we're</span> <span
  m="3591190">going</span> <span m="3591300">to</span> <span
  m="3591350">store</span> <span m="3591580">them</span> <span
  m="3591720">using</span> <span m="3592040">a</span> <span
  m="3592070">hash</span> <span m="3592400">table.</span> <span
  m="3593692">It</span> <span m="3594130">sounds</span> <span
  m="3594420">crazy.</span></p><p><span m="3596000">But</span> <span
  m="3598740">we're</span> <span m="3598900">going</span> <span
  m="3599000">to</span> <span m="3599060">have--</span> <span
  m="3599670">so</span> <span m="3599880">this</span> <span
  m="3600110">is</span> <span m="3600240">position</span> <span
  m="3600640">1.</span> <span m="3601340">This is</span> <span
  m="3601560">going</span> <span m="3601690">to</span> <span
  m="3601760">be</span> <span m="3601990">h2,1.</span> <span
  m="3604470">There's</span> <span m="3604570">going</span> <span
  m="3604690">to</span> <span m="3604730">be</span> <span
  m="3604850">another</span> <span m="3605260">hash</span> <span
  m="3605580">function</span> <span m="3605970">h2,0</span> <span
  m="3608470">that</span> <span m="3608600">maps</span> <span
  m="3608980">to</span> <span m="3610210">some</span> <span
  m="3610500">other</span> <span m="3610740">hash</span> <span
  m="3611040">table.</span> <span m="3611230">These</span> <span
  m="3611410">hash</span> <span m="3611620">tables</span> <span
  m="3611930">are</span> <span m="3611970">going</span> <span
  m="3612100">to</span> <span m="3612170">be</span> <span m="3612320">of</span>
  <span m="3612460">varying</span> <span m="3613000">sizes.</span> <span
  m="3614180">Some</span> <span m="3614380">of</span> <span
  m="3614510">them</span> <span m="3614830">will</span> <span
  m="3614990">be</span> <span m="3615180">of</span> <span
  m="3615270">size</span> <span m="3615740">0</span> <span
  m="3616310">because</span> <span m="3616680">nothing</span> <span
  m="3616980">hashes</span> <span m="3617330">there.</span> <span
  m="3619300">But</span> <span m="3619450">in</span> <span
  m="3619560">general</span> <span m="3620010">each</span> <span
  m="3620150">of</span> <span m="3620220">these</span> <span
  m="3620410">slots</span> <span m="3621420">is</span> <span
  m="3621590">going</span> <span m="3621770">to</span> <span
  m="3621900">map</span> <span m="3622180">instead</span> <span
  m="3622520">of</span> <span m="3622620">to</span> <span m="3622740">a</span>
  <span m="3622790">linked</span> <span m="3623010">list</span> <span
  m="3623390">to</span> <span m="3623510">a</span> <span m="3623560">hash</span>
  <span m="3623840">table.</span></p><p><span m="3625570">So</span> <span
  m="3625630">this</span> <span m="3625810">would</span> <span
  m="3625910">be</span> <span m="3626180">h2,</span> <span m="3627600">m</span>
  <span m="3628500">minus</span> <span m="3628690">1.</span> <span
  m="3631260">I'm</span> <span m="3631420">going</span> <span
  m="3631550">to</span> <span m="3631620">guarantee</span> <span
  m="3632310">in</span> <span m="3632410">the</span> <span
  m="3632500">second</span> <span m="3632980">level</span> <span
  m="3633260">of</span> <span m="3633330">hashing</span> <span
  m="3633840">there</span> <span m="3633970">are</span> <span
  m="3634070">zero</span> <span m="3634600">collisions.</span> <span
  m="3650590">Let</span> <span m="3650770">that</span> <span
  m="3651150">sink</span> <span m="3651520">in</span> <span m="3651650">a</span>
  <span m="3651700">little</span> <span m="3651880">bit.</span> <span
  m="3653130">Let</span> <span m="3653280">me</span> <span
  m="3653440">write</span> <span m="3653690">down</span> <span
  m="3653980">a</span> <span m="3654030">little</span> <span
  m="3654250">more</span> <span m="3654470">carefully</span> <span
  m="3655460">what</span> <span m="3655600">I'm</span> <span
  m="3655680">doing.</span></p><p><span m="3669050">So</span> <span
  m="3669210">h1</span> <span m="3669920">is</span> <span
  m="3670090">picked</span> <span m="3670380">from</span> <span
  m="3670950">a</span> <span m="3671290">universal</span> <span
  m="3671680">hash</span> <span m="3671950">family.</span> <span
  m="3680220">Where</span> <span m="3680580">m</span> <span
  m="3681160">is</span> <span m="3681400">theta</span> <span
  m="3682930">n.</span> <span m="3685420">I</span> <span m="3685530">want</span>
  <span m="3685730">to</span> <span m="3685780">put</span> <span
  m="3685940">a</span> <span m="3686000">theta--</span> <span
  m="3686400">I</span> <span m="3686460">mean</span> <span m="3686620">I</span>
  <span m="3686670">could</span> <span m="3686830">m</span> <span
  m="3686950">equals</span> <span m="3687140">n,</span> <span
  m="3687680">but</span> <span m="3687930">sometimes</span> <span
  m="3688400">we</span> <span m="3688470">require</span> <span
  m="3688790">m</span> <span m="3688980">to</span> <span m="3689040">be</span>
  <span m="3689160">a</span> <span m="3689230">prime.</span> <span
  m="3689810">So</span> <span m="3690350">I'm</span> <span
  m="3690390">going</span> <span m="3690470">to</span> <span
  m="3690510">give</span> <span m="3690670">you</span> <span
  m="3690750">some</span> <span m="3690950">slop</span> <span
  m="3691300">in</span> <span m="3691380">how</span> <span
  m="3691490">you</span> <span m="3691630">choose</span> <span
  m="3691890">m.</span> <span m="3692170">So</span> <span m="3692340">it</span>
  <span m="3692420">can</span> <span m="3692550">be</span> <span
  m="3692720">prime</span> <span m="3693170">or</span> <span
  m="3693240">whatever</span> <span m="3693510">you</span> <span
  m="3693610">want.</span> <span m="3696370">And</span> <span
  m="3696530">then</span> <span m="3696960">at</span> <span
  m="3697140">the</span> <span m="3697210">first</span> <span
  m="3697460">level</span> <span m="3697720">we're</span> <span
  m="3697880">basically</span> <span m="3698340">doing</span> <span
  m="3698560">hashing</span> <span m="3698950">with</span> <span
  m="3699110">chaining.</span></p><p><span m="3700810">And</span> <span
  m="3700990">now</span> <span m="3706630">I</span> <span
  m="3706740">want</span> <span m="3706950">to</span> <span m="3707020">look
  at</span> <span m="3707320">each</span> <span m="3707780">slot</span> <span
  m="3708110">in</span> <span m="3708270">that</span> <span
  m="3708450">hash</span> <span m="3708740">table.</span> <span m="3710580">So
  between</span> <span m="3710830">0</span> <span m="3711300">and</span> <span
  m="3711590">m-1.</span> <span m="3715520">I'm</span> <span
  m="3715610">going</span> <span m="3715760">to</span> <span
  m="3715880">let</span> <span m="3716850">lj</span> <span m="3719270">be</span>
  <span m="3720170">the</span> <span m="3720430">number</span> <span
  m="3720940">of</span> <span m="3721010">keys</span> <span
  m="3721320">that</span> <span m="3721580">hash,</span> <span
  m="3722150">it's</span> <span m="3722350">the</span> <span
  m="3722480">length</span> <span m="3722900">of</span> <span
  m="3723000">the</span> <span m="3723090">list</span> <span
  m="3724070">that</span> <span m="3724210">would</span> <span
  m="3724370">go</span> <span m="3724560">there.</span> <span
  m="3725520">It's</span> <span m="3725650">going</span> <span
  m="3725770">to</span> <span m="3725810">be</span> <span m="3725940">the</span>
  <span m="3726050">number</span> <span m="3726500">of</span> <span
  m="3726850">keys,</span> <span m="3727130">among</span> <span
  m="3727550">just</span> <span m="3727720">the</span> <span
  m="3727850">n</span> <span m="3728130">keys,</span> <span m="3742310">Number
  of,</span> <span m="3742550">keys</span> <span m="3742860">hashing</span>
  <span m="3743190">to slot</span> <span m="3743460">j.</span></p><p><span
  m="3746760">So</span> <span m="3746900">now</span> <span
  m="3747060">the</span> <span m="3747150">big</span> <span
  m="3747300">question</span> <span m="3747680">is,</span> <span
  m="3747800">if</span> <span m="3747930">I</span> <span m="3748020">have</span>
  <span m="3748400">lj</span> <span m="3749050">keys</span> <span
  m="3749350">here,</span> <span m="3750200">how</span> <span
  m="3750500">big</span> <span m="3750800">do</span> <span m="3750930">I</span>
  <span m="3751020">make</span> <span m="3751280">that</span> <span
  m="3751490">table?</span> <span m="3751830">You</span> <span
  m="3751960">might</span> <span m="3752200">say,</span> <span
  m="3752390">well</span> <span m="3752560">I</span> <span
  m="3752680">make</span> <span m="3752900">a</span> <span
  m="3752970">theta</span> <span m="3753360">lj.</span> <span
  m="3753780">That's</span> <span m="3753990">what</span> <span
  m="3754120">I</span> <span m="3754240">always</span> <span
  m="3754510">do.</span> <span m="3754750">But</span> <span
  m="3754870">that's</span> <span m="3755150">not</span> <span
  m="3755560">what</span> <span m="3755720">I'm</span> <span
  m="3755790">going</span> <span m="3755910">to</span> <span
  m="3756000">do.</span> <span m="3756640">That</span> <span
  m="3756790">wouldn't</span> <span m="3757080">help.</span> <span
  m="3758380">We</span> <span m="3758600">get</span> <span
  m="3758770">exactly,</span> <span m="3759230">I</span> <span
  m="3759690">think,</span> <span m="3759910">the</span> <span
  m="3759990">same</span> <span m="3760270">number</span> <span
  m="3760490">of</span> <span m="3760570">collisions</span> <span
  m="3760930">if</span> <span m="3761040">we</span> <span m="3761120">did</span>
  <span m="3761220">that,</span> <span m="3762060">more</span> <span
  m="3762260">or</span> <span m="3762280">less,</span> <span
  m="3762880">in</span> <span m="3763020">expectation.</span> <span
  m="3764450">So</span> <span m="3765290">we're</span> <span
  m="3765500">going</span> <span m="3766690">do</span> <span
  m="3766790">something</span> <span m="3767140">else.</span></p><p><span
  m="3769340">We're</span> <span m="3769510">going</span> <span
  m="3769640">to</span> <span m="3769750">pick</span> <span m="3770220">a</span>
  <span m="3772520">hash</span> <span m="3772780">function</span> <span
  m="3773080">from</span> <span m="3773350">a</span> <span
  m="3773390">universal</span> <span m="3774150">family,</span> <span
  m="3774980">h2,j.</span> <span m="3778720">It</span> <span
  m="3778850">again</span> <span m="3779220">maps</span> <span
  m="3779510">the</span> <span m="3779610">same</span> <span
  m="3779830">universe.</span> <span m="3785510">The</span> <span
  m="3785630">key</span> <span m="3785860">thing</span> <span
  m="3786470">is</span> <span m="3786710">the</span> <span
  m="3786810">size</span> <span m="3787480">of</span> <span
  m="3787560">the</span> <span m="3787650">hash</span> <span
  m="3787910">table</span> <span m="3788200">I'm</span> <span
  m="3788300">going</span> <span m="3788480">to</span> <span
  m="3788580">choose</span> <span m="3789930">which</span> <span
  m="3790240">is</span> <span m="3791440">lj</span> <span
  m="3792770">squared.</span> <span m="3812510">So</span> <span
  m="3813850">if</span> <span m="3814090">there</span> <span
  m="3814520">are</span> <span m="3814800">3</span> <span
  m="3815170">elements</span> <span m="3815810">that</span> <span
  m="3815940">happen</span> <span m="3816180">to</span> <span
  m="3816370">hash</span> <span m="3816920">to</span> <span
  m="3817000">this</span> <span m="3817260">slot,</span> <span
  m="3817890">this</span> <span m="3818090">table</span> <span
  m="3818850">will</span> <span m="3819010">have</span> <span
  m="3819290">size</span> <span m="3820080">9.</span> <span
  m="3822730">So</span> <span m="3822840">it's</span> <span
  m="3822970">mostly</span> <span m="3823430">empty.</span> <span
  m="3823920">Only</span> <span m="3824150">square</span> <span
  m="3824490">root</span> <span m="3825030">fraction--</span> <span
  m="3825355">if</span> <span m="3825680">that's</span> <span
  m="3825900">a</span> <span m="3825950">word,</span> <span
  m="3826610">if</span> <span m="3826970">that's</span> <span
  m="3827180">a</span> <span m="3827230">phrase--</span> <span
  m="3827910">will</span> <span m="3828110">be</span> <span
  m="3828320">full.</span> <span m="3828930">Most</span> <span
  m="3829190">of</span> <span m="3829270">it's</span> <span
  m="3829410">empty.</span> <span m="3830050">Why</span> <span
  m="3830410">squared?</span> <span m="3833370">Any</span> <span
  m="3833640">ideas?</span> <span m="3835820">I</span> <span
  m="3835880">claim</span> <span m="3836120">this</span> <span
  m="3836280">will</span> <span m="3836370">guarantee</span> <span
  m="3837600">zero</span> <span m="3837970">collisions</span> <span
  m="3838790">with</span> <span m="3838950">decent</span> <span
  m="3839260">chance.</span> <span m="3839600">Yeah.</span></p><p><span
  m="3839960">STUDENT: With</span> <span m="3840435">1/2</span> <span
  m="3840910">probability</span> <span m="3841385">you're</span> <span
  m="3841860">going to</span> <span m="3842335">end up</span> <span
  m="3842810">with no</span> <span m="3843285">collisions.</span></p><p><span
  m="3843760">ERIK DEMAINE: With</span> <span m="3843900">1/2</span> <span
  m="3844420">probability</span> <span m="3844890">I'm</span> <span
  m="3844970">going</span> <span m="3845070">to</span> <span
  m="3845110">end</span> <span m="3845240">up</span> <span
  m="3845330">with</span> <span m="3845400">no</span> <span
  m="3845530">collisions.</span> <span m="3845880">Why?</span> <span
  m="3846290">What's</span> <span m="3846470">it</span> <span
  m="3846530">called?</span></p><p><span m="3849516">STUDENT: Markov</span>
  <span m="3849967">[INAUDIBLE]</span></p><p><span m="3851320">ERIK DEMAINE:
  Markov's</span> <span m="3851480">inequality</span> <span
  m="3852160">would</span> <span m="3852310">prove</span> <span
  m="3852530">it.</span> <span m="3853260">But</span> <span
  m="3853530">it's</span> <span m="3854280">more</span> <span
  m="3854590">commonly</span> <span m="3854970">known</span> <span
  m="3855230">as</span> <span m="3855840">the,</span> <span
  m="3856100">whoa,</span> <span m="3857970">as</span> <span
  m="3858380">the</span> <span m="3858880">birthday</span> <span
  m="3859230">paradox.</span> <span m="3861020">So</span> <span
  m="3862840">the</span> <span m="3862990">whole</span> <span
  m="3863540">name</span> <span m="3863790">of</span> <span
  m="3863840">the</span> <span m="3863930">game</span> <span
  m="3864120">here</span> <span m="3864310">is</span> <span
  m="3864410">the</span> <span m="3864490">birthday</span> <span
  m="3864830">paradox.</span> <span m="3865280">If</span> <span
  m="3865420">I</span> <span m="3865510">have,</span> <span
  m="3868030">how's</span> <span m="3868260">it</span> <span
  m="3868340">go,</span> <span m="3868640">if I have</span> <span m="3869100">n
  squared</span> <span m="3869960">people</span> <span m="3870990">with</span>
  <span m="3871370">n</span> <span m="3871640">possible</span> <span
  m="3872120">birthdays</span> <span m="3872900">then--</span> <span
  m="3873450">is</span> <span m="3873830">that the</span> <span
  m="3874070">right</span> <span m="3874240">way?</span> <span
  m="3875430">No,</span> <span m="3875620">less.</span> <span
  m="3876240">If</span> <span m="3876350">I</span> <span m="3876420">have</span>
  <span m="3877150">n</span> <span m="3877800">people</span> <span
  m="3878250">and</span> <span m="3878330">n</span> <span
  m="3878550">squared</span> <span m="3878950">possible</span> <span
  m="3879350">birthdays,</span> <span m="3880280">the</span> <span
  m="3880400">probability</span> <span m="3881080">of</span> <span
  m="3881180">getting</span> <span m="3881540">a</span> <span
  m="3881630">collision,</span> <span m="3882110">a shared</span> <span
  m="3882320">birthday,</span> <span m="3882700">is</span> <span
  m="3882840">1/2.</span> <span m="3884390">Normally</span> <span
  m="3884740">we</span> <span m="3884860">think</span> <span
  m="3885060">of</span> <span m="3885170">that</span> <span
  m="3885370">as</span> <span m="3885590">a</span> <span
  m="3886180">funny</span> <span m="3886510">thing.</span> <span m="3886740">You
  know,</span> <span m="3886890">if</span> <span m="3887000">I</span> <span
  m="3887080">choose</span> <span m="3887390">a</span> <span
  m="3887660">fair</span> <span m="3887870">number</span> <span
  m="3888100">of</span> <span m="3888160">people,</span> <span
  m="3888860">then</span> <span m="3889040">I</span> <span
  m="3889110">get</span> <span m="3890280">immediately a</span> <span
  m="3890760">collision.</span></p><p><span m="3891590">I'm</span> <span
  m="3891740">going</span> <span m="3891830">to</span> <span
  m="3891890">do</span> <span m="3892030">it</span> <span m="3892110">the</span>
  <span m="3892230">opposite</span> <span m="3892610">way.</span> <span
  m="3892830">I'm</span> <span m="3892900">going</span> <span
  m="3893000">to</span> <span m="3893040">guarantee</span> <span
  m="3893710">that</span> <span m="3893900">there's</span> <span
  m="3894400">so</span> <span m="3894710">many</span> <span
  m="3894970">birthdays</span> <span m="3896130">that</span> <span
  m="3896340">no</span> <span m="3896490">2</span> <span m="3896720">of</span>
  <span m="3896790">them</span> <span m="3896940">will</span> <span
  m="3897080">collide</span> <span m="3898340">with</span> <span
  m="3898520">probability of</span> <span m="3899010">1/2</span> <span
  m="3899380">No,</span> <span m="3899560">1/2</span> <span m="3899960">is
  not</span> <span m="3900170">great.</span> <span m="3900600">We're going
  to</span> <span m="3900900">fix</span> <span m="3901200">that.</span> <span
  m="3908230">So</span> <span m="3908430">actually</span> <span
  m="3908750">I</span> <span m="3908790">haven't</span> <span
  m="3909130">given</span> <span m="3909330">you</span> <span
  m="3909410">the</span> <span m="3909530">whole</span> <span
  m="3909720">algorithm</span> <span m="3910080">yet.</span> <span
  m="3911880">There</span> <span m="3912030">are</span> <span
  m="3912170">two</span> <span m="3912340">steps,</span> <span
  m="3913220">1</span> <span m="3913420">and</span> <span m="3913540">2.</span>
  <span m="3914050">But</span> <span m="3914350">there</span> <span
  m="3914530">are</span> <span m="3914570">also</span> <span
  m="3914950">two</span> <span m="3915140">other</span> <span
  m="3915350">steps</span> <span m="3915620">1.5</span> <span
  m="3916290">and</span> <span m="3916410">2.5.</span> <span
  m="3919920">But</span> <span m="3920140">this</span> <span
  m="3920860">is</span> <span m="3920960">the</span> <span
  m="3921070">right</span> <span m="3921280">idea</span> <span
  m="3921690">and</span> <span m="3921860">this</span> <span
  m="3922000">will</span> <span m="3922100">make</span> <span
  m="3922290">things</span> <span m="3922490">work</span> <span
  m="3922680">in</span> <span m="3922760">expectation.</span> <span
  m="3923660">But</span> <span m="3924280">I'm</span> <span
  m="3924460">going</span> <span m="3924700">to</span> <span
  m="3924890">tweak</span> <span m="3925170">it</span> <span
  m="3925250">a</span> <span m="3925300">little</span> <span
  m="3925520">bit.</span></p><p><span m="3928810">So</span> <span
  m="3929030">first</span> <span m="3929370">let</span> <span
  m="3929460">me</span> <span m="3929550">tell</span> <span
  m="3929680">you</span> <span m="3929790">step</span> <span
  m="3930040">1.5.</span> <span m="3930650">It</span> <span
  m="3930790">fits</span> <span m="3930960">in</span> <span
  m="3931070">between</span> <span m="3931410">the</span> <span
  m="3931500">two.</span> <span m="3933170">I</span> <span
  m="3933270">want</span> <span m="3933630">that</span> <span
  m="3933850">the</span> <span m="3933950">space</span> <span
  m="3935470">of</span> <span m="3935640">this</span> <span
  m="3935830">data</span> <span m="3936020">structure</span> <span
  m="3936400">is</span> <span m="3936500">linear.</span> <span
  m="3938100">So</span> <span m="3938730">I</span> <span m="3938880">need</span>
  <span m="3939050">to</span> <span m="3939140">make</span> <span
  m="3939280">sure</span> <span m="3939460">it</span> <span
  m="3939510">is.</span> <span m="3940050">If</span> <span
  m="3940330">the</span> <span m="3940450">sum</span> <span m="3941430">j</span>
  <span m="3941900">equals</span> <span m="3942280">0</span> <span
  m="3943130">to</span> <span m="3943350">m</span> <span m="3943670">minus
  1</span> <span m="3945152">of</span> <span m="3945650">lj</span> <span
  m="3946550">squared</span> <span m="3948840">is</span> <span
  m="3949060">bigger</span> <span m="3949390">than</span> <span
  m="3949590">some</span> <span m="3949850">constant</span> <span
  m="3950300">times</span> <span m="3950570">n--</span> <span
  m="3950900">we'll</span> <span m="3951040">figure</span> <span
  m="3951300">out</span> <span m="3951350">what</span> <span
  m="3951470">the</span> <span m="3951570">constant</span> <span
  m="3951870">is</span> <span m="3952020">later--</span> <span
  m="3953060">then</span> <span m="3954780">redo</span> <span
  m="3955250">step</span> <span m="3955560">1.</span> <span
  m="3958020">So</span> <span m="3958540">after</span> <span
  m="3958830">I</span> <span m="3958890">do</span> <span m="3959020">step</span>
  <span m="3959270">1,</span> <span m="3959820">I</span> <span
  m="3959950">know</span> <span m="3960200">how</span> <span
  m="3960400">big</span> <span m="3960680">all</span> <span
  m="3960830">these</span> <span m="3960990">tables</span> <span
  m="3961360">are</span> <span m="3961420">going</span> <span
  m="3961560">to</span> <span m="3961620">be.</span> <span m="3962240">If</span>
  <span m="3962380">the</span> <span m="3962470">sum</span> <span
  m="3962690">of</span> <span m="3962740">those</span> <span
  m="3962900">squares</span> <span m="3963340">is</span> <span
  m="3963480">bigger</span> <span m="3963750">than</span> <span
  m="3964050">linear,</span> <span m="3965220">start</span> <span
  m="3965510">over.</span></p><p><span m="3967140">I</span> <span
  m="3967220">need</span> <span m="3967390">to</span> <span
  m="3967460">prove</span> <span m="3967800">that</span> <span
  m="3967970">this</span> <span m="3968800">will</span> <span
  m="3968960">only</span> <span m="3969180">have</span> <span
  m="3969350">to</span> <span m="3969700">take--</span> <span
  m="3970220">this</span> <span m="3970410">will</span> <span
  m="3970530">happen</span> <span m="3971440">an</span> <span
  m="3971730">expected</span> <span m="3972180">constant</span> <span
  m="3972570">number</span> <span m="3972770">of</span> <span
  m="3972820">times.</span> <span m="3973690">log</span> <span
  m="3973930">n</span> <span m="3974050">times</span> <span
  m="3974290">with</span> <span m="3974360">high</span> <span
  m="3974500">probability.</span> <span m="3976120">In fact</span> <span
  m="3977290">why don't we--</span> <span m="3979670">yeah,</span> <span
  m="3979990">let's</span> <span m="3980150">worry</span> <span
  m="3980330">about</span> <span m="3980570">that</span> <span
  m="3980800">later.</span> <span m="3984150">Let</span> <span
  m="3984250">me</span> <span m="3984580">first</span> <span
  m="3984840">tell</span> <span m="3985000">you</span> <span
  m="3985140">step</span> <span m="3985400">2.5</span> <span
  m="3987420">which</span> <span m="3987690">is</span> <span
  m="3988040">I</span> <span m="3988170">want</span> <span
  m="3988430">there</span> <span m="3988560">to</span> <span
  m="3988630">be</span> <span m="3988810">zero</span> <span
  m="3989250">collisions</span> <span m="3990320">in</span> <span
  m="3990460">each</span> <span m="3990650">of</span> <span
  m="3990720">these</span> <span m="3990880">tables.</span> <span
  m="3991720">It's</span> <span m="3991810">only</span> <span
  m="3992000">going</span> <span m="3992100">to</span> <span
  m="3992140">happen</span> <span m="3992360">with</span> <span
  m="3992480">probability</span> <span m="3992735">of</span> <span
  m="3992990">1/2</span> <span m="3994170">So</span> <span m="3994790">if</span>
  <span m="3994970">it</span> <span m="3995110">doesn't</span> <span
  m="3995380">happen,</span> <span m="3995770">just</span> <span
  m="3995940">try</span> <span m="3996160">again.</span></p><p><span
  m="3997900">So</span> <span m="3998610">2.5</span> <span m="4002560">is</span>
  <span m="4003740">while</span> <span m="4005700">there's</span> <span
  m="4006300">some</span> <span m="4007190">hash</span> <span
  m="4007480">function</span> <span m="4007980">h2,j</span> <span
  m="4009370">that</span> <span m="4009520">maps</span> <span
  m="4009910">2</span> <span m="4010160">keys</span> <span
  m="4010870">that</span> <span m="4010960">we're</span> <span
  m="4011100">given</span> <span m="4014350">to</span> <span
  m="4014450">the</span> <span m="4014560">same</span> <span
  m="4014840">slot</span> <span m="4015460">at</span> <span
  m="4015610">the</span> <span m="4015700">second</span> <span
  m="4016010">level,</span> <span m="4022310">this</span> <span
  m="4022610">is</span> <span m="4023940">for</span> <span
  m="4024870">some</span> <span m="4028790">j</span> <span
  m="4030190">and</span> <span m="4032630">let's</span> <span
  m="4032860">say</span> <span m="4033200">ki</span> <span
  m="4034640">different</span> <span m="4035050">from</span> <span
  m="4035470">ki</span> <span m="4035900">prime.</span> <span
  m="4037290">But</span> <span m="4037660">they</span> <span
  m="4037770">map</span> <span m="4038050">to</span> <span
  m="4038150">the</span> <span m="4038240">same</span> <span
  m="4038610">place</span> <span m="4039070">by</span> <span
  m="4039310">the</span> <span m="4039510">first</span> <span
  m="4039800">hash</span> <span m="4040000">function.</span> <span
  m="4046350">So</span> <span m="4046550">if</span> <span m="4046760">two</span>
  <span m="4046930">keys</span> <span m="4047230">map</span> <span
  m="4047420">to</span> <span m="4047590">the</span> <span
  m="4047640">same</span> <span m="4048510">secondary</span> <span
  m="4049130">table</span> <span m="4049680">and</span> <span
  m="4049830">there's</span> <span m="4049970">a</span> <span
  m="4050030">conflict,</span> <span m="4051690">then</span> <span
  m="4051840">I'm</span> <span m="4051910">just</span> <span
  m="4052100">going</span> <span m="4052300">to</span> <span
  m="4052510">redo</span> <span m="4055370">that</span> <span
  m="4055640">construction.</span> <span m="4056020">So</span> <span
  m="4056400">I'm</span> <span m="4056550">going</span> <span
  m="4056650">to</span> <span m="4056760">repick</span> <span
  m="4057840">h2,j.</span> <span m="4060420">h2,j</span> <span
  m="4060660">was</span> <span m="4060820">a</span> <span
  m="4060890">random</span> <span m="4061220">choice.</span></p><p><span
  m="4062020">So</span> <span m="4064380">if</span> <span m="4064550">I</span>
  <span m="4064620">get</span> <span m="4064780">a</span> <span
  m="4064830">bad</span> <span m="4065120">choice,</span> <span
  m="4066110">I'll</span> <span m="4066210">just</span> <span
  m="4066620">try</span> <span m="4066760">another</span> <span
  m="4066960">one.</span> <span m="4067230">Just</span> <span
  m="4067390">keep</span> <span m="4067680">randomly</span> <span
  m="4068190">choosing</span> <span m="4068770">the</span> <span
  m="4069570">a</span> <span m="4070045">or randomly</span> <span
  m="4070520">choosing</span> <span m="4070820">this</span> <span
  m="4070950">hash</span> <span m="4071160">function</span> <span
  m="4071910">until</span> <span m="4072300">there are</span> <span
  m="4072640">zero</span> <span m="4072940">collisions</span> <span
  m="4074610">in</span> <span m="4074760">that</span> <span
  m="4075040">secondary</span> <span m="4075450">table.</span> <span
  m="4075780">And I'm</span> <span m="4075930">going</span> <span
  m="4076020">to</span> <span m="4076080">do</span> <span
  m="4076180">this</span> <span m="4076350">for</span> <span
  m="4076480">each</span> <span m="4076720">table.</span> <span
  m="4077920">So</span> <span m="4078100">we</span> <span
  m="4078380">worry</span> <span m="4078630">about</span> <span
  m="4078910">how</span> <span m="4079070">long</span> <span
  m="4079360">these</span> <span m="4079520">will</span> <span
  m="4079630">take,</span> <span m="4080600">but</span> <span
  m="4080780">I</span> <span m="4080850">claim</span> <span
  m="4081310">expected</span> <span m="4081830">constant</span> <span
  m="4082170">number</span> <span m="4082400">of</span> <span
  m="4082460">trials.</span></p><p><span m="4085560">So</span> <span
  m="4085730">let's</span> <span m="4086000">do</span> <span
  m="4086230">the</span> <span m="4086340">second</span> <span
  m="4086660">one</span> <span m="4086950">first.</span> <span
  m="4093040">After</span> <span m="4093390">we</span> <span
  m="4093490">do</span> <span m="4093610">this</span> <span m="4093770">y</span>
  <span m="4094020">loop</span> <span m="4094340">there</span> <span
  m="4094725">are no</span> <span m="4095110">collisions</span> <span
  m="4096870">with</span> <span m="4097069">the</span> <span
  m="4097250">proper</span> <span m="4097620">notion</span> <span
  m="4097875">of</span> <span m="4098130">the</span> <span
  m="4098220">word</span> <span m="4098410">collisions,</span> <span
  m="4098840">which</span> <span m="4099050">is</span> <span
  m="4099260">two</span> <span m="4099460">different</span> <span
  m="4099870">keys</span> <span m="4100120">mapping</span> <span
  m="4100490">to</span> <span m="4100580">the</span> <span
  m="4100770">same</span> <span m="4101260">value.</span> <span
  m="4115970">So</span> <span m="4120270">at</span> <span
  m="4120430">this</span> <span m="4120550">point</span> <span m="4120740">we
  have</span> <span m="4120850">guaranteed</span> <span m="4121470">that</span>
  <span m="4121609">searches</span> <span m="4122050">are</span> <span
  m="4122189">constant</span> <span m="4122640">time</span> <span
  m="4122960">worst</span> <span m="4123220">case</span> <span
  m="4124100">after</span> <span m="4124439">we</span> <span
  m="4124569">do</span> <span m="4124740">all</span> <span
  m="4124890">these</span> <span m="4125310">4</span> <span
  m="4125510">steps</span> <span m="4125979">because</span> <span
  m="4127420">we</span> <span m="4127790">apply</span> <span
  m="4128160">h1,</span> <span m="4128740">we</span> <span
  m="4128859">figure</span> <span m="4129120">out</span> <span
  m="4129189">which</span> <span m="4129350">slot</span> <span
  m="4129620">we</span> <span m="4129740">fit</span> <span
  m="4129930">in.</span></p><p><span m="4131029">Say it's</span> <span
  m="4131250">slot</span> <span m="4131609">j,</span> <span
  m="4131920">then</span> <span m="4132130">we</span> <span
  m="4132250">apply</span> <span m="4132590">h2j</span> <span
  m="4133930">and</span> <span m="4134450">if</span> <span
  m="4134630">your</span> <span m="4134779">item's</span> <span
  m="4135060">in</span> <span m="4135670">the</span> <span
  m="4135960">overall</span> <span m="4136300">table,</span> <span
  m="4136689">it</span> <span m="4136760">should</span> <span
  m="4136910">be</span> <span m="4137010">in</span> <span
  m="4137120">that</span> <span m="4137390">secondary</span> <span
  m="4137810">table.</span> <span m="4138410">Because</span> <span
  m="4138720">there are</span> <span m="4138800">no</span> <span
  m="4138979">collisions</span> <span m="4139500">you</span> <span
  m="4139630">can</span> <span m="4139740">see,</span> <span
  m="4140029">is</span> <span m="4140399">that</span> <span
  m="4140640">one</span> <span m="4140890">item</span> <span
  m="4141149">the</span> <span m="4141250">one</span> <span
  m="4141410">I'm</span> <span m="4141510">looking</span> <span
  m="4141750">for?</span> <span m="4142130">If so,</span> <span
  m="4142250">return</span> <span m="4142569">it.</span> <span
  m="4142920">If</span> <span m="4143120">not,</span> <span
  m="4143540">it's</span> <span m="4143729">not</span> <span
  m="4143920">anywhere.</span> <span m="4144699">If</span> <span
  m="4145069">there</span> <span m="4145170">are</span> <span
  m="4145189">no</span> <span m="4145350">collisions</span> <span
  m="4145939">then</span> <span m="4147800">I</span> <span
  m="4147930">don't</span> <span m="4148109">need</span> <span
  m="4148319">chains</span> <span m="4149060">coming</span> <span
  m="4149340">out</span> <span m="4149470">of</span> <span
  m="4149550">here</span> <span m="4149800">because it is</span> <span
  m="4149939">just</span> <span m="4150120">a</span> <span
  m="4150160">single</span> <span m="4150500">item.</span></p><p><span
  m="4153750">The</span> <span m="4153880">big</span> <span
  m="4154220">question--</span> <span m="4155390">so</span> <span
  m="4155600">constant</span> <span m="4155950">worst</span> <span
  m="4156149">case</span> <span m="4156420">space</span> <span
  m="4156760">because</span> <span m="4157520">1.5</span> <span
  m="4158189">guarantees</span> <span m="4158640">that.</span> <span
  m="4159130">Constant</span> <span m="4159460">worst</span> <span
  m="4159670">case</span> <span m="4160010">time</span> <span
  m="4160250">first</span> <span m="4160390">search.</span> <span
  m="4161399">The</span> <span m="4161470">big</span> <span
  m="4161609">question</span> <span m="4161920">is,</span> <span
  m="4162100">how</span> <span m="4162180">long</span> <span
  m="4162279">does</span> <span m="4162450">it</span> <span
  m="4162540">take</span> <span m="4162710">to</span> <span
  m="4162790">build?</span> <span m="4163130">How</span> <span
  m="4163290">many</span> <span m="4163490">times</span> <span m="4163810">do
  we</span> <span m="4163920">have</span> <span m="4164010">to</span> <span
  m="4164160">redo</span> <span m="4165330">steps</span> <span
  m="4165649">1</span> <span m="4165870">and</span> <span m="4165979">2</span>
  <span m="4166740">before</span> <span m="4167069">we</span> <span
  m="4167189">get</span> <span m="4167390">a</span> <span
  m="4167510">decent--</span> <span m="4168520">before</span> <span
  m="4168810">we</span> <span m="4168890">get</span> <span m="4168979">a</span>
  <span m="4169069">perfect</span> <span m="4169550">hash</span> <span
  m="4169779">table.</span> <span m="4172979">So</span> <span
  m="4174350">let</span> <span m="4174620">me</span> <span
  m="4174800">remind</span> <span m="4175189">you</span> <span
  m="4175340">of</span> <span m="4175490">the</span> <span
  m="4175580">birthday</span> <span m="4175880">paradox,</span> <span
  m="4176640">why</span> <span m="4176920">it</span> <span
  m="4177080">works</span> <span m="4177350">here.</span></p><p><span
  m="4194530">As</span> <span m="4195910">mentioned</span> <span
  m="4196240">earlier</span> <span m="4196610">this</span> <span
  m="4196810">is</span> <span m="4196910">going</span> <span
  m="4197040">to</span> <span m="4197120">be</span> <span m="4197850">a</span>
  <span m="4197900">union</span> <span m="4198290">bounds.</span> <span
  m="4200090">We</span> <span m="4200260">want</span> <span
  m="4200420">to</span> <span m="4200470">know</span> <span
  m="4200570">the</span> <span m="4200670">probability</span> <span
  m="4201160">of</span> <span m="4201250">collision</span> <span m="4201680">at
  that</span> <span m="4201880">second</span> <span m="4202170">level.</span>
  <span m="4202930">Well</span> <span m="4203150">that's</span> <span
  m="4203230">at most</span> <span m="4203630">the</span> <span
  m="4203640">sum</span> <span m="4204010">of</span> <span
  m="4204160">all</span> <span m="4204470">possible</span> <span
  m="4205380">collisions,</span> <span m="4206800">probabilities</span> <span
  m="4207330">of</span> <span m="4207430">collisions.</span> <span
  m="4207920">So</span> <span m="4207930">I'm</span> <span
  m="4208030">going</span> <span m="4208130">to</span> <span
  m="4208190">say</span> <span m="4208340">the</span> <span
  m="4208450">sum</span> <span m="4209280">over all</span> <span
  m="4209540">i</span> <span m="4209910">not</span> <span
  m="4210130">equal</span> <span m="4210390">to</span> <span
  m="4210500">ij</span> <span m="4211660">of</span> <span m="4212150">the</span>
  <span m="4212450">probability.</span> <span m="4214340">Now</span> <span
  m="4214530">this</span> <span m="4214700">is</span> <span
  m="4214870">over</span> <span m="4215200">our</span> <span
  m="4215330">choice</span> <span m="4215700">of</span> <span
  m="4215800">the</span> <span m="4215880">hash</span> <span
  m="4216140">function</span> <span m="4216560">h2,j.</span> <span
  m="4219848">Of</span> <span m="4220320">h2,j</span> <span
  m="4221390">of</span> <span m="4221840">ki</span> <span
  m="4223320">equaling</span> <span m="4223930">h2,j</span> <span
  m="4225580">of</span> <span m="4226030">ki</span> <span
  m="4226480">prime.</span></p><p><span m="4229120">So</span> <span
  m="4229330">union</span> <span m="4229640">bounds</span> <span
  m="4229980">says,</span> <span m="4230490">of</span> <span
  m="4230610">course.</span> <span m="4230970">The</span> <span
  m="4231090">probability</span> <span m="4231570">of</span> <span
  m="4232130">any</span> <span m="4232300">of</span> <span
  m="4232340">them</span> <span m="4232440">happening--</span> <span
  m="4233080">we</span> <span m="4233180">don't</span> <span
  m="4233200">know</span> <span m="4233310">about</span> <span
  m="4233560">interdependence</span> <span m="4234310">or</span> <span
  m="4234380">whatnot--</span> <span m="4235380">but</span> <span
  m="4235560">certainly</span> <span m="4235840">almost</span> <span
  m="4236110">the</span> <span m="4236190">sum</span> <span
  m="4236560">of</span> <span m="4237100">each</span> <span
  m="4237280">of</span> <span m="4237350">these</span> <span
  m="4237500">possible</span> <span m="4237900">events.</span> <span
  m="4239730">There</span> <span m="4240060">are</span> <span
  m="4240090">a</span> <span m="4240130">lot</span> <span m="4240310">of</span>
  <span m="4240390">possible</span> <span m="4240790">events.</span> <span
  m="4242150">If</span> <span m="4242520">there 's</span> <span
  m="4242720">li</span> <span m="4243060">things,</span> <span
  m="4243500">that</span> <span m="4243600">there are</span> <span
  m="4243640">going</span> <span m="4243760">to</span> <span
  m="4243810">be</span> <span m="4243990">li</span> <span
  m="4244380">choose</span> <span m="4244830">2</span> <span
  m="4245850">possible</span> <span m="4246990">collisions</span> <span
  m="4247470">we</span> <span m="4247590">have</span> <span
  m="4247760">to</span> <span m="4247870">worry</span> <span
  m="4248120">about.</span> <span m="4248420">We</span> <span
  m="4248560">know</span> <span m="4248690">i</span> <span m="4248840">is</span>
  <span m="4248950">not</span> <span m="4249090">equal</span> <span
  m="4249310">to</span> <span m="4249600">i prime.</span> <span
  m="4253360">So</span> <span m="4254280">the</span> <span
  m="4254370">number</span> <span m="4254690">of</span> <span
  m="4254760">terms</span> <span m="4255090">here</span> <span
  m="4255790">is</span> <span m="4256050">li</span> <span
  m="4257160">choose</span> <span m="4257450">2.</span> <span
  m="4260890">And</span> <span m="4261240">what's</span> <span
  m="4261590">this</span> <span m="4261830">probability?</span></p><p><span
  m="4266120">STUDENT: [INAUDIBLE]</span></p><p><span m="4267990">ERIK DEMAINE:
  1/li</span> <span m="4271540">at</span> <span m="4271790">most</span> <span
  m="4272620">because</span> <span m="4273200">we're</span> <span
  m="4273290">assuming</span> <span m="4273650">h2,j</span> <span
  m="4274280">is</span> <span m="4274420">a</span> <span
  m="4274480">universal</span> <span m="4275000">hash</span> <span
  m="4275200">function</span> <span m="4275590">so</span> <span
  m="4276100">the</span> <span m="4276210">probability</span> <span
  m="4276780">of</span> <span m="4276850">choosing--</span> <span
  m="4277880">sorry?</span> <span m="4278780">li</span> <span
  m="4279040">squared.</span> <span m="4279530">Thank</span> <span
  m="4279740">you.</span> <span m="4280640">The</span> <span
  m="4280760">size</span> <span m="4281080">of</span> <span
  m="4281170">the</span> <span m="4281280">table.</span> <span
  m="4283020">1/m</span> <span m="4283730">but</span> <span m="4283960">m</span>
  <span m="4284370">in</span> <span m="4284510">this</span> <span
  m="4284680">case,</span> <span m="4284870">the</span> <span m="4284950">size
  of our</span> <span m="4285310">table</span> <span m="4285700">is</span> <span
  m="4285860">li</span> <span m="4286140">squared.</span> <span
  m="4287230">So</span> <span m="4288390">the</span> <span
  m="4288540">probability</span> <span m="4289190">that</span> <span
  m="4289380">we choose</span> <span m="4289510">a</span> <span
  m="4289590">good</span> <span m="4289890">hash</span> <span
  m="4290190">function</span> <span m="4290455">and</span> <span
  m="4290720">that</span> <span m="4291190">these</span> <span
  m="4291470">particular</span> <span m="4292060">keys</span> <span
  m="4292370">don't</span> <span m="4292580">hit</span> <span
  m="4292790">is</span> <span m="4292950">at</span> <span
  m="4293040">most</span> <span m="4293530">1/li</span> <span
  m="4294060">squared.</span> <span m="4294740">This</span> <span
  m="4294950">is</span> <span m="4295040">basically</span> <span
  m="4295560">li</span> <span m="4295880">squared/</span> <span
  m="4296600">2.</span> <span m="4297740">And</span> <span m="4297940">so</span>
  <span m="4298080">this</span> <span m="4298300">is</span> <span
  m="4298430">at</span> <span m="4298540">most</span> <span
  m="4299430">1/2.</span> <span m="4300690">It's</span> <span
  m="4300900">a</span> <span m="4300950">slightly</span> <span
  m="4301340">less</span> <span m="4301560">than</span> <span
  m="4301800">li</span> <span m="4301920">squared/2.</span> <span
  m="4303030">So</span> <span m="4303380">this</span> <span
  m="4303550">is</span> <span m="4303740">at</span> <span
  m="4303900">most</span> <span m="4304140">1/2.</span> <span
  m="4305420">And</span> <span m="4305560">this</span> <span
  m="4305740">is</span> <span m="4305880">basically a</span> <span
  m="4306210">birthday</span> <span m="4306500">paradox</span> <span
  m="4306940">in</span> <span m="4307010">this</span> <span
  m="4307150">particular</span> <span m="4307650">case.</span></p><p><span
  m="4308610">That</span> <span m="4308830">means</span> <span m="4309010">there
  is a</span> <span m="4309190">probability</span> <span m="4309750">of</span>
  <span m="4309840">at</span> <span m="4309950">least</span> <span
  m="4310410">a</span> <span m="4310480">half</span> <span
  m="4311210">that</span> <span m="4311380">there</span> <span
  m="4311560">is</span> <span m="4311590">zero</span> <span
  m="4312040">collisions</span> <span m="4313300">in</span> <span
  m="4313460">one</span> <span m="4313610">of</span> <span
  m="4313650">these</span> <span m="4313810">tables.</span> <span
  m="4314620">So</span> <span m="4314800">that</span> <span
  m="4314990">means</span> <span m="4315470">I'm</span> <span
  m="4315580">basically</span> <span m="4315950">flipping</span> <span
  m="4316380">a</span> <span m="4316430">fair</span> <span
  m="4316710">coin.</span> <span m="4317160">If</span> <span
  m="4317290">I</span> <span m="4317370">ever</span> <span
  m="4317540">get</span> <span m="4317680">a</span> <span
  m="4317740">heads</span> <span m="4318080">I'm</span> <span
  m="4318210">happy.</span> <span m="4318970">Each time I</span> <span
  m="4319240">get</span> <span m="4319340">a</span> <span
  m="4319390">tails</span> <span m="4319700">I</span> <span
  m="4319750">have</span> <span m="4319900">to</span> <span
  m="4320000">reflip.</span> <span m="4320630">This</span> <span
  m="4320950">should</span> <span m="4321130">sound</span> <span
  m="4321320">familiar</span> <span m="4321690">from</span> <span
  m="4321860">last</span> <span m="4322130">time.</span> <span
  m="4323060">So</span> <span m="4323290">this</span> <span
  m="4323550">is</span> <span m="4325810">2</span> <span
  m="4326850">expected</span> <span m="4328610">trials</span> <span
  m="4332610">or</span> <span m="4332900">log</span> <span m="4333190">n</span>
  <span m="4333330">with</span> <span m="4333450">high</span> <span
  m="4333590">probability.</span></p><p><span m="4340710">We've</span> <span
  m="4340950">proved</span> <span m="4341610">log</span> <span
  m="4341870">n</span> <span m="4341980">with</span> <span
  m="4342080">high</span> <span m="4342220">probability.</span> <span
  m="4343600">That's</span> <span m="4343780">the</span> <span
  m="4343850">same</span> <span m="4344270">as</span> <span
  m="4344550">saying</span> <span m="4344730">the</span> <span
  m="4344810">number</span> <span m="4345090">of</span> <span
  m="4345170">levels</span> <span m="4345590">in</span> <span
  m="4345720">a</span> <span m="4345800">skip</span> <span
  m="4346080">list</span> <span m="4346360">is</span> <span m="4346520">log
  n</span> <span m="4347000">with high</span> <span
  m="4347120">probability.</span> <span m="4348330">How</span> <span
  m="4348470">many</span> <span m="4348640">times</span> <span m="4348910">do
  I</span> <span m="4349070">have to</span> <span m="4349120">flip</span> <span
  m="4349320">a</span> <span m="4349400">coin</span> <span
  m="4349610">before</span> <span m="4349860">I</span> <span
  m="4349900">get</span> <span m="4350040">a heads?</span> <span
  m="4351190">Definitely</span> <span m="4351295">at</span> <span
  m="4351400">most</span> <span m="4351630">log n.</span> <span
  m="4355620">Now</span> <span m="4355770">we</span> <span
  m="4355890">have</span> <span m="4356000">to</span> <span
  m="4356090">do</span> <span m="4356190">this</span> <span
  m="4356400">for</span> <span m="4356590">each</span> <span
  m="4356930">secondary</span> <span m="4357470">table.</span> <span
  m="4358530">There</span> <span m="4358880">are</span> <span
  m="4359590">m</span> <span m="4359990">equal</span> <span
  m="4360260">theta</span> <span m="4360570">and</span> <span
  m="4360880">secondary</span> <span m="4361390">tables.</span></p><p><span
  m="4370110">There's</span> <span m="4370350">a</span> <span
  m="4370410">slight</span> <span m="4370670">question</span> <span
  m="4371080">of</span> <span m="4371770">how</span> <span
  m="4372010">big</span> <span m="4372340">are</span> <span
  m="4372400">the</span> <span m="4372520">secondary</span> <span
  m="4373030">tables.</span> <span m="4373490">If</span> <span
  m="4373630">one</span> <span m="4374160">of</span> <span
  m="4374200">these</span> <span m="4374370">tables</span> <span
  m="4374750">is</span> <span m="4374870">like</span> <span
  m="4375070">linear</span> <span m="4375580">size,</span> <span
  m="4376770">then</span> <span m="4376930">I</span> <span
  m="4377000">have</span> <span m="4377140">to</span> <span
  m="4377270">spend</span> <span m="4377600">linear</span> <span
  m="4377950">time</span> <span m="4378210">for a</span> <span
  m="4378400">trial.</span> <span m="4379600">And</span> <span
  m="4379830">then</span> <span m="4380330">I</span> <span
  m="4380470">multiply</span> <span m="4380930">that</span> <span
  m="4381120">by</span> <span m="4381240">the</span> <span
  m="4381350">number</span> <span m="4381690">of</span> <span
  m="4381750">trials</span> <span m="4382450">and</span> <span
  m="4382590">also</span> <span m="4382880">the</span> <span
  m="4383030">number</span> <span m="4383520">of</span> <span
  m="4383600">different</span> <span m="4383940">things</span> <span
  m="4384300">that</span> <span m="4384470">would</span> <span
  m="4384550">be</span> <span m="4384680">like</span> <span m="4384840">n</span>
  <span m="4385050">squared</span> <span m="4385490">log n</span> <span
  m="4385740">n.</span></p><p><span m="4386670">But</span> <span
  m="4386860">you</span> <span m="4387273">know</span> <span
  m="4387686">a</span> <span m="4388100">secondary</span> <span
  m="4388540">table</span> <span m="4388830">better</span> <span
  m="4389070">not</span> <span m="4389250">have</span> <span
  m="4389440">linear</span> <span m="4389770">sides.</span> <span
  m="4391460">I</span> <span m="4391510">mean</span> <span m="4391790">a</span>
  <span m="4391890">linear</span> <span m="4392210">number</span> <span
  m="4392590">of</span> <span m="4393140">li</span> <span
  m="4393320">equal</span> <span m="4393510">n.</span> <span
  m="4394450">That</span> <span m="4394600">would</span> <span
  m="4394670">be</span> <span m="4394790">bad</span> <span m="4395070">because
  then</span> <span m="4395350">li</span> <span m="4395660">squared</span> <span
  m="4396210">is</span> <span m="4396310">n</span> <span
  m="4396500">squared</span> <span m="4396850">and</span> <span
  m="4396940">we</span> <span m="4397460">guaranteed</span> <span
  m="4397890">that</span> <span m="4398000">we</span> <span
  m="4398100">had</span> <span m="4398270">linear</span> <span
  m="4398570">space.</span> <span m="4400540">So</span> <span
  m="4400790">in</span> <span m="4400890">fact</span> <span
  m="4401180">you</span> <span m="4401290">can</span> <span
  m="4401460">prove</span> <span m="4402670">with</span> <span
  m="4403010">another</span> <span m="4404950">Chernoff</span> <span
  m="4405470">bound.</span></p><p><span m="4405790">Let</span> <span
  m="4406110">me</span> <span m="4406400">put</span> <span
  m="4406620">this</span> <span m="4406940">over</span> <span
  m="4407140">here.</span> <span m="4414330">That</span> <span
  m="4414680">all</span> <span m="4414930">the</span> <span
  m="4415080">li's</span> <span m="4415440">are</span> <span
  m="4415510">pretty</span> <span m="4415730">small.</span> <span
  m="4416940">Not</span> <span m="4417200">constant</span> <span
  m="4419000">but</span> <span m="4421100">logarithmic.</span> <span
  m="4422730">So</span> <span m="4423650">li</span> <span m="4424755">is</span>
  <span m="4425450">order</span> <span m="4425710">log</span> <span
  m="4426040">n</span> <span m="4427830">with</span> <span
  m="4427920">high</span> <span m="4428070">probability</span> <span
  m="4429860">for</span> <span m="4429960">each</span> <span
  m="4430190">i</span> <span m="4430400">and</span> <span
  m="4430600">therefore</span> <span m="4430920">for</span> <span
  m="4431090">all</span> <span m="4431310">i.</span> <span m="4431850">So</span>
  <span m="4432240">I</span> <span m="4432320">can</span> <span
  m="4432460">just</span> <span m="4432630">change</span> <span
  m="4433060">the</span> <span m="4433250">alpha</span> <span
  m="4433535">my</span> <span m="4434070">minus</span> <span
  m="4434470">1</span> <span m="4434890">n</span> <span m="4435110">to</span>
  <span m="4435370">the alpha</span> <span m="4436550">and</span> <span
  m="4436760">get</span> <span m="4436980">that</span> <span
  m="4437410">for</span> <span m="4437660">all</span> <span m="4438100">i</span>
  <span m="4439780">this</span> <span m="4440150">happens.</span> <span
  m="4440740">In fact,</span> <span m="4441060">the</span> <span
  m="4441140">right</span> <span m="4441270">answer is</span> <span
  m="4441560">log over</span> <span m="4441840">log</span> <span
  m="4441990">log,</span> <span m="4442570">if</span> <span
  m="4442620">you</span> <span m="4442730">want</span> <span
  m="4442860">to</span> <span m="4442920">do</span> <span
  m="4443020">some</span> <span m="4443200">really</span> <span
  m="4443750">messy</span> <span m="4444030">analysis.</span> <span
  m="4444620">But</span> <span m="4445750">we</span> <span
  m="4445940">just,</span> <span m="4446690">logarithmic</span> <span
  m="4447240">is fine</span> <span m="4447540">for</span> <span
  m="4447740">us.</span></p><p><span m="4448430">So</span> <span
  m="4448760">what</span> <span m="4448910">this</span> <span
  m="4449060">means</span> <span m="4449370">is</span> <span
  m="4450430">we're</span> <span m="4450590">doing</span> <span
  m="4450920">n</span> <span m="4451190">different</span> <span
  m="4451510">things</span> <span m="4452470">for</span> <span
  m="4452620">each</span> <span m="4452880">of</span> <span
  m="4452970">them</span> <span m="4454010">with</span> <span
  m="4454160">high</span> <span m="4454310">probability</span> <span
  m="4455040">li</span> <span m="4455540">is</span> <span m="4456420">of</span>
  <span m="4456550">size</span> <span m="4456830">log n.</span> <span
  m="4457960">And</span> <span m="4458100">then</span> <span
  m="4458260">maybe</span> <span m="4458500">we'll</span> <span
  m="4458640">have</span> <span m="4458840">to</span> <span
  m="4458930">do</span> <span m="4459130">like</span> <span m="4459320">log
  n</span> <span m="4459810">trials</span> <span m="4460470">repeating</span>
  <span m="4461220">until</span> <span m="4461460">we</span> <span
  m="4461550">get</span> <span m="4461680">a</span> <span
  m="4461740">good</span> <span m="4461930">hash</span> <span
  m="4462230">function</span> <span m="4462530">there.</span> <span
  m="4463200">And</span> <span m="4463360">so</span> <span
  m="4463560">the</span> <span m="4463700">total</span> <span
  m="4464640">build</span> <span m="4464920">time</span> <span
  m="4465320">for</span> <span m="4465860">steps</span> <span
  m="4466260">1</span> <span m="4466570">and</span> <span m="4466700">2.5</span>
  <span m="4469320">is</span> <span m="4469490">going</span> <span
  m="4469620">to</span> <span m="4469680">be</span> <span m="4472550">at</span>
  <span m="4472700">most</span> <span m="4472970">n</span> <span
  m="4473160">times</span> <span m="4473400">log</span> <span
  m="4473640">squared</span> <span m="4474000">n.</span> <span
  m="4474240">You</span> <span m="4474370">can</span> <span
  m="4474510">prove</span> <span m="4474720">a</span> <span
  m="4474790">tighter</span> <span m="4475100">bound</span> <span
  m="4475370">but</span> <span m="4476570">it's</span> <span
  m="4476740">polynomial.</span> <span m="4477420">That's</span> <span
  m="4477640">all</span> <span m="4477730">I</span> <span
  m="4477800">wanted</span> <span m="4478040">to</span> <span
  m="4478140">go</span> <span m="4478280">for</span> <span
  m="4478540">and</span> <span m="4478580">it's</span> <span
  m="4478710">almost</span> <span m="4479020">linear.</span></p><p><span
  m="4481200">So</span> <span m="4481630">I'm</span> <span
  m="4481850">left</span> <span m="4483170">with</span> <span
  m="4483370">one</span> <span m="4483740">thing</span> <span
  m="4483970">to</span> <span m="4484100">analyze</span> <span
  m="4484620">which</span> <span m="4484850">is</span> <span
  m="4484990">step</span> <span m="4485310">1.5.</span> <span
  m="4487010">This</span> <span m="4487100">to</span> <span
  m="4487210">me</span> <span m="4487340">is</span> <span
  m="4487450">maybe</span> <span m="4487700">the</span> <span
  m="4487810">most</span> <span m="4488040">surprising</span> <span
  m="4488570">thing</span> <span m="4488730">that</span> <span
  m="4488860">it</span> <span m="4488940">works</span> <span
  m="4489220">out.</span> <span m="4490120">I</span> <span
  m="4490190">mean</span> <span m="4490320">here</span> <span
  m="4490550">we</span> <span m="4490970">designed--</span> <span
  m="4492400">we</span> <span m="4492510">did</span> <span
  m="4492680">this</span> <span m="4492830">li to</span> <span
  m="4493210">li</span> <span m="4493490">squared</span> <span
  m="4493900">so</span> <span m="4494150">the</span> <span
  m="4494310">birthday</span> <span m="4494620">paradox</span> <span
  m="4495020">would</span> <span m="4495110">happen.</span> <span
  m="4495480">This</span> <span m="4495830">is</span> <span
  m="4495940">not</span> <span m="4496160">surprising.</span> <span
  m="4497180">I mean it's a cool</span> <span m="4497640">idea,</span> <span
  m="4498110">but</span> <span m="4498210">once</span> <span
  m="4498380">you</span> <span m="4498450">have</span> <span
  m="4498610">the</span> <span m="4498700">idea,</span> <span
  m="4499020">it's</span> <span m="4499150">not</span> <span
  m="4499300">surprising</span> <span m="4499700">that</span> <span
  m="4499810">it</span> <span m="4499880">works.</span> <span
  m="4501390">What's</span> <span m="4501660">a</span> <span
  m="4501710">little</span> <span m="4501900">more</span> <span
  m="4502070">surprising</span> <span m="4502600">is</span> <span
  m="4502740">that</span> <span m="4502930">squaring</span> <span
  m="4503370">is</span> <span m="4503480">OK</span> <span
  m="4503800">from</span> <span m="4503980">a</span> <span
  m="4504040">space</span> <span m="4504420">perspective.</span></p><p><span
  m="4505670">1.5</span> <span m="4506280">says</span> <span
  m="4506500">we're</span> <span m="4506600">going to have</span> <span
  m="4506680">to</span> <span m="4506870">rebuild</span> <span
  m="4507310">that</span> <span m="4507510">first</span> <span
  m="4507740">table</span> <span m="4508430">until</span> <span
  m="4508770">the</span> <span m="4508860">sum</span> <span
  m="4509150">of</span> <span m="4509200">these</span> <span
  m="4509350">squared</span> <span m="4509670">lengths</span> <span
  m="4510380">is</span> <span m="4510530">at</span> <span
  m="4510620">most</span> <span m="4510850">linear.</span> <span
  m="4511470">I</span> <span m="4511620">can</span> <span
  m="4511830">guarantee</span> <span m="4512390">that</span> <span
  m="4513060">each</span> <span m="4513260">of</span> <span
  m="4513320">these</span> <span m="4513540">is</span> <span
  m="4513650">logarithmic</span> <span m="4514480">so</span> <span
  m="4514640">the</span> <span m="4514790">sum</span> <span
  m="4515050">of</span> <span m="4515100">the</span> <span
  m="4515180">squares</span> <span m="4515600">is</span> <span
  m="4515710">at</span> <span m="4515810">most</span> <span
  m="4516060">like</span> <span m="4516260">n</span> <span
  m="4516550">log</span> <span m="4516840">squared</span> <span
  m="4517180">n.</span> <span m="4517950">But</span> <span m="4518080">I</span>
  <span m="4518180">claim</span> <span m="4518540">I</span> <span
  m="4518620">can</span> <span m="4518810">get</span> <span
  m="4519010">linear.</span> <span m="4522360">Let's</span> <span
  m="4522570">do</span> <span m="4522670">that.</span></p><p><span
  m="4525580">So</span> <span m="4525890">for</span> <span
  m="4526170">step</span> <span m="4526420">1.5</span> <span
  m="4528860">we're</span> <span m="4529030">looking</span> <span
  m="4529410">at</span> <span m="4529660">what</span> <span
  m="4529880">is</span> <span m="4530080">the</span> <span
  m="4530250">expectation</span> <span m="4532320">of</span> <span
  m="4532360">the</span> <span m="4532430">sum</span> <span
  m="4532860">of</span> <span m="4533100">the</span> <span m="4533230">lj</span>
  <span m="4533640">squareds</span> <span m="4535070">being</span> <span
  m="4535410">more</span> <span m="4535850">than</span> <span
  m="4536220">linear.</span> <span m="4537640">Sorry.</span> <span
  m="4538750">Expectation.</span> <span m="4540360">Let's</span> <span
  m="4540460">first</span> <span m="4540660">compute</span> <span
  m="4540910">the</span> <span m="4540980">expectation</span> <span
  m="4541310">and</span> <span m="4541640">then</span> <span
  m="4541770">we'll</span> <span m="4541880">talk</span> <span
  m="4542150">about</span> <span m="4542400">a</span> <span
  m="4542460">tail</span> <span m="4542750">bound</span> <span
  m="4543710">which</span> <span m="4543900">is</span> <span
  m="4544000">the</span> <span m="4544080">probability</span> <span
  m="4544750">that</span> <span m="4544960">we're</span> <span
  m="4545130">much</span> <span m="4545420">bigger</span> <span
  m="4545690">than</span> <span m="4545830">the</span> <span
  m="4545930">expectation.</span></p><p><span m="4546980">First</span> <span
  m="4547250">thing</span> <span m="4547410">is</span> <span
  m="4547520">I</span> <span m="4547580">claim</span> <span
  m="4547840">the</span> <span m="4547930">expectation</span> <span
  m="4548580">is</span> <span m="4548750">linear.</span> <span
  m="4550280">So</span> <span m="4551860">again</span> <span
  m="4553070">whenever</span> <span m="4553400">we're</span> <span
  m="4553650">counting</span> <span m="4554470">something--</span> <span
  m="4556000">I</span> <span m="4556080">mean</span> <span
  m="4556230">this</span> <span m="4556420">is</span> <span
  m="4556530">basically</span> <span m="4557820">the</span> <span
  m="4558020">total</span> <span m="4558570">number</span> <span
  m="4558940">of</span> <span m="4559020">pairs</span> <span
  m="4559370">of</span> <span m="4559480">items</span> <span
  m="4559860">that</span> <span m="4559950">collide</span> <span
  m="4560480">at</span> <span m="4560580">the</span> <span
  m="4560660">first</span> <span m="4560950">level</span> <span
  m="4562580">with</span> <span m="4563330">double</span> <span
  m="4563600">counting.</span> <span m="4565060">So</span> <span
  m="4565300">I</span> <span m="4565420">mean</span> <span m="4565580">if</span>
  <span m="4565650">you</span> <span m="4565750">think</span> <span
  m="4565950">of</span> <span m="4566050">lj</span> <span m="4567350">and</span>
  <span m="4567530">then</span> <span m="4567650">I</span> <span
  m="4567730">make</span> <span m="4568000">a</span> <span
  m="4568080">complete</span> <span m="4568490">graph</span> <span
  m="4568940">on</span> <span m="4569170">those</span> <span
  m="4569930">lj</span> <span m="4570310">items,</span> <span
  m="4571300">that's</span> <span m="4571520">going</span> <span
  m="4571620">to</span> <span m="4571660">have</span> <span
  m="4571910">like</span> <span m="4572110">the squared</span> <span
  m="4572470">number</span> <span m="4572710">of</span> <span
  m="4572780">edges,</span> <span m="4574310">so,</span> <span
  m="4574400">if</span> <span m="4574590">I</span> <span m="4575170">also</span>
  <span m="4575440">multiply</span> <span m="4575840">by</span> <span
  m="4576000">2.</span></p><p><span m="4576700">So</span> <span
  m="4577430">this</span> <span m="4577640">is</span> <span
  m="4577750">the</span> <span m="4577830">same</span> <span
  m="4578050">thing</span> <span m="4578260">as</span> <span
  m="4578400">counting</span> <span m="4579060">how</span> <span
  m="4579320">many</span> <span m="4579610">pairs</span> <span
  m="4579890">of</span> <span m="4579980">items</span> <span
  m="4580730">map</span> <span m="4581010">to</span> <span
  m="4581110">the</span> <span m="4581220">same</span> <span
  m="4581950">spot,</span> <span m="4582350">the</span> <span
  m="4582490">same</span> <span m="4582730">slot.</span> <span
  m="4585180">So</span> <span m="4586130">this</span> <span
  m="4586420">is</span> <span m="4586450">going</span> <span
  m="4586690">to--</span> <span m="4586910">and</span> <span
  m="4587320">that</span> <span m="4587660">I</span> <span
  m="4587720">can</span> <span m="4587900">write</span> <span
  m="4588220">as</span> <span m="4588360">an</span> <span
  m="4588450">indicator</span> <span m="4588890">random</span> <span
  m="4589120">variable</span> <span m="4589480">which</span> <span
  m="4589910">lets</span> <span m="4590120">me</span> <span
  m="4590230">use</span> <span m="4590390">linearity</span> <span
  m="4590820">of</span> <span m="4590910">expectation</span> <span
  m="4592240">which</span> <span m="4592370">makes</span> <span
  m="4592570">me</span> <span m="4592670">happy</span> <span
  m="4593830">because</span> <span m="4594330">then</span> <span
  m="4594570">everything</span> <span m="4594880">simple.</span> <span
  m="4596940">So</span> <span m="4597170">I'm</span> <span
  m="4597300">going</span> <span m="4597420">to</span> <span
  m="4597490">write</span> <span m="4597750">Ii,j.</span> <span
  m="4601210">This</span> <span m="4601440">is</span> <span
  m="4601570">going</span> <span m="4601820">to</span> <span
  m="4601940">be</span> <span m="4603130">1</span> <span m="4604230">if</span>
  <span m="4605170">each</span> <span m="4605370">1</span> <span
  m="4605750">of</span> <span m="4605920">ki,</span> <span m="4607990">I</span>
  <span m="4608300">guess,</span> <span m="4610850">equals</span> <span
  m="4611300">h1</span> <span m="4611540">if</span> <span m="4612160">kj</span>
  <span m="4614070">and</span> <span m="4614300">it's</span> <span
  m="4614390">going</span> <span m="4614500">to</span> <span
  m="4614570">be</span> <span m="4614690">0</span> <span m="4615850">if</span>
  <span m="4616850">h1</span> <span m="4618670">otherwise.</span> <span
  m="4625080">This</span> <span m="4625240">is</span> <span
  m="4625370">the</span> <span m="4625540">total</span> <span
  m="4625930">number</span> <span m="4626200">of</span> <span
  m="4626270">pairwise</span> <span m="4626670">colliding</span> <span
  m="4627080">items</span> <span m="4627410">including</span> <span
  m="4627970">i versus</span> <span m="4628590">i.</span></p><p><span
  m="4630520">And</span> <span m="4630700">so</span> <span
  m="4631170">like</span> <span m="4631350">if</span> <span
  m="4631470">li</span> <span m="4631820">equals</span> <span
  m="4632200">1,</span> <span m="4632890">li</span> <span
  m="4633130">squared</span> <span m="4633400">is</span> <span
  m="4633480">also</span> <span m="4633770">1.</span> <span
  m="4634210">There's</span> <span m="4634390">1</span> <span
  m="4634650">item</span> <span m="4634920">colliding</span> <span
  m="4635250">with</span> <span m="4635390">itself.</span> <span
  m="4635820">So</span> <span m="4636160">this</span> <span
  m="4636390">actually</span> <span m="4636710">works</span> <span
  m="4636950">exactly.</span> <span m="4639490">All</span> <span
  m="4639600">right,</span> <span m="4639920">with</span> <span
  m="4640170">the</span> <span m="4640340">wrong</span> <span
  m="4640610">definition</span> <span m="4641000">of</span> <span
  m="4641090">colliding.</span> <span m="4641840">If you</span> <span
  m="4642150">bear</span> <span m="4642330">with</span> <span
  m="4642470">me.</span> <span m="4644140">So</span> <span
  m="4645330">now</span> <span m="4645520">we</span> <span
  m="4645620">can</span> <span m="4645730">use</span> <span
  m="4645960">linear</span> <span m="4646320">of</span> <span
  m="4646390">expectation</span> <span m="4646735">and</span> <span
  m="4647080">put</span> <span m="4647240">the</span> <span m="4647350">E</span>
  <span m="4647610">in</span> <span m="4647750">here.</span> <span
  m="4648890">So</span> <span m="4649080">this</span> <span
  m="4649310">is</span> <span m="4649820">sum</span> <span m="4651010">i</span>
  <span m="4651290">equals</span> <span m="4651650">1</span> <span
  m="4652090">to n</span> <span m="4652810">sum</span> <span
  m="4653390">j</span> <span m="4653870">equals</span> <span
  m="4654190">1</span> <span m="4654470">to</span> <span m="4654640">n</span>
  <span m="4655400">of</span> <span m="4655710">the</span> <span
  m="4655890">expectation</span> <span m="4657400">of</span> <span
  m="4657570">Ii,j.</span></p><p><span m="4659590">But</span> <span
  m="4659770">we</span> <span m="4659900">know</span> <span
  m="4660860">the</span> <span m="4661170">expectation</span> <span
  m="4661840">of</span> <span m="4661890">the</span> <span
  m="4661980">Ii,j</span> <span m="4662380">is</span> <span
  m="4662480">the</span> <span m="4662560">probability</span> <span
  m="4663260">of</span> <span m="4663350">it</span> <span
  m="4663440">equaling</span> <span m="4663800">1</span> <span
  m="4664100">because</span> <span m="4664270">it's</span> <span
  m="4664390">an</span> <span m="4664490">indicator</span> <span
  m="4664890">random</span> <span m="4665110">variable.</span> <span
  m="4665440">The</span> <span m="4665770">probability</span> <span
  m="4666230">of</span> <span m="4666310">this</span> <span
  m="4666490">happening</span> <span m="4667000">over</span> <span
  m="4667220">our</span> <span m="4667370">choice</span> <span
  m="4667700">of</span> <span m="4667810">h1</span> <span m="4668582">is</span>
  <span m="4668970">at</span> <span m="4669050">most</span> <span
  m="4669300">1/m</span> <span m="4670290">by</span> <span
  m="4670490">universality.</span> <span m="4671170">Here</span> <span
  m="4671320">it</span> <span m="4671390">actually</span> <span m="4671740">is
  m</span> <span m="4671940">because</span> <span m="4672160">we're</span> <span
  m="4672340">at the</span> <span m="4672430">first</span> <span
  m="4672710">level.</span> <span m="4673580">So</span> <span
  m="4673820">this</span> <span m="4674070">is</span> <span
  m="4674890">at</span> <span m="4675070">most</span> <span
  m="4675990">1/m</span> <span m="4678560">which</span> <span
  m="4678790">is</span> <span m="4678930">theta</span> <span
  m="4679150">n.</span></p><p><span m="4682420">So</span> <span
  m="4687150">when</span> <span m="4687460">i</span> <span m="4687600">does
  not</span> <span m="4687900">equal</span> <span m="4688110">j,</span> <span
  m="4688770">so</span> <span m="4689810">it's</span> <span m="4690220">a</span>
  <span m="4690300">little</span> <span m="4690430">bit</span> <span
  m="4690560">annoying.</span> <span m="4690930">I</span> <span
  m="4691030">do</span> <span m="4691210">have</span> <span
  m="4691330">to</span> <span m="4691430">separate</span> <span
  m="4691840">out</span> <span m="4692050">the</span> <span
  m="4693600">Ii</span> <span m="4694020">terms</span> <span
  m="4694600">from</span> <span m="4694800">the</span> <span
  m="4694920">i</span> <span m="4695490">and</span> <span
  m="4696110">different</span> <span m="4696570">i</span> <span
  m="4696720">not</span> <span m="4696950">equal</span> <span
  m="4697190">to</span> <span m="4697260">j</span> <span
  m="4697460">terms.</span> <span m="4698340">But</span> <span
  m="4698470">there's</span> <span m="4698610">only--</span> <span m="4699040">I
  mean</span> <span m="4699200">it's</span> <span m="4699360">basically</span>
  <span m="4699660">the</span> <span m="4700000">diagonal</span> <span
  m="4700420">of</span> <span m="4700480">this</span> <span
  m="4700630">matrix.</span> <span m="4701170">There's</span> <span
  m="4701360">n</span> <span m="4701800">things</span> <span
  m="4702110">that</span> <span m="4702210">will</span> <span
  m="4702380">always</span> <span m="4702730">collide</span> <span
  m="4703260">with</span> <span m="4703380">themselves.</span> <span
  m="4704510">So</span> <span m="4704720">we're</span> <span
  m="4704840">going</span> <span m="4704950">to</span> <span
  m="4705000">get</span> <span m="4705240">like</span> <span m="4705840">n
  plus</span> <span m="4709840">the</span> <span m="4709950">number</span> <span
  m="4710190">of</span> <span m="4710310">i</span> <span m="4710690">not</span>
  <span m="4710860">equal</span> <span m="4711080">to</span> <span
  m="4711150">pairs</span> <span m="4711840">double</span> <span
  m="4712120">counted.</span> <span m="4712430">So it's</span> <span
  m="4712740">like</span> <span m="4712890">2</span> <span
  m="4713100">times</span> <span m="4713820">n</span> <span
  m="4713960">choose</span> <span m="4714190">2.</span> <span
  m="4715520">But</span> <span m="4715670">we</span> <span
  m="4715760">get</span> <span m="4715890">to</span> <span
  m="4715990">divide</span> <span m="4716360">by</span> <span
  m="4716540">m.</span> <span m="4718180">So</span> <span
  m="4718330">this</span> <span m="4718520">is</span> <span
  m="4718560">like</span> <span m="4718750">n</span> <span
  m="4718920">squared</span> <span m="4719440">/n.</span> <span
  m="4720930">So</span> <span m="4721100">we</span> <span m="4721210">get</span>
  <span m="4723510">order n.</span> <span m="4726070">So</span> <span
  m="4726790">that's</span> <span m="4727090">not--</span> <span
  m="4727520">well,</span> <span m="4728090">that's</span> <span
  m="4728300">cool.</span> <span m="4729130">Expected</span> <span
  m="4729680">space</span> <span m="4730460">is</span> <span
  m="4730600">linear.</span> <span m="4731230">This</span> <span
  m="4731300">is</span> <span m="4731400">what</span> <span
  m="4731550">makes</span> <span m="4731770">everything</span> <span
  m="4732040">work.</span></p><p><span m="4739410">Last</span> <span
  m="4739730">class</span> <span m="4740000">was</span> <span
  m="4740140">about</span> <span m="4740430">getting</span> <span
  m="4740650">with</span> <span m="4740790">high</span> <span
  m="4740950">probability</span> <span m="4741530">bounds</span> <span
  m="4741840">when</span> <span m="4742000">we're</span> <span
  m="4742160">working</span> <span m="4742570">with</span> <span
  m="4742710">logs.</span> <span m="4745610">When</span> <span
  m="4745770">you</span> <span m="4745880">want</span> <span
  m="4746070">to</span> <span m="4746120">get</span> <span
  m="4746970">that</span> <span m="4747290">something</span> <span
  m="4747570">is</span> <span m="4747660">log</span> <span
  m="4747950">with</span> <span m="4748080">high</span> <span
  m="4748220">probability,</span> <span m="4749180">you</span> <span
  m="4749280">have</span> <span m="4749530">to</span> <span
  m="4749620">use,</span> <span m="4750430">with</span> <span
  m="4750620">respect</span> <span m="4750910">to n,</span> <span
  m="4751590">you</span> <span m="4751690">have</span> <span
  m="4751950">to</span> <span m="4752030">use</span> <span m="4752180">a</span>
  <span m="4752250">turn off</span> <span m="4752670">bound.</span> <span
  m="4753670">But</span> <span m="4753850">this</span> <span
  m="4754060">is</span> <span m="4754190">about--</span> <span
  m="4755090">now</span> <span m="4755430">I</span> <span
  m="4755520">want</span> <span m="4755730">to</span> <span
  m="4755770">show</span> <span m="4756060">that</span> <span
  m="4756380">the</span> <span m="4756550">space</span> <span
  m="4757030">is</span> <span m="4757290">linear</span> <span
  m="4757880">with</span> <span m="4758020">high</span> <span
  m="4758160">probability.</span> <span m="4759090">Linear</span> <span
  m="4759450">is</span> <span m="4759550">actually</span> <span
  m="4759810">really</span> <span m="4760090">easy.</span> <span
  m="4760630">You</span> <span m="4760650">can</span> <span
  m="4760780">use</span> <span m="4760950">a</span> <span
  m="4760990">much</span> <span m="4761350">weaker</span> <span
  m="4761670">bound</span> <span m="4762330">called</span> <span
  m="4762680">Markov</span> <span m="4763070">inequality.</span></p><p><span
  m="4764560">So</span> <span m="4764990">I</span> <span m="4765090">want</span>
  <span m="4765250">to</span> <span m="4765290">claim</span> <span
  m="4765610">that</span> <span m="4765760">the</span> <span
  m="4765860">probability</span> <span m="4766530">of</span> <span
  m="4766640">h1</span> <span m="4769866">of</span> <span
  m="4770330">this</span> <span m="4770700">thing</span> <span
  m="4776200">lj</span> <span m="4776600">squareds</span> <span
  m="4777690">being</span> <span m="4777990">bigger</span> <span
  m="4778440">than</span> <span m="4778970">some</span> <span
  m="4779250">constant</span> <span m="4779700">times</span> <span
  m="4779980">n</span> <span m="4781360">is</span> <span m="4781540">at</span>
  <span m="4781620">most</span> <span m="4783055">the</span> <span
  m="4783360">expectation</span> <span m="4784320">of</span> <span
  m="4784480">that</span> <span m="4784750">thing</span> <span
  m="4785900">divided</span> <span m="4786390">by</span> <span
  m="4788050">cn.</span> <span m="4789810">This</span> <span
  m="4789990">is</span> <span m="4790130">Markov's</span> <span
  m="4790520">inequality.</span> <span m="4790790">It</span> <span
  m="4791060">holds</span> <span m="4791320">for</span> <span
  m="4791440">anything</span> <span m="4792350">here.</span> <span
  m="4792710">So</span> <span m="4793210">I'm</span> <span
  m="4793310">just</span> <span m="4793390">repeating</span> <span
  m="4793790">it</span> <span m="4793920">over</span> <span
  m="4794120">here.</span> <span m="4798550">So</span> <span
  m="4799480">this</span> <span m="4799700">is</span> <span
  m="4799910">nice</span> <span m="4801300">because</span> <span
  m="4802300">we</span> <span m="4802470">know</span> <span
  m="4802740">that</span> <span m="4802970">this</span> <span
  m="4803160">expectation</span> <span m="4804900">is</span> <span
  m="4805170">linear.</span> <span m="4806970">So</span> <span
  m="4807220">we're</span> <span m="4807350">getting</span> <span
  m="4807640">like</span> <span m="4807870">a</span> <span
  m="4807940">linear</span> <span m="4808300">function</span> <span
  m="4809450">divided</span> <span m="4809940">by</span> <span
  m="4810100">cn.</span> <span m="4812000">Remember</span> <span
  m="4812250">we</span> <span m="4812460">get</span> <span m="4812680">to</span>
  <span m="4812780">choose</span> <span m="4813100">c.</span></p><p><span
  m="4814100">The</span> <span m="4814190">step</span> <span
  m="4814490">said</span> <span m="4814650">if</span> <span
  m="4814900">it's</span> <span m="4815120">bigger</span> <span
  m="4815320">than</span> <span m="4815450">some</span> <span
  m="4815640">constant</span> <span m="4816080">times</span> <span
  m="4816340">n</span> <span m="4816500">then</span> <span
  m="4816630">we're</span> <span m="4816780">redoing</span> <span
  m="4817240">the</span> <span m="4817370">thing.</span> <span
  m="4818050">So</span> <span m="4818160">I</span> <span m="4818250">can</span>
  <span m="4818400">choose</span> <span m="4818640">c</span> <span
  m="4818890">to</span> <span m="4818970">be</span> <span
  m="4819230">100,</span> <span m="4819930">whatever.</span> <span
  m="4820270">I'm</span> <span m="4820730">going</span> <span
  m="4820830">to</span> <span m="4820960">choose it to be</span> <span
  m="4821580">twice</span> <span m="4822140">this</span> <span
  m="4822350">constant.</span> <span m="4823870">And</span> <span
  m="4824000">then</span> <span m="4824230">this</span> <span
  m="4824440">is</span> <span m="4824580">at</span> <span
  m="4824670">most</span> <span m="4825350">half.</span> <span
  m="4827460">So</span> <span m="4827510">the</span> <span
  m="4827620">probability</span> <span m="4828160">of</span> <span
  m="4828220">my space</span> <span m="4828660">being</span> <span
  m="4828860">too</span> <span m="4829050">big</span> <span
  m="4829600">is</span> <span m="4829790">at</span> <span
  m="4829840">most</span> <span m="4830050">a</span> <span
  m="4830100">half.</span> <span m="4830670">We're</span> <span
  m="4830780">back</span> <span m="4830990">to</span> <span
  m="4831080">coin</span> <span m="4831330">flipping.</span> <span
  m="4831980">Every</span> <span m="4832230">time</span> <span
  m="4832450">I</span> <span m="4832510">flip</span> <span m="4832720">a</span>
  <span m="4832800">coin,</span> <span m="4833300">if</span> <span
  m="4833350">I</span> <span m="4833410">get</span> <span
  m="4833590">heads</span> <span m="4834040">I</span> <span
  m="4834280">have</span> <span m="4834460">the</span> <span
  m="4834540">right</span> <span m="4834700">amount</span> <span
  m="4834890">of</span> <span m="4834950">space</span> <span
  m="4836130">at</span> <span m="4836310">less than</span> <span
  m="4839920">c</span> <span m="4840110">times</span> <span m="4840350">n</span>
  <span m="4840550">space.</span> <span m="4842100">If</span> <span
  m="4842260">I</span> <span m="4842320">get</span> <span m="4842440">a</span>
  <span m="4842510">tails</span> <span m="4842880">I</span> <span
  m="4842940">try</span> <span m="4843200">again.</span> <span
  m="4843650">So</span> <span m="4844430">the</span> <span
  m="4844800">expected</span> <span m="4845300">number</span> <span
  m="4845550">of</span> <span m="4845610">trials</span> <span
  m="4847190">is</span> <span m="4847410">2</span> <span m="4848660">at</span>
  <span m="4848760">most</span> <span m="4850000">not trails,</span> <span
  m="4850940">trials.</span> <span m="4853710">And</span> <span
  m="4854640">it's</span> <span m="4854840">also</span> <span m="4855360">log
  n</span> <span m="4856040">trials</span> <span m="4856930">with</span> <span
  m="4857110">high</span> <span m="4857250">probability.</span></p><p><span
  m="4861510">How</span> <span m="4861590">much</span> <span
  m="4861810">time</span> <span m="4862040">do I</span> <span
  m="4862280">spend</span> <span m="4862470">for each</span> <span
  m="4862650">trial?</span> <span m="4863480">Linear</span> <span
  m="4863860">time.</span> <span m="4864190">I</span> <span
  m="4864290">choose</span> <span m="4864500">one</span> <span
  m="4864720">hash</span> <span m="4864970">function.</span> <span
  m="4865310">I</span> <span m="4865380">hash</span> <span
  m="4865750">all</span> <span m="4865890">the</span> <span
  m="4866000">items.</span> <span m="4866850">I</span> <span
  m="4866960">count</span> <span m="4867290">the</span> <span
  m="4867380">number</span> <span m="4867620">of</span> <span
  m="4867690">collision</span> <span m="4868140">squared</span> <span
  m="4869070">or</span> <span m="4869540">the</span> <span
  m="4869680">sum</span> <span m="4869970">of</span> <span m="4870070">lj</span>
  <span m="4870380">squared.</span> <span m="4870620">That</span> <span
  m="4870790">takes</span> <span m="4870990">linear</span> <span
  m="4871260">time</span> <span m="4871500">to</span> <span
  m="4871580">do.</span> <span m="4872420">And</span> <span
  m="4872590">so</span> <span m="4872790">the</span> <span
  m="4872910">total</span> <span m="4873410">work</span> <span
  m="4873680">I'm</span> <span m="4873780">doing</span> <span
  m="4874120">for</span> <span m="4874440">these</span> <span
  m="4874650">steps</span> <span m="4875480">is</span> <span
  m="4875690">n</span> <span m="4875860">log n.</span> <span
  m="4880920">So</span> <span m="4881420">n log</span> <span
  m="4881570">n</span> <span m="4881930">to</span> <span m="4882020">do</span>
  <span m="4882130">step</span> <span m="4882560">1</span> <span
  m="4882790">and</span> <span m="4882880">1</span> <span
  m="4883050">prime</span> <span m="4883710">and</span> <span
  m="4883930">log</span> <span m="4884200">squared</span> <span
  m="4884520">n</span> <span m="4885210">to</span> <span m="4885370">do</span>
  <span m="4885500">steps</span> <span m="4885840">2</span> <span
  m="4886040">and</span> <span m="4886340">2 prime.</span> <span
  m="4887000">Overall</span> <span m="4887920">n Polylog</span> <span
  m="4888805">or</span> <span m="4889140">polynomial</span> <span
  m="4889680">time.</span> <span m="4890940">And</span> <span
  m="4891170">we</span> <span m="4891350">get</span> <span
  m="4891700">guaranteed</span> <span m="4892370">no</span> <span
  m="4892530">collisions</span> <span m="4893480">for</span> <span
  m="4893560">static</span> <span m="4893970">data.</span> <span
  m="4895190">Constant</span> <span m="4896220">worst</span> <span
  m="4896500">case</span> <span m="4896720">search</span> <span
  m="4897420">and</span> <span m="4897700">linear</span> <span
  m="4898140">worst</span> <span m="4898420">case</span> <span
  m="4898900">space.</span> <span m="4899780">This</span> <span
  m="4899940">is</span> <span m="4900300">kind</span> <span
  m="4900490">of</span> <span m="4900540">surprising</span> <span
  m="4901010">that this</span> <span m="4901220">works</span> <span
  m="4901450">out</span> <span m="4901630">but</span> <span
  m="4902103">everything's</span> <span m="4902576">nice.</span> <span
  m="4907780">Now</span> <span m="4908050">you</span> <span
  m="4908200">know</span> <span m="4908360">hashing.</span></p>
uid: f5041f11c09b8737ac786cae5fb98fb9
type: course
layout: video
---
