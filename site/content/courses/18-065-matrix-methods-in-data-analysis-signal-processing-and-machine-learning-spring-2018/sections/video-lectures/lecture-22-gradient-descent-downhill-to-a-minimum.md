---
title: 'Lecture 22: Gradient Descent: Downhill to a Minimum'
uid: 4318cf43b3aa08b79564f2376a48f586
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-22-gradient-descent-downhill-to-a-minimum
short_url: lecture-22-gradient-descent-downhill-to-a-minimum
inline_embed_id: 65834604lecture22gradientdescentdownhilltoaminimum40843383
about_this_resource_text: >-
  <h2 class="subhead"><strong>Description</strong></h2> <p>Gradient descent is
  the most common optimization algorithm in deep learning and machine learning.
  It only takes into account the first derivative when performing updates on
  parameters&mdash;the stepwise process that moves downhill to reach a local
  minimum.</p> <h2 class="subhead"><strong>Summary</strong></h2> <p>Gradient
  descent: Downhill from \(x\) to new  \(X = x - s (\partial F / \partial
  x)\)<br /> Excellent example: \(F(x,y) = \frac{1}{2} (x^2 + by^2)\)<br /> If
  \(b\) is small we take a zig-zag path toward (0, 0).<br /> Each step
  multiplies by \((b - 1)/(b + 1)\)<br /> Remarkable function: logarithm of
  determinant of \(X\)</p> <p>Related section in textbook: VI.4</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
