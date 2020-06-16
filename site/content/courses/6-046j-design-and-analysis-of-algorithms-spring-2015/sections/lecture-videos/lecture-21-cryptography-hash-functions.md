---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas covers the
  basics of cryptography, including desirable properties of cryptographic
  functions, and their applications to security.</p>
  <p><strong>Instructors:</strong> Srinivas Devadas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: KqqOXndnvic
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 422393997b5a0103f6d78505f4558c94
  - id: KqqOXndnvic.srt
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-21-cryptography-hash-functions/KqqOXndnvic.srt
    title: 3play caption file
    type: null
    uid: 27e604cc319ddb0dfafd50a57b4ada71
  - id: KqqOXndnvic.pdf
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-21-cryptography-hash-functions/KqqOXndnvic.pdf
    title: 3play pdf file
    type: null
    uid: 23dfd72a9d57cb1a8e385d0671a8d86f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b7fc37dbd77ec144429b462102a7084f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bb27d0a3e8859d545071a9b02ddf9cd4
  - id: Video-YouTube-Stream
    media_location: KqqOXndnvic
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    title: Video-YouTube-Stream
    type: Video
    uid: 2d7f6767c895afbf9e80acd7e2fcf68b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/KqqOXndnvic/default.jpg'
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b64b784d895dc3f9cb0db5a95a59b577
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    title: Video-iTunes U-MP4
    type: Video
    uid: 6625b77c0ad986e5ff4b7dc78470a38c
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec21_300k.mp4'
    parent_uid: 5b809cd6fee17a09494be825238dd22a
    title: Video-Internet Archive-MP4
    type: Video
    uid: c1958f45eec73d0573c1073b7e84b92b
inline_embed_id: '46471213lecture21:cryptography:hashfunctions31638909'
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-21-cryptography-hash-functions
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-21-cryptography-hash-functions
title: 'Lecture 21: Cryptography: Hash Functions'
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
  m="10980">donation,</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13330">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15570">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17260">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21310">SRINIVAS DEVADAS: All</span> <span m="21420">right,</span> <span
  m="22490">let's</span> <span m="22570">get</span> <span
  m="22710">started.</span> <span m="23180">Good</span> <span
  m="23220">morning</span> <span m="23470">everyone.</span> <span
  m="24740">I</span> <span m="24960">see</span> <span m="25210">a lot of</span>
  <span m="25400">tired</span> <span m="25830">faces.</span> <span
  m="28210">I'm</span> <span m="28450">not</span> <span m="28660">tired.</span>
  <span m="29030">Why</span> <span m="29190">are you</span> <span
  m="29390">tired?</span></p><p><span
  m="29930">[LAUGHTER]</span></p><p>&nbsp;</p><p><span m="31860">I only</span>
  <span m="32049">lecture</span> <span m="32490">half</span> <span
  m="32729">the</span> <span m="32840">time.</span> <span m="33130">You</span>
  <span m="33270">guys</span> <span m="33480">take</span> <span
  m="33660">the</span> <span m="33730">class</span> <span m="34080">all</span>
  <span m="34330">the</span> <span m="34440">time.</span> <span
  m="36240">So</span> <span m="37210">today's</span> <span
  m="37490">lecture</span> <span m="38620">is</span> <span
  m="39340">about</span> <span m="40190">hash</span> <span
  m="40530">functions.</span> <span m="41640">And</span> <span
  m="43160">you</span> <span m="43340">may</span> <span m="43680">think</span>
  <span m="43940">that</span> <span m="44020">you</span> <span
  m="44160">know</span> <span m="44360">a</span> <span m="44410">lot</span>
  <span m="44700">about</span> <span m="44910">hash</span> <span
  m="45160">functions,</span> <span m="45680">and</span> <span
  m="46070">you</span> <span m="46220">probably</span> <span
  m="46720">do.</span></p><p><span m="47860">But</span> <span
  m="48220">what</span> <span m="48390">we're</span> <span
  m="48510">going</span> <span m="48630">to</span> <span m="48710">do</span>
  <span m="48850">today</span> <span m="49230">is</span> <span
  m="49510">talk</span> <span m="49770">about</span> <span
  m="50500">really</span> <span m="50840">a</span> <span
  m="51230">completely</span> <span m="51710">different</span> <span
  m="52750">application</span> <span m="53500">of</span> <span
  m="53600">hash</span> <span m="53860">functions,</span> <span
  m="54990">and</span> <span m="55280">a</span> <span m="55610">new</span> <span
  m="55850">set</span> <span m="56110">of</span> <span
  m="56210">properties</span> <span m="57310">that</span> <span
  m="57530">we're</span> <span m="57700">going</span> <span m="57860">to</span>
  <span m="57940">require</span> <span m="58620">of</span> <span
  m="58810">hash</span> <span m="59080">functions</span> <span
  m="60190">that</span> <span m="60430">I'll</span> <span
  m="60520">elaborate</span> <span m="61070">on.</span> <span
  m="61900">And</span> <span m="62220">we're</span> <span m="62310">going</span>
  <span m="62430">to</span> <span m="62500">see</span> <span m="62840">a</span>
  <span m="63080">bunch</span> <span m="63440">of</span> <span
  m="63500">different</span> <span m="63750">applications</span> <span
  m="64459">to</span> <span m="64590">things</span> <span m="64849">like</span>
  <span m="65069">password</span> <span m="65510">protection,</span> <span
  m="66700">checking</span> <span m="67120">the</span> <span
  m="67210">integrity</span> <span m="67720">of</span> <span
  m="67820">files,</span> <span m="69210">auctions,</span> <span
  m="70220">and</span> <span m="70310">so</span> <span m="70460">on</span> <span
  m="70590">and</span> <span m="70680">so</span> <span m="70840">forth.</span>
  <span m="71600">So</span> <span m="71640">a</span> <span
  m="71670">little</span> <span m="71830">bit</span> <span m="71950">of</span>
  <span m="72020">a</span> <span m="72110">different</span> <span
  m="72380">lecture.</span></p><p><span m="72940">Both</span> <span
  m="73370">today</span> <span m="73660">and</span> <span m="74210">on</span>
  <span m="74440">Thursday</span> <span m="75560">I'm going to</span> <span
  m="75760">be</span> <span m="75870">going</span> <span m="76010">to</span>
  <span m="76060">be</span> <span m="76180">doing</span> <span
  m="76450">cryptography</span> <span m="77130">and</span> <span
  m="77320">applications,</span> <span m="78320">not</span> <span
  m="78550">too</span> <span m="78680">much</span> <span m="78980">of</span>
  <span m="79300">algorithms.</span> <span m="80380">But</span> <span
  m="80660">we</span> <span m="80790">will</span> <span m="80930">do</span>
  <span m="81100">a</span> <span m="81160">little</span> <span
  m="81380">bit</span> <span m="81500">of</span> <span m="81600">analysis</span>
  <span m="82430">with</span> <span m="82570">respect</span> <span
  m="82960">to</span> <span m="83050">whether</span> <span
  m="83440">properties</span> <span m="83930">are</span> <span
  m="84030">satisfied,</span> <span m="85390">in</span> <span
  m="85520">this</span> <span m="85690">case</span> <span m="85920">by</span>
  <span m="86060">hash</span> <span m="86280">functions</span> <span
  m="86760">or</span> <span m="86860">not.</span> <span m="88010">So</span>
  <span m="88330">let's</span> <span m="88510">just</span> <span
  m="88680">dive</span> <span m="88890">right</span> <span
  m="89090">in.</span></p><p><span m="89910">You</span> <span
  m="90250">all</span> <span m="90450">know</span> <span m="90620">what</span>
  <span m="90760">hash</span> <span m="91000">functions</span> <span
  m="91460">are.</span> <span m="93240">There's</span> <span m="93490">no</span>
  <span m="93650">real</span> <span m="94170">change</span> <span
  m="95470">in</span> <span m="95610">the</span> <span
  m="95700">definition.</span> <span m="97380">But</span> <span
  m="97440">the</span> <span m="97560">kinds</span> <span m="98030">of</span>
  <span m="98120">hash</span> <span m="98400">functions</span> <span
  m="98880">that</span> <span m="99200">we're</span> <span
  m="99370">going</span> <span m="99470">to</span> <span m="99510">be</span>
  <span m="99610">looking</span> <span m="99860">at</span> <span
  m="99990">today</span> <span m="100610">are</span> <span
  m="100750">quite</span> <span m="101160">different</span> <span
  m="101960">from</span> <span m="102210">the</span> <span
  m="102350">simple</span> <span m="103420">hash</span> <span
  m="103670">functions,</span> <span m="104270">like</span> <span
  m="104800">taking</span> <span m="105090">a</span> <span m="105150">mod</span>
  <span m="105590">with</span> <span m="105730">a</span> <span
  m="105790">prime</span> <span m="106100">number</span> <span
  m="106850">that</span> <span m="107070">we've</span> <span
  m="107260">looked</span> <span m="107500">at</span> <span m="107970">in</span>
  <span m="108120">the</span> <span m="108220">past.</span> <span
  m="109950">And</span> <span m="110120">the</span> <span
  m="110170">notion</span> <span m="110500">of</span> <span
  m="110610">collisions</span> <span m="111400">is</span> <span
  m="111560">going</span> <span m="111680">to</span> <span
  m="111730">come</span> <span m="111900">up</span> <span
  m="112030">again,</span> <span m="112870">except</span> <span
  m="113280">that</span> <span m="113520">again</span> <span
  m="113790">we're</span> <span m="113980">going</span> <span
  m="114080">to</span> <span m="114240">raise</span> <span m="114500">the</span>
  <span m="114600">stakes</span> <span m="114980">a</span> <span
  m="115040">little</span> <span m="115250">bit.</span></p><p><span
  m="116600">So a</span> <span m="117100">hash</span> <span
  m="117410">function</span> <span m="121280">maps</span> <span
  m="123530">arbitrary</span> <span m="124100">strings--</span> <span
  m="127520">let</span> <span m="127730">me do</span> <span
  m="127840">this</span> <span m="128160">right.</span> <span
  m="131940">So</span> <span m="132100">you're</span> <span
  m="132260">not</span> <span m="132500">making</span> <span m="132790">a</span>
  <span m="132840">statement</span> <span m="133790">about</span> <span
  m="134680">the</span> <span m="134770">length</span> <span
  m="135130">of</span> <span m="135240">the</span> <span
  m="135320">string.</span> <span m="138440">You</span> <span
  m="138670">will</span> <span m="138840">break</span> <span
  m="139090">it</span> <span m="139180">up,</span> <span m="140130">even</span>
  <span m="140360">if</span> <span m="140430">you</span> <span
  m="140530">had</span> <span m="140770">a</span> <span m="140830">string</span>
  <span m="141230">of</span> <span m="141380">length</span> <span
  m="142440">512,</span> <span m="143490">or</span> <span
  m="144030">maybe</span> <span m="144320">it</span> <span m="144400">was</span>
  <span m="144580">27,</span> <span m="145630">you do</span> <span
  m="145930">want</span> <span m="146100">to</span> <span m="146150">get</span>
  <span m="147260">a</span> <span m="147390">number</span> <span
  m="147770">out</span> <span m="147980">of</span> <span m="148120">it.</span>
  <span m="148830">In</span> <span m="149180">a</span> <span
  m="149250">specific</span> <span m="150130">range</span> <span
  m="151140">there's</span> <span m="151400">going</span> <span
  m="151540">to</span> <span m="151590">be</span> <span m="151820">a</span>
  <span m="152920">number</span> <span m="153280">of</span> <span
  m="153360">bits</span> <span m="153720">associated</span> <span
  m="154190">with</span> <span m="154340">our</span> <span
  m="154580">hash</span> <span m="154810">functions.</span> <span
  m="155350">And</span> <span m="155540">previously</span> <span
  m="155970">we</span> <span m="156050">had</span> <span m="156190">a</span>
  <span m="156230">number</span> <span m="156460">of</span> <span
  m="156510">slots</span> <span m="156970">associated</span> <span
  m="157460">with</span> <span m="157970">the</span> <span
  m="158140">output</span> <span m="158440">of</span> <span
  m="158530">the</span> <span m="158590">hash</span> <span
  m="158820">function.</span> <span m="159620">But</span> <span
  m="159850">the</span> <span m="159910">input</span> <span
  m="160360">could</span> <span m="160510">be</span> <span
  m="160690">arbitrary.</span></p><p><span m="162100">And</span> <span
  m="163120">these</span> <span m="163480">arbitrary</span> <span
  m="163910">strings</span> <span m="164340">of</span> <span
  m="164500">data</span> <span m="168080">are</span> <span
  m="168270">going</span> <span m="168410">to</span> <span m="168450">get</span>
  <span m="168640">mapped,</span> <span m="169100">as</span> <span
  m="169280">I</span> <span m="169340">just</span> <span m="169580">said,</span>
  <span m="170310">to</span> <span m="170640">a</span> <span
  m="170915">fixed</span> <span m="171190">length</span> <span
  m="172820">output.</span> <span m="176380">And</span> <span
  m="176730">we're</span> <span m="177020">going</span> <span
  m="177140">to</span> <span m="177200">think</span> <span
  m="177360">about</span> <span m="177570">this</span> <span
  m="177730">fixed</span> <span m="177990">length</span> <span
  m="178260">as</span> <span m="178650">being</span> <span m="178830">a</span>
  <span m="178870">number</span> <span m="179090">of</span> <span
  m="179180">bits</span> <span m="180180">today,</span> <span
  m="181590">as</span> <span m="181790">opposed</span> <span
  m="182060">to</span> <span m="182140">slots</span> <span m="182580">in</span>
  <span m="182660">the</span> <span m="182740">hash</span> <span
  m="182980">table.</span> <span m="184530">Because</span> <span
  m="184690">we</span> <span m="184800">really</span> <span
  m="185060">aren't</span> <span m="185290">going</span> <span
  m="185430">to</span> <span m="185470">be</span> <span
  m="185570">storing</span> <span m="188170">a</span> <span
  m="188260">dictionary</span> <span m="188800">or</span> <span
  m="188880">a</span> <span m="188910">hash</span> <span m="189200">table</span>
  <span m="189710">in</span> <span m="189840">the</span> <span
  m="189910">applications</span> <span m="190520">we're going to</span> <span
  m="190700">look</span> <span m="190930">at</span> <span
  m="191080">today.</span> <span m="191780">It's</span> <span
  m="191970">simply</span> <span m="192320">a</span> <span
  m="192620">question</span> <span m="193030">of</span> <span
  m="193210">computing</span> <span m="193790">a</span> <span
  m="193810">hash.</span></p><p><span m="194750">And</span> <span
  m="195510">because</span> <span m="195890">the</span> <span
  m="196480">fixed</span> <span m="196930">length</span> <span
  m="197200">output</span> <span m="198120">is</span> <span
  m="198310">going</span> <span m="198450">to</span> <span m="198490">be</span>
  <span m="198600">something</span> <span m="198950">on</span> <span
  m="199030">the</span> <span m="199100">order</span> <span m="199420">of</span>
  <span m="200150">160-bits,</span> <span m="201710">or</span> <span
  m="201940">256-bits,</span> <span m="203880">there's</span> <span
  m="204140">no</span> <span m="204350">way</span> <span m="204880">that</span>
  <span m="205040">you</span> <span m="205150">could</span> <span
  m="205280">store</span> <span m="206450">two</span> <span
  m="206680">arrays</span> <span m="206980">to</span> <span
  m="207050">160</span> <span m="208610">elements</span> <span
  m="209360">in</span> <span m="210240">a</span> <span m="210340">hash</span>
  <span m="210610">table,</span> <span m="211640">or</span> <span
  m="212130">even</span> <span m="212370">two arrays to</span> <span
  m="212750">64</span> <span m="213370">really.</span> <span
  m="214340">And</span> <span m="214850">so</span> <span m="216270">we're</span>
  <span m="216410">going</span> <span m="216690">to</span> <span
  m="216770">just</span> <span m="217030">assume</span> <span
  m="217120">that</span> <span m="217370">we're</span> <span
  m="217660">computing</span> <span m="219100">these</span> <span
  m="219380">hashes</span> <span m="221880">and</span> <span
  m="222920">using</span> <span m="223260">them</span> <span
  m="223440">for</span> <span m="224120">certain</span> <span
  m="224440">applications.</span></p><p><span m="225960">I</span> <span
  m="226170">just</span> <span m="226370">wrote</span> <span
  m="226870">output</span> <span m="226980">twice</span> <span
  m="227350">I</span> <span m="227420">guess.</span> <span m="228800">So</span>
  <span m="229660">map</span> <span m="229950">it</span> <span
  m="230090">to</span> <span m="230250">a</span> <span m="230900">fixed</span>
  <span m="231240">length</span> <span m="231470">output.</span> <span
  m="232720">We</span> <span m="232830">want</span> <span m="232980">to</span>
  <span m="233050">do</span> <span m="233200">this</span> <span
  m="233610">in</span> <span m="233750">a</span> <span
  m="233840">deterministic</span> <span m="236260">fashion.</span></p><p><span
  m="238990">So</span> <span m="239220">once</span> <span
  m="239490">we've</span> <span m="239670">computed</span> <span
  m="240140">the</span> <span m="240220">hash</span> <span m="240880">of</span>
  <span m="241060">a</span> <span m="241170">particular</span> <span
  m="243870">arbitrary</span> <span m="244430">string</span> <span
  m="244930">that</span> <span m="245070">is</span> <span
  m="245210">given</span> <span m="245470">to</span> <span m="245630">us,</span>
  <span m="247250">we</span> <span m="247600">want</span> <span
  m="247960">to</span> <span m="248040">be</span> <span m="248160">able</span>
  <span m="248280">to</span> <span m="248350">repeat</span> <span
  m="248770">that</span> <span m="248960">process</span> <span
  m="249850">to</span> <span m="249960">get</span> <span m="250150">the</span>
  <span m="250230">same</span> <span m="250570">hash</span> <span
  m="251650">every</span> <span m="251920">time.</span> <span
  m="253090">We</span> <span m="253190">want</span> <span m="253340">to</span>
  <span m="253400">do</span> <span m="253510">this</span> <span
  m="253710">in</span> <span m="253800">a</span> <span m="253850">public</span>
  <span m="254330">fashion.</span> <span m="255070">So</span> <span
  m="255300">everything</span> <span m="255630">is</span> <span
  m="255760">public.</span> <span m="256170">There's</span> <span
  m="256370">no</span> <span m="256510">secrecy.</span></p><p><span
  m="257420">There's</span> <span m="257910">keyed</span> <span
  m="258240">hash</span> <span m="258529">functions</span> <span
  m="259120">that</span> <span m="259370">we</span> <span
  m="259480">won't</span> <span m="259700">actually</span> <span
  m="259920">look</span> <span m="260089">at</span> <span
  m="260230">today,</span> <span m="261089">but</span> <span
  m="261399">maybe</span> <span m="261680">in</span> <span
  m="261779">passing</span> <span m="262210">I'll</span> <span
  m="262240">mention</span> <span m="262570">it</span> <span
  m="262670">next</span> <span m="263000">time.</span> <span
  m="264500">We're</span> <span m="264680">not</span> <span
  m="264930">looking</span> <span m="265230">at</span> <span
  m="265420">keyed</span> <span m="265830">hash</span> <span
  m="266070">functions</span> <span m="266470">here.</span> <span
  m="266700">There's</span> <span m="266900">no</span> <span
  m="267100">secrets</span> <span m="268040">in</span> <span
  m="268380">any</span> <span m="268680">of</span> <span m="268800">the</span>
  <span m="269570">descriptions</span> <span m="270160">of</span> <span
  m="270290">algorithms</span> <span m="270920">or</span> <span
  m="271230">techniques</span> <span m="272140">I'm</span> <span
  m="272280">going</span> <span m="272430">to</span> <span m="272470">be</span>
  <span m="272560">describing</span> <span m="273050">today.</span></p><p><span
  m="274540">And</span> <span m="274980">we</span> <span m="275160">want</span>
  <span m="275390">this</span> <span m="275530">to</span> <span
  m="275600">be</span> <span m="275740">random.</span> <span m="277720">We want
  it</span> <span m="278010">to</span> <span m="278150">look</span> <span
  m="278500">random.</span> <span m="279870">True</span> <span
  m="280160">randomness</span> <span m="280860">is</span> <span
  m="281060">going</span> <span m="281240">to</span> <span m="281300">be</span>
  <span m="282550">impossible</span> <span m="283040">to</span> <span
  m="283395">achieve,</span> <span m="283750">given</span> <span
  m="284070">our</span> <span m="284230">other</span> <span
  m="284430">constraints.</span> <span m="285470">But</span> <span
  m="285600">we're</span> <span m="285700">going to</span> <span m="285940">try
  and</span> <span m="286150">approximate</span> <span m="286500">it</span>
  <span m="286850">with</span> <span m="287290">pseudo-randomness.</span> <span
  m="288880">But</span> <span m="289140">we'd</span> <span
  m="289320">want</span> <span m="289490">it</span> <span m="289570">to</span>
  <span m="289710">look</span> <span m="289890">random,</span> <span
  m="290610">because</span> <span m="290880">we</span> <span
  m="291040">are</span> <span m="291270">interested--</span> <span
  m="292040">as</span> <span m="292400">we</span> <span m="293010">were</span>
  <span m="293850">in</span> <span m="294010">the</span> <span
  m="294090">case</span> <span m="294310">of</span> <span
  m="294450">dictionaries</span> <span m="295210">and</span> <span
  m="295370">the</span> <span m="295490">regular</span> <span
  m="296460">application</span> <span m="297070">of</span> <span
  m="297160">hash</span> <span m="297390">functions--</span> <span
  m="297880">we</span> <span m="298030">are</span> <span
  m="298200">interested</span> <span m="298580">in</span> <span
  m="298980">minimizing</span> <span m="299600">collisions.</span></p><p><span
  m="300870">And</span> <span m="300990">in</span> <span m="301100">fact</span>
  <span m="301460">we're</span> <span m="301570">going</span> <span
  m="301670">to</span> <span m="301890">raise</span> <span m="302190">the</span>
  <span m="302290">stakes</span> <span m="302630">really</span> <span
  m="303070">high</span> <span m="303570">with</span> <span
  m="303770">respect</span> <span m="304070">to</span> <span
  m="304150">collisions.</span> <span m="305470">We</span> <span m="305660">want
  it</span> <span m="305970">to</span> <span m="306030">be</span> <span
  m="306160">impossible</span> <span m="307780">for</span> <span
  m="308210">you,</span> <span m="309080">or</span> <span
  m="309300">anyone</span> <span m="309610">else,</span> <span
  m="309870">to</span> <span m="310000">discover</span> <span
  m="310630">collisions.</span> <span m="312210">And</span> <span
  m="312690">that's</span> <span m="313480">going</span> <span
  m="313620">to</span> <span m="313660">be</span> <span m="313770">an</span>
  <span m="313830">important</span> <span m="314220">property</span> <span
  m="314660">of</span> <span m="314770">collision</span> <span
  m="315150">resistance</span> <span m="316160">that</span> <span
  m="316610">obviously</span> <span m="317130">is</span> <span
  m="317270">going</span> <span m="317400">to</span> <span
  m="317460">require</span> <span m="318570">randomness.</span> <span
  m="320520">And</span> <span m="322770">those</span> <span
  m="323000">are</span> <span m="323030">the</span> <span
  m="323160">three</span> <span m="323370">things</span> <span
  m="323570">we</span> <span m="323670">want,</span> <span
  m="324220">deterministic,</span> <span m="325020">public,</span> <span
  m="325530">and</span> <span m="325660">random.</span></p><p><span
  m="326840">And</span> <span m="327010">so</span> <span m="327900">just</span>
  <span m="328110">from</span> <span m="328330">a</span> <span
  m="330250">function</span> <span m="330770">description</span> <span
  m="331300">standpoint</span> <span m="332870">you</span> <span
  m="332980">have</span> <span m="333210">0,</span> <span m="333510">1</span>
  <span m="334240">star</span> <span m="334680">here,</span> <span
  m="335080">which</span> <span m="335130">implies</span> <span
  m="335550">that</span> <span m="335660">it's</span> <span m="335800">an</span>
  <span m="335910">arbitrary</span> <span m="336480">length</span> <span
  m="336730">strength.</span> <span m="337770">And</span> <span
  m="337990">we</span> <span m="338080">want</span> <span m="338210">to</span>
  <span m="338250">go</span> <span m="338440">to</span> <span m="339170">0,
  1</span> <span m="339962">d.</span> <span m="341830">And</span> <span
  m="342530">this</span> <span m="342690">is</span> <span m="342870">a</span>
  <span m="342940">string</span> <span m="343320">of</span> <span
  m="343430">length</span> <span m="343690">d.</span> <span m="349170">So</span>
  <span m="349350">that</span> <span m="349530">means</span> <span
  m="349740">that</span> <span m="349880">you're</span> <span
  m="349980">getting</span> <span m="350170">d-bits</span> <span
  m="350680">out</span> <span m="351250">from</span> <span
  m="351440">your</span> <span m="351560">hash</span> <span
  m="351800">function.</span> <span m="352650">And</span> <span
  m="352820">here</span> <span m="353920">the</span> <span
  m="354070">length</span> <span m="355460">is</span> <span
  m="355640">greater</span> <span m="355820">than</span> <span
  m="355970">or</span> <span m="356020">equal</span> <span m="356180">to</span>
  <span m="356250">0.</span></p><p><span m="360360">So</span> <span
  m="360480">that's</span> <span m="360720">it.</span> <span
  m="361750">Not</span> <span m="362750">a</span> <span m="362860">lot</span>
  <span m="363170">that's</span> <span m="363380">new</span> <span
  m="363590">here.</span> <span m="365000">But</span> <span m="366770">a</span>
  <span m="366800">few</span> <span m="367020">things</span> <span
  m="367280">that</span> <span m="367400">are</span> <span
  m="367500">going</span> <span m="367690">to</span> <span m="367750">be</span>
  <span m="367890">a</span> <span m="367950">little</span> <span
  m="368070">bit</span> <span m="368210">different.</span> <span
  m="368880">And</span> <span m="369050">there's</span> <span
  m="369170">some</span> <span m="369280">subtleties</span> <span
  m="369580">here</span> <span m="370080">that</span> <span
  m="370230">we'll</span> <span m="370380">get</span> <span
  m="370590">to.</span></p><p><span m="371630">I</span> <span
  m="371740">want</span> <span m="371910">to</span> <span
  m="372190">emphasize</span> <span m="374230">two</span> <span
  m="374390">things,</span> <span m="376220">one</span> <span
  m="376380">of</span> <span m="376500">which</span> <span m="376640">I</span>
  <span m="376690">just</span> <span m="376900">said.</span> <span
  m="378600">There's</span> <span m="378880">no</span> <span
  m="379030">secrecy,</span> <span m="381090">no</span> <span
  m="381270">secret</span> <span m="381620">keys</span> <span
  m="381910">here</span> <span m="382570">in</span> <span m="382790">the</span>
  <span m="382870">hash</span> <span m="383100">functions</span> <span
  m="383570">that</span> <span m="383830">we are</span> <span
  m="384000">describing.</span> <span m="385350">All</span> <span
  m="385660">operations</span> <span m="386150">are</span> <span
  m="386260">public.</span> <span m="387250">So</span> <span
  m="387300">just</span> <span m="387580">like</span> <span
  m="388360">you</span> <span m="388520">had</span> <span m="388810">your</span>
  <span m="388960">hash</span> <span m="389200">function,</span> <span
  m="389650">which</span> <span m="389800">was</span> <span m="391170">k
  mod</span> <span m="391400">p,</span> <span m="393330">and</span> <span
  m="394400">p</span> <span m="394590">was</span> <span m="394710">a</span>
  <span m="394800">prime</span> <span m="395280">and</span> <span
  m="395560">p</span> <span m="395920">was</span> <span m="396110">public</span>
  <span m="396910">and</span> <span m="397130">known</span> <span
  m="397460">to</span> <span m="397810">everyone</span> <span
  m="398220">who</span> <span m="398330">used</span> <span m="398580">the</span>
  <span m="398640">dictionary,</span> <span m="399970">everything</span> <span
  m="400330">here</span> <span m="400600">we are</span> <span
  m="400730">going</span> <span m="400840">to</span> <span m="400880">be</span>
  <span m="400990">talking</span> <span m="401220">about</span> <span
  m="401470">is</span> <span m="401600">public.</span> <span
  m="402570">So</span> <span m="403340">anyone</span> <span
  m="403750">can</span> <span m="403920">compute</span> <span
  m="404420">h.</span></p><p><span m="412080">And</span> <span
  m="412530">we're</span> <span m="412670">going</span> <span
  m="412800">to</span> <span m="412850">assume</span> <span
  m="413140">that</span> <span m="413260">this</span> <span m="413400">is</span>
  <span m="413560">poly-time</span> <span m="414310">computation--</span> <span
  m="415030">not</span> <span m="415210">too</span> <span
  m="415360">surprising--</span> <span m="416510">but</span> <span
  m="416920">I'm</span> <span m="417310">being</span> <span
  m="417630">quite</span> <span m="420190">flexible</span> <span
  m="420700">here.</span> <span m="421700">When</span> <span
  m="422310">you</span> <span m="422460">look</span> <span m="422690">at</span>
  <span m="422800">dictionaries,</span> <span m="423500">and</span> <span
  m="423620">you</span> <span m="423720">think</span> <span
  m="423880">about</span> <span m="424090">using</span> <span
  m="424420">dictionaries,</span> <span m="425440">and</span> <span
  m="425850">using</span> <span m="426210">it</span> <span m="426360">to</span>
  <span m="426700">implement</span> <span m="427140">efficient</span> <span
  m="427580">algorithms,</span> <span m="428540">what</span> <span
  m="428800">is</span> <span m="429020">the</span> <span
  m="430320">assumption</span> <span m="430540">we</span> <span
  m="431130">kind</span> <span m="431270">of</span> <span
  m="431340">implicitly</span> <span m="431930">made--</span> <span
  m="432450">are</span> <span m="432620">perhaps</span> <span
  m="433050">explicitly</span> <span m="433690">in</span> <span
  m="433780">some</span> <span m="434010">cases--</span> <span
  m="434800">with</span> <span m="434950">respect</span> <span
  m="435340">to</span> <span m="435880">computing</span> <span
  m="436290">the</span> <span m="436370">hash?</span> <span
  m="439050">Anybody?</span> <span m="442450">Yeah?</span></p><p><span
  m="442710">AUDIENCE: Constant time?</span></p><p><span m="443690">SRINIVAS
  DEVADAS: Constant</span> <span m="444130">time.</span> <span
  m="444770">We</span> <span m="444930">assumed--</span> <span
  m="445710">so</span> <span m="445840">this</span> <span m="446040">is</span>
  <span m="446520">not</span> <span m="446840">necessarily</span> <span
  m="451780">order</span> <span m="452110">1,</span> <span
  m="453030">right?</span> <span m="453680">So</span> <span
  m="453860">that's</span> <span m="454060">important.</span> <span
  m="454840">So</span> <span m="455550">we're</span> <span
  m="455710">going</span> <span m="455940">to--</span> <span m="459200">I want
  to</span> <span m="459690">make</span> <span m="459840">sure</span> <span
  m="459990">you're</span> <span m="460110">watching.</span> <span
  m="462180">So</span> <span m="463300">you're</span> <span
  m="463440">going</span> <span m="463640">to</span> <span
  m="464170">raise</span> <span m="464420">the</span> <span
  m="464500">stakes</span> <span m="464950">even</span> <span
  m="465220">with</span> <span m="465330">respect</span> <span
  m="465770">to</span> <span m="466360">the</span> <span
  m="466490">complexity</span> <span m="467110">of</span> <span
  m="467180">the</span> <span m="467240">hash.</span> <span
  m="467990">And</span> <span m="468140">as</span> <span
  m="468240">you'll</span> <span m="468380">see,</span> <span
  m="468630">because</span> <span m="468890">of</span> <span
  m="468970">the</span> <span m="469100">desirable</span> <span
  m="469640">properties,</span> <span m="470470">we're</span> <span
  m="470600">going</span> <span m="470730">to</span> <span
  m="470770">have</span> <span m="470980">to</span> <span m="471100">do</span>
  <span m="471200">that.</span> <span m="471750">We're going to</span> <span
  m="471880">ask</span> <span m="472250">for</span> <span
  m="472530">really</span> <span m="472810">a</span> <span m="472880">lot</span>
  <span m="473500">with</span> <span m="473700">respect</span> <span
  m="474010">to</span> <span m="474060">these</span> <span
  m="474230">hash</span> <span m="474450">functions.</span></p><p><span
  m="475610">Nobody</span> <span m="475980">can</span> <span
  m="476110">find</span> <span m="476410">a</span> <span
  m="476460">collision,</span> <span m="477560">right?</span> <span
  m="478350">And</span> <span m="478480">if</span> <span m="478550">you</span>
  <span m="478650">have</span> <span m="478820">something</span> <span
  m="479140">as</span> <span m="479280">simple</span> <span m="479570">as</span>
  <span m="480270">k</span> <span m="480610">mod</span> <span
  m="480780">p,</span> <span m="481750">it's going to</span> <span
  m="481830">be</span> <span m="481930">trivial</span> <span
  m="482400">to</span> <span m="482470">find</span> <span m="482700">a</span>
  <span m="482730">collision.</span> <span m="483910">And</span> <span
  m="484110">so</span> <span m="484750">these</span> <span
  m="485520">order</span> <span m="485790">1</span> <span m="486020">hash</span>
  <span m="486270">functions</span> <span m="486710">that</span> <span
  m="486840">you're</span> <span m="486970">familiar</span> <span
  m="487370">with</span> <span m="488120">aren't</span> <span
  m="488250">going</span> <span m="488380">to</span> <span
  m="488890">make</span> <span m="489150">the</span> <span
  m="489230">grade</span> <span m="490180">with</span> <span
  m="490390">respect</span> <span m="491110">to</span> <span
  m="491190">any</span> <span m="491470">of</span> <span m="491550">the</span>
  <span m="491630">properties</span> <span m="492160">that</span> <span
  m="492310">we'll</span> <span m="492510">discuss</span> <span
  m="493330">in</span> <span m="493470">a</span> <span m="493520">few</span>
  <span m="493670">minutes.</span> <span m="494500">All right,</span> <span
  m="494820">so</span> <span m="494860">remember</span> <span
  m="495120">this</span> <span m="495270">is</span> <span
  m="495400">poly-time</span> <span m="495910">computation.</span></p><p><span
  m="497170">And</span> <span m="497340">there's</span> <span
  m="497480">lots</span> <span m="497740">of</span> <span
  m="497820">examples</span> <span m="498320">of</span> <span
  m="498410">these</span> <span m="498550">hash</span> <span
  m="498760">functions.</span> <span m="499170">And</span> <span
  m="499280">for</span> <span m="499350">those</span> <span m="499580">of</span>
  <span m="499690">you</span> <span m="500250">who</span> <span
  m="500350">are</span> <span m="500450">kind</span> <span m="500490">of</span>
  <span m="500590">into</span> <span m="500880">computer</span> <span
  m="501260">security</span> <span m="501820">and</span> <span
  m="502110">cryptography</span> <span m="502700">already,</span> <span
  m="503830">you</span> <span m="504290">might</span> <span
  m="504480">have</span> <span m="504580">heard</span> <span
  m="504890">of</span> <span m="506110">examples</span> <span
  m="506680">like</span> <span m="506950">MD4</span> <span m="507850">and</span>
  <span m="507980">MD5.</span> <span m="509240">These are</span> <span
  m="509400">versions.</span> <span m="510260">MD</span> <span
  m="510660">stands</span> <span m="510990">for</span> <span
  m="511100">message</span> <span m="511470">digest.</span> <span
  m="512309">These</span> <span m="512570">were</span> <span
  m="512669">functions</span> <span m="513100">that were</span> <span
  m="513210">invented</span> <span m="513720">by</span> <span
  m="513929">Professor</span> <span m="514400">Rivest.</span></p><p><span
  m="515610">And</span> <span m="517350">they</span> <span m="517850">had</span>
  <span m="518240">d</span> <span m="518549">equals</span> <span
  m="518960">128</span> <span m="520799">way</span> <span m="521000">back</span>
  <span m="521230">when--</span> <span m="522140">1992,</span> <span
  m="522970">if</span> <span m="523130">I</span> <span
  m="523210">recall--</span> <span m="524039">when</span> <span
  m="524240">they</span> <span m="524340">were</span> <span
  m="524480">proposed.</span> <span m="525830">And</span> <span
  m="526300">these</span> <span m="527710">algorithms</span> <span
  m="528310">have</span> <span m="528780">since</span> <span
  m="529190">been</span> <span m="529380">broken</span> <span
  m="530320">in</span> <span m="530440">the</span> <span m="530540">sense</span>
  <span m="530830">that</span> <span m="531100">it</span> <span
  m="531200">was</span> <span m="531340">conjectured</span> <span
  m="532060">that</span> <span m="532180">they</span> <span
  m="532260">had</span> <span m="532480">particular</span> <span
  m="532860">properties</span> <span m="533490">of</span> <span
  m="533950">collision</span> <span m="534350">resistance</span> <span
  m="535300">that</span> <span m="535480">it</span> <span
  m="535580">would</span> <span m="535750">take</span> <span
  m="535970">exponential</span> <span m="536730">time</span> <span
  m="539060">for</span> <span m="539930">anybody</span> <span
  m="540360">to</span> <span m="540440">find</span> <span
  m="540770">collisions.</span> <span m="541660">And</span> <span
  m="541800">it</span> <span m="541880">still</span> <span
  m="542160">kind</span> <span m="542510">of</span> <span
  m="542600">takes</span> <span m="542920">exponential</span> <span
  m="543560">time,</span> <span m="544490">but</span> <span m="545860">2</span>
  <span m="546160">raised</span> <span m="546400">to</span> <span
  m="546480">37</span> <span m="548310">is</span> <span
  m="549080">exponential</span> <span m="550160">at</span> <span
  m="550440">one</span> <span m="550670">level,</span> <span
  m="551040">but</span> <span m="551680">constant</span> <span
  m="551960">in</span> <span m="552240">another</span> <span
  m="552600">level.</span> <span m="553700">So</span> <span
  m="555030">you</span> <span m="555200">can</span> <span m="555310">kind</span>
  <span m="555450">of</span> <span m="555540">do</span> <span
  m="555750">it</span> <span m="555900">in</span> <span m="556440">a</span>
  <span m="556500">few</span> <span m="556660">seconds</span> <span
  m="557140">now.</span></p><p><span m="557720">So</span> <span
  m="559010">a</span> <span m="559860">little</span> <span m="560010">bit</span>
  <span m="560100">of</span> <span m="560150">history.</span> <span
  m="560610">I'm</span> <span m="560840">not</span> <span
  m="560990">going</span> <span m="561070">to</span> <span
  m="561110">spend</span> <span m="561260">a</span> <span m="561310">lot</span>
  <span m="561450">of</span> <span m="561520">time</span> <span
  m="561770">on</span> <span m="561880">this.</span> <span m="563300">MD5</span>
  <span m="563810">was</span> <span m="563960">used</span> <span
  m="564470">to</span> <span m="564680">create</span> <span m="565480">what
  was</span> <span m="565770">called</span> <span m="566000">a</span> <span
  m="566050">secure</span> <span m="566530">hash</span> <span
  m="566870">algorithm.</span> <span m="568400">This</span> <span
  m="568750">is</span> <span m="569780">160-bits.</span> <span
  m="571770">And</span> <span m="572540">this</span> <span m="572760">is</span>
  <span m="573870">not</span> <span m="574320">quite</span> <span
  m="574570">broken</span> <span m="574920">at</span> <span
  m="575010">this</span> <span m="575180">point.</span> <span
  m="576330">But</span> <span m="576730">that</span> <span
  m="577170">people</span> <span m="577490">consider</span> <span
  m="578020">it</span> <span m="578390">broken,</span> <span
  m="578930">or</span> <span m="579220">soon</span> <span m="579540">to</span>
  <span m="579610">be</span> <span m="579730">broken.</span></p><p><span
  m="581920">Right</span> <span m="582160">now</span> <span
  m="583140">the</span> <span m="583370">recommended</span> <span
  m="585030">algorithm</span> <span m="585560">is</span> <span
  m="586010">called</span> <span m="586440">SHA-3,</span> <span
  m="587930">secure</span> <span m="588330">hash</span> <span
  m="588590">algorithm</span> <span m="589190">version</span> <span
  m="589620">three.</span> <span m="590260">And</span> <span m="590430">there
  was</span> <span m="590570">a</span> <span m="590640">contest</span> <span
  m="591310">that</span> <span m="591460">ran</span> <span m="591760">for</span>
  <span m="592260">like</span> <span m="592720">18</span> <span
  m="593090">months,</span> <span m="593870">or</span> <span
  m="593940">maybe</span> <span m="594150">even</span> <span
  m="594320">longer,</span> <span m="595440">that</span> <span
  m="596020">eventually</span> <span m="596350">was</span> <span
  m="596490">won</span> <span m="596770">by</span> <span m="597730">what</span>
  <span m="598150">turned</span> <span m="598530">into</span> <span
  m="598660">the</span> <span m="598940">SHA-3.</span> <span
  m="599580">And</span> <span m="599710">they</span> <span m="599770">had</span>
  <span m="599940">a</span> <span m="600160">different</span> <span
  m="600450">name</span> <span m="600670">for</span> <span m="600870">it</span>
  <span m="601290">that</span> <span m="601570">I</span> <span
  m="601690">can't</span> <span m="602020">recall.</span> <span
  m="603200">But</span> <span m="603290">it</span> <span
  m="603410">turned</span> <span m="603600">into</span> <span
  m="604220">SHA-3.</span></p><p><span m="605180">And</span> <span
  m="605400">what</span> <span m="605540">happened</span> <span
  m="606030">along</span> <span m="606280">the</span> <span
  m="606360">way,</span> <span m="606940">as</span> <span m="607150">we</span>
  <span m="607260">went</span> <span m="607460">from</span> <span
  m="607610">MD4,</span> <span m="608220">MD5,</span> <span
  m="609200">SHA-1</span> <span m="609770">to</span> <span
  m="609850">SHA-3,</span> <span m="610430">is</span> <span
  m="610580">that</span> <span m="611120">this</span> <span
  m="611640">amount</span> <span m="611920">of</span> <span
  m="612010">computation</span> <span m="612690">that</span> <span
  m="612830">you</span> <span m="612930">had</span> <span m="613170">to</span>
  <span m="613260">do</span> <span m="613830">increased.</span> <span
  m="614810">And</span> <span m="614920">the</span> <span
  m="615010">complexity</span> <span m="615670">of</span> <span
  m="615760">operations</span> <span m="616340">that</span> <span
  m="616470">you</span> <span m="616570">had</span> <span m="616780">to</span>
  <span m="616870">do</span> <span m="617460">in</span> <span
  m="617630">order</span> <span m="617810">to</span> <span
  m="618990">compute</span> <span m="619420">the</span> <span
  m="619490">hash</span> <span m="620200">of an</span> <span
  m="620460">arbitrary</span> <span m="620890">string</span> <span
  m="621690">increased</span> <span m="622820">to</span> <span
  m="622900">the</span> <span m="622990">point</span> <span
  m="623280">where--</span> <span m="624340">you</span> <span
  m="624460">want</span> <span m="624560">to</span> <span
  m="624600">think</span> <span m="624760">about</span> <span
  m="624980">this</span> <span m="625180">as</span> <span m="625380">100</span>
  <span m="625820">rounds</span> <span m="626190">of</span> <span
  m="626280">computation.</span> <span m="627720">And</span> <span
  m="628100">certainly</span> <span m="629350">order</span> <span
  m="629720">d</span> <span m="630070">computation,</span> <span
  m="631780">where d</span> <span m="632090">is</span> <span
  m="632240">the</span> <span m="632970">number</span> <span
  m="633290">of</span> <span m="633380">bits.</span> <span m="634200">And</span>
  <span m="634380">perhaps</span> <span m="634690">even</span> <span
  m="634890">more.</span> <span m="635940">So</span> <span
  m="636160">it's</span> <span m="636340">definitely</span> <span
  m="636650">not</span> <span m="636860">order</span> <span
  m="637060">1.</span></p><p><span m="638850">So</span> <span
  m="640630">as</span> <span m="640790">I</span> <span m="640840">said</span>
  <span m="641030">a</span> <span m="641070">little</span> <span
  m="641200">bit</span> <span m="641320">of</span> <span
  m="642270">context</span> <span m="642810">with</span> <span
  m="642950">respect</span> <span m="643270">to</span> <span
  m="643980">the</span> <span m="644100">things</span> <span
  m="644320">that</span> <span m="644410">are</span> <span m="644560">out</span>
  <span m="644820">there.</span> <span m="645770">At</span> <span
  m="645920">the</span> <span m="645970">end</span> <span m="646150">of</span>
  <span m="646220">the</span> <span m="646280">lecture</span> <span
  m="646750">I'll</span> <span m="646760">give</span> <span
  m="646870">you</span> <span m="646980">a</span> <span m="647030">sense</span>
  <span m="647520">for</span> <span m="647680">how</span> <span
  m="647870">these</span> <span m="648060">hash</span> <span
  m="648270">functions</span> <span m="648670">are</span> <span
  m="648770">built.</span> <span m="649570">We're</span> <span
  m="649790">not</span> <span m="649880">going</span> <span m="650000">to</span>
  <span m="650060">spend</span> <span m="650370">a</span> <span
  m="650420">lot</span> <span m="650640">of</span> <span m="650720">time</span>
  <span m="651380">on</span> <span m="651610">creating</span> <span
  m="652040">these</span> <span m="652210">hash</span> <span
  m="652420">functions.</span> <span m="653220">It's</span> <span
  m="653360">really</span> <span m="653560">a</span> <span
  m="653630">research</span> <span m="654080">topic</span> <span
  m="654650">onto</span> <span m="654930">itself</span> <span
  m="655550">and</span> <span m="655910">not</span> <span
  m="656050">really</span> <span m="656320">in</span> <span
  m="656400">the</span> <span m="656620">slope</span> <span m="656970">of</span>
  <span m="657180">6.046.</span> <span m="658390">What</span> <span
  m="658650">is</span> <span m="658800">in</span> <span m="658890">the</span>
  <span m="658980">scope</span> <span m="659510">of</span> <span
  m="659610">6.046,</span> <span m="660310">and</span> <span
  m="660770">what</span> <span m="660920">I</span> <span m="660980">think</span>
  <span m="661220">is</span> <span m="661340">more</span> <span
  m="661560">interesting,</span> <span m="662370">which</span> <span
  m="662510">is</span> <span m="662610">what</span> <span
  m="662770">we'll</span> <span m="662930">focus</span> <span
  m="663290">our</span> <span m="663960">energy</span> <span
  m="664310">and</span> <span m="664470">time</span> <span m="664800">on,</span>
  <span m="665690">is</span> <span m="666270">the</span> <span
  m="666350">properties</span> <span m="666800">of</span> <span
  m="666880">these</span> <span m="667030">hash</span> <span
  m="667230">functions.</span> <span m="667990">And</span> <span
  m="668150">why</span> <span m="668510">these</span> <span
  m="668720">properties</span> <span m="669130">are</span> <span
  m="669170">useful</span> <span m="670080">in</span> <span m="670370">a</span>
  <span m="670430">bunch</span> <span m="670640">of</span> <span
  m="670700">different</span> <span m="670930">apps.</span></p><p><span
  m="672270">And</span> <span m="672390">so</span> <span m="673200">what</span>
  <span m="673410">is</span> <span m="673540">it</span> <span
  m="673650">that</span> <span m="673780">we</span> <span
  m="674220">want?</span> <span m="675100">We</span> <span
  m="675540">want</span> <span m="676840">a</span> <span
  m="676900">random</span> <span m="677500">oracle.</span> <span
  m="679440">We</span> <span m="679550">want</span> <span m="679780">to</span>
  <span m="681200">essentially</span> <span m="682230">build</span> <span
  m="682740">something</span> <span m="683790">that</span> <span
  m="684550">looks</span> <span m="684860">like</span> <span
  m="685110">that,</span> <span m="686110">deterministic,</span> <span
  m="686640">public,</span> <span m="686990">random.</span> <span
  m="687960">And</span> <span m="688510">we're</span> <span
  m="688680">going</span> <span m="688920">to</span> <span
  m="690340">claim</span> <span m="690690">that</span> <span
  m="690830">what</span> <span m="690990">we</span> <span m="691090">want</span>
  <span m="691390">is</span> <span m="691510">this</span> <span
  m="691640">random</span> <span m="691950">oracle</span> <span
  m="692670">which</span> <span m="692820">has</span> <span m="693020">all
  of</span> <span m="693250">these</span> <span m="693470">wonderful</span>
  <span m="693940">properties</span> <span m="694920">that</span> <span
  m="695060">I'm</span> <span m="695150">going</span> <span m="695260">to</span>
  <span m="695320">describe.</span> <span m="696140">I'm going to</span> <span
  m="696230">describe</span> <span m="696550">the random</span> <span
  m="696850">oracle</span> <span m="697220">to</span> <span
  m="697580">you,</span> <span m="697850">and</span> <span
  m="697960">then</span> <span m="698060">I'm</span> <span
  m="698140">going</span> <span m="698250">to</span> <span
  m="698310">tell</span> <span m="698470">you</span> <span
  m="698540">about</span> <span m="698700">what</span> <span
  m="698840">the</span> <span m="698920">properties</span> <span
  m="699390">are.</span></p><p><span m="700180">And</span> <span
  m="701080">then</span> <span m="701760">unfortunately</span> <span
  m="702880">this</span> <span m="703070">is</span> <span m="703240">an</span>
  <span m="703410">ideal</span> <span m="703840">world</span> <span
  m="704420">and</span> <span m="704710">we</span> <span m="704860">can't</span>
  <span m="705090">build</span> <span m="705340">this</span> <span
  m="706270">in</span> <span m="706480">the</span> <span m="706540">real</span>
  <span m="706730">world.</span> <span m="707890">And</span> <span
  m="708090">so</span> <span m="708540">we're</span> <span
  m="708620">going</span> <span m="708730">to</span> <span m="708770">have
  to</span> <span m="708910">approximate</span> <span m="709245">it.</span>
  <span m="709990">And</span> <span m="710150">that's</span> <span
  m="710320">where</span> <span m="710460">the</span> <span
  m="710610">MD4's</span> <span m="710840">and</span> <span
  m="711110">the</span> <span m="711445">MD5's</span> <span
  m="711780">and</span> <span m="711860">the</span> <span
  m="711950">SHA-1's</span> <span m="712200">came</span> <span
  m="712460">in,</span> <span m="713400">OK?</span> <span m="715200">So</span>
  <span m="715460">this</span> <span m="715620">is</span> <span
  m="715740">not</span> <span m="715930">achievable</span> <span
  m="716450">in</span> <span m="716540">practice.</span></p><p><span
  m="725560">So</span> <span m="726690">what</span> <span m="726880">is</span>
  <span m="727040">this</span> <span m="727200">oracle?</span> <span
  m="729300">This</span> <span m="729490">oracle</span> <span
  m="730010">is</span> <span m="730840">on</span> <span m="731000">input</span>
  <span m="732960">x,</span> <span m="733470">belonging</span> <span
  m="734080">to</span> <span m="734580">0,1</span> <span m="736120">star.</span>
  <span m="737170">So</span> <span m="737390">that</span> <span
  m="737700">could</span> <span m="737820">be</span> <span m="737910">an</span>
  <span m="737980">arbitrary</span> <span m="739680">string.</span> <span
  m="740740">If</span> <span m="740860">x</span> <span m="742250">not</span>
  <span m="742600">in</span> <span m="742730">the</span> <span
  m="742800">book--</span> <span m="743480">so</span> <span
  m="743630">there's</span> <span m="744500">this the</span> <span
  m="744850">book,</span> <span m="746100">all</span> <span
  m="746160">right?</span> <span m="746840">And</span> <span
  m="747060">there's</span> <span m="747440">this</span> <span
  m="747820">infinite</span> <span m="748290">capacity</span> <span
  m="748870">book</span> <span m="749720">that</span> <span
  m="750150">has</span> <span m="751210">all</span> <span m="751500">of</span>
  <span m="751580">the</span> <span m="751660">computations</span> <span
  m="752380">that</span> <span m="752460">were</span> <span
  m="752690">ever</span> <span m="753070">done</span> <span
  m="754050">prior.</span> <span m="755170">And</span> <span
  m="755350">they're</span> <span m="755490">always</span> <span
  m="755780">stored</span> <span m="756080">in</span> <span
  m="756140">the</span> <span m="756220">book.</span></p><p><span
  m="756770">And</span> <span m="756900">that's</span> <span
  m="757070">how</span> <span m="757190">we're</span> <span
  m="757290">going</span> <span m="757400">to</span> <span m="757440">get</span>
  <span m="757630">determinism.</span> <span m="758770">Because</span> <span
  m="759110">this</span> <span m="759340">book</span> <span
  m="760150">initially</span> <span m="760730">gets</span> <span
  m="761100">filled</span> <span m="761360">in.</span> <span
  m="762100">All</span> <span m="762320">of</span> <span m="762400">the</span>
  <span m="762480">entries</span> <span m="762900">in</span> <span
  m="763020">the</span> <span m="763120">book</span> <span m="763900">are</span>
  <span m="764050">filled</span> <span m="764380">in</span> <span
  m="764550">using</span> <span m="764880">pure</span> <span
  m="765240">randomness.</span> <span m="767000">So</span> <span
  m="767270">you</span> <span m="767410">flip</span> <span m="767630">a</span>
  <span m="767710">coin</span> <span m="768060">d</span> <span
  m="768290">times</span> <span m="770160">to</span> <span
  m="770260">determine</span> <span m="773310">h</span> <span
  m="773520">of</span> <span m="773630">x.</span></p><p><span
  m="775610">So</span> <span m="776190">that's</span> <span
  m="776390">basically</span> <span m="776760">it.</span> <span
  m="777760">And</span> <span m="778590">you</span> <span m="778690">just</span>
  <span m="778850">keep</span> <span m="779070">flipping.</span> <span
  m="779420">You</span> <span m="779530">have</span> <span m="779650">to</span>
  <span m="779760">flip</span> <span m="780010">d</span> <span
  m="780180">times.</span> <span m="780950">And</span> <span
  m="781110">so</span> <span m="781300">if</span> <span m="781450">x</span>
  <span m="781720">was</span> <span m="782250">0,</span> <span
  m="782980">you</span> <span m="783150">flip</span> <span m="783430">d</span>
  <span m="783660">times,</span> <span m="784130">d</span> <span
  m="784270">was</span> <span m="784400">160.</span> <span m="785320">You</span>
  <span m="785450">flipped</span> <span m="785650">a</span> <span
  m="785740">coin</span> <span m="785990">160</span> <span
  m="786560">times</span> <span m="787200">and</span> <span
  m="787330">got</span> <span m="787470">a</span> <span
  m="787520">string.</span> <span m="788300">If</span> <span m="788370">x</span>
  <span m="788560">were</span> <span m="789030">1,</span> <span
  m="789740">flip</span> <span m="790430">160</span> <span
  m="790960">times,</span> <span m="791460">you</span> <span
  m="791730">get</span> <span m="791830">a</span> <span
  m="791870">different</span> <span m="792130">string</span> <span
  m="793430">with</span> <span m="793630">very</span> <span
  m="793820">high</span> <span m="793940">probability,</span> <span
  m="794510">obviously.</span> <span m="795530">And</span> <span
  m="795760">so</span> <span m="795890">on</span> <span m="796000">and</span>
  <span m="796090">so</span> <span m="796220">forth.</span></p><p><span
  m="796890">But</span> <span m="797020">what</span> <span m="797170">you</span>
  <span m="797250">do</span> <span m="797450">is</span> <span
  m="797600">you</span> <span m="797710">have</span> <span
  m="797860">this</span> <span m="798020">book.</span> <span
  m="799280">So</span> <span m="800480">you're</span> <span
  m="800790">going</span> <span m="801090">to</span> <span
  m="801950">record</span> <span m="803830">x</span> <span m="804736">h</span>
  <span m="805190">of</span> <span m="805320">x</span> <span
  m="806740">in</span> <span m="806920">the</span> <span m="807000">book,</span>
  <span m="809010">OK?</span> <span m="809870">So</span> <span
  m="810050">at</span> <span m="810160">some</span> <span
  m="810350">level</span> <span m="810630">your</span> <span
  m="810700">hash</span> <span m="811010">function</span> <span
  m="811770">is</span> <span m="811930">this</span> <span
  m="812320">giant</span> <span m="812760">look-up</span> <span
  m="813100">table</span> <span m="813400">in</span> <span m="813490">the</span>
  <span m="813580">sky,</span> <span m="814620">right?</span> <span
  m="815220">Actually</span> <span m="815450">not</span> <span
  m="815640">giant,</span> <span m="816080">infinite</span> <span
  m="816460">capacity</span> <span m="816940">look-up</span> <span
  m="817210">table</span> <span m="817480">in</span> <span m="817550">the</span>
  <span m="817640">sky.</span> <span m="818510">Because</span> <span
  m="819460">you</span> <span m="819610">can</span> <span m="819740">put</span>
  <span m="819880">arbitrary</span> <span m="820340">strings</span> <span
  m="820760">into</span> <span m="820940">this.</span></p><p><span
  m="822230">And</span> <span m="823910">if</span> <span m="824140">it's</span>
  <span m="824320">in</span> <span m="824460">the</span> <span
  m="824570">book--</span> <span m="825920">this is</span> <span
  m="826200">obviously</span> <span m="827100">the</span> <span
  m="827170">important</span> <span m="827590">part</span> <span
  m="827910">that</span> <span m="828060">gives</span> <span
  m="828230">you</span> <span m="828370">determinism--</span> <span
  m="829890">then you</span> <span m="830130">return</span> <span
  m="830500">y,</span> <span m="832740">where</span> <span m="834200">x</span>
  <span m="834570">and</span> <span m="834740">y</span> <span
  m="835960">are</span> <span m="836100">in</span> <span m="836250">the</span>
  <span m="836350">book,</span> <span m="838400">OK?</span> <span
  m="841350">So</span> <span m="841730">you</span> <span m="841870">get</span>
  <span m="842040">a</span> <span m="842090">random</span> <span
  m="842530">answer</span> <span m="843130">every</span> <span
  m="843480">time,</span> <span m="845040">except</span> <span
  m="846060">as</span> <span m="846320">required</span> <span
  m="847440">for</span> <span m="847670">consistency</span> <span
  m="848380">with</span> <span m="848500">previous</span> <span
  m="848850">answers.</span> <span m="850180">So</span> <span
  m="850290">the</span> <span m="850380">very</span> <span
  m="850590">first</span> <span m="850880">time</span> <span
  m="851120">you</span> <span m="851250">see</span> <span m="851430">a</span>
  <span m="851480">string,</span> <span m="851930">or--</span> <span
  m="852890">and</span> <span m="853410">the</span> <span
  m="853760">whole</span> <span m="854050">world</span> <span
  m="854950">can</span> <span m="855310">create</span> <span
  m="855620">this</span> <span m="855840">book.</span> <span
  m="856730">It's</span> <span m="856920">public.</span></p><p><span
  m="857740">So</span> <span m="858150">if</span> <span m="858340">I</span>
  <span m="858570">created</span> <span m="858860">the</span> <span
  m="858930">book</span> <span m="859820">at</span> <span
  m="860000">first</span> <span m="860740">with</span> <span m="860950">a</span>
  <span m="861000">particular</span> <span m="861340">string,</span> <span
  m="862430">let's</span> <span m="862670">say</span> <span
  m="862800">Eric.</span> <span m="863710">I</span> <span m="863840">was</span>
  <span m="864060">the</span> <span m="864130">string.</span> <span
  m="865120">And</span> <span m="866300">I'm</span> <span m="866570">the</span>
  <span m="866670">one</span> <span m="866900">who</span> <span
  m="867040">put</span> <span m="867330">the</span> <span
  m="867430">entry--</span> <span m="868600">x</span> <span
  m="868850">equals</span> <span m="869190">Eric,</span> <span
  m="869960">and</span> <span m="870190">h</span> <span m="870410">of</span>
  <span m="870550">x,</span> <span m="870650">h</span> <span m="871130">of
  Eric</span> <span m="871610">equals</span> <span m="871950">some</span> <span
  m="872350">random</span> <span m="872740">160-bit</span> <span
  m="873440">string--</span> <span m="874040">into</span> <span
  m="874280">the</span> <span m="874380">book,</span> <span m="874860">I</span>
  <span m="875010">get</span> <span m="875200">credit</span> <span
  m="875500">for</span> <span m="875610">that,</span> <span
  m="876280">right?</span> <span m="876640">But</span> <span
  m="877530">if</span> <span m="877770">you</span> <span m="878460">come</span>
  <span m="879030">a</span> <span m="879220">nanosecond</span> <span
  m="879780">later</span> <span m="881030">and</span> <span
  m="882040">ask</span> <span m="882360">for</span> <span m="882660">h</span>
  <span m="882880">of</span> <span m="883155">Eric,</span> <span
  m="883650">you</span> <span m="883780">should</span> <span
  m="883960">get</span> <span m="884060">exactly</span> <span
  m="884480">what</span> <span m="884710">got</span> <span m="884900">put</span>
  <span m="885050">into</span> <span m="885170">the</span> <span
  m="885250">book</span> <span m="886090">when</span> <span m="887430">I</span>
  <span m="887590">asked</span> <span m="887860">for</span> <span
  m="888410">h</span> <span m="888610">of</span> <span m="889060">Eric.</span>
  <span m="889850">And</span> <span m="890000">so</span> <span
  m="890140">on</span> <span m="890300">and</span> <span m="890400">so</span>
  <span m="890450">forth.</span></p><p><span m="891290">So</span> <span
  m="891830">this</span> <span m="892010">is</span> <span m="892140">true</span>
  <span m="892300">for</span> <span m="892450">everybody.</span> <span
  m="893050">So</span> <span m="893250">this</span> <span m="893450">is</span>
  <span m="893590">like--</span> <span m="894390">I</span> <span
  m="894620">mean</span> <span m="895060">basically</span> <span
  m="895520">impossible</span> <span m="896130">to</span> <span
  m="896220">get.</span> <span m="896810">Because</span> <span
  m="898000">not</span> <span m="898260">only</span> <span m="898730">can</span>
  <span m="899050">anybody</span> <span m="899640">and</span> <span
  m="900030">everybody</span> <span m="901050">query,</span> <span
  m="901770">you</span> <span m="901890">have</span> <span m="902030">to</span>
  <span m="902140">have</span> <span m="902390">this</span> <span
  m="903320">ordering</span> <span m="904550">associated</span> <span
  m="905190">with</span> <span m="906410">people</span> <span
  m="908390">querying</span> <span m="908680">the</span> <span
  m="908760">book.</span> <span m="909450">And</span> <span
  m="909730">you</span> <span m="909810">have</span> <span m="909920">to
  have</span> <span m="910060">consistency.</span> <span m="911330">All</span>
  <span m="911410">right.</span> <span m="911990">So</span> <span
  m="912260">everyone</span> <span m="912540">convinced</span> <span
  m="912920">that</span> <span m="913040">we</span> <span
  m="913150">can't</span> <span m="914100">build</span> <span
  m="914350">this?</span> <span m="915990">All</span> <span
  m="916100">right.</span></p><p><span m="916710">If</span> <span
  m="916840">you</span> <span m="916940">took</span> <span
  m="917160">anything</span> <span m="917480">out</span> <span
  m="917590">of</span> <span m="917640">this</span> <span
  m="917800">lecture,</span> <span m="918660">that's</span> <span
  m="918910">what</span> <span m="919060">you</span> <span
  m="919130">should</span> <span m="919320">take.</span> <span
  m="920050">No,</span> <span m="920270">no.</span> <span m="920510">There's
  a</span> <span m="920670">lot</span> <span m="920860">more.</span></p><p><span
  m="922290">So</span> <span m="923110">we</span> <span m="923250">want</span>
  <span m="923370">to</span> <span m="923410">approximate</span> <span
  m="923715">the</span> <span m="924020">random</span> <span
  m="924350">oracle.</span> <span m="926750">And we're</span> <span
  m="926810">going</span> <span m="926910">to</span> <span m="926950">get</span>
  <span m="927110">to</span> <span m="927170">that.</span> <span
  m="928840">Obviously</span> <span m="930730">we're</span> <span
  m="930880">going</span> <span m="931010">to</span> <span
  m="931050">have</span> <span m="931220">to</span> <span m="931330">do</span>
  <span m="931460">this</span> <span m="931730">in</span> <span
  m="933110">poly-space</span> <span m="933990">as</span> <span
  m="934110">well.</span></p><p><span m="934860">So</span> <span
  m="934960">what's</span> <span m="935150">wrong</span> <span
  m="935420">with</span> <span m="935570">this?</span> <span
  m="935850">Of</span> <span m="935940">course</span> <span
  m="936220">this</span> <span m="936410">picture</span> <span
  m="937240">is</span> <span m="937490">I didn't</span> <span
  m="937680">actually</span> <span m="937950">say</span> <span
  m="938160">this,</span> <span m="938810">but</span> <span
  m="939300">you'd</span> <span m="939460">like</span> <span
  m="939660">things</span> <span m="939860">to</span> <span m="939940">be</span>
  <span m="940360">poly-time</span> <span m="940970">in</span> <span
  m="941060">terms</span> <span m="941290">of</span> <span
  m="941360">space.</span> <span m="942320">You</span> <span
  m="942350">don't</span> <span m="942470">want</span> <span
  m="942570">to</span> <span m="942660">store</span> <span m="944480">an</span>
  <span m="944620">infinite</span> <span m="945000">number--</span> <span
  m="946090">this</span> <span m="946210">is</span> <span
  m="946400">worse</span> <span m="946620">than</span> <span
  m="946810">poly-time,</span> <span m="947070">worse</span> <span
  m="947300">than</span> <span m="947550">exponential</span> <span
  m="948030">time,</span> <span m="949080">because</span> <span
  m="949300">it's</span> <span m="949430">arbitrary</span> <span
  m="949860">strings</span> <span m="950220">that we're</span> <span
  m="950330">talking</span> <span m="950570">about</span> <span
  m="950770">here,</span> <span m="951190">right?</span> <span
  m="951920">So</span> <span m="952500">you</span> <span m="952700">can't</span>
  <span m="952890">possibly</span> <span m="953250">do</span> <span
  m="953360">that.</span> <span m="953940">So</span> <span m="954140">we</span>
  <span m="954260">have</span> <span m="954400">to</span> <span
  m="954470">do</span> <span m="954590">something</span> <span
  m="955210">better.</span></p><p><span m="956350">But</span> <span
  m="956990">before</span> <span m="957320">I</span> <span m="957370">get</span>
  <span m="957530">into</span> <span m="958030">how</span> <span
  m="958340">we'd</span> <span m="958510">actually</span> <span
  m="958790">build</span> <span m="959050">this,</span> <span
  m="959910">and</span> <span m="960070">give</span> <span m="960180">you</span>
  <span m="960300">a</span> <span m="960350">sense</span> <span
  m="960730">of</span> <span m="960880">how</span> <span m="962190">SHA-1</span>
  <span m="963070">and</span> <span m="963200">MD5</span> <span
  m="963470">were</span> <span m="963940">built--</span> <span
  m="964600">and</span> <span m="964720">that's</span> <span
  m="964880">going</span> <span m="964990">to</span> <span
  m="965030">come</span> <span m="965230">a</span> <span
  m="965280">little</span> <span m="965410">bit</span> <span
  m="965530">later--</span> <span m="966220">I</span> <span
  m="966300">want</span> <span m="966430">to</span> <span
  m="966470">spend</span> <span m="968940">a</span> <span m="969050">lot</span>
  <span m="969260">of</span> <span m="969340">time</span> <span
  m="970170">on</span> <span m="970400">the</span> <span m="970790">what</span>
  <span m="970990">is</span> <span m="971090">interesting,</span> <span
  m="971910">which</span> <span m="972030">are</span> <span
  m="972110">the</span> <span m="972210">desirable</span> <span
  m="972670">properties.</span> <span m="973630">Which</span> <span
  m="973780">you</span> <span m="973860">can</span> <span m="974000">kind
  of</span> <span m="974290">see</span> <span m="975280">using</span> <span
  m="975480">the</span> <span m="975550">random</span> <span
  m="975870">oracle.</span> <span m="976640">So</span> <span m="977320">what
  is</span> <span m="977610">cool</span> <span m="977800">about</span> <span
  m="977970">the</span> <span m="978020">random</span> <span
  m="978190">oracle</span> <span m="978690">is</span> <span
  m="978810">that</span> <span m="979340">it's</span> <span m="979510">a</span>
  <span m="979570">simple</span> <span m="979990">algorithm.</span> <span
  m="981140">You</span> <span m="981320">can</span> <span
  m="981470">understand</span> <span m="982000">it.</span> <span
  m="983060">You</span> <span m="983180">can't</span> <span
  m="983400">implement</span> <span m="983820">it.</span> <span
  m="984410">But</span> <span m="984610">now</span> <span m="984780">you</span>
  <span m="984920">can</span> <span m="985020">see</span> <span
  m="985390">what</span> <span m="986170">wonderful</span> <span
  m="986580">properties</span> <span m="987130">it</span> <span
  m="987270">gives</span> <span m="987530">you.</span> <span
  m="988230">And</span> <span m="988610">these</span> <span
  m="988810">properties</span> <span m="989510">are</span> <span
  m="989640">going</span> <span m="989720">to</span> <span m="989760">be</span>
  <span m="989840">important</span> <span m="990350">for</span> <span
  m="990510">our</span> <span m="990660">applications,</span> <span
  m="991830">OK?</span></p><p><span m="992490">And</span> <span
  m="992650">so</span> <span m="992750">let's</span> <span m="992950">get</span>
  <span m="993090">started</span> <span m="993960">with</span> <span
  m="994400">a</span> <span m="994510">bunch</span> <span m="994820">of</span>
  <span m="994880">different</span> <span m="995160">properties.</span> <span
  m="996260">And</span> <span m="996450">these</span> <span
  m="996620">are</span> <span m="996660">all</span> <span
  m="996910">properties</span> <span m="997400">that</span> <span
  m="997520">are</span> <span m="997590">going</span> <span m="997730">to</span>
  <span m="997780">be</span> <span m="997920">useful</span> <span
  m="999280">for</span> <span m="1001690">verification</span> <span
  m="1002520">or</span> <span m="1002650">computer</span> <span
  m="1003030">security</span> <span m="1003530">applications.</span> <span
  m="1004850">The</span> <span m="1005310">first</span> <span
  m="1005600">one,</span> <span m="1006490">it's</span> <span
  m="1006800">not</span> <span m="1007060">ow,</span> <span
  m="1007830">it's</span> <span m="1008200">O, W.</span> <span
  m="1009590">It's</span> <span m="1010120">one-wayness,</span> <span
  m="1011100">all</span> <span m="1011590">right?</span> <span
  m="1011780">So</span> <span m="1011920">one-way,</span> <span
  m="1012420">or</span> <span m="1012510">one-wayness.</span> <span
  m="1013930">And</span> <span m="1018470">it's</span> <span
  m="1018700">also</span> <span m="1018960">called--</span> <span
  m="1019840">you're</span> <span m="1019990">not</span> <span m="1020040">going
  to call</span> <span m="1020520">it this--</span> <span m="1023230">but</span>
  <span m="1023680">perhaps</span> <span m="1024130">this</span> <span
  m="1024380">is</span> <span m="1024560">a</span> <span m="1027140">more</span>
  <span m="1027480">technical</span> <span m="1027940">term,</span> <span
  m="1028450">a</span> <span m="1028770">more</span> <span
  m="1028960">precise</span> <span m="1029390">term,</span> <span
  m="1029829">pre-image</span> <span m="1030440">resistance.</span></p><p><span
  m="1031150">And</span> <span m="1031290">so</span> <span
  m="1031430">what</span> <span m="1031550">does</span> <span
  m="1031670">this</span> <span m="1031839">mean?</span> <span
  m="1033060">Well</span> <span m="1033380">this</span> <span
  m="1033800">is</span> <span m="1033859">a</span> <span m="1033910">very</span>
  <span m="1034369">strong</span> <span m="1034819">requirement.</span> <span
  m="1035650">I</span> <span m="1035720">mean a</span> <span m="1035760">couple
  of</span> <span m="1036050">other</span> <span m="1036180">ones</span> <span
  m="1036420">are</span> <span m="1036510">also</span> <span
  m="1036750">going</span> <span m="1036880">to</span> <span
  m="1036920">be</span> <span m="1037700">perhaps</span> <span
  m="1037980">stronger.</span> <span m="1038990">But</span> <span
  m="1039220">this is</span> <span m="1039420">a</span> <span
  m="1039530">pretty</span> <span m="1039780">strong</span> <span
  m="1040099">requirement</span> <span m="1041270">which</span> <span
  m="1041440">says</span> <span m="1041599">it's</span> <span
  m="1041960">infeasible,</span> <span m="1044359">given</span> <span
  m="1045440">y,</span> <span m="1048710">which</span> <span
  m="1049260">is</span> <span m="1050610">in</span> <span
  m="1050830">the--</span> <span m="1053630">it's</span> <span
  m="1053870">basically</span> <span m="1054160">a d-bit</span> <span
  m="1054550">vector,</span> <span m="1056930">to</span> <span
  m="1057830">find</span> <span m="1061480">any</span> <span
  m="1061850">x</span> <span m="1065170">such</span> <span
  m="1065450">that</span> <span m="1066780">h</span> <span m="1067010">of</span>
  <span m="1067120">x</span> <span m="1068200">equals</span> <span
  m="1068580">y.</span> <span m="1070950">And</span> <span m="1071220">so</span>
  <span m="1071310">this</span> <span m="1071590">is</span> <span
  m="1072380">x</span> <span m="1072780">is</span> <span m="1073030">the</span>
  <span m="1073170">pre-image</span> <span m="1077605">of</span> <span
  m="1078060">y.</span></p><p><span m="1080120">So</span> <span
  m="1080540">what</span> <span m="1080690">does</span> <span
  m="1080820">this</span> <span m="1080920">say?</span> <span
  m="1081580">It</span> <span m="1081610">says</span> <span
  m="1081850">that</span> <span m="1081980">I</span> <span
  m="1082030">want</span> <span m="1082180">to</span> <span
  m="1082270">create</span> <span m="1082660">a</span> <span
  m="1082700">hash</span> <span m="1082970">function</span> <span
  m="1084030">such</span> <span m="1084400">that</span> <span
  m="1085770">if</span> <span m="1085970">I</span> <span m="1086040">give</span>
  <span m="1086380">you</span> <span m="1086590">a</span> <span
  m="1086650">specific--</span> <span m="1087820">we call it a</span> <span
  m="1088240">160-bit</span> <span m="1089330">string,</span> <span
  m="1090370">because</span> <span m="1090660">we're</span> <span
  m="1090760">talking</span> <span m="1091030">SHA-1</span> <span
  m="1091500">here,</span> <span m="1092870">and</span> <span
  m="1093060">that's</span> <span m="1093290">the</span> <span
  m="1093360">hash--</span> <span m="1096010">I'm</span> <span
  m="1096230">going</span> <span m="1096450">to</span> <span
  m="1096500">have,</span> <span m="1096840">it's</span> <span
  m="1097040">going</span> <span m="1097220">to</span> <span
  m="1097260">have</span> <span m="1097430">to</span> <span
  m="1097510">be</span> <span m="1097710">impossible</span> <span
  m="1098250">for</span> <span m="1098420">me</span> <span m="1099500">to</span>
  <span m="1100420">discover</span> <span m="1102130">an</span> <span
  m="1102350">x</span> <span m="1103040">that</span> <span
  m="1103180">produced</span> <span m="1103435">that</span> <span
  m="1103690">160-bit</span> <span m="1104280">string,</span> <span
  m="1105430">OK?</span> <span m="1106390">Now if</span> <span m="1106580">you
  go</span> <span m="1106700">look</span> <span m="1106950">at our</span> <span
  m="1107140">random</span> <span m="1107470">oracle,</span> <span
  m="1109100">you</span> <span m="1109250">realize</span> <span
  m="1109830">that</span> <span m="1109960">if</span> <span
  m="1110030">you</span> <span m="1110120">had a</span> <span
  m="1110510">160-bit</span> <span m="1111360">string,</span> <span
  m="1112750">and</span> <span m="1113920">perhaps</span> <span
  m="1114690">you</span> <span m="1115980">have</span> <span
  m="1116170">the</span> <span m="1116250">entire</span> <span
  m="1116620">book</span> <span m="1116970">and</span> <span
  m="1117070">you</span> <span m="1117150">can</span> <span
  m="1117330">read</span> <span m="1117580">the</span> <span
  m="1117650">entire</span> <span m="1117970">book.</span></p><p><span
  m="1119290">It's</span> <span m="1119550">an</span> <span
  m="1119960">infinite</span> <span m="1120370">capacity</span> <span
  m="1120880">book.</span> <span m="1121940">It's</span> <span
  m="1122120">got</span> <span m="1123170">a</span> <span
  m="1123320">bunch</span> <span m="1123570">of</span> <span
  m="1123650">stuff</span> <span m="1123920">in</span> <span
  m="1124060">it.</span> <span m="1124750">And</span> <span
  m="1125420">know</span> <span m="1125760">that</span> <span
  m="1126580">any</span> <span m="1126830">time</span> <span
  m="1127500">anyone</span> <span m="1127890">queried</span> <span
  m="1128280">the</span> <span m="1128380">book</span> <span
  m="1128860">the</span> <span m="1129010">first</span> <span
  m="1129460">time</span> <span m="1129800">for</span> <span
  m="1130120">a</span> <span m="1130200">given</span> <span
  m="1130630">x,</span> <span m="1131120">that</span> <span
  m="1131410">there</span> <span m="1131670">was</span> <span
  m="1131760">this</span> <span m="1131930">random</span> <span
  m="1132390">160-bit</span> <span m="1133080">number</span> <span
  m="1133410">that</span> <span m="1133580">was</span> <span
  m="1133710">generated</span> <span m="1134160">and</span> <span
  m="1134280">put</span> <span m="1134450">into</span> <span
  m="1134600">the</span> <span m="1134710">book.</span> <span
  m="1135700">And</span> <span m="1135810">there's</span> <span
  m="1135950">a</span> <span m="1136000">whole</span> <span
  m="1136250">lot</span> <span m="1136420">of</span> <span
  m="1136490">these</span> <span m="1136710">numbers,</span> <span
  m="1137370">right?</span></p><p><span m="1138100">So</span> <span
  m="1138990">what's</span> <span m="1139180">going</span> <span
  m="1139280">to</span> <span m="1139330">happen</span> <span
  m="1139740">is,</span> <span m="1140240">you're</span> <span m="1140410">going
  to have</span> <span m="1140610">to</span> <span m="1140710">look</span> <span
  m="1140930">through</span> <span m="1141100">the</span> <span
  m="1141190">entire</span> <span m="1141560">book,</span> <span
  m="1141870">this</span> <span m="1142030">entire</span> <span
  m="1142520">potentially</span> <span m="1143100">infinite</span> <span
  m="1143440">capacity</span> <span m="1143910">book,</span> <span
  m="1144710">in</span> <span m="1144880">order</span> <span
  m="1145080">to</span> <span m="1145210">figure</span> <span
  m="1145580">out</span> <span m="1146310">if</span> <span
  m="1147670">this</span> <span m="1148060">particular</span> <span
  m="1149590">y</span> <span m="1152720">is</span> <span m="1153070">in</span>
  <span m="1153220">the</span> <span m="1153310">book</span> <span
  m="1153500">or</span> <span m="1153580">not.</span> <span
  m="1154660">And</span> <span m="1154790">that's</span> <span
  m="1154950">going</span> <span m="1155070">to</span> <span
  m="1155130">take</span> <span m="1155340">a</span> <span
  m="1155410">long</span> <span m="1155900">time</span> <span
  m="1156150">to</span> <span m="1156260">do,</span> <span
  m="1156620">potentially,</span> <span m="1157670">OK?</span> <span
  m="1158310">So</span> <span m="1159980">in</span> <span m="1160140">the</span>
  <span m="1160240">case</span> <span m="1160740">where</span> <span
  m="1161010">you</span> <span m="1161120">have</span> <span
  m="1161310">a</span> <span m="1161360">random</span> <span
  m="1161670">oracle</span> <span m="1163070">you'd</span> <span
  m="1163290">have</span> <span m="1163460">to</span> <span
  m="1163560">go</span> <span m="1163750">through</span> <span
  m="1164100">and</span> <span m="1165040">find--</span> <span
  m="1166350">looking</span> <span m="1166630">at</span> <span
  m="1166740">the</span> <span m="1166880">output</span> <span
  m="1167220">hash</span> <span m="1167660">corresponding</span> <span
  m="1168150">to</span> <span m="1168450">each</span> <span
  m="1168670">of</span> <span m="1168750">the</span> <span
  m="1168820">entries</span> <span m="1169260">in</span> <span
  m="1169330">the</span> <span m="1169390">random</span> <span
  m="1169940">oracle,</span> <span m="1170580">you're going to</span> <span
  m="1170790">start</span> <span m="1171050">matching,</span> <span
  m="1171390">match,</span> <span m="1171810">match,</span> <span
  m="1172230">match,</span> <span m="1172650">match,</span> <span
  m="1172960">it's</span> <span m="1173130">going</span> <span
  m="1173250">to</span> <span m="1173310">take</span> <span
  m="1173480">you</span> <span m="1174170">exponential</span> <span
  m="1174670">time.</span> <span m="1175290">Well</span> <span
  m="1175430">actually</span> <span m="1175630">worse</span> <span
  m="1175840">than</span> <span m="1175930">that,</span> <span
  m="1176340">given</span> <span m="1176620">the</span> <span
  m="1177020">infinite</span> <span m="1177360">capacity</span> <span
  m="1177760">of</span> <span m="1177850">the</span> <span
  m="1177920">book.</span></p><p><span m="1178930">So</span> <span
  m="1179280">this</span> <span m="1179590">clearly</span> <span
  m="1179920">gives</span> <span m="1180120">you</span> <span
  m="1180260">that.</span> <span m="1180970">Now</span> <span
  m="1181510">you</span> <span m="1181700">may</span> <span
  m="1181780">not</span> <span m="1181960">be</span> <span m="1182370">a</span>
  <span m="1182650">completely</span> <span m="1182960">satisfied</span> <span
  m="1183280">with</span> <span m="1183600">that</span> <span
  m="1183710">answer</span> <span m="1184070">because</span> <span
  m="1184280">you</span> <span m="1184380">say</span> <span
  m="1185090">well,</span> <span m="1185280">you</span> <span
  m="1185400">can't</span> <span m="1185590">implement</span> <span
  m="1185950">that.</span> <span m="1186620">But</span> <span
  m="1186700">we'll</span> <span m="1186860">talk</span> <span
  m="1187060">a</span> <span m="1187110">little</span> <span
  m="1187300">bit,</span> <span m="1187480">as</span> <span m="1187620">I</span>
  <span m="1187690">said,</span> <span m="1188410">about</span> <span
  m="1188800">how</span> <span m="1188980">you</span> <span
  m="1189130">could</span> <span m="1189230">actually</span> <span
  m="1189490">get</span> <span m="1189690">this.</span> <span
  m="1190410">But</span> <span m="1190620">what's--</span> <span
  m="1191290">I</span> <span m="1191390">should</span> <span
  m="1191580">be</span> <span m="1191690">clear--</span> <span
  m="1192610">is</span> <span m="1192820">that</span> <span
  m="1193060">the</span> <span m="1193150">simple</span> <span
  m="1194230">hash</span> <span m="1194510">functions</span> <span
  m="1196140">that</span> <span m="1196370">we've</span> <span
  m="1196760">looked</span> <span m="1197050">at</span> <span
  m="1197700">in</span> <span m="1197860">the</span> <span
  m="1197960">past</span> <span m="1198680">just</span> <span
  m="1198910">to</span> <span m="1198950">build</span> <span
  m="1199180">dictionaries</span> <span m="1200180">do</span> <span
  m="1200330">not</span> <span m="1200670">satisfy</span> <span
  m="1201130">this,</span> <span m="1201950">right?</span></p><p><span
  m="1202570">So</span> <span m="1203380">suppose</span> <span
  m="1204550">I</span> <span m="1204720">had</span> <span m="1206110">h</span>
  <span m="1206360">of</span> <span m="1206490">x</span> <span
  m="1207510">equals</span> <span m="1208640">x</span> <span
  m="1208890">square</span> <span m="1210420">mod</span> <span
  m="1210790">p.</span> <span m="1211860">Is</span> <span m="1212200">this
  one-way,</span> <span m="1214940">given</span> <span m="1215180">a</span>
  <span m="1215240">public</span> <span m="1215630">p?</span> <span
  m="1218050">No</span> <span m="1218310">of</span> <span
  m="1218430">course</span> <span m="1218620">not,</span> <span
  m="1218870">right?</span> <span m="1219210">Because</span> <span
  m="1219920">I'm</span> <span m="1220250">going</span> <span
  m="1220370">to</span> <span m="1220410">be--</span> <span
  m="1221580">it's</span> <span m="1221800">going to be</span> <span
  m="1221950">easy</span> <span m="1222310">for</span> <span
  m="1222460">me</span> <span m="1223290">to</span> <span m="1223860">do</span>
  <span m="1224120">something.</span> <span m="1224730">Even</span> <span
  m="1225050">though</span> <span m="1225210">this</span> <span
  m="1225380">is</span> <span m="1225520">discrete</span> <span
  m="1226350">arithmetic</span> <span m="1228130">I</span> <span
  m="1228290">could</span> <span m="1228490">do</span> <span
  m="1228920">something</span> <span m="1229320">like,</span> <span
  m="1230180">well,</span> <span m="1230430">I</span> <span
  m="1230530">know</span> <span m="1230760">that</span> <span
  m="1231960">what</span> <span m="1232170">I</span> <span
  m="1232250">have</span> <span m="1232460">here--</span> <span
  m="1232740">actually</span> <span m="1233030">let's</span> <span
  m="1233180">do it with</span> <span m="1233400">something</span> <span
  m="1233670">that's</span> <span m="1233840">simpler,</span> <span
  m="1234170">and</span> <span m="1234480">then</span> <span
  m="1234650">I'll</span> <span m="1234740">talk</span> <span
  m="1234920">about</span> <span m="1235060">the</span> <span
  m="1235130">x</span> <span m="1235280">squared.</span></p><p><span
  m="1236580">If</span> <span m="1236700">I</span> <span m="1236770">had</span>
  <span m="1236920">something</span> <span m="1237200">as</span> <span
  m="1237340">simple</span> <span m="1237650">as</span> <span
  m="1237760">x</span> <span m="1237970">mod</span> <span m="1238310">p,</span>
  <span m="1238650">I</span> <span m="1238890">mean</span> <span
  m="1239380">that's</span> <span m="1239840">trivially</span> <span
  m="1240160">broken</span> <span m="1240590">in</span> <span
  m="1240690">terms</span> <span m="1240940">of</span> <span
  m="1241040">one-wayness.</span> <span m="1242100">Because</span> <span
  m="1242510">I</span> <span m="1242600">know</span> <span
  m="1242830">that</span> <span m="1243240">h</span> <span m="1243460">of</span>
  <span m="1243620">x</span> <span m="1244370">could</span> <span
  m="1244580">be</span> <span m="1244690">viewed</span> <span
  m="1244980">as</span> <span m="1245090">the</span> <span
  m="1245170">remainder.</span> <span m="1245900">So</span> <span
  m="1246720">anything--</span> <span m="1248776">if</span> <span
  m="1249220">this</span> <span m="1249570">is</span> <span m="1250440">h</span>
  <span m="1250650">of</span> <span m="1250780">x,</span> <span
  m="1251540">and</span> <span m="1251750">let's</span> <span
  m="1251870">just</span> <span m="1252010">call</span> <span
  m="1252200">that</span> <span m="1252710">y</span> <span
  m="1253070">for</span> <span m="1253470">a</span> <span
  m="1253580">second,</span> <span m="1253970">because</span> <span
  m="1254170">that's</span> <span m="1254310">what</span> <span
  m="1254420">we</span> <span m="1254520">had</span> <span m="1254770">it
  out</span> <span m="1254890">there.</span> <span m="1256280">Something</span>
  <span m="1256640">that's</span> <span m="1256810">a</span> <span
  m="1256860">multiple</span> <span m="1257320">of</span> <span
  m="1257440">y</span> <span m="1258280">plus</span> <span
  m="1259370">the</span> <span m="1259530">remainder--</span> <span
  m="1260150">so</span> <span m="1260280">I</span> <span
  m="1260340">could</span> <span m="1260450">have</span> <span
  m="1260710">a--</span> <span m="1262700">is that</span> <span
  m="1262810">right?</span> <span m="1263100">Is that what</span> <span
  m="1263410">I</span> <span m="1263430">want?</span> <span
  m="1263610">Yeah.</span></p><p><span m="1263940">No,</span> <span
  m="1264460">plus</span> <span m="1264720">y.</span> <span
  m="1265050">So</span> <span m="1265470">I</span> <span m="1265540">want</span>
  <span m="1266360">a</span> <span m="1266710">of--</span> <span
  m="1271660">well</span> <span m="1272490">since</span> <span m="1272710">I
  can't</span> <span m="1272940">figure it</span> <span m="1273260">out,</span>
  <span m="1273760">why</span> <span m="1273930">can't</span> <span
  m="1274140">you?</span> <span m="1276250">What</span> <span
  m="1276380">do</span> <span m="1276430">I</span> <span m="1276500">need</span>
  <span m="1276650">to</span> <span m="1276720">put</span> <span
  m="1276870">in</span> <span m="1276990">there</span> <span
  m="1277600">in</span> <span m="1277770">order</span> <span
  m="1277970">to</span> <span m="1278060">discover</span> <span
  m="1278670">an</span> <span m="1278910">x</span> <span m="1280390">that</span>
  <span m="1280970">would</span> <span m="1282420">produce</span> <span
  m="1282830">a</span> <span m="1282900">y?</span> <span m="1284170">Can</span>
  <span m="1284430">I write</span> <span m="1284560">an</span> <span
  m="1284660">equation?</span> <span m="1285290">Yeah?</span></p><p><span
  m="1286192">AUDIENCE: Could you</span> <span m="1286654">just write y
  itself?</span></p><p><span m="1288040">SRINIVAS DEVADAS: Just</span> <span
  m="1288360">y</span> <span m="1288660">itself.</span> <span
  m="1289300">That's</span> <span m="1289500">right.</span> <span
  m="1289960">Good</span> <span m="1290150">point.</span> <span
  m="1290900">Just</span> <span m="1291050">y</span> <span
  m="1291270">itself</span> <span m="1291650">in</span> <span
  m="1291760">this</span> <span m="1291920">case.</span> <span
  m="1292635">Good.</span> <span m="1293820">I</span> <span
  m="1294000">knew</span> <span m="1294200">you</span> <span
  m="1294320">guys</span> <span m="1294540">were</span> <span
  m="1294650">smarter</span> <span m="1294910">than</span> <span
  m="1295070">me.</span> <span m="1295650">This</span> <span
  m="1296650">proves</span> <span m="1297030">it.</span></p><p><span
  m="1298060">So</span> <span m="1298460">if you</span> <span
  m="1298660">just</span> <span m="1298880">take</span> <span
  m="1299290">y--</span> <span m="1300130">and</span> <span m="1300600">y</span>
  <span m="1300920">remember</span> <span m="1301500">is</span> <span
  m="1301860">going</span> <span m="1302150">to</span> <span
  m="1302260">be</span> <span m="1302440">something</span> <span
  m="1302810">that's</span> <span m="1303160">0</span> <span
  m="1303430">to</span> <span m="1303510">p</span> <span
  m="1303640">minus</span> <span m="1303920">1,</span> <span
  m="1305090">right?</span> <span m="1306190">And</span> <span
  m="1306880">that's</span> <span m="1307160">it.</span> <span
  m="1307520">It</span> <span m="1307920">just</span> <span
  m="1308080">goes</span> <span m="1308260">through,</span> <span
  m="1308700">right?</span> <span m="1309170">So</span> <span
  m="1309280">that's</span> <span m="1309460">a</span> <span
  m="1309520">trivial</span> <span m="1309790">example,</span> <span
  m="1310620">right?</span></p><p><span m="1311150">Now</span> <span
  m="1311440">if</span> <span m="1311580">I</span> <span m="1311670">put</span>
  <span m="1312320">x</span> <span m="1312500">squared</span> <span
  m="1312910">in</span> <span m="1313000">here,</span> <span
  m="1314270">obviously</span> <span m="1314630">it's</span> <span
  m="1314770">not</span> <span m="1315450">y,</span> <span
  m="1315780">but</span> <span m="1315970">I</span> <span
  m="1316010">could</span> <span m="1316480">start</span> <span
  m="1316790">looking</span> <span m="1317090">at--</span> <span
  m="1321790">what I</span> <span m="1321850">have</span> <span
  m="1322040">here</span> <span m="1322360">is</span> <span
  m="1323050">I'm</span> <span m="1323160">going</span> <span
  m="1323270">to</span> <span m="1323310">get</span> <span m="1323450">y</span>
  <span m="1323830">that</span> <span m="1323950">looks</span> <span
  m="1324170">like</span> <span m="1324310">x</span> <span
  m="1324380">squared.</span> <span m="1325280">But I could</span> <span
  m="1325370">take</span> <span m="1325600">the</span> <span
  m="1325910">y</span> <span m="1326380">that</span> <span m="1326510">I</span>
  <span m="1326920">have,</span> <span m="1327220">take</span> <span
  m="1327380">the</span> <span m="1327450">square</span> <span
  m="1327800">root</span> <span m="1327900">of</span> <span
  m="1328010">that,</span> <span m="1328740">and</span> <span
  m="1328880">then</span> <span m="1329000">start</span> <span
  m="1329240">looking</span> <span m="1329540">for</span> <span
  m="1329710">x's</span> <span m="1330540">that</span> <span
  m="1331790">give</span> <span m="1331950">me</span> <span
  m="1332360">the</span> <span m="1332500">y</span> <span
  m="1332740">that</span> <span m="1332900">I</span> <span
  m="1332950">have.</span> <span m="1333570">Actually</span> <span
  m="1333780">it's</span> <span m="1333930">not</span> <span
  m="1334190">a</span> <span m="1335210">complicated</span> <span
  m="1335740">process</span> <span m="1336590">to</span> <span
  m="1336730">try</span> <span m="1336960">and</span> <span
  m="1337070">figure</span> <span m="1337390">out,</span> <span
  m="1338020">through</span> <span m="1338420">trial</span> <span
  m="1338730">and</span> <span m="1338850">error</span> <span
  m="1339170">potentially,</span> <span m="1340230">what</span> <span
  m="1340700">an</span> <span m="1341110">x</span> <span m="1341400">is</span>
  <span m="1341690">that</span> <span m="1341810">produces</span> <span
  m="1342220">a</span> <span m="1342280">particular</span> <span
  m="1342590">y</span> <span m="1343250">for</span> <span m="1343380">the</span>
  <span m="1343490">kinds</span> <span m="1343930">of</span> <span
  m="1344060">hash</span> <span m="1344330">functions</span> <span
  m="1345070">that</span> <span m="1345220">we've</span> <span
  m="1345360">looked</span> <span m="1345600">at,</span> <span
  m="1346220">all</span> <span m="1346280">right?</span></p><p><span
  m="1346900">Now</span> <span m="1347130">as</span> <span
  m="1347490">you</span> <span m="1347610">complicate</span> <span
  m="1348940">this</span> <span m="1349230">equation</span> <span
  m="1350700">it</span> <span m="1350850">gets</span> <span
  m="1351030">harder.</span> <span m="1352050">Because</span> <span
  m="1352300">you</span> <span m="1352380">have</span> <span
  m="1352490">to</span> <span m="1352620">invert</span> <span
  m="1353440">this</span> <span m="1353650">set</span> <span
  m="1353790">of</span> <span m="1353880">equations.</span> <span
  m="1354960">And</span> <span m="1355020">that's</span> <span
  m="1355280">what</span> <span m="1355470">the</span> <span
  m="1355540">game</span> <span m="1355770">is</span> <span
  m="1355870">going</span> <span m="1356000">to</span> <span
  m="1356050">be</span> <span m="1356330">when</span> <span
  m="1356470">you</span> <span m="1356570">go</span> <span
  m="1356750">create</span> <span m="1357150">one-way</span> <span
  m="1357440">hash</span> <span m="1357670">functions.</span> <span
  m="1358620">The</span> <span m="1359100">amount</span> <span
  m="1359470">of</span> <span m="1359560">computation</span> <span
  m="1360260">that</span> <span m="1360400">you</span> <span
  m="1360510">do</span> <span m="1361160">in</span> <span
  m="1361330">order</span> <span m="1361520">to</span> <span
  m="1361610">compute</span> <span m="1362030">the</span> <span
  m="1362130">y</span> <span m="1363100">is</span> <span
  m="1363360">going</span> <span m="1363550">to</span> <span
  m="1363600">increase</span> <span m="1364320">to</span> <span
  m="1364410">the</span> <span m="1364510">point</span> <span m="1364770">where,
  as</span> <span m="1365120">I</span> <span m="1365170">mentioned,</span> <span
  m="1365570">you</span> <span m="1365660">have</span> <span
  m="1365810">80,</span> <span m="1366110">100</span> <span
  m="1366410">rounds</span> <span m="1366720">of</span> <span
  m="1366800">computation,</span> <span m="1367770">things</span> <span
  m="1368120">getting</span> <span m="1368340">mixed</span> <span
  m="1368710">in.</span></p><p><span m="1369400">And</span> <span
  m="1370020">the</span> <span m="1370140">hope</span> <span
  m="1370380">is</span> <span m="1370570">that</span> <span
  m="1371020">you</span> <span m="1371150">create</span> <span
  m="1371440">this</span> <span m="1371560">circuit,</span> <span
  m="1372260">if</span> <span m="1372390">you</span> <span
  m="1372500">will,</span> <span m="1373210">that</span> <span
  m="1373240">has</span> <span m="1373440">all</span> <span
  m="1373600">this</span> <span m="1373740">computation</span> <span
  m="1374350">in</span> <span m="1374440">that.</span> <span
  m="1374970">Going</span> <span m="1375220">forwards</span> <span
  m="1375690">is</span> <span m="1375850">easy,</span> <span
  m="1376490">because</span> <span m="1376720">you've</span> <span
  m="1377170">specified</span> <span m="1377850">the</span> <span
  m="1377970">multiplications</span> <span m="1378770">and</span> <span
  m="1378870">the</span> <span m="1378950">mods</span> <span
  m="1379350">and</span> <span m="1379490">so</span> <span m="1379620">on</span>
  <span m="1379750">and</span> <span m="1379840">so</span> <span
  m="1379980">forth.</span> <span m="1380700">But</span> <span
  m="1380840">not</span> <span m="1381070">all</span> <span
  m="1381250">of</span> <span m="1381320">these</span> <span
  m="1381500">operations</span> <span m="1382010">have</span> <span
  m="1383420">simple</span> <span m="1383750">inverses.</span> <span
  m="1384830">And</span> <span m="1385090">going</span> <span
  m="1385490">backwards,</span> <span m="1387280">which</span> <span
  m="1387480">is</span> <span m="1387600">what</span> <span
  m="1387790">you</span> <span m="1387870">need</span> <span
  m="1388020">to</span> <span m="1388090">do</span> <span m="1388290">in</span>
  <span m="1388450">order</span> <span m="1388650">to</span> <span
  m="1389550">break</span> <span m="1389940">one-wayness,</span> <span
  m="1391010">or</span> <span m="1391660">discover</span> <span
  m="1392240">the</span> <span m="1393110">x</span> <span m="1393570">given
  a</span> <span m="1393830">y,</span> <span m="1394590">is</span> <span
  m="1394760">going</span> <span m="1394890">to</span> <span
  m="1394940">be</span> <span m="1395040">harder</span> <span
  m="1395310">and</span> <span m="1395400">harder</span> <span
  m="1396090">as</span> <span m="1396310">the</span> <span
  m="1396380">computations</span> <span m="1396950">get</span> <span
  m="1397100">more</span> <span m="1397260">complex,</span> <span
  m="1398240">OK?</span></p><p><span m="1398890">So</span> <span
  m="1399440">everyone</span> <span m="1399710">have</span> <span
  m="1399810">a</span> <span m="1399860">sense</span> <span
  m="1400140">of</span> <span m="1400220">what</span> <span
  m="1400370">one-wayness</span> <span m="1400550">is?</span> <span
  m="1404810">So</span> <span m="1405080">that's</span> <span
  m="1405580">one-wayness.</span> <span m="1406990">There's</span> <span
  m="1407740">four</span> <span m="1408000">other</span> <span
  m="1408180">properties,</span> <span m="1409120">two</span> <span
  m="1409290">of</span> <span m="1409350">which</span> <span
  m="1409550">are</span> <span m="1409650">very</span> <span
  m="1409920">related.</span></p><p><span m="1410930">CR</span> <span
  m="1412270">and</span> <span m="1412560">TCR.</span> <span
  m="1413700">So</span> <span m="1413960">CR</span> <span m="1414140">is</span>
  <span m="1414670">collision</span> <span m="1415170">resistance.</span> <span
  m="1422970">It's</span> <span m="1423590">infeasible</span> <span
  m="1427790">to</span> <span m="1428195">find</span> <span m="1429880">x</span>
  <span m="1430280">and</span> <span m="1430585">x</span> <span
  m="1430890">prime</span> <span m="1431970">such</span> <span
  m="1432370">that</span> <span m="1433270">x</span> <span
  m="1433800">not</span> <span m="1434010">equal</span> <span
  m="1434290">to</span> <span m="1434350">x</span> <span
  m="1434550">prime,</span> <span m="1436320">and</span> <span
  m="1438700">h</span> <span m="1438940">of</span> <span m="1439090">x</span>
  <span m="1440110">equals</span> <span m="1440610">h</span> <span
  m="1440820">of</span> <span m="1440930">x</span> <span
  m="1441120">prime,</span> <span m="1442700">which</span> <span
  m="1442790">is</span> <span m="1442870">of</span> <span
  m="1442960">course</span> <span m="1443160">a</span> <span
  m="1443250">collision.</span> <span m="1448300">OK?</span> <span
  m="1449690">And</span> <span m="1450570">that</span> <span
  m="1450955">just</span> <span m="1451340">says</span> <span
  m="1451730">you</span> <span m="1451890">have</span> <span
  m="1452120">this</span> <span m="1452850">crazy</span> <span
  m="1453320">hash</span> <span m="1453570">function</span> <span
  m="1454540">where</span> <span m="1454790">you can't</span> <span
  m="1455100">discover</span> <span m="1455500">collisions.</span> <span
  m="1456650">Well</span> <span m="1456800">it would</span> <span
  m="1457115">be</span> <span m="1457430">absolutely</span> <span
  m="1457890">wonderful.</span> <span m="1458620">In</span> <span
  m="1458730">fact</span> <span m="1459010">that's</span> <span
  m="1459040">what</span> <span m="1459180">we</span> <span
  m="1459290">wanted</span> <span m="1460050">when</span> <span
  m="1460190">we</span> <span m="1460290">built</span> <span
  m="1460490">dictionaries.</span></p><p><span m="1461740">But</span> <span
  m="1462480">why</span> <span m="1462810">don't</span> <span
  m="1463310">we</span> <span m="1463450">use</span> <span
  m="1463690">SHA-3</span> <span m="1464730">in</span> <span
  m="1464890">dictionaries?</span> <span m="1468410">Why</span> <span
  m="1468560">don't</span> <span m="1468710">we</span> <span
  m="1468830">use</span> <span m="1468990">SHA-3</span> <span
  m="1469500">in</span> <span m="1469610">dictionaries?</span> <span
  m="1470350">Yeah?</span></p><p><span m="1471174">AUDIENCE: Because</span>
  <span m="1471598">it's more</span> <span m="1472022">complicated than</span>
  <span m="1472446">we need.</span></p><p><span m="1472870">SRINIVAS DEVADAS:
  Yeah,</span> <span m="1473220">it's</span> <span m="1473700">horribly</span>
  <span m="1474180">slow,</span> <span m="1474720">right?</span> <span
  m="1475270">It</span> <span m="1475410">would</span> <span
  m="1476770">take</span> <span m="1476960">longer</span> <span
  m="1477450">to</span> <span m="1477980">compute</span> <span
  m="1478350">the</span> <span m="1478430">hash</span> <span
  m="1478910">than</span> <span m="1479090">access</span> <span
  m="1479550">the</span> <span m="1479660">dictionary,</span> <span
  m="1480170">when</span> <span m="1480320">you</span> <span
  m="1480430">actually</span> <span m="1480740">had</span> <span
  m="1481380">a</span> <span m="1481450">reasonable</span> <span
  m="1481850">dictionary</span> <span m="1482870">that</span> <span
  m="1483620">maybe</span> <span m="1483920">had</span> <span
  m="1484130">some</span> <span m="1484280">collisions.</span> <span
  m="1484890">I</span> <span m="1484950">mean</span> <span
  m="1485060">you</span> <span m="1485130">just</span> <span
  m="1485300">go</span> <span m="1485410">off</span> <span
  m="1485700">and</span> <span m="1485810">you</span> <span
  m="1485900">have</span> <span m="1486040">a</span> <span
  m="1486080">linked</span> <span m="1486350">list,</span> <span
  m="1486930">you</span> <span m="1487050">can</span> <span
  m="1487150">afford</span> <span m="1487450">a</span> <span
  m="1487500">few</span> <span m="1487670">collisions,</span> <span
  m="1488720">what's</span> <span m="1488870">the</span> <span
  m="1488950">big</span> <span m="1489100">deal,</span> <span
  m="1489820">right?</span> <span m="1490090">So</span> <span
  m="1490360">it</span> <span m="1490420">just</span> <span
  m="1490590">doesn't</span> <span m="1490790">make</span> <span
  m="1490920">any</span> <span m="1491050">sense</span> <span
  m="1491860">to</span> <span m="1491960">use</span> <span
  m="1492580">this</span> <span m="1492940">level</span> <span
  m="1494610">of</span> <span m="1495510">heavyweight</span> <span
  m="1496100">hash</span> <span m="1496350">function,</span> <span
  m="1497420">even</span> <span m="1497680">if</span> <span
  m="1498480">it</span> <span m="1498690">satisfies</span> <span
  m="1499260">collision</span> <span m="1499630">resistance--</span> <span
  m="1500150">which</span> <span m="1500830">some</span> <span
  m="1501050">of</span> <span m="1501100">these</span> <span
  m="1501320">are</span> <span m="1501390">conjectured</span> <span
  m="1501920">to</span> <span m="1502050">do--</span> <span
  m="1502910">for</span> <span m="1503270">the</span> <span
  m="1503350">applications</span> <span m="1503930">we've</span> <span
  m="1504070">looked</span> <span m="1504300">at.</span></p><p><span
  m="1504890">But</span> <span m="1505020">there'll</span> <span
  m="1505150">be</span> <span m="1505250">other</span> <span
  m="1505470">apps</span> <span m="1505790">where</span> <span
  m="1505950">collision</span> <span m="1506330">resistance</span> <span
  m="1506820">is</span> <span m="1506950">going</span> <span
  m="1507070">to</span> <span m="1507110">be</span> <span
  m="1507190">important.</span> <span m="1508520">So</span> <span
  m="1508620">that's</span> <span m="1508790">collision</span> <span
  m="1509140">resistance.</span> <span m="1510110">And</span> <span
  m="1510270">then</span> <span m="1510530">there's--</span> <span
  m="1511600">TCR</span> <span m="1512350">is</span> <span
  m="1512890">target</span> <span m="1513800">collision</span> <span
  m="1514230">resistance.</span> <span m="1515470">It's</span> <span
  m="1515670">a</span> <span m="1515730">weaker</span> <span
  m="1516110">form--</span> <span m="1516740">so</span> <span
  m="1516840">sometimes</span> <span m="1517980">people</span> <span
  m="1518300">CR</span> <span m="1519350">strong</span> <span
  m="1519880">collision</span> <span m="1520240">resistance,</span> <span
  m="1520750">and</span> <span m="1521640">TCR</span> <span
  m="1522860">weak</span> <span m="1523700">occlusion</span> <span
  m="1524190">resistance.</span> <span m="1524810">We'll</span> <span
  m="1524980">use</span> <span m="1525450">CR</span> <span
  m="1526020">and</span> <span m="1526220">TCR</span> <span
  m="1526380">here.</span></p><p><span m="1528090">And</span> <span
  m="1528590">this</span> <span m="1528900">says</span> <span
  m="1529980">it's</span> <span m="1530240">infeasible,</span> <span
  m="1534210">given</span> <span m="1535460">x--</span> <span
  m="1536530">so</span> <span m="1536730">there's</span> <span
  m="1536930">a</span> <span m="1536990">specific</span> <span
  m="1538330">x</span> <span m="1538900">that</span> <span
  m="1539100">you</span> <span m="1539200">want</span> <span
  m="1539370">to</span> <span m="1539420">find</span> <span m="1539850">a</span>
  <span m="1539910">collision</span> <span m="1540370">for,</span> <span
  m="1541140">as</span> <span m="1541340">opposed</span> <span
  m="1541590">to</span> <span m="1541670">just</span> <span
  m="1541920">finding</span> <span m="1542450">a</span> <span
  m="1542620">pair</span> <span m="1543420">that</span> <span
  m="1543590">goes</span> <span m="1543770">once</span> <span
  m="1544040">to</span> <span m="1544130">x</span> <span m="1544390">and</span>
  <span m="1544480">x</span> <span m="1544650">prime.</span> <span
  m="1545360">And</span> <span m="1545600">any</span> <span
  m="1545840">pair</span> <span m="1546450">would</span> <span
  m="1546650">suffice</span> <span m="1547790">to</span> <span
  m="1548220">break</span> <span m="1548670">the</span> <span
  m="1548790">collision</span> <span m="1549200">resistance</span> <span
  m="1549700">property.</span> <span m="1550560">But</span> <span
  m="1551290">TCR</span> <span m="1551930">says</span> <span
  m="1552150">is</span> <span m="1552400">I'm</span> <span
  m="1552570">going</span> <span m="1552680">to</span> <span
  m="1552720">give</span> <span m="1552920">you</span> <span
  m="1553080">a</span> <span m="1553150">specific</span> <span
  m="1553690">x.</span> <span m="1554630">And</span> <span m="1554900">I</span>
  <span m="1554930">want</span> <span m="1555220">you</span> <span
  m="1555340">to</span> <span m="1555420">find</span> <span
  m="1555910">an</span> <span m="1556000">x</span> <span
  m="1556230">prime</span> <span m="1557520">who's</span> <span
  m="1557750">hash</span> <span m="1558160">collides</span> <span
  m="1558730">with</span> <span m="1558870">the</span> <span
  m="1558940">hash</span> <span m="1559300">of</span> <span
  m="1559420">x,</span> <span m="1560250">OK?</span> <span
  m="1561050">That's</span> <span m="1561690">TCR.</span></p><p><span
  m="1576350">OK</span> <span m="1576650">that's</span> <span
  m="1576990">TCR</span> <span m="1577470">for</span> <span
  m="1577670">you.</span> <span m="1578120">And</span> <span
  m="1578400">that</span> <span m="1578840">just</span> <span
  m="1578900">to</span> <span m="1578960">be</span> <span
  m="1579070">clear,</span> <span m="1579510">I</span> <span
  m="1579570">think</span> <span m="1579710">you</span> <span
  m="1579790">probably</span> <span m="1580040">all</span> <span
  m="1580190">got</span> <span m="1580410">this,</span> <span
  m="1582170">obviously</span> <span m="1582570">we</span> <span
  m="1582680">want</span> <span m="1582910">this</span> <span
  m="1583120">here</span> <span m="1583420">because</span> <span
  m="1583650">we</span> <span m="1583710">have</span> <span m="1583810">a</span>
  <span m="1583860">deterministic</span> <span m="1585470">hash</span> <span
  m="1585760">function.</span> <span m="1586340">And</span> <span
  m="1586370">it's</span> <span m="1586520">a</span> <span
  m="1586930">trivial</span> <span m="1587270">thing</span> <span
  m="1587480">to</span> <span m="1587560">say</span> <span
  m="1587770">that</span> <span m="1588650">if</span> <span
  m="1588740">you</span> <span m="1588820">had</span> <span
  m="1589010">x,</span> <span m="1589430">and</span> <span
  m="1589580">you</span> <span m="1589660">had</span> <span m="1589790">x</span>
  <span m="1589980">again,</span> <span m="1590490">that</span> <span
  m="1590690">you</span> <span m="1590780">get</span> <span
  m="1590940">the</span> <span m="1591000">same</span> <span
  m="1591220">hash</span> <span m="1591530">back</span> <span
  m="1591770">from</span> <span m="1591970">it.</span> <span
  m="1592380">That's</span> <span m="1592620">a</span> <span
  m="1592670">requirement,</span> <span m="1593170">really.</span> <span
  m="1593740">So</span> <span m="1593890">we</span> <span
  m="1593990">want</span> <span m="1594210">two</span> <span
  m="1594360">distinct</span> <span m="1595320">x</span> <span m="1595570">and
  x</span> <span m="1595840">primes</span> <span m="1596250">that</span> <span
  m="1596350">are</span> <span m="1596450">not</span> <span
  m="1596670">equal</span> <span m="1597480">that</span> <span
  m="1597630">end</span> <span m="1597820">up</span> <span
  m="1597940">colliding.</span> <span m="1598590">That's</span> <span
  m="1598810">really</span> <span m="1598960">what</span> <span m="1599090">a
  collision</span> <span m="1599480">is.</span></p><p><span
  m="1600890">And</span> <span m="1601080">so</span> <span
  m="1601240">you</span> <span m="1601530">see</span> <span
  m="1601730">the</span> <span m="1601810">difference</span> <span
  m="1602260">between</span> <span m="1602330">CR</span> <span
  m="1602560">and</span> <span m="1602770">TCR?</span> <span
  m="1604210">Yup?</span> <span m="1604700">Yeah?</span></p><p><span
  m="1605812">AUDIENCE:</span> <span m="1606288">Are</span> <span
  m="1606764">we</span> <span m="1607240">to assume</span> <span
  m="1607716">that</span> <span m="1608192">given an</span> <span
  m="1608668">x</span> <span m="1609144">it's</span> <span
  m="1609620">very</span> <span m="1610096">easy to</span> <span m="1610572">get
  the</span> <span m="1611048">h of x</span> <span
  m="1611524">back?</span></p><p><span m="1612010">SRINIVAS DEVADAS: So</span>
  <span m="1612140">the</span> <span m="1612220">question</span> <span
  m="1612480">was,</span> <span m="1612740">given an</span> <span
  m="1613150">x,</span> <span m="1613640">it's</span> <span
  m="1613830">poly-time</span> <span m="1614510">computation</span> <span
  m="1615610">to</span> <span m="1615700">get</span> <span m="1615880">h</span>
  <span m="1616080">of</span> <span m="1616190">x.</span> <span
  m="1617150">Absolutely.</span> <span m="1618230">Public</span> <span
  m="1618670">poly-time</span> <span m="1619160">computation</span> <span
  m="1620140">given</span> <span m="1620340">an</span> <span
  m="1620460">x</span> <span m="1621140">to</span> <span m="1621200">get</span>
  <span m="1621520">h</span> <span m="1621730">of</span> <span
  m="1621850">x.</span> <span m="1622480">So</span> <span
  m="1622700">going</span> <span m="1623000">this</span> <span
  m="1623390">way</span> <span m="1626600">is</span> <span
  m="1626870">easy.</span> <span m="1628840">Going</span> <span
  m="1629110">this</span> <span m="1629390">way--</span> <span m="1631310">I
  ran</span> <span m="1631350">out of</span> <span m="1631450">room--</span>
  <span m="1632630">hard.</span> <span m="1635170">OK?</span></p><p><span
  m="1636954">AUDIENCE:</span> <span m="1637412">So does</span> <span
  m="1637870">that mean</span> <span m="1638328">that TCR</span> <span
  m="1638786">is basically the</span> <span m="1639244">same as</span> <span
  m="1639702">1?</span></p><p><span m="1640160">SRINIVAS DEVADAS: No,</span>
  <span m="1640360">no,</span> <span m="1640520">no,</span> <span
  m="1640800">absolutely</span> <span m="1641050">not. </span> <span
  m="1642230">TCR</span> <span m="1642890">says</span> <span
  m="1645140">it's</span> <span m="1645300">OK.</span> <span
  m="1645890">You</span> <span m="1646050">can</span> <span
  m="1646200">compute</span> <span m="1646550">this.</span> <span
  m="1647620">You</span> <span m="1647780">can</span> <span
  m="1647910">get</span> <span m="1648100">x.</span> <span
  m="1649030">And</span> <span m="1649210">you</span> <span
  m="1649320">can</span> <span m="1649470">get</span> <span m="1649990">h</span>
  <span m="1650250">of</span> <span m="1650330">x.</span> <span
  m="1650720">So</span> <span m="1651280">given</span> <span
  m="1651560">x,</span> <span m="1652050">you</span> <span
  m="1652190">know</span> <span m="1652380">that</span> <span
  m="1652490">you</span> <span m="1652580">can</span> <span
  m="1652680">get</span> <span m="1652800">h</span> <span m="1652980">of</span>
  <span m="1653090">x.</span></p><p><span m="1653375">I didn't</span> <span
  m="1653660">actually</span> <span m="1653910">put</span> <span
  m="1654060">that</span> <span m="1654190">in</span> <span
  m="1654270">the</span> <span m="1654340">definition.</span> <span
  m="1655000">And</span> <span m="1655150">maybe</span> <span
  m="1655660">I</span> <span m="1655780">should</span> <span
  m="1655950">have.</span> <span m="1656800">So</span> <span
  m="1656950">given</span> <span m="1657210">x</span> <span
  m="1657490">you</span> <span m="1657570">can</span> <span
  m="1657720">always</span> <span m="1658160">get</span> <span
  m="1658320">h</span> <span m="1658510">of</span> <span m="1658630">x.</span>
  <span m="1658860">Remember</span> <span m="1659170">that.</span> <span
  m="1660080">It's</span> <span m="1660250">easy</span> <span
  m="1660550">to</span> <span m="1660620">get</span> <span m="1660770">h
  of</span> <span m="1661010">x.</span> <span m="1661640">So</span> <span
  m="1661980">any</span> <span m="1662160">time</span> <span
  m="1662360">I</span> <span m="1662440">say</span> <span
  m="1662600">given</span> <span m="1662860">x,</span> <span
  m="1663240">you</span> <span m="1663380">can</span> <span
  m="1663460">always</span> <span m="1663780">add</span> <span
  m="1664065">it,</span> <span m="1664350">saying</span> <span
  m="1664610">given</span> <span m="1664840">x</span> <span
  m="1665160">and</span> <span m="1665340">h</span> <span m="1665520">of</span>
  <span m="1665640">x.</span></p><p><span m="1666400">So</span> <span
  m="1667690">I'm</span> <span m="1668130">given</span> <span
  m="1668400">x.</span> <span m="1668690">I'm</span> <span
  m="1668810">given</span> <span m="1669020">h</span> <span
  m="1669210">of</span> <span m="1669330">x.</span> <span m="1669960">I</span>
  <span m="1670130">obviously</span> <span m="1670530">need</span> <span
  m="1670750">to</span> <span m="1670830">map--</span> <span
  m="1672770">I</span> <span m="1672890">need</span> <span m="1673140">to</span>
  <span m="1673200">discover</span> <span m="1673600">an</span> <span
  m="1673680">x</span> <span m="1673860">prime</span> <span
  m="1674190">such</span> <span m="1674450">that</span> <span
  m="1674610">h</span> <span m="1674800">of</span> <span m="1674900">x</span>
  <span m="1675090">prime</span> <span m="1675470">equals</span> <span
  m="1675790">h</span> <span m="1675950">of</span> <span m="1676050">x,</span>
  <span m="1676890">OK?</span> <span m="1678080">Now</span> <span
  m="1678970">you</span> <span m="1680420">have</span> <span
  m="1680670">situations</span> <span m="1681260">where</span> <span
  m="1683990">for--</span> <span m="1684390">it</span> <span
  m="1684490">may</span> <span m="1684650">be</span> <span
  m="1684760">the</span> <span m="1684860">case</span> <span
  m="1685130">that</span> <span m="1685280">for</span> <span
  m="1685910">particular</span> <span m="1686520">x's</span> <span
  m="1687750">you</span> <span m="1687920">can</span> <span
  m="1688030">actually</span> <span m="1688280">do</span> <span
  m="1688420">this.</span> <span m="1688900">And</span> <span
  m="1689060">that's</span> <span m="1689260">enough</span> <span
  m="1689550">to</span> <span m="1689650">break</span> <span
  m="1689880">TCR.</span> <span m="1693270">So</span> <span
  m="1693380">you</span> <span m="1693510">have</span> <span
  m="1693640">to</span> <span m="1693720">have</span> <span
  m="1693890">this</span> <span m="1693990">strong</span> <span
  m="1694490">property</span> <span m="1695640">that</span> <span
  m="1697330">you</span> <span m="1698690">really</span> <span
  m="1699040">don't</span> <span m="1699220">want</span> <span
  m="1699330">to</span> <span m="1699370">find</span> <span
  m="1699670">collisions</span> <span m="1700420">are</span> <span
  m="1701010">for</span> <span m="1701960">some--</span> <span
  m="1702520">even</span> <span m="1702740">if</span> <span
  m="1702800">there's</span> <span m="1703050">a</span> <span
  m="1703350">constant</span> <span m="1703850">fraction</span> <span
  m="1704360">of</span> <span m="1704480">x's</span> <span
  m="1705310">that</span> <span m="1706470">break</span> <span
  m="1706740">the</span> <span m="1706840">TCR</span> <span
  m="1707390">property,</span> <span m="1707810">you don't</span> <span
  m="1708040">like</span> <span m="1708290">your</span> <span
  m="1708420">hash</span> <span m="1708590">function,</span> <span
  m="1709500">OK?</span> <span m="1709710">Because</span> <span
  m="1709950">you</span> <span m="1710030">might</span> <span
  m="1710270">end</span> <span m="1710450">up</span> <span
  m="1710570">picking</span> <span m="1710810">those</span> <span
  m="1711510">and</span> <span m="1711700">go</span> <span
  m="1711850">build</span> <span m="1712100">security</span> <span
  m="1712530">applications</span> <span m="1713290">using</span> <span
  m="1713610">those</span> <span m="1713800">properties.</span></p><p><span
  m="1715490">I</span> <span m="1715620">want</span> <span m="1715770">to</span>
  <span m="1715830">talk</span> <span m="1716060">a</span> <span
  m="1716110">little</span> <span m="1716290">bit</span> <span
  m="1716840">about</span> <span m="1717110">the</span> <span
  m="1717190">relationship</span> <span m="1717990">between</span> <span
  m="1719230">OW,</span> <span m="1719633">CR,</span> <span
  m="1720440">and</span> <span m="1720600">TCR.</span> <span
  m="1721240">So</span> <span m="1721440">I'm</span> <span
  m="1721550">going</span> <span m="1721650">to</span> <span
  m="1721690">get</span> <span m="1721840">back</span> <span
  m="1722030">to</span> <span m="1722120">that.</span> <span
  m="1722700">And</span> <span m="1722880">we're</span> <span m="1723010">going
  to</span> <span m="1723140">talking</span> <span m="1723410">about</span>
  <span m="1724060">hash</span> <span m="1724360">functions</span> <span
  m="1724870">that</span> <span m="1725290">satisfy</span> <span
  m="1725800">one</span> <span m="1726060">property</span> <span
  m="1726520">but</span> <span m="1726760">don't</span> <span
  m="1727010">satisfy</span> <span m="1727450">the</span> <span
  m="1727530">other.</span> <span m="1728080">And</span> <span
  m="1728210">I</span> <span m="1728250">think</span> <span
  m="1728770">your</span> <span m="1728940">question</span> <span
  m="1729310">will</span> <span m="1729480">probably be</span> <span
  m="1729920">answered</span> <span m="1730470">better,</span> <span
  m="1731220">OK?</span> <span m="1732150">Thanks</span> <span
  m="1732370">for</span> <span m="1732430">the</span> <span
  m="1732500">question.</span></p><p><span m="1733460">So</span> <span
  m="1734040">those</span> <span m="1734320">are</span> <span
  m="1734370">the</span> <span m="1734450">main</span> <span
  m="1734680">ones.</span> <span m="1736160">And</span> <span
  m="1736360">really</span> <span m="1736600">quickly,</span> <span
  m="1737930">if</span> <span m="1738040">you</span> <span
  m="1738140">want</span> <span m="1738250">to</span> <span
  m="1738290">spend</span> <span m="1738500">a</span> <span
  m="1738560">lot</span> <span m="1738880">of</span> <span
  m="1738950">time</span> <span m="1739260">on</span> <span
  m="1739410">this--</span> <span m="1740480">but</span> <span
  m="1741570">I</span> <span m="1741690">do</span> <span m="1741890">want</span>
  <span m="1742060">to</span> <span m="1742120">put</span> <span
  m="1742300">up--</span> <span m="1742972">I</span> <span
  m="1743310">think</span> <span m="1743470">I'll</span> <span
  m="1743520">leave</span> <span m="1743790">these</span> <span
  m="1743970">properties</span> <span m="1744400">up</span> <span
  m="1744610">here</span> <span m="1745320">for</span> <span
  m="1745470">the</span> <span m="1745580">duration.</span> <span
  m="1746590">Because</span> <span m="1746730">it's</span> <span
  m="1746840">important</span> <span m="1747280">for</span> <span
  m="1747380">you</span> <span m="1747620">to</span> <span
  m="1748170">see</span> <span m="1748390">these</span> <span
  m="1748610">definitions</span> <span m="1749920">as</span> <span
  m="1750190">we</span> <span m="1750350">look</span> <span
  m="1750600">at</span> <span m="1752370">the</span> <span
  m="1752450">applications</span> <span m="1753260">where</span> <span
  m="1753360">we</span> <span m="1753580">require</span> <span
  m="1754290">these</span> <span m="1754380">properties,</span> <span
  m="1754900">or</span> <span m="1755030">a</span> <span
  m="1755080">subset</span> <span m="1755480">of</span> <span
  m="1755570">these</span> <span m="1755730">properties.</span></p><p><span
  m="1757090">But</span> <span m="1757360">that</span> <span
  m="1757680">we</span> <span m="1757840">have</span> <span
  m="1758230">pseudo</span> <span m="1758540">randomness.</span> <span
  m="1759580">And</span> <span m="1759820">this</span> <span
  m="1759990">is</span> <span m="1760730">simply</span> <span
  m="1761800">a</span> <span m="1761920">function</span> <span
  m="1762360">of</span> <span m="1762460">the</span> <span
  m="1762550">fact</span> <span m="1762910">that--</span> <span
  m="1763530">so</span> <span m="1763640">this</span> <span
  m="1763780">is</span> <span m="1763910">PRF--</span> <span
  m="1768650">we</span> <span m="1768900">know</span> <span
  m="1769190">we</span> <span m="1769310">can't</span> <span
  m="1769540">build</span> <span m="1769760">a</span> <span
  m="1769820">random</span> <span m="1770150">oracle.</span> <span
  m="1771100">And</span> <span m="1771320">so</span> <span
  m="1771570">we're</span> <span m="1771700">going</span> <span
  m="1771840">to</span> <span m="1771890">have</span> <span
  m="1772100">to</span> <span m="1772960">do</span> <span
  m="1773260">something</span> <span m="1773580">that's</span> <span
  m="1773800">pseudo-random.</span> <span m="1775300">And</span> <span
  m="1776090">basically</span> <span m="1776540">what</span> <span
  m="1776650">we're</span> <span m="1776760">saying</span> <span
  m="1777020">here</span> <span m="1777840">is</span> <span
  m="1778040">the</span> <span m="1778120">behavior</span> <span
  m="1780120">is</span> <span m="1780540">indistinguishable</span> <span
  m="1785230">from</span> <span m="1785520">random.</span></p><p><span
  m="1790990">So</span> <span m="1791250">we're</span> <span
  m="1791360">going</span> <span m="1791450">to</span> <span
  m="1791490">have</span> <span m="1791640">to</span> <span
  m="1791900">use</span> <span m="1793616">non-linearity,</span> <span
  m="1795780">things</span> <span m="1796020">that</span> <span
  m="1796140">are</span> <span m="1796190">called</span> <span
  m="1796440">non-linear</span> <span m="1797150">feedback</span> <span
  m="1797640">shift</span> <span m="1797870">registers,</span> <span
  m="1798730">to</span> <span m="1798870">create</span> <span
  m="1799360">pseudo-random</span> <span m="1799850">functions.</span> <span
  m="1800370">There's</span> <span m="1800530">many</span> <span
  m="1800730">ways</span> <span m="1801110">that</span> <span
  m="1801330">we</span> <span m="1801420">can</span> <span
  m="1801580">create</span> <span m="1802310">pseudo-random</span> <span
  m="1802870">functions.</span> <span m="1803710">We</span> <span
  m="1803830">won't</span> <span m="1803990">really</span> <span
  m="1804290">get</span> <span m="1804430">into</span> <span
  m="1804590">that.</span> <span m="1805310">But</span> <span
  m="1805840">obviously</span> <span m="1806150">that's</span> <span
  m="1806310">what</span> <span m="1806450">we</span> <span
  m="1806530">want.</span></p><p><span m="1807680">And</span> <span
  m="1807740">then</span> <span m="1807870">the</span> <span
  m="1807950">last</span> <span m="1808280">one</span> <span
  m="1809420">is</span> <span m="1812720">a</span> <span m="1812800">bit</span>
  <span m="1813020">tricky.</span> <span m="1814420">And</span> <span
  m="1814590">we</span> <span m="1814700">will</span> <span
  m="1814890">have</span> <span m="1815040">an</span> <span
  m="1815110">app</span> <span m="1815740">that</span> <span
  m="1815970">requires</span> <span m="1816480">this</span> <span
  m="1817130">way</span> <span m="1817350">at the</span> <span
  m="1817510">end.</span> <span m="1818830">But</span> <span
  m="1819260">this</span> <span m="1819440">is</span> <span
  m="1821770">infeasible</span> <span m="1825350">given</span> <span
  m="1826590">h</span> <span m="1826810">of</span> <span m="1826950">x</span>
  <span m="1829240">to</span> <span m="1829640">produce</span> <span
  m="1832670">h</span> <span m="1832880">of</span> <span m="1833010">x</span>
  <span m="1833220">prime,</span> <span m="1835420">where</span> <span
  m="1836930">x</span> <span m="1838780">and</span> <span m="1839020">x</span>
  <span m="1839220">prime</span> <span m="1841010">are--</span> <span
  m="1841630">and</span> <span m="1841770">it</span> <span
  m="1841830">gets</span> <span m="1842010">a</span> <span
  m="1842090">little</span> <span m="1842400">bit</span> <span
  m="1844000">fuzzy</span> <span m="1844390">here--</span> <span
  m="1845940">are</span> <span m="1846060">related</span> <span
  m="1848420">in</span> <span m="1848580">some</span> <span
  m="1848800">fashion,</span> <span m="1849540">right?</span> <span
  m="1850150">So</span> <span m="1850700">a</span> <span
  m="1850810">concrete</span> <span m="1851320">example</span> <span
  m="1851740">of</span> <span m="1851850">this</span> <span
  m="1852990">is,</span> <span m="1853630">let's</span> <span
  m="1853890">say</span> <span m="1854080">that</span> <span
  m="1855940">x</span> <span m="1856690">prime</span> <span
  m="1857540">is</span> <span m="1858460">x</span> <span m="1858710">plus</span>
  <span m="1858930">1.</span> <span m="1859770">So</span> <span
  m="1859900">this</span> <span m="1860020">is</span> <span m="1860120">a</span>
  <span m="1861050">reasonable</span> <span m="1861460">example</span> <span
  m="1861850">of</span> <span m="1861940">this.</span></p><p><span
  m="1862630">So</span> <span m="1862830">what</span> <span
  m="1863020">this</span> <span m="1863240">says is</span> <span
  m="1865100">you're</span> <span m="1865300">just</span> <span
  m="1865660">given</span> <span m="1867310">h</span> <span
  m="1867530">of</span> <span m="1867650">x.</span> <span m="1869930">It</span>
  <span m="1870280">doesn't</span> <span m="1870580">actually</span> <span
  m="1870820">say</span> <span m="1870970">anything</span> <span
  m="1871220">about</span> <span m="1871420">one-wayness</span> <span
  m="1871910">yet.</span> <span m="1872680">But</span> <span
  m="1873050">you</span> <span m="1873210">could</span> <span
  m="1873380">assume,</span> <span m="1874100">for</span> <span
  m="1874200">example,</span> <span m="1874670">that</span> <span
  m="1874690">if</span> <span m="1874790">this</span> <span
  m="1874950">was</span> <span m="1875110">a</span> <span
  m="1875190">one-way</span> <span m="1876790">hash</span> <span
  m="1877080">function,</span> <span m="1878510">that</span> <span
  m="1878810">it</span> <span m="1878920">would</span> <span
  m="1879030">be</span> <span m="1879250">possible</span> <span
  m="1880220">to</span> <span m="1880290">get</span> <span m="1880510">x</span>
  <span m="1881470">from</span> <span m="1881830">h</span> <span
  m="1882020">of</span> <span m="1882130">x,</span> <span
  m="1883140">correct?</span> <span m="1886300">And</span> <span
  m="1886850">let's</span> <span m="1887120">keep</span> <span
  m="1887270">that</span> <span m="1887460">though.</span> <span
  m="1888070">Hold</span> <span m="1888150">that</span> <span
  m="1888300">thought,</span> <span m="1888660">all</span> <span
  m="1889110">right?</span> <span m="1889470">We're going</span> <span
  m="1889550">to</span> <span m="1889600">get</span> <span
  m="1889730">back</span> <span m="1889930">to</span> <span
  m="1890040">it.</span></p><p><span m="1891290">So</span> <span
  m="1891730">if</span> <span m="1891890">I'm</span> <span
  m="1892010">just</span> <span m="1892250">given</span> <span
  m="1892450">the</span> <span m="1892520">hash</span> <span
  m="1894500">through</span> <span m="1894800">some</span> <span
  m="1895000">computation,</span> <span m="1896710">it</span> <span
  m="1896860">may</span> <span m="1897140">be</span> <span
  m="1897290">possible</span> <span m="1897730">for</span> <span
  m="1897890">me</span> <span m="1898060">to</span> <span
  m="1898180">create</span> <span m="1898590">another</span> <span
  m="1898970">hash,</span> <span m="1900080">h</span> <span
  m="1900300">of</span> <span m="1900410">x</span> <span
  m="1900650">prime,</span> <span m="1902270">such</span> <span
  m="1902630">that</span> <span m="1903720">there's</span> <span
  m="1903900">some</span> <span m="1904110">relationship</span> <span
  m="1905330">that</span> <span m="1905480">I</span> <span
  m="1905560">can</span> <span m="1906810">prove</span> <span
  m="1907330">or</span> <span m="1907470">argue</span> <span
  m="1907840">for</span> <span m="1908610">between</span> <span
  m="1909640">the</span> <span m="1910300">strings</span> <span
  m="1910830">that</span> <span m="1911010">created</span> <span
  m="1911380">the</span> <span m="1911440">hashes,</span> <span
  m="1912180">namely</span> <span m="1912500">x</span> <span
  m="1912700">and</span> <span m="1912780">x</span> <span
  m="1912920">prime,</span> <span m="1913850">OK?</span> <span
  m="1914390">That's</span> <span m="1914690">what</span> <span
  m="1914900">malleability</span> <span m="1915490">is,</span> <span
  m="1916310">right?</span> <span m="1917330">Now</span> <span
  m="1918360">you</span> <span m="1918530">might</span> <span
  m="1918970">just</span> <span m="1919300">go</span> <span
  m="1919440">off</span> <span m="1919740">and</span> <span
  m="1919900">say</span> <span m="1920610">here's</span> <span
  m="1920930">an</span> <span m="1921040">x,</span> <span
  m="1921950">here's</span> <span m="1922160">a</span> <span
  m="1922300">y,</span> <span m="1923440">here's</span> <span
  m="1923760">h</span> <span m="1923980">of</span> <span m="1924140">x,</span>
  <span m="1925450">and</span> <span m="1925640">here's</span> <span
  m="1925910">h</span> <span m="1926120">of</span> <span m="1926540">y.</span>
  <span m="1927700">These</span> <span m="1927960">look</span> <span
  m="1928130">completely</span> <span m="1928590">random.</span> <span
  m="1929620">And</span> <span m="1929870">you</span> <span
  m="1929960">might</span> <span m="1930150">go</span> <span
  m="1930270">off--</span> <span m="1931220">I'm</span> <span
  m="1931280">being</span> <span m="1931500">facetious</span> <span
  m="1931990">here--</span> <span m="1932770">I</span> <span
  m="1932890">say</span> <span m="1933090">that</span> <span
  m="1933570">y</span> <span m="1934000">is</span> <span m="1934720">x's</span>
  <span m="1935320">third</span> <span m="1935690">cousin's</span> <span
  m="1936610">roommate's</span> <span m="1937220">brother-in-law</span> <span
  m="1937890">or</span> <span m="1938030">something,</span> <span
  m="1938370">right?</span> <span m="1938600">I mean</span> <span
  m="1938750">just</span> <span m="1938920">make</span> <span
  m="1939240">something</span> <span m="1939610">up,</span> <span
  m="1939990">right?</span></p><p><span m="1940600">So</span> <span
  m="1941050">clearly</span> <span m="1941850">there's</span> <span
  m="1941950">got</span> <span m="1942120">to</span> <span m="1942180">be</span>
  <span m="1943410">a</span> <span m="1943950">strong,</span> <span
  m="1945350">precise</span> <span m="1945850">relationship</span> <span
  m="1946470">between</span> <span m="1946740">x</span> <span
  m="1946940">and</span> <span m="1947070">y.</span> <span m="1947780">If</span>
  <span m="1947950">in</span> <span m="1948070">fact</span> <span
  m="1948860">you</span> <span m="1949040">could</span> <span
  m="1949200">do</span> <span m="1949350">this</span> <span
  m="1949860">and</span> <span m="1950840">get</span> <span m="1951880">y</span>
  <span m="1952180">equals</span> <span m="1952470">x</span> <span
  m="1952650">plus</span> <span m="1952830">1,</span> <span
  m="1953920">that'd</span> <span m="1954250">be</span> <span
  m="1954360">a</span> <span m="1954400">problem,</span> <span
  m="1955120">right?</span> <span m="1956160">But</span> <span
  m="1956870">if</span> <span m="1957770">you</span> <span
  m="1958050">are--</span> <span m="1958420">and</span> <span
  m="1958540">then</span> <span m="1958640">you</span> <span
  m="1958730">can</span> <span m="1958840">do</span> <span
  m="1958940">this</span> <span m="1959130">sort</span> <span
  m="1959260">of</span> <span m="1959310">consistently</span> <span
  m="1959980">for</span> <span m="1960140">different</span> <span
  m="1961070">x's</span> <span m="1961440">and</span> <span
  m="1961550">y's,</span> <span m="1962110">that</span> <span
  m="1962280">would</span> <span m="1962400">absolutely</span> <span
  m="1962790">be</span> <span m="1962910">a</span> <span
  m="1962970">problem,</span> <span m="1963900">right?</span> <span
  m="1964980">But</span> <span m="1965920">what</span> <span
  m="1966110">you're</span> <span m="1966220">really</span> <span
  m="1966390">asking</span> <span m="1966690">for--</span> <span
  m="1967860">and</span> <span m="1968090">typically</span> <span
  m="1968440">when</span> <span m="1968620">you</span> <span
  m="1968730">want</span> <span m="1969020">non-malleability--</span> <span
  m="1970390">it's</span> <span m="1970710">things</span> <span
  m="1971030">where</span> <span m="1972660">you</span> <span
  m="1972880">have</span> <span m="1973130">auctions,</span> <span
  m="1973570">for</span> <span m="1973690">example,</span> <span
  m="1974570">where</span> <span m="1975000">you</span> <span
  m="1975130">are</span> <span m="1975180">to</span> <span m="1975230">be</span>
  <span m="1975340">careful</span> <span m="1975740">about</span> <span
  m="1977120">making</span> <span m="1977400">sure</span> <span
  m="1977760">that</span> <span m="1978050">you</span> <span
  m="1978140">don't</span> <span m="1978250">want</span> <span
  m="1978350">to</span> <span m="1978390">expose</span> <span
  m="1980400">your</span> <span m="1980610">bid.</span> <span
  m="1981320">And</span> <span m="1981480">so</span> <span
  m="1981590">maybe</span> <span m="1981890">what</span> <span
  m="1982050">you're</span> <span m="1982140">doing</span> <span
  m="1982490">is</span> <span m="1982800">exposing</span> <span
  m="1983410">h</span> <span m="1983630">of</span> <span
  m="1983750">x.</span></p><p><span m="1984700">You</span> <span
  m="1984860">don't</span> <span m="1985060">want</span> <span
  m="1985380">somebody</span> <span m="1986590">to</span> <span
  m="1987240">look</span> <span m="1987480">at your</span> <span
  m="1987680">h</span> <span m="1987910">of</span> <span m="1988040">x</span>
  <span m="1988960">and</span> <span m="1989320">figure</span> <span
  m="1989600">out</span> <span m="1989720">how</span> <span
  m="1989870">they</span> <span m="1989970">could</span> <span
  m="1990140">beat</span> <span m="1990420">your</span> <span
  m="1990620">bid</span> <span m="1991560">by</span> <span
  m="1991700">just</span> <span m="1991960">a</span> <span
  m="1992000">little</span> <span m="1992270">bit.</span> <span
  m="1993540">Or</span> <span m="1994210">in</span> <span
  m="1994400">case</span> <span m="1994640">of</span> <span
  m="1994770">Vickrey</span> <span m="1994880">auctions,</span> <span
  m="1995500">where</span> <span m="1995620">the</span> <span
  m="1995740">second</span> <span m="1996490">highest</span> <span
  m="1996840">bidder</span> <span m="1997140">wins,</span> <span
  m="1997950">now</span> <span m="1998070">just</span> <span
  m="1998400">be</span> <span m="1998670">a</span> <span
  m="1998720">little</span> <span m="1998840">bit</span> <span
  m="1998990">below</span> <span m="1999210">you,</span> <span
  m="1999660">right?</span> <span m="2000190">So</span> <span
  m="2000330">that's</span> <span m="2000550">the</span> <span
  m="2000640">kind</span> <span m="2000950">of</span> <span
  m="2001060">thing</span> <span m="2001300">that</span> <span
  m="2001420">you</span> <span m="2001530">want</span> <span
  m="2001650">to</span> <span m="2001690">think</span> <span
  m="2001860">about</span> <span m="2002170">when</span> <span
  m="2002280">it</span> <span m="2002370">comes</span> <span
  m="2002630">to</span> <span m="2003310">non-malleability,</span> <span
  m="2005110">or</span> <span m="2005290">malleability,</span> <span
  m="2006260">where</span> <span m="2006630">you</span> <span
  m="2006790">want</span> <span m="2007130">a</span> <span
  m="2007190">strong</span> <span m="2007670">relationship</span> <span
  m="2008880">between</span> <span m="2009670">two</span> <span
  m="2010100">strings</span> <span m="2011360">that</span> <span
  m="2011600">are</span> <span m="2011820">related</span> <span
  m="2012300">in</span> <span m="2012450">some</span> <span
  m="2013020">ordered</span> <span m="2013410">fashion,</span> <span
  m="2014190">like</span> <span m="2014380">x</span> <span
  m="2014560">equals--</span> <span m="2015110">x</span> <span
  m="2015310">prime</span> <span m="2015510">equals</span> <span
  m="2015760">x</span> <span m="2015910">plus</span> <span m="2016070">1,</span>
  <span m="2016650">or</span> <span m="2016740">just</span> <span
  m="2017180">x</span> <span m="2017360">prime</span> <span
  m="2017570">equals</span> <span m="2017840">2</span> <span
  m="2017980">times</span> <span m="2018260">x.</span></p><p><span
  m="2018950">And</span> <span m="2019380">you</span> <span
  m="2019530">don't</span> <span m="2019650">want</span> <span
  m="2019750">to</span> <span m="2019790">be</span> <span
  m="2019960">able</span> <span m="2020270">to--</span> <span
  m="2022930">you</span> <span m="2023040">don't</span> <span
  m="2023150">want</span> <span m="2023260">the</span> <span
  m="2023430">adversary</span> <span m="2023840">to</span> <span
  m="2023920">be</span> <span m="2024050">able</span> <span
  m="2024310">to</span> <span m="2024890">discover</span> <span
  m="2025350">these</span> <span m="2026250">new</span> <span
  m="2026820">strings.</span> <span m="2027670">Because</span> <span
  m="2027920">that</span> <span m="2028090">would</span> <span
  m="2028430">be</span> <span m="2028650">the</span> <span
  m="2028810">system,</span> <span m="2029630">all</span> <span
  m="2029710">right?</span> <span m="2031440">So</span> <span
  m="2032530">any</span> <span m="2032670">questions</span> <span
  m="2033010">about</span> <span m="2033920">properties?</span> <span
  m="2035580">Are we</span> <span m="2035680">all</span> <span
  m="2035820">good</span> <span m="2036300">on</span> <span
  m="2036460">these</span> <span m="2036600">properties?</span> <span
  m="2037620">All right,</span> <span m="2038540">because</span> <span
  m="2038870">I'm</span> <span m="2038960">going</span> <span
  m="2039060">to</span> <span m="2039110">start</span> <span
  m="2039310">asking</span> <span m="2039660">you</span> <span
  m="2039840">how</span> <span m="2039980">to</span> <span
  m="2040040">use</span> <span m="2040350">them</span> <span
  m="2041030">for</span> <span m="2041850">particular</span> <span
  m="2042220">applications,</span> <span m="2043010">or</span> <span
  m="2043140">what</span> <span m="2043730">properties</span> <span
  m="2044140">are</span> <span m="2044210">required</span> <span
  m="2045280">for</span> <span m="2045590">certain</span> <span
  m="2045860">applications,</span> <span m="2046940">OK?</span></p><p><span
  m="2049170">One</span> <span m="2049389">last</span> <span
  m="2049639">thing</span> <span m="2049820">before</span> <span
  m="2050040">we</span> <span m="2050159">get</span> <span
  m="2050340">there.</span> <span m="2051150">I</span> <span
  m="2051310">promised</span> <span m="2051790">a</span> <span
  m="2053139">slightly</span> <span m="2053639">more</span> <span
  m="2054170">detailed</span> <span m="2055860">analysis</span> <span
  m="2056960">of</span> <span m="2057159">the</span> <span
  m="2057239">relationships</span> <span m="2058420">between</span> <span
  m="2058739">these</span> <span m="2058929">properties.</span> <span
  m="2060170">So</span> <span m="2060230">let's</span> <span
  m="2060460">do</span> <span m="2060560">that.</span> <span
  m="2064810">Now</span> <span m="2065030">if your</span> <span
  m="2065179">just</span> <span m="2065400">look</span> <span
  m="2065570">at</span> <span m="2065770">it,</span> <span
  m="2066090">eyeball</span> <span m="2066580">it,</span> <span
  m="2067830">and</span> <span m="2068260">you</span> <span
  m="2068420">look</span> <span m="2068570">at</span> <span
  m="2068690">collision</span> <span m="2069139">resistance</span> <span
  m="2071100">and</span> <span m="2073670">TCR,</span> <span
  m="2075010">what</span> <span m="2075190">can</span> <span
  m="2075310">I</span> <span m="2075370">say</span> <span
  m="2075580">about</span> <span m="2075770">the</span> <span
  m="2075850">relationship</span> <span m="2076429">between</span> <span
  m="2077199">CR</span> <span m="2077953">and</span> <span
  m="2078330">TCR?</span> <span m="2080820">If</span> <span m="2080989">h</span>
  <span m="2081270">is</span> <span m="2081380">CR,</span> <span
  m="2083679">it's</span> <span m="2084370">going</span> <span
  m="2084480">to</span> <span m="2084520">be</span> <span
  m="2084610">TCR,</span> <span m="2085480">right?</span> <span
  m="2085989">It's</span> <span m="2086469">got to be TCR.</span> <span
  m="2086744">It's a</span> <span m="2087020">strictly</span> <span
  m="2087449">stronger</span> <span m="2088420">requirement.</span></p><p><span
  m="2094659">But</span> <span m="2094889">not</span> <span
  m="2095100">reverse.</span> <span m="2097940">And</span> <span
  m="2099580">you</span> <span m="2099720">can</span> <span
  m="2099840">actually</span> <span m="2100810">give</span> <span
  m="2100960">a</span> <span m="2101020">concrete</span> <span
  m="2101400">example</span> <span m="2104230">of</span> <span
  m="2104390">a</span> <span m="2104450">particular</span> <span
  m="2104810">hash</span> <span m="2105050">function</span> <span
  m="2106090">that</span> <span m="2106390">is</span> <span
  m="2106540">TCR.</span> <span m="2107570">I'm</span> <span m="2107640">not
  going</span> <span m="2107730">to</span> <span m="2107770">go</span> <span
  m="2107920">there.</span> <span m="2108160">It's</span> <span
  m="2108520">actually</span> <span m="2108730">a</span> <span
  m="2108770">little</span> <span m="2108930">more</span> <span
  m="2109090">involved</span> <span m="2109500">than</span> <span
  m="2109590">you</span> <span m="2109680">might</span> <span
  m="2109900">think</span> <span m="2110080">it</span> <span
  m="2110180">is,</span> <span m="2110810">where</span> <span
  m="2111170">a</span> <span m="2111370">TCR</span> <span
  m="2112020">hash</span> <span m="2112260">function</span> <span
  m="2112660">is</span> <span m="2112780">not</span> <span
  m="2113150">collision</span> <span m="2113550">resistant.</span> <span
  m="2114430">But</span> <span m="2114620">you</span> <span
  m="2114720">can</span> <span m="2114830">see</span> <span
  m="2115160">that</span> <span m="2116220">examples</span> <span
  m="2116670">such</span> <span m="2116840">as</span> <span
  m="2116960">these</span> <span m="2117180">should</span> <span
  m="2117360">exist,</span> <span m="2118020">simply</span> <span
  m="2118310">because</span> <span m="2118860">I</span> <span
  m="2118990">have</span> <span m="2119080">a</span> <span
  m="2119130">more</span> <span m="2119320">stringent</span> <span
  m="2119760">property</span> <span m="2120340">corresponding</span> <span
  m="2120790">to</span> <span m="2121090">collision</span> <span
  m="2121410">resistance</span> <span m="2122280">as</span> <span
  m="2122470">opposed</span> <span m="2122750">to</span> <span
  m="2122860">TCR,</span> <span m="2123900">right?</span></p><p><span
  m="2124680">So</span> <span m="2125070">if</span> <span
  m="2125210">you're</span> <span m="2125330">interested</span> <span
  m="2125620">in</span> <span m="2125940">that</span> <span
  m="2126260">particular</span> <span m="2126520">example,</span> <span
  m="2127170">you're</span> <span m="2127290">not</span> <span
  m="2127430">responsible</span> <span m="2127900">for</span> <span
  m="2128290">it,</span> <span m="2129100">get</span> <span
  m="2129260">in</span> <span m="2129330">touch</span> <span
  m="2129520">with</span> <span m="2129630">me</span> <span
  m="2129780">and</span> <span m="2129880">I'll</span> <span
  m="2130240">point</span> <span m="2130480">you</span> <span
  m="2130745">to</span> <span m="2131640">a, like a</span> <span
  m="2131750">three-page</span> <span m="2132230">description</span> <span
  m="2132545">of</span> <span m="2133080">an</span> <span
  m="2133330">example.</span> <span m="2134180">So I didn't</span> <span
  m="2134540">really</span> <span m="2134720">want</span> <span
  m="2134880">to</span> <span m="2134930">go</span> <span m="2135100">in</span>
  <span m="2135200">there.</span> <span m="2135930">But</span> <span
  m="2136680">what</span> <span m="2136820">I</span> <span m="2136870">do</span>
  <span m="2137030">want</span> <span m="2137160">to</span> <span
  m="2137230">do</span> <span m="2137560">is</span> <span
  m="2138060">talk</span> <span m="2138260">about</span> <span
  m="2138460">one-wayness</span> <span m="2139580">and</span> <span
  m="2139790">collision</span> <span m="2140170">resistance.</span> <span
  m="2140820">Because</span> <span m="2141060">I</span> <span
  m="2141140">think</span> <span m="2141290">that's</span> <span
  m="2141510">actually</span> <span m="2141780">much</span> <span
  m="2141990">more</span> <span m="2142190">interesting,</span> <span
  m="2142860">all</span> <span m="2143220">right?</span></p><p><span
  m="2143720">So</span> <span m="2145330">if</span> <span m="2145640">h</span>
  <span m="2146850">is</span> <span m="2147050">one-way--</span> <span
  m="2157390">any</span> <span m="2157620">conjectures</span> <span
  m="2159060">as</span> <span m="2159290">to</span> <span
  m="2159400">what</span> <span m="2159610">the</span> <span
  m="2159700">question</span> <span m="2160060">mark</span> <span
  m="2160330">is</span> <span m="2161450">in</span> <span m="2161630">the</span>
  <span m="2161700">middle?</span> <span m="2163370">Can</span> <span
  m="2163530">I</span> <span m="2163600">make</span> <span
  m="2164150">strong</span> <span m="2164770">statements</span> <span
  m="2166180">about</span> <span m="2166810">the</span> <span
  m="2166930">collision</span> <span m="2167420">resistance</span> <span
  m="2167950">of</span> <span m="2168050">a</span> <span m="2168090">hash</span>
  <span m="2168370">function,</span> <span m="2169230">if</span> <span
  m="2169440">I'm</span> <span m="2169590">guaranteed</span> <span
  m="2170430">that</span> <span m="2170560">the</span> <span
  m="2170630">hash</span> <span m="2170860">function</span> <span
  m="2171230">I</span> <span m="2171320">have</span> <span m="2172120">is</span>
  <span m="2172280">a</span> <span m="2172340">one-way</span> <span
  m="2172700">hash</span> <span m="2172940">function,</span> <span
  m="2174010">or</span> <span m="2174260">vice</span> <span
  m="2174460">versa?</span> <span m="2180960">Another</span> <span
  m="2181200">way</span> <span m="2181300">of</span> <span
  m="2181380">putting</span> <span m="2181610">it</span> <span
  m="2181720">is,</span> <span m="2182820">can</span> <span
  m="2183000">you</span> <span m="2183080">give</span> <span
  m="2183210">me</span> <span m="2183330">an</span> <span
  m="2183400">example</span> <span m="2184720">of,</span> <span
  m="2185640">just</span> <span m="2185820">to</span> <span
  m="2185900">start</span> <span m="2186190">with,</span> <span
  m="2188970">a</span> <span m="2189060">hash</span> <span
  m="2189330">function</span> <span m="2190400">which</span> <span
  m="2190610">is</span> <span m="2190720">one-way</span> <span
  m="2192120">but</span> <span m="2192610">not</span> <span
  m="2194000">TCR,</span> <span m="2194730">not</span> <span
  m="2195160">target</span> <span m="2195530">collision</span> <span
  m="2195880">resistant?</span></p><p><span m="2200520">So</span> <span
  m="2201190">I'm</span> <span m="2201350">going</span> <span
  m="2201460">to</span> <span m="2202150">try</span> <span
  m="2202330">and</span> <span m="2202390">extract</span> <span
  m="2202800">this</span> <span m="2202980">out of</span> <span
  m="2203210">you.</span> <span m="2203540">This</span> <span
  m="2203690">is</span> <span m="2205560">somewhat</span> <span
  m="2205970">subtle.</span> <span m="2206870">But</span> <span
  m="2207020">the</span> <span m="2207090">way</span> <span
  m="2207240">you</span> <span m="2207330">want</span> <span
  m="2207440">to</span> <span m="2207490">think</span> <span
  m="2207670">about</span> <span m="2207950">this</span> <span
  m="2208990">is,</span> <span m="2209200">let's</span> <span
  m="2209530">say</span> <span m="2211010">that</span> <span
  m="2211490">h</span> <span m="2211750">of</span> <span m="2211880">x</span>
  <span m="2213610">is</span> <span m="2214250">OW</span> <span
  m="2215250">and</span> <span m="2216250">TCR,</span> <span
  m="2217610">OK?</span> <span m="2219260">And</span> <span
  m="2219970">so</span> <span m="2220130">I</span> <span m="2220240">have</span>
  <span m="2220400">a</span> <span m="2220450">bunch</span> <span
  m="2220670">of</span> <span m="2220780">inputs.</span> <span
  m="2222660">And</span> <span m="2222870">this</span> <span
  m="2223000">is</span> <span m="2223090">the</span> <span
  m="2223160">output.</span> <span m="2223660">And</span> <span
  m="2223790">I</span> <span m="2223850">get</span> <span
  m="2224090">d-bits</span> <span m="2224530">out.</span> <span m="2226160">And
  I've got</span> <span m="2226330">x1,</span> <span m="2227870">x2,</span>
  <span m="2228890">to</span> <span m="2229050">xn,</span> <span
  m="2230410">OK?</span></p><p><span m="2232010">Now</span> <span
  m="2233080">I've</span> <span m="2233260">given</span> <span
  m="2233880">this</span> <span m="2234140">h--</span> <span
  m="2234830">I've</span> <span m="2234930">been</span> <span
  m="2235060">given</span> <span m="2235240">this</span> <span
  m="2235400">h</span> <span m="2236430">which</span> <span
  m="2236620">is</span> <span m="2236770">one-way</span> <span
  m="2237180">and</span> <span m="2237510">TCR.</span> <span
  m="2238240">It</span> <span m="2238520">satisfies</span> <span
  m="2239050">those</span> <span m="2239210">properties</span> <span
  m="2239640">that</span> <span m="2239740">you</span> <span
  m="2239820">have</span> <span m="2240020">up</span> <span
  m="2240150">there.</span> <span m="2240960">In the</span> <span
  m="2241040">case</span> <span m="2241160">of</span> <span
  m="2241230">one-way,</span> <span m="2241450">I</span> <span
  m="2241880">give</span> <span m="2242350">you an</span> <span
  m="2242490">arbitrary</span> <span m="2243220">d-bit</span> <span
  m="2243720">string.</span> <span m="2244590">You</span> <span
  m="2244690">can't</span> <span m="2244910">go</span> <span
  m="2245050">backwards</span> <span m="2246010">and</span> <span
  m="2246190">find</span> <span m="2247090">a</span> <span
  m="2247200">bunch</span> <span m="2247440">of</span> <span
  m="2247520">the</span> <span m="2247630">xi's</span> <span
  m="2248630">that</span> <span m="2248770">produce</span> <span
  m="2249230">exactly</span> <span m="2249760">that</span> <span
  m="2249970">d-bit</span> <span m="2250090">string,</span> <span
  m="2251015">all</span> <span m="2251360">right?</span> <span
  m="2254150">So</span> <span m="2254340">it's</span> <span
  m="2254490">going</span> <span m="2254610">to</span> <span
  m="2254670">be</span> <span m="2254790">hard</span> <span
  m="2255040">to</span> <span m="2255110">get</span> <span
  m="2255310">here.</span></p><p><span m="2256530">But</span> <span
  m="2256980">you're</span> <span m="2257100">allowed</span> <span
  m="2257520">now</span> <span m="2258400">to</span> <span
  m="2258530">give</span> <span m="2258660">me</span> <span
  m="2258790">an</span> <span m="2258850">example.</span> <span
  m="2260380">So</span> <span m="2261230">this</span> <span
  m="2261440">is</span> <span m="2262820">some</span> <span
  m="2263020">hash</span> <span m="2263290">function</span> <span
  m="2263740">that</span> <span m="2263890">you</span> <span
  m="2264040">can</span> <span m="2264260">create,</span> <span
  m="2265390">which</span> <span m="2265760">may</span> <span
  m="2266470">use</span> <span m="2266870">h as</span> <span
  m="2267300">well.</span> <span m="2268300">And</span> <span
  m="2268580">h</span> <span m="2268730">is</span> <span m="2268900">kind</span>
  <span m="2269030">of</span> <span m="2269100">nice</span> <span
  m="2269480">because</span> <span m="2269800">it</span> <span m="2269900">has
  this</span> <span m="2270400">one-way</span> <span
  m="2270750">property.</span> <span m="2271780">So</span> <span
  m="2271810">let's</span> <span m="2271990">say</span> <span
  m="2272120">that</span> <span m="2272270">we</span> <span
  m="2272370">want</span> <span m="2272560">to</span> <span
  m="2272680">discover</span> <span m="2273190">something</span> <span
  m="2274130">where</span> <span m="2275030">one-way</span> <span
  m="2276310">does</span> <span m="2276610">not</span> <span
  m="2276900">imply</span> <span m="2278080">TCR.</span> <span
  m="2279080">So</span> <span m="2279210">I</span> <span m="2279290">want</span>
  <span m="2279440">to</span> <span m="2279730">cook</span> <span
  m="2279950">up</span> <span m="2280110">a</span> <span m="2280170">hash</span>
  <span m="2280440">function</span> <span m="2280980">h</span> <span
  m="2281300">prime</span> <span m="2283110">such</span> <span
  m="2283490">that</span> <span m="2284370">h</span> <span
  m="2284690">prime</span> <span m="2285170">is</span> <span
  m="2285290">one-way,</span> <span m="2286320">but</span> <span
  m="2286470">it's</span> <span m="2286620">not</span> <span
  m="2287010">TCR,</span> <span m="2288550">OK?</span></p><p><span
  m="2289550">The</span> <span m="2289720">way</span> <span
  m="2289910">you</span> <span m="2289940">want</span> <span
  m="2290080">to</span> <span m="2290130">think</span> <span
  m="2290290">about</span> <span m="2290540">this</span> <span
  m="2290740">is</span> <span m="2291070">you</span> <span
  m="2291180">want</span> <span m="2291280">to</span> <span m="2291660">add
  to</span> <span m="2291960">h.</span> <span m="2293610">And</span> <span
  m="2294000">you</span> <span m="2294100">want</span> <span
  m="2294180">to</span> <span m="2294220">add</span> <span
  m="2294460">something</span> <span m="2294860">to</span> <span
  m="2294940">h</span> <span m="2295230">such</span> <span
  m="2295480">that</span> <span m="2295790">it's</span> <span
  m="2295960">still</span> <span m="2296250">hard--</span> <span
  m="2296790">if</span> <span m="2296860">you</span> <span
  m="2296930">add</span> <span m="2297320">h</span> <span
  m="2298110">it's</span> <span m="2298250">still</span> <span
  m="2298560">hard</span> <span m="2298960">to</span> <span
  m="2299030">go</span> <span m="2299240">from</span> <span
  m="2299450">here</span> <span m="2299700">to</span> <span
  m="2299770">there.</span> <span m="2300460">Because</span> <span
  m="2300600">you've</span> <span m="2300680">got</span> <span
  m="2300770">to</span> <span m="2300810">go</span> <span
  m="2300930">deeper.</span> <span m="2301680">If</span> <span
  m="2301700">you</span> <span m="2301790">add</span> <span
  m="2302100">to,</span> <span m="2302280">for</span> <span
  m="2302430">example,</span> <span m="2302780">the</span> <span
  m="2302850">inputs</span> <span m="2303210">of</span> <span
  m="2303320">h.</span> <span m="2303760">Or you</span> <span
  m="2304060">could</span> <span m="2304390">add to the outputs</span> <span
  m="2304860">of</span> <span m="2304960">h</span> <span m="2305290">as</span>
  <span m="2305450">well,</span> <span m="2306170">or the</span> <span
  m="2306390">outputs of</span> <span m="2306670">the</span> <span
  m="2306780">current</span> <span m="2307060">h.</span></p><p><span
  m="2307730">But</span> <span m="2308540">you</span> <span
  m="2308730">can</span> <span m="2309490">basically</span> <span
  m="2310120">go</span> <span m="2311830">deeper,</span> <span
  m="2312610">or</span> <span m="2312710">need</span> <span
  m="2312960">to</span> <span m="2313020">go</span> <span
  m="2313150">deeper</span> <span m="2314330">in</span> <span
  m="2314510">order</span> <span m="2314670">to</span> <span
  m="2314970">find</span> <span m="2316560">the</span> <span
  m="2318200">break</span> <span m="2318430">one-wayness,</span> <span
  m="2319190">in</span> <span m="2319480">order</span> <span
  m="2319580">to</span> <span m="2319670">find</span> <span
  m="2320120">an</span> <span m="2320580">x,</span> <span
  m="2321610">whatever</span> <span m="2321900">you</span> <span
  m="2322030">have,</span> <span m="2322460">that</span> <span
  m="2322660">produces</span> <span m="2323130">the d-bit</span> <span
  m="2323560">string</span> <span m="2323820">that</span> <span
  m="2323940">you</span> <span m="2324030">have,</span> <span
  m="2324710">right?</span> <span m="2324910">So</span> <span
  m="2325010">what's</span> <span m="2325260">a</span> <span
  m="2325320">simple</span> <span m="2325770">way</span> <span
  m="2326610">of</span> <span m="2326780">creating</span> <span
  m="2327140">an</span> <span m="2327250">h</span> <span
  m="2327540">prime</span> <span m="2328650">such</span> <span
  m="2328990">that</span> <span m="2329690">it's</span> <span
  m="2329850">going</span> <span m="2329950">to</span> <span
  m="2329990">be</span> <span m="2330090">pretty</span> <span
  m="2330430">easy</span> <span m="2331240">to</span> <span
  m="2331320">find</span> <span m="2331690">targeted</span> <span
  m="2332340">collisions</span> <span m="2333080">even,</span> <span
  m="2333700">not</span> <span m="2333860">necessarily</span> <span
  m="2334320">collisions,</span> <span m="2335250">it's</span> <span
  m="2335380">pretty</span> <span m="2335600">easy</span> <span
  m="2335810">to</span> <span m="2335880">find</span> <span
  m="2336150">targeted</span> <span m="2336650">collisions,</span> <span
  m="2337440">without</span> <span m="2337840">breaking</span> <span
  m="2338740">the</span> <span m="2338860">one-way</span> <span
  m="2339220">property</span> <span m="2339650">of</span> <span
  m="2339760">h?</span> <span m="2343785">Yeah?</span></p><p><span
  m="2345264">AUDIENCE: So</span> <span m="2345757">if you</span> <span
  m="2346250">have</span> <span m="2346743">x</span> <span m="2347236">sub
  i,</span> <span m="2348715">if</span> <span m="2349208">i</span> <span
  m="2350687">odd</span> <span m="2351180">then</span> <span
  m="2351673">return</span> <span m="2352166">h</span> <span
  m="2352659">of</span> <span m="2353152">x</span> <span m="2353645">of</span>
  <span m="2354138">i.</span> <span m="2354631">So</span> <span
  m="2355124">that's</span> <span m="2355617">minus</span> <span
  m="2356110">1.</span> <span m="2356603">So</span> <span m="2357096">return
  the</span> <span m="2357589">even</span> <span
  m="2358082">group.</span></p><p><span m="2359080">SRINIVAS DEVADAS:
  Sure.</span> <span m="2359510">Yep.</span></p><p><span
  m="2361004">AUDIENCE:</span> <span m="2361502">Given x</span> <span
  m="2362000">any</span> <span m="2362498">x</span> <span m="2362996">of</span>
  <span m="2363494">i,</span> <span m="2363992">you can</span> <span
  m="2364490">usually find</span> <span m="2364988">another</span> <span
  m="2365486">x of i</span> <span m="2365984">that was</span> <span
  m="2366482">the same</span> <span m="2366980">output?</span> <span
  m="2367478">You can</span> <span m="2367976">go</span> <span
  m="2368474">backwards.</span></p><p><span m="2368980">SRINIVAS DEVADAS:
  You</span> <span m="2369120">can't</span> <span m="2369180">go</span> <span
  m="2369330">backwards.</span> <span m="2369700">Yeah,</span> <span
  m="2369980">that's</span> <span m="2370160">good.</span> <span
  m="2370500">That's</span> <span m="2370670">good.</span> <span
  m="2371450">I'm</span> <span m="2371630">going</span> <span
  m="2371760">to</span> <span m="2371830">do</span> <span
  m="2372520">something</span> <span m="2372800">that's</span> <span
  m="2373160">almost</span> <span m="2373430">exactly</span> <span
  m="2373800">what</span> <span m="2373930">you</span> <span
  m="2374010">said.</span> <span m="2374660">But</span> <span
  m="2374760">I'm</span> <span m="2374830">going</span> <span
  m="2374920">to</span> <span m="2374980">draw it</span> <span
  m="2375270">pictorially.</span></p><p><span m="2378270">And</span> <span
  m="2379200">what</span> <span m="2379450">you</span> <span
  m="2379550">can</span> <span m="2379650">do,</span> <span
  m="2380260">you</span> <span m="2380400">can do</span> <span
  m="2380530">a</span> <span m="2380620">parity,</span> <span
  m="2381680">like</span> <span m="2382190">odd and</span> <span
  m="2382490">even</span> <span m="2383000">that</span> <span
  m="2383120">was</span> <span m="2383260">just</span> <span
  m="2383440">described.</span> <span m="2387520">And</span> <span
  m="2388510">all I'll</span> <span m="2388670">do</span> <span
  m="2388880">is</span> <span m="2388990">add</span> <span m="2389270">a</span>
  <span m="2389330">little</span> <span m="2390510">[? XNOR ?]</span> <span
  m="2391440">gate,</span> <span m="2391770">which</span> <span
  m="2391890">is</span> <span m="2392010">a</span> <span
  m="2392270">parity</span> <span m="2392740">gate,</span> <span
  m="2393580">to</span> <span m="2393740">one</span> <span m="2393950">of</span>
  <span m="2394020">the</span> <span m="2394090">inputs.</span> <span
  m="2395240">So</span> <span m="2395360">you</span> <span
  m="2395450">have</span> <span m="2395630">and</span> <span
  m="2396130">b</span> <span m="2396370">here.</span> <span
  m="2396830">So</span> <span m="2396970">I've</span> <span
  m="2397090">taken</span> <span m="2397340">x1,</span> <span
  m="2398670">and</span> <span m="2398860">I</span> <span
  m="2398880">have</span> <span m="2399530">a</span> <span
  m="2399820">and</span> <span m="2400140">b</span> <span
  m="2400340">here.</span> <span m="2401010">So</span> <span
  m="2401990">I've</span> <span m="2402190">added--</span> <span
  m="2402840">I</span> <span m="2403030">can</span> <span m="2403160">add</span>
  <span m="2403720">as</span> <span m="2404040">many</span> <span
  m="2404400">inputs</span> <span m="2404560">as</span> <span
  m="2404670">I</span> <span m="2404740">want</span> <span m="2405100">to</span>
  <span m="2405160">this</span> <span m="2405340">function.</span></p><p><span
  m="2406190">Oh</span> <span m="2406330">I</span> <span
  m="2406430">should</span> <span m="2406620">mention</span> <span
  m="2406980">by</span> <span m="2407010">the</span> <span
  m="2407110">way,</span> <span m="2408060">h</span> <span m="2408310">of</span>
  <span m="2408440">x</span> <span m="2408830">is</span> <span
  m="2409000">working</span> <span m="2409330">on</span> <span
  m="2409500">arbitrary</span> <span m="2410170">strings.</span> <span
  m="2411290">And</span> <span m="2411610">obviously</span> <span
  m="2411980">I</span> <span m="2412040">put</span> <span m="2412240">in</span>
  <span m="2412930">some</span> <span m="2413300">number</span> <span
  m="2413630">here</span> <span m="2413840">that</span> <span
  m="2414080">corresponds</span> <span m="2414730">to</span> <span
  m="2414890">n,</span> <span m="2415400">which</span> <span
  m="2415530">is</span> <span m="2415650">a</span> <span
  m="2415730">fixed</span> <span m="2416090">number.</span> <span
  m="2416890">So</span> <span m="2416910">you</span> <span
  m="2417020">might</span> <span m="2417190">ask,</span> <span
  m="2417520">what</span> <span m="2417880">the</span> <span
  m="2417950">heck</span> <span m="2418130">happened</span> <span
  m="2418460">here</span> <span m="2418740">with</span> <span
  m="2418890">respect</span> <span m="2419190">to</span> <span
  m="2419280">arbitrary</span> <span m="2419800">strings?</span> <span
  m="2420610">And</span> <span m="2420770">there's</span> <span
  m="2420950">two</span> <span m="2421300">answers.</span></p><p><span
  m="2422570">The</span> <span m="2422660">first</span> <span
  m="2422880">answer</span> <span m="2423150">is,</span> <span
  m="2423530">well,</span> <span m="2423840">ignore</span> <span
  m="2424240">arbitrary.</span> <span m="2425000">And</span> <span
  m="2425320">assume</span> <span m="2425650">that</span> <span
  m="2426140">you</span> <span m="2426300">only</span> <span
  m="2426430">have</span> <span m="2426610">n-bit</span> <span
  m="2426960">strings.</span> <span m="2427350">And</span> <span
  m="2427460">n</span> <span m="2427620">this</span> <span m="2427740">is</span>
  <span m="2427900">really</span> <span m="2428100">large</span> <span
  m="2428400">number,</span> <span m="2428920">right?</span> <span
  m="2429370">And</span> <span m="2429490">that</span> <span
  m="2429600">may</span> <span m="2429690">not</span> <span
  m="2429850">be</span> <span m="2430010">particularly</span> <span
  m="2430430">satisfying.</span></p><p><span m="2431500">The other</span> <span
  m="2431750">answer</span> <span m="2432060">is,</span> <span
  m="2432780">which</span> <span m="2432990">is</span> <span
  m="2433260">more</span> <span m="2433490">practical,</span> <span
  m="2434220">which</span> <span m="2434340">is</span> <span
  m="2434430">what's</span> <span m="2434640">used</span> <span
  m="2434880">in</span> <span m="2434970">practice,</span> <span
  m="2435850">is</span> <span m="2436370">that</span> <span
  m="2436620">typically</span> <span m="2436970">what</span> <span
  m="2437120">happens</span> <span m="2437510">is,</span> <span
  m="2438140">you</span> <span m="2438300">do</span> <span
  m="2438550">have</span> <span m="2439850">particular</span> <span
  m="2440330">implementations</span> <span m="2441000">of</span> <span
  m="2441090">hash</span> <span m="2441310">functions</span> <span
  m="2442090">that</span> <span m="2442210">obviously</span> <span
  m="2442740">need</span> <span m="2442920">to</span> <span
  m="2442980">have</span> <span m="2443180">fixed</span> <span
  m="2443700">inputs,</span> <span m="2445210">n,</span> <span
  m="2445500">for</span> <span m="2445600">example.</span> <span
  m="2446440">And</span> <span m="2446800">n</span> <span m="2447010">is</span>
  <span m="2447130">typically</span> <span m="2447460">512.</span> <span
  m="2448110">It's</span> <span m="2448220">usually</span> <span
  m="2448550">the</span> <span m="2448650">block</span> <span
  m="2448980">size.</span> <span m="2449680">And</span> <span
  m="2449800">you</span> <span m="2449900">chunk</span> <span
  m="2450240">the</span> <span m="2450320">input</span> <span
  m="2450650">up</span> <span m="2451300">into</span> <span
  m="2451380">five</span> <span m="2451760">12-bit</span> <span
  m="2452140">blocks.</span></p><p><span m="2452940">And</span> <span
  m="2453390">typically</span> <span m="2453760">what</span> <span
  m="2453910">you</span> <span m="2453990">do</span> <span
  m="2454200">is,</span> <span m="2454670">you</span> <span
  m="2454770">take</span> <span m="2454920">the</span> <span
  m="2455000">first</span> <span m="2455380">five 12-bits,</span> <span
  m="2456220">compute</span> <span m="2456520">the</span> <span
  m="2456590">hash</span> <span m="2456880">for</span> <span
  m="2457150">it.</span> <span m="2457800">And</span> <span
  m="2457990">then</span> <span m="2459430">you</span> <span
  m="2461040">can</span> <span m="2461140">do</span> <span m="2461270">it</span>
  <span m="2461370">for</span> <span m="2461450">the</span> <span
  m="2461570">remaining</span> <span m="2461930">blocks.</span> <span
  m="2462570">And</span> <span m="2462680">then</span> <span
  m="2462750">you</span> <span m="2462840">can</span> <span
  m="2462940">hash</span> <span m="2463150">all of</span> <span
  m="2463420">them</span> <span m="2463540">together,</span> <span
  m="2463815">all right?</span> <span m="2464530">So</span> <span
  m="2464630">there's</span> <span m="2464950">typically</span> <span
  m="2465440">more</span> <span m="2465750">invocations.</span> <span
  m="2466880">I</span> <span m="2466970">don't</span> <span
  m="2467120">really</span> <span m="2467290">want</span> <span
  m="2467450">to</span> <span m="2467490">get</span> <span
  m="2467640">into</span> <span m="2467860">it.</span> <span
  m="2468330">But</span> <span m="2468520">there's</span> <span
  m="2468690">typically</span> <span m="2469040">more</span> <span
  m="2469310">invocations</span> <span m="2470440">of</span> <span
  m="2470600">h</span> <span m="2471370">when</span> <span
  m="2471960">the</span> <span m="2472040">input</span> <span
  m="2472540">would</span> <span m="2472670">be</span> <span
  m="2472840">2</span> <span m="2473080">times</span> <span
  m="2473410">n,</span> <span m="2474330">or</span> <span m="2474460">3</span>
  <span m="2474680">times</span> <span m="2474980">n,</span> <span
  m="2475230">all right?</span></p><p><span m="2475600">So</span> <span
  m="2475980">we</span> <span m="2476230">don't</span> <span
  m="2476360">really</span> <span m="2476510">need</span> <span
  m="2476660">to</span> <span m="2476710">go</span> <span
  m="2476860">there</span> <span m="2477410">for</span> <span
  m="2477560">the</span> <span m="2477640">purposes</span> <span
  m="2478010">of</span> <span m="2478130">this</span> <span
  m="2478270">lecture.</span> <span m="2478960">But</span> <span
  m="2479110">keep</span> <span m="2479270">that</span> <span
  m="2479400">in</span> <span m="2479490">mind.</span> <span
  m="2480270">So</span> <span m="2480620">we'll</span> <span
  m="2480790">still</span> <span m="2481050">stick</span> <span
  m="2481320">with</span> <span m="2481500">our</span> <span
  m="2481660">arbitrary</span> <span m="2482140">string</span> <span
  m="2482510">requirement.</span></p><p><span m="2483750">So</span> <span
  m="2483900">having</span> <span m="2484130">said</span> <span
  m="2484350">that,</span> <span m="2484910">take</span> <span
  m="2485090">a</span> <span m="2485130">look</span> <span m="2485280">at</span>
  <span m="2485340">this</span> <span m="2485500">picture.</span> <span
  m="2486410">And</span> <span m="2487140">see</span> <span
  m="2487670">what</span> <span m="2488130">this</span> <span
  m="2488340">picture</span> <span m="2488630">implies.</span> <span
  m="2490190">I</span> <span m="2490310">have an</span> <span
  m="2490590">h</span> <span m="2490900">prime</span> <span
  m="2491320">that</span> <span m="2491460">I've</span> <span
  m="2491600">constructed,</span> <span m="2492910">right?</span> <span
  m="2493340">Now</span> <span m="2493730">if</span> <span m="2493850">I</span>
  <span m="2493910">look</span> <span m="2494090">at</span> <span
  m="2494170">h</span> <span m="2494470">prime,</span> <span
  m="2495410">and</span> <span m="2495610">I</span> <span
  m="2495870">give</span> <span m="2496190">you</span> <span
  m="2496720">an</span> <span m="2496900">output</span> <span
  m="2497420">for</span> <span m="2497610">h</span> <span
  m="2497860">prime--</span> <span m="2498135">so</span> <span
  m="2498410">h</span> <span m="2498630">prime</span> <span
  m="2498900">now</span> <span m="2499150">has,</span> <span
  m="2500270">it's</span> <span m="2500440">a</span> <span
  m="2500490">function</span> <span m="2500840">of a</span> <span
  m="2501020">and</span> <span m="2501480">b,</span> <span
  m="2502220">and</span> <span m="2502390">x2</span> <span
  m="2503520">all</span> <span m="2503710">the</span> <span
  m="2503780">way</span> <span m="2503910">to</span> <span
  m="2504000">xn,</span> <span m="2504500">right?</span> <span
  m="2505640">So</span> <span m="2506050">it's</span> <span
  m="2506240">got</span> <span m="2506380">an</span> <span
  m="2506450">extra</span> <span m="2506740">input.</span></p><p><span
  m="2507850">If</span> <span m="2507930">I</span> <span m="2507980">look</span>
  <span m="2508130">at</span> <span m="2508210">h</span> <span
  m="2508420">prime,</span> <span m="2508840">and</span> <span
  m="2508930">I</span> <span m="2508970">look</span> <span m="2509190">at</span>
  <span m="2509320">the</span> <span m="2509510">output</span> <span
  m="2509880">of</span> <span m="2509980">h</span> <span
  m="2510200">prime</span> <span m="2510500">that</span> <span
  m="2510630">is</span> <span m="2510740">given</span> <span
  m="2510980">to</span> <span m="2511100">me,</span> <span
  m="2511740">and</span> <span m="2511930">I</span> <span
  m="2512000">need</span> <span m="2512240">to</span> <span
  m="2512340">discover</span> <span m="2514840">something</span> <span
  m="2515310">that</span> <span m="2516280">produces</span> <span
  m="2516800">that,</span> <span m="2517460">it is</span> <span
  m="2517680">pretty</span> <span m="2517920">clear</span> <span
  m="2518760">that</span> <span m="2519290">I</span> <span
  m="2519460">need</span> <span m="2519710">to</span> <span
  m="2519790">figure</span> <span m="2520040">out</span> <span
  m="2520280">what</span> <span m="2520720">these</span> <span
  m="2521180">values</span> <span m="2521600">are,</span> <span
  m="2522205">all</span> <span m="2522540">right?</span> <span
  m="2523400">And</span> <span m="2524010">I</span> <span
  m="2524080">need</span> <span m="2524240">to</span> <span
  m="2524290">know</span> <span m="2524400">what</span> <span
  m="2524530">the</span> <span m="2524650">parity</span> <span m="2525440">of
  a</span> <span m="2525640">and</span> <span m="2525920">b</span> <span
  m="2526140">is.</span> <span m="2526930">And</span> <span
  m="2527620">maybe</span> <span m="2527880">I</span> <span
  m="2527920">don't</span> <span m="2528050">need</span> <span
  m="2528210">to</span> <span m="2528290">know</span> <span
  m="2528500">exactly</span> <span m="2528900">what</span> <span m="2529060">a
  and</span> <span m="2529280">b</span> <span m="2529460">are,</span> <span
  m="2529770">but I absolutely</span> <span m="2530220">need</span> <span
  m="2530400">to</span> <span m="2530460">know</span> <span
  m="2530580">what</span> <span m="2530700">the</span> <span
  m="2530780">parity</span> <span m="2531190">of</span> <span
  m="2531290">a</span> <span m="2531400">and b are,</span> <span
  m="2532080">because</span> <span m="2532260">that's</span> <span
  m="2532440">x1.</span> <span m="2533230">And</span> <span
  m="2533480">the</span> <span m="2533560">one-way</span> <span
  m="2534370">I'd</span> <span m="2534480">break</span> <span
  m="2534960">would</span> <span m="2535100">require</span> <span
  m="2535490">me</span> <span m="2535650">to</span> <span
  m="2535820">tell</span> <span m="2536040">you</span> <span
  m="2536170">what</span> <span m="2536300">the</span> <span
  m="2536370">value</span> <span m="2536710">of</span> <span
  m="2536810">x1</span> <span m="2537200">is,</span> <span
  m="2537670">and</span> <span m="2537900">the</span> <span
  m="2537960">value</span> <span m="2538260">of</span> <span
  m="2538350">x2,</span> <span m="2538810">and</span> <span
  m="2538930">so</span> <span m="2539050">on</span> <span m="2539170">and</span>
  <span m="2539250">so</span> <span m="2539400">forth.</span></p><p><span
  m="2540070">So</span> <span m="2540130">it's</span> <span
  m="2540250">pretty</span> <span m="2540440">clear</span> <span
  m="2540670">that</span> <span m="2540830">h</span> <span
  m="2541470">prime</span> <span m="2542180">is</span> <span
  m="2542350">one-way,</span> <span m="2543240">right?</span> <span
  m="2543640">Everybody</span> <span m="2543950">buy</span> <span
  m="2544110">that?</span> <span m="2545520">h</span> <span
  m="2545700">prime</span> <span m="2546260">is</span> <span
  m="2546600">one-way.</span></p><p><span m="2548870">But</span> <span
  m="2549600">you</span> <span m="2549700">know</span> <span
  m="2549810">what?</span> <span m="2550160">I've</span> <span
  m="2550390">got</span> <span m="2551180">target</span> <span
  m="2551590">collisions</span> <span m="2552180">galore,</span> <span
  m="2553260">right?</span> <span m="2553860">All</span> <span
  m="2554040">I</span> <span m="2554120">have</span> <span m="2554240">to</span>
  <span m="2554330">do</span> <span m="2554470">is</span> <span
  m="2554680">flip--</span> <span m="2555330">I</span> <span
  m="2555450">have</span> <span m="2555610">a</span> <span
  m="2555780">equals</span> <span m="2556080">1 and</span> <span
  m="2556490">b</span> <span m="2556610">equals</span> <span
  m="2556880">1.</span> <span m="2557360">And I</span> <span m="2557840">have a
  equals</span> <span m="2558290">0</span> <span m="2558680">and</span> <span
  m="2558790">b</span> <span m="2558900">equals</span> <span
  m="2559170">0.</span> <span m="2559770">They're</span> <span
  m="2559890">going</span> <span m="2559980">to</span> <span
  m="2560020">give</span> <span m="2560130">me</span> <span
  m="2560230">the</span> <span m="2560330">same</span> <span
  m="2560530">hash,</span> <span m="2561670">right?</span></p><p><span
  m="2562350">So</span> <span m="2563060">trivial</span> <span
  m="2563470">example,</span> <span m="2564310">but</span> <span
  m="2564470">that</span> <span m="2565450">gets</span> <span
  m="2565690">to</span> <span m="2565840">the</span> <span
  m="2565970">essence</span> <span m="2566810">of</span> <span
  m="2566950">the</span> <span m="2567040">difference</span> <span
  m="2567950">between</span> <span m="2568340">collision</span> <span
  m="2568720">resistance</span> <span m="2570070">and</span> <span
  m="2570500">one-wayness,</span> <span m="2571210">target</span> <span
  m="2571540">collision</span> <span m="2571820">resistance</span> <span
  m="2572290">and</span> <span m="2572400">one-wayness,</span> <span
  m="2573410">all</span> <span m="2573470">right?</span> <span
  m="2574210">So</span> <span m="2574480">this</span> <span
  m="2574680">is</span> <span m="2575030">one-way</span> <span
  m="2576050">but</span> <span m="2576240">not</span> <span
  m="2578690">TCR,</span> <span m="2579990">simply</span> <span
  m="2580370">because</span> <span m="2582040">a</span> <span
  m="2582230">equals</span> <span m="2582540">0,</span> <span
  m="2583390">b</span> <span m="2583710">equals</span> <span
  m="2584050">0</span> <span m="2584370">for</span> <span
  m="2584580">arbitrary</span> <span m="2585230">x's</span> <span
  m="2586280">produce</span> <span m="2586500">the</span> <span
  m="2586640">same</span> <span m="2586900">thing</span> <span
  m="2587200">as</span> <span m="2588140">a</span> <span
  m="2588250">equals</span> <span m="2588530">1</span> <span
  m="2588990">and</span> <span m="2589450">b</span> <span
  m="2589550">equals</span> <span m="2589840">1, right?</span> <span
  m="2591200">So</span> <span m="2591350">those</span> <span
  m="2591540">are</span> <span m="2591620">collisions.</span></p><p><span
  m="2593940">So</span> <span m="2594320">admittedly</span> <span
  m="2594770">contrived.</span> <span m="2595690">But</span> <span
  m="2596970">it's a</span> <span m="2597320">counterexample.</span> <span
  m="2599350">Counterexamples</span> <span m="2600030">can</span> <span
  m="2600240">be</span> <span m="2600340">contrived.</span> <span
  m="2601150">It's</span> <span m="2601300">OK.</span></p><p><span
  m="2603510">All</span> <span m="2603670">right.</span> <span
  m="2604710">So</span> <span m="2605380">that</span> <span
  m="2605710">was</span> <span m="2606790">what</span> <span
  m="2606990">happens</span> <span m="2607250">with</span> <span
  m="2607400">that.</span> <span m="2608470">Let's</span> <span
  m="2608920">look</span> <span m="2609140">at</span> <span
  m="2609200">one</span> <span m="2609520">more</span> <span
  m="2609770">interesting</span> <span m="2610210">thing</span> <span
  m="2612400">that</span> <span m="2612660">corresponds</span> <span
  m="2613220">to</span> <span m="2614300">the</span> <span
  m="2614430">other</span> <span m="2614690">way,</span> <span
  m="2615800">right?</span> <span m="2616150">So</span> <span
  m="2617320">what</span> <span m="2617600">I</span> <span
  m="2617640">want</span> <span m="2617790">to</span> <span
  m="2617840">show</span> <span m="2618680">is</span> <span
  m="2621570">that</span> <span m="2622140">a</span> <span
  m="2622300">TCR</span> <span m="2624860">does</span> <span
  m="2625160">not</span> <span m="2625380">imply</span> <span
  m="2625810">one-wayness.</span> <span m="2639040">OK,</span> <span
  m="2639910">so</span> <span m="2640340">now</span> <span m="2640520">I</span>
  <span m="2640640">want</span> <span m="2640800">an</span> <span
  m="2640890">example</span> <span m="2641350">where</span> <span
  m="2642630">it</span> <span m="2642790">is</span> <span
  m="2642930">clear</span> <span m="2643240">that</span> <span
  m="2643660">I</span> <span m="2643790">have</span> <span
  m="2643970">target</span> <span m="2644240">collision</span> <span
  m="2644620">resistance,</span> <span m="2645040">because</span> <span
  m="2645210">I</span> <span m="2645270">can</span> <span
  m="2645390">just</span> <span m="2645580">assume</span> <span
  m="2645870">that.</span> <span m="2646370">And</span> <span m="2646500">we're
  going to</span> <span m="2646660">use</span> <span m="2646930">the</span>
  <span m="2646990">same</span> <span m="2647400">strategy.</span></p><p><span
  m="2648310">I'm</span> <span m="2648480">just</span> <span
  m="2648660">going</span> <span m="2648790">assume</span> <span
  m="2649070">that</span> <span m="2649240">I</span> <span
  m="2649290">have</span> <span m="2649440">an</span> <span m="2649520">h</span>
  <span m="2650370">that's</span> <span m="2650550">target</span> <span
  m="2650920">collision</span> <span m="2651280">resistant.</span> <span
  m="2652240">And</span> <span m="2652350">I'm</span> <span
  m="2652420">going</span> <span m="2652540">to</span> <span
  m="2652610">try</span> <span m="2652850">and</span> <span
  m="2652970">cook</span> <span m="2653150">up</span> <span m="2653280">an
  h</span> <span m="2653390">prime</span> <span m="2654860">that</span> <span
  m="2655080">is</span> <span m="2655480">not</span> <span
  m="2655700">one-way.</span> <span m="2656250">So</span> <span
  m="2656540">I'm</span> <span m="2656700">going</span> <span
  m="2656800">to</span> <span m="2656840">assume</span> <span
  m="2657130">that</span> <span m="2657300">in</span> <span
  m="2657420">fact</span> <span m="2657640">h</span> <span m="2658040">is</span>
  <span m="2658440">TCR</span> <span m="2659480">and</span> <span
  m="2659960">OW.</span></p><p><span m="2661080">And</span> <span
  m="2661260">I'm</span> <span m="2661340">going</span> <span
  m="2661490">to</span> <span m="2661640">take</span> <span
  m="2661900">away</span> <span m="2662790">one</span> <span
  m="2663100">of</span> <span m="2663160">the</span> <span
  m="2663240">properties.</span> <span m="2664420">And</span> <span
  m="2664540">if</span> <span m="2664610">I</span> <span m="2664680">take</span>
  <span m="2664880">it</span> <span m="2665060">one</span> <span
  m="2665160">of</span> <span m="2665220">the</span> <span
  m="2665280">properties</span> <span m="2666060">I</span> <span
  m="2666190">have</span> <span m="2666290">a counterexample,</span> <span
  m="2667520">right?</span> <span m="2668350">So</span> <span
  m="2670270">think</span> <span m="2670440">about</span> <span
  m="2671640">how</span> <span m="2671770">you</span> <span
  m="2671890">could</span> <span m="2671990">do</span> <span
  m="2672090">this.</span></p><p><span m="2674320">You</span> <span
  m="2674620">have</span> <span m="2676560">h</span> <span m="2677760">as</span>
  <span m="2678020">before.</span> <span m="2681920">And</span> <span
  m="2683530">I</span> <span m="2683650">want</span> <span m="2683780">to</span>
  <span m="2683850">add</span> <span m="2684210">some</span> <span
  m="2684400">stuff</span> <span m="2684740">around</span> <span
  m="2685220">it</span> <span m="2686330">such</span> <span
  m="2686680">that</span> <span m="2688200">it's</span> <span
  m="2688460">going</span> <span m="2688760">to</span> <span
  m="2688950">be</span> <span m="2689180">easy</span> <span
  m="2690950">to</span> <span m="2691100">discover--</span> <span
  m="2691950">for</span> <span m="2692180">a</span> <span
  m="2692310">large,</span> <span m="2692820">for a</span> <span
  m="2693020">constant</span> <span m="2693510">fraction</span> <span
  m="2694020">of</span> <span m="2695010">hashes</span> <span
  m="2695610">that</span> <span m="2695760">I've</span> <span
  m="2695880">given</span> <span m="2696100">to</span> <span
  m="2696210">me,</span> <span m="2697040">not</span> <span
  m="2697300">for</span> <span m="2697630">any</span> <span
  m="2697860">old</span> <span m="2698100">hash.</span> <span
  m="2698430">Because</span> <span m="2698650">you</span> <span
  m="2698760">can</span> <span m="2698840">always</span> <span
  m="2699630">claim</span> <span m="2700070">that</span> <span
  m="2700500">one-wayness</span> <span m="2701000">is</span> <span
  m="2701130">broken</span> <span m="2702070">by</span> <span
  m="2702400">saying</span> <span m="2703250">I</span> <span
  m="2703340">have</span> <span m="2703540">x,</span> <span m="2704300">I</span>
  <span m="2704460">computed</span> <span m="2705180">h</span> <span
  m="2705380">of</span> <span m="2705500">x,</span> <span m="2706230">now</span>
  <span m="2706360">I</span> <span m="2706440">know</span> <span
  m="2706640">what--</span> <span m="2707860">given</span> <span
  m="2708130">h</span> <span m="2708320">of</span> <span m="2708430">x</span>
  <span m="2708610">I</span> <span m="2708680">know</span> <span
  m="2708820">what</span> <span m="2708980">x is.</span> <span
  m="2709780">I</span> <span m="2709820">mean</span> <span
  m="2709900">you</span> <span m="2709990">can't</span> <span
  m="2710160">do</span> <span m="2710220">that,</span> <span
  m="2710990">right?</span> <span m="2711970">So</span> <span
  m="2712120">that's</span> <span m="2712340">not</span> <span
  m="2712510">breaking</span> <span m="2712880">the</span> <span
  m="2712980">one-wayness</span> <span m="2713430">of</span> <span
  m="2713560">it.</span></p><p><span m="2714360">It's</span> <span
  m="2715060">when</span> <span m="2715170">you</span> <span
  m="2715250">have</span> <span m="2715430">an</span> <span m="2715510">h</span>
  <span m="2715670">of</span> <span m="2715790">x</span> <span
  m="2716050">and</span> <span m="2716280">this</span> <span
  m="2716420">is</span> <span m="2716470">the</span> <span
  m="2716550">first</span> <span m="2716820">time</span> <span
  m="2717030">you've</span> <span m="2717160">seen</span> <span
  m="2717390">it,</span> <span m="2718250">you're</span> <span
  m="2718420">trying</span> <span m="2718590">to</span> <span
  m="2718640">find</span> <span m="2718900">what</span> <span
  m="2719100">x</span> <span m="2719420">is,</span> <span
  m="2719740">right?</span> <span m="2720660">So</span> <span
  m="2721090">how</span> <span m="2721240">would</span> <span
  m="2721380">you--</span> <span m="2721910">how</span> <span
  m="2722080">would</span> <span m="2722160">you</span> <span
  m="2722320">set</span> <span m="2722470">it</span> <span m="2722560">up</span>
  <span m="2723370">so</span> <span m="2724050">you</span> <span
  m="2724300">break</span> <span m="2726290">the</span> <span
  m="2726530">one-wayness</span> <span m="2726970">of</span> <span
  m="2727320">h</span> <span m="2728230">without</span> <span
  m="2728600">necessarily</span> <span m="2729370">breaking</span> <span
  m="2729900">the</span> <span m="2730490">target</span> <span
  m="2730930">collision</span> <span m="2731310">resistance</span> <span
  m="2732680">of</span> <span m="2734350">the</span> <span
  m="2735340">overall</span> <span m="2735680">hash</span> <span
  m="2735900">function</span> <span m="2736270">that</span> <span
  m="2736380">you're</span> <span m="2736490">creating?</span> <span
  m="2737430">And</span> <span m="2738120">you</span> <span
  m="2738160">have</span> <span m="2738300">to</span> <span
  m="2738360">do</span> <span m="2738480">something</span> <span
  m="2738780">with</span> <span m="2739590">the</span> <span
  m="2739660">outputs,</span> <span m="2741060">OK?</span> <span
  m="2741720">You</span> <span m="2741800">have</span> <span
  m="2741900">to</span> <span m="2741960">do</span> <span
  m="2742070">something.</span></p><p><span m="2742380">This</span> <span
  m="2742520">is</span> <span m="2742560">a</span> <span
  m="2742610">little</span> <span m="2742740">more</span> <span
  m="2742890">involved.</span> <span m="2743350">It's</span> <span
  m="2743600">not as</span> <span m="2744060">easy</span> <span
  m="2744480">as</span> <span m="2744620">this</span> <span
  m="2744880">example.</span> <span m="2745990">It's</span> <span
  m="2746150">a</span> <span m="2746210">little</span> <span
  m="2746340">more</span> <span m="2746470">involved.</span> <span
  m="2746900">But</span> <span m="2747340">any</span> <span
  m="2747510">ideas?</span> <span m="2751240">Yeah,</span> <span m="2751390">go
  ahead.</span></p><p><span m="2752761">AUDIENCE: So</span> <span m="2753252">x
  is less than</span> <span m="2753743">b</span> <span
  m="2754725">returns</span> <span m="2755216">x.</span> <span
  m="2755707">If</span> <span m="2756198">x is</span> <span m="2756689">greater
  than  b,</span> <span m="2757180">return</span> <span
  m="2757671">[INAUDIBLE].</span></p><p><span m="2758170">SRINIVAS DEVADAS:
  Beautiful.</span> <span m="2759130">Right.</span> <span
  m="2759460">What</span> <span m="2759800">color</span> <span
  m="2760060">did</span> <span m="2760210">you</span> <span
  m="2760280">get</span> <span m="2760440">last</span> <span
  m="2760680">time?</span></p><p><span m="2760970">AUDIENCE:
  Blue.</span></p><p><span m="2762150">SRINIVAS DEVADAS: You</span> <span
  m="2762260">got</span> <span m="2762350">a</span> <span
  m="2762410">blue</span> <span m="2762690">last</span> <span
  m="2762910">time?</span> <span m="2763050">All</span> <span
  m="2763410">right.</span> <span m="2763800">Well you</span> <span
  m="2763880">get</span> <span m="2763980">a</span> <span
  m="2764460">purple.</span> <span m="2764890">You</span> <span
  m="2764910">have</span> <span m="2765030">a</span> <span
  m="2765110">set.</span> <span m="2766190">Actually</span> <span m="2766520">we
  have</span> <span m="2766670">these</span> <span m="2766830">red</span> <span
  m="2767010">ones</span> <span m="2768150">that are</span> <span
  m="2768300">precious,</span> <span m="2768820">that</span> <span
  m="2768930">are--</span> <span m="2769220">no,</span> <span
  m="2769450">we</span> <span m="2769925">don't.</span> <span
  m="2772780">We</span> <span m="2773055">chose</span> <span
  m="2773330">not</span> <span m="2773530">to</span> <span m="2773610">do</span>
  <span m="2773790">red.</span> <span m="2774650">I</span> <span
  m="2774750">don't</span> <span m="2774850">know.</span> <span
  m="2775020">There was</span> <span m="2775250">some</span> <span
  m="2776270">subliminal</span> <span m="2776920">message</span> <span
  m="2777370">I</span> <span m="2777490">think</span> <span m="2777660">with
  throwing</span> <span m="2778030">red</span> <span m="2778260">Frisbees</span>
  <span m="2778770">that</span> <span m="2778880">we didn't</span> <span
  m="2779170">like.</span></p><p><span m="2780750">But</span> <span
  m="2781120">OK.</span> <span m="2781380">So</span> <span
  m="2781850">thank</span> <span m="2782010">you.</span> <span
  m="2782550">And</span> <span m="2786180">h of</span> <span
  m="2786420">x</span> <span m="2787550">is</span> <span
  m="2791800">simply</span> <span m="2792780">something</span> <span
  m="2793130">where</span> <span m="2793260">I'm</span> <span
  m="2793350">going</span> <span m="2793440">to</span> <span
  m="2793510">concatenate</span> <span m="2794450">a</span> <span
  m="2794660">zero</span> <span m="2795740">to</span> <span
  m="2795880">the</span> <span m="2796710">x</span> <span
  m="2796990">value</span> <span m="2797360">and</span> <span
  m="2797450">just</span> <span m="2797720">put</span> <span
  m="2797910">it</span> <span m="2797980">out.</span> <span
  m="2798660">And</span> <span m="2798810">clearly</span> <span
  m="2799090">this</span> <span m="2799220">is</span> <span
  m="2799510">breaking</span> <span m="2800130">one-wayness</span> <span
  m="2800810">because</span> <span m="2801070">I'm</span> <span
  m="2801170">just</span> <span m="2801370">taking</span> <span
  m="2801640">the</span> <span m="2801730">input,</span> <span
  m="2802570">I'm</span> <span m="2802700">adding</span> <span
  m="2802990">a</span> <span m="2803030">zero</span> <span m="2803330">to</span>
  <span m="2803470">it,</span> <span m="2803610">and</span> <span
  m="2803730">shipping</span> <span m="2804120">it</span> <span
  m="2804200">out.</span> <span m="2804730">So</span> <span
  m="2804980">it's</span> <span m="2805110">going to be</span> <span
  m="2805350">easy</span> <span m="2805600">to</span> <span
  m="2805660">go</span> <span m="2805790">backwards,</span> <span
  m="2806250">right?</span></p><p><span m="2806900">And</span> <span
  m="2807070">this</span> <span m="2807200">only</span> <span
  m="2807430">happens</span> <span m="2808730">if</span> <span
  m="2810140">x</span> <span m="2811880">is</span> <span m="2812290">less</span>
  <span m="2812530">than</span> <span m="2812850">n,</span> <span
  m="2813500">as</span> <span m="2814280">the</span> <span
  m="2814390">gentleman</span> <span m="2814750">just</span> <span
  m="2814910">said.</span> <span m="2815460">Less</span> <span
  m="2815650">than</span> <span m="2815690">or</span> <span
  m="2815860">equal</span> <span m="2816060">to</span> <span
  m="2816310">n</span> <span m="2817270">in</span> <span m="2817560">terms of
  the input</span> <span m="2817920">length,</span> <span m="2818820">OK?</span>
  <span m="2820220">Otherwise</span> <span m="2820680">I'm</span> <span
  m="2820780">going</span> <span m="2820920">to</span> <span
  m="2821000">do</span> <span m="2821895">h</span> <span m="2822350">of</span>
  <span m="2822690">x.</span> <span m="2828270">So</span> <span
  m="2828470">this</span> <span m="2828660">is</span> <span
  m="2828750">good</span> <span m="2828900">news.</span> <span
  m="2830160">Because</span> <span m="2831900">I'm</span> <span
  m="2833020">actually</span> <span m="2833280">using</span> <span
  m="2833530">the</span> <span m="2833610">hash</span> <span
  m="2833830">function</span> <span m="2834910">in</span> <span
  m="2835060">the</span> <span m="2835150">case</span> <span
  m="2835400">where</span> <span m="2835600">I have</span> <span
  m="2835730">a</span> <span m="2836260">longer</span> <span
  m="2836730">input</span> <span m="2837050">string.</span> <span
  m="2837890">This</span> <span m="2838060">is</span> <span
  m="2838190">bad</span> <span m="2838460">news</span> <span
  m="2838710">for</span> <span m="2838850">one-wayness</span> <span
  m="2839880">because</span> <span m="2840070">I'm</span> <span
  m="2840190">just</span> <span m="2840660">piping</span> <span
  m="2841010">out</span> <span m="2841420">the</span> <span
  m="2841870">input.</span></p><p><span m="2843010">And</span> <span
  m="2843210">so</span> <span m="2843440">if</span> <span m="2843540">I</span>
  <span m="2843630">get</span> <span m="2845380">an</span> <span
  m="2845620">x,</span> <span m="2847450">and</span> <span m="2848370">I</span>
  <span m="2848440">see</span> <span m="2848700">what</span> <span
  m="2848870">the</span> <span m="2848960">x is</span> <span
  m="2849360">out</span> <span m="2849560">here,</span> <span
  m="2851030">and</span> <span m="2851190">let's</span> <span
  m="2851350">just</span> <span m="2851480">say</span> <span
  m="2851600">for</span> <span m="2851900">argument's</span> <span
  m="2852320">sake</span> <span m="2852510">that--</span> <span
  m="2853810">you</span> <span m="2853980">could</span> <span
  m="2854060">even</span> <span m="2854220">say</span> <span
  m="2854420">that</span> <span m="2856640">n</span> <span m="2858260">is</span>
  <span m="2858480">going</span> <span m="2858690">to</span> <span
  m="2858770">be</span> <span m="2859270">something</span> <span
  m="2859770">that</span> <span m="2860300">is</span> <span
  m="2861210">less</span> <span m="2861540">than</span> <span
  m="2862480">d,</span> <span m="2863330">which</span> <span
  m="2863880">is</span> <span m="2864110">the</span> <span
  m="2864190">final</span> <span m="2864510">output,</span> <span
  m="2865050">which</span> <span m="2865140">has</span> <span
  m="2865350">d-bits.</span> <span m="2866210">And</span> <span
  m="2866340">so</span> <span m="2866440">if you</span> <span
  m="2866610">see</span> <span m="2866860">something</span> <span
  m="2867290">that</span> <span m="2867950">h</span> <span
  m="2868180">prime</span> <span m="2868470">produces</span> <span
  m="2869090">that's</span> <span m="2869290">less</span> <span
  m="2869550">than</span> <span m="2869710">d-bits</span> <span
  m="2870740">you</span> <span m="2870920">instantly</span> <span
  m="2871450">know</span> <span m="2871750">that</span> <span
  m="2871950">you</span> <span m="2872040">can</span> <span
  m="2872160">go</span> <span m="2872300">backwards</span> <span
  m="2873390">and</span> <span m="2873660">discover</span> <span
  m="2874030">what</span> <span m="2874230">input</span> <span
  m="2874710">produced</span> <span m="2875030">that</span> <span
  m="2875430">for</span> <span m="2875510">the h</span> <span
  m="2875590">prime,</span> <span m="2876590">right?</span> <span
  m="2877260">Because</span> <span m="2877530">you</span> <span
  m="2877630">just</span> <span m="2877810">go</span> <span
  m="2877940">off</span> <span m="2878170">and</span> <span
  m="2878280">you</span> <span m="2878350">go</span> <span
  m="2878490">backwards.</span> <span m="2879060">This</span> <span
  m="2879110">is</span> <span m="2879220">what</span> <span
  m="2879360">it</span> <span m="2879450">tells</span> <span
  m="2879660">you.</span></p><p><span m="2880590">Now on</span> <span
  m="2880690">the</span> <span m="2880730">other</span> <span m="2880910">hand
  if</span> <span m="2881220">it's</span> <span m="2881320">larger</span> <span
  m="2881850">obviously</span> <span m="2882160">you</span> <span
  m="2882260">can't</span> <span m="2882460">do</span> <span
  m="2882570">that.</span> <span m="2883160">But</span> <span
  m="2883370">there's</span> <span m="2883550">a</span> <span
  m="2883730">whole</span> <span m="2884020">lot</span> <span
  m="2884240">of</span> <span m="2885040">combinations</span> <span
  m="2886770">that</span> <span m="2887030">you</span> <span
  m="2887150">can</span> <span m="2887250">do</span> <span
  m="2887350">that</span> <span m="2887560">for.</span> <span
  m="2888100">So</span> <span m="2888290">this</span> <span
  m="2888510">breaks</span> <span m="2888870">one-wayness,</span> <span
  m="2890050">OK?</span></p><p><span m="2891300">Now</span> <span
  m="2891630">you</span> <span m="2891770">think</span> <span
  m="2891940">about</span> <span m="2892200">TCR.</span> <span
  m="2893140">And</span> <span m="2893330">what</span> <span
  m="2893480">you</span> <span m="2893560">want</span> <span
  m="2893700">a</span> <span m="2893750">show</span> <span m="2894040">of</span>
  <span m="2894120">course</span> <span m="2894490">is</span> <span
  m="2894520">that</span> <span m="2894700">this</span> <span
  m="2894860">maintains</span> <span m="2896720">TCR.</span> <span
  m="2897570">So</span> <span m="2897690">that's</span> <span
  m="2897850">the</span> <span m="2897950">last</span> <span
  m="2898650">thing</span> <span m="2898790">that</span> <span
  m="2898910">we</span> <span m="2898980">have</span> <span
  m="2899100">to</span> <span m="2899190">show.</span> <span
  m="2900640">We</span> <span m="2900790">know</span> <span
  m="2900930">that</span> <span m="2901030">it</span> <span
  m="2901140">breaks</span> <span m="2901380">one-wayness.</span> <span
  m="2902080">But</span> <span m="2902190">if it</span> <span
  m="2902340">broke</span> <span m="2902640">TCR</span> <span
  m="2903550">we</span> <span m="2903680">don't</span> <span
  m="2903840">quite</span> <span m="2904080">have</span> <span
  m="2904250">our</span> <span m="2904350">example.</span> <span
  m="2905360">So</span> <span m="2905550">we</span> <span
  m="2905630">want</span> <span m="2905760">to</span> <span
  m="2905800">show</span> <span m="2906030">that</span> <span
  m="2906160">it</span> <span m="2906340">actually</span> <span
  m="2906640">maintains</span> <span m="2907120">TCR,</span> <span
  m="2908160">which</span> <span m="2908440">is</span> <span
  m="2909160">kind</span> <span m="2909280">of</span> <span m="2910290">a</span>
  <span m="2910370">weakish</span> <span m="2910750">property</span> <span
  m="2911220">that</span> <span m="2911560">we</span> <span
  m="2911710">need</span> <span m="2911850">to</span> <span
  m="2911910">maintain.</span></p><p><span m="2913440">And</span> <span
  m="2913890">the</span> <span m="2914020">reason</span> <span
  m="2914280">this</span> <span m="2914390">maintains</span> <span
  m="2914760">TCR</span> <span m="2915890">is</span> <span
  m="2916080">that</span> <span m="2916500">there's</span> <span
  m="2916710">really</span> <span m="2916930">only</span> <span
  m="2917850">two</span> <span m="2918050">cases</span> <span
  m="2918470">here</span> <span m="2918740">obviously,</span> <span
  m="2919290">corresponding</span> <span m="2920020">to</span> <span
  m="2920090">the</span> <span m="2920180">if</span> <span
  m="2920330">statement.</span> <span m="2921720">And</span> <span
  m="2923040">it's</span> <span m="2923280">pretty</span> <span
  m="2923480">clear</span> <span m="2924460">that</span> <span
  m="2924790">if</span> <span m="2925640">x</span> <span m="2926180">is</span>
  <span m="2926400">less</span> <span m="2926630">than</span> <span
  m="2926750">or</span> <span m="2926830">equal</span> <span
  m="2927080">to</span> <span m="2927190">n,</span> <span
  m="2929280">clearly</span> <span m="2931810">different</span> <span
  m="2934020">x's</span> <span m="2935580">produce</span> <span
  m="2938120">different</span> <span m="2940016">h</span> <span
  m="2940420">prime</span> <span m="2940980">x's,</span> <span
  m="2942800">correct?</span> <span m="2943520">Because</span> <span
  m="2943710">I'm</span> <span m="2943800">just</span> <span
  m="2944000">passing</span> <span m="2944340">along</span> <span
  m="2944650">the</span> <span m="2944760">x</span> <span m="2945240">out</span>
  <span m="2945520">to</span> <span m="2945590">the</span> <span
  m="2945880">output.</span></p><p><span m="2946620">So</span> <span
  m="2946860">if</span> <span m="2947200">x</span> <span m="2947430">is</span>
  <span m="2947560">less</span> <span m="2947750">than</span> <span
  m="2947890">n</span> <span m="2948270">I</span> <span m="2948530">am</span>
  <span m="2948790">going</span> <span m="2948900">to</span> <span
  m="2948940">get</span> <span m="2949260">different</span> <span
  m="2949350">hashes</span> <span m="2949730">at the</span> <span
  m="2949890">output.</span> <span m="2950570">I'm</span> <span
  m="2950700">just</span> <span m="2950860">passing</span> <span
  m="2951120">them</span> <span m="2951240">out.</span> <span
  m="2952350">So</span> <span m="2953050">that's</span> <span
  m="2953260">easy.</span></p><p><span m="2953940">And</span> <span
  m="2954660">for</span> <span m="2954820">the other</span> <span
  m="2954880">case,</span> <span m="2955580">well</span> <span
  m="2955890">I</span> <span m="2956110">assume</span> <span
  m="2956420">that</span> <span m="2956560">h</span> <span m="2956740">of</span>
  <span m="2956870">x</span> <span m="2957490">was</span> <span
  m="2957700">CCR,</span> <span m="2959150">correct?</span> <span
  m="2960270">Because</span> <span m="2960480">that</span> <span
  m="2960620">was</span> <span m="2960750">the</span> <span
  m="2960930">original</span> <span m="2961240">assumption,</span> <span
  m="2961680">that</span> <span m="2961790">I</span> <span
  m="2961820">had</span> <span m="2962090">h,</span> <span
  m="2962420">which</span> <span m="2962550">was</span> <span
  m="2962670">CCR.</span> <span m="2963540">So</span> <span
  m="2963660">in</span> <span m="2963790">both</span> <span
  m="2964020">cases</span> <span m="2964930">TCR</span> <span
  m="2965380">is</span> <span m="2965500">maintained</span> <span
  m="2966630">because</span> <span m="2968220">else</span> <span
  m="2970460">h</span> <span m="2970690">of</span> <span m="2970820">x</span>
  <span m="2972220">maintains</span> <span m="2975090">TCR,</span> <span
  m="2976510">all</span> <span m="2976590">right?</span> <span
  m="2978350">So</span> <span m="2979170">again,</span> <span
  m="2979390">a</span> <span m="2979430">bit</span> <span m="2979560">of</span>
  <span m="2979630">a</span> <span m="2979700">contrived</span> <span
  m="2980110">example</span> <span m="2981360">to</span> <span
  m="2981480">show</span> <span m="2981760">you</span> <span
  m="2981900">the</span> <span m="2982030">difference</span> <span
  m="2982390">between</span> <span m="2982700">these</span> <span
  m="2982880">different</span> <span m="2983130">properties</span> <span
  m="2983950">so</span> <span m="2984080">you</span> <span m="2984350">know
  not</span> <span m="2984620">to</span> <span m="2984690">mix</span> <span
  m="2984880">them</span> <span m="2985020">up.</span> <span m="2985510">You
  know</span> <span m="2985960">what you</span> <span m="2986310">want</span>
  <span m="2986570">to</span> <span m="2986630">ask</span> <span
  m="2986970">for,</span> <span m="2987630">what</span> <span
  m="2987820">is</span> <span m="2987930">required</span> <span
  m="2989050">when</span> <span m="2989240">you</span> <span
  m="2989580">actually</span> <span m="2991150">implement</span> <span
  m="2991510">an</span> <span m="2991600">application</span> <span
  m="2992520">that</span> <span m="2992710">depends</span> <span
  m="2993870">on</span> <span m="2994100">particular</span> <span
  m="2994510">properties.</span></p><p><span m="2996000">All</span> <span
  m="2996070">right?</span> <span m="2997230">Any</span> <span
  m="2997370">questions</span> <span m="2997670">so</span> <span
  m="2997810">far</span> <span m="2998140">about</span> <span
  m="2998350">properties</span> <span m="2999010">or</span> <span
  m="2999320">any</span> <span m="2999490">of</span> <span
  m="2999540">these</span> <span m="2999700">examples?</span> <span
  m="3001040">We're</span> <span m="3001080">going</span> <span
  m="3001250">to</span> <span m="3001320">dive</span> <span
  m="3001550">in</span> <span m="3001700">to</span> <span
  m="3002380">using</span> <span m="3002760">them.</span></p><p><span
  m="3006970">OK.</span> <span m="3008510">So</span> <span
  m="3009450">start</span> <span m="3009850">thinking</span> <span
  m="3010650">computer</span> <span m="3010990">security.</span> <span
  m="3012170">Start</span> <span m="3012860">thinking</span> <span
  m="3014220">hackers,</span> <span m="3015830">protecting</span> <span
  m="3016240">yourself</span> <span m="3018090">against</span> <span
  m="3018590">the</span> <span m="3018650">bad</span> <span
  m="3018900">guys</span> <span m="3019150">that are</span> <span
  m="3019280">out</span> <span m="3019440">there</span> <span m="3020570">who
  are</span> <span m="3020740">trying</span> <span m="3021010">to</span> <span
  m="3021070">discover</span> <span m="3021320">your</span> <span
  m="3021480">passwords,</span> <span m="3022640">trying</span> <span
  m="3022850">to</span> <span m="3022910">corrupt</span> <span
  m="3023200">your</span> <span m="3023330">files,</span> <span
  m="3024640">generally</span> <span m="3024980">make</span> <span
  m="3025160">your</span> <span m="3025250">life</span> <span
  m="3025490">miserable.</span> <span m="3032880">And</span> <span
  m="3033720">we'll</span> <span m="3034350">start</span> <span
  m="3034680">out</span> <span m="3034860">with</span> <span
  m="3036810">fairly</span> <span m="3037480">simple</span> <span
  m="3037770">examples,</span> <span m="3038730">where</span> <span
  m="3038880">the</span> <span m="3038990">properties</span> <span
  m="3039510">are</span> <span m="3040410">somewhat</span> <span
  m="3040770">obvious,</span> <span m="3041730">and</span> <span
  m="3042130">graduate</span> <span m="3042790">to</span> <span
  m="3042940">this</span> <span m="3043380">auction</span> <span
  m="3043860">bidding</span> <span m="3044190">example</span> <span
  m="3045360">which</span> <span m="3046830">should</span> <span
  m="3047030">be</span> <span m="3047160">sort</span> <span
  m="3047300">of</span> <span m="3047350">the</span> <span
  m="3047410">culmination</span> <span m="3047990">of at least</span> <span
  m="3048080">this</span> <span m="3048580">part</span> <span m="3048950">of
  the</span> <span m="3049230">lecture.</span></p><p><span
  m="3050120">And</span> <span m="3050280">depending</span> <span
  m="3050550">on</span> <span m="3050630">how</span> <span
  m="3050690">much</span> <span m="3050860">time</span> <span
  m="3051090">I</span> <span m="3051180">have</span> <span
  m="3052470">I'll</span> <span m="3052920">tell</span> <span
  m="3053050">you</span> <span m="3053180">a</span> <span
  m="3053210">little</span> <span m="3053480">bit</span> <span
  m="3053660">about</span> <span m="3054580">how</span> <span
  m="3054800">to</span> <span m="3054870">implement</span> <span
  m="3055290">hash</span> <span m="3055520">functions.</span> <span
  m="3056730">But</span> <span m="3057470">I</span> <span
  m="3057600">think</span> <span m="3057760">these</span> <span
  m="3058020">things</span> <span m="3058730">are</span> <span
  m="3059390">more</span> <span m="3059640">important</span> <span
  m="3060650">from</span> <span m="3060890">a</span> <span
  m="3061010">standpoint</span> <span m="3061630">of</span> <span
  m="3063210">giving</span> <span m="3063420">you</span> <span
  m="3063580">a</span> <span m="3063650">sense</span> <span
  m="3064030">of</span> <span m="3065160">cryptographic</span> <span
  m="3065720">hashes.</span> <span m="3068610">All</span> <span
  m="3068720">right.</span> <span m="3070380">Password
  storage.</span></p><p><span m="3071970">How</span> <span
  m="3072180">many</span> <span m="3072370">of</span> <span
  m="3072470">you</span> <span m="3073220">write</span> <span
  m="3073600">your</span> <span m="3073800">password</span> <span
  m="3074830">in</span> <span m="3075090">an</span> <span
  m="3075580">unencrypted</span> <span m="3076370">text</span> <span
  m="3076730">file</span> <span m="3077750">and</span> <span
  m="3077990">store</span> <span m="3078490">it</span> <span
  m="3079170">in</span> <span m="3079320">a</span> <span
  m="3079410">readable</span> <span m="3079770">location?</span> <span
  m="3082230">There</span> <span m="3082440">you</span> <span
  m="3082530">go,</span> <span m="3082870">man.</span> <span
  m="3084380">Thank</span> <span m="3084650">you</span> <span
  m="3084920">for</span> <span m="3085160">being</span> <span
  m="3085370">honest.</span> <span m="3087390">And</span> <span
  m="3087900">I</span> <span m="3088250">do</span> <span
  m="3088400">worse.</span> <span m="3089550">Not</span> <span
  m="3089900">only</span> <span m="3090250">do</span> <span m="3090510">I</span>
  <span m="3090590">do</span> <span m="3090720">that,</span> <span
  m="3091430">I</span> <span m="3091540">use</span> <span m="3091760">my</span>
  <span m="3091910">first</span> <span m="3092260">daughter's</span> <span
  m="3092610">name</span> <span m="3093450">for</span> <span
  m="3094220">four</span> <span m="3094470">passwords.</span> <span
  m="3095510">I won't</span> <span m="3095900">tell</span> <span
  m="3096120">you</span> <span m="3096210">what</span> <span
  m="3096380">the</span> <span m="3096460">name</span> <span
  m="3096690">is.</span></p><p><span m="3101350">So</span> <span
  m="3101490">that's</span> <span m="3101910">something</span> <span
  m="3102240">that</span> <span m="3102310">we'd</span> <span
  m="3102430">like</span> <span m="3102580">to</span> <span
  m="3102730">fix,</span> <span m="3103190">right?</span> <span
  m="3103470">So</span> <span m="3103600">what</span> <span
  m="3103770">do</span> <span m="3103890">real</span> <span
  m="3104100">systems</span> <span m="3104550">do?</span> <span
  m="3105500">Real</span> <span m="3105840">systems</span> <span
  m="3106310">cannot</span> <span m="3106750">protect</span> <span
  m="3107640">against</span> <span m="3108060">me</span> <span
  m="3108860">using</span> <span m="3109150">my</span> <span
  m="3109270">first</span> <span m="3109530">daughter's</span> <span
  m="3109840">name</span> <span m="3110220">as</span> <span m="3110380">a</span>
  <span m="3110430">password,</span> <span m="3111000">right?</span> <span
  m="3111400">So</span> <span m="3111570">there's</span> <span
  m="3111760">no</span> <span m="3111950">way</span> <span m="3112220">you
  can</span> <span m="3112310">protect</span> <span m="3112580">against</span>
  <span m="3112840">that.</span></p><p><span m="3113580">But</span> <span
  m="3114550">if</span> <span m="3114840">I</span> <span m="3114960">had</span>
  <span m="3115250">a</span> <span m="3115290">reasonable</span> <span
  m="3115890">password,</span> <span m="3116650">which</span> <span
  m="3116830">had</span> <span m="3117030">reasonable</span> <span
  m="3117550">entropy</span> <span m="3118480">in it--</span> <span
  m="3118870">so</span> <span m="3119030">let's</span> <span
  m="3119210">assume</span> <span m="3119590">here</span> <span
  m="3119850">that</span> <span m="3120360">we</span> <span
  m="3120450">have</span> <span m="3120650">reasonable</span> <span
  m="3121020">entropy</span> <span m="3121420">in</span> <span
  m="3121490">the</span> <span m="3121570">password.</span> <span
  m="3122010">And</span> <span m="3122180">you</span> <span
  m="3122290">can</span> <span m="3122380">just</span> <span
  m="3122540">say</span> <span m="3122660">128-bits.</span> <span
  m="3124000">And</span> <span m="3124140">it's</span> <span
  m="3124260">not</span> <span m="3124430">a</span> <span
  m="3124490">lot,</span> <span m="3124890">right?</span> <span
  m="3125240">128-bits</span> <span m="3126640">is</span> <span
  m="3126860">16</span> <span m="3127530">characters,</span> <span
  m="3128940">OK?</span> <span m="3129730">And</span> <span m="3129960">you
  don't</span> <span m="3130190">have to answer</span> <span
  m="3130490">this--</span> <span m="3130790">how</span> <span
  m="3130890">many</span> <span m="3131050">of</span> <span
  m="3131140">you</span> <span m="3131260">have</span> <span
  m="3131420">16</span> <span m="3131980">characters</span> <span
  m="3133150">in</span> <span m="3133280">your</span> <span
  m="3133430">password?</span></p><p><span m="3135390">Oh</span> <span
  m="3135765">I'm impressed.</span> <span m="3136710">OK.</span> <span
  m="3137350">So</span> <span m="3137500">you've</span> <span
  m="3137650">got</span> <span m="3137750">128-bits</span> <span
  m="3138510">of</span> <span m="3138590">entropy.</span> <span
  m="3138980">But</span> <span m="3139060">the</span> <span
  m="3139150">rest</span> <span m="3139340">of</span> <span
  m="3139450">you,</span> <span m="3140060">forget</span> <span
  m="3140320">it.</span> <span m="3141710">This</span> <span
  m="3141860">is</span> <span m="3141970">not</span> <span
  m="3142130">going</span> <span m="3142210">to</span> <span
  m="3142250">help</span> <span m="3142460">you,</span> <span
  m="3142850">OK?</span> <span m="3145040">But</span> <span
  m="3145300">what</span> <span m="3145470">I</span> <span
  m="3145540">want,</span> <span m="3146030">assuming</span> <span
  m="3146380">you</span> <span m="3146600">have</span> <span
  m="3148140">significant</span> <span m="3149280">entropy</span> <span
  m="3149850">in</span> <span m="3149960">your</span> <span
  m="3150310">password--</span> <span m="3151040">because</span> <span
  m="3151230">otherwise,</span> <span m="3151830">if</span> <span
  m="3152170">there's</span> <span m="3152520">not</span> <span
  m="3152710">enough</span> <span m="3152910">entropy</span> <span
  m="3153720">you</span> <span m="3153940">can</span> <span
  m="3154140">just</span> <span m="3154230">enumerate</span> <span
  m="3155060">all</span> <span m="3155350">possible</span> <span
  m="3156030">passwords</span> <span m="3156770">of</span> <span
  m="3157030">eight</span> <span m="3157230">letters.</span> <span
  m="3158360">And</span> <span m="3158530">it's</span> <span
  m="3158640">not</span> <span m="3158820">that</span> <span
  m="3158990">much.</span> <span m="3159230">It's</span> <span
  m="3159600">2</span> <span m="3159700">raised</span> <span
  m="3159890">to</span> <span m="3159970">50,</span> <span
  m="3160500">what</span> <span m="3160700">have</span> <span
  m="3160890">you.</span> <span m="3161500">And</span> <span
  m="3161590">you</span> <span m="3161700">can</span> <span
  m="3161780">just</span> <span m="3161950">go</span> <span
  m="3162090">off.</span> <span m="3162390">And</span> <span
  m="3162600">none</span> <span m="3162810">of</span> <span
  m="3162870">these</span> <span m="3163030">properties</span> <span
  m="3163420">matter.</span></p><p><span m="3164150">You</span> <span
  m="3164290">just--</span> <span m="3164570">you</span> <span m="3164700">have
  your</span> <span m="3164870">h</span> <span m="3165170">of</span> <span
  m="3165290">x.</span> <span m="3165810">It's</span> <span
  m="3167350">public.</span> <span m="3168240">We'll</span> <span
  m="3168390">talk</span> <span m="3168560">about</span> <span
  m="3168740">how</span> <span m="3168830">we</span> <span
  m="3168940">use</span> <span m="3169130">that</span> <span
  m="3169260">in</span> <span m="3169360">a</span> <span
  m="3169410">second.</span> <span m="3170080">But</span> <span
  m="3170240">clearly</span> <span m="3170650">if</span> <span
  m="3170810">the</span> <span m="3171540">domain</span> <span
  m="3172410">is</span> <span m="3172610">small</span> <span
  m="3173350">you</span> <span m="3173470">can</span> <span
  m="3173550">just</span> <span m="3173720">enumerate</span> <span
  m="3174240">the</span> <span m="3174320">domain.</span> <span
  m="3175120">So</span> <span m="3175370">keep</span> <span
  m="3175540">that</span> <span m="3175670">in</span> <span
  m="3175760">mind.</span></p><p><span m="3177450">I talked</span> <span
  m="3177650">about</span> <span m="3177840">h of</span> <span
  m="3178120">x,</span> <span m="3178310">and it's</span> <span
  m="3178480">obviously</span> <span m="3178770">going</span> <span
  m="3178880">to</span> <span m="3178920">be</span> <span
  m="3179030">relevant</span> <span m="3179410">here.</span> <span
  m="3180300">But</span> <span m="3180490">suppose</span> <span
  m="3181110">I</span> <span m="3181220">wanted</span> <span
  m="3181420">to</span> <span m="3181480">build</span> <span
  m="3181740">a</span> <span m="3181800">system,</span> <span
  m="3182520">and</span> <span m="3182740">this</span> <span
  m="3182860">is</span> <span m="3182990">how</span> <span
  m="3183110">systems</span> <span m="3183490">are</span> <span
  m="3183690">built,</span> <span m="3184300">ETC</span> <span
  m="3184750">slash</span> <span m="3185070">password</span> <span
  m="3185500">file,</span> <span m="3186340">assuming</span> <span
  m="3186700">you</span> <span m="3186780">have</span> <span
  m="3186970">long</span> <span m="3187220">passwords</span> <span
  m="3188240">it</span> <span m="3188360">does</span> <span
  m="3188610">it</span> <span m="3188740">this</span> <span
  m="3188900">way,</span> <span m="3191040">otherwise</span> <span
  m="3191400">it</span> <span m="3191500">needs</span> <span
  m="3191880">something</span> <span m="3192180">that's</span> <span
  m="3192340">called</span> <span m="3192530">a</span> <span
  m="3192590">salt.</span> <span m="3193320">But</span> <span
  m="3193950">that's</span> <span m="3194220">6, 8, 57</span> <span
  m="3195340">and</span> <span m="3195460">we</span> <span
  m="3195530">won't</span> <span m="3195730">go</span> <span
  m="3195850">there.</span> <span m="3196540">So</span> <span
  m="3196700">we</span> <span m="3196810">just</span> <span
  m="3196980">assume</span> <span m="3197370">a</span> <span
  m="3197660">large</span> <span m="3197990">entropy.</span></p><p><span
  m="3199590">What</span> <span m="3199920">is</span> <span
  m="3200050">it</span> <span m="3200210">that</span> <span m="3200360">a</span>
  <span m="3200420">system</span> <span m="3200740">can</span> <span
  m="3200920">do?</span> <span m="3201980">What</span> <span m="3202160">can
  it</span> <span m="3202360">store</span> <span m="3203320">in</span> <span
  m="3203470">order</span> <span m="3203710">to</span> <span
  m="3203890">let</span> <span m="3204100">you</span> <span
  m="3204330">in,</span> <span m="3205540">and</span> <span
  m="3205840">only</span> <span m="3206210">let</span> <span
  m="3206500">you</span> <span m="3206760">in</span> <span
  m="3207010">when</span> <span m="3207140">you</span> <span
  m="3207250">type</span> <span m="3207550">your</span> <span
  m="3207720">password,</span> <span m="3208830">and</span> <span
  m="3209010">not</span> <span m="3209280">let</span> <span
  m="3210100">some</span> <span m="3210260">bogus</span> <span
  m="3210430">password</span> <span m="3211400">into</span> <span
  m="3211650">the</span> <span m="3211780">system?</span> <span
  m="3212190">Or</span> <span m="3212300">somebody</span> <span
  m="3212610">with</span> <span m="3212800">a</span> <span
  m="3212940">bogus</span> <span m="3213260">password</span> <span
  m="3213650">into</span> <span m="3213790">the</span> <span
  m="3213900">system.</span> <span m="3214610">Yeah,</span> <span
  m="3214810">go</span> <span m="3214890">ahead.</span></p><p><span
  m="3216166">AUDIENCE: If you</span> <span m="3216624">capture the</span> <span
  m="3217082">password when you enter it</span> <span m="3217540">and
  compare</span> <span m="3217998">it to what's</span> <span
  m="3218456">stored--</span></p><p><span m="3219380">SRINIVAS DEVADAS:
  Yes.</span></p><p><span m="3220810">AUDIENCE:</span> <span m="3221290">If it's
  a one-way</span> <span m="3221770">hash you</span> <span m="3222250">know you
  have what the correct password is.</span></p><p><span m="3222730">SRINIVAS
  DEVADAS: That's</span> <span m="3222980">exactly</span> <span
  m="3223340">right.</span> <span m="3223820">That's</span> <span
  m="3223970">exactly</span> <span m="3224590">right.</span> <span
  m="3224790">So it's a</span> <span m="3224930">really</span> <span
  m="3225390">simple</span> <span m="3226490">idea,</span> <span
  m="3227490">a</span> <span m="3228000">very</span> <span
  m="3228470">powerful</span> <span m="3228880">idea.</span> <span
  m="3229950">It,</span> <span m="3230200">as</span> <span m="3230440">I</span>
  <span m="3230490">said,</span> <span m="3232080">assumed</span> <span
  m="3232690">that the</span> <span m="3233130">entropy--</span> <span
  m="3233750">and</span> <span m="3233950">I'm</span> <span
  m="3234110">belaboring</span> <span m="3234610">the</span> <span
  m="3234690">obvious</span> <span m="3235090">now--</span> <span
  m="3235310">but</span> <span m="3236090">it</span> <span m="3236250">is</span>
  <span m="3236360">important</span> <span m="3236890">when</span> <span
  m="3237040">you</span> <span m="3237250">talk</span> <span
  m="3237450">about</span> <span m="3237650">security</span> <span
  m="3238190">to</span> <span m="3238320">state</span> <span
  m="3238670">your</span> <span m="3238990">assumptions.</span> <span
  m="3239890">But</span> <span m="3240150">you</span> <span
  m="3240330">do</span> <span m="3240440">not</span> <span
  m="3240720">store</span> <span m="3241050">password</span> <span
  m="3242170">on</span> <span m="3242410">your</span> <span
  m="3242570">computer.</span> <span m="3244380">And</span> <span
  m="3244590">you</span> <span m="3244710">store</span> <span
  m="3245000">the</span> <span m="3245590">hash</span> <span
  m="3245860">of</span> <span m="3246250">the</span> <span
  m="3246330">password.</span></p><p><span m="3246940">Now</span> <span
  m="3247050">why</span> <span m="3247220">do</span> <span m="3247370">I</span>
  <span m="3247610">store</span> <span m="3247950">my</span> <span
  m="3248080">password</span> <span m="3248460">on</span> <span
  m="3248510">the</span> <span m="3248600">computer?</span> <span
  m="3249530">Because</span> <span m="3249670">this</span> <span
  m="3249840">is</span> <span m="3250090">so</span> <span
  m="3250290">inconvenient,</span> <span m="3251680">right?</span> <span
  m="3252200">So</span> <span m="3253220">this</span> <span
  m="3253430">is</span> <span m="3253580">what</span> <span
  m="3253780">the</span> <span m="3253860">system</span> <span
  m="3254180">does</span> <span m="3254370">for</span> <span
  m="3254560">me.</span> <span m="3255180">But</span> <span
  m="3256030">the</span> <span m="3256110">fact</span> <span
  m="3256350">of</span> <span m="3256390">the</span> <span
  m="3256440">matter</span> <span m="3256670">is,</span> <span
  m="3256770">if</span> <span m="3256860">I</span> <span m="3256920">lose</span>
  <span m="3257300">my</span> <span m="3257460">password,</span> <span
  m="3258110">this</span> <span m="3258330">doesn't</span> <span
  m="3258570">help</span> <span m="3258740">me.</span> <span
  m="3259470">Because</span> <span m="3259910">what</span> <span
  m="3260190">the</span> <span m="3260310">system</span> <span
  m="3260710">wants</span> <span m="3261040">you</span> <span
  m="3261190">to</span> <span m="3261300">do</span> <span m="3262060">is</span>
  <span m="3263300">choose</span> <span m="3263550">a</span> <span
  m="3263610">password</span> <span m="3264050">that is</span> <span
  m="3264170">long</span> <span m="3264390">enough,</span> <span
  m="3264850">and</span> <span m="3265220">the h</span> <span
  m="3265540">is</span> <span m="3265670">one-way.</span> <span
  m="3266720">So</span> <span m="3267070">anybody</span> <span
  m="3267650">who</span> <span m="3267780">discovers</span> <span m="3268360">h
  of</span> <span m="3268805">PW</span> <span m="3269250">that</span> <span
  m="3269420">is</span> <span m="3269540">publicly</span> <span
  m="3270090">readable</span> <span m="3270960">cannot</span> <span
  m="3271390">discover</span> <span m="3271800">PW,</span> <span
  m="3273050">all</span> <span m="3273120">right?</span> <span
  m="3273840">That's</span> <span m="3274050">what's</span> <span
  m="3274260">cool</span> <span m="3274410">about</span> <span
  m="3274650">this.</span></p><p><span m="3276420">How</span> <span
  m="3276660">do</span> <span m="3276720">you</span> <span
  m="3277210">let</span> <span m="3277400">the</span> <span
  m="3277480">person</span> <span m="3277790">log</span> <span
  m="3278100">in?</span> <span m="3278740">Use</span> <span m="3279070">h</span>
  <span m="3279406">of</span> <span m="3279742">PW</span> <span
  m="3280520">to</span> <span m="3280680">compare</span> <span
  m="3282790">against</span> <span m="3285272">h</span> <span m="3285730">of
  PW</span> <span m="3286590">prime,</span> <span m="3287860">which</span> <span
  m="3287940">is</span> <span m="3288220">what</span> <span
  m="3288410">is</span> <span m="3288520">entered,</span> <span
  m="3289280">where</span> <span m="3291091">PW</span> <span
  m="3291510">prime</span> <span m="3293320">is</span> <span
  m="3293540">the</span> <span m="3293640">typed</span> <span
  m="3293990">password.</span></p><p><span m="3300540">And</span> <span
  m="3301520">clearly</span> <span m="3301970">what</span> <span
  m="3302140">we</span> <span m="3302250">need</span> <span
  m="3302500">is</span> <span m="3302640">the</span> <span
  m="3302890">disclosure</span> <span m="3305690">of</span> <span
  m="3306160">h</span> <span m="3306655">of</span> <span m="3307150">PW</span>
  <span m="3308530">should</span> <span m="3308850">not</span> <span
  m="3311290">reveal</span> <span m="3313688">PW.</span> <span
  m="3314960">So</span> <span m="3315450">we</span> <span
  m="3315600">definitely</span> <span m="3315970">need</span> <span
  m="3317290">one-wayness.</span> <span m="3319570">What</span> <span
  m="3319810">about--</span> <span m="3320970">what</span> <span
  m="3321120">about</span> <span m="3321780">collision</span> <span
  m="3322290">resistance?</span> <span m="3324370">Our</span> <span
  m="3324780">target</span> <span m="3325150">collision</span> <span
  m="3325530">resistance?</span></p><p><span m="3328340">Think</span> <span
  m="3329200">practitioner</span> <span m="3329770">now,</span> <span
  m="3330450">right?</span> <span m="3331350">Are</span> <span
  m="3331550">we</span> <span m="3331730">interested</span> <span
  m="3332170">in</span> <span m="3332290">this</span> <span
  m="3332460">hash</span> <span m="3332750">function</span> <span
  m="3333590">being</span> <span m="3333800">collision</span> <span
  m="3334230">resistant?</span> <span m="3334880">What does</span> <span
  m="3335110">that</span> <span m="3335330">mean</span> <span
  m="3336350">in</span> <span m="3336490">this</span> <span
  m="3336670">case?</span> <span m="3337150">Give</span> <span
  m="3337300">me</span> <span m="3337380">the</span> <span
  m="3337860">context</span> <span m="3338420">in</span> <span
  m="3338510">this</span> <span m="3338680">particular</span> <span
  m="3339010">application?</span> <span m="3340440">Yeah, go
  ahead.</span></p><p><span m="3340940">AUDIENCE:</span> <span m="3341430">It
  means</span> <span m="3341920">that someone</span> <span m="3342410">entering
  a</span> <span m="3342900">different</span> <span m="3343390">password</span>
  <span m="3344860">will</span> <span m="3345350">have</span> <span
  m="3345840">the same</span> <span m="3346330">hash</span> <span
  m="3346820">[INAUDIBLE].</span></p><p><span m="3347320">SRINIVAS DEVADAS:
  Exactly.</span> <span m="3348190">So</span> <span m="3348610">it</span> <span
  m="3348770">means</span> <span m="3349070">that</span> <span
  m="3349700">what</span> <span m="3349910">you</span> <span
  m="3350000">have</span> <span m="3350330">is</span> <span m="3352140">a</span>
  <span m="3352230">situation</span> <span m="3352780">where</span> <span
  m="3354700">you</span> <span m="3356230">do</span> <span
  m="3356360">not</span> <span m="3356600">reveal--</span> <span
  m="3357930">and</span> <span m="3358190">so</span> <span
  m="3358290">what</span> <span m="3358460">might</span> <span
  m="3358670">happen</span> <span m="3358960">is</span> <span
  m="3359050">that</span> <span m="3359240">h</span> <span m="3359490">of
  PW</span> <span m="3359620">prime</span> <span m="3360900">equals</span> <span
  m="3361640">h</span> <span m="3361770">of</span> <span m="3361890">PW.</span>
  <span m="3362460">But</span> <span m="3363500">h</span> <span
  m="3364030">of</span> <span m="3364250">PW</span> <span
  m="3364730">equals</span> <span m="3365200">h</span> <span m="3365400">of
  PW</span> <span m="3365470">prime.</span> <span m="3367190">But</span> <span
  m="3367780">PW</span> <span m="3369170">is</span> <span m="3369390">not</span>
  <span m="3369680">equal</span> <span m="3370040">to</span> <span
  m="3370120">PW</span> <span m="3370530">prime.</span> <span
  m="3371490">What</span> <span m="3371560">you</span> <span
  m="3371670">have</span> <span m="3371930">is</span> <span m="3372030">a</span>
  <span m="3372090">false</span> <span m="3372570">positive.</span></p><p><span
  m="3373950">Someone</span> <span m="3374320">who</span> <span
  m="3374450">didn't</span> <span m="3374750">know</span> <span
  m="3374900">your</span> <span m="3375040">password</span> <span
  m="3375570">but</span> <span m="3375760">guessed</span> <span
  m="3376060">right--</span> <span m="3376870">and</span> <span
  m="3377010">this</span> <span m="3377110">is a</span> <span
  m="3377210">128-bit</span> <span m="3378000">value,</span> <span
  m="3379060">and</span> <span m="3379200">they</span> <span
  m="3379280">guessed</span> <span m="3379550">right--</span> <span
  m="3380890">is</span> <span m="3381040">going</span> <span
  m="3381150">to</span> <span m="3381200">get</span> <span
  m="3381340">it.</span> <span m="3382840">You</span> <span
  m="3383070">don't</span> <span m="3383240">particularly</span> <span
  m="3383640">care</span> <span m="3383960">of the</span> <span
  m="3384080">probability</span> <span m="3384940">of</span> <span
  m="3385290">this</span> <span m="3385820">occurrence.</span> <span
  m="3386190">It's</span> <span m="3386560">really</span> <span
  m="3386800">small.</span> <span m="3387900">Typically</span> <span
  m="3388320">you're</span> <span m="3388430">going</span> <span
  m="3388530">to</span> <span m="3388570">have</span> <span
  m="3388720">systems</span> <span m="3389140">that</span> <span
  m="3389220">lock</span> <span m="3389560">you</span> <span
  m="3389720">out</span> <span m="3390570">if</span> <span
  m="3390780">you</span> <span m="3390900">try</span> <span
  m="3391140">10</span> <span m="3391450">tries</span> <span
  m="3392500">that</span> <span m="3392750">occurs</span> <span
  m="3392940">one,</span> <span m="3393250">two,</span> <span
  m="3393920">wrong</span> <span m="3394200">passwords,</span> <span
  m="3395070">right?</span></p><p><span m="3395270">So</span> <span
  m="3395600">really</span> <span m="3395880">in</span> <span
  m="3395980">systems</span> <span m="3396860">you do</span> <span
  m="3397060">not</span> <span m="3397320">require--</span> <span
  m="3398160">you do</span> <span m="3398590">want</span> <span m="3398660">to
  build</span> <span m="3398830">systems</span> <span m="3399230">that</span>
  <span m="3399340">have</span> <span m="3399560">minimal</span> <span
  m="3400710">properties</span> <span m="3401600">with</span> <span
  m="3401740">respect</span> <span m="3402090">to</span> <span
  m="3402170">the</span> <span m="3402280">perimeters</span> <span
  m="3402700">that</span> <span m="3402820">are</span> <span
  m="3402880">used.</span> <span m="3403570">So</span> <span
  m="3403740">from</span> <span m="3403880">a</span> <span
  m="3403940">system</span> <span m="3404250">building</span> <span
  m="3404510">standpoint</span> <span m="3405390">just</span> <span
  m="3405670">require</span> <span m="3406070">OW.</span> <span
  m="3407090">Don't</span> <span m="3407360">go</span> <span
  m="3407460">overboard.</span> <span m="3408350">Don't</span> <span
  m="3408520">require</span> <span m="3408960">collision</span> <span
  m="3409320">resistance</span> <span m="3409860">or</span> <span
  m="3410070">TCR,</span> <span m="3411250">OK?</span></p><p><span
  m="3413100">Let's</span> <span m="3413330">do</span> <span
  m="3413530">a</span> <span m="3414330">slightly</span> <span
  m="3414690">different</span> <span m="3414900">example.</span> <span
  m="3415420">Also</span> <span m="3417820">a</span> <span
  m="3417900">bit</span> <span m="3418180">of</span> <span m="3418450">a warm-up
  for</span> <span m="3418720">what's</span> <span m="3419010">coming</span>
  <span m="3419270">next,</span> <span m="3420160">which</span> <span
  m="3420200">is</span> <span m="3420300">a</span> <span m="3420360">file</span>
  <span m="3420800">modification</span> <span m="3421590">detector.</span> <span
  m="3442080">So</span> <span m="3442350">for</span> <span
  m="3443230">each</span> <span m="3443620">file</span> <span
  m="3445370">F,</span> <span m="3447070">I'm</span> <span
  m="3447180">going</span> <span m="3447310">to</span> <span
  m="3447360">store</span> <span m="3447580">h</span> <span
  m="3448075">of</span> <span m="3449560">F.</span> <span m="3451450">And</span>
  <span m="3451900">as</span> <span m="3452050">securely.</span> <span
  m="3452800">So</span> <span m="3453080">you</span> <span
  m="3453610">assume</span> <span m="3453980">that</span> <span
  m="3454370">this</span> <span m="3454580">means</span> <span
  m="3454830">that</span> <span m="3454960">h</span> <span m="3455160">of</span>
  <span m="3455290">F</span> <span m="3456040">cannot</span> <span
  m="3456320">be</span> <span m="3456440">modified</span> <span
  m="3456980">by</span> <span m="3457110">anybody,</span> <span
  m="3459460">h</span> <span m="3459640">of</span> <span m="3459750">F</span>
  <span m="3459930">itself.</span></p><p><span m="3467860">And</span> <span
  m="3468330">now</span> <span m="3468630">we</span> <span
  m="3468700">want</span> <span m="3468830">to</span> <span
  m="3468900">check</span> <span m="3471210">if</span> <span
  m="3471570">F</span> <span m="3472060">is</span> <span
  m="3472180">modified</span> <span m="3476030">by</span> <span
  m="3477780">re-computing</span> <span m="3482280">h</span> <span
  m="3482580">of</span> <span m="3482630">F.</span> <span
  m="3483040">Which</span> <span m="3483480">could</span> <span
  m="3483640">be,</span> <span m="3484470">this</span> <span
  m="3484850">could</span> <span m="3484950">be</span> <span
  m="3485060">modified.</span> <span m="3485640">So</span> <span
  m="3485740">this</span> <span m="3485800">could</span> <span
  m="3485910">actually</span> <span m="3486150">be</span> <span
  m="3486290">F</span> <span m="3486450">prime.</span> <span
  m="3487130">You</span> <span m="3487240">don't</span> <span
  m="3487430">know</span> <span m="3487570">that.</span></p><p><span
  m="3489250">You</span> <span m="3489870">have</span> <span
  m="3490050">a</span> <span m="3490110">file.</span> <span
  m="3490500">It's</span> <span m="3490680">a</span> <span
  m="3490740">gigabyte.</span> <span m="3491780">And</span> <span
  m="3493110">somebody</span> <span m="3493460">might</span> <span
  m="3493580">have</span> <span m="3493680">tampered</span> <span
  m="3494020">with</span> <span m="3494110">one</span> <span
  m="3494270">of</span> <span m="3494330">the</span> <span
  m="3494390">bits</span> <span m="3494740">in</span> <span
  m="3494870">the</span> <span m="3494960">file.</span> <span
  m="3496030">All</span> <span m="3496180">you</span> <span
  m="3496330">have</span> <span m="3496600">is</span> <span m="3497370">a</span>
  <span m="3497450">d-bit</span> <span m="3498020">digest</span> <span
  m="3499200">that</span> <span m="3499340">corresponds</span> <span
  m="3499800">to</span> <span m="3499890">h</span> <span m="3500110">of</span>
  <span m="3500240">F</span> <span m="3500860">that</span> <span
  m="3501040">you</span> <span m="3501180">stored</span> <span
  m="3501560">in</span> <span m="3501670">a</span> <span
  m="3501720">secure</span> <span m="3502010">location.</span> <span
  m="3503670">And</span> <span m="3504510">you</span> <span
  m="3504650">want</span> <span m="3504780">to</span> <span
  m="3505050">check</span> <span m="3505470">to</span> <span
  m="3505600">see,</span> <span m="3506360">by</span> <span
  m="3506530">re-computing</span> <span m="3507190">h</span> <span
  m="3507390">of</span> <span m="3507530">F,</span> <span m="3509570">the file
  that</span> <span m="3509670">is</span> <span m="3509780">given</span> <span
  m="3510020">to</span> <span m="3510325">you,</span> <span
  m="3511940">and</span> <span m="3512170">comparing</span> <span
  m="3512650">it</span> <span m="3512760">with</span> <span
  m="3512880">what</span> <span m="3513040">you've</span> <span
  m="3513170">stored,</span> <span m="3513590">the</span> <span
  m="3513750">h</span> <span m="3513920">of</span> <span m="3513970">F
  that</span> <span m="3514300">you've</span> <span
  m="3514420">stored.</span></p><p><span m="3515730">And</span> <span
  m="3515920">so</span> <span m="3517730">what</span> <span
  m="3517930">property</span> <span m="3518300">do</span> <span
  m="3518390">we</span> <span m="3518480">need</span> <span
  m="3519870">in</span> <span m="3520050">order</span> <span
  m="3520200">to</span> <span m="3520270">pull</span> <span
  m="3520460">this</span> <span m="3520650">off?</span> <span
  m="3522200">Of</span> <span m="3522610">hash</span> <span
  m="3522850">functions.</span> <span m="3524590">What</span> <span
  m="3525920">precisely</span> <span m="3526460">do</span> <span
  m="3526550">we</span> <span m="3526640">need</span> <span
  m="3527420">to</span> <span m="3527510">pull</span> <span
  m="3527660">this</span> <span m="3527800">off?</span> <span
  m="3530620">What</span> <span m="3530800">is</span> <span
  m="3530880">the</span> <span m="3531060">adversary</span> <span
  m="3531370">trying</span> <span m="3531560">to</span> <span
  m="3531630">do?</span> <span m="3533040">And</span> <span
  m="3533200">what</span> <span m="3533320">is</span> <span m="3533430">a</span>
  <span m="3533510">successful</span> <span
  m="3533920">break?</span></p><p><span m="3535530">A</span> <span
  m="3535610">successful</span> <span m="3536110">break</span> <span
  m="3537040">is</span> <span m="3537660">if</span> <span m="3538340">an</span>
  <span m="3538460">adversary</span> <span m="3539610">can</span> <span
  m="3539830">modify</span> <span m="3540430">the</span> <span
  m="3540560">file</span> <span m="3542000">and</span> <span
  m="3543960">keep</span> <span m="3545560">h</span> <span m="3545770">of</span>
  <span m="3545920">F</span> <span m="3546570">the</span> <span
  m="3546710">same,</span> <span m="3547110">right?</span> <span
  m="3548720">That</span> <span m="3548860">would</span> <span
  m="3548960">be</span> <span m="3549060">a</span> <span
  m="3549120">successful</span> <span m="3549530">break,</span> <span
  m="3549880">right?</span> <span m="3550780">Yup.</span> <span
  m="3553600">Go</span> <span m="3553700">ahead.</span></p><p><span
  m="3554125">AUDIENCE: TCR.</span></p><p><span m="3554910">SRINIVAS DEVADAS:
  TCR?</span> <span m="3555550">Yeah,</span> <span
  m="3555800">absolutely.</span> <span m="3556300">You need</span> <span
  m="3556460">TCR.</span> <span m="3559350">So</span> <span
  m="3559790">you</span> <span m="3559980">want</span> <span
  m="3560220">to</span> <span m="3560280">modify</span> <span
  m="3561180">the</span> <span m="3561270">file.</span> <span
  m="3574830">So</span> <span m="3574970">you're</span> <span
  m="3575100">given</span> <span m="3576310">that</span> <span
  m="3577400">the</span> <span m="3577550">file--</span> <span m="3577900">the
  adversary</span> <span m="3578230">is</span> <span m="3578390">given</span>
  <span m="3578640">the</span> <span m="3578750">file,</span> <span
  m="3579510">which</span> <span m="3579700">is</span> <span
  m="3579790">the</span> <span m="3579850">input</span> <span
  m="3580150">to</span> <span m="3580220">the</span> <span
  m="3580320">hash,</span> <span m="3581980">and</span> <span
  m="3582540">is</span> <span m="3582740">going</span> <span
  m="3582870">to</span> <span m="3582930">try</span> <span
  m="3583090">and</span> <span m="3583160">modify--</span> <span
  m="3583886">modify</span> <span m="3584250">the</span> <span
  m="3584350">file,</span> <span m="3585240">right?</span></p><p><span
  m="3587550">So</span> <span m="3587750">let's</span> <span
  m="3587990">do</span> <span m="3590000">a</span> <span
  m="3590090">couple</span> <span m="3590360">more.</span> <span
  m="3591130">And</span> <span m="3591300">we're</span> <span
  m="3591390">going</span> <span m="3591510">to</span> <span
  m="3591620">advance</span> <span m="3593790">our</span> <span
  m="3593950">requirements</span> <span m="3594420">here a</span> <span
  m="3594610">little</span> <span m="3594790">bit.</span> <span
  m="3597470">So</span> <span m="3597750">those</span> <span
  m="3597990">two</span> <span m="3598160">are</span> <span
  m="3600140">basic</span> <span m="3600590">properties.</span> <span
  m="3601080">I</span> <span m="3601280">want to</span> <span
  m="3601420">leave</span> <span m="3601630">this</span> <span
  m="3601760">up</span> <span m="3601890">there.</span></p><p><span
  m="3605350">We're</span> <span m="3605470">going to</span> <span
  m="3605630">do</span> <span m="3605720">something</span> <span
  m="3606010">that</span> <span m="3606400">corresponds</span> <span
  m="3606770">to</span> <span m="3606910">digital</span> <span
  m="3607370">signatures.</span> <span m="3608690">So</span> <span
  m="3608800">digital</span> <span m="3609160">signatures</span> <span
  m="3609720">are</span> <span m="3609830">this</span> <span
  m="3610020">wonderful</span> <span m="3611550">invention</span> <span
  m="3613030">that</span> <span m="3613140">came</span> <span
  m="3613360">out</span> <span m="3613460">of</span> <span
  m="3615140">MIT</span> <span m="3615630">in</span> <span m="3616150">a</span>
  <span m="3616440">computer</span> <span m="3616760">science</span> <span
  m="3617070">laboratory--</span> <span m="3618290">again,</span> <span
  m="3619820">Ron</span> <span m="3620240">Rivest</span> <span
  m="3620550">and</span> <span m="3620860">collaborators--</span> <span
  m="3622420">which</span> <span m="3623160">are a</span> <span
  m="3623370">way</span> <span m="3623840">of</span> <span
  m="3624970">digitally</span> <span m="3625570">signing</span> <span
  m="3626110">a</span> <span m="3626170">document</span> <span
  m="3627660">using</span> <span m="3628120">a</span> <span
  m="3628620">secret</span> <span m="3629380">key,</span> <span
  m="3629810">a</span> <span m="3630040">private</span> <span
  m="3630350">key.</span> <span m="3631170">But</span> <span
  m="3631370">anybody</span> <span m="3633070">who</span> <span
  m="3634260">has</span> <span m="3634550">access</span> <span
  m="3634870">to</span> <span m="3634970">a</span> <span
  m="3635030">public</span> <span m="3635370">key,</span> <span
  m="3635660">so</span> <span m="3635810">it</span> <span
  m="3635920">could</span> <span m="3636030">be</span> <span
  m="3636140">pretty</span> <span m="3636280">much</span> <span
  m="3636450">anybody,</span> <span m="3637210">could</span> <span
  m="3637380">verify</span> <span m="3638560">the</span> <span
  m="3638790">authenticity</span> <span m="3640000">of</span> <span
  m="3640410">that</span> <span m="3640600">signature,</span> <span
  m="3641620">right?</span> <span m="3641820">So</span> <span
  m="3641890">that's</span> <span m="3642050">what</span> <span
  m="3642200">a</span> <span m="3642260">digital</span> <span
  m="3642560">signature</span> <span m="3643010">is.</span></p><p><span
  m="3652490">So</span> <span m="3653890">we're going to</span> <span
  m="3654150">talk</span> <span m="3654320">about</span> <span
  m="3654490">public</span> <span m="3654790">cryptography</span> <span
  m="3655960">on</span> <span m="3656140">Thursday,</span> <span
  m="3658080">in</span> <span m="3658220">terms</span> <span
  m="3658430">of</span> <span m="3658510">how</span> <span
  m="3658670">you</span> <span m="3658810">could</span> <span
  m="3658980">build</span> <span m="3660730">systems</span> <span
  m="3662740">or</span> <span m="3663050">encryption</span> <span
  m="3663470">algorithms</span> <span m="3664370">that</span> <span
  m="3664490">are</span> <span m="3664560">public</span> <span
  m="3664850">key</span> <span m="3665050">algorithms.</span> <span
  m="3666640">But</span> <span m="3666790">here</span> <span
  m="3667170">I'll</span> <span m="3667290">just</span> <span
  m="3667490">tell</span> <span m="3667620">you</span> <span
  m="3667770">what</span> <span m="3669780">we</span> <span
  m="3669930">want</span> <span m="3670240">out</span> <span
  m="3670360">of</span> <span m="3670580">them.</span> <span
  m="3672470">Essentially</span> <span m="3672930">what</span> <span
  m="3673520">we</span> <span m="3673640">have</span> <span
  m="3673830">here</span> <span m="3674020">in</span> <span
  m="3674080">the</span> <span m="3674150">case</span> <span
  m="3674320">of</span> <span m="3674390">signatures,</span> <span
  m="3675100">we</span> <span m="3675220">actually</span> <span
  m="3675450">want</span> <span m="3675570">to</span> <span
  m="3675610">talk</span> <span m="3675790">about</span> <span
  m="3675970">encryption</span> <span m="3676390">here,</span> <span
  m="3678100">are--</span> <span m="3678600">there's</span> <span
  m="3679200">two</span> <span m="3679380">keys</span> <span
  m="3679900">associated</span> <span m="3680180">with</span> <span
  m="3680540">a</span> <span m="3681200">public</span> <span
  m="3681430">key</span> <span m="3681860">system.</span></p><p><span
  m="3684030">Anybody</span> <span m="3684980">and</span> <span
  m="3685130">everybody</span> <span m="3685660">in</span> <span
  m="3685890">the</span> <span m="3686010">system</span> <span
  m="3686880">would</span> <span m="3687000">have</span> <span
  m="3687170">a</span> <span m="3687230">public</span> <span
  m="3687580">key</span> <span m="3688390">that</span> <span
  m="3688950">you</span> <span m="3689100">can</span> <span
  m="3689210">put</span> <span m="3689350">on</span> <span
  m="3689440">your</span> <span m="3689550">website.</span> <span
  m="3691090">And</span> <span m="3691530">you</span> <span
  m="3691700">also</span> <span m="3691870">have</span> <span
  m="3691990">a</span> <span m="3692040">secret</span> <span
  m="3692340">key--</span> <span m="3692880">that's</span> <span
  m="3693040">like</span> <span m="3693220">your</span> <span
  m="3693350">password--</span> <span m="3694500">that</span> <span
  m="3694900">you</span> <span m="3695110">don't want</span> <span
  m="3695250">to</span> <span m="3695300">write</span> <span
  m="3695530">down,</span> <span m="3695930">you</span> <span
  m="3696160">don't</span> <span m="3696260">want</span> <span
  m="3696350">to</span> <span m="3696390">give</span> <span
  m="3696510">away,</span> <span m="3697250">because</span> <span
  m="3697460">that's</span> <span m="3697620">effectively</span> <span
  m="3697935">your</span> <span m="3698250">identity.</span> <span
  m="3699930">And</span> <span m="3700440">what</span> <span
  m="3702510">digital</span> <span m="3702640">signatures</span> <span
  m="3703140">respond</span> <span m="3703520">to</span> <span
  m="3704700">are</span> <span m="3705110">that</span> <span
  m="3705250">you</span> <span m="3705330">have</span> <span
  m="3705520">two</span> <span m="3705720">operations.</span> <span
  m="3706880">You</span> <span m="3707000">have</span> <span
  m="3707290">signing</span> <span m="3708350">and</span> <span
  m="3709370">verification.</span></p><p><span m="3711030">So</span> <span
  m="3711980">signing</span> <span m="3712750">means</span> <span
  m="3712820">that</span> <span m="3713030">you</span> <span
  m="3713210">create</span> <span m="3713560">a</span> <span
  m="3713630">signature</span> <span m="3714310">sigma</span> <span
  m="3716430">that</span> <span m="3716760">is</span> <span
  m="3717230">the</span> <span m="3718200">sign</span> <span
  m="3720600">using</span> <span m="3721040">your</span> <span
  m="3724090">private</span> <span m="3724500">key,</span> <span
  m="3725100">your</span> <span m="3725230">secret</span> <span
  m="3725550">key,</span> <span m="3726420">off</span> <span
  m="3726710">a</span> <span m="3726780">message</span> <span
  m="3727140">M.</span> <span m="3727810">So</span> <span
  m="3728010">you're</span> <span m="3728510">saying</span> <span
  m="3728900">this is this</span> <span m="3729340">message,</span> <span
  m="3730070">it</span> <span m="3730240">came</span> <span
  m="3730540">from</span> <span m="3730780">me,</span> <span
  m="3731790">right?</span> <span m="3732060">That's</span> <span
  m="3732310">what</span> <span m="3732670">signing</span> <span
  m="3733220">means.</span> <span m="3733780">You</span> <span
  m="3733920">have</span> <span m="3734060">this</span> <span
  m="3734190">long</span> <span m="3734390">message</span> <span m="3734850">and
  you</span> <span m="3735190">sign it at</span> <span m="3735240">the</span>
  <span m="3735340">bottom.</span> <span m="3736030">You're taking</span> <span
  m="3736320">responsibility</span> <span m="3737050">for</span> <span
  m="3737130">the</span> <span m="3737240">contents</span> <span
  m="3737680">of</span> <span m="3737770">that</span> <span
  m="3737920">message.</span></p><p><span m="3740620">And</span> <span
  m="3740790">then</span> <span m="3741210">verification</span> <span
  m="3741930">is</span> <span m="3743220">you</span> <span
  m="3743330">have</span> <span m="3743610">M</span> <span
  m="3744590">sigma</span> <span m="3745910">and</span> <span
  m="3746150">a</span> <span m="3746210">public</span> <span
  m="3746580">key.</span> <span m="3747710">And</span> <span
  m="3747970">this</span> <span m="3748090">is</span> <span
  m="3748220">simply</span> <span m="3748560">going</span> <span
  m="3748720">to</span> <span m="3748870">output</span> <span
  m="3751100">true</span> <span m="3751320">or</span> <span
  m="3751440">false.</span> <span m="3755780">And</span> <span
  m="3756210">so</span> <span m="3756920">the</span> <span
  m="3757630">public</span> <span m="3757905">key</span> <span
  m="3758870">should</span> <span m="3759110">not</span> <span
  m="3759510">reveal</span> <span m="3760660">any</span> <span
  m="3760970">information</span> <span m="3762260">about</span> <span
  m="3762490">the</span> <span m="3762560">secret</span> <span
  m="3762920">key.</span> <span m="3768570">And</span> <span
  m="3768730">that's</span> <span m="3768920">the</span> <span
  m="3769040">challenge</span> <span m="3769560">of</span> <span
  m="3769820">building</span> <span m="3770820">PKI</span> <span
  m="3771320">systems,</span> <span m="3771700">that</span> <span
  m="3771820">we'll</span> <span m="3771970">talk</span> <span
  m="3772140">about</span> <span m="3772380">in</span> <span
  m="3772470">some</span> <span m="3772680">detail</span> <span
  m="3775410">next</span> <span m="3775710">time.</span> <span
  m="3776800">But</span> <span m="3776940">we</span> <span
  m="3777020">don't</span> <span m="3777160">need</span> <span
  m="3777330">to</span> <span m="3779080">think</span> <span
  m="3779210">about</span> <span m="3779410">that</span> <span
  m="3781270">other</span> <span m="3781440">than</span> <span
  m="3783260">acknowledging</span> <span m="3783820">it</span> <span
  m="3784850">today.</span></p><p><span m="3786100">So</span> <span
  m="3786780">the</span> <span m="3786950">public</span> <span
  m="3787230">and</span> <span m="3787610">private</span> <span
  m="3787900">key</span> <span m="3788190">are</span> <span
  m="3788410">two</span> <span m="3788550">distinct</span> <span
  m="3788920">things,</span> <span m="3789680">neither</span> <span
  m="3789990">one</span> <span m="3790150">of</span> <span
  m="3790290">which</span> <span m="3790490">reveals</span> <span
  m="3790900">anything</span> <span m="3791220">about</span> <span
  m="3791420">the</span> <span m="3791480">other.</span> <span
  m="3792150">Think</span> <span m="3792290">of</span> <span
  m="3792360">them</span> <span m="3792490">as</span> <span
  m="3792740">completely</span> <span m="3793140">distinct</span> <span
  m="3793510">passwords.</span> <span m="3794430">But</span> <span
  m="3794680">they</span> <span m="3794770">happen</span> <span
  m="3795050">to</span> <span m="3795100">be</span> <span
  m="3795220">mathematically</span> <span m="3795830">related.</span> <span
  m="3796730">That's</span> <span m="3796960">why</span> <span
  m="3797210">this</span> <span m="3797390">whole</span> <span
  m="3797570">thing</span> <span m="3797730">works.</span> <span
  m="3798500">And</span> <span m="3798650">that</span> <span
  m="3798800">mathematical</span> <span m="3799290">relationship</span> <span
  m="3800260">we'll</span> <span m="3800470">look</span> <span
  m="3800750">at</span> <span m="3801560">in</span> <span
  m="3801710">some</span> <span m="3802320">detail</span> <span
  m="3802780">on</span> <span m="3803890">Thursday.</span></p><p><span
  m="3804750">But</span> <span m="3805230">having</span> <span
  m="3805450">said</span> <span m="3805670">that,</span> <span
  m="3806320">take</span> <span m="3806690">a</span> <span
  m="3806740">look</span> <span m="3806920">at</span> <span
  m="3807010">what</span> <span m="3807240">this</span> <span
  m="3807790">app</span> <span m="3808010">is</span> <span
  m="3808140">doing</span> <span m="3808340">for</span> <span
  m="3808620">us,</span> <span m="3809350">right?</span> <span
  m="3809490">This</span> <span m="3809600">is</span> <span m="3809710">a</span>
  <span m="3809780">security</span> <span m="3810200">application.</span> <span
  m="3811370">And</span> <span m="3811960">I</span> <span
  m="3812040">haven't</span> <span m="3812230">quite</span> <span
  m="3812440">gotten</span> <span m="3812660">to</span> <span
  m="3812720">hash</span> <span m="3812940">functions</span> <span
  m="3813320">yet.</span> <span m="3813930">But</span> <span
  m="3814490">I'll</span> <span m="3814610">get</span> <span
  m="3814800">to</span> <span m="3814910">it</span> <span m="3815060">in</span>
  <span m="3815300">just</span> <span m="3815630">a</span> <span
  m="3815680">minute.</span></p><p><span m="3816600">But</span> <span
  m="3817190">what</span> <span m="3817380">I</span> <span
  m="3817410">want</span> <span m="3817560">to</span> <span
  m="3817620">do</span> <span m="3817770">is</span> <span
  m="3818110">emphasize</span> <span m="3818880">that</span> <span
  m="3819090">there's</span> <span m="3819330">two</span> <span
  m="3819700">operations</span> <span m="3820250">going</span> <span
  m="3820470">on.</span> <span m="3821150">One</span> <span
  m="3821310">of</span> <span m="3821400">which</span> <span
  m="3821560">is</span> <span m="3821660">a</span> <span
  m="3821730">signature,</span> <span m="3822630">which</span> <span
  m="3822760">is</span> <span m="3822850">a</span> <span
  m="3822910">private</span> <span m="3823320">signature,</span> <span
  m="3824320">in</span> <span m="3824440">the</span> <span
  m="3824530">sense</span> <span m="3824810">that</span> <span
  m="3824950">it's</span> <span m="3825130">private</span> <span
  m="3825490">to</span> <span m="3825580">me,</span> <span m="3826050">if</span>
  <span m="3826400">I'm</span> <span m="3826630">Alice.</span> <span
  m="3827160">Or private to</span> <span m="3827600">Alice.</span> <span
  m="3828500">And</span> <span m="3828740">you're</span> <span
  m="3828850">using</span> <span m="3829180">secret</span> <span
  m="3829540">information</span> <span m="3830590">on</span> <span
  m="3830810">this</span> <span m="3831030">public</span> <span
  m="3831380">message,</span> <span m="3831900">M,</span> <span
  m="3832560">because that's</span> <span m="3832810">going</span> <span
  m="3832930">to</span> <span m="3832970">be</span> <span
  m="3833040">publicized.</span> <span m="3834690">And</span> <span
  m="3835150">you're</span> <span m="3835260">going</span> <span
  m="3835350">to</span> <span m="3835400">sign</span> <span
  m="3835680">the</span> <span m="3835800">public</span> <span
  m="3836080">message.</span></p><p><span m="3837580">And</span> <span
  m="3837720">then</span> <span m="3838040">anybody</span> <span
  m="3838870">in</span> <span m="3838990">the</span> <span
  m="3839080">world</span> <span m="3840075">who</span> <span
  m="3840460">has</span> <span m="3840730">access</span> <span
  m="3841160">to</span> <span m="3841290">Alice's</span> <span
  m="3841740">public</span> <span m="3842030">key</span> <span
  m="3842820">is</span> <span m="3842990">going</span> <span
  m="3843090">to</span> <span m="3843130">be</span> <span
  m="3843240">able</span> <span m="3843400">to</span> <span
  m="3843490">say,</span> <span m="3844190">oh</span> <span
  m="3844480">I'm</span> <span m="3844620">looking</span> <span
  m="3844860">at</span> <span m="3844930">the</span> <span
  m="3845030">signature,</span> <span m="3845580">which</span> <span
  m="3845730">is</span> <span m="3845840">a</span> <span
  m="3845890">bunch</span> <span m="3846100">of</span> <span
  m="3846180">bits.</span> <span m="3846840">I'm</span> <span
  m="3846960">looking</span> <span m="3847170">at</span> <span
  m="3847240">the</span> <span m="3847310">message,</span> <span
  m="3848090">which</span> <span m="3848250">is</span> <span
  m="3848380">a</span> <span m="3848660">whole</span> <span
  m="3848860">lot</span> <span m="3849010">of</span> <span
  m="3849090">bits.</span> <span m="3849900">And</span> <span
  m="3850060">I</span> <span m="3850080">have</span> <span
  m="3850270">this</span> <span m="3850380">public</span> <span
  m="3850680">key,</span> <span m="3851270">which</span> <span
  m="3851310">is</span> <span m="3851400">a</span> <span
  m="3851460">bunch</span> <span m="3851690">of</span> <span
  m="3851760">bits.</span> <span m="3852590">And</span> <span
  m="3852940">I'm</span> <span m="3853020">going</span> <span
  m="3853120">to</span> <span m="3853160">be</span> <span
  m="3853250">able</span> <span m="3853400">to</span> <span
  m="3853490">tell</span> <span m="3854780">for</span> <span
  m="3854930">sure</span> <span m="3856150">that</span> <span
  m="3857280">either</span> <span m="3857550">Alice</span> <span
  m="3857980">signed</span> <span m="3858450">this</span> <span
  m="3858590">message,</span> <span m="3859340">or</span> <span
  m="3859480">Alice</span> <span m="3859830">did</span> <span
  m="3860030">not</span> <span m="3860360">sign</span> <span
  m="3860650">this</span> <span m="3860820">message.</span></p><p><span
  m="3862560">And</span> <span m="3863680">the</span> <span
  m="3863920">assumption</span> <span m="3864220">here</span> <span
  m="3864570">is</span> <span m="3866100">that</span> <span
  m="3866350">Alice</span> <span m="3866710">kept</span> <span
  m="3866980">her</span> <span m="3867320">private</span> <span
  m="3867650">key</span> <span m="3867840">secret.</span> <span
  m="3868950">And</span> <span m="3869120">of</span> <span
  m="3869220">course,</span> <span m="3869810">what</span> <span
  m="3869880">I</span> <span m="3869940">just</span> <span
  m="3870130">wrote</span> <span m="3870330">there,</span> <span
  m="3870970">that</span> <span m="3871100">the</span> <span
  m="3871190">public</span> <span m="3871520">key</span> <span
  m="3872090">does</span> <span m="3872290">not</span> <span
  m="3872460">reveal</span> <span m="3872760">anything</span> <span
  m="3873450">about</span> <span m="3873680">the</span> <span
  m="3873750">secret</span> <span m="3874250">key,</span> <span
  m="3874880">OK?</span> <span m="3875530">So</span> <span
  m="3875810">that's</span> <span m="3876350">digital</span> <span
  m="3876680">signatures</span> <span m="3877140">for</span> <span
  m="3877310">you,</span> <span m="3877460">in</span> <span m="3877540">a</span>
  <span m="3877590">nutshell.</span> <span m="3878350">And</span> <span
  m="3878510">when</span> <span m="3878620">you</span> <span
  m="3878720">do</span> <span m="3879120">MIT</span> <span
  m="3879800">certificates</span> <span m="3880860">you're</span> <span
  m="3880990">using</span> <span m="3881290">digital</span> <span
  m="3881610">signatures</span> <span m="3882640">a</span> <span
  m="3882950">la</span> <span m="3883500">Rivest-Shamir-Adleman,</span> <span
  m="3884440">the</span> <span m="3884710">RSA</span> <span
  m="3885130">algorithm.</span> <span m="3885900">So</span> <span
  m="3886020">you're using</span> <span m="3886420">this</span> <span
  m="3886650">all</span> <span m="3886940">the</span> <span
  m="3887020">time,</span> <span m="3888580">when</span> <span
  m="3889010">you</span> <span m="3889100">click</span> <span
  m="3889350">on</span> <span m="3890320">6.046</span> <span
  m="3890950">links,</span> <span m="3891200">for</span> <span
  m="3891310">example.</span></p><p><span m="3892290">And</span> <span
  m="3892520">what</span> <span m="3892630">happens</span> <span
  m="3892960">is</span> <span m="3894240">M</span> <span m="3894450">is</span>
  <span m="3894610">typically</span> <span m="3895490">really</span> <span
  m="3895870">large.</span> <span m="3896440">I</span> <span
  m="3896520">mean</span> <span m="3896620">it</span> <span
  m="3896700">could</span> <span m="3896810">be</span> <span
  m="3896930">a</span> <span m="3896980">file,</span> <span
  m="3897850">right?</span> <span m="3898060">It</span> <span
  m="3898170">could</span> <span m="3898260">be</span> <span
  m="3898360">a</span> <span m="3898420">large</span> <span
  m="3898710">file.</span> <span m="3899510">And</span> <span
  m="3900190">you</span> <span m="3900320">don't</span> <span
  m="3900470">necessarily</span> <span m="3900950">want</span> <span
  m="3901110">to</span> <span m="3901170">compute</span> <span
  m="3901550">these</span> <span m="3901780">operations</span> <span
  m="3902730">on</span> <span m="3902920">large</span> <span
  m="3903340">files.</span> <span m="3904150">So</span> <span
  m="3904600">for</span> <span m="3904750">convenience,</span> <span
  m="3905720">what</span> <span m="3905840">happens</span> <span
  m="3906180">is</span> <span m="3906420">you</span> <span
  m="3906510">end</span> <span m="3906700">up</span> <span
  m="3906850">hashing</span> <span m="3907380">the</span> <span
  m="3907490">file.</span> <span m="3909580">And</span> <span
  m="3910730">for</span> <span m="3910950">large</span> <span
  m="3911370">M</span> <span m="3916170">it's</span> <span
  m="3916350">easier</span> <span m="3918770">to</span> <span
  m="3919070">sign</span> <span m="3920670">h</span> <span m="3921026">of</span>
  <span m="3921382">M.</span> <span m="3922550">And</span> <span
  m="3922800">so</span> <span m="3923270">replace</span> <span
  m="3924750">the</span> <span m="3924820">M's</span> <span
  m="3925180">that</span> <span m="3925330">you</span> <span
  m="3925430">see</span> <span m="3925670">here</span> <span
  m="3927760">with</span> <span m="3928410">h</span> <span m="3928660">of</span>
  <span m="3928960">M,</span> <span m="3929810">all</span> <span
  m="3929880">right?</span></p><p><span m="3930720">So</span> <span
  m="3931460">now</span> <span m="3931910">that</span> <span
  m="3933350">we're</span> <span m="3933530">given</span> <span
  m="3937100">that</span> <span m="3937330">we're</span> <span
  m="3937430">going</span> <span m="3937580">to</span> <span
  m="3937630">be</span> <span m="3937760">doing</span> <span
  m="3938080">h</span> <span m="3938300">of</span> <span m="3938400">M</span>
  <span m="3938640">in</span> <span m="3938770">here,</span> <span
  m="3941450">think</span> <span m="3941660">about</span> <span
  m="3941960">what</span> <span m="3942140">we</span> <span
  m="3942260">wanted</span> <span m="3942550">to</span> <span
  m="3942620">accomplish</span> <span m="3943420">with</span> <span
  m="3943770">M,</span> <span m="3944620">right?</span> <span
  m="3945390">I</span> <span m="3945490">told</span> <span
  m="3945760">you</span> <span m="3945870">what</span> <span
  m="3946030">we</span> <span m="3946120">wanted</span> <span
  m="3946280">to</span> <span m="3946450">accomplish</span> <span
  m="3946820">with</span> <span m="3946990">M.</span> <span
  m="3948150">There's</span> <span m="3948330">a</span> <span
  m="3948410">particular</span> <span m="3948910">message.</span> <span
  m="3949360">I'm</span> <span m="3949540">Alice.</span> <span
  m="3950190">I'm</span> <span m="3950750">going</span> <span
  m="3950870">to</span> <span m="3950920">keep</span> <span
  m="3951090">my</span> <span m="3951920">secret</span> <span
  m="3952230">key</span> <span m="3952610">secret.</span> <span
  m="3953850">But</span> <span m="3954080">I want to</span> <span
  m="3954340">commit</span> <span m="3954910">to</span> <span
  m="3955170">signing</span> <span m="3955630">this</span> <span
  m="3955810">message</span> <span m="3956220">M,</span> <span
  m="3957130">all</span> <span m="3957200">right?</span> <span
  m="3957910">And</span> <span m="3958280">I</span> <span
  m="3958310">want</span> <span m="3958440">to</span> <span
  m="3958480">make</span> <span m="3958640">sure</span> <span
  m="3958890">that</span> <span m="3959510">nobody</span> <span
  m="3960330">can</span> <span m="3960490">pretend</span> <span
  m="3960830">to</span> <span m="3960900">be</span> <span m="3961030">me</span>
  <span m="3961810">who</span> <span m="3961980">doesn't</span> <span
  m="3962310">know</span> <span m="3964142">my</span> <span
  m="3964600">secret</span> <span m="3964910">key.</span> <span
  m="3965320">And</span> <span m="3965520">nobody</span> <span
  m="3965820">does.</span></p><p><span m="3967290">So</span> <span
  m="3967600">if</span> <span m="3967810">I'm</span> <span
  m="3967940">going</span> <span m="3968060">to</span> <span
  m="3968100">be</span> <span m="3968190">signing</span> <span
  m="3968590">the</span> <span m="3968690">hash</span> <span
  m="3969190">of</span> <span m="3969300">the</span> <span
  m="3969380">message,</span> <span m="3970760">now</span> <span
  m="3970960">it</span> <span m="3971090">comes</span> <span
  m="3971320">down</span> <span m="3971620">to</span> <span
  m="3972680">today's</span> <span m="3972990">lecture.</span> <span
  m="3973930">I'm</span> <span m="3973950">signing</span> <span
  m="3974230">the</span> <span m="3974390">hash</span> <span
  m="3974600">of</span> <span m="3974730">the</span> <span
  m="3974850">message</span> <span m="3975640">h</span> <span
  m="3975965">of</span> <span m="3976290">M.</span> <span
  m="3976680">What</span> <span m="3976970">property</span> <span
  m="3977660">do</span> <span m="3977780">I</span> <span
  m="3977870">require</span> <span m="3979030">of</span> <span
  m="3979550">h</span> <span m="3980640">in</span> <span
  m="3980820">order</span> <span m="3981030">for</span> <span
  m="3981390">this</span> <span m="3981580">whole</span> <span
  m="3981860">thing</span> <span m="3982120">to</span> <span
  m="3982210">work</span> <span m="3982430">out?</span> <span
  m="3983640">Yeah,</span> <span m="3983820">go</span> <span
  m="3983920">ahead.</span></p><p><span m="3984636">AUDIENCE: Is it</span> <span
  m="3985112">non-malleability?</span></p><p><span m="3986540">SRINIVAS DEVADAS:
  Non-malleability,</span> <span m="3987360">but</span> <span
  m="3987530">even</span> <span m="3987760">before</span> <span
  m="3988050">that--</span> <span m="3988700">suppose--</span> <span
  m="3989850">absolutely,</span> <span m="3990420">but</span> <span
  m="3990900">non-malleability</span> <span m="3991770">is</span> <span
  m="3991980">kind</span> <span m="3992170">of</span> <span
  m="3993120">beyond</span> <span m="3994540">one</span> <span
  m="3995270">of</span> <span m="3995320">these</span> <span
  m="3995470">properties</span> <span m="3995870">over</span> <span
  m="3996080">on</span> <span m="3996190">the</span> <span
  m="3996260">right.</span> <span m="3996590">You're</span> <span
  m="3996910">on</span> <span m="3997030">the</span> <span
  m="3997100">right</span> <span m="3997290">track,</span> <span
  m="3998000">right?</span> <span m="3999570">So</span> <span
  m="4000200">do</span> <span m="4000700">you</span> <span
  m="4000780">want</span> <span m="4000880">to</span> <span
  m="4002140">give</span> <span m="4002330">me</span> <span m="4002920">a</span>
  <span m="4003010">different</span> <span m="4003240">answer?</span> <span
  m="4005280">You</span> <span m="4005400">can give</span> <span
  m="4005530">me</span> <span m="4005620">a</span> <span
  m="4005650">different</span> <span m="4005860">answer.</span></p><p><span
  m="4006677">AUDIENCE: Oh,</span> <span m="4009112">I'm not</span> <span
  m="4009599">sure.</span></p><p><span m="4010090">SRINIVAS DEVADAS: OK.</span>
  <span m="4012250">What?</span> <span m="4012690">Yeah,</span> <span
  m="4013090">back</span> <span m="4013250">there.</span></p><p><span
  m="4013898">AUDIENCE: I think</span> <span m="4014376">you wanted to</span>
  <span m="4014854">one-way</span> <span m="4015332">because</span> <span
  m="4015810">otherwise</span> <span m="4016288">you</span> <span
  m="4016766">could take</span> <span m="4017244">that</span> <span
  m="4017722">signature</span> <span m="4018200">and</span> <span
  m="4018678">find</span> <span m="4019156">another</span> <span
  m="4019634">message that you</span> <span m="4020112">could</span> <span
  m="4020590">credit.</span></p><p><span m="4021080">SRINIVAS DEVADAS: I</span>
  <span m="4021190">can</span> <span m="4021340">make</span> <span
  m="4021530">M</span> <span m="4021730">public.</span> <span
  m="4022740">I</span> <span m="4023510">can</span> <span
  m="4023670">make</span> <span m="4023890">M--</span> <span
  m="4024510">M</span> <span m="4024740">can</span> <span m="4024870">be</span>
  <span m="4024970">public.</span> <span m="4025480">And</span> <span
  m="4025700">h</span> <span m="4025850">of</span> <span m="4025920">M</span>
  <span m="4026100">is</span> <span m="4026250">public.</span> <span
  m="4027060">So</span> <span m="4028220">one-wayness</span> <span
  m="4029940">is</span> <span m="4031480">not</span> <span
  m="4031870">interesting</span> <span m="4032590">for</span> <span
  m="4032750">this</span> <span m="4032960">example</span> <span
  m="4033570">if</span> <span m="4033720">M</span> <span m="4033920">is</span>
  <span m="4034040">public.</span> <span m="4034810">And</span> <span
  m="4034990">we can</span> <span m="4035350">assume</span> <span
  m="4035430">that</span> <span m="4035570">M</span> <span
  m="4035780">eventually</span> <span m="4036150">gets</span> <span
  m="4036340">public.</span> <span m="4036690">Because</span> <span
  m="4036920">that's</span> <span m="4037160">the</span> <span
  m="4037210">message</span> <span m="4037530">I'm</span> <span
  m="4037630">signing,</span> <span m="4038510">right?</span> <span
  m="4038840">I</span> <span m="4039340">can</span> <span
  m="4039620">also</span> <span m="4039860">put</span> <span
  m="4040000">M</span> <span m="4040240">out.</span></p><p><span
  m="4041090">So</span> <span m="4041230">I</span> <span m="4041380">want</span>
  <span m="4041580">the</span> <span m="4041670">relationship--</span> <span
  m="4042330">I</span> <span m="4042370">want</span> <span
  m="4042540">you</span> <span m="4042620">to</span> <span
  m="4042700">focus</span> <span m="4043040">on</span> <span
  m="4043120">the</span> <span m="4043170">relationship</span> <span
  m="4044000">between</span> <span m="4044315">h of M</span> <span
  m="4044630">and</span> <span m="4044840">M</span> <span m="4045760">and</span>
  <span m="4045940">tell</span> <span m="4046140">me</span> <span
  m="4046790">what</span> <span m="4047060">would</span> <span
  m="4047210">break</span> <span m="4047670">this</span> <span
  m="4048170">system.</span> <span m="4048720">And</span> <span
  m="4049010">you're</span> <span m="4049220">on</span> <span
  m="4049300">the</span> <span m="4049360">right</span> <span
  m="4049510">track.</span> <span m="4051120">Yeah,</span> <span
  m="4051410">go</span> <span m="4051740">ahead.</span> <span m="4051970">Or
  way</span> <span m="4052280">back</span> <span m="4052440">there.</span> <span
  m="4053220">Yeah,</span> <span m="4053470">sorry</span> <span
  m="4053660">about</span> <span m="4053770">that.</span></p><p><span
  m="4053890">AUDIENCE: TCR.</span></p><p><span m="4055610">SRINIVAS DEVADAS:
  TCR.</span> <span m="4055990">Why</span> <span
  m="4056650">TCR?</span></p><p><span m="4057210">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="4066130">SRINIVAS DEVADAS: So</span> <span
  m="4066450">I</span> <span m="4066610">have</span> <span m="4066985">M.</span>
  <span m="4068150">So</span> <span m="4068320">what</span> <span
  m="4068450">happens</span> <span m="4068740">here--</span> <span
  m="4069070">I</span> <span m="4069170">should</span> <span
  m="4069310">write</span> <span m="4069480">this</span> <span
  m="4069620">out.</span> <span m="4071920">I'm</span> <span
  m="4072560">given--</span> <span m="4073350">as</span> <span
  m="4073570">an</span> <span m="4073980">adversary</span> <span
  m="4074510">I</span> <span m="4074660">have</span> <span m="4075480">M</span>
  <span m="4075940">and</span> <span m="4076880">h</span> <span
  m="4077110">of</span> <span m="4077240">M.</span> <span m="4090800">It
  is</span> <span m="4090960">bad</span> <span m="4092640">if</span> <span
  m="4096319">Alice</span> <span m="4098029">signs</span> <span
  m="4099630">h</span> <span m="4100040">of</span> <span m="4100450">M,</span>
  <span m="4101380">but</span> <span m="4102810">Bob</span> <span
  m="4104420">claims</span> <span m="4108930">Alice</span> <span
  m="4109580">signed</span> <span m="4111310">M</span> <span
  m="4111550">prime.</span> <span m="4113010">Because</span> <span
  m="4114350">h</span> <span m="4114979">of</span> <span m="4115090">M</span>
  <span m="4116180">equals</span> <span m="4117740">h of</span> <span
  m="4117990">M</span> <span m="4118319">prime,</span> <span
  m="4119160">right?</span> <span m="4119830">That</span> <span
  m="4120020">is</span> <span m="4120149">bad.</span></p><p><span
  m="4121600">So</span> <span m="4122270">the</span> <span m="4122450">M</span>
  <span m="4123210">is</span> <span m="4123340">public--</span> <span
  m="4124130">could</span> <span m="4124240">you</span> <span
  m="4124319">stand</span> <span m="4124520">up?</span> <span
  m="4129229">M</span> <span m="4129790">is</span> <span
  m="4129910">given.</span> <span m="4130600">There's a</span> <span
  m="4130910">specific</span> <span m="4131140">M,</span> <span
  m="4132420">and</span> <span m="4132779">a</span> <span
  m="4133050">specific</span> <span m="4133149">h of</span> <span m="4133800">M
  in</span> <span m="4133960">particular,</span> <span m="4134880">that</span>
  <span m="4135390">has</span> <span m="4135720">been</span> <span
  m="4135859">exposed.</span> <span m="4136470">And</span> <span m="4136930">h
  of</span> <span m="4137260">M</span> <span m="4137359">is</span> <span
  m="4137859">what</span> <span m="4138010">was</span> <span
  m="4138140">used</span> <span m="4138450">for</span> <span
  m="4138529">the</span> <span m="4138640">signature.</span> <span
  m="4139620">So</span> <span m="4139720">you</span> <span
  m="4139800">want</span> <span m="4139899">to</span> <span
  m="4139950">keep</span> <span m="4140170">h</span> <span m="4140399">of</span>
  <span m="4140520">M</span> <span m="4140680">the</span> <span
  m="4140760">same.</span> <span m="4141140">It's</span> <span
  m="4141290">a</span> <span m="4141390">specific</span> <span
  m="4141490">one.</span> <span m="4142170">So it's</span> <span
  m="4142390">not</span> <span m="4142670">collision</span> <span
  m="4142979">resistance,</span> <span m="4143329">it's</span> <span
  m="4143680">target</span> <span m="4144460">collision</span> <span
  m="4144830">resistance,</span> <span m="4145850">because</span> <span
  m="4146250">that's</span> <span m="4146630">given</span> <span
  m="4146890">to</span> <span m="4147000">you.</span></p><p><span
  m="4147460">And</span> <span m="4148069">you</span> <span
  m="4148180">want</span> <span m="4148270">to</span> <span
  m="4148319">keep</span> <span m="4148520">that</span> <span
  m="4148729">the</span> <span m="4148819">same.</span> <span
  m="4149430">But</span> <span m="4149560">you</span> <span
  m="4149640">want</span> <span m="4149729">to</span> <span
  m="4149790">claim</span> <span m="4150160">that</span> <span
  m="4150800">oh,</span> <span m="4151270">you</span> <span
  m="4151410">promised</span> <span m="4151880">me</span> <span
  m="4152040">$10,000,</span> <span m="4153250">not</span> <span
  m="4153600">$20,</span> <span m="4154760">right?</span> <span
  m="4155319">If</span> <span m="4155810">you</span> <span
  m="4155910">can</span> <span m="4156020">do</span> <span
  m="4156149">that,</span> <span m="4156899">you</span> <span
  m="4157189">signed</span> <span m="4157660">saying</span> <span
  m="4157899">you</span> <span m="4158000">want</span> <span
  m="4158080">to</span> <span m="4158130">pay</span> <span
  m="4158710">$10,000,</span> <span m="4159649">not</span> <span
  m="4159859">$20,</span> <span m="4160859">then</span> <span
  m="4161100">you've</span> <span m="4161170">got</span> <span
  m="4161300">a</span> <span m="4161340">problem.</span></p><p><span
  m="4162149">So</span> <span m="4162350">your</span> <span
  m="4162630">thing</span> <span m="4162850">is</span> <span
  m="4163170">very</span> <span m="4163430">close.</span> <span
  m="4164160">It's</span> <span m="4164319">just</span> <span
  m="4164520">that</span> <span m="4164740">it</span> <span
  m="4164870">doesn't</span> <span m="4165130">need</span> <span
  m="4165340">to</span> <span m="4165410">be</span> <span m="4165580">a</span>
  <span m="4165630">strong</span> <span m="4166069">relationship</span> <span
  m="4167130">between</span> <span m="4167380">the</span> <span
  m="4167470">10,000</span> <span m="4167979">or</span> <span
  m="4168060">the</span> <span m="4168120">20.</span> <span m="4168710">I</span>
  <span m="4168770">mean</span> <span m="4168899">I</span> <span
  m="4168950">give</span> <span m="4169120">you</span> <span
  m="4169220">a</span> <span m="4169250">concrete</span> <span
  m="4169590">example</span> <span m="4170000">of</span> <span
  m="4170069">that.</span> <span m="4171000">But</span> <span
  m="4172359">it</span> <span m="4172450">could</span> <span
  m="4172590">be</span> <span m="4172729">more,</span> <span m="4173069">it
  could</span> <span m="4173220">be</span> <span m="4173330">less.</span> <span
  m="4173720">Anything</span> <span m="4174140">that</span> <span
  m="4174300">is</span> <span m="4174420">different</span> <span
  m="4175109">from</span> <span m="4175340">what</span> <span
  m="4175529">you</span> <span m="4175649">signed,</span> <span
  m="4176479">be</span> <span m="4176754">it with</span> <span
  m="4177029">the</span> <span m="4177250">numerical</span> <span
  m="4177740">relationship</span> <span m="4178220">or</span> <span
  m="4178319">not,</span> <span m="4178870">would</span> <span
  m="4179000">cause</span> <span m="4179220">a</span> <span
  m="4179279">problem</span> <span m="4180000">and</span> <span
  m="4180149">break</span> <span m="4180380">this</span> <span
  m="4180569">scheme,</span> <span m="4181490">all</span> <span
  m="4181930">right?</span> <span m="4183080">Are</span> <span
  m="4183180">we</span> <span m="4183454">good?</span></p><p><span
  m="4185260">All</span> <span m="4185340">right,</span> <span
  m="4185680">one</span> <span m="4185880">last</span> <span
  m="4186130">example,</span> <span m="4188149">the</span> <span
  m="4188290">most</span> <span m="4188510">interesting</span> <span
  m="4188850">one.</span> <span m="4190490">And</span> <span
  m="4193979">as</span> <span m="4194310">I</span> <span
  m="4195670">guessed</span> <span m="4196620">I'm</span> <span
  m="4196740">probably</span> <span m="4196980">not</span> <span
  m="4197160">going</span> <span m="4197250">to</span> <span
  m="4197290">get</span> <span m="4197490">to</span> <span
  m="4198530">saying</span> <span m="4198820">very</span> <span
  m="4198990">much</span> <span m="4199280">about</span> <span
  m="4200630">how</span> <span m="4200950">cache</span> <span
  m="4201180">functions</span> <span m="4201570">are</span> <span
  m="4201670">implemented.</span> <span m="4202250">But</span> <span
  m="4202420">maybe</span> <span m="4202630">I'll</span> <span
  m="4202710">spend</span> <span m="4202910">a</span> <span
  m="4202950">minute</span> <span m="4203160">or</span> <span
  m="4203300">two</span> <span m="4203480">on</span> <span
  m="4203630">it.</span> <span m="4208770">So</span> <span
  m="4209070">let's</span> <span m="4209320">do</span> <span
  m="4209460">this</span> <span m="4210090">example</span> <span
  m="4211660">that</span> <span m="4211840">has</span> <span
  m="4212020">to</span> <span m="4212080">do</span> <span
  m="4212240">with</span> <span m="4212370">commitments.</span></p><p><span
  m="4219260">Commitment</span> <span m="4219730">is</span> <span
  m="4219850">important,</span> <span m="4220630">right?</span> <span
  m="4220890">You</span> <span m="4220970">want</span> <span
  m="4221060">to</span> <span m="4221150">commit</span> <span
  m="4221500">to</span> <span m="4221600">doing</span> <span
  m="4221840">things.</span> <span m="4222640">You</span> <span
  m="4222760">want</span> <span m="4222860">to</span> <span
  m="4223090">keep</span> <span m="4223300">your</span> <span
  m="4223420">promises.</span> <span m="4224420">And</span> <span
  m="4224570">in</span> <span m="4224630">this</span> <span
  m="4224790">case</span> <span m="4225010">we</span> <span
  m="4225100">have</span> <span m="4225230">a</span> <span
  m="4225280">legal</span> <span m="4227020">requirement</span> <span
  m="4228310">that</span> <span m="4228940">you</span> <span
  m="4229170">want</span> <span m="4229300">to</span> <span
  m="4229350">be</span> <span m="4231080">able</span> <span
  m="4231420">to</span> <span m="4232770">make</span> <span
  m="4233100">people</span> <span m="4233480">honor their</span> <span
  m="4233890">commitments,</span> <span m="4234550">and</span> <span
  m="4234680">not</span> <span m="4235000">weasel</span> <span
  m="4235350">their</span> <span m="4235480">way</span> <span m="4235690">out
  of</span> <span m="4235840">commitments,</span> <span
  m="4236840">right?</span> <span m="4237040">And</span> <span
  m="4237160">we</span> <span m="4237240">want</span> <span
  m="4237380">to</span> <span m="4237430">deal with</span> <span
  m="4237560">this</span> <span m="4237760">computationally.</span></p><p><span
  m="4239670">And</span> <span m="4240540">let's</span> <span
  m="4240770">think</span> <span m="4240930">about</span> <span
  m="4241220">auctions.</span> <span m="4242720">So</span> <span
  m="4243030">Alice</span> <span m="4244630">has</span> <span
  m="4245900">value</span> <span m="4246830">x,</span> <span m="4250200">e.g.
  an</span> <span m="4250470">auction</span> <span m="4250910">bid.</span> <span
  m="4254940">Alice</span> <span m="4257310">computes</span> <span
  m="4258240">what</span> <span m="4258410">we're</span> <span
  m="4258520">going</span> <span m="4258620">to</span> <span
  m="4258690">call</span> <span m="4262170">C</span> <span m="4262440">of</span>
  <span m="4262570">x,</span> <span m="4262880">which</span> <span
  m="4263040">is</span> <span m="4263130">a</span> <span
  m="4263210">commitment</span> <span m="4264310">of</span> <span
  m="4264480">x,</span> <span m="4266000">and</span> <span
  m="4266220">cements</span> <span m="4266640">it,</span> <span
  m="4270480">right?</span> <span m="4271500">C</span> <span
  m="4271820">of</span> <span m="4271920">x,</span> <span m="4277760">C</span>
  <span m="4278180">of</span> <span m="4278290">x</span> <span
  m="4278900">is--</span> <span m="4279740">let's</span> <span
  m="4279960">assume</span> <span m="4280290">that</span> <span
  m="4284220">the</span> <span m="4284330">auctioneer,</span> <span
  m="4286670">and</span> <span m="4286970">perhaps</span> <span
  m="4287540">other</span> <span m="4287820">auctionees</span> <span
  m="4288370">as</span> <span m="4288520">well,</span> <span
  m="4289870">see</span> <span m="4289950">C</span> <span m="4291620">of</span>
  <span m="4291740">x.</span> <span m="4292470">You</span> <span
  m="4292520">have</span> <span m="4292670">to submit it</span> <span
  m="4292830">to somebody,</span> <span m="4294070">right?</span> <span
  m="4294770">So</span> <span m="4295150">you</span> <span
  m="4295270">can</span> <span m="4295370">assume</span> <span
  m="4295590">that</span> <span m="4295720">that's</span> <span
  m="4295900">exposed.</span></p><p><span m="4297100">And</span> <span
  m="4298700">what</span> <span m="4298870">is</span> <span
  m="4298970">going</span> <span m="4299080">to</span> <span
  m="4299120">happen</span> <span m="4299410">is,</span> <span
  m="4301010">when</span> <span m="4301770">bidding</span> <span
  m="4302270">is</span> <span m="4302380">over</span> <span
  m="4308090">Alice</span> <span m="4309460">is</span> <span
  m="4309630">going</span> <span m="4309770">to</span> <span
  m="4309870">open--</span> <span m="4311840">so</span> <span
  m="4312030">this</span> <span m="4312220">is--</span> <span m="4313080">C
  of</span> <span m="4313210">x</span> <span m="4313690">can</span> <span
  m="4313820">be</span> <span m="4314080">thought</span> <span
  m="4314300">of</span> <span m="4314450">as</span> <span
  m="4314730">sealing</span> <span m="4317742">the</span> <span
  m="4318215">bid.</span> <span m="4320110">So</span> <span
  m="4320340">that's</span> <span m="4320600">the</span> <span
  m="4320650">commitment.</span> <span m="4321110">You're</span> <span
  m="4321250">sealing</span> <span m="4321650">the--</span> <span
  m="4322350">you're</span> <span m="4322540">making</span> <span
  m="4322770">a</span> <span m="4322830">bid</span> <span m="4323030">and</span>
  <span m="4323110">you're</span> <span m="4323240">sealing</span> <span
  m="4323560">it</span> <span m="4323660">in</span> <span m="4323760">an</span>
  <span m="4323860">envelope.</span> <span m="4324600">You've</span> <span
  m="4324760">committed</span> <span m="4325120">to</span> <span
  m="4325200">that.</span> <span m="4325650">That's</span> <span
  m="4325870">obviously,</span> <span m="4326240">what</span> <span
  m="4326250">happens</span> <span m="4326600">in</span> <span
  m="4327520">real</span> <span m="4327730">life</span> <span
  m="4328110">without</span> <span m="4328410">cryptography,</span> <span
  m="4329340">but</span> <span m="4329520">we</span> <span
  m="4329630">want</span> <span m="4329740">to</span> <span
  m="4329780">do</span> <span m="4329890">this</span> <span
  m="4330070">with</span> <span m="4330230">cryptography,</span> <span
  m="4330790">with</span> <span m="4330980">hash</span> <span
  m="4331190">functions.</span></p><p><span m="4332300">And</span> <span
  m="4332490">so</span> <span m="4332600">now</span> <span
  m="4332790">Alice</span> <span m="4333250">opens</span> <span
  m="4335480">C</span> <span m="4335690">of</span> <span m="4335810">x</span>
  <span m="4338240">to</span> <span m="4338360">reveal</span> <span
  m="4339170">x. So</span> <span m="4339330">she</span> <span
  m="4339390">has</span> <span m="4339580">to</span> <span
  m="4339700">prove</span> <span m="4341840">that</span> <span
  m="4342690">in</span> <span m="4342790">fact</span> <span m="4344220">x</span>
  <span m="4344470">was</span> <span m="4344670">her</span> <span
  m="4344770">bid.</span> <span m="4345670">And</span> <span
  m="4345840">that</span> <span m="4346040">it</span> <span
  m="4346460">matches</span> <span m="4347290">what</span> <span
  m="4347610">she</span> <span m="4347820">sealed.</span> <span
  m="4348580">When</span> <span m="4348680">you</span> <span
  m="4348780">open</span> <span m="4348970">it</span> <span
  m="4349050">up,</span> <span m="4350090">think</span> <span
  m="4350240">about</span> <span m="4350470">it</span> <span
  m="4350970">conceptually</span> <span m="4351930">from</span> <span
  m="4352090">a</span> <span m="4352140">standpoint</span> <span
  m="4352630">of</span> <span m="4353040">what</span> <span
  m="4353160">happens</span> <span m="4353440">with</span> <span
  m="4353610">paper,</span> <span m="4354660">and</span> <span
  m="4356070">then</span> <span m="4357040">we</span> <span
  m="4357160">have</span> <span m="4357280">to</span> <span
  m="4357360">think</span> <span m="4357560">about</span> <span
  m="4358000">this</span> <span m="4358130">computationally</span> <span
  m="4358620">and</span> <span m="4359140">what</span> <span
  m="4359320">this</span> <span m="4359440">implies,</span> <span
  m="4360420">right?</span></p><p><span m="4361120">So</span> <span
  m="4362140">again</span> <span m="4362350">I'll</span> <span
  m="4362400">do</span> <span m="4362620">a</span> <span
  m="4362710">little</span> <span m="4362780">bit</span> <span
  m="4362870">of</span> <span m="4362940">set</span> <span
  m="4363130">up.</span> <span m="4363600">And</span> <span
  m="4363750">then</span> <span m="4363900">we</span> <span
  m="4363990">have</span> <span m="4364140">start</span> <span
  m="4364370">talking</span> <span m="4364560">about</span> <span
  m="4364800">the</span> <span m="4364880">properties</span> <span
  m="4365370">that</span> <span m="4365490">we</span> <span
  m="4365590">want</span> <span m="4366300">for</span> <span
  m="4366580">this</span> <span m="4366790">particular</span> <span
  m="4367340">application.</span> <span m="4369130">So</span> <span
  m="4369445">there</span> <span m="4369760">are</span> <span
  m="4369910">a</span> <span m="4369960">bunch</span> <span
  m="4370130">of</span> <span m="4370180">people</span> <span
  m="4370450">who</span> <span m="4370510">are</span> <span
  m="4370580">doing</span> <span m="4371800">bidding</span> <span
  m="4372220">for</span> <span m="4372370">this</span> <span
  m="4372530">auction.</span> <span m="4374680">I</span> <span
  m="4374840">don't--</span> <span m="4375380">I</span> <span
  m="4375490">want</span> <span m="4375940">to</span> <span
  m="4375980">be</span> <span m="4376080">the</span> <span
  m="4376170">first--</span> <span m="4377140">I</span> <span m="4377480">don't
  want to</span> <span m="4377780">spend</span> <span m="4377920">a</span> <span
  m="4377950">lot</span> <span m="4378100">of</span> <span
  m="4378150">money.</span> <span m="4378540">But</span> <span
  m="4378680">I</span> <span m="4378700">want</span> <span m="4378850">to</span>
  <span m="4378920">win.</span> <span m="4379560">All of us are</span> <span
  m="4380060">like</span> <span m="4380270">that,</span> <span
  m="4381030">right?</span></p><p><span m="4381640">If</span> <span
  m="4381830">I</span> <span m="4381980">know</span> <span
  m="4382470">information</span> <span m="4383050">about</span> <span
  m="4383270">your</span> <span m="4383520">bid,</span> <span
  m="4384350">that</span> <span m="4384630">is</span> <span
  m="4384810">obviously</span> <span m="4385140">a</span> <span
  m="4385190">tremendous</span> <span m="4385540">advantage.</span> <span
  m="4386490">So</span> <span m="4386770">clearly</span> <span
  m="4387070">that</span> <span m="4387230">can't</span> <span
  m="4387420">happen,</span> <span m="4388300">right?</span> <span
  m="4389110">If</span> <span m="4389240">I</span> <span m="4389440">know</span>
  <span m="4390240">one</span> <span m="4390540">other</span> <span
  m="4390710">person's</span> <span m="4391090">bid</span> <span
  m="4391430">I</span> <span m="4391560">just</span> <span m="4391760">do</span>
  <span m="4391860">plus</span> <span m="4392130">1</span> <span
  m="4392350">on</span> <span m="4392460">that.</span> <span m="4393000">If I
  know</span> <span m="4393270">everybody</span> <span m="4393600">else's</span>
  <span m="4394280">I</span> <span m="4394370">just</span> <span
  m="4394530">do</span> <span m="4394640">plus</span> <span m="4394880">1</span>
  <span m="4395070">on</span> <span m="4395150">the</span> <span
  m="4395220">maximum.</span> <span m="4396090">So</span> <span
  m="4396300">clearly</span> <span m="4396570">there's</span> <span
  m="4396730">some</span> <span m="4396990">secrecy</span> <span
  m="4397520">that's</span> <span m="4397720">required</span> <span
  m="4398100">here,</span> <span m="4398780">correct?</span></p><p><span
  m="4399420">So</span> <span m="4399820">C</span> <span m="4400050">of</span>
  <span m="4400160">x</span> <span m="4401120">is</span> <span
  m="4401310">going</span> <span m="4401470">to</span> <span
  m="4401510">have</span> <span m="4401670">to</span> <span
  m="4401750">do</span> <span m="4401880">two</span> <span
  m="4402060">things.</span> <span m="4403000">It</span> <span
  m="4403210">can't</span> <span m="4403630">reveal</span> <span
  m="4404550">x.</span> <span m="4406160">Because</span> <span
  m="4406550">then</span> <span m="4406950">even</span> <span
  m="4407160">maybe</span> <span m="4407350">the</span> <span
  m="4407420">auctioneer</span> <span m="4407880">is</span> <span
  m="4408020">bad.</span> <span m="4408760">Or</span> <span
  m="4409020">other</span> <span m="4409210">people</span> <span
  m="4409470">are</span> <span m="4409890">looking</span> <span
  m="4410150">at</span> <span m="4410280">this.</span> <span
  m="4411570">And</span> <span m="4411680">you</span> <span
  m="4411780">can</span> <span m="4411880">just</span> <span
  m="4412060">assume</span> <span m="4412350">that</span> <span
  m="4412490">C</span> <span m="4412620">of</span> <span m="4412720">x</span>
  <span m="4412940">is--</span> <span m="4413510">the</span> <span m="4413650">C
  of</span> <span m="4413840">x's</span> <span m="4414560">are</span> <span
  m="4414640">all</span> <span m="4414760">public.</span></p><p><span
  m="4416000">But</span> <span m="4417750">I</span> <span
  m="4417870">also</span> <span m="4418160">need</span> <span
  m="4418430">a</span> <span m="4418490">constraint</span> <span
  m="4419590">that's</span> <span m="4419840">associated</span> <span
  m="4420330">with</span> <span m="4420450">C</span> <span m="4420660">of</span>
  <span m="4420770">x</span> <span m="4421810">that</span> <span
  m="4422070">corresponds</span> <span m="4422590">to</span> <span
  m="4423280">making</span> <span m="4423530">sure</span> <span
  m="4423800">Alice</span> <span m="4424130">is</span> <span
  m="4424280">honest,</span> <span m="4425390">correct?</span> <span
  m="4426540">So</span> <span m="4427410">I</span> <span m="4427510">need</span>
  <span m="4427860">to</span> <span m="4427940">make</span> <span
  m="4428120">Alice</span> <span m="4428490">commit</span> <span
  m="4428780">to</span> <span m="4428870">something,</span> <span
  m="4430220">right?</span> <span m="4430940">So</span> <span
  m="4431220">what</span> <span m="4431510">are</span> <span
  m="4431630">the</span> <span m="4431990">different</span> <span
  m="4432310">properties</span> <span m="4433670">of</span> <span
  m="4434390">the</span> <span m="4434460">hash</span> <span
  m="4434720">function</span> <span m="4436000">that</span> <span
  m="4436960">if</span> <span m="4437490">I</span> <span m="4437580">use</span>
  <span m="4438900">h of</span> <span m="4439290">x</span> <span
  m="4439540">here,</span> <span m="4442650">that</span> <span
  m="4443170">I'd</span> <span m="4443350">want</span> <span
  m="4443740">h</span> <span m="4444130">to</span> <span
  m="4444250">satisfy</span> <span m="4445850">in</span> <span
  m="4446020">order</span> <span m="4446210">for</span> <span
  m="4446340">this</span> <span m="4446550">whole</span> <span
  m="4446830">process</span> <span m="4448090">to</span> <span
  m="4448180">work</span> <span m="4449110">like</span> <span
  m="4449320">it's</span> <span m="4449520">supposed</span> <span
  m="4450060">to</span> <span m="4450150">work</span> <span
  m="4451020">with</span> <span m="4451200">paper</span> <span
  m="4452220">and</span> <span m="4452430">envelopes?</span> <span
  m="4454700">Yeah,</span> <span m="4454940">go</span> <span
  m="4455040">ahead.</span></p><p><span m="4455695">AUDIENCE: It</span> <span
  m="4456150">has to be</span> <span m="4456605">one-way</span> <span
  m="4457060">[INAUDIBLE].</span></p><p><span m="4458430">SRINIVAS DEVADAS:
  It</span> <span m="4458790">has</span> <span m="4459000">to</span> <span
  m="4459090">be</span> <span m="4459250">one-way.</span> <span
  m="4460030">And</span> <span m="4460400">explain</span> <span
  m="4460870">to</span> <span m="4460970">me--</span> <span
  m="4462410">so</span> <span m="4462590">I</span> <span m="4462730">want</span>
  <span m="4463180">a</span> <span m="4463250">description</span> <span
  m="4463730">of</span> <span m="4464080">it</span> <span m="4464210">has</span>
  <span m="4464380">to</span> <span m="4464460">be</span> <span
  m="4464580">one-way,</span> <span m="4465570">because</span> <span
  m="4465920">why?</span></p><p><span m="4466260">AUDIENCE: Because</span> <span
  m="4466701">you want all</span> <span m="4467583">the</span> <span
  m="4468024">c x's</span> <span m="4468465">to be</span> <span
  m="4468906">hidden</span> <span m="4469347">from all the other
  options.</span></p><p><span m="4469790">SRINIVAS DEVADAS: Right.</span> <span
  m="4471200">C</span> <span m="4471510">of</span> <span m="4471620">x</span>
  <span m="4472840">should</span> <span m="4473170">not</span> <span
  m="4475660">reveal</span> <span m="4477910">x,</span> <span
  m="4479010">all</span> <span m="4479070">right?</span> <span
  m="4481050">All</span> <span m="4481270">right.</span> <span
  m="4481430">That's</span> <span m="4481610">good.</span> <span m="4481950">Do
  you</span> <span m="4482110">have</span> <span m="4482250">more?</span> <span
  m="4484320">It</span> <span m="4484440">has</span> <span m="4484620">to</span>
  <span m="4484710">be</span> <span m="4486050">collision</span> <span
  m="4486450">resistant.</span> <span m="4493180">OK.</span> <span
  m="4495560">I</span> <span m="4495710">guess.</span></p><p><span
  m="4497852">A</span> <span m="4498270">little</span> <span
  m="4498480">bit</span> <span m="4498620">more.</span> <span
  m="4500580">You're</span> <span m="4500710">getting</span> <span
  m="4500920">there.</span> <span m="4502560">What--</span> <span
  m="4503220">why</span> <span m="4503590">is</span> <span m="4503960">it</span>
  <span m="4504310">collision</span> <span
  m="4504700">resistant?</span></p><p><span m="4505672">AUDIENCE: Because</span>
  <span m="4506164">you want</span> <span m="4506656">to make</span> <span
  m="4507148">sure that</span> <span m="4507640">Alice,</span> <span
  m="4508132">when she</span> <span m="4508624">makes a</span> <span
  m="4509116">bid</span> <span m="4509608">that</span> <span
  m="4510100">she</span> <span m="4510592">commits</span> <span
  m="4511084">that</span> <span m="4511576">bid.</span> <span m="4512560">If
  she's</span> <span m="4513052">not going to</span> <span m="4513544">resist
  it</span> <span m="4514036">then she could</span> <span m="4514528">bid</span>
  <span m="4515020">$100</span> <span m="4515512">and then</span> <span
  m="4516004">find</span> <span m="4516496">something</span> <span
  m="4516988">else.</span></p><p><span m="4517480">SRINIVAS DEVADAS:
  That's</span> <span m="4517680">exactly</span> <span m="4518000">right.</span>
  <span m="4518430">So</span> <span m="4519980">CR,</span> <span
  m="4521210">because</span> <span m="4521930">Alice</span> <span
  m="4524380">should</span> <span m="4524610">not</span> <span
  m="4526300">be</span> <span m="4526540">able</span> <span
  m="4526710">to</span> <span m="4526790">open</span> <span
  m="4527110">this</span> <span m="4533550">in</span> <span
  m="4533750">multiple</span> <span m="4534140">ways,</span> <span
  m="4534870">right?</span> <span m="4537760">And</span> <span
  m="4537940">in</span> <span m="4538040">this</span> <span
  m="4538240">case</span> <span m="4539210">it's</span> <span
  m="4539470">not</span> <span m="4540250">TCR</span> <span
  m="4541420">in</span> <span m="4541540">the</span> <span
  m="4541640">sense</span> <span m="4541940">that</span> <span
  m="4542310">Alice</span> <span m="4542700">controls</span> <span
  m="4543820">what</span> <span m="4544080">her</span> <span
  m="4544190">bids</span> <span m="4544480">are.</span> <span
  m="4545350">And</span> <span m="4545550">so</span> <span
  m="4545670">she</span> <span m="4545840">might</span> <span
  m="4546140">find</span> <span m="4546430">a</span> <span
  m="4546500">pair</span> <span m="4547020">of</span> <span
  m="4547130">bids</span> <span m="4548440">that</span> <span
  m="4549690">collide,</span> <span m="4550760">correct?</span> <span
  m="4551440">She</span> <span m="4551620">might</span> <span
  m="4551830">realize</span> <span m="4552310">that</span> <span
  m="4553240">in</span> <span m="4553520">this</span> <span
  m="4553680">particular</span> <span m="4553980">hash</span> <span
  m="4554180">function,</span> <span m="4555840">you know</span> <span
  m="4555920">$10,000</span> <span m="4557500">and</span> <span
  m="4558450">a</span> <span m="4558540">billion</span> <span
  m="4558960">dollars</span> <span m="4559570">collide,</span> <span
  m="4560400">right?</span></p><p><span m="4561000">And</span> <span
  m="4561170">so</span> <span m="4561250">she</span> <span
  m="4561410">figures</span> <span m="4562890">depending</span> <span
  m="4563250">on</span> <span m="4563800">what</span> <span
  m="4563940">happens,</span> <span m="4564450">she's</span> <span
  m="4565590">a</span> <span m="4565700">billionaire,</span> <span
  m="4566350">let's</span> <span m="4566470">assume.</span> <span
  m="4567840">She's</span> <span m="4568030">going</span> <span
  m="4568170">to</span> <span m="4568310">open</span> <span
  m="4568640">the</span> <span m="4568720">right</span> <span
  m="4568950">thing.</span> <span m="4569320">She's</span> <span
  m="4569530">a</span> <span m="4569640">billionaire, but</span> <span
  m="4569990">she</span> <span m="4570110">doesn't</span> <span
  m="4570540">necessarily</span> <span m="4570990">want to spend</span> <span
  m="4571320">the</span> <span m="4571740">billion,</span> <span
  m="4572210">OK?</span> <span m="4573390">So</span> <span
  m="4573520">that's</span> <span m="4573950">that,</span> <span
  m="4574700">right?</span> <span m="4575040">But</span> <span
  m="4575570">I</span> <span m="4575720">want</span> <span
  m="4575950">more.</span> <span m="4578360">Go</span> <span
  m="4578450">ahead.</span></p><p><span m="4579115">AUDIENCE: You</span> <span
  m="4579610">don't</span> <span m="4580105">want it</span> <span m="4580600">to
  be</span> <span m="4581095">malleable.</span> <span
  m="4581590">Assuming</span> <span m="4582085">that</span> <span
  m="4582580">the auctioneer</span> <span m="4583075">is not</span> <span
  m="4583570">honest</span> <span m="4583890">because</span> <span
  m="4584390">you don't</span> <span m="4584890">want to</span> <span
  m="4585390">accept a bribe</span> <span m="4585550">from someone</span> <span
  m="4585690">and then</span> <span m="4586020">change</span> <span
  m="4586350">everyone</span> <span m="4586720">else's</span> <span
  m="4587040">bid to</span> <span m="4588060">square</span> <span
  m="4588518">root of</span> <span m="4588976">whatever</span> <span
  m="4589434">they bid.</span></p><p><span m="4590350">SRINIVAS DEVADAS:
  That's</span> <span m="4590580">exactly</span> <span m="4590920">right.</span>
  <span m="4591110">Or</span> <span m="4591220">plus</span> <span
  m="4591450">1,</span> <span m="4592000">which</span> <span
  m="4592090">is</span> <span m="4592710">a</span> <span
  m="4592750">great</span> <span m="4592920">example,</span> <span
  m="4593880">right?</span> <span m="4594480">So</span> <span
  m="4594750">there</span> <span m="4595020">you</span> <span
  m="4595160">go.</span> <span m="4597050">I</span> <span m="4597140">ran out
  of</span> <span m="4597460">Frisbees.</span> <span m="4598000">You</span>
  <span m="4598140">can</span> <span m="4598220">get</span> <span
  m="4598350">one</span> <span m="4598510">next</span> <span
  m="4598700">time.</span></p><p><span m="4602610">So</span> <span
  m="4603770">yeah,</span> <span m="4603970">I</span> <span
  m="4604050">don't</span> <span m="4604170">need</span> <span
  m="4604340">this</span> <span m="4604480">anymore.</span> <span
  m="4605640">You're</span> <span m="4605820">exactly</span> <span
  m="4606180">right.</span> <span m="4607020">There's</span> <span
  m="4607270">another--</span> <span m="4607990">it</span> <span
  m="4608420">turns out</span> <span m="4608520">it's even</span> <span
  m="4608980">more</span> <span m="4609140">subtle</span> <span
  m="4609490">than</span> <span m="4609620">what</span> <span
  m="4609790">you</span> <span m="4609900">just</span> <span
  m="4610100">described.</span> <span m="4611070">And</span> <span
  m="4611450">I</span> <span m="4611990">think</span> <span m="4612100">I
  might</span> <span m="4612370">be</span> <span m="4612420">able</span> <span
  m="4612550">to</span> <span m="4612640">point</span> <span
  m="4613070">that</span> <span m="4613200">out</span> <span
  m="4613420">to</span> <span m="4613540">you.</span> <span
  m="4614470">But</span> <span m="4614730">let</span> <span
  m="4614840">me</span> <span m="4614910">just</span> <span
  m="4615510">first</span> <span m="4616130">describe</span> <span
  m="4617100">this</span> <span m="4617650">answer,</span> <span
  m="4618670">which</span> <span m="4619730">gives</span> <span
  m="4619960">us</span> <span m="4621440">non-malleability.</span></p><p><span
  m="4622960">So</span> <span m="4623100">the</span> <span
  m="4623190">claim</span> <span m="4623500">is</span> <span
  m="4623630">that</span> <span m="4623920">you</span> <span
  m="4624050">also</span> <span m="4624320">want</span> <span
  m="4624630">non-malleability</span> <span m="4626130">in</span> <span
  m="4626320">your</span> <span m="4626870">hash</span> <span
  m="4627120">function.</span> <span m="4628000">And</span> <span
  m="4628510">the</span> <span m="4628590">simple</span> <span
  m="4628840">reason</span> <span m="4629210">is,</span> <span
  m="4630780">given</span> <span m="4632580">C</span> <span
  m="4632720">of</span> <span m="4633010">x--</span> <span
  m="4633520">and</span> <span m="4633720">let's</span> <span
  m="4633890">assume</span> <span m="4634150">that</span> <span
  m="4634280">this</span> <span m="4634390">is</span> <span
  m="4634530">public.</span> <span m="4634980">It's</span> <span
  m="4635040">certainly</span> <span m="4635250">public</span> <span
  m="4635570">to the</span> <span m="4635940">auctioneer,</span> <span
  m="4636520">and</span> <span m="4636690">it</span> <span
  m="4636770">could</span> <span m="4636910">be</span> <span
  m="4637030">public</span> <span m="4637360">to</span> <span
  m="4637460">the</span> <span m="4637530">other</span> <span
  m="4638180">bidders</span> <span m="4638470">as</span> <span
  m="4638600">well.</span></p><p><span m="4639530">Because</span> <span
  m="4639920">the</span> <span m="4640020">notion</span> <span
  m="4640280">of</span> <span m="4640360">sealing</span> <span
  m="4640780">is</span> <span m="4640940">that</span> <span
  m="4641870">you've</span> <span m="4643370">sealed it</span> <span
  m="4643580">using</span> <span m="4643910">C of</span> <span
  m="4644210">x.</span> <span m="4644470">But</span> <span
  m="4644640">people</span> <span m="4644880">can</span> <span
  m="4645000">see</span> <span m="4645170">the</span> <span
  m="4645260">outside</span> <span m="4645670">of</span> <span
  m="4645750">the</span> <span m="4645810">envelope,</span> <span
  m="4646430">which</span> <span m="4646580">is</span> <span
  m="4646910">C</span> <span m="4647140">of</span> <span m="4647230">x.</span>
  <span m="4647990">So</span> <span m="4648100">everyone</span> <span
  m="4648410">can</span> <span m="4648540">see</span> <span m="4648730">C</span>
  <span m="4648900">of</span> <span m="4649000">x.</span> <span
  m="4649510">You</span> <span m="4649630">still</span> <span
  m="4649860">want</span> <span m="4650050">this</span> <span
  m="4650200">to</span> <span m="4650290">work,</span> <span
  m="4650880">even</span> <span m="4651110">though</span> <span
  m="4651300">all</span> <span m="4651600">other</span> <span
  m="4651830">bidders</span> <span m="4652250">can</span> <span
  m="4652420">see</span> <span m="4652610">C</span> <span m="4652790">of</span>
  <span m="4652910">x.</span></p><p><span m="4653650">So</span> <span
  m="4653790">given</span> <span m="4654040">C</span> <span
  m="4654230">of</span> <span m="4654350">x,</span> <span
  m="4655100">should</span> <span m="4655410">not</span> <span
  m="4657570">be</span> <span m="4657780">possible</span> <span
  m="4661050">to</span> <span m="4661170">produce</span> <span
  m="4664990">C</span> <span m="4665140">of</span> <span m="4665240">x</span>
  <span m="4665420">plus</span> <span m="4665600">1.</span> <span
  m="4668110">You</span> <span m="4668260">don't</span> <span
  m="4668430">know</span> <span m="4668560">x</span> <span
  m="4668720">is.</span> <span m="4669250">But</span> <span
  m="4669380">if</span> <span m="4669440">you</span> <span
  m="4669520">can</span> <span m="4669620">produce</span> <span
  m="4669930">C</span> <span m="4670040">of</span> <span m="4670140">x</span>
  <span m="4670290">plus</span> <span m="4670450">1,</span> <span
  m="4671170">you</span> <span m="4671310">win,</span> <span
  m="4671625">all</span> <span m="4671940">right?</span> <span
  m="4674050">And</span> <span m="4674280">so</span> <span
  m="4675320">that's</span> <span m="4675850">the</span> <span
  m="4675910">problem.</span></p><p><span m="4677590">Now</span> <span
  m="4677730">it</span> <span m="4677960">turns</span> <span
  m="4678290">out</span> <span m="4680680">you</span> <span
  m="4681900">now</span> <span m="4682190">say</span> <span
  m="4682480">OK,</span> <span m="4682880">am</span> <span m="4683010">I</span>
  <span m="4683110">done?</span> <span m="4684930">I</span> <span
  m="4685080">want</span> <span m="4685340">these</span> <span
  m="4685540">three</span> <span m="4685730">properties.</span> <span
  m="4686930">And</span> <span m="4687240">I'm</span> <span
  m="4687340">done,</span> <span m="4688350">right?</span> <span
  m="4690350">There's</span> <span m="4690600">a</span> <span
  m="4690660">little</span> <span m="4691030">subtlety</span> <span
  m="4691610">here</span> <span m="4692490">which</span> <span
  m="4693060">these</span> <span m="4693760">properties</span> <span
  m="4694480">don't</span> <span m="4694830">capture.</span> <span
  m="4695750">So</span> <span m="4695900">that's</span> <span
  m="4696120">why</span> <span m="4697030">there's</span> <span
  m="4697430">more</span> <span m="4697730">here.</span> <span
  m="4698290">And</span> <span m="4699450">I</span> <span
  m="4699670">don't</span> <span m="4699800">mean</span> <span
  m="4699990">to</span> <span m="4700720">titillate,</span> <span
  m="4701380">because</span> <span m="4701610">I'll</span> <span
  m="4701770">tell</span> <span m="4701970">you</span> <span
  m="4702100">what</span> <span m="4702730">is</span> <span
  m="4702880">missing</span> <span m="4703190">here.</span></p><p><span
  m="4704000">But</span> <span m="4704110">let's</span> <span
  m="4704380">say</span> <span m="4704610">that</span> <span
  m="4705640">I</span> <span m="4705800">have</span> <span m="4706090">a</span>
  <span m="4706140">hash</span> <span m="4706480">function</span> <span
  m="4708120">that</span> <span m="4708340">looks</span> <span
  m="4708610">like</span> <span m="4708870">this.</span> <span
  m="4713600">And</span> <span m="4713740">this</span> <span
  m="4714980">here</span> <span m="4717270">is</span> <span
  m="4718220">non-malleable.</span> <span m="4719970">It</span> <span
  m="4720060">is</span> <span m="4720290">collision</span> <span
  m="4720680">resistant.</span> <span m="4721690">And</span> <span
  m="4721910">it's</span> <span m="4722030">one-way,</span> <span
  m="4723080">all right?</span> <span m="4723290">So</span> <span
  m="4723460">h</span> <span m="4723730">of</span> <span m="4723850">x</span>
  <span m="4724180">has</span> <span m="4724900">all</span> <span
  m="4725070">these</span> <span m="4725230">wonderful</span> <span
  m="4725550">properties,</span> <span m="4726730">all</span> <span
  m="4726800">right?</span></p><p><span m="4728710">I'm</span> <span
  m="4728900">creating</span> <span m="4729290">an</span> <span
  m="4729440">h</span> <span m="4729760">prime</span> <span m="4730170">x</span>
  <span m="4731420">that</span> <span m="4731900">looks</span> <span
  m="4732160">like</span> <span m="4732340">this,</span> <span
  m="4732800">which</span> <span m="4732840">is</span> <span
  m="4732940">a</span> <span m="4732980">concatenation</span> <span
  m="4734290">of</span> <span m="4734450">h</span> <span m="4734660">of</span>
  <span m="4734770">x,</span> <span m="4735450">and</span> <span
  m="4735880">giving</span> <span m="4736310">away</span> <span
  m="4737170">the</span> <span m="4737260">most</span> <span
  m="4737530">significant</span> <span m="4738190">bit</span> <span
  m="4739170">of</span> <span m="4739450">x,</span> <span
  m="4740090">which</span> <span m="4740210">is</span> <span
  m="4740300">my</span> <span m="4740440">bid,</span> <span
  m="4741340">right?</span> <span m="4741670">I'm</span> <span
  m="4741800">just</span> <span m="4741980">giving</span> <span
  m="4742250">that</span> <span m="4742360">away,</span> <span
  m="4743160">right?</span> <span m="4743780">The</span> <span
  m="4743900">problem</span> <span m="4744370">here</span> <span
  m="4745080">is</span> <span m="4745270">that</span> <span
  m="4745690">we</span> <span m="4746360">haven't</span> <span
  m="4746780">really</span> <span m="4748190">made</span> <span
  m="4748520">our</span> <span m="4748610">properties</span> <span
  m="4749570">broad</span> <span m="4750050">enough</span> <span
  m="4751030">to</span> <span m="4751180">solve</span> <span
  m="4751660">this</span> <span m="4751810">particular</span> <span
  m="4752110">application</span> <span m="4753320">to</span> <span
  m="4753420">the</span> <span m="4753530">extent</span> <span
  m="4754230">that</span> <span m="4756140">there's</span> <span
  m="4756570">contrived</span> <span m="4757220">cases</span> <span
  m="4758100">where</span> <span m="4758260">these</span> <span
  m="4758420">properties</span> <span m="4758840">aren't</span> <span
  m="4759140">enough,</span> <span m="4759820">OK?</span></p><p><span
  m="4760420">And</span> <span m="4760670">the</span> <span
  m="4760870">reason</span> <span m="4761160">is</span> <span
  m="4761260">simple.</span> <span m="4762180">h</span> <span
  m="4762490">prime</span> <span m="4762810">x</span> <span
  m="4764520">is</span> <span m="4764710">arguably</span> <span
  m="4765940">NM,</span> <span m="4766848">CR,</span> <span
  m="4768530">and</span> <span m="4768850">OW.</span> <span
  m="4770000">And</span> <span m="4770330">I won't</span> <span m="4770630">go
  into</span> <span m="4770920">to</span> <span m="4771060">each</span> <span
  m="4771310">of</span> <span m="4771390">those</span> <span
  m="4771570">arguments.</span> <span m="4772660">But</span> <span
  m="4773510">you</span> <span m="4773690">can</span> <span
  m="4773820">think</span> <span m="4773950">about</span> <span
  m="4774170">it,</span> <span m="4774620">right?</span></p><p><span
  m="4776630">If I'm</span> <span m="4776810">just</span> <span
  m="4776980">giving</span> <span m="4777150">you</span> <span
  m="4777270">one</span> <span m="4777550">bit,</span> <span
  m="4777890">there's</span> <span m="4778380">159</span> <span
  m="4779320">others,</span> <span m="4780030">there's a</span> <span
  m="4780480">couple</span> <span m="4780710">of hundred</span> <span
  m="4781070">others,</span> <span m="4781750">whatever</span> <span
  m="4782080">it</span> <span m="4782140">is</span> <span
  m="4782300">that</span> <span m="4782430">I</span> <span
  m="4782490">have</span> <span m="4782670">in</span> <span
  m="4782750">the</span> <span m="4782840">domain.</span> <span
  m="4783860">It's</span> <span m="4784020">not</span> <span
  m="4784210">going</span> <span m="4784330">to</span> <span
  m="4784370">be</span> <span m="4784900">invertible.</span> <span
  m="4786230">h</span> <span m="4786460">prime</span> <span m="4787150">x</span>
  <span m="4787340">is</span> <span m="4787460">not</span> <span
  m="4787650">going</span> <span m="4787750">to</span> <span
  m="4787790">be</span> <span m="4787870">invertible</span> <span
  m="4788690">if</span> <span m="4788850">h</span> <span m="4789040">of</span>
  <span m="4789160">x</span> <span m="4789420">is</span> <span
  m="4789720">not</span> <span m="4789940">invertible.</span> <span
  m="4791080">h</span> <span m="4791280">prime</span> <span m="4791530">x</span>
  <span m="4791720">is</span> <span m="4791860">not</span> <span
  m="4794600">going</span> <span m="4794790">to</span> <span
  m="4794860">be</span> <span m="4796600">breakable</span> <span
  m="4797150">in</span> <span m="4797240">terms</span> <span
  m="4797460">of</span> <span m="4797530">collision</span> <span
  m="4797880">resistance</span> <span m="4798910">if</span> <span
  m="4799160">h</span> <span m="4799380">of</span> <span m="4799480">x</span>
  <span m="4799820">is</span> <span m="4800010">not</span> <span
  m="4800190">breakable,</span> <span m="4800950">and</span> <span
  m="4801120">so</span> <span m="4801230">on</span> <span m="4801360">and</span>
  <span m="4801450">so</span> <span m="4801600">forth.</span></p><p><span
  m="4802450">But</span> <span m="4802870">if</span> <span m="4803030">I</span>
  <span m="4803110">had</span> <span m="4803290">a hash</span> <span
  m="4803580">function</span> <span m="4803860">like</span> <span
  m="4804080">that,</span> <span m="4804740">is</span> <span
  m="4804910">it</span> <span m="4805000">a</span> <span m="4805070">good</span>
  <span m="4805370">hash</span> <span m="4805590">function</span> <span
  m="4806390">for</span> <span m="4806530">my</span> <span
  m="4806680">commitment</span> <span m="4807290">application?</span> <span
  m="4809340">No,</span> <span m="4809530">obviously</span> <span
  m="4809950">not.</span> <span m="4810230">Because</span> <span
  m="4810430">if</span> <span m="4810520">I</span> <span
  m="4810600">publicize</span> <span m="4810975">this</span> <span
  m="4811350">hash</span> <span m="4811560">function--</span> <span
  m="4812050">remember,</span> <span m="4812160">everything</span> <span
  m="4812450">is</span> <span m="4812560">public</span> <span
  m="4812880">here</span> <span m="4813430">with</span> <span
  m="4813560">respect</span> <span m="4813890">to</span> <span
  m="4813940">h</span> <span m="4814920">and</span> <span m="4815240">h</span>
  <span m="4815450">prime--</span> <span m="4816450">you</span> <span
  m="4816765">are</span> <span m="4817080">giving</span> <span
  m="4817410">away</span> <span m="4817660">the</span> <span
  m="4817790">most</span> <span m="4818030">significant</span> <span
  m="4819000">that</span> <span m="4820010">corresponds</span> <span
  m="4820220">to</span> <span m="4820520">your</span> <span
  m="4820740">bid</span> <span m="4821360">in</span> <span
  m="4821550">this</span> <span m="4821740">particular</span> <span
  m="4822060">hash</span> <span m="4822260">function,</span> <span
  m="4822930">right?</span></p><p><span m="4823350">So</span> <span
  m="4823510">you</span> <span m="4823660">really</span> <span
  m="4823900">need</span> <span m="4824080">a</span> <span m="4824110">little
  bit</span> <span m="4824440">more</span> <span m="4825370">than</span> <span
  m="4825560">these</span> <span m="4828060">for</span> <span
  m="4828310">secrecy,</span> <span m="4833170">for</span> <span
  m="4833670">true</span> <span m="4833930">secrecy.</span> <span
  m="4837510">But</span> <span m="4837750">in</span> <span
  m="4837870">the</span> <span m="4837970">context</span> <span
  m="4838480">of</span> <span m="4839060">this</span> <span
  m="4839330">example,</span> <span m="4839890">I</span> <span
  m="4839950">mean</span> <span m="4840060">it's</span> <span
  m="4840230">common</span> <span m="4840510">sense</span> <span
  m="4840930">that</span> <span m="4841240">you</span> <span
  m="4841480">would</span> <span m="4841580">not</span> <span
  m="4841770">use</span> <span m="4841960">the</span> <span
  m="4842030">hash</span> <span m="4842230">function</span> <span
  m="4842520">like</span> <span m="4842700">that,</span> <span
  m="4843020">right?</span> <span m="4843550">So</span> <span
  m="4844000">it's</span> <span m="4844390">not</span> <span
  m="4844610">that</span> <span m="4845170">there's</span> <span
  m="4845290">anything</span> <span m="4845620">profound</span> <span
  m="4846360">here.</span> <span m="4846950">It's</span> <span
  m="4847130">just</span> <span m="4847370">that</span> <span
  m="4847830">I</span> <span m="4847950">want</span> <span m="4848090">to</span>
  <span m="4848140">make</span> <span m="4848320">sure</span> <span
  m="4848540">that</span> <span m="4848690">you</span> <span
  m="4849090">understand</span> <span m="4849830">the</span> <span
  m="4849910">nuances</span> <span m="4850620">of</span> <span
  m="4850980">the</span> <span m="4851090">properties</span> <span
  m="4851480">that we're</span> <span m="4851620">requiring.</span></p><p><span
  m="4852580">We</span> <span m="4852740">had</span> <span
  m="4852910">all</span> <span m="4853190">the</span> <span
  m="4854500">requirements</span> <span m="4855100">corresponding</span> <span
  m="4855560">to</span> <span m="4855630">the</span> <span
  m="4855790">definitions</span> <span m="4856370">of</span> <span
  m="4856900">NM</span> <span m="4857100">and</span> <span m="4857410">CR</span>
  <span m="4857850">and</span> <span m="4858080">OW.</span> <span
  m="4859000">And</span> <span m="4859150">you</span> <span m="4859420">need a
  little</span> <span m="4859620">bit</span> <span m="4859720">more</span> <span
  m="4859920">for</span> <span m="4860010">this</span> <span
  m="4860190">example,</span> <span m="4860950">where</span> <span
  m="4861150">you</span> <span m="4861230">have</span> <span
  m="4861350">to</span> <span m="4861450">say</span> <span
  m="4862540">something,</span> <span m="4863120">perhaps</span> <span
  m="4863340">informally,</span> <span m="4864300">like</span> <span
  m="4866180">the</span> <span m="4866350">bits</span> <span
  m="4866710">of</span> <span m="4866840">your</span> <span
  m="4867060">auction</span> <span m="4867900">are</span> <span
  m="4868030">scrambled</span> <span m="4869280">in</span> <span
  m="4869600">the</span> <span m="4869870">final</span> <span
  m="4870530">hash</span> <span m="4870870">output,</span> <span
  m="4871520">which</span> <span m="4871730">most</span> <span
  m="4872140">hash</span> <span m="4872390">functions</span> <span
  m="4872910">should</span> <span m="4873180">do</span> <span
  m="4873350">anyway,</span> <span m="4874010">and</span> <span
  m="4874230">h</span> <span m="4874510">of</span> <span m="4874740">x
  will</span> <span m="4874840">definitely</span> <span m="4875240">do.</span>
  <span m="4875730">But</span> <span m="4875910">you</span> <span
  m="4876060">kind</span> <span m="4876230">of</span> <span
  m="4876370">unscrambled</span> <span m="4877060">it</span> <span
  m="4877480">by</span> <span m="4877640">adding</span> <span
  m="4878380">this</span> <span m="4878840">little</span> <span
  m="4879060">thing</span> <span m="4879290">in</span> <span
  m="4879370">here,</span> <span m="4880080">corresponding</span> <span
  m="4880580">to</span> <span m="4880670">the</span> <span
  m="4880910">most</span> <span m="4881150">significant</span> <span
  m="4881600">thing,</span> <span m="4882210">all</span> <span
  m="4882650">right?</span></p><p><span m="4883050">So</span> <span
  m="4884380">I'll</span> <span m="4884500">stop</span> <span
  m="4884750">with</span> <span m="4884830">that.</span> <span
  m="4885480">Let</span> <span m="4885500">me</span> <span
  m="4885580">just</span> <span m="4885730">say</span> <span
  m="4885930">that</span> <span m="4886950">the</span> <span
  m="4888040">operation--</span> <span m="4889140">or</span> <span
  m="4889260">sorry,</span> <span m="4889760">the</span> <span
  m="4890540">work</span> <span m="4890860">involved</span> <span
  m="4891340">in</span> <span m="4891520">creating</span> <span
  m="4892000">hash</span> <span m="4892250">functions</span> <span
  m="4893420">that</span> <span m="4893590">are</span> <span
  m="4893700">poly-time</span> <span m="4894200">computable</span> <span
  m="4895190">is</span> <span m="4895930">research</span> <span
  m="4896370">work.</span> <span m="4897430">People</span> <span
  m="4898020">put</span> <span m="4898170">up</span> <span
  m="4898370">hash</span> <span m="4898590">functions</span> <span
  m="4899110">and</span> <span m="4899230">they</span> <span
  m="4899310">get</span> <span m="4899470">broken,</span> <span
  m="4900290">like</span> <span m="4900490">MD4</span> <span
  m="4900990">was</span> <span m="4901140">put</span> <span
  m="4901260">up</span> <span m="4901380">in</span> <span m="4901430">'92</span>
  <span m="4902000">and</span> <span m="4902080">then</span> <span
  m="4902200">got</span> <span m="4902350">broken,</span> <span
  m="4902790">SHA-1</span> <span m="4903500">and</span> <span
  m="4903680">so</span> <span m="4903770">on</span> <span m="4903910">and</span>
  <span m="4903990">so</span> <span m="4904130">forth.</span> <span
  m="4904700">And</span> <span m="4904870">so</span> <span m="4905640">I</span>
  <span m="4905770">just</span> <span m="4905990">encourage</span> <span
  m="4906380">you</span> <span m="4906520">to</span> <span
  m="4906650">look</span> <span m="4906810">up</span> <span
  m="4907690">SHA-3</span> <span m="4908660">and</span> <span
  m="4909240">just</span> <span m="4909440">take</span> <span
  m="4909580">a</span> <span m="4909660">quick</span> <span
  m="4909880">scan</span> <span m="4910600">and</span> <span
  m="4910770">what</span> <span m="4911010">the</span> <span
  m="4911340">complexity</span> <span m="4911880">of</span> <span
  m="4911960">SHA-3</span> <span m="4912480">is</span> <span
  m="4913460">with</span> <span m="4913630">respect</span> <span
  m="4913970">to</span> <span m="4914070">computing</span> <span
  m="4914330">the  hash</span> <span m="4914730">given</span> <span
  m="4916010">an</span> <span m="4916100">arbitrary</span> <span
  m="4916500">string,</span> <span m="4916820">all right?</span></p><p><span
  m="4917590">I'll stick</span> <span m="4917750">around for</span> <span
  m="4918050">questions.</span></p>
uid: 5b809cd6fee17a09494be825238dd22a
type: courses
layout: video
---
