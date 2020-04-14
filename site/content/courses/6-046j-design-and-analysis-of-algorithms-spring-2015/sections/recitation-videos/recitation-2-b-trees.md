---
title: 'Recitation 2: B-trees'
uid: 0aa6d2318687217d3b332190d8d710e6
parent_uid: 8c671299aae36eba669ca13490c21dec
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-2-b-trees
short_url: recitation-2-b-trees
inline_embed_id: '60574762recitation2:b-trees40159468'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to 2-3
  Trees and B-Trees are discussed.</p> <p><strong>Instructors:</strong> Amartya
  Shankha Biswas</p>
related_resources_text: ''
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
  m="12800">materials</span> <span m="13340">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="23080">PROFESSOR: So</span> <span m="23370">this</span> <span
  m="23490">is</span> <span m="23580">a</span> <span m="23660">2-3</span> <span
  m="23800">tree.</span> <span m="24150">So as</span> <span m="24390">you</span>
  <span m="24480">can</span> <span m="24600">see,</span> <span
  m="25430">every</span> <span m="25700">node</span> <span
  m="25920">has--</span> <span m="26170">so</span> <span m="26270">the</span>
  <span m="26370">2-3</span> <span m="26760">is</span> <span
  m="27080">either</span> <span m="27340">two</span> <span m="27440">children
  or</span> <span m="27810">three</span> <span m="27990">children.</span> <span
  m="28840">Every</span> <span m="29280">node can</span> <span
  m="29410">have</span> <span m="29750">either</span> <span m="29940">one</span>
  <span m="30160">key or</span> <span m="30400">two</span> <span
  m="30580">keys.</span> <span m="31350">And</span> <span m="31680">the</span>
  <span m="31780">correlation</span> <span m="32250">is</span> <span
  m="32380">that</span> <span m="33050">every--</span> <span m="34665">so
  if</span> <span m="34930">there are n</span> <span m="35140">keys</span> <span
  m="35370">in</span> <span m="35460">a</span> <span m="35560">node,</span>
  <span m="36140">it</span> <span m="36290">has</span> <span m="36760">n</span>
  <span m="36930">plus</span> <span m="37060">1</span> <span
  m="37210">children.</span></p><p><span m="37610">So</span> <span
  m="37920">the</span> <span m="38010">way</span> <span m="38150">that</span>
  <span m="38360">works</span> <span m="38720">is</span> <span
  m="39590">similar</span> <span m="40180">to</span> <span
  m="40270">binary</span> <span m="40430">search</span> <span
  m="40570">trees.</span> <span m="41740">So</span> <span m="41900">if</span>
  <span m="42060">you</span> <span m="42210">have</span> <span
  m="43470">value</span> <span m="43720">here,</span> <span m="44550">the</span>
  <span m="44740">two</span> <span m="45060">children</span> <span
  m="45430">surrounding</span> <span m="45870">it--</span> <span
  m="46350">so</span> <span m="46420">this</span> <span m="46580">side</span>
  <span m="46760">is</span> <span m="46850">less,</span> <span
  m="47260">this</span> <span m="47360">side</span> <span m="47550">is</span>
  <span m="47640">more.</span> <span m="48850">So</span> <span
  m="49500">it's</span> <span m="49670">essentially</span> <span
  m="50030">sort</span> <span m="50180">of</span> <span m="50670">going</span>
  <span m="51420">in</span> <span m="51650">order</span> <span
  m="51890">reversal,</span> <span m="52530">left</span> <span
  m="53010">child,</span> <span m="53645">root,</span> <span
  m="53990">right</span> <span m="54250">child.</span> <span m="54830">So</span>
  <span m="54930">[INAUDIBLE],</span> <span m="55300">it's</span> <span
  m="55510">ordered.</span></p><p><span m="56440">So</span> <span
  m="56670">generally</span> <span m="57500">a</span> <span m="57610">B</span>
  <span m="57710">tree</span> <span m="57980">will</span> <span
  m="58100">have</span> <span m="58970">some</span> <span
  m="62760">nodes.</span> <span m="64010">So</span> <span m="64150">let's</span>
  <span m="64319">say</span> <span m="65640">n</span> <span m="66594">and</span>
  <span m="69456">n</span> <span m="69940">plus</span> <span m="70080">1</span>
  <span m="70240">children.</span> <span m="76920">And</span> <span
  m="77550">if</span> <span m="77660">you</span> <span m="77790">take</span>
  <span m="78660">anything</span> <span m="78970">in</span> <span
  m="79040">the</span> <span m="79120">middle,</span> <span
  m="80130">look</span> <span m="80190">at the</span> <span m="80270">two</span>
  <span m="80700">children,</span> <span m="81830">all</span> <span
  m="82030">the</span> <span m="82130">keys</span> <span m="82360">in</span>
  <span m="82450">this</span> <span m="82600">sub-tree</span> <span
  m="83260">are</span> <span m="83340">smaller</span> <span
  m="83670">than</span> <span m="83820">the</span> <span m="84480">key</span>
  <span m="84680">here,</span> <span m="85090">and</span> <span m="85460">all
  the</span> <span m="85850">keys</span> <span m="86360">in</span> <span
  m="86440">this</span> <span m="86620">sub-tree</span> <span
  m="86900">are</span> <span m="87190">larger than</span> <span
  m="87310">the</span> <span m="87400">key</span> <span m="87550">here.</span>
  <span m="88680">So</span> <span m="88800">that's</span> <span
  m="88990">the</span> <span m="89040">general</span> <span
  m="89350">node.</span></p><p><span m="90320">So</span> <span
  m="92021">before</span> <span m="92400">we</span> <span m="93330">go</span>
  <span m="93690">into</span> <span m="93910">more</span> <span
  m="94090">details</span> <span m="94570">of</span> <span m="94670">the</span>
  <span m="94790">properties and</span> <span m="95260">everything,</span> <span
  m="96520">the</span> <span m="96580">question</span> <span m="96850">is</span>
  <span m="97370">why</span> <span m="97690">use</span> <span
  m="97960">B-trees.</span> <span m="99330">So</span> <span m="99810">if</span>
  <span m="99900">we</span> <span m="99990">do</span> <span m="100120">a</span>
  <span m="100200">quick</span> <span m="100840">depth</span> <span
  m="101260">analysis,</span> <span m="102380">we</span> <span
  m="102520">can</span> <span m="102660">see</span> <span m="102830">that</span>
  <span m="103130">the</span> <span m="103220">depth</span> <span
  m="103470">is</span> <span m="103610">to</span> <span m="103740">log</span>
  <span m="103980">n</span> <span m="104110">rate.</span> <span
  m="104760">Is</span> <span m="104920">that</span> <span
  m="105470">clear</span> <span m="105700">to</span> <span
  m="106140">everyone</span> <span m="107170">sort</span> <span
  m="107340">of,</span> <span m="107480">why</span> <span m="107650">the</span>
  <span m="107770">depth</span> <span m="107950">is</span> <span
  m="108040">log</span> <span m="108335">n?</span> <span
  m="108630">Because</span> <span m="108840">you</span> <span
  m="109240">have</span> <span m="109370">branching</span> <span
  m="110710">just</span> <span m="110920">like</span> <span m="111040">in</span>
  <span m="111160">binary</span> <span m="111320">search</span> <span
  m="111720">trees.</span> <span m="112025">In</span> <span m="112330">fact,
  you</span> <span m="112480">have</span> <span m="112610">more</span> <span
  m="112780">branching.</span> <span m="113860">But</span> <span
  m="114190">in</span> <span m="114350">any</span> <span m="114450">case,</span>
  <span m="114840">depth</span> <span m="115140">is</span> <span m="115230">to
  log</span> <span m="115560">n.</span></p><p><span m="116020">But</span> <span
  m="116260">why</span> <span m="116470">use</span> <span
  m="117120">B-trees</span> <span m="117690">over</span> <span
  m="118670">binary</span> <span m="118940">search</span> <span
  m="119210">trees?</span> <span m="120260">Anyone</span> <span
  m="120610">have</span> <span m="120850">a</span> <span
  m="121560">reason</span> <span m="124540">why you</span> <span
  m="124720">would</span> <span m="124920">prefer</span> <span
  m="125170">to</span> <span m="125280">use</span> <span
  m="126720">B-trees</span> <span m="127330">or not?</span> <span
  m="127500">So</span> <span m="127710">all the</span> <span
  m="127960">operations</span> <span m="128449">are still</span> <span
  m="128690">log n.</span> <span m="131370">Any</span> <span
  m="131500">guesses?</span> <span m="136140">None.</span> <span
  m="137080">OK.</span></p><p><span m="138500">Well,</span> <span
  m="138650">OK,</span> <span m="138830">the</span> <span
  m="138940">reason</span> <span m="139410">is</span> <span
  m="140760">memory</span> <span m="141070">hierarchy.</span> <span
  m="142240">So</span> <span m="143210">normally in</span> <span
  m="143660">[INAUDIBLE],</span> <span m="144160">we just</span> <span
  m="144340">assume</span> <span m="144680">that</span> <span
  m="145380">the</span> <span m="145470">computer has</span> <span
  m="145900">access</span> <span m="146290">to</span> <span
  m="146700">memory,</span> <span m="147320">and</span> <span
  m="147450">you</span> <span m="147540">can</span> <span m="147660">just</span>
  <span m="148060">pick</span> <span m="148220">up</span> <span
  m="148340">things</span> <span m="148560">from</span> <span
  m="148720">disk</span> <span m="148990">and</span> <span
  m="149540">constant</span> <span m="149860">time</span> <span
  m="150150">and</span> <span m="151010">do</span> <span m="151160">your</span>
  <span m="151310">operations</span> <span m="151760">with</span> <span
  m="151880">it,</span> <span m="152000">and</span> <span m="152390">you</span>
  <span m="152480">don't</span> <span m="152650">worry</span> <span
  m="152890">about</span> <span m="153180">caches</span> <span
  m="153490">and</span> <span m="153600">everything.</span> <span
  m="154340">But</span> <span m="154480">that's</span> <span
  m="154610">not</span> <span m="154760">how</span> <span
  m="154900">computers</span> <span m="155280">work.</span> <span
  m="155710">So</span> <span m="156310">in</span> <span m="156570">a</span>
  <span m="156720">computer, you</span> <span m="156850">have--</span> <span
  m="157440">so</span> <span m="157750">those</span> <span m="157930">of</span>
  <span m="158000">you</span> <span m="158060">who</span> <span
  m="158160">have</span> <span m="158210">taken</span> <span
  m="158660">some</span> <span m="158780">computer</span> <span
  m="159090">architecture</span> <span m="159400">class</span> <span
  m="159980">[INAUDIBLE]</span> <span m="160340">or</span> <span
  m="160610">something,</span> <span m="161275">you</span> <span
  m="161550">will</span> <span m="161630">know</span> <span
  m="161990">that</span> <span m="162100">hierarchy.</span></p><p><span
  m="162730">So</span> <span m="162960">there's a</span> <span
  m="163070">CPU--</span> <span m="164060">so</span> <span
  m="164710">let's</span> <span m="164790">draw</span> <span
  m="165080">it</span> <span m="165576">somewhere.</span> <span
  m="166570">So</span> <span m="166680">you</span> <span m="166750">have</span>
  <span m="166920">your</span> <span m="167000">CPU.</span> <span
  m="168020">And</span> <span m="168870">[INAUDIBLE]</span> <span
  m="169230">CPU,</span> <span m="169690">you have some</span> <span
  m="169760">registers.</span> <span m="170570">You</span> <span m="170900">have
  your caches,</span> <span m="171280">L1,</span> <span m="171430">L2,</span>
  <span m="171780">L3,</span> <span m="172200">whatever.</span> <span
  m="172930">You</span> <span m="173180">have your</span> <span
  m="173520">RAM.</span> <span m="174080">You</span> <span
  m="174240">have</span> <span m="174710">disk</span> <span
  m="175070">after</span> <span m="175280">that.</span> <span
  m="175610">So</span> <span m="175930">disk</span> <span m="176350">[? loads.
  ?]</span> <span m="176470">Then you</span> <span m="176660">have</span> <span
  m="176760">your,</span> <span m="177080">I don't</span> <span
  m="177160">know,</span> <span m="177270">your</span> <span
  m="177420">cloud,</span> <span m="177910">whatever.</span> <span
  m="179090">So</span> <span m="179270">each</span> <span
  m="179450">level,</span> <span m="179760">your</span> <span
  m="180050">memory</span> <span m="180240">size</span> <span
  m="180670">grows</span> <span m="181130">and</span> <span
  m="181640">your</span> <span m="182040">access</span> <span
  m="182420">time</span> <span m="182960">grows</span> <span
  m="183230">as</span> <span m="183370">well.</span></p><p><span
  m="184430">So</span> <span m="185410">in</span> <span m="185610">the</span>
  <span m="186010">basic</span> <span m="186270">memory</span> <span
  m="186550">hierarchy</span> <span m="186910">model,</span> <span
  m="187650">we</span> <span m="187850">have</span> <span m="188580">just</span>
  <span m="190270">two</span> <span m="190400">levels</span> <span
  m="190700">of</span> <span m="190770">hierarchy,</span> <span
  m="191140">let's</span> <span m="191310">say.</span> <span
  m="191930">So</span> <span m="192160">you</span> <span m="192280">have</span>
  <span m="192420">cache</span> <span m="195070">connected</span> <span
  m="195230">by</span> <span m="195380">a</span> <span m="195580">high</span>
  <span m="195740">bandwidth</span> <span m="196090">channel</span> <span
  m="196370">to</span> <span m="196450">the</span> <span m="196550">CPU,</span>
  <span m="197560">and</span> <span m="197810">you have a</span> <span
  m="198140">low bandwidth</span> <span m="198450">channel</span> <span
  m="198770">to</span> <span m="199090">disk.</span> <span m="203040">So</span>
  <span m="204000">the</span> <span m="204160">difference</span> <span
  m="204530">is--</span> <span m="204700">so</span> <span
  m="205040">essentially</span> <span m="205870">you</span> <span
  m="205970">can</span> <span m="206100">consider</span> <span
  m="206430">that</span> <span m="206640">cache</span> <span
  m="206970">just</span> <span m="207110">has</span> <span
  m="207200">infinite</span> <span m="207490">speed.</span> <span
  m="207920">Cache,</span> <span m="208180">just</span> <span
  m="208390">like,</span> <span m="208890">whatever</span> <span
  m="209270">you</span> <span m="209370">can</span> <span m="209510">take</span>
  <span m="209680">it.</span> <span m="209790">You</span> <span
  m="209860">don't</span> <span m="210040">have</span> <span
  m="210180">any</span> <span m="210300">cost</span> <span m="210600">for</span>
  <span m="211210">bringing in</span> <span m="211580">stuff</span> <span
  m="211760">from</span> <span m="211890">cache.</span> <span
  m="212790">But</span> <span m="212940">it's</span> <span
  m="213370">finite</span> <span m="213750">size.</span> <span m="214680">So the
  way</span> <span m="214950">cache</span> <span m="215150">works</span> <span
  m="215430">is</span> <span m="215580">it</span> <span m="215660">has</span>
  <span m="215810">a</span> <span m="215850">bunch</span> <span
  m="216080">of</span> <span m="216190">words,</span> <span
  m="217222">which</span> <span m="217560">is a</span> <span
  m="217660">finite</span> <span m="218170">number</span> <span
  m="218380">of</span> <span m="218460">words.</span> <span m="218740">So</span>
  <span m="219480">each</span> <span m="219870">word</span> <span
  m="220220">has</span> <span m="221680">size</span> <span m="221940">B,</span>
  <span m="223040">and</span> <span m="223110">let's</span> <span
  m="223310">say</span> <span m="223420">you</span> <span m="223560">have</span>
  <span m="224400">m</span> <span m="224650">words.</span></p><p><span
  m="227610">However,</span> <span m="227830">hard</span> <span
  m="228100">disk</span> <span m="228350">is</span> <span
  m="229460">just,</span> <span m="230080">let's</span> <span
  m="230150">say,</span> <span m="230430">infinite</span> <span
  m="230580">memory,</span> <span m="231340">but</span> <span
  m="231480">it</span> <span m="231560">has</span> <span m="231830">some</span>
  <span m="232780">cost</span> <span m="233060">associated</span> <span
  m="233520">to</span> <span m="234290">accessing</span> <span
  m="234730">things.</span> <span m="236130">Also</span> <span m="236980">when
  you</span> <span m="237280">access</span> <span m="237590">things</span> <span
  m="237720">from</span> <span m="237840">hard</span> <span
  m="238060">disk,</span> <span m="238580">you</span> <span
  m="238710">copy</span> <span m="239020">them</span> <span
  m="239090">into</span> <span m="239270">cache.</span> <span
  m="239630">When</span> <span m="239710">you</span> <span
  m="239780">copy</span> <span m="240110">a</span> <span m="240160">block</span>
  <span m="240520">of size</span> <span m="240850">b,</span> <span
  m="241440">you</span> <span m="241570">take</span> <span m="241730">it</span>
  <span m="241800">up</span> <span m="241990">from the</span> <span
  m="242110">hard</span> <span m="242270">disk,</span> <span
  m="243020">and</span> <span m="243820">you</span> <span m="243940">take</span>
  <span m="244090">a</span> <span m="244150">block,</span> <span m="244800">and
  you</span> <span m="244960">put it</span> <span m="245090">into</span> <span
  m="245280">cache.</span> <span m="245920">And</span> <span
  m="246040">you</span> <span m="246090">have to</span> <span
  m="246230">get</span> <span m="246360">rid</span> <span m="246470">of</span>
  <span m="246530">something</span> <span m="246840">because</span> <span
  m="247030">it's</span> <span m="247140">fine.</span></p><p><span
  m="248510">So</span> <span m="249050">what you</span> <span
  m="249260">want</span> <span m="249520">to</span> <span m="249620">do</span>
  <span m="250230">is</span> <span m="250340">you</span> <span
  m="250430">want</span> <span m="250590">to</span> <span
  m="250660">utilize</span> <span m="251460">that</span> <span
  m="251860">b</span> <span m="252010">block</span> <span
  m="252450">efficiently.</span> <span m="254010">You</span> <span
  m="254160">just</span> <span m="254360">want</span> <span m="254490">to</span>
  <span m="255070">bring</span> <span m="255390">a b</span> <span
  m="255820">block</span> <span m="256040">every</span> <span
  m="256269">time</span> <span m="256459">you</span> <span
  m="256529">want</span> <span m="256720">to access a</span> <span
  m="257079">new</span> <span m="257190">node.</span> <span m="258170">In</span>
  <span m="258320">a</span> <span m="258360">binary</span> <span
  m="258649">search</span> <span m="258920">tree,</span> <span
  m="259980">normal</span> <span m="260380">operations</span> <span
  m="260639">are</span> <span m="260970">what?</span> <span
  m="261170">You</span> <span m="261600">start in</span> <span
  m="261860">the</span> <span m="261959">root</span> <span m="262244">and</span>
  <span m="262530">go to a</span> <span m="262950">node.</span> <span
  m="265520">But</span> <span m="265770">that's</span> <span
  m="266410">not</span> <span m="266630">very</span> <span
  m="267090">easily</span> <span m="267500">correlated</span> <span
  m="267910">with</span> <span m="268030">this.</span> <span
  m="268190">Right?</span> <span m="268380">So</span> <span m="268760">if</span>
  <span m="268880">you</span> <span m="269010">want</span> <span
  m="269290">to</span> <span m="269800">utilize</span> <span
  m="269920">an</span> <span m="270080">entire</span> <span
  m="270410">block,</span> <span m="271180">you would</span> <span
  m="271370">want</span> <span m="271570">something</span> <span
  m="271820">like</span> <span m="271990">a</span> <span m="272050">block</span>
  <span m="272420">which</span> <span m="272570">sort</span> <span
  m="272730">of</span> <span m="272830">goes</span> <span m="273080">down</span>
  <span m="273320">the</span> <span m="273420">tree.</span> <span
  m="276080">But</span> <span m="276180">that's</span> <span
  m="276360">not</span> <span m="276480">how</span> <span
  m="276580">binary</span> <span m="276780">trees</span> <span m="277140">are
  stored.</span> <span m="277500">Binary trees</span> <span
  m="277790">are</span> <span m="277850">stored</span> <span
  m="279080">this</span> <span m="279260">way.</span></p><p><span
  m="281450">So</span> <span m="281580">that's</span> <span
  m="281830">the</span> <span m="281930">nice</span> <span
  m="282020">thing</span> <span m="282180">about</span> <span
  m="282290">B-trees.</span> <span m="283660">So</span> <span
  m="284850">this</span> <span m="285000">is</span> <span m="285160">just
  a</span> <span m="285390">2-3</span> <span m="285500">tree.</span> <span
  m="285820">This</span> <span m="285940">is</span> <span m="285990">not</span>
  <span m="286180">a</span> <span m="286240">general</span> <span
  m="286510">B-tree.</span> <span m="286660">A</span> <span
  m="286780">general</span> <span m="287050">B-tree</span> <span m="287440">will
  have a</span> <span m="287610">bunch</span> <span m="287810">of</span> <span
  m="287880">nodes,</span> <span m="288840">and</span> <span
  m="288970">we'll</span> <span m="289080">come</span> <span
  m="289230">to</span> <span m="289310">that</span> <span
  m="289740">number.</span> <span m="290690">But</span> <span
  m="290980">generally</span> <span m="291420">you</span> <span
  m="291510">want</span> <span m="291690">to</span> <span m="291770">make</span>
  <span m="292000">that</span> <span m="292150">number</span> <span
  m="292420">of</span> <span m="292520">nodes</span> <span
  m="293220">something</span> <span m="293610">like</span> <span
  m="294130">the</span> <span m="295400">cache--</span> <span
  m="296770">what</span> <span m="296900">is it?</span> <span
  m="297380">The</span> <span m="297430">word</span> <span m="297620">size
  in</span> <span m="297920">the</span> <span
  m="298140">cache.</span></p><p><span m="298910">So</span> <span
  m="299010">once</span> <span m="299150">you</span> <span m="299210">do</span>
  <span m="299330">that,</span> <span m="299690">you</span> <span
  m="299720">can</span> <span m="300880">get</span> <span m="301040">an</span>
  <span m="301110">entire</span> <span m="301500">node</span> <span
  m="301720">from</span> <span m="301900">disk,</span> <span
  m="302860">like</span> <span m="303130">work</span> <span m="303470">on</span>
  <span m="303610">that,</span> <span m="304520">and</span> <span
  m="304720">then</span> <span m="305000">get</span> <span
  m="305160">another</span> <span m="305450">[INAUDIBLE],</span> <span
  m="305950">so</span> <span m="306330">your</span> <span
  m="306480">height</span> <span m="306710">is</span> <span
  m="306830">reduced.</span> <span m="307900">And</span> <span
  m="308040">you</span> <span m="308150">can</span> <span m="308280">do</span>
  <span m="308470">your</span> <span m="308580">operation</span> <span
  m="309010">much</span> <span m="309180">quicker,</span> <span
  m="309420">because</span> <span m="309980">you're not</span> <span
  m="310150">accessing</span> <span m="311200">disk</span> <span
  m="311700">every</span> <span m="312040">time</span> <span
  m="312680">you're</span> <span m="312940">going</span> <span
  m="313160">down</span> <span m="313350">a</span> <span
  m="313400">level.</span> <span m="315310">Sorry.</span> <span
  m="315560">You</span> <span m="315710">are</span> <span
  m="315830">accessing</span> <span m="316200">disk</span> <span
  m="316440">every</span> <span m="316650">time</span> <span
  m="316820">you</span> <span m="316880">go</span> <span m="317000">down
  a</span> <span m="317210">level,</span> <span m="317930">but</span> <span
  m="318420">you're</span> <span m="319220">utilizing</span> <span
  m="319790">the</span> <span m="319860">whole</span> <span
  m="320070">block</span> <span m="320490">when</span> <span m="320980">you're
  accessing</span> <span m="321480">disk.</span> <span m="322226">Good?</span>
  <span m="323100">Sort of</span> <span m="323220">make</span> <span
  m="323370">sense?</span> <span m="325180">OK.</span></p><p><span
  m="327370">So</span> <span m="328410">let's</span> <span
  m="328880">write</span> <span m="329070">down</span> <span
  m="329350">the</span> <span m="329460">specifications</span> <span
  m="330190">for</span> <span m="330810">B-trees</span> <span
  m="331180">now.</span> <span m="334352">All</span> <span
  m="334834">right.</span> <span m="340620">So</span> <span
  m="342660">number</span> <span m="342910">of</span> <span
  m="343010">children.</span> <span m="350090">So</span> <span
  m="350870">first</span> <span m="351030">of</span> <span
  m="351100">all,</span> <span m="351360">a</span> <span m="351620">B-tree
  has</span> <span m="352110">something</span> <span m="352510">called</span>
  <span m="352810">a</span> <span m="353420">branching</span> <span
  m="353950">factor.</span> <span m="354960">So</span> <span
  m="355200">in</span> <span m="355300">the</span> <span m="355420">2-3</span>
  <span m="355695">tree,</span> <span m="355970">the</span> <span
  m="356070">branching</span> <span m="356400">factor</span> <span
  m="356690">is</span> <span m="356810">two.</span> <span m="358810">So</span>
  <span m="358990">what that</span> <span m="359200">means</span> <span
  m="359390">is</span> <span m="359470">simply</span> <span
  m="359740">that</span> <span m="360040">it</span> <span m="360170">just</span>
  <span m="360340">balances</span> <span m="360650">the</span> <span
  m="360700">number</span> <span m="360940">of</span> <span
  m="361030">children.</span> <span m="361420">So the</span> <span
  m="361860">number</span> <span m="362130">of</span> <span
  m="362220">children</span> <span m="362530">has</span> <span
  m="362710">to</span> <span m="362780">be</span> <span
  m="362870">greater</span> <span m="363080">than</span> <span
  m="363210">or</span> <span m="363310">equal</span> <span m="363510">to</span>
  <span m="363770">2.</span> <span m="364460">Other</span> <span
  m="364710">than</span> <span m="364820">the</span> <span
  m="364930">root</span> <span m="365130">node.</span> <span
  m="365690">The</span> <span m="365800">root</span> <span
  m="365950">node</span> <span m="366170">can</span> <span
  m="366260">have</span> <span m="366330">less than</span> <span
  m="366650">B</span> <span m="366750">children.</span> <span
  m="367970">It's</span> <span m="368380">fine.</span></p><p><span
  m="369200">Also</span> <span m="369440">it's</span> <span
  m="369590">upper</span> <span m="369840">bounded</span> <span
  m="371120">by</span> <span m="371300">2B</span> <span m="371660">[? plus
  ?]</span> <span m="372040">2B.</span> <span m="373670">Notice</span> <span
  m="373950">that</span> <span m="374090">this</span> <span m="374240">is
  a</span> <span m="374310">strict</span> <span m="374650">upper</span> <span
  m="374820">bound.</span> <span m="375760">So</span> <span
  m="376280">you</span> <span m="376400">can</span> <span m="376530">have</span>
  <span m="376740">at</span> <span m="376920">most</span> <span
  m="377170">2B</span> <span m="377410">minus</span> <span m="377690">1</span>
  <span m="380130">children</span> <span m="380810">from</span> <span
  m="380990">a</span> <span m="381030">node.</span></p><p><span
  m="382140">Also</span> <span m="382640">remember</span> <span
  m="382950">that</span> <span m="383720">the</span> <span
  m="383840">number</span> <span m="384430">of</span> <span
  m="385180">keys,</span> <span m="388360">the</span> <span
  m="388460">number</span> <span m="388730">of</span> <span
  m="388870">keys</span> <span m="389790">is</span> <span m="389940">just</span>
  <span m="390240">1</span> <span m="390580">less</span> <span
  m="390820">than</span> <span m="391120">the</span> <span
  m="391230">number</span> <span m="391550">of</span> <span
  m="391620">children.</span> <span m="392640">Therefore,</span> <span
  m="397620">these</span> <span m="398070">inequalities</span> <span
  m="398330">are</span> <span m="398590">just</span> <span
  m="399150">reduced</span> <span m="399490">by</span> <span
  m="399620">1.</span> <span m="400730">So</span> <span m="401035">you</span>
  <span m="401340">have</span> <span m="401370">minus</span> <span
  m="401780">1</span> <span m="402854">and</span> <span m="403231">you
  have</span> <span m="403610">2B</span> <span m="403760">minus</span> <span
  m="404260">1.</span> <span m="405260">So</span> <span m="405570">the</span>
  <span m="405610">number</span> <span m="405850">of</span> <span
  m="405940">keys can</span> <span m="406280">be</span> <span
  m="406390">between</span> <span m="406770">minus</span> <span
  m="407170">1</span> <span m="407810">and</span> <span m="407990">2B</span>
  <span m="408180">minus</span> <span m="408450">2.</span> <span
  m="409760">The</span> <span m="409850">rationale</span> <span
  m="410210">for</span> <span m="410330">that</span> <span
  m="410520">will</span> <span m="410640">become</span> <span
  m="410940">clear--</span> <span m="411820">yeah?</span></p><p><span
  m="412270">AUDIENCE: Is B</span> <span m="412720">the height of the</span>
  <span m="413170">tree?</span></p><p><span m="414345">PROFESSOR: No,</span>
  <span m="414600">B</span> <span m="414950">is the</span> <span
  m="415040">branching.</span> <span m="416660">B is</span> <span
  m="416970">the</span> <span m="417070">branching</span> <span
  m="417370">factor.</span> <span m="417650">So</span> <span
  m="418230">that</span> <span m="418390">is</span> <span m="418490">the</span>
  <span m="418570">number</span> <span m="418840">of</span> <span
  m="418930">children.</span> <span m="419770">It's</span> <span m="420070">not
  the</span> <span m="420190">number</span> <span m="420410">of</span> <span
  m="420470">children.</span> <span m="420830">It's</span> <span
  m="421260">a</span> <span m="421300">bound</span> <span m="421610">of</span>
  <span m="421690">the</span> <span m="421730">number</span> <span
  m="421950">of</span> <span m="422020">children.</span> <span
  m="422650">So</span> <span m="422780">like</span> <span m="422920">in</span>
  <span m="422990">the</span> <span m="423090">2-3</span> <span
  m="423590">tree,</span> <span m="425960">B is</span> <span
  m="426180">equal</span> <span m="426470">to 2,</span> <span
  m="427050">and</span> <span m="427390">this is a</span> <span
  m="427730">2-3</span> <span m="428345">tree.</span> <span m="433300">So</span>
  <span m="433480">the</span> <span m="433700">2</span> <span
  m="434210">refers</span> <span m="434670">to--</span> <span
  m="436100">you</span> <span m="436240">can</span> <span m="436370">have</span>
  <span m="436930">either</span> <span m="437830">two</span> <span
  m="438000">children</span> <span m="438950">or</span> <span
  m="439170">you</span> <span m="439210">can</span> <span m="439350">have</span>
  <span m="439630">three</span> <span m="440210">children.</span> <span
  m="441660">And</span> <span m="441890">so</span> <span m="443140">the</span>
  <span m="443200">upper bound</span> <span m="443460">on children</span> <span
  m="443750">is</span> <span m="443850">2B</span> <span m="444080">minus</span>
  <span m="444360">1.</span> <span m="447110">2B</span> <span
  m="447390">minus</span> <span m="447660">1</span> <span m="447860">is</span>
  <span m="447940">equal</span> <span m="448160">to</span> <span
  m="448200">3.</span> <span m="449240">So</span> <span m="449460">you
  can</span> <span m="449520">have</span> <span m="450130">two</span> <span
  m="450640">or</span> <span m="450720">three</span> <span
  m="450940">children.</span></p><p><span m="452180">And</span> <span
  m="452280">correspondingly,</span> <span m="453080">you</span> <span
  m="453330">can have</span> <span m="453530">either</span> <span
  m="453800">one</span> <span m="454480">or</span> <span m="454670">two</span>
  <span m="454830">keys</span> <span m="455220">in</span> <span
  m="455370">a</span> <span m="455420">node.</span> <span m="457300">Make</span>
  <span m="457440">sense?</span></p><p><span m="457750">AUDIENCE:
  Yeah.</span></p><p><span m="458147">PROFESSOR: Cool.</span> <span
  m="459340">OK</span> <span m="460810">So</span> <span m="460920">coming</span>
  <span m="461090">back</span> <span m="461240">to</span> <span
  m="461320">this.</span> <span m="462200">So</span> <span m="462650">the</span>
  <span m="462780">root</span> <span m="463160">does</span> <span
  m="463290">not</span> <span m="463470">have</span> <span m="463620">a</span>
  <span m="464090">lower</span> <span m="464380">bound.</span> <span
  m="464630">The</span> <span m="464750">root</span> <span m="464940">can</span>
  <span m="465070">have</span> <span m="465300">one</span> <span
  m="465480">child</span> <span m="466020">in</span> <span m="466190">any</span>
  <span m="466360">tree.</span> <span m="467160">So</span> <span
  m="467520">you</span> <span m="467630">have</span> <span m="467780">a</span>
  <span m="468670">B</span> <span m="468990">equal</span> <span
  m="469200">to</span> <span m="469270">5</span> <span m="469530">tree,</span>
  <span m="470190">the</span> <span m="470310">root can</span> <span
  m="470400">still</span> <span m="470720">have</span> <span
  m="470750">one</span> <span m="470970">child--</span> <span
  m="471690">sorry.</span> <span m="472050">Not</span> <span
  m="472300">one</span> <span m="472520">child,</span> <span
  m="472970">one</span> <span m="473630">key</span> <span
  m="473790">element,</span> <span m="474280">two</span> <span
  m="474410">children.</span> <span m="475480">All</span> <span
  m="475690">right.</span> <span m="476900">It's</span> <span
  m="477040">good.</span></p><p><span m="477760">Also</span> <span
  m="478380">it's</span> <span m="478760">completely</span> <span
  m="479350">balanced.</span> <span m="480370">So</span> <span
  m="480890">all</span> <span m="481140">the</span> <span
  m="481230">leaves</span> <span m="483370">are</span> <span
  m="483560">the</span> <span m="483670">same</span> <span
  m="483940">depth.</span> <span m="499330">So</span> <span
  m="500030">you</span> <span m="500150">can see it</span> <span
  m="500530">here,</span> <span m="500840">right?</span> <span
  m="501780">So</span> <span m="502260">you</span> <span m="502660">can't</span>
  <span m="502800">have</span> <span m="502920">a</span> <span
  m="503360">dangling</span> <span m="504050">node</span> <span
  m="504250">here.</span> <span m="504350">This is</span> <span
  m="504530">not</span> <span m="504740">allowed.</span> <span
  m="505880">You</span> <span m="505980">have</span> <span m="506420">to have
  a</span> <span m="506490">leaf.</span> <span m="507130">You</span> <span
  m="507210">have</span> <span m="507390">to</span> <span m="507480">have</span>
  <span m="507610">something</span> <span m="507860">going</span> <span
  m="508070">down,</span> <span m="508630">and</span> <span
  m="508760">everything</span> <span m="509150">ends</span> <span
  m="509370">at</span> <span m="509590">the</span> <span m="509660">same</span>
  <span m="509870">level.</span> <span m="511610">All</span> <span
  m="511720">right.</span> <span m="511900">So</span> <span
  m="512039">that's</span> <span m="512340">the thing.</span> <span
  m="513110">So</span> <span m="515090">also</span> <span m="515350">the</span>
  <span m="515440">leaves</span> <span m="515830">obviously</span> <span
  m="515909">don't</span> <span m="515950">have</span> <span
  m="516390">children,</span> <span m="516520">so</span> <span
  m="516980">this</span> <span m="517909">condition</span> <span
  m="518340">is</span> <span m="519409">violated</span> <span
  m="519840">by</span> <span m="519950">the</span> <span m="520260">leaf.</span>
  <span m="523130">So</span> <span m="524760">that's</span> <span
  m="525160">the</span> <span m="525230">basic</span> <span
  m="525470">structure</span> <span m="525810">of a</span> <span
  m="525970">B-tree.</span></p><p><span m="529260">So</span> <span
  m="529520">the</span> <span m="529630">first</span> <span
  m="529910">operation</span> <span m="530460">we'll</span> <span
  m="530470">consider</span> <span m="530760">on</span> <span m="530890">B-trees
  is</span> <span m="531310">searching.</span> <span m="532560">So</span> <span
  m="533400">that</span> <span m="533600">should</span> <span
  m="533730">be</span> <span m="533850">relatively</span> <span
  m="534140">straightforward.</span> <span m="535160">So</span> <span
  m="535740">remember</span> <span m="536000">how</span> <span
  m="536130">searching</span> <span m="536440">is</span> <span
  m="536530">done</span> <span m="536800">in the</span> <span
  m="536880">binary</span> <span m="537150">search</span> <span
  m="537370">tree.</span> <span m="538110">You</span> <span
  m="538450">bring</span> <span m="538670">in</span> <span m="538760">a</span>
  <span m="538790">value</span> <span m="539080">x</span> <span
  m="540650">compared</span> <span m="541060">to</span> <span
  m="541100">the</span> <span m="541240">key.</span> <span
  m="541900">Let's</span> <span m="542140">say x</span> <span m="542410">is
  less</span> <span m="542750">than</span> <span m="543085">K,</span> <span
  m="543420">you</span> <span m="543530">go</span> <span m="543670">down</span>
  <span m="543850">this</span> <span m="544370">path.</span> <span
  m="544875">Let's</span> <span m="545180">say</span> <span m="545450">x
  is</span> <span m="545910">greater than</span> <span m="546000">K,</span>
  <span m="546360">you</span> <span m="546470">go</span> <span
  m="546590">down</span> <span m="546750">this</span> <span
  m="546930">path.</span> <span m="548120">So</span> <span
  m="548220">similarly</span> <span m="548700">in</span> <span
  m="548800">a</span> <span m="548850">B-tree.</span></p><p><span
  m="549570">So</span> <span m="550780">let's</span> <span m="550990">say</span>
  <span m="551120">we</span> <span m="551270">bring</span> <span
  m="551470">in</span> <span m="551580">a</span> <span m="551620">value.</span>
  <span m="552010">Let's</span> <span m="552080">say</span> <span
  m="552290">you</span> <span m="553680">are</span> <span
  m="553840">looking</span> <span m="554140">for</span> <span
  m="554590">20.</span> <span m="555770">So</span> <span m="555900">you</span>
  <span m="555980">bring</span> <span m="556240">in 20</span> <span
  m="557290">compared</span> <span m="557660">to</span> <span
  m="557710">this.</span> <span m="558120">20 is</span> <span m="558510">less
  than</span> <span m="558900">30,</span> <span m="559690">so you</span> <span
  m="559800">go</span> <span m="559930">down</span> <span
  m="560110">here.</span> <span m="561190">Now</span> <span
  m="561430">you</span> <span m="561540">have</span> <span m="563030">two</span>
  <span m="563190">values.</span> <span m="564060">So</span> <span
  m="564180">where</span> <span m="564320">does</span> <span
  m="564500">20</span> <span m="564910">fit in here?</span> <span
  m="565060">Not</span> <span m="565240">here.</span> <span
  m="565890">Not</span> <span m="566100">here.</span> <span m="566350">It</span>
  <span m="566500">fits</span> <span m="566660">here.</span> <span
  m="567280">OK.</span> <span m="567450">Go down</span> <span
  m="567570">this</span> <span m="567670">tree.</span> <span
  m="569110">You</span> <span m="569510">find</span> <span m="569670">20,</span>
  <span m="570130">that's</span> <span m="570300">it.</span></p><p><span
  m="570980">So</span> <span m="571690">in</span> <span
  m="571830">general,</span> <span m="572860">you</span> <span
  m="573140">bring</span> <span m="573450">in</span> <span m="573570">a</span>
  <span m="573980">key</span> <span m="574220">K,</span> <span
  m="575300">you</span> <span m="575430">look</span> <span m="575590">at</span>
  <span m="575730">this</span> <span m="576140">node,</span> <span
  m="577410">and</span> <span m="577730">you</span> <span m="577800">go</span>
  <span m="577980">through all the</span> <span m="578290">values.</span> <span
  m="579110">So</span> <span m="579730">something</span> <span m="579990">I
  forgot to</span> <span m="580240">mention,</span> <span
  m="581720">which</span> <span m="582160">should</span> <span
  m="582320">be</span> <span m="582400">clear.</span> <span
  m="583590">All</span> <span m="583740">the</span> <span m="583840">keys</span>
  <span m="584090">in</span> <span m="584190">a</span> <span
  m="584240">node,</span> <span m="584570">they're</span> <span
  m="584720">sorted,</span> <span m="585570">one</span> <span m="585990">after
  the</span> <span m="586410">other.</span> <span m="587250">So</span> <span
  m="587440">your</span> <span m="588270">values</span> <span m="588630">go
  like</span> <span m="588940">this.</span> <span m="589350">So they're</span>
  <span m="589530">increasing</span> <span m="589970">in</span> <span
  m="590040">this</span> <span m="590260">way.</span> <span
  m="592140">Make</span> <span m="592180">sense?</span></p><p><span
  m="594835">So</span> <span m="595280">you</span> <span m="595400">bring</span>
  <span m="595550">in</span> <span m="595630">a</span> <span
  m="595680">key.</span> <span m="596440">Look</span> <span m="596620">at</span>
  <span m="596670">all</span> <span m="596830">the</span> <span
  m="596910">keys</span> <span m="597130">in</span> <span m="597250">the</span>
  <span m="597590">node you're</span> <span m="597960">looking</span> <span
  m="598190">at,</span> <span m="599900">pick</span> <span m="600200">the</span>
  <span m="600290">place</span> <span m="600620">where</span> <span
  m="600950">K</span> <span m="601150">fits</span> <span m="601360">in,</span>
  <span m="601630">unless</span> <span m="602000">it's</span> <span
  m="602110">already</span> <span m="602480">in the</span> <span
  m="602660">node.</span> <span m="602730">Then</span> <span
  m="603030">you're</span> <span m="603140">done.</span> <span
  m="603410">You've</span> <span m="603740">found</span> <span
  m="603990">it.</span> <span m="604660">Otherwise,</span> <span
  m="605040">let's</span> <span m="605230">say</span> <span m="605320">K</span>
  <span m="605745">fits in</span> <span m="606170">between</span> <span
  m="607020">these</span> <span m="607770">two</span> <span
  m="607960">guys.</span> <span m="608850">So</span> <span m="609490">you</span>
  <span m="609640">go</span> <span m="609810">down</span> <span
  m="610220">this</span> <span m="610570">child</span> <span
  m="611590">and</span> <span m="611720">continue.</span> <span
  m="613250">So</span> <span m="613470">searching</span> <span
  m="613980">with</span> <span m="614230">log</span> <span m="614690">n,</span>
  <span m="615100">similar</span> <span m="615370">to</span> <span
  m="615440">BSTs.</span></p><p><span m="620740">So</span> <span
  m="620890">searching</span> <span m="621200">is</span> <span
  m="621280">not</span> <span m="621430">very</span> <span
  m="621580">interesting.</span> <span m="638480">So</span> <span
  m="639580">next is</span> <span m="639850">insertion.</span> <span
  m="644440">So</span> <span m="644480">insertion</span> <span m="644580">is
  a</span> <span m="644850">little</span> <span m="645090">more</span> <span
  m="645530">interesting than</span> <span m="645980">searching.</span> <span
  m="646860">So</span> <span m="647000">what</span> <span m="647090">you</span>
  <span m="647130">do</span> <span m="647230">in</span> <span
  m="647320">insertion</span> <span m="647840">is</span> <span
  m="647980">you--</span></p><p><span m="648260">[SIDE
  CONVERSATION]</span></p><p><span m="669020">PROFESSOR: So</span> <span
  m="669540">before</span> <span m="669840">we</span> <span
  m="669940">resume,</span> <span m="670390">does</span> <span
  m="671310">anyone</span> <span m="671700">have</span> <span
  m="671960">any</span> <span m="672070">questions</span> <span
  m="672520">about</span> <span m="672790">the</span> <span
  m="672870">structure</span> <span m="673280">of</span> <span
  m="673350">B-trees.</span> <span m="673510">We</span> <span
  m="673730">rushed</span> <span m="674100">through that</span> <span
  m="675060">quite</span> <span m="675280">fast.</span> <span
  m="676860">About</span> <span m="677070">how</span> <span
  m="677300">B-trees</span> <span m="677660">are</span> <span
  m="677750">structured,</span> <span m="678655">everyone</span> <span
  m="679220">good</span> <span m="679470">with</span> <span
  m="679530">that?</span> <span m="680165">OK,</span> <span
  m="680610">also</span> <span m="681210">any</span> <span
  m="681430">questions</span> <span m="681720">about</span> <span
  m="681840">searching</span> <span m="682270">in a</span> <span
  m="682310">B-tree</span> <span m="683940">or</span> <span m="684350">a</span>
  <span m="684700">BST?</span> <span m="685300">Go ahead.</span></p><p><span
  m="685794">AUDIENCE: Just</span> <span m="686288">a</span> <span
  m="686782">random</span> <span m="687276">question.</span> <span m="687770">So
  the</span> <span m="688264">38</span> <span m="688758">there,</span> <span
  m="689252">it</span> <span m="689746">can</span> <span m="690240">only
  have</span> <span m="690734">two</span> <span
  m="691228">children.</span></p><p><span m="691722">PROFESSOR: Yep.</span>
  <span m="693210">So</span> <span m="693970">one</span> <span
  m="694270">value,</span> <span m="694830">two</span> <span
  m="694940">children.</span> <span m="696270">So</span> <span
  m="698090">you</span> <span m="698180">have</span> <span
  m="698350">some</span> <span m="698640">node</span> <span m="698860">in</span>
  <span m="698910">the</span> <span m="698980">B-tree,</span> <span
  m="699760">and</span> <span m="699810">whatever</span> <span
  m="700120">is</span> <span m="700230">below</span> <span m="700520">it</span>
  <span m="701010">is</span> <span m="701160">split</span> <span
  m="701420">into</span> <span m="701660">parts</span> <span
  m="702000">by</span> <span m="702150">the</span> <span
  m="702260">elements.</span> <span m="703380">So</span> <span
  m="703480">if</span> <span m="703550">you</span> <span m="703650">have</span>
  <span m="703770">n</span> <span m="703920">elements,</span> <span
  m="704440">it</span> <span m="704720">splits it</span> <span m="704890">up
  into</span> <span m="705310">n</span> <span m="705565">plus</span> <span
  m="705820">1</span> <span m="705890">segments.</span></p><p><span
  m="709830">AUDIENCE: You</span> <span m="710310">said that</span> <span
  m="710790">the root</span> <span m="711270">didn't have</span> <span
  m="711750">to follow</span> <span m="712230">the</span> <span
  m="712710">root.</span></p><p><span m="713190">PROFESSOR:
  No.</span></p><p><span m="713670">AUDIENCE: Why is</span> <span
  m="714150">that?</span></p><p><span m="715110">PROFESSOR: Well,</span> <span
  m="715270">you'll</span> <span m="715440">see</span> <span
  m="715750">when</span> <span m="715890">we</span> <span m="716010">do</span>
  <span m="716270">insertion</span> <span m="716580">and</span> <span
  m="716890">deletion</span> <span m="717130">why that's</span> <span
  m="717390">necessary.</span> <span m="717880">But</span> <span
  m="719630">essentially</span> <span m="720630">you</span> <span
  m="720740">can</span> <span m="720840">consider</span> <span
  m="721100">that</span> <span m="721260">it's</span> <span m="721420">an</span>
  <span m="721480">invariant.</span> <span m="722350">And</span> <span
  m="722550">all</span> <span m="722690">we</span> <span m="722780">have</span>
  <span m="722900">to</span> <span m="722960">do</span> <span
  m="723070">is</span> <span m="723170">preserve</span> <span
  m="723490">that</span> <span m="723670">invariant.</span> <span
  m="724770">So</span> <span m="725580">the</span> <span m="725760">root,</span>
  <span m="726660">it</span> <span m="726930">has to</span> <span
  m="726980">still</span> <span m="727290">have</span> <span
  m="727480">less</span> <span m="727700">than</span> <span
  m="727890">two--</span> <span m="728230">it</span> <span
  m="728360">still</span> <span m="728610">has</span> <span m="728760">to</span>
  <span m="728830">have</span> <span m="728960">the</span> <span
  m="729030">upper</span> <span m="729240">bound.</span> <span
  m="730140">But</span> <span m="730570">it</span> <span
  m="730650">doesn't</span> <span m="730790">need</span> <span m="730930">to
  have a</span> <span m="731230">lower</span> <span
  m="731707">bound.</span></p><p><span m="734569">AUDIENCE: How</span> <span
  m="735046">do you</span> <span m="735523">choose B?</span></p><p><span
  m="737490">PROFESSOR: Well,</span> <span m="738130">the</span> <span
  m="738300">whole</span> <span m="738620">[INAUDIBLE]</span> <span
  m="739200">cache</span> <span m="739460">size,</span> <span
  m="740120">so</span> <span m="740700">something</span> <span
  m="741000">with</span> <span m="741090">that.</span> <span
  m="741220">So</span> <span m="741330">you</span> <span
  m="741520">probably</span> <span m="741790">want</span> <span
  m="742030">2B</span> <span m="742440">to be</span> <span
  m="742670">about</span> <span m="742850">your</span> <span
  m="742960">cache</span> <span m="743160">size</span> <span
  m="743850">so</span> <span m="743980">you</span> <span m="744070">can</span>
  <span m="744200">get</span> <span m="744330">the</span> <span
  m="744390">whole</span> <span m="744540">block</span> <span m="744810">in
  one</span> <span m="744910">go.</span> <span m="745760">I've</span> <span
  m="746210">never</span> <span m="746510">implemented</span> <span
  m="746910">a</span> <span m="746970">B-tree,</span> <span m="747530">so</span>
  <span m="747940">I</span> <span m="748050">don't</span> <span
  m="748170">know</span> <span m="748230">how</span> <span
  m="748360">it's</span> <span m="748450">actually</span> <span m="748670">done
  in</span> <span m="748870">practice.</span> <span m="749150">But</span> <span
  m="749240">that</span> <span m="749390">is</span> <span m="749490">the</span>
  <span m="749580">reason,</span> <span m="749910">so</span> <span
  m="750195">I'm assuming</span> <span m="750480">it's</span> <span
  m="750870">something</span> <span m="751210">to</span> <span
  m="751270">do</span> <span m="751560">with</span> <span m="751760">the</span>
  <span m="752100">cache</span> <span m="752320">length.</span></p><p><span
  m="753730">AUDIENCE: Is</span> <span m="754200">the</span> <span
  m="755140">14,</span> <span m="755610">is</span> <span m="756080">it</span>
  <span m="756550">a</span> <span m="757020">child of</span> <span
  m="757490">both 10 and</span> <span m="757960">17?</span></p><p><span
  m="758910">PROFESSOR: Well,</span> <span m="759080">it's</span> <span
  m="759200">not</span> <span m="759360">a</span> <span m="759570">child
  of</span> <span m="759770">either. It's</span> <span m="760100">a</span> <span
  m="760180">child</span> <span m="760480">of</span> <span
  m="760570">this</span> <span m="760740">node.</span> <span
  m="761260">So</span> <span m="761360">this</span> <span m="761580">node</span>
  <span m="762350">has</span> <span m="762640">two</span> <span
  m="762870">elements,</span> <span m="763300">so it's</span> <span
  m="763570">being</span> <span m="763770">divided--</span> <span
  m="764200">dividing</span> <span m="764340">the interval</span> <span
  m="764710">up</span> <span m="764950">into</span> <span
  m="765100">three</span> <span m="765730">parts.</span> <span
  m="766380">So</span> <span m="767010">it's</span> <span m="767270">in</span>
  <span m="767450">between</span> <span m="767870">10 and</span> <span
  m="768090">17</span> <span m="768720">is</span> <span m="768860">the</span>
  <span m="768910">point</span> <span m="769320">here.</span></p><p><span
  m="769800">AUDIENCE: So</span> <span m="770280">then</span> <span
  m="770760">this</span> <span m="771240">node</span> <span
  m="771720">has</span> <span m="773160">five</span> <span
  m="773640">children?</span></p><p><span m="774600">PROFESSOR: Sorry?</span>
  <span m="776000">No,</span> <span m="776210">it</span> <span
  m="776300">has</span> <span m="776410">three</span> <span
  m="776590">children.</span> <span m="776940">So</span> <span
  m="777530">don't</span> <span m="777890">think</span> <span
  m="778100">of</span> <span m="778340">every</span> <span m="778890">key</span>
  <span m="779110">as</span> <span m="779270">a</span> <span
  m="779410">node.</span> <span m="780010">Think</span> <span
  m="780230">of</span> <span m="780680">the</span> <span m="781260">whole</span>
  <span m="781510">unit</span> <span m="781830">as</span> <span
  m="781950">a</span> <span m="781990">node.</span> <span m="784000">So</span>
  <span m="784720">it's</span> <span m="784920">not</span> <span
  m="785060">necessarily--</span> <span m="785320">in a</span> <span
  m="785460">binary</span> <span m="785620">search</span> <span m="786040">tree,
  you</span> <span m="786190">have</span> <span m="786670">one</span> <span
  m="786880">element,</span> <span m="787210">but</span> <span
  m="787540">here</span> <span m="787760">every</span> <span
  m="788010">node</span> <span m="788200">has</span> <span
  m="788420">multiple</span> <span m="788760">elements.</span> <span
  m="789050">That's</span> <span m="789380">the</span> <span m="789720">point
  of</span> <span m="789840">it.</span> <span m="791624">Anyone</span> <span
  m="792070">else?</span></p><p><span m="794840">OK,</span> <span
  m="795630">let's</span> <span m="795810">start</span> <span
  m="796000">with</span> <span m="796110">searching.</span> <span
  m="797650">So</span> <span m="800745">let's leave</span> <span
  m="801242">this</span> <span m="801739">here.</span> <span
  m="810210">Well,</span> <span m="810370">you</span> <span
  m="810450">have</span> <span m="810650">the</span> <span
  m="810910">formulas</span> <span m="811380">up</span> <span
  m="811520">there,</span> <span m="811790">so that's</span> <span
  m="812280">good.</span></p><p><span m="822570">Insertion.</span> <span
  m="823160">Let's start</span> <span m="823660">with</span> <span
  m="823840">insertion.</span> <span m="824030">We</span> <span
  m="824240">already</span> <span m="824690">did</span> <span
  m="824880">searching.</span></p><p><span m="832390">So</span> <span
  m="832910">insertion</span> <span m="833330">is</span> <span
  m="833470">you</span> <span m="833530">bring</span> <span m="833850">in a
  new</span> <span m="834000">key</span> <span m="834180">K,</span> <span
  m="834530">and you</span> <span m="834630">want to insert it</span> <span
  m="834980">into the</span> <span m="835120">tree.</span> <span
  m="836110">So</span> <span m="836260">what's</span> <span
  m="836380">the</span> <span m="836470">problem</span> <span m="836730">that
  could</span> <span m="836880">happen?</span> <span m="837120">You</span> <span
  m="837200">can</span> <span m="837320">find</span> <span m="837580">the</span>
  <span m="837660">location</span> <span m="838310">where</span> <span
  m="838550">you</span> <span m="838790">want to</span> <span m="838950">insert
  it,</span> <span m="839340">just</span> <span m="839500">like</span> <span
  m="839630">searching.</span> <span m="840100">You</span> <span
  m="840220">just</span> <span m="840410">go</span> <span m="840540">down</span>
  <span m="840750">the</span> <span m="840850">tree</span> <span
  m="841050">and</span> <span m="841180">find</span> <span
  m="841440">where</span> <span m="841590">it</span> <span
  m="841670">should</span> <span m="842050">be</span> <span
  m="842200">placed.</span> <span m="843390">But</span> <span
  m="843500">once</span> <span m="843700">you</span> <span m="843800">do</span>
  <span m="844000">place</span> <span m="844340">it,</span> <span
  m="844610">you</span> <span m="844750">have</span> <span m="844890">a</span>
  <span m="844950">problem.</span> <span m="845280">What is</span> <span
  m="845430">the</span> <span m="845510">problem?</span> <span
  m="845930">The</span> <span m="846030">problem</span> <span
  m="846280">is</span> <span m="846400">that</span> <span m="847270">one</span>
  <span m="847490">of</span> <span m="847600">your</span> <span
  m="847730">nodes</span> <span m="848060">will</span> <span
  m="848170">become</span> <span m="848440">overfull.</span> <span
  m="850690">Whatever.</span> <span m="851070">It'll</span> <span
  m="851750">overflow,</span> <span m="852430">and</span> <span
  m="852510">that's</span> <span m="852670">not</span> <span
  m="852780">what</span> <span m="852870">you</span> <span
  m="852960">want.</span></p><p><span m="853840">So</span> <span
  m="854090">you</span> <span m="854230">want</span> <span
  m="855180">some</span> <span m="855500">way</span> <span m="855820">so</span>
  <span m="855960">you</span> <span m="856110">can</span> <span
  m="856250">manage</span> <span m="856560">this.</span> <span
  m="856760">How</span> <span m="856920">do you</span> <span
  m="857020">manage</span> <span m="857470">this?</span> <span
  m="857940">So</span> <span m="858370">I have</span> <span
  m="858800">this</span> <span m="859990">lovely</span> <span
  m="860190">prop</span> <span m="860580">here,</span> <span
  m="861610">which</span> <span m="861915">I</span> <span m="862790">hope</span>
  <span m="862990">to</span> <span m="863070">demonstrate.</span> <span
  m="865500">OK.</span> <span m="869130">So</span> <span m="869260">here</span>
  <span m="869510">we</span> <span m="869620">have</span> <span
  m="869970">B</span> <span m="870670">equal</span> <span m="870910">to</span>
  <span m="870990">4.</span> <span m="872770">So</span> <span
  m="874030">let's</span> <span m="874390">first</span> <span
  m="874880">figure</span> <span m="875120">out</span> <span
  m="875320">the</span> <span m="875410">number</span> <span
  m="875730">of</span> <span m="876510">keys.</span> <span m="879110">So</span>
  <span m="879270">what</span> <span m="879410">is</span> <span
  m="879520">the</span> <span m="879600">minimum</span> <span
  m="879830">number</span> <span m="880040">of keys,</span> <span
  m="880260">anyone</span> <span m="881440">for</span> <span m="881570">B</span>
  <span m="881680">equal</span> <span m="881880">to</span> <span
  m="881940">4?</span></p><p><span m="882230">AUDIENCE:
  Three.</span></p><p><span m="883010">PROFESSOR: Three,</span> <span
  m="883220">precisely.</span> <span m="884125">So</span> <span
  m="887020">what</span> <span m="887180">is</span> <span m="887240">the</span>
  <span m="887300">maximum</span> <span m="887570">number</span> <span
  m="887820">of keys?</span></p><p><span m="889688">AUDIENCE:
  Six.</span></p><p><span m="891556">PROFESSOR: 4</span> <span
  m="892030">into</span> <span m="892330">2</span> <span m="892770">minus</span>
  <span m="892840">3,</span> <span m="893030">yeah.</span> <span
  m="893770">Correct.</span> <span m="895000">3,</span> <span
  m="895270">4.</span> <span m="896170">It's</span> <span m="896360">not</span>
  <span m="896590">seven,</span> <span m="896950">there's</span> <span
  m="897290">a</span> <span m="897490">strictly</span> <span
  m="897940">less</span> <span m="898150">than</span> <span
  m="898280">sign</span> <span m="898500">somewhere.</span> <span
  m="900090">Yes.</span> <span m="901070">And</span> <span
  m="901190">you'll</span> <span m="901320">see</span> <span
  m="901440">why</span> <span m="901570">it's</span> <span m="901690">not</span>
  <span m="901830">seven</span> <span m="902330">in a minute.</span></p><p><span
  m="905198">[LAUGHTER]</span></p><p><span m="906050">Oh.</span> <span
  m="908150">Hypocritical</span> <span m="908610">of me.</span> <span
  m="911830">All</span> <span m="911920">right.</span> <span
  m="912140">So</span> <span m="912880">as</span> <span m="913000">you</span>
  <span m="913080">can</span> <span m="913200">see,</span> <span
  m="913650">1,</span> <span m="913740">2,</span> <span m="913800">3,</span>
  <span m="914030">4,</span> <span m="914160">5,</span> <span
  m="914320">6,</span> <span m="914520">7.</span> <span m="915180">So</span>
  <span m="915380">some</span> <span m="915610">insertion</span> <span
  m="916000">happened.</span> <span m="918110">Is</span> <span
  m="918270">the</span> <span m="918680">writing</span> <span
  m="918920">clear?</span> <span m="919250">Can</span> <span
  m="919360">everyone</span> <span m="919740">read</span> <span
  m="919900">the</span> <span m="919970">numbers?</span> <span
  m="922580">49</span> <span m="923080">looks</span> <span m="923260">a</span>
  <span m="923300">little</span> <span m="923540">skewed.</span> <span
  m="923750">Anyway,</span> <span m="924670">essentially</span> <span
  m="925060">these</span> <span m="925180">are</span> <span
  m="925220">all</span> <span m="925350">sorted.</span> <span
  m="926160">This</span> <span m="926320">is</span> <span m="926390">the</span>
  <span m="926480">parent</span> <span m="926800">node.</span> <span
  m="927290">Doesn't</span> <span m="927520">matter</span> <span
  m="927760">what's</span> <span m="927960">over</span> <span
  m="928150">here.</span> <span m="928650">All that</span> <span
  m="929050">matters</span> <span m="929370">is</span> <span
  m="929760">8,</span> <span m="930153">56,</span> <span m="932040">and</span>
  <span m="932310">whatever's</span> <span m="932670">in</span> <span
  m="932750">between.</span></p><p><span m="938900">So</span> <span
  m="939150">what</span> <span m="939310">we</span> <span m="939420">do</span>
  <span m="939670">when</span> <span m="939830">we</span> <span
  m="939910">have</span> <span m="940170">an</span> <span
  m="940250">overfull</span> <span m="940620">node</span> <span
  m="941580">is</span> <span m="941910">something</span> <span
  m="942170">that's</span> <span m="942310">called</span> <span
  m="942430">a</span> <span m="942500">split</span> <span
  m="942750">operation.</span> <span m="943790">So</span> <span
  m="944460">split.</span> <span m="946450">And</span> <span
  m="946560">there's</span> <span m="946680">something</span> <span
  m="946940">which</span> <span m="947110">is called</span> <span
  m="947270">a</span> <span m="947320">merge,</span> <span m="947660">which
  we'll</span> <span m="948000">come to</span> <span m="948190">later</span>
  <span m="948510">when</span> <span m="948670">we're</span> <span
  m="948770">doing</span> <span m="948900">deletion.</span></p><p><span
  m="949680">But</span> <span m="950090">a</span> <span m="950160">split</span>
  <span m="950450">is--</span> <span m="951760">very</span> <span
  m="951880">intuitively,</span> <span m="952720">it</span> <span
  m="952830">splits</span> <span m="953180">the</span> <span
  m="953270">node</span> <span m="953530">into</span> <span
  m="953720">two</span> <span m="953850">parts.</span> <span
  m="955990">So</span> <span m="956120">what</span> <span m="956240">it</span>
  <span m="956340">does is</span> <span m="956620">when</span> <span
  m="956740">you have</span> <span m="956880">an overfull</span> <span
  m="957245">node--</span> <span m="957610">so</span> <span
  m="957990">the</span> <span m="958100">number</span> <span
  m="958350">of</span> <span m="958420">elements</span> <span
  m="958780">here</span> <span m="958980">is</span> <span
  m="959070">what?</span> <span m="959700">2B</span> <span
  m="960160">minus</span> <span m="960480">1,</span> <span m="960810">which
  is</span> <span m="960910">just</span> <span m="961140">1</span> <span
  m="961360">over</span> <span m="961610">the</span> <span
  m="961710">max.</span> <span m="963220">So</span> <span m="963350">what</span>
  <span m="963450">do</span> <span m="963490">you</span> <span
  m="963540">do</span> <span m="963770">is</span> <span m="964480">you</span>
  <span m="964590">take</span> <span m="964790">the</span> <span
  m="964860">middle</span> <span m="965070">element</span> <span
  m="966210">and</span> <span m="966370">remove</span> <span
  m="966690">it.</span> <span m="969115">and</span> <span m="969540">now</span>
  <span m="969770">you</span> <span m="969970">split</span> <span
  m="970120">the</span> <span m="970290">node into</span> <span
  m="970380">two</span> <span m="970520">parts.</span> <span
  m="971800">Observe</span> <span m="972330">that</span> <span
  m="972670">there</span> <span m="972840">are</span> <span
  m="972880">three</span> <span m="973250">here</span> <span
  m="973650">and</span> <span m="973830">three</span> <span
  m="974020">here,</span> <span m="974730">which</span> <span
  m="974900">is</span> <span m="974980">perfect.</span></p><p><span
  m="976250">And</span> <span m="976420">now</span> <span m="976560">what</span>
  <span m="976660">you</span> <span m="976770">do</span> <span
  m="976900">with</span> <span m="977020">the</span> <span
  m="977080">middle</span> <span m="977340">node--</span> <span
  m="977860">so</span> <span m="978660">now</span> <span
  m="979060">you're</span> <span m="979290">actually</span> <span
  m="979570">disrupting</span> <span m="979850">the</span> <span
  m="979940">structure</span> <span m="980210">of</span> <span
  m="980270">the</span> <span m="980360">tree,</span> <span
  m="981080">because</span> <span m="981350">there</span> <span
  m="981440">was</span> <span m="981560">one</span> <span
  m="981850">pointer</span> <span m="982210">going</span> <span
  m="982460">in.</span> <span m="983160">There was</span> <span
  m="983310">one</span> <span m="983580">child.</span> <span
  m="983895">And</span> <span m="984210">now</span> <span m="984330">you</span>
  <span m="984390">have</span> <span m="984510">two</span> <span
  m="984660">children.</span></p><p><span m="985660">So</span> <span
  m="985780">somehow</span> <span m="986190">you</span> <span
  m="986340">need</span> <span m="986600">to</span> <span
  m="986830">adjust</span> <span m="987230">the</span> <span
  m="987320">parent</span> <span m="987680">node,</span> <span
  m="987940">because</span> <span m="988120">the</span> <span
  m="988240">parent</span> <span m="988480">node</span> <span
  m="988650">had</span> <span m="988780">only</span> <span m="988990">one</span>
  <span m="989220">child.</span> <span m="990090">Well,</span> <span
  m="990250">at</span> <span m="990410">least</span> <span
  m="990850">there</span> <span m="991060">are</span> <span
  m="991200">other</span> <span m="991410">children</span> <span
  m="991990">off</span> <span m="992170">to</span> <span m="992270">the</span>
  <span m="992350">side.</span> <span m="993240">But</span> <span
  m="994430">here</span> <span m="994590">it</span> <span m="994940">had</span>
  <span m="995090">only</span> <span m="995260">one</span> <span
  m="995440">child,</span> <span m="995730">and now</span> <span
  m="995995">it's</span> <span m="996260">split</span> <span
  m="996580">apart.</span> <span m="996900">So</span> <span
  m="997030">you</span> <span m="997140">do</span> <span
  m="997260">something</span> <span m="997500">very</span> <span
  m="997670">simple.</span> <span m="998580">You</span> <span
  m="998710">just</span> <span m="999150">insert</span> <span
  m="1000740">this</span> <span m="1001000">guy</span> <span
  m="1001530">in</span> <span m="1001650">here.</span> <span
  m="1002840">And</span> <span m="1002970">then</span> <span m="1003070">you
  say,</span> <span m="1003320">oh,</span> <span m="1003670">this</span> <span
  m="1003840">points</span> <span m="1004090">here,</span> <span
  m="1004300">and</span> <span m="1004740">this</span> <span
  m="1005180">points</span> <span m="1005360">here.</span> <span
  m="1007010">Make</span> <span m="1007140">sense?</span> <span
  m="1010310">I'm</span> <span m="1010695">going to</span> <span m="1011080">get
  rid of</span> <span m="1011340">these</span> <span
  m="1011610">two.</span></p><p><span m="1019850">And</span> <span
  m="1020880">you</span> <span m="1021210">can even</span> <span
  m="1021450">convince</span> <span m="1021730">yourself</span> <span
  m="1022120">that</span> <span m="1022370">this</span> <span
  m="1022890">preserves</span> <span m="1023320">all the</span> <span
  m="1023520">nice</span> <span m="1023780">properties.</span> <span
  m="1024910">So</span> <span m="1025890">your</span> <span
  m="1026660">children</span> <span m="1027450">have</span> <span
  m="1027660">nicely</span> <span m="1028720">fallen</span> <span
  m="1029060">back</span> <span m="1029310">into</span> <span
  m="1029510">their</span> <span m="1029740">interval.</span> <span
  m="1031589">Your</span> <span m="1032790">sequence</span> <span
  m="1033319">is</span> <span m="1033440">completely</span> <span
  m="1033800">correct,</span> <span m="1034099">because</span> <span
  m="1034339">this</span> <span m="1034480">was</span> <span
  m="1034609">the</span> <span m="1034640">middle</span> <span
  m="1034839">element</span> <span m="1035140">of</span> <span
  m="1035240">this.</span> <span m="1035460">So</span> <span
  m="1035560">this</span> <span m="1036160">divides</span> <span
  m="1036510">this</span> <span m="1036630">interval</span> <span
  m="1036990">properly.</span> <span m="1038329">This</span> <span
  m="1038460">is</span> <span m="1038530">also</span> <span
  m="1038800">between</span> <span m="1039089">8 and</span> <span
  m="1039339">56,</span> <span m="1039800">because</span> <span
  m="1040109">this</span> <span m="1040280">was</span> <span
  m="1040470">in</span> <span m="1040619">this</span> <span
  m="1040849">node.</span> <span m="1041970">So</span> <span
  m="1043280">all</span> <span m="1043599">the properties.</span></p><p><span
  m="1043839">But</span> <span m="1043960">there's</span> <span
  m="1044079">one</span> <span m="1044240">property</span> <span
  m="1044540">that is</span> <span m="1044700">a</span> <span
  m="1044760">problem.</span> <span m="1045050">So</span> <span
  m="1045300">you</span> <span m="1045650">have</span> <span
  m="1045819">just</span> <span m="1046060">increased</span> <span
  m="1046369">the</span> <span m="1046460">size</span> <span
  m="1046680">of</span> <span m="1046720">the</span> <span
  m="1046810">parent</span> <span m="1047079">node</span> <span
  m="1047210">by</span> <span m="1047359">1.</span> <span m="1048890">So</span>
  <span m="1049010">now</span> <span m="1049240">it's</span> <span
  m="1049370">possible</span> <span m="1049625">that</span> <span
  m="1049880">the</span> <span m="1049960">parent</span> <span
  m="1050070">node</span> <span m="1050450">has</span> <span
  m="1050560">overflowed.</span> <span m="1052750">So what</span> <span
  m="1052920">do you</span> <span m="1053030">do?</span> <span m="1053680">You
  split</span> <span m="1054090">it</span> <span m="1054250">again.</span> <span
  m="1055800">And</span> <span m="1056010">split it</span> <span
  m="1056190">again.</span> <span m="1056950">And</span> <span
  m="1057790">if</span> <span m="1057910">at</span> <span m="1058090">any</span>
  <span m="1058490">point,</span> <span m="1058990">you're fine,</span> <span
  m="1060010">you</span> <span m="1060070">look</span> <span
  m="1060200">at</span> <span m="1060260">the</span> <span
  m="1060330">parent</span> <span m="1060540">node and</span> <span
  m="1060890">go,</span> <span m="1061160">OK,</span> <span
  m="1061350">that's</span> <span m="1061510">fine.</span> <span
  m="1061710">That's</span> <span m="1062100">in</span> <span
  m="1062200">the</span> <span m="1062380">range.</span> <span
  m="1063250">But</span> <span m="1063430">every</span> <span
  m="1063770">time</span> <span m="1063840">it overflows,</span> <span
  m="1064400">you</span> <span m="1064470">can</span> <span
  m="1064570">keep</span> <span m="1064730">going.</span></p><p><span
  m="1065280">And</span> <span m="1065390">how</span> <span
  m="1065500">many</span> <span m="1065610">times</span> <span
  m="1065710">can</span> <span m="1065820">you</span> <span
  m="1065940">do</span> <span m="1066050">this?</span> <span
  m="1066210">You</span> <span m="1066290">can</span> <span
  m="1066380">do</span> <span m="1066460">this</span> <span
  m="1066590">all</span> <span m="1066700">the</span> <span
  m="1066760">way</span> <span m="1066860">up</span> <span m="1066950">to</span>
  <span m="1067020">the</span> <span m="1067110">root.</span> <span
  m="1068180">And</span> <span m="1068370">when</span> <span
  m="1068480">you</span> <span m="1068570">reach</span> <span
  m="1068780">the</span> <span m="1068900">root,</span> <span
  m="1070500">either</span> <span m="1071000">it's</span> <span
  m="1071140">fine</span> <span m="1071710">or</span> <span
  m="1071970">the</span> <span m="1072100">root</span> <span
  m="1072260">is</span> <span m="1072360">too</span> <span
  m="1072500">big.</span> <span m="1072930">It's</span> <span
  m="1073180">reached</span> <span m="1073410">2B</span> <span
  m="1073940">minus</span> <span m="1074200">1.</span> <span
  m="1074840">And</span> <span m="1075250">then</span> <span
  m="1075410">you</span> <span m="1075770">split the</span> <span
  m="1076020">root,</span> <span m="1076410">and</span> <span
  m="1076560">you</span> <span m="1076680">get</span> <span
  m="1077000">one</span> <span m="1077590">single</span> <span
  m="1077990">[INAUDIBLE]</span> <span m="1078140">up there.</span> <span
  m="1078740">So</span> <span m="1078820">that,</span> <span
  m="1079060">in</span> <span m="1079210">answer</span> <span
  m="1079360">to</span> <span m="1079450">your</span> <span
  m="1079610">question,</span> <span m="1080220">that</span> <span
  m="1080400">is</span> <span m="1080520">why</span> <span
  m="1080780">you</span> <span m="1081010">need</span> <span
  m="1081250">that</span> <span m="1081760">property</span> <span
  m="1082120">in</span> <span m="1082190">some</span> <span
  m="1082370">sense.</span> <span m="1082780">Not</span> <span
  m="1083035">a</span> <span m="1083290">very</span> <span
  m="1083550">convincing</span> <span m="1083840">argument,</span> <span
  m="1084270">but</span> <span m="1085130">sort</span> <span
  m="1085450">of.</span></p><p><span m="1086750">So</span> <span
  m="1087150">let's</span> <span m="1087710">actually</span> <span
  m="1088160">do</span> <span m="1088310">an</span> <span
  m="1088400">insertion</span> <span m="1088720">in this</span> <span
  m="1089040">tree we</span> <span m="1089530">have here.</span> <span
  m="1091540">So</span> <span m="1091980">we</span> <span m="1092230">are</span>
  <span m="1092370">going</span> <span m="1092590">to</span> <span
  m="1092650">insert</span> <span m="1093150">16.</span> <span
  m="1100250">So</span> <span m="1100643">16</span> <span
  m="1101036">comes</span> <span m="1101430">in</span> <span
  m="1101690">here.</span> <span m="1103130">It's</span> <span
  m="1103390">less</span> <span m="1103540">than</span> <span
  m="1103640">30,</span> <span m="1103950">it</span> <span m="1104210">goes to
  the</span> <span m="1104470">left.</span> <span m="1105450">It's</span> <span
  m="1105560">between</span> <span m="1105860">10 and</span> <span
  m="1106100">17,</span> <span m="1106600">it</span> <span
  m="1107100">goes</span> <span m="1107280">in</span> <span
  m="1107330">the</span> <span m="1107400">middle.</span> <span
  m="1108390">16.</span> <span m="1109280">And</span> <span
  m="1110120">it's</span> <span m="1110290">greater</span> <span
  m="1110420">than</span> <span m="1110560">14,</span> <span
  m="1111380">so</span> <span m="1112140">we</span> <span m="1112450">add</span>
  <span m="1112700">16</span> <span m="1113000">here.</span></p><p><span
  m="1134150">All</span> <span m="1134230">right.</span> <span
  m="1134920">That</span> <span m="1134970">seems</span> <span
  m="1135210">good.</span> <span m="1136040">All</span> <span
  m="1136200">the</span> <span m="1136280">properties</span> <span
  m="1136750">fine.</span> <span m="1137570">This</span> <span
  m="1137710">still</span> <span m="1138130">has</span> <span
  m="1138420">two</span> <span m="1138570">elements,</span> <span
  m="1138990">which</span> <span m="1139120">is</span> <span
  m="1139210">the</span> <span m="1139280">maximum,</span> <span
  m="1139660">but</span> <span m="1140140">it's</span> <span
  m="1140300">good.</span> <span m="1140810">It</span> <span
  m="1141120">doesn't</span> <span m="1141220">overflow.</span></p><p><span
  m="1143590">Let's</span> <span m="1143880">insert</span> <span
  m="1143970">something</span> <span m="1144200">else.</span> <span
  m="1144490">Let's</span> <span m="1144650">insert</span> <span
  m="1145350">2.</span> <span m="1148600">So</span> <span m="1148860">2</span>
  <span m="1149020">goes</span> <span m="1149210">to</span> <span
  m="1149280">30,</span> <span m="1150070">goes</span> <span
  m="1150310">down,</span> <span m="1150940">goes</span> <span
  m="1151150">down.</span> <span m="1151860">And</span> <span
  m="1152175">we</span> <span m="1152490">have</span> <span m="1152640">a</span>
  <span m="1152730">problem,</span> <span m="1153140">because</span> <span
  m="1153560">2</span> <span m="1153800">has</span> <span
  m="1153950">overflowed</span> <span m="1154350">this</span> <span
  m="1154480">node.</span></p><p><span m="1156670">So</span> <span
  m="1157510">we</span> <span m="1157600">split.</span> <span
  m="1158590">And</span> <span m="1159190">the way</span> <span
  m="1159540">we</span> <span m="1159780">split is</span> <span
  m="1160040">we</span> <span m="1160110">take</span> <span
  m="1160280">the</span> <span m="1160340">middle</span> <span
  m="1160655">element.</span> <span m="1161380">So</span> <span
  m="1161620">we</span> <span m="1161720">split the</span> <span
  m="1161840">node</span> <span m="1162090">here.</span> <span
  m="1165000">And</span> <span m="1166900">3</span> <span
  m="1167200">goes</span> <span m="1168110">up</span> <span
  m="1168270">to</span> <span m="1168360">the</span> <span
  m="1168450">parent,</span> <span m="1169570">so</span> <span
  m="1169880">3</span> <span m="1170080">goes</span> <span
  m="1170290">here.</span> <span m="1171680">And</span> <span
  m="1173770">all</span> <span m="1173980">good,</span> <span
  m="1174570">except</span> <span m="1174880">for</span> <span
  m="1176110">the</span> <span m="1176250">parent has</span> <span
  m="1176600">overflowed.</span></p><p><span m="1178380">So</span> <span
  m="1178540">what do</span> <span m="1178630">we</span> <span
  m="1178720">do</span> <span m="1178830">with the</span> <span
  m="1178940">parent?</span> <span m="1179390">We</span> <span
  m="1179680">split</span> <span m="1179970">the</span> <span
  m="1180040">parent</span> <span m="1180380">again.</span> <span
  m="1180895">And</span> <span m="1181240">this time,</span> <span
  m="1181380">it's right</span> <span m="1181720">down</span> <span
  m="1181850">the</span> <span m="1181910">middle,</span> <span
  m="1182690">the</span> <span m="1182800">10</span> <span
  m="1182980">goes</span> <span m="1183180">up.</span> <span
  m="1184870">So</span> <span m="1185280">OK,</span> <span
  m="1185530">let's</span> <span m="1185730">get</span> <span m="1185840">rid
  of</span> <span m="1186140">this.</span> <span m="1188520">So</span> <span
  m="1188740">now</span> <span m="1188960">that we</span> <span
  m="1189050">split the</span> <span m="1189355">parent,</span> <span
  m="1189700">the</span> <span m="1189830">10</span> <span
  m="1190070">goes</span> <span m="1190260">up</span> <span
  m="1190440">here.</span> <span m="1193090">And</span> <span
  m="1193320">you're</span> <span m="1193520">good.</span> <span
  m="1194490">It's</span> <span m="1194650">a</span> <span
  m="1194690">bit</span> <span m="1195410">cluttered,</span> <span
  m="1195900">so</span> <span m="1196070">let</span> <span m="1196190">me</span>
  <span m="1197590">reposition</span> <span m="1198120">the</span> <span
  m="1198200">17.</span></p><p><span m="1207940">Did</span> <span
  m="1208430">those</span> <span m="1208850">two</span> <span
  m="1208970">operations</span> <span m="1209440">make</span> <span
  m="1209640">sense?</span> <span m="1210550">Questions?</span></p><p><span
  m="1212876">AUDIENCE: If</span> <span m="1213375">your</span> <span
  m="1213874">node</span> <span m="1214373">size</span> <span
  m="1214872">[INAUDIBLE]</span> <span m="1215371">number</span> <span
  m="1215870">of--</span></p><p><span m="1217870">PROFESSOR: So</span> <span
  m="1218130">just</span> <span m="1218330">pick</span> <span
  m="1219020">the--</span> <span m="1219250">first of</span> <span
  m="1219500">all--</span> <span m="1219770">OK.</span> <span
  m="1222970">If</span> <span m="1223180">the</span> <span
  m="1223350">way</span> <span m="1223530">we're</span> <span
  m="1223870">doing</span> <span m="1224160">it--</span> <span
  m="1225030">when</span> <span m="1225200">your</span> <span m="1225300">node
  is</span> <span m="1225560">overflowing,</span> <span m="1225960">it's</span>
  <span m="1226380">returning only</span> <span m="1226530">one</span> <span
  m="1226700">thing</span> <span m="1226840">at</span> <span
  m="1226920">a</span> <span m="1226980">time,</span> <span
  m="1227180">right?</span></p><p><span m="1227330">AUDIENCE:
  Yeah.</span></p><p><span m="1228000">PROFESSOR: So</span> <span
  m="1228490">if</span> <span m="1228620">your node</span> <span
  m="1228710">is</span> <span m="1228990">overflowing,</span> <span
  m="1229550">it'll</span> <span m="1229700">be</span> <span
  m="1229830">2t</span> <span m="1230100">minus</span> <span
  m="1230380">1,</span> <span m="1231470">which</span> <span
  m="1231630">is</span> <span m="1231730">an</span> <span m="1231820">odd</span>
  <span m="1231970">number</span> <span m="1232180">always.</span> <span
  m="1232690">There</span> <span m="1233290">might</span> <span
  m="1233480">be</span> <span m="1233550">a</span> <span m="1233600">case</span>
  <span m="1233810">where</span> <span m="1233950">you</span> <span
  m="1233990">get</span> <span m="1234100">an</span> <span
  m="1234200">even</span> <span m="1234370">number</span> <span
  m="1234670">if</span> <span m="1234780">you</span> <span m="1235120">do</span>
  <span m="1235230">something</span> <span m="1235530">weird.</span> <span
  m="1235730">Maybe</span> <span m="1235960">you</span> <span
  m="1236060">have</span> <span m="1236250">a--</span> <span
  m="1236690">there</span> <span m="1236880">are</span> <span
  m="1236980">different</span> <span m="1237510">ways</span> <span
  m="1237790">to do</span> <span m="1237860">B-trees.</span> <span
  m="1238200">But</span> <span m="1238610">if</span> <span m="1238740">it</span>
  <span m="1239010">does,</span> <span m="1239250">you</span> <span
  m="1239350">can</span> <span m="1239470">probably</span> <span
  m="1239740">pick</span> <span m="1239910">the</span> <span
  m="1240030">one,</span> <span m="1240910">either</span> <span
  m="1241320">of</span> <span m="1241410">them,</span> <span
  m="1241710">and</span> <span m="1241890">then</span> <span
  m="1242220">[INAUDIBLE].</span> <span m="1243420">I'm</span> <span
  m="1243550">not</span> <span m="1243710">sure</span> <span m="1243840">about
  that.</span> <span m="1244240">I'll</span> <span m="1244450">look</span> <span
  m="1244660">into</span> <span m="1244820">it.</span></p><p><span
  m="1245400">But</span> <span m="1246020">in</span> <span
  m="1246140">general,</span> <span m="1246640">if</span> <span
  m="1246710">you're</span> <span m="1246850">doing</span> <span
  m="1246990">it</span> <span m="1247080">this</span> <span
  m="1247230">way,</span> <span m="1247820">it's</span> <span
  m="1247940">always</span> <span m="1248160">odd.</span> <span
  m="1248910">So</span> <span m="1249140">you don't</span> <span
  m="1249440">have to worry</span> <span m="1249650">about that.</span> <span
  m="1251274">Anything</span> <span m="1251680">else?</span></p><p><span
  m="1253908">AUDIENCE: If</span> <span m="1254400">we</span> <span
  m="1254892">did</span> <span m="1255384">reach</span> <span
  m="1255880">all</span> <span m="1256080">the way</span> <span m="1256494">to
  the root</span> <span m="1256908">and then</span> <span m="1257322">went
  one</span> <span m="1257736">more up--</span></p><p><span
  m="1258150">PROFESSOR: So</span> <span m="1258380">what</span> <span
  m="1258470">you</span> <span m="1258510">would</span> <span
  m="1258610">do</span> <span m="1258840">is--</span></p><p><span
  m="1259030">AUDIENCE: That</span> <span m="1259502">root would</span> <span
  m="1259974">have--</span></p><p><span m="1260446">PROFESSOR: That</span> <span
  m="1260920">root would</span> <span m="1261120">have</span> <span
  m="1261190">two</span> <span m="1261520">children,</span> <span
  m="1262490">one</span> <span m="1262760">element</span> <span m="1263070">and
  two</span> <span m="1263250">children,</span> <span m="1264130">which</span>
  <span m="1264240">is</span> <span m="1264310">fine</span> <span
  m="1264610">because</span> <span m="1265010">we didn't</span> <span
  m="1265350">put that</span> <span m="1265470">restriction</span> <span
  m="1265650">on the</span> <span m="1265920">root.</span> <span
  m="1266866">That's</span> <span m="1267340">good.</span> <span m="1267825">How
  we</span> <span m="1268190">doing on</span> <span m="1268380">time?</span>
  <span m="1268670">OK,</span> <span m="1268955">we</span> <span
  m="1269240">have</span> <span m="1269330">some</span> <span
  m="1269620">time.</span></p><p><span m="1271480">Let's</span> <span
  m="1271800">jump</span> <span m="1272170">into</span> <span
  m="1272380">deletion,</span> <span m="1272760">unless</span> <span
  m="1272990">anyone</span> <span m="1273190">else has</span> <span
  m="1273490">questions.</span></p><p><span m="1274966">AUDIENCE:
  [INAUDIBLE]</span> <span m="1275434">any</span> <span
  m="1275902">point?</span></p><p><span m="1276840">PROFESSOR: So--</span> <span
  m="1277750">oh,</span> <span m="1277890">yeah.</span> <span m="1278120">That's
  a</span> <span m="1278400">good--</span> <span m="1278820">thank</span> <span
  m="1279080">you.</span> <span m="1279520">So</span> <span
  m="1280020">you</span> <span m="1280470">are</span> <span
  m="1280620">going</span> <span m="1280890">down</span> <span
  m="1281250">to</span> <span m="1281330">the</span> <span
  m="1281400">leaves</span> <span m="1281850">at</span> <span
  m="1281980">most--</span> <span m="1282660">at</span> <span
  m="1282800">most</span> <span m="1283010">of the</span> <span
  m="1283050">leaf</span> <span m="1283310">ones,</span> <span
  m="1284015">and</span> <span m="1284410">you're</span> <span
  m="1284640">going</span> <span m="1284830">back</span> <span
  m="1285030">up</span> <span m="1285150">one.</span> <span
  m="1285490">So</span> <span m="1285520">it's</span> <span
  m="1285620">like</span> <span m="1285790">log n</span> <span
  m="1286230">plus</span> <span m="1286390">log</span> <span
  m="1286610">n,</span> <span m="1287320">and</span> <span
  m="1287570">you're</span> <span m="1287670">good.</span></p><p><span
  m="1291610">Let's</span> <span m="1292080">do</span> <span
  m="1292395">deletion.</span> <span m="1303150">So</span> <span
  m="1305120">deletion</span> <span m="1305290">is</span> <span
  m="1305430">more</span> <span m="1305590">complicated.</span> <span
  m="1306210">So</span> <span m="1307190">the</span> <span
  m="1307340">reason,</span> <span m="1307690">it'll</span> <span
  m="1308000">be</span> <span m="1308270">clear.</span> <span
  m="1308520">So</span> <span m="1309710">the</span> <span
  m="1309980">problem</span> <span m="1310240">in</span> <span
  m="1310330">deletion</span> <span m="1310680">will</span> <span
  m="1310810">be</span> <span m="1311000">remove</span> <span
  m="1311330">a</span> <span m="1311380">node</span> <span
  m="1311790">and</span> <span m="1312210">a</span> <span
  m="1312300">node</span> <span m="1312560">is</span> <span
  m="1312630">now</span> <span m="1312750">underfull.</span> <span
  m="1313490">So</span> <span m="1313690">it</span> <span m="1314100">has</span>
  <span m="1314290">less</span> <span m="1314570">than</span> <span
  m="1315090">B</span> <span m="1315210">minus</span> <span m="1315470">1</span>
  <span m="1315970">keys</span> <span m="1316210">in it</span> <span
  m="1316370">suddenly.</span></p><p><span m="1317400">So</span> <span
  m="1318340">let's</span> <span m="1320050">turn</span> <span
  m="1320160">this</span> <span m="1320290">around.</span> <span
  m="1324950">So</span> <span m="1325610">again</span> <span
  m="1325880">B</span> <span m="1325960">equal</span> <span
  m="1326140">to</span> <span m="1326200">4.</span> <span
  m="1327980">This</span> <span m="1328290">node</span> <span
  m="1328490">is</span> <span m="1328580">a</span> <span
  m="1328640">problem.</span> <span m="1329900">Only</span> <span
  m="1330120">two</span> <span m="1330260">things</span> <span
  m="1330490">in</span> <span m="1330590">it.</span> <span m="1331610">So</span>
  <span m="1331730">what</span> <span m="1331820">do</span> <span
  m="1331860">we</span> <span m="1331950">do?</span></p><p><span
  m="1333930">So</span> <span m="1334560">before</span> <span
  m="1334810">we</span> <span m="1334920">go</span> <span
  m="1335050">into</span> <span m="1335160">that,</span> <span
  m="1336920">let's</span> <span m="1337090">make</span> <span
  m="1337270">this</span> <span m="1337400">assumption</span> <span
  m="1337980">that--</span> <span m="1340430">there</span> <span
  m="1340540">are</span> <span m="1340650">two</span> <span
  m="1340790">steps</span> <span m="1341020">to</span> <span
  m="1341110">deletion.</span> <span m="1342010">The</span> <span
  m="1342110">first</span> <span m="1342430">step</span> <span
  m="1343130">is</span> <span m="1343300">making</span> <span
  m="1343680">the</span> <span m="1343770">deletion</span> <span m="1344120">at
  a leaf.</span> <span m="1344950">How</span> <span m="1345130">do</span> <span
  m="1345190">you</span> <span m="1345260">do</span> <span
  m="1345420">that?</span> <span m="1346180">So</span> <span m="1346260">the
  way</span> <span m="1346390">you</span> <span m="1346490">make</span> <span
  m="1346640">a</span> <span m="1346690">deletion at</span> <span
  m="1346890">a</span> <span m="1347060">leaf</span> <span
  m="1347420">is,</span> <span m="1347520">let's</span> <span
  m="1347710">say,</span> <span m="1348340">you</span> <span
  m="1348510">have</span> <span m="1349540">a</span> <span
  m="1349720">key.</span> <span m="1350100">You</span> <span
  m="1350240">come</span> <span m="1350420">down</span> <span
  m="1350610">in</span> <span m="1350650">your</span> <span
  m="1351190">B-tree,</span> <span m="1352090">and</span> <span
  m="1352250">you</span> <span m="1352620">add</span> <span m="1352790">a</span>
  <span m="1352860">node.</span> <span m="1354470">Oh,</span> <span
  m="1355010">this</span> <span m="1355380">key</span> <span
  m="1355490">needs</span> <span m="1355640">to be</span> <span
  m="1355750">deleted.</span> <span m="1358110">But</span> <span
  m="1358250">it's</span> <span m="1358350">not</span> <span m="1358480">a
  leaf.</span> <span m="1358850">So what</span> <span m="1359320">do you
  do?</span></p><p><span m="1360470">So</span> <span
  m="1361640">essentially</span> <span m="1362180">what</span> <span
  m="1362330">you</span> <span m="1362430">do</span> <span m="1362640">is</span>
  <span m="1362920">you</span> <span m="1363080">look</span> <span
  m="1363230">at</span> <span m="1363340">these</span> <span
  m="1363550">two</span> <span m="1363660">subtrees.</span> <span
  m="1366230">So</span> <span m="1367040">it</span> <span
  m="1367160">might</span> <span m="1367400">have</span> <span m="1367710">only
  one</span> <span m="1367910">subtree.</span> <span m="1368250">If it's</span>
  <span m="1368370">at</span> <span m="1368480">the</span> <span
  m="1368580">end,</span> <span m="1368820">it will</span> <span
  m="1368880">have</span> <span m="1369050">only</span> <span
  m="1369210">one.</span> <span m="1369530">Actually,</span> <span
  m="1369860">no, that's</span> <span m="1370290">not true.</span> <span
  m="1371360">Ignore</span> <span m="1371600">that.</span></p><p><span
  m="1371940">If</span> <span m="1372280">it's not</span> <span
  m="1372500">a</span> <span m="1372650">leaf,</span> <span m="1373040">it
  has</span> <span m="1373190">two</span> <span m="1373300">subtrees.</span>
  <span m="1374680">So</span> <span m="1375040">either</span> <span
  m="1375330">take</span> <span m="1375680">the</span> <span
  m="1376340">rightmost</span> <span m="1376870">element</span> <span
  m="1377130">in</span> <span m="1377220">this</span> <span
  m="1377380">subtree,</span> <span m="1378170">which is</span> <span
  m="1378280">a leaf,</span> <span m="1378830">because</span> <span
  m="1379165">you</span> <span m="1379500">can</span> <span
  m="1379600">always</span> <span m="1379920">keep going</span> <span
  m="1380110">down,</span> <span m="1380250">right, right,</span> <span
  m="1380630">right,  right</span> <span m="1380980">till you</span> <span
  m="1381235">get to a leaf,</span> <span m="1382250">or</span> <span
  m="1382420">the</span> <span m="1382470">leftmost</span> <span
  m="1382850">element</span> <span m="1383100">in</span> <span
  m="1383180">this</span> <span m="1383320">subtree.</span> <span
  m="1384810">So</span> <span m="1384880">that</span> <span
  m="1385010">is</span> <span m="1385740">just</span> <span
  m="1386330">the</span> <span m="1386410">next</span> <span
  m="1386750">element</span> <span m="1387170">after</span> <span
  m="1388030">this</span> <span m="1388220">guy.</span></p><p><span
  m="1389310">So</span> <span m="1389610">you</span> <span
  m="1389700">delete</span> <span m="1390100">this,</span> <span
  m="1391040">and</span> <span m="1391180">you</span> <span
  m="1391280">bring</span> <span m="1391500">this</span> <span
  m="1391660">up</span> <span m="1391810">to</span> <span
  m="1391890">here.</span> <span m="1393700">We'll</span> <span
  m="1393880">do</span> <span m="1393980">an</span> <span
  m="1394060">example</span> <span m="1394380">of</span> <span
  m="1394480">this,</span> <span m="1394620">and</span> <span
  m="1394690">it'll</span> <span m="1394990">be</span> <span
  m="1395160">clearer.</span> <span m="1396910">So</span> <span
  m="1397060">you</span> <span m="1397240">take</span> <span
  m="1397910">either</span> <span m="1398020">the</span> <span
  m="1398230">rightmost</span> <span m="1398380">element</span> <span
  m="1398635">in the</span> <span m="1398890">left</span> <span
  m="1399290">subtree</span> <span m="1399650">or</span> <span m="1399990">the
  leftmost</span> <span m="1400400">element in</span> <span
  m="1400600">the</span> <span m="1400730">right</span> <span
  m="1400910">subtree</span> <span m="1401550">and</span> <span
  m="1401720">bring</span> <span m="1401870">it</span> <span
  m="1401950">up</span> <span m="1402100">here.</span> <span
  m="1402620">So</span> <span m="1402750">you</span> <span m="1402880">sort
  of</span> <span m="1403050">like</span> <span m="1403320">move</span> <span
  m="1403840">the</span> <span m="1403950">deletion</span> <span
  m="1404480">to</span> <span m="1404570">the</span> <span
  m="1404920">leaf.</span> <span m="1405860">And</span> <span
  m="1406010">now</span> <span m="1406190">it's</span> <span
  m="1406300">easier</span> <span m="1406510">to</span> <span
  m="1406590">deal</span> <span m="1406780">with.</span> <span
  m="1407670">So</span> <span m="1407970">we will come</span> <span
  m="1408130">to that.</span></p><p><span m="1408310">Also</span> <span
  m="1409650">just</span> <span m="1410020">note</span> <span
  m="1410780">that</span> <span m="1411240">this</span> <span
  m="1411430">is</span> <span m="1411640">not</span> <span m="1412130">what
  is</span> <span m="1412210">done</span> <span m="1412530">in the</span> <span
  m="1412570">recitation.</span> <span m="1412990">This</span> <span
  m="1413080">algorithm</span> <span m="1413550">for</span> <span
  m="1413970">deletion,</span> <span m="1414280">I</span> <span
  m="1414360">think,</span> <span m="1414580">is</span> <span
  m="1414710">not</span> <span m="1414970">done</span> <span m="1415150">in
  the</span> <span m="1415300">recitation</span> <span m="1415590">notes.</span>
  <span m="1415880">This</span> <span m="1416180">is</span> <span
  m="1416340">a</span> <span m="1416400">different</span> <span
  m="1416670">thing,</span> <span m="1416780">which</span> <span
  m="1416910">I'll</span> <span m="1417030">send</span> <span m="1417190">out
  a</span> <span m="1417300">link</span> <span m="1417480">for</span> <span
  m="1417620">later.</span> <span m="1418380">But</span> <span
  m="1418740">I</span> <span m="1418810">believe</span> <span
  m="1419050">it</span> <span m="1419150">works,</span> <span
  m="1419410">because</span> <span m="1420150">I</span> <span m="1420450">got
  it</span> <span m="1420540">from</span> <span m="1420680">the</span> <span
  m="1421526">[INAUDIBLE]</span> <span m="1421950">reference.</span></p><p><span
  m="1424500">So</span> <span m="1426140">once</span> <span
  m="1426310">you</span> <span m="1426420">move</span> <span m="1426640">to
  the</span> <span m="1426730">leaf--</span> <span m="1427330">so</span> <span
  m="1427460">now</span> <span m="1427580">let's</span> <span
  m="1428170">look</span> <span m="1428310">at</span> <span
  m="1428380">this.</span> <span m="1429160">So</span> <span
  m="1429180">this</span> <span m="1429340">is</span> <span m="1429450">a</span>
  <span m="1429540">node</span> <span m="1429710">that</span> <span
  m="1429920">is</span> <span m="1430040">underfull.</span> <span
  m="1431510">And</span> <span m="1432130">you</span> <span
  m="1432630">want</span> <span m="1432910">to</span> <span
  m="1433600">fix</span> <span m="1433910">it.</span> <span
  m="1434050">So</span> <span m="1434120">how</span> <span m="1434230">do</span>
  <span m="1434290">you</span> <span m="1434350">fix</span> <span
  m="1434570">it?</span></p><p><span m="1435040">So</span> <span
  m="1436690">what</span> <span m="1436810">do</span> <span
  m="1437040">is</span> <span m="1437290">you</span> <span
  m="1437400">look</span> <span m="1437550">at its</span> <span
  m="1437740">siblings.</span> <span m="1438750">So</span> <span
  m="1438860">in</span> <span m="1438910">this</span> <span
  m="1439080">case,</span> <span m="1439300">it has</span> <span
  m="1439420">one</span> <span m="1439600">sibling.</span> <span
  m="1440280">It</span> <span m="1440350">can</span> <span
  m="1440480">have</span> <span m="1440760">up</span> <span
  m="1440940">to</span> <span m="1441060">two</span> <span
  m="1441200">siblings.</span> <span m="1441770">It</span> <span m="1442130">can
  have</span> <span m="1442230">left</span> <span m="1442540">or</span> <span
  m="1442690">right.</span></p><p><span m="1444240">So</span> <span
  m="1444450">what</span> <span m="1444540">you</span> <span
  m="1444780">do</span> <span m="1444940">is</span> <span m="1445310">you</span>
  <span m="1445420">look</span> <span m="1445570">at</span> <span
  m="1445610">a</span> <span m="1445870">sibling.</span> <span
  m="1446390">And</span> <span m="1446590">this</span> <span
  m="1446740">sibling</span> <span m="1447040">is</span> <span
  m="1447130">actually</span> <span m="1448360">1</span> <span
  m="1448720">over</span> <span m="1449000">the</span> <span
  m="1449120">minimum.</span> <span m="1450360">And</span> <span m="1450570">if
  it's</span> <span m="1450670">1</span> <span m="1450840">over</span> <span
  m="1451010">the</span> <span m="1451090">minimum,</span> <span
  m="1452020">then</span> <span m="1452430">it's</span> <span
  m="1452590">really</span> <span m="1452830">easy.</span> <span
  m="1453460">All</span> <span m="1453590">you</span> <span
  m="1453670">have</span> <span m="1453790">to</span> <span
  m="1453870">do</span> <span m="1454530">is</span> <span
  m="1455390">take</span> <span m="1455670">the</span> <span
  m="1455770">leftmost</span> <span m="1456230">thing</span> <span
  m="1456370">here--</span> <span m="1456660">or if</span> <span
  m="1457000">it's the</span> <span m="1457150">sibling on</span> <span
  m="1457200">this side,</span> <span m="1457340">take</span> <span
  m="1457520">the</span> <span m="1457820">rightmost</span> <span
  m="1458200">thing</span> <span m="1458370">here.</span> <span
  m="1461040">And</span> <span m="1461250">look</span> <span
  m="1461450">at</span> <span m="1461640">its</span> <span
  m="1461870">parent.</span> <span m="1462730">So</span> <span
  m="1462940">you</span> <span m="1463060">bring</span> <span
  m="1463320">the</span> <span m="1463420">parent</span> <span
  m="1463790">down,</span> <span m="1465890">and</span> <span
  m="1466020">you</span> <span m="1466100">move</span> <span
  m="1466380">the</span> <span m="1467110">sibling</span> <span
  m="1467580">up.</span> <span m="1470330">And</span> <span
  m="1470440">there</span> <span m="1470780">we go.</span></p><p><span
  m="1471220">So you</span> <span m="1471660">basically</span> <span
  m="1473080">are</span> <span m="1473290">rotating</span> <span
  m="1473920">the</span> <span m="1474030">thing</span> <span
  m="1474260">into</span> <span m="1474440">place.</span> <span
  m="1475950">So</span> <span m="1476070">you</span> <span
  m="1476180">move</span> <span m="1476440">the</span> <span
  m="1476530">parent</span> <span m="1476790">down</span> <span
  m="1477030">into</span> <span m="1477190">the</span> <span
  m="1478010">underfull</span> <span m="1478420">node,</span> <span
  m="1479420">and</span> <span m="1479800">you</span> <span
  m="1479960">replace</span> <span m="1480300">the</span> <span
  m="1480390">parent</span> <span m="1480690">by</span> <span
  m="1480810">the</span> <span m="1481650">leftmost</span> <span
  m="1481960">thing</span> <span m="1482240">here.</span> <span
  m="1483570">Everyone</span> <span m="1483840">see</span> <span m="1484010">why
  that</span> <span m="1484190">preserves</span> <span
  m="1484750">everything?</span></p><p><span m="1490150">And</span> <span
  m="1490360">the</span> <span m="1490440">child is</span> <span
  m="1490890">also</span> <span m="1491090">shifted.</span> <span
  m="1492380">Make</span> <span m="1492810">sure you</span> <span
  m="1493230">see that.</span> <span m="1493490">So</span> <span
  m="1493800">the</span> <span m="1493990">child</span> <span
  m="1494350">which</span> <span m="1494500">was</span> <span
  m="1494960">in</span> <span m="1495140">this</span> <span
  m="1495370">subtree</span> <span m="1496280">is</span> <span
  m="1496430">now</span> <span m="1496580">in</span> <span
  m="1496660">this</span> <span m="1496830">subtree.</span></p><p><span
  m="1499760">But</span> <span m="1499960">then</span> <span
  m="1500100">you</span> <span m="1500190">can</span> <span
  m="1500320">have</span> <span m="1500490">the</span> <span
  m="1500530">situation</span> <span m="1501770">where</span> <span
  m="1502040">you</span> <span m="1502120">don't</span> <span
  m="1502340">have</span> <span m="1503880">a</span> <span
  m="1503980">nice</span> <span m="1504260">sibling</span> <span
  m="1504620">to</span> <span m="1504760">take</span> <span
  m="1504960">care</span> <span m="1505150">of</span> <span
  m="1505240">your</span> <span m="1505350">problems.</span> <span
  m="1506410">So</span> <span m="1507830">in</span> <span
  m="1508240">this</span> <span m="1508400">scenario,</span> <span
  m="1509010">the</span> <span m="1509130">sibling</span> <span
  m="1509460">is</span> <span m="1509670">barely</span> <span
  m="1510100">full.</span> <span m="1510490">It has</span> <span
  m="1510640">three</span> <span m="1510820">things,</span> <span
  m="1511020">and it</span> <span m="1511130">can't</span> <span
  m="1511250">donate</span> <span m="1511370">anything</span> <span
  m="1511880">to</span> <span m="1512190">you.</span> <span
  m="1512980">So</span> <span m="1513100">what</span> <span
  m="1513210">do</span> <span m="1513260">you</span> <span m="1513300">do</span>
  <span m="1513430">in</span> <span m="1513510">that</span> <span
  m="1513710">case?</span></p><p><span m="1515440">So</span> <span
  m="1515560">then</span> <span m="1515860">you</span> <span
  m="1515970">do</span> <span m="1516080">something</span> <span
  m="1516950">which</span> <span m="1517180">is</span> <span
  m="1517310">a</span> <span m="1517380">parallel</span> <span
  m="1517760">of</span> <span m="1517870">the</span> <span
  m="1517930">split</span> <span m="1518170">operation.</span> <span
  m="1518730">You</span> <span m="1518940">do a</span> <span
  m="1519190">merge.</span> <span m="1520570">So</span> <span
  m="1521030">what</span> <span m="1521160">do</span> <span
  m="1521200">you</span> <span m="1521240">have?</span> <span
  m="1521430">So</span> <span m="1521570">here</span> <span
  m="1521880">you</span> <span m="1522010">have</span> <span
  m="1522760">B</span> <span m="1523030">minus</span> <span
  m="1523360">2,</span> <span m="1526320">and</span> <span
  m="1526660">here</span> <span m="1526910">you</span> <span
  m="1527020">have</span> <span m="1527840">B</span> <span
  m="1527970">minus</span> <span m="1528220">1.</span> <span
  m="1530490">And</span> <span m="1530700">you</span> <span
  m="1530790">get</span> <span m="1532640">2B</span> <span
  m="1533000">minus</span> <span m="1533370">3.</span> <span m="1534170">Well,
  you've got</span> <span m="1534320">another</span> <span
  m="1534640">element.</span> <span m="1534930">You</span> <span
  m="1535040">also</span> <span m="1535250">take</span> <span
  m="1535520">the</span> <span m="1535830">parent.</span></p><p><span
  m="1536530">So</span> <span m="1536650">how</span> <span m="1536780">do
  you</span> <span m="1536920">do the merge.</span> <span m="1537040">I
  just</span> <span m="1537330">want</span> <span m="1537410">to</span> <span
  m="1537450">show</span> <span m="1537600">you</span> <span
  m="1537700">the</span> <span m="1537790">merge</span> <span
  m="1538260">first.</span> <span m="1538560">So</span> <span
  m="1538860">the</span> <span m="1538980">way</span> <span
  m="1539080">you</span> <span m="1539200">do</span> <span m="1539380">it</span>
  <span m="1539510">is</span> <span m="1539640">you</span> <span
  m="1540230">move</span> <span m="1540550">the</span> <span
  m="1540630">parent</span> <span m="1540940">down,</span> <span
  m="1541980">and</span> <span m="1542130">you</span> <span
  m="1542260">merge</span> <span m="1542560">these</span> <span
  m="1542760">two.</span> <span m="1546220">Seems</span> <span
  m="1546450">OK?</span> <span m="1548380">So</span> <span
  m="1548500">you</span> <span m="1548650">move</span> <span
  m="1549150">the</span> <span m="1549450">parent</span> <span
  m="1549570">node</span> <span m="1549860">down</span> <span
  m="1550250">and</span> <span m="1550490">merge</span> <span
  m="1550770">these</span> <span m="1550990">two.</span> <span
  m="1552010">And,</span> <span m="1552650">well,</span> <span
  m="1553020">now</span> <span m="1553200">this</span> <span
  m="1553370">comes</span> <span m="1553600">together,</span> <span
  m="1553995">and</span> <span m="1554390">this</span> <span
  m="1554540">points</span> <span m="1554810">into</span> <span
  m="1554960">the</span> <span m="1555030">new</span> <span
  m="1555190">node.</span> <span m="1558400">Sort</span> <span
  m="1558600">of</span> <span m="1558730">clear</span> <span
  m="1559660">what's</span> <span m="1559830">going</span> <span
  m="1560010">on?</span> <span m="1562530">Questions?</span> <span
  m="1565112">Yes?</span></p><p><span m="1566088">AUDIENCE: So</span> <span
  m="1566576">now the</span> <span m="1567064">parent is</span> <span
  m="1567552">underfull?</span></p><p><span m="1570000">PROFESSOR: Well,</span>
  <span m="1570200">so</span> <span m="1570320">you</span> <span
  m="1570600">have--</span> <span m="1571110">yeah,</span> <span
  m="1571330">exactly.</span> <span m="1571690">So</span> <span
  m="1571780">you</span> <span m="1571930">have</span> <span
  m="1572250">decreased</span> <span m="1572330">the</span> <span
  m="1572410">size of</span> <span m="1572890">the</span> <span
  m="1572970">parent,</span> <span m="1573990">so</span> <span
  m="1574110">it</span> <span m="1574200">might</span> <span
  m="1574510">be</span> <span m="1574620">underfull.</span> <span
  m="1575070">So</span> <span m="1575260">you</span> <span
  m="1575670">propagate.</span> <span m="1577190">Anything</span> <span
  m="1577530">else?</span></p><p><span m="1578220">AUDIENCE: So</span> <span
  m="1578702">are these</span> <span m="1579184">all</span> <span
  m="1579666">different</span> <span m="1580148">techniques</span> <span
  m="1580630">for doing that?</span></p><p><span m="1582080">PROFESSOR:
  So</span> <span m="1582150">there</span> <span m="1582350">are</span> <span
  m="1582450">two</span> <span m="1582610">cases.</span> <span
  m="1583190">So</span> <span m="1583970">either</span> <span
  m="1584610">you</span> <span m="1584720">have</span> <span
  m="1584960">a</span> <span m="1585020">sibling</span> <span
  m="1585480">which</span> <span m="1585660">has</span> <span
  m="1586190">extra</span> <span m="1586680">nodes to</span> <span
  m="1586790">donate</span> <span m="1587110">to</span> <span
  m="1587170">you</span> <span m="1588410">or</span> <span
  m="1588590">you</span> <span m="1588670">don't.</span> <span
  m="1589330">If</span> <span m="1589430">you</span> <span
  m="1589550">don't,</span> <span m="1589940">then</span> <span
  m="1590040">you</span> <span m="1590140">have</span> <span
  m="1590240">to</span> <span m="1590340">do</span> <span
  m="1590440">this.</span></p><p><span m="1590660">AUDIENCE: But</span> <span
  m="1590980">what</span> <span m="1591976">about</span> <span
  m="1592429">that</span> <span m="1592882">case?</span> <span m="1593335">Or
  is</span> <span m="1593788">that just</span> <span
  m="1594241">like--</span></p><p><span m="1594720">PROFESSOR: No,</span> <span
  m="1595360">that</span> <span m="1595580">is</span> <span
  m="1595670">moving</span> <span m="1595900">it</span> <span
  m="1595970">down</span> <span m="1596130">to the</span> <span
  m="1596240">leaf.</span> <span m="1596875">Once</span> <span m="1597140">you
  move</span> <span m="1597320">the deletion</span> <span
  m="1597610">down</span> <span m="1597900">to the</span> <span
  m="1598040">leaf,</span> <span m="1598450">so</span> <span
  m="1598570">here</span> <span m="1598770">we</span> <span
  m="1598840">have</span> <span m="1599260">something</span> <span
  m="1599540">now.</span> <span m="1600300">And</span> <span
  m="1600430">now</span> <span m="1600630">you</span> <span m="1600810">move
  it</span> <span m="1600920">all</span> <span m="1601080">the</span> <span
  m="1601160">way</span> <span m="1601220">back</span> <span
  m="1601440">up.</span> <span m="1604100">So</span> <span
  m="1604200">there</span> <span m="1604280">are</span> <span
  m="1604320">two</span> <span m="1604440">cases.</span> <span
  m="1605720">Let's</span> <span m="1606120">do</span> <span
  m="1606200">an</span> <span m="1606290">example.</span> <span
  m="1606650">That'll</span> <span m="1606870">make</span> <span
  m="1607060">it</span> <span m="1607320">clearer.</span> <span
  m="1608850">How</span> <span m="1609260">are</span> <span
  m="1609360">we</span> <span m="1609580">doing on</span> <span
  m="1609740">time?</span> <span m="1610366">Five</span> <span
  m="1610832">minutes,</span> <span m="1611298">all right.</span></p><p><span
  m="1614280">So</span> <span m="1615100">we</span> <span m="1615290">are
  going</span> <span m="1615530">to delete</span> <span m="1615690">38.</span>
  <span m="1618435">38</span> <span m="1618890">is</span> <span
  m="1619090">gone.</span> <span m="1620840">But</span> <span
  m="1620960">we</span> <span m="1621000">want</span> <span m="1621240">to
  move</span> <span m="1621410">it down</span> <span m="1621630">to the</span>
  <span m="1622060">leaf.</span> <span m="1622840">So</span> <span
  m="1623840">let's</span> <span m="1624060">take</span> <span
  m="1624220">an</span> <span m="1624300">element.</span> <span
  m="1624580">Let's</span> <span m="1624750">say</span> <span
  m="1624980">we</span> <span m="1625140">take</span> <span
  m="1626420">41.</span> <span m="1627810">So we</span> <span
  m="1628170">take</span> <span m="1628530">41</span> <span
  m="1630276">and</span> <span m="1630690">move</span> <span
  m="1630910">it</span> <span m="1630950">up</span> <span
  m="1631110">here.</span> <span m="1633560">41</span> <span
  m="1633930">is</span> <span m="1633990">the</span> <span
  m="1634060">leftmost</span> <span m="1634590">thing</span> <span
  m="1634730">in the</span> <span m="1634890">right</span> <span
  m="1635280">subtree.</span></p><p><span m="1637540">So</span> <span
  m="1637860">this</span> <span m="1638040">vacancy</span> <span
  m="1638400">doesn't</span> <span m="1638630">really</span> <span
  m="1638800">affect</span> <span m="1639050">anything,</span> <span
  m="1639440">because</span> <span m="1640400">this</span> <span
  m="1640620">node</span> <span m="1640980">still</span> <span
  m="1641520">has</span> <span m="1641750">the</span> <span
  m="1641830">right</span> <span m="1642000">number</span> <span
  m="1642200">of</span> <span m="1642290">things,</span> <span
  m="1642530">because</span> <span m="1642610">it's</span> <span
  m="1642850">still</span> <span m="1642990">got</span> <span
  m="1643330">one</span> <span m="1643500">thing in it,</span> <span
  m="1643810">which</span> <span m="1643950">is</span> <span
  m="1644010">good.</span> <span m="1644630">So you're</span> <span
  m="1644740">fine.</span> <span m="1645920">This</span> <span
  m="1646050">is</span> <span m="1646140">now</span> <span
  m="1646550">just</span> <span m="1646660">48.</span></p><p><span
  m="1649080">Let's</span> <span m="1649270">say</span> <span
  m="1649370">we</span> <span m="1649470">now</span> <span
  m="1649650">delete</span> <span m="1650220">41.</span> <span
  m="1652850">So</span> <span m="1653870">41</span> <span m="1654640">is</span>
  <span m="1654710">gone.</span> <span m="1656540">So now that</span> <span
  m="1656920">41</span> <span m="1657310">is</span> <span
  m="1657400">gone,</span> <span m="1661090">what do</span> <span
  m="1661330">you</span> <span m="1661480">replace</span> <span
  m="1661650">this</span> <span m="1661780">blank</span> <span
  m="1662270">spot</span> <span m="1662560">with?</span> <span
  m="1667840">Either</span> <span m="1668120">this</span> <span
  m="1668290">or</span> <span m="1668360">this,</span> <span
  m="1668570">right?</span> <span m="1669390">Doesn't</span> <span
  m="1669570">matter.</span> <span m="1670520">So</span> <span
  m="1670710">let's</span> <span m="1670900">just</span> <span
  m="1671050">do</span> <span m="1671140">this</span> <span
  m="1671300">one</span> <span m="1671450">for</span> <span
  m="1671710">consistency.</span> <span m="1673900">So</span> <span
  m="1673960">you</span> <span m="1674080">have</span> <span
  m="1674160">48</span> <span m="1674510">here.</span></p><p><span
  m="1675420">And</span> <span m="1675600">now</span> <span
  m="1675770">you</span> <span m="1675900">a</span> <span
  m="1675980">problem</span> <span m="1676330">because</span> <span
  m="1676550">you</span> <span m="1676630">have</span> <span
  m="1676740">a</span> <span m="1676800">blank</span> <span
  m="1677070">box.</span> <span m="1679230">So</span> <span
  m="1681470">can</span> <span m="1681590">you</span> <span
  m="1681710">rotate?</span> <span m="1683590">Yes,</span> <span
  m="1683850">no?</span> <span m="1684460">No,</span> <span
  m="1684630">right?</span> <span m="1685870">Because</span> <span
  m="1686580">sibling</span> <span m="1688170">is</span> <span
  m="1688380">barely</span> <span m="1688780">full.</span> <span m="1689860">So
  what can</span> <span m="1690250">you</span> <span m="1690590">do?</span>
  <span m="1691000">So you</span> <span m="1691110">merge.</span> <span
  m="1692240">And</span> <span m="1692310">how</span> <span
  m="1692420">do</span> <span m="1692490">you</span> <span
  m="1692580">merge?</span> <span m="1692890">You move</span> <span
  m="1693040">the</span> <span m="1693080">48</span> <span
  m="1693450">down,</span> <span m="1694680">and</span> <span
  m="1694800">you</span> <span m="1694870">combine</span> <span
  m="1695130">everything.</span></p><p><span m="1697110">So</span> <span
  m="1697220">this</span> <span m="1697330">is</span> <span
  m="1697730">kind</span> <span m="1697870">of</span> <span
  m="1697980">hard</span> <span m="1698230">to</span> <span
  m="1698280">understand,</span> <span m="1698650">but</span> <span
  m="1698780">this</span> <span m="1698910">is</span> <span
  m="1699010">like</span> <span m="1699390">a</span> <span
  m="1699770">zero-element</span> <span m="1700620">node.</span> <span
  m="1703960">So</span> <span m="1704420">when</span> <span
  m="1704560">you</span> <span m="1704650">merge,</span> <span m="1705000">you
  have</span> <span m="1705100">32,</span> <span m="1705430">48,</span> <span
  m="1705800">and</span> <span m="1705840">nothing,</span> <span
  m="1706120">so</span> <span m="1706420">it's</span> <span
  m="1706550">just</span> <span m="1706690">32</span> <span
  m="1706880">and</span> <span m="1706960">48.</span> <span
  m="1708070">So</span> <span m="1708230">what you</span> <span
  m="1708410">do</span> <span m="1708610">is--</span> <span
  m="1717880">so</span> <span m="1718000">this seems</span> <span
  m="1718120">weird,</span> <span m="1718770">but</span> <span
  m="1718940">this</span> <span m="1719110">is</span> <span
  m="1719990">just</span> <span m="1720160">another</span> <span
  m="1720440">empty</span> <span m="1720740">node.</span> <span
  m="1720910">You</span> <span m="1721020">just</span> <span
  m="1721380">propagated</span> <span m="1721765">the</span> <span
  m="1722150">emptiness</span> <span m="1722610">upwards.</span></p><p><span
  m="1726520">Now</span> <span m="1726740">you</span> <span
  m="1726800">take</span> <span m="1726970">this</span> <span
  m="1727100">empty</span> <span m="1727350">node,</span> <span m="1728020">and
  you</span> <span m="1728190">look</span> <span m="1728330">for</span> <span
  m="1728440">its</span> <span m="1728560">siblings.</span> <span
  m="1729860">Again,</span> <span m="1730500">its</span> <span
  m="1730680">sibling</span> <span m="1731000">is--</span> <span
  m="1731890">well,</span> <span m="1732640">it's</span> <span
  m="1733050">barely</span> <span m="1733480">full.</span> <span
  m="1734330">So</span> <span m="1734470">what</span> <span m="1734570">do
  you</span> <span m="1734640">do</span> <span m="1734820">now?</span> <span
  m="1735330">You</span> <span m="1735420">bring</span> <span
  m="1735600">the</span> <span m="1735700">30</span> <span
  m="1735940">down,</span> <span m="1736540">and</span> <span
  m="1736670">you</span> <span m="1736740">merge</span> <span
  m="1737020">this.</span> <span m="1737790">So</span> <span
  m="1738410">let's</span> <span m="1738590">do</span> <span
  m="1738690">that.</span></p><p><span m="1746080">30</span> <span
  m="1746820">comes</span> <span m="1747100">down,</span> <span
  m="1747990">and</span> <span m="1749460">there</span> <span
  m="1749895">we</span> <span m="1750330">go.</span> <span
  m="1753410">Looks</span> <span m="1753490">fine?</span> <span
  m="1754245">Does</span> <span m="1754710">that</span> <span
  m="1755020">tree</span> <span m="1755240">look</span> <span
  m="1755340">good?</span> <span m="1756330">Questions</span> <span
  m="1756700">about the</span> <span m="1756890">operation?</span> <span
  m="1760400">I'm</span> <span m="1760540">sure it</span> <span m="1760690">was
  not</span> <span m="1760790">clear,</span> <span m="1761590">but--</span>
  <span m="1765430">anything?</span> <span m="1767050">Make</span> <span
  m="1767120">sense?</span></p><p><span m="1768370">OK,</span> <span
  m="1769810">let's</span> <span m="1770030">do</span> <span
  m="1770150">a</span> <span m="1770200">deletion</span> <span
  m="1770640">where</span> <span m="1770830">we</span> <span
  m="1770890">can</span> <span m="1771020">actually</span> <span
  m="1771320">do</span> <span m="1771440">a</span> <span
  m="1771500">rotation.</span> <span m="1772730">So</span> <span
  m="1773000">let's</span> <span m="1773220">go</span> <span
  m="1773370">ahead</span> <span m="1773720">and</span> <span
  m="1773970">delete</span> <span m="1774670">20.</span> <span
  m="1776200">So</span> <span m="1776400">you</span> <span m="1776710">do</span>
  <span m="1777010">your</span> <span m="1777230">searching,</span> <span
  m="1777670">go</span> <span m="1777790">down</span> <span
  m="1777940">the</span> <span m="1778090">tree. You find the</span> <span
  m="1778550">20</span> <span m="1778870">under</span> <span
  m="1779460">here.</span> <span m="1780910">So</span> <span
  m="1781220">now,</span> <span m="1782610">OK.</span> <span
  m="1783300">So</span> <span m="1783500">you're</span> <span
  m="1783760">left</span> <span m="1783990">with</span> <span
  m="1784110">just--</span> <span m="1784960">actually</span> <span
  m="1785080">never</span> <span m="1785280">mind.</span> <span
  m="1785620">We'll</span> <span m="1786030">do</span> <span
  m="1786130">another</span> <span m="1786350">one.</span> <span
  m="1786570">So</span> <span m="1786590">this</span> <span
  m="1786910">doesn't</span> <span m="1787130">do</span> <span
  m="1787210">anything.</span> <span m="1787770">You</span> <span
  m="1787900">lost the</span> <span m="1788050">20,</span> <span
  m="1788670">and</span> <span m="1788780">you're</span> <span m="1789010">left
  with</span> <span m="1789360">the</span> <span m="1789730">24</span> <span
  m="1789970">this</span> <span m="1790320">time.</span></p><p><span
  m="1791020">So</span> <span m="1791110">now you</span> <span
  m="1791260">delete the</span> <span m="1791550">24.</span> <span
  m="1793440">So now that</span> <span m="1793680">you've</span> <span
  m="1793730">got rid</span> <span m="1794200">of</span> <span
  m="1794310">the</span> <span m="1794530">24,</span> <span m="1794900">you have
  a</span> <span m="1795070">blank box here</span> <span m="1795510">now.</span>
  <span m="1798380">But</span> <span m="1798510">its</span> <span
  m="1798570">sibling</span> <span m="1798960">is</span> <span
  m="1799340">not</span> <span m="1799660">barely</span> <span
  m="1799970">full.</span> <span m="1800310">It has</span> <span
  m="1800430">something</span> <span m="1800680">to</span> <span
  m="1800740">donate.</span> <span m="1802750">So</span> <span
  m="1803440">anyone,</span> <span m="1804590">which</span> <span
  m="1804870">elements</span> <span m="1805190">are</span> <span
  m="1805260">going</span> <span m="1805410">to</span> <span
  m="1805520">rotate?</span></p><p><span m="1806864">AUDIENCE: 17 and</span>
  <span m="1807351">16.</span></p><p><span m="1807840">PROFESSOR: 16</span>
  <span m="1808190">and 17,</span> <span m="1808540">right.</span> <span
  m="1809403">Cool.</span> <span m="1810370">So</span> <span
  m="1812680">16</span> <span m="1813000">goes</span> <span
  m="1813200">up,</span> <span m="1814420">17</span> <span
  m="1814720">goes</span> <span m="1814830">down.</span> <span
  m="1816060">And</span> <span m="1816410">you're</span> <span
  m="1816680">done.</span> <span m="1817740">You're</span> <span
  m="1817890">consistent</span> <span m="1818020">again.</span> <span
  m="1820850">So</span> <span m="1821250">that</span> <span
  m="1821380">was</span> <span m="1821600">deletion.</span> <span
  m="1821880">Those</span> <span m="1821970">are</span> <span
  m="1822080">the</span> <span m="1822420">two</span> <span
  m="1822580">cases</span> <span m="1822950">for</span> <span
  m="1823040">deletion.</span> <span m="1824180">Does</span> <span
  m="1824270">that</span> <span m="1824420">make</span> <span
  m="1824590">sense?</span> <span m="1826752">Anyone?</span> <span
  m="1829220">Any</span> <span m="1829240">questions?</span></p><p><span
  m="1831020">OK.</span> <span m="1832290">So</span> <span
  m="1832870">that's</span> <span m="1833130">all</span> <span
  m="1833250">the</span> <span m="1833310">topics</span> <span
  m="1834040">we</span> <span m="1834160">were</span> <span
  m="1834250">supposed</span> <span m="1834500">to</span> <span
  m="1834540">cover</span> <span m="1834760">today.</span> <span
  m="1836420">Any</span> <span m="1836500">questions</span> <span
  m="1836910">about</span> <span m="1838240">any</span> <span
  m="1838500">of</span> <span m="1838630">the</span> <span
  m="1838800">operations,</span> <span m="1839810">any</span> <span
  m="1840010">of</span> <span m="1840130">the</span> <span
  m="1840190">other</span> <span m="1840490">topics,</span> <span
  m="1841600">lecture,</span> <span m="1841970">anything?</span></p>
embedded_media:
  - uid: f9b49e0b5dcea7c75b7973a597a44fe2
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: TOb1tuEZ2X4
  - uid: 5444421907a6076ad9510c499c996ee7
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/TOb1tuEZ2X4/default.jpg'
  - uid: f7a7b27bee412c8c140af8dd6f1c7664
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: TOb1tuEZ2X4
  - uid: 5bb1a7665ed24985db176acd52b38f33
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: TOb1tuEZ2X4.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-2-b-trees/TOb1tuEZ2X4.srt
  - uid: 4c9519a7cf698e22a382a37c59371045
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: TOb1tuEZ2X4.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-2-b-trees/TOb1tuEZ2X4.pdf
  - uid: be213e193ec3ea105280d0dd86251271
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: cea4d26f005be7cf0aae73f57c55a469
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: f542eb1464cf7455488e2506523bf4b9
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: f438340a66dda5733ff0a7e0f3ecd5b0
    parent_uid: 0aa6d2318687217d3b332190d8d710e6
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec02_300k.mp4'
type: courses
layout: video
---
