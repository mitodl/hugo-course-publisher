---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas introduces
  randomized algorithms, looking at solving sorting problems with this new
  tool.</p><p><strong>Instructors:</strong> Srinivas Devadas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: cNB2lADK3_s
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 5f0365dc8d1883f141c5ecf829df3939
  - id: cNB2lADK3_s.srt
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-6-randomization-matrix-multiply-quicksort/cNB2lADK3_s.srt
    title: 3play caption file
    type: null
    uid: 52af1f90386b6dc7bdd07e7cc8e159f3
  - id: cNB2lADK3_s.pdf
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-6-randomization-matrix-multiply-quicksort/cNB2lADK3_s.pdf
    title: 3play pdf file
    type: null
    uid: c8888f8cb42e1d6e1a2f11f9f71d5d5e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f6e0342b8db12bf0a99d5a288a4ae808
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 48929fae8de0059bb7c95394b8bd1359
  - id: Video-YouTube-Stream
    media_location: cNB2lADK3_s
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    title: Video-YouTube-Stream
    type: Video
    uid: 884103e11027033102f317f2c171680b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/cNB2lADK3_s/default.jpg'
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2b696dfafeba8642104ac6220909980f
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    title: Video-iTunes U-MP4
    type: Video
    uid: eacb8cd1ea1e3194b7f4d268fd34daac
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec06_300k.mp4'
    parent_uid: 8484e787729f4e732109065f90f0f5d9
    title: Video-Internet Archive-MP4
    type: Video
    uid: f0c05704fd6dc34aedb2ef9cb0e168f0
inline_embed_id: '37251591lecture6:randomization:matrixmultiply,quicksort90602828'
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-6-randomization-matrix-multiply-quicksort
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-6-randomization-matrix-multiply-quicksort
title: 'Lecture 6: Randomization: Matrix Multiply, Quicksort'
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
  m="9370">for</span> <span m="9520">free.</span></p><p><span
  m="10730">To</span> <span m="10830">make</span> <span m="10940">a</span> <span
  m="10980">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13330">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15790">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21340">SRINIVAS DEVADAS: All</span> <span m="21430">right.</span> <span
  m="21720">Good</span> <span m="21860">morning,</span> <span
  m="22120">everyone.</span> <span m="23610">Let's</span> <span
  m="23850">get</span> <span m="24010">started.</span> <span m="25280">A</span>
  <span m="25810">new</span> <span m="26640">module</span> <span
  m="27270">today--</span> <span m="28400">we're</span> <span
  m="28550">going</span> <span m="28820">to</span> <span m="29320">spend</span>
  <span m="29670">a</span> <span m="29730">few</span> <span
  m="29930">lectures</span> <span m="31920">on</span> <span
  m="32150">randomized</span> <span m="32800">algorithms.</span></p><p><span
  m="34320">And</span> <span m="34590">so</span> <span m="36420">not</span>
  <span m="36670">only</span> <span m="36880">will</span> <span
  m="37090">we</span> <span m="37550">look</span> <span m="37870">at</span>
  <span m="38610">slightly</span> <span m="39110">different</span> <span
  m="39400">ways</span> <span m="39740">of</span> <span m="39840">solving</span>
  <span m="40310">old</span> <span m="40630">problems</span> <span
  m="41540">like</span> <span m="41860">sorting,</span> <span
  m="43440">we'll</span> <span m="43620">also</span> <span m="43960">look</span>
  <span m="44190">at</span> <span m="44510">how</span> <span m="44810">we</span>
  <span m="44930">can</span> <span m="45080">analyze</span> <span
  m="46400">this</span> <span m="46640">new</span> <span m="46830">kind</span>
  <span m="47130">of</span> <span m="47230">algorithm</span> <span
  m="47720">that</span> <span m="48110">generates</span> <span
  m="48600">random</span> <span m="48930">numbers</span> <span
  m="50040">in</span> <span m="50210">order</span> <span m="50440">to</span>
  <span m="50920">actually</span> <span m="51260">make</span> <span
  m="51470">decisions</span> <span m="52620">as</span> <span
  m="52940">it's</span> <span m="53330">executing</span> <span
  m="53850">and</span> <span m="54450">that</span> <span m="55130">we'll</span>
  <span m="55340">end</span> <span m="55530">up</span> <span
  m="55680">obviously</span> <span m="57010">with</span> <span
  m="57310">the</span> <span m="57920">analysis</span> <span
  m="58730">that</span> <span m="59610">gives</span> <span m="59990">us</span>
  <span m="61220">the</span> <span m="61390">expected</span> <span
  m="61970">run</span> <span m="62230">time</span> <span m="63070">of</span>
  <span m="63190">the</span> <span m="63260">algorithm--</span> <span
  m="63690">for</span> <span m="63830">example,</span> <span
  m="66050">whether</span> <span m="66540">the</span> <span
  m="66680">algorithm</span> <span m="67040">is</span> <span
  m="67130">going</span> <span m="67250">to</span> <span
  m="67300">produce</span> <span m="67580">a</span> <span
  m="67650">correct</span> <span m="67930">result</span> <span
  m="68260">or</span> <span m="68350">not,</span> <span m="68790">with</span>
  <span m="68980">what</span> <span m="69220">probability</span> <span
  m="70060">will</span> <span m="70260">this</span> <span
  m="70420">algorithm</span> <span m="71550">produce</span> <span
  m="71910">a</span> <span m="71970">correct</span> <span
  m="72280">result.</span></p><p><span m="73660">So</span> <span
  m="73890">I'll</span> <span m="74720">talk</span> <span m="74880">a</span>
  <span m="74940">little</span> <span m="75150">bit</span> <span
  m="75300">about</span> <span m="76360">why</span> <span m="76730">we're</span>
  <span m="76980">interested</span> <span m="77270">in</span> <span
  m="77370">randomized</span> <span m="77900">algorithms</span> <span
  m="78700">in</span> <span m="78810">a</span> <span m="78870">couple</span>
  <span m="79120">of</span> <span m="79170">minutes,</span> <span
  m="79980">but</span> <span m="80130">let</span> <span m="80270">me</span>
  <span m="80860">define</span> <span m="82840">what</span> <span
  m="83730">a</span> <span m="83810">randomized</span> <span
  m="84370">algorithm,</span> <span m="84870">or</span> <span m="85070">a</span>
  <span m="85270">probabilistic</span> <span m="86050">algorithm,</span> <span
  m="86540">is</span> <span m="89520">to</span> <span m="89710">start</span>
  <span m="90020">things</span> <span
  m="90290">off.</span></p><p>&nbsp;</p><p><span m="98000">And</span> <span
  m="98250">so</span> <span m="98370">randomized</span> <span
  m="98930">algorithm</span> <span m="99500">is</span> <span
  m="101610">something</span> <span m="102050">that</span> <span
  m="105660">generates</span> <span m="106230">a</span> <span
  m="106310">random</span> <span
  m="106730">number.</span></p><p>&nbsp;</p><p><span m="112250">Now,</span>
  <span m="112400">this</span> <span m="112580">would</span> <span
  m="112710">be</span> <span m="112830">a</span> <span m="112920">coinage</span>
  <span m="113260">flip,</span> <span m="114990">but</span> <span
  m="115660">more</span> <span m="115990">often</span> <span
  m="116260">than</span> <span m="116420">not,</span> <span
  m="117290">you're</span> <span m="117400">generating</span> <span
  m="119580">a</span> <span m="119640">real</span> <span
  m="119940">number</span> <span m="121230">that</span> <span
  m="122050">comes</span> <span m="122370">from</span> <span m="122530">a</span>
  <span m="122580">sudden</span> <span m="122920">range.</span> <span
  m="124510">Sometimes</span> <span m="125040">you're</span> <span
  m="125180">generating</span> <span m="125630">a</span> <span
  m="125680">vector.</span> <span m="126410">You'll</span> <span
  m="126620">see</span> <span m="128470">a</span> <span m="128580">couple</span>
  <span m="128700">of</span> <span m="128820">different</span> <span
  m="129060">examples</span> <span m="129570">here</span> <span
  m="130210">in</span> <span m="130900">today's</span> <span
  m="131190">lecture</span> <span m="132910">and</span> <span
  m="133100">in</span> <span m="133660">section.</span> <span
  m="135620">And</span> <span m="135880">it's</span> <span
  m="136010">going</span> <span m="136130">to</span> <span
  m="136170">make</span> <span m="136390">decisions</span> <span
  m="138210">based</span> <span m="138760">on</span> <span
  m="138900">this</span> <span m="139100">value,</span> <span
  m="143730">based</span> <span m="144200">on</span> <span m="144330">r's</span>
  <span m="145910">actual</span> <span
  m="146250">value.</span></p><p>&nbsp;</p><p><span m="150920">Now,</span> <span
  m="151060">you</span> <span m="151150">can</span> <span
  m="151250">imagine</span> <span m="151630">that</span> <span
  m="152200">an</span> <span m="152380">algorithm</span> <span
  m="152740">would</span> <span m="152850">be</span> <span
  m="152970">recursive,</span> <span m="153630">and</span> <span
  m="153760">at</span> <span m="153860">every</span> <span
  m="154140">level</span> <span m="154390">of</span> <span
  m="154470">recursion,</span> <span m="155040">it's</span> <span
  m="155160">going</span> <span m="155280">to</span> <span
  m="155340">generate</span> <span m="155740">a</span> <span
  m="155800">random</span> <span m="156170">r.</span> <span m="157700">So</span>
  <span m="158850">when</span> <span m="159600">you're</span> <span
  m="159800">executing</span> <span m="160290">at</span> <span
  m="160370">a</span> <span m="160410">particular</span> <span
  m="160710">level</span> <span m="160960">of</span> <span
  m="161040">recursion,</span> <span m="161950">you</span> <span
  m="162120">may</span> <span m="162230">be</span> <span m="162330">doing</span>
  <span m="162530">different</span> <span m="162870">things</span> <span
  m="163720">based</span> <span m="164550">on</span> <span m="164700">r.</span>
  <span m="165580">And</span> <span m="165970">not</span> <span
  m="166170">only</span> <span m="166380">that,</span> <span
  m="167550">if</span> <span m="167660">you</span> <span
  m="167810">re-run</span> <span m="168140">the</span> <span
  m="168410">algorithm</span> <span m="168640">again</span> <span
  m="169630">on</span> <span m="169840">the</span> <span m="169920">same</span>
  <span m="170260">input,</span> <span m="171180">the</span> <span
  m="171360">execution</span> <span m="171910">will</span> <span
  m="172030">be</span> <span m="172140">different</span> <span
  m="172990">because</span> <span m="173900">you're</span> <span
  m="174110">resuming</span> <span m="174480">a</span> <span
  m="174750">true</span> <span m="175460">random</span> <span
  m="175820">number</span> <span m="176070">generator</span> <span
  m="176660">as</span> <span m="176780">opposed</span> <span
  m="177090">to</span> <span m="177620">a</span> <span m="177720">pseudo</span>
  <span m="178070">random</span> <span m="178430">one.</span> <span
  m="179670">And</span> <span m="179970">the</span> <span m="180270">r's</span>
  <span m="180640">that</span> <span m="180850">you're</span> <span
  m="180940">going</span> <span m="181080">to</span> <span m="181140">get</span>
  <span m="181630">at</span> <span m="181800">different</span> <span
  m="182080">levels</span> <span m="182400">of</span> <span
  m="182800">recursion</span> <span m="183390">or</span> <span
  m="183720">through</span> <span m="183880">the</span> <span
  m="183980">execution</span> <span m="184570">of</span> <span
  m="184660">the</span> <span m="184730">algorithm</span> <span
  m="185570">are</span> <span m="185680">going</span> <span m="185800">to</span>
  <span m="185860">be</span> <span m="185980">different</span> <span
  m="186710">from</span> <span m="186920">the</span> <span
  m="187020">first</span> <span m="187330">time</span> <span
  m="187610">to</span> <span m="187700">the</span> <span
  m="187810">second</span> <span m="188130">time.</span></p><p><span
  m="190890">So</span> <span m="191280">on</span> <span m="191460">the</span>
  <span m="191550">same</span> <span m="191990">input</span> <span
  m="199020">on</span> <span m="199590">different</span> <span
  m="200070">executions,</span> <span m="202880">two</span> <span
  m="203080">things</span> <span m="203330">might</span> <span
  m="203510">happen.</span> <span m="206850">The</span> <span
  m="207200">algorithm</span> <span m="207360">may</span> <span
  m="207680">run</span> <span m="208820">for</span> <span m="209170">a</span>
  <span m="209210">different</span> <span m="209700">number</span> <span
  m="209990">of</span> <span m="210070">steps.</span></p><p><span
  m="215540">So</span> <span m="215680">you</span> <span m="215780">might</span>
  <span m="215960">get</span> <span m="216100">lucky</span> <span
  m="217080">on</span> <span m="217270">the</span> <span m="217340">first</span>
  <span m="217670">execution,</span> <span m="218330">and</span> <span
  m="218395">the</span> <span m="218460">algorithm</span> <span
  m="219130">finishes,</span> <span m="220080">let's</span> <span
  m="220260">say</span> <span m="220335">at</span> <span m="220410">100</span>
  <span m="220790">time</span> <span m="221020">units.</span> <span
  m="221860">The</span> <span m="221970">second</span> <span
  m="222240">time</span> <span m="222450">around,</span> <span
  m="222830">it</span> <span m="222940">takes</span> <span m="223760">a</span>
  <span m="223840">long</span> <span m="224210">time.</span> <span
  m="224520">It</span> <span m="224630">takes</span> <span m="224860">700</span>
  <span m="225340">time</span> <span m="225550">units.</span></p><p><span
  m="226940">Our</span> <span m="227110">goal</span> <span
  m="227480">here</span> <span m="228440">is</span> <span m="228670">to</span>
  <span m="228820">try</span> <span m="229170">and</span> <span
  m="230200">analyze</span> <span m="231460">what</span> <span
  m="231780">this</span> <span m="232020">probabilistic</span> <span
  m="232690">runtime</span> <span m="233200">would</span> <span
  m="233370">be</span> <span m="234420">to</span> <span m="234920">ask</span>
  <span m="235340">for</span> <span m="237260">an</span> <span
  m="237510">expectation,</span> <span m="238590">to</span> <span
  m="238650">be</span> <span m="238760">able</span> <span m="238900">to</span>
  <span m="238960">compute</span> <span m="239320">an</span> <span
  m="239400">expectation</span> <span m="240580">for</span> <span
  m="240800">the</span> <span m="240900">runtime,</span> <span
  m="242190">or--</span> <span m="242800">if</span> <span
  m="242980">you're</span> <span m="243120">talking</span> <span
  m="243410">about</span> <span m="244540">a</span> <span
  m="244600">different</span> <span m="246390">scenario</span> <span
  m="247130">where</span> <span m="247640">different</span> <span
  m="248010">executions--</span> <span m="249310">I</span> <span
  m="249470">could</span> <span m="249670">actually</span> <span
  m="249980">produce</span> <span m="251320">different</span> <span
  m="251650">outputs.</span></p><p>&nbsp;</p><p><span m="258839">And</span>
  <span m="259050">in</span> <span m="259149">this</span> <span
  m="259339">case,</span> <span m="260870">it's</span> <span
  m="261029">possible</span> <span m="261440">that</span> <span
  m="262980">one</span> <span m="263260">or</span> <span m="263310">more</span>
  <span m="263560">of</span> <span m="263640">these</span> <span
  m="263840">outputs</span> <span m="264230">are</span> <span
  m="264380">incorrect.</span> <span m="265320">You</span> <span
  m="265480">actually</span> <span m="265740">get</span> <span
  m="265920">the</span> <span m="266030">wrong</span> <span
  m="266400">answer.</span> <span m="267930">And</span> <span
  m="269070">obviously,</span> <span m="270270">that's</span> <span
  m="270540">going</span> <span m="270650">to</span> <span
  m="270690">happen</span> <span m="270980">with</span> <span
  m="271110">a</span> <span m="271160">certain</span> <span
  m="271440">probability.</span> <span m="272810">You're</span> <span
  m="273110">going</span> <span m="273270">to</span> <span
  m="273320">have</span> <span m="273670">to</span> <span
  m="276230">decide</span> <span m="276860">or</span> <span
  m="277480">analyze</span> <span m="277940">what</span> <span
  m="278130">that</span> <span m="278260">probability</span> <span
  m="278840">is.</span></p><p><span m="280200">And</span> <span
  m="282730">generally</span> <span m="282860">speaking,</span> <span
  m="283270">we</span> <span m="283350">won't</span> <span m="283580">be</span>
  <span m="284000">happy</span> <span m="284520">with</span> <span
  m="285140">a</span> <span m="285220">high</span> <span
  m="285480">probability</span> <span m="286100">of</span> <span
  m="286230">error,</span> <span m="286870">as</span> <span
  m="287050">you</span> <span m="287140">can</span> <span
  m="287250">imagine.</span> <span m="288110">And</span> <span
  m="288340">we'd</span> <span m="288470">like</span> <span m="288720">to</span>
  <span m="289430">set</span> <span m="289690">up</span> <span
  m="289830">an</span> <span m="289940">algorithm</span> <span
  m="290920">such</span> <span m="291290">that</span> <span
  m="291880">you</span> <span m="292050">can</span> <span
  m="292700">reduce</span> <span m="293210">that</span> <span
  m="293850">probability</span> <span m="294420">of</span> <span
  m="294690">incorrect</span> <span m="295440">output</span> <span
  m="296450">to</span> <span m="296580">be</span> <span
  m="296680">something</span> <span m="297340">really,</span> <span
  m="297740">really</span> <span m="297850">small.</span> <span
  m="299410">And</span> <span m="300230">it</span> <span m="300360">might</span>
  <span m="300620">take</span> <span m="300870">you</span> <span
  m="302700">longer</span> <span m="303290">to</span> <span
  m="303380">get</span> <span m="303630">to</span> <span m="303710">that</span>
  <span m="306340">low</span> <span m="306610">level</span> <span
  m="306990">of</span> <span m="309260">incorrect</span> <span
  m="309650">output</span> <span m="310620">in</span> <span
  m="310790">one</span> <span m="310990">case</span> <span m="312100">for</span>
  <span m="312380">a</span> <span m="312430">certain</span> <span
  m="312665">set</span> <span m="312900">of</span> <span
  m="312980">inputs</span> <span m="313560">versus</span> <span
  m="313910">another</span> <span m="314180">case.</span></p><p><span
  m="315350">So</span> <span m="316510">that's</span> <span
  m="317070">this</span> <span m="317710">set</span> <span m="317950">up</span>
  <span m="318120">here</span> <span m="318460">in</span> <span
  m="318560">terms</span> <span m="318770">of</span> <span
  m="318860">randomized.</span> <span m="320780">You're</span> <span
  m="321010">going</span> <span m="321130">to</span> <span
  m="321170">have</span> <span m="321340">algorithms</span> <span
  m="321940">that--</span> <span m="323340">you</span> <span
  m="323490">can</span> <span m="323590">think</span> <span m="323760">of</span>
  <span m="323880">them</span> <span m="324100">as</span> <span
  m="324910">probably</span> <span m="325570">correct.</span> <span
  m="327670">So</span> <span m="328670">these</span> <span m="328900">are</span>
  <span m="330470">algorithms--</span> <span m="330740">you</span> <span
  m="330840">want</span> <span m="330930">to</span> <span
  m="330980">think</span> <span m="331150">of</span> <span
  m="331250">them</span> <span m="331370">as</span> <span
  m="331460">probably</span> <span m="331880">correct,</span> <span
  m="332330">and</span> <span m="332365">they</span> <span m="332400">do</span>
  <span m="332560">have</span> <span m="333230">a</span> <span
  m="333390">name.</span> <span m="333750">They're</span> <span
  m="333880">called</span> <span m="334360">Monte</span> <span
  m="334720">Carlo</span> <span m="335280">algorithms.</span></p><p><span
  m="337930">And</span> <span m="338070">then</span> <span m="338230">you</span>
  <span m="338320">have</span> <span m="338520">algorithms</span> <span
  m="338980">that</span> <span m="339090">are</span> <span
  m="339400">probably</span> <span
  m="340030">fast.</span></p><p>&nbsp;</p><p><span m="344850">So--</span> <span
  m="347730">indicates</span> <span m="348110">a</span> <span
  m="348170">probably</span> <span m="348940">correct--</span> <span
  m="350080">you</span> <span m="350540">could</span> <span
  m="351010">have</span> <span m="351160">a</span> <span
  m="351230">constant</span> <span m="351690">probability</span> <span
  m="352300">that</span> <span m="352830">they're</span> <span
  m="352950">going</span> <span m="353070">to</span> <span
  m="353110">give</span> <span m="353300">you</span> <span m="353440">the</span>
  <span m="353830">correct</span> <span m="354170">answer,</span> <span
  m="355200">99%.</span> <span m="357150">And</span> <span m="357380">you</span>
  <span m="357500">could</span> <span m="357760">obviously</span> <span
  m="358110">try</span> <span m="358235">and</span> <span
  m="358360">parametrize</span> <span m="359000">that.</span> <span
  m="359470">In</span> <span m="359760">the case</span> <span
  m="360150">of</span> <span m="360220">probably</span> <span
  m="360770">fast,</span> <span m="362060">you</span> <span
  m="362440">say</span> <span m="362650">things</span> <span
  m="362980">like,</span> <span m="363310">it</span> <span
  m="363400">runs</span> <span m="363610">an</span> <span
  m="363820">expected</span> <span m="364500">polynomial</span> <span
  m="365120">time.</span> <span m="366050">And</span> <span
  m="367400">really</span> <span m="367660">what</span> <span
  m="367810">that</span> <span m="367940">means</span> <span
  m="368200">is</span> <span m="368350">that</span> <span m="369580">you</span>
  <span m="369820">may</span> <span m="369910">have</span> <span
  m="370120">to</span> <span m="370260">run</span> <span m="370480">it</span>
  <span m="371260">for</span> <span m="371610">more</span> <span
  m="371940">information.</span> <span m="372630">So</span> <span
  m="372920">rather</span> <span m="373180">than</span> <span
  m="373390">taking</span> <span m="374380">100</span> <span
  m="374790">iterations</span> <span m="375460">or</span> <span
  m="375580">100</span> <span m="376350">steps</span> <span m="376830">to</span>
  <span m="376940">sort</span> <span m="377350">something,</span> <span
  m="378230">it</span> <span m="378480">might</span> <span
  m="378660">take</span> <span m="378830">you</span> <span
  m="378950">110.</span></p><p><span m="380410">But</span> <span
  m="380520">in</span> <span m="380580">the</span> <span m="380670">case</span>
  <span m="380870">of</span> <span m="380960">probably</span> <span
  m="381400">fast,</span> <span m="382230">you</span> <span m="382370">do</span>
  <span m="382560">get</span> <span m="382790">the</span> <span
  m="382880">sorted</span> <span m="383320">result</span> <span
  m="383940">at</span> <span m="384100">the</span> <span m="384170">end.</span>
  <span m="385220">And</span> <span m="385420">when</span> <span
  m="385560">the</span> <span m="385660">algorithm</span> <span
  m="386090">has</span> <span m="386220">finished</span> <span
  m="386580">execution,</span> <span m="387330">you</span> <span
  m="387480">do</span> <span m="387620">get</span> <span m="387800">that</span>
  <span m="387960">sorted</span> <span m="388230">result</span> <span
  m="388495">at</span> <span m="388627">the</span> <span m="388760">end.</span>
  <span m="389410">So</span> <span m="389580">it's</span> <span
  m="389850">correct</span> <span m="390280">and</span> <span
  m="390440">probably</span> <span m="390860">fast</span> <span
  m="392130">or</span> <span m="393950">probably</span> <span
  m="394420">correct</span> <span m="395090">and</span> <span
  m="395970">deterministically</span> <span m="396680">fast.</span> <span
  m="397570">OK.</span> <span m="398090">And</span> <span m="398420">this</span>
  <span m="399190">is</span> <span m="399360">Las</span> <span
  m="399670">Vegas.</span> <span m="401060">So</span> <span
  m="401260">you</span> <span m="401340">have</span> <span
  m="401460">Monte</span> <span m="401760">Carlo</span> <span
  m="402120">versus</span> <span m="402420">Las</span> <span
  m="402690">Vegas</span> <span m="403050">here.</span></p><p><span
  m="404450">So</span> <span m="406080">yesterday,</span> <span
  m="407470">it</span> <span m="407570">occurred</span> <span
  m="407820">to</span> <span m="407940">me--</span> <span m="408040">and</span>
  <span m="408170">I've</span> <span m="408260">taught</span> <span
  m="408530">this</span> <span m="408670">class</span> <span m="408900">a</span>
  <span m="408940">bunch</span> <span m="409130">of</span> <span
  m="409200">times--</span> <span m="409620">but</span> <span
  m="409720">it</span> <span m="409820">occurred</span> <span
  m="409980">to</span> <span m="410070">me</span> <span m="410210">for</span>
  <span m="410290">the</span> <span m="410380">first</span> <span
  m="410620">time</span> <span m="410820">last</span> <span
  m="411090">night</span> <span m="411710">that</span> <span
  m="411880">there</span> <span m="411970">should</span> <span
  m="412220">be</span> <span m="412390">algorithms</span> <span
  m="412880">that</span> <span m="412990">are</span> <span
  m="413900">probably</span> <span m="414410">correct</span> <span
  m="414860">and</span> <span m="415130">probably</span> <span
  m="415590">fast,</span> <span m="416510">which</span> <span
  m="416580">means</span> <span m="416790">that</span> <span
  m="416940">they're</span> <span m="417050">incorrect</span> <span
  m="417560">and</span> <span m="417680">slow</span> <span
  m="418540">some</span> <span m="418740">of</span> <span m="418800">the</span>
  <span m="418900">time.</span> <span m="419560">Right?</span> <span
  m="420100">So</span> <span m="420300">what</span> <span m="420410">do</span>
  <span m="420450">you</span> <span m="420530">think</span> <span
  m="420730">those</span> <span m="420960">algorithms</span> <span
  m="421410">are</span> <span m="421480">called?</span> <span
  m="424030">Sorry.</span> <span m="424400">What?</span></p><p><span
  m="425222">AUDIENCE:</span> <span m="425674">T?</span></p><p><span
  m="426580">SRINIVAS DEVADAS: The</span> <span m="426700">T?</span> <span
  m="427610">Oh.</span> <span m="428130">Oh!</span> <span m="428330">That</span>
  <span m="428510">deserves</span> <span m="428670">a</span> <span
  m="428880">Frisbee.</span> <span m="429500">Oh</span> <span
  m="429640">my</span> <span m="429800">goodness!</span> <span
  m="430700">[LAUGHS]</span> <span m="431070">All</span> <span
  m="431730">right.</span> <span m="431980">There</span> <span
  m="432150">you</span> <span m="432230">go.</span> <span
  m="432920">There</span> <span m="433170">you</span> <span
  m="433327">go.</span></p><p><span m="434125">All</span> <span
  m="434450">right.</span></p><p><span m="434680">Now,</span> <span
  m="434820">they're</span> <span m="434930">not</span> <span
  m="435160">called</span> <span m="435420">the</span> <span
  m="435520">T.</span> <span m="437750">So</span> <span m="437840">we</span>
  <span m="437890">should</span> <span m="437940">write</span> <span
  m="438030">that</span> <span m="438200">down</span> <span m="439080">so</span>
  <span m="439490">everyone</span> <span m="440110">knows.</span> <span
  m="441740">Probably</span> <span m="442710">correct</span> <span
  m="446880">and</span> <span m="447340">probably</span> <span
  m="447910">fast,</span> <span m="448310">which</span> <span
  m="448470">is</span> <span m="448580">I</span> <span m="448630">guess</span>
  <span m="450050">they</span> <span m="450800">don't</span> <span
  m="451050">get</span> <span m="451200">you</span> <span
  m="451330">anywhere.</span> <span m="451970">I</span> <span
  m="451980">don't</span> <span m="452240">know</span> <span
  m="452340">what</span> <span m="452470">that</span> <span
  m="452610">means--</span> <span m="453000">incorrect</span> <span
  m="453520">and</span> <span m="453660">so</span> <span m="454160">in</span>
  <span m="454340">the</span> <span m="454440">case</span> <span
  m="454650">of</span> <span m="454720">the</span> <span
  m="454830">T.</span></p><p><span m="457480">So</span> <span
  m="457660">the</span> <span m="457750">MB/TA.</span></p><p><span
  m="462540">Any</span> <span m="462740">guesses?</span> <span
  m="463160">I</span> <span m="463210">mean,</span> <span
  m="463560">think</span> <span m="463710">about</span> <span
  m="464680">what</span> <span m="465230">we</span> <span m="465350">have</span>
  <span m="465610">for</span> <span m="466480">Monte</span> <span
  m="466790">Carlo,</span> <span m="467200">Las</span> <span
  m="467440">Vegas.</span> <span m="468820">Extrapolate.</span> <span
  m="471380">These</span> <span m="471780">are</span> <span
  m="471840">the</span> <span m="471930">kinds</span> <span m="472170">of</span>
  <span m="472220">questions</span> <span m="472590">you're</span> <span
  m="472670">going</span> <span m="472750">to</span> <span m="472790">get</span>
  <span m="472950">on</span> <span m="473050">your</span> <span
  m="473190">quiz.</span></p><p>&nbsp;</p><p><span m="478680">I</span> <span
  m="478780">guess</span> <span m="478950">you</span> <span
  m="479030">guys</span> <span m="479230">don't</span> <span
  m="479310">gamble</span> <span m="479730">you.</span> <span
  m="480460">Go</span> <span m="480540">ahead.</span></p><p><span
  m="481230">AUDIENCE: Atlantic City.</span></p><p><span m="481610">SRINIVAS
  DEVADAS: Atlantic</span> <span m="481740">City.</span> <span
  m="482160">That</span> <span m="482500">deserves</span> <span
  m="482980">a</span> <span m="483050">Frisbee.</span> <span
  m="483930">Yeah.</span> <span m="485390">Absolutely</span> <span
  m="485840">right.</span> <span m="486100">That</span> <span
  m="486890">It</span> <span m="487025">turns</span> <span m="487160">out</span>
  <span m="487540">Atlantic</span> <span m="488070">City</span> <span
  m="489050">isn't</span> <span m="490110">a</span> <span m="490220">name</span>
  <span m="490580">that's</span> <span m="490780">really</span> <span
  m="491000">caught</span> <span m="491270">on,</span> <span
  m="492500">but</span> <span m="492690">it</span> <span m="492780">was</span>
  <span m="493950">in</span> <span m="494110">terms</span> <span
  m="494380">of</span> <span m="497090">being</span> <span
  m="497350">used</span> <span m="497740">in</span> <span m="497820">this</span>
  <span m="497990">context.</span></p><p><span m="500540">Most</span> <span
  m="500840">of</span> <span m="500900">the</span> <span m="500990">time,</span>
  <span m="501500">if</span> <span m="501640">you</span> <span
  m="501730">do</span> <span m="501940">have</span> <span m="502140">a</span>
  <span m="502210">probably</span> <span m="502690">correct</span> <span
  m="503050">probably</span> <span m="503450">fast</span> <span
  m="503790">algorithm,</span> <span m="504200">you</span> <span
  m="504320">can</span> <span m="504440">convert</span> <span
  m="504800">it</span> <span m="504920">into</span> <span m="505180">a</span>
  <span m="505570">Monte</span> <span m="505910">Carlo</span> <span
  m="506330">algorithm</span> <span m="506760">or</span> <span
  m="506815">a</span> <span m="506870">Las</span> <span m="507130">Vegas</span>
  <span m="507450">algorithm.</span> <span m="508400">There</span> <span
  m="508590">are</span> <span m="509200">some</span> <span
  m="509940">prime</span> <span m="510420">testing</span> <span
  m="510840">algorithms</span> <span m="512250">to</span> <span
  m="512510">test</span> <span m="512870">whether</span> <span
  m="513130">a</span> <span m="513200">particular</span> <span
  m="513549">number</span> <span m="513880">is</span> <span m="513980">a</span>
  <span m="514039">prime</span> <span m="514409">or</span> <span
  m="514470">not</span> <span m="515340">that</span> <span m="515760">run</span>
  <span m="516010">in</span> <span m="516140">probabilistic</span> <span
  m="516730">polynomial</span> <span m="517230">time,</span> <span
  m="517620">and</span> <span m="518110">they</span> <span m="518250">may</span>
  <span m="519039">incorrectly</span> <span m="519669">tell</span> <span
  m="519929">you</span> <span m="520120">that</span> <span m="520919">the</span>
  <span m="521020">number</span> <span m="521270">is</span> <span
  m="521400">a</span> <span m="521460">prime.</span> <span m="522330">So</span>
  <span m="522409">that's</span> <span m="523559">an</span> <span
  m="523669">example</span> <span m="524059">of</span> <span
  m="524150">an</span> <span m="524230">Atlantic</span> <span
  m="524650">City</span> <span m="524930">algorithm.</span></p><p><span
  m="526060">We</span> <span m="526240">won't</span> <span
  m="526470">actually</span> <span m="526910">do</span> <span
  m="527140">Atlantic</span> <span m="527560">City.</span> <span
  m="529170">What</span> <span m="529620">we'll</span> <span
  m="529770">do</span> <span m="529980">is</span> <span m="530120">we'll</span>
  <span m="530270">take</span> <span m="530450">a</span> <span
  m="530510">look</span> <span m="530720">at</span> <span m="531600">a</span>
  <span m="531720">couple</span> <span m="531970">of</span> <span
  m="532080">different</span> <span m="533210">algorithms,</span> <span
  m="534150">and</span> <span m="534370">both</span> <span m="534550">of</span>
  <span m="534640">these</span> <span m="534870">will</span> <span
  m="535010">motivate</span> <span m="535560">why</span> <span
  m="536250">randomized</span> <span m="536780">algorithms</span> <span
  m="537240">are</span> <span m="537360">interesting.</span></p><p><span
  m="538430">The</span> <span m="540150">Monte</span> <span
  m="540490">Carlo</span> <span m="540830">example</span> <span
  m="541420">is</span> <span m="542260">checking</span> <span
  m="542660">matrix</span> <span m="543170">multiply.</span> <span
  m="544440">So</span> <span m="545400">you've</span> <span
  m="546210">gotten</span> <span m="546580">a</span> <span
  m="546670">couple</span> <span m="546920">of</span> <span
  m="546990">square</span> <span m="547330">matrices.</span> <span
  m="548330">Both</span> <span m="548570">of</span> <span m="548650">them</span>
  <span m="548810">are</span> <span m="548900">n</span> <span
  m="549080">by</span> <span m="549260">n</span> <span
  m="549450">matrices,</span> <span m="550580">and</span> <span
  m="551440">you</span> <span m="551830">multiply</span> <span
  m="552250">them</span> <span m="552450">out--</span> <span m="552770">A</span>
  <span m="552910">times</span> <span m="553240">B,</span> <span
  m="553580">and</span> <span m="553650">you</span> <span
  m="553760">produce</span> <span m="554190">C.</span> <span
  m="555030">And</span> <span m="555210">so</span> <span m="555290">you</span>
  <span m="555390">got</span> <span m="555570">the</span> <span
  m="555615">C</span> <span m="555660">matrix.</span> <span
  m="556720">And</span> <span m="557850">rather</span> <span
  m="558120">than</span> <span m="558410">re-multiplying</span> <span
  m="559260">and</span> <span m="559380">checking</span> <span
  m="560270">the</span> <span m="560470">result,</span> <span
  m="561310">you'd</span> <span m="561540">like</span> <span
  m="561830">to</span> <span m="562010">do</span> <span
  m="562180">something</span> <span m="562550">better.</span> <span
  m="563610">You'd</span> <span m="563830">like</span> <span
  m="564030">to</span> <span m="564530">verify</span> <span
  m="565920">with</span> <span m="566170">some</span> <span
  m="566730">probability</span> <span m="567390">that</span> <span
  m="567550">you</span> <span m="567660">can</span> <span
  m="567790">parametrize</span> <span m="569000">that</span> <span
  m="569250">the</span> <span m="569630">output</span> <span
  m="570000">matrix</span> <span m="570440">is</span> <span m="570600">in</span>
  <span m="570720">fact</span> <span m="571310">the</span> <span
  m="571410">product</span> <span m="571770">of</span> <span
  m="571900">the</span> <span m="571980">two</span> <span
  m="572170">input</span> <span m="572490">matrices.</span></p><p><span
  m="573550">And</span> <span m="573800">so</span> <span
  m="573910">that's</span> <span m="574160">a</span> <span
  m="574560">randomized</span> <span m="575050">algorithm</span> <span
  m="575500">that's</span> <span m="576560">a</span> <span
  m="576705">Monte</span> <span m="576850">Carlo</span> <span
  m="577380">because</span> <span m="578100">you're</span> <span
  m="578270">not</span> <span m="578480">guaranteeing</span> <span
  m="579700">that</span> <span m="580020">that</span> <span
  m="580210">output</span> <span m="580580">matrix</span> <span
  m="581060">is</span> <span m="581200">in</span> <span m="581330">fact</span>
  <span m="581780">the</span> <span m="581790">product</span> <span
  m="582620">of</span> <span m="583580">the</span> <span m="583920">first</span>
  <span m="584460">two</span> <span m="584610">matrices</span> <span
  m="585170">or</span> <span m="585220">the</span> <span
  m="585320">operand</span> <span m="585740">matrices,</span> <span
  m="586710">but</span> <span m="586900">you're</span> <span
  m="587010">getting</span> <span m="587270">a</span> <span
  m="587320">good</span> <span m="587550">sense</span> <span
  m="587920">of</span> <span m="590180">how</span> <span
  m="590360">likely</span> <span m="590820">that</span> <span
  m="590990">is.</span> <span m="591230">And</span> <span m="591330">you</span>
  <span m="591450">can</span> <span m="591870">kind</span> <span
  m="592010">of</span> <span m="592090">squish</span> <span
  m="592420">that</span> <span m="593000">probability</span> <span
  m="593520">of</span> <span m="593610">error</span> <span
  m="593890">down</span> <span m="594640">to</span> <span
  m="595600">however</span> <span m="596220">low</span> <span
  m="596500">you</span> <span m="596630">want</span> <span m="596810">it</span>
  <span m="596890">to</span> <span m="597380">be</span> <span
  m="597940">except</span> <span m="599210">you</span> <span
  m="599280">have</span> <span m="599340">to</span> <span m="600040">run</span>
  <span m="600300">the</span> <span m="600500">algorithm</span> <span
  m="600760">for</span> <span m="601000">longer.</span> <span
  m="602120">So</span> <span m="602300">that's</span> <span m="602850">an</span>
  <span m="602930">example</span> <span m="603290">of</span> <span
  m="603370">Monte</span> <span m="603630">Carlo.</span></p><p><span
  m="604560">Now,</span> <span m="604840">quicksort.</span> <span
  m="605830">It</span> <span m="606000">doesn't</span> <span
  m="606240">make</span> <span m="606390">sense</span> <span
  m="606690">to</span> <span m="606800">say--</span> <span m="608080">I</span>
  <span m="608200">guess</span> <span m="608380">you</span> <span
  m="608510">could--</span> <span m="608760">but</span> <span
  m="609000">it</span> <span m="609210">doesn't</span> <span
  m="609430">make</span> <span m="609570">too</span> <span
  m="609690">much</span> <span m="609850">sense</span> <span
  m="610110">to</span> <span m="610230">say</span> <span m="610450">that</span>
  <span m="610910">you</span> <span m="611010">have</span> <span
  m="611130">an</span> <span m="611260">almost</span> <span
  m="611770">sorted</span> <span m="612160">array.</span> <span
  m="614090">What</span> <span m="614560">does</span> <span
  m="614650">that</span> <span m="614820">mean</span> <span
  m="615000">exactly?</span> <span m="615285">You</span> <span
  m="615570">have</span> <span m="615710">to</span> <span
  m="615790">categorize</span> <span m="616390">that.</span> <span
  m="616970">So</span> <span m="617500">quicksort</span> <span
  m="617970">is</span> <span m="618060">an</span> <span
  m="618120">example</span> <span m="618590">where</span> <span
  m="619300">you're</span> <span m="619460">guaranteed</span> <span
  m="620070">to</span> <span m="620140">get</span> <span m="620260">a</span>
  <span m="620320">sorted</span> <span m="620660">array</span> <span
  m="620930">at</span> <span m="621040">the</span> <span m="621110">end</span>
  <span m="621300">of</span> <span m="621440">it.</span> <span
  m="622370">So</span> <span m="622730">it's</span> <span
  m="623020">correct.</span> <span m="623780">You</span> <span
  m="623970">will</span> <span m="624140">get</span> <span m="624280">a</span>
  <span m="624380">sorted</span> <span m="624730">ray.</span> <span
  m="625440">That's</span> <span m="625620">what</span> <span
  m="625770">you</span> <span m="625860">wanted--</span> <span
  m="626270">descending</span> <span m="626660">order,</span> <span
  m="626980">ascending</span> <span m="627390">order.</span> <span
  m="628090">But</span> <span m="628910">it</span> <span m="629050">might</span>
  <span m="629240">not</span> <span m="629980">run</span> <span
  m="630800">in</span> <span m="631990">order</span> <span m="632530">n</span>
  <span m="632710">log</span> <span m="632930">n</span> <span
  m="633090">time.</span> <span m="634630">That's</span> <span
  m="635170">expected</span> <span m="635770">time.</span> <span
  m="636200">Order</span> <span m="636420">n</span> <span m="636550">log</span>
  <span m="636810">n</span> <span m="636900">is</span> <span
  m="637020">expected</span> <span m="637560">time.</span> <span
  m="638130">And</span> <span m="638270">so</span> <span
  m="638350">that's</span> <span m="638550">what</span> <span
  m="638750">probably</span> <span m="639220">fast</span> <span
  m="640600">would</span> <span m="640790">correspond</span> <span
  m="641250">to.</span></p><p><span m="642070">All</span> <span
  m="642140">right?</span> <span m="642640">So</span> <span
  m="643430">that's</span> <span m="643670">the</span> <span
  m="643750">set</span> <span m="643980">up.</span> <span m="645150">You</span>
  <span m="645330">can</span> <span m="645570">kind</span> <span
  m="645810">of</span> <span m="645880">see</span> <span m="646090">why</span>
  <span m="646350">these</span> <span m="646570">are</span> <span
  m="646670">interesting</span> <span m="647160">because</span> <span
  m="648260">you</span> <span m="648370">could</span> <span
  m="648480">imagine</span> <span m="648910">that</span> <span
  m="649660">in</span> <span m="649940">practical</span> <span
  m="650430">scenarios,</span> <span m="651660">you</span> <span
  m="651840">might</span> <span m="652140">want</span> <span
  m="652250">to</span> <span m="652330">do</span> <span m="652460">some</span>
  <span m="652620">checking</span> <span m="653780">in</span> <span
  m="654290">a</span> <span m="654350">probabilistic</span> <span
  m="654920">way.</span> <span m="657130">And</span> <span m="658370">you</span>
  <span m="658600">want</span> <span m="658750">to</span> <span
  m="658810">do</span> <span m="658940">that</span> <span
  m="659170">without</span> <span m="659410">having</span> <span
  m="659660">to</span> <span m="659790">redo</span> <span m="660340">all</span>
  <span m="660620">the</span> <span m="660700">work.</span></p><p><span
  m="663540">Obviously</span> <span m="663970">you</span> <span
  m="664040">don't</span> <span m="664160">want</span> <span
  m="664270">your</span> <span m="664390">checker</span> <span
  m="664820">for</span> <span m="664970">matrix</span> <span
  m="665330">multiply</span> <span m="666290">to</span> <span
  m="666400">be</span> <span m="666550">as</span> <span m="666760">slow</span>
  <span m="667260">as</span> <span m="667400">multiplying</span> <span
  m="667890">two</span> <span m="668110">matrices.</span> <span
  m="669150">Otherwise</span> <span m="669350">it</span> <span
  m="669420">makes</span> <span m="669620">no</span> <span
  m="669730">sense.</span> <span m="670920">So</span> <span
  m="671410">let's</span> <span m="671820">dive</span> <span
  m="672240">into</span> <span m="673780">matrix</span> <span
  m="674750">product</span> <span m="675610">and</span> <span
  m="676070">our</span> <span m="676310">first</span> <span
  m="676580">example</span> <span m="677940">of</span> <span m="680660">a</span>
  <span m="680750">probably</span> <span m="681310">correct</span> <span
  m="681660">algorithm,</span> <span m="682090">or</span> <span
  m="682130">Monte</span> <span m="682410">Carlo</span> <span
  m="682750">algorithm.</span></p><p><span m="683810">So</span> <span
  m="684070">what</span> <span m="684230">I</span> <span m="684270">want</span>
  <span m="684440">to</span> <span m="684500">do</span> <span
  m="684630">here</span> <span m="684940">is</span> <span m="685110">C</span>
  <span m="685390">equals</span> <span m="686590">A</span> <span
  m="686780">times</span> <span m="687230">B.</span> <span m="689740">And</span>
  <span m="690930">the</span> <span m="691080">simple</span> <span
  m="691460">algorithm--</span> <span m="694360">I</span> <span
  m="694440">guess,</span> <span m="694640">those</span> <span
  m="694785">of</span> <span m="694930">us</span> <span m="695030">who</span>
  <span m="695130">went</span> <span m="695290">to</span> <span
  m="695340">high</span> <span m="695510">school,</span> <span
  m="699140">myself</span> <span m="699640">included,</span> <span
  m="701840">did</span> <span m="702010">my</span> <span m="702330">four</span>
  <span m="702660">years--</span> <span m="707250">know</span> <span
  m="707490">of</span> <span m="707570">an</span> <span m="707650">n</span>
  <span m="707820">cube</span> <span m="708160">algorithm--</span> <span
  m="708590">or</span> <span m="708680">learned</span> <span
  m="708910">it</span> <span m="709190">back</span> <span
  m="709420">then.</span></p><p><span m="711040">It</span> <span
  m="711170">simply</span> <span m="711470">corresponds</span> <span
  m="712060">to</span> <span m="713570">taking</span> <span
  m="714550">rows</span> <span m="716070">and</span> <span
  m="716390">columns,</span> <span m="717640">and</span> <span
  m="718620">you</span> <span m="719230">get</span> <span m="719400">an</span>
  <span m="719510">entry.</span> <span m="719870">You</span> <span
  m="720050">have</span> <span m="720230">n</span> <span
  m="720430">square</span> <span m="721900">entries</span> <span
  m="722460">that</span> <span m="722580">you</span> <span
  m="722670">need</span> <span m="722840">to</span> <span
  m="722920">compute</span> <span m="723800">corresponding</span> <span
  m="724350">to</span> <span m="724410">the</span> <span
  m="724530">output</span> <span m="724920">matrix</span> <span
  m="725420">C.</span> <span m="726510">And</span> <span
  m="727470">you're</span> <span m="727660">going</span> <span
  m="727840">to</span> <span m="727930">do</span> <span m="728900">order</span>
  <span m="729160">n</span> <span m="729390">multiplications</span> <span
  m="731000">and</span> <span m="731240">additions,</span> <span
  m="731790">but</span> <span m="731965">we're</span> <span
  m="732360">really</span> <span m="732670">going</span> <span
  m="732770">to</span> <span m="732840">consider</span> <span
  m="733220">multiplications</span> <span m="733990">here.</span> <span
  m="734670">When</span> <span m="735220">I</span> <span m="735340">talk</span>
  <span m="735580">about</span> <span m="735820">n</span> <span
  m="736060">here,</span> <span m="736740">it's</span> <span
  m="736810">not</span> <span m="737000">the</span> <span
  m="737090">total</span> <span m="737330">number</span> <span
  m="737570">of</span> <span m="737670">operations.</span> <span
  m="738820">It's</span> <span m="738980">the</span> <span
  m="739030">number</span> <span m="739240">of</span> <span
  m="739280">multiplications.</span> <span m="740640">And</span> <span
  m="740910">the</span> <span m="740990">reason</span> <span
  m="741270">for</span> <span m="741350">that</span> <span
  m="741620">is--</span> <span m="742740">this</span> <span
  m="742890">may</span> <span m="742990">have</span> <span
  m="743120">gone</span> <span m="743330">away</span> <span m="743540">a</span>
  <span m="743610">little</span> <span m="743790">bit,</span> <span
  m="744040">but</span> <span m="744480">it's</span> <span
  m="744660">still</span> <span m="744910">probably</span> <span
  m="745410">true--</span> <span m="746150">that</span> <span
  m="746330">multiplication,</span> <span m="748480">in</span> <span
  m="748750">computers,</span> <span m="749400">it</span> <span
  m="749540">takes</span> <span m="749750">longer</span> <span
  m="750880">to</span> <span m="750980">multiply</span> <span
  m="751480">two</span> <span m="751650">numbers,</span> <span
  m="752720">integers</span> <span m="753280">are</span> <span
  m="753380">floating</span> <span m="753650">point</span> <span
  m="753870">numbers,</span> <span m="754440">than</span> <span
  m="754610">adding</span> <span m="754920">numbers.</span></p><p><span
  m="755860">It</span> <span m="756060">used</span> <span m="756290">to</span>
  <span m="756330">be</span> <span m="756430">much</span> <span
  m="756600">more</span> <span m="756740">dramatic,</span> <span
  m="757440">the</span> <span m="757570">differences</span> <span
  m="757920">between</span> <span m="758770">multiplying</span> <span
  m="759330">and</span> <span m="759520">add</span> <span m="761930">in</span>
  <span m="763380">computers.</span> <span m="764300">But</span> <span
  m="764910">thanks</span> <span m="765110">to</span> <span
  m="765190">pipelining</span> <span m="765860">and</span> <span
  m="766060">lots</span> <span m="766310">of</span> <span
  m="766400">optimizations,</span> <span m="768000">multiplies</span> <span
  m="768530">are</span> <span m="768600">actually</span> <span
  m="768860">very</span> <span m="769100">fast.</span> <span
  m="769940">But</span> <span m="770940">they</span> <span
  m="771240">are,</span> <span m="771470">obviously,</span> <span
  m="771810">a</span> <span m="771860">more</span> <span
  m="772030">sophisticated</span> <span m="773530">operation</span> <span
  m="774090">than</span> <span m="774300">addition.</span> <span
  m="775110">So</span> <span m="775270">we'll</span> <span m="775395">be</span>
  <span m="775520">counting</span> <span
  m="775850">multiplies.</span></p><p><span m="777090">So</span> <span
  m="777890">when</span> <span m="778000">you've</span> <span
  m="778240">seen</span> <span m="778670">Karatsuba</span> <span
  m="780610">divide</span> <span m="780960">and</span> <span
  m="781060">conquer</span> <span m="781450">for</span> <span
  m="781550">multiply,</span> <span m="782370">back</span> <span
  m="782590">end</span> <span m="782710">in</span> <span m="782810">006.</span>
  <span m="784090">Remember</span> <span m="784480">that</span> <span
  m="784720">we</span> <span m="784850">were</span> <span
  m="785100">counting</span> <span m="785640">multiplications,</span> <span
  m="786680">and</span> <span m="786870">we</span> <span m="786990">were</span>
  <span m="787050">actually</span> <span m="787340">trading</span> <span
  m="787740">off</span> <span m="787970">multiplications</span> <span
  m="788700">for</span> <span m="788860">additions.</span> <span
  m="789480">We</span> <span m="789575">were</span> <span
  m="789670">trying</span> <span m="789860">to</span> <span
  m="789900">shrink</span> <span m="791100">that</span> <span
  m="791380">number</span> <span m="791830">associated</span> <span
  m="792360">with</span> <span m="792500">the</span> <span
  m="792610">complexity</span> <span m="793320">of</span> <span
  m="793870">the</span> <span m="793950">algorithm</span> <span
  m="794720">when</span> <span m="794940">counting</span> <span
  m="796030">the</span> <span m="796110">number</span> <span
  m="796320">of</span> <span m="796380">multiplies.</span> <span
  m="797430">And</span> <span m="797590">we</span> <span
  m="797670">actually</span> <span m="797910">counted</span> <span
  m="798280">the</span> <span m="798320">number</span> <span
  m="798570">of</span> <span m="798660">additions</span> <span
  m="799870">that</span> <span m="800010">were</span> <span
  m="800800">going</span> <span m="801090">up--</span> <span
  m="801520">at</span> <span m="801610">least</span> <span
  m="801860">from</span> <span m="802080">a</span> <span
  m="802240">constant</span> <span m="802660">factor</span> <span
  m="803010">standpoint,</span> <span m="803840">not</span> <span
  m="804000">necessarily</span> <span m="804610">from</span> <span
  m="804790">an</span> <span m="804850">asymptotic</span> <span
  m="805370">complexity</span> <span m="805920">standpoint.</span></p><p><span
  m="807420">And</span> <span m="807570">so</span> <span
  m="807690">that's</span> <span m="807990">simple</span> <span
  m="808290">algorithm.</span> <span m="809940">You</span> <span
  m="810100">probably</span> <span m="810390">heard</span> <span
  m="810615">of</span> <span m="810840">Strassen.</span> <span
  m="811520">Some</span> <span m="811730">of</span> <span m="811810">you</span>
  <span m="811930">might</span> <span m="812060">have</span> <span
  m="812150">seen</span> <span m="812450">it.</span> <span
  m="814530">Essentially</span> <span m="814750">what</span> <span
  m="814890">happens</span> <span m="815200">with</span> <span
  m="815380">Strassen</span> <span m="815900">is</span> <span
  m="816660">you</span> <span m="816800">multiply</span> <span
  m="818000">two</span> <span m="819390">two</span> <span m="819620">by</span>
  <span m="819810">two</span> <span m="820080">matrices</span> <span
  m="823770">using</span> <span m="825080">seven</span> <span
  m="825620">multiplications</span> <span m="826910">as</span> <span
  m="827160">opposed</span> <span m="827440">to</span> <span
  m="827560">eight.</span></p><p><span m="832765">Now,</span> <span
  m="833020">if</span> <span m="833080">you</span> <span m="833160">do</span>
  <span m="833300">that--</span> <span m="833445">and</span> <span
  m="833590">this</span> <span m="833705">is</span> <span
  m="833820">similar</span> <span m="834260">to</span> <span
  m="834910">the</span> <span m="835560">Karatsuba</span> <span
  m="836180">analysis--</span> <span m="838760">you</span> <span
  m="838850">can</span> <span m="838940">do</span> <span m="839060">this</span>
  <span m="839330">in</span> <span m="840640">n</span> <span
  m="840845">raised</span> <span m="841050">to</span> <span
  m="841230">log</span> <span m="841670">2</span> <span m="841900">7</span>
  <span m="842400">time,</span> <span m="843240">which</span> <span
  m="843660">is</span> <span m="844150">essentially</span> <span
  m="844515">n</span> <span m="844880">raised</span> <span m="845155">to</span>
  <span m="845860">2.81</span> <span m="847440">time.</span></p><p><span
  m="848650">And</span> <span m="848850">so</span> <span
  m="849200">rather</span> <span m="849400">than</span> <span
  m="849540">n</span> <span m="849700">cubed,</span> <span m="849990">you</span>
  <span m="850090">can</span> <span m="850190">go</span> <span
  m="850320">down</span> <span m="850510">to</span> <span m="851210">n</span>
  <span m="851580">raised</span> <span m="851940">2.81.</span></p><p><span
  m="853740">Now</span> <span m="853815">it</span> <span m="853890">turns</span>
  <span m="854040">out</span> <span m="854320">people</span> <span
  m="854540">have</span> <span m="854810">obviously</span> <span
  m="856270">not</span> <span m="856480">stopped</span> <span
  m="856800">with</span> <span m="856990">this.</span> <span
  m="857940">You</span> <span m="858170">can</span> <span m="858330">go</span>
  <span m="858480">to</span> <span m="858950">n</span> <span
  m="859130">raised</span> <span m="859340">to</span> <span
  m="859950">2.70</span> <span m="861850">by</span> <span
  m="862750">doing</span> <span m="863030">something</span> <span
  m="863420">of</span> <span m="863500">the</span> <span m="863580">order</span>
  <span m="863910">of</span> <span m="864040">143,000</span> <span
  m="865780">multiplications</span> <span m="866600">for</span> <span
  m="867070">70</span> <span m="867540">by</span> <span m="867680">70</span>
  <span m="868110">matrices.</span> <span m="869660">So</span> <span
  m="869900">you</span> <span m="869980">can</span> <span m="870110">play</span>
  <span m="870420">around.</span> <span m="870760">Just</span> <span
  m="870950">like</span> <span m="871120">you</span> <span m="871255">had</span>
  <span m="871390">Toom-Cook.</span> <span m="872420">I</span> <span
  m="872493">don't</span> <span m="872566">know</span> <span
  m="872640">if</span> <span m="872750">you</span> <span
  m="872830">remember</span> <span m="873100">that</span> <span
  m="873420">or</span> <span m="873740">it</span> <span m="873880">got</span>
  <span m="874110">covered--</span> <span m="874420">but</span> <span
  m="874770">Karatsuba</span> <span m="875020">could</span> <span
  m="875540">get</span> <span m="875680">generalized</span> <span
  m="876210">into</span> <span m="876360">this</span> <span
  m="876550">thing</span> <span m="876710">called</span> <span
  m="876950">Toom-Cook.</span> <span m="877800">And</span> <span
  m="878620">the</span> <span m="879280">same</span> <span
  m="879490">thing,</span> <span m="879670">Strassen--</span> <span
  m="880600">you</span> <span m="880720">could</span> <span m="880830">go</span>
  <span m="880960">off</span> <span m="881270">and</span> <span
  m="884670">divide</span> <span m="884950">and</span> <span
  m="885060">conquer</span> <span m="887310">whose</span> <span
  m="887520">base</span> <span m="887880">case</span> <span m="888610">is</span>
  <span m="888810">not</span> <span m="889020">two</span> <span
  m="889130">by</span> <span m="889280">two,</span> <span m="889490">but</span>
  <span m="889690">70</span> <span m="890000">by</span> <span
  m="890120">70,</span> <span m="890890">and</span> <span m="891100">that</span>
  <span m="891240">improves</span> <span m="891630">things.</span></p><p><span
  m="892260">But</span> <span m="892410">it</span> <span m="892500">turns</span>
  <span m="892720">out</span> <span m="893440">there's</span> <span
  m="893600">other</span> <span m="895120">arithmetic</span> <span
  m="895620">series</span> <span m="896000">summation</span> <span
  m="896560">ways.</span> <span m="897300">And</span> <span m="897375">so</span>
  <span m="897450">a</span> <span m="897570">famous</span> <span
  m="897960">algorithm</span> <span m="899110">that's</span> <span
  m="899410">up</span> <span m="899610">until</span> <span
  m="899840">2010</span> <span m="903030">was</span> <span m="903190">the</span>
  <span m="903270">best</span> <span m="903590">complexity</span> <span
  m="905050">algorithm</span> <span m="905540">known.</span> <span
  m="906330">It's</span> <span m="906470">Coppersmith-Winograd,</span> <span
  m="908580">which</span> <span m="909030">is</span> <span
  m="909970">2.376.</span></p><p><span m="912660">And</span> <span
  m="912850">then</span> <span m="913140">at</span> <span m="913270">some</span>
  <span m="913450">point,</span> <span m="913940">we</span> <span
  m="913950">had</span> <span m="914080">a</span> <span
  m="914130">faculty</span> <span m="914590">candidate</span> <span
  m="915020">here</span> <span m="915980">who</span> <span
  m="919788">either</span> <span m="920270">shrunk</span> <span
  m="920680">this</span> <span m="920910">from</span> <span
  m="921120">2.376</span> <span m="922370">to</span> <span
  m="922500">2.373.</span> <span m="926060">And</span> <span
  m="926270">it</span> <span m="926450">turns</span> <span m="926690">out</span>
  <span m="926920">that</span> <span m="927500">there</span> <span
  m="927590">were</span> <span m="927780">two</span> <span
  m="928360">different</span> <span m="929620">researchers</span> <span
  m="930340">who</span> <span m="930470">came</span> <span m="930670">up</span>
  <span m="930810">with</span> <span m="930970">a</span> <span
  m="931610">2.373,</span> <span m="932780">but</span> <span
  m="933340">this</span> <span m="933520">particular</span> <span
  m="933820">candidate</span> <span m="934640">in</span> <span
  m="934780">the</span> <span m="934870">sixth</span> <span
  m="935220">decimal</span> <span m="935600">place</span> <span
  m="936010">won.</span> <span m="937650">So</span> <span m="937880">she</span>
  <span m="938060">had</span> <span m="938190">an</span> <span
  m="938355">eight.</span> <span m="938850">Person</span> <span
  m="939100">had</span> <span m="939230">a</span> <span m="939280">nine</span>
  <span m="939580">or</span> <span m="939670">something.</span></p><p><span
  m="940550">But</span> <span m="940900">anyway,</span> <span
  m="941210">all</span> <span m="941340">of</span> <span m="941420">these</span>
  <span m="941610">are</span> <span m="941680">impractical.</span> <span
  m="942830">OK.</span> <span m="943900">You</span> <span
  m="944650">don't</span> <span m="944760">want</span> <span
  m="944850">to</span> <span m="944890">use</span> <span m="945110">them.</span>
  <span m="945415">The</span> <span m="945720">constant</span> <span
  m="946170">factors</span> <span m="946650">associated</span> <span
  m="947150">with</span> <span m="947290">these</span> <span
  m="947490">things</span> <span m="948390">are</span> <span
  m="948710">much</span> <span m="949100">larger</span> <span
  m="950110">than</span> <span m="951110">what</span> <span
  m="951320">you</span> <span m="951410">have</span> <span
  m="951630">here.</span> <span m="952180">The</span> <span
  m="952260">constant</span> <span m="952610">factors</span> <span
  m="953000">here,</span> <span m="954790">I</span> <span
  m="954890">guess</span> <span m="955060">it's</span> <span
  m="955190">one,</span> <span m="955550">right?</span> <span
  m="957200">Makes</span> <span m="957380">sense</span> <span
  m="957610">that</span> <span m="957725">it</span> <span
  m="957840">would</span> <span m="957895">be</span> <span
  m="957950">one,</span> <span m="961120">forgetting</span> <span
  m="961400">the</span> <span m="961470">additions</span> <span
  m="961870">of</span> <span m="961970">course.</span></p><p><span
  m="962760">So</span> <span m="962900">if</span> <span m="963020">you</span>
  <span m="963100">have</span> <span m="963320">large</span> <span
  m="963650">constant</span> <span m="964000">factors,</span> <span
  m="964560">then</span> <span m="964850">you</span> <span
  m="964960">need</span> <span m="965250">a</span> <span
  m="965330">billion</span> <span m="965720">by</span> <span
  m="965880">billion</span> <span m="966240">matrix</span> <span
  m="967080">in</span> <span m="967250">order</span> <span m="967460">to</span>
  <span m="967540">win.</span> <span m="968520">And</span> <span
  m="969600">if</span> <span m="969740">you</span> <span m="969910">have</span>
  <span m="970910">billion</span> <span m="971420">by</span> <span
  m="971540">billion</span> <span m="971830">matrices</span> <span
  m="972320">that</span> <span m="972400">you</span> <span
  m="972480">want</span> <span m="972580">to</span> <span
  m="972620">multiply,</span> <span m="973620">do</span> <span
  m="973790">something</span> <span m="974110">else.</span> <span
  m="975010">OK.</span> <span m="975930">You</span> <span
  m="976350">don't</span> <span m="976460">want</span> <span
  m="976570">to</span> <span m="976610">go</span> <span m="976740">there.</span>
  <span m="979600">Even</span> <span m="980440">in</span> <span
  m="980520">the</span> <span m="980620">day</span> <span m="980810">of</span>
  <span m="980900">the</span> <span m="980970">internet,</span> <span
  m="982030">it's</span> <span m="982510">not</span> <span
  m="982620">going</span> <span m="982700">to</span> <span
  m="982760">work.</span></p><p><span m="983760">So</span> <span
  m="984190">what</span> <span m="984400">we'd</span> <span
  m="984520">like</span> <span m="984680">to</span> <span m="984790">do</span>
  <span m="984930">now</span> <span m="985140">is</span> <span
  m="985330">do</span> <span m="985490">something</span> <span
  m="985870">better.</span> <span m="986350">So</span> <span
  m="986540">we</span> <span m="986710">will</span> <span
  m="986900">try--</span> <span m="987680">given</span> <span
  m="987950">that</span> <span m="991930">theoretical</span> <span
  m="992800">computer</span> <span m="993090">science</span> <span
  m="993420">class,</span> <span m="994620">it</span> <span
  m="994790">makes</span> <span m="995070">sense</span> <span
  m="995520">to</span> <span m="995640">say</span> <span m="996000">that</span>
  <span m="996830">our</span> <span m="997020">verification</span> <span
  m="998380">algorithm</span> <span m="999360">should</span> <span
  m="999620">be</span> <span m="999790">better</span> <span
  m="1000810">than</span> <span m="1001460">n</span> <span
  m="1001690">raised</span> <span m="1001930">to</span> <span
  m="1002030">2.376</span> <span m="1002455">or</span> <span
  m="1003730">2.3-whatever.</span> <span m="1005330">Right?</span> <span
  m="1006220">Otherwise,</span> <span m="1006660">it</span> <span
  m="1007090">doesn't</span> <span m="1007380">feel</span> <span
  m="1007570">good.</span></p><p><span m="1010140">So</span> <span
  m="1010320">what</span> <span m="1010480">we'd</span> <span
  m="1010620">like</span> <span m="1010790">to</span> <span
  m="1010900">do--</span> <span m="1011190">and</span> <span
  m="1011400">we</span> <span m="1011500">can</span> <span m="1011620">do</span>
  <span m="1011730">this--</span> <span m="1012670">is</span> <span
  m="1013530">try</span> <span m="1013870">and</span> <span
  m="1014430">get</span> <span m="1015680">an</span> <span
  m="1016740">order</span> <span m="1017110">n</span> <span
  m="1017310">square</span> <span m="1017930">algorithm--</span> <span
  m="1024780">that's</span> <span m="1025130">this.</span> <span
  m="1025910">So</span> <span m="1026040">it's</span> <span
  m="1027089">probably</span> <span m="1027500">correct</span> <span
  m="1027839">Monte</span> <span m="1028140">Carlo</span> <span
  m="1028530">algorithm</span> <span m="1029890">where</span> <span
  m="1030319">if</span> <span m="1030409">you</span> <span
  m="1030500">have</span> <span m="1030780">A</span> <span
  m="1031079">times</span> <span m="1031490">B</span> <span
  m="1032550">equals</span> <span m="1032950">C,</span> <span
  m="1034700">then</span> <span m="1036079">the</span> <span
  m="1036220">probability</span> <span m="1036880">of</span> <span
  m="1037500">the</span> <span m="1037760">output</span> <span
  m="1039530">equals</span> <span m="1039960">yes</span> <span
  m="1042200">is</span> <span m="1042410">1.</span> <span m="1042930">So</span>
  <span m="1043240">in</span> <span m="1043420">fact,</span> <span
  m="1044470">if</span> <span m="1044530">you</span> <span
  m="1045020">got</span> <span m="1045260">it</span> <span
  m="1045359">right,</span> <span m="1045900">then</span> <span
  m="1046089">the</span> <span m="1046160">verifier</span> <span
  m="1047020">is</span> <span m="1047270">going</span> <span
  m="1047540">to</span> <span m="1048270">not</span> <span
  m="1048590">give</span> <span m="1048810">you</span> <span
  m="1049790">a</span> <span m="1049870">false</span> <span
  m="1050330">negative.</span> <span m="1051590">It's</span> <span
  m="1051770">not</span> <span m="1051910">going</span> <span
  m="1052020">to</span> <span m="1052080">say--</span> <span
  m="1052300">no,</span> <span m="1052570">you</span> <span
  m="1052710">got</span> <span m="1052860">it</span> <span
  m="1052990">wrong--</span> <span m="1053520">when</span> <span
  m="1053680">you</span> <span m="1053770">got</span> <span
  m="1053940">it</span> <span m="1054040">right.</span></p><p><span
  m="1055160">But</span> <span m="1055490">it</span> <span
  m="1055670">could</span> <span m="1055870">give</span> <span
  m="1056050">you</span> <span m="1056270">up</span> <span m="1056580">a</span>
  <span m="1056680">false</span> <span m="1057300">positive</span> <span
  m="1058570">with</span> <span m="1058780">some</span> <span
  m="1059460">probability</span> <span m="1062860">where</span> <span
  m="1064020">you</span> <span m="1064160">have</span> <span
  m="1064910">the</span> <span m="1065050">probability</span> <span
  m="1065690">of</span> <span m="1068180">output</span> <span
  m="1070540">equals</span> <span m="1071030">yes,</span> <span
  m="1072450">and</span> <span m="1072640">that's</span> <span
  m="1072850">a</span> <span m="1072900">false</span> <span
  m="1073250">positive.</span> <span m="1074240">But</span> <span
  m="1074390">you</span> <span m="1074490">can</span> <span
  m="1074620">bound</span> <span m="1075020">that</span> <span
  m="1075350">to</span> <span m="1075410">be</span> <span
  m="1075520">less</span> <span m="1075760">than</span> <span
  m="1075900">half.</span> <span m="1077060">OK.</span> <span
  m="1078050">So</span> <span m="1078690">it's</span> <span
  m="1078860">going</span> <span m="1078960">to</span> <span
  m="1079010">say,</span> <span m="1079180">yes.</span></p><p><span
  m="1080060">So</span> <span m="1080580">obviously,</span> <span
  m="1080930">if</span> <span m="1080965">the</span> <span
  m="1081000">verifier</span> <span m="1081400">kept</span> <span
  m="1081650">saying</span> <span m="1081870">yes</span> <span
  m="1082230">all</span> <span m="1082470">the</span> <span
  m="1082540">time,</span> <span m="1084640">you</span> <span
  m="1084770">wouldn't</span> <span m="1084920">have</span> <span
  m="1085150">this.</span> <span m="1085590">It</span> <span
  m="1085670">wouldn't</span> <span m="1085830">be</span> <span
  m="1085960">very</span> <span m="1086260">interesting.</span> <span
  m="1087440">I</span> <span m="1087535">would</span> <span
  m="1087630">be</span> <span m="1087740">constant</span> <span
  m="1088160">time,</span> <span m="1089060">but</span> <span
  m="1089830">it</span> <span m="1090290">wouldn't</span> <span
  m="1090550">be</span> <span m="1090710">very</span> <span
  m="1091090">interesting.</span> <span m="1092000">What</span> <span
  m="1092340">is</span> <span m="1092450">interesting</span> <span
  m="1092820">here</span> <span m="1093630">is</span> <span
  m="1093860">that</span> <span m="1095060">when</span> <span
  m="1095220">they're</span> <span m="1095380">not</span> <span
  m="1095610">equal,</span> <span m="1096880">you're</span> <span
  m="1097130">going</span> <span m="1097330">to</span> <span
  m="1097430">get</span> <span m="1097580">an</span> <span
  m="1097670">incorrect</span> <span m="1098110">result</span> <span
  m="1099430">with</span> <span m="1099530">some</span> <span
  m="1099700">operand</span> <span m="1100460">on</span> <span
  m="1100540">the</span> <span m="1100630">probability.</span></p><p><span
  m="1103060">So</span> <span m="1103210">you</span> <span
  m="1103360">say,</span> <span m="1103600">about</span> <span
  m="1103820">one</span> <span m="1104130">half</span> <span
  m="1104700">seems</span> <span m="1105190">kind</span> <span
  m="1105400">of</span> <span m="1105440">high--</span> <span
  m="1106570">50%</span> <span m="1107540">flipping</span> <span
  m="1107860">a</span> <span m="1107940">coin.</span></p><p><span
  m="1109010">The</span> <span m="1109080">good</span> <span
  m="1109290">news</span> <span m="1109600">is</span> <span
  m="1109850">that</span> <span m="1111940">these</span> <span
  m="1112250">algorithms,</span> <span m="1114120">you</span> <span
  m="1114270">can</span> <span m="1114445">run</span> <span
  m="1114620">them</span> <span m="1115020">over</span> <span
  m="1115280">and</span> <span m="1115350">over.</span> <span
  m="1115550">You</span> <span m="1115610">can</span> <span
  m="1115720">run</span> <span m="1115880">this</span> <span
  m="1116040">checker</span> <span m="1117280">over</span> <span
  m="1117530">and</span> <span m="1117620">over.</span> <span
  m="1118370">And</span> <span m="1118740">as</span> <span
  m="1118950">long</span> <span m="1119190">as</span> <span
  m="1119330">executions</span> <span m="1120440">are</span> <span
  m="1120580">independent,</span> <span m="1121600">and</span> <span
  m="1121690">you</span> <span m="1121780">can</span> <span
  m="1121870">certainly</span> <span m="1123180">ensure</span> <span
  m="1123800">that</span> <span m="1123910">they're</span> <span
  m="1124020">independent</span> <span m="1124890">by</span> <span
  m="1125500">ensuring</span> <span m="1126040">that</span> <span
  m="1126190">the</span> <span m="1126310">randomness</span> <span
  m="1127350">from</span> <span m="1127590">one</span> <span
  m="1127790">execution</span> <span m="1128410">to</span> <span
  m="1128540">another--</span> <span m="1129350">the</span> <span
  m="1129480">flipping</span> <span m="1129830">of</span> <span
  m="1129910">the</span> <span m="1129990">coins--</span> <span
  m="1130470">are</span> <span m="1130590">independent.</span> <span
  m="1131670">OK.</span> <span m="1132310">And</span> <span
  m="1132470">so</span> <span m="1132570">that's</span> <span
  m="1132980">relatively</span> <span m="1133330">easy</span> <span
  m="1133590">to</span> <span m="1133720">do,</span> <span m="1134170">in</span>
  <span m="1134320">certainly</span> <span m="1134680">all</span> <span
  m="1134760">of</span> <span m="1134840">the</span> <span
  m="1134920">scenarios</span> <span m="1135480">we'll</span> <span
  m="1135530">be</span> <span m="1135660">looking</span> <span
  m="1135940">at.</span> <span m="1136460">In</span> <span
  m="1136600">046,</span> <span m="1137100">it's</span> <span
  m="1137400">relatively</span> <span m="1137610">easy</span> <span
  m="1137830">to</span> <span m="1137900">do.</span></p><p><span
  m="1138570">You</span> <span m="1138710">can</span> <span
  m="1138945">now</span> <span m="1139180">drive</span> <span
  m="1139600">this</span> <span m="1139770">probability</span> <span
  m="1140320">down</span> <span m="1141300">to</span> <span
  m="1141510">one</span> <span m="1142030">quarter</span> <span
  m="1142670">with</span> <span m="1142910">two</span> <span
  m="1143110">executions</span> <span m="1144380">because</span> <span
  m="1144820">you'll</span> <span m="1144970">just</span> <span
  m="1145580">check</span> <span m="1145980">different</span> <span
  m="1146310">things.</span> <span m="1147250">And</span> <span
  m="1147420">then</span> <span m="1147850">one</span> <span
  m="1148050">eighth</span> <span m="1148310">with</span> <span
  m="1148380">three</span> <span m="1148840">and</span> <span
  m="1149070">so</span> <span m="1149220">on</span> <span m="1149330">and</span>
  <span m="1149420">so</span> <span m="1149560">forth.</span> <span
  m="1150180">So</span> <span m="1150280">that's</span> <span
  m="1150450">what's</span> <span m="1150660">cool</span> <span
  m="1150820">about</span> <span m="1151070">it.</span></p><p><span
  m="1151510">And</span> <span m="1151800">now,</span> <span
  m="1152160">if</span> <span m="1152300">you</span> <span
  m="1152420">can</span> <span m="1152590">look</span> <span
  m="1152870">at</span> <span m="1152990">the</span> <span
  m="1153080">runtime,</span> <span m="1154020">you</span> <span
  m="1154140">say,</span> <span m="1154370">well,</span> <span
  m="1155130">runtime</span> <span m="1155590">still</span> <span
  m="1155820">order</span> <span m="1156050">n</span> <span
  m="1156190">square.</span></p><p><span m="1157080">That's</span> <span
  m="1157250">the</span> <span m="1157350">beauty</span> <span
  m="1157600">of</span> <span m="1157690">this</span> <span
  m="1158260">because</span> <span m="1158520">I'm</span> <span
  m="1158630">just</span> <span m="1158800">putting</span> <span
  m="1159030">an</span> <span m="1159120">extra</span> <span
  m="1159400">constant</span> <span m="1159830">factor</span> <span
  m="1160180">here</span> <span m="1160830">where</span> <span
  m="1161060">I</span> <span m="1161090">have</span> <span m="1161120">k</span>
  <span m="1161380">n</span> <span m="1161640">square,</span> <span
  m="1162530">where</span> <span m="1162640">k</span> <span
  m="1162850">is</span> <span m="1162980">a</span> <span
  m="1163020">constant.</span></p><p><span m="1163970">And</span> <span
  m="1165890">effectively,</span> <span m="1166125">I</span> <span
  m="1166360">have</span> <span m="1166570">this</span> <span
  m="1166700">nice</span> <span m="1167140">relationship</span> <span
  m="1168360">in</span> <span m="1168530">terms</span> <span
  m="1168760">of</span> <span m="1169090">the</span> <span
  m="1169190">probability</span> <span m="1171020">of</span> <span
  m="1171420">error</span> <span m="1172400">going</span> <span
  m="1173160">down</span> <span m="1173670">to</span> <span m="1174070">1</span>
  <span m="1174840">divided</span> <span m="1175230">by</span> <span
  m="1175390">2</span> <span m="1175610">raised</span> <span
  m="1175940">to</span> <span m="1176150">k.</span> <span m="1177480">And</span>
  <span m="1178340">what</span> <span m="1178420">I</span> <span
  m="1178490">have</span> <span m="1178710">here</span> <span
  m="1179060">is</span> <span m="1179620">a</span> <span m="1179720">k</span>
  <span m="1180030">n</span> <span m="1180230">square.</span></p><p><span
  m="1182030">So</span> <span m="1182140">that's</span> <span
  m="1182330">what's</span> <span m="1182530">cool</span> <span
  m="1182700">about</span> <span m="1182715">it.</span> <span
  m="1183310">And</span> <span m="1183460">obviously,</span> <span
  m="1183740">k</span> <span m="1183865">n</span> <span
  m="1183990">square</span> <span m="1184450">is</span> <span
  m="1184543">2</span> <span m="1184636">order</span> <span m="1184730">n</span>
  <span m="1184860">square</span> <span m="1185600">in</span> <span
  m="1185700">a</span> <span m="1185800">polynomial</span> <span
  m="1186340">time,</span> <span m="1187020">and</span> <span
  m="1187390">but</span> <span m="1187820">the</span> <span
  m="1188610">probably</span> <span m="1189090">correct</span> <span
  m="1189440">aspect</span> <span m="1189810">of</span> <span
  m="1189970">it</span> <span m="1190410">gets</span> <span
  m="1190680">better</span> <span m="1190920">and</span> <span
  m="1191050">better.</span> <span m="1191950">OK.</span></p><p><span
  m="1193420">Any</span> <span m="1193580">questions</span> <span
  m="1193870">so</span> <span m="1194000">far?</span></p><p>&nbsp;</p><p><span
  m="1198620">All</span> <span m="1198680">right.</span> <span
  m="1198880">Good.</span></p><p>&nbsp;</p><p><span m="1202270">So</span> <span
  m="1202390">what</span> <span m="1202570">we're</span> <span
  m="1202630">going</span> <span m="1202730">to</span> <span
  m="1202800">do</span> <span m="1203200">is</span> <span
  m="1203810">this</span> <span m="1204160">algorithm</span> <span
  m="1204570">actually</span> <span m="1204910">works</span> <span
  m="1206560">for</span> <span m="1208640">arbitrary</span> <span
  m="1209420">matrices--</span> <span m="1210860">the</span> <span
  m="1211090">structure</span> <span m="1211325">at</span> <span
  m="1211560">least.</span> <span m="1214630">We're</span> <span
  m="1214850">going</span> <span m="1214990">to</span> <span
  m="1215030">assume</span> <span m="1215510">that</span> <span
  m="1215870">the</span> <span m="1216230">matrix</span> <span
  m="1216600">entries</span> <span m="1217020">are</span> <span
  m="1217520">Boolean.</span> <span m="1218750">They're</span> <span
  m="1219120">going</span> <span m="1219295">to</span> <span
  m="1219470">work</span> <span m="1219720">in</span> <span
  m="1219840">the</span> <span m="1221250">finite</span> <span
  m="1221570">field</span> <span m="1221890">mod</span> <span
  m="1222150">2.</span> <span m="1223050">And</span> <span m="1223660">it's
  just</span> <span m="1223840">is</span> <span m="1224090">an</span> <span
  m="1224190">easier</span> <span m="1224520">proof.</span> <span
  m="1225290">It's</span> <span m="1225500">easier</span> <span
  m="1225760">to</span> <span m="1225840">see.</span> <span
  m="1226600">So</span> <span m="1227610">the</span> <span
  m="1228040">complexities</span> <span m="1228610">are</span> <span
  m="1228680">all</span> <span m="1228800">the</span> <span
  m="1228880">same.</span> <span m="1229330">You're</span> <span
  m="1229370">still</span> <span m="1229570">multiplying</span> <span
  m="1230460">numbers.</span> <span m="1230850">They</span> <span
  m="1230940">happen</span> <span m="1231170">to</span> <span
  m="1231230">be</span> <span m="1231330">small.</span> <span
  m="1232130">And</span> <span m="1232230">multiplication</span> <span
  m="1232890">cost</span> <span m="1233190">you</span> <span
  m="1233350">one</span> <span m="1233570">operation.</span> <span
  m="1234510">And</span> <span m="1234680">you</span> <span
  m="1234790">need</span> <span m="1234940">to</span> <span
  m="1235020">do</span> <span m="1235160">n</span> <span
  m="1235320">cubed</span> <span m="1235570">multiplies</span> <span
  m="1236270">to</span> <span m="1236370">actually</span> <span
  m="1236660">get</span> <span m="1236840">the</span> <span m="1236875">C</span>
  <span m="1236910">matrix,</span> <span m="1238110">and</span> <span
  m="1238540">you</span> <span m="1238660">have</span> <span
  m="1238880">to</span> <span m="1240490">verify</span> <span
  m="1240795">it</span> <span m="1241230">order</span> <span
  m="1241470">n</span> <span m="1241590">square</span> <span
  m="1241900">time.</span></p><p><span m="1242760">And</span> <span
  m="1242970">so</span> <span m="1243120">the</span> <span
  m="1243220">number</span> <span m="1243420">of</span> <span
  m="1243470">multiplies,</span> <span m="1244130">again,</span> <span
  m="1244850">that</span> <span m="1245010">you</span> <span
  m="1245120">want</span> <span m="1245840">to</span> <span
  m="1246040">use</span> <span m="1246630">in</span> <span
  m="1246790">your</span> <span m="1246910">verification</span> <span
  m="1247540">algorithm</span> <span m="1247940">has</span> <span
  m="1248160">to</span> <span m="1248250">be</span> <span
  m="1248860">order</span> <span m="1249130">n</span> <span
  m="1249280">square.</span> <span m="1250070">We're</span> <span
  m="1250200">ignoring</span> <span m="1250590">the</span> <span
  m="1250670">additions.</span></p><p>&nbsp;</p><p><span m="1254110">So</span>
  <span m="1255710">that's</span> <span m="1256440">what</span> <span
  m="1256650">we'd</span> <span m="1256840">like</span> <span
  m="1257210">out</span> <span m="1257390">of</span> <span
  m="1257510">our</span> <span m="1257630">matrix</span> <span
  m="1258520">product</span> <span m="1258970">checker,</span> <span
  m="1260230">and</span> <span m="1261040">the</span> <span
  m="1261150">algorithm</span> <span m="1261450">we're</span> <span
  m="1261660">going</span> <span m="1261685">to</span> <span
  m="1261710">look</span> <span m="1261920">at</span> <span
  m="1262090">is</span> <span m="1262210">called</span> <span
  m="1262460">Freivald's</span> <span m="1263110">algorithm,</span> <span
  m="1267254">cute</span> <span m="1267730">little</span> <span
  m="1268030">algorithm,</span> <span m="1269150">that</span> <span
  m="1270470">does</span> <span m="1271410">the</span> <span
  m="1271590">following.</span></p><p><span m="1272930">So</span> <span
  m="1273170">the</span> <span m="1273440">algorithm</span> <span
  m="1273630">itself</span> <span m="1273960">is</span> <span
  m="1274260">very</span> <span m="1274650">straightforward,</span> <span
  m="1275300">in</span> <span m="1275520">couple</span> <span
  m="1275740">of</span> <span m="1275970">lines,</span> <span
  m="1276200">a</span> <span m="1276270">minute</span> <span
  m="1276465">or</span> <span m="1276660">so</span> <span m="1276880">to</span>
  <span m="1276980">describe,</span> <span m="1277800">and</span> <span
  m="1278410">the</span> <span m="1280600">interesting</span> <span
  m="1281090">aspect</span> <span m="1281450">of</span> <span
  m="1281570">it</span> <span m="1281690">is</span> <span m="1281800">the</span>
  <span m="1281870">analysis--</span> <span m="1282730">the</span> <span
  m="1282840">fact</span> <span m="1283180">that</span> <span
  m="1284090">you</span> <span m="1284330">can</span> <span
  m="1284510">show</span> <span m="1285030">this.</span> <span
  m="1286250">That's</span> <span m="1287010">the</span> <span
  m="1287100">cool</span> <span m="1287310">part.</span> <span
  m="1287870">If</span> <span m="1287980">you</span> <span
  m="1288070">couldn't</span> <span m="1288230">show</span> <span
  m="1288430">that,</span> <span m="1288690">there's</span> <span
  m="1288890">nothing</span> <span m="1289100">cool</span> <span
  m="1289320">about</span> <span m="1289540">this</span> <span
  m="1289680">algorithm.</span></p><p><span m="1292060">So</span> <span
  m="1292600">we're</span> <span m="1292700">going</span> <span
  m="1292810">to</span> <span m="1292890">choose</span> <span
  m="1295140">a</span> <span m="1295260">random</span> <span
  m="1297440">binary</span> <span m="1298020">vector.</span> <span
  m="1298990">So</span> <span m="1299120">there</span> <span
  m="1299280">you</span> <span m="1299360">go.</span> <span
  m="1301000">Here's</span> <span m="1301170">your</span> <span
  m="1301290">randomness.</span> <span m="1303480">And</span> <span
  m="1303990">this</span> <span m="1304170">binary</span> <span
  m="1304350">vector,</span> <span m="1304850">every</span> <span
  m="1305040">time</span> <span m="1305240">you</span> <span
  m="1305370">run</span> <span m="1305560">it,</span> <span
  m="1305750">as</span> <span m="1305970">the</span> <span m="1306070">k</span>
  <span m="1306520">increases</span> <span m="1306980">here,</span> <span
  m="1307240">the</span> <span m="1307380">random</span> <span
  m="1307690">binary</span> <span m="1308000">vector</span> <span
  m="1308340">is</span> <span m="1308490">different</span> <span
  m="1309350">from</span> <span m="1309890">one</span> <span
  m="1310450">to</span> <span m="1310590">another.</span> <span
  m="1311380">That's</span> <span m="1311600">important.</span> <span
  m="1312190">You</span> <span m="1312330">can't</span> <span
  m="1312530">run</span> <span m="1312720">the</span> <span
  m="1312790">same</span> <span m="1313010">thing</span> <span
  m="1313190">again</span> <span m="1314150">and</span> <span
  m="1314290">then</span> <span m="1314430">expect</span> <span
  m="1314780">a</span> <span m="1314830">different</span> <span
  m="1315110">result.</span> <span m="1316770">That's</span> <span
  m="1316870">called</span> <span m="1316970">insanity.</span></p><p><span
  m="1318690">But</span> <span m="1319960">you</span> <span
  m="1323790">are</span> <span m="1323940">going</span> <span
  m="1324110">to</span> <span m="1324180">assume</span> <span
  m="1324590">that</span> <span m="1326460">given</span> <span
  m="1326730">that</span> <span m="1326870">we</span> <span
  m="1326965">are</span> <span m="1327060">working</span> <span
  m="1327450">in</span> <span m="1329940">the</span> <span
  m="1330060">binary</span> <span m="1330430">space</span> <span
  m="1331100">and</span> <span m="1331290">this</span> <span
  m="1331430">is</span> <span m="1331500">a</span> <span
  m="1331550">binary</span> <span m="1331850">vector,</span> <span
  m="1337890">you're</span> <span m="1338000">going</span> <span
  m="1338110">to</span> <span m="1338150">assume</span> <span
  m="1338460">that</span> <span m="1338830">r</span> <span m="1339100">i</span>
  <span m="1339280">equals</span> <span m="1339640">1</span> <span
  m="1340210">is</span> <span m="1340390">half</span> <span
  m="1341010">independently</span> <span m="1343460">for</span> <span
  m="1343750">i</span> <span m="1343990">equals</span> <span
  m="1344270">1</span> <span m="1345450">through</span> <span
  m="1345700">n.</span></p><p><span m="1346730">And</span> <span
  m="1347320">the</span> <span m="1347530">algorithm</span> <span
  m="1348960">essentially</span> <span m="1349920">is</span> <span
  m="1350110">this--</span> <span m="1351300">we're</span> <span
  m="1351410">going</span> <span m="1351600">to</span> <span
  m="1351680">do</span> <span m="1351920">a</span> <span
  m="1351970">bunch</span> <span m="1352320">of</span> <span
  m="1352460">matrix</span> <span m="1353400">vector</span> <span
  m="1354480">multiplies.</span> <span m="1357660">An</span> <span
  m="1357810">n</span> <span m="1357980">by</span> <span m="1358170">n</span>
  <span m="1358420">matrix</span> <span m="1360250">multiplied</span> <span
  m="1360840">by</span> <span m="1360910">an</span> <span m="1360980">n</span>
  <span m="1361220">by</span> <span m="1361410">n</span> <span
  m="1361650">matrix</span> <span m="1363430">gives</span> <span
  m="1363630">you</span> <span m="1363790">an</span> <span m="1363890">n</span>
  <span m="1364030">by</span> <span m="1364210">n</span> <span
  m="1364380">matrix,</span> <span m="1364890">and</span> <span
  m="1364990">that's</span> <span m="1365190">your</span> <span
  m="1365400">n</span> <span m="1365590">cubed.</span></p><p><span
  m="1366870">So</span> <span m="1367080">these</span> <span
  m="1367310">are</span> <span m="1367430">all--</span> <span
  m="1368550">I</span> <span m="1368670">think</span> <span m="1368820">I</span>
  <span m="1368870">said</span> <span m="1369130">this,</span> <span
  m="1369320">but</span> <span m="1369450">I</span> <span
  m="1369490">should've</span> <span m="1369660">written</span> <span
  m="1369880">this</span> <span m="1370080">down--</span> <span
  m="1371110">these</span> <span m="1371400">are</span> <span
  m="1371510">all</span> <span m="1371830">square</span> <span
  m="1373390">matrices</span> <span m="1374880">that</span> <span
  m="1375000">are</span> <span m="1375120">n</span> <span m="1375310">by</span>
  <span m="1375500">n.</span> <span m="1375730">And</span> <span
  m="1375820">that's</span> <span m="1375990">where</span> <span
  m="1376130">you</span> <span m="1376220">get</span> <span
  m="1376370">your</span> <span m="1376540">n</span> <span
  m="1376670">cube.</span></p><p><span m="1378700">A</span> <span
  m="1378830">matrix</span> <span m="1379360">vector</span> <span
  m="1380840">would</span> <span m="1381050">be</span> <span
  m="1381450">something</span> <span m="1381900">where</span> <span
  m="1382160">you</span> <span m="1382360">have--</span> <span
  m="1383460">typically</span> <span m="1383970">we'd</span> <span
  m="1384100">have</span> <span m="1384200">a</span> <span
  m="1384250">column</span> <span m="1384590">vector</span> <span
  m="1384920">here.</span> <span m="1385803">You're</span> <span
  m="1385920">going</span> <span m="1386038">to</span> <span
  m="1386156">get</span> <span m="1386510">something</span> <span
  m="1386790">like</span> <span m="1386990">that,</span> <span
  m="1388160">and</span> <span m="1388880">you</span> <span
  m="1389010">have</span> <span m="1389260">n</span> <span
  m="1389420">square</span> <span m="1390300">multiplications</span> <span
  m="1391060">here.</span></p><p><span m="1393810">You're</span> <span
  m="1394240">going</span> <span m="1394320">to</span> <span
  m="1394790">grab</span> <span m="1395050">one</span> <span
  m="1395190">of</span> <span m="1395260">these</span> <span
  m="1396580">and</span> <span m="1396780">then</span> <span
  m="1396980">multiply</span> <span m="1397250">it</span> <span
  m="1397520">by</span> <span m="1397870">that</span> <span
  m="1398270">and</span> <span m="1398410">get</span> <span
  m="1398570">an</span> <span m="1398670">entry</span> <span
  m="1399000">here.</span> <span m="1399950">And</span> <span
  m="1400160">that</span> <span m="1400580">obviously</span> <span
  m="1401010">is</span> <span m="1401900">n</span> <span
  m="1402090">multiplications,</span> <span m="1403760">but</span> <span
  m="1403970">you</span> <span m="1404100">only</span> <span
  m="1404250">have</span> <span m="1404710">n</span> <span
  m="1404970">elements</span> <span m="1405440">to</span> <span
  m="1405540">produce</span> <span m="1405910">here</span> <span
  m="1406130">in</span> <span m="1406220">this</span> <span
  m="1406380">vector.</span> <span m="1407280">So</span> <span
  m="1407340">you</span> <span m="1407520">only</span> <span
  m="1407670">got</span> <span m="1407980">n</span> <span
  m="1408310">square.</span> <span m="1409290">That</span> <span
  m="1409660">make</span> <span m="1409840">sense?</span></p><p><span
  m="1411160">And</span> <span m="1411380">so</span> <span
  m="1412650">what</span> <span m="1412860">we're</span> <span
  m="1412980">going</span> <span m="1413110">to</span> <span
  m="1413180">do</span> <span m="1413350">is,</span> <span
  m="1413500">we're</span> <span m="1413590">going</span> <span
  m="1413730">to</span> <span m="1414050">take</span> <span
  m="1414300">this</span> <span m="1414510">r,</span> <span
  m="1415510">and</span> <span m="1415820">we're</span> <span
  m="1415920">going</span> <span m="1416080">to</span> <span
  m="1416160">compute</span> <span m="1417530">A</span> <span
  m="1417890">times</span> <span m="1418440">B</span> <span
  m="1418820">r.</span> <span m="1419850">And</span> <span m="1420040">so</span>
  <span m="1420160">the</span> <span m="1420250">brackets</span> <span
  m="1420650">are</span> <span m="1420720">important</span> <span
  m="1421730">because</span> <span m="1422370">it</span> <span
  m="1422570">says</span> <span m="1422850">that</span> <span
  m="1422970">you're</span> <span m="1423070">going</span> <span
  m="1423160">to</span> <span m="1423210">compute</span> <span
  m="1423560">what's</span> <span m="1423820">inside</span> <span
  m="1424280">the</span> <span m="1424350">brackets</span> <span
  m="1424770">first.</span> <span m="1426820">Otherwise,</span> <span
  m="1427005">it</span> <span m="1427190">would</span> <span
  m="1427280">be</span> <span m="1427390">a</span> <span
  m="1427450">problem</span> <span m="1427860">because</span> <span
  m="1428630">you'd</span> <span m="1428820">be</span> <span
  m="1428910">multiplying</span> <span m="1429390">A</span> <span
  m="1429560">times</span> <span m="1429900">B.</span> <span
  m="1430600">And</span> <span m="1430980">obviously,</span> <span
  m="1431290">that's</span> <span m="1431530">order</span> <span
  m="1431740">n</span> <span m="1431950">cube.</span> <span
  m="1432680">Right?</span> <span m="1432940">You</span> <span
  m="1433080">don't</span> <span m="1433200">want</span> <span
  m="1433370">that.</span></p><p><span m="1434670">So</span> <span
  m="1434880">A</span> <span m="1435070">times</span> <span
  m="1435380">Br</span> <span m="1436670">equals</span> <span
  m="1437040">Cr.</span> <span m="1438710">OK.</span></p><p><span
  m="1439500">So</span> <span m="1440160">r,</span> <span
  m="1440430">remember,</span> <span m="1440780">is</span> <span
  m="1441230">a</span> <span m="1441280">column</span> <span
  m="1441570">vector.</span> <span m="1442560">And</span> <span
  m="1443140">C</span> <span m="1443330">is</span> <span m="1443420">an</span>
  <span m="1443500">n</span> <span m="1443610">by</span> <span
  m="1443790">n</span> <span m="1444010">matrix</span> <span
  m="1444320">as</span> <span m="1444500">our</span> <span m="1444600">A</span>
  <span m="1444720">and</span> <span m="1444840">B.</span> <span
  m="1446140">We're</span> <span m="1446220">going</span> <span
  m="1446490">to</span> <span m="1447070">output</span> <span
  m="1449330">yes.</span></p><p>&nbsp;</p><p><span m="1456670">Else--</span>
  <span m="1459360">if</span> <span m="1459710">these</span> <span
  m="1459910">two</span> <span m="1460030">are</span> <span
  m="1460100">not</span> <span m="1460260">equal,</span> <span
  m="1461520">you're</span> <span m="1461600">going</span> <span
  m="1461670">to</span> <span m="1461740">output</span> <span
  m="1463150">no.</span> <span m="1465040">OK?</span></p><p><span
  m="1466860">And</span> <span m="1467020">so</span> <span
  m="1467100">that's</span> <span m="1467493">it.</span> <span
  m="1467886">That's</span> <span m="1468280">one</span> <span
  m="1469530">run</span> <span m="1470030">of</span> <span
  m="1470240">the</span> <span m="1470320">algorithm,</span> <span
  m="1471710">generator</span> <span m="1472060">random</span> <span
  m="1472400">r</span> <span m="1473110">and</span> <span m="1473320">do</span>
  <span m="1474030">the</span> <span m="1474120">multiplication</span> <span
  m="1475940">as</span> <span m="1476120">you</span> <span
  m="1476220">see</span> <span m="1476400">here.</span></p><p><span
  m="1477060">So</span> <span m="1477220">let's</span> <span
  m="1478260">be</span> <span m="1480080">clear</span> <span
  m="1480620">about</span> <span m="1481020">complexity,</span> <span
  m="1482390">and</span> <span m="1483300">let's</span> <span
  m="1483690">make</span> <span m="1483880">sure</span> <span
  m="1485290">we</span> <span m="1485820">understand</span> <span
  m="1486850">the</span> <span m="1487450">simpler</span> <span
  m="1488040">aspects</span> <span m="1488450">of</span> <span
  m="1488510">the</span> <span m="1488570">algorithm</span> <span
  m="1489770">before</span> <span m="1490040">we</span> <span
  m="1490170">get</span> <span m="1490290">into</span> <span
  m="1490470">the</span> <span m="1490520">analysis</span> <span
  m="1491320">associated</span> <span m="1491900">with</span> <span
  m="1492350">bounding</span> <span m="1493070">the</span> <span
  m="1493760">false</span> <span m="1494730">positive</span> <span
  m="1495390">probability.</span> <span m="1497390">The</span> <span
  m="1497460">hard</span> <span m="1497700">part</span> <span
  m="1497940">is</span> <span m="1498040">going</span> <span
  m="1498150">to</span> <span m="1498190">be</span> <span
  m="1498310">bounding</span> <span m="1498800">the</span> <span
  m="1498900">false</span> <span m="1499320">positive</span> <span
  m="1499780">probability.</span></p><p><span m="1502810">But</span> <span
  m="1503080">the</span> <span m="1503170">easy</span> <span
  m="1503520">part</span> <span m="1504480">is</span> <span
  m="1505210">first,</span> <span m="1505630">the</span> <span
  m="1505720">complexity.</span> <span m="1508070">So</span> <span
  m="1508210">how</span> <span m="1509840">many</span> <span
  m="1510340">matrix</span> <span m="1511560">vector</span> <span
  m="1512880">products</span> <span m="1513780">am</span> <span
  m="1513960">I</span> <span m="1514050">doing</span> <span
  m="1514320">here?</span> <span m="1515850">How</span> <span
  m="1516020">many</span> <span m="1516210">matrix</span> <span
  m="1516860">vector</span> <span m="1517340">products</span> <span
  m="1517950">am</span> <span m="1518090">I</span> <span
  m="1518160">doing</span> <span m="1518440">here</span> <span
  m="1519030">in</span> <span m="1519220">this</span> <span
  m="1519440">check</span> <span m="1520190">on</span> <span
  m="1520450">one</span> <span m="1521870">iteration</span> <span
  m="1522620">of</span> <span m="1522740">algorithm?</span> <span
  m="1523140">Yeah.</span></p><p><span m="1523510">AUDIENCE:
  Three.</span></p><p><span m="1524480">SRINIVAS DEVADAS: Three.</span> <span
  m="1525070">All</span> <span m="1525170">right.</span> <span
  m="1526570">All</span> <span m="1526630">right.</span> <span
  m="1526990">You</span> <span m="1527080">need</span> <span
  m="1527170">to</span> <span m="1527260">stand</span> <span
  m="1527530">up.</span> <span m="1529210">This</span> <span
  m="1529360">is</span> <span m="1529520">fun.</span> <span
  m="1529890">This</span> <span m="1530620">is</span> <span
  m="1531300">the</span> <span m="1531380">hardest</span> <span
  m="1531820">throw</span> <span m="1532100">I've</span> <span
  m="1532280">had</span> <span m="1532500">to</span> <span
  m="1532570">make</span> <span m="1533560">in</span> <span
  m="1533800">6046.</span> <span m="1535070">I</span> <span
  m="1535200">got</span> <span m="1535280">to</span> <span
  m="1535320">put</span> <span m="1535460">this</span> <span
  m="1535620">down.</span> <span m="1536250">Warm</span> <span
  m="1536590">up</span> <span m="1536700">a</span> <span
  m="1536750">little</span> <span m="1536910">bit.</span> <span
  m="1539030">It's</span> <span m="1539150">kind</span> <span
  m="1539195">of</span> <span m="1539300">cold.</span></p><p><span
  m="1542010">Whoa.</span> <span m="1542810">Terrible!</span></p><p><span
  m="1543670">All</span> <span m="1543760">right.</span> <span
  m="1544910">The</span> <span m="1545060">person</span> <span
  m="1545360">who</span> <span m="1545460">gets</span> <span
  m="1545720">up</span> <span m="1545870">and</span> <span
  m="1546000">gets</span> <span m="1546200">that</span> <span
  m="1546580">owns</span> <span m="1546920">it,</span> <span
  m="1547540">and</span> <span m="1547720">we're</span> <span
  m="1547790">going</span> <span m="1547890">to</span> <span
  m="1547930">do</span> <span m="1548090">this</span> <span
  m="1548530">again.</span> <span m="1549410">All</span> <span
  m="1549495">right.</span> <span m="1549580">Let's</span> <span
  m="1549670">see</span> <span m="1549783">how</span> <span
  m="1549896">long</span> <span m="1550190">this</span> <span
  m="1550300">takes.</span></p><p><span m="1551190">AUDIENCE: Is this
  part</span> <span m="1551633">of my trial?</span></p><p>&nbsp;</p><p><span
  m="1552520">SRINIVAS DEVADAS: Yes.</span> <span m="1553540">Well,</span> <span
  m="1553690">the</span> <span m="1553830">first</span> <span
  m="1554050">one</span> <span m="1554190">failed.</span> <span
  m="1555200">False</span> <span m="1555730">whatever,</span> <span
  m="1556260">right?</span></p><p>&nbsp;</p><p><span
  m="1559475">[LAUGHTER]</span></p><p><span m="1560860">I</span> <span
  m="1561360">got</span> <span m="1561433">a</span> <span m="1561506">few</span>
  <span m="1561580">more.</span></p><p><span
  m="1561940">[LAUGHS]</span></p><p>&nbsp;</p><p><span m="1563764">All</span>
  <span m="1563992">right.</span> <span m="1564220">Let</span> <span
  m="1564280">me</span> <span m="1564380">see.</span> <span m="1565160">I</span>
  <span m="1565240">think</span> <span m="1565370">I</span> <span
  m="1565410">need</span> <span m="1565540">to</span> <span
  m="1565590">go</span> <span m="1565740">here.</span> <span
  m="1567440">This</span> <span m="1567570">is</span> <span
  m="1567700">good.</span> <span m="1568030">And</span> <span
  m="1568200">I</span> <span m="1568230">need</span> <span m="1569310">to</span>
  <span m="1569430">be--</span> <span m="1571350">all</span> <span
  m="1571650">right.</span> <span m="1572450">Number</span> <span
  m="1572710">three.</span> <span m="1573030">Thank</span> <span
  m="1573320">you.</span> <span m="1573440">Thank</span> <span
  m="1573640">you.</span></p><p><span
  m="1574321">[CLAPPING]</span></p><p>&nbsp;</p><p><span m="1578380">So</span>
  <span m="1579790">it</span> <span m="1579920">was</span> <span
  m="1580350">three.</span> <span m="1581270">Three.</span> <span
  m="1581570">Perfect.</span> <span m="1583760">Three</span> <span
  m="1584050">matrix</span> <span m="1584400">vector</span> <span
  m="1584650">products</span> <span m="1585060">because</span> <span
  m="1585250">I</span> <span m="1585300">got</span> <span m="1585430">to</span>
  <span m="1585480">do</span> <span m="1585580">this.</span> <span
  m="1585920">That's</span> <span m="1586140">the</span> <span
  m="1586180">matrix</span> <span m="1586460">vector</span> <span
  m="1586750">product.</span> <span m="1587680">Remember</span> <span
  m="1588060">I'm</span> <span m="1588160">getting</span> <span
  m="1588380">a</span> <span m="1588480">column</span> <span
  m="1588880">vector</span> <span m="1589260">out</span> <span
  m="1589360">of</span> <span m="1589470">this,</span> <span
  m="1589960">which</span> <span m="1589980">is</span> <span
  m="1590090">important,</span> <span m="1591800">and</span> <span
  m="1592000">then</span> <span m="1592140">I'm</span> <span
  m="1592220">going</span> <span m="1592350">to</span> <span
  m="1592390">multiply</span> <span m="1593740">this</span> <span
  m="1593970">matrix</span> <span m="1594350">with</span> <span
  m="1594480">a</span> <span m="1594530">column</span> <span
  m="1594860">vector,</span> <span m="1595220">matrix</span> <span
  m="1595550">vector</span> <span m="1595800">product</span> <span
  m="1596220">number</span> <span m="1596460">two.</span> <span
  m="1597150">And</span> <span m="1597300">then</span> <span
  m="1597430">there's</span> <span m="1597570">a</span> <span
  m="1597660">matrix</span> <span m="1598210">vector</span> <span
  m="1598460">product</span> <span m="1598800">over</span> <span
  m="1598950">here.</span> <span m="1600050">So</span> <span
  m="1600210">then</span> <span m="1600410">at</span> <span
  m="1600480">that</span> <span m="1600670">point--</span> <span
  m="1601480">do</span> <span m="1601520">you</span> <span
  m="1601560">remember</span> <span m="1601970">I</span> <span
  m="1602140">have</span> <span m="1602680">a</span> <span
  m="1602740">vector</span> <span m="1603590">and</span> <span
  m="1603750">a</span> <span m="1603780">vector.</span> <span
  m="1604790">And</span> <span m="1605540">checking</span> <span
  m="1605900">the</span> <span m="1606120">equivalence</span> <span
  m="1606580">of</span> <span m="1606690">two</span> <span
  m="1606850">vectors</span> <span m="1607310">is</span> <span
  m="1607420">simply</span> <span m="1607720">checking</span> <span
  m="1608100">the</span> <span m="1608260">equivalence</span> <span
  m="1608750">of</span> <span m="1608890">each</span> <span
  m="1609150">element</span> <span m="1609520">in</span> <span
  m="1609590">the</span> <span m="1609660">vector</span> <span
  m="1610790">1</span> <span m="1611060">by</span> <span
  m="1611180">one.</span></p><p><span m="1611970">So</span> <span
  m="1612160">first</span> <span m="1612440">one,</span> <span
  m="1612640">same</span> <span m="1612890">as</span> <span
  m="1612980">the</span> <span m="1613060">first</span> <span
  m="1613310">one.</span> <span m="1613630">Second</span> <span
  m="1613890">one,</span> <span m="1614060">same</span> <span
  m="1614270">as</span> <span m="1614330">the</span> <span
  m="1614410">second</span> <span m="1614670">one.</span> <span
  m="1615280">Et</span> <span m="1615460">cetera.</span></p><p><span
  m="1617410">And</span> <span m="1618100">so</span> <span
  m="1618280">this</span> <span m="1618690">is</span> <span
  m="1619480">order</span> <span m="1619720">n</span> <span
  m="1619820">square,</span> <span m="1620420">but</span> <span
  m="1620980">three</span> <span m="1622080">is</span> <span
  m="1622190">something</span> <span m="1622460">that</span> <span
  m="1623030">is</span> <span m="1623210">worth</span> <span
  m="1623450">thinking</span> <span m="1623750">about</span> <span
  m="1624090">simply</span> <span m="1624320">because</span> <span
  m="1624730">every</span> <span m="1624910">once</span> <span
  m="1625120">in</span> <span m="1625170">a while,</span> <span
  m="1625410">we're</span> <span m="1625510">interested in</span> <span
  m="1625960">constant</span> <span m="1626320">factors.</span> <span
  m="1627370">And</span> <span m="1627780">the</span> <span
  m="1627900">other</span> <span m="1628110">thing</span> <span
  m="1628280">that's</span> <span m="1628460">interesting</span> <span
  m="1628810">about</span> <span m="1629070">this--</span> <span
  m="1630960">make</span> <span m="1631043">sure</span> <span
  m="1631126">I</span> <span m="1631210">write</span> <span
  m="1631550">this--</span> <span m="1631850">let</span> <span
  m="1632030">me</span> <span m="1634260">write</span> <span
  m="1634500">this</span> <span m="1634640">over</span> <span
  m="1634810">here--</span> <span m="1636760">that</span> <span
  m="1638970">you</span> <span m="1639770">are</span> <span
  m="1640040">going</span> <span m="1640440">to--</span> <span
  m="1641540">if</span> <span m="1642660">A</span> <span m="1642910">B</span>
  <span m="1644920">equals</span> <span m="1645380">C,</span> <span
  m="1648090">then</span> <span m="1648960">there's</span> <span
  m="1649740">no</span> <span m="1650230">issue</span> <span
  m="1650890">associated</span> <span m="1651520">with</span> <span
  m="1652560">error</span> <span m="1652950">here.</span> <span
  m="1654080">So</span> <span m="1654180">there's</span> <span
  m="1654350">no</span> <span m="1654520">notion</span> <span
  m="1655110">of</span> <span m="1656000">a</span> <span
  m="1656060">false</span> <span m="1656530">negative</span> <span
  m="1657520">because</span> <span m="1657770">if</span> <span
  m="1657930">AB</span> <span m="1658410">equals</span> <span
  m="1658770">C,</span> <span m="1659880">then</span> <span
  m="1660580">you</span> <span m="1660815">know,</span> <span
  m="1661050">thanks</span> <span m="1662300">to</span> <span
  m="1662980">the</span> <span m="1663620">associativity</span> <span
  m="1665240">of</span> <span m="1666940">matrix</span> <span
  m="1667970">multiplication--</span> <span m="1669190">be</span> <span
  m="1669345">it</span> <span m="1669500">whether</span> <span
  m="1669750">they're</span> <span m="1670150">n</span> <span
  m="1670310">by</span> <span m="1670490">n</span> <span
  m="1670690">matrices</span> <span m="1671920">or</span> <span
  m="1676290">columns--</span> <span m="1677500">you</span> <span
  m="1677640">have</span> <span m="1678800">this</span> <span
  m="1679190">relationship</span> <span m="1679730">here.</span></p><p><span
  m="1679950">And</span> <span m="1680040">I</span> <span
  m="1680060">hope</span> <span m="1680220">you</span> <span
  m="1680300">can</span> <span m="1680400">read</span> <span
  m="1680560">it</span> <span m="1680640">at</span> <span m="1680720">the</span>
  <span m="1680790">back.</span> <span m="1681620">Essentially</span> <span
  m="1682040">what</span> <span m="1682170">I</span> <span
  m="1682230">have</span> <span m="1682440">here</span> <span
  m="1683220">is</span> <span m="1683690">if</span> <span m="1683880">AB</span>
  <span m="1684280">equals</span> <span m="1684580">C.</span> <span
  m="1685030">So</span> <span m="1685340">if</span> <span m="1685500">in</span>
  <span m="1685630">fact,</span> <span m="1686620">the</span> <span
  m="1686810">matrix</span> <span m="1687120">multiply</span> <span
  m="1687570">happened</span> <span m="1687960">correctly,</span> <span
  m="1689400">I'm</span> <span m="1689550">in</span> <span m="1689610">a</span>
  <span m="1689660">situation</span> <span m="1690230">where</span> <span
  m="1691520">it</span> <span m="1691640">is</span> <span
  m="1691740">clear</span> <span m="1692000">that</span> <span
  m="1692650">A</span> <span m="1693000">Br</span> <span
  m="1693700">equals</span> <span m="1694930">this,</span> <span
  m="1695440">thanks</span> <span m="1695670">to</span> <span
  m="1695750">this</span> <span m="1696020">associativity</span> <span
  m="1696510">of</span> <span m="1697090">matrix</span> <span
  m="1697420">multiply.</span> <span m="1698200">And</span> <span
  m="1698340">that</span> <span m="1698470">of</span> <span
  m="1698560">course,</span> <span m="1698860">is</span> <span
  m="1698960">exactly</span> <span m="1699230">the</span> <span
  m="1699320">same</span> <span m="1699640">as</span> <span
  m="1700560">Cr.</span></p><p><span m="1702240">So</span> <span
  m="1702560">that</span> <span m="1702750">should</span> <span
  m="1702910">convince</span> <span m="1703330">you,</span> <span
  m="1704570">thanks</span> <span m="1704880">to</span> <span
  m="1705010">associativity</span> <span m="1705650">of</span> <span
  m="1705700">matrix</span> <span m="1706010">multiply</span> <span
  m="1706860">that</span> <span m="1707090">you</span> <span
  m="1707200">don't</span> <span m="1707440">have</span> <span
  m="1708250">any</span> <span m="1708540">false</span> <span
  m="1708960">negatives</span> <span m="1709870">in</span> <span
  m="1710020">this</span> <span m="1710180">algorithm.</span> <span
  m="1711480">Make</span> <span m="1711670">sense?</span></p><p><span
  m="1713680">So</span> <span m="1713830">we're</span> <span
  m="1713900">all</span> <span m="1714110">good.</span> <span
  m="1714730">All</span> <span m="1715170">we</span> <span
  m="1715300">have</span> <span m="1715460">to</span> <span
  m="1715590">do,</span> <span m="1716670">given</span> <span
  m="1717710">what</span> <span m="1717870">we</span> <span
  m="1717980">have</span> <span m="1718260">with</span> <span
  m="1718400">respect</span> <span m="1718670">to</span> <span
  m="1718750">Frievald</span> <span m="1719680">is</span> <span
  m="1719860">to</span> <span m="1719970">do</span> <span
  m="1720090">this</span> <span m="1720320">part</span> <span
  m="1720560">here,</span> <span m="1721050">which</span> <span
  m="1721070">is</span> <span m="1721170">going</span> <span
  m="1721280">to</span> <span m="1721340">take</span> <span m="1721480">a</span>
  <span m="1721550">little</span> <span m="1721770">bit</span> <span
  m="1721890">of</span> <span m="1721970">doing.</span> <span
  m="1723190">And</span> <span m="1723750">the</span> <span
  m="1723880">challenge</span> <span m="1724330">always</span> <span
  m="1724830">with</span> <span m="1725740">simple</span> <span
  m="1726210">algorithm</span> <span m="1726590">is</span> <span
  m="1727440">you</span> <span m="1727750">don't</span> <span
  m="1727980">quite</span> <span m="1728270">know</span> <span
  m="1728490">why</span> <span m="1728670">they</span> <span
  m="1728800">work.</span> <span m="1729680">And</span> <span
  m="1729840">then</span> <span m="1729960">of</span> <span
  m="1730040">course,</span> <span m="1730560">you</span> <span
  m="1730780">have</span> <span m="1730910">sophisticated</span> <span
  m="1731450">algorithms,</span> <span m="1732310">and</span> <span
  m="1732480">you</span> <span m="1732580">don't</span> <span
  m="1732730">quite</span> <span m="1732980">know</span> <span
  m="1733110">why</span> <span m="1733235">they</span> <span
  m="1733360">work.</span></p><p>&nbsp;</p><p><span m="1740580">So</span> <span
  m="1740750">this</span> <span m="1740920">will</span> <span
  m="1741050">take</span> <span m="1741230">a</span> <span
  m="1741340">few</span> <span m="1741710">minutes.</span> <span
  m="1742020">It's</span> <span m="1742140">not</span> <span
  m="1742710">super</span> <span m="1743060">complicated,</span> <span
  m="1743990">and</span> <span m="1744130">there's</span> <span
  m="1744270">a</span> <span m="1744320">little</span> <span
  m="1744650">insight,</span> <span m="1745770">as</span> <span
  m="1745970">always,</span> <span m="1747180">with</span> <span
  m="1747340">these</span> <span m="1747520">things</span> <span
  m="1747780">that</span> <span m="1747800">are</span> <span
  m="1747820">not</span> <span m="1748090">immediately</span> <span
  m="1748640">obvious.</span></p><p><span m="1749850">But</span> <span
  m="1750110">we'll</span> <span m="1750260">have</span> <span
  m="1750520">to</span> <span m="1751520">look</span> <span
  m="1751820">at</span> <span m="1752750">the</span> <span
  m="1752920">number</span> <span m="1753410">of</span> <span
  m="1753600">r's.</span> <span m="1755750">So</span> <span
  m="1755880">you</span> <span m="1755980">have</span> <span
  m="1756130">an</span> <span m="1756240">r</span> <span
  m="1756580">vector</span> <span m="1757510">that</span> <span
  m="1757670">you've</span> <span m="1757810">generated</span> <span
  m="1758350">randomly,</span> <span m="1759140">and</span> <span
  m="1759340">it</span> <span m="1759490">may</span> <span m="1759645">be</span>
  <span m="1759800">a</span> <span m="1759850">bad</span> <span
  m="1760330">vector.</span> <span m="1761170">It</span> <span
  m="1761310">may</span> <span m="1761460">be</span> <span m="1761610">a</span>
  <span m="1761650">vector</span> <span m="1762210">that</span> <span
  m="1763250">doesn't</span> <span m="1763650">show</span> <span
  m="1764050">you</span> <span m="1764280">that</span> <span
  m="1767510">the</span> <span m="1767750">product</span> <span
  m="1768070">matrix</span> <span m="1768880">has</span> <span
  m="1769150">an</span> <span m="1769230">incorrect</span> <span
  m="1769760">entry.</span> <span m="1770490">Remember</span> <span
  m="1770780">there's</span> <span m="1770940">n</span> <span
  m="1771150">square</span> <span m="1771590">entries</span> <span
  m="1772060">in</span> <span m="1772490">this</span> <span
  m="1772650">matrix.</span> <span m="1773760">Exactly</span> <span
  m="1774380">one</span> <span m="1774580">of</span> <span
  m="1774680">them</span> <span m="1774820">may</span> <span
  m="1774960">be</span> <span m="1775110">wrong,</span> <span
  m="1775620">and</span> <span m="1775930">you</span> <span
  m="1776100">need</span> <span m="1776240">to</span> <span
  m="1776330">find</span> <span m="1776680">it.</span> <span
  m="1777280">Right?</span></p><p><span m="1778760">So</span> <span
  m="1778850">there</span> <span m="1778950">may</span> <span
  m="1779090">be</span> <span m="1779220">a</span> <span m="1779280">lot</span>
  <span m="1779510">of</span> <span m="1779590">entries</span> <span
  m="1780000">which</span> <span m="1780130">are</span> <span
  m="1780230">all</span> <span m="1780370">correct,</span> <span
  m="1781030">but</span> <span m="1781150">you've</span> <span
  m="1781250">got</span> <span m="1781340">to</span> <span
  m="1781390">find</span> <span m="1781700">that</span> <span
  m="1781850">one</span> <span m="1782140">entry</span> <span
  m="1782470">that's</span> <span m="1782670">incorrect.</span> <span
  m="1783720">And</span> <span m="1783870">so</span> <span
  m="1784380">you</span> <span m="1784540">could</span> <span
  m="1784740">miss</span> <span m="1784940">it.</span> <span
  m="1785800">A</span> <span m="1785860">given</span> <span m="1786170">r</span>
  <span m="1786410">vector</span> <span m="1786780">might</span> <span
  m="1786970">miss</span> <span m="1787230">it,</span> <span
  m="1788040">and</span> <span m="1788440">of</span> <span
  m="1788570">course,</span> <span m="1789000">if</span> <span
  m="1789080">you</span> <span m="1789170">keep</span> <span
  m="1789350">generating</span> <span m="1789730">the</span> <span
  m="1789820">r's,</span> <span m="1790830">you'd</span> <span
  m="1790980">like</span> <span m="1791200">to</span> <span
  m="1791850">find</span> <span m="1792200">it</span> <span
  m="1793120">and</span> <span m="1793510">declare</span> <span
  m="1794200">that</span> <span m="1794360">the</span> <span
  m="1794430">matrices</span> <span m="1795500">weren't</span> <span
  m="1795790">multiplied</span> <span m="1796200">correctly</span> <span
  m="1797360">and</span> <span m="1797600">that</span> <span
  m="1797790">probability</span> <span m="1798320">is</span> <span
  m="1798630">what</span> <span m="1798860">we</span> <span
  m="1798960">have</span> <span m="1799090">to</span> <span
  m="1799180">compute.</span></p><p><span m="1800330">So</span> <span
  m="1801510">we</span> <span m="1801740">want</span> <span
  m="1801840">to</span> <span m="1801880">get</span> <span
  m="1802050">this</span> <span m="1803800">result</span> <span
  m="1804280">where</span> <span m="1804550">we</span> <span
  m="1804690">are</span> <span m="1804740">analyzing</span> <span
  m="1805370">the</span> <span m="1805480">correctness</span> <span
  m="1807240">in</span> <span m="1807480">the</span> <span
  m="1807600">case.</span> <span m="1808240">You've</span> <span
  m="1808390">already</span> <span m="1808710">analyzed</span> <span
  m="1809130">the</span> <span m="1809190">correctness</span> <span
  m="1810400">in</span> <span m="1810610">the</span> <span
  m="1810720">case</span> <span m="1811200">where</span> <span
  m="1814520">AB</span> <span m="1815250">equals</span> <span
  m="1815430">C,</span> <span m="1816410">but</span> <span
  m="1816550">now</span> <span m="1816720">we</span> <span
  m="1816820">have</span> <span m="1816950">to</span> <span
  m="1817010">analyze</span> <span m="1817380">the</span> <span
  m="1817460">correctness</span> <span m="1817880">in</span> <span
  m="1817960">the</span> <span m="1818050">case</span> <span
  m="1818300">where</span> <span m="1818410">AB</span> <span
  m="1818790">is</span> <span m="1818900">not</span> <span
  m="1819170">equal</span> <span m="1819430">to</span> <span
  m="1819520">C.</span> <span m="1820350">Right?</span></p><p>&nbsp;</p><p><span
  m="1821890">And</span> <span m="1822080">so</span> <span
  m="1824100">the</span> <span m="1824290">claim</span> <span
  m="1824640">is</span> <span m="1826880">that</span> <span
  m="1827300">if</span> <span m="1827620">AB</span> <span m="1828700">is</span>
  <span m="1829000">not</span> <span m="1829260">equal</span> <span
  m="1829540">to</span> <span m="1829630">C,</span> <span
  m="1831690">then</span> <span m="1833530">the</span> <span
  m="1833690">probability</span> <span m="1834390">of</span> <span
  m="1836410">ABr</span> <span m="1837690">not</span> <span
  m="1837960">equal</span> <span m="1838250">to</span> <span
  m="1838320">Cr</span> <span m="1839610">is</span> <span
  m="1839810">greater</span> <span m="1840110">than</span> <span
  m="1840270">or</span> <span m="1840380">equal</span> <span
  m="1840610">to</span> <span m="1840670">half.</span></p><p><span
  m="1842140">So</span> <span m="1842250">this</span> <span
  m="1842330">is</span> <span m="1842510">greater</span> <span
  m="1842740">than</span> <span m="1842900">or</span> <span
  m="1842920">equal</span> <span m="1843200">to.</span> <span
  m="1843790">Over</span> <span m="1843950">there,</span> <span
  m="1844310">I'm</span> <span m="1844400">just</span> <span
  m="1844580">talking</span> <span m="1844820">about</span> <span
  m="1845030">the</span> <span m="1845110">false</span> <span
  m="1845470">negative</span> <span m="1845860">probability</span> <span
  m="1846440">where</span> <span m="1846690">I'm</span> <span
  m="1846790">actually</span> <span m="1847020">getting</span> <span
  m="1847150">an</span> <span m="1847280">incorrect</span> <span
  m="1847890">yes</span> <span m="1848800">when</span> <span
  m="1849020">you</span> <span m="1849120">have</span> <span
  m="1850090">the</span> <span m="1850250">matrices</span> <span
  m="1850820">being</span> <span m="1850990">multiplied</span> <span
  m="1853920">wrongly,</span> <span m="1854890">incorrectly.</span> <span
  m="1855830">And</span> <span m="1856030">so</span> <span
  m="1856120">that's</span> <span m="1856310">why</span> <span
  m="1856550">I</span> <span m="1856630">get--</span> <span
  m="1857560">this</span> <span m="1858030">is</span> <span
  m="1858140">what</span> <span m="1858290">I</span> <span
  m="1858340">want.</span> <span m="1858770">I</span> <span
  m="1858870">want</span> <span m="1859730">there</span> <span
  m="1860190">to</span> <span m="1860270">be</span> <span m="1860840">a</span>
  <span m="1860960">greater</span> <span m="1861220">than</span> <span
  m="1861380">one</span> <span m="1861610">half</span> <span
  m="1861830">probability</span> <span m="1862860">for</span> <span
  m="1863810">r</span> <span m="1865340">to</span> <span m="1868950">have</span>
  <span m="1869040">discovered</span> <span m="1869490">that,</span> <span
  m="1869970">for</span> <span m="1870420">r</span> <span m="1870540">to</span>
  <span m="1870660">have</span> <span m="1870780">discovered</span> <span
  m="1871200">that.</span> <span m="1871810">OK?</span></p><p><span
  m="1874490">I'll</span> <span m="1874600">stop</span> <span
  m="1874710">for</span> <span m="1874860">questions</span> <span
  m="1875240">in</span> <span m="1875305">a</span> <span
  m="1875370">second,</span> <span m="1877220">but</span> <span
  m="1877710">let</span> <span m="1877830">me</span> <span m="1877910">do</span>
  <span m="1878020">a</span> <span m="1878060">little</span> <span
  m="1878290">bit</span> <span m="1878440">more.</span></p><p><span
  m="1880680">I'm</span> <span m="1880770">going</span> <span
  m="1880870">to</span> <span m="1880920">compute</span> <span
  m="1881280">the</span> <span m="1881360">difference</span> <span
  m="1881760">matrix,</span> <span m="1883120">and</span> <span
  m="1883360">I'm</span> <span m="1883440">not</span> <span
  m="1883650">computing</span> <span m="1884110">this</span> <span
  m="1884460">because</span> <span m="1884660">obviously</span> <span
  m="1884970">this</span> <span m="1885100">would</span> <span
  m="1885230">take</span> <span m="1885380">a</span> <span
  m="1885440">while</span> <span m="1885720">to</span> <span
  m="1885790">compute.</span> <span m="1886600">It's</span> <span
  m="1886770">just</span> <span m="1886950">for</span> <span
  m="1887020">the</span> <span m="1887130">purpose</span> <span
  m="1887430">of</span> <span m="1887540">analysis.</span></p><p><span
  m="1888610">I'm</span> <span m="1888750">going</span> <span
  m="1888880">to</span> <span m="1888960">look</span> <span
  m="1889250">at</span> <span m="1889340">the</span> <span
  m="1889720">difference</span> <span m="1890510">matrix</span> <span
  m="1891000">D</span> <span m="1891260">equals</span> <span
  m="1891500">AB</span> <span m="1891840">minus</span> <span
  m="1892230">C</span> <span m="1892820">because</span> <span
  m="1893000">you</span> <span m="1893100">want</span> <span
  m="1893350">D</span> <span m="1893530">to</span> <span m="1893590">be</span>
  <span m="1893700">0.</span> <span m="1894570">And</span> <span
  m="1894970">that</span> <span m="1895100">we're</span> <span
  m="1895190">going</span> <span m="1895290">to</span> <span
  m="1895510">do</span> <span m="1895670">some</span> <span
  m="1895810">analysis</span> <span m="1896380">that</span> <span
  m="1896550">says--</span> <span m="1897460">we</span> <span
  m="1897475">are</span> <span m="1897490">going</span> <span
  m="1897505">to</span> <span m="1897520">try</span> <span
  m="1897840">and</span> <span m="1897950">find</span> <span
  m="1898510">these</span> <span m="1898750">non-zero</span> <span
  m="1899410">entries</span> <span m="1899730">in</span> <span
  m="1900210">D</span> <span m="1900870">because,</span> <span
  m="1901130">clearly,</span> <span m="1901370">the</span> <span
  m="1901460">non-zero</span> <span m="1901980">entries</span> <span
  m="1902470">in</span> <span m="1902630">D</span> <span m="1904046">tell</span>
  <span m="1904520">you</span> <span m="1904670">if</span> <span
  m="1904775">there's</span> <span m="1904880">non-zero</span> <span
  m="1905300">entry</span> <span m="1905660">in</span> <span
  m="1905790">D,</span> <span m="1906510">you</span> <span
  m="1906596">got</span> <span m="1906683">a</span> <span
  m="1906770">problem</span> <span m="1907110">here.</span> <span
  m="1907650">The</span> <span m="1907730">matrices</span> <span
  m="1908210">weren't</span> <span m="1908430">multiplied</span> <span
  m="1908850">properly.</span> <span m="1910490">So</span> <span
  m="1910620">that's</span> <span m="1910810">why</span> <span
  m="1911000">we</span> <span m="1911100">have</span> <span m="1911300">D</span>
  <span m="1911490">here.</span> <span m="1912260">Don't</span> <span
  m="1912430">think</span> <span m="1912570">of</span> <span
  m="1912670">it</span> <span m="1912790">as</span> <span
  m="1912910">we're</span> <span m="1913000">actually</span> <span
  m="1913410">computing</span> <span m="1913860">that.</span></p><p><span
  m="1916960">So</span> <span m="1917150">what</span> <span
  m="1917310">we'd</span> <span m="1917470">like</span> <span
  m="1924310">is</span> <span m="1924520">to,</span> <span m="1925120">as</span>
  <span m="1925430">I</span> <span m="1925455">said,</span> <span
  m="1925480">discover</span> <span m="1926070">these</span> <span
  m="1926240">entries</span> <span m="1926690">where</span> <span
  m="1926750">our</span> <span m="1926940">hypothesis</span> <span
  m="1927660">now</span> <span m="1928460">is</span> <span
  m="1928680">that</span> <span m="1928910">D</span> <span m="1929120">is</span>
  <span m="1929260">not</span> <span m="1929450">equal</span> <span
  m="1929700">to</span> <span m="1929760">0</span> <span
  m="1930140">because</span> <span m="1930400">that's</span> <span
  m="1930620">the</span> <span m="1930720">case</span> <span
  m="1931000">we're</span> <span m="1931150">considering.</span> <span
  m="1932500">We</span> <span m="1932670">know</span> <span
  m="1932870">that</span> <span m="1933030">D</span> <span m="1933180">is</span>
  <span m="1933290">not</span> <span m="1933440">equal</span> <span
  m="1933640">to</span> <span m="1933690">0</span> <span m="1934230">if</span>
  <span m="1934350">the</span> <span m="1934450">matrices</span> <span
  m="1934960">were</span> <span m="1935500">multiplied</span> <span
  m="1936070">incorrectly.</span> <span m="1937630">And</span> <span
  m="1937755">when</span> <span m="1937880">I</span> <span
  m="1937930">say</span> <span m="1938130">D</span> <span m="1938280">is</span>
  <span m="1938430">not</span> <span m="1938590">equal</span> <span
  m="1938800">to</span> <span m="1938850">0,</span> <span m="1939580">it</span>
  <span m="1939680">means</span> <span m="1939910">that</span> <span
  m="1940080">there</span> <span m="1940260">are</span> <span
  m="1940470">n</span> <span m="1940660">square</span> <span
  m="1941170">entries</span> <span m="1941670">in</span> <span
  m="1941930">D,</span> <span m="1942590">and</span> <span
  m="1942780">one</span> <span m="1942990">of</span> <span
  m="1943080">them</span> <span m="1943240">is</span> <span
  m="1943340">not</span> <span m="1943497">0.</span> <span
  m="1944850">They</span> <span m="1945040">all</span> <span
  m="1945310">have</span> <span m="1945440">to</span> <span
  m="1945510">be</span> <span m="1945640">identically</span> <span
  m="1946080">0.</span> <span m="1946550">That's</span> <span
  m="1946770">all</span> <span m="1946950">it</span> <span
  m="1947040">means.</span> <span m="1947700">D</span> <span
  m="1947870">not</span> <span m="1948010">equal</span> <span
  m="1948220">to</span> <span m="1948300">0</span> <span
  m="1948590">means</span> <span m="1948820">one</span> <span
  m="1949070">entry</span> <span m="1949660">at</span> <span
  m="1949770">least</span> <span m="1950470">is</span> <span
  m="1950640">not</span> <span m="1950830">0.</span></p><p>&nbsp;</p><p><span
  m="1954190">So</span> <span m="1954360">now</span> <span
  m="1954520">what</span> <span m="1954660">we</span> <span
  m="1954760">need</span> <span m="1954920">to</span> <span
  m="1955030">do</span> <span m="1955230">is</span> <span m="1955400">we</span>
  <span m="1955570">need</span> <span m="1955740">to</span> <span
  m="1955910">show</span> <span m="1958860">that</span> <span
  m="1963050">there</span> <span m="1963290">are</span> <span
  m="1963320">many</span> <span m="1964660">r--</span> <span
  m="1966860">it's</span> <span m="1967060">a</span> <span
  m="1967100">binary</span> <span m="1967550">vector</span> <span
  m="1968580">of</span> <span m="1969160">length</span> <span
  m="1969500">n,</span> <span m="1970710">and</span> <span
  m="1970990">you</span> <span m="1971080">can</span> <span
  m="1971180">obviously</span> <span m="1972410">think</span> <span
  m="1972580">about</span> <span m="1972860">two</span> <span
  m="1972970">ways</span> <span m="1973210">to</span> <span m="1973330">n</span>
  <span m="1973700">possibilities</span> <span m="1974480">with</span> <span
  m="1974630">respect</span> <span m="1974990">to</span> <span
  m="1975070">r.</span> <span m="1976060">And</span> <span
  m="1976630">what</span> <span m="1976830">we</span> <span
  m="1976980">really</span> <span m="1977120">want</span> <span
  m="1977270">to</span> <span m="1977320">show</span> <span
  m="1977690">is</span> <span m="1977810">that</span> <span
  m="1978670">there's</span> <span m="1978870">a</span> <span
  m="1978950">large</span> <span m="1979450">fraction--</span> <span
  m="1979960">more</span> <span m="1980180">than</span> <span
  m="1980320">half</span> <span m="1980860">of</span> <span
  m="1981010">the</span> <span m="1981110">r's</span> <span
  m="1982120">are</span> <span m="1982270">going</span> <span
  m="1982490">to</span> <span m="1982570">actually</span> <span
  m="1983040">discover</span> <span m="1984600">that</span> <span
  m="1985470">the</span> <span m="1985530">matrices</span> <span
  m="1987220">were</span> <span m="1988410">multiplied</span> <span
  m="1988910">incorrectly.</span> <span m="1990010">OK.</span></p><p><span
  m="1990670">So</span> <span m="1991880">we</span> <span
  m="1992000">want</span> <span m="1992110">to</span> <span
  m="1992150">show</span> <span m="1992310">that</span> <span
  m="1992470">there</span> <span m="1992535">are</span> <span
  m="1992600">many</span> <span m="1992930">r's</span> <span
  m="1995130">such</span> <span m="1995390">that</span> <span
  m="1995610">Dr</span> <span m="1996010">is</span> <span m="1996120">not</span>
  <span m="1996290">equal</span> <span m="1996520">to</span> <span
  m="1996580">0.</span></p><p>&nbsp;</p><p><span m="2002230">And</span> <span
  m="2002480">because</span> <span m="2002700">if</span> <span
  m="2002830">Dr</span> <span m="2003150">is</span> <span m="2003230">not</span>
  <span m="2003390">equal</span> <span m="2003560">to</span> <span
  m="2003600">0,</span> <span m="2004520">then</span> <span
  m="2005170">you're</span> <span m="2005350">obviously</span> <span
  m="2005650">going</span> <span m="2005830">to</span> <span
  m="2005910">discover</span> <span m="2006360">that</span> <span
  m="2007090">ABr</span> <span m="2008580">is</span> <span
  m="2008800">not</span> <span m="2008980">equal</span> <span
  m="2009180">to</span> <span m="2009270">Cr.</span> <span m="2010350">So</span>
  <span m="2010415">if</span> <span m="2010480">ABr</span> <span
  m="2010910">is</span> <span m="2011010">not</span> <span
  m="2011170">equal</span> <span m="2011340">to</span> <span
  m="2011410">Cr,</span> <span m="2012100">that's</span> <span
  m="2012290">identical</span> <span m="2012810">to</span> <span
  m="2012890">saying</span> <span m="2013170">the</span> <span
  m="2013280">Dr</span> <span m="2013900">is</span> <span m="2014010">not</span>
  <span m="2014170">equal</span> <span m="2014360">to</span> <span
  m="2014420">0.</span> <span m="2015440">That</span> <span
  m="2015490">make</span> <span m="2015660">sense?</span></p><p><span
  m="2018110">So</span> <span m="2020800">specifically,</span> <span
  m="2022740">if</span> <span m="2022950">you</span> <span
  m="2023020">look</span> <span m="2023160">at</span> <span
  m="2023290">the</span> <span m="2023430">claim</span> <span
  m="2024830">and</span> <span m="2025330">writing</span> <span
  m="2025720">it</span> <span m="2025820">in</span> <span
  m="2025920">terms</span> <span m="2026140">of</span> <span
  m="2026250">Dr,</span> <span m="2027310">you</span> <span
  m="2027420">want</span> <span m="2027520">to</span> <span
  m="2027590">say</span> <span m="2027780">that</span> <span
  m="2027970">the</span> <span m="2028070">probability</span> <span
  m="2030300">of</span> <span m="2030470">Dr</span> <span m="2031710">not</span>
  <span m="2031940">equal</span> <span m="2032170">to</span> <span
  m="2032240">0</span> <span m="2033740">is</span> <span
  m="2033930">greater</span> <span m="2034140">than</span> <span
  m="2034250">or</span> <span m="2034340">equal</span> <span
  m="2034570">to</span> <span m="2034650">half</span> <span
  m="2036590">for</span> <span m="2037250">a</span> <span
  m="2037300">randomly</span> <span m="2037770">chosen</span> <span
  m="2038160">r.</span></p><p>&nbsp;</p><p><span m="2050440">And</span> <span
  m="2050570">so</span> <span m="2050659">that's</span> <span
  m="2051022">it.</span> <span m="2051385">That's</span> <span
  m="2051750">the</span> <span m="2051860">setup</span> <span
  m="2053010">that</span> <span m="2053620">we</span> <span
  m="2053830">have</span> <span m="2054080">to</span> <span
  m="2054199">show.</span> <span m="2054550">We</span> <span
  m="2054639">have</span> <span m="2054750">to</span> <span
  m="2054810">do</span> <span m="2054949">a counting</span> <span
  m="2055510">argument</span> <span m="2056400">corresponding</span> <span
  m="2056900">to</span> <span m="2057610">these</span> <span
  m="2057920">r</span> <span m="2058199">vectors</span> <span
  m="2059020">that</span> <span m="2059139">are</span> <span
  m="2059199">being</span> <span m="2059389">generated</span> <span
  m="2059860">randomly.</span> <span m="2061060">So</span> <span
  m="2061210">let's</span> <span m="2061380">do</span> <span
  m="2061500">that.</span></p><p>&nbsp;</p><p><span m="2074670">So</span> <span
  m="2074850">the</span> <span m="2074980">general</span> <span
  m="2075280">argument</span> <span m="2075690">we're</span> <span
  m="2075780">going</span> <span m="2075920">to</span> <span
  m="2075980">make</span> <span m="2076250">here</span> <span
  m="2077190">is</span> <span m="2077370">simply</span> <span
  m="2077770">that</span> <span m="2077960">we're</span> <span
  m="2078090">going</span> <span m="2078300">to--</span> <span
  m="2079949">roughly</span> <span m="2080250">speaking--</span> <span
  m="2081530">if</span> <span m="2081570">you're</span> <span
  m="2081650">going</span> <span m="2081730">to</span> <span
  m="2081810">look</span> <span m="2081960">at</span> <span m="2082030">a</span>
  <span m="2082070">bad</span> <span m="2082600">r--</span> <span
  m="2083790">what's</span> <span m="2084030">a</span> <span
  m="2084080">bad</span> <span m="2084630">r?</span> <span
  m="2085510">And</span> <span m="2085699">bad</span> <span m="2086040">r</span>
  <span m="2086840">is</span> <span m="2087020">something</span> <span
  m="2087489">that</span> <span m="2087949">doesn't</span> <span
  m="2088500">discover</span> <span m="2090020">the</span> <span
  m="2090199">incorrect</span> <span m="2091190">multiplication.</span> <span
  m="2092940">That's</span> <span m="2093100">what</span> <span
  m="2093230">a</span> <span m="2093270">bad</span> <span m="2093570">r</span>
  <span m="2093909">is.</span></p><p><span m="2094630">So</span> <span
  m="2096650">you're</span> <span m="2096960">D</span> <span
  m="2097500">is</span> <span m="2097900">not</span> <span
  m="2098170">equal</span> <span m="2098430">to</span> <span
  m="2098510">0,</span> <span m="2099790">but</span> <span m="2100080">Dr</span>
  <span m="2100640">equals</span> <span m="2101000">0.</span> <span
  m="2102160">OK.</span> <span m="2102950">That's</span> <span
  m="2103210">a</span> <span m="2103270">bad</span> <span m="2103720">r,</span>
  <span m="2104860">right?</span> <span m="2105560">It's</span> <span
  m="2105980">quite</span> <span m="2106180">possible</span> <span
  m="2106550">that</span> <span m="2106705">that</span> <span
  m="2106860">would</span> <span m="2106980">be</span> <span
  m="2107070">the</span> <span m="2107160">case.</span> <span
  m="2108370">And</span> <span m="2108630">so</span> <span
  m="2110200">you</span> <span m="2111140">want</span> <span
  m="2111390">to</span> <span m="2112080">try</span> <span
  m="2112350">and</span> <span m="2112500">figure</span> <span
  m="2112790">out</span> <span m="2113410">how</span> <span
  m="2113540">many</span> <span m="2113750">of</span> <span
  m="2113810">these</span> <span m="2114010">bad</span> <span
  m="2114430">r</span> <span m="2114820">are</span> <span
  m="2114950">there</span> <span m="2115190">because</span> <span
  m="2115430">those</span> <span m="2115630">are</span> <span
  m="2115670">the</span> <span m="2115770">ones</span> <span
  m="2116500">that</span> <span m="2116630">are</span> <span
  m="2116680">causing</span> <span m="2118130">the</span> <span
  m="2118270">false</span> <span m="2121360">negatives.</span> <span
  m="2122550">Right?</span> <span m="2123680">So</span> <span
  m="2125850">that</span> <span m="2126250">counting</span> <span
  m="2126630">argument</span> <span m="2127040">is</span> <span
  m="2127230">the</span> <span m="2127340">crux</span> <span
  m="2129060">of</span> <span m="2129180">the</span> <span
  m="2129270">proof</span> <span m="2129490">of</span> <span
  m="2129580">the</span> <span m="2129660">claim.</span></p><p><span
  m="2130920">So</span> <span m="2131120">let's</span> <span
  m="2131760">look</span> <span m="2131900">at</span> <span
  m="2131960">that.</span> <span m="2132740">And</span> <span
  m="2133250">what</span> <span m="2133470">we're</span> <span
  m="2133540">going</span> <span m="2133650">to</span> <span
  m="2133700">do</span> <span m="2133820">is,</span> <span
  m="2133940">we're</span> <span m="2134000">going</span> <span
  m="2134120">to</span> <span m="2134200">pick</span> <span m="2134450">a</span>
  <span m="2134500">bad</span> <span m="2134780">r,</span> <span
  m="2135390">and</span> <span m="2135640">we're</span> <span
  m="2135710">going</span> <span m="2135810">to</span> <span
  m="2135860">say</span> <span m="2136710">I</span> <span
  m="2136860">there</span> <span m="2136995">are</span> <span
  m="2137130">these</span> <span m="2137880">good</span> <span
  m="2138140">r's</span> <span m="2139040">that</span> <span
  m="2139170">are</span> <span m="2139290">associated</span> <span
  m="2139800">with</span> <span m="2139950">this</span> <span
  m="2140100">bad</span> <span m="2140390">r.</span> <span
  m="2141200">And</span> <span m="2141370">for</span> <span
  m="2141490">every</span> <span m="2141770">bad</span> <span
  m="2142040">r,</span> <span m="2142820">there's</span> <span
  m="2142900">a</span> <span m="2142980">good</span> <span m="2143122">r.</span>
  <span m="2144550">And</span> <span m="2144680">a</span> <span
  m="2144730">good</span> <span m="2144930">r</span> <span m="2145270">is</span>
  <span m="2145370">something</span> <span m="2145680">that</span> <span
  m="2145800">actually</span> <span m="2146030">discovers</span> <span
  m="2146540">the</span> <span m="2147040">incorrect</span> <span
  m="2147440">multiply.</span></p><p><span m="2148720">And</span> <span
  m="2149370">given</span> <span m="2149570">that</span> <span
  m="2150080">for</span> <span m="2150330">every</span> <span
  m="2150610">bad</span> <span m="2150860">r</span> <span
  m="2151130">there's</span> <span m="2151260">a</span> <span
  m="2151310">good</span> <span m="2151530">r,</span> <span
  m="2152630">half</span> <span m="2152860">of</span> <span
  m="2152960">the</span> <span m="2153030">arts</span> <span
  m="2153870">are</span> <span m="2154020">good</span> <span
  m="2154210">r.</span> <span m="2155810">That's</span> <span
  m="2155990">it.</span> <span m="2156640">So</span> <span
  m="2156790">I'll</span> <span m="2156920">write</span> <span
  m="2157080">it</span> <span m="2157210">down.</span> <span
  m="2157890">That's</span> <span m="2158170">the</span> <span
  m="2158250">essence</span> <span m="2158590">of</span> <span
  m="2158680">the</span> <span m="2158750">argument.</span> <span
  m="2160180">And</span> <span m="2160450">I'm</span> <span
  m="2160570">go</span> <span m="2160625">a</span> <span
  m="2160680">little</span> <span m="2160830">more</span> <span
  m="2160980">slowly</span> <span m="2161500">so</span> <span
  m="2161590">hopefully</span> <span m="2162550">you'll</span> <span
  m="2162710">get</span> <span m="2162910">that.</span></p><p><span
  m="2164480">So</span> <span m="2164850">let's</span> <span
  m="2165120">look</span> <span m="2165240">at</span> <span
  m="2165290">the</span> <span m="2165360">case</span> <span
  m="2165630">where</span> <span m="2165770">Dr</span> <span
  m="2166370">equals</span> <span m="2166700">0</span> <span
  m="2167020">case</span> <span m="2167970">because</span> <span
  m="2168220">that's</span> <span m="2168440">the</span> <span
  m="2168510">interesting</span> <span m="2169030">case.</span> <span
  m="2170290">That's</span> <span m="2170490">the</span> <span
  m="2170580">case</span> <span m="2170890">where</span> <span
  m="2171300">the</span> <span m="2171610">r</span> <span m="2171870">is</span>
  <span m="2172030">bad</span> <span m="2172550">even</span> <span
  m="2172810">though</span> <span m="2173170">we</span> <span
  m="2173310">had</span> <span m="2173470">an</span> <span
  m="2173570">incorrect</span> <span m="2173950">multiply,</span> <span
  m="2174870">and</span> <span m="2175040">you</span> <span
  m="2175140">get</span> <span m="2175360">this--</span> <span
  m="2179010">I</span> <span m="2179090">should</span> <span
  m="2179280">have</span> <span m="2179345">said</span> <span
  m="2180830">you</span> <span m="2181090">get</span> <span m="2181180">a</span>
  <span m="2181230">false</span> <span m="2181580">positive.</span> <span
  m="2182510">So</span> <span m="2182640">I'm</span> <span
  m="2182770">sorry.</span> <span m="2183040">I</span> <span
  m="2183140">think</span> <span m="2183620">just</span> <span
  m="2183880">before,</span> <span m="2184860">I</span> <span
  m="2184980">said</span> <span m="2185180">false</span> <span
  m="2185480">negative,</span> <span m="2185880">but</span> <span
  m="2186030">I</span> <span m="2186070">meant</span> <span
  m="2186290">false</span> <span m="2186650">positive.</span></p><p><span
  m="2187990">So</span> <span m="2188740">you</span> <span
  m="2188830">have</span> <span m="2188980">a</span> <span
  m="2189030">false</span> <span m="2189420">positive</span> <span
  m="2189900">in</span> <span m="2190000">this</span> <span
  m="2190200">case,</span> <span m="2191630">and</span> <span
  m="2193020">D</span> <span m="2193390">equals</span> <span
  m="2194340">AB</span> <span m="2195600">minus</span> <span
  m="2196000">C</span> <span m="2196290">not</span> <span
  m="2196540">equal</span> <span m="2196790">to</span> <span
  m="2196860">0</span> <span m="2198100">implies</span> <span
  m="2198730">there</span> <span m="2198940">exists</span> <span
  m="2199710">an</span> <span m="2199960">i</span> <span m="2200295">and</span>
  <span m="2200630">j</span> <span m="2201700">such</span> <span
  m="2201960">that</span> <span m="2202910">Dij</span> <span
  m="2203960">is</span> <span m="2204110">not</span> <span
  m="2204350">equal</span> <span m="2204610">to</span> <span
  m="2204680">0.</span> <span m="2205780">OK?</span> <span
  m="2207370">And</span> <span m="2208030">there's</span> <span
  m="2208260">just</span> <span m="2208370">one</span> <span
  m="2208610">entry</span> <span m="2209070">at</span> <span
  m="2209170">least--</span> <span m="2209880">if</span> <span
  m="2210130">you</span> <span m="2210250">say</span> <span
  m="2210470">the</span> <span m="2210600">matrix</span> <span
  m="2211070">is</span> <span m="2211200">not</span> <span
  m="2211350">equal</span> <span m="2211530">to</span> <span
  m="2211570">0,</span> <span m="2211940">there's</span> <span
  m="2212110">got</span> <span m="2212220">to</span> <span m="2212260">be</span>
  <span m="2212360">an</span> <span m="2212430">entry</span> <span
  m="2212770">that's</span> <span m="2213400">not</span> <span
  m="2213590">equal</span> <span m="2213800">to</span> <span
  m="2213850">0.</span></p><p><span m="2214590">So</span> <span
  m="2214740">let's</span> <span m="2215000">take</span> <span
  m="2215160">a</span> <span m="2215220">look</span> <span m="2215400">at</span>
  <span m="2215460">that</span> <span m="2215840">entry,</span> <span
  m="2216730">and</span> <span m="2216920">let's</span> <span
  m="2217070">just</span> <span m="2217290">draw</span> <span
  m="2217540">it</span> <span m="2217640">out.</span> <span
  m="2218670">That's</span> <span m="2218930">my</span> <span
  m="2219110">D</span> <span m="2219420">matrix.</span> <span
  m="2221250">And</span> <span m="2221660">there's</span> <span
  m="2221880">going</span> <span m="2222010">to</span> <span
  m="2222060">be</span> <span m="2223420">an</span> <span m="2223650">i</span>
  <span m="2224640">and</span> <span m="2224830">a</span> <span
  m="2224920">j.</span> <span m="2227220">So</span> <span
  m="2227520">that's</span> <span m="2227730">my</span> <span
  m="2229010">ith</span> <span m="2229320">row</span> <span
  m="2229770">and</span> <span m="2229890">my</span> <span
  m="2230030">jth</span> <span m="2230440">column.</span> <span
  m="2231430">And</span> <span m="2231650">there</span> <span
  m="2231760">you</span> <span m="2231890">go.</span> <span m="2232220">I</span>
  <span m="2232400">have</span> <span m="2232900">an</span> <span
  m="2233050">entry</span> <span m="2233410">here</span> <span
  m="2234360">which</span> <span m="2234550">is</span> <span
  m="2234720">Dij,</span> <span m="2236370">and</span> <span
  m="2237590">I'm</span> <span m="2237720">just</span> <span
  m="2237910">picking</span> <span m="2238180">that.</span> <span
  m="2238610">I</span> <span m="2238720">don't</span> <span
  m="2238870">care</span> <span m="2239030">what</span> <span
  m="2239180">i</span> <span m="2239260">and</span> <span m="2239340">j</span>
  <span m="2239670">are,</span> <span m="2240280">but</span> <span
  m="2240610">there's</span> <span m="2240770">got</span> <span
  m="2240890">to</span> <span m="2240930">be</span> <span m="2241040">an</span>
  <span m="2241110">entry</span> <span m="2241400">that's</span> <span
  m="2241580">not</span> <span m="2241730">equal</span> <span
  m="2241910">to</span> <span m="2241970">0.</span></p><p><span
  m="2243460">Now</span> <span m="2243780">I'm</span> <span
  m="2243910">going</span> <span m="2244160">to</span> <span
  m="2244570">create</span> <span m="2244990">a</span> <span
  m="2245030">vector,</span> <span m="2246980">v.</span> <span
  m="2249210">So</span> <span m="2249320">this</span> <span
  m="2249500">vector</span> <span m="2250380">is</span> <span
  m="2250550">not</span> <span m="2250760">r.</span> <span
  m="2251270">It's</span> <span m="2251380">a</span> <span
  m="2251420">vector</span> <span m="2251750">v</span> <span
  m="2252490">that</span> <span m="2252670">is</span> <span
  m="2252910">chosen</span> <span m="2254510">deterministically</span> <span
  m="2255350">given</span> <span m="2256100">the</span> <span
  m="2256260">Dij</span> <span m="2257460">where</span> <span
  m="2257780">it's</span> <span m="2257890">got</span> <span
  m="2258070">0's</span> <span m="2258620">everywhere</span> <span
  m="2262330">except</span> <span m="2262780">it</span> <span
  m="2263000">at</span> <span m="2263210">vj.</span></p><p><span
  m="2265430">So</span> <span m="2265665">if</span> <span
  m="2265900">this</span> <span m="2267760">the</span> <span
  m="2267870">jth</span> <span m="2268910">entry</span> <span
  m="2269570">column-wise,</span> <span m="2270420">everywhere</span> <span
  m="2270820">else</span> <span m="2271950">you</span> <span
  m="2272070">got</span> <span m="2272240">0.</span> <span
  m="2275590">And</span> <span m="2275750">you</span> <span
  m="2275840">just</span> <span m="2276000">got</span> <span
  m="2276170">the</span> <span m="2276250">one</span> <span
  m="2277500">associated</span> <span m="2278050">with</span> <span
  m="2278320">the--</span> <span m="2281740">going</span> <span
  m="2281970">downward--</span> <span m="2282550">the</span> <span
  m="2283270">jth</span> <span m="2283540">entry.</span> <span
  m="2284520">OK?</span> <span m="2284770">So</span> <span
  m="2284900">it's</span> <span m="2285040">a</span> <span
  m="2285130">one</span> <span m="2285380">one-hot</span> <span
  m="2285690">vector,</span> <span m="2286110">if</span> <span
  m="2286260">you</span> <span m="2286380">will.</span> <span
  m="2286730">It's</span> <span m="2287070">got</span> <span
  m="2287300">one,</span> <span m="2287540">one.</span></p><p><span
  m="2288550">So</span> <span m="2288730">now,</span> <span
  m="2288830">if</span> <span m="2288930">you</span> <span
  m="2289100">multiply</span> <span m="2289520">these</span> <span
  m="2289730">two</span> <span m="2289870">things</span> <span
  m="2290150">out,</span> <span m="2291860">you</span> <span
  m="2292115">know</span> <span m="2292242">that</span> <span
  m="2292370">you're</span> <span m="2292510">going</span> <span
  m="2292640">to</span> <span m="2292700">get</span> <span
  m="2292970">something,</span> <span m="2293400">and</span> <span
  m="2293520">we're</span> <span m="2293555">going</span> <span
  m="2293572">to</span> <span m="2293590">can</span> <span
  m="2293720">call</span> <span m="2294040">this</span> <span
  m="2295420">Dv.</span> <span m="2297520">So</span> <span
  m="2297680">you</span> <span m="2297840">take</span> <span
  m="2298070">D</span> <span m="2298193">and</span> <span m="2298316">you</span>
  <span m="2298440">multiply</span> <span m="2298670">it</span> <span
  m="2298900">by</span> <span m="2299170">v--</span> <span
  m="2300440">matrix</span> <span m="2301370">multiplied</span> <span
  m="2301860">by</span> <span m="2302060">a</span> <span
  m="2302370">vector.</span></p><p><span m="2304160">You're</span> <span
  m="2304650">guaranteed,</span> <span m="2305860">given</span> <span
  m="2306100">that</span> <span m="2306220">all</span> <span
  m="2306430">of</span> <span m="2306520">these</span> <span
  m="2306750">are</span> <span m="2306830">0,</span> <span
  m="2307390">when</span> <span m="2307520">I</span> <span m="2307570">do</span>
  <span m="2307820">my</span> <span m="2308450">this</span> <span
  m="2308720">times</span> <span m="2309040">that</span> <span
  m="2309640">plus</span> <span m="2309780">this</span> <span
  m="2310020">times</span> <span m="2310330">this</span> <span
  m="2310670">plus</span> <span m="2310870">this</span> <span
  m="2311090">times</span> <span m="2311390">this,</span> <span
  m="2312110">all</span> <span m="2312420">of</span> <span
  m="2312520">these</span> <span m="2312710">are</span> <span
  m="2312760">going</span> <span m="2312860">to</span> <span
  m="2312910">produce</span> <span m="2313190">0.</span> <span
  m="2313920">This</span> <span m="2314130">times</span> <span
  m="2314450">1</span> <span m="2315330">is</span> <span
  m="2315470">going</span> <span m="2315580">to</span> <span
  m="2315620">produce</span> <span m="2315890">something</span> <span
  m="2316160">that's</span> <span m="2316340">non-zero,</span> <span
  m="2317410">and</span> <span m="2317580">then</span> <span
  m="2317600">all</span> <span m="2317666">of</span> <span
  m="2317733">the</span> <span m="2317800">other</span> <span
  m="2318030">ones</span> <span m="2318230">are</span> <span
  m="2318305">going</span> <span m="2318380">to</span> <span
  m="2318430">produce</span> <span m="2318630">0.</span> <span
  m="2319810">So</span> <span m="2319930">I'm</span> <span
  m="2320020">just</span> <span m="2320190">adding</span> <span
  m="2320450">a</span> <span m="2320500">bunch</span> <span
  m="2320710">of</span> <span m="2320770">0's</span> <span m="2321700">to</span>
  <span m="2321810">this</span> <span m="2322220">non-zero</span> <span
  m="2323020">multiplied</span> <span m="2323540">by</span> <span
  m="2323670">one.</span> <span m="2324770">So</span> <span
  m="2325260">I'm</span> <span m="2325390">going</span> <span
  m="2325510">to</span> <span m="2325550">get</span> <span
  m="2325750">something</span> <span m="2326050">that's</span> <span
  m="2326220">non-zero.</span> <span m="2327420">Right?</span> <span
  m="2328350">All</span> <span m="2328470">make</span> <span
  m="2328630">sense?</span></p><p><span m="2330790">So</span> <span
  m="2331270">I'm</span> <span m="2331400">going</span> <span
  m="2331500">to</span> <span m="2331570">see</span> <span
  m="2331790">something</span> <span m="2332080">here,</span> <span
  m="2332620">which</span> <span m="2332790">is</span> <span
  m="2332900">the</span> <span m="2333000">jth</span> <span
  m="2333300">entry</span> <span m="2334920">that's</span> <span
  m="2335110">not</span> <span m="2335300">equal</span> <span
  m="2335510">0.</span> <span m="2337590">And</span> <span m="2337790">so</span>
  <span m="2338110">that</span> <span m="2338170">implies</span> <span
  m="2338670">that</span> <span m="2339080">Dv</span> <span
  m="2339760">is</span> <span m="2339890">not</span> <span
  m="2340010">equal</span> <span m="2340175">to</span> <span
  m="2340340">0.</span> <span m="2340910">And</span> <span m="2341080">in</span>
  <span m="2341170">particular,</span> <span m="2342340">what</span> <span
  m="2342480">I'm</span> <span m="2342580">saying</span> <span
  m="2342920">is</span> <span m="2344240">Dv</span> <span m="2344667">of</span>
  <span m="2345094">j--</span> <span m="2346450">so</span> <span
  m="2346610">if</span> <span m="2346650">I</span> <span m="2346690">just</span>
  <span m="2346870">look</span> <span m="2347000">at</span> <span
  m="2347070">that</span> <span m="2347250">entry</span> <span
  m="2347950">that</span> <span m="2348110">is</span> <span
  m="2348500">identically</span> <span m="2350070">Dij,</span> <span
  m="2351690">which</span> <span m="2351840">is</span> <span
  m="2351950">not</span> <span m="2352110">equal</span> <span
  m="2352330">to</span> <span m="2352390">0.</span> <span
  m="2354100">Because</span> <span m="2354310">I'm</span> <span
  m="2354400">multiplying</span> <span m="2354640">it</span> <span
  m="2354880">by</span> <span m="2354990">1</span> <span m="2355780">and</span>
  <span m="2355890">I'm</span> <span m="2355970">adding</span> <span
  m="2356170">a</span> <span m="2356220">bunch</span> <span
  m="2356430">of</span> <span m="2356470">0's</span> <span m="2356830">to</span>
  <span m="2356930">it.</span> <span m="2357700">That's</span> <span
  m="2357890">it.</span> <span m="2358880">OK.</span></p><p><span
  m="2360100">Yeah.</span> <span m="2360200">A</span> <span
  m="2360430">question.</span></p><p><span m="2361210">AUDIENCE: Is</span> <span
  m="2361405">it</span> <span m="2361600">Dv</span> <span m="2361837">of</span>
  <span m="2362075">j</span> <span m="2362550">or</span> <span
  m="2362787">of</span> <span m="2363025">i?</span></p><p><span
  m="2364450">SRINIVAS DEVADAS: So</span> <span m="2364700">I</span> <span
  m="2364840">picked</span> <span m="2365080">the</span> <span
  m="2365190">j</span> <span m="2365490">here.</span> <span
  m="2365930">So</span> <span m="2367400">I</span> <span
  m="2367530">think</span> <span m="2367660">I'm</span> <span
  m="2367760">going</span> <span m="2367960">j,</span> <span
  m="2368340">j,</span> <span m="2368720">right?</span> <span
  m="2370910">That</span> <span m="2371030">make</span> <span
  m="2371180">sense?</span></p><p>&nbsp;</p><p><span m="2373910">If</span> <span
  m="2373990">j</span> <span m="2374310">was</span> <span m="2374370">7</span>
  <span m="2375490">and</span> <span m="2375840">this</span> <span
  m="2375970">is</span> <span m="2376090">7</span> <span
  m="2376410">down,</span> <span m="2376760">then</span> <span
  m="2377330">it</span> <span m="2377440">would</span> <span
  m="2377550">be</span> <span m="2377680">the</span> <span
  m="2379580">seventh</span> <span m="2379890">[INAUDIBLE]</span> <span
  m="2380580">because</span> <span m="2380770">this</span> <span
  m="2381130">is</span> <span m="2381300">going</span> <span
  m="2381410">to</span> <span m="2381470">turn</span> <span
  m="2381700">into</span> <span m="2381760">that.</span> <span
  m="2384220">OK?</span></p><p><span m="2387112">Now,</span> <span
  m="2387550">either</span> <span m="2387770">way,</span> <span
  m="2388140">if</span> <span m="2388300">I</span> <span
  m="2388740">picked</span> <span m="2388950">it</span> <span
  m="2389270">in</span> <span m="2389330">the</span> <span
  m="2389390">middle,</span> <span m="2390610">it</span> <span
  m="2390940">doesn't</span> <span m="2391130">really</span> <span
  m="2391260">matter.</span> <span m="2392070">The</span> <span
  m="2392150">point</span> <span m="2392380">is</span> <span
  m="2392500">there's</span> <span m="2392590">going</span> <span
  m="2392680">to</span> <span m="2392765">be</span> <span m="2392850">one</span>
  <span m="2393090">entry.</span> <span m="2393770">So</span> <span
  m="2393930">hang</span> <span m="2394130">in</span> <span
  m="2394220">there.</span> <span m="2394340">There's</span> <span
  m="2394412">going</span> <span m="2394485">to</span> <span
  m="2394557">be</span> <span m="2394630">one</span> <span
  m="2394830">entry</span> <span m="2395090">that's</span> <span
  m="2395270">nonzero</span> <span m="2396790">if</span> <span
  m="2396890">you</span> <span m="2396960">didn't</span> <span
  m="2397090">quite</span> <span m="2397270">get</span> <span
  m="2397450">that.</span></p><p>&nbsp;</p><p><span m="2398750">So</span> <span
  m="2398820">Dij</span> <span m="2399360">is</span> <span
  m="2399550">not</span> <span m="2399750">0.</span> <span
  m="2400610">And</span> <span m="2401000">this</span> <span
  m="2401200">is</span> <span m="2401310">one</span> <span
  m="2401590">more</span> <span m="2402550">observation</span> <span
  m="2403150">we're</span> <span m="2403240">going</span> <span
  m="2403390">to</span> <span m="2403460">make</span> <span
  m="2403800">in</span> <span m="2403970">order</span> <span
  m="2404090">to</span> <span m="2404200">do</span> <span m="2404370">the</span>
  <span m="2404970">counting</span> <span m="2405460">of</span> <span
  m="2405600">these</span> <span m="2405880">bad</span> <span
  m="2406890">r's</span> <span m="2407950">because</span> <span
  m="2408110">this</span> <span m="2408740">is</span> <span m="2408810">a</span>
  <span m="2408870">bad</span> <span m="2409190">r</span> <span
  m="2409500">that</span> <span m="2409630">we're</span> <span
  m="2409800">looking</span> <span m="2410100">at</span> <span
  m="2410720">if</span> <span m="2410870">you</span> <span
  m="2410980">say</span> <span m="2411210">that</span> <span
  m="2411370">Dr</span> <span m="2412100">equals</span> <span
  m="2412490">0.</span> <span m="2414520">You've</span> <span
  m="2414720">created</span> <span m="2415070">a</span> <span
  m="2415120">v</span> <span m="2415550">that</span> <span
  m="2415660">has</span> <span m="2415820">nothing</span> <span
  m="2416170">to</span> <span m="2416260">do</span> <span
  m="2416410">with</span> <span m="2416570">r,</span> <span
  m="2417790">but</span> <span m="2418390">we're</span> <span
  m="2418550">going</span> <span m="2418750">to</span> <span
  m="2418800">use</span> <span m="2419100">the</span> <span m="2419200">v</span>
  <span m="2419890">to</span> <span m="2420230">go</span> <span
  m="2420470">from</span> <span m="2420690">a</span> <span
  m="2420760">bad</span> <span m="2421150">r,</span> <span
  m="2422220">which</span> <span m="2422430">is</span> <span
  m="2422560">our</span> <span m="2422710">example</span> <span
  m="2423150">here,</span> <span m="2423940">to</span> <span
  m="2424060">a</span> <span m="2424110">good</span> <span
  m="2424290">one.</span> <span m="2425320">That's</span> <span
  m="2425600">pretty</span> <span m="2425750">much</span> <span
  m="2425940">it.</span> <span m="2427440">That's</span> <span
  m="2427590">the</span> <span m="2427720">last</span> <span
  m="2428080">step</span> <span m="2428450">here.</span></p><p><span
  m="2429600">So</span> <span m="2429760">what</span> <span
  m="2429910">we're</span> <span m="2430000">going</span> <span
  m="2430120">to</span> <span m="2430180">do,</span> <span m="2430350">is</span>
  <span m="2430480">we're</span> <span m="2430570">going</span> <span
  m="2430680">to</span> <span m="2430800">take</span> <span
  m="2432550">any</span> <span m="2433340">r</span> <span
  m="2435660">that</span> <span m="2435920">can</span> <span
  m="2436100">be</span> <span m="2436220">chosen</span> <span
  m="2440910">by</span> <span m="2441210">our</span> <span
  m="2441440">algorithm</span> <span m="2445230">such</span> <span
  m="2445570">that</span> <span m="2446330">Dr</span> <span
  m="2446710">equals</span> <span m="2446980">0</span> <span
  m="2447380">because</span> <span m="2447620">that's</span> <span
  m="2447790">the</span> <span m="2447880">case</span> <span
  m="2448190">that</span> <span m="2448740">we're</span> <span
  m="2448870">looking</span> <span m="2449160">at.</span> <span
  m="2450110">And</span> <span m="2451470">we're</span> <span
  m="2451630">going</span> <span m="2451820">to</span> <span
  m="2451900">compute</span> <span m="2453180">r</span> <span
  m="2453460">prime,</span> <span m="2454730">which</span> <span
  m="2454870">is</span> <span m="2455430">r</span> <span m="2455890">plus</span>
  <span m="2456210">v.</span></p><p><span m="2459720">And</span> <span
  m="2459850">just</span> <span m="2460000">remember</span> <span
  m="2460320">this</span> <span m="2460570">is</span> <span
  m="2460790">mod</span> <span m="2460870">2</span> <span
  m="2460950">arithmetic.</span> <span m="2462060">You're</span> <span
  m="2462480">only</span> <span m="2462660">going</span> <span
  m="2462760">to</span> <span m="2462800">get</span> <span
  m="2462940">0's</span> <span m="2463230">and</span> <span
  m="2463320">1's.</span> <span m="2463870">So</span> <span
  m="2464180">if</span> <span m="2464225">you</span> <span
  m="2464270">have</span> <span m="2464400">1</span> <span
  m="2464530">plus</span> <span m="2464690">1,</span> <span
  m="2464950">it</span> <span m="2465020">gives</span> <span
  m="2465180">you</span> <span m="2465250">0.</span> <span
  m="2466204">Obviously</span> <span m="2466681">0</span> <span
  m="2466840">plus</span> <span m="2467000">0</span> <span
  m="2467160">gives</span> <span m="2467340">you</span> <span
  m="2467430">0.</span> <span m="2468310">And</span> <span
  m="2469380">the</span> <span m="2469420">other</span> <span
  m="2469460">cases</span> <span m="2469780">are</span> <span
  m="2469870">clear.</span></p><p><span m="2471260">And</span> <span
  m="2471520">this</span> <span m="2471710">plus</span> <span
  m="2472000">here,</span> <span m="2472330">remember,</span> <span
  m="2472760">is</span> <span m="2472970">also--</span> <span
  m="2473400">the</span> <span m="2473730">other</span> <span
  m="2473940">thing</span> <span m="2474100">that's</span> <span
  m="2474250">important</span> <span m="2474670">is</span> <span
  m="2475310">this</span> <span m="2475510">is</span> <span
  m="2475880">not</span> <span m="2476090">only</span> <span
  m="2476260">mod</span> <span m="2476570">2.</span> <span
  m="2478100">These</span> <span m="2478330">are</span> <span
  m="2478460">all</span> <span m="2478630">vectors.</span> <span
  m="2479730">So</span> <span m="2480540">r</span> <span m="2480730">is</span>
  <span m="2480820">a</span> <span m="2480860">vector,</span> <span
  m="2482190">and</span> <span m="2482420">you</span> <span
  m="2482500">can</span> <span m="2482580">think</span> <span
  m="2482720">of</span> <span m="2482810">it</span> <span m="2482870">as</span>
  <span m="2482960">a</span> <span m="2483010">column</span> <span
  m="2483300">vector.</span> <span m="2484510">That's</span> <span
  m="2484810">how</span> <span m="2484970">I</span> <span
  m="2485070">drew</span> <span m="2485290">it.</span> <span
  m="2486620">You're</span> <span m="2486750">adding</span> <span
  m="2487050">up</span> <span m="2487910">a</span> <span
  m="2488010">column</span> <span m="2488280">vector</span> <span
  m="2488620">with</span> <span m="2488770">a</span> <span m="2488970">v.</span>
  <span m="2489170">That's</span> <span m="2489380">the</span> <span
  m="2489430">column</span> <span m="2489690">vector</span> <span
  m="2490040">the</span> <span m="2490130">way</span> <span m="2490280">I</span>
  <span m="2490340">drew</span> <span m="2490520">that.</span></p><p><span
  m="2491890">You</span> <span m="2492070">could</span> <span
  m="2492190">do</span> <span m="2492340">it</span> <span
  m="2492910">with</span> <span m="2492980">rows</span> <span
  m="2493250">if</span> <span m="2493350">you</span> <span
  m="2493440">like,</span> <span m="2493740">but</span> <span
  m="2494450">it's</span> <span m="2494540">just</span> <span
  m="2494760">notation.</span> <span m="2495740">And</span> <span
  m="2496150">you're</span> <span m="2496280">going</span> <span
  m="2496370">to</span> <span m="2496410">compute</span> <span
  m="2496790">an</span> <span m="2497770">r</span> <span
  m="2498180">prime</span> <span m="2498540">here.</span></p><p><span
  m="2500100">What</span> <span m="2500480">can</span> <span
  m="2500610">you</span> <span m="2500730">say</span> <span
  m="2502330">about</span> <span m="2504550">Dr</span> <span
  m="2505420">prime?</span> <span m="2507560">Someone?</span></p><p><span
  m="2509860">Yeah.</span> <span m="2510150">Go</span> <span
  m="2510250">ahead.</span></p><p><span m="2510940">AUDIENCE: It's</span> <span
  m="2511145">not</span> <span m="2511350">0.</span></p><p><span
  m="2511760">SRINIVAS DEVADAS: It's</span> <span m="2511940">not</span> <span
  m="2512200">0.</span> <span m="2513190">And</span> <span
  m="2514160">I'll</span> <span m="2514610">give</span> <span
  m="2514710">you</span> <span m="2514780">a</span> <span
  m="2514830">Frisbee,</span> <span m="2515690">but</span> <span
  m="2515870">then</span> <span m="2516000">you</span> <span
  m="2516090">can</span> <span m="2516180">explain--</span> <span
  m="2517030">can</span> <span m="2517090">you</span> <span
  m="2517150">stand</span> <span m="2517370">up</span> <span
  m="2517713">a</span> <span m="2518056">little?</span> <span
  m="2518228">I</span> <span m="2518400">don't</span> <span
  m="2518620">want</span> <span m="2518680">to</span> <span
  m="2518740">take</span> <span m="2518800">this</span> <span
  m="2518950">lady's</span> <span m="2519210">head</span> <span
  m="2519360">off.</span></p><p><span m="2521830">So</span> <span
  m="2522010">can</span> <span m="2522060">you</span> <span
  m="2522110">explain</span> <span m="2522470">why?</span></p><p><span
  m="2524100">AUDIENCE: Because</span> <span m="2524600">r</span> <span
  m="2525100">prime is</span> <span m="2525600">r</span> <span m="2526100">plus
  v</span> <span m="2526600">and</span> <span m="2527100">Dr</span> <span
  m="2527600">gives</span> <span m="2527850">you</span> <span
  m="2528100">Dr</span> <span m="2528600">plus</span> <span
  m="2529496">DB</span> <span m="2529944">is</span> <span m="2530168">not</span>
  <span m="2530392">0.</span></p><p><span m="2530616">SRINIVAS DEVADAS:
  Absolutely</span> <span m="2530840">right.</span> <span m="2531140">So</span>
  <span m="2531480">essentially</span> <span m="2531950">what</span> <span
  m="2532070">we</span> <span m="2532170">have</span> <span
  m="2532430">is</span> <span m="2532570">this</span> <span
  m="2532740">is</span> <span m="2532907">simply</span> <span
  m="2535560">Dr</span> <span m="2536050">plus</span> <span
  m="2536410">v.</span> <span m="2540630">0</span> <span m="2541250">plus</span>
  <span m="2541880">Dv,</span> <span m="2543850">not</span> <span
  m="2544120">equal</span> <span m="2544390">to</span> <span
  m="2544450">0.</span> <span m="2546576">Do</span> <span m="2546778">we</span>
  <span m="2546980">like</span> <span m="2547180">yellow</span> <span
  m="2547510">or</span> <span m="2547590">do</span> <span m="2547690">we</span>
  <span m="2547770">like</span> <span m="2547980">white?</span> <span
  m="2550730">Yellow's</span> <span m="2551010">fine.</span></p><p><span
  m="2553240">So</span> <span m="2553340">that's</span> <span
  m="2553530">pretty</span> <span m="2553660">much</span> <span
  m="2553850">it.</span></p><p><span m="2554500">So</span> <span
  m="2554670">what's</span> <span m="2554950">cool</span> <span
  m="2555160">about</span> <span m="2555410">this-</span> <span
  m="2555847">is</span> <span m="2556284">this</span> <span
  m="2557420">final</span> <span m="2557840">step,</span> <span
  m="2558820">which</span> <span m="2558940">I</span> <span
  m="2559000">think</span> <span m="2559180">you've</span> <span
  m="2559570">gotten,</span> <span m="2560090">but</span> <span
  m="2560270">I'm</span> <span m="2560360">just</span> <span
  m="2560500">going</span> <span m="2560600">to</span> <span
  m="2560650">say</span> <span m="2560860">it</span> <span
  m="2560960">out</span> <span m="2561120">loud</span> <span
  m="2561460">now,</span> <span m="2562840">which</span> <span
  m="2563100">is</span> <span m="2563340">that</span> <span m="2565280">r</span>
  <span m="2566130">to</span> <span m="2566300">r</span> <span
  m="2566570">prime</span> <span m="2568980">is</span> <span
  m="2569530">1</span> <span m="2569930">to</span> <span m="2570040">1</span>
  <span m="2572310">for</span> <span m="2573750">any</span> <span
  m="2574910">given</span> <span m="2575210">r</span> <span
  m="2575560">such</span> <span m="2575820">that</span> <span
  m="2576240">Dr</span> <span m="2576455">equals</span> <span
  m="2576670">0,</span> <span m="2578580">given</span> <span
  m="2578910">the</span> <span m="2579020">situation</span> <span
  m="2579580">where</span> <span m="2580070">capital</span> <span
  m="2580450">D</span> <span m="2580630">is</span> <span m="2580720">not</span>
  <span m="2580900">equal</span> <span m="2581110">to</span> <span
  m="2581160">0,</span> <span m="2581570">and</span> <span
  m="2581660">there's</span> <span m="2581980">some</span> <span
  m="2582150">Dij--</span> <span m="2582810">and</span> <span
  m="2583020">there</span> <span m="2583110">could</span> <span
  m="2583230">be</span> <span m="2583320">many</span> <span
  m="2583730">Dij's.</span> <span m="2584470">I</span> <span
  m="2584620">just</span> <span m="2584830">need</span> <span
  m="2585020">one.</span> <span m="2585960">I've</span> <span
  m="2586090">constructed,</span> <span m="2586720">based</span> <span
  m="2586980">on</span> <span m="2587090">that</span> <span
  m="2587250">Dij,</span> <span m="2588520">this</span> <span
  m="2588730">v</span> <span m="2588900">vector</span> <span
  m="2589370">which</span> <span m="2589580">has</span> <span
  m="2589800">the</span> <span m="2590160">jth</span> <span
  m="2590510">entry</span> <span m="2591770">corresponding</span> <span
  m="2592340">to</span> <span m="2592730">the</span> <span m="2592930">v</span>
  <span m="2593070">vector</span> <span m="2593400">being</span> <span
  m="2593540">a</span> <span m="2593650">1</span> <span m="2593990">with</span>
  <span m="2594150">all</span> <span m="2594240">of</span> <span
  m="2594330">the</span> <span m="2594400">other</span> <span
  m="2594620">entries</span> <span m="2594950">being</span> <span
  m="2595130">a</span> <span m="2595180">0.</span> <span m="2596140">But</span>
  <span m="2596360">I</span> <span m="2596490">can</span> <span
  m="2596680">now</span> <span m="2597580">create</span> <span
  m="2598250">an</span> <span m="2598420">r</span> <span m="2598670">to</span>
  <span m="2598780">r</span> <span m="2599170">that</span> <span
  m="2599240">is</span> <span m="2599350">1</span> <span m="2599580">to</span>
  <span m="2599790">1</span> <span m="2600610">in</span> <span
  m="2600820">the</span> <span m="2600940">sense</span> <span
  m="2601340">that</span> <span m="2603020">if</span> <span m="2605040">r</span>
  <span m="2605320">prime</span> <span m="2606950">equals</span> <span
  m="2607420">r</span> <span m="2607730">plus</span> <span m="2607980">v</span>
  <span m="2609970">and</span> <span m="2610260">that</span> <span
  m="2610470">equals</span> <span m="2611290">r</span> <span
  m="2611590">double</span> <span m="2611850">prime</span> <span
  m="2613470">plus</span> <span m="2613790">v--</span> <span
  m="2615360">so</span> <span m="2615610">if</span> <span m="2615720">I</span>
  <span m="2615890">ever</span> <span m="2616850">have</span> <span
  m="2617080">a</span> <span m="2617140">situation</span> <span
  m="2617710">where</span> <span m="2618380">in</span> <span
  m="2618570">order</span> <span m="2618740">to</span> <span
  m="2618820">show</span> <span m="2619060">there's</span> <span
  m="2619210">one-to-one,</span> <span m="2619830">I</span> <span
  m="2619920">want</span> <span m="2620060">to</span> <span
  m="2620110">say</span> <span m="2620290">that</span> <span
  m="2620470">it's</span> <span m="2620630">not</span> <span
  m="2620900">too</span> <span m="2621180">many-to-one</span> <span
  m="2623040">or</span> <span m="2623210">even</span> <span
  m="2623420">two-to-one.</span></p><p><span m="2624350">So</span> <span
  m="2624660">if</span> <span m="2624770">I</span> <span m="2624840">have</span>
  <span m="2625030">an</span> <span m="2625150">r</span> <span
  m="2625330">prime</span> <span m="2625660">that</span> <span
  m="2625830">equals</span> <span m="2626260">r</span> <span
  m="2626500">plus</span> <span m="2626750">v</span> <span
  m="2627400">and</span> <span m="2627600">you</span> <span
  m="2627720">tell</span> <span m="2627980">me</span> <span
  m="2628680">that</span> <span m="2629230">r</span> <span
  m="2629430">prime</span> <span m="2629770">also</span> <span
  m="2630210">equals</span> <span m="2631520">r</span> <span
  m="2631980">double</span> <span m="2632320">prime</span> <span
  m="2632610">plus</span> <span m="2632830">v,</span> <span m="2633320">I</span>
  <span m="2633810">can</span> <span m="2633940">make</span> <span
  m="2634180">the</span> <span m="2634650">argument</span> <span
  m="2635110">that</span> <span m="2635640">r</span> <span
  m="2636050">and</span> <span m="2636150">r</span> <span
  m="2636610">double</span> <span m="2636910">prime</span> <span
  m="2637730">are</span> <span m="2637990">exactly</span> <span
  m="2638350">the</span> <span m="2638460">same.</span></p><p><span
  m="2639920">So</span> <span m="2640910">then</span> <span m="2643350">r</span>
  <span m="2643590">equals</span> <span m="2643970">r</span> <span
  m="2644150">double</span> <span m="2644360">prime.</span></p><p><span
  m="2645490">So</span> <span m="2645800">what</span> <span
  m="2646010">am</span> <span m="2646055">I</span> <span
  m="2646100">saying</span> <span m="2646390">there?</span> <span
  m="2647970">I'm</span> <span m="2648100">just</span> <span
  m="2648260">saying</span> <span m="2648530">that</span> <span
  m="2649620">for</span> <span m="2651280">any</span> <span
  m="2651520">given</span> <span m="2651750">r</span> <span
  m="2653430">that</span> <span m="2654080">has</span> <span
  m="2654500">Dr</span> <span m="2654750">equals</span> <span
  m="2655040">0,</span> <span m="2655770">I</span> <span m="2655840">can</span>
  <span m="2656012">twiddle</span> <span m="2657560">the</span> <span
  m="2657870">jth</span> <span m="2658820">element</span> <span
  m="2659230">of</span> <span m="2659360">that</span> <span m="2659570">r</span>
  <span m="2660660">and</span> <span m="2660870">go</span> <span
  m="2661030">from</span> <span m="2661250">0</span> <span m="2661470">to</span>
  <span m="2661550">1</span> <span m="2661910">or</span> <span
  m="2662010">1</span> <span m="2662220">to</span> <span
  m="2662280">0.</span></p><p><span m="2663330">If</span> <span
  m="2663470">you</span> <span m="2663590">tell</span> <span
  m="2663770">me</span> <span m="2663920">that</span> <span
  m="2664080">there's</span> <span m="2664250">a</span> <span
  m="2664280">Dij</span> <span m="2665870">somewhere</span> <span
  m="2666370">in</span> <span m="2666460">that</span> <span
  m="2666630">matrix</span> <span m="2667810">that</span> <span
  m="2668710">is</span> <span m="2669080">nonzero</span> <span
  m="2670140">and</span> <span m="2670280">I</span> <span m="2670385">do</span>
  <span m="2670490">that</span> <span m="2670620">little</span> <span
  m="2670810">twiddle--</span> <span m="2671250">remembers</span> <span
  m="2671670">it's</span> <span m="2671760">all</span> <span
  m="2671850">0's</span> <span m="2672130">and</span> <span
  m="2672230">1's</span> <span m="2672560">Boolean</span> <span
  m="2672820">matrices--</span> <span m="2673380">so</span> <span
  m="2673455">if</span> <span m="2673530">I</span> <span m="2673590">do</span>
  <span m="2673710">one</span> <span m="2673990">twiddle,</span> <span
  m="2675110">it's</span> <span m="2675780">one-to-one.</span> <span
  m="2677280">If</span> <span m="2677470">I</span> <span m="2677540">do</span>
  <span m="2677760">two</span> <span m="2677940">twiddles</span> <span
  m="2678660">and</span> <span m="2678800">I</span> <span m="2678850">go</span>
  <span m="2679470">1</span> <span m="2679660">to</span> <span
  m="2679750">0,</span> <span m="2681340">I'm</span> <span
  m="2681820">back</span> <span m="2681990">to</span> <span m="2682080">1</span>
  <span m="2682260">again.</span> <span m="2682730">And</span> <span
  m="2682910">that's</span> <span m="2683180">all</span> <span
  m="2683400">this</span> <span m="2683520">says.</span> <span
  m="2684830">Because</span> <span m="2685180">you</span> <span
  m="2685380">have</span> <span m="2685510">mod</span> <span
  m="2685640">2.</span> <span m="2686470">That's</span> <span
  m="2686640">all</span> <span m="2686770">that</span> <span
  m="2686980">says.</span></p><p><span m="2687910">So</span> <span
  m="2688550">one</span> <span m="2688860">little</span> <span
  m="2689050">tweak--</span> <span m="2690260">and</span> <span
  m="2690980">I'm</span> <span m="2691130">going</span> <span
  m="2691240">to</span> <span m="2691280">be</span> <span
  m="2691350">able</span> <span m="2691450">to</span> <span
  m="2691540">take</span> <span m="2691710">a</span> <span
  m="2691760">bad</span> <span m="2692120">r</span> <span m="2693110">and</span>
  <span m="2693290">turn</span> <span m="2693475">it</span> <span
  m="2693660">into</span> <span m="2693760">a</span> <span
  m="2693830">good</span> <span m="2694070">r</span> <span
  m="2695000">because</span> <span m="2695950">the</span> <span
  m="2696740">good</span> <span m="2697120">r,</span> <span
  m="2697490">the</span> <span m="2697715">r</span> <span
  m="2697940">prime</span> <span m="2698480">in</span> <span
  m="2698550">this</span> <span m="2698740">case,</span> <span
  m="2699420">had</span> <span m="2699770">Dr</span> <span
  m="2700080">prime</span> <span m="2701290">not</span> <span
  m="2701370">equal</span> <span m="2701450">to</span> <span
  m="2701540">0.</span></p><p><span m="2703120">And</span> <span
  m="2703240">that's</span> <span m="2703600">it.</span> <span
  m="2703780">That's</span> <span m="2703960">my</span> <span
  m="2704120">counting</span> <span m="2704530">argument,</span> <span
  m="2705440">and</span> <span m="2706030">all</span> <span
  m="2706400">that</span> <span m="2706570">remains</span> <span
  m="2706990">is</span> <span m="2707150">to</span> <span
  m="2708180">essentially</span> <span m="2708600">close</span> <span
  m="2708980">this</span> <span m="2709680">by</span> <span
  m="2709880">sayiny--</span> <span m="2711750">just</span> <span
  m="2711970">to</span> <span m="2712070">write</span> <span
  m="2712270">this</span> <span m="2712430">out</span> <span
  m="2713350">to</span> <span m="2713510">get</span> <span m="2714590">to</span>
  <span m="2714650">the</span> <span m="2714760">final</span> <span
  m="2715110">claim</span> <span m="2717230">and</span> <span
  m="2717530">get</span> <span m="2717700">the</span> <span
  m="2717800">one</span> <span m="2718100">half--</span> <span
  m="2719040">the</span> <span m="2719170">one-to-one</span> <span
  m="2719720">essentially</span> <span m="2720080">gives</span> <span
  m="2720240">you</span> <span m="2720370">the</span> <span
  m="2720480">one</span> <span m="2720750">half.</span> <span
  m="2721960">At</span> <span m="2722070">least</span> <span
  m="2722720">half</span> <span m="2722980">of</span> <span
  m="2723100">these</span> <span m="2723300">things</span> <span
  m="2723580">are</span> <span m="2723640">going</span> <span
  m="2723770">to</span> <span m="2723810">be</span> <span
  m="2723930">good</span> <span m="2724130">r's.</span></p><p>&nbsp;</p><p><span
  m="2733110">If</span> <span m="2733240">you</span> <span
  m="2733330">had</span> <span m="2733630">I</span> <span m="2733820">Dr</span>
  <span m="2734190">that's</span> <span m="2734410">not</span> <span
  m="2734640">equal</span> <span m="2734830">to</span> <span
  m="2734920">0--</span> <span m="2736810">and</span> <span
  m="2737100">that's</span> <span m="2737330">the</span> <span
  m="2737420">case</span> <span m="2737790">that</span> <span
  m="2737890">you</span> <span m="2737990">have</span> <span
  m="2738110">here--</span> <span m="2739720">then</span> <span
  m="2740080">we're</span> <span m="2740180">going</span> <span
  m="2740430">to</span> <span m="2741000">discover</span> <span
  m="2744020">an</span> <span m="2744200">r</span> <span
  m="2744440">prime</span> <span m="2745670">such</span> <span
  m="2746050">that</span> <span m="2746820">the</span> <span
  m="2746960">Dr</span> <span m="2747360">prime</span> <span
  m="2748340">is</span> <span m="2748540">not</span> <span
  m="2748730">equal</span> <span m="2748950">to</span> <span
  m="2748990">0</span> <span m="2750010">and</span> <span m="2750300">r</span>
  <span m="2751500">to</span> <span m="2751710">r</span> <span
  m="2752010">prime</span> <span m="2753340">is</span> <span
  m="2753460">a</span> <span m="2753530">one-to-one</span> <span
  m="2754000">mapping.</span></p><p>&nbsp;</p><p>&nbsp;</p><p><span
  m="2760170">So</span> <span m="2760340">the</span> <span
  m="2760430">number</span> <span m="2760800">of</span> <span
  m="2760940">r</span> <span m="2761120">prime</span> <span
  m="2766640">for</span> <span m="2766840">which</span> <span
  m="2769340">Dr</span> <span m="2769700">prime</span> <span
  m="2770350">is</span> <span m="2770720">not</span> <span
  m="2770990">equal</span> <span m="2771180">to</span> <span
  m="2771220">0</span> <span m="2772400">is</span> <span
  m="2772600">greater</span> <span m="2772840">than</span> <span
  m="2772990">or</span> <span m="2773070">equal</span> <span
  m="2773450">to</span> <span m="2774790">the</span> <span
  m="2774950">number</span> <span m="2776900">of</span> <span
  m="2777790">r</span> <span m="2779560">for</span> <span
  m="2779950">which</span> <span m="2781580">Dr</span> <span
  m="2782040">equals</span> <span m="2782410">zero.</span></p><p><span
  m="2784570">And</span> <span m="2784760">so</span> <span
  m="2784880">that</span> <span m="2785050">implies</span> <span
  m="2786350">that</span> <span m="2786510">the</span> <span
  m="2786610">probability</span> <span m="2788300">of</span> <span
  m="2788840">Dr</span> <span m="2790430">not</span> <span
  m="2790670">equal</span> <span m="2790910">to</span> <span
  m="2790960">zero--</span> <span m="2791380">so</span> <span
  m="2791445">if</span> <span m="2791510">you</span> <span
  m="2791650">just</span> <span m="2791890">choose</span> <span
  m="2792260">an</span> <span m="2792440">r,</span> <span
  m="2793190">this</span> <span m="2793360">is</span> <span
  m="2793490">now</span> <span m="2793690">a</span> <span
  m="2793790">randomly</span> <span m="2794380">chosen</span> <span
  m="2794810">r.</span> <span m="2797560">Not</span> <span
  m="2797670">that</span> <span m="2797820">others</span> <span
  m="2797940">weren't,</span> <span m="2798580">but</span> <span
  m="2799140">I'm</span> <span m="2800240">treating</span> <span
  m="2800560">it</span> <span m="2800650">a</span> <span
  m="2800710">little</span> <span m="2800820">bit</span> <span
  m="2800950">differently</span> <span m="2801330">here.</span></p><p><span
  m="2801850">This</span> <span m="2802010">was</span> <span
  m="2802170">a</span> <span m="2802250">specific</span> <span
  m="2802830">r</span> <span m="2803900">for</span> <span
  m="2804160">which</span> <span m="2804440">Dr</span> <span
  m="2804810">was</span> <span m="2804960">equal</span> <span
  m="2805240">to</span> <span m="2805300">0.</span> <span m="2806210">I</span>
  <span m="2806690">made</span> <span m="2806950">an</span> <span
  m="2807040">argument</span> <span m="2807470">that</span> <span
  m="2807610">you</span> <span m="2807700">can</span> <span
  m="2807790">always</span> <span m="2808100">get</span> <span
  m="2808300">this</span> <span m="2808480">r</span> <span
  m="2808680">prime</span> <span m="2809100">one-to-one</span> <span
  m="2810070">such</span> <span m="2810300">that</span> <span
  m="2810490">Dr</span> <span m="2810780">prime</span> <span
  m="2811190">is</span> <span m="2811300">not</span> <span
  m="2811480">equal</span> <span m="2811710">to</span> <span
  m="2811750">0.</span> <span m="2812480">And</span> <span
  m="2812600">now</span> <span m="2812770">going</span> <span
  m="2813020">back</span> <span m="2813350">to</span> <span
  m="2813990">what</span> <span m="2814150">I</span> <span
  m="2814200">had</span> <span m="2814520">initially</span> <span
  m="2815040">with</span> <span m="2815180">respect</span> <span
  m="2815480">to</span> <span m="2815550">the</span> <span
  m="2815690">claim</span> <span m="2816120">here</span> <span
  m="2816850">where</span> <span m="2817230">the</span> <span
  m="2817540">r</span> <span m="2817820">here</span> <span
  m="2818080">was</span> <span m="2818320">a</span> <span
  m="2818880">randomly</span> <span m="2819380">chosen</span> <span
  m="2819750">r,</span> <span m="2820870">I'm</span> <span
  m="2821030">saying,</span> <span m="2821830">thanks</span> <span
  m="2822110">to</span> <span m="2822200">this</span> <span
  m="2822980">little</span> <span m="2823210">argument--</span> <span
  m="2823660">this</span> <span m="2823800">line</span> <span
  m="2824330">up</span> <span m="2824530">top--</span> <span
  m="2825320">I'm</span> <span m="2825495">going</span> <span
  m="2825670">to</span> <span m="2825780">be</span> <span
  m="2825940">able</span> <span m="2826030">to</span> <span
  m="2826090">say</span> <span m="2826240">this</span> <span
  m="2826440">is</span> <span m="2827080">greater</span> <span
  m="2827290">than</span> <span m="2827400">or</span> <span
  m="2827480">equal</span> <span m="2827720">to</span> <span
  m="2827810">one</span> <span m="2828120">half.</span> <span
  m="2828870">OK?</span></p><p><span m="2830780">Cool.</span> <span
  m="2831560">Any</span> <span m="2831690">questions?</span> <span
  m="2832090">Yeah.</span></p><p><span m="2832994">AUDIENCE: I</span> <span
  m="2833158">think</span> <span m="2833323">the</span> <span
  m="2834476">Dr</span> <span m="2834970">squared</span> <span
  m="2835464">times</span> <span m="2835958">column</span> <span
  m="2836452">equal</span> <span m="2836946">column</span> <span
  m="2837110">on</span> <span m="2837275">the</span> <span
  m="2837440">board.</span></p><p><span m="2837940">SRINIVAS DEVADAS:
  Yeah.</span></p><p><span m="2838728">AUDIENCE: On</span> <span
  m="2838880">the</span> <span m="2839033">last</span> <span
  m="2839186">column,</span> <span m="2839644">it</span> <span
  m="2839796">should</span> <span m="2839949">be</span> <span
  m="2840102">i,</span> <span m="2840560">not</span> <span
  m="2840789">j.</span></p><p><span m="2841940">SRINIVAS DEVADAS: This</span>
  <span m="2842050">should</span> <span m="2842200">be</span> <span
  m="2842320">i?</span></p><p><span m="2842780">AUDIENCE:
  Yes.</span></p><p>&nbsp;</p><p><span m="2846440">SRINIVAS DEVADAS:
  People</span> <span m="2846670">agree</span> <span m="2846860">with</span>
  <span m="2846960">that?</span> <span m="2848110">Majority</span> <span
  m="2848570">vote.</span> <span m="2850380">All</span> <span
  m="2850470">right.</span> <span m="2851140">I'm</span> <span
  m="2851320">good.</span> <span m="2852590">Let's</span> <span
  m="2852650">make</span> <span m="2852780">that</span> <span
  m="2852910">an</span> <span m="2853377">i.</span></p><p><span
  m="2853844">AUDIENCE: The</span> <span m="2854311">iteration of that</span>
  <span m="2854778">as</span> <span m="2855011">well,</span> <span
  m="2855712">Dv</span> <span m="2856179">sub</span> <span
  m="2856646">j.</span></p><p><span m="2856804">SRINIVAS DEVADAS: Oh,</span>
  <span m="2856962">yeah.</span> <span m="2857120">Of</span> <span
  m="2857320">course.</span> <span m="2858830">Yeah.</span> <span
  m="2859150">Once</span> <span m="2859420">you</span> <span
  m="2859870">do</span> <span m="2859990">that,</span> <span
  m="2860440">you</span> <span m="2861060">have</span> <span
  m="2861200">to</span> <span m="2861270">have</span> <span
  m="2861710">an</span> <span m="2861860">i</span> <span
  m="2862045">there.</span> <span m="2862680">Good.</span></p><p><span
  m="2864960">So</span> <span m="2866580">you're</span> <span
  m="2866740">looking</span> <span m="2867060">at</span> <span
  m="2868150">a</span> <span m="2868210">particular</span> <span
  m="2868630">entry--</span> <span m="2870180">it</span> <span
  m="2870320">makes</span> <span m="2870550">a</span> <span
  m="2870590">difference</span> <span m="2870970">whether</span> <span
  m="2871180">you</span> <span m="2871340">used</span> <span
  m="2871730">a</span> <span m="2871820">column</span> <span
  m="2872760">or</span> <span m="2872970">a</span> <span m="2873040">row.</span>
  <span m="2873890">If</span> <span m="2874060">I'd</span> <span
  m="2874290">done--</span> <span m="2876080">now</span> <span
  m="2876290">that</span> <span m="2876390">I</span> <span
  m="2876460">remember--</span> <span m="2878260">if</span> <span
  m="2878910">you</span> <span m="2879050">turn</span> <span
  m="2879200">this</span> <span m="2879370">into</span> <span
  m="2880710">a</span> <span m="2880750">row</span> <span
  m="2880950">matrix</span> <span m="2881770">and</span> <span
  m="2881920">this</span> <span m="2882050">becomes</span> <span
  m="2882310">a</span> <span m="2882390">row</span> <span
  m="2882530">matrix,</span> <span m="2883390">you'll</span> <span
  m="2883750">essentially</span> <span m="2884110">get</span> <span
  m="2884270">the</span> <span m="2884340">Dvj.</span> <span
  m="2885470">So</span> <span m="2885660">it</span> <span
  m="2885790">depends</span> <span m="2886120">on</span> <span
  m="2886290">which</span> <span m="2886540">way</span> <span
  m="2886660">you</span> <span m="2886770">look</span> <span
  m="2886930">at</span> <span m="2887230">it,</span> <span
  m="2887500">but</span> <span m="2887640">thanks</span> <span
  m="2887800">for</span> <span m="2887890">pointing</span> <span
  m="2888160">that</span> <span m="2888290">out.</span></p><p>&nbsp;</p><p><span
  m="2891000">The</span> <span m="2891780">specifics</span> <span
  m="2892430">of</span> <span m="2892860">i</span> <span m="2893080">and</span>
  <span m="2893250">j</span> <span m="2894080">weren't</span> <span
  m="2895030">particularly</span> <span m="2895820">important</span> <span
  m="2896650">to</span> <span m="2897490">the</span> <span
  m="2897670">proof</span> <span m="2897910">itself.</span> <span
  m="2899030">The</span> <span m="2899270">key</span> <span
  m="2899520">thing</span> <span m="2900255">is</span> <span
  m="2900620">you</span> <span m="2900880">zoom</span> <span
  m="2901250">in</span> <span m="2901440">on</span> <span m="2901690">a</span>
  <span m="2901750">particular</span> <span m="2902120">entry</span> <span
  m="2902990">that</span> <span m="2903390">is</span> <span
  m="2903670">not</span> <span m="2903880">equal</span> <span
  m="2904140">to</span> <span m="2904200">0,</span> <span m="2905760">and</span>
  <span m="2905970">then</span> <span m="2906740">you</span> <span
  m="2906950">tweak</span> <span m="2908040">that</span> <span
  m="2908480">entry</span> <span m="2909050">corresponding</span> <span
  m="2909530">to</span> <span m="2909600">the</span> <span m="2909700">r.</span>
  <span m="2910210">So</span> <span m="2911600">once</span> <span
  m="2911880">you</span> <span m="2911980">tweak</span> <span
  m="2912230">that--</span> <span m="2912640">you</span> <span
  m="2912740">make</span> <span m="2912885">that</span> <span
  m="2913030">0</span> <span m="2913260">or</span> <span m="2913370">1</span>
  <span m="2913630">or</span> <span m="2913750">1</span> <span
  m="2913950">to</span> <span m="2914000">0--</span> <span
  m="2914670">you</span> <span m="2914800">can</span> <span
  m="2914910">get</span> <span m="2915110">this</span> <span
  m="2915270">result.</span></p><p><span m="2918950">I'm</span> <span
  m="2919080">sorry.</span> <span m="2919330">I'm</span> <span
  m="2919480">pointing</span> <span m="2919730">to</span> <span
  m="2919780">the</span> <span m="2919830">wrong</span> <span
  m="2920190">spot.</span></p><p><span m="2920620">This</span> <span
  m="2921170">result--</span> <span m="2922840">and</span> <span
  m="2922990">then</span> <span m="2923290">get</span> <span
  m="2923450">your</span> <span m="2924140">claim.</span> <span
  m="2924970">OK?</span></p><p><span m="2925850">So</span> <span
  m="2926630">summarize--</span> <span m="2928160">we</span> <span
  m="2928270">have</span> <span m="2928540">a</span> <span
  m="2928610">bound.</span> <span m="2929220">We</span> <span
  m="2929720">run</span> <span m="2929850">it</span> <span
  m="2930270">over</span> <span m="2930540">and</span> <span
  m="2930620">over,</span> <span m="2931850">and</span> <span
  m="2932220">we</span> <span m="2932330">get</span> <span m="2932650">it</span>
  <span m="2932960">to</span> <span m="2933130">the</span> <span
  m="2933350">point</span> <span m="2933700">where</span> <span
  m="2934150">we</span> <span m="2934280">can</span> <span
  m="2934420">have</span> <span m="2935050">a</span> <span
  m="2935140">0.0001</span> <span m="2936490">probability</span> <span
  m="2937660">that,</span> <span m="2939090">if</span> <span
  m="2939340">the</span> <span m="2939430">matrices</span> <span
  m="2939970">were</span> <span m="2940080">multiplied</span> <span
  m="2941480">incorrectly,</span> <span m="2942980">that</span> <span
  m="2943300">you</span> <span m="2943450">wouldn't</span> <span
  m="2943960">discover</span> <span m="2944460">that</span> <span
  m="2945130">because</span> <span m="2945400">you</span> <span
  m="2945530">ran</span> <span m="2945760">it</span> <span
  m="2947780">for</span> <span m="2948010">enough</span> <span
  m="2948310">hours</span> <span m="2948890">independently</span> <span
  m="2949420">chosen</span> <span m="2950000">that</span> <span
  m="2950250">that</span> <span m="2950540">probability</span> <span
  m="2950980">becomes</span> <span m="2951300">as</span> <span
  m="2951670">low</span> <span m="2951950">as</span> <span
  m="2952070">possible.</span> <span m="2953130">OK?</span></p><p><span
  m="2954270">So</span> <span m="2954480">that</span> <span
  m="2954640">was</span> <span m="2956480">Monte</span> <span
  m="2956820">Carlo.</span> <span m="2958240">Let's</span> <span
  m="2958580">do</span> <span m="2958770">a</span> <span m="2959510">Las</span>
  <span m="2959750">Vegas</span> <span m="2960050">algorithm.</span> <span
  m="2960790">And</span> <span m="2960970">you</span> <span
  m="2961060">guys</span> <span m="2961250">are</span> <span
  m="2961310">probably</span> <span m="2961620">thinking,</span> <span
  m="2962430">my</span> <span m="2962490">goodness.</span> <span
  m="2963030">Another</span> <span m="2963530">sorting</span> <span
  m="2963880">algorithm</span> <span m="2965340">after,</span> <span
  m="2966320">I</span> <span m="2966460">don't</span> <span
  m="2966580">know,</span> <span m="2967000">17</span> <span
  m="2967600">different</span> <span m="2967890">sorting</span> <span
  m="2968180">algorithms.</span></p><p>&nbsp;</p><p><span
  m="2970200">This</span> <span m="2970670">all</span> <span
  m="2971360">sorting</span> <span m="2971690">algorithms</span> <span
  m="2972140">that</span> <span m="2972240">you've</span> <span
  m="2972770">ever</span> <span m="2973010">learned</span> <span
  m="2973300">so</span> <span m="2973490">far.</span> <span
  m="2974390">Right?</span> <span m="2974730">So</span> <span
  m="2974920">merge</span> <span m="2975220">sort</span> <span
  m="2976110">doesn't</span> <span m="2976370">work,</span> <span
  m="2978080">and</span> <span m="2978160">the</span> <span
  m="2978220">reason</span> <span m="2978520">it</span> <span
  m="2978580">doesn't</span> <span m="2978810">work</span> <span
  m="2979070">in</span> <span m="2979170">practice--</span> <span
  m="2980560">if</span> <span m="2980730">you're</span> <span
  m="2980930">really</span> <span m="2981230">into</span> <span
  m="2981450">performance--</span> <span m="2984360">is</span> <span
  m="2984740">because</span> <span m="2985070">of</span> <span
  m="2985900">the</span> <span m="2986010">auxiliary</span> <span
  m="2986680">space</span> <span m="2987860">that</span> <span
  m="2988240">merge</span> <span m="2988550">sort</span> <span
  m="2988860">requires.</span></p><p><span m="2990070">So</span> <span
  m="2990220">if</span> <span m="2990310">you</span> <span
  m="2990400">recall</span> <span m="2991840">there's</span> <span
  m="2992230">the</span> <span m="2992310">notion</span> <span
  m="2992670">of</span> <span m="2993290">in-place</span> <span
  m="2993960">sorting.</span> <span m="2994800">So</span> <span
  m="2995280">let's</span> <span m="2996490">move</span> <span
  m="2996520">onto</span> <span m="2996860">the</span> <span
  m="2996930">next</span> <span m="2997170">thing</span> <span
  m="2997340">here,</span> <span m="2997560">which</span> <span
  m="2997740">is</span> <span m="3001240">quicksort,</span> <span
  m="3002430">which</span> <span m="3002660">is</span> <span
  m="3002760">a</span> <span m="3002800">new</span> <span
  m="3003000">sorting</span> <span m="3003330">algorithm.</span> <span
  m="3003680">And</span> <span m="3003740">I</span> <span
  m="3003760">want</span> <span m="3003890">to</span> <span
  m="3003920">motivate</span> <span m="3004180">it</span> <span
  m="3004440">for</span> <span m="3004560">just</span> <span
  m="3004760">a</span> <span m="3004810">couple</span> <span
  m="3004940">of</span> <span m="3005070">minutes.</span></p><p><span
  m="3008990">And</span> <span m="3009190">the</span> <span
  m="3009260">primary</span> <span m="3009640">motivation</span> <span
  m="3010130">really</span> <span m="3010380">is</span> <span
  m="3010540">practical</span> <span m="3012800">performance,</span> <span
  m="3013870">not</span> <span m="3015580">asymptotic</span> <span
  m="3015870">complexity.</span> <span m="3016620">So</span> <span
  m="3016890">I'll</span> <span m="3017230">be</span> <span
  m="3017800">upfront</span> <span m="3018210">about</span> <span
  m="3018440">that.</span> <span m="3019920">It's</span> <span
  m="3020690">all</span> <span m="3020820">about</span> <span
  m="3021050">practical</span> <span m="3021470">performance</span> <span
  m="3022150">corresponding</span> <span m="3022960">to</span> <span
  m="3023030">quicksort.</span> <span m="3024590">And</span> <span
  m="3025660">quicksort</span> <span m="3026390">is</span> <span
  m="3026890">a</span> <span m="3027010">divide</span> <span
  m="3027280">and</span> <span m="3027390">conquer</span> <span
  m="3028860">randomized</span> <span m="3029360">algorithm</span> <span
  m="3030510">invented</span> <span m="3030900">in</span> <span
  m="3031060">'62.</span></p><p><span m="3033720">Unlike</span> <span
  m="3034310">merge</span> <span m="3034560">sort,</span> <span
  m="3036280">it's</span> <span m="3036440">got</span> <span
  m="3036630">two</span> <span m="3036940">interesting</span> <span
  m="3037350">properties.</span> <span m="3038980">The</span> <span
  m="3039050">first</span> <span m="3039380">is</span> <span
  m="3039500">that</span> <span m="3039700">it's</span> <span
  m="3039860">in</span> <span m="3040080">place,</span> <span
  m="3040530">like</span> <span m="3040730">I</span> <span
  m="3040750">just</span> <span m="3041000">said.</span> <span
  m="3042190">So</span> <span m="3042670">no</span> <span
  m="3043030">auxiliary</span> <span m="3043620">space.</span> <span
  m="3044555">In</span> <span m="3044890">Mozart,</span> <span
  m="3047700">you</span> <span m="3047835">can</span> <span
  m="3047970">try</span> <span m="3048240">and</span> <span
  m="3048280">get</span> <span m="3048410">around</span> <span
  m="3048720">this.</span> <span m="3051570">I</span> <span
  m="3051660">should</span> <span m="3051705">say</span> <span
  m="3051750">order</span> <span m="3052050">n</span> <span
  m="3052380">auxiliary</span> <span m="3052710">space.</span> <span
  m="3053490">You</span> <span m="3055470">need</span> <span
  m="3055610">a</span> <span m="3055735">little</span> <span
  m="3055860">temporary</span> <span m="3057610">variable</span> <span
  m="3058200">in</span> <span m="3058320">order</span> <span
  m="3058550">to</span> <span m="3058603">do</span> <span m="3058656">a</span>
  <span m="3058710">swapping.</span></p><p><span m="3060410">But</span> <span
  m="3063530">you</span> <span m="3063720">don't</span> <span
  m="3063900">have</span> <span m="3064030">the</span> <span
  m="3064100">order</span> <span m="3064330">n</span> <span
  m="3064570">auxiliary</span> <span m="3064830">space.</span> <span
  m="3065170">So</span> <span m="3065250">you</span> <span
  m="3065330">don't</span> <span m="3065460">have</span> <span
  m="3065580">to</span> <span m="3065670">constantly</span> <span
  m="3066750">allocate.</span> <span m="3067280">And</span> <span
  m="3067380">remember,</span> <span m="3067690">n</span> <span
  m="3067900">could</span> <span m="3068030">be</span> <span
  m="3068150">large.</span> <span m="3068303">It</span> <span
  m="3068456">could</span> <span m="3068700">be</span> <span
  m="3068765">in</span> <span m="3068830">the</span> <span
  m="3068940">billions</span> <span m="3069360">or</span> <span
  m="3069430">trillions.</span> <span m="3070340">So,</span> <span
  m="3071330">from</span> <span m="3071460">that</span> <span
  m="3071650">standpoint,</span> <span m="3072490">quicksort</span> <span
  m="3072980">ends</span> <span m="3073230">up</span> <span
  m="3073700">winning</span> <span m="3074190">simply</span> <span
  m="3074530">because</span> <span m="3074850">of</span> <span
  m="3075880">relatively</span> <span m="3076330">mundane</span> <span
  m="3076850">things</span> <span m="3077130">like</span> <span
  m="3077320">memory</span> <span m="3077620">allocation</span> <span
  m="3078710">in</span> <span m="3080140">your</span> <span
  m="3080850">computer.</span></p><p><span m="3082450">And</span> <span
  m="3083810">the</span> <span m="3083970">other</span> <span
  m="3084310">interesting</span> <span m="3084680">thing</span> <span
  m="3084800">about</span> <span m="3085570">quicksort</span> <span
  m="3085760">in</span> <span m="3086130">relation</span> <span
  m="3086430">to</span> <span m="3086500">merge</span> <span
  m="3086865">sort</span> <span m="3087530">is</span> <span
  m="3087730">that</span> <span m="3087970">all</span> <span
  m="3088240">the</span> <span m="3088330">work</span> <span
  m="3092040">is</span> <span m="3092090">in</span> <span m="3092140">the</span>
  <span m="3092230">divide</span> <span m="3092640">step.</span></p><p><span
  m="3099180">So</span> <span m="3099550">in</span> <span
  m="3099700">merge</span> <span m="3099870">sort,</span> <span
  m="3100170">remember</span> <span m="3100530">we just</span> <span
  m="3100650">split,</span> <span m="3101180">and</span> <span
  m="3101410">we</span> <span m="3101480">recurse.</span> <span
  m="3102720">And</span> <span m="3102960">what</span> <span
  m="3103090">happens</span> <span m="3104650">when</span> <span
  m="3104900">you</span> <span m="3105520">come</span> <span
  m="3105710">back</span> <span m="3106050">is</span> <span
  m="3106210">you</span> <span m="3106340">have</span> <span
  m="3106470">to</span> <span m="3106570">do</span> <span m="3109540">the</span>
  <span m="3109720">finger</span> <span m="3110570">emerging</span> <span
  m="3111040">algorithm</span> <span m="3112190">by</span> <span
  m="3113010">looking</span> <span m="3113300">at</span> <span
  m="3113370">the</span> <span m="3113470">two</span> <span
  m="3113670">sorted</span> <span m="3114100">arrays</span> <span
  m="3114800">and</span> <span m="3115630">looking</span> <span
  m="3116000">at</span> <span m="3116120">what</span> <span
  m="3117010">the</span> <span m="3117260">new</span> <span
  m="3118390">merger</span> <span m="3119080">is</span> <span
  m="3119190">going</span> <span m="3119300">to</span> <span
  m="3119340">look</span> <span m="3119530">like.</span> <span
  m="3119820">So</span> <span m="3119930">the</span> <span
  m="3120030">work</span> <span m="3120190">is</span> <span
  m="3120350">in</span> <span m="3120450">the</span> <span
  m="3120520">merge.</span> <span m="3121830">But</span> <span
  m="3122610">in</span> <span m="3123140">quicksort,</span> <span
  m="3123670">the</span> <span m="3123750">work</span> <span
  m="3124000">is</span> <span m="3124120">going</span> <span
  m="3124240">to</span> <span m="3124280">be</span> <span m="3124360">in</span>
  <span m="3124440">the</span> <span m="3124530">divide</span> <span
  m="3124990">because</span> <span m="3125270">we're</span> <span
  m="3125400">going</span> <span m="3125520">to</span> <span
  m="3125560">have</span> <span m="3125780">to</span> <span
  m="3127660">do</span> <span m="3127800">a</span> <span
  m="3127860">bunch</span> <span m="3128090">of</span> <span
  m="3128180">work</span> <span m="3129310">associated</span> <span
  m="3129860">with</span> <span m="3130070">figuring</span> <span
  m="3130490">out</span> <span m="3131190">how</span> <span
  m="3131430">to</span> <span m="3131560">keep</span> <span
  m="3132460">the</span> <span m="3132580">partitions</span> <span
  m="3133670">balanced--</span> <span m="3135070">a</span> <span
  m="3135120">little</span> <span m="3135330">bit</span> <span
  m="3135510">like</span> <span m="3136420">we</span> <span
  m="3136750">had</span> <span m="3136930">to</span> <span m="3137020">do</span>
  <span m="3137310">when</span> <span m="3137530">we</span> <span
  m="3137660">did</span> <span m="3138440">median</span> <span
  m="3138840">finding</span> <span m="3139730">back</span> <span
  m="3140090">a</span> <span m="3140260">couple</span> <span
  m="3140400">of</span> <span m="3140540">weeks</span> <span
  m="3140780">ago.</span></p><p><span m="3142520">I'm</span> <span
  m="3142670">going</span> <span m="3142780">to</span> <span
  m="3142840">talk</span> <span m="3143030">about</span> <span
  m="3143240">three</span> <span m="3143390">different</span> <span
  m="3143640">variants</span> <span m="3144150">of</span> <span
  m="3144250">quicksort.</span> <span m="3146110">The.</span> <span
  m="3146260">variant</span> <span m="3146690">that</span> <span
  m="3147030">we're</span> <span m="3147140">going</span> <span
  m="3147390">to</span> <span m="3147970">spend</span> <span
  m="3148280">the</span> <span m="3148340">most</span> <span
  m="3148570">time</span> <span m="3148840">on</span> <span
  m="3149470">is</span> <span m="3149940">the</span> <span
  m="3150310">Las</span> <span m="3150640">Vegas</span> <span
  m="3151800">quicksort</span> <span m="3152470">where</span> <span
  m="3152670">we'd</span> <span m="3152810">like</span> <span
  m="3153010">to</span> <span m="3153100">show</span> <span
  m="3153450">that</span> <span m="3153590">it's</span> <span
  m="3153770">probably</span> <span m="3154300">fast</span> <span
  m="3155430">and</span> <span m="3156150">make</span> <span
  m="3156380">a</span> <span m="3156450">statement</span> <span
  m="3156940">about</span> <span m="3157770">the</span> <span
  m="3157870">expected</span> <span m="3158460">runtime.</span> <span
  m="3160590">But</span> <span m="3161020">we'll</span> <span
  m="3161250">get</span> <span m="3161490">to</span> <span
  m="3161560">that</span> <span m="3162600">by</span> <span
  m="3162820">talking</span> <span m="3163120">about</span> <span
  m="3163330">a</span> <span m="3163400">couple</span> <span
  m="3163590">of</span> <span m="3163670">other</span> <span
  m="3163900">interesting</span> <span m="3164290">variants,</span> <span
  m="3165330">and</span> <span m="3165650">this'll</span> <span
  m="3167110">be</span> <span m="3168670">elaborated</span> <span
  m="3169190">on</span> <span m="3169440">to</span> <span
  m="3169520">some</span> <span m="3169690">extent</span> <span
  m="3170780">in</span> <span m="3170990">section</span> <span
  m="3171380">tomorrow.</span></p><p><span m="3173310">So</span> <span
  m="3174800">before</span> <span m="3175130">we</span> <span
  m="3175230">get</span> <span m="3175370">to</span> <span
  m="3175440">variants</span> <span m="3175820">of</span> <span
  m="3175920">course,</span> <span m="3176230">let's</span> <span
  m="3176670">try</span> <span m="3176850">and</span> <span
  m="3176940">set</span> <span m="3177060">up</span> <span
  m="3177170">the</span> <span m="3177250">structure</span> <span
  m="3177820">corresponding</span> <span m="3178840">to</span> <span
  m="3178920">quicksort.</span> <span m="3180500">And</span> <span
  m="3181900">as</span> <span m="3182290">always,</span> <span
  m="3182750">we</span> <span m="3182860">have</span> <span
  m="3183020">an</span> <span m="3183230">n</span> <span
  m="3183440">element</span> <span m="3185310">array</span> <span
  m="3187460">A.</span> <span m="3189150">You</span> <span
  m="3189290">have</span> <span m="3189870">divide</span> <span
  m="3192070">that</span> <span m="3192220">corresponds</span> <span
  m="3192830">to</span> <span m="3193990">picking</span> <span
  m="3195580">a</span> <span m="3195690">pivot</span> <span
  m="3196160">element,</span> <span m="3200980">x</span> <span
  m="3202210">in</span> <span m="3202470">A.</span> <span m="3203655">And</span>
  <span m="3204050">then</span> <span m="3204210">we're</span> <span
  m="3204310">going</span> <span m="3204680">to</span> <span
  m="3205200">partition</span> <span m="3210780">the</span> <span
  m="3211120">array</span> <span m="3213270">into</span> <span
  m="3214220">sub-arrays.</span></p><p><span m="3219240">And</span> <span
  m="3219690">what</span> <span m="3219870">we</span> <span
  m="3219980">have</span> <span m="3220240">here--</span> <span
  m="3222320">this</span> <span m="3222630">little</span> <span
  m="3222840">picture</span> <span m="3223240">should</span> <span
  m="3224750">make</span> <span m="3224940">things</span> <span
  m="3225210">clearer.</span> <span m="3226080">And</span> <span
  m="3226400">you</span> <span m="3226490">kind</span> <span
  m="3226650">of</span> <span m="3226710">saw</span> <span
  m="3226920">this</span> <span m="3228310">in</span> <span
  m="3228500">the</span> <span m="3228570">median</span> <span
  m="3228900">finding,</span> <span m="3229330">but</span> <span
  m="3229490">here</span> <span m="3229680">we</span> <span
  m="3229750">go</span> <span m="3229900">again.</span> <span
  m="3230600">Let's</span> <span m="3230740">assume</span> <span m="3231000">all
  the</span> <span m="3231180">array</span> <span m="3231370">elements</span>
  <span m="3231760">are</span> <span m="3231830">unique.</span> <span
  m="3233410">We</span> <span m="3233570">have</span> <span
  m="3233800">L,</span> <span m="3234255">E,</span> <span m="3235260">and</span>
  <span m="3235510">G.</span> <span m="3237406">L</span> <span
  m="3237643">is</span> <span m="3237880">less</span> <span
  m="3238140">than.</span> <span m="3238840">G</span> <span
  m="3239010">is</span> <span m="3239150">greater</span> <span
  m="3239360">than.</span></p><p><span m="3240560">And</span> <span
  m="3240720">so</span> <span m="3240810">your</span> <span
  m="3240950">pivot</span> <span m="3241240">element</span> <span
  m="3241620">is</span> <span m="3241740">going</span> <span
  m="3241970">to</span> <span m="3242100">break</span> <span
  m="3242480">this</span> <span m="3243000">array</span> <span
  m="3243300">up</span> <span m="3243460">into</span> <span m="3243670">L</span>
  <span m="3244030">and</span> <span m="3244390">G,</span> <span
  m="3244660">where</span> <span m="3244810">you</span> <span
  m="3244900">got</span> <span m="3245150">all</span> <span
  m="3245420">the</span> <span m="3245490">elements</span> <span
  m="3246380">that</span> <span m="3246610">are</span> <span
  m="3246710">less</span> <span m="3247450">on</span> <span
  m="3247640">the</span> <span m="3247730">left</span> <span
  m="3248040">and</span> <span m="3248140">all</span> <span
  m="3248280">the</span> <span m="3248350">elements</span> <span
  m="3248670">that</span> <span m="3248770">are</span> <span
  m="3248900">greater</span> <span m="3249170">on</span> <span
  m="3249300">the</span> <span m="3249390">right.</span> <span
  m="3250100">And</span> <span m="3250270">you're</span> <span
  m="3250380">going</span> <span m="3250550">to</span> <span
  m="3250630">recurs</span> <span m="3251860">on</span> <span
  m="3252340">the</span> <span m="3252810">L</span> <span m="3253100">and</span>
  <span m="3253390">G.</span> <span m="3255040">So</span> <span
  m="3256040">recursively</span> <span m="3256690">sort</span> <span
  m="3261500">sub-arrays</span> <span m="3265410">L</span> <span
  m="3265570">and</span> <span m="3265810">G.</span> <span
  m="3267880">Combine</span> <span m="3268400">is</span> <span
  m="3268530">trivial--</span> <span m="3270950">or</span> <span
  m="3271110">merge</span> <span m="3271260">is</span> <span
  m="3271410">trivial--</span> <span m="3272650">because</span> <span
  m="3272910">you've</span> <span m="3273030">already</span> <span
  m="3273300">broken</span> <span m="3273600">things</span> <span
  m="3273820">up</span> <span m="3274080">thanks</span> <span
  m="3274330">to</span> <span m="3274400">the</span> <span
  m="3274490">pivoting.</span> <span m="3275330">And</span> <span
  m="3275820">you</span> <span m="3275970">just</span> <span
  m="3276120">concatenate</span> <span m="3276660">those</span> <span
  m="3276820">arrays.</span></p><p><span m="3277650">And</span> <span
  m="3277780">that's</span> <span m="3277930">why</span> <span
  m="3278070">you</span> <span m="3278150">can</span> <span
  m="3278270">do</span> <span m="3278380">this</span> <span
  m="3278600">in</span> <span m="3278960">place.</span> <span
  m="3279900">There's</span> <span m="3280120">no</span> <span
  m="3280250">issues.</span> <span m="3281260">You're</span> <span
  m="3282450">really</span> <span m="3282780">recursively</span> <span
  m="3283270">sorting</span> <span m="3284040">sub-arrays.</span> <span
  m="3284890">You</span> <span m="3285030">are</span> <span
  m="3285170">moving</span> <span m="3285480">things</span> <span
  m="3285720">around</span> <span m="3285960">a</span> <span
  m="3286000">little</span> <span m="3286200">bit</span> <span
  m="3286920">when</span> <span m="3287060">you</span> <span
  m="3287160">do</span> <span m="3287290">the</span> <span
  m="3287440">partition.</span> <span m="3288380">Obviously,</span> <span
  m="3288800">the</span> <span m="3288960">initial</span> <span
  m="3289390">array</span> <span m="3289640">may</span> <span
  m="3289800">have</span> <span m="3290070">all</span> <span
  m="3290360">the</span> <span m="3290430">elements.</span> <span
  m="3291550">You</span> <span m="3291690">may</span> <span
  m="3291800">pick</span> <span m="3292020">the</span> <span
  m="3292190">pivot</span> <span m="3292550">such</span> <span
  m="3292710">that</span> <span m="3292900">the</span> <span
  m="3292980">pivot</span> <span m="3293210">is</span> <span
  m="3293320">all</span> <span m="3293470">the</span> <span
  m="3293540">way</span> <span m="3294250">on</span> <span
  m="3294970">the</span> <span m="3295040">right-hand</span> <span
  m="3295380">side</span> <span m="3295670">in</span> <span
  m="3295740">the</span> <span m="3295820">sense</span> <span
  m="3296080">that</span> <span m="3296175">it's</span> <span
  m="3296270">a</span> <span m="3296310">very</span> <span
  m="3296510">large</span> <span m="3296830">element.</span> <span
  m="3297760">That</span> <span m="3298050">is</span> <span
  m="3298200">not</span> <span m="3298360">necessarily</span> <span
  m="3298830">a</span> <span m="3298880">good</span> <span
  m="3299070">thing.</span> <span m="3299900">I</span> <span
  m="3299965">will</span> <span m="3300030">talk</span> <span
  m="3300200">about</span> <span m="3300420">that.</span> <span
  m="3301250">But</span> <span m="3301860">if</span> <span
  m="3301970">you</span> <span m="3302080">pick</span> <span
  m="3303150">an</span> <span m="3303350">interesting</span> <span
  m="3303750">pivot</span> <span m="3304110">or</span> <span
  m="3304230">a</span> <span m="3304280">good</span> <span
  m="3304480">pivot,</span> <span m="3305290">you're</span> <span
  m="3305450">going</span> <span m="3305620">to</span> <span
  m="3305680">have</span> <span m="3305900">to</span> <span
  m="3306220">move</span> <span m="3306620">the</span> <span
  m="3306700">elements</span> <span m="3307190">in</span> <span
  m="3307330">the</span> <span m="3307500">array</span> <span
  m="3308860">to</span> <span m="3309160">the</span> <span
  m="3309250">left</span> <span m="3309520">of</span> <span
  m="3309600">the</span> <span m="3309690">pivot</span> <span
  m="3310190">if</span> <span m="3310270">they're</span> <span
  m="3310440">less</span> <span m="3310670">than</span> <span
  m="3310810">the</span> <span m="3310920">pivot,</span> <span
  m="3311610">and</span> <span m="3312050">you</span> <span
  m="3312180">got</span> <span m="3312260">to</span> <span
  m="3312320">move</span> <span m="3312550">the</span> <span
  m="3312620">elements</span> <span m="3312990">to</span> <span
  m="3313060">the</span> <span m="3313160">right</span> <span
  m="3313840">if</span> <span m="3314080">they're</span> <span
  m="3314270">to</span> <span m="3314360">the</span> <span
  m="3314440">right</span> <span m="3314630">of</span> <span
  m="3314710">the</span> <span m="3314800">pivot.</span></p><p><span
  m="3315870">Nontrivial</span> <span m="3316910">piece</span> <span
  m="3317180">of</span> <span m="3317300">code,</span> <span
  m="3317930">not</span> <span m="3318200">super</span> <span
  m="3318470">complicated,</span> <span m="3319490">but</span> <span
  m="3319680">you</span> <span m="3319790">can</span> <span
  m="3319900">look</span> <span m="3320070">at</span> <span
  m="3320240">the</span> <span m="3320820">CLRS</span> <span
  m="3322570">page</span> <span m="3322880">171</span> <span
  m="3324440">to</span> <span m="3324550">look</span> <span
  m="3324780">at</span> <span m="3325150">in-place</span> <span
  m="3326840">partitioning</span> <span m="3328280">where</span> <span
  m="3328740">you</span> <span m="3328910">don't</span> <span
  m="3329070">have</span> <span m="3329220">to</span> <span
  m="3329310">use</span> <span m="3330650">another</span> <span
  m="3331130">order</span> <span m="3331510">n</span> <span
  m="3331730">space</span> <span m="3332950">to</span> <span
  m="3333160">move</span> <span m="3333660">these</span> <span
  m="3333930">elements</span> <span m="3334340">around</span> <span
  m="3335410">such</span> <span m="3335700">that</span> <span
  m="3335870">they</span> <span m="3335970">look</span> <span
  m="3336260">like</span> <span m="3336470">that</span> <span
  m="3336660">picture</span> <span m="3337010">that</span> <span
  m="3337170">I</span> <span m="3337230">have</span> <span m="3337440">up</span>
  <span m="3337620">there,</span> <span m="3338470">starting</span> <span
  m="3338840">from</span> <span m="3339130">some</span> <span
  m="3339440">random</span> <span m="3340330">starting</span> <span
  m="3340710">point.</span></p><p><span m="3341700">So</span> <span
  m="3342180">you</span> <span m="3342350">want</span> <span
  m="3342500">to</span> <span m="3342540">have</span> <span
  m="3343980">the</span> <span m="3344410">picture</span> <span
  m="3344700">that</span> <span m="3344840">you</span> <span
  m="3344920">have</span> <span m="3345110">here,</span> <span
  m="3345580">and</span> <span m="3345710">you</span> <span
  m="3345790">need</span> <span m="3345940">to</span> <span
  m="3346000">go</span> <span m="3346230">from--</span> <span
  m="3347470">the</span> <span m="3347910">very</span> <span
  m="3348100">same</span> <span m="3348370">array,</span> <span
  m="3349400">it</span> <span m="3349730">needs</span> <span
  m="3349980">to--</span> <span m="3350800">and</span> <span
  m="3350995">x</span> <span m="3351190">is</span> <span
  m="3351270">somewhere</span> <span m="3351600">here,</span> <span
  m="3352030">and</span> <span m="3352160">you</span> <span
  m="3352320">got</span> <span m="3352480">x</span> <span
  m="3352650">plus</span> <span m="3352800">1</span> <span
  m="3353070">here</span> <span m="3353820">and</span> <span
  m="3354530">x</span> <span m="3355420">minus</span> <span m="3355720">1</span>
  <span m="3355950">here,</span> <span m="3356210">for</span> <span
  m="3356330">example.</span> <span m="3357300">And</span> <span
  m="3357630">you</span> <span m="3357800">need</span> <span
  m="3357950">to</span> <span m="3358010">move</span> <span
  m="3358210">those</span> <span m="3358410">things</span> <span
  m="3358620">around</span> <span m="3358990">so</span> <span
  m="3359090">they</span> <span m="3359200">look</span> <span
  m="3359370">like</span> <span m="3359570">L,</span> <span
  m="3359680">E,</span> <span m="3359915">and</span> <span m="3360150">G,</span>
  <span m="3360940">and</span> <span m="3362490">that's</span> <span
  m="3362710">something</span> <span m="3364340">that</span> <span
  m="3364460">you</span> <span m="3364550">can</span> <span
  m="3364650">do</span> <span m="3364780">in</span> <span
  m="3364940">place.</span> <span m="3365650">And</span> <span
  m="3365780">you</span> <span m="3365890">can</span> <span
  m="3366020">look</span> <span m="3366210">at</span> <span
  m="3366290">the</span> <span m="3366360">code</span> <span
  m="3366590">for</span> <span m="3366690">that</span> <span
  m="3367490">in</span> <span m="3367610">the</span> <span
  m="3367730">CLRS.</span> <span m="3368600">I</span> <span
  m="3369040">won't</span> <span m="3369230">cover</span> <span
  m="3369420">that</span> <span m="3369560">here.</span></p><p><span
  m="3371210">So</span> <span m="3371220">let's</span> <span
  m="3371410">look</span> <span m="3371550">at</span> <span m="3371860">a</span>
  <span m="3371970">bunch</span> <span m="3372200">of</span> <span
  m="3372250">different</span> <span m="3372470">variants</span> <span
  m="3372950">responding</span> <span m="3373450">to</span> <span
  m="3373560">quicksort.</span> <span m="3375170">And</span> <span
  m="3375720">there's</span> <span m="3375930">some</span> <span
  m="3376640">real</span> <span m="3376860">simple</span> <span
  m="3377170">ones.</span> <span m="3378030">Each</span> <span
  m="3378260">of</span> <span m="3378370">these,</span> <span
  m="3378930">we</span> <span m="3379070">can</span> <span
  m="3379200">knock</span> <span m="3379440">off</span> <span
  m="3380370">with</span> <span m="3380605">respect</span> <span
  m="3380840">to</span> <span m="3382200">complexity</span> <span
  m="3383880">and</span> <span m="3384200">runtime</span> <span
  m="3385960">fairly</span> <span m="3386400">easily</span> <span
  m="3387180">with</span> <span m="3387430">the</span> <span
  m="3387740">one</span> <span m="3387940">exception</span> <span
  m="3388450">that</span> <span m="3388600">we'll</span> <span
  m="3388750">spend</span> <span m="3388980">some</span> <span
  m="3389120">time</span> <span m="3389400">on,</span> <span
  m="3389900">which</span> <span m="3390080">is</span> <span
  m="3390210">the</span> <span m="3390310">Las</span> <span
  m="3390560">Vegas</span> <span m="3391410">quicksort.</span></p><p><span
  m="3392440">But</span> <span m="3392810">we'll</span> <span
  m="3393060">call</span> <span m="3393380">these</span> <span
  m="3394580">different</span> <span m="3394910">names.</span> <span
  m="3395950">Let's</span> <span m="3396040">talk</span> <span
  m="3396290">about</span> <span m="3396470">the</span> <span
  m="3396550">basic</span> <span m="3397060">quicksort,</span> <span
  m="3398360">which</span> <span m="3398620">is</span> <span
  m="3398760">also</span> <span m="3398930">a</span> <span
  m="3399100">useful</span> <span m="3399580">algorithm</span> <span
  m="3399980">that</span> <span m="3400520">people</span> <span
  m="3400860">use</span> <span m="3402540">in</span> <span
  m="3402680">practice.</span> <span m="3404220">And</span> <span
  m="3405040">amazingly,</span> <span m="3405760">this</span> <span
  m="3406190">algorithm</span> <span m="3407430">is</span> <span
  m="3408040">simply</span> <span m="3408720">something</span> <span
  m="3409080">that</span> <span m="3409270">says,</span> <span
  m="3410100">I'm</span> <span m="3410340">just</span> <span
  m="3410610">going</span> <span m="3410730">to</span> <span
  m="3411190">constantly</span> <span m="3411830">pivot</span> <span
  m="3412690">on</span> <span m="3413440">either</span> <span
  m="3413660">the</span> <span m="3413760">first</span> <span
  m="3414090">entry</span> <span m="3415060">or</span> <span
  m="3415230">the</span> <span m="3415340">last</span> <span
  m="3415630">entry.</span> <span m="3415960">So</span> <span
  m="3416080">I'm</span> <span m="3416150">going</span> <span
  m="3416240">to</span> <span m="3416290">pick</span> <span
  m="3416500">my</span> <span m="3416630">pivot</span> <span
  m="3416980">to</span> <span m="3417040">be</span> <span m="3417180">A1.</span>
  <span m="3418140">And</span> <span m="3419290">when</span> <span
  m="3419450">I</span> <span m="3419490">pick</span> <span m="3419670">my</span>
  <span m="3419780">pivot</span> <span m="3420050">to</span> <span
  m="3420120">be</span> <span m="3420280">A1,</span> <span
  m="3421060">it's</span> <span m="3421260">a</span> <span
  m="3421310">value</span> <span m="3421900">that</span> <span
  m="3422090">I'm</span> <span m="3422190">talking</span> <span
  m="3422480">about</span> <span m="3422690">here.</span> <span
  m="3423020">X</span> <span m="3423250">is</span> <span m="3423370">a</span>
  <span m="3423420">value.</span> <span m="3424470">It's</span> <span
  m="3424500">not</span> <span m="3424650">an</span> <span
  m="3424740">index.</span> <span m="3426090">The</span> <span
  m="3426410">A1</span> <span m="3426800">value--</span> <span
  m="3427580">maybe</span> <span m="3427830">that's</span> <span
  m="3428000">75.</span> <span m="3429110">Then</span> <span
  m="3429290">I'm</span> <span m="3429380">going</span> <span
  m="3429510">to</span> <span m="3429570">create</span> <span
  m="3429860">my</span> <span m="3430020">L</span> <span
  m="3430890">matrix</span> <span m="3431620">corresponding</span> <span
  m="3432110">to</span> <span m="3432180">this</span> <span
  m="3432490">pivot</span> <span m="3433310">where</span> <span
  m="3433530">all</span> <span m="3433710">the</span> <span
  m="3433790">entries</span> <span m="3434180">are</span> <span
  m="3434640">strictly</span> <span m="3435070">less</span> <span
  m="3435280">than</span> <span m="3435410">75,</span> <span
  m="3436490">and</span> <span m="3437890">G</span> <span
  m="3438070">would</span> <span m="3438580">be</span> <span
  m="3438690">strictly</span> <span m="3439050">greater</span> <span
  m="3439290">than</span> <span m="3439440">75.</span></p><p><span
  m="3440450">And</span> <span m="3440610">I</span> <span
  m="3440660">could</span> <span m="3440790">do</span> <span
  m="3440880">that</span> <span m="3441090">for</span> <span
  m="3441230">A1.</span> <span m="3441670">I</span> <span
  m="3441710">could</span> <span m="3441860">do</span> <span
  m="3441950">that</span> <span m="3442140">for</span> <span
  m="3442270">An.</span> <span m="3443160">So</span> <span
  m="3443300">remember</span> <span m="3443445">that</span> <span
  m="3443590">the</span> <span m="3443810">pivot</span> <span
  m="3444090">is</span> <span m="3444190">a</span> <span
  m="3444230">value.</span></p><p><span m="3448140">Now,</span> <span
  m="3449320">if</span> <span m="3449530">I</span> <span m="3449590">look</span>
  <span m="3449760">at</span> <span m="3449840">this,</span> <span
  m="3451260">I'm</span> <span m="3451430">going</span> <span
  m="3451570">to</span> <span m="3451640">do</span> <span m="3451790">the</span>
  <span m="3451920">partition,</span> <span m="3455430">given</span> <span
  m="3456860">x,</span> <span m="3457470">just</span> <span
  m="3457670">like</span> <span m="3457820">you</span> <span
  m="3457920">saw</span> <span m="3458130">there.</span> <span
  m="3459180">And</span> <span m="3459780">this</span> <span
  m="3459980">is</span> <span m="3460090">going</span> <span
  m="3460250">to</span> <span m="3460290">be</span> <span
  m="3460410">done</span> <span m="3460650">in</span> <span
  m="3460740">order</span> <span m="3461030">n</span> <span
  m="3461240">time.</span> <span m="3462280">It</span> <span
  m="3462400">makes</span> <span m="3462600">sense</span> <span
  m="3462860">that</span> <span m="3462980">you're</span> <span
  m="3463080">going</span> <span m="3463180">to</span> <span
  m="3463250">look</span> <span m="3463470">at</span> <span
  m="3463580">every</span> <span m="3463860">element,</span> <span
  m="3464890">and</span> <span m="3465260">you're</span> <span
  m="3465380">going</span> <span m="3465500">to</span> <span
  m="3465550">move</span> <span m="3465830">it</span> <span
  m="3466200">to</span> <span m="3466440">an</span> <span
  m="3466530">appropriate</span> <span m="3466930">location</span> <span
  m="3467390">to</span> <span m="3467480">the</span> <span
  m="3467580">left</span> <span m="3467920">of</span> <span
  m="3468640">x,</span> <span m="3469380">which</span> <span
  m="3469650">is</span> <span m="3469900">the</span> <span m="3470040">e</span>
  <span m="3470340">array,</span> <span m="3471070">or</span> <span
  m="3471260">to</span> <span m="3471350">the</span> <span
  m="3471480">right.</span> <span m="3472020">And</span> <span
  m="3472310">you'll</span> <span m="3472710">do</span> <span
  m="3472830">that.</span> <span m="3473110">That</span> <span
  m="3473370">takes</span> <span m="3473610">order</span> <span
  m="3473870">n</span> <span m="3474050">time.</span> <span
  m="3475200">And,</span> <span m="3475910">as</span> <span m="3476050">I</span>
  <span m="3476110">mentioned,</span> <span m="3477040">you</span> <span
  m="3477320">can</span> <span m="3477860">look</span> <span
  m="3477920">at</span> <span m="3478040">this</span> <span
  m="3478250">to</span> <span m="3478360">see</span> <span
  m="3479250">how</span> <span m="3480130">this</span> <span
  m="3480260">is</span> <span m="3480410">done</span> <span
  m="3482310">in</span> <span m="3482500">place.</span></p><p><span
  m="3484280">So</span> <span m="3485760">let's</span> <span
  m="3486150">take</span> <span m="3486290">a</span> <span
  m="3486330">look</span> <span m="3486510">at</span> <span
  m="3486640">the</span> <span m="3486730">analysis</span> <span
  m="3487470">of</span> <span m="3488640">basic</span> <span
  m="3489060">quicksort,</span> <span m="3490020">and</span> <span
  m="3490390">what</span> <span m="3490580">I'm</span> <span
  m="3490710">interested</span> <span m="3491090">in,</span> <span
  m="3491510">of</span> <span m="3491660">course,</span> <span
  m="3492000">is</span> <span m="3492030">the</span> <span
  m="3492130">worst</span> <span m="3492470">case</span> <span
  m="3492680">analysis.</span> <span m="3494010">And</span> <span
  m="3494530">I</span> <span m="3494680">asked</span> <span
  m="3494970">this</span> <span m="3495100">question,</span> <span
  m="3495810">I</span> <span m="3495930">think,</span> <span
  m="3496900">before</span> <span m="3498020">when</span> <span
  m="3498230">we</span> <span m="3498630">were</span> <span
  m="3498710">doing</span> <span m="3499380">median</span> <span
  m="3499840">finding,</span> <span m="3500910">but</span> <span
  m="3502680">what</span> <span m="3502930">is</span> <span
  m="3503070">the</span> <span m="3503180">worst</span> <span
  m="3503490">case</span> <span m="3503790">complexity</span> <span
  m="3504930">of</span> <span m="3505120">the</span> <span
  m="3505200">basic</span> <span m="3505710">quicksort</span> <span
  m="3506220">algorithm</span> <span m="3507080">that</span> <span
  m="3507290">chooses</span> <span m="3507720">the</span> <span
  m="3507840">pivot</span> <span m="3508310">as</span> <span
  m="3508530">A1?</span> <span m="3510800">What</span> <span
  m="3510930">is</span> <span m="3511000">the</span> <span
  m="3511070">complexity?</span></p><p><span m="3512022">[INTERPOSING
  VOICES]</span></p><p><span m="3513870">Order</span> <span m="3514080">n</span>
  <span m="3514240">square.</span> <span m="3515160">It's</span> <span
  m="3515370">order</span> <span m="3515610">n</span> <span
  m="3515740">square.</span> <span m="3516700">And</span> <span
  m="3517360">the</span> <span m="3517490">reason</span> <span
  m="3517780">for</span> <span m="3517910">that</span> <span
  m="3518640">is</span> <span m="3518930">that</span> <span
  m="3519950">you</span> <span m="3520130">may</span> <span
  m="3520340">have</span> <span m="3520880">an</span> <span
  m="3521170">array</span> <span m="3522370">that</span> <span
  m="3522720">is</span> <span m="3524150">sorted</span> <span
  m="3525380">or</span> <span m="3525630">reverse</span> <span
  m="3526050">sorted--</span> <span m="3526680">depending</span> <span
  m="3527110">on</span> <span m="3527920">whether</span> <span
  m="3528135">you're</span> <span m="3528350">picking</span> <span
  m="3528660">A1</span> <span m="3529270">or</span> <span m="3529730">An.</span>
  <span m="3530670">You</span> <span m="3530800">can</span> <span
  m="3530890">have</span> <span m="3531060">a</span> <span
  m="3531120">worst</span> <span m="3531380">case</span> <span
  m="3531570">situation</span> <span m="3532720">where</span> <span
  m="3533510">one</span> <span m="3533850">side,</span> <span
  m="3536680">L</span> <span m="3536827">or</span> <span m="3536975">G,</span>
  <span m="3538230">has</span> <span m="3539070">n</span> <span
  m="3539220">minus</span> <span m="3539580">1</span> <span
  m="3539960">elements,</span> <span m="3542710">and</span> <span
  m="3543010">the</span> <span m="3543080">other</span> <span
  m="3544510">has</span> <span m="3544810">0</span> <span
  m="3545090">elements.</span></p><p><span m="3546920">And</span> <span
  m="3547030">so</span> <span m="3547490">if</span> <span m="3547640">you</span>
  <span m="3547730">look</span> <span m="3547880">at</span> <span
  m="3548010">our</span> <span m="3548520">recurrence</span> <span
  m="3549700">associated</span> <span m="3550240">with</span> <span
  m="3550390">this,</span> <span m="3551075">you</span> <span
  m="3551360">could</span> <span m="3551470">have</span> <span
  m="3551770">Tn,</span> <span m="3552220">which</span> <span
  m="3552400">is</span> <span m="3552550">T0,</span> <span
  m="3553250">plus</span> <span m="3553530">T</span> <span m="3553860">n</span>
  <span m="3554010">minus</span> <span m="3554370">1</span> <span
  m="3555610">plus</span> <span m="3556060">theta</span> <span
  m="3556290">n.</span> <span m="3558040">And</span> <span
  m="3558240">why</span> <span m="3558450">do</span> <span m="3558570">I</span>
  <span m="3558650">have</span> <span m="3558800">a</span> <span
  m="3558830">theta</span> <span m="3559110">n</span> <span
  m="3559360">here?</span> <span m="3560160">Well,</span> <span
  m="3560280">remember</span> <span m="3560570">that</span> <span
  m="3561230">I</span> <span m="3561650">still</span> <span
  m="3561880">have</span> <span m="3562000">to</span> <span
  m="3562090">do</span> <span m="3562220">this</span> <span
  m="3562520">divide</span> <span m="3562800">step</span> <span
  m="3563140">or</span> <span m="3563230">this</span> <span
  m="3563430">partition</span> <span m="3563900">step</span> <span
  m="3565180">in</span> <span m="3565380">order</span> <span
  m="3565540">to</span> <span m="3565640">compute</span> <span
  m="3566610">this</span> <span m="3567030">up</span> <span
  m="3567420">unbalanced</span> <span m="3568120">array.</span> <span
  m="3568390">So</span> <span m="3568660">I</span> <span m="3568800">do</span>
  <span m="3569030">have</span> <span m="3569140">to</span> <span
  m="3569450">look</span> <span m="3569950">at</span> <span
  m="3570040">each</span> <span m="3570200">of</span> <span
  m="3570270">these</span> <span m="3570450">elements</span> <span
  m="3571190">and</span> <span m="3571400">do</span> <span
  m="3571510">the</span> <span m="3571610">comparison.</span> <span
  m="3573190">And</span> <span m="3573350">maybe</span> <span
  m="3573940">I</span> <span m="3574120">don't</span> <span
  m="3574400">actually</span> <span m="3574770">have</span> <span
  m="3574900">to</span> <span m="3574980">move</span> <span
  m="3575220">them,</span> <span m="3575800">but</span> <span
  m="3576130">I</span> <span m="3576290">have</span> <span m="3576440">to</span>
  <span m="3576480">do</span> <span m="3576590">the</span> <span
  m="3576700">comparison</span> <span m="3577330">with</span> <span
  m="3578170">the</span> <span m="3578230">A1,</span> <span
  m="3578980">which</span> <span m="3579140">is</span> <span
  m="3579240">the</span> <span m="3579320">x</span> <span
  m="3579690">pivot.</span></p><p><span m="3582380">And</span> <span
  m="3582550">in</span> <span m="3582650">some</span> <span
  m="3582860">cases,</span> <span m="3583310">if</span> <span
  m="3583860">I'm</span> <span m="3583960">doing</span> <span
  m="3584150">the</span> <span m="3584250">wrong</span> <span
  m="3584590">thing</span> <span m="3585280">reverse</span> <span
  m="3585740">sorted,</span> <span m="3586010">I</span> <span
  m="3586100">also</span> <span m="3586380">have</span> <span
  m="3586520">to</span> <span m="3586600">do</span> <span m="3586700">the</span>
  <span m="3586830">move.</span> <span m="3587630">Either</span> <span
  m="3587860">way,</span> <span m="3588330">I</span> <span
  m="3588440">have</span> <span m="3588580">a</span> <span
  m="3588620">theta</span> <span m="3588900">n</span> <span
  m="3589120">complexity</span> <span m="3590070">associated</span> <span
  m="3590600">with</span> <span m="3591530">the</span> <span
  m="3591690">divide</span> <span m="3592030">step.</span></p><p><span
  m="3593040">And</span> <span m="3593220">so</span> <span m="3593370">if</span>
  <span m="3593460">you</span> <span m="3593560">go</span> <span
  m="3593690">off</span> <span m="3593920">and</span> <span
  m="3594020">you</span> <span m="3594120">look</span> <span
  m="3594290">at</span> <span m="3594880">what</span> <span
  m="3595070">happens</span> <span m="3595420">with</span> <span
  m="3596930">this,</span> <span m="3597890">well,</span> <span
  m="3598260">you've</span> <span m="3598390">got</span> <span
  m="3599110">Tn</span> <span m="3600090">equals</span> <span
  m="3601070">Tn</span> <span m="3601420">minus</span> <span
  m="3601780">1</span> <span m="3602850">plus</span> <span
  m="3603240">theta</span> <span m="3603460">n,</span> <span
  m="3604650">which</span> <span m="3605060">ends</span> <span
  m="3605280">up</span> <span m="3606130">with</span> <span
  m="3606610">theta</span> <span m="3606770">n</span> <span
  m="3606980">square</span> <span m="3608280">complexity.</span></p><p><span
  m="3609300">So</span> <span m="3609880">a</span> <span m="3610030">hand</span>
  <span m="3610300">waved</span> <span m="3610500">a</span> <span
  m="3610540">little</span> <span m="3610730">bit</span> <span
  m="3611260">two</span> <span m="3611390">weeks</span> <span
  m="3611610">ago</span> <span m="3613440">for</span> <span m="3614010">a</span>
  <span m="3614090">similar</span> <span m="3614410">analysis,</span> <span
  m="3615320">but</span> <span m="3615440">you</span> <span
  m="3615550">can</span> <span m="3615670">kind</span> <span
  m="3615810">of</span> <span m="3615870">look</span> <span
  m="3616030">at</span> <span m="3616090">it</span> <span m="3616290">a</span>
  <span m="3616320">little</span> <span m="3616740">more</span> <span
  m="3617750">precisely</span> <span m="3618410">here</span> <span
  m="3618730">by</span> <span m="3618910">writing</span> <span
  m="3619350">the</span> <span m="3619990">actual</span> <span
  m="3620350">recurrence</span> <span m="3620950">out.</span> <span
  m="3621630">And</span> <span m="3621820">you</span> <span
  m="3621960">see</span> <span m="3622170">that</span> <span
  m="3622370">you</span> <span m="3622470">get</span> <span
  m="3622620">the</span> <span m="3622700">recurrence</span> <span
  m="3623180">Tn</span> <span m="3623460">equals</span> <span
  m="3623730">Tn</span> <span m="3623940">minus</span> <span
  m="3624190">1</span> <span m="3624450">plus</span> <span
  m="3624640">theta</span> <span m="3624840">n,</span> <span
  m="3625420">which</span> <span m="3625640">is</span> <span
  m="3625790">an</span> <span m="3626460">n</span> <span
  m="3626860">square</span> <span m="3628960">result,</span> <span
  m="3629520">or</span> <span m="3629870">the</span> <span
  m="3630420">solutions</span> <span m="3630720">is</span> <span
  m="3631020">n</span> <span m="3631150">square.</span> <span
  m="3632080">OK?</span></p><p><span m="3633010">So</span> <span
  m="3633800">basic</span> <span m="3634085">quicksort</span> <span
  m="3635060">look</span> <span m="3635250">bad.</span> <span
  m="3636100">It's</span> <span m="3636280">got</span> <span
  m="3636400">a</span> <span m="3636460">worst</span> <span
  m="3636710">case</span> <span m="3636910">complexity</span> <span
  m="3637400">of</span> <span m="3637490">theta</span> <span
  m="3637730">n</span> <span m="3637910">square.</span> <span
  m="3638940">It</span> <span m="3639120">works</span> <span
  m="3639380">well</span> <span m="3639660">on</span> <span
  m="3639760">random</span> <span m="3640150">inputs</span> <span
  m="3640440">and</span> <span m="3640540">practice.</span> <span
  m="3641130">And</span> <span m="3641450">it</span> <span
  m="3641550">turns</span> <span m="3641830">out</span> <span
  m="3642060">that</span> <span m="3642760">it's</span> <span
  m="3643360">a</span> <span m="3643450">fashion</span> <span
  m="3643850">of</span> <span m="3643960">algorithm,</span> <span
  m="3645060">partly</span> <span m="3645350">because</span> <span
  m="3645610">it's</span> <span m="3645760">in</span> <span
  m="3645950">place</span> <span m="3646380">and</span> <span
  m="3646480">it's</span> <span m="3646490">easy</span> <span
  m="3646740">to</span> <span m="3646830">code,</span> <span
  m="3648000">that</span> <span m="3648890">what</span> <span
  m="3649070">people</span> <span m="3649360">do</span> <span
  m="3650110">is</span> <span m="3650920">they</span> <span
  m="3651190">take</span> <span m="3651500">their</span> <span
  m="3651680">inputs,</span> <span m="3652230">and</span> <span
  m="3652370">they</span> <span m="3652460">shuffle</span> <span
  m="3652960">them.</span></p><p><span m="3655700">You</span> <span
  m="3656060">might</span> <span m="3656320">get</span> <span
  m="3656470">a</span> <span m="3656530">bad</span> <span
  m="3656930">input,</span> <span m="3657650">and</span> <span
  m="3657930">it</span> <span m="3658000">might</span> <span
  m="3658200">take</span> <span m="3658370">you</span> <span
  m="3658480">a</span> <span m="3658530">long</span> <span
  m="3658880">time</span> <span m="3659130">to</span> <span
  m="3659250">run.</span> <span m="3659890">But</span> <span
  m="3660000">if</span> <span m="3660065">you</span> <span
  m="3660130">take</span> <span m="3660370">an</span> <span
  m="3660450">input</span> <span m="3660810">and</span> <span
  m="3660930">you</span> <span m="3661010">shuffle</span> <span
  m="3661460">it</span> <span m="3661930">and</span> <span
  m="3662050">you</span> <span m="3662150">do</span> <span
  m="3662270">that</span> <span m="3662480">in</span> <span
  m="3662620">theta</span> <span m="3662890">n</span> <span
  m="3663110">time,</span> <span m="3664325">you</span> <span
  m="3664580">just</span> <span m="3664750">move</span> <span
  m="3664940">things</span> <span m="3665170">around</span> <span
  m="3665510">and</span> <span m="3665720">randomize</span> <span
  m="3666210">the</span> <span m="3666290">input.</span> <span
  m="3667000">Then</span> <span m="3667130">effectively,</span> <span
  m="3667375">you</span> <span m="3667620">have</span> <span
  m="3667790">a</span> <span m="3667830">random</span> <span
  m="3668180">input,</span> <span m="3668910">and</span> <span
  m="3669150">this</span> <span m="3669320">thing</span> <span
  m="3670100">works</span> <span m="3670620">pretty</span> <span
  m="3670810">well</span> <span m="3670980">in</span> <span
  m="3671070">practice.</span></p><p><span m="3672240">Now,</span> <span
  m="3672440">what</span> <span m="3672620">is</span> <span
  m="3672730">pretty</span> <span m="3672940">well?</span> <span
  m="3673760">Well,</span> <span m="3674160">we're</span> <span
  m="3674330">going</span> <span m="3674450">to</span> <span
  m="3674510">do</span> <span m="3674630">an</span> <span
  m="3674700">analysis</span> <span m="3675410">that</span> <span
  m="3675580">is</span> <span m="3675720">going</span> <span
  m="3675980">to</span> <span m="3677700">not</span> <span m="3677900">be</span>
  <span m="3677990">exactly</span> <span m="3679030">the</span> <span
  m="3679160">analysis</span> <span m="3679690">that</span> <span
  m="3679840">you'd</span> <span m="3679990">have</span> <span
  m="3680150">to</span> <span m="3680260">do</span> <span m="3680550">on</span>
  <span m="3680790">basic</span> <span m="3681300">quicksort</span> <span
  m="3682370">on</span> <span m="3683090">random</span> <span
  m="3683470">inputs,</span> <span m="3684220">but</span> <span
  m="3684360">essentially,</span> <span m="3684830">you</span> <span
  m="3684920">can</span> <span m="3685050">say</span> <span
  m="3685280">that</span> <span m="3686540">basic</span> <span
  m="3686960">quicksort</span> <span m="3687400">on</span> <span
  m="3687510">random</span> <span m="3687860">inputs</span> <span
  m="3688650">is</span> <span m="3688800">going</span> <span
  m="3688950">to</span> <span m="3689030">run</span> <span m="3689430">in</span>
  <span m="3690460">expected</span> <span m="3691380">theta</span> <span
  m="3691610">m</span> <span m="3691800">log</span> <span m="3692010">n</span>
  <span m="3692160">time.</span> <span m="3693060">OK?</span></p><p><span
  m="3694040">It's</span> <span m="3696720">something</span> <span
  m="3697010">that</span> <span m="3697330">you'll</span> <span
  m="3697500">see</span> <span m="3698430">a</span> <span
  m="3698530">little</span> <span m="3698750">bit</span> <span
  m="3698890">of</span> <span m="3699490">how</span> <span m="3699670">to</span>
  <span m="3699770">do</span> <span m="3699880">that</span> <span
  m="3700290">today</span> <span m="3700760">and</span> <span
  m="3701350">in</span> <span m="3701600">section,</span> <span
  m="3702440">perhaps</span> <span m="3702730">for</span> <span
  m="3703050">median</span> <span m="3703390">finding</span> <span
  m="3703730">in</span> <span m="3703800">section</span> <span
  m="3704150">tomorrow.</span> <span m="3705140">But</span> <span
  m="3705540">that's</span> <span m="3706490">all</span> <span
  m="3706780">I</span> <span m="3706970">wanted</span> <span
  m="3707150">to</span> <span m="3707250">say</span> <span
  m="3707460">about</span> <span m="3708030">basic</span> <span
  m="3708360">quicksort.</span></p><p><span m="3709390">It's</span> <span
  m="3709540">a</span> <span m="3709610">practical</span> <span
  m="3710090">algorithm.</span> <span m="3711200">It</span> <span
  m="3711400">does</span> <span m="3711650">require</span> <span
  m="3712220">a</span> <span m="3712260">little</span> <span
  m="3712440">bit</span> <span m="3712560">of</span> <span
  m="3712610">shuffling</span> <span m="3713220">up</span> <span
  m="3713410">at</span> <span m="3713490">the</span> <span
  m="3713560">beginning,</span> <span m="3714320">and</span> <span
  m="3714470">then</span> <span m="3714610">you</span> <span
  m="3714740">can</span> <span m="3714870">simply</span> <span
  m="3715290">use</span> <span m="3716150">the</span> <span
  m="3716280">pivot</span> <span m="3716720">A1.</span> <span
  m="3717610">And</span> <span m="3717740">because</span> <span
  m="3717980">you've</span> <span m="3718120">done</span> <span
  m="3718300">the</span> <span m="3718390">shuffle,</span> <span
  m="3719610">generally</span> <span m="3720150">you</span> <span
  m="3720270">get</span> <span m="3720530">balance</span> <span
  m="3720950">partitions.</span> <span m="3721690">The</span> <span
  m="3721910">L</span> <span m="3722060">and</span> <span m="3722210">G's</span>
  <span m="3722510">look</span> <span m="3722720">balanced,</span> <span
  m="3723660">and</span> <span m="3724220">you</span> <span
  m="3724320">don't</span> <span m="3724690">end</span> <span
  m="3724940">up</span> <span m="3725110">with</span> <span
  m="3725260">theta</span> <span m="3725400">n</span> <span
  m="3725610">square.</span> <span m="3726410">If</span> <span
  m="3726500">you</span> <span m="3726570">have</span> <span
  m="3726740">any</span> <span m="3726970">sort</span> <span
  m="3727190">of</span> <span m="3727270">balance</span> <span
  m="3728260">associated</span> <span m="3728840">with</span> <span
  m="3729100">the</span> <span m="3729230">two</span> <span
  m="3729380">partitions</span> <span m="3729930">L</span> <span
  m="3730117">and</span> <span m="3730305">G,</span> <span
  m="3730950">you're</span> <span m="3731100">going</span> <span
  m="3731200">to</span> <span m="3731260">get</span> <span m="3731540">a</span>
  <span m="3731830">nice</span> <span m="3732400">divide</span> <span
  m="3732660">and</span> <span m="3732760">conquer,</span> <span
  m="3733620">which</span> <span m="3733790">is</span> <span
  m="3733880">going</span> <span m="3734000">to</span> <span
  m="3734040">give</span> <span m="3734150">you</span> <span
  m="3734350">your</span> <span m="3734410">theta</span> <span
  m="3734660">n</span> <span m="3734935">log</span> <span m="3735072">n.</span>
  <span m="3735630">OK?</span> <span m="3736990">So</span> <span
  m="3737150">that's</span> <span m="3737660">basic</span> <span
  m="3737960">quicksort.</span></p><p><span m="3740050">There's</span> <span
  m="3741080">another</span> <span m="3741540">way</span> <span
  m="3742320">to</span> <span m="3742480">do</span> <span
  m="3742620">this,</span> <span m="3743030">and</span> <span
  m="3743240">so</span> <span m="3743370">this</span> <span
  m="3743520">is</span> <span m="3743660">a</span> <span
  m="3743730">question</span> <span m="3744040">for</span> <span
  m="3744120">you</span> <span m="3744250">guys.</span> <span
  m="3745060">Suppose</span> <span m="3745680">I</span> <span
  m="3745830">wanted</span> <span m="3746220">to</span> <span
  m="3746280">use</span> <span m="3746650">the</span> <span
  m="3746750">quicksort</span> <span m="3747350">strategy</span> <span
  m="3748770">and</span> <span m="3749020">get</span> <span m="3749330">a</span>
  <span m="3750230">worst</span> <span m="3750620">case</span> <span
  m="3751200">theta</span> <span m="3751520">n</span> <span
  m="3751740">log</span> <span m="3752070">n</span> <span
  m="3753040">through</span> <span m="3753360">an</span> <span
  m="3753450">intelligent</span> <span m="3755120">pivot</span> <span
  m="3755420">selection.</span> <span m="3756860">So</span> <span
  m="3757280">I</span> <span m="3757370">want</span> <span m="3757520">to</span>
  <span m="3757570">do</span> <span m="3757690">a</span> <span
  m="3757780">pivot</span> <span m="3758060">selection</span> <span
  m="3761060">intelligently.</span></p><p>&nbsp;</p><p><span
  m="3767280">So</span> <span m="3768310">how</span> <span
  m="3768770">would</span> <span m="3769010">I</span> <span
  m="3769080">get</span> <span m="3769610">under</span> <span
  m="3769890">the</span> <span m="3770030">structure</span> <span
  m="3770760">of</span> <span m="3770900">quicksort</span> <span
  m="3771680">that</span> <span m="3771830">you</span> <span
  m="3771940">see</span> <span m="3772200">up</span> <span
  m="3772370">there</span> <span m="3773790">on</span> <span
  m="3773970">the</span> <span m="3774050">left</span> <span
  m="3774350">there?</span> <span m="3775680">How</span> <span
  m="3776000">would</span> <span m="3776180">I</span> <span
  m="3776250">select</span> <span m="3777050">a</span> <span
  m="3777170">pivot</span> <span m="3778110">such</span> <span
  m="3778430">that</span> <span m="3778660">I</span> <span
  m="3778740">get</span> <span m="3779150">worse</span> <span
  m="3779680">case</span> <span m="3780660">theta</span> <span
  m="3780910">n</span> <span m="3781100">log</span> <span m="3781380">n</span>
  <span m="3782280">complexity?</span></p><p>&nbsp;</p><p><span
  m="3786574">Go</span> <span m="3786815">ahead.</span></p><p><span
  m="3788023">AUDIENCE: Linear median</span> <span
  m="3788506">finding.</span></p><p><span m="3789480">SRINIVAS DEVADAS:
  Linear</span> <span m="3789880">medium</span> <span
  m="3790200">finding.</span> <span m="3790700">Perfect.</span> <span
  m="3791280">That's</span> <span m="3791480">exactly</span> <span
  m="3791790">right.</span> <span m="3795000">There's</span> <span
  m="3795090">a</span> <span m="3795390">gentleman</span> <span
  m="3795720">at</span> <span m="3795760">the</span> <span
  m="3795850">back</span> <span m="3796480">who'd</span> <span
  m="3796760">raised</span> <span m="3796955">his</span> <span
  m="3797150">hand,</span> <span m="3797375">and</span> <span m="3797600">I
  decided</span> <span m="3797820">I'd</span> <span m="3798020">chicken</span>
  <span m="3798340">out.</span></p><p><span m="3801280">I</span> <span
  m="3801400">think</span> <span m="3801560">one</span> <span
  m="3801800">time</span> <span m="3802150">to</span> <span
  m="3802240">the</span> <span m="3802330">back</span> <span
  m="3802530">of</span> <span m="3802610">the</span> <span
  m="3802690">room</span> <span m="3802900">is</span> <span
  m="3803220">enough</span> <span m="3803510">for</span> <span
  m="3803670">a</span> <span m="3803720">day.</span> <span
  m="3805680">I'll</span> <span m="3805900">have</span> <span
  m="3806040">a</span> <span m="3806100">Frisbee</span> <span
  m="3806470">left.</span> <span m="3806710">Hopefully</span> <span
  m="3807280">you</span> <span m="3807470">can</span> <span
  m="3807540">get</span> <span m="3807690">one.</span></p><p><span
  m="3810190">So</span> <span m="3811260">the</span> <span
  m="3811410">intelligence</span> <span m="3812000">pivots</span> <span
  m="3812500">selection</span> <span m="3812930">algorithm</span> <span
  m="3813690">is</span> <span m="3813900">the</span> <span
  m="3813990">median</span> <span m="3814340">finding</span> <span
  m="3814730">algorithm</span> <span m="3815510">because</span> <span
  m="3815700">that's</span> <span m="3816250">going</span> <span
  m="3816510">to</span> <span m="3816610">guarantee</span> <span
  m="3817360">me</span> <span m="3818270">that</span> <span
  m="3818630">I'm</span> <span m="3818800">going</span> <span
  m="3818890">to</span> <span m="3818930">get</span> <span
  m="3819110">balanced</span> <span m="3819490">partitions.</span></p><p><span
  m="3820410">If</span> <span m="3820540">you</span> <span
  m="3820660">tell</span> <span m="3820920">me</span> <span
  m="3821130">that</span> <span m="3821520">A1--</span> <span
  m="3822680">and</span> <span m="3822810">remember,</span> <span
  m="3823080">we're</span> <span m="3823200">talking</span> <span
  m="3823470">medians</span> <span m="3823970">of</span> <span
  m="3824150">values--</span> <span m="3825080">so</span> <span
  m="3825125">don't</span> <span m="3825170">get</span> <span
  m="3825470">confused</span> <span m="3825890">with</span> <span
  m="3826010">indices.</span> <span m="3826650">When</span> <span
  m="3827020">I</span> <span m="3827180">say</span> <span
  m="3827350">something</span> <span m="3827630">is</span> <span
  m="3827730">a</span> <span m="3827760">median,</span> <span
  m="3828380">I'm</span> <span m="3828530">talking</span> <span
  m="3828770">about</span> <span m="3828950">the</span> <span
  m="3829020">value,</span> <span m="3830010">that</span> <span
  m="3831410">given</span> <span m="3831820">its</span> <span
  m="3832000">value,</span> <span m="3832860">there</span> <span
  m="3832970">are</span> <span m="3833080">all</span> <span
  m="3833320">these</span> <span m="3833490">other</span> <span
  m="3833800">n</span> <span m="3833970">over</span> <span m="3834180">2</span>
  <span m="3835140">values</span> <span m="3835830">that</span> <span
  m="3835950">are</span> <span m="3836030">less</span> <span
  m="3836270">than</span> <span m="3836400">it,</span> <span
  m="3837650">roughly</span> <span m="3837800">speaking</span> <span
  m="3838190">and</span> <span m="3838310">n</span> <span
  m="3838420">over</span> <span m="3838610">2</span> <span
  m="3838750">values</span> <span m="3839180">that</span> <span
  m="3839290">are</span> <span m="3839390">greater</span> <span
  m="3839620">than</span> <span m="3839810">it.</span></p><p><span
  m="3841630">And</span> <span m="3841840">so</span> <span
  m="3842560">A1,</span> <span m="3843030">I</span> <span
  m="3843090">have</span> <span m="3843240">no</span> <span
  m="3843360">idea</span> <span m="3843890">whether</span> <span
  m="3844130">it's</span> <span m="3844640">large</span> <span
  m="3844940">or</span> <span m="3845040">small.</span> <span
  m="3846740">So</span> <span m="3846920">I</span> <span
  m="3847010">couldn't</span> <span m="3847200">say</span> <span
  m="3847330">much</span> <span m="3847550">about</span> <span
  m="3847780">it.</span> <span m="3848280">But</span> <span
  m="3848350">if</span> <span m="3848440">I</span> <span m="3848470">want</span>
  <span m="3848630">to</span> <span m="3848670">be</span> <span
  m="3848790">worst</span> <span m="3849140">case</span> <span
  m="3849590">and</span> <span m="3849790">I</span> <span
  m="3849820">want</span> <span m="3850000">to</span> <span
  m="3850050">guarantee</span> <span m="3851300">that</span> <span
  m="3852130">I</span> <span m="3852280">have</span> <span
  m="3852590">balanced</span> <span m="3853120">partitions,</span> <span
  m="3854150">I</span> <span m="3854270">can</span> <span
  m="3854410">choose</span> <span m="3854730">the</span> <span
  m="3854820">median.</span> <span m="3855570">And</span> <span
  m="3855700">if</span> <span m="3855780">I</span> <span
  m="3855840">choose</span> <span m="3856090">the</span> <span
  m="3856170">median</span> <span m="3856600">every</span> <span
  m="3856840">time,</span> <span m="3857500">I'm</span> <span
  m="3857630">going</span> <span m="3857720">to</span> <span
  m="3857760">get</span> <span m="3857920">perfectly</span> <span
  m="3858350">balanced</span> <span m="3858700">partitions.</span> <span
  m="3860060">They're</span> <span m="3860210">going</span> <span
  m="3860310">to</span> <span m="3860390">half</span> <span
  m="3860870">on</span> <span m="3861060">the</span> <span
  m="3861120">left</span> <span m="3861320">and</span> <span
  m="3861520">half</span> <span m="3861750">on</span> <span
  m="3861830">the</span> <span
  m="3861900">right.</span></p><p>&nbsp;</p><p><span m="3864630">And</span>
  <span m="3864770">we</span> <span m="3864860">do</span> <span
  m="3865110">know</span> <span m="3865285">a</span> <span
  m="3865460">way</span> <span m="3866590">of</span> <span
  m="3866900">getting</span> <span m="3867450">balanced</span> <span
  m="3867990">partitions.</span> <span m="3869180">We</span> <span
  m="3869260">can</span> <span m="3869370">guarantee</span> <span
  m="3869890">that</span> <span m="3873360">balanced</span> <span
  m="3875610">L</span> <span m="3875815">and</span> <span m="3876020">G</span>
  <span m="3877580">using</span> <span m="3878590">median</span> <span
  m="3879090">selection</span> <span m="3884470">that</span> <span
  m="3884660">runs</span> <span m="3884930">in</span> <span
  m="3885250">theta</span> <span m="3885440">n</span> <span
  m="3885710">time.</span> <span m="3886800">And</span> <span
  m="3887040">we</span> <span m="3887130">showed</span> <span
  m="3887450">that</span> <span m="3888120">a</span> <span
  m="3888230">couple</span> <span m="3888345">of</span> <span
  m="3888460">weeks</span> <span
  m="3888700">ago.</span></p><p>&nbsp;</p><p><span m="3891570">Now,</span> <span
  m="3891710">that</span> <span m="3891900">median</span> <span
  m="3892250">selection</span> <span m="3892460">algorithm</span> <span
  m="3892850">was</span> <span m="3892980">nontrivial.</span> <span
  m="3894330">OK?</span> <span m="3895710">It</span> <span
  m="3896230">had</span> <span m="3896450">this</span> <span
  m="3896710">weird</span> <span m="3897250">thing</span> <span
  m="3897570">where</span> <span m="3897770">you</span> <span
  m="3897920">broke</span> <span m="3898210">things</span> <span
  m="3898440">up</span> <span m="3898610">into</span> <span
  m="3898880">five</span> <span m="3902230">sub-arrays</span> <span
  m="3902720">of</span> <span m="3902810">size</span> <span
  m="3903150">5,</span> <span m="3903580">and</span> <span
  m="3903650">you</span> <span m="3903750">found</span> <span
  m="3903950">a</span> <span m="3904010">median</span> <span
  m="3904310">of</span> <span m="3904410">medians</span> <span
  m="3905130">et</span> <span m="3905330">cetera,</span> <span
  m="3905630">et</span> <span m="3905810">cetera.</span> <span
  m="3906370">But</span> <span m="3906510">we</span> <span
  m="3906790">argued</span> <span m="3907270">that</span> <span
  m="3907420">the</span> <span m="3907490">whole</span> <span
  m="3907685">thing</span> <span m="3907880">ran</span> <span
  m="3908260">in</span> <span m="3908345">theta</span> <span
  m="3908430">n</span> <span m="3908690">time,</span> <span
  m="3909360">which</span> <span m="3909500">is</span> <span
  m="3909600">important.</span></p><p><span m="3910860">And</span> <span
  m="3911060">so</span> <span m="3911220">now,</span> <span
  m="3911355">if</span> <span m="3911490">you</span> <span
  m="3911690">look</span> <span m="3911890">at</span> <span
  m="3912640">what</span> <span m="3912770">happens</span> <span
  m="3913050">with</span> <span m="3913220">quicksort</span> <span
  m="3914550">and</span> <span m="3914760">if</span> <span m="3914860">I</span>
  <span m="3914930">write</span> <span m="3915170">the</span> <span
  m="3915740">recurrence</span> <span m="3916170">for</span> <span
  m="3916310">quicksort,</span> <span m="3917330">thanks</span> <span
  m="3917790">to</span> <span m="3918360">selecting</span> <span
  m="3918860">a</span> <span m="3918900">median,</span> <span
  m="3919900">I</span> <span m="3920050">effectively</span> <span
  m="3920520">have</span> <span m="3920800">balanced</span> <span
  m="3921240">partitions.</span> <span m="3921850">So</span> <span
  m="3921890">I</span> <span m="3921980">have</span> <span m="3922120">2T</span>
  <span m="3922640">n</span> <span m="3922780">over</span> <span
  m="3922980">2.</span></p><p><span m="3923700">This</span> <span
  m="3923870">is</span> <span m="3926680">thanks</span> <span
  m="3927110">to</span> <span m="3928610">the</span> <span
  m="3930930">median</span> <span m="3931220">based</span> <span
  m="3931990">pivoting.</span> <span m="3933860">That's</span> <span
  m="3934030">important.</span> <span m="3936150">Otherwise</span> <span
  m="3936510">it</span> <span m="3936590">won't</span> <span
  m="3936760">work.</span></p><p><span m="3938040">And</span> <span
  m="3938210">then,</span> <span m="3938910">just</span> <span
  m="3939130">to</span> <span m="3939190">be</span> <span
  m="3939290">very</span> <span m="3940570">clear</span> <span
  m="3940930">here,</span> <span m="3942510">I</span> <span
  m="3942600">got</span> <span m="3943680">two</span> <span
  m="3944090">theta</span> <span m="3944370">n</span> <span
  m="3945330">terms.</span> <span m="3946460">OK?</span></p><p><span
  m="3947740">The</span> <span m="3947850">first</span> <span
  m="3948210">theta</span> <span m="3948430">n</span> <span
  m="3948690">term</span> <span m="3949900">is</span> <span
  m="3950290">the</span> <span m="3950590">recursive</span> <span
  m="3952750">median</span> <span
  m="3953220">selection.</span></p><p>&nbsp;</p><p><span m="3959440">And</span>
  <span m="3959630">then</span> <span m="3959730">the</span> <span
  m="3959830">second</span> <span m="3960180">theta</span> <span
  m="3960300">n</span> <span m="3960520">term</span> <span m="3960910">is</span>
  <span m="3961070">of</span> <span m="3961160">course</span> <span
  m="3961910">the</span> <span m="3962050">divide,</span> <span
  m="3962510">or</span> <span m="3962660">partition.</span></p><p><span
  m="3966860">But</span> <span m="3966940">it's</span> <span
  m="3967010">important</span> <span m="3967440">to</span> <span
  m="3967780">realize</span> <span m="3968500">that</span> <span
  m="3968660">now</span> <span m="3969760">I</span> <span
  m="3969880">have</span> <span m="3969970">a</span> <span
  m="3970010">lot</span> <span m="3970320">of</span> <span
  m="3970390">work</span> <span m="3970900">in</span> <span
  m="3971030">the</span> <span m="3971140">divide.</span> <span
  m="3972390">A</span> <span m="3972450">lot</span> <span m="3972640">of</span>
  <span m="3972710">work.</span> <span m="3973000">I</span> <span
  m="3973110">have</span> <span m="3973260">to</span> <span
  m="3973330">do</span> <span m="3973450">an</span> <span
  m="3973530">intelligent</span> <span m="3974000">selection</span> <span
  m="3974490">using</span> <span m="3974790">this</span> <span
  m="3974960">recursive</span> <span m="3975860">median</span> <span
  m="3976180">finding</span> <span m="3976540">algorithm.</span> <span
  m="3977380">And</span> <span m="3977750">I</span> <span
  m="3977820">also</span> <span m="3978140">have</span> <span
  m="3978280">to</span> <span m="3978370">do</span> <span m="3978470">the</span>
  <span m="3978570">moves</span> <span m="3979430">comparing</span> <span
  m="3980020">and</span> <span m="3980140">then</span> <span
  m="3980280">generate</span> <span m="3980760">and</span> <span
  m="3981680">the</span> <span m="3981720">G</span> <span
  m="3981760">arrays.</span> <span m="3982880">OK?</span></p><p><span
  m="3983110">So</span> <span m="3983230">those</span> <span
  m="3983440">are</span> <span m="3983480">the</span> <span
  m="3983600">two</span> <span m="3983730">theta</span> <span
  m="3983970">n's.</span> <span m="3984210">They're</span> <span
  m="3984300">obviously</span> <span m="3984610">theta</span> <span
  m="3984810">n,</span> <span m="3985480">but</span> <span m="3985770">I</span>
  <span m="3985890">wanted</span> <span m="3986140">to</span> <span
  m="3986210">make</span> <span m="3986390">it</span> <span
  m="3986490">clear</span> <span m="3986770">that</span> <span
  m="3986930">there's</span> <span m="3987130">two</span> <span
  m="3987270">things</span> <span m="3987530">going</span> <span
  m="3987720">on</span> <span m="3987880">here.</span> <span
  m="3988830">And</span> <span m="3988940">we</span> <span
  m="3989060">all</span> <span m="3989190">know</span> <span
  m="3989390">that</span> <span m="3989540">that</span> <span
  m="3989710">is</span> <span m="3989830">theta</span> <span
  m="3990020">n</span> <span m="3990220">log</span> <span m="3990460">n</span>
  <span m="3991060">worst</span> <span m="3991350">case.</span> <span
  m="3991820">All</span> <span m="3992240">right?</span></p><p><span
  m="3992540">So</span> <span m="3992840">there</span> <span
  m="3993050">is</span> <span m="3993150">a</span> <span m="3993220">way</span>
  <span m="3993960">of</span> <span m="3994110">using</span> <span
  m="3994400">the</span> <span m="3994500">quicksort</span> <span
  m="3995430">structure</span> <span m="3996300">template</span> <span
  m="3997060">and</span> <span m="3997240">getting</span> <span
  m="3997410">a</span> <span m="3997570">theta</span> <span m="3997750">n</span>
  <span m="3998000">log</span> <span m="3998270">n</span> <span
  m="3998780">worst</span> <span m="3999110">case</span> <span
  m="3999470">algorithm,</span> <span m="4000440">which</span> <span
  m="4000640">doesn't</span> <span m="4000890">work</span> <span
  m="4001540">in</span> <span m="4001680">practice</span> <span
  m="4002650">because</span> <span m="4003110">it's</span> <span
  m="4003280">just</span> <span m="4003510">too</span> <span
  m="4003700">complicated.</span> <span m="4005310">What's</span> <span
  m="4005490">going</span> <span m="4005690">on</span> <span
  m="4005860">here</span> <span m="4006250">is</span> <span
  m="4009210">at</span> <span m="4009370">every</span> <span
  m="4009610">level</span> <span m="4009830">of</span> <span
  m="4009900">recursion,</span> <span m="4010400">you're</span> <span
  m="4011720">calling</span> <span m="4012060">another</span> <span
  m="4012560">recursive</span> <span m="4013100">algorithm</span> <span
  m="4014090">to</span> <span m="4014190">find</span> <span
  m="4014480">the</span> <span m="4014540">median.</span> <span
  m="4015630">So</span> <span m="4015890">if</span> <span m="4016010">you</span>
  <span m="4016110">go</span> <span m="4016440">code</span> <span
  m="4016680">this</span> <span m="4016850">up,</span> <span
  m="4017650">it</span> <span m="4017790">loses</span> <span
  m="4018170">to</span> <span m="4018270">merge</span> <span
  m="4018650">sort</span> <span m="4019430">in</span> <span
  m="4019590">practice.</span> <span m="4020170">You</span> <span
  m="4020270">can</span> <span m="4020360">do</span> <span
  m="4020480">all</span> <span m="4020670">of</span> <span
  m="4020770">this</span> <span m="4020930">in</span> <span
  m="4021130">place,</span> <span m="4022060">but</span> <span
  m="4022210">because</span> <span m="4022450">of</span> <span
  m="4022540">all</span> <span m="4022710">these</span> <span
  m="4022880">recursive</span> <span m="4023320">calls,</span> <span
  m="4024280">it</span> <span m="4024430">doesn't</span> <span
  m="4024720">work</span> <span m="4025080">well</span> <span
  m="4025430">in</span> <span m="4025580">practice.</span> <span
  m="4026750">But</span> <span m="4026820">it's</span> <span
  m="4026890">good</span> <span m="4027030">to</span> <span
  m="4027130">know.</span></p><p><span m="4027750">And</span> <span
  m="4027910">so</span> <span m="4028070">this</span> <span
  m="4028240">is</span> <span m="4028380">a</span> <span m="4028730">good</span>
  <span m="4028870">example</span> <span m="4029340">I</span> <span
  m="4029410">think,</span> <span m="4030560">which</span> <span
  m="4030760">we</span> <span m="4030860">don't</span> <span
  m="4031050">do</span> <span m="4031540">a</span> <span m="4031590">lot</span>
  <span m="4031920">of</span> <span m="4032075">in</span> <span
  m="4032230">046,</span> <span m="4033010">but</span> <span
  m="4033510">you</span> <span m="4033650">get</span> <span m="4033780">a</span>
  <span m="4033830">sense</span> <span m="4034210">of</span> <span
  m="4034790">the</span> <span m="4034900">difference</span> <span
  m="4035380">between</span> <span m="4036610">asymptotic</span> <span
  m="4037150">complexity</span> <span m="4038040">and</span> <span
  m="4038390">performance.</span></p><p><span m="4039640">So</span> <span
  m="4039930">while</span> <span m="4041920">the</span> <span
  m="4042230">median</span> <span m="4042650">finding</span> <span
  m="4043030">algorithm</span> <span m="4043450">has</span> <span
  m="4043690">better</span> <span m="4044280">asymptotic</span> <span
  m="4044590">complexity</span> <span m="4045140">worst</span> <span
  m="4045450">case,</span> <span m="4046340">it</span> <span
  m="4046490">really</span> <span m="4046700">loses</span> <span
  m="4047660">in</span> <span m="4047820">practice</span> <span
  m="4048360">to</span> <span m="4048440">the</span> <span
  m="4048540">basic</span> <span m="4049010">quicksort,</span> <span
  m="4050130">which</span> <span m="4050440">essentially</span> <span
  m="4051390">is</span> <span m="4051500">a</span> <span m="4051540">bit</span>
  <span m="4051660">of</span> <span m="4051740">a</span> <span
  m="4051790">hack,</span> <span m="4052550">where</span> <span
  m="4052750">you</span> <span m="4052920">take</span> <span
  m="4053160">an</span> <span m="4053260">input</span> <span
  m="4053720">and</span> <span m="4053990">you</span> <span
  m="4054520">randomize</span> <span m="4055040">the</span> <span
  m="4055110">input</span> <span m="4055840">and</span> <span
  m="4056080">you</span> <span m="4056500">run</span> <span
  m="4056720">it</span> <span m="4057380">with</span> <span
  m="4057490">A1</span> <span m="4058110">as</span> <span m="4058290">the</span>
  <span m="4058380">pivot</span> <span m="4059050">or</span> <span
  m="4059390">An</span> <span m="4059465">at</span> <span m="4059490">the</span>
  <span m="4059580">pivot.</span></p><p>&nbsp;</p><p><span m="4064250">Is</span>
  <span m="4064410">there</span> <span m="4064485">a</span> <span
  m="4064560">different</span> <span m="4064860">way</span> <span
  m="4066020">that</span> <span m="4066920">you</span> <span
  m="4067090">can</span> <span m="4067460">actually</span> <span
  m="4067830">get</span> <span m="4068160">to</span> <span m="4068975">a</span>
  <span m="4069430">Las</span> <span m="4069740">Vegas</span> <span
  m="4070060">algorithm?</span> <span m="4071220">And</span> <span
  m="4071350">it</span> <span m="4071430">turns</span> <span
  m="4071660">out</span> <span m="4071790">randomized</span> <span
  m="4072280">quicksort</span> <span m="4073290">is</span> <span
  m="4073450">something</span> <span m="4073820">that</span> <span
  m="4075320">you</span> <span m="4076460">can</span> <span
  m="4076600">build</span> <span m="4076930">and</span> <span
  m="4077020">use,</span> <span m="4077590">which</span> <span
  m="4078080">is</span> <span m="4078150">a</span> <span m="4078200">bit</span>
  <span m="4078370">different</span> <span m="4078700">from</span> <span
  m="4078990">basic</span> <span m="4079400">quicksort</span> <span
  m="4079710">and</span> <span m="4080500">certainly</span> <span
  m="4081060">different</span> <span m="4081390">from</span> <span
  m="4081630">median</span> <span m="4082000">finding.</span> <span
  m="4082980">But</span> <span m="4083040">it</span> <span
  m="4083100">kind</span> <span m="4083160">of</span> <span
  m="4083200">has</span> <span m="4083400">a</span> <span
  m="4083460">little</span> <span m="4083610">bit</span> <span
  m="4083720">in</span> <span m="4083820">common</span> <span
  m="4084180">with</span> <span m="4084340">them,</span> <span
  m="4084910">and</span> <span m="4085150">it's</span> <span
  m="4085370">our</span> <span m="4086280">example</span> <span
  m="4086720">of</span> <span m="4086830">a</span> <span
  m="4086890">Vegas</span> <span m="4087300">algorithm.</span></p><p><span
  m="4088960">So</span> <span m="4089330">what</span> <span
  m="4089450">happens</span> <span m="4089700">at</span> <span
  m="4089790">randomized</span> <span m="4090270">quicksort?</span> <span
  m="4091510">An</span> <span m="4091950">x</span> <span m="4092230">is</span>
  <span m="4092430">chosen</span> <span m="4094250">at</span> <span
  m="4094430">random</span> <span m="4096229">from</span> <span
  m="4096600">the</span> <span m="4096870">array,</span> <span
  m="4097270">A.</span></p><p><span m="4098220">So</span> <span
  m="4098340">you're</span> <span m="4098450">not</span> <span
  m="4098640">choosing</span> <span m="4099560">A1</span> <span
  m="4100600">or</span> <span m="4100737">An.</span> <span
  m="4101359">You</span> <span m="4101520">might</span> <span
  m="4101710">just</span> <span m="4101990">flip--</span> <span
  m="4103180">well,</span> <span m="4103439">effectively</span> <span
  m="4103979">an</span> <span m="4104609">n-sided</span> <span
  m="4105290">die--</span> <span m="4106160">and</span> <span
  m="4107040">pick</span> <span m="4107550">a</span> <span
  m="4107670">particular</span> <span m="4108120">index,</span> <span
  m="4109080">and</span> <span m="4109130">then</span> <span
  m="4109250">go</span> <span m="4109420">grab</span> <span
  m="4109760">the</span> <span m="4110569">pivot</span> <span
  m="4110990">corresponding</span> <span m="4111560">to</span> <span
  m="4111810">the</span> <span m="4111939">value</span> <span
  m="4112620">at</span> <span m="4112779">that</span> <span
  m="4113029">index.</span> <span m="4115000">You're</span> <span
  m="4115080">not</span> <span m="4115240">going</span> <span
  m="4115359">to</span> <span m="4115479">randomize</span> <span
  m="4116000">over</span> <span m="4116220">values.</span> <span
  m="4117100">You</span> <span m="4117200">don't</span> <span
  m="4117319">know</span> <span m="4117430">what</span> <span
  m="4117580">these</span> <span m="4117859">values</span> <span
  m="4118319">are,</span> <span m="4118990">but</span> <span
  m="4119270">you</span> <span m="4119380">can</span> <span
  m="4119880">pick</span> <span m="4120770">a</span> <span
  m="4120859">random</span> <span m="4121260">index</span> <span
  m="4122109">and</span> <span m="4122240">then</span> <span
  m="4122380">grab</span> <span m="4122620">the</span> <span
  m="4122710">pivot</span> <span m="4123040">based</span> <span
  m="4123350">on</span> <span m="4123470">the</span> <span
  m="4123529">value</span> <span m="4123939">at</span> <span
  m="4124200">that</span> <span m="4124370">index.</span></p><p><span
  m="4125899">And</span> <span m="4126080">so</span> <span m="4126199">at</span>
  <span m="4126319">each</span> <span m="4126580">recursion,</span> <span
  m="4127050">a</span> <span m="4127109">random</span> <span
  m="4127410">choice</span> <span m="4127729">is</span> <span
  m="4127880">made.</span> <span m="4128920">And</span> <span
  m="4129790">the</span> <span m="4129920">expected</span> <span
  m="4130580">time--</span> <span m="4131359">so</span> <span
  m="4131479">now</span> <span m="4131590">we're</span> <span
  m="4131676">saying</span> <span m="4132000">something</span> <span
  m="4132279">different.</span> <span m="4132649">We're</span> <span
  m="4132770">making</span> <span m="4134479">a</span> <span
  m="4134550">stronger</span> <span m="4135029">theoretical</span> <span
  m="4135630">statement</span> <span m="4136740">that</span> <span
  m="4136930">the</span> <span m="4137010">expected</span> <span
  m="4137600">time,</span> <span m="4137970">when</span> <span
  m="4138100">you</span> <span m="4138200">do</span> <span
  m="4138370">this,</span> <span m="4140899">for</span> <span
  m="4141149">all</span> <span m="4141770">inputs</span> <span
  m="4143510">arrays</span> <span m="4144069">A</span> <span
  m="4145120">is</span> <span m="4145370">order</span> <span
  m="4146020">n</span> <span m="4146170">log</span> <span
  m="4146420">n.</span></p><p><span m="4147229">And</span> <span
  m="4147510">so</span> <span m="4147729">now,</span> <span
  m="4148330">this</span> <span m="4148510">is</span> <span
  m="4148660">not</span> <span m="4148830">worst</span> <span
  m="4149080">case</span> <span m="4149330">time.</span> <span
  m="4149990">It's</span> <span m="4150170">expected</span> <span
  m="4150790">time.</span> <span m="4151649">So</span> <span
  m="4151800">this</span> <span m="4152010">is</span> <span
  m="4152160">going</span> <span m="4152270">to</span> <span
  m="4152319">be</span> <span m="4152460">our</span> <span
  m="4152560">analysis</span> <span m="4154640">in</span> <span
  m="4155100">the</span> <span m="4155270">last</span> <span
  m="4155510">few</span> <span m="4155640">minutes</span> <span
  m="4155910">here</span> <span m="4156840">to</span> <span
  m="4158560">analyze</span> <span m="4159430">not</span> <span
  m="4160180">randomized</span> <span m="4160710">quicksort,</span> <span
  m="4162189">but</span> <span m="4162890">a</span> <span
  m="4163080">slight</span> <span m="4163640">variant</span> <span
  m="4164080">of</span> <span m="4164170">randomized</span> <span
  m="4164630">quicksort</span> <span m="4165750">that</span> <span
  m="4166080">is</span> <span m="4166220">going</span> <span
  m="4166370">to</span> <span m="4166770">show</span> <span
  m="4167029">you</span> <span m="4167210">that</span> <span
  m="4167399">you</span> <span m="4167500">can</span> <span
  m="4167640">run</span> <span m="4169850">randomize</span> <span
  m="4170340">quicksort</span> <span m="4170750">and</span> <span
  m="4170850">this</span> <span m="4171000">variant</span> <span
  m="4171399">in</span> <span m="4171840">order</span> <span
  m="4172109">n</span> <span m="4172260">log</span> <span m="4172479">n</span>
  <span m="4172630">time.</span></p><p><span m="4173640">So</span> <span
  m="4174750">not</span> <span m="4174899">quite</span> <span
  m="4175080">sure</span> <span m="4175260">what's</span> <span
  m="4175336">going</span> <span m="4175413">to</span> <span
  m="4175490">happen</span> <span m="4175690">in</span> <span
  m="4175890">section</span> <span m="4176229">tomorrow,</span> <span
  m="4177420">but</span> <span m="4177649">the</span> <span
  m="4177880">full</span> <span m="4178149">analysis</span> <span
  m="4180010">is</span> <span m="4180240">in</span> <span m="4180350">the</span>
  <span m="4180439">book.</span> <span m="4181580">You</span> <span
  m="4182649">should</span> <span m="4182859">read</span> <span
  m="4183060">it.</span> <span m="4184399">As</span> <span
  m="4184550">you</span> <span m="4184630">can</span> <span
  m="4184720">see,</span> <span m="4184930">it's</span> <span
  m="4185770">a</span> <span m="4185819">couple</span> <span
  m="4185954">of</span> <span m="4186090">pages</span> <span
  m="4187520">that</span> <span m="4187930">includes</span> <span
  m="4188569">the</span> <span m="4188640">description</span> <span
  m="4189109">of</span> <span m="4189399">a</span> <span
  m="4189529">quicksort</span> <span m="4190609">that</span> <span
  m="4190810">I</span> <span m="4190899">have</span> <span
  m="4191120">already.</span> <span m="4192340">But</span> <span
  m="4192454">what</span> <span m="4192569">we're</span> <span
  m="4192660">going</span> <span m="4192760">to</span> <span
  m="4192810">do</span> <span m="4192950">here</span> <span
  m="4193250">is</span> <span m="4193410">analyze</span> <span
  m="4195605">a</span> <span m="4195960">variant</span> <span
  m="4196450">quicksort,</span> <span m="4197810">which</span> <span
  m="4197895">is</span> <span m="4197980">a</span> <span
  m="4198060">little</span> <span m="4198250">bit</span> <span
  m="4198360">easier</span> <span m="4198650">to</span> <span
  m="4198740">analyze,</span> <span m="4199230">and</span> <span
  m="4199310">it</span> <span m="4199410">gives</span> <span
  m="4199590">you</span> <span m="4200310">the</span> <span
  m="4200410">sense</span> <span m="4200770">of</span> <span
  m="4201980">why</span> <span m="4202410">in</span> <span
  m="4202560">fact</span> <span m="4203490">the</span> <span
  m="4203870">randomized</span> <span m="4204410">quicksort</span> <span
  m="4204820">is</span> <span m="4204900">going</span> <span
  m="4205020">to</span> <span m="4205080">run</span> <span m="4205280">in</span>
  <span m="4205380">expected</span> <span m="4205840">time.</span> <span
  m="4206480">And</span> <span m="4206650">this</span> <span
  m="4206800">analysis</span> <span m="4207290">is</span> <span
  m="4207730">easy</span> <span m="4207990">to</span> <span
  m="4208070">do</span> <span m="4208210">it</span> <span m="4208420">in</span>
  <span m="4208770">a</span> <span m="4208810">few</span> <span
  m="4208980">minutes.</span> <span m="4209790">So</span> <span
  m="4210570">we'll</span> <span m="4210700">do</span> <span
  m="4210850">that.</span></p><p><span m="4212290">And</span> <span
  m="4212660">tomorrow,</span> <span m="4213100">you'll</span> <span
  m="4213300">see</span> <span m="4214240">either</span> <span
  m="4214520">a</span> <span m="4214560">median</span> <span
  m="4214940">finding</span> <span m="4215350">analysis</span> <span
  m="4215900">that's</span> <span m="4216660">similar</span> <span
  m="4217070">to</span> <span m="4217130">that</span> <span
  m="4217480">analysis</span> <span m="4218000">in</span> <span
  m="4218210">CLRS</span> <span m="4219550">or</span> <span
  m="4220830">precisely</span> <span m="4221070">that</span> <span
  m="4221250">analysis,</span> <span m="4222290">depending</span> <span
  m="4222630">on</span> <span m="4222700">what</span> <span
  m="4223440">your</span> <span m="4223910">TAs</span> <span
  m="4224220">want</span> <span m="4224380">to</span> <span
  m="4224440">do.</span></p><p><span m="4226080">So</span> <span
  m="4226390">this</span> <span m="4226910">particular</span> <span
  m="4227230">variant,</span> <span m="4227700">we're</span> <span
  m="4227860">going</span> <span m="4227970">to</span> <span
  m="4228020">call</span> <span m="4229150">paranoid</span> <span
  m="4229970">quicksort.</span> <span m="4231740">And</span> <span
  m="4231920">so</span> <span m="4232000">this</span> <span
  m="4232200">quicksort</span> <span m="4233540">is</span> <span
  m="4235100">paranoid</span> <span m="4235590">in</span> <span
  m="4235680">the</span> <span m="4235770">sense</span> <span
  m="4236120">that</span> <span m="4237470">it's</span> <span
  m="4237650">going</span> <span m="4237900">to</span> <span
  m="4238770">be</span> <span m="4239020">afraid</span> <span
  m="4240330">of</span> <span m="4240530">getting</span> <span
  m="4240920">unbalanced</span> <span m="4241630">partitions,</span> <span
  m="4242660">and</span> <span m="4242790">it's</span> <span
  m="4242910">going</span> <span m="4243030">to</span> <span
  m="4243090">keep</span> <span m="4243330">trying</span> <span
  m="4244440">to</span> <span m="4244600">get</span> <span
  m="4244950">balanced</span> <span m="4245420">partitions.</span> <span
  m="4246350">So</span> <span m="4246510">it's</span> <span
  m="4246660">going</span> <span m="4246900">to</span> <span
  m="4247530">try</span> <span m="4248150">to</span> <span
  m="4248250">get</span> <span m="4248390">a</span> <span
  m="4248430">balanced</span> <span m="4248780">partition.</span> <span
  m="4249690">It's</span> <span m="4249860">going</span> <span
  m="4249970">to</span> <span m="4250030">check,</span> <span
  m="4250540">and</span> <span m="4250730">then</span> <span
  m="4250850">if</span> <span m="4250993">it</span> <span
  m="4251136">fails,</span> <span m="4251600">it's</span> <span
  m="4251720">going</span> <span m="4251830">to</span> <span
  m="4251890">try</span> <span m="4252150">again.</span> <span
  m="4252990">And</span> <span m="4253350">so</span> <span m="4253580">at</span>
  <span m="4253680">the</span> <span m="4253740">end</span> <span
  m="4253950">of</span> <span m="4254080">it,</span> <span
  m="4254900">there's</span> <span m="4255270">obviously</span> <span
  m="4256000">an</span> <span m="4256260">expectation</span> <span
  m="4257650">associated</span> <span m="4258150">with</span> <span
  m="4258630">the</span> <span m="4258750">number</span> <span
  m="4259160">of</span> <span m="4259290">tries</span> <span
  m="4260470">that</span> <span m="4260720">you</span> <span
  m="4260820">need</span> <span m="4261210">in</span> <span
  m="4261340">order</span> <span m="4261510">to</span> <span
  m="4261580">get</span> <span m="4261750">a</span> <span
  m="4261810">balanced</span> <span m="4262160">partition.</span></p><p><span
  m="4262990">But</span> <span m="4263120">it</span> <span
  m="4263240">just</span> <span m="4263380">sort</span> <span
  m="4263510">of</span> <span m="4263640">flips</span> <span
  m="4264010">the</span> <span m="4264170">problem</span> <span
  m="4264590">on</span> <span m="4264700">its</span> <span
  m="4264830">head</span> <span m="4265460">and</span> <span
  m="4265640">says,</span> <span m="4265790">you</span> <span
  m="4266020">know</span> <span m="4266250">what?</span> <span
  m="4267540">I'm</span> <span m="4267740">just</span> <span
  m="4267890">going</span> <span m="4268020">to</span> <span
  m="4268070">guarantee</span> <span m="4268670">a</span> <span
  m="4268730">balanced</span> <span m="4269180">partition</span> <span
  m="4269890">from</span> <span m="4270160">a</span> <span
  m="4270350">probabilistic</span> <span m="4270980">standpoint</span> <span
  m="4271880">and</span> <span m="4272050">it</span> <span
  m="4272150">might</span> <span m="4272400">take</span> <span
  m="4272610">me</span> <span m="4273310">a</span> <span
  m="4273350">little</span> <span m="4273530">bit</span> <span
  m="4273680">longer</span> <span m="4274190">to</span> <span
  m="4274290">get</span> <span m="4274500">there.</span> <span
  m="4274870">But</span> <span m="4274980">that's</span> <span
  m="4275130">what</span> <span m="4275300">Las</span> <span
  m="4275540">Vegas</span> <span m="4275820">algorithms</span> <span
  m="4276240">are</span> <span m="4276330">all</span> <span
  m="4276470">about.</span> <span m="4277750">They're</span> <span
  m="4278130">probably</span> <span m="4278630">fast.</span> <span
  m="4279620">And</span> <span m="4279900">once</span> <span
  m="4280150">I</span> <span m="4280330">get</span> <span m="4280570">a</span>
  <span m="4280640">balanced</span> <span m="4280710">partition,</span> <span
  m="4281610">I'm</span> <span m="4281820">in</span> <span
  m="4281900">good</span> <span m="4282040">shape</span> <span
  m="4282350">because</span> <span m="4282600">I</span> <span
  m="4282660">can</span> <span m="4282960">go</span> <span m="4283220">do</span>
  <span m="4283380">my</span> <span m="4283530">recursion,</span> <span
  m="4284460">and</span> <span m="4284620">I</span> <span m="4284680">get</span>
  <span m="4285690">my</span> <span m="4286030">divide</span> <span
  m="4286160">and</span> <span m="4286250">conquer</span> <span
  m="4286950">working</span> <span m="4287300">properly.</span></p><p><span
  m="4288530">So</span> <span m="4288710">what</span> <span
  m="4288890">is</span> <span m="4288990">paranoid</span> <span
  m="4289410">quicksort?</span> <span m="4290470">Absolutely</span> <span
  m="4291270">straightforward.</span> <span m="4292300">You</span> <span
  m="4292330">could</span> <span m="4292440">probably</span> <span
  m="4292740">guess</span> <span m="4293600">given</span> <span
  m="4293890">my</span> <span m="4294040">description.</span> <span
  m="4295410">Let's</span> <span m="4295590">just</span> <span
  m="4295830">choose</span> <span m="4297320">a</span> <span
  m="4297420">pivot</span> <span m="4299810">to</span> <span
  m="4299890">be</span> <span m="4300175">a</span> <span
  m="4301140">random</span> <span m="4303660">element</span> <span
  m="4305940">of</span> <span m="4306220">A.</span> <span
  m="4308320">Perform</span> <span m="4308910">the</span> <span
  m="4309020">partition,</span> <span m="4315180">and</span> <span
  m="4315390">then</span> <span m="4316090">values</span> <span
  m="4316530">will</span> <span m="4316690">repeat.</span></p><p><span
  m="4318050">So</span> <span m="4319110">we're</span> <span
  m="4319180">going</span> <span m="4319300">to</span> <span
  m="4319340">go</span> <span m="4319520">off,</span> <span
  m="4319800">and</span> <span m="4319920">we</span> <span
  m="4320000">say</span> <span m="4320330">until</span> <span
  m="4322430">the</span> <span m="4322600">resulting</span> <span
  m="4324550">partition</span> <span m="4327370">is</span> <span
  m="4327660">such</span> <span m="4327990">that</span> <span
  m="4330160">the</span> <span m="4330320">cardinality</span> <span
  m="4330990">of</span> <span m="4331130">L</span> <span m="4331770">less</span>
  <span m="4332030">than</span> <span m="4332140">or</span> <span
  m="4332230">equal</span> <span m="4332520">to</span> <span
  m="4332610">3/4</span> <span m="4335130">of</span> <span
  m="4335860">cardinality</span> <span m="4336430">of</span> <span
  m="4336550">A.</span> <span m="4338415">And</span> <span
  m="4338750">the</span> <span m="4338830">cardinality</span> <span
  m="4339460">of</span> <span m="4339560">G</span> <span m="4340490">is</span>
  <span m="4340690">less</span> <span m="4340900">than</span> <span
  m="4341030">or</span> <span m="4341070">equal</span> <span
  m="4341360">to</span> <span m="4341480">3/4</span> <span
  m="4342720">the</span> <span m="4342830">cardinality</span> <span
  m="4343390">of</span> <span m="4343530">A.</span></p><p><span
  m="4344570">So</span> <span m="4344660">I'm</span> <span
  m="4344780">allowing</span> <span m="4345200">you</span> <span
  m="4345420">a</span> <span m="4345490">certain</span> <span
  m="4345930">amount</span> <span m="4346270">of</span> <span
  m="4346910">imbalance,</span> <span m="4348130">but</span> <span
  m="4348310">not</span> <span m="4348520">a</span> <span
  m="4348560">lot.</span> <span m="4349600">Right?</span> <span
  m="4351040">And</span> <span m="4351310">that's</span> <span
  m="4351750">it.</span> <span m="4351970">That's</span> <span
  m="4355740">paranoid</span> <span m="4356150">quicksort.</span> <span
  m="4357600">You</span> <span m="4358130">obviously</span> <span
  m="4358490">are</span> <span m="4358560">doing</span> <span
  m="4358830">that</span> <span m="4359120">in</span> <span
  m="4359270">each</span> <span m="4359550">level</span> <span
  m="4359830">of</span> <span m="4359930">the</span> <span
  m="4360000">recursion.</span> <span m="4361040">And</span> <span
  m="4361390">at</span> <span m="4362150">each</span> <span
  m="4362420">level</span> <span m="4362533">of</span> <span
  m="4362646">the</span> <span m="4362760">recursion,</span> <span
  m="4363085">your</span> <span m="4363410">L</span> <span
  m="4363535">and</span> <span m="4363660">G</span> <span m="4364590">are</span>
  <span m="4364740">going</span> <span m="4365010">to</span> <span
  m="4365090">be,</span> <span m="4366300">at</span> <span
  m="4366490">most,</span> <span m="4366830">a</span> <span
  m="4366890">factor</span> <span m="4367085">of</span> <span
  m="4367280">three</span> <span m="4367560">apart.</span></p><p><span
  m="4368360">So</span> <span m="4368500">you</span> <span
  m="4368580">might</span> <span m="4368770">get</span> <span
  m="4368910">1/4</span> <span m="4369420">and</span> <span
  m="4369690">3/4.</span> <span m="4370620">If</span> <span
  m="4370770">you're</span> <span m="4370890">lucky,</span> <span
  m="4371190">you'll</span> <span m="4371370">get</span> <span
  m="4371530">1/2</span> <span m="4371890">and</span> <span
  m="4371980">1/2.</span> <span m="4373350">But</span> <span
  m="4373610">the</span> <span m="4373690">worst</span> <span
  m="4373950">case,</span> <span m="4374880">given</span> <span
  m="4375730">that</span> <span m="4375910">you're</span> <span
  m="4376020">going</span> <span m="4376120">to</span> <span
  m="4376170">be</span> <span m="4376290">exiting</span> <span
  m="4376790">out</span> <span m="4376930">of</span> <span
  m="4377010">this</span> <span m="4377180">loop,</span> <span
  m="4377920">is</span> <span m="4378180">1/4</span> <span
  m="4378830">and</span> <span m="4378960">3/4.</span> <span
  m="4380080">OK?</span></p><p><span m="4381270">So,</span> <span
  m="4382650">as</span> <span m="4382920">always,</span> <span
  m="4383770">you</span> <span m="4384000">have</span> <span
  m="4384170">a</span> <span m="4384220">simple</span> <span
  m="4384520">algorithm,</span> <span m="4384980">and</span> <span
  m="4385580">it's</span> <span m="4387480">not</span> <span
  m="4387750">completely</span> <span m="4389330">clear</span> <span
  m="4390520">how</span> <span m="4390720">you're</span> <span
  m="4390880">going</span> <span m="4390980">to</span> <span
  m="4391020">get</span> <span m="4391300">to</span> <span
  m="4392110">expected</span> <span m="4393310">n</span> <span
  m="4393410">log</span> <span m="4393610">n</span> <span
  m="4394000">time.</span> <span m="4394630">But</span> <span
  m="4395800">it's</span> <span m="4396080">not</span> <span
  m="4396230">difficult.</span></p><p><span m="4398000">Basically,</span> <span
  m="4398580">what</span> <span m="4398720">we</span> <span
  m="4398790">had</span> <span m="4398930">to</span> <span m="4399000">do</span>
  <span m="4399170">is</span> <span m="4399320">we</span> <span
  m="4399383">have</span> <span m="4399446">to</span> <span
  m="4399510">try</span> <span m="4399610">and</span> <span
  m="4399750">figure</span> <span m="4400040">out</span> <span
  m="4400900">what</span> <span m="4401080">the</span> <span
  m="4401170">probability</span> <span m="4401720">of</span> <span
  m="4401810">a</span> <span m="4401880">good</span> <span
  m="4402170">call</span> <span m="4402440">is,</span> <span
  m="4403680">over</span> <span m="4403950">here,</span> <span
  m="4405650">a</span> <span m="4405710">good</span> <span
  m="4405860">pivot</span> <span m="4406190">choice,</span> <span
  m="4407160">and</span> <span m="4407570">what</span> <span
  m="4407770">the</span> <span m="4407840">probability</span> <span
  m="4408290">of</span> <span m="4409410">a</span> <span m="4410210">bad</span>
  <span m="4410310">pivot</span> <span m="4410430">choice</span> <span
  m="4410607">is.</span> <span m="4411600">And</span> <span
  m="4412520">we</span> <span m="4412590">have</span> <span
  m="4412750">to</span> <span m="4413750">obviously--</span> <span
  m="4414190">given</span> <span m="4414510">the</span> <span
  m="4415340">potential</span> <span m="4415990">imbalance,</span> <span
  m="4416990">we</span> <span m="4417035">have</span> <span
  m="4417080">to</span> <span m="4417190">write</span> <span
  m="4417400">the</span> <span m="4417470">recurrence</span> <span
  m="4417900">associated</span> <span m="4418370">with</span> <span
  m="4418510">that,</span> <span m="4419570">but</span> <span
  m="4419810">let's</span> <span m="4420030">take</span> <span
  m="4420190">a</span> <span m="4420230">look</span> <span m="4420430">at</span>
  <span m="4422580">the</span> <span m="4423040">pivots</span> <span
  m="4423410">here.</span></p><p><span m="4424400">And</span> <span
  m="4426080">what</span> <span m="4426290">can</span> <span
  m="4426390">we</span> <span m="4426510">say</span> <span
  m="4426780">about</span> <span m="4427860">the</span> <span
  m="4428010">size</span> <span m="4428360">as</span> <span
  m="4428450">of</span> <span m="4428890">L</span> <span m="4429110">and</span>
  <span m="4429330">G</span> <span m="4431110">if</span> <span
  m="4431370">you</span> <span m="4431970">just</span> <span
  m="4432280">did</span> <span m="4432460">a</span> <span
  m="4432510">random</span> <span m="4432850">pivot?</span> <span
  m="4433650">Well,</span> <span m="4433940">a</span> <span
  m="4434070">bad</span> <span m="4434380">call</span> <span
  m="4435350">is</span> <span m="4435620">when</span> <span
  m="4438990">you</span> <span m="4439200">get</span> <span
  m="4441890">something</span> <span m="4442320">in</span> <span
  m="4442485">L</span> <span m="4442650">or</span> <span m="4442980">G</span>
  <span m="4443320">that</span> <span m="4443430">is</span> <span
  m="4443540">less</span> <span m="4443780">than</span> <span
  m="4443930">1/4.</span> <span m="4446010">And</span> <span
  m="4446440">a</span> <span m="4446530">good</span> <span
  m="4446740">call</span> <span m="4447440">is</span> <span
  m="4449050">when</span> <span m="4449290">you</span> <span
  m="4449410">get</span> <span m="4451110">somewhere</span> <span
  m="4451450">between</span> <span m="4452060">1/2--</span> <span
  m="4454370">well,</span> <span m="4454500">roughly,</span> <span
  m="4455520">if</span> <span m="4455610">you</span> <span
  m="4455710">look</span> <span m="4455880">at</span> <span
  m="4457530">the</span> <span m="4457700">choice</span> <span
  m="4458070">of</span> <span m="4458160">the</span> <span
  m="4458260">pivot.</span> <span m="4458580">So</span> <span
  m="4458730">what</span> <span m="4458850">I</span> <span
  m="4458960">have</span> <span m="4459070">up</span> <span
  m="4459210">here,</span> <span m="4459490">is</span> <span
  m="4460110">the</span> <span m="4460200">choice</span> <span
  m="4460520">of</span> <span m="4460610">the</span> <span
  m="4460700">pivot.</span></p><p><span m="4461320">If</span> <span
  m="4461450">my</span> <span m="4461590">pivot</span> <span
  m="4461860">is</span> <span m="4461970">out</span> <span
  m="4462140">here,</span> <span m="4463000">I</span> <span
  m="4464030">have</span> <span m="4464650">a</span> <span
  m="4464730">very</span> <span m="4465030">small</span> <span
  m="4465540">L,</span> <span m="4466290">and</span> <span
  m="4466540">all</span> <span m="4466920">of</span> <span
  m="4467250">the</span> <span m="4467730">thing</span> <span
  m="4467910">on</span> <span m="4468020">the</span> <span
  m="4468120">right</span> <span m="4468380">is</span> <span
  m="4468580">G.</span> <span m="4469260">If</span> <span m="4469380">the</span>
  <span m="4469450">pivot</span> <span m="4469670">is</span> <span
  m="4469790">here,</span> <span m="4470570">I</span> <span
  m="4470690">have</span> <span m="4470850">a</span> <span
  m="4471190">relatively</span> <span m="4471580">small</span> <span
  m="4471930">L</span> <span m="4472520">and</span> <span m="4472730">a</span>
  <span m="4472790">large</span> <span m="4473090">G.</span> <span
  m="4473720">The</span> <span m="4473880">pivot</span> <span
  m="4474080">is</span> <span m="4474190">over</span> <span
  m="4474360">here,</span> <span m="4474880">I'm</span> <span
  m="4475050">good.</span> <span m="4476100">I</span> <span
  m="4476230">got</span> <span m="4476490">1/4</span> <span
  m="4478180">and</span> <span m="4478520">3/4.</span> <span
  m="4479530">If</span> <span m="4479633">the</span> <span
  m="4479736">pivot</span> <span m="4479840">is</span> <span
  m="4479920">over</span> <span m="4480080">here,</span> <span
  m="4480380">I</span> <span m="4480440">got</span> <span m="4480590">1/2</span>
  <span m="4480980">and</span> <span m="4481060">1/2</span> <span
  m="4481970">and</span> <span m="4482200">so</span> <span m="4482320">on</span>
  <span m="4482440">and</span> <span m="4482520">so</span> <span
  m="4482660">forth.</span></p><p><span m="4483290">And</span> <span
  m="4483510">so</span> <span m="4483970">this</span> <span
  m="4484680">part</span> <span m="4484970">is</span> <span
  m="4485120">bad,</span> <span m="4485570">this</span> <span
  m="4485740">part</span> <span m="4485960">is</span> <span
  m="4486060">bad,</span> <span m="4486790">and</span> <span
  m="4486920">the</span> <span m="4486980">middle</span> <span
  m="4487170">part</span> <span m="4487420">is</span> <span
  m="4487550">good.</span> <span m="4488470">So</span> <span
  m="4488550">that's</span> <span m="4488800">all</span> <span
  m="4489150">that</span> <span m="4489510">this</span> <span
  m="4489680">picture</span> <span m="4489960">shows.</span></p><p><span
  m="4491570">So</span> <span m="4491850">a</span> <span m="4491950">call</span>
  <span m="4494450">is</span> <span m="4494720">good</span> <span
  m="4497070">with</span> <span m="4497200">what</span> <span
  m="4497330">probability?</span> <span m="4499520">Given</span> <span
  m="4499720">that</span> <span m="4499870">picture,</span> <span
  m="4500210">a</span> <span m="4500250">call</span> <span m="4500510">is</span>
  <span m="4500630">good</span> <span m="4500860">with</span> <span
  m="4501150">what</span> <span m="4501370">probability?</span></p><p><span
  m="4503770">It's</span> <span m="4504250">greater</span> <span
  m="4504470">than</span> <span m="4504560">or</span> <span
  m="4504650">equal</span> <span m="4504840">to</span> <span
  m="4504910">1/2.</span></p><p>&nbsp;</p><p><span m="4510350">And</span> <span
  m="4510700">so</span> <span m="4512700">what</span> <span
  m="4512880">you</span> <span m="4512955">can</span> <span
  m="4513030">now</span> <span m="4513280">write</span> <span
  m="4513620">simply</span> <span m="4514720">is</span> <span
  m="4515620">if</span> <span m="4516050">Tn</span> <span m="4518080">is</span>
  <span m="4518480">the</span> <span m="4518560">time</span> <span
  m="4518840">required</span> <span m="4519270">to</span> <span
  m="4519350">sort</span> <span m="4519710">the</span> <span
  m="4519920">array,</span> <span m="4521870">essentially</span> <span
  m="4524500">you</span> <span m="4524650">can</span> <span
  m="4524780">say</span> <span m="4524980">Tn</span> <span m="4525790">is</span>
  <span m="4527260">T</span> <span m="4527590">of</span> <span
  m="4528200">n</span> <span m="4528480">divided</span> <span
  m="4528830">by</span> <span m="4529000">4</span> <span m="4530440">plus</span>
  <span m="4530940">T</span> <span m="4531230">of</span> <span
  m="4531810">3n</span> <span m="4532450">divided</span> <span
  m="4532790">by</span> <span m="4532970">4</span> <span m="4535010">plus</span>
  <span m="4536920">expected</span> <span m="4539330">number</span> <span
  m="4539670">of</span> <span m="4539750">iterations</span> <span
  m="4542800">in</span> <span m="4543000">terms</span> <span
  m="4543370">of</span> <span m="4543550">getting</span> <span
  m="4544400">a</span> <span m="4544490">good</span> <span
  m="4544770">partition</span> <span m="4546150">times</span> <span
  m="4546820">C</span> <span m="4547190">times</span> <span
  m="4547520">n.</span></p><p><span m="4548870">And</span> <span
  m="4549390">there</span> <span m="4549466">is</span> <span
  m="4549543">a</span> <span m="4549620">reason</span> <span
  m="4549860">why</span> <span m="4550000">I'm</span> <span
  m="4550110">putting</span> <span m="4550310">C</span> <span
  m="4550590">in</span> <span m="4550680">here</span> <span
  m="4550970">as</span> <span m="4551070">opposed</span> <span
  m="4551300">to</span> <span m="4551390">theta.</span> <span
  m="4552240">That</span> <span m="4552430">will</span> <span
  m="4552500">become</span> <span m="4552580">clear</span> <span
  m="4552795">in</span> <span m="4553010">just</span> <span m="4553230">a</span>
  <span m="4553280">second.</span> <span m="4553940">Because</span> <span
  m="4554210">I</span> <span m="4554270">can't</span> <span
  m="4554480">really</span> <span m="4554650">apply</span> <span
  m="4554910">the</span> <span m="4555000">master</span> <span
  m="4555350">theorem</span> <span m="4555660">to</span> <span
  m="4555750">this</span> <span m="4556600">given</span> <span
  m="4557230">what</span> <span m="4557370">I</span> <span
  m="4557420">have</span> <span m="4557840">with</span> <span
  m="4558060">respect</span> <span m="4558380">to</span> <span
  m="4558520">Tn</span> <span m="4558870">over</span> <span m="4559040">4</span>
  <span m="4559360">and</span> <span m="4559490">3n</span> <span
  m="4559780">over</span> <span m="4559950">4.</span></p><p><span
  m="4561650">So</span> <span m="4561800">what</span> <span m="4561950">I</span>
  <span m="4561980">have</span> <span m="4562180">here</span> <span
  m="4562450">is,</span> <span m="4562600">I'm</span> <span
  m="4562750">looking</span> <span m="4563040">at</span> <span
  m="4563120">the</span> <span m="4563210">case</span> <span
  m="4563570">where</span> <span m="4565440">I</span> <span
  m="4565590">could</span> <span m="4565950">get</span> <span
  m="4566760">an</span> <span m="4567000">imbalanced</span> <span
  m="4567590">partition,</span> <span m="4568550">but</span> <span
  m="4568820">the</span> <span m="4568970">imbalance</span> <span
  m="4569320">is</span> <span m="4569670">bounded.</span> <span
  m="4570690">So</span> <span m="4571580">I'd</span> <span
  m="4571750">have</span> <span m="4571940">n</span> <span
  m="4572130">over</span> <span m="4572310">4</span> <span m="4572690">on</span>
  <span m="4572790">one</span> <span m="4572990">side</span> <span
  m="4573330">and</span> <span m="4573455">3n</span> <span
  m="4573690">over</span> <span m="4573870">4</span> <span m="4574150">on</span>
  <span m="4574390">the</span> <span m="4574425">other</span> <span
  m="4574460">side.</span> <span m="4575050">But</span> <span
  m="4575140">I'm</span> <span m="4575210">not</span> <span
  m="4575380">going</span> <span m="4575480">to</span> <span
  m="4575520">have</span> <span m="4575690">n</span> <span
  m="4575820">over</span> <span m="4575980">5</span> <span
  m="4576360">and</span> <span m="4577000">4n</span> <span
  m="4577390">over</span> <span m="4577510">5</span> <span m="4578240">or</span>
  <span m="4578380">what</span> <span m="4578520">have</span> <span
  m="4578730">you.</span></p><p><span m="4580190">And</span> <span
  m="4580260">so</span> <span m="4580360">that's</span> <span
  m="4581070">the</span> <span m="4581270">two</span> <span
  m="4581410">recursive</span> <span m="4581850">calls.</span> <span
  m="4582430">So</span> <span m="4582570">that's</span> <span
  m="4582900">hopefully</span> <span m="4583620">easy</span> <span
  m="4583900">to</span> <span m="4583990">see.</span> <span
  m="4585170">The</span> <span m="4585440">part</span> <span
  m="4585770">that</span> <span m="4586000">is</span> <span
  m="4586740">new</span> <span m="4587020">here</span> <span
  m="4587790">is</span> <span m="4587990">simply</span> <span
  m="4588440">the</span> <span m="4588570">complexity</span> <span
  m="4589770">of</span> <span m="4590000">this</span> <span
  m="4590710">code</span> <span m="4591360">that</span> <span
  m="4591550">you</span> <span m="4591660">see</span> <span
  m="4591890">here,</span> <span m="4592630">which</span> <span
  m="4592770">is</span> <span m="4592860">obviously</span> <span
  m="4594130">the</span> <span m="4594460">randomized</span> <span
  m="4595160">algorithm.</span> <span m="4595710">That's</span> <span
  m="4595910">exactly</span> <span m="4596290">where</span> <span
  m="4596480">the</span> <span m="4596590">randomness</span> <span
  m="4597060">comes</span> <span m="4597300">in</span> <span
  m="4597840">because</span> <span m="4598070">you're</span> <span
  m="4598770">picking</span> <span m="4598930">a</span> <span
  m="4599010">random</span> <span m="4599430">pivot,</span> <span
  m="4600190">and</span> <span m="4600380">you're</span> <span
  m="4600520">checking</span> <span m="4600950">it.</span> <span
  m="4601530">And</span> <span m="4601740">so</span> <span
  m="4602740">this</span> <span m="4603090">is</span> <span
  m="4603210">going</span> <span m="4603340">to</span> <span
  m="4603420">run</span> <span m="4603630">a</span> <span
  m="4603730">certain</span> <span m="4603970">number</span> <span
  m="4604170">of</span> <span m="4604260">times.</span> <span
  m="4605090">And</span> <span m="4606050">we</span> <span
  m="4606190">can</span> <span m="4606320">figure</span> <span
  m="4606540">out</span> <span m="4606690">what</span> <span
  m="4606840">the</span> <span m="4606900">expectation</span> <span
  m="4607560">is</span> <span m="4608120">in</span> <span
  m="4608290">just</span> <span m="4608510">a</span> <span
  m="4608550">minute.</span></p><p><span m="4609430">But</span> <span
  m="4609630">I</span> <span m="4609780">have</span> <span m="4609940">C</span>
  <span m="4610190">times</span> <span m="4610490">n</span> <span
  m="4610750">because</span> <span m="4611600">this</span> <span
  m="4612330">is</span> <span m="4612520">constant</span> <span
  m="4612910">time</span> <span m="4613240">to</span> <span
  m="4613360">choose</span> <span m="4613590">a</span> <span
  m="4613620">random</span> <span m="4613880">number.</span> <span
  m="4614660">We'll</span> <span m="4614840">assume</span> <span
  m="4615080">that</span> <span m="4615430">performing</span> <span
  m="4615770">the</span> <span m="4615860">partition</span> <span
  m="4617210">is</span> <span m="4619030">C</span> <span
  m="4619280">times</span> <span m="4619560">n</span> <span
  m="4619960">or</span> <span m="4620130">theta</span> <span
  m="4620360">n,</span> <span m="4621100">and</span> <span
  m="4621270">that's</span> <span m="4621420">why</span> <span
  m="4621540">I</span> <span m="4621600">have</span> <span
  m="4621820">this</span> <span m="4622020">up</span> <span
  m="4622170">there.</span> <span m="4622840">So</span> <span
  m="4623060">this,</span> <span m="4623290">we're</span> <span
  m="4623400">going</span> <span m="4623520">to</span> <span
  m="4623590">call</span> <span m="4623870">this</span> <span
  m="4624550">Cn.</span></p><p><span m="4626050">And</span> <span
  m="4626270">so</span> <span m="4627320">expected</span> <span
  m="4627780">number</span> <span m="4628030">of</span> <span
  m="4628100">iterations</span> <span m="4629350">given</span> <span
  m="4629580">what</span> <span m="4629720">I</span> <span
  m="4629810">have--</span> <span m="4630260">what</span> <span
  m="4630510">can</span> <span m="4630640">I</span> <span m="4630720">say</span>
  <span m="4631040">about</span> <span m="4631280">the</span> <span
  m="4631340">expected</span> <span m="4631710">number</span> <span
  m="4631920">of</span> <span m="4631960">iterations</span> <span
  m="4632960">using</span> <span m="4634980">simple</span> <span
  m="4635320">probability</span> <span m="4635880">rules?</span> <span
  m="4636980">What</span> <span m="4637120">is</span> <span
  m="4637210">that?</span></p><p><span m="4638500">2,</span> <span
  m="4638930">right?</span> <span m="4639860">1</span> <span
  m="4640070">over</span> <span m="4640280">p.</span> <span
  m="4641240">All</span> <span m="4641450">of</span> <span
  m="4641530">them</span> <span m="4641670">are</span> <span
  m="4641790">independent.</span> <span m="4642880">So</span> <span
  m="4642950">this</span> <span m="4643140">is</span> <span
  m="4643830">2.</span></p><p><span m="4645060">So</span> <span
  m="4647030">what</span> <span m="4647240">I</span> <span
  m="4647310">have</span> <span m="4647520">here</span> <span
  m="4649440">is</span> <span m="4651070">something</span> <span
  m="4651425">that</span> <span m="4651780">I</span> <span
  m="4651870">think</span> <span m="4652020">you</span> <span
  m="4652110">might</span> <span m="4652240">have</span> <span
  m="4652330">seen</span> <span m="4652540">this</span> <span
  m="4652640">before,</span> <span m="4654100">but</span> <span
  m="4654350">it's</span> <span m="4654510">worth</span> <span
  m="4654760">drawing</span> <span m="4655050">the</span> <span
  m="4655140">tree</span> <span m="4655430">out</span> <span
  m="4655690">and</span> <span m="4656380">seeing</span> <span
  m="4656640">it</span> <span m="4657190">one</span> <span
  m="4657380">more</span> <span m="4657540">time</span> <span
  m="4658310">in</span> <span m="4658450">case</span> <span
  m="4660540">it</span> <span m="4660960">didn't</span> <span
  m="4662450">fully</span> <span m="4662750">registered</span> <span
  m="4663210">the</span> <span m="4663280">first</span> <span
  m="4663550">time</span> <span m="4663850">or</span> <span
  m="4664250">you</span> <span m="4664440">didn't</span> <span
  m="4664600">actually</span> <span m="4664860">see</span> <span
  m="4665050">it</span> <span m="4666160">in</span> <span m="4666580">006</span>
  <span m="4667570">or</span> <span m="4668050">recitation.</span></p><p><span
  m="4669480">But</span> <span m="4670230">what</span> <span
  m="4670520">I</span> <span m="4670940">now</span> <span
  m="4671230">have</span> <span m="4671700">is</span> <span m="4672360">T</span>
  <span m="4672590">of</span> <span m="4672720">n.</span> <span
  m="4673630">I</span> <span m="4673700">want</span> <span m="4673850">to</span>
  <span m="4673990">solve</span> <span m="4674480">T</span> <span
  m="4674680">of</span> <span m="4674790">n</span> <span
  m="4675090">equals</span> <span m="4675460">T</span> <span
  m="4675500">of</span> <span m="4675540">n</span> <span m="4675920">over</span>
  <span m="4676140">4</span> <span m="4677030">plus</span> <span
  m="4677490">T</span> <span m="4677710">of</span> <span m="4678030">3</span>
  <span m="4678320">n</span> <span m="4678600">over</span> <span
  m="4678910">4</span> <span m="4679820">plus</span> <span m="4680460">2</span>
  <span m="4681000">times</span> <span m="4681430">Cn.</span></p><p><span
  m="4684020">And,</span> <span m="4685430">again,</span> <span
  m="4685750">like</span> <span m="4685900">I</span> <span
  m="4685940">said,</span> <span m="4686160">I</span> <span
  m="4686200">didn't</span> <span m="4686360">put</span> <span
  m="4686560">theta</span> <span m="4686760">n</span> <span
  m="4686940">in</span> <span m="4687110">here</span> <span
  m="4687280">because,</span> <span m="4687750">as</span> <span
  m="4687900">you'll</span> <span m="4688020">see,</span> <span
  m="4688630">when</span> <span m="4688740">I</span> <span
  m="4688790">draw</span> <span m="4689050">this</span> <span
  m="4689730">tree</span> <span m="4690140">out--</span> <span
  m="4690840">because</span> <span m="4691140">it's</span> <span
  m="4691290">not</span> <span m="4691460">a</span> <span
  m="4691760">massive</span> <span m="4692150">theorem</span> <span
  m="4693310">invocation--</span> <span m="4694820">it's</span> <span
  m="4695130">worth</span> <span m="4695760">looking</span> <span
  m="4696180">at</span> <span m="4696340">it</span> <span
  m="4696640">from</span> <span m="4696860">a</span> <span
  m="4696910">constant</span> <span m="4697330">factor</span> <span
  m="4697660">standpoint</span> <span m="4698200">to</span> <span
  m="4698300">really</span> <span m="4698490">get</span> <span
  m="4698680">the</span> <span m="4698770">sense</span> <span
  m="4699090">of</span> <span m="4699920">how</span> <span
  m="4700420">all</span> <span m="4700520">of</span> <span
  m="4700620">this</span> <span m="4700920">works</span> <span
  m="4701210">out.</span></p><p><span m="4702580">And</span> <span
  m="4702670">so</span> <span m="4702980">if</span> <span m="4703090">I</span>
  <span m="4703160">draw</span> <span m="4703370">that</span> <span
  m="4703730">tree</span> <span m="4704010">of</span> <span
  m="4704100">execution</span> <span m="4704780">and</span> <span
  m="4704870">I</span> <span m="4704940">start</span> <span
  m="4705230">counting,</span> <span m="4706490">basically</span> <span
  m="4707070">what</span> <span m="4707100">I</span> <span
  m="4707170">have</span> <span m="4707400">is</span> <span
  m="4707560">2Cn</span> <span m="4708150">up</span> <span m="4708290">at</span>
  <span m="4708370">the</span> <span m="4708470">top.</span> <span
  m="4709340">I</span> <span m="4709450">have</span> <span m="4709630">1</span>
  <span m="4709820">over</span> <span m="4710030">4</span> <span
  m="4710460">times</span> <span m="4710770">2Cn</span> <span
  m="4711430">over</span> <span m="4711600">here.</span> <span
  m="4712570">I</span> <span m="4712670">have</span> <span m="4712870">3</span>
  <span m="4713120">over</span> <span m="4713280">4</span> <span
  m="4714250">times</span> <span m="4714530">2Cn</span> <span
  m="4715070">over</span> <span m="4715260">here.</span> <span
  m="4716340">And</span> <span m="4716520">then</span> <span
  m="4716860">this</span> <span m="4717040">1</span> <span
  m="4717230">over</span> <span m="4717390">4</span> <span
  m="4718160">might</span> <span m="4718400">go</span> <span
  m="4718740">1</span> <span m="4718970">over</span> <span m="4719170">16</span>
  <span m="4720220">times</span> <span m="4720780">2Cn</span> <span
  m="4721410">over</span> <span m="4721560">here.</span> <span
  m="4722390">And</span> <span m="4722500">this</span> <span
  m="4722690">might</span> <span m="4722990">go</span> <span
  m="4723280">3</span> <span m="4723560">over</span> <span m="4723740">16</span>
  <span m="4724950">times</span> <span m="4725380">2Cn</span> <span
  m="4725960">over</span> <span m="4726110">here.</span> <span
  m="4726910">And</span> <span m="4727320">this</span> <span
  m="4727490">would</span> <span m="4727680">go,</span> <span
  m="4729750">I</span> <span m="4729830">guess</span> <span
  m="4729980">it</span> <span m="4730050">would</span> <span
  m="4730120">be</span> <span m="4730240">3</span> <span m="4730440">over</span>
  <span m="4730620">16</span> <span m="4732220">times</span> <span
  m="4732540">2Cn.</span> <span m="4733650">And</span> <span
  m="4733850">then</span> <span m="4734820">9</span> <span
  m="4735170">over</span> <span m="4735330">16</span> <span
  m="4736390">times</span> <span m="4736840">2Cn</span> <span
  m="4737810">et</span> <span m="4737950">cetera.</span></p><p><span
  m="4738840">So</span> <span m="4739400">this</span> <span
  m="4739570">is</span> <span m="4739660">an</span> <span
  m="4739710">unbalanced</span> <span m="4740860">tree</span> <span
  m="4741640">because</span> <span m="4742140">you</span> <span
  m="4742260">have</span> <span m="4742900">an</span> <span
  m="4743890">unbalanced</span> <span m="4744460">partition</span> <span
  m="4744950">up</span> <span m="4745130">on</span> <span
  m="4745280">top,</span> <span m="4746060">and</span> <span
  m="4746380">now</span> <span m="4746550">you</span> <span
  m="4746690">want</span> <span m="4746830">to</span> <span
  m="4747170">count</span> <span m="4747610">up</span> <span
  m="4748240">all</span> <span m="4748610">the</span> <span
  m="4748710">work</span> <span m="4749690">that</span> <span
  m="4749970">this</span> <span m="4751720">tree</span> <span
  m="4752100">does.</span> <span m="4752370">If</span> <span
  m="4752460">you</span> <span m="4752580">collect</span> <span
  m="4752860">up</span> <span m="4753040">all</span> <span m="4753390">of</span>
  <span m="4753460">the</span> <span m="4753530">operations,</span> <span
  m="4754620">then</span> <span m="4754990">that's</span> <span
  m="4755290">going</span> <span m="4755410">to</span> <span
  m="4755480">tell</span> <span m="4755620">you</span> <span
  m="4755810">what</span> <span m="4756230">T</span> <span m="4756380">of</span>
  <span m="4756490">n</span> <span m="4756700">is</span> <span
  m="4757290">because</span> <span m="4757510">that's</span> <span
  m="4757730">all</span> <span m="4757910">the</span> <span
  m="4757990">work</span> <span m="4758240">that</span> <span
  m="4758275">you</span> <span m="4758430">have</span> <span
  m="4758570">to</span> <span m="4758670">do</span> <span m="4759260">in</span>
  <span m="4759440">order</span> <span m="4759650">to</span> <span
  m="4761060">finish</span> <span m="4761350">up</span> <span
  m="4761510">the</span> <span m="4761620">top</span> <span
  m="4761870">level</span> <span m="4762110">of</span> <span
  m="4762200">recursion.</span></p><p><span m="4763210">And</span> <span
  m="4763710">what</span> <span m="4763900">you</span> <span
  m="4763970">can</span> <span m="4764070">say</span> <span
  m="4764430">is,</span> <span m="4765110">if</span> <span
  m="4765260">you</span> <span m="4765370">look</span> <span
  m="4765530">at</span> <span m="4765790">this</span> <span
  m="4766130">side</span> <span m="4766430">here</span> <span
  m="4766630">are</span> <span m="4766850">all</span> <span
  m="4767040">the</span> <span m="4767110">way</span> <span
  m="4767290">to</span> <span m="4767370">the</span> <span
  m="4767460">right-hand</span> <span m="4767820">side,</span> <span
  m="4768820">you're</span> <span m="4768980">going</span> <span
  m="4769110">to</span> <span m="4769150">have</span> <span
  m="4769630">log</span> <span m="4771960">to</span> <span
  m="4772120">the</span> <span m="4772290">base</span> <span
  m="4772700">4</span> <span m="4772960">over</span> <span m="4773150">3</span>
  <span m="4773980">times</span> <span m="4774620">2Cn</span> <span
  m="4776150">levels.</span></p><p><span m="4777950">So</span> <span
  m="4777970">that's</span> <span m="4778150">just</span> <span
  m="4778290">simply</span> <span m="4778990">every</span> <span
  m="4779200">time</span> <span m="4779530">you're</span> <span
  m="4780110">multiplying</span> <span m="4780570">by</span> <span
  m="4780680">3</span> <span m="4780890">over</span> <span m="4781050">4,</span>
  <span m="4781820">when</span> <span m="4782030">you</span> <span
  m="4782140">get</span> <span m="4782320">down</span> <span
  m="4782650">to</span> <span m="4784210">the</span> <span
  m="4784370">number</span> <span m="4784640">1,</span> <span
  m="4785560">and</span> <span m="4785730">that's</span> <span
  m="4786110">log</span> <span m="4786460">of</span> <span m="4786570">4</span>
  <span m="4786800">over</span> <span m="4786940">3.</span> <span
  m="4787670">And</span> <span m="4787790">then</span> <span
  m="4787880">over</span> <span m="4788040">here,</span> <span
  m="4788310">it's</span> <span m="4788400">a</span> <span
  m="4788470">little</span> <span m="4788590">bit</span> <span
  m="4788700">easier</span> <span m="4789690">to</span> <span
  m="4789790">think</span> <span m="4789950">about</span> <span
  m="4790230">because</span> <span m="4790450">it's</span> <span
  m="4790570">a</span> <span m="4790630">power</span> <span
  m="4790930">of</span> <span m="4791070">2.</span> <span
  m="4791960">You're</span> <span m="4792016">going</span> <span
  m="4792073">to</span> <span m="4792130">have</span> <span
  m="4792500">log</span> <span m="4792805">of</span> <span m="4793110">4</span>
  <span m="4793862">to</span> <span m="4794240">the</span> <span
  m="4794390">base</span> <span m="4794680">4</span> <span
  m="4795670">times</span> <span m="4796010">2Cn</span> <span
  m="4797560">levels.</span></p><p><span m="4798530">And</span> <span
  m="4798740">really,</span> <span m="4798950">it</span> <span
  m="4799050">doesn't</span> <span m="4799290">really</span> <span
  m="4799460">matter</span> <span m="4800400">honestly</span> <span
  m="4801060">when</span> <span m="4801400">we</span> <span
  m="4801550">go</span> <span m="4801680">to</span> <span
  m="4801760">asymptotics.</span> <span m="4802850">But</span> <span
  m="4802970">is</span> <span m="4803090">worth</span> <span
  m="4803340">seeing,</span> <span m="4803730">I</span> <span
  m="4803790">think,</span> <span m="4804600">just</span> <span
  m="4804830">to</span> <span m="4804900">get</span> <span m="4805010">a</span>
  <span m="4805070">sense</span> <span m="4805450">of</span> <span
  m="4806390">why</span> <span m="4807010">it</span> <span
  m="4807120">all</span> <span m="4807300">works</span> <span
  m="4807610">out,</span> <span m="4808920">regardless</span> <span
  m="4809400">of</span> <span m="4809610">whether</span> <span
  m="4809890">it's</span> <span m="4810440">n</span> <span
  m="4810620">over</span> <span m="4810770">4</span> <span m="4812430">or</span>
  <span m="4812710">a</span> <span m="4812800">different</span> <span
  m="4813110">constant</span> <span m="4813540">here</span> <span
  m="4813960">or</span> <span m="4814040">whether</span> <span
  m="4814120">it's</span> <span m="4814280">balanced</span> <span
  m="4814730">or</span> <span m="4814860">unbalanced.</span> <span
  m="4815860">The</span> <span m="4815960">tree</span> <span
  m="4816190">looks</span> <span m="4816370">a</span> <span
  m="4816430">little</span> <span m="4816560">bit</span> <span
  m="4816710">different.</span> <span m="4818130">It's</span> <span
  m="4818300">sort</span> <span m="4818510">of</span> <span
  m="4818580">weird.</span> <span m="4819240">It's</span> <span
  m="4819410">got</span> <span m="4821900">fewer</span> <span
  m="4822170">levels</span> <span m="4822540">here</span> <span
  m="4823290">and</span> <span m="4823710">more</span> <span
  m="4823900">levels</span> <span m="4824240">there.</span> <span
  m="4824550">So</span> <span m="4824670">it's</span> <span
  m="4824800">sort</span> <span m="4825000">of</span> <span
  m="4825200">tilted</span> <span m="4825310">this</span> <span
  m="4825420">way.</span></p><p><span m="4826460">But</span> <span
  m="4827010">eventually,</span> <span m="4827490">you</span> <span
  m="4827580">get</span> <span m="4827760">down</span> <span
  m="4828110">to</span> <span m="4829130">theta</span> <span
  m="4829380">1</span> <span m="4830510">constants</span> <span
  m="4831000">down</span> <span m="4831200">below.</span> <span
  m="4833870">And</span> <span m="4835250">basically</span> <span
  m="4835740">what</span> <span m="4835890">you</span> <span
  m="4835990">can</span> <span m="4836090">see--</span> <span
  m="4836900">if</span> <span m="4837010">you</span> <span
  m="4837110">just</span> <span m="4837290">add</span> <span
  m="4837510">it</span> <span m="4837600">up--</span> <span
  m="4838650">is</span> <span m="4839290">1</span> <span m="4839470">over</span>
  <span m="4839630">4</span> <span m="4839940">plus</span> <span
  m="4840130">3</span> <span m="4840310">over</span> <span m="4840460">4</span>
  <span m="4841200">is</span> <span m="4841370">1.</span> <span
  m="4842120">1</span> <span m="4842330">over</span> <span
  m="4842460">16.</span> <span m="4842930">3</span> <span
  m="4843090">over</span> <span m="4843200">16.</span> <span
  m="4843580">Obviously,</span> <span m="4843880">those</span> <span
  m="4844170">all</span> <span m="4846930">end</span> <span
  m="4847100">up</span> <span m="4847190">being</span> <span
  m="4847410">1.</span></p><p><span m="4848100">So</span> <span
  m="4848220">you</span> <span m="4848320">have</span> <span
  m="4848770">2Cn</span> <span m="4851160">work</span> <span
  m="4853510">at</span> <span m="4854340">each</span> <span
  m="4854660">level.</span> <span m="4857190">And</span> <span
  m="4858460">if</span> <span m="4858640">you</span> <span
  m="4858750">just</span> <span m="4859210">go</span> <span
  m="4859360">ahead</span> <span m="4859560">and</span> <span
  m="4859660">be</span> <span m="4859810">pessimistic</span> <span
  m="4860400">about</span> <span m="4860650">it,</span> <span
  m="4861510">there's</span> <span m="4862190">a</span> <span
  m="4862250">maximum</span> <span m="4863970">of</span> <span
  m="4864280">log</span> <span m="4865470">4</span> <span
  m="4865900">over</span> <span m="4866070">3</span> <span
  m="4867490">times</span> <span m="4868620">2Cn</span> <span
  m="4869400">levels.</span> <span m="4872430">And</span> <span
  m="4874320">that's</span> <span m="4874560">pretty</span> <span
  m="4874700">much</span> <span m="4874870">it.</span></p><p><span
  m="4875760">Obviously,</span> <span m="4876180">now</span> <span
  m="4876380">you</span> <span m="4876490">can</span> <span
  m="4876600">start</span> <span m="4876810">ignoring</span> <span
  m="4877170">the</span> <span m="4877250">constants.</span> <span
  m="4878390">You</span> <span m="4878640">just</span> <span
  m="4878860">keep</span> <span m="4879060">the</span> <span
  m="4879110">log</span> <span m="4879440">here.</span> <span
  m="4879780">You</span> <span m="4879870">don't</span> <span
  m="4880040">care</span> <span m="4880210">what</span> <span
  m="4880320">the</span> <span m="4880390">base</span> <span
  m="4880557">is.</span> <span m="4881320">You</span> <span
  m="4881440">got</span> <span m="4881560">an</span> <span m="4881650">n</span>
  <span m="4881890">here.</span> <span m="4882230">So</span> <span
  m="4882290">drop</span> <span m="4882560">the</span> <span
  m="4882620">2C.</span> <span m="4883130">Drop</span> <span
  m="4883360">the</span> <span m="4883450">4</span> <span
  m="4883670">over</span> <span m="4883780">3.</span> <span
  m="4884460">Drop</span> <span m="4884670">the</span> <span
  m="4884760">2C.</span> <span m="4885560">And</span> <span
  m="4885690">you</span> <span m="4885770">get</span> <span
  m="4885930">your</span> <span m="4886050">n</span> <span
  m="4886170">log</span> <span m="4886400">n.</span> <span
  m="4887260">OK?</span></p><p><span m="4888070">So</span> <span
  m="4888510">that's</span> <span m="4888680">pretty</span> <span
  m="4888830">much</span> <span m="4889000">it.</span> <span
  m="4890650">I'll</span> <span m="4892270">stick</span> <span
  m="4892410">around</span> <span m="4892650">here</span> <span
  m="4892870">for</span> <span m="4893010">questions.</span> <span
  m="4894090">But</span> <span m="4894490">you</span> <span
  m="4894610">got</span> <span m="4894760">an</span> <span
  m="4894860">example</span> <span m="4895390">of</span> <span
  m="4896650">a</span> <span m="4896730">Monte</span> <span
  m="4897020">Carlo</span> <span m="4897740">algorithm.</span> <span
  m="4898210">You</span> <span m="4898290">got</span> <span
  m="4898390">an</span> <span m="4898470">example</span> <span
  m="4898850">of</span> <span m="4898940">a</span> <span m="4898980">Las</span>
  <span m="4899220">Vegas</span> <span m="4899530">algorithm.</span></p><p><span
  m="4900400">And</span> <span m="4900780">tomorrow</span> <span
  m="4901060">in</span> <span m="4901180">section,</span> <span
  m="4901590">you'll</span> <span m="4901760">see</span> <span
  m="4901940">a</span> <span m="4902010">slightly</span> <span
  m="4902400">more</span> <span m="4902610">involved</span> <span
  m="4903020">analysis</span> <span m="4904030">for</span> <span
  m="4904380">something</span> <span m="4904810">that</span> <span
  m="4905340">looks</span> <span m="4905750">a</span> <span
  m="4905830">lot</span> <span m="4906100">closer</span> <span
  m="4906500">to</span> <span m="4906580">the</span> <span
  m="4906690">randomized</span> <span m="4907500">quicksort.</span> <span
  m="4908470">So</span> <span m="4909360">see</span> <span
  m="4909470">you</span> <span m="4909530">next</span> <span
  m="4909750">time.</span></p>
uid: 8484e787729f4e732109065f90f0f5d9
type: courses
layout: video
---
