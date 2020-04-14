---
title: 'Lecture 6: Singular Value Decomposition (SVD)'
uid: 3433b303aa4bd7690c8c1d76a8edfc50
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-6-singular-value-decomposition-svd
short_url: lecture-6-singular-value-decomposition-svd
inline_embed_id: 6383174lecture6singularvaluedecompositionsvd97314605
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>Singular Value Decomposition (SVD) is
  the primary topic of this lecture. Professor Strang explains and illustrates
  how the SVD separates a matrix into rank one pieces, and that those pieces
  come in order of importance.</p> <h2 class="subhead">Summary</h2> <p>Columns
  of <em>V</em> are orthonormal eigenvectors of
  <em>A</em><sup>T</sup><em>A.</em><br /> <em>A</em><strong><em>v</em></strong>
  = \(\sigma\)<strong><em>u</em></strong> gives orthonormal eigenvectors
  <strong><em>u</em></strong> of <em>AA</em><sup>T</sup>.<br /> \(\sigma^2 =\)
  eigenvalue of <em>A</em><sup>T</sup><em>A</em> = eigenvalue of
  <em>AA</em><sup>T</sup> \( \neq\) 0<br /> <em>A</em> =
  (rotation)(stretching)(rotation) \(U\Sigma\)<em>V</em><sup>T</sup> for every
  <em>A</em></p> <p>Related section in textbook: I.8</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