related_resources_text: ''
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">Open</span> <span
  m="7040">Courseware</span> <span m="7520">continue</span> <span
  m="8029">to</span> <span m="8180">offer</span> <span m="8510">high</span>
  <span m="8720">quality</span> <span m="9200">educational</span> <span
  m="9860">resources</span> <span m="10430">for</span> <span
  m="10550">free.</span> <span m="11610">To</span> <span m="11630">make</span>
  <span m="11840">a</span> <span m="11900">donation</span> <span
  m="12680">or</span> <span m="12800">to</span> <span m="12950">view</span>
  <span m="13160">additional</span> <span m="13550">materials</span> <span
  m="14180">from</span> <span m="14360">hundreds</span> <span
  m="14690">of</span> <span m="14810">MIT</span> <span m="15170">courses,</span>
  <span m="16470">visit</span> <span
  m="16670">MITopencourseware@ocw.MIT.edu.</span></p><p><span m="24170">GILBERT
  STRANG:</span> <span m="24600">So</span> <span m="25830">I'm</span> <span
  m="25980">going</span> <span m="26090">to</span> <span m="26190">talk</span>
  <span m="26400">about</span> <span m="27510">the</span> <span
  m="28230">gradient</span> <span m="28700">descent</span> <span
  m="29070">today</span> <span m="29730">to</span> <span m="29850">get</span>
  <span m="30300">to</span> <span m="30480">that</span> <span
  m="30870">central</span> <span m="31920">algorithm</span> <span
  m="32580">of</span> <span m="35220">neural</span> <span m="35550">net</span>
  <span m="35910">deep</span> <span m="36210">learning,</span> <span
  m="36750">machine</span> <span m="37200">learning,</span> <span
  m="38190">and</span> <span m="38490">optimization</span> <span
  m="39360">in</span> <span m="39480">general.</span> <span m="40530">So</span>
  <span m="40740">I'm</span> <span m="40890">trying</span> <span
  m="41160">to</span> <span m="41280">minimize</span> <span m="41900">a</span>
  <span m="41990">function.</span> <span m="43230">And</span> <span
  m="45780">that's</span> <span m="46140">the</span> <span m="46230">way</span>
  <span m="46980">you</span> <span m="47160">do</span> <span m="47400">it</span>
  <span m="47680">if</span> <span m="47910">there</span> <span
  m="48180">are</span> <span m="49080">many,</span> <span m="49540">many</span>
  <span m="49740">variables,</span> <span m="50400">too</span> <span
  m="50610">many</span> <span m="50970">to</span> <span m="51150">take</span>
  <span m="51450">second</span> <span m="51840">derivatives,</span> <span
  m="52890">then</span> <span m="53430">we</span> <span m="53610">settle</span>
  <span m="53940">for</span> <span m="54110">first</span> <span
  m="54450">derivatives</span> <span m="55080">of</span> <span
  m="55200">the</span> <span m="55290">function.</span></p><p><span
  m="56880">So</span> <span m="57180">I</span> <span
  m="58290">introduced,</span> <span m="58980">and</span> <span
  m="59090">you've</span> <span m="59310">already</span> <span
  m="59610">met</span> <span m="59910">the</span> <span m="60480">idea</span>
  <span m="60870">of</span> <span m="61020">gradient.</span> <span
  m="61610">But</span> <span m="61860">let</span> <span m="62040">me</span>
  <span m="62190">just</span> <span m="62910">be</span> <span
  m="63060">sure</span> <span m="63330">to</span> <span m="63450">make</span>
  <span m="63690">some</span> <span m="63930">comments</span> <span
  m="64470">about</span> <span m="64830">the</span> <span
  m="64950">gradient</span> <span m="66090">and</span> <span
  m="66270">the</span> <span m="66360">Hessian</span> <span m="67410">and</span>
  <span m="67620">the</span> <span m="68730">role</span> <span
  m="69090">of</span> <span m="69210">convexity</span> <span
  m="70800">before</span> <span m="71190">we</span> <span m="71400">see</span>
  <span m="72480">the</span> <span m="72600">big</span> <span
  m="73710">crucial</span> <span m="74280">example.</span> <span
  m="75610">So</span> <span m="75690">I've</span> <span m="75960">kind</span>
  <span m="76200">of</span> <span m="76320">prepared</span> <span
  m="76980">over</span> <span m="77250">here</span> <span m="78030">for</span>
  <span m="78270">this</span> <span m="78570">crucial</span> <span
  m="79080">example.</span> <span m="82010">The</span> <span
  m="82110">function</span> <span m="82680">is</span> <span m="83460">a</span>
  <span m="83520">pure</span> <span m="83820">quadratic,</span> <span
  m="85070">two</span> <span m="85500">unknowns,</span> <span m="86680">x</span>
  <span m="86820">and</span> <span m="86940">y,</span> <span
  m="88590">pure</span> <span m="88920">quadratic.</span> <span
  m="90240">So</span> <span m="90510">every</span> <span m="90840">pure</span>
  <span m="91200">quadratic</span> <span m="92580">I</span> <span
  m="92730">can</span> <span m="92940">write</span> <span m="94020">in</span>
  <span m="94200">terms</span> <span m="94620">of</span> <span
  m="94770">a</span> <span m="95250">symmetric</span> <span
  m="95880">matrix</span> <span m="96450">s.</span></p><p><span
  m="97160">And</span> <span m="97290">in</span> <span m="97440">this</span>
  <span m="97680">case,</span> <span m="98970">x1</span> <span
  m="99510">squared</span> <span m="99930">was</span> <span
  m="100110">bx2</span> <span m="100820">squared,</span> <span
  m="101250">the</span> <span m="102030">symmetric,</span> <span
  m="102890">the</span> <span m="103080">matrix</span> <span
  m="103710">is</span> <span m="103950">just</span> <span m="104460">2</span>
  <span m="104670">by</span> <span m="104850">2.</span> <span
  m="105810">It's</span> <span m="106050">diagonal.</span> <span
  m="107040">It's</span> <span m="107280">got</span> <span
  m="109230">eigenvalues</span> <span m="110010">1</span> <span
  m="110250">and</span> <span m="110400">b</span> <span
  m="110790">sitting</span> <span m="111270">on</span> <span
  m="111390">the</span> <span m="111480">diagonal.</span> <span
  m="112440">I'm</span> <span m="112650">thinking</span> <span
  m="113070">of</span> <span m="113220">b</span> <span m="113580">as</span>
  <span m="113760">being</span> <span m="114060">the</span> <span
  m="114210">smaller</span> <span m="114750">one.</span> <span
  m="116020">So</span> <span m="117780">the</span> <span
  m="118830">condition</span> <span m="119370">number,</span> <span
  m="119760">which</span> <span m="120060">we'll</span> <span
  m="120390">see,</span> <span m="120720">is</span> <span m="120900">all</span>
  <span m="121110">important</span> <span m="122490">in</span> <span
  m="123270">the</span> <span m="123480">question</span> <span
  m="124080">of</span> <span m="124230">the</span> <span m="124380">speed</span>
  <span m="124830">of</span> <span m="124950">convergence</span> <span
  m="127230">is</span> <span m="129120">the</span> <span m="129270">ratio</span>
  <span m="130080">of</span> <span m="130889">the</span> <span
  m="130979">largest</span> <span m="131550">to</span> <span
  m="131670">the</span> <span m="131790">smallest.</span></p><p><span
  m="133260">In</span> <span m="133320">this</span> <span
  m="133560">case,</span> <span m="133950">the</span> <span
  m="134070">largest</span> <span m="134580">is</span> <span m="134730">1</span>
  <span m="135660">the</span> <span m="135750">smallest</span> <span
  m="136320">is</span> <span m="136470">b.</span> <span m="137310">So</span>
  <span m="137550">that's</span> <span m="137820">1</span> <span
  m="138080">over</span> <span m="138330">b.</span> <span m="139260">And</span>
  <span m="140220">when</span> <span m="140550">1</span> <span
  m="140790">over</span> <span m="141000">b</span> <span m="141210">is</span>
  <span m="141390">a</span> <span m="141450">big</span> <span
  m="141720">number,</span> <span m="143370">when</span> <span
  m="143550">b</span> <span m="143850">is</span> <span m="144040">a</span> <span
  m="144240">very</span> <span m="144660">small</span> <span
  m="145050">number,</span> <span m="145470">then</span> <span
  m="145830">that's</span> <span m="146130">when</span> <span
  m="146370">we're</span> <span m="146550">in</span> <span
  m="146700">trouble.</span></p><p><span m="151560">When</span> <span
  m="151770">the</span> <span m="151890">matrix</span> <span
  m="152400">is</span> <span m="152520">symmetric,</span> <span
  m="153240">that</span> <span m="153450">condition</span> <span
  m="153960">number</span> <span m="154380">is</span> <span
  m="154560">lambda</span> <span m="155010">max</span> <span
  m="155460">over</span> <span m="155760">lambda</span> <span
  m="156170">min.</span> <span m="157620">If</span> <span m="157890">I</span>
  <span m="158070">had</span> <span m="158760">an</span> <span
  m="158970">unsymmetric</span> <span m="159630">matrix,</span> <span
  m="160710">I</span> <span m="160830">would</span> <span
  m="161010">probably</span> <span m="161370">use</span> <span
  m="161640">sigma</span> <span m="162090">max</span> <span
  m="162540">over</span> <span m="162840">sigma</span> <span
  m="163230">min,</span> <span m="163530">of</span> <span
  m="163620">course.</span> <span m="164360">But</span> <span
  m="164630">here,</span> <span m="165630">matrices</span> <span
  m="166380">are</span> <span m="166500">symmetric.</span></p><p><span
  m="168660">We're</span> <span m="168840">going</span> <span
  m="168990">to</span> <span m="169080">see</span> <span
  m="170730">something</span> <span m="171510">neat</span> <span
  m="172170">is</span> <span m="172500">that</span> <span m="172680">we</span>
  <span m="172860">can</span> <span m="173130">actually</span> <span
  m="174960">take</span> <span m="175260">the</span> <span
  m="175410">steps</span> <span m="175920">of</span> <span
  m="176040">steepest</span> <span m="176510">descent,</span> <span
  m="178260">write</span> <span m="178590">down</span> <span
  m="178890">what</span> <span m="179130">each</span> <span
  m="179670">step</span> <span m="180270">gives</span> <span
  m="180630">us,</span> <span m="181440">and</span> <span m="182010">see</span>
  <span m="182340">how</span> <span m="182640">quickly</span> <span
  m="183120">they</span> <span m="183810">converge</span> <span
  m="184530">to</span> <span m="184710">the</span> <span
  m="184920">answer.</span> <span m="185310">And</span> <span
  m="185430">what</span> <span m="185640">is</span> <span m="185790">the</span>
  <span m="185970">answer?</span> <span m="187220">So</span> <span
  m="188200">I</span> <span m="188340">haven't</span> <span
  m="188700">put</span> <span m="188970">in</span> <span m="189180">any</span>
  <span m="189510">linear</span> <span m="190020">term</span> <span
  m="190440">here.</span></p><p><span m="191370">So</span> <span
  m="191850">I</span> <span m="192000">just</span> <span m="192240">have</span>
  <span m="192390">a</span> <span m="192450">bowl</span> <span
  m="193080">sitting</span> <span m="193530">on</span> <span
  m="193650">the</span> <span m="193770">origin.</span> <span
  m="194730">So</span> <span m="194970">of</span> <span
  m="195090">course,</span> <span m="195420">the</span> <span
  m="195540">minimum</span> <span m="195990">point</span> <span
  m="196410">is</span> <span m="196800">x</span> <span m="197100">equal</span>
  <span m="197460">0,</span> <span m="197790">y</span> <span
  m="198120">equals</span> <span m="198360">0.</span> <span m="198990">So</span>
  <span m="199200">the</span> <span m="199290">minimum</span> <span
  m="199740">point</span> <span m="200780">x</span> <span
  m="201030">star,</span> <span m="202560">is</span> <span m="203820">0,</span>
  <span m="204180">0,</span> <span m="204540">of</span> <span
  m="204630">course.</span></p><p><span m="206050">So</span> <span
  m="206160">the</span> <span m="206280">question</span> <span
  m="206790">will</span> <span m="207090">be</span> <span m="207360">how</span>
  <span m="207600">quickly</span> <span m="208080">do</span> <span
  m="208200">we</span> <span m="208350">get</span> <span m="208530">to</span>
  <span m="208680">that</span> <span m="208950">one.</span> <span
  m="209670">And</span> <span m="209790">you</span> <span m="209890">will</span>
  <span m="210010">say</span> <span m="210360">pretty</span> <span
  m="210720">small</span> <span m="211080">example,</span> <span
  m="212160">not</span> <span m="212400">typical.</span> <span
  m="213450">But</span> <span m="213750">the</span> <span
  m="214050">terrific</span> <span m="214680">thing</span> <span
  m="215010">is</span> <span m="215340">that</span> <span m="215520">we</span>
  <span m="216570">see</span> <span m="217080">everything</span> <span
  m="217680">for</span> <span m="217860">this</span> <span
  m="218160">example.</span></p><p><span m="218890">We</span> <span
  m="219000">can</span> <span m="219210">see</span> <span m="219660">the</span>
  <span m="220500">actual</span> <span m="221010">steps</span> <span
  m="221700">of</span> <span m="221850">steepest</span> <span
  m="222360">descent.</span> <span m="223380">We</span> <span
  m="223500">can</span> <span m="223680">see</span> <span m="223890">how</span>
  <span m="224100">quickly</span> <span m="224640">they</span> <span
  m="224850">converge</span> <span m="225600">to</span> <span
  m="225750">the</span> <span m="227240">x</span> <span m="227550">star,</span>
  <span m="228030">the</span> <span m="228210">answer,</span> <span
  m="229640">the</span> <span m="230060">place</span> <span
  m="230730">where</span> <span m="231150">this</span> <span
  m="231360">thing</span> <span m="231660">is</span> <span m="231810">a</span>
  <span m="231870">minimum.</span> <span m="232890">And</span> <span
  m="233460">we</span> <span m="233790">can</span> <span m="236400">begin</span>
  <span m="236820">to</span> <span m="236910">think</span> <span
  m="238680">what</span> <span m="238950">to</span> <span m="239100">do</span>
  <span m="239370">if</span> <span m="239580">it's</span> <span
  m="239760">too</span> <span m="240000">slow.</span></p><p><span
  m="241440">So</span> <span m="242880">I'll</span> <span m="243030">come</span>
  <span m="243270">to</span> <span m="243390">that</span> <span
  m="243630">example</span> <span m="244650">after</span> <span
  m="245070">some</span> <span m="246000">general</span> <span
  m="246480">thoughts</span> <span m="246930">about</span> <span
  m="247350">gradients,</span> <span m="248580">Hessians.</span> <span
  m="249840">So</span> <span m="249990">what</span> <span m="250200">does</span>
  <span m="250350">the</span> <span m="250440">gradient</span> <span
  m="250920">tell</span> <span m="251220">us?</span> <span m="252300">So</span>
  <span m="252690">let</span> <span m="252870">me</span> <span
  m="253020">just</span> <span m="253230">take</span> <span m="253510">an</span>
  <span m="253650">example</span> <span m="254220">of</span> <span
  m="254340">the</span> <span m="254460">gradient.</span> <span
  m="257860">Let</span> <span m="258010">me</span> <span m="258130">take</span>
  <span m="258399">a</span> <span m="258459">linear</span> <span
  m="258850">function,</span> <span m="259870">f</span> <span
  m="260050">of</span> <span m="260170">xy</span> <span m="260950">equals</span>
  <span m="262380">say,</span> <span m="262870">2x</span> <span
  m="263410">plus</span> <span m="263620">5y.</span> <span m="266560">I</span>
  <span m="266680">just</span> <span m="266890">think</span> <span
  m="267160">we</span> <span m="267340">ought</span> <span m="267490">to</span>
  <span m="267610">get</span> <span m="267820">totally</span> <span
  m="268390">familiar</span> <span m="268990">with</span> <span
  m="269710">these.</span></p><p><span m="271540">We're</span> <span
  m="272110">doing</span> <span m="272410">something.</span> <span
  m="273910">We're</span> <span m="274510">jumping</span> <span
  m="274990">into</span> <span m="276370">an</span> <span
  m="276520">important</span> <span m="277570">topic.</span> <span
  m="278800">When</span> <span m="278980">I</span> <span m="279160">ask</span>
  <span m="279460">you</span> <span m="279550">what's</span> <span
  m="279880">the</span> <span m="279970">gradient,</span> <span
  m="281440">that's</span> <span m="281800">a</span> <span
  m="282670">freshman</span> <span m="283150">question.</span> <span
  m="283780">But</span> <span m="284410">let's</span> <span
  m="284710">just</span> <span m="285430">be</span> <span m="285670">sure</span>
  <span m="285940">we</span> <span m="286090">know</span> <span
  m="286420">how</span> <span m="286630">to</span> <span
  m="287170">interpret</span> <span m="287740">the</span> <span
  m="287860">gradient,</span> <span m="288460">how</span> <span
  m="288610">to</span> <span m="288700">compute</span> <span
  m="289150">it,</span> <span m="289900">what</span> <span m="290050">it</span>
  <span m="290170">means,</span> <span m="291970">how</span> <span
  m="292120">to</span> <span m="292240">see</span> <span m="292480">it</span>
  <span m="292570">geometrically.</span></p><p><span m="294200">So</span> <span
  m="294280">what's</span> <span m="294580">the</span> <span
  m="294670">gradient</span> <span m="295210">of</span> <span
  m="295330">that</span> <span m="295840">function?</span> <span
  m="296650">It's</span> <span m="296860">a</span> <span
  m="296890">function</span> <span m="297370">of</span> <span
  m="297490">two</span> <span m="297700">variables.</span> <span
  m="298380">So</span> <span m="298510">the</span> <span
  m="298630">gradient</span> <span m="299170">is</span> <span
  m="299320">a</span> <span m="299380">vector</span> <span
  m="300220">with</span> <span m="300430">two</span> <span
  m="300670">components.</span> <span m="302110">And</span> <span
  m="302320">they</span> <span m="302560">are?</span> <span
  m="307540">The</span> <span m="307770">derivative</span> <span
  m="308280">of</span> <span m="308360">this</span> <span
  m="308580">factor</span> <span m="308850">x,</span> <span
  m="309180">which</span> <span m="309420">is</span> <span m="309600">2</span>
  <span m="310520">and</span> <span m="310680">the</span> <span
  m="310800">derivative</span> <span m="311075">of</span> <span
  m="311350">this</span> <span m="311480">factor</span> <span
  m="311790">y,</span> <span m="312150">which</span> <span m="312390">is</span>
  <span m="312540">5.</span></p><p><span m="313320">So</span> <span
  m="314250">in</span> <span m="314370">this</span> <span
  m="314580">case,</span> <span m="315010">the</span> <span
  m="315030">gradient</span> <span m="315630">is</span> <span
  m="315960">constant.</span> <span m="317100">And</span> <span
  m="317460">the</span> <span m="317610">Hessian,</span> <span
  m="319410">which</span> <span m="319680">I</span> <span
  m="320580">often</span> <span m="320910">call</span> <span m="321270">H</span>
  <span m="321660">after</span> <span m="321990">Hessian,</span> <span
  m="322650">or</span> <span m="323720">del</span> <span
  m="324000">squared</span> <span m="324690">F</span> <span
  m="324990">would</span> <span m="325170">tell</span> <span
  m="325440">us</span> <span m="325650">we're</span> <span
  m="325800">taking</span> <span m="326200">the</span> <span
  m="326240">second</span> <span m="326610">derivatives,</span> <span
  m="327750">that</span> <span m="327990">will</span> <span m="328170">be</span>
  <span m="329980">the</span> <span m="330210">second</span> <span
  m="330600">derivatives</span> <span m="331170">obviously</span> <span
  m="331740">0</span> <span m="332160">in</span> <span m="332280">this</span>
  <span m="332490">case.</span></p><p><span m="333150">So</span> <span
  m="333330">what</span> <span m="335070">shape</span> <span
  m="335490">is</span> <span m="335730">H</span> <span m="336180">here?</span>
  <span m="338230">It's</span> <span m="338470">2</span> <span
  m="338680">by</span> <span m="338860">2.</span> <span
  m="339730">Everybody</span> <span m="340150">recognizes</span> <span
  m="340870">2</span> <span m="341080">by</span> <span m="341290">2</span> <span
  m="341860">is</span> <span m="342190">H</span> <span m="342580">would</span>
  <span m="342820">have</span> <span m="343748">the--</span> <span
  m="345212">I'll</span> <span m="345700">take</span> <span m="346060">a</span>
  <span m="346240">second</span> <span m="346930">derivative</span> <span
  m="347530">of</span> <span m="347740">that--</span> <span
  m="349220">sorry,</span> <span m="349720">the</span> <span
  m="349810">first</span> <span m="350140">derivative</span> <span
  m="350620">of</span> <span m="350740">that</span> <span m="350980">with</span>
  <span m="351160">respect</span> <span m="351490">to</span> <span
  m="351610">x,</span> <span m="352090">obviously</span> <span
  m="352660">0,</span> <span m="353470">the</span> <span m="353590">first</span>
  <span m="353930">derivative</span> <span m="354220">with</span> <span
  m="354370">respect</span> <span m="354700">to</span> <span
  m="354790">y,</span> <span m="355990">the</span> <span m="356110">first</span>
  <span m="356440">derivative</span> <span m="356920">of</span> <span
  m="357010">that</span> <span m="357280">with</span> <span
  m="357390">respect</span> <span m="357730">to</span> <span m="357820">x</span>
  <span m="358570">y.</span> <span m="360620">Anyway,</span> <span
  m="362290">Hessian</span> <span m="362720">0</span> <span
  m="363130">for</span> <span m="363220">sure.</span></p><p><span
  m="364840">So</span> <span m="365080">let</span> <span m="365260">me</span>
  <span m="365380">draw</span> <span m="367150">the</span> <span
  m="367270">surface.</span> <span m="368080">So</span> <span
  m="368350">x,</span> <span m="368605">y,</span> <span m="370000">and</span>
  <span m="370220">the</span> <span m="370380">surface,</span> <span
  m="370930">if</span> <span m="371080">I</span> <span m="371200">graph</span>
  <span m="371650">F</span> <span m="372010">in</span> <span
  m="372130">this</span> <span m="372400">direction,</span> <span
  m="373540">then</span> <span m="373840">obviously,</span> <span
  m="374380">I</span> <span m="374530">have</span> <span m="374890">a</span>
  <span m="375580">plane.</span> <span m="376960">And</span> <span
  m="377140">I'm</span> <span m="377360">at</span> <span m="377540">a</span>
  <span m="377650">typical</span> <span m="378160">point</span> <span
  m="379210">on</span> <span m="379480">the</span> <span m="379600">plane</span>
  <span m="380020">let's</span> <span m="380230">say.</span> <span
  m="380840">Yeah,</span> <span m="381510">yeah.</span> <span
  m="381910">So</span> <span m="382090">I'm</span> <span m="382240">at</span>
  <span m="382330">a</span> <span m="382420">point</span> <span
  m="382870">x,</span> <span m="383140">y,</span> <span m="383470">I</span>
  <span m="383560">should</span> <span m="383830">say.</span> <span
  m="384070">I'm</span> <span m="384250">at</span> <span m="384340">a</span>
  <span m="384370">point</span> <span m="384700">x,</span> <span
  m="384940">y.</span> <span m="385690">And</span> <span m="385840">let</span>
  <span m="385990">me</span> <span m="386140">put</span> <span
  m="386420">the</span> <span m="386800">plane</span> <span
  m="387280">through</span> <span m="387580">it.</span> <span
  m="388340">So</span> <span m="388570">how</span> <span m="388720">do</span>
  <span m="388900">I</span> <span m="389020">interpret</span> <span
  m="389470">the</span> <span m="389590">gradient</span> <span
  m="390160">at</span> <span m="390280">that</span> <span
  m="390550">particular</span> <span m="391150">point</span> <span
  m="391510">x,</span> <span m="391750">y?</span> <span m="395630">What</span>
  <span m="395820">does</span> <span m="396020">2x</span> <span
  m="396530">plus</span> <span m="396800">5y</span> <span m="397490">tell</span>
  <span m="397760">me?</span> <span m="398240">Or</span> <span
  m="398750">rather</span> <span m="399140">what</span> <span
  m="399380">does</span> <span m="399980">grad</span> <span m="400370">F</span>
  <span m="401270">tell</span> <span m="401540">me</span> <span
  m="405200">about</span> <span m="405800">movement</span> <span
  m="406400">from</span> <span m="406850">that</span> <span
  m="407180">point</span> <span m="408950">x,</span> <span m="409190">y?</span>
  <span m="410510">Of</span> <span m="410600">course,</span> <span
  m="410900">the</span> <span m="410960">gradient</span> <span
  m="411440">is</span> <span m="411500">constant.</span> <span
  m="412030">So</span> <span m="412220">it</span> <span m="412370">really</span>
  <span m="412640">didn't</span> <span m="412880">matter</span> <span
  m="413210">what</span> <span m="413840">point</span> <span
  m="414230">I'm</span> <span m="414380">moving</span> <span
  m="414830">from.</span> <span m="415130">But</span> <span
  m="416060">taking</span> <span m="416420">a</span> <span
  m="416480">point</span> <span m="416870">here.</span> <span
  m="417680">So</span> <span m="417890">what's</span> <span
  m="418250">the</span> <span m="418370">deal</span> <span m="419450">if</span>
  <span m="419630">I</span> <span m="419780">move?</span> <span
  m="420290">What's</span> <span m="420590">the</span> <span
  m="421340">fastest</span> <span m="421970">way</span> <span
  m="422180">to</span> <span m="422300">go</span> <span m="422540">up</span>
  <span m="423290">the</span> <span m="423410">surface?</span> <span
  m="424010">If</span> <span m="424160">I</span> <span m="424340">took</span>
  <span m="425000">the</span> <span m="425120">plane</span> <span
  m="426200">that</span> <span m="426380">went</span> <span
  m="426650">through</span> <span m="426950">that</span> <span
  m="427220">point</span> <span m="427580">x,</span> <span m="427850">y,</span>
  <span m="429110">what's</span> <span m="429380">the</span> <span
  m="429500">fastest</span> <span m="430010">way</span> <span
  m="430160">to</span> <span m="430280">climb</span> <span m="430670">the</span>
  <span m="430790">plane?</span> <span m="431620">What</span> <span
  m="431810">direction</span> <span m="432320">goes</span> <span
  m="432800">up</span> <span m="433130">fastest?</span> <span
  m="434630">The</span> <span m="434780">gradient</span> <span
  m="435260">direction,</span> <span m="435830">right?</span> <span
  m="436230">The</span> <span m="436370">gradient</span> <span
  m="436790">direction</span> <span m="437240">is</span> <span
  m="437390">the</span> <span m="437480">way</span> <span m="437750">up.</span>
  <span m="439080">How</span> <span m="439160">am</span> <span
  m="439280">I</span> <span m="439340">going</span> <span m="439460">to</span>
  <span m="439580">put</span> <span m="439910">it</span> <span
  m="440150">in</span> <span m="440330">this</span> <span
  m="440540">picture?</span> <span m="442700">I</span> <span
  m="442820">guess</span> <span m="443060">I'm</span> <span
  m="443240">thinking</span> <span m="443570">of</span> <span
  m="443690">this</span> <span m="443930">plane</span> <span
  m="445940">as--</span> <span m="446710">so</span> <span m="446900">what</span>
  <span m="447080">plane?</span> <span m="447530">You</span> <span
  m="447710">could</span> <span m="448010">well</span> <span
  m="448280">ask</span> <span m="448580">what</span> <span
  m="448730">plane</span> <span m="449060">have</span> <span m="449120">I</span>
  <span m="449300">drawn?</span> <span m="450230">Suppose</span> <span
  m="450680">I've</span> <span m="450890">drawn</span> <span
  m="451340">the</span> <span m="451460">plane</span> <span m="452450">2x</span>
  <span m="453320">plus</span> <span m="453740">5y</span> <span
  m="455870">equals</span> <span m="456260">0</span> <span
  m="456740">even?</span> <span m="459350">So</span> <span
  m="459560">I'll</span> <span m="459620">make</span> <span m="459950">it</span>
  <span m="460010">go</span> <span m="460110">through</span> <span
  m="460340">the</span> <span m="460430">arc.</span> <span m="461560">And</span>
  <span m="461690">I've</span> <span m="461810">taken</span> <span
  m="462200">a</span> <span m="462290">typical</span> <span
  m="462770">point</span> <span m="463130">on</span> <span
  m="463220">that</span> <span m="463340">plane.</span> <span
  m="464540">Now</span> <span m="464780">if</span> <span m="464930">I</span>
  <span m="465050">want</span> <span m="465380">to</span> <span
  m="466050">increase</span> <span m="466520">that</span> <span
  m="466790">function,</span> <span m="468380">I</span> <span
  m="468530">go</span> <span m="469280">perpendicular</span> <span
  m="470330">to</span> <span m="470480">the</span> <span
  m="470600">plane.</span> <span m="472700">If</span> <span m="472850">I</span>
  <span m="472970">want</span> <span m="473180">to</span> <span
  m="473270">stay</span> <span m="473630">level</span> <span
  m="474020">with</span> <span m="474290">the</span> <span
  m="474380">function,</span> <span m="474665">if</span> <span
  m="474950">I</span> <span m="475070">wanted</span> <span m="475370">to</span>
  <span m="475940">stay</span> <span m="476360">at</span> <span
  m="476480">0,</span> <span m="477440">I</span> <span m="477530">stay</span>
  <span m="477860">in</span> <span m="477980">the</span> <span
  m="478100">plane.</span> <span m="478620">So</span> <span
  m="478730">there</span> <span m="478850">are</span> <span
  m="478940">two</span> <span m="479720">key</span> <span
  m="479990">directions.</span> <span m="480650">Everybody</span> <span
  m="481310">knows</span> <span m="481670">this.</span> <span
  m="481880">I'm</span> <span m="482000">just</span> <span
  m="482210">repeating.</span> <span m="483200">This</span> <span
  m="483470">is</span> <span m="483620">the</span> <span
  m="483740">direction</span> <span m="484310">of</span> <span
  m="484460">the</span> <span m="484550">gradient</span> <span
  m="485180">of</span> <span m="485330">F</span> <span m="487820">out</span>
  <span m="488030">of</span> <span m="488090">the</span> <span
  m="488180">plane,</span> <span m="488700">steepest</span> <span
  m="489320">upwards.</span> <span m="490250">This</span> <span
  m="490490">is</span> <span m="490670">the</span> <span
  m="490820">downwards</span> <span m="491540">direction</span> <span
  m="492110">minus</span> <span m="492650">gradient</span> <span
  m="493190">of</span> <span m="493310">F,</span> <span
  m="494210">perpendicular</span> <span m="494630">to</span> <span
  m="494840">the</span> <span m="495050">plane</span> <span
  m="495800">downwards.</span> <span m="496940">And</span> <span
  m="498560">that</span> <span m="498860">line</span> <span m="499190">is</span>
  <span m="499400">in</span> <span m="499580">the</span> <span
  m="499700">plane.</span> <span m="501800">That's</span> <span
  m="502130">part</span> <span m="502460">of</span> <span m="502580">the</span>
  <span m="502670">level</span> <span m="503030">set.</span> <span
  m="503660">2x</span> <span m="503900">plus</span> <span m="504350">5y</span>
  <span m="505150">equals</span> <span m="505270">0</span> <span
  m="505580">would</span> <span m="505700">be</span> <span m="505850">a</span>
  <span m="505910">level</span> <span m="506210">set.</span> <span
  m="508070">That's</span> <span m="508370">my</span> <span
  m="509810">pretty</span> <span m="510800">amateur</span> <span
  m="511550">picture.</span> <span m="512950">Just</span> <span
  m="514030">all</span> <span m="514270">I</span> <span m="514419">want</span>
  <span m="514659">to</span> <span m="514750">remember</span> <span
  m="515320">is</span> <span m="515470">these</span> <span
  m="515770">words</span> <span m="517330">level</span> <span
  m="520470">and</span> <span m="520750">steepest,</span> <span
  m="525130">up</span> <span m="526780">or</span> <span m="527050">down.</span>
  <span m="529330">Down</span> <span m="529720">with</span> <span
  m="529940">a</span> <span m="530020">minus</span> <span m="530410">sign</span>
  <span m="530860">that</span> <span m="531040">we</span> <span
  m="531250">see</span> <span m="532780">in</span> <span
  m="533560">steepest</span> <span m="534070">descent.</span> <span
  m="534610">So</span> <span m="535630">where</span> <span m="537890">in</span>
  <span m="538110">steepest</span> <span m="538590">descent.</span> <span
  m="543020">And</span> <span m="543390">what's</span> <span
  m="543720">the</span> <span m="543840">Hessian</span> <span
  m="544350">telling</span> <span m="544740">me</span> <span
  m="544920">about</span> <span m="545280">the</span> <span
  m="546000">surface</span> <span m="548900">if</span> <span m="549050">I</span>
  <span m="549200">take</span> <span m="549470">the</span> <span
  m="549650">matrix</span> <span m="550220">of</span> <span
  m="550340">second</span> <span m="550760">derivatives?</span> <span
  m="552810">So</span> <span m="553000">I</span> <span m="553060">have</span>
  <span m="553180">this</span> <span m="553390">surface.</span> <span
  m="554680">So</span> <span m="554810">I</span> <span m="554876">have</span>
  <span m="554942">a</span> <span m="555010">surface</span> <span
  m="557020">F</span> <span m="557470">equal</span> <span
  m="557770">constant.</span> <span m="562990">That's</span> <span
  m="563160">the</span> <span m="563430">sort</span> <span m="563670">of</span>
  <span m="563760">level</span> <span m="564180">surface.</span> <span
  m="565620">So</span> <span m="565710">if</span> <span m="565830">I</span>
  <span m="565950">stay</span> <span m="566340">in</span> <span
  m="566460">that</span> <span m="566700">surface,</span> <span
  m="568030">the</span> <span m="568150">gradient</span> <span
  m="568650">of</span> <span m="568770">F</span> <span m="569010">is</span>
  <span m="569100">0.</span> <span m="569530">Gradient</span> <span
  m="569785">of</span> <span m="570040">F</span> <span m="571170">is</span>
  <span m="571530">0</span> <span m="572860">in--</span> <span
  m="576960">on--</span> <span m="577950">on</span> <span m="578250">is</span>
  <span m="578430">a</span> <span m="578490">better</span> <span
  m="578700">word--</span> <span m="579270">on</span> <span
  m="579480">the</span> <span m="579570">surface.</span> <span
  m="583330">The</span> <span m="583700">gradient</span> <span
  m="584110">of</span> <span m="584270">F</span> <span m="584510">points</span>
  <span m="584960">perpendicular.</span> <span m="586220">But</span> <span
  m="590600">what</span> <span m="590750">about</span> <span
  m="594080">the</span> <span m="594590">Hessian,</span> <span
  m="595860">the</span> <span m="595970">second</span> <span
  m="596360">derivative?</span> <span m="598100">What</span> <span
  m="598310">is</span> <span m="598460">that</span> <span
  m="598640">telling</span> <span m="599030">me</span> <span
  m="599240">about</span> <span m="602580">that</span> <span
  m="602850">surface</span> <span m="603430">in</span> <span
  m="603570">particular</span> <span m="604680">when</span> <span
  m="604860">the</span> <span m="604980">Hessian</span> <span
  m="605460">is</span> <span m="605550">0</span> <span m="606450">or</span>
  <span m="606720">other</span> <span m="607050">surfaces?</span> <span
  m="607950">What</span> <span m="608400">does</span> <span
  m="608610">the</span> <span m="608730">Hessian</span> <span
  m="609240">tell</span> <span m="609480">me</span> <span
  m="610140">about--</span> <span m="613370">I'm</span> <span
  m="613530">thinking</span> <span m="613780">of</span> <span
  m="613860">the</span> <span m="613950">Hessian</span> <span
  m="614430">at</span> <span m="614610">a</span> <span
  m="614670">particular</span> <span m="615270">point.</span> <span
  m="616990">So</span> <span m="618660">I'm</span> <span
  m="618840">getting</span> <span m="619140">0</span> <span
  m="619620">for</span> <span m="619830">the</span> <span
  m="619920">Hessian</span> <span m="620430">because</span> <span
  m="620880">the</span> <span m="621000">surface</span> <span
  m="621580">is</span> <span m="622932">flat.</span> <span m="625580">If</span>
  <span m="625760">the</span> <span m="625880">surface</span> <span
  m="626540">was</span> <span m="631060">convex</span> <span
  m="631900">upwards</span> <span m="632680">from--</span> <span
  m="634180">if</span> <span m="634300">it</span> <span m="634390">was</span>
  <span m="634600">a</span> <span m="634660">convex</span> <span
  m="635320">or</span> <span m="635470">a</span> <span m="637510">graph</span>
  <span m="637960">of</span> <span m="638530">F,</span> <span
  m="640680">the</span> <span m="640800">Hessian</span> <span
  m="641280">would</span> <span m="641520">be--</span> <span
  m="646340">so</span> <span m="646680">I</span> <span m="646800">just</span>
  <span m="647010">want</span> <span m="647190">to</span> <span
  m="647280">make</span> <span m="647490">that</span> <span
  m="647700">connection</span> <span m="648240">now.</span> <span
  m="648810">What's</span> <span m="649050">the</span> <span
  m="649450">connection</span> <span m="649860">between</span> <span
  m="650400">the</span> <span m="650520">Hessian</span> <span
  m="651690">and</span> <span m="652440">convexity</span> <span
  m="654990">of</span> <span m="655170">the--</span> <span m="655590">the</span>
  <span m="655930">Hessian</span> <span m="656640">of</span> <span
  m="656760">the</span> <span m="656850">function</span> <span
  m="658680">and</span> <span m="659040">convexity</span> <span
  m="659820">of</span> <span m="659910">the</span> <span
  m="660000">function?</span> <span m="660660">So</span> <span
  m="660930">the</span> <span m="661050">point</span> <span m="661410">is</span>
  <span m="663420">that</span> <span m="663870">convexity--</span> <span
  m="666550">the</span> <span m="666780">Hessian</span> <span
  m="667200">tells</span> <span m="667530">me</span> <span
  m="668220">whether</span> <span m="668490">or</span> <span
  m="668550">not</span> <span m="668860">the</span> <span
  m="669000">surface</span> <span m="669510">is</span> <span
  m="669690">convex.</span> <span m="670350">And</span> <span
  m="670500">what</span> <span m="670740">is</span> <span m="670890">the</span>
  <span m="671040">test?</span></p><p><span m="671550">AUDIENCE:</span> <span
  m="671945">[INAUDIBLE].</span></p><p><span m="672600">GILBERT STRANG:</span>
  <span m="673020">Positive</span> <span m="673560">definite</span> <span
  m="674700">or</span> <span m="675300">semi</span> <span
  m="675690">definite.</span> <span m="676350">I'm</span> <span
  m="676530">just</span> <span m="677670">looking</span> <span
  m="678090">for</span> <span m="678270">an</span> <span
  m="678390">excuse</span> <span m="679020">to</span> <span
  m="679140">write</span> <span m="679470">down</span> <span
  m="680340">convexity</span> <span m="684600">and</span> <span
  m="685500">strong.</span> <span m="686910">Do</span> <span m="687030">I</span>
  <span m="687150">say</span> <span m="687390">strict</span> <span
  m="687840">or</span> <span m="687930">strong</span> <span
  m="688350">convexity?</span> <span m="689760">I've</span> <span
  m="689910">forgotten.</span> <span m="690630">Strict,</span> <span
  m="691080">I</span> <span m="691170">think.</span></p><p><span
  m="692150">Strictly</span> <span m="692540">convex.</span> <span
  m="698230">So</span> <span m="698440">convexity,</span> <span
  m="699570">the</span> <span m="699700">Hessian</span> <span
  m="700360">is</span> <span m="700810">positive</span> <span
  m="702280">semi-definite,</span> <span m="705100">or</span> <span
  m="705550">which</span> <span m="705880">includes--</span> <span
  m="708330">I</span> <span m="708410">better</span> <span m="708700">say</span>
  <span m="708970">that</span> <span m="709120">right</span> <span
  m="709390">here--</span> <span m="709990">includes</span> <span
  m="710590">positive</span> <span m="711160">definite.</span> <span
  m="718380">If</span> <span m="718560">I'm</span> <span
  m="718740">looking</span> <span m="719070">for</span> <span
  m="719220">a</span> <span m="719250">strict</span> <span
  m="719650">convexity,</span> <span m="720420">then</span> <span
  m="720630">I</span> <span m="720750">must</span> <span
  m="721140">require</span> <span m="721740">positive</span> <span
  m="722320">definite.</span> <span m="723220">H</span> <span
  m="723470">is</span> <span m="723720">positive</span> <span
  m="724980">definite.</span> <span m="729810">Semi-definite</span> <span
  m="730590">won't</span> <span m="730860">do.</span></p><p><span
  m="732300">So</span> <span m="732510">semi-definite</span> <span
  m="734300">for</span> <span m="734700">convex.</span> <span
  m="735300">So</span> <span m="735540">that</span> <span m="735660">in</span>
  <span m="735810">fact,</span> <span m="736260">the</span> <span
  m="737640">linear</span> <span m="738060">function</span> <span
  m="738540">is</span> <span m="738690">convex,</span> <span
  m="740340">but</span> <span m="740520">not</span> <span
  m="740760">strictly</span> <span m="741270">convex.</span> <span
  m="742170">Strictly</span> <span m="742650">means</span> <span
  m="743070">it</span> <span m="743280">really</span> <span
  m="743670">bends</span> <span m="744120">upwards.</span> <span
  m="745160">The</span> <span m="745230">Hessian</span> <span
  m="745770">is</span> <span m="745950">positive</span> <span
  m="746550">definite.</span> <span m="746890">The</span> <span
  m="747230">curvatures</span> <span m="748080">are</span> <span
  m="748530">positive.</span></p><p><span m="751120">So</span> <span
  m="751620">this</span> <span m="751860">would</span> <span
  m="752040">include</span> <span m="752460">linear</span> <span
  m="752850">functions,</span> <span m="754290">and</span> <span
  m="754680">that</span> <span m="754980">would</span> <span
  m="755310">not</span> <span m="755730">include</span> <span
  m="756210">linear</span> <span m="756570">function.</span> <span
  m="757460">They're</span> <span m="757620">not</span> <span
  m="757860">strictly</span> <span m="758370">convex.</span> <span
  m="760740">Good,</span> <span m="761130">good,</span> <span
  m="761370">good.</span></p><p><span m="762510">Some</span> <span
  m="762780">examples--</span> <span m="764400">OK,</span> <span
  m="764740">the</span> <span m="764900">number</span> <span
  m="765210">one</span> <span m="765450">example,</span> <span
  m="766090">of</span> <span m="766110">course,</span> <span
  m="766600">is</span> <span m="766680">the</span> <span m="766800">one</span>
  <span m="767040">we're</span> <span m="767760">talking</span> <span
  m="768180">about</span> <span m="768480">over</span> <span
  m="768690">here.</span> <span m="769410">So</span> <span
  m="769620">examples</span> <span m="775070">f</span> <span
  m="775280">of</span> <span m="775430">x</span> <span m="776570">equal</span>
  <span m="777890">1/2</span> <span m="778670">x</span> <span
  m="778940">transpose</span> <span m="779690">Sx.</span> <span
  m="783020">And</span> <span m="783320">of</span> <span
  m="783410">course,</span> <span m="783840">I</span> <span
  m="783940">could</span> <span m="784010">have</span> <span
  m="784220">linear</span> <span m="784580">terms</span> <span
  m="785660">minus</span> <span m="787070">a</span> <span
  m="787580">transpose</span> <span m="788300">x,</span> <span
  m="789310">a</span> <span m="789380">linear</span> <span
  m="789770">term.</span> <span m="790310">And</span> <span m="790430">I</span>
  <span m="790550">could</span> <span m="790730">have</span> <span
  m="790980">a</span> <span m="791060">constant.</span> <span
  m="793050">OK.</span></p><p>&nbsp;</p><p><span m="798790">So</span> <span
  m="799040">this</span> <span m="799310">function</span> <span
  m="799880">is</span> <span m="801320">strictly</span> <span
  m="801830">convex</span> <span m="803390">when</span> <span
  m="803630">S</span> <span m="803900">is</span> <span
  m="804110">positive</span> <span m="804710">definite,</span> <span
  m="805100">because</span> <span m="806396">H</span> <span m="806750">is</span>
  <span m="806930">now</span> <span m="808130">S</span> <span
  m="810140">for</span> <span m="810350">that</span> <span
  m="810590">function,</span> <span m="812860">for</span> <span
  m="813050">that</span> <span m="813260">function</span> <span
  m="813800">H.</span> <span m="814670">Usually</span> <span
  m="815240">H,</span> <span m="816140">the</span> <span
  m="816440">Hessian</span> <span m="817010">is</span> <span
  m="817190">varying</span> <span m="817730">from</span> <span
  m="817970">point</span> <span m="818340">to</span> <span
  m="818360">point.</span> <span m="819170">The</span> <span
  m="819320">nice</span> <span m="819680">thing</span> <span
  m="819920">about</span> <span m="820270">a</span> <span m="820360">pure</span>
  <span m="820700">quadratic</span> <span m="821420">is</span> <span
  m="821630">its</span> <span m="822110">constant.</span> <span
  m="822770">It's</span> <span m="823010">the</span> <span
  m="823100">same</span> <span m="823520">S</span> <span m="823760">at</span>
  <span m="823910">all</span> <span m="824090">points.</span></p><p><span
  m="826550">Let</span> <span m="826760">me</span> <span m="826910">just</span>
  <span m="827390">ask</span> <span m="827840">you--</span> <span
  m="829580">so</span> <span m="829820">that's</span> <span m="830080">a</span>
  <span m="830750">convex</span> <span m="831320">function.</span> <span
  m="833370">And</span> <span m="833750">what's</span> <span
  m="834050">its</span> <span m="834230">minimum?</span> <span
  m="836250">What's</span> <span m="836750">the</span> <span
  m="836870">gradient,</span> <span m="837320">first</span> <span
  m="837680">of</span> <span m="837770">all?</span> <span
  m="837890">What's</span> <span m="838160">the</span> <span
  m="838250">gradient</span> <span m="838760">of</span> <span
  m="838890">that?</span> <span m="843790">I'm</span> <span
  m="843970">asking</span> <span m="844420">really</span> <span
  m="844990">for</span> <span m="846130">differentiating</span> <span
  m="849570">thinking</span> <span m="849980">in</span> <span
  m="850090">vector,</span> <span m="850990">doing</span> <span
  m="851320">all</span> <span m="852040">n</span> <span
  m="852340">derivatives</span> <span m="853450">at</span> <span
  m="853630">once</span> <span m="854080">here.</span> <span
  m="854440">I'm</span> <span m="854620">asking</span> <span
  m="855040">for</span> <span m="855190">the</span> <span
  m="855310">whole</span> <span m="856000">vector</span> <span
  m="856510">of</span> <span m="856600">first</span> <span
  m="856960">derivatives.</span></p><p><span m="859840">Because</span> <span
  m="860230">here</span> <span m="860440">I'm</span> <span
  m="860620">giving</span> <span m="860980">you</span> <span
  m="861190">the</span> <span m="861340">whole</span> <span
  m="862240">function</span> <span m="864420">with</span> <span
  m="864870">x</span> <span m="866080">for</span> <span m="866330">vector</span>
  <span m="866820">x.</span> <span m="868150">Of</span> <span
  m="868270">course,</span> <span m="869120">we</span> <span
  m="869200">could</span> <span m="869380">take</span> <span m="869680">n</span>
  <span m="869860">to</span> <span m="869950">be</span> <span
  m="870130">1.</span> <span m="871210">And</span> <span m="871360">then</span>
  <span m="871600">we</span> <span m="871780">would</span> <span
  m="871990">see</span> <span m="872470">that</span> <span m="872740">if</span>
  <span m="872890">n</span> <span m="873100">was</span> <span
  m="873370">1,</span> <span m="873760">this</span> <span
  m="874030">would</span> <span m="874240">just</span> <span
  m="874480">be</span> <span m="875910">Sx</span> <span
  m="876430">squared,</span> <span m="877960">half</span> <span
  m="878320">Sx</span> <span m="878800">squared.</span> <span
  m="879880">And</span> <span m="880030">the</span> <span
  m="880150">derivative</span> <span m="880750">of</span> <span
  m="880930">a</span> <span m="880990">half</span> <span m="882100">Sx</span>
  <span m="882520">squared--</span> <span m="884170">let</span> <span
  m="884320">me</span> <span m="884410">just</span> <span m="884860">put</span>
  <span m="885040">that</span> <span m="885280">over</span> <span
  m="885460">here</span> <span m="885670">so</span> <span
  m="885880">we're</span> <span m="886030">sure</span> <span
  m="886300">to</span> <span m="886390">get</span> <span m="886540">it</span>
  <span m="886630">right--</span> <span m="886880">half</span> <span
  m="887230">of</span> <span m="887380">Sx</span> <span
  m="887830">squared.</span></p><p><span m="888700">This</span> <span
  m="888880">is</span> <span m="889060">in</span> <span m="889210">the</span>
  <span m="889390">n</span> <span m="889550">equal</span> <span
  m="889840">1</span> <span m="890170">case.</span> <span m="891490">And</span>
  <span m="891670">the</span> <span m="891760">derivative</span> <span
  m="892420">is</span> <span m="892600">obviously</span> <span
  m="893200">Sx.</span> <span m="893860">And</span> <span
  m="893980">that's</span> <span m="894280">what</span> <span
  m="894490">it</span> <span m="894640">is</span> <span m="894850">here,</span>
  <span m="895180">Sx.</span></p><p><span m="906490">It's</span> <span
  m="906750">obviously</span> <span m="907260">simple,</span> <span
  m="907740">but</span> <span m="909990">if</span> <span m="910110">you</span>
  <span m="910200">haven't</span> <span m="910500">thought</span> <span
  m="910740">about</span> <span m="912450">that</span> <span
  m="912720">line,</span> <span m="913950">it's</span> <span
  m="914190">asking</span> <span m="914700">for</span> <span
  m="915960">all</span> <span m="916290">the</span> <span
  m="916890">first</span> <span m="917250">derivatives</span> <span
  m="918120">of</span> <span m="919230">that</span> <span
  m="919440">quadratic</span> <span m="920100">function.</span> <span
  m="920850">Oh!</span> <span m="921570">It's</span> <span
  m="921780">not--</span> <span m="924300">What</span> <span
  m="924630">do</span> <span m="924780">I</span> <span m="924900">have</span>
  <span m="925110">to</span> <span m="925260">include</span> <span
  m="925770">now</span> <span m="926010">here?</span> <span
  m="927940">That's</span> <span m="928080">not</span> <span
  m="928350">right</span> <span m="928650">as</span> <span m="928830">it</span>
  <span m="928950">stands</span> <span m="929490">for</span> <span
  m="929700">the</span> <span m="929790">function</span> <span
  m="930960">that's</span> <span m="931200">written</span> <span
  m="931500">above</span> <span m="931800">it.</span> <span
  m="932610">What's</span> <span m="932880">the</span> <span
  m="932970">right</span> <span m="933330">gradient?</span></p><p><span
  m="933600">AUDIENCE:</span> <span m="933870">[INAUDIBLE].</span></p><p><span
  m="934335">GILBERT STRANG:</span> <span m="934800">Minus</span> <span
  m="935370">a,</span> <span m="935640">thanks.</span> <span
  m="938220">Because</span> <span m="938510">the</span> <span
  m="938610">linear</span> <span m="938970">function,</span> <span
  m="940010">its</span> <span m="940380">partial</span> <span
  m="940830">derivatives</span> <span m="941440">are</span> <span
  m="941590">obviously</span> <span m="942120">just</span> <span
  m="942310">the</span> <span m="942500">components</span> <span
  m="943150">of</span> <span m="943290">a.</span> <span m="945120">And</span>
  <span m="945410">the</span> <span m="946860">Hessian</span> <span
  m="947850">H</span> <span m="948540">is</span> <span m="950340">S,</span>
  <span m="952890">derivatives</span> <span m="953520">of</span> <span
  m="953670">that</span> <span m="953880">guy.</span> <span
  m="956030">OK.</span> <span m="956700">Good.</span> <span
  m="957300">Good,</span> <span m="957510">good,</span> <span
  m="957720">good.</span></p><p><span m="959550">And</span> <span
  m="960060">the</span> <span m="960480">minimum</span> <span
  m="960960">value--</span> <span m="961410">we</span> <span
  m="961590">might</span> <span m="961800">as</span> <span
  m="961920">well--</span> <span m="962100">oh</span> <span
  m="962310">yeah!</span> <span m="962520">What's</span> <span
  m="962820">the</span> <span m="962940">right</span> <span
  m="963390">words</span> <span m="964380">for</span> <span m="964530">a</span>
  <span m="964590">minimum</span> <span m="965010">value?</span> <span
  m="967820">No,</span> <span m="968190">I'm</span> <span
  m="968310">sorry.</span> <span m="969570">The</span> <span
  m="969660">right</span> <span m="969900">word</span> <span
  m="970140">is</span> <span m="970350">minimum</span> <span
  m="970770">value</span> <span m="971850">like</span> <span m="972120">f</span>
  <span m="972360">min.</span> <span m="974430">So</span> <span
  m="974610">I</span> <span m="974700">want</span> <span m="974880">to</span>
  <span m="974970">compute</span> <span m="975450">f</span> <span
  m="975750">min.</span></p><p><span m="977880">Well,</span> <span
  m="978060">first</span> <span m="978570">I</span> <span m="978720">have</span>
  <span m="978840">to</span> <span m="978960">figure</span> <span
  m="979350">out</span> <span m="979500">where</span> <span m="980790">is</span>
  <span m="980980">that</span> <span m="981180">minimum</span> <span
  m="981600">reached?</span> <span m="983930">And</span> <span
  m="984110">what's</span> <span m="984380">the</span> <span
  m="984470">answer</span> <span m="984800">to</span> <span
  m="984950">that?</span> <span m="987140">We're</span> <span
  m="987320">putting</span> <span m="987620">everything</span> <span
  m="988040">on</span> <span m="988160">the</span> <span m="988250">board</span>
  <span m="988550">for</span> <span m="988700">this</span> <span
  m="989780">simple</span> <span m="990140">case.</span> <span
  m="990840">The</span> <span m="990920">minimum</span> <span
  m="992550">of</span> <span m="992810">f</span> <span m="995840">of</span>
  <span m="996710">f</span> <span m="997220">of</span> <span m="997400">f</span>
  <span m="997580">of</span> <span m="997700">x--</span> <span
  m="998990">remember,</span> <span m="999440">it's</span> <span
  m="999970">x</span> <span m="1000220">is--</span> <span
  m="1000580">we're</span> <span m="1000760">in</span> <span
  m="1000880">n</span> <span m="1001030">dimensions--</span> <span
  m="1002290">is</span> <span m="1002920">at</span> <span m="1005650">x</span>
  <span m="1006160">equal</span> <span m="1007200">what?</span> <span
  m="1009910">Well,</span> <span m="1010240">the</span> <span
  m="1010330">minimum</span> <span m="1010810">is</span> <span
  m="1011020">where</span> <span m="1011220">the</span> <span
  m="1011350">gradient</span> <span m="1011890">is</span> <span
  m="1011950">0.</span></p><p><span m="1015460">So</span> <span
  m="1016000">what's</span> <span m="1016420">the</span> <span
  m="1016540">minimizing</span> <span m="1017320">x?</span> <span
  m="1019381">S</span> <span m="1019870">inverse</span> <span
  m="1020310">a,</span> <span m="1020800">thanks.</span> <span
  m="1028180">Sorry.</span> <span m="1029260">That's</span> <span
  m="1029589">not</span> <span m="1029890">right.</span> <span
  m="1032480">It's</span> <span m="1032750">here</span> <span
  m="1033050">that</span> <span m="1033230">I</span> <span
  m="1033349">meant</span> <span m="1033560">to</span> <span
  m="1033710">write</span> <span m="1033950">it.</span></p><p><span
  m="1037099">Really,</span> <span m="1037490">my</span> <span
  m="1038210">whole</span> <span m="1038460">point</span> <span
  m="1038839">for</span> <span m="1038990">this</span> <span
  m="1039260">little</span> <span m="1039500">moment</span> <span
  m="1040550">is</span> <span m="1040849">to</span> <span m="1040970">be</span>
  <span m="1041180">sure</span> <span m="1041480">that</span> <span
  m="1041630">we</span> <span m="1041810">keep</span> <span
  m="1042079">straight</span> <span m="1042470">what</span> <span
  m="1043250">I</span> <span m="1043339">mean</span> <span m="1043730">by</span>
  <span m="1044119">the</span> <span m="1045380">place</span> <span
  m="1045920">where</span> <span m="1046099">the</span> <span
  m="1046220">minimum</span> <span m="1046700">is</span> <span
  m="1046880">reached</span> <span m="1047780">and</span> <span
  m="1048140">the</span> <span m="1048260">minimum</span> <span
  m="1048710">value.</span> <span m="1049160">Those</span> <span
  m="1049430">are</span> <span m="1049520">two</span> <span
  m="1049790">different</span> <span m="1050150">things.</span> <span
  m="1054330">So</span> <span m="1054540">the</span> <span
  m="1054630">minimum</span> <span m="1055110">is</span> <span
  m="1055290">reached</span> <span m="1055770">at</span> <span
  m="1056070">S</span> <span m="1056330">inverse</span> <span
  m="1056810">a,</span> <span m="1057090">because</span> <span
  m="1057510">that's</span> <span m="1057840">obviously</span> <span
  m="1058410">where</span> <span m="1058650">the</span> <span
  m="1058770">gradient</span> <span m="1059670">is</span> <span
  m="1059790">0.</span> <span m="1060270">It's</span> <span
  m="1060490">the</span> <span m="1060570">solution</span> <span
  m="1061260">to</span> <span m="1061350">Sx</span> <span
  m="1061920">equal</span> <span m="1062280">a.</span></p><p><span
  m="1063073">And</span> <span m="1064020">what</span> <span
  m="1064170">I</span> <span m="1064260">was</span> <span
  m="1064440">going</span> <span m="1064590">to</span> <span
  m="1064650">ask</span> <span m="1065010">you</span> <span
  m="1065910">is</span> <span m="1066300">what's</span> <span
  m="1066690">the</span> <span m="1066810">right</span> <span
  m="1067740">word--</span> <span m="1068970">well,</span> <span
  m="1069690">sort</span> <span m="1070080">of</span> <span
  m="1070200">word,</span> <span m="1071700">made</span> <span
  m="1072090">up</span> <span m="1072240">word--</span> <span
  m="1072690">for</span> <span m="1074880">this</span> <span
  m="1075300">point</span> <span m="1075750">x</span> <span
  m="1075990">star</span> <span m="1076440">where</span> <span
  m="1076830">the</span> <span m="1077010">minimum</span> <span
  m="1077520">is</span> <span m="1077730">reached?</span> <span
  m="1078760">So</span> <span m="1078810">it's</span> <span
  m="1078930">not</span> <span m="1079170">the</span> <span
  m="1079260">minimum</span> <span m="1079680">value.</span> <span
  m="1080160">It's</span> <span m="1080390">the</span> <span
  m="1080450">point</span> <span m="1080820">where</span> <span
  m="1081060">it's</span> <span m="1081270">reached.</span> <span
  m="1081720">And</span> <span m="1081870">that's</span> <span
  m="1082200">called--</span> <span m="1083390">the</span> <span
  m="1083610">notation</span> <span m="1084210">for</span> <span
  m="1084390">that</span> <span m="1084600">point</span> <span
  m="1084990">is</span></p><p><span m="1086057">AUDIENCE:</span> <span
  m="1086524">Arg min.</span></p><p><span m="1086991">GILBERT STRANG:</span>
  <span m="1087460">Arg</span> <span m="1087960">min,</span> <span
  m="1088530">thanks.</span> <span m="1090240">Arg</span> <span
  m="1092110">min</span> <span m="1094370">of</span> <span m="1095000">my</span>
  <span m="1095210">function.</span> <span m="1096620">And</span> <span
  m="1096770">that</span> <span m="1097010">means</span> <span
  m="1097490">the</span> <span m="1097640">place--</span> <span
  m="1098900">the</span> <span m="1099050">point</span> <span
  m="1100160">where</span> <span m="1101960">f</span> <span
  m="1103520">equals</span> <span m="1104180">f</span> <span
  m="1104450">min.</span> <span m="1108200">I</span> <span
  m="1108320">haven't</span> <span m="1108650">said</span> <span
  m="1108980">yet</span> <span m="1109190">what</span> <span
  m="1109370">the</span> <span m="1109490">minimum</span> <span
  m="1109850">value</span> <span m="1110390">is.</span></p><p><span
  m="1110600">This</span> <span m="1110810">tells</span> <span
  m="1111170">us</span> <span m="1111350">the</span> <span
  m="1111470">point.</span> <span m="1111830">And</span> <span
  m="1111920">that's</span> <span m="1112190">usually</span> <span
  m="1112550">what</span> <span m="1112730">we're</span> <span
  m="1112910">interested</span> <span m="1113480">in.</span> <span
  m="1114290">We're,</span> <span m="1114710">to</span> <span
  m="1114860">tell</span> <span m="1115070">the</span> <span
  m="1115190">truth,</span> <span m="1115470">not</span> <span
  m="1115730">that</span> <span m="1116540">interested</span> <span
  m="1117140">in</span> <span m="1117290">a</span> <span
  m="1117350">typical</span> <span m="1117890">example</span> <span
  m="1118960">and</span> <span m="1119090">what</span> <span
  m="1119360">the</span> <span m="1119510">minimum</span> <span
  m="1119960">value</span> <span m="1120470">is</span> <span
  m="1121310">as</span> <span m="1121490">much</span> <span
  m="1121880">as</span> <span m="1122360">where</span> <span
  m="1122810">is</span> <span m="1123020">it?</span> <span
  m="1123740">Where</span> <span m="1124430">do</span> <span
  m="1124520">we</span> <span m="1124700">reach</span> <span
  m="1125060">that</span> <span m="1125360">thing?</span> <span
  m="1126590">And</span> <span m="1126800">of</span> <span
  m="1126890">course,</span> <span m="1127730">so</span> <span
  m="1128840">this</span> <span m="1129290">is</span> <span m="1129500">x</span>
  <span m="1129800">min.</span></p><p><span m="1130490">This</span> <span
  m="1130760">is</span> <span m="1130970">then</span> <span
  m="1132710">arg</span> <span m="1134204">min</span> <span
  m="1136280">of</span> <span m="1136580">my</span> <span
  m="1136880">function</span> <span m="1137400">f.</span> <span
  m="1140010">That's</span> <span m="1140220">the</span> <span
  m="1140370">point.</span> <span m="1140940">And</span> <span
  m="1141180">it</span> <span m="1141270">happens</span> <span
  m="1141780">to</span> <span m="1141870">be</span> <span m="1142440">in</span>
  <span m="1142590">this</span> <span m="1143010">case,</span> <span
  m="1144420">the</span> <span m="1144540">minimum</span> <span
  m="1144930">value</span> <span m="1145380">is</span> <span
  m="1145620">actually</span> <span m="1146130">0.</span> <span
  m="1151470">Because</span> <span m="1151830">there's</span> <span
  m="1153000">no</span> <span m="1153330">linear</span> <span
  m="1153720">term</span> <span m="1154130">a</span> <span
  m="1154560">transpose</span> <span m="1154875">x.</span></p><p><span
  m="1160080">Why</span> <span m="1160260">am</span> <span m="1160410">I</span>
  <span m="1162540">talking</span> <span m="1162900">about</span> <span
  m="1163190">arg</span> <span m="1163480">min</span> <span
  m="1164520">when</span> <span m="1164700">you've</span> <span
  m="1164880">all</span> <span m="1165060">seen</span> <span
  m="1165420">it?</span> <span m="1166270">I</span> <span
  m="1166980">guess</span> <span m="1167220">I</span> <span
  m="1167370">think</span> <span m="1167700">that</span> <span
  m="1168120">somebody</span> <span m="1168600">could</span> <span
  m="1168780">just</span> <span m="1168990">be</span> <span
  m="1169200">reading</span> <span m="1171270">this</span> <span
  m="1171900">stuff,</span> <span m="1173370">for</span> <span
  m="1173520">example,</span> <span m="1174270">learning</span> <span
  m="1174750">about</span> <span m="1176160">neural</span> <span
  m="1176460">net,</span> <span m="1178680">and</span> <span
  m="1178830">run</span> <span m="1179070">into</span> <span
  m="1179370">this</span> <span m="1179610">expression</span> <span
  m="1180240">arg min</span> <span m="1180740">and</span> <span
  m="1180900">think</span> <span m="1181230">what's</span> <span
  m="1181620">that?</span> <span m="1183360">So</span> <span
  m="1184260">it's</span> <span m="1185370">maybe</span> <span
  m="1185670">a</span> <span m="1185730">right</span> <span
  m="1186000">time</span> <span m="1186270">to</span> <span
  m="1186360">say</span> <span m="1186600">what</span> <span
  m="1186870">it</span> <span m="1187020">is.</span> <span
  m="1187620">It's</span> <span m="1187830">the</span> <span
  m="1187980">point</span> <span m="1188490">where</span> <span
  m="1188880">the</span> <span m="1189030">minimum</span> <span
  m="1189480">is</span> <span m="1189660">reached.</span></p><p><span
  m="1192930">Why</span> <span m="1193470">those</span> <span
  m="1193770">words,</span> <span m="1194370">by</span> <span
  m="1194580">the</span> <span m="1194700">way?</span> <span
  m="1195510">Well,</span> <span m="1195720">arg</span> <span
  m="1196080">isn't</span> <span m="1196440">much</span> <span
  m="1196710">of</span> <span m="1196830">a</span> <span
  m="1196890">word.</span> <span m="1197280">It</span> <span
  m="1197400">sounds</span> <span m="1197760">like</span> <span
  m="1198030">you're</span> <span m="1198150">getting</span> <span
  m="1199050">strangled.</span> <span m="1200160">But</span> <span
  m="1201800">it's</span> <span m="1202250">sort</span> <span
  m="1202600">of</span> <span m="1202720">short.</span> <span
  m="1203520">I</span> <span m="1203730">assume</span> <span
  m="1204210">it's</span> <span m="1204360">short.</span></p><p><span
  m="1205440">Nobody</span> <span m="1205860">ever</span> <span
  m="1206130">told</span> <span m="1206400">me</span> <span
  m="1206550">this.</span> <span m="1207300">I</span> <span
  m="1207450">assume</span> <span m="1207810">it's</span> <span
  m="1207930">short</span> <span m="1208290">for</span> <span
  m="1208590">argument.</span> <span m="1210210">The</span> <span
  m="1210330">word</span> <span m="1210660">argument</span> <span
  m="1211230">is</span> <span m="1211410">a</span> <span m="1211470">kind</span>
  <span m="1211710">of</span> <span m="1211770">long</span> <span
  m="1212160">word</span> <span m="1212520">for</span> <span
  m="1212760">the</span> <span m="1213270">value</span> <span
  m="1213900">of</span> <span m="1214050">x.</span> <span m="1215160">If</span>
  <span m="1215310">I</span> <span m="1215460">have</span> <span
  m="1215640">a</span> <span m="1215700">function</span> <span
  m="1216600">f</span> <span m="1216840">of</span> <span m="1216990">x,</span>
  <span m="1218330">f,</span> <span m="1218700">I</span> <span
  m="1218850">call</span> <span m="1219120">it</span> <span
  m="1219210">function</span> <span m="1220140">and</span> <span
  m="1220350">x</span> <span m="1220770">is</span> <span m="1221130">the</span>
  <span m="1221610">argument</span> <span m="1222240">of</span> <span
  m="1222330">that</span> <span m="1222470">function.</span> <span
  m="1223770">You</span> <span m="1223890">might</span> <span
  m="1224610">more</span> <span m="1224820">often</span> <span
  m="1225150">see</span> <span m="1225450">the</span> <span
  m="1225570">word</span> <span m="1225900">variable.</span></p><p><span
  m="1227430">But</span> <span m="1228480">argument--</span> <span
  m="1228960">and</span> <span m="1229140">I'm</span> <span
  m="1229350">assuming</span> <span m="1229800">that's</span> <span
  m="1230100">what</span> <span m="1230280">that</span> <span
  m="1230490">refers</span> <span m="1231000">to,</span> <span
  m="1231240">it's</span> <span m="1231390">the</span> <span
  m="1231900">argument</span> <span m="1232560">that</span> <span
  m="1232800">minimizes</span> <span m="1233820">the</span> <span
  m="1233940">function.</span> <span m="1235430">OK,</span> <span
  m="1235800">good.</span> <span m="1237180">And</span> <span
  m="1238530">here</span> <span m="1238800">it</span> <span
  m="1238950">is,</span> <span m="1239750">S</span> <span
  m="1240030">inverse</span> <span m="1240430">a.</span> <span
  m="1241090">Now</span> <span m="1241320">but</span> <span
  m="1241410">just</span> <span m="1241620">by</span> <span
  m="1241830">the</span> <span m="1241950">way,</span> <span
  m="1242160">what</span> <span m="1242400">is</span> <span m="1242610">f</span>
  <span m="1242820">min?</span> <span m="1243180">Do</span> <span
  m="1243270">you</span> <span m="1243390">know</span> <span
  m="1243630">the</span> <span m="1244350">minimum</span> <span
  m="1244830">of</span> <span m="1244950">a</span> <span
  m="1245040">quadratic?</span></p><p><span m="1245730">I</span> <span
  m="1245790">mean,</span> <span m="1245940">this</span> <span
  m="1246120">is</span> <span m="1246270">the</span> <span
  m="1246570">fundamental</span> <span m="1247800">minimization</span> <span
  m="1248700">question,</span> <span m="1249750">to</span> <span
  m="1249930">minimize</span> <span m="1250275">a</span> <span
  m="1250620">quadratic.</span> <span m="1252660">Electrical</span> <span
  m="1253200">engineering,</span> <span m="1254040">a</span> <span
  m="1254490">quadratic</span> <span m="1255240">regulator</span> <span
  m="1255900">problem</span> <span m="1256410">is</span> <span
  m="1256590">the</span> <span m="1256740">simplest</span> <span
  m="1257280">problem</span> <span m="1257730">there.</span> <span
  m="1258280">There</span> <span m="1258480">could</span> <span
  m="1258690">be</span> <span m="1259140">constraints.</span></p><p><span
  m="1259920">And</span> <span m="1260040">we'll</span> <span
  m="1260250">see</span> <span m="1260520">it</span> <span
  m="1260670">with</span> <span m="1261780">constraints</span> <span
  m="1262440">included.</span> <span m="1263070">But</span> <span
  m="1263190">right</span> <span m="1263430">now,</span> <span
  m="1263880">no</span> <span m="1264120">constraints</span> <span
  m="1264780">at</span> <span m="1264900">all.</span> <span
  m="1266260">We're</span> <span m="1266310">just</span> <span
  m="1266580">looking</span> <span m="1267030">at</span> <span
  m="1267180">the</span> <span m="1267330">function</span> <span
  m="1267810">f</span> <span m="1267990">of</span> <span
  m="1268110">x.</span></p><p><span m="1271480">Let</span> <span
  m="1271800">me</span> <span m="1272060">to</span> <span
  m="1272340">remove</span> <span m="1272820">the</span> <span
  m="1272940">b,</span> <span m="1273420">because</span> <span
  m="1273840">that</span> <span m="1274050">just</span> <span
  m="1275040">shifts</span> <span m="1275480">the</span> <span
  m="1275610">function</span> <span m="1276150">by</span> <span
  m="1276390">b.</span> <span m="1278130">If</span> <span m="1278310">I</span>
  <span m="1278940">erase</span> <span m="1279280">that,</span> <span
  m="1280010">just</span> <span m="1280290">to</span> <span
  m="1280440">say</span> <span m="1280800">it</span> <span
  m="1280860">didn't</span> <span m="1281130">matter.</span> <span
  m="1282710">It's</span> <span m="1283050">really</span> <span
  m="1283380">that</span> <span m="1283710">function.</span> <span
  m="1285000">So</span> <span m="1285180">that</span> <span
  m="1285360">function</span> <span m="1285810">actually</span> <span
  m="1286170">goes</span> <span m="1286440">through</span> <span
  m="1286740">0.</span> <span m="1288030">As</span> <span m="1288510">it</span>
  <span m="1288630">is,</span> <span m="1289050">when</span> <span
  m="1289260">x</span> <span m="1289560">is</span> <span m="1289680">0,</span>
  <span m="1290490">we</span> <span m="1290730">obviously</span> <span
  m="1291240">get</span> <span m="1291480">0.</span></p><p><span
  m="1292290">But</span> <span m="1292530">it's</span> <span
  m="1292680">still</span> <span m="1293370">on</span> <span
  m="1293550">its</span> <span m="1293700">way</span> <span
  m="1293940">down,</span> <span m="1294360">so</span> <span
  m="1294570">to</span> <span m="1294690">speak.</span> <span
  m="1295950">It's</span> <span m="1296160">on</span> <span
  m="1296340">its</span> <span m="1296490">way</span> <span
  m="1296760">down</span> <span m="1297150">to</span> <span
  m="1297300">this</span> <span m="1297570">point,</span> <span
  m="1299100">S</span> <span m="1299340">inverse</span> <span
  m="1299780">a.</span> <span m="1300090">That's</span> <span
  m="1300390">where</span> <span m="1300750">it</span> <span
  m="1301170">bottoms</span> <span m="1301650">out.</span> <span
  m="1302490">And</span> <span m="1302610">when</span> <span
  m="1302820">it</span> <span m="1302910">bottoms</span> <span
  m="1303360">out,</span> <span m="1303930">what</span> <span
  m="1304470">do</span> <span m="1304560">you</span> <span
  m="1304650">get</span> <span m="1304890">for</span> <span
  m="1305130">f?</span> <span m="1307060">One</span> <span
  m="1307235">thing</span> <span m="1307410">I</span> <span
  m="1307500">know,</span> <span m="1307800">it's</span> <span
  m="1307950">going</span> <span m="1308080">to</span> <span
  m="1308160">be</span> <span m="1308280">negative</span> <span
  m="1309660">because</span> <span m="1309930">it</span> <span
  m="1310020">passed</span> <span m="1310410">through</span> <span
  m="1310710">0,</span> <span m="1311130">and</span> <span m="1311250">it</span>
  <span m="1311310">was</span> <span m="1311520">on</span> <span
  m="1311700">its</span> <span m="1311880">way</span> <span
  m="1312240">below</span> <span m="1312690">0.</span></p><p><span
  m="1313620">So</span> <span m="1313800">let's</span> <span
  m="1314040">just</span> <span m="1314400">figure</span> <span
  m="1314850">out</span> <span m="1315030">what</span> <span
  m="1315270">that</span> <span m="1315870">f</span> <span
  m="1316140">min</span> <span m="1316500">is.</span> <span
  m="1317220">So</span> <span m="1317400">I</span> <span m="1317490">have</span>
  <span m="1317640">a</span> <span m="1317700">half.</span> <span
  m="1320010">I'm</span> <span m="1320160">just</span> <span
  m="1320370">going</span> <span m="1320530">to</span> <span
  m="1320580">plug</span> <span m="1321000">in</span> <span m="1322410">S</span>
  <span m="1322650">inverse</span> <span m="1323180">a,</span> <span
  m="1324220">the</span> <span m="1324780">bottom</span> <span
  m="1325110">point</span> <span m="1325560">into</span> <span
  m="1325830">the</span> <span m="1325950">function,</span> <span
  m="1326460">and</span> <span m="1326610">see</span> <span
  m="1328740">where</span> <span m="1328980">the</span> <span
  m="1329160">surface</span> <span m="1330600">bottoms</span> <span
  m="1331080">out</span> <span m="1331860">and</span> <span
  m="1333870">at</span> <span m="1334050">what</span> <span
  m="1334260">level</span> <span m="1334620">it</span> <span
  m="1334740">bottoms</span> <span m="1335190">out.</span> <span
  m="1335700">So</span> <span m="1335850">I</span> <span m="1335970">have</span>
  <span m="1336120">a</span> <span m="1336180">half.</span> <span
  m="1337200">So</span> <span m="1337500">that's</span> <span
  m="1338280">S</span> <span m="1338550">inverse</span> <span
  m="1338980">a</span> <span m="1339210">is</span> <span m="1339420">a</span>
  <span m="1339690">transpose</span> <span m="1341580">S</span> <span
  m="1341880">inverse.</span></p><p><span m="1343320">S</span> <span
  m="1343680">symmetric,</span> <span m="1344340">so</span> <span
  m="1344460">I'll</span> <span m="1344580">just</span> <span
  m="1344820">write</span> <span m="1345090">this</span> <span
  m="1345360">inverse</span> <span m="1345780">transpose.</span> <span
  m="1346950">S,</span> <span m="1348470">S</span> <span
  m="1348870">inverse</span> <span m="1349650">a</span> <span
  m="1351210">from</span> <span m="1351480">the</span> <span
  m="1351600">quadratic</span> <span m="1352230">term,</span> <span
  m="1353520">minus</span> <span m="1355440">a</span> <span
  m="1355800">transpose.</span> <span m="1357770">And</span> <span
  m="1358020">x</span> <span m="1358380">is</span> <span m="1358590">S</span>
  <span m="1358980">inverse</span> <span m="1359720">a.</span> <span
  m="1360030">Have</span> <span m="1360240">you</span> <span
  m="1360840">done</span> <span m="1361110">this</span> <span
  m="1361320">calculation?</span> <span m="1362580">It</span> <span
  m="1362700">just</span> <span m="1362970">doesn't</span> <span
  m="1363300">hurt</span> <span m="1363480">to</span> <span
  m="1363600">repeat</span> <span m="1364020">it.</span></p><p><span
  m="1366240">So</span> <span m="1366600">I've</span> <span
  m="1366780">plugged</span> <span m="1367220">in</span> <span
  m="1367650">S</span> <span m="1367930">inverse</span> <span
  m="1368390">a</span> <span m="1371040">there,</span> <span
  m="1371580">there,</span> <span m="1372240">and</span> <span
  m="1372540">there.</span> <span m="1373530">OK,</span> <span
  m="1373950">what</span> <span m="1374130">have</span> <span
  m="1374250">I</span> <span m="1374370">got?</span> <span
  m="1375060">Well,</span> <span m="1375510">S</span> <span
  m="1375800">inverse</span> <span m="1376170">cancels</span> <span
  m="1376750">S.</span> <span m="1378180">So</span> <span m="1378360">I</span>
  <span m="1378450">have</span> <span m="1378630">a</span> <span
  m="1378690">half</span> <span m="1379140">of</span> <span m="1379290">a</span>
  <span m="1379470">transpose</span> <span m="1380130">S</span> <span
  m="1380370">inverse</span> <span m="1380820">a</span> <span
  m="1381150">minus</span> <span m="1381630">1</span> <span
  m="1382310">of</span> <span m="1382650">a</span> <span
  m="1382800">transpose</span> <span m="1383520">inverse</span> <span
  m="1383890">a.</span> <span m="1384150">So</span> <span m="1384420">I</span>
  <span m="1384600">get</span> <span m="1384900">finally</span> <span
  m="1385980">negative</span> <span m="1386640">a</span> <span
  m="1386700">half.</span></p><p><span m="1388350">Half</span> <span
  m="1388650">of</span> <span m="1388800">it</span> <span
  m="1389010">minus</span> <span m="1389460">one</span> <span
  m="1389665">of</span> <span m="1389870">it</span> <span m="1390280">of</span>
  <span m="1391200">a</span> <span m="1391530">transpose</span> <span
  m="1393180">S</span> <span m="1393750">inverse</span> <span
  m="1394670">a.</span> <span m="1395850">Sorry,</span> <span
  m="1396210">that's</span> <span m="1396570">not</span> <span
  m="1397950">brilliant</span> <span m="1398400">use</span> <span
  m="1398700">of</span> <span m="1398820">the</span> <span
  m="1398910">blackboard</span> <span m="1399480">to</span> <span
  m="1399630">squeeze</span> <span m="1400080">that</span> <span
  m="1400290">in</span> <span m="1400470">there.</span> <span
  m="1401370">But</span> <span m="1402990">that's</span> <span
  m="1404130">easily</span> <span m="1404640">repeatable.</span> <span
  m="1406380">OK,</span> <span m="1408190">good.</span> <span
  m="1409770">So</span> <span m="1409850">that's</span> <span
  m="1410150">what</span> <span m="1410390">a</span> <span
  m="1411260">quadratic</span> <span m="1411980">bowl,</span> <span
  m="1412390">a</span> <span m="1412460">perfect</span> <span
  m="1413060">quadratic</span> <span m="1413690">problem</span> <span
  m="1414560">minimizes</span> <span m="1415370">to</span> <span
  m="1418070">that's</span> <span m="1418430">its</span> <span
  m="1418880">lowest</span> <span m="1419300">level.</span></p><p><span
  m="1420390">Ooh,</span> <span m="1421190">I</span> <span
  m="1421400">wanted</span> <span m="1421760">to</span> <span
  m="1421940">mention</span> <span m="1422450">one</span> <span
  m="1422750">other</span> <span m="1422990">function,</span> <span
  m="1425390">because</span> <span m="1425690">I'm</span> <span
  m="1425810">going</span> <span m="1425920">to</span> <span
  m="1426020">speak</span> <span m="1426260">mostly</span> <span
  m="1426710">about</span> <span m="1426980">quadratics,</span> <span
  m="1428480">but</span> <span m="1428690">obviously,</span> <span
  m="1429440">the</span> <span m="1429590">whole</span> <span
  m="1430250">point</span> <span m="1430670">is</span> <span
  m="1431150">that</span> <span m="1431360">it's</span> <span
  m="1431580">the</span> <span m="1431760">convexity</span> <span
  m="1433190">that's</span> <span m="1433670">really</span> <span
  m="1434240">making</span> <span m="1434720">things</span> <span
  m="1435080">work.</span> <span m="1436520">So</span> <span
  m="1436850">here,</span> <span m="1437870">let</span> <span
  m="1437960">me</span> <span m="1438110">just</span> <span
  m="1438350">put</span> <span m="1438620">here,</span> <span
  m="1439610">a</span> <span m="1439820">remarkable</span> <span
  m="1446110">convex</span> <span m="1446740">function.</span> <span
  m="1451800">And</span> <span m="1451950">the</span> <span
  m="1452070">notes</span> <span m="1456900">tell</span> <span
  m="1457380">what's</span> <span m="1458730">the</span> <span
  m="1458880">gradient</span> <span m="1459420">of</span> <span
  m="1459510">this</span> <span m="1459750">function.</span> <span
  m="1460690">They</span> <span m="1460740">don't</span> <span
  m="1460980">actually</span> <span m="1461400">go</span> <span
  m="1461610">as</span> <span m="1461760">far</span> <span m="1461970">as</span>
  <span m="1462120">the</span> <span m="1462230">Hessian.</span></p><p><span
  m="1464550">Proving</span> <span m="1464940">that</span> <span
  m="1465180">this</span> <span m="1465390">function</span> <span
  m="1465840">I'm</span> <span m="1465970">going</span> <span
  m="1466140">to</span> <span m="1466230">write</span> <span
  m="1466470">down</span> <span m="1469450">is</span> <span
  m="1469680">convex,</span> <span m="1472780">it</span> <span
  m="1473610">takes</span> <span m="1473910">a</span> <span
  m="1473970">little</span> <span m="1474210">thinking.</span> <span
  m="1474720">But</span> <span m="1474900">it's</span> <span
  m="1476070">a</span> <span m="1476130">fantastic</span> <span
  m="1476910">function.</span> <span m="1477810">You</span> <span
  m="1477900">would</span> <span m="1478080">never</span> <span
  m="1479250">sort</span> <span m="1479490">of</span> <span
  m="1479730">imagine</span> <span m="1480290">it</span> <span
  m="1481922">if</span> <span m="1482320">you</span> <span
  m="1482420">didn't</span> <span m="1482730">see</span> <span
  m="1482970">it</span> <span m="1483330">sometime.</span> <span
  m="1484110">So</span> <span m="1484350">it's</span> <span
  m="1484770">going</span> <span m="1484960">to</span> <span
  m="1485070">be</span> <span m="1485160">a</span> <span
  m="1485250">function</span> <span m="1485760">of</span> <span
  m="1485880">a</span> <span m="1485970">matrix,</span> <span
  m="1487040">a</span> <span m="1487110">function</span> <span
  m="1487650">of--</span> <span m="1488580">those</span> <span
  m="1488910">are</span> <span m="1489270">n</span> <span
  m="1489720">squared</span> <span m="1490770">variables,</span> <span
  m="1494890">x,</span> <span m="1495190">i,</span> <span m="1495681">j.</span>
  <span m="1498630">So</span> <span m="1498830">it's</span> <span
  m="1498950">a</span> <span m="1499040">function</span> <span
  m="1499460">of</span> <span m="1499520">many</span> <span
  m="1499820">variables.</span></p><p><span m="1501140">And</span> <span
  m="1501260">here</span> <span m="1501440">is</span> <span
  m="1501590">this</span> <span m="1501830">function.</span> <span
  m="1503220">It's</span> <span m="1503720">you</span> <span
  m="1503880">take</span> <span m="1504180">the</span> <span
  m="1504290">determinant</span> <span m="1505340">of</span> <span
  m="1505460">the</span> <span m="1505550">matrix.</span> <span
  m="1507300">That's</span> <span m="1507500">clearly</span> <span
  m="1507950">a</span> <span m="1508010">function</span> <span
  m="1508520">of</span> <span m="1508640">all</span> <span
  m="1509000">the</span> <span m="1509180">n</span> <span
  m="1509360">squared</span> <span m="1509750">variables.</span> <span
  m="1511010">Then</span> <span m="1511340">you</span> <span
  m="1511460">take</span> <span m="1511760">the</span> <span
  m="1511880">log</span> <span m="1513620">of</span> <span
  m="1513830">the</span> <span m="1513980">determinant</span> <span
  m="1515810">and</span> <span m="1516320">put</span> <span
  m="1516620">in</span> <span m="1516740">a</span> <span
  m="1516800">minus</span> <span m="1517220">sign</span> <span
  m="1517670">because</span> <span m="1518030">we</span> <span
  m="1518240">want</span> <span m="1518990">convex.</span> <span
  m="1521840">That</span> <span m="1522080">turns</span> <span
  m="1522470">out</span> <span m="1522620">to</span> <span m="1522740">be</span>
  <span m="1522890">a</span> <span m="1522980">convex</span> <span
  m="1523580">function.</span></p><p><span m="1524660">And</span> <span
  m="1524900">even</span> <span m="1525240">to</span> <span
  m="1525410">just</span> <span m="1525830">check</span> <span
  m="1526160">that</span> <span m="1526370">for</span> <span
  m="1526580">2</span> <span m="1526850">by</span> <span m="1527060">2</span>
  <span m="1528290">well,</span> <span m="1528560">for</span> <span
  m="1528710">2</span> <span m="1528890">by</span> <span m="1529070">2</span>
  <span m="1529250">you</span> <span m="1529370">have</span> <span
  m="1529520">four</span> <span m="1529850">variables,</span> <span
  m="1530540">because</span> <span m="1530840">it's</span> <span
  m="1531020">a</span> <span m="1531080">2</span> <span m="1531320">by</span>
  <span m="1531470">2</span> <span m="1531680">matrix.</span> <span
  m="1532190">We</span> <span m="1532340">could</span> <span
  m="1532520">maybe</span> <span m="1533240">check</span> <span
  m="1533510">it</span> <span m="1533660">for</span> <span m="1533870">a</span>
  <span m="1533900">symmetric</span> <span m="1534590">matrix.</span> <span
  m="1535160">I</span> <span m="1535250">move</span> <span m="1535355">it</span>
  <span m="1535460">down</span> <span m="1535760">to</span> <span
  m="1535910">three</span> <span m="1536300">variables.</span> <span
  m="1537170">But</span> <span m="1539260">I'd</span> <span
  m="1539630">be</span> <span m="1539780">glad</span> <span
  m="1540220">anybody</span> <span m="1540650">who's</span> <span
  m="1541910">ambitious</span> <span m="1542660">to</span> <span
  m="1545210">see</span> <span m="1545540">why</span> <span
  m="1545870">that</span> <span m="1546110">log</span> <span
  m="1546500">determinant</span> <span m="1547190">is</span> <span
  m="1548060">a</span> <span m="1548150">remarkable</span> <span
  m="1548810">function.</span> <span m="1551450">And</span> <span
  m="1552080">let</span> <span m="1552260">me</span> <span
  m="1552380">see.</span></p><p><span m="1556040">So</span> <span
  m="1556250">the</span> <span m="1556400">gradient</span> <span
  m="1557090">of</span> <span m="1557240">that</span> <span
  m="1557540">thing</span> <span m="1559190">is</span> <span
  m="1559970">also</span> <span m="1560510">amazing.</span> <span
  m="1561860">The</span> <span m="1561980">gradient</span> <span
  m="1563660">of</span> <span m="1563810">that</span> <span
  m="1564140">function--</span> <span m="1566120">I'm</span> <span
  m="1566270">going</span> <span m="1566630">to</span> <span
  m="1566960">peek</span> <span m="1567240">so</span> <span m="1567440">I</span>
  <span m="1567530">don't</span> <span m="1568640">write</span> <span
  m="1569030">the</span> <span m="1569090">wrong</span> <span
  m="1570890">fact</span> <span m="1571340">here.</span> <span
  m="1575780">So</span> <span m="1576280">the</span> <span
  m="1577310">partial</span> <span m="1577760">derivative</span> <span
  m="1578360">of</span> <span m="1578480">that</span> <span
  m="1578720">function</span> <span m="1579800">are</span> <span
  m="1580670">the</span> <span m="1580850">entries</span> <span
  m="1582080">of--</span> <span m="1583190">these</span> <span
  m="1583490">are</span> <span m="1583580">the</span> <span
  m="1583760">entries</span> <span m="1584240">of</span> <span
  m="1584570">a,</span> <span m="1584670">a</span> <span
  m="1584990">inverse.</span> <span m="1586220">That's</span> <span
  m="1586560">the--</span> <span m="1587110">of</span> <span
  m="1587320">x</span> <span m="1587600">inverse.</span></p><p><span
  m="1598360">That's</span> <span m="1598680">like,</span> <span
  m="1599400">wow.</span> <span m="1599880">Where</span> <span
  m="1600090">did</span> <span m="1600210">that</span> <span
  m="1600390">come</span> <span m="1600600">from?</span> <span
  m="1602130">It</span> <span m="1602260">might</span> <span
  m="1602520">be</span> <span m="1602700">minus</span> <span
  m="1603280">the</span> <span m="1603440">entries,</span> <span
  m="1603920">of</span> <span m="1603990">course.</span> <span
  m="1605410">Yeah,</span> <span m="1605950">yeah,</span> <span
  m="1606650">yeah.</span> <span m="1606930">So</span> <span
  m="1607140">we've</span> <span m="1607350">got</span> <span
  m="1608040">n</span> <span m="1608280">squared</span> <span
  m="1611170">function--</span> <span m="1613240">what</span> <span
  m="1613650">is</span> <span m="1613830">a</span> <span
  m="1613920">typical</span> <span m="1614430">entry</span> <span
  m="1614850">in</span> <span m="1615420">x</span> <span
  m="1615690">inverse?</span></p><p><span m="1616560">What</span> <span
  m="1616690">does</span> <span m="1616860">a</span> <span
  m="1616950">typical</span> <span m="1617460">x</span> <span
  m="1618180">inverse</span> <span m="1619290">i,</span> <span
  m="1619620">j?</span> <span m="1622090">Just</span> <span
  m="1622920">to</span> <span m="1623110">remember</span> <span
  m="1623640">that</span> <span m="1625180">bit</span> <span
  m="1625440">of</span> <span m="1625590">pretty</span> <span
  m="1625890">old</span> <span m="1626520">fashioned</span> <span
  m="1626940">linear</span> <span m="1627300">algebra,</span> <span
  m="1629370">the</span> <span m="1629670">entry</span> <span
  m="1629910">is</span> <span m="1630150">of</span> <span m="1630300">the</span>
  <span m="1630450">inverse</span> <span m="1630900">matrix,</span> <span
  m="1632200">I'm</span> <span m="1632520">sure</span> <span
  m="1632790">to</span> <span m="1632940">divide</span> <span
  m="1633510">by</span> <span m="1633870">what?</span> <span
  m="1634980">The</span> <span m="1635130">determinant,</span> <span
  m="1635790">that's</span> <span m="1636030">the</span> <span
  m="1636120">one</span> <span m="1636360">thing</span> <span
  m="1636600">we</span> <span m="1636750">know.</span> <span
  m="1641720">And</span> <span m="1641870">that's</span> <span
  m="1642200">the</span> <span m="1642290">reason</span> <span
  m="1642800">we</span> <span m="1642950">take</span> <span
  m="1643220">the</span> <span m="1643340">log,</span> <span
  m="1644270">because</span> <span m="1644540">when</span> <span
  m="1644750">you</span> <span m="1644870">take</span> <span
  m="1645080">derivatives</span> <span m="1646310">of</span> <span
  m="1646430">a</span> <span m="1646490">log,</span> <span
  m="1647840">that</span> <span m="1648160">will</span> <span
  m="1648350">put</span> <span m="1649100">determinant</span> <span
  m="1649640">of</span> <span m="1649760">x</span> <span m="1650000">in</span>
  <span m="1650150">the</span> <span m="1650270">denominator.</span></p><p><span
  m="1651680">And</span> <span m="1651800">then</span> <span
  m="1651980">the</span> <span m="1652100">numerator</span> <span
  m="1652730">will</span> <span m="1652880">be</span> <span
  m="1653120">the</span> <span m="1653270">derivatives</span> <span
  m="1653990">of</span> <span m="1654110">the</span> <span
  m="1654230">determinant</span> <span m="1654920">of</span> <span
  m="1655070">x.</span> <span m="1656310">Oh!</span> <span
  m="1656660">Can</span> <span m="1656870">we</span> <span
  m="1657140">get</span> <span m="1657380">any</span> <span
  m="1657590">idea</span> <span m="1657920">what</span> <span
  m="1658280">are</span> <span m="1658430">the</span> <span
  m="1658580">derivatives</span> <span m="1659270">of</span> <span
  m="1659390">the</span> <span m="1659510">determinant?</span> <span
  m="1661640">Oh</span> <span m="1661790">my</span> <span
  m="1661970">god.</span> <span m="1663596">How</span> <span
  m="1663808">did</span> <span m="1664020">I</span> <span
  m="1664340">never</span> <span m="1664550">get</span> <span
  m="1664790">into</span> <span m="1665000">this?</span> <span
  m="1666410">So</span> <span m="1666820">are</span> <span
  m="1667090">you</span> <span m="1667360">with</span> <span
  m="1667980">me</span> <span m="1668150">so</span> <span
  m="1668330">far?</span></p><p><span m="1670090">This</span> <span
  m="1670250">is</span> <span m="1670370">going</span> <span
  m="1670480">to</span> <span m="1670610">be</span> <span
  m="1670760">derivatives</span> <span m="1672870">of</span> <span
  m="1673260">determinant,</span> <span m="1674350">the</span> <span
  m="1674540">strength</span> <span m="1674870">of</span> <span
  m="1674990">all</span> <span m="1675200">these</span> <span
  m="1675530">variables</span> <span m="1677510">divided</span> <span
  m="1678020">by</span> <span m="1678350">the</span> <span
  m="1678500">determinant,</span> <span m="1679345">because</span> <span
  m="1680180">that's</span> <span m="1680450">what</span> <span
  m="1680660">the</span> <span m="1680780">log</span> <span
  m="1681140">achieved.</span> <span m="1682130">So</span> <span
  m="1682280">when</span> <span m="1682410">I</span> <span
  m="1682520">take</span> <span m="1682730">the</span> <span
  m="1682880">derivative</span> <span m="1683420">of</span> <span
  m="1683480">the</span> <span m="1683630">log</span> <span
  m="1683960">of</span> <span m="1684080">something,</span> <span
  m="1684560">that</span> <span m="1684680">chain</span> <span
  m="1685040">rule</span> <span m="1685340">says</span> <span
  m="1686180">take</span> <span m="1686420">the</span> <span
  m="1686570">derivative</span> <span m="1687110">of</span> <span
  m="1688490">that</span> <span m="1688760">something</span> <span
  m="1692060">divide</span> <span m="1692480">by</span> <span
  m="1692750">the</span> <span m="1693770">function</span> <span
  m="1694460">determinant</span> <span m="1695030">of</span> <span
  m="1695120">x.</span></p><p><span m="1695900">So</span> <span
  m="1696790">what's</span> <span m="1697160">the</span> <span
  m="1697310">derivative</span> <span m="1698000">of</span> <span
  m="1698120">the</span> <span m="1698270">determinant</span> <span
  m="1699530">of</span> <span m="1699780">a</span> <span
  m="1700030">matrix</span> <span m="1700710">with</span> <span
  m="1700850">respect</span> <span m="1701180">to</span> <span
  m="1701300">its</span> <span m="1701450">1,</span> <span m="1701780">1</span>
  <span m="1702080">entry?</span> <span m="1702560">Yeah,</span> <span
  m="1702720">sure.</span> <span m="1703010">This</span> <span
  m="1704030">is</span> <span m="1704450">crazy.</span> <span
  m="1704960">But</span> <span m="1705260">it's</span> <span
  m="1705350">crazy</span> <span m="1705710">to</span> <span
  m="1705800">be</span> <span m="1705950">doing</span> <span
  m="1706280">this.</span> <span m="1706490">But</span> <span
  m="1706700">it's</span> <span m="1707300">healthy.</span> <span
  m="1708150">OK.</span></p><p><span m="1711960">So</span> <span
  m="1712090">I</span> <span m="1712130">have</span> <span m="1712240">a</span>
  <span m="1712330">matrix</span> <span m="1712840">x,</span> <span
  m="1713410">da,</span> <span m="1713812">da,</span> <span
  m="1714214">da,</span> <span m="1714616">x,</span> <span m="1715018">x,</span>
  <span m="1715420">1,</span> <span m="1715690">1,</span> <span
  m="1716120">x,</span> <span m="1716550">1n,</span> <span m="1718111">et</span>
  <span m="1718490">cetera,</span> <span m="1718930">xn,</span> <span
  m="1719530">1,</span> <span m="1720685">x,</span> <span m="1721150">n,</span>
  <span m="1721380">n.</span> <span m="1723400">OK.</span> <span
  m="1725050">And</span> <span m="1725290">what</span> <span
  m="1725470">am</span> <span m="1725590">I</span> <span
  m="1725710">looking</span> <span m="1726070">for?</span> <span
  m="1726440">I'm</span> <span m="1726490">looking</span> <span
  m="1726850">for</span> <span m="1727060">that</span> <span
  m="1727690">for</span> <span m="1728020">the</span> <span
  m="1728230">derivatives</span> <span m="1729340">of</span> <span
  m="1729830">the--</span> <span m="1732160">do</span> <span
  m="1732370">I</span> <span m="1732460">want</span> <span
  m="1732670">the</span> <span m="1732790">derivatives</span> <span
  m="1733330">of</span> <span m="1733420">the</span> <span
  m="1733540">determinant?</span></p><p><span m="1735630">Yes.</span> <span
  m="1737550">So</span> <span m="1737730">what's</span> <span
  m="1738000">the</span> <span m="1738150">derivative</span> <span
  m="1738990">of</span> <span m="1739800">x</span> <span m="1740790">of</span>
  <span m="1741480">the</span> <span m="1741600">determinant</span> <span
  m="1744870">with</span> <span m="1745050">respect</span> <span
  m="1745470">to</span> <span m="1746280">the</span> <span
  m="1746400">first</span> <span m="1749250">equals</span> <span
  m="1749640">what?</span> <span m="1753780">How</span> <span
  m="1754240">can</span> <span m="1754420">I</span> <span
  m="1754510">figure</span> <span m="1754900">out?</span> <span
  m="1755950">So</span> <span m="1756130">what's</span> <span
  m="1756400">this</span> <span m="1756610">asking</span> <span
  m="1756970">me</span> <span m="1757120">to</span> <span m="1757240">do?</span>
  <span m="1757810">It's</span> <span m="1757990">asking</span> <span
  m="1758260">me</span> <span m="1758380">to</span> <span
  m="1758500">change</span> <span m="1759240">x,</span> <span
  m="1759495">1,</span> <span m="1759750">1</span> <span m="1760000">by</span>
  <span m="1760180">delta</span> <span m="1760510">x</span> <span
  m="1762070">and</span> <span m="1762220">see</span> <span
  m="1762520">what's</span> <span m="1762790">the</span> <span
  m="1762880">change</span> <span m="1763270">in</span> <span
  m="1763390">the</span> <span m="1763510">determinant.</span></p><p><span
  m="1765980">That's</span> <span m="1766240">what</span> <span
  m="1766360">derivatives</span> <span m="1766990">are.</span> <span
  m="1768220">Change</span> <span m="1768610">x,</span> <span
  m="1768835">1,</span> <span m="1769060">1</span> <span m="1769330">a</span>
  <span m="1769390">little</span> <span m="1769630">bit.</span> <span
  m="1771010">How</span> <span m="1771130">much</span> <span
  m="1771400">did</span> <span m="1771610">the</span> <span
  m="1771760">determinant</span> <span m="1772360">change?</span> <span
  m="1776150">What</span> <span m="1777200">has</span> <span
  m="1777380">the</span> <span m="1777530">determinant</span> <span
  m="1778160">of</span> <span m="1778280">the</span> <span
  m="1778370">whole</span> <span m="1778520">matrix</span> <span
  m="1779060">got</span> <span m="1779330">to</span> <span m="1779480">do</span>
  <span m="1779690">with</span> <span m="1779900">x,</span> <span
  m="1780230">1,</span> <span m="1780560">1?</span> <span m="1782850">You</span>
  <span m="1783090">remember</span> <span m="1783540">that</span> <span
  m="1783750">there</span> <span m="1783900">is</span> <span
  m="1784020">a</span> <span m="1784110">formula</span> <span
  m="1784680">for</span> <span m="1784860">determinants.</span></p><p><span
  m="1787270">So</span> <span m="1787320">I</span> <span m="1787440">need</span>
  <span m="1787680">that</span> <span m="1787950">fact.</span> <span
  m="1789160">The</span> <span m="1789250">determinant</span> <span
  m="1789870">of</span> <span m="1789990">x</span> <span m="1791850">is</span>
  <span m="1792570">x,</span> <span m="1792870">1,</span> <span
  m="1793260">1</span> <span m="1793650">times</span> <span
  m="1794010">something.</span> <span m="1795600">Is</span> <span
  m="1795690">that</span> <span m="1795960">something</span> <span
  m="1796440">that</span> <span m="1796590">I</span> <span
  m="1796710">really</span> <span m="1797070">want</span> <span
  m="1797270">to</span> <span m="1797370">know?</span> <span
  m="1798510">Plus</span> <span m="1798750">x,</span> <span
  m="1798870">1,</span> <span m="1798990">2</span> <span
  m="1799260">times</span> <span m="1799680">other</span> <span
  m="1799980">something</span> <span m="1800880">plus</span> <span
  m="1801870">say,</span> <span m="1802200">along</span> <span
  m="1802590">the</span> <span m="1802710">first</span> <span
  m="1803130">row</span> <span m="1804510">times</span> <span
  m="1804900">another</span> <span m="1805320">something.</span> <span
  m="1809340">What</span> <span m="1809520">are</span> <span
  m="1809700">these</span> <span m="1812160">factors</span> <span
  m="1813960">that</span> <span m="1814200">multiply</span> <span
  m="1815970">the</span> <span m="1816230">x's</span> <span
  m="1817290">to</span> <span m="1817440">give</span> <span
  m="1818600">the</span> <span m="1818760">determinant?</span></p><p><span
  m="1819790">What</span> <span m="1820410">[INAUDIBLE]</span> <span
  m="1821200">a</span> <span m="1821340">linear</span> <span
  m="1821790">combination</span> <span m="1822520">of</span> <span
  m="1822600">the</span> <span m="1822720">first</span> <span
  m="1823170">row</span> <span m="1823770">time</span> <span
  m="1824070">certain</span> <span m="1824460">factors</span> <span
  m="1825630">gives</span> <span m="1826000">the</span> <span
  m="1826140">determinant?</span> <span m="1827340">And</span> <span
  m="1827610">how</span> <span m="1827760">do</span> <span m="1827880">I</span>
  <span m="1827970">know</span> <span m="1828180">that</span> <span
  m="1828360">there</span> <span m="1828510">will</span> <span
  m="1828810">be</span> <span m="1829050">such</span> <span
  m="1829380">factors,</span> <span m="1830520">because</span> <span
  m="1831120">the</span> <span m="1831240">fundamental</span> <span
  m="1831780">property</span> <span m="1832230">of</span> <span
  m="1832350">the</span> <span m="1832470">determinant</span> <span
  m="1833160">is</span> <span m="1833400">that</span> <span
  m="1833580">it's</span> <span m="1833760">linear</span> <span
  m="1834990">in</span> <span m="1835260">row</span> <span m="1835610">1</span>
  <span m="1836850">if</span> <span m="1837000">I</span> <span
  m="1837060">don't</span> <span m="1837270">mess</span> <span
  m="1837570">with</span> <span m="1837810">other</span> <span
  m="1838050">rows.</span> <span m="1839280">It's</span> <span
  m="1839460">a</span> <span m="1839520">linear</span> <span
  m="1839940">function</span> <span m="1840390">of</span> <span
  m="1842010">row</span> <span m="1842250">1.</span> <span m="1843240">So</span>
  <span m="1843600">it</span> <span m="1843780">has</span> <span
  m="1844290">a</span> <span m="1844350">form</span> <span m="1844680">x,</span>
  <span m="1844875">1,</span> <span m="1845070">1</span> <span
  m="1845280">times</span> <span m="1845550">something.</span> <span
  m="1846510">And</span> <span m="1846660">what</span> <span
  m="1847020">is</span> <span m="1847470">something?</span></p><p><span
  m="1848347">AUDIENCE:</span> <span m="1848774">[INAUDIBLE].</span></p><p><span
  m="1849201">GILBERT STRANG:</span> <span m="1849630">The</span> <span
  m="1850120">determinant</span> <span m="1850950">of</span> <span
  m="1851520">this.</span> <span m="1852300">So</span> <span
  m="1852480">what</span> <span m="1852720">does</span> <span
  m="1852900">x,</span> <span m="1853155">1,</span> <span m="1853410">1</span>
  <span m="1853680">multiply</span> <span m="1854440">when</span> <span
  m="1854530">you</span> <span m="1854670">compute</span> <span
  m="1855120">determinants?</span> <span m="1856560">X,</span> <span
  m="1856785">1,</span> <span m="1857010">1</span> <span m="1857280">will</span>
  <span m="1857430">not</span> <span m="1857640">multiply</span> <span
  m="1858150">any</span> <span m="1858420">other</span> <span
  m="1858630">guys</span> <span m="1859020">in</span> <span
  m="1859130">its</span> <span m="1859320">row,</span> <span
  m="1860280">because</span> <span m="1861060">you're</span> <span
  m="1861450">never</span> <span m="1861840">multiplying</span> <span
  m="1862560">two</span> <span m="1862920">x's</span> <span
  m="1863370">in</span> <span m="1863490">the</span> <span
  m="1863580">same</span> <span m="1864240">row</span> <span
  m="1864810">or</span> <span m="1864990">the</span> <span
  m="1865110">same</span> <span m="1865440">column.</span> <span
  m="1866280">What</span> <span m="1866490">x,</span> <span
  m="1866715">1,</span> <span m="1866940">1</span> <span m="1867180">is</span>
  <span m="1867330">multiplying</span> <span m="1868500">all</span> <span
  m="1868680">these</span> <span m="1868980">guys.</span> <span
  m="1870210">And</span> <span m="1870600">in</span> <span
  m="1870750">fact,</span> <span m="1871110">it</span> <span
  m="1871320">turns</span> <span m="1871650">out</span> <span
  m="1871800">to</span> <span m="1871890">be</span> <span m="1872070">is</span>
  <span m="1872220">the</span> <span m="1872370">determinant.</span></p><p><span
  m="1875040">And</span> <span m="1875190">what</span> <span
  m="1875430">is</span> <span m="1875580">this</span> <span
  m="1875820">called?</span> <span m="1877180">That</span> <span
  m="1877590">one</span> <span m="1878040">smaller</span> <span
  m="1878640">determinant</span> <span m="1879870">that</span> <span
  m="1880050">I</span> <span m="1880170">get</span> <span m="1880470">by</span>
  <span m="1880740">throwing</span> <span m="1881190">away</span> <span
  m="1882930">the</span> <span m="1883050">first</span> <span
  m="1883860">row</span> <span m="1884130">and</span> <span
  m="1884250">first</span> <span m="1884550">column?</span> <span
  m="1884970">It's</span> <span m="1885120">called</span> <span
  m="1885480">a--</span> <span m="1887710">Minor</span> <span
  m="1888310">is</span> <span m="1888490">good.</span> <span
  m="1888880">Yes,</span> <span m="1889210">minor</span> <span
  m="1889660">is</span> <span m="1889840">good.</span></p><p><span
  m="1890860">I</span> <span m="1891220">was</span> <span
  m="1891340">saying</span> <span m="1891790">there</span> <span
  m="1891890">are</span> <span m="1891970">two</span> <span
  m="1892240">words</span> <span m="1892600">that</span> <span
  m="1892720">can</span> <span m="1892900">be</span> <span
  m="1893020">used,</span> <span m="1893650">minor</span> <span
  m="1895630">and</span> <span m="1896080">co-factor.</span> <span
  m="1902860">Yeah.</span> <span m="1903560">And</span> <span
  m="1903830">what</span> <span m="1904070">is</span> <span
  m="1904280">it?</span> <span m="1904740">I</span> <span
  m="1904840">mean,</span> <span m="1905040">how</span> <span m="1905140">do
  I</span> <span m="1905240">compute</span> <span m="1905680">it?</span> <span
  m="1906050">What</span> <span m="1906290">is</span> <span
  m="1906440">the</span> <span m="1906560">number?</span></p><p><span
  m="1907400">This</span> <span m="1907580">is</span> <span m="1907760">a</span>
  <span m="1907820">number.</span> <span m="1911180">It's</span> <span
  m="1911420">just</span> <span m="1911560">a</span> <span
  m="1911680">number.</span> <span m="1916880">Maybe</span> <span
  m="1917240">I</span> <span m="1917420">think</span> <span
  m="1917690">of</span> <span m="1917810">the</span> <span
  m="1917930">minor</span> <span m="1918590">as</span> <span
  m="1918890">this</span> <span m="1919220">determinant--</span> <span
  m="1921090">Ah!</span> <span m="1921750">Let</span> <span
  m="1921850">me</span> <span m="1921950">cancel</span> <span
  m="1922320">that.</span> <span m="1923480">Maybe</span> <span
  m="1923780">I</span> <span m="1923870">think</span> <span
  m="1924110">of</span> <span m="1924200">the</span> <span
  m="1924320">minor</span> <span m="1924830">as</span> <span
  m="1925040">this</span> <span m="1925310">smaller</span> <span
  m="1925820">matrix,</span> <span m="1926840">and</span> <span
  m="1926990">the</span> <span m="1927110">co-factor,</span> <span
  m="1928250">which</span> <span m="1928520">is</span> <span
  m="1928790">the</span> <span m="1928970">determinant</span> <span
  m="1929900">of</span> <span m="1930050">the</span> <span
  m="1930170">minor.</span></p><p><span m="1935180">And</span> <span
  m="1935480">there</span> <span m="1935630">is</span> <span
  m="1935720">a</span> <span m="1935810">plus</span> <span m="1936260">or</span>
  <span m="1936380">minus.</span> <span m="1936890">Everything</span> <span
  m="1937520">about</span> <span m="1938270">determinants,</span> <span
  m="1940020">there's</span> <span m="1940250">a</span> <span
  m="1940630">there's</span> <span m="1940990">a</span> <span
  m="1941060">plus</span> <span m="1941420">or</span> <span
  m="1941510">minus</span> <span m="1942230">choice</span> <span
  m="1942710">to</span> <span m="1942860">be</span> <span
  m="1943040">made.</span> <span m="1943430">And</span> <span
  m="1944480">we're</span> <span m="1944600">not</span> <span
  m="1945210">going</span> <span m="1945340">to</span> <span
  m="1946040">worry</span> <span m="1946310">about</span> <span
  m="1946610">that.</span> <span m="1947600">But</span> <span
  m="1948290">so</span> <span m="1949100">anyway,</span> <span
  m="1952280">so</span> <span m="1952550">it's</span> <span
  m="1952730">the</span> <span m="1952820">co-factor.</span> <span
  m="1953325">Let</span> <span m="1953590">me</span> <span
  m="1953880">call</span> <span m="1954120">it</span> <span
  m="1954320">C,</span> <span m="1954620">1,</span> <span
  m="1955040">1.</span></p><p><span m="1957950">And</span> <span
  m="1958400">so</span> <span m="1958640">that's</span> <span
  m="1959060">the</span> <span m="1959720">formula</span> <span
  m="1960380">for</span> <span m="1961490">a</span> <span
  m="1961910">determinant.</span> <span m="1962690">That's</span> <span
  m="1962990">the</span> <span m="1963140">co-factor</span> <span
  m="1964040">expansion</span> <span m="1965510">of</span> <span
  m="1965690">a</span> <span m="1965750">determinant.</span> <span
  m="1974230">OK.</span> <span m="1976100">And</span> <span
  m="1976700">that</span> <span m="1976940">will</span> <span
  m="1977180">connect</span> <span m="1977600">back</span> <span
  m="1977900">to</span> <span m="1978050">this</span> <span
  m="1978410">amazing</span> <span m="1978980">fact</span> <span
  m="1979400">that</span> <span m="1979580">the</span> <span
  m="1980060">gradient</span> <span m="1981080">is</span> <span
  m="1981290">the</span> <span m="1981440">entries</span> <span
  m="1981860">of</span> <span m="1982010">x</span> <span
  m="1982310">inverse,</span> <span m="1982790">because</span> <span
  m="1983150">the</span> <span m="1983330">inverse</span> <span
  m="1984350">is</span> <span m="1984770">the</span> <span
  m="1984950">ratio</span> <span m="1985640">of</span> <span
  m="1985790">co-factor</span> <span m="1986510">to</span> <span
  m="1986690">determinant.</span></p><p><span m="1987720">So</span> <span
  m="1988460">x</span> <span m="1988730">inverse</span> <span
  m="1991060">1,</span> <span m="1991370">1</span> <span m="1992240">is</span>
  <span m="1992510">that</span> <span m="1992750">co-factor</span> <span
  m="1994220">over</span> <span m="1994550">the</span> <span
  m="1994730">determinant.</span> <span m="1998670">Yeah.</span> <span
  m="2000190">So</span> <span m="2000370">that's</span> <span
  m="2000640">where</span> <span m="2000850">this</span> <span
  m="2001410">all</span> <span m="2001630">comes</span> <span
  m="2001960">from.</span></p><p><span m="2002530">Anyway,</span> <span
  m="2004660">I'm</span> <span m="2004840">just</span> <span
  m="2005470">mentioning</span> <span m="2006340">that</span> <span
  m="2006670">as</span> <span m="2008380">a</span> <span m="2009790">very</span>
  <span m="2010210">interesting</span> <span m="2012010">example</span> <span
  m="2012670">of</span> <span m="2012850">a</span> <span
  m="2013570">convex</span> <span m="2014260">function.</span> <span
  m="2015820">OK.</span> <span m="2017270">I'll</span> <span
  m="2017440">leave</span> <span m="2017740">that.</span> <span
  m="2017950">That's</span> <span m="2018220">just</span> <span
  m="2018490">for</span> <span m="2018760">like,</span> <span
  m="2020550">education.</span> <span m="2021740">OK.</span></p><p><span
  m="2023080">Now</span> <span m="2023320">I'm</span> <span
  m="2023470">ready</span> <span m="2023770">to</span> <span
  m="2024430">go</span> <span m="2024610">to</span> <span
  m="2024700">work</span> <span m="2025110">on</span> <span
  m="2026740">gradient</span> <span m="2027220">descent.</span> <span
  m="2028510">So</span> <span m="2028750">actually,</span> <span
  m="2029140">the</span> <span m="2029290">rest</span> <span
  m="2029650">of</span> <span m="2029770">this</span> <span
  m="2030010">class</span> <span m="2030520">and</span> <span
  m="2030760">Friday's</span> <span m="2031300">class</span> <span
  m="2032260">about</span> <span m="2032590">gradient</span> <span
  m="2033070">descent</span> <span m="2033550">are</span> <span
  m="2033700">very</span> <span m="2034210">fundamental</span> <span
  m="2035110">parts</span> <span m="2035500">of</span> <span
  m="2036850">18.065.</span> <span m="2039310">And</span> <span
  m="2039460">that</span> <span m="2039670">will</span> <span
  m="2039850">be</span> <span m="2040240">one</span> <span m="2040570">of</span>
  <span m="2040720">our</span> <span m="2040870">examples.</span> <span
  m="2041750">And</span> <span m="2041800">then</span> <span
  m="2042700">the</span> <span m="2043150">general</span> <span
  m="2043660">case</span> <span m="2044110">here.</span></p><p><span
  m="2046650">So</span> <span m="2047100">I'm</span> <span
  m="2047340">using</span> <span m="2048389">this.</span> <span
  m="2051040">It</span> <span m="2051130">would</span> <span
  m="2051300">be</span> <span m="2051449">interesting</span> <span
  m="2052010">to</span> <span m="2052080">minimize</span> <span
  m="2052770">that</span> <span m="2053280">thing,</span> <span
  m="2053670">but</span> <span m="2053850">we're</span> <span
  m="2054600">not</span> <span m="2054870">going</span> <span
  m="2055199">there.</span> <span m="2055409">Let's</span> <span
  m="2055679">hide</span> <span m="2056010">it,</span> <span
  m="2056940">so</span> <span m="2057780">we</span> <span
  m="2057900">don't</span> <span m="2058110">see</span> <span
  m="2058350">it</span> <span m="2058480">again.</span> <span
  m="2060480">And</span> <span m="2062010">I'll</span> <span
  m="2062130">work</span> <span m="2062429">with</span> <span
  m="2062580">that</span> <span m="2062760">example.</span> <span
  m="2066429">So</span> <span m="2066739">here's</span> <span
  m="2067679">gradient</span> <span m="2068130">descent.</span></p><p><span
  m="2077770">Is</span> <span m="2078250">xk</span> <span
  m="2078760">plus</span> <span m="2079060">1</span> <span m="2080300">is</span>
  <span m="2080560">xk</span> <span m="2082030">minus</span> <span
  m="2082900">Sk</span> <span m="2083350">the</span> <span
  m="2083800">step</span> <span m="2084159">size</span> <span
  m="2085030">times</span> <span m="2085429">the</span> <span
  m="2085540">gradient</span> <span m="2086199">of</span> <span
  m="2086350">f</span> <span m="2087159">at</span> <span m="2087489">xk.</span>
  <span m="2092922">So</span> <span m="2093409">the</span> <span
  m="2093530">only</span> <span m="2093860">thing</span> <span
  m="2094159">left</span> <span m="2095030">that</span> <span
  m="2095480">requires</span> <span m="2096080">us</span> <span
  m="2096409">to</span> <span m="2097190">input</span> <span
  m="2097730">some</span> <span m="2098240">decision</span> <span
  m="2098840">making</span> <span m="2099680">is</span> <span
  m="2100130">a</span> <span m="2100250">step</span> <span
  m="2100610">size,</span> <span m="2101050">the</span> <span
  m="2101150">learning</span> <span m="2101570">rate.</span> <span
  m="2103100">We</span> <span m="2103220">can</span> <span
  m="2103400">take</span> <span m="2103670">it</span> <span
  m="2103760">as</span> <span m="2103910">constant.</span> <span
  m="2106520">If</span> <span m="2106670">we</span> <span
  m="2106820">take</span> <span m="2107060">too</span> <span
  m="2107270">big</span> <span m="2107510">a</span> <span
  m="2107570">learning</span> <span m="2107960">rate,</span> <span
  m="2109170">the</span> <span m="2109350">thing</span> <span
  m="2109620">will</span> <span m="2109690">oscillate</span> <span
  m="2110450">all</span> <span m="2110690">over</span> <span
  m="2110900">the</span> <span m="2111020">place</span> <span
  m="2112130">and</span> <span m="2114200">it's</span> <span
  m="2114440">a</span> <span m="2114500">disaster.</span> <span
  m="2116130">If</span> <span m="2116250">we</span> <span
  m="2116370">take</span> <span m="2116610">too</span> <span
  m="2116850">small</span> <span m="2117165">a</span> <span
  m="2117480">learning</span> <span m="2117900">rate,</span> <span
  m="2118200">too</span> <span m="2118440">small</span> <span
  m="2118920">steps,</span> <span m="2119520">what's</span> <span
  m="2119880">the</span> <span m="2119970">matter</span> <span
  m="2120270">with</span> <span m="2120450">that?</span></p><p><span
  m="2122600">Takes</span> <span m="2122930">too</span> <span
  m="2123110">long.</span> <span m="2124190">Takes</span> <span
  m="2124520">too</span> <span m="2124670">long.</span> <span
  m="2126260">So</span> <span m="2126610">the</span> <span
  m="2126760">problem</span> <span m="2127210">is</span> <span
  m="2127330">to</span> <span m="2127420">get</span> <span m="2127630">it</span>
  <span m="2127720">just</span> <span m="2127990">right.</span> <span
  m="2130400">And</span> <span m="2130550">one</span> <span
  m="2130790">way</span> <span m="2130970">that</span> <span
  m="2131090">you</span> <span m="2131330">could</span> <span
  m="2131510">say</span> <span m="2131780">get</span> <span
  m="2132020">it</span> <span m="2132140">right</span> <span
  m="2132560">would</span> <span m="2132800">be</span> <span
  m="2132980">to</span> <span m="2133070">think</span> <span
  m="2134450">of</span> <span m="2136130">optimize.</span> <span
  m="2137030">Choose</span> <span m="2137420">the</span> <span
  m="2137540">optimal</span> <span m="2138020">Sk.</span></p><p><span
  m="2138920">Of</span> <span m="2139040">course,</span> <span
  m="2139310">that</span> <span m="2139520">takes</span> <span
  m="2140000">longer</span> <span m="2140480">than</span> <span
  m="2141680">just</span> <span m="2142160">deciding</span> <span
  m="2142820">an</span> <span m="2142910">Sk</span> <span m="2143450">in</span>
  <span m="2143600">advance,</span> <span m="2144230">which</span> <span
  m="2144560">is</span> <span m="2144770">what</span> <span
  m="2145010">people</span> <span m="2145760">do.</span> <span
  m="2146370">So</span> <span m="2146720">I'll</span> <span
  m="2146840">tell</span> <span m="2146945">you</span> <span
  m="2147050">what</span> <span m="2147230">people</span> <span
  m="2147530">do</span> <span m="2147770">is</span> <span m="2149740">on</span>
  <span m="2149990">really</span> <span m="2150260">big</span> <span
  m="2150470">problems</span> <span m="2151070">is</span> <span
  m="2151760">take</span> <span m="2152180">an</span> <span
  m="2152480">Sk--</span> <span m="2153160">estimate</span> <span
  m="2153860">a</span> <span m="2154100">suitable</span> <span
  m="2154640">Sk,</span> <span m="2155240">and</span> <span
  m="2155360">then</span> <span m="2156110">go</span> <span
  m="2156350">with</span> <span m="2156590">it</span> <span
  m="2156770">for</span> <span m="2156950">a</span> <span
  m="2157010">while.</span> <span m="2157520">And</span> <span
  m="2157670">then</span> <span m="2158060">look</span> <span
  m="2158360">back</span> <span m="2158690">to</span> <span
  m="2158810">see</span> <span m="2161720">if</span> <span m="2161900">it</span>
  <span m="2161960">was</span> <span m="2162170">too</span> <span
  m="2162350">big,</span> <span m="2162830">they'll</span> <span
  m="2163100">see</span> <span m="2163400">oscillations.</span> <span
  m="2165310">It'll</span> <span m="2165470">be</span> <span
  m="2165650">bouncing</span> <span m="2166160">all</span> <span
  m="2166370">over</span> <span m="2166580">the</span> <span
  m="2166700">place.</span></p><p><span m="2169220">Or</span> <span
  m="2171530">of</span> <span m="2171740">course,</span> <span
  m="2172100">an</span> <span m="2172280">exact</span> <span
  m="2172850">line</span> <span m="2173240">search--</span> <span
  m="2176730">so</span> <span m="2176940">you</span> <span
  m="2177120">see</span> <span m="2177360">that</span> <span
  m="2177720">this</span> <span m="2177960">expression</span> <span
  m="2178560">often.</span> <span m="2179090">The</span> <span
  m="2179160">exact</span> <span m="2179640">line</span> <span
  m="2180000">search</span> <span m="2182650">choose</span> <span
  m="2184520">Sk</span> <span m="2186280">to</span> <span
  m="2186430">make</span> <span m="2190000">my</span> <span
  m="2190270">function</span> <span m="2190810">f</span> <span
  m="2191290">at</span> <span m="2191500">xk</span> <span
  m="2192010">plus</span> <span m="2192340">1</span> <span m="2193840">a</span>
  <span m="2194170">minimum</span> <span m="2196540">on</span> <span
  m="2196930">the</span> <span m="2198130">line,</span> <span
  m="2199390">on</span> <span m="2200260">the</span> <span
  m="2200410">search</span> <span m="2200830">line,</span> <span
  m="2204020">a</span> <span m="2204340">minimum</span> <span
  m="2204880">in</span> <span m="2206050">the</span> <span
  m="2206890">search</span> <span m="2207450">direction.</span> <span
  m="2214175">The</span> <span m="2214670">search</span> <span
  m="2215000">direction</span> <span m="2215540">is</span> <span
  m="2215720">given</span> <span m="2216110">by</span> <span
  m="2216620">the</span> <span m="2216770">gradient.</span> <span
  m="2217940">That's</span> <span m="2218210">the</span> <span
  m="2218330">direction</span> <span m="2218810">we're</span> <span
  m="2218960">moving.</span></p><p><span m="2219770">This</span> <span
  m="2220010">is</span> <span m="2220220">the</span> <span
  m="2220400">distance</span> <span m="2220940">we're</span> <span
  m="2221120">moving,</span> <span m="2222260">or</span> <span
  m="2223430">measure</span> <span m="2223850">of</span> <span
  m="2223940">the</span> <span m="2224060">distance</span> <span
  m="2224510">we're</span> <span m="2224630">moving.</span> <span
  m="2225440">And</span> <span m="2225930">an</span> <span
  m="2226080">exact</span> <span m="2226550">search</span> <span
  m="2226970">would</span> <span m="2227210">be</span> <span
  m="2227460">to</span> <span m="2227600">go</span> <span
  m="2227840">along</span> <span m="2228230">there.</span> <span
  m="2229580">If</span> <span m="2229790">I</span> <span m="2229880">have</span>
  <span m="2230120">a</span> <span m="2230180">convex</span> <span
  m="2230750">function,</span> <span m="2231710">then</span> <span
  m="2232430">as</span> <span m="2232610">I</span> <span m="2232730">move</span>
  <span m="2233030">along</span> <span m="2233390">this</span> <span
  m="2233630">line,</span> <span m="2234110">as</span> <span
  m="2234290">I</span> <span m="2234440">increase</span> <span
  m="2235010">Sk,</span> <span m="2236180">I'll</span> <span
  m="2236450">see</span> <span m="2236750">the</span> <span
  m="2236870">function</span> <span m="2237380">start</span> <span
  m="2237710">down,</span> <span m="2239350">because</span> <span
  m="2241560">the</span> <span m="2241720">gradient,</span> <span
  m="2242950">negative</span> <span m="2243520">gradient</span> <span
  m="2244030">means</span> <span m="2244420">down.</span> <span
  m="2245380">But</span> <span m="2245650">at</span> <span
  m="2245770">some</span> <span m="2246040">point</span> <span
  m="2246370">it'll</span> <span m="2247240">turn</span> <span
  m="2247510">up</span> <span m="2247690">again.</span> <span
  m="2248080">And</span> <span m="2248500">an</span> <span
  m="2248990">exact</span> <span m="2249400">line</span> <span
  m="2249670">search</span> <span m="2250000">would</span> <span
  m="2250150">find</span> <span m="2250510">that</span> <span
  m="2251140">point</span> <span m="2252130">and</span> <span
  m="2252490">stop</span> <span m="2253020">there.</span></p><p><span
  m="2256310">That</span> <span m="2256430">doesn't</span> <span
  m="2256760">mean</span> <span m="2257090">we</span> <span
  m="2257300">would--</span> <span m="2258860">we</span> <span
  m="2259100">will</span> <span m="2259280">see</span> <span
  m="2259520">in</span> <span m="2259640">this</span> <span
  m="2259850">example</span> <span m="2260390">where</span> <span
  m="2260600">we</span> <span m="2260780">will</span> <span
  m="2260960">do</span> <span m="2261230">exact</span> <span
  m="2261740">line</span> <span m="2262100">searches</span> <span
  m="2263060">that</span> <span m="2265430">for</span> <span
  m="2265640">a</span> <span m="2265670">small</span> <span
  m="2266030">value</span> <span m="2266450">of</span> <span
  m="2266570">b,</span> <span m="2266960">it's</span> <span
  m="2267170">extremely</span> <span m="2267980">slow,</span> <span
  m="2269230">that</span> <span m="2269480">the</span> <span
  m="2269600">condition</span> <span m="2270230">number</span> <span
  m="2271160">controls</span> <span m="2271790">the</span> <span
  m="2271880">speed.</span> <span m="2272660">That's</span> <span
  m="2272960">really</span> <span m="2273680">what</span> <span
  m="2273920">my</span> <span m="2274700">message</span> <span
  m="2275150">will</span> <span m="2275330">be</span> <span
  m="2276230">just</span> <span m="2276560">in</span> <span
  m="2276710">these</span> <span m="2276890">last</span> <span
  m="2277250">minutes</span> <span m="2277820">and</span> <span
  m="2278150">next</span> <span m="2278510">time</span> <span
  m="2279050">the</span> <span m="2279530">sort</span> <span
  m="2279740">of</span> <span m="2279830">key</span> <span
  m="2280220">lecture</span> <span m="2280760">on</span> <span
  m="2281710">gradient</span> <span m="2282110">descent.</span></p><p><span
  m="2283340">So</span> <span m="2283490">an</span> <span
  m="2283610">exact</span> <span m="2284000">line</span> <span
  m="2284330">search</span> <span m="2284690">would</span> <span
  m="2284870">be</span> <span m="2285050">that.</span> <span
  m="2286670">So</span> <span m="2287000">what</span> <span m="2287290">a</span>
  <span m="2287410">backtracking</span> <span m="2288350">line</span> <span
  m="2288710">search--</span> <span m="2295880">backtracking</span> <span
  m="2296900">would</span> <span m="2297260">be</span> <span
  m="2298700">take</span> <span m="2299260">a</span> <span
  m="2300200">fixed</span> <span m="2300540">S</span> <span
  m="2302960">like</span> <span m="2303230">one.</span> <span
  m="2304670">And</span> <span m="2304970">then</span> <span
  m="2309480">be</span> <span m="2309710">prepared</span> <span
  m="2310160">to</span> <span m="2310280">come</span> <span
  m="2310520">backwards.</span> <span m="2312290">Cut</span> <span
  m="2312560">back</span> <span m="2312920">by</span> <span
  m="2313160">half.</span> <span m="2314060">See</span> <span
  m="2314330">what</span> <span m="2314630">you</span> <span
  m="2314750">get</span> <span m="2314990">at</span> <span
  m="2315080">that</span> <span m="2315320">point.</span> <span
  m="2316250">Cut</span> <span m="2316460">back</span> <span
  m="2316760">by</span> <span m="2316970">half</span> <span
  m="2317270">of</span> <span m="2317390">that</span> <span
  m="2317960">to</span> <span m="2318200">a</span> <span
  m="2318290">quarter</span> <span m="2318740">of</span> <span
  m="2318860">the</span> <span m="2318980">original</span> <span
  m="2319460">step.</span> <span m="2320180">See</span> <span
  m="2320420">what</span> <span m="2320600">that</span> <span
  m="2320870">is.</span> <span m="2324650">So</span> <span
  m="2325235">the</span> <span m="2325550">full</span> <span
  m="2325880">step</span> <span m="2326360">might</span> <span
  m="2326720">have</span> <span m="2327410">taken</span> <span
  m="2327830">you</span> <span m="2328550">back</span> <span
  m="2328970">to</span> <span m="2329120">the</span> <span
  m="2329810">upward</span> <span m="2330380">sweep.</span> <span
  m="2332450">Halfway</span> <span m="2332960">forward</span> <span
  m="2333390">it</span> <span m="2333440">might</span> <span
  m="2333710">still</span> <span m="2334070">be</span> <span
  m="2334280">on</span> <span m="2334490">the</span> <span
  m="2334640">upward</span> <span m="2334890">sweep.</span> <span
  m="2335420">Might</span> <span m="2335960">be</span> <span
  m="2336650">too</span> <span m="2336800">much,</span> <span
  m="2337130">but</span> <span m="2337660">so</span> <span
  m="2337820">backtracking</span> <span m="2338690">cuts</span> <span
  m="2339140">the</span> <span m="2339890">step</span> <span
  m="2340250">size</span> <span m="2340760">in</span> <span
  m="2341300">pieces</span> <span m="2341840">and</span> <span
  m="2342890">checks</span> <span m="2344150">until</span> <span
  m="2344540">it--</span> <span m="2348440">So</span> <span
  m="2348970">S0,</span> <span m="2350360">half</span> <span
  m="2350690">of</span> <span m="2350840">S0,</span> <span
  m="2352130">quarter</span> <span m="2352580">of</span> <span
  m="2352680">S0,</span> <span m="2353180">or</span> <span
  m="2353480">obviously,</span> <span m="2354530">a</span> <span
  m="2354620">different</span> <span m="2355070">parameter,</span> <span
  m="2356090">aS0,</span> <span m="2357080">a</span> <span
  m="2357230">squared</span> <span m="2357710">S0,</span> <span
  m="2358250">and</span> <span m="2358370">so</span> <span m="2358640">on</span>
  <span m="2359210">until</span> <span m="2359600">you're</span> <span
  m="2361850">satisfied</span> <span m="2362600">with</span> <span
  m="2363320">that</span> <span m="2363530">step.</span> <span
  m="2365720">And</span> <span m="2365900">there</span> <span
  m="2366210">are</span> <span m="2366290">of</span> <span
  m="2366350">course,</span> <span m="2366650">many,</span> <span
  m="2367140">many</span> <span m="2367400">refinements.</span> <span
  m="2368070">We're</span> <span m="2368210">talking</span> <span
  m="2368540">about</span> <span m="2368910">the</span> <span
  m="2369710">big</span> <span m="2371240">algorithm</span> <span
  m="2371810">here</span> <span m="2372140">that</span> <span
  m="2373740">everybody</span> <span m="2377500">has,</span> <span
  m="2378970">depending</span> <span m="2379450">on</span> <span
  m="2379570">their</span> <span m="2379720">function,</span> <span
  m="2380260">has</span> <span m="2380530">different</span> <span
  m="2380920">experiences</span> <span m="2381700">with.</span></p><p><span
  m="2384250">So</span> <span m="2384610">here's</span> <span
  m="2385420">my</span> <span m="2385630">fundamental</span> <span
  m="2386200">question.</span> <span m="2390580">Let's</span> <span
  m="2390760">think</span> <span m="2391090">of</span> <span
  m="2391210">an</span> <span m="2391300">exact</span> <span
  m="2391830">line</span> <span m="2392240">search.</span> <span
  m="2393610">How</span> <span m="2393880">much</span> <span
  m="2394270">does</span> <span m="2394510">that</span> <span
  m="2394780">reduce</span> <span m="2395440">the</span> <span
  m="2395560">function?</span> <span m="2397700">How</span> <span
  m="2397850">much</span> <span m="2398150">does</span> <span
  m="2398360">that</span> <span m="2398570">reduce</span> <span
  m="2399020">the</span> <span m="2399140">function?</span> <span
  m="2400400">So</span> <span m="2400580">that's</span> <span
  m="2400880">really</span> <span m="2401210">what</span> <span
  m="2401720">the</span> <span m="2403250">bounds</span> <span
  m="2403700">that</span> <span m="2403880">I</span> <span
  m="2404030">want</span> <span m="2404690">are.</span></p><p><span
  m="2405380">How</span> <span m="2405500">much</span> <span
  m="2405840">does</span> <span m="2406010">that</span> <span
  m="2406160">reduce</span> <span m="2406610">the</span> <span
  m="2406730">function?</span> <span m="2408440">And</span> <span
  m="2410530">we'll</span> <span m="2410810">see</span> <span
  m="2411980">that</span> <span m="2412280">the</span> <span
  m="2413420">reduction</span> <span m="2417800">involves</span> <span
  m="2422430">the</span> <span m="2422710">condition</span> <span
  m="2423220">number,</span> <span m="2424320">m</span> <span
  m="2424570">over</span> <span m="2424840">M.</span> <span
  m="2428890">So</span> <span m="2429040">why</span> <span
  m="2429220">don't</span> <span m="2429460">I</span> <span
  m="2430120">turn</span> <span m="2430450">to</span> <span
  m="2430630">the</span> <span m="2430840">example</span> <span
  m="2431410">first?</span> <span m="2432730">And</span> <span
  m="2432880">then</span> <span m="2434880">where</span> <span
  m="2435160">we</span> <span m="2435320">know</span> <span
  m="2435610">exact</span> <span m="2436420">answers.</span></p><p><span
  m="2437260">That</span> <span m="2437500">gives</span> <span
  m="2437770">us</span> <span m="2437980">a</span> <span
  m="2438040">basis</span> <span m="2438520">for</span> <span
  m="2438700">comparison.</span> <span m="2439980">And</span> <span
  m="2441580">then</span> <span m="2441850">our</span> <span
  m="2442510">math</span> <span m="2442870">goal</span> <span
  m="2443260">is</span> <span m="2443840">prove--</span> <span
  m="2446150">get</span> <span m="2446450">S</span> <span
  m="2446750">dead</span> <span m="2447080">bounds</span> <span
  m="2447680">on</span> <span m="2448130">the</span> <span
  m="2448700">size</span> <span m="2449180">of</span> <span m="2449330">f</span>
  <span m="2450050">that</span> <span m="2451250">match</span> <span
  m="2452240">what</span> <span m="2452420">we</span> <span
  m="2452600">see</span> <span m="2452930">exactly</span> <span
  m="2453710">in</span> <span m="2453860">that</span> <span
  m="2454100">example</span> <span m="2455330">where</span> <span
  m="2455540">we</span> <span m="2455690">know</span> <span
  m="2456200">everything.</span> <span m="2458120">We</span> <span
  m="2458270">know</span> <span m="2458540">the</span> <span
  m="2461030">gradient.</span> <span m="2461510">We</span> <span
  m="2461720">know</span> <span m="2462020">the</span> <span
  m="2462200">Hessian.</span> <span m="2463140">It's</span> <span
  m="2463340">that</span> <span m="2463520">matrix.</span></p><p><span
  m="2464090">We</span> <span m="2464210">know</span> <span
  m="2464420">the</span> <span m="2464540">condition</span> <span
  m="2465020">number.</span> <span m="2465650">So</span> <span
  m="2465830">what</span> <span m="2466070">happens</span> <span
  m="2467000">if</span> <span m="2467240">I</span> <span
  m="2467420">start</span> <span m="2467830">at</span> <span
  m="2468020">a</span> <span m="2468080">point</span> <span
  m="2468440">x0</span> <span m="2469030">y0</span> <span
  m="2473980">that's</span> <span m="2474280">on</span> <span
  m="2474490">my</span> <span m="2474700">surface?</span> <span
  m="2479110">Sorry.</span> <span m="2480230">What</span> <span
  m="2480610">do</span> <span m="2480730">I</span> <span m="2480820">want</span>
  <span m="2481030">to</span> <span m="2481120">do</span> <span
  m="2481360">here?</span> <span m="2482710">Yeah.</span></p><p><span
  m="2483250">I</span> <span m="2483340">take</span> <span m="2483610">a</span>
  <span m="2483700">point,</span> <span m="2484510">x0</span> <span
  m="2484990">y0</span> <span m="2489580">and</span> <span m="2489970">I</span>
  <span m="2490180">iterate.</span> <span m="2494350">So</span> <span
  m="2496270">the</span> <span m="2496420">new</span> <span
  m="2498010">xy</span> <span m="2500074">k</span> <span m="2500500">plus</span>
  <span m="2500830">1</span> <span m="2501940">is</span> <span
  m="2502540">xyk</span> <span m="2505510">minus</span> <span
  m="2509350">the</span> <span m="2510736">S,</span> <span
  m="2514040">which</span> <span m="2514270">I</span> <span
  m="2514390">can</span> <span m="2514630">compute</span> <span
  m="2515050">times</span> <span m="2515430">the</span> <span
  m="2515500">gradient</span> <span m="2516040">of</span> <span
  m="2516180">f.</span> <span m="2516940">So</span> <span m="2517090">I'm</span>
  <span m="2517210">going</span> <span m="2517320">to</span> <span
  m="2517420">put</span> <span m="2517690">in</span> <span
  m="2517870">gradient</span> <span m="2518460">f.</span> <span
  m="2518710">What</span> <span m="2518920">is</span> <span
  m="2519070">the</span> <span m="2519160">gradient</span> <span
  m="2519730">here?</span> <span m="2522790">The</span> <span
  m="2523010">derivative</span> <span m="2524175">is</span> <span
  m="2524670">we</span> <span m="2524980">expect</span> <span
  m="2525250">to</span> <span m="2525520">x.</span></p><p><span
  m="2525790">So</span> <span m="2526000">I</span> <span m="2526120">have</span>
  <span m="2526270">a</span> <span m="2526720">2xk</span> <span
  m="2531100">and</span> <span m="2531520">2by.</span> <span
  m="2536630">And</span> <span m="2536710">this</span> <span
  m="2536950">is</span> <span m="2537160">the</span> <span
  m="2537310">step</span> <span m="2537760">size.</span> <span
  m="2542120">And</span> <span m="2542300">for</span> <span
  m="2542480">this</span> <span m="2543680">small</span> <span
  m="2544040">problem</span> <span m="2545120">where</span> <span
  m="2545330">we're</span> <span m="2545450">going</span> <span
  m="2545560">to</span> <span m="2545720">get</span> <span
  m="2545930">such</span> <span m="2546200">a</span> <span
  m="2546260">revealing</span> <span m="2546860">answer,</span> <span
  m="2547940">I'm</span> <span m="2548090">going</span> <span
  m="2548200">to</span> <span m="2548330">choose</span> <span
  m="2548720">exact</span> <span m="2549170">line</span> <span
  m="2549470">search.</span> <span m="2549860">I'm</span> <span
  m="2549950">going</span> <span m="2550070">to</span> <span
  m="2550130">choose</span> <span m="2550490">the</span> <span
  m="2550580">best</span> <span m="2550970">xk.</span> <span
  m="2554040">And</span> <span m="2554250">what's</span> <span
  m="2554550">the</span> <span m="2554700">answer?</span></p><p><span
  m="2555240">So</span> <span m="2555810">I</span> <span m="2555930">just</span>
  <span m="2556140">want</span> <span m="2556370">to</span> <span
  m="2556470">tell</span> <span m="2556740">you</span> <span
  m="2556920">what</span> <span m="2557190">the</span> <span
  m="2557670">iterations</span> <span m="2558390">are</span> <span
  m="2559500">for</span> <span m="2559710">that</span> <span
  m="2560250">particular</span> <span m="2560850">function</span> <span
  m="2561990">starting</span> <span m="2562470">at</span> <span
  m="2562620">x0</span> <span m="2563190">y0.</span> <span m="2566080">So</span>
  <span m="2566340">let</span> <span m="2566430">me</span> <span
  m="2566550">put</span> <span m="2566760">start</span> <span
  m="2570510">x0</span> <span m="2571100">y0.</span> <span
  m="2574810">And</span> <span m="2574960">I</span> <span
  m="2575080">haven't</span> <span m="2575350">done</span> <span
  m="2575530">this</span> <span m="2575710">calculation</span> <span
  m="2576280">myself.</span></p><p><span m="2576790">It's</span> <span
  m="2577000">taken</span> <span m="2577450">from</span> <span
  m="2577810">the</span> <span m="2578350">book</span> <span
  m="2578620">by</span> <span m="2578950">Steven</span> <span
  m="2579400">Boyd</span> <span m="2580480">and</span> <span
  m="2580660">Vandenberghe</span> <span m="2581470">called</span> <span
  m="2581770"><i>Convex</i></span> <span m="2582400"><i>Optimization.</i></span>
  <span m="2583240">Of</span> <span m="2583330">course,</span> <span
  m="2583670">they</span> <span m="2583740">weren't</span> <span
  m="2584620">the</span> <span m="2584740">first</span> <span
  m="2585040">to</span> <span m="2585160">do</span> <span
  m="2585340">this</span> <span m="2585610">either.</span> <span
  m="2586010">But</span> <span m="2587020">I'm</span> <span
  m="2587260">happy</span> <span m="2587530">to</span> <span
  m="2587650">mention</span> <span m="2588100">that</span> <span
  m="2588340">book</span> <span m="2588550"><i>Convex</i></span> <span
  m="2589120"><i>Optimization.</i></span> <span m="2591580">And</span> <span
  m="2591820">Steven</span> <span m="2592180">Boyd</span> <span
  m="2592450">will</span> <span m="2592600">be</span> <span
  m="2592810">on</span> <span m="2592990">campus</span> <span
  m="2593500">this</span> <span m="2593650">spring</span> <span
  m="2594160">actually,</span> <span m="2595150">in</span> <span
  m="2595330">April</span> <span m="2595690">for</span> <span
  m="2595930">three</span> <span m="2596230">lectures.</span> <span
  m="2598180">This</span> <span m="2598390">is</span> <span
  m="2598540">April,</span> <span m="2598840">maybe.</span></p><p><span
  m="2600010">Yeah,</span> <span m="2600480">OK.</span> <span
  m="2601010">So</span> <span m="2601220">it's</span> <span
  m="2601370">this</span> <span m="2601580">month</span> <span
  m="2602450">in</span> <span m="2602930">two</span> <span m="2603170">or</span>
  <span m="2603230">three</span> <span m="2603440">weeks.</span> <span
  m="2604400">And</span> <span m="2604550">I'll</span> <span
  m="2604940">tell</span> <span m="2605180">you</span> <span
  m="2605300">about</span> <span m="2605600">that.</span> <span
  m="2606470">So</span> <span m="2606710">here</span> <span
  m="2608480">are</span> <span m="2608570">the</span> <span
  m="2608960">xk's</span> <span m="2610610">and</span> <span
  m="2610850">the</span> <span m="2610970">yk's</span> <span
  m="2612080">and</span> <span m="2612410">the</span> <span m="2613370">f</span>
  <span m="2614360">and</span> <span m="2614510">the</span> <span
  m="2614600">function</span> <span m="2615050">values.</span></p><p><span
  m="2620190">So</span> <span m="2620400">where</span> <span
  m="2620610">am</span> <span m="2620760">I</span> <span m="2620850">going
  to</span> <span m="2621090">start?</span> <span m="2624840">Yeah.</span> <span
  m="2625440">So</span> <span m="2625590">I'm</span> <span
  m="2625740">starting</span> <span m="2626160">from</span> <span
  m="2626370">the</span> <span m="2626490">point</span> <span
  m="2627300">x0</span> <span m="2628170">y0</span> <span
  m="2628800">equal</span> <span m="2629130">b1.</span> <span
  m="2630480">Turns</span> <span m="2630810">out</span> <span
  m="2630990">that</span> <span m="2631170">will</span> <span
  m="2631260">make</span> <span m="2631680">our</span> <span
  m="2631920">formulas</span> <span m="2632910">very</span> <span
  m="2633240">convenient,</span> <span m="2634110">x0</span> <span
  m="2634620">y0</span> <span m="2635250">equals</span> <span
  m="2636210">b1.</span> <span m="2637500">Good.</span></p><p><span
  m="2638340">So</span> <span m="2638620">OK.</span> <span m="2640530">So</span>
  <span m="2640740">xk</span> <span m="2641400">is</span> <span
  m="2641640">b</span> <span m="2642240">times</span> <span
  m="2643680">the</span> <span m="2643860">key</span> <span
  m="2644700">ratio</span> <span m="2645360">b</span> <span
  m="2645630">minus</span> <span m="2646140">1</span> <span
  m="2646530">over</span> <span m="2646890">b</span> <span
  m="2648420">plus</span> <span m="2648870">1</span> <span m="2649260">to</span>
  <span m="2649440">the</span> <span m="2649560">kth</span> <span
  m="2649980">power.</span> <span m="2651420">And</span> <span
  m="2651570">yk</span> <span m="2654450">happens</span> <span
  m="2654930">to</span> <span m="2655050">be--</span> <span
  m="2660270">it</span> <span m="2660710">has</span> <span
  m="2660990">this</span> <span m="2661160">same</span> <span
  m="2661590">ratio.</span> <span m="2664020">And</span> <span
  m="2664230">my</span> <span m="2664440">function</span> <span
  m="2664950">f</span> <span m="2665910">has</span> <span m="2666180">the</span>
  <span m="2666270">same</span> <span m="2666630">ratio</span> <span
  m="2667080">too.</span></p><p><span m="2669600">This</span> <span
  m="2669840">is</span> <span m="2670110">fk.</span> <span m="2670815">It</span>
  <span m="2671280">has</span> <span m="2671520">that</span> <span
  m="2671700">same</span> <span m="2672030">ratio</span> <span
  m="2672420">1</span> <span m="2672750">minus</span> <span m="2673170">b</span>
  <span m="2673440">over</span> <span m="2673680">1</span> <span
  m="2674010">plus</span> <span m="2674430">b</span> <span m="2675270">to</span>
  <span m="2675430">the</span> <span m="2675690">kth</span> <span
  m="2676230">times</span> <span m="2676890">f0.</span> <span
  m="2679710">That's</span> <span m="2680100">the</span> <span
  m="2681420">beautiful</span> <span m="2681900">formula</span> <span
  m="2682440">that</span> <span m="2685680">we're</span> <span
  m="2691160">going</span> <span m="2691340">to</span> <span
  m="2691750">take</span> <span m="2692110">as</span> <span
  m="2692350">the</span> <span m="2692470">best</span> <span
  m="2692800">example</span> <span m="2693340">possible.</span></p><p><span
  m="2694450">Let's</span> <span m="2694720">just</span> <span
  m="2694900">see.</span> <span m="2695160">If</span> <span m="2695290">k</span>
  <span m="2695620">equals</span> <span m="2695890">0,</span> <span
  m="2697480">I</span> <span m="2697630">have</span> <span m="2697780">xk</span>
  <span m="2698530">equal</span> <span m="2698650">b</span> <span
  m="2699880">yk</span> <span m="2700690">equal</span> <span
  m="2700840">1</span> <span m="2702450">b</span> <span
  m="2702910">starting</span> <span m="2703330">at</span> <span
  m="2703420">b1.</span> <span m="2704800">And</span> <span
  m="2705220">that</span> <span m="2705580">tells</span> <span
  m="2706000">me</span> <span m="2706210">the</span> <span
  m="2706330">rate</span> <span m="2706600">of</span> <span
  m="2706720">decrease</span> <span m="2707440">of</span> <span
  m="2707620">the</span> <span m="2707770">function.</span> <span
  m="2709690">It's</span> <span m="2709930">this</span> <span
  m="2710110">same</span> <span m="2710590">ratio.</span> <span
  m="2711680">So</span> <span m="2711730">what</span> <span
  m="2711910">am</span> <span m="2712030">I</span> <span
  m="2712150">learning</span> <span m="2712600">from</span> <span
  m="2712810">this</span> <span m="2713050">example?</span></p><p><span
  m="2714730">What's</span> <span m="2715000">jumping</span> <span
  m="2715540">out</span> <span m="2715870">is</span> <span
  m="2716230">that</span> <span m="2716440">this</span> <span
  m="2716710">ratio</span> <span m="2717310">1</span> <span
  m="2717670">minus</span> <span m="2718090">b</span> <span
  m="2718330">over</span> <span m="2718570">1</span> <span
  m="2718870">plus</span> <span m="2719230">b</span> <span m="2720400">is</span>
  <span m="2720610">crucial.</span> <span m="2725920">If</span> <span
  m="2726070">b</span> <span m="2726280">is</span> <span m="2726430">near</span>
  <span m="2726720">1,</span> <span m="2728150">that</span> <span
  m="2728330">ratio</span> <span m="2728810">is</span> <span
  m="2728960">small.</span> <span m="2729500">If</span> <span
  m="2729650">b</span> <span m="2729860">is</span> <span m="2730030">near</span>
  <span m="2730250">1,</span> <span m="2730580">that's</span> <span
  m="2730910">near</span> <span m="2731180">0</span> <span
  m="2731600">over</span> <span m="2731900">2.</span> <span
  m="2732870">And</span> <span m="2732920">I</span> <span
  m="2733040">converge</span> <span m="2733550">quickly,</span> <span
  m="2734120">no</span> <span m="2734390">problem</span> <span
  m="2734840">at</span> <span m="2734960">all.</span> <span
  m="2736070">But</span> <span m="2736310">if</span> <span m="2736460">b</span>
  <span m="2736820">is</span> <span m="2737210">near</span> <span
  m="2737480">0,</span> <span m="2738410">if</span> <span m="2739730">my</span>
  <span m="2740660">condition</span> <span m="2741200">number</span> <span
  m="2741620">is</span> <span m="2741860">bad--</span> <span
  m="2742490">so</span> <span m="2743060">the</span> <span
  m="2743480">bad</span> <span m="2743870">case,</span> <span
  m="2745790">the</span> <span m="2745940">hard</span> <span
  m="2746270">case</span> <span m="2749000">is</span> <span
  m="2750350">small</span> <span m="2751040">b.</span></p><p><span
  m="2755200">Of</span> <span m="2755460">course,</span> <span
  m="2755720">when</span> <span m="2755930">b</span> <span m="2756130">is</span>
  <span m="2756250">small,</span> <span m="2757730">that</span> <span
  m="2757940">ratio</span> <span m="2758840">is</span> <span
  m="2759050">very</span> <span m="2759380">near</span> <span
  m="2759650">1.</span> <span m="2761300">It's</span> <span
  m="2761540">below</span> <span m="2761900">1.</span> <span
  m="2762590">The</span> <span m="2762650">ratio</span> <span
  m="2763010">is</span> <span m="2763130">below</span> <span
  m="2763430">1,</span> <span m="2763700">so</span> <span m="2764300">I'm</span>
  <span m="2764450">getting</span> <span m="2764810">convergence.</span> <span
  m="2766220">I</span> <span m="2766310">do</span> <span m="2766520">get</span>
  <span m="2766730">convergence.</span> <span m="2767360">I</span> <span
  m="2767480">do</span> <span m="2767660">go</span> <span
  m="2767870">downhill.</span> <span m="2769460">But</span> <span
  m="2769790">what</span> <span m="2770090">happens</span> <span
  m="2770570">is</span> <span m="2770690">I</span> <span
  m="2770780">don't</span> <span m="2771020">go</span> <span
  m="2771200">downhill</span> <span m="2771680">very</span> <span
  m="2771980">far</span> <span m="2772370">until</span> <span
  m="2772710">I'm</span> <span m="2773810">headed</span> <span
  m="2774140">back</span> <span m="2774440">uphill</span> <span
  m="2774830">again.</span></p><p><span m="2775910">So</span> <span
  m="2776390">the</span> <span m="2778520">picture</span> <span
  m="2778910">to</span> <span m="2779060">draw</span> <span
  m="2780260">for</span> <span m="2780440">this--</span> <span
  m="2780720">let</span> <span m="2780850">me</span> <span
  m="2782770">change</span> <span m="2783190">that</span> <span
  m="2783460">picture</span> <span m="2784000">to</span> <span
  m="2784270">a</span> <span m="2784720">picture</span> <span
  m="2785140">in</span> <span m="2785290">the</span> <span m="2785470">xy</span>
  <span m="2786070">plane</span> <span m="2787270">of</span> <span
  m="2787480">the</span> <span m="2787570">level</span> <span
  m="2787960">sets.</span> <span m="2789400">So</span> <span
  m="2789610">the</span> <span m="2789940">picture</span> <span
  m="2790360">really</span> <span m="2790780">to</span> <span
  m="2790900">see</span> <span m="2791680">is</span> <span m="2791890">in</span>
  <span m="2792010">the</span> <span m="2792160">xy</span> <span
  m="2792850">plane.</span> <span m="2793870">The</span> <span
  m="2794140">level</span> <span m="2794560">sets</span> <span
  m="2795520">f</span> <span m="2795790">equal</span> <span
  m="2796180">constant.</span> <span m="2797395">That's</span> <span
  m="2797650">what</span> <span m="2797860">a</span> <span
  m="2797920">level</span> <span m="2798310">set</span> <span
  m="2798670">is.</span> <span m="2798940">It's</span> <span
  m="2799180">a</span> <span m="2799240">set</span> <span m="2799510">of</span>
  <span m="2799570">points,</span> <span m="2800120">x</span> <span
  m="2800260">and</span> <span m="2800380">y</span> <span
  m="2801160">where</span> <span m="2801400">f</span> <span
  m="2801610">has</span> <span m="2801850">the</span> <span
  m="2801940">same</span> <span m="2802330">value.</span></p><p><span
  m="2803570">And</span> <span m="2804040">what</span> <span
  m="2804400">do</span> <span m="2804490">those</span> <span
  m="2804790">look</span> <span m="2805060">like?</span> <span
  m="2806510">Oh,</span> <span m="2807330">let's</span> <span
  m="2807610">see.</span> <span m="2810920">I</span> <span
  m="2811100">think--</span> <span m="2812470">what</span> <span
  m="2812670">do</span> <span m="2812780">you</span> <span
  m="2812900">think?</span> <span m="2813680">What</span> <span
  m="2813980">do</span> <span m="2814280">the</span> <span
  m="2814400">level</span> <span m="2814730">sets</span> <span
  m="2815180">look</span> <span m="2815450">like</span> <span
  m="2816650">for</span> <span m="2816950">this</span> <span
  m="2818390">particular</span> <span m="2819050">function?</span></p><p><span
  m="2819860">If</span> <span m="2820010">I</span> <span m="2820160">look</span>
  <span m="2820400">at</span> <span m="2821150">the</span> <span
  m="2822170">curve</span> <span m="2822620">x</span> <span
  m="2822830">squared</span> <span m="2823220">plus</span> <span
  m="2823430">b</span> <span m="2823670">y</span> <span
  m="2824000">squared</span> <span m="2824240">equal</span> <span
  m="2824520">a</span> <span m="2824630">constant,</span> <span
  m="2825200">that's</span> <span m="2825440">what</span> <span
  m="2825600">the</span> <span m="2825680">level</span> <span
  m="2826070">set</span> <span m="2826400">is.</span> <span
  m="2827240">This</span> <span m="2827450">is</span> <span m="2828380">x</span>
  <span m="2828590">squared</span> <span m="2828980">plus</span> <span
  m="2829280">by</span> <span m="2829820">squared</span> <span
  m="2830930">equal</span> <span m="2831300">a</span> <span
  m="2831410">constant.</span> <span m="2833620">What</span> <span
  m="2833750">kind</span> <span m="2833990">of</span> <span m="2834110">a</span>
  <span m="2834170">curve</span> <span m="2834590">is</span> <span
  m="2834770">that?</span></p><p><span m="2836402">AUDIENCE:</span> <span
  m="2836866">[INAUDIBLE].</span></p><p><span m="2837330">GILBERT STRANG:</span>
  <span m="2837420">That's</span> <span m="2837510">an</span> <span
  m="2837730">ellipse.</span> <span m="2839470">And</span> <span
  m="2839740">what's</span> <span m="2840040">up</span> <span
  m="2840250">with</span> <span m="2840430">that</span> <span
  m="2840640">ellipse?</span> <span m="2841900">What's</span> <span
  m="2842170">the</span> <span m="2842290">shape</span> <span
  m="2842680">of</span> <span m="2842830">it?</span> <span
  m="2844750">Because</span> <span m="2845170">there</span> <span
  m="2845240">is</span> <span m="2845380">no</span> <span m="2845770">xy</span>
  <span m="2846430">term,</span> <span m="2847270">that</span> <span
  m="2847480">ellipse</span> <span m="2847960">is</span> <span
  m="2848800">like,</span> <span m="2849670">well</span> <span
  m="2850060">lined</span> <span m="2850480">up</span> <span
  m="2850660">with</span> <span m="2850840">the</span> <span
  m="2850970">axes.</span> <span m="2853180">The</span> <span
  m="2853930">major</span> <span m="2854440">axes</span> <span
  m="2855010">of</span> <span m="2855160">the</span> <span
  m="2855280">ellipse</span> <span m="2855730">are</span> <span
  m="2856120">in</span> <span m="2856360">the</span> <span m="2856480">x</span>
  <span m="2856780">and</span> <span m="2856900">y</span> <span
  m="2857170">directions,</span> <span m="2857770">because</span> <span
  m="2857980">there</span> <span m="2858100">is</span> <span
  m="2858190">no</span> <span m="2859180">cross</span> <span
  m="2859570">term</span> <span m="2859930">here.</span></p><p><span
  m="2862150">We</span> <span m="2862330">could</span> <span
  m="2862510">always</span> <span m="2862900">have</span> <span
  m="2863020">diagonalized</span> <span m="2864650">our</span> <span
  m="2864790">matrix</span> <span m="2866020">if</span> <span
  m="2866170">it</span> <span m="2866230">wasn't</span> <span
  m="2866590">diagonal.</span> <span m="2867760">And</span> <span
  m="2867910">that</span> <span m="2868060">wouldn't</span> <span
  m="2868300">have</span> <span m="2868420">changed</span> <span
  m="2868810">anything.</span> <span m="2869290">So</span> <span
  m="2870870">it's</span> <span m="2871300">just</span> <span
  m="2871570">rotating</span> <span m="2872170">this</span> <span
  m="2872310">space.</span> <span m="2872740">And</span> <span
  m="2873430">we've</span> <span m="2873640">done</span> <span
  m="2873880">that.</span></p><p><span m="2877570">What</span> <span
  m="2877750">do</span> <span m="2877810">the</span> <span
  m="2877930">levels</span> <span m="2878280">set</span> <span
  m="2878580">look</span> <span m="2878800">like?</span> <span
  m="2879130">They're</span> <span m="2879340">ellipses.</span> <span
  m="2880870">And</span> <span m="2881080">suppose</span> <span
  m="2881650">b</span> <span m="2881920">is</span> <span m="2882100">a</span>
  <span m="2882190">small</span> <span m="2882640">number,</span> <span
  m="2884200">then</span> <span m="2884800">what's</span> <span
  m="2885190">with</span> <span m="2885430">the</span> <span
  m="2885580">ellipses?</span> <span m="2886690">If</span> <span
  m="2886840">b</span> <span m="2887110">is</span> <span
  m="2887320">small,</span> <span m="2889120">I</span> <span
  m="2889270">have</span> <span m="2889510">to</span> <span
  m="2889630">go</span> <span m="2889990">pretty--</span> <span
  m="2890530">I</span> <span m="2890620">have</span> <span m="2890770">to</span>
  <span m="2891190">take</span> <span m="2891460">a</span> <span
  m="2891550">pretty</span> <span m="2891940">large</span> <span
  m="2892390">y</span> <span m="2892960">to</span> <span
  m="2893170">match</span> <span m="2893650">a--</span> <span
  m="2894070">change</span> <span m="2894400">an</span> <span
  m="2894520">x.</span> <span m="2895090">I</span> <span
  m="2895300">think</span> <span m="2895570">maybe</span> <span
  m="2895900">they're</span> <span m="2896160">ellipses</span> <span
  m="2897430">of</span> <span m="2897640">that</span> <span
  m="2898030">sort.</span></p><p><span m="2898420">Are</span> <span
  m="2898570">they?</span> <span m="2904220">They're</span> <span
  m="2904490">lined</span> <span m="2904910">up</span> <span
  m="2905050">for</span> <span m="2905210">the</span> <span
  m="2905360">axes.</span> <span m="2906780">And</span> <span
  m="2906950">I</span> <span m="2907130">hope</span> <span
  m="2907430">I'm</span> <span m="2908900">drawing</span> <span
  m="2909290">in</span> <span m="2909410">the</span> <span
  m="2909500">right</span> <span m="2909770">direction.</span> <span
  m="2910610">They're</span> <span m="2910790">long</span> <span
  m="2911150">and</span> <span m="2911300">thin.</span> <span
  m="2913820">Is</span> <span m="2913970">that</span> <span
  m="2914120">right?</span></p><p><span m="2914390">Because</span> <span
  m="2914780">I</span> <span m="2914900">would</span> <span
  m="2915080">have</span> <span m="2915290">to</span> <span
  m="2915410">take</span> <span m="2915740">a</span> <span
  m="2915830">pretty</span> <span m="2916250">big</span> <span
  m="2916500">y</span> <span m="2916880">to</span> <span m="2916970">make</span>
  <span m="2917270">up</span> <span m="2917390">for</span> <span
  m="2917600">a</span> <span m="2917660">small</span> <span
  m="2918140">b.</span> <span m="2920120">OK.</span> <span m="2921830">So</span>
  <span m="2922010">what</span> <span m="2922220">happens</span> <span
  m="2922760">when</span> <span m="2922970">I'm</span> <span
  m="2923220">descending?</span> <span m="2924140">This</span> <span
  m="2924410">is</span> <span m="2924560">a</span> <span
  m="2924650">narrow</span> <span m="2925190">valley</span> <span
  m="2925670">then.</span> <span m="2925910">Think</span> <span
  m="2926150">of</span> <span m="2926300">it</span> <span m="2926420">as</span>
  <span m="2926570">a</span> <span m="2926660">valley</span> <span
  m="2927740">which</span> <span m="2930560">comes</span> <span
  m="2930890">down</span> <span m="2931160">steeply</span> <span
  m="2932240">in</span> <span m="2932390">the</span> <span m="2932510">y</span>
  <span m="2932840">direction,</span> <span m="2933670">but</span> <span
  m="2933830">in</span> <span m="2933950">the</span> <span m="2934040">x</span>
  <span m="2934250">direction</span> <span m="2934730">I'm</span> <span
  m="2934910">crossing</span> <span m="2935690">the</span> <span
  m="2935810">valley</span> <span m="2936290">slow--</span></p><p><span
  m="2937560">Oh,</span> <span m="2938030">is</span> <span
  m="2938150">that</span> <span m="2938270">right?</span> <span
  m="2940250">So</span> <span m="2940580">what</span> <span
  m="2940820">happens</span> <span m="2941240">if</span> <span
  m="2942200">I</span> <span m="2942320">take</span> <span m="2942680">a</span>
  <span m="2943310">point</span> <span m="2943700">there?</span> <span
  m="2944300">Oh</span> <span m="2944450">yeah,</span> <span
  m="2945190">I</span> <span m="2945470">remember</span> <span
  m="2945890">what</span> <span m="2946070">to</span> <span
  m="2946190">do.</span> <span m="2946690">So</span> <span
  m="2947960">let's</span> <span m="2948410">start</span> <span
  m="2949160">at</span> <span m="2949310">that</span> <span
  m="2949520">point</span> <span m="2949970">on</span> <span
  m="2950120">that</span> <span m="2950350">ellipse.</span> <span
  m="2954070">And</span> <span m="2954290">those</span> <span
  m="2954620">were</span> <span m="2954770">the</span> <span
  m="2954890">levels</span> <span m="2955280">sets</span> <span
  m="2955940">f</span> <span m="2956210">equal</span> <span
  m="2956510">constant.</span></p><p><span m="2957490">So</span> <span
  m="2958460">what's</span> <span m="2958730">the</span> <span
  m="2958820">first</span> <span m="2959210">search</span> <span
  m="2959690">direction?</span> <span m="2960980">What</span> <span
  m="2961130">direction</span> <span m="2961610">do</span> <span
  m="2961760">I</span> <span m="2961850">move</span> <span
  m="2962210">from</span> <span m="2962450">x0</span> <span
  m="2963000">y0?</span> <span m="2968510">Do</span> <span m="2968690">I</span>
  <span m="2968780">move</span> <span m="2969110">along</span> <span
  m="2969530">the</span> <span m="2969710">ellipse?</span> <span
  m="2971210">Absolutely</span> <span m="2971930">not,</span> <span
  m="2972290">because</span> <span m="2972710">along</span> <span
  m="2973040">the</span> <span m="2973160">ellipse</span> <span
  m="2973900">f</span> <span m="2974110">is</span> <span
  m="2974300">constant.</span> <span m="2975490">The</span> <span
  m="2975620">gradient</span> <span m="2976130">direction</span> <span
  m="2976610">is</span> <span m="2977990">perpendicular</span> <span
  m="2978860">to</span> <span m="2979100">the</span> <span
  m="2979160">ellipse.</span></p><p><span m="2979430">So</span> <span
  m="2979640">I</span> <span m="2979730">move</span> <span
  m="2980000">perpendicular</span> <span m="2980780">to</span> <span
  m="2980930">the</span> <span m="2981110">ellipse.</span> <span
  m="2982280">And</span> <span m="2982400">when</span> <span
  m="2982700">do</span> <span m="2982880">I</span> <span
  m="2983000">stop?</span> <span m="2987040">Pretty</span> <span
  m="2987340">soon,</span> <span m="2988970">because</span> <span
  m="2989210">very</span> <span m="2989510">soon</span> <span
  m="2989870">I'm</span> <span m="2989990">going</span> <span
  m="2990230">back</span> <span m="2990500">up</span> <span
  m="2990650">again.</span></p><p><span m="3002410">I</span> <span
  m="3002680">haven't</span> <span m="3002890">practiced</span> <span
  m="3003370">with</span> <span m="3003580">this</span> <span
  m="3003730">curve.</span> <span m="3004120">But</span> <span
  m="3004270">I</span> <span m="3004390">know--</span> <span
  m="3004940">and</span> <span m="3005090">time</span> <span
  m="3005300">is</span> <span m="3005560">up,</span> <span
  m="3005870">thank</span> <span m="3006100">God.</span> <span
  m="3008400">So</span> <span m="3009210">what</span> <span
  m="3009370">do</span> <span m="3009520">I</span> <span m="3009640">know</span>
  <span m="3009970">is</span> <span m="3010120">going</span> <span
  m="3010270">to</span> <span m="3010360">happen?</span> <span
  m="3010780">And</span> <span m="3011200">by</span> <span
  m="3011470">Friday</span> <span m="3011980">we'll</span> <span
  m="3012280">make</span> <span m="3012580">it</span> <span
  m="3012700">happen?</span> <span m="3013780">So</span> <span
  m="3017680">what</span> <span m="3017860">do</span> <span
  m="3017950">we</span> <span m="3018130">see</span> <span
  m="3018460">for</span> <span m="3018670">the</span> <span
  m="3019330">curve,</span> <span m="3020560">the</span> <span
  m="3021160">track</span> <span m="3021700">of</span> <span
  m="3021910">the--</span> <span m="3022840">it's</span> <span
  m="3023920">say</span> <span m="3024280">it?</span></p><p><span
  m="3024776">AUDIENCE:</span> <span m="3025272">Zigzag.</span></p><p><span
  m="3025770">GILBERT STRANG:</span> <span m="3025875">It's</span> <span
  m="3025980">a</span> <span m="3026040">zigzag,</span> <span
  m="3026820">yeah.</span> <span m="3028110">We</span> <span
  m="3028290">would</span> <span m="3028470">like</span> <span
  m="3028710">to</span> <span m="3028830">get</span> <span
  m="3029010">here,</span> <span m="3029340">but</span> <span
  m="3029520">we're</span> <span m="3029700">not</span> <span
  m="3029970">aimed</span> <span m="3030300">here</span> <span
  m="3030510">at</span> <span m="3030630">all.</span> <span
  m="3031110">So</span> <span m="3031170">we</span> <span
  m="3031390">zig,</span> <span m="3031700">zig,</span> <span
  m="3032010">zig</span> <span m="3032360">zag,</span> <span
  m="3033330">and</span> <span m="3034500">very</span> <span
  m="3035010">slowly</span> <span m="3035550">approach</span> <span
  m="3036000">that</span> <span m="3036180">point.</span> <span
  m="3039210">And</span> <span m="3039600">how</span> <span
  m="3039870">slowly?</span> <span m="3041910">With</span> <span
  m="3043500">that</span> <span m="3043890">multiplier,</span> <span
  m="3044640">1</span> <span m="3044880">minus</span> <span m="3045240">b</span>
  <span m="3045450">over</span> <span m="3045660">1</span> <span
  m="3045930">plus</span> <span m="3046260">b.</span></p><p><span
  m="3048990">That's</span> <span m="3049350">what</span> <span
  m="3049530">I'm</span> <span m="3049650">learning</span> <span
  m="3050010">from</span> <span m="3050220">this</span> <span
  m="3050430">example,</span> <span m="3051000">that</span> <span
  m="3051150">that's</span> <span m="3051510">a</span> <span
  m="3051600">key</span> <span m="3051960">number.</span> <span
  m="3053010">And</span> <span m="3053160">then</span> <span
  m="3054060">you</span> <span m="3054390">could</span> <span
  m="3054600">ask,</span> <span m="3054840">well,</span> <span
  m="3054990">what</span> <span m="3055200">about</span> <span
  m="3055650">general</span> <span m="3056160">examples?</span> <span
  m="3056760">This</span> <span m="3056940">was</span> <span
  m="3057150">one</span> <span m="3058010">specially</span> <span
  m="3058720">chose</span> <span m="3059240">an</span> <span
  m="3059430">example</span> <span m="3059970">with</span> <span
  m="3060180">exact</span> <span m="3060630">solution.</span> <span
  m="3061470">Well,</span> <span m="3061860">we'll</span> <span
  m="3062160">see</span> <span m="3062640">at</span> <span
  m="3062790">the</span> <span m="3062910">beginning</span> <span
  m="3063270">of</span> <span m="3063360">next</span> <span
  m="3063660">time</span> <span m="3064530">that</span> <span
  m="3064830">for</span> <span m="3065030">a</span> <span
  m="3065100">convex</span> <span m="3065700">function</span> <span
  m="3066840">this</span> <span m="3067200">is</span> <span
  m="3067380">typical.</span> <span m="3068400">This</span> <span
  m="3068720">is</span> <span m="3068940">1</span> <span
  m="3069510">minus</span> <span m="3070050">b</span> <span
  m="3071160">is</span> <span m="3071460">the</span> <span
  m="3071550">critical</span> <span m="3072150">quantity,</span> <span
  m="3073320">or</span> <span m="3073470">1</span> <span m="3073800">over</span>
  <span m="3074150">b,</span> <span m="3074550">or</span> <span
  m="3074670">the</span> <span m="3074820">how</span> <span
  m="3075150">small</span> <span m="3075600">is</span> <span
  m="3075780">b</span> <span m="3076110">compared</span> <span
  m="3076620">to</span> <span m="3076710">1?</span></p><p><span
  m="3077760">So</span> <span m="3078420">that</span> <span
  m="3078720">will</span> <span m="3078930">be</span> <span
  m="3079170">the</span> <span m="3079350">critical</span> <span
  m="3079830">quantity.</span> <span m="3080110">And</span> <span
  m="3080390">we</span> <span m="3080520">see</span> <span m="3080760">it</span>
  <span m="3080880">in</span> <span m="3081000">this</span> <span
  m="3081210">ratio</span> <span m="3082140">1</span> <span
  m="3082440">minus</span> <span m="3082830">b</span> <span
  m="3083040">over</span> <span m="3083250">1</span> <span
  m="3083520">plus</span> <span m="3083850">b.</span> <span
  m="3084390">So</span> <span m="3084540">if</span> <span m="3084660">b</span>
  <span m="3084990">is</span> <span m="3085320">100,</span> <span
  m="3086490">this</span> <span m="3086700">is</span> <span
  m="3086880">0.99</span> <span m="3087990">over</span> <span
  m="3088260">1.01.</span> <span m="3090210">It's</span> <span
  m="3090420">virtually</span> <span m="3091020">1.</span> <span
  m="3091830">OK.</span></p><p><span m="3092460">So</span> <span
  m="3092910">next</span> <span m="3093360">time</span> <span
  m="3093750">is</span> <span m="3093990">a</span> <span m="3094950">sort</span>
  <span m="3095160">of</span> <span m="3095280">a</span> <span
  m="3095340">key</span> <span m="3095760">lecture</span> <span
  m="3096780">to</span> <span m="3096960">see</span> <span
  m="3099900">what</span> <span m="3100080">I've</span> <span
  m="3100200">just</span> <span m="3100440">said,</span> <span
  m="3102180">that</span> <span m="3102420">this</span> <span
  m="3102660">controls</span> <span m="3103380">the</span> <span
  m="3104070">convergence</span> <span m="3104880">of</span> <span
  m="3105000">steepest</span> <span m="3105490">descent,</span> <span
  m="3106440">and</span> <span m="3106620">then</span> <span
  m="3106920">to</span> <span m="3107070">see</span> <span m="3108720">an</span>
  <span m="3108870">idea</span> <span m="3109500">that</span> <span
  m="3109710">speeds</span> <span m="3110190">it</span> <span
  m="3110340">up.</span> <span m="3111130">That</span> <span
  m="3111870">idea</span> <span m="3112170">is</span> <span
  m="3112290">called</span> <span m="3112590">momentum</span> <span
  m="3113400">or</span> <span m="3113550">heavy</span> <span
  m="3113970">ball.</span> <span m="3114660">So</span> <span
  m="3114900">the</span> <span m="3115020">physical</span> <span
  m="3115560">idea</span> <span m="3116010">is</span> <span
  m="3119700">if</span> <span m="3119850">you</span> <span
  m="3120000">had</span> <span m="3120310">a</span> <span
  m="3120450">heavy</span> <span m="3120750">ball</span> <span
  m="3121110">right</span> <span m="3121410">there</span> <span
  m="3122820">and</span> <span m="3122940">wanted</span> <span
  m="3123240">to</span> <span m="3123360">get</span> <span m="3123600">it</span>
  <span m="3123690">down</span> <span m="3124110">the</span> <span
  m="3124200">valley</span> <span m="3124740">toward</span> <span
  m="3125160">the</span> <span m="3125250">bottom,</span> <span
  m="3126930">you</span> <span m="3127110">wouldn't</span> <span
  m="3127500">go</span> <span m="3128040">perpendicular</span> <span
  m="3128940">to</span> <span m="3129120">the</span> <span
  m="3129960">level</span> <span m="3130260">sets.</span> <span
  m="3130650">Not</span> <span m="3130920">at</span> <span
  m="3131040">all.</span> <span m="3131280">You'd</span> <span
  m="3131520">let</span> <span m="3131730">the</span> <span
  m="3131880">momentum</span> <span m="3132570">of</span> <span
  m="3132750">the</span> <span m="3132840">ball</span> <span
  m="3133140">take</span> <span m="3133470">over</span> <span
  m="3133680">and</span> <span m="3133770">let</span> <span
  m="3133950">it</span> <span m="3134070">roll</span> <span
  m="3136550">down.</span></p><p><span m="3136990">So</span> <span
  m="3137660">the</span> <span m="3137840">idea</span> <span
  m="3138140">of</span> <span m="3138230">momentum</span> <span
  m="3138860">is</span> <span m="3139040">to</span> <span
  m="3139520">model</span> <span m="3140030">the</span> <span
  m="3140600">possibility</span> <span m="3141500">of</span> <span
  m="3141620">letting</span> <span m="3142040">that</span> <span
  m="3142250">heavy</span> <span m="3142550">ball</span> <span
  m="3142940">roll</span> <span m="3144110">instead</span> <span
  m="3144680">of</span> <span m="3145400">directing</span> <span
  m="3146030">it</span> <span m="3146240">by</span> <span m="3147520">the</span>
  <span m="3148370">steepest</span> <span m="3148830">descent</span> <span
  m="3149220">at</span> <span m="3149360">every</span> <span
  m="3149600">point.</span> <span m="3150380">So</span> <span
  m="3150590">there's</span> <span m="3150820">an</span> <span
  m="3151010">extra</span> <span m="3151400">term</span> <span
  m="3151820">in</span> <span m="3151970">steepest</span> <span
  m="3152470">descent,</span> <span m="3153470">the</span> <span
  m="3153590">momentum</span> <span m="3154280">term</span> <span
  m="3154820">that</span> <span m="3155240">accelerates.</span> <span
  m="3156230">OK.</span> <span m="3156860">So</span> <span
  m="3157820">Friday</span> <span m="3158270">is</span> <span
  m="3158480">the</span> <span m="3158810">day.</span> <span
  m="3159530">Good.</span> <span m="3160190">See</span> <span
  m="3160460">you</span> <span m="3160580">then.</span></p>
embedded_media:
  - uid: c44232da6f34cadbb87d83388ed3091a
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: AeRwohPuUHQ
  - uid: 086ceb602c1e9b778e61ea0f7c4bdb16
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/AeRwohPuUHQ/default.jpg'
  - uid: de99ca13051163f102beffbd648d5909
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: AeRwohPuUHQ
  - uid: d1bbad251a61f4d6c6ccb4606ee5b512
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: AeRwohPuUHQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-22-gradient-descent-downhill-to-a-minimum/AeRwohPuUHQ.srt
  - uid: b73b070e30b2d7f2a88e07ca72c42eaa
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: AeRwohPuUHQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-22-gradient-descent-downhill-to-a-minimum/AeRwohPuUHQ.pdf
  - uid: c26224f3d98926b59ca5ec8cba4f50e5
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: f35c96da341a422bb473e78857bd249a
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 725ebf994bd5afd4d5d9f4400da69c82
    parent_uid: 4318cf43b3aa08b79564f2376a48f586
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture22_300k.mp4'
type: courses
layout: video
---
