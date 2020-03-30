---
title: Evolution in Finite Populations
uid: 0a5eef946f4006ee8fb84f80badfd67e
parent_uid: 2c19124a07b81891918cf65ff26fbc3c
technical_location: >-
  https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/evolution-in-finite-populations
short_url: evolution-in-finite-populations
inline_embed_id: 79585986evolutioninfinitepopulations37066295
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture by Prof. Jeff Gore is on the
  topic of evolution in finite populations. Several aspects are covered,
  including the Moran process, neutral and non-neutral evolution, and stochastic
  extinction of beneficial mutants.</p> <p><strong>Instructor:</strong> Prof.
  Jeff Gore</p>
related_resources_text: ''
transcript: >-
  <p><span m="90">The</span> <span m="190">following</span> <span
  m="630">content</span> <span m="1220">is</span> <span m="1340">provided</span>
  <span m="1780">under</span> <span m="2060">a</span> <span
  m="2100">Creative</span> <span m="2500">Commons</span> <span
  m="2910">license.</span> <span m="4010">Your</span> <span
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
  m="21640">PROFESSOR: All</span> <span m="21720">right,</span> <span
  m="21980">why don't</span> <span m="22160">we</span> <span m="22220">go</span>
  <span m="22330">ahead</span> <span m="22430">and</span> <span
  m="22530">get</span> <span m="22710">started.</span> <span m="25060">So</span>
  <span m="25210">today</span> <span m="25470">what</span> <span
  m="25580">we</span> <span m="25670">want</span> <span m="25840">to</span>
  <span m="25900">do</span> <span m="26140">is</span> <span
  m="27170">start</span> <span m="27680">thinking</span> <span
  m="27920">a</span> <span m="27970">bit</span> <span m="28140">about</span>
  <span m="28520">evolution</span> <span m="28990">in</span> <span
  m="29100">finite</span> <span m="29620">populations.</span> <span
  m="30350">And</span> <span m="30790">of</span> <span m="30920">course,</span>
  <span m="31790">what</span> <span m="31890">we</span> <span
  m="32000">mean</span> <span m="32189">by</span> <span m="32330">that,</span>
  <span m="32549">is</span> <span m="32729">evolution</span> <span
  m="33059">in</span> <span m="33390">populations</span> <span
  m="34010">where</span> <span m="35000">we</span> <span m="35120">have</span>
  <span m="35380">to</span> <span m="36110">really</span> <span
  m="36360">think</span> <span m="36530">about</span> <span
  m="36740">stochastic</span> <span m="37440">dynamics.</span></p><p><span
  m="38750">And</span> <span m="38910">now</span> <span m="39340">in</span>
  <span m="39560">general,</span> <span m="40690">just</span> <span
  m="40890">like</span> <span m="41150">in</span> <span m="41230">the</span>
  <span m="41310">context</span> <span m="42120">of</span> <span
  m="42700">gene</span> <span m="42950">networks</span> <span
  m="43510">within</span> <span m="43750">cells,</span> <span
  m="44510">the</span> <span m="44830">situation</span> <span
  m="45230">where</span> <span m="45320">we</span> <span m="45410">have</span>
  <span m="45480">to</span> <span m="45580">worry</span> <span
  m="45750">about</span> <span m="45980">stochastic</span> <span
  m="46430">dynamics</span> <span m="47250">is</span> <span m="47840">in</span>
  <span m="47990">the</span> <span m="48070">small</span> <span
  m="48560">number</span> <span m="49000">kind</span> <span m="49150">of</span>
  <span m="49230">limit.</span> <span m="50570">What's</span> <span
  m="51390">perhaps</span> <span m="51850">surprising</span> <span
  m="52460">about</span> <span m="52800">evolution</span> <span
  m="53690">is</span> <span m="53890">that</span> <span m="55310">they're</span>
  <span m="55480">always--</span> <span m="56020">the</span> <span
  m="56200">small</span> <span m="56420">numbers</span> <span
  m="56720">are</span> <span m="56820">always</span> <span
  m="57270">important.</span> <span m="58570">Even</span> <span
  m="58830">if</span> <span m="58910">you're</span> <span m="59080">in a</span>
  <span m="59140">large</span> <span m="59540">population,</span> <span
  m="60570">I'd</span> <span m="60780">say</span> <span m="61050">10</span>
  <span m="61530">to</span> <span m="61580">the</span> <span m="61670">9</span>
  <span m="61950">individuals,</span> <span m="62610">if</span> <span
  m="62960">you</span> <span m="63100">want</span> <span m="63220">to</span>
  <span m="63280">study</span> <span m="63560">evolution,</span> <span
  m="64480">then</span> <span m="64620">you're</span> <span
  m="64750">interested</span> <span m="65110">in</span> <span
  m="65200">cases</span> <span m="65580">where</span> <span m="65790">new</span>
  <span m="66010">mutants</span> <span m="66400">will</span> <span
  m="66560">arise</span> <span m="66850">in</span> <span m="66920">the</span>
  <span m="67000">population.</span></p><p><span m="67530">And</span> <span
  m="67640">kind</span> <span m="67770">of</span> <span m="68280">by</span>
  <span m="68570">definition,</span> <span m="69410">those</span> <span
  m="69660">new</span> <span m="69800">mutants</span> <span
  m="70270">start</span> <span m="70580">out</span> <span m="71260">as</span>
  <span m="71600">kind</span> <span m="71700">of</span> <span m="71740">a</span>
  <span m="71790">single</span> <span m="72170">member</span> <span
  m="72830">of</span> <span m="72980">the</span> <span
  m="73070">population.</span> <span m="74040">Which</span> <span
  m="74470">means</span> <span m="74700">that</span> <span m="75100">in</span>
  <span m="75550">the</span> <span m="75620">context</span> <span
  m="76020">of</span> <span m="76090">evolution,</span> <span
  m="76450">we</span> <span m="76610">always</span> <span m="77040">have</span>
  <span m="77190">to</span> <span m="77280">think</span> <span
  m="77900">about</span> <span m="79320">stochastic</span> <span
  m="79880">type</span> <span m="80060">dynamics.</span></p><p><span
  m="82490">Now</span> <span m="82660">the</span> <span m="82870">basic</span>
  <span m="83860">model</span> <span m="84290">that</span> <span
  m="84380">we're</span> <span m="84500">going</span> <span m="84580">to</span>
  <span m="84620">use</span> <span m="84830">in</span> <span
  m="84940">this</span> <span m="85130">class</span> <span m="85500">is</span>
  <span m="85680">the</span> <span m="85770">Moran</span> <span
  m="86210">process,</span> <span m="87310">which</span> <span
  m="87840">is</span> <span m="88180">a</span> <span m="89050">model</span>
  <span m="89770">that</span> <span m="90440">fixes</span> <span
  m="90920">population</span> <span m="91420">size.</span> <span
  m="92220">And</span> <span m="92350">then</span> <span
  m="93090">instead</span> <span m="93340">of</span> <span
  m="93390">having</span> <span m="93670">discrete</span> <span
  m="95130">generations,</span> <span m="96220">where</span> <span m="96870">all
  the</span> <span m="97130">individuals</span> <span m="98190">are</span> <span
  m="98900">reproducing</span> <span m="99270">at the</span> <span
  m="99330">same</span> <span m="99500">time--</span> <span m="99740">which
  is</span> <span m="99890">what</span> <span m="100030">you</span> <span
  m="100120">might</span> <span m="100250">have</span> <span
  m="100320">seen</span> <span m="100580">in the</span> <span
  m="100890">Wright-Fisher</span> <span m="101490">process--</span> <span
  m="102320">instead,</span> <span m="102710">we're</span> <span
  m="102790">going</span> <span m="102880">to</span> <span
  m="103040">think</span> <span m="103200">about</span> <span
  m="103400">the</span> <span m="103480">situation</span> <span
  m="103980">where</span> <span m="104910">it</span> <span
  m="105220">occurs</span> <span m="105780">more</span> <span
  m="106510">stepwise.</span> <span m="107180">In</span> <span
  m="107230">the</span> <span m="107340">sense</span> <span
  m="107590">that</span> <span m="107980">individuals</span> <span
  m="109580">reproduce</span> <span m="110400">one</span> <span
  m="110620">at</span> <span m="110670">a</span> <span m="110760">time.</span>
  <span m="111390">And</span> <span m="111530">then</span> <span
  m="111760">we</span> <span m="112170">contract the</span> <span
  m="112560">dynamics</span> <span m="112940">of the</span> <span
  m="113030">population.</span></p><p><span m="115050">So</span> <span
  m="115190">we're</span> <span m="115370">going</span> <span
  m="115460">to</span> <span m="115680">think</span> <span
  m="115820">about</span> <span m="116240">both</span> <span
  m="116820">the</span> <span m="116990">situation</span> <span
  m="117640">where</span> <span m="117780">we're</span> <span
  m="117900">trying</span> <span m="118080">to</span> <span
  m="118190">understand</span> <span m="118680">neutral</span> <span
  m="119110">dynamics,</span> <span m="120270">when</span> <span
  m="120390">we're</span> <span m="120570">tracking</span> <span
  m="121100">the</span> <span m="121720">composition</span> <span
  m="122280">of</span> <span m="122320">a</span> <span
  m="122390">population</span> <span m="123080">when</span> <span
  m="124110">the</span> <span m="124730">fitness</span> <span
  m="125090">of</span> <span m="125190">individuals</span> <span
  m="125850">is</span> <span m="126160">equal</span> <span m="126540">or</span>
  <span m="126660">nearly</span> <span m="127000">equal.</span> <span
  m="128639">But</span> <span m="128990">because</span> <span
  m="129250">in</span> <span m="129330">stochastic</span> <span
  m="129759">dynamics,</span> <span m="130199">there are</span> <span
  m="130520">interesting</span> <span m="130919">things</span> <span
  m="131130">that</span> <span m="131210">happen.</span> <span
  m="132280">But</span> <span m="132360">then</span> <span
  m="132510">we'll</span> <span m="132650">get</span> <span
  m="132770">into</span> <span m="133310">the</span> <span
  m="133460">question</span> <span m="133750">of</span> <span
  m="133950">non-neutral</span> <span m="134590">evolution.</span> <span
  m="135120">And</span> <span m="135350">really,</span> <span
  m="135780">we</span> <span m="135960">want</span> <span m="136110">to</span>
  <span m="136150">consider</span> <span m="136430">both</span> <span
  m="136700">halves</span> <span m="137000">of</span> <span
  m="137050">that.</span></p><p><span m="137280">All right,</span> <span
  m="137510">so</span> <span m="138290">in</span> <span m="138460">many</span>
  <span m="138670">cases,</span> <span m="139100">in</span> <span
  m="139210">the</span> <span m="139360">context of</span> <span
  m="139540">evolution,</span> <span m="140020">we're</span> <span
  m="140250">interested</span> <span m="140670">in,</span> <span
  m="140750">or</span> <span m="140860">focused</span> <span
  m="141380">on</span> <span m="142480">beneficial</span> <span
  m="142960">mutants.</span> <span m="144520">Now</span> <span
  m="145060">for</span> <span m="145160">those</span> <span
  m="145390">beneficial</span> <span m="145820">mutants,</span> <span
  m="146450">one</span> <span m="146660">of</span> <span m="146700">the</span>
  <span m="146780">basic</span> <span m="147090">things</span> <span
  m="147260">we're going</span> <span m="147390">to</span> <span
  m="147450">find</span> <span m="147730">is</span> <span m="147830">that</span>
  <span m="148570">even</span> <span m="149860">beneficial</span> <span
  m="150250">mutants</span> <span m="150840">will</span> <span
  m="151130">typically</span> <span m="151570">go</span> <span
  m="151780">extinct.</span> <span m="153460">It</span> <span
  m="153550">doesn't</span> <span m="153750">mean that</span> <span
  m="153890">they're</span> <span m="154080">not</span> <span
  m="154260">important</span> <span m="155500">over</span> <span
  m="155870">the</span> <span m="155980">long</span> <span
  m="156220">run.</span> <span m="156790">But</span> <span m="157430">it</span>
  <span m="157570">does</span> <span m="157830">mean</span> <span
  m="158030">that</span> <span m="158360">there</span> <span
  m="158630">is</span> <span m="158750">a</span> <span m="158810">very</span>
  <span m="159090">real</span> <span m="159290">sense</span> <span
  m="159690">that</span> <span m="160700">randomness</span> <span
  m="161290">is</span> <span m="161430">dominating</span> <span
  m="161960">the</span> <span m="162040">life</span> <span m="162290">of</span>
  <span m="162380">even</span> <span m="162630">beneficial</span> <span
  m="163080">mutants.</span></p><p><span m="164360">And</span> <span
  m="164600">then</span> <span m="164720">finally,</span> <span
  m="165180">if</span> <span m="165280">there's</span> <span
  m="165420">time,</span> <span m="166140">we</span> <span
  m="166260">will</span> <span m="166820">discuss</span> <span
  m="167140">this</span> <span m="167300">idea</span> <span m="167530">of</span>
  <span m="167610">Muller's</span> <span m="168060">ratchet,</span> <span
  m="169160">which is</span> <span m="169990">basically</span> <span
  m="170440">pointing</span> <span m="170760">out</span> <span
  m="171000">that</span> <span m="171420">if</span> <span
  m="171590">there</span> <span m="171770">are</span> <span
  m="171920">deleterious</span> <span m="172740">mutants</span> <span
  m="173370">or</span> <span m="173480">mutations</span> <span
  m="173970">in</span> <span m="174030">the</span> <span
  m="174110">population,</span> <span m="175190">those</span> <span
  m="175560">deleterious</span> <span m="176600">mutations</span> <span
  m="177080">can</span> <span m="177230">in</span> <span m="177290">some</span>
  <span m="177480">cases</span> <span m="178300">spread</span> <span
  m="178680">and</span> <span m="178800">fix in</span> <span
  m="179130">the</span> <span m="179230">population.</span> <span
  m="179830">And</span> <span m="179930">when that</span> <span
  m="180050">happens,</span> <span m="182060">you</span> <span
  m="182240">can</span> <span m="182360">have</span> <span m="182550">a</span>
  <span m="182610">decrease</span> <span m="183240">in</span> <span
  m="183300">the</span> <span m="183360">fitness</span> <span m="183680">of
  a</span> <span m="183800">population</span> <span m="184300">over</span> <span
  m="184430">time.</span> <span m="185590">And</span> <span
  m="186060">this</span> <span m="186630">is</span> <span
  m="187040">particularly</span> <span m="188380">a</span> <span
  m="188480">strong</span> <span m="188730">effect</span> <span
  m="189020">for</span> <span m="189160">small</span> <span
  m="189600">populations,</span> <span m="190640">because</span> <span
  m="190950">small</span> <span m="191300">populations,</span> <span
  m="192410">they're</span> <span m="192550">not</span> <span
  m="192840">as</span> <span m="193140">effective,</span> <span m="193880">what
  you</span> <span m="194070">might call</span> <span m="194330">filters,</span>
  <span m="195290">for</span> <span m="196170">selection.</span></p><p><span
  m="199410">And so</span> <span m="199520">what we</span> <span m="199720">want
  to do</span> <span m="199850">is</span> <span m="199990">start</span> <span
  m="200470">by</span> <span m="200550">thinking</span> <span
  m="200750">about</span> <span m="200920">this</span> <span
  m="201050">Moran</span> <span m="201410">process.</span> <span
  m="208180">And</span> <span m="208510">the</span> <span m="208570">key</span>
  <span m="208800">feature</span> <span m="209050">here</span> <span
  m="209240">is that</span> <span m="209320">we're</span> <span
  m="209470">going</span> <span m="209550">to</span> <span
  m="209590">have</span> <span m="209810">a</span> <span
  m="209990">constant</span> <span m="210580">population</span> <span
  m="211110">size,</span> <span m="213040">constant</span> <span
  m="213590">N.</span> <span m="214840">And</span> <span
  m="214950">that's</span> <span m="215540">not</span> <span
  m="215900">because</span> <span m="216190">we</span> <span
  m="216400">believe</span> <span m="217060">that</span> <span
  m="218120">real</span> <span m="218350">populations</span> <span
  m="219000">always</span> <span m="219320">have</span> <span
  m="219450">a</span> <span m="219500">fixed</span> <span
  m="219900">population</span> <span m="220330">size,</span> <span
  m="220550">but</span> <span m="220670">rather,</span> <span
  m="221480">we</span> <span m="221680">want</span> <span m="221850">to</span>
  <span m="222450">try</span> <span m="222760">to</span> <span
  m="222920">get</span> <span m="223140">some</span> <span
  m="223270">intuition</span> <span m="224100">in</span> <span
  m="225000">this</span> <span m="225040">simple</span> <span
  m="225320">model.</span></p><p><span m="225570">And then</span> <span
  m="225680">of</span> <span m="225780">course,</span> <span
  m="226500">it's</span> <span m="226630">reasonable</span> <span m="226990">to
  ask,</span> <span m="227210">well,</span> <span m="227950">which</span> <span
  m="229270">aspects</span> <span m="229850">of</span> <span
  m="230420">the</span> <span m="230570">mathematics or</span> <span
  m="231050">intuition</span> <span m="231410">we</span> <span
  m="231490">develop</span> <span m="232100">are</span> <span
  m="232620">going</span> <span m="232710">to</span> <span
  m="232900">change</span> <span m="233390">as</span> <span m="233480">a</span>
  <span m="233530">result</span> <span m="233950">of</span> <span
  m="234380">allowing</span> <span m="234700">fluctuations</span> <span
  m="235270">in</span> <span m="235330">the</span> <span m="235410">total</span>
  <span m="235590">population</span> <span m="235990">size?</span> <span
  m="237190">But</span> <span m="237230">I</span> <span m="237270">think</span>
  <span m="237400">there's</span> <span m="237760">a</span> <span
  m="237800">lot</span> <span m="237980">of</span> <span m="238030">value</span>
  <span m="238390">in</span> <span m="238640">starting</span> <span
  m="239030">out</span> <span m="239240">by</span> <span
  m="239960">analyzing</span> <span m="240300">the</span> <span
  m="240370">simplest</span> <span m="240740">model</span> <span
  m="241050">that</span> <span m="241100">you</span> <span
  m="241190">can.</span></p><p><span m="242860">So</span> <span
  m="242990">what</span> <span m="243110">we're</span> <span
  m="243200">going</span> <span m="243290">to</span> <span
  m="243470">think</span> <span m="243620">about</span> <span m="243800">is
  a</span> <span m="243850">situation</span> <span m="244300">where</span> <span
  m="244460">we</span> <span m="244580">have</span> <span m="245240">a</span>
  <span m="245540">population</span> <span m="246000">composed</span> <span
  m="246380">of N</span> <span m="246510">individuals.</span> <span
  m="247380">And</span> <span m="247490">for</span> <span m="247570">now</span>
  <span m="247780">we'll</span> <span m="247900">just</span> <span
  m="248030">consider</span> <span m="248430">two</span> <span
  m="248630">types,</span> <span m="249620">A and</span> <span
  m="249950">B.</span> <span m="250930">And</span> <span m="251360">this</span>
  <span m="252410">is</span> <span m="252490">going</span> <span
  m="252590">to</span> <span m="252630">be</span> <span m="252720">a</span>
  <span m="252770">model</span> <span m="253630">for</span> <span
  m="255820">asexually</span> <span m="256440">reproducing</span> <span
  m="256890">populations.</span> <span m="257589">Constant</span> <span
  m="258120">N,</span> <span m="259290">asexual.</span> <span
  m="263170">What</span> <span m="263380">that</span> <span
  m="263490">means</span> <span m="263740">is,</span> <span m="263860">in</span>
  <span m="263970">particular,</span> <span m="264380">that</span> <span
  m="264560">we're</span> <span m="264680">going</span> <span
  m="264760">to</span> <span m="264810">assume</span> <span
  m="265170">that</span> <span m="265770">an A</span> <span
  m="265930">individual</span> <span m="267070">can</span> <span m="269710">lead
  to</span> <span m="269990">two</span> <span m="270170">individuals.</span>
  <span m="271170">Similarity,</span> <span m="271470">a B</span> <span
  m="271770">individual</span> <span m="272270">can</span> <span
  m="272430">lead</span> <span m="273100">to two</span> <span
  m="273530">B</span> <span m="273710">individuals.</span></p><p><span
  m="276130">Right,</span> <span m="276270">so</span> <span m="276330">you
  can</span> <span m="276500">think</span> <span m="276670">about</span> <span
  m="276860">this</span> <span m="277090">as,</span> <span m="277460">for</span>
  <span m="277490">example,</span> <span m="279020">a</span> <span
  m="279120">model</span> <span m="279300">for</span> <span
  m="279420">how</span> <span m="279560">microbial</span> <span
  m="280120">populations</span> <span m="281240">may</span> <span
  m="281350">evolve.</span> <span m="283450">And</span> <span
  m="283610">for</span> <span m="283720">now,</span> <span m="284280">we</span>
  <span m="284510">will</span> <span m="284850">not</span> <span
  m="285100">consider</span> <span m="285550">any</span> <span
  m="286480">mutations.</span> <span m="287360">All right,</span> <span
  m="287510">so</span> <span m="287610">we're</span> <span
  m="287740">going</span> <span m="287830">to</span> <span
  m="288250">think</span> <span m="288450">about</span> <span
  m="288600">the</span> <span m="288680">process</span> <span
  m="289100">of</span> <span m="289470">assume</span> <span
  m="289880">that</span> <span m="289940">those</span> <span
  m="290100">mutations</span> <span m="290680">are</span> <span
  m="290770">already</span> <span m="291130">there.</span> <span m="291400">So
  A</span> <span m="291510">and</span> <span m="291820">B</span> <span
  m="292450">could</span> <span m="292730">be</span> <span
  m="293330">different.</span> <span m="294510">They</span> <span
  m="294630">could</span> <span m="294820">have,</span> <span
  m="295150">for</span> <span m="295250">example,</span> <span
  m="295550">different--</span> <span m="296630">they</span> <span
  m="296810">could</span> <span m="297050">be</span> <span
  m="297200">different</span> <span m="297600">at</span> <span
  m="297840">some</span> <span m="298340">point</span> <span
  m="298700">mutation</span> <span m="299270">side</span> <span
  m="299610">of</span> <span m="299740">some</span> <span m="299900">gene</span>
  <span m="300260">that</span> <span m="300370">is</span> <span
  m="300460">relevant</span> <span m="300980">for</span> <span
  m="302640">growing</span> <span m="302940">a</span> <span
  m="303000">low</span> <span m="303200">glucose</span> <span
  m="303640">concentration,</span> <span m="304240">for</span> <span
  m="304350">example.</span> <span m="304760">OK?</span></p><p><span
  m="306170">So</span> <span m="306550">here</span> <span m="306940">we're going
  to--</span> <span m="307390">so</span> <span m="307490">this</span> <span
  m="307640">is</span> <span m="308970">birth</span> <span
  m="309300">slash</span> <span m="309460">division,</span> <span
  m="309990">and</span> <span m="310540">in</span> <span
  m="310720">particular</span> <span m="310880">here we're</span> <span
  m="310990">going</span> <span m="311090">to,</span> <span
  m="311460">for</span> <span m="311610">now,</span> <span
  m="311860">assume</span> <span m="312150">no</span> <span
  m="312360">mutation.</span> <span m="314420">So</span> <span
  m="314930">we'll</span> <span m="315000">assume</span> <span
  m="315280">that</span> <span m="315600">A's</span> <span
  m="315960">always</span> <span m="316650">give</span> <span
  m="316830">birth</span> <span m="317200">to</span> <span
  m="317490">A's,</span> <span m="317860">and</span> <span m="317980">B's</span>
  <span m="318250">always</span> <span m="318440">give</span> <span
  m="318600">birth</span> <span m="318820">to</span> <span
  m="318920">B's.</span></p><p><span m="329550">We'll</span> <span
  m="330960">follow</span> <span m="331280">the</span> <span
  m="331420">nomenclature</span> <span m="332060">from</span> <span
  m="332970">the</span> <span m="333070">reading</span> <span
  m="333330">that</span> <span m="333420">you</span> <span
  m="333520">guys</span> <span m="333880">did</span> <span
  m="334310">last</span> <span m="334720">night,</span> <span
  m="335070">Martin</span> <span m="335600">Nowak's</span> <span
  m="336430">book,</span> <span m="336690">chapter</span> <span
  m="337060">six,</span> <span m="338080">where</span> <span
  m="338330">we're</span> <span m="338460">going</span> <span
  m="338550">to</span> <span m="339780">think</span> <span
  m="339950">about--</span> <span m="340140">we're</span> <span
  m="340230">going</span> <span m="340310">to</span> <span
  m="340350">assume</span> <span m="340720">that</span> <span
  m="341080">there</span> <span m="341400">are</span> <span
  m="341930">initially</span> <span m="343140">i</span> <span
  m="343992">A</span> <span m="344844">individuals,</span> <span
  m="347580">and</span> <span m="348180">therefore,</span> <span
  m="348790">N</span> <span m="349040">minus</span> <span m="349400">i</span>
  <span m="350030">B</span> <span m="350300">individuals.</span> <span
  m="355280">Now</span> <span m="356440">we'll</span> <span
  m="356650">assume</span> <span m="357060">that</span> <span
  m="360120">the</span> <span m="360480">basic</span> <span
  m="361310">process</span> <span m="361680">for</span> <span
  m="361750">the--</span> <span m="362330">in</span> <span
  m="362480">this</span> <span m="362610">Moran</span> <span
  m="362840">process</span> <span m="363170">is</span> <span
  m="363290">that</span> <span m="363570">you</span> <span
  m="364120">have</span> <span m="364650">reproduction,</span> <span
  m="365320">or</span> <span m="365410">birth,</span> <span
  m="366340">that's</span> <span m="366630">proportional</span> <span
  m="368150">to</span> <span m="368430">fitness.</span></p><p><span
  m="376220">And</span> <span m="376340">then</span> <span m="376470">the</span>
  <span m="376550">resulting</span> <span m="377050">kind</span> <span
  m="377190">of</span> <span m="377290">what</span> <span m="377400">you</span>
  <span m="377460">might</span> <span m="377580">call</span> <span
  m="377780">a</span> <span m="377840">daughter</span> <span
  m="378220">cell</span> <span m="379020">replaces</span> <span
  m="379740">one</span> <span m="379970">member</span> <span
  m="380170">of</span> <span m="380220">the</span> <span
  m="380290">population</span> <span m="380760">at</span> <span
  m="380850">random.</span> <span m="381670">So</span> <span
  m="381700">there's</span> <span m="381880">birth</span> <span m="382720">and
  then</span> <span m="382970">replacement.</span> <span m="384650">And</span>
  <span m="384780">indeed</span> <span m="385070">we'll</span> <span
  m="385260">assume</span> <span m="385650">that</span> <span
  m="386000">replacement,</span> <span m="387430">that</span> <span
  m="387600">the</span> <span m="387690">daughter</span> <span
  m="388130">cell,</span> <span m="388470">for</span> <span
  m="388540">example,</span> <span m="388860">could</span> <span
  m="389090">even</span> <span m="389560">replace</span> <span
  m="390080">the</span> <span m="390170">mother</span> <span
  m="391030">cell,</span> <span m="391835">if</span> <span m="392240">we</span>
  <span m="392645">want.</span> <span m="394040">So</span> <span
  m="394150">this</span> <span m="394270">is</span> <span m="394420">just</span>
  <span m="394600">the</span> <span m="394670">birth.</span> <span
  m="395520">So</span> <span m="395710">A</span> <span m="396020">is</span>
  <span m="396150">going</span> <span m="396240">to</span> <span
  m="396300">lead--</span> <span m="396520">there's</span> <span
  m="396670">going</span> <span m="396770">to be two</span> <span
  m="397040">As,</span> <span m="397190">and</span> <span m="397570">this</span>
  <span m="397740">new</span> <span m="398260">A</span> <span
  m="398660">will</span> <span m="398810">have</span> <span m="398930">to</span>
  <span m="399000">replace</span> <span m="399290">one</span> <span
  m="399620">of</span> <span m="399710">the</span> <span m="399830">other</span>
  <span m="400480">individuals</span> <span m="400980">in</span> <span
  m="401040">the</span> <span m="401100">population,</span> <span
  m="401570">to</span> <span m="401640">keep</span> <span
  m="401890">constant</span> <span m="402310">population</span> <span
  m="402730">size.</span></p><p><span m="407000">All right.</span> <span
  m="407846">Are there any</span> <span m="408240">questions</span> <span
  m="408550">about</span> <span m="408760">the</span> <span
  m="409660">basic</span> <span m="409950">model?</span> <span
  m="412960">OK.</span> <span m="415210">So</span> <span m="415970">that,</span>
  <span m="416510">in</span> <span m="416660">principle,</span> <span
  m="417580">here</span> <span m="417940">we</span> <span m="418100">can</span>
  <span m="418460">use</span> <span m="418680">this</span> <span
  m="418780">model to</span> <span m="419110">try to</span> <span
  m="419310">understand</span> <span m="420310">both</span> <span
  m="420660">neutral</span> <span m="421050">and</span> <span
  m="421130">non-neutral</span> <span m="421610">evolution.</span> <span
  m="422100">But</span> <span m="422350">let's</span> <span
  m="422580">start</span> <span m="422950">out by</span> <span
  m="422990">thinking</span> <span m="423180">about</span> <span
  m="423340">the</span> <span m="423410">neutral</span> <span
  m="423690">case.</span></p><p><span m="428480">So</span> <span
  m="428590">in</span> <span m="428670">particular,</span> <span
  m="429640">the</span> <span m="430140">fitness,</span> <span
  m="431960">rA</span> <span m="432890">is</span> <span m="433020">equal</span>
  <span m="433240">to</span> <span m="433300">rB.</span> <span
  m="436330">Now</span> <span m="436950">what</span> <span m="437080">I</span>
  <span m="437130">want</span> <span m="437290">to</span> <span
  m="437340">do</span> <span m="437530">is,</span> <span m="438080">given</span>
  <span m="438980">the</span> <span m="439080">rules</span> <span
  m="439470">we</span> <span m="439600">just</span> <span m="440170">kind</span>
  <span m="440330">of</span> <span m="440450">laid</span> <span
  m="440640">out</span> <span m="440780">for</span> <span m="440920">you,</span>
  <span m="441430">let's</span> <span m="441520">assume</span> <span
  m="442030">that</span> <span m="442560">i</span> <span m="443070">over</span>
  <span m="443420">n</span> <span m="444730">is</span> <span
  m="444900">equal</span> <span m="445120">to</span> <span m="446730">one</span>
  <span m="447040">third.</span> <span m="448790">So</span> <span
  m="449410">for</span> <span m="449560">now,</span> <span
  m="449850">we'll</span> <span m="450000">say,</span> <span
  m="450190">OK</span> <span m="450320">a</span> <span m="450660">third</span>
  <span m="450890">of</span> <span m="450930">the</span> <span
  m="450990">population</span> <span m="451690">is</span> <span
  m="451910">A,</span> <span m="452870">2/3</span> <span m="453360">is</span>
  <span m="453460">then</span> <span m="453650">B.</span></p><p><span
  m="455610">And</span> <span m="456250">we</span> <span m="456630">can</span>
  <span m="457010">think</span> <span m="457130">about</span> <span
  m="457300">these</span> <span m="457750">probabilities</span> <span
  m="458640">of</span> <span m="459030">going</span> <span
  m="459670">from</span> <span m="459955">i</span> <span m="460240">to i</span>
  <span m="460310">plus</span> <span m="460540">1,</span> <span
  m="460820">as</span> <span m="460920">compared</span> <span
  m="461230">to</span> <span m="461320">going</span> <span
  m="461540">from</span> <span m="461760">i to</span> <span m="462060">i</span>
  <span m="462360">minus</span> <span m="462810">1.</span> <span
  m="464210">So</span> <span m="464340">these</span> <span m="464530">are</span>
  <span m="464600">the</span> <span m="464740">probabilities</span> <span
  m="465650">that</span> <span m="465760">in</span> <span m="465900">one</span>
  <span m="466180">cycle</span> <span m="467290">of</span> <span
  m="467980">birth</span> <span m="468280">replacement,</span> <span
  m="470130">the</span> <span m="470280">number</span> <span
  m="470460">of</span> <span m="470520">A's</span> <span m="470750">goes</span>
  <span m="470920">up</span> <span m="471100">one</span> <span
  m="471480">or</span> <span m="471650">goes</span> <span m="471860">down</span>
  <span m="472080">one.</span> <span m="472600">Can</span> <span
  m="472780">you</span> <span m="472880">ever</span> <span m="473190">go</span>
  <span m="473810">up</span> <span m="474090">two</span> <span
  m="474500">or</span> <span m="474640">three</span> <span m="474940">or</span>
  <span m="475010">four</span> <span m="475560">in</span> <span
  m="475720">the</span> <span m="475840">Moran</span> <span
  m="476050">process</span> <span m="476420">in</span> <span
  m="476500">one</span> <span m="476650">step?</span> <span
  m="477500">No.</span> <span m="478300">Because</span> <span
  m="478560">each</span> <span m="478750">step</span> <span m="479080">is</span>
  <span m="479220">always</span> <span m="480190">one</span> <span
  m="480650">birth</span> <span m="481240">and</span> <span
  m="481450">one</span> <span m="481620">replacement.</span></p><p><span
  m="482860">So</span> <span m="482960">you</span> <span m="483030">can</span>
  <span m="483160">move,</span> <span m="483450">at</span> <span
  m="483620">most,</span> <span m="483960">one.</span> <span
  m="484240">Do</span> <span m="484330">you</span> <span
  m="484460">always</span> <span m="485570">move--</span> <span
  m="486860">does</span> <span m="486990">i</span> <span
  m="487270">change</span> <span m="487780">always?</span> <span
  m="488100">No.</span> <span m="489600">And</span> <span m="489700">what</span>
  <span m="489800">we</span> <span m="489880">want</span> <span
  m="490000">to</span> <span m="490040">know</span> <span m="490220">is</span>
  <span m="490610">the</span> <span m="490730">probability</span> <span
  m="491280">of</span> <span m="491340">going</span> <span
  m="491510">from</span> <span m="491670">i</span> <span m="493410">to</span>
  <span m="493560">i</span> <span m="493960">plus</span> <span
  m="494260">1,</span> <span m="495540">as</span> <span
  m="495760">compared</span> <span m="496080">to the</span> <span
  m="496140">probability</span> <span m="496620">of going</span> <span
  m="496885">from</span> <span m="497150">i</span> <span m="497585">to</span>
  <span m="498020">i minus</span> <span m="498330">one.</span> <span
  m="498680">The</span> <span m="498810">ratio</span> <span m="499130">of</span>
  <span m="499190">these</span> <span m="499350">probabilities</span> <span
  m="500100">is</span> <span m="500340">equal</span> <span m="500630">to</span>
  <span m="501520">what?</span></p><p><span m="519780">We're</span> <span
  m="519970">considering</span> <span m="520409">a</span> <span
  m="520460">case</span> <span m="520789">where</span> <span
  m="521510">the</span> <span m="521679">A's</span> <span m="521980">and</span>
  <span m="522070">B's</span> <span m="522289">have</span> <span
  m="522380">the</span> <span m="522450">same</span> <span
  m="522669">fitness,</span> <span m="523120">so they're</span> <span
  m="524169">somehow</span> <span m="524560">equal</span> <span
  m="525910">per</span> <span m="526070">capita</span> <span
  m="526530">probability</span> <span m="527070">of</span> <span
  m="527130">being</span> <span m="527300">chosen</span> <span
  m="527680">to</span> <span m="527770">reproduce.</span> <span
  m="528190">But</span> <span m="528350">there's--</span> <span
  m="529850">but</span> <span m="529990">we're</span> <span
  m="530080">not</span> <span m="530340">in</span> <span m="530490">a</span>
  <span m="530580">symmetric</span> <span m="531050">population</span> <span
  m="531500">distribution,</span> <span m="531940">right?</span> <span
  m="532130">So</span> <span m="532300">1/3</span> <span m="532520">of
  the</span> <span m="532740">population</span> <span m="533045">is</span> <span
  m="533350">A,</span> <span m="533620">2/3</span> <span m="534120">is</span>
  <span m="534574">B.</span> <span m="537300">So</span> <span
  m="537400">I'll</span> <span m="537510">give</span> <span
  m="537670">you</span> <span m="539550">20</span> <span
  m="539760">seconds</span> <span m="540100">to</span> <span
  m="540190">think</span> <span m="540350">about</span> <span
  m="540530">this.</span></p><p><span m="566130">All right,</span> <span
  m="566280">do</span> <span m="566470">you</span> <span m="566610">need</span>
  <span m="566970">more</span> <span m="567130">time?</span> <span
  m="571450">Everybody</span> <span m="571780">nod</span> <span
  m="572170">or</span> <span m="572290">shake.</span> <span m="572670">Do
  you</span> <span m="572820">need</span> <span m="572950">more</span> <span
  m="573060">time?</span> <span m="575550">OK.</span> <span
  m="575990">I'll</span> <span m="576090">give</span> <span
  m="576200">you</span> <span m="576240">another</span> <span
  m="576620">10</span> <span m="576810">seconds,</span> <span m="577140">because
  it's--</span></p><p><span m="589120">Let's</span> <span m="589360">go</span>
  <span m="589490">ahead and</span> <span m="589710">see</span> <span
  m="589930">where</span> <span m="590120">we</span> <span
  m="590230">are.</span> <span m="591350">Ready?</span> <span
  m="592530">Three,</span> <span m="593300">two,</span> <span
  m="593860">one.</span> <span m="595850">All</span> <span
  m="595910">right.</span> <span m="596510">We</span> <span
  m="596700">have</span> <span m="598270">a</span> <span m="598750">wide</span>
  <span m="599270">range</span> <span m="599680">of</span> <span
  m="599810">different</span> <span m="600250">answers</span> <span
  m="600940">here.</span> <span m="601780">OK,</span> <span
  m="602370">perfect.</span> <span m="603020">This</span> <span
  m="603590">is</span> <span m="604090">exactly</span> <span
  m="604660">the</span> <span m="604750">situation</span> <span
  m="605280">that</span> <span m="605340">we</span> <span m="605430">hope</span>
  <span m="605660">for.</span> <span m="606610">So</span> <span m="606720">turn
  to</span> <span m="606990">your</span> <span m="607090">neighbor.</span> <span
  m="607640">You</span> <span m="607840">should</span> <span
  m="608070">certainly</span> <span m="608490">be</span> <span
  m="608610">able</span> <span m="608730">to</span> <span m="608800">find</span>
  <span m="609080">somebody</span> <span m="609420">that</span> <span
  m="609490">disagrees</span> <span m="609970">with</span> <span
  m="610090">you.</span> <span m="610480">So</span> <span m="610590">if</span>
  <span m="610750">the</span> <span m="610840">first</span> <span
  m="611120">person</span> <span m="611430">you</span> <span
  m="611540">turn</span> <span m="611800">to</span> <span
  m="611950">agrees</span> <span m="612330">with</span> <span
  m="612400">you,</span> <span m="612990">try</span> <span m="613170">to</span>
  <span m="613250">find</span> <span m="613450">somebody</span> <span
  m="613670">else</span> <span m="613910">talk</span> <span
  m="614200">to.</span></p><p><span m="686100">All right,</span> <span
  m="686440">why</span> <span m="686600">don't</span> <span m="686930">we</span>
  <span m="687180">go ahead</span> <span m="687440">and</span> <span
  m="687490">reconvene.</span> <span m="688210">I</span> <span
  m="688520">know</span> <span m="688790">that</span> <span
  m="689110">there</span> <span m="689300">was</span> <span
  m="689470">quite</span> <span m="689720">a</span> <span m="689770">lot</span>
  <span m="689950">of</span> <span m="690020">disagreement,</span> <span
  m="690620">so</span> <span m="690800">that</span> <span
  m="691010">means</span> <span m="691220">that</span> <span
  m="691380">you</span> <span m="691490">guys</span> <span
  m="691680">will</span> <span m="691820">probably</span> <span
  m="692170">not</span> <span m="692480">be</span> <span m="692600">able</span>
  <span m="692750">to</span> <span m="692810">converge</span> <span
  m="693410">in</span> <span m="693510">this</span> <span m="694340">one</span>
  <span m="694520">minute</span> <span m="694770">time</span> <span
  m="694870">frame.</span> <span m="695280">But</span> <span
  m="696450">let</span> <span m="696570">me</span> <span m="696640">just</span>
  <span m="696790">see,</span> <span m="697070">let</span> <span
  m="697150">me</span> <span m="697230">see</span> <span m="697390">if</span>
  <span m="698280">anybody's</span> <span m="698750">mind</span> <span
  m="699160">was</span> <span m="699350">changed</span> <span
  m="699860">by</span> <span m="699960">their</span> <span
  m="700090">neighbors.</span></p><p><span m="700550">All</span> <span
  m="700740">right,</span> <span m="701680">let's</span> <span
  m="701860">re-vote.</span> <span m="702190">Ready,</span> <span
  m="702560">three,</span> <span m="703300">two,</span> <span
  m="703970">one.</span> <span m="705730">OK,</span> <span m="707630">all</span>
  <span m="707680">right,</span> <span m="707890">so</span> <span
  m="708210">it's</span> <span m="709920">pretty</span> <span
  m="710150">much</span> <span m="710330">the</span> <span
  m="710420">same</span> <span m="710870">as</span> <span
  m="710980">where</span> <span m="711330">we started,</span> <span
  m="712390">maybe.</span> <span m="713270">All</span> <span
  m="713440">right.</span> <span m="714970">OK</span> <span m="716100">I</span>
  <span m="716410">would</span> <span m="716510">say--</span> <span
  m="716720">does</span> <span m="716920">anybody</span> <span m="717160">want
  to</span> <span m="717310">volunteer</span> <span m="717610">what</span> <span
  m="717790">their</span> <span m="717900">neighbor</span> <span
  m="718240">said?</span> <span m="720140">I</span> <span m="720250">know</span>
  <span m="720410">what</span> <span m="720510">your</span> <span
  m="720650">neighbors</span> <span m="720900">said.</span> <span
  m="721080">So</span> <span m="721450">tell</span> <span
  m="721630">us.</span></p><p><span m="723550">AUDIENCE: OK,</span> <span
  m="723970">so</span> <span m="724180">if</span> <span m="724590">you--</span>
  <span m="725590">so</span> <span m="725940">I would</span> <span
  m="726320">say it's</span> <span m="726680">E.</span> <span m="727170">And
  the</span> <span m="727660">reason is that--</span> <span m="728150">so
  there</span> <span m="728640">are two cases.</span> <span m="729130">In the
  first</span> <span m="729620">case, both</span> <span m="730110">the
  number</span> <span m="730600">A</span> <span m="731090">and B</span> <span
  m="731580">stay the</span> <span m="731950">same.</span> <span
  m="732260">Right,</span> <span m="732640">for</span> <span
  m="732740">example,</span> <span m="733100">A gets</span> <span
  m="733587">born and</span> <span m="734074">A dies.</span> <span
  m="735050">So</span> <span m="735330">you</span> <span m="735750">first</span>
  <span m="735900">decide,</span> <span m="736640">is</span> <span
  m="736800">the</span> <span m="736940">pop--</span> <span m="737200">is
  the</span> <span m="737460">number</span> <span m="737750">of A and B</span>
  <span m="738226">going to</span> <span m="738702">change,</span> <span
  m="739178">or is it</span> <span m="739654">not going to</span> <span
  m="740130">change?</span></p><p><span m="740606">PROFESSOR:
  OK.</span></p><p><span m="741082">AUDIENCE: Once you've</span> <span
  m="741558">decided</span> <span m="742040">that</span> <span m="742460">it's
  not</span> <span m="742720">going to</span> <span m="743170">change--</span>
  <span m="744055">I'm sorry.</span> <span m="744550">Once you've</span> <span
  m="745045">decided that</span> <span m="745540">it is going to
  change--</span></p><p><span m="745750">PROFESSOR: Right.</span></p><p><span
  m="746690">AUDIENCE: --then you</span> <span m="747140">just want</span> <span
  m="747590">to know, OK,</span> <span m="747930">then</span> <span
  m="748402">what's the</span> <span m="748874">probability</span> <span
  m="749346">that</span> <span m="749818">you</span> <span
  m="750290">just</span> <span m="750690">choose</span> <span m="750850">A
  to</span> <span m="751306">change</span> <span
  m="751762">[INAUDIBLE].</span></p><p><span m="753590">PROFESSOR: OK.</span>
  <span m="755270">Yeah.</span></p><p><span m="755550">AUDIENCE: And then</span>
  <span m="756048">the probability</span> <span m="756546">that A--</span> <span
  m="757542">you</span> <span m="758040">choose--</span></p><p><span
  m="758540">PROFESSOR: OK.</span> <span m="759520">But</span> <span
  m="760000">you</span> <span m="760060">haven't</span> <span
  m="760340">said</span> <span m="760530">anything</span> <span
  m="760780">about</span> <span m="761100">replacement</span> <span
  m="762040">yet.</span> <span m="762590">So</span> <span
  m="762810">I'm--</span> <span m="763540">replacement</span> <span
  m="764120">should</span> <span m="764550">be--</span> <span
  m="765750">because</span> <span m="765940">certainly,</span> <span
  m="766830">we're</span> <span m="766910">talking</span> <span
  m="767030">about</span> <span m="767070">the</span> <span
  m="767210">ratio</span> <span m="767710">of the</span> <span
  m="767830">probability</span> <span m="768700">that</span> <span
  m="769220">the</span> <span m="769610">number</span> <span m="769870">of
  A</span> <span m="770060">goes</span> <span m="770270">up,</span> <span
  m="770770">as</span> <span m="771040">compared to</span> <span m="771350">the
  probability</span> <span m="771640">that the</span> <span
  m="771920">number</span> <span m="772120">of A</span> <span
  m="772290">goes</span> <span m="772520">down.</span> <span
  m="772810">Right?</span> <span m="772950">So</span> <span
  m="773890">we've</span> <span m="774080">already,</span> <span
  m="774480">in</span> <span m="774570">some</span> <span
  m="774780">ways,</span> <span m="774970">excluded</span> <span
  m="775610">the</span> <span m="775700">cases</span> <span
  m="776160">where</span> <span m="776900">the</span> <span
  m="777170">number</span> <span m="777460">of A</span> <span
  m="777590">individuals</span> <span m="778240">doesn't</span> <span
  m="778450">change.</span></p><p><span m="779540">And</span> <span
  m="779920">in</span> <span m="780060">your--</span> <span m="780550">what
  you</span> <span m="780630">just</span> <span m="781080">told</span> <span
  m="781440">us,</span> <span m="782300">you're</span> <span
  m="782700">asking</span> <span m="782960">about</span> <span
  m="783240">the</span> <span m="783330">probability</span> <span
  m="783790">that</span> <span m="784480">individuals</span> <span
  m="784910">are going</span> <span m="785010">to be</span> <span
  m="785120">chosen</span> <span m="786640">to</span> <span
  m="786870">reproduce.</span></p><p><span m="788831">AUDIENCE: Yeah,</span>
  <span m="789278">because</span> <span
  m="789725">[INAUDIBLE].</span></p><p><span m="791710">PROFESSOR: OK.</span>
  <span m="792240">Yeah,</span> <span m="792440">but I guess</span> <span
  m="792930">all</span> <span m="793070">I'm</span> <span
  m="793250">saying</span> <span m="793360">is that</span> <span
  m="793680">there're</span> <span m="793790">going</span> <span m="793880">to
  be two</span> <span m="794110">halves to</span> <span m="794420">this,</span>
  <span m="794660">right?</span> <span m="794850">So</span> <span m="794940">you
  have to</span> <span m="795180">think</span> <span m="795400">about the</span>
  <span m="795560">probability</span> <span m="795990">that an</span> <span
  m="796150">individual</span> <span m="796450">is</span> <span
  m="796750">being</span> <span m="796960">chosen</span> <span
  m="797470">to</span> <span m="797550">reproduce,</span> <span
  m="798350">and</span> <span m="798570">also</span> <span m="798910">the</span>
  <span m="799020">probability</span> <span m="799520">that</span> <span
  m="800830">a</span> <span m="801000">particular</span> <span
  m="801390">type</span> <span m="801900">of</span> <span
  m="801970">individual</span> <span m="802440">will</span> <span
  m="802590">be</span> <span m="802710">chosen</span> <span m="803030">to</span>
  <span m="803090">get</span> <span m="803230">replaced.</span> <span
  m="804260">So it's</span> <span m="804450">the--</span> <span
  m="805020">there's</span> <span m="805270">somehow a</span> <span
  m="805550">balance</span> <span m="806040">of</span> <span
  m="806100">those</span> <span m="806310">two.</span></p><p><span
  m="806660">AUDIENCE: [INAUDIBLE]</span></p><p><span m="808260">PROFESSOR:
  Right,</span> <span m="808590">because</span> <span m="809240">in</span> <span
  m="809300">this</span> <span m="809440">case--</span></p><p><span
  m="809670">AUDIENCE: [INAUDIBLE]</span> <span
  m="809925">replace--</span></p><p><span m="810180">PROFESSOR:
  --replace,</span> <span m="810570">this</span> <span m="810740">is--</span>
  <span m="810940">right,</span> <span m="811260">death,</span> <span
  m="811820">slash--</span> <span m="812310">right.</span> <span
  m="813340">And</span> <span m="813780">I</span> <span m="813840">should</span>
  <span m="814070">maybe</span> <span m="814320">just</span> <span
  m="814540">highlight--</span> <span m="815170">if</span> <span
  m="815290">you</span> <span m="815410">want,</span> <span
  m="815680">you</span> <span m="815760">could</span> <span
  m="815880">call--</span> <span m="816590">replacement--</span> <span
  m="817350">I</span> <span m="817380">mean,</span> <span m="817490">this</span>
  <span m="817630">is</span> <span m="817690">just</span> <span
  m="817840">a</span> <span m="817880">nice</span> <span m="818110">way</span>
  <span m="818220">of</span> <span m="818290">saying</span> <span
  m="818490">death,</span> <span m="818860">right?</span> <span
  m="820660">Death--</span></p><p><span m="824711">AUDIENCE: Yeah, you</span>
  <span m="825174">can.</span> <span m="825640">I mean,</span> <span
  m="826220">[? the point ?]</span> <span m="826390">[? is ?]</span> <span
  m="826890">once</span> <span m="827420">you've</span> <span m="827865">ruled
  out--</span> <span m="828310">once you</span> <span m="828755">say, OK,</span>
  <span m="829200">the populations</span> <span m="829645">are going to</span>
  <span m="830090">change,</span> <span m="830535">then if you</span> <span
  m="830980">choose an</span> <span m="831473">A to</span> <span
  m="831966">reproduce,</span> <span m="832459">a B has</span> <span
  m="832952">to die.</span></p><p><span m="833940">PROFESSOR: Oh, OK,</span>
  <span m="834360">once</span> <span m="834710">you've</span> <span
  m="834910">already--</span></p><p><span m="835995">AUDIENCE: If an</span>
  <span m="836440">A</span> <span m="836580">is chosen</span> <span
  m="837062">to reproduce,</span> <span m="837544">and an A is</span> <span
  m="838026">chosen to</span> <span m="838510">die,</span> <span
  m="838775">then--</span></p><p><span m="839040">PROFESSOR: OK,</span> <span
  m="839430">yeah,</span> <span m="840190">right.</span> <span
  m="840520">But,</span> <span m="840860">OK,</span> <span m="841080">I</span>
  <span m="841190">think</span> <span m="841560">I</span> <span
  m="841700">understand</span> <span m="842000">what</span> <span
  m="842080">you're</span> <span m="842190">saying.</span> <span
  m="842530">But</span> <span m="842660">we--</span> <span m="843450">you</span>
  <span m="843590">still</span> <span m="843800">have</span> <span
  m="843940">to</span> <span m="844010">keep</span> <span
  m="844160">track</span> <span m="844420">of</span> <span
  m="844790">there</span> <span m="845000">are the</span> <span
  m="845170">two</span> <span m="845550">sides.</span> <span
  m="846060">There's</span> <span m="846270">the</span> <span
  m="846370">replace--</span> <span m="846810">there's</span> <span
  m="847100">the</span> <span m="847420">birth,</span> <span
  m="847810">and</span> <span m="847910">the</span> <span
  m="847970">replacements.</span> <span m="848315">And</span> <span
  m="848660">we</span> <span m="848780">have</span> <span m="848860">to</span>
  <span m="848910">figure</span> <span m="849250">out</span> <span
  m="850340">how</span> <span m="850860">the</span> <span
  m="851220">relative</span> <span m="851640">probabilities</span> <span
  m="852180">or</span> <span m="852280">rates</span> <span
  m="852600">that</span> <span m="852710">those</span> <span
  m="852950">two</span> <span m="853180">things</span> <span
  m="853550">happen.</span></p><p><span m="854150">Does</span> <span
  m="854660">somebody</span> <span m="854930">want</span> <span
  m="855080">to</span> <span m="855190">make</span> <span m="855400">an</span>
  <span m="855530">argument</span> <span m="855880">for</span> <span
  m="855960">something</span> <span m="856250">else?</span> <span
  m="856560">I</span> <span m="856590">mean,</span> <span
  m="856750">we'll</span> <span m="857120">see</span> <span
  m="857250">how</span> <span m="857350">this</span> <span
  m="857470">plays</span> <span m="857660">out</span> <span m="857790">in a
  moment.</span></p><p><span m="858737">AUDIENCE: I want to</span> <span
  m="859184">argue for</span> <span m="859631">C.</span></p><p><span
  m="860078">PROFESSOR: OK.</span></p><p><span m="861420">AUDIENCE: So</span>
  <span m="862270">take the</span> <span
  m="862430">numerator.</span></p><p><span m="863030">PROFESSOR:
  Yeah.</span></p><p><span m="863525">AUDIENCE: In order</span> <span
  m="864020">to go</span> <span m="864515">from i to</span> <span m="865010">i
  plus 1--</span> <span m="866000">so we're</span> <span m="866495">going
  to</span> <span m="866990">take</span> <span m="867485">two individuals</span>
  <span m="867980">from the population.</span> <span m="868690">We</span> <span
  m="868850">need</span> <span m="868980">one of</span> <span m="869190">them
  to</span> <span m="869600">be</span> <span m="869940">type</span> <span
  m="870245">A,</span> <span m="871041">that's the one</span> <span
  m="871532">that's going to</span> <span
  m="872023">reproduce.</span></p><p><span m="872514">PROFESSOR:
  Yep.</span></p><p><span m="873005">AUDIENCE: And the other</span> <span
  m="873496">to be type B,</span> <span m="873987">the one that's</span> <span
  m="874478">going to die.</span></p><p><span m="874969">PROFESSOR:
  Yeah.</span></p><p><span m="875951">AUDIENCE: So we</span> <span
  m="876442">get</span> <span m="876933">the product of
  those--</span></p><p><span m="877430">PROFESSOR: Perfect.</span> <span
  m="877840">OK.</span> <span m="878220">And</span> <span m="878490">we</span>
  <span m="878580">can</span> <span m="878670">actually</span> <span
  m="878830">just</span> <span m="879540">be</span> <span
  m="879810">more--</span> <span m="880070">be</span> <span
  m="880130">explicit</span> <span m="880510">about</span> <span
  m="880640">this.</span> <span m="880750">OK,</span> <span m="880930">so
  the</span> <span m="881590">probability--</span> <span m="882100">in</span>
  <span m="882270">one</span> <span m="882510">cycle,</span> <span
  m="883280">the</span> <span m="883390">probability</span> <span
  m="883880">that</span> <span m="884010">you</span> <span m="884110">go</span>
  <span m="884300">from</span> <span m="884490">i</span> <span
  m="884880">to</span> <span m="884960">i</span> <span m="885090">plus</span>
  <span m="885330">one.</span> <span m="885680">That</span> <span
  m="885840">requires</span> <span m="886820">that</span> <span
  m="886990">two</span> <span m="887210">things</span> <span
  m="887450">happen.</span> <span m="888690">One</span> <span
  m="889340">is</span> <span m="889480">that</span> <span m="889620">you</span>
  <span m="889770">choose</span> <span m="890420">an</span> <span
  m="890880">A</span> <span m="891180">individual</span> <span
  m="891800">to</span> <span m="891930">reproduce.</span> <span
  m="893050">And</span> <span m="893170">what's</span> <span
  m="893370">the</span> <span m="893480">probability</span> <span
  m="893790">that you</span> <span m="894100">choose</span> <span m="894300">an
  A</span> <span m="894380">individual</span> <span m="894870">to</span> <span
  m="894940">reproduce?</span></p><p><span m="895520">AUDIENCE: It's going
  to</span> <span m="895943">be i over N.</span></p><p><span
  m="896790">PROFESSOR: i</span> <span m="896990">over N.</span> <span
  m="897830">So</span> <span m="897960">we</span> <span m="898020">have</span>
  <span m="898180">i</span> <span m="898670">over</span> <span
  m="898890">N.</span> <span m="900050">Right,</span> <span m="900450">so</span>
  <span m="900580">this</span> <span m="902900">the</span> <span
  m="903750">probability</span> <span m="905250">that</span> <span
  m="905410">A</span> <span m="905910">reproduces.</span> <span
  m="908350">And</span> <span m="908500">then</span> <span m="909720">for</span>
  <span m="909970">i</span> <span m="910290">to go</span> <span
  m="910530">from--</span> <span m="911310">to</span> <span
  m="911400">increase</span> <span m="911710">by</span> <span
  m="911840">one,</span> <span m="912370">requires</span> <span
  m="912880">not</span> <span m="913080">only</span> <span
  m="913290">that</span> <span m="913840">an A</span> <span
  m="913990">individual</span> <span m="914325">is</span> <span
  m="914660">chosen</span> <span m="915020">to</span> <span
  m="915090">reproduce,</span> <span m="915530">but</span> <span
  m="915610">that</span> <span m="915740">a B</span> <span
  m="916140">individual</span> <span m="916650">is</span> <span
  m="916770">chosen</span> <span m="917880">for</span> <span
  m="918070">replacement,</span> <span m="918800">or</span> <span
  m="918970">death.</span> <span m="919910">And</span> <span
  m="920060">what's</span> <span m="920530">the</span> <span
  m="920610">probability</span> <span m="920950">that that's</span> <span
  m="921340">going</span> <span m="921440">to</span> <span
  m="921480">happen?</span></p><p><span m="922217">AUDIENCE: That's</span> <span
  m="922674">N minus</span> <span m="923131">i</span> <span m="923588">all
  over</span> <span m="924045">N.</span></p><p><span m="924960">PROFESSOR:
  N</span> <span m="925180">minus i,</span> <span m="926490">all over</span>
  <span m="926960">N.</span> <span m="927900">OK.</span> <span
  m="930720">So</span> <span m="930740">this</span> <span m="930870">is</span>
  <span m="930980">the</span> <span m="931080">probability</span> <span
  m="932370">that</span> <span m="932540">in</span> <span m="933110">one</span>
  <span m="933420">cycle</span> <span m="934680">you're</span> <span
  m="934820">going</span> <span m="934920">to</span> <span m="934960">go</span>
  <span m="935120">from</span> <span m="935280">i</span> <span
  m="935610">to</span> <span m="935700">i</span> <span m="935850">plus</span>
  <span m="936110">1.</span> <span m="937380">Now</span> <span
  m="938540">of</span> <span m="938640">course</span> <span
  m="938880">it's</span> <span m="939050">not--</span> <span
  m="939300">we</span> <span m="939500">haven't</span> <span
  m="940570">said</span> <span m="941080">what</span> <span
  m="941190">the</span> <span m="941250">probability</span> <span
  m="941690">of</span> <span m="941760">staying</span> <span
  m="942020">in</span> <span m="942120">i</span> <span m="942310">is,</span>
  <span m="942520">but this</span> <span m="942650">is</span> <span
  m="942830">the</span> <span m="942930">probability</span> <span
  m="943370">that</span> <span m="943630">i</span> <span m="943820">will</span>
  <span m="944040">increase</span> <span m="944690">by</span> <span
  m="944810">one.</span> <span m="948370">Do</span> <span m="948850">we</span>
  <span m="949000">agree?</span></p><p><span m="951380">And</span> <span
  m="951510">indeed,</span> <span m="952180">where</span> <span
  m="952490">is</span> <span m="952620">it</span> <span m="952720">that</span>
  <span m="952800">we've</span> <span m="952950">assumed--</span> <span
  m="953290">where</span> <span m="953480">is</span> <span m="953590">it</span>
  <span m="953710">that</span> <span m="953820">we've</span> <span
  m="954060">assumed</span> <span m="954680">neutrality</span> <span
  m="955760">in</span> <span m="955920">this</span> <span
  m="956100">calculation?</span> <span m="958400">That</span> <span m="958580">A
  and</span> <span m="958940">B</span> <span m="960640">have</span> <span
  m="960780">equal</span> <span m="961070">fitness?</span> <span
  m="962634">Yep?</span></p><p><span m="963106">AUDIENCE: Just take</span> <span
  m="963578">the probability</span> <span m="964050">of</span> <span
  m="964522">reproducing</span> <span m="964994">to be</span> <span
  m="965466">about--</span> <span m="965938">or, the--</span></p><p><span
  m="966890">PROFESSOR: That's</span> <span m="967180">right.</span> <span
  m="968020">That's</span> <span m="968240">right.</span> <span
  m="968980">So</span> <span m="969420">indeed,</span> <span
  m="970430">we've--</span> <span m="971690">this</span> <span
  m="971930">probability</span> <span m="972255">that A</span> <span
  m="972580">reproduces,</span> <span m="973090">we've</span> <span
  m="973320">assumed</span> <span m="973870">that</span> <span
  m="973980">it's</span> <span m="974100">just</span> <span
  m="974200">simply</span> <span m="974460">i</span> <span
  m="974650">over</span> <span m="974840">N.</span> <span
  m="975110">Whereas,</span> <span m="975630">if</span> <span
  m="975790">it</span> <span m="975870">were</span> <span
  m="976030">non-neutral</span> <span m="977430">we'd</span> <span
  m="977540">have</span> <span m="977700">to</span> <span
  m="977770">write</span> <span m="977950">something</span> <span
  m="978200">else.</span> <span m="978380">Maybe</span> <span
  m="978560">we'll</span> <span m="978740">figure</span> <span
  m="978930">out</span> <span m="979020">what</span> <span
  m="979170">that's</span> <span m="979370">going</span> <span
  m="979460">to</span> <span m="979500">be</span> <span m="979580">in</span>
  <span m="979660">a</span> <span m="979700">moment.</span> <span
  m="980080">But</span> <span m="980830">it's</span> <span m="981270">in</span>
  <span m="981380">here</span> <span m="981710">that</span> <span
  m="981720">we've</span> <span m="981860">assumed</span> <span
  m="982060">that.</span></p><p><span m="982710">Incidentally,</span> <span
  m="983230">you</span> <span m="983350">could</span> <span
  m="983560">write</span> <span m="983730">down</span> <span m="984150">a</span>
  <span m="984320">reasonable</span> <span m="985070">model</span> <span
  m="985480">similar</span> <span m="985870">to</span> <span
  m="985940">the</span> <span m="986080">Moran</span> <span
  m="986300">process,</span> <span m="986710">where</span> <span
  m="987490">differences</span> <span m="987890">in</span> <span
  m="987990">fitness</span> <span m="988340">show</span> <span
  m="988570">up</span> <span m="989110">instead</span> <span
  m="989460">of</span> <span m="989920">here,</span> <span m="990710">in</span>
  <span m="990790">the</span> <span m="990880">probability of</span> <span
  m="991260">reproduction,</span> <span m="991680">you</span> <span
  m="991750">can</span> <span m="991840">have</span> <span m="992000">it</span>
  <span m="992080">as a</span> <span m="992470">difference</span> <span
  m="993030">in</span> <span m="993110">probability</span> <span
  m="993650">of</span> <span m="994270">death,</span> <span m="994620">or</span>
  <span m="995390">being</span> <span m="995600">replaced.</span> <span
  m="996120">But</span> <span m="996160">this</span> <span m="996310">is</span>
  <span m="996460">the</span> <span m="996550">most</span> <span
  m="996830">maybe</span> <span m="997010">intuitive</span> <span m="997425">way
  of</span> <span m="997840">thinking about it.</span></p><p><span
  m="999560">And</span> <span m="999720">this</span> <span m="999860">is</span>
  <span m="1000000">very</span> <span m="1000280">similar</span> <span
  m="1000610">to,</span> <span m="1000770">for</span> <span
  m="1000870">example,</span> <span m="1001050">what</span> <span
  m="1001180">happens</span> <span m="1002950">in</span> <span
  m="1004720">a,</span> <span m="1004980">what</span> <span
  m="1005440">you</span> <span m="1005590">might</span> <span
  m="1005730">call,</span> <span m="1006660">a</span> <span
  m="1006790">turbidostat,</span> <span m="1008270">where</span> <span
  m="1008360">you</span> <span m="1008470">keep</span> <span
  m="1009090">constant</span> <span m="1009540">population</span> <span
  m="1010010">size.</span> <span m="1010530">And</span> <span
  m="1010740">as</span> <span m="1011000">the</span> <span
  m="1011070">cells</span> <span m="1011550">divide</span> <span
  m="1012420">other</span> <span m="1012830">cells</span> <span
  m="1013170">are</span> <span m="1013230">randomly</span> <span
  m="1013710">sucked</span> <span m="1014060">out.</span> <span
  m="1015630">So</span> <span m="1015940">I'd</span> <span
  m="1016100">say</span> <span m="1016200">that</span> <span
  m="1016610">this</span> <span m="1016830">Moran</span> <span
  m="1017120">process</span> <span m="1017550">is</span> <span
  m="1017680">really</span> <span m="1020110">a</span> <span
  m="1020550">theoretical</span> <span m="1022070">kind</span> <span
  m="1022250">of</span> <span m="1022410">implementation</span> <span
  m="1023020">of</span> <span m="1023250">what</span> <span
  m="1023710">you</span> <span m="1023840">could do</span> <span
  m="1023930">experimentally,</span> <span m="1024500">is</span> <span
  m="1024859">this</span> <span m="1025040">turbidostat.</span> <span
  m="1025569">Which</span> <span m="1025700">is</span> <span
  m="1025760">like</span> <span m="1025900">a</span> <span
  m="1026010">chemostat,</span> <span m="1027069">instead</span> <span
  m="1027230">of</span> <span m="1027339">keeping</span> <span
  m="1027710">constant</span> <span m="1028230">dilution</span> <span
  m="1028609">rate,</span> <span m="1029160">you</span> <span
  m="1029460">fix</span> <span m="1030000">population</span> <span
  m="1030440">size.</span> <span m="1031688">Yes.</span></p><p><span
  m="1032152">AUDIENCE: So</span> <span m="1032616">do we</span> <span
  m="1033080">care about</span> <span m="1033544">the</span> <span
  m="1034008">step of,</span> <span m="1034936">OK,</span> <span
  m="1035400">first</span> <span m="1035960">A</span> <span
  m="1036274">reproduces.</span> <span m="1037010">Then,</span> <span
  m="1037250">from the</span> <span m="1037709">pool</span> <span m="1038168">of
  new</span> <span m="1038627">individuals--</span> <span
  m="1039545">because</span> <span m="1040004">you're</span> <span
  m="1040463">going to</span> <span m="1040922">have</span> <span
  m="1041381">N</span> <span m="1041840">plus</span> <span m="1042299">1,
  so--</span></p><p><span m="1042760">PROFESSOR: OK,</span> <span
  m="1043550">so</span> <span m="1043660">all right.</span> <span
  m="1044069">I</span> <span m="1044349">think</span> <span
  m="1044460">maybe</span> <span m="1044680">I</span> <span
  m="1044750">wasn't</span> <span m="1045240">totally</span> <span
  m="1045569">clear on</span> <span m="1045800">this.</span> <span
  m="1045930">OK</span> <span m="1046069">so,</span> <span
  m="1046460">you</span> <span m="1046869">have N</span> <span
  m="1047089">individuals</span> <span m="1047460">here.</span> <span
  m="1048230">What</span> <span m="1048390">you're</span> <span
  m="1048490">going</span> <span m="1048569">to</span> <span
  m="1048620">do</span> <span m="1048740">is</span> <span
  m="1048810">you're</span> <span m="1048910">going</span> <span
  m="1049010">to</span> <span m="1049180">choose</span> <span
  m="1049500">one</span> <span m="1049740">of</span> <span
  m="1049800">them</span> <span m="1049880">randomly,</span> <span
  m="1050940">maybe</span> <span m="1051320">proportional to</span> <span
  m="1051780">fitness</span> <span m="1052170">for</span> <span
  m="1052300">reproduction.</span> <span m="1053070">And</span> <span
  m="1053240">then,</span> <span m="1053520">but</span> <span
  m="1053610">then,</span> <span m="1053760">from</span> <span
  m="1053920">this</span> <span m="1054040">original</span> <span
  m="1054550">N,</span> <span m="1054910">you</span> <span
  m="1055040">choose</span> <span m="1055230">one</span> <span
  m="1055390">of</span> <span m="1055430">them</span> <span m="1055530">for
  death.</span></p><p><span m="1057640">So it's</span> <span
  m="1057800">not--</span> <span m="1057930">you're</span> <span
  m="1058070">not,</span> <span m="1058320">yes.</span> <span
  m="1058480">It's</span> <span m="1058650">not--</span> <span
  m="1058950">so</span> <span m="1059190">the</span> <span
  m="1059600">daughter</span> <span m="1060090">cell</span> <span
  m="1060650">is</span> <span m="1060780">not</span> <span
  m="1060960">allowed</span> <span m="1061250">to--</span></p><p><span
  m="1061650">AUDIENCE: Die.</span></p><p><span m="1062730">PROFESSOR:
  Right.</span> <span m="1062960">The</span> <span m="1063040">daughter</span>
  <span m="1063340">cell</span> <span m="1063530">always</span> <span
  m="1063740">replaces</span> <span m="1064210">somebody,</span> <span
  m="1064990">but</span> <span m="1065110">it</span> <span
  m="1065270">could've</span> <span m="1065520">been</span> <span
  m="1065650">the</span> <span m="1065730">mother</span> <span
  m="1066050">cell.</span> <span m="1066720">If</span> <span
  m="1066910">we're</span> <span m="1067300">thinking</span> <span
  m="1067430">about</span> <span m="1067580">this</span> <span
  m="1067980">in</span> <span m="1068040">the</span> <span
  m="1068110">context</span> <span m="1068410">of</span> <span
  m="1068480">cells.</span> <span m="1073640">So</span> <span
  m="1073650">we</span> <span m="1073740">haven't</span> <span
  m="1073960">yet</span> <span m="1075230">figured</span> <span
  m="1075510">out</span> <span m="1076060">which</span> <span m="1076280">answer
  is</span> <span m="1076600">which,</span> <span m="1076890">right?</span>
  <span m="1077660">But</span> <span m="1078490">we</span> <span
  m="1078590">can</span> <span m="1078700">go</span> <span
  m="1078800">ahead.</span> <span m="1079180">OK,</span> <span m="1079260">this
  is the</span> <span m="1079500">probability</span> <span m="1079990">that
  A</span> <span m="1080200">reproduces,</span> <span m="1080960">and</span>
  <span m="1081420">over</span> <span m="1081520">here,</span> <span
  m="1081640">this</span> <span m="1081800">is</span> <span
  m="1081910">the</span> <span m="1082100">probability</span> <span
  m="1083460">that</span> <span m="1083750">a</span> <span m="1084030">B</span>
  <span m="1084300">individual</span> <span m="1086110">is</span> <span
  m="1086290">replaced.</span> <span m="1086830">Right?</span></p><p><span
  m="1093530">What</span> <span m="1093750">we can</span> <span
  m="1093890">do</span> <span m="1093970">is,</span> <span m="1094110">we</span>
  <span m="1094200">can</span> <span m="1094290">ask,</span> <span
  m="1094600">well</span> <span m="1094640">what's</span> <span
  m="1094820">the</span> <span m="1094920">probability</span> <span
  m="1095440">that</span> <span m="1095520">we</span> <span
  m="1095610">go</span> <span m="1095770">from</span> <span m="1095950">i</span>
  <span m="1096520">to</span> <span m="1096640">i</span> <span
  m="1096800">minus</span> <span m="1097180">1?</span> <span
  m="1098780">Well</span> <span m="1099000">it's the</span> <span
  m="1099150">exact</span> <span m="1099760">kind</span> <span
  m="1099930">of</span> <span m="1100010">same</span> <span
  m="1100480">calculation,</span> <span m="1101290">except</span> <span
  m="1101430">now</span> <span m="1101680">what we</span> <span
  m="1101860">want</span> <span m="1102050">to know</span> <span
  m="1102110">is,</span> <span m="1102730">we</span> <span
  m="1102870">want</span> <span m="1103020">to know the</span> <span
  m="1103150">probability</span> <span m="1103830">that</span> <span
  m="1104170">a</span> <span m="1104390">B</span> <span m="1104820">is</span>
  <span m="1104970">chosen</span> <span m="1105330">for</span> <span
  m="1105480">reproduction.</span> <span m="1107220">And</span> <span
  m="1107540">what</span> <span m="1107670">is</span> <span
  m="1107730">that</span> <span m="1107870">going</span> <span
  m="1107950">to</span> <span m="1107990">be?</span> <span
  m="1108160">Somebody?</span> <span m="1111220">N</span> <span
  m="1111510">minus</span> <span m="1111840">i,</span> <span
  m="1112970">right,</span> <span m="1113080">the</span> <span
  m="1113160">number</span> <span m="1113410">of</span> <span
  m="1113530">B</span> <span m="1113640">individuals</span> <span
  m="1114430">divided</span> <span m="1114740">by</span> <span
  m="1114820">the</span> <span m="1114930">total</span> <span
  m="1115220">number</span> <span m="1115410">of</span> <span
  m="1115470">individuals.</span></p><p><span m="1116550">So</span> <span
  m="1116650">this</span> <span m="1116690">is</span> <span
  m="1116820">the</span> <span m="1116910">probability</span> <span
  m="1117580">that</span> <span m="1118360">a</span> <span m="1118620">B</span>
  <span m="1119740">reproduces.</span> <span m="1123000">And</span> <span
  m="1123260">then</span> <span m="1123390">what's</span> <span
  m="1123580">the</span> <span m="1123680">probability</span> <span
  m="1124160">that</span> <span m="1124560">A--</span> <span
  m="1125470">that</span> <span m="1125640">an</span> <span m="1125780">A</span>
  <span m="1126200">type</span> <span m="1126520">individual</span> <span
  m="1126670">will</span> <span m="1126880">be</span> <span
  m="1127000">chosen</span> <span m="1127360">for</span> <span
  m="1127530">replacement</span> <span m="1128090">or</span> <span
  m="1128180">death?</span> <span m="1131000">That's</span> <span
  m="1131220">just</span> <span m="1131360">i</span> <span
  m="1131640">over</span> <span m="1131730">N.</span> <span
  m="1132900">The</span> <span m="1132990">number</span> <span
  m="1133230">of</span> <span m="1133320">A</span> <span
  m="1133630">individuals</span> <span m="1133850">divided</span> <span
  m="1134090">by</span> <span m="1134180">the</span> <span
  m="1134260">total</span> <span m="1134500">population</span> <span
  m="1134920">size.</span></p><p><span m="1145320">All right,</span> <span
  m="1145440">does</span> <span m="1145610">everybody</span> <span
  m="1145990">agree</span> <span m="1146270">with</span> <span
  m="1147250">the</span> <span m="1147420">two</span> <span
  m="1147570">calculations</span> <span m="1148220">that</span> <span
  m="1148330">we</span> <span m="1148430">just</span> <span
  m="1148650">did?</span> <span m="1152100">Let's</span> <span
  m="1152680">re-vote.</span> <span m="1155940">All</span> <span
  m="1156130">right,</span> <span m="1156430">ready,</span> <span
  m="1157210">three,</span> <span m="1158540">two,</span> <span
  m="1159540">one.</span> <span m="1161070">All right,</span> <span
  m="1161330">see,</span> <span m="1161460">you know,</span> <span
  m="1161800">if</span> <span m="1162170">we</span> <span m="1162260">do</span>
  <span m="1162360">the</span> <span m="1162450">calculation,</span> <span
  m="1163080">we</span> <span m="1163260">can</span> <span
  m="1163410">convince</span> <span m="1163490">you.</span> <span
  m="1164470">So</span> <span m="1164580">indeed,</span> <span
  m="1166616">these</span> <span m="1167060">are</span> <span
  m="1167160">equal,</span> <span m="1167490">these</span> <span
  m="1167640">two</span> <span m="1167750">probabilities.</span></p><p><span
  m="1173780">Right,</span> <span m="1173950">and</span> <span
  m="1174040">this</span> <span m="1174310">is</span> <span
  m="1174490">funny.</span> <span m="1174930">Because</span> <span
  m="1175330">on</span> <span m="1175500">the</span> <span
  m="1175580">one</span> <span m="1175810">hand</span> <span
  m="1176170">it's</span> <span m="1176310">like</span> <span
  m="1177360">blindingly</span> <span m="1178000">obvious,</span> <span
  m="1178560">but</span> <span m="1178670">then</span> <span
  m="1178770">the</span> <span m="1178860">other</span> <span
  m="1179040">hand,</span> <span m="1179790">you</span> <span
  m="1179920">get</span> <span m="1180080">yourself</span> <span
  m="1180410">all</span> <span m="1180550">tied</span> <span
  m="1180800">up</span> <span m="1180880">in</span> <span
  m="1180970">knots</span> <span m="1181220">thinking</span> <span
  m="1181510">about</span> <span m="1181730">it.</span> <span
  m="1181850">So</span> <span m="1183340">I</span> <span
  m="1183470">don't</span> <span m="1184140">understand</span> <span
  m="1184470">why</span> <span m="1184710">or</span> <span
  m="1184760">how</span> <span m="1184910">those</span> <span
  m="1185090">two</span> <span m="1185250">statements</span> <span
  m="1185630">can</span> <span m="1185750">be</span> <span
  m="1185890">true</span> <span m="1186230">at</span> <span
  m="1186300">the</span> <span m="1186380">same</span> <span
  m="1186620">time,</span> <span m="1187000">but</span> <span
  m="1187190">they</span> <span m="1187350">are.</span> <span
  m="1190090">So</span> <span m="1190150">this</span> <span
  m="1190330">is</span> <span m="1190490">indeed</span> <span
  m="1191490">a</span> <span m="1191620">random</span> <span
  m="1192020">walk</span> <span m="1193220">in</span> <span m="1194430">i</span>
  <span m="1194720">space,</span> <span m="1195660">number</span> <span
  m="1195940">of A</span> <span m="1196000">individuals.</span></p><p><span
  m="1201560">And</span> <span m="1201850">it</span> <span
  m="1202140">sort</span> <span m="1202250">of</span> <span
  m="1202300">has</span> <span m="1202530">to</span> <span
  m="1202590">be,</span> <span m="1202720">because</span> <span
  m="1202900">these</span> <span m="1203040">things</span> <span
  m="1203230">are</span> <span m="1203290">neutral.</span> <span
  m="1204340">The</span> <span m="1204440">fact</span> <span
  m="1204750">that</span> <span m="1205570">i</span> <span m="1205780">over
  N</span> <span m="1206110">is</span> <span m="1206250">not</span> <span
  m="1206510">equal</span> <span m="1206680">to a</span> <span
  m="1206810">half</span> <span m="1207610">doesn't</span> <span
  m="1208050">matter,</span> <span m="1208700">because</span> <span
  m="1209170">these</span> <span m="1209460">two</span> <span
  m="1209690">terms</span> <span m="1210180">kind</span> <span
  m="1210330">of</span> <span m="1210440">cancel.</span> <span
  m="1211230">But</span> <span m="1211380">indeed,</span> <span
  m="1211680">all</span> <span m="1212030">of</span> <span
  m="1212160">the</span> <span m="1212290">things</span> <span
  m="1212740">that</span> <span m="1212910">you know</span> <span
  m="1213300">have</span> <span m="1213690">to</span> <span
  m="1213770">be</span> <span m="1213900">true</span> <span
  m="1214240">based</span> <span m="1214520">on</span> <span
  m="1214580">the</span> <span m="1214650">fact</span> <span
  m="1214990">that</span> <span m="1215300">A</span> <span
  m="1215610">and</span> <span m="1215900">B</span> <span
  m="1216120">have</span> <span m="1216260">equal</span> <span
  m="1216480">fitness,</span> <span m="1219040">they're</span> <span
  m="1219230">going</span> <span m="1219340">to</span> <span
  m="1219950">not</span> <span m="1220240">work</span> <span
  m="1221150">if</span> <span m="1221730">this</span> <span
  m="1221910">thing</span> <span m="1222180">were</span> <span
  m="1222280">not</span> <span m="1222310">equal</span> <span
  m="1222470">to</span> <span m="1222540">1,</span> <span m="1222920">if</span>
  <span m="1223250">these</span> <span m="1223390">two</span> <span
  m="1223520">probabilities</span> <span m="1224740">were</span> <span
  m="1224880">not</span> <span m="1225040">equal.</span></p><p><span
  m="1225550">So</span> <span m="1226690">any</span> <span m="1226960">of</span>
  <span m="1227000">these</span> <span m="1227120">other</span> <span
  m="1227280">answers</span> <span m="1228170">would</span> <span
  m="1228390">lead</span> <span m="1228630">to</span> <span
  m="1228730">things</span> <span m="1229070">that you</span> <span
  m="1229170">would</span> <span m="1229270">clearly</span> <span
  m="1229780">agree</span> <span m="1230070">are</span> <span
  m="1230140">going</span> <span m="1230220">to</span> <span
  m="1230260">be</span> <span m="1230340">nonsensical,</span> <span
  m="1230750">if</span> <span m="1231160">you</span> <span
  m="1231450">think</span> <span m="1231740">through</span> <span
  m="1231900">the</span> <span m="1233470">consequence</span> <span
  m="1233940">of</span> <span m="1234010">this.</span> <span
  m="1234140">And</span> <span m="1234280">we're</span> <span
  m="1234680">going</span> <span m="1234770">to</span> <span
  m="1234810">do</span> <span m="1234920">one</span> <span
  m="1235120">right</span> <span m="1235270">now.</span> <span
  m="1240230">All</span> <span m="1240330">right,</span> <span
  m="1240530">let's</span> <span m="1240760">imagine</span> <span
  m="1241220">that we</span> <span m="1241320">start--</span> <span
  m="1244910">so</span> <span m="1245210">here's</span> <span
  m="1249010">the</span> <span m="1249090">number</span> <span m="1249410">of
  A</span> <span m="1249480">individuals,</span> <span m="1250350">i.</span>
  <span m="1253060">I</span> <span m="1253180">apologize</span> <span
  m="1253520">that</span> <span m="1253860">that's</span> <span
  m="1254420">the</span> <span m="1254520">nomenclature</span> <span
  m="1254990">we</span> <span m="1255060">have</span> <span
  m="1255450">for</span> <span m="1256840">a</span> <span
  m="1256870">number</span> <span m="1257130">of A</span> <span
  m="1257180">individuals,</span> <span m="1257720">but</span> <span
  m="1258020">we</span> <span m="1258370">want</span> <span
  m="1258500">to</span> <span m="1258540">be</span> <span
  m="1258600">consistent</span> <span m="1258990">with</span> <span
  m="1259100">Martin's</span> <span m="1259430">book.</span></p><p><span
  m="1261320">Now</span> <span m="1262560">let's</span> <span
  m="1262790">say</span> <span m="1262870">this</span> <span
  m="1263040">is</span> <span m="1263190">N</span> <span m="1265170">and</span>
  <span m="1267230">let's</span> <span m="1267460">say</span> <span
  m="1267660">we</span> <span m="1267820">start</span> <span
  m="1268070">out</span> <span m="1268570">at</span> <span
  m="1269550">some</span> <span m="1270210">i</span> <span
  m="1271160">here.</span> <span m="1272250">The</span> <span
  m="1272320">question</span> <span m="1272630">is,</span> <span
  m="1272760">what's</span> <span m="1272980">the</span> <span
  m="1273100">probability</span> <span m="1274700">that</span> <span
  m="1275090">B</span> <span m="1275430">fixes?</span> <span
  m="1277490">I</span> <span m="1277510">want</span> <span m="1277610">to</span>
  <span m="1277650">make</span> <span m="1277780">sure</span> <span
  m="1278000">I</span> <span m="1278060">write</span> <span
  m="1278330">down</span> <span m="1278530">some</span> <span
  m="1278680">reasonable</span> <span m="1278955">options.</span></p><p><span
  m="1283580">So</span> <span m="1283690">what we</span> <span m="1283990">want
  to know</span> <span m="1284140">is the</span> <span
  m="1284240">probability</span> <span m="1287440">that</span> <span
  m="1289230">B</span> <span m="1290190">fixes,</span> <span
  m="1290680">and</span> <span m="1290780">that</span> <span
  m="1290890">means</span> <span m="1291200">that</span> <span
  m="1291340">it</span> <span m="1291510">takes</span> <span
  m="1291770">over</span> <span m="1294420">eventually.</span> <span
  m="1296560">That</span> <span m="1296800">B,</span> <span
  m="1297155">we'll</span> <span m="1297510">say</span> <span
  m="1297700">eventually.</span> <span m="1305210">In</span> <span
  m="1305480">the</span> <span m="1305570">Moran</span> <span
  m="1305970">process</span> <span m="1306760">with</span> <span
  m="1306950">neutral</span> <span m="1308980">dynamics.</span></p><p><span
  m="1335266">AUDIENCE: I's the</span> <span m="1335747">number of</span> <span
  m="1336228">A,</span> <span m="1336709">right?</span></p><p><span
  m="1338160">PROFESSOR: That's</span> <span m="1338320">right.</span> <span
  m="1339580">i</span> <span m="1341826">is</span> <span m="1342250">the</span>
  <span m="1342310">number</span> <span m="1342710">of A</span> <span
  m="1342860">individuals.</span> <span m="1362540">I'm</span> <span
  m="1362790">going to</span> <span m="1362970">give you</span> <span
  m="1364300">seven</span> <span m="1364620">more</span> <span
  m="1364770">seconds.</span> <span m="1381390">All</span> <span
  m="1381490">right,</span> <span m="1381740">ready,</span> <span
  m="1382650">three,</span> <span m="1384040">two,</span> <span
  m="1385000">one.</span></p><p><span m="1388240">All</span> <span
  m="1388690">right,</span> <span m="1389140">so</span> <span
  m="1389310">we</span> <span m="1389400">have--</span> <span
  m="1389850">it's</span> <span m="1390130">kind</span> <span
  m="1390260">of</span> <span m="1390420">mostly</span> <span m="1390780">split
  between</span> <span m="1391260">C's</span> <span m="1391730">and</span> <span
  m="1391930">D's.</span> <span m="1392780">Although</span> <span
  m="1392910">I'd</span> <span m="1393100">say</span> <span m="1393210">a</span>
  <span m="1393270">majority</span> <span m="1393930">of</span> <span
  m="1393970">the</span> <span m="1394050">group</span> <span
  m="1394260">is</span> <span m="1394350">going</span> <span
  m="1394450">to</span> <span m="1394510">say--</span> <span
  m="1394770">is</span> <span m="1394910">saying</span> <span
  m="1395120">that</span> <span m="1395220">it's</span> <span
  m="1395660">going</span> <span m="1395760">to</span> <span
  m="1395900">be</span> <span m="1396600">D.</span> <span m="1397400">All</span>
  <span m="1397660">right,</span> <span m="1398110">can--</span> <span
  m="1400160">all right,</span> <span m="1400330">and</span> <span
  m="1400420">this</span> <span m="1400570">is</span> <span
  m="1403160">the</span> <span m="1403330">distinction</span> <span
  m="1403730">between</span> <span m="1403910">the</span> <span
  m="1403980">probability</span> <span m="1404410">that</span> <span
  m="1404480">B</span> <span m="1404940">fixes</span> <span
  m="1405430">and</span> <span m="1405530">that</span> <span
  m="1405790">A</span> <span m="1406060">fixes.</span></p><p><span
  m="1407580">I'm</span> <span m="1407730">not</span> <span
  m="1407910">trying</span> <span m="1408100">to</span> <span
  m="1408160">be</span> <span m="1408260">super</span> <span
  m="1408560">tricky,</span> <span m="1408840">but</span> <span
  m="1409000">I</span> <span m="1409060">just</span> <span
  m="1409200">want</span> <span m="1409310">to</span> <span
  m="1409350">make</span> <span m="1409480">sure</span> <span
  m="1409610">that</span> <span m="1409820">you</span> <span
  m="1409980">keep</span> <span m="1410250">track</span> <span
  m="1410610">of</span> <span m="1410900">A's</span> <span
  m="1411210">and</span> <span m="1411360">B's.</span> <span
  m="1413580">And</span> <span m="1413720">in</span> <span
  m="1413820">particular,</span> <span m="1414840">as</span> <span
  m="1415570">i</span> <span m="1415970">increases,</span> <span
  m="1418590">the</span> <span m="1418740">probability</span> <span
  m="1419420">that</span> <span m="1419650">A</span> <span
  m="1420010">fixes</span> <span m="1420440">should</span> <span
  m="1420540">go</span> <span m="1420750">up</span> <span m="1421080">or</span>
  <span m="1421210">down?</span> <span m="1421660">Verbally,</span> <span
  m="1422220">three,</span> <span m="1422950">two,</span> <span
  m="1423610">one.</span></p><p><span m="1424033">AUDIENCE:
  Up.</span></p><p><span m="1424880">PROFESSOR: Up.</span> <span
  m="1427270">This</span> <span m="1427970">here--</span> <span
  m="1428310">over</span> <span m="1428440">here</span> <span
  m="1428660">is</span> <span m="1428850">a bunch</span> <span
  m="1429170">of</span> <span m="1429300">A's,</span> <span
  m="1429890">here</span> <span m="1430030">is</span> <span m="1430100">a
  bunch</span> <span m="1430220">of</span> <span m="1430310">B's.</span> <span
  m="1432070">So</span> <span m="1432200">if</span> <span m="1432270">you</span>
  <span m="1432330">have</span> <span m="1432410">a</span> <span
  m="1432470">larger</span> <span m="1433050">here,</span> <span
  m="1433640">than</span> <span m="1433920">you</span> <span
  m="1434010">should</span> <span m="1434170">be</span> <span
  m="1434280">more</span> <span m="1434610">likely</span> <span
  m="1435090">to</span> <span m="1435230">fix</span> <span m="1436015">the
  A</span> <span m="1436360">individuals,</span> <span m="1437530">vice</span>
  <span m="1437760">versa.</span> <span m="1440560">So</span> <span
  m="1440620">in</span> <span m="1440850">particular,</span> <span
  m="1442000">this--</span> <span m="1442920">the</span> <span
  m="1443030">probability</span> <span m="1443710">that</span> <span
  m="1443980">B</span> <span m="1444180">eventually</span> <span
  m="1444510">fixes</span> <span m="1444850">is</span> <span
  m="1444960">going</span> <span m="1445070">to</span> <span
  m="1445110">be</span> <span m="1445200">this,</span> <span
  m="1445650">whereas</span> <span m="1445820">the</span> <span
  m="1445910">probability</span> <span m="1447260">that</span> <span
  m="1447520">A</span> <span m="1447820">will</span> <span
  m="1448120">fix</span> <span m="1449910">eventually</span> <span
  m="1450910">is</span> <span m="1451090">just</span> <span
  m="1451270">going</span> <span m="1451360">to</span> <span
  m="1451420">be</span> <span m="1451540">1</span> <span
  m="1451730">minus</span> <span m="1452000">that, it's</span> <span
  m="1452200">i</span> <span m="1452680">over</span> <span
  m="1452840">N.</span></p><p><span m="1453020">So</span> <span
  m="1453420">this</span> <span m="1453610">is</span> <span
  m="1453710">indeed</span> <span m="1454120">what</span> <span
  m="1456010">was</span> <span m="1456480">pointed</span> <span
  m="1456740">out</span> <span m="1456940">in</span> <span
  m="1457050">the</span> <span m="1457120">book.</span> <span m="1458910">All
  right,</span> <span m="1459030">and</span> <span m="1459970">can</span> <span
  m="1460120">somebody</span> <span m="1461070">give</span> <span
  m="1461260">an</span> <span m="1461370">argument,</span> <span
  m="1463010">verbally,</span> <span m="1464040">for</span> <span
  m="1464240">why</span> <span m="1464440">the--</span> <span
  m="1464800">I</span> <span m="1465100">mean,</span> <span
  m="1465270">this</span> <span m="1465450">is</span> <span m="1465580">a</span>
  <span m="1465820">result,</span> <span m="1466480">that</span> <span
  m="1466580">if</span> <span m="1466700">you</span> <span
  m="1466860">think</span> <span m="1467080">about</span> <span m="1467260">in
  the</span> <span m="1467320">right</span> <span m="1467510">way,</span> <span
  m="1469350">you</span> <span m="1469530">can</span> <span
  m="1469830">just</span> <span m="1470080">verbally</span> <span
  m="1470490">say</span> <span m="1470720">why it</span> <span
  m="1470970">has</span> <span m="1471180">to</span> <span m="1471250">be</span>
  <span m="1471360">this.</span> <span m="1472640">Rather</span> <span
  m="1473010">than</span> <span m="1473170">writing</span> <span
  m="1473400">down</span> <span m="1474230">all</span> <span
  m="1474420">the</span> <span m="1474480">equations</span> <span
  m="1474800">that--</span> <span m="1479270">so</span> <span
  m="1479430">why</span> <span m="1479630">is</span> <span m="1479740">it</span>
  <span m="1479840">that</span> <span m="1479900">the</span> <span
  m="1480020">probability</span> <span m="1480370">that A</span> <span
  m="1480570">will</span> <span m="1480970">eventually</span> <span
  m="1481350">fix</span> <span m="1481650">has to be</span> <span
  m="1481810">equal to</span> <span m="1482090">i over N?</span> <span
  m="1488980">Yeah.</span></p><p><span m="1489568">AUDIENCE: [INAUDIBLE]</span>
  <span m="1490404">book.</span></p><p><span m="1491660">PROFESSOR: Yeah,</span>
  <span m="1491880">perfect.</span></p><p><span m="1494480">AUDIENCE: So</span>
  <span m="1494850">at this</span> <span m="1495590">given</span> <span
  m="1495950">time,</span> <span m="1496230">there are</span> <span
  m="1496510">N</span> <span m="1496860">individuals--</span></p><p><span
  m="1497480">PROFESSOR: Yep.</span> <span m="1498920">And</span> <span
  m="1499240">there</span> <span m="1499380">will</span> <span
  m="1499470">always</span> <span m="1499690">be</span> <span
  m="1499840">N</span> <span m="1499940">individuals,</span> <span
  m="1500380">because</span> <span m="1500490">we're</span> <span
  m="1500620">keeping</span> <span m="1500930">it--</span></p><p><span
  m="1501010">AUDIENCE: OK,</span> <span m="1501457">yeah,</span> <span
  m="1501904">right.</span> <span m="1504590">Their</span> <span
  m="1504830">descendents,</span> <span m="1505280">at</span> <span
  m="1505656">some</span> <span m="1506032">point,</span> <span
  m="1506410">the</span> <span m="1506500">descendents</span> <span
  m="1506980">of</span> <span m="1508010">one of them</span> <span
  m="1508295">is going to</span> <span m="1508580">take over</span> <span
  m="1509060">the whole</span> <span m="1509540">population.</span> <span
  m="1510020">That's a given.</span></p><p><span m="1510500">PROFESSOR:
  That's</span> <span m="1510700">right.</span> <span m="1512460">And</span>
  <span m="1512680">that's</span> <span m="1512820">fine.</span> <span
  m="1513690">It's</span> <span m="1513980">at</span> <span
  m="1514240">first</span> <span m="1515220">glance</span> <span
  m="1515680">kind</span> <span m="1515810">of</span> <span
  m="1515870">surprising</span> <span m="1516530">but,</span> <span
  m="1518290">it's</span> <span m="1518510">just</span> <span
  m="1518670">the</span> <span m="1518750">nature</span> <span
  m="1519070">of--</span> <span m="1520750">if</span> <span
  m="1520970">you</span> <span m="1521090">imagine</span> <span
  m="1521920">that</span> <span m="1522080">they</span> <span
  m="1522230">all</span> <span m="1522860">were</span> <span
  m="1523050">individually</span> <span m="1523630">tagged,</span> <span
  m="1524100">right,</span> <span m="1524300">so</span> <span
  m="1524400">it</span> <span m="1524470">wasn't</span> <span
  m="1524740">just</span> <span m="1524900">that we</span> <span
  m="1525010">had</span> <span m="1525200">two</span> <span
  m="1525410">types,</span> <span m="1525700">A and</span> <span
  m="1525940">B.</span> <span m="1526170">But</span> <span m="1526290">if</span>
  <span m="1526380">they</span> <span m="1526480">were</span> <span
  m="1526620">all</span> <span m="1527550">color</span> <span
  m="1527820">coded</span> <span m="1528410">using</span> <span
  m="1529560">rainbow</span> <span m="1529960">colors,</span> <span
  m="1530390">then</span> <span m="1530850">you could</span> <span
  m="1530970">keep</span> <span m="1531200">track</span> <span
  m="1531440">of</span> <span m="1531500">them.</span> <span
  m="1532410">And</span> <span m="1532510">one</span> <span
  m="1532750">of</span> <span m="1533010">the</span> <span
  m="1533230">individuals</span> <span m="1533750">will</span> <span
  m="1533930">eventually</span> <span m="1534900">fix.</span> <span
  m="1537850">Now,</span> <span m="1538986">OK,</span> <span
  m="1539370">and</span> <span m="1539480">then</span> <span
  m="1539580">what's</span> <span m="1539850">next?</span></p><p><span
  m="1540612">AUDIENCE: So</span> <span m="1541044">there</span> <span
  m="1541476">are</span> <span m="1541908">i</span> <span
  m="1542340">individuals</span> <span m="1542590">that</span> <span
  m="1542950">are</span> <span m="1544560">type</span> <span
  m="1544950">A,</span> <span m="1545730">so</span> <span m="1546115">the</span>
  <span m="1546500">probability</span> <span m="1546980">that</span> <span
  m="1547940">this one</span> <span m="1548420">individual</span> <span
  m="1548920">[INAUDIBLE]</span> <span m="1549750">will</span> <span
  m="1550090">fix.</span></p><p><span m="1551150">PROFESSOR: And</span> <span
  m="1551310">then</span> <span m="1551390">there</span> <span
  m="1551690">is</span> <span m="1552110">one</span> <span
  m="1553550">ingredient</span> <span m="1554180">in</span> <span
  m="1554230">that</span> <span m="1554370">argument</span> <span
  m="1554790">that</span> <span m="1554890">you</span> <span
  m="1554980">didn't</span> <span m="1555230">say,</span> <span m="1555580">but
  I'm sure is</span> <span m="1556040">in</span> <span m="1556150">your</span>
  <span m="1556500">mind.</span> <span m="1557170">Which</span> <span
  m="1557330">is,</span> <span m="1557580">how</span> <span
  m="1557820">is</span> <span m="1557940">it</span> <span
  m="1558040">that</span> <span m="1558100">the</span> <span
  m="1558220">probability--</span> <span m="1559330">so</span> <span
  m="1559890">among</span> <span m="1560330">these</span> <span
  m="1560520">N</span> <span m="1560770">individuals,</span> <span
  m="1561810">right?</span> <span m="1562930">One</span> <span
  m="1563210">of</span> <span m="1563260">them</span> <span
  m="1563600">will</span> <span m="1563770">eventually</span> <span
  m="1564150">fix.</span> <span m="1564840">And</span> <span
  m="1566340">what's</span> <span m="1566590">the</span> <span
  m="1567420">probability</span> <span m="1567785">that</span> <span
  m="1568150">each</span> <span m="1568280">one</span> <span
  m="1568480">will</span> <span m="1568600">be</span> <span
  m="1568870">the</span> <span m="1569160">lucky</span> <span
  m="1571050">ancestor</span> <span m="1571610">for</span> <span
  m="1571750">all</span> <span m="1571960">of</span> <span
  m="1572030">the</span> <span m="1572110">population?</span></p><p><span
  m="1572830">AUDIENCE: So it's</span> <span m="1573217">equally</span> <span
  m="1573604">distributed.</span></p><p><span m="1573991">PROFESSOR:
  Yeah.</span> <span m="1574380">It's</span> <span m="1574730">just</span> <span
  m="1574890">1</span> <span m="1575180">over</span> <span m="1575360">N,</span>
  <span m="1575610">right?</span> <span m="1575860">So</span> <span
  m="1575940">the idea</span> <span m="1576130">is</span> <span
  m="1576260">there</span> <span m="1576440">are N</span> <span
  m="1576670">individuals in</span> <span m="1577050">the</span> <span
  m="1577140">population,</span> <span m="1577570">they're</span> <span
  m="1577710">all</span> <span m="1578030">identical.</span> <span
  m="1579790">We</span> <span m="1579920">know</span> <span
  m="1580180">that</span> <span m="1580290">eventually</span> <span
  m="1580850">one</span> <span m="1581040">of</span> <span
  m="1581080">them</span> <span m="1581220">is</span> <span
  m="1581330">going</span> <span m="1581570">to</span> <span
  m="1582130">take</span> <span m="1582360">over</span> <span
  m="1582550">the</span> <span m="1582650">population,</span> <span
  m="1583210">just</span> <span m="1583450">due to</span> <span
  m="1583510">random</span> <span m="1584570">stochastic</span> <span
  m="1585120">dynamics.</span> <span m="1586040">What</span> <span
  m="1586200">that</span> <span m="1586320">means is</span> <span
  m="1586510">that</span> <span m="1586680">each</span> <span
  m="1586910">individual</span> <span m="1587420">has a</span> <span
  m="1587550">probability</span> <span m="1587980">of 1</span> <span
  m="1588360">over</span> <span m="1588540">N</span> <span m="1589380">of</span>
  <span m="1589480">taking</span> <span m="1589800">over</span> <span
  m="1589950">the</span> <span m="1590040">population.</span></p><p><span
  m="1592760">And</span> <span m="1592960">this</span> <span
  m="1593100">is</span> <span m="1593620">very</span> <span
  m="1594200">important.</span> <span m="1595220">So</span> <span
  m="1596380">each</span> <span m="1596610">individual</span> <span
  m="1600130">has</span> <span m="1600550">a</span> <span m="1600620">1</span>
  <span m="1600900">over</span> <span m="1601040">N</span> <span
  m="1601200">probability</span> <span m="1605524">of</span> <span
  m="1605990">fixing.</span> <span m="1610340">And</span> <span
  m="1610400">that's</span> <span m="1610780">assuming</span> <span
  m="1611390">that</span> <span m="1612300">everybody</span> <span
  m="1612590">in</span> <span m="1612650">the</span> <span
  m="1612710">population</span> <span m="1613150">has the</span> <span
  m="1613230">same</span> <span m="1613620">fitness.</span> <span
  m="1614980">And</span> <span m="1615040">that's</span> <span
  m="1615200">just</span> <span m="1615800">by</span> <span
  m="1615930">symmetry.</span> <span m="1618110">But</span> <span
  m="1618250">then</span> <span m="1618400">of</span> <span
  m="1618480">course,</span> <span m="1618830">you</span> <span
  m="1618930">can</span> <span m="1619030">also say,</span> <span
  m="1619150">well,</span> <span m="1619610">you</span> <span
  m="1619690">know</span> <span m="1620530">if</span> <span
  m="1620690">the</span> <span m="1620770">probability</span> <span
  m="1621260">of</span> <span m="1621330">each</span> <span
  m="1621620">individual is</span> <span m="1622110">1</span> <span
  m="1622270">over</span> <span m="1622440">N,</span> <span
  m="1622870">then</span> <span m="1623270">the</span> <span
  m="1623360">probability</span> <span m="1624530">that</span> <span
  m="1624680">one</span> <span m="1624950">of</span> <span
  m="1625050">these</span> <span m="1625290">i</span> <span
  m="1625600">individuals</span> <span m="1626480">takes</span> <span
  m="1626740">over</span> <span m="1627160">is</span> <span
  m="1627340">going</span> <span m="1627450">to</span> <span
  m="1627510">be</span> <span m="1627880">i</span> <span m="1628280">over
  N.</span></p><p><span m="1631969">AUDIENCE: The</span> <span
  m="1632456">generalization</span> <span m="1632943">[INAUDIBLE]</span> <span
  m="1634404">reproducing</span> <span m="1634891">organisms</span> <span
  m="1635378">is</span> <span m="1635865">that</span> <span
  m="1636352">[INAUDIBLE]</span> <span m="1636839">organisms</span> <span
  m="1637813">every</span> <span m="1638300">individual</span> <span
  m="1638787">is</span> <span m="1639274">probably</span> <span m="1639761">the
  ancestor</span> <span m="1640248">of</span> <span
  m="1640735">[INAUDIBLE].</span> <span m="1641709">Like</span> <span
  m="1642196">ever</span> <span m="1642683">individual</span> <span
  m="1643170">takes</span> <span m="1643657">[INAUDIBLE].</span></p><p><span
  m="1645150">PROFESSOR: OK,</span> <span m="1645430">all</span> <span
  m="1645570">right.</span> <span m="1646230">OK,</span> <span
  m="1646400">now</span> <span m="1646560">you</span> <span
  m="1647410">want</span> <span m="1647580">to</span> <span
  m="1647640">allow</span> <span m="1648070">for</span> <span
  m="1648370">recombination.</span> <span m="1649610">Is</span> <span
  m="1649760">that--</span></p><p><span m="1650550">AUDIENCE: I mean,</span>
  <span m="1651000">yeah.</span></p><p><span m="1652350">PROFESSOR:
  Right,</span> <span m="1652530">OK.</span> <span m="1652690">So</span> <span
  m="1652820">yes,</span> <span m="1653390">there</span> <span
  m="1653570">are</span> <span m="1653630">several</span> <span
  m="1654110">important</span> <span m="1654520">aspects</span> <span
  m="1654920">of</span> <span m="1655000">sex.</span> <span
  m="1656960">But</span> <span m="1657300">one</span> <span
  m="1657450">of</span> <span m="1657490">the</span> <span
  m="1657540">major</span> <span m="1657790">ones</span> <span
  m="1657960">is</span> <span m="1658310">the</span> <span
  m="1658440">recombination.</span> <span m="1659420">And</span> <span
  m="1660060">so</span> <span m="1660130">if</span> <span m="1660220">you</span>
  <span m="1660310">have</span> <span m="1661860">enough</span> <span
  m="1662560">recombination,</span> <span m="1663530">then</span> <span
  m="1663700">everybody</span> <span m="1664100">will</span> <span
  m="1664250">contribute--</span> <span m="1665826">well,</span> <span
  m="1666230">everybody.</span> <span m="1667950">Then</span> <span
  m="1668070">there</span> <span m="1668190">will</span> <span
  m="1668270">be--</span> <span m="1668530">then</span> <span
  m="1669300">many,</span> <span m="1670260">many</span> <span
  m="1670480">individuals</span> <span m="1671100">will</span> <span
  m="1671540">contribute</span> <span m="1672190">to</span> <span
  m="1672680">the</span> <span m="1673660">[? lineage. ?]</span></p><p><span
  m="1673860">What</span> <span m="1674040">you</span> <span
  m="1674150">often</span> <span m="1674440">will</span> <span
  m="1675030">hear</span> <span m="1675400">people</span> <span
  m="1675620">talk</span> <span m="1675870">about</span> <span
  m="1676190">is</span> <span m="1676880">the</span> <span
  m="1676990">ancestral</span> <span m="1677850">Adam</span> <span
  m="1678320">and</span> <span m="1678370">the</span> <span
  m="1678440">ancestral</span> <span m="1679110">Eve.</span> <span
  m="1681120">And</span> <span m="1681270">that--</span> <span
  m="1681500">and</span> <span m="1682410">what</span> <span
  m="1682710">are</span> <span m="1682830">people</span> <span
  m="1683060">referring</span> <span m="1683410">to</span> <span
  m="1683580">about</span> <span m="1683840">that?</span> <span
  m="1690200">Yes,</span> <span m="1690470">in</span> <span
  m="1690610">the</span> <span m="1690680">back.</span></p><p><span
  m="1691130">AUDIENCE: An</span> <span m="1691623">individual</span> <span
  m="1692116">with</span> <span m="1696060">the--</span> <span m="1697046">an
  individual</span> <span m="1697539">that</span> <span
  m="1698032">[INAUDIBLE]</span> <span m="1701976">early on</span> <span
  m="1702962">[INAUDIBLE].</span></p><p><span m="1706440">PROFESSOR: Yes,</span>
  <span m="1706860">right.</span> <span m="1707390">So</span> <span
  m="1707470">there's</span> <span m="1707870">this</span> <span
  m="1708190">idea--</span> <span m="1708770">OK, so</span> <span
  m="1708930">I</span> <span m="1709050">don't</span> <span
  m="1709150">want</span> <span m="1709180">to</span> <span
  m="1709220">get</span> <span m="1709350">too</span> <span
  m="1709480">much</span> <span m="1709680">into</span> <span
  m="1709830">the</span> <span m="1710040">sexual--</span> <span
  m="1711000">sexually</span> <span m="1711340">reproducing</span> <span
  m="1711680">populations</span> <span m="1712120">because</span> <span
  m="1712360">that's</span> <span m="1712980">covered</span> <span
  m="1713290">more</span> <span m="1713700">in</span> <span
  m="1713770">other</span> <span m="1713970">classes.</span> <span
  m="1714590">And</span> <span m="1714740">it's</span> <span
  m="1715130">a</span> <span m="1715940">totally</span> <span
  m="1716320">different</span> <span m="1716770">models</span> <span
  m="1717290">you would</span> <span m="1717430">typically</span> <span
  m="1717770">use.</span></p><p><span m="1718370">But</span> <span
  m="1719630">I</span> <span m="1719850">think</span> <span
  m="1720140">the</span> <span m="1720220">simplest</span> <span
  m="1720620">way</span> <span m="1720730">to</span> <span
  m="1720810">think</span> <span m="1720970">about</span> <span
  m="1721120">some</span> <span m="1721230">of</span> <span
  m="1721270">this</span> <span m="1721410">is</span> <span
  m="1721530">just</span> <span m="1721700">that</span> <span
  m="1724250">there's</span> <span m="1724620">some</span> <span
  m="1724880">part</span> <span m="1725040">the</span> <span
  m="1725110">genome</span> <span m="1725520">that</span> <span
  m="1725740">does</span> <span m="1725920">not</span> <span
  m="1726330">have</span> <span m="1726660">recombination</span> <span
  m="1727640">in</span> <span m="1727720">the</span> <span
  m="1727790">same</span> <span m="1728050">way.</span> <span
  m="1728260">So</span> <span m="1728430">it's</span> <span
  m="1728610">simpler.</span> <span m="1729650">What</span> <span
  m="1729860">part</span> <span m="1730070">of</span> <span
  m="1730170">the</span> <span m="1730280">genome</span> <span
  m="1730720">is</span> <span m="1730890">that</span> <span
  m="1731470">in</span> <span m="1731630">us?</span></p><p><span
  m="1732523">AUDIENCE: Y</span> <span
  m="1732996">chromosome.</span></p><p><span m="1733470">PROFESSOR:
  Right.</span> <span m="1733860">So</span> <span m="1733980">the</span> <span
  m="1734050">Y</span> <span m="1734240">chromosome,</span> <span
  m="1735830">and</span> <span m="1735920">that</span> <span
  m="1736290">means</span> <span m="1736500">that</span> <span
  m="1736570">in</span> <span m="1736640">principle</span> <span
  m="1737080">you</span> <span m="1737170">could</span> <span
  m="1737320">track</span> <span m="1737610">the</span> <span
  m="1737670">dynamics</span> <span m="1738920">along</span> <span
  m="1739840">the</span> <span m="1739910">male</span> <span
  m="1740230">lineages.</span> <span m="1742340">So</span> <span
  m="1742440">there</span> <span m="1742540">are</span> <span
  m="1742560">all</span> <span m="1742700">these</span> <span
  m="1742880">studies,</span> <span m="1743480">whatever,</span> <span
  m="1743700">Genghis</span> <span m="1743910">Khan,</span> <span
  m="1744810">maybe</span> <span m="1745920">lots</span> <span
  m="1746230">of</span> <span m="1746390">us</span> <span m="1746680">are</span>
  <span m="1747210">descendants</span> <span m="1747990">of.</span> <span
  m="1748240">Right,</span> <span m="1748440">because</span> <span
  m="1748640">he</span> <span m="1748760">had</span> <span
  m="1749670">lots</span> <span m="1749910">of</span> <span
  m="1750000">wives,</span> <span m="1750540">or</span> <span
  m="1750610">something</span> <span m="1750850">like</span> <span
  m="1751010">that.</span> <span m="1751550">So</span> <span
  m="1752140">his</span> <span m="1752300">Y</span> <span
  m="1752510">chromosome</span> <span m="1753140">supposedly</span> <span
  m="1754220">occupies</span> <span m="1754810">a</span> <span
  m="1754860">non</span> <span m="1755340">negligible</span> <span
  m="1755820">fraction</span> <span m="1757090">of</span> <span
  m="1757190">the</span> <span m="1757290">population.</span></p><p><span
  m="1758490">OK,</span> <span m="1758830">so</span> <span
  m="1759230">but</span> <span m="1759390">then</span> <span
  m="1759500">what</span> <span m="1759650">about--</span> <span
  m="1760230">what's</span> <span m="1760420">the</span> <span
  m="1760550">other,</span> <span m="1761480">yeah,</span> <span
  m="1761930">so</span> <span m="1762100">on</span> <span m="1762450">the</span>
  <span m="1762510">female</span> <span m="1762830">side?</span> <span
  m="1763340">What</span> <span m="1763690">would</span> <span
  m="1763890">be</span> <span m="1763970">the</span> <span
  m="1764070">equivalent?</span></p><p><span m="1764906">AUDIENCE:
  Mitochondria.</span></p><p><span m="1765600">PROFESSOR: Mitochondria.</span>
  <span m="1766890">Right.</span> <span m="1767190">So</span> <span
  m="1767320">in</span> <span m="1767380">principle,</span> <span
  m="1767890">you</span> <span m="1767940">can--</span> <span
  m="1768720">so</span> <span m="1768850">I</span> <span
  m="1769130">think</span> <span m="1769270">for</span> <span
  m="1769390">an</span> <span m="1769470">awful</span> <span
  m="1769780">lot</span> <span m="1769920">of</span> <span
  m="1769960">these</span> <span m="1770110">studies</span> <span
  m="1770830">you</span> <span m="1771010">can--</span> <span
  m="1772140">the</span> <span m="1772840">genetics</span> <span
  m="1773160">are</span> <span m="1773200">much</span> <span
  m="1773360">simpler</span> <span m="1773810">for</span> <span
  m="1776370">those</span> <span m="1776590">two</span> <span
  m="1776710">lineages.</span> <span m="1777290">Because</span> <span
  m="1777620">you</span> <span m="1777710">don't</span> <span
  m="1777840">have</span> <span m="1777970">the</span> <span
  m="1778010">recombination.</span></p><p><span m="1779500">AUDIENCE: So</span>
  <span m="1779985">why is</span> <span m="1780470">the</span> <span
  m="1780955">mitochondria--</span> <span m="1781925">I mean,</span> <span
  m="1782410">you say</span> <span m="1782895">that it's</span> <span
  m="1784350">the most</span> <span m="1784610">obvious</span> <span
  m="1784870">thing.</span></p><p><span m="1785310">PROFESSOR: OK,</span> <span
  m="1785620">yeah--</span></p><p><span m="1785900">AUDIENCE: I've</span> <span
  m="1786314">never heard</span> <span m="1786728">that.</span></p><p><span
  m="1787970">PROFESSOR: Yeah,</span> <span m="1788380">OK,</span> <span
  m="1788670">OK,</span> <span m="1788980">right.</span> <span
  m="1789210">So--</span></p><p><span m="1789525">AUDIENCE: I mean, we</span>
  <span m="1789840">don't have to--</span></p><p><span m="1790130">PROFESSOR:
  OK,</span> <span m="1790320">well,</span> <span m="1790480">you're
  right.</span> <span m="1790920">So</span> <span m="1791350">basically</span>
  <span m="1791690">the</span> <span m="1792040">situation</span> <span
  m="1792510">is</span> <span m="1792790">that</span> <span
  m="1794970">we</span> <span m="1795050">have</span> <span
  m="1795130">cells,</span> <span m="1795880">and</span> <span
  m="1796320">most</span> <span m="1797800">of</span> <span
  m="1797850">the</span> <span m="1797910">genome</span> <span
  m="1798420">is</span> <span m="1798540">in the</span> <span
  m="1798590">nucleus.</span> <span m="1800670">But</span> <span
  m="1800870">then,</span> <span m="1801400">but</span> <span
  m="1801690">the</span> <span m="1801760">mitochondria</span> <span
  m="1802280">actually</span> <span m="1802510">have</span> <span
  m="1802760">their</span> <span m="1802950">own</span> <span
  m="1803540">mitochondrial</span> <span m="1804190">DNA.</span></p><p><span
  m="1806350">And</span> <span m="1806440">then</span> <span
  m="1807380">the</span> <span m="1808270">issue is,</span> <span
  m="1808600">OK,</span> <span m="1808670">well,</span> <span
  m="1808760">what</span> <span m="1809000">happens?</span> <span
  m="1809700">You</span> <span m="1809790">know,</span> <span
  m="1810290">here's</span> <span m="1810510">the</span> <span
  m="1810590">birds</span> <span m="1810870">and the</span> <span
  m="1810990">bees</span> <span m="1811350">talk</span> <span
  m="1811660">for</span> <span m="1811750">you</span> <span
  m="1811830">guys,</span> <span m="1812150">all</span> <span
  m="1812280">right?</span> <span m="1815640">Right,</span> <span
  m="1815860">so</span> <span m="1815940">the</span> <span
  m="1816010">sperm</span> <span m="1816460">comes,</span> <span
  m="1816750">fertilizes</span> <span m="1817530">the</span> <span
  m="1817710">egg.</span> <span m="1818510">And</span> <span
  m="1820900">the</span> <span m="1821030">vast</span> <span
  m="1821530">majority</span> <span m="1822670">of</span> <span
  m="1822970">the</span> <span m="1823250">mitochondria</span> <span
  m="1825570">come</span> <span m="1825890">from,</span> <span
  m="1826190">or</span> <span m="1826300">were</span> <span
  m="1826520">in</span> <span m="1826620">the</span> <span
  m="1826740">egg,</span> <span m="1827950">as</span> <span
  m="1828130">compared</span> <span m="1828500">to</span> <span
  m="1828950">the</span> <span m="1829000">mitochondria</span> <span
  m="1829480">from</span> <span m="1829690">the</span> <span
  m="1829760">sperm.</span></p><p><span m="1830000">And I</span> <span
  m="1830100">don't--</span> <span m="1830570">does</span> <span
  m="1830720">anybody</span> <span m="1830960">know</span> <span
  m="1832070">if</span> <span m="1832800">any</span> <span m="1833050">of</span>
  <span m="1833110">the</span> <span m="1833180">sperm</span> <span
  m="1833640">mitochondria</span> <span m="1833980">actually</span> <span
  m="1834760">contribute?</span> <span m="1835770">Are</span> <span
  m="1835870">they</span> <span m="1836020">selectively--</span> <span
  m="1836900">does</span> <span m="1836990">something</span> <span
  m="1837560">happen</span> <span m="1837820">to</span> <span
  m="1837880">them?</span></p><p><span m="1838645">AUDIENCE: They don't</span>
  <span m="1839120">have any.</span></p><p><span m="1840070">PROFESSOR: Oh, they
  just</span> <span m="1840300">don't</span> <span m="1840440">have</span> <span
  m="1840620">any?</span> <span m="1841000">All</span> <span
  m="1841240">right,</span> <span m="1841440">whoo.</span> <span
  m="1842120">All</span> <span m="1842220">right,</span> <span
  m="1842490">well,</span> <span m="1843420">OK.</span> <span
  m="1847160">OK,</span> <span m="1847340">well</span> <span
  m="1847460">that</span> <span m="1847850">solves</span> <span
  m="1848040">that</span> <span m="1848210">problem.</span> <span
  m="1848630">OK.</span></p><p><span m="1849536">AUDIENCE:
  Wait.</span></p><p><span m="1851820">PROFESSOR: Is that</span> <span
  m="1851970">not your--</span> <span m="1852700">all</span> <span
  m="1852860">right,</span> <span m="1853190">well--</span> <span
  m="1855360">all</span> <span m="1855450">right,</span> <span
  m="1855940">this</span> <span m="1856090">is</span> <span
  m="1856210">the</span> <span m="1856290">kind</span> <span
  m="1856460">of</span> <span m="1856530">thing</span> <span
  m="1856840">that</span> <span m="1857340">somebody</span> <span
  m="1857830">could</span> <span m="1857960">maybe</span> <span
  m="1858230">Wikipedia</span> <span m="1859030">this</span> <span
  m="1859310">while</span> <span m="1859610">we're</span> <span
  m="1861120">going.</span> <span m="1864240">But</span> <span
  m="1864550">that's</span> <span m="1865080">the</span> <span
  m="1865140">basic</span> <span m="1865330">idea,</span> <span
  m="1865720">though.</span></p><p><span m="1870090">All</span> <span
  m="1870210">right, does</span> <span m="1870380">anybody</span> <span
  m="1870590">have</span> <span m="1870680">any</span> <span
  m="1870760">questions</span> <span m="1871320">about</span> <span
  m="1872330">these</span> <span m="1872580">two</span> <span
  m="1872730">statements?</span> <span m="1873120">Probability</span> <span
  m="1873600">that</span> <span m="1874390">A</span> <span
  m="1874640">fixes,</span> <span m="1875200">probability</span> <span
  m="1875660">that</span> <span m="1875910">B</span> <span
  m="1876160">fixes?</span> <span m="1879690">Incidentally,</span> <span
  m="1880320">you</span> <span m="1880470">should</span> <span
  m="1880730">be</span> <span m="1880830">able</span> <span
  m="1881070">to</span> <span m="1881200">draw--</span> <span
  m="1882035">these</span> <span m="1882390">are</span> <span
  m="1882490">random.</span> <span m="1883830">From</span> <span
  m="1884160">this</span> <span m="1884740">point</span> <span
  m="1885290">moving</span> <span m="1885630">forward,</span> <span
  m="1886570">am</span> <span m="1886640">I</span> <span m="1886760">more</span>
  <span m="1887050">likely--</span> <span m="1888060">OK,</span> <span
  m="1888250">so</span> <span m="1889430">given</span> <span
  m="1889730">where</span> <span m="1889930">i</span> <span
  m="1890140">is</span> <span m="1890310">here,</span> <span
  m="1891060">am</span> <span m="1891210">I</span> <span m="1891250">more</span>
  <span m="1891420">likely</span> <span m="1891710">to</span> <span
  m="1891770">fix</span> <span m="1892000">B</span> <span m="1892050">or</span>
  <span m="1892500">A?</span> <span m="1892950">Ready,</span> <span
  m="1893400">three,</span> <span m="1893750">two,</span> <span
  m="1893980">one.</span></p><p><span m="1894700">AUDIENCE:
  B.</span></p><p><span m="1894990">PROFESSOR: B.</span> <span
  m="1895780">Does</span> <span m="1895940">that</span> <span
  m="1896170">mean</span> <span m="1896430">that</span> <span
  m="1896590">my</span> <span m="1896750">first</span> <span
  m="1897170">step</span> <span m="1897440">is</span> <span
  m="1897560">more</span> <span m="1897730">likely</span> <span
  m="1898020">to</span> <span m="1898070">be</span> <span m="1898180">in</span>
  <span m="1898260">the</span> <span m="1898320">direction</span> <span
  m="1898620">of</span> <span m="1898720">B</span> <span m="1899080">than
  in</span> <span m="1899360">A?</span> <span m="1899990">Yes</span> <span
  m="1900190">or</span> <span m="1900230">no.</span> <span
  m="1900420">Ready,</span> <span m="1900660">three,</span> <span
  m="1901070">two,</span> <span m="1901360">one.</span></p><p><span
  m="1901820">AUDIENCE: No.</span></p><p><span m="1902260">PROFESSOR: No.</span>
  <span m="1903070">OK,</span> <span m="1903460">so</span> <span
  m="1903570">this</span> <span m="1903680">is</span> <span m="1903720">a</span>
  <span m="1903820">random</span> <span m="1904130">lock.</span> <span
  m="1905160">All</span> <span m="1905250">right,</span> <span
  m="1905620">it</span> <span m="1905760">doesn't</span> <span
  m="1906010">always</span> <span m="1906310">take</span> <span
  m="1906500">steps,</span> <span m="1907060">but</span> <span
  m="1907230">sometimes</span> <span m="1907580">it</span> <span
  m="1907650">goes</span> <span m="1907830">up</span> <span
  m="1908370">and</span> <span m="1908490">then</span> <span
  m="1908720">down.</span> <span m="1909660">All</span> <span
  m="1909940">right,</span> <span m="1910170">so</span> <span
  m="1910300">it's</span> <span m="1910470">going</span> <span
  m="1910580">to-</span> <span m="1911030">now</span> <span
  m="1911270">I'm--</span> <span m="1912312">you</span> <span
  m="1912748">know,</span> <span m="1913184">I</span> <span
  m="1913620">understand</span> <span m="1914000">it's</span> <span
  m="1914090">not</span> <span m="1914280">to--</span> <span
  m="1914660">you</span> <span m="1914710">know,</span> <span
  m="1914820">whatever.</span> <span m="1915480">OK.</span></p><p><span
  m="1921350">But</span> <span m="1921480">the</span> <span
  m="1921700">idea</span> <span m="1921970">is</span> <span
  m="1922050">that</span> <span m="1923020">once</span> <span
  m="1923290">it</span> <span m="1923390">hits</span> <span m="1924510">0</span>
  <span m="1924730">or</span> <span m="1924920">1</span> <span
  m="1925190">here</span> <span m="1925400">in</span> <span
  m="1925460">terms</span> <span m="1925660">of</span> <span
  m="1925700">the</span> <span m="1925760">fraction,</span> <span
  m="1926580">then</span> <span m="1926650">you</span> <span
  m="1926740">stay</span> <span m="1926960">where</span> <span
  m="1927090">you</span> <span m="1927220">are.</span> <span
  m="1927430">These</span> <span m="1927590">are</span> <span
  m="1927700">absorbing</span> <span m="1928250">boundaries.</span> <span
  m="1934560">But</span> <span m="1934770">every</span> <span
  m="1934930">now</span> <span m="1935080">and</span> <span
  m="1935160">then</span> <span m="1936200">it's</span> <span m="1936410">going
  to</span> <span m="1936810">hit</span> <span
  m="1937283">there.</span></p><p><span m="1943250">Before</span> <span
  m="1943610">we</span> <span m="1944210">get</span> <span
  m="1944390">going</span> <span m="1944730">too</span> <span
  m="1945040">much</span> <span m="1945300">more</span> <span m="1945470">in
  this,</span> <span m="1945610">I</span> <span m="1945710">want</span> <span
  m="1945900">to</span> <span m="1946240">mention</span> <span
  m="1946590">something</span> <span m="1947060">about</span> <span
  m="1947470">time</span> <span m="1948030">in</span> <span
  m="1948090">this</span> <span m="1948230">model.</span> <span
  m="1948560">Because</span> <span m="1948760">time</span> <span
  m="1949130">is</span> <span m="1949210">a</span> <span
  m="1949270">little</span> <span m="1949550">bit</span> <span
  m="1949660">of</span> <span m="1949750">a</span> <span
  m="1949980">funny</span> <span m="1951900">entity</span> <span
  m="1952260">here.</span> <span m="1955400">So</span> <span
  m="1955540">here's</span> <span m="1955740">the</span> <span
  m="1955760">question.</span> <span m="1956040">How</span> <span
  m="1956350">long--</span> <span m="1958570">and</span> <span
  m="1958820">long</span> <span m="1959210">is</span> <span
  m="1959370">funny--</span> <span m="1959650">but</span> <span
  m="1959770">how</span> <span m="1959930">long</span> <span
  m="1961020">does</span> <span m="1962160">one--</span> <span m="1963260">I
  don't</span> <span m="1963400">know.</span> <span m="1963740">Do</span> <span
  m="1963850">we</span> <span m="1963920">want</span> <span
  m="1964040">to</span> <span m="1964080">call</span> <span
  m="1964160">this</span> <span m="1964300">an</span> <span
  m="1964390">iteration</span> <span m="1965040">or a</span> <span
  m="1965210">cycle?</span> <span m="1965882">On</span> <span
  m="1966220">iteration</span> <span m="1966670">of</span> <span
  m="1966740">the</span> <span m="1966790">model?</span></p><p><span
  m="1978130">And</span> <span m="1978310">what</span> <span
  m="1978420">I</span> <span m="1978450">mean</span> <span m="1978640">by</span>
  <span m="1978730">that</span> <span m="1978940">is</span> <span
  m="1979120">that</span> <span m="1979660">in</span> <span
  m="1980180">units</span> <span m="1980480">of</span> <span
  m="1980580">something</span> <span m="1980970">that</span> <span
  m="1981060">would</span> <span m="1981140">be</span> <span
  m="1981230">like</span> <span m="1981370">real</span> <span
  m="1981740">time,</span> <span m="1986220">you know</span> <span
  m="1986320">what I</span> <span m="1986620">mean?</span> <span
  m="1992670">Is</span> <span m="1992870">it</span> <span m="1993200">a</span>
  <span m="1993580">second,</span> <span m="1997360">a</span> <span
  m="1997860">generation</span> <span m="1998740">time--</span> <span
  m="2001260">so this</span> <span m="2001320">would be</span> <span
  m="2001410">like</span> <span m="2001560">a</span> <span
  m="2001620">cell</span> <span m="2001890">generation</span> <span
  m="2002340">time.</span> <span m="2022360">Or</span> <span
  m="2022980">don't</span> <span m="2023300">know,</span> <span
  m="2023840">something.</span></p><p><span m="2024360">OK,</span> <span
  m="2025280">I'll give</span> <span m="2025620">you</span> <span
  m="2026100">15</span> <span m="2026540">seconds.</span> <span
  m="2026900">Can</span> <span m="2027010">you</span> <span
  m="2027130">guys</span> <span m="2027310">all</span> <span
  m="2027440">read</span> <span m="2027680">this?</span> <span
  m="2028950">Seconds,</span> <span m="2030270">generation</span> <span
  m="2030650">time,</span> <span m="2031210">N</span> <span
  m="2031450">times</span> <span m="2031670">generation</span> <span
  m="2032060">time,</span> <span m="2032340">or</span> <span
  m="2032490">1</span> <span m="2032690">over</span> <span m="2032880">N</span>
  <span m="2033070">times</span> <span m="2033380">generation</span> <span
  m="2033800">time.</span></p><p><span m="2035716">AUDIENCE: What do</span>
  <span m="2036195">we</span> <span m="2036674">want</span> <span
  m="2037153">[INAUDIBLE]?</span></p><p><span m="2038590">PROFESSOR: Yeah,
  well</span> <span m="2038830">let's</span> <span m="2039160">say</span> <span
  m="2039240">that</span> <span m="2039600">I--</span> <span
  m="2039910">let's</span> <span m="2040100">just</span> <span
  m="2040200">imagine</span> <span m="2040460">that</span> <span
  m="2040590">I</span> <span m="2040650">was</span> <span
  m="2040800">using</span> <span m="2041160">this</span> <span
  m="2041410">to</span> <span m="2041540">model</span> <span
  m="2042190">the</span> <span m="2042270">dynamics</span> <span
  m="2042635">of</span> <span m="2045390">the</span> <span
  m="2045600">neutral</span> <span m="2046150">drift</span> <span
  m="2046410">dynamics</span> <span m="2046940">of</span> <span
  m="2047160">some</span> <span m="2048719">bacteria</span> <span
  m="2050040">in</span> <span m="2050230">my</span> <span
  m="2050429">test</span> <span m="2050770">tube</span> <span
  m="2051170">in</span> <span m="2051250">the</span> <span
  m="2051330">lab.</span> <span m="2052020">Right,</span> <span
  m="2052239">so</span> <span m="2052370">let's</span> <span m="2052659">say I
  have</span> <span m="2052800">one of these</span> <span
  m="2052989">tubridostats.</span> <span m="2054300">So</span> <span
  m="2054460">I--</span> <span m="2055070">question</span> <span
  m="2055440">is,</span> <span m="2055690">how</span> <span
  m="2055840">long</span> <span m="2056090">does</span> <span
  m="2056239">this</span> <span m="2056429">last</span> <span
  m="2056969">in</span> <span m="2057540">the</span> <span
  m="2057850">units</span> <span m="2058199">of--</span> <span
  m="2059690">right.</span> <span m="2060570">Or</span> <span
  m="2060719">equivalent,</span> <span m="2061060">how</span> <span
  m="2061199">many</span> <span m="2061440">iterations</span> <span
  m="2061704">do</span> <span m="2061969">I</span> <span m="2062050">have</span>
  <span m="2062139">to</span> <span m="2062219">go</span> <span
  m="2063040">to</span> <span m="2063179">get</span> <span
  m="2063469">through</span> <span m="2065570">some</span> <span
  m="2065969">period</span> <span m="2066280">of</span> <span
  m="2066350">time</span> <span m="2066600">in the</span> <span
  m="2066690">lab.</span></p><p><span m="2067420">So I</span> <span
  m="2067540">grow</span> <span m="2067739">my</span> <span
  m="2067870">bacteria</span> <span m="2068540">in</span> <span
  m="2068850">my</span> <span m="2069070">turbidostat,</span> <span
  m="2069810">say.</span> <span m="2070989">And I</span> <span
  m="2071100">do</span> <span m="2071290">it</span> <span m="2071449">for</span>
  <span m="2072610">100</span> <span m="2072989">hours.</span> <span
  m="2074469">Now</span> <span m="2075040">your</span> <span
  m="2075989">advisor</span> <span m="2076400">says,</span> <span
  m="2076540">OK,</span> <span m="2076780">go</span> <span m="2077199">do</span>
  <span m="2077330">a</span> <span m="2077429">simulation,</span> <span
  m="2077940">so</span> <span m="2078050">you</span> <span
  m="2078150">get</span> <span m="2078330">something.</span> <span
  m="2079610">And</span> <span m="2079719">your</span> <span
  m="2079840">advisor</span> <span m="2080080">goes,</span> <span
  m="2080420">all right,</span> <span m="2080560">do</span> <span
  m="2080739">a</span> <span m="2080800">simulation,</span> <span
  m="2081260">use</span> <span m="2081420">the</span> <span
  m="2081500">Moran</span> <span m="2081850">process.</span> <span
  m="2084150">You</span> <span m="2084290">guys</span> <span
  m="2084449">are</span> <span m="2084520">going to</span> <span m="2084880">be
  doing this,</span> <span m="2085090">so</span> <span m="2085190">this</span>
  <span m="2085350">is</span> <span m="2085449">not</span> <span
  m="2086060">entirely</span> <span m="2086540">hypothetical.</span></p><p><span
  m="2087600">But</span> <span m="2088370">right,</span> <span
  m="2088530">so</span> <span m="2089370">your</span> <span
  m="2089489">advisor</span> <span m="2089830">says,</span> <span
  m="2092370">go</span> <span m="2092560">simulate</span> <span
  m="2093090">this</span> <span m="2093260">process.</span> <span
  m="2094070">Right?</span> <span m="2094230">So</span> <span
  m="2094360">the</span> <span m="2094469">question</span> <span
  m="2094820">is,</span> <span m="2094949">how</span> <span
  m="2095239">many</span> <span m="2095500">iterations</span> <span
  m="2096300">do you</span> <span m="2096639">have</span> <span
  m="2096760">to</span> <span m="2096860">do</span> <span m="2097050">to</span>
  <span m="2097120">make</span> <span m="2097270">it</span> <span
  m="2097330">equivalent</span> <span m="2097780">to</span> <span
  m="2097840">that</span> <span m="2097990">100</span> <span
  m="2098300">hours</span> <span m="2099320">that</span> <span
  m="2099540">you</span> <span m="2099690">did</span> <span
  m="2099910">in</span> <span m="2099970">the</span> <span
  m="2100050">lab?</span> <span m="2100680">How</span> <span
  m="2101330">do</span> <span m="2101390">you--</span> <span
  m="2102620">how</span> <span m="2102730">do</span> <span
  m="2102790">you</span> <span m="2102840">make</span> <span
  m="2102990">a</span> <span m="2103040">connection</span> <span
  m="2103500">between</span> <span m="2104240">a</span> <span
  m="2104320">model,</span> <span m="2105070">well,</span> <span
  m="2105330">this</span> <span m="2105470">model,</span> <span
  m="2106080">and</span> <span m="2106740">something</span> <span
  m="2107170">that</span> <span m="2107550">actually</span> <span
  m="2107880">happens</span> <span m="2108220">in</span> <span
  m="2108540">your</span> <span m="2108640">laboratory?</span></p><p><span
  m="2115470">Ready?</span> <span m="2117110">Three,</span> <span
  m="2118180">two,</span> <span m="2118960">one.</span> <span
  m="2121670">OK,</span> <span m="2122260">all</span> <span
  m="2122370">right,</span> <span m="2122570">so we</span> <span
  m="2122670">got</span> <span m="2122830">a</span> <span
  m="2122870">majority</span> <span m="2123145">of the</span> <span
  m="2123420">group</span> <span m="2123610">agreeing</span> <span
  m="2123880">that it's</span> <span m="2124040">going</span> <span
  m="2124120">to</span> <span m="2124160">be</span> <span m="2124280">D.</span>
  <span m="2125100">Can</span> <span m="2125230">somebody</span> <span
  m="2125420">just</span> <span m="2125560">say</span> <span
  m="2125750">why</span> <span m="2125920">this</span> <span
  m="2126080">is?</span></p><p><span m="2128466">AUDIENCE: [INAUDIBLE]</span>
  <span m="2129454">one cell</span> <span
  m="2130442">[INAUDIBLE].</span></p><p><span m="2134030">PROFESSOR:
  Right,</span> <span m="2134260">so</span> <span m="2134400">each</span> <span
  m="2135220">iteration,</span> <span m="2135810">there's</span> <span
  m="2135980">only</span> <span m="2136310">one</span> <span
  m="2136760">cell</span> <span m="2137440">out</span> <span
  m="2137600">of</span> <span m="2137770">N</span> <span m="2138682">that</span>
  <span m="2139140">actually</span> <span m="2139460">divide,</span> <span
  m="2139910">right?</span> <span m="2141130">And</span> <span
  m="2141280">that</span> <span m="2141430">means</span> <span
  m="2141650">that</span> <span m="2141820">if</span> <span
  m="2141910">you</span> <span m="2142040">want,</span> <span
  m="2142280">like</span> <span m="2142460">for</span> <span
  m="2142540">example,</span> <span m="2142780">everybody</span> <span
  m="2143330">to</span> <span m="2143410">have</span> <span
  m="2143540">had</span> <span m="2143770">a</span> <span
  m="2143830">chance,</span> <span m="2144250">roughly,</span> <span
  m="2144505">to</span> <span m="2144760">divide,</span> <span
  m="2145070">you</span> <span m="2145130">need</span> <span
  m="2145270">to</span> <span m="2145320">go</span> <span m="2145510">N</span>
  <span m="2145810">iterations.</span> <span m="2147580">And</span> <span
  m="2148370">it</span> <span m="2148570">also</span> <span
  m="2148770">makes</span> <span m="2148970">sense,</span> <span
  m="2149400">if</span> <span m="2149460">you</span> <span
  m="2149940">ask--</span> <span m="2150770">let's</span> <span
  m="2150930">imagine</span> <span m="2151230">you</span> <span
  m="2151330">have</span> <span m="2152700">a</span> <span
  m="2152780">test</span> <span m="2153040">tube</span> <span
  m="2153290">with</span> <span m="2155450">a</span> <span
  m="2155550">million</span> <span m="2155910">bacteria.</span> <span
  m="2157200">Now</span> <span m="2157370">it's</span> <span
  m="2157470">going</span> <span m="2157550">to</span> <span
  m="2157600">take</span> <span m="2157770">some</span> <span
  m="2158040">time</span> <span m="2158370">before</span> <span
  m="2159020">one</span> <span m="2159280">of</span> <span
  m="2159340">them</span> <span m="2159440">divides.</span> <span
  m="2160710">Now</span> <span m="2160820">the</span> <span
  m="2160880">question</span> <span m="2161170">is,</span> <span
  m="2161610">if</span> <span m="2161790">you</span> <span
  m="2161920">had</span> <span m="2162850">10</span> <span
  m="2163180">million</span> <span m="2163610">bacteria</span> <span
  m="2164180">in</span> <span m="2164250">your</span> <span
  m="2164360">test</span> <span m="2164610">tube,</span> <span
  m="2164700">you</span> <span m="2164930">have</span> <span
  m="2165200">to</span> <span m="2165290">wait</span> <span
  m="2165520">1/10</span> <span m="2166070">as</span> <span
  m="2166180">long</span> <span m="2167150">before</span> <span
  m="2167420">the</span> <span m="2167500">first</span> <span
  m="2167750">one</span> <span m="2167890">divides.</span> <span
  m="2170340">So</span> <span m="2170490">the</span> <span
  m="2170830">amount</span> <span m="2171030">of</span> <span
  m="2171320">real</span> <span m="2171680">time</span> <span m="2172010">that
  elapses</span> <span m="2172550">in</span> <span m="2172650">each</span> <span
  m="2172830">one</span> <span m="2172950">of</span> <span
  m="2172990">these</span> <span m="2173120">iterations</span> <span
  m="2173650">goes</span> <span m="2173860">as</span> <span m="2173950">1</span>
  <span m="2174230">over</span> <span m="2174500">N,</span> <span
  m="2175280">where</span> <span m="2175440">N</span> <span
  m="2175610">is</span> <span m="2175730">the</span> <span
  m="2176130">population</span> <span m="2176640">size.</span> <span
  m="2179300">So</span> <span m="2179560">I</span> <span m="2179660">got</span>
  <span m="2179910">some</span> <span m="2180580">unhappy</span> <span
  m="2181100">looks,</span> <span m="2181500">so</span> <span
  m="2181680">that</span> <span m="2181790">means</span> <span
  m="2181970">that</span> <span m="2182110">I</span> <span
  m="2182240">expect</span> <span m="2182590">an</span> <span
  m="2182710">unhappy</span> <span m="2183120">question.</span> <span
  m="2184980">Maybe.</span> <span m="2190420">OK,</span> <span
  m="2190680">well,</span> <span m="2191170">if</span> <span
  m="2191230">you</span> <span m="2191310">don't</span> <span m="2191450">ask
  the</span> <span m="2191650">question,</span> <span m="2192040">then</span>
  <span m="2192420">in</span> <span m="2192480">the</span> <span
  m="2192560">teaching</span> <span m="2192840">evaluations</span> <span
  m="2193450">you're</span> <span m="2193510">not</span> <span
  m="2193710">allowed</span> <span m="2193950">to</span> <span
  m="2194040">write</span> <span m="2194390">that</span> <span
  m="2194500">you</span> <span m="2194590">did</span> <span
  m="2194780">not</span> <span m="2195030">like</span> <span
  m="2195330">the</span> <span m="2195420">explanation</span> <span
  m="2196130">of</span> <span m="2196240">time</span> <span
  m="2197390">in</span> <span m="2197470">the</span> <span
  m="2197540">Moran</span> <span m="2197940">process.</span></p><p><span
  m="2199716">AUDIENCE: [INAUDIBLE]</span></p><p><span
  m="2200632">[LAUGHTER]</span></p><p><span m="2202900">PROFESSOR: Well,</span>
  <span m="2203210">that</span> <span m="2203440">worked.</span> <span
  m="2203810">A</span> <span m="2204180">little</span> <span
  m="2204410">bit</span> <span m="2204550">too</span> <span
  m="2204860">well.</span></p><p><span m="2206339">AUDIENCE: [INAUDIBLE]</span>
  <span m="2206832">question,</span> <span m="2207325">just a</span> <span
  m="2207818">clarification.</span></p><p><span m="2208311">PROFESSOR:
  Yeah.</span></p><p><span m="2209297">AUDIENCE: So</span> <span
  m="2210283">an</span> <span m="2210776">iteration is</span> <span
  m="2211269">when one</span> <span m="2212748">cell</span> <span m="2213241">or
  thing</span> <span m="2213734">increases?</span></p><p><span
  m="2214730">PROFESSOR: Right.</span> <span m="2215140">OK,</span> <span
  m="2215310">an</span> <span m="2215410">iteration</span> <span
  m="2215850">in</span> <span m="2215900">this</span> <span
  m="2216030">model</span> <span m="2216420">is</span> <span
  m="2217070">both</span> <span m="2217320">of</span> <span
  m="2217380">these</span> <span m="2217510">things.</span> <span
  m="2217880">So</span> <span m="2217960">it's</span> <span m="2218100">a</span>
  <span m="2218230">birth,</span> <span m="2218890">and</span> <span
  m="2219225">a</span> <span m="2219560">death,</span> <span m="2219820">or
  a</span> <span m="2220060">replacement.</span> <span m="2221470">So</span>
  <span m="2221710">it's one</span> <span m="2222140">duration</span> <span
  m="2222440">here,</span> <span m="2222740">another--</span> <span
  m="2223120">so</span> <span m="2223430">each</span> <span
  m="2223610">iteration</span> <span m="2223950">involves</span> <span
  m="2224210">one</span> <span m="2224390">birth</span> <span
  m="2224580">and</span> <span m="2224660">one</span> <span
  m="2224790">replacement.</span> <span m="2227580">Yeah.</span></p><p><span
  m="2228066">AUDIENCE: What is one</span> <span m="2228552">generation</span>
  <span m="2229524">time?</span> <span m="2230010">Is that</span> <span
  m="2230496">when the</span> <span m="2230982">population</span> <span
  m="2231468">[INAUDIBLE]?</span></p><p><span m="2232450">PROFESSOR:
  Right,</span> <span m="2232630">so</span> <span m="2232700">the</span> <span
  m="2232760">generation</span> <span m="2233220">time</span> <span
  m="2233540">is</span> <span m="2235120">the</span> <span
  m="2235560">typical</span> <span m="2235960">time</span> <span
  m="2236300">that it</span> <span m="2236410">takes</span> <span
  m="2236670">for</span> <span m="2236800">one</span> <span
  m="2236950">of</span> <span m="2236990">these</span> <span
  m="2237100">individuals</span> <span m="2237640">to</span> <span
  m="2237730">give</span> <span m="2237990">birth</span> <span
  m="2238330">to</span> <span m="2238430">another</span> <span
  m="2238690">individual.</span> <span m="2239470">So</span> <span
  m="2239680">in</span> <span m="2239750">the</span> <span
  m="2239820">case</span> <span m="2240110">of</span> <span
  m="2240360">the</span> <span m="2240450">cells,</span> <span
  m="2240980">it</span> <span m="2241050">might</span> <span
  m="2241290">be</span> <span m="2241550">half an</span> <span
  m="2241900">hour.</span> <span m="2247830">I'm</span> <span
  m="2248090">going</span> <span m="2248170">to</span> <span
  m="2248260">try</span> <span m="2248480">to</span> <span
  m="2248570">leave</span> <span m="2248780">this</span> <span
  m="2248950">up</span> <span m="2249180">just</span> <span
  m="2249340">so</span> <span m="2249470">that</span> <span
  m="2249690">you</span> <span m="2249780">guys</span> <span m="2250140">can
  continue</span> <span m="2250610">to look a</span> <span
  m="2250870">bit.</span></p><p><span m="2264980">So</span> <span
  m="2265130">I</span> <span m="2265200">want</span> <span m="2265470">to</span>
  <span m="2265510">say</span> <span m="2265670">just</span> <span
  m="2265980">something</span> <span m="2266440">about</span> <span
  m="2266600">this</span> <span m="2266710">idea</span> <span
  m="2266900">of</span> <span m="2266960">a</span> <span
  m="2267000">molecular</span> <span m="2267520">clock</span> <span
  m="2268490">while</span> <span m="2268810">we're</span> <span
  m="2270040">here.</span> <span m="2287360">All</span> <span
  m="2287470">right,</span> <span m="2287860">so</span> <span
  m="2288010">now</span> <span m="2288210">that we've</span> <span
  m="2288320">said</span> <span m="2288480">something</span> <span
  m="2288660">about</span> <span m="2288930">how</span> <span
  m="2289060">much</span> <span m="2289270">time</span> <span
  m="2289560">is</span> <span m="2289640">actually</span> <span
  m="2289850">elapsing</span> <span m="2290300">here,</span> <span
  m="2291880">we</span> <span m="2291990">can</span> <span
  m="2292090">think</span> <span m="2292260">a</span> <span
  m="2292320">little</span> <span m="2292440">bit</span> <span
  m="2292560">about</span> <span m="2293040">the</span> <span
  m="2293580">rate--</span> <span m="2294450">now</span> <span
  m="2294600">we</span> <span m="2295140">want</span> <span
  m="2295280">to</span> <span m="2295320">allow</span> <span
  m="2295700">mutations.</span> <span m="2298110">So</span> <span
  m="2298260">let's</span> <span m="2298450">assume</span> <span
  m="2298860">that</span> <span m="2298980">there</span> <span
  m="2299190">is</span> <span m="2299830">a</span> <span
  m="2300300">mutation</span> <span m="2300740">rate</span> <span
  m="2303160">or</span> <span m="2304060">probability.</span> <span
  m="2305970">Mu</span> <span m="2306370">is</span> <span m="2307290">the</span>
  <span m="2308170">probability</span> <span m="2310580">of</span> <span
  m="2311680">a</span> <span m="2311750">mutation.</span></p><p><span
  m="2314430">And</span> <span m="2314560">we're</span> <span
  m="2314640">going</span> <span m="2314720">to</span> <span
  m="2314760">say</span> <span m="2314870">this is</span> <span
  m="2315030">a</span> <span m="2315110">neutral</span> <span
  m="2315450">mutation.</span> <span m="2319630">And</span> <span
  m="2320150">this</span> <span m="2320290">is</span> <span
  m="2320610">per</span> <span m="2322430">division,</span> <span
  m="2322930">or</span> <span m="2323060">per</span> <span
  m="2323370">birth.</span> <span m="2328690">So</span> <span
  m="2328780">the</span> <span m="2328840">idea</span> <span
  m="2329120">is</span> <span m="2329230">that</span> <span
  m="2329900">when--</span> <span m="2330580">all</span> <span
  m="2330650">right,</span> <span m="2330940">we</span> <span
  m="2331450">might</span> <span m="2331660">start out with</span> <span
  m="2332060">just all A</span> <span m="2332400">individuals</span> <span
  m="2333040">in</span> <span m="2333090">the</span> <span
  m="2333170">population.</span></p><p><span m="2335314">But</span> <span
  m="2335782">then</span> <span m="2337190">an A</span> <span
  m="2337340">individual</span> <span m="2338080">will</span> <span
  m="2338270">give--</span> <span m="2338500">OK,</span> <span
  m="2338560">here</span> <span m="2338770">is</span> <span
  m="2338840">the</span> <span m="2338920">mother</span> <span
  m="2339270">cell,</span> <span m="2339900">the</span> <span
  m="2340070">original</span> <span m="2340240">A.</span> <span m="2340730">And
  the mother</span> <span m="2341020">cell,</span> <span m="2341440">for</span>
  <span m="2341550">now,</span> <span m="2341805">we'll</span> <span
  m="2342060">assume just</span> <span m="2342330">doesn't</span> <span
  m="2343400">ever</span> <span m="2343580">mutate.</span> <span
  m="2343970">But</span> <span m="2344080">that</span> <span
  m="2344250">the</span> <span m="2344400">daughter</span> <span
  m="2345020">cell</span> <span m="2345380">has</span> <span
  m="2345560">a</span> <span m="2345630">probability,</span> <span
  m="2346710">mu,</span> <span m="2347440">of</span> <span
  m="2347800">being</span> <span m="2348230">a</span> <span
  m="2348280">new</span> <span m="2348460">type,</span> <span
  m="2349350">say</span> <span m="2349520">B.</span> <span
  m="2354750">And</span> <span m="2354880">we</span> <span
  m="2354990">often</span> <span m="2355450">call</span> <span
  m="2355580">this</span> <span m="2355710">a</span> <span
  m="2355760">mutation</span> <span m="2356150">rate,</span> <span
  m="2357910">but</span> <span m="2358040">it's</span> <span
  m="2358150">a</span> <span m="2358210">probability</span> <span
  m="2358940">per</span> <span m="2360460">birth.</span></p><p><span
  m="2365690">So</span> <span m="2365790">what</span> <span
  m="2365910">we</span> <span m="2365990">want</span> <span
  m="2366110">to</span> <span m="2366150">know</span> <span
  m="2366320">is</span> <span m="2366590">what</span> <span
  m="2366860">is</span> <span m="2367000">the</span> <span
  m="2367995">what</span> <span m="2368260">we</span> <span
  m="2368370">want</span> <span m="2368540">to</span> <span
  m="2368870">calculate</span> <span m="2369260">is</span> <span
  m="2369370">what's</span> <span m="2369580">the</span> <span
  m="2370730">rate</span> <span m="2371790">at</span> <span
  m="2371950">which</span> <span m="2372200">new</span> <span
  m="2373856">neutral</span> <span m="2374270">mutants</span> <span
  m="2374540">both</span> <span m="2375310">appear</span> <span
  m="2375700">and</span> <span m="2375770">then</span> <span m="2375900">fix
  in</span> <span m="2376360">the</span> <span m="2376460">population.</span>
  <span m="2378500">So</span> <span m="2378660">what</span> <span
  m="2378790">we're</span> <span m="2378910">asking</span> <span
  m="2379210">about</span> <span m="2379460">is,</span> <span
  m="2380200">from</span> <span m="2380400">the</span> <span
  m="2380470">standpoint</span> <span m="2381440">of</span> <span
  m="2383710">us</span> <span m="2384190">as</span> <span
  m="2384690">scientists,</span> <span m="2385380">we</span> <span
  m="2385480">do</span> <span m="2385600">sequencing</span> <span
  m="2386410">of</span> <span m="2386600">different</span> <span
  m="2386860">lineages,</span> <span m="2387910">say</span> <span
  m="2388080">humans</span> <span m="2388550">and</span> <span
  m="2388660">chimpanzees.</span> <span m="2389390">And</span> <span
  m="2389460">we're</span> <span m="2389680">looking</span> <span
  m="2390030">at</span> <span m="2390120">the</span> <span
  m="2390220">accumulation</span> <span m="2391010">of</span> <span
  m="2391080">these,</span> <span m="2391520">what we</span> <span
  m="2391750">think</span> <span m="2391890">are</span> <span
  m="2391940">neutral</span> <span m="2392370">mutations.</span></p><p><span
  m="2393440">Question</span> <span m="2393760">is,</span> <span
  m="2394080">how</span> <span m="2394350">many</span> <span
  m="2394610">neutral</span> <span m="2394930">mutations</span> <span
  m="2395390">do</span> <span m="2395470">we</span> <span
  m="2395530">expect</span> <span m="2396050">to</span> <span
  m="2396140">see?</span> <span m="2399940">So</span> <span
  m="2400060">we</span> <span m="2400150">need</span> <span
  m="2400300">to</span> <span m="2400390">know</span> <span
  m="2400570">the</span> <span m="2400810">rate</span> <span
  m="2401530">that</span> <span m="2401600">these</span> <span
  m="2401780">things</span> <span m="2402020">happen.</span> <span
  m="2407470">So</span> <span m="2407600">this</span> <span
  m="2407740">is</span> <span m="2407850">the</span> <span
  m="2407990">rate</span> <span m="2408300">of</span> <span
  m="2409070">fixation</span> <span m="2409700">of</span> <span
  m="2409830">neutral</span> <span m="2410080">mutations,</span> <span
  m="2412530">and</span> <span m="2412670">so this is</span> <span
  m="2413170">somehow</span> <span m="2413460">the</span> <span
  m="2413580">rate</span> <span m="2413750">of</span> <span
  m="2413830">neutral</span> <span m="2414540">evolution.</span> <span
  m="2417200">There</span> <span m="2417330">are</span> <span
  m="2417400">two</span> <span m="2418230">steps</span> <span
  m="2418390">in</span> <span m="2418480">here.</span> <span
  m="2420230">What</span> <span m="2420810">are</span> <span
  m="2420850">the</span> <span m="2420960">two</span> <span
  m="2421090">things</span> <span m="2421280">that have to</span> <span
  m="2421460">happen?</span></p><p><span m="2425524">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2426960">PROFESSOR: Right,</span> <span
  m="2427060">needs</span> <span m="2427230">to</span> <span
  m="2427410">appear.</span> <span m="2428050">So</span> <span
  m="2428370">we'll</span> <span m="2428540">call</span> <span
  m="2428670">this</span> <span m="2428850">the</span> <span
  m="2429000">rate</span> <span m="2429270">of</span> <span
  m="2429450">appearance.</span> <span m="2430960">And</span> <span
  m="2431030">then</span> <span m="2431160">what</span> <span
  m="2431300">else</span> <span m="2431550">do</span> <span
  m="2431720">we</span> <span m="2431840">need</span> <span
  m="2431960">to</span> <span m="2432050">know?</span></p><p><span
  m="2442669">AUDIENCE: [INAUDIBLE]</span></p><p><span m="2444180">PROFESSOR:
  I'm</span> <span m="2444290">sorry,</span> <span m="2444460">what's</span>
  <span m="2444560">that?</span></p><p><span m="2445345">AUDIENCE:
  Population</span> <span m="2445840">size.</span></p><p><span
  m="2446830">PROFESSOR: Right,</span> <span m="2447020">so</span> <span
  m="2447090">the</span> <span m="2447170">population</span> <span
  m="2447550">size.</span> <span m="2447790">And</span> <span
  m="2448130">why</span> <span m="2448740">are</span> <span
  m="2448830">you</span> <span m="2448900">saying</span> <span
  m="2449170">that?</span> <span m="2449430">Or</span> <span
  m="2449660">what's--</span> <span m="2451500">I</span> <span m="2451640">mean,
  the</span> <span m="2451880">population</span> <span m="2452450">size
  is</span> <span m="2452580">certainly</span> <span m="2452780">going to
  be</span> <span m="2452930">relevant,</span> <span m="2453310">but</span>
  <span m="2453540">I</span> <span m="2455040">guess</span> <span
  m="2455210">the</span> <span m="2455260">question</span> <span
  m="2455600">is,</span> <span m="2456180">will</span> <span
  m="2456310">the</span> <span m="2456960">rate</span> <span
  m="2457020">of</span> <span m="2457280">neutral</span> <span
  m="2457930">evolution,</span> <span m="2458630">the</span> <span
  m="2459230">rate in</span> <span m="2459460">which</span> <span
  m="2459580">you</span> <span m="2459660">see</span> <span
  m="2459800">neutral</span> <span m="2460920">mutants</span> <span
  m="2462520">in</span> <span m="2462910">a</span> <span
  m="2462980">lineage,</span> <span m="2463600">will</span> <span
  m="2463730">that</span> <span m="2463880">be</span> <span
  m="2464010">just</span> <span m="2464190">equal to</span> <span
  m="2464330">this,</span> <span m="2464570">or</span> <span
  m="2464620">do</span> <span m="2464890">we</span> <span m="2464960">need
  to</span> <span m="2465110">multiply it</span> <span m="2465390">by</span>
  <span m="2465450">something</span> <span m="2465660">else?</span> <span
  m="2465800">Yeah.</span></p><p><span m="2466410">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2467330">PROFESSOR: Right.</span> <span
  m="2467600">And</span> <span m="2468190">it's</span> <span
  m="2468460">a</span> <span m="2468520">rate</span> <span m="2468670">of</span>
  <span m="2468730">fixation.</span> <span m="2469150">We'll</span> <span
  m="2469310">say it's</span> <span m="2469760">really</span> <span
  m="2469970">kind</span> <span m="2470170">of</span> <span m="2470260">a</span>
  <span m="2470320">probability</span> <span m="2471140">of</span> <span
  m="2471190">fixation.</span> <span m="2471840">Because</span> <span
  m="2471970">there's</span> <span m="2472110">some</span> <span
  m="2472350">rate</span> <span m="2472730">per</span> <span
  m="2472850">unit</span> <span m="2473260">time.</span> <span
  m="2473830">Maybe</span> <span m="2474030">even</span> <span
  m="2474170">like</span> <span m="2474310">real</span> <span
  m="2474560">time</span> <span m="2474820">in terms</span> <span
  m="2474980">of</span> <span m="2475030">number</span> <span
  m="2475240">of</span> <span m="2475300">generations</span> <span
  m="2475910">in</span> <span m="2475980">real</span> <span
  m="2476160">time.</span> <span m="2476890">But</span> <span
  m="2477000">we</span> <span m="2477100">need</span> <span
  m="2477230">to</span> <span m="2477300">know</span> <span
  m="2477400">the</span> <span m="2477490">probability</span> <span
  m="2477990">that it</span> <span m="2478160">fixes.</span></p><p><span
  m="2489820">Great.</span> <span m="2491460">So</span> <span
  m="2491690">let's--</span> <span m="2491970">all right,</span> <span
  m="2492140">we're</span> <span m="2492410">going</span> <span
  m="2492490">to</span> <span m="2492530">do--</span> <span
  m="2492850">we're</span> <span m="2492940">going</span> <span
  m="2493020">to</span> <span m="2493100">do</span> <span m="2493290">a</span>
  <span m="2493330">very</span> <span m="2493640">detailed</span> <span
  m="2494050">calculation</span> <span m="2494570">here.</span> <span
  m="2495550">Yes.</span></p><p><span m="2496365">AUDIENCE: So</span> <span
  m="2496860">I'm just</span> <span m="2497355">curious,</span> <span
  m="2497850">[INAUDIBLE]</span> <span m="2499010">for this</span> <span
  m="2499490">probability</span> <span m="2499970">[INAUDIBLE]</span> <span
  m="2500930">time is</span> <span m="2501410">completely</span> <span
  m="2501890">left</span> <span m="2502370">out</span> <span m="2503330">of
  the</span> <span m="2503810">picture,</span> <span m="2504290">so in
  principle--</span></p><p><span m="2504770">PROFESSOR: That's</span> <span
  m="2504950">right.</span></p><p><span m="2506322">AUDIENCE: --it</span> <span
  m="2506798">could take</span> <span m="2507274">a very</span> <span
  m="2507750">long time.</span></p><p><span m="2508226">PROFESSOR: That's
  right.</span></p><p><span m="2509178">AUDIENCE: But we</span> <span
  m="2509654">don't</span> <span m="2510606">take this</span> <span
  m="2511082">into</span> <span m="2511558">account</span> <span
  m="2512034">because--</span></p><p><span m="2512510">PROFESSOR: That's</span>
  <span m="2512770">right.</span> <span m="2513910">So</span> <span
  m="2514380">for</span> <span m="2514570">now,</span> <span
  m="2515460">let's</span> <span m="2515670">just</span> <span
  m="2515860">assume</span> <span m="2516530">that</span> <span
  m="2517710">the</span> <span m="2518150">rate</span> <span
  m="2519290">of</span> <span m="2519400">appearance</span> <span
  m="2520380">of</span> <span m="2520500">these</span> <span
  m="2520910">is</span> <span m="2522760">small,</span> <span
  m="2523320">so</span> <span m="2523450">that</span> <span
  m="2523580">you</span> <span m="2523650">don't</span> <span
  m="2523770">have</span> <span m="2523830">to</span> <span
  m="2523920">worry</span> <span m="2524180">about</span> <span
  m="2525440">different</span> <span m="2525770">mutants</span> <span
  m="2526780">competing</span> <span m="2527340">against</span> <span
  m="2527680">each</span> <span m="2527840">other.</span> <span
  m="2528130">We're</span> <span m="2528310">going</span> <span
  m="2528390">to</span> <span m="2528460">spend</span> <span
  m="2529200">a</span> <span m="2529710">lot</span> <span m="2529840">of</span>
  <span m="2529880">time</span> <span m="2530020">on</span> <span
  m="2530100">Thursday</span> <span m="2530390">talking</span> <span
  m="2530640">about</span> <span m="2530780">this</span> <span
  m="2530920">phenomenon</span> <span m="2531270">of</span> <span
  m="2531370">clonal</span> <span m="2531780">interference,</span> <span
  m="2532580">when</span> <span m="2532830">multiple</span> <span
  m="2533250">mutant</span> <span m="2533560">lineages</span> <span
  m="2534020">are</span> <span m="2534140">coexisting</span> <span
  m="2534920">and</span> <span m="2535000">perhaps</span> <span
  m="2535440">competing</span> <span m="2535910">in</span> <span
  m="2535970">a</span> <span m="2536030">population.</span></p><p><span
  m="2536960">But</span> <span m="2537140">for</span> <span
  m="2537290">simplicity</span> <span m="2537920">for</span> <span
  m="2538050">now,</span> <span m="2538370">what we're</span> <span
  m="2538580">just</span> <span m="2538710">going</span> <span
  m="2538800">to</span> <span m="2538840">assume</span> <span
  m="2539180">is</span> <span m="2539280">that</span> <span
  m="2540990">there's</span> <span m="2541280">a</span> <span
  m="2541350">separation</span> <span m="2541780">of time</span> <span
  m="2541980">scales.</span> <span m="2542680">Right?</span> <span
  m="2542950">Which</span> <span m="2543160">means</span> <span
  m="2543390">that</span> <span m="2544030">the</span> <span
  m="2544250">rate</span> <span m="2544550">at which</span> <span
  m="2544730">these</span> <span m="2544830">neutral</span> <span
  m="2545090">mutants</span> <span m="2545390">appear</span> <span
  m="2545700">in</span> <span m="2545760">the</span> <span
  m="2545840">population</span> <span m="2546730">is</span> <span
  m="2547840">very</span> <span m="2548030">small</span> <span
  m="2548460">compared</span> <span m="2548860">to</span> <span
  m="2548960">the</span> <span m="2551160">1</span> <span
  m="2551600">over</span> <span m="2551750">the</span> <span
  m="2551830">time</span> <span m="2552290">that it</span> <span
  m="2552380">takes</span> <span m="2552920">for</span> <span
  m="2553700">the</span> <span m="2555530">fixation</span> <span
  m="2555950">to</span> <span m="2556418">occur.</span></p><p><span
  m="2559230">So</span> <span m="2559250">what</span> <span
  m="2559360">we</span> <span m="2559460">want</span> <span
  m="2559660">is</span> <span m="2560030">what's</span> <span
  m="2560290">the</span> <span m="2560440">rate</span> <span
  m="2560760">of</span> <span m="2560850">appearance</span> <span
  m="2561650">here</span> <span m="2563030">in</span> <span
  m="2563190">units</span> <span m="2563460">of</span> <span
  m="2564160">real</span> <span m="2564400">time.</span> <span
  m="2566920">What</span> <span m="2567060">are</span> <span
  m="2567090">the</span> <span m="2567710">things</span> <span m="2568000">that
  are</span> <span m="2568300">going to appear</span> <span
  m="2568490">here?</span></p><p><span m="2573040">AUDIENCE: Rate of</span>
  <span m="2573510">mutation.</span></p><p><span m="2573990">PROFESSOR:
  All</span> <span m="2574110">right,</span> <span m="2574520">rate of</span>
  <span m="2574960">mutation,</span> <span m="2575650">mu,</span> <span
  m="2577910">times</span> <span m="2580920">population</span> <span
  m="2581420">size.</span> <span m="2584470">And</span> <span
  m="2584540">that's</span> <span m="2584680">just</span> <span
  m="2584810">because</span> <span m="2585000">a</span> <span
  m="2585050">larger</span> <span m="2585410">population</span> <span
  m="2586720">will</span> <span m="2587760">experience</span> <span
  m="2588290">a</span> <span m="2588370">larger</span> <span
  m="2588660">rate</span> <span m="2588930">of</span> <span
  m="2589020">these</span> <span m="2589720">mutants</span> <span
  m="2590390">appearing</span> <span m="2590710">in</span> <span
  m="2590780">the</span> <span m="2590860">population.</span> <span
  m="2591320">And</span> <span m="2591440">it's</span> <span
  m="2591660">a</span> <span m="2591770">linear.</span> <span
  m="2594120">And</span> <span m="2594220">that's</span> <span
  m="2594390">actually</span> <span m="2594590">just--</span> <span
  m="2594800">that</span> <span m="2595180">is,</span> <span
  m="2595340">indeed,</span> <span m="2595760">the</span> <span
  m="2595940">rate</span> <span m="2596250">of</span> <span
  m="2596440">appearance.</span></p><p><span m="2598220">And the</span> <span
  m="2598470">probability of</span> <span m="2598890">fixation</span> <span
  m="2599500">of</span> <span m="2599640">each</span> <span
  m="2599820">one?</span></p><p><span m="2603593">AUDIENCE: [? Excuse me,
  ?]</span> <span m="2604092">but it doesn't</span> <span m="2604591">have the
  unit</span> <span m="2605589">of</span> <span
  m="2607086">rate.</span></p><p><span m="2608590">PROFESSOR: Oh,</span> <span
  m="2610090">yes.</span> <span m="2610320">OK,</span> <span
  m="2610460">so</span> <span m="2611040">this</span> <span
  m="2611240">is--</span> <span m="2611890">OK</span> <span
  m="2612070">so</span> <span m="2612240">we</span> <span
  m="2612380">have</span> <span m="2612530">to</span> <span
  m="2612600">actually--</span></p><p><span m="2613000">AUDIENCE:
  [INAUDIBLE]</span> <span m="2613330">times</span> <span m="2613800">is</span>
  <span m="2614270">that</span> <span m="2614740">per
  iteration?</span></p><p><span m="2615210">PROFESSOR: Yes.</span> <span
  m="2615490">So</span> <span m="2615550">this</span> <span
  m="2615690">is</span> <span m="2615800">per,</span> <span m="2616270">this
  is</span> <span m="2616620">per--</span> <span m="2617430">so</span> <span
  m="2617550">this</span> <span m="2617690">is</span> <span m="2618010">a</span>
  <span m="2618220">rate</span> <span m="2618740">per</span> <span
  m="2618990">generation.</span> <span m="2621900">So</span> <span
  m="2622110">I</span> <span m="2622170">guess</span> <span
  m="2622320">I'd</span> <span m="2622420">define</span> <span
  m="2622700">mu</span> <span m="2622980">as</span> <span m="2623410">the</span>
  <span m="2623490">probability--</span> <span m="2628450">so</span> <span
  m="2628710">this</span> <span m="2628940">is</span> <span
  m="2629060">all</span> <span m="2629320">in</span> <span
  m="2629450">units</span> <span m="2629900">of</span> <span
  m="2630340">per</span> <span m="2630810">generation,</span> <span
  m="2631160">basically.</span> <span m="2632000">Because</span> <span
  m="2632790">mu</span> <span m="2633010">is</span> <span m="2633140">a</span>
  <span m="2633220">per.</span></p><p><span m="2638063">AUDIENCE:
  Generation</span> <span m="2638560">or</span> <span
  m="2639057">iteration?</span></p><p><span m="2640550">PROFESSOR: OK,</span>
  <span m="2640810">let's</span> <span m="2641050">make</span> <span
  m="2641200">sure</span> <span m="2641330">that</span> <span
  m="2641620">I--</span> <span m="2643660">mu--</span> <span
  m="2644620">this</span> <span m="2645770">is</span> <span m="2645850">a</span>
  <span m="2645920">generation.</span> <span m="2648700">Because</span> <span
  m="2648950">if</span> <span m="2651540">we</span> <span
  m="2651670">have--</span> <span m="2654980">right.</span> <span
  m="2655170">So</span> <span m="2655250">let's</span> <span
  m="2655390">say</span> <span m="2655540">that,</span> <span
  m="2655770">for</span> <span m="2655840">example,</span> <span
  m="2656120">there's</span> <span m="2656380">10</span> <span
  m="2656820">to</span> <span m="2656880">the</span> <span m="2657030">6</span>
  <span m="2657450">individuals</span> <span m="2657870">here,</span> <span
  m="2658190">and</span> <span m="2658260">the</span> <span
  m="2658670">mutation</span> <span m="2659260">rate</span> <span
  m="2659560">is--</span> <span m="2660972">yeah.</span></p><p><span
  m="2664100">All</span> <span m="2664180">right,</span> <span
  m="2664590">probability</span> <span m="2664980">of fixation</span> <span
  m="2665290">was</span> <span m="2665420">what?</span></p><p><span
  m="2666273">AUDIENCE: 1 over</span> <span m="2666746">N.</span></p><p><span
  m="2667220">PROFESSOR: 1</span> <span m="2667380">over</span> <span
  m="2667530">N.</span> <span m="2673700">So</span> <span
  m="2673820">this</span> <span m="2673940">is</span> <span
  m="2674000">great.</span> <span m="2674350">Because</span> <span
  m="2674650">this</span> <span m="2674830">is</span> <span
  m="2675080">saying</span> <span m="2675410">that</span> <span
  m="2675590">the</span> <span m="2678060">rate</span> <span
  m="2678240">at</span> <span m="2678300">which</span> <span
  m="2678480">you</span> <span m="2678560">expect</span> <span
  m="2678920">neutral</span> <span m="2679800">mutants to</span> <span
  m="2680180">actually</span> <span m="2680950">appear</span> <span
  m="2681430">in</span> <span m="2681500">the</span> <span
  m="2681570">population,</span> <span m="2682080">in</span> <span
  m="2682140">terms</span> <span m="2682390">of</span> <span
  m="2682500">like,</span> <span m="2683210">in</span> <span
  m="2683390">terms</span> <span m="2683580">of</span> <span
  m="2683660">fixing,</span> <span m="2684140">if</span> <span
  m="2684240">you</span> <span m="2684370">were to</span> <span
  m="2684600">sequence</span> <span m="2685160">along</span> <span
  m="2685400">a</span> <span m="2685460">lineage,</span> <span
  m="2687070">that</span> <span m="2687190">it</span> <span
  m="2688000">is</span> <span m="2688200">independent</span> <span
  m="2688660">of</span> <span m="2688700">the</span> <span
  m="2688760">population</span> <span m="2689310">size.</span> <span
  m="2690280">And</span> <span m="2690430">it's</span> <span
  m="2690600">given</span> <span m="2691300">by</span> <span
  m="2691550">the</span> <span m="2695010">rate</span> <span
  m="2695190">of</span> <span m="2695600">mutation.</span> <span
  m="2699110">But</span> <span m="2699420">what</span> <span
  m="2699610">you</span> <span m="2699720">expect</span> <span
  m="2700150">is</span> <span m="2700290">it's</span> <span
  m="2700560">on--</span> <span m="2700690">it</span> <span
  m="2700840">should</span> <span m="2700990">be</span> <span
  m="2701090">on</span> <span m="2701180">a</span> <span m="2701240">per</span>
  <span m="2701560">generation</span> <span
  m="2702280">basis.</span></p><p><span m="2707840">So</span> <span
  m="2707950">this</span> <span m="2708100">thing</span> <span
  m="2708280">is</span> <span m="2708960">perhaps</span> <span
  m="2709470">useful</span> <span m="2710040">in</span> <span
  m="2710180">several</span> <span m="2710560">different</span> <span
  m="2710830">ways.</span> <span m="2713280">And</span> <span
  m="2714000">there</span> <span m="2714190">are</span> <span
  m="2714240">some</span> <span m="2714900">subtleties,</span> <span
  m="2715750">like</span> <span m="2715920">always,</span> <span
  m="2716300">to</span> <span m="2716390">this.</span> <span
  m="2717390">If</span> <span m="2717510">you</span> <span m="2717600">go</span>
  <span m="2717700">out</span> <span m="2717830">and</span> <span
  m="2717900">you</span> <span m="2718020">measure</span> <span
  m="2719110">the</span> <span m="2719280">rates</span> <span
  m="2719620">of</span> <span m="2720760">fixation</span> <span
  m="2721530">of</span> <span m="2721620">neutral</span> <span
  m="2721935">mutants,</span> <span m="2722250">what you</span> <span
  m="2722330">find</span> <span m="2722600">is</span> <span
  m="2722690">that</span> <span m="2722800">it's</span> <span
  m="2722960">not</span> <span m="2723710">really</span> <span
  m="2723980">constant</span> <span m="2724500">on</span> <span
  m="2724580">a</span> <span m="2724630">per</span> <span
  m="2724850">generation</span> <span m="2725440">basis.</span> <span
  m="2725850">But</span> <span m="2725980">more</span> <span m="2726270">on
  a--</span> <span m="2727420">maybe</span> <span m="2727640">even</span> <span
  m="2727750">closer</span> <span m="2728080">on</span> <span
  m="2728190">a</span> <span m="2728260">per</span> <span
  m="2729260">actual</span> <span m="2729980">year</span> <span
  m="2730400">basis,</span> <span m="2730970">say.</span></p><p><span
  m="2732200">In</span> <span m="2732330">particular,</span> <span
  m="2733250">this</span> <span m="2733830">would</span> <span
  m="2733950">predict</span> <span m="2734280">that</span> <span
  m="2734810">if</span> <span m="2735210">organisms</span> <span
  m="2735840">have</span> <span m="2736100">the</span> <span
  m="2736190">same</span> <span m="2737840">mutation</span> <span
  m="2738240">rate,</span> <span m="2739300">I'd</span> <span
  m="2739710">say</span> <span m="2739850">roughly</span> <span
  m="2740470">maybe</span> <span m="2740670">humans</span> <span
  m="2741030">and</span> <span m="2741130">mice.</span> <span
  m="2742580">But</span> <span m="2742760">yet</span> <span
  m="2743000">humans</span> <span m="2743490">and</span> <span
  m="2743570">mice</span> <span m="2743830">have</span> <span
  m="2743940">very</span> <span m="2744140">different</span> <span
  m="2744430">generation</span> <span m="2744910">times.</span> <span
  m="2748640">By</span> <span m="2749500">[INAUDIBLE].</span> <span
  m="2751280">Then</span> <span m="2751400">you</span> <span
  m="2751470">would</span> <span m="2751530">expect</span> <span
  m="2752000">the</span> <span m="2752430">rate</span> <span
  m="2752630">of</span> <span m="2752940">accumulation</span> <span
  m="2753580">of</span> <span m="2753640">neutral</span> <span
  m="2753920">mutants</span> <span m="2754290">in</span> <span
  m="2754520">the</span> <span m="2754620">human</span> <span
  m="2754900">population</span> <span m="2755450">on</span> <span
  m="2755550">a</span> <span m="2755620">per</span> <span
  m="2755940">year</span> <span m="2756210">basis</span> <span
  m="2756540">to</span> <span m="2756600">be</span> <span
  m="2756730">much</span> <span m="2756980">lower</span> <span
  m="2757980">than</span> <span m="2758140">mice.</span> <span
  m="2759090">But</span> <span m="2759180">that's</span> <span
  m="2759410">not</span> <span m="2759640">true.</span></p><p><span
  m="2761290">We'll</span> <span m="2761490">get</span> <span
  m="2761630">into</span> <span m="2761860">a</span> <span
  m="2762200">bit</span> <span m="2762380">later</span> <span
  m="2762690">why</span> <span m="2762890">that</span> <span
  m="2763050">might</span> <span m="2763250">be.</span> <span
  m="2763780">But</span> <span m="2763890">I</span> <span
  m="2763950">just</span> <span m="2764100">want</span> <span
  m="2764240">to</span> <span m="2764930">highlight that</span> <span
  m="2765330">that's--</span> <span m="2766170">that</span> <span
  m="2766550">this</span> <span m="2766900">model</span> <span
  m="2767160">is</span> <span m="2767250">very</span> <span
  m="2767900">simple.</span> <span m="2768930">And it</span> <span
  m="2769020">predicts</span> <span m="2769170">something</span> <span
  m="2769550">that</span> <span m="2769670">is</span> <span
  m="2771510">too</span> <span m="2771720">simple,</span> <span
  m="2772080">maybe.</span> <span m="2772330">But</span> <span
  m="2773110">at</span> <span m="2773240">least</span> <span
  m="2774010">it's</span> <span m="2774370">saying</span> <span
  m="2774590">that</span> <span m="2774720">there's</span> <span
  m="2775060">some</span> <span m="2775310">sense in</span> <span
  m="2775580">which</span> <span m="2775710">the</span> <span
  m="2775790">population</span> <span m="2776210">size</span> <span
  m="2776430">is</span> <span m="2776530">not</span> <span m="2776730">as</span>
  <span m="2776830">relevant</span> <span m="2777310">as</span> <span
  m="2777380">you</span> <span m="2777470">might</span> <span
  m="2777600">have</span> <span m="2777710">thought</span> <span
  m="2777940">it</span> <span m="2777990">was</span> <span
  m="2778100">going</span> <span m="2778210">to</span> <span
  m="2778260">be.</span></p><p><span m="2779630">And</span> <span
  m="2780000">at</span> <span m="2780070">least</span> <span
  m="2780390">within</span> <span m="2780810">a</span> <span
  m="2780900">particular</span> <span m="2781360">lineage,</span> <span
  m="2781980">if</span> <span m="2782070">you're</span> <span
  m="2782150">talking</span> <span m="2782340">about</span> <span
  m="2782530">the</span> <span m="2782600">accumulation</span> <span
  m="2783290">of</span> <span m="2783350">neutral</span> <span
  m="2783610">mutations</span> <span m="2784100">along</span> <span
  m="2784440">humans,</span> <span m="2784920">for</span> <span
  m="2785020">example,</span> <span m="2785800">then</span> <span
  m="2786350">you can</span> <span m="2786520">say,</span> <span
  m="2787190">maybe</span> <span m="2787530">that's</span> <span
  m="2787750">roughly</span> <span m="2788040">constant.</span> <span
  m="2789280">It</span> <span m="2789610">gets</span> <span
  m="2789820">very--</span> <span m="2790160">it</span> <span
  m="2790300">gets</span> <span m="2790510">very</span> <span
  m="2790700">tricky.</span> <span m="2791440">I mean,</span> <span
  m="2791560">if</span> <span m="2791640">you</span> <span
  m="2791740">look</span> <span m="2791920">at</span> <span
  m="2792010">the</span> <span m="2792180">rate</span> <span
  m="2792420">of</span> <span m="2792700">accumulation</span> <span
  m="2793330">of</span> <span m="2793480">neutral</span> <span
  m="2793810">mutants</span> <span m="2794380">in</span> <span
  m="2794560">one</span> <span m="2794860">protein in</span> <span
  m="2795210">humans,</span> <span m="2795680">it's</span> <span
  m="2795980">at</span> <span m="2796150">a</span> <span
  m="2796200">different</span> <span m="2796460">rate</span> <span
  m="2796690">than</span> <span m="2797180">another</span> <span
  m="2797450">protein</span> <span m="2797760">in</span> <span
  m="2797850">humans.</span></p><p><span m="2798650">So</span> <span
  m="2799180">everything</span> <span m="2799400">is</span> <span
  m="2799500">complicated.</span> <span m="2799860">But</span> <span
  m="2799970">at</span> <span m="2800020">least</span> <span
  m="2800610">each--</span> <span m="2801260">along</span> <span
  m="2801630">each</span> <span m="2801770">of</span> <span
  m="2801820">these</span> <span m="2801930">proteins,</span> <span
  m="2802230">maybe</span> <span m="2802660">it</span> <span
  m="2802770">still</span> <span m="2803030">is</span> <span
  m="2803130">roughly</span> <span m="2804060">some</span> <span
  m="2804270">sort</span> <span m="2804430">of</span> <span
  m="2804510">clock,</span> <span m="2804880">because</span> <span
  m="2805150">it</span> <span m="2805610">accumulates</span> <span
  m="2807280">mutations</span> <span m="2807790">at</span> <span
  m="2808030">some</span> <span m="2808380">rate</span> <span
  m="2808630">that's</span> <span m="2809620">roughly</span> <span
  m="2810010">linear</span> <span m="2810330">with</span> <span
  m="2810470">time.</span> <span m="2811850">Of</span> <span
  m="2811890">course,</span> <span m="2812110">it's</span> <span
  m="2812200">hard</span> <span m="2812380">to</span> <span
  m="2812420">imagine</span> <span m="2812740">how</span> <span
  m="2812870">any</span> <span m="2813120">process</span> <span
  m="2813510">like</span> <span m="2813640">this</span> <span
  m="2813820">can</span> <span m="2814130">not</span> <span
  m="2814870">go</span> <span m="2815030">with</span> <span
  m="2815170">time</span> <span m="2815450">like</span> <span
  m="2815610">that.</span> <span m="2816920">But</span> <span
  m="2817040">at</span> <span m="2817080">least</span> <span
  m="2817260">this</span> <span m="2817760">is</span> <span
  m="2817870">potentially</span> <span m="2818610">a</span> <span
  m="2818930">useful</span> <span m="2819320">thing.</span></p><p><span
  m="2819470">And</span> <span m="2819690">indeed,</span> <span
  m="2820100">when</span> <span m="2820840">you</span> <span
  m="2820990">read</span> <span m="2821250">about</span> <span
  m="2821470">studies</span> <span m="2822220">from</span> <span
  m="2822930">sequences</span> <span m="2823570">trying</span> <span
  m="2823730">to</span> <span m="2823800">estimate</span> <span
  m="2824730">the</span> <span m="2824900">time</span> <span
  m="2825460">since</span> <span m="2825660">the</span> <span
  m="2825750">last</span> <span m="2826100">common</span> <span
  m="2826460">ancestor,</span> <span m="2827860">this</span> <span
  m="2828430">is</span> <span m="2829150">the</span> <span
  m="2829300">category</span> <span m="2829740">of</span> <span
  m="2829810">technique</span> <span m="2830200">that</span> <span
  m="2830310">is</span> <span m="2831550">the</span> <span
  m="2831630">basis</span> <span m="2832050">for</span> <span
  m="2832150">that,</span> <span m="2832455">is</span> <span
  m="2832760">that</span> <span m="2832900">you're</span> <span
  m="2833070">just</span> <span m="2833250">counting</span> <span
  m="2833650">up</span> <span m="2834720">how</span> <span
  m="2834960">many</span> <span m="2835110">neutral</span> <span
  m="2835410">mutations</span> <span m="2835940">appeared</span> <span
  m="2836270">along</span> <span m="2836530">these</span> <span
  m="2836920">along</span> <span m="2837200">these</span> <span
  m="2837330">different</span> <span m="2837540">lineages.</span></p><p><span
  m="2841340">And</span> <span m="2841690">I</span> <span
  m="2841740">think</span> <span m="2841890">that</span> <span
  m="2842140">there</span> <span m="2842510">are</span> <span
  m="2842920">a</span> <span m="2843020">number</span> <span
  m="2843400">of</span> <span m="2843810">really</span> <span
  m="2844140">fascinating</span> <span m="2844660">things</span> <span
  m="2844920">that</span> <span m="2845010">you</span> <span
  m="2845170">can</span> <span m="2845790">try</span> <span
  m="2846030">to</span> <span m="2846090">address</span> <span
  m="2846520">with</span> <span m="2846620">this</span> <span
  m="2849400">kind</span> <span m="2849520">of</span> <span
  m="2849580">molecular</span> <span m="2849970">clock.</span> <span
  m="2850280">And</span> <span m="2850350">I'll</span> <span
  m="2850710">maybe</span> <span m="2850930">bring</span> <span
  m="2851180">up</span> <span m="2851370">one of</span> <span
  m="2851870">them.</span> <span m="2852440">Incidentally,</span> <span
  m="2853440">I'm</span> <span m="2853660">not</span> <span m="2853990">a</span>
  <span m="2854080">huge</span> <span m="2854370">fan</span> <span
  m="2854600">of</span> <span m="2854710">memorizing</span> <span
  m="2855260">things.</span> <span m="2856570">But</span> <span
  m="2857970">for</span> <span m="2858400">both</span> <span
  m="2859080">size</span> <span m="2859650">scales,</span> <span
  m="2860200">and</span> <span m="2860350">time</span> <span
  m="2860710">scales,</span> <span m="2861130">and</span> <span
  m="2861210">so</span> <span m="2861330">forth,</span> <span
  m="2861540">I</span> <span m="2861650">really</span> <span
  m="2862020">very</span> <span m="2862210">much</span> <span
  m="2862420">do</span> <span m="2862570">like</span> <span
  m="2862770">the</span> <span m="2862860">idea</span> <span
  m="2863610">of</span> <span m="2863930">everybody</span> <span
  m="2864410">having</span> <span m="2864670">memorized</span> <span
  m="2865370">a</span> <span m="2865470">few</span> <span
  m="2866250">sign</span> <span m="2866630">posts.</span></p><p><span
  m="2867920">Because</span> <span m="2868160">that</span> <span
  m="2868260">way,</span> <span m="2868620">when</span> <span
  m="2868710">you</span> <span m="2868800">hear</span> <span
  m="2869140">something</span> <span m="2869500">new,</span> <span
  m="2870120">you</span> <span m="2870270">have</span> <span
  m="2870450">some</span> <span m="2870770">way</span> <span
  m="2870880">of</span> <span m="2870950">interpreting</span> <span
  m="2871430">whether</span> <span m="2871660">it's</span> <span
  m="2871850">big,</span> <span m="2872180">or</span> <span
  m="2872300">small,</span> <span m="2872790">or</span> <span
  m="2872870">something</span> <span m="2873160">else.</span> <span
  m="2874440">So</span> <span m="2874620">for</span> <span
  m="2874730">example,</span> <span m="2876340">the</span> <span
  m="2877430">time</span> <span m="2877940">since</span> <span
  m="2878660">the</span> <span m="2878860">last</span> <span
  m="2879120">common</span> <span m="2879310">ancestor</span> <span
  m="2879770">between</span> <span m="2880100">humans</span> <span
  m="2880610">and</span> <span m="2880720">chimpanzees.</span> <span
  m="2882460">Does</span> <span m="2882610">anybody</span> <span
  m="2883130">have</span> <span m="2884230">any</span> <span
  m="2884460">sense</span> <span m="2884780">of--</span> <span
  m="2885370">well,</span> <span m="2885790">I'll actually</span> <span
  m="2886230">have</span> <span m="2886380">us</span> <span
  m="2886540">vote,</span> <span m="2887110">because</span> <span
  m="2887290">I</span> <span m="2887370">think</span> <span
  m="2887510">it's</span> <span m="2887640">useful.</span> <span
  m="2888150">In</span> <span m="2888350">case</span> <span
  m="2888600">you're</span> <span m="2888850">off</span> <span
  m="2889200">by</span> <span m="2890610">many</span> <span
  m="2890880">orders</span> <span m="2891190">of</span> <span
  m="2891260">magnitude,</span> <span m="2891790">that</span> <span
  m="2891950">you</span> <span m="2894470">make--</span> <span
  m="2894720">OK.</span></p><p><span m="2894930">So</span> <span
  m="2895790">the</span> <span m="2895890">last</span> <span
  m="2896220">common</span> <span m="2896510">ancestor,</span> <span
  m="2897540">human,</span> <span m="2898920">chimpanzee.</span> <span
  m="2900910">And</span> <span m="2901370">incidentally,</span> <span
  m="2901610">this is</span> <span m="2901980">something that</span> <span
  m="2902280">people</span> <span m="2902560">do</span> <span
  m="2902740">argue</span> <span m="2903040">a</span> <span
  m="2903080">lot</span> <span m="2903310">about.</span> <span
  m="2904140">But</span> <span m="2905240">it's</span> <span
  m="2905540">within</span> <span m="2905760">a</span> <span
  m="2905800">factor</span> <span m="2906190">of</span> <span
  m="2906690">two</span> <span m="2906810">of</span> <span
  m="2907180">something.</span> <span m="2907860">So</span> <span
  m="2908030">I'm going</span> <span m="2908390">to</span> <span
  m="2908440">go</span> <span m="2908550">ahead</span> <span
  m="2908770">and</span> <span m="2909300">make</span> <span
  m="2909400">some--</span> <span m="2911840">so</span> <span
  m="2912050">hold</span> <span m="2912220">on.</span> <span m="2912350">I
  just</span> <span m="2912480">want to</span> <span m="2912650">make</span>
  <span m="2912800">sure</span> <span m="2912970">I</span> <span
  m="2913010">get</span> <span m="2913220">my--</span> <span m="2931560">well, 7
  times</span> <span m="2931890">10</span> <span m="2932150">to the</span> <span
  m="2932470">6.</span></p><p><span m="2939640">All</span> <span
  m="2939840">right.</span> <span m="2946580">All</span> <span
  m="2946660">right,</span> <span m="2946890">I'll</span> <span
  m="2946990">give</span> <span m="2947130">you</span> <span
  m="2947750">10</span> <span m="2948100">seconds</span> <span
  m="2948570">to</span> <span m="2948740">orient</span> <span
  m="2949080">yourself</span> <span m="2949490">relative</span> <span
  m="2949900">to</span> <span m="2949980">other</span> <span
  m="2950270">things</span> <span m="2950680">that you</span> <span
  m="2950800">might</span> <span m="2950990">know</span> <span
  m="2951160">about</span> <span m="2951370">the</span> <span
  m="2951460">world.</span> <span m="2956550">OK,</span> <span
  m="2956760">ready,</span> <span m="2957970">three,</span> <span
  m="2959050">two,</span> <span m="2959920">one.</span> <span
  m="2962900">All</span> <span m="2963030">right,</span> <span
  m="2963270">we</span> <span m="2963370">got--</span> <span
  m="2967736">that's</span> <span m="2968218">interesting.</span></p><p><span
  m="2969670">OK,</span> <span m="2969980">yes.</span> <span
  m="2970220">I</span> <span m="2970490">would</span> <span
  m="2970590">say</span> <span m="2970800">it's</span> <span
  m="2971210">kind</span> <span m="2971350">of</span> <span
  m="2971410">uniformly</span> <span m="2971860">distributed--</span> <span
  m="2972180">oh.</span> <span m="2974870">It's</span> <span
  m="2975060">pretty</span> <span m="2975330">unified.</span> <span
  m="2976080">There are</span> <span m="2976540">a</span> <span
  m="2976570">minority</span> <span m="2977130">of--</span> <span
  m="2977410">not</span> <span m="2977570">very</span> <span
  m="2977690">many</span> <span m="2977940">E's.</span> <span
  m="2978770">But</span> <span m="2978880">I</span> <span
  m="2978950">would</span> <span m="2979050">say</span> <span
  m="2979190">that</span> <span m="2979530">the</span> <span
  m="2979730">other</span> <span m="2980160">things</span> <span
  m="2980470">are</span> <span m="2980690">pretty--</span> <span
  m="2982490">it's</span> <span m="2982830">maybe</span> <span
  m="2984090">peaked</span> <span m="2984440">around</span> <span
  m="2984750">here.</span></p><p><span m="2988600">I</span> <span
  m="2988940">don't</span> <span m="2989090">want</span> <span
  m="2989270">to</span> <span m="2989320">get</span> <span
  m="2989490">into</span> <span m="2989650">any</span> <span
  m="2989900">biblical</span> <span m="2990400">debates</span> <span
  m="2990780">here.</span> <span m="2996770">But</span> <span
  m="2997850">right,</span> <span m="2998030">OK.</span> <span
  m="2998200">So</span> <span m="2998340">what</span> <span
  m="2998560">are</span> <span m="2998610">some</span> <span
  m="2998780">things</span> <span m="2999130">that</span> <span
  m="3000012">if</span> <span m="3000390">we</span> <span
  m="3000480">have</span> <span m="3000570">a</span> <span
  m="3000620">timeline</span> <span m="3001250">of</span> <span
  m="3001350">the</span> <span m="3001440">world.</span> <span
  m="3002590">OK,</span> <span m="3002730">this</span> <span
  m="3002920">is</span> <span m="3002970">going</span> <span
  m="3003070">to</span> <span m="3003110">be</span> <span m="3003190">a</span>
  <span m="3003240">flash</span> <span m="3004590">course</span> <span
  m="3005200">in--</span> <span m="3006600">all</span> <span
  m="3006860">right.</span> <span m="3008400">OK,</span> <span
  m="3008910">here's,</span> <span m="3009790">here</span> <span
  m="3010000">I</span> <span m="3010130">am,</span> <span m="3012380">and</span>
  <span m="3012610">I'm</span> <span m="3013170">unhappy</span> <span
  m="3013600">because</span> <span m="3013760">we</span> <span
  m="3013870">don't</span> <span m="3014070">know</span> <span
  m="3014350">when</span> <span m="3014560">humans</span> <span
  m="3014870">and</span> <span m="3014990">chimps--</span> <span m="3016540">all
  right.</span> <span m="3016910">So</span> <span m="3017080">this</span> <span
  m="3017160">is</span> <span m="3017400">us.</span> <span
  m="3018370">All</span> <span m="3018540">right.</span></p><p><span
  m="3020122">AUDIENCE: [INAUDIBLE]</span></p><p><span m="3021580">PROFESSOR:
  Right.</span> <span m="3022600">OK.</span> <span m="3022790">So</span> <span
  m="3022950">let's</span> <span m="3023110">say--</span> <span
  m="3024000">we</span> <span m="3024100">could</span> <span
  m="3024180">start</span> <span m="3024310">with--</span> <span m="3024430">you
  want to</span> <span m="3024530">start</span> <span m="3024770">with</span>
  <span m="3024910">earth?</span> <span m="3025240">OK.</span> <span
  m="3026130">Four</span> <span m="3026350">and</span> <span m="3026560">a
  half</span> <span m="3027340">billion.</span> <span m="3028970">This</span>
  <span m="3029130">might</span> <span m="3029310">be</span> <span
  m="3029430">on a</span> <span m="3029510">logarithmic</span> <span
  m="3030200">scale,</span> <span m="3030620">somehow.</span> <span
  m="3032010">So</span> <span m="3032140">we're</span> <span
  m="3032590">going</span> <span m="3032680">to--</span> <span
  m="3032720">just</span> <span m="3032900">to</span> <span
  m="3032970">space</span> <span m="3033260">things</span> <span
  m="3033430">out</span> <span m="3033580">a</span> <span
  m="3033640">little</span> <span m="3033840">bit.</span></p><p><span
  m="3035020">AUDIENCE: [INAUDIBLE]</span></p><p><span m="3035810">PROFESSOR:
  Right,</span> <span m="3036110">you</span> <span m="3036180">know,</span>
  <span m="3036460">the</span> <span m="3036510">universe</span> <span
  m="3037040">is</span> <span m="3037140">what,</span> <span
  m="3037450">13</span> <span m="3037780">ish</span> <span
  m="3038110">billion</span> <span m="3038480">years?</span> <span
  m="3038940">I</span> <span m="3039720">don't</span> <span
  m="3039850">know.</span> <span m="3040590">People</span> <span
  m="3040820">are</span> <span m="3040880">calculating</span> <span
  m="3041360">with</span> <span m="3041480">these--</span> <span
  m="3042450">13</span> <span m="3042870">billion,</span> <span m="3043790">four
  and</span> <span m="3044045">a half</span> <span m="3044300">billion,</span>
  <span m="3044820">you</span> <span m="3044870">know</span> <span
  m="3046370">earth</span> <span m="3046620">congeals,</span> <span
  m="3047590">it's</span> <span m="3047690">hot,</span> <span
  m="3048730">whatever.</span> <span m="3050360">All</span> <span
  m="3050450">right,</span> <span m="3050640">so</span> <span
  m="3050730">life</span> <span m="3051150">gets</span> <span
  m="3051330">started,</span> <span m="3051880">maybe,</span> <span
  m="3052220">a</span> <span m="3052690">billion</span> <span
  m="3053160">years</span> <span m="3053400">later.</span></p><p><span
  m="3056467">AUDIENCE: 3.9</span> <span
  m="3056864">[INAUDIBLE].</span></p><p><span m="3057660">PROFESSOR: 3.9</span>
  <span m="3058450">sounds</span> <span m="3058670">like</span> <span
  m="3058750">a</span> <span m="3058810">fine</span> <span
  m="3059120">number.</span> <span m="3060130">Wait,</span> <span
  m="3060700">what</span> <span m="3060840">did</span> <span
  m="3060930">you</span> <span m="3061030">vote</span> <span
  m="3061310">for</span> <span m="3061400">human</span> <span
  m="3061650">and</span> <span m="3061780">chimpanzee?</span> <span
  m="3062350">You're</span> <span m="3062450">very</span> <span
  m="3062700">specific</span> <span m="3063210">on</span> <span
  m="3063310">this</span> <span m="3063470">one.</span></p><p><span
  m="3064870">AUDIENCE: I actually</span> <span m="3065308">voted for</span>
  <span m="3065746">3.5</span> <span m="3066184">times</span> <span
  m="3066622">[INAUDIBLE].</span></p><p><span m="3067940">PROFESSOR: OK,</span>
  <span m="3068370">all</span> <span m="3068420">right.</span> <span
  m="3068550">So</span> <span m="3068620">you're--</span> <span
  m="3069850">you</span> <span m="3069990">want</span> <span
  m="3070110">to</span> <span m="3070150">get</span> <span
  m="3070280">involved</span> <span m="3070560">in</span> <span
  m="3070610">this</span> <span m="3070760">actual</span> <span
  m="3070970">debate.</span> <span m="3071360">OK,</span> <span
  m="3071380">that's</span> <span m="3071570">why.</span> <span
  m="3073300">I</span> <span m="3073430">just</span> <span
  m="3073540">want</span> <span m="3073670">to--</span> <span
  m="3075540">yeah,</span> <span m="3075730">now</span> <span
  m="3075900">I'm</span> <span m="3076040">going</span> <span
  m="3076260">to</span> <span m="3076340">be</span> <span
  m="3076430">stuck</span> <span m="3076780">doing</span> <span
  m="3076890">the</span> <span m="3076970">linear and</span> <span
  m="3077350">logarithmic</span> <span m="3078150">scaling</span> <span
  m="3078610">of</span> <span m="3078700">how</span> <span m="3078950">I</span>
  <span m="3079020">want</span> <span m="3080220">to--</span> <span
  m="3082520">this</span> <span m="3082750">is</span> <span
  m="3082860">going</span> <span m="3082980">to</span> <span
  m="3083030">some</span> <span m="3083500">sort</span> <span
  m="3083730">of</span> <span m="3083800">funny</span> <span
  m="3084030">logarithmic</span> <span m="3084490">scaling</span> <span
  m="3084750">from</span> <span m="3084880">here</span> <span
  m="3085030">to</span> <span m="3085130">here.</span></p><p><span
  m="3087350">So</span> <span m="3087530">dinosaurs--</span> <span
  m="3092040">all</span> <span m="3092100">right,</span> <span
  m="3092680">60</span> <span m="3093510">some</span> <span
  m="3094310">million</span> <span m="3094635">years</span> <span
  m="3094960">ago.</span> <span m="3095830">Right,</span> <span
  m="3096540">so,</span> <span m="3097370">say</span> <span
  m="3097540">bye</span> <span m="3097855">to</span> <span
  m="3098170">the</span> <span m="3098280">dinosaurs.</span> <span
  m="3101050">Dinosaurs.</span> <span m="3105320">[INAUDIBLE]</span></p><p><span
  m="3107296">AUDIENCE: [INAUDIBLE]</span></p><p><span m="3109766">PROFESSOR:
  [INAUDIBLE]</span> <span m="3110260">explosion</span> <span
  m="3110510">was</span> <span m="3110800">before</span> <span
  m="3111180">that.</span> <span m="3113030">Yeah,</span> <span
  m="3113240">I</span> <span m="3113380">don't--</span> <span
  m="3114840">OK,</span> <span m="3115080">it's--</span> <span
  m="3116190">OK,</span> <span m="3116720">all</span> <span
  m="3116800">right.</span> <span m="3119010">All right,</span> <span
  m="3119070">so</span> <span m="3119160">this</span> <span
  m="3119320">is</span> <span m="3119380">around</span> <span
  m="3119910">human</span> <span m="3120250">chimp.</span> <span
  m="3122250">And</span> <span m="3122380">indeed,</span> <span
  m="3122740">people</span> <span m="3123040">argue</span> <span
  m="3123440">about</span> <span m="3124350">whether</span> <span
  m="3124660">it's</span> <span m="3125240">five</span> <span
  m="3125690">or</span> <span m="3125770">10.</span> <span
  m="3127160">But</span> <span m="3128200">you know,</span> <span
  m="3128390">given</span> <span m="3128720">that</span> <span
  m="3129040">we</span> <span m="3129190">were</span> <span
  m="3129280">uniformly</span> <span m="3129830">distributed</span> <span
  m="3130320">across</span> <span m="3131360">this</span> <span
  m="3132470">number,</span> <span m="3132890">we</span> <span
  m="3132980">shouldn't</span> <span m="3134240">be</span> <span
  m="3134610">nit</span> <span m="3134800">picky</span> <span
  m="3135050">about</span> <span m="3135190">the</span> <span
  m="3135780">left</span> <span m="3136000">one.</span></p><p><span
  m="3139020">Right,</span> <span m="3139270">OK.</span> <span
  m="3140550">And</span> <span m="3140770">agriculture</span> <span
  m="3142600">was</span> <span m="3143210">maybe</span> <span
  m="3143520">12,000</span> <span m="3144080">years</span> <span
  m="3144260">ago.</span> <span m="3145730">Some</span> <span
  m="3145990">sense</span> <span m="3146300">of</span> <span
  m="3146370">things.</span></p><p><span m="3147754">AUDIENCE: B is</span> <span
  m="3148251">good for</span> <span m="3148748">human and</span> <span
  m="3149742">Neanderthal,</span> <span m="3150239">and</span> <span
  m="3150736">homo</span> <span m="3151233">erectus.</span></p><p><span
  m="3151730">PROFESSOR: Yeah,</span> <span m="3152020">human and</span> <span
  m="3152510">Neanderthals,</span> <span m="3153590">right.</span> <span
  m="3153830">That's--</span> <span m="3157280">70,</span> <span
  m="3157720">OK,</span> <span m="3157820">let's say</span> <span
  m="3157990">yeah.</span> <span m="3158590">This</span> <span
  m="3158750">is</span> <span m="3158840">when--</span> <span
  m="3159950">right.</span></p><p><span m="3160245">AUDIENCE: Common</span>
  <span m="3160540">ancestor</span> <span m="3160850">was</span> <span
  m="3161080">definitely</span> <span
  m="3161320">[INAUDIBLE].</span></p><p><span m="3161750">PROFESSOR: Oh,</span>
  <span m="3161870">common</span> <span m="3162110">ancestor was</span> <span
  m="3162550">before.</span> <span m="3162940">But</span> <span
  m="3163060">in</span> <span m="3163190">terms</span> <span
  m="3163400">of</span> <span m="3163460">interbreeding,</span> <span
  m="3164090">was</span> <span m="3164250">sort--</span> <span
  m="3165450">all</span> <span m="3165520">right.</span> <span
  m="3165810">So</span> <span m="3165980">this</span> <span
  m="3166120">was</span> <span m="3166260">the</span> <span
  m="3166860">interbreeding,</span> <span m="3167520">if</span> <span
  m="3167580">you</span> <span m="3167650">want</span> <span
  m="3167740">to</span> <span m="3167790">read</span> <span
  m="3167950">that</span> <span m="3168190">paper.</span> <span
  m="3173450">But</span> <span m="3173580">human</span> <span
  m="3173690">chimp</span> <span m="3174460">is</span> <span
  m="3174770">here.</span> <span m="3177592">Around</span> <span
  m="3178030">seven million</span> <span m="3178420">years.</span></p><p><span
  m="3178930">And</span> <span m="3179590">it's</span> <span m="3179720">not
  that</span> <span m="3179930">this</span> <span m="3180390">is</span> <span
  m="3180780">the</span> <span m="3180900">number</span> <span
  m="3181300">that's</span> <span m="3181480">magical,</span> <span
  m="3181900">that you</span> <span m="3182060">have to</span> <span
  m="3182180">memorize.</span> <span m="3182500">But</span> <span
  m="3182600">I</span> <span m="3182660">think</span> <span
  m="3182840">that</span> <span m="3183560">you</span> <span
  m="3184380">should</span> <span m="3184740">have</span> <span
  m="3185970">some</span> <span m="3186390">event</span> <span
  m="3186870">in</span> <span m="3187030">the</span> <span
  m="3187130">history</span> <span m="3187390">of</span> <span
  m="3187490">the</span> <span m="3187590">world</span> <span
  m="3188640">at</span> <span m="3188790">each</span> <span
  m="3189040">logarithmic</span> <span m="3189640">spacing.</span> <span
  m="3190820">Just</span> <span m="3191020">so</span> <span m="3191140">that
  you--</span> <span m="3192920">when</span> <span m="3193010">you</span> <span
  m="3193090">hear</span> <span m="3193680">about</span> <span
  m="3193890">when</span> <span m="3194010">something</span> <span
  m="3194220">happened</span> <span m="3194570">you know</span> <span
  m="3194875">kind</span> <span m="3195180">of</span> <span
  m="3195400">vaguely</span> <span m="3195710">where</span> <span
  m="3195840">to</span> <span m="3195920">put--</span> <span
  m="3196590">where</span> <span m="3196760">to</span> <span
  m="3196820">put</span> <span m="3196980">something.</span></p><p><span
  m="3199580">Otherwise</span> <span m="3199900">it</span> <span
  m="3199960">just</span> <span m="3200080">doesn't</span> <span
  m="3200270">mean</span> <span m="3200530">anything.</span> <span
  m="3204210">One</span> <span m="3204420">of</span> <span m="3204460">my</span>
  <span m="3204580">favorite</span> <span m="3204890">examples</span> <span
  m="3205550">of</span> <span m="3206230">how</span> <span
  m="3206390">the</span> <span m="3206460">molecular</span> <span
  m="3206800">clock</span> <span m="3207150">was</span> <span
  m="3207270">used</span> <span m="3207660">to</span> <span
  m="3208040">come</span> <span m="3208210">up</span> <span
  m="3208310">with</span> <span m="3208400">something</span> <span
  m="3209520">that</span> <span m="3209820">I</span> <span
  m="3209960">think</span> <span m="3210090">is</span> <span
  m="3210400">pretty</span> <span m="3210840">neat</span> <span
  m="3211110">and</span> <span m="3211160">nontrivial,</span> <span
  m="3212040">is</span> <span m="3212250">to</span> <span m="3212350">try</span>
  <span m="3212470">to</span> <span m="3212530">answer</span> <span
  m="3212720">this</span> <span m="3212830">question</span> <span
  m="3213140">of</span> <span m="3213470">when</span> <span
  m="3213670">humans</span> <span m="3214010">started</span> <span
  m="3214270">wearing</span> <span m="3214480">clothing.</span></p><p><span
  m="3216070">So</span> <span m="3216180">this</span> <span
  m="3216320">is,</span> <span m="3218980">a</span> <span
  m="3219090">priori,</span> <span m="3219460">not</span> <span
  m="3219660">very</span> <span m="3219850">obvious.</span> <span
  m="3220330">Right?</span> <span m="3220550">Because</span> <span
  m="3220920">we</span> <span m="3221450">know</span> <span
  m="3221690">we</span> <span m="3222040">have</span> <span
  m="3222200">evidence</span> <span m="3222760">for</span> <span
  m="3223100">clothing</span> <span m="3224800">maybe</span> <span
  m="3225200">30,000</span> <span m="3225850">years</span> <span
  m="3226040">ago.</span> <span m="3227070">And</span> <span
  m="3227470">there</span> <span m="3227770">are</span> <span
  m="3228070">needles</span> <span m="3228680">that</span> <span
  m="3228760">were</span> <span m="3228900">used</span> <span
  m="3229860">for</span> <span m="3230030">clothing.</span> <span
  m="3231250">There</span> <span m="3231520">were--</span> <span
  m="3233280">and</span> <span m="3233460">some</span> <span
  m="3233590">of</span> <span m="3233630">these</span> <span
  m="3234450">little</span> <span m="3234640">figurines,</span> <span
  m="3235970">at least</span> <span m="3236120">some</span> <span
  m="3236430">fraction</span> <span m="3237180">of the</span> <span
  m="3238740">figurines,</span> <span m="3239380">like</span> <span
  m="3239520">fertility</span> <span m="3240060">goddess</span> <span
  m="3240410">kind</span> <span m="3240530">of</span> <span
  m="3240590">thing,</span> <span m="3240790">some</span> <span
  m="3240980">fraction of</span> <span m="3241310">them</span> <span
  m="3241420">have</span> <span m="3241560">some</span> <span
  m="3241760">clothing,</span> <span m="3242035">right?</span> <span
  m="3242940">So</span> <span m="3243080">then</span> <span
  m="3243880">it</span> <span m="3244100">suggests that</span> <span
  m="3244420">there</span> <span m="3244610">were</span> <span
  m="3245030">clothes.</span> <span m="3246090">But</span> <span
  m="3246110">the</span> <span m="3246190">question</span> <span
  m="3246480">is,</span> <span m="3247030">before</span> <span
  m="3247430">that</span> <span m="3247590">it's</span> <span
  m="3247680">actually</span> <span m="3247940">rather</span> <span
  m="3248150">difficult</span> <span m="3248450">to</span> <span
  m="3248530">know</span> <span m="3249520">when</span> <span
  m="3249840">we</span> <span m="3250060">started</span> <span
  m="3250270">wearing</span> <span m="3250440">clothes,</span> <span
  m="3250790">right?</span> <span m="3251950">Apparently,</span> <span
  m="3254200">we</span> <span m="3254430">lost</span> <span
  m="3255960">our</span> <span m="3256560">body</span> <span
  m="3256910">hair</span> <span m="3257460">something</span> <span
  m="3257700">like</span> <span m="3257790">a</span> <span
  m="3257840">million</span> <span m="3258130">years</span> <span
  m="3258270">ago.</span> <span m="3259030">So you might</span> <span
  m="3259190">say, oh,</span> <span m="3259610">maybe</span> <span
  m="3260080">that's</span> <span m="3260330">around</span> <span
  m="3260780">when</span> <span m="3261020">we</span> <span
  m="3261140">started</span> <span m="3262150">wearing</span> <span
  m="3262570">clothes.</span> <span m="3262840">Of</span> <span
  m="3262900">course</span> <span m="3263090">a</span> <span
  m="3263140">lot</span> <span m="3263350">of</span> <span
  m="3263960">animal</span> <span m="3264320">hide</span> <span m="3264610">and
  so forth</span> <span m="3265050">wouldn't</span> <span
  m="3265960">last.</span> <span m="3266510">So</span> <span
  m="3266700">there's</span> <span m="3266870">not</span> <span
  m="3267040">any</span> <span m="3267280">archaeological</span> <span
  m="3268050">evidence</span> <span m="3268440">of this.</span></p><p><span
  m="3271010">And</span> <span m="3271190">so</span> <span m="3271990">is</span>
  <span m="3272140">anybody</span> <span m="3272430">aware</span> <span
  m="3272780">of</span> <span m="3274680">how</span> <span
  m="3275220">researchers</span> <span m="3275940">have</span> <span
  m="3276060">used the</span> <span m="3276350">molecular</span> <span
  m="3276730">clock</span> <span m="3277060">ideas</span> <span
  m="3277490">in</span> <span m="3277570">order</span> <span
  m="3277760">to</span> <span m="3277850">try</span> <span m="3278020">to</span>
  <span m="3278570">answer</span> <span m="3278800">this</span> <span
  m="3278930">question?</span></p><p><span m="3297452">AUDIENCE:</span> <span
  m="3297944">[INAUDIBLE]</span></p><p><span m="3303848">PROFESSOR:</span> <span
  m="3304340">Yeah,</span> <span m="3305160">this</span> <span
  m="3305330">is</span> <span m="3305410">amazing.</span> <span
  m="3307880">So</span> <span m="3308600">you</span> <span
  m="3308750">use</span> <span m="3309690">lice.</span> <span m="3310455">There
  have</span> <span m="3310800">been a</span> <span m="3310850">number</span>
  <span m="3311130">of</span> <span m="3311190">studies</span> <span
  m="3312380">doing</span> <span m="3312580">this,</span> <span
  m="3313050">and</span> <span m="3313480">apparently,</span> <span
  m="3315390">there</span> <span m="3315500">was</span> <span
  m="3315600">a</span> <span m="3315680">researcher</span> <span
  m="3316310">in</span> <span m="3316440">Germany,</span> <span
  m="3317170">who</span> <span m="3317650">was</span> <span
  m="3317770">at</span> <span m="3317840">the</span> <span
  m="3318250">Max</span> <span m="3318550">Planck</span> <span
  m="3318740">Institute</span> <span m="3319610">for</span> <span
  m="3320550">genomics</span> <span m="3320980">or</span> <span
  m="3321050">something,</span> <span m="3323000">and</span> <span
  m="3323080">his</span> <span m="3323420">son</span> <span
  m="3323810">came</span> <span m="3324060">home</span> <span
  m="3324760">with</span> <span m="3325170">a</span> <span
  m="3325280">note</span> <span m="3326530">saying--</span> <span
  m="3326860">and</span> <span m="3327110">actually</span> <span
  m="3327280">this</span> <span m="3327400">happened</span> <span
  m="3327810">to</span> <span m="3327900">me</span> <span
  m="3328250">recently,</span> <span m="3328790">they</span> <span
  m="3328960">got an</span> <span m="3329220">email</span> <span
  m="3329640">that</span> <span m="3329810">there's</span> <span
  m="3330170">a</span> <span m="3330230">lice</span> <span
  m="3330450">outbreak</span> <span m="3331850">to stay</span> <span
  m="3332180">out of</span> <span m="3332250">preschool,</span> <span
  m="3332660">so</span> <span m="3332780">watch</span> <span
  m="3333060">out</span> <span m="3333340">when</span> <span
  m="3333510">you're</span> <span m="3333610">going</span> <span
  m="3333820">by</span> <span m="3334000">the</span> <span
  m="3334160">play</span> <span m="3334350">area--</span> <span
  m="3336560">so</span> <span m="3336760">he</span> <span m="3337210">got</span>
  <span m="3337390">this</span> <span m="3337500">note</span> <span
  m="3337740">back</span> <span m="3338010">from</span> <span
  m="3338130">his</span> <span m="3339200">son's</span> <span
  m="3339640">preschool</span> <span m="3340200">that</span> <span
  m="3340290">said,</span> <span m="3340470">oh</span> <span
  m="3340640">yeah,</span> <span m="3340950">there's</span> <span
  m="3341170">a</span> <span m="3341220">lice</span> <span
  m="3341520">outbreak,</span> <span m="3342030">so</span> <span
  m="3342150">this</span> <span m="3342330">is</span> <span
  m="3342410">what</span> <span m="3342580">you have to</span> <span
  m="3342840">watch out for.</span></p><p><span m="3343240">But</span> <span
  m="3343360">it</span> <span m="3343560">said,</span> <span
  m="3343720">oh,</span> <span m="3343850">there's</span> <span
  m="3344350">a</span> <span m="3344420">different</span> <span
  m="3345440">species</span> <span m="3346040">of</span> <span
  m="3346140">lice</span> <span m="3347120">that</span> <span
  m="3347800">inhabits</span> <span m="3348230">our</span> <span
  m="3348340">clothing</span> <span m="3349470">as</span> <span
  m="3349680">our</span> <span m="3349780">hair.</span> <span m="3352260">All
  right,</span> <span m="3352400">so</span> <span m="3352650">I'd</span> <span
  m="3353640">say</span> <span m="3353900">this</span> <span
  m="3354150">is</span> <span m="3354220">one</span> <span m="3354350">of</span>
  <span m="3354390">those</span> <span m="3354580">things</span> <span
  m="3354980">that</span> <span m="3355480">you</span> <span
  m="3355570">could</span> <span m="3355680">just</span> <span
  m="3355790">read</span> <span m="3355970">that</span> <span m="3356190">and
  say, oh,</span> <span m="3356410">well</span> <span
  m="3356700">whatever.</span> <span m="3357420">Or</span> <span
  m="3357940">if</span> <span m="3358040">you're</span> <span
  m="3358210">a</span> <span m="3358260">geneticist</span> <span
  m="3358800">you</span> <span m="3358890">read</span> <span m="3359000">that
  and say,</span> <span m="3359230">oh,</span> <span m="3360370">I</span> <span
  m="3360470">can</span> <span m="3360610">use</span> <span
  m="3360800">this</span> <span m="3361040">to</span> <span m="3361140">figure
  out</span> <span m="3362810">when</span> <span m="3363010">humans</span> <span
  m="3363340">started</span> <span m="3363630">wearing</span> <span
  m="3363850">clothes,</span> <span m="3364250">right?</span> <span
  m="3364420">Because</span> <span m="3365100">presumably</span> <span
  m="3365660">the</span> <span m="3366600">species</span> <span
  m="3367810">that</span> <span m="3368170">specializes</span> <span
  m="3368880">in</span> <span m="3368970">living</span> <span
  m="3370130">in</span> <span m="3370240">our</span> <span
  m="3370320">clothing</span> <span m="3371060">was</span> <span
  m="3371610">probably</span> <span m="3372340">not</span> <span
  m="3373620">there</span> <span m="3373960">or</span> <span
  m="3374080">had</span> <span m="3374220">not</span> <span
  m="3374410">yet</span> <span m="3374940">speciated</span> <span
  m="3376540">before</span> <span m="3376910">we</span> <span
  m="3377010">had</span> <span m="3377090">clothes.</span></p><p><span
  m="3377880">Course,</span> <span m="3378310">you</span> <span
  m="3378420">can</span> <span m="3378500">imagine</span> <span
  m="3378870">ways</span> <span m="3379200">that</span> <span
  m="3379270">this</span> <span m="3379380">could</span> <span
  m="3379510">fail,</span> <span m="3379800">but</span> <span
  m="3380250">it's</span> <span m="3380390">a</span> <span
  m="3380450">neat</span> <span m="3381930">hypothesis.</span> <span
  m="3383530">So</span> <span m="3383660">then</span> <span m="3383800">you
  can</span> <span m="3383890">go</span> <span m="3384230">and you</span> <span
  m="3384380">can</span> <span m="3384650">basically</span> <span
  m="3385160">sequence</span> <span m="3386420">the</span> <span
  m="3386840">species</span> <span m="3387200">of</span> <span
  m="3387290">lice</span> <span m="3388940">that</span> <span m="3389090">lives
  in</span> <span m="3389320">our</span> <span m="3389430">clothing</span> <span
  m="3389760">as</span> <span m="3389940">compared</span> <span
  m="3390140">to</span> <span m="3390210">the</span> <span
  m="3390530">kind</span> <span m="3390780">that</span> <span
  m="3390860">lives</span> <span m="3391430">in</span> <span
  m="3391550">our</span> <span m="3391660">hair,</span> <span
  m="3391990">and</span> <span m="3392090">you</span> <span
  m="3392190">can</span> <span m="3392290">ask,</span> <span
  m="3392570">how</span> <span m="3392730">many</span> <span
  m="3392900">neutral</span> <span m="3393500">mutations</span> <span
  m="3394050">accumulated</span> <span m="3395260">along</span> <span
  m="3395600">these</span> <span m="3395760">different</span> <span
  m="3395980">lineages.</span></p><p><span m="3397820">Now,</span> <span
  m="3399020">you</span> <span m="3399130">can</span> <span
  m="3399240">imagine</span> <span m="3399670">that</span> <span
  m="3400000">based</span> <span m="3400280">on,</span> <span
  m="3400500">since</span> <span m="3400640">we</span> <span
  m="3400740">just</span> <span m="3400950">did</span> <span
  m="3401090">this</span> <span m="3401230">very</span> <span
  m="3401400">nice</span> <span m="3402230">study,</span> <span
  m="3403090">we</span> <span m="3403260">know</span> <span
  m="3403490">that</span> <span m="3403630">it</span> <span
  m="3404430">should</span> <span m="3404560">be</span> <span
  m="3404660">more</span> <span m="3405180">than</span> <span
  m="3405510">30,000</span> <span m="3406760">years</span> <span m="3407590">and
  it</span> <span m="3407810">should</span> <span m="3407920">be</span> <span
  m="3408020">less</span> <span m="3408440">than</span> <span
  m="3410060">7</span> <span m="3410380">million,</span> <span
  m="3411360">probably,</span> <span m="3411850">hopefully.</span> <span
  m="3413530">Although,</span> <span m="3414060">it's</span> <span
  m="3414150">always</span> <span m="3414330">possible</span> <span
  m="3414830">that</span> <span m="3415120">our</span> <span
  m="3415310">ancestral</span> <span m="3415800">state</span> <span
  m="3416040">was</span> <span m="3416130">wearing</span> <span
  m="3416340">clothes</span> <span m="3416790">and that</span> <span
  m="3416990">the</span> <span m="3417070">chimpanzees</span> <span
  m="3417550">stopped</span> <span m="3417930">wearing</span> <span
  m="3418090">clothes.</span> <span m="3420200">But</span> <span
  m="3421130">we'd</span> <span m="3421270">be</span> <span
  m="3421420">surprised</span> <span m="3422150">if</span> <span
  m="3422230">that</span> <span m="3422380">were</span> <span
  m="3422450">the</span> <span m="3422530">case.</span> <span m="3426100">All
  right,</span> <span m="3426220">so</span> <span m="3426280">this</span> <span
  m="3426820">is</span> <span m="3426950">basically</span> <span
  m="3427330">just</span> <span m="3427550">asking</span> <span
  m="3427940">about</span> <span m="3429380">head</span> <span
  m="3429825">lice</span> <span m="3432620">versus</span> <span
  m="3433470">clothing</span> <span m="3433900">lice.</span> <span
  m="3436370">And</span> <span m="3437160">the</span> <span
  m="3437480">original</span> <span m="3437830">study</span> <span
  m="3438160">by</span> <span m="3438340">this</span> <span
  m="3438650">researcher</span> <span m="3439140">Max</span> <span
  m="3439390">Planck</span> <span m="3439760">estimated</span> <span
  m="3440220">70,000</span> <span m="3440950">years,</span> <span
  m="3441610">but</span> <span m="3441750">then</span> <span
  m="3442090">just</span> <span m="3442310">a</span> <span
  m="3442410">couple</span> <span m="3442510">years</span> <span
  m="3442680">ago</span> <span m="3442830">there</span> <span
  m="3442950">was</span> <span m="3443060">another</span> <span
  m="3443770">publication</span> <span m="3444430">from</span> <span
  m="3444610">a professor</span> <span m="3445570">at the</span> <span
  m="3445700">University</span> <span m="3446090">of</span> <span
  m="3446160">Florida</span> <span m="3446560">that</span> <span
  m="3446650">estimated</span> <span m="3447190">170,000.</span></p><p><span
  m="3448720">So</span> <span m="3450490">there</span> <span
  m="3450620">still</span> <span m="3450920">is</span> <span
  m="3451010">a</span> <span m="3451070">fair</span> <span
  m="3451310">range,</span> <span m="3451640">but</span> <span
  m="3451730">I</span> <span m="3451810">guess</span> <span
  m="3452000">the</span> <span m="3452080">most</span> <span
  m="3452390">recent</span> <span m="3452660">estimate</span> <span
  m="3453480">we'd</span> <span m="3453620">have</span> <span
  m="3453790">to</span> <span m="3453900">say</span> <span m="3454030">is</span>
  <span m="3454340">170,000.</span> <span m="3462870">Which</span> <span
  m="3462950">is</span> <span m="3463040">neat.</span> <span
  m="3463450">I</span> <span m="3463760">don't</span> <span
  m="3464260">know--</span> <span m="3465450">it's</span> <span
  m="3465800">not</span> <span m="3465990">that</span> <span
  m="3466080">it</span> <span m="3466190">changes,</span> <span
  m="3466760">necessarily,</span> <span m="3467190">how</span> <span
  m="3467740">I</span> <span m="3468180">go</span> <span
  m="3468350">about</span> <span m="3468620">my</span> <span
  m="3468790">daily</span> <span m="3469100">life,</span> <span
  m="3470330">but</span> <span m="3470750">I</span> <span
  m="3471880">really</span> <span m="3472080">love</span> <span
  m="3472310">this</span> <span m="3472470">idea</span> <span
  m="3472950">that</span> <span m="3474430">it's a very</span> <span
  m="3474560">basic</span> <span m="3474900">question</span> <span
  m="3475550">that</span> <span m="3476780">your</span> <span
  m="3477690">toddler</span> <span m="3477950">son</span> <span
  m="3478240">might</span> <span m="3478430">ask</span> <span
  m="3478680">you--</span> <span m="3479480">something</span> <span
  m="3479900">that</span> <span m="3480150">you'd</span> <span
  m="3480280">think</span> <span m="3480760">that</span> <span
  m="3481960">might</span> <span m="3482240">be</span> <span
  m="3482330">totally</span> <span m="3483360">unknowable</span> <span
  m="3484360">in</span> <span m="3484440">the</span> <span
  m="3484510">sense</span> <span m="3484730">that</span> <span
  m="3484880">we</span> <span m="3485010">would</span> <span
  m="3485130">never</span> <span m="3485440">have</span> <span
  m="3485610">any</span> <span m="3485830">way</span> <span
  m="3485970">of</span> <span m="3486060">getting</span> <span
  m="3486740">any</span> <span m="3486960">estimate</span> <span
  m="3487370">all,</span> <span m="3488210">right?</span> <span
  m="3488460">But</span> <span m="3489580">using</span> <span
  m="3491150">some</span> <span m="3492310">clever</span> <span
  m="3495400">theoretical</span> <span m="3495800">ideas</span> <span
  m="3496300">together</span> <span m="3496720">with</span> <span
  m="3499190">data</span> <span m="3499790">on</span> <span
  m="3500690">this</span> <span m="3501520">accumulation</span> <span
  m="3501785">of</span> <span m="3502050">neutral</span> <span
  m="3502350">mutations</span> <span m="3503110">allows</span> <span
  m="3503450">one</span> <span m="3503680">to</span> <span m="3503780">at</span>
  <span m="3503960">least</span> <span m="3504240">make</span> <span
  m="3504400">a</span> <span m="3504450">ballpark</span> <span
  m="3504900">estimate</span> <span m="3506270">of</span> <span
  m="3506420">something</span> <span m="3506860">that</span> <span
  m="3506920">there's</span> <span m="3507080">no</span> <span
  m="3507220">physical</span> <span m="3507630">record</span> <span
  m="3507940">of</span> <span m="3508510">except</span> <span
  m="3509540">in</span> <span m="3509670">the</span> <span
  m="3509740">DNA</span> <span m="3510140">of</span> <span
  m="3510370">our</span> <span m="3511320">louses.</span> <span
  m="3512435">Is</span> <span m="3512920">that a</span> <span
  m="3513190">word?</span></p><p><span m="3513940">AUDIENCE: It's</span> <span
  m="3514320">lice.</span></p><p><span m="3515080">PROFESSOR: It's just
  lice?</span> <span m="3515300">All right.</span> <span m="3519030">Are</span>
  <span m="3519290">there</span> <span m="3519440">any</span> <span
  m="3519870">questions</span> <span m="3520240">about</span> <span
  m="3520770">this</span> <span m="3521440">point?</span> <span
  m="3527700">So</span> <span m="3527920">this</span> <span
  m="3528580">is</span> <span m="3528690">all</span> <span
  m="3529050">neutral</span> <span m="3529600">mutation,</span> <span
  m="3529980">but</span> <span m="3530210">of</span> <span
  m="3530310">course</span> <span m="3530900">we'd</span> <span
  m="3531160">like</span> <span m="3531510">to</span> <span
  m="3532040">move</span> <span m="3532420">beyond</span> <span
  m="3533490">these</span> <span m="3533690">neutral</span> <span
  m="3533810">mutations</span> <span m="3534450">to</span> <span
  m="3534580">try</span> <span m="3534750">to</span> <span
  m="3534810">understand</span> <span m="3535760">how</span> <span
  m="3536860">non-neutral</span> <span m="3537100">mutations</span> <span
  m="3537990">spread.</span> <span m="3539340">I'm not going</span> <span
  m="3539590">to</span> <span m="3539640">do</span> <span m="3539740">the</span>
  <span m="3539830">derivation,</span> <span m="3540460">because</span> <span
  m="3541140">the</span> <span m="3541290">derivation</span> <span
  m="3541830">is</span> <span m="3542380">in</span> <span
  m="3542530">your</span> <span m="3542640">book,</span> <span
  m="3542990">and</span> <span m="3543210">you</span> <span
  m="3543290">just</span> <span m="3543470">read</span> <span
  m="3543600">about</span> <span m="3543780">it.</span> <span
  m="3544360">But</span> <span m="3545030">I</span> <span m="3545170">do</span>
  <span m="3545360">want</span> <span m="3545500">to just</span> <span
  m="3545630">make</span> <span m="3545790">sure that</span> <span
  m="3546000">we</span> <span m="3546120">understand</span> <span
  m="3546680">what</span> <span m="3546850">this</span> <span
  m="3547020">equation</span> <span m="3547500">is</span> <span
  m="3547620">telling</span> <span m="3547960">us.</span></p><p><span
  m="3550470">So</span> <span m="3550670">first</span> <span
  m="3550920">of</span> <span m="3550990">all</span> <span
  m="3551190">we're</span> <span m="3551370">going</span> <span
  m="3551450">to</span> <span m="3551560">assume</span> <span
  m="3551930">that</span> <span m="3554490">A</span> <span
  m="3554990">has</span> <span m="3555490">some</span> <span
  m="3555700">relative</span> <span m="3556040">fitness</span> <span
  m="3557300">r.</span> <span m="3557930">So</span> <span m="3558100">r</span>
  <span m="3558330">is</span> <span m="3558420">defined</span> <span
  m="3558760">as</span> <span m="3558870">basically</span> <span
  m="3559180">the</span> <span m="3559290">relative</span> <span
  m="3559770">fitness of</span> <span m="3559850">of</span> <span
  m="3560030">A,</span> <span m="3561250">or</span> <span m="3561350">the</span>
  <span m="3561460">fitness of</span> <span m="3561530">A</span> <span
  m="3561860">divided by</span> <span m="3562160">the</span> <span
  m="3562580">fitness</span> <span m="3562870">of</span> <span
  m="3562950">B.</span> <span m="3564450">So</span> <span m="3564670">r</span>
  <span m="3565000">is</span> <span m="3565120">greater</span> <span
  m="3565420">than</span> <span m="3565530">1</span> <span m="3565770">means
  that</span> <span m="3565970">A</span> <span m="3566210">is</span> <span
  m="3566400">advantageous.</span> <span m="3567460">Less</span> <span
  m="3567680">than</span> <span m="3567790">1</span> <span
  m="3567990">means</span> <span m="3568580">it's</span> <span
  m="3569450">deleterious.</span> <span m="3571990">And</span> <span
  m="3573470">what</span> <span m="3573680">we're</span> <span
  m="3573830">told</span> <span m="3574420">is</span> <span
  m="3574590">that</span> <span m="3577710">x</span> <span
  m="3577960">sub</span> <span m="3578130">i,</span> <span
  m="3579330">which</span> <span m="3579570">is</span> <span
  m="3579790">the</span> <span m="3580310">probability</span> <span
  m="3582410">that</span> <span m="3582610">A</span> <span
  m="3582980">fixes,</span> <span m="3587820">is</span> <span
  m="3588020">equal</span> <span m="3588280">to</span> <span
  m="3589200">this</span> <span m="3589390">expression.</span> <span
  m="3598980">If</span> <span m="3599700">A fixes,</span> <span
  m="3600420">given</span> <span m="3603270">i</span> <span m="3604160">A</span>
  <span m="3604450">individuals</span> <span m="3606310">and</span> <span
  m="3606670">N</span> <span m="3606890">minus</span> <span m="3607310">i</span>
  <span m="3607970">B individuals.</span></p><p><span
  m="3608870">AUDIENCE:</span> <span m="3608980">So I guess</span> <span
  m="3609463">that this assumes</span> <span m="3609946">that</span> <span
  m="3610429">they</span> <span m="3610912">die at</span> <span
  m="3611395">the</span> <span m="3611878">same</span> <span m="3612361">rate
  [INAUDIBLE].</span></p><p><span m="3612850">PROFESSOR:</span> <span
  m="3613010">That's right.</span> <span m="3613850">That's</span> <span
  m="3614000">right.</span> <span m="3614210">The</span> <span
  m="3614540">assumption</span> <span m="3614980">is</span> <span
  m="3615060">that</span> <span m="3615210">we're</span> <span
  m="3615420">placement</span> <span m="3615890">is</span> <span
  m="3616410">unbiased,</span> <span m="3617110">purely</span> <span
  m="3617410">random,</span> <span m="3618490">and</span> <span
  m="3618620">it's</span> <span m="3618810">only</span> <span
  m="3619590">birth</span> <span m="3620330">that</span> <span
  m="3620480">is</span> <span m="3620620">different</span> <span
  m="3621250">by</span> <span m="3621420">a</span> <span
  m="3621520">factor</span> <span m="3621760">of</span> <span
  m="3621840">r.</span></p><p><span m="3624650">And so</span> <span
  m="3624820">I</span> <span m="3624870">think that</span> <span
  m="3625020">this</span> <span m="3625290">is,</span> <span
  m="3626010">on</span> <span m="3626170">one</span> <span
  m="3626310">level,</span> <span m="3627740">wonderful.</span> <span
  m="3628710">It's</span> <span m="3628840">kind</span> <span
  m="3628960">of</span> <span m="3629050">a</span> <span
  m="3629110">simple</span> <span m="3629650">expression</span> <span
  m="3631690">describing</span> <span m="3632410">a</span> <span
  m="3632510">lot</span> <span m="3632740">of</span> <span
  m="3632810">information</span> <span m="3633470">of</span> <span
  m="3633660">the</span> <span m="3633740">dynamics</span> <span
  m="3635010">of</span> <span m="3635260">the</span> <span
  m="3635350">stochastic</span> <span m="3635910">process.</span> <span
  m="3638720">On another</span> <span m="3639060">level,</span> <span
  m="3639710">the</span> <span m="3639750">problem</span> <span m="3640010">is
  that</span> <span m="3640150">you</span> <span m="3640320">look</span> <span
  m="3640520">at</span> <span m="3640580">it,</span> <span
  m="3640760">and</span> <span m="3641360">I</span> <span
  m="3641480">think</span> <span m="3641650">it's</span> <span
  m="3641790">easy</span> <span m="3641970">to</span> <span
  m="3642020">have</span> <span m="3642200">like</span> <span
  m="3642460">absolutely</span> <span m="3643020">zero</span> <span
  m="3643510">intuition</span> <span m="3644560">for</span> <span
  m="3644670">what</span> <span m="3644860">this</span> <span
  m="3645010">thing</span> <span m="3645170">does.</span> <span
  m="3647090">So</span> <span m="3647500">what</span> <span m="3647610">I</span>
  <span m="3647740">always</span> <span m="3647890">like</span> <span
  m="3648030">to</span> <span m="3648090">do</span> <span
  m="3650090">when</span> <span m="3650680">a</span> <span
  m="3650720">student</span> <span m="3651050">comes</span> <span
  m="3651570">to</span> <span m="3651640">my</span> <span
  m="3651750">office</span> <span m="3652110">and says,</span> <span
  m="3652300">oh</span> <span m="3652490">I</span> <span
  m="3652590">derived</span> <span m="3653130">something</span> <span
  m="3653750">great</span> <span m="3654160">for</span> <span
  m="3654260">our</span> <span m="3654370">project.</span> <span
  m="3655740">You</span> <span m="3655830">take</span> <span
  m="3656060">a</span> <span m="3656110">few</span> <span
  m="3656290">limits</span> <span m="3656940">to</span> <span
  m="3657690">get</span> <span m="3658440">a</span> <span
  m="3658530">sense</span> <span m="3658860">of</span> <span
  m="3658910">what's</span> <span m="3659100">going</span> <span
  m="3659350">on</span> <span m="3659510">with</span> <span
  m="3659630">it.</span> <span m="3660550">At</span> <span
  m="3660920">half-time</span> <span m="3661100">you</span> <span
  m="3661170">find that</span> <span m="3661380">it's</span> <span
  m="3661540">not</span> <span m="3661670">true.</span> <span
  m="3662360">But</span> <span m="3663390">at</span> <span
  m="3663450">least</span> <span m="3663800">it's</span> <span
  m="3664040">a</span> <span m="3664100">way</span> <span m="3664290">of</span>
  <span m="3664620">developing</span> <span m="3665000">intuition</span> <span
  m="3665650">for</span> <span m="3666410">what's</span> <span
  m="3666570">happening.</span></p><p><span m="3667210">All right,</span> <span
  m="3667350">so</span> <span m="3667390">what are</span> <span
  m="3668030">limits</span> <span m="3668470">that</span> <span
  m="3669260">this</span> <span m="3669520">thing</span> <span
  m="3669810">should</span> <span m="3670570">behave--</span></p><p><span
  m="3673946">AUDIENCE: It should</span> <span m="3674442">be</span> <span
  m="3674938">0</span> <span m="3675434">if  there's</span> <span
  m="3675930">no</span> <span m="3676426">A.</span></p><p><span
  m="3679450">PROFESSOR: Right,</span> <span m="3679640">so</span> <span
  m="3680010">x</span> <span m="3681580">of</span> <span m="3681770">0</span>
  <span m="3682590">should</span> <span m="3682860">be</span> <span
  m="3683040">equal</span> <span m="3683370">to</span> <span
  m="3684800">0,</span> <span m="3685510">is</span> <span m="3685610">what
  you're</span> <span m="3685770">saying.</span> <span m="3687260">If you</span>
  <span m="3687620">have</span> <span m="3687780">0</span> <span
  m="3688130">individuals,</span> <span m="3688770">you</span> <span
  m="3688850">should</span> <span m="3688970">have</span> <span
  m="3689110">0</span> <span m="3689520">probability</span> <span
  m="3689805">of</span> <span m="3690090">fixing,</span> <span
  m="3690820">independent</span> <span m="3691440">of</span> <span
  m="3691570">your</span> <span m="3691660">fitness,</span> <span
  m="3692080">right?</span> <span m="3695780">All right,</span> <span
  m="3696040">that</span> <span m="3696180">sounds</span> <span
  m="3696440">like</span> <span m="3696580">a</span> <span
  m="3696660">reasonable</span> <span m="3697010">thing</span> <span
  m="3697160">to</span> <span m="3697220">check.</span> <span
  m="3699240">And</span> <span m="3700260">does</span> <span
  m="3700410">it</span> <span m="3700470">work?</span> <span
  m="3702160">So</span> <span m="3702560">r</span> <span m="3703090">to</span>
  <span m="3703190">the</span> <span m="3703300">0</span> <span
  m="3703700">is</span> <span m="3703770">equal</span> <span
  m="3703890">to</span> <span m="3703970">1.</span> <span m="3704590">So</span>
  <span m="3704710">that's</span> <span m="3704840">1,</span> <span
  m="3705450">so</span> <span m="3705600">it's</span> <span m="3705690">1</span>
  <span m="3705890">minus</span> <span m="3706100">1--</span> <span
  m="3706470">0.</span> <span m="3707750">Yep.</span> <span
  m="3710565">Yes?</span></p><p><span m="3711555">AUDIENCE:</span> <span
  m="3712050">r goes to</span> <span m="3712545">infinity</span> <span
  m="3713040">independently</span> <span m="3714030">of</span> <span
  m="3714525">what you</span> <span m="3715020">start with</span> <span
  m="3715515">in step zero,</span> <span m="3716010">then</span> <span
  m="3716505">you expect</span> <span m="3717495">A</span> <span m="3717990">to
  fix?</span></p><p><span m="3719000">PROFESSOR: That's</span> <span
  m="3719210">right.</span> <span m="3719560">So</span> <span
  m="3719730">the</span> <span m="3719870">limit</span> <span
  m="3721825">of</span> <span m="3722260">xi</span> <span m="3723860">for</span>
  <span m="3724510">any</span> <span m="3724740">i other</span> <span
  m="3725000">than</span> <span m="3725240">0--</span> <span
  m="3726090">as</span> <span m="3726340">r</span> <span m="3726790">goes</span>
  <span m="3727100">to</span> <span m="3727200">infinity,</span> <span
  m="3729250">this</span> <span m="3729430">should</span> <span
  m="3729590">be</span> <span m="3729720">equal</span> <span
  m="3730000">to</span> <span m="3730250">1.</span> <span m="3736240">All
  right,</span> <span m="3736450">so</span> <span m="3736620">let's</span> <span
  m="3736900">see.</span> <span m="3738400">If</span> <span m="3738550">r</span>
  <span m="3739410">goes</span> <span m="3739690">to</span> <span
  m="3739770">infinity,</span> <span m="3741110">you</span> <span
  m="3741210">get</span> <span m="3741370">0--</span> <span
  m="3746940">this</span> <span m="3747080">is</span> <span
  m="3747180">also</span> <span m="3748070">0--</span> <span
  m="3749000">1</span> <span m="3749395">divided by 1</span> <span
  m="3749790">is</span> <span m="3749870">equal</span> <span
  m="3749990">to</span> <span m="3750060">1--</span> <span m="3750940">all
  right.</span> <span m="3754370">Did everybody</span> <span
  m="3754750">agree</span> <span m="3754970">with</span> <span
  m="3755040">that?</span></p><p><span m="3759410">And</span> <span
  m="3759560">that</span> <span m="3759680">makes</span> <span
  m="3759830">sense</span> <span m="3760040">just</span> <span
  m="3760210">that</span> <span m="3760940">if</span> <span m="3762030">A</span>
  <span m="3762270">is</span> <span m="3762370">just</span> <span
  m="3762570">super,</span> <span m="3763120">super</span> <span
  m="3763310">fit,</span> <span m="3764140">then</span> <span
  m="3764290">it</span> <span m="3764420">should fix.</span> <span
  m="3767590">And</span> <span m="3768040">of</span> <span
  m="3768080">course,</span> <span m="3768440">what's</span> <span
  m="3768500">tricky</span> <span m="3768770">here</span> <span
  m="3769010">is</span> <span m="3769110">that</span> <span m="3770380">r</span>
  <span m="3770720">has</span> <span m="3770900">to</span> <span
  m="3771030">be</span> <span m="3771180">surprisingly</span> <span
  m="3771930">large</span> <span m="3772570">before</span> <span
  m="3772850">this</span> <span m="3772970">thing</span> <span
  m="3773120">ends</span> <span m="3773260">up</span> <span
  m="3773380">being</span> <span m="3773570">true.</span> <span
  m="3776170">This</span> <span m="3777020">limit</span> <span
  m="3777360">is</span> <span m="3777880">great,</span> <span
  m="3778370">and</span> <span m="3778510">it's</span> <span
  m="3778920">correct</span> <span m="3779450">and</span> <span
  m="3779580">true,</span> <span m="3780380">but</span> <span
  m="3780520">it's</span> <span m="3780620">also</span> <span
  m="3780920">a</span> <span m="3780990">little</span> <span
  m="3781110">bit</span> <span m="3781270">dangerous</span> <span
  m="3781870">because--</span> <span m="3784620">well</span> <span
  m="3784850">we'll</span> <span m="3785230">see</span> <span
  m="3785530">that</span> <span m="3786020">even</span> <span
  m="3786410">things</span> <span m="3786660">that</span> <span
  m="3786720">you</span> <span m="3786810">think</span> <span
  m="3787000">of</span> <span m="3787070">as</span> <span
  m="3787150">being</span> <span m="3787340">very</span> <span
  m="3787770">beneficial</span> <span m="3788140">mutations</span> <span
  m="3789160">typically</span> <span m="3790390">do</span> <span
  m="3790510">not</span> <span m="3790780">fix.</span> <span
  m="3791310">So</span> <span m="3791360">this</span> <span
  m="3792420">is</span> <span m="3792540">the</span> <span
  m="3792640">danger,</span> <span m="3792950">but</span> <span
  m="3793400">at</span> <span m="3793500">least</span> <span
  m="3794490">the</span> <span m="3794840">limit</span> <span
  m="3795050">is</span> <span m="3795110">still</span> <span
  m="3795250">true.</span> <span m="3797690">Any</span> <span
  m="3797880">other</span> <span m="3798130">limits</span> <span
  m="3798450">that</span> <span m="3798540">we</span> <span
  m="3798650">think</span> <span m="3799430">ought</span> <span
  m="3799560">to</span> <span m="3799610">happen?</span></p><p><span
  m="3800560">AUDIENCE: If</span> <span m="3801020">an i</span> <span
  m="3801480">goes to</span> <span m="3801940">N?</span></p><p><span
  m="3803780">PROFESSOR:  An i</span> <span m="3804040">goes</span> <span
  m="3804200">to</span> <span m="3804560">N?</span> <span m="3804620">OK,</span>
  <span m="3804710">right.</span> <span m="3807040">This</span> <span
  m="3807180">is</span> <span m="3807290">the</span> <span
  m="3807380">opposite</span> <span m="3807730">of</span> <span
  m="3807840">this</span> <span m="3808070">one.</span> <span
  m="3808560">This</span> <span m="3808700">is</span> <span
  m="3808790">just</span> <span m="3808940">saying</span> <span
  m="3809330">that</span> <span m="3809900">if</span> <span
  m="3811270">you</span> <span m="3811390">already</span> <span
  m="3811760">have</span> <span m="3811870">fixed</span> <span
  m="3812250">then</span> <span m="3812380">you</span> <span
  m="3812490">fixed.</span> <span m="3816270">Indeed, if</span> <span
  m="3816840">i</span> <span m="3816930">is</span> <span
  m="3817040">equal</span> <span m="3817100">to N--</span> <span
  m="3818080">that works.</span> <span m="3822970">Any</span> <span
  m="3823210">other</span> <span m="3825070">limits</span> <span
  m="3825450">that</span> <span m="3825650">you</span> <span
  m="3826080">believe</span> <span m="3826520">should</span> <span
  m="3826660">be</span> <span m="3826750">true,</span> <span
  m="3827160">think</span> <span m="3827370">should</span> <span
  m="3827470">be</span> <span m="3827560">true?</span></p><p><span
  m="3827920">AUDIENCE: The</span> <span m="3828395">one</span> <span
  m="3828870">we already checked</span> <span m="3829345">for</span> <span
  m="3830770">r equals</span> <span m="3831245">one?</span></p><p><span
  m="3832200">PROFESSOR: Yes.</span> <span m="3833750">Indeed.</span> <span
  m="3834090">So</span> <span m="3834660">if</span> <span
  m="3834800">it's</span> <span m="3834980">neutral--</span> <span
  m="3835910">so</span> <span m="3836050">the</span> <span
  m="3836110">limit</span> <span m="3836520">as</span> <span
  m="3836670">r</span> <span m="3837540">goes</span> <span m="3837980">to</span>
  <span m="3838370">1</span> <span m="3839720">of</span> <span
  m="3839900">xi</span> <span m="3840860">should</span> <span
  m="3841090">be</span> <span m="3841220">equal</span> <span
  m="3841480">to</span> <span m="3842070">what?</span></p><p><span
  m="3843104">AUDIENCE: i/N.</span></p><p><span m="3844030">PROFESSOR: Should be
  equal to</span> <span m="3844090">i/N.</span> <span m="3846310">So</span>
  <span m="3846390">this</span> <span m="3846570">one</span> <span
  m="3846730">is</span> <span m="3846800">a</span> <span
  m="3846880">little</span> <span m="3847330">bit</span> <span
  m="3848020">less</span> <span m="3848440">obvious,</span> <span
  m="3849180">because</span> <span m="3849970">if</span> <span
  m="3850480">you</span> <span m="3850570">set</span> <span m="3850880">r</span>
  <span m="3851150">equal</span> <span m="3851490">to</span> <span
  m="3853540">1,</span> <span m="3857610">does</span> <span
  m="3857750">this</span> <span m="3857890">mean</span> <span
  m="3858040">that</span> <span m="3858250">it's</span> <span
  m="3858380">equal</span> <span m="3858540">to</span> <span
  m="3858590">0?</span> <span m="3860820">And</span> <span
  m="3860980">what's</span> <span m="3861140">the</span> <span
  m="3861220">problem?</span></p><p><span m="3864704">[INTERPOSING
  VOICES]</span></p><p><span m="3868620">PROFESSOR: Well,</span> <span
  m="3869260">OK,</span> <span m="3869590">but</span> <span
  m="3870380">even</span> <span m="3870630">that</span> <span
  m="3870820">statement's</span> <span m="3871190">not</span> <span
  m="3871360">true.</span> <span m="3871710">It's</span> <span
  m="3871860">not</span> <span m="3872010">even</span> <span
  m="3872210">necessarily</span> <span m="3872690">close</span> <span
  m="3873010">to</span> <span m="3873100">0.</span></p><p><span
  m="3873995">AUDIENCE: [INAUDIBLE]</span> <span
  m="3874450">L'Hopitals?</span></p><p><span m="3875360">PROFESSOR:</span> <span
  m="3875510">Right.</span> <span m="3875720">This</span> <span
  m="3875880">is</span> <span m="3875990">the</span> <span
  m="3876870">L'Hopitals.</span> <span m="3878000">There was</span> <span
  m="3878170">another</span> <span m="3878410">context</span> <span
  m="3878780">already</span> <span m="3879120">were</span> <span
  m="3879480">L'Hopitals</span> <span m="3879890">came</span> <span
  m="3880100">up,</span> <span m="3880280">right?</span> <span
  m="3881360">Maybe?</span> <span m="3882810">OK,</span> <span
  m="3883340">so</span> <span m="3883400">the</span> <span
  m="3883480">problem</span> <span m="3883780">is</span> <span
  m="3883860">that</span> <span m="3883990">if</span> <span
  m="3884060">you</span> <span m="3884160">set</span> <span m="3884450">r</span>
  <span m="3884640">equal</span> <span m="3884770">to</span> <span
  m="3884840">1</span> <span m="3885030">here,</span> <span
  m="3885440">then</span> <span m="3885470">you</span> <span
  m="3885530">get</span> <span m="3885670">0.</span> <span m="3886140">So</span>
  <span m="3886800">then</span> <span m="3886980">you</span> <span
  m="3887080">think,</span> <span m="3887300">oh,</span> <span
  m="3887400">the</span> <span m="3887500">answer</span> <span m="3887710">is
  0.</span> <span m="3888770">But</span> <span m="3888890">you have to</span>
  <span m="3889060">be</span> <span m="3889140">more</span> <span
  m="3889290">careful</span> <span m="3889650">than that,</span> <span
  m="3889860">because</span> <span m="3890150">this</span> <span
  m="3890370">also</span> <span m="3890720">is</span> <span
  m="3890810">equal</span> <span m="3890970">to</span> <span
  m="3891010">0.</span> <span m="3893710">And</span> <span m="3893860">so</span>
  <span m="3894300">L'Hopital's--</span> <span m="3897040">L-H- --</span> <span
  m="3901260">is</span> <span m="3902160">it</span> <span
  m="3902250">above</span> <span m="3902510">the H?</span></p><p><span
  m="3907510">AUDIENCE: No,</span> <span m="3907946">that looks
  right.</span></p><p><span m="3908820">PROFESSOR: Is</span> <span
  m="3908970">it</span> <span m="3909010">good?</span></p><p><span
  m="3909360">AUDIENCE: Yes.</span></p><p><span m="3909710">PROFESSOR:</span>
  <span m="3909980">All right.</span> <span m="3911420">You're</span> <span
  m="3911730">French,</span> <span m="3912070">right?</span> <span m="3912960">I
  mean,</span> <span m="3913420">sort</span> <span m="3914590">of.</span> <span
  m="3918000">He's</span> <span m="3918110">from</span> <span
  m="3918470">Quebec,</span> <span m="3918890">so</span> <span
  m="3919160">I</span> <span m="3919550">don't</span> <span
  m="3919700">know</span> <span m="3920320">what</span> <span
  m="3922310">that</span> <span m="3922360">question--</span> <span
  m="3923040">how</span> <span m="3923200">it's</span> <span
  m="3923350">interpreted.</span></p><p><span m="3926740">So</span> <span
  m="3926860">this</span> <span m="3927770">[INAUDIBLE]</span> <span
  m="3927900">looks</span> <span m="3928100">all</span> <span
  m="3928310">right.</span> <span m="3928500">See,</span> <span
  m="3928680">what</span> <span m="3928820">you</span> <span
  m="3928900">just</span> <span m="3929040">have</span> <span
  m="3929120">to</span> <span m="3929160">do</span> <span m="3929280">is</span>
  <span m="3929360">then</span> <span m="3931450">you</span> <span
  m="3931620">take</span> <span m="3931880">the</span> <span
  m="3931980">derivative</span> <span m="3932980">with</span> <span
  m="3933170">respect</span> <span m="3933600">to</span> <span
  m="3933710">r</span> <span m="3934220">for</span> <span
  m="3934350">both</span> <span m="3934550">the</span> <span
  m="3934630">numerator</span> <span m="3935250">and</span> <span
  m="3935350">the</span> <span m="3935420">denominator,</span> <span
  m="3936240">and</span> <span m="3936520">then</span> <span
  m="3936630">you</span> <span m="3936740">see</span> <span m="3936900">what
  ha--</span> <span m="3937790">but</span> <span m="3937950">you take</span>
  <span m="3938260">the limit</span> <span m="3938410">again.</span> <span
  m="3938940">And</span> <span m="3939080">sometimes</span> <span
  m="3939390">you</span> <span m="3939480">have</span> <span
  m="3940060">to</span> <span m="3940130">apply</span> <span
  m="3940360">L'Hopital's</span> <span m="3940940">rule</span> <span
  m="3941130">multiple</span> <span m="3941570">times,</span> <span
  m="3941980">right?</span> <span m="3942610">So</span> <span
  m="3942860">what</span> <span m="3942960">we</span> <span
  m="3943420">write</span> <span m="3943590">here</span> <span
  m="3943730">is</span> <span m="3944180">this</span> <span
  m="3944350">is</span> <span m="3944520">the</span> <span
  m="3944640">limit</span> <span m="3946290">as</span> <span
  m="3946430">r</span> <span m="3946650">goes to</span> <span
  m="3946840">1,</span> <span m="3947630">and</span> <span m="3947690">we</span>
  <span m="3947770">take</span> <span m="3947970">the</span> <span
  m="3948220">derivative</span> <span m="3948680">of</span> <span
  m="3948840">the</span> <span m="3948920">numerator</span> <span
  m="3949370">respect</span> <span m="3949730">to</span> <span
  m="3949950">r.</span> <span m="3951810">So</span> <span m="3952000">we</span>
  <span m="3952110">get</span> <span m="3952270">out</span> <span
  m="3953350">an</span> <span m="3953700">i,</span> <span m="3957040">1</span>
  <span m="3957310">over</span> <span m="3957740">r</span> <span m="3958045">to
  the</span> <span m="3958350">i</span> <span m="3958590">plus</span> <span
  m="3959860">1,</span> <span m="3960110">maybe?</span> <span
  m="3966470">And</span> <span m="3966630">here</span> <span
  m="3966900">we</span> <span m="3966990">get</span> <span
  m="3967210">out</span> <span m="3967350">an</span> <span
  m="3967540">N.</span></p><p><span m="3974960">All right,</span> <span
  m="3975040">so we</span> <span m="3975250">took the</span> <span
  m="3975380">derivatives</span> <span m="3975810">back to</span> <span
  m="3976040">r</span> <span m="3976500">here.</span> <span m="3978940">But
  we</span> <span m="3979370">left</span> <span m="3979650">it</span> <span
  m="3979720">as</span> <span m="3979840">a</span> <span
  m="3979910">limit</span> <span m="3980290">because</span> <span
  m="3980380">we</span> <span m="3980490">might</span> <span
  m="3980750">need</span> <span m="3980880">to</span> <span
  m="3980960">apply</span> <span m="3981240">it</span> <span
  m="3981290">again,</span> <span m="3981540">right?</span> <span
  m="3982170">Just</span> <span m="3982330">because</span> <span
  m="3982490">after</span> <span m="3982680">you</span> <span
  m="3982840">take</span> <span m="3983030">the</span> <span
  m="3983090">derivative</span> <span m="3983440">you're</span> <span
  m="3983520">not</span> <span m="3983670">guaranteed</span> <span
  m="3983945">that</span> <span m="3984230">it's</span> <span
  m="3984340">going</span> <span m="3984420">to</span> <span
  m="3984470">work</span> <span m="3984640">out</span> <span m="3984860">fine,
  but</span> <span m="3985150">in</span> <span m="3985240">this</span> <span
  m="3985390">case</span> <span m="3985570">it</span> <span
  m="3985690">does.</span> <span m="3986800">Because</span> <span
  m="3986880">already,</span> <span m="3987710">this</span> <span
  m="3987880">limit,</span> <span m="3988680">we're</span> <span
  m="3988850">allowed</span> <span m="3989130">to</span> <span m="3989280">just
  set</span> <span m="3989530">equal</span> <span m="3989760">to</span> <span
  m="3989810">1</span> <span m="3990090">because</span> <span
  m="3990240">nothing</span> <span m="3990460">blows</span> <span
  m="3990780">up.</span> <span m="3992320">So</span> <span
  m="3992390">this</span> <span m="3992530">is indeed</span> <span
  m="3992740">equal</span> <span m="3993040">to</span> <span
  m="3993340">i/N.</span> <span m="3993610">N.</span> <span
  m="3998270">And</span> <span m="3998760">the</span> <span
  m="3998900">important</span> <span m="3999110">point</span> <span
  m="3999250">here</span> <span m="3999380">is</span> <span
  m="3999460">that</span> <span m="3999650">it's</span> <span
  m="3999820">not</span> <span m="4000530">necessarily</span> <span
  m="4001250">approximately</span> <span m="4001820">equal</span> <span
  m="4002360">to</span> <span m="4002520">0.</span> <span m="4003080">It</span>
  <span m="4003220">could</span> <span m="4003360">be</span> <span
  m="4004870">anywhere</span> <span m="4005250">between</span> <span
  m="4005960">0</span> <span m="4006270">and</span> <span m="4006340">1</span>
  <span m="4006690">depending</span> <span m="4006850">what i and</span> <span
  m="4007300">N are.</span></p><p><span m="4009490">PROFESSOR: So</span> <span
  m="4009560">that means</span> <span m="4009730">that</span> <span
  m="4009860">this</span> <span m="4010410">expression</span> <span
  m="4010980">here</span> <span m="4012150">captures</span> <span
  m="4012680">the</span> <span m="4012790">dynamics,</span> <span
  m="4014410">actually,</span> <span m="4014870">for</span> <span
  m="4015630">all</span> <span m="4017450">i,</span> <span m="4017796">r,</span>
  <span m="4018142">N</span> <span m="4018960">within</span> <span
  m="4019390">the</span> <span m="4019680">Moran</span> <span
  m="4020150">process.</span> <span m="4021630">This</span> <span
  m="4021860">thing</span> <span m="4023170">is</span> <span
  m="4023850">simply</span> <span m="4025100">just</span> <span
  m="4025690">true</span> <span m="4026210">in</span> <span
  m="4026380">this</span> <span m="4026570">model.</span> <span
  m="4027320">There</span> <span m="4027460">are</span> <span
  m="4027860">no</span> <span m="4028350">approximations</span> <span
  m="4028775">yet.</span> <span m="4031020">There</span> <span
  m="4031230">is,</span> <span m="4031530">however,</span> <span
  m="4031880">one</span> <span m="4032860">approximation</span> <span
  m="4033205">that</span> <span m="4033550">is</span> <span
  m="4034700">very</span> <span m="4034900">useful</span> <span
  m="4035340">to</span> <span m="4035460">make,</span> <span
  m="4036100">which</span> <span m="4036300">is</span> <span
  m="4037020">the</span> <span m="4037150">approximation</span> <span
  m="4037880">of</span> <span m="4038100">what</span> <span
  m="4038890">happens</span> <span m="4039170">when</span> <span
  m="4039350">r</span> <span m="4040170">is</span> <span
  m="4041170">approximately</span> <span m="4041880">1.</span></p><p><span
  m="4048460">In</span> <span m="4048560">particular</span> <span
  m="4048910">what</span> <span m="4049030">we're</span> <span
  m="4049110">going</span> <span m="4049190">to</span> <span
  m="4049230">ask</span> <span m="4049490">is,</span> <span
  m="4050630">if</span> <span m="4050820">we</span> <span
  m="4051010">define</span> <span m="4051430">something</span> <span
  m="4051630">called</span> <span m="4051790">a</span> <span
  m="4051840">selection</span> <span m="4052450">coefficient,</span> <span
  m="4053660">that is</span> <span m="4054150">1</span> <span
  m="4054510">plus</span> <span m="4054900">s,</span> <span
  m="4065630">the</span> <span m="4065780">idea</span> <span
  m="4066020">here</span> <span m="4066250">is</span> <span
  m="4066340">that</span> <span m="4066530">in</span> <span
  m="4066620">many</span> <span m="4066880">cases--</span> <span
  m="4068960">well</span> <span m="4069230">for</span> <span
  m="4069360">Thursday</span> <span m="4069780">we're</span> <span
  m="4069890">going</span> <span m="4069970">to</span> <span
  m="4070050">read</span> <span m="4070190">a</span> <span
  m="4070240">paper</span> <span m="4070570">that</span> <span
  m="4071150">I</span> <span m="4071200">think</span> <span
  m="4071330">this</span> <span m="4071570">is</span> <span
  m="4071780">quite</span> <span m="4072000">interesting.</span> <span
  m="4073000">And</span> <span m="4073120">where</span> <span
  m="4073230">they</span> <span m="4073650">were</span> <span
  m="4074700">analyzing</span> <span m="4076380">the</span> <span
  m="4078610">appearance</span> <span m="4079080">of</span> <span
  m="4079130">these</span> <span m="4079260">mutations</span> <span
  m="4080230">that</span> <span m="4080400">would</span> <span
  m="4080860">allow</span> <span m="4081180">bacteria</span> <span
  m="4081750">to</span> <span m="4081870">survive</span> <span
  m="4082280">in</span> <span m="4082350">some</span> <span
  m="4082520">environment</span> <span m="4083010">to</span> <span
  m="4083110">do</span> <span m="4083240">better.</span></p><p><span
  m="4084790">And</span> <span m="4085020">typical</span> <span
  m="4085290">selection</span> <span m="4085820">coefficients</span> <span
  m="4086310">here</span> <span m="4086680">are</span> <span
  m="4087290">kind</span> <span m="4087430">of</span> <span
  m="4087520">1%</span> <span m="4088130">to</span> <span m="4088470">3%.</span>
  <span m="4089990">So</span> <span m="4090500">the</span> <span
  m="4090680">mutations</span> <span m="4091280">that</span> <span
  m="4091370">appear</span> <span m="4092200">and</span> <span
  m="4092360">that</span> <span m="4092440">allow</span> <span
  m="4093300">one</span> <span m="4093440">of</span> <span
  m="4093480">these</span> <span m="4093620">cells</span> <span
  m="4093980">to</span> <span m="4094050">do</span> <span
  m="4094150">better</span> <span m="4094420">in</span> <span
  m="4094480">this</span> <span m="4094620">new environment,</span> <span
  m="4095610">convert</span> <span m="4095970">an advantage</span> <span
  m="4096450">that</span> <span m="4097250">was</span> <span
  m="4097460">on</span> <span m="4097569">the</span> <span
  m="4097640">order</span> <span m="4097859">of</span> <span
  m="4097970">1%</span> <span m="4098300">or</span> <span m="4098359">2%,</span>
  <span m="4098560">or</span> <span m="4098640">so.</span> <span
  m="4100240">Which</span> <span m="4100399">means</span> <span
  m="4100600">that</span> <span m="4100729">s</span> <span
  m="4101040">here</span> <span m="4101279">would</span> <span m="4101399">be
  like</span> <span m="4101720">0.01,</span> <span m="4103120">0.02.</span>
  <span m="4104580">Which</span> <span m="4104979">means</span> <span
  m="4105200">that</span> <span m="4105620">for</span> <span
  m="4106149">basically</span> <span m="4107080">all</span> <span
  m="4107270">the</span> <span m="4107319">situations</span> <span
  m="4107790">that</span> <span m="4107870">you</span> <span
  m="4108040">see</span> <span m="4108580">in</span> <span
  m="4108689">the</span> <span m="4108760">laboratory</span> <span
  m="4109180">and so</span> <span m="4109279">forth,</span> <span
  m="4110149">what you</span> <span m="4110359">really</span> <span
  m="4110529">want</span> <span m="4110670">to</span> <span
  m="4110710">know</span> <span m="4110970">is</span> <span
  m="4111550">what</span> <span m="4111729">happens</span> <span
  m="4112130">for</span> <span m="4112450">small</span> <span
  m="4112880">s.</span> <span m="4114390">So</span> <span m="4114649">for</span>
  <span m="4114850">s,</span> <span m="4115390">much</span> <span
  m="4115750">less</span> <span m="4115950">than</span> <span
  m="4116220">1.</span> <span m="4116770">So</span> <span m="4117149">where
  r</span> <span m="4117520">is</span> <span m="4117640">approximately</span>
  <span m="4117934">equal</span> <span m="4118229">to 1.</span></p><p><span
  m="4125029">And</span> <span m="4125200">in</span> <span
  m="4125279">this</span> <span m="4125439">case,</span> <span
  m="4125899">we</span> <span m="4126010">can</span> <span
  m="4126220">say</span> <span m="4126670">xi,</span> <span
  m="4128100">well--</span> <span m="4131750">and</span> <span
  m="4131950">we</span> <span m="4132050">actually</span> <span
  m="4133109">are</span> <span m="4133250">going</span> <span
  m="4133340">to</span> <span m="4133410">want</span> <span
  m="4133550">to</span> <span m="4133590">ask</span> <span
  m="4134040">about</span> <span m="4134390">x</span> <span
  m="4134640">sub</span> <span m="4134830">1.</span> <span m="4136670">So</span>
  <span m="4137470">that's</span> <span m="4137710">a</span> <span
  m="4137760">1</span> <span m="4138029">now.</span> <span
  m="4142270">And</span> <span m="4142779">the</span> <span
  m="4142910">reason</span> <span m="4143130">for</span> <span m="4143310">that
  is that</span> <span m="4143390">we</span> <span m="4143479">want</span> <span
  m="4143630">to know,</span> <span m="4144010">are</span> <span
  m="4144090">there</span> <span m="4144240">some</span> <span
  m="4144540">rate</span> <span m="4145189">that</span> <span
  m="4145790">new</span> <span m="4145970">mutations</span> <span
  m="4146370">will</span> <span m="4146479">appear</span> <span
  m="4146800">in</span> <span m="4146850">the</span> <span
  m="4146920">population?</span> <span m="4147720">When</span> <span
  m="4147850">they</span> <span m="4147939">appear</span> <span
  m="4148319">they'll</span> <span m="4148490">be</span> <span
  m="4148600">present</span> <span m="4148970">in</span> <span
  m="4149080">a</span> <span m="4149140">single</span> <span
  m="4149520">individual,</span> <span m="4150090">and</span> <span
  m="4150210">we</span> <span m="4150319">want</span> <span
  m="4150450">to</span> <span m="4150490">know</span> <span
  m="4150910">what</span> <span m="4151069">is</span> <span
  m="4151140">the</span> <span m="4151250">probability</span> <span
  m="4152029">that</span> <span m="4152430">one</span> <span
  m="4153130">individual--</span> <span m="4154950">let's</span> <span
  m="4155120">say</span> <span m="4155290">has</span> <span m="4155529">a</span>
  <span m="4156319">beneficial</span> <span m="4156720">mutation,</span> <span
  m="4157460">well,</span> <span m="4157729">the</span> <span
  m="4157830">probability</span> <span m="4158279">it'll</span> <span
  m="4158430">fix--</span> <span m="4160880">so</span> <span m="4161029">we
  want</span> <span m="4161340">to know</span> <span m="4161410">is</span> <span
  m="4161630">for</span> <span m="4161840">s,</span> <span
  m="4164310">much</span> <span m="4164590">less</span> <span
  m="4164740">than</span> <span m="4164850">1,</span> <span
  m="4165560">but</span> <span m="4165979">larger</span> <span
  m="4166390">than</span> <span m="4166590">0.</span></p><p><span
  m="4167500">So</span> <span m="4167600">far,</span> <span m="4167880">it's
  a</span> <span m="4167950">beneficial</span> <span m="4168479">mutation</span>
  <span m="4169100">of</span> <span m="4169260">modest</span> <span
  m="4169649">effect.</span> <span m="4170720">What's</span> <span
  m="4170870">the</span> <span m="4170950">probability</span> <span
  m="4171319">that</span> <span m="4171430">it will</span> <span
  m="4171590">fix?</span> <span m="4173580">Well</span> <span
  m="4173710">the</span> <span m="4173819">idea</span> <span
  m="4174160">here</span> <span m="4174430">is</span> <span
  m="4174569">that</span> <span m="4176090">r</span> <span m="4176490">to</span>
  <span m="4176910">the</span> <span m="4177040">N</span> <span
  m="4180359">is</span> <span m="4180520">going</span> <span
  m="4180640">to</span> <span m="4180700">be</span> <span
  m="4181500">much</span> <span m="4181720">larger</span> <span
  m="4181970">than</span> <span m="4182590">1,</span> <span
  m="4183319">because</span> <span m="4183500">N</span> <span
  m="4183800">is</span> <span m="4183910">often</span> <span
  m="4184590">a</span> <span m="4184660">big</span> <span
  m="4185029">population.</span></p><p><span m="4187460">Now</span> <span
  m="4187600">in</span> <span m="4187720">that</span> <span
  m="4187990">situation,</span> <span m="4189540">this</span> <span
  m="4189729">is</span> <span m="4189840">just</span> <span
  m="4190040">approximately</span> <span m="4190240">equal</span> <span
  m="4190439">to</span> <span m="4190529">1</span> <span m="4190970">over</span>
  <span m="4193170">r.</span> <span m="4198350">And</span> <span
  m="4199920">r,</span> <span m="4200220">we've</span> <span
  m="4200350">already</span> <span m="4200490">decided</span> <span
  m="4200780">it can</span> <span m="4200860">be</span> <span
  m="4201040">expressed</span> <span m="4201520">as</span> <span
  m="4201670">1</span> <span m="4201920">plus</span> <span
  m="4202200">the</span> <span m="4202270">selection</span> <span
  m="4202640">coefficient.</span> <span m="4205390">Now</span> <span
  m="4206620">this</span> <span m="4207460">is</span> <span
  m="4207760">something</span> <span m="4208110">that</span> <span
  m="4208210">you</span> <span m="4208330">want</span> <span
  m="4208490">to</span> <span m="4208530">be</span> <span
  m="4208670">able</span> <span m="4208840">to</span> <span
  m="4208900">simplify</span> <span m="4212290">in</span> <span
  m="4212430">your</span> <span m="4212560">sleep.</span> <span
  m="4214270">1</span> <span m="4214540">divided by</span> <span
  m="4214650">1</span> <span m="4214910">plus</span> <span m="4215120">s</span>
  <span m="4216210">is</span> <span m="4216290">approximately</span> <span
  m="4216630">equal to</span> <span m="4216970">1</span> <span
  m="4217310">minus</span> <span m="4218590">1</span> <span
  m="4218820">minus</span> <span m="4219140">s.</span> <span
  m="4224790">And</span> <span m="4225070">this</span> <span
  m="4225350">is</span> <span m="4225450">indeed</span> <span
  m="4226060">approximately</span> <span m="4226450">equal</span> <span
  m="4226610">to</span> <span m="4226780">s.</span></p><p><span
  m="4230580">This</span> <span m="4230750">is</span> <span
  m="4230840">saying</span> <span m="4231200">that</span> <span
  m="4231450">in</span> <span m="4231590">the</span> <span
  m="4231660">Moran</span> <span m="4232040">process,</span> <span
  m="4233600">if</span> <span m="4233820">a</span> <span
  m="4233930">beneficial</span> <span m="4234510">mutation</span> <span
  m="4235020">appears</span> <span m="4235410">in</span> <span
  m="4235460">the</span> <span m="4235550">population</span> <span
  m="4236180">with</span> <span m="4237170">selection</span> <span
  m="4237560">code</span> <span m="4237770">coefficient</span> <span
  m="4238150">s,</span> <span m="4238500">that</span> <span
  m="4238590">might</span> <span m="4238760">be</span> <span
  m="4239320">1%</span> <span m="4239820">to</span> <span m="4240050">3%,</span>
  <span m="4241230">then</span> <span m="4241570">it</span> <span
  m="4241690">has</span> <span m="4242880">a</span> <span m="4242980">1%</span>
  <span m="4243450">to</span> <span m="4243640">3%</span> <span
  m="4243950">probability</span> <span m="4244450">of</span> <span
  m="4244540">surviving.</span> <span m="4246040">Because</span> <span
  m="4246940">this</span> <span m="4247690">is</span> <span
  m="4247800">the</span> <span m="4247890">probability</span> <span
  m="4248230">of</span> <span m="4248300">fixing,</span> <span
  m="4249180">but</span> <span m="4249440">in</span> <span
  m="4249530">this</span> <span m="4249670">situation</span> <span
  m="4250240">fixation</span> <span m="4251210">and</span> <span
  m="4251770">survival</span> <span m="4252250">are</span> <span
  m="4252350">the</span> <span m="4252420">same</span> <span m="4252630">thing,
  because</span> <span m="4252980">we're</span> <span m="4253100">just</span>
  <span m="4253210">considering</span> <span m="4254020">this</span> <span
  m="4254220">one</span> <span m="4254560">mutation.</span> <span
  m="4255730">So</span> <span m="4255830">it's</span> <span
  m="4255940">the</span> <span m="4256050">only</span> <span
  m="4256300">thing</span> <span m="4256850">that</span> <span
  m="4256990">we're</span> <span m="4257120">considering</span> <span
  m="4257470">is</span> <span m="4257770">the</span> <span
  m="4258050">fate</span> <span m="4258310">of</span> <span
  m="4258370">this</span> <span m="4258450">one</span> <span
  m="4258630">mutation</span> <span m="4259060">of the
  population.</span></p><p><span m="4259480">We're</span> <span
  m="4259570">going</span> <span m="4259650">to</span> <span
  m="4259690">assume</span> <span m="4259970">for</span> <span
  m="4260060">now</span> <span m="4260365">that</span> <span
  m="4260670">you</span> <span m="4260870">can't</span> <span
  m="4261110">get</span> <span m="4261230">new</span> <span
  m="4261400">mutations</span> <span m="4261830">in the</span> <span
  m="4261940">population</span> <span m="4262380">to</span> <span
  m="4262430">compete</span> <span m="4262680">with.</span> <span
  m="4263210">And</span> <span m="4263340">then</span> <span
  m="4263720">either</span> <span m="4264080">you</span> <span
  m="4264190">go</span> <span m="4264350">extinct,</span> <span
  m="4264820">or</span> <span m="4264970">you</span> <span
  m="4265040">take</span> <span m="4265240">over</span> <span
  m="4265370">the</span> <span m="4265460">population.</span> <span
  m="4267610">And</span> <span m="4267650">what's</span> <span
  m="4267840">surprising</span> <span m="4268500">here</span> <span
  m="4269200">is</span> <span m="4269340">that</span> <span
  m="4269510">even</span> <span m="4271120">if</span> <span
  m="4271240">it's</span> <span m="4271490">a</span> <span
  m="4271540">fact</span> <span m="4271800">that</span> <span
  m="4272680">you</span> <span m="4273040">think</span> <span m="4273180">it
  was</span> <span m="4273300">big,</span> <span m="4273620">like</span> <span
  m="4273980">3%,</span> <span m="4274310">4%.</span> <span m="4276290">I</span>
  <span m="4276400">would</span> <span m="4276500">love</span> <span
  m="4276740">to</span> <span m="4276790">get</span> <span
  m="4276950">such</span> <span m="4277110">a</span> <span
  m="4277150">mutation.</span> <span m="4278380">But</span> <span
  m="4278680">still,</span> <span m="4279540">in</span> <span
  m="4280040">a</span> <span m="4280260">population</span> <span
  m="4281560">in</span> <span m="4281680">the</span> <span
  m="4281770">Moran</span> <span m="4282000">process,</span> <span
  m="4282420">or really</span> <span m="4282790">in</span> <span
  m="4282940">any</span> <span m="4283190">other</span> <span
  m="4283730">model</span> <span m="4284110">like</span> <span
  m="4284280">this,</span> <span m="4285350">it</span> <span
  m="4285590">will</span> <span m="4286320">typically</span> <span
  m="4286740">go</span> <span m="4286890">extinct.</span></p><p><span
  m="4288900">Now,</span> <span m="4289210">it's</span> <span
  m="4289670">worth</span> <span m="4289920">saying</span> <span
  m="4290160">that</span> <span m="4291340">depending</span> <span
  m="4291990">upon</span> <span m="4292410">the</span> <span
  m="4292480">model</span> <span m="4292735">that</span> <span
  m="4292990">you're</span> <span m="4293190">using,</span> <span
  m="4295290">you'll</span> <span m="4295540">get</span> <span
  m="4296230">different</span> <span m="4296700">numbers</span> <span
  m="4297610">in</span> <span m="4297800">here.</span> <span
  m="4300050">In</span> <span m="4300150">this</span> <span
  m="4300220">case,</span> <span m="4301050">the</span> <span
  m="4301060">probability</span> <span m="4301710">of</span> <span
  m="4302370">fixation</span> <span m="4302850">or</span> <span
  m="4302930">survival</span> <span m="4303900">is</span> <span
  m="4304570">1</span> <span m="4305030">times</span> <span
  m="4305290">s.</span> <span m="4306000">But</span> <span m="4306180">in</span>
  <span m="4306290">some</span> <span m="4306470">other</span> <span
  m="4306640">models</span> <span m="4307120">and</span> <span
  m="4307300">it</span> <span m="4307420">depends</span> <span
  m="4307650">on</span> <span m="4307720">the</span> <span
  m="4307790">branching</span> <span m="4308210">process.</span> <span
  m="4308720">It</span> <span m="4308900">could</span> <span
  m="4309050">be</span> <span m="4309210">two</span> <span
  m="4309460">times</span> <span m="4309770">s.</span> <span
  m="4310460">But</span> <span m="4310630">it's</span> <span
  m="4310730">something</span> <span m="4311170">of</span> <span
  m="4311320">order</span> <span m="4311630">unity</span> <span
  m="4312040">times</span> <span m="4312410">s.</span></p><p><span
  m="4315185">AUDIENCE: And</span> <span m="4315656">so we</span> <span
  m="4316127">say that</span> <span m="4319424">if s</span> <span m="4319895">is
  equal</span> <span m="4320370">to</span> <span m="4320730">0,</span> <span
  m="4321996">then</span> <span m="4322370">x</span> <span m="4322590">of</span>
  <span m="4322900">1</span> <span m="4323610">should</span> <span
  m="4324006">be--</span></p><p><span m="4325570">[INTERPOSING
  VOICES]</span></p><p><span m="4326460">PROFESSOR: Right.</span> <span
  m="4328730">Exactly.</span></p><p><span m="4329140">AUDIENCE:
  [INAUDIBLE]</span> <span m="4329605">assume that</span> <span
  m="4330070">s</span> <span m="4330535">is much, much</span> <span
  m="4331000">greater than</span> <span m="4331930">1/N?</span></p><p><span
  m="4332860">PROFESSOR: Exactly.</span> <span m="4333610">So</span> <span
  m="4333900">what</span> <span m="4334050">we've</span> <span
  m="4334500">assumed</span> <span m="4334960">is</span> <span
  m="4335070">that</span> <span m="4337300">this</span> <span
  m="4337750">is</span> <span m="4337930">true</span> <span
  m="4339030">and</span> <span m="4339480">that</span> <span
  m="4339620">I</span> <span m="4339680">think</span> <span
  m="4343270">that's</span> <span m="4343480">actually</span> <span
  m="4343670">already</span> <span m="4343860">sufficient.</span> <span
  m="4345870">And</span> <span m="4346060">indeed,</span> <span
  m="4346960">you</span> <span m="4347130">can</span> <span
  m="4347260">go</span> <span m="4347450">and</span> <span
  m="4347570">you</span> <span m="4347670">can</span> <span
  m="4347860">do</span> <span m="4348870">the</span> <span
  m="4348960">expansion</span> <span m="4350960">and</span> <span
  m="4351120">find</span> <span m="4351340">what</span> <span
  m="4351480">x</span> <span m="4352110">sub</span> <span m="4352300">1</span>
  <span m="4352580">should</span> <span m="4352690">be</span> <span
  m="4352810">equal</span> <span m="4353030">to</span> <span
  m="4353590">in</span> <span m="4354020">general</span> <span
  m="4354510">here.</span> <span m="4355030">And</span> <span
  m="4355820">for</span> <span m="4357020">small</span> <span
  m="4357370">s,</span> <span m="4357710">but</span> <span
  m="4359470">including</span> <span m="4360750">the</span> <span
  m="4360900">possibility</span> <span m="4361420">that it's</span> <span
  m="4361630">very--</span> <span m="4362370">I'm</span> <span
  m="4362470">sorry--</span> <span m="4364170">for</span> <span
  m="4364350">small</span> <span m="4364750">s</span> <span
  m="4364990">but</span> <span m="4365120">not</span> <span
  m="4365450">super</span> <span m="4365850">small</span> <span
  m="4366140">s.</span> <span m="4366950">It's a</span> <span m="4367000">matter
  of</span> <span m="4367180">what</span> <span m="4367300">you're</span> <span
  m="4367390">comparing to.</span></p><p><span m="4370540">And</span> <span
  m="4370960">you</span> <span m="4371120">end</span> <span
  m="4371280">up</span> <span m="4371360">getting</span> <span
  m="4371880">1/N</span> <span m="4374180">plus</span> <span
  m="4374870">s/2.</span> <span m="4378380">And</span> <span
  m="4378500">this</span> <span m="4378620">is</span> <span
  m="4378760">for</span> <span m="4381820">s</span> <span
  m="4382140">times</span> <span m="4382580">N</span> <span
  m="4383610">much</span> <span m="4383870">less</span> <span
  m="4384070">than</span> <span m="4384430">1.</span> <span
  m="4389010">And</span> <span m="4389160">indeed,</span> <span
  m="4389650">this</span> <span m="4389980">is</span> <span
  m="4390240">the</span> <span m="4390570">definition</span> <span
  m="4390980">of</span> <span m="4391070">what</span> <span
  m="4391240">we</span> <span m="4391400">mean</span> <span
  m="4391680">by</span> <span m="4392220">nearly</span> <span
  m="4392820">neutral.</span> <span m="4398580">Because</span> <span
  m="4399150">up</span> <span m="4399310">to</span> <span m="4399410">now</span>
  <span m="4399620">we've</span> <span m="4399780">been</span> <span
  m="4400130">talking</span> <span m="4400520">about</span> <span
  m="4400710">neutral</span> <span m="4401030">mutations</span> <span
  m="4401530">as</span> <span m="4401670">if</span> <span
  m="4402540">they</span> <span m="4402720">just</span> <span
  m="4402930">had</span> <span m="4403060">to</span> <span m="4403110">be</span>
  <span m="4403300">exactly,</span> <span m="4403890">exactly</span> <span
  m="4404290">neutral,</span> <span m="4404570">but</span> <span
  m="4404670">then</span> <span m="4405020">really,</span> <span
  m="4407280">that</span> <span m="4407600">probably</span> <span
  m="4407980">doesn't</span> <span m="4408370">actually</span> <span
  m="4408800">literally</span> <span m="4409220">exist.</span> <span
  m="4409990">But</span> <span m="4410140">if</span> <span m="4410860">a</span>
  <span m="4410910">mutation</span> <span m="4411310">appears</span> <span
  m="4411700">and</span> <span m="4411800">it</span> <span
  m="4411890">only</span> <span m="4412090">changes</span> <span
  m="4412390">your</span> <span m="4412490">fitness</span> <span
  m="4412790">by</span> <span m="4412880">one</span> <span
  m="4413110">part</span> <span m="4413390">in</span> <span
  m="4413510">10</span> <span m="4413840">to</span> <span m="4413910">the</span>
  <span m="4414610">minus</span> <span m="4414940">30,</span> <span
  m="4415790">then</span> <span m="4416460">it</span> <span
  m="4417160">is</span> <span m="4417550">equivalent</span> <span
  m="4418060">to</span> <span m="4418120">being</span> <span
  m="4418300">a</span> <span m="4418470">truly</span> <span
  m="4418800">neutral</span> <span m="4419190">mutation.</span> <span
  m="4420220">But</span> <span m="4420330">the</span> <span
  m="4420480">way</span> <span m="4420660">that</span> <span
  m="4420770">you</span> <span m="4420870">quantify</span> <span
  m="4421300">that</span> <span m="4422090">is</span> <span
  m="4422570">this</span> <span m="4422780">thing.</span> <span
  m="4423060">s</span> <span m="4423330">times</span> <span
  m="4423620">N.</span> <span m="4424310">You</span> <span
  m="4424410">want</span> <span m="4424520">to</span> <span
  m="4424560">know</span> <span m="4424690">whether</span> <span
  m="4424920">it's</span> <span m="4425270">larger</span> <span
  m="4425710">or</span> <span m="4425820">smaller</span> <span
  m="4426240">than</span> <span m="4426450">1.</span></p><p><span
  m="4431300">So</span> <span m="4431680">for</span> <span
  m="4431760">example</span> <span m="4432040">if</span> <span
  m="4432120">you</span> <span m="4432240">plot</span> <span
  m="4435260">x</span> <span m="4435540">sub</span> <span m="4435890">1</span>
  <span m="4437070">as</span> <span m="4437230">a</span> <span
  m="4437300">function</span> <span m="4437670">of</span> <span
  m="4437890">s--</span> <span m="4439820">0,</span> <span
  m="4440285">right?</span> <span m="4442590">It</span> <span
  m="4442700">crosses</span> <span m="4443210">1</span> <span
  m="4443440">over</span> <span m="4443620">N</span> <span
  m="4443860">here.</span> <span m="4448520">Now,</span> <span
  m="4450240">it's</span> <span m="4450430">going</span> <span
  m="4450520">to</span> <span m="4450560">have</span> <span m="4450650">a</span>
  <span m="4450700">slope</span> <span m="4451250">here--</span> <span
  m="4452430">s</span> <span m="4452670">over</span> <span
  m="4452870">2--</span> <span m="4454070">but</span> <span m="4454180">then
  it</span> <span m="4454230">kind</span> <span m="4454430">of</span> <span
  m="4454510">goes</span> <span m="4454860">up.</span> <span
  m="4456220">It</span> <span m="4456340">eventually</span> <span
  m="4457980">hits</span> <span m="4458350">this--</span> <span m="4458820">this
  is</span> <span m="4458940">just</span> <span m="4459090">the</span> <span
  m="4459210">s</span> <span m="4460446">line--</span> <span
  m="4462075">because</span> <span m="4462480">if</span> <span
  m="4462930">s</span> <span m="4463230">is</span> <span m="4463350">much</span>
  <span m="4463720">less</span> <span m="4464010">than</span> <span
  m="4464230">1,</span> <span m="4465410">yet</span> <span m="4465900">s</span>
  <span m="4466200">times</span> <span m="4466540">N</span> <span
  m="4466980">is</span> <span m="4467260">much</span> <span
  m="4467490">larger</span> <span m="4467800">than</span> <span
  m="4467930">1,</span> <span m="4469590">then</span> <span
  m="4470030">x1</span> <span m="4470640">is</span> <span
  m="4470740">approximately</span> <span m="4471130">equal</span> <span
  m="4471240">to</span> <span m="4471370">s.</span> <span m="4474240">And</span>
  <span m="4474380">then</span> <span m="4474510">over</span> <span
  m="4474660">here,</span> <span m="4475350">this</span> <span
  m="4476480">goes</span> <span m="4476700">down</span> <span
  m="4478660">exponentially.</span></p><p><span m="4483080">But</span> <span
  m="4483180">the</span> <span m="4483280">statement</span> <span
  m="4483510">is</span> <span m="4483630">that</span> <span
  m="4483810">if</span> <span m="4483980">s</span> <span
  m="4484220">times</span> <span m="4484510">N</span> <span
  m="4484800">is</span> <span m="4484910">much</span> <span
  m="4485160">less</span> <span m="4485370">than</span> <span
  m="4485520">1,</span> <span m="4486190">then</span> <span
  m="4486730">the</span> <span m="4486910">mutation</span> <span
  m="4487670">acts</span> <span m="4488210">essentially</span> <span
  m="4488450">as</span> <span m="4488660">if</span> <span
  m="4488860">it's</span> <span m="4489040">neutral.</span> <span
  m="4490590">So</span> <span m="4490730">then</span> <span
  m="4490850">you</span> <span m="4490950">can</span> <span
  m="4491080">just</span> <span m="4492030">work</span> <span
  m="4492270">with</span> <span m="4492370">that,</span> <span
  m="4493830">whereas,</span> <span m="4494580">if</span> <span
  m="4494750">s</span> <span m="4495140">times</span> <span m="4495390">N</span>
  <span m="4495480">is</span> <span m="4495560">much</span> <span
  m="4495700">larger</span> <span m="4495890">than</span> <span
  m="4495980">1,</span> <span m="4496160">then</span> <span
  m="4496330">you</span> <span m="4496460">end</span> <span
  m="4496610">up--</span> <span m="4497790">it's</span> <span
  m="4497950">not</span> <span m="4498120">guaranteed</span> <span
  m="4498700">that</span> <span m="4498710">it's</span> <span
  m="4498820">going</span> <span m="4498900">to</span> <span
  m="4498940">fix,</span> <span m="4500070">but</span> <span
  m="4500190">it's</span> <span m="4500850">much</span> <span
  m="4501090">larger</span> <span m="4501420">than</span> <span
  m="4501750">a</span> <span m="4501860">probability</span> <span m="4502200">of
  1/N.</span> <span m="4503560">Whereas</span> <span m="4503670">down</span>
  <span m="4503890">here,</span> <span m="4504980">it</span> <span
  m="4505030">becomes</span> <span m="4506120">very</span> <span
  m="4506360">unlikely</span> <span m="4506850">to</span> <span
  m="4506920">fix</span> <span m="4507670">once</span> <span
  m="4508900">s</span> <span m="4509060">times</span> <span m="4509280">N</span>
  <span m="4509830">is</span> <span m="4510000">larger</span> <span
  m="4510260">than</span> <span m="4510350">1</span> <span m="4510540">on</span>
  <span m="4510660">the</span> <span m="4510740">deleterial</span> <span
  m="4510900">side.</span></p><p><span m="4517300">Are</span> <span
  m="4517420">there</span> <span m="4517700">any</span> <span
  m="4517860">questions</span> <span m="4518290">about</span> <span
  m="4518830">what's</span> <span m="4519240">going</span> <span
  m="4519420">on</span> <span m="4519550">here?</span> <span
  m="4520520">Yes.</span></p><p><span m="4520820">AUDIENCE: I'm</span> <span
  m="4521319">wondering about</span> <span m="4521818">that</span> <span
  m="4522317">factor</span> <span m="4522816">of</span> <span
  m="4523315">1/2.</span> <span m="4523814">[INAUDIBLE]</span> <span
  m="4525311">seems</span> <span m="4525810">like we</span> <span
  m="4526309">didn't get</span> <span m="4526808">it</span> <span
  m="4527307">over here</span> <span m="4527806">when we had</span> <span
  m="4528804">N equals--</span></p><p><span m="4530310">PROFESSOR: That's</span>
  <span m="4530540">right.</span> <span m="4531120">Yeah,</span> <span
  m="4531330">sorry.</span> <span m="4531950">And</span> <span
  m="4532160">indeed,</span> <span m="4532580">when</span> <span
  m="4532710">I</span> <span m="4532760">did</span> <span
  m="4532850">this</span> <span m="4533010">calculation</span> <span
  m="4533530">originally,</span> <span m="4533980">I</span> <span
  m="4534250">was</span> <span m="4534390">very</span> <span
  m="4534560">confused,</span> <span m="4534885">because</span> <span
  m="4535210">I</span> <span m="4535310">thought</span> <span
  m="4535380">it</span> <span m="4535440">should</span> <span
  m="4535620">be</span> <span m="4535720">that.</span> <span
  m="4536180">But</span> <span m="4536520">what</span> <span
  m="4536640">you</span> <span m="4536710">see</span> <span
  m="4536880">is</span> <span m="4537000">that</span> <span
  m="4537430">if</span> <span m="4537530">you</span> <span
  m="4537640">plot</span> <span m="4537950">this,</span> <span
  m="4538330">the</span> <span m="4538450">slope</span> <span
  m="4538950">here,</span> <span m="4540720">which</span> <span
  m="4540960">is</span> <span m="4541050">the</span> <span
  m="4541120">1/2,</span> <span m="4541630">is</span> <span
  m="4541810">less</span> <span m="4542090">than</span> <span
  m="4542220">slope</span> <span m="4542520">over</span> <span
  m="4542660">here,</span> <span m="4542920">which is 1.</span></p><p><span
  m="4551369">AUDIENCE:</span> <span m="4551866">[INAUDIBLE]</span></p><p><span
  m="4558850">PROFESSOR:</span> <span m="4558990">Well, what's funny</span>
  <span m="4559100">is,</span> <span m="4559200">I</span> <span
  m="4559320">actually</span> <span m="4559520">spent,</span> <span
  m="4559780">like,</span> <span m="4560040">hours,</span> <span
  m="4560690">trying</span> <span m="4560870">to</span> <span
  m="4560920">figure</span> <span m="4561060">out</span> <span
  m="4561400">where</span> <span m="4561760">I had made</span> <span
  m="4561860">my</span> <span m="4562010">mistakes.</span> <span
  m="4563830">No,</span> <span m="4563940">but</span> <span m="4564010">I</span>
  <span m="4564080">think</span> <span m="4564320">that</span> <span
  m="4564430">if</span> <span m="4564520">you</span> <span
  m="4564600">just</span> <span m="4564770">draw it,</span> <span m="4566880">I
  think</span> <span m="4567010">it's</span> <span m="4567160">all</span> <span
  m="4567280">consistent.</span></p><p><span m="4568940">AUDIENCE:</span> <span
  m="4569030">[INAUDIBLE]</span></p><p><span m="4572870">PROFESSOR: I</span>
  <span m="4573060">mean,</span> <span m="4573380">I'm</span> <span
  m="4574260">plotting</span> <span m="4574450">the</span> <span
  m="4574510">entire</span> <span m="4575190">curve,</span> <span
  m="4575660">analytically,</span> <span
  m="4576250">perfectly.</span></p><p><span m="4577656">AUDIENCE:</span> <span
  m="4578119">[INAUDIBLE]</span></p><p><span m="4579510">PROFESSOR:</span> <span
  m="4580100">It's</span> <span m="4580420">just</span> <span
  m="4580610">that</span> <span m="4582910">what</span> <span
  m="4583070">we</span> <span m="4583180">know,</span> <span
  m="4583520">is</span> <span m="4583670">that</span> <span
  m="4583820">it</span> <span m="4583930">behaves</span> <span
  m="4584180">like</span> <span m="4584600">this</span> <span
  m="4584860">around</span> <span m="4585080">here,</span> <span
  m="4585600">and</span> <span m="4585850">like</span> <span m="4586030">s
  up</span> <span m="4586380">here,</span> <span m="4586790">and I've</span>
  <span m="4586970">just</span> <span m="4587640">connected</span> <span
  m="4587965">them--</span> <span m="4594020">it</span> <span
  m="4594230">probably</span> <span m="4594450">doesn't</span> <span
  m="4594680">answer your</span> <span m="4594990">question</span> <span
  m="4595270">but it--</span></p><p><span m="4599900">So</span> <span
  m="4600190">I</span> <span m="4600320">think</span> <span
  m="4600480">we</span> <span m="4600700">have</span> <span
  m="4601260">just</span> <span m="4601570">enough</span> <span
  m="4601730">time</span> <span m="4602030">to say</span> <span
  m="4602290">something</span> <span m="4602610">about</span> <span
  m="4602840">this</span> <span m="4602980">Muller's</span> <span
  m="4603460">ratchet</span> <span m="4603800">idea.</span> <span
  m="4606660">Verbally,</span> <span m="4607510">can</span> <span
  m="4607720">a</span> <span m="4607890">deleterious</span> <span
  m="4608730">mutation,</span> <span m="4609540">s</span> <span
  m="4609770">less</span> <span m="4610010">than</span> <span
  m="4610110">0,</span> <span m="4610820">can</span> <span m="4611050">it</span>
  <span m="4611190">fix</span> <span m="4611530">in</span> <span
  m="4611600">a</span> <span m="4611650">population?</span> <span
  m="4612520">Yes or no?</span> <span m="4612950">Ready,</span> <span
  m="4613390">three,</span> <span m="4614060">two,</span> <span
  m="4614780">one.</span></p><p><span m="4615690">AUDIENCE:
  Yes.</span></p><p><span m="4616070">PROFESSOR: Yeah.</span> <span
  m="4618500">This</span> <span m="4618600">is</span> <span
  m="4618740">greater</span> <span m="4619080">than</span> <span
  m="4619220">0.</span> <span m="4620650">Now</span> <span
  m="4620840">it's,</span> <span m="4621010">very</span> <span
  m="4621260">unlikely</span> <span m="4621730">to</span> <span
  m="4621800">fix</span> <span m="4622530">if</span> <span
  m="4623060">the</span> <span m="4623180">negative</span> <span
  m="4623560">s</span> <span m="4623700">times</span> <span m="4623910">N</span>
  <span m="4624070">is</span> <span m="4624220">much</span> <span
  m="4624420">larger</span> <span m="4624640">than</span> <span
  m="4624730">1.</span> <span m="4626040">But</span> <span
  m="4626860">for</span> <span m="4627780">small</span> <span
  m="4628390">size</span> <span m="4628820">populations,</span> <span
  m="4629910">you</span> <span m="4630040">could</span> <span
  m="4630180">actually</span> <span m="4630510">fix</span> <span
  m="4631530">relatively</span> <span m="4632520">deleterious</span> <span
  m="4632850">mutations.</span> <span m="4635840">So</span> <span
  m="4635940">the</span> <span m="4636030">idea</span> <span
  m="4636350">is</span> <span m="4636470">that</span> <span
  m="4637270">for</span> <span m="4637480">small</span> <span
  m="4637940">populations,</span> <span m="4640090">it's</span> <span
  m="4640280">easy</span> <span m="4640660">to</span> <span
  m="4640920">accumulate</span> <span m="4641800">deleterious</span> <span
  m="4642340">mutations.</span></p><p><span m="4643330">And indeed,</span> <span
  m="4643570">This</span> <span m="4643740">is</span> <span
  m="4643860">related</span> <span m="4644620">to</span> <span
  m="4645590">something</span> <span m="4645890">called</span> <span
  m="4646190">a</span> <span m="4646230">mutation</span> <span
  m="4646840">accumulation</span> <span m="4647040">assay.</span> <span
  m="4653120">So if</span> <span m="4653190">you</span> <span
  m="4653270">take</span> <span m="4653780">a</span> <span
  m="4653950">population</span> <span m="4654520">of</span> <span
  m="4654590">bacteria</span> <span m="4655230">or</span> <span
  m="4655470">other</span> <span m="4655680">microorganism--</span> <span
  m="4666780">so</span> <span m="4666920">you</span> <span
  m="4667090">grow</span> <span m="4667290">up</span> <span
  m="4667500">your</span> <span m="4667600">bacteria</span> <span
  m="4668110">in</span> <span m="4668190">a</span> <span m="4668240">test</span>
  <span m="4668550">tube.</span> <span m="4669780">And so you</span> <span
  m="4669890">have a</span> <span m="4669940">bunch</span> <span
  m="4670140">of</span> <span m="4670180">bacteria.</span> <span
  m="4671990">So</span> <span m="4672130">now</span> <span
  m="4672480">there's</span> <span m="4672680">selection</span> <span
  m="4673160">acting</span> <span m="4673480">in here,</span> <span
  m="4673640">because</span> <span m="4673820">the</span> <span
  m="4674160">faster</span> <span m="4674490">dividing</span> <span
  m="4674770">cells</span> <span m="4675170">are</span> <span
  m="4675260">spreading.</span></p><p><span m="4676040">However,</span> <span
  m="4676340">what</span> <span m="4676470">you</span> <span
  m="4676530">do</span> <span m="4676730">is</span> <span m="4676840">that  you
  then</span> <span m="4677320">plate</span> <span m="4678610">them</span> <span
  m="4679790">as</span> <span m="4679970">colonies.</span> <span
  m="4680790">And</span> <span m="4680850">these</span> <span
  m="4680950">colonies</span> <span m="4681280">each</span> <span
  m="4681410">started</span> <span m="4681810">as</span> <span
  m="4681880">single</span> <span m="4682310">cells.</span> <span
  m="4684240">Then</span> <span m="4684510">what you</span> <span
  m="4684680">do</span> <span m="4684790">is</span> <span m="4684860">you</span>
  <span m="4684940">just</span> <span m="4685120">take</span> <span
  m="4685350">a</span> <span m="4685500">random</span> <span
  m="4685970">cell,</span> <span m="4687900">a random</span> <span
  m="4688230">colony,</span> <span m="4689180">that</span> <span
  m="4689520">came</span> <span m="4689790">from a</span> <span
  m="4689940">single</span> <span m="4690160">cell,</span> <span
  m="4690760">and</span> <span m="4690900">you</span> <span m="4691000">grow
  it</span> <span m="4691290">up</span> <span m="4693490">here.</span> <span
  m="4694920">Or</span> <span m="4695070">you</span> <span
  m="4695160">could</span> <span m="4695240">just</span> <span
  m="4695360">replay</span> <span m="4695730">directly</span> <span
  m="4696190">if</span> <span m="4696290">you</span> <span
  m="4696390">like.</span> <span m="4697880">And</span> <span
  m="4698000">then</span> <span m="4698110">you</span> <span
  m="4698190">just</span> <span m="4698330">repeat</span> <span
  m="4698610">this</span> <span m="4698760">process.</span></p><p><span
  m="4702040">The</span> <span m="4702120">idea</span> <span
  m="4702370">is</span> <span m="4702450">that</span> <span
  m="4706160">you've</span> <span m="4706980">picked</span> <span
  m="4707290">a</span> <span m="4707380">random</span> <span
  m="4707740">cell</span> <span m="4708170">from</span> <span
  m="4708310">this</span> <span m="4708460">population</span> <span
  m="4708720">that</span> <span m="4708980">you</span> <span m="4709130">allowed
  it</span> <span m="4709370">to</span> <span m="4709420">grow</span> <span
  m="4709670">up,</span> <span m="4709910">and</span> <span
  m="4710150">so</span> <span m="4710250">you've</span> <span
  m="4710490">kind</span> <span m="4710610">of</span> <span
  m="4710700">removed</span> <span m="4711170">the</span> <span
  m="4711240">effects</span> <span m="4711600">of</span> <span
  m="4711670">selection</span> <span m="4712015">in</span> <span
  m="4712360">here.</span> <span m="4714220">So</span> <span
  m="4714380">when</span> <span m="4714490">you</span> <span
  m="4714600">pick</span> <span m="4714840">a</span> <span
  m="4714920">random</span> <span m="4715210">colony</span> <span
  m="4715570">here,</span> <span m="4715910">maybe</span> <span
  m="4716230">that</span> <span m="4716460">colony</span> <span
  m="4716930">got</span> <span m="4717190">some</span> <span
  m="4717370">weird</span> <span m="4717570">mutation</span> <span
  m="4718000">that</span> <span m="4718080">decreased</span> <span
  m="4718450">its</span> <span m="4718930">fitness,</span> <span
  m="4719130">but</span> <span m="4719230">it</span> <span
  m="4719290">wasn't</span> <span m="4719520">really</span> <span
  m="4719680">selected</span> <span m="4720080">against</span> <span
  m="4720440">because</span> <span m="4721060">you</span> <span
  m="4721190">just</span> <span m="4721400">kind</span> <span
  m="4721510">of</span> <span m="4721590">picked</span> <span
  m="4721810">one</span> <span m="4721930">of</span> <span
  m="4721970">these</span> <span m="4722100">colonies</span> <span
  m="4722460">randomly.</span> <span m="4724440">So</span> <span
  m="4724570">this</span> <span m="4724910">kind</span> <span
  m="4725170">of</span> <span m="4725260">process</span> <span
  m="4726370">is</span> <span m="4726980">a</span> <span m="4727090">way</span>
  <span m="4727230">of</span> <span m="4727320">reducing</span> <span
  m="4727610">what's</span> <span m="4727810">known</span> <span
  m="4728000">as</span> <span m="4728090">the</span> <span
  m="4728190">effective</span> <span m="4728830">population</span> <span
  m="4729330">size--</span> <span m="4729640">N</span> <span
  m="4729850">effective.</span></p><p><span m="4732730">So</span> <span
  m="4732930">when</span> <span m="4733110">populations</span> <span
  m="4733770">are</span> <span m="4733840">not</span> <span
  m="4734110">constant</span> <span m="4734620">in</span> <span
  m="4734710">time,</span> <span m="4736020">but</span> <span
  m="4736220">instead</span> <span m="4736860">oscillate</span> <span
  m="4737185">or</span> <span m="4737510">fluctuate,</span> <span
  m="4738420">then</span> <span m="4739270">in</span> <span
  m="4739420">many</span> <span m="4739590">cases</span> <span
  m="4740270">the</span> <span m="4740400">dynamics</span> <span
  m="4741290">or</span> <span m="4741370">the</span> <span
  m="4741450">strength</span> <span m="4742070">of</span> <span
  m="4742280">this</span> <span m="4742700">drift,</span> <span
  m="4743040">or</span> <span m="4743360">the</span> <span
  m="4743480">stochastic</span> <span m="4743990">stuff,</span> <span
  m="4744790">that</span> <span m="4745180">could</span> <span
  m="4745300">be</span> <span m="4745390">characterized</span> <span
  m="4745900">by</span> <span m="4746020">some</span> <span
  m="4746470">ineffective.</span> <span m="4746755">And</span> <span
  m="4747040">of</span> <span m="4747170">course,</span> <span
  m="4747840">depending</span> <span m="4748180">on</span> <span
  m="4748280">which</span> <span m="4748510">variable</span> <span
  m="4749170">or</span> <span m="4749300">which</span> <span
  m="4749460">quantity</span> <span m="4749890">you're</span> <span
  m="4750680">trying</span> <span m="4750870">to</span> <span
  m="4750920">study,</span> <span m="4751330">you</span> <span
  m="4751410">might</span> <span m="4751530">have</span> <span
  m="4751640">a</span> <span m="4751810">slightly</span> <span
  m="4752100">different</span> <span m="4752340">N</span> <span
  m="4752430">effective.</span> <span m="4753170">But</span> <span
  m="4753280">the</span> <span m="4753360">point</span> <span
  m="4753580">is</span> <span m="4753690">that</span> <span
  m="4754660">if</span> <span m="4754780">you</span> <span
  m="4754840">have</span> <span m="4754950">fluctuating</span> <span
  m="4755500">population</span> <span m="4755930">sizes,</span> <span
  m="4756700">then</span> <span m="4757910">the</span> <span
  m="4759440">relevant</span> <span m="4759980">population</span> <span
  m="4760410">size</span> <span m="4760700">for</span> <span
  m="4761350">thinking about</span> <span m="4761640">these</span> <span
  m="4761810">sorts</span> <span m="4762010">of</span> <span
  m="4762070">ideas,</span> <span m="4762430">is</span> <span
  m="4762560">often</span> <span m="4763650">towards</span> <span
  m="4763870">the</span> <span m="4763960">smaller</span> <span
  m="4764490">side</span> <span m="4764800">of</span> <span
  m="4765300">the</span> <span m="4765400">range</span> <span
  m="4765710">of</span> <span m="4765770">the</span> <span
  m="4765850">fluctuating</span> <span
  m="4766360">population.</span></p><p><span m="4766840">So</span> <span
  m="4766980">you're</span> <span m="4767090">kind</span> <span
  m="4767230">of</span> <span m="4767350">dominated</span> <span
  m="4767800">by</span> <span m="4768290">how</span> <span
  m="4769210">small</span> <span m="4769620">the</span> <span
  m="4769700">bottleneck</span> <span m="4770160">gets.</span> <span
  m="4771630">And</span> <span m="4771750">here,</span> <span
  m="4772030">you're</span> <span m="4772170">kind</span> <span
  m="4772310">of</span> <span m="4772390">going</span> <span
  m="4772600">through</span> <span m="4772720">a</span> <span
  m="4772770">single</span> <span m="4773180">cell</span> <span
  m="4773450">bottleneck,</span> <span m="4774180">so</span> <span
  m="4774300">that</span> <span m="4774450">leads</span> <span
  m="4774620">to</span> <span m="4774690">a</span> <span m="4774720">very</span>
  <span m="4774960">small</span> <span m="4775400">N</span> <span
  m="4775500">effective,</span> <span m="4776190">and it</span> <span
  m="4776350">allows</span> <span m="4776810">for</span> <span
  m="4776900">the</span> <span m="4777010">accumulation</span> <span
  m="4778160">of</span> <span m="4778430">deleterious</span> <span
  m="4778720">mutations.</span></p><p><span m="4785340">Now,</span> <span
  m="4785500">we'll</span> <span m="4785620">say</span> <span
  m="4785790">something</span> <span m="4786090">more</span> <span
  m="4786300">about</span> <span m="4786470">this</span> <span
  m="4786610">Muller's</span> <span m="4786900">ratchet</span> <span
  m="4787280">idea,</span> <span m="4787520">because</span> <span
  m="4788720">in</span> <span m="4789150">the</span> <span
  m="4789220">field</span> <span m="4789470">of</span> <span
  m="4789550">evolution,</span> <span m="4790080">I'd</span> <span
  m="4790180">say</span> <span m="4790260">one</span> <span
  m="4791830">of</span> <span m="4791870">the</span> <span
  m="4791950">big</span> <span m="4792400">overriding</span> <span
  m="4792830">questions</span> <span m="4793340">is</span> <span
  m="4793460">trying</span> <span m="4793630">to</span> <span
  m="4793680">understand</span> <span m="4794770">the</span> <span
  m="4795320">evolutionary</span> <span m="4796000">advantages</span> <span
  m="4796590">of</span> <span m="4796730">sexual</span> <span
  m="4797060">reproduction.</span> <span m="4799030">Because</span> <span
  m="4799410">of</span> <span m="4799530">this</span> <span
  m="4799770">famous</span> <span m="4800390">twofold</span> <span
  m="4801050">cost</span> <span m="4801390">of</span> <span
  m="4801460">sex.</span> <span m="4802220">That</span> <span
  m="4802770">it</span> <span m="4803270">seems</span> <span
  m="4803630">that</span> <span m="4803820">an</span> <span
  m="4804000">asexual</span> <span m="4804330">population</span> <span
  m="4804760">should</span> <span m="4804910">be</span> <span
  m="4805020">able</span> <span m="4805280">to</span> <span
  m="4806420">grow</span> <span m="4807470">twice</span> <span
  m="4807810">as</span> <span m="4807910">fast</span> <span
  m="4808310">as</span> <span m="4808450">a</span> <span
  m="4808500">sexually</span> <span m="4808830">reproducing</span> <span
  m="4809410">population,</span> <span m="4810540">because</span> <span
  m="4810870">the</span> <span m="4810980">males</span> <span
  m="4811400">are</span> <span m="4811480">not</span> <span
  m="4811930">giving</span> <span m="4812180">birth.</span></p><p><span
  m="4813440">So</span> <span m="4813570">it's</span> <span m="4813680">a</span>
  <span m="4813720">huge</span> <span m="4814160">cost</span> <span
  m="4814660">associated</span> <span m="4815150">with</span> <span
  m="4815230">sexual</span> <span m="4815500">reproduction.</span> <span
  m="4815940">The</span> <span m="4816000">question</span> <span
  m="4816300">is,</span> <span m="4816670">why</span> <span
  m="4816890">is</span> <span m="4817030">it that</span> <span
  m="4817300">so</span> <span m="4817460">many</span> <span
  m="4818290">organisms</span> <span m="4819000">engage</span> <span
  m="4819430">in</span> <span m="4819500">it?</span> <span
  m="4820020">And</span> <span m="4820330">one</span> <span
  m="4820570">of</span> <span m="4820720">the</span> <span
  m="4822520">explanations</span> <span m="4822775">that's</span> <span
  m="4823210">been</span> <span m="4823330">proposed</span> <span
  m="4823800">is</span> <span m="4823940">this</span> <span
  m="4824130">Muller's</span> <span m="4824510">ratchet</span> <span
  m="4824970">idea,</span> <span m="4825850">that</span> <span
  m="4826490">it</span> <span m="4826680">may</span> <span
  m="4827010">alleviate</span> <span m="4828050">this</span> <span
  m="4828620">accumulation</span> <span m="4829450">of</span> <span
  m="4829560">deleterious</span> <span m="4830190">mutations.</span> <span
  m="4831320">We'll</span> <span m="4831510">talk</span> <span
  m="4831810">more</span> <span m="4832110">about</span> <span
  m="4833220">how</span> <span m="4833510">this</span> <span
  m="4833680">works</span> <span m="4833960">out,</span> <span
  m="4834270">maybe</span> <span m="4834460">quantitatively,</span> <span
  m="4835350">and</span> <span m="4835450">the</span> <span
  m="4835550">other</span> <span m="4836110">proposals</span> <span
  m="4836630">and</span> <span m="4836720">so</span> <span
  m="4836840">forth</span> <span m="4837100">later,</span> <span
  m="4838000">but</span> <span m="4838210">you</span> <span
  m="4838310">may,</span> <span m="4839290">over</span> <span
  m="4839440">the</span> <span m="4839500">course</span> <span m="4839710">of
  your</span> <span m="4839870">studies,</span> <span m="4840190">come</span>
  <span m="4840310">across</span> <span m="4840600">this</span> <span
  m="4840680">Muller's</span> <span m="4841030">ratchet</span> <span
  m="4841920">vis-a-vis</span> <span m="4842610">the</span> <span
  m="4842760">question of</span> <span m="4843050">sexual</span> <span
  m="4843330">reproduction.</span> <span m="4843850">So</span> <span
  m="4843950">I</span> <span m="4844050">just</span> <span
  m="4844150">wanted</span> <span m="4844170">you</span> <span
  m="4844250">to</span> <span m="4844310">know</span> <span
  m="4844580">that</span> <span m="4845100">there</span> <span
  m="4845260">is</span> <span m="4845470">this</span> <span
  m="4845650">discussion</span> <span m="4846060">out</span> <span
  m="4846230">there,</span> <span m="4846450">about</span> <span
  m="4847280">how</span> <span m="4847430">sexual</span> <span
  m="4847750">reproduction</span> <span m="4848200">may</span> <span
  m="4848920">allow</span> <span m="4849320">for</span> <span
  m="4849490">the</span> <span m="4849580">separation</span> <span
  m="4850230">of</span> <span m="4850310">these</span> <span
  m="4850490">beneficial</span> <span m="4851150">and</span> <span
  m="4851270">deleterious</span> <span m="4851860">mutations</span> <span
  m="4852900">that</span> <span m="4853020">would</span> <span
  m="4853100">otherwise</span> <span m="4854000">accumulate</span> <span
  m="4854300">in the</span> <span m="4854600">population.</span></p>
embedded_media:
  - uid: 11c5f1653e99d3336585789667b2beb1
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: KLrPm-BEEOI
  - uid: dbef0648a0573c23afcff14ffd9c38a6
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/KLrPm-BEEOI/default.jpg'
  - uid: cf3ca481cc78c21247b53c8177cd7fe7
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1020693367'
  - uid: f1de9bc7cc77d1c243a23d12b2c288b6
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT8.591JF14/MIT8_591JF14_lec15_300k.mp4'
  - uid: b65b0575963ee51e9356d50be4cb0060
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: KLrPm-BEEOI
  - uid: c72bbdd38f0614a711696310f23eeb6e
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: KLrPm-BEEOI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/evolution-in-finite-populations/KLrPm-BEEOI.srt
  - uid: 71ee6d98ea7050f2059b327410f32b13
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: KLrPm-BEEOI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/evolution-in-finite-populations/KLrPm-BEEOI.pdf
  - uid: fc5171cbd4da6e5f949f4745f768db6a
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 1f679fda81158bf6f3b02316dd42be68
    parent_uid: 0a5eef946f4006ee8fb84f80badfd67e
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
