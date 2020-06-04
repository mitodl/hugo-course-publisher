---
title: 'Lecture 8: Sampling and Standard Error'
uid: 79b17c3a63cf71e5cb6c2947ba80aee1
parent_uid: dfe2b9f5ab127795415ac86facf4a535
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/lecture-videos/lecture-8-sampling-and-standard-error
short_url: lecture-8-sampling-and-standard-error
inline_embed_id: 3858743lecture8samplingandstandarderror56452192
about_this_resource_text: >-
  <p><strong>Description:</strong> Prof. Guttag discusses sampling and how to
  approach and analyze real data.</p><p><strong>Instructor:</strong> John
  Guttag</p>
related_resources_text: ''
transcript: >-
  <p><span m="790">The</span> <span m="880">following</span> <span
  m="1330">content</span> <span m="1810">is</span> <span
  m="1930">provided</span> <span m="2380">under</span> <span m="2620">a</span>
  <span m="2680">Creative</span> <span m="3130">Commons</span> <span
  m="3520">license.</span> <span m="4550">Your</span> <span
  m="4630">support</span> <span m="5110">will</span> <span m="5260">help</span>
  <span m="5530">MIT</span> <span m="6010">OpenCourseWare</span> <span
  m="6760">continue</span> <span m="7240">to</span> <span m="7390">offer</span>
  <span m="7720">high</span> <span m="7930">quality</span> <span
  m="8410">educational</span> <span m="9070">resources</span> <span
  m="9640">for</span> <span m="9790">free.</span> <span m="10850">To</span>
  <span m="10950">make</span> <span m="11050">a</span> <span
  m="11110">donation,</span> <span m="11860">or</span> <span m="12040">to</span>
  <span m="12160">view</span> <span m="12370">additional</span> <span
  m="12760">materials</span> <span m="13390">from</span> <span
  m="13570">hundreds</span> <span m="13900">of</span> <span m="13990">MIT</span>
  <span m="14380">courses,</span> <span m="15680">visit</span> <span
  m="15880">MIT</span> <span m="16390">OpenCourseWare</span> <span
  m="17320">at</span> <span m="17500">ocw.mit.edu.</span></p><p><span
  m="28870">PROFESSOR:</span> <span m="28945">Good</span> <span
  m="29020">afternoon,</span> <span m="29600">everybody.</span> <span
  m="32360">Welcome</span> <span m="32770">to</span> <span
  m="34290">Lecture</span> <span m="34690">8.</span> <span m="35170">So</span>
  <span m="35380">we're</span> <span m="35500">now</span> <span
  m="35770">more</span> <span m="36010">than</span> <span
  m="36220">halfway</span> <span m="36790">through</span> <span
  m="37990">the</span> <span m="38200">lectures.</span></p><p><span
  m="39730">All</span> <span m="39790">right,</span> <span m="40390">the</span>
  <span m="40480">topic</span> <span m="41860">of</span> <span
  m="42010">today</span> <span m="42490">is</span> <span
  m="42640">sampling.</span> <span m="43990">I</span> <span
  m="44110">want</span> <span m="44350">to</span> <span m="44440">start</span>
  <span m="45520">by</span> <span m="46420">reminding</span> <span
  m="47110">you</span> <span m="47620">about</span> <span m="47950">this</span>
  <span m="48130">whole</span> <span m="48340">business</span> <span
  m="48760">of</span> <span m="48880">inferential</span> <span
  m="49570">statistics.</span> <span m="51160">We</span> <span
  m="51370">make</span> <span m="51610">references</span> <span
  m="52210">about</span> <span m="52480">populations</span> <span
  m="53980">by</span> <span m="54160">examining</span> <span
  m="54760">one</span> <span m="55030">or</span> <span m="55090">more</span>
  <span m="55360">random</span> <span m="55810">samples</span> <span
  m="56440">drawn</span> <span m="56800">from</span> <span m="56980">that</span>
  <span m="57160">population.</span></p><p><span m="59620">We</span> <span
  m="59710">used</span> <span m="59980">Monte</span> <span
  m="60310">Carlo</span> <span m="60700">simulation</span> <span
  m="61570">over</span> <span m="61780">the</span> <span m="61870">last</span>
  <span m="62170">two</span> <span m="62440">lectures.</span> <span
  m="64090">And</span> <span m="64269">the</span> <span m="64360">key</span>
  <span m="64660">idea</span> <span m="65110">there,</span> <span
  m="65470">as</span> <span m="65590">we</span> <span m="65710">saw</span> <span
  m="66190">in</span> <span m="66520">trying</span> <span m="66880">to</span>
  <span m="66970">find</span> <span m="67270">the</span> <span
  m="67390">value</span> <span m="67810">of</span> <span m="67930">pi,</span>
  <span m="69160">was</span> <span m="69310">that</span> <span
  m="69400">we</span> <span m="69550">can</span> <span m="69730">generate</span>
  <span m="70270">lots</span> <span m="70900">of</span> <span
  m="71080">random</span> <span m="71530">samples,</span> <span
  m="73330">and</span> <span m="73480">then</span> <span m="73720">use</span>
  <span m="74110">them</span> <span m="74290">to</span> <span
  m="74410">compute</span> <span m="74890">confidence</span> <span
  m="75640">intervals.</span> <span m="77370">And</span> <span
  m="78060">then</span> <span m="78330">we</span> <span m="78450">use</span>
  <span m="78720">the</span> <span m="78810">empirical</span> <span
  m="79440">rule</span> <span m="79830">to</span> <span m="80010">say,</span>
  <span m="80250">all</span> <span m="80370">right,</span> <span
  m="81950">we</span> <span m="82130">really</span> <span m="82490">have</span>
  <span m="82700">good</span> <span m="82970">reason</span> <span
  m="83450">to</span> <span m="83570">believe</span> <span m="84860">that</span>
  <span m="85410">95%</span> <span m="86750">of</span> <span
  m="86810">the</span> <span m="86900">time</span> <span m="87200">we</span>
  <span m="87320">run</span> <span m="87500">this</span> <span
  m="87650">simulation,</span> <span m="88820">our</span> <span
  m="89060">answer</span> <span m="89480">will</span> <span m="89690">be</span>
  <span m="89840">between</span> <span m="90230">here</span> <span
  m="90650">and</span> <span m="90860">here.</span></p><p><span
  m="92910">Well,</span> <span m="93440">that's</span> <span
  m="93980">all</span> <span m="94310">well</span> <span m="94640">and</span>
  <span m="94760">good</span> <span m="95000">when</span> <span
  m="95150">we're</span> <span m="95300">doing</span> <span
  m="95600">simulations.</span> <span m="97430">But</span> <span
  m="97580">what</span> <span m="97760">happens</span> <span
  m="98210">when</span> <span m="98360">you</span> <span m="98560">to</span>
  <span m="98900">actually</span> <span m="99530">sample</span> <span
  m="100070">something</span> <span m="100520">real?</span> <span
  m="101690">For</span> <span m="101810">example,</span> <span
  m="102260">you</span> <span m="102380">run</span> <span m="102590">an</span>
  <span m="102710">experiment,</span> <span m="103730">and</span> <span
  m="103940">you</span> <span m="104210">get</span> <span m="104480">some</span>
  <span m="104750">data</span> <span m="105050">points.</span> <span
  m="106190">And</span> <span m="106520">it's</span> <span m="107030">too</span>
  <span m="107240">hard</span> <span m="107600">to</span> <span
  m="107720">do</span> <span m="107870">it</span> <span m="107990">over</span>
  <span m="108260">and</span> <span m="108350">over</span> <span
  m="108620">again.</span></p><p><span m="110390">Think</span> <span
  m="110660">about</span> <span m="110900">political</span> <span
  m="111470">polls.</span> <span m="111970">Here</span> <span
  m="112090">was</span> <span m="112760">an</span> <span
  m="112880">interesting</span> <span m="113390">poll.</span> <span
  m="116030">How</span> <span m="116240">were</span> <span
  m="116360">these</span> <span m="116630">created?</span> <span
  m="117860">Not</span> <span m="118370">by</span> <span
  m="118640">simulation.</span> <span m="121010">They</span> <span
  m="121160">didn't</span> <span m="122120">run</span> <span
  m="122540">1,000</span> <span m="123230">polls</span> <span
  m="123800">and</span> <span m="123890">then</span> <span
  m="124070">compute</span> <span m="124460">the</span> <span
  m="124580">confidence</span> <span m="125060">interval.</span> <span
  m="125510">They</span> <span m="125630">ran</span> <span m="125900">one</span>
  <span m="126170">poll--</span> <span m="128539">of</span> <span
  m="129110">835</span> <span m="130280">people,</span> <span
  m="130669">in</span> <span m="130789">this</span> <span
  m="130970">case.</span> <span m="132140">And</span> <span
  m="132320">yet</span> <span m="133580">they</span> <span
  m="133730">claim</span> <span m="134180">to</span> <span
  m="134330">have</span> <span m="134540">a</span> <span
  m="134600">confidence</span> <span m="135200">interval.</span> <span
  m="135640">That's</span> <span m="135860">what</span> <span
  m="136010">that</span> <span m="136220">margin</span> <span
  m="136670">of</span> <span m="136790">error</span> <span m="137150">is.</span>
  <span m="140240">Obviously</span> <span m="142250">they</span> <span
  m="142370">needed</span> <span m="142700">that</span> <span
  m="143000">large</span> <span m="143300">confidence</span> <span
  m="143900">interval.</span></p><p><span m="145440">So</span> <span
  m="145550">how</span> <span m="145790">is</span> <span m="145910">this</span>
  <span m="146120">done?</span> <span m="149940">Backing</span> <span
  m="150390">up</span> <span m="150510">for</span> <span m="150630">a</span>
  <span m="150690">minute,</span> <span m="151360">let's</span> <span
  m="151500">talk</span> <span m="151830">about</span> <span
  m="152040">how</span> <span m="152250">sampling</span> <span
  m="152970">is</span> <span m="153120">done</span> <span m="153420">when</span>
  <span m="153600">you</span> <span m="154290">are</span> <span
  m="154380">not</span> <span m="154710">running</span> <span
  m="155010">a</span> <span m="155070">simulation.</span> <span
  m="157170">You</span> <span m="157320">want</span> <span m="157570">to</span>
  <span m="158130">do</span> <span m="158400">what's</span> <span
  m="158610">called</span> <span m="158910">probability</span> <span
  m="159840">sampling,</span> <span m="161450">in</span> <span
  m="161540">which</span> <span m="161870">each</span> <span
  m="162170">member</span> <span m="162560">of</span> <span
  m="162620">the</span> <span m="162710">population</span> <span
  m="163580">has</span> <span m="163760">a</span> <span
  m="163850">non-zero</span> <span m="164870">probability</span> <span
  m="166250">of</span> <span m="166400">being</span> <span
  m="166580">included</span> <span m="167150">in</span> <span
  m="167270">a</span> <span m="167360">sample.</span></p><p><span
  m="170150">There</span> <span m="170420">are,</span> <span
  m="171150">roughly</span> <span m="171750">speaking,</span> <span
  m="172230">two</span> <span m="172500">kinds.</span> <span
  m="173540">We'll</span> <span m="173910">spend,</span> <span
  m="174480">really,</span> <span m="175030">all</span> <span
  m="175140">of</span> <span m="175260">our</span> <span m="175440">time</span>
  <span m="175800">on</span> <span m="175920">something</span> <span
  m="176310">called</span> <span m="176550">simple</span> <span
  m="177060">random</span> <span m="177570">sampling.</span> <span
  m="179180">And</span> <span m="179330">the</span> <span m="179420">key</span>
  <span m="179720">idea</span> <span m="180170">here</span> <span
  m="181460">is</span> <span m="181640">that</span> <span m="181910">each</span>
  <span m="182180">member</span> <span m="182480">of</span> <span
  m="182540">the</span> <span m="182660">population</span> <span
  m="183980">has</span> <span m="184190">an</span> <span m="184430">equal</span>
  <span m="184880">probability</span> <span m="185720">of</span> <span
  m="185810">being</span> <span m="186110">chosen</span> <span
  m="186590">in</span> <span m="186710">the</span> <span
  m="186800">sample</span> <span m="189090">so</span> <span
  m="189240">there's</span> <span m="189510">no</span> <span
  m="189810">bias.</span></p><p><span m="192630">Now,</span> <span
  m="192710">that's</span> <span m="192980">not</span> <span
  m="193280">always</span> <span m="193700">appropriate.</span> <span
  m="194860">I</span> <span m="194990">do</span> <span m="195200">want</span>
  <span m="195380">to</span> <span m="195560">take</span> <span
  m="195800">a</span> <span m="195860">minute</span> <span m="196280">to</span>
  <span m="196430">talk</span> <span m="196760">about</span> <span
  m="197030">why.</span> <span m="198690">So</span> <span
  m="198800">suppose</span> <span m="199340">we</span> <span
  m="199490">wanted</span> <span m="199850">to</span> <span
  m="200150">survey</span> <span m="201500">MIT</span> <span
  m="202130">students</span> <span m="203300">to</span> <span
  m="203510">find</span> <span m="203870">out</span> <span
  m="204830">what</span> <span m="205010">fraction</span> <span
  m="205460">of</span> <span m="205520">them</span> <span m="205630">are</span>
  <span m="205760">nerds--</span> <span m="207500">which,</span> <span
  m="207800">by</span> <span m="208010">the</span> <span m="208130">way,</span>
  <span m="208340">I</span> <span m="208490">consider</span> <span
  m="208970">a</span> <span m="209030">compliment.</span> <span
  m="211100">So</span> <span m="211250">suppose</span> <span
  m="211730">we</span> <span m="211850">wanted</span> <span m="212120">to</span>
  <span m="212210">consider</span> <span m="212660">a</span> <span
  m="212720">random</span> <span m="213260">sample</span> <span
  m="213740">of</span> <span m="213830">100</span> <span
  m="214190">students.</span> <span m="215870">We</span> <span
  m="216020">could</span> <span m="216230">walk</span> <span
  m="216530">around</span> <span m="216830">campus</span> <span
  m="217340">and</span> <span m="217430">choose</span> <span
  m="217670">100</span> <span m="218000">people</span> <span
  m="218420">at</span> <span m="218630">random.</span> <span
  m="220200">And</span> <span m="220550">if</span> <span m="221840">12%</span>
  <span m="222560">of</span> <span m="222650">them</span> <span
  m="222770">were</span> <span m="222860">nerds,</span> <span
  m="223280">we</span> <span m="223400">would</span> <span m="223520">say</span>
  <span m="223790">12%</span> <span m="224540">of</span> <span
  m="224600">the</span> <span m="224720">MIT</span> <span
  m="225140">undergraduates</span> <span m="225800">are</span> <span
  m="225860">nerds--</span> <span m="226860">if</span> <span
  m="227000">98%,</span> <span m="228160">et</span> <span
  m="228300">cetera.</span></p><p><span m="229860">Well,</span> <span
  m="230270">the</span> <span m="230390">problem</span> <span
  m="230900">with</span> <span m="231050">that</span> <span
  m="231680">is,</span> <span m="231830">let's</span> <span
  m="232100">look</span> <span m="232370">at</span> <span m="233180">the</span>
  <span m="233300">majors</span> <span m="233950">by</span> <span
  m="234170">school.</span> <span m="237220">This</span> <span
  m="237440">is</span> <span m="237560">actually</span> <span
  m="237875">the</span> <span m="240260">majors</span> <span
  m="240500">at</span> <span m="240860">MIT</span> <span m="241430">by</span>
  <span m="241640">school.</span> <span m="242090">And</span> <span
  m="242210">you</span> <span m="242360">can</span> <span m="242510">see</span>
  <span m="242780">that</span> <span m="242960">they're</span> <span
  m="243110">not</span> <span m="243740">exactly</span> <span
  m="244400">evenly</span> <span m="244850">distributed.</span> <span
  m="246780">And</span> <span m="246830">so</span> <span m="247040">if</span>
  <span m="247160">you</span> <span m="247280">went</span> <span
  m="247520">around</span> <span m="248090">and</span> <span
  m="248270">just</span> <span m="248510">sampled</span> <span
  m="248970">100</span> <span m="249380">students</span> <span
  m="249830">at</span> <span m="249950">random,</span> <span
  m="251670">there'd</span> <span m="251890">be</span> <span m="252070">a</span>
  <span m="252130">reasonably</span> <span m="252760">high</span> <span
  m="253030">probability</span> <span m="253870">that</span> <span
  m="254020">they</span> <span m="254170">would</span> <span
  m="254320">all</span> <span m="254680">be</span> <span m="254860">from</span>
  <span m="255070">engineering</span> <span m="255670">and</span> <span
  m="255760">science.</span> <span m="258480">And</span> <span
  m="258660">that</span> <span m="258930">might</span> <span
  m="259800">give</span> <span m="260100">you</span> <span m="261149">a</span>
  <span m="261269">misleading</span> <span m="262230">notion</span> <span
  m="262740">of</span> <span m="262830">the</span> <span
  m="262920">fraction</span> <span m="263430">of</span> <span
  m="263520">MIT</span> <span m="264030">students</span> <span
  m="264450">that</span> <span m="264570">were</span> <span
  m="264690">nerds,</span> <span m="266220">or</span> <span m="266730">it</span>
  <span m="266880">might</span> <span m="267120">not.</span></p><p><span
  m="269800">In</span> <span m="269920">such</span> <span
  m="270250">situations</span> <span m="271150">we</span> <span
  m="271270">do</span> <span m="271420">something</span> <span
  m="271810">called</span> <span m="272110">stratified</span> <span
  m="272980">sampling,</span> <span m="274580">where</span> <span
  m="274600">we</span> <span m="274750">partition</span> <span
  m="275470">the</span> <span m="275560">population</span> <span
  m="276310">into</span> <span m="276580">subgroups,</span> <span
  m="278470">and</span> <span m="278590">then</span> <span
  m="278800">take</span> <span m="279280">a</span> <span
  m="279340">simple</span> <span m="279850">random</span> <span
  m="280270">sample</span> <span m="280720">from</span> <span
  m="280900">each</span> <span m="281140">subgroup.</span> <span
  m="283570">And</span> <span m="283690">we</span> <span m="283810">do</span>
  <span m="284050">that</span> <span m="284260">proportional</span> <span
  m="285220">to</span> <span m="285670">the</span> <span m="286510">size</span>
  <span m="287140">of</span> <span m="287260">the</span> <span
  m="287350">subgroups.</span> <span m="288550">So</span> <span
  m="288730">we</span> <span m="288850">would</span> <span
  m="288970">certainly</span> <span m="289420">want</span> <span
  m="289600">to</span> <span m="289690">take</span> <span m="289960">more</span>
  <span m="290200">students</span> <span m="290650">from</span> <span
  m="290860">engineering</span> <span m="291580">than</span> <span
  m="291760">from</span> <span m="291940">architecture.</span> <span
  m="293830">But</span> <span m="293950">we</span> <span
  m="294100">probably</span> <span m="294490">want</span> <span
  m="294700">to</span> <span m="294760">make</span> <span m="294910">sure</span>
  <span m="295120">we</span> <span m="295270">got</span> <span
  m="295570">somebody</span> <span m="296140">from</span> <span
  m="296290">architecture</span> <span m="296950">in</span> <span
  m="297040">our</span> <span m="297190">sample.</span></p><p><span
  m="299870">This,</span> <span m="300380">by</span> <span m="300590">the</span>
  <span m="300680">way,</span> <span m="300890">is</span> <span
  m="301070">the</span> <span m="301160">way</span> <span m="301460">most</span>
  <span m="301760">political</span> <span m="302300">polls</span> <span
  m="302690">are</span> <span m="302810">done.</span> <span
  m="303230">They're</span> <span m="303410">stratified.</span> <span
  m="304880">They</span> <span m="305000">say,</span> <span m="305180">we</span>
  <span m="305330">want</span> <span m="305510">to</span> <span
  m="305600">get</span> <span m="306780">so</span> <span m="306950">many</span>
  <span m="307490">rural</span> <span m="307940">people,</span> <span
  m="308360">so</span> <span m="308540">many</span> <span m="310220">city</span>
  <span m="310550">people,</span> <span m="311000">so</span> <span
  m="311270">many</span> <span m="311900">minorities--</span> <span
  m="312800">things</span> <span m="313100">like</span> <span
  m="313340">that.</span> <span m="314150">And</span> <span m="314240">in</span>
  <span m="314330">fact,</span> <span m="314850">that's</span> <span
  m="315020">probably</span> <span m="315500">where</span> <span
  m="315680">the</span> <span m="315830">election</span> <span
  m="316940">recent</span> <span m="317270">polls</span> <span
  m="317720">were</span> <span m="317870">all</span> <span
  m="318110">messed</span> <span m="318470">up.</span> <span
  m="319280">They</span> <span m="319370">did</span> <span m="319550">a</span>
  <span m="319610">very,</span> <span m="320600">retrospectively</span> <span
  m="321740">at</span> <span m="321830">least,</span> <span m="322130">a</span>
  <span m="322280">bad</span> <span m="322610">job</span> <span
  m="322940">of</span> <span m="323030">stratifying.</span></p><p><span
  m="326440">So</span> <span m="326590">we</span> <span m="326710">use</span>
  <span m="326950">stratified</span> <span m="327730">sampling</span> <span
  m="328360">when</span> <span m="328540">there</span> <span
  m="328690">are</span> <span m="328750">small</span> <span
  m="329290">groups,</span> <span m="330460">subgroups,</span> <span
  m="331120">that</span> <span m="331210">we</span> <span m="331330">want</span>
  <span m="331510">to</span> <span m="331600">make</span> <span
  m="331780">sure</span> <span m="332080">are</span> <span
  m="332110">represented.</span> <span m="334100">And</span> <span
  m="334220">we</span> <span m="334340">want</span> <span m="334520">to</span>
  <span m="334610">represent</span> <span m="335150">them</span> <span
  m="335270">proportional</span> <span m="335930">to</span> <span
  m="336050">their</span> <span m="336200">size</span> <span
  m="336620">in</span> <span m="336740">the</span> <span
  m="336830">population.</span> <span m="339650">This</span> <span
  m="339760">can</span> <span m="339910">also</span> <span m="340270">be</span>
  <span m="340420">used</span> <span m="340750">to</span> <span
  m="340870">reduce</span> <span m="341350">the</span> <span
  m="341470">needed</span> <span m="341980">size</span> <span
  m="342460">of</span> <span m="342550">the</span> <span
  m="342670">sample.</span> <span m="344870">If</span> <span
  m="344890">we</span> <span m="345010">wanted</span> <span m="345340">to</span>
  <span m="345460">make</span> <span m="345670">sure</span> <span
  m="346030">we</span> <span m="346210">got</span> <span m="346510">some</span>
  <span m="346990">architecture</span> <span m="347680">students</span> <span
  m="348070">in</span> <span m="348160">our</span> <span
  m="348280">sample,</span> <span m="349270">we'd</span> <span
  m="349450">need</span> <span m="349750">to</span> <span m="349870">get</span>
  <span m="350080">more</span> <span m="350320">than</span> <span
  m="350440">100</span> <span m="350830">people</span> <span
  m="351220">to</span> <span m="351370">start</span> <span
  m="351700">with.</span> <span m="352660">But</span> <span m="352780">if</span>
  <span m="352930">we</span> <span m="353020">stratify,</span> <span
  m="354860">we</span> <span m="354880">can</span> <span m="355030">take</span>
  <span m="355570">fewer</span> <span m="355990">samples.</span> <span
  m="358890">It</span> <span m="359040">works</span> <span
  m="359730">well</span> <span m="360180">when</span> <span
  m="360330">you</span> <span m="360450">do</span> <span m="360660">it</span>
  <span m="360780">properly.</span> <span m="361630">But</span> <span
  m="361800">it</span> <span m="361950">can</span> <span m="362250">be</span>
  <span m="362520">tricky</span> <span m="362970">to</span> <span
  m="363120">do</span> <span m="363270">it</span> <span
  m="363360">properly.</span> <span m="364590">And</span> <span
  m="364890">we</span> <span m="365020">are</span> <span m="365220">going</span>
  <span m="365340">to</span> <span m="365400">stick</span> <span
  m="365700">to</span> <span m="365820">simple</span> <span
  m="366210">random</span> <span m="366630">samples</span> <span
  m="367200">here.</span></p><p><span m="368770">All</span> <span
  m="368860">right,</span> <span m="369130">let's</span> <span
  m="369310">look</span> <span m="369490">at</span> <span m="369880">an</span>
  <span m="370090">example.</span> <span m="371660">So</span> <span
  m="371830">this</span> <span m="372070">is</span> <span m="372190">a</span>
  <span m="372250">map</span> <span m="372850">of</span> <span
  m="373780">temperatures</span> <span m="375220">in</span> <span
  m="375310">the</span> <span m="375400">United</span> <span
  m="375500">States.</span> <span m="376870">And</span> <span
  m="376960">so</span> <span m="377170">our</span> <span
  m="377290">running</span> <span m="377620">example</span> <span
  m="378130">today</span> <span m="378520">will</span> <span
  m="378700">be</span> <span m="378880">sampling</span> <span
  m="380020">to</span> <span m="380140">get</span> <span
  m="381280">information</span> <span m="381910">about</span> <span
  m="382150">the</span> <span m="382300">average</span> <span
  m="382690">temperatures.</span> <span m="384910">And</span> <span
  m="385090">of</span> <span m="385180">course,</span> <span
  m="385540">as</span> <span m="385690">you</span> <span m="385810">can</span>
  <span m="385960">see,</span> <span m="386170">they're</span> <span
  m="386320">highly</span> <span m="386680">variable.</span> <span
  m="387220">And</span> <span m="387310">we</span> <span m="387490">live</span>
  <span m="387730">in</span> <span m="388480">one</span> <span
  m="388630">of</span> <span m="388720">the</span> <span
  m="388930">cooler</span> <span m="389410">areas.</span></p><p><span
  m="391100">The</span> <span m="391450">data</span> <span
  m="391780">we're</span> <span m="392410">going</span> <span
  m="392620">to</span> <span m="392710">use</span> <span m="393000">is</span>
  <span m="393340">real</span> <span m="393610">data--</span> <span
  m="394120">and</span> <span m="394420">it's</span> <span m="394630">in</span>
  <span m="394900">the</span> <span m="395560">zip</span> <span
  m="395860">file</span> <span m="396250">that</span> <span m="396370">I</span>
  <span m="396460">put</span> <span m="396670">up</span> <span
  m="397330">for</span> <span m="397480">the</span> <span
  m="397600">class--</span> <span m="398680">from</span> <span
  m="398950">the</span> <span m="399130">US</span> <span
  m="399520">Centers</span> <span m="399940">for</span> <span
  m="400060">Environmental</span> <span m="400720">Information.</span> <span
  m="402310">And</span> <span m="402430">it's</span> <span m="402550">got</span>
  <span m="402790">the</span> <span m="402880">daily</span> <span
  m="403330">high</span> <span m="403570">and</span> <span m="403690">low</span>
  <span m="403900">temperatures</span> <span m="404590">for</span> <span
  m="404740">21</span> <span m="406030">different</span> <span
  m="406510">American</span> <span m="407020">cities,</span> <span
  m="408160">every</span> <span m="408520">day</span> <span
  m="409390">from</span> <span m="409660">1961</span> <span
  m="410770">through</span> <span m="410920">2015.</span> <span
  m="413090">So</span> <span m="413330">it's</span> <span m="413780">an</span>
  <span m="413870">interesting</span> <span m="414410">data</span> <span
  m="414760">set--</span> <span m="415760">a</span> <span
  m="416090">total</span> <span m="416480">of</span> <span
  m="416570">about</span> <span m="416840">422,000</span> <span
  m="419120">examples</span> <span m="419750">in</span> <span
  m="419840">the</span> <span m="419980">dataset.</span> <span
  m="421130">So</span> <span m="421310">a</span> <span m="421370">fairly</span>
  <span m="421790">good</span> <span m="422030">sized</span> <span
  m="422420">dataset.</span> <span m="423560">It's</span> <span
  m="423800">fun</span> <span m="424040">to</span> <span m="424130">play</span>
  <span m="424400">with.</span></p><p><span m="426170">All</span> <span
  m="426260">right,</span> <span m="426710">so</span> <span
  m="427400">we're</span> <span m="427520">sort</span> <span
  m="427790">of</span> <span m="428570">in</span> <span m="429380">the</span>
  <span m="429500">part</span> <span m="429890">of</span> <span
  m="430010">the</span> <span m="430100">course</span> <span
  m="431210">where</span> <span m="431330">the</span> <span
  m="431450">next</span> <span m="431720">series</span> <span
  m="432470">of</span> <span m="432560">lectures,</span> <span
  m="433100">including</span> <span m="433550">today,</span> <span
  m="434600">is</span> <span m="434750">going</span> <span m="434960">to</span>
  <span m="435050">be</span> <span m="435230">about</span> <span
  m="436520">data</span> <span m="436820">science,</span> <span
  m="437430">how</span> <span m="437480">to</span> <span
  m="437600">analyze</span> <span m="438200">data.</span> <span
  m="440150">I</span> <span m="440420">always</span> <span
  m="440750">like</span> <span m="441050">to</span> <span
  m="441170">start</span> <span m="441620">by</span> <span
  m="441830">actually</span> <span m="442310">looking</span> <span
  m="442820">at</span> <span m="442940">the</span> <span
  m="443060">data--</span> <span m="444680">not</span> <span
  m="444950">looking</span> <span m="445270">at</span> <span
  m="445340">all</span> <span m="445460">421,000</span> <span
  m="447110">samples,</span> <span m="448250">but</span> <span
  m="448730">giving</span> <span m="449030">a</span> <span
  m="449090">plot</span> <span m="449660">to</span> <span m="449780">sort</span>
  <span m="449990">of</span> <span m="450050">give</span> <span
  m="450230">me</span> <span m="450380">a</span> <span m="450440">sense</span>
  <span m="450950">of</span> <span m="451040">what</span> <span
  m="451220">the</span> <span m="451310">data</span> <span
  m="451580">looks</span> <span m="451880">like.</span> <span
  m="454640">I'm</span> <span m="454880">not</span> <span
  m="455240">going</span> <span m="455390">to</span> <span
  m="455450">walk</span> <span m="455810">you</span> <span
  m="455930">through</span> <span m="456110">the</span> <span
  m="456260">code</span> <span m="456590">that</span> <span
  m="456710">does</span> <span m="457040">this</span> <span
  m="457280">plot.</span> <span m="458450">I</span> <span m="458630">do</span>
  <span m="458840">want</span> <span m="458990">to</span> <span
  m="459050">point</span> <span m="459380">out</span> <span
  m="459560">that</span> <span m="459710">there</span> <span
  m="459850">are</span> <span m="460130">two</span> <span
  m="460430">things</span> <span m="460880">in</span> <span m="461030">it</span>
  <span m="461720">that</span> <span m="462200">we</span> <span
  m="462380">may</span> <span m="462560">not</span> <span m="462800">have</span>
  <span m="462920">seen</span> <span m="463250">before.</span></p><p><span
  m="467710">Simply</span> <span m="468190">enough,</span> <span
  m="468550">I'm</span> <span m="468670">going</span> <span m="468790">to</span>
  <span m="468880">use</span> <span m="469160">numpy.std</span> <span
  m="470550">to</span> <span m="470730">get</span> <span
  m="470950">standard</span> <span m="471340">deviations</span> <span
  m="472720">instead</span> <span m="473050">of</span> <span
  m="473170">my</span> <span m="473350">own</span> <span m="473530">code</span>
  <span m="473890">for</span> <span m="474190">it.</span> <span
  m="475330">And</span> <span m="475510">random.sample</span> <span
  m="478930">to</span> <span m="479440">take</span> <span
  m="480760">simple</span> <span m="481210">random</span> <span
  m="481660">samples</span> <span m="482260">from</span> <span
  m="482560">the</span> <span m="482680">population.</span> <span
  m="484150">random.sample</span> <span m="485080">takes</span> <span
  m="485380">two</span> <span m="485620">arguments.</span> <span
  m="486440">The</span> <span m="486540">first</span> <span m="486850">is</span>
  <span m="487750">some</span> <span m="487990">sort</span> <span
  m="488230">of</span> <span m="488320">a</span> <span
  m="488380">sequence</span> <span m="489010">of</span> <span
  m="489100">values.</span> <span m="490540">And</span> <span
  m="490720">the</span> <span m="490810">second</span> <span
  m="491260">is</span> <span m="491530">an</span> <span
  m="491740">integer</span> <span m="492280">telling</span> <span
  m="492580">you</span> <span m="492700">how</span> <span m="492850">many</span>
  <span m="493060">samples</span> <span m="493540">you</span> <span
  m="493690">want.</span> <span m="495310">And</span> <span m="495460">it</span>
  <span m="495550">returns</span> <span m="496000">a</span> <span
  m="496090">list</span> <span m="497140">containing</span> <span
  m="497680">sample</span> <span m="498190">size,</span> <span
  m="498790">randomly</span> <span m="499510">chosen</span> <span
  m="499990">distinct</span> <span m="500470">elements.</span></p><p><span
  m="502340">Distinct</span> <span m="502970">elements</span> <span
  m="503480">is</span> <span m="503600">important,</span> <span
  m="505160">because</span> <span m="505580">there</span> <span
  m="505670">are</span> <span m="505760">two</span> <span m="506090">ways</span>
  <span m="506510">that</span> <span m="506660">people</span> <span
  m="507020">do</span> <span m="507200">sampling.</span> <span
  m="508760">You</span> <span m="508910">can</span> <span m="509060">do</span>
  <span m="509210">sampling</span> <span m="509810">without</span> <span
  m="510320">replacement,</span> <span m="511280">which</span> <span
  m="511460">is</span> <span m="511580">what's</span> <span
  m="511790">done</span> <span m="512059">here.</span> <span
  m="513860">You</span> <span m="514010">take</span> <span m="514280">a</span>
  <span m="514340">sample,</span> <span m="515450">and</span> <span
  m="515570">then</span> <span m="515720">it's</span> <span
  m="516020">out</span> <span m="516890">of</span> <span m="517039">the</span>
  <span m="517130">population.</span> <span m="517980">So</span> <span
  m="518030">you</span> <span m="518150">won't</span> <span
  m="518360">draw</span> <span m="518750">it</span> <span m="518810">the</span>
  <span m="518870">next</span> <span m="519200">time.</span> <span
  m="520280">Or</span> <span m="520370">you</span> <span m="520520">can</span>
  <span m="520640">do</span> <span m="520760">sampling</span> <span
  m="521330">with</span> <span m="521600">replacement,</span> <span
  m="522260">which</span> <span m="522470">allows</span> <span
  m="522890">you</span> <span m="523010">to</span> <span m="523159">draw</span>
  <span m="523400">the</span> <span m="523490">same</span> <span
  m="523820">sample</span> <span m="524270">multiple</span> <span
  m="524750">times--</span> <span m="525640">the</span> <span
  m="525710">same</span> <span m="526010">example</span> <span
  m="526640">multiple</span> <span m="527090">times.</span></p><p><span
  m="528650">We'll</span> <span m="528920">see</span> <span
  m="529130">later</span> <span m="529430">in</span> <span m="529520">the</span>
  <span m="529640">term</span> <span m="530000">that</span> <span
  m="530150">there</span> <span m="530300">are</span> <span
  m="530390">good</span> <span m="530630">reasons</span> <span
  m="531080">that</span> <span m="531200">we</span> <span
  m="531320">sometimes</span> <span m="531920">prefer</span> <span
  m="532310">sampling</span> <span m="533360">with</span> <span
  m="533750">replacement.</span> <span m="535310">But</span> <span
  m="535460">usually</span> <span m="535970">we're</span> <span
  m="536120">doing</span> <span m="536390">sampling</span> <span
  m="536840">without</span> <span m="537170">replacement.</span> <span
  m="537800">And</span> <span m="537920">that's</span> <span
  m="538130">what</span> <span m="538220">we'll</span> <span
  m="538370">do</span> <span m="538550">here.</span> <span m="539480">So</span>
  <span m="539630">we</span> <span m="539780">won't</span> <span
  m="540020">get</span> <span m="540710">Boston</span> <span
  m="541340">on</span> <span m="541640">April</span> <span m="542000">3rd</span>
  <span m="542480">multiple</span> <span m="542960">times--</span> <span
  m="543260">or,</span> <span m="544250">not</span> <span m="544540">the</span>
  <span m="544610">same</span> <span m="544940">year,</span> <span
  m="545060">at</span> <span m="545150">least.</span></p><p><span
  m="546670">All</span> <span m="546730">right.</span> <span
  m="547060">So</span> <span m="547270">here's</span> <span
  m="547540">the</span> <span m="547660">histogram</span> <span
  m="548290">the</span> <span m="548380">code</span> <span
  m="548680">produces.</span> <span m="550630">You</span> <span
  m="550840">can</span> <span m="550990">run</span> <span m="551200">it</span>
  <span m="551260">yourself</span> <span m="551740">now,</span> <span
  m="552040">if</span> <span m="552160">you</span> <span m="552280">want,</span>
  <span m="552580">or</span> <span m="552670">you</span> <span
  m="552850">can</span> <span m="553030">run</span> <span m="553240">it</span>
  <span m="553660">later.</span> <span m="555080">And</span> <span
  m="555160">here's</span> <span m="555370">what</span> <span
  m="555490">it</span> <span m="555580">looks</span> <span
  m="555850">like.</span> <span m="556990">The</span> <span
  m="557170">daily</span> <span m="557620">high</span> <span
  m="557890">temperatures,</span> <span m="559420">the</span> <span
  m="559540">mean</span> <span m="559870">is</span> <span m="559960">16.3</span>
  <span m="561130">degrees</span> <span m="562420">Celsius.</span> <span
  m="564910">I</span> <span m="564970">sort</span> <span m="565330">of</span>
  <span m="565390">vaguely</span> <span m="565810">know</span> <span
  m="565960">what</span> <span m="566080">that</span> <span
  m="566440">feels</span> <span m="566800">like.</span> <span
  m="569210">And</span> <span m="569290">as</span> <span m="569470">you</span>
  <span m="569620">can</span> <span m="569770">see,</span> <span
  m="570130">it's</span> <span m="570340">kind</span> <span m="570550">of</span>
  <span m="570640">an</span> <span m="570760">interesting</span> <span
  m="571210">distribution.</span> <span m="572190">It's</span> <span
  m="572440">not</span> <span m="572770">normal.</span> <span
  m="574550">But</span> <span m="574720">it's</span> <span m="574960">not</span>
  <span m="576680">that</span> <span m="577010">far,</span> <span
  m="577570">right?</span> <span m="578070">We</span> <span
  m="578170">have</span> <span m="578180">a</span> <span
  m="578240">little</span> <span m="578480">tail</span> <span
  m="578900">of</span> <span m="578990">these</span> <span
  m="579200">cold</span> <span m="579470">temperatures</span> <span
  m="580040">on</span> <span m="580160">the</span> <span m="580250">left.</span>
  <span m="581690">And</span> <span m="581900">it</span> <span
  m="582560">is</span> <span m="582770">what</span> <span m="582950">it</span>
  <span m="583040">is.</span> <span m="583380">It's</span> <span
  m="583400">not</span> <span m="583580">a</span> <span m="583640">normal</span>
  <span m="583970">distribution.</span> <span m="584690">And</span> <span
  m="584750">we'll</span> <span m="584900">later</span> <span
  m="585230">see</span> <span m="585470">that</span> <span
  m="585680">doesn't</span> <span m="585950">really</span> <span
  m="586250">matter.</span></p><p><span m="588380">OK,</span> <span
  m="588730">so</span> <span m="588830">this</span> <span
  m="589010">gives</span> <span m="589220">me</span> <span m="589400">a</span>
  <span m="589430">sense.</span> <span m="591050">The</span> <span
  m="591140">next</span> <span m="591410">thing</span> <span
  m="592460">I'll</span> <span m="592610">get</span> <span m="592790">is</span>
  <span m="592870">some</span> <span m="593090">statistics.</span> <span
  m="594530">So</span> <span m="594770">we</span> <span m="594890">know</span>
  <span m="595070">the</span> <span m="595190">mean</span> <span
  m="595630">is</span> <span m="595730">16.3</span> <span m="597260">and</span>
  <span m="597620">the</span> <span m="598160">standard</span> <span
  m="598640">deviation</span> <span m="599390">is</span> <span
  m="600050">approximately</span> <span m="600790">9.4</span> <span
  m="601640">degrees.</span> <span m="604660">So</span> <span
  m="605770">if</span> <span m="605860">you</span> <span m="605950">look</span>
  <span m="606130">at</span> <span m="606220">it,</span> <span
  m="606410">you</span> <span m="606460">can</span> <span
  m="606610">believe</span> <span m="606940">that.</span></p><p><span
  m="609260">Well,</span> <span m="611360">here's</span> <span
  m="611660">a</span> <span m="611810">histogram</span> <span
  m="612590">of</span> <span m="613160">one</span> <span
  m="613550">random</span> <span m="614030">sample</span> <span
  m="614970">of</span> <span m="615110">size</span> <span m="615560">100.</span>
  <span m="618190">Looks</span> <span m="618460">pretty</span> <span
  m="618820">different,</span> <span m="619300">as</span> <span
  m="619420">you</span> <span m="619540">might</span> <span
  m="619750">expect.</span> <span m="623690">Its</span> <span
  m="623840">standard</span> <span m="624230">deviation</span> <span
  m="624830">is</span> <span m="624980">10.4,</span> <span m="625880">its</span>
  <span m="626060">mean</span> <span m="626360">17.7.</span> <span
  m="628880">So</span> <span m="629030">even</span> <span
  m="629360">though</span> <span m="629480">the</span> <span
  m="629600">figures</span> <span m="630170">look</span> <span
  m="630440">a</span> <span m="630470">little</span> <span
  m="630740">different,</span> <span m="632610">in</span> <span
  m="632690">fact,</span> <span m="634060">the</span> <span
  m="634160">means</span> <span m="634430">and</span> <span
  m="634550">standard</span> <span m="634970">deviations</span> <span
  m="635600">are</span> <span m="635690">pretty</span> <span
  m="635960">similar.</span> <span m="637740">If</span> <span
  m="637870">we</span> <span m="637960">look</span> <span m="638200">at</span>
  <span m="638380">the</span> <span m="638470">population</span> <span
  m="639310">mean</span> <span m="639640">and</span> <span m="639730">the</span>
  <span m="639820">sample</span> <span m="640360">mean--</span> <span
  m="640940">and</span> <span m="640990">I'll</span> <span m="641110">try</span>
  <span m="641320">and</span> <span m="641410">be</span> <span
  m="641560">careful</span> <span m="641950">to</span> <span
  m="642010">use</span> <span m="642280">those</span> <span
  m="642550">terms--</span> <span m="644740">they're</span> <span
  m="644890">not</span> <span m="645160">the</span> <span
  m="645310">same.</span> <span m="645730">But</span> <span
  m="646000">they're</span> <span m="646150">in</span> <span
  m="646270">the</span> <span m="646360">same</span> <span
  m="646630">ballpark.</span> <span m="648750">And</span> <span
  m="648840">the</span> <span m="648930">same</span> <span m="649290">is</span>
  <span m="649410">true</span> <span m="650520">of</span> <span
  m="650670">the</span> <span m="650760">two</span> <span
  m="651210">standard</span> <span m="651630">deviations.</span></p><p><span
  m="655060">Well,</span> <span m="656130">that</span> <span
  m="656460">raises</span> <span m="657000">the</span> <span
  m="657120">question,</span> <span m="658710">did</span> <span
  m="658860">we</span> <span m="658980">get</span> <span m="659190">lucky</span>
  <span m="661260">or</span> <span m="661620">is</span> <span
  m="662040">something</span> <span m="662490">we</span> <span
  m="662640">should</span> <span m="662850">expect?</span> <span
  m="664320">If</span> <span m="664500">we</span> <span m="664620">draw</span>
  <span m="665190">100</span> <span m="665820">random</span> <span
  m="668510">examples,</span> <span m="669170">should</span> <span
  m="669530">we</span> <span m="669770">expect</span> <span
  m="670970">them</span> <span m="671210">to</span> <span
  m="671360">correspond</span> <span m="673160">to</span> <span
  m="673310">the</span> <span m="673400">population</span> <span
  m="674150">as</span> <span m="674270">a</span> <span m="674330">whole?</span>
  <span m="675620">And</span> <span m="675710">the</span> <span
  m="675800">answer</span> <span m="676070">is</span> <span
  m="676160">sometimes</span> <span m="676760">yeah</span> <span
  m="677020">and</span> <span m="677120">sometimes</span> <span
  m="677840">no.</span> <span m="678350">And</span> <span
  m="678440">that's</span> <span m="678770">one</span> <span
  m="678950">of</span> <span m="679010">the</span> <span
  m="679130">issues</span> <span m="679580">I</span> <span
  m="679640">want</span> <span m="679850">to</span> <span
  m="679940">explore</span> <span m="680390">today.</span></p><p><span
  m="682010">So</span> <span m="683030">one</span> <span m="683240">way</span>
  <span m="683390">to</span> <span m="683510">see</span> <span
  m="683720">whether</span> <span m="683930">it's</span> <span
  m="684080">a</span> <span m="684170">happy</span> <span
  m="684560">accident</span> <span m="685700">is</span> <span
  m="685850">to</span> <span m="686000">try</span> <span m="686360">it</span>
  <span m="686810">1,000</span> <span m="687440">times.</span> <span
  m="688010">We</span> <span m="688130">can</span> <span m="688280">draw</span>
  <span m="688520">1,000</span> <span m="689120">samples</span> <span
  m="690140">of</span> <span m="690260">size</span> <span m="690680">100</span>
  <span m="692090">and</span> <span m="692810">plot</span> <span
  m="693200">the</span> <span m="693320">results.</span> <span
  m="696470">Again,</span> <span m="696860">I'm</span> <span
  m="696950">not</span> <span m="697160">going</span> <span m="697280">to</span>
  <span m="697370">go</span> <span m="697550">over</span> <span
  m="697790">the</span> <span m="697910">code.</span> <span
  m="698280">There's</span> <span m="698480">something</span> <span
  m="698990">in</span> <span m="699110">that</span> <span
  m="699620">code,</span> <span m="699950">as</span> <span
  m="700070">well,</span> <span m="700400">that</span> <span
  m="700520">we</span> <span m="700700">haven't</span> <span
  m="700970">seen</span> <span m="701270">before.</span> <span
  m="702510">And</span> <span m="702590">that's</span> <span
  m="702950">the</span> <span m="703210">ax.vline</span> <span
  m="705050">plotting</span> <span m="705500">command.</span> <span
  m="706610">V</span> <span m="707010">for</span> <span
  m="707210">vertical.</span> <span m="709910">It</span> <span
  m="710120">just,</span> <span m="710630">in</span> <span
  m="710720">this</span> <span m="710900">case,</span> <span
  m="711200">will</span> <span m="711290">draw</span> <span m="711600">a</span>
  <span m="711620">red</span> <span m="711920">line--</span> <span
  m="712310">because</span> <span m="712490">I've</span> <span
  m="712580">said</span> <span m="712820">the</span> <span
  m="712950">color</span> <span m="713200">is</span> <span m="713450">r--</span>
  <span m="715210">at</span> <span m="715960">population</span> <span
  m="716710">mean</span> <span m="716920">on</span> <span m="717040">the</span>
  <span m="717160">x-axis.</span> <span m="717400">So</span> <span
  m="717970">just</span> <span m="718240">a</span> <span
  m="718300">vertical</span> <span m="718780">line.</span> <span
  m="719920">So</span> <span m="720310">that'll</span> <span
  m="720550">just</span> <span m="720790">show</span> <span m="721030">us</span>
  <span m="721150">where</span> <span m="721270">the</span> <span
  m="721390">mean</span> <span m="721690">is.</span> <span m="722360">If</span>
  <span m="722470">we</span> <span m="722590">wanted</span> <span
  m="722830">to</span> <span m="722890">draw</span> <span m="723130">a</span>
  <span m="723160">horizontal</span> <span m="723880">line,</span> <span
  m="724240">we'd</span> <span m="724570">use</span> <span
  m="724860">ax.hline.</span> <span m="727430">Just</span> <span
  m="727700">showing</span> <span m="728030">you</span> <span
  m="728150">a</span> <span m="728210">couple</span> <span m="728510">of</span>
  <span m="728570">useful</span> <span m="729950">functions.</span></p><p><span
  m="732870">When</span> <span m="733050">we</span> <span m="733170">try</span>
  <span m="733470">it</span> <span m="733560">1,000</span> <span
  m="734190">times,</span> <span m="734730">here's</span> <span
  m="734970">what</span> <span m="735120">it</span> <span
  m="735210">looks</span> <span m="735510">like.</span> <span
  m="737390">So</span> <span m="739000">here</span> <span m="739450">we</span>
  <span m="739600">see</span> <span m="739870">what</span> <span
  m="739990">we</span> <span m="740170">had</span> <span
  m="740350">originally,</span> <span m="742180">same</span> <span
  m="742480">picture</span> <span m="742840">I</span> <span
  m="742930">showed</span> <span m="743170">you</span> <span
  m="743290">before.</span> <span m="744460">And</span> <span
  m="744580">here's</span> <span m="744850">what</span> <span
  m="744940">we</span> <span m="745090">get</span> <span m="745540">when</span>
  <span m="746190">we</span> <span m="746320">look</span> <span
  m="746530">at</span> <span m="746620">the</span> <span m="746740">means</span>
  <span m="748030">of</span> <span m="748210">100</span> <span
  m="748570">samples.</span> <span m="750450">So</span> <span
  m="752300">this</span> <span m="753590">plot</span> <span m="753920">on</span>
  <span m="754010">the</span> <span m="754100">left</span> <span
  m="754460">looks</span> <span m="754760">a</span> <span m="754880">lot</span>
  <span m="755270">more</span> <span m="755540">like</span> <span
  m="755810">it's</span> <span m="755960">a</span> <span
  m="756020">normal</span> <span m="756350">distribution</span> <span
  m="756710">than</span> <span m="757070">the</span> <span m="757160">one</span>
  <span m="757370">on</span> <span m="757460">the</span> <span
  m="757580">right.</span> <span m="758880">Should</span> <span
  m="759060">that</span> <span m="759270">surprise</span> <span
  m="759900">us,</span> <span m="764210">or</span> <span m="764630">is</span>
  <span m="764730">there</span> <span m="764830">a</span> <span
  m="764950">reason</span> <span m="765380">we</span> <span
  m="765530">should</span> <span m="765740">have</span> <span
  m="765860">expected</span> <span m="766550">that</span> <span
  m="766760">to</span> <span m="766880">happen?</span></p><p><span
  m="769190">Well,</span> <span m="769420">what's</span> <span
  m="769630">the</span> <span m="769780">answer?</span> <span
  m="770440">Someone</span> <span m="770740">tell</span> <span
  m="770920">me</span> <span m="771430">why</span> <span m="771700">we</span>
  <span m="771850">should</span> <span m="772030">have</span> <span
  m="772150">expected</span> <span m="772690">it.</span> <span
  m="773790">It's</span> <span m="774290">because</span> <span
  m="774590">of</span> <span m="774635">the</span> <span
  m="774680">central</span> <span m="775070">limit</span> <span
  m="775370">theorem,</span> <span m="775730">right?</span> <span
  m="776750">That's</span> <span m="776990">exactly</span> <span
  m="777560">what</span> <span m="777710">the</span> <span
  m="777800">central</span> <span m="778280">limit</span> <span
  m="778550">theorem</span> <span m="779420">promised</span> <span
  m="780020">us</span> <span m="780200">would</span> <span
  m="780350">happen.</span> <span m="781610">And,</span> <span
  m="781850">sure</span> <span m="782180">enough,</span> <span
  m="782840">it's</span> <span m="783290">pretty</span> <span
  m="783560">close</span> <span m="783920">to</span> <span
  m="784670">normal.</span> <span m="786530">So</span> <span
  m="786580">that's</span> <span m="786910">a</span> <span
  m="786970">good</span> <span m="787180">thing.</span></p><p><span
  m="792910">And</span> <span m="793030">now</span> <span m="793360">if</span>
  <span m="793510">we</span> <span m="793630">look</span> <span
  m="793870">at</span> <span m="794050">it,</span> <span m="795110">we</span>
  <span m="795130">can</span> <span m="795310">see</span> <span
  m="795520">that</span> <span m="795670">the</span> <span
  m="795760">mean</span> <span m="796090">of</span> <span m="796180">the</span>
  <span m="796270">sample</span> <span m="796780">means</span> <span
  m="797140">is</span> <span m="797260">16.3,</span> <span m="800700">and</span>
  <span m="800820">the</span> <span m="800940">standard</span> <span
  m="801360">deviation</span> <span m="801990">of</span> <span
  m="802050">the</span> <span m="802140">sample</span> <span
  m="802590">means</span> <span m="803040">is</span> <span
  m="803460">0.94.</span> <span m="808630">So</span> <span m="809260">if</span>
  <span m="809440">we</span> <span m="809590">go</span> <span
  m="809800">back</span> <span m="813520">to</span> <span m="813670">what</span>
  <span m="813820">we</span> <span m="813970">saw</span> <span
  m="814330">here,</span> <span m="815350">we</span> <span m="815500">see</span>
  <span m="815740">that,</span> <span m="816190">actually,</span> <span
  m="817600">when</span> <span m="817750">we</span> <span m="817870">run</span>
  <span m="818050">it</span> <span m="818150">1,000</span> <span
  m="818800">times</span> <span m="819250">and</span> <span
  m="819370">look</span> <span m="819550">at</span> <span m="819670">the</span>
  <span m="819760">means,</span> <span m="822580">we</span> <span
  m="822730">get</span> <span m="822940">very</span> <span
  m="823420">close</span> <span m="824770">to</span> <span
  m="824920">what</span> <span m="825040">we</span> <span m="825820">had</span>
  <span m="826030">initially.</span> <span m="827740">So,</span> <span
  m="827950">indeed,</span> <span m="828370">it's</span> <span
  m="828940">not</span> <span m="829300">a</span> <span m="829360">happy</span>
  <span m="829810">accident.</span> <span m="831290">It's</span> <span
  m="831820">something</span> <span m="832240">we</span> <span
  m="832990">can</span> <span m="833140">in</span> <span
  m="833485">general</span> <span m="833830">expect.</span></p><p><span
  m="838310">All</span> <span m="838400">right,</span> <span
  m="838530">what's</span> <span m="838770">the</span> <span
  m="838890">95%</span> <span m="840000">confidence</span> <span
  m="840750">interval</span> <span m="841140">here?</span> <span
  m="843480">Well,</span> <span m="843780">it's</span> <span
  m="843960">going</span> <span m="844110">to</span> <span m="844200">be</span>
  <span m="844380">16.28</span> <span m="846060">plus</span> <span
  m="846430">or</span> <span m="846540">minus</span> <span
  m="846960">1.96</span> <span m="848730">times</span> <span
  m="849150">0.94,</span> <span m="851640">the</span> <span
  m="851760">standard</span> <span m="852240">deviation</span> <span
  m="852930">of</span> <span m="853020">the</span> <span
  m="853110">sample</span> <span m="853560">means.</span> <span
  m="854940">And</span> <span m="855090">so</span> <span m="855270">it</span>
  <span m="855330">tells</span> <span m="855630">us</span> <span
  m="855780">that</span> <span m="855900">the</span> <span
  m="855990">confidence</span> <span m="856590">interval</span> <span
  m="857190">is,</span> <span m="858300">the</span> <span m="859050">mean</span>
  <span m="859470">high</span> <span m="859710">temperature,</span> <span
  m="859980">is</span> <span m="860310">somewhere</span> <span
  m="860760">between</span> <span m="861120">14.5</span> <span
  m="862410">and</span> <span m="862530">18.1.</span></p><p><span
  m="866290">Well,</span> <span m="866890">that's</span> <span
  m="867220">actually</span> <span m="867580">a</span> <span
  m="867640">pretty</span> <span m="868000">big</span> <span
  m="868210">range,</span> <span m="868750">right?</span> <span
  m="869710">It's</span> <span m="870130">sort</span> <span m="870400">of</span>
  <span m="870850">enough</span> <span m="871210">to</span> <span
  m="871600">where</span> <span m="871780">you</span> <span
  m="871870">wear</span> <span m="872080">a</span> <span
  m="872110">sweater</span> <span m="872500">or</span> <span
  m="872550">where</span> <span m="872600">you</span> <span
  m="872650">don't</span> <span m="872890">wear</span> <span m="873070">a</span>
  <span m="873130">sweater.</span> <span m="876910">So</span> <span
  m="877060">the</span> <span m="877150">good</span> <span
  m="877390">news</span> <span m="877840">is</span> <span m="877960">it</span>
  <span m="878050">includes</span> <span m="878620">the</span> <span
  m="878710">population</span> <span m="879460">mean.</span> <span
  m="881530">That's</span> <span m="881860">nice.</span> <span
  m="883420">But</span> <span m="884170">the</span> <span m="884290">bad</span>
  <span m="884560">news</span> <span m="884920">is</span> <span
  m="885250">it's</span> <span m="885970">pretty</span> <span
  m="886330">wide.</span></p><p><span m="888790">Suppose</span> <span
  m="889570">we</span> <span m="889750">wanted</span> <span m="890110">it</span>
  <span m="890350">tighter</span> <span m="890830">bound.</span> <span
  m="892360">I</span> <span m="892420">said,</span> <span m="892570">all</span>
  <span m="892660">right,</span> <span m="893320">sure</span> <span
  m="893620">enough,</span> <span m="893980">the</span> <span
  m="894070">central</span> <span m="894460">limit</span> <span
  m="894730">theorem</span> <span m="895180">is</span> <span
  m="895330">going</span> <span m="895510">to</span> <span
  m="895600">tell</span> <span m="895870">me</span> <span m="897000">the</span>
  <span m="897130">mean</span> <span m="897370">of</span> <span
  m="897490">the</span> <span m="897610">means</span> <span m="898000">is</span>
  <span m="898180">going</span> <span m="898330">to</span> <span
  m="898420">give</span> <span m="898690">me</span> <span m="901930">a</span>
  <span m="902020">good</span> <span m="902320">estimate</span> <span
  m="902860">of</span> <span m="902950">the</span> <span
  m="903130">actual</span> <span m="904420">population</span> <span
  m="905110">mean.</span> <span m="906110">But</span> <span m="907180">I</span>
  <span m="907300">want</span> <span m="907540">it</span> <span
  m="907600">tighter</span> <span m="907960">bound.</span> <span
  m="908300">What</span> <span m="908500">can</span> <span m="908710">I</span>
  <span m="908830">do?</span></p><p><span m="910030">Well,</span> <span
  m="910870">let's</span> <span m="911560">think</span> <span
  m="911920">about</span> <span m="912820">a</span> <span
  m="912880">couple</span> <span m="913240">of</span> <span
  m="913330">things</span> <span m="913630">we</span> <span
  m="913780">could</span> <span m="913930">try.</span> <span
  m="915780">Well,</span> <span m="915990">one</span> <span
  m="916260">thing</span> <span m="916530">we</span> <span
  m="916650">could</span> <span m="916800">think</span> <span
  m="917100">about</span> <span m="918120">is</span> <span
  m="919730">drawing</span> <span m="920450">more</span> <span
  m="920750">samples.</span> <span m="922250">Suppose</span> <span
  m="922760">instead</span> <span m="923150">of</span> <span
  m="923990">1,000</span> <span m="924620">samples,</span> <span
  m="924980">I'd</span> <span m="925340">taken</span> <span
  m="925730">2,000</span> <span m="926510">or</span> <span
  m="926600">3,000</span> <span m="927440">samples.</span> <span
  m="929500">We</span> <span m="929620">can</span> <span m="929770">ask</span>
  <span m="930040">the</span> <span m="930160">question,</span> <span
  m="930700">would</span> <span m="930850">that</span> <span
  m="931150">have</span> <span m="931360">given</span> <span
  m="931690">me</span> <span m="931870">a</span> <span m="931930">smaller</span>
  <span m="932590">standard</span> <span m="933040">deviation?</span> <span
  m="936350">For</span> <span m="936500">those</span> <span m="936740">of</span>
  <span m="936800">you</span> <span m="936860">who</span> <span
  m="936920">have</span> <span m="937100">not</span> <span
  m="937340">looked</span> <span m="937580">ahead,</span> <span
  m="937940">what</span> <span m="938120">do</span> <span m="938180">you</span>
  <span m="938300">think?</span> <span m="938930">Who</span> <span
  m="939080">thinks</span> <span m="939350">it</span> <span
  m="939440">will</span> <span m="939560">give</span> <span
  m="939770">you</span> <span m="939890">a</span> <span
  m="939950">smaller</span> <span m="940430">standard</span> <span
  m="940760">deviation?</span> <span m="943140">Who</span> <span
  m="943260">thinks</span> <span m="943530">it</span> <span
  m="943650">won't?</span> <span m="946200">And</span> <span
  m="946590">the</span> <span m="946680">rest</span> <span m="946950">of</span>
  <span m="947070">you</span> <span m="947520">have</span> <span
  m="947670">either</span> <span m="947970">looked</span> <span
  m="948210">ahead</span> <span m="948450">or</span> <span
  m="948540">refused</span> <span m="949020">to</span> <span
  m="949140">think.</span> <span m="950220">I</span> <span
  m="950670">prefer</span> <span m="951000">to</span> <span
  m="951090">believe</span> <span m="951420">you</span> <span
  m="951510">looked</span> <span m="951810">ahead.</span></p><p><span
  m="953870">Well,</span> <span m="955100">we</span> <span m="955250">can</span>
  <span m="955400">run</span> <span m="955610">the</span> <span
  m="955700">experiment.</span> <span m="956350">You</span> <span
  m="956430">can</span> <span m="956540">go</span> <span m="956690">to</span>
  <span m="956810">the</span> <span m="956900">code.</span> <span
  m="957350">And</span> <span m="957470">you'll</span> <span
  m="957620">see</span> <span m="957950">that</span> <span
  m="958750">there</span> <span m="959080">is</span> <span m="959270">a</span>
  <span m="959510">constant</span> <span m="960050">of</span> <span
  m="960170">1,000,</span> <span m="960810">which</span> <span
  m="960950">you</span> <span m="961070">can</span> <span
  m="961220">easily</span> <span m="961580">change</span> <span
  m="961940">to</span> <span m="962030">2,000.</span> <span
  m="963560">And</span> <span m="963710">lo</span> <span m="963920">and</span>
  <span m="964010">behold,</span> <span m="964470">the</span> <span
  m="964550">standard</span> <span m="965000">deviation</span> <span
  m="965690">barely</span> <span m="966290">budges.</span> <span
  m="967780">It</span> <span m="967915">got</span> <span m="968050">a</span>
  <span m="968090">little</span> <span m="968390">bit</span> <span
  m="968570">bigger,</span> <span m="968990">as</span> <span
  m="969200">it</span> <span m="969320">happens,</span> <span
  m="969830">but</span> <span m="970010">that's</span> <span
  m="970280">kind</span> <span m="970520">of</span> <span m="970610">an</span>
  <span m="970700">accident.</span> <span m="972770">It</span> <span
  m="972860">just,</span> <span m="973580">more</span> <span
  m="973880">or</span> <span m="973910">less,</span> <span
  m="974210">doesn't</span> <span m="974570">change.</span> <span
  m="975920">And</span> <span m="976100">it</span> <span m="976190">won't</span>
  <span m="976430">change</span> <span m="976820">if</span> <span
  m="976970">I</span> <span m="977060">go</span> <span m="977210">to</span>
  <span m="977330">3,000</span> <span m="978020">or</span> <span
  m="978080">4,000</span> <span m="978770">or</span> <span
  m="978860">5,000.</span> <span m="979670">It'll</span> <span
  m="979880">wiggle</span> <span m="980240">around.</span> <span
  m="982000">But</span> <span m="982160">it</span> <span m="982250">won't</span>
  <span m="982460">help</span> <span m="982670">much.</span> <span
  m="986590">What</span> <span m="986770">we</span> <span m="986920">can</span>
  <span m="987100">see</span> <span m="987400">is</span> <span
  m="987700">doing</span> <span m="988130">that</span> <span
  m="988240">more</span> <span m="988510">often</span> <span
  m="989800">is</span> <span m="990010">not</span> <span m="990310">going</span>
  <span m="990460">to</span> <span m="990520">help.</span></p><p><span
  m="993210">Suppose</span> <span m="993700">we</span> <span
  m="993850">take</span> <span m="994180">larger</span> <span
  m="994840">samples?</span> <span m="997780">Is</span> <span
  m="997960">that</span> <span m="998200">going</span> <span
  m="998350">to</span> <span m="998440">help?</span> <span
  m="1000480">Who</span> <span m="1000600">thinks</span> <span
  m="1000900">that</span> <span m="1001140">will</span> <span
  m="1001290">help?</span> <span m="1003730">And</span> <span
  m="1003880">who</span> <span m="1004030">thinks</span> <span
  m="1004300">it</span> <span m="1004360">won't?</span> <span
  m="1006540">OK.</span> <span m="1007190">Well,</span> <span
  m="1008730">we</span> <span m="1008880">can</span> <span
  m="1009030">again</span> <span m="1009660">run</span> <span
  m="1009920">the</span> <span m="1010010">experiment.</span> <span
  m="1011520">I</span> <span m="1011640">did</span> <span m="1011880">run</span>
  <span m="1012060">the</span> <span m="1012150">experiment.</span> <span
  m="1012750">I</span> <span m="1012870">changed</span> <span
  m="1013270">the</span> <span m="1013380">sample</span> <span
  m="1013800">size</span> <span m="1014790">from</span> <span
  m="1014940">100</span> <span m="1015450">to</span> <span
  m="1015570">200.</span> <span m="1017230">And,</span> <span
  m="1017350">again,</span> <span m="1017620">you</span> <span
  m="1017770">can</span> <span m="1017920">run</span> <span
  m="1018130">this</span> <span m="1018340">if</span> <span
  m="1018460">you</span> <span m="1018580">want.</span> <span
  m="1019680">And</span> <span m="1019810">if</span> <span
  m="1019960">you</span> <span m="1020080">run</span> <span
  m="1020320">it,</span> <span m="1020440">you'll</span> <span
  m="1020590">get</span> <span m="1020770">a</span> <span
  m="1020830">result--</span> <span m="1021490">maybe</span> <span
  m="1021730">not</span> <span m="1021940">exactly</span> <span
  m="1022540">this,</span> <span m="1023500">but</span> <span
  m="1023860">something</span> <span m="1024310">very</span> <span
  m="1024579">similar--</span> <span m="1025000">that,</span> <span
  m="1025700">indeed,</span> <span m="1027849">as</span> <span
  m="1028030">I</span> <span m="1028180">increase</span> <span
  m="1028980">the</span> <span m="1029079">size</span> <span
  m="1029710">of</span> <span m="1029829">the</span> <span
  m="1029920">sample</span> <span m="1030460">rather</span> <span
  m="1030730">than</span> <span m="1030849">the</span> <span
  m="1030940">number</span> <span m="1031270">of</span> <span
  m="1031359">the</span> <span m="1031450">samples,</span> <span
  m="1032770">the</span> <span m="1032859">standard</span> <span
  m="1033310">deviation</span> <span m="1033910">drops</span> <span
  m="1034329">fairly</span> <span m="1034690">dramatically,</span> <span
  m="1038730">in</span> <span m="1038819">this</span> <span
  m="1039000">case</span> <span m="1039270">from</span> <span
  m="1039480">0.94</span> <span m="1040520">0.66.</span> <span
  m="1046290">So</span> <span m="1046470">that's</span> <span
  m="1047310">a</span> <span m="1047369">good</span> <span
  m="1047640">thing.</span></p><p><span m="1049280">I</span> <span
  m="1049370">now</span> <span m="1049580">want</span> <span
  m="1049790">to</span> <span m="1050360">digress</span> <span
  m="1050960">a</span> <span m="1051020">little</span> <span
  m="1051260">bit</span> <span m="1052190">before</span> <span
  m="1052520">we</span> <span m="1052640">come</span> <span
  m="1052850">back</span> <span m="1053150">to</span> <span
  m="1053270">this</span> <span m="1054080">and</span> <span
  m="1054170">look</span> <span m="1054410">at</span> <span
  m="1054470">how</span> <span m="1054680">you</span> <span
  m="1054860">can</span> <span m="1055040">visualize</span> <span
  m="1055790">this--</span> <span m="1056930">Because</span> <span
  m="1057110">this</span> <span m="1057320">is</span> <span m="1057410">a</span>
  <span m="1057470">technique</span> <span m="1058070">you'll</span> <span
  m="1058280">want</span> <span m="1058490">to</span> <span
  m="1058580">use</span> <span m="1059060">as</span> <span
  m="1059210">you</span> <span m="1059360">write</span> <span
  m="1059600">papers</span> <span m="1060110">and</span> <span
  m="1060230">things</span> <span m="1060530">like</span> <span
  m="1060740">that--</span> <span m="1061850">is</span> <span
  m="1062630">how</span> <span m="1062960">do</span> <span m="1063080">we</span>
  <span m="1063350">visualize</span> <span m="1064130">the</span> <span
  m="1064190">variability</span> <span m="1065000">of</span> <span
  m="1065090">the</span> <span m="1065180">data?</span> <span
  m="1066380">And</span> <span m="1066530">it's</span> <span
  m="1066680">usually</span> <span m="1067070">done</span> <span
  m="1067340">with</span> <span m="1067490">something</span> <span
  m="1067850">called</span> <span m="1068090">an</span> <span
  m="1068210">error</span> <span m="1068540">bar.</span> <span
  m="1068910">You've</span> <span m="1069050">all</span> <span
  m="1069260">seen</span> <span m="1069590">these</span> <span
  m="1069800">things</span> <span m="1070130">here.</span> <span
  m="1071510">And</span> <span m="1071720">this</span> <span
  m="1071930">is</span> <span m="1072080">one</span> <span m="1072290">I</span>
  <span m="1072410">took</span> <span m="1072710">from</span> <span
  m="1073040">the</span> <span m="1073370">literature.</span> <span
  m="1074960">This</span> <span m="1075230">is</span> <span
  m="1075660">plotting</span> <span m="1078500">pulse</span> <span
  m="1078890">rate</span> <span m="1080660">against</span> <span
  m="1081620">how</span> <span m="1081740">much</span> <span
  m="1081980">exercise</span> <span m="1082700">you</span> <span
  m="1082820">do</span> <span m="1083400">or</span> <span m="1083560">how</span>
  <span m="1083690">frequently</span> <span m="1084230">you</span> <span
  m="1084380">exercise.</span></p><p><span m="1086130">And</span> <span
  m="1086460">what</span> <span m="1086640">you</span> <span
  m="1086790">can</span> <span m="1086970">see</span> <span
  m="1087300">here</span> <span m="1087810">is</span> <span
  m="1088320">there's</span> <span m="1088560">definitely</span> <span
  m="1089130">a</span> <span m="1089220">downward</span> <span
  m="1089820">trend</span> <span m="1092400">suggesting</span> <span
  m="1093000">that</span> <span m="1093120">the</span> <span
  m="1093210">more</span> <span m="1093450">you</span> <span
  m="1093630">exercise,</span> <span m="1094350">the</span> <span
  m="1094440">lower</span> <span m="1094740">your</span> <span
  m="1095370">average</span> <span m="1095880">resting</span> <span
  m="1096330">pulse.</span> <span m="1097780">That's</span> <span
  m="1098070">probably</span> <span m="1098760">worth</span> <span
  m="1099030">knowing.</span> <span m="1100500">And</span> <span
  m="1100650">these</span> <span m="1100860">error</span> <span
  m="1101190">bars</span> <span m="1101580">give</span> <span
  m="1101790">us</span> <span m="1101970">the</span> <span
  m="1102060">95%</span> <span m="1103830">confidence</span> <span
  m="1104520">intervals</span> <span m="1106380">for</span> <span
  m="1107880">different</span> <span
  m="1108480">subpopulations.</span></p><p><span m="1112330">And</span> <span
  m="1112690">what</span> <span m="1112900">we</span> <span
  m="1113050">can</span> <span m="1113260">see</span> <span
  m="1113620">here</span> <span m="1114250">is</span> <span
  m="1114610">that</span> <span m="1115510">some</span> <span
  m="1115810">of</span> <span m="1115870">them</span> <span
  m="1116050">overlap.</span> <span m="1118310">So,</span> <span
  m="1118580">yes,</span> <span m="1119540">once</span> <span
  m="1119900">a</span> <span m="1119990">fortnight--</span> <span
  m="1121220">two</span> <span m="1121430">weeks</span> <span
  m="1121760">for</span> <span m="1121880">those</span> <span
  m="1122240">of</span> <span m="1122290">you</span> <span
  m="1122340">who</span> <span m="1122390">don't</span> <span
  m="1122570">speak</span> <span m="1122900">British--</span> <span
  m="1125980">it</span> <span m="1126100">does</span> <span
  m="1126400">get</span> <span m="1126580">a</span> <span
  m="1126610">little</span> <span m="1126880">bit</span> <span
  m="1127030">smaller</span> <span m="1127690">than</span> <span
  m="1128140">rarely</span> <span m="1128650">or</span> <span
  m="1128710">never.</span> <span m="1129670">But</span> <span
  m="1129970">the</span> <span m="1130090">confidence</span> <span
  m="1130660">interval</span> <span m="1131110">is</span> <span
  m="1131290">very</span> <span m="1131740">big.</span> <span
  m="1133100">And</span> <span m="1133250">so</span> <span
  m="1133430">maybe</span> <span m="1133790">we</span> <span
  m="1134000">really</span> <span m="1134570">shouldn't</span> <span
  m="1135380">feel</span> <span m="1135620">very</span> <span
  m="1135920">comfortable</span> <span m="1136490">that</span> <span
  m="1136640">it</span> <span m="1136730">would</span> <span
  m="1136880">actually</span> <span m="1137360">help.</span></p><p><span
  m="1139400">The</span> <span m="1139490">thing</span> <span
  m="1139730">we</span> <span m="1139910">can</span> <span
  m="1140360">say</span> <span m="1141830">is</span> <span
  m="1142010">that</span> <span m="1142130">if</span> <span
  m="1142250">the</span> <span m="1142340">confidence</span> <span
  m="1142970">intervals</span> <span m="1143510">don't</span> <span
  m="1144170">overlap,</span> <span m="1146690">we</span> <span
  m="1146810">can</span> <span m="1146990">conclude</span> <span
  m="1147830">that</span> <span m="1147980">the</span> <span
  m="1148070">means</span> <span m="1148430">are</span> <span
  m="1148580">actually</span> <span m="1149240">statistically</span> <span
  m="1150200">significantly</span> <span m="1151010">different,</span> <span
  m="1152650">in</span> <span m="1152770">this</span> <span
  m="1152920">case</span> <span m="1153250">at</span> <span
  m="1153340">the</span> <span m="1153460">95%</span> <span
  m="1154450">level.</span> <span m="1155780">So</span> <span
  m="1155890">here</span> <span m="1156250">we</span> <span
  m="1156460">see</span> <span m="1157330">that</span> <span
  m="1157510">the</span> <span m="1157630">more</span> <span
  m="1157930">than</span> <span m="1158140">weekly</span> <span
  m="1159520">does</span> <span m="1159790">not</span> <span
  m="1160090">overlap</span> <span m="1160750">with</span> <span
  m="1160900">the</span> <span m="1161020">rarely</span> <span
  m="1161500">or</span> <span m="1161590">never.</span> <span
  m="1163870">And</span> <span m="1163920">from</span> <span
  m="1164130">that,</span> <span m="1164500">we</span> <span
  m="1164550">can</span> <span m="1164760">conclude</span> <span
  m="1165330">that</span> <span m="1165480">this</span> <span
  m="1165720">is</span> <span m="1165900">actually,</span> <span
  m="1166740">statistically</span> <span m="1167760">true--</span> <span
  m="1169200">that</span> <span m="1169320">if</span> <span
  m="1169440">you</span> <span m="1169620">exercise</span> <span
  m="1170310">more</span> <span m="1170550">than</span> <span
  m="1170700">weekly,</span> <span m="1171150">your</span> <span
  m="1171360">pulse</span> <span m="1171870">is</span> <span
  m="1172290">likely</span> <span m="1172830">to</span> <span
  m="1172980">be</span> <span m="1173100">lower</span> <span
  m="1173430">than</span> <span m="1173580">if</span> <span
  m="1173700">you</span> <span m="1173820">don't.</span></p><p><span
  m="1175590">If</span> <span m="1175740">confidence</span> <span
  m="1176340">intervals</span> <span m="1177000">do</span> <span
  m="1177300">overlap,</span> <span m="1179450">you</span> <span
  m="1179600">cannot</span> <span m="1180170">conclude</span> <span
  m="1180680">that</span> <span m="1180830">there</span> <span
  m="1180980">is</span> <span m="1181220">no</span> <span
  m="1181610">statistically</span> <span m="1182330">significant</span> <span
  m="1182900">difference.</span> <span m="1183920">There</span> <span
  m="1184070">might</span> <span m="1184370">be,</span> <span
  m="1184580">and</span> <span m="1184700">you</span> <span
  m="1184850">can</span> <span m="1185030">use</span> <span
  m="1185300">other</span> <span m="1185570">tests</span> <span
  m="1185930">to</span> <span m="1186080">find</span> <span
  m="1186350">out</span> <span m="1186470">whether</span> <span
  m="1186740">there</span> <span m="1186950">are.</span> <span
  m="1187800">When</span> <span m="1188110">they</span> <span
  m="1188240">don't</span> <span m="1188540">overlap,</span> <span
  m="1189080">it's</span> <span m="1189230">a</span> <span
  m="1189290">good</span> <span m="1189560">thing.</span> <span
  m="1190190">We</span> <span m="1190340">can</span> <span
  m="1190490">conclude</span> <span m="1190970">something</span> <span
  m="1191390">strong.</span> <span m="1192410">When</span> <span
  m="1192500">they</span> <span m="1192620">do</span> <span
  m="1192890">overlap,</span> <span m="1194090">we</span> <span
  m="1194210">need</span> <span m="1194360">to</span> <span
  m="1194540">investigate</span> <span m="1195380">further.</span></p><p><span
  m="1197960">All</span> <span m="1198050">right,</span> <span
  m="1198380">let's</span> <span m="1198620">look</span> <span
  m="1198830">at</span> <span m="1198950">the</span> <span
  m="1199160">error</span> <span m="1199460">bars</span> <span
  m="1199850">for</span> <span m="1200030">our</span> <span
  m="1200120">temperatures.</span> <span m="1201800">And</span> <span
  m="1201920">again,</span> <span m="1202250">we</span> <span
  m="1202370">can</span> <span m="1202550">plot</span> <span
  m="1202910">those</span> <span m="1203270">using</span> <span
  m="1203600">something</span> <span m="1203990">called</span> <span
  m="1204230">pylab.errorbar.</span> <span m="1204590">Lab</span> <span
  m="1208000">So</span> <span m="1208080">what</span> <span
  m="1208230">it</span> <span m="1208410">takes</span> <span
  m="1209940">is</span> <span m="1210240">two</span> <span
  m="1210480">values,</span> <span m="1211230">the</span> <span
  m="1211350">usual</span> <span m="1212880">x-axis</span> <span
  m="1214860">and</span> <span m="1215040">y-axis,</span> <span
  m="1222730">and</span> <span m="1222820">then</span> <span
  m="1223030">it</span> <span m="1223150">takes</span> <span
  m="1224200">another</span> <span m="1225010">list</span> <span
  m="1225550">of</span> <span m="1225730">the</span> <span
  m="1225850">same</span> <span m="1226240">length,</span> <span
  m="1226630">or</span> <span m="1226690">sequence</span> <span
  m="1227170">of</span> <span m="1227260">the</span> <span
  m="1227380">same</span> <span m="1227680">length,</span> <span
  m="1228520">which</span> <span m="1228760">is</span> <span
  m="1228940">the</span> <span m="1229270">y</span> <span
  m="1229565">errors.</span> <span m="1231450">And</span> <span
  m="1231580">here</span> <span m="1231910">I'm</span> <span
  m="1232000">just</span> <span m="1232240">going</span> <span
  m="1232360">to</span> <span m="1232750">say</span> <span
  m="1232990">1.96</span> <span m="1234910">times</span> <span
  m="1235360">the</span> <span m="1235510">standard</span> <span
  m="1235960">deviations.</span> <span m="1238270">Where</span> <span
  m="1238480">these</span> <span m="1238690">variables</span> <span
  m="1239230">come</span> <span m="1239440">from</span> <span
  m="1239680">you</span> <span m="1239800">can</span> <span
  m="1239950">tell</span> <span m="1240160">by</span> <span
  m="1240310">looking</span> <span m="1240610">at</span> <span
  m="1240700">the</span> <span m="1240820">code.</span> <span
  m="1243340">And</span> <span m="1243490">then</span> <span
  m="1244510">I</span> <span m="1244630">can</span> <span m="1244840">say</span>
  <span m="1245050">the</span> <span m="1245170">format,</span> <span
  m="1245950">I</span> <span m="1246070">want</span> <span m="1246580">an</span>
  <span m="1246790">o</span> <span m="1247450">to</span> <span
  m="1247600">show</span> <span m="1247870">the</span> <span
  m="1247990">mean,</span> <span m="1249040">and</span> <span
  m="1249190">then</span> <span m="1249500">a</span> <span
  m="1249610">label.</span> <span m="1251040">Fmt</span> <span
  m="1251640">stands</span> <span m="1252000">for</span> <span
  m="1252120">format.</span></p><p><span m="1254130">errorbar</span> <span
  m="1254790">has</span> <span m="1255300">different</span> <span
  m="1255900">keyword</span> <span m="1256410">arguments</span> <span
  m="1257600">than</span> <span m="1257820">plot.</span> <span
  m="1258390">You'll</span> <span m="1258570">find</span> <span
  m="1258900">that</span> <span m="1259050">you</span> <span
  m="1259170">look</span> <span m="1259410">at</span> <span
  m="1259500">different</span> <span m="1259860">ways</span> <span
  m="1260310">like</span> <span m="1260550">histograms</span> <span
  m="1261510">and</span> <span m="1261590">bar</span> <span
  m="1262140">plots,</span> <span m="1263540">scatterplots--</span> <span
  m="1264530">they</span> <span m="1264660">all</span> <span
  m="1264990">have</span> <span m="1265200">different</span> <span
  m="1265890">available</span> <span m="1266400">keyword</span> <span
  m="1266850">arguments.</span> <span m="1267360">So</span> <span
  m="1267540">you</span> <span m="1267600">have</span> <span
  m="1267690">to</span> <span m="1267780">look</span> <span
  m="1268050">up</span> <span m="1268200">each</span> <span
  m="1268410">individually.</span> <span m="1270300">But</span> <span
  m="1271580">other</span> <span m="1271790">than</span> <span
  m="1272000">this,</span> <span m="1272270">everything</span> <span
  m="1272720">in</span> <span m="1272780">the</span> <span
  m="1272870">code</span> <span m="1273230">should</span> <span
  m="1273410">look</span> <span m="1273620">very</span> <span
  m="1273920">familiar</span> <span m="1274430">to</span> <span
  m="1274610">you.</span></p><p><span m="1276750">And</span> <span
  m="1276850">when</span> <span m="1277000">I</span> <span
  m="1277090">run</span> <span m="1277330">the</span> <span
  m="1277450">code,</span> <span m="1278410">I</span> <span
  m="1278530">get</span> <span m="1278770">this.</span> <span
  m="1282850">And</span> <span m="1282970">so</span> <span
  m="1283120">what</span> <span m="1283270">I've</span> <span
  m="1283390">plotted</span> <span m="1283930">here</span> <span
  m="1285660">is</span> <span m="1286110">the</span> <span
  m="1286260">mean</span> <span m="1287980">against</span> <span
  m="1288400">the</span> <span m="1288520">sample</span> <span
  m="1289000">size</span> <span m="1290350">with</span> <span
  m="1290560">errorbars.</span> <span m="1294250">And</span> <span
  m="1295060">100</span> <span m="1295450">trials,</span> <span
  m="1296070">in</span> <span m="1296170">this</span> <span
  m="1296320">case.</span> <span m="1297560">So</span> <span
  m="1297610">what</span> <span m="1297790">you</span> <span
  m="1297940">can</span> <span m="1298120">see</span> <span
  m="1299770">is</span> <span m="1300100">that,</span> <span
  m="1301060">as</span> <span m="1301420">the</span> <span
  m="1301570">sample</span> <span m="1302200">size</span> <span
  m="1303790">gets</span> <span m="1304660">bigger,</span> <span
  m="1306530">the</span> <span m="1306610">errorbars</span> <span
  m="1307510">get</span> <span m="1307810">smaller.</span> <span
  m="1312010">The</span> <span m="1312160">estimates</span> <span
  m="1312700">of</span> <span m="1312790">the</span> <span
  m="1312910">mean</span> <span m="1313270">don't</span> <span
  m="1313450">necessarily</span> <span m="1314200">get</span> <span
  m="1314380">any</span> <span m="1314590">better.</span></p><p><span
  m="1316770">In</span> <span m="1316860">fact,</span> <span
  m="1317290">we</span> <span m="1317340">can</span> <span
  m="1317520">look</span> <span m="1318870">here,</span> <span
  m="1320650">and</span> <span m="1321070">this</span> <span
  m="1321280">is</span> <span m="1321400">actually</span> <span
  m="1321820">a</span> <span m="1321910">worse</span> <span
  m="1322270">estimate,</span> <span m="1323680">relative</span> <span
  m="1324070">to</span> <span m="1324190">the</span> <span
  m="1324310">true</span> <span m="1324580">mean,</span> <span
  m="1325330">than</span> <span m="1325480">the</span> <span
  m="1325600">previous</span> <span m="1326110">two</span> <span
  m="1326320">estimates.</span> <span m="1327910">But</span> <span
  m="1328030">we</span> <span m="1328180">can</span> <span
  m="1328330">have</span> <span m="1328450">more</span> <span
  m="1328660">confidence</span> <span m="1329320">in</span> <span
  m="1329410">it.</span> <span m="1330370">The</span> <span
  m="1330460">same</span> <span m="1330790">thing</span> <span
  m="1331000">we</span> <span m="1331150">saw</span> <span m="1332050">on</span>
  <span m="1332200">Monday</span> <span m="1332650">when</span> <span
  m="1332830">we</span> <span m="1332980">looked</span> <span
  m="1333250">at</span> <span m="1333340">estimating</span> <span
  m="1333970">pi,</span> <span m="1335140">dropping</span> <span
  m="1335620">more</span> <span m="1335800">needles</span> <span
  m="1336190">didn't</span> <span m="1336520">necessarily</span> <span
  m="1337300">give</span> <span m="1337480">us</span> <span m="1337630">a</span>
  <span m="1337660">more</span> <span m="1337900">accurate</span> <span
  m="1338350">estimate.</span> <span m="1339550">But</span> <span
  m="1339730">it</span> <span m="1339820">gave</span> <span
  m="1340060">us</span> <span m="1340210">more</span> <span
  m="1340480">confidence</span> <span m="1341200">in</span> <span
  m="1341290">our</span> <span m="1341440">estimate.</span> <span
  m="1342990">And</span> <span m="1343080">the</span> <span
  m="1343170">same</span> <span m="1343500">thing</span> <span
  m="1343710">is</span> <span m="1343800">happening</span> <span
  m="1344280">here.</span> <span m="1345770">And</span> <span
  m="1345790">we</span> <span m="1345910">can</span> <span
  m="1346060">see</span> <span m="1346300">that,</span> <span
  m="1346480">steadily,</span> <span m="1347020">we</span> <span
  m="1347170">can</span> <span m="1347290">get</span> <span
  m="1347500">more</span> <span m="1347710">and</span> <span
  m="1347800">more</span> <span m="1348040">confidence.</span></p><p><span
  m="1351620">So</span> <span m="1354020">larger</span> <span
  m="1355310">samples</span> <span m="1355880">seem</span> <span
  m="1356570">to</span> <span m="1356720">be</span> <span
  m="1356900">better.</span> <span m="1359010">That's</span> <span
  m="1359240">a</span> <span m="1359330">good</span> <span
  m="1359600">thing.</span> <span m="1361010">Going</span> <span
  m="1361310">from</span> <span m="1361490">a</span> <span
  m="1361550">sample</span> <span m="1361970">size</span> <span
  m="1362510">of</span> <span m="1363230">50</span> <span m="1363680">to</span>
  <span m="1363830">a</span> <span m="1363890">sample</span> <span
  m="1364280">size</span> <span m="1364610">of</span> <span
  m="1364700">600</span> <span m="1366200">reduced</span> <span
  m="1366680">the</span> <span m="1366800">confidence</span> <span
  m="1367470">interval,</span> <span m="1367795">as</span> <span
  m="1368120">you</span> <span m="1368270">can</span> <span
  m="1368450">see,</span> <span m="1369560">from</span> <span
  m="1372410">a</span> <span m="1372480">fairly</span> <span
  m="1372990">large</span> <span m="1375790">confidence</span> <span
  m="1376290">interval</span> <span m="1376590">here,</span> <span
  m="1376800">ran</span> <span m="1377070">from</span> <span
  m="1377430">just</span> <span m="1377910">below</span> <span
  m="1378210">14</span> <span m="1378750">to</span> <span
  m="1378810">almost</span> <span m="1379200">19,</span> <span
  m="1380610">as</span> <span m="1380820">opposed</span> <span
  m="1381330">to</span> <span m="1382470">15</span> <span m="1382890">and</span>
  <span m="1383010">a</span> <span m="1383070">half</span> <span
  m="1383430">or</span> <span m="1383520">so</span> <span m="1383850">to</span>
  <span m="1384470">17.</span> <span m="1387940">I</span> <span
  m="1388270">said</span> <span m="1388540">confidence</span> <span
  m="1389050">interval</span> <span m="1389410">here.</span> <span
  m="1389620">I</span> <span m="1389710">should</span> <span
  m="1389950">not</span> <span m="1390220">have.</span> <span
  m="1390550">I</span> <span m="1390610">should</span> <span
  m="1390850">have</span> <span m="1390940">said</span> <span
  m="1391510">standard</span> <span m="1391930">deviations.</span> <span
  m="1393850">That's</span> <span m="1394160">an</span> <span
  m="1394450">error</span> <span m="1394840">on</span> <span
  m="1395020">the</span> <span m="1395110">slides.</span></p><p><span
  m="1398370">OK,</span> <span m="1399470">what's</span> <span
  m="1399710">the</span> <span m="1399830">catch?</span> <span
  m="1400910">Well,</span> <span m="1401120">we're</span> <span
  m="1401270">now</span> <span m="1401570">looking</span> <span
  m="1402050">at</span> <span m="1403190">100</span> <span
  m="1404240">samples,</span> <span m="1406010">each</span> <span
  m="1406280">of</span> <span m="1406400">size</span> <span
  m="1406760">600.</span> <span m="1407990">So</span> <span
  m="1408140">we've</span> <span m="1408270">looked</span> <span
  m="1408500">at</span> <span m="1408590">a</span> <span
  m="1408680">total</span> <span m="1409220">of</span> <span
  m="1411630">600,000</span> <span m="1413970">examples.</span> <span
  m="1416260">What</span> <span m="1416410">has</span> <span
  m="1416590">this</span> <span m="1416820">bought</span> <span
  m="1417215">us?</span> <span m="1418690">Absolutely</span> <span
  m="1419350">nothing.</span> <span m="1422350">The</span> <span
  m="1422440">entire</span> <span m="1422830">population</span> <span
  m="1423550">only</span> <span m="1423860">contained</span> <span
  m="1424300">about</span> <span m="1424530">422,000</span> <span
  m="1425860">samples.</span> <span m="1427230">We</span> <span
  m="1427360">might</span> <span m="1427660">as</span> <span
  m="1427825">well</span> <span m="1428740">have</span> <span
  m="1428950">looked</span> <span m="1429220">at</span> <span
  m="1429340">the</span> <span m="1429430">whole</span> <span
  m="1429790">thing,</span> <span m="1431020">rather</span> <span
  m="1431350">than</span> <span m="1431560">take</span> <span
  m="1431950">a</span> <span m="1432010">few</span> <span m="1432340">of</span>
  <span m="1432460">them.</span> <span m="1433590">So</span> <span
  m="1433860">it's</span> <span m="1434040">like,</span> <span
  m="1434380">you</span> <span m="1434610">might</span> <span
  m="1434760">as</span> <span m="1434910">well</span> <span
  m="1435030">hold</span> <span m="1435330">an</span> <span
  m="1435450">election</span> <span m="1435990">rather</span> <span
  m="1436290">than</span> <span m="1436470">ask</span> <span
  m="1436740">800</span> <span m="1437130">people</span> <span
  m="1439470">a</span> <span m="1439530">million</span> <span
  m="1439860">times</span> <span m="1440130">who</span> <span
  m="1440220">they're</span> <span m="1440340">going</span> <span
  m="1440490">to</span> <span m="1440550">vote</span> <span
  m="1440790">for.</span> <span m="1443250">Sure,</span> <span
  m="1443580">it's</span> <span m="1443730">good.</span> <span
  m="1444030">But</span> <span m="1444180">it</span> <span
  m="1444240">gave</span> <span m="1444600">us</span> <span
  m="1444810">nothing.</span></p><p><span m="1450440">Suppose</span> <span
  m="1450920">we</span> <span m="1451040">did</span> <span m="1451160">it</span>
  <span m="1451280">only</span> <span m="1451580">once.</span> <span
  m="1453170">Suppose</span> <span m="1453800">we</span> <span
  m="1453920">took</span> <span m="1454310">only</span> <span
  m="1454640">one</span> <span m="1454910">sample,</span> <span
  m="1455480">as</span> <span m="1455660">we</span> <span m="1455840">see</span>
  <span m="1456080">in</span> <span m="1456170">political</span> <span
  m="1456710">polls.</span> <span m="1458150">What</span> <span
  m="1458360">can</span> <span m="1458540">we</span> <span
  m="1458690">can</span> <span m="1458870">conclude</span> <span
  m="1459560">from</span> <span m="1459770">that?</span> <span
  m="1461470">And</span> <span m="1461520">the</span> <span
  m="1461670">answer</span> <span m="1462060">is</span> <span
  m="1462180">actually</span> <span m="1462720">kind</span> <span
  m="1463020">of</span> <span m="1463080">surprising,</span> <span
  m="1464910">how</span> <span m="1465120">much</span> <span
  m="1465510">we</span> <span m="1465690">can</span> <span
  m="1466200">conclude,</span> <span m="1466770">in</span> <span
  m="1466920">a</span> <span m="1466950">real</span> <span
  m="1467280">mathematical</span> <span m="1468090">sense,</span> <span
  m="1468420">from</span> <span m="1468630">one</span> <span
  m="1468840">sample.</span> <span m="1470350">And,</span> <span
  m="1470370">again,</span> <span m="1470730">this</span> <span
  m="1470940">is</span> <span m="1471090">thanks</span> <span
  m="1471510">to</span> <span m="1471690">our</span> <span
  m="1471810">old</span> <span m="1472020">friend,</span> <span
  m="1472440">the</span> <span m="1473070">central</span> <span
  m="1473550">limit</span> <span m="1473970">theorem.</span></p><p><span
  m="1475930">So</span> <span m="1476010">if</span> <span m="1476130">you</span>
  <span m="1476250">recall</span> <span m="1476700">the</span> <span
  m="1476820">theorem,</span> <span m="1477180">it</span> <span
  m="1477240">had</span> <span m="1477390">three</span> <span
  m="1477690">parts.</span> <span m="1479730">Up</span> <span
  m="1479880">till</span> <span m="1480150">now,</span> <span
  m="1482060">we've</span> <span m="1482270">exploited</span> <span
  m="1482900">the</span> <span m="1483020">first</span> <span
  m="1483350">two.</span> <span m="1488990">We've</span> <span
  m="1489240">used</span> <span m="1489490">the</span> <span
  m="1489610">fact</span> <span m="1490030">that</span> <span
  m="1490180">the</span> <span m="1490300">means</span> <span
  m="1490600">will</span> <span m="1490690">be</span> <span
  m="1490840">normally</span> <span m="1491230">distributed</span> <span
  m="1492180">so</span> <span m="1492360">that</span> <span
  m="1492490">we</span> <span m="1492640">could</span> <span
  m="1492820">use</span> <span m="1493120">the</span> <span
  m="1493240">empirical</span> <span m="1493870">rule</span> <span
  m="1494200">to</span> <span m="1494320">get</span> <span
  m="1494470">confidence</span> <span m="1495040">intervals,</span> <span
  m="1497020">and</span> <span m="1497230">the</span> <span
  m="1497350">fact</span> <span m="1497770">that</span> <span
  m="1499390">the</span> <span m="1499750">mean</span> <span
  m="1500050">of</span> <span m="1500170">the</span> <span
  m="1500260">sample</span> <span m="1500650">means</span> <span
  m="1500980">would</span> <span m="1501160">be</span> <span
  m="1501310">close</span> <span m="1501700">to</span> <span
  m="1501820">the</span> <span m="1501970">mean</span> <span
  m="1502270">of</span> <span m="1502420">the</span> <span
  m="1502540">population.</span></p><p><span m="1504420">Now</span> <span
  m="1504750">I</span> <span m="1504810">want</span> <span m="1505050">to</span>
  <span m="1505140">use</span> <span m="1505740">the</span> <span
  m="1505890">third</span> <span m="1506460">piece</span> <span
  m="1506820">of</span> <span m="1506940">it,</span> <span
  m="1509080">which</span> <span m="1509260">is</span> <span
  m="1509380">that</span> <span m="1509530">the</span> <span
  m="1509650">variance</span> <span m="1510340">of</span> <span
  m="1510430">the</span> <span m="1510520">sample</span> <span
  m="1510970">means</span> <span m="1512080">will</span> <span
  m="1512230">be</span> <span m="1512410">close</span> <span
  m="1512860">to</span> <span m="1512980">the</span> <span
  m="1513100">variance</span> <span m="1513550">of</span> <span
  m="1513610">the</span> <span m="1513730">population</span> <span
  m="1515230">divided</span> <span m="1515800">by</span> <span
  m="1515980">the</span> <span m="1516070">sample</span> <span
  m="1516490">size.</span> <span m="1518440">And</span> <span
  m="1518560">we're</span> <span m="1518620">going</span> <span
  m="1518770">to</span> <span m="1518860">use</span> <span
  m="1519220">that</span> <span m="1520000">to</span> <span
  m="1520120">compute</span> <span m="1520540">something</span> <span
  m="1520990">called</span> <span m="1521440">the</span> <span
  m="1521560">standard</span> <span m="1522310">error--</span> <span
  m="1524650">formerly</span> <span m="1525190">the</span> <span
  m="1525310">standard</span> <span m="1525790">error</span> <span
  m="1526120">of</span> <span m="1526240">the</span> <span
  m="1526360">mean.</span> <span m="1527470">People</span> <span
  m="1527920">often</span> <span m="1528340">just</span> <span
  m="1528550">call</span> <span m="1528760">it</span> <span
  m="1528910">the</span> <span m="1529030">standard</span> <span
  m="1529510">error.</span> <span m="1530740">And</span> <span
  m="1530950">I</span> <span m="1531160">will</span> <span
  m="1531370">be,</span> <span m="1532360">alas,</span> <span
  m="1532870">inconsistent.</span> <span m="1535030">I</span> <span
  m="1535540">sometimes</span> <span m="1536020">call</span> <span
  m="1536230">it</span> <span m="1536320">one,</span> <span
  m="1536590">sometimes</span> <span m="1537280">the</span> <span
  m="1537580">other.</span></p><p><span m="1540060">It's</span> <span
  m="1540300">an</span> <span m="1540690">incredibly</span> <span
  m="1541560">simple</span> <span m="1541920">formula.</span> <span
  m="1543302">It</span> <span m="1543750">says</span> <span
  m="1544020">the</span> <span m="1544140">standard</span> <span
  m="1544950">error</span> <span m="1546750">is</span> <span
  m="1546960">going</span> <span m="1547140">to</span> <span
  m="1547200">be</span> <span m="1547410">equal</span> <span
  m="1547740">to</span> <span m="1547890">sigma,</span> <span
  m="1551380">where</span> <span m="1551560">sigma</span> <span
  m="1552100">is</span> <span m="1552550">the</span> <span
  m="1552700">population</span> <span m="1553720">standard</span> <span
  m="1554230">deviation</span> <span m="1556330">divided</span> <span
  m="1556990">by</span> <span m="1557950">the</span> <span
  m="1558040">square</span> <span m="1558670">root</span> <span
  m="1558940">of</span> <span m="1559120">n,</span> <span
  m="1561300">which</span> <span m="1561410">is</span> <span
  m="1561560">going</span> <span m="1561710">to</span> <span
  m="1561800">be</span> <span m="1561950">the</span> <span
  m="1562100">size</span> <span m="1562580">of</span> <span
  m="1562670">the</span> <span m="1562790">sample.</span> <span
  m="1569960">And</span> <span m="1570110">then</span> <span
  m="1570290">there's</span> <span m="1570500">just</span> <span
  m="1570800">this</span> <span m="1571010">very</span> <span
  m="1571340">small</span> <span m="1571940">function</span> <span
  m="1572450">that</span> <span m="1572570">implements</span> <span
  m="1573140">it.</span> <span m="1574880">So</span> <span m="1575330">we</span>
  <span m="1575450">can</span> <span m="1575630">compute</span> <span
  m="1576050">this</span> <span m="1576260">thing</span> <span
  m="1576500">called</span> <span m="1576740">the</span> <span
  m="1576830">standard</span> <span m="1577370">error</span> <span
  m="1577640">of</span> <span m="1577760">the</span> <span
  m="1577850">mean</span> <span m="1579010">in</span> <span m="1579140">a</span>
  <span m="1579170">very</span> <span m="1579710">straightforward</span> <span
  m="1580760">way.</span></p><p><span m="1587580">We</span> <span
  m="1587670">can</span> <span m="1587850">compute</span> <span
  m="1588270">it.</span> <span m="1589430">But</span> <span
  m="1589670">does</span> <span m="1589970">it</span> <span
  m="1590090">work?</span> <span m="1590960">What</span> <span
  m="1591110">do</span> <span m="1591260">I</span> <span m="1591350">mean</span>
  <span m="1591560">by</span> <span m="1591770">work?</span> <span
  m="1594080">I</span> <span m="1594200">mean,</span> <span
  m="1594860">what's</span> <span m="1595340">the</span> <span
  m="1595460">relationship</span> <span m="1596240">of</span> <span
  m="1596360">the</span> <span m="1596480">standard</span> <span
  m="1596990">error</span> <span m="1597410">to</span> <span
  m="1597590">the</span> <span m="1597710">standard</span> <span
  m="1598160">deviation?</span> <span m="1599690">Because,</span> <span
  m="1599930">remember,</span> <span m="1600320">that</span> <span
  m="1600530">was</span> <span m="1600710">our</span> <span
  m="1600890">goal,</span> <span m="1602060">was</span> <span
  m="1602360">to</span> <span m="1603290">understand</span> <span
  m="1605300">the</span> <span m="1605400">standard</span> <span
  m="1605790">deviation</span> <span m="1606590">so</span> <span
  m="1606690">we</span> <span m="1606840">could</span> <span
  m="1607020">use</span> <span m="1607260">the</span> <span
  m="1607380">empirical</span> <span m="1607950">rule.</span></p><p><span
  m="1609340">Well,</span> <span m="1609450">let's</span> <span
  m="1609780">test</span> <span m="1610260">the</span> <span
  m="1610380">standard</span> <span m="1610860">error</span> <span
  m="1611130">of</span> <span m="1611220">the</span> <span
  m="1611340">mean.</span> <span m="1612720">So</span> <span
  m="1612930">here's</span> <span m="1613290">a</span> <span
  m="1614370">slightly</span> <span m="1615030">longer</span> <span
  m="1615450">piece</span> <span m="1615750">of</span> <span
  m="1615870">code.</span> <span m="1617480">I'm</span> <span
  m="1617640">going</span> <span m="1617760">to</span> <span
  m="1617820">look</span> <span m="1618000">at</span> <span m="1618090">a</span>
  <span m="1618150">bunch</span> <span m="1618480">of</span> <span
  m="1618570">different</span> <span m="1618870">sample</span> <span
  m="1619320">sizes,</span> <span m="1620730">from</span> <span
  m="1621000">25</span> <span m="1621780">to</span> <span
  m="1622080">600,</span> <span m="1625030">50</span> <span
  m="1625420">trials</span> <span m="1625930">each.</span> <span
  m="1630390">So</span> <span m="1630600">getHighs</span> <span
  m="1631350">is</span> <span m="1631500">just</span> <span m="1631770">a</span>
  <span m="1631830">function</span> <span m="1632340">that</span> <span
  m="1632520">returns</span> <span m="1633150">the</span> <span
  m="1634100">temperatures.</span> <span m="1635970">I'm</span> <span
  m="1636060">going</span> <span m="1636180">to</span> <span
  m="1636270">get</span> <span m="1636510">the</span> <span
  m="1636660">standard</span> <span m="1637140">deviation</span> <span
  m="1637770">of</span> <span m="1637860">the</span> <span
  m="1637950">whole</span> <span m="1638190">population,</span> <span
  m="1641760">then</span> <span m="1641870">the</span> <span
  m="1641990">standard</span> <span m="1642530">error</span> <span
  m="1642830">of</span> <span m="1642950">the</span> <span
  m="1643070">means</span> <span m="1644120">and</span> <span
  m="1644330">the</span> <span m="1644420">sample</span> <span
  m="1645380">standard</span> <span m="1645830">deviations,</span> <span
  m="1646670">both.</span> <span m="1649250">And</span> <span
  m="1649410">then</span> <span m="1649540">I'm</span> <span
  m="1649660">just</span> <span m="1649870">going</span> <span
  m="1649990">to</span> <span m="1650080">go</span> <span
  m="1650320">through</span> <span m="1650680">and</span> <span
  m="1651040">run</span> <span m="1651310">it.</span> <span
  m="1652220">So</span> <span m="1652330">for</span> <span
  m="1652480">size</span> <span m="1652930">and</span> <span
  m="1653050">sample</span> <span m="1653500">size,</span> <span
  m="1654970">I'm</span> <span m="1655120">going</span> <span
  m="1655240">to</span> <span m="1656630">append</span> <span
  m="1657050">the</span> <span m="1657170">standard</span> <span
  m="1657680">error</span> <span m="1657980">of</span> <span
  m="1658040">the</span> <span m="1658190">mean.</span> <span
  m="1660060">And</span> <span m="1660140">remember,</span> <span
  m="1660560">that</span> <span m="1661000">uses</span> <span
  m="1661670">the</span> <span m="1661790">population</span> <span
  m="1662600">standard</span> <span m="1662990">deviation</span> <span
  m="1663680">and</span> <span m="1663890">the</span> <span
  m="1663980">size</span> <span m="1664430">of</span> <span
  m="1664520">the</span> <span m="1664640">sample.</span> <span
  m="1666770">So</span> <span m="1666910">I'll</span> <span
  m="1667330">compute</span> <span m="1667780">all</span> <span
  m="1668080">the</span> <span m="1668520">SEMs.</span> <span
  m="1670030">And</span> <span m="1670150">then</span> <span
  m="1670360">I'm</span> <span m="1670450">going</span> <span
  m="1670600">to</span> <span m="1670660">compute</span> <span
  m="1671110">all</span> <span m="1671560">the</span> <span
  m="1672670">actual</span> <span m="1673180">standard</span> <span
  m="1673600">deviations,</span> <span m="1674440">as</span> <span
  m="1674590">well.</span> <span m="1676890">And</span> <span
  m="1676910">then</span> <span m="1677060">we'll</span> <span
  m="1677210">produce</span> <span m="1678080">a</span> <span
  m="1678140">bunch</span> <span m="1678410">of</span> <span
  m="1678470">plots--</span> <span m="1679270">or</span> <span
  m="1679390">a</span> <span m="1679540">plot,</span> <span
  m="1679910">actually.</span></p><p><span m="1682210">All</span> <span
  m="1682270">right,</span> <span m="1683170">so</span> <span
  m="1683290">let's</span> <span m="1683500">see</span> <span
  m="1683680">what</span> <span m="1683830">that</span> <span
  m="1683980">plot</span> <span m="1684400">looks</span> <span
  m="1684730">like.</span> <span m="1688410">Pretty</span> <span
  m="1688770">striking.</span> <span m="1691540">So</span> <span
  m="1691870">we</span> <span m="1691960">see</span> <span
  m="1692410">the</span> <span m="1692530">blue</span> <span
  m="1692860">solid</span> <span m="1693370">line</span> <span
  m="1694420">is</span> <span m="1694600">the</span> <span
  m="1694720">standard</span> <span m="1695320">deviation</span> <span
  m="1697060">of</span> <span m="1698190">the</span> <span m="1698320">50</span>
  <span m="1698770">means.</span> <span m="1700550">And</span> <span
  m="1700700">the</span> <span m="1700820">red</span> <span
  m="1701120">dotted</span> <span m="1701540">line</span> <span
  m="1702680">is</span> <span m="1702920">the</span> <span
  m="1703010">standard</span> <span m="1703610">error</span> <span
  m="1703970">of</span> <span m="1704120">the</span> <span
  m="1704210">mean.</span> <span m="1706800">So</span> <span
  m="1706980">we</span> <span m="1707130">can</span> <span
  m="1707280">see,</span> <span m="1707640">quite</span> <span
  m="1708000">strikingly</span> <span m="1708810">here,</span> <span
  m="1709950">that</span> <span m="1710160">they</span> <span
  m="1710370">really</span> <span m="1710970">track</span> <span
  m="1711390">each</span> <span m="1711600">other</span> <span
  m="1711840">very</span> <span m="1712290">well.</span> <span
  m="1715950">And</span> <span m="1716100">this</span> <span
  m="1716310">is</span> <span m="1716430">saying</span> <span
  m="1717600">that</span> <span m="1718860">I</span> <span
  m="1719040">can</span> <span m="1720640">anticipate</span> <span
  m="1721870">what</span> <span m="1722170">the</span> <span
  m="1722290">standard</span> <span m="1722710">deviation</span> <span
  m="1723250">would</span> <span m="1723430">be</span> <span
  m="1723730">by</span> <span m="1724600">computing</span> <span
  m="1725110">the</span> <span m="1725200">standard</span> <span
  m="1725710">error.</span></p><p><span m="1727760">Which</span> <span
  m="1727840">is</span> <span m="1727990">really</span> <span
  m="1728350">useful,</span> <span m="1729550">because</span> <span
  m="1729730">now</span> <span m="1730000">I</span> <span
  m="1730150">have</span> <span m="1730510">one</span> <span
  m="1730870">sample.</span> <span m="1731530">I</span> <span
  m="1731650">computed</span> <span m="1732170">standard</span> <span
  m="1732670">error.</span> <span m="1734510">And</span> <span
  m="1734930">I</span> <span m="1735080">get</span> <span
  m="1735590">something</span> <span m="1736070">very</span> <span
  m="1736490">similar</span> <span m="1736850">to</span> <span
  m="1736940">what</span> <span m="1737090">I</span> <span
  m="1737210">get</span> <span m="1737420">of</span> <span
  m="1737540">the</span> <span m="1737630">standard</span> <span
  m="1738020">deviation</span> <span m="1738660">if</span> <span
  m="1738770">I</span> <span m="1738830">took</span> <span m="1739040">50</span>
  <span m="1739460">samples</span> <span m="1740690">and</span> <span
  m="1740840">looked</span> <span m="1741050">at</span> <span
  m="1741170">the</span> <span m="1741260">standard</span> <span
  m="1741620">deviation</span> <span m="1742190">of</span> <span
  m="1742250">those</span> <span m="1742430">50</span> <span
  m="1742760">samples.</span> <span m="1744710">All</span> <span
  m="1744810">right,</span> <span m="1745480">so</span> <span
  m="1746710">not</span> <span m="1746950">obvious</span> <span
  m="1747400">that</span> <span m="1747520">this</span> <span
  m="1747700">would</span> <span m="1747850">be</span> <span
  m="1747970">true,</span> <span m="1748270">right?</span> <span
  m="1749260">That</span> <span m="1749410">I</span> <span
  m="1749560">could</span> <span m="1749740">use</span> <span
  m="1750010">this</span> <span m="1750190">simple</span> <span
  m="1750580">formula,</span> <span m="1752170">and</span> <span
  m="1752320">the</span> <span m="1752470">two</span> <span
  m="1752740">things</span> <span m="1753040">would</span> <span
  m="1753160">track</span> <span m="1753550">each</span> <span
  m="1753760">other</span> <span m="1754000">so</span> <span
  m="1754210">well.</span> <span m="1757730">And</span> <span
  m="1758120">it's</span> <span m="1758330">not</span> <span
  m="1758570">a</span> <span m="1758630">coincidence,</span> <span
  m="1759410">by</span> <span m="1759620">the</span> <span
  m="1759770">way,</span> <span m="1760680">that</span> <span
  m="1760700">as</span> <span m="1760820">I</span> <span m="1760880">get</span>
  <span m="1761090">out</span> <span m="1761270">here</span> <span
  m="1761480">near</span> <span m="1761720">the</span> <span
  m="1761930">end,</span> <span m="1762200">they're</span> <span
  m="1762380">really</span> <span m="1762710">lying</span> <span
  m="1763070">on</span> <span m="1763160">top</span> <span m="1763460">of</span>
  <span m="1763550">each</span> <span m="1763760">other.</span> <span
  m="1766040">As</span> <span m="1766250">the</span> <span
  m="1766340">sample</span> <span m="1766760">size</span> <span
  m="1767120">gets</span> <span m="1767800">much</span> <span
  m="1768140">larger,</span> <span m="1769380">they</span> <span
  m="1769400">really</span> <span m="1769820">will</span> <span
  m="1770060">coincide.</span></p><p><span m="1773240">So</span> <span
  m="1773450">one,</span> <span m="1774590">does</span> <span
  m="1774710">everyone</span> <span m="1775700">understand</span> <span
  m="1776330">the</span> <span m="1776450">difference</span> <span
  m="1776960">between</span> <span m="1777230">the</span> <span
  m="1777320">standard</span> <span m="1777680">deviation</span> <span
  m="1778015">and</span> <span m="1778350">the</span> <span
  m="1778450">standard</span> <span m="1778880">error?</span> <span
  m="1780600">No.</span> <span m="1781290">OK.</span> <span
  m="1782400">So</span> <span m="1782580">how</span> <span m="1782730">do</span>
  <span m="1782820">we</span> <span m="1782970">compute</span> <span
  m="1783330">a</span> <span m="1783390">standard</span> <span
  m="1783780">deviation?</span> <span m="1784500">To</span> <span
  m="1784620">do</span> <span m="1784860">that,</span> <span
  m="1785730">we</span> <span m="1785880">have</span> <span
  m="1786060">to</span> <span m="1786180">look</span> <span
  m="1786390">at</span> <span m="1786480">many</span> <span
  m="1786840">samples--</span> <span m="1788520">in</span> <span
  m="1788640">this</span> <span m="1788820">case</span> <span
  m="1789120">50--</span> <span m="1790380">and</span> <span
  m="1790710">we</span> <span m="1790950">compute</span> <span
  m="1791490">how</span> <span m="1791670">much</span> <span
  m="1791910">variation</span> <span m="1792540">there</span> <span
  m="1792690">is</span> <span m="1792840">in</span> <span
  m="1792930">those</span> <span m="1793110">50</span> <span
  m="1793470">samples.</span></p><p><span m="1796110">For</span> <span
  m="1796230">the</span> <span m="1796330">standard</span> <span
  m="1796890">error,</span> <span m="1797730">we</span> <span
  m="1797820">look</span> <span m="1798000">at</span> <span
  m="1798150">one</span> <span m="1798480">sample,</span> <span
  m="1800130">and</span> <span m="1800250">we</span> <span
  m="1800370">compute</span> <span m="1800850">this</span> <span
  m="1801090">thing</span> <span m="1801330">called</span> <span
  m="1801570">the</span> <span m="1801690">standard</span> <span
  m="1802170">error.</span> <span m="1803340">And</span> <span
  m="1803490">we</span> <span m="1803670">argue</span> <span
  m="1804150">that</span> <span m="1804300">we</span> <span
  m="1804420">get</span> <span m="1804660">the</span> <span
  m="1804780">same</span> <span m="1805260">number,</span> <span
  m="1805980">more</span> <span m="1806310">or</span> <span
  m="1806370">less,</span> <span m="1807570">that</span> <span
  m="1807690">we</span> <span m="1807840">would</span> <span
  m="1807990">have</span> <span m="1808110">gotten</span> <span
  m="1808590">had</span> <span m="1808800">we</span> <span
  m="1808950">taken</span> <span m="1809400">50</span> <span
  m="1809850">samples</span> <span m="1810390">or</span> <span
  m="1810510">100</span> <span m="1810960">samples</span> <span
  m="1812040">and</span> <span m="1812160">computed</span> <span
  m="1812640">the</span> <span m="1812730">standard</span> <span
  m="1813120">deviation.</span> <span m="1815380">So</span> <span
  m="1815610">I</span> <span m="1815820">can</span> <span
  m="1816300">avoid</span> <span m="1817740">taking</span> <span
  m="1818190">all</span> <span m="1818370">50</span> <span
  m="1818760">samples</span> <span m="1819810">if</span> <span
  m="1819960">my</span> <span m="1820140">only</span> <span
  m="1820500">reason</span> <span m="1820800">for</span> <span
  m="1820980">doing</span> <span m="1821370">it</span> <span
  m="1821460">was</span> <span m="1821700">to</span> <span
  m="1821820">get</span> <span m="1822540">the</span> <span
  m="1822630">standard</span> <span m="1823020">deviation.</span> <span
  m="1824410">I</span> <span m="1824510">can</span> <span
  m="1824580">take</span> <span m="1824820">one</span> <span
  m="1825120">sample</span> <span m="1825570">instead</span> <span
  m="1826140">and</span> <span m="1826290">use</span> <span
  m="1827160">the</span> <span m="1827250">standard</span> <span
  m="1827730">error</span> <span m="1828000">of</span> <span
  m="1828090">the</span> <span m="1828210">mean.</span> <span
  m="1830220">So</span> <span m="1831000">going</span> <span
  m="1831300">back</span> <span m="1831540">to</span> <span
  m="1831660">my</span> <span m="1831810">temperature--</span> <span
  m="1832950">instead</span> <span m="1833340">of</span> <span
  m="1833490">having</span> <span m="1833910">to</span> <span
  m="1834060">look</span> <span m="1834330">at</span> <span
  m="1835610">lots</span> <span m="1836150">of</span> <span
  m="1836270">samples,</span> <span m="1836840">I</span> <span
  m="1836960">only</span> <span m="1837140">have</span> <span
  m="1837260">to</span> <span m="1837380">look</span> <span
  m="1837560">at</span> <span m="1837650">one.</span> <span
  m="1838910">And</span> <span m="1839060">I</span> <span m="1839180">can</span>
  <span m="1839360">get</span> <span m="1839510">a</span> <span
  m="1839570">confidence</span> <span m="1840020">interval.</span> <span
  m="1840440">That</span> <span m="1840620">make</span> <span
  m="1840830">sense?</span> <span m="1842410">OK.</span></p><p><span
  m="1844330">There's</span> <span m="1844480">a</span> <span
  m="1844550">catch.</span> <span m="1848390">Notice</span> <span
  m="1848810">that</span> <span m="1848930">the</span> <span
  m="1849050">formula</span> <span m="1849560">for</span> <span
  m="1849680">the</span> <span m="1849800">standard</span> <span
  m="1850310">error</span> <span m="1851270">includes</span> <span
  m="1851840">the</span> <span m="1851960">standard</span> <span
  m="1852590">deviation</span> <span m="1853190">of</span> <span
  m="1853250">the</span> <span m="1853340">population--</span> <span
  m="1856100">the</span> <span m="1856190">standard</span> <span
  m="1856610">deviation</span> <span m="1857330">of</span> <span
  m="1857510">the</span> <span m="1857600">sample.</span> <span
  m="1860250">Well,</span> <span m="1861890">that's</span> <span
  m="1862100">kind</span> <span m="1862340">of</span> <span m="1862460">a</span>
  <span m="1862520">bummer.</span> <span m="1864180">Because</span> <span
  m="1864420">how</span> <span m="1864570">can</span> <span m="1864750">I</span>
  <span m="1864870">get</span> <span m="1865170">the</span> <span
  m="1865260">standard</span> <span m="1865650">deviation</span> <span
  m="1866160">of</span> <span m="1866220">the</span> <span
  m="1866310">population</span> <span m="1867480">without</span> <span
  m="1867780">looking</span> <span m="1868110">at</span> <span
  m="1868200">the</span> <span m="1868320">whole</span> <span
  m="1868560">population?</span> <span m="1870280">And</span> <span
  m="1870380">if</span> <span m="1870480">we're</span> <span
  m="1870580">going</span> <span m="1870680">to</span> <span
  m="1870780">look</span> <span m="1870880">at</span> <span
  m="1870980">the</span> <span m="1871080">whole</span> <span
  m="1871110">population,</span> <span m="1871860">then</span> <span
  m="1871980">what's</span> <span m="1872220">the</span> <span
  m="1872310">point</span> <span m="1872610">of</span> <span
  m="1872670">sampling</span> <span m="1873150">in</span> <span
  m="1873240">the</span> <span m="1873300">first</span> <span
  m="1873570">place?</span></p><p><span m="1875930">So</span> <span
  m="1876430">we</span> <span m="1876610">have</span> <span m="1876730">a</span>
  <span m="1876790">catch,</span> <span m="1878390">that</span> <span
  m="1878530">we've</span> <span m="1878740">got</span> <span
  m="1879040">something</span> <span m="1879460">that's</span> <span
  m="1879700">a</span> <span m="1879790">really</span> <span
  m="1880240">good</span> <span m="1880480">approximation,</span> <span
  m="1884210">but</span> <span m="1884660">it</span> <span
  m="1884840">uses</span> <span m="1885290">a</span> <span
  m="1885350">value</span> <span m="1885840">we</span> <span
  m="1886010">don't</span> <span m="1886430">know.</span> <span
  m="1888730">So</span> <span m="1888850">what</span> <span
  m="1889000">should</span> <span m="1889120">we</span> <span
  m="1889240">do</span> <span m="1889420">about</span> <span
  m="1889690">that?</span> <span m="1891870">Well,</span> <span
  m="1893480">what</span> <span m="1893630">would</span> <span
  m="1893810">be,</span> <span m="1895650">really,</span> <span
  m="1896010">the</span> <span m="1896130">only</span> <span
  m="1896430">obvious</span> <span m="1897090">thing</span> <span
  m="1897390">to</span> <span m="1897540">try?</span> <span
  m="1899830">What's</span> <span m="1900130">our</span> <span
  m="1900280">best</span> <span m="1900640">guess</span> <span
  m="1901060">at</span> <span m="1901210">the</span> <span
  m="1901300">standard</span> <span m="1901720">deviation</span> <span
  m="1902320">of</span> <span m="1902380">the</span> <span
  m="1902470">population</span> <span m="1903550">if</span> <span
  m="1903700">we</span> <span m="1903820">have</span> <span
  m="1904000">only</span> <span m="1904240">one</span> <span
  m="1904480">sample</span> <span m="1904900">to</span> <span
  m="1905020">look</span> <span m="1905230">at?</span> <span
  m="1909070">What</span> <span m="1909220">would</span> <span
  m="1909340">you</span> <span m="1909430">use?</span> <span
  m="1912000">Somebody?</span> <span m="1913820">I</span> <span
  m="1913930">know</span> <span m="1914080">I</span> <span
  m="1914170">forgot</span> <span m="1914560">to</span> <span
  m="1914650">bring</span> <span m="1914860">the</span> <span
  m="1914950">candy</span> <span m="1915340">today,</span> <span
  m="1915670">so</span> <span m="1915850">no</span> <span m="1915970">one</span>
  <span m="1916090">wants</span> <span m="1916300">to</span> <span
  m="1916360">answer</span> <span m="1916660">any</span> <span
  m="1916840">questions.</span></p><p><span m="1917155">AUDIENCE:</span> <span
  m="1917470">The</span> <span m="1917549">standard</span> <span
  m="1917628">deviation</span> <span m="1917707">of</span> <span
  m="1917786">the</span> <span m="1917865">sample?</span></p><p><span
  m="1918900">PROFESSOR:</span> <span m="1918945">The</span> <span
  m="1918990">standard</span> <span m="1919350">deviation</span> <span
  m="1919770">of</span> <span m="1919800">the</span> <span
  m="1919830">sample.</span> <span m="1920310">It's</span> <span
  m="1920430">all</span> <span m="1920550">I</span> <span
  m="1920640">got.</span> <span m="1922220">So</span> <span
  m="1922700">let's</span> <span m="1923030">ask</span> <span
  m="1923270">the</span> <span m="1923420">question,</span> <span
  m="1924780">how</span> <span m="1924890">good</span> <span
  m="1925100">is</span> <span m="1925250">that?</span> <span
  m="1928260">Shockingly</span> <span m="1929100">good.</span> <span
  m="1930930">So</span> <span m="1931140">I</span> <span
  m="1931260">looked</span> <span m="1931560">at</span> <span
  m="1931680">our</span> <span m="1931890">example</span> <span
  m="1932520">here</span> <span m="1932820">for</span> <span
  m="1933000">the</span> <span m="1933150">temperatures.</span> <span
  m="1935140">And</span> <span m="1935380">I'm</span> <span
  m="1935500">plotting</span> <span m="1935890">the</span> <span
  m="1935980">sample</span> <span m="1936460">standard</span> <span
  m="1936880">deviation</span> <span m="1937510">versus</span> <span
  m="1937900">the</span> <span m="1937990">population</span> <span
  m="1938770">standard</span> <span m="1939190">deviation</span> <span
  m="1940690">for</span> <span m="1940840">different</span> <span
  m="1941920">sample</span> <span m="1942370">sizes,</span> <span
  m="1945740">ranging</span> <span m="1946220">from</span> <span
  m="1946520">0</span> <span m="1946970">to</span> <span m="1947090">600</span>
  <span m="1947840">by</span> <span m="1948140">one,</span> <span
  m="1948470">I</span> <span m="1948590">think.</span></p><p><span
  m="1950100">So</span> <span m="1950250">what</span> <span
  m="1950400">you</span> <span m="1950490">can</span> <span
  m="1950670">see</span> <span m="1950970">here</span> <span
  m="1951240">is</span> <span m="1951330">when</span> <span
  m="1951480">the</span> <span m="1951570">sample</span> <span
  m="1952140">size</span> <span m="1952570">is</span> <span
  m="1952680">small,</span> <span m="1955370">I'm</span> <span
  m="1955520">pretty</span> <span m="1955790">far</span> <span
  m="1956090">off.</span> <span m="1956440">I'm</span> <span
  m="1956540">off</span> <span m="1956780">by</span> <span
  m="1957080">14%</span> <span m="1958200">here.</span> <span
  m="1959600">And</span> <span m="1959750">I</span> <span
  m="1959840">think</span> <span m="1960050">that's</span> <span
  m="1960290">25.</span> <span m="1963180">But</span> <span
  m="1963300">when</span> <span m="1963450">the</span> <span
  m="1963540">sample</span> <span m="1963960">sizes</span> <span
  m="1964260">is</span> <span m="1964560">larger,</span> <span
  m="1965970">say</span> <span m="1966180">600,</span> <span
  m="1968250">I'm</span> <span m="1968460">off</span> <span
  m="1968820">by</span> <span m="1969090">about</span> <span
  m="1969570">2%.</span> <span m="1976270">So</span> <span
  m="1976520">what</span> <span m="1976630">we</span> <span
  m="1976780">see,</span> <span m="1977110">at</span> <span
  m="1977230">least</span> <span m="1977800">for</span> <span
  m="1978280">this</span> <span m="1978640">data</span> <span
  m="1979060">set</span> <span m="1979390">of</span> <span
  m="1979510">temperatures--</span> <span m="1981670">if</span> <span
  m="1981820">the</span> <span m="1981910">sample</span> <span
  m="1982390">size</span> <span m="1982870">is</span> <span
  m="1983110">large</span> <span m="1983710">enough,</span> <span
  m="1986500">the</span> <span m="1986520">sample</span> <span
  m="1987210">standard</span> <span m="1987630">deviation</span> <span
  m="1988320">is</span> <span m="1988470">a</span> <span
  m="1988560">pretty</span> <span m="1989160">good</span> <span
  m="1989550">approximation</span> <span m="1990510">of</span> <span
  m="1990570">the</span> <span m="1990660">population</span> <span
  m="1991290">standard</span> <span m="1991620">deviation.</span></p><p><span
  m="1995200">Well.</span> <span m="1995670">Now</span> <span
  m="1995910">we</span> <span m="1996030">should</span> <span
  m="1996210">ask</span> <span m="1996450">the</span> <span
  m="1996570">question,</span> <span m="1998280">what</span> <span
  m="1998460">good</span> <span m="1998700">is</span> <span
  m="1998850">this?</span> <span m="2000590">Well,</span> <span
  m="2003710">as</span> <span m="2003950">I</span> <span
  m="2004040">said,</span> <span m="2004340">once</span> <span
  m="2004610">the</span> <span m="2004700">sample</span> <span
  m="2005120">reaches</span> <span m="2005540">a</span> <span
  m="2005630">reasonable</span> <span m="2006260">size--</span> <span
  m="2006710">and</span> <span m="2006830">we</span> <span
  m="2006950">see</span> <span m="2007190">here,</span> <span
  m="2007370">reasonable</span> <span m="2008000">is</span> <span
  m="2008840">probably</span> <span m="2009290">somewhere</span> <span
  m="2010670">around</span> <span m="2011020">500--</span> <span
  m="2012980">it</span> <span m="2013070">becomes</span> <span
  m="2013430">a</span> <span m="2013490">good</span> <span
  m="2013670">approximation.</span> <span m="2015590">But</span> <span
  m="2016940">is</span> <span m="2017180">it</span> <span
  m="2017300">true</span> <span m="2017870">only</span> <span
  m="2018320">for</span> <span m="2018530">this</span> <span
  m="2018830">example?</span> <span m="2020460">The</span> <span
  m="2020520">fact</span> <span m="2020850">that</span> <span
  m="2020940">it</span> <span m="2021030">happened</span> <span
  m="2021510">to</span> <span m="2021600">work</span> <span
  m="2022500">for</span> <span m="2022860">high</span> <span
  m="2023250">temperatures</span> <span m="2023940">in</span> <span
  m="2024060">the</span> <span m="2024150">US</span> <span
  m="2025710">doesn't</span> <span m="2026130">mean</span> <span
  m="2026430">that</span> <span m="2026550">it</span> <span
  m="2026610">will</span> <span m="2026790">always</span> <span
  m="2027270">be</span> <span m="2027420">true.</span></p><p><span
  m="2029810">So</span> <span m="2030880">there</span> <span
  m="2030970">are</span> <span m="2031030">at</span> <span
  m="2031120">least</span> <span m="2031660">two</span> <span
  m="2032080">things</span> <span m="2032560">we</span> <span
  m="2032710">should</span> <span m="2032890">consider</span> <span
  m="2033430">to</span> <span m="2033520">asking</span> <span
  m="2034030">the</span> <span m="2034120">question,</span> <span
  m="2034570">when</span> <span m="2034840">will</span> <span
  m="2034990">this</span> <span m="2035170">be</span> <span
  m="2035320">true,</span> <span m="2035620">when</span> <span
  m="2035860">won't</span> <span m="2036640">it</span> <span
  m="2036730">be</span> <span m="2036880">true.</span> <span
  m="2038410">One</span> <span m="2038770">is,</span> <span
  m="2039280">does</span> <span m="2039550">the</span> <span
  m="2039640">distribution</span> <span m="2040690">of</span> <span
  m="2040750">the</span> <span m="2040870">population</span> <span
  m="2041650">matter?</span> <span m="2044540">So</span> <span
  m="2045110">here</span> <span m="2045500">we</span> <span
  m="2045680">saw,</span> <span m="2046250">in</span> <span
  m="2046370">our</span> <span m="2046460">very</span> <span
  m="2046820">first</span> <span m="2047690">plot,</span> <span
  m="2048650">the</span> <span m="2048739">distribution</span> <span
  m="2049699">of</span> <span m="2049790">the</span> <span
  m="2049909">high</span> <span m="2050150">temperatures.</span> <span
  m="2051050">And</span> <span m="2051230">it</span> <span
  m="2051290">was</span> <span m="2053159">kind</span> <span
  m="2053520">of</span> <span m="2053670">symmetric</span> <span
  m="2054630">around</span> <span m="2055020">a</span> <span
  m="2055080">point--</span> <span m="2055500">not</span> <span
  m="2055739">perfectly.</span> <span m="2057350">But</span> <span
  m="2058070">not</span> <span m="2058310">everything</span> <span
  m="2058760">looks</span> <span m="2059030">that</span> <span
  m="2059210">way,</span> <span m="2059460">right?</span></p><p><span
  m="2060940">So</span> <span m="2061120">we</span> <span
  m="2061239">should</span> <span m="2061480">say,</span> <span
  m="2061659">well,</span> <span m="2061840">suppose</span> <span
  m="2062380">we</span> <span m="2062530">have</span> <span m="2062679">a</span>
  <span m="2062770">different</span> <span m="2063130">distribution.</span>
  <span m="2064690">Would</span> <span m="2065070">that</span> <span
  m="2067010">change</span> <span m="2067580">this</span> <span
  m="2067820">conclusion?</span> <span m="2070469">And</span> <span
  m="2070650">the</span> <span m="2070800">other</span> <span
  m="2071070">thing</span> <span m="2071310">we</span> <span
  m="2071429">should</span> <span m="2071639">ask</span> <span
  m="2072030">is,</span> <span m="2072150">well,</span> <span
  m="2072389">suppose</span> <span m="2072900">we</span> <span
  m="2072989">had</span> <span m="2073110">a</span> <span
  m="2073170">different</span> <span m="2073469">sized</span> <span
  m="2073800">population.</span> <span m="2076080">Suppose</span> <span
  m="2076489">instead</span> <span m="2076850">of</span> <span
  m="2076969">400,000</span> <span m="2077929">temperatures</span> <span
  m="2078560">I</span> <span m="2078679">had</span> <span m="2079310">20</span>
  <span m="2079710">million</span> <span m="2080120">temperatures.</span> <span
  m="2081860">Would</span> <span m="2082010">I</span> <span
  m="2082100">need</span> <span m="2082400">more</span> <span
  m="2082730">than</span> <span m="2082909">600</span> <span
  m="2083510">samples</span> <span m="2084170">for</span> <span
  m="2084290">the</span> <span m="2084409">two</span> <span
  m="2084650">things</span> <span m="2085070">to</span> <span
  m="2085219">be</span> <span m="2085850">about</span> <span
  m="2086179">the</span> <span m="2086270">same?</span></p><p><span
  m="2087530">Well,</span> <span m="2087949">let's</span> <span
  m="2088219">explore</span> <span m="2088639">both</span> <span
  m="2088969">of</span> <span m="2089030">those</span> <span
  m="2089270">questions.</span> <span m="2092350">First,</span> <span
  m="2092580">let's</span> <span m="2092790">look</span> <span
  m="2092969">at</span> <span m="2093090">the</span> <span
  m="2093190">distributions.</span> <span m="2094320">And</span> <span
  m="2094469">we'll</span> <span m="2094590">look</span> <span
  m="2094830">at</span> <span m="2094949">three</span> <span
  m="2095850">common</span> <span m="2096330">distributions--</span> <span
  m="2098200">a</span> <span m="2098350">uniform</span> <span
  m="2098910">distribution,</span> <span m="2100290">a</span> <span
  m="2100350">normal</span> <span m="2100710">distribution,</span> <span
  m="2101480">and</span> <span m="2101570">an</span> <span
  m="2101730">exponential</span> <span m="2102510">distribution.</span> <span
  m="2104820">And</span> <span m="2105030">we'll</span> <span
  m="2105180">look</span> <span m="2105390">at</span> <span
  m="2105480">each</span> <span m="2105750">of</span> <span
  m="2105810">them</span> <span m="2106020">for,</span> <span
  m="2106560">what</span> <span m="2106740">is</span> <span
  m="2106920">this,</span> <span m="2107680">100,000</span> <span
  m="2109190">points.</span></p><p><span m="2110980">So</span> <span
  m="2111060">we</span> <span m="2111180">know</span> <span
  m="2111360">we</span> <span m="2111510">can</span> <span
  m="2111690">generate</span> <span m="2112170">a</span> <span
  m="2112230">uniform</span> <span m="2112830">distribution</span> <span
  m="2113610">by</span> <span m="2113790">calling</span> <span
  m="2114180">random.random.</span> <span m="2117740">Gives</span> <span
  m="2117920">me</span> <span m="2118010">a</span> <span
  m="2118070">uniform</span> <span m="2118580">distribution</span> <span
  m="2119180">of</span> <span m="2119240">real</span> <span
  m="2119510">numbers</span> <span m="2119870">between</span> <span
  m="2120230">0</span> <span m="2120620">and</span> <span m="2120740">1.</span>
  <span m="2122180">We</span> <span m="2122300">know</span> <span
  m="2122510">that</span> <span m="2122630">we</span> <span
  m="2122810">can</span> <span m="2123230">generate</span> <span
  m="2123740">our</span> <span m="2124550">normal</span> <span
  m="2124940">distribution</span> <span m="2125630">by</span> <span
  m="2125780">calling</span> <span m="2126200">random.gauss.</span> <span
  m="2128630">In</span> <span m="2128780">this</span> <span
  m="2128960">case,</span> <span m="2129450">I'm</span> <span
  m="2129470">looking</span> <span m="2129800">at</span> <span
  m="2129890">it</span> <span m="2130020">between</span> <span
  m="2131450">the</span> <span m="2131870">mean</span> <span
  m="2132200">of</span> <span m="2132290">0</span> <span m="2132830">and</span>
  <span m="2132960">a</span> <span m="2133000">standard</span> <span
  m="2133370">deviation</span> <span m="2133940">of</span> <span
  m="2134000">1.</span> <span m="2134390">But</span> <span m="2134540">as</span>
  <span m="2134690">we</span> <span m="2134870">saw</span> <span
  m="2135200">in</span> <span m="2135290">the</span> <span
  m="2135380">last</span> <span m="2135680">lecture,</span> <span
  m="2136700">the</span> <span m="2136790">shape</span> <span
  m="2137150">will</span> <span m="2137240">be</span> <span
  m="2137390">the</span> <span m="2137510">same,</span> <span
  m="2137900">independent</span> <span m="2138440">of</span> <span
  m="2138500">these</span> <span m="2138710">values.</span></p><p><span
  m="2140010">And,</span> <span m="2140090">finally,</span> <span
  m="2140570">an</span> <span m="2140690">exponential</span> <span
  m="2141470">distribution,</span> <span m="2144330">which</span> <span
  m="2144440">we</span> <span m="2144560">get</span> <span m="2144770">by</span>
  <span m="2144950">calling</span> <span m="2145310">random.expovariate.</span>
  <span m="2146420">Very</span> <span m="2148250">And</span> <span
  m="2148400">this</span> <span m="2148670">number,</span> <span
  m="2149040">0.5,</span> <span m="2150980">is</span> <span
  m="2151640">something</span> <span m="2152060">called</span> <span
  m="2152330">lambda,</span> <span m="2155190">which</span> <span
  m="2155360">has</span> <span m="2155660">to</span> <span m="2155780">do</span>
  <span m="2156050">with</span> <span m="2156320">how</span> <span
  m="2156650">quickly</span> <span m="2157280">the</span> <span
  m="2157430">exponential</span> <span m="2158180">either</span> <span
  m="2158450">decays</span> <span m="2159140">or</span> <span
  m="2159320">goes</span> <span m="2159620">up,</span> <span
  m="2159860">depending</span> <span m="2160280">upon</span> <span
  m="2160520">which</span> <span m="2160730">direction.</span> <span
  m="2161990">And</span> <span m="2162800">I'm</span> <span
  m="2162920">not</span> <span m="2163100">going</span> <span
  m="2163280">to</span> <span m="2163340">give</span> <span
  m="2163550">you</span> <span m="2163640">the</span> <span
  m="2163760">formula</span> <span m="2164240">for</span> <span
  m="2164480">it</span> <span m="2164570">at</span> <span m="2164660">the</span>
  <span m="2164750">moment.</span> <span m="2165530">But</span> <span
  m="2165620">we'll</span> <span m="2165770">look</span> <span
  m="2165980">at</span> <span m="2166070">the</span> <span
  m="2166160">pictures.</span> <span m="2167630">And</span> <span
  m="2167810">we'll</span> <span m="2167990">plot</span> <span
  m="2168440">each</span> <span m="2168740">of</span> <span
  m="2168830">these</span> <span m="2169190">discrete</span> <span
  m="2169940">approximations</span> <span m="2171050">to</span> <span
  m="2171200">these</span> <span m="2171440">distributions.</span></p><p><span
  m="2175130">So</span> <span m="2175150">here's</span> <span
  m="2175390">what</span> <span m="2175540">they</span> <span
  m="2175690">look</span> <span m="2175930">like.</span> <span
  m="2178510">Quite</span> <span m="2178780">different,</span> <span
  m="2179200">right?</span> <span m="2181020">We've</span> <span
  m="2181230">looked</span> <span m="2181500">at</span> <span
  m="2181950">uniform</span> <span m="2182610">and</span> <span
  m="2182700">we've</span> <span m="2182850">looked</span> <span
  m="2183060">at</span> <span m="2183150">Gaussian</span> <span
  m="2183690">before.</span> <span m="2184800">And</span> <span
  m="2185550">here</span> <span m="2185790">we</span> <span
  m="2185940">see</span> <span m="2186120">an</span> <span
  m="2186240">exponential,</span> <span m="2188120">which</span> <span
  m="2188300">basically</span> <span m="2188840">decays</span> <span
  m="2189470">and</span> <span m="2189590">will</span> <span
  m="2189770">asymptote</span> <span m="2191150">towards</span> <span
  m="2191510">zero,</span> <span m="2192200">never</span> <span
  m="2192500">quite</span> <span m="2192800">getting</span> <span
  m="2193160">there.</span> <span m="2195020">But</span> <span
  m="2195200">as</span> <span m="2195350">you</span> <span
  m="2195440">can</span> <span m="2195590">see,</span> <span
  m="2195920">it</span> <span m="2196640">is</span> <span
  m="2196790">certainly</span> <span m="2197240">not</span> <span
  m="2198570">very</span> <span m="2198870">symmetric</span> <span
  m="2199530">around</span> <span m="2199890">the</span> <span
  m="2200730">mean.</span></p><p><span m="2202020">All</span> <span
  m="2202080">right,</span> <span m="2203370">so</span> <span
  m="2204030">let's</span> <span m="2204210">see</span> <span
  m="2204390">what</span> <span m="2204540">happens.</span> <span
  m="2207020">If</span> <span m="2207200">we</span> <span m="2207290">run</span>
  <span m="2207530">the</span> <span m="2207650">experiment</span> <span
  m="2210550">on</span> <span m="2210880">these</span> <span
  m="2211420">three</span> <span m="2211750">distributions,</span> <span
  m="2212740">each</span> <span m="2213070">of</span> <span
  m="2213250">100,000</span> <span m="2214090">point</span> <span
  m="2214540">examples,</span> <span m="2216970">and</span> <span
  m="2217120">look</span> <span m="2217300">at</span> <span
  m="2217390">different</span> <span m="2217690">sample</span> <span
  m="2218170">sizes,</span> <span m="2218740">we</span> <span
  m="2218950">actually</span> <span m="2219520">see</span> <span
  m="2220030">that</span> <span m="2220140">the</span> <span
  m="2220300">difference</span> <span m="2220780">between</span> <span
  m="2221170">the</span> <span m="2221290">standard</span> <span
  m="2221710">deviation</span> <span m="2223510">and</span> <span
  m="2223840">the</span> <span m="2225310">sample</span> <span
  m="2225820">standard</span> <span m="2226150">deviation</span> <span
  m="2226540">of</span> <span m="2226600">the</span> <span
  m="2226690">population</span> <span m="2227350">standard</span> <span
  m="2227710">deviation</span> <span m="2230800">is</span> <span
  m="2230950">not</span> <span m="2231220">the</span> <span
  m="2231340">same.</span></p><p><span m="2234600">We</span> <span
  m="2234970">see,</span> <span m="2236290">down</span> <span
  m="2236680">here--</span> <span m="2238910">this</span> <span
  m="2239180">looks</span> <span m="2239390">kind</span> <span
  m="2239660">of</span> <span m="2239720">like</span> <span
  m="2240050">what</span> <span m="2240200">we</span> <span
  m="2240350">saw</span> <span m="2240620">before.</span> <span
  m="2243140">But</span> <span m="2243500">the</span> <span
  m="2243710">exponential</span> <span m="2244490">one</span> <span
  m="2244730">is</span> <span m="2244850">really</span> <span
  m="2245300">quite</span> <span m="2245660">different.</span> <span
  m="2249940">You</span> <span m="2250010">know,</span> <span
  m="2250160">its</span> <span m="2250370">worst</span> <span
  m="2250670">case</span> <span m="2251060">is</span> <span
  m="2251430">up</span> <span m="2251700">here</span> <span
  m="2251990">at</span> <span m="2252530">25.</span> <span
  m="2255520">The</span> <span m="2255610">normal</span> <span
  m="2256390">is</span> <span m="2256570">about</span> <span
  m="2256870">14.</span> <span m="2257780">So</span> <span
  m="2258100">that's</span> <span m="2258370">not</span> <span
  m="2258580">too</span> <span m="2258820">surprising,</span> <span
  m="2259510">since</span> <span m="2259750">our</span> <span
  m="2259900">temperatures</span> <span m="2260560">were</span> <span
  m="2261160">kind</span> <span m="2261430">of</span> <span
  m="2261550">normally</span> <span m="2261940">distributed</span> <span
  m="2262540">when</span> <span m="2262660">we</span> <span
  m="2262750">looked</span> <span m="2263020">at</span> <span
  m="2263230">it.</span> <span m="2264220">And</span> <span
  m="2265240">the</span> <span m="2265330">uniform</span> <span
  m="2265990">is,</span> <span m="2267430">initially,</span> <span
  m="2268840">much</span> <span m="2269080">better</span> <span
  m="2269500">an</span> <span m="2270130">approximation.</span></p><p><span
  m="2274450">And</span> <span m="2274500">the</span> <span
  m="2274590">reason</span> <span m="2275040">for</span> <span
  m="2275220">this</span> <span m="2275790">has</span> <span
  m="2276150">to</span> <span m="2276300">do</span> <span
  m="2276570">with</span> <span m="2276860">a</span> <span
  m="2277020">fundamental</span> <span m="2277920">difference</span> <span
  m="2278370">in</span> <span m="2278490">these</span> <span
  m="2278700">distributions,</span> <span m="2279540">something</span> <span
  m="2279960">called</span> <span m="2280320">skew.</span> <span
  m="2282670">Skew</span> <span m="2283120">is</span> <span m="2283270">a</span>
  <span m="2283360">measure</span> <span m="2283960">of</span> <span
  m="2284200">the</span> <span m="2284590">asymmetry</span> <span
  m="2286360">of</span> <span m="2286510">a</span> <span
  m="2286570">probability</span> <span m="2287380">distribution.</span> <span
  m="2289610">And</span> <span m="2289760">what</span> <span
  m="2289910">we</span> <span m="2290060">can</span> <span
  m="2290240">see</span> <span m="2290570">here</span> <span
  m="2290930">is</span> <span m="2291200">that</span> <span
  m="2291380">skew</span> <span m="2292640">actually</span> <span
  m="2293960">matters.</span> <span m="2295950">The</span> <span
  m="2296190">more</span> <span m="2296560">skew</span> <span
  m="2297070">you</span> <span m="2297310">have,</span> <span
  m="2299140">the</span> <span m="2299230">more</span> <span
  m="2299500">samples</span> <span m="2300280">you're</span> <span
  m="2300460">going</span> <span m="2300820">to</span> <span
  m="2301000">need</span> <span m="2302230">to</span> <span
  m="2302350">get</span> <span m="2302530">a</span> <span
  m="2302590">good</span> <span m="2302770">approximation.</span> <span
  m="2305520">So</span> <span m="2305600">if</span> <span m="2305720">the</span>
  <span m="2305810">population</span> <span m="2306590">is</span> <span
  m="2306740">very</span> <span m="2307100">skewed,</span> <span
  m="2307610">very</span> <span m="2307910">asymmetric</span> <span
  m="2308690">in</span> <span m="2308780">the</span> <span
  m="2308840">distribution,</span> <span m="2310040">you</span> <span
  m="2310100">need</span> <span m="2310280">a</span> <span
  m="2310340">lot</span> <span m="2310580">of</span> <span
  m="2310640">samples</span> <span m="2311150">to</span> <span
  m="2311270">figure</span> <span m="2311480">out</span> <span
  m="2311570">what's</span> <span m="2311810">going</span> <span
  m="2312140">on.</span> <span m="2313700">If</span> <span
  m="2313810">it's</span> <span m="2314290">very</span> <span
  m="2314740">uniform,</span> <span m="2315610">as</span> <span
  m="2315760">in,</span> <span m="2315850">for</span> <span
  m="2315970">example,</span> <span m="2316450">the</span> <span
  m="2316540">uniform</span> <span m="2317140">population,</span> <span
  m="2318460">you</span> <span m="2318520">need</span> <span
  m="2318730">many</span> <span m="2319120">fewer</span> <span
  m="2319510">samples.</span> <span m="2321510">OK,</span> <span
  m="2321840">so</span> <span m="2322320">that's</span> <span
  m="2322620">an</span> <span m="2322710">important</span> <span
  m="2323190">thing.</span> <span m="2324150">When</span> <span
  m="2324300">we</span> <span m="2324420">go</span> <span
  m="2324630">about</span> <span m="2324930">deciding</span> <span
  m="2325470">how</span> <span m="2325590">many</span> <span
  m="2325830">samples</span> <span m="2326340">we</span> <span
  m="2326490">need,</span> <span m="2327360">we</span> <span
  m="2327450">need</span> <span m="2327630">to</span> <span
  m="2327780">have</span> <span m="2327990">some</span> <span
  m="2328350">estimate</span> <span m="2328860">of</span> <span
  m="2328980">the</span> <span m="2329070">skew</span> <span
  m="2329520">in</span> <span m="2329610">our</span> <span
  m="2329730">population.</span></p><p><span m="2332810">All</span> <span
  m="2332930">right,</span> <span m="2333860">how</span> <span
  m="2333980">about</span> <span m="2334190">size?</span> <span
  m="2336080">Does</span> <span m="2336200">size</span> <span
  m="2336680">matter?</span> <span m="2339110">Shockingly--</span> <span
  m="2339980">at</span> <span m="2340040">least</span> <span
  m="2340310">it</span> <span m="2340400">was</span> <span m="2340670">to</span>
  <span m="2340820">me</span> <span m="2341030">the</span> <span
  m="2341150">first</span> <span m="2341420">time</span> <span
  m="2341660">I</span> <span m="2341750">looked</span> <span
  m="2342050">at</span> <span m="2342290">this--</span> <span
  m="2342540">the</span> <span m="2342680">answer</span> <span
  m="2343070">is</span> <span m="2343370">no.</span> <span m="2349030">If</span>
  <span m="2349210">we</span> <span m="2349360">look</span> <span
  m="2349600">at</span> <span m="2349750">this--</span> <span
  m="2350080">and</span> <span m="2350200">I'm</span> <span
  m="2350290">looking</span> <span m="2350710">just</span> <span
  m="2350950">for</span> <span m="2351070">the</span> <span
  m="2351160">uniform</span> <span m="2351700">distribution,</span> <span
  m="2352870">but</span> <span m="2352990">we'll</span> <span
  m="2353140">see</span> <span m="2353350">the</span> <span
  m="2353470">same</span> <span m="2353830">thing</span> <span
  m="2354610">for</span> <span m="2354790">all</span> <span
  m="2355090">three--</span> <span m="2358990">it</span> <span
  m="2359160">more</span> <span m="2359400">or</span> <span
  m="2359430">less</span> <span m="2359700">doesn't</span> <span
  m="2360060">matter.</span> <span m="2365730">Quite</span> <span
  m="2366330">amazing,</span> <span m="2368160">right?</span></p><p><span
  m="2369000">If</span> <span m="2369210">you</span> <span
  m="2369330">have</span> <span m="2369570">a</span> <span
  m="2369630">bigger</span> <span m="2369930">population,</span> <span
  m="2370740">you</span> <span m="2371100">don't</span> <span
  m="2371550">need</span> <span m="2371820">more</span> <span
  m="2372060">samples.</span> <span m="2375440">And</span> <span
  m="2376780">it's</span> <span m="2377020">really</span> <span
  m="2378250">almost</span> <span m="2378670">counterintuitive</span> <span
  m="2380200">to</span> <span m="2380320">think</span> <span
  m="2380590">that</span> <span m="2380710">you</span> <span
  m="2380830">don't</span> <span m="2381070">need</span> <span
  m="2381280">any</span> <span m="2381490">more</span> <span
  m="2381700">samples</span> <span m="2383230">to</span> <span
  m="2383710">find</span> <span m="2384070">out</span> <span
  m="2384730">what's</span> <span m="2385000">going</span> <span
  m="2385150">to</span> <span m="2385210">happen</span> <span
  m="2385660">if</span> <span m="2385810">you</span> <span
  m="2385960">have</span> <span m="2387410">a</span> <span
  m="2387700">million</span> <span m="2388030">people</span> <span
  m="2388420">or</span> <span m="2388600">100</span> <span
  m="2388990">million</span> <span m="2389290">people.</span> <span
  m="2391340">And</span> <span m="2391490">that's</span> <span
  m="2391790">why,</span> <span m="2392510">when</span> <span
  m="2392660">we</span> <span m="2392750">look</span> <span
  m="2392990">at,</span> <span m="2393140">say,</span> <span
  m="2393410">political</span> <span m="2394010">polls,</span> <span
  m="2394990">they're</span> <span m="2395360">amazingly</span> <span
  m="2395990">small.</span> <span m="2397430">They</span> <span
  m="2397550">poll</span> <span m="2397850">1,000</span> <span
  m="2398420">people</span> <span m="2398750">and</span> <span
  m="2398870">claim</span> <span m="2399170">they're</span> <span
  m="2399290">representative</span> <span m="2400040">of</span> <span
  m="2400160">Massachusetts.</span></p><p><span m="2405380">This</span> <span
  m="2405560">is</span> <span m="2405950">good</span> <span
  m="2406250">news.</span> <span m="2408000">So</span> <span
  m="2408080">to</span> <span m="2408260">estimate</span> <span
  m="2409460">the</span> <span m="2409670">mean</span> <span
  m="2410030">of</span> <span m="2410150">a</span> <span
  m="2410240">population,</span> <span m="2411200">given</span> <span
  m="2411470">a</span> <span m="2411530">single</span> <span
  m="2412010">sample,</span> <span m="2414120">we</span> <span
  m="2414140">choose</span> <span m="2414470">a</span> <span
  m="2414560">sample</span> <span m="2415100">size</span> <span
  m="2416360">based</span> <span m="2416660">upon</span> <span
  m="2417050">some</span> <span m="2417440">estimate</span> <span
  m="2418040">of</span> <span m="2418160">skew</span> <span
  m="2418730">in</span> <span m="2418880">the</span> <span
  m="2418970">population.</span> <span m="2422600">This</span> <span
  m="2422710">is</span> <span m="2422830">important,</span> <span
  m="2423460">because</span> <span m="2423790">if</span> <span
  m="2423880">we</span> <span m="2424000">get</span> <span
  m="2424240">that</span> <span m="2424480">wrong,</span> <span
  m="2425530">we</span> <span m="2425650">might</span> <span
  m="2425860">choose</span> <span m="2426160">a</span> <span
  m="2426250">sample</span> <span m="2426670">size</span> <span
  m="2427030">that</span> <span m="2427100">is</span> <span
  m="2427240">too</span> <span m="2427450">small.</span> <span
  m="2429340">And</span> <span m="2429490">in</span> <span
  m="2429580">some</span> <span m="2429820">sense,</span> <span
  m="2430090">you</span> <span m="2430240">always</span> <span
  m="2430510">want</span> <span m="2430750">to</span> <span
  m="2430810">choose</span> <span m="2431230">the</span> <span
  m="2431350">smallest</span> <span m="2431960">sample</span> <span
  m="2432400">size</span> <span m="2432760">you</span> <span
  m="2432880">can</span> <span m="2433780">that</span> <span
  m="2433870">will</span> <span m="2433990">give</span> <span
  m="2434170">you</span> <span m="2434340">an</span> <span
  m="2434770">accurate</span> <span m="2435280">answer,</span> <span
  m="2436330">because</span> <span m="2436690">it's</span> <span
  m="2436870">more</span> <span m="2437080">economical</span> <span
  m="2437435">to</span> <span m="2437790">have</span> <span
  m="2437950">small</span> <span m="2438310">samples</span> <span
  m="2438790">than</span> <span m="2438940">big</span> <span
  m="2439150">samples.</span></p><p><span m="2441810">And</span> <span
  m="2441960">I've</span> <span m="2442050">been</span> <span
  m="2442200">talking</span> <span m="2442650">about</span> <span
  m="2442950">polls,</span> <span m="2443610">but</span> <span
  m="2443760">the</span> <span m="2443880">same</span> <span
  m="2444210">is</span> <span m="2444330">true</span> <span
  m="2444570">in</span> <span m="2444660">an</span> <span
  m="2444780">experiment.</span> <span m="2446630">How</span> <span
  m="2446810">many</span> <span m="2447110">pieces</span> <span
  m="2447560">of</span> <span m="2447680">data</span> <span
  m="2448040">do</span> <span m="2448160">you</span> <span
  m="2448280">need</span> <span m="2448490">to</span> <span
  m="2448610">collect</span> <span m="2449000">when</span> <span
  m="2449150">you</span> <span m="2449240">run</span> <span
  m="2450140">an</span> <span m="2450260">experiment</span> <span
  m="2450830">in</span> <span m="2450920">a</span> <span m="2450980">lab.</span>
  <span m="2452210">And</span> <span m="2453410">how</span> <span
  m="2453590">much</span> <span m="2453890">will</span> <span
  m="2454050">depend,</span> <span m="2454460">again,</span> <span
  m="2454730">on</span> <span m="2454850">the</span> <span
  m="2454940">skew</span> <span m="2455270">of</span> <span
  m="2455390">the</span> <span m="2455480">data.</span> <span
  m="2456560">And</span> <span m="2457250">that</span> <span
  m="2457460">will</span> <span m="2457610">help</span> <span
  m="2457820">you</span> <span m="2457940">decide.</span></p><p><span
  m="2460090">When</span> <span m="2460340">you</span> <span
  m="2460430">know</span> <span m="2460670">the</span> <span
  m="2460790">size,</span> <span m="2462190">you</span> <span
  m="2462380">choose</span> <span m="2462710">a</span> <span
  m="2462800">random</span> <span m="2463310">sample</span> <span
  m="2463850">from</span> <span m="2464000">the</span> <span
  m="2464120">population.</span> <span m="2469660">Then</span> <span
  m="2469810">you</span> <span m="2469960">compute</span> <span
  m="2470440">the</span> <span m="2470560">mean</span> <span
  m="2470890">and</span> <span m="2471010">the</span> <span
  m="2471100">standard</span> <span m="2471550">deviation</span> <span
  m="2472300">of</span> <span m="2472450">that</span> <span
  m="2472870">sample.</span> <span m="2477350">And</span> <span
  m="2477500">then</span> <span m="2478190">use</span> <span
  m="2478520">the</span> <span m="2478640">standard</span> <span
  m="2479150">deviation</span> <span m="2479840">of</span> <span
  m="2479930">that</span> <span m="2480170">sample</span> <span
  m="2480680">to</span> <span m="2480860">estimate</span> <span
  m="2481580">the</span> <span m="2481700">standard</span> <span
  m="2482180">error.</span> <span m="2483930">And</span> <span
  m="2484120">I</span> <span m="2484200">want</span> <span m="2484410">to</span>
  <span m="2484470">emphasize</span> <span m="2485250">that</span> <span
  m="2485340">what</span> <span m="2485460">you're</span> <span
  m="2485580">getting</span> <span m="2485940">here</span> <span
  m="2486240">is</span> <span m="2486390">an</span> <span
  m="2486540">estimate</span> <span m="2487050">of</span> <span
  m="2487110">the</span> <span m="2487200">standard</span> <span
  m="2487710">error,</span> <span m="2488910">not</span> <span
  m="2489180">the</span> <span m="2489300">standard</span> <span
  m="2489810">error</span> <span m="2490110">itself,</span> <span
  m="2491260">which</span> <span m="2491370">would</span> <span
  m="2491460">require</span> <span m="2491880">you</span> <span
  m="2492090">to</span> <span m="2492240">know</span> <span
  m="2492450">the</span> <span m="2492540">population</span> <span
  m="2493980">standard</span> <span m="2494340">deviation.</span> <span
  m="2496260">But</span> <span m="2496740">if</span> <span
  m="2496890">you've</span> <span m="2497040">chosen</span> <span
  m="2497470">the</span> <span m="2497550">sample</span> <span
  m="2497970">size</span> <span m="2498420">to</span> <span
  m="2498540">be</span> <span m="2499140">appropriate,</span> <span
  m="2500280">this</span> <span m="2500490">will</span> <span
  m="2500610">turn</span> <span m="2500850">out</span> <span
  m="2501030">to</span> <span m="2501150">be</span> <span m="2501270">a</span>
  <span m="2501300">good</span> <span m="2501510">estimate.</span></p><p><span
  m="2504910">And</span> <span m="2505000">then</span> <span
  m="2505090">once</span> <span m="2505330">we've</span> <span
  m="2505510">done</span> <span m="2505750">that,</span> <span
  m="2506090">we</span> <span m="2506110">use</span> <span
  m="2506380">the</span> <span m="2506530">estimated</span> <span
  m="2507280">standard</span> <span m="2507850">error</span> <span
  m="2508660">to</span> <span m="2508780">generate</span> <span
  m="2509300">confidence</span> <span m="2509980">intervals</span> <span
  m="2510430">around</span> <span m="2510700">the</span> <span
  m="2510790">sample</span> <span m="2511240">mean.</span> <span
  m="2512290">And</span> <span m="2512530">we're</span> <span
  m="2512740">done.</span> <span m="2515110">Now</span> <span
  m="2515290">this</span> <span m="2515500">works</span> <span
  m="2515770">great</span> <span m="2516025">when</span> <span
  m="2516760">we</span> <span m="2516940">choose</span> <span
  m="2517390">independent</span> <span m="2518200">random</span> <span
  m="2518620">samples.</span> <span m="2520300">And,</span> <span
  m="2520510">as</span> <span m="2520660">we've</span> <span
  m="2520810">seen</span> <span m="2521140">before,</span> <span
  m="2523030">that</span> <span m="2523990">if</span> <span
  m="2524170">you</span> <span m="2524290">don't</span> <span
  m="2524860">choose</span> <span m="2525370">independent</span> <span
  m="2526000">samples,</span> <span m="2527740">it</span> <span
  m="2527920">doesn't</span> <span m="2528280">work</span> <span
  m="2528520">so</span> <span m="2528730">well.</span> <span
  m="2530170">And,</span> <span m="2530290">again,</span> <span
  m="2530590">this</span> <span m="2530770">is</span> <span
  m="2530920">an</span> <span m="2531010">issue</span> <span
  m="2531700">where</span> <span m="2531970">if</span> <span
  m="2532120">you</span> <span m="2532240">assume</span> <span
  m="2532780">that,</span> <span m="2533740">in</span> <span
  m="2533890">an</span> <span m="2534010">election,</span> <span
  m="2534710">each</span> <span m="2534910">state</span> <span
  m="2535270">is</span> <span m="2535390">independent</span> <span
  m="2535960">of</span> <span m="2536080">every</span> <span
  m="2536380">other</span> <span m="2536620">state,</span> <span
  m="2538010">and</span> <span m="2539240">you'll</span> <span
  m="2539510">get</span> <span m="2539750">the</span> <span
  m="2539870">wrong</span> <span m="2540170">answer,</span> <span
  m="2540590">because</span> <span m="2541190">they're</span> <span
  m="2541400">not.</span></p><p><span m="2543320">All</span> <span
  m="2543410">right,</span> <span m="2544460">let's</span> <span
  m="2544640">go</span> <span m="2544790">back</span> <span
  m="2545030">to</span> <span m="2545180">our</span> <span
  m="2545270">temperature</span> <span m="2545810">example</span> <span
  m="2547360">and</span> <span m="2548950">pose</span> <span
  m="2549270">a</span> <span m="2549340">simple</span> <span
  m="2549730">question.</span> <span m="2550910">Are</span> <span
  m="2551320">200</span> <span m="2551800">samples</span> <span
  m="2552280">enough?</span> <span m="2554160">I</span> <span
  m="2554220">don't</span> <span m="2554340">know</span> <span
  m="2554430">why</span> <span m="2554760">I</span> <span
  m="2554895">chose</span> <span m="2555030">200.</span> <span
  m="2555570">I</span> <span m="2555840">did.</span> <span m="2556980">So</span>
  <span m="2557850">we'll</span> <span m="2558030">do</span> <span
  m="2558210">an</span> <span m="2558300">experiment</span> <span
  m="2558930">here.</span> <span m="2560280">This</span> <span
  m="2560460">is</span> <span m="2560550">similar</span> <span
  m="2560940">to</span> <span m="2561090">an</span> <span
  m="2561150">experiment</span> <span m="2561720">we</span> <span
  m="2561840">saw</span> <span m="2562200">on</span> <span
  m="2562380">Monday.</span></p><p><span m="2564280">So</span> <span
  m="2564420">I'm</span> <span m="2564570">starting</span> <span
  m="2565020">with</span> <span m="2565170">the</span> <span
  m="2565260">number</span> <span m="2565590">of</span> <span
  m="2566340">mistakes</span> <span m="2566910">I</span> <span
  m="2567030">make.</span> <span m="2568990">For</span> <span
  m="2569140">t</span> <span m="2569440">in</span> <span m="2569500">a</span>
  <span m="2569560">range</span> <span m="2569890">number</span> <span
  m="2570220">of</span> <span m="2570340">trials,</span> <span
  m="2570850">sample</span> <span m="2571330">will</span> <span
  m="2571450">be</span> <span m="2571630">random.sample</span> <span
  m="2573490">of</span> <span m="2573580">the</span> <span
  m="2573700">temperatures</span> <span m="2574330">in</span> <span
  m="2574450">the</span> <span m="2574540">sample</span> <span
  m="2574960">size.</span> <span m="2576890">This</span> <span
  m="2577160">is</span> <span m="2577340">a</span> <span m="2577400">key</span>
  <span m="2577670">step.</span> <span m="2581390">The</span> <span
  m="2581480">first</span> <span m="2581810">time</span> <span
  m="2582110">I</span> <span m="2582230">did</span> <span
  m="2582470">this,</span> <span m="2582710">I</span> <span
  m="2582920">messed</span> <span m="2583400">it</span> <span
  m="2583520">up.</span> <span m="2584660">And</span> <span
  m="2585320">instead</span> <span m="2585680">of</span> <span
  m="2585800">doing</span> <span m="2586070">this</span> <span
  m="2586250">very</span> <span m="2586520">simple</span> <span
  m="2586880">thing,</span> <span m="2587090">I</span> <span
  m="2587180">did</span> <span m="2587360">a</span> <span
  m="2587450">more</span> <span m="2587630">complicated</span> <span
  m="2588440">thing</span> <span m="2589310">of</span> <span
  m="2589460">just</span> <span m="2589790">choosing</span> <span
  m="2590360">some</span> <span m="2590630">point</span> <span
  m="2591080">in</span> <span m="2591200">my</span> <span
  m="2591350">list</span> <span m="2591650">of</span> <span
  m="2591740">temperatures</span> <span m="2592370">and</span> <span
  m="2592490">taking</span> <span m="2592850">the</span> <span
  m="2594110">next</span> <span m="2594380">200</span> <span
  m="2595400">temperatures.</span> <span m="2596950">Why</span> <span
  m="2597170">did</span> <span m="2597290">that</span> <span
  m="2597470">give</span> <span m="2597590">me</span> <span
  m="2597710">the</span> <span m="2597830">wrong</span> <span
  m="2598130">answer?</span> <span m="2601530">Because</span> <span
  m="2601920">it's</span> <span m="2602130">organized</span> <span
  m="2602760">by</span> <span m="2602970">city.</span> <span
  m="2604090">So</span> <span m="2604230">if</span> <span m="2604320">I</span>
  <span m="2604440">happen</span> <span m="2604800">to</span> <span
  m="2604890">choose</span> <span m="2605460">the</span> <span
  m="2605580">first</span> <span m="2605940">day</span> <span
  m="2606210">of</span> <span m="2606300">Phoenix,</span> <span
  m="2607350">all</span> <span m="2607740">200</span> <span
  m="2608100">temperatures</span> <span m="2608640">were</span> <span
  m="2608790">Phoenix--</span> <span m="2610330">which</span> <span
  m="2610410">is</span> <span m="2610560">not</span> <span m="2610800">a</span>
  <span m="2610830">very</span> <span m="2611070">good</span> <span
  m="2611250">approximation</span> <span m="2612090">of</span> <span
  m="2612180">the</span> <span m="2612270">temperature</span> <span
  m="2613350">in</span> <span m="2613470">the</span> <span
  m="2613590">country</span> <span m="2613950">as</span> <span
  m="2614070">a</span> <span m="2614160">whole.</span></p><p><span
  m="2615340">But</span> <span m="2615390">this</span> <span
  m="2615600">will</span> <span m="2615750">work.</span> <span
  m="2616110">I'm</span> <span m="2616200">using</span> <span
  m="2616500">random.sample.</span> <span m="2618540">I'll</span> <span
  m="2618690">then</span> <span m="2618870">get</span> <span
  m="2619050">the</span> <span m="2619170">sample</span> <span
  m="2619620">mean.</span> <span m="2623180">Then</span> <span
  m="2623390">I'll</span> <span m="2623660">compute</span> <span
  m="2624110">my</span> <span m="2624320">estimate</span> <span
  m="2624800">of</span> <span m="2624890">the</span> <span
  m="2624980">standard</span> <span m="2625460">error</span> <span
  m="2626690">by</span> <span m="2626870">taking</span> <span
  m="2627350">that</span> <span m="2627620">as</span> <span
  m="2627790">seen</span> <span m="2628160">here.</span> <span
  m="2629570">And</span> <span m="2629810">then</span> <span
  m="2631424">if</span> <span m="2632710">the</span> <span
  m="2632860">absolute</span> <span m="2633370">value</span> <span
  m="2633850">of</span> <span m="2633910">the</span> <span
  m="2634030">population</span> <span m="2635140">minus</span> <span
  m="2635590">the</span> <span m="2635650">sample</span> <span
  m="2636130">mean</span> <span m="2637210">is</span> <span
  m="2637780">more</span> <span m="2638320">than</span> <span
  m="2638560">1.96</span> <span m="2639700">standard</span> <span
  m="2640210">errors,</span> <span m="2641510">I'm</span> <span
  m="2641560">going</span> <span m="2641680">to</span> <span
  m="2641770">say</span> <span m="2643000">I</span> <span
  m="2643120">messed</span> <span m="2643510">up.</span> <span
  m="2646370">It's</span> <span m="2646540">outside.</span> <span
  m="2647890">And</span> <span m="2648010">then</span> <span
  m="2648160">at</span> <span m="2648280">the</span> <span
  m="2648460">end,</span> <span m="2649510">I'm</span> <span
  m="2649660">going</span> <span m="2649840">to</span> <span
  m="2649900">look</span> <span m="2650170">at</span> <span
  m="2650260">the</span> <span m="2650380">fraction</span> <span
  m="2650980">outside</span> <span m="2651680">the</span> <span
  m="2651740">95%</span> <span m="2652720">confidence</span> <span
  m="2653230">intervals.</span></p><p><span m="2654280">And</span> <span
  m="2654370">what</span> <span m="2654550">do</span> <span m="2654670">I</span>
  <span m="2654730">hope</span> <span m="2655000">it</span> <span
  m="2655120">should</span> <span m="2655330">print?</span> <span
  m="2657180">What</span> <span m="2657360">would</span> <span
  m="2658350">be</span> <span m="2658470">the</span> <span
  m="2658590">perfect</span> <span m="2659130">answer</span> <span
  m="2659610">when</span> <span m="2659760">I</span> <span
  m="2659820">run</span> <span m="2660090">this?</span> <span
  m="2666020">What</span> <span m="2666130">fraction</span> <span
  m="2666790">should</span> <span m="2667000">lie</span> <span
  m="2667360">outside</span> <span m="2667990">that?</span> <span
  m="2674050">It's</span> <span m="2674230">a</span> <span
  m="2674260">pretty</span> <span m="2674560">simple</span> <span
  m="2674950">calculation.</span> <span m="2684000">Five,</span> <span
  m="2684440">right?</span> <span m="2686740">Because</span> <span
  m="2687250">if</span> <span m="2687430">they</span> <span
  m="2687580">all</span> <span m="2688060">were</span> <span
  m="2688300">inside,</span> <span m="2688900">then</span> <span
  m="2689170">I'm</span> <span m="2689350">being</span> <span
  m="2689710">too</span> <span m="2690280">conservative</span> <span
  m="2691030">in</span> <span m="2691120">my</span> <span
  m="2691270">interval,</span> <span m="2691660">right?</span> <span
  m="2692830">I</span> <span m="2692950">want</span> <span m="2693400">5%</span>
  <span m="2694450">of</span> <span m="2694630">the</span> <span
  m="2694870">tests</span> <span m="2695290">to</span> <span
  m="2695440">fall</span> <span m="2695890">outside</span> <span
  m="2696970">the</span> <span m="2697090">95%</span> <span
  m="2697930">confidence</span> <span m="2698440">interval.</span></p><p><span
  m="2700500">If</span> <span m="2700680">I</span> <span
  m="2700770">wanted</span> <span m="2701220">fewer,</span> <span
  m="2701850">then</span> <span m="2702090">I</span> <span
  m="2702180">would</span> <span m="2702450">look</span> <span
  m="2702660">at</span> <span m="2702810">three</span> <span
  m="2703320">standard</span> <span m="2703770">deviations.</span> <span
  m="2704490">Instead</span> <span m="2704760">of</span> <span
  m="2704830">1.96,</span> <span m="2706620">then</span> <span
  m="2706800">I</span> <span m="2706890">would</span> <span
  m="2707010">expect</span> <span m="2707430">less</span> <span
  m="2707790">than</span> <span m="2707970">1%</span> <span
  m="2708600">to</span> <span m="2708720">fall</span> <span
  m="2708990">outside.</span> <span m="2710760">So</span> <span
  m="2710880">this</span> <span m="2711090">is</span> <span
  m="2711180">something</span> <span m="2711510">we</span> <span
  m="2711570">have</span> <span m="2711690">to</span> <span
  m="2711780">always</span> <span m="2712170">keep</span> <span
  m="2712410">in</span> <span m="2712530">mind</span> <span
  m="2713070">when</span> <span m="2713220">we</span> <span
  m="2713340">do</span> <span m="2713460">this</span> <span
  m="2713670">kind</span> <span m="2713970">of</span> <span
  m="2714060">thing.</span> <span m="2714990">If</span> <span
  m="2715230">your</span> <span m="2715380">answer</span> <span
  m="2715740">is</span> <span m="2715890">too</span> <span
  m="2716190">good,</span> <span m="2716490">you've</span> <span
  m="2716670">messed</span> <span m="2717030">up.</span> <span
  m="2719100">Shouldn't</span> <span m="2719370">be</span> <span
  m="2719490">too</span> <span m="2719670">bad,</span> <span
  m="2720070">but</span> <span m="2720090">it</span> <span
  m="2720180">shouldn't</span> <span m="2720510">be</span> <span
  m="2720690">too</span> <span m="2720930">good,</span> <span
  m="2721140">either.</span> <span m="2722790">That's</span> <span
  m="2723060">what</span> <span m="2723180">probabilities</span> <span
  m="2723930">are</span> <span m="2724050">all</span> <span
  m="2724230">about.</span> <span m="2725290">If</span> <span
  m="2725340">you</span> <span m="2725460">called</span> <span
  m="2725970">every</span> <span m="2726540">election</span> <span
  m="2727020">correctly,</span> <span m="2728340">then</span> <span
  m="2728520">your</span> <span m="2728670">math</span> <span
  m="2729000">is</span> <span m="2729180">wrong.</span></p><p><span
  m="2733240">Well,</span> <span m="2734200">when</span> <span
  m="2734380">we</span> <span m="2734500">run</span> <span
  m="2734770">this,</span> <span m="2738480">we</span> <span
  m="2738500">get</span> <span m="2738710">this</span> <span
  m="2738890">lovely</span> <span m="2739340">answer,</span> <span
  m="2740720">that</span> <span m="2740810">the</span> <span
  m="2740930">fraction</span> <span m="2741380">outside</span> <span
  m="2741930">the</span> <span m="2742040">95%</span> <span
  m="2742910">confidence</span> <span m="2743450">interval</span> <span
  m="2744350">is</span> <span m="2744620">0.0511.</span> <span
  m="2750710">That's exactly--</span> <span m="2750980">well,</span> <span
  m="2751310">close</span> <span m="2751430">to</span> <span
  m="2751480">what</span> <span m="2751530">you</span> <span
  m="2751580">want.</span> <span m="2751880">It's</span> <span
  m="2752000">almost</span> <span m="2752390">exactly</span> <span
  m="2752930">5%.</span> <span m="2755240">And</span> <span
  m="2755690">if</span> <span m="2755900">I</span> <span m="2756020">run</span>
  <span m="2756230">it</span> <span m="2756350">multiple</span> <span
  m="2756860">times,</span> <span m="2757440">I</span> <span
  m="2757540">get</span> <span m="2757640">slightly</span> <span
  m="2758060">different</span> <span m="2758390">numbers.</span> <span
  m="2759470">But</span> <span m="2759680">they're</span> <span
  m="2759830">all</span> <span m="2760190">in</span> <span
  m="2760340">that</span> <span m="2760820">range,</span> <span
  m="2761990">showing</span> <span m="2762410">that,</span> <span
  m="2762560">here,</span> <span m="2763030">in</span> <span
  m="2763100">fact,</span> <span m="2764120">it</span> <span
  m="2764270">really</span> <span m="2764630">does</span> <span
  m="2765260">work.</span></p><p><span m="2768370">So</span> <span
  m="2769830">that's</span> <span m="2770040">what</span> <span
  m="2770160">I</span> <span m="2770220">want</span> <span m="2770430">to</span>
  <span m="2770490">say,</span> <span m="2770880">and</span> <span
  m="2771360">it's</span> <span m="2771570">really</span> <span
  m="2771960">important,</span> <span m="2772500">this</span> <span
  m="2772710">notion</span> <span m="2773130">of</span> <span
  m="2773180">the</span> <span m="2773250">standard</span> <span
  m="2773700">error.</span> <span m="2775020">When</span> <span
  m="2775260">I</span> <span m="2775380">talk</span> <span m="2775770">to</span>
  <span m="2776790">other</span> <span m="2777000">departments</span> <span
  m="2777570">about</span> <span m="2777720">what</span> <span
  m="2777870">we</span> <span m="2777990">should</span> <span
  m="2778170">cover</span> <span m="2778470">in</span> <span
  m="2778590">60002,</span> <span m="2780900">about</span> <span
  m="2781230">the</span> <span m="2781350">only</span> <span
  m="2781560">thing</span> <span m="2781740">everybody</span> <span
  m="2782160">agrees</span> <span m="2782640">on</span> <span
  m="2782860">was</span> <span m="2783030">we</span> <span
  m="2783150">should</span> <span m="2783270">talk</span> <span
  m="2783540">about</span> <span m="2783780">standard</span> <span
  m="2784200">error.</span> <span m="2785220">So</span> <span
  m="2785370">now</span> <span m="2785610">I</span> <span
  m="2785820">hope</span> <span m="2786120">I</span> <span
  m="2786310">have</span> <span m="2786660">made</span> <span
  m="2786870">everyone</span> <span m="2787560">happy.</span> <span
  m="2789060">And</span> <span m="2789240">we</span> <span
  m="2789390">will</span> <span m="2789990">talk</span> <span
  m="2790320">about</span> <span m="2791520">fitting</span> <span
  m="2791940">curves</span> <span m="2792420">to</span> <span
  m="2792570">experimental</span> <span m="2793230">data</span> <span
  m="2793570">starting</span> <span m="2794070">next</span> <span
  m="2794370">week.</span> <span m="2795340">All</span> <span
  m="2795380">right,</span> <span m="2795780">thanks</span> <span
  m="2796080">a</span> <span m="2796380">lot.</span></p>
embedded_media:
  - uid: 777a08e173562ca4e9ab3ece02630c7d
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: soZv_KKax3E
  - uid: 5f281d4e6590961a3b37776bc25de338
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/soZv_KKax3E/default.jpg'
  - uid: 918b426cf62b045cf1a3b95dff269b91
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: soZv_KKax3E
  - uid: 3f55616adc3d946f72fcf7d3b05a5d55
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: soZv_KKax3E.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/lecture-videos/lecture-8-sampling-and-standard-error/soZv_KKax3E.srt
  - uid: 2b524c63c8236d001970e454a3707bf9
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: soZv_KKax3E.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/lecture-videos/lecture-8-sampling-and-standard-error/soZv_KKax3E.pdf
  - uid: 626b1fd35b0147fdb4803a80f442e8bb
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0e490985f56e5998938506c8e4c920f5
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: f93b57c2f29cae6e557bcee98c515383
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1235164695'
  - uid: 9a6506c6c7196c64e5d13b1dd9fb5480
    parent_uid: 79b17c3a63cf71e5cb6c2947ba80aee1
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.0002F16/MIT6_0002F16_lec08_300k.mp4'
type: courses
layout: video
---