related_resources_text: ''
transcript: >-
  <p><span m="1161">ANNOUNCER:</span> <span m="1550">The</span> <span
  m="1640">following</span> <span m="2090">content</span> <span
  m="2600">is</span> <span m="2720">provided</span> <span m="3170">under</span>
  <span m="3380">a</span> <span m="3440">Creative</span> <span
  m="3920">Commons</span> <span m="4310">license.</span> <span
  m="5310">Your</span> <span m="5390">support</span> <span m="5900">will</span>
  <span m="6050">help</span> <span m="6320">MIT</span> <span
  m="6770">Open</span> <span m="7040">Courseware</span> <span
  m="7520">continue</span> <span m="8029">to</span> <span m="8180">offer</span>
  <span m="8510">high</span> <span m="8720">quality</span> <span
  m="9200">educational</span> <span m="9860">resources</span> <span
  m="10430">for</span> <span m="10550">free.</span> <span m="11610">To</span>
  <span m="11630">make</span> <span m="11840">a</span> <span
  m="11900">donation</span> <span m="12650">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MITOpenCourseware@OCW.MIT.edu.</span></p><p><span
  m="22824">PROFESSOR:</span> <span m="23320">So</span> <span
  m="23680">this</span> <span m="23890">is</span> <span m="23980">a</span> <span
  m="24070">big</span> <span m="24250">day</span> <span
  m="24550">mathematically</span> <span m="25420">speaking,</span> <span
  m="25960">because</span> <span m="26440">we</span> <span m="27280">come</span>
  <span m="27610">to</span> <span m="27760">this</span> <span
  m="28420">key</span> <span m="29800">idea,</span> <span m="31720">which</span>
  <span m="32049">is</span> <span m="32320">a</span> <span
  m="32380">little</span> <span m="32650">bit</span> <span m="32830">like</span>
  <span m="33160">eigenvalues.</span> <span m="34000">Well,</span> <span
  m="34210">a</span> <span m="34300">lot</span> <span m="34540">like</span>
  <span m="34870">eigenvalues,</span> <span m="35680">but</span> <span
  m="36010">different</span> <span m="36970">because</span> <span
  m="37600">the</span> <span m="37750">matrix</span> <span m="38440">A</span>
  <span m="39490">now</span> <span m="39970">is</span> <span
  m="41500">more</span> <span m="42040">usually</span> <span
  m="42760">rectangular.</span> <span m="44410">So</span> <span
  m="44680">for</span> <span m="44860">a</span> <span
  m="44920">rectangular</span> <span m="45670">matrix,</span> <span
  m="46210">the</span> <span m="46330">whole</span> <span m="46570">idea</span>
  <span m="46930">of</span> <span m="47050">eigenvalues</span> <span
  m="48250">is</span> <span m="48730">shot</span> <span m="49300">because</span>
  <span m="50800">if</span> <span m="50950">I</span> <span
  m="51070">multiply</span> <span m="51610">A</span> <span
  m="53260">times</span> <span m="53650">a</span> <span m="53710">vector</span>
  <span m="54160">x</span> <span m="54670">in</span> <span m="55030">n</span>
  <span m="55300">dimensions,</span> <span m="56760">out</span> <span
  m="57000">will</span> <span m="57220">come</span> <span
  m="57640">something</span> <span m="58150">in</span> <span m="58450">m</span>
  <span m="58780">dimensions</span> <span m="59590">and</span> <span
  m="59740">it's</span> <span m="59980">not</span> <span m="60240">going</span>
  <span m="60420">to</span> <span m="60550">equal</span> <span
  m="61000">lambda</span> <span m="61450">x.</span> <span m="61810">So</span>
  <span m="62130">Ax</span> <span m="62710">equal</span> <span
  m="63040">lambda</span> <span m="63430">x</span> <span m="63820">is</span>
  <span m="64060">not</span> <span m="64360">even</span> <span
  m="64629">possible</span> <span m="65680">if</span> <span m="66220">A</span>
  <span m="66460">is</span> <span m="66640">rectangular.</span></p><p><span
  m="68620">And</span> <span m="69580">even</span> <span m="69880">if</span>
  <span m="70030">A</span> <span m="70160">is</span> <span
  m="70290">square,</span> <span m="71440">what</span> <span
  m="71780">are</span> <span m="71890">the</span> <span
  m="72010">problems,</span> <span m="72550">just</span> <span
  m="72880">thinking</span> <span m="73330">for</span> <span m="73480">a</span>
  <span m="73540">minute</span> <span m="73870">about</span> <span
  m="74170">eigenvalues?</span> <span m="76420">The</span> <span
  m="76870">case</span> <span m="77290">I</span> <span m="77410">wrote</span>
  <span m="77650">up</span> <span m="77800">here</span> <span
  m="79060">is</span> <span m="79330">the</span> <span m="79810">great</span>
  <span m="80350">case</span> <span m="80950">where</span> <span
  m="81910">I</span> <span m="82030">have</span> <span m="82180">a</span> <span
  m="82240">symmetric</span> <span m="82900">matrix</span> <span
  m="84190">and</span> <span m="84370">then</span> <span m="84580">it's</span>
  <span m="84790">got</span> <span m="85030">a</span> <span
  m="85150">full</span> <span m="85510">set</span> <span m="85780">of</span>
  <span m="85900">eigenvalues</span> <span m="86860">and</span> <span
  m="87010">eigenvectors</span> <span m="88720">and</span> <span
  m="89020">they're</span> <span m="89410">orthogonal,</span> <span
  m="90190">all</span> <span m="90490">good.</span> <span m="91360">But</span>
  <span m="91990">for</span> <span m="92260">a</span> <span
  m="92500">general</span> <span m="93100">square</span> <span
  m="93490">matrix,</span> <span m="94650">either</span> <span
  m="95100">the</span> <span m="95540">eigenvectors</span> <span
  m="96730">are</span> <span m="97930">complex--</span> <span
  m="98800">eigenvalues</span> <span m="99670">are</span> <span
  m="99790">complex</span> <span m="100750">or</span> <span
  m="100930">the</span> <span m="101560">eigenvectors</span> <span
  m="102550">are</span> <span m="102670">not</span> <span
  m="103000">orthogonal.</span> <span m="106780">So</span> <span
  m="107170">we</span> <span m="108130">can't</span> <span
  m="108550">stay</span> <span m="108940">with</span> <span
  m="109150">eigenvalues</span> <span m="109930">forever.</span> <span
  m="110410">That's</span> <span m="111070">what</span> <span
  m="111250">I'm</span> <span m="111400">saying.</span></p><p><span
  m="112000">And</span> <span m="112150">this</span> <span m="112390">is</span>
  <span m="112540">the</span> <span m="112660">right</span> <span
  m="112930">thing</span> <span m="113200">to</span> <span m="113320">do.</span>
  <span m="115840">So</span> <span m="115990">what</span> <span
  m="116200">are</span> <span m="116260">these</span> <span
  m="116530">pieces?</span> <span m="117910">So</span> <span
  m="118120">these</span> <span m="118480">are</span> <span
  m="118570">the</span> <span m="119830">left</span> <span m="123300">and</span>
  <span m="123450">these</span> <span m="123840">are</span> <span
  m="123990">the</span> <span m="124230">right</span> <span
  m="125910">singular</span> <span m="126450">vectors.</span> <span
  m="127710">So</span> <span m="127950">this</span> <span m="128190">is</span>
  <span m="128400">the</span> <span m="129000">new</span> <span
  m="129240">word</span> <span m="129570">is</span> <span
  m="129720">singular.</span> <span m="136170">And</span> <span
  m="136800">in</span> <span m="136940">between</span> <span
  m="137550">go</span> <span m="137910">the--</span> <span m="138660">not</span>
  <span m="138930">the</span> <span m="139110">eigenvalues,</span> <span
  m="140040">but</span> <span m="140350">the</span> <span
  m="141690">singular</span> <span m="142260">values.</span> <span
  m="143790">So</span> <span m="143970">we've</span> <span m="144090">got</span>
  <span m="144390">the</span> <span m="144690">whole</span> <span
  m="144900">point</span> <span m="145230">now.</span></p><p><span
  m="145780">You've</span> <span m="145960">got</span> <span
  m="146120">to</span> <span m="146220">pick</span> <span m="146490">up</span>
  <span m="146670">on</span> <span m="146820">this.</span> <span
  m="147690">There</span> <span m="147870">are</span> <span
  m="147930">two</span> <span m="148260">sets</span> <span m="148680">of</span>
  <span m="149490">singular</span> <span m="149970">vectors,</span> <span
  m="150420">not</span> <span m="150720">one.</span> <span m="152490">For</span>
  <span m="152730">eigenvectors,</span> <span m="153540">we</span> <span
  m="153690">just</span> <span m="153900">had</span> <span m="154110">one</span>
  <span m="154410">set,</span> <span m="155830">the</span> <span
  m="156090">Q's.</span> <span m="158540">Now</span> <span m="158990">we</span>
  <span m="159230">have</span> <span m="159800">a</span> <span
  m="159860">rectangular</span> <span m="160580">matrix,</span> <span
  m="161690">we've</span> <span m="161840">got</span> <span
  m="162050">one</span> <span m="162320">set</span> <span m="162620">of</span>
  <span m="162740">left</span> <span m="163380">eigenvectors</span> <span
  m="164920">in</span> <span m="166400">m</span> <span
  m="166670">dimensions,</span> <span m="167870">and</span> <span
  m="168020">we've</span> <span m="168230">got</span> <span
  m="168410">another</span> <span m="168860">set</span> <span
  m="169160">of</span> <span m="169310">right</span> <span
  m="169830">eigenvectors</span> <span m="170630">in</span> <span
  m="171440">n</span> <span m="171680">dimensions.</span> <span
  m="173030">And</span> <span m="174530">numbers</span> <span
  m="175040">in</span> <span m="175210">between</span> <span
  m="176240">are</span> <span m="177110">not</span> <span
  m="177410">eigenvalues,</span> <span m="178280">but</span> <span
  m="178520">singular</span> <span m="179150">values.</span></p><p><span
  m="179700">So</span> <span m="179780">these</span> <span
  m="180080">guys</span> <span m="180500">are--</span> <span
  m="183440">let</span> <span m="183620">me</span> <span m="183800">write</span>
  <span m="184160">what</span> <span m="184340">that</span> <span
  m="184580">looks</span> <span m="184820">like.</span> <span
  m="185150">This</span> <span m="185330">is,</span> <span
  m="185610">again,</span> <span m="185940">a</span> <span
  m="186040">diagonal</span> <span m="186620">matrix</span> <span
  m="188550">sigma</span> <span m="188990">2</span> <span m="189600">to</span>
  <span m="189920">sigma</span> <span m="190640">r,</span> <span
  m="191090">let's</span> <span m="191300">say.</span> <span
  m="193470">So</span> <span m="193710">it's</span> <span
  m="193890">again,</span> <span m="194190">a</span> <span
  m="194280">diagonal</span> <span m="194880">matrix</span> <span
  m="195390">in</span> <span m="195510">the</span> <span
  m="195600">middle.</span> <span m="197250">But</span> <span
  m="201060">the</span> <span m="201330">numbers</span> <span
  m="201840">on</span> <span m="201990">the</span> <span
  m="202170">diagonal</span> <span m="202950">are</span> <span
  m="203220">all</span> <span m="203460">positive</span> <span
  m="205320">or</span> <span m="205470">0.</span> <span m="206670">And</span>
  <span m="207240">they're</span> <span m="207570">called</span> <span
  m="207990">singular</span> <span m="208560">values.</span> <span
  m="209110">So</span> <span m="209250">it's</span> <span m="209430">just</span>
  <span m="209730">a</span> <span m="209790">different</span> <span
  m="210150">world.</span></p><p><span m="211920">So</span> <span
  m="212070">really,</span> <span m="212490">the</span> <span
  m="212700">first</span> <span m="213060">step</span> <span
  m="213430">by</span> <span m="213600">have</span> <span m="213840">to</span>
  <span m="213960">do,</span> <span m="214950">the</span> <span
  m="215070">math</span> <span m="215430">step,</span> <span
  m="215940">is</span> <span m="216240">to</span> <span m="216390">show</span>
  <span m="217320">that</span> <span m="217560">any</span> <span
  m="217800">matrix</span> <span m="221070">can</span> <span
  m="221340">be</span> <span m="221550">factored</span> <span
  m="222150">into</span> <span m="223410">u</span> <span m="223710">times</span>
  <span m="224040">sigma</span> <span m="224490">times</span> <span
  m="224830">v</span> <span m="225030">transpose.</span> <span
  m="227630">So</span> <span m="228110">that's</span> <span
  m="228460">the</span> <span m="228570">parallel</span> <span
  m="229380">to</span> <span m="229770">the</span> <span
  m="230610">spectral</span> <span m="231270">theorem</span> <span
  m="231810">that</span> <span m="232050">any</span> <span
  m="232350">symmetric</span> <span m="233040">matrix</span> <span
  m="233640">could</span> <span m="233820">be</span> <span
  m="233970">factored</span> <span m="234450">that</span> <span
  m="234660">way.</span> <span m="235650">So</span> <span
  m="235860">you're</span> <span m="236010">good</span> <span
  m="236220">for</span> <span m="236400">that</span> <span
  m="236640">part.</span> <span m="238380">We</span> <span
  m="238500">just</span> <span m="238710">have</span> <span m="238890">to</span>
  <span m="239010">do</span> <span m="239250">it</span> <span
  m="239940">to</span> <span m="240090">see</span> <span m="240420">what</span>
  <span m="240720">are</span> <span m="241740">u</span> <span
  m="242160">and</span> <span m="242310">sigma</span> <span
  m="242760">and</span> <span m="242910">v?</span> <span m="244230">What</span>
  <span m="244410">are</span> <span m="244530">those</span> <span
  m="244830">vectors</span> <span m="245430">and</span> <span
  m="245610">those</span> <span m="245880">singular</span> <span
  m="246570">values?</span> <span m="248280">Let's</span> <span
  m="248520">go.</span></p><p><span m="249810">So</span> <span
  m="250170">the</span> <span m="250320">key</span> <span m="250680">is</span>
  <span m="253180">that</span> <span m="253420">A</span> <span
  m="253660">transpose</span> <span m="254530">A</span> <span
  m="255780">is</span> <span m="255970">a</span> <span m="256029">great</span>
  <span m="256390">matrix.</span> <span m="256990">So</span> <span
  m="258010">that's</span> <span m="258339">the</span> <span
  m="258490">key</span> <span m="258850">to</span> <span m="259570">the</span>
  <span m="260200">math</span> <span m="261260">is</span> <span
  m="261550">A</span> <span m="261730">transpose</span> <span
  m="262540">A.</span> <span m="264220">So</span> <span m="264370">what</span>
  <span m="264580">are</span> <span m="264640">the</span> <span
  m="264790">properties</span> <span m="265330">of</span> <span
  m="265480">A</span> <span m="265630">transpose</span> <span
  m="266035">A?</span> <span m="266650">A</span> <span m="266920">is</span>
  <span m="267190">rectangular</span> <span m="268000">again.</span></p><p><span
  m="268970">So</span> <span m="269410">maybe</span> <span m="270370">m</span>
  <span m="270580">by</span> <span m="270880">n</span> <span m="273520">A</span>
  <span m="273700">transpose.</span> <span m="274710">So</span> <span
  m="274900">this</span> <span m="275110">was</span> <span m="275320">m</span>
  <span m="275560">by</span> <span m="275830">n.</span> <span
  m="276715">And</span> <span m="277210">this</span> <span m="277480">was</span>
  <span m="277720">n</span> <span m="278140">by</span> <span
  m="278440">m.</span> <span m="279760">So</span> <span m="279940">we</span>
  <span m="280090">get</span> <span m="280330">a</span> <span
  m="280390">result</span> <span m="281050">that's</span> <span
  m="281610">n</span> <span m="281860">by</span> <span
  m="282100">n.</span></p><p><span m="284500">And</span> <span
  m="284830">what</span> <span m="285070">else</span> <span
  m="285310">can</span> <span m="285490">you</span> <span m="285610">tell</span>
  <span m="285820">me</span> <span m="285970">about</span> <span
  m="286240">A</span> <span m="286390">transpose</span> <span
  m="287090">A?</span> <span m="288630">It's</span> <span m="289080">a</span>
  <span m="289170">metric.</span> <span m="289780">That's</span> <span
  m="290020">a</span> <span m="290080">big</span> <span m="290290">deal.</span>
  <span m="291610">And</span> <span m="291850">it's</span> <span
  m="292000">square.</span> <span m="293230">And</span> <span
  m="293830">well</span> <span m="294290">yeah,</span> <span
  m="294520">you</span> <span m="294670">can</span> <span m="294790">tell</span>
  <span m="294970">me</span> <span m="295120">more</span> <span
  m="295360">now,</span> <span m="295690">because</span> <span
  m="295960">we</span> <span m="296140">talked</span> <span
  m="296530">about</span> <span m="298090">something,</span> <span
  m="298690">a</span> <span m="298780">topic</span> <span
  m="300020">that's</span> <span m="301080">a</span> <span
  m="301110">little</span> <span m="301330">more</span> <span
  m="301600">than</span> <span m="301780">symmetric</span> <span
  m="302440">last</span> <span m="302770">time.</span></p><p><span
  m="304390">The</span> <span m="304600">matrix</span> <span m="305110">A</span>
  <span m="305260">transpose</span> <span m="305920">A</span> <span
  m="306100">will</span> <span m="306310">be</span> <span
  m="307870">positive,</span> <span m="308500">definite.</span> <span
  m="309070">It's</span> <span m="309280">eigenvalues</span> <span
  m="310270">are</span> <span m="311500">greater</span> <span
  m="311930">or</span> <span m="311990">equal</span> <span m="312290">to</span>
  <span m="312520">0.</span> <span m="313990">And</span> <span
  m="314990">that</span> <span m="315370">will</span> <span
  m="315700">mean</span> <span m="316060">that</span> <span m="316180">we</span>
  <span m="316330">can</span> <span m="316510">take</span> <span
  m="316750">their</span> <span m="316930">square</span> <span
  m="317290">roots.</span> <span m="318190">And</span> <span
  m="318310">that's</span> <span m="318600">what</span> <span
  m="318790">we</span> <span m="318940">will</span> <span
  m="319120">do.</span></p><p><span m="319720">So</span> <span
  m="319960">A</span> <span m="320110">transpose</span> <span
  m="320830">A</span> <span m="321070">we'll</span> <span m="321250">have</span>
  <span m="321490">a</span> <span m="321550">factorization.</span> <span
  m="323020">It's</span> <span m="323230">symmetric.</span> <span
  m="324380">It'll</span> <span m="325210">have</span> <span m="325480">a</span>
  <span m="325900">like,</span> <span m="326200">a</span> <span
  m="326290">Q</span> <span m="326830">lambda</span> <span m="327340">Q</span>
  <span m="327700">transpose,</span> <span m="328780">but</span> <span
  m="328990">I'm</span> <span m="329200">going</span> <span m="329300">to</span>
  <span m="329440">call</span> <span m="329710">it</span> <span
  m="329890">V</span> <span m="330880">lambda--</span> <span
  m="331630">no,</span> <span m="332050">yeah,</span> <span
  m="332380">lambda--</span> <span m="332655">I'll</span> <span
  m="332930">still</span> <span m="333080">call</span> <span
  m="333270">it</span> <span m="333580">lambda</span> <span m="334600">V</span>
  <span m="334810">transpose.</span></p><p><span m="336610">So</span> <span
  m="336740">these</span> <span m="337100">V's--</span> <span
  m="337600">what</span> <span m="337750">do</span> <span m="337840">we</span>
  <span m="337960">know</span> <span m="338140">about</span> <span
  m="338410">eigenvectors</span> <span m="339300">of</span> <span
  m="339430">these</span> <span m="339700">V's</span> <span m="340180">or</span>
  <span m="340300">eigenvectors</span> <span m="341230">of</span> <span
  m="341380">this</span> <span m="341710">guy?</span> <span
  m="343180">Square,</span> <span m="343990">symmetric,</span> <span
  m="344680">positive,</span> <span m="345190">definite</span> <span
  m="345550">matrix.</span> <span m="346030">So</span> <span
  m="346240">we're</span> <span m="346480">in</span> <span
  m="346570">good</span> <span m="346780">shape.</span> <span
  m="347740">And</span> <span m="348100">what</span> <span m="348670">do</span>
  <span m="348730">we</span> <span m="348850">know</span> <span
  m="349030">about</span> <span m="349240">the</span> <span
  m="349360">eigenvalues</span> <span m="350350">of</span> <span
  m="351250">A</span> <span m="351400">transpose</span> <span
  m="352030">A?</span> <span m="352420">They</span> <span m="352720">are</span>
  <span m="352900">all</span> <span m="354100">positive.</span></p><p><span
  m="355380">So</span> <span m="355940">the</span> <span
  m="356140">eigenvalues</span> <span m="356830">are--</span> <span
  m="357040">well,</span> <span m="357370">or</span> <span
  m="357580">equal</span> <span m="358000">to</span> <span m="358160">0.</span>
  <span m="359230">And</span> <span m="359380">these</span> <span
  m="359650">guys</span> <span m="360010">are</span> <span
  m="360100">orthogonal.</span> <span m="362970">And</span> <span
  m="363220">these</span> <span m="363460">guys</span> <span
  m="363820">are</span> <span m="363920">greater</span> <span
  m="364020">or</span> <span m="364120">equal</span> <span m="364300">to</span>
  <span m="364480">there.</span> <span m="367330">So</span> <span
  m="367510">that's</span> <span m="367780">good.</span></p><p><span
  m="369700">That's</span> <span m="370210">one</span> <span
  m="370690">of</span> <span m="370870">our--</span> <span
  m="372520">We'll</span> <span m="372880">depend</span> <span
  m="373360">a</span> <span m="373420">lot</span> <span m="373810">on</span>
  <span m="373990">that.</span> <span m="374300">But</span> <span
  m="374800">also,</span> <span m="375890">you've</span> <span
  m="376020">got</span> <span m="376170">to</span> <span
  m="376240">recognize</span> <span m="376900">that</span> <span
  m="377080">A,</span> <span m="377365">A</span> <span
  m="377650">transpose</span> <span m="378430">is</span> <span
  m="378580">a</span> <span m="378640">different</span> <span
  m="379690">guy,</span> <span m="381250">A,</span> <span m="381445">A</span>
  <span m="381640">transpose.</span> <span m="384310">So</span> <span
  m="385410">what's</span> <span m="385690">the</span> <span
  m="385780">shape</span> <span m="386140">of</span> <span m="386350">A,</span>
  <span m="386665">A</span> <span m="386980">transpose?</span> <span
  m="388300">How</span> <span m="388480">big</span> <span m="388780">is</span>
  <span m="388930">that?</span></p><p><span m="390160">Now</span> <span
  m="390520">I've</span> <span m="390700">got--</span> <span
  m="392020">what</span> <span m="392500">do</span> <span m="392730">I</span>
  <span m="392820">have?</span> <span m="393180">M</span> <span
  m="393510">by</span> <span m="393780">n</span> <span m="394050">times</span>
  <span m="394470">n</span> <span m="394680">by</span> <span
  m="394920">m.</span> <span m="395220">So</span> <span m="395490">this</span>
  <span m="395700">will</span> <span m="395820">be</span> <span
  m="396000">what</span> <span m="396180">size?</span> <span m="397580">N</span>
  <span m="397800">by</span> <span m="398070">m.</span></p><p><span
  m="398340">Different</span> <span m="398730">shape</span> <span
  m="401490">but</span> <span m="401670">with</span> <span m="401850">the</span>
  <span m="401940">same</span> <span m="402360">eigenvalues--</span> <span
  m="404370">the</span> <span m="404460">same</span> <span
  m="404850">eigenvalues.</span> <span m="405510">So</span> <span
  m="405720">it's</span> <span m="405870">going</span> <span
  m="405980">to</span> <span m="406080">have</span> <span m="406260">some</span>
  <span m="406500">other</span> <span m="406740">eigenvectors,</span> <span
  m="407490">u--</span> <span m="407685">of</span> <span
  m="407880">course,</span> <span m="408210">I'm</span> <span
  m="408290">going</span> <span m="408390">to</span> <span
  m="408450">call</span> <span m="408660">them</span> <span m="408840">u,</span>
  <span m="409170">because</span> <span m="409320">I'm</span> <span
  m="409590">going</span> <span m="409730">to</span> <span m="409890">go</span>
  <span m="410100">in</span> <span m="410310">over</span> <span
  m="410490">there.</span> <span m="411330">They'll</span> <span
  m="411480">be</span> <span m="411600">the</span> <span
  m="411750">same.</span></p><p><span m="413140">Well,</span> <span
  m="413310">they're</span> <span m="413510">saying</span> <span
  m="414390">yeah,</span> <span m="414720">let</span> <span
  m="414780">me--</span> <span m="416000">I</span> <span
  m="416130">shouldn't--</span> <span m="417080">I</span> <span
  m="417420">have</span> <span m="417570">to</span> <span m="417720">say</span>
  <span m="419130">when</span> <span m="419250">I</span> <span
  m="419340">say</span> <span m="419640">the</span> <span
  m="419760">same,</span> <span m="422650">I</span> <span
  m="422720">can't</span> <span m="423110">quite</span> <span
  m="423590">literally</span> <span m="424160">mean</span> <span
  m="424520">the</span> <span m="424880">very</span> <span
  m="425270">same,</span> <span m="425690">because</span> <span
  m="426830">this</span> <span m="427180">has</span> <span m="427370">got</span>
  <span m="427940">n</span> <span m="428420">eigenvalues</span> <span
  m="429380">and</span> <span m="429530">this</span> <span m="429710">has</span>
  <span m="429860">m</span> <span m="430700">eigenvalues.</span> <span
  m="432650">But</span> <span m="432890">the</span> <span
  m="433880">missing</span> <span m="434390">guys,</span> <span
  m="434840">the</span> <span m="434990">ones</span> <span
  m="435290">that</span> <span m="435410">are</span> <span m="435560">in</span>
  <span m="435770">one</span> <span m="436130">of</span> <span
  m="436190">them</span> <span m="436660">and</span> <span m="436760">not</span>
  <span m="437040">in</span> <span m="437150">the</span> <span
  m="437300">other,</span> <span m="437540">depending</span> <span
  m="438080">on</span> <span m="438560">the</span> <span
  m="438680">sizes,</span> <span m="439610">are</span> <span
  m="439760">zeros.</span> <span m="441110">So</span> <span
  m="441350">really,</span> <span m="441800">the</span> <span
  m="443030">heart</span> <span m="443390">of</span> <span m="443510">the</span>
  <span m="443630">thing,</span> <span m="443990">the</span> <span
  m="444170">non-zero</span> <span m="444920">eigenvalues</span> <span
  m="445670">are</span> <span m="445760">the</span> <span
  m="445910">same.</span></p><p><span m="449060">Well</span> <span
  m="449450">actually,</span> <span m="452050">I've</span> <span
  m="452230">pretty</span> <span m="452530">much</span> <span
  m="452830">revealed</span> <span m="454210">what</span> <span
  m="456110">the</span> <span m="456400">SVD</span> <span m="457060">is</span>
  <span m="457180">going</span> <span m="457300">to</span> <span
  m="457440">use.</span> <span m="458350">It's</span> <span
  m="458560">going</span> <span m="458670">to</span> <span m="458800">use</span>
  <span m="459460">the</span> <span m="459610">U's</span> <span
  m="461230">from</span> <span m="461470">here</span> <span
  m="462070">and</span> <span m="462250">the</span> <span m="462340">V's</span>
  <span m="462790">from</span> <span m="463000">here.</span> <span
  m="463520">But</span> <span m="463630">that's</span> <span
  m="464650">the</span> <span m="464800">story.</span> <span
  m="465280">You've</span> <span m="465440">got</span> <span
  m="465590">to</span> <span m="465700">see</span> <span m="465970">that</span>
  <span m="466150">story.</span></p><p><span m="468550">So</span> <span
  m="469180">fresh</span> <span m="469510">start</span> <span
  m="469900">on</span> <span m="470080">the</span> <span
  m="470350">singular</span> <span m="470860">value</span> <span
  m="471280">decomposition.</span> <span m="472330">What</span> <span
  m="472570">are</span> <span m="472630">we</span> <span
  m="472780">looking</span> <span m="473140">for?</span> <span
  m="474110">Well,</span> <span m="474580">as</span> <span m="474850">a</span>
  <span m="474940">factorization--</span> <span m="476990">so</span> <span
  m="477130">we're</span> <span m="477250">looking</span> <span
  m="477580">for--</span> <span m="483460">we</span> <span
  m="483760">want</span> <span m="485350">A.</span> <span m="486670">We</span>
  <span m="486850">want</span> <span m="487090">vectors</span> <span
  m="487960">v,</span> <span m="490200">so</span> <span m="490410">that</span>
  <span m="490530">when</span> <span m="490710">I</span> <span
  m="490830">multiply</span> <span m="491400">by</span> <span
  m="491610">v--</span> <span m="492450">so</span> <span m="492690">if</span>
  <span m="492840">it</span> <span m="492900">was</span> <span
  m="493110">an</span> <span m="493260">eigenvector,</span> <span
  m="494280">it</span> <span m="494420">would</span> <span m="494650">be</span>
  <span m="494880">Av</span> <span m="495540">equal</span> <span
  m="495750">lambda</span> <span m="496140">v.</span></p><p><span
  m="497100">But</span> <span m="497250">now</span> <span m="497700">for</span>
  <span m="497940">A,</span> <span m="498450">it's</span> <span
  m="499320">rectangular.</span> <span m="500600">It</span> <span
  m="500710">hasn't</span> <span m="500940">got</span> <span
  m="501180">eigenvectors.</span> <span m="502530">So</span> <span
  m="502800">Av</span> <span m="503940">is</span> <span m="505380">sigma,</span>
  <span m="506240">that</span> <span m="506710">the</span> <span
  m="506930">new</span> <span m="508650">singular</span> <span
  m="509160">value</span> <span m="509700">times</span> <span
  m="510270">u.</span> <span m="511780">That's</span> <span
  m="512750">the</span> <span m="513039">first</span> <span
  m="513429">guy</span> <span m="514270">and</span> <span m="514450">the</span>
  <span m="514600">second</span> <span m="515020">guy</span> <span
  m="515950">and</span> <span m="516159">the</span> <span m="517120">rth</span>
  <span m="517570">guy.</span> <span m="518169">I'll</span> <span
  m="518500">stop</span> <span m="518960">at</span> <span m="519110">r,</span>
  <span m="520870">the</span> <span m="520990">rank.</span></p><p><span
  m="522740">Oh,</span> <span m="523100">yeah.</span> <span m="526100">Is</span>
  <span m="526250">that</span> <span m="526370">what</span> <span
  m="526550">I</span> <span m="526640">want?</span> <span m="530870">A--</span>
  <span m="531630">let</span> <span m="531705">me</span> <span
  m="531780">just</span> <span m="532140">see.</span> <span m="533740">Av</span>
  <span m="534990">is</span> <span m="535260">sigma</span> <span
  m="535840">u.</span> <span m="536200">Yeah,</span> <span
  m="536440">that's</span> <span m="536710">good.</span></p><p><span
  m="538570">So</span> <span m="538810">this</span> <span m="539050">is</span>
  <span m="539200">what</span> <span m="539380">takes</span> <span
  m="539710">the</span> <span m="539800">place</span> <span m="540190">of</span>
  <span m="540310">Ax</span> <span m="540760">equal</span> <span
  m="540970">lambda</span> <span m="541330">x.</span> <span m="542750">A</span>
  <span m="543110">times</span> <span m="543530">one</span> <span
  m="543980">set</span> <span m="544280">of</span> <span
  m="544970">singular</span> <span m="545420">vectors</span> <span
  m="546200">gives</span> <span m="546500">me</span> <span m="546680">a</span>
  <span m="546770">number</span> <span m="547140">of</span> <span
  m="547190">times</span> <span m="547550">the</span> <span
  m="547670">other</span> <span m="547940">set</span> <span m="548210">of</span>
  <span m="548300">singular</span> <span m="548780">vectors.</span> <span
  m="549590">And</span> <span m="549740">why</span> <span m="550010">did</span>
  <span m="550220">I</span> <span m="550340">stop</span> <span
  m="550610">at</span> <span m="550880">r</span> <span m="551960">the</span>
  <span m="552050">rank?</span> <span m="553010">Because</span> <span
  m="553460">after</span> <span m="553820">that,</span> <span
  m="554120">the</span> <span m="554270">sigmas</span> <span
  m="554780">are</span> <span m="554910">0.</span> <span m="555360">So</span>
  <span m="555950">after</span> <span m="556310">that,</span> <span
  m="556610">I</span> <span m="556790">could</span> <span m="557000">have</span>
  <span m="557840">some</span> <span m="558050">more</span> <span
  m="558320">guys,</span> <span m="559700">but</span> <span
  m="559880">they'll</span> <span m="560120">be</span> <span
  m="560300">in</span> <span m="560420">the</span> <span m="560540">null</span>
  <span m="560840">space</span> <span m="563390">0</span> <span
  m="564710">on</span> <span m="564920">down</span> <span m="565250">to</span>
  <span m="567330">of</span> <span m="567860">Vn.</span></p><p><span
  m="569030">So</span> <span m="569210">these</span> <span m="569510">are</span>
  <span m="569570">the</span> <span m="569990">important</span> <span
  m="570470">ones.</span> <span m="572460">So</span> <span
  m="572640">that's</span> <span m="572880">what</span> <span
  m="573030">I'm</span> <span m="573150">looking</span> <span
  m="573450">for.</span> <span m="575910">Let</span> <span m="576090">me</span>
  <span m="576470">say</span> <span m="576710">it</span> <span
  m="576800">now</span> <span m="577010">in</span> <span
  m="577150">words.</span> <span m="578680">I'm</span> <span
  m="578920">looking</span> <span m="579310">for</span> <span
  m="579460">a</span> <span m="579550">bunch</span> <span m="579880">of</span>
  <span m="580030">orthogonal</span> <span m="580690">vectors</span> <span
  m="581290">v</span> <span m="583540">so</span> <span m="583960">that</span>
  <span m="584170">when</span> <span m="584380">I</span> <span
  m="584470">multiply</span> <span m="584950">them</span> <span
  m="585130">by</span> <span m="585400">A</span> <span m="586330">I</span> <span
  m="586750">get</span> <span m="586960">a</span> <span m="587020">bunch</span>
  <span m="587290">of</span> <span m="587410">orthogonal</span> <span
  m="588040">vectors</span> <span m="588520">u.</span></p><p><span
  m="589910">That</span> <span m="590270">is</span> <span m="590900">not</span>
  <span m="591590">so</span> <span m="592340">clearly</span> <span
  m="592940">possible.</span> <span m="593570">But</span> <span
  m="593920">it</span> <span m="595370">is</span> <span
  m="595610">possible.</span> <span m="596090">It</span> <span
  m="596150">does</span> <span m="596450">happen.</span> <span
  m="597320">I'm</span> <span m="597470">looking</span> <span
  m="597800">for</span> <span m="598190">one</span> <span m="598490">set</span>
  <span m="598730">of</span> <span m="598820">orthogonal</span> <span
  m="599360">vectors</span> <span m="599840">v</span> <span m="600170">in</span>
  <span m="600320">the</span> <span m="600620">input</span> <span
  m="601130">space,</span> <span m="601630">you</span> <span
  m="601730">could</span> <span m="601910">say,</span> <span
  m="602960">so</span> <span m="603200">that</span> <span m="603410">the</span>
  <span m="603870">Av's</span> <span m="604330">in</span> <span
  m="604460">the</span> <span m="604580">output</span> <span
  m="605090">space</span> <span m="606260">are</span> <span
  m="606410">also</span> <span m="606860">orthogonal.</span></p><p><span
  m="611360">In</span> <span m="611780">our</span> <span
  m="611880">picture</span> <span m="612450">of</span> <span
  m="612840">the</span> <span m="613230">fundamental--</span> <span
  m="614390">the</span> <span m="614730">big</span> <span
  m="614970">picture</span> <span m="615390">of</span> <span
  m="615480">linear</span> <span m="615840">algebra,</span> <span
  m="618560">we</span> <span m="618740">have</span> <span m="620780">v's</span>
  <span m="622130">in</span> <span m="622280">this</span> <span
  m="622520">space,</span> <span m="624170">and</span> <span
  m="624380">then</span> <span m="624830">stuff</span> <span
  m="625190">in</span> <span m="625310">the</span> <span m="625400">null</span>
  <span m="625640">space.</span> <span m="627530">And</span> <span
  m="627980">we</span> <span m="628220">have</span> <span m="628700">u's</span>
  <span m="631520">over</span> <span m="631790">here</span> <span
  m="632150">in</span> <span m="632330">the</span> <span
  m="632750">columns</span> <span m="633170">space</span> <span
  m="634190">and</span> <span m="634430">some</span> <span
  m="634670">stuff</span> <span m="635120">in</span> <span m="635270">the</span>
  <span m="636280">null</span> <span m="636530">space</span> <span
  m="636980">over</span> <span m="637190">there.</span> <span
  m="638160">And</span> <span m="638180">the</span> <span m="638300">idea</span>
  <span m="638690">is</span> <span m="639050">that</span> <span
  m="639260">I</span> <span m="639410">have</span> <span
  m="639740">orthogonal</span> <span m="640640">v's</span> <span
  m="641180">here.</span> <span m="642840">And</span> <span
  m="642890">when</span> <span m="643100">I</span> <span
  m="643220">multiply</span> <span m="643880">by</span> <span
  m="644180">A--</span> <span m="644820">so</span> <span
  m="645050">multiply</span> <span m="647090">by</span> <span
  m="647390">A--</span> <span m="648920">then</span> <span m="649310">I</span>
  <span m="649490">get</span> <span m="649790">orthogonal</span> <span
  m="650570">u's</span> <span m="651110">over</span> <span
  m="651380">here,</span> <span m="652930">orthogonal</span> <span
  m="653650">to</span> <span m="653830">orthogonal.</span> <span
  m="654760">That's</span> <span m="656230">what</span> <span
  m="656380">makes</span> <span m="656800">the</span> <span
  m="657790">V's</span> <span m="658300">and</span> <span m="658420">they</span>
  <span m="658570">u's</span> <span m="658960">special.</span> <span
  m="660260">Right?</span></p><p><span m="661510">That's</span> <span
  m="662210">the</span> <span m="662860">property.</span> <span
  m="663370">And</span> <span m="663520">then</span> <span
  m="663850">when</span> <span m="664090">we</span> <span
  m="664210">write</span> <span m="664480">down--</span> <span
  m="664770">well,</span> <span m="664960">let</span> <span m="665080">me</span>
  <span m="665200">write</span> <span m="665410">down</span> <span
  m="665620">what</span> <span m="665800">that</span> <span
  m="665980">would</span> <span m="666130">mean.</span> <span
  m="667390">So</span> <span m="667690">I've</span> <span m="667870">just</span>
  <span m="668110">drawn</span> <span m="668410">a</span> <span
  m="668470">picture</span> <span m="669460">to</span> <span
  m="669610">go</span> <span m="669850">with</span> <span
  m="670120">this--</span> <span m="671950">those</span> <span
  m="672250">equations.</span> <span m="673930">That</span> <span
  m="674080">picture</span> <span m="674530">just</span> <span
  m="674770">goes</span> <span m="675070">with</span> <span
  m="675220">these</span> <span m="675490">equations.</span> <span
  m="676610">And</span> <span m="676660">let</span> <span m="676780">me</span>
  <span m="676930">just</span> <span m="677140">write</span> <span
  m="677410">down</span> <span m="677650">what</span> <span m="677830">it</span>
  <span m="677920">means.</span></p><p><span m="678970">It</span> <span
  m="679090">means</span> <span m="679920">in</span> <span
  m="680280">matrix--</span> <span m="681370">so</span> <span
  m="681580">I've</span> <span m="682840">written</span> <span
  m="683110">it.</span> <span m="683200">Oh</span> <span m="683650">yeah,</span>
  <span m="684070">I've</span> <span m="684190">written</span> <span
  m="684460">it</span> <span m="684550">here</span> <span m="684850">in</span>
  <span m="686470">vectors</span> <span m="687070">one</span> <span
  m="687340">at</span> <span m="687490">a</span> <span m="687550">time.</span>
  <span m="688750">But</span> <span m="688960">of</span> <span
  m="689050">course,</span> <span m="689410">you,</span> <span
  m="689530">know</span> <span m="689800">I'm</span> <span
  m="689920">going</span> <span m="690070">to</span> <span m="690130">put</span>
  <span m="690340">those</span> <span m="690640">vectors</span> <span
  m="691150">into</span> <span m="691420">the</span> <span
  m="691570">columns</span> <span m="692080">of</span> <span m="692230">a</span>
  <span m="692290">matrix.</span> <span m="693610">So</span> <span
  m="693850">A</span> <span m="694240">times</span> <span m="695200">v1</span>
  <span m="696190">up</span> <span m="696370">to</span> <span
  m="697210">let's</span> <span m="697390">say</span> <span m="697720">vr</span>
  <span m="701000">will</span> <span m="702020">equal--</span> <span
  m="704380">oh</span> <span m="705220">yeah.</span> <span m="705490">It</span>
  <span m="705660">equals</span> <span m="705970">sigma</span> <span
  m="706290">as</span> <span m="706490">times</span> <span
  m="706850">u.</span></p><p><span m="707780">So</span> <span
  m="707990">this</span> <span m="708200">is</span> <span m="708350">what</span>
  <span m="708530">I'm</span> <span m="708710">after</span> <span
  m="709580">is</span> <span m="710300">u1</span> <span m="711200">up</span>
  <span m="711380">to</span> <span m="711680">ur</span> <span
  m="713420">multiplied</span> <span m="714200">by</span> <span
  m="715430">sigma</span> <span m="715940">1</span> <span
  m="716900">along</span> <span m="717260">to</span> <span
  m="717620">sigma</span> <span m="718100">r.</span> <span
  m="721730">What</span> <span m="722000">I'm</span> <span
  m="722810">doing</span> <span m="723110">now</span> <span m="723440">is</span>
  <span m="723590">just</span> <span m="723890">to</span> <span
  m="724010">say</span> <span m="725390">I'm</span> <span
  m="725540">converting</span> <span m="726230">these</span> <span
  m="727400">individual</span> <span m="729760">singular</span> <span
  m="730360">vectors,</span> <span m="731550">each</span> <span
  m="731890">v</span> <span m="732280">going</span> <span m="732640">into</span>
  <span m="732940">a</span> <span m="733020">u</span> <span m="733990">to</span>
  <span m="734180">putting</span> <span m="734560">them</span> <span
  m="734680">all</span> <span m="734860">together</span> <span
  m="735340">into</span> <span m="735550">a</span> <span
  m="735610">matrix.</span> <span m="736300">And</span> <span
  m="736480">of</span> <span m="736540">course,</span> <span
  m="736960">what</span> <span m="737140">I've</span> <span
  m="737320">written</span> <span m="737620">here</span> <span
  m="737920">is</span> <span m="738250">Av</span> <span m="739480">equals</span>
  <span m="739930">u</span> <span m="740620">sigma,</span> <span
  m="741670">Av</span> <span m="743440">equals</span> <span m="744310">u</span>
  <span m="744880">sigma.</span> <span m="748150">That's</span> <span
  m="748390">what</span> <span m="748900">that</span> <span
  m="749440">amounts</span> <span m="749860">to.</span></p><p><span
  m="752550">Well,</span> <span m="753810">then</span> <span
  m="755220">I'm</span> <span m="755430">going</span> <span m="755560">to</span>
  <span m="756240">put</span> <span m="756450">a</span> <span
  m="756630">v</span> <span m="756900">transpose</span> <span
  m="757560">on</span> <span m="757710">this</span> <span
  m="757890">side.</span> <span m="758790">And</span> <span
  m="758910">I'm</span> <span m="759060">going</span> <span m="759170">to</span>
  <span m="759300">get</span> <span m="759540">to</span> <span
  m="760290">A</span> <span m="760635">equals</span> <span m="761430">u</span>
  <span m="762210">sigma</span> <span m="763110">v</span> <span
  m="763310">transpose,</span> <span m="764520">multiplying</span> <span
  m="765060">both</span> <span m="765300">sides</span> <span
  m="765690">there</span> <span m="765900">by</span> <span m="766110">v</span>
  <span m="766370">transpose.</span> <span m="768380">I'm</span> <span
  m="768870">kind</span> <span m="769140">of</span> <span
  m="769200">writing</span> <span m="769500">the</span> <span
  m="769620">same</span> <span m="769920">thing</span> <span
  m="770190">in</span> <span m="770310">different</span> <span
  m="771240">forms,</span> <span m="771750">matrix</span> <span
  m="772320">form,</span> <span m="773790">vector</span> <span
  m="774240">at</span> <span m="774390">a</span> <span m="774420">time</span>
  <span m="774900">form.</span></p><p><span m="777690">And</span> <span
  m="777870">now</span> <span m="780030">we</span> <span m="780180">have</span>
  <span m="780330">to</span> <span m="780420">find</span> <span
  m="780830">them.</span> <span m="781440">Now</span> <span
  m="782220">I've</span> <span m="783570">used</span> <span m="784260">up</span>
  <span m="784380">boards</span> <span m="784860">saying</span> <span
  m="785340">what</span> <span m="785550">we're</span> <span
  m="785730">after,</span> <span m="786210">but</span> <span
  m="786360">now</span> <span m="786540">we've</span> <span
  m="786660">got</span> <span m="786840">to</span> <span m="786900">get</span>
  <span m="787080">there.</span> <span m="788430">So</span> <span
  m="788640">what</span> <span m="788850">are</span> <span m="788910">the</span>
  <span m="789030">v's</span> <span m="789540">and</span> <span
  m="789660">what</span> <span m="789870">are</span> <span m="789930">the</span>
  <span m="790050">u's?</span> <span m="795820">Well,</span> <span
  m="796200">the</span> <span m="796360">cool</span> <span
  m="796750">idea</span> <span m="796892">is</span> <span m="797320">to</span>
  <span m="798070">think</span> <span m="798400">of</span> <span
  m="798580">A</span> <span m="798760">transpose</span> <span
  m="799450">A.</span> <span m="800700">So</span> <span m="801100">you're</span>
  <span m="801430">with</span> <span m="801640">me</span> <span
  m="801790">what</span> <span m="801970">we're</span> <span
  m="802120">for.</span></p><p><span m="803470">And</span> <span
  m="803770">now</span> <span m="804160">think</span> <span
  m="804430">about</span> <span m="804700">A</span> <span
  m="804850">transpose</span> <span m="805570">A.</span> <span
  m="806210">So</span> <span m="806890">if</span> <span m="807070">this</span>
  <span m="807310">is</span> <span m="807430">what</span> <span
  m="807610">I'm</span> <span m="808120">hoping</span> <span
  m="808510">for,</span> <span m="809740">what</span> <span
  m="810010">will</span> <span m="811810">A</span> <span
  m="811990">transpose</span> <span m="812650">A</span> <span
  m="812830">turn</span> <span m="813130">out</span> <span m="813280">to</span>
  <span m="813400">be?</span> <span m="816940">So</span> <span
  m="817210">big</span> <span m="817420">moment</span> <span
  m="818710">that's</span> <span m="818950">going</span> <span
  m="819120">to</span> <span m="819280">reveal</span> <span
  m="819940">what</span> <span m="820210">the</span> <span m="820330">v's</span>
  <span m="820810">are.</span> <span m="821770">So</span> <span
  m="822010">if</span> <span m="822160">I</span> <span m="822340">form</span>
  <span m="822820">A</span> <span m="823000">transpose</span> <span
  m="823690">A--</span> <span m="826000">so</span> <span m="826300">A</span>
  <span m="826480">transpose--</span> <span m="826915">so</span> <span
  m="827350">I</span> <span m="827560">got</span> <span m="827820">to</span>
  <span m="827950">transpose</span> <span m="828580">this</span> <span
  m="828750">guy.</span> <span m="830080">So</span> <span m="830320">A</span>
  <span m="830470">transpose</span> <span m="831350">is</span> <span
  m="831520">V</span> <span m="832750">sigma</span> <span
  m="833350">transpose</span> <span m="834310">U</span> <span
  m="834550">transpose,</span> <span m="835210">right?</span></p><p><span
  m="837390">And</span> <span m="837520">then</span> <span
  m="838330">comes</span> <span m="838720">A,</span> <span
  m="839530">which</span> <span m="839800">is</span> <span
  m="839980">this,</span> <span m="841260">U</span> <span
  m="841960">sigma</span> <span m="843070">V</span> <span
  m="843310">transpose.</span> <span m="844670">So</span> <span
  m="844770">why</span> <span m="844960">did</span> <span m="845170">I</span>
  <span m="845290">do</span> <span m="845500">that?</span> <span
  m="848040">Why</span> <span m="848400">is</span> <span m="848610">it</span>
  <span m="848700">that</span> <span m="848940">A</span> <span
  m="849120">transpose</span> <span m="849840">A</span> <span
  m="851130">is</span> <span m="851310">the</span> <span m="851550">cool</span>
  <span m="851940">thing</span> <span m="852240">to</span> <span
  m="852300">look</span> <span m="852600">at</span> <span m="852810">to</span>
  <span m="852960">make</span> <span m="853230">the</span> <span
  m="853350">problem</span> <span m="853770">simpler?</span> <span
  m="854550">Well,</span> <span m="855840">what</span> <span
  m="856050">becomes</span> <span m="856410">simpler</span> <span
  m="856920">in</span> <span m="857040">that</span> <span m="857370">line</span>
  <span m="858570">just</span> <span m="858810">written?</span> <span
  m="860370">U</span> <span m="860640">transpose</span> <span
  m="861330">U</span> <span m="861720">is</span> <span m="863360">the</span>
  <span m="863540">identity,</span> <span m="865210">because</span> <span
  m="865480">I'm</span> <span m="865660">looking</span> <span
  m="865960">for</span> <span m="866170">orthogonal,</span> <span
  m="867130">in</span> <span m="867250">fact</span> <span
  m="867610">orthonormal</span> <span m="868630">U's.</span></p><p><span
  m="869830">So</span> <span m="870100">that's</span> <span
  m="870430">the</span> <span m="870550">identity.</span> <span
  m="871240">So</span> <span m="871690">this</span> <span m="871960">is</span>
  <span m="872950">V</span> <span m="874150">sigma</span> <span
  m="874630">transpose</span> <span m="875380">sigma</span> <span
  m="877090">V</span> <span m="877390">transpose.</span> <span
  m="878980">And</span> <span m="879430">I'll</span> <span m="879880">put</span>
  <span m="880245">parentheses</span> <span m="880610">around</span> <span
  m="881270">that</span> <span m="881540">because</span> <span
  m="881840">that's</span> <span m="882080">a</span> <span
  m="882140">diagonal</span> <span m="882830">matrix.</span></p><p><span
  m="888800">What</span> <span m="888980">does</span> <span
  m="889100">that</span> <span m="889280">tell</span> <span
  m="889490">me?</span> <span m="890180">What</span> <span
  m="890300">does</span> <span m="890420">that</span> <span
  m="890570">tell</span> <span m="890840">all</span> <span m="891020">of</span>
  <span m="891140">us?</span> <span m="893440">A</span> <span
  m="893610">transpose</span> <span m="894270">A</span> <span
  m="894750">has</span> <span m="895020">this</span> <span
  m="895260">form.</span> <span m="895840">Now</span> <span
  m="895920">we've</span> <span m="896160">seen</span> <span
  m="896490">that</span> <span m="896700">form</span> <span
  m="897000">before.</span> <span m="897420">We</span> <span
  m="897600">know</span> <span m="897840">that</span> <span
  m="898020">this</span> <span m="898290">is</span> <span m="898500">a</span>
  <span m="899280">symmetric</span> <span m="899910">matrix,</span> <span
  m="900690">symmetric</span> <span m="901320">and</span> <span
  m="901440">even</span> <span m="901710">positive</span> <span
  m="902220">definite.</span></p><p><span m="903090">So</span> <span
  m="903270">what</span> <span m="903570">are</span> <span m="903630">the</span>
  <span m="903780">v's?</span> <span m="906160">The</span> <span
  m="906290">v's</span> <span m="906890">are</span> <span m="907160">the</span>
  <span m="908900">eigenvectors</span> <span m="909800">of</span> <span
  m="911330">A</span> <span m="911540">transpose</span> <span
  m="912200">A.</span> <span m="913860">This</span> <span m="914130">is</span>
  <span m="914310">the</span> <span m="914460">Q</span> <span
  m="915630">lambda</span> <span m="916260">Q</span> <span
  m="916590">transpose</span> <span m="917940">for</span> <span
  m="918150">that</span> <span m="918870">symmetric</span> <span
  m="919470">matrix.</span> <span m="920770">So</span> <span
  m="920880">we</span> <span m="921030">know</span> <span m="921390">the</span>
  <span m="921510">v's</span> <span m="922110">are</span> <span
  m="922320">the</span> <span m="922530">eigenvectors,</span> <span
  m="924360">v</span> <span m="924585">is</span> <span m="925260">the</span>
  <span m="925590">eigenvectors</span> <span m="927780">of</span> <span
  m="928050">A</span> <span m="928230">transpose</span> <span
  m="928980">A.</span> <span m="932040">I</span> <span m="932130">guess</span>
  <span m="932400">we're</span> <span m="932640">also</span> <span
  m="933000">going</span> <span m="933180">to</span> <span m="933270">get</span>
  <span m="933740">the</span> <span m="934770">singular</span> <span
  m="935280">values.</span></p><p><span m="935820">So</span> <span
  m="936090">the</span> <span m="936780">sigma</span> <span
  m="937200">transpose</span> <span m="937770">sigma,</span> <span
  m="938250">which</span> <span m="938520">will</span> <span
  m="938640">be</span> <span m="938820">the</span> <span m="939450">sigma</span>
  <span m="939960">squared</span> <span m="941760">are</span> <span
  m="941970">the</span> <span m="942180">eigenvalues</span> <span
  m="947200">of</span> <span m="947620">A</span> <span
  m="947800">transpose</span> <span m="948490">A.</span> <span
  m="951470">Good!</span> <span m="955010">Sort</span> <span
  m="955280">of</span> <span m="955430">by</span> <span
  m="955700">looking</span> <span m="956120">for</span> <span
  m="956300">the</span> <span m="956450">correct</span> <span
  m="956900">thing,</span> <span m="957320">U</span> <span
  m="957590">sigma</span> <span m="957980">V</span> <span
  m="958190">transpose</span> <span m="958910">and</span> <span
  m="959030">then</span> <span m="959240">just</span> <span
  m="959510">using</span> <span m="959990">the</span> <span m="960800">U</span>
  <span m="961040">transpose</span> <span m="961610">U</span> <span
  m="961790">equal</span> <span m="962120">identity,</span> <span
  m="962780">we</span> <span m="963530">got</span> <span m="963740">it</span>
  <span m="963860">back</span> <span m="964130">to</span> <span
  m="964220">something</span> <span m="964640">we</span> <span
  m="965150">perfectly</span> <span m="965720">recognize.</span> <span
  m="967800">A</span> <span m="967950">transpose</span> <span
  m="968610">A</span> <span m="968790">has</span> <span m="969000">that</span>
  <span m="969150">form.</span> <span m="969430">So</span> <span
  m="969600">now</span> <span m="969810">we</span> <span m="969960">know</span>
  <span m="970110">what</span> <span m="970290">the</span> <span
  m="970380">V's</span> <span m="970860">are.</span></p><p><span
  m="971400">And</span> <span m="971520">if</span> <span m="971670">I</span>
  <span m="971760">do</span> <span m="971940">it</span> <span
  m="972030">the</span> <span m="972180">other</span> <span
  m="972420">way,</span> <span m="975290">which,</span> <span
  m="975460">what's</span> <span m="975760">the</span> <span
  m="975880">other</span> <span m="976120">way?</span> <span
  m="977940">Instead</span> <span m="978360">of</span> <span m="978480">A</span>
  <span m="978630">transpose</span> <span m="979320">A,</span> <span
  m="979620">the</span> <span m="979770">other</span> <span
  m="979980">way</span> <span m="980220">is</span> <span m="980550">to</span>
  <span m="981690">look</span> <span m="981900">at</span> <span
  m="982050">A,</span> <span m="982230">A</span> <span
  m="982410">transpose.</span> <span m="983760">And</span> <span
  m="983910">if</span> <span m="984030">I</span> <span m="984120">write</span>
  <span m="984450">all</span> <span m="984630">that</span> <span
  m="984870">down,</span> <span m="986100">that</span> <span m="986520">a</span>
  <span m="986910">is</span> <span m="987120">the</span> <span
  m="987450">U</span> <span m="988020">sigma</span> <span m="988830">V</span>
  <span m="989130">transpose,</span> <span m="990120">and</span> <span
  m="990300">the</span> <span m="990465">A</span> <span
  m="990630">transpose</span> <span m="991400">is</span> <span
  m="991950">the</span> <span m="992205">V</span> <span m="992460">sigma</span>
  <span m="992910">transpose</span> <span m="993720">U</span> <span
  m="994020">transpose.</span></p><p><span m="995230">And</span> <span
  m="995370">again,</span> <span m="995940">this</span> <span
  m="996180">stuff</span> <span m="997350">goes</span> <span
  m="997800">away</span> <span m="998370">and</span> <span
  m="998490">leaves</span> <span m="998940">me</span> <span
  m="999030">with</span> <span m="999600">U</span> <span
  m="1002060">sigma,</span> <span m="1002690">sigma</span> <span
  m="1003050">transpose</span> <span m="1004550">U</span> <span
  m="1004820">transpose.</span> <span m="1005610">So</span> <span
  m="1005720">I</span> <span m="1005840">know</span> <span
  m="1005990">what</span> <span m="1006240">the</span> <span
  m="1006380">U's</span> <span m="1006800">are</span> <span
  m="1006980">too.</span> <span m="1007990">They</span> <span
  m="1008170">are</span> <span m="1008360">eigenvectors</span> <span
  m="1009530">of</span> <span m="1012920">A,</span> <span m="1013115">A</span>
  <span m="1013310">transpose.</span></p><p><span m="1020430">Isn't</span> <span
  m="1020700">that</span> <span m="1020850">a</span> <span
  m="1020940">beautiful</span> <span m="1022470">symmetry?</span> <span
  m="1023670">You</span> <span m="1023790">just--</span> <span
  m="1024650">A</span> <span m="1024930">transpose</span> <span
  m="1025245">A</span> <span m="1025560">and</span> <span m="1025700">A,</span>
  <span m="1025840">A</span> <span m="1025980">transpose</span> <span
  m="1026940">are</span> <span m="1027060">two</span> <span
  m="1027300">different</span> <span m="1027690">guys</span> <span
  m="1028170">now.</span> <span m="1028440">So</span> <span
  m="1029339">each</span> <span m="1029640">has</span> <span
  m="1029880">its</span> <span m="1030089">own</span> <span
  m="1030310">eigenvectors</span> <span m="1031200">and</span> <span
  m="1031319">we</span> <span m="1031440">use</span> <span
  m="1031800">both.</span> <span m="1033089">It's</span> <span
  m="1033329">just</span> <span m="1033690">right.</span> <span
  m="1035680">And</span> <span m="1036290">I</span> <span
  m="1036490">just</span> <span m="1036819">have</span> <span
  m="1037060">to</span> <span m="1037210">take</span> <span
  m="1037540">the</span> <span m="1037690">final</span> <span
  m="1038079">step,</span> <span m="1039190">and</span> <span
  m="1039369">we've</span> <span m="1040869">established</span> <span
  m="1041530">the</span> <span m="1041740">SVD.</span></p><p><span
  m="1043730">So</span> <span m="1043880">the</span> <span
  m="1043970">final</span> <span m="1044329">step</span> <span
  m="1044720">is</span> <span m="1044900">to</span> <span
  m="1044990">remember</span> <span m="1045440">what</span> <span
  m="1045589">I'm</span> <span m="1045740">going</span> <span
  m="1046130">for</span> <span m="1046369">here.</span> <span
  m="1049840">A</span> <span m="1050150">times</span> <span m="1050560">a</span>
  <span m="1050630">v</span> <span m="1050990">is</span> <span
  m="1051080">supposed</span> <span m="1051470">to</span> <span
  m="1051560">be</span> <span m="1051635">a</span> <span
  m="1051710">sigma</span> <span m="1052160">times</span> <span
  m="1052580">a</span> <span m="1052670">u.</span> <span m="1056210">See,</span>
  <span m="1056670">what</span> <span m="1056820">I</span> <span
  m="1056880">have</span> <span m="1057030">to</span> <span
  m="1057150">deal</span> <span m="1057360">with</span> <span
  m="1057700">now</span> <span m="1057960">is</span> <span m="1060060">I</span>
  <span m="1060120">haven't</span> <span m="1060420">quite</span> <span
  m="1060690">finished.</span> <span m="1061870">It's</span> <span
  m="1062370">just</span> <span m="1062580">perfect</span> <span
  m="1063120">as</span> <span m="1063270">far</span> <span m="1063510">as</span>
  <span m="1063630">it</span> <span m="1063750">goes,</span> <span
  m="1064020">but</span> <span m="1064200">it</span> <span
  m="1064320">hasn't</span> <span m="1064650">gone</span> <span
  m="1064920">to</span> <span m="1065070">the</span> <span
  m="1065250">end</span> <span m="1065460">yet</span> <span
  m="1066300">because</span> <span m="1068530">we</span> <span
  m="1068710">could</span> <span m="1068920">have</span> <span
  m="1069190">double</span> <span m="1069650">eigenvalues</span> <span
  m="1070450">and</span> <span m="1070570">triple</span> <span
  m="1070990">eigenvalues,</span> <span m="1071650">and</span> <span
  m="1071770">all</span> <span m="1071920">those</span> <span
  m="1073300">horrible</span> <span
  m="1073750">possibilities.</span></p><p><span m="1076590">And</span> <span
  m="1076740">if</span> <span m="1076860">I</span> <span m="1076980">have</span>
  <span m="1077130">triple</span> <span m="1077670">eigenvalues</span> <span
  m="1079140">or</span> <span m="1079410">double</span> <span
  m="1079860">eigenvalues,</span> <span m="1081400">then</span> <span
  m="1082140">what's</span> <span m="1082650">the</span> <span
  m="1082770">deal</span> <span m="1082980">with</span> <span
  m="1083290">eigenvectors</span> <span m="1084030">if</span> <span
  m="1084210">I</span> <span m="1084420">have</span> <span
  m="1084570">double</span> <span m="1085020">eigenvalues?</span> <span
  m="1085750">Suppose</span> <span m="1086220">a</span> <span
  m="1086280">matrix</span> <span m="1087390">has</span> <span
  m="1089460">a</span> <span m="1089520">symmetric</span> <span
  m="1090090">matrix,</span> <span m="1090630">has</span> <span
  m="1090840">a</span> <span m="1090930">double</span> <span
  m="1091320">eigenvalue.</span> <span m="1092770">Let</span> <span
  m="1092790">me</span> <span m="1092970">just</span> <span
  m="1093630">take</span> <span m="1093900">an</span> <span
  m="1094020">example.</span></p><p><span m="1094610">So</span> <span
  m="1094800">symmetric</span> <span m="1095430">matrix</span> <span
  m="1096000">like</span> <span m="1097410">say,</span> <span
  m="1097920">1,</span> <span m="1098620">1,</span> <span m="1099520">5,</span>
  <span m="1100020">make</span> <span m="1100260">it.</span> <span
  m="1100950">Why</span> <span m="1101160">not?</span> <span
  m="1103550">What's</span> <span m="1103940">the</span> <span
  m="1104060">deal</span> <span m="1104330">with</span> <span
  m="1104540">eigenvectors</span> <span m="1105620">for</span> <span
  m="1105920">that</span> <span m="1106610">matrix</span> <span
  m="1107120">1,</span> <span m="1107520">1,</span> <span m="1107760">5?</span>
  <span m="1109510">So</span> <span m="1109780">5</span> <span
  m="1110290">has</span> <span m="1110440">got</span> <span
  m="1110710">an</span> <span m="1110870">eigenvector.</span> <span
  m="1111610">You</span> <span m="1111820">can</span> <span
  m="1112000">see</span> <span m="1112300">what</span> <span
  m="1112510">it</span> <span m="1112660">is,</span> <span m="1113800">0,</span>
  <span m="1114130">0,</span> <span m="1114400">1.</span></p><p><span
  m="1115720">What</span> <span m="1115900">about</span> <span
  m="1116140">eigenvectors</span> <span m="1117190">that</span> <span
  m="1117370">go</span> <span m="1117640">with</span> <span
  m="1118270">lambda</span> <span m="1118660">equal</span> <span
  m="1118960">1</span> <span m="1119410">for</span> <span
  m="1119620">that</span> <span m="1119800">matrix?</span> <span
  m="1122440">What's</span> <span m="1122740">up?</span> <span
  m="1123230">What</span> <span m="1124420">would</span> <span
  m="1124600">be</span> <span m="1124750">eigenvectors</span> <span
  m="1125560">for</span> <span m="1125750">a</span> <span
  m="1125770">lambda</span> <span m="1126220">equal</span> <span
  m="1126580">1?</span> <span m="1128530">Unfortunately,</span> <span
  m="1129550">there</span> <span m="1129670">was</span> <span
  m="1129850">a</span> <span m="1129910">whole</span> <span
  m="1130120">plane</span> <span m="1130540">of</span> <span
  m="1130660">them.</span> <span m="1132040">Any</span> <span
  m="1132370">vector</span> <span m="1134320">of</span> <span
  m="1134530">the</span> <span m="1134650">form</span> <span
  m="1135700">x,</span> <span m="1136000">y,</span> <span
  m="1136390">0.</span></p><p><span m="1136840">Any</span> <span
  m="1138040">vector</span> <span m="1138460">in</span> <span
  m="1138550">the</span> <span m="1138670">x,</span> <span m="1138940">y</span>
  <span m="1139180">plane</span> <span m="1139600">would</span> <span
  m="1139840">produce</span> <span m="1140830">x,</span> <span
  m="1141100">y,</span> <span m="1141340">0.</span> <span m="1144220">So</span>
  <span m="1144475">I</span> <span m="1144560">have</span> <span
  m="1144645">a</span> <span m="1144730">whole</span> <span
  m="1144970">plane</span> <span m="1145420">of</span> <span
  m="1145570">eigenvectors.</span> <span m="1146440">And</span> <span
  m="1146560">I've</span> <span m="1146680">got</span> <span
  m="1146830">to</span> <span m="1146920">pick</span> <span
  m="1147280">two</span> <span m="1147790">that</span> <span
  m="1148060">are</span> <span m="1148810">orthogonal,</span> <span
  m="1150010">which</span> <span m="1150220">I</span> <span
  m="1150340">can</span> <span m="1150550">do.</span> <span
  m="1151420">And</span> <span m="1151540">then</span> <span
  m="1151750">they</span> <span m="1151930">have</span> <span
  m="1152110">to</span> <span m="1152230">be--</span> <span
  m="1152940">in</span> <span m="1153520">the</span> <span
  m="1153690">SVD</span> <span m="1154610">those</span> <span
  m="1154810">two</span> <span m="1155020">orthogonal</span> <span
  m="1155560">guys</span> <span m="1155860">have</span> <span
  m="1155980">to</span> <span m="1156070">go</span> <span m="1156310">to</span>
  <span m="1156460">two</span> <span m="1156760">orthogonal</span> <span
  m="1157390">guys.</span></p><p><span m="1158420">In</span> <span
  m="1158440">other</span> <span m="1158620">words,</span> <span
  m="1159860">it's</span> <span m="1159940">a</span> <span
  m="1160000">little</span> <span m="1160330">bit</span> <span
  m="1160570">of</span> <span m="1161650">detail</span> <span
  m="1162520">here,</span> <span m="1163732">a</span> <span
  m="1164160">little</span> <span m="1164540">getting</span> <span
  m="1165170">into</span> <span m="1165530">this</span> <span
  m="1166670">exactly</span> <span m="1167480">what</span> <span
  m="1167890">is--</span> <span m="1168710">well,</span> <span
  m="1170000">actually,</span> <span m="1174960">let</span> <span
  m="1175080">me</span> <span m="1176280">tell</span> <span
  m="1176550">you</span> <span m="1176640">the</span> <span
  m="1176740">steps.</span> <span m="1178950">So</span> <span
  m="1179160">I</span> <span m="1179280">use</span> <span
  m="1179580">this</span> <span m="1181350">to</span> <span
  m="1181530">conclude</span> <span m="1182190">that</span> <span
  m="1183030">the</span> <span m="1183150">V's</span> <span
  m="1183720">the</span> <span m="1183810">singular</span> <span
  m="1184290">vectors</span> <span m="1184710">should</span> <span
  m="1184950">be</span> <span m="1185130">eigenvalues.</span> <span
  m="1186270">I</span> <span m="1186420">concluded</span> <span
  m="1187050">those</span> <span m="1187350">guys</span> <span
  m="1187800">from</span> <span m="1188010">this</span> <span
  m="1188190">step.</span> <span m="1189240">Now</span> <span
  m="1189450">I'm</span> <span m="1189570">not</span> <span
  m="1189870">going</span> <span m="1189990">to</span> <span
  m="1190170">use</span> <span m="1190530">this</span> <span
  m="1190710">step</span> <span m="1191070">so</span> <span
  m="1191280">much.</span> <span m="1192240">Of</span> <span
  m="1192300">course,</span> <span m="1192630">it's</span> <span
  m="1192990">in</span> <span m="1193080">the</span> <span
  m="1193170">back</span> <span m="1193410">of</span> <span
  m="1193470">my</span> <span m="1193650">mind</span> <span
  m="1194200">but</span> <span m="1194310">I'm</span> <span
  m="1194460">not</span> <span m="1195210">using</span> <span
  m="1195630">it.</span></p><p><span m="1197010">I'm</span> <span
  m="1197190">going</span> <span m="1197290">to</span> <span
  m="1197430">get</span> <span m="1197610">the</span> <span
  m="1197730">u's</span> <span m="1198270">from</span> <span
  m="1199170">here.</span> <span m="1200820">So</span> <span
  m="1201150">u1</span> <span m="1203040">is</span> <span m="1204060">A</span>
  <span m="1205560">v1</span> <span m="1206640">over</span> <span
  m="1207480">sigma</span> <span m="1207870">1</span> <span
  m="1210440">ur</span> <span m="1213200">is</span> <span m="1213530">Avr</span>
  <span m="1215180">over</span> <span m="1215600">sigma</span> <span
  m="1216020">r.</span> <span m="1217190">You</span> <span
  m="1217340">see</span> <span m="1217520">what</span> <span
  m="1217700">I'm</span> <span m="1218180">doing</span> <span
  m="1218540">here?</span> <span m="1220330">I'm</span> <span
  m="1220440">picking</span> <span m="1222240">in</span> <span
  m="1223090">a</span> <span m="1223170">possible</span> <span
  m="1224940">plane</span> <span m="1225600">of</span> <span
  m="1225990">things</span> <span m="1226620">the</span> <span
  m="1226740">one</span> <span m="1226980">I</span> <span
  m="1227070">want,</span> <span m="1228540">the</span> <span
  m="1228660">u's</span> <span m="1229050">I</span> <span
  m="1229200">want.</span></p><p><span m="1229490">So</span> <span
  m="1229650">I've</span> <span m="1229770">chosen</span> <span
  m="1230250">the</span> <span m="1230370">v's.</span> <span
  m="1231510">I've</span> <span m="1231630">chosen</span> <span
  m="1232110">the</span> <span m="1232210">sigmas.</span> <span
  m="1233640">They</span> <span m="1233910">were</span> <span
  m="1235650">fixed</span> <span m="1236160">for</span> <span
  m="1236400">A</span> <span m="1236580">transpose</span> <span
  m="1237270">A.</span> <span m="1237750">The</span> <span
  m="1238080">eigenvectors</span> <span m="1239070">are</span> <span
  m="1239160">v's,</span> <span m="1239790">the</span> <span
  m="1240270">things--</span> <span m="1240780">the</span> <span
  m="1241290">eigenvalues</span> <span m="1242100">are</span> <span
  m="1242220">sigma</span> <span m="1242580">squared.</span> <span
  m="1244770">And</span> <span m="1244920">now</span> <span
  m="1245610">then</span> <span m="1245970">this</span> <span
  m="1246240">is</span> <span m="1246390">the</span> <span m="1246540">u</span>
  <span m="1246750">I</span> <span m="1246960">want.</span></p><p><span
  m="1249460">Are</span> <span m="1249570">you</span> <span
  m="1249660">with</span> <span m="1249840">me?</span> <span
  m="1250980">So</span> <span m="1253530">I</span> <span m="1254010">want</span>
  <span m="1254220">to</span> <span m="1254310">get</span> <span
  m="1254570">these</span> <span m="1255300">u's</span> <span
  m="1255810">correct.</span> <span m="1256830">And</span> <span
  m="1256980">if</span> <span m="1257130">I</span> <span m="1257250">have</span>
  <span m="1257460">a</span> <span m="1257520">whole</span> <span
  m="1257760">plane</span> <span m="1258180">of</span> <span
  m="1258240">possibilities,</span> <span m="1259150">I</span> <span
  m="1259250">got</span> <span m="1259350">to</span> <span
  m="1259450">pick</span> <span m="1259560">the</span> <span
  m="1259680">right</span> <span m="1259950">one.</span> <span
  m="1261890">And</span> <span m="1262000">now</span> <span
  m="1262420">finally,</span> <span m="1262870">I</span> <span
  m="1262930">have</span> <span m="1263050">to</span> <span
  m="1263170">show</span> <span m="1263440">that</span> <span
  m="1263650">it's</span> <span m="1263830">the</span> <span
  m="1263920">right</span> <span m="1264160">one.</span> <span
  m="1265600">So</span> <span m="1265650">what</span> <span
  m="1265950">is</span> <span m="1266100">left</span> <span
  m="1266460">to</span> <span m="1266640">show?</span></p><p><span
  m="1268970">I</span> <span m="1269180">should</span> <span
  m="1269450">show</span> <span m="1269870">that</span> <span
  m="1270110">these</span> <span m="1270470">u's</span> <span
  m="1270980">are</span> <span m="1271600">eigenvectors</span> <span
  m="1272360">of</span> <span m="1272840">A,</span> <span m="1273035">A</span>
  <span m="1273230">transpose.</span> <span m="1276850">And</span> <span
  m="1277450">I</span> <span m="1277630">should</span> <span
  m="1278050">show</span> <span m="1278980">that</span> <span
  m="1279370">they're</span> <span m="1279740">orthogonal.</span> <span
  m="1281050">That's</span> <span m="1281440">the</span> <span
  m="1281560">key.</span> <span m="1282850">I</span> <span
  m="1283330">would</span> <span m="1283510">like</span> <span
  m="1283780">to</span> <span m="1283900">show</span> <span
  m="1284350">that</span> <span m="1284590">these</span> <span
  m="1284950">are</span> <span m="1285130">orthogonal.</span> <span
  m="1287320">And</span> <span m="1287600">that's</span> <span
  m="1287840">what</span> <span m="1288020">goes</span> <span
  m="1288350">in</span> <span m="1288440">this</span> <span
  m="1288650">picture.</span></p><p><span m="1290420">The</span> <span
  m="1290590">v's--</span> <span m="1291190">I've</span> <span
  m="1291370">got</span> <span m="1291620">orthogonal,</span> <span
  m="1292270">guys,</span> <span m="1292690">because</span> <span
  m="1293380">they're</span> <span m="1293660">the</span> <span
  m="1293830">eigenvectors</span> <span m="1294640">of</span> <span
  m="1294760">a</span> <span m="1294830">symmetric</span> <span
  m="1295390">matrix.</span> <span m="1296410">Pick</span> <span
  m="1296660">them</span> <span m="1296800">orthogonal.</span> <span
  m="1297850">But</span> <span m="1298060">now</span> <span
  m="1298570">I'm</span> <span m="1298720">multiplying</span> <span
  m="1299260">by</span> <span m="1299470">A,</span> <span m="1300190">so</span>
  <span m="1300340">I'm</span> <span m="1300490">getting</span> <span
  m="1300850">the</span> <span m="1301020">u</span> <span
  m="1301470">which</span> <span m="1301720">is</span> <span
  m="1301930">Av</span> <span m="1302710">over</span> <span
  m="1303040">sigma</span> <span m="1303580">for</span> <span
  m="1303790">the</span> <span m="1304840">basis</span> <span
  m="1305320">vectors.</span> <span m="1306370">And</span> <span
  m="1306520">I</span> <span m="1306580">have</span> <span m="1306790">to</span>
  <span m="1306940">show</span> <span m="1307300">they're</span> <span
  m="1307600">orthogonal.</span></p><p><span m="1308290">So</span> <span
  m="1308770">this</span> <span m="1309070">is</span> <span
  m="1309220">like</span> <span m="1309550">the</span> <span
  m="1310060">final</span> <span m="1310450">moment.</span> <span
  m="1312490">Does</span> <span m="1312820">everything</span> <span
  m="1313480">come</span> <span m="1313780">together</span> <span
  m="1314200">right?</span> <span m="1317920">If</span> <span
  m="1318100">I've</span> <span m="1318280">picked</span> <span
  m="1318580">the</span> <span m="1318700">v's</span> <span
  m="1319840">as</span> <span m="1320020">the</span> <span
  m="1320170">eigenvectors</span> <span m="1320980">of</span> <span
  m="1321100">A</span> <span m="1321280">transpose</span> <span
  m="1322000">A,</span> <span m="1322480">and</span> <span
  m="1323890">then</span> <span m="1324160">I</span> <span
  m="1324730">take</span> <span m="1325240">these</span> <span
  m="1325660">for</span> <span m="1325840">the</span> <span
  m="1325960">u,</span> <span m="1327280">are</span> <span
  m="1327520">they</span> <span m="1327790">orthogonal?</span></p><p><span
  m="1329420">So</span> <span m="1329660">I</span> <span
  m="1330140">would</span> <span m="1330320">like</span> <span
  m="1330530">to</span> <span m="1330650">think</span> <span
  m="1330920">that</span> <span m="1331040">we</span> <span
  m="1331220">can</span> <span m="1331880">check</span> <span
  m="1332180">that</span> <span m="1332480">fact</span> <span
  m="1332900">and</span> <span m="1333540">that</span> <span
  m="1333770">it</span> <span m="1333890">will</span> <span
  m="1334070">come</span> <span m="1334340">out.</span> <span
  m="1335550">Could</span> <span m="1335790">you</span> <span
  m="1335900">just</span> <span m="1336140">help</span> <span
  m="1336350">me</span> <span m="1336500">through</span> <span
  m="1336740">this</span> <span m="1336980">one?</span> <span
  m="1338570">I'll</span> <span m="1338660">never</span> <span
  m="1339050">ask</span> <span m="1339410">for</span> <span
  m="1339590">anything</span> <span m="1340150">again,</span> <span
  m="1340610">just</span> <span m="1342260">get</span> <span
  m="1342440">the</span> <span m="1342760">SVD</span> <span
  m="1343240">one.</span> <span m="1351560">So</span> <span m="1351860">I</span>
  <span m="1352010">would</span> <span m="1352190">like</span> <span
  m="1352460">to</span> <span m="1352580">show</span> <span
  m="1353030">that</span> <span m="1356440">u1--</span> <span
  m="1357580">so</span> <span m="1357820">let</span> <span m="1357940">me</span>
  <span m="1358690">put</span> <span m="1358870">up</span> <span
  m="1359020">what</span> <span m="1359140">I'm</span> <span
  m="1359320">doing.</span> <span m="1360250">I'm</span> <span
  m="1360460">trying</span> <span m="1360730">to</span> <span
  m="1360850">show</span> <span m="1361300">that</span> <span
  m="1361510">u1</span> <span m="1363460">transpose</span> <span
  m="1364360">u2</span> <span m="1364960">is</span> <span m="1365080">0.</span>
  <span m="1367610">They're</span> <span m="1367790">orthogonal.</span> <span
  m="1369680">So</span> <span m="1369890">u1</span> <span m="1370550">is</span>
  <span m="1372050">A</span> <span m="1372950">v1</span> <span
  m="1375500">over</span> <span m="1375800">sigma</span> <span
  m="1376250">1.</span> <span m="1377890">That's</span> <span
  m="1378200">transpose.</span> <span m="1379040">That's</span> <span
  m="1379310">u1.</span></p><p><span m="1380740">And</span> <span
  m="1380960">u2</span> <span m="1381500">is</span> <span m="1381680">A</span>
  <span m="1382700">v2</span> <span m="1383780">over</span> <span
  m="1384230">sigma</span> <span m="1384650">2.</span> <span
  m="1386000">And</span> <span m="1386150">I</span> <span
  m="1386300">want</span> <span m="1386480">to</span> <span
  m="1386570">get</span> <span m="1386790">0.</span> <span
  m="1388280">The</span> <span m="1388370">whole</span> <span
  m="1390020">conversation</span> <span m="1391740">is</span> <span
  m="1391970">ending</span> <span m="1392300">right</span> <span
  m="1392540">here.</span> <span m="1393560">Why</span> <span
  m="1394040">is</span> <span m="1394310">that</span> <span
  m="1394610">thing</span> <span m="1395090">0?</span></p><p><span
  m="1396866">The</span> <span m="1397290">v's</span> <span
  m="1397840">are</span> <span m="1398000">orthogonal.</span> <span
  m="1399370">We</span> <span m="1399520">know</span> <span
  m="1399700">the</span> <span m="1399820">v's</span> <span
  m="1400035">are</span> <span m="1400250">orthogonal.</span> <span
  m="1401850">They're</span> <span m="1402110">orthogonal</span> <span
  m="1402900">eigenvectors</span> <span m="1403810">of</span> <span
  m="1403990">A</span> <span m="1404200">transpose</span> <span
  m="1404530">A.</span> <span m="1405070">Let</span> <span m="1405190">me</span>
  <span m="1405610">repeat</span> <span m="1406030">that.</span> <span
  m="1406580">The</span> <span m="1406935">v's</span> <span
  m="1407290">are</span> <span m="1408190">orthogonal</span> <span
  m="1410270">eigenvectors</span> <span m="1412570">of</span> <span
  m="1413320">A</span> <span m="1413500">transpose</span> <span
  m="1414210">A,</span> <span m="1416970">which</span> <span
  m="1417240">I</span> <span m="1417360">know</span> <span m="1418920">we</span>
  <span m="1419040">can</span> <span m="1419220">find</span> <span
  m="1419520">them.</span></p><p><span m="1420150">Then</span> <span
  m="1420480">I</span> <span m="1420600">chose</span> <span
  m="1421080">the</span> <span m="1421230">u's</span> <span
  m="1421740">to</span> <span m="1421860">be</span> <span
  m="1422070">this.</span> <span m="1422520">And</span> <span
  m="1422790">I</span> <span m="1422910">want</span> <span m="1423120">to</span>
  <span m="1423210">get</span> <span m="1423390">the</span> <span
  m="1423540">answer</span> <span m="1423920">0.</span> <span
  m="1424920">Are</span> <span m="1425010">you</span> <span
  m="1425100">ready</span> <span m="1425400">to</span> <span
  m="1425550">do</span> <span m="1425760">it?</span> <span m="1428470">We</span>
  <span m="1428740">want</span> <span m="1428980">to</span> <span
  m="1430750">compute</span> <span m="1431200">that</span> <span
  m="1432310">and</span> <span m="1432460">get</span> <span
  m="1432700">0.</span> <span m="1433210">So</span> <span
  m="1433420">what</span> <span m="1433570">do</span> <span m="1433690">I</span>
  <span m="1433810">get?</span></p><p><span m="1436580">We</span> <span
  m="1436780">just</span> <span m="1436990">have</span> <span
  m="1437170">to</span> <span m="1437290">do</span> <span m="1437530">it.</span>
  <span m="1437680">So</span> <span m="1438040">I</span> <span
  m="1438190">can</span> <span m="1438400">see</span> <span
  m="1438700">that</span> <span m="1438910">the</span> <span
  m="1439030">denominator</span> <span m="1440620">is</span> <span
  m="1440950">that.</span> <span m="1442180">So</span> <span
  m="1442420">is</span> <span m="1442560">it</span> <span m="1442720">v1</span>
  <span m="1443320">transpose</span> <span m="1445570">A</span> <span
  m="1445960">transpose</span> <span m="1447800">times</span> <span
  m="1448270">A</span> <span m="1448720">v2.</span> <span m="1454870">And</span>
  <span m="1455200">I'm</span> <span m="1455320">hoping</span> <span
  m="1455590">to</span> <span m="1455680">get</span> <span m="1455890">0.</span>
  <span m="1457690">Do</span> <span m="1457960">I</span> <span
  m="1458110">get</span> <span m="1458410">0</span> <span
  m="1458790">here?</span></p><p><span m="1461060">You</span> <span
  m="1461660">hope</span> <span m="1461960">so.</span> <span
  m="1463240">v1</span> <span m="1463820">is</span> <span
  m="1463970">orthogonal</span> <span m="1464570">v2.</span> <span
  m="1465060">But</span> <span m="1465320">I've</span> <span
  m="1465500">got</span> <span m="1465740">A</span> <span
  m="1465890">transpose</span> <span m="1466490">A</span> <span
  m="1467090">stuck</span> <span m="1467450">in</span> <span
  m="1467570">the</span> <span m="1467660">middle</span> <span
  m="1467960">there.</span> <span m="1468900">So</span> <span
  m="1470470">what</span> <span m="1470660">happens</span> <span
  m="1471110">here?</span> <span m="1473210">How</span> <span
  m="1473360">do</span> <span m="1473510">I</span> <span m="1473600">look</span>
  <span m="1473840">at</span> <span m="1473960">that?</span></p><p><span
  m="1477530">v2</span> <span m="1478670">is</span> <span m="1479100">an</span>
  <span m="1480620">eigenvector</span> <span m="1481760">of</span> <span
  m="1483140">A</span> <span m="1483380">transpose</span> <span
  m="1484070">A.</span> <span m="1484610">Terrific!</span> <span
  m="1487630">So</span> <span m="1487850">this</span> <span
  m="1488060">is</span> <span m="1488210">v1</span> <span
  m="1488790">transpose.</span> <span m="1490670">And</span> <span
  m="1490850">this</span> <span m="1491210">is</span> <span
  m="1492320">the</span> <span m="1492440">matrix</span> <span
  m="1493010">times</span> <span m="1493310">v2.</span></p><p><span
  m="1494030">So</span> <span m="1494270">that's</span> <span
  m="1494570">sigma</span> <span m="1495170">2</span> <span
  m="1495890">transpose</span> <span m="1496580">v2,</span> <span
  m="1498320">isn't</span> <span m="1498530">it?</span> <span
  m="1500420">It's</span> <span m="1500630">the</span> <span
  m="1500780">eigenvector</span> <span m="1502460">with</span> <span
  m="1502740">eigenvalue</span> <span m="1503600">sigma</span> <span
  m="1504050">2</span> <span m="1504620">squared</span> <span
  m="1506510">times</span> <span m="1506930">v2.</span> <span
  m="1507550">Yeah,</span> <span m="1508250">divided</span> <span
  m="1508790">by</span> <span m="1509090">sigma</span> <span
  m="1509480">1</span> <span m="1509930">sigma</span> <span
  m="1510360">2.</span> <span m="1516410">So</span> <span m="1516590">the</span>
  <span m="1516770">A's</span> <span m="1517100">are</span> <span
  m="1517220">out</span> <span m="1517430">of</span> <span
  m="1517490">there</span> <span m="1517700">now.</span></p><p><span
  m="1521310">So</span> <span m="1521520">I've</span> <span
  m="1521640">just</span> <span m="1521880">got</span> <span
  m="1522190">these</span> <span m="1522450">numbers,</span> <span
  m="1524020">sigma</span> <span m="1524520">2</span> <span
  m="1524760">squared.</span> <span m="1525310">So</span> <span
  m="1525360">that</span> <span m="1525540">would</span> <span
  m="1525690">be</span> <span m="1525870">sigma</span> <span
  m="1526290">2</span> <span m="1527310">over</span> <span
  m="1527610">sigma</span> <span m="1528060">1--</span> <span
  m="1528900">I've</span> <span m="1529050">accounted</span> <span
  m="1529530">for</span> <span m="1529710">these</span> <span
  m="1530460">numbers</span> <span m="1530970">here--</span> <span
  m="1531240">times</span> <span m="1532090">v1</span> <span
  m="1532950">transpose</span> <span m="1533790">v2.</span> <span
  m="1534660">And</span> <span m="1535050">now</span> <span
  m="1538410">what's</span> <span m="1538770">up?</span> <span
  m="1540810">They're</span> <span m="1541350">orthonormal.</span> <span
  m="1543030">We</span> <span m="1543190">got</span> <span
  m="1543420">it.</span></p><p><span m="1544200">That's</span> <span
  m="1544520">0.</span> <span m="1545610">That</span> <span
  m="1545850">is</span> <span m="1545970">0</span> <span
  m="1546390">there,</span> <span m="1547700">yeah.</span> <span
  m="1549020">So</span> <span m="1549270">not</span> <span
  m="1549600">only</span> <span m="1549960">are</span> <span
  m="1550230">the</span> <span m="1550950">v's</span> <span
  m="1551670">orthogonal</span> <span m="1552270">to</span> <span
  m="1552450">each</span> <span m="1552690">other,</span> <span
  m="1553710">but</span> <span m="1553920">because</span> <span
  m="1554460">they're</span> <span m="1554730">eigenvectors</span> <span
  m="1555630">of</span> <span m="1555780">A</span> <span
  m="1555960">transpose</span> <span m="1556680">A,</span> <span
  m="1557310">when</span> <span m="1557490">I</span> <span m="1557640">do</span>
  <span m="1557940">this,</span> <span m="1558330">I</span> <span
  m="1558480">discover</span> <span m="1559110">that</span> <span
  m="1559260">the</span> <span m="1559660">Av's</span> <span
  m="1560460">are</span> <span m="1560790">orthogonal</span> <span
  m="1561300">to</span> <span m="1561810">each</span> <span
  m="1562020">other</span> <span m="1562290">over</span> <span
  m="1562620">in</span> <span m="1563820">the</span> <span
  m="1564630">column</span> <span m="1565050">space.</span> <span
  m="1566460">So</span> <span m="1566690">orthogonal</span> <span
  m="1567260">v's</span> <span m="1567740">in</span> <span
  m="1567860">the</span> <span m="1568370">row</span> <span
  m="1568610">space,</span> <span m="1569630">orthogonal</span> <span
  m="1570320">Av's</span> <span m="1571010">over</span> <span
  m="1571250">in</span> <span m="1571460">column</span> <span
  m="1571790">space.</span> <span m="1573110">That</span> <span
  m="1573350">was</span> <span m="1573530">discovered</span> <span
  m="1576020">late--</span> <span m="1576410">much</span> <span
  m="1576890">long</span> <span m="1577220">after</span> <span
  m="1577550">eigenvectors.</span></p><p><span m="1579260">And</span> <span
  m="1579530">it's</span> <span m="1579770">a</span> <span
  m="1580340">interesting</span> <span m="1580940">history.</span> <span
  m="1582980">And</span> <span m="1583340">it</span> <span
  m="1584120">just</span> <span m="1584360">comes</span> <span
  m="1584660">out</span> <span m="1585080">right.</span> <span
  m="1586430">And</span> <span m="1586910">then</span> <span
  m="1587300">it</span> <span m="1587390">was</span> <span
  m="1587600">discovered,</span> <span m="1588200">but</span> <span
  m="1588410">not</span> <span m="1588920">much</span> <span
  m="1589280">used,</span> <span m="1589790">for</span> <span
  m="1590680">oh,</span> <span m="1590930">100</span> <span
  m="1591320">years</span> <span m="1591650">probably.</span> <span
  m="1592670">And</span> <span m="1592820">then</span> <span
  m="1596300">people</span> <span m="1596690">saw</span> <span
  m="1597050">that</span> <span m="1597230">it</span> <span
  m="1597320">was</span> <span m="1597530">exactly</span> <span
  m="1598100">the</span> <span m="1598220">right</span> <span
  m="1598490">thing,</span> <span m="1598880">and</span> <span
  m="1599030">data</span> <span m="1599420">matrices</span> <span
  m="1600140">became</span> <span m="1600560">important,</span> <span
  m="1601100">which</span> <span m="1601370">are</span> <span
  m="1601460">large</span> <span m="1604070">rectangular</span> <span
  m="1604820">matrices.</span> <span m="1607060">And</span> <span
  m="1607360">we</span> <span m="1607570">have</span> <span
  m="1607750">not--</span> <span m="1608530">oh,</span> <span
  m="1608740">I</span> <span m="1608830">better</span> <span
  m="1609100">say</span> <span m="1609310">a</span> <span
  m="1609370">word,</span> <span m="1609730">just</span> <span
  m="1610060">a</span> <span m="1610120">word</span> <span
  m="1610480">here</span> <span m="1611260">about</span> <span
  m="1611620">actually</span> <span m="1612040">computing</span> <span
  m="1613690">the</span> <span m="1614140">v's</span> <span
  m="1614830">and</span> <span m="1615230">sigmas</span> <span
  m="1615910">and</span> <span m="1616090">the</span> <span
  m="1616240">u's</span></p><p><span m="1618310">So</span> <span
  m="1618820">how</span> <span m="1619150">would</span> <span
  m="1619330">you</span> <span m="1619480">actually</span> <span
  m="1619930">find</span> <span m="1620350">them?</span> <span
  m="1622030">What</span> <span m="1622360">I</span> <span
  m="1622480">most</span> <span m="1622900">want</span> <span
  m="1623110">to</span> <span m="1623200">say</span> <span m="1623560">is</span>
  <span m="1623800">you</span> <span m="1623980">would</span> <span
  m="1624220">not</span> <span m="1625870">go</span> <span
  m="1627070">this</span> <span m="1627550">A</span> <span
  m="1627730">transpose</span> <span m="1628390">A</span> <span
  m="1628600">route.</span> <span m="1634530">Why</span> <span
  m="1635000">is</span> <span m="1635210">it</span> <span
  m="1635330">like</span> <span m="1635600">it?</span> <span
  m="1635750">Is</span> <span m="1636020">that</span> <span m="1636890">a</span>
  <span m="1636950">big</span> <span m="1637220">mistake?</span></p><p><span
  m="1638300">If</span> <span m="1638450">you</span> <span
  m="1638540">have</span> <span m="1638750">a</span> <span
  m="1638810">matrix</span> <span m="1639350">A,</span> <span
  m="1640190">say</span> <span m="1640630">5,000</span> <span
  m="1641450">by</span> <span m="1641630">10,000,</span> <span
  m="1644180">why</span> <span m="1644540">is</span> <span m="1644680">it</span>
  <span m="1644810">a</span> <span m="1644840">mistake</span> <span
  m="1645470">to</span> <span m="1646310">actually</span> <span
  m="1646820">use</span> <span m="1647480">A</span> <span
  m="1647660">transpose</span> <span m="1648420">A</span> <span
  m="1648650">in</span> <span m="1648860">the</span> <span
  m="1648980">computation?</span> <span m="1649790">We</span> <span
  m="1649940">used</span> <span m="1650300">it</span> <span
  m="1651380">heavily</span> <span m="1651830">in</span> <span
  m="1651950">the</span> <span m="1652040">proof.</span> <span
  m="1653840">And</span> <span m="1654170">we</span> <span
  m="1654380">could</span> <span m="1654950">find</span> <span
  m="1655250">another</span> <span m="1655580">proof</span> <span
  m="1656030">that</span> <span m="1656210">wouldn't</span> <span
  m="1656570">use</span> <span m="1656870">it</span> <span m="1656990">so</span>
  <span m="1657170">much.</span> <span m="1657530">But</span> <span
  m="1659840">why</span> <span m="1660080">would</span> <span
  m="1660260">I</span> <span m="1660380">not</span> <span
  m="1660680">multiply</span> <span m="1661340">these</span> <span
  m="1662420">two</span> <span m="1662750">together?</span> <span
  m="1665310">It's</span> <span m="1665540">very</span> <span
  m="1665960">big,</span> <span m="1666410">very</span> <span
  m="1666950">expensive.</span></p><p><span m="1668320">It</span> <span
  m="1669800">adds</span> <span m="1670130">in</span> <span m="1670310">a</span>
  <span m="1670370">whole</span> <span m="1670730">lot</span> <span
  m="1671120">of</span> <span m="1673820">round</span> <span
  m="1674240">off--</span> <span m="1675450">you</span> <span
  m="1675600">have</span> <span m="1675770">a</span> <span
  m="1675860">matrix</span> <span m="1676650">that's</span> <span
  m="1676820">now--</span> <span m="1677780">its</span> <span
  m="1678620">vulnerability</span> <span m="1679610">to</span> <span
  m="1679790">round</span> <span m="1680210">off</span> <span
  m="1680420">errors</span> <span m="1680930">is</span> <span
  m="1681140">squared--</span> <span m="1682580">that's</span> <span
  m="1682790">called</span> <span m="1683090">its</span> <span
  m="1683300">condition</span> <span m="1683870">number--</span> <span
  m="1684260">gets</span> <span m="1684530">squared.</span> <span
  m="1685220">And</span> <span m="1685340">you</span> <span
  m="1685460">just</span> <span m="1685820">don't</span> <span
  m="1686180">go</span> <span m="1686420">there.</span> <span
  m="1687560">So</span> <span m="1688040">the</span> <span
  m="1689180">actual</span> <span m="1689840">computational</span> <span
  m="1690710">methods</span> <span m="1691220">are</span> <span
  m="1691580">quite</span> <span m="1691880">different.</span> <span
  m="1692330">And</span> <span m="1692480">we'll</span> <span
  m="1692930">talk</span> <span m="1693230">about</span> <span
  m="1693530">those.</span> <span m="1694770">But</span> <span
  m="1695300">the</span> <span m="1696810">A</span> <span
  m="1697020">transpose</span> <span m="1697710">A,</span> <span
  m="1697950">because</span> <span m="1698400">it's</span> <span
  m="1698550">symmetric</span> <span m="1699150">positive</span> <span
  m="1699600">definite,</span> <span m="1701450">made</span> <span
  m="1701770">the</span> <span m="1701880">proof</span> <span
  m="1702210">so</span> <span m="1702420">nice.</span></p><p><span
  m="1704100">You've</span> <span m="1704580">seen</span> <span
  m="1704880">the</span> <span m="1705000">nicest</span> <span
  m="1705690">proof,</span> <span m="1706170">I'd</span> <span
  m="1706350">say,</span> <span m="1707160">of</span> <span
  m="1708000">the--</span> <span m="1710640">Now</span> <span
  m="1710850">I</span> <span m="1711030">should</span> <span
  m="1711300">think</span> <span m="1711540">about</span> <span
  m="1711780">the</span> <span m="1711900">geometry.</span> <span
  m="1713560">So</span> <span m="1713640">what</span> <span
  m="1713910">does</span> <span m="1714270">A</span> <span
  m="1714720">equal</span> <span m="1716620">A</span> <span
  m="1717010">for</span> <span m="1717280">u</span> <span
  m="1717640">sigma?</span> <span m="1718150">Maybe</span> <span
  m="1718510">I</span> <span m="1719590">take</span> <span
  m="1719800">another</span> <span m="1720100">board,</span> <span
  m="1720490">but</span> <span m="1721010">it</span> <span
  m="1721300">will</span> <span m="1724030">fill</span> <span
  m="1724350">it.</span> <span m="1725570">But</span> <span
  m="1725620">it's</span> <span m="1725670">a</span> <span
  m="1725810">good</span> <span m="1727160">U</span> <span
  m="1727520">sigma</span> <span m="1727970">V</span> <span
  m="1728240">transpose.</span></p><p><span m="1732120">So</span> <span
  m="1732320">it's</span> <span m="1732410">got</span> <span
  m="1732620">three</span> <span m="1732890">factors</span> <span
  m="1733460">there.</span> <span m="1735190">And</span> <span
  m="1735700">I</span> <span m="1735820">would</span> <span
  m="1736000">like</span> <span m="1736240">then</span> <span
  m="1736720">each</span> <span m="1737050">factor</span> <span
  m="1737500">is</span> <span m="1737680">kind</span> <span
  m="1737890">of</span> <span m="1738010">a</span> <span
  m="1738100">special</span> <span m="1738520">matrix.</span> <span
  m="1739840">U</span> <span m="1740080">and</span> <span m="1740230">V</span>
  <span m="1740530">are</span> <span m="1740830">orthogonal</span> <span
  m="1741370">matrix.</span> <span m="1741980">So</span> <span
  m="1742030">I</span> <span m="1742150">think</span> <span
  m="1742420">of</span> <span m="1742540">those</span> <span
  m="1742900">as</span> <span m="1743080">rotations.</span></p><p><span
  m="1745090">Sigma</span> <span m="1745630">is</span> <span
  m="1745900">a</span> <span m="1745990">diagonal</span> <span
  m="1746680">matrix.</span> <span m="1747370">I</span> <span
  m="1747490">think</span> <span m="1747760">of</span> <span
  m="1747910">it</span> <span m="1748060">as</span> <span
  m="1748210">stretching.</span> <span m="1749200">So</span> <span
  m="1749380">now</span> <span m="1749560">I'm</span> <span
  m="1749650">just</span> <span m="1749830">going</span> <span
  m="1749930">to</span> <span m="1750040">draw</span> <span
  m="1750320">the</span> <span m="1750430">picture.</span> <span
  m="1751310">So</span> <span m="1751510">here's</span> <span
  m="1753550">unit</span> <span m="1754090">vectors.</span> <span
  m="1757170">And</span> <span m="1757800">the</span> <span
  m="1757920">first</span> <span m="1758360">thing--</span> <span
  m="1758830">so</span> <span m="1760500">if</span> <span m="1760710">I</span>
  <span m="1761310">multiply</span> <span m="1761820">by</span> <span
  m="1762030">x,</span> <span m="1762420">this</span> <span
  m="1762600">is</span> <span m="1762750">the</span> <span
  m="1762870">first</span> <span m="1763170">thing</span> <span
  m="1763380">that</span> <span m="1763530">happens.</span></p><p><span
  m="1764370">So</span> <span m="1764580">that</span> <span
  m="1764790">rotates.</span> <span m="1766530">So</span> <span
  m="1766880">here's</span> <span m="1767470">x's.</span> <span
  m="1768900">Then</span> <span m="1769500">V</span> <span
  m="1769770">transpose</span> <span m="1770460">x's.</span> <span
  m="1771720">That's</span> <span m="1771930">still</span> <span
  m="1772290">a</span> <span m="1772350">circle</span> <span
  m="1774650">length</span> <span m="1775060">and</span> <span
  m="1775250">change</span> <span m="1775730">for</span> <span
  m="1775940">those,</span> <span m="1777070">when</span> <span
  m="1777230">I</span> <span m="1777320">multiply</span> <span
  m="1777800">by</span> <span m="1778010">an</span> <span
  m="1778130">orthogonal</span> <span m="1778670">matrix.</span></p><p><span
  m="1779420">But</span> <span m="1780530">the</span> <span
  m="1780620">vectors</span> <span m="1781190">turned.</span> <span
  m="1783670">It's</span> <span m="1784280">a</span> <span
  m="1784360">rotation.</span> <span m="1786250">Could</span> <span
  m="1786460">be</span> <span m="1786610">a</span> <span
  m="1786670">reflection,</span> <span m="1787360">but</span> <span
  m="1787480">let's</span> <span m="1787750">keep</span> <span
  m="1788020">it</span> <span m="1788140">as</span> <span m="1788320">a</span>
  <span m="1788380">rotation.</span></p><p><span m="1789580">Now</span> <span
  m="1789850">what</span> <span m="1790090">does</span> <span
  m="1790270">sigma</span> <span m="1790750">do?</span> <span
  m="1792250">So</span> <span m="1792490">I</span> <span m="1792550">have</span>
  <span m="1792820">this</span> <span m="1794020">unit</span> <span
  m="1794410">circle.</span> <span m="1795450">I'm</span> <span
  m="1795630">in</span> <span m="1795820">2D.</span> <span m="1799460">So</span>
  <span m="1799610">I'm</span> <span m="1799730">drawing</span> <span
  m="1800090">a</span> <span m="1800150">picture</span> <span
  m="1800630">of</span> <span m="1800990">the</span> <span
  m="1802610">vectors.</span> <span m="1803390">These</span> <span
  m="1803690">are</span> <span m="1803780">the</span> <span
  m="1803960">unit</span> <span m="1804530">vectors</span> <span
  m="1805100">in</span> <span m="1805250">2D,</span> <span
  m="1806480">x,y.</span></p><p><span m="1808120">They</span> <span
  m="1808630">got</span> <span m="1808870">turned</span> <span
  m="1809530">by</span> <span m="1810490">the</span> <span
  m="1810670">orthogonal</span> <span m="1811270">matrix.</span> <span
  m="1812620">What</span> <span m="1813310">does</span> <span
  m="1813460">sigma</span> <span m="1813940">do</span> <span
  m="1814210">to</span> <span m="1814390">that</span> <span
  m="1815500">picture?</span> <span m="1817160">It</span> <span
  m="1817400">stretches,</span> <span m="1818420">because</span> <span
  m="1818990">sigma</span> <span m="1819440">multiplies</span> <span
  m="1820220">by</span> <span m="1820430">sigma</span> <span
  m="1820820">1</span> <span m="1821120">in</span> <span m="1821240">the</span>
  <span m="1821330">first</span> <span m="1821630">component,</span> <span
  m="1822500">sigma</span> <span m="1822860">2</span> <span
  m="1823100">in</span> <span m="1823220">the</span> <span
  m="1823310">second.</span> <span m="1824120">So</span> <span
  m="1824300">it</span> <span m="1824390">stretches</span> <span
  m="1825120">these</span> <span m="1825260">guys.</span></p><p><span
  m="1826130">And</span> <span m="1826820">let's</span> <span
  m="1827060">suppose</span> <span m="1827540">this</span> <span
  m="1827750">is</span> <span m="1827900">number</span> <span
  m="1828200">1</span> <span m="1828500">and</span> <span
  m="1828620">this</span> <span m="1828790">is</span> <span
  m="1828920">number</span> <span m="1829220">2,</span> <span
  m="1830000">this</span> <span m="1830150">is</span> <span
  m="1830240">number</span> <span m="1830540">1</span> <span
  m="1830810">and</span> <span m="1831110">number</span> <span
  m="1831440">2.</span> <span m="1832190">So</span> <span
  m="1832460">sigma</span> <span m="1833030">1,</span> <span
  m="1833630">our</span> <span m="1833780">convention</span> <span
  m="1834500">is</span> <span m="1835400">sigma</span> <span
  m="1835820">1--</span> <span m="1836320">we</span> <span
  m="1836480">always</span> <span m="1836870">take</span> <span
  m="1837200">sigma</span> <span m="1837620">1</span> <span
  m="1837980">greater</span> <span m="1838450">or</span> <span
  m="1838523">equal</span> <span m="1838596">to</span> <span
  m="1838670">sigma</span> <span m="1839060">2,</span> <span
  m="1839360">greater</span> <span m="1839555">or</span> <span
  m="1839750">equal</span> <span m="1840620">whatever,</span> <span
  m="1841070">greater</span> <span m="1841370">equal,</span> <span
  m="1842150">sigma</span> <span m="1842630">rank.</span> <span
  m="1843720">And</span> <span m="1845150">they're</span> <span
  m="1845330">all</span> <span m="1845510">positive.</span> <span
  m="1849110">And</span> <span m="1849350">the</span> <span
  m="1849440">rest</span> <span m="1849740">are</span> <span
  m="1849830">0.</span> <span m="1851540">So</span> <span
  m="1851730">sigma</span> <span m="1852140">1</span> <span
  m="1852450">will</span> <span m="1852540">be</span> <span
  m="1852720">bigger</span> <span m="1853050">than</span> <span
  m="1853230">sigma</span> <span m="1853620">2.</span></p><p><span
  m="1853890">So</span> <span m="1854070">I'm</span> <span
  m="1854250">expecting</span> <span m="1856900">a</span> <span
  m="1856980">circle</span> <span m="1857520">goes</span> <span
  m="1857880">to</span> <span m="1858030">an</span> <span
  m="1858150">ellipse</span> <span m="1858660">when</span> <span
  m="1858900">you</span> <span m="1859590">stretch--</span> <span
  m="1862680">I</span> <span m="1862760">didn't</span> <span
  m="1863050">get</span> <span m="1863280">it</span> <span
  m="1863430">quite</span> <span m="1864120">perfect,</span> <span
  m="1864750">but</span> <span m="1865890">not</span> <span
  m="1866070">bad.</span> <span m="1867480">So</span> <span
  m="1868260">this</span> <span m="1868500">would</span> <span
  m="1868710">be</span> <span m="1869280">sigma</span> <span
  m="1870660">2</span> <span m="1871390">v2,</span> <span
  m="1872470">sigma</span> <span m="1872820">1</span> <span
  m="1873270">v1,</span> <span m="1875250">and</span> <span
  m="1875400">this</span> <span m="1875610">would</span> <span
  m="1875730">be</span> <span m="1875970">sigma</span> <span
  m="1876550">2</span> <span m="1877050">v2.</span> <span m="1877890">And</span>
  <span m="1878070">we</span> <span m="1878190">now</span> <span
  m="1878460">have</span> <span m="1878700">an</span> <span
  m="1878820">ellipse.</span></p><p><span m="1882260">So</span> <span
  m="1882340">we</span> <span m="1882460">started</span> <span
  m="1882910">with</span> <span m="1883260">x</span> <span m="1883475">is</span>
  <span m="1883690">in</span> <span m="1883840">a</span> <span
  m="1883900">circle.</span> <span m="1885190">We</span> <span
  m="1885400">rotated.</span> <span m="1886540">We</span> <span
  m="1886690">stretched.</span> <span m="1887560">And</span> <span
  m="1887710">now</span> <span m="1887950">the</span> <span
  m="1888070">final</span> <span m="1888460">step</span> <span
  m="1889840">is</span> <span m="1890590">take</span> <span
  m="1890890">these</span> <span m="1891190">guys</span> <span
  m="1891610">and</span> <span m="1891700">multiply</span> <span
  m="1892150">them</span> <span m="1892330">by</span> <span
  m="1892630">u.</span> <span m="1893650">So</span> <span
  m="1893800">this</span> <span m="1894070">was</span> <span
  m="1894340">the</span> <span m="1894880">sigma</span> <span
  m="1896020">V</span> <span m="1896260">transpose</span> <span
  m="1897010">x.</span></p><p><span m="1898150">And</span> <span
  m="1898300">now</span> <span m="1898570">I'm</span> <span
  m="1898750">ready</span> <span m="1899020">for</span> <span
  m="1899260">the</span> <span m="1899390">u</span> <span
  m="1899800">part</span> <span m="1900230">which</span> <span
  m="1901000">comes</span> <span m="1901450">last</span> <span
  m="1902050">because</span> <span m="1902470">it's</span> <span
  m="1902710">at</span> <span m="1902800">the</span> <span
  m="1902920">left.</span> <span m="1904060">And</span> <span
  m="1904360">what</span> <span m="1904660">happens?</span> <span
  m="1905200">What's</span> <span m="1905440">the</span> <span
  m="1905560">picture</span> <span m="1905950">now?</span> <span
  m="1910040">What</span> <span m="1910220">does</span> <span
  m="1910460">u</span> <span m="1910820">do</span> <span m="1911090">to</span>
  <span m="1911240">the</span> <span m="1911420">ellipse?</span> <span
  m="1912710">It</span> <span m="1912800">rotates</span> <span
  m="1913340">it.</span></p><p><span m="1914370">It's</span> <span
  m="1914570">another</span> <span m="1915410">orthogonal</span> <span
  m="1916010">matrix.</span> <span m="1916820">It</span> <span
  m="1917000">rotates</span> <span m="1917510">it</span> <span
  m="1917630">somewhere,</span> <span m="1918710">maybe</span> <span
  m="1919010">there.</span> <span m="1923060">And</span> <span
  m="1923360">now</span> <span m="1926050">we</span> <span
  m="1926310">see</span> <span m="1927760">the</span> <span
  m="1928030">u's,</span> <span m="1929890">u2</span> <span
  m="1931030">and</span> <span m="1931150">u1.</span> <span
  m="1940950">Well,</span> <span m="1941240">let</span> <span
  m="1941350">me</span> <span m="1941880">think</span> <span
  m="1942090">about</span> <span m="1942370">that.</span> <span
  m="1943980">Basically,</span> <span m="1944610">that's</span> <span
  m="1945000">not</span> <span m="1945810">that's</span> <span
  m="1946080">right.</span></p><p><span m="1949150">So</span> <span
  m="1949480">this</span> <span m="1949810">SVD</span> <span
  m="1950830">is</span> <span m="1951010">telling</span> <span
  m="1951340">us</span> <span m="1951430">something</span> <span
  m="1952270">quite</span> <span m="1952720">remarkable</span> <span
  m="1954010">that</span> <span m="1954220">every</span> <span
  m="1955450">linear</span> <span m="1955870">transformation,</span> <span
  m="1956800">every</span> <span m="1957520">matrix</span> <span
  m="1958030">multiplication</span> <span m="1959350">factors</span> <span
  m="1960040">into</span> <span m="1960400">a</span> <span
  m="1960490">rotation</span> <span m="1962440">times</span> <span
  m="1962890">a</span> <span m="1962980">stretch</span> <span
  m="1963700">times</span> <span m="1964140">a</span> <span
  m="1964360">different</span> <span m="1964810">rotation,</span> <span
  m="1966020">but</span> <span m="1966430">possibly</span> <span
  m="1967090">different.</span> <span m="1970350">Actually,</span> <span
  m="1970890">when</span> <span m="1971370">would</span> <span
  m="1972590">the</span> <span m="1972960">u</span> <span m="1973320">be</span>
  <span m="1973500">the</span> <span m="1973620">same</span> <span
  m="1973980">as</span> <span m="1974130">a</span> <span m="1974220">v?</span>
  <span m="1975240">Here's</span> <span m="1975270">a</span> <span
  m="1975300">good</span> <span m="1975510">question.</span> <span
  m="1976430">When</span> <span m="1976950">is</span> <span m="1977160">u</span>
  <span m="1977430">the</span> <span m="1977580">same</span> <span
  m="1977910">as</span> <span m="1978060">v</span> <span m="1978570">when</span>
  <span m="1978780">are</span> <span m="1978870">the</span> <span
  m="1979020">two</span> <span m="1979770">singular</span> <span
  m="1980280">vectors</span> <span m="1980790">just</span> <span
  m="1981120">the</span> <span m="1981270">same?</span></p><p><span
  m="1982030">AUDIENCE:</span> <span m="1982470">A</span> <span
  m="1982710">square.</span></p><p><span m="1983190">PROFESSOR:</span> <span
  m="1983430">Because</span> <span m="1983780">A</span> <span
  m="1983970">would</span> <span m="1984150">have</span> <span
  m="1984330">to</span> <span m="1984420">be</span> <span
  m="1984570">square.</span> <span m="1986220">And</span> <span
  m="1987630">we</span> <span m="1987840">want</span> <span
  m="1988110">this</span> <span m="1988440">to</span> <span
  m="1988530">be</span> <span m="1988710">the</span> <span
  m="1988860">same</span> <span m="1989400">as</span> <span m="1990030">Q</span>
  <span m="1991200">lambda</span> <span m="1991950">Q</span> <span
  m="1992340">transpose</span> <span m="1994110">if</span> <span
  m="1994470">they're</span> <span m="1994680">the</span> <span
  m="1994830">same.</span> <span m="1995730">So</span> <span
  m="1995940">the</span> <span m="1996060">U's</span> <span
  m="1996420">would</span> <span m="1996600">be</span> <span
  m="1996750">the</span> <span m="1996870">same</span> <span
  m="1997230">as</span> <span m="1997380">the</span> <span
  m="1997470">V's</span> <span m="1998430">when</span> <span
  m="1998700">the</span> <span m="1998790">matrix</span> <span
  m="1999510">is</span> <span m="2000980">symmetric.</span> <span
  m="2002180">And</span> <span m="2002420">actually</span> <span
  m="2003080">we</span> <span m="2003260">need</span> <span
  m="2003440">it</span> <span m="2003560">to</span> <span m="2003710">be</span>
  <span m="2004910">positive</span> <span
  m="2005540">definite.</span></p><p><span m="2006050">Why</span> <span
  m="2006210">is</span> <span m="2006410">that?</span> <span
  m="2007830">Because</span> <span m="2008400">our</span> <span
  m="2008550">convention</span> <span m="2009270">is</span> <span
  m="2009480">these</span> <span m="2009810">guys</span> <span
  m="2010290">are</span> <span m="2010800">greater</span> <span
  m="2010965">or</span> <span m="2011130">equal</span> <span
  m="2011370">to</span> <span m="2011430">0.</span> <span
  m="2013290">It's</span> <span m="2013410">going</span> <span
  m="2013560">to</span> <span m="2013650">be</span> <span m="2014130">the</span>
  <span m="2014250">same,</span> <span m="2015210">then--</span> <span
  m="2016080">so</span> <span m="2016320">far</span> <span m="2016560">a</span>
  <span m="2016650">positive</span> <span m="2017610">definite</span> <span
  m="2018270">symmetric</span> <span m="2019050">matrix,</span> <span
  m="2022080">the</span> <span m="2024720">S</span> <span
  m="2025160">that</span> <span m="2025610">we</span> <span
  m="2025760">started</span> <span m="2026180">with</span> <span
  m="2026420">is</span> <span m="2026600">the</span> <span
  m="2026690">same</span> <span m="2027740">as</span> <span
  m="2028040">the</span> <span m="2028220">A</span> <span m="2028400">on</span>
  <span m="2028580">the</span> <span m="2028670">next</span> <span
  m="2029000">line.</span> <span m="2030070">Yeah,</span> <span
  m="2030570">the</span> <span m="2030990">Q</span> <span m="2031200">is</span>
  <span m="2031980">the</span> <span m="2032100">U,</span> <span
  m="2032640">the</span> <span m="2032790">Q</span> <span
  m="2033090">transpose</span> <span m="2033750">is</span> <span
  m="2033960">the</span> <span m="2034020">V</span> <span
  m="2034080">transpose,</span> <span m="2035340">the</span> <span
  m="2035460">lambda</span> <span m="2035880">is</span> <span
  m="2036045">the</span> <span m="2036210">sigma.</span></p><p><span
  m="2037780">So</span> <span m="2037990">those</span> <span
  m="2038290">are</span> <span m="2038350">the</span> <span
  m="2038470">good</span> <span m="2038680">matrices.</span> <span
  m="2039520">And</span> <span m="2039640">they're</span> <span
  m="2039850">the</span> <span m="2039970">ones</span> <span
  m="2040360">that</span> <span m="2040710">you</span> <span
  m="2040900">can't</span> <span m="2041290">improve</span> <span
  m="2041900">basically.</span> <span m="2042580">They're</span> <span
  m="2042820">so</span> <span m="2043060">good</span> <span
  m="2044020">you</span> <span m="2044170">can't</span> <span
  m="2044470">make</span> <span m="2044710">a</span> <span
  m="2044800">positive</span> <span m="2045310">definite</span> <span
  m="2045790">symmetric</span> <span m="2046300">matrix</span> <span
  m="2046750">better</span> <span m="2047020">than</span> <span
  m="2047260">it</span> <span m="2047410">is.</span> <span
  m="2048070">Well,</span> <span m="2048389">maybe</span> <span
  m="2049139">diagonalize</span> <span m="2049909">it</span> <span
  m="2050199">or</span> <span m="2050290">something,</span> <span
  m="2050730">but</span> <span m="2051920">OK.</span></p><p><span
  m="2054400">Now</span> <span m="2054820">I</span> <span
  m="2055179">think</span> <span m="2055480">of</span> <span
  m="2055659">like,</span> <span m="2055900">one</span> <span
  m="2056260">question</span> <span m="2056920">here</span> <span
  m="2058239">that</span> <span m="2060070">helps</span> <span
  m="2060400">me</span> <span m="2060670">anyway</span> <span
  m="2061150">to</span> <span m="2062380">keep</span> <span
  m="2062679">this</span> <span m="2063190">figure</span> <span
  m="2063760">straight,</span> <span m="2066830">how</span> <span
  m="2067610">I</span> <span m="2067790">want</span> <span m="2067940">to</span>
  <span m="2068030">count</span> <span m="2069380">the</span> <span
  m="2071110">parameters</span> <span m="2072820">in</span> <span
  m="2075330">this</span> <span m="2076090">factorization.</span> <span
  m="2078699">So</span> <span m="2078929">I</span> <span m="2079010">am</span>
  <span m="2079120">2</span> <span m="2079300">by</span> <span
  m="2079480">2.</span> <span m="2080980">I'm</span> <span m="2081100">2</span>
  <span m="2081310">by</span> <span m="2081489">2.</span> <span
  m="2083199">So</span> <span m="2083440">A</span> <span m="2084889">has</span>
  <span m="2086139">four</span> <span m="2086409">numbers,</span> <span
  m="2087159">a,</span> <span m="2087396">b,</span> <span m="2087634">c,</span>
  <span m="2087872">d.</span> <span m="2092929">Then</span> <span
  m="2093139">I</span> <span m="2093230">guess</span> <span m="2093560">I</span>
  <span m="2093710">feel</span> <span m="2094100">that</span> <span
  m="2094370">four</span> <span m="2094699">numbers</span> <span
  m="2095239">should</span> <span m="2095510">appear</span> <span
  m="2097040">on</span> <span m="2097160">the</span> <span
  m="2097220">right</span> <span m="2097460">hand</span> <span
  m="2097670">side.</span></p><p><span m="2099440">Somehow</span> <span
  m="2100130">the</span> <span m="2100280">U</span> <span m="2100760">and</span>
  <span m="2100880">the</span> <span m="2101000">sigma</span> <span
  m="2101490">and</span> <span m="2101570">the</span> <span m="2101615">V</span>
  <span m="2101660">transpose</span> <span m="2103190">should</span> <span
  m="2104270">use</span> <span m="2104720">up</span> <span m="2104900">a</span>
  <span m="2104960">total</span> <span m="2105290">of</span> <span
  m="2105350">four</span> <span m="2105620">numbers.</span> <span
  m="2106050">So</span> <span m="2106120">we</span> <span
  m="2106180">have</span> <span m="2106340">a</span> <span
  m="2107990">counting</span> <span m="2108470">match</span> <span
  m="2108920">between</span> <span m="2109910">the</span> <span
  m="2110060">left</span> <span m="2110390">side</span> <span
  m="2110780">that's</span> <span m="2110960">got</span> <span
  m="2111170">four</span> <span m="2111410">numbers</span> <span
  m="2111830">a,</span> <span m="2111970">b,</span> <span m="2112110">c,</span>
  <span m="2112390">d,</span> <span m="2113120">and</span> <span
  m="2113300">the</span> <span m="2113390">right</span> <span
  m="2113720">side</span> <span m="2114050">that's</span> <span
  m="2114290">got</span> <span m="2114470">four</span> <span
  m="2114770">numbers</span> <span m="2115280">buried</span> <span
  m="2115790">in</span> <span m="2115910">there</span> <span
  m="2116120">somewhere.</span> <span m="2118360">So</span> <span
  m="2118480">how</span> <span m="2118720">can</span> <span
  m="2118930">we</span> <span m="2119080">dig</span> <span
  m="2119260">them</span> <span m="2119410">out?</span> <span
  m="2121690">How</span> <span m="2121810">many</span> <span
  m="2122080">numbers</span> <span m="2122530">in</span> <span
  m="2122710">sigma?</span> <span m="2123340">That's</span> <span
  m="2124210">pretty</span> <span m="2124510">clear.</span></p><p><span
  m="2128310">Two,</span> <span m="2129400">sigma</span> <span
  m="2129660">1</span> <span m="2129870">and</span> <span
  m="2129990">sigma</span> <span m="2130170">2.</span> <span
  m="2131462">The</span> <span m="2131930">two</span> <span
  m="2132170">eigenvalues.</span> <span m="2134560">How</span> <span
  m="2134860">many</span> <span m="2135250">numbers</span> <span
  m="2135970">in</span> <span m="2136180">this</span> <span
  m="2136480">rotation?</span> <span m="2139670">So</span> <span
  m="2140660">if</span> <span m="2140810">I</span> <span m="2140930">had</span>
  <span m="2141110">a</span> <span m="2141170">different</span> <span
  m="2141530">color</span> <span m="2141890">chalk,</span> <span
  m="2142340">I</span> <span m="2142460">would</span> <span
  m="2142640">put</span> <span m="2143360">2</span> <span m="2143880">for</span>
  <span m="2144060">the</span> <span m="2144170">number</span> <span
  m="2144530">of</span> <span m="2145910">things</span> <span
  m="2146300">I</span> <span m="2146380">counted</span> <span
  m="2146810">for</span> <span m="2147050">by</span> <span
  m="2147260">sigma.</span> <span m="2147890">How</span> <span
  m="2148010">many</span> <span m="2148790">parameters</span> <span
  m="2149600">does</span> <span m="2149900">a</span> <span
  m="2150320">two</span> <span m="2150530">by</span> <span
  m="2150710">two</span> <span m="2150950">rotation</span> <span
  m="2151670">require?</span> <span m="2153600">One.</span></p><p><span
  m="2154020">And</span> <span m="2154260">what's</span> <span
  m="2155100">a</span> <span m="2155160">good</span> <span
  m="2155370">word</span> <span m="2155700">for</span> <span
  m="2155880">that</span> <span m="2156150">one?</span> <span
  m="2159961">Is</span> <span m="2160410">that</span> <span
  m="2160730">one</span> <span m="2161300">parameter?</span> <span
  m="2162740">It's</span> <span m="2163130">like</span> <span
  m="2163400">I</span> <span m="2163580">have</span> <span
  m="2163730">our</span> <span m="2163820">cos</span> <span
  m="2164180">theta,</span> <span m="2164540">sine</span> <span
  m="2164930">theta,</span> <span m="2165380">minus</span> <span
  m="2165840">sine</span> <span m="2166200">theta,</span> <span
  m="2166310">cos</span> <span m="2166640">theta.</span> <span
  m="2167000">There's</span> <span m="2167240">a</span> <span
  m="2167330">number</span> <span m="2167900">theta.</span> <span
  m="2169610">It's</span> <span m="2169960">the</span> <span
  m="2170110">angle</span> <span m="2170500">it</span> <span
  m="2170620">rotates.</span></p><p><span m="2172230">So</span> <span
  m="2172410">that's</span> <span m="2172650">one</span> <span
  m="2173490">guy</span> <span m="2173910">to</span> <span
  m="2174090">tell</span> <span m="2175290">the</span> <span
  m="2175410">rotation</span> <span m="2176040">angle,</span> <span
  m="2177330">two</span> <span m="2177660">guys</span> <span
  m="2178380">to</span> <span m="2178560">tell</span> <span
  m="2178860">the</span> <span m="2178980">stretchings,</span> <span
  m="2180060">and</span> <span m="2182860">one</span> <span
  m="2183340">more</span> <span m="2184330">to</span> <span
  m="2184450">tell</span> <span m="2184840">the</span> <span
  m="2184960">rotation</span> <span m="2185740">from</span> <span
  m="2186100">you,</span> <span m="2187030">adding</span> <span
  m="2187360">up</span> <span m="2187480">to</span> <span
  m="2187630">four.</span> <span m="2189070">So</span> <span
  m="2189340">those</span> <span m="2189840">count--</span> <span
  m="2190470">that</span> <span m="2190670">was</span> <span
  m="2190785">a</span> <span m="2190900">match</span> <span
  m="2191350">up</span> <span m="2191620">with</span> <span
  m="2191900">the</span> <span m="2192010">four</span> <span
  m="2192670">numbers,</span> <span m="2193210">a,</span> <span
  m="2193377">b,</span> <span m="2193545">c,</span> <span m="2193880">d</span>
  <span m="2193990">that</span> <span m="2194140">we</span> <span
  m="2194260">start</span> <span m="2194590">with.</span> <span
  m="2195160">Of</span> <span m="2195280">course,</span> <span
  m="2195640">it's</span> <span m="2195820">a</span> <span
  m="2195880">complicated</span> <span m="2197710">relation</span> <span
  m="2198370">between</span> <span m="2198880">those</span> <span
  m="2199240">four</span> <span m="2199450">numbers</span> <span
  m="2199990">and</span> <span m="2200860">rotations</span> <span
  m="2201760">and</span> <span m="2201910">stretches,</span> <span
  m="2203410">but</span> <span m="2203620">it's</span> <span
  m="2203800">four</span> <span m="2204190">equals</span> <span
  m="2204550">four</span> <span m="2204910">anyway.</span></p><p><span
  m="2208890">And</span> <span m="2209050">I</span> <span
  m="2209170">guess</span> <span m="2209590">if</span> <span
  m="2209800">you</span> <span m="2209920">did</span> <span
  m="2210160">three</span> <span m="2210460">by</span> <span
  m="2210700">threes--</span> <span m="2211720">oh,</span> <span
  m="2212950">three</span> <span m="2213220">by</span> <span
  m="2213460">threes.</span> <span m="2214390">What</span> <span
  m="2214570">would</span> <span m="2214780">happen</span> <span
  m="2215200">then?</span> <span m="2216400">So</span> <span
  m="2216880">let</span> <span m="2217000">me</span> <span
  m="2217150">take</span> <span m="2217420">three.</span> <span
  m="2217780">Do</span> <span m="2217920">you</span> <span
  m="2218050">want</span> <span m="2218230">to</span> <span
  m="2218320">care</span> <span m="2218560">for</span> <span
  m="2218760">three</span> <span m="2219010">by</span> <span
  m="2219190">threes?</span> <span m="2221180">Just,</span> <span
  m="2221480">it's</span> <span m="2221600">sort</span> <span
  m="2221870">of</span> <span m="2221930">satisfying</span> <span
  m="2222710">to</span> <span m="2222830">get</span> <span
  m="2223040">four</span> <span m="2223400">equal</span> <span
  m="2223670">four.</span></p><p><span m="2224690">But</span> <span
  m="2224930">now</span> <span m="2226080">what</span> <span
  m="2226310">do</span> <span m="2226430">we</span> <span m="2226580">get</span>
  <span m="2226880">three</span> <span m="2227150">by</span> <span
  m="2227330">three?</span> <span m="2230590">We</span> <span
  m="2230810">got</span> <span m="2230990">how</span> <span
  m="2231310">many</span> <span m="2231550">numbers</span> <span
  m="2232000">here?</span> <span m="2233080">Nine.</span> <span
  m="2237280">So</span> <span m="2237490">where</span> <span
  m="2237820">are</span> <span m="2237880">those</span> <span
  m="2238150">nine</span> <span m="2238600">numbers?</span> <span
  m="2243730">How</span> <span m="2243850">many</span> <span
  m="2244150">here?</span></p><p><span m="2244420">That's</span> <span
  m="2244810">usually</span> <span m="2245200">the</span> <span
  m="2245320">easy--</span> <span m="2246850">three.</span> <span
  m="2248470">So</span> <span m="2248650">what's</span> <span
  m="2248950">your</span> <span m="2249100">guess</span> <span
  m="2249640">for</span> <span m="2249850">the</span> <span
  m="2251640">how</span> <span m="2251790">many</span> <span
  m="2252120">in</span> <span m="2252270">a</span> <span
  m="2252330">rotation?</span> <span m="2253310">And</span> <span
  m="2253700">a</span> <span m="2253800">3D</span> <span
  m="2254550">rotation,</span> <span m="2255270">you</span> <span
  m="2255360">take</span> <span m="2255630">a</span> <span
  m="2255690">sphere</span> <span m="2256230">and</span> <span
  m="2256350">you</span> <span m="2256500">rotate</span> <span
  m="2257040">it.</span> <span m="2258490">How</span> <span
  m="2258640">many</span> <span m="2259390">how</span> <span
  m="2259510">many</span> <span m="2259750">numbers</span> <span
  m="2260590">to</span> <span m="2260760">tell</span> <span
  m="2261070">you</span> <span m="2261220">what's</span> <span
  m="2261520">what--</span> <span m="2262570">to</span> <span
  m="2262690">tell</span> <span m="2262930">you</span> <span
  m="2263080">what</span> <span m="2263290">you</span> <span
  m="2263380">did?</span></p><p><span m="2264490">Three.</span> <span
  m="2264910">We</span> <span m="2265060">hope</span> <span
  m="2265280">three.</span> <span m="2265930">Yeah,</span> <span
  m="2266270">it's</span> <span m="2266470">going</span> <span
  m="2266570">to</span> <span m="2266680">be</span> <span
  m="2266830">three,</span> <span m="2267340">three,</span> <span
  m="2267670">and</span> <span m="2267820">three</span> <span
  m="2270590">for</span> <span m="2270800">the</span> <span
  m="2271570">three</span> <span m="2271900">dimensional</span> <span
  m="2272410">world</span> <span m="2272740">that</span> <span
  m="2272890">we</span> <span m="2273010">live</span> <span
  m="2273280">in.</span> <span m="2273520">So</span> <span
  m="2273730">people</span> <span m="2274150">who</span> <span
  m="2274330">do</span> <span m="2275140">rotations</span> <span
  m="2275890">for</span> <span m="2276100">a</span> <span
  m="2276160">living</span> <span m="2278350">understand</span> <span
  m="2279190">that</span> <span m="2279490">rotation</span> <span
  m="2280300">in</span> <span m="2280510">3D,</span> <span
  m="2281350">but</span> <span m="2281560">how</span> <span
  m="2281770">do</span> <span m="2281860">you</span> <span
  m="2281980">see</span> <span m="2282350">this?</span></p><p><span
  m="2282770">AUDIENCE:</span> <span m="2283220">Roll, pitch, and
  yaw.</span></p><p><span m="2283670">PROFESSOR:</span> <span
  m="2284120">Sorry?</span></p><p><span m="2284390">AUDIENCE:</span> <span
  m="2284590">Roll,</span> <span m="2284910">pitch</span> <span
  m="2285005">and</span> <span m="2285100">yaw.</span></p><p><span
  m="2285280">PROFESSOR:</span> <span m="2285580">Roll,</span> <span
  m="2286030">pitch,</span> <span m="2286260">and</span> <span
  m="2286360">yaw.</span> <span m="2286750">That</span> <span
  m="2286930">sounds</span> <span m="2287250">good.</span> <span
  m="2287740">I</span> <span m="2287830">mean,</span> <span
  m="2287980">it's</span> <span m="2288190">three</span> <span
  m="2288580">words</span> <span m="2289510">and</span> <span
  m="2289720">we've</span> <span m="2289930">got</span> <span
  m="2290170">it,</span> <span m="2290440">right?</span> <span
  m="2291040">OK,</span> <span m="2291720">yeah.</span> <span
  m="2291970">Roll,</span> <span m="2292370">pitch</span> <span
  m="2292470">and</span> <span m="2292630">yaw.</span></p><p><span
  m="2293270">Yeah,</span> <span m="2293560">I</span> <span
  m="2293680">guess</span> <span m="2293960">a</span> <span
  m="2294120">pilot</span> <span m="2295540">hopefully,</span> <span
  m="2296860">knows</span> <span m="2297310">about</span> <span
  m="2297610">those</span> <span m="2298240">three.</span> <span
  m="2299030">Yeah,</span> <span m="2299950">yeah,</span> <span
  m="2301060">yeah.</span> <span m="2301310">Which</span> <span
  m="2301750">is</span> <span m="2301900">roll?</span> <span
  m="2302260">When</span> <span m="2302490">you</span> <span
  m="2302660">are</span> <span m="2302770">like</span> <span
  m="2303040">forward</span> <span m="2303490">and</span> <span
  m="2303640">back?</span> <span m="2306690">Does</span> <span
  m="2306970">anybody,</span> <span m="2307570">anybody?</span> <span
  m="2309280">Roll,</span> <span m="2309830">pitch,</span> <span
  m="2310220">and</span> <span m="2310340">yaw?</span></p><p><span
  m="2313780">AUDIENCE:</span> <span m="2314050">Pitch</span> <span
  m="2314350">is</span> <span m="2314650">the</span> <span m="2314770">up</span>
  <span m="2314905">and</span> <span m="2315040">down</span> <span
  m="2315227">one.</span></p><p><span m="2315415">PROFESSOR:</span> <span
  m="2315790">Pitch</span> <span m="2316030">is</span> <span
  m="2316270">the</span> <span m="2316420">up</span> <span
  m="2316600">and</span> <span m="2316690">down</span> <span
  m="2316960">one.</span> <span m="2317300">OK.</span></p><p><span
  m="2317640">AUDIENCE:</span> <span m="2317980">Roll</span> <span
  m="2318610">is</span> <span m="2318940">like,</span> <span m="2319250">think
  of</span> <span m="2319360">a</span> <span m="2319810">barrel</span> <span
  m="2320260">roll.</span> <span m="2321550">And</span> <span
  m="2321730">yaw</span> <span m="2322120">is</span> <span
  m="2322330">your</span> <span m="2322540">side-to-side</span> <span
  m="2322850">motion.</span></p><p><span m="2323305">PROFESSOR:</span> <span
  m="2323760">Oh,</span> <span m="2323950">yaw,</span> <span
  m="2324940">you</span> <span m="2325090">stay</span> <span
  m="2325330">in</span> <span m="2325430">a</span> <span
  m="2325510">plane</span> <span m="2326020">and</span> <span
  m="2326170">you--</span> <span m="2326980">OK,</span> <span
  m="2327520">beautiful.</span> <span m="2328270">Right,</span> <span
  m="2328870">right.</span> <span m="2330040">And</span> <span
  m="2330160">that</span> <span m="2330370">leads</span> <span
  m="2330670">us</span> <span m="2330880">to</span> <span m="2331180">our</span>
  <span m="2331450">four--</span> <span m="2331930">four</span> <span
  m="2332200">dimensions.</span> <span m="2334030">What's</span> <span
  m="2334420">your</span> <span m="2334600">guess</span> <span
  m="2335060">on</span> <span m="2335360">4D?</span> <span
  m="2337090">Well,</span> <span m="2337810">we</span> <span
  m="2337990">could</span> <span m="2338140">do</span> <span
  m="2338320">the</span> <span m="2338440">count</span> <span
  m="2338800">again.</span></p><p><span m="2339130">If</span> <span
  m="2339280">it</span> <span m="2339340">was</span> <span m="2339520">4</span>
  <span m="2339820">by</span> <span m="2340030">4,</span> <span
  m="2340360">we</span> <span m="2340540">would</span> <span
  m="2340660">have</span> <span m="2340840">16</span> <span
  m="2341470">numbers</span> <span m="2341950">there.</span> <span
  m="2342670">And</span> <span m="2342880">in</span> <span
  m="2343000">the</span> <span m="2343090">middle,</span> <span
  m="2343480">we</span> <span m="2343690">always</span> <span
  m="2344050">have</span> <span m="2344230">an</span> <span
  m="2344290">easy</span> <span m="2344620">time</span> <span
  m="2344890">with</span> <span m="2345040">that.</span> <span
  m="2346060">That</span> <span m="2346240">would</span> <span
  m="2346420">be</span> <span m="2347170">4.</span></p><p><span
  m="2347890">So</span> <span m="2348070">we've</span> <span
  m="2348180">got</span> <span m="2348430">12</span> <span
  m="2348820">left</span> <span m="2349220">to</span> <span
  m="2349720">share</span> <span m="2350260">out.</span> <span
  m="2350620">So</span> <span m="2350920">six</span> <span
  m="2351430">somehow--</span> <span m="2352000">six--</span> <span
  m="2353110">six</span> <span m="2353470">angles</span> <span
  m="2354730">in</span> <span m="2355000">four</span> <span
  m="2355300">dimensions.</span> <span m="2357720">Well,</span> <span
  m="2358040">we'll</span> <span m="2358170">leave</span> <span
  m="2358440">it</span> <span m="2358530">there.</span> <span
  m="2359220">Yeah,</span> <span m="2359620">yeah,</span> <span
  m="2360020">yeah.</span> <span m="2361160">OK.</span></p><p><span
  m="2363210">So</span> <span m="2363390">there</span> <span
  m="2363530">is</span> <span m="2363660">the</span> <span
  m="2363840">SVD</span> <span m="2364410">but</span> <span
  m="2364590">without</span> <span m="2365010">an</span> <span
  m="2365160">example.</span> <span m="2367330">Examples,</span> <span
  m="2368320">you</span> <span m="2368590">know,</span> <span
  m="2368830">I</span> <span m="2369190">would</span> <span
  m="2369340">have</span> <span m="2369550">to</span> <span
  m="2369700">compute</span> <span m="2370180">A</span> <span
  m="2370360">transpose</span> <span m="2370675">A</span> <span
  m="2370990">and</span> <span m="2371350">find</span> <span
  m="2371710">it.</span> <span m="2372220">So</span> <span
  m="2372430">the</span> <span m="2372940">text</span> <span
  m="2373620">will</span> <span m="2373870">do</span> <span
  m="2374110">that--</span> <span m="2375010">does</span> <span
  m="2375340">it</span> <span m="2375460">for</span> <span m="2375670">a</span>
  <span m="2375730">particular</span> <span m="2376360">matrix.</span> <span
  m="2377690">Oh!</span> <span m="2379930">Yeah,</span> <span
  m="2380220">the</span> <span m="2380370">text</span> <span
  m="2380730">does</span> <span m="2381000">it</span> <span
  m="2381680">for</span> <span m="2381930">a</span> <span
  m="2382050">matrix</span> <span m="2382620">3,</span> <span
  m="2382980">4,</span> <span m="2383370">0,</span> <span m="2383740">5</span>
  <span m="2384280">that</span> <span m="2384960">came</span> <span
  m="2385290">out</span> <span m="2385500">pretty</span> <span
  m="2385800">well.</span></p><p><span m="2388260">A</span> <span
  m="2388350">few</span> <span m="2388590">facts</span> <span
  m="2389010">we</span> <span m="2389160">could</span> <span
  m="2389340">learn</span> <span m="2389670">though.</span> <span
  m="2390810">So</span> <span m="2391500">if</span> <span m="2391680">I</span>
  <span m="2391830">multiply</span> <span m="2392550">all</span> <span
  m="2392730">the</span> <span m="2392910">eigenvalues</span> <span
  m="2393690">together</span> <span m="2394890">for</span> <span
  m="2395100">a</span> <span m="2395160">matrix</span> <span
  m="2395760">A,</span> <span m="2396240">what</span> <span
  m="2396420">do</span> <span m="2396570">I</span> <span m="2396690">get?</span>
  <span m="2398160">I</span> <span m="2398260">get</span> <span
  m="2398370">the</span> <span m="2398480">determinant.</span> <span
  m="2399850">What</span> <span m="2400070">if</span> <span m="2400220">I</span>
  <span m="2400310">multiply</span> <span m="2401120">the</span> <span
  m="2401690">singular</span> <span m="2402350">values</span> <span
  m="2402890">together?</span> <span m="2404430">Well</span> <span
  m="2404670">again,</span> <span m="2405060">I</span> <span
  m="2405150">get</span> <span m="2405360">the</span> <span
  m="2405480">determinant.</span></p><p><span m="2406170">You</span> <span
  m="2406590">can</span> <span m="2406770">see</span> <span
  m="2406980">it</span> <span m="2407070">right</span> <span
  m="2407280">away</span> <span m="2407580">from</span> <span
  m="2407850">the</span> <span m="2408330">big</span> <span
  m="2408570">formula.</span> <span m="2410190">Take</span> <span
  m="2410490">determinant--</span> <span m="2413800">take</span> <span
  m="2414070">determinant.</span> <span m="2415000">Well,</span> <span
  m="2415490">assuming</span> <span m="2415930">the</span> <span
  m="2416050">matrix</span> <span m="2416530">A</span> <span
  m="2416650">is</span> <span m="2416770">square.</span> <span
  m="2417220">So</span> <span m="2417400">it's</span> <span
  m="2417580">got</span> <span m="2417790">a</span> <span
  m="2417880">determinant.</span> <span m="2418990">Then</span> <span
  m="2419170">I</span> <span m="2419260">take</span> <span
  m="2420460">determinant</span> <span m="2421150">of</span> <span
  m="2421240">this</span> <span m="2421450">product.</span></p><p><span
  m="2421990">I</span> <span m="2422080">can</span> <span
  m="2422590">take</span> <span m="2422860">the</span> <span
  m="2422980">separate</span> <span m="2423340">determinants.</span> <span
  m="2424660">That</span> <span m="2424900">has</span> <span
  m="2425140">determinant</span> <span m="2425860">equal</span> <span
  m="2426190">to</span> <span m="2428280">one.</span> <span
  m="2429890">An</span> <span m="2430010">orthogonal</span> <span
  m="2430610">matrix,</span> <span m="2432270">the</span> <span
  m="2437250">determinant</span> <span m="2437880">is</span> <span
  m="2438000">one.</span> <span m="2439120">And</span> <span
  m="2439290">similarly,</span> <span m="2439710">here.</span> <span
  m="2440960">So</span> <span m="2441150">the</span> <span
  m="2441270">product</span> <span m="2441840">of</span> <span
  m="2442050">the</span> <span m="2442560">sigmas</span> <span
  m="2443310">is</span> <span m="2443550">also</span> <span
  m="2444720">the</span> <span m="2444840">determinant.</span></p><p><span
  m="2445710">Yeah.</span> <span m="2446240">Yeah,</span> <span
  m="2446640">so</span> <span m="2446820">the</span> <span
  m="2446910">product</span> <span m="2447330">of</span> <span
  m="2447450">the</span> <span m="2447540">sigmas</span> <span
  m="2448080">is</span> <span m="2448230">also</span> <span
  m="2448590">the</span> <span m="2448740">determinant.</span> <span
  m="2449410">The</span> <span m="2449730">product</span> <span
  m="2450180">of</span> <span m="2450240">the</span> <span
  m="2450390">sigmas</span> <span m="2450870">here</span> <span
  m="2451050">will</span> <span m="2451200">be</span> <span
  m="2451380">15.</span> <span m="2452130">But</span> <span
  m="2452940">you'll</span> <span m="2453180">find</span> <span
  m="2453660">that</span> <span m="2455160">sigma</span> <span
  m="2455580">one</span> <span m="2455940">is</span> <span
  m="2456120">smaller</span> <span m="2456870">than</span> <span
  m="2458130">lambda</span> <span m="2458640">1.</span> <span
  m="2459960">So</span> <span m="2460140">here</span> <span
  m="2460380">are</span> <span m="2460440">the</span> <span
  m="2460620">eigenvalues,</span> <span m="2462120">lambda</span> <span
  m="2462450">1</span> <span m="2462650">less or equal</span> <span
  m="2462910">to</span> <span m="2463140">lambda</span> <span
  m="2463500">2,</span> <span m="2464670">say.</span></p><p><span
  m="2466630">But</span> <span m="2467040">the</span> <span
  m="2467520">singular</span> <span m="2468000">values</span> <span
  m="2468570">are</span> <span m="2471240">outside</span> <span
  m="2471720">them.</span> <span m="2472380">Yeah.</span> <span
  m="2473040">But</span> <span m="2473250">they</span> <span
  m="2473430">still</span> <span m="2473730">multiply.</span> <span
  m="2474930">Sigma</span> <span m="2475500">1</span> <span
  m="2476070">times</span> <span m="2476460">sigma</span> <span
  m="2476870">2</span> <span m="2477150">will</span> <span
  m="2477330">still</span> <span m="2477660">be</span> <span
  m="2477930">15.</span> <span m="2479730">And</span> <span
  m="2479940">that's</span> <span m="2480240">the</span> <span
  m="2480300">same</span> <span m="2480720">as</span> <span
  m="2480840">lambda</span> <span m="2481260">1</span> <span
  m="2481560">times</span> <span m="2481950">lambda</span> <span
  m="2482340">2.</span> <span m="2483130">Yeah.</span></p><p><span
  m="2486230">But</span> <span m="2486440">overall,</span> <span
  m="2487190">computing</span> <span m="2487940">the</span> <span
  m="2488780">examples</span> <span m="2489530">of</span> <span
  m="2491180">the</span> <span m="2491330">SVD</span> <span
  m="2491930">take</span> <span m="2492230">more</span> <span
  m="2492500">time</span> <span m="2493010">because--</span> <span
  m="2495510">well,</span> <span m="2496060">yeah,</span> <span
  m="2496500">you</span> <span m="2496610">just</span> <span
  m="2496850">compute</span> <span m="2497270">A</span> <span
  m="2497420">transpose</span> <span m="2498050">A</span> <span
  m="2498770">and</span> <span m="2499190">you've</span> <span
  m="2499430">got</span> <span m="2500270">the</span> <span
  m="2500390">v's.</span> <span m="2500930">And</span> <span
  m="2501440">you're</span> <span m="2501620">on</span> <span
  m="2501800">your</span> <span m="2501920">way.</span> <span
  m="2502820">And</span> <span m="2502970">you</span> <span
  m="2503030">have</span> <span m="2503150">to</span> <span
  m="2503270">take</span> <span m="2503510">the</span> <span
  m="2503650">square</span> <span m="2504050">root</span> <span
  m="2504440">of</span> <span m="2505220">the</span> <span
  m="2505340">eigenvalues.</span> <span m="2507560">So</span> <span
  m="2507880">that's</span> <span m="2508210">the</span> <span
  m="2508520">SVD</span> <span m="2511150">as</span> <span m="2511390">a</span>
  <span m="2512350">piece</span> <span m="2512710">of</span> <span
  m="2512860">pure</span> <span m="2513190">math.</span> <span
  m="2514390">But</span> <span m="2515140">of</span> <span
  m="2515200">course,</span> <span m="2515620">what</span> <span
  m="2515800">we'll</span> <span m="2515960">do</span> <span
  m="2516490">next</span> <span m="2516850">time</span> <span
  m="2517210">starting</span> <span m="2517630">right</span> <span
  m="2517840">away</span> <span m="2518170">is</span> <span
  m="2519490">use</span> <span m="2520170">SVD.</span></p><p><span
  m="2521010">And</span> <span m="2521140">let</span> <span
  m="2521290">me</span> <span m="2521440">tell</span> <span
  m="2521710">you</span> <span m="2521800">even</span> <span
  m="2522130">today,</span> <span m="2523480">the</span> <span
  m="2523630">most--</span> <span m="2524540">yeah,</span> <span
  m="2525240">yeah</span> <span m="2526210">most</span> <span
  m="2526510">important</span> <span m="2530170">pieces</span> <span
  m="2530770">of</span> <span m="2530890">the</span> <span
  m="2531070">SVD.</span> <span m="2531910">So</span> <span
  m="2532090">what</span> <span m="2532300">do</span> <span m="2532420">I</span>
  <span m="2532510">mean</span> <span m="2532780">by</span> <span
  m="2532990">pieces</span> <span m="2533530">of</span> <span
  m="2533650">the</span> <span m="2533780">SVD?</span> <span
  m="2534300">I've</span> <span m="2534400">got</span> <span
  m="2534550">one</span> <span m="2534790">more</span> <span
  m="2535330">blackboard</span> <span m="2535920">still</span> <span
  m="2536200">to</span> <span m="2536320">write</span> <span
  m="2536620">on.</span> <span m="2536860">So</span> <span
  m="2537640">here</span> <span m="2537820">we</span> <span
  m="2537940">go.</span></p><p><span m="2540930">So</span> <span
  m="2541110">let</span> <span m="2541320">me</span> <span
  m="2541500">write</span> <span m="2541830">out</span> <span
  m="2542850">A</span> <span m="2543360">is</span> <span m="2545630">the</span>
  <span m="2545880">u's</span> <span m="2547830">times</span> <span
  m="2548360">the</span> <span m="2548460">sigmas--</span> <span
  m="2550380">sigmas</span> <span m="2551480">1</span> <span
  m="2552030">to</span> <span m="2552330">r</span> <span
  m="2553440">times</span> <span m="2554040">the</span> <span
  m="2554180">v's--</span> <span m="2555300">v</span> <span
  m="2555540">transpose</span> <span m="2556260">v1</span> <span
  m="2556740">transpose</span> <span m="2557400">down</span> <span
  m="2557670">to</span> <span m="2558210">vr</span> <span
  m="2558860">transpose.</span> <span m="2559540">So</span> <span
  m="2559770">those</span> <span m="2560010">are</span> <span
  m="2560550">across.</span> <span m="2563240">Yeah.</span> <span
  m="2563790">Actually</span> <span m="2567950">what</span> <span
  m="2568100">I've</span> <span m="2568250">written</span> <span
  m="2568520">here--</span> <span m="2572700">so</span> <span
  m="2573240">you</span> <span m="2573390">could</span> <span
  m="2573570">say</span> <span m="2573810">there</span> <span
  m="2573960">is</span> <span m="2574080">a</span> <span m="2575310">big</span>
  <span m="2575670">economies.</span></p><p><span m="2577130">There</span> <span
  m="2577500">is</span> <span m="2577740">a</span> <span
  m="2577890">smaller</span> <span m="2578550">size</span> <span
  m="2579090">SVD</span> <span m="2579780">that</span> <span
  m="2579960">has</span> <span m="2580260">the</span> <span
  m="2580410">real</span> <span m="2580920">stuff</span> <span
  m="2581280">that</span> <span m="2581400">really</span> <span
  m="2581700">counts.</span> <span m="2582720">And</span> <span
  m="2582840">then</span> <span m="2583050">there's</span> <span
  m="2583290">a</span> <span m="2583350">larger</span> <span
  m="2583980">SVD</span> <span m="2584760">that</span> <span
  m="2584910">has</span> <span m="2585150">a</span> <span
  m="2585180">whole</span> <span m="2585330">lot</span> <span
  m="2585540">of</span> <span m="2585600">zeros.</span> <span
  m="2587220">So</span> <span m="2587400">this</span> <span
  m="2587710">it</span> <span m="2587760">would</span> <span
  m="2587910">be</span> <span m="2588090">the</span> <span
  m="2588240">smaller</span> <span m="2588750">one,</span> <span
  m="2589460">m</span> <span m="2589770">by</span> <span
  m="2590130">r.</span></p><p><span m="2593250">This</span> <span
  m="2593430">would</span> <span m="2593730">be</span> <span
  m="2593940">r</span> <span m="2594270">by</span> <span m="2594660">r.</span>
  <span m="2595410">And</span> <span m="2595530">these</span> <span
  m="2595800">would</span> <span m="2595950">all</span> <span
  m="2596130">be</span> <span m="2596460">positive.</span> <span
  m="2597570">And</span> <span m="2597720">this</span> <span
  m="2597930">would</span> <span m="2598140">be</span> <span
  m="2598350">r</span> <span m="2598770">by</span> <span m="2599100">n.</span>
  <span m="2604260">So</span> <span m="2605910">that's</span> <span
  m="2606210">only</span> <span m="2606540">using</span> <span
  m="2607170">the</span> <span m="2607830">r</span> <span
  m="2608340">non-zeros.</span> <span m="2609720">All</span> <span
  m="2609930">these</span> <span m="2610260">guys</span> <span
  m="2610620">are</span> <span m="2610740">greater</span> <span
  m="2611100">than</span> <span m="2611280">zero.</span></p><p><span
  m="2613360">Then</span> <span m="2613570">the</span> <span
  m="2613720">other</span> <span m="2613960">one</span> <span
  m="2615550">we</span> <span m="2615790">could</span> <span
  m="2616060">fill</span> <span m="2616480">out</span> <span
  m="2617590">to</span> <span m="2617700">get</span> <span m="2618290">a</span>
  <span m="2618470">square</span> <span m="2620830">orthogonal</span> <span
  m="2621370">matrix,</span> <span m="2623882">the</span> <span
  m="2624300">sigmas</span> <span m="2625930">and</span> <span
  m="2626260">square</span> <span m="2627010">v's</span> <span
  m="2628150">v1</span> <span m="2628450">transpose</span> <span
  m="2629110">to</span> <span m="2629230">vn</span> <span
  m="2630280">transpose.</span> <span m="2632060">So</span> <span
  m="2632140">what</span> <span m="2632350">are</span> <span
  m="2632410">the</span> <span m="2632560">shapes</span> <span
  m="2633040">now?</span> <span m="2634000">This</span> <span
  m="2634300">shape</span> <span m="2634810">is</span> <span
  m="2635050">m</span> <span m="2635260">by</span> <span m="2635470">m.</span>
  <span m="2637030">It's</span> <span m="2637240">a</span> <span
  m="2637300">proper</span> <span m="2637870">orthogonal</span> <span
  m="2638440">matrix.</span> <span m="2639370">This</span> <span
  m="2639610">one</span> <span m="2639850">also</span> <span
  m="2640450">n</span> <span m="2640660">by</span> <span
  m="2640900">n.</span></p><p><span m="2641680">So</span> <span
  m="2641860">this</span> <span m="2642070">guy</span> <span
  m="2642310">has</span> <span m="2642580">to</span> <span
  m="2642670">be--</span> <span m="2643000">this</span> <span
  m="2643240">is</span> <span m="2643420">the</span> <span
  m="2643540">sigma</span> <span m="2643945">now.</span> <span
  m="2644740">So</span> <span m="2644920">it</span> <span m="2645010">has</span>
  <span m="2645280">to</span> <span m="2645370">be</span> <span
  m="2645520">what</span> <span m="2645730">size?</span> <span
  m="2647280">m</span> <span m="2647590">by</span> <span m="2647890">m.</span>
  <span m="2648220">That's</span> <span m="2648550">the</span> <span
  m="2648670">remaining</span> <span m="2649900">space.</span> <span
  m="2650800">So</span> <span m="2651010">it</span> <span
  m="2651130">starts</span> <span m="2651670">with</span> <span
  m="2651940">the</span> <span m="2652010">sigmas,</span> <span
  m="2653890">and</span> <span m="2654040">then</span> <span
  m="2654400">it's</span> <span m="2654610">all</span> <span
  m="2654850">zeros,</span> <span m="2657460">accounting</span> <span
  m="2657910">for</span> <span m="2658090">null</span> <span
  m="2658360">space</span> <span m="2658690">stuff.</span></p><p><span
  m="2663390">Yeah.</span> <span m="2663630">So</span> <span
  m="2663840">you</span> <span m="2664410">should</span> <span
  m="2664710">really</span> <span m="2665100">see</span> <span
  m="2665730">that</span> <span m="2665910">these</span> <span
  m="2666750">two</span> <span m="2667230">are</span> <span
  m="2667380">possible.</span> <span m="2669130">That</span> <span
  m="2669570">all</span> <span m="2669810">these</span> <span
  m="2670020">zeros</span> <span m="2670860">when</span> <span
  m="2671070">you</span> <span m="2671130">multiply</span> <span
  m="2671700">out,</span> <span m="2674100">just</span> <span
  m="2674430">give</span> <span m="2674640">nothing,</span> <span
  m="2675390">so</span> <span m="2675600">that</span> <span
  m="2675750">really</span> <span m="2676140">the</span> <span
  m="2676290">only</span> <span m="2676650">thing</span> <span
  m="2677010">that</span> <span m="2677550">non-zero</span> <span
  m="2678450">is</span> <span m="2678660">in</span> <span
  m="2678870">these</span> <span m="2679710">bits.</span> <span
  m="2681250">But</span> <span m="2681580">there</span> <span
  m="2681840">is</span> <span m="2682030">a</span> <span
  m="2682090">complete</span> <span m="2682630">one.</span></p><p><span
  m="2683080">So</span> <span m="2683620">what</span> <span
  m="2684160">are</span> <span m="2684250">these</span> <span
  m="2684580">extra</span> <span m="2685090">u's</span> <span
  m="2685720">that</span> <span m="2685870">are</span> <span
  m="2686020">in</span> <span m="2686140">the</span> <span
  m="2686230">null</span> <span m="2686470">space</span> <span
  m="2689030">of</span> <span m="2689240">A,</span> <span m="2689405">A</span>
  <span m="2689570">transpose</span> <span m="2690380">or</span> <span
  m="2690560">A</span> <span m="2690710">transpose</span> <span
  m="2691340">A?</span> <span m="2691970">Yeah,</span> <span
  m="2692360">so</span> <span m="2692570">two</span> <span
  m="2692840">sizes,</span> <span m="2694790">the</span> <span
  m="2694940">large</span> <span m="2695270">size</span> <span
  m="2695720">and</span> <span m="2695840">the</span> <span
  m="2695960">small</span> <span m="2696290">size.</span> <span
  m="2697290">But</span> <span m="2697900">then</span> <span
  m="2698330">the</span> <span m="2699530">things</span> <span
  m="2699860">that</span> <span m="2700010">count</span> <span
  m="2700460">are</span> <span m="2700640">all</span> <span
  m="2701630">in</span> <span m="2701930">there.</span> <span
  m="2703500">OK.</span></p><p><span m="2705820">So</span> <span
  m="2707180">I</span> <span m="2707350">was</span> <span
  m="2707470">going</span> <span m="2707590">to</span> <span
  m="2707740">do</span> <span m="2707920">one</span> <span
  m="2708160">more</span> <span m="2708370">thing.</span> <span
  m="2709940">Let</span> <span m="2709990">me</span> <span
  m="2710140">see</span> <span m="2712360">what</span> <span
  m="2712600">it</span> <span m="2712690">was.</span> <span
  m="2717170">So</span> <span m="2717410">this</span> <span
  m="2717680">is</span> <span m="2717830">section</span> <span
  m="2718460">1.8</span> <span m="2719720">of</span> <span
  m="2719930">the</span> <span m="2720020">notes.</span> <span
  m="2721130">And</span> <span m="2721340">you'll</span> <span
  m="2721580">see</span> <span m="2721880">examples</span> <span
  m="2722630">there.</span> <span m="2725350">And</span> <span
  m="2726160">you'll</span> <span m="2726400">see</span> <span
  m="2728170">a</span> <span m="2728260">second</span> <span
  m="2728800">approach</span> <span m="2729490">to</span> <span
  m="2731960">the</span> <span m="2732420">finding</span> <span
  m="2732930">the</span> <span m="2733080">u's</span> <span
  m="2733440">and</span> <span m="2733590">v's</span> <span
  m="2733920">and</span> <span m="2734070">sigmas.</span></p><p><span
  m="2736700">I</span> <span m="2736790">can</span> <span
  m="2736970">tell</span> <span m="2737180">you</span> <span
  m="2737300">what</span> <span m="2737480">that</span> <span
  m="2737780">is.</span> <span m="2738200">But</span> <span
  m="2738440">maybe</span> <span m="2739400">with</span> <span
  m="2743070">just</span> <span m="2744530">do</span> <span
  m="2744800">something</span> <span m="2745190">nice</span> <span
  m="2745700">at</span> <span m="2745880">the</span> <span
  m="2746060">end,</span> <span m="2747380">let</span> <span
  m="2747680">me</span> <span m="2749860">tell</span> <span
  m="2750190">you</span> <span m="2750430">about</span> <span
  m="2751990">another</span> <span m="2752740">factorization</span> <span
  m="2753850">of</span> <span m="2754000">A</span> <span
  m="2757040">that's</span> <span m="2757380">famous</span> <span
  m="2757870">in</span> <span m="2758020">engineering,</span> <span
  m="2759370">and</span> <span m="2759640">it's</span> <span
  m="2759880">famous</span> <span m="2760510">in</span> <span
  m="2766620">geometry.</span> <span m="2769260">So</span> <span
  m="2769530">this</span> <span m="2769830">is</span> <span
  m="2770070">NEA</span> <span m="2770790">is</span> <span m="2771180">a</span>
  <span m="2771315">U</span> <span m="2771450">sigma</span> <span
  m="2771710">V</span> <span m="2772050">transpose.</span> <span
  m="2772740">We've</span> <span m="2772950">got</span> <span
  m="2773190">that.</span></p><p><span m="2774070">Now</span> <span
  m="2774630">the</span> <span m="2775230">other</span> <span
  m="2775500">one</span> <span m="2775680">that</span> <span
  m="2775830">I'm</span> <span m="2776010">thinking</span> <span
  m="2776460">of,</span> <span m="2777120">I'll</span> <span
  m="2777300">tell</span> <span m="2777570">you</span> <span
  m="2777720">its</span> <span m="2777930">name.</span> <span
  m="2778450">It's</span> <span m="2778500">called</span> <span
  m="2778770">the</span> <span m="2778930">polar</span> <span
  m="2781390">decomposition</span> <span m="2782520">of</span> <span
  m="2782640">a</span> <span m="2782730">matrix.</span> <span
  m="2786900">And</span> <span m="2787080">all</span> <span m="2787710">I</span>
  <span m="2787830">want</span> <span m="2788070">you</span> <span
  m="2788160">to</span> <span m="2788280">see</span> <span m="2788580">is</span>
  <span m="2788760">that</span> <span m="2789500">it's</span> <span
  m="2789900">virtually</span> <span m="2790560">here.</span> <span
  m="2791400">So</span> <span m="2791610">a</span> <span
  m="2791670">polar</span> <span m="2792120">means--</span> <span
  m="2793160">what's</span> <span m="2793880">polar</span> <span
  m="2794560">in--</span> <span m="2795380">for</span> <span
  m="2795750">a</span> <span m="2795780">complex</span> <span
  m="2796320">number,</span> <span m="2797310">what's</span> <span
  m="2797610">the</span> <span m="2797730">polar</span> <span
  m="2799260">form</span> <span m="2799680">of</span> <span m="2799830">a</span>
  <span m="2799920">complex</span> <span m="2800630">number?</span></p><p><span
  m="2800990">AUDIENCE:</span> <span m="2801420">e</span> <span
  m="2801563">to</span> <span m="2801706">the</span> <span m="2801850">i</span>
  <span m="2802065">theta.</span></p><p><span m="2802280">PROFESSOR:</span>
  <span m="2802710">Yeah,</span> <span m="2803140">it's</span> <span
  m="2803280">e</span> <span m="2803430">to</span> <span m="2803580">the</span>
  <span m="2803730">i</span> <span m="2803970">theta</span> <span
  m="2804140">times</span> <span m="2804500">r.</span> <span
  m="2804990">Yeah.</span> <span m="2806010">A</span> <span
  m="2806160">real</span> <span m="2806640">guy--</span> <span
  m="2807390">so</span> <span m="2807600">the</span> <span
  m="2807720">real</span> <span m="2808110">guy</span> <span
  m="2808440">r</span> <span m="2808850">will</span> <span
  m="2809100">translate</span> <span m="2809790">into</span> <span
  m="2810060">a</span> <span m="2810120">symmetric</span> <span
  m="2810810">guy.</span> <span m="2812490">And</span> <span
  m="2812700">the</span> <span m="2812850">e</span> <span m="2813090">to</span>
  <span m="2813210">the</span> <span m="2813390">i</span> <span
  m="2813600">theta</span> <span m="2814020">will</span> <span
  m="2814260">translate</span> <span m="2814860">into--</span> <span
  m="2818970">what</span> <span m="2819150">kind</span> <span
  m="2819360">of</span> <span m="2819450">a</span> <span
  m="2819540">matrix</span> <span m="2820620">reminds</span> <span
  m="2821250">you</span> <span m="2821430">of</span> <span m="2821600">e</span>
  <span m="2821720">to</span> <span m="2821850">the</span> <span
  m="2822020">i</span> <span m="2822230">theta?</span></p><p>&nbsp;</p><p><span
  m="2823010">AUDIENCE:</span> <span m="2823115">Orthogonal.</span></p><p><span
  m="2823510">PROFESSOR:</span> <span m="2823820">Orthogonal,</span> <span
  m="2824880">size</span> <span m="2825330">1.</span> <span
  m="2826650">So</span> <span m="2827010">orthogonal.</span> <span
  m="2830680">So</span> <span m="2830890">that's</span> <span
  m="2831160">a</span> <span m="2831220">very,</span> <span
  m="2832240">very</span> <span m="2832630">kind</span> <span
  m="2832900">of</span> <span m="2832960">nice.</span> <span
  m="2834460">Every</span> <span m="2834850">matrix</span> <span
  m="2835630">factors</span> <span m="2836320">into</span> <span
  m="2836890">a</span> <span m="2837460">symmetric</span> <span
  m="2838120">matrix</span> <span m="2838750">times</span> <span
  m="2839080">an</span> <span m="2839230">orthogonal</span> <span
  m="2839860">matrix.</span> <span m="2840830">And</span> <span
  m="2841030">I</span> <span m="2841930">of</span> <span
  m="2842020">course,</span> <span m="2843620">describe</span> <span
  m="2844090">these</span> <span m="2844450">as</span> <span
  m="2844630">the</span> <span m="2844750">most</span> <span
  m="2845050">important</span> <span m="2846250">classes</span> <span
  m="2846790">of</span> <span m="2846860">matrices.</span></p><p><span
  m="2847600">And</span> <span m="2847720">here,</span> <span
  m="2848080">we're</span> <span m="2848260">saying</span> <span
  m="2848650">every</span> <span m="2848920">matrix</span> <span
  m="2850030">is</span> <span m="2850270">a</span> <span m="2851010">S</span>
  <span m="2851380">times</span> <span m="2851680">a</span> <span
  m="2851760">Q.</span> <span m="2853380">And</span> <span
  m="2853620">I'm</span> <span m="2853800">also</span> <span
  m="2854160">saying</span> <span m="2854550">that</span> <span
  m="2854730">I</span> <span m="2854850">can</span> <span m="2855120">get</span>
  <span m="2855360">that</span> <span m="2855630">quickly</span> <span
  m="2856170">out</span> <span m="2857220">of</span> <span
  m="2857310">the</span> <span m="2857490">SVD.</span> <span
  m="2859410">So</span> <span m="2859620">I'm</span> <span
  m="2859740">just</span> <span m="2859980">want</span> <span
  m="2860400">to</span> <span m="2860480">do</span> <span m="2860760">it.</span>
  <span m="2863210">So</span> <span m="2863290">I</span> <span
  m="2863380">want</span> <span m="2863560">to</span> <span
  m="2863800">find</span> <span m="2864190">an</span> <span m="2864310">S</span>
  <span m="2864670">and</span> <span m="2864820">find</span> <span
  m="2865180">a</span> <span m="2865240">Q</span> <span m="2865750">out</span>
  <span m="2865930">of</span> <span m="2865990">this.</span> <span
  m="2867190">So</span> <span m="2867670">to</span> <span m="2867820">get</span>
  <span m="2868060">an</span> <span m="2868210">S--</span></p><p><span
  m="2869200">So</span> <span m="2869380">let</span> <span m="2869470">me</span>
  <span m="2869590">just</span> <span m="2869880">start</span> <span
  m="2870047">it.</span> <span m="2870550">U</span> <span
  m="2871490">sigma--</span> <span m="2872710">but</span> <span
  m="2872860">now</span> <span m="2873040">I'm</span> <span
  m="2873160">looking</span> <span m="2873520">for</span> <span
  m="2873700">an</span> <span m="2873850">S.</span> <span m="2875350">So</span>
  <span m="2875860">what</span> <span m="2876220">shall</span> <span
  m="2876460">I</span> <span m="2877600">put</span> <span m="2877870">in</span>
  <span m="2878050">now?</span> <span m="2879530">I</span> <span
  m="2880480">better</span> <span m="2880780">put</span> <span
  m="2881110">in--</span> <span m="2882710">if</span> <span
  m="2883030">I've</span> <span m="2883130">got</span> <span
  m="2883310">to</span> <span m="2883380">U</span> <span
  m="2883770">sigma</span> <span m="2884390">something,</span> <span
  m="2884950">and</span> <span m="2885070">I</span> <span
  m="2885160">want</span> <span m="2885330">it</span> <span
  m="2885460">to</span> <span m="2885580">be</span> <span m="2885780">a</span>
  <span m="2885850">symmetric,</span> <span m="2886710">I</span> <span
  m="2886860">should</span> <span m="2887100">put</span> <span
  m="2887390">in</span> <span m="2890690">U</span> <span
  m="2890860">transpose</span> <span m="2891160">would</span> <span
  m="2891260">do</span> <span m="2891360">it.</span> <span
  m="2893860">But</span> <span m="2894010">then</span> <span
  m="2894190">if</span> <span m="2894310">I</span> <span m="2894430">put</span>
  <span m="2894640">it</span> <span m="2894730">in</span> <span
  m="2894820">U</span> <span m="2894970">transpose,</span> <span
  m="2895600">I've</span> <span m="2895720">got</span> <span
  m="2895810">to</span> <span m="2895930">put</span> <span m="2896170">it</span>
  <span m="2896230">in</span> <span m="2896350">U.</span> <span
  m="2897460">So</span> <span m="2897670">now</span> <span
  m="2897940">I've</span> <span m="2898180">got</span> <span
  m="2899440">U</span> <span m="2900160">sigma.</span></p><p><span
  m="2900970">U</span> <span m="2901180">transpose</span> <span
  m="2901690">U</span> <span m="2901870">is</span> <span m="2901990">the</span>
  <span m="2902080">identity.</span> <span m="2902560">Then</span> <span
  m="2902680">I've</span> <span m="2902850">got</span> <span
  m="2903000">to</span> <span m="2903100">get</span> <span m="2903310">V</span>
  <span m="2903550">transpose.</span> <span m="2906470">And</span> <span
  m="2907280">have</span> <span m="2907520">I</span> <span
  m="2908090">got</span> <span m="2908450">what</span> <span
  m="2909050">the</span> <span m="2909200">polar</span> <span
  m="2909560">decomposition</span> <span m="2910490">is</span> <span
  m="2910670">asking</span> <span m="2911090">for</span> <span
  m="2913230">in</span> <span m="2913390">this</span> <span
  m="2913780">line?</span> <span m="2915080">So,</span> <span
  m="2915550">yeah.</span> <span m="2916300">What</span> <span
  m="2916720">have</span> <span m="2916870">I</span> <span
  m="2916960">got</span> <span m="2917170">here?</span></p><p><span
  m="2918220">Where's</span> <span m="2918520">the</span> <span
  m="2918880">where's</span> <span m="2919150">the</span> <span
  m="2919300">S</span> <span m="2920620">in</span> <span
  m="2921060">this?</span> <span m="2921570">So</span> <span
  m="2921960">you</span> <span m="2922230">see,</span> <span
  m="2922440">I</span> <span m="2922560">took</span> <span
  m="2922770">the</span> <span m="2922890">SVD</span> <span
  m="2923400">and</span> <span m="2923520">I</span> <span
  m="2923610">just</span> <span m="2923820">put</span> <span
  m="2924420">the</span> <span m="2924540">identity</span> <span
  m="2925170">in</span> <span m="2925320">there,</span> <span
  m="2926460">just</span> <span m="2926790">shifted</span> <span
  m="2927270">things</span> <span m="2927630">a</span> <span
  m="2927690">little.</span> <span m="2928080">And</span> <span
  m="2928260">now</span> <span m="2928620">where's</span> <span
  m="2929100">the</span> <span m="2929340">S</span> <span
  m="2929595">that</span> <span m="2929850">I</span> <span
  m="2929970">can</span> <span m="2930300">read</span> <span
  m="2930600">off?</span> <span m="2935360">For</span> <span
  m="2935640">three,</span> <span m="2936570">that's</span> <span
  m="2936810">an</span> <span m="2936930">S.</span> <span
  m="2938520">That's</span> <span m="2938730">a</span> <span
  m="2938820">symmetric</span> <span m="2939720">matrix.</span></p><p><span
  m="2941100">And</span> <span m="2941310">where's</span> <span
  m="2941670">the</span> <span m="2941790">Q?</span> <span
  m="2942420">Well,</span> <span m="2942990">I</span> <span
  m="2943080">guess</span> <span m="2943470">we</span> <span
  m="2943650">can</span> <span m="2943800">see</span> <span
  m="2944010">where</span> <span m="2944190">the</span> <span
  m="2944310">Q</span> <span m="2944580">has</span> <span m="2944820">to</span>
  <span m="2944910">be.</span> <span m="2946020">It's</span> <span
  m="2946230">here,</span> <span m="2949020">yeah.</span> <span
  m="2951060">Yeah,</span> <span m="2951260">so</span> <span
  m="2951480">just</span> <span m="2951690">by</span> <span
  m="2951870">sticking</span> <span m="2952290">U</span> <span
  m="2952470">transpose</span> <span m="2953070">U</span> <span
  m="2954000">and</span> <span m="2954160">putting</span> <span
  m="2954480">the</span> <span m="2954600">parentheses</span> <span
  m="2955380">right,</span> <span m="2957120">I</span> <span
  m="2957630">recover</span> <span m="2958980">that</span> <span
  m="2960180">decomposition</span> <span m="2961650">of</span> <span
  m="2961880">a</span> <span m="2961950">matrix,</span> <span
  m="2963560">which</span> <span m="2963860">in</span> <span
  m="2965150">mechanical</span> <span m="2965810">engineering</span> <span
  m="2966410">language,</span> <span m="2967050">is</span> <span
  m="2967460">language</span> <span m="2967910">tells</span> <span
  m="2968270">me</span> <span m="2968510">that</span> <span
  m="2968750">any</span> <span m="2969770">strain</span> <span
  m="2970640">can</span> <span m="2970940">be--</span> <span
  m="2972530">which</span> <span m="2972770">is</span> <span
  m="2972950">like</span> <span m="2973190">stretching</span> <span
  m="2973830">of</span> <span m="2974900">elastic</span> <span
  m="2975630">thing,</span> <span m="2976460">has</span> <span
  m="2981440">a</span> <span m="2983310">symmetric</span> <span
  m="2984150">kind</span> <span m="2984390">of</span> <span m="2984510">a</span>
  <span m="2984570">stretch</span> <span m="2985230">and</span> <span
  m="2985530">a</span> <span m="2985980">internal</span> <span
  m="2986820">twist.</span> <span m="2988160">Yeah.</span></p><p><span
  m="2990320">So</span> <span m="2990530">that's</span> <span
  m="2990800">good.</span> <span m="2991970">Well,</span> <span
  m="2992270">this</span> <span m="2992540">was</span> <span
  m="2992750">a</span> <span m="2993820">3,</span> <span m="2994360">6,</span>
  <span m="2994760">9</span> <span m="2995120">boards</span> <span
  m="2995540">filled</span> <span m="2995930">with</span> <span
  m="2997900">matrices.</span> <span m="3000130">Well,</span> <span
  m="3000500">it</span> <span m="3000650">is</span> <span m="3000860">18</span>
  <span m="3001310">0,</span> <span m="3001460">6,</span> <span
  m="3002300">5.</span> <span m="3002840">So</span> <span
  m="3003440">maybe</span> <span m="3003740">that's</span> <span
  m="3004010">all</span> <span m="3004120">right.</span> <span
  m="3004630">But</span> <span m="3007840">the</span> <span
  m="3007990">idea</span> <span m="3008370">is</span> <span
  m="3008620">to</span> <span m="3008830">use</span> <span
  m="3009280">them</span> <span m="3009550">on</span> <span m="3009730">a</span>
  <span m="3009820">matrix</span> <span m="3010420">of</span> <span
  m="3010540">data.</span></p><p><span m="3011890">And</span> <span
  m="3013060">I'll</span> <span m="3013390">just</span> <span
  m="3013750">tell</span> <span m="3014020">you</span> <span
  m="3014170">the</span> <span m="3014560">key</span> <span
  m="3014950">fact.</span> <span m="3016230">The</span> <span
  m="3016360">key</span> <span m="3016690">fact--</span> <span
  m="3017080">if</span> <span m="3017230">I</span> <span m="3017320">have</span>
  <span m="3017530">a</span> <span m="3017890">big</span> <span
  m="3018220">matrix</span> <span m="3018880">of</span> <span
  m="3019000">data,</span> <span m="3022312">A,</span> <span
  m="3027240">and</span> <span m="3027750">if</span> <span m="3027900">I</span>
  <span m="3028050">want</span> <span m="3028260">to</span> <span
  m="3028350">pull</span> <span m="3028650">out</span> <span
  m="3028860">of</span> <span m="3028920">that</span> <span
  m="3029100">matrix</span> <span m="3030000">the</span> <span
  m="3030180">important</span> <span m="3030720">part,</span> <span
  m="3032590">so</span> <span m="3032800">that's</span> <span
  m="3033190">what</span> <span m="3033790">data</span> <span
  m="3034120">science</span> <span m="3034600">has</span> <span
  m="3034840">to</span> <span m="3034930">be</span> <span
  m="3035110">doing.</span> <span m="3036280">Out</span> <span
  m="3036490">of</span> <span m="3036610">a</span> <span m="3036700">big</span>
  <span m="3037180">matrix,</span> <span m="3038620">some</span> <span
  m="3039880">part</span> <span m="3040270">of</span> <span
  m="3040420">it</span> <span m="3040540">is</span> <span
  m="3040750">noise,</span> <span m="3041530">some</span> <span
  m="3041830">part</span> <span m="3042100">of</span> <span
  m="3042220">it</span> <span m="3042340">is</span> <span
  m="3042490">signal.</span> <span m="3043510">I'm</span> <span
  m="3043690">looking</span> <span m="3044020">for</span> <span
  m="3044200">the</span> <span m="3044350">most</span> <span
  m="3044710">important</span> <span m="3045130">part</span> <span
  m="3045400">of</span> <span m="3045460">the</span> <span
  m="3045580">signal</span> <span m="3046060">here.</span> <span
  m="3046840">So</span> <span m="3046960">I'm</span> <span
  m="3047080">looking</span> <span m="3047350">for</span> <span
  m="3047500">the</span> <span m="3047620">most</span> <span
  m="3047980">important</span> <span m="3048430">part</span> <span
  m="3048700">of</span> <span m="3048790">the</span> <span
  m="3048910">matrix.</span></p><p><span m="3052620">In</span> <span
  m="3052770">a</span> <span m="3052830">way,</span> <span
  m="3053350">the</span> <span m="3053400">biggest</span> <span
  m="3053820">numbers,</span> <span m="3054920">but</span> <span
  m="3056610">of</span> <span m="3056760">course,</span> <span
  m="3057420">I</span> <span m="3057540">don't</span> <span
  m="3057750">look</span> <span m="3057930">at</span> <span
  m="3058050">individual</span> <span m="3058620">numbers.</span> <span
  m="3060810">So</span> <span m="3060990">what's</span> <span
  m="3061410">the</span> <span m="3061560">biggest</span> <span
  m="3062160">part</span> <span m="3062490">of</span> <span
  m="3062550">the</span> <span m="3062670">matrix?</span> <span
  m="3064950">What</span> <span m="3065190">are</span> <span
  m="3065250">the</span> <span m="3065400">principal</span> <span
  m="3066150">components?</span> <span m="3066930">Now</span> <span
  m="3067170">we're</span> <span m="3067680">really</span> <span
  m="3068190">getting</span> <span m="3068580">in--</span> <span
  m="3071670">it</span> <span m="3071850">could</span> <span
  m="3072030">be</span> <span m="3072630">data.</span> <span
  m="3073140">And</span> <span m="3073290">we</span> <span
  m="3073440">want</span> <span m="3073650">to</span> <span
  m="3073740">do</span> <span m="3073950">statistics,</span> <span
  m="3074790">or</span> <span m="3074940">we</span> <span
  m="3075060">want</span> <span m="3075270">to</span> <span
  m="3075330">see</span> <span m="3076470">what</span> <span
  m="3076680">has</span> <span m="3077010">high</span> <span
  m="3077340">variance,</span> <span m="3077940">what</span> <span
  m="3078120">has</span> <span m="3078300">low</span> <span
  m="3078540">variance,</span> <span m="3079340">we'll</span> <span
  m="3079890">do</span> <span m="3080220">these</span> <span
  m="3081330">connections</span> <span m="3081990">with</span> <span
  m="3082170">statistics.</span></p><p><span m="3084240">But</span> <span
  m="3084660">what's</span> <span m="3085210">the</span> <span
  m="3085440">important</span> <span m="3085890">part</span> <span
  m="3086100">of</span> <span m="3086160">the</span> <span
  m="3086250">matrix?</span> <span m="3086950">Well,</span> <span
  m="3088870">let</span> <span m="3089050">me</span> <span
  m="3089260">look</span> <span m="3089590">at</span> <span m="3089950">U</span>
  <span m="3090530">sigma</span> <span m="3091180">V</span> <span
  m="3091450">transpose.</span> <span m="3093130">Here,</span> <span
  m="3093550">yeah,</span> <span m="3094030">let</span> <span
  m="3094150">me</span> <span m="3095200">look</span> <span
  m="3095470">at</span> <span m="3095620">it.</span> <span m="3097600">So</span>
  <span m="3097780">what's</span> <span m="3098080">the</span> <span
  m="3098230">one</span> <span m="3098680">most</span> <span
  m="3099040">important</span> <span m="3099520">part</span> <span
  m="3099820">of</span> <span m="3100840">that</span> <span
  m="3101440">matrix?</span> <span m="3103900">The</span> <span
  m="3104050">right</span> <span m="3104500">one?</span></p><p><span
  m="3104950">It's</span> <span m="3105160">a</span> <span
  m="3105220">rank</span> <span m="3105580">one</span> <span
  m="3105970">piece.</span> <span m="3106430">So</span> <span
  m="3106510">when</span> <span m="3106690">I</span> <span
  m="3106810">say</span> <span m="3107080">a</span> <span
  m="3107230">part,</span> <span m="3108520">of</span> <span
  m="3108580">course</span> <span m="3108910">it's</span> <span
  m="3109060">going</span> <span m="3109210">to</span> <span
  m="3109270">be</span> <span m="3109360">a</span> <span
  m="3109420">matrix</span> <span m="3110080">part.</span> <span
  m="3110750">So</span> <span m="3111010">the</span> <span
  m="3111130">simple</span> <span m="3111610">matrix</span> <span
  m="3112180">building</span> <span m="3112570">block</span> <span
  m="3112900">is</span> <span m="3113020">like</span> <span m="3113290">a</span>
  <span m="3113350">rank</span> <span m="3113770">one</span> <span
  m="3114250">matrix,</span> <span m="3115150">a</span> <span
  m="3115330">something,</span> <span m="3115930">something</span> <span
  m="3116410">transpose.</span> <span m="3117850">And</span> <span
  m="3118060">what</span> <span m="3118360">should</span> <span
  m="3118600">I</span> <span m="3118750">pull</span> <span
  m="3119080">out</span> <span m="3119290">of</span> <span
  m="3119350">that</span> <span m="3120550">as</span> <span
  m="3120820">being</span> <span m="3121210">the</span> <span
  m="3121330">most</span> <span m="3121720">important</span> <span
  m="3122230">rank</span> <span m="3122590">one</span> <span
  m="3122890">matrix</span> <span m="3123940">that's</span> <span
  m="3124210">in</span> <span m="3124390">that</span> <span
  m="3124690">product?</span> <span m="3126230">So</span> <span
  m="3126470">I'll</span> <span m="3127130">erase</span> <span
  m="3127550">the</span> <span m="3127640">1.8</span> <span
  m="3128390">while</span> <span m="3128630">you</span> <span
  m="3129530">think</span> <span m="3129890">what</span> <span
  m="3130130">do</span> <span m="3130280">I</span> <span m="3130430">do</span>
  <span m="3131840">to</span> <span m="3132050">pick</span> <span
  m="3132440">out</span> <span m="3133460">the</span> <span
  m="3133610">big</span> <span m="3133880">deal,</span> <span
  m="3135500">the</span> <span m="3135680">thing</span> <span
  m="3135980">that</span> <span m="3136130">the</span> <span
  m="3136250">data</span> <span m="3136640">is</span> <span
  m="3136790">telling</span> <span m="3137120">me</span> <span
  m="3137300">first.</span></p><p><span m="3139200">Well,</span> <span
  m="3139560">these</span> <span m="3139920">are</span> <span
  m="3142490">orthonormal.</span> <span m="3144360">No</span> <span
  m="3144660">one</span> <span m="3144960">is</span> <span
  m="3145110">bigger</span> <span m="3145410">than</span> <span
  m="3145650">another</span> <span m="3146010">one.</span> <span
  m="3146740">These</span> <span m="3146970">are</span> <span
  m="3147100">orthonormal,</span> <span m="3147840">no</span> <span
  m="3148020">one</span> <span m="3148260">is</span> <span
  m="3148380">bigger</span> <span m="3148710">than</span> <span
  m="3148920">another</span> <span m="3149310">one.</span> <span
  m="3149580">But</span> <span m="3150990">here,</span> <span
  m="3151170">I</span> <span m="3151290">look</span> <span
  m="3151530">here,</span> <span m="3152190">which</span> <span
  m="3152460">is</span> <span m="3152610">the</span> <span
  m="3152700">most</span> <span m="3153000">important</span> <span
  m="3153480">number?</span> <span m="3155130">Sigma</span> <span
  m="3155640">1.</span></p><p><span m="3157200">Sigma</span> <span
  m="3157550">1.</span> <span m="3157880">So</span> <span m="3158090">the</span>
  <span m="3158240">part</span> <span m="3158600">I</span> <span
  m="3158690">pick</span> <span m="3159020">out</span> <span
  m="3159320">is</span> <span m="3159530">this</span> <span
  m="3159770">biggest</span> <span m="3160250">number</span> <span
  m="3161300">times</span> <span m="3161930">it's</span> <span
  m="3162350">row</span> <span m="3163250">times</span> <span
  m="3163640">it's</span> <span m="3163940">column.</span> <span
  m="3165080">So</span> <span m="3165350">it's</span> <span m="3165740">u</span>
  <span m="3166430">1</span> <span m="3167060">sigma</span> <span
  m="3167660">1</span> <span m="3167945">v1</span> <span
  m="3169220">transpose</span> <span m="3170630">is</span> <span
  m="3171550">the</span> <span m="3172940">top</span> <span
  m="3173360">principal</span> <span m="3174800">part</span> <span
  m="3175220">of</span> <span m="3175490">the</span> <span
  m="3175580">matrix</span> <span m="3176180">A.</span> <span
  m="3176510">It's</span> <span m="3176690">the</span> <span
  m="3176810">leading</span> <span m="3177320">part</span> <span
  m="3177620">of</span> <span m="3177680">the</span> <span
  m="3177800">matrix</span> <span m="3178330">A.</span> <span
  m="3178530">It's</span> <span m="3180170">the</span> <span
  m="3180350">biggest</span> <span m="3181040">rank</span> <span
  m="3181430">one</span> <span m="3181700">part</span> <span
  m="3182000">of</span> <span m="3182060">the</span> <span
  m="3182150">matrix</span> <span m="3183050">is</span> <span
  m="3183260">there.</span></p><p><span m="3184040">So</span> <span
  m="3184310">computing</span> <span m="3184970">those</span> <span
  m="3185510">three</span> <span m="3185930">guys</span> <span
  m="3186470">is</span> <span m="3186680">the</span> <span
  m="3186800">first</span> <span m="3187190">step</span> <span
  m="3187580">to</span> <span m="3188180">understanding</span> <span
  m="3188900">the</span> <span m="3189020">data.</span> <span
  m="3190250">Yeah.</span> <span m="3190580">So</span> <span
  m="3190820">that's</span> <span m="3191120">what's</span> <span
  m="3191330">coming</span> <span m="3191630">next</span> <span
  m="3192110">is--</span> <span m="3192920">and</span> <span
  m="3193310">I</span> <span m="3193400">guess</span> <span
  m="3193670">tomorrow,</span> <span m="3194180">since</span> <span
  m="3196340">they</span> <span m="3196490">moved--</span> <span
  m="3197230">MIT</span> <span m="3198050">declared</span> <span
  m="3201000">Tuesday</span> <span m="3201560">to</span> <span
  m="3201680">be</span> <span m="3201860">Monday.</span></p><p><span
  m="3204410">They</span> <span m="3204590">didn't</span> <span
  m="3204860">change</span> <span m="3205280">Wednesday.</span> <span
  m="3205860">So</span> <span m="3206150">I'll</span> <span
  m="3206240">see</span> <span m="3206420">you</span> <span
  m="3206510">tomorrow</span> <span m="3207500">for</span> <span
  m="3209120">the</span> <span m="3210680">principal</span> <span
  m="3211250">components.</span> <span m="3212450">Good.</span></p>
embedded_media:
  - uid: 5840355097878d528a16d048ef3e2e3c
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: rYz83XPxiZo
  - uid: 46f3857afae9d62187395c9b3461e306
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/rYz83XPxiZo/default.jpg'
  - uid: c0f3a31223752f2044d3e869ee9195d0
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: rYz83XPxiZo
  - uid: e5828c3ec7520050fe4ca533c3efa91c
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: rYz83XPxiZo.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-6-singular-value-decomposition-svd/rYz83XPxiZo.srt
  - uid: e6d220ed61ce3b1ebe002c67e04b63dd
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: rYz83XPxiZo.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-6-singular-value-decomposition-svd/rYz83XPxiZo.pdf
  - uid: d286804e0fee59eb22e2983fea546cb9
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 133201c774aec50026a1bd0104c82363
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: bc4f64ee2429abaeca3677d3d05dfe42
    parent_uid: 3433b303aa4bd7690c8c1d76a8edfc50
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture06_300k.mp4'
type: courses
layout: video
---
