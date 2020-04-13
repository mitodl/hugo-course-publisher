---
title: 'Lecture 15: Linear Programming: LP, reductions, Simplex'
uid: 384a024ba2b3cd026f49bed9647ba8ba
parent_uid: 59a7a862feb85c8b52509910c07728e5
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-15-linear-programming-lp-reductions-simplex
short_url: lecture-15-linear-programming-lp-reductions-simplex
inline_embed_id: '62867694lecture15:linearprogramming:lp,reductions,simplex17824343'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas introduces
  linear programming.</p> <p><strong>Instructors:</strong> Srinivas Devadas</p>
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
  m="12800">materials</span> <span m="13330">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15790">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21002">SRINIVAS DEVADAS:</span> <span m="21470">Good</span> <span
  m="21600">morning,</span> <span m="21990">everyone.</span> <span
  m="23140">So</span> <span m="23640">we</span> <span m="23780">have</span>
  <span m="24440">a</span> <span m="24540">singleton</span> <span
  m="25090">lecture</span> <span m="25460">today</span> <span
  m="25790">on</span> <span m="26050">linear</span> <span
  m="26420">programming,</span> <span m="27930">which</span> <span
  m="28020">is</span> <span m="28590">general</span> <span
  m="28950">purpose</span> <span m="29280">optimization</span> <span
  m="29920">technique</span> <span m="31090">that</span> <span
  m="31840">you</span> <span m="32000">can</span> <span m="32110">use</span>
  <span m="32509">to</span> <span m="32830">solve</span> <span
  m="33310">a</span> <span m="33420">whole</span> <span m="33640">bunch</span>
  <span m="33860">of</span> <span m="33930">problems,</span> <span
  m="34830">including</span> <span m="35530">ones</span> <span
  m="35880">that</span> <span m="36010">we've</span> <span m="36190">seen</span>
  <span m="37490">in</span> <span m="37730">6.046</span> <span
  m="38450">and</span> <span m="39210">previously</span> <span
  m="39640">in</span> <span m="39750">006.</span></p><p><span
  m="41350">And</span> <span m="41790">most</span> <span
  m="42030">recently,</span> <span m="42490">we</span> <span
  m="42790">looked</span> <span m="43020">at</span> <span m="43110">max</span>
  <span m="43430">flow.</span> <span m="44780">We</span> <span
  m="44850">wouldn't</span> <span m="45010">have</span> <span
  m="45100">had</span> <span m="45370">to</span> <span m="45480">go</span> <span
  m="45700">through</span> <span m="46240">all</span> <span m="46520">of</span>
  <span m="46620">that</span> <span m="47780">pain</span> <span
  m="48020">we</span> <span m="48160">went</span> <span m="48400">through</span>
  <span m="49650">to</span> <span m="49860">derive</span> <span
  m="50380">a</span> <span m="50450">max flow</span> <span
  m="50940">algorithm</span> <span m="51920">if</span> <span
  m="52680">you</span> <span m="52820">had</span> <span m="53070">a</span> <span
  m="53370">linear</span> <span m="53730">programming</span> <span
  m="54300">package</span> <span m="54750">handy</span> <span
  m="55690">and</span> <span m="56090">all</span> <span m="56270">you</span>
  <span m="56380">wanted</span> <span m="56530">to</span> <span
  m="56740">do</span> <span m="56890">was</span> <span m="57080">find</span>
  <span m="57450">the</span> <span m="57910">optimum</span> <span
  m="58310">solution.</span> <span m="59330">You</span> <span
  m="59440">could</span> <span m="59520">have</span> <span m="59640">just</span>
  <span m="60160">run</span> <span m="60560">the</span> <span
  m="61240">linear</span> <span m="61560">program</span> <span
  m="62550">with</span> <span m="63030">an</span> <span
  m="63170">appropriate</span> <span m="64440">input,</span> <span
  m="64940">of</span> <span m="64959">course,</span> <span m="65750">that</span>
  <span m="66080">is</span> <span m="66270">derived</span> <span
  m="66710">from</span> <span m="67190">the</span> <span m="67350">flow</span>
  <span m="67580">network.</span> <span m="68780">And</span> <span
  m="69380">you'd</span> <span m="69540">get</span> <span m="69720">your</span>
  <span m="69860">optimal</span> <span m="70170">solution.</span> <span
  m="71030">And</span> <span m="71500">we'll</span> <span m="71820">spend</span>
  <span m="72140">a</span> <span m="72180">couple</span> <span
  m="72400">of</span> <span m="72440">minutes</span> <span m="72700">on</span>
  <span m="72830">that</span> <span m="73840">as</span> <span
  m="74120">we</span> <span m="74250">look</span> <span m="74460">at</span>
  <span m="74580">the</span> <span m="74860">power</span> <span
  m="75210">of</span> <span m="75290">linear</span> <span
  m="75560">programming</span> <span m="76660">in</span> <span
  m="77100">today's</span> <span m="77380">lecture.</span></p><p><span
  m="78390">But</span> <span m="78570">it's</span> <span m="78680">not</span>
  <span m="78870">just</span> <span m="79070">max</span> <span
  m="79330">flow.</span> <span m="79770">You</span> <span m="79960">could</span>
  <span m="80080">do</span> <span m="80210">shortest</span> <span
  m="80610">paths.</span> <span m="81470">You</span> <span
  m="81580">could</span> <span m="81670">do</span> <span m="81750">multi</span>
  <span m="82110">commodity</span> <span m="82610">max</span> <span
  m="82910">flow,</span> <span m="83180">which</span> <span m="83350">is</span>
  <span m="83680">more</span> <span m="83910">complicated</span> <span
  m="84520">than</span> <span m="84640">max</span> <span m="84920">flow</span>
  <span m="85680">and</span> <span m="85870">a</span> <span
  m="85900">variety</span> <span m="86250">of</span> <span
  m="86350">other</span> <span m="86540">problems.</span> <span
  m="88410">So</span> <span m="88680">that's</span> <span m="88880">that
  good</span> <span m="89110">news.</span></p><p><span m="90380">The</span>
  <span m="90510">bad</span> <span m="90730">news</span> <span
  m="90960">is</span> <span m="91080">that</span> <span m="91260">the</span>
  <span m="91660">algorithms</span> <span m="92110">for</span> <span
  m="92280">linear</span> <span m="92570">programming</span> <span m="93730">are
  a</span> <span m="93860">heck of</span> <span m="94030">a</span> <span
  m="94120">lot</span> <span m="94320">more</span> <span
  m="94480">complicated</span> <span m="95080">than</span> <span
  m="95190">max</span> <span m="95495">flow.</span> <span m="96870">And</span>
  <span m="97020">you</span> <span m="97110">can</span> <span
  m="97210">imagine</span> <span m="97570">that</span> <span
  m="97690">that</span> <span m="97830">would</span> <span m="97940">be</span>
  <span m="98040">the</span> <span m="98150">case,</span> <span
  m="98830">because</span> <span m="99120">it's</span> <span m="99250">a</span>
  <span m="99300">more</span> <span m="99520">general</span> <span
  m="99810">purpose</span> <span m="100220">and</span> <span
  m="100360">more</span> <span m="100530">powerful</span> <span
  m="100950">technique.</span> <span m="103450">The</span> <span
  m="103860">history</span> <span m="104370">really</span> <span
  m="104930">is</span> <span m="105220">that</span> <span m="106000">it</span>
  <span m="106160">was</span> <span m="106290">an</span> <span
  m="106370">open</span> <span m="106740">problem.</span> <span
  m="107630">Up</span> <span m="107910">until</span> <span
  m="108260">1979,</span> <span m="110380">people</span> <span
  m="110750">did</span> <span m="110880">not</span> <span m="111120">know</span>
  <span m="111380">if</span> <span m="111600">linear</span> <span
  m="111910">programming</span> <span m="112430">was</span> <span
  m="112650">polynomial-time</span> <span m="113430">solvable</span> <span
  m="114590">until</span> <span m="115140">Khachiyan</span> <span
  m="115670">came</span> <span m="115890">up</span> <span m="116060">with</span>
  <span m="116170">this</span> <span m="116490">ellipsoid</span> <span
  m="117020">method,</span> <span m="118210">and</span> <span
  m="118840">then</span> <span m="119610">there's</span> <span
  m="119800">been</span> <span m="119960">progress</span> <span
  m="120400">sense.</span></p><p><span m="121390">But</span> <span
  m="121810">the</span> <span m="122080">algorithm</span> <span
  m="122280">we're</span> <span m="122390">going</span> <span
  m="122520">to</span> <span m="122590">describe</span> <span
  m="122960">today</span> <span m="124540">and</span> <span
  m="125860">execute</span> <span m="126220">on</span> <span m="126590">a</span>
  <span m="127010">example</span> <span m="127540">input</span> <span
  m="128220">is</span> <span m="128400">a</span> <span m="128470">simplex</span>
  <span m="128960">algorithm--</span> <span m="129539">the</span> <span
  m="129770">simplex</span> <span m="130120">algorithm--</span> <span
  m="131280">that</span> <span m="132670">runs</span> <span m="132920">in</span>
  <span m="133030">worst</span> <span m="133280">case</span> <span
  m="133490">exponential</span> <span m="134040">time.</span> <span
  m="135450">But</span> <span m="135770">it's</span> <span m="136080">a</span>
  <span m="136160">very</span> <span m="136420">efficient</span> <span
  m="136770">in</span> <span m="136860">practice.</span> <span
  m="137410">And</span> <span m="139040">it's</span> <span
  m="139320">held</span> <span m="139560">its</span> <span
  m="139730">ground,</span> <span m="140930">even</span> <span
  m="141240">with</span> <span m="141450">the</span> <span
  m="141690">advent</span> <span m="142220">of</span> <span
  m="143660">more</span> <span m="143970">efficient,</span> <span
  m="144730">from</span> <span m="144880">a</span> <span
  m="144940">theoretical</span> <span m="145720">sense,</span> <span
  m="146800">polynomial-time</span> <span m="147510">algorithms,</span> <span
  m="148270">namely</span> <span m="148710">the</span> <span
  m="151620">ellipsoid</span> <span m="152130">method,</span> <span
  m="152520">which</span> <span m="152750">actually</span> <span
  m="153000">is</span> <span m="153110">not</span> <span m="153310">that</span>
  <span m="153480">efficient</span> <span m="154570">in</span> <span
  m="154710">practice</span> <span m="155480">and</span> <span
  m="156100">new</span> <span m="156320">interior</span> <span
  m="156770">point</span> <span m="157030">methods.</span></p><p><span
  m="158130">So</span> <span m="158840">a</span> <span m="159200">little</span>
  <span m="159360">bit</span> <span m="159480">of</span> <span
  m="159550">context,</span> <span m="160760">let's</span> <span
  m="160950">just</span> <span m="161140">dive</span> <span
  m="161410">into</span> <span m="162230">an</span> <span
  m="162390">example</span> <span m="163550">of</span> <span
  m="164570">optimization</span> <span m="165950">in</span> <span
  m="166080">the</span> <span m="166170">context</span> <span
  m="166750">of</span> <span m="167570">politics</span> <span
  m="170000">and</span> <span m="172320">see</span> <span m="172620">how</span>
  <span m="173650">you</span> <span m="173810">could</span> <span
  m="173930">formulate</span> <span m="174780">this</span> <span
  m="174980">particular</span> <span m="175310">problem</span> <span
  m="176210">as</span> <span m="176570">a</span> <span m="176620">linear</span>
  <span m="176980">program.</span> <span m="178470">So</span> <span
  m="179360">how does</span> <span m="179590">politics</span> <span
  m="180030">work?</span> <span m="180950">You</span> <span
  m="181080">buy</span> <span m="181560">elections,</span> <span
  m="182810">right?</span> <span m="183510">So</span> <span
  m="185030">you</span> <span m="185180">don't</span> <span
  m="185300">want</span> <span m="185410">to</span> <span
  m="185450">spend</span> <span m="185690">a</span> <span m="185750">lot</span>
  <span m="185880">of</span> <span m="185950">money,</span> <span
  m="187120">so</span> <span m="187270">you</span> <span m="187390">want</span>
  <span m="187490">to</span> <span m="187530">minimize</span> <span
  m="188160">the</span> <span m="188240">amount</span> <span
  m="188450">of</span> <span m="188510">money</span> <span
  m="189840">that</span> <span m="190050">is</span> <span
  m="190180">required</span> <span m="190800">to</span> <span m="190880">buy
  an</span> <span m="191260">election.</span></p><p><span m="192870">And</span>
  <span m="193750">the</span> <span m="193830">way</span> <span m="194020">you
  buy an</span> <span m="194230">election</span> <span m="195410">is,</span>
  <span m="196400">well,</span> <span m="196650">campaign,</span> <span
  m="197920">but</span> <span m="198030">you</span> <span
  m="198530">advertise.</span> <span m="199820">And it</span> <span
  m="199970">doesn't</span> <span m="200200">matter</span> <span
  m="200570">facts</span> <span m="200850">that are</span> <span
  m="200960">relevant.</span> <span m="201990">As</span> <span
  m="202220">long</span> <span m="202500">as</span> <span m="203260">you</span>
  <span m="203420">get</span> <span m="203700">to</span> <span
  m="203790">the</span> <span m="203920">right</span> <span
  m="205140">demographic</span> <span m="205950">with</span> <span
  m="206100">the</span> <span m="206190">right</span> <span
  m="206450">message,</span> <span m="207490">let's</span> <span
  m="207800">assume</span> <span m="208020">that</span> <span
  m="208180">you're</span> <span m="208280">going to</span> <span m="208510">win
  the</span> <span m="208680">election.</span> <span m="209570">So</span> <span
  m="209820">that's</span> <span m="210030">our</span> <span
  m="210140">mathematical</span> <span m="210810">abstraction</span> <span
  m="212150">pf</span> <span m="212770">campaigning</span> <span
  m="213360">and</span> <span m="213450">politics</span> <span
  m="214320">all</span> <span m="214650">in</span> <span m="214770">30</span>
  <span m="215040">seconds.</span></p><p><span m="217850">So</span> <span
  m="221400">how</span> <span m="221650">to</span> <span
  m="221740">campaign</span> <span m="224690">to win</span> <span
  m="224870">an</span> <span m="225050">election.</span> <span
  m="227880">And</span> <span m="228100">as</span> <span m="228230">I</span>
  <span m="228300">said,</span> <span m="229610">we're</span> <span
  m="229890">going</span> <span m="229990">to</span> <span
  m="230040">advertise.</span> <span m="231370">But</span> <span
  m="231700">you</span> <span m="231770">do</span> <span m="231930">have</span>
  <span m="232540">a</span> <span m="232580">little</span> <span
  m="232820">bit</span> <span m="232930">of</span> <span m="232990">work</span>
  <span m="233230">to</span> <span m="233340">do</span> <span
  m="233460">here.</span> <span m="234390">That's</span> <span
  m="234520">why</span> <span m="234650">you</span> <span m="234760">need</span>
  <span m="234900">your</span> <span m="235140">campaign</span> <span
  m="235490">manager.</span> <span m="236580">And</span> <span
  m="237480">this</span> <span m="239020">manager</span> <span
  m="239650">is</span> <span m="239820">going</span> <span m="239970">to</span>
  <span m="240040">estimate</span> <span m="246370">votes</span> <span
  m="248920">obtained</span> <span m="251620">per</span> <span
  m="252930">dollar</span> <span m="253430">spent.</span></p><p><span
  m="259160">But</span> <span m="259370">that</span> <span
  m="259540">dollar</span> <span m="259860">is</span> <span
  m="259950">spent</span> <span m="261070">advertising</span> <span
  m="264245">in</span> <span m="264700">support</span> <span
  m="269120">of</span> <span m="269430">a</span> <span
  m="269510">particular</span> <span m="269990">case,</span> <span m="271240">or
  a</span> <span m="271410">particular</span> <span m="273910">issue.</span>
  <span m="277360">And</span> <span m="278950">contradictions</span> <span
  m="279630">are</span> <span m="279710">allowed.</span> <span
  m="280730">As</span> <span m="280940">long</span> <span m="281230">as</span>
  <span m="281360">you're</span> <span m="282110">sending</span> <span
  m="283160">different</span> <span m="283540">messages</span> <span
  m="284000">to</span> <span m="284100">different</span> <span
  m="284380">demographics,</span> <span m="285710">you're</span> <span
  m="285920">all</span> <span m="286030">good,</span> <span
  m="286930">right?</span> <span m="290150">You're</span> <span
  m="290330">assuming</span> <span m="290820">that</span> <span
  m="291010">people</span> <span m="291280">don't</span> <span
  m="291500">watch</span> <span m="291770">more</span> <span
  m="291960">than</span> <span m="292090">one</span> <span
  m="292280">channel.</span> <span m="294180">So</span> <span m="294330">you're
  a</span> <span m="294520"><i>Fox</i></span> <span
  m="294860"><i>News</i></span> <span m="295220">guy</span> <span m="295630">or
  you're</span> <span m="295930">a</span> <span m="296450"><i>MSNB</i></span>
  <span m="297220">guy.</span> <span m="298000">You</span> <span
  m="298120">don't</span> <span m="298280">do</span> <span
  m="298390">both.</span></p><p><span m="302660">So</span> <span
  m="302830">now,</span> <span m="303070">we</span> <span m="303170">get</span>
  <span m="303580">at</span> <span m="303870">this</span> <span
  m="304520">estimate.</span> <span m="305560">And</span> <span
  m="305770">it</span> <span m="305980">turns</span> <span
  m="306230">into</span> <span m="306400">a</span> <span
  m="306490">table.</span> <span m="308690">And</span> <span
  m="308790">so</span> <span m="308870">you</span> <span m="308980">have</span>
  <span m="309130">your</span> <span m="309290">policy,</span> <span
  m="311650">and</span> <span m="311720">you've</span> <span
  m="311810">got</span> <span m="311980">your</span> <span
  m="312480">demographic.</span> <span m="319640">So</span> <span
  m="320350">you</span> <span m="320410">got</span> <span
  m="320580">urban,</span> <span m="324120">now</span> <span
  m="324230">think</span> <span m="324490">Detroit,</span> <span
  m="328170">suburban,</span> <span m="330670">I</span> <span
  m="330750">guess,</span> <span m="330910">you</span> <span
  m="331060">could</span> <span m="331210">Lexington</span> <span
  m="332010">where</span> <span m="332230">you</span> <span
  m="332260">live,</span> <span m="333530">and</span> <span
  m="333680">rural--</span> <span m="336010">I</span> <span
  m="336170">really</span> <span m="336350">don't</span> <span
  m="336500">have</span> <span m="336610">any</span> <span
  m="336780">idea</span> <span m="337040">what</span> <span
  m="337140">that</span> <span m="337320">means.</span> <span
  m="339540">But</span> <span m="339830">presumably,</span> <span
  m="340410">there's</span> <span m="340680">places.</span></p><p><span
  m="342880">And</span> <span m="343330">here's</span> <span
  m="343590">our</span> <span m="343700">policy.</span> <span
  m="345370">You</span> <span m="345500">want</span> <span m="345620">to</span>
  <span m="345800">build</span> <span m="346240">roads--</span> <span
  m="348570">kind</span> <span m="348700">of</span> <span
  m="348770">boring,</span> <span m="349210">but</span> <span
  m="349500">some</span> <span m="349730">people</span> <span
  m="351580">are</span> <span m="351740">interested</span> <span
  m="352040">in</span> <span m="352160">roads--</span> <span
  m="354870">gun</span> <span m="355140">control,</span> <span
  m="355750">of</span> <span m="356010">very</span> <span
  m="356260">sensitive,</span> <span m="359250">farm</span> <span
  m="359730">subsidies--</span> <span m="361730">you know</span> <span
  m="361890">who's</span> <span m="362150">interested</span> <span
  m="362480">in</span> <span m="362580">that--</span> <span
  m="364470">and</span> <span m="364970">gasoline</span> <span
  m="365650">tax--</span> <span m="366690">kind</span> <span
  m="366810">of</span> <span m="366850">more,</span> <span
  m="367620">this</span> <span m="368070">hits</span> <span
  m="368320">your</span> <span m="368460">pocket,</span> <span
  m="368870">so</span> <span m="370010">more or less</span> <span
  m="370380">everybody's</span> <span m="370830">interested in</span> <span
  m="371160">that.</span></p><p><span m="373380">So</span> <span m="374660">you
  tell</span> <span m="374890">the</span> <span m="375020">urban</span> <span
  m="375270">guys</span> <span m="375530">you</span> <span
  m="375620">want</span> <span m="375710">to</span> <span
  m="375760">build</span> <span m="375970">roads,</span> <span
  m="376970">and</span> <span m="377120">they</span> <span
  m="377180">don't</span> <span m="377330">like</span> <span
  m="377630">you.</span> <span m="379060">So</span> <span m="379130">you</span>
  <span m="379230">get</span> <span m="379340">a</span> <span
  m="379380">minus</span> <span m="379760">2</span> <span
  m="379900">there.</span> <span m="380240">So</span> <span
  m="380410">this</span> <span m="380590">can</span> <span m="380720">go,</span>
  <span m="381070">you</span> <span m="381260">advertise,</span> <span
  m="381920">and</span> <span m="382030">it</span> <span m="382110">hurts</span>
  <span m="382360">you.</span> <span m="382720">You lose</span> <span
  m="382980">votes.</span></p><p><span m="385730">Tell the</span> <span
  m="386000">suburban</span> <span m="386460">people--</span> <span
  m="387380">well,</span> <span m="388730">typically,</span> <span
  m="389180">it's</span> <span m="390150">a</span> <span
  m="390220">situation</span> <span m="390770">where</span> <span
  m="392810">you</span> <span m="392910">have</span> <span
  m="393020">these</span> <span m="393170">nice</span> <span
  m="393420">cars,</span> <span m="394300">and</span> <span
  m="394430">you</span> <span m="394510">don't</span> <span
  m="394650">like</span> <span m="394850">potholes,</span> <span
  m="395860">so</span> <span m="396390">you</span> <span m="396500">like</span>
  <span m="396700">roads</span> <span m="397080">if</span> <span
  m="397210">you</span> <span m="397400">live</span> <span m="397630">in</span>
  <span m="397720">suburbia.</span> <span m="399070">Rural</span> <span
  m="399500">people</span> <span m="399640">have</span> <span
  m="399810">4-by-4's.</span> <span m="400720">They</span> <span
  m="400860">don't</span> <span m="401200">particularly</span> <span
  m="401770">care.</span> <span m="402040">They don't</span> <span
  m="402270">care</span> <span m="402460">as</span> <span
  m="402570">much.</span></p><p><span m="404700">Gun</span> <span
  m="404910">control--</span> <span m="405560">well,</span> <span
  m="406470">you</span> <span m="406540">can</span> <span
  m="406650">imagine</span> <span m="407010">that</span> <span
  m="407150">urban</span> <span m="407390">people</span> <span
  m="407670">like</span> <span m="407900">that.</span> <span
  m="408940">Suburban</span> <span m="409330">people</span> <span
  m="409730">are,</span> <span m="410860">hm,</span> <span m="411280">OK,</span>
  <span m="412690">meh.</span> <span m="415040">And</span> <span
  m="415320">the</span> <span m="415410">rural</span> <span
  m="415630">people</span> <span m="415870">hate</span> <span
  m="416070">it,</span> <span m="416930">right?</span> <span
  m="418950">You</span> <span m="419130">do</span> <span m="419270">not</span>
  <span m="419610">want</span> <span m="420100">to</span> <span
  m="420310">advertise</span> <span m="420790">on</span> <span
  m="420930">gun</span> <span m="421100">control</span> <span
  m="422000">in</span> <span m="422130">the</span> <span m="422230">rural</span>
  <span m="422580">areas.</span></p><p><span m="423630">Farm</span> <span
  m="423970">subsidies--</span> <span m="425120">so like,</span> <span
  m="425720">don't</span> <span m="425890">want</span> <span
  m="426010">to</span> <span m="426060">deal</span> <span m="426250">with</span>
  <span m="426380">that.</span> <span m="427350">What</span> <span
  m="427540">is</span> <span m="427670">a</span> <span m="427740">farm?</span>
  <span m="432290">And</span> <span m="432530">the</span> <span
  m="432620">rural</span> <span m="432840">people</span> <span
  m="432950">love</span> <span m="433390">it,</span> <span
  m="433680">right?</span> <span m="436150">And</span> <span
  m="436360">then</span> <span m="436650">gasoline</span> <span
  m="437220">tax,</span> <span m="438200">well,</span> <span
  m="438900">urban</span> <span m="439000">people</span> <span
  m="439280">are</span> <span m="439330">commuting.</span> <span
  m="444700">And,</span> <span m="445090">well, they</span> <span
  m="445400">typically</span> <span m="446220">don't</span> <span
  m="446370">have</span> <span m="446490">a</span> <span m="446590">lot</span>
  <span m="446750">of</span> <span m="446820">money.</span> <span
  m="447770">So</span> <span m="449070">there</span> <span m="449280">you</span>
  <span m="449350">go.</span></p><p><span m="450270">And</span> <span
  m="452850">those</span> <span m="453130">are</span> <span
  m="453170">the</span> <span m="453280">numbers.</span> <span
  m="453660">I'm</span> <span m="453770">not</span> <span m="453920">going
  to</span> <span m="453990">justify</span> <span m="454490">every</span> <span
  m="454710">number</span> <span m="454990">here.</span> <span
  m="457420">But</span> <span m="457830">you could</span> <span
  m="457900">put</span> <span m="458190">whatever</span> <span
  m="458480">numbers</span> <span m="458770">you</span> <span
  m="458880">what,</span> <span m="459370">I</span> <span
  m="459460">mean.</span> <span m="459610">So</span> <span
  m="460170">let's</span> <span m="460390">move</span> <span
  m="460560">on.</span> <span m="461230">This is just a</span> <span
  m="461700">table.</span></p><p><span m="462700">It</span> <span
  m="462900">could</span> <span m="463090">have</span> <span
  m="463220">positive</span> <span m="463600">numbers.</span> <span
  m="464020">It could have</span> <span m="464180">negative</span> <span
  m="464510">numbers.</span> <span m="465750">And</span> <span
  m="466130">you</span> <span m="466510">still</span> <span m="466700">want to
  win</span> <span m="466990">this</span> <span m="467130">election.</span>
  <span m="468360">Regardless</span> <span m="468820">of</span> <span
  m="468910">how</span> <span m="469140">crazy</span> <span
  m="469600">the</span> <span m="469740">demographics</span> <span
  m="470360">are,</span> <span m="470870">how</span> <span
  m="471070">crazy</span> <span m="471600">your</span> <span
  m="472060">electorate</span> <span m="472550">is,</span> <span
  m="473250">you</span> <span m="473400">want</span> <span m="473540">to</span>
  <span m="473650">win</span> <span m="473730">the</span> <span
  m="473800">election.</span> <span m="474250">So</span> <span m="474590">as
  long</span> <span m="474930">as</span> <span m="475000">you</span> <span
  m="475090">have</span> <span m="475230">a</span> <span m="475450">great</span>
  <span m="476970">campaign</span> <span m="477400">manager,</span> <span
  m="478320">who</span> <span m="478510">can</span> <span m="479630">get</span>
  <span m="479790">you</span> <span m="479880">this</span> <span
  m="480080">table,</span> <span m="480880">it's</span> <span
  m="481070">all</span> <span m="481270">mathematical</span> <span
  m="481900">here</span> <span m="482160">on</span> <span
  m="482310">out.</span></p><p><span m="484250">You've</span> <span
  m="484370">just</span> <span m="484570">got</span> <span m="484690">to</span>
  <span m="484760">figure</span> <span m="485060">out</span> <span
  m="486190">how</span> <span m="486570">you're</span> <span
  m="486720">going</span> <span m="486850">to</span> <span m="486970">win</span>
  <span m="488680">a</span> <span m="488780">majority.</span> <span
  m="492700">And</span> <span m="493290">you</span> <span
  m="493400">could</span> <span m="493860">argue</span> <span
  m="494130">that</span> <span m="494290">all</span> <span m="494470">you</span>
  <span m="494580">want</span> <span m="494980">is</span> <span
  m="498140">to</span> <span m="498870">win</span> <span m="499070">the</span>
  <span m="499150">election.</span> <span m="500040">We're</span> <span
  m="500130">going to</span> <span m="500330">do</span> <span
  m="500430">something</span> <span m="500670">slightly</span> <span
  m="501060">different,</span> <span m="501620">which</span> <span
  m="501750">is</span> <span m="503710">something</span> <span
  m="503980">that's</span> <span m="504180">obviously</span> <span
  m="504480">going</span> <span m="504590">to</span> <span
  m="504640">guarantee</span> <span m="507730">victory.</span> <span
  m="508470">But</span> <span m="508610">you</span> <span m="508700">want</span>
  <span m="508850">to</span> <span m="508950">win</span> <span
  m="509150">a</span> <span m="509280">majority</span> <span
  m="510350">in</span> <span m="510500">every</span> <span
  m="510810">demographic.</span> <span m="513429">As the</span> <span
  m="513559">tables</span> <span m="513929">may be</span> <span
  m="514820">off</span> <span m="515190">by</span> <span
  m="515370">little,</span> <span m="516350">you</span> <span
  m="516510">want</span> <span m="516600">to</span> <span m="516640">be</span>
  <span m="516720">careful.</span></p><p><span m="519070">So</span> <span
  m="519900">the</span> <span m="520000">last</span> <span
  m="520220">thing,</span> <span m="520450">of</span> <span
  m="520549">course,</span> <span m="521780">in</span> <span
  m="521950">order</span> <span m="522090">to</span> <span
  m="522140">estimate</span> <span m="522750">how</span> <span
  m="522860">much</span> <span m="523610">money</span> <span
  m="523900">you</span> <span m="524000">need</span> <span m="525640">is</span>
  <span m="526840">the</span> <span m="527020">population</span> <span
  m="527700">here.</span> <span m="530830">So</span> <span
  m="530990">that's</span> <span m="534550">votes</span> <span
  m="534950">obtained</span> <span m="536050">per</span> <span
  m="536440">dollar</span> <span m="537130">spent.</span> <span
  m="538640">So</span> <span m="538790">you're</span> <span
  m="538970">getting--</span> <span m="539430">it's</span> <span
  m="539770">$10</span> <span m="540140">a</span> <span m="540210">vote,</span>
  <span m="540520">it's</span> <span m="541740">$5</span> <span
  m="542230">a</span> <span m="542320">vote,</span> <span m="543030">et</span>
  <span m="543310">cetera.</span> <span m="544110">And</span> <span
  m="544260">so</span> <span m="544390">we</span> <span m="544500">need</span>
  <span m="544640">to</span> <span m="544700">translate</span> <span
  m="545140">that</span> <span m="545390">to</span> <span
  m="546350">votes,</span> <span m="546690">because</span> <span
  m="546900">that's</span> <span m="548520">the</span> <span
  m="548640">dollars.</span> <span m="549170">And</span> <span
  m="549460">you</span> <span m="549570">got</span> <span m="549850">your</span>
  <span m="550070">population</span> <span m="550680">here</span> <span
  m="550990">corresponding</span> <span m="551510">to</span> <span
  m="552500">each</span> <span m="552720">of</span> <span
  m="552800">these</span> <span m="553000">areas.</span> <span
  m="556920">And</span> <span m="557850">that's</span> <span
  m="558030">what</span> <span m="558140">you</span> <span m="558230">got</span>
  <span m="558400">here.</span></p><p><span m="559050">Majority,</span> <span
  m="562820">we'll</span> <span m="562970">assume</span> <span m="563892">you
  win</span> <span m="564290">in the</span> <span m="564370">case</span> <span
  m="564630">of</span> <span m="564760">ties,</span> <span
  m="565960">just</span> <span m="566100">to</span> <span m="566170">keep</span>
  <span m="566340">these</span> <span m="566520">numbers</span> <span
  m="566860">easy,</span> <span m="568530">so</span> <span
  m="568720">that's</span> <span m="568930">just</span> <span
  m="569350">divided</span> <span m="569680">by</span> <span
  m="569810">2.</span> <span m="574630">So</span> <span m="574830">that's</span>
  <span m="574990">what</span> <span m="575130">you</span> <span
  m="575210">got</span> <span m="575410">so</span> <span m="575540">far.</span>
  <span m="577050">And</span> <span m="580150">you</span> <span
  m="580290">want</span> <span m="580430">to</span> <span m="580480">win</span>
  <span m="582010">by</span> <span m="582180">spending</span> <span
  m="583570">the</span> <span m="583680">minimum</span> <span
  m="584110">amount</span> <span m="584320">of</span> <span
  m="584410">money.</span> <span m="592740">So</span> <span
  m="592870">that's</span> <span m="593090">our</span> <span
  m="593210">optimization</span> <span m="593750">problem.</span></p><p><span
  m="595490">So</span> <span m="596210">we</span> <span m="596330">can</span>
  <span m="596440">take</span> <span m="596660">this,</span> <span
  m="596930">and</span> <span m="597050">we</span> <span m="597150">can</span>
  <span m="597280">convert</span> <span m="597630">it</span> <span
  m="598700">to</span> <span m="598840">a</span> <span m="598910">set</span>
  <span m="599070">of</span> <span m="599170">linear</span> <span
  m="599530">equations.</span> <span m="600630">And</span> <span
  m="600740">that's</span> <span m="600880">going</span> <span
  m="600990">to</span> <span m="601050">create</span> <span
  m="601370">our</span> <span m="601500">linear</span> <span
  m="601820">program--</span> <span m="602350">our</span> <span
  m="602490">first</span> <span m="602740">linear</span> <span
  m="602990">program.</span> <span m="607110">And</span> <span
  m="607650">this</span> <span m="607850">is</span> <span m="607990">our</span>
  <span m="608720">algebraic</span> <span m="609320">setup.</span> <span
  m="616062">And</span> <span m="616570">so</span> <span m="616830">let--</span>
  <span m="617600">we</span> <span m="617720">need</span> <span
  m="617840">some</span> <span m="617960">variables</span> <span
  m="618470">here,</span> <span m="618870">so</span> <span m="618970">let</span>
  <span m="619040">x1,</span> <span m="620080">x2,</span> <span
  m="621500">x3,</span> <span m="621750">x4</span> <span
  m="623960">denote</span> <span m="624915">the</span> <span
  m="625320">dollars</span> <span m="625880">spent</span> <span
  m="628230">per</span> <span m="628810">issue.</span></p><p><span
  m="631920">So</span> <span m="632070">you</span> <span m="632170">got</span>
  <span m="632270">those</span> <span m="632440">four</span> <span
  m="632660">issues</span> <span m="632970">up</span> <span
  m="633110">there.</span> <span m="634490">So</span> <span
  m="634520">let</span> <span m="634620">me</span> <span m="634700">write</span>
  <span m="634870">that</span> <span m="635010">out.</span> <span
  m="635240">It's</span> <span m="635390">important</span> <span
  m="635760">to</span> <span m="638610">make sure</span> <span
  m="639390">you</span> <span m="639500">know</span> <span
  m="639630">what</span> <span m="639750">I'm</span> <span
  m="639860">talking</span> <span m="640170">about</span> <span
  m="641370">with</span> <span m="641460">respect</span> <span
  m="641790">to</span> <span m="641970">a</span> <span
  m="642040">particular</span> <span m="642330">issue.</span> <span
  m="643240">So</span> <span m="643490">those</span> <span m="643700">are
  our</span> <span m="643970">four</span> <span m="644340">issues.</span> <span
  m="645090">And</span> <span m="645620">those</span> <span m="645800">are
  our</span> <span m="645950">four</span> <span m="646160">variables.</span>
  <span m="647110">So</span> <span m="647230">this</span> <span
  m="647390">linear</span> <span m="647650">program</span> <span
  m="648000">has</span> <span m="648660">four</span> <span
  m="649000">variables.</span> <span m="649870">You're</span> <span
  m="650000">trying</span> <span m="650170">to</span> <span
  m="650250">discover</span> <span m="651050">the</span> <span
  m="651170">values</span> <span m="651550">of</span> <span
  m="651640">these</span> <span m="651810">variables</span> <span
  m="652490">to</span> <span m="652840">optimize,</span> <span
  m="653640">minimize</span> <span m="654550">your</span> <span
  m="654720">cost</span> <span m="654960">function.</span></p><p><span
  m="656950">The</span> <span m="657030">second</span> <span
  m="657310">thing</span> <span m="657450">that a</span> <span
  m="657580">linear</span> <span m="657840">program</span> <span
  m="658150">has--</span> <span m="658980">and</span> <span
  m="659100">pretty</span> <span m="659230">much</span> <span
  m="659410">the</span> <span m="659470">only</span> <span
  m="659650">other</span> <span m="659820">thing</span> <span
  m="660030">a</span> <span m="660070">linear</span> <span
  m="660330">program</span> <span m="660650">has--</span> <span
  m="662060">are</span> <span m="662200">constraints.</span> <span
  m="663340">And</span> <span m="663730">these</span> <span
  m="663890">constraints</span> <span m="664310">are</span> <span
  m="664400">also</span> <span m="664610">linear.</span> <span m="666700">It
  gets</span> <span m="666970">much</span> <span m="667140">more</span> <span
  m="667280">complicated</span> <span m="667840">if</span> <span
  m="667920">you</span> <span m="668000">have</span> <span
  m="669330">quadratic</span> <span m="670180">constraints,</span> <span
  m="671140">and</span> <span m="671290">we</span> <span m="671390">won't</span>
  <span m="671590">go</span> <span m="671720">there.</span> <span
  m="673050">These</span> <span m="673570">constraints</span> <span
  m="674000">that</span> <span m="674110">I'm</span> <span
  m="674200">going</span> <span m="674320">to</span> <span
  m="674380">write</span> <span m="675530">correspond</span> <span
  m="676020">to</span> <span m="676870">this</span> <span
  m="677290">statement</span> <span m="677720">here</span> <span
  m="678420">that</span> <span m="678710">says</span> <span
  m="678900">you</span> <span m="678990">want</span> <span m="679110">to</span>
  <span m="679160">majority</span> <span m="680530">in</span> <span
  m="681340">each</span> <span m="681610">demographic.</span></p><p><span
  m="682860">So</span> <span m="683090">you</span> <span m="683180">can</span>
  <span m="683270">imagine</span> <span m="683620">that</span> <span
  m="683930">because</span> <span m="684140">you</span> <span
  m="684200">have</span> <span m="684320">three</span> <span
  m="684490">demographics,</span> <span m="685620">you're going</span> <span
  m="685760">to have</span> <span m="685930">three</span> <span
  m="686090">constraints.</span> <span m="688420">You</span> <span
  m="688560">could</span> <span m="688650">have</span> <span
  m="688730">written</span> <span m="688920">this</span> <span
  m="689080">differently.</span> <span m="689910">There's</span> <span
  m="690090">just</span> <span m="690640">any</span> <span
  m="690820">number</span> <span m="691200">of</span> <span
  m="692420">variants</span> <span m="692920">here.</span> <span
  m="693580">And</span> <span m="693720">you'll</span> <span
  m="693850">get</span> <span m="693970">the</span> <span
  m="694040">sense</span> <span m="694300">of</span> <span
  m="694400">that</span> <span m="694870">as</span> <span m="695070">we</span>
  <span m="695180">go</span> <span m="695380">to</span> <span
  m="695690">other</span> <span m="696300">examples.</span> <span
  m="697120">But</span> <span m="697280">we'll</span> <span
  m="697400">just</span> <span m="697600">stick</span> <span
  m="697740">to</span> <span m="697830">one</span> <span
  m="698030">variant</span> <span m="698370">here.</span></p><p><span
  m="699700">So</span> <span m="699770">now,</span> <span m="699950">I</span>
  <span m="700050">want</span> <span m="700190">to</span> <span
  m="700920">translate</span> <span m="701400">everything that</span> <span
  m="701830">I've</span> <span m="703330">written</span> <span
  m="703600">in</span> <span m="703700">English</span> <span
  m="704020">over</span> <span m="704170">there</span> <span
  m="704950">into</span> <span m="705160">algebra.</span> <span
  m="706860">And</span> <span m="707060">so</span> <span m="708220">I</span>
  <span m="708350">got</span> <span m="711360">my</span> <span
  m="712860">minimization</span> <span m="713460">criterion--</span> <span
  m="714490">minimize</span> <span m="714950">x1</span> <span
  m="715330">plus</span> <span m="715510">x2</span> <span m="715870">plus</span>
  <span m="716260">x3</span> <span m="716720">plus</span> <span
  m="716820">x4--</span> <span m="718460">subject</span> <span
  m="721380">to</span> <span m="723410">minus</span> <span m="723930">2x1</span>
  <span m="725680">plus</span> <span m="726060">8x2</span> <span
  m="727190">plus</span> <span m="727900">0x3</span> <span
  m="729690">plus</span> <span m="730260">10x4</span> <span
  m="732060">greater</span> <span m="732300">than</span> <span
  m="732450">or</span> <span m="732550">equal</span> <span m="732830">to</span>
  <span m="732960">50,000.</span> <span m="734890">And</span> <span
  m="735600">this</span> <span m="735860">represents</span> <span
  m="737140">the</span> <span m="738230">requirement</span> <span
  m="738960">that</span> <span m="739110">I</span> <span m="739160">want</span>
  <span m="739370">a</span> <span m="739410">majority</span> <span
  m="740620">in</span> <span m="740830">the</span> <span m="741080">first</span>
  <span m="741450">demographic,</span> <span m="742580">namely</span> <span
  m="742960">the</span> <span m="743120">urban</span> <span
  m="743440">demographic.</span> <span m="744130">And</span> <span
  m="744260">so</span> <span m="744350">I</span> <span m="744450">want</span>
  <span m="744710">at</span> <span m="744800">least</span> <span
  m="744980">50,000</span> <span m="745530">votes</span> <span
  m="745860">there.</span></p><p><span m="746560">And</span> <span
  m="746780">I</span> <span m="746830">need</span> <span m="747040">to</span>
  <span m="747130">spend</span> <span m="747680">the</span> <span
  m="747750">money</span> <span m="748080">corresponding</span> <span
  m="748650">to</span> <span m="748780">the</span> <span
  m="748890">values</span> <span m="749350">of</span> <span m="749440">x1</span>
  <span m="749620">through</span> <span m="750020">x4</span> <span
  m="750930">in</span> <span m="751050">such</span> <span m="751280">a</span>
  <span m="751340">way</span> <span m="751520">that</span> <span
  m="751860">I</span> <span m="751980">get</span> <span m="752280">those</span>
  <span m="752930">50,000</span> <span m="753490">votes.</span> <span
  m="754230">And</span> <span m="754370">that</span> <span
  m="754490">represents</span> <span m="754970">that,</span> <span
  m="755180">and it's</span> <span m="755380">just</span> <span
  m="755570">reading</span> <span m="755850">off</span> <span
  m="756520">the</span> <span m="756600">minus</span> <span m="756930">2,</span>
  <span m="758250">8,</span> <span m="758650">0,</span> <span
  m="759020">and</span> <span m="759190">10</span> <span m="760190">from</span>
  <span m="760580">the</span> <span m="760890">urban</span> <span
  m="761310">column.</span> <span m="762210">So</span> <span
  m="762380">those</span> <span m="762590">numbers</span> <span
  m="762850">that</span> <span m="762970">you</span> <span m="763070">see</span>
  <span m="763270">here</span> <span m="763590">correspond</span> <span
  m="764020">to</span> <span m="764100">the</span> <span
  m="764200">column,</span> <span m="765210">because</span> <span
  m="765550">I'm</span> <span m="765640">talking</span> <span
  m="765850">about</span> <span m="766020">the</span> <span
  m="766170">urban</span> <span m="766370">demographic.</span> <span
  m="767350">And</span> <span m="767520">you</span> <span m="767610">can</span>
  <span m="767710">imagine</span> <span m="768080">that</span> <span
  m="768280">the</span> <span m="768850">next</span> <span
  m="769120">constraint</span> <span m="769550">is</span> <span
  m="769660">going</span> <span m="769780">to</span> <span
  m="769830">correspond</span> <span m="770220">to</span> <span
  m="770280">the</span> <span m="770370">middle</span> <span
  m="770640">column,</span> <span m="771360">and</span> <span
  m="772180">the</span> <span m="772280">third</span> <span m="772610">to</span>
  <span m="772690">the</span> <span m="772820">third.</span></p><p><span
  m="774180">So I'll</span> <span m="774330">just</span> <span
  m="774680">write</span> <span m="774870">that</span> <span
  m="775010">out.</span> <span m="775870">I will</span> <span
  m="775980">call</span> <span m="776210">this</span> <span
  m="776380">constraint</span> <span m="777360">the</span> <span
  m="777550">constraint</span> <span m="777900">number</span> <span
  m="778120">1--</span> <span m="778740">I</span> <span m="779130">might</span>
  <span m="779350">refer</span> <span m="779620">to</span> <span
  m="779730">it</span> <span m="779810">later--</span> <span
  m="781850">5x1,</span> <span m="784040">plus</span> <span
  m="784350">2x2</span> <span m="786030">plus</span> <span
  m="786220">0x3,</span> <span m="788162">plus</span> <span
  m="788550">0x4</span> <span m="790010">greater</span> <span m="790420">than
  or</span> <span m="790640">equal</span> <span m="790890">to</span> <span
  m="791610">100,000.</span> <span m="793340">Call</span> <span
  m="793550">this</span> <span m="793780">number</span> <span
  m="794040">two.</span> <span m="795610">And</span> <span
  m="795810">then</span> <span m="796520">finally,</span> <span
  m="797690">3x1</span> <span m="798950">minus</span> <span
  m="799350">5x2</span> <span m="802310">plus</span> <span
  m="802460">10x3.</span></p><p><span m="811030">And</span> <span
  m="813180">that's</span> <span m="813510">our</span> <span
  m="814460">set</span> <span m="814660">of</span> <span
  m="814710">constraints,</span> <span m="815310">but</span> <span
  m="815440">there's</span> <span m="815920">one</span> <span
  m="816340">more</span> <span m="817650">little</span> <span
  m="817980">issue</span> <span m="818290">that</span> <span
  m="818840">we</span> <span m="819440">have</span> <span m="819630">to</span>
  <span m="819710">be</span> <span m="820480">careful</span> <span
  m="820850">about, if you're</span> <span m="821300">being</span> <span
  m="821720">precise,</span> <span m="822700">and</span> <span
  m="822940">that</span> <span m="823120">is</span> <span m="823270">that</span>
  <span m="824370">there's</span> <span m="824680">no</span> <span
  m="824800">notion</span> <span m="825180">of</span> <span
  m="828890">un-advertising.</span> <span m="830890">And</span> <span
  m="831110">so</span> <span m="833260">you're</span> <span
  m="833450">going</span> <span m="833610">to</span> <span
  m="833660">spend</span> <span m="834880">positive</span> <span
  m="835260">dollars.</span> <span m="836940">And</span> <span
  m="837520">so</span> <span m="837740">x1</span> <span
  m="838290">through</span> <span m="838620">x4</span> <span
  m="838890">is</span> <span m="839110">greater</span> <span
  m="839280">than</span> <span m="839430">or</span> <span
  m="839450">equal</span> <span m="839630">to</span> <span
  m="839680">0.</span></p><p><span m="841260">So</span> <span
  m="841380">that's</span> <span m="841580">our</span> <span
  m="841670">first</span> <span m="841920">linear</span> <span
  m="842190">program.</span> <span m="843720">And</span> <span
  m="843980">it</span> <span m="844070">came</span> <span m="844270">from</span>
  <span m="844430">this</span> <span m="844590">particular</span> <span
  m="844890">problem.</span> <span m="846220">It'd</span> <span
  m="846350">be</span> <span m="846440">wonderful--</span> <span
  m="847250">and</span> <span m="847510">that's</span> <span
  m="847740">exactly</span> <span m="848080">what</span> <span
  m="848210">we're</span> <span m="848300">going</span> <span
  m="848390">to</span> <span m="848450">do</span> <span m="848580">for</span>
  <span m="848660">the</span> <span m="848730">rest</span> <span m="848920">of
  the</span> <span m="848990">lecture--</span> <span m="850860">if</span> <span
  m="851220">we</span> <span m="851430">could</span> <span
  m="852450">solve</span> <span m="852940">this</span> <span
  m="853890">linear</span> <span m="854200">program</span> <span
  m="854710">and</span> <span m="855080">any</span> <span
  m="855480">possible</span> <span m="855970">linear</span> <span
  m="856240">program</span> <span m="857900">in</span> <span
  m="858060">an</span> <span m="858170">efficient</span> <span
  m="858540">way.</span></p><p><span m="860010">And</span> <span
  m="860170">so</span> <span m="860380">the</span> <span
  m="860470">number</span> <span m="860650">of</span> <span
  m="860720">variables</span> <span m="861190">is</span> <span
  m="861690">small</span> <span m="862150">n.</span> <span m="869270">And</span>
  <span m="869480">you</span> <span m="869560">can</span> <span
  m="869660">imagine</span> <span m="869980">that the</span> <span
  m="870080">number</span> <span m="870390">of</span> <span
  m="870460">constraints</span> <span m="871160">here,</span> <span
  m="871710">just</span> <span m="871940">talking</span> <span
  m="872210">about</span> <span m="872430">these</span> <span
  m="872640">constraints,</span> <span m="874490">are</span> <span
  m="874900">m</span> <span m="875150">constraints.</span> <span
  m="880030">And</span> <span m="881590">you</span> <span
  m="881750">certainly</span> <span m="882060">want</span> <span
  m="882920">at</span> <span m="883050">run</span> <span m="883260">time</span>
  <span m="884130">that</span> <span m="884310">is</span> <span
  m="884460">polynomial</span> <span m="885100">in</span> <span
  m="885320">n.</span> <span m="887440">That's</span> <span
  m="887630">our</span> <span m="887780">goal</span> <span
  m="888010">here.</span></p><p><span m="888740">And</span> <span
  m="888980">as</span> <span m="889110">I</span> <span
  m="889150">mentioned</span> <span m="890490">early on,</span> <span
  m="891480">it</span> <span m="891850">was</span> <span
  m="892670">unclear</span> <span m="893170">for</span> <span
  m="893300">the</span> <span m="893410">longest</span> <span
  m="893940">time--</span> <span m="894390">well,</span> <span m="894640">at
  least</span> <span m="894730">not</span> <span m="894890">until</span> <span
  m="895120">1979,</span> <span m="895960">but</span> <span
  m="896360">people</span> <span m="896570">had</span> <span
  m="896650">been</span> <span m="896820">thinking</span> <span
  m="897080">about</span> <span m="897300">it</span> <span m="897430">for</span>
  <span m="897610">a</span> <span m="897630">long</span> <span
  m="897830">time</span> <span m="898060">before</span> <span
  m="898320">that--</span> <span m="898970">as</span> <span m="899170">to</span>
  <span m="899260">whether</span> <span m="900200">there</span> <span
  m="900320">was</span> <span m="900440">a</span> <span
  m="900500">general</span> <span m="900890">algorithm</span> <span
  m="901790">that</span> <span m="901910">would</span> <span
  m="902050">solve</span> <span m="902440">any</span> <span
  m="903030">linear</span> <span m="903370">program</span> <span
  m="904320">in</span> <span m="904500">time-polynomial</span> <span
  m="905350">in</span> <span m="905560">n.</span> <span m="906266">And</span>
  <span m="906620">that</span> <span m="906710">was</span> <span
  m="906850">resolved</span> <span m="907210">in</span> <span
  m="907460">'79</span> <span m="907940">by</span> <span
  m="908060">Khachiyan.</span> <span m="909820">We'll</span> <span
  m="910000">look</span> <span m="910300">at</span> <span m="910380">a</span>
  <span m="910990">algorithm</span> <span m="912520">as</span> <span
  m="912700">simplex</span> <span m="913240">that</span> <span
  m="914120">in</span> <span m="914230">the</span> <span m="914310">worst</span>
  <span m="914530">case</span> <span m="914760">runs</span> <span
  m="914980">exponentially</span> <span m="915295">in</span> <span
  m="915610">n</span> <span m="916240">but</span> <span m="916680">is</span>
  <span m="917020">simpler to</span> <span m="917490">describe</span> <span
  m="918300">and</span> <span m="918470">is</span> <span m="918570">very</span>
  <span m="918750">efficient</span> <span m="919360">in</span> <span
  m="919530">practice.</span></p><p><span m="921470">So</span> <span
  m="923210">in</span> <span m="923370">our</span> <span
  m="923570">particular</span> <span m="923980">problem,</span> <span
  m="925510">this</span> <span m="925810">one,</span> <span m="927120">it</span>
  <span m="927170">turns</span> <span m="927440">out</span> <span
  m="927970">you--</span> <span m="929660">and</span> <span
  m="929820">I'm</span> <span m="929900">actually</span> <span
  m="930140">going</span> <span m="930270">to</span> <span
  m="930850">come</span> <span m="931000">back</span> <span m="931190">to</span>
  <span m="931270">this in a</span> <span m="931600">second--</span> <span
  m="931990">but</span> <span m="934290">I</span> <span m="934390">will</span>
  <span m="934510">just</span> <span m="934690">tell</span> <span
  m="934920">you</span> <span m="936540">that</span> <span m="937230">the</span>
  <span m="937440">optimum</span> <span m="939420">for</span> <span
  m="939670">this</span> <span m="941970">particular</span> <span
  m="942320">linear</span> <span m="942520">program</span> <span
  m="942950">with</span> <span m="943050">these</span> <span
  m="943220">particular</span> <span m="943590">numbers</span> <span
  m="946550">correspond</span> <span m="947050">to</span> <span
  m="948510">these</span> <span m="948810">numbers</span> <span
  m="949170">here.</span> <span m="949840">So</span> <span m="950000">you</span>
  <span m="950120">want</span> <span m="950240">to</span> <span
  m="950290">spend</span> <span m="952240">something</span> <span
  m="952610">of</span> <span m="952680">the</span> <span m="952760">order</span>
  <span m="953050">of</span> <span m="954610">$20,000</span> <span
  m="956602">for--</span> <span m="957600">so</span> <span
  m="957730">there's</span> <span m="957870">100</span> <span
  m="958230">here,</span> <span m="958530">so</span> <span
  m="958710">take</span> <span m="958840">away</span> <span
  m="958900">the</span> <span m="961650">two</span> <span
  m="961780">0's--</span> <span m="962720">so</span> <span
  m="963570">spend</span> <span m="963820">something</span> <span
  m="964040">of</span> <span m="964110">the</span> <span m="964180">order</span>
  <span m="964450">of</span> <span m="964780">$20,000</span> <span
  m="966020">for</span> <span m="966130">the</span> <span
  m="966240">first</span> <span m="966530">issue,</span> <span
  m="967400">building</span> <span m="967700">roads,</span> <span
  m="968910">spend</span> <span m="969370">a</span> <span m="969830">bit</span>
  <span m="970040">of</span> <span m="970100">money</span> <span
  m="970390">for</span> <span m="970590">the</span> <span
  m="970720">second</span> <span m="971040">issue,</span> <span
  m="971860">ignore</span> <span m="973380">the</span> <span
  m="973500">third</span> <span m="974210">corresponding</span> <span
  m="974650">to</span> <span m="974710">farm</span> <span
  m="975020">subsidies,</span> <span m="977090">and</span> <span
  m="979090">spend</span> <span m="979380">a</span> <span m="979420">bit</span>
  <span m="979550">of</span> <span m="979620">money</span> <span
  m="981460">for</span> <span m="982560">the</span> <span
  m="982670">gasoline</span> <span m="983180">tax</span> <span
  m="983500">issue.</span></p><p><span m="984700">And</span> <span
  m="984920">these</span> <span m="985080">numbers</span> <span
  m="985390">aren't</span> <span m="986170">important,</span> <span
  m="987380">other than</span> <span m="987520">the</span> <span
  m="987590">fact</span> <span m="987870">that</span> <span
  m="988130">they</span> <span m="988370">happen</span> <span
  m="988640">to</span> <span m="988720">be</span> <span
  m="988880">optimum.</span> <span m="990190">So</span> <span
  m="990300">if</span> <span m="990360">you</span> <span m="990450">add</span>
  <span m="990670">up</span> <span m="990810">these</span> <span
  m="991000">numbers,</span> <span m="992250">then</span> <span
  m="992610">x1</span> <span m="994020">plus</span> <span m="994330">x2</span>
  <span m="994770">plus</span> <span m="995390">x3</span> <span
  m="997800">plus</span> <span m="998090">x4</span> <span m="1000070">is</span>
  <span m="1001360">something</span> <span m="1001650">of</span> <span
  m="1001730">the</span> <span m="1001800">order</span> <span
  m="1001980">of</span> <span m="1002080">$21,000--</span> <span
  m="1005110">$27,000,</span> <span m="1005780">excuse</span> <span
  m="1005880">me,</span> <span m="1006240">though</span> <span
  m="1006610">I'm</span> <span m="1006800">writing</span> <span
  m="1007050">it</span> <span m="1007140">out</span> <span m="1007310">as</span>
  <span m="1008672">this</span> <span m="1009030">fraction.</span> <span
  m="1010890">So</span> <span m="1011220">important</span> <span
  m="1012600">consideration</span> <span m="1013200">here</span> <span
  m="1014030">is</span> <span m="1014250">that</span> <span
  m="1015190">these</span> <span m="1015520">values</span> <span
  m="1016180">xi</span> <span m="1017580">are</span> <span
  m="1017780">real</span> <span m="1018010">numbers.</span></p><p><span
  m="1021910">That's</span> <span m="1022050">it.</span> <span
  m="1023640">It's</span> <span m="1023840">not</span> <span
  m="1024030">that</span> <span m="1024150">they</span> <span
  m="1024220">have</span> <span m="1024410">to be</span> <span
  m="1024520">integral.</span> <span m="1026420">Clearly,</span> <span
  m="1026619">there</span> <span m="1026950">were fractions</span> <span
  m="1027380">here</span> <span m="1027640">for</span> <span
  m="1027720">the</span> <span m="1027819">optimum,</span> <span
  m="1029060">some</span> <span m="1029310">of</span> <span
  m="1029349">them</span> <span m="1029490">anyway.</span> <span
  m="1030710">But</span> <span m="1031160">in</span> <span
  m="1031310">general,</span> <span m="1031619">linear</span> <span
  m="1031920">programming</span> <span m="1032640">says</span> <span
  m="1033530">the</span> <span m="1033750">variable</span> <span
  m="1034410">values</span> <span m="1035680">are</span> <span
  m="1035859">real.</span></p><p><span m="1037440">There's</span> <span
  m="1037619">also</span> <span m="1037859">integer</span> <span
  m="1038329">linear</span> <span m="1038630">programming,</span> <span
  m="1039609">which</span> <span m="1039700">is</span> <span
  m="1040490">NP</span> <span m="1040680">complete,</span> <span
  m="1041750">which</span> <span m="1041940">adds the</span> <span
  m="1042260">additional</span> <span m="1042710">constraint</span> <span
  m="1043829">that</span> <span m="1044060">the</span> <span
  m="1044160">xi</span> <span m="1044450">values</span> <span
  m="1044900">are</span> <span m="1045000">integral.</span> <span m="1046180">So
  it</span> <span m="1046369">turns</span> <span m="1046540">into</span> <span
  m="1046630">a</span> <span m="1046750">harder</span> <span
  m="1047020">problem.</span> <span m="1048620">You got</span> <span
  m="1048780">polynomial-time</span> <span m="1049440">solvable</span> <span
  m="1049910">if</span> <span m="1050190">the</span> <span m="1050290">xi</span>
  <span m="1050630">are</span> <span m="1050740">real.</span> <span
  m="1051700">You</span> <span m="1051840">got</span> <span
  m="1052410">NP</span> <span m="1052680">complete,</span> <span
  m="1053670">which</span> <span m="1054210">Eric is</span> <span
  m="1054520">going</span> <span m="1054630">to</span> <span
  m="1054690">talk</span> <span m="1054880">about</span> <span
  m="1055160">on</span> <span m="1055780">Thursday,</span> <span
  m="1057210">if</span> <span m="1058760">the</span> <span
  m="1059570">values</span> <span m="1060080">are</span> <span
  m="1060570">forced</span> <span m="1061020">to</span> <span
  m="1061070">be</span> <span m="1061190">integral.</span> <span
  m="1061690">So</span> <span m="1061870">this</span> <span
  m="1062040">extra</span> <span m="1062330">constraint</span> <span
  m="1063170">makes</span> <span m="1063400">things</span> <span
  m="1063850">worse</span> <span m="1064570">from</span> <span
  m="1064850">a</span> <span m="1065070">complexity</span> <span
  m="1065560">standpoint.</span> <span m="1066700">We</span> <span
  m="1066880">won't</span> <span m="1067020">talk</span> <span
  m="1067160">about</span> <span m="1067340">ILP</span> <span
  m="1067710">anymore</span> <span m="1068220">for</span> <span
  m="1068350">the</span> <span m="1068430">rest</span> <span
  m="1068620">of</span> <span m="1068690">this</span> <span
  m="1068850">lecture.</span></p><p><span m="1070730">So</span> <span
  m="1071170">I will</span> <span m="1071270">come</span> <span
  m="1071520">back</span> <span m="1071690">to</span> <span
  m="1071770">this.</span> <span m="1072430">And</span> <span
  m="1073530">I'll</span> <span m="1073810">talk</span> <span
  m="1074120">about</span> <span m="1074380">how</span> <span
  m="1075670">we</span> <span m="1075760">can</span> <span
  m="1075860">show</span> <span m="1076160">that</span> <span m="1076330">this
  is</span> <span m="1076580">optimum</span> <span m="1077570">without</span>
  <span m="1077840">actually</span> <span m="1078130">going</span> <span
  m="1078460">into</span> <span m="1079510">a</span> <span
  m="1079580">deep</span> <span m="1079880">algorithmic</span> <span
  m="1080440">dive.</span> <span m="1081370">But</span> <span
  m="1081710">what</span> <span m="1081850">I</span> <span
  m="1081870">want</span> <span m="1082020">to</span> <span
  m="1082100">do</span> <span m="1082810">just</span> <span
  m="1082980">before</span> <span m="1083200">that</span> <span
  m="1084090">is</span> <span m="1084400">to</span> <span
  m="1084870">give</span> <span m="1085090">you</span> <span
  m="1085210">the</span> <span m="1085350">general</span> <span
  m="1085790">formulation</span> <span m="1087500">of</span> <span
  m="1088190">a</span> <span m="1088360">linear</span> <span
  m="1088660">program.</span> <span m="1090130">It's</span> <span
  m="1090440">called</span> <span m="1091160">the</span> <span
  m="1091290">standard</span> <span m="1091890">form</span> <span
  m="1093140">in</span> <span m="1094280">CLRS,</span> <span
  m="1095790">also</span> <span m="1096100">called</span> <span
  m="1096290">the</span> <span m="1096370">general</span> <span
  m="1096710">form.</span></p><p><span m="1098220">In</span> <span
  m="1098350">some</span> <span m="1098530">cases,</span> <span
  m="1098900">we'll</span> <span m="1101850">look</span> <span
  m="1102060">at</span> <span m="1103760">the</span> <span
  m="1103890">standard</span> <span m="1104430">form</span> <span
  m="1108670">for</span> <span m="1108920">LP.</span> <span
  m="1110380">And</span> <span m="1111060">I</span> <span m="1111390">want
  to</span> <span m="1111680">pop</span> <span m="1111870">up a</span> <span
  m="1112320">level</span> <span m="1114190">about</span> <span
  m="1114550">this</span> <span m="1114700">example</span> <span
  m="1115770">and</span> <span m="1116280">give</span> <span
  m="1116480">you</span> <span m="1116560">the</span> <span
  m="1116670">general</span> <span m="1117030">setting.</span> <span
  m="1117850">And</span> <span m="1117990">we'll</span> <span
  m="1118400">focus</span> <span m="1118730">in</span> <span
  m="1118870">on</span> <span m="1118960">the</span> <span
  m="1119040">general</span> <span m="1119360">setting</span> <span
  m="1120290">for</span> <span m="1121250">the</span> <span
  m="1121330">most</span> <span m="1121580">part.</span></p><p><span
  m="1122930">But</span> <span m="1123370">what</span> <span
  m="1123630">I</span> <span m="1123740">have</span> <span
  m="1124000">here</span> <span m="1124310">is</span> <span m="1124680">I</span>
  <span m="1124820">can</span> <span m="1124980">either</span> <span
  m="1125250">minimize</span> <span m="1127160">or</span> <span
  m="1127300">maximize--</span> <span m="1128690">we</span> <span
  m="1128810">had</span> <span m="1128960">a</span> <span
  m="1129000">minimization</span> <span m="1129620">problem--</span> <span
  m="1132310">for</span> <span m="1132450">the</span> <span
  m="1133720">political</span> <span m="1134780">problem,</span> <span
  m="1136480">minimize</span> <span m="1136960">the</span> <span
  m="1136990">linear</span> <span m="1137370">objective</span> <span
  m="1137950">function</span> <span m="1141390">subject</span> <span
  m="1143990">to</span> <span m="1144130">linear</span> <span
  m="1148550">inequalities</span> <span m="1151720">or</span> <span
  m="1151960">equations.</span> <span m="1157790">And</span> <span
  m="1157970">the</span> <span m="1158030">variables,</span> <span
  m="1162890">think</span> <span m="1163220">of</span> <span
  m="1163360">x</span> <span m="1163620">as</span> <span m="1163760">a</span>
  <span m="1163800">vector,</span> <span m="1164260">it's</span> <span
  m="1164370">a</span> <span m="1164430">column</span> <span
  m="1164790">vector,</span> <span m="1166052">or</span> <span
  m="1166440">x1,</span> <span m="1167280">x2,</span> <span
  m="1168710">all</span> <span m="1168890">the</span> <span
  m="1168940">way</span> <span m="1169070">to</span> <span
  m="1170090">xn.</span> <span m="1179030">And</span> <span
  m="1180560">the</span> <span m="1180980">objective</span> <span
  m="1181410">function</span> <span m="1185430">is</span> <span
  m="1190690">c</span> <span m="1191090">times</span> <span
  m="1191450">x,</span> <span m="1193360">so</span> <span
  m="1193540">that's</span> <span m="1194120">c1x1</span> <span m="1195780">dot,
  dot,</span> <span m="1196180">dot,</span> <span m="1197750">cnxn.</span> <span
  m="1199760">And</span> <span m="1200060">we</span> <span
  m="1200210">just</span> <span m="1200420">had</span> <span
  m="1200800">all</span> <span m="1200940">the</span> <span
  m="1201020">coefficients</span> <span m="1201470">being</span> <span
  m="1201580">a</span> <span m="1201660">1</span> <span m="1201860">over</span>
  <span m="1202010">there.</span></p><p><span m="1202950">And</span> <span
  m="1203280">the</span> <span m="1203610">inequalities,</span> <span
  m="1204610">they're</span> <span m="1204875">the</span> <span
  m="1205140">fun</span> <span m="1205380">part,</span> <span
  m="1212260">you</span> <span m="1212380">can</span> <span
  m="1212490">represent</span> <span m="1212830">them</span> <span
  m="1212980">as</span> <span m="1213400">a</span> <span
  m="1213460">matrix</span> <span m="1214060">A,</span> <span
  m="1215580">so</span> <span m="1215910">A</span> <span
  m="1216120">times</span> <span m="1216490">x</span> <span
  m="1216940">less</span> <span m="1217210">than</span> <span
  m="1217330">or</span> <span m="1217450">equal</span> <span
  m="1217750">to</span> <span m="1218940">b.</span> <span m="1220090">And</span>
  <span m="1220290">notice</span> <span m="1220580">that</span> <span
  m="1221530">this</span> <span m="1221710">is</span> <span
  m="1221840">the</span> <span m="1221930">standard</span> <span
  m="1222310">form</span> <span m="1222590">that</span> <span
  m="1222700">I'm</span> <span m="1222790">talking</span> <span
  m="1223070">about.</span> <span m="1223660">And</span> <span
  m="1223930">now,</span> <span m="1224160">I have</span> <span
  m="1224360">diverged</span> <span m="1225350">from</span> <span
  m="1226830">what</span> <span m="1226960">I</span> <span
  m="1227020">had</span> <span m="1227230">here,</span> <span
  m="1227510">because</span> <span m="1227720">I</span> <span
  m="1227780">had</span> <span m="1227960">greater</span> <span
  m="1228180">than</span> <span m="1228330">or</span> <span
  m="1228440">equal</span> <span m="1228660">to</span> <span
  m="1228790">over</span> <span m="1228950">here.</span></p><p><span
  m="1230140">So</span> <span m="1231350">it</span> <span
  m="1231520">turns</span> <span m="1231760">out,</span> <span
  m="1232130">you'll</span> <span m="1232400">see</span> <span
  m="1232700">linear</span> <span m="1232970">programs</span> <span
  m="1233520">in</span> <span m="1233610">different</span> <span
  m="1233890">settings.</span> <span m="1234940">Sometimes,</span> <span
  m="1235370">you'll</span> <span m="1235510">have</span> <span
  m="1235760">minimization.</span> <span m="1236380">Sometimes,</span> <span
  m="1236730">you'll</span> <span m="1236820">have</span> <span
  m="1236970">maximization.</span> <span m="1238340">Sometimes,</span> <span
  m="1238700">you'll</span> <span m="1238810">have</span> <span
  m="1238970">less</span> <span m="1239170">than</span> <span
  m="1239350">constraints,</span> <span m="1240370">less</span> <span
  m="1240470">than</span> <span m="1240570">or</span> <span
  m="1240680">equal</span> <span m="1240880">to</span> <span
  m="1240980">constraints.</span> <span m="1241780">Sometimes,</span> <span
  m="1242070">you'll</span> <span m="1242190">have</span> <span
  m="1242350">greater</span> <span m="1242550">than</span> <span
  m="1242680">or</span> <span m="1242710">equal</span> <span
  m="1242930">to</span> <span m="1243030">constraints.</span> <span
  m="1243970">Sometimes,</span> <span m="1244210">you'll</span> <span
  m="1244330">have</span> <span m="1244440">equality</span> <span
  m="1244880">constraints.</span></p><p><span m="1245940">We'll</span> <span
  m="1246090">spend</span> <span m="1246310">a</span> <span
  m="1246360">little</span> <span m="1246610">bit</span> <span
  m="1246740">of</span> <span m="1246820">time</span> <span
  m="1247480">talking</span> <span m="1247730">about</span> <span
  m="1247920">how</span> <span m="1248100">you</span> <span
  m="1248240">can</span> <span m="1248380">transform</span> <span
  m="1250160">any</span> <span m="1250500">given</span> <span
  m="1250760">linear</span> <span m="1251110">program</span> <span
  m="1252000">into</span> <span m="1252280">a</span> <span
  m="1252340">standard</span> <span m="1252770">form.</span> <span
  m="1253860">So</span> <span m="1254060">our</span> <span
  m="1254190">standard</span> <span m="1254590">form</span> <span
  m="1255840">is</span> <span m="1256040">going</span> <span
  m="1256260">to</span> <span m="1256350">be</span> <span
  m="1257970">something</span> <span m="1258490">that</span> <span
  m="1259150">maximizes</span> <span m="1261040">the</span> <span
  m="1261240">objective</span> <span m="1261720">function.</span> <span
  m="1263100">So</span> <span m="1263830">these</span> <span m="1264120">are
  our</span> <span m="1264340">inequalities,</span> <span m="1265230">and</span>
  <span m="1265390">they're</span> <span m="1265530">represented</span> <span
  m="1266550">as</span> <span m="1266750">less</span> <span
  m="1266990">than</span> <span m="1267130">or</span> <span
  m="1267220">equal</span> <span m="1267480">to.</span> <span
  m="1267900">That's</span> <span m="1268170">the</span> <span
  m="1268270">standard</span> <span m="1268670">form.</span></p><p><span
  m="1269880">And</span> <span m="1271400">you</span> <span
  m="1271510">want</span> <span m="1271660">to</span> <span
  m="1271880">maximize</span> <span m="1275170">c</span> <span
  m="1275842">times</span> <span m="1276180">x--</span> <span
  m="1278350">again,</span> <span m="1279330">max</span> <span
  m="1279640">for</span> <span m="1279810">standard--</span> <span
  m="1280780">such</span> <span m="1281210">that</span> <span
  m="1284870">these</span> <span m="1285100">set</span> <span
  m="1285300">of</span> <span m="1285380">inequalities</span> <span
  m="1285960">told</span> <span m="1287380">Ax</span> <span
  m="1287720">less</span> <span m="1287880">than</span> <span
  m="1287970">or</span> <span m="1288020">equal</span> <span
  m="1288270">to</span> <span m="1288350">b</span> <span m="1289740">and</span>
  <span m="1291790">x</span> <span m="1292820">greater</span> <span
  m="1293000">than</span> <span m="1293160">or</span> <span
  m="1293180">equal</span> <span m="1293410">to</span> <span
  m="1293460">0.</span> <span m="1295510">So</span> <span m="1295720">for</span>
  <span m="1296000">each</span> <span m="1296390">of</span> <span
  m="1296500">the</span> <span m="1296580">values</span> <span
  m="1298850">that</span> <span m="1299030">correspond</span> <span
  m="1299450">to</span> <span m="1299510">the</span> <span
  m="1299600">variables,</span> <span m="1300320">you</span> <span
  m="1300440">want</span> <span m="1300600">these</span> <span
  m="1300760">variables</span> <span m="1301200">to</span> <span
  m="1301270">be</span> <span m="1301370">non-negative</span> <span
  m="1302160">in</span> <span m="1302260">the</span> <span
  m="1302360">standard</span> <span m="1302580">form.</span> <span
  m="1303900">And</span> <span m="1304490">you</span> <span
  m="1304620">want</span> <span m="1304780">less</span> <span
  m="1304960">than</span> <span m="1305050">or</span> <span
  m="1305130">equal</span> <span m="1305370">to</span> <span
  m="1305980">corresponding</span> <span m="1306410">to</span> <span
  m="1306660">each</span> <span m="1306920">of</span> <span
  m="1307020">the</span> <span m="1307100">inequalities--</span> <span
  m="1308360">not</span> <span m="1308570">equal</span> <span
  m="1308860">to,</span> <span m="1309280">not</span> <span
  m="1309510">greater</span> <span m="1309740">than</span> <span
  m="1309930">or</span> <span m="1310050">equal</span> <span
  m="1310260">to,</span> <span m="1310950">but</span> <span
  m="1311340">less</span> <span m="1311510">than</span> <span
  m="1311620">or</span> <span m="1311710">equal</span> <span
  m="1311930">to.</span> <span m="1312700">And</span> <span
  m="1313070">you</span> <span m="1313160">have</span> <span
  m="1313370">this</span> <span m="1313790">linear</span> <span
  m="1314090">cost</span> <span m="1314320">function,</span> <span
  m="1314690">where</span> <span m="1314810">you</span> <span
  m="1314910">could</span> <span m="1314980">have</span> <span
  m="1315140">arbitrary</span> <span m="1315560">coefficients,</span> <span
  m="1317070">but</span> <span m="1317820">you're</span> <span
  m="1317990">maximizing</span> <span m="1318560">it.</span></p><p><span
  m="1319950">So</span> <span m="1320070">that's</span> <span
  m="1320250">it.</span> <span m="1321030">So</span> <span
  m="1321150">it's</span> <span m="1321300">all</span> <span
  m="1321490">about</span> <span m="1321710">polarities,</span> <span
  m="1322810">not</span> <span m="1323040">much</span> <span
  m="1323230">more</span> <span m="1323390">than</span> <span
  m="1323530">that.</span> <span m="1324150">It's</span> <span
  m="1324300">just</span> <span m="1324480">about</span> <span
  m="1324670">polarities.</span> <span m="1325260">And</span> <span
  m="1326650">if</span> <span m="1326800">you</span> <span
  m="1326880">get</span> <span m="1327350">a</span> <span
  m="1327410">linear</span> <span m="1328580">program,</span> <span
  m="1329310">a</span> <span m="1329420">specific</span> <span
  m="1329730">linear</span> <span m="1330090">program</span> <span
  m="1330540">that</span> <span m="1331030">doesn't</span> <span
  m="1331280">conform</span> <span m="1331670">to</span> <span
  m="1331760">this--</span> <span m="1332630">we'll</span> <span
  m="1332900">spend</span> <span m="1333060">a</span> <span
  m="1333110">few</span> <span m="1333260">minutes</span> <span
  m="1334920">talking</span> <span m="1335120">about</span> <span
  m="1335340">conversions--</span> <span m="1336310">and</span> <span
  m="1336510">it's</span> <span m="1336630">going</span> <span
  m="1336730">to</span> <span m="1336770">be</span> <span
  m="1336900">fairly</span> <span m="1337150">straightforward.</span> <span
  m="1338780">May</span> <span m="1338890">not</span> <span
  m="1339030">be</span> <span m="1339130">immediately</span> <span
  m="1339520">obvious,</span> <span m="1340470">but</span> <span
  m="1342100">we'll</span> <span m="1342230">get</span> <span
  m="1342400">to</span> <span m="1342460">that.</span> <span
  m="1343530">Any</span> <span m="1343680">questions</span> <span
  m="1343960">so</span> <span m="1344080">far?</span></p><p><span
  m="1348810">So</span> <span m="1349960">I</span> <span m="1350040">want</span>
  <span m="1350160">to</span> <span m="1350200">go</span> <span
  m="1350320">back</span> <span m="1350530">to</span> <span
  m="1350620">this</span> <span m="1354040">claim</span> <span
  m="1354460">here,</span> <span m="1355600">where</span> <span
  m="1355850">I</span> <span m="1355920">said</span> <span
  m="1356220">this</span> <span m="1356360">is</span> <span
  m="1356500">optimum.</span> <span m="1358380">Now</span> <span
  m="1359110">without</span> <span m="1359770">actually</span> <span
  m="1362750">describing</span> <span m="1363150">an</span> <span
  m="1363240">algorithm</span> <span m="1363640">to</span> <span
  m="1363750">you,</span> <span m="1364520">I'm</span> <span
  m="1364660">going</span> <span m="1364780">to</span> <span
  m="1364820">be</span> <span m="1364880">able</span> <span
  m="1365050">to</span> <span m="1365120">show</span> <span
  m="1365480">you,</span> <span m="1366490">convince</span> <span
  m="1366850">you,</span> <span m="1367460">that</span> <span
  m="1367730">this</span> <span m="1368980">value</span> <span
  m="1369380">here</span> <span m="1370200">corresponding</span> <span
  m="1370690">to</span> <span m="1371620">whatever</span> <span
  m="1371920">it</span> <span m="1371980">is,</span> <span m="1372160">3</span>
  <span m="1372330">million,</span> <span m="1373330">3.1</span> <span
  m="1373630">million,</span> <span m="1374510">is</span> <span
  m="1374710">in</span> <span m="1374820">fact</span> <span
  m="1375060">optimum.</span> <span m="1376470">And</span> <span
  m="1377010">this</span> <span m="1377730">is</span> <span
  m="1378560">something</span> <span m="1378900">I</span> <span
  m="1378950">could</span> <span m="1379080">do,</span> <span
  m="1379840">because</span> <span m="1382090">linear</span> <span
  m="1382380">programming</span> <span m="1384270">has</span> <span
  m="1384510">this</span> <span m="1384680">powerful</span> <span
  m="1385130">notion</span> <span m="1386780">of</span> <span
  m="1387370">duality.</span></p><p><span m="1389080">So</span> <span
  m="1390320">what</span> <span m="1390520">is</span> <span
  m="1390650">that?</span> <span m="1391450">Well,</span> <span
  m="1392390">let's</span> <span m="1392580">just</span> <span
  m="1392750">first</span> <span m="1393020">look</span> <span
  m="1393180">at</span> <span m="1393250">our</span> <span
  m="1393370">specific</span> <span m="1393930">example</span> <span
  m="1394410">here.</span> <span m="1396010">And</span> <span
  m="1396260">I'll</span> <span m="1396370">give</span> <span
  m="1396490">you</span> <span m="1396630">a</span> <span
  m="1396670">very</span> <span m="1397170">specific</span> <span
  m="1398260">observation.</span> <span m="1400370">I'm</span> <span
  m="1400470">going</span> <span m="1400590">to</span> <span
  m="1400640">give</span> <span m="1400820">you</span> <span
  m="1401790">what</span> <span m="1401990">you</span> <span
  m="1402060">can</span> <span m="1402170">think</span> <span
  m="1402430">of</span> <span m="1403710">as</span> <span m="1403940">a</span>
  <span m="1404290">certificate</span> <span m="1406020">of</span> <span
  m="1406210">optimality.</span> <span m="1410570">I'm</span> <span
  m="1410700">going to</span> <span m="1410870">give</span> <span
  m="1411100">you a</span> <span m="1411350">certificate</span> <span
  m="1411600">of</span> <span m="1411900">optimality</span> <span
  m="1412470">for</span> <span m="1412730">that</span> <span
  m="1413370">set</span> <span m="1413600">of</span> <span
  m="1413680">numbers.</span></p><p><span m="1414840">And</span> <span
  m="1415020">here's</span> <span m="1415240">how</span> <span
  m="1415370">I'm</span> <span m="1415470">going</span> <span
  m="1415590">to</span> <span m="1415650">do</span> <span m="1415800">it.</span>
  <span m="1417860">So</span> <span m="1418470">is</span> <span
  m="1418740">there</span> <span m="1421030">a</span> <span
  m="1421100">short</span> <span m="1422380">certificate?</span> <span
  m="1425550">I</span> <span m="1425660">can</span> <span
  m="1425800">imagine</span> <span m="1426190">giving</span> <span
  m="1426420">you</span> <span m="1426610">a</span> <span
  m="1426700">long</span> <span m="1427140">proof</span> <span
  m="1427570">that</span> <span m="1428360">a</span> <span
  m="1428460">particular</span> <span m="1428870">linear</span> <span
  m="1430210">programming</span> <span m="1430690">algorithm</span> <span
  m="1431230">always</span> <span m="1431660">gives</span> <span
  m="1431860">you</span> <span m="1432090">the</span> <span
  m="1432840">minimum</span> <span m="1433260">answer,</span> <span
  m="1433565">the</span> <span m="1433870">optimum</span> <span
  m="1434310">answer,</span> <span m="1435370">walk</span> <span
  m="1435750">through</span> <span m="1435920">that,</span> <span
  m="1437180">executive</span> <span m="1437650">that</span> <span
  m="1437810">algorithm</span> <span m="1439020">on</span> <span
  m="1439480">this</span> <span m="1439710">particular</span> <span
  m="1441760">example,</span> <span m="1442760">and</span> <span
  m="1442910">then</span> <span m="1443060">you're</span> <span
  m="1443210">convinced,</span> <span m="1443700">of</span> <span
  m="1443790">course,</span> <span m="1444610">that</span> <span
  m="1446260">the</span> <span m="1446920">solution</span> <span
  m="1447380">is</span> <span m="1447480">going</span> <span
  m="1447600">to</span> <span m="1447640">be</span> <span
  m="1447750">optimum.</span></p><p><span m="1448590">But</span> <span
  m="1448740">for</span> <span m="1448840">this</span> <span
  m="1449020">specific</span> <span m="1449540">example,</span> <span
  m="1450430">I</span> <span m="1450490">want</span> <span m="1450630">to</span>
  <span m="1450670">give</span> <span m="1450820">you</span> <span
  m="1450980">a</span> <span m="1451050">certificate.</span> <span
  m="1452110">This</span> <span m="1452340">certificate</span> <span
  m="1452790">isn't</span> <span m="1453020">going</span> <span
  m="1453130">to</span> <span m="1453180">work</span> <span
  m="1454050">for</span> <span m="1454290">other</span> <span
  m="1454480">examples.</span> <span m="1455450">It's</span> <span
  m="1455590">going</span> <span m="1455720">to</span> <span
  m="1455790">short,</span> <span m="1456420">because</span> <span
  m="1456620">it</span> <span m="1456680">only</span> <span
  m="1456880">works</span> <span m="1457150">with</span> <span
  m="1457240">this</span> <span m="1457400">example.</span> <span
  m="1458520">But</span> <span m="1458810">it</span> <span
  m="1458910">won't</span> <span m="1459080">work</span> <span
  m="1459260">for</span> <span m="1459390">other</span> <span
  m="1459540">ones.</span></p><p><span m="1461010">And</span> <span
  m="1461180">so</span> <span m="1461320">how</span> <span m="1461450">do</span>
  <span m="1461530">I</span> <span m="1461620">do</span> <span
  m="1461780">that?</span> <span m="1465390">So</span> <span
  m="1465770">the</span> <span m="1465860">answer</span> <span
  m="1466240">is,</span> <span m="1466380">in</span> <span
  m="1466550">fact,</span> <span m="1466830">there</span> <span
  m="1467090">is</span> <span m="1467250">a</span> <span
  m="1467330">certificate</span> <span m="1467710">that</span> <span
  m="1467860">shows</span> <span m="1468980">that the</span> <span
  m="1469290">LP</span> <span m="1469650">solution</span> <span
  m="1471500">is</span> <span m="1471690">optimal.</span> <span
  m="1473990">And</span> <span m="1476300">consider</span> <span
  m="1478210">that</span> <span m="1478950">I</span> <span
  m="1479490">compute</span> <span m="1479960">this</span> <span
  m="1481390">particular</span> <span m="1486100">algebraic</span> <span
  m="1486640">quantity,</span> <span m="1489230">where</span> <span
  m="1496300">all</span> <span m="1496500">I've</span> <span
  m="1496620">done</span> <span m="1496880">is</span> <span
  m="1497030">I've</span> <span m="1497180">taken</span> <span
  m="1498120">these</span> <span m="1498420">three</span> <span
  m="1498630">equations</span> <span m="1499960">and</span> <span
  m="1500790">I've</span> <span m="1501460">multiplied</span> <span
  m="1501970">them</span> <span m="1502850">by</span> <span
  m="1503280">these</span> <span m="1504640">magical</span> <span
  m="1505240">constants.</span></p><p><span m="1506620">And</span> <span
  m="1506780">so</span> <span m="1506890">I'm</span> <span
  m="1507010">not</span> <span m="1507390">going</span> <span
  m="1507490">to</span> <span m="1507550">tell</span> <span
  m="1507730">you</span> <span m="1508140">how</span> <span
  m="1508530">we</span> <span m="1508680">get</span> <span
  m="1508970">this</span> <span m="1509080">certificate</span> <span
  m="1509560">of</span> <span m="1509670">optimality.</span> <span
  m="1510940">But</span> <span m="1511400">I'm</span> <span
  m="1511550">going</span> <span m="1511710">to</span> <span
  m="1512320">give</span> <span m="1512540">you</span> <span
  m="1512620">the</span> <span m="1512750">certificate.</span> <span
  m="1513250">And it's</span> <span m="1513530">going to</span> <span
  m="1513580">be</span> <span m="1513700">clear</span> <span
  m="1514010">that</span> <span m="1514230">it's</span> <span
  m="1514400">a</span> <span m="1514470">certificate</span> <span
  m="1514880">of</span> <span m="1515000">optimality.</span> <span
  m="1516150">And</span> <span m="1516600">if</span> <span m="1516770">I</span>
  <span m="1516850">take</span> <span m="1517510">these</span> <span
  m="1517790">three</span> <span m="1517910">equations</span> <span
  m="1518460">here,</span> <span m="1518710">1,</span> <span
  m="1519010">2,</span> <span m="1519200">and</span> <span
  m="1519340">3--</span> <span m="1520030">actually,</span> <span
  m="1520310">I</span> <span m="1520390">refer</span> <span
  m="1520740">to</span> <span m="1522150">1,</span> <span m="1522410">2,</span>
  <span m="1522560">and</span> <span m="1522690">3,</span> <span
  m="1523770">they</span> <span m="1523890">refer</span> <span
  m="1524170">to</span> <span m="1524230">the</span> <span
  m="1524310">equations.</span> <span m="1525880">These</span> <span
  m="1526010">are</span> <span m="1528060">equations</span> <span
  m="1528570">or</span> <span m="1528670">constraints.</span></p><p><span
  m="1529850">And</span> <span m="1530110">so</span> <span m="1530200">I</span>
  <span m="1530310">take</span> <span m="1530600">that.</span> <span
  m="1530890">And</span> <span m="1531180">obviously,</span> <span
  m="1531780">if</span> <span m="1531950">I</span> <span m="1532020">have</span>
  <span m="1532200">a</span> <span m="1532250">bunch</span> <span
  m="1532530">of</span> <span m="1533030">equations</span> <span
  m="1533600">and</span> <span m="1533710">I</span> <span
  m="1533730">multiply</span> <span m="1534170">them</span> <span
  m="1534350">out,</span> <span m="1535020">I</span> <span
  m="1535120">can</span> <span m="1535240">certainly</span> <span
  m="1535520">add</span> <span m="1535700">them</span> <span
  m="1535840">up,</span> <span m="1536430">and</span> <span m="1536570">I</span>
  <span m="1536610">get</span> <span m="1536740">another</span> <span
  m="1536950">equation</span> <span m="1537400">at</span> <span
  m="1537460">the</span> <span m="1537530">end</span> <span
  m="1537660">of</span> <span m="1537780">it.</span> <span
  m="1539040">And</span> <span m="1539240">it's</span> <span
  m="1539350">all</span> <span m="1539510">going to</span> <span
  m="1539650">be</span> <span m="1539750">linear.</span></p><p><span
  m="1540600">And</span> <span m="1540740">if</span> <span m="1540830">I</span>
  <span m="1540900">do</span> <span m="1541080">that,</span> <span
  m="1542260">I</span> <span m="1542300">get</span> <span m="1543250">x1</span>
  <span m="1544630">plus</span> <span m="1545030">x2</span> <span
  m="1546220">plus</span> <span m="1546530">140</span> <span
  m="1547890">divided</span> <span m="1548180">by</span> <span
  m="1548300">222</span> <span m="1549460">times</span> <span
  m="1550110">x3</span> <span m="1551260">plus</span> <span
  m="1551610">x4.</span> <span m="1553110">So</span> <span
  m="1553340">that's</span> <span m="1553520">what</span> <span
  m="1553620">happens</span> <span m="1553920">to</span> <span
  m="1553990">the</span> <span m="1554100">left</span> <span
  m="1554340">hand</span> <span m="1554510">side.</span> <span
  m="1555550">And</span> <span m="1555890">the</span> <span m="1555960">right
  hand</span> <span m="1556160">side</span> <span m="1557610">is--</span> <span
  m="1559640">you'll</span> <span m="1559830">recognize</span> <span
  m="1560280">this</span> <span m="1563040">quantity--</span> <span
  m="1563470">five</span> <span m="1563770">0's</span> <span
  m="1564910">divided</span> <span m="1565160">by</span> <span
  m="1565270">111.</span> <span m="1567760">That's</span> <span
  m="1567930">what</span> <span m="1568050">you</span> <span
  m="1568150">get.</span></p><p><span m="1570010">So</span> <span
  m="1570170">now,</span> <span m="1570320">can</span> <span
  m="1570450">someone</span> <span m="1570680">tell</span> <span
  m="1570830">me</span> <span m="1571650">why</span> <span m="1572090">in
  the</span> <span m="1572310">last</span> <span m="1572610">step,</span> <span
  m="1573300">why</span> <span m="1573590">this</span> <span
  m="1573800">is</span> <span m="1573940">a</span> <span
  m="1574030">certificate</span> <span m="1574560">of</span> <span
  m="1574690">optimality--</span> <span m="1575940">the</span> <span
  m="1576060">fact</span> <span m="1576390">that</span> <span
  m="1576590">obviously,</span> <span m="1577580">this</span> <span
  m="1577790">is</span> <span m="1577890">all</span> <span
  m="1578040">algebra,</span> <span m="1579340">once</span> <span
  m="1579600">I've</span> <span m="1579690">discovered</span> <span
  m="1580070">the</span> <span m="1580150">coefficients--</span> <span
  m="1581230">so</span> <span m="1581400">now</span> <span
  m="1581620">that</span> <span m="1581750">I've</span> <span
  m="1581850">done</span> <span m="1582040">this,</span> <span m="1583330">why
  have</span> <span m="1583560">I</span> <span m="1583820">just</span> <span
  m="1583960">shown</span> <span m="1584300">you</span> <span
  m="1584470">that</span> <span m="1587590">3.1</span> <span
  m="1587960">million</span> <span m="1588250">divided</span> <span
  m="1588510">by</span> <span m="1588610">111</span> <span
  m="1589690">is,</span> <span m="1589850">in</span> <span
  m="1589960">fact,</span> <span m="1590210">optimum?</span> <span
  m="1591110">Can</span> <span m="1591240">someone</span> <span
  m="1591410">tell</span> <span m="1591520">me</span> <span
  m="1591620">this?</span> <span m="1595320">Look</span> <span
  m="1595520">at</span> <span m="1595570">what</span> <span
  m="1595730">you</span> <span m="1595820">have</span> <span
  m="1596000">on</span> <span m="1596080">the</span> <span
  m="1596130">left</span> <span m="1596320">hand</span> <span
  m="1596460">side.</span> <span m="1600110">No?</span> <span
  m="1602340">Yeah.</span></p><p><span m="1602840">AUDIENCE:</span> <span
  m="1603340">Any other</span> <span m="1603840">solution</span> <span
  m="1604340">would cost</span> <span m="1604840">more than</span> <span
  m="1605340">the amount put</span> <span m="1605840">in</span> <span
  m="1606340">spent.</span></p><p><span m="1607840">SRINIVAS DEVADAS:</span>
  <span m="1608340">Any</span> <span m="1608600">other</span> <span
  m="1608830">solution,</span> <span m="1609480">but</span> <span
  m="1609630">I</span> <span m="1609720">want</span> <span
  m="1609910">you</span> <span m="1610020">to</span> <span
  m="1611430">relate</span> <span m="1611770">that</span> <span
  m="1611980">to--</span> <span m="1612620">what</span> <span m="1613050">am
  I</span> <span m="1613120">spending?</span></p><p><span
  m="1613500">AUDIENCE:</span> <span m="1613980">You're</span> <span
  m="1614460">spending</span> <span m="1615420">3,100,000--</span> <span
  m="1616860">like,</span> <span m="1617820">it's the</span> <span
  m="1618300">same</span> <span m="1618780">thing.</span></p><p><span
  m="1619270">SRINIVAS DEVADAS: Yeah,</span> <span m="1619670">but</span> <span
  m="1619890">I</span> <span m="1619970">mean,</span> <span
  m="1620560">this</span> <span m="1620810">was</span> <span
  m="1620960">a</span> <span m="1621020">claim.</span> <span
  m="1622140">This</span> <span m="1622900">was</span> <span
  m="1623050">a</span> <span m="1623130">claim--</span> <span
  m="1624250">and</span> <span m="1624730">at</span> <span
  m="1624910">this</span> <span m="1625080">point,</span> <span
  m="1625380">an</span> <span m="1625560">unproven</span> <span
  m="1626220">claim.</span> <span m="1630550">It</span> <span
  m="1630630">was</span> <span m="1630710">an</span> <span
  m="1630800">unproven</span> <span m="1631400">claim.</span> <span
  m="1632060">Yeah,</span> <span m="1632300">go</span> <span
  m="1632400">ahead.</span></p><p><span m="1632650">AUDIENCE: You know</span>
  <span m="1633140">that the</span> <span m="1633630">left hand side</span>
  <span m="1634120">of that</span> <span m="1634610">inequality</span> <span
  m="1635100">is</span> <span m="1635590">less than or</span> <span
  m="1636080">equal to</span> <span m="1636570">x1</span> <span m="1637060">plus
  x2</span> <span m="1637550">plus</span> <span m="1638040">x3 plus
  x4.</span></p><p><span m="1638530">SRINIVAS DEVADAS:</span> <span
  m="1639030">Correct.</span> <span m="1639310">And</span> <span
  m="1639400">what</span> <span m="1639560">is</span> <span
  m="1639670">x1</span> <span m="1639990">plus</span> <span
  m="1640140">x2</span> <span m="1640500">plus</span> <span
  m="1640620">x3</span> <span m="1640890">plus</span> <span
  m="1641060">x4,</span> <span m="1641630">to</span> <span m="1641700">be</span>
  <span m="1641790">clear?</span></p><p><span m="1642160">AUDIENCE:</span> <span
  m="1642595">The</span> <span m="1643030">thing</span> <span m="1643465">you're
  trying</span> <span m="1643900">to</span> <span
  m="1644335">minimize?</span></p><p><span m="1644770">SRINIVAS DEVADAS:
  Yeah,</span> <span m="1645050">exactly,</span> <span m="1645330">the</span>
  <span m="1645460">thing</span> <span m="1645650">you're</span> <span
  m="1645790">trying</span> <span m="1645980">to</span> <span
  m="1646040">minimize.</span> <span m="1646900">Exactly.</span> <span
  m="1647630">You're</span> <span m="1647800">almost</span> <span
  m="1648080">there.</span> <span m="1649530">but</span> <span
  m="1649830">the</span> <span m="1649970">key</span> <span
  m="1650310">observation</span> <span m="1650970">here</span> <span
  m="1651870">is</span> <span m="1652120">that</span> <span
  m="1652620">x1</span> <span m="1653190">plus</span> <span
  m="1653440">x2</span> <span m="1654090">plus</span> <span
  m="1654500">x3</span> <span m="1656220">plus</span> <span
  m="1656530">x4</span> <span m="1657550">is</span> <span
  m="1657770">greater</span> <span m="1657980">than</span> <span
  m="1658130">or</span> <span m="1658220">equal</span> <span
  m="1658540">to</span> <span m="1659210">x1</span> <span
  m="1659820">plus</span> <span m="1660050">x2--</span> <span
  m="1660910">because</span> <span m="1661090">all</span> <span
  m="1661220">of</span> <span m="1661290">these</span> <span
  m="1661460">are</span> <span m="1661530">positive</span> <span
  m="1661990">quantities,</span> <span m="1662420">remember--</span> <span
  m="1663270">140</span> <span m="1663870">divided</span> <span
  m="1664170">by</span> <span m="1664310">222,</span> <span
  m="1665140">that's</span> <span m="1665330">less</span> <span
  m="1665550">than</span> <span m="1665690">1,</span> <span
  m="1667100">x3</span> <span m="1667810">plus</span> <span
  m="1668220">x4,</span> <span m="1669530">correct?</span> <span
  m="1670940">So</span> <span m="1671550">given</span> <span
  m="1671880">that,</span> <span m="1672780">I</span> <span
  m="1672910">can</span> <span m="1673050">say</span> <span
  m="1673270">that</span> <span m="1673910">this</span> <span
  m="1674220">is</span> <span m="1674410">greater</span> <span
  m="1674650">than</span> <span m="1675210">our</span> <span
  m="1676450">equal</span> <span m="1676770">to</span> <span
  m="1677700">3,100,000</span> <span m="1681102">111.</span> <span
  m="1682550">It's</span> <span m="1683290">because</span> <span
  m="1683530">of</span> <span m="1683710">this</span> <span
  m="1684660">observation</span> <span m="1686100">that</span> <span
  m="1686640">it's</span> <span m="1686820">a</span> <span
  m="1686880">certificate</span> <span m="1687820">of</span> <span
  m="1688410">optimality.</span></p><p><span m="1691770">She</span> <span
  m="1691940">has</span> <span m="1692100">her</span> <span
  m="1692200">head</span> <span m="1692380">down,</span> <span
  m="1693087">OK.</span> <span m="1694955">Great.</span> <span
  m="1696600">So</span> <span m="1699570">that's</span> <span
  m="1699760">pretty</span> <span m="1699950">cool.</span> <span
  m="1702420">Just</span> <span m="1702710">cooked</span> <span
  m="1702940">up</span> <span m="1703630">these</span> <span
  m="1704410">coefficients</span> <span m="1705050">from</span> <span
  m="1705200">somewhere,</span> <span m="1706070">pulled</span> <span
  m="1706220">them</span> <span m="1706370">out</span> <span
  m="1706450">of</span> <span m="1706540">a</span> <span m="1706600">hat,</span>
  <span m="1707800">you're</span> <span m="1707970">all</span> <span
  m="1708110">convinced</span> <span m="1708530">now</span> <span
  m="1709290">that</span> <span m="1710110">the</span> <span
  m="1710280">value</span> <span m="1710620">we</span> <span
  m="1710730">got</span> <span m="1710970">was</span> <span
  m="1711110">optimum.</span> <span m="1711920">Did</span> <span
  m="1712050">not</span> <span m="1712220">run</span> <span
  m="1712390">an</span> <span m="1712500">algorithm.</span> <span
  m="1713090">Maybe</span> <span m="1713390">I</span> <span
  m="1713410">ran</span> <span m="1713620">an</span> <span
  m="1713730">algorithm--</span> <span m="1714200">of course,</span> <span
  m="1714800">you</span> <span m="1714960">ran an</span> <span
  m="1715130">algorithm</span> <span m="1715500">to</span> <span
  m="1715570">get</span> <span m="1715720">those</span> <span
  m="1715870">coefficients,</span> <span m="1716440">right?</span> <span
  m="1717260">Well, how did</span> <span m="1717380">those</span> <span
  m="1717570">coefficients</span> <span m="1718080">appear?</span></p><p><span
  m="1719340">So</span> <span m="1720140">we're</span> <span
  m="1720400">not</span> <span m="1720500">going</span> <span
  m="1720590">to</span> <span m="1720630">spend</span> <span
  m="1720790">a</span> <span m="1720830">whole</span> <span
  m="1720990">lot</span> <span m="1721150">of</span> <span
  m="1721210">time</span> <span m="1721450">on</span> <span
  m="1721560">this.</span> <span m="1723700">You'll</span> <span
  m="1724320">see</span> <span m="1724530">this</span> <span
  m="1728760">likely</span> <span m="1729260">in</span> <span
  m="1730930">a</span> <span m="1731010">problem</span> <span
  m="1731340">set</span> <span m="1731530">or</span> <span
  m="1731630">perhaps</span> <span m="1731970">in</span> <span
  m="1732080">section.</span> <span m="1733160">But</span> <span
  m="1735050">in</span> <span m="1735210">general,</span> <span m="1737071">I
  won't</span> <span m="1737480">worry</span> <span m="1737660">too</span> <span
  m="1737790">much</span> <span m="1738000">about</span> <span
  m="1738500">duality,</span> <span m="1739050">other</span> <span
  m="1739240">than</span> <span m="1739560">knowing</span> <span
  m="1740670">the</span> <span m="1740780">concept.</span> <span
  m="1741980">And</span> <span m="1742250">this</span> <span
  m="1742390">notion</span> <span m="1742670">of</span> <span
  m="1742780">LP</span> <span m="1743110">duality</span> <span
  m="1744160">essentially</span> <span m="1744640">says</span> <span
  m="1745030">that</span> <span m="1745700">what</span> <span
  m="1745990">just</span> <span m="1746220">happened</span> <span
  m="1747100">wasn't</span> <span m="1747430">a</span> <span
  m="1747870">coincidence.</span> <span m="1748970">You</span> <span
  m="1749100">can</span> <span m="1749210">do</span> <span
  m="1749330">this</span> <span m="1749980">all</span> <span
  m="1750240">the</span> <span m="1750330">time.</span></p><p><span
  m="1751130">There</span> <span m="1751160">will</span> <span
  m="1751380">always</span> <span m="1751960">be,</span> <span m="1752470">for
  a</span> <span m="1752690">linear</span> <span m="1753030">program,</span>
  <span m="1754060">a</span> <span m="1754190">short</span> <span
  m="1754740">certificate</span> <span m="1755250">of</span> <span
  m="1755370">optimality</span> <span m="1756500">that</span> <span
  m="1756700">corresponds</span> <span m="1757310">to</span> <span
  m="1758260">some</span> <span m="1758710">set</span> <span
  m="1758920">of</span> <span m="1759010">coefficients</span> <span
  m="1760280">that</span> <span m="1760800">you</span> <span
  m="1760940">can</span> <span m="1761080">do</span> <span
  m="1761750">this</span> <span m="1761930">particular</span> <span
  m="1762230">math</span> <span m="1762650">with</span> <span
  m="1763260">by</span> <span m="1763820">taking</span> <span
  m="1764160">these</span> <span m="1764340">linear</span> <span
  m="1764620">constraints,</span> <span m="1765520">multiplying</span> <span
  m="1766050">them</span> <span m="1766200">out,</span> <span
  m="1766860">adding</span> <span m="1767150">them</span> <span
  m="1767310">up</span> <span m="1767460">together,</span> <span
  m="1768420">and</span> <span m="1768870">showing</span> <span
  m="1769380">that</span> <span m="1770010">you</span> <span
  m="1770120">have</span> <span m="1770270">a</span> <span
  m="1770560">lower</span> <span m="1770870">bound</span> <span
  m="1772030">on--</span> <span m="1772460">in</span> <span
  m="1772550">the</span> <span m="1772630">case</span> <span
  m="1772800">of</span> <span m="1775400">this</span> <span
  m="1776410">problem--</span> <span m="1777480">you</span> <span
  m="1778830">can't</span> <span m="1779030">get</span> <span
  m="1779170">lower</span> <span m="1779410">than</span> <span
  m="1779560">this.</span> <span m="1780470">And</span> <span
  m="1780710">therefore,</span> <span m="1781310">for</span> <span
  m="1781450">a</span> <span m="1781490">minimization</span> <span
  m="1782020">problem,</span> <span m="1782740">when</span> <span
  m="1782860">you</span> <span m="1782980">reach</span> <span
  m="1783240">that,</span> <span m="1784050">you</span> <span
  m="1784240">clearly</span> <span m="1784530">found the</span> <span
  m="1784790">optimum.</span></p><p><span m="1786580">And</span> <span
  m="1786840">that's</span> <span m="1787030">the</span> <span
  m="1787110">notion</span> <span m="1787380">of</span> <span
  m="1787470">LP</span> <span m="1787880">duality.</span> <span
  m="1789280">And</span> <span m="1789940">the</span> <span
  m="1790180">basic</span> <span m="1790580">theorem--</span> <span
  m="1791700">and</span> <span m="1791820">this</span> <span
  m="1791940">is</span> <span m="1792100">really</span> <span m="1792240">more
  as an</span> <span m="1792690">FYI,</span> <span m="1794800">we</span> <span
  m="1794920">won't</span> <span m="1795110">prove</span> <span
  m="1795280">this</span> <span m="1795520">theorem--</span> <span
  m="1796520">is</span> <span m="1796770">that</span> <span
  m="1797360">if</span> <span m="1797470">you</span> <span
  m="1797570">had</span> <span m="1797980">the</span> <span
  m="1798070">standard</span> <span m="1798490">form</span> <span
  m="1798830">for the</span> <span m="1798980">LP,</span> <span
  m="1800320">which</span> <span m="1800510">I'm</span> <span
  m="1800600">just</span> <span m="1800750">writing</span> <span
  m="1800970">down</span> <span m="1801160">again</span> <span
  m="1801430">here,</span> <span m="1803100">where you</span> <span
  m="1803180">had</span> <span m="1803430">Ax</span> <span
  m="1804730">less</span> <span m="1804980">than</span> <span
  m="1806190">b,</span> <span m="1808142">x</span> <span
  m="1808630">vector</span> <span m="1809090">greater than or</span> <span
  m="1809480">equal</span> <span m="1809680">to</span> <span
  m="1809750">0.</span> <span m="1810250">So</span> <span
  m="1810560">that's</span> <span m="1810870">identically</span> <span
  m="1812110">what</span> <span m="1812300">I</span> <span
  m="1812350">had</span> <span m="1812560">up</span> <span
  m="1813070">here,</span> <span m="1813530">or</span> <span
  m="1813600">done</span> <span m="1813820">here,</span> <span
  m="1814710">corresponding</span> <span m="1815230">to</span> <span
  m="1816130">the</span> <span m="1816700">standard</span> <span
  m="1817160">LP</span> <span m="1817510">form.</span></p><p><span
  m="1818310">Well,</span> <span m="1818510">there's</span> <span
  m="1818690">a</span> <span m="1818770">dual--</span> <span
  m="1819770">this</span> <span m="1819900">is</span> <span
  m="1820050">what's</span> <span m="1820270">called</span> <span
  m="1820460">the</span> <span m="1820530">primal</span> <span
  m="1821020">form.</span> <span m="1822110">Usually,</span> <span
  m="1822510">if you</span> <span m="1822630">don't</span> <span m="1827480">say
  it,</span> <span m="1827960">you</span> <span m="1828280">think</span> <span
  m="1828420">of</span> <span m="1828510">it</span> <span m="1828580">as</span>
  <span m="1828670">the</span> <span m="1828730">primal</span> <span
  m="1829010">form.</span> <span m="1829610">And</span> <span
  m="1829820">if</span> <span m="1829860">it's</span> <span
  m="1830030">dual,</span> <span m="1830280">you</span> <span
  m="1830660">call</span> <span m="1830910">it</span> <span m="1830990">a</span>
  <span m="1831060">dual.</span></p><p><span m="1832050">And</span> <span
  m="1832230">this</span> <span m="1832420">is</span> <span
  m="1833200">primal</span> <span m="1833470">form</span> <span
  m="1833690">of</span> <span m="1833790">LP.</span> <span m="1834210">This 
  is</span> <span m="1834440">a</span> <span m="1834540">dual</span> <span
  m="1835160">form</span> <span m="1835430">of</span> <span
  m="1835520">LP,</span> <span m="1835980">or</span> <span
  m="1836260">dual</span> <span m="1836500">LP.</span> <span
  m="1837890">And</span> <span m="1838190">the</span> <span
  m="1838270">dual</span> <span m="1838510">LP</span> <span
  m="1839870">flips</span> <span m="1840230">everything.</span> <span
  m="1841920">And</span> <span m="1842080">it's</span> <span
  m="1842190">not</span> <span m="1842360">just</span> <span
  m="1842600">negation,</span> <span m="1843160">but</span> <span
  m="1843570">transposed,</span> <span m="1845000">and</span> <span
  m="1845530">the</span> <span m="1846680">actual</span> <span
  m="1847410">variables</span> <span m="1848020">also</span> <span
  m="1848450">swap</span> <span m="1849010">functionalities.</span> <span
  m="1850230">So</span> <span m="1850350">it's</span> <span
  m="1850450">really</span> <span m="1850620">pretty</span> <span
  m="1850830">cool.</span></p><p><span m="1851680">So</span> <span
  m="1851880">your</span> <span m="1852320">max</span> <span
  m="1852690">turns</span> <span m="1853030">into a</span> <span
  m="1853080">min.</span> <span m="1853970">The</span> <span
  m="1854130">c</span> <span m="1854360">gets</span> <span
  m="1854550">replaced</span> <span m="1854940">by</span> <span
  m="1855060">the</span> <span m="1855170">b,</span> <span
  m="1855545">which</span> <span m="1855920">is</span> <span
  m="1856020">on</span> <span m="1856160">the</span> <span
  m="1856350">right</span> <span m="1856520">hand</span> <span
  m="1856650">side</span> <span m="1856920">of</span> <span
  m="1857000">the</span> <span m="1857080">inequalities.</span> <span
  m="1858400">And</span> <span m="1859570">your</span> <span
  m="1860630">constraints</span> <span m="1861210">are</span> <span
  m="1861990">A</span> <span m="1862150">transpose,</span> <span
  m="1863870">y</span> <span m="1865170">greater</span> <span
  m="1865400">than</span> <span m="1865580">or</span> <span
  m="1865660">equal</span> <span m="1865920">to</span> <span
  m="1866010">c.</span> <span m="1867290">So</span> <span
  m="1867390">there's</span> <span m="1867540">a</span> <span
  m="1867600">flip</span> <span m="1867850">there</span> <span
  m="1868080">as</span> <span m="1868190">well.</span> <span
  m="1869210">And</span> <span m="1869730">y</span> <span m="1870980">is</span>
  <span m="1871290">greater</span> <span m="1871480">than</span> <span
  m="1871630">or</span> <span m="1871670">equal</span> <span
  m="1871860">to</span> <span m="1871900">0.</span></p><p><span
  m="1873290">So</span> <span m="1874520">there's</span> <span
  m="1874670">a</span> <span m="1874720">bunch</span> <span
  m="1874930">of</span> <span m="1874990">things</span> <span
  m="1875190">that's</span> <span m="1875370">going</span> <span
  m="1875570">on</span> <span m="1875730">here.</span> <span
  m="1876790">And</span> <span m="1877690">these</span> <span
  m="1878040">two</span> <span m="1878210">problems</span> <span
  m="1879740">end</span> <span m="1879970">up</span> <span
  m="1881120">being</span> <span m="1881860">equivalent--</span> <span
  m="1883700">the</span> <span m="1883940">primal</span> <span
  m="1884350">and</span> <span m="1884750">the</span> <span
  m="1884820">dual,</span> <span m="1885170">you can always</span> <span
  m="1885610">do</span> <span m="1885710">this.</span> <span
  m="1886990">And</span> <span m="1887950">essentially,</span> <span
  m="1889120">what</span> <span m="1890260">is</span> <span
  m="1890450">happening</span> <span m="1890740">here</span> <span
  m="1891910">is</span> <span m="1892140">that</span> <span
  m="1892460">you're</span> <span m="1893940">solving</span> <span
  m="1896460">these</span> <span m="1896720">two</span> <span
  m="1896860">problems</span> <span m="1898030">simultaneously.</span> <span
  m="1899460">And</span> <span m="1899920">there's</span> <span
  m="1900060">lots</span> <span m="1900220">of</span> <span
  m="1900300">algorithms</span> <span m="1900730">that</span> <span
  m="1900880">keep</span> <span m="1901380">flipping</span> <span
  m="1901710">between</span> <span m="1901940">these</span> <span
  m="1902120">two</span> <span m="1902250">forms</span> <span
  m="1903100">for</span> <span m="1903340">efficiency.</span></p><p><span
  m="1904520">But</span> <span m="1905110">ultimately,</span> <span
  m="1905930">what</span> <span m="1906140">ends</span> <span
  m="1906300">up</span> <span m="1906390">happening</span> <span
  m="1906760">is</span> <span m="1906890">you</span> <span
  m="1907060">see</span> <span m="1907280">that</span> <span
  m="1909580">the</span> <span m="1909750">actual</span> <span
  m="1911050">constraints</span> <span m="1911550">that</span> <span
  m="1911660">you</span> <span m="1911740">had</span> <span
  m="1911960">here</span> <span m="1912190">corresponding</span> <span
  m="1912670">to</span> <span m="1913440">the b</span> <span
  m="1913770">constraints</span> <span m="1915240">turn</span> <span
  m="1915480">into--</span> <span m="1916490">the b</span> <span
  m="1916610">ends</span> <span m="1917180">up</span> <span
  m="1917330">in</span> <span m="1917780">the</span> <span
  m="1917860">cost</span> <span m="1918100">function</span> <span
  m="1918420">here.</span> <span m="1919400">And</span> <span
  m="1919730">that's</span> <span m="1920170">essentially</span> <span
  m="1920560">what's</span> <span m="1920740">happening</span> <span
  m="1921030">out</span> <span m="1921150">here</span> <span
  m="1921400">with</span> <span m="1921550">respect</span> <span
  m="1921840">to</span> <span m="1921910">multiplying</span> <span
  m="1923040">these</span> <span m="1923720">equations</span> <span
  m="1924240">out</span> <span m="1924460">with</span> <span
  m="1924620">particular</span> <span m="1925020">coefficients.</span> <span
  m="1926800">So</span> <span m="1928610">as</span> <span m="1928790">I</span>
  <span m="1928830">said,</span> <span m="1929050">this</span> <span
  m="1929150">is</span> <span m="1929540">really</span> <span m="1930220">more
  as an</span> <span m="1930610">FYI.</span></p><p><span m="1931830">This</span>
  <span m="1932200">is</span> <span m="1932380">an</span> <span
  m="1933000">obviously</span> <span m="1933560">interesting</span> <span
  m="1934120">and</span> <span m="1934490">an</span> <span
  m="1934620">interesting</span> <span m="1935846">proof</span> <span
  m="1936220">of</span> <span m="1936300">optimality,</span> <span
  m="1936970">which</span> <span m="1937140">is</span> <span
  m="1937280">a</span> <span m="1937990">different</span> <span
  m="1938310">kind</span> <span m="1938590">of</span> <span
  m="1938690">proof</span> <span m="1938950">from</span> <span
  m="1939990">proving</span> <span m="1940280">an</span> <span
  m="1940360">algorithm</span> <span m="1941140">correct</span> <span
  m="1942260">and</span> <span m="1942840">applying</span> <span
  m="1943290">that</span> <span m="1943480">proof</span> <span
  m="1943860">to</span> <span m="1943980">a</span> <span
  m="1944040">particular</span> <span m="1944380">instance.</span> <span
  m="1945840">That's</span> <span m="1946020">the</span> <span
  m="1946110">kind</span> <span m="1946280">of</span> <span
  m="1946360">thing</span> <span m="1946550">that</span> <span
  m="1946770">happens</span> <span m="1947190">in</span> <span
  m="1947650">LP,</span> <span m="1948310">especially</span> <span
  m="1948710">when</span> <span m="1948820">you</span> <span
  m="1948910">flip</span> <span m="1949140">from</span> <span
  m="1949980">primal</span> <span m="1950340">and</span> <span
  m="1950450">dual</span> <span m="1950660">forms.</span> <span
  m="1951880">So</span> <span m="1953730">I'll</span> <span
  m="1953840">leave</span> <span m="1954160">it</span> <span m="1954250">at
  that.</span></p><p><span m="1955490">What</span> <span m="1955680">I'd</span>
  <span m="1955710">like</span> <span m="1955890">to</span> <span
  m="1956000">do</span> <span m="1956220">is</span> <span
  m="1957330">give</span> <span m="1957560">you</span> <span
  m="1957720">a</span> <span m="1957790">sense</span> <span
  m="1958230">of</span> <span m="1960350">how</span> <span m="1960930">we</span>
  <span m="1961200">can</span> <span m="1962630">convert</span> <span
  m="1963090">to</span> <span m="1963190">standard</span> <span
  m="1963610">form,</span> <span m="1964470">so</span> <span
  m="1964680">you</span> <span m="1964840">can</span> <span
  m="1965510">apply</span> <span m="1967620">an</span> <span
  m="1968000">algorithm</span> <span m="1968490">that--</span> <span
  m="1969400">for</span> <span m="1969590">example,</span> <span
  m="1970470">you</span> <span m="1970760">have</span> <span m="1970870">a
  program</span> <span m="1971310">and</span> <span m="1971450">it</span> <span
  m="1971530">only</span> <span m="1971880">requires</span> <span
  m="1972330">standard</span> <span m="1972760">form.</span> <span
  m="1973060">It</span> <span m="1973160">runs</span> <span
  m="1973410">on</span> <span m="1973510">standard</span> <span
  m="1973830">form.</span> <span m="1974950">Let's</span> <span
  m="1975130">go</span> <span m="1975250">over it</span> <span
  m="1975470">really</span> <span m="1975670">quickly.</span> <span
  m="1976100">This</span> <span m="1976180">is</span> <span
  m="1976890">not</span> <span m="1977100">going</span> <span m="1977160">to
  take</span> <span m="1977350">very</span> <span m="1977520">long--</span>
  <span m="1978590">a</span> <span m="1978840">translation</span> <span
  m="1980160">from</span> <span m="1981410">different</span> <span
  m="1982050">kinds</span> <span m="1982470">of</span> <span
  m="1982610">LPs--</span> <span m="1983220">and</span> <span
  m="1983310">we</span> <span m="1983390">had</span> <span m="1983540">a</span>
  <span m="1983600">slightly</span> <span m="1983940">different</span> <span
  m="1984450">here</span> <span m="1985330">for</span> <span
  m="1985580">our</span> <span m="1985700">political</span> <span
  m="1986180">problem</span> <span m="1987170">that</span> <span
  m="1987320">had</span> <span m="1987480">a</span> <span
  m="1987530">minimization--</span> <span m="1988940">and</span> <span
  m="1989190">how</span> <span m="1989360">would</span> <span
  m="1989470">we</span> <span m="1989600">convert</span> <span
  m="1989950">that</span> <span m="1990200">to</span> <span
  m="1990510">standard</span> <span m="1990850">form.</span></p><p><span
  m="1991660">So</span> <span m="1999830">it's</span> <span
  m="1999930">probably</span> <span m="2000190">just</span> <span
  m="2000400">one</span> <span m="2003710">conversion</span> <span
  m="2004160">here</span> <span m="2004390">that's</span> <span
  m="2005890">tricky.</span> <span m="2007090">So</span> <span
  m="2007290">suppose</span> <span m="2007610">I</span> <span
  m="2007640">want</span> <span m="2007820">to</span> <span
  m="2007970">minimize</span> <span m="2011510">minus</span> <span
  m="2012070">2x1</span> <span m="2013360">plus</span> <span
  m="2013830">3x2,</span> <span m="2016470">and</span> <span
  m="2016630">I</span> <span m="2016650">want</span> <span m="2016780">to</span>
  <span m="2016830">convert</span> <span m="2017130">it</span> <span
  m="2017230">to</span> <span m="2017330">standard</span> <span
  m="2017540">formal.</span> <span m="2017930">All I</span> <span
  m="2017990">have</span> <span m="2018170">is</span> <span m="2018240">a</span>
  <span m="2018310">standard</span> <span m="2018650">LP</span> <span
  m="2018990">solver.</span> <span m="2019720">What</span> <span
  m="2019840">do</span> <span m="2019900">I</span> <span
  m="2019980">do?</span></p><p><span m="2023846">It</span> <span
  m="2024330">should</span> <span m="2024520">be</span> <span
  m="2024620">easy.</span> <span m="2026490">What</span> <span
  m="2026630">do</span> <span m="2026690">I</span> <span m="2026770">do</span>
  <span m="2027030">if</span> <span m="2027760">I</span> <span
  m="2028230">had</span> <span m="2028430">a</span> <span
  m="2028480">solver</span> <span m="2028830">that</span> <span
  m="2028970">was</span> <span m="2029670">maximizing,</span> <span
  m="2030440">but</span> <span m="2030630">I</span> <span
  m="2030660">want</span> <span m="2030810">to</span> <span
  m="2030860">minimize</span> <span m="2031210">a</span> <span
  m="2031290">quantity?</span> <span m="2033410">Just</span> <span
  m="2033560">switch</span> <span m="2033740">the</span> <span
  m="2033810">signs,</span> <span m="2034160">right?</span> <span
  m="2035840">So</span> <span m="2036330">negate</span> <span
  m="2039030">to</span> <span m="2040590">2x1</span> <span
  m="2041910">minus</span> <span m="2042260">3x2</span> <span
  m="2044140">and</span> <span m="2044340">maximize.</span> <span
  m="2047680">So</span> <span m="2047860">that</span> <span
  m="2047970">was</span> <span m="2048090">easy.</span></p><p><span
  m="2050110">This</span> <span m="2050280">is</span> <span m="2050480">a
  tricky</span> <span m="2050679">one.</span> <span m="2052370">Suppose</span>
  <span m="2055250">xj</span> <span m="2057600">does</span> <span
  m="2057889">not</span> <span m="2060560">have</span> <span
  m="2062139">a</span> <span m="2062250">non-negativity</span> <span
  m="2067130">constraint.</span> <span m="2069050">So</span> <span
  m="2069170">it</span> <span m="2069260">just</span> <span
  m="2069460">happens</span> <span m="2069730">to</span> <span
  m="2069800">be</span> <span m="2069880">the</span> <span
  m="2070000">case</span> <span m="2070350">that it's</span> <span
  m="2070639">not</span> <span m="2070840">dollars</span> <span
  m="2072620">but</span> <span m="2073909">it's</span> <span
  m="2074790">some</span> <span m="2075050">other</span> <span
  m="2075219">quantity</span> <span m="2075659">that</span> <span
  m="2075810">can</span> <span m="2075909">go</span> <span
  m="2076050">negative.</span> <span m="2077620">It</span> <span
  m="2077739">might</span> <span m="2077940">be</span> <span
  m="2078070">profit</span> <span m="2078460">or</span> <span
  m="2078560">loss.</span> <span m="2079880">So</span> <span
  m="2080530">that</span> <span m="2080780">quantity</span> <span
  m="2081489">represents</span> <span m="2082030">profit</span> <span
  m="2082350">and</span> <span m="2082489">loss,</span> <span m="2082820">so it
  could</span> <span m="2082949">go</span> <span m="2083230">negative</span>
  <span m="2083659">if it's</span> <span m="2083889">loss.</span></p><p><span
  m="2085300">So</span> <span m="2085820">I</span> <span
  m="2085929">don't</span> <span m="2086230">have</span> <span
  m="2086460">this</span> <span m="2086620">constraint</span> <span
  m="2087780">in</span> <span m="2087929">my</span> <span
  m="2088300">original</span> <span m="2088790">problem</span> <span
  m="2089250">specification.</span> <span m="2090800">But</span> <span
  m="2091010">my</span> <span m="2091139">standard</span> <span
  m="2091600">form</span> <span m="2092400">and</span> <span
  m="2092520">my</span> <span m="2092860">LP</span> <span
  m="2093050">solver</span> <span m="2093980">requires</span> <span
  m="2094580">this</span> <span m="2095120">entire</span> <span
  m="2095650">vector</span> <span m="2096909">to</span> <span
  m="2097030">be</span> <span m="2097139">non-negative.</span> <span
  m="2099560">So</span> <span m="2099770">I</span> <span m="2099870">got</span>
  <span m="2099980">a</span> <span m="2100040">problem</span> <span
  m="2100410">here.</span> <span m="2101380">I</span> <span
  m="2101480">can't</span> <span m="2101660">use</span> <span
  m="2101970">my</span> <span m="2102150">standard</span> <span
  m="2102600">solver,</span> <span m="2103670">because</span> <span
  m="2104020">of</span> <span m="2104160">this</span> <span
  m="2104420">non-negativity</span> <span m="2105460">constraint.</span> <span
  m="2106320">So</span> <span m="2106490">how</span> <span m="2106590">do</span>
  <span m="2106660">I</span> <span m="2106750">fix</span> <span
  m="2107050">that?</span> <span m="2108490">How</span> <span
  m="2108700">do</span> <span m="2108810">I</span> <span m="2109640">turn
  it</span> <span m="2110030">into</span> <span m="2110220">a</span> <span
  m="2110310">problem</span> <span m="2111780">that</span> <span
  m="2112620">allows</span> <span m="2113980">the</span> <span
  m="2114140">standard</span> <span m="2114480">solver</span> <span
  m="2114840">to</span> <span m="2115010">be</span> <span
  m="2115130">used?</span> <span m="2116800">Yeah,</span> <span
  m="2117000">go</span> <span m="2117090">ahead.</span></p><p><span
  m="2117280">AUDIENCE:</span> <span m="2117766">You can</span> <span
  m="2118252">break it up</span> <span m="2118738">into</span> <span
  m="2119224">two variables,</span> <span m="2119710">like</span> <span
  m="2120196">xj1</span> <span m="2120682">and</span> <span
  m="2121168">xj2,</span> <span m="2122140">so</span> <span
  m="2122626">xj1</span> <span m="2123112">minus</span> <span
  m="2124084">xj2</span> <span m="2124570">equals</span> <span
  m="2125056">xj,</span> <span m="2125542">and both</span> <span
  m="2126028">could have</span> <span
  m="2126514">[INAUDIBLE].</span></p><p><span m="2127000">SRINIVAS DEVADAS:
  Perfect,</span> <span m="2127550">great,</span> <span
  m="2127920">that's</span> <span m="2128100">good.</span> <span
  m="2128645">Here</span> <span m="2128920">you go.</span></p><p><span
  m="2132140">So</span> <span m="2132330">what</span> <span
  m="2132470">you</span> <span m="2132560">do</span> <span
  m="2132770">here</span> <span m="2133030">is</span> <span
  m="2133950">take</span> <span m="2134110">xj</span> <span
  m="2135540">and</span> <span m="2135760">replace</span> <span
  m="2136290">it</span> <span m="2138960">with,</span> <span
  m="2139400">let's</span> <span m="2139630">say,</span> <span
  m="2139840">xj</span> <span m="2140280">prime</span> <span
  m="2141460">minus</span> <span m="2142100">xj</span> <span
  m="2142980">double</span> <span m="2143280">prime.</span> <span
  m="2144520">And</span> <span m="2145670">you</span> <span
  m="2145770">have</span> <span m="2145930">xj</span> <span
  m="2146350">prime</span> <span m="2146840">greater</span> <span
  m="2147040">than</span> <span m="2147170">or</span> <span
  m="2147230">equal</span> <span m="2147420">to</span> <span
  m="2147470">0,</span> <span m="2148660">xj</span> <span
  m="2148880">double</span> <span m="2149150">prime</span> <span
  m="2149650">greater</span> <span m="2149860">than</span> <span
  m="2150010">or</span> <span m="2150030">equal</span> <span
  m="2150250">to</span> <span m="2150300">0.</span> <span m="2151300">But</span>
  <span m="2151990">depending</span> <span m="2152380">on</span> <span
  m="2152570">the</span> <span m="2153130">particular</span> <span
  m="2153600">values</span> <span m="2154720">in</span> <span
  m="2155380">whatever</span> <span m="2155680">solution</span> <span
  m="2156090">you're</span> <span m="2156250">exploring</span> <span
  m="2157340">are</span> <span m="2157440">the</span> <span
  m="2157550">final</span> <span m="2157850">solution,</span> <span
  m="2158910">you</span> <span m="2158950">may</span> <span
  m="2159100">have</span> <span m="2159400">an</span> <span
  m="2159650">actual</span> <span m="2160150">xj</span> <span
  m="2160570">value</span> <span m="2161340">that's</span> <span
  m="2161530">negative</span> <span m="2161930">or</span> <span
  m="2162040">positive.</span> <span m="2163290">So</span> <span
  m="2163370">you</span> <span m="2163500">added</span> <span
  m="2163830">an</span> <span m="2163920">extra</span> <span
  m="2164140">variable</span> <span m="2164540">here</span> <span
  m="2165330">to</span> <span m="2165980">your</span> <span
  m="2166450">linear</span> <span m="2166770">program.</span></p><p><span
  m="2169770">And</span> <span m="2171520">a</span> <span
  m="2171560">couple</span> <span m="2171810">more</span> <span
  m="2172100">real</span> <span m="2172270">quick,</span> <span
  m="2173150">suppose</span> <span m="2173570">that I</span> <span
  m="2173640">have</span> <span m="2173890">an</span> <span
  m="2174020">equality</span> <span m="2176200">constraint</span> <span
  m="2178920">corresponding</span> <span m="2179560">to</span> <span
  m="2180430">x1</span> <span m="2181030">plus</span> <span
  m="2181290">x2</span> <span m="2182610">equals</span> <span
  m="2183040">7.</span> <span m="2184150">What</span> <span
  m="2184310">do</span> <span m="2184370">I</span> <span m="2184450">do</span>
  <span m="2184660">with</span> <span m="2184860">an</span> <span
  m="2184940">equality</span> <span m="2185450">constraint</span> <span
  m="2185980">where</span> <span m="2186160">I</span> <span
  m="2186210">have</span> <span m="2186370">x1</span> <span
  m="2186710">plus</span> <span m="2186880">x2</span> <span
  m="2187290">equals</span> <span m="2187720">7?</span> <span
  m="2190190">Yeah,</span> <span m="2190450">go</span> <span
  m="2190530">ahead.</span></p><p><span m="2190860">AUDIENCE:</span> <span
  m="2191351">You can say</span> <span m="2191842">x1</span> <span
  m="2192333">plus</span> <span m="2192824">x2</span> <span m="2193315">is
  greater</span> <span m="2193806">than  or equal</span> <span
  m="2194297">to</span> <span m="2195279">7,</span> <span m="2195770">and</span>
  <span m="2196261">x1 plus</span> <span m="2196752">x2 is less than</span>
  <span m="2197243">or equal to</span> <span m="2197734">7.</span></p><p><span
  m="2198716">SRINIVAS DEVADAS:</span> <span m="2199220">No,</span> <span
  m="2199340">you</span> <span m="2199450">can't</span> <span
  m="2199720">do</span> <span m="2199780">less</span> <span
  m="2199980">than</span> <span m="2200130">or</span> <span
  m="2200160">equal</span> <span m="2200390">to.</span></p><p><span
  m="2200510">AUDIENCE:</span> <span m="2200974">But then</span> <span
  m="2201438">you can</span> <span m="2201902">flip the signs</span> <span
  m="2202366">to--</span></p><p><span m="2202830">SRINIVAS DEVADAS: Ah,</span>
  <span m="2203010">then you</span> <span m="2203290">could</span> <span
  m="2203430">flip the</span> <span m="2203500">signs.</span> <span
  m="2203950">So</span> <span m="2204050">you</span> <span
  m="2204150">have</span> <span m="2204250">two</span> <span
  m="2204950">steps</span> <span m="2205270">there,</span> <span
  m="2205450">good.</span> <span m="2206350">So</span> <span
  m="2207280">your</span> <span m="2207530">less</span> <span
  m="2207750">than</span> <span m="2207840">or</span> <span
  m="2207880">equal</span> <span m="2208110">to</span> <span
  m="2208270">needs</span> <span m="2208680">another</span> <span
  m="2208980">multiplier.</span> <span m="2210710">So</span> <span
  m="2211150">what</span> <span m="2211310">you</span> <span
  m="2211430">end</span> <span m="2211570">up</span> <span
  m="2211670">doing</span> <span m="2211990">is</span> <span
  m="2212120">something</span> <span m="2212520">like</span> <span
  m="2213670">x1</span> <span m="2214280">plus</span> <span
  m="2214400">x2</span> <span m="2215410">greater</span> <span
  m="2215590">than</span> <span m="2215710">or</span> <span
  m="2215750">equal</span> <span m="2215960">to</span> <span
  m="2216110">7.</span> <span m="2217110">And</span> <span
  m="2217280">then</span> <span m="2217530">you</span> <span
  m="2217660">need--</span> <span m="2218770">if</span> <span
  m="2219030">you</span> <span m="2219110">do</span> <span
  m="2219720">what</span> <span m="2220960">the</span> <span
  m="2221150">gentleman</span> <span m="2221470">just</span> <span
  m="2221610">said--</span> <span m="2222370">and</span> <span
  m="2222700">flip</span> <span m="2222900">the</span> <span
  m="2223030">sign,</span> <span m="2223890">you</span> <span
  m="2224000">get</span> <span m="2224130">minus</span> <span
  m="2224450">x1</span> <span m="2224850">minus</span> <span
  m="2225240">x2</span> <span m="2230600">greater</span> <span
  m="2230900">than</span> <span m="2231030">or</span> <span
  m="2231120">equal</span> <span m="2231340">to</span> <span
  m="2231400">minus</span> <span m="2231730">7.</span></p><p><span
  m="2237230">Is that</span> <span m="2237310">right?</span> <span
  m="2237660">No?</span> <span m="2238000">I</span> <span
  m="2238080">messed</span> <span m="2238310">up?</span> <span
  m="2242530">Oh,</span> <span m="2242720">I</span> <span
  m="2242860">want</span> <span m="2242990">less</span> <span m="2243170">than
  or</span> <span m="2243280">equal</span> <span m="2243470">to.</span> <span
  m="2243590">You're</span> <span m="2243700">right,</span> <span
  m="2243960">you're</span> <span m="2244050">right.</span> <span
  m="2244830">So</span> <span m="2245240">I</span> <span m="2245350">need</span>
  <span m="2245510">less</span> <span m="2245680">than</span> <span
  m="2245760">or</span> <span m="2245820">equal</span> <span
  m="2246060">to--</span> <span m="2247570">that's</span> <span
  m="2247680">right,</span> <span m="2247950">of</span> <span
  m="2248030">course,</span> <span m="2248380">thank</span> <span
  m="2248570">you.</span> <span m="2249820">So</span> <span m="2250180">I</span>
  <span m="2250270">need</span> <span m="2251300">less</span> <span
  m="2251500">than</span> <span m="2251600">or</span> <span
  m="2251620">equal</span> <span m="2251820">to</span> <span
  m="2251930">in</span> <span m="2252010">both</span> <span
  m="2252290">places.</span></p><p><span m="2258380">So</span> <span
  m="2259880">that's</span> <span m="2260090">the</span> <span
  m="2260150">standard</span> <span m="2260440">form.</span> <span
  m="2260750">I</span> <span m="2260860">needed</span> <span
  m="2261100">less</span> <span m="2261290">than</span> <span
  m="2261410">or</span> <span m="2261430">equal</span> <span
  m="2261650">to.</span> <span m="2262360">Good.</span> <span
  m="2265310">What</span> <span m="2265500">you've</span> <span
  m="2265610">done</span> <span m="2265790">is</span> <span
  m="2265880">increased</span> <span m="2266190">the</span> <span
  m="2266250">number</span> <span m="2266430">of</span> <span
  m="2266470">constraints</span> <span m="2266920">by</span> <span
  m="2267040">one.</span> <span m="2268760">Did I</span> <span
  m="2268830">get</span> <span m="2268960">this</span> <span
  m="2269090">right</span> <span m="2270222">the</span> <span m="2270630">second
  time?</span> <span m="2271453">All right.</span></p><p><span
  m="2272440">So</span> <span m="2272800">that's</span> <span
  m="2273070">pretty</span> <span m="2273230">much</span> <span
  m="2273430">it.</span> <span m="2273670">The</span> <span
  m="2273740">last</span> <span m="2274020">thing,</span> <span
  m="2274530">which</span> <span m="2274630">I</span> <span
  m="2274790">won't</span> <span m="2274930">really</span> <span
  m="2275110">write</span> <span m="2275310">out,</span> <span
  m="2275530">is,</span> <span m="2276880">which</span> <span
  m="2276980">we've</span> <span m="2277120">done</span> <span
  m="2277320">here</span> <span m="2277560">already,</span> <span
  m="2278780">greater</span> <span m="2279020">than</span> <span
  m="2279130">or</span> <span m="2279220">equal</span> <span
  m="2279460">to</span> <span m="2279630">constraint</span> <span
  m="2282990">translated--</span> <span m="2284750">I</span> <span
  m="2284840">won't</span> <span m="2285010">give</span> <span
  m="2285060">you</span> <span m="2285150">an</span> <span
  m="2285210">example</span> <span m="2285610">of</span> <span
  m="2285700">this;</span> <span m="2286060">we</span> <span
  m="2286100">have</span> <span m="2286270">this</span> <span
  m="2286410">already--</span> <span m="2287580">translates</span> <span
  m="2288170">to</span> <span m="2288920">less</span> <span
  m="2289130">than</span> <span m="2289220">or</span> <span
  m="2289310">equal</span> <span m="2289540">to</span> <span
  m="2290430">by</span> <span m="2290680">minus</span> <span
  m="2291050">1</span> <span m="2292280">multiplied.</span> <span
  m="2295290">So</span> <span m="2295420">we</span> <span
  m="2295500">have</span> <span m="2295650">to</span> <span
  m="2295700">invoke</span> <span m="2296100">that</span> <span
  m="2296740">in</span> <span m="2296900">order</span> <span
  m="2297060">to</span> <span m="2297120">do</span> <span m="2297230">the</span>
  <span m="2297380">equality</span> <span m="2297800">anyway.</span></p><p><span
  m="2299670">So</span> <span m="2300810">you're</span> <span
  m="2300990">in</span> <span m="2301050">business.</span> <span
  m="2301800">If</span> <span m="2301910">you</span> <span
  m="2301970">have</span> <span m="2302090">a</span> <span
  m="2302140">standard</span> <span m="2302470">LP</span> <span
  m="2302740">solver,</span> <span m="2303960">you</span> <span
  m="2304100">can</span> <span m="2304560">take</span> <span
  m="2304780">pretty</span> <span m="2304950">much</span> <span
  m="2306760">any</span> <span m="2306980">optimization</span> <span
  m="2307490">problem</span> <span m="2307850">that</span> <span
  m="2308190">is</span> <span m="2308490">linear</span> <span
  m="2309020">in</span> <span m="2309140">terms</span> <span
  m="2309340">of</span> <span m="2309430">its</span> <span
  m="2309530">objective</span> <span m="2309950">function</span> <span
  m="2310680">and</span> <span m="2310820">has</span> <span
  m="2311020">linear</span> <span m="2311310">constraints,</span> <span
  m="2312290">and</span> <span m="2312490">you</span> <span
  m="2312580">can</span> <span m="2312670">transform</span> <span
  m="2313110">it</span> <span m="2313210">into</span> <span
  m="2313490">LP.</span> <span m="2314340">If</span> <span
  m="2314450">you</span> <span m="2314530">had</span> <span
  m="2314690">non-linear</span> <span m="2315150">constraints,</span> <span
  m="2316940">there's</span> <span m="2317560">lots</span> <span
  m="2317930">of</span> <span m="2318010">work</span> <span
  m="2318280">that</span> <span m="2318430">goes</span> <span
  m="2318640">on</span> <span m="2318900">in</span> <span
  m="2319390">linearizing</span> <span m="2320090">those</span> <span
  m="2320300">constraints</span> <span m="2321180">and</span> <span
  m="2321470">using</span> <span m="2321960">LP</span> <span
  m="2322290">solvers.</span></p><p><span m="2323240">It's</span> <span
  m="2323410">a</span> <span m="2323440">very</span> <span
  m="2323610">practical</span> <span m="2324060">thing</span> <span
  m="2324230">to</span> <span m="2324340">do.</span> <span m="2324990">It</span>
  <span m="2325120">may be</span> <span m="2325310">something</span> <span
  m="2325600">you'll</span> <span m="2325770">end</span> <span
  m="2325930">up</span> <span m="2326040">doing,</span> <span
  m="2327350">invoking</span> <span m="2328210">these</span> <span
  m="2328530">powerful</span> <span m="2328920">LP</span> <span
  m="2329240">solvers--</span> <span m="2329660">typically,</span> <span
  m="2330010">they're</span> <span m="2330550">commercially</span> <span
  m="2331030">available;</span> <span m="2331600">the</span> <span
  m="2331690">best</span> <span m="2331890">ones</span> <span
  m="2332110">are</span> <span m="2332900">commercial--</span> <span
  m="2334090">and</span> <span m="2334550">use</span> <span
  m="2334920">it</span> <span m="2335020">to</span> <span
  m="2335110">solve</span> <span m="2335330">your</span> <span
  m="2335440">particular</span> <span m="2335770">problem.</span> <span
  m="2336600">It</span> <span m="2337520">turns</span> <span
  m="2337970">your</span> <span m="2338410">algorithm</span> <span
  m="2338810">design</span> <span m="2339170">problem</span> <span
  m="2339970">into</span> <span m="2340240">a</span> <span
  m="2340340">reduction.</span> <span m="2341640">And</span> <span
  m="2341760">so</span> <span m="2341930">you'll</span> <span
  m="2342840">spend</span> <span m="2344170">really</span> <span
  m="2344430">the</span> <span m="2344540">next</span> <span
  m="2346500">couple</span> <span m="2346740">of</span> <span
  m="2347180">weeks</span> <span m="2347590">thinking</span> <span
  m="2347840">about</span> <span m="2348030">reductions.</span></p><p><span
  m="2348900">We'll</span> <span m="2349040">start</span> <span
  m="2349300">that</span> <span m="2349420">up</span> <span
  m="2349720">right</span> <span m="2349930">now,</span> <span m="2350550">where
  we'll</span> <span m="2350870">take</span> <span m="2351970">existing</span>
  <span m="2352510">combinatorial</span> <span m="2353070">problems,</span>
  <span m="2353960">for</span> <span m="2354170">which</span> <span
  m="2354400">we</span> <span m="2354770">already</span> <span
  m="2355110">know</span> <span m="2355620">algorithms</span> <span
  m="2356070">for,</span> <span m="2356810">and you're going</span> <span
  m="2357180">to reduce them to</span> <span m="2357450">LP.</span> <span
  m="2358550">Just</span> <span m="2358740">to</span> <span
  m="2358800">give</span> <span m="2358900">you</span> <span
  m="2359000">a</span> <span m="2359060">sense</span> <span
  m="2359370">of</span> <span m="2359940">what</span> <span
  m="2360100">the</span> <span m="2360180">power</span> <span
  m="2360460">of</span> <span m="2360550">LP</span> <span m="2360910">is,</span>
  <span m="2361730">but</span> <span m="2361980">this</span> <span
  m="2362110">notion</span> <span m="2362390">of</span> <span
  m="2362460">reduction</span> <span m="2362890">is</span> <span
  m="2363030">very</span> <span m="2363540">powerful,</span> <span
  m="2364530">you</span> <span m="2364570">can</span> <span
  m="2364660">use</span> <span m="2364850">it</span> <span m="2364950">to</span>
  <span m="2365030">do</span> <span m="2365160">complexity</span> <span
  m="2365660">proofs.</span> <span m="2366380">Here,</span> <span
  m="2366870">we're</span> <span m="2367010">just</span> <span
  m="2367210">using</span> <span m="2367480">it</span> <span
  m="2367650">as</span> <span m="2367810">a</span> <span
  m="2367840">convenience</span> <span m="2368600">in</span> <span
  m="2368750">today's</span> <span m="2369020">lecture</span> <span
  m="2369880">to</span> <span m="2370100">use</span> <span
  m="2370390">our</span> <span m="2370500">LP</span> <span
  m="2370820">hammer.</span></p><p><span m="2372640">So</span> <span
  m="2374450">let's</span> <span m="2374710">say</span> <span
  m="2374890">that</span> <span m="2375930">I</span> <span
  m="2376140">have</span> <span m="2377510">our</span> <span
  m="2378170">favorite</span> <span m="2378640">problem</span> <span
  m="2379360">of</span> <span m="2379490">the</span> <span
  m="2379660">week,</span> <span m="2380730">namely</span> <span
  m="2381520">max</span> <span m="2381880">flow.</span> <span
  m="2382670">And</span> <span m="2382820">I</span> <span
  m="2382850">want</span> <span m="2383010">to</span> <span
  m="2383060">convert</span> <span m="2383450">that</span> <span
  m="2383760">to</span> <span m="2384710">LP.</span> <span m="2385590">So</span>
  <span m="2388060">go</span> <span m="2388200">back</span> <span
  m="2388500">a</span> <span m="2388650">week</span> <span
  m="2388790">ago,</span> <span m="2389630">and</span> <span
  m="2390170">right</span> <span m="2390320">about</span> <span
  m="2390510">this</span> <span m="2390670">time</span> <span
  m="2390930">a</span> <span m="2390970">week</span> <span
  m="2391170">ago,</span> <span m="2391970">and</span> <span
  m="2392060">we'd</span> <span m="2392190">set</span> <span
  m="2392420">up</span> <span m="2392570">the</span> <span
  m="2392660">max</span> <span m="2392970">flow</span> <span
  m="2393120">problem.</span></p><p><span m="2394050">And</span> <span
  m="2394920">let's</span> <span m="2395160">assume</span> <span
  m="2395440">that</span> <span m="2395580">we</span> <span
  m="2395690">went</span> <span m="2395860">back</span> <span
  m="2396100">there.</span> <span m="2396690">And</span> <span m="2397270">we
  didn't</span> <span m="2397490">talk</span> <span m="2397680">about</span>
  <span m="2397880">augmenting</span> <span m="2398270">paths,</span> <span
  m="2398640">and</span> <span m="2398730">we</span> <span
  m="2398820">didn't</span> <span m="2398910">talk</span> <span
  m="2399140">about</span> <span m="2399260">residual</span> <span
  m="2399670">capacities</span> <span m="2401620">or</span> <span
  m="2402060">min-cut</span> <span m="2402310">or</span> <span
  m="2402700">anything</span> <span m="2402930">like</span> <span
  m="2403120">that,</span> <span m="2403730">but</span> <span
  m="2403890">we</span> <span m="2404010">knew</span> <span
  m="2404620">LP</span> <span m="2405000">already.</span> <span
  m="2406120">And</span> <span m="2406950">we</span> <span
  m="2407060">just</span> <span m="2407210">want</span> <span
  m="2407320">to</span> <span m="2407360">solve</span> <span
  m="2407630">max</span> <span m="2407960">flow</span> <span
  m="2408530">using</span> <span m="2408840">LP.</span> <span
  m="2409950">So</span> <span m="2410160">let's</span> <span
  m="2410340">do</span> <span m="2410430">that.</span></p><p><span
  m="2427250">So</span> <span m="2427470">this</span> <span
  m="2427650">is</span> <span m="2427800">maximum</span> <span
  m="2428510">flow.</span> <span m="2429410">I'm</span> <span
  m="2429540">not</span> <span m="2429690">going</span> <span
  m="2429780">to</span> <span m="2429830">bother</span> <span
  m="2431840">with</span> <span m="2433190">converting</span> <span
  m="2433720">to</span> <span m="2433800">standard</span> <span
  m="2434200">form.</span> <span m="2435450">We</span> <span
  m="2435500">know</span> <span m="2435640">how</span> <span
  m="2435690">to</span> <span m="2435770">do</span> <span
  m="2435880">that,</span> <span m="2436520">given</span> <span
  m="2436920">what</span> <span m="2437240">we</span> <span
  m="2437420">just</span> <span m="2437640">did</span> <span
  m="2437860">here,</span> <span m="2439450">over</span> <span
  m="2439640">there.</span> <span m="2441440">So</span> <span
  m="2441740">I'll</span> <span m="2441870">just</span> <span
  m="2442060">do</span> <span m="2442290">whatever</span> <span
  m="2442680">I</span> <span m="2442700">want</span> <span m="2443510">to</span>
  <span m="2444060">keep</span> <span m="2444380">things</span> <span
  m="2444870">simple.</span></p><p><span m="2446990">Max</span> <span
  m="2447260">flow is</span> <span m="2447530">obviously</span> <span
  m="2447930">a</span> <span m="2447980">maximization</span> <span
  m="2448770">problem.</span> <span m="2450160">And</span> <span
  m="2451220">using</span> <span m="2452360">the</span> <span
  m="2452490">same</span> <span m="2452740">notation</span> <span
  m="2453250">we've</span> <span m="2454020">used,</span> <span
  m="2455150">it's</span> <span m="2455510">not going</span> <span
  m="2455840">to</span> <span m="2455940">look</span> <span
  m="2456100">like</span> <span m="2456260">Ax</span> <span
  m="2456780">and</span> <span m="2456940">b,</span> <span
  m="2458100">just</span> <span m="2458560">because</span> <span
  m="2459260">I</span> <span m="2459370">want</span> <span
  m="2459550">you</span> <span m="2459680">to</span> <span
  m="2460620">recall</span> <span m="2461420">what</span> <span
  m="2461610">max</span> <span m="2461900">flow</span> <span
  m="2462100">is.</span> <span m="2462910">And</span> <span
  m="2463320">we're</span> <span m="2463400">going</span> <span
  m="2463480">to</span> <span m="2463540">translate</span> <span
  m="2464020">that.</span> <span m="2464300">And</span> <span
  m="2464410">the</span> <span m="2464500">values</span> <span
  m="2464890">of</span> <span m="2464980">these</span> <span
  m="2465150">variables--</span> <span m="2465670">or</span> <span
  m="2465890">the</span> <span m="2466140">names</span> <span
  m="2466440">of</span> <span m="2466510">these</span> <span
  m="2466660">variables,</span> <span m="2467040">whether</span> <span
  m="2467230">they're</span> <span m="2467370">x</span> <span
  m="2467700">or</span> <span m="2467850">f,</span> <span m="2468560">it
  should</span> <span m="2468830">really</span> <span m="2469000">matter.</span>
  <span m="2470070">We</span> <span m="2470240">know</span> <span
  m="2470390">how</span> <span m="2470480">to</span> <span m="2470570">do</span>
  <span m="2472250">LP</span> <span m="2472750">at</span> <span
  m="2472880">this</span> <span m="2473030">point--</span> <span
  m="2473880">we</span> <span m="2474020">know how</span> <span m="2474200">to
  formulate</span> <span m="2474580">LP,</span> <span m="2474950">I</span> <span
  m="2474980">should</span> <span m="2475160">say,</span> <span
  m="2475300">at</span> <span m="2475400">this</span> <span
  m="2475550">point.</span> <span m="2476430">And we're</span> <span
  m="2476760">assuming</span> <span m="2477240">that</span> <span
  m="2477450">we</span> <span m="2477580">have</span> <span
  m="2479700">an</span> <span m="2479860">LP</span> <span
  m="2480090">solver.</span></p><p><span m="2481500">So</span> <span
  m="2482210">what</span> <span m="2482370">I</span> <span
  m="2482410">want</span> <span m="2482570">to</span> <span
  m="2482630">do</span> <span m="2482820">here</span> <span
  m="2483360">with</span> <span m="2483580">the</span> <span
  m="2483700">maximum</span> <span m="2484020">flow</span> <span
  m="2484230">problem</span> <span m="2484630">is</span> <span
  m="2484730">maximizing</span> <span m="2485240">the</span> <span
  m="2485320">flow</span> <span m="2485510">value.</span> <span
  m="2486850">And</span> <span m="2487070">it's</span> <span
  m="2487190">simply,</span> <span m="2487650">you</span> <span
  m="2487780">grab</span> <span m="2488070">the</span> <span
  m="2488160">source,</span> <span m="2489130">you</span> <span
  m="2489360">have</span> <span m="2489630">a</span> <span
  m="2490070">variable</span> <span m="2490520">associated</span> <span
  m="2491050">with</span> <span m="2492700">the</span> <span
  m="2493090">flow</span> <span m="2493380">from</span> <span
  m="2493540">the</span> <span m="2493630">source</span> <span
  m="2494480">to</span> <span m="2494640">every</span> <span
  m="2494910">other</span> <span m="2495110">vertex</span> <span
  m="2495860">of</span> <span m="2496080">v.</span> <span m="2497030">And</span>
  <span m="2497950">you</span> <span m="2498310">have</span> <span
  m="2498570">to</span> <span m="2499240">maximize</span> <span
  m="2499750">that.</span> <span m="2500320">So</span> <span
  m="2500390">that</span> <span m="2500550">was</span> <span
  m="2500670">the</span> <span m="2500760">setup</span> <span
  m="2500930">for</span> <span m="2501180">max</span> <span
  m="2501380">flow.</span> <span m="2502000">I'm</span> <span
  m="2502110">not</span> <span m="2502270">changing</span> <span
  m="2502570">that.</span></p><p><span m="2504240">What</span> <span
  m="2504380">do</span> <span m="2504430">you</span> <span
  m="2504550">think</span> <span m="2504900">the</span> <span
  m="2505040">three</span> <span m="2505650">constraints,</span> <span
  m="2506180">or</span> <span m="2506280">whatever</span> <span
  m="2506960">set</span> <span m="2507120">of</span> <span
  m="2507190">constraints</span> <span m="2507620">that</span> <span
  m="2507740">we</span> <span m="2507840">have</span> <span
  m="2508060">here,</span> <span m="2508730">are</span> <span
  m="2508860">going</span> <span m="2508970">to</span> <span
  m="2509020">correspond</span> <span m="2509490">to</span> <span
  m="2509550">the</span> <span m="2509640">LP?</span> <span
  m="2510870">You</span> <span m="2512310">spent</span> <span
  m="2512590">a</span> <span m="2512650">week</span> <span m="2512850">on</span>
  <span m="2512950">max</span> <span m="2513220">flow,</span> <span
  m="2513430">looked</span> <span m="2513650">at</span> <span
  m="2513690">the</span> <span m="2513760">problem</span> <span
  m="2513990">set,</span> <span m="2515010">what</span> <span
  m="2515250">constraints</span> <span m="2515690">am</span> <span
  m="2515780">I</span> <span m="2515830">going to</span> <span
  m="2515960">have</span> <span m="2516100">to</span> <span
  m="2516170">put</span> <span m="2516290">up</span> <span
  m="2516420">there?</span> <span m="2519190">I'm</span> <span
  m="2519350">going</span> <span m="2519460">to</span> <span
  m="2519500">have</span> <span m="2519610">to</span> <span
  m="2519680">put</span> <span m="2519810">up</span> <span
  m="2520020">capacity</span> <span m="2520510">constraints.</span> <span
  m="2522060">That's</span> <span m="2522250">an</span> <span
  m="2522330">obvious</span> <span m="2522630">one.</span></p><p><span
  m="2523240">What</span> <span m="2523500">is</span> <span
  m="2523590">another</span> <span m="2523840">one?</span> <span
  m="2526380">Conservation</span> <span m="2527020">constraints.</span> <span
  m="2528810">All</span> <span m="2529010">flow</span> <span
  m="2529920">entering</span> <span m="2531040">a</span> <span
  m="2531190">node</span> <span m="2531640">that</span> <span
  m="2531850">is</span> <span m="2531970">not</span> <span
  m="2532200">the</span> <span m="2532290">source</span> <span
  m="2532730">or</span> <span m="2532880">the</span> <span
  m="2533010">sink</span> <span m="2533360">has</span> <span
  m="2533630">to</span> <span m="2533750">leave</span> <span
  m="2533970">it.</span> <span m="2537280">In</span> <span
  m="2537540">the</span> <span m="2537830">original</span> <span
  m="2538250">network,</span> <span m="2539490">is</span> <span
  m="2539670">there</span> <span m="2540140">a</span> <span
  m="2540470">concept</span> <span m="2540960">of</span> <span
  m="2544020">negative</span> <span m="2544360">flow?</span> <span
  m="2545920">No,</span> <span m="2546810">you</span> <span
  m="2547190">will</span> <span m="2547390">define</span> <span
  m="2547730">it</span> <span m="2547950">going in the</span> <span
  m="2548170">other</span> <span m="2548490">direction.</span> <span
  m="2549350">So</span> <span m="2549470">we</span> <span m="2549560">did</span>
  <span m="2549710">talk</span> <span m="2549880">about</span> <span
  m="2550320">negative</span> <span m="2550680">numbers,</span> <span
  m="2551120">et</span> <span m="2551290">cetera,</span> <span
  m="2551880">but</span> <span m="2552790">you're</span> <span
  m="2553270">going</span> <span m="2553420">to</span> <span
  m="2553460">have</span> <span m="2553640">positive</span> <span
  m="2553990">quantities,</span> <span m="2554910">especially</span> <span
  m="2555260">if</span> <span m="2555360">you</span> <span
  m="2555460">look</span> <span m="2555630">at</span> <span
  m="2556390">net</span> <span m="2556795">flow,</span> <span
  m="2557200">the</span> <span m="2557870">version</span> <span
  m="2558500">of</span> <span m="2558600">the</span> <span
  m="2558670">flow</span> <span m="2559000">that</span> <span
  m="2559640">we</span> <span m="2559990">zoomed</span> <span
  m="2560310">in</span> <span m="2560470">on</span> <span m="2561790">in</span>
  <span m="2562680">the</span> <span m="2562900">Tuesday</span> <span
  m="2563200">lecture</span> <span m="2563510">from</span> <span
  m="2563650">last</span> <span m="2563860">week.</span></p><p><span
  m="2565340">And</span> <span m="2565510">you</span> <span
  m="2565620">also</span> <span m="2565890">have--</span> <span
  m="2567590">in</span> <span m="2567790">the</span> <span
  m="2567910">general</span> <span m="2568200">setting,</span> <span
  m="2568670">you're going to</span> <span m="2568910">have</span> <span
  m="2569070">these</span> <span m="2569220">skew</span> <span
  m="2569490">symmetry</span> <span m="2569880">constraints</span> <span
  m="2570330">as</span> <span m="2570450">well.</span> <span
  m="2571120">So</span> <span m="2571690">the</span> <span
  m="2571970">three</span> <span m="2572200">things</span> <span
  m="2572470">that</span> <span m="2573000">you</span> <span
  m="2573150">need</span> <span m="2573340">here</span> <span
  m="2573530">are</span> <span m="2574000">skew</span> <span
  m="2574320">symmetry,</span> <span m="2579040">conservation,</span> <span
  m="2582400">and</span> <span m="2582840">capacity.</span> <span
  m="2586830">So</span> <span m="2587910">you</span> <span
  m="2588080">have</span> <span m="2589460">such</span> <span
  m="2589750">that</span> <span m="2590170">f</span> <span m="2590445">u,
  v</span> <span m="2592280">equals</span> <span m="2592810">minus</span> <span
  m="2593390">f</span> <span m="2594272">v, u</span> <span
  m="2596400">for</span> <span m="2596670">all</span> <span m="2598100">u,
  v</span> <span m="2598565">belonging</span> <span m="2599030">to</span> <span
  m="2599670">V.</span></p><p><span m="2601040">And</span> <span
  m="2601230">depending</span> <span m="2601560">on</span> <span
  m="2601700">the</span> <span m="2601820">kind</span> <span
  m="2602190">of</span> <span m="2602270">network</span> <span
  m="2602620">that</span> <span m="2602750">you</span> <span
  m="2602830">have,</span> <span m="2604120">if</span> <span
  m="2604260">you</span> <span m="2604640">constrain</span> <span
  m="2605150">it</span> <span m="2605330">to</span> <span m="2606220">a</span>
  <span m="2606320">sudden</span> <span m="2606600">type</span> <span
  m="2607270">that</span> <span m="2607430">you</span> <span
  m="2607530">don't</span> <span m="2607700">have</span> <span
  m="2607900">these</span> <span m="2608080">two-way</span> <span
  m="2608950">edges,</span> <span m="2609960">you</span> <span
  m="2610090">could</span> <span m="2610780">certainly</span> <span
  m="2611070">remove</span> <span m="2612070">some,</span> <span
  m="2612360">if</span> <span m="2612460">not</span> <span
  m="2612630">all,</span> <span m="2613000">of</span> <span
  m="2613100">these</span> <span m="2613640">skew</span> <span
  m="2613800">symmetry</span> <span m="2614450">constraints.</span> <span
  m="2615370">Important</span> <span m="2615740">ones</span> <span
  m="2616080">are</span> <span m="2617180">conservation</span> <span
  m="2618170">and</span> <span m="2618500">capacity.</span> <span
  m="2619730">And</span> <span m="2620440">this</span> <span
  m="2620620">should</span> <span m="2620810">seem</span> <span
  m="2621110">pretty</span> <span m="2621330">familiar</span> <span
  m="2621720">to</span> <span m="2621780">you.</span></p><p><span
  m="2622780">But</span> <span m="2623030">the</span> <span
  m="2623110">key--</span> <span m="2623340">the</span> <span
  m="2623670">reason</span> <span m="2623930">I'm</span> <span
  m="2624010">writing</span> <span m="2624280">these</span> <span
  m="2624470">all</span> <span m="2624730">out</span> <span
  m="2625500">is</span> <span m="2625660">primarily</span> <span
  m="2626810">to</span> <span m="2627240">ensure</span> <span
  m="2627660">that</span> <span m="2627800">you</span> <span
  m="2627910">understand</span> <span m="2628470">that</span> <span
  m="2628590">these</span> <span m="2628790">are</span> <span
  m="2628900">all</span> <span m="2629020">linear</span> <span
  m="2629520">constraints.</span> <span m="2631030">So</span> <span
  m="2631200">that's</span> <span m="2631480">pretty</span> <span
  m="2631640">much</span> <span m="2631850">the</span> <span
  m="2631960">only</span> <span m="2633430">thing</span> <span
  m="2633660">that</span> <span m="2633890">you</span> <span
  m="2633990">need</span> <span m="2634150">to</span> <span
  m="2634190">observe</span> <span m="2634610">here.</span> <span
  m="2635510">Obviously,</span> <span m="2635850">these</span> <span
  m="2636040">constraints</span> <span m="2636450">you've</span> <span
  m="2636590">seen</span> <span m="2637720">many</span> <span
  m="2637990">a</span> <span m="2638050">time</span> <span
  m="2639110">from</span> <span m="2639730">the</span> <span
  m="2639890">two</span> <span m="2640020">lectures</span> <span
  m="2640390">last</span> <span m="2640670">week.</span> <span
  m="2641530">But</span> <span m="2641980">notice</span> <span
  m="2642350">that</span> <span m="2642490">they're</span> <span
  m="2642650">all</span> <span m="2642780">linear.</span> <span
  m="2644690">And</span> <span m="2645110">finally,</span> <span
  m="2645530">this</span> <span m="2645570">one</span> <span
  m="2645730">is</span> <span m="2645840">f</span> <span m="2646060">u, v</span>
  <span m="2647490">less</span> <span m="2647720">than</span> <span
  m="2647830">or</span> <span m="2647930">equal</span> <span
  m="2648190">to</span> <span m="2648340">c of</span> <span m="2648790">u,
  v</span> <span m="2650790">for</span> <span m="2650920">all</span> <span
  m="2652066">u, v</span> <span m="2653570">belonging</span> <span
  m="2654030">to</span> <span m="2654670">cap</span> <span
  m="2654935">V.</span></p><p><span m="2658300">So</span> <span
  m="2659150">this</span> <span m="2659630">is</span> <span
  m="2659790">f.</span> <span m="2660050">That's</span> <span
  m="2660290">a</span> <span m="2660340">variable</span> <span
  m="2660960">that's</span> <span m="2661140">less</span> <span
  m="2661350">than</span> <span m="2661480">another</span> <span
  m="2661800">constant,</span> <span m="2662760">clearly</span> <span
  m="2663090">linear.</span> <span m="2664280">Doing</span> <span
  m="2664460">a</span> <span m="2664510">bunch</span> <span
  m="2664750">of</span> <span m="2664820">sums</span> <span
  m="2665330">here.</span> <span m="2666460">I</span> <span
  m="2666560">could</span> <span m="2666880">obviously</span> <span
  m="2667230">have</span> <span m="2667960">multipliers,</span> <span
  m="2668640">scalar</span> <span m="2669050">multipliers.</span> <span
  m="2670030">In</span> <span m="2670170">this</span> <span
  m="2670330">case,</span> <span m="2670580">for</span> <span
  m="2670720">conservation,</span> <span m="2671290">I</span> <span
  m="2671340">don't</span> <span m="2671520">have</span> <span
  m="2671680">scalar</span> <span m="2671960">multipliers,</span> <span
  m="2673220">but</span> <span m="2673820">clearly</span> <span
  m="2674130">linear.</span> <span m="2675240">Skew</span> <span
  m="2675520">symmetry,</span> <span m="2676180">got</span> <span
  m="2676560">two</span> <span m="2676895">variables</span> <span
  m="2677230">in</span> <span m="2677400">here.</span> <span
  m="2678510">One</span> <span m="2678570">of</span> <span
  m="2678630">them</span> <span m="2678720">is</span> <span m="2678800">a</span>
  <span m="2678850">negation</span> <span m="2679270">of</span> <span
  m="2679350">the</span> <span m="2679410">other,</span> <span
  m="2680120">clearly</span> <span m="2680430">linear,</span> <span
  m="2681140">so</span> <span m="2681250">that's</span> <span
  m="2681420">why</span> <span m="2681540">this is</span> <span
  m="2681740">an</span> <span m="2681870">LP.</span></p><p><span
  m="2683820">And</span> <span m="2683990">so</span> <span
  m="2684080">you</span> <span m="2684190">might</span> <span
  m="2684390">say,</span> <span m="2684670">well,</span> <span
  m="2685000">I</span> <span m="2685060">know</span> <span
  m="2685530">better,</span> <span m="2686480">max</span> <span
  m="2686740">flow</span> <span m="2687000">is</span> <span
  m="2687350">much</span> <span m="2687550">more</span> <span
  m="2687690">efficient</span> <span m="2688110">than</span> <span
  m="2688660">any</span> <span m="2688910">LP</span> <span
  m="2689250">solver</span> <span m="2689610">that's</span> <span
  m="2689830">out</span> <span m="2690030">there.</span> <span
  m="2690550">And</span> <span m="2690690">you</span> <span
  m="2690810">would</span> <span m="2690890">be</span> <span
  m="2691020">right.</span> <span m="2692360">If</span> <span
  m="2692550">you</span> <span m="2692700">have</span> <span
  m="2693405">a</span> <span m="2693700">max flow</span> <span
  m="2694160">problem</span> <span m="2694620">of</span> <span
  m="2694740">this</span> <span m="2695070">variety,</span> <span
  m="2696250">it's</span> <span m="2697250">difficult</span> <span
  m="2697720">to</span> <span m="2697760">imagine</span> <span
  m="2698250">that</span> <span m="2698440">you</span> <span
  m="2698560">would</span> <span m="2698690">get</span> <span
  m="2698880">performance,</span> <span m="2700360">empirical</span> <span
  m="2700910">performance</span> <span m="2701720">from</span> <span
  m="2701920">running</span> <span m="2702160">an</span> <span
  m="2702250">LP</span> <span m="2702540">solver.</span></p><p><span
  m="2703500">But</span> <span m="2706580">this</span> <span
  m="2707630">generalization</span> <span m="2708940">of</span> <span
  m="2709070">max</span> <span m="2709390">flow</span> <span
  m="2710220">that's</span> <span m="2710480">a</span> <span
  m="2710790">multi-commodity</span> <span m="2711760">max</span> <span
  m="2712090">flow,</span> <span m="2712980">where</span> <span
  m="2713360">you</span> <span m="2713520">just</span> <span
  m="2713700">don't</span> <span m="2713840">have</span> <span
  m="2714000">one</span> <span m="2714230">commodity</span> <span
  m="2714820">flowing</span> <span m="2715260">through.</span> <span
  m="2716190">You</span> <span m="2716300">may</span> <span
  m="2716430">be</span> <span m="2716560">counting</span> <span
  m="2717630">cars</span> <span m="2718000">and</span> <span
  m="2718150">trucks</span> <span m="2718560">on</span> <span
  m="2718670">a</span> <span m="2718780">road,</span> <span
  m="2719680">or</span> <span m="2720070">there's</span> <span
  m="2720470">two</span> <span m="2720630">different</span> <span
  m="2720880">kinds</span> <span m="2721150">of</span> <span
  m="2721280">liquid</span> <span m="2721740">flowing</span> <span
  m="2722080">through</span> <span m="2722280">the</span> <span
  m="2722390">same</span> <span m="2722690">pipe,</span> <span
  m="2725670">whatever,</span> <span m="2727670">gas</span> <span
  m="2727950">or</span> <span m="2728020">liquid.</span> <span
  m="2728730">And</span> <span m="2728880">so</span> <span
  m="2729060">when</span> <span m="2729180">you</span> <span
  m="2729240">have</span> <span m="2729380">multiple</span> <span
  m="2729740">commodities,</span> <span m="2731230">you</span> <span
  m="2731360">may</span> <span m="2731510">have</span> <span
  m="2731720">a</span> <span m="2733300">linear</span> <span
  m="2734140">but</span> <span m="2734300">more</span> <span
  m="2734520">complicated</span> <span m="2735090">cost</span> <span
  m="2735360">function</span> <span m="2736210">that's</span> <span
  m="2736560">a</span> <span m="2736820">function</span> <span
  m="2737200">of</span> <span m="2737540">the</span> <span
  m="2738420">flow</span> <span m="2738770">of</span> <span
  m="2738900">each</span> <span m="2739060">of</span> <span
  m="2739140">the</span> <span m="2739210">commodities.</span> <span
  m="2739960">And</span> <span m="2739990">they</span> <span
  m="2740040">may</span> <span m="2740160">have</span> <span
  m="2740320">a</span> <span m="2740380">certain</span> <span
  m="2740640">weight</span> <span m="2740960">associated</span> <span
  m="2741400">with</span> <span m="2741530">them.</span> <span
  m="2742290">So</span> <span m="2742510">there's</span> <span
  m="2743300">a</span> <span m="2743340">lot</span> <span m="2743550">of</span>
  <span m="2743630">things</span> <span m="2744360">that</span> <span
  m="2744710">could</span> <span m="2745250">be</span> <span
  m="2748180">more</span> <span m="2748470">general--</span> <span
  m="2749090">there</span> <span m="2749590">could</span> <span
  m="2749700">be</span> <span m="2749810">more</span> <span
  m="2750000">general</span> <span m="2750290">settings</span> <span
  m="2751170">corresponding</span> <span m="2751590">to</span> <span
  m="2751660">max</span> <span m="2751910">flow.</span></p><p><span
  m="2752520">And</span> <span m="2752920">I'll</span> <span
  m="2753000">just</span> <span m="2753490">leave</span> <span
  m="2753760">you</span> <span m="2753880">with</span> <span
  m="2754840">the</span> <span m="2755020">thought</span> <span
  m="2757550">that</span> <span m="2758180">you</span> <span
  m="2758630">could</span> <span m="2758770">simply</span> <span
  m="2759110">have</span> <span m="2760650">two</span> <span
  m="2760860">commodities.</span> <span m="2766470">And</span> <span
  m="2766570">we'll</span> <span m="2766670">just</span> <span
  m="2766880">call</span> <span m="2767030">them</span> <span
  m="2767120">1</span> <span m="2767440">and</span> <span m="2767590">2.</span>
  <span m="2770640">And</span> <span m="2770850">so</span> <span
  m="2770930">now,</span> <span m="2771100">you</span> <span
  m="2771190">have</span> <span m="2771390">the</span> <span
  m="2771460">f1's</span> <span m="2772050">and</span> <span
  m="2772140">the</span> <span m="2772230">c1's</span> <span
  m="2772495">and</span> <span m="2772760">the</span> <span
  m="2773030">f2's</span> <span m="2773630">and</span> <span
  m="2773730">the</span> <span m="2773820">c2's.</span> <span
  m="2775750">Each</span> <span m="2776080">commodity</span> <span
  m="2777310">has</span> <span m="2777590">to</span> <span m="2777660">be</span>
  <span m="2777780">conserved.</span></p><p><span m="2779540">But</span> <span
  m="2779670">what</span> <span m="2779800">about</span> <span
  m="2779970">the</span> <span m="2780060">capacity?</span> <span
  m="2781680">What</span> <span m="2781900">do</span> <span
  m="2781940">you</span> <span m="2782000">think</span> <span
  m="2782160">happens</span> <span m="2782450">with</span> <span
  m="2782540">the</span> <span m="2782620">capacity?</span> <span
  m="2783110">Let's just</span> <span m="2783600">assume</span> <span
  m="2785040">these</span> <span m="2785450">are</span> <span
  m="2785510">two</span> <span m="2785620">different</span> <span
  m="2785830">kinds</span> <span m="2786040">of</span> <span
  m="2786120">cars.</span> <span m="2787170">So</span> <span
  m="2787910">what</span> <span m="2788180">would</span> <span
  m="2788320">the</span> <span m="2788390">capacity</span> <span
  m="2788820">constraint</span> <span m="2789230">look like?</span> <span
  m="2793920">Yeah.</span></p><p><span m="2794200">AUDIENCE: You can</span>
  <span m="2794678">say</span> <span m="2795156">either</span> <span
  m="2795634">c1  or</span> <span m="2796590">f1 plus</span> <span
  m="2797068">f2</span> <span m="2798024">is--</span> <span m="2800892">for
  each</span> <span m="2801370">edge,</span> <span m="2801848">you can</span>
  <span m="2802326">add them</span> <span m="2802804">together</span> <span
  m="2803282">or you</span> <span m="2803760">might take the linear</span> <span
  m="2804238">[INAUDIBLE].</span></p><p><span m="2804730">SRINIVAS DEVADAS:
  Exactly,</span> <span m="2805280">that's</span> <span
  m="2805450">right.</span> <span m="2805700">So</span> <span
  m="2806810">good</span> <span m="2807060">point.</span> <span
  m="2807890">It</span> <span m="2808050">may</span> <span m="2808230">be</span>
  <span m="2808370">the</span> <span m="2808470">case</span> <span
  m="2808790">that</span> <span m="2809020">I</span> <span
  m="2809110">have</span> <span m="2810270">distinct</span> <span
  m="2811130">capacities.</span> <span m="2811790">And</span> <span
  m="2811890">in</span> <span m="2811960">fact,</span> <span
  m="2812180">if</span> <span m="2812320">you have</span> <span
  m="2812450">completely</span> <span m="2812840">disjoint</span> <span
  m="2813290">problems,</span> <span m="2815720">you're</span> <span
  m="2815910">right</span> <span m="2816165">in</span> <span
  m="2816420">that</span> <span m="2816890">you</span> <span
  m="2817040">can</span> <span m="2817200">solve</span> <span
  m="2817520">them</span> <span m="2818230">separately.</span></p><p><span
  m="2819110">But</span> <span m="2819830">actually,</span> <span
  m="2820220">the</span> <span m="2820300">more</span> <span
  m="2820480">interesting</span> <span m="2820810">case</span> <span
  m="2821790">would</span> <span m="2822040">be</span> <span
  m="2822240">that</span> <span m="2822440">you</span> <span
  m="2822570">have</span> <span m="2823260">a</span> <span
  m="2823370">single</span> <span m="2823780">capacity</span> <span
  m="2825020">c,</span> <span m="2825560">so</span> <span
  m="2826000">you'll</span> <span m="2826150">have--</span> <span
  m="2828580">let</span> <span m="2828680">me</span> <span
  m="2828750">just</span> <span m="2828900">write</span> <span
  m="2829050">this</span> <span m="2829190">out</span> <span
  m="2829310">here.</span> <span m="2836250">If</span> <span
  m="2836410">in</span> <span m="2836520">fact</span> <span
  m="2836770">you</span> <span m="2836850">had</span> <span
  m="2837100">two</span> <span m="2837260">distinct</span> <span
  m="2837790">things,</span> <span m="2838420">so if</span> <span
  m="2838810">you had</span> <span m="2838990">f1,</span> <span
  m="2839360">c1,</span> <span m="2840130">f1,</span> <span
  m="2840360">c2,</span> <span m="2842460">the</span> <span
  m="2842520">question</span> <span m="2842870">is,</span> <span
  m="2843030">do</span> <span m="2843100">you</span> <span
  m="2843170">have</span> <span m="2843440">two</span> <span
  m="2843660">distinct,</span> <span m="2845320">disjoint</span> <span
  m="2846580">optimizations,</span> <span m="2847890">in</span> <span
  m="2847990">which</span> <span m="2848200">case</span> <span
  m="2850820">you</span> <span m="2851090">just</span> <span
  m="2851350">use</span> <span m="2851540">max</span> <span
  m="2851810">flow</span> <span m="2852020">twice.</span></p><p><span
  m="2852920">On</span> <span m="2853110">other</span> <span
  m="2853290">hand,</span> <span m="2854070">what's</span> <span
  m="2854170">more</span> <span m="2854350">interesting</span> <span
  m="2854720">really--</span> <span m="2855380">and</span> <span
  m="2855870">I</span> <span m="2856530">should've</span> <span
  m="2856850">used</span> <span m="2857000">this</span> <span
  m="2857160">example</span> <span m="2857560">for</span> <span
  m="2857690">starters--</span> <span m="2858140">but</span> <span
  m="2858400">here's</span> <span m="2858660">a</span> <span
  m="2858710">better</span> <span m="2858910">one.</span> <span
  m="2859580">You</span> <span m="2859660">have</span> <span
  m="2859780">two</span> <span m="2859970">commodities</span> <span
  m="2860930">and</span> <span m="2861100">a</span> <span
  m="2861160">single</span> <span m="2861590">capacity.</span> <span
  m="2862930">So</span> <span m="2863090">the</span> <span
  m="2863200">road</span> <span m="2863490">is</span> <span m="2863590">a</span>
  <span m="2863620">good</span> <span m="2863760">example.</span> <span
  m="2864870">Both</span> <span m="2865180">the</span> <span
  m="2865690">cars</span> <span m="2866120">and</span> <span
  m="2866320">the</span> <span m="2866730">trucks</span> <span
  m="2867730">share</span> <span m="2868010">the</span> <span
  m="2868080">same</span> <span m="2868270">road.</span> <span m="2868650">It
  has</span> <span m="2868910">a certain</span> <span
  m="2869100">capacity.</span></p><p><span m="2869990">And</span> <span
  m="2870200">now,</span> <span m="2870490">your</span> <span
  m="2870770">capacity</span> <span m="2871200">constraint</span> <span
  m="2872480">is</span> <span m="2872670">looking</span> <span
  m="2873020">like</span> <span m="2874070">f1</span> <span
  m="2874640">plus</span> <span m="2875150">f2</span> <span
  m="2876520">over</span> <span m="2876840">here.</span> <span
  m="2878390">And</span> <span m="2878570">that's</span> <span
  m="2880160">the</span> <span m="2881270">flow</span> <span
  m="2881620">through</span> <span m="2881770">the</span> <span
  m="2881900">particular</span> <span m="2883590">edge</span> <span
  m="2883860">uv.</span> <span m="2884440">So</span> <span
  m="2884540">you</span> <span m="2884630">have</span> <span
  m="2884750">something</span> <span m="2885000">like</span> <span
  m="2885200">f1</span> <span m="2885580">u, v</span> <span
  m="2886350">plus</span> <span m="2886710">f2</span> <span m="2887130">u,
  v</span> <span m="2888000">is</span> <span m="2888170">less than</span> <span
  m="2888580">or equal</span> <span m="2888700">to</span> <span
  m="2888830">c</span> <span m="2889710">u,</span> <span m="2889910">v</span>
  <span m="2890520">for</span> <span m="2890660">this</span> <span
  m="2890830">total</span> <span m="2891110">capacity.</span> <span
  m="2894190">And</span> <span m="2894500">that's</span> <span
  m="2894720">pretty</span> <span m="2894860">much</span> <span
  m="2895060">it.</span></p><p><span m="2896560">So</span> <span
  m="2897110">that</span> <span m="2897320">is</span> <span
  m="2897420">linear.</span> <span m="2898900">The</span> <span
  m="2899080">nice</span> <span m="2899260">thing</span> <span
  m="2899430">is</span> <span m="2899550">that it's</span> <span
  m="2899720">linear.</span> <span m="2900440">You</span> <span
  m="2900560">could</span> <span m="2900650">put</span> <span
  m="2900790">weights</span> <span m="2901120">on</span> <span
  m="2901310">it.</span> <span m="2902350">If</span> <span
  m="2902530">you</span> <span m="2902640">wanted</span> <span
  m="2903020">to</span> <span m="2904300">claim</span> <span
  m="2904680">that</span> <span m="2905820">a</span> <span
  m="2905890">particular</span> <span m="2906350">commodity</span> <span
  m="2908280">1</span> <span m="2909100">uses</span> <span
  m="2909620">up--</span> <span m="2909810">because</span> <span
  m="2910030">it's</span> <span m="2910170">a</span> <span
  m="2910280">truck,</span> <span m="2910590">it</span> <span
  m="2910690">uses</span> <span m="2911010">up</span> <span
  m="2911150">more</span> <span m="2912180">space</span> <span
  m="2912660">on</span> <span m="2912760">the</span> <span
  m="2912860">road.</span> <span m="2913630">And</span> <span
  m="2913750">you</span> <span m="2913840">can</span> <span
  m="2913940">accommodate</span> <span m="2914420">fewer</span> <span
  m="2914680">of</span> <span m="2914780">them.</span> <span
  m="2915530">You</span> <span m="2915690">could</span> <span
  m="2915970">put</span> <span m="2916080">a</span> <span
  m="2916110">multiplier</span> <span m="2916520">in</span> <span
  m="2916620">there.</span> <span m="2917120">Still</span> <span m="2917470">say
  it's</span> <span m="2917740">linear.</span></p><p><span m="2919160">So</span>
  <span m="2919360">that's</span> <span m="2919630">the</span> <span
  m="2919740">power</span> <span m="2920210">of</span> <span
  m="2920650">by</span> <span m="2920790">having</span> <span
  m="2921120">an</span> <span m="2921530">LP</span> <span
  m="2923030">engine.</span> <span m="2923740">You</span> <span
  m="2923990">could</span> <span m="2924280">translate</span> <span
  m="2924850">problems</span> <span m="2925340">that</span> <span
  m="2925480">are</span> <span m="2925570">not</span> <span
  m="2925740">exactly</span> <span m="2926250">max</span> <span
  m="2926540">flow,</span> <span m="2927130">that are</span> <span
  m="2927260">multi-commodity</span> <span m="2927970">flow.</span> <span
  m="2928670">You</span> <span m="2928770">may</span> <span
  m="2928870">have</span> <span m="2929610">additional</span> <span
  m="2930080">linear</span> <span m="2930380">constraints</span> <span
  m="2931330">that</span> <span m="2931460">you</span> <span
  m="2931550">could</span> <span m="2931690">add,</span> <span
  m="2932120">and</span> <span m="2932480">you</span> <span
  m="2932620">could</span> <span m="2932740">still</span> <span
  m="2932910">use</span> <span m="2933090">your</span> <span
  m="2933210">LP</span> <span m="2933480">package.</span> <span
  m="2934650">So</span> <span m="2934840">that's</span> <span
  m="2935050">the</span> <span m="2935120">reason</span> <span
  m="2935330">why</span> <span m="2935500">this</span> <span
  m="2935670">is</span> <span m="2936660">interesting</span> <span
  m="2937090">and</span> <span m="2937190">powerful.</span></p><p><span
  m="2939290">So</span> <span m="2939870">that</span> <span
  m="2939930">is</span> <span m="2940080">kind</span> <span
  m="2940180">of</span> <span m="2940230">an</span> <span
  m="2940330">obvious,</span> <span m="2940690">corresponding</span> <span
  m="2941540">to</span> <span m="2941600">max</span> <span
  m="2941810">flow.</span> <span m="2944530">Let's</span> <span
  m="2944720">look</span> <span m="2944830">at</span> <span
  m="2944890">something</span> <span m="2945220">that's</span> <span
  m="2945440">a</span> <span m="2945480">little</span> <span
  m="2945830">less</span> <span m="2946090">obvious.</span> <span
  m="2948380">And</span> <span m="2948580">it's</span> <span m="2948810">going
  to be</span> <span m="2949490">a</span> <span m="2949540">little</span> <span
  m="2949760">tricky</span> <span m="2950620">to</span> <span
  m="2950850">convert</span> <span m="2951790">the</span> <span
  m="2952240">shortest</span> <span m="2952690">path</span> <span
  m="2952990">problem</span> <span m="2955290">to</span> <span
  m="2956600">LP,</span> <span m="2957810">not</span> <span m="2960930">a</span>
  <span m="2961040">lot</span> <span m="2961260">of</span> <span
  m="2961350">work</span> <span m="2962400">but</span> <span
  m="2962710">one</span> <span m="2964040">little</span> <span
  m="2964320">observation</span> <span m="2965560">that's</span> <span
  m="2965730">going</span> <span m="2965830">to</span> <span
  m="2965870">be</span> <span m="2965960">important</span> <span
  m="2966320">to</span> <span m="2966390">make</span> <span m="2967210">in
  order</span> <span m="2967330">for the</span> <span m="2967620">whole
  thing</span> <span m="2968040">to</span> <span m="2970310">flow</span> <span
  m="2970570">through</span> <span m="2971060">or</span> <span
  m="2971220">actually</span> <span m="2971490">work</span> <span
  m="2971720">out.</span></p><p><span m="2972500">So</span> <span
  m="2972620">we</span> <span m="2972730">all</span> <span
  m="2972840">know</span> <span m="2973040">the</span> <span
  m="2973140">shortest</span> <span m="2973460">path</span> <span
  m="2973690">problem.</span> <span m="2978230">We</span> <span
  m="2978390">want</span> <span m="2978520">to</span> <span
  m="2978570">find--</span> <span m="2979070">let's</span> <span
  m="2979260">just</span> <span m="2979480">call</span> <span
  m="2979740">it</span> <span m="2980230">the</span> <span
  m="2980340">single</span> <span m="2980670">source</span> <span
  m="2981690">shortest</span> <span m="2982030">path</span> <span
  m="2982250">problem.</span> <span m="2982600">You</span> <span
  m="2982680">have</span> <span m="2982790">a</span> <span
  m="2982840">specific</span> <span m="2983330">source.</span> <span
  m="2984050">That's</span> <span m="2984220">going</span> <span
  m="2984320">to</span> <span m="2984380">turn</span> <span
  m="2984640">into</span> <span m="2984700">the</span> <span
  m="2987490">point</span> <span m="2988000">from</span> <span
  m="2988180">which</span> <span m="2988380">you're</span> <span
  m="2988510">going</span> <span m="2988590">to</span> <span
  m="2988640">start</span> <span m="2988910">computing</span> <span
  m="2990340">the</span> <span m="2991100">distance.</span> <span
  m="2992210">That's</span> <span m="2992560">what</span> <span
  m="2992820">Dijkstra</span> <span m="2993150">does,</span> <span
  m="2993450">and</span> <span m="2993540">that's</span> <span
  m="2993670">Bellman-Ford</span> <span m="2994850">does.</span></p><p><span
  m="2995900">And</span> <span m="2996110">so</span> <span
  m="2996300">this</span> <span m="2996520">is</span> <span
  m="2996670">from</span> <span m="2997030">vertex</span> <span
  m="2998010">x--</span> <span m="2998700">s,</span> <span
  m="2999260">excuse</span> <span m="2999620">me,</span> <span
  m="3000490">s.</span> <span m="3002930">And</span> <span
  m="3005180">what</span> <span m="3005330">I</span> <span
  m="3005350">want</span> <span m="3005510">to</span> <span
  m="3005570">do</span> <span m="3005680">here</span> <span
  m="3006060">is</span> <span m="3006550">obviously</span> <span
  m="3006880">set</span> <span m="3007050">it</span> <span m="3007150">up</span>
  <span m="3007320">as</span> <span m="3007430">a</span> <span
  m="3007510">set</span> <span m="3007760">of</span> <span
  m="3008370">linear</span> <span m="3008850">constraints.</span> <span
  m="3011440">If</span> <span m="3011630">I</span> <span m="3011780">have</span>
  <span m="3014800">dv</span> <span m="3017580">corresponding</span> <span
  m="3018310">to</span> <span m="3020140">the</span> <span
  m="3021240">distance</span> <span m="3022850">from</span> <span
  m="3023240">the</span> <span m="3023350">source--</span> <span
  m="3023980">so</span> <span m="3024200">dv</span> <span
  m="3024550">represents</span> <span m="3025710">the</span> <span
  m="3025860">distance</span> <span m="3026350">from</span> <span
  m="3026580">the</span> <span m="3026680">source--</span> <span
  m="3028050">and</span> <span m="3028310">eventually</span> <span m="3028760">I
  want</span> <span m="3029050">dv</span> <span m="3030250">to</span> <span
  m="3030950">be</span> <span m="3031280">the</span> <span
  m="3031530">shortest</span> <span m="3032030">distance</span> <span
  m="3032460">from</span> <span m="3032660">the</span> <span
  m="3032740">source.</span></p><p><span m="3033900">That's</span> <span
  m="3034210">our</span> <span m="3035340">notation</span> <span
  m="3035870">for</span> <span m="3036020">shortest</span> <span
  m="3036340">paths.</span> <span m="3037260">dv</span> <span
  m="3037610">represents</span> <span m="3039030">an</span> <span
  m="3039200">existing</span> <span m="3039750">path--</span> <span
  m="3040130">it</span> <span m="3040230">may</span> <span
  m="3040330">not</span> <span m="3040510">be</span> <span
  m="3040650">the</span> <span m="3040810">shortest</span> <span
  m="3041290">path--</span> <span m="3042010">from</span> <span
  m="3042280">s</span> <span m="3042510">to</span> <span m="3042620">v,</span>
  <span m="3043240">the</span> <span m="3043400">value</span> <span
  m="3043760">of</span> <span m="3043870">that.</span> <span
  m="3044580">But</span> <span m="3044780">dv</span> <span
  m="3045630">monotonically</span> <span m="3049060">decreases</span> <span
  m="3050780">as</span> <span m="3050990">you</span> <span
  m="3051340">run</span> <span m="3051590">through.</span> <span
  m="3051800">It's</span> <span m="3052010">initially</span> <span
  m="3052330">infinity</span> <span m="3053310">in</span> <span
  m="3053700">Dijkstra</span> <span m="3054160">going</span> <span
  m="3054340">back</span> <span m="3054530">to</span> <span
  m="3054880">Dijkstra.</span> <span m="3055690">And</span> <span
  m="3055830">then</span> <span m="3055960">we</span> <span
  m="3056060">shrink</span> <span m="3056400">it</span> <span
  m="3056890">through</span> <span m="3057050">a</span> <span
  m="3057120">process</span> <span m="3057530">of</span> <span
  m="3057890">relaxation.</span></p><p><span m="3059740">Now</span> <span
  m="3059920">I</span> <span m="3060040">want to try and</span> <span
  m="3060310">model</span> <span m="3060810">that--</span> <span
  m="3061800">I</span> <span m="3061900">want</span> <span m="3062040">to</span>
  <span m="3062090">try and</span> <span m="3062320">model</span> <span
  m="3062650">all</span> <span m="3062780">of</span> <span
  m="3062880">this</span> <span m="3063520">as</span> <span
  m="3063810">an</span> <span m="3063920">LP.</span> <span m="3065170">So</span>
  <span m="3065330">it's</span> <span m="3065480">not</span> <span
  m="3065760">immediately</span> <span m="3066390">obvious--</span> <span
  m="3067400">the</span> <span m="3067900">thing</span> <span
  m="3068100">that</span> <span m="3068310">the</span> <span
  m="3068400">flow</span> <span m="3068650">networks</span> <span
  m="3069080">had,</span> <span m="3069820">where</span> <span
  m="3070050">we</span> <span m="3070150">had</span> <span
  m="3070330">these</span> <span m="3070500">constraints.</span> <span
  m="3071620">We</span> <span m="3071700">have</span> <span
  m="3071840">capacity</span> <span m="3072370">constraints</span> <span
  m="3072970">and</span> <span m="3073100">conservation</span> <span
  m="3073680">constraints.</span> <span m="3074640">And</span> <span
  m="3074790">we</span> <span m="3074910">could</span> <span
  m="3075510">turn</span> <span m="3075780">that</span> <span
  m="3076420">constraint</span> <span m="3076960">into</span> <span
  m="3077130">an</span> <span m="3077540">inequality.</span> <span
  m="3078680">And</span> <span m="3079260">it</span> <span
  m="3079390">was</span> <span m="3079570">pretty</span> <span
  m="3079750">smooth.</span> <span m="3080600">It's pretty</span> <span
  m="3080730">easy.</span></p><p><span m="3082030">So</span> <span
  m="3083570">what</span> <span m="3083800">I</span> <span
  m="3083850">need</span> <span m="3084030">to</span> <span
  m="3084100">do</span> <span m="3084200">here</span> <span
  m="3084550">with</span> <span m="3084910">shortest</span> <span
  m="3085390">paths</span> <span m="3086100">is</span> <span
  m="3086660">something</span> <span m="3086970">that's</span> <span
  m="3087160">a</span> <span m="3087570">little</span> <span
  m="3088200">more</span> <span m="3089320">subtle.</span> <span
  m="3090630">So</span> <span m="3091000">what</span> <span
  m="3092850">basic</span> <span m="3092900">constraint</span> <span
  m="3094190">do</span> <span m="3094370">I</span> <span m="3094470">have</span>
  <span m="3095260">in</span> <span m="3095390">a</span> <span
  m="3095450">shortest</span> <span m="3095820">path</span> <span
  m="3096070">algorithm?</span> <span m="3098770">What's</span> <span
  m="3099070">an</span> <span m="3099170">inequality--</span> <span
  m="3100070">you</span> <span m="3100220">remember</span> <span
  m="3101090">an</span> <span m="3101350">inequality</span> <span
  m="3101970">from</span> <span m="3102130">shortest</span> <span
  m="3102480">paths</span> <span m="3102870">that</span> <span
  m="3102950">we</span> <span m="3103040">kept</span> <span
  m="3103250">talking</span> <span m="3103530">about?</span> <span
  m="3105070">The</span> <span m="3105180">triangle</span> <span
  m="3105720">inequality.</span></p><p><span m="3106980">So</span> <span
  m="3107150">we're going to</span> <span m="3107450">have</span> <span
  m="3107600">to</span> <span m="3107700">go</span> <span
  m="3107940">with</span> <span m="3108060">the</span> <span
  m="3108160">triangle</span> <span m="3108740">inequality</span> <span
  m="3109890">and</span> <span m="3109990">take</span> <span
  m="3110180">the</span> <span m="3110270">triangle</span> <span
  m="3110720">inequality</span> <span m="3111360">and</span> <span
  m="3111720">use</span> <span m="3112060">that</span> <span
  m="3112770">to</span> <span m="3112960">create</span> <span
  m="3113320">an</span> <span m="3113490">LP</span> <span
  m="3113870">formulation</span> <span m="3114490">of</span> <span
  m="3114580">shortest</span> <span m="3114940">paths.</span> <span
  m="3116410">In</span> <span m="3116590">particular,</span> <span
  m="3117420">what</span> <span m="3117950">we</span> <span
  m="3118100">have</span> <span m="3118370">here</span> <span
  m="3119230">is</span> <span m="3119500">that</span> <span m="3120350">I</span>
  <span m="3120470">could</span> <span m="3120680">write</span> <span
  m="3121160">dv</span> <span m="3122620">minus</span> <span
  m="3123190">du</span> <span m="3124940">is</span> <span
  m="3125180">less</span> <span m="3125460">than</span> <span
  m="3125630">or</span> <span m="3125840">equal</span> <span
  m="3126140">to</span> <span m="3126290">w</span> <span m="3126800">u,</span>
  <span m="3127190">v</span> <span m="3128450">for</span> <span
  m="3128930">all</span> <span m="3130130">u, v</span> <span
  m="3131320">belonging</span> <span m="3131860">to</span> <span
  m="3132910">E.</span> <span m="3133660">And</span> <span
  m="3133850">that's</span> <span m="3134140">the</span> <span
  m="3134260">triangle</span> <span m="3135355">inequality.</span> <span
  m="3139500">And</span> <span m="3139880">I'm</span> <span m="3140340">going to
  have</span> <span m="3140730">d</span> <span m="3141010">of</span> <span
  m="3141130">s</span> <span m="3141860">equals</span> <span
  m="3142260">0.</span> <span m="3143480">That's</span> <span
  m="3143640">the</span> <span m="3143720">only</span> <span
  m="3143890">thing</span> <span m="3144030">that</span> <span
  m="3144160">I</span> <span m="3144230">start</span> <span
  m="3144560">with.</span></p><p><span m="3147590">And</span> <span
  m="3147760">so</span> <span m="3147880">what's</span> <span
  m="3148090">happening</span> <span m="3148410">out</span> <span
  m="3148540">here</span> <span m="3149420">is</span> <span
  m="3149600">simply</span> <span m="3150020">that</span> <span
  m="3150620">there's</span> <span m="3150850">different</span> <span
  m="3151230">ways</span> <span m="3151870">of</span> <span
  m="3152050">getting</span> <span m="3152340">to</span> <span
  m="3152440">v.</span> <span m="3153670">And</span> <span m="3155170">my</span>
  <span m="3155370">shortest</span> <span m="3155850">path</span> <span
  m="3156680">is</span> <span m="3156870">going</span> <span
  m="3157040">to</span> <span m="3157090">be</span> <span m="3157230">the</span>
  <span m="3157330">best</span> <span m="3157820">way</span> <span
  m="3158260">of</span> <span m="3158400">getting</span> <span
  m="3158670">to</span> <span m="3158770">v.</span> <span m="3159640">So</span>
  <span m="3159820">in</span> <span m="3160050">particular,</span> <span
  m="3160760">the</span> <span m="3160950">way you want</span> <span
  m="3161080">to</span> <span m="3161130">think</span> <span
  m="3161310">about</span> <span m="3161580">this</span> <span
  m="3162320">is</span> <span m="3162540">that</span> <span
  m="3162920">if</span> <span m="3163080">I</span> <span m="3163150">have</span>
  <span m="3163440">a v</span> <span m="3164252">and</span> <span
  m="3164660">I</span> <span m="3164730">can</span> <span m="3164920">get</span>
  <span m="3165170">to</span> <span m="3165360">it</span> <span
  m="3166690">from,</span> <span m="3167320">let's</span> <span
  m="3167470">just</span> <span m="3167610">say,</span> <span
  m="3168270">u1</span> <span m="3169690">and</span> <span
  m="3169940">u2.</span> <span m="3171380">And</span> <span
  m="3171720">maybe</span> <span m="3171900">the</span> <span m="3172000">source
  is</span> <span m="3172440">over</span> <span m="3172620">here.</span> <span
  m="3173360">And</span> <span m="3173550">these</span> <span
  m="3173730">are</span> <span m="3173790">the</span> <span
  m="3173870">only</span> <span m="3174150">two</span> <span
  m="3174330">edges</span> <span m="3174680">that</span> <span
  m="3174840">can</span> <span m="3174990">get</span> <span
  m="3175210">to</span> <span m="3175290">v.</span></p><p><span
  m="3176300">So</span> <span m="3176440">I'm</span> <span
  m="3176530">just</span> <span m="3176690">looking</span> <span
  m="3176860">at</span> <span m="3176940">a</span> <span
  m="3177170">fairly</span> <span m="3178170">limited</span> <span
  m="3178550">setting.</span> <span m="3179270">u1</span> <span
  m="3179710">and</span> <span m="3179850">u2</span> <span
  m="3180360">are</span> <span m="3180560">going</span> <span
  m="3180780">to</span> <span m="3180870">have</span> <span
  m="3181210">to</span> <span m="3181330">be</span> <span m="3181560">the</span>
  <span m="3181950">two</span> <span m="3182510">vertices.</span> <span
  m="3183030">One</span> <span m="3183190">of</span> <span
  m="3183270">these</span> <span m="3183490">two</span> <span
  m="3183710">is</span> <span m="3183820">going</span> <span
  m="3183940">to</span> <span m="3183980">get</span> <span m="3184240">me</span>
  <span m="3184370">to</span> <span m="3184460">v.</span> <span
  m="3186130">And</span> <span m="3186560">I</span> <span m="3186670">got</span>
  <span m="3187860">w</span> <span m="3188580">u1,</span> <span
  m="3190660">v</span> <span m="3190890">here.</span> <span
  m="3192530">And</span> <span m="3192830">I</span> <span m="3192890">got</span>
  <span m="3193790">w</span> <span m="3194350">u2,</span> <span
  m="3195502">v</span> <span m="3195960">over</span> <span
  m="3196110">here.</span></p><p><span m="3198290">And</span> <span
  m="3198350">so</span> <span m="3198460">what</span> <span
  m="3198640">this</span> <span m="3198780">is</span> <span
  m="3198900">saying</span> <span m="3199230">is,</span> <span
  m="3200300">I'm</span> <span m="3200340">going</span> <span
  m="3200450">to</span> <span m="3200490">have</span> <span
  m="3200590">to</span> <span m="3200650">write</span> <span
  m="3200870">this</span> <span m="3201040">out</span> <span
  m="3201320">for</span> <span m="3202360">each</span> <span
  m="3202590">of</span> <span m="3202690">these</span> <span
  m="3202950">edges.</span> <span m="3203770">For</span> <span
  m="3203920">each</span> <span m="3204140">of</span> <span
  m="3204220">these</span> <span m="3204400">edges,</span> <span
  m="3205510">I'm</span> <span m="3205670">going</span> <span
  m="3205970">to</span> <span m="3207930">have</span> <span
  m="3208200">this</span> <span m="3208350">constraint.</span> <span
  m="3209230">And</span> <span m="3209400">that's</span> <span
  m="3209610">says</span> <span m="3209910">that</span> <span
  m="3210110">the</span> <span m="3210220">dv</span> <span
  m="3210680">value,</span> <span m="3211980">if</span> <span
  m="3212230">I</span> <span m="3212300">want</span> <span
  m="3212610">the</span> <span m="3212790">shortest</span> <span
  m="3213050">path,</span> <span m="3214700">should</span> <span
  m="3215500">obey</span> <span m="3216780">both</span> <span
  m="3217070">of</span> <span m="3217150">these</span> <span
  m="3217330">constraints.</span> <span m="3218310">And</span> <span
  m="3218440">if</span> <span m="3218520">I</span> <span m="3218570">want</span>
  <span m="3218740">to</span> <span m="3218870">obey</span> <span
  m="3219170">both of</span> <span m="3219340">these</span> <span
  m="3219520">constraints,</span> <span m="3220320">one</span> <span
  m="3220590">of</span> <span m="3220680">them</span> <span
  m="3220830">is</span> <span m="3220930">going</span> <span
  m="3221050">to</span> <span m="3221110">be</span> <span m="3221260">my</span>
  <span m="3221410">limiting</span> <span m="3221910">constraint.</span> <span
  m="3223030">And</span> <span m="3223240">I'm</span> <span
  m="3223330">going</span> <span m="3223460">to</span> <span
  m="3223510">get</span> <span m="3223770">the</span> <span
  m="3223890">min</span> <span m="3224550">of</span> <span
  m="3224670">those</span> <span m="3224890">two.</span> <span
  m="3225790">Correct?</span></p><p><span m="3226450">So</span> <span
  m="3227060">in</span> <span m="3227240">effect</span> <span
  m="3227630">what</span> <span m="3227820">this</span> <span
  m="3227980">translates</span> <span m="3228550">to</span> <span
  m="3229260">is</span> <span m="3229370">that</span> <span
  m="3229590">it's</span> <span m="3229760">an</span> <span
  m="3229910">AND,</span> <span m="3230330">right?</span> <span
  m="3230950">So</span> <span m="3231120">dv</span> <span
  m="3231920">have</span> <span m="3232500">minus</span> <span
  m="3233400">du1</span> <span m="3235080">is</span> <span
  m="3235250">less</span> <span m="3235470">than</span> <span
  m="3235570">or</span> <span m="3235660">equal</span> <span
  m="3235950">to</span> <span m="3236090">w</span> <span m="3236770">u1,</span>
  <span m="3237550">v.</span> <span m="3238514">dv</span> <span
  m="3240250">minus</span> <span m="3241170">du2</span> <span
  m="3243030">is</span> <span m="3243210">less</span> <span
  m="3243410">than</span> <span m="3243520">or</span> <span
  m="3243580">equal</span> <span m="3243860">to</span> <span
  m="3244000">w</span> <span m="3245040">u2,</span> <span m="3245610">v.</span>
  <span m="3246560">That's</span> <span m="3246920">an AND,</span> <span
  m="3247420">because</span> <span m="3247660">I'm</span> <span
  m="3247740">putting</span> <span m="3247980">both</span> <span
  m="3248160">of</span> <span m="3248240">those</span> <span
  m="3248420">constraints</span> <span m="3248880">in</span> <span
  m="3248980">here.</span></p><p><span m="3249760">And</span> <span
  m="3249990">that</span> <span m="3250140">essentially</span> <span
  m="3250650">means</span> <span m="3251550">that</span> <span
  m="3253050">dv</span> <span m="3255140">is</span> <span
  m="3255360">going</span> <span m="3255560">to</span> <span
  m="3255630">be</span> <span m="3256430">the</span> <span
  m="3256540">min</span> <span m="3258580">of</span> <span
  m="3261170">the</span> <span m="3261560">two</span> <span
  m="3261680">quantities--</span> <span m="3263190">the</span> <span
  m="3263390">du1</span> <span m="3263990">quantity</span> <span
  m="3264960">plus</span> <span m="3265240">the</span> <span
  m="3265870">w</span> <span m="3266150">u1,</span> <span m="3266700">v,</span>
  <span m="3267500">and</span> <span m="3267800">the</span> <span
  m="3267910">du2</span> <span m="3268460">quantity</span> <span
  m="3269300">plus</span> <span m="3269470">the</span> <span
  m="3269570">w</span> <span m="3269905">u2,</span> <span m="3270240">v.</span>
  <span m="3271150">That</span> <span m="3271300">make</span> <span
  m="3271450">sense?</span> <span m="3273460">Ask</span> <span
  m="3273640">me</span> <span m="3273740">questions</span> <span m="3274200">if
  this</span> <span m="3274850">is</span> <span
  m="3275090">unclear.</span></p><p><span m="3277730">So</span> <span
  m="3277840">that</span> <span m="3278090">simply</span> <span
  m="3278380">corresponds</span> <span m="3278790">to</span> <span
  m="3278830">the</span> <span m="3278920">fact</span> <span
  m="3279160">that</span> <span m="3279270">I'm</span> <span
  m="3279360">doing</span> <span m="3279560">an</span> <span
  m="3279650">AND</span> <span m="3280000">over</span> <span
  m="3280130">here.</span> <span m="3280630">I'm</span> <span
  m="3280780">adding</span> <span m="3281060">all</span> <span
  m="3281220">of</span> <span m="3281310">these</span> <span
  m="3281470">constraints</span> <span m="3281930">in</span> <span
  m="3282030">there.</span> <span m="3282620">So</span> <span
  m="3282760">I'm</span> <span m="3283180">applying</span> <span
  m="3283650">the</span> <span m="3283750">triangle</span> <span
  m="3284250">inequality</span> <span m="3285840">to</span> <span
  m="3286120">every</span> <span m="3286480">edge,</span> <span
  m="3287310">to</span> <span m="3287450">every</span> <span
  m="3288750">relationship</span> <span m="3290010">between</span> <span
  m="3291400">a</span> <span m="3291500">vertex</span> <span
  m="3292740">that</span> <span m="3293730">has</span> <span
  m="3294150">a</span> <span m="3294230">path</span> <span
  m="3294970">ending</span> <span m="3295310">at</span> <span
  m="3295450">it.</span> <span m="3295880">And</span> <span
  m="3296010">you're</span> <span m="3296580">pushing</span> <span
  m="3296920">it</span> <span m="3297050">forward</span> <span
  m="3297560">to</span> <span m="3297630">this</span> <span
  m="3297950">vertex</span> <span m="3298170">v,</span> <span
  m="3298780">all</span> <span m="3299110">the</span> <span
  m="3299180">different</span> <span m="3299410">ways</span> <span
  m="3299650">that</span> <span m="3299750">you</span> <span
  m="3299830">can</span> <span m="3299920">get</span> <span
  m="3300100">to</span> <span m="3300190">v.</span> <span m="3300910">In</span>
  <span m="3301010">this</span> <span m="3301170">case,</span> <span
  m="3301880">there</span> <span m="3302040">is</span> <span
  m="3302510">two</span> <span m="3302890">sets</span> <span
  m="3303180">of</span> <span m="3303270">ways--</span> <span
  m="3303750">one</span> <span m="3303930">from</span> <span
  m="3304090">u1</span> <span m="3304440">and</span> <span
  m="3304530">one</span> <span m="3304690">from</span> <span
  m="3304820">u2.</span> <span m="3305510">And</span> <span
  m="3305680">the</span> <span m="3305750">last</span> <span
  m="3306080">step</span> <span m="3306760">is</span> <span m="3307600">a</span>
  <span m="3307740">minimization</span> <span
  m="3308270">step.</span></p><p><span m="3310820">So</span> <span
  m="3312110">you</span> <span m="3312250">think</span> <span
  m="3312410">you're</span> <span m="3312520">done</span> <span
  m="3313400">or</span> <span m="3313480">we're</span> <span
  m="3313600">done,</span> <span m="3313820">but</span> <span
  m="3313930">we're</span> <span m="3314030">not</span> <span
  m="3314260">quite</span> <span m="3314530">done,</span> <span
  m="3315310">because</span> <span m="3315890">what's</span> <span
  m="3316130">missing</span> <span m="3316420">here</span> <span
  m="3317260">in</span> <span m="3317390">terms</span> <span
  m="3317630">of</span> <span m="3317740">my</span> <span
  m="3318630">formulation</span> <span m="3319290">of</span> <span
  m="3319410">LP?</span> <span m="3320210">What</span> <span
  m="3320350">else</span> <span m="3320460">do I have</span> <span
  m="3320959">to do here?</span> <span m="3325950">Well,</span> <span
  m="3327040">sure,</span> <span m="3328050">non-negative--</span> <span
  m="3329590">let's</span> <span m="3329800">do</span> <span
  m="3329900">that.</span> <span m="3330250">Sorry?</span></p><p><span
  m="3330653">AUDIENCE: Objective.</span></p><p><span m="3331056">SRINIVAS
  DEVADAS:</span> <span m="3331460">Objective,</span> <span
  m="3332350">who</span> <span m="3332540">said</span> <span
  m="3332630">objective?</span> <span m="3335390">You</span> <span
  m="3335550">again?</span> <span m="3338550">So</span> <span m="3339420">we
  are</span> <span m="3339600">missing</span> <span m="3339850">an</span> <span
  m="3339920">objective</span> <span m="3340300">function.</span> <span
  m="3342210">Now</span> <span m="3342330">shortest</span> <span
  m="3342730">path</span> <span m="3343010">is</span> <span
  m="3343250">what</span> <span m="3343470">kind</span> <span
  m="3343700">of</span> <span m="3343780">problem</span> <span
  m="3344090">again?</span> <span m="3346310">Short</span> <span
  m="3346710">means</span> <span m="3347410">minimum?</span> <span
  m="3350050">Minimum,</span> <span m="3350490">height</span> <span
  m="3350910">whatever.</span></p><p><span m="3352540">So</span> <span
  m="3352690">do</span> <span m="3352760">I</span> <span m="3352970">put
  a--</span> <span m="3353070">what</span> <span m="3353240">happens</span>
  <span m="3353720">if I</span> <span m="3353940">put a</span> <span
  m="3353990">minimum</span> <span m="3354480">in</span> <span
  m="3354590">here?</span> <span m="3356240">And</span> <span
  m="3356590">let's</span> <span m="3356770">say</span> <span
  m="3356920">that</span> <span m="3357070">I</span> <span m="3357130">do</span>
  <span m="3357350">something</span> <span m="3357660">like</span> <span
  m="3359670">sigma</span> <span m="3360070">over</span> <span
  m="3360520">V,</span> <span m="3361360">cap</span> <span m="3361580">V,</span>
  <span m="3363100">dv,</span> <span m="3363410">because</span> <span
  m="3363600">I</span> <span m="3363630">want</span> <span m="3363740">to</span>
  <span m="3363780">minimize--</span> <span m="3364470">or</span> <span
  m="3364600">I</span> <span m="3364670">could</span> <span
  m="3364810">pick</span> <span m="3364940">a</span> <span
  m="3365010">particular</span> <span m="3365380">one.</span> <span
  m="3366010">I</span> <span m="3366110">could</span> <span
  m="3366220">pick</span> <span m="3366370">a</span> <span
  m="3366430">particular</span> <span m="3367820">single</span> <span
  m="3368160">source,</span> <span m="3368520">single</span> <span
  m="3368820">destination,</span> <span m="3370010">and</span> <span
  m="3370180">I</span> <span m="3370800">put</span> <span m="3370960">a</span>
  <span m="3371010">minimum</span> <span m="3371440">there.</span></p><p><span
  m="3374340">What</span> <span m="3374490">happens?</span> <span
  m="3375900">Does this</span> <span m="3376080">work?</span> <span
  m="3378340">What's</span> <span m="3378560">the</span> <span
  m="3378650">solution</span> <span m="3379120">to</span> <span
  m="3379180">this</span> <span m="3379340">problem,</span> <span
  m="3379730">if</span> <span m="3379830">I</span> <span
  m="3380200">minimize</span> <span m="3381360">the</span> <span
  m="3381500">distance?</span> <span m="3383510">0,</span> <span
  m="3383910">because</span> <span m="3384380">the</span> <span
  m="3384530">zero</span> <span m="3384860">value</span> <span
  m="3385190">is</span> <span m="3385280">going</span> <span
  m="3385400">to</span> <span m="3385450">work.</span> <span
  m="3388170">So</span> <span m="3388270">there's</span> <span
  m="3388410">something--</span> <span m="3389420">I</span> <span
  m="3389530">haven't</span> <span m="3390370">put</span> <span
  m="3390580">in</span> <span m="3391250">the</span> <span
  m="3391390">constraint</span> <span m="3391990">that</span> <span
  m="3392130">I</span> <span m="3392240">do</span> <span m="3392510">want</span>
  <span m="3392740">a</span> <span m="3392810">path.</span> <span
  m="3393810">I</span> <span m="3393940">do</span> <span m="3394240">want</span>
  <span m="3394840">a</span> <span m="3394950">path</span> <span
  m="3395790">from</span> <span m="3397420">s</span> <span m="3397810">to</span>
  <span m="3397970">v</span> <span m="3398720">for</span> <span
  m="3399460">any</span> <span m="3399780">v</span> <span
  m="3400590">that</span> <span m="3400940">matches</span> <span
  m="3402240">one</span> <span m="3402640">of</span> <span
  m="3402770">the</span> <span m="3405390">quantities</span> <span
  m="3405840">in</span> <span m="3405940">the</span> <span
  m="3406010">min,</span> <span m="3406700">because</span> <span
  m="3406900">the</span> <span m="3406990">min</span> <span
  m="3407330">says</span> <span m="3408160">I</span> <span
  m="3408300">have</span> <span m="3408480">equality.</span></p><p><span
  m="3409920">The</span> <span m="3410000">big</span> <span
  m="3410860">issue</span> <span m="3411180">here</span> <span
  m="3411510">is,</span> <span m="3411660">this</span> <span
  m="3411830">is</span> <span m="3411950">a</span> <span m="3411990">less</span>
  <span m="3412290">than</span> <span m="3412460">or</span> <span
  m="3412590">equal</span> <span m="3412890">to,</span> <span
  m="3413810">and</span> <span m="3414000">that's</span> <span
  m="3414240">why</span> <span m="3414470">the</span> <span
  m="3414580">min</span> <span m="3414790">doesn't</span> <span
  m="3415090">work</span> <span m="3415360">in</span> <span
  m="3415450">the</span> <span m="3415520">objective</span> <span
  m="3415950">function.</span> <span m="3417620">It's</span> <span
  m="3417800">a</span> <span m="3417830">less</span> <span
  m="3418080">than</span> <span m="3418180">or</span> <span
  m="3418280">equal</span> <span m="3418550">to.</span> <span
  m="3419060">But</span> <span m="3419320">this</span> <span
  m="3419660">min</span> <span m="3419950">over</span> <span
  m="3420120">here,</span> <span m="3420580">which</span> <span
  m="3420640">is</span> <span m="3420760">the</span> <span
  m="3421220">definition</span> <span m="3421900">of</span> <span
  m="3422000">a</span> <span m="3422060">shortest</span> <span
  m="3422410">path,</span> <span m="3423260">is</span> <span
  m="3424130">saying</span> <span m="3424630">that</span> <span
  m="3425060">it's</span> <span m="3425230">either</span> <span
  m="3425520">equal</span> <span m="3425840">to</span> <span
  m="3425900">this</span> <span m="3426120">quantity</span> <span
  m="3426660">or</span> <span m="3426880">equal</span> <span
  m="3427130">to</span> <span m="3427240">that</span> <span
  m="3427460">quantity.</span> <span m="3428390">There's an</span> <span
  m="3428550">equality</span> <span m="3429160">over</span> <span
  m="3429320">here</span> <span m="3430070">that</span> <span
  m="3430230">is</span> <span m="3430350">missing</span> <span
  m="3430790">from</span> <span m="3431010">this</span> <span
  m="3431230">side.</span> <span m="3432610">And</span> <span
  m="3432850">that's</span> <span m="3433150">the</span> <span
  m="3433240">key</span> <span m="3433510">observation.</span></p><p><span
  m="3434450">Once</span> <span m="3434680">you</span> <span
  m="3434820">observe</span> <span m="3435210">that,</span> <span
  m="3435580">that</span> <span m="3435930">need</span> <span
  m="3436140">equality</span> <span m="3436810">for</span> <span
  m="3437120">one</span> <span m="3437430">of</span> <span
  m="3437570">these</span> <span m="3438680">constituent</span> <span
  m="3439700">quantities</span> <span m="3440250">of the</span> <span
  m="3441050">min,</span> <span m="3441850">then</span> <span
  m="3442880">you'll</span> <span m="3443070">see</span> <span
  m="3443330">that</span> <span m="3443640">what</span> <span
  m="3443830">you</span> <span m="3443930">have</span> <span
  m="3444100">to</span> <span m="3444220">do</span> <span m="3444930">is</span>
  <span m="3445090">simply</span> <span m="3445590">change</span> <span
  m="3446670">this</span> <span m="3446910">min</span> <span m="3447830">to
  a</span> <span m="3447970">max.</span> <span m="3450980">So</span> <span
  m="3451290">you</span> <span m="3451400">say,</span> <span m="3451550">well,
  how</span> <span m="3451890">the heck</span> <span m="3452170">did</span>
  <span m="3452250">a</span> <span m="3452340">min</span> <span
  m="3452640">get</span> <span m="3452840">changed</span> <span m="3453170">into
  a</span> <span m="3453390">max?</span> <span m="3454240">And</span> <span
  m="3454640">I'm</span> <span m="3454740">not</span> <span
  m="3454900">sure</span> <span m="3455090">I'm</span> <span
  m="3455170">going</span> <span m="3455260">to</span> <span
  m="3455320">convince</span> <span m="3455830">every</span> <span
  m="3456410">on</span> <span m="3456620">of</span> <span m="3456790">you</span>
  <span m="3457125">in</span> <span m="3457460">the</span> <span
  m="3457550">next</span> <span m="3457930">minute</span> <span
  m="3458280">or</span> <span m="3458370">so.</span></p><p><span
  m="3459050">But</span> <span m="3459760">the</span> <span
  m="3460090">bottom</span> <span m="3460400">line</span> <span
  m="3460670">is,</span> <span m="3461680">it</span> <span
  m="3461810">comes</span> <span m="3462070">down</span> <span
  m="3462360">to</span> <span m="3463990">I do</span> <span
  m="3464350">have</span> <span m="3464550">a</span> <span
  m="3464610">min</span> <span m="3465400">already</span> <span
  m="3466210">in</span> <span m="3466380">my</span> <span
  m="3466550">inequalities,</span> <span m="3467930">because</span> <span
  m="3468200">I'm</span> <span m="3468430">ANDing</span> <span
  m="3468990">each</span> <span m="3469240">of</span> <span
  m="3469350">these</span> <span m="3469560">inequalities,</span> <span
  m="3470520">and</span> <span m="3470650">I'm</span> <span
  m="3470730">putting</span> <span m="3471010">down</span> <span
  m="3471290">each</span> <span m="3471470">of</span> <span
  m="3471550">those</span> <span m="3471720">inequalities</span> <span
  m="3472280">in</span> <span m="3472410">there.</span> <span
  m="3473220">So</span> <span m="3473350">each</span> <span
  m="3473570">of</span> <span m="3473670">them</span> <span
  m="3473920">is</span> <span m="3474060">going</span> <span
  m="3474160">to</span> <span m="3474200">force</span> <span
  m="3474590">me</span> <span m="3475240">to</span> <span
  m="3475350">find</span> <span m="3476310">the</span> <span
  m="3476740">best</span> <span m="3477020">solution,</span> <span
  m="3477920">because</span> <span m="3478110">they're</span> <span
  m="3478200">going</span> <span m="3478300">to</span> <span
  m="3478470">constrain</span> <span m="3479000">me</span> <span
  m="3479720">to</span> <span m="3479880">not</span> <span m="3480220">go</span>
  <span m="3480470">via</span> <span m="3480770">u2</span> <span
  m="3481380">if</span> <span m="3481540">u1</span> <span m="3481900">is</span>
  <span m="3482020">better,</span> <span m="3482950">because</span> <span
  m="3483050">the</span> <span m="3483060">other</span> <span
  m="3483300">constraint</span> <span m="3483790">corresponding</span> <span
  m="3484320">to</span> <span m="3484950">u1</span> <span m="3485460">is</span>
  <span m="3485610">going</span> <span m="3485730">to</span> <span
  m="3485770">force</span> <span m="3486050">me</span> <span
  m="3486160">down.</span> <span m="3487030">So</span> <span
  m="3487120">there's</span> <span m="3487280">an</span> <span
  m="3487490">additional</span> <span m="3487920">min</span> <span
  m="3488180">in there,</span> <span m="3488440">because</span> <span
  m="3488730">the</span> <span m="3488830">ANDing</span> <span
  m="3489180">of</span> <span m="3489290">the</span> <span
  m="3489360">less</span> <span m="3489560">than</span> <span
  m="3489660">or</span> <span m="3489760">equal</span> <span
  m="3490030">tos.</span></p><p><span m="3491170">And</span> <span
  m="3491850">then</span> <span m="3492410">in</span> <span
  m="3492600">order</span> <span m="3492850">to</span> <span
  m="3493800">actually</span> <span m="3494220">force</span> <span
  m="3495360">the</span> <span m="3495530">equality</span> <span
  m="3496380">for</span> <span m="3496590">one</span> <span
  m="3496780">of</span> <span m="3496880">those,</span> <span
  m="3497550">I</span> <span m="3497660">need</span> <span m="3497830">to</span>
  <span m="3497950">push</span> <span m="3498370">up</span> <span
  m="3498530">as</span> <span m="3498690">hard</span> <span
  m="3498920">as</span> <span m="3499020">I</span> <span m="3499080">can,</span>
  <span m="3499715">or</span> <span m="3500040">as</span> <span
  m="3500180">high</span> <span m="3500340">as</span> <span m="3500430">I</span>
  <span m="3500530">can.</span> <span m="3501830">So</span> <span
  m="3502040">think</span> <span m="3502210">about</span> <span
  m="3502450">it.</span> <span m="3503360">Play</span> <span
  m="3503590">around</span> <span m="3503880">with</span> <span
  m="3503980">a</span> <span m="3504420">couple</span> <span
  m="3504610">of</span> <span m="3504690">examples.</span> <span
  m="3505880">Choose</span> <span m="3508000">a</span> <span
  m="3508260">simple</span> <span m="3508590">example</span> <span
  m="3509020">for</span> <span m="3509250">starters.</span> <span
  m="3510130">And</span> <span m="3510290">you'll</span> <span
  m="3510420">see</span> <span m="3510570">that</span> <span
  m="3510720">this</span> <span m="3510890">is</span> <span
  m="3511060">the</span> <span m="3511430">correct</span> <span
  m="3511720">formulation.</span></p><p><span m="3514210">So</span> <span
  m="3514590">you can</span> <span m="3514700">see</span> <span
  m="3514930">that</span> <span m="3515530">it's</span> <span
  m="3515770">not</span> <span m="3516540">completely</span> <span
  m="3516830">clear</span> <span m="3518280">in</span> <span
  m="3518680">some</span> <span m="3518920">cases</span> <span
  m="3519470">how</span> <span m="3519670">to</span> <span
  m="3519780">transform</span> <span m="3520330">problems</span> <span
  m="3520660">to</span> <span m="3520960">LP.</span> <span
  m="3521580">But</span> <span m="3521770">even</span> <span
  m="3521970">in</span> <span m="3522040">those</span> <span
  m="3522240">cases,</span> <span m="3522590">sometimes</span> <span
  m="3523520">you</span> <span m="3523650">can.</span> <span
  m="3525230">So</span> <span m="3525430">there's</span> <span
  m="3525620">just</span> <span m="3526180">a</span> <span
  m="3526340">ton</span> <span m="3526570">of</span> <span
  m="3526720">different</span> <span m="3527070">problems,</span> <span
  m="3528110">a</span> <span m="3528170">good</span> <span
  m="3530530">skill</span> <span m="3530870">to</span> <span
  m="3530970">have</span> <span m="3531950">to</span> <span
  m="3532070">be</span> <span m="3532210">able</span> <span
  m="3532360">to</span> <span m="3532450">take</span> <span
  m="3533340">combinatorial</span> <span m="3534250">optimization</span> <span
  m="3534930">engines,</span> <span m="3535390">like</span> <span
  m="3535590">LP</span> <span m="3535990">or</span> <span
  m="3536120">even</span> <span m="3536360">max</span> <span
  m="3536650">flow,</span> <span m="3537450">and</span> <span
  m="3537730">be</span> <span m="3537860">able</span> <span
  m="3537970">to</span> <span m="3538040">translate</span> <span
  m="3538480">problems</span> <span m="3538840">to</span> <span
  m="3538940">them.</span> <span m="3539820">It's</span> <span
  m="3539940">something</span> <span m="3540230">that</span> <span
  m="3540370">you'll</span> <span m="3540490">probably</span> <span
  m="3540820">do</span> <span m="3541470">if</span> <span m="3541710">you</span>
  <span m="3542370">stick</span> <span m="3542700">to</span> <span
  m="3543060">algorithms</span> <span m="3543600">in</span> <span
  m="3543740">your</span> <span m="3544450">careers</span> <span
  m="3544970">or</span> <span m="3545520">exploiting</span> <span
  m="3549600">available</span> <span m="3551200">algorithm</span> <span
  m="3551560">packages.</span></p><p><span m="3554900">So</span> <span
  m="3554970">the</span> <span m="3555040">last</span> <span
  m="3555270">thing</span> <span m="3555390">I</span> <span
  m="3555430">want</span> <span m="3555550">to</span> <span
  m="3555600">do</span> <span m="3555740">here</span> <span
  m="3556040">for</span> <span m="3556490">the</span> <span
  m="3556610">rest</span> <span m="3556800">of</span> <span
  m="3556840">the</span> <span m="3556920">time</span> <span
  m="3557650">is</span> <span m="3557790">to</span> <span
  m="3557880">give</span> <span m="3557970">you</span> <span
  m="3558110">some</span> <span m="3558370">sense</span> <span
  m="3558850">for</span> <span m="3559480">how</span> <span
  m="3560060">an</span> <span m="3560260">LP</span> <span
  m="3561860">program</span> <span m="3562570">is</span> <span
  m="3562710">actually</span> <span m="3564920">optimized.</span> <span
  m="3565550">How</span> <span m="3565850">can</span> <span
  m="3565990">you</span> <span m="3566190">possibly</span> <span
  m="3567420">take</span> <span m="3567840">the</span> <span
  m="3568240">standard</span> <span m="3568790">LP</span> <span
  m="3569120">formulation,</span> <span m="3570370">which</span> <span
  m="3570520">is</span> <span m="3570610">a</span> <span
  m="3570680">general</span> <span m="3571030">setting.</span> <span
  m="3571720">You</span> <span m="3571830">know</span> <span
  m="3571950">nothing</span> <span m="3572320">about</span> <span
  m="3572700">shortest</span> <span m="3573100">paths,</span> <span
  m="3573730">let's</span> <span m="3573940">assume,</span> <span
  m="3574365">nothing</span> <span m="3574680">about</span> <span
  m="3574910">max</span> <span m="3575230">flow.</span> <span
  m="3576260">It's</span> <span m="3576410">not</span> <span
  m="3576580">about</span> <span m="3576780">a</span> <span
  m="3576840">specific</span> <span m="3577270">problem.</span> <span
  m="3577950">It's</span> <span m="3578060">about</span> <span
  m="3578310">the</span> <span m="3578390">general</span> <span
  m="3578690">setting.</span></p><p><span m="3579360">How</span> <span
  m="3579510">can</span> <span m="3579630">we</span> <span
  m="3579710">solve</span> <span m="3580020">the</span> <span
  m="3580100">general</span> <span m="3580360">setting,</span> <span
  m="3581260">because</span> <span m="3581470">that</span> <span
  m="3581510">was</span> <span m="3581650">the</span> <span
  m="3581950">theme</span> <span m="3582200">here</span> <span
  m="3582450">anyway.</span> <span m="3582840">You</span> <span
  m="3583000">had</span> <span m="3583160">this</span> <span
  m="3583290">engine,</span> <span m="3584430">and</span> <span
  m="3584790">you</span> <span m="3585150">want to</span> <span m="3585320">use
  this</span> <span m="3585880">engine.</span> <span m="3586650">But</span>
  <span m="3586770">now, how do</span> <span m="3587150">you build this</span>
  <span m="3587520">engine?</span></p><p><span m="3588780">So</span> <span
  m="3589070">what</span> <span m="3589210">we're</span> <span
  m="3589310">going</span> <span m="3589430">to</span> <span
  m="3589490">do</span> <span m="3589640">is</span> <span
  m="3589780">look</span> <span m="3590000">at</span> <span m="3591650">a</span>
  <span m="3591780">fairly</span> <span m="3592410">simple</span> <span
  m="3592740">example</span> <span m="3594000">of</span> <span
  m="3594140">the</span> <span m="3594250">simplex</span> <span
  m="3594930">algorithm.</span> <span m="3596520">And</span> <span
  m="3597420">this</span> <span m="3598220">algorithm</span> <span
  m="3598770">is</span> <span m="3599620">in</span> <span m="3599800">the</span>
  <span m="3599880">textbook.</span> <span m="3601260">And</span> <span
  m="3601420">it'll</span> <span m="3601600">be</span> <span
  m="3601740">in</span> <span m="3601820">my</span> <span
  m="3601940">notes.</span> <span m="3602700">So</span> <span
  m="3603090">I'll</span> <span m="3603260">get</span> <span
  m="3603390">as</span> <span m="3603550">far</span> <span m="3603770">as</span>
  <span m="3603870">I</span> <span m="3603940">can.</span> <span
  m="3604930">It's</span> <span m="3605090">not</span> <span
  m="3605250">that</span> <span m="3605400">complicated</span> <span
  m="3606320">to</span> <span m="3606410">describe,</span> <span
  m="3607350">especially</span> <span m="3607840">from</span> <span
  m="3609940">an</span> <span m="3610010">example</span> <span
  m="3610420">standpoint.</span> <span m="3611530">But</span> <span
  m="3613010">I</span> <span m="3613070">may</span> <span m="3613240">not</span>
  <span m="3613280">get</span> <span m="3613490">through</span> <span
  m="3613750">all</span> <span m="3614060">of</span> <span
  m="3614160">the</span> <span m="3614260">steps</span> <span
  m="3614660">to</span> <span m="3614770">get</span> <span
  m="3614950">you</span> <span m="3615060">the</span> <span
  m="3615160">optimum</span> <span m="3615620">for</span> <span
  m="3615770">this</span> <span m="3615980">particular</span> <span
  m="3616670">example</span> <span m="3617580">given</span> <span
  m="3618100">how</span> <span m="3618210">much</span> <span
  m="3618360">time</span> <span m="3618540">we</span> <span
  m="3618610">have.</span></p><p><span m="3620260">The</span> <span
  m="3620350">most</span> <span m="3620600">important</span> <span
  m="3623390">concept</span> <span m="3623980">in</span> <span
  m="3625470">simplex</span> <span m="3626420">is</span> <span
  m="3626960">yet</span> <span m="3627130">another</span> <span
  m="3628720">form</span> <span m="3629190">of</span> <span
  m="3629290">representation</span> <span m="3631020">for</span> <span
  m="3631170">simplex,</span> <span m="3632880">which</span> <span
  m="3633220">says</span> <span m="3633660">that</span> <span
  m="3634400">you</span> <span m="3634510">can</span> <span
  m="3634650">represent the</span> <span m="3635070">LP,</span> <span
  m="3636080">not</span> <span m="3636350">in</span> <span
  m="3636460">standard</span> <span m="3636910">form,</span> <span
  m="3637670">but</span> <span m="3637850">in</span> <span
  m="3637960">slack</span> <span m="3638390">form.</span> <span
  m="3639990">So</span> <span m="3640110">I'm</span> <span
  m="3640190">going</span> <span m="3640320">to</span> <span m="3640380">tell
  you</span> <span m="3640650">what</span> <span m="3640860">slack</span> <span
  m="3641110">form</span> <span m="3641445">is.</span> <span
  m="3642370">And</span> <span m="3642500">then</span> <span
  m="3642640">what</span> <span m="3642780">we're</span> <span
  m="3642890">going</span> <span m="3643020">to</span> <span
  m="3643090">do</span> <span m="3643290">is,</span> <span
  m="3643750">the</span> <span m="3643880">flow</span> <span
  m="3644865">of</span> <span m="3645240">simplex,</span> <span
  m="3646900">algorithmic</span> <span m="3647390">flow,</span> <span
  m="3648110">is</span> <span m="3648290">to</span> <span
  m="3648410">convert</span> <span m="3649540">one</span> <span
  m="3649930">slack</span> <span m="3650430">form</span> <span
  m="3653000">into</span> <span m="3655120">and</span> <span
  m="3655560">equivalent.</span></p><p><span m="3656360">Obviously,</span> <span
  m="3656690">you</span> <span m="3656750">don't</span> <span
  m="3656870">want</span> <span m="3657070">to</span> <span
  m="3658950">do</span> <span m="3659070">something</span> <span
  m="3659400">that's</span> <span m="3659640">incorrect,</span> <span
  m="3661000">but</span> <span m="3661540">it</span> <span
  m="3661660">has</span> <span m="3661820">to</span> <span m="3661870">be</span>
  <span m="3661950">an</span> <span m="3662020">equivalent</span> <span
  m="3662460">slack</span> <span m="3662770">form,</span> <span
  m="3665120">whose</span> <span m="3665600">objective</span> <span
  m="3666220">value</span> <span m="3674730">has</span> <span
  m="3674970">not</span> <span m="3675250">decreased</span> <span
  m="3681840">and</span> <span m="3682080">has</span> <span
  m="3682260">likely</span> <span m="3682730">increased.</span> <span
  m="3687340">So</span> <span m="3687420">you're</span> <span
  m="3687590">guaranteed</span> <span m="3688180">that the</span> <span
  m="3688340">objective</span> <span m="3688790">value</span> <span
  m="3689650">has</span> <span m="3689830">not</span> <span
  m="3690020">decreased.</span> <span m="3690390">You're</span> <span
  m="3690760">not</span> <span m="3690960">guaranteed</span> <span
  m="3691480">that</span> <span m="3691600">it's</span> <span
  m="3691690">increased.</span></p><p><span m="3692890">And</span> <span
  m="3693090">then</span> <span m="3693810">we're</span> <span
  m="3693940">going</span> <span m="3694050">to</span> <span
  m="3694120">keep</span> <span m="3694460">going</span> <span
  m="3697650">till</span> <span m="3698720">the</span> <span
  m="3698860">optimal</span> <span m="3699370">solution</span> <span
  m="3703510">becomes</span> <span m="3703920">obvious.</span> <span
  m="3706030">And</span> <span m="3706110">you</span> <span
  m="3706190">might</span> <span m="3706400">say,</span> <span
  m="3708700">how</span> <span m="3708890">is</span> <span
  m="3708990">this</span> <span m="3709170">obvious?</span> <span
  m="3710010">That's</span> <span m="3710300">the</span> <span
  m="3710390">reason</span> <span m="3710640">why</span> <span
  m="3710850">I</span> <span m="3710940">talked</span> <span
  m="3711220">about</span> <span m="3711400">the</span> <span
  m="3711470">short</span> <span m="3711860">certificate</span> <span
  m="3712410">of</span> <span m="3712520">optimality.</span> <span
  m="3713730">It's</span> <span m="3714190">definitely</span> <span
  m="3714570">a</span> <span m="3714630">relationship</span> <span
  m="3715200">between</span> <span m="3716710">the</span> <span
  m="3717180">termination</span> <span m="3718750">of</span> <span
  m="3718940">simplex</span> <span m="3719910">and</span> <span
  m="3720140">the</span> <span m="3720220">fact</span> <span
  m="3720500">that</span> <span m="3720670">you</span> <span
  m="3720800">can</span> <span m="3720920">now</span> <span
  m="3721100">say,</span> <span m="3721610">hey,</span> <span
  m="3722030">I</span> <span m="3722040">know</span> <span
  m="3722180">I'm</span> <span m="3722290">done</span> <span
  m="3722520">here,</span> <span m="3723960">it's</span> <span
  m="3724360">kind</span> <span m="3724460">of</span> <span
  m="3724540">obvious</span> <span m="3724930">that</span> <span
  m="3725040">I</span> <span m="3725080">can't</span> <span
  m="3725310">do</span> <span m="3725410">any</span> <span
  m="3725550">better.</span> <span m="3726590">And</span> <span
  m="3726990">hopefully,</span> <span m="3727250">you'll</span> <span
  m="3727630">see</span> <span m="3727830">that</span> <span
  m="3728040">by</span> <span m="3728140">the</span> <span
  m="3728250">end</span> <span m="3728420">of</span> <span
  m="3728490">this</span> <span m="3728630">lecture</span> <span
  m="3729090">in</span> <span m="3729190">this</span> <span
  m="3729660">simple</span> <span m="3729940">example.</span></p><p><span
  m="3731790">So</span> <span m="3731800">that's</span> <span
  m="3731990">it.</span> <span m="3732490">It's</span> <span
  m="3732660">an</span> <span m="3732700">iterative</span> <span
  m="3733110">algorithm.</span> <span m="3734040">It's</span> <span
  m="3734290">exponential,</span> <span m="3735530">unfortunately,</span> <span
  m="3736650">because</span> <span m="3737100">this</span> <span
  m="3737330">takes</span> <span m="3738850">m plus</span> <span
  m="3739320">n,</span> <span m="3741220">choose</span> <span
  m="3741640">n</span> <span m="3742550">iterations</span> <span
  m="3743220">in</span> <span m="3743310">the</span> <span
  m="3743400">worst</span> <span m="3743640">case,</span> <span
  m="3744460">where</span> <span m="3745200">n</span> <span
  m="3745370">is</span> <span m="3745480">the</span> <span
  m="3745530">number</span> <span m="3745730">of</span> <span
  m="3745780">variables</span> <span m="3746280">and</span> <span
  m="3746520">m</span> <span m="3746700">is</span> <span m="3746780">the</span>
  <span m="3746850">number</span> <span m="3747050">of</span> <span
  m="3747110">constraints.</span> <span m="3749080">Most</span> <span
  m="3749340">of</span> <span m="3749410">the</span> <span
  m="3749480">time,</span> <span m="3749720">it</span> <span
  m="3749790">does</span> <span m="3749960">a</span> <span
  m="3750010">lot</span> <span m="3750170">better,</span> <span
  m="3751160">but</span> <span m="3751550">that's</span> <span
  m="3751820">the</span> <span m="3751900">only</span> <span
  m="3752100">bound</span> <span m="3752390">that</span> <span
  m="3753440">you</span> <span m="3753570">can</span> <span
  m="3753670">actually</span> <span m="3754590">prove</span> <span
  m="3755780">in</span> <span m="3755910">the</span> <span
  m="3756000">worst</span> <span m="3756220">case.</span> <span
  m="3757290">And</span> <span m="3757500">so</span> <span
  m="3758460">you're</span> <span m="3758710">stuck</span> <span
  m="3758950">with</span> <span m="3759080">an</span> <span
  m="3759150">exponential</span> <span m="3759670">algorithm</span> <span
  m="3760490">if</span> <span m="3760650">you're</span> <span
  m="3760750">using</span> <span m="3761040">simplex</span> <span
  m="3761800">worst</span> <span m="3762040">case.</span></p><p><span
  m="3763500">We</span> <span m="3763550">won't</span> <span
  m="3763860">actually</span> <span m="3764280">do</span> <span
  m="3764640">much</span> <span m="3764880">analysis</span> <span
  m="3765350">on</span> <span m="3765460">simplex.</span> <span
  m="3766350">It's</span> <span m="3766760">really</span> <span
  m="3766990">out</span> <span m="3767120">of</span> <span
  m="3767200">scope</span> <span m="3767550">for</span> <span
  m="3767840">046</span> <span m="3769090">in</span> <span
  m="3769260">terms</span> <span m="3769450">of</span> <span
  m="3769510">the</span> <span m="3769580">analysis.</span> <span
  m="3770290">The</span> <span m="3770570">actual</span> <span
  m="3770890">algorithm</span> <span m="3771260">is</span> <span
  m="3771340">certainly</span> <span m="3771760">within</span> <span
  m="3772010">scope.</span></p><p><span m="3773390">So</span> <span
  m="3773920">what</span> <span m="3774060">I</span> <span
  m="3774080">want</span> <span m="3774210">to</span> <span
  m="3774280">do</span> <span m="3774630">is</span> <span
  m="3775130">give</span> <span m="3775270">you</span> <span
  m="3775380">some</span> <span m="3775580">sense</span> <span
  m="3775950">for</span> <span m="3776310">what</span> <span
  m="3776550">the</span> <span m="3776630">slack</span> <span
  m="3776930">form</span> <span m="3777210">looks</span> <span
  m="3777440">like.</span> <span m="3778120">And</span> <span
  m="3778280">we'll</span> <span m="3778380">do</span> <span
  m="3778500">a</span> <span m="3778570">couple</span> <span
  m="3778780">of</span> <span m="3778880">iterations</span> <span
  m="3779320">of</span> <span m="3779400">simplex.</span> <span
  m="3779960">And</span> <span m="3780050">we'll</span> <span
  m="3780490">get</span> <span m="3780630">as</span> <span
  m="3780770">far</span> <span m="3780970">as</span> <span m="3781090">we</span>
  <span m="3781190">can</span> <span m="3782440">before</span> <span
  m="3783220">the</span> <span m="3783370">end</span> <span
  m="3783540">the</span> <span m="3783630">lecture.</span></p><p><span
  m="3784790">So</span> <span m="3785110">we'll take</span> <span
  m="3785270">a</span> <span m="3785410">different</span> <span
  m="3785670">example</span> <span m="3786160">from</span> <span
  m="3786430">our</span> <span m="3790790">political</span> <span
  m="3791250">example.</span> <span m="3792340">It's</span> <span
  m="3792830">similar</span> <span m="3793280">in</span> <span
  m="3793390">size.</span> <span m="3795430">And</span> <span
  m="3796410">I</span> <span m="3796520">want</span> <span m="3796660">to</span>
  <span m="3796996">explain</span> <span m="3797332">to you</span> <span
  m="3798480">what</span> <span m="3798730">the</span> <span m="3799110">slack
  form</span> <span m="3799650">is</span> <span m="3800370">and</span> <span
  m="3800540">why</span> <span m="3800850">it's</span> <span
  m="3801280">interesting.</span></p><p><span m="3802720">So</span> <span
  m="3802910">what</span> <span m="3803070">I</span> <span
  m="3803100">want</span> <span m="3803260">to</span> <span
  m="3803330">do</span> <span m="3803550">is</span> <span
  m="3803780">maximize</span> <span m="3806660">3x1</span> <span
  m="3808530">plus</span> <span m="3808770">x2</span> <span
  m="3809400">plus</span> <span m="3809780">x3</span> <span
  m="3813490">subject</span> <span m="3815510">to</span> <span
  m="3815700">the</span> <span m="3815800">constraints</span> <span
  m="3817210">that</span> <span m="3817360">x1</span> <span
  m="3817870">plus</span> <span m="3818110">x2</span> <span
  m="3818720">plus</span> <span m="3819670">3x2</span> <span
  m="3820920">is</span> <span m="3821120">less</span> <span
  m="3821320">than</span> <span m="3821440">or</span> <span
  m="3821540">equal</span> <span m="3821780">to</span> <span
  m="3821890">30,</span> <span m="3823255">2x1</span> <span
  m="3824380">plus</span> <span m="3824910">2x2</span> <span
  m="3826670">plus</span> <span m="3826940">5x3</span> <span
  m="3827670">is</span> <span m="3827800">less</span> <span
  m="3827970">than</span> <span m="3828070">or</span> <span
  m="3828140">equal</span> <span m="3828300">to</span> <span
  m="3828420">24,</span> <span m="3830530">4x1</span> <span
  m="3832130">plus</span> <span m="3832320">x2</span> <span
  m="3833510">plus</span> <span m="3833760">2x3</span> <span m="3835220">less
  than</span> <span m="3835280">or</span> <span m="3835550">equal</span> <span
  m="3835710">to</span> <span m="3835800">36,</span> <span
  m="3836760">and</span> <span m="3836890">then</span> <span
  m="3837330">non-negativity</span> <span m="3838650">constraints,</span> <span
  m="3839900">x1,</span> <span m="3840430">x2,</span> <span
  m="3840740">x3</span> <span m="3841610">greater</span> <span
  m="3841770">than</span> <span m="3841870">or</span> <span
  m="3841950">equal</span> <span m="3842150">to</span> <span
  m="3842190">0.</span> <span m="3843200">So</span> <span
  m="3843300">that's</span> <span m="3843530">our</span> <span
  m="3844550">example</span> <span m="3844910">problem.</span> <span
  m="3845960">I'll</span> <span m="3846100">leave</span> <span
  m="3846240">it</span> <span m="3846310">up</span> <span
  m="3846440">there.</span></p><p><span m="3849410">You're going to</span> <span
  m="3849480">convert</span> <span m="3849800">this</span> <span m="3850180">to
  slack</span> <span m="3850510">form.</span> <span m="3852070">And</span> <span
  m="3852280">so</span> <span m="3852400">what</span> <span
  m="3852560">is</span> <span m="3852710">the</span> <span
  m="3852860">slack</span> <span m="3853205">form?</span> <span
  m="3853960">We're</span> <span m="3854070">going</span> <span
  m="3854310">to</span> <span m="3854410">introduce</span> <span
  m="3856900">an</span> <span m="3857040">additional</span> <span
  m="3857440">number</span> <span m="3857690">of</span> <span
  m="3857790">variables</span> <span m="3859130">that</span> <span
  m="3859560">correspond</span> <span m="3859990">to</span> <span
  m="3860080">the</span> <span m="3860180">number</span> <span
  m="3860520">of</span> <span m="3860620">equations</span> <span
  m="3861170">that</span> <span m="3861330">we</span> <span
  m="3861420">have.</span> <span m="3862230">So</span> <span m="3862320">we're
  going</span> <span m="3862420">to</span> <span m="3862650">introduce,</span>
  <span m="3863730">in</span> <span m="3863830">this</span> <span
  m="3863990">case,</span> <span m="3864210">three</span> <span
  m="3864410">new</span> <span m="3864570">labels,</span> <span
  m="3865040">because</span> <span m="3865280">I</span> <span
  m="3865350">have</span> <span m="3865910">three</span> <span
  m="3866560">equations.</span></p><p><span m="3867640">And</span> <span
  m="3867810">the</span> <span m="3867880">slack</span> <span
  m="3870355">for</span> <span m="3870780">this</span> <span
  m="3871580">problem</span> <span m="3872060">looks</span> <span
  m="3872270">like</span> <span m="3872460">this.</span> <span
  m="3873300">I'm</span> <span m="3873430">going</span> <span
  m="3873520">to</span> <span m="3873560">have</span> <span m="3873730">z</span>
  <span m="3874630">equals</span> <span m="3876880">3x1</span> <span
  m="3878380">plus</span> <span m="3879020">x2</span> <span
  m="3879480">plus</span> <span m="3879720">x3,</span> <span
  m="3880200">same</span> <span m="3880290">as</span> <span
  m="3880610">before.</span> <span m="3882470">And</span> <span
  m="3882610">then</span> <span m="3882800">I'm</span> <span
  m="3882870">going</span> <span m="3883040">to</span> <span
  m="3883130">have</span> <span m="3884320">variables</span> <span
  m="3884920">that</span> <span m="3885100">represent--</span> <span
  m="3885650">these</span> <span m="3885840">are called</span> <span
  m="3886070">basic</span> <span m="3886580">variables.</span> <span
  m="3888000">And</span> <span m="3888170">the</span> <span
  m="3888240">original</span> <span m="3888570">variables</span> <span
  m="3889070">are called</span> <span m="3889460">non-basic</span> <span
  m="3890300">variables.</span></p><p><span m="3891520">So</span> <span
  m="3891630">I'm</span> <span m="3891720">going</span> <span
  m="3891840">to</span> <span m="3891910">add</span> <span
  m="3893000">three</span> <span m="3893210">basic</span> <span
  m="3893600">labels,</span> <span m="3894170">x4,</span> <span
  m="3894680">x5,</span> <span m="3895090">and</span> <span
  m="3895220">x6,</span> <span m="3896560">corresponding</span> <span
  m="3896850">to</span> <span m="3896920">these</span> <span
  m="3897140">three</span> <span m="3897340">constraints.</span> <span
  m="3898350">And</span> <span m="3898440">they're</span> <span
  m="3898520">going to</span> <span m="3898650">represent</span> <span
  m="3899690">slack</span> <span m="3900880">in</span> <span
  m="3901030">the</span> <span m="3901130">sense</span> <span
  m="3901470">that</span> <span m="3902160">they're</span> <span
  m="3902290">going</span> <span m="3902400">to</span> <span
  m="3902460">correspond</span> <span m="3903020">to</span> <span
  m="3903790">how</span> <span m="3903980">much</span> <span
  m="3904190">slack</span> <span m="3904690">you</span> <span
  m="3904880">have</span> <span m="3906010">in</span> <span
  m="3906280">the</span> <span m="3907030">inequalities</span> <span
  m="3909020">that</span> <span m="3909190">you</span> <span
  m="3909290">have</span> <span m="3909570">in</span> <span
  m="3909650">the</span> <span m="3909720">original</span> <span
  m="3910100">problem.</span> <span m="3911400">So</span> <span
  m="3913380">if</span> <span m="3913590">x4</span> <span
  m="3914630">happens</span> <span m="3914970">to</span> <span
  m="3915050">be</span> <span m="3915140">0,</span> <span
  m="3916120">then</span> <span m="3916330">you're</span> <span
  m="3916480">jammed</span> <span m="3916940">up.</span></p><p><span
  m="3917220">You</span> <span m="3917340">have</span> <span
  m="3917470">no</span> <span m="3917630">slack,</span> <span
  m="3918640">because</span> <span m="3919550">x1</span> <span
  m="3919960">plus</span> <span m="3920130">x2</span> <span
  m="3920450">plus</span> <span m="3920650">3x3</span> <span
  m="3921280">equals</span> <span m="3921620">30.</span> <span
  m="3922450">And</span> <span m="3923170">increasing</span> <span
  m="3923660">any</span> <span m="3923840">one</span> <span
  m="3924030">of</span> <span m="3924130">them</span> <span
  m="3924750">will</span> <span m="3924910">violate</span> <span
  m="3925440">the</span> <span m="3925530">constraint.</span> <span
  m="3926790">So</span> <span m="3926890">that's</span> <span
  m="3927140">just</span> <span m="3927510">simply</span> <span
  m="3927880">the</span> <span m="3927950">notion</span> <span
  m="3928220">of</span> <span m="3928310">slack.</span> <span
  m="3929130">It's</span> <span m="3929510">how</span> <span
  m="3929600">much</span> <span m="3929780">room</span> <span
  m="3930730">do</span> <span m="3930810">you</span> <span
  m="3930890">have.</span></p><p><span m="3932310">x5</span> <span
  m="3932850">is</span> <span m="3934040">24</span> <span
  m="3935290">minus</span> <span m="3936090">2x1</span> <span
  m="3937480">minus</span> <span m="3938340">2x2</span> <span
  m="3940020">minus</span> <span m="3940440">5x3.</span> <span
  m="3942220">And</span> <span m="3942890">the</span> <span
  m="3942940">last</span> <span m="3943170">one</span> <span
  m="3943370">is</span> <span m="3944150">36</span> <span
  m="3945480">minus</span> <span m="3945960">4x1.</span> <span
  m="3947460">This</span> <span m="3947640">is</span> <span
  m="3947670">very</span> <span m="3947840">mechanical</span> <span
  m="3948350">up</span> <span m="3948460">to</span> <span
  m="3948640">this</span> <span m="3948810">point.</span> <span
  m="3950230">And</span> <span m="3950450">so</span> <span
  m="3950550">I'll</span> <span m="3950660">call</span> <span
  m="3950870">this</span> <span m="3951040">set</span> <span
  m="3951170">of</span> <span m="3951240">equations,</span> <span
  m="3951770">equation</span> <span m="3952240">I.</span></p><p><span
  m="3953880">And</span> <span m="3955260">what</span> <span
  m="3955430">I'm</span> <span m="3955520">going</span> <span
  m="3955670">to</span> <span m="3955750">do</span> <span m="3956040">is</span>
  <span m="3957220">I'm</span> <span m="3957400">going</span> <span
  m="3957650">to</span> <span m="3957780">now</span> <span
  m="3959920">work</span> <span m="3960370">on</span> <span m="3960500">a</span>
  <span m="3960590">space</span> <span m="3961710">that</span> <span
  m="3961850">corresponds</span> <span m="3962430">to</span> <span
  m="3962580">x1,</span> <span m="3963003">x2,</span> <span
  m="3963850">x3,</span> <span m="3965030">x4,</span> <span
  m="3965980">x5,</span> <span m="3966950">x6.</span> <span
  m="3968370">So</span> <span m="3968530">I'm</span> <span
  m="3968650">going</span> <span m="3968770">to</span> <span
  m="3968810">have</span> <span m="3969040">these</span> <span
  m="3969780">solutions</span> <span m="3970590">that</span> <span
  m="3970790">now</span> <span m="3970980">have</span> <span
  m="3971720">six</span> <span m="3972090">values</span> <span
  m="3972510">associated</span> <span m="3972990">with</span> <span
  m="3973100">them,</span> <span m="3973630">as</span> <span
  m="3973800">opposed</span> <span m="3974030">to</span> <span
  m="3974110">just</span> <span m="3974310">three</span> <span
  m="3974490">values,</span> <span m="3975050">because</span> <span
  m="3975270">I've</span> <span m="3975390">added</span> <span
  m="3976340">three</span> <span m="3976570">variables,</span> <span
  m="3977240">the</span> <span m="3977340">basic</span> <span
  m="3977710">variables,</span> <span m="3978560">to</span> <span
  m="3978630">my</span> <span m="3978730">non-basic</span> <span
  m="3979400">set.</span> <span m="3980530">So</span> <span
  m="3980650">the</span> <span m="3980800">original</span> <span
  m="3981160">variables</span> <span m="3982490">are</span> <span
  m="3983830">non-basic,</span> <span m="3986390">just</span> <span
  m="3986580">to</span> <span m="3986650">differentiate.</span></p><p><span
  m="3988630">So</span> <span m="3988850">so</span> <span m="3989060">far</span>
  <span m="3989270">it's just</span> <span m="3989630">set</span> <span
  m="3989860">up</span> <span m="3990200">its</span> <span
  m="3990630">definitions.</span> <span m="3992280">We</span> <span
  m="3992430">can</span> <span m="3993580">think</span> <span
  m="3993760">about</span> <span m="3994190">up</span> <span
  m="3994540">running</span> <span m="3994930">through</span> <span
  m="3995210">iterations</span> <span m="3996810">of</span> <span
  m="3998590">simplex.</span> <span m="3999260">It</span> <span
  m="3999450">takes</span> <span m="3999630">about</span> <span
  m="3999840">three</span> <span m="4000220">iterations</span> <span
  m="4000560">here</span> <span m="4001430">in order</span> <span
  m="4001620">to</span> <span m="4003460">get</span> <span m="4003640">to</span>
  <span m="4003710">the</span> <span m="4003800">point</span> <span
  m="4004050">where</span> <span m="4004840">the</span> <span
  m="4005950">optimum</span> <span m="4006460">is</span> <span
  m="4006590">obvious.</span> <span m="4007630">So</span> <span
  m="4007770">you're</span> <span m="4007860">going</span> <span
  m="4007940">to</span> <span m="4007980">convert</span> <span
  m="4008320">through</span> <span m="4008950">three</span> <span
  m="4009270">slack</span> <span m="4009685">forms.</span> <span
  m="4010320">And</span> <span m="4010460">then</span> <span
  m="4010660">finally,</span> <span m="4010980">when</span> <span
  m="4011070">you</span> <span m="4011140">get</span> <span
  m="4011290">to</span> <span m="4011360">this</span> <span
  m="4011860">fourth</span> <span m="4012540">slack</span> <span
  m="4012850">form,</span> <span m="4013680">you</span> <span
  m="4013870">see</span> <span m="4014080">that</span> <span
  m="4014580">you</span> <span m="4014660">have</span> <span
  m="4014790">an</span> <span m="4014850">optimal</span> <span
  m="4015160">solution.</span></p><p><span m="4016100">And</span> <span
  m="4016580">how</span> <span m="4016700">does</span> <span
  m="4016800">that</span> <span m="4016990">work?</span> <span
  m="4018740">You're</span> <span m="4019240">going</span> <span
  m="4019390">to</span> <span m="4019490">have</span> <span
  m="4019720">the</span> <span m="4019790">notion</span> <span
  m="4020160">of</span> <span m="4020260">a</span> <span
  m="4020320">basic</span> <span m="4020890">solution,</span> <span
  m="4023440">where</span> <span m="4024660">we</span> <span
  m="4024870">set</span> <span m="4026110">all</span> <span
  m="4026860">non-basic</span> <span m="4029330">variables</span> <span
  m="4031580">to</span> <span m="4031680">0.</span> <span m="4039200">So</span>
  <span m="4040230">in</span> <span m="4040370">this</span> <span
  m="4040560">case,</span> <span m="4041230">what</span> <span
  m="4041300">we're</span> <span m="4041400">going</span> <span
  m="4041530">to</span> <span m="4041570">have--</span> <span
  m="4041830">and</span> <span m="4041950">then</span> <span
  m="4042060">we're</span> <span m="4042150">going</span> <span
  m="4042250">to</span> <span m="4042310">compute</span> <span
  m="4044640">values</span> <span m="4045160">of</span> <span
  m="4045260">the</span> <span m="4045340">basic</span> <span
  m="4045690">variables.</span></p><p><span m="4051880">So</span> <span
  m="4053060">our</span> <span m="4053320">objective</span> <span
  m="4053740">function</span> <span m="4054070">here</span> <span
  m="4055340">is</span> <span m="4055560">going</span> <span
  m="4055750">to</span> <span m="4055810">be</span> <span m="4056260">3</span>
  <span m="4056560">times</span> <span m="4056900">0</span> <span
  m="4057560">plus</span> <span m="4058180">1</span> <span
  m="4058470">times</span> <span m="4058760">0</span> <span
  m="4059600">plus</span> <span m="4060050">2</span> <span
  m="4060190">times</span> <span m="4060460">0,</span> <span m="4060690">which
  is</span> <span m="4061110">obviously</span> <span m="4061480">0.</span> <span
  m="4064900">And</span> <span m="4069840">the</span> <span
  m="4070000">values</span> <span m="4071570">x4,</span> <span
  m="4072140">of</span> <span m="4072230">course,</span> <span
  m="4073090">is</span> <span m="4073290">going</span> <span
  m="4073430">to</span> <span m="4073490">be--</span> <span
  m="4074810">because</span> <span m="4075120">all</span> <span
  m="4075230">of</span> <span m="4075300">these</span> <span
  m="4075480">are</span> <span m="4075510">0--</span> <span
  m="4075820">is</span> <span m="4075960">going</span> <span
  m="4076060">to</span> <span m="4076100">be</span> <span m="4076210">30.</span>
  <span m="4076590">x5</span> <span m="4076940">is</span> <span
  m="4077010">going</span> <span m="4077110">to</span> <span
  m="4077150">be</span> <span m="4077220">24.</span> <span
  m="4078140">And</span> <span m="4078460">x6</span> <span m="4078730">is</span>
  <span m="4078860">going</span> <span m="4078960">to</span> <span
  m="4079000">be</span> <span m="4079330">36.</span></p><p><span
  m="4079920">So</span> <span m="4080020">this is</span> <span
  m="4080090">kind</span> <span m="4080200">of</span> <span m="4080290">a</span>
  <span m="4080360">trivial</span> <span m="4080750">starting</span> <span
  m="4081140">point.</span> <span m="4082450">So</span> <span
  m="4082570">you</span> <span m="4082710">can</span> <span
  m="4082830">think</span> <span m="4082970">of</span> <span
  m="4083060">this</span> <span m="4083290">as</span> <span
  m="4084410">0,</span> <span m="4084750">0,</span> <span m="4085120">0,</span>
  <span m="4085660">the</span> <span m="4085770">solution</span> <span
  m="4086190">that</span> <span m="4086260">you're</span> <span
  m="4086380">looking</span> <span m="4086650">at,</span> <span
  m="4087130">30</span> <span m="4088796">24,</span> <span
  m="4090370">and</span> <span m="4090550">36.</span> <span
  m="4093360">So</span> <span m="4093510">that's</span> <span
  m="4093720">our</span> <span m="4096029">starting</span> <span
  m="4096439">point,</span> <span m="4097490">which</span> <span
  m="4097760">doesn't</span> <span m="4097979">really</span> <span
  m="4098140">tell</span> <span m="4098279">you</span> <span
  m="4098380">much.</span></p><p><span m="4100290">But</span> <span
  m="4101069">now</span> <span m="4101300">comes</span> <span
  m="4101540">the</span> <span m="4101649">key</span> <span
  m="4101880">step,</span> <span m="4103000">where</span> <span
  m="4103189">we're going to</span> <span m="4103569">do</span> <span
  m="4103790">something</span> <span m="4104189">that's</span> <span
  m="4104399">called</span> <span m="4104660">pivoting.</span> <span
  m="4106010">And</span> <span m="4106279">in</span> <span
  m="4106410">pivoting,</span> <span m="4107490">you're</span> <span
  m="4107689">going</span> <span m="4107910">to</span> <span
  m="4108029">swap</span> <span m="4109830">a</span> <span
  m="4109920">basic</span> <span m="4110649">able</span> <span
  m="4110910">with</span> <span m="4111040">a</span> <span
  m="4111120">non-basic</span> <span m="4111850">variable.</span> <span
  m="4113160">It</span> <span m="4113310">is</span> <span m="4114779">a</span>
  <span m="4114870">step</span> <span m="4115180">that</span> <span
  m="4115330">requires</span> <span m="4115700">some</span> <span
  m="4115960">intelligence.</span> <span m="4117630">But</span> <span
  m="4119050">the</span> <span m="4119180">basic</span> <span
  m="4119529">step</span> <span m="4119830">is</span> <span m="4120460">a</span>
  <span m="4120580">swap.</span></p><p><span m="4121609">So</span> <span
  m="4122050">one</span> <span m="4122270">of</span> <span
  m="4122330">the</span> <span m="4122410">basic</span> <span
  m="4122710">variables</span> <span m="4123189">is</span> <span
  m="4123290">going</span> <span m="4123410">to</span> <span
  m="4123450">become</span> <span m="4123700">a</span> <span
  m="4123740">non-basic</span> <span m="4123990">variable</span> <span
  m="4125290">and</span> <span m="4125470">vice</span> <span
  m="4125710">versa.</span> <span m="4127470">And</span> <span
  m="4128290">how</span> <span m="4128560">do</span> <span m="4128660">we</span>
  <span m="4129720">select</span> <span m="4130130">this?</span> <span
  m="4131359">Initially,</span> <span m="4131970">you</span> <span
  m="4132050">can</span> <span m="4132229">kind</span> <span
  m="4132399">of</span> <span m="4132460">do</span> <span
  m="4132560">this</span> <span m="4132729">in</span> <span
  m="4132819">an</span> <span m="4132939">arbitrary</span> <span
  m="4133340">way.</span> <span m="4134500">It</span> <span
  m="4134620">gets</span> <span m="4135740">a</span> <span
  m="4135810">little</span> <span m="4135979">more</span> <span
  m="4136130">subtle</span> <span m="4136500">as</span> <span
  m="4136590">you</span> <span m="4136740">go</span> <span
  m="4136930">along.</span> <span m="4137880">You</span> <span
  m="4138020">don't</span> <span m="4138149">want</span> <span
  m="4138279">to</span> <span m="4140020">do</span> <span
  m="4140140">things</span> <span m="4140859">in</span> <span
  m="4141670">a</span> <span m="4141740">random</span> <span
  m="4142120">way.</span></p><p><span m="4142840">But</span> <span
  m="4144540">let's</span> <span m="4144770">just</span> <span
  m="4144899">start</span> <span m="4145189">with</span> <span
  m="4146640">what</span> <span m="4147050">pivoting</span> <span
  m="4149180">actually</span> <span m="4151200">does</span> <span
  m="4151779">in</span> <span m="4151970">a</span> <span m="4152220">more</span>
  <span m="4152460">generic</span> <span m="4154090">setting.</span> <span
  m="4156260">The</span> <span m="4156930">basic</span> <span
  m="4157470">step</span> <span m="4157779">is</span> <span
  m="4158960">select</span> <span m="4159149">a</span> <span
  m="4159270">non-basic</span> <span m="4162149">variable--</span> <span
  m="4164420">let's</span> <span m="4164550">call</span> <span
  m="4164729">it</span> <span m="4164870">x</span> <span m="4165229">sub</span>
  <span m="4165550">e--</span> <span m="4167020">who's</span> <span
  m="4168350">coefficient</span> <span m="4172290">in</span> <span
  m="4172550">the</span> <span m="4172630">objective</span> <span
  m="4173170">function</span> <span m="4177660">is</span> <span
  m="4177870">positive.</span> <span m="4182189">You</span> <span
  m="4182310">can</span> <span m="4182500">always</span> <span
  m="4182950">redefine</span> <span m="4183609">things</span> <span
  m="4184060">if</span> <span m="4184340">you</span> <span
  m="4185170">can't</span> <span m="4185410">find</span> <span
  m="4185689">something</span> <span m="4185930">like</span> <span
  m="4186120">that.</span> <span m="4186890">But</span> <span
  m="4187390">we</span> <span m="4187550">won't</span> <span
  m="4187740">go</span> <span m="4187880">there.</span></p><p><span
  m="4188979">And</span> <span m="4189140">then</span> <span
  m="4189270">what</span> <span m="4189399">we're</span> <span
  m="4189510">going</span> <span m="4189620">to</span> <span
  m="4189670">do</span> <span m="4189810">is</span> <span
  m="4189939">we're</span> <span m="4190020">going</span> <span
  m="4190130">to</span> <span m="4190170">increase</span> <span
  m="4192180">the</span> <span m="4192260">value</span> <span
  m="4194600">of</span> <span m="4194800">x</span> <span m="4196860">as</span>
  <span m="4197040">much</span> <span m="4197300">as</span> <span
  m="4197450">possible.</span> <span m="4200430">And</span> <span
  m="4200770">we</span> <span m="4200890">always</span> <span
  m="4201210">have</span> <span m="4201430">constraints,</span> <span
  m="4201920">of</span> <span m="4202010">course.</span> <span
  m="4203330">So</span> <span m="4203540">we</span> <span m="4203850">can</span>
  <span m="4203990">do</span> <span m="4204120">that</span> <span
  m="4204380">without</span> <span m="4204820">violating</span> <span
  m="4207430">any</span> <span m="4207680">of</span> <span
  m="4207760">the</span> <span m="4207840">constraints.</span></p><p><span
  m="4215320">And</span> <span m="4215990">then</span> <span
  m="4216220">at</span> <span m="4216290">this</span> <span
  m="4216460">point,</span> <span m="4218240">variable</span> <span
  m="4220570">xe</span> <span m="4221890">becomes</span> <span
  m="4223710">basic.</span> <span m="4224910">So</span> <span
  m="4225070">it's</span> <span m="4225180">going</span> <span
  m="4225300">to</span> <span m="4225390">turn</span> <span
  m="4225750">into</span> <span m="4225860">the</span> <span
  m="4226680">left</span> <span m="4226970">hand</span> <span
  m="4227130">side.</span> <span m="4227410">It's</span> <span
  m="4227490">going</span> <span m="4227590">to</span> <span
  m="4227630">move</span> <span m="4227900">over.</span> <span
  m="4228230">You're</span> <span m="4228300">going</span> <span
  m="4228410">to</span> <span m="4228460">swap--</span> <span
  m="4228900">the</span> <span m="4229000">x1</span> <span
  m="4229420">might</span> <span m="4229570">be</span> <span
  m="4229700">over</span> <span m="4229840">here,</span> <span
  m="4231130">over</span> <span m="4231280">here,</span> <span
  m="4231890">and</span> <span m="4232720">you</span> <span
  m="4232850">got</span> <span m="4232930">to</span> <span
  m="4232970">rewrite</span> <span m="4233370">these</span> <span
  m="4233520">equations</span> <span m="4233970">so</span> <span
  m="4234100">the</span> <span m="4234190">x1</span> <span
  m="4234950">becomes</span> <span m="4235290">basic,</span> <span
  m="4235710">for</span> <span m="4235820">example,</span> <span
  m="4236350">over</span> <span m="4236560">to</span> <span
  m="4236610">the</span> <span m="4237180">left</span> <span
  m="4237390">hand</span> <span m="4237550">side,</span> <span
  m="4238280">and</span> <span m="4238990">the</span> <span
  m="4239440">variable</span> <span m="4239940">that</span> <span
  m="4240530">it</span> <span m="4240670">replaced</span> <span
  m="4241250">goes</span> <span m="4241460">over</span> <span
  m="4241660">to</span> <span m="4241720">the</span> <span
  m="4241820">right</span> <span m="4241980">hand side.</span></p><p><span
  m="4242760">So</span> <span m="4243240">you can</span> <span
  m="4243440">think</span> <span m="4243560">of</span> <span
  m="4243650">this</span> <span m="4243830">as</span> <span
  m="4244030">Gaussian</span> <span m="4244460">elimination,</span> <span
  m="4245640">except</span> <span m="4245960">with</span> <span
  m="4246110">inequalities.</span> <span m="4247700">There's</span> <span
  m="4247940">definitely</span> <span m="4248280">relationships</span> <span
  m="4248830">there,</span> <span m="4249960">if</span> <span
  m="4250090">you</span> <span m="4250310">recall</span> <span
  m="4250920">your</span> <span m="4251290">Gaussian</span> <span
  m="4251540">elimination.</span> <span m="4252430">If</span> <span
  m="4252570">you</span> <span m="4252650">don't,</span> <span m="4253060">don't
  worry</span> <span m="4253240">about</span> <span
  m="4253450">it.</span></p><p><span m="4255280">So</span> <span
  m="4256020">xe</span> <span m="4257330">becomes</span> <span
  m="4258190">basic,</span> <span m="4259180">and</span> <span
  m="4259370">some</span> <span m="4259560">other</span> <span
  m="4259760">variable</span> <span m="4262160">becomes</span> <span
  m="4263040">non-basic.</span> <span m="4270420">The</span> <span
  m="4270550">values</span> <span m="4271110">of</span> <span
  m="4271240">other</span> <span m="4271490">basic</span> <span
  m="4271850">variables</span> <span m="4275410">and</span> <span
  m="4275580">the</span> <span m="4275630">objective</span> <span
  m="4276060">function</span> <span m="4283480">may</span> <span
  m="4283650">change.</span> <span m="4288920">So</span> <span
  m="4289170">we'll</span> <span m="4289320">do</span> <span
  m="4290010">one</span> <span m="4291100">pivot</span> <span
  m="4291390">step</span> <span m="4292520">at</span> <span
  m="4292650">least,</span> <span m="4293530">so</span> <span
  m="4293670">you</span> <span m="4293760">get</span> <span m="4293870">a</span>
  <span m="4293930">sense</span> <span m="4294260">for</span> <span
  m="4294700">the</span> <span m="4295020">algebra</span> <span
  m="4295510">involved.</span> <span m="4295920">And</span> <span
  m="4297140">it</span> <span m="4297280">becomes</span> <span
  m="4297490">a</span> <span m="4297540">little</span> <span
  m="4297650">more</span> <span m="4297800">concrete.</span> <span
  m="4300420">To</span> <span m="4300600">motivate</span> <span
  m="4301000">you</span> <span m="4301980">further,</span> <span
  m="4302910">you'll</span> <span m="4302970">be</span> <span
  m="4303080">doing</span> <span m="4303300">this</span> <span
  m="4303560">in</span> <span m="4304340">problem</span> <span
  m="4304660">set</span> <span m="4304810">8</span> <span m="4307280">on</span>
  <span m="4307430">a</span> <span m="4307490">different</span> <span
  m="4307720">example.</span></p><p><span m="4311580">So</span> <span
  m="4312240">what</span> <span m="4312410">did</span> <span
  m="4312570">I</span> <span m="4312630">do</span> <span m="4312750">here</span>
  <span m="4313120">is</span> <span m="4314450">we're</span> <span
  m="4314590">going</span> <span m="4314830">to</span> <span
  m="4316630">select</span> <span m="4318540">a</span> <span
  m="4318690">non-basic</span> <span m="4319240">variable.</span> <span
  m="4319720">So</span> <span m="4319810">let's just</span> <span
  m="4320080">select</span> <span m="4320320">x1,</span> <span
  m="4321430">lexicographic</span> <span m="4322150">order</span> <span
  m="4322970">or</span> <span m="4323100">numeric</span> <span
  m="4323580">order,</span> <span m="4324510">let's</span> <span
  m="4325070">select</span> <span m="4325370">x1</span> <span
  m="4326520">is</span> <span m="4327430">selected.</span> <span
  m="4329600">That's</span> <span m="4329920">the</span> <span
  m="4330010">non-basic</span> <span m="4330600">variable.</span> <span
  m="4333590">And</span> <span m="4333880">what</span> <span
  m="4334020">I</span> <span m="4334060">want</span> <span m="4334240">to</span>
  <span m="4334310">do</span> <span m="4334580">is</span> <span
  m="4336880">increase</span> <span m="4337470">the</span> <span
  m="4337550">value</span> <span m="4337990">of</span> <span
  m="4338160">x1.</span> <span m="4339680">So</span> <span m="4340050">I</span>
  <span m="4340150">want</span> <span m="4340400">to</span> <span
  m="4340440">increase</span> <span m="4340970">it</span> <span
  m="4341570">without</span> <span m="4341970">violating</span> <span
  m="4342710">constraints.</span></p><p><span m="4349450">Now,</span> <span
  m="4349620">which</span> <span m="4349870">of</span> <span
  m="4349970">these</span> <span m="4350170">constraints</span> <span
  m="4350960">do</span> <span m="4351370">you</span> <span
  m="4351560">think</span> <span m="4351850">is</span> <span
  m="4352050">going</span> <span m="4352220">to</span> <span
  m="4352320">cause</span> <span m="4352670">trouble</span> <span
  m="4353950">first</span> <span m="4355160">with</span> <span
  m="4355350">respect</span> <span m="4355710">to</span> <span
  m="4356020">increasing</span> <span m="4356630">the</span> <span
  m="4356720">value</span> <span m="4357080">of</span> <span
  m="4357180">x1?</span> <span m="4357730">x1</span> <span m="4357890">is</span>
  <span m="4357990">now</span> <span m="4358120">0.</span> <span
  m="4359360">We're</span> <span m="4359670">at</span> <span
  m="4360110">ground</span> <span m="4361130">level,</span> <span
  m="4362400">we</span> <span m="4362500">have</span> <span
  m="4363040">all</span> <span m="4363310">0,</span> <span
  m="4364200">things</span> <span m="4364380">are</span> <span
  m="4364450">feasible.</span></p><p><span m="4365440">Now, as I start</span>
  <span m="4365890">increasing</span> <span m="4366400">x1,</span> <span
  m="4369180">remember,</span> <span m="4369490">you</span> <span
  m="4369570">have</span> <span m="4369800">non-negativity</span> <span
  m="4370650">constraints</span> <span m="4371860">associated</span> <span
  m="4372480">with</span> <span m="4373630">each</span> <span
  m="4373860">of</span> <span m="4373950">the</span> <span m="4374040">x4</span>
  <span m="4374460">values</span> <span m="4374860">as</span> <span
  m="4375000">well.</span> <span m="4375240">That's</span> <span
  m="4375420">what</span> <span m="4375600">these</span> <span
  m="4375840">basic</span> <span m="4376250">variables</span> <span
  m="4376670">represent.</span> <span m="4377840">So</span> <span
  m="4378040">don't</span> <span m="4378300">forget</span> <span
  m="4378530">the</span> <span m="4378610">fact</span> <span
  m="4378950">that</span> <span m="4380025">the</span> <span
  m="4380300">constraints</span> <span m="4380790">are</span> <span
  m="4380880">violated.</span> <span m="4382080">You</span> <span
  m="4382240">need</span> <span m="4382550">all</span> <span
  m="4382860">the</span> <span m="4382990">xi's</span> <span
  m="4384240">to</span> <span m="4384310">be</span> <span
  m="4384430">greater</span> <span m="4384630">than</span> <span
  m="4384760">or</span> <span m="4384830">equal</span> <span
  m="4385040">to</span> <span m="4385110">0.</span></p><p><span
  m="4386860">That</span> <span m="4387040">was</span> <span
  m="4387170">true</span> <span m="4387440">for</span> <span
  m="4387710">the</span> <span m="4388350">non-basic</span> <span
  m="4388910">variables.</span> <span m="4389760">It's</span> <span
  m="4389910">also</span> <span m="4390160">true</span> <span
  m="4390380">for</span> <span m="4390470">the</span> <span
  m="4390570">basic</span> <span m="4390860">variables.</span> <span
  m="4391870">So a</span> <span m="4392070">violation</span> <span
  m="4392610">of</span> <span m="4392690">a</span> <span
  m="4392740">constraint</span> <span m="4393700">implies</span> <span
  m="4394240">that</span> <span m="4395050">one</span> <span
  m="4395300">of</span> <span m="4395430">the</span> <span
  m="4395830">currently</span> <span m="4396380">basic</span> <span
  m="4396810">variables</span> <span m="4397840">goes</span> <span
  m="4398500">negative.</span> <span m="4399780">That's</span> <span
  m="4399980">exactly</span> <span m="4400460">equivalent</span> <span
  m="4400910">to</span> <span m="4400990">the</span> <span
  m="4401150">original</span> <span m="4402580">inequality</span> <span
  m="4403380">not</span> <span m="4403580">being</span> <span
  m="4403750">satisfied.</span></p><p><span m="4405400">So</span> <span
  m="4406020">which</span> <span m="4406280">of</span> <span
  m="4406360">these</span> <span m="4406550">constraints,</span> <span
  m="4407020">do</span> <span m="4407080">you</span> <span
  m="4407150">think,</span> <span m="4407360">is</span> <span
  m="4407470">going</span> <span m="4407570">to</span> <span
  m="4407620">cause</span> <span m="4408360">trouble</span> <span
  m="4408640">here?</span> <span m="4409240">Just</span> <span
  m="4410160">look</span> <span m="4410370">at</span> <span
  m="4410460">it,</span> <span m="4410650">and</span> <span
  m="4411430">should</span> <span m="4412260">be</span> <span
  m="4412450">able</span> <span m="4412620">to</span> <span
  m="4412780">look</span> <span m="4413020">at</span> <span
  m="4413190">the</span> <span m="4413330">three</span> <span
  m="4413440">equations</span> <span m="4414310">and</span> <span
  m="4414460">tell</span> <span m="4414660">me,</span> <span
  m="4414880">as</span> <span m="4415160">I</span> <span
  m="4415250">increase</span> <span m="4415640">the</span> <span
  m="4415700">value</span> <span m="4416010">of</span> <span
  m="4416110">x1,</span> <span m="4417020">where</span> <span
  m="4417180">am</span> <span m="4417270">I</span> <span
  m="4417320">going</span> <span m="4417480">to</span> <span
  m="4417520">hit</span> <span m="4418390">my</span> <span
  m="4418530">limit?</span> <span m="4420510">x6,</span> <span
  m="4421160">yes,</span> <span m="4421430">absolutely</span> <span
  m="4421820">correct.</span></p><p><span m="4422570">So</span> <span
  m="4422780">that's</span> <span m="4422940">because</span> <span
  m="4423170">of</span> <span m="4423240">the</span> <span
  m="4423310">minus</span> <span m="4423620">4</span> <span
  m="4423880">here.</span> <span m="4424150">This</span> <span
  m="4424280">is</span> <span m="4424330">a</span> <span m="4424400">big</span>
  <span m="4424580">multiplier.</span> <span m="4425520">I</span> <span
  m="4425610">got</span> <span m="4426720">a</span> <span
  m="4426810">minus</span> <span m="4427050">1</span> <span
  m="4427260">here,</span> <span m="4427480">a</span> <span
  m="4427540">minus</span> <span m="4427830">2</span> <span
  m="4427930">here,</span> <span m="4428210">and a</span> <span
  m="4428250">minus</span> <span m="4428530">4</span> <span
  m="4428740">here.</span> <span m="4429720">And if</span> <span
  m="4430110">we</span> <span m="4430180">just</span> <span
  m="4430330">look</span> <span m="4430440">at</span> <span
  m="4430530">4,</span> <span m="4431930">the</span> <span
  m="4432330">magnitudes,</span> <span m="4433040">4</span> <span
  m="4433320">is</span> <span m="4433410">bigger</span> <span
  m="4433590">than</span> <span m="4433740">2</span> <span m="4433980">and
  is</span> <span m="4434130">bigger</span> <span m="4434300">than</span> <span
  m="4434430">1,</span> <span m="4435040">so</span> <span
  m="4435160">it's</span> <span m="4435270">going</span> <span
  m="4435380">to</span> <span m="4435420">be</span> <span
  m="4435530">that</span> <span m="4435730">third</span> <span
  m="4435960">constraint.</span></p><p><span m="4437090">So</span> <span
  m="4438980">third</span> <span m="4439370">constraint--</span> <span
  m="4441170">you</span> <span m="4441310">can</span> <span
  m="4441420">obviously</span> <span m="4442310">compute</span> <span
  m="4442670">this</span> <span m="4442850">numerically</span> <span
  m="4443400">or</span> <span m="4443480">mechanically.</span> <span
  m="4444510">It</span> <span m="4444660">was</span> <span
  m="4444830">just</span> <span m="4444990">easier</span> <span
  m="4445270">to</span> <span m="4445360">do</span> <span
  m="4445490">this</span> <span m="4446730">in</span> <span
  m="4446890">this</span> <span m="4447050">example</span> <span
  m="4448140">by</span> <span m="4448670">eyeballing</span> <span
  m="4449140">it.</span> <span m="4450320">And</span> <span
  m="4450500">so</span> <span m="4451160">third</span> <span
  m="4451360">constraint</span> <span m="4451740">is</span> <span
  m="4451810">the</span> <span m="4452010">tightest</span> <span
  m="4452290">one.</span> <span m="4453490">And</span> <span
  m="4454260">it</span> <span m="4454420">limits</span> <span
  m="4454720">how</span> <span m="4454810">much</span> <span
  m="4455010">we</span> <span m="4455100">can</span> <span
  m="4455510">increase</span> <span m="4455930">x1.</span> <span
  m="4456780">So</span> <span m="4456900">I'm</span> <span
  m="4457000">going</span> <span m="4457160">to</span> <span
  m="4457440">do</span> <span m="4457990">my</span> <span
  m="4458160">second</span> <span m="4458450">step</span> <span
  m="4458710">up</span> <span m="4458870">there,</span> <span
  m="4459840">which</span> <span m="4459940">corresponds</span> <span
  m="4460500">to</span> <span m="4460880">rewriting</span> <span
  m="4462610">x1</span> <span m="4463990">as</span> <span
  m="4464960">these</span> <span m="4465240">other</span> <span
  m="4465760">variables.</span></p><p><span m="4466860">And</span> <span
  m="4467060">now,</span> <span m="4467230">I</span> <span
  m="4467360">got</span> <span m="4467660">x1</span> <span m="4468240">on</span>
  <span m="4468450">the</span> <span m="4469070">left</span> <span
  m="4469400">hand</span> <span m="4469580">side</span> <span
  m="4470380">and</span> <span m="4470590">x6</span> <span m="4471480">on</span>
  <span m="4471640">the</span> <span m="4471750">right</span> <span
  m="4471970">hand</span> <span m="4472160">side.</span> <span
  m="4473100">And</span> <span m="4473260">now, it's</span> <span
  m="4473540">just</span> <span m="4473850">merely</span> <span
  m="4474260">a</span> <span m="4474310">matter</span> <span
  m="4474680">of</span> <span m="4474770">substitution.</span> <span
  m="4476020">Once</span> <span m="4476160">I've</span> <span
  m="4476350">done</span> <span m="4476740">this,</span> <span
  m="4477540">I'm</span> <span m="4477680">just</span> <span
  m="4477850">going</span> <span m="4478080">to</span> <span
  m="4478460">jam</span> <span m="4478830">through</span> <span
  m="4479650">and</span> <span m="4479870">go</span> <span m="4480090">in</span>
  <span m="4480590">and</span> <span m="4480720">I'm</span> <span
  m="4480800">going</span> <span m="4480930">to</span> <span
  m="4481040">rewrite</span> <span m="4487110">the</span> <span
  m="4487300">other</span> <span m="4487580">equations</span> <span
  m="4494505">with</span> <span m="4495460">x6</span> <span
  m="4498130">on</span> <span m="4498330">the</span> <span
  m="4499200">right</span> <span m="4499430">hand</span> <span
  m="4499610">side.</span> <span m="4502770">And</span> <span
  m="4503280">that</span> <span m="4503510">is,</span> <span
  m="4503780">I'm</span> <span m="4503880">going</span> <span
  m="4504020">to</span> <span m="4504070">replace</span> <span
  m="4506970">x1</span> <span m="4509530">with</span> <span
  m="4510470">the</span> <span m="4510670">eyeball</span> <span
  m="4510910">equation.</span> <span m="4512785">And</span> <span
  m="4513170">that's</span> <span m="4513420">really</span> <span
  m="4513630">a</span> <span m="4513710">simple</span> <span
  m="4514030">substitution.</span></p><p><span m="4515850">So</span> <span
  m="4515980">at</span> <span m="4516070">this</span> <span
  m="4516230">point,</span> <span m="4516480">what's</span> <span
  m="4516660">happened</span> <span m="4517040">is,</span> <span
  m="4517880">because</span> <span m="4518500">the</span> <span
  m="4518610">third</span> <span m="4518890">constraint</span> <span
  m="4519490">representing</span> <span m="4520100">x6</span> <span
  m="4521170">was</span> <span m="4521360">the</span> <span
  m="4521450">one</span> <span m="4521670">that</span> <span
  m="4521780">was</span> <span m="4521960">chosen,</span> <span
  m="4522860">what's</span> <span m="4523040">happened</span> <span
  m="4523420">is</span> <span m="4523560">that</span> <span
  m="4524760">x1</span> <span m="4525290">and</span> <span m="4525400">x6</span>
  <span m="4525860">are</span> <span m="4525950">going</span> <span
  m="4526210">to</span> <span m="4526300">interchange</span> <span
  m="4526610">roles.</span> <span m="4528440">x1</span> <span
  m="4528960">was</span> <span m="4529250">non-basic,</span> <span
  m="4530050">it's</span> <span m="4530190">going</span> <span
  m="4530290">to</span> <span m="4530330">become</span> <span
  m="4530610">basic.</span> <span m="4531810">x6</span> <span
  m="4532250">was</span> <span m="4532430">basic</span> <span
  m="4532850">and</span> <span m="4532940">is</span> <span
  m="4533030">going</span> <span m="4533130">to</span> <span
  m="4533170">become</span> <span m="4533410">non-basic.</span> <span
  m="4534680">And</span> <span m="4534960">that's</span> <span
  m="4536076">basically</span> <span m="4536820">the</span> <span
  m="4536950">essence</span> <span m="4537520">of</span> <span
  m="4537670">the</span> <span m="4537750">simplex</span> <span
  m="4538110">algorithm.</span></p><p><span m="4538910">The</span> <span
  m="4539030">iteration</span> <span m="4539940">and</span> <span
  m="4540080">then</span> <span m="4540190">the</span> <span
  m="4540270">convergence</span> <span m="4540800">and</span> <span
  m="4540880">all</span> <span m="4541000">of</span> <span
  m="4541090">that</span> <span m="4541850">is,</span> <span
  m="4542890">as</span> <span m="4543070">I</span> <span
  m="4543130">mentioned,</span> <span m="4545000">going</span> <span
  m="4545290">to</span> <span m="4545590">require</span> <span
  m="4547550">getting</span> <span m="4547890">to</span> <span
  m="4548010">a</span> <span m="4548090">point</span> <span
  m="4548400">where</span> <span m="4548990">the</span> <span
  m="4549170">optimality</span> <span m="4549740">is</span> <span
  m="4549860">obvious,</span> <span m="4550630">but</span> <span
  m="4550770">we</span> <span m="4550880">won't</span> <span
  m="4551010">be</span> <span m="4551100">doing</span> <span
  m="4551750">any</span> <span m="4552000">proofs</span> <span
  m="4553240">corresponding</span> <span m="4553420">to</span> <span
  m="4553770">conversions</span> <span m="4555310">for</span> <span
  m="4555490">simplex</span> <span m="4555980">or</span> <span
  m="4556230">any</span> <span m="4556450">other</span> <span
  m="4557120">specific</span> <span m="4557630">LP</span> <span
  m="4557900">techniques</span> <span m="4558920">in</span> <span
  m="4559550">this</span> <span m="4559710">class.</span> <span
  m="4561130">Maybe</span> <span m="4561400">some</span> <span
  m="4561710">constraint</span> <span m="4562140">techniques,</span> <span
  m="4562540">I</span> <span m="4562920">take</span> <span
  m="4563050">back</span> <span m="4563220">what</span> <span
  m="4563330">I</span> <span m="4563380">said,</span> <span
  m="4563920">but</span> <span m="4564040">certainly</span> <span
  m="4564260">not</span> <span m="4564440">for</span> <span
  m="4564560">simplex.</span></p><p><span m="4566010">But</span> <span
  m="4566400">I</span> <span m="4566520">just</span> <span
  m="4566660">want</span> <span m="4566770">to</span> <span
  m="4566810">give</span> <span m="4566920">you</span> <span
  m="4567010">a</span> <span m="4567060">sense</span> <span
  m="4567930">for</span> <span m="4568840">the</span> <span
  m="4569010">flow</span> <span m="4569320">here.</span> <span
  m="4570080">And</span> <span m="4570260">so</span> <span
  m="4570660">let's</span> <span m="4570860">just</span> <span
  m="4571830">go</span> <span m="4572060">through</span> <span
  m="4572840">this</span> <span m="4573290">last</span> <span
  m="4573810">thing</span> <span m="4574030">here</span> <span
  m="4574400">in</span> <span m="4574540">terms</span> <span
  m="4574840">of</span> <span m="4575280">finishing</span> <span
  m="4575840">off</span> <span m="4576590">the</span> <span
  m="4576770">pivot</span> <span m="4577300">xi's.</span> <span
  m="4578680">And</span> <span m="4580550">I</span> <span
  m="4580690">want</span> <span m="4580830">to</span> <span
  m="4580870">show</span> <span m="4581070">you</span> <span
  m="4582320">what</span> <span m="4583190">the</span> <span
  m="4583380">equations</span> <span m="4583900">look</span> <span
  m="4584200">like.</span> <span m="4585240">And</span> <span
  m="4586250">if</span> <span m="4586420">you</span> <span
  m="4586550">just</span> <span m="4586760">keep</span> <span
  m="4586920">doing</span> <span m="4587130">that,</span> <span
  m="4587910">at</span> <span m="4588060">some</span> <span
  m="4588270">point,</span> <span m="4589960">you'll</span> <span
  m="4590380">converge.</span></p><p><span m="4593680">And</span> <span
  m="4593890">so</span> <span m="4594030">what</span> <span
  m="4594160">happens</span> <span m="4594430">here</span> <span
  m="4594730">is</span> <span m="4594900">you</span> <span
  m="4595030">have</span> <span m="4595230">z</span> <span
  m="4595590">equals</span> <span m="4595950">27</span> <span
  m="4597350">plus</span> <span m="4597820">x2</span> <span
  m="4598320">divided</span> <span m="4598680">by</span> <span
  m="4598830">4</span> <span m="4599990">plus</span> <span m="4600380">x3</span>
  <span m="4600800">divided</span> <span m="4601150">by</span> <span
  m="4601300">2</span> <span m="4602150">minus</span> <span
  m="4602540">3x6</span> <span m="4603660">divided</span> <span
  m="4603960">by</span> <span m="4604100">4.</span> <span m="4605890">x1</span>
  <span m="4606240">equals--</span> <span m="4607802">so</span> <span
  m="4608190">there's</span> <span m="4608390">a</span> <span
  m="4608660">bunch</span> <span m="4608870">of</span> <span
  m="4608940">algebra</span> <span m="4609290">here</span> <span
  m="4609490">that</span> <span m="4609610">I'm</span> <span
  m="4609740">obviously</span> <span m="4610870">skipping</span> <span
  m="4611260">over,</span> <span m="4614550">but</span> <span
  m="4614860">it's</span> <span m="4615060">simple</span> <span
  m="4615410">algebra.</span> <span m="4617470">And</span> <span
  m="4617790">I</span> <span m="4617840">have</span> <span m="4618020">x4</span>
  <span m="4618345">over</span> <span m="4618670">here,</span> <span
  m="4620410">21</span> <span m="4621730">minus</span> <span
  m="4622120">3x2</span> <span m="4622950">divided</span> <span
  m="4623230">by</span> <span m="4623360">4</span> <span
  m="4624440">minus</span> <span m="4624740">5x3</span> <span
  m="4626010">divided</span> <span m="4626270">by</span> <span
  m="4626390">2</span> <span m="4627390">plus</span> <span m="4627810">x6</span>
  <span m="4628110">divided</span> <span m="4628400">by</span> <span
  m="4628510">4,</span> <span m="4629470">and</span> <span
  m="4629570">then</span> <span m="4629670">one</span> <span
  m="4629840">last</span> <span m="4630160">thing</span> <span
  m="4630320">here.</span></p><p><span m="4643970">So</span> <span
  m="4644040">that's</span> <span m="4644270">my</span> <span
  m="4645870">pivot</span> <span m="4646150">step,</span> <span
  m="4646830">that</span> <span m="4646980">I've</span> <span
  m="4647060">flipped</span> <span m="4647440">x1</span> <span
  m="4648160">and</span> <span m="4648680">x6.</span> <span
  m="4649870">So</span> <span m="4650000">now</span> <span
  m="4650120">you</span> <span m="4650280">ask,</span> <span
  m="4650760">what</span> <span m="4650930">was</span> <span
  m="4651120">the</span> <span m="4651230">point?</span> <span
  m="4652730">What</span> <span m="4652920">was</span> <span
  m="4653040">the</span> <span m="4653120">point</span> <span
  m="4653410">of</span> <span m="4653510">this?</span> <span
  m="4654150">Well,</span> <span m="4655850">the</span> <span
  m="4655970">point</span> <span m="4656220">of</span> <span
  m="4656320">this</span> <span m="4656530">was</span> <span
  m="4656830">that</span> <span m="4657450">you</span> <span
  m="4657600">actually</span> <span m="4657950">increased</span> <span
  m="4659120">the</span> <span m="4659290">objective</span> <span
  m="4659800">function</span> <span m="4660240">value</span> <span
  m="4661230">and,</span> <span m="4661350">in</span> <span
  m="4661410">this</span> <span m="4661580">particular</span> <span
  m="4661890">case,</span> <span m="4662150">quite</span> <span
  m="4662390">significantly,</span> <span m="4664190">while</span> <span
  m="4664730">maintaining</span> <span
  m="4665270">correctness.</span></p><p><span m="4666280">And</span> <span
  m="4666460">so</span> <span m="4666830">let</span> <span m="4666990">me</span>
  <span m="4667070">just</span> <span m="4669770">make</span> <span
  m="4670020">these</span> <span m="4670200">observations</span> <span
  m="4671570">and</span> <span m="4671910">conclude</span> <span
  m="4672330">here,</span> <span m="4673140">because</span> <span
  m="4673370">then</span> <span m="4673520">that</span> <span
  m="4673960">gets</span> <span m="4674160">us</span> <span
  m="4674280">to</span> <span m="4674340">the</span> <span
  m="4674420">point</span> <span m="4674650">where</span> <span
  m="4674830">you've</span> <span m="4674960">seen</span> <span
  m="4675760">the</span> <span m="4675880">details</span> <span
  m="4676340">of</span> <span m="4676880">one</span> <span
  m="4677260">pivot</span> <span m="4677550">step.</span> <span
  m="4678130">And</span> <span m="4678260">you</span> <span
  m="4678340">can</span> <span m="4678540">imagine</span> <span
  m="4678740">applying</span> <span m="4679080">it</span> <span
  m="4679760">over</span> <span m="4679940">and</span> <span
  m="4680040">over</span> <span m="4681040">to a</span> <span
  m="4681240">convergence.</span> <span m="4682840">And</span> <span
  m="4685100">let's</span> <span m="4685320">just</span> <span
  m="4685460">look</span> <span m="4685600">at</span> <span
  m="4685670">the</span> <span m="4685770">original</span> <span
  m="4686970">basic</span> <span m="4687470">solution,</span> <span
  m="4689590">which</span> <span m="4690270">as</span> <span
  m="4690420">you</span> <span m="4690510">recall</span> <span
  m="4690930">was</span> <span m="4691890">0, 0,</span> <span
  m="4692341">0,</span> <span m="4693694">30,</span> <span
  m="4695047">24,</span> <span m="4696210">and</span> <span
  m="4696380">36.</span> <span m="4697380">And</span> <span
  m="4697520">this</span> <span m="4697630">is</span> <span
  m="4697730">simply</span> <span m="4698030">x1</span> <span
  m="4698450">through</span> <span m="4698630">x6.</span></p><p><span
  m="4700370">This</span> <span m="4700680">original</span> <span
  m="4701040">basic</span> <span m="4701370">solution</span> <span
  m="4702710">suddenly</span> <span m="4703100">satisfies</span> <span
  m="4705360">these</span> <span m="4705650">equations--</span> <span
  m="4706820">equations</span> <span m="4707390">II,</span> <span
  m="4708140">if</span> <span m="4708300">you</span> <span
  m="4708370">just</span> <span m="4708540">put</span> <span
  m="4708680">them</span> <span m="4708830">in</span> <span
  m="4708950">there.</span> <span m="4710250">And</span> <span
  m="4711700">it</span> <span m="4711850">makes</span> <span
  m="4712050">sense</span> <span m="4712400">that</span> <span
  m="4712700">it</span> <span m="4712890">will</span> <span
  m="4713000">have</span> <span m="4713230">the</span> <span
  m="4713290">objective</span> <span m="4713710">value</span> <span
  m="4714700">of</span> <span m="4714820">0,</span> <span
  m="4715800">given</span> <span m="4716060">equivalents,</span> <span
  m="4717250">but</span> <span m="4717430">you</span> <span
  m="4717530">can</span> <span m="4717650">verify</span> <span
  m="4718030">that</span> <span m="4718350">by</span> <span
  m="4718500">saying</span> <span m="4719040">that</span> <span
  m="4719180">you</span> <span m="4719260">have</span> <span
  m="4719790">27--</span> <span m="4721410">the</span> <span
  m="4721580">original</span> <span m="4722540">had the</span> <span
  m="4722900">objective</span> <span m="4723250">value</span> <span
  m="4723530">of</span> <span m="4723610">0,</span> <span
  m="4723950">because</span> <span m="4724480">all</span> <span
  m="4724690">the</span> <span m="4724810">x</span> <span m="4725150">sub</span>
  <span m="4725320">1,</span> <span m="4725870">x2,</span> <span
  m="4726000">x3</span> <span m="4726420">were</span> <span
  m="4726500">0,</span> <span m="4727230">so</span> <span
  m="4727320">that</span> <span m="4727430">was</span> <span
  m="4727510">an</span> <span m="4727610">easy</span> <span
  m="4728340">check</span> <span m="4728810">in</span> <span
  m="4729290">the</span> <span m="4729660">set</span> <span
  m="4729870">of</span> <span m="4729950">equations</span> <span
  m="4730420">corresponding</span> <span m="4730930">to</span> <span
  m="4731050">the</span> <span m="4731160">first</span> <span
  m="4731400">set,</span> <span m="4731660">which</span> <span
  m="4731930">I've</span> <span m="4732070">erased at</span> <span
  m="4732360">this</span> <span m="4732580">point.</span> <span
  m="4733360">But</span> <span m="4735700">no</span> <span
  m="4735850">matter.</span></p><p><span m="4736980">And</span> <span
  m="4737240">if</span> <span m="4737340">you</span> <span
  m="4737420">look</span> <span m="4737560">at</span> <span
  m="4737660">what</span> <span m="4737810">I</span> <span
  m="4737890">have</span> <span m="4738090">here,</span> <span
  m="4739330">I</span> <span m="4739430">have</span> <span m="4739500">36</span>
  <span m="4740960">equals</span> <span m="4741820">0.</span> <span
  m="4743140">So</span> <span m="4743280">the</span> <span
  m="4743390">objective</span> <span m="4743760">value</span> <span
  m="4744090">here</span> <span m="4744860">is</span> <span
  m="4745090">0.</span> <span m="4745580">It</span> <span
  m="4745790">matches</span> <span m="4746150">what</span> <span
  m="4746280">you</span> <span m="4746370">had</span> <span
  m="4746590">before.</span> <span m="4747860">But</span> <span
  m="4748040">the</span> <span m="4748110">basic</span> <span
  m="4748430">solution</span> <span m="4748860">for</span> <span
  m="4749160">II,</span> <span m="4756500">I'm</span> <span
  m="4756670">going</span> <span m="4756800">to</span> <span
  m="4756850">set</span> <span m="4757710">the</span> <span
  m="4757840">non-basic</span> <span m="4758580">values.</span></p><p><span
  m="4759360">So</span> <span m="4759370">what</span> <span
  m="4759520">is</span> <span m="4759650">a</span> <span
  m="4759720">solution</span> <span m="4760120">here?</span> <span
  m="4762170">The</span> <span m="4762560">non-basic</span> <span
  m="4763260">values</span> <span m="4766300">are</span> <span
  m="4766510">0.</span> <span m="4767350">So</span> <span m="4767550">the</span>
  <span m="4767660">solution</span> <span m="4768130">is</span> <span
  m="4768230">going</span> <span m="4768450">to</span> <span
  m="4768530">be</span> <span m="4770140">9,</span> <span
  m="4771130">because</span> <span m="4772240">9</span> <span
  m="4772700">is</span> <span m="4774540">non-basic.</span> <span
  m="4775970">x1</span> <span m="4776390">is</span> <span m="4776490">now</span>
  <span m="4776850">non-basic.</span> <span m="4777950">x2</span> <span
  m="4778320">and</span> <span m="4778400">x3</span> <span
  m="4778750">are</span> <span m="4778820">still</span> <span
  m="4779090">basic.</span> <span m="4780610">And</span> <span
  m="4780690">then</span> <span m="4780800">I</span> <span
  m="4780840">have</span> <span m="4780970">21</span> <span
  m="4781420">and</span> <span m="4781550">6.</span> <span
  m="4782840">And</span> <span m="4783150">x6</span> <span
  m="4783580">now</span> <span m="4783760">has</span> <span
  m="4783870">become</span> <span m="4784090">basic.</span></p><p><span
  m="4785080">So</span> <span m="4785330">the way</span> <span
  m="4785600">I</span> <span m="4785700">get</span> <span
  m="4785890">this</span> <span m="4786010">solution</span> <span
  m="4786470">is</span> <span m="4786560">simply</span> <span
  m="4786890">by</span> <span m="4787380">plugging</span> <span
  m="4788120">in</span> <span m="4788950">0's</span> <span m="4790040">on</span>
  <span m="4790230">this</span> <span m="4790400">aside.</span> <span
  m="4792000">And</span> <span m="4792180">I</span> <span m="4792240">get</span>
  <span m="4792430">9,</span> <span m="4792905">21,</span> <span
  m="4793380">and</span> <span m="4793580">6,</span> <span
  m="4794100">because</span> <span m="4794520">I</span> <span
  m="4794590">just</span> <span m="4794790">plugged</span> <span
  m="4795040">in</span> <span m="4795140">0's</span> <span m="4795550">on</span>
  <span m="4795640">the</span> <span m="4795720">right</span> <span
  m="4795870">hand</span> <span m="4796020">side.</span> <span
  m="4796910">So</span> <span m="4796950">that's</span> <span
  m="4797210">how</span> <span m="4797390">I</span> <span m="4797490">got</span>
  <span m="4797670">a</span> <span m="4797720">new</span> <span
  m="4797920">solution.</span></p><p><span m="4799080">And</span> <span
  m="4799370">if</span> <span m="4799460">you</span> <span
  m="4799560">look</span> <span m="4799680">at</span> <span
  m="4799760">the</span> <span m="4799820">objective</span> <span
  m="4800320">value</span> <span m="4802020">for</span> <span
  m="4802220">this,</span> <span m="4803400">the</span> <span
  m="4803730">objective</span> <span m="4804160">value,</span> <span
  m="4808180">you</span> <span m="4808370">can</span> <span
  m="4808510">look</span> <span m="4808670">at</span> <span
  m="4808740">this</span> <span m="4808840">objective</span> <span
  m="4809250">value</span> <span m="4809670">simply</span> <span
  m="4809980">by</span> <span m="4810120">looking</span> <span
  m="4810410">at</span> <span m="4810510">the</span> <span
  m="4811170">original</span> <span m="4812290">problem.</span> <span
  m="4813200">And the</span> <span m="4813610">original</span> <span
  m="4814010">problem</span> <span m="4815360">had</span> <span
  m="4816110">3x1</span> <span m="4817630">plus</span> <span
  m="4817990">x2</span> <span m="4819090">plus</span> <span
  m="4819370">x3</span> <span m="4820670">as</span> <span m="4820910">the</span>
  <span m="4820990">objective</span> <span m="4821620">value.</span> <span
  m="4822640">And</span> <span m="4822710">so</span> <span m="4822820">if</span>
  <span m="4822890">you</span> <span m="4822980">go</span> <span
  m="4823100">off</span> <span m="4823360">and</span> <span
  m="4823460">you</span> <span m="4823600">see,</span> <span
  m="4823910">well,</span> <span m="4824040">that</span> <span m="4824460">you
  had</span> <span m="4824550">0's</span> <span m="4824810">for</span> <span
  m="4824950">the</span> <span m="4825020">other</span> <span
  m="4825170">ones,</span> <span m="4825900">but</span> <span
  m="4825940">you</span> <span m="4825990">have</span> <span
  m="4826110">3</span> <span m="4826390">times</span> <span
  m="4828690">9,</span> <span m="4829590">so</span> <span m="4829730">we</span>
  <span m="4829770">have</span> <span m="4829890">an</span> <span
  m="4829960">objective</span> <span m="4830330">value</span> <span
  m="4830690">of</span> <span m="4830960">27.</span></p><p><span
  m="4833230">So</span> <span m="4833400">this</span> <span
  m="4834100">flip</span> <span m="4834980">of</span> <span
  m="4835600">our</span> <span m="4835750">pivot</span> <span
  m="4836710">basically</span> <span m="4837250">got</span> <span
  m="4837490">you</span> <span m="4837650">from</span> <span
  m="4837840">an</span> <span m="4838120">objective</span> <span
  m="4838540">value</span> <span m="4838870">of</span> <span
  m="4838960">0,</span> <span m="4839920">while</span> <span
  m="4840130">maintaining</span> <span m="4840630">correctness,</span> <span
  m="4841490">to</span> <span m="4841630">an</span> <span
  m="4841700">objective</span> <span m="4842100">value</span> <span
  m="4842480">of</span> <span m="4843220">27.</span> <span
  m="4845190">And</span> <span m="4846640">you</span> <span
  m="4846730">can</span> <span m="4846830">look</span> <span
  m="4846960">at</span> <span m="4847020">this</span> <span
  m="4847230">in</span> <span m="4847520">the</span> <span
  m="4847740">notes</span> <span m="4848130">or</span> <span
  m="4848290">in</span> <span m="4848390">CLRS,</span> <span
  m="4849440">but</span> <span m="4849540">you</span> <span
  m="4849630">have</span> <span m="4849770">to</span> <span
  m="4849850">do</span> <span m="4850020">two</span> <span
  m="4850300">more</span> <span m="4850570">pivots</span> <span
  m="4851500">corresponding</span> <span m="4852040">to</span> <span
  m="4852200">two</span> <span m="4852380">other</span> <span
  m="4852580">variables--</span> <span m="4853720">the</span> <span
  m="4853840">same</span> <span m="4854470">grungy</span> <span
  m="4854820">stuff</span> <span m="4855120">that</span> <span
  m="4855230">I</span> <span m="4855280">went</span> <span
  m="4855470">through</span> <span m="4855610">here,</span> <span
  m="4856650">substitution</span> <span m="4857540">after</span> <span
  m="4857870">selection.</span> <span m="4859100">And</span> <span
  m="4859270">the</span> <span m="4859340">objective</span> <span
  m="4859690">value</span> <span m="4860080">is</span> <span
  m="4860210">going</span> <span m="4860340">to</span> <span
  m="4860390">increase.</span></p><p><span m="4861420">And</span> <span
  m="4861560">you</span> <span m="4861640">might</span> <span
  m="4861820">ask,</span> <span m="4862500">how</span> <span
  m="4862650">do</span> <span m="4862750">I</span> <span m="4862850">know</span>
  <span m="4863600">that</span> <span m="4863790">I'm</span> <span
  m="4863930">done?</span> <span m="4865730">And</span> <span
  m="4866090">so</span> <span m="4866210">that</span> <span
  m="4866330">was</span> <span m="4866410">the</span> <span
  m="4866470">last</span> <span m="4866770">thing</span> <span
  m="4866930">here,</span> <span m="4867190">which</span> <span
  m="4867350">is</span> <span m="4869060">increase</span> <span
  m="4869460">the</span> <span m="4869540">value</span> <span
  m="4870010">until</span> <span m="4871420">it</span> <span
  m="4871600">becomes</span> <span m="4871870">obvious--</span> <span
  m="4873530">no,</span> <span m="4873700">this</span> <span
  m="4873820">was</span> <span m="4873940">pivoting,</span> <span
  m="4874280">I'm</span> <span m="4874360">sorry--</span> <span
  m="4875400">increase</span> <span m="4875770">the</span> <span
  m="4875850">value</span> <span m="4878100">pivot</span> <span
  m="4878330">until</span> <span m="4878670">it</span> <span
  m="4878740">becomes</span> <span m="4878990">obvious</span> <span
  m="4879890">what</span> <span m="4882070">the</span> <span
  m="4882130">optimum</span> <span m="4882550">is.</span> <span
  m="4883240">And</span> <span m="4883870">what</span> <span
  m="4884060">ends</span> <span m="4884390">up</span> <span
  m="4884480">happening</span> <span m="4884920">is</span> <span
  m="4885810">you</span> <span m="4885950">end</span> <span
  m="4886220">up</span> <span m="4886420">with</span> <span
  m="4886590">an</span> <span m="4886660">objective</span> <span
  m="4887210">function.</span></p><p><span m="4888320">In</span> <span
  m="4888400">this</span> <span m="4888620">case,</span> <span
  m="4889150">the</span> <span m="4889250">objective</span> <span
  m="4889620">function</span> <span m="4889970">mind</span> <span
  m="4890350">you,</span> <span m="4891210">this</span> <span
  m="4891450">thing</span> <span m="4891610">over</span> <span
  m="4891760">here</span> <span m="4892590">is</span> <span
  m="4892760">the</span> <span m="4892830">objective</span> <span
  m="4893260">function.</span> <span m="4894100">And</span> <span
  m="4894180">notice</span> <span m="4894510">that</span> <span
  m="4895060">it</span> <span m="4895220">has</span> <span m="4895990">a</span>
  <span m="4896050">negative</span> <span m="4896590">coefficient</span> <span
  m="4897790">on</span> <span m="4898762">the</span> <span
  m="4901990">variable</span> <span m="4902920">that</span> <span
  m="4903040">was</span> <span m="4903180">actually</span> <span
  m="4903570">the</span> <span m="4904490">part</span> <span
  m="4904800">of</span> <span m="4904880">the</span> <span
  m="4904960">first</span> <span m="4905310">pivot.</span> <span
  m="4906185">So</span> <span m="4906550">x1</span> <span m="4907000">and</span>
  <span m="4907150">x6</span> <span m="4907360">were a</span> <span
  m="4907520">part</span> <span m="4907720">of</span> <span
  m="4907780">the</span> <span m="4907860">first</span> <span
  m="4908150">pivot.</span> <span m="4908850">And</span> <span
  m="4909070">this</span> <span m="4909710">got</span> <span
  m="4909900">a</span> <span m="4909960">negative</span> <span
  m="4910320">coefficient.</span></p><p><span m="4911430">So</span> <span
  m="4911820">what</span> <span m="4912010">ends</span> <span
  m="4912180">up</span> <span m="4912270">happening</span> <span
  m="4912570">here</span> <span m="4912810">is</span> <span
  m="4912900">you</span> <span m="4913010">end</span> <span
  m="4913180">up</span> <span m="4913330">getting</span> <span
  m="4913580">something</span> <span m="4913890">like</span> <span
  m="4914680">30</span> <span m="4915070">minus</span> <span
  m="4917950">something</span> <span m="4920450">minus</span> <span
  m="4920900">something</span> <span m="4921810">minus</span> <span
  m="4922160">something,</span> <span m="4922980">where</span> <span
  m="4923170">you</span> <span m="4923250">have</span> <span
  m="4924950">xi</span> <span m="4925390">values</span> <span
  m="4925830">over</span> <span m="4926020">here.</span> <span
  m="4926930">And</span> <span m="4927190">when</span> <span
  m="4927300">you</span> <span m="4927400">set</span> <span
  m="4927700">these</span> <span m="4927930">to</span> <span
  m="4928020">be</span> <span m="4928140">0,</span> <span
  m="4929070">that's</span> <span m="4929250">the</span> <span
  m="4929340">best</span> <span m="4929560">you</span> <span
  m="4929650">can</span> <span m="4929780">do,</span> <span
  m="4930750">because</span> <span m="4931070">these</span> <span
  m="4931280">are</span> <span m="4931400">all</span> <span
  m="4931990">negative</span> <span m="4932390">quantities.</span> <span
  m="4933870">So</span> <span m="4934240">I'll</span> <span
  m="4934350">just</span> <span m="4934540">leave</span> <span
  m="4934730">you</span> <span m="4935040">with</span> <span
  m="4935220">that.</span> <span m="4936530">Hopefully,</span> <span
  m="4936800">you</span> <span m="4936890">understood</span> <span
  m="4937460">how</span> <span m="4937740">we</span> <span m="4937870">do</span>
  <span m="4937970">the</span> <span m="4938090">pivoting--</span> <span
  m="4939270">sub</span> <span m="4939560">through</span> <span
  m="4939760">it</span> <span m="4939950">three</span> <span
  m="4940140">times,</span> <span m="4940890">and</span> <span
  m="4941020">then</span> <span m="4941120">you</span> <span
  m="4941220">get</span> <span m="4941390">that</span> <span
  m="4941530">objective</span> <span m="4941930">function,</span> <span
  m="4942440">and</span> <span m="4942690">the optimum</span> <span
  m="4943110">value is</span> <span m="4943450">30.</span> <span
  m="4944350">See</span> <span m="4944650">you</span> <span m="4944950">next
  time.</span></p>
embedded_media:
  - uid: 6437758749e3302bc37a64198fe491dd
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: WwMz2fJwUCg
  - uid: e27b8948ceb654fc31677a98652cbfa9
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: WwMz2fJwUCg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-15-linear-programming-lp-reductions-simplex/WwMz2fJwUCg.srt
  - uid: d7ca543a0cdf37de9a29f0033bac7d99
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: WwMz2fJwUCg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-15-linear-programming-lp-reductions-simplex/WwMz2fJwUCg.pdf
  - uid: e453e0a5908b74b52f99ead63bbad2ba
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: dbf61151b1efe2d786619082e7ad737d
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 5cee35388ac978ac5b0e163da33a10cf
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: WwMz2fJwUCg
  - uid: 6d2f91873c0c06e498b569bed8c20d02
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/WwMz2fJwUCg/default.jpg'
  - uid: 8bd5cbea1a5a9c109ea412ad0b030820
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: 2e77d4d00bd6dc5ac97103d5196998b1
    parent_uid: 384a024ba2b3cd026f49bed9647ba8ba
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec15_300k.mp4'
type: courses
layout: video
---
