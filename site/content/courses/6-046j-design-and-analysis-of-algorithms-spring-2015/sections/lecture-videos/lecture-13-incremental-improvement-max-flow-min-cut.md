---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas introduces
  network flow, and the Max Flow, Min Cut algorithm.</p>
  <p><strong>Instructors:</strong> Srinivas Devadas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: VYZGlgzr_As
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 19e5dbc4c4dc6a34666d613e4e4d8816
  - id: VYZGlgzr_As.srt
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-13-incremental-improvement-max-flow-min-cut/VYZGlgzr_As.srt
    title: 3play caption file
    type: null
    uid: 06ca1bf29738056df55788c779fc6360
  - id: VYZGlgzr_As.pdf
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-13-incremental-improvement-max-flow-min-cut/VYZGlgzr_As.pdf
    title: 3play pdf file
    type: null
    uid: cdc30ec3d4f272b9072e030145948742
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a782ef8ddf2efe122578a5dbb3d6bffb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2797a376343cb0750570ed77db9342f1
  - id: Video-YouTube-Stream
    media_location: VYZGlgzr_As
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    title: Video-YouTube-Stream
    type: Video
    uid: e5c63ed9aae530257730bf3498549631
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/VYZGlgzr_As/default.jpg'
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0fad4fd83c58ccc066be5c8df176d67c
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    title: Video-iTunes U-MP4
    type: Video
    uid: 957c730d186c5f32f6d2fc738b512ab1
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec13_300k.mp4'
    parent_uid: b772acb793d5abd0aeb930864630d4d6
    title: Video-Internet Archive-MP4
    type: Video
    uid: eb01a6a434cac888b084c1d7f48d75bb
inline_embed_id: '55702428lecture13:incrementalimprovement:maxflow,mincut52230917'
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-13-incremental-improvement-max-flow-min-cut
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-13-incremental-improvement-max-flow-min-cut
title: 'Lecture 13: Incremental Improvement: Max Flow, Min Cut'
transcript: >-
  <p><span m="40">The</span> <span m="170">following</span> <span
  m="620">content</span> <span m="1210">is</span> <span m="1320">provided</span>
  <span m="1780">under</span> <span m="2029">a</span> <span
  m="2080">Creative</span> <span m="2480">Commons</span> <span
  m="2900">license.</span> <span m="4010">Your</span> <span
  m="4180">support</span> <span m="4730">will</span> <span m="4880">help</span>
  <span m="5090">MIT</span> <span m="5810">OpenCourseWare</span> <span
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
  m="21260">SRINIVAS DEVADAS: All</span> <span m="21320">right.</span> <span
  m="21440">Good</span> <span m="21580">morning,</span> <span
  m="21830">everyone.</span> <span m="22700">Welcome</span> <span
  m="23040">back</span> <span m="23270">from</span> <span
  m="23390">spring</span> <span m="23730">break.</span> <span
  m="24540">Hope</span> <span m="24790">you</span> <span m="24890">had</span>
  <span m="25040">a</span> <span m="25090">nice</span> <span
  m="25370">time</span> <span m="25610">off</span> <span m="25860">and</span>
  <span m="26030">couldn't</span> <span m="26270">wait</span> <span
  m="26540">to</span> <span m="26640">get</span> <span m="26810">back</span>
  <span m="27210">to</span> <span m="27570">6.046.</span></p><p><span
  m="29230">So</span> <span m="29510">exciting</span> <span
  m="30000">second</span> <span m="30340">half.</span> <span
  m="31620">Going</span> <span m="31790">to</span> <span m="31890">do</span>
  <span m="32720">flow</span> <span m="33090">networks</span> <span
  m="34290">today</span> <span m="34670">on</span> <span
  m="34850">Thursday.</span> <span m="36230">Next</span> <span
  m="36530">week,</span> <span m="36780">it's</span> <span
  m="37140">linear</span> <span m="37470">programming,</span> <span
  m="38890">on</span> <span m="39170">to</span> <span
  m="39280">complexity,</span> <span m="40570">distributed</span> <span
  m="41100">algorithms,</span> <span m="41970">cryptography.</span> <span
  m="43880">Topics</span> <span m="44270">going</span> <span m="44400">to</span>
  <span m="44460">come</span> <span m="44650">fast</span> <span
  m="45040">and</span> <span m="45160">furious.</span> <span
  m="45730">Hopefully,</span> <span m="46060">they'll</span> <span
  m="46200">all</span> <span m="46370">be</span> <span
  m="46500">interesting.</span></p><p><span m="47710">So</span> <span
  m="48390">there's</span> <span m="48590">a</span> <span m="48660">lot</span>
  <span m="49090">of</span> <span m="49170">setup</span> <span
  m="50040">associated</span> <span m="50700">with</span> <span
  m="51230">network</span> <span m="51660">flow,</span> <span
  m="52150">max</span> <span m="52590">flow.</span> <span m="54220">It's</span>
  <span m="54370">an</span> <span m="54450">optimization</span> <span
  m="55110">problem.</span> <span m="56080">And</span> <span m="56140">so</span>
  <span m="56220">I'm</span> <span m="56310">going</span> <span
  m="56430">to</span> <span m="56510">spend</span> <span m="56880">like</span>
  <span m="57190">the</span> <span m="57590">first</span> <span
  m="58040">hour</span> <span m="58290">here--</span> <span m="58980">and</span>
  <span m="59160">hopefully,</span> <span m="59450">it</span> <span
  m="59520">won't</span> <span m="59680">be</span> <span m="59780">too</span>
  <span m="60600">boring--</span> <span m="61820">setting</span> <span
  m="62280">up</span> <span m="62760">flow</span> <span
  m="63070">networks,</span> <span m="63710">describing</span> <span
  m="64280">the</span> <span m="64349">max</span> <span m="64629">flow</span>
  <span m="64819">problem.</span> <span m="65700">As</span> <span
  m="65880">you</span> <span m="65950">can</span> <span m="66060">see,</span>
  <span m="66230">this</span> <span m="66420">outline</span> <span
  m="66920">is</span> <span m="67400">fairly</span> <span
  m="67780">involved,</span> <span m="68920">talking</span> <span
  m="69220">about</span> <span m="69490">cuts</span> <span m="69820">in</span>
  <span m="69920">a</span> <span m="69970">network,</span> <span
  m="71520">residual</span> <span m="72120">networks.</span></p><p><span
  m="73210">And</span> <span m="74198">we'll,</span> <span m="75830">more</span>
  <span m="76060">or</span> <span m="76110">less,</span> <span
  m="77170">end</span> <span m="77420">the</span> <span m="77490">lecture</span>
  <span m="78050">with</span> <span m="79350">the</span> <span
  m="79560">statement,</span> <span m="80655">though</span> <span
  m="80960">not</span> <span m="81200">the</span> <span m="81280">proof--</span>
  <span m="81890">we'll</span> <span m="82270">save</span> <span
  m="82600">that</span> <span m="82760">for</span> <span m="82880">next</span>
  <span m="83140">time--</span> <span m="83840">of</span> <span
  m="84050">the</span> <span m="84110">mas-flow</span> <span
  m="84880">min-cut</span> <span m="85110">theorem,</span> <span
  m="85960">which</span> <span m="86150">is</span> <span m="86270">really</span>
  <span m="86740">an</span> <span m="86920">iconic</span> <span
  m="87440">theorem</span> <span m="88450">in</span> <span m="88840">the</span>
  <span m="88970">literature,</span> <span m="90000">and</span> <span
  m="90230">suddenly,</span> <span m="90880">the</span> <span
  m="91030">crucial</span> <span m="91480">theorem</span> <span
  m="91910">for</span> <span m="93090">flow</span> <span
  m="93400">networks.</span> <span m="94340">And</span> <span
  m="95410">we'll</span> <span m="97270">take</span> <span m="97560">the</span>
  <span m="97630">max-flow min-cut theorem</span> <span m="99680">and</span>
  <span m="100090">use</span> <span m="100390">that</span> <span
  m="101140">to</span> <span m="101630">get</span> <span m="101960">to</span>
  <span m="102500">the</span> <span m="102640">first</span> <span
  m="103090">ever</span> <span m="104510">max-flow</span> <span
  m="105160">algorithm,</span> <span m="105940">which</span> <span
  m="106140">was</span> <span m="106360">due</span> <span m="106550">to</span>
  <span m="106650">Ford</span> <span m="107100">and</span> <span
  m="107510">Fulkerson.</span> <span m="108330">And</span> <span
  m="109190">that</span> <span m="109390">should</span> <span
  m="109570">be,</span> <span m="110260">pretty</span> <span
  m="110450">much,</span> <span m="110670">at</span> <span m="110750">the</span>
  <span m="111740">end</span> <span m="111910">of</span> <span
  m="111980">today's</span> <span m="112250">lecture.</span></p><p><span
  m="113390">And</span> <span m="113810">next</span> <span
  m="114060">time,</span> <span m="115110">we'll</span> <span
  m="115320">talk</span> <span m="115570">about</span> <span
  m="116980">the</span> <span m="117210">proof</span> <span m="117590">of</span>
  <span m="118195">max-flow min-cut,</span> <span m="118990">talk</span> <span
  m="119460">about</span> <span m="119630">some</span> <span
  m="119770">of</span> <span m="119840">the</span> <span
  m="119910">issues</span> <span m="120310">with</span> <span
  m="120450">Ford-Fulkerson,</span> <span m="121820">and</span> <span
  m="122020">then</span> <span m="122270">use</span> <span m="122600">max</span>
  <span m="122930">flow</span> <span m="123780">as</span> <span
  m="125850">a</span> <span m="125920">hammer</span> <span m="126350">to</span>
  <span m="126470">solve</span> <span m="127350">interesting</span> <span
  m="127820">problems</span> <span m="128280">in</span> <span
  m="129250">bipartite</span> <span m="129919">matching,</span> <span
  m="131060">baseball</span> <span m="131650">playoff</span> <span
  m="132050">elimination,</span> <span m="132790">and</span> <span
  m="132910">things</span> <span m="133120">like</span> <span
  m="133320">that.</span> <span m="134150">So</span> <span
  m="134240">just</span> <span m="134530">like</span> <span
  m="134830">shortest</span> <span m="135310">paths,</span> <span
  m="136510">can</span> <span m="136700">be</span> <span m="136850">used</span>
  <span m="137220">not</span> <span m="137440">just</span> <span
  m="137730">to</span> <span m="137820">compute</span> <span
  m="138802">the</span> <span m="140490">shortest</span> <span
  m="140990">distance</span> <span m="141450">from</span> <span
  m="141820">point</span> <span m="142170">A</span> <span m="142310">to</span>
  <span m="142410">point</span> <span m="142730">B,</span> <span
  m="143370">you</span> <span m="143530">can</span> <span
  m="143640">imagine</span> <span m="144090">that</span> <span
  m="144720">other</span> <span m="145000">problems,</span> <span
  m="145680">for</span> <span m="145770">example,</span> <span
  m="146160">scheduling</span> <span m="146630">problems,</span> <span
  m="147140">time</span> <span m="147430">problems,</span> <span
  m="148380">could</span> <span m="148530">be</span> <span
  m="148620">solved</span> <span m="149000">using</span> <span
  m="149290">Dijkstra--</span> <span m="149840">and</span> <span
  m="149990">you've</span> <span m="150120">probably</span> <span
  m="150390">seen</span> <span m="150580">examples</span> <span
  m="151060">of</span> <span m="151150">that--</span> <span
  m="152180">max</span> <span m="152520">flow</span> <span m="152780">is</span>
  <span m="152900">another</span> <span m="153970">algorithmic</span> <span
  m="154590">hammer</span> <span m="155160">that's</span> <span
  m="155380">being</span> <span m="155550">used</span> <span
  m="155940">to</span> <span m="156040">solve</span> <span m="156360">a</span>
  <span m="156510">wide</span> <span m="156760">variety</span> <span
  m="157120">of</span> <span m="157230">problems.</span> <span
  m="158150">We</span> <span m="158310">won't</span> <span
  m="158530">really</span> <span m="158730">touch</span> <span
  m="159060">on</span> <span m="159280">that</span> <span
  m="159690">aspect</span> <span m="160140">today,</span> <span
  m="160860">but</span> <span m="161000">we'll</span> <span
  m="161150">spend</span> <span m="161690">a</span> <span
  m="161770">bunch</span> <span m="161990">of</span> <span
  m="162060">time</span> <span m="162400">on</span> <span
  m="162560">Thursday</span> <span m="163680">talking</span> <span
  m="163960">about</span> <span m="164190">that.</span></p><p><span
  m="165680">So</span> <span m="166020">let's</span> <span m="166230">get</span>
  <span m="166360">started.</span> <span m="170150">We're</span> <span
  m="170340">going</span> <span m="170490">to</span> <span
  m="170620">start</span> <span m="171060">with</span> <span
  m="171420">defining</span> <span m="172070">what</span> <span
  m="172250">a</span> <span m="172290">flow</span> <span
  m="172590">network</span> <span m="173120">is.</span> <span
  m="174660">And</span> <span m="174870">at</span> <span m="174970">some</span>
  <span m="175180">level,</span> <span m="175510">it's</span> <span
  m="175670">really</span> <span m="175890">simple.</span> <span
  m="176410">I</span> <span m="176450">mean,</span> <span m="176570">it's</span>
  <span m="177030">a</span> <span m="177090">graph.</span> <span
  m="178815">A</span> <span m="179210">graph</span> <span m="179640">is</span>
  <span m="179750">going</span> <span m="179900">to</span> <span
  m="179960">have</span> <span m="180220">vertices</span> <span
  m="180430">and</span> <span m="180930">edges.</span> <span
  m="182380">We're</span> <span m="182500">going</span> <span
  m="182750">to</span> <span m="183870">only</span> <span m="184210">look</span>
  <span m="184410">at</span> <span m="184500">directed</span> <span
  m="185120">graphs.</span> <span m="186470">And</span> <span
  m="186720">we're</span> <span m="186810">going</span> <span
  m="186930">to</span> <span m="186990">have</span> <span m="187210">a</span>
  <span m="188090">couple</span> <span m="188470">of</span> <span
  m="188550">constraints</span> <span m="189150">associated</span> <span
  m="189660">with</span> <span m="189790">these</span> <span
  m="189940">directed</span> <span m="190350">graphs</span> <span
  m="190750">that</span> <span m="190860">are</span> <span
  m="191130">going</span> <span m="191350">to</span> <span
  m="191410">make</span> <span m="192020">the</span> <span
  m="192170">algorithms,</span> <span m="192720">and</span> <span
  m="192820">the</span> <span m="192900">proofs,</span> <span
  m="193390">and</span> <span m="193520">the</span> <span
  m="193590">notation</span> <span m="194190">a</span> <span
  m="194240">lot</span> <span m="194490">simpler.</span> <span
  m="195510">I'll</span> <span m="195710">get</span> <span m="195860">to</span>
  <span m="195940">that</span> <span m="196130">in</span> <span
  m="196220">a</span> <span m="196280">few</span> <span
  m="196500">minutes.</span></p><p><span m="197660">And</span> <span
  m="198690">the</span> <span m="198880">key</span> <span
  m="199090">thing</span> <span m="199340">with</span> <span
  m="199580">the</span> <span m="199700">flow</span> <span
  m="199970">networks--</span> <span m="200520">I</span> <span
  m="200590">mean,</span> <span m="200710">just</span> <span
  m="200920">like</span> <span m="201410">you</span> <span
  m="201720">have</span> <span m="201930">a</span> <span
  m="201970">source</span> <span m="202440">and</span> <span m="202560">a</span>
  <span m="202600">destination</span> <span m="203380">for</span> <span
  m="203560">shortest</span> <span m="203970">paths,</span> <span
  m="204900">in</span> <span m="205100">a</span> <span m="205170">flow</span>
  <span m="205390">network</span> <span m="205760">as</span> <span
  m="205920">well,</span> <span m="206270">you're</span> <span
  m="206420">going</span> <span m="206540">to</span> <span
  m="206600">have</span> <span m="206780">a</span> <span
  m="206830">source,</span> <span m="207450">and</span> <span
  m="207580">you're</span> <span m="207640">going</span> <span
  m="207760">to</span> <span m="207820">have</span> <span m="207910">a</span>
  <span m="207950">sink.</span> <span m="209300">So</span> <span
  m="209690">we're</span> <span m="209820">going</span> <span
  m="210050">to</span> <span m="210170">have</span> <span
  m="210450">distinguished</span> <span m="211050">vertices,</span> <span
  m="213640">two</span> <span m="213850">distinguished</span> <span
  m="214480">vertices.</span> <span m="219160">And</span> <span
  m="219200">we're</span> <span m="219280">going</span> <span
  m="219400">to</span> <span m="219460">call</span> <span m="219710">them</span>
  <span m="220670">the</span> <span m="220760">source,</span> <span
  m="221250">s,</span> <span m="223210">and</span> <span m="223420">a</span>
  <span m="223470">sink,</span> <span m="224320">t.</span></p><p><span
  m="226330">And</span> <span m="226520">so</span> <span m="226700">the</span>
  <span m="226820">basic</span> <span m="227210">idea</span> <span
  m="227570">here--</span> <span m="228190">and</span> <span
  m="228330">just</span> <span m="228500">to</span> <span m="228580">sort</span>
  <span m="228720">of</span> <span m="228780">set</span> <span
  m="229020">things</span> <span m="229250">up</span> <span
  m="229410">right</span> <span m="229620">up</span> <span
  m="229720">front--</span> <span m="230640">is</span> <span
  m="230870">that</span> <span m="231140">there's</span> <span
  m="231310">going</span> <span m="231440">to</span> <span m="231500">be</span>
  <span m="231590">some</span> <span m="231780">flow</span> <span
  m="232160">coming</span> <span m="232520">out</span> <span
  m="232780">of</span> <span m="232960">s.</span> <span m="233980">And</span>
  <span m="234250">it's</span> <span m="234350">going</span> <span
  m="234490">to</span> <span m="234560">have</span> <span m="234780">to</span>
  <span m="234910">obey</span> <span m="235240">some</span> <span
  m="235460">constraints</span> <span m="236260">associated</span> <span
  m="236750">with</span> <span m="236880">capacities</span> <span
  m="237670">of</span> <span m="237780">the</span> <span
  m="237850">edges,</span> <span m="238890">in</span> <span
  m="239060">order</span> <span m="239240">to</span> <span
  m="239330">make</span> <span m="239590">its</span> <span m="239740">way</span>
  <span m="239980">to</span> <span m="240100">t.</span> <span
  m="241310">And</span> <span m="241640">along</span> <span
  m="242070">the</span> <span m="242140">way--</span> <span
  m="243360">this</span> <span m="243520">is</span> <span
  m="243630">flow.</span> <span m="244030">This</span> <span
  m="244200">is</span> <span m="244300">water.</span> <span
  m="244850">You</span> <span m="244970">can</span> <span
  m="245060">think</span> <span m="245180">of</span> <span m="245240">it</span>
  <span m="245310">as</span> <span m="245400">water,</span> <span
  m="245840">or</span> <span m="245930">cars,</span> <span m="246510">or</span>
  <span m="246600">what</span> <span m="246900">have</span> <span
  m="247110">you.</span> <span m="247670">It's</span> <span m="247880">a</span>
  <span m="247980">rate.</span> <span m="249150">You're</span> <span
  m="249740">not</span> <span m="249930">going</span> <span m="250060">to</span>
  <span m="250220">allow</span> <span m="250600">accumulation</span> <span
  m="251970">in</span> <span m="252140">the</span> <span
  m="252220">intermediate</span> <span m="252720">nodes.</span></p><p><span
  m="253650">So</span> <span m="254030">you're</span> <span
  m="254160">going</span> <span m="254280">to</span> <span
  m="254340">have</span> <span m="256380">law</span> <span m="256640">of</span>
  <span m="256750">conservation</span> <span m="257560">associated</span> <span
  m="258120">with</span> <span m="258290">this</span> <span
  m="258820">commodity</span> <span m="259430">that's</span> <span
  m="259649">flowing,</span> <span m="260250">be</span> <span
  m="260670">water,</span> <span m="261060">or</span> <span
  m="261140">cars,</span> <span m="261610">or</span> <span
  m="261690">people.</span> <span m="262670">And</span> <span
  m="263340">that</span> <span m="263590">essentially</span> <span
  m="264000">comes</span> <span m="264240">down</span> <span
  m="264540">to,</span> <span m="266500">for</span> <span m="267100">any</span>
  <span m="268160">vertex,</span> <span m="268630">other</span> <span
  m="268960">than</span> <span m="269200">s</span> <span m="269520">or</span>
  <span m="269670">t,</span> <span m="270590">everything</span> <span
  m="271520">entering</span> <span m="271990">the</span> <span
  m="272060">vertex</span> <span m="272540">has</span> <span
  m="272790">to</span> <span m="272890">leave</span> <span m="273100">the</span>
  <span m="273170">vertex.</span> <span m="274550">So</span> <span
  m="274640">that's</span> <span m="274810">like</span> <span
  m="274980">Kirchoff's</span> <span m="275420">current</span> <span
  m="275750">law,</span> <span m="275910">for</span> <span
  m="276070">example.</span> <span m="277180">So</span> <span
  m="277370">there's</span> <span m="277550">a</span> <span
  m="277700">lot</span> <span m="278050">of</span> <span
  m="278340">analogies</span> <span m="278960">here</span> <span
  m="279750">with</span> <span m="280090">respect</span> <span
  m="280490">to</span> <span m="280910">real</span> <span
  m="281170">life,</span> <span m="282140">or</span> <span
  m="282680">electricity</span> <span m="283240">in</span> <span
  m="283340">this</span> <span m="283520">case.</span> <span
  m="284510">And</span> <span m="284970">you'll</span> <span
  m="285210">see</span> <span m="285370">that,</span> <span m="285970">I</span>
  <span m="286140">think,</span> <span m="287400">over</span> <span
  m="287670">and</span> <span m="287770">over</span> <span m="288280">as</span>
  <span m="288470">we</span> <span m="288570">go</span> <span
  m="288690">along.</span></p><p><span m="290240">So</span> <span
  m="290530">let's</span> <span m="291830">take</span> <span m="292020">a</span>
  <span m="292070">look</span> <span m="292260">at</span> <span
  m="292350">a</span> <span m="292655">flow</span> <span
  m="292960">network.</span> <span m="293710">I'm</span> <span
  m="293815">not</span> <span m="293920">going</span> <span m="294040">to</span>
  <span m="294100">draw</span> <span m="294215">it</span> <span
  m="294330">out</span> <span m="294480">here.</span> <span
  m="294670">I'm</span> <span m="294820">going</span> <span m="294940">to</span>
  <span m="295000">keep</span> <span m="295180">this</span> <span
  m="295330">one</span> <span m="295530">example</span> <span
  m="296560">all</span> <span m="296810">through</span> <span
  m="297030">the</span> <span m="297120">lecture.</span> <span
  m="298200">But</span> <span m="298580">just</span> <span m="299050">to</span>
  <span m="299220">go</span> <span m="299420">off</span> <span
  m="299790">and</span> <span m="300180">talk</span> <span
  m="300490">about</span> <span m="301240">edges</span> <span
  m="301500">and</span> <span m="302170">capacities</span> <span
  m="304750">before</span> <span m="305040">we</span> <span
  m="305160">actually</span> <span m="305450">draw</span> <span
  m="305790">an</span> <span m="305860">example,</span> <span
  m="308190">we're</span> <span m="308350">going</span> <span
  m="308510">to</span> <span m="308730">have</span> <span
  m="309040">edges,</span> <span m="309830">directed</span> <span
  m="310380">edges,</span> <span m="310840">u, v.</span> <span
  m="312110">So</span> <span m="312490">you</span> <span m="312720">have</span>
  <span m="312870">an</span> <span m="312960">edge</span> <span
  m="313200">from</span> <span m="313390">u</span> <span m="313516">to</span>
  <span m="313643">v.</span> <span m="314490">And</span> <span
  m="314940">it's</span> <span m="315150">going</span> <span
  m="315300">to</span> <span m="315370">belong</span> <span m="317210">to</span>
  <span m="317925">E,</span> <span m="318220">obviously.</span> <span
  m="318680">That's</span> <span m="318930">the</span> <span
  m="319070">reason</span> <span m="320090">the</span> <span
  m="320280">edge</span> <span m="320475">is</span> <span m="320670">in</span>
  <span m="320790">the</span> <span m="320880">network.</span></p><p><span
  m="321990">And</span> <span m="322470">this</span> <span
  m="322740">edge</span> <span m="324190">is</span> <span
  m="324350">going</span> <span m="324490">to</span> <span
  m="324550">have</span> <span m="324690">a</span> <span
  m="324730">non-negative--</span> <span m="326160">each</span> <span
  m="326460">edge</span> <span m="327420">is</span> <span
  m="327610">going</span> <span m="327740">to</span> <span
  m="327810">have</span> <span m="327930">a</span> <span
  m="327960">non-negative</span> <span m="328700">capacity,</span> <span
  m="331400">C(u,v).</span> <span m="333748">Right?</span> <span
  m="335080">And</span> <span m="336470">if</span> <span
  m="336920">perchance</span> <span m="337920">theres'</span> <span
  m="338260">no</span> <span m="338510">edge</span> <span
  m="338860">from,</span> <span m="339180">let's</span> <span
  m="339400">say,</span> <span m="340430">s1</span> <span m="341090">to</span>
  <span m="341280">s2--</span> <span m="342200">these</span> <span
  m="342470">are</span> <span m="342770">different</span> <span
  m="343150">vertices</span> <span m="343580">from</span> <span
  m="343770">the</span> <span m="344160">source</span> <span
  m="344800">or</span> <span m="345710">the</span> <span m="345820">sink,</span>
  <span m="347160">just</span> <span m="347560">as</span> <span
  m="347780">an</span> <span m="347850">example,</span> <span
  m="349020">you</span> <span m="349100">can</span> <span m="349210">say</span>
  <span m="349620">it's</span> <span m="349790">between</span> <span
  m="349960">a and b--</span> <span m="350950">then,</span> <span
  m="351400">we</span> <span m="351490">can</span> <span
  m="351600">assume</span> <span m="351910">that</span> <span
  m="352010">the</span> <span m="352070">capacity</span> <span
  m="352770">is</span> <span m="353240">0.</span></p><p><span
  m="354560">So</span> <span m="355020">if</span> <span m="356960">u, v</span>
  <span m="357650">does</span> <span m="357910">not</span> <span
  m="358190">belong</span> <span m="358570">to</span> <span m="358720">E,</span>
  <span m="360050">then</span> <span m="360460">assume</span> <span
  m="360920">that</span> <span m="361100">C(u,v)</span> <span
  m="362660">is</span> <span m="362850">0.</span> <span m="363560">So</span>
  <span m="363730">there's</span> <span m="363910">no</span> <span
  m="364140">way</span> <span m="364460">of</span> <span
  m="364600">getting</span> <span m="364910">from</span> <span
  m="365190">u</span> <span m="365370">to</span> <span m="365470">v.</span>
  <span m="365760">This</span> <span m="366230">rate,</span> <span
  m="366900">wall</span> <span m="367230">water,</span> <span
  m="368140">cars--</span> <span m="369150">you know,</span> <span
  m="369350">there's</span> <span m="369480">no</span> <span
  m="369660">road</span> <span m="370080">that</span> <span
  m="370210">gets</span> <span m="370450">you</span> <span
  m="370560">from</span> <span m="370810">u</span> <span m="370960">to</span>
  <span m="371060">v,</span> <span m="371780">OK?</span></p><p><span
  m="373400">So</span> <span m="373680">let's</span> <span
  m="373910">draw</span> <span m="374590">an</span> <span
  m="374740">example</span> <span m="375180">of</span> <span m="375270">a</span>
  <span m="375340">flow</span> <span m="375580">network.</span> <span
  m="376700">We'll</span> <span m="376850">talk</span> <span m="377070">a</span>
  <span m="377120">little</span> <span m="377350">bit</span> <span
  m="377490">about</span> <span m="378220">what</span> <span
  m="378460">the</span> <span m="378520">flow</span> <span m="378920">is</span>
  <span m="379170">and</span> <span m="379280">what</span> <span
  m="379430">the</span> <span m="379510">max</span> <span m="379820">flow</span>
  <span m="380090">is</span> <span m="381250">in</span> <span
  m="383420">example-driven</span> <span m="385300">algorithm</span> <span
  m="385760">design,</span> <span m="386330">if</span> <span
  m="386370">you</span> <span m="386490">will.</span> <span m="387880">So</span>
  <span m="388630">I've</span> <span m="388730">got</span> <span
  m="388880">a</span> <span m="388990">source,</span> <span m="389450">s.</span>
  <span m="390010">And</span> <span m="390170">I've</span> <span
  m="390230">got</span> <span m="390470">a</span> <span m="391270">sink,</span>
  <span m="392180">t.</span> <span m="393950">And</span> <span
  m="394120">then,</span> <span m="394250">I've</span> <span
  m="394310">got</span> <span m="394450">a</span> <span m="394480">bunch</span>
  <span m="394770">of</span> <span m="394840">nodes</span> <span
  m="395140">in</span> <span m="395240">the</span> <span
  m="395300">middle.</span> <span m="397170">Just</span> <span
  m="397430">draw</span> <span m="397620">them</span> <span
  m="397800">out.</span></p><p><span m="401780">I'm</span> <span
  m="401940">not</span> <span m="402050">going</span> <span m="402170">to</span>
  <span m="402230">bother</span> <span m="403310">naming</span> <span
  m="403810">those</span> <span m="404080">nodes.</span> <span
  m="405630">Well,</span> <span m="405770">that</span> <span
  m="405910">might</span> <span m="406070">be</span> <span m="406180">a</span>
  <span m="406240">mistake.</span> <span m="408810">We'll</span> <span
  m="409055">see.</span> <span m="417000">So</span> <span m="417550">this</span>
  <span m="417770">is</span> <span m="417840">not</span> <span
  m="418050">like</span> <span m="418230">it's</span> <span m="418430">an</span>
  <span m="418530">acyclic</span> <span m="418900">graph.</span> <span
  m="422490">You're</span> <span m="422790">allowed</span> <span
  m="423320">cycles</span> <span m="425060">in</span> <span
  m="425230">this</span> <span m="425410">graph.</span> <span
  m="426430">But</span> <span m="426590">we</span> <span m="426700">will</span>
  <span m="426850">have</span> <span m="427000">a</span> <span
  m="427040">couple</span> <span m="427310">of</span> <span
  m="427370">constraints</span> <span m="428910">that</span> <span
  m="429090">are</span> <span m="429150">associated</span> <span
  m="429680">with</span> <span m="429820">this</span> <span
  m="429960">graph</span> <span m="430850">that</span> <span
  m="431050">I'll</span> <span m="431130">get</span> <span m="431290">to</span>
  <span m="431400">in</span> <span m="431500">just</span> <span
  m="431800">a</span> <span m="431840">minute.</span></p><p><span
  m="432980">So</span> <span m="433140">first,</span> <span
  m="433890">that's</span> <span m="434310">all</span> <span
  m="434480">we've</span> <span m="434580">got.</span> <span
  m="434970">You've</span> <span m="435120">got</span> <span
  m="435260">g,v,e,</span> <span m="436310">directed</span> <span
  m="436770">graph.</span> <span m="437510">Can't</span> <span
  m="437740">have</span> <span m="437920">cycles</span> <span
  m="438330">in</span> <span m="438440">it.</span> <span m="439360">And</span>
  <span m="440210">I'm</span> <span m="440400">going</span> <span
  m="440520">to</span> <span m="440590">draw</span> <span m="441950">a</span>
  <span m="442030">couple</span> <span m="442300">of</span> <span
  m="442380">numbers</span> <span m="442770">here.</span> <span
  m="443520">The</span> <span m="443720">numbers</span> <span
  m="444050">I'm</span> <span m="444160">putting</span> <span
  m="444410">up</span> <span m="444540">here</span> <span m="445390">are</span>
  <span m="445640">the</span> <span m="445720">capacities</span> <span
  m="456150">associated</span> <span m="456620">with</span> <span
  m="456740">each</span> <span m="456910">of</span> <span
  m="456990">these</span> <span m="457160">edges.</span> <span
  m="458540">So</span> <span m="461030">those</span> <span m="461410">are</span>
  <span m="461450">just</span> <span m="461630">the</span> <span
  m="461700">capacities.</span> <span m="462270">Those</span> <span
  m="462450">are</span> <span m="462530">C(u,v).</span> <span
  m="463690">And</span> <span m="464630">I</span> <span m="465010">said</span>
  <span m="465290">that,</span> <span m="465430">if</span> <span
  m="465540">u,v</span> <span m="466370">does</span> <span m="466550">not</span>
  <span m="466740">belong</span> <span m="467020">to</span> <span
  m="467120">E,</span> <span m="467295">then</span> <span
  m="467470">you're</span> <span m="467590">going</span> <span
  m="467710">to</span> <span m="467770">assume</span> <span
  m="468100">that</span> <span m="468250">C(u,v)</span> <span
  m="468820">is</span> <span m="468980">0.</span></p><p><span
  m="469980">So</span> <span m="470690">there's</span> <span
  m="470920">no</span> <span m="471120">edge,</span> <span m="471400">for</span>
  <span m="471510">example,</span> <span m="472940">between</span> <span
  m="474310">this</span> <span m="475420">node</span> <span
  m="475800">and</span> <span m="475960">that</span> <span
  m="476190">node.</span> <span m="476940">So</span> <span
  m="477070">there's</span> <span m="477240">no</span> <span
  m="477400">way</span> <span m="477680">that</span> <span m="477850">you</span>
  <span m="477920">can</span> <span m="478080">directly</span> <span
  m="478580">get</span> <span m="478760">from</span> <span
  m="478980">here</span> <span m="479140">to</span> <span
  m="479220">there.</span> <span m="480180">You</span> <span
  m="480340">can</span> <span m="480510">go</span> <span m="481190">like</span>
  <span m="481490">this,</span> <span m="481910">like</span> <span
  m="482190">this,</span> <span m="482540">and</span> <span
  m="482670">like</span> <span m="482920">that,</span> <span
  m="483770">and</span> <span m="484300">get</span> <span m="484550">from</span>
  <span m="484840">here</span> <span m="485050">to</span> <span
  m="485130">there.</span> <span m="485860">And</span> <span
  m="486030">you</span> <span m="486090">can</span> <span
  m="486180">obviously</span> <span m="486470">go</span> <span
  m="486630">like</span> <span m="486830">so,</span> <span m="488110">and</span>
  <span m="489130">like</span> <span m="489430">this,</span> <span
  m="489840">and</span> <span m="489970">like</span> <span
  m="490180">that,</span> <span m="491200">to</span> <span m="491340">get</span>
  <span m="492580">from</span> <span m="492880">the</span> <span
  m="494240">one</span> <span m="494400">on</span> <span m="494490">the</span>
  <span m="494990">top</span> <span m="495250">left</span> <span
  m="495550">to</span> <span m="495630">the</span> <span m="495730">one</span>
  <span m="495890">on</span> <span m="495960">the</span> <span
  m="496030">bottom</span> <span m="496310">right,</span> <span
  m="497090">OK?</span></p><p><span m="497400">So</span> <span
  m="499110">that's</span> <span m="499830">essentially</span> <span
  m="501026">the</span> <span m="501840">set</span> <span m="502150">up,</span>
  <span m="503040">except</span> <span m="503540">for</span> <span
  m="504800">the</span> <span m="504970">fact</span> <span
  m="505320">that</span> <span m="505480">we've</span> <span
  m="505640">just</span> <span m="505890">talked</span> <span
  m="506130">about</span> <span m="506350">capacities.</span> <span
  m="507690">And</span> <span m="508330">this</span> <span m="508550">is</span>
  <span m="508800">sort</span> <span m="509000">of</span> <span
  m="509200">the</span> <span m="509390">bandwidth,</span> <span
  m="509970">if</span> <span m="510090">you</span> <span m="510200">will.</span>
  <span m="511020">This</span> <span m="511150">is</span> <span
  m="511250">the</span> <span m="511410">amount</span> <span
  m="511890">of</span> <span m="511980">traffic</span> <span
  m="512630">that</span> <span m="512850">can</span> <span m="513020">go</span>
  <span m="513179">through</span> <span m="513400">this</span> <span
  m="513610">road.</span> <span m="514539">And</span> <span
  m="514804">now,</span> <span m="515070">we</span> <span m="515140">have</span>
  <span m="515240">to</span> <span m="515340">talk</span> <span
  m="515580">about</span> <span m="515900">the</span> <span
  m="515980">specific</span> <span m="516590">case</span> <span
  m="517039">where</span> <span m="517700">we're</span> <span
  m="517850">actually</span> <span m="518070">going</span> <span
  m="518200">to</span> <span m="518580">shove</span> <span
  m="518990">things</span> <span m="519390">through</span> <span
  m="519620">the</span> <span m="519720">network.</span></p><p><span
  m="520880">So</span> <span m="520929">we're</span> <span
  m="521010">going</span> <span m="521065">to</span> <span
  m="521120">have</span> <span m="521260">another</span> <span
  m="521580">number.</span> <span m="522480">So</span> <span
  m="522520">typically,</span> <span m="523360">we're</span> <span
  m="523480">going</span> <span m="523600">to</span> <span
  m="523659">have</span> <span m="523780">two</span> <span
  m="523919">numbers</span> <span m="524360">associated</span> <span
  m="524930">with</span> <span m="525180">each</span> <span
  m="525550">edge.</span> <span m="526360">One</span> <span m="526660">of</span>
  <span m="526720">them</span> <span m="526820">is</span> <span
  m="526900">going</span> <span m="527020">to</span> <span m="527080">be</span>
  <span m="527150">the</span> <span m="527240">capacity,</span> <span
  m="528320">and</span> <span m="528510">the</span> <span
  m="528640">other</span> <span m="529030">one</span> <span m="529190">is</span>
  <span m="529290">going</span> <span m="529440">to</span> <span
  m="529510">be</span> <span m="529640">the</span> <span m="529720">flow</span>
  <span m="530700">that</span> <span m="530910">goes</span> <span
  m="531160">through</span> <span m="531320">the</span> <span
  m="531420">edge.</span> <span m="532230">And</span> <span m="532470">as</span>
  <span m="532600">you</span> <span m="532680">can</span> <span
  m="532780">imagine,</span> <span m="533200">we're</span> <span
  m="533290">going</span> <span m="533410">to</span> <span
  m="533470">have</span> <span m="533730">this</span> <span
  m="534340">constraint</span> <span m="535280">that</span> <span
  m="535470">says</span> <span m="535710">that</span> <span
  m="535850">the</span> <span m="535910">flow</span> <span m="536660">can</span>
  <span m="536810">never</span> <span m="537020">exceed</span> <span
  m="537410">the</span> <span m="537480">capacity.</span></p><p><span
  m="538370">And</span> <span m="538520">that's</span> <span
  m="538680">the</span> <span m="538750">local</span> <span
  m="539190">constraint</span> <span m="540050">associated</span> <span
  m="540720">with</span> <span m="540950">each</span> <span
  m="541290">edge,</span> <span m="542120">OK?</span> <span
  m="542800">That</span> <span m="542970">doesn't</span> <span
  m="543280">mean</span> <span m="543710">that</span> <span
  m="545390">there</span> <span m="545660">aren't</span> <span
  m="546760">variations</span> <span m="547490">possible</span> <span
  m="547980">with</span> <span m="548140">respect</span> <span
  m="548540">to</span> <span m="549220">the</span> <span
  m="550240">overall</span> <span m="550720">flow</span> <span
  m="551030">of</span> <span m="551130">the</span> <span
  m="551200">network.</span> <span m="552800">Things</span> <span
  m="553670">can</span> <span m="553910">change.</span> <span
  m="554720">You</span> <span m="555260">obey</span> <span m="555680">the</span>
  <span m="555860">edge</span> <span m="556310">capacities.</span> <span
  m="557330">And</span> <span m="558140">there</span> <span
  m="558340">could</span> <span m="558480">be</span> <span
  m="558580">different</span> <span m="558950">flow</span> <span
  m="559320">coming</span> <span m="559610">out</span> <span
  m="559740">of</span> <span m="559900">s</span> <span m="560500">and</span>
  <span m="560960">going</span> <span m="561260">into</span> <span
  m="561460">t,</span> <span m="562140">et</span> <span
  m="562480">cetera.</span> <span m="563050">And</span> <span
  m="563230">so</span> <span m="563350">there</span> <span m="563490">is</span>
  <span m="563680">going</span> <span m="563820">to</span> <span
  m="563880">be</span> <span m="563980">an</span> <span
  m="564070">optimization</span> <span m="564700">here</span> <span
  m="564960">associated</span> <span m="565430">with</span> <span
  m="565580">the</span> <span m="565660">exact</span> <span
  m="566180">numbers</span> <span m="567310">that</span> <span
  m="567570">all</span> <span m="568300">obey</span> <span
  m="568750">these</span> <span m="569000">edge</span> <span
  m="569240">constraints,</span> <span m="569800">so these</span> <span
  m="570050">edge</span> <span m="570200">capacity</span> <span
  m="570660">constraints,</span> <span m="571500">OK?</span></p><p><span
  m="572290">So</span> <span m="573460">let's</span> <span
  m="573760">take</span> <span m="573970">a</span> <span m="574310">real</span>
  <span m="574630">simple</span> <span m="574880">example</span> <span
  m="576290">of</span> <span m="577310">a</span> <span m="577430">flow</span>
  <span m="577910">in</span> <span m="578010">this</span> <span
  m="578520">network.</span> <span m="579670">And</span> <span
  m="580260">ah,</span> <span m="581060">I</span> <span m="581190">have</span>
  <span m="581330">some</span> <span m="581620">colored</span> <span
  m="581930">chalk</span> <span m="582200">here.</span> <span
  m="584110">So</span> <span m="585110">I</span> <span m="585250">can</span>
  <span m="585360">put</span> <span m="585540">down</span> <span
  m="587480">the</span> <span m="587980">flow</span> <span
  m="588340">over</span> <span m="588490">here.</span> <span
  m="589130">And</span> <span m="589190">so</span> <span m="589280">this</span>
  <span m="589450">is</span> <span m="589560">flow.</span> <span
  m="592860">Wow.</span> <span m="593750">That</span> <span m="594020">is</span>
  <span m="594310">an</span> <span m="594440">ugly</span> <span
  m="594680">color.</span></p><p><span m="595470">[LAUGHTER]</span></p><p><span
  m="597290">But now,</span> <span m="597460">we're</span> <span
  m="597610">stuck</span> <span m="598860">for</span> <span
  m="599010">the</span> <span m="599100">rest</span> <span m="599350">of</span>
  <span m="599420">this</span> <span m="599560">lecture.</span> <span
  m="601690">So</span> <span m="603170">I've</span> <span m="603320">got</span>
  <span m="603540">2,</span> <span m="603860">2,</span> <span
  m="605750">1,</span> <span m="607076">colon,</span> <span m="607440">3.</span>
  <span m="607840">So</span> <span m="608010">the</span> <span
  m="608100">first</span> <span m="608430">number</span> <span
  m="608690">is</span> <span m="608830">the</span> <span m="608920">flow,</span>
  <span m="609860">and</span> <span m="610000">the</span> <span
  m="610060">second</span> <span m="610340">number</span> <span
  m="610590">is</span> <span m="610710">the</span> <span
  m="610790">capacity.</span> <span m="611600">Let</span> <span
  m="611810">me</span> <span m="611870">just</span> <span
  m="612040">write</span> <span m="612210">that</span> <span
  m="612380">out.</span> <span m="614000">This</span> <span
  m="614210">is--</span> <span m="620060">and</span> <span
  m="620460">then,</span> <span m="620580">this</span> <span
  m="620720">is</span> <span m="620850">1,</span> <span m="621400">colon,</span>
  <span m="621720">3.</span> <span m="622100">This</span> <span
  m="622290">is</span> <span m="623130">1,</span> <span m="624490">colon,</span>
  <span m="624740">2.</span> <span m="625360">So</span> <span
  m="625880">that</span> <span m="626180">meets</span> <span
  m="626480">the</span> <span m="626560">capacity.</span> <span
  m="627960">This</span> <span m="628170">is</span> <span m="628350">2,</span>
  <span m="629790">colon,</span> <span m="630090">3.</span> <span
  m="631240">And</span> <span m="631420">then</span> <span m="631720">1,</span>
  <span m="633512">colon,</span> <span m="633960">3,</span> <span
  m="634900">2,</span> <span m="635772">colon,</span> <span m="636210">3,</span>
  <span m="637150">and</span> <span m="637280">1,</span> <span
  m="637910">2,</span> <span m="638750">right?</span></p><p><span
  m="639020">So</span> <span m="639210">that's</span> <span m="641140">my</span>
  <span m="641340">first</span> <span m="642840">example</span> <span
  m="643630">of</span> <span m="643790">a</span> <span m="643850">flow.</span>
  <span m="644780">And</span> <span m="645410">we</span> <span
  m="646730">want</span> <span m="646860">to</span> <span m="646920">make</span>
  <span m="647090">sure</span> <span m="647380">that</span> <span
  m="647930">this</span> <span m="648110">flow</span> <span
  m="648320">makes</span> <span m="648580">sense,</span> <span
  m="649540">OK?</span> <span m="650240">And</span> <span
  m="650630">we're</span> <span m="650690">going</span> <span
  m="650810">to</span> <span m="650870">write</span> <span
  m="651090">this</span> <span m="651260">down</span> <span m="651550">a</span>
  <span m="651580">little</span> <span m="651730">more</span> <span
  m="651880">precisely</span> <span m="652510">in</span> <span
  m="652610">just</span> <span m="652840">a</span> <span
  m="652880">minute,</span> <span m="653740">but</span> <span
  m="654740">I've</span> <span m="655030">sort</span> <span m="655180">of</span>
  <span m="655240">given</span> <span m="655470">you</span> <span
  m="655690">the</span> <span m="656250">intuition</span> <span
  m="656900">already.</span></p><p><span m="657930">I've</span> <span
  m="658300">talked</span> <span m="658600">about</span> <span
  m="658960">it's</span> <span m="659180">OK</span> <span m="659590">to</span>
  <span m="659730">have</span> <span m="660580">a</span> <span
  m="660670">flow</span> <span m="661120">from</span> <span
  m="661460">the</span> <span m="661540">source.</span> <span
  m="663050">It's</span> <span m="664440">the</span> <span
  m="664530">mountain</span> <span m="665310">spewing</span> <span
  m="665810">water,</span> <span m="666700">or</span> <span
  m="667510">that's</span> <span m="667790">the</span> <span
  m="667890">source</span> <span m="668190">of</span> <span
  m="668300">the</span> <span m="668400">river.</span> <span
  m="669180">And</span> <span m="669520">this</span> <span m="669660">is</span>
  <span m="669780">the</span> <span m="669860">sea,</span> <span
  m="670180">for</span> <span m="670300">example.</span> <span
  m="671030">And</span> <span m="671600">the</span> <span
  m="671860">river</span> <span m="672110">flows</span> <span
  m="672400">into</span> <span m="672640">it.</span> <span m="673110">But</span>
  <span m="673290">along</span> <span m="673580">the</span> <span
  m="673650">way,</span> <span m="674770">you</span> <span
  m="675960">really</span> <span m="676200">can't</span> <span
  m="676500">have</span> <span m="676690">accumulation,</span> <span
  m="677990">OK?</span> <span m="680190">Because</span> <span
  m="680670">when</span> <span m="680860">you</span> <span
  m="680930">think</span> <span m="681090">about</span> <span
  m="681300">it</span> <span m="681430">as</span> <span m="682010">a</span>
  <span m="682150">rate--</span> <span m="682710">and</span> <span
  m="682870">so</span> <span m="682980">this</span> <span m="683160">is</span>
  <span m="683280">sort</span> <span m="683460">of</span> <span
  m="683560">gallons</span> <span m="684060">per</span> <span
  m="684220">second--</span> <span m="685540">then</span> <span
  m="686690">maybe</span> <span m="686960">you'll</span> <span
  m="687080">have</span> <span m="687220">a</span> <span
  m="687260">little</span> <span m="687440">bit</span> <span
  m="687530">of</span> <span m="687610">accumulation</span> <span
  m="688250">allowed.</span> <span m="689020">But</span> <span
  m="689900">over</span> <span m="690520">a</span> <span m="690660">huge</span>
  <span m="690950">period</span> <span m="691190">of</span> <span
  m="691270">time,</span> <span m="691790">you</span> <span
  m="692020">can't</span> <span m="692190">have</span> <span
  m="692350">infinite</span> <span m="692710">accumulation.</span> <span
  m="693620">So</span> <span m="694230">that's</span> <span
  m="694430">where</span> <span m="694650">the</span> <span
  m="694900">conservation</span> <span m="695570">law</span> <span
  m="695940">kicks</span> <span m="696240">in,</span> <span
  m="696820">which</span> <span m="696970">says,</span> <span
  m="697760">anything</span> <span m="699090">that</span> <span
  m="699310">goes</span> <span m="699590">into</span> <span m="700070">a</span>
  <span m="700130">node</span> <span m="700540">that</span> <span
  m="700670">is</span> <span m="700790">not</span> <span
  m="701100">marked</span> <span m="701700">s</span> <span m="702000">or</span>
  <span m="702130">t</span> <span m="702770">has</span> <span
  m="703030">to</span> <span m="703140">leave</span> <span m="703390">the</span>
  <span m="703470">node.</span></p><p><span m="704370">So</span> <span
  m="704840">you</span> <span m="704980">look</span> <span m="705140">at</span>
  <span m="705230">this,</span> <span m="706330">and</span> <span
  m="706530">you</span> <span m="706630">go,</span> <span
  m="707480">well,</span> <span m="707630">there's</span> <span
  m="707810">two</span> <span m="707950">things</span> <span
  m="708170">coming</span> <span m="708390">in</span> <span
  m="708540">here.</span> <span m="708960">There's</span> <span
  m="709170">1</span> <span m="709620">and</span> <span m="709850">1,</span>
  <span m="710710">which</span> <span m="711610">adds</span> <span
  m="711850">up</span> <span m="711990">to</span> <span m="712080">2.</span>
  <span m="713060">And</span> <span m="713680">there's</span> <span
  m="713930">two</span> <span m="714080">2</span> <span
  m="714307">leaving.</span> <span m="714990">So</span> <span
  m="715200">we're</span> <span m="715340">good</span> <span
  m="715550">there.</span> <span m="716310">OK?</span> <span
  m="717040">And</span> <span m="717530">then</span> <span
  m="717840">pick</span> <span m="718150">another</span> <span
  m="718410">one.</span> <span m="719150">This</span> <span
  m="719360">one,</span> <span m="719530">for</span> <span
  m="719640">example.</span> <span m="720700">You've</span> <span
  m="720900">got</span> <span m="721330">2</span> <span m="721570">coming</span>
  <span m="721870">in,</span> <span m="722620">and</span> <span
  m="722800">you've</span> <span m="722900">got</span> <span m="723040">1</span>
  <span m="723360">and</span> <span m="723530">1</span> <span
  m="723790">leaving.</span> <span m="724530">We're</span> <span
  m="724720">good</span> <span m="724920">there,</span> <span
  m="725760">right?</span> <span m="726030">For</span> <span
  m="726330">t,</span> <span m="726890">you've</span> <span
  m="727050">got</span> <span m="727210">3</span> <span m="727500">coming</span>
  <span m="727840">in,</span> <span m="729000">2</span> <span
  m="729230">plus</span> <span m="729470">1.</span> <span m="730280">And</span>
  <span m="731390">another</span> <span m="732080">check</span> <span
  m="732670">to</span> <span m="732840">do</span> <span m="733090">is,</span>
  <span m="733760">well,</span> <span m="733810">you've</span> <span
  m="733860">got</span> <span m="734010">2</span> <span m="734180">coming</span>
  <span m="734450">out</span> <span m="734620">of</span> <span
  m="734700">the</span> <span m="734770">source,</span> <span
  m="735730">right?</span></p><p><span m="736310">So</span> <span
  m="737550">hopefully,</span> <span m="737970">that</span> <span
  m="738080">all</span> <span m="738170">will</span> <span
  m="738260">make</span> <span m="738420">sense.</span> <span
  m="739280">And</span> <span m="739690">ask</span> <span
  m="739930">questions</span> <span m="740360">if</span> <span
  m="740690">you're</span> <span m="740890">confused.</span></p><p><span
  m="743830">One</span> <span m="744150">other</span> <span
  m="744320">thing</span> <span m="744550">to</span> <span
  m="745140">look</span> <span m="745390">at,</span> <span
  m="746550">which</span> <span m="746600">is</span> <span
  m="746710">interesting,</span> <span m="747150">is</span> <span
  m="747290">that</span> <span m="747850">you</span> <span
  m="748020">could</span> <span m="748270">have</span> <span
  m="749470">flows</span> <span m="750030">that</span> <span
  m="750710">are</span> <span m="751280">essentially</span> <span
  m="752150">cyclic.</span> <span m="753210">You</span> <span
  m="753370">could</span> <span m="753510">have</span> <span
  m="754250">commodities</span> <span m="755370">that</span> <span
  m="755600">are</span> <span m="755710">flowing</span> <span
  m="756610">in</span> <span m="756770">a</span> <span m="756800">little</span>
  <span m="757060">cycle.</span> <span m="757790">And</span> <span
  m="758090">can</span> <span m="758210">you</span> <span m="758300">see</span>
  <span m="758460">that?</span> <span m="758680">Can</span> <span
  m="758920">anyone</span> <span m="759180">see</span> <span
  m="759350">that</span> <span m="759500">over</span> <span
  m="759620">here?</span> <span m="762536">Yep?</span> <span
  m="765000">Go</span> <span m="765155">ahead.</span></p><p><span
  m="765786">STUDENT: The</span> <span m="766262">bottom-right</span> <span
  m="767690">triangle</span> <span m="768642">[INAUDIBLE].</span></p><p><span
  m="769600">SRINIVAS DEVADAS: Bottom-right</span> <span
  m="770110">triangle?</span> <span m="770480">This</span> <span
  m="770620">thing</span> <span m="770770">over</span> <span
  m="770880">here?</span></p><p><span m="771310">STUDENT:
  Yeah.</span></p><p><span m="771760">SRINIVAS DEVADAS: Like</span> <span
  m="771980">that?</span> <span m="772700">Good.</span> <span
  m="773170">Right?</span> <span m="773420">So</span> <span
  m="773540">you</span> <span m="773660">see</span> <span m="773830">this</span>
  <span m="773990">one</span> <span m="774160">going</span> <span
  m="774380">over</span> <span m="774490">this</span> <span
  m="774670">way,</span> <span m="774920">this</span> <span
  m="775130">way,</span> <span m="775380">and</span> <span
  m="775500">that</span> <span m="775670">way?</span> <span
  m="776380">And</span> <span m="776450">so</span> <span
  m="776590">there's</span> <span m="777060">nothing</span> <span
  m="777420">that's</span> <span m="777580">stopping</span> <span
  m="777960">us</span> <span m="779680">from</span> <span
  m="781270">taking</span> <span m="781640">this</span> <span
  m="784100">and--</span> <span m="785340">I</span> <span m="785480">had</span>
  <span m="785680">1</span> <span m="785950">over</span> <span
  m="786100">here,</span> <span m="786390">so</span> <span m="786510">I'm</span>
  <span m="786590">going</span> <span m="786710">to</span> <span
  m="786770">make</span> <span m="786910">that</span> <span m="787080">0.</span>
  <span m="788130">I</span> <span m="788470">had</span> <span
  m="788620">2</span> <span m="788810">over</span> <span m="788930">here,</span>
  <span m="789160">and</span> <span m="789205">I'm</span> <span
  m="789250">going</span> <span m="789370">to</span> <span
  m="789430">make</span> <span m="789540">that</span> <span m="789690">1.</span>
  <span m="790450">And</span> <span m="790570">I</span> <span
  m="790600">had</span> <span m="790720">2</span> <span m="790860">over</span>
  <span m="791000">here,</span> <span m="791250">and</span> <span
  m="791290">I'm</span> <span m="791330">going</span> <span m="791450">to</span>
  <span m="791510">make</span> <span m="791640">that</span> <span
  m="791780">1.</span></p><p><span m="793370">STUDENT:</span> <span
  m="793790">[INAUDIBLE].</span></p><p><span m="794210">STUDENT:</span> <span
  m="794630">[INAUDIBLE]</span></p><p><span m="796060">SRINIVAS DEVADAS:
  Oh.</span> <span m="796330">What</span> <span m="796630">is</span> <span
  m="796730">it?</span></p><p><span m="797143">STUDENT: It</span> <span
  m="797556">was</span> <span m="797763">1.</span></p><p><span
  m="797970">SRINIVAS DEVADAS: It</span> <span m="798110">was</span> <span
  m="798310">1</span> <span m="798500">before?</span> <span
  m="800250">Oh,</span> <span m="800360">you're</span> <span
  m="800480">right.</span> <span m="800850">It</span> <span
  m="800920">was</span> <span m="801080">1</span> <span
  m="801240">before.</span> <span m="801510">So</span> <span m="801650">I</span>
  <span m="801740">should</span> <span m="801880">make</span> <span
  m="802000">that</span> <span m="802150">0</span> <span m="802390">then.</span>
  <span m="803260">Good.</span></p><p><span m="805450">I</span> <span
  m="805610">wanted</span> <span m="805840">to</span> <span
  m="805910">subtract</span> <span m="806190">1</span> <span
  m="806480">from</span> <span m="806670">what</span> <span m="806800">I</span>
  <span m="806850">had</span> <span m="807030">before,</span> <span
  m="807770">right?</span> <span m="808280">And</span> <span m="808440">I</span>
  <span m="809430">screwed</span> <span m="810000">that</span> <span
  m="810140">one</span> <span m="810340">up,</span> <span m="810840">the</span>
  <span m="811020">simple</span> <span m="811450">thing.</span> <span
  m="811890">All</span> <span m="812010">right?</span> <span
  m="812920">Wow.</span> <span m="815300">No</span> <span
  m="815510">wonder</span> <span m="815800">I</span> <span
  m="815830">didn't</span> <span m="815990">major</span> <span
  m="816240">in</span> <span m="816350">mathematics.</span></p><p><span
  m="817080">[LAUGHTER]</span></p><p><span m="818310">OK.</span> <span
  m="819140">Computer</span> <span m="819510">Science</span> <span
  m="819930">is</span> <span m="820070">this</span> <span
  m="820240">forgiving</span> <span m="820700">field.</span></p><p><span
  m="822650">So</span> <span m="823060">you</span> <span m="823200">can</span>
  <span m="823350">go</span> <span m="824140">0--</span> <span
  m="825920">well,</span> <span m="826210">this</span> <span
  m="826370">is</span> <span m="826460">0.</span> <span m="827300">So</span>
  <span m="827460">now,</span> <span m="827600">let's</span> <span
  m="827780">take</span> <span m="827920">a</span> <span m="827960">look</span>
  <span m="828130">at</span> <span m="828210">what</span> <span
  m="828370">we</span> <span m="828490">have</span> <span m="828710">here</span>
  <span m="829460">and</span> <span m="831180">check</span> <span
  m="831520">that</span> <span m="831740">nothing</span> <span
  m="832110">went</span> <span m="832320">wrong,</span> <span
  m="832860">right?</span> <span m="833320">We</span> <span
  m="833470">want</span> <span m="833590">to</span> <span
  m="833650">check</span> <span m="833850">that</span> <span
  m="833960">nothing</span> <span m="834210">went</span> <span
  m="834390">wrong.</span> <span m="835160">And</span> <span
  m="835480">so</span> <span m="835700">2</span> <span m="835920">coming</span>
  <span m="836200">in,</span> <span m="837400">1</span> <span
  m="837650">going</span> <span m="837900">out,</span> <span m="838230">1</span>
  <span m="838480">going</span> <span m="838730">out.</span> <span
  m="839160">And</span> <span m="839340">nothing</span> <span
  m="839570">coming</span> <span m="839800">in</span> <span
  m="839930">here,</span> <span m="840210">so</span> <span
  m="840340">we're</span> <span m="840480">all</span> <span
  m="840600">good.</span> <span m="841290">And</span> <span m="841480">so</span>
  <span m="841600">on</span> <span m="841700">and</span> <span
  m="841790">so</span> <span m="841910">forth,</span> <span
  m="842710">OK?</span></p><p><span m="843610">So</span> <span
  m="845290">there's</span> <span m="845580">interesting</span> <span
  m="845950">things</span> <span m="846450">happening</span> <span
  m="846940">here</span> <span m="847190">with</span> <span
  m="847330">respect</span> <span m="847740">to</span> <span
  m="849470">the</span> <span m="850220">conservation</span> <span
  m="850930">laws</span> <span m="851910">and</span> <span
  m="852810">having</span> <span m="853250">to</span> <span
  m="854210">obey</span> <span m="854620">them.</span> <span
  m="857170">In</span> <span m="857380">general,</span> <span
  m="858380">you</span> <span m="858540">can</span> <span
  m="858670">imagine</span> <span m="859230">that</span> <span
  m="859790">what</span> <span m="860170">we're</span> <span
  m="860370">interested</span> <span m="860860">in</span> <span
  m="861650">is</span> <span m="861870">simply</span> <span
  m="864550">maximizing</span> <span m="865370">the</span> <span
  m="865440">flow</span> <span m="865780">from</span> <span
  m="866130">the</span> <span m="866190">source,</span> <span
  m="867340">and</span> <span m="867580">getting</span> <span
  m="867890">as</span> <span m="868170">much</span> <span m="868360">flow</span>
  <span m="868650">out</span> <span m="868740">of</span> <span
  m="868810">the</span> <span m="868870">source</span> <span
  m="869230">as</span> <span m="869360">possible,</span> <span
  m="870240">and</span> <span m="870450">pushing</span> <span
  m="870730">it</span> <span m="870840">into</span> <span m="871030">the</span>
  <span m="871120">sink.</span> <span m="872030">OK?</span></p><p><span
  m="872710">Now,</span> <span m="873100">the</span> <span
  m="873260">flow</span> <span m="873630">here</span> <span
  m="874560">into</span> <span m="875260">t,</span> <span m="876030">as</span>
  <span m="876230">you</span> <span m="876310">can</span> <span
  m="876440">see,</span> <span m="877150">is</span> <span m="877730">2</span>
  <span m="877930">plus</span> <span m="878170">1,</span> <span
  m="879130">which</span> <span m="879400">is</span> <span m="879590">3,</span>
  <span m="880650">OK?</span> <span m="881810">Can</span> <span
  m="882030">anyone</span> <span m="884310">take</span> <span
  m="884690">this</span> <span m="884920">particular</span> <span
  m="885260">flow</span> <span m="885500">network</span> <span
  m="886360">and</span> <span m="887120">increase</span> <span
  m="887650">the</span> <span m="887740">flow?</span> <span m="888410">I</span>
  <span m="888490">mean,</span> <span m="888590">it's</span> <span
  m="888690">easy</span> <span m="888900">to</span> <span
  m="888990">decrease</span> <span m="889470">the</span> <span
  m="889550">flow.</span> <span m="890340">You</span> <span
  m="890570">can</span> <span m="890700">make</span> <span
  m="890880">everything</span> <span m="891160">0,</span> <span
  m="891580">and</span> <span m="891720">that'd</span> <span
  m="891860">be</span> <span m="891990">valid,</span> <span
  m="892880">right?</span> <span m="893210">But</span> <span
  m="893900">can</span> <span m="894090">you</span> <span
  m="894280">increase</span> <span m="894780">the</span> <span
  m="894870">flow?</span> <span m="895370">Do</span> <span m="895480">you</span>
  <span m="895550">think</span> <span m="895830">that</span> <span
  m="896070">this</span> <span m="896210">flow</span> <span
  m="896460">network</span> <span m="897530">allows</span> <span
  m="898940">for</span> <span m="899420">a</span> <span m="899530">larger</span>
  <span m="900040">flow</span> <span m="900940">than</span> <span
  m="901920">3,</span> <span m="902610">given</span> <span
  m="902920">that</span> <span m="903290">the</span> <span
  m="903420">capacities</span> <span m="903950">of</span> <span
  m="904090">those</span> <span m="904270">edges</span> <span
  m="904670">are</span> <span m="904790">fixed</span> <span
  m="905360">and</span> <span m="905520">I'm</span> <span m="905590">not</span>
  <span m="905760">going</span> <span m="905880">to</span> <span
  m="905960">change</span> <span m="906260">them?</span></p><p><span
  m="910370">Let's</span> <span m="910410">see.</span> <span m="912820">I</span>
  <span m="912920">think</span> <span m="913050">all</span> <span
  m="913160">of</span> <span m="913240">you</span> <span m="913340">have</span>
  <span m="913470">Frisbees,</span> <span m="913880">right?</span> <span
  m="915060">Yeah.</span> <span m="915890">Yeah,</span> <span
  m="916340">back</span> <span m="916540">there.</span></p><p><span
  m="917360">STUDENT: I</span> <span m="917770">don't</span> <span
  m="917872">think</span> <span m="917975">you</span> <span
  m="918077">can,</span> <span m="918180">because</span> <span
  m="919070">you're</span> <span m="919160">maximizing</span> <span
  m="919740">two</span> <span m="920120">edges,</span> <span
  m="920500">which</span> <span m="921460">would</span> <span
  m="921940">have</span> <span m="922060">to</span> <span m="922180">be</span>
  <span m="922300">increased.</span> <span m="923380">Like,</span> <span
  m="923837">the</span> <span m="924751">bottom</span> <span
  m="924979">one</span> <span m="925208">coming</span> <span
  m="925360">out</span> <span m="925512">of</span> <span m="925665">s</span>
  <span m="926580">would</span> <span m="926586">have</span> <span
  m="926592">to</span> <span m="926598">be</span> <span
  m="926604">increased.</span> <span m="926610">Or</span> <span
  m="927090">the</span> <span m="927570">one</span> <span m="928530">on</span>
  <span m="929010">the</span> <span m="929484">very top</span> <span
  m="929958">would,</span> <span m="930432">too,</span> <span
  m="930906">also</span> <span m="931024">have</span> <span m="931143">to</span>
  <span m="931261">be</span> <span m="931854">increased.</span></p><p><span
  m="933900">SRINIVAS DEVADAS: People</span> <span m="934140">agree</span> <span
  m="934340">with</span> <span m="934440">that?</span> <span
  m="935810">Over</span> <span m="936030">there?</span> <span
  m="936320">Yep?</span></p><p><span m="937080">STUDENT: You can</span> <span
  m="937571">have</span> <span m="937734">a</span> <span m="937898">path</span>
  <span m="938062">going</span> <span m="938184">along</span> <span
  m="938307">the</span> <span m="938430">top</span> <span m="938553">with</span>
  <span m="938675">a</span> <span m="938798">flow</span> <span
  m="938921">of</span> <span m="939044">2,</span> <span m="939535">so</span>
  <span m="939698">that</span> <span m="939862">s</span> <span m="940026">is
  the</span> <span m="941010">one</span> <span m="941280">on</span> <span
  m="941468">the</span> <span m="941656">top</span> <span m="942032">of</span>
  <span m="942221">it</span> <span m="942410">has 2.</span> <span
  m="942660">That,</span> <span m="942907">from</span> <span
  m="942989">that,</span> <span m="943072">to</span> <span m="943155">the</span>
  <span m="943650">right,</span> <span m="943710">has</span> <span
  m="944484">2,</span> <span m="945260">like</span> <span m="945410">it</span>
  <span m="945750">has</span> <span m="946090">now.</span> <span m="946430">From
  that</span> <span m="946890">node,</span> <span m="947043">the</span> <span
  m="947196">t</span> <span m="947350">has 2.</span> <span m="947810">And then,
  along</span> <span m="948270">the bottom,</span> <span m="948730">we</span>
  <span m="948883">have</span> <span m="949036">another</span> <span
  m="949190">path</span> <span m="949420">that</span> <span m="949650">has
  2,</span> <span m="950110">from</span> <span m="950225">s</span> <span
  m="950340">to</span> <span m="950455">the</span> <span m="950570">1</span>
  <span m="951500">[? plot of it. ?]</span> <span m="951972">And</span> <span
  m="952208">then</span> <span m="952444">[INAUDIBLE].</span></p><p><span
  m="953390">SRINIVAS DEVADAS: OK.</span> <span
  m="954080">So--</span></p><p><span m="954477">[LAUGHTER]</span></p><p><span
  m="955670">That</span> <span m="955830">made</span> <span
  m="956020">perfect</span> <span m="956330">sense--</span> <span
  m="958230">to</span> <span m="958360">me.</span> <span
  m="958970">[CHUCKLES]</span> <span m="959690">It</span> <span
  m="959830">did.</span></p><p><span m="961100">So</span> <span
  m="962460">one</span> <span m="962730">of</span> <span m="962810">the</span>
  <span m="962890">crucial</span> <span m="963690">observations</span> <span
  m="964350">that</span> <span m="964470">[? Rajesh ?]</span> <span
  m="964780">made</span> <span m="965020">here--</span> <span
  m="965900">and</span> <span m="966050">let</span> <span m="966150">me</span>
  <span m="966230">just</span> <span m="966420">focus</span> <span
  m="966700">in</span> <span m="966820">on</span> <span m="966960">that--</span>
  <span m="967780">is--</span> <span m="968510">and</span> <span
  m="968830">that's</span> <span m="969020">why</span> <span m="969230">I</span>
  <span m="969270">think</span> <span m="969810">the</span> <span
  m="970000">other</span> <span m="970200">gentleman</span> <span
  m="970960">said</span> <span m="971390">no--</span> <span m="972140">is</span>
  <span m="972400">that</span> <span m="972680">you</span> <span
  m="972840">can</span> <span m="972970">actually</span> <span
  m="973270">decrease</span> <span m="974300">the</span> <span
  m="974490">flow</span> <span m="975370">in</span> <span
  m="975650">particular</span> <span m="976140">edges.</span> <span
  m="977130">And</span> <span m="977190">that's</span> <span
  m="977370">going</span> <span m="977500">to</span> <span
  m="977560">help</span> <span m="977820">you</span> <span
  m="978510">increase</span> <span m="979070">the</span> <span
  m="979160">overall</span> <span m="979630">flow,</span> <span
  m="980500">right?</span> <span m="980820">And</span> <span
  m="980980">that's</span> <span m="981210">why</span> <span
  m="981490">this</span> <span m="981720">problem</span> <span
  m="982260">is</span> <span m="982360">challenging.</span> <span
  m="982970">That's</span> <span m="983160">why</span> <span
  m="983290">we</span> <span m="983390">need</span> <span m="983560">so</span>
  <span m="983720">much</span> <span m="983890">of</span> <span
  m="983980">a</span> <span m="984030">setup,</span> <span m="984940">all</span>
  <span m="985040">right?</span></p><p><span m="985550">So</span> <span
  m="986040">one</span> <span m="986320">thing</span> <span
  m="986500">that</span> <span m="986630">I</span> <span m="986690">could</span>
  <span m="986930">do</span> <span m="987840">is</span> <span
  m="989070">I</span> <span m="989230">could</span> <span
  m="989420">essentially</span> <span m="989860">say,</span> <span
  m="990450">I'm</span> <span m="990550">going</span> <span m="990670">to</span>
  <span m="990740">take</span> <span m="990960">this</span> <span
  m="991790">and</span> <span m="992010">make</span> <span
  m="992774">this</span> <span m="993630">0.</span> <span m="995660">So</span>
  <span m="996060">when</span> <span m="996230">I</span> <span
  m="996300">do</span> <span m="996450">that,</span> <span
  m="997570">essentially</span> <span m="998060">what</span> <span
  m="998200">I</span> <span m="998280">have</span> <span m="998590">is</span>
  <span m="998910">I</span> <span m="999610">get</span> <span
  m="999860">to</span> <span m="1002330">push</span> <span
  m="1002640">more</span> <span m="1002880">flow</span> <span
  m="1004060">out</span> <span m="1004310">from</span> <span
  m="1004520">here,</span> <span m="1005590">right?</span> <span
  m="1006200">So</span> <span m="1006510">I</span> <span m="1006600">get</span>
  <span m="1006740">to</span> <span m="1006830">push</span> <span
  m="1007030">more</span> <span m="1007220">flow.</span> <span
  m="1008850">I</span> <span m="1008970">can</span> <span
  m="1009090">turn</span> <span m="1009300">this</span> <span
  m="1009480">into</span> <span m="1009680">a</span> <span m="1009750">2.</span>
  <span m="1011160">And</span> <span m="1011490">I</span> <span
  m="1011570">can</span> <span m="1011690">turn</span> <span
  m="1011940">this</span> <span m="1012510">into</span> <span
  m="1012760">a</span> <span m="1012820">2,</span> <span
  m="1013640">right?</span> <span m="1014370">Am</span> <span
  m="1014540">I</span> <span m="1015070">done?</span></p><p><span
  m="1015590">STUDENT: No.</span></p><p><span m="1016460">SRINIVAS DEVADAS:
  Not</span> <span m="1016750">quite.</span> <span m="1017190">I</span> <span
  m="1017263">mean,</span> <span m="1017336">I've</span> <span
  m="1017410">got</span> <span m="1017540">one</span> <span
  m="1017720">little</span> <span m="1017920">bug</span> <span
  m="1018200">here,</span> <span m="1018400">but</span> <span
  m="1018520">I</span> <span m="1018560">can</span> <span m="1018690">fix</span>
  <span m="1018930">that,</span> <span m="1019150">right?</span> <span
  m="1020310">I've</span> <span m="1020620">got</span> <span
  m="1020760">one</span> <span m="1020910">little</span> <span
  m="1021100">bug</span> <span m="1021500">here</span> <span
  m="1021601">which</span> <span m="1021703">says,</span> <span
  m="1022400">I've</span> <span m="1022670">got</span> <span
  m="1022850">2</span> <span m="1023040">coming</span> <span
  m="1023290">out</span> <span m="1023470">here.</span> <span
  m="1023810">I</span> <span m="1023890">made</span> <span
  m="1024130">this</span> <span m="1024260">0,</span> <span
  m="1024650">so</span> <span m="1024819">I</span> <span m="1024869">have</span>
  <span m="1025010">to</span> <span m="1025099">push</span> <span
  m="1025270">something</span> <span m="1025619">more.</span> <span
  m="1026230">But</span> <span m="1026400">hey,</span> <span
  m="1026680">I'm</span> <span m="1026819">lucky.</span> <span
  m="1027599">I've</span> <span m="1027730">got</span> <span
  m="1027869">a</span> <span m="1027910">s</span> <span m="1028170">here,</span>
  <span m="1028450">which</span> <span m="1028599">is</span> <span
  m="1028710">giving</span> <span m="1028960">me</span> <span
  m="1029119">as</span> <span m="1029339">much</span> <span
  m="1029510">as</span> <span m="1029640">I</span> <span
  m="1029710">want,</span> <span m="1030730">correct?</span> <span
  m="1031410">So</span> <span m="1031599">I</span> <span m="1031650">can</span>
  <span m="1031770">just</span> <span m="1031920">make</span> <span
  m="1032069">this</span> <span m="1032230">a 2.</span> <span
  m="1035349">And</span> <span m="1035589">so</span> <span
  m="1035700">now</span> <span m="1035880">we</span> <span
  m="1035970">get</span> <span m="1036099">a</span> <span
  m="1036140">flow</span> <span m="1036510">of</span> <span
  m="1037140">4,</span> <span m="1037859">right?</span></p><p><span
  m="1038849">You</span> <span m="1038980">both</span> <span
  m="1039170">get</span> <span m="1039339">Frisbees.</span> <span
  m="1040770">Shall</span> <span m="1040950">we</span> <span
  m="1041040">do</span> <span m="1041150">blue</span> <span
  m="1041380">and</span> <span m="1041490">purple?</span> <span
  m="1043420">Here</span> <span m="1043520">you</span> <span
  m="1043579">go.</span> <span m="1043880">Could</span> <span
  m="1043950">you</span> <span m="1044020">stand</span> <span
  m="1044270">up?</span> <span m="1047730">Oh,</span> <span
  m="1047960">OK.</span> <span m="1048240">Over</span> <span
  m="1048420">there.</span></p><p><span m="1052150">So</span> <span
  m="1054080">that</span> <span m="1054270">actually</span> <span
  m="1054540">kind</span> <span m="1054730">of</span> <span
  m="1054790">summarizes,</span> <span m="1055600">at</span> <span
  m="1055720">some</span> <span m="1055930">level,</span> <span
  m="1057310">our</span> <span m="1057500">task</span> <span
  m="1057910">ahead,</span> <span m="1058760">right?</span> <span
  m="1059070">So</span> <span m="1059400">we</span> <span
  m="1059520">have</span> <span m="1059740">to</span> <span
  m="1059840">find</span> <span m="1061340">ways</span> <span
  m="1062040">of</span> <span m="1062750">increasing</span> <span
  m="1063460">the</span> <span m="1063540">flow.</span> <span
  m="1064550">And</span> <span m="1064840">sometimes,</span> <span
  m="1065600">we</span> <span m="1065700">have</span> <span
  m="1065840">to</span> <span m="1065940">take</span> <span m="1066120">a</span>
  <span m="1066160">step</span> <span m="1066450">backwards</span> <span
  m="1067590">in</span> <span m="1067760">the</span> <span
  m="1067840">sense</span> <span m="1068190">that</span> <span
  m="1068480">we</span> <span m="1068620">decrease</span> <span
  m="1069100">the</span> <span m="1069190">flow</span> <span
  m="1069490">on</span> <span m="1069560">a</span> <span
  m="1069620">particular</span> <span m="1070080">edge,</span> <span
  m="1071010">right?</span></p><p><span m="1071260">So</span> <span
  m="1071360">it's</span> <span m="1071490">not</span> <span
  m="1071730">this</span> <span m="1071860">monotonic</span> <span
  m="1073110">increase</span> <span m="1074210">that</span> <span
  m="1074940">Dijkstra</span> <span m="1075560">would</span> <span
  m="1075700">do</span> <span m="1076370">or</span> <span m="1076480">a</span>
  <span m="1076650">greedy</span> <span m="1076820">algorithm,</span> <span
  m="1077460">like</span> <span m="1077680">MST</span> <span
  m="1078140">that</span> <span m="1078290">Eric</span> <span
  m="1078520">talked</span> <span m="1078750">about.</span> <span
  m="1079500">There's</span> <span m="1079860">going</span> <span
  m="1079980">to</span> <span m="1080040">be</span> <span
  m="1080110">something</span> <span m="1080380">a</span> <span
  m="1080420">little</span> <span m="1080570">more</span> <span
  m="1080730">interesting</span> <span m="1081200">here.</span> <span
  m="1082210">We</span> <span m="1083060">eventually</span> <span
  m="1083530">are</span> <span m="1083600">going</span> <span
  m="1083780">to</span> <span m="1083870">end</span> <span m="1084110">up</span>
  <span m="1084410">doing</span> <span m="1084730">things</span> <span
  m="1086401">in</span> <span m="1086780">a</span> <span
  m="1086980">monotonic</span> <span m="1087340">way,</span> <span
  m="1088240">in</span> <span m="1088760">terms</span> <span
  m="1089140">of</span> <span m="1089720">the</span> <span
  m="1089850">overall</span> <span m="1090400">flow.</span></p><p><span
  m="1090960">So</span> <span m="1091140">the</span> <span
  m="1091220">max</span> <span m="1091670">flow</span> <span
  m="1092330">that</span> <span m="1092570">we're</span> <span
  m="1092700">trying</span> <span m="1092900">to</span> <span
  m="1092970">get</span> <span m="1093190">at</span> <span m="1094080">is</span>
  <span m="1094280">going</span> <span m="1094440">to</span> <span
  m="1094510">start</span> <span m="1094840">with</span> <span
  m="1094940">the</span> <span m="1095000">current</span> <span
  m="1095350">flow.</span> <span m="1096030">And</span> <span
  m="1096170">we're</span> <span m="1096260">going</span> <span
  m="1096460">to</span> <span m="1096830">improve</span> <span
  m="1097330">the</span> <span m="1097410">current</span> <span
  m="1097770">flow</span> <span m="1098540">constantly.</span> <span
  m="1099850">But</span> <span m="1100130">that</span> <span
  m="1100250">doesn't</span> <span m="1100520">mean</span> <span
  m="1101210">that</span> <span m="1101560">the</span> <span
  m="1102720">edges</span> <span m="1103750">are</span> <span
  m="1103950">going</span> <span m="1104220">to</span> <span
  m="1104330">look</span> <span m="1104530">monotonic</span> <span
  m="1105640">in</span> <span m="1105830">terms</span> <span
  m="1106210">of</span> <span m="1106950">the</span> <span
  m="1107090">flows</span> <span m="1107550">on</span> <span
  m="1107870">a</span> <span m="1107940">particular</span> <span
  m="1108350">edge</span> <span m="1109070">in</span> <span
  m="1109230">relation</span> <span m="1109610">to</span> <span
  m="1109680">the</span> <span m="1109750">capacity.</span> <span
  m="1110360">You'll</span> <span m="1110530">never</span> <span
  m="1110710">exceed</span> <span m="1111010">the</span> <span
  m="1111080">capacity.</span></p><p><span m="1112030">But</span> <span
  m="1112080">as</span> <span m="1112180">you</span> <span
  m="1112280">saw</span> <span m="1112520">in</span> <span
  m="1112610">this</span> <span m="1112830">little</span> <span
  m="1113080">example</span> <span m="1113530">already,</span> <span
  m="1114540">we</span> <span m="1114720">increase</span> <span
  m="1115110">from</span> <span m="1115270">3</span> <span m="1115470">to</span>
  <span m="1115560">4,</span> <span m="1116390">by</span> <span
  m="1116560">taking</span> <span m="1116870">that</span> <span
  m="1117090">edge</span> <span m="1117530">that</span> <span
  m="1117640">was</span> <span m="1117800">vertical</span> <span
  m="1118290">up</span> <span m="1118440">there,</span> <span
  m="1118700">which</span> <span m="1118810">says</span> <span
  m="1119020">0,</span> <span m="1119970">colon,</span> <span
  m="1120810">3,</span> <span m="1121100">and</span> <span
  m="1121220">that</span> <span m="1121330">was</span> <span
  m="1121470">1,</span> <span m="1122000">and</span> <span m="1122450">we</span>
  <span m="1122590">shrank</span> <span m="1123020">the</span> <span
  m="1123370">flow</span> <span m="1123630">on</span> <span
  m="1123770">it.</span> <span m="1124310">And</span> <span
  m="1124450">so</span> <span m="1124570">how</span> <span
  m="1124790">are</span> <span m="1124840">we</span> <span
  m="1124940">going</span> <span m="1125080">to</span> <span
  m="1125160">discover</span> <span m="1125710">these</span> <span
  m="1125920">paths,</span> <span m="1126850">especially</span> <span
  m="1127280">if</span> <span m="1127340">we</span> <span
  m="1127440">have</span> <span m="1127640">a</span> <span
  m="1127840">5,000-node</span> <span m="1128750">network</span> <span
  m="1129640">and--</span> <span m="1130510">I don't</span> <span
  m="1130810">know--</span> <span m="1131120">10,000</span> <span
  m="1131600">edges?</span> <span m="1132390">And</span> <span
  m="1132530">so</span> <span m="1132630">that's</span> <span
  m="1133080">essentially</span> <span m="1133610">what</span> <span
  m="1134290">we</span> <span m="1134380">have</span> <span
  m="1134510">to</span> <span m="1134600">do</span> <span m="1134750">for</span>
  <span m="1135300">the</span> <span m="1135450">rest</span> <span
  m="1135640">of</span> <span m="1135720">this</span> <span
  m="1135840">lecture.</span> <span m="1136870">Any</span> <span
  m="1137000">questions</span> <span m="1137350">so far?</span></p><p><span
  m="1140180">OK.</span> <span m="1141140">So</span> <span
  m="1142550">we've</span> <span m="1142870">done</span> <span
  m="1143140">flow</span> <span m="1143340">networks.</span> <span
  m="1144090">I</span> <span m="1144190">kind</span> <span m="1144480">of</span>
  <span m="1144550">defined</span> <span m="1144980">what</span> <span
  m="1145140">the</span> <span m="1145200">max</span> <span
  m="1145480">flow</span> <span m="1145650">problem</span> <span
  m="1146100">is.</span> <span m="1148160">And</span> <span
  m="1148270">let</span> <span m="1148380">me</span> <span
  m="1148440">just</span> <span m="1148610">write</span> <span
  m="1148810">that</span> <span m="1148960">out</span> <span
  m="1151390">more</span> <span m="1151550">precisely.</span> <span
  m="1155470">Given</span> <span m="1158750">a</span> <span
  m="1158910">flow</span> <span m="1159170">network,</span> <span
  m="1163200">G,</span> <span m="1165440">find</span> <span
  m="1165950">the</span> <span m="1165990">flow</span> <span
  m="1171400">with</span> <span m="1171620">maximum</span> <span
  m="1172120">value</span> <span m="1177002">on</span> <span
  m="1177498">G.</span> <span m="1178990">And</span> <span
  m="1179460">for</span> <span m="1179650">that,</span> <span
  m="1180730">the</span> <span m="1180870">max</span> <span
  m="1181220">flow</span> <span m="1185600">is</span> <span
  m="1185820">4,</span> <span m="1186570">right?</span></p><p><span
  m="1186840">So</span> <span m="1186940">that's</span> <span
  m="1187130">another</span> <span m="1187340">thing</span> <span
  m="1187650">we</span> <span m="1187820">haven't</span> <span
  m="1188110">actually</span> <span m="1188560">done,</span> <span
  m="1189330">which</span> <span m="1189620">is</span> <span
  m="1189760">obviously</span> <span m="1190070">important</span> <span
  m="1190460">for</span> <span m="1190590">us</span> <span m="1190730">to</span>
  <span m="1190840">do,</span> <span m="1191560">which</span> <span
  m="1191820">is</span> <span m="1192330">we</span> <span
  m="1192460">have</span> <span m="1192600">to</span> <span
  m="1192690">show</span> <span m="1193110">that</span> <span
  m="1193270">the</span> <span m="1194100">4,</span> <span m="1195320">in</span>
  <span m="1195480">this</span> <span m="1195650">case,</span> <span
  m="1195940">is</span> <span m="1196170">the</span> <span
  m="1196250">max</span> <span m="1196540">flow,</span> <span
  m="1197290">right?</span> <span m="1197690">So</span> <span
  m="1198670">now,</span> <span m="1199010">of</span> <span
  m="1199150">course,</span> <span m="1199185">I've</span> <span
  m="1199220">given</span> <span m="1199440">that</span> <span
  m="1199580">away.</span> <span m="1200410">And</span> <span
  m="1200830">so</span> <span m="1201080">I'm</span> <span
  m="1201160">not</span> <span m="1201250">going</span> <span
  m="1201370">to</span> <span m="1201430">ask</span> <span
  m="1201630">you</span> <span m="1201940">can</span> <span
  m="1202110">you</span> <span m="1202200">push</span> <span
  m="1202470">this</span> <span m="1202660">over</span> <span
  m="1202870">to</span> <span m="1202950">5.</span> <span m="1204120">But</span>
  <span m="1204290">you</span> <span m="1204370">might</span> <span
  m="1204630">think</span> <span m="1204910">that</span> <span
  m="1205080">5</span> <span m="1205500">is</span> <span m="1205610">a</span>
  <span m="1205670">possibility,</span> <span m="1206700">simply</span> <span
  m="1207070">because</span> <span m="1207350">the</span> <span
  m="1207430">capacities</span> <span m="1208090">of</span> <span
  m="1208180">the</span> <span m="1208250">edges</span> <span
  m="1208640">that</span> <span m="1208770">are</span> <span
  m="1208820">coming</span> <span m="1209110">out</span> <span
  m="1209370">of</span> <span m="1209490">the</span> <span
  m="1209570">source</span> <span m="1210530">are</span> <span m="1211020">3
  plus</span> <span m="1211450">2,</span> <span m="1211680">which</span> <span
  m="1211860">is</span> <span m="1211970">5,</span> <span
  m="1212840">right?</span></p><p><span m="1213130">So</span> <span
  m="1213420">it's</span> <span m="1213680">certainly</span> <span
  m="1214200">possible</span> <span m="1215460">that</span> <span
  m="1216790">you</span> <span m="1216940">could</span> <span
  m="1217920">push</span> <span m="1218300">at</span> <span
  m="1218460">least,</span> <span m="1218720">if</span> <span
  m="1218800">you</span> <span m="1218890">only</span> <span
  m="1219090">look</span> <span m="1219240">at</span> <span
  m="1219340">those</span> <span m="1219550">two</span> <span
  m="1219720">edges,</span> <span m="1220380">that</span> <span
  m="1220530">you</span> <span m="1220600">could</span> <span
  m="1220750">push</span> <span m="1220990">5</span> <span
  m="1221310">units</span> <span m="1221840">from</span> <span
  m="1222130">the</span> <span m="1222210">source.</span> <span
  m="1223200">But</span> <span m="1223330">in</span> <span
  m="1223430">this</span> <span m="1223620">case,</span> <span
  m="1223990">in</span> <span m="1224100">this</span> <span
  m="1224280">example,</span> <span m="1225950">if</span> <span
  m="1226220">you</span> <span m="1226580">obey</span> <span
  m="1227110">the</span> <span m="1227220">laws</span> <span
  m="1227480">of</span> <span m="1227580">conservation,</span> <span
  m="1228910">you</span> <span m="1229440">cannot</span> <span
  m="1230820">obey</span> <span m="1231300">those</span> <span
  m="1231510">laws</span> <span m="1232190">and</span> <span
  m="1232560">get</span> <span m="1232780">5</span> <span
  m="1233110">units</span> <span m="1233830">from</span> <span
  m="1234100">the</span> <span m="1234190">source</span> <span
  m="1234850">to</span> <span m="1234980">the</span> <span
  m="1235070">sink,</span> <span m="1235410">t.</span> <span
  m="1236350">But</span> <span m="1236490">we</span> <span
  m="1236570">have</span> <span m="1236670">to</span> <span
  m="1236740">prove</span> <span m="1236980">that.</span> <span
  m="1237310">And</span> <span m="1237415">we</span> <span
  m="1237520">have</span> <span m="1237770">an</span> <span
  m="1237840">algorithm</span> <span m="1238340">that</span> <span
  m="1238540">says</span> <span m="1239180">this</span> <span
  m="1239350">is</span> <span m="1239430">the</span> <span
  m="1239510">best</span> <span m="1239930">that</span> <span
  m="1240070">you</span> <span m="1240140">can</span> <span
  m="1240270">possibly</span> <span m="1240670">do.</span> <span
  m="1241370">And</span> <span m="1241630">the</span> <span
  m="1241700">algorithm</span> <span m="1242090">terminates</span> <span
  m="1242600">when</span> <span m="1242740">that</span> <span
  m="1242880">happens.</span> <span m="1243680">And</span> <span
  m="1243940">that's</span> <span m="1244180">our</span> <span
  m="1244300">Ford-Fulkerson</span> <span m="1245080">algorithm,</span> <span
  m="1246110">right?</span></p><p><span m="1249010">Good.</span> <span
  m="1250290">So</span> <span m="1250470">that's</span> <span
  m="1252030">what</span> <span m="1252250">we</span> <span
  m="1252350">have</span> <span m="1252580">so</span> <span
  m="1252770">far.</span> <span m="1254430">I</span> <span
  m="1254560">want</span> <span m="1254730">to</span> <span
  m="1254800">talk</span> <span m="1255030">about</span> <span
  m="1255650">flow</span> <span m="1255940">network</span> <span
  m="1256320">assumptions.</span> <span m="1257280">And</span> <span
  m="1257410">I</span> <span m="1257480">can</span> <span m="1257600">do</span>
  <span m="1257720">that</span> <span m="1257880">over</span> <span
  m="1258020">here.</span> <span m="1260700">This</span> <span
  m="1260930">is</span> <span m="1261020">going</span> <span
  m="1261140">to</span> <span m="1261200">make</span> <span
  m="1261370">our</span> <span m="1261480">life</span> <span
  m="1261730">easier.</span></p><p><span m="1265080">One</span> <span
  m="1265460">of</span> <span m="1265520">the</span> <span
  m="1265600">things</span> <span m="1265830">that's</span> <span
  m="1266330">a</span> <span m="1266430">little</span> <span
  m="1266690">bit</span> <span m="1268200">confusing</span> <span
  m="1268730">sometimes</span> <span m="1270100">is</span> <span
  m="1270590">the</span> <span m="1270730">circular</span> <span
  m="1271310">flow</span> <span m="1272360">and</span> <span
  m="1272540">the</span> <span m="1272610">fact</span> <span
  m="1273000">that</span> <span m="1273910">we're</span> <span
  m="1274090">going</span> <span m="1274370">to</span> <span
  m="1275000">potentially</span> <span m="1275630">have</span> <span
  m="1278940">flows</span> <span m="1279500">that</span> <span
  m="1281310">correspond</span> <span m="1281910">to</span> <span
  m="1283490">edges</span> <span m="1283880">coming</span> <span
  m="1284180">in</span> <span m="1284410">and</span> <span
  m="1284560">edges</span> <span m="1284860">going</span> <span
  m="1285150">out.</span> <span m="1285940">So</span> <span
  m="1286180">for</span> <span m="1286300">example,</span> <span
  m="1287330">if</span> <span m="1287460">I</span> <span m="1287620">had</span>
  <span m="1288970">something</span> <span m="1289410">like</span> <span
  m="1291260">s and u,</span> <span m="1291940">for</span> <span
  m="1292090">example--</span> <span m="1292560">and</span> <span
  m="1292740">s</span> <span m="1292950">could</span> <span
  m="1293100">be</span> <span m="1293270">the</span> <span
  m="1293850">source</span> <span m="1294150">in</span> <span
  m="1294250">this</span> <span m="1294390">case,</span> <span
  m="1294730">or</span> <span m="1294830">it</span> <span
  m="1294930">could</span> <span m="1295030">be</span> <span
  m="1295130">another</span> <span m="1295780">node--</span> <span
  m="1297280">suppose</span> <span m="1297690">I</span> <span
  m="1297820">had</span> <span m="1298580">a</span> <span
  m="1298680">little</span> <span m="1299080">subnetwork</span> <span
  m="1300640">that</span> <span m="1300840">looks</span> <span
  m="1301040">like</span> <span m="1301250">this.</span> <span
  m="1302230">And</span> <span m="1302410">I'm</span> <span
  m="1302510">just</span> <span m="1302690">giving</span> <span
  m="1302880">you</span> <span m="1302980">what</span> <span
  m="1303110">the</span> <span m="1303180">capacities</span> <span
  m="1303770">are.</span></p><p><span m="1305830">This</span> <span
  m="1306070">is</span> <span m="1307730">a</span> <span m="1307830">bit</span>
  <span m="1308090">strange</span> <span m="1308860">in</span> <span
  m="1309010">the</span> <span m="1309090">sense</span> <span
  m="1309460">that</span> <span m="1310540">you</span> <span
  m="1310880">could</span> <span m="1311180">have</span> <span
  m="1311470">a</span> <span m="1311520">situation</span> <span
  m="1312230">where</span> <span m="1313440">you</span> <span
  m="1314210">essentially</span> <span m="1314790">have</span> <span
  m="1315660">zero</span> <span m="1316220">flow,</span> <span
  m="1316930">really,</span> <span m="1317990">because</span> <span
  m="1318330">you</span> <span m="1318440">have</span> <span
  m="1318800">one</span> <span m="1319150">unit</span> <span
  m="1319440">coming</span> <span m="1319700">in</span> <span
  m="1319860">here</span> <span m="1320310">and</span> <span
  m="1320500">one</span> <span m="1320700">unit</span> <span
  m="1320950">leaving.</span> <span m="1321950">All</span> <span
  m="1322050">right?</span> <span m="1322480">And</span> <span
  m="1322680">you</span> <span m="1322750">can</span> <span
  m="1322850">think</span> <span m="1322990">of</span> <span
  m="1323070">this--</span> <span m="1323280">let's</span> <span
  m="1323440">just</span> <span m="1323530">call</span> <span
  m="1323720">this</span> <span m="1323800">s1,</span> <span
  m="1326510">to</span> <span m="1326640">make</span> <span
  m="1326810">it</span> <span m="1326890">clear</span> <span
  m="1327160">that</span> <span m="1327330">it</span> <span
  m="1327420">doesn't</span> <span m="1327720">have</span> <span
  m="1328100">to</span> <span m="1328210">be</span> <span m="1329000">the</span>
  <span m="1329150">source,</span> <span m="1329800">right?</span> <span
  m="1330480">And</span> <span m="1330680">so</span> <span
  m="1330880">you</span> <span m="1330960">could</span> <span
  m="1331070">have</span> <span m="1331220">the</span> <span
  m="1331290">circularity</span> <span m="1331930">that</span> <span
  m="1332080">you</span> <span m="1332170">saw</span> <span
  m="1332440">over</span> <span m="1332630">there.</span> <span
  m="1333390">And</span> <span m="1333560">now</span> <span
  m="1333780">you're</span> <span m="1333910">talking</span> <span
  m="1334190">about,</span> <span m="1334920">well,</span> <span
  m="1336680">I</span> <span m="1336730">might</span> <span
  m="1336910">have</span> <span m="1337190">1,</span> <span
  m="1337550">colon,</span> <span m="1337880">1</span> <span
  m="1338170">here,</span> <span m="1338690">and</span> <span
  m="1338850">1,</span> <span m="1339070">colon,</span> <span
  m="1339390">2</span> <span m="1339620">here,</span> <span
  m="1340430">which</span> <span m="1340590">is</span> <span
  m="1340720">fine</span> <span m="1341180">for</span> <span
  m="1341350">this</span> <span m="1341480">subnetwork.</span></p><p><span
  m="1342480">But</span> <span m="1342610">if</span> <span m="1342700">I</span>
  <span m="1342810">have</span> <span m="1342980">stuff</span> <span
  m="1343240">going</span> <span m="1343530">out,</span> <span
  m="1344500">what</span> <span m="1344830">happens</span> <span
  m="1345910">with</span> <span m="1346020">that?</span> <span
  m="1346320">Well</span> <span m="1346480">that's</span> <span
  m="1346670">got</span> <span m="1346820">to</span> <span m="1346880">be</span>
  <span m="1346990">a</span> <span m="1347050">0.</span> <span
  m="1347990">I</span> <span m="1348250">could</span> <span
  m="1348360">have</span> <span m="1348470">a</span> <span m="1348520">1</span>
  <span m="1348890">and</span> <span m="1349000">a</span> <span
  m="1349040">2.</span> <span m="1350360">And</span> <span m="1351230">if</span>
  <span m="1351950">I</span> <span m="1351990">have</span> <span
  m="1352090">a</span> <span m="1352140">2</span> <span m="1352390">here,</span>
  <span m="1353660">then--</span> <span m="1354780">if</span> <span
  m="1354940">I</span> <span m="1354995">had</span> <span m="1355050">a</span>
  <span m="1355215">1</span> <span m="1355380">and</span> <span
  m="1355580">2</span> <span m="1355780">here,</span> <span
  m="1356530">then</span> <span m="1356710">that</span> <span
  m="1356820">doesn't</span> <span m="1357010">work,</span> <span
  m="1357790">because</span> <span m="1358670">maybe</span> <span
  m="1359330">I</span> <span m="1359460">need</span> <span
  m="1360160">something</span> <span m="1360510">else</span> <span
  m="1360710">coming</span> <span m="1360950">in.</span> <span
  m="1361670">So</span> <span m="1361890">you</span> <span
  m="1362000">can</span> <span m="1362120">see</span> <span
  m="1362390">that,</span> <span m="1362790">pretty</span> <span
  m="1363150">quickly,</span> <span m="1364080">it</span> <span
  m="1364240">gets</span> <span m="1364470">kind</span> <span
  m="1364630">of</span> <span m="1364690">confusing,</span> <span
  m="1365650">if</span> <span m="1365850">we</span> <span m="1365990">end</span>
  <span m="1366190">up</span> <span m="1366470">having</span> <span
  m="1367440">these</span> <span m="1369500">cycles</span> <span
  m="1370260">that</span> <span m="1372300">are</span> <span
  m="1373300">such</span> <span m="1373910">simple</span> <span
  m="1374340">cycles,</span> <span m="1374930">especially</span> <span
  m="1375520">the</span> <span m="1375600">ones</span> <span
  m="1376270">where</span> <span m="1376460">you</span> <span
  m="1376560">have</span> <span m="1376700">Su</span> <span
  m="1377320">and</span> <span m="1377480">Us,</span> <span
  m="1378150">OK?</span> <span m="1379000">And</span> <span
  m="1379190">so</span> <span m="1379330">we're</span> <span
  m="1379440">going</span> <span m="1379570">to</span> <span
  m="1379640">disallow</span> <span m="1380900">cycles</span> <span
  m="1382000">of</span> <span m="1382200">two</span> <span
  m="1382370">kinds,</span> <span m="1383270">right?</span></p><p><span
  m="1383760">The</span> <span m="1383890">first</span> <span
  m="1384180">cycle</span> <span m="1384520">we're</span> <span
  m="1384620">going</span> <span m="1384740">to</span> <span
  m="1384800">disallow</span> <span m="1385320">is</span> <span
  m="1385730">this</span> <span m="1386030">simple</span> <span
  m="1386400">one</span> <span m="1387070">where</span> <span
  m="1387260">we</span> <span m="1387350">say,</span> <span
  m="1387620">if</span> <span m="1387730">I</span> <span m="1387840">have</span>
  <span m="1388580">a,</span> <span m="1389370">then</span> <span
  m="1389930">no</span> <span m="1390370">self-loop</span> <span
  m="1390980">edges</span> <span m="1391520">allowed.</span> <span
  m="1400570">So</span> <span m="1401070">that</span> <span
  m="1401390">would</span> <span m="1401650">involve</span> <span
  m="1402120">accumulation</span> <span m="1403110">at</span> <span
  m="1403270">a</span> <span m="1403310">particular</span> <span
  m="1403670">node.</span> <span m="1404320">And</span> <span
  m="1404480">it's</span> <span m="1404540">going</span> <span
  m="1404660">to</span> <span m="1404720">make</span> <span
  m="1404850">things</span> <span m="1405050">really</span> <span
  m="1405260">confusing.</span> <span m="1406160">And</span> <span
  m="1406640"><i>CLRS</i></span> <span m="1407820">disallows</span> <span
  m="1408380">that.</span> <span m="1408680">And</span> <span
  m="1408890">most</span> <span m="1409350">flow</span> <span
  m="1409600">network</span> <span m="1410330">algorithms</span> <span
  m="1410930">assume</span> <span m="1411380">that</span> <span
  m="1411610">you're</span> <span m="1411760">just</span> <span
  m="1411930">going</span> <span m="1412090">to</span> <span
  m="1412680">discard</span> <span m="1413290">these</span> <span
  m="1413450">cycles.</span></p><p><span m="1415000">This</span> <span
  m="1415340">particular</span> <span m="1415680">transformation</span> <span
  m="1417320">that</span> <span m="1417800">I'm</span> <span
  m="1418010">going</span> <span m="1418130">to</span> <span
  m="1418190">describe</span> <span m="1418570">here</span> <span
  m="1419580">is</span> <span m="1419740">something</span> <span
  m="1420120">that</span> <span m="1420990">is</span> <span
  m="1421180">going</span> <span m="1421360">to</span> <span
  m="1421440">be</span> <span m="1422550">forced</span> <span
  m="1423370">on</span> <span m="1423600">you.</span> <span
  m="1424060">And</span> <span m="1424490">this</span> <span
  m="1424700">is</span> <span m="1425140">for</span> <span
  m="1426480">your</span> <span m="1426670">benefit</span> <span
  m="1427690">in</span> <span m="1428790">over</span> <span m="1429060">6</span>
  <span m="1429700">lectures</span> <span m="1430070">and</span> <span
  m="1430180">sections.</span> <span m="1431430">But</span> <span
  m="1431890">it's</span> <span m="1432130">not</span> <span
  m="1432370">actually</span> <span m="1434200">something</span> <span
  m="1434600">that</span> <span m="1434780"><i>CLRS</i></span> <span
  m="1435290">follows.</span> <span m="1436270">And</span> <span
  m="1436900">it's</span> <span m="1437070">going</span> <span
  m="1437190">to</span> <span m="1437290">make</span> <span
  m="1437480">things</span> <span m="1437640">simpler,</span> <span
  m="1437990">though.</span></p><p><span m="1438640">And</span> <span
  m="1439360">what</span> <span m="1439640">we're</span> <span
  m="1439740">going</span> <span m="1439860">to</span> <span
  m="1439930">do</span> <span m="1440110">is</span> <span
  m="1440280">we're</span> <span m="1440410">going</span> <span
  m="1440540">to</span> <span m="1440630">take</span> <span
  m="1443100">any</span> <span m="1444050">pair</span> <span
  m="1444590">of</span> <span m="1444800">vertices</span> <span
  m="1446020">that</span> <span m="1446210">has</span> <span
  m="1446820">this</span> <span m="1447160">characteristic,</span> <span
  m="1447900">where</span> <span m="1448100">you</span> <span
  m="1448230">have</span> <span m="1448910">s1,</span> <span
  m="1449510">u,</span> <span m="1449850">and</span> <span m="1450190">u,</span>
  <span m="1450530">s1,</span> <span m="1451200">and</span> <span
  m="1451390">they</span> <span m="1451540">have</span> <span
  m="1452210">non-zero</span> <span m="1452970">capacities.</span> <span
  m="1454550">So</span> <span m="1454820">s1,</span> <span m="1455190">u</span>
  <span m="1455390">has</span> <span m="1455560">a</span> <span
  m="1455600">capacity</span> <span m="1456160">of</span> <span
  m="1456290">1.</span> <span m="1457410">u,</span> <span m="1457920">s1</span>
  <span m="1458200">has</span> <span m="1458360">a</span> <span
  m="1458410">capacity</span> <span m="1458910">of</span> <span
  m="1459060">2.</span> <span m="1459740">Both</span> <span
  m="1460030">of</span> <span m="1460130">these</span> <span
  m="1460610">edges</span> <span m="1460980">exist.</span> <span
  m="1461540">And</span> <span m="1461720">if</span> <span
  m="1461815">these</span> <span m="1461910">edges</span> <span
  m="1462200">exist,</span> <span m="1462640">that</span> <span
  m="1462780">means</span> <span m="1462940">they</span> <span
  m="1463060">have</span> <span m="1463250">non-zero</span> <span
  m="1463850">capacity,</span> <span m="1465190">positive</span> <span
  m="1465600">capacity.</span></p><p><span m="1466580">And</span> <span
  m="1466740">we're</span> <span m="1466800">going</span> <span
  m="1466930">to</span> <span m="1466990">transform</span> <span
  m="1467620">that,</span> <span m="1468700">very</span> <span
  m="1468970">simply,</span> <span m="1470550">into--</span> <span
  m="1471400">this</span> <span m="1471910">is</span> <span
  m="1471990">not</span> <span m="1472230">changing</span> <span
  m="1472720">the</span> <span m="1473930">generality</span> <span
  m="1474620">of</span> <span m="1474730">the</span> <span
  m="1474820">algorithm,</span> <span m="1475760">but</span> <span
  m="1475970">all</span> <span m="1476160">I'm</span> <span
  m="1476260">going</span> <span m="1476400">to</span> <span
  m="1476470">do</span> <span m="1476760">is</span> <span
  m="1477610">transform</span> <span m="1478250">it--</span> <span
  m="1479100">call</span> <span m="1479245">this</span> <span
  m="1479390">s1--</span> <span m="1480630">into</span> <span
  m="1481380">something</span> <span m="1481890">that</span> <span
  m="1482120">satisfies</span> <span m="1483770">this</span> <span
  m="1484120">restriction.</span> <span m="1485750">So</span> <span
  m="1487670">I</span> <span m="1487800">could</span> <span
  m="1487900">have</span> <span m="1488050">2</span> <span
  m="1488310">here,</span> <span m="1489320">1,</span> <span
  m="1490380">and</span> <span m="1490610">1,</span> <span
  m="1491750">OK?</span> <span m="1492330">So</span> <span
  m="1492580">all</span> <span m="1492810">I've</span> <span
  m="1492960">done</span> <span m="1493730">is</span> <span
  m="1493990">introduce</span> <span m="1494780">u</span> <span
  m="1494960">prime,</span> <span m="1496020">right?</span></p><p><span
  m="1496240">Then</span> <span m="1496370">I</span> <span
  m="1496420">can</span> <span m="1496510">always</span> <span
  m="1496800">do</span> <span m="1496960">this--</span> <span
  m="1497260">if</span> <span m="1497400">this</span> <span
  m="1497550">is</span> <span m="1497700">trivial</span> <span
  m="1498520">for</span> <span m="1498730">any</span> <span
  m="1499010">pair</span> <span m="1499940">of</span> <span
  m="1500110">vertices,</span> <span m="1500750">I</span> <span
  m="1500840">can</span> <span m="1500970">introduce</span> <span
  m="1501360">one</span> <span m="1501540">other</span> <span
  m="1501750">vertex.</span> <span m="1502670">It</span> <span
  m="1502900">all</span> <span m="1503070">works</span> <span
  m="1503380">out.</span> <span m="1504190">Linear</span> <span
  m="1504680">expansion,</span> <span m="1505670">constant</span> <span
  m="1506120">factors,</span> <span m="1507030">ignore</span> <span
  m="1507440">them.</span> <span m="1508180">Life</span> <span
  m="1508410">is</span> <span m="1508490">wonderful.</span></p><p><span
  m="1510060">So</span> <span m="1510990">all</span> <span
  m="1511230">I've</span> <span m="1511340">done</span> <span
  m="1512300">is</span> <span m="1513290">taken</span> <span
  m="1513590">away</span> <span m="1514560">the</span> <span
  m="1514800">situation</span> <span m="1515430">where</span> <span
  m="1516130">I</span> <span m="1516310">have--</span> <span
  m="1516690">you</span> <span m="1516780">can</span> <span
  m="1516880">think</span> <span m="1517030">of</span> <span
  m="1517120">it</span> <span m="1517240">as</span> <span
  m="1518880">two-way</span> <span m="1519190">streets,</span> <span
  m="1520180">right?</span> <span m="1520310">Two-way</span> <span
  m="1520650">streets</span> <span m="1521140">are</span> <span
  m="1521260">annoying.</span> <span m="1522310">You</span> <span
  m="1522530">don't</span> <span m="1522710">quite</span> <span
  m="1523000">know</span> <span m="1523190">what</span> <span
  m="1523380">the</span> <span m="1523470">rate</span> <span
  m="1523730">of</span> <span m="1523820">traffic</span> <span
  m="1524310">is</span> <span m="1524880">from</span> <span
  m="1525350">one</span> <span m="1525690">end</span> <span
  m="1525820">of</span> <span m="1525910">the</span> <span
  m="1525980">street</span> <span m="1526310">to</span> <span
  m="1526380">another,</span> <span m="1526700">because</span> <span
  m="1526970">cars</span> <span m="1527310">are</span> <span
  m="1527370">going</span> <span m="1527600">in</span> <span
  m="1527690">both</span> <span m="1527890">directions.</span> <span
  m="1528770">And</span> <span m="1528930">you</span> <span
  m="1529000">have</span> <span m="1529120">to</span> <span
  m="1529190">do</span> <span m="1529310">subtraction.</span> <span
  m="1530520">Subtraction</span> <span m="1531070">is</span> <span
  m="1531190">painful,</span> <span m="1531740">so</span> <span
  m="1532710">we</span> <span m="1532820">don't</span> <span
  m="1532960">want</span> <span m="1533150">that.</span></p><p><span
  m="1535060">So</span> <span m="1535180">we're</span> <span
  m="1535340">just</span> <span m="1535500">going</span> <span
  m="1535620">to</span> <span m="1536650">assume</span> <span
  m="1537020">that</span> <span m="1537300">this</span> <span
  m="1537580">is</span> <span m="1537680">u</span> <span
  m="1537830">prime.</span> <span m="1538560">And</span> <span
  m="1539080">now,</span> <span m="1539500">you're</span> <span
  m="1539690">all</span> <span m="1539800">set.</span> <span
  m="1541120">We</span> <span m="1541260">allow</span> <span
  m="1541510">this.</span> <span m="1541950">So</span> <span
  m="1542860">we</span> <span m="1543030">have</span> <span
  m="1543230">to</span> <span m="1543330">allow</span> <span
  m="1543590">for</span> <span m="1543760">generality</span> <span
  m="1544350">reasons.</span> <span m="1545040">As</span> <span
  m="1545250">we</span> <span m="1545360">saw</span> <span m="1546070">in</span>
  <span m="1546220">that</span> <span m="1546490">very</span> <span
  m="1546710">first</span> <span m="1546980">example</span> <span
  m="1547410">there,</span> <span m="1548230">we</span> <span
  m="1548380">are</span> <span m="1548480">going</span> <span
  m="1548600">to</span> <span m="1548660">have</span> <span
  m="1548780">cycles</span> <span m="1549180">here,</span> <span
  m="1549580">OK?</span> <span m="1550070">But</span> <span
  m="1550590">we</span> <span m="1550690">just</span> <span
  m="1550870">don't</span> <span m="1550990">want</span> <span
  m="1551140">cycles</span> <span m="1551580">to</span> <span
  m="1551930">be</span> <span m="1552160">of</span> <span
  m="1552920">length</span> <span m="1553540">1</span> <span
  m="1553890">or</span> <span m="1554020">2,</span> <span m="1554850">OK?</span>
  <span m="1555180">So</span> <span m="1555570">that's</span> <span
  m="1555870">essentially</span> <span m="1556220">what</span> <span
  m="1556340">we're</span> <span m="1556400">going</span> <span
  m="1556530">to</span> <span m="1556650">disallow.</span> <span
  m="1557630">All</span> <span m="1557740">right?</span></p><p><span
  m="1558560">The</span> <span m="1558670">good</span> <span
  m="1558830">news</span> <span m="1559100">is</span> <span
  m="1559250">that,</span> <span m="1560600">if</span> <span
  m="1560710">you</span> <span m="1560800">do</span> <span
  m="1560970">this,</span> <span m="1561800">then</span> <span
  m="1562080">we'll</span> <span m="1562280">only</span> <span
  m="1562630">have</span> <span m="1563330">a</span> <span
  m="1563460">single</span> <span m="1563990">notion</span> <span
  m="1564530">of</span> <span m="1564690">flow.</span> <span
  m="1565890">Whereas,</span> <span m="1566450">if</span> <span
  m="1566610">you</span> <span m="1567050">go</span> <span
  m="1567270">read</span> <span m="1567480"><i>CLRS,</i></span> <span
  m="1568660">you'll</span> <span m="1568860">see</span> <span
  m="1569090">that</span> <span m="1569270">there's</span> <span
  m="1569570">two</span> <span m="1569780">notions</span> <span
  m="1570180">of</span> <span m="1570280">flow</span> <span
  m="1570425">in</span> <span m="1570570"><i>CLRS.</i></span> <span
  m="1571820">There's</span> <span m="1572090">positive</span> <span
  m="1572700">flow,</span> <span m="1573430">which</span> <span
  m="1573720">is</span> <span m="1573850">different</span> <span
  m="1574330">from</span> <span m="1574630">net flow.</span> <span
  m="1577640">And</span> <span m="1578050">the</span> <span
  m="1578120">positive</span> <span m="1578500">flow</span> <span
  m="1578730">is</span> <span m="1578850">different</span> <span
  m="1579200">from</span> <span m="1579410">net</span> <span
  m="1579580">flow</span> <span m="1580610">in</span> <span
  m="1580990">graphs</span> <span m="1581690">that</span> <span
  m="1581890">have</span> <span m="1582440">this</span> <span
  m="1582920">particular</span> <span m="1583800">structure,</span> <span
  m="1584840">or</span> <span m="1585020">have</span> <span
  m="1585250">nodes</span> <span m="1585630">with</span> <span
  m="1586140">these</span> <span m="1586680">properties.</span></p><p><span
  m="1587840">But</span> <span m="1588120">if</span> <span
  m="1588240">you</span> <span m="1588410">disallow</span> <span
  m="1588860">them,</span> <span m="1589400">then</span> <span
  m="1589880">you</span> <span m="1590000">can</span> <span
  m="1590100">just</span> <span m="1590260">talk</span> <span
  m="1590400">about</span> <span m="1590590">flow,</span> <span
  m="1591280">and</span> <span m="1591450">it</span> <span
  m="1591510">doesn't</span> <span m="1591690">matter.</span> <span
  m="1593140">Positive</span> <span m="1593550">flow</span> <span
  m="1593715">is</span> <span m="1593880">the</span> <span
  m="1593950">same</span> <span m="1594210">as</span> <span
  m="1594320">net</span> <span m="1594490">flow,</span> <span
  m="1595240">all</span> <span m="1595340">right?</span> <span
  m="1595540">So</span> <span m="1595730">for</span> <span
  m="1595860">the</span> <span m="1595940">purposes</span> <span
  m="1596370">of</span> <span m="1597210">[? 6 over 6, ?]</span> <span
  m="1598010">for</span> <span m="1598130">this</span> <span
  m="1598240">semester,</span> <span m="1599880">we're</span> <span
  m="1600520">going</span> <span m="1600660">to</span> <span
  m="1600740">simply</span> <span m="1601080">think</span> <span
  m="1601290">about</span> <span m="1601500">flow</span> <span
  m="1602400">and</span> <span m="1602880">equate</span> <span
  m="1603270">that</span> <span m="1603460">to</span> <span
  m="1603540">positive</span> <span m="1603940">flow,</span> <span
  m="1604210">equate</span> <span m="1604500">that</span> <span
  m="1604670">to</span> <span m="1604760">net</span> <span
  m="1604950">flow.</span> <span m="1605910">And</span> <span
  m="1606250">it's</span> <span m="1606440">all</span> <span
  m="1606670">going</span> <span m="1606790">to</span> <span
  m="1606850">work</span> <span m="1607060">out,</span> <span
  m="1607700">assuming</span> <span m="1608140">your</span> <span
  m="1608260">graphs</span> <span m="1609150">satisfy</span> <span
  m="1609860">these</span> <span m="1610100">two</span> <span
  m="1610220">properties</span> <span m="1611320">of</span> <span
  m="1611690">the</span> <span m="1611970">cycle</span> <span
  m="1612370">lengths.</span> <span m="1613350">All</span> <span
  m="1613450">right?</span> <span m="1615350">Cool.</span> <span
  m="1616730">Good.</span></p><p><span m="1617120">So</span> <span
  m="1617500">let's</span> <span m="1618370">keep</span> <span
  m="1618630">going</span> <span m="1618880">here.</span> <span
  m="1619250">So</span> <span m="1619540">we're</span> <span
  m="1619750">up</span> <span m="1620000">to</span> <span
  m="1620980">finished</span> <span m="1621420">up</span> <span
  m="1621560">on</span> <span m="1621670">max</span> <span
  m="1621950">flow.</span> <span m="1624930">Let</span> <span
  m="1625120">me</span> <span m="1625210">just</span> <span
  m="1626170">give</span> <span m="1626460">you</span> <span
  m="1626630">some</span> <span m="1626950">sense</span> <span
  m="1628350">of</span> <span m="1629360">notation.</span> <span
  m="1633320">I've</span> <span m="1633680">talked</span> <span
  m="1634030">a</span> <span m="1634080">lot</span> <span
  m="1637840">about</span> <span m="1638370">constraints.</span> <span
  m="1640160">But</span> <span m="1641450">we've</span> <span
  m="1641580">got</span> <span m="1641680">to</span> <span
  m="1641740">write</span> <span m="1641930">some</span> <span
  m="1642040">stuff</span> <span m="1642310">out,</span> <span
  m="1643090">because</span> <span m="1643400">we're</span> <span
  m="1643470">going</span> <span m="1643600">to</span> <span
  m="1643670">be</span> <span m="1646710">getting</span> <span
  m="1647020">more</span> <span m="1647230">precise</span> <span
  m="1648660">and</span> <span m="1648910">proving</span> <span
  m="1649310">things</span> <span m="1650630">in</span> <span
  m="1650780">just</span> <span m="1650980">a</span> <span
  m="1651020">few</span> <span m="1651180">minutes.</span></p><p><span
  m="1654260">So</span> <span m="1655470">what</span> <span
  m="1655670">is</span> <span m="1655790">a</span> <span
  m="1655840">flow?</span> <span m="1656800">Well,</span> <span
  m="1658140">to</span> <span m="1658280">be</span> <span
  m="1658420">precise,</span> <span m="1659690">it</span> <span
  m="1660030">is</span> <span m="1660240">going</span> <span
  m="1660500">to</span> <span m="1661430">be</span> <span m="1661660">a</span>
  <span m="1661920">function</span> <span m="1662660">that</span> <span
  m="1662870">satisfies</span> <span m="1664230">the</span> <span
  m="1664360">following</span> <span m="1664750">properties.</span> <span
  m="1665770">It</span> <span m="1665900">satisfies</span> <span
  m="1666640">the</span> <span m="1666680">capacity</span> <span
  m="1667370">constraint.</span> <span m="1679960">This</span> <span
  m="1680120">is</span> <span m="1680330">the</span> <span
  m="1683320">obvious</span> <span m="1683730">capacity</span> <span
  m="1684170">constraint,</span> <span m="1685880">intuitive</span> <span
  m="1686380">capacity</span> <span m="1686800">constraint.</span> <span
  m="1687410">And</span> <span m="1687600">then</span> <span
  m="1687750">we've</span> <span m="1687900">got</span> <span
  m="1688110">flow</span> <span m="1688360">conservation.</span> <span
  m="1696120">And</span> <span m="1696530">the</span> <span
  m="1696620">important</span> <span m="1697080">thing</span> <span
  m="1697240">here</span> <span m="1697490">is</span> <span
  m="1697650">that</span> <span m="1698140">I</span> <span
  m="1698530">don't</span> <span m="1698730">have</span> <span
  m="1698980">it</span> <span m="1699720">for</span> <span
  m="1700100">all</span> <span m="1702030">V,</span> <span
  m="1702940">but</span> <span m="1703250">I</span> <span m="1703400">do</span>
  <span m="1703610">have</span> <span m="1704660">it</span> <span
  m="1704890">for</span> <span m="1705130">vertices,</span> <span
  m="1705985">V,</span> <span m="1706280">that</span> <span
  m="1706840">are</span> <span m="1706960">not</span> <span
  m="1707720">the</span> <span m="1707870">source</span> <span
  m="1708350">or</span> <span m="1708510">the</span> <span
  m="1708620">sink.</span> <span m="1709760">And</span> <span
  m="1710190">I'm</span> <span m="1710310">going</span> <span
  m="1710490">to</span> <span m="1710600">require</span> <span
  m="1718360">f(u,v)</span> <span m="1718730">equals</span> <span
  m="1719110">0,</span> <span m="1720450">right?</span></p><p><span
  m="1721660">And</span> <span m="1723340">the</span> <span
  m="1723540">last</span> <span m="1723810">one,</span> <span
  m="1724950">which</span> <span m="1725030">I</span> <span
  m="1725090">haven't</span> <span m="1725330">talked</span> <span
  m="1725570">about,</span> <span m="1726680">but</span> <span
  m="1726810">becomes</span> <span m="1729510">easy</span> <span
  m="1729860">to</span> <span m="1729990">talk</span> <span
  m="1730200">about,</span> <span m="1730440">given</span> <span
  m="1730700">this</span> <span m="1730860">constraint,</span> <span
  m="1732070">is</span> <span m="1732270">skew</span> <span
  m="1732570">symmetry.</span> <span m="1746430">So</span> <span
  m="1748940">if</span> <span m="1749180">you</span> <span
  m="1749280">take--</span> <span m="1750160">this</span> <span
  m="1750370">doesn't</span> <span m="1750630">have</span> <span
  m="1750780">to</span> <span m="1750850">be</span> <span m="1750980">an</span>
  <span m="1751080">edge</span> <span m="1751580">between</span> <span
  m="1751950">u</span> <span m="1752110">and</span> <span m="1752270">v.</span>
  <span m="1752830">Now,</span> <span m="1753140">I'm</span> <span
  m="1753280">talking</span> <span m="1753630">about</span> <span
  m="1754520">the</span> <span m="1754680">flow,</span> <span
  m="1755180">f,</span> <span m="1755950">between</span> <span
  m="1756300">u</span> <span m="1756480">and</span> <span m="1756640">v.</span>
  <span m="1757370">And</span> <span m="1757570">so</span> <span
  m="1757690">the</span> <span m="1757800">u</span> <span
  m="1757940">could</span> <span m="1758090">be</span> <span
  m="1758400">s,</span> <span m="1759140">which</span> <span
  m="1759350">is</span> <span m="1759480">the</span> <span
  m="1759560">source.</span> <span m="1760300">v</span> <span
  m="1760520">could</span> <span m="1760670">be</span> <span
  m="1760810">t,</span> <span m="1761570">which</span> <span
  m="1761760">is</span> <span m="1761870">the</span> <span
  m="1761960">sink.</span></p><p><span m="1762770">So</span> <span
  m="1763020">in</span> <span m="1763220">general,</span> <span
  m="1763880">I'm</span> <span m="1763900">not</span> <span
  m="1764120">talking</span> <span m="1764380">about</span> <span
  m="1764550">a</span> <span m="1764590">flow.</span> <span
  m="1765680">And</span> <span m="1766340">there</span> <span
  m="1766520">obviously</span> <span m="1766870">has</span> <span
  m="1767060">to</span> <span m="1767140">be</span> <span m="1767240">a</span>
  <span m="1768270">path</span> <span m="1770030">from</span> <span
  m="1770400">u to</span> <span m="1770850">v,</span> <span
  m="1771300">in</span> <span m="1771460">order</span> <span
  m="1771650">for</span> <span m="1771780">there</span> <span
  m="1771940">to</span> <span m="1772030">be</span> <span m="1772160">a</span>
  <span m="1772210">non-zero</span> <span m="1773000">flow,</span> <span
  m="1773890">f(u,v),</span> <span m="1775060">right?</span> <span
  m="1775310">If</span> <span m="1775420">there's</span> <span
  m="1775560">no</span> <span m="1775690">path,</span> <span
  m="1776210">there's</span> <span m="1776500">no</span> <span
  m="1776610">way</span> <span m="1776740">of</span> <span
  m="1776820">getting</span> <span m="1777090">there.</span> <span
  m="1778040">But</span> <span m="1778780">having</span> <span
  m="1779100">said</span> <span m="1779340">that,</span> <span
  m="1780700">the</span> <span m="1781700">definition</span> <span
  m="1782420">of</span> <span m="1782540">a</span> <span m="1782610">flow</span>
  <span m="1782930">here</span> <span m="1783770">in</span> <span
  m="1783910">our</span> <span m="1784000">network</span> <span
  m="1784880">is</span> <span m="1785700">the</span> <span
  m="1785870">straightforward</span> <span m="1786420">definition,</span> <span
  m="1787570">which</span> <span m="1787830">simply</span> <span
  m="1788130">says,</span> <span m="1788940">if</span> <span
  m="1789300">there's</span> <span m="1790830">a</span> <span
  m="1790960">flow</span> <span m="1791360">from</span> <span
  m="1791660">u</span> <span m="1791790">to</span> <span m="1791880">v,</span>
  <span m="1792380">regardless</span> <span m="1792850">of</span> <span
  m="1792940">what</span> <span m="1793150">u</span> <span
  m="1793290">and</span> <span m="1793430">v</span> <span
  m="1793630">are,</span> <span m="1794320">then</span> <span
  m="1795240">the</span> <span m="1795310">value</span> <span
  m="1795750">of</span> <span m="1795850">that</span> <span
  m="1796000">flow</span> <span m="1796830">is</span> <span
  m="1797220">simply</span> <span m="1797610">the</span> <span
  m="1797690">negation</span> <span m="1798780">of</span> <span
  m="1799820">the</span> <span m="1800150">value</span> <span
  m="1800570">of</span> <span m="1800680">the</span> <span
  m="1800750">flow</span> <span m="1801480">from</span> <span
  m="1802540">v</span> <span m="1802656">to</span> <span m="1802773">u,</span>
  <span m="1803880">which</span> <span m="1804020">makes</span> <span
  m="1804200">perfect</span> <span m="1804440">sense,</span> <span
  m="1805480">right?</span></p><p><span m="1806770">And</span> <span
  m="1807130">this</span> <span m="1807440">all</span> <span
  m="1807680">works</span> <span m="1807970">out</span> <span
  m="1808750">under</span> <span m="1809960">the</span> <span
  m="1810340">definition</span> <span m="1811080">of</span> <span
  m="1812130">net</span> <span m="1812420">flow.</span> <span
  m="1813510">And</span> <span m="1813670">so</span> <span
  m="1813770">this</span> <span m="1813930">is</span> <span
  m="1814050">essentially</span> <span m="1814440">what</span> <span
  m="1815260">the</span> <span m="1815380">definition</span> <span
  m="1815800">of</span> <span m="1815880">net</span> <span
  m="1816110">flow</span> <span m="1816380">is</span> <span
  m="1817100">in</span> <span m="1818040">the</span> <span
  m="1818120">textbook.</span> <span m="1818910">But</span> <span
  m="1819110">for</span> <span m="1819290">our</span> <span
  m="1819760">purposes</span> <span m="1820340">here,</span> <span
  m="1821210">we</span> <span m="1821280">don't</span> <span
  m="1821430">have</span> <span m="1821590">to</span> <span
  m="1822790">add</span> <span m="1823070">that</span> <span
  m="1823250">adjective.</span> <span m="1824310">We</span> <span
  m="1824390">just</span> <span m="1824760">are</span> <span
  m="1824920">going</span> <span m="1825070">to</span> <span
  m="1825130">be</span> <span m="1825200">talking</span> <span
  m="1825430">about</span> <span m="1825590">flows.</span> <span
  m="1826370">Positive</span> <span m="1826780">or</span> <span
  m="1826850">net,</span> <span m="1827190">they're</span> <span
  m="1827410">the</span> <span m="1827660">same,</span> <span
  m="1828410">all</span> <span m="1828530">right?</span> <span
  m="1830350">All</span> <span m="1830490">right.</span> <span
  m="1831080">Good.</span></p><p><span m="1832026">So</span> <span
  m="1838260">one</span> <span m="1838480">of</span> <span
  m="1838540">the</span> <span m="1838600">things</span> <span
  m="1838800">you</span> <span m="1838870">can</span> <span
  m="1839010">do</span> <span m="1840190">with</span> <span
  m="1840550">this</span> <span m="1840720">notation--</span> <span
  m="1841580">and</span> <span m="1841740">we're</span> <span
  m="1841840">going</span> <span m="1842050">to</span> <span
  m="1843310">use</span> <span m="1844150">what's</span> <span
  m="1844440">called</span> <span m="1844670">implicit</span> <span
  m="1845140">summation</span> <span m="1845610">notation</span> <span
  m="1846050">on</span> <span m="1846170">top</span> <span m="1846390">of</span>
  <span m="1846490">this--</span> <span m="1847240">is</span> <span
  m="1847480">to</span> <span m="1848220">prove</span> <span
  m="1848590">some</span> <span m="1848880">interesting</span> <span
  m="1849350">things,</span> <span m="1850280">interesting</span> <span
  m="1850690">theorems,</span> <span m="1851470">that</span> <span
  m="1851620">give</span> <span m="1851760">you</span> <span
  m="1851850">some</span> <span m="1852020">intuition</span> <span
  m="1852550">as</span> <span m="1852670">to</span> <span m="1852780">how</span>
  <span m="1853080">algorithms</span> <span m="1854300">on</span> <span
  m="1854690">flow</span> <span m="1854900">networks</span> <span
  m="1855310">are</span> <span m="1855370">going</span> <span
  m="1855510">to</span> <span m="1855570">work.</span> <span
  m="1856690">And</span> <span m="1858730">in</span> <span
  m="1858880">particular,</span> <span m="1861200">we're</span> <span
  m="1861360">going</span> <span m="1861851">to</span> <span
  m="1865370">use</span> <span m="1865720">this</span> <span
  m="1865870">notation</span> <span m="1866870">when</span> <span
  m="1867070">we</span> <span m="1867160">talk</span> <span
  m="1867390">about</span> <span m="1867550">the</span> <span
  m="1867620">value</span> <span m="1868060">of</span> <span
  m="1868170">a</span> <span m="1868250">flow.</span> <span
  m="1870580">So</span> <span m="1870820">the</span> <span
  m="1870890">value</span> <span m="1871200">of</span> <span
  m="1871280">a</span> <span m="1871350">flow,</span> <span
  m="1871710">f,</span> <span m="1873060">is</span> <span
  m="1873390">denoted--</span> <span m="1880220">you</span> <span
  m="1880300">can</span> <span m="1880410">think</span> <span
  m="1880570">of</span> <span m="1880650">it</span> <span m="1880740">as</span>
  <span m="1881010">a</span> <span m="1881100">cardinality</span> <span
  m="1881710">of</span> <span m="1881890">f.</span> <span m="1882860">And</span>
  <span m="1884560">f</span> <span m="1885120">is</span> <span
  m="1888300">v,</span> <span m="1889060">belonging</span> <span
  m="1889410">to</span> <span m="1889630">capital</span> <span
  m="1890180">V,</span> <span m="1891300">f(s,v).</span> <span
  m="1893380">And</span> <span m="1893610">that</span> <span
  m="1893920">is</span> <span m="1894650">f(s,V),</span> <span
  m="1896550">so</span> <span m="1896740">what</span> <span m="1896900">I</span>
  <span m="1896980">have</span> <span m="1897100">written</span> <span
  m="1897450">here.</span></p><p><span m="1898410">Well,</span> <span
  m="1900870">given</span> <span m="1901200">a</span> <span
  m="1901260">flow</span> <span m="1901460">network,</span> <span
  m="1902010">I</span> <span m="1902140">want</span> <span
  m="1902440">one</span> <span m="1902700">particular</span> <span
  m="1903170">quantity</span> <span m="1904250">that</span> <span
  m="1904470">I</span> <span m="1904540">want</span> <span m="1904750">to</span>
  <span m="1904820">maximize.</span> <span m="1906610">And</span> <span
  m="1906860">that</span> <span m="1907040">particular</span> <span
  m="1907370">quantity</span> <span m="1908350">is</span> <span
  m="1908630">going</span> <span m="1908920">to</span> <span
  m="1909020">be</span> <span m="1909250">defined,</span> <span
  m="1910290">based</span> <span m="1910650">on</span> <span
  m="1910890">how</span> <span m="1911060">much</span> <span
  m="1911890">I</span> <span m="1912040">can</span> <span
  m="1912230">push</span> <span m="1913420">from</span> <span
  m="1914020">s,</span> <span m="1914740">how</span> <span
  m="1914930">much</span> <span m="1915100">can</span> <span
  m="1915220">I</span> <span m="1915250">push</span> <span
  m="1915530">outward</span> <span m="1916190">from</span> <span
  m="1916450">s.</span> <span m="1917600">That's</span> <span
  m="1917880">the</span> <span m="1917980">crucial</span> <span
  m="1918620">quantity</span> <span m="1919030">that</span> <span
  m="1919170">I</span> <span m="1919210">want</span> <span m="1919370">to</span>
  <span m="1919430">maximize.</span> <span m="1921130">That</span> <span
  m="1921440">quantity</span> <span m="1922840">is--</span> <span
  m="1923560">you</span> <span m="1923730">think</span> <span
  m="1923940">about</span> <span m="1924740">everything</span> <span
  m="1925260">that</span> <span m="1925390">is</span> <span
  m="1925550">going</span> <span m="1925970">out</span> <span
  m="1926230">of</span> <span m="1926410">s,</span> <span m="1927256">and</span>
  <span m="1927468">you</span> <span m="1927680">add</span> <span
  m="1927730">it</span> <span m="1927780">all</span> <span m="1928010">up</span>
  <span m="1928170">together.</span></p><p><span m="1929230">So</span> <span
  m="1932870">from</span> <span m="1933200">s,</span> <span
  m="1933730">you</span> <span m="1933890">look</span> <span
  m="1934070">at</span> <span m="1934330">any</span> <span
  m="1934690">other</span> <span m="1934880">vertex,</span> <span
  m="1936390">every</span> <span m="1936760">other</span> <span
  m="1936950">vertex,</span> <span m="1937380">and</span> <span
  m="1937470">you</span> <span m="1937550">say,</span> <span
  m="1937800">what</span> <span m="1938020">is</span> <span
  m="1938210">f(s,v)?</span> <span m="1940050">And</span> <span
  m="1940160">I'm</span> <span m="1940230">not</span> <span
  m="1940380">talking</span> <span m="1940620">about</span> <span
  m="1940950">just</span> <span m="1941230">the</span> <span
  m="1941300">edges</span> <span m="1941680">that</span> <span
  m="1941820">come</span> <span m="1941990">out</span> <span
  m="1942100">of</span> <span m="1942210">s.</span> <span m="1943840">A</span>
  <span m="1943970">vertex,</span> <span m="1944880">v,</span> <span
  m="1945310">small</span> <span m="1945670">v,</span> <span
  m="1946300">can</span> <span m="1946460">be</span> <span
  m="1946570">any</span> <span m="1946780">vertex.</span> <span
  m="1948380">If</span> <span m="1948580">I</span> <span m="1948700">add</span>
  <span m="1948960">up</span> <span m="1949340">all</span> <span
  m="1949770">of</span> <span m="1949890">the</span> <span
  m="1950240">flows</span> <span m="1951350">that</span> <span
  m="1951560">come</span> <span m="1951780">out</span> <span
  m="1951990">of</span> <span m="1953300">s,</span> <span
  m="1954300">then</span> <span m="1954750">that</span> <span
  m="1955030">is</span> <span m="1955260">the</span> <span
  m="1956290">flow</span> <span m="1956680">that</span> <span
  m="1957720">responds</span> <span m="1958160">to</span> <span
  m="1958230">my</span> <span m="1958360">flow</span> <span
  m="1958590">network.</span> <span m="1959280">That</span> <span
  m="1959430">is</span> <span m="1959520">everything</span> <span
  m="1959860">that's</span> <span m="1960030">getting</span> <span
  m="1960250">pushed</span> <span m="1960540">out</span> <span
  m="1960690">of</span> <span m="1961630">s,</span> <span
  m="1962620">OK?</span></p><p><span m="1964360">Now,</span> <span
  m="1964510">it</span> <span m="1964610">may</span> <span m="1964780">be</span>
  <span m="1964890">the</span> <span m="1964990">case</span> <span
  m="1965870">that--</span> <span m="1966860">remember,</span> <span
  m="1967280">I'm</span> <span m="1967380">talking</span> <span
  m="1967590">about</span> <span m="1967770">flow</span> <span
  m="1968030">here--</span> <span m="1968760">so</span> <span
  m="1969420">it</span> <span m="1969840">may</span> <span m="1970010">be</span>
  <span m="1970130">the</span> <span m="1970230">case</span> <span
  m="1970620">that</span> <span m="1971340">you</span> <span
  m="1972570">have</span> <span m="1972840">an</span> <span
  m="1972950">edge</span> <span m="1974320">from</span> <span
  m="1976070">s</span> <span m="1976596">coming</span> <span
  m="1977450">in</span> <span m="1978300">from</span> <span
  m="1978720">v4.</span> <span m="1980470">And</span> <span
  m="1980560">there</span> <span m="1982590">may</span> <span
  m="1982770">be</span> <span m="1983380">a</span> <span m="1983500">flow</span>
  <span m="1984790">associated</span> <span m="1985550">with</span> <span
  m="1985670">that.</span> <span m="1986310">This</span> <span
  m="1986375">is</span> <span m="1986440">maybe</span> <span
  m="1986670">something</span> <span m="1986960">like</span> <span
  m="1987120">1,</span> <span m="1987920">colon,</span> <span
  m="1988240">2,</span> <span m="1989300">all</span> <span
  m="1989440">right?</span></p><p><span m="1990140">So</span> <span
  m="1990990">what</span> <span m="1991250">this</span> <span
  m="1991430">means</span> <span m="1991730">is</span> <span
  m="1991870">that</span> <span m="1993040">f(s,vr)</span> <span
  m="1996380">is--</span> <span m="1999092">this</span> <span
  m="1999550">is</span> <span m="1999670">f,</span> <span
  m="2000020">remember--</span> <span m="2000760">so</span> <span
  m="2000930">this</span> <span m="2001005">is</span> <span
  m="2001080">minus</span> <span m="2001610">f(v4,s).</span> <span
  m="2004510">And</span> <span m="2004750">in</span> <span
  m="2004910">this</span> <span m="2005070">particular</span> <span
  m="2005400">case,</span> <span m="2007376">this</span> <span
  m="2008090">is</span> <span m="2008720">1.</span> <span m="2010790">So</span>
  <span m="2011000">this</span> <span m="2011150">is</span> <span
  m="2011240">minus</span> <span m="2011590">1,</span> <span
  m="2012990">OK?</span> <span m="2014980">So</span> <span
  m="2015590">keep</span> <span m="2015750">that</span> <span
  m="2015870">in</span> <span m="2015950">mind.</span></p><p><span
  m="2018040">When</span> <span m="2018250">I</span> <span
  m="2018320">talk</span> <span m="2018550">about</span> <span
  m="2018760">the</span> <span m="2018830">flow</span> <span
  m="2019710">of</span> <span m="2019950">the</span> <span
  m="2020030">network,</span> <span m="2020930">I'm</span> <span
  m="2021140">going</span> <span m="2021260">to</span> <span
  m="2021320">be</span> <span m="2021410">looking</span> <span
  m="2021770">at</span> <span m="2022010">the</span> <span
  m="2022120">source.</span> <span m="2023130">And</span> <span
  m="2023250">I'm</span> <span m="2023340">going</span> <span
  m="2023460">to</span> <span m="2023520">be</span> <span
  m="2023770">looking</span> <span m="2024120">at</span> <span
  m="2024480">all</span> <span m="2024770">of</span> <span
  m="2024850">the</span> <span m="2024920">flows</span> <span
  m="2025270">that</span> <span m="2025370">are</span> <span
  m="2025420">going</span> <span m="2025660">outward.</span> <span
  m="2026520">And</span> <span m="2026690">I</span> <span
  m="2026740">have</span> <span m="2026890">to</span> <span
  m="2026960">keep</span> <span m="2027160">in</span> <span
  m="2027240">mind</span> <span m="2028230">the</span> <span
  m="2028520">skew</span> <span m="2028780">symmetry</span> <span
  m="2029270">relationship.</span> <span m="2030400">I</span> <span
  m="2030530">obviously</span> <span m="2030820">have</span> <span
  m="2030970">to</span> <span m="2031050">obey</span> <span
  m="2031290">capacity</span> <span m="2031730">constraints</span> <span
  m="2032690">and</span> <span m="2033540">the</span> <span
  m="2033720">conservation</span> <span m="2034280">laws,</span> <span
  m="2035250">all</span> <span m="2035370">right?</span></p><p><span
  m="2036920">So</span> <span m="2037190">given</span> <span
  m="2037460">that,</span> <span m="2038790">let's</span> <span
  m="2039700">use</span> <span m="2040070">this</span> <span
  m="2041550">implicit</span> <span m="2042010">summation</span> <span
  m="2042510">notation</span> <span m="2043880">and</span> <span
  m="2045540">show</span> <span m="2045970">some</span> <span
  m="2046120">simple</span> <span m="2046510">properties</span> <span
  m="2047020">of</span> <span m="2047110">flow.</span> <span
  m="2048346">So</span> <span m="2049130">let's</span> <span
  m="2050239">look</span> <span m="2050500">at--</span> <span
  m="2070110">one</span> <span m="2070320">thing</span> <span
  m="2070489">I</span> <span m="2070540">want</span> <span m="2070670">to</span>
  <span m="2070730">emphasize</span> <span m="2072330">is</span> <span
  m="2073090">what</span> <span m="2073310">I've</span> <span
  m="2073409">done</span> <span m="2073650">here</span> <span
  m="2074860">is</span> <span m="2075350">use</span> <span
  m="2075730">this</span> <span m="2078429">implicit</span> <span
  m="2078889">summation</span> <span m="2079340">notation,</span> <span
  m="2082820">which</span> <span m="2083120">simply</span> <span
  m="2083449">says,</span> <span m="2084370">if</span> <span
  m="2084570">I</span> <span m="2084679">see</span> <span m="2085230">a</span>
  <span m="2085340">capital</span> <span m="2085820">letter</span> <span
  m="2086080">here,</span> <span m="2086400">that's</span> <span
  m="2086659">a</span> <span m="2086770">set.</span> <span
  m="2087699">And</span> <span m="2088210">I'm</span> <span
  m="2088409">going</span> <span m="2088560">to</span> <span
  m="2088630">have</span> <span m="2088940">to</span> <span
  m="2090810">enumerate</span> <span m="2092080">all</span> <span
  m="2092460">of</span> <span m="2092600">the</span> <span
  m="2093639">members</span> <span m="2094190">of</span> <span
  m="2094350">that</span> <span m="2094530">set.</span> <span
  m="2095570">And</span> <span m="2097020">it's</span> <span
  m="2097260">implicit</span> <span m="2097680">summation.</span> <span
  m="2098790">So</span> <span m="2098960">as</span> <span m="2099170">I</span>
  <span m="2099300">enumerate</span> <span m="2100110">those</span> <span
  m="2100630">members,</span> <span m="2101510">I'm</span> <span
  m="2101650">going</span> <span m="2101770">to</span> <span
  m="2101830">add</span> <span m="2102070">up</span> <span
  m="2102210">all</span> <span m="2102400">of</span> <span
  m="2102480">these</span> <span m="2102660">quantities,</span> <span
  m="2103820">right?</span> <span m="2104070">So</span> <span
  m="2104150">that's</span> <span m="2104340">really</span> <span
  m="2104530">what</span> <span m="2104700">this</span> <span
  m="2104850">means.</span></p><p><span m="2105230">So</span> <span
  m="2105240">the</span> <span m="2105400">sigma</span> <span
  m="2105830">here</span> <span m="2106570">gets</span> <span
  m="2107580">embedded</span> <span m="2108510">into</span> <span
  m="2108740">this</span> <span m="2108920">capital</span> <span
  m="2109360">V.</span> <span m="2109970">So</span> <span m="2110140">two</span>
  <span m="2110330">things</span> <span m="2110560">going</span> <span
  m="2110800">on.</span> <span m="2111270">The</span> <span
  m="2111370">small</span> <span m="2111710">v</span> <span
  m="2112200">turned</span> <span m="2112270">into</span> <span
  m="2112460">capital</span> <span m="2112650">V,</span> <span
  m="2112860">because</span> <span m="2113170">I'm</span> <span
  m="2113760">looking</span> <span m="2114160">at</span> <span
  m="2114240">the</span> <span m="2114300">entire</span> <span
  m="2114620">set.</span> <span m="2115250">And</span> <span
  m="2115410">the</span> <span m="2115470">sigma</span> <span
  m="2116080">gets</span> <span m="2116400">in</span> <span
  m="2116510">there</span> <span m="2116660">too.</span> <span
  m="2117410">And</span> <span m="2117550">that's</span> <span
  m="2117690">why</span> <span m="2117820">it's</span> <span
  m="2117970">implicit</span> <span m="2118530">summation,</span> <span
  m="2119200">not</span> <span m="2119380">just</span> <span
  m="2119550">implicit</span> <span m="2120220">set</span> <span
  m="2120520">notation.</span></p><p><span m="2122670">So</span> <span
  m="2123010">some</span> <span m="2123190">simple</span> <span
  m="2123500">properties.</span> <span m="2124140">I</span> <span
  m="2124270">can</span> <span m="2124410">say,</span> <span
  m="2124660">f(x,x)</span> <span m="2126620">is</span> <span
  m="2126770">0,</span> <span m="2128000">where</span> <span
  m="2128560">x</span> <span m="2128840">is</span> <span m="2128990">an</span>
  <span m="2129180">arbitrary</span> <span m="2129640">set.</span> <span
  m="2131741">All</span> <span m="2132160">that</span> <span
  m="2132410">says</span> <span m="2132800">is,</span> <span
  m="2133020">let's</span> <span m="2133210">say,</span> <span
  m="2133340">x</span> <span m="2133620">has</span> <span m="2135090">a</span>
  <span m="2135380">single</span> <span m="2136730">member</span> <span
  m="2137130">in</span> <span m="2137240">it,</span> <span
  m="2138150">which</span> <span m="2138340">is</span> <span
  m="2138880">a.</span> <span m="2139540">Then</span> <span
  m="2139730">f(a,a)</span> <span m="2140730">is</span> <span
  m="2141380">always</span> <span m="2141700">0,</span> <span
  m="2142890">because</span> <span m="2143400">if</span> <span
  m="2143470">you</span> <span m="2143540">don't</span> <span
  m="2143690">allow</span> <span m="2143930">self-loop</span> <span
  m="2144430">edges,</span> <span m="2145400">and</span> <span
  m="2147370">that's</span> <span m="2147700">pretty</span> <span
  m="2147860">much</span> <span m="2148040">all</span> <span
  m="2148180">you</span> <span m="2148270">need.</span></p><p><span
  m="2149110">If</span> <span m="2149260">you</span> <span
  m="2149360">have</span> <span m="2149590">a</span> <span
  m="2149670">pair</span> <span m="2150810">of</span> <span
  m="2151030">vertices</span> <span m="2151773">here,</span> <span m="2152600">a
  and</span> <span m="2152970">b,</span> <span m="2153630">then</span> <span
  m="2154000">what</span> <span m="2154200">you're</span> <span
  m="2154310">saying</span> <span m="2154610">is</span> <span
  m="2155010">f(a,b)</span> <span m="2157370">plus</span> <span
  m="2157760">f(b,a)</span> <span m="2160478">is</span> <span
  m="2160931">0.</span> <span m="2162560">And</span> <span
  m="2163180">that's</span> <span m="2163760">true,</span> <span
  m="2164060">because</span> <span m="2164300">of</span> <span
  m="2164390">skew</span> <span m="2164610">symmetry.</span> <span
  m="2165720">Right?</span> <span m="2166130">We</span> <span
  m="2166280">just</span> <span m="2166470">wrote</span> <span
  m="2166630">that</span> <span m="2166790">out.</span> <span
  m="2167470">So</span> <span m="2167880">f(x,x)</span> <span
  m="2168910">is</span> <span m="2169030">0.</span> <span m="2170520">And</span>
  <span m="2170810">in</span> <span m="2170960">general,</span> <span
  m="2171340">you</span> <span m="2171430">can</span> <span
  m="2171550">say,</span> <span m="2171890">even</span> <span
  m="2172210">though</span> <span m="2172560">X</span> <span
  m="2172850">and</span> <span m="2173000">Y</span> <span m="2173430">are</span>
  <span m="2174370">sets</span> <span m="2175070">of</span> <span
  m="2175270">vertices,</span> <span m="2176710">I'm</span> <span
  m="2176870">going</span> <span m="2177000">to</span> <span
  m="2177060">be</span> <span m="2177120">able</span> <span
  m="2177290">to</span> <span m="2177400">use</span> <span
  m="2177680">skew</span> <span m="2177860">symmetry</span> <span
  m="2180240">to</span> <span m="2180400">say</span> <span
  m="2180620">that</span> <span m="2180780">f(X,Y)</span> <span
  m="2182430">is</span> <span m="2182600">minus</span> <span
  m="2183070">of</span> <span m="2183280">f(Y,X),</span> <span
  m="2185620">all</span> <span m="2185730">right?</span> <span
  m="2187180">Similar</span> <span m="2187910">argument.</span></p><p><span
  m="2189040">And</span> <span m="2189240">then,</span> <span
  m="2189410">lastly--</span> <span m="2191300">there's</span> <span
  m="2191520">any</span> <span m="2191690">number</span> <span
  m="2191950">of</span> <span m="2192050">these,</span> <span
  m="2192930">we</span> <span m="2193120">just</span> <span
  m="2193310">do</span> <span m="2193740">three</span> <span
  m="2193930">of</span> <span m="2194040">them</span> <span
  m="2194200">here--</span> <span m="2195440">X</span> <span
  m="2195800">of</span> <span m="2197630">f(XUY,</span> <span
  m="2200820">to</span> <span m="2201060">Z)</span> <span m="2202220">is</span>
  <span m="2202600">f(X,Z)</span> <span m="2205700">plus</span> <span
  m="2206740">f(Y,Z)--</span> <span m="2207820">we've</span> <span
  m="2207900">got</span> <span m="2208020">to</span> <span
  m="2208080">use</span> <span m="2208350">these</span> <span
  m="2208590">properties</span> <span m="2209090">to</span> <span
  m="2209190">prove</span> <span m="2209400">our</span> <span
  m="2209500">first</span> <span m="2209810">theorem</span> <span
  m="2210140">here</span> <span m="2211210">on</span> <span
  m="2211430">flow</span> <span m="2211630">networks--</span> <span
  m="2212590">if</span> <span m="2212820">X</span> <span m="2213150">of</span>
  <span m="2214380">X</span> <span m="2214650">intersection</span> <span
  m="2216200">Y</span> <span m="2216720">is</span> <span
  m="2216950">null.</span> <span m="2217500">So</span> <span
  m="2217600">you</span> <span m="2217660">don't</span> <span
  m="2217760">want</span> <span m="2217880">to</span> <span
  m="2217940">double-count.</span> <span m="2218940">So</span> <span
  m="2218970">that's</span> <span m="2219150">all</span> <span
  m="2219300">this</span> <span m="2219470">is.</span> <span
  m="2220360">Make</span> <span m="2220560">sure</span> <span
  m="2220730">you're</span> <span m="2220830">not</span> <span
  m="2221000">double-counting.</span> <span m="2222160">You've</span> <span
  m="2222310">got</span> <span m="2222880">f(XUY),</span> <span
  m="2225670">and</span> <span m="2226170">you</span> <span
  m="2226320">want</span> <span m="2226440">to</span> <span
  m="2226500">look</span> <span m="2226660">at</span> <span
  m="2226840">that</span> <span m="2227140">entire</span> <span
  m="2228440">set,</span> <span m="2229280">the</span> <span
  m="2229460">union,</span> <span m="2230470">and</span> <span
  m="2230690">then</span> <span m="2231180">look</span> <span
  m="2231410">at</span> <span m="2231510">the</span> <span
  m="2231580">flow</span> <span m="2232040">from</span> <span
  m="2232720">any</span> <span m="2233010">member</span> <span
  m="2233500">in</span> <span m="2233660">XUY</span> <span m="2235030">to</span>
  <span m="2235160">any</span> <span m="2235420">member</span> <span
  m="2235790">in</span> <span m="2235940">Z.</span> <span m="2236940">And</span>
  <span m="2237760">you</span> <span m="2237960">can</span> <span
  m="2238330">do</span> <span m="2238550">that</span> <span
  m="2238840">by</span> <span m="2238970">breaking</span> <span
  m="2239330">it</span> <span m="2239450">up,</span> <span
  m="2240020">provided</span> <span m="2240720">you're</span> <span
  m="2240900">careful</span> <span m="2241260">about</span> <span
  m="2241460">double-counting.</span> <span m="2242470">And</span> <span
  m="2242800">the</span> <span m="2242870">fact</span> <span
  m="2243140">that</span> <span m="2243930">the</span> <span
  m="2244070">two</span> <span m="2244250">sets,</span> <span
  m="2244580">X</span> <span m="2244800">and</span> <span m="2244930">Y,</span>
  <span m="2245940">do</span> <span m="2246150">not</span> <span
  m="2246390">have</span> <span m="2246670">an</span> <span
  m="2246760">intersection,</span> <span m="2247360">or</span> <span
  m="2247430">they</span> <span m="2247530">have</span> <span
  m="2247660">a</span> <span m="2247710">null</span> <span
  m="2248120">intersection,</span> <span m="2248910">implies</span> <span
  m="2249320">that</span> <span m="2249470">you're</span> <span
  m="2249610">OK</span> <span m="2250200">with</span> <span
  m="2250360">the</span> <span m="2250440">[? write ?]</span> <span
  m="2250610">inside.</span> <span m="2251610">All</span> <span
  m="2251730">right?</span></p><p><span m="2252630">So</span> <span
  m="2252800">you</span> <span m="2252890">might</span> <span
  m="2253030">be</span> <span m="2253110">going,</span> <span
  m="2253490">why</span> <span m="2253930">are</span> <span
  m="2254010">we</span> <span m="2254110">doing</span> <span
  m="2254380">this?</span> <span m="2255530">Well,</span> <span
  m="2255690">here's</span> <span m="2256780">a</span> <span
  m="2257290">good</span> <span m="2257750">reason</span> <span
  m="2259250">to</span> <span m="2259460">like</span> <span
  m="2260260">implicit</span> <span m="2260730">set</span> <span
  m="2260960">notation.</span> <span m="2263390">You</span> <span
  m="2264010">can</span> <span m="2264130">prove</span> <span
  m="2264440">some</span> <span m="2264660">interesting</span> <span
  m="2265210">theorems</span> <span m="2267120">in</span> <span
  m="2267590">a</span> <span m="2267630">very</span> <span
  m="2268490">elegant</span> <span m="2268910">way,</span> <span
  m="2270530">using</span> <span m="2270950">this</span> <span
  m="2271110">notation.</span> <span m="2272890">So</span> <span
  m="2273040">let's</span> <span m="2273240">do</span> <span
  m="2273820">one</span> <span m="2274050">example</span> <span
  m="2274480">of</span> <span m="2274560">that.</span> <span
  m="2275360">You'll</span> <span m="2275510">probably</span> <span
  m="2275840">see</span> <span m="2276030">others</span> <span
  m="2276380">in</span> <span m="2276490">section.</span></p><p><span
  m="2281410">So</span> <span m="2281630">one</span> <span m="2281800">of</span>
  <span m="2281870">the</span> <span m="2281960">things</span> <span
  m="2282200">that</span> <span m="2282330">we'd</span> <span
  m="2282460">like</span> <span m="2282630">to</span> <span
  m="2282730">do</span> <span m="2283980">is</span> <span
  m="2286830">prove</span> <span m="2287510">a</span> <span
  m="2287630">pretty</span> <span m="2287860">important</span> <span
  m="2288320">theorem,</span> <span m="2289090">which</span> <span
  m="2289320">I</span> <span m="2289380">think</span> <span
  m="2289790">all</span> <span m="2290040">of</span> <span
  m="2290520">you</span> <span m="2290900">probably</span> <span
  m="2292030">can</span> <span m="2292090">assume</span> <span
  m="2292580">in</span> <span m="2292655">your</span> <span
  m="2292730">heads,</span> <span m="2294560">given</span> <span
  m="2295060">all</span> <span m="2295400">of</span> <span
  m="2295510">the</span> <span m="2296240">properties</span> <span
  m="2296970">of</span> <span m="2297130">flow</span> <span
  m="2297350">networks</span> <span m="2297800">that</span> <span
  m="2297940">we</span> <span m="2298050">have.</span> <span
  m="2298760">And</span> <span m="2299020">it's</span> <span
  m="2299200">a</span> <span m="2299230">very</span> <span
  m="2299480">simple</span> <span m="2299820">theorem</span> <span
  m="2300630">that</span> <span m="2300860">simply</span> <span
  m="2301220">says,</span> <span m="2303100">I</span> <span
  m="2303250">have</span> <span m="2303480">the</span> <span
  m="2303550">law</span> <span m="2303870">of</span> <span
  m="2304170">conservation</span> <span m="2304910">that</span> <span
  m="2305040">is</span> <span m="2305140">applied</span> <span
  m="2305770">on</span> <span m="2305940">all</span> <span m="2306200">of</span>
  <span m="2306290">these</span> <span m="2306480">intermediate</span> <span
  m="2307010">vertices,</span> <span m="2308440">and</span> <span
  m="2308790">I've</span> <span m="2308910">got</span> <span
  m="2309280">a</span> <span m="2310010">bunch</span> <span
  m="2310420">of</span> <span m="2311990">commodities,</span> <span
  m="2312670">I've</span> <span m="2313150">got</span> <span
  m="2313310">a</span> <span m="2313350">flow</span> <span
  m="2314290">going</span> <span m="2314740">out</span> <span
  m="2315010">of</span> <span m="2315170">s,</span> <span
  m="2316210">right?</span> <span m="2316750">So</span> <span
  m="2316980">where</span> <span m="2317330">can</span> <span
  m="2317560">this</span> <span m="2317750">flow</span> <span
  m="2318110">go?</span> <span m="2319360">Where</span> <span
  m="2319640">does</span> <span m="2319830">this</span> <span
  m="2320030">flow</span> <span m="2320350">end</span> <span
  m="2320650">up?</span> <span m="2322580">It</span> <span
  m="2322750">ends</span> <span m="2322950">up</span> <span
  m="2324090">at</span> <span m="2324480">the</span> <span
  m="2324550">sink,</span> <span m="2325350">at</span> <span
  m="2325550">t,</span> <span m="2325960">right?</span></p><p><span
  m="2328430">So</span> <span m="2328610">the</span> <span
  m="2328700">point</span> <span m="2329050">is</span> <span
  m="2329670">that,</span> <span m="2329970">if</span> <span
  m="2330260">you</span> <span m="2330660">have</span> <span
  m="2330970">all</span> <span m="2331100">of</span> <span
  m="2331160">these</span> <span m="2331330">properties</span> <span
  m="2331770">that</span> <span m="2331940">we</span> <span
  m="2332060">have</span> <span m="2332240">up</span> <span
  m="2332380">here,</span> <span m="2334370">you're</span> <span
  m="2334620">going</span> <span m="2334940">to</span> <span
  m="2335680">be</span> <span m="2335870">able</span> <span
  m="2336110">to</span> <span m="2336880">show--</span> <span
  m="2337480">and</span> <span m="2337580">you</span> <span
  m="2337660">want</span> <span m="2337810">to</span> <span
  m="2337880">show</span> <span m="2338080">this,</span> <span
  m="2339450">you</span> <span m="2339580">want</span> <span
  m="2339700">to</span> <span m="2339760">prove</span> <span
  m="2339980">this--</span> <span m="2340820">that</span> <span
  m="2342560">the</span> <span m="2342780">value</span> <span
  m="2343260">of</span> <span m="2343400">a</span> <span
  m="2343470">flow,</span> <span m="2345320">which</span> <span
  m="2345510">is</span> <span m="2345650">defined</span> <span
  m="2346250">as</span> <span m="2346720">what</span> <span
  m="2346950">gets</span> <span m="2347210">pushed</span> <span
  m="2347530">out</span> <span m="2348200">from</span> <span
  m="2348480">the</span> <span m="2348560">source,</span> <span
  m="2349650">is</span> <span m="2349860">exactly</span> <span
  m="2351370">what</span> <span m="2351640">goes</span> <span
  m="2351920">into</span> <span m="2352190">the</span> <span
  m="2352300">sink,</span> <span m="2353450">right?</span> <span
  m="2354000">If</span> <span m="2354270">that's</span> <span
  m="2354480">not</span> <span m="2354680">the</span> <span
  m="2354750">case,</span> <span m="2355310">there's</span> <span
  m="2355580">been</span> <span m="2355730">a</span> <span
  m="2355780">violation</span> <span m="2356800">of</span> <span
  m="2356940">some</span> <span m="2357260">property,</span> <span
  m="2358280">perhaps</span> <span m="2358950">a</span> <span
  m="2359000">capacity</span> <span m="2359470">constraint,</span> <span
  m="2360610">perhaps,</span> <span m="2361700">more</span> <span
  m="2362190">likely,</span> <span m="2363195">a</span> <span
  m="2363600">conservation</span> <span m="2364220">constraint,</span> <span
  m="2365230">OK?</span></p><p><span m="2366500">So</span> <span
  m="2366670">the</span> <span m="2366760">theorem</span> <span
  m="2367110">that</span> <span m="2367230">we'd</span> <span
  m="2367350">like</span> <span m="2367510">to</span> <span
  m="2367600">prove</span> <span m="2368780">is</span> <span
  m="2369040">simply</span> <span m="2370070">that</span> <span
  m="2370360">f</span> <span m="2371510">is</span> <span
  m="2371890">f(v,t),</span> <span m="2374630">right?</span> <span
  m="2374900">That's</span> <span m="2375280">the</span> <span
  m="2375360">theorem.</span> <span m="2376400">And</span> <span
  m="2376740">there's</span> <span m="2376860">a</span> <span
  m="2376920">lot</span> <span m="2377140">going</span> <span
  m="2377370">on</span> <span m="2377570">here,</span> <span
  m="2377840">so</span> <span m="2377980">it's</span> <span
  m="2378100">worth</span> <span m="2378360">spending</span> <span
  m="2379130">30</span> <span m="2379370">seconds</span> <span
  m="2379810">looking</span> <span m="2380130">at</span> <span
  m="2380340">what</span> <span m="2380570">exactly</span> <span
  m="2381070">this</span> <span m="2381240">means.</span></p><p><span
  m="2382180">What</span> <span m="2382390">I</span> <span
  m="2382480">have</span> <span m="2382750">here</span> <span
  m="2383770">is</span> <span m="2384000">that,</span> <span
  m="2384690">if</span> <span m="2384760">you</span> <span
  m="2384820">just</span> <span m="2384980">look</span> <span
  m="2385120">at</span> <span m="2385230">this</span> <span
  m="2385820">and</span> <span m="2386050">that,</span> <span
  m="2387040">I'm</span> <span m="2387300">saying</span> <span
  m="2388580">that</span> <span m="2388910">f</span> <span m="2389830">is</span>
  <span m="2390370">what</span> <span m="2390640">gets</span> <span
  m="2390890">pushed</span> <span m="2391230">out</span> <span
  m="2392740">of</span> <span m="2392930">the</span> <span
  m="2393010">source,</span> <span m="2394150">OK?</span> <span
  m="2394760">And</span> <span m="2395030">now</span> <span
  m="2395240">what</span> <span m="2395370">I'm</span> <span
  m="2395470">saying</span> <span m="2395800">here</span> <span
  m="2396520">is</span> <span m="2396710">that</span> <span
  m="2397000">f,</span> <span m="2397910">the</span> <span
  m="2398020">value,</span> <span m="2398870">is</span> <span
  m="2399020">exactly</span> <span m="2399500">what</span> <span
  m="2399710">gets</span> <span m="2400610">pushed</span> <span
  m="2401020">into</span> <span m="2402160">the</span> <span
  m="2402260">sink,</span> <span m="2403390">OK?</span> <span
  m="2404120">So</span> <span m="2404270">this</span> <span
  m="2404450">is</span> <span m="2404530">what</span> <span m="2404690">I</span>
  <span m="2404740">have</span> <span m="2404850">to</span> <span
  m="2404920">prove,</span> <span m="2405830">right?</span> <span
  m="2406140">And</span> <span m="2406320">I</span> <span
  m="2406410">should</span> <span m="2406590">be</span> <span
  m="2406660">able</span> <span m="2406790">to</span> <span
  m="2406850">prove</span> <span m="2407100">that,</span> <span
  m="2407310">by</span> <span m="2407470">invoking</span> <span
  m="2408500">my</span> <span m="2408680">laws.</span> <span
  m="2409920">That's</span> <span m="2410150">it.</span> <span
  m="2410540">I</span> <span m="2410610">mean,</span> <span
  m="2410710">that's</span> <span m="2410960">my</span> <span
  m="2411320">axiomatic</span> <span m="2411810">system.</span> <span
  m="2412600">I've</span> <span m="2412720">got</span> <span
  m="2412910">those</span> <span m="2413100">laws.</span> <span
  m="2413880">I've</span> <span m="2414160">got</span> <span
  m="2415340">a</span> <span m="2415390">definition</span> <span
  m="2415950">of</span> <span m="2416710">a</span> <span m="2416770">flow</span>
  <span m="2417260">that</span> <span m="2417500">may</span> <span
  m="2417670">not</span> <span m="2417830">necessarily</span> <span
  m="2418320">be</span> <span m="2418430">the</span> <span
  m="2418510">max</span> <span m="2418780">flow.</span> <span
  m="2419340">It</span> <span m="2419510">might</span> <span
  m="2419690">be</span> <span m="2420210">something</span> <span
  m="2420560">much</span> <span m="2420750">less</span> <span
  m="2420980">than</span> <span m="2421080">the</span> <span
  m="2421150">max</span> <span m="2421400">flow,</span> <span
  m="2421505">it</span> <span m="2421610">might</span> <span
  m="2421800">be</span> <span m="2421930">the</span> <span
  m="2422000">max</span> <span m="2422310">flow.</span></p><p><span
  m="2422810">Regardless,</span> <span m="2423860">what</span> <span
  m="2424090">gets</span> <span m="2424330">out</span> <span
  m="2424460">of</span> <span m="2424530">the</span> <span
  m="2424590">source</span> <span m="2424940">has</span> <span
  m="2425120">to</span> <span m="2425210">get</span> <span
  m="2425350">into</span> <span m="2425520">the</span> <span
  m="2425610">sink,</span> <span m="2426390">right?</span> <span
  m="2426630">So</span> <span m="2426820">how</span> <span
  m="2426970">are</span> <span m="2427040">we</span> <span
  m="2427130">going</span> <span m="2427260">to</span> <span
  m="2427340">do</span> <span m="2427510">that?</span> <span
  m="2428110">And</span> <span m="2428510">the</span> <span
  m="2428740">implicit</span> <span m="2429270">summation</span> <span
  m="2429840">notation</span> <span m="2430720">is</span> <span
  m="2430950">going</span> <span m="2431080">to</span> <span
  m="2431140">give</span> <span m="2431270">you,</span> <span
  m="2431580">essentially,</span> <span m="2431880">a</span> <span
  m="2431950">three</span> <span m="2432090">or</span> <span
  m="2432160">four-line</span> <span m="2432580">proof,</span> <span
  m="2433270">which</span> <span m="2433400">is</span> <span
  m="2433510">very</span> <span m="2434060">intuitive,</span> <span
  m="2435050">right?</span> <span m="2435250">So</span> <span
  m="2435410">let's</span> <span m="2435930">do</span> <span
  m="2436050">that.</span> <span m="2436270">And</span> <span
  m="2436400">maybe</span> <span m="2436530">you</span> <span
  m="2436590">can</span> <span m="2436700">help</span> <span
  m="2436870">me.</span></p><p><span m="2439010">So</span> <span
  m="2439660">we're</span> <span m="2439750">going</span> <span
  m="2439870">to</span> <span m="2439930">start</span> <span
  m="2440290">with</span> <span m="2440420">what</span> <span
  m="2440610">we</span> <span m="2440740">know.</span> <span
  m="2441410">So</span> <span m="2441650">that's</span> <span
  m="2441870">the</span> <span m="2441960">proof.</span> <span
  m="2444110">f</span> <span m="2444550">equals</span> <span
  m="2446190">f(s,V).</span> <span m="2449640">Right?</span> <span
  m="2449880">So</span> <span m="2450090">that's</span> <span
  m="2450410">what</span> <span m="2450590">we've</span> <span
  m="2450680">got.</span> <span m="2450950">That's</span> <span
  m="2451160">the</span> <span m="2451230">definition</span> <span
  m="2452430">of</span> <span m="2453490">cardinality</span> <span
  m="2454050">of</span> <span m="2454190">f,</span> <span m="2454400">or</span>
  <span m="2454690">a</span> <span m="2454880">value</span> <span
  m="2455290">of</span> <span m="2455420">f,</span> <span
  m="2456120">OK?</span></p><p><span m="2459830">What</span> <span
  m="2460000">I'm</span> <span m="2460080">going</span> <span
  m="2460210">to</span> <span m="2460280">do</span> <span m="2460510">is</span>
  <span m="2463240">I'm</span> <span m="2463390">going</span> <span
  m="2463540">to</span> <span m="2463620">say</span> <span
  m="2465050">this</span> <span m="2465560">is</span> <span
  m="2465830">the</span> <span m="2465910">same</span> <span
  m="2466450">as--</span> <span m="2467180">I'll</span> <span
  m="2467265">give</span> <span m="2467350">you</span> <span
  m="2467390">the</span> <span m="2467460">first</span> <span
  m="2467750">step,</span> <span m="2468080">and</span> <span
  m="2468190">then</span> <span m="2468310">let's</span> <span
  m="2468500">see</span> <span m="2468670">if</span> <span
  m="2469370">you</span> <span m="2469490">can</span> <span
  m="2469600">help</span> <span m="2469770">me</span> <span
  m="2469890">with</span> <span m="2470090">the</span> <span
  m="2470780">remaining--</span> <span m="2472190">is</span> <span
  m="2472460">the</span> <span m="2472550">same</span> <span
  m="2472890">as</span> <span m="2473140">f</span> <span m="2473256">of</span>
  <span m="2473373">v</span> <span m="2474600">minus</span> <span
  m="2474770">s</span> <span m="2476290">capital</span> <span
  m="2476530">V,</span> <span m="2477790">right?</span> <span
  m="2478960">So</span> <span m="2481280">if</span> <span
  m="2481920">you're</span> <span m="2481990">having</span> <span
  m="2482170">trouble</span> <span m="2482650">differentiating</span> <span
  m="2483310">between</span> <span m="2483590">my</span> <span
  m="2483710">cap</span> <span m="2484070">V's</span> <span
  m="2484440">and</span> <span m="2484480">small</span> <span
  m="2484850">v's,</span> <span m="2485840">holler.</span> <span
  m="2486790">I'm</span> <span m="2486940">trying</span> <span
  m="2487120">to</span> <span m="2487200">write</span> <span
  m="2487370">them</span> <span m="2487510">as</span> <span
  m="2487630">big</span> <span m="2487800">as</span> <span
  m="2487920">possible.</span> <span m="2488700">Yeah?</span></p><p><span
  m="2488960">STUDENT: Could</span> <span m="2489407">you</span> <span
  m="2489518">maybe</span> <span m="2489630">put</span> <span
  m="2489742">little</span> <span m="2489854">hats</span> <span
  m="2490077">on</span> <span m="2490301">the</span> <span
  m="2490750">top</span> <span m="2490830">of</span> <span
  m="2490910">them?</span></p><p><span m="2491050">SRINIVAS DEVADAS: Put</span>
  <span m="2491230">little</span> <span m="2491420">hats</span> <span
  m="2491760">on</span> <span m="2491890">them.</span> <span
  m="2492010">Yes,</span> <span m="2492370">I</span> <span
  m="2492460">will</span> <span m="2492610">put</span> <span
  m="2492830">little</span> <span m="2493030">hats</span> <span
  m="2493290">on</span> <span m="2493420">them.</span> <span
  m="2494330">I'd</span> <span m="2494415">put</span> <span
  m="2494500">little</span> <span m="2494700">Frisbees</span> <span
  m="2495190">on</span> <span m="2495320">them,</span> <span
  m="2495460">if</span> <span m="2495570">I</span> <span
  m="2495630">could,</span> <span m="2496150">but--</span> <span
  m="2498100">I</span> <span m="2498240">like</span> <span
  m="2498480">Frisbees</span> <span m="2498910">much</span> <span
  m="2499130">better</span> <span m="2499310">than</span> <span
  m="2499450">hats.</span> <span m="2502170">All</span> <span
  m="2502340">right.</span> <span m="2502490">That's</span> <span
  m="2502710">good.</span> <span m="2503180">That's</span> <span
  m="2503430">good</span> <span m="2503570">to</span> <span
  m="2503660">do.</span> <span m="2505000">So</span> <span
  m="2506060">yeah.</span> <span m="2507210">So</span> <span
  m="2507590">I</span> <span m="2507710">think,</span> <span
  m="2507910">hopefully,</span> <span m="2508190">I'll</span> <span
  m="2508290">keep</span> <span m="2508440">doing</span> <span
  m="2508620">this,</span> <span m="2509240">and</span> <span
  m="2509700">it</span> <span m="2509830">won't</span> <span
  m="2509980">be</span> <span m="2510040">confusing.</span></p><p><span
  m="2511610">So</span> <span m="2511920">what</span> <span
  m="2512100">I've</span> <span m="2512200">done</span> <span
  m="2512380">here</span> <span m="2513130">is</span> <span
  m="2513390">invoke,</span> <span m="2514460">essentially,</span> <span
  m="2516370">this,</span> <span m="2517020">except</span> <span
  m="2517360">it's</span> <span m="2517480">not</span> <span
  m="2517670">exactly</span> <span m="2518160">that,</span> <span
  m="2519560">in</span> <span m="2520920">the</span> <span
  m="2520990">sense</span> <span m="2521280">that</span> <span
  m="2521490">it's</span> <span m="2521660">written</span> <span
  m="2521900">a</span> <span m="2521950">little</span> <span
  m="2522150">bit</span> <span m="2522280">differently.</span> <span
  m="2523170">But</span> <span m="2523410">if</span> <span
  m="2523490">you</span> <span m="2523570">see</span> <span
  m="2523800">what's</span> <span m="2523970">going</span> <span
  m="2524180">on</span> <span m="2524340">here,</span> <span
  m="2525480">what</span> <span m="2525810">I've</span> <span
  m="2525920">done</span> <span m="2526180">is</span> <span
  m="2529740">look</span> <span m="2530070">at</span> <span
  m="2531030">this</span> <span m="2531490">s,</span> <span
  m="2532560">and</span> <span m="2533570">I've</span> <span
  m="2533820">said,</span> <span m="2534510">think</span> <span
  m="2534690">of</span> <span m="2534810">this</span> <span m="2535080">s</span>
  <span m="2535420">as</span> <span m="2536100">being</span> <span
  m="2537850">cap</span> <span m="2538220">V</span> <span
  m="2539580">minus</span> <span m="2541770">s.</span> <span
  m="2542620">Right?</span> <span m="2542840">So</span> <span
  m="2542960">that</span> <span m="2543110">gives</span> <span m="2543330">you
  s.</span> <span m="2543920">And</span> <span m="2544070">those</span> <span
  m="2544220">are</span> <span m="2544280">clearly</span> <span
  m="2544560">disjoint,</span> <span m="2545510">right?</span> <span
  m="2545820">Those</span> <span m="2546180">are</span> <span
  m="2546230">clearly</span> <span m="2546480">disjoint</span> <span
  m="2546890">sets.</span></p><p><span m="2548430">There</span> <span
  m="2548590">is</span> <span m="2548700">this</span> <span
  m="2548880">one</span> <span m="2549100">and</span> <span
  m="2549240">this</span> <span m="2549380">one</span> <span
  m="2549580">are</span> <span m="2549660">disjoint</span> <span
  m="2550070">sets.</span> <span m="2550680">That's</span> <span
  m="2550870">what</span> <span m="2551000">I</span> <span
  m="2551030">mean</span> <span m="2551190">to</span> <span
  m="2551270">say.</span> <span m="2551530">I</span> <span
  m="2551600">mean,</span> <span m="2551720">these</span> <span
  m="2551910">two</span> <span m="2552020">aren't</span> <span
  m="2552210">disjoint,</span> <span m="2552940">but</span> <span
  m="2553150">this</span> <span m="2553350">and</span> <span
  m="2553460">that</span> <span m="2553680">are</span> <span
  m="2553750">disjoint.</span> <span m="2554510">And</span> <span
  m="2554700">that's</span> <span m="2554840">what</span> <span
  m="2554990">you</span> <span m="2555070">need,</span> <span
  m="2555450">in</span> <span m="2555620">order</span> <span
  m="2555770">to</span> <span m="2555860">invoke</span> <span
  m="2556650">the</span> <span m="2557460">little</span> <span
  m="2558530">property</span> <span m="2558930">that</span> <span
  m="2559070">you</span> <span m="2559170">have</span> <span
  m="2559350">here.</span> <span m="2560220">And</span> <span
  m="2560450">so</span> <span m="2561700">that</span> <span
  m="2561930">all</span> <span m="2562040">make</span> <span
  m="2562190">sense?</span> <span m="2562810">You</span> <span
  m="2562950">see</span> <span m="2563160">why</span> <span m="2563340">I</span>
  <span m="2563390">did</span> <span m="2563550">that?</span> <span
  m="2564020">OK?</span></p><p><span m="2565960">What</span> <span
  m="2566140">can</span> <span m="2566260">I</span> <span m="2566330">say</span>
  <span m="2567320">about</span> <span m="2568420">either</span> <span
  m="2568740">of</span> <span m="2568850">these</span> <span
  m="2569090">two</span> <span m="2569260">quantities?</span> <span
  m="2570260">Can</span> <span m="2570390">I</span> <span m="2570430">say</span>
  <span m="2570580">something</span> <span m="2570890">about</span> <span
  m="2571580">either</span> <span m="2571910">of</span> <span
  m="2572000">these</span> <span m="2572210">two</span> <span
  m="2572340">quantities?</span> <span m="2576560">Yeah?</span></p><p><span
  m="2577286">STUDENT:</span> <span m="2577650">f(V,V)</span> <span
  m="2578086">is</span> <span m="2578522">0.</span></p><p><span
  m="2579300">SRINIVAS DEVADAS:</span> <span m="2579400">f(V,V)</span> <span
  m="2579620">is</span> <span m="2579710">0.</span> <span
  m="2580120">That's</span> <span m="2580260">exactly</span> <span
  m="2580590">right.</span> <span m="2581430">f(V,V)</span> <span
  m="2581860">is</span> <span m="2581980">0.</span> <span
  m="2582510">There</span> <span m="2582890">you</span> <span
  m="2582960">go.</span> <span m="2584916">Yep.</span> <span
  m="2588780">So</span> <span m="2589490">this</span> <span
  m="2589870">is</span> <span m="2590140">simply</span> <span
  m="2592790">I'm</span> <span m="2592940">going</span> <span
  m="2593090">to</span> <span m="2593570">invert</span> <span
  m="2593990">that.</span> <span m="2594910">I'm</span> <span
  m="2595080">going</span> <span m="2595200">to</span> <span
  m="2595260">write</span> <span m="2595440">this</span> <span
  m="2595660">as</span> <span m="2595970">f</span> <span m="2596155">of</span>
  <span m="2596340">V</span> <span m="2598770">hat</span> <span
  m="2600580">minus</span> <span m="2601000">s,</span> <span
  m="2602640">OK?</span> <span m="2603260">I'll</span> <span
  m="2603420">just</span> <span m="2603620">flip</span> <span
  m="2603860">this.</span> <span m="2604090">I</span> <span
  m="2604170">had</span> <span m="2604300">a</span> <span
  m="2604330">negative</span> <span m="2604680">sign</span> <span
  m="2604940">here,</span> <span m="2605200">but</span> <span
  m="2605340">I've</span> <span m="2605440">flipped</span> <span
  m="2605720">that.</span> <span m="2606420">And</span> <span
  m="2607030">skew</span> <span m="2607310">symmetry</span> <span
  m="2607710">tells</span> <span m="2607950">me</span> <span
  m="2608080">I</span> <span m="2608160">can</span> <span m="2608300">do</span>
  <span m="2608400">that,</span> <span m="2609180">right?</span></p><p><span
  m="2613210">All</span> <span m="2613340">right.</span> <span
  m="2614080">So</span> <span m="2614240">I'm</span> <span m="2614390">up</span>
  <span m="2614560">to</span> <span m="2614640">this</span> <span
  m="2614820">point</span> <span m="2615070">here.</span> <span
  m="2616630">Now,</span> <span m="2616820">what</span> <span
  m="2616960">I'm</span> <span m="2617050">going</span> <span
  m="2617180">to</span> <span m="2617250">do</span> <span m="2618420">is</span>
  <span m="2619340">I'm</span> <span m="2619680">going</span> <span
  m="2619930">to</span> <span m="2621090">do</span> <span
  m="2621760">f(V,t).</span> <span m="2624350">And</span> <span
  m="2624490">the</span> <span m="2624550">reason</span> <span
  m="2624800">I</span> <span m="2624860">want</span> <span m="2625010">to</span>
  <span m="2625070">do</span> <span m="2625200">this</span> <span
  m="2625420">is</span> <span m="2625560">because</span> <span
  m="2625780">this</span> <span m="2625920">is</span> <span
  m="2626020">where</span> <span m="2626220">I</span> <span
  m="2626250">want</span> <span m="2626400">to</span> <span
  m="2626460">get</span> <span m="2626630">at,</span> <span
  m="2626840">right?</span> <span m="2627400">Eventually,</span> <span
  m="2627820">I</span> <span m="2627860">want</span> <span m="2627980">to</span>
  <span m="2628040">show</span> <span m="2628230">something</span> <span
  m="2628630">that</span> <span m="2628770">corresponds</span> <span
  m="2629280">to</span> <span m="2629730">f(V,t),</span> <span
  m="2632910">right?</span></p><p><span m="2634710">And</span> <span
  m="2635190">what</span> <span m="2635390">I</span> <span
  m="2635470">have</span> <span m="2635670">here</span> <span
  m="2636050">is</span> <span m="2637250">V,t.</span> <span
  m="2638440">But</span> <span m="2638600">now,</span> <span
  m="2638760">I</span> <span m="2638850">could</span> <span
  m="2639000">do</span> <span m="2639460">plus</span> <span
  m="2640890">f(V,V</span> <span m="2644780">minus--</span> <span
  m="2645700">cap--</span> <span m="2646120">minus</span> <span
  m="2646590">s</span> <span m="2647050">minus t)</span> <span
  m="2648660">right?</span> <span m="2650460">So</span> <span
  m="2650710">what</span> <span m="2650840">I've</span> <span
  m="2650940">done</span> <span m="2651110">here</span> <span
  m="2651380">is</span> <span m="2651550">taken</span> <span
  m="2652250">V</span> <span m="2652490">minus</span> <span m="2652880">s</span>
  <span m="2653860">and</span> <span m="2654300">pulled</span> <span
  m="2654710">out</span> <span m="2654970">t</span> <span
  m="2655190">from</span> <span m="2655430">it.</span> <span
  m="2655580">Remember,</span> <span m="2655830">t</span> <span
  m="2656030">is</span> <span m="2656160">part</span> <span
  m="2656370">of</span> <span m="2656990">cap</span> <span m="2657310">V.</span>
  <span m="2658350">Cap</span> <span m="2658630">V</span> <span
  m="2658970">contains</span> <span m="2659430">all</span> <span
  m="2659650">of</span> <span m="2659730">the</span> <span
  m="2659790">vertices.</span> <span m="2660810">So</span> <span
  m="2660880">I've</span> <span m="2661010">pulled</span> <span
  m="2661240">out</span> <span m="2661870">t</span> <span
  m="2662120">from</span> <span m="2662330">it,</span> <span
  m="2662980">but</span> <span m="2663080">that</span> <span
  m="2663210">implies</span> <span m="2663600">that</span> <span
  m="2663740">I</span> <span m="2663780">have</span> <span m="2663900">to</span>
  <span m="2664540">do a</span> <span m="2664780">V</span> <span
  m="2664980">minus</span> <span m="2665290">s</span> <span
  m="2665470">minus</span> <span m="2665680">t</span> <span
  m="2665920">over</span> <span m="2666040">here.</span> <span
  m="2666750">And</span> <span m="2666880">again,</span> <span
  m="2667070">they're</span> <span m="2667240">disjoint,</span> <span
  m="2668360">so</span> <span m="2669180">it's</span> <span
  m="2669440">all</span> <span m="2669560">good.</span> <span
  m="2672000">What</span> <span m="2672210">can</span> <span
  m="2672340">I</span> <span m="2672420">say</span> <span
  m="2675040">about</span> <span m="2675370">this?</span> <span
  m="2677150">Yeah?</span></p><p><span m="2678040">STUDENT: It's</span> <span
  m="2678485">0</span> <span m="2678930">because</span> <span m="2679417">of
  flow</span> <span m="2679904">conservation?</span></p><p><span
  m="2680880">SRINIVAS DEVADAS: It's</span> <span m="2681090">0</span> <span
  m="2681450">because</span> <span m="2681700">of</span> <span
  m="2681830">flow</span> <span m="2681960">conservation.</span> <span
  m="2682520">That's</span> <span m="2682670">exactly</span> <span
  m="2683070">right.</span> <span m="2683810">We</span> <span
  m="2684310">didn't</span> <span m="2684550">quite</span> <span
  m="2684880">write</span> <span m="2685100">it</span> <span
  m="2685210">that</span> <span m="2685390">way.</span> <span
  m="2686110">But</span> <span m="2686190">if</span> <span
  m="2686270">you</span> <span m="2686380">look</span> <span
  m="2686600">at</span> <span m="2687110">what</span> <span
  m="2687500">the</span> <span m="2687590">implicit</span> <span
  m="2688110">summation</span> <span m="2688810">notation</span> <span
  m="2689770">would</span> <span m="2690070">mean</span> <span
  m="2690380">for</span> <span m="2690590">that,</span> <span
  m="2692120">you</span> <span m="2692210">look</span> <span
  m="2692420">at</span> <span m="2692540">it</span> <span m="2692780">and</span>
  <span m="2692920">you</span> <span m="2693020">say,</span> <span
  m="2694700">maybe</span> <span m="2697380">one</span> <span
  m="2697620">more</span> <span m="2697790">step</span> <span
  m="2698260">would</span> <span m="2698430">be,</span> <span
  m="2699220">let</span> <span m="2699440">me</span> <span
  m="2699570">think</span> <span m="2699810">about</span> <span
  m="2700130">this</span> <span m="2700400">as</span> <span
  m="2700560">being,</span> <span m="2701730">f(V,t).</span> <span
  m="2705202">It'll</span> <span m="2705570">become</span> <span
  m="2705860">more</span> <span m="2706120">obvious</span> <span
  m="2707090">if</span> <span m="2707280">I</span> <span
  m="2707510">write</span> <span m="2707740">it</span> <span
  m="2707860">this</span> <span m="2708060">way.</span> <span
  m="2708720">f(V--</span> <span m="2710130">I'm</span> <span
  m="2710260">putting</span> <span m="2710440">a</span> <span
  m="2710480">minus</span> <span m="2710860">in</span> <span
  m="2710990">here--</span> <span m="2711770">V</span> <span
  m="2712050">minus</span> <span m="2712305">s</span> <span
  m="2712930">minus</span> <span m="2713350">t</span> <span
  m="2714860">and</span> <span m="2715270">cap</span> <span m="2715610">V</span>
  <span m="2715790">again,</span> <span m="2717540">right?</span></p><p><span
  m="2718220">So</span> <span m="2718540">all</span> <span
  m="2718730">I've</span> <span m="2718840">done</span> <span
  m="2719030">here</span> <span m="2719330">is</span> <span
  m="2720000">flip</span> <span m="2720520">these</span> <span
  m="2720790">two.</span> <span m="2721510">Skew</span> <span
  m="2721940">symmetry</span> <span m="2722370">allows</span> <span
  m="2722630">me</span> <span m="2722770">to</span> <span m="2722860">do</span>
  <span m="2723020">that.</span> <span m="2723750">And</span> <span
  m="2723810">now</span> <span m="2724030">look</span> <span
  m="2724200">at</span> <span m="2724270">what</span> <span m="2724400">I</span>
  <span m="2724480">have</span> <span m="2724700">here.</span> <span
  m="2725340">I'm</span> <span m="2725560">talking</span> <span
  m="2725910">about</span> <span m="2726100">a</span> <span
  m="2726160">flow</span> <span m="2727390">that</span> <span
  m="2727660">corresponds</span> <span m="2728280">to</span> <span
  m="2728460">some--</span> <span m="2730750">for</span> <span
  m="2731000">any</span> <span m="2732270">vertex,</span> <span
  m="2733350">I</span> <span m="2733690">pick--</span> <span
  m="2734330">and</span> <span m="2734480">it's</span> <span
  m="2734610">not</span> <span m="2734900">an</span> <span m="2735010">s</span>
  <span m="2735290">vertex,</span> <span m="2735790">it's</span> <span
  m="2735940">not</span> <span m="2736120">a</span> <span m="2736180">t</span>
  <span m="2736480">vertex,</span> <span m="2736540">so</span> <span
  m="2736970">it's</span> <span m="2737000">an</span> <span
  m="2737070">intermediate</span> <span m="2737650">vertex.</span> <span
  m="2738520">And</span> <span m="2738670">if</span> <span m="2738730">I</span>
  <span m="2738790">look</span> <span m="2738940">at</span> <span
  m="2739000">an</span> <span m="2739060">intermediate</span> <span
  m="2739560">vertex</span> <span m="2740050">and</span> <span
  m="2740170">look</span> <span m="2740340">at</span> <span
  m="2740460">the</span> <span m="2741160">flow</span> <span
  m="2742210">that</span> <span m="2742590">goes</span> <span
  m="2742960">out</span> <span m="2743190">to</span> <span
  m="2743280">all</span> <span m="2743650">vertices,</span> <span
  m="2745720">conservation</span> <span m="2746290">says</span> <span
  m="2746530">that</span> <span m="2746670">has</span> <span
  m="2746810">to</span> <span m="2746880">be</span> <span m="2746960">0,</span>
  <span m="2747990">right?</span></p><p><span m="2748720">So</span> <span
  m="2749050">that's</span> <span m="2749230">exactly</span> <span
  m="2749530">what</span> <span m="2749680">this</span> <span
  m="2749810">says.</span> <span m="2751540">For</span> <span
  m="2751760">any</span> <span m="2752110">u</span> <span
  m="2754310">that's</span> <span m="2754540">neither</span> <span
  m="2754800">s</span> <span m="2755020">nor</span> <span m="2755170">t</span>
  <span m="2755390">but</span> <span m="2755540">in</span> <span
  m="2755690">V,</span> <span m="2756780">the</span> <span
  m="2757190">sum</span> <span m="2757540">has</span> <span
  m="2757700">to</span> <span m="2757780">be</span> <span m="2757850">0.</span>
  <span m="2758810">So</span> <span m="2759010">this</span> <span
  m="2759310">is</span> <span m="2759450">zero,</span> <span
  m="2760250">and</span> <span m="2760400">we're</span> <span
  m="2760510">done.</span> <span m="2762760">All right.</span></p><p><span
  m="2765110">Oh,</span> <span m="2765220">you--</span> <span m="2765390">a
  Frisbee?</span> <span m="2765830">Who</span> <span m="2765995">is</span> <span
  m="2766160">that?</span> <span m="2767340">Ah.</span> <span
  m="2767600">Here.</span></p><p><span m="2770800">So</span> <span
  m="2770960">that's</span> <span m="2771490">the</span> <span
  m="2771600">power</span> <span m="2772660">of</span> <span
  m="2773690">implicit</span> <span m="2774270">summation</span> <span
  m="2774720">notation.</span> <span m="2775720">So</span> <span
  m="2776030">we</span> <span m="2776990">could</span> <span
  m="2777190">invoke</span> <span m="2778640">these</span> <span
  m="2778980">different</span> <span m="2779250">properties.</span> <span
  m="2779740">It</span> <span m="2779810">was</span> <span
  m="2780270">fairly</span> <span m="2780610">straightforward.</span> <span
  m="2781500">Your</span> <span m="2781650">first</span> <span
  m="2781890">example</span> <span m="2782300">of</span> <span
  m="2782400">this.</span> <span m="2782920">You'll</span> <span
  m="2783080">probably</span> <span m="2783310">see</span> <span
  m="2783490">a</span> <span m="2783540">few</span> <span
  m="2783710">more.</span> <span m="2784550">All</span> <span
  m="2784630">right?</span> <span m="2785560">Any</span> <span
  m="2785720">questions</span> <span m="2786070">so far?</span> <span
  m="2789940">OK.</span></p><p><span m="2790950">So</span> <span
  m="2792010">as</span> <span m="2792180">you</span> <span
  m="2792240">can</span> <span m="2792360">see,</span> <span
  m="2793240">as</span> <span m="2793610">I</span> <span
  m="2793670">promised,</span> <span m="2794430">or</span> <span
  m="2794870">threatened</span> <span m="2795390">at</span> <span
  m="2795460">the</span> <span m="2795530">beginning,</span> <span
  m="2795890">but</span> <span m="2796370">followed</span> <span
  m="2796840">through</span> <span m="2797030">on</span> <span
  m="2797120">my</span> <span m="2797240">threat,</span> <span
  m="2798870">we</span> <span m="2799090">have</span> <span m="2799250">a</span>
  <span m="2799290">lot</span> <span m="2799450">of</span> <span
  m="2799520">notation,</span> <span m="2799620">a</span> <span
  m="2800030">lot</span> <span m="2800230">of</span> <span
  m="2800490">baggage</span> <span m="2801030">here</span> <span
  m="2801700">before</span> <span m="2802060">we</span> <span
  m="2802160">get</span> <span m="2802310">to</span> <span
  m="2802400">algorithms.</span> <span m="2803500">But</span> <span
  m="2803660">we're</span> <span m="2803770">slowly</span> <span
  m="2804110">getting</span> <span m="2804360">there.</span></p><p><span
  m="2805500">The</span> <span m="2805560">next</span> <span
  m="2806050">major</span> <span m="2806580">concept</span> <span
  m="2807680">is</span> <span m="2808070">the</span> <span
  m="2808160">concept</span> <span m="2808560">of</span> <span
  m="2808690">cuts.</span> <span m="2810070">So</span> <span
  m="2810450">a</span> <span m="2810560">cut,</span> <span
  m="2811290">you</span> <span m="2811450">think</span> <span
  m="2811630">of</span> <span m="2811710">a</span> <span m="2811760">cut</span>
  <span m="2812070">as</span> <span m="2812220">being,</span> <span
  m="2813440">well,</span> <span m="2813690">a</span> <span
  m="2813730">cut</span> <span m="2814050">through</span> <span
  m="2814260">paper,</span> <span m="2814870">a</span> <span
  m="2815130">cut</span> <span m="2815440">through</span> <span
  m="2815620">the</span> <span m="2815700">air,</span> <span
  m="2816100">whatever.</span> <span m="2816950">It</span> <span
  m="2817170">turns</span> <span m="2817420">out</span> <span
  m="2817690">that</span> <span m="2817870">notion</span> <span
  m="2818150">of</span> <span m="2818230">a</span> <span m="2818280">cut</span>
  <span m="2818990">in</span> <span m="2819160">a</span> <span
  m="2819200">network</span> <span m="2819860">is</span> <span
  m="2820060">more</span> <span m="2820270">general</span> <span
  m="2820680">than</span> <span m="2820820">that,</span> <span
  m="2821530">right?</span> <span m="2821770">A</span> <span
  m="2821820">cut</span> <span m="2822100">is</span> <span
  m="2822240">basically</span> <span m="2822750">a</span> <span
  m="2822820">partition.</span> <span m="2824220">A</span> <span
  m="2824300">cut</span> <span m="2824650">is</span> <span m="2824780">a</span>
  <span m="2824830">partition</span> <span m="2825410">of</span> <span
  m="2825560">nodes.</span> <span m="2826490">And</span> <span
  m="2826640">a</span> <span m="2826670">partition</span> <span
  m="2827130">means</span> <span m="2827400">that</span> <span
  m="2827750">you</span> <span m="2827910">can't</span> <span
  m="2828150">have</span> <span m="2828700">a</span> <span
  m="2828800">node</span> <span m="2829100">in</span> <span
  m="2829230">both</span> <span m="2829540">sides,</span> <span
  m="2830310">right?</span> <span m="2830550">So</span> <span
  m="2830800">a</span> <span m="2830890">cut</span> <span m="2831500">is</span>
  <span m="2831950">going</span> <span m="2832220">to</span> <span
  m="2832280">give</span> <span m="2832390">you</span> <span
  m="2832510">two</span> <span m="2832720">disjoint</span> <span
  m="2834350">components</span> <span m="2835470">at</span> <span
  m="2835680">the</span> <span m="2835750">end</span> <span
  m="2835920">of</span> <span m="2836020">it.</span></p><p><span
  m="2836500">But</span> <span m="2836700">the</span> <span
  m="2836760">cut</span> <span m="2837010">doesn't</span> <span
  m="2837280">have</span> <span m="2837510">to</span> <span
  m="2837600">be</span> <span m="2837860">something</span> <span
  m="2838200">contiguous.</span> <span m="2838810">It</span> <span
  m="2838880">doesn't</span> <span m="2839100">have</span> <span
  m="2839300">to</span> <span m="2839380">be</span> <span m="2840080">a</span>
  <span m="2840240">line</span> <span m="2840600">through</span> <span
  m="2840790">the</span> <span m="2840870">network.</span> <span
  m="2841590">And</span> <span m="2841760">everything</span> <span
  m="2842100">to</span> <span m="2842200">the</span> <span
  m="2842290">left</span> <span m="2842570">of</span> <span
  m="2842670">the</span> <span m="2842740">line</span> <span
  m="2843170">is</span> <span m="2844600">in</span> <span m="2844690">one</span>
  <span m="2844900">half</span> <span m="2845110">of</span> <span
  m="2845190">the</span> <span m="2845260">cut,</span> <span
  m="2845870">and</span> <span m="2846060">everything</span> <span
  m="2846380">on</span> <span m="2846490">the</span> <span
  m="2846690">right</span> <span m="2846940">of</span> <span
  m="2847010">the</span> <span m="2847080">line</span> <span
  m="2847380">is</span> <span m="2847490">in</span> <span m="2847570">a</span>
  <span m="2847610">different</span> <span m="2847890">half</span> <span
  m="2848100">of</span> <span m="2848180">the</span> <span
  m="2848250">cut.</span> <span m="2849460">I</span> <span
  m="2849600">can</span> <span m="2849730">just</span> <span
  m="2850040">break</span> <span m="2850410">up</span> <span
  m="2850550">these</span> <span m="2850770">nodes</span> <span
  m="2851790">into</span> <span m="2852110">two</span> <span
  m="2852430">disjoint</span> <span m="2853020">parts.</span> <span
  m="2853980">And</span> <span m="2854220">the</span> <span
  m="2854290">only</span> <span m="2854590">constraint</span> <span
  m="2855180">that</span> <span m="2855300">I'm</span> <span
  m="2855400">going</span> <span m="2855580">to</span> <span
  m="2855670">ask</span> <span m="2856000">for</span> <span
  m="2856780">is</span> <span m="2858980">that</span> <span
  m="2859260">s,</span> <span m="2859800">which</span> <span
  m="2860000">is</span> <span m="2860100">the</span> <span
  m="2860180">source,</span> <span m="2861020">is</span> <span
  m="2861220">on</span> <span m="2861370">one</span> <span
  m="2861620">side</span> <span m="2862070">of</span> <span
  m="2862150">the</span> <span m="2862220">cut,</span> <span
  m="2863080">and</span> <span m="2863330">t,</span> <span
  m="2863990">which</span> <span m="2864180">is</span> <span
  m="2864300">the</span> <span m="2864370">sink,</span> <span
  m="2864790">is</span> <span m="2864950">another</span> <span
  m="2865360">side</span> <span m="2865670">of</span> <span
  m="2865750">the</span> <span m="2865810">cut,</span> <span
  m="2866660">OK?</span> <span m="2867110">That's</span> <span
  m="2867410">it.</span></p><p><span m="2868640">And</span> <span
  m="2869530">given</span> <span m="2869930">that,</span> <span
  m="2870740">I'm</span> <span m="2871080">going</span> <span
  m="2871300">to</span> <span m="2871460">say</span> <span
  m="2871720">interesting</span> <span m="2872190">things,</span> <span
  m="2872730">really</span> <span m="2873170">interesting</span> <span
  m="2873520">things,</span> <span m="2874230">about</span> <span
  m="2874920">the</span> <span m="2875030">flow</span> <span
  m="2876040">through</span> <span m="2876210">a</span> <span
  m="2876270">cut,</span> <span m="2877130">OK?</span> <span
  m="2878180">And</span> <span m="2878410">so</span> <span
  m="2878540">let's</span> <span m="2878750">do</span> <span
  m="2878860">that.</span> <span m="2879870">Let's</span> <span
  m="2880080">define</span> <span m="2880500">a</span> <span
  m="2880550">cut.</span></p><p><span m="2902840">So</span> <span
  m="2904820">a</span> <span m="2904880">cut</span> <span m="2907770">is</span>
  <span m="2908240">(S,T)</span> <span m="2914790">of</span> <span
  m="2914935">a</span> <span m="2915080">flow</span> <span
  m="2915640">network,</span> <span m="2917640">G,</span> <span
  m="2921850">is</span> <span m="2922050">a</span> <span
  m="2922110">partition</span> <span m="2927960">of</span> <span
  m="2928340">V,</span> <span m="2929630">such</span> <span
  m="2929930">that</span> <span m="2930090">small</span> <span
  m="2930550">s</span> <span m="2931020">belongs</span> <span
  m="2931460">to</span> <span m="2931600">cap</span> <span m="2932096">S,</span>
  <span m="2933640">and</span> <span m="2934500">small</span> <span
  m="2934910">t</span> <span m="2935770">belongs</span> <span
  m="2936110">to</span> <span m="2936180">cap</span> <span m="2936435">T.</span>
  <span m="2939530">I</span> <span m="2939640">don't</span> <span
  m="2939730">know.</span> <span m="2939820">Do</span> <span
  m="2939900">you</span> <span m="2939960">want</span> <span
  m="2940160">hats</span> <span m="2940490">on</span> <span
  m="2940600">the</span> <span m="2940670">T</span> <span
  m="2940920">too?</span> <span m="2945890">I'll</span> <span
  m="2946140">just</span> <span m="2946230">write</span> <span
  m="2946420">them</span> <span m="2946560">large.</span> <span
  m="2948550">If</span> <span m="2948810">a</span> <span m="2949050">flow</span>
  <span m="2950990">on</span> <span m="2951240">G--</span> <span
  m="2953270">if</span> <span m="2953430">f</span> <span m="2953620">is</span>
  <span m="2953750">a</span> <span m="2953800">flow</span> <span
  m="2954070">on</span> <span m="2954180">G,</span> <span
  m="2963930">then</span> <span m="2964100">the</span> <span
  m="2964170">flow</span> <span m="2964660">across</span> <span
  m="2965110">the</span> <span m="2965200">cut</span> <span
  m="2970460">is</span> <span m="2970810">f(S,T).</span> <span
  m="2975290">OK?</span></p><p><span m="2977440">So</span> <span
  m="2977760">again,</span> <span m="2978250">implicit</span> <span
  m="2978860">summation</span> <span m="2979300">notation</span> <span
  m="2979730">here.</span> <span m="2980770">The</span> <span
  m="2980840">flow</span> <span m="2981250">across</span> <span
  m="2981660">the</span> <span m="2981750">cut</span> <span
  m="2982660">is</span> <span m="2983380">as</span> <span m="2983580">the</span>
  <span m="2983680">sum</span> <span m="2984860">of</span> <span
  m="2985160">the</span> <span m="2985230">flows</span> <span
  m="2986780">corresponding</span> <span m="2987410">to</span> <span
  m="2988080">each</span> <span m="2988570">pair</span> <span
  m="2989070">of</span> <span m="2989210">vertices,</span> <span
  m="2990200">such</span> <span m="2990550">that</span> <span
  m="2991770">the</span> <span m="2992440">source</span> <span
  m="2992860">vertex</span> <span m="2993670">is</span> <span
  m="2993850">part</span> <span m="2994070">of</span> <span
  m="2994160">capital</span> <span m="2994590">S.</span> <span
  m="2995360">And</span> <span m="2995800">the</span> <span
  m="2996180">destination</span> <span m="2996850">vertex</span> <span
  m="2997760">is</span> <span m="2998210">part</span> <span
  m="2998450">of</span> <span m="2998570">capital</span> <span
  m="2998910">T.</span> <span m="2999750">All</span> <span
  m="2999860">right?</span> <span m="3000570">That's</span> <span
  m="3000770">it.</span> <span m="3001550">I'm</span> <span
  m="3001840">just</span> <span m="3001980">going</span> <span
  m="3002100">to</span> <span m="3002160">add</span> <span
  m="3002270">them</span> <span m="3002380">all</span> <span
  m="3002520">up.</span> <span m="3003430">That's</span> <span
  m="3003630">the</span> <span m="3003700">flow</span> <span
  m="3003980">across</span> <span m="3004290">the</span> <span
  m="3004360">cut.</span></p><p><span m="3009090">So</span> <span
  m="3009300">what</span> <span m="3009420">I</span> <span
  m="3009470">can</span> <span m="3009600">do</span> <span
  m="3009760">now</span> <span m="3010600">is</span> <span
  m="3010800">just</span> <span m="3011030">talk</span> <span
  m="3011290">about--</span> <span m="3012020">let's</span> <span
  m="3012190">just</span> <span m="3012320">go</span> <span
  m="3012460">up</span> <span m="3012580">here</span> <span
  m="3013530">back</span> <span m="3013740">to</span> <span
  m="3013830">this.</span> <span m="3016460">And</span> <span
  m="3016880">I'm</span> <span m="3017020">going</span> <span
  m="3017250">to</span> <span m="3019660">look</span> <span
  m="3020030">at</span> <span m="3020680">exactly</span> <span
  m="3021260">what</span> <span m="3021420">I</span> <span
  m="3021500">have</span> <span m="3021700">here.</span> <span
  m="3023010">Is</span> <span m="3023230">that</span> <span
  m="3023380">right?</span> <span m="3024530">Not</span> <span
  m="3025060">exactly.</span> <span m="3026050">I'm</span> <span
  m="3026170">going</span> <span m="3026290">to</span> <span
  m="3026350">change</span> <span m="3026690">this</span> <span
  m="3026840">a</span> <span m="3026910">little</span> <span
  m="3027300">bit,</span> <span m="3028370">because</span> <span
  m="3028550">I</span> <span m="3030340">want</span> <span m="3030530">to</span>
  <span m="3030590">make</span> <span m="3030750">sure</span> <span
  m="3031680">I</span> <span m="3031770">don't</span> <span
  m="3031920">have</span> <span m="3032030">to</span> <span
  m="3032110">add</span> <span m="3032320">up</span> <span
  m="3032440">numbers</span> <span m="3035530">and</span> <span
  m="3035770">do</span> <span m="3035910">that</span> <span
  m="3036090">incorrectly.</span> <span m="3037730">So</span> <span
  m="3038940">I</span> <span m="3039120">need</span> <span m="3039320">a</span>
  <span m="3039780">1.</span> <span m="3042820">Yup.</span> <span
  m="3043150">That's</span> <span m="3043370">all</span> <span
  m="3043530">I</span> <span m="3043610">need</span> <span m="3043800">to</span>
  <span m="3043890">do</span> <span m="3044910">is</span> <span
  m="3044980">change</span> <span m="3045350">it.</span></p><p><span
  m="3048030">So</span> <span m="3048120">I'm</span> <span
  m="3048210">going</span> <span m="3048330">to</span> <span
  m="3048390">change</span> <span m="3048830">our</span> <span
  m="3048940">example</span> <span m="3049410">here,</span> <span
  m="3049820">not</span> <span m="3050090">the</span> <span
  m="3050200">topology</span> <span m="3050850">of</span> <span
  m="3050950">the</span> <span m="3051010">example,</span> <span
  m="3052550">but</span> <span m="3054530">the</span> <span
  m="3054710">actual</span> <span m="3055090">numbers.</span> <span
  m="3055570">And</span> <span m="3055830">you'll</span> <span
  m="3056010">need</span> <span m="3056160">to</span> <span
  m="3056230">verify</span> <span m="3058250">that</span> <span
  m="3058450">what</span> <span m="3058600">I</span> <span
  m="3058670">have</span> <span m="3058910">here</span> <span
  m="3060020">satisfies</span> <span m="3061420">our</span> <span
  m="3061600">flow</span> <span m="3061830">network</span> <span
  m="3062170">properties.</span> <span m="3064150">And</span> <span
  m="3067150">there's</span> <span m="3067390">one</span> <span
  m="3067570">more.</span> <span m="3073650">OK?</span> <span
  m="3074910">So</span> <span m="3075090">I</span> <span
  m="3075140">think</span> <span m="3075290">I'm</span> <span
  m="3075380">good.</span> <span m="3076830">All</span> <span
  m="3076960">right.</span></p><p><span m="3077750">So</span> <span
  m="3078890">this</span> <span m="3079110">is</span> <span
  m="3079690">going</span> <span m="3080040">to</span> <span
  m="3080100">be</span> <span m="3080210">an</span> <span
  m="3080280">example</span> <span m="3081790">of</span> <span
  m="3082270">a</span> <span m="3082320">cut.</span> <span m="3082990">I</span>
  <span m="3083120">haven't</span> <span m="3083320">defined</span> <span
  m="3083660">the</span> <span m="3083720">cut</span> <span
  m="3083990">yet.</span> <span m="3087840">Let's</span> <span
  m="3088030">get</span> <span m="3088170">rid</span> <span
  m="3088290">of</span> <span m="3088370">that.</span> <span
  m="3090510">Holler</span> <span m="3090910">if</span> <span
  m="3091110">you</span> <span m="3091240">think</span> <span
  m="3091460">there's</span> <span m="3091580">something</span> <span
  m="3091870">wrong</span> <span m="3092700">with</span> <span
  m="3092910">this</span> <span m="3093010">flow.</span> <span
  m="3094000">All</span> <span m="3094120">right?</span> <span
  m="3094410">I</span> <span m="3094426">think</span> <span m="3094443">I</span>
  <span m="3094460">got</span> <span m="3094620">it</span> <span
  m="3094720">right.</span> <span m="3095550">It</span> <span
  m="3095790">satisfies</span> <span m="3097140">capacity</span> <span
  m="3097620">constraints.</span> <span m="3098610">It</span> <span
  m="3098760">satisfies</span> <span m="3099520">flow</span> <span
  m="3099780">conservation</span> <span
  m="3100320">constraints.</span></p><p><span m="3101650">The</span> <span
  m="3101840">flow</span> <span m="3102150">that</span> <span
  m="3102280">is</span> <span m="3102380">going</span> <span
  m="3102600">into</span> <span m="3102830">t</span> <span m="3103680">is</span>
  <span m="3104000">4.</span> <span m="3104490">This</span> <span
  m="3104660">happens</span> <span m="3104950">to</span> <span
  m="3105030">be</span> <span m="3105140">a</span> <span m="3105200">max</span>
  <span m="3105460">flow.</span> <span m="3106180">Doesn't</span> <span
  m="3106470">really</span> <span m="3106640">matter.</span> <span
  m="3107440">So</span> <span m="3108210">what</span> <span
  m="3108510">we're</span> <span m="3108600">going</span> <span
  m="3108720">to</span> <span m="3108950">talk</span> <span
  m="3109220">about</span> <span m="3109520">with</span> <span
  m="3109670">respect</span> <span m="3109980">to</span> <span
  m="3110050">cuts,</span> <span m="3110970">it</span> <span
  m="3111220">doesn't</span> <span m="3111540">require</span> <span
  m="3112240">the</span> <span m="3112410">flow</span> <span
  m="3112640">to</span> <span m="3112720">be</span> <span
  m="3112820">maximum.</span> <span m="3113730">Keep</span> <span
  m="3113900">that</span> <span m="3114030">in</span> <span
  m="3114100">mind.</span></p><p><span m="3116000">What</span> <span
  m="3116290">do</span> <span m="3116420">I</span> <span m="3116520">mean</span>
  <span m="3117580">by</span> <span m="3118650">the</span> <span
  m="3118880">flow</span> <span m="3119280">across</span> <span
  m="3119580">a</span> <span m="3119660">cut</span> <span m="3120250">via</span>
  <span m="3120700">an</span> <span m="3120830">example?</span> <span
  m="3122270">I'm</span> <span m="3122520">going</span> <span
  m="3122740">to</span> <span m="3123570">simply</span> <span
  m="3124120">say</span> <span m="3125540">that</span> <span
  m="3127770">the</span> <span m="3127940">shaded</span> <span
  m="3128390">nodes,</span> <span m="3131000">two</span> <span
  m="3131250">of</span> <span m="3131340">them,</span> <span
  m="3132090">are</span> <span m="3132270">part</span> <span
  m="3132510">of</span> <span m="3132610">capital</span> <span
  m="3133060">S,</span> <span m="3134210">OK?</span> <span m="3147160">So</span>
  <span m="3147620">as</span> <span m="3147760">you</span> <span
  m="3147820">can</span> <span m="3147940">see,</span> <span
  m="3148240">I</span> <span m="3148360">just</span> <span
  m="3148770">arbitrarily</span> <span m="3149280">picked</span> <span
  m="3150150">a</span> <span m="3150280">couple</span> <span
  m="3150520">of</span> <span m="3150590">nodes.</span> <span
  m="3151560">And</span> <span m="3152030">that</span> <span
  m="3152280">not</span> <span m="3152490">necessarily</span> <span
  m="3153010">something</span> <span m="3153360">that</span> <span
  m="3153500">can</span> <span m="3153640">be</span> <span
  m="3153780">easily</span> <span m="3154880">partitioned</span> <span
  m="3155510">using</span> <span m="3155850">an</span> <span
  m="3156000">actual</span> <span m="3156650">cut</span> <span
  m="3156950">line,</span> <span m="3157250">a</span> <span
  m="3157310">physical</span> <span m="3157690">cut</span> <span
  m="3157900">line.</span> <span m="3158550">I</span> <span
  m="3158670">just</span> <span m="3158850">picked</span> <span
  m="3159050">that</span> <span m="3159330">one</span> <span
  m="3159610">over</span> <span m="3159770">there</span> <span
  m="3160530">and</span> <span m="3160820">the</span> <span
  m="3160890">one</span> <span m="3161090">over</span> <span
  m="3161250">here</span> <span m="3161620">with</span> <span
  m="3161780">S.</span></p><p><span m="3163050">And</span> <span
  m="3163280">so,</span> <span m="3164290">I</span> <span m="3164700">can</span>
  <span m="3164850">now</span> <span m="3167000">look</span> <span
  m="3167270">at</span> <span m="3167360">this,</span> <span
  m="3168850">and</span> <span m="3169500">I</span> <span m="3169850">can</span>
  <span m="3170980">compute</span> <span m="3172230">numerically,</span> <span
  m="3173150">for</span> <span m="3173340">this</span> <span
  m="3173480">example.</span> <span m="3174020">And</span> <span
  m="3174100">it's</span> <span m="3174180">worth</span> <span
  m="3174460">doing</span> <span m="3175300">at</span> <span
  m="3175440">least</span> <span m="3175660">once</span> <span
  m="3176820">what</span> <span m="3177170">the</span> <span
  m="3177240">flow</span> <span m="3177690">across</span> <span
  m="3178160">this</span> <span m="3178480">particular</span> <span
  m="3178860">cut</span> <span m="3179220">is,</span> <span
  m="3180010">defined</span> <span m="3180610">by</span> <span
  m="3180810">the</span> <span m="3180910">particular</span> <span
  m="3181360">choice</span> <span m="3182540">of</span> <span
  m="3182760">cap</span> <span m="3183145">S</span> <span m="3184050">and</span>
  <span m="3184260">cap</span> <span m="3184715">T,</span> <span
  m="3186080">OK?</span> <span m="3187430">And</span> <span
  m="3187810">that's</span> <span m="3187950">what</span> <span
  m="3188070">we're</span> <span m="3188150">going</span> <span
  m="3188270">to</span> <span m="3188330">do.</span></p><p><span
  m="3190410">So</span> <span m="3192490">f(S,T)</span> <span
  m="3197610">is--</span> <span m="3199620">I'm</span> <span
  m="3199780">going</span> <span m="3199900">to</span> <span
  m="3199960">have</span> <span m="3200170">to</span> <span
  m="3200270">look</span> <span m="3200560">at</span> <span
  m="3201910">pairs</span> <span m="3202360">of</span> <span
  m="3202500">nodes,</span> <span m="3203100">such</span> <span
  m="3203440">that</span> <span m="3204000">I've</span> <span
  m="3204130">got</span> <span m="3204320">a</span> <span
  m="3204620">shaded</span> <span m="3205140">node</span> <span
  m="3205510">on</span> <span m="3205850">the</span> <span
  m="3206160">left-hand</span> <span m="3206660">side</span> <span
  m="3207530">and</span> <span m="3208340">non-shaded</span> <span
  m="3209000">node</span> <span m="3209320">on</span> <span
  m="3209460">the</span> <span m="3209540">right-hand</span> <span
  m="3209830">side.</span> <span m="3210330">And</span> <span
  m="3210370">I'm</span> <span m="3210450">going</span> <span
  m="3210570">to</span> <span m="3210630">have</span> <span
  m="3210740">to</span> <span m="3210810">go</span> <span
  m="3210950">through</span> <span m="3211260">all</span> <span
  m="3211610">of</span> <span m="3211740">the</span> <span
  m="3213500">combinations,</span> <span m="3214850">right?</span></p><p><span
  m="3215090">So</span> <span m="3216430">if</span> <span m="3216640">I</span>
  <span m="3216700">look</span> <span m="3216870">at</span> <span
  m="3216970">this,</span> <span m="3217870">I</span> <span
  m="3217950">can</span> <span m="3218080">first</span> <span
  m="3218540">knock</span> <span m="3218840">off</span> <span
  m="3219860">this</span> <span m="3220270">one,</span> <span
  m="3220510">and</span> <span m="3220640">that</span> <span
  m="3220810">one,</span> <span m="3221160">and</span> <span
  m="3221310">that</span> <span m="3221480">one.</span> <span
  m="3222650">Let</span> <span m="3222810">me</span> <span
  m="3224720">actually</span> <span m="3225090">put</span> <span
  m="3225590">in--</span> <span m="3226590">let's</span> <span
  m="3226750">call</span> <span m="3226930">this</span> <span
  m="3227150">a,</span> <span m="3227870">b,</span> <span m="3229640">and</span>
  <span m="3229840">c</span> <span m="3230150">here.</span> <span
  m="3230740">And</span> <span m="3230920">we</span> <span
  m="3230990">can</span> <span m="3231090">call</span> <span
  m="3231310">that</span> <span m="3231950">d.</span> <span
  m="3233680">So</span> <span m="3234040">we</span> <span
  m="3234140">have</span> <span m="3234320">s</span> <span m="3234570">and
  d</span> <span m="3234830">as</span> <span m="3235090">being</span> <span
  m="3235300">part</span> <span m="3235530">of</span> <span
  m="3235600">the</span> <span m="3235670">cut,</span> <span
  m="3236280">in</span> <span m="3236410">terms</span> <span
  m="3236620">of</span> <span m="3236730">s,</span> <span
  m="3237380">capital</span> <span m="3237460">S.</span> <span
  m="3238130">And</span> <span m="3238260">the</span> <span
  m="3238320">other</span> <span m="3238450">ones</span> <span
  m="3238660">are</span> <span m="3238770">in</span> <span
  m="3239250">cap</span> <span m="3239680">T.</span></p><p><span
  m="3241450">And</span> <span m="3241650">so</span> <span
  m="3242050">what</span> <span m="3242210">I</span> <span
  m="3242270">have</span> <span m="3242610">is</span> <span m="3242890">I</span>
  <span m="3243310">could</span> <span m="3243440">do</span> <span
  m="3243590">Sa</span> <span m="3244135">and</span> <span
  m="3244380">Sb.</span> <span m="3245330">So</span> <span
  m="3245510">I've</span> <span m="3245550">got</span> <span
  m="3245750">2</span> <span m="3245990">plus</span> <span m="3246290">2,</span>
  <span m="3247620">all</span> <span m="3247930">right?</span> <span
  m="3248170">And</span> <span m="3248290">this</span> <span
  m="3248410">would</span> <span m="3248520">correspond</span> <span
  m="3249020">to</span> <span m="3249790">Sa</span> <span m="3250420">and</span>
  <span m="3250810">Sb.</span> <span m="3252230">So</span> <span
  m="3252420">those</span> <span m="3252870">are</span> <span
  m="3252930">going</span> <span m="3253130">out,</span> <span
  m="3253770">right?</span> <span m="3254030">So</span> <span
  m="3254300">far,</span> <span m="3254450">so</span> <span
  m="3254590">good.</span> <span m="3255620">And</span> <span
  m="3256070">then,</span> <span m="3257110">I'm</span> <span
  m="3257180">going</span> <span m="3257300">to</span> <span
  m="3257360">write</span> <span m="3257510">out</span> <span
  m="3257630">a</span> <span m="3257670">bunch</span> <span
  m="3257880">of</span> <span m="3257950">numbers</span> <span
  m="3258260">here,</span> <span m="3259170">minus</span> <span
  m="3259620">2</span> <span m="3260020">plus</span> <span m="3260280">1</span>
  <span m="3261160">minus</span> <span m="3261500">1</span> <span
  m="3261850">plus</span> <span m="3262150">2.</span></p><p><span
  m="3264260">And</span> <span m="3264900">the</span> <span
  m="3265260">minus</span> <span m="3265650">2,</span> <span
  m="3265830">where</span> <span m="3266050">would</span> <span
  m="3266130">the</span> <span m="3266200">minus</span> <span
  m="3266550">2</span> <span m="3266710">come</span> <span
  m="3266910">from?</span> <span m="3269640">Well,</span> <span
  m="3270460">an</span> <span m="3270750">a,d,</span> <span
  m="3271430">for</span> <span m="3271580">example,</span> <span
  m="3272770">is</span> <span m="3273440">a</span> <span
  m="3273480">minus</span> <span m="3273880">2,</span> <span
  m="3274160">right?</span> <span m="3274970">Because</span> <span
  m="3275550">d</span> <span m="3275890">is</span> <span m="3276040">part</span>
  <span m="3276260">of--</span> <span m="3276420">it</span> <span
  m="3276560">would</span> <span m="3276670">be</span> <span m="3276780">d,
  a.</span> <span m="3277940">So</span> <span m="3279080">a,</span> <span
  m="3279330">d</span> <span m="3280646">has</span> <span m="3281120">a</span>
  <span m="3281170">flow</span> <span m="3281460">of</span> <span
  m="3281590">2,</span> <span m="3282360">correct?</span> <span
  m="3283580">And</span> <span m="3283900">so</span> <span m="3284050">d,
  a</span> <span m="3284530">has</span> <span m="3284700">a</span> <span
  m="3284750">flow</span> <span m="3284970">of</span> <span
  m="3285070">minus</span> <span m="3285430">2,</span> <span
  m="3286260">right?</span> <span m="3286560">And</span> <span m="3286790">d,
  a</span> <span m="3287160">is</span> <span m="3287300">part</span> <span
  m="3287530">of</span> <span m="3287620">what</span> <span m="3287780">I</span>
  <span m="3287860">have</span> <span m="3288050">here,</span> <span
  m="3288280">because</span> <span m="3288540">d</span> <span
  m="3288690">is</span> <span m="3288830">part</span> <span
  m="3289030">of</span> <span m="3289120">capital</span> <span
  m="3289440">S,</span> <span m="3290180">and</span> <span m="3290370">A
  is</span> <span m="3290680">part</span> <span m="3290890">of</span> <span
  m="3290970">capital</span> <span m="3291330">T.</span> <span
  m="3292430">You</span> <span m="3292510">guys</span> <span
  m="3292640">see</span> <span m="3292750">that?</span> <span m="3292990">So
  this</span> <span m="3293480">is</span> <span m="3293600">not</span> <span
  m="3294090">trivial,</span> <span m="3294620">so</span> <span
  m="3295160">pay</span> <span m="3295290">attention.</span></p><p><span
  m="3297670">So</span> <span m="3297870">this</span> <span
  m="3298090">would</span> <span m="3298230">be,</span> <span
  m="3298880">for</span> <span m="3298950">example,</span> <span
  m="3300690">the</span> <span m="3300700">minus</span> <span
  m="3301060">2</span> <span m="3301270">would</span> <span
  m="3301440">correspond</span> <span m="3301970">to</span> <span
  m="3305226">d,</span> <span m="3305680">a.</span> <span
  m="3307150">That's</span> <span m="3307360">what</span> <span
  m="3307500">I</span> <span m="3307540">need</span> <span
  m="3307760">here.</span> <span m="3308470">And</span> <span
  m="3309550">I</span> <span m="3309680">could</span> <span
  m="3309810">also</span> <span m="3310170">have--</span> <span
  m="3311090">what</span> <span m="3311540">do</span> <span m="3311620">I</span>
  <span m="3311700">have</span> <span m="3311900">here?</span> <span
  m="3312270">I</span> <span m="3312370">have</span> <span
  m="3313730">something</span> <span m="3314170">is</span> <span
  m="3314280">going</span> <span m="3314510">into</span> <span
  m="3314840">d.</span> <span m="3315560">So</span> <span m="3315730">a</span>
  <span m="3315770">c, d</span> <span m="3316270">is</span> <span
  m="3316410">1.</span> <span m="3317170">So</span> <span m="3317370">d,
  c</span> <span m="3317920">is</span> <span m="3318050">minus</span> <span
  m="3318400">1,</span> <span m="3319290">right?</span> <span
  m="3319990">Make</span> <span m="3320170">sense?</span> <span m="3321410">d,
  c</span> <span m="3322040">is</span> <span m="3322170">minus</span> <span
  m="3322490">1.</span></p><p><span m="3322900">What</span> <span
  m="3323460">about</span> <span m="3323610">the</span> <span
  m="3323680">plus</span> <span m="3323812">1?</span> <span
  m="3324700">Where</span> <span m="3324840">do</span> <span
  m="3324900">I</span> <span m="3324960">get</span> <span m="3325060">a</span>
  <span m="3325110">plus</span> <span m="3325360">1</span> <span
  m="3325591">from?</span></p><p><span m="3329064">STUDENT:</span> <span
  m="3329527">d, b.</span></p><p><span m="3329990">SRINIVAS DEVADAS:</span>
  <span m="3330460">d, b</span> <span m="3331010">is</span> <span
  m="3331430">going</span> <span m="3331780">out.</span> <span
  m="3332130">That's</span> <span m="3332290">exactly</span> <span
  m="3332600">right,</span> <span m="3333210">d, b.</span> <span
  m="3334530">And</span> <span m="3335210">the</span> <span
  m="3335300">plus</span> <span m="3335680">2,</span> <span
  m="3336650">it</span> <span m="3336780">would</span> <span
  m="3336910">be</span> <span m="3337260">d, T,</span> <span
  m="3338890">right?</span></p><p><span m="3343470">And</span> <span
  m="3343920">so</span> <span m="3344390">you</span> <span
  m="3344540">have</span> <span m="3344660">to</span> <span
  m="3344740">do</span> <span m="3344870">the</span> <span
  m="3344980">enumeration.</span> <span m="3346760">It's</span> <span
  m="3347510">worthwhile</span> <span m="3347950">doing</span> <span
  m="3348160">once.</span> <span m="3348520">And</span> <span
  m="3348620">then</span> <span m="3348740">it</span> <span
  m="3348830">gets</span> <span m="3349010">kind</span> <span
  m="3349140">of</span> <span m="3349200">boring.</span> <span
  m="3350160">We</span> <span m="3350270">won't</span> <span
  m="3350420">to</span> <span m="3350480">do</span> <span m="3350540">it</span>
  <span m="3350600">again.</span> <span m="3351300">But</span> <span
  m="3352070">you</span> <span m="3352330">have</span> <span
  m="3352460">to</span> <span m="3352590">realize</span> <span
  m="3353220">that</span> <span m="3353500">you</span> <span
  m="3353650">have</span> <span m="3353820">to</span> <span
  m="3353950">absolutely</span> <span m="3354630">look</span> <span
  m="3354930">at</span> <span m="3355860">every</span> <span
  m="3356880">pair</span> <span m="3357240">of</span> <span
  m="3357340">vertices.</span> <span m="3358540">And</span> <span
  m="3358850">you</span> <span m="3358980">have</span> <span
  m="3359180">to</span> <span m="3359320">use</span> <span
  m="3359680">skew</span> <span m="3359900">symmetry</span> <span
  m="3361190">and</span> <span m="3361680">ensure</span> <span
  m="3361980">that,</span> <span m="3362220">even</span> <span
  m="3362480">though</span> <span m="3362710">there's</span> <span
  m="3364060">actually</span> <span m="3364400">no</span> <span
  m="3364640">edge</span> <span m="3364910">going</span> <span
  m="3365150">out,</span> <span m="3365440">if</span> <span
  m="3365540">there's</span> <span m="3365680">an</span> <span
  m="3365760">edge</span> <span m="3365990">coming</span> <span
  m="3366240">in,</span> <span m="3366840">you've</span> <span
  m="3366950">got</span> <span m="3367040">to</span> <span
  m="3367100">count</span> <span m="3367360">that.</span> <span
  m="3367770">And</span> <span m="3368110">that's</span> <span
  m="3368470">going</span> <span m="3368630">to</span> <span
  m="3368690">get</span> <span m="3368940">a</span> <span
  m="3369040">negative.</span> <span m="3369840">Whatever</span> <span
  m="3370090">is</span> <span m="3370270">coming</span> <span
  m="3370540">in,</span> <span m="3370670">you've</span> <span
  m="3370760">got</span> <span m="3370850">to</span> <span
  m="3371250">subtract,</span> <span m="3372020">OK?</span> <span
  m="3372290">So</span> <span m="3372430">it's</span> <span
  m="3372550">not</span> <span m="3372730">that</span> <span
  m="3372880">complicated.</span> <span m="3373420">Yeah,</span> <span
  m="3373930">go</span> <span m="3374020">ahead.</span></p><p><span
  m="3374400">STUDENT: Do</span> <span m="3374526">we</span> <span
  m="3374653">not</span> <span m="3374780">consider</span> <span m="3375187">S,
  c?</span></p><p><span m="3376410">SRINIVAS DEVADAS: I'm</span> <span
  m="3376550">sorry?</span></p><p><span m="3376963">STUDENT: Do</span> <span
  m="3377376">we</span> <span m="3377583">not</span> <span
  m="3377790">consider</span> <span m="3378290">S, c?</span></p><p><span
  m="3379220">SRINIVAS DEVADAS: So</span> <span m="3381710">the</span> <span
  m="3382530">beauty</span> <span m="3382800">of</span> <span
  m="3382920">this</span> <span m="3383110">is</span> <span
  m="3383250">that,</span> <span m="3385050">when</span> <span
  m="3385200">you</span> <span m="3385370">don't</span> <span
  m="3385790">have</span> <span m="3386030">a</span> <span
  m="3386100">particular</span> <span m="3386740">edge</span> <span
  m="3387080">from</span> <span m="3387940">S</span> <span m="3388250">to</span>
  <span m="3388360">c,</span> <span m="3388760">you</span> <span
  m="3388880">can</span> <span m="3389000">use</span> <span
  m="3389230">skew</span> <span m="3389400">symmetry</span> <span
  m="3389890">to</span> <span m="3390420">argue</span> <span
  m="3390810">that</span> <span m="3391080">S,</span> <span m="3391230">c</span>
  <span m="3391600">and</span> <span m="3392010">c,</span> <span
  m="3392420">S</span> <span m="3392750">cancel</span> <span
  m="3393120">out</span> <span m="3393260">each</span> <span
  m="3393400">other,</span> <span m="3394280">all</span> <span
  m="3394400">right?</span> <span m="3395300">So</span> <span
  m="3395460">that's</span> <span m="3395650">the</span> <span
  m="3395720">good</span> <span m="3395890">part,</span> <span
  m="3396560">right?</span> <span m="3396680">And</span> <span
  m="3396810">thanks</span> <span m="3397000">for</span> <span
  m="3397100">asking</span> <span m="3397340">the</span> <span
  m="3397400">question.</span> <span m="3398360">That's</span> <span
  m="3398860">a</span> <span m="3398900">good</span> <span
  m="3399020">question.</span> <span m="3399920">All right.</span> <span
  m="3400230">Here</span> <span m="3400381">you</span> <span
  m="3400532">go.</span></p><p><span m="3403860">So</span> <span
  m="3405270">you</span> <span m="3405920">can</span> <span
  m="3406030">do</span> <span m="3406170">that</span> <span
  m="3406520">by</span> <span m="3406680">just</span> <span
  m="3406870">looking</span> <span m="3407100">at</span> <span
  m="3407180">the</span> <span m="3407250">edges.</span> <span
  m="3407950">And</span> <span m="3408200">you</span> <span
  m="3408680">can</span> <span m="3408910">add</span> <span
  m="3409080">up</span> <span m="3409200">the</span> <span
  m="3409270">numbers,</span> <span m="3410100">all</span> <span
  m="3410200">right?</span> <span m="3410940">And</span> <span
  m="3411370">so</span> <span m="3413200">I</span> <span
  m="3413310">don't</span> <span m="3413460">think</span> <span
  m="3413610">this</span> <span m="3413750">is</span> <span
  m="3413850">going</span> <span m="3413970">to</span> <span
  m="3414030">be</span> <span m="3414090">absolutely</span> <span
  m="3414550">crucial</span> <span m="3415680">to</span> <span
  m="3416320">understand</span> <span m="3416930">the</span> <span
  m="3417250">rest</span> <span m="3417540">of</span> <span
  m="3417630">the</span> <span m="3418260">lecture.</span> <span
  m="3419220">Keep</span> <span m="3419440">this</span> <span
  m="3419590">in</span> <span m="3419690">mind,</span> <span
  m="3420060">that</span> <span m="3420250">there's</span> <span
  m="3421150">a</span> <span m="3421290">process</span> <span
  m="3421990">by</span> <span m="3422180">which</span> <span
  m="3422430">you</span> <span m="3422630">define</span> <span
  m="3423770">the</span> <span m="3425680">value</span> <span
  m="3426220">of</span> <span m="3426330">a</span> <span m="3426400">cut.</span>
  <span m="3427310">And</span> <span m="3428420">we're</span> <span
  m="3428520">going</span> <span m="3428640">to</span> <span
  m="3428700">get</span> <span m="3428830">back</span> <span
  m="3429030">to</span> <span m="3429130">this,</span> <span
  m="3429490">when</span> <span m="3429620">we</span> <span
  m="3429720">prove</span> <span m="3430020">the</span> <span
  m="3430090">max-flow</span> <span m="3430670">min-cut</span> <span
  m="3431330">theorem</span> <span m="3431550">next</span> <span
  m="3431830">time.</span> <span m="3432470">But</span> <span
  m="3432620">at</span> <span m="3432700">this</span> <span
  m="3432860">point,</span> <span m="3433590">I</span> <span
  m="3433730">want</span> <span m="3433890">to</span> <span
  m="3433960">say</span> <span m="3434100">something</span> <span
  m="3434440">actually</span> <span m="3434680">much</span> <span
  m="3434920">more</span> <span m="3435060">straightforward,</span> <span
  m="3436230">which</span> <span m="3436570">is</span> <span
  m="3436660">going</span> <span m="3436780">to</span> <span
  m="3436840">be</span> <span m="3436900">important</span> <span
  m="3437710">when</span> <span m="3438190">we</span> <span
  m="3439310">look</span> <span m="3439600">at</span> <span
  m="3440290">residual</span> <span m="3440840">networks,</span> <span
  m="3441790">which</span> <span m="3442100">is</span> <span
  m="3442550">the</span> <span m="3442780">last</span> <span
  m="3443140">concept</span> <span m="3444320">that</span> <span
  m="3444790">we</span> <span m="3444900">need</span> <span
  m="3445040">to</span> <span m="3445110">get</span> <span m="3445290">at</span>
  <span m="3445460">before</span> <span m="3445700">we</span> <span
  m="3445790">get</span> <span m="3445940">to</span> <span m="3446030">an</span>
  <span m="3446110">algorithm.</span> <span m="3447090">And</span> <span
  m="3447900">that</span> <span m="3448110">is</span> <span
  m="3448200">simply</span> <span m="3449900">that</span> <span
  m="3452030">the</span> <span m="3452200">capacity</span> <span
  m="3452910">of</span> <span m="3453020">a</span> <span m="3453070">cut</span>
  <span m="3455580">and</span> <span m="3455730">the</span> <span
  m="3455800">relationship</span> <span m="3456500">between</span> <span
  m="3456880">the</span> <span m="3456950">capacity</span> <span
  m="3457540">of</span> <span m="3457640">the</span> <span
  m="3457720">cut</span> <span m="3458760">and</span> <span
  m="3461080">the</span> <span m="3461210">flow</span> <span
  m="3461700">of</span> <span m="3461850">a</span> <span
  m="3461900">cut.</span></p><p><span m="3462650">So</span> <span
  m="3463090">the</span> <span m="3463230">capacity</span> <span
  m="3463690">of</span> <span m="3463790">a</span> <span m="3463840">cut</span>
  <span m="3464170">is</span> <span m="3464350">c(S,T).</span> <span
  m="3469340">Oops.</span> <span m="3469690">I</span> <span
  m="3470060">didn't</span> <span m="3470340">draw</span> <span
  m="3470640">that</span> <span m="3470730">properly.</span> <span
  m="3472140">Open</span> <span m="3472440">brackets,</span> <span
  m="3473130">capital</span> <span m="3473435">S,</span> <span
  m="3473740">capital</span> <span m="3474430">T.</span> <span
  m="3475190">And</span> <span m="3475410">we</span> <span
  m="3475470">can</span> <span m="3475580">do</span> <span m="3475700">it</span>
  <span m="3475780">exactly</span> <span m="3476190">the</span> <span
  m="3476270">same</span> <span m="3476530">way,</span> <span
  m="3477150">except</span> <span m="3477350">this</span> <span
  m="3477480">is</span> <span m="3477720">a</span> <span m="3477750">lot</span>
  <span m="3477940">simpler,</span> <span m="3478900">because</span> <span
  m="3479240">you</span> <span m="3479400">only</span> <span
  m="3479840">look</span> <span m="3480070">at</span> <span
  m="3481060">edges</span> <span m="3483150">and</span> <span
  m="3483640">you</span> <span m="3483720">only</span> <span
  m="3483910">have</span> <span m="3484070">positive</span> <span
  m="3484440">quantities.</span></p><p><span m="3485550">So</span> <span
  m="3485760">in</span> <span m="3485900">this</span> <span
  m="3486080">case,</span> <span m="3486750">you'll</span> <span
  m="3486950">simply</span> <span m="3487250">say</span> <span
  m="3487490">it's</span> <span m="3487730">3</span> <span
  m="3487990">plus</span> <span m="3488350">2,</span> <span
  m="3489430">corresponding</span> <span m="3490050">to--</span> <span
  m="3491860">what</span> <span m="3492020">did</span> <span
  m="3492095">I</span> <span m="3492170">have</span> <span
  m="3492340">here?</span> <span m="3492670">I</span> <span
  m="3492760">had</span> <span m="3492990">d,</span> <span
  m="3493380">a--</span> <span m="3494160">S, a</span> <span
  m="3495130">and</span> <span m="3496350">S,</span> <span m="3496770">d.</span>
  <span m="3498310">And</span> <span m="3498500">then,</span> <span
  m="3499610">the</span> <span m="3499700">capacity</span> <span
  m="3500260">is</span> <span m="3502290">you</span> <span
  m="3503430">only</span> <span m="3503580">need</span> <span
  m="3503730">to</span> <span m="3503800">look</span> <span
  m="3503950">at</span> <span m="3504100">the</span> <span
  m="3505140">edges</span> <span m="3505500">that</span> <span
  m="3505650">go</span> <span m="3505850">from</span> <span m="3506510">a</span>
  <span m="3506610">node</span> <span m="3506950">in</span> <span
  m="3507110">S</span> <span m="3507610">to</span> <span m="3508100">a</span>
  <span m="3508190">node</span> <span m="3508450">in</span> <span
  m="3508560">capital</span> <span m="3508985">T.</span> <span
  m="3509700">And</span> <span m="3509880">so</span> <span
  m="3510320">those</span> <span m="3510680">are</span> <span
  m="3510830">1</span> <span m="3512010">plus</span> <span m="3512310">3.</span>
  <span m="3514900">And</span> <span m="3515070">this</span> <span
  m="3515210">simply</span> <span m="3515610">would</span> <span
  m="3515770">be</span> <span m="3517040">the</span> <span m="3517220">1</span>
  <span m="3517750">would</span> <span m="3517990">be</span> <span
  m="3518410">d,</span> <span m="3519290">b.</span> <span m="3521190">And</span>
  <span m="3521910">the</span> <span m="3522040">3</span> <span
  m="3522500">is</span> <span m="3524060">d,</span> <span
  m="3524513">t.</span></p><p><span m="3526490">So</span> <span
  m="3526660">you</span> <span m="3526750">don't</span> <span
  m="3526910">care</span> <span m="3527150">about</span> <span
  m="3527860">the</span> <span m="3528100">other</span> <span
  m="3528580">flows.</span> <span m="3529190">This</span> <span
  m="3529310">is</span> <span m="3529370">not</span> <span
  m="3529500">about</span> <span m="3529680">flows,</span> <span
  m="3530070">this</span> <span m="3530170">is</span> <span
  m="3530250">simply</span> <span m="3530480">about</span> <span
  m="3530660">capacity.</span> <span m="3531800">So</span> <span
  m="3532480">this</span> <span m="3532700">adds</span> <span
  m="3532980">up</span> <span m="3533200">to</span> <span m="3534640">9,</span>
  <span m="3536370">OK?</span></p><p><span m="3538820">And</span> <span
  m="3539040">so</span> <span m="3540970">we</span> <span
  m="3541170">have,</span> <span m="3542180">at</span> <span
  m="3542340">this</span> <span m="3542510">point,</span> <span
  m="3545630">we</span> <span m="3545735">have</span> <span
  m="3545840">defined</span> <span m="3546340">the</span> <span
  m="3546410">flow</span> <span m="3547250">through</span> <span
  m="3547470">a</span> <span m="3547560">cut.</span> <span
  m="3548480">And</span> <span m="3548680">we</span> <span
  m="3548770">know</span> <span m="3548970">the</span> <span
  m="3549060">capacity</span> <span m="3549760">of</span> <span
  m="3549930">a</span> <span m="3549980">cut,</span> <span
  m="3550930">OK?</span> <span m="3552440">It's</span> <span
  m="3554600">more</span> <span m="3554850">or</span> <span
  m="3554900">less</span> <span m="3555060">obvious--</span> <span
  m="3556080">though</span> <span m="3556650">you</span> <span
  m="3556880">could</span> <span m="3557320">certainly</span> <span
  m="3557730">prove</span> <span m="3557970">a</span> <span
  m="3558020">theorem</span> <span m="3558540">which</span> <span
  m="3558970">is</span> <span m="3559230">going</span> <span
  m="3559350">to</span> <span m="3559410">take</span> <span m="3559570">a</span>
  <span m="3559610">couple</span> <span m="3559860">of</span> <span
  m="3559920">lines--</span> <span m="3560930">to</span> <span
  m="3561100">say</span> <span m="3561410">that</span> <span
  m="3562584">the</span> <span m="3563390">value</span> <span
  m="3566300">of</span> <span m="3568530">any</span> <span
  m="3570100">flow</span> <span m="3575430">is</span> <span
  m="3575890">bounded</span> <span m="3578520">by</span> <span
  m="3580630">the</span> <span m="3580770">capacity</span> <span
  m="3584750">of</span> <span m="3585420">any</span> <span
  m="3585730">cut.</span> <span m="3586580">And</span> <span
  m="3587260">sorry,</span> <span m="3587540">I</span> <span
  m="3587620">lied.</span> <span m="3588410">It's</span> <span
  m="3588590">not</span> <span m="3588790">a</span> <span
  m="3589860">trivial</span> <span m="3591320">proof.</span> <span
  m="3592710">And</span> <span m="3593120">that</span> <span
  m="3593260">is</span> <span m="3593370">actually</span> <span
  m="3593590">something</span> <span m="3593840">profound</span> <span
  m="3594240">going</span> <span m="3594450">on</span> <span
  m="3594590">here.</span> <span m="3595380">And</span> <span
  m="3595920">so</span> <span m="3596100">I'll</span> <span
  m="3596220">have</span> <span m="3596370">to</span> <span
  m="3597360">explain</span> <span m="3598490">exactly</span> <span
  m="3599060">what</span> <span m="3599210">this</span> <span
  m="3599360">means.</span> <span m="3600150">And</span> <span
  m="3600210">then</span> <span m="3600400">we'll</span> <span
  m="3601100">take</span> <span m="3601290">a</span> <span
  m="3602430">look</span> <span m="3602710">at</span> <span
  m="3603000">how</span> <span m="3603160">we</span> <span
  m="3603260">could</span> <span m="3603370">prove</span> <span
  m="3603570">something</span> <span m="3603820">like</span> <span
  m="3603990">this.</span></p><p><span m="3604970">So</span> <span
  m="3605200">what's</span> <span m="3605430">cool</span> <span
  m="3605670">about</span> <span m="3605920">this</span> <span
  m="3607340">is</span> <span m="3607650">that</span> <span
  m="3608770">you're</span> <span m="3609070">saying</span> <span
  m="3609340">that</span> <span m="3609530">it's</span> <span
  m="3609790">the</span> <span m="3609870">value</span> <span
  m="3610390">of</span> <span m="3610820">any</span> <span
  m="3611140">flow</span> <span m="3612300">is</span> <span
  m="3612600">bounded</span> <span m="3612980">by</span> <span
  m="3613100">the</span> <span m="3613190">capacity</span> <span
  m="3614460">of</span> <span m="3615690">any</span> <span
  m="3615960">cut,</span> <span m="3616890">OK?</span> <span
  m="3617740">And</span> <span m="3617970">so</span> <span
  m="3618080">that's</span> <span m="3618340">an</span> <span
  m="3618700">upper-bound</span> <span m="3619910">on</span> <span
  m="3620100">the</span> <span m="3620160">maximum</span> <span
  m="3620750">flow</span> <span m="3621060">value,</span> <span
  m="3622230">right?</span> <span m="3622460">So</span> <span
  m="3622590">I'm</span> <span m="3622710">saying</span> <span
  m="3623590">there's</span> <span m="3623940">all</span> <span
  m="3624220">these</span> <span m="3624410">cuts</span> <span
  m="3624750">that</span> <span m="3624880">are</span> <span
  m="3624930">possible</span> <span m="3625800">in</span> <span
  m="3625980">the</span> <span m="3626050">network.</span> <span
  m="3627090">And</span> <span m="3627630">I'm</span> <span
  m="3627790">making</span> <span m="3628090">a</span> <span
  m="3628140">statement</span> <span m="3629200">about</span> <span
  m="3631150">what</span> <span m="3631540">the</span> <span
  m="3631830">maximum</span> <span m="3632460">flow</span> <span
  m="3632770">can</span> <span m="3633100">be,</span> <span
  m="3633720">based</span> <span m="3634140">on</span> <span
  m="3635290">the</span> <span m="3635460">values</span> <span
  m="3636860">corresponding</span> <span m="3637510">to</span> <span
  m="3638340">the</span> <span m="3638790">capacities</span> <span
  m="3639510">of</span> <span m="3640210">any</span> <span
  m="3640400">cut,</span> <span m="3641330">right?</span></p><p><span
  m="3641940">So</span> <span m="3643110">why</span> <span m="3643520">is</span>
  <span m="3643720">that</span> <span m="3644110">the</span> <span
  m="3644220">case?</span> <span m="3644800">Well,</span> <span
  m="3645360">we're</span> <span m="3645500">not</span> <span
  m="3645630">going</span> <span m="3645660">to</span> <span
  m="3645690">be</span> <span m="3645750">able</span> <span
  m="3645870">to</span> <span m="3645930">prove</span> <span
  m="3646200">that</span> <span m="3648930">fully</span> <span
  m="3649740">today.</span> <span m="3650490">That's</span> <span
  m="3650770">the</span> <span m="3650910">max-flow</span> <span
  m="3651500">min-cut</span> <span m="3651690">theorem.</span> <span
  m="3652530">But</span> <span m="3653210">you</span> <span
  m="3653330">can</span> <span m="3653440">certainly</span> <span
  m="3653660">get</span> <span m="3653770">a</span> <span
  m="3653800">sense</span> <span m="3654100">of</span> <span
  m="3654230">it,</span> <span m="3655620">by</span> <span
  m="3656980">looking</span> <span m="3657330">at</span> <span
  m="3658330">a</span> <span m="3658480">different</span> <span
  m="3658910">characterization</span> <span m="3660380">of</span> <span
  m="3660580">the</span> <span m="3660640">flow</span> <span
  m="3660860">value.</span> <span m="3661390">So</span> <span
  m="3661440">I'm</span> <span m="3661500">going</span> <span
  m="3661630">to</span> <span m="3661750">give</span> <span
  m="3662050">you</span> <span m="3662690">one</span> <span
  m="3663030">half</span> <span m="3663370">of</span> <span
  m="3663530">the</span> <span m="3663620">proof,</span> <span
  m="3664010">at</span> <span m="3664150">least,</span> <span
  m="3665030">and</span> <span m="3665350">intuition</span> <span
  m="3666100">about</span> <span m="3666370">the</span> <span
  m="3666490">other</span> <span m="3666750">half.</span> <span
  m="3667470">And</span> <span m="3667650">we'll</span> <span
  m="3667930">finish</span> <span m="3668290">it</span> <span
  m="3669090">next</span> <span m="3669380">time.</span></p><p><span
  m="3672540">But</span> <span m="3672830">here's</span> <span
  m="3674410">another</span> <span m="3674790">characterization</span> <span
  m="3683928">of</span> <span m="3684370">the</span> <span
  m="3684430">flow</span> <span m="3684640">value.</span> <span
  m="3689080">So</span> <span m="3689360">our</span> <span
  m="3689470">lemma</span> <span m="3689800">here,</span> <span
  m="3690330">which</span> <span m="3690490">is</span> <span
  m="3690550">going</span> <span m="3690680">to</span> <span
  m="3690750">lead</span> <span m="3691030">us</span> <span
  m="3691820">to</span> <span m="3692250">this</span> <span
  m="3692820">statement,</span> <span m="3694170">is</span> <span
  m="3694630">that,</span> <span m="3695780">for</span> <span
  m="3697480">any</span> <span m="3697820">flow,</span> <span
  m="3699520">f,</span> <span m="3701680">and</span> <span
  m="3702180">any</span> <span m="3702500">cut,</span> <span m="3705030">(S,
  T),</span> <span m="3709690">we</span> <span m="3709910">have</span> <span
  m="3715630">a</span> <span m="3716130">really</span> <span
  m="3716440">powerful</span> <span m="3718920">dilemma.</span> <span
  m="3720150">Maybe</span> <span m="3720340">you</span> <span
  m="3720430">should</span> <span m="3720560">call</span> <span
  m="3720780">it</span> <span m="3720900">a theorem.</span></p><p><span
  m="3721930">But</span> <span m="3722190">it</span> <span
  m="3722430">essentially</span> <span m="3722890">says,</span> <span
  m="3724250">look,</span> <span m="3724460">it</span> <span
  m="3724520">doesn't</span> <span m="3724720">matter</span> <span
  m="3725470">what</span> <span m="3725680">cut</span> <span
  m="3725920">you</span> <span m="3726040">choose,</span> <span
  m="3727520">you've</span> <span m="3727700">got</span> <span
  m="3727820">a</span> <span m="3727860">flow</span> <span m="3728460">on</span>
  <span m="3728640">the</span> <span m="3728700">network.</span> <span
  m="3730090">And</span> <span m="3731220">when</span> <span
  m="3731640">you</span> <span m="3731720">look</span> <span
  m="3731870">at</span> <span m="3731940">the</span> <span
  m="3732660">flow</span> <span m="3733060">on</span> <span
  m="3733130">the</span> <span m="3733200">network,</span> <span
  m="3734240">it's</span> <span m="3734470">going</span> <span
  m="3734620">to</span> <span m="3734680">equal</span> <span
  m="3735620">the</span> <span m="3735750">flow</span> <span
  m="3736010">across</span> <span m="3736290">the</span> <span
  m="3736360">cut.</span> <span m="3737330">And</span> <span
  m="3737500">the</span> <span m="3737560">only</span> <span
  m="3737800">reason</span> <span m="3738070">for</span> <span
  m="3738180">this</span> <span m="3738430">is</span> <span
  m="3738520">simply</span> <span m="3738830">because</span> <span
  m="3739160">you've</span> <span m="3739270">got</span> <span
  m="3739840">the</span> <span m="3739950">source</span> <span
  m="3740890">on</span> <span m="3741220">one</span> <span
  m="3741430">side</span> <span m="3741640">of</span> <span
  m="3741710">the</span> <span m="3741780">cut.</span> <span
  m="3742510">And</span> <span m="3742670">you've</span> <span
  m="3742760">got</span> <span m="3742940">the</span> <span
  m="3743010">sink</span> <span m="3743690">on</span> <span
  m="3743830">the</span> <span m="3743890">other</span> <span
  m="3744020">side</span> <span m="3744200">of</span> <span
  m="3744270">the</span> <span m="3744330">cut.</span> <span
  m="3745030">That's</span> <span m="3745366">it.</span> <span
  m="3746040">That's</span> <span m="3746090">the</span> <span
  m="3746140">only</span> <span m="3746370">thing</span> <span
  m="3746550">that</span> <span m="3746680">you</span> <span
  m="3746760">need,</span> <span m="3747690">right?</span></p><p><span
  m="3748140">You</span> <span m="3748710">dump</span> <span
  m="3749100">these</span> <span m="3749280">vertices</span> <span
  m="3749550">these</span> <span m="3749750">into</span> <span
  m="3749910">two</span> <span m="3750090">bins.</span> <span
  m="3751050">You</span> <span m="3751160">know,</span> <span
  m="3751540">dump</span> <span m="3751850">the</span> <span
  m="3751930">source</span> <span m="3752270">on</span> <span
  m="3752360">the</span> <span m="3752430">left,</span> <span
  m="3752780">and</span> <span m="3752900">dump</span> <span
  m="3753110">the</span> <span m="3753760">sink</span> <span
  m="3754060">on</span> <span m="3754590">the</span> <span
  m="3754680">right.</span> <span m="3755550">And</span> <span
  m="3755810">you</span> <span m="3755920">compute</span> <span
  m="3756270">the</span> <span m="3756330">flow</span> <span
  m="3756630">the</span> <span m="3756710">way</span> <span
  m="3756870">we've</span> <span m="3757020">defined</span> <span
  m="3757390">it.</span> <span m="3758000">That's</span> <span
  m="3758100">the</span> <span m="3758170">flow.</span> <span
  m="3759080">It</span> <span m="3759190">doesn't</span> <span
  m="3759400">matter</span> <span m="3759670">how</span> <span
  m="3759810">you</span> <span m="3760940">partition</span> <span
  m="3761370">these</span> <span m="3761520">vertices,</span> <span
  m="3762310">as</span> <span m="3762530">long</span> <span
  m="3762790">as</span> <span m="3762950">you've</span> <span
  m="3763070">got</span> <span m="3763210">the</span> <span
  m="3763280">source</span> <span m="3763570">on</span> <span
  m="3763660">the</span> <span m="3763730">left</span> <span
  m="3764480">and</span> <span m="3764630">the</span> <span
  m="3764690">sink</span> <span m="3764960">on</span> <span
  m="3765050">the</span> <span m="3765140">right,</span> <span
  m="3766070">OK?</span></p><p><span m="3766830">And</span> <span
  m="3767220">so</span> <span m="3767370">we</span> <span m="3767460">can</span>
  <span m="3767580">prove</span> <span m="3767820">this</span> <span
  m="3768210">using</span> <span m="3768960">implicit</span> <span
  m="3769370">summation</span> <span m="3769850">notation.</span> <span
  m="3773310">We'll</span> <span m="3773550">do</span> <span
  m="3773670">that.</span> <span m="3775660">And</span> <span
  m="3776000">that'll</span> <span m="3776130">give</span> <span
  m="3776260">you</span> <span m="3776380">a</span> <span
  m="3778110">really</span> <span m="3778370">good</span> <span
  m="3778530">sense</span> <span m="3778990">of</span> <span
  m="3779190">why</span> <span m="3779470">this</span> <span
  m="3780200">statement</span> <span m="3780650">is</span> <span
  m="3780760">true,</span> <span m="3781480">because</span> <span
  m="3781720">we</span> <span m="3781820">know</span> <span
  m="3782030">that,</span> <span m="3783060">for</span> <span
  m="3783310">any</span> <span m="3783520">given</span> <span
  m="3784440">cut,</span> <span m="3785160">the</span> <span
  m="3785290">flow</span> <span m="3786220">that</span> <span
  m="3786460">cut</span> <span m="3787170">is</span> <span
  m="3787350">bounded</span> <span m="3787650">by</span> <span
  m="3787730">the</span> <span m="3787820">capacity</span> <span
  m="3788460">of</span> <span m="3788660">that</span> <span
  m="3788900">cut,</span> <span m="3789760">right?</span> <span
  m="3790120">You</span> <span m="3790300">know</span> <span
  m="3790420">that.</span></p><p><span m="3791730">But</span> <span
  m="3792400">to</span> <span m="3792590">show</span> <span
  m="3792820">this,</span> <span m="3795050">here's</span> <span
  m="3795820">how</span> <span m="3795900">we</span> <span
  m="3795990">could</span> <span m="3796120">show</span> <span
  m="3796260">that,</span> <span m="3797030">f(S, T)</span> <span
  m="3799620">is</span> <span m="3800460">f(S, V)</span> <span
  m="3804840">minus</span> <span m="3805800">f(S, S),</span> <span
  m="3809350">OK?</span> <span m="3810170">So</span> <span
  m="3810900">I'm</span> <span m="3811410">playing</span> <span
  m="3811710">around,</span> <span m="3812140">just</span> <span
  m="3812400">like</span> <span m="3812550">I</span> <span
  m="3812600">did</span> <span m="3812750">before.</span> <span
  m="3813690">I</span> <span m="3813790">had</span> <span
  m="3813910">taken</span> <span m="3814210">the</span> <span m="3814530">cap
  T--</span> <span m="3815190">I</span> <span m="3815290">know</span> <span
  m="3815450">that</span> <span m="3815600">S</span> <span
  m="3815910">union</span> <span m="3816390">T</span> <span
  m="3817180">is</span> <span m="3817600">cap</span> <span m="3817960">V,</span>
  <span m="3818710">right?</span> <span m="3819480">This</span> <span
  m="3819620">is</span> <span m="3819680">a</span> <span
  m="3819730">partition.</span> <span m="3820590">So</span> <span
  m="3820640">I</span> <span m="3820670">know</span> <span
  m="3820790">that</span> <span m="3820910">S</span> <span
  m="3821090">union</span> <span m="3821370">T</span> <span
  m="3821560">is</span> <span m="3821690">cap</span> <span m="3821960">V.</span>
  <span m="3822540">So</span> <span m="3822710">I</span> <span
  m="3822760">can</span> <span m="3822890">put</span> <span m="3823020">a</span>
  <span m="3823060">V</span> <span m="3823290">here</span> <span
  m="3823810">and</span> <span m="3823960">an</span> <span m="3824050">S
  here,</span> <span m="3825160">right?</span> <span m="3825380">And</span>
  <span m="3825540">that's</span> <span m="3825820">a</span> <span
  m="3825870">subtraction</span> <span m="3826270">over</span> <span
  m="3826400">there,</span> <span m="3826570">of</span> <span
  m="3826670">course,</span> <span m="3827560">right?</span></p><p><span
  m="3827790">So</span> <span m="3829720">put</span> <span m="3829920">that
  up</span> <span m="3830060">here</span> <span m="3831430">and</span> <span
  m="3831720">finish</span> <span m="3832000">this,</span> <span
  m="3833190">a</span> <span m="3833220">couple</span> <span
  m="3833450">more</span> <span m="3833610">lines.</span> <span
  m="3841760">And</span> <span m="3842610">what</span> <span
  m="3842760">can</span> <span m="3842860">I</span> <span m="3842920">say</span>
  <span m="3843110">about</span> <span m="3844280">either</span> <span
  m="3844550">of</span> <span m="3844630">these?</span> <span
  m="3846260">I</span> <span m="3846530">could</span> <span
  m="3846630">say</span> <span m="3846750">something</span> <span
  m="3847000">about</span> <span m="3847580">one</span> <span
  m="3847760">of</span> <span m="3847830">these</span> <span
  m="3848010">terms.</span> <span m="3849520">Yep?</span></p><p><span
  m="3849970">STUDENT: The</span> <span m="3850082">one</span> <span
  m="3850195">on</span> <span m="3850307">the</span> <span
  m="3850420">right</span> <span m="3850552">is</span> <span
  m="3850685">[INAUDIBLE].</span></p><p><span m="3850950">SRINIVAS DEVADAS:
  The</span> <span m="3851100">one</span> <span m="3851240">on</span> <span
  m="3851300">the</span> <span m="3851380">right</span> <span
  m="3851550">is</span> <span m="3851650">0.</span> <span m="3853760">So</span>
  <span m="3855080">call</span> <span m="3855520">this</span> <span
  m="3855790">f(S,V).</span> <span m="3859690">Right?</span> <span
  m="3860020">And</span> <span m="3860580">now,</span> <span
  m="3860860">I'm</span> <span m="3860970">going</span> <span
  m="3861210">to</span> <span m="3861540">break</span> <span
  m="3861910">it</span> <span m="3862000">up</span> <span
  m="3862200">again,</span> <span m="3863460">make</span> <span
  m="3863670">it</span> <span m="3863790">small</span> <span
  m="3864220">s,</span> <span m="3865440">big</span> <span m="3865830">V,</span>
  <span m="3867180">plus</span> <span m="3868210">f(S</span> <span
  m="3870320">minus</span> <span m="3870765">s,</span> <span
  m="3872720">cap</span> <span m="3873060">V).</span> <span
  m="3873730">So</span> <span m="3874220">broken</span> <span
  m="3875300">this</span> <span m="3875610">up</span> <span
  m="3875880">into</span> <span m="3876160">small</span> <span
  m="3876570">s,</span> <span m="3876940">which</span> <span
  m="3877070">is</span> <span m="3877140">just</span> <span
  m="3877400">joined</span> <span m="3877710">from</span> <span
  m="3878380">cap</span> <span m="3878690">S</span> <span
  m="3878910">minus</span> <span m="3879170">s,</span> <span
  m="3879960">clearly.</span></p><p><span m="3882960">And</span> <span
  m="3885040">what</span> <span m="3885300">can</span> <span
  m="3885420">I</span> <span m="3885490">say</span> <span
  m="3885750">about</span> <span m="3886030">this?</span> <span
  m="3886930">This</span> <span m="3887110">is</span> <span m="3887290">a</span>
  <span m="3887410">little</span> <span m="3891700">more</span> <span
  m="3891970">subtle</span> <span m="3892380">than,</span> <span
  m="3893160">perhaps,</span> <span m="3893500">the</span> <span
  m="3893580">previous</span> <span m="3893920">question.</span> <span
  m="3895200">What</span> <span m="3895510">can</span> <span
  m="3895620">I</span> <span m="3895660">say</span> <span
  m="3895820">about</span> <span m="3896010">that</span> <span
  m="3896170">quantity?</span> <span m="3896820">I mean,</span> <span
  m="3896990">the</span> <span m="3897060">answer</span> <span
  m="3897260">is</span> <span m="3897500">not</span> <span
  m="3897660">subtle,</span> <span m="3898480">but--</span> <span
  m="3899590">yeah,</span> <span m="3899780">go</span> <span
  m="3899890">ahead.</span></p><p><span m="3900780">STUDENT: That</span> <span
  m="3901220">that</span> <span m="3901308">is</span> <span
  m="3901396">equal</span> <span m="3901484">to</span> <span
  m="3901572">0.</span></p><p><span m="3901660">SRINIVAS DEVADAS: And</span>
  <span m="3901860">why?</span></p><p><span m="3902850">STUDENT: Because</span>
  <span m="3903720">the</span> <span m="3904210">cap</span> <span
  m="3904700">S</span> <span m="3905190">doesn't</span> <span
  m="3905680">contain</span> <span m="3906170">t.</span></p><p><span
  m="3906660">SRINIVAS DEVADAS: Ah.</span> <span m="3907050">Beautiful.</span>
  <span m="3907470">That's</span> <span m="3907650">right.</span> <span
  m="3908200">So</span> <span m="3908380">that's</span> <span
  m="3908540">what</span> <span m="3908670">I</span> <span
  m="3908730">wanted.</span> <span m="3909310">So</span> <span
  m="3909490">this</span> <span m="3909750">does</span> <span
  m="3909950">not</span> <span m="3910170">contain</span> <span
  m="3910630">t.</span> <span m="3915030">And</span> <span
  m="3915200">so,</span> <span m="3915300">now</span> <span
  m="3915570">you</span> <span m="3915670">can</span> <span
  m="3915780">use</span> <span m="3916040">flow</span> <span
  m="3916190">conservation,</span> <span m="3916980">right?</span> <span
  m="3917650">And</span> <span m="3917830">that's</span> <span
  m="3918370">the</span> <span m="3918450">important</span> <span
  m="3918810">thing.</span></p><p><span m="3919750">You</span> <span
  m="3922120">can</span> <span m="3922230">use</span> <span
  m="3922350">flow</span> <span m="3922600">conservation,</span> <span
  m="3923190">because</span> <span m="3923470">this</span> <span
  m="3923660">does</span> <span m="3923820">not</span> <span
  m="3924000">contain</span> <span m="3924360">t.</span> <span
  m="3925110">And</span> <span m="3925720">then,</span> <span
  m="3926010">it</span> <span m="3926300">clearly</span> <span
  m="3926530">does</span> <span m="3926680">not</span> <span
  m="3926800">contain</span> <span m="3927080">small</span> <span
  m="3927380">s,</span> <span m="3927560">because</span> <span
  m="3927760">I</span> <span m="3927830">just</span> <span
  m="3928010">took</span> <span m="3928130">it</span> <span
  m="3928210">out</span> <span m="3928350">of</span> <span
  m="3928450">it,</span> <span m="3929070">right?</span> <span
  m="3930180">So</span> <span m="3930330">that</span> <span
  m="3930480">goes</span> <span m="3930700">to</span> <span
  m="3930800">0.</span> <span m="3931780">And</span> <span
  m="3932990">voila.</span> <span m="3933460">That's</span> <span
  m="3933670">simply</span> <span m="3933990">f(S, V),</span> <span
  m="3935690">which</span> <span m="3936780">we</span> <span
  m="3936900">know</span> <span m="3937180">is</span> <span
  m="3939980">f.</span> <span m="3940560">We</span> <span
  m="3941130">proved</span> <span m="3941390">that.</span> <span
  m="3943300">Our</span> <span m="3943420">first</span> <span
  m="3943690">implicit</span> <span m="3944090">summation</span> <span
  m="3944630">proof</span> <span m="3944960">was</span> <span
  m="3945720">showing</span> <span m="3946220">that--</span> <span
  m="3947680">well,</span> <span m="3947850">this</span> <span
  m="3947990">is</span> <span m="3948065">a</span> <span
  m="3948140">definition.</span> <span m="3948640">Excuse</span> <span
  m="3948910">me.</span> <span m="3949380">So</span> <span m="3951600">we</span>
  <span m="3951700">did</span> <span m="3951850">it</span> <span
  m="3951960">for</span> <span m="3953360">the</span> <span
  m="3953520">sink.</span></p><p><span m="3954460">But</span> <span
  m="3954600">this</span> <span m="3954750">is</span> <span
  m="3954840">simply</span> <span m="3955080">the</span> <span
  m="3955170">definition</span> <span m="3956540">of</span> <span
  m="3957280">the</span> <span m="3957350">flow</span> <span
  m="3957520">value,</span> <span m="3958520">right?</span> <span
  m="3958750">So</span> <span m="3959120">this</span> <span
  m="3959280">is</span> <span m="3959390">beautiful.</span> <span
  m="3960520">I</span> <span m="3960650">mean,</span> <span
  m="3961570">it's</span> <span m="3961720">like</span> <span
  m="3963280">fantastic,</span> <span m="3963890">right?</span> <span
  m="3964510">Why</span> <span m="3964650">aren't</span> <span
  m="3964980">people</span> <span m="3965180">excited?</span></p><p><span
  m="3966140">[LAUGHTER]</span></p><p><span m="3967520">Because</span> <span
  m="3967760">I</span> <span m="3967830">put</span> <span
  m="3968020">people</span> <span m="3968250">to</span> <span
  m="3968340">sleep</span> <span m="3968670">before,</span> <span m="3969180">in
  the</span> <span m="3969400">hour</span> <span m="3969680">before.</span>
  <span m="3970810">But</span> <span m="3970950">this</span> <span
  m="3971090">is</span> <span m="3971220">absolutely</span> <span
  m="3971650">fantastic,</span> <span m="3972670">because</span> <span
  m="3972930">this</span> <span m="3973200">says</span> <span
  m="3973950">that</span> <span m="3974330">I</span> <span
  m="3974500">have</span> <span m="3974710">ways</span> <span
  m="3975770">of</span> <span m="3978210">figuring</span> <span
  m="3978620">out</span> <span m="3979410">what</span> <span
  m="3979820">the</span> <span m="3980210">maximum</span> <span
  m="3980860">flow</span> <span m="3981670">of</span> <span
  m="3981850">the</span> <span m="3981910">network</span> <span
  m="3982320">would</span> <span m="3982460">be,</span> <span
  m="3984630">by</span> <span m="3985050">making</span> <span
  m="3985450">arbitrary</span> <span m="3986150">cuts</span> <span
  m="3987190">through</span> <span m="3987430">this</span> <span
  m="3987620">network</span> <span m="3988480">and</span> <span
  m="3988660">looking</span> <span m="3988940">for</span> <span
  m="3989080">capacities</span> <span m="3989740">of</span> <span
  m="3989830">these</span> <span m="3990030">cuts,</span> <span
  m="3991160">right?</span> <span m="3991690">Because</span> <span
  m="3991970">I</span> <span m="3992080">know</span> <span
  m="3992500">that</span> <span m="3993120">the</span> <span
  m="3993300">capacity</span> <span m="3993870">of</span> <span
  m="3993990">any</span> <span m="3994290">cut--</span> <span
  m="3995660">and</span> <span m="3995810">now</span> <span
  m="3995950">you</span> <span m="3996060">see</span> <span
  m="3996230">why</span> <span m="3996520">min</span> <span
  m="3996790">cut</span> <span m="3997080">is</span> <span
  m="3997210">interesting--</span> <span m="3998110">but</span> <span
  m="3998400">you</span> <span m="3998550">know</span> <span
  m="3998700">that</span> <span m="3998850">the</span> <span
  m="3998920">capacity</span> <span m="3999450">of</span> <span
  m="3999580">any</span> <span m="3999880">cut</span> <span
  m="4000580">is</span> <span m="4000770">going</span> <span
  m="4000900">to</span> <span m="4000970">bound</span> <span
  m="4001870">the</span> <span m="4001990">flow</span> <span
  m="4002250">of</span> <span m="4002340">the</span> <span
  m="4002410">network,</span> <span m="4003580">because</span> <span
  m="4003820">the</span> <span m="4003880">flow</span> <span
  m="4004180">through</span> <span m="4004390">a</span> <span
  m="4004440">cut</span> <span m="4004940">is</span> <span
  m="4005130">the</span> <span m="4005200">flow</span> <span
  m="4005390">through</span> <span m="4005550">the</span> <span
  m="4005630">network.</span></p><p><span m="4006710">So</span> <span
  m="4007010">if</span> <span m="4007140">I</span> <span m="4007270">go</span>
  <span m="4007510">through</span> <span m="4007810">and</span> <span
  m="4007970">look</span> <span m="4008180">at</span> <span
  m="4008490">the</span> <span m="4008600">min</span> <span
  m="4008930">cut</span> <span m="4010180">corresponding</span> <span
  m="4010850">to</span> <span m="4011330">the</span> <span
  m="4011450">minimum</span> <span m="4011790">capacity</span> <span
  m="4012900">associated</span> <span m="4013400">with</span> <span
  m="4013510">the</span> <span m="4013570">flow</span> <span
  m="4013780">network,</span> <span m="4014520">that's</span> <span
  m="4014700">going</span> <span m="4014820">to</span> <span
  m="4014890">point</span> <span m="4015100">me</span> <span
  m="4015210">to</span> <span m="4015280">my</span> <span m="4015380">max</span>
  <span m="4015660">flow,</span> <span m="4016900">because</span> <span
  m="4017070">that</span> <span m="4017200">going</span> <span
  m="4017320">to</span> <span m="4017400">be</span> <span m="4018340">an</span>
  <span m="4018450">upper</span> <span m="4018620">bound</span> <span
  m="4018920">on</span> <span m="4019330">the</span> <span
  m="4019390">max</span> <span m="4019690">flow,</span> <span
  m="4020340">right?</span> <span m="4020670">And</span> <span
  m="4020840">so</span> <span m="4020990">now</span> <span
  m="4021140">you</span> <span m="4021250">see</span> <span
  m="4021420">why</span> <span m="4021790">the</span> <span
  m="4021910">min--</span> <span m="4022810">not</span> <span m="4023140">the
  min</span> <span m="4023380">flow,</span> <span m="4023690">sorry--</span>
  <span m="4024220">the</span> <span m="4024340">min-cut</span> <span
  m="4025060">max-flow</span> <span m="4025630">theorem</span> <span
  m="4026500">is</span> <span m="4027920">an</span> <span
  m="4027990">interesting</span> <span m="4028380">one.</span> <span
  m="4028590">But</span> <span m="4028730">it</span> <span
  m="4029600">relates--</span> <span m="4030860">and</span> <span
  m="4031050">this</span> <span m="4031180">is</span> <span
  m="4031300">the</span> <span m="4031530">beginning</span> <span
  m="4032070">of</span> <span m="4032690">that</span> <span
  m="4032910">relationship,</span> <span m="4033680">we're</span> <span
  m="4033780">not</span> <span m="4033920">quite</span> <span
  m="4034230">done</span> <span m="4034700">to</span> <span
  m="4034850">prove</span> <span m="4035110">it--</span> <span
  m="4035780">but</span> <span m="4036120">the</span> <span
  m="4036260">beginning</span> <span m="4036570">of</span> <span
  m="4036660">the</span> <span m="4036740">relationship</span> <span
  m="4037420">is</span> <span m="4038260">that</span> <span
  m="4038850">you</span> <span m="4039100">can</span> <span
  m="4039870">look</span> <span m="4040200">at</span> <span
  m="4040470">any</span> <span m="4040740">cut,</span> <span
  m="4041460">and</span> <span m="4041750">you</span> <span
  m="4041850">can</span> <span m="4042390">look</span> <span
  m="4042650">at</span> <span m="4042760">the</span> <span
  m="4043030">flow</span> <span m="4043370">through</span> <span
  m="4043550">the</span> <span m="4043640">cut</span> <span
  m="4043930">as</span> <span m="4044080">being</span> <span
  m="4044270">the</span> <span m="4044340">flow</span> <span
  m="4044600">through</span> <span m="4044760">the</span> <span
  m="4044850">network.</span> <span m="4045730">And</span> <span
  m="4045760">then</span> <span m="4045850">you</span> <span
  m="4045980">use</span> <span m="4046190">the</span> <span
  m="4046260">second</span> <span m="4046560">part</span> <span
  m="4046820">of</span> <span m="4046930">it,</span> <span
  m="4047210">which</span> <span m="4047250">is</span> <span
  m="4047340">the</span> <span m="4047410">capacity</span> <span
  m="4048380">bounding--</span> <span m="4048920">of</span> <span
  m="4049030">course,</span> <span m="4049510">in</span> <span
  m="4049630">a</span> <span m="4049670">very</span> <span
  m="4049830">simple</span> <span m="4050170">way,</span> <span
  m="4050440">because</span> <span m="4050700">of</span> <span
  m="4050800">edge</span> <span m="4051100">capacities--</span> <span
  m="4052130">the</span> <span m="4052520">flow</span> <span
  m="4052820">through</span> <span m="4053020">the</span> <span
  m="4053100">cut.</span> <span m="4053780">And</span> <span
  m="4054190">you</span> <span m="4054300">can</span> <span
  m="4054410">put</span> <span m="4054560">those</span> <span
  m="4054720">two</span> <span m="4054820">things</span> <span
  m="4055020">together,</span> <span m="4055910">all right?</span></p><p><span
  m="4056790">We</span> <span m="4056970">still</span> <span
  m="4057430">don't</span> <span m="4057750">quite</span> <span
  m="4058110">know</span> <span m="4058870">how</span> <span
  m="4059040">to</span> <span m="4059130">find</span> <span
  m="4059710">these</span> <span m="4059940">cuts,</span> <span
  m="4061060">right?</span> <span m="4061240">So</span> <span
  m="4061350">we</span> <span m="4061440">don't</span> <span
  m="4061620">quite</span> <span m="4061910">know</span> <span
  m="4062140">how</span> <span m="4062220">to</span> <span
  m="4062300">find</span> <span m="4062700">these</span> <span
  m="4062880">cuts.</span> <span m="4063250">And</span> <span
  m="4063380">that's</span> <span m="4064250">the</span> <span
  m="4064460">last</span> <span m="4064750">thing</span> <span
  m="4064930">that</span> <span m="4065100">we're</span> <span
  m="4065210">going</span> <span m="4065330">to</span> <span
  m="4065390">do</span> <span m="4065480">today,</span> <span
  m="4066190">give</span> <span m="4066330">you</span> <span
  m="4066430">a</span> <span m="4066470">sense</span> <span
  m="4066760">of</span> <span m="4066860">how</span> <span
  m="4067010">we're</span> <span m="4067100">going</span> <span
  m="4067220">to</span> <span m="4067280">find</span> <span
  m="4067710">these</span> <span m="4067910">min</span> <span
  m="4068120">cuts,</span> <span m="4068900">so</span> <span
  m="4069130">we</span> <span m="4069220">can</span> <span
  m="4069340">find</span> <span m="4069660">the</span> <span
  m="4069720">max</span> <span m="4070010">flow.</span> <span
  m="4070780">All</span> <span m="4070890">right?</span> <span
  m="4073060">Cool.</span></p><p><span m="4074270">So</span> <span
  m="4075230">the</span> <span m="4075490">one</span> <span
  m="4075880">last</span> <span m="4076710">notion</span> <span
  m="4078460">that</span> <span m="4078630">we</span> <span
  m="4078770">have</span> <span m="4079060">here</span> <span
  m="4079500">that</span> <span m="4079700">is</span> <span
  m="4079800">going</span> <span m="4080020">to</span> <span
  m="4080110">allow</span> <span m="4080460">us</span> <span
  m="4080680">to</span> <span m="4080800">go</span> <span
  m="4081030">into</span> <span m="4081170">the</span> <span
  m="4081280">algorithm</span> <span m="4081780">domain,</span> <span
  m="4082660">as</span> <span m="4082870">opposed</span> <span
  m="4083160">to</span> <span m="4083250">the</span> <span
  m="4083360">analysis</span> <span m="4083960">domain--</span> <span
  m="4084700">all</span> <span m="4085210">we've</span> <span
  m="4085350">done</span> <span m="4085500">so</span> <span
  m="4085660">far</span> <span m="4085940">is</span> <span
  m="4086440">analysis,</span> <span m="4086857">analysis,</span> <span
  m="4087274">analysis--</span> <span m="4088550">is</span> <span
  m="4089020">the</span> <span m="4089150">notion</span> <span
  m="4089500">of</span> <span m="4089620">a</span> <span
  m="4089740">residual</span> <span m="4090350">network.</span> <span
  m="4092250">OK?</span> <span m="4093330">And</span> <span m="4093510">a</span>
  <span m="4093580">residual</span> <span m="4094040">network,</span> <span
  m="4094460">as</span> <span m="4094690">its</span> <span
  m="4094850">name</span> <span m="4095160">implies,</span> <span
  m="4096390">is</span> <span m="4096439">something</span> <span
  m="4096910">that</span> <span m="4097330">has</span> <span
  m="4097890">residual</span> <span m="4098620">capacities.</span> <span
  m="4099850">It's</span> <span m="4100080">the</span> <span
  m="4100160">network</span> <span m="4100600">that</span> <span
  m="4100790">points</span> <span m="4101260">you</span> <span
  m="4101490">to</span> <span m="4101630">places</span> <span
  m="4102550">where</span> <span m="4102750">you</span> <span
  m="4102870">can</span> <span m="4103000">increase</span> <span
  m="4103520">the</span> <span m="4103609">flow,</span> <span
  m="4104170">because</span> <span m="4104640">there's</span> <span
  m="4105010">capacity</span> <span m="4105620">left.</span></p><p><span
  m="4107029">Your</span> <span m="4107260">flow</span> <span
  m="4107649">is</span> <span m="4107819">less</span> <span
  m="4108170">than</span> <span m="4108300">the</span> <span
  m="4108370">edge</span> <span m="4108590">capacity.</span> <span
  m="4109439">It's</span> <span m="4109609">a</span> <span
  m="4109649">local</span> <span m="4110109">notion,</span> <span
  m="4110800">so</span> <span m="4110939">it's</span> <span
  m="4111060">easy</span> <span m="4111359">to</span> <span
  m="4111450">compute.</span> <span m="4112990">There's</span> <span
  m="4113399">a</span> <span m="4113479">capacity</span> <span
  m="4113890">of</span> <span m="4114000">3</span> <span m="4114240">on</span>
  <span m="4114350">this</span> <span m="4114510">edge,</span> <span
  m="4114899">there's</span> <span m="4115050">a</span> <span
  m="4115090">flow</span> <span m="4115319">of</span> <span
  m="4115450">2.</span> <span m="4116010">The</span> <span
  m="4116160">residual</span> <span m="4116740">capacity</span> <span
  m="4117210">is</span> <span m="4117340">1,</span> <span
  m="4117990">right?</span> <span m="4118300">3</span> <span
  m="4118479">minus</span> <span m="4118770">2.</span></p><p><span
  m="4120020">And</span> <span m="4120430">so</span> <span
  m="4120689">the</span> <span m="4120970">residual</span> <span
  m="4121479">network</span> <span m="4131569">Gf</span> <span m="4132286">(V,
  Ef),</span> <span m="4135109">right?</span> <span m="4135370">So</span> <span
  m="4135529">the</span> <span m="4135640">actual</span> <span
  m="4136000">network</span> <span m="4136420">is</span> <span m="4136540">G(V,
  E).</span> <span m="4138050">And</span> <span m="4138300">the</span> <span
  m="4138370">vertices</span> <span m="4138830">are</span> <span
  m="4138880">going</span> <span m="4139000">to</span> <span
  m="4139060">be</span> <span m="4139130">the</span> <span
  m="4139220">same.</span> <span m="4139640">The</span> <span
  m="4139720">graph</span> <span m="4139970">is</span> <span
  m="4140080">obviously</span> <span m="4140410">different,</span> <span
  m="4141170">but</span> <span m="4141390">the</span> <span
  m="4141450">edges</span> <span m="4141810">are</span> <span
  m="4141859">going</span> <span m="4141990">to</span> <span
  m="4142050">be</span> <span m="4142120">different.</span> <span
  m="4142580">There's</span> <span m="4142760">going</span> <span
  m="4142880">to</span> <span m="4142960">be</span> <span m="4143120">a</span>
  <span m="4143200">different</span> <span m="4144220">set</span> <span
  m="4144470">of</span> <span m="4144569">edges</span> <span
  m="4145430">in</span> <span m="4145740">the</span> <span
  m="4145840">residual</span> <span m="4146290">network,</span> <span
  m="4146800">as</span> <span m="4146950">opposed</span> <span
  m="4147260">to</span> <span m="4147350">the</span> <span
  m="4147870">flow</span> <span m="4148180">network,</span> <span
  m="4148870">OK?</span></p><p><span m="4150430">And</span> <span
  m="4154560">you</span> <span m="4154649">have</span> <span
  m="4154870">strictly</span> <span m="4157359">positive.</span> <span
  m="4157920">That</span> <span m="4158050">means</span> <span
  m="4159430">greater</span> <span m="4159830">than</span> <span
  m="4159970">0,</span> <span m="4160490">strictly</span> <span
  m="4160910">greater</span> <span m="4161140">than</span> <span
  m="4161279">0,</span> <span m="4162460">residual</span> <span
  m="4163109">capacities.</span> <span m="4170399">So</span> <span
  m="4170960">Cf</span> <span m="4171310">)</span> <span
  m="4173680">equals</span> <span m="4174760">c(u,v)</span> <span
  m="4176260">minus</span> <span m="4177310">f(u,v).</span> <span
  m="4179840">And</span> <span m="4179960">that's</span> <span
  m="4180120">strictly</span> <span m="4180529">greater</span> <span
  m="4180779">than</span> <span m="4180910">0.</span> <span
  m="4181380">I'm</span> <span m="4181510">going</span> <span
  m="4181630">to</span> <span m="4181689">put</span> <span m="4181819">an</span>
  <span m="4181920">edge</span> <span m="4182189">in</span> <span
  m="4182310">there,</span> <span m="4182930">if</span> <span
  m="4183510">there</span> <span m="4183740">is</span> <span
  m="4184490">a</span> <span m="4184630">residual</span> <span
  m="4185050">capacity.</span> <span m="4185819">0</span> <span
  m="4186170">doesn't</span> <span m="4186399">mean</span> <span
  m="4186700">there's</span> <span m="4186930">any</span> <span
  m="4187090">residual</span> <span m="4187500">capacity.</span> <span
  m="4189420">Edges</span> <span m="4192410">in</span> <span
  m="4192529">Ef</span> <span m="4194170">admit</span> <span
  m="4196200">more</span> <span m="4196530">flow,</span> <span
  m="4199720">OK?</span></p><p><span m="4202960">And</span> <span
  m="4204240">one</span> <span m="4204460">last</span> <span
  m="4204710">thing.</span> <span m="4206820">If</span> <span m="4208670">(V,
  u)</span> <span m="4209650">does</span> <span m="4209920">not</span> <span
  m="4210190">belong</span> <span m="4210570">to</span> <span
  m="4210680">E--</span> <span m="4211810">so</span> <span m="4212150">we</span>
  <span m="4212215">are</span> <span m="4212280">talking</span> <span
  m="4212520">about</span> <span m="4213550">the</span> <span
  m="4213800">original</span> <span m="4214220">network</span> <span
  m="4214620">here,</span> <span m="4214940">E</span> <span
  m="4215260">means</span> <span m="4215530">the</span> <span
  m="4215670">original</span> <span m="4215960">network--</span> <span
  m="4217270">then</span> <span m="4217510">we</span> <span
  m="4217640">know</span> <span m="4217870">c(V, u)</span> <span
  m="4221160">equals</span> <span m="4221580">0.</span> <span
  m="4222790">That</span> <span m="4223020">was</span> <span
  m="4223150">our</span> <span m="4223220">definition.</span> <span
  m="4224070">If</span> <span m="4224170">you</span> <span
  m="4224270">don't</span> <span m="4224370">have</span> <span
  m="4224400">that</span> <span m="4224530">edge,</span> <span
  m="4224770">the</span> <span m="4224840">capacity</span> <span
  m="4225470">is</span> <span m="4225640">0.</span></p><p><span
  m="4227490">But</span> <span m="4230810">we are</span> <span
  m="4231570">talking</span> <span m="4231830">now</span> <span
  m="4231970">about</span> <span m="4232210">f,</span> <span
  m="4232520">which</span> <span m="4232680">is</span> <span
  m="4232790">a</span> <span m="4232830">flow,</span> <span
  m="4233320">which</span> <span m="4233460">doesn't</span> <span
  m="4233870">necessarily</span> <span m="4234540">require</span> <span
  m="4236010">that</span> <span m="4236680">there</span> <span
  m="4236840">be</span> <span m="4237000">an</span> <span
  m="4237100">edge.</span> <span m="4237980">And</span> <span
  m="4238620">we</span> <span m="4238705">are</span> <span
  m="4238790">simply</span> <span m="4239070">going</span> <span
  m="4239210">to</span> <span m="4239330">use</span> <span
  m="4241330">our</span> <span m="4241430">skew</span> <span
  m="4241740">symmetry</span> <span m="4242180">relationship.</span> <span
  m="4243740">And</span> <span m="4243820">you'll</span> <span
  m="4243940">see</span> <span m="4244100">that</span> <span
  m="4244800">this</span> <span m="4245200">may</span> <span
  m="4245290">not</span> <span m="4245440">be</span> <span
  m="4245700">completely</span> <span m="4246050">clear</span> <span
  m="4246770">as</span> <span m="4246930">to</span> <span m="4247010">why</span>
  <span m="4247290">I</span> <span m="4247360">wrote</span> <span
  m="4247590">this</span> <span m="4248090">at</span> <span
  m="4248410">this</span> <span m="4248580">moment.</span> <span
  m="4249250">But</span> <span m="4249430">as</span> <span m="4249550">I</span>
  <span m="4249630">draw</span> <span m="4249870">the</span> <span
  m="4249970">residual</span> <span m="4250380">network,</span> <span
  m="4251180">you'll</span> <span m="4251380">see</span> <span
  m="4251560">why</span> <span m="4251750">that</span> <span
  m="4251890">is</span> <span m="4251970">important.</span> <span
  m="4253320">It's</span> <span m="4253680">going</span> <span
  m="4253870">to</span> <span m="4253940">be</span> <span m="4254050">the</span>
  <span m="4254140">case</span> <span m="4254470">that</span> <span
  m="4254620">we're</span> <span m="4254710">going</span> <span
  m="4254830">to</span> <span m="4254890">have</span> <span
  m="4255480">extra</span> <span m="4255960">edges</span> <span
  m="4257120">in</span> <span m="4257320">the</span> <span
  m="4257560">residual</span> <span m="4258080">network</span> <span
  m="4259020">that</span> <span m="4259200">don't</span> <span
  m="4259430">exist</span> <span m="4260480">in</span> <span
  m="4260700">the</span> <span m="4260980">original</span> <span
  m="4261500">network,</span> <span m="4262430">because</span> <span
  m="4262750">of</span> <span m="4262860">that</span> <span
  m="4263730">last</span> <span m="4264120">line</span> <span
  m="4264410">there,</span> <span m="4264920">right?</span> <span
  m="4265130">So</span> <span m="4265470">let</span> <span m="4265640">me</span>
  <span m="4265830">clear</span> <span m="4266090">that</span> <span
  m="4266250">up.</span></p><p><span m="4266980">So</span> <span
  m="4267260">we're</span> <span m="4267400">going</span> <span
  m="4267520">to</span> <span m="4267600">draw</span> <span m="4269160">a</span>
  <span m="4269670">residual</span> <span m="4270310">network</span> <span
  m="4271600">for--</span> <span m="4272690">I'm</span> <span
  m="4273000">going</span> <span m="4273120">to</span> <span
  m="4273190">change</span> <span m="4273410">that</span> <span
  m="4273580">yet</span> <span m="4273740">again--</span> <span
  m="4275470">but</span> <span m="4275590">we're</span> <span
  m="4275660">going</span> <span m="4275780">to</span> <span
  m="4275840">draw</span> <span m="4276050">the</span> <span
  m="4276170">residual</span> <span m="4276620">network</span> <span
  m="4278660">for</span> <span m="4281190">our</span> <span
  m="4281830">example</span> <span m="4282330">up</span> <span
  m="4282460">there.</span> <span m="4282870">Topology</span> <span
  m="4282970">is</span> <span m="4283470">going</span> <span
  m="4283600">to</span> <span m="4283670">stay</span> <span
  m="4283860">the</span> <span m="4283940">same.</span> <span
  m="4284760">Numbers</span> <span m="4285130">are</span> <span
  m="4285180">going</span> <span m="4285310">to</span> <span
  m="4285380">change,</span> <span m="4286300">because</span> <span
  m="4286460">I</span> <span m="4286530">want</span> <span
  m="4286720">something</span> <span m="4287500">slightly</span> <span
  m="4287850">more</span> <span m="4288030">interesting</span> <span
  m="4289220">than</span> <span m="4290150">what</span> <span
  m="4290340">we</span> <span m="4290830">have</span> <span
  m="4291110">there.</span></p><p><span m="4292800">So</span> <span
  m="4292930">I'm</span> <span m="4293000">going</span> <span
  m="4293120">to</span> <span m="4293190">take</span> <span
  m="4293390">this</span> <span m="4293821">out--</span> <span
  m="4296330">2,</span> <span m="4298530">1.</span> <span m="4300940">1,</span>
  <span m="4301590">2--</span> <span m="4304160">go</span> <span
  m="4304320">back</span> <span m="4304520">to</span> <span
  m="4304590">what</span> <span m="4304720">it</span> <span
  m="4304790">was</span> <span m="4305000">before,</span> <span m="4305540">I
  think.</span> <span m="4306630">1--</span> <span m="4310180">all</span> <span
  m="4310360">right.</span> <span m="4310983">Good.</span> <span
  m="4311730">So</span> <span m="4312790">I</span> <span m="4312920">want</span>
  <span m="4313280">a 1</span> <span m="4313990">over</span> <span
  m="4314170">here.</span> <span m="4315610">I</span> <span
  m="4316060">want</span> <span m="4316280">a</span> <span m="4317600">1</span>
  <span m="4317880">over</span> <span m="4318030">here,</span> <span
  m="4320256">a</span> <span m="4320670">2</span> <span m="4321040">over</span>
  <span m="4321190">here.</span> <span m="4322260">And</span> <span
  m="4322480">keep</span> <span m="4322660">checking</span> <span
  m="4323490">to</span> <span m="4323600">make</span> <span
  m="4323760">sure</span> <span m="4323990">I'm</span> <span
  m="4324120">not</span> <span m="4326350">messing</span> <span
  m="4326790">up</span> <span m="4326970">here,</span> <span
  m="4327720">in</span> <span m="4327850">terms</span> <span
  m="4328070">of</span> <span m="4328170">flow</span> <span
  m="4328510">constraints.</span> <span m="4329800">But</span> <span
  m="4330580">that's</span> <span m="4331240">pretty</span> <span
  m="4331420">much</span> <span m="4331660">all</span> <span
  m="4331820">I</span> <span m="4331880">got.</span> <span
  m="4335560">OK?</span></p><p><span m="4336850">So</span> <span
  m="4337040">the</span> <span m="4337120">flow</span> <span
  m="4337410">here</span> <span m="4338700">and</span> <span
  m="4339540">the</span> <span m="4339680">s</span> <span m="4339813">and</span>
  <span m="4339946">t</span> <span m="4340480">don't</span> <span
  m="4340720">particularly</span> <span m="4341150">matter.</span> <span
  m="4342530">The</span> <span m="4342700">max</span> <span
  m="4343030">flow</span> <span m="4343260">is</span> <span
  m="4343400">4.</span> <span m="4344090">The</span> <span
  m="4344200">flow</span> <span m="4344530">that</span> <span
  m="4344690">you</span> <span m="4344770">see</span> <span
  m="4344990">up</span> <span m="4345140">there</span> <span
  m="4345730">is</span> <span m="4345980">3.</span> <span
  m="4346560">This</span> <span m="4346730">is</span> <span
  m="4346790">what</span> <span m="4346940">we</span> <span
  m="4347040">had</span> <span m="4347270">right</span> <span
  m="4347440">at</span> <span m="4347620">the</span> <span
  m="4347680">beginning,</span> <span m="4348530">all</span> <span
  m="4348630">right?</span></p><p><span m="4349570">So</span> <span
  m="4349830">what</span> <span m="4349970">I</span> <span
  m="4350010">want</span> <span m="4350160">to</span> <span
  m="4350220">do</span> <span m="4350340">now</span> <span m="4350630">is</span>
  <span m="4351610">give</span> <span m="4351960">you</span> <span
  m="4352110">what</span> <span m="4352310">the</span> <span
  m="4352410">residual</span> <span m="4352910">network</span> <span
  m="4353350">is</span> <span m="4354080">for</span> <span
  m="4354430">this</span> <span m="4354770">particular</span> <span
  m="4355160">flow.</span> <span m="4355840">Remember,</span> <span
  m="4356290">the</span> <span m="4356520">residual</span> <span
  m="4356960">network</span> <span m="4357350">is</span> <span
  m="4357450">defined,</span> <span m="4358580">based</span> <span
  m="4358950">on</span> <span m="4359100">a</span> <span
  m="4359150">flow.</span> <span m="4359820">That's</span> <span
  m="4360010">why</span> <span m="4360130">you</span> <span
  m="4360250">have</span> <span m="4360400">Gf,</span> <span
  m="4361590">G</span> <span m="4361870">subscript</span> <span
  m="4362290">f.</span> <span m="4363050">f</span> <span m="4363110">is</span>
  <span m="4363170">a</span> <span m="4363220">flow.</span> <span
  m="4363910">So</span> <span m="4364080">you're</span> <span
  m="4364150">going</span> <span m="4364210">to</span> <span
  m="4364270">have</span> <span m="4364400">a</span> <span
  m="4364440">different</span> <span m="4364810">residual</span> <span
  m="4365210">network,</span> <span m="4365890">if</span> <span
  m="4366060">the</span> <span m="4366120">flow</span> <span
  m="4366410">is</span> <span m="4366520">different.</span> <span
  m="4367090">So</span> <span m="4367310">that</span> <span
  m="4367590">original</span> <span m="4368010">example</span> <span
  m="4368390">that</span> <span m="4368510">I</span> <span
  m="4368580">had</span> <span m="4368840">would</span> <span
  m="4368960">have</span> <span m="4369110">a</span> <span
  m="4369150">different</span> <span m="4369490">residual</span> <span
  m="4369890">network.</span> <span m="4370500">This</span> <span
  m="4370670">one</span> <span m="4370840">is</span> <span
  m="4370940">going</span> <span m="4371060">to</span> <span
  m="4371120">have</span> <span m="4371270">the</span> <span
  m="4371340">one</span> <span m="4371520">I'm</span> <span
  m="4371600">going</span> <span m="4371730">to</span> <span
  m="4371790">draw,</span> <span m="4372540">all</span> <span
  m="4372630">right?</span></p><p><span m="4373650">So</span> <span
  m="4374080">the</span> <span m="4374240">residual</span> <span
  m="4374620">network</span> <span m="4375140">has</span> <span
  m="4375670">the</span> <span m="4375810">same</span> <span
  m="4376160">set</span> <span m="4376350">of</span> <span
  m="4376430">vertices.</span> <span m="4377490">So</span> <span
  m="4377680">I</span> <span m="4377740">can</span> <span m="4377890">go</span>
  <span m="4378030">ahead</span> <span m="4378250">and</span> <span
  m="4378410">draw</span> <span m="4380660">these</span> <span
  m="4380940">vertices.</span> <span m="4385690">I'll</span> <span
  m="4385910">just</span> <span m="4386030">mark</span> <span
  m="4386590">T</span> <span m="4386880">and</span> <span m="4387050">S</span>
  <span m="4387280">over</span> <span m="4387410">here.</span> <span
  m="4388200">Those</span> <span m="4388410">are</span> <span
  m="4388470">exactly</span> <span m="4388870">the</span> <span
  m="4388960">same</span> <span m="4389190">as</span> <span
  m="4389310">before.</span> <span m="4390250">And</span> <span
  m="4390570">this</span> <span m="4390720">is</span> <span
  m="4390850">Gf,</span> <span m="4392550">OK?</span> <span
  m="4392920">That's</span> <span m="4393120">a</span> <span
  m="4393210">residual</span> <span m="4393600">network.</span></p><p><span
  m="4394400">And</span> <span m="4394560">the</span> <span
  m="4394620">edges</span> <span m="4394970">are</span> <span
  m="4395040">going</span> <span m="4395160">to</span> <span
  m="4395220">be</span> <span m="4395290">different.</span> <span
  m="4396140">All</span> <span m="4396380">I</span> <span
  m="4396440">have</span> <span m="4396580">to</span> <span
  m="4396670">do</span> <span m="4396840">is</span> <span
  m="4396980">look</span> <span m="4397750">up</span> <span
  m="4397890">there</span> <span m="4398090">and</span> <span
  m="4398270">say,</span> <span m="4399100">look,</span> <span
  m="4399440">I'm</span> <span m="4399560">going</span> <span
  m="4399690">to</span> <span m="4399750">have</span> <span m="4399860">a</span>
  <span m="4399910">residual</span> <span m="4400410">capacity</span> <span
  m="4400990">of</span> <span m="4401170">2--</span> <span
  m="4402850">let</span> <span m="4402970">me</span> <span
  m="4403040">use</span> <span m="4403190">a</span> <span
  m="4403230">different</span> <span m="4403720">color,</span> <span
  m="4404920">since</span> <span m="4405260">I</span> <span
  m="4405340">have</span> <span m="4405510">them--</span> <span
  m="4407920">corresponding</span> <span m="4408390">to</span> <span
  m="4408490">that</span> <span m="4408710">edge</span> <span
  m="4409050">from</span> <span m="4409250">S</span> <span m="4409550">to</span>
  <span m="4409720">a,</span> <span m="4410520">because</span> <span
  m="4411350">I</span> <span m="4411900">clearly</span> <span
  m="4412200">have</span> <span m="4412340">a</span> <span
  m="4412380">capacity</span> <span m="4412820">of</span> <span
  m="4412960">3,</span> <span m="4413340">and</span> <span m="4413480">I</span>
  <span m="4413530">only</span> <span m="4413710">have</span> <span
  m="4413860">a</span> <span m="4413910">flow</span> <span m="4414170">of</span>
  <span m="4414260">1,</span> <span m="4415030">right?</span> <span
  m="4415300">So</span> <span m="4415400">that's</span> <span
  m="4415580">all</span> <span m="4415690">there</span> <span
  m="4415810">is</span> <span m="4415950">to</span> <span
  m="4416060">it.</span></p><p><span m="4417080">Now,</span> <span
  m="4417150">the</span> <span m="4417230">interesting</span> <span
  m="4417630">thing</span> <span m="4417870">is</span> <span
  m="4418080">that,</span> <span m="4420100">because</span> <span
  m="4420420">of</span> <span m="4420520">this</span> <span
  m="4420680">line</span> <span m="4420980">over</span> <span
  m="4421100">here,</span> <span m="4421880">I'm</span> <span
  m="4422080">actually</span> <span m="4422410">going</span> <span
  m="4422560">to</span> <span m="4422630">define</span> <span
  m="4424750">an</span> <span m="4424960">edge</span> <span
  m="4425990">in</span> <span m="4427510">Ef,</span> <span m="4429020">in</span>
  <span m="4429430">Gf</span> <span m="4429560">or</span> <span
  m="4429690">Ef,</span> <span m="4430590">that</span> <span
  m="4430770">corresponds</span> <span m="4431340">to</span> <span
  m="4432150">this</span> <span m="4432370">edge</span> <span
  m="4432660">that</span> <span m="4432800">didn't</span> <span
  m="4433030">exist</span> <span m="4433430">in</span> <span
  m="4433540">E,</span> <span m="4434300">because</span> <span
  m="4434570">I</span> <span m="4434640">can</span> <span
  m="4434820">shrink</span> <span m="4435380">the</span> <span
  m="4435460">flow</span> <span m="4436530">from</span> <span
  m="4436800">1</span> <span m="4437110">to</span> <span m="4437260">0.</span>
  <span m="4438470">And</span> <span m="4438650">that</span> <span
  m="4439110">essentially</span> <span m="4439620">says</span> <span
  m="4439960">that</span> <span m="4440630">that</span> <span
  m="4440840">shrinkage</span> <span m="4441810">is</span> <span
  m="4442040">represented</span> <span m="4443190">in</span> <span
  m="4443380">the</span> <span m="4443470">residual</span> <span
  m="4443900">network</span> <span m="4444680">by</span> <span
  m="4444850">an</span> <span m="4444950">edge</span> <span
  m="4445270">that</span> <span m="4445430">goes</span> <span
  m="4445720">from</span> <span m="4446770">this</span> <span
  m="4447010">node,</span> <span m="4447360">a,</span> <span
  m="4447940">up</span> <span m="4448140">there,</span> <span
  m="4448740">to</span> <span m="4448890">s,</span> <span
  m="4449670">right?</span> <span m="4449880">And</span> <span
  m="4450030">that</span> <span m="4450220">is</span> <span
  m="4450330">going</span> <span m="4450520">to</span> <span
  m="4450620">have</span> <span m="4451320">a</span> <span
  m="4451560">residual</span> <span m="4452140">capacity</span> <span
  m="4453840">of</span> <span m="4454870">1,</span> <span
  m="4455970">right?</span></p><p><span m="4456280">So</span> <span
  m="4456410">that's</span> <span m="4456800">it.</span> <span
  m="4457190">That's</span> <span m="4457230">the</span> <span
  m="4457270">only</span> <span m="4458390">extra</span> <span
  m="4458800">thing</span> <span m="4459200">that</span> <span
  m="4459360">you</span> <span m="4459450">have</span> <span
  m="4459570">to</span> <span m="4459640">remember</span> <span
  m="4460510">when</span> <span m="4460780">you</span> <span
  m="4461230">draw</span> <span m="4461590">the</span> <span
  m="4461680">residual</span> <span m="4462090">network.</span> <span
  m="4462960">You</span> <span m="4463260">not</span> <span
  m="4463560">only</span> <span m="4464460">can</span> <span
  m="4464650">increase</span> <span m="4465170">the</span> <span
  m="4465260">flow,</span> <span m="4466030">you</span> <span
  m="4466160">can</span> <span m="4466270">also</span> <span
  m="4466620">shrink</span> <span m="4466950">it.</span> <span
  m="4467550">You</span> <span m="4467700">have</span> <span
  m="4467810">to</span> <span m="4467890">represent</span> <span
  m="4468560">the</span> <span m="4468660">shrinkage</span> <span
  m="4469130">of</span> <span m="4469240">the</span> <span
  m="4469300">flow</span> <span m="4470080">by</span> <span
  m="4470320">an</span> <span m="4470420">edge</span> <span
  m="4470750">in</span> <span m="4470840">the</span> <span
  m="4470930">residual</span> <span m="4471330">network.</span> <span
  m="4472230">And</span> <span m="4472610">you</span> <span
  m="4472740">obviously</span> <span m="4473060">represent</span> <span
  m="4473540">the</span> <span m="4473610">increase</span> <span
  m="4473990">of</span> <span m="4474070">the</span> <span
  m="4474140">flow</span> <span m="4474740">by</span> <span
  m="4474920">an</span> <span m="4475010">edge</span> <span
  m="4475230">in</span> <span m="4475300">the</span> <span
  m="4475370">residual</span> <span m="4475760">network.</span> <span
  m="4476490">And</span> <span m="4476640">now</span> <span
  m="4476780">you</span> <span m="4476910">see</span> <span
  m="4477130">why</span> <span m="4477420">this</span> <span
  m="4477630">is</span> <span m="4477810">all</span> <span
  m="4478000">going</span> <span m="4478130">to</span> <span
  m="4478190">make</span> <span m="4478310">sense.</span></p><p><span
  m="4478600">Remember,</span> <span m="4478940">way</span> <span
  m="4479160">back,</span> <span m="4481710">eons</span> <span
  m="4482120">ago,</span> <span m="4482430">only</span> <span
  m="4482670">an</span> <span m="4482770">hour</span> <span
  m="4482950">ago,</span> <span m="4483180">but</span> <span
  m="4484580">we</span> <span m="4484750">had</span> <span
  m="4484970">this</span> <span m="4485210">example</span> <span
  m="4485910">where</span> <span m="4487410">we</span> <span
  m="4487510">had</span> <span m="4487650">to</span> <span
  m="4487720">shrink</span> <span m="4488120">the</span> <span
  m="4488180">flow</span> <span m="4488650">in</span> <span m="4488800">a</span>
  <span m="4488850">particular</span> <span m="4490160">edge,</span> <span
  m="4491020">in</span> <span m="4491160">order</span> <span
  m="4491330">to</span> <span m="4491430">get</span> <span
  m="4492070">the</span> <span m="4492270">overall</span> <span
  m="4492710">flow</span> <span m="4493010">to</span> <span
  m="4493120">increase,</span> <span m="4494150">right?</span> <span
  m="4494460">The</span> <span m="4494670">residual</span> <span
  m="4495080">network</span> <span m="4495470">is</span> <span
  m="4495560">going</span> <span m="4495680">to</span> <span
  m="4495740">point</span> <span m="4496140">us</span> <span
  m="4496680">in</span> <span m="4496850">the</span> <span
  m="4496920">direction</span> <span m="4497930">of,</span> <span
  m="4498460">potentially,</span> <span m="4499720">those</span> <span
  m="4500050">edges</span> <span m="4500920">whose</span> <span
  m="4501200">flow</span> <span m="4501490">has</span> <span
  m="4501740">to</span> <span m="4501870">shrink.</span> <span
  m="4502590">But</span> <span m="4502750">they're</span> <span
  m="4502850">going</span> <span m="4502970">to</span> <span
  m="4503030">be</span> <span m="4503120">represented,</span> <span
  m="4504250">in</span> <span m="4505690">effect,</span> <span
  m="4506100">as</span> <span m="4506290">these</span> <span
  m="4506510">reverse</span> <span m="4506830">edges</span> <span
  m="4507550">with</span> <span m="4507720">positive</span> <span
  m="4508730">numbers</span> <span m="4509090">associated</span> <span
  m="4509550">with</span> <span m="4509680">them.</span></p><p><span
  m="4509860">So</span> <span m="4510030">there's</span> <span
  m="4510090">a</span> <span m="4510150">1</span> <span m="4510500">here.</span>
  <span m="4511140">It's</span> <span m="4511300">positive,</span> <span
  m="4511780">because</span> <span m="4512030">it</span> <span
  m="4512110">goes</span> <span m="4512360">from</span> <span
  m="4512610">this</span> <span m="4512810">node,</span> <span
  m="4513610">call</span> <span m="4513810">it</span> <span
  m="4513910">a,</span> <span m="4514510">back</span> <span
  m="4514770">to</span> <span m="4515020">s.</span> <span m="4515530">And</span>
  <span m="4515710">if</span> <span m="4516800">I</span> <span
  m="4517560">shrink</span> <span m="4518020">this</span> <span
  m="4520100">from</span> <span m="4520360">1</span> <span m="4520560">to</span>
  <span m="4520660">0,</span> <span m="4521370">that</span> <span
  m="4521560">is,</span> <span m="4521700">in</span> <span
  m="4521890">effect,</span> <span m="4522460">taking</span> <span
  m="4523480">what</span> <span m="4523670">I</span> <span
  m="4523740">have</span> <span m="4523950">up</span> <span
  m="4524050">here</span> <span m="4524970">and</span> <span
  m="4525130">making</span> <span m="4525390">this</span> <span
  m="4525570">1</span> <span m="4525900">as</span> <span m="4526060">0,</span>
  <span m="4526920">OK?</span> <span m="4527400">That's</span> <span
  m="4527620">the</span> <span m="4527680">way</span> <span
  m="4527770">you</span> <span m="4527830">want</span> <span
  m="4527950">to</span> <span m="4528010">think</span> <span
  m="4528140">about</span> <span m="4528575">this.</span> <span
  m="4529010">So</span> <span m="4529420">that's</span> <span
  m="4529590">pretty</span> <span m="4529740">much</span> <span
  m="4529910">it.</span></p><p><span m="4531410">I</span> <span
  m="4531540">could</span> <span m="4531660">draw</span> <span
  m="4531950">out</span> <span m="4532080">the</span> <span
  m="4532160">rest</span> <span m="4532380">of</span> <span
  m="4532460">this,</span> <span m="4533110">and</span> <span
  m="4533410">it</span> <span m="4533510">should</span> <span
  m="4533650">all</span> <span m="4533840">make</span> <span
  m="4534000">sense.</span> <span m="4536360">I</span> <span
  m="4536520">have</span> <span m="4536650">an</span> <span
  m="4536730">edge</span> <span m="4536940">like</span> <span
  m="4537170">that.</span> <span m="4541980">So</span> <span
  m="4545540">the</span> <span m="4545680">edges</span> <span
  m="4546070">that</span> <span m="4546220">are</span> <span
  m="4546380">at</span> <span m="4546500">capacity</span> <span
  m="4547620">up</span> <span m="4547840">there</span> <span
  m="4548620">aren't</span> <span m="4548920">going</span> <span
  m="4549050">to</span> <span m="4549130">show</span> <span
  m="4549340">up</span> <span m="4549480">here.</span> <span
  m="4550510">The</span> <span m="4550640">edges</span> <span
  m="4550970">that</span> <span m="4551090">are</span> <span
  m="4551190">not</span> <span m="4551510">at</span> <span
  m="4551600">capacity</span> <span m="4552190">end</span> <span
  m="4552390">up</span> <span m="4552500">with</span> <span
  m="4552570">two</span> <span m="4552820">edges</span> <span
  m="4553090">down</span> <span m="4553300">below,</span> <span
  m="4554010">if</span> <span m="4554410">they</span> <span
  m="4554620">have</span> <span m="4555670">a</span> <span
  m="4555760">flow</span> <span m="4556130">that</span> <span
  m="4556260">is</span> <span m="4556360">non-zero,</span> <span
  m="4557440">right?</span> <span m="4557690">If</span> <span
  m="4558150">you</span> <span m="4558220">have</span> <span
  m="4558465">a</span> <span m="4558710">0</span> <span m="4559070">flow</span>
  <span m="4559350">up</span> <span m="4559490">there,</span> <span
  m="4560250">you're</span> <span m="4560470">only</span> <span
  m="4560590">going</span> <span m="4560650">to</span> <span
  m="4560720">get</span> <span m="4560850">one</span> <span
  m="4561040">edge.</span> <span m="4564200">Obviously,</span> <span
  m="4564510">you'll</span> <span m="4564620">get</span> <span
  m="4564740">one</span> <span m="4564890">edge,</span> <span
  m="4565020">because</span> <span m="4565200">the</span> <span
  m="4565260">capacity</span> <span m="4565640">is</span> <span
  m="4565750">non-zero.</span> <span m="4566700">But</span> <span
  m="4567010">the</span> <span m="4567160">ones</span> <span
  m="4567380">that</span> <span m="4567500">are</span> <span
  m="4567760">not</span> <span m="4567990">quite</span> <span
  m="4568290">at</span> <span m="4568370">capacity</span> <span
  m="4569190">end</span> <span m="4569380">up</span> <span m="4569490">to</span>
  <span m="4569560">two</span> <span m="4569750">edges,</span> <span
  m="4570320">right?</span> <span m="4570740">Think</span> <span
  m="4570910">of</span> <span m="4570990">that</span> <span
  m="4571150">as</span> <span m="4571270">being</span> <span
  m="4571460">the</span> <span m="4571620">simple</span> <span
  m="4571980">rule.</span></p><p><span m="4573030">And</span> <span
  m="4573380">make</span> <span m="4573550">sure</span> <span
  m="4573710">that</span> <span m="4573820">I'm</span> <span
  m="4573910">following</span> <span m="4574300">this</span> <span
  m="4574480">rule.</span> <span m="4575220">Good</span> <span
  m="4575880">exercise</span> <span m="4576540">is</span> <span
  m="4576730">to</span> <span m="4577380">check</span> <span
  m="4577660">for</span> <span m="4577810">bugs,</span> <span
  m="4578740">lecture</span> <span m="4579160">bugs.</span> <span
  m="4579970">Best</span> <span m="4580330">way</span> <span
  m="4580470">of</span> <span m="4580590">understanding</span> <span
  m="4581040">the</span> <span m="4581100">material.</span></p><p><span
  m="4595650">OK?</span> <span m="4595920">So</span> <span
  m="4596040">that's</span> <span m="4596370">my</span> <span
  m="4597440">residual</span> <span m="4598100">network.</span> <span
  m="4599350">And</span> <span m="4599890">let</span> <span
  m="4600030">me</span> <span m="4600090">just</span> <span
  m="4600270">point--</span> <span m="4601130">I'll</span> <span
  m="4601480">put</span> <span m="4601650">in</span> <span
  m="4601820">some</span> <span m="4602050">numbers.</span> <span
  m="4603060">Or</span> <span m="4603530">maybe</span> <span
  m="4603720">you</span> <span m="4603790">can</span> <span
  m="4603880">tell</span> <span m="4604020">me</span> <span
  m="4604120">what</span> <span m="4604660">some</span> <span
  m="4604840">of</span> <span m="4604900">these</span> <span
  m="4605020">numbers</span> <span m="4605310">are.</span> <span
  m="4605850">What</span> <span m="4606030">is</span> <span
  m="4606150">this</span> <span m="4606330">number?</span></p><p><span
  m="4606750">STUDENT:</span> <span m="4607170">2.</span></p><p><span
  m="4607590">SRINIVAS DEVADAS:</span> <span m="4608010">2.</span> <span
  m="4609460">Right?</span> <span m="4609700">Now,</span> <span
  m="4609810">this</span> <span m="4609980">is</span> <span m="4610050">a</span>
  <span m="4610100">little</span> <span m="4610270">more</span> <span
  m="4610400">tricky.</span> <span m="4611620">Take</span> <span
  m="4611940">a</span> <span m="4611980">look</span> <span m="4612160">at</span>
  <span m="4612300">the</span> <span m="4612990">number</span> <span
  m="4613280">that</span> <span m="4613420">goes</span> <span
  m="4613660">up,</span> <span m="4613970">versus</span> <span
  m="4614280">the</span> <span m="4614350">number</span> <span
  m="4614590">that</span> <span m="4614750">comes</span> <span
  m="4614960">down.</span> <span m="4615190">What</span> <span
  m="4615310">is</span> <span m="4615410">this</span> <span
  m="4615660">number?</span> <span m="4616160">Goes</span> <span
  m="4616380">up.</span></p><p><span m="4616680">STUDENTS:</span> <span
  m="4616980">2.</span></p><p><span m="4617980">SRINIVAS DEVADAS: That's</span>
  <span m="4618220">2,</span> <span m="4618520">because</span> <span
  m="4618820">I</span> <span m="4618940">can</span> <span m="4619100">go</span>
  <span m="4619310">from</span> <span m="4619520">1</span> <span
  m="4619700">to</span> <span m="4619810">3.</span> <span m="4620390">And</span>
  <span m="4620550">this</span> <span m="4620690">number</span> <span
  m="4620930">would</span> <span m="4621080">be?</span></p><p><span
  m="4621270">STUDENTS:</span> <span m="4621710">1.</span></p><p><span
  m="4622150">SRINIVAS DEVADAS: Beautiful.</span> <span m="4623020">All</span>
  <span m="4623170">right,</span> <span m="4623350">you</span> <span
  m="4623420">guys</span> <span m="4623580">got</span> <span
  m="4623810">it.</span> <span m="4624740">Did</span> <span
  m="4624960">my</span> <span m="4625090">job.</span></p><p><span
  m="4636980">All</span> <span m="4637080">right,</span> <span
  m="4637210">so</span> <span m="4637300">that's</span> <span
  m="4637590">our</span> <span m="4637920">residual</span> <span
  m="4638420">network</span> <span m="4639060">for</span> <span
  m="4639410">this</span> <span m="4639640">particular</span> <span
  m="4640170">flow.</span> <span m="4641460">So a</span> <span
  m="4641530">mechanical</span> <span m="4642160">way</span> <span
  m="4642420">of</span> <span m="4642530">computing</span> <span
  m="4642980">it.</span> <span m="4644430">And</span> <span
  m="4644950">you</span> <span m="4645090">should</span> <span
  m="4645200">be</span> <span m="4645260">able</span> <span
  m="4645400">to</span> <span m="4645490">do</span> <span
  m="4645600">that.</span></p><p><span m="4647690">Now</span> <span
  m="4649660">what</span> <span m="4650030">exactly</span> <span
  m="4650930">can</span> <span m="4651120">we</span> <span m="4651210">do</span>
  <span m="4651380">with</span> <span m="4651520">this</span> <span
  m="4651690">residual</span> <span m="4652100">network?</span> <span
  m="4653780">It</span> <span m="4653970">turns</span> <span
  m="4654330">out</span> <span m="4655230">that</span> <span
  m="4656010">the</span> <span m="4656170">algorithm</span> <span
  m="4656570">now</span> <span m="4656780">can</span> <span
  m="4656920">be</span> <span m="4657000">described</span> <span
  m="4658100">in</span> <span m="4658330">a</span> <span
  m="4658610">couple</span> <span m="4658890">of</span> <span
  m="4658950">sentences,</span> <span m="4660200">right?</span> <span
  m="4661280">Essentially</span> <span m="4661680">our</span> <span
  m="4661770">Ford-Fulkerson</span> <span m="4662570">algorithm--</span> <span
  m="4663360">I'm</span> <span m="4663530">not</span> <span
  m="4663670">going</span> <span m="4663790">to</span> <span
  m="4663850">bother</span> <span m="4664150">writing</span> <span
  m="4664410">this</span> <span m="4664560">out,</span> <span
  m="4664750">because</span> <span m="4665440">I'm</span> <span
  m="4665560">going</span> <span m="4665680">to</span> <span
  m="4665740">have</span> <span m="4665830">to</span> <span
  m="4665910">prove</span> <span m="4666230">the</span> <span
  m="4666340">max-flow</span> <span m="4666683">min-cut</span> <span
  m="4667026">theorem</span> <span m="4667370">next</span> <span
  m="4667620">time.</span> <span m="4668300">And</span> <span
  m="4668710">we're</span> <span m="4668770">going</span> <span
  m="4668890">to</span> <span m="4668950">talk</span> <span
  m="4669110">about</span> <span m="4669280">the</span> <span
  m="4669340">Ford-Fulkerson</span> <span m="4670010">algorithm</span> <span
  m="4670770">and</span> <span m="4670960">issues</span> <span
  m="4671360">with</span> <span m="4671540">it</span> <span
  m="4671720">next</span> <span m="4671990">time.</span></p><p><span
  m="4672690">But</span> <span m="4673000">I'm</span> <span
  m="4673130">going</span> <span m="4673250">to</span> <span
  m="4673310">show</span> <span m="4673500">you</span> <span
  m="4673800">how</span> <span m="4673980">the</span> <span
  m="4674050">Ford-Fulkerson</span> <span m="4674700">algorithm</span> <span
  m="4675030">works</span> <span m="4675740">on</span> <span
  m="4675910">this</span> <span m="4676080">particular</span> <span
  m="4676360">example.</span> <span m="4677240">And</span> <span
  m="4677450">it's</span> <span m="4677570">only</span> <span
  m="4677730">going</span> <span m="4677850">to</span> <span
  m="4677910">have</span> <span m="4678050">one</span> <span
  m="4678260">step,</span> <span m="4678830">all</span> <span
  m="4679020">right?</span> <span m="4679590">So</span> <span
  m="4680040">it's</span> <span m="4680200">going</span> <span
  m="4680320">to</span> <span m="4680380">converge</span> <span
  m="4680780">in</span> <span m="4680860">one</span> <span
  m="4681040">step.</span> <span m="4681560">So</span> <span
  m="4681640">it's</span> <span m="4681870">going</span> <span
  m="4681990">to</span> <span m="4682050">be</span> <span
  m="4682110">relatively</span> <span m="4682520">easy.</span> <span
  m="4683570">But</span> <span m="4684100">the</span> <span
  m="4684240">bottom</span> <span m="4684570">line</span> <span
  m="4684850">is</span> <span m="4685230">the</span> <span
  m="4685890">the</span> <span m="4686050">Ford-Fulkerson</span> <span
  m="4686770">algorithm</span> <span m="4687670">is</span> <span
  m="4687870">going</span> <span m="4688010">to</span> <span
  m="4688070">look</span> <span m="4688350">for</span> <span
  m="4690450">augmenting</span> <span m="4691290">paths</span> <span
  m="4695980">in Gf.</span> <span m="4698050">Augmenting</span> <span
  m="4698610">paths</span> <span m="4699090">are</span> <span
  m="4699210">defined</span> <span m="4700780">in</span> <span
  m="4700990">the</span> <span m="4701090">residual</span> <span
  m="4701600">network.</span></p><p><span m="4702940">What</span> <span
  m="4703170">is</span> <span m="4703350">an</span> <span
  m="4703450">augmenting</span> <span m="4703950">path,</span> <span
  m="4704280">you</span> <span m="4704420">ask?</span> <span
  m="4705290">Well,</span> <span m="4705570">an</span> <span
  m="4705650">augmenting</span> <span m="4706110">path</span> <span
  m="4706560">is</span> <span m="4706720">simply</span> <span
  m="4707140">a</span> <span m="4707210">path</span> <span
  m="4708750">from</span> <span m="4709980">s</span> <span m="4710198">in</span>
  <span m="4710416">Gf</span> <span m="4711724">to</span> <span
  m="4712160">t</span> <span m="4712866">in</span> <span m="4713220">Gf,</span>
  <span m="4714120">OK?</span> <span m="4714810">That's</span> <span
  m="4715245">it.</span> <span m="4716115">That's</span> <span
  m="4716550">all</span> <span m="4716700">there</span> <span
  m="4716810">is</span> <span m="4716950">to</span> <span m="4717070">it.</span>
  <span m="4717190">If</span> <span m="4717300">you</span> <span
  m="4717380">can</span> <span m="4717520">find</span> <span
  m="4717840">a</span> <span m="4717880">path,</span> <span
  m="4719000">you</span> <span m="4719080">could</span> <span
  m="4719210">use</span> <span m="4719400">depth-first</span> <span
  m="4719890">search,</span> <span m="4720250">you</span> <span
  m="4720370">could</span> <span m="4720480">use</span> <span
  m="4720650">breadth-first</span> <span m="4721110">search,</span> <span
  m="4721920">you</span> <span m="4722040">could</span> <span
  m="4722160">use</span> <span m="4722330">whatever</span> <span
  m="4722620">you</span> <span m="4722730">wanted.</span> <span
  m="4723510">You</span> <span m="4723650">find</span> <span
  m="4724050">a</span> <span m="4724100">path</span> <span
  m="4724920">from</span> <span m="4725260">s</span> <span m="4726270">to</span>
  <span m="4726410">t,</span> <span m="4727380">OK?</span></p><p><span
  m="4728150">If</span> <span m="4728320">you</span> <span
  m="4728390">find</span> <span m="4728810">such</span> <span
  m="4729050">a</span> <span m="4729100">path,</span> <span
  m="4730100">if</span> <span m="4730150">this</span> <span
  m="4730390">path</span> <span m="4730680">exists,</span> <span
  m="4732270">it</span> <span m="4732450">means</span> <span
  m="4733570">that</span> <span m="4733760">the</span> <span
  m="4733820">flow</span> <span m="4734240">is</span> <span
  m="4734460">not</span> <span m="4734700">maximum,</span> <span
  m="4736120">OK?</span> <span m="4737140">If</span> <span m="4737390">no</span>
  <span m="4737640">path</span> <span m="4737930">exists,</span> <span
  m="4738780">the</span> <span m="4738900">flow</span> <span
  m="4739210">is</span> <span m="4739330">maximum,</span> <span
  m="4740230">and</span> <span m="4740400">you're</span> <span
  m="4740510">done.</span> <span m="4741870">If</span> <span
  m="4742570">such</span> <span m="4742880">a</span> <span
  m="4742940">path</span> <span m="4743230">exists,</span> <span
  m="4744300">you</span> <span m="4744480">will</span> <span
  m="4744790">be</span> <span m="4744910">able</span> <span
  m="4745140">to</span> <span m="4745220">increase</span> <span
  m="4745620">the</span> <span m="4745700">flow,</span> <span
  m="4746650">in</span> <span m="4746800">this</span> <span
  m="4746950">case,</span> <span m="4747160">because</span> <span
  m="4747390">we</span> <span m="4747470">have</span> <span
  m="4747590">integral</span> <span m="4748030">quantities,</span> <span
  m="4748890">by</span> <span m="4749070">at</span> <span
  m="4749170">least</span> <span m="4749430">one,</span> <span
  m="4750480">OK?</span> <span m="4751180">And</span> <span
  m="4751730">you</span> <span m="4751920">will</span> <span
  m="4752060">be</span> <span m="4752150">able</span> <span
  m="4752280">to</span> <span m="4752340">increase</span> <span
  m="4752610">the</span> <span m="4752670">flow</span> <span
  m="4752870">by</span> <span m="4753020">one.</span></p><p><span
  m="4753600">And</span> <span m="4753750">not</span> <span
  m="4753920">only</span> <span m="4754160">that,</span> <span
  m="4754930">the</span> <span m="4755160">augmenting</span> <span
  m="4755720">path</span> <span m="4756080">is</span> <span
  m="4756210">going</span> <span m="4756360">to</span> <span
  m="4756420">tell</span> <span m="4756640">you</span> <span
  m="4756760">exactly</span> <span m="4757890">what</span> <span
  m="4758090">to</span> <span m="4758180">do</span> <span
  m="4758920">with</span> <span m="4759130">respect</span> <span
  m="4759520">to</span> <span m="4760180">what</span> <span
  m="4760470">edges</span> <span m="4760820">to</span> <span
  m="4760920">change,</span> <span m="4762180">sometimes</span> <span
  m="4762710">subtract</span> <span m="4763850">the</span> <span
  m="4764380">flow</span> <span m="4764680">from,</span> <span
  m="4765220">sometimes</span> <span m="4765700">increase,</span> <span
  m="4766570">right?</span> <span m="4766830">So</span> <span
  m="4766885">the</span> <span m="4766940">augmenting</span> <span
  m="4767350">path</span> <span m="4767570">is</span> <span
  m="4767650">going</span> <span m="4767770">to</span> <span
  m="4767830">take</span> <span m="4767960">care</span> <span
  m="4768170">of</span> <span m="4768280">it.</span> <span
  m="4768710">But</span> <span m="4768880">you've</span> <span
  m="4768970">flipped</span> <span m="4769400">it,</span> <span
  m="4769560">so</span> <span m="4769790">everything</span> <span
  m="4770150">is</span> <span m="4770280">positive.</span> <span m="4770992">You
  know,</span> <span m="4771350">life</span> <span m="4771820">is</span> <span
  m="4771920">great.</span> <span m="4772650">Positive</span> <span
  m="4773100">numbers.</span></p><p><span m="4774090">Just</span> <span
  m="4774480">look</span> <span m="4774670">at</span> <span m="4775280">s</span>
  <span m="4775451">to</span> <span m="4775623">t</span> <span
  m="4776310">and</span> <span m="4777400">give</span> <span
  m="4777590">me</span> <span m="4777740">any</span> <span
  m="4778010">path</span> <span m="4779040">from</span> <span
  m="4779310">s</span> <span m="4779570">to</span> <span m="4779680">t</span>
  <span m="4779920">here</span> <span m="4780740">in</span> <span
  m="4782560">the</span> <span m="4783160">residual</span> <span
  m="4783820">network.</span> <span m="4785160">So</span> <span
  m="4785430">let</span> <span m="4786350">me</span> <span
  m="4786410">just</span> <span m="4786560">call</span> <span
  m="4786800">them</span> <span m="4787470">a,</span> <span
  m="4789000">b,</span> <span m="4790960">d,</span> <span m="4792330">and</span>
  <span m="4792570">c.</span> <span m="4793050">And</span> <span
  m="4793250">we</span> <span m="4793310">don't</span> <span
  m="4793460">care</span> <span m="4793650">about</span> <span
  m="4793840">partitions</span> <span m="4794380">or</span> <span
  m="4794450">cuts</span> <span m="4794780">at</span> <span
  m="4794860">this</span> <span m="4795010">point.</span> <span
  m="4795640">That's</span> <span m="4796030">required</span> <span
  m="4796390">for</span> <span m="4796510">proofs.</span> <span
  m="4797410">But</span> <span m="4797750">give</span> <span
  m="4797970">me</span> <span m="4798060">a</span> <span m="4798120">path</span>
  <span m="4798430">from</span> <span m="4798580">s</span> <span
  m="4798750">to</span> <span m="4798870">t</span> <span
  m="4801220">Yeah,</span> <span m="4801410">go</span> <span
  m="4801520">ahead.</span></p><p><span m="4802452">STUDENT: S</span> <span
  m="4802607">to</span> <span m="4802762">a,</span> <span m="4802918">a</span>
  <span m="4803151">to</span> <span m="4803384">b--</span></p><p><span
  m="4804320">All</span> <span m="4804430">right</span> <span
  m="4804760">a</span> <span m="4804800">little</span> <span
  m="4804970">bit</span> <span m="4805080">more</span> <span
  m="4805220">slowly.</span> <span m="4805910">s</span> <span
  m="4806360">a,</span> <span m="4808430">OK.</span> <span
  m="4809060">And</span> <span m="4809230">then?</span></p><p><span
  m="4809950">STUDENT:  a to b.</span></p><p><span m="4810320">SRINIVAS
  DEVADAS:</span> <span m="4810690">a</span> <span m="4811180">to b.</span>
  <span m="4811880">Beautiful.</span></p><p><span m="4812932">STUDENT:</span>
  <span m="4813344">b to c.</span></p><p><span m="4814170">SRINIVAS</span> <span
  m="4814280">DEVADAS:</span> <span m="4814390">b</span> <span
  m="4814500">to</span> <span m="4814611">c.</span></p><p><span
  m="4815493">STUDENT:</span> <span m="4815934">c to</span> <span
  m="4816375">t.</span></p><p><span m="4816820">SRINIVAS DEVADAS: And</span>
  <span m="4817100">c</span> <span m="4817272">to</span> <span
  m="4817445">t.</span> <span m="4817790">Wonderful.</span> <span
  m="4818900">And</span> <span m="4820940">I</span> <span
  m="4821150">have</span> <span m="4822980">a</span> <span
  m="4823070">capacity,</span> <span m="4823830">a</span> <span
  m="4823970">residual</span> <span m="4824450">capacity,</span> <span
  m="4824920">of</span> <span m="4825140">2</span> <span
  m="4825390">here.</span> <span m="4826520">I</span> <span
  m="4826740">have</span> <span m="4826910">a</span> <span
  m="4826990">residual</span> <span m="4827380">capacity</span> <span
  m="4827850">of</span> <span m="4827970">1</span> <span
  m="4828390">here,</span> <span m="4829220">1</span> <span
  m="4829550">here,</span> <span m="4829960">and</span> <span
  m="4830160">1</span> <span m="4830440">here.</span> <span
  m="4831270">And</span> <span m="4831500">so</span> <span
  m="4832570">the</span> <span m="4833820">value</span> <span
  m="4834540">of</span> <span m="4834670">this</span> <span
  m="4834860">augmenting</span> <span m="4835380">path</span> <span
  m="4837060">is</span> <span m="4837710">1,</span> <span
  m="4838580">right?</span> <span m="4838790">It's</span> <span
  m="4838900">not</span> <span m="4839160">2,</span> <span
  m="4840360">because</span> <span m="4841350">the</span> <span
  m="4841420">minimum</span> <span m="4841920">value</span> <span
  m="4842860">is</span> <span m="4843080">what</span> <span m="4843330">I</span>
  <span m="4843440">can</span> <span m="4844330">push</span> <span
  m="4844630">through</span> <span m="4844820">the</span> <span
  m="4844900">network.</span> <span m="4845850">And</span> <span
  m="4846220">I</span> <span m="4846320">just</span> <span
  m="4846500">need</span> <span m="4846630">to</span> <span
  m="4846700">take</span> <span m="4847000">the</span> <span
  m="4847320">min</span> <span m="4847800">of</span> <span
  m="4847950">all</span> <span m="4848160">of</span> <span
  m="4848250">the</span> <span m="4848340">residual</span> <span
  m="4848790">capacities</span> <span m="4849860">corresponding</span> <span
  m="4850390">to</span> <span m="4850480">the</span> <span
  m="4850560">edges</span> <span m="4851030">that</span> <span
  m="4851180">I</span> <span m="4851260">traversed,</span> <span
  m="4852250">that</span> <span m="4852740">correspond</span> <span
  m="4853160">to</span> <span m="4853230">this</span> <span
  m="4853400">particular</span> <span m="4853710">path.</span> <span
  m="4854320">And</span> <span m="4854490">that</span> <span
  m="4854640">min</span> <span m="4854830">value</span> <span
  m="4855260">of</span> <span m="4855380">2,</span> <span m="4855540">1,</span>
  <span m="4855770">1,</span> <span m="4855960">1,</span> <span
  m="4856310">is</span> <span m="4856760">1,</span> <span
  m="4857670">right?</span></p><p><span m="4858180">So</span> <span
  m="4859000">what</span> <span m="4859330">this</span> <span
  m="4859500">means</span> <span m="4859780">is</span> <span
  m="4859960">I've</span> <span m="4860160">discovered</span> <span
  m="4860700">an</span> <span m="4860820">augmenting</span> <span
  m="4861270">path</span> <span m="4862240">of</span> <span
  m="4863470">residual</span> <span m="4864050">capacity,</span> <span
  m="4864680">1.</span> <span m="4865670">Now</span> <span m="4865920">I</span>
  <span m="4865980">can</span> <span m="4866180">go</span> <span
  m="4866380">back</span> <span m="4867310">to</span> <span
  m="4867450">this</span> <span m="4867710">thing</span> <span
  m="4867920">over</span> <span m="4868060">here.</span> <span
  m="4868840">And</span> <span m="4869180">these</span> <span
  m="4869990">edges</span> <span m="4870990">are</span> <span
  m="4871150">going</span> <span m="4871360">to</span> <span
  m="4871430">point</span> <span m="4871870">me,</span> <span
  m="4872900">in</span> <span m="4873050">some</span> <span
  m="4873310">cases,</span> <span m="4873760">to</span> <span
  m="4873860">complimentary</span> <span m="4874570">edges,</span> <span
  m="4874890">in</span> <span m="4874970">some</span> <span
  m="4875180">cases</span> <span m="4875610">to the</span> <span
  m="4875770">direct</span> <span m="4876500">edges</span> <span
  m="4877130">that</span> <span m="4878540">are</span> <span
  m="4878650">going</span> <span m="4878830">to</span> <span
  m="4878920">have</span> <span m="4879160">to</span> <span
  m="4879270">have</span> <span m="4879570">their</span> <span
  m="4879720">flows</span> <span m="4880280">changed,</span> <span
  m="4881190">either</span> <span m="4881670">increased</span> <span
  m="4882200">or</span> <span m="4882300">decreased,</span> <span
  m="4883240">to</span> <span m="4883780">increase</span> <span
  m="4884390">the</span> <span m="4884490">flow</span> <span
  m="4885340">in</span> <span m="4885620">the</span> <span
  m="4885780">original</span> <span m="4886300">network.</span> <span
  m="4887110">So</span> <span m="4887290">you're</span> <span
  m="4887420">guaranteed</span> <span m="4887990">now</span> <span
  m="4888210">that</span> <span m="4888430">f,</span> <span
  m="4889290">which</span> <span m="4889520">caused</span> <span
  m="4889970">this</span> <span m="4890160">residual</span> <span
  m="4890590">network</span> <span m="4891530">to</span> <span
  m="4891660">have</span> <span m="4891890">an</span> <span
  m="4891970">augmenting</span> <span m="4892430">path</span> <span
  m="4892820">in</span> <span m="4892985">it</span> <span m="4893150">was</span>
  <span m="4893430">not</span> <span m="4893820">maximum.</span> <span
  m="4894750">You're</span> <span m="4894870">guaranteed</span> <span
  m="4895360">that,</span> <span m="4895530">because</span> <span
  m="4895760">you</span> <span m="4895830">found</span> <span
  m="4896230">this</span> <span m="4896300">path,</span> <span
  m="4897170">OK?</span></p><p><span m="4897860">So</span> <span
  m="4898380">what</span> <span m="4898510">happens</span> <span
  m="4898810">here?</span> <span m="4899760">Well,</span> <span
  m="4899900">you</span> <span m="4900000">go</span> <span
  m="4900130">back</span> <span m="4900380">up</span> <span
  m="4900580">and</span> <span m="4900690">you</span> <span
  m="4900770">say,</span> <span m="4901800">remember,</span> <span
  m="4902150">I'm</span> <span m="4902240">going</span> <span
  m="4902370">to</span> <span m="4902430">increment</span> <span
  m="4902890">by</span> <span m="4903190">plus</span> <span
  m="4903670">1,</span> <span m="4904170">because</span> <span
  m="4904470">that's</span> <span m="4904760">the</span> <span
  m="4905250">residual</span> <span m="4905720">capacity.</span> <span
  m="4906700">So</span> <span m="4906840">I'm</span> <span
  m="4906930">going</span> <span m="4907050">to</span> <span
  m="4907120">go</span> <span m="4907280">up</span> <span
  m="4907390">here,</span> <span m="4908170">and</span> <span
  m="4908330">I</span> <span m="4908390">have</span> <span m="4909040">s</span>
  <span m="4909208">to</span> <span m="4909376">a.</span> <span
  m="4910050">You'll</span> <span m="4910670">need</span> <span
  m="4910800">to</span> <span m="4910860">help</span> <span
  m="4911000">me</span> <span m="4911110">out</span> <span
  m="4911230">again.</span> <span m="4911890">So</span> <span
  m="4912270">I'm</span> <span m="4912340">going</span> <span
  m="4912460">to</span> <span m="4912520">make</span> <span
  m="4912760">this</span> <span m="4913150">2,</span> <span
  m="4915040">because</span> <span m="4915260">I</span> <span
  m="4915310">needed</span> <span m="4915530">to</span> <span
  m="4915610">add</span> <span m="4915830">a</span> <span m="4915890">one</span>
  <span m="4916120">to</span> <span m="4916260">it.</span></p><p><span
  m="4916800">What</span> <span m="4917000">happens</span> <span
  m="4917300">here?</span> <span m="4918100">This</span> <span
  m="4918260">is</span> <span m="4918360">the</span> <span
  m="4918430">key</span> <span m="4918660">step.</span></p><p><span
  m="4919652">STUDENT:</span> <span m="4920148">Subtract.</span></p><p><span
  m="4920644">SRINIVAS DEVADAS:</span> <span m="4921140">Subtract</span> <span
  m="4921850">and</span> <span m="4921960">make</span> <span
  m="4922200">this</span> <span m="4922530">a 0,</span> <span
  m="4923830">right?</span> <span m="4924280">We're</span> <span
  m="4924440">not</span> <span m="4924590">quite</span> <span
  m="4924810">done.</span> <span m="4925620">What's</span> <span
  m="4926320">next?</span> <span m="4929510">I</span> <span
  m="4929630">have</span> <span m="4929760">b</span> <span m="4929900">to</span>
  <span m="4929980">c,</span> <span m="4930230">right?</span> <span
  m="4931380">Right?</span> <span m="4932730">You're</span> <span
  m="4932920">still</span> <span m="4933090">on</span> <span
  m="4933200">the</span> <span m="4933280">hook.</span></p><p><span
  m="4933650">STUDENT:</span> <span m="4934020">[LAUGHS].</span></p><p><span
  m="4934370">SRINIVAS DEVADAS:</span> <span m="4934720">b</span> <span
  m="4934870">to</span> <span m="4934970">c</span> <span
  m="4935200">becomes?</span></p><p><span m="4936090">STUDENT:
  3.</span></p><p><span m="4936500">SRINIVAS DEVADAS: 3.</span> <span
  m="4937150">Right.</span> <span m="4940650">And</span> <span
  m="4940800">then,</span> <span m="4941320">lastly,</span> <span
  m="4942920">this</span> <span m="4943110">becomes</span> <span
  m="4943620">2.</span> <span m="4947230">OK?</span> <span
  m="4948600">And</span> <span m="4949430">at</span> <span
  m="4949600">this</span> <span m="4949790">point,</span> <span
  m="4950530">if</span> <span m="4950800">you</span> <span
  m="4951300">create</span> <span m="4951750">a</span> <span
  m="4951830">residual</span> <span m="4952420">network</span> <span
  m="4953300">for</span> <span m="4953510">this</span> <span
  m="4953720">new</span> <span m="4954010">flow,</span> <span
  m="4955080">you</span> <span m="4955150">will</span> <span
  m="4955270">not</span> <span m="4955580">be</span> <span
  m="4955690">able</span> <span m="4955920">to</span> <span
  m="4955990">find</span> <span m="4956490">a</span> <span
  m="4956540">path</span> <span m="4957330">in</span> <span
  m="4957500">that</span> <span m="4957680">residual</span> <span
  m="4958070">network</span> <span m="4958470">from</span> <span
  m="4958640">s</span> <span m="4958890">to</span> <span m="4959000">t.</span>
  <span m="4959630">And</span> <span m="4959780">you</span> <span
  m="4959870">know</span> <span m="4960050">you're</span> <span
  m="4960170">done,</span> <span m="4960910">right?</span></p><p><span
  m="4961310">So</span> <span m="4961500">all</span> <span m="4961660">of</span>
  <span m="4961750">this</span> <span m="4962830">works.</span> <span
  m="4963790">We</span> <span m="4963980">haven't</span> <span
  m="4964210">quite</span> <span m="4964870">shown</span> <span
  m="4965380">that</span> <span m="4965510">it</span> <span
  m="4965610">works,</span> <span m="4965960">because</span> <span
  m="4966180">we</span> <span m="4966270">haven't</span> <span
  m="4966450">done</span> <span m="4967350">enough</span> <span
  m="4967690">of</span> <span m="4967810">the</span> <span
  m="4967890">proofs.</span> <span m="4968440">But</span> <span
  m="4968620">you</span> <span m="4968710">have</span> <span
  m="4968830">a</span> <span m="4968870">sense</span> <span
  m="4969200">as</span> <span m="4969340">to</span> <span m="4969420">why</span>
  <span m="4969610">this</span> <span m="4969770">works.</span> <span
  m="4970380">You</span> <span m="4970480">could</span> <span
  m="4970600">probably</span> <span m="4970850">code</span> <span
  m="4971100">this</span> <span m="4971260">up.</span> <span
  m="4971570">It</span> <span m="4971980">would</span> <span
  m="4972100">all</span> <span m="4972260">work.</span> <span
  m="4972860">A</span> <span m="4972890">couple</span> <span
  m="4973100">of</span> <span m="4973180">issues</span> <span
  m="4973780">in</span> <span m="4974000">applications.</span> <span
  m="4974600">See</span> <span m="4974900">you</span> <span
  m="4975200">next</span> <span m="4975500">time.</span></p>
uid: b772acb793d5abd0aeb930864630d4d6
type: courses
layout: video
---
