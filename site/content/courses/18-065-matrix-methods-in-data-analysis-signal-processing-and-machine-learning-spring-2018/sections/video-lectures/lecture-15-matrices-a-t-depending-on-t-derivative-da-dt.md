---
title: 'Lecture 15: Matrices A(t) Depending on t, Derivative = dA/dt '
uid: 3f21d4df9b2f4e82d09f7d32496dc46d
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-15-matrices-a-t-depending-on-t-derivative-da-dt
short_url: lecture-15-matrices-a-t-depending-on-t-derivative-da-dt
inline_embed_id: 29082949lecture15matricesatdependingontderivativedadt47088211
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>This lecture is about changes in
  eigenvalues and changes in singular values. When matrices move, their
  inverses, their eigenvalues, and their singular values change. Professor
  Strang explores the resulting formulas.</p> <h2 class="subhead">Summary</h2>
  <p>Matrices \(A(t)\) depending on \(t / \)Derivative \(= dA/dt\)<br /> The
  eigenvalues have derivative \(y(dA/dt)x\).<em><br /> </em>\(x\) = eigenvector,
  \(y\) = eigenvector of transpose of \(A\)<br /> Eigenvalues from adding
  rank-one matrix are interlaced.</p> <p>Related section in textbook:
  III.1-2</p> <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
related_resources_text: ''
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">OpenCourseWare</span> <span
  m="7520">continue</span> <span m="8029">to</span> <span m="8180">offer</span>
  <span m="8720">high-quality</span> <span m="9200">educational</span> <span
  m="9860">resources</span> <span m="10430">for</span> <span
  m="10550">free.</span> <span m="11610">To</span> <span m="11630">make</span>
  <span m="11840">a</span> <span m="11900">donation</span> <span
  m="12680">or</span> <span m="12800">to</span> <span m="12950">view</span>
  <span m="13160">additional</span> <span m="13550">materials</span> <span
  m="14180">from</span> <span m="14360">hundreds</span> <span
  m="14690">of</span> <span m="14810">MIT</span> <span m="15170">courses,</span>
  <span m="16470">visit</span> <span m="16670">MIT</span> <span
  m="17180">OpenCourseWare</span> <span m="18140">at</span> <span
  m="18290">ocw.mit.edu.</span></p><p><span m="22300">GILBERT STRANG:</span>
  <span m="22385">So</span> <span m="22470">I've</span> <span
  m="22620">worked</span> <span m="22860">hard</span> <span
  m="23100">over</span> <span m="23310">the</span> <span
  m="23400">weekend.</span> <span m="24850">I</span> <span
  m="25260">figured</span> <span m="25620">out</span> <span
  m="25770">what</span> <span m="25980">I</span> <span m="26070">was</span>
  <span m="26280">doing</span> <span m="26550">last</span> <span
  m="26850">time</span> <span m="27150">and</span> <span m="27270">what</span>
  <span m="27450">I'm</span> <span m="27600">doing</span> <span
  m="27900">this</span> <span m="28110">time</span> <span m="29030">and</span>
  <span m="29680">improved</span> <span m="30200">the</span> <span
  m="30360">notes.</span> <span m="31260">So</span> <span
  m="31710">you'll</span> <span m="31950">get</span> <span m="32250">a</span>
  <span m="32549">new</span> <span m="33270">set</span> <span
  m="33570">of</span> <span m="33690">notes</span> <span m="34110">on</span>
  <span m="34350">the</span> <span m="34440">last</span> <span
  m="34860">lecture</span> <span m="36060">and</span> <span m="36480">on</span>
  <span m="36660">this</span> <span m="36930">one.</span> <span
  m="38720">And</span> <span m="38970">I</span> <span m="39300">kind</span>
  <span m="39510">of</span> <span m="40920">got</span> <span m="41460">a</span>
  <span m="41520">better</span> <span m="41790">picture</span> <span
  m="42270">of</span> <span m="42390">what</span> <span m="42780">we're</span>
  <span m="42990">doing.</span> <span m="43770">And</span> <span
  m="44910">that</span> <span m="45210">board</span> <span m="45630">is</span>
  <span m="45870">aiming</span> <span m="46380">to</span> <span
  m="46590">describe</span> <span m="47370">the</span> <span
  m="48120">large</span> <span m="48870">picture</span> <span
  m="49260">of</span> <span m="49380">what</span> <span m="49560">we're</span>
  <span m="49740">doing</span> <span m="50130">last</span> <span
  m="50460">time</span> <span m="50760">and</span> <span m="50880">this</span>
  <span m="51120">time.</span></p><p><span m="52000">So</span> <span
  m="53680">last</span> <span m="54070">time</span> <span m="54400">was</span>
  <span m="54640">about</span> <span m="54940">changes</span> <span
  m="56200">in</span> <span m="56500">A</span> <span m="56800">inverse</span>
  <span m="59120">when</span> <span m="59390">A</span> <span
  m="59660">changed.</span> <span m="61250">This</span> <span
  m="61550">time</span> <span m="62540">is</span> <span m="62720">about</span>
  <span m="63050">changes</span> <span m="63860">in</span> <span
  m="64310">eigenvalues</span> <span m="65810">and</span> <span
  m="66020">changes</span> <span m="66710">in</span> <span
  m="67040">singular</span> <span m="67550">values</span> <span
  m="68120">when</span> <span m="68360">A</span> <span m="68570">change.</span>
  <span m="68890">As</span> <span m="69200">you</span> <span
  m="69620">can</span> <span m="69800">imagine,</span> <span
  m="70280">this</span> <span m="70520">is</span> <span m="70670">a</span> <span
  m="70790">natural</span> <span m="71390">important</span> <span
  m="72200">situation.</span> <span m="73340">Matrices</span> <span
  m="74060">move,</span> <span m="75890">and</span> <span
  m="76850">therefore,</span> <span m="77570">their</span> <span
  m="77870">inverses</span> <span m="78560">change,</span> <span
  m="80060">their</span> <span m="80720">eigenvalues</span> <span
  m="81560">change,</span> <span m="82850">their</span> <span
  m="83300">singular</span> <span m="83870">values</span> <span
  m="84440">change.</span> <span m="85360">And</span> <span m="87080">you</span>
  <span m="87260">hope</span> <span m="87500">for</span> <span
  m="87650">a</span> <span m="87740">formula.</span></p><p><span
  m="88870">Well,</span> <span m="89850">so</span> <span m="90050">we</span>
  <span m="90200">did</span> <span m="90440">have</span> <span
  m="90620">a</span> <span m="90680">formula</span> <span m="92730">for</span>
  <span m="93330">last</span> <span m="93660">time</span> <span
  m="94620">for</span> <span m="94830">the</span> <span m="94980">change</span>
  <span m="95730">in</span> <span m="96600">the</span> <span
  m="96810">inverse</span> <span m="97260">matrix.</span> <span
  m="99730">And</span> <span m="100680">I</span> <span m="100980">didn't</span>
  <span m="101280">get</span> <span m="101520">every</span> <span
  m="102870">u</span> <span m="103140">and</span> <span m="103290">v</span>
  <span m="103590">transpose</span> <span m="104310">in</span> <span
  m="104430">the</span> <span m="104520">right</span> <span
  m="104790">place</span> <span m="105300">in</span> <span m="105450">the</span>
  <span m="105540">video</span> <span m="108600">or</span> <span
  m="108870">in</span> <span m="109020">the</span> <span m="111150">first</span>
  <span m="111510">version</span> <span m="111960">of</span> <span
  m="112050">the</span> <span m="112140">notes,</span> <span
  m="112560">but</span> <span m="112830">I</span> <span m="113040">hope</span>
  <span m="113460">that</span> <span m="114760">that</span> <span
  m="114900">formula,</span> <span m="116310">that</span> <span
  m="116790">that</span> <span m="117060">Woodbury</span> <span
  m="118210">Morrison</span> <span m="119040">formula</span> <span
  m="119640">will</span> <span m="119880">be</span> <span
  m="120150">correct</span> <span m="121500">this</span> <span
  m="121740">time.</span> <span m="126080">So</span> <span m="126330">I</span>
  <span m="126390">won't</span> <span m="126660">go</span> <span
  m="126810">back</span> <span m="127170">over</span> <span
  m="128250">that</span> <span m="128520">part.</span></p><p><span
  m="130740">But</span> <span m="131009">I</span> <span
  m="131190">realize</span> <span m="131670">also</span> <span
  m="132810">there</span> <span m="133470">is</span> <span
  m="133650">another</span> <span m="134010">question</span> <span
  m="134520">that</span> <span m="134640">we</span> <span m="134820">can</span>
  <span m="135240">answer</span> <span m="136350">when</span> <span
  m="136560">the</span> <span m="136680">change</span> <span
  m="137160">is</span> <span m="137370">very</span> <span
  m="137730">small,</span> <span m="139050">when</span> <span
  m="139260">the</span> <span m="139410">change</span> <span
  m="141060">in</span> <span m="141390">A</span> <span m="141960">is</span>
  <span m="143310">dA</span> <span m="144030">or</span> <span
  m="144180">delta</span> <span m="144690">A,</span> <span m="145590">a</span>
  <span m="146070">small</span> <span m="146460">change.</span> <span
  m="147510">And</span> <span m="147630">that's,</span> <span
  m="147930">of</span> <span m="148020">course,</span> <span
  m="148320">what</span> <span m="148500">calculus</span> <span
  m="149100">is</span> <span m="149280">about.</span> <span m="150590">So</span>
  <span m="150800">I</span> <span m="150860">have</span> <span
  m="151040">to</span> <span m="152220">sort</span> <span m="152440">of</span>
  <span m="152500">parallel</span> <span m="155300">topics</span> <span
  m="155840">here.</span> <span m="157370">What</span> <span
  m="157610">is</span> <span m="157910">the</span> <span
  m="158060">derivative</span> <span m="160740">when</span> <span
  m="160980">the</span> <span m="161290">change</span> <span
  m="164950">is</span> <span m="165240">infinitesimal?</span> <span
  m="166770">And</span> <span m="167040">what</span> <span m="167340">is</span>
  <span m="167640">the</span> <span m="168630">actual</span> <span
  m="169170">change</span> <span m="169830">when</span> <span
  m="170130">the</span> <span m="170310">change</span> <span
  m="170880">is</span> <span m="172470">finite</span> <span
  m="172980">size?</span></p><p><span m="175590">So</span> <span
  m="175920">now,</span> <span m="176190">let</span> <span m="176310">me</span>
  <span m="176460">say</span> <span m="176790">what</span> <span
  m="177720">we</span> <span m="177900">can</span> <span m="178080">do</span>
  <span m="178260">and</span> <span m="178380">what</span> <span
  m="178560">we</span> <span m="178680">can't</span> <span m="179010">do.</span>
  <span m="182890">Oh,</span> <span m="183220">I'll</span> <span
  m="184060">start</span> <span m="184390">out</span> <span m="184750">by</span>
  <span m="185500">figuring</span> <span m="186010">out</span> <span
  m="186250">what</span> <span m="186470">the</span> <span
  m="186610">derivative</span> <span m="187210">is</span> <span
  m="188140">for</span> <span m="188350">the</span> <span
  m="188530">inverse.</span> <span m="188980">So</span> <span
  m="189220">that's</span> <span m="189550">like</span> <span
  m="189910">completing</span> <span m="190600">the</span> <span
  m="190690">last</span> <span m="191050">time</span> <span
  m="191890">for</span> <span m="192160">infinitesimal</span> <span
  m="193060">changes.</span> <span m="194320">Then</span> <span
  m="194680">I'll</span> <span m="194800">move</span> <span m="195190">on</span>
  <span m="195580">to</span> <span m="196750">changes</span> <span
  m="197440">in</span> <span m="197680">the</span> <span
  m="198640">eigenvalues</span> <span m="199330">and</span> <span
  m="199450">singular</span> <span m="199960">values.</span> <span
  m="201220">And</span> <span m="201400">there,</span> <span
  m="203170">you</span> <span m="203380">cannot</span> <span
  m="203800">expect</span> <span m="204250">an</span> <span
  m="204370">exact</span> <span m="204760">formula.</span> <span
  m="206330">We</span> <span m="207500">had</span> <span m="207650">a</span>
  <span m="207860">formula</span> <span m="208430">that</span> <span
  m="208580">was</span> <span m="208820">exact,</span> <span
  m="209990">apart</span> <span m="210350">from</span> <span
  m="210920">any</span> <span m="211160">typos,</span> <span
  m="212240">for</span> <span m="212420">this.</span> <span
  m="213110">And</span> <span m="213230">we'll</span> <span
  m="213410">find</span> <span m="213740">a</span> <span
  m="213800">formula</span> <span m="214250">for</span> <span
  m="214430">this,</span> <span m="214790">and</span> <span
  m="214940">we'll</span> <span m="215090">find</span> <span m="215390">a</span>
  <span m="215420">formula</span> <span m="215870">for</span> <span
  m="216050">that</span> <span m="216350">and</span> <span m="216620">for</span>
  <span m="216800">that.</span> <span m="217520">Well,</span> <span
  m="218180">that</span> <span m="218390">one</span> <span
  m="218570">will</span> <span m="218720">come</span> <span
  m="218960">from</span> <span m="219170">this</span> <span
  m="219410">one.</span> <span m="219940">So</span> <span m="220580">this</span>
  <span m="220820">will</span> <span m="220970">be</span> <span
  m="221150">a</span> <span m="221240">highlight</span> <span
  m="221780">today.</span> <span m="223580">How</span> <span
  m="223760">do</span> <span m="223880">the</span> <span
  m="224030">eigenvalues</span> <span m="224900">change</span> <span
  m="225410">when</span> <span m="225620">the</span> <span
  m="225710">matrix</span> <span m="226250">changes?</span></p><p><span
  m="229170">But</span> <span m="229860">we</span> <span m="230070">won't</span>
  <span m="230310">be</span> <span m="230490">able</span> <span
  m="230730">to</span> <span m="231540">do</span> <span
  m="231810">parallel</span> <span m="232290">to</span> <span
  m="232440">this,</span> <span m="232710">we</span> <span
  m="232920">won't</span> <span m="233130">be</span> <span
  m="233280">able</span> <span m="233490">to--</span> <span
  m="234310">oh,</span> <span m="234720">we</span> <span m="234930">will</span>
  <span m="235290">be</span> <span m="235470">able</span> <span
  m="235680">to</span> <span m="235740">do</span> <span
  m="235920">something</span> <span m="236790">for</span> <span
  m="237000">finite</span> <span m="237420">changes.</span> <span
  m="238770">That's</span> <span m="238950">important.</span> <span
  m="239490">Mathematics</span> <span m="240240">would</span> <span
  m="240900">have</span> <span m="241140">to</span> <span m="241260">keep</span>
  <span m="242220">hitting</span> <span m="242580">that</span> <span
  m="242790">problem</span> <span m="243090">until</span> <span
  m="243420">it</span> <span m="243510">got</span> <span
  m="243720">somewhere.</span> <span m="244860">So</span> <span
  m="245250">I</span> <span m="245370">won't</span> <span m="245610">get</span>
  <span m="245880">an</span> <span m="246000">exact</span> <span
  m="246450">formula</span> <span m="246990">for</span> <span
  m="247140">that</span> <span m="247260">change.</span> <span
  m="247770">That's</span> <span m="248040">too</span> <span
  m="248250">much.</span></p><p><span m="249000">But</span> <span
  m="249270">I'll</span> <span m="250530">get</span> <span
  m="251100">inequalities.</span> <span m="252030">How</span> <span
  m="252360">big</span> <span m="252690">that</span> <span
  m="252870">change</span> <span m="253260">could</span> <span
  m="253440">be.</span> <span m="253710">What</span> <span m="253920">can</span>
  <span m="254130">I</span> <span m="254250">say</span> <span
  m="254550">about</span> <span m="254880">it?</span> <span m="255580">So</span>
  <span m="255960">these</span> <span m="256290">are</span> <span
  m="257910">highly</span> <span m="258390">interesting.</span></p><p><span
  m="259769">May</span> <span m="259950">I</span> <span m="260040">start</span>
  <span m="260430">with</span> <span m="261779">completing</span> <span
  m="262410">the</span> <span m="262530">last</span> <span
  m="262890">lecture?</span> <span m="263670">What</span> <span
  m="263880">is</span> <span m="264090">the</span> <span
  m="264240">derivative</span> <span m="264840">of</span> <span
  m="264960">the</span> <span m="265140">inverse?</span> <span
  m="266400">So</span> <span m="266520">I'm</span> <span
  m="266670">thinking</span> <span m="267060">here,</span> <span
  m="268640">so</span> <span m="268830">what's</span> <span
  m="269070">the</span> <span m="269190">setup?</span> <span
  m="270420">The</span> <span m="270510">setup</span> <span m="270930">is</span>
  <span m="272460">my</span> <span m="272670">matrix</span> <span
  m="273210">A</span> <span m="276450">depends</span> <span m="276960">on</span>
  <span m="277200">time,</span> <span m="277860">on</span> <span
  m="278070">t.</span> <span m="281290">And</span> <span m="283430">it</span>
  <span m="283610">has</span> <span m="283850">an</span> <span
  m="284000">inverse.</span> <span m="285030">A</span> <span
  m="285470">inverse</span> <span m="286880">depends</span> <span
  m="287360">on</span> <span m="287570">t.</span></p><p><span
  m="289940">And</span> <span m="290090">if</span> <span m="290240">I</span>
  <span m="290360">know</span> <span m="290600">this</span> <span
  m="290870">dependence,</span> <span m="291620">in</span> <span
  m="291740">other</span> <span m="291920">words,</span> <span
  m="292230">if</span> <span m="292280">I</span> <span m="292400">know</span>
  <span m="292730">dA</span> <span m="293200">dt,</span> <span
  m="294140">how</span> <span m="295940">the</span> <span
  m="296090">matrix</span> <span m="296630">is</span> <span
  m="296780">depending</span> <span m="297260">on</span> <span
  m="297380">t,</span> <span m="297950">then</span> <span m="298190">I</span>
  <span m="298340">hope</span> <span m="298640">I</span> <span
  m="298730">could</span> <span m="298940">figure</span> <span
  m="299360">out</span> <span m="299600">what</span> <span m="299840">the</span>
  <span m="300470">derivative</span> <span m="301220">of</span> <span
  m="301460">A</span> <span m="301640">inverse</span> <span
  m="302150">is.</span> <span m="304010">We</span> <span
  m="304160">should</span> <span m="304340">be</span> <span
  m="304460">able</span> <span m="304670">to</span> <span m="304760">do</span>
  <span m="304970">this.</span> <span m="306360">So</span> <span
  m="306440">let</span> <span m="306590">me</span> <span m="306710">just</span>
  <span m="306980">start</span> <span m="307400">with--</span> <span
  m="308630">it's</span> <span m="309050">not</span> <span
  m="309260">hard</span> <span m="310160">and</span> <span m="310370">it</span>
  <span m="311420">complements</span> <span m="312680">this</span> <span
  m="312980">one</span> <span m="313310">by</span> <span m="314330">doing</span>
  <span m="314600">the</span> <span m="314720">calculus</span> <span
  m="315640">case,</span> <span m="316870">the</span> <span
  m="317090">infinitesimal</span> <span m="317990">change.</span> <span
  m="318770">So</span> <span m="320450">I</span> <span m="320810">want</span>
  <span m="321020">to</span> <span m="321080">get</span> <span
  m="321260">to</span> <span m="321410">that.</span></p><p><span
  m="327170">I</span> <span m="327590">can</span> <span m="327770">figure</span>
  <span m="328100">out</span> <span m="328280">the</span> <span
  m="328400">change</span> <span m="328820">in</span> <span m="328970">A.</span>
  <span m="329420">And</span> <span m="329900">my</span> <span
  m="330110">job</span> <span m="330530">is</span> <span m="330710">to</span>
  <span m="330860">find</span> <span m="336110">the</span> <span
  m="336560">derivative</span> <span m="338720">of</span> <span
  m="340735">A</span> <span m="341200">inverse.</span> <span
  m="343010">So</span> <span m="343240">here's</span> <span m="344280">a</span>
  <span m="344390">handy</span> <span m="348640">identity.</span> <span
  m="350720">Can</span> <span m="351220">I</span> <span m="351310">just</span>
  <span m="352210">put</span> <span m="352420">this</span> <span
  m="352750">here?</span> <span m="353090">So</span> <span
  m="353200">here's</span> <span m="353440">my</span> <span
  m="354010">usual</span> <span m="354520">identity.</span></p><p><span
  m="360150">So</span> <span m="360370">as</span> <span m="360580">last</span>
  <span m="360910">time,</span> <span m="361870">I</span> <span
  m="361990">start</span> <span m="362320">with</span> <span m="362860">a</span>
  <span m="362990">finite</span> <span m="363400">change</span> <span
  m="363890">because</span> <span m="364060">calculus</span> <span
  m="364630">always</span> <span m="364930">does</span> <span
  m="365170">that,</span> <span m="365410">right.</span> <span
  m="365935">It</span> <span m="366190">starts</span> <span
  m="366550">with</span> <span m="366760">a</span> <span m="366850">delta</span>
  <span m="367540">t</span> <span m="368320">and</span> <span
  m="368470">then</span> <span m="368650">it</span> <span m="368830">goes</span>
  <span m="369250">to</span> <span m="369370">0.</span> <span
  m="370000">So</span> <span m="370570">here</span> <span m="370750">I</span>
  <span m="370910">am</span> <span m="370990">up</span> <span
  m="371200">at</span> <span m="371340">a</span> <span m="372190">full</span>
  <span m="372460">size</span> <span m="372880">change.</span> <span
  m="373820">So</span> <span m="373930">I</span> <span m="374050">think</span>
  <span m="374320">that</span> <span m="374440">this</span> <span
  m="374680">is</span> <span m="374830">equal</span> <span m="375160">to</span>
  <span m="375310">B</span> <span m="375610">inverse</span> <span
  m="378370">A</span> <span m="378880">minus</span> <span m="379450">B</span>
  <span m="381580">A</span> <span m="382000">inverse.</span> <span
  m="384550">And</span> <span m="387190">if</span> <span m="387370">it's</span>
  <span m="387580">true,</span> <span m="387910">it's</span> <span
  m="388120">a</span> <span m="388180">pretty</span> <span
  m="388450">cool</span> <span m="388810">formula.</span></p><p><span
  m="390340">And,</span> <span m="390520">look,</span> <span
  m="390790">it</span> <span m="390910">is</span> <span m="391120">true,</span>
  <span m="392350">because</span> <span m="392740">over</span> <span
  m="393010">on</span> <span m="393100">this</span> <span
  m="393310">right-hand</span> <span m="393760">side,</span> <span
  m="394190">I</span> <span m="394210">have</span> <span m="394420">B</span>
  <span m="394690">inverse</span> <span m="395560">times</span> <span
  m="395745">A</span> <span m="395837">A</span> <span m="395930">inverse.</span>
  <span m="396880">That's</span> <span m="397040">the</span> <span
  m="397180">identity.</span> <span m="397780">So</span> <span
  m="397960">that's</span> <span m="398200">my</span> <span m="398380">B</span>
  <span m="398590">inverse.</span> <span m="399640">And</span> <span
  m="399790">I</span> <span m="399910">have</span> <span m="400030">the</span>
  <span m="400150">minus,</span> <span m="401170">the</span> <span
  m="401260">B</span> <span m="401470">inverse</span> <span m="401890">B</span>
  <span m="402190">is</span> <span m="402340">the</span> <span
  m="402490">identity.</span> <span m="403180">There's</span> <span
  m="403540">A</span> <span m="403720">inverse.</span> <span
  m="404230">It's</span> <span m="404410">good,</span> <span
  m="404680">right?</span></p><p><span m="406690">So</span> <span
  m="409720">from</span> <span m="409990">that,</span> <span
  m="411030">well,</span> <span m="411460">I</span> <span
  m="411580">could</span> <span m="411790">actually</span> <span
  m="412180">learn</span> <span m="412510">from</span> <span
  m="412720">that</span> <span m="413590">the</span> <span
  m="416260">rank</span> <span m="416650">of</span> <span m="416770">this</span>
  <span m="421060">equals</span> <span m="423250">the</span> <span
  m="423370">rank</span> <span m="423730">of</span> <span
  m="423820">this.</span> <span m="428320">That's</span> <span
  m="428550">a</span> <span m="428610">point</span> <span m="428940">that</span>
  <span m="429120">I</span> <span m="429240">made</span> <span
  m="429630">from</span> <span m="430080">the</span> <span m="430620">big</span>
  <span m="430860">formula.</span> <span m="431340">But</span> <span
  m="431490">now,</span> <span m="431730">we</span> <span m="431850">can</span>
  <span m="432030">see</span> <span m="432240">it</span> <span
  m="432330">from</span> <span m="432450">an</span> <span m="432570">easy</span>
  <span m="432990">formula.</span> <span m="437310">Everywhere</span> <span
  m="437880">here,</span> <span m="438180">I'm</span> <span
  m="438390">assuming</span> <span m="438840">that</span> <span
  m="439020">A</span> <span m="439155">and</span> <span m="439290">B</span>
  <span m="439440">are</span> <span m="439590">invertible</span> <span
  m="440220">matrices.</span> <span m="441300">So</span> <span
  m="441450">when</span> <span m="441600">I</span> <span
  m="441690">multiply</span> <span m="442230">by</span> <span
  m="442470">an</span> <span m="442590">invertible</span> <span
  m="443160">matrix,</span> <span m="444300">that</span> <span
  m="444510">does</span> <span m="444720">not</span> <span
  m="444960">change</span> <span m="445380">the</span> <span
  m="445500">rank.</span> <span m="446530">So</span> <span
  m="447450">those</span> <span m="447780">have</span> <span
  m="447990">the</span> <span m="448080">same</span> <span
  m="448350">ranks.</span></p><p><span m="448770">But</span> <span
  m="449760">I</span> <span m="449850">want</span> <span m="450000">to</span>
  <span m="450090">get</span> <span m="450330">further</span> <span
  m="450750">than</span> <span m="450930">that.</span> <span m="451650">I</span>
  <span m="451770">want</span> <span m="451950">to</span> <span
  m="452010">find</span> <span m="452370">this.</span> <span
  m="455220">So</span> <span m="455760">how</span> <span m="455970">do</span>
  <span m="456120">I</span> <span m="456210">go?</span> <span
  m="457380">How</span> <span m="457530">do</span> <span m="457680">I</span>
  <span m="457770">go</span> <span m="457950">forward</span> <span
  m="458430">with</span> <span m="458640">that</span> <span
  m="458880">job</span> <span m="460820">to</span> <span m="461060">find</span>
  <span m="461420">the</span> <span m="462020">derivative</span> <span
  m="462560">of</span> <span m="462650">the</span> <span
  m="462770">inverse?</span></p><p><span m="463350">Well,</span> <span
  m="465950">I'm</span> <span m="466300">going</span> <span m="466450">to</span>
  <span m="466520">call</span> <span m="466850">this</span> <span
  m="467920">a</span> <span m="468020">change</span> <span m="469280">in</span>
  <span m="469490">A</span> <span m="469710">inverse.</span> <span
  m="471660">And</span> <span m="471890">over</span> <span
  m="472130">here,</span> <span m="473330">I'll</span> <span
  m="473480">have</span> <span m="474980">B</span> <span m="475430">will</span>
  <span m="475730">be--</span> <span m="478810">yeah,</span> <span
  m="479950">OK,</span> <span m="480925">let's</span> <span
  m="481390">see,</span> <span m="481870">am</span> <span m="482020">I</span>
  <span m="482590">right?</span> <span m="482920">Yeah.</span></p><p><span
  m="483670">So</span> <span m="483910">B</span> <span m="484190">inverse</span>
  <span m="485180">will</span> <span m="485500">be--</span> <span
  m="487630">this</span> <span m="489130">is</span> <span m="489340">A</span>
  <span m="489730">plus</span> <span m="490660">delta</span> <span
  m="491080">A</span> <span m="492730">inverse.</span> <span
  m="494680">And</span> <span m="494860">this</span> <span
  m="495160">is--</span> <span m="496340">well,</span> <span
  m="496610">that's</span> <span m="496870">A</span> <span
  m="497200">minus</span> <span m="497710">B.</span> <span m="498010">So</span>
  <span m="498220">that's</span> <span m="498460">really</span> <span
  m="498850">minus</span> <span m="499660">delta</span> <span
  m="500050">A.</span> <span m="507160">From</span> <span m="507460">A</span>
  <span m="507610">to</span> <span m="507700">B</span> <span
  m="508450">is</span> <span m="508660">the</span> <span
  m="508780">change.</span> <span m="509680">Here,</span> <span
  m="509890">I'm</span> <span m="510070">looking</span> <span
  m="510460">at</span> <span m="511810">the</span> <span
  m="511930">difference</span> <span m="512409">A</span> <span
  m="512679">minus</span> <span m="513159">B.</span> <span m="513429">So</span>
  <span m="513669">it's</span> <span m="513820">minus</span> <span
  m="514309">a</span> <span m="514390">change.</span> <span
  m="515049">And</span> <span m="515200">here,</span> <span m="515409">I</span>
  <span m="515530">have</span> <span m="515799">A</span> <span
  m="516130">inverse.</span> <span m="517960">I</span> <span
  m="518020">haven't</span> <span m="518200">done</span> <span
  m="518440">anything</span> <span m="520690">except</span> <span
  m="521140">to</span> <span m="522520">introduce</span> <span
  m="523100">this</span> <span m="523330">delta</span> <span
  m="525640">and</span> <span m="525760">get</span> <span m="525970">B</span>
  <span m="526240">out</span> <span m="526450">of</span> <span
  m="526570">it</span> <span m="526690">and</span> <span
  m="526810">brought</span> <span m="527050">delta</span> <span
  m="527410">in.</span></p><p><span m="529240">Now,</span> <span
  m="529510">I'm</span> <span m="529650">going</span> <span m="529730">to</span>
  <span m="529830">do</span> <span m="529990">calculus.</span> <span
  m="532130">So</span> <span m="532340">I'm</span> <span
  m="532520">thinking</span> <span m="532940">of</span> <span
  m="533150">B</span> <span m="533660">as</span> <span m="537140">there's</span>
  <span m="537440">a</span> <span m="538400">sort</span> <span
  m="538640">of</span> <span m="538790">a</span> <span m="538850">delta</span>
  <span m="539270">t.</span> <span m="540220">And</span> <span
  m="540380">I'm</span> <span m="540500">going</span> <span m="540590">to</span>
  <span m="540710">divide</span> <span m="541160">by</span> <span
  m="541730">both</span> <span m="541970">sides</span> <span
  m="542360">by</span> <span m="542570">delta</span> <span m="542960">t.</span>
  <span m="544370">I</span> <span m="544460">have</span> <span
  m="544640">to</span> <span m="544760">do</span> <span m="544940">this</span>
  <span m="545210">if</span> <span m="545360">I</span> <span
  m="545510">want--</span> <span m="549200">and</span> <span
  m="549440">now,</span> <span m="549740">I'll</span> <span
  m="549890">let</span> <span m="552410">delta</span> <span m="552800">t</span>
  <span m="553820">go</span> <span m="554030">to</span> <span
  m="554120">0.</span> <span m="554840">So</span> <span
  m="555980">calculus</span> <span m="556670">appears.</span> <span
  m="559790">Finally,</span> <span m="560390">our--</span> <span
  m="565280">I</span> <span m="565580">won't</span> <span m="565910">say</span>
  <span m="566210">enemy</span> <span m="566720">calculus,</span> <span
  m="567390">but</span> <span m="568130">there</span> <span m="568280">is</span>
  <span m="568400">a</span> <span m="568460">sort</span> <span
  m="568730">of</span> <span m="568940">like</span> <span
  m="570860">competition</span> <span m="571730">between</span> <span
  m="572870">linear</span> <span m="573230">algebra</span> <span
  m="573710">and</span> <span m="573800">calculus</span> <span
  m="574520">for</span> <span m="577400">college</span> <span
  m="577790">mathematics.</span> <span m="579700">Calculus</span> <span
  m="580300">has</span> <span m="580570">had</span> <span m="580840">far,</span>
  <span m="581290">far</span> <span m="581650">too</span> <span
  m="581860">much</span> <span m="582460">time</span> <span
  m="582850">and</span> <span m="582970">attention.</span> <span
  m="584260">It</span> <span m="584620">like</span> <span m="584890">it</span>
  <span m="585040">gets</span> <span m="585520">three</span> <span
  m="585910">or</span> <span m="586030">four</span> <span
  m="586330">semesters</span> <span m="586930">of</span> <span
  m="587050">calculus</span> <span m="588100">for</span> <span
  m="588250">people</span> <span m="588550">who</span> <span
  m="588670">don't</span> <span m="588910">get</span> <span
  m="589120">any</span> <span m="589360">linear</span> <span
  m="589720">algebra.</span> <span m="590440">I'm</span> <span
  m="590590">glad</span> <span m="590890">this</span> <span
  m="591100">won't</span> <span m="591340">be</span> <span m="591460">on</span>
  <span m="591580">the</span> <span m="591670">video,</span> <span
  m="592120">but</span> <span m="592270">I'm</span> <span
  m="592420">afraid</span> <span m="592750">it</span> <span
  m="592810">will.</span></p><p><span m="595960">Anyway,</span> <span
  m="596590">of</span> <span m="596740">course,</span> <span
  m="597070">calculus</span> <span m="597610">is</span> <span
  m="597760">fine</span> <span m="598120">in</span> <span m="598240">its</span>
  <span m="598450">place.</span> <span m="599680">So</span> <span
  m="599860">here's</span> <span m="600130">its</span> <span
  m="600310">place.</span> <span m="601450">Now</span> <span
  m="601690">let</span> <span m="602350">delta</span> <span m="602800">t</span>
  <span m="603040">go</span> <span m="603250">to</span> <span
  m="603340">0.</span> <span m="604270">So</span> <span m="604450">what</span>
  <span m="604660">does</span> <span m="604810">this</span> <span
  m="605050">equation</span> <span m="605590">become?</span></p><p><span
  m="611750">Then</span> <span m="611930">everybody</span> <span
  m="612400">knows</span> <span m="612820">that</span> <span
  m="613760">as</span> <span m="613930">the</span> <span m="614090">limit
  of</span> <span m="614570">delta</span> <span m="614980">t</span> <span
  m="615250">goes</span> <span m="615550">to</span> <span m="615640">0,</span>
  <span m="616510">I</span> <span m="616640">replace</span> <span
  m="617290">deltas</span> <span m="617920">by--</span> <span
  m="620560">so</span> <span m="620770">this</span> <span
  m="621130">delta</span> <span m="621610">A</span> <span
  m="621910">divided</span> <span m="622360">by</span> <span
  m="622540">delta</span> <span m="622900">t</span> <span m="623200">that</span>
  <span m="623440">has</span> <span m="623710">a</span> <span
  m="623770">meaning.</span> <span m="625270">The</span> <span
  m="625420">top</span> <span m="625720">has</span> <span m="625900">a</span>
  <span m="625960">meaning</span> <span m="626320">and</span> <span
  m="626410">the</span> <span m="626500">bottom</span> <span
  m="626860">has</span> <span m="627050">for</span> <span m="627110">me.</span>
  <span m="628940">But</span> <span m="629020">then</span> <span
  m="629430">the</span> <span m="629550">limit,</span> <span
  m="631050">it's</span> <span m="631260">the</span> <span
  m="631320">ratio</span> <span m="631890">that</span> <span
  m="632040">has</span> <span m="632310">a</span> <span
  m="632370">meaning.</span></p><p><span m="633580">So</span> <span
  m="633690">dA</span> <span m="634350">by</span> <span
  m="634560">itself,</span> <span m="635160">I</span> <span
  m="635280">don't</span> <span m="635580">attach</span> <span
  m="636030">a</span> <span m="636480">meaning</span> <span m="636870">to</span>
  <span m="637080">that.</span> <span m="637255">That's</span> <span
  m="637430">infinitesimal.</span> <span m="638790">It's</span> <span
  m="639000">the</span> <span m="639120">limit,</span> <span
  m="639600">so</span> <span m="639990">that's</span> <span
  m="640230">why</span> <span m="640440">I</span> <span m="640530">wanted</span>
  <span m="640950">a</span> <span m="641040">delta</span> <span
  m="641520">over</span> <span m="641840">a</span> <span m="641940">delta</span>
  <span m="642720">so</span> <span m="642840">I</span> <span
  m="642930">could</span> <span m="643080">do</span> <span
  m="643260">calculus.</span> <span m="644160">So</span> <span
  m="644340">what</span> <span m="644550">happens</span> <span
  m="645000">now</span> <span m="645300">is</span> <span m="645480">delta</span>
  <span m="645900">t</span> <span m="646200">goes</span> <span
  m="646500">to</span> <span m="646620">0.</span> <span m="647070">And,</span>
  <span m="647190">of</span> <span m="647280">course,</span> <span
  m="647870">as</span> <span m="648150">delta</span> <span m="648580">t</span>
  <span m="648810">goes</span> <span m="649110">to</span> <span
  m="649170">0,</span> <span m="649500">that</span> <span
  m="649650">carries</span> <span m="650190">delta</span> <span
  m="650580">A</span> <span m="650880">to</span> <span m="650940">0.</span>
  <span m="651720">So</span> <span m="651900">that</span> <span
  m="652080">becomes</span> <span m="652620">A</span> <span
  m="652830">inverse.</span></p><p><span m="655980">And</span> <span
  m="656140">what</span> <span m="656380">does</span> <span
  m="656620">this</span> <span m="656920">approach</span> <span
  m="657940">as</span> <span m="658210">delta</span> <span m="658600">t</span>
  <span m="658870">goes</span> <span m="659170">to</span> <span
  m="659290">0?</span> <span m="661390">dA</span> <span m="661760">dt</span>
  <span m="662500">with</span> <span m="662800">that</span> <span
  m="663010">minus</span> <span m="663400">sign.</span> <span
  m="663710">Oh,</span> <span m="664030">I've</span> <span m="664150">got</span>
  <span m="664340">to</span> <span m="664990">remember</span> <span
  m="665410">the</span> <span m="665530">minus</span> <span
  m="665840">sign.</span> <span m="666650">The</span> <span
  m="667090">minus</span> <span m="667430">sign</span> <span
  m="667630">is</span> <span m="667830">in</span> <span m="667980">here.</span>
  <span m="669890">So</span> <span m="670160">I'm</span> <span
  m="670400">bringing</span> <span m="670700">out</span> <span
  m="670910">the</span> <span m="671030">minus</span> <span
  m="671360">sign.</span></p><p><span m="672060">Then</span> <span
  m="672290">this</span> <span m="672530">was</span> <span m="673220">A</span>
  <span m="673400">inverse,</span> <span m="674090">as</span> <span
  m="674270">we</span> <span m="674420">had.</span> <span m="675380">And</span>
  <span m="675620">that's</span> <span m="676070">dA</span> <span
  m="676500">dt.</span> <span m="680000">And</span> <span
  m="680150">that's</span> <span m="680450">A</span> <span
  m="680950">inverse.</span> <span m="682310">That's</span> <span
  m="682610">our</span> <span m="682730">formula,</span> <span
  m="684890">a</span> <span m="684950">nice</span> <span
  m="685310">formula,</span> <span m="686660">which</span> <span
  m="688130">sort</span> <span m="688370">of</span> <span
  m="688610">belongs</span> <span m="689960">in</span> <span
  m="690200">people's</span> <span m="690650">knowledge.</span></p><p><span
  m="692150">You</span> <span m="692510">recognize</span> <span
  m="693230">that</span> <span m="693410">if</span> <span m="694400">A</span>
  <span m="694850">was</span> <span m="695270">a</span> <span
  m="695360">1</span> <span m="695630">by</span> <span m="695840">1</span> <span
  m="696110">matrix,</span> <span m="698250">we</span> <span
  m="698400">could</span> <span m="698580">call</span> <span
  m="698850">it</span> <span m="699030">x,</span> <span
  m="699600">instead</span> <span m="699960">of</span> <span
  m="700110">A.</span> <span m="701850">If</span> <span m="702240">A</span>
  <span m="702840">was</span> <span m="702990">a</span> <span
  m="703050">1</span> <span m="703320">by</span> <span m="703500">1</span> <span
  m="703740">matrix</span> <span m="704280">x,</span> <span
  m="705060">then</span> <span m="705240">I'm</span> <span
  m="705420">saying</span> <span m="705870">the</span> <span
  m="705990">formula</span> <span m="706530">for</span> <span
  m="706710">the</span> <span m="706890">derivative</span> <span
  m="707550">of</span> <span m="709570">1</span> <span m="709830">over</span>
  <span m="710160">x,</span> <span m="710580">right?</span> <span
  m="711570">A</span> <span m="711820">inverse</span> <span
  m="712830">just</span> <span m="713200">1</span> <span m="713460">by</span>
  <span m="713670">1</span> <span m="713910">case</span> <span
  m="714360">is</span> <span m="714540">just</span> <span m="714810">1</span>
  <span m="715080">over</span> <span m="715350">x.</span> <span
  m="716010">So</span> <span m="716190">the</span> <span
  m="716340">derivative</span> <span m="716880">of</span> <span
  m="717000">1--</span> <span m="717180">or</span> <span m="717510">maybe</span>
  <span m="717860">t,</span> <span m="718350">I</span> <span
  m="718470">should</span> <span m="718650">be</span> <span
  m="718830">saying.</span></p><p><span m="720120">If</span> <span
  m="720720">A</span> <span m="720960">is</span> <span m="721140">just</span>
  <span m="721440">t,</span> <span m="722460">then</span> <span
  m="722760">the</span> <span m="722880">derivative</span> <span
  m="724170">of</span> <span m="724440">1</span> <span m="724770">over</span>
  <span m="725040">t</span> <span m="725430">with</span> <span
  m="725580">respect</span> <span m="725910">to</span> <span m="726030">t</span>
  <span m="726870">is....?</span> <span m="729790">Is</span> <span
  m="730150">minus</span> <span m="730660">1</span> <span m="730900">over</span>
  <span m="731080">t</span> <span m="731300">squared.</span> <span
  m="735580">The</span> <span m="735730">1</span> <span m="735940">by</span>
  <span m="736090">1</span> <span m="736330">case</span> <span
  m="736720">we</span> <span m="737710">know.</span> <span
  m="738010">That's</span> <span m="738250">what</span> <span
  m="738400">calculus</span> <span m="738940">does.</span> <span
  m="739330">And</span> <span m="739420">now</span> <span
  m="739630">we're</span> <span m="740140">able</span> <span
  m="740440">to</span> <span m="740560">do</span> <span m="740980">the</span>
  <span m="741350">n</span> <span m="741580">by</span> <span m="741820">n</span>
  <span m="742090">case.</span> <span m="743640">So</span> <span
  m="744310">that's</span> <span m="744690">just</span> <span
  m="745020">like</span> <span m="745670">good.</span></p><p><span
  m="746520">And</span> <span m="746640">then</span> <span
  m="748590">it's</span> <span m="748820">sort</span> <span m="748960">of</span>
  <span m="749100">parallel</span> <span m="750540">to</span> <span
  m="751080">formulas</span> <span m="751680">like</span> <span
  m="751980">this,</span> <span m="753090">where</span> <span
  m="753330">this</span> <span m="753660">delta</span> <span m="754200">A</span>
  <span m="755100">has</span> <span m="755910">not</span> <span
  m="756210">gone</span> <span m="756430">to</span> <span m="756600">0.</span>
  <span m="757020">It's</span> <span m="757710">full</span> <span
  m="757950">size,</span> <span m="758670">but</span> <span
  m="758880">low</span> <span m="759180">rank.</span> <span
  m="759990">That</span> <span m="760110">was</span> <span m="760290">the</span>
  <span m="760410">point.</span> <span m="761280">Actually,</span> <span
  m="761670">the</span> <span m="761790">formula</span> <span
  m="762240">would</span> <span m="762870">apply</span> <span
  m="763260">if</span> <span m="763410">the</span> <span m="763530">rank</span>
  <span m="763830">wasn't</span> <span m="764190">low.</span> <span
  m="764880">But</span> <span m="765060">the</span> <span
  m="765270">interest</span> <span m="765810">is</span> <span
  m="766080">in</span> <span m="766710">low</span> <span m="766950">rank</span>
  <span m="767550">here.</span></p><p><span m="768870">Are</span> <span
  m="768990">we</span> <span m="769140">good</span> <span m="769440">for</span>
  <span m="769620">this?</span> <span m="770130">That's</span> <span
  m="770400">really</span> <span m="770700">the</span> <span
  m="770820">completion</span> <span m="771480">of</span> <span
  m="771600">last</span> <span m="771930">time's</span> <span
  m="772830">lecture</span> <span m="773370">with</span> <span
  m="775440">derivatives.</span></p><p><span m="777500">OK,</span> <span
  m="777870">come</span> <span m="778470">back</span> <span m="778710">to</span>
  <span m="778830">here,</span> <span m="780090">to</span> <span
  m="780330">the</span> <span m="780450">new</span> <span
  m="780690">thing</span> <span m="780960">now,</span> <span
  m="781440">lambdas.</span> <span m="782530">Let's</span> <span
  m="782760">focus</span> <span m="783180">on</span> <span
  m="783390">lambdas,</span> <span m="783930">eigenvalues.</span> <span
  m="785280">How</span> <span m="785490">does</span> <span m="785700">the</span>
  <span m="785820">eigenvalue</span> <span m="786630">change</span> <span
  m="787800">when</span> <span m="788010">the</span> <span
  m="788100">matrix</span> <span m="788640">changes?</span> <span
  m="789960">How</span> <span m="790110">does</span> <span m="790260">the</span>
  <span m="790380">eigenvalue</span> <span m="791040">change</span> <span
  m="791460">when</span> <span m="791640">the</span> <span
  m="791730">matrix</span> <span m="792210">changes?</span></p><p><span
  m="792960">So</span> <span m="793080">I</span> <span m="793200">have</span>
  <span m="793350">two</span> <span m="794970">possibilities.</span> <span
  m="796150">One</span> <span m="796410">is</span> <span m="797100">small</span>
  <span m="797460">change</span> <span m="798570">when</span> <span
  m="798720">I'm</span> <span m="798840">doing</span> <span
  m="799110">calculus</span> <span m="799860">and</span> <span
  m="799980">I'm</span> <span m="800130">letting</span> <span
  m="800460">a</span> <span m="800520">delta</span> <span m="800880">t</span>
  <span m="801150">go</span> <span m="801330">to</span> <span
  m="801450">0.</span> <span m="802530">The</span> <span m="802680">other</span>
  <span m="803010">is</span> <span m="805020">full</span> <span
  m="805410">size,</span> <span m="805980">order</span> <span
  m="806280">1</span> <span m="806670">change,</span> <span
  m="807570">where</span> <span m="807750">I</span> <span m="807900">will</span>
  <span m="808080">not</span> <span m="808320">be</span> <span
  m="808440">able</span> <span m="808680">to</span> <span m="808770">give</span>
  <span m="808980">you</span> <span m="809130">a</span> <span
  m="809190">formula</span> <span m="809700">for</span> <span
  m="809910">the</span> <span m="810660">new</span> <span
  m="810960">lambdas,</span> <span m="811530">but</span> <span
  m="811800">I'll</span> <span m="812010">be</span> <span m="812160">able</span>
  <span m="812430">to</span> <span m="812520">tell</span> <span
  m="812790">you</span> <span m="813000">important</span> <span
  m="813480">facts</span> <span m="813870">about</span> <span
  m="814170">them.</span> <span m="816120">So</span> <span
  m="816360">this</span> <span m="817200">is</span> <span
  m="817380">today's</span> <span m="818610">lecture</span> <span
  m="819030">now.</span> <span m="819240">You</span> <span
  m="819390">could</span> <span m="819540">say</span> <span
  m="819750">that's</span> <span m="820090">the</span> <span
  m="820170">completion</span> <span m="820890">of</span> <span
  m="821220">Friday's</span> <span m="821700">lecture.</span></p><p><span
  m="822510">What</span> <span m="822690">about</span> <span m="822930">d</span>
  <span m="823140">lambda</span> <span m="823560">dt?</span> <span
  m="825600">It's</span> <span m="825780">a</span> <span m="825840">nice</span>
  <span m="826260">formula.</span> <span m="829560">Its</span> <span
  m="829950">proof</span> <span m="830280">is</span> <span m="830580">fun</span>
  <span m="830940">too.</span> <span m="831300">I</span> <span
  m="831450">was</span> <span m="832320">very</span> <span
  m="832590">happy</span> <span m="832920">about</span> <span
  m="833190">this</span> <span m="833460">proof.</span> <span
  m="834920">OK,</span> <span m="836280">so</span> <span m="836430">I</span>
  <span m="836490">guess</span> <span m="836820">calculus</span> <span
  m="837480">is</span> <span m="837570">showing</span> <span
  m="837960">up</span> <span m="838110">here</span> <span m="838320">on</span>
  <span m="838440">this</span> <span m="838680">middle</span> <span
  m="838980">board.</span></p><p><span m="839760">So</span> <span
  m="840270">how</span> <span m="840660">do</span> <span m="840840">I</span>
  <span m="840960">start</span> <span m="841350">with</span> <span
  m="841530">the</span> <span m="841680">eigenvalues?</span> <span
  m="843910">Well,</span> <span m="844150">start</span> <span
  m="844480">with</span> <span m="844720">what</span> <span m="844930">I</span>
  <span m="845080">know.</span> <span m="847260">So</span> <span
  m="847910">these</span> <span m="848240">are</span> <span
  m="848390">facts,</span> <span m="849020">you</span> <span
  m="849170">could</span> <span m="849350">say,</span> <span
  m="854750">that</span> <span m="855190">I</span> <span m="855280">have</span>
  <span m="855430">to</span> <span m="855520">get</span> <span
  m="855730">the</span> <span m="855850">eigenvalues</span> <span
  m="856600">into</span> <span m="856930">it.</span> <span
  m="857020">And,</span> <span m="857110">of</span> <span
  m="857170">course,</span> <span m="857500">eigenvalues</span> <span
  m="858190">have</span> <span m="858370">to</span> <span m="858460">come</span>
  <span m="858670">with</span> <span m="858900">eigenvectors.</span></p><p><span
  m="860230">So</span> <span m="861220">I'll</span> <span
  m="861580">again</span> <span m="861970">use</span> <span m="862480">A</span>
  <span m="862990">of</span> <span m="863770">t.</span> <span
  m="864240">It</span> <span m="864360">will</span> <span m="864430">be</span>
  <span m="864790">depending</span> <span m="865270">on</span> <span
  m="865450">t.</span> <span m="866350">And</span> <span m="866500">an</span>
  <span m="866850">eigenvector</span> <span m="867630">that</span> <span
  m="867760">depends</span> <span m="868240">on</span> <span m="868450">t</span>
  <span m="869290">is</span> <span m="869510">an</span> <span
  m="869720">eigenvalue</span> <span m="870450">that</span> <span
  m="870700">depends</span> <span m="871150">on</span> <span m="871330">t</span>
  <span m="871990">times</span> <span m="872350">and</span> <span
  m="872650">eigenvector</span> <span m="873170">that</span> <span
  m="873280">depends</span> <span m="873700">on</span> <span
  m="873850">t.</span> <span m="875036">Good?</span> <span
  m="876990">That's</span> <span m="877250">fact</span> <span
  m="877640">one</span> <span m="877970">that</span> <span m="878120">we</span>
  <span m="878750">plan</span> <span m="879080">to</span> <span
  m="879260">take</span> <span m="879640">the</span> <span
  m="879740">derivative</span> <span m="880400">of</span> <span
  m="880670">somehow.</span></p><p><span m="882580">There's</span> <span
  m="882730">also</span> <span m="883090">a</span> <span
  m="883180">second</span> <span m="883630">fact</span> <span
  m="884140">that</span> <span m="884830">comes</span> <span
  m="885190">into</span> <span m="885520">play</span> <span
  m="885880">here.</span> <span m="887650">What's</span> <span
  m="887950">the</span> <span m="888100">deal</span> <span m="888520">on</span>
  <span m="888730">the</span> <span m="888880">eigenvalues</span> <span
  m="889870">of</span> <span m="890050">A</span> <span
  m="890230">transpose?</span> <span m="892520">They</span> <span
  m="892770">are</span> <span m="892890">the</span> <span
  m="893010">same.</span> <span m="894270">The</span> <span
  m="894410">eigenvalues</span> <span m="895020">of</span> <span
  m="895140">A</span> <span m="895290">transpose</span> <span
  m="895920">are</span> <span m="896010">the</span> <span m="896160">same</span>
  <span m="896490">as</span> <span m="896610">the</span> <span
  m="896760">eigenvalues</span> <span m="897450">of</span> <span
  m="897570">A.</span></p><p><span m="898110">Are</span> <span
  m="898410">the</span> <span m="898560">eigenvectors</span> <span
  m="899400">the</span> <span m="899460">same?</span> <span
  m="900690">Not</span> <span m="900900">usually.</span> <span
  m="901860">Of</span> <span m="901980">course,</span> <span
  m="902340">if</span> <span m="902490">the</span> <span
  m="902610">matrix</span> <span m="903180">was</span> <span
  m="904410">symmetric,</span> <span m="905500">then</span> <span
  m="905710">A</span> <span m="905850">and</span> <span m="905990">A</span>
  <span m="906180">transpose</span> <span m="906780">are</span> <span
  m="906870">just</span> <span m="907140">the</span> <span
  m="907200">same</span> <span m="907530">thing.</span> <span
  m="909150">So</span> <span m="909480">A</span> <span
  m="909600">transpose</span> <span m="910230">would</span> <span
  m="910410">have</span> <span m="910650">that</span> <span
  m="910950">eigenvalue--</span> <span
  m="913620">eigenvector.</span></p><p><span m="914160">But,</span> <span
  m="914730">generally,</span> <span m="915240">it</span> <span
  m="915390">has</span> <span m="915660">a</span> <span
  m="915720">different</span> <span m="916170">eigenvector.</span> <span
  m="917850">And</span> <span m="919620">really</span> <span
  m="920730">to</span> <span m="920880">keep</span> <span m="921120">a</span>
  <span m="921390">sort</span> <span m="921630">of</span> <span
  m="921750">separate</span> <span m="922230">from</span> <span
  m="922440">this</span> <span m="922680">one,</span> <span
  m="922890">let's</span> <span m="923160">call</span> <span
  m="923430">it</span> <span m="923540">y.</span> <span m="924530">It</span>
  <span m="924790">will</span> <span m="924900">have</span> <span
  m="925020">the</span> <span m="925140">same</span> <span
  m="925470">eigenvalue.</span> <span m="926970">I'm</span> <span
  m="927040">going</span> <span m="927160">to</span> <span
  m="927260">call</span> <span m="927510">it</span> <span m="927650">y.</span>
  <span m="928590">But</span> <span m="928770">I'm</span> <span
  m="928890">going</span> <span m="928990">to</span> <span
  m="929100">make</span> <span m="929340">it</span> <span m="929450">a</span>
  <span m="929520">row</span> <span m="929850">vector,</span> <span
  m="931840">because</span> <span m="932710">A</span> <span
  m="932890">transpose</span> <span m="933580">is</span> <span
  m="933760">what--</span> <span m="934270">instead</span> <span
  m="934810">of</span> <span m="934870">writing</span> <span
  m="935260">down</span> <span m="935560">A</span> <span
  m="935680">transpose,</span> <span m="936340">I'm</span> <span
  m="936460">going</span> <span m="936580">to</span> <span
  m="936670">stay</span> <span m="937000">with</span> <span m="937210">A,</span>
  <span m="937810">but</span> <span m="938020">put</span> <span
  m="938190">the</span> <span m="938380">eigenvalue</span> <span
  m="939130">on</span> <span m="939250">the</span> <span m="939340">left</span>
  <span m="939640">side.</span></p><p><span m="940240">So</span> <span
  m="940510">here's</span> <span m="941000">is</span> <span
  m="941200">the</span> <span m="941350">eigenvalue--</span> <span
  m="943000">eigenvector</span> <span m="944290">for</span> <span
  m="944770">A</span> <span m="946420">on</span> <span m="946630">the</span>
  <span m="946720">left.</span> <span m="948260">And</span> <span
  m="948400">it</span> <span m="948520">has</span> <span m="948760">the</span>
  <span m="948880">same</span> <span m="949310">eigenvalue</span> <span
  m="951250">times</span> <span m="951700">that</span> <span
  m="952060">eigenvector.</span> <span m="953680">But</span> <span
  m="953860">that</span> <span m="954220">eigenvector</span> <span
  m="954820">is</span> <span m="955110">a</span> <span m="955240">row</span>
  <span m="956020">eigenvector,</span> <span m="956800">of</span> <span
  m="956890">course.</span> <span m="958100">This</span> <span
  m="958330">is</span> <span m="958480">an</span> <span
  m="958630">equality</span> <span m="959290">between</span> <span
  m="959800">rows.</span> <span m="961230">A</span> <span m="961630">row</span>
  <span m="962200">times</span> <span m="962650">my</span> <span
  m="962830">matrix</span> <span m="963460">gives</span> <span
  m="963790">a</span> <span m="963850">row.</span> <span m="965150">So</span>
  <span m="965260">that's</span> <span m="965530">the</span> <span
  m="965680">eigenvalues</span> <span m="966820">of--</span> <span
  m="968450">and</span> <span m="968660">it</span> <span m="968830">has</span>
  <span m="969010">the</span> <span m="969100">same</span> <span
  m="969490">eigenvalues.</span></p><p><span m="970210">So</span> <span
  m="970390">this</span> <span m="971260">is</span> <span
  m="971380">totally</span> <span m="971800">parallel</span> <span
  m="972340">to</span> <span m="972490">that,</span> <span
  m="973630">totally</span> <span m="974050">parallel.</span> <span
  m="974650">And</span> <span m="975550">maybe</span> <span
  m="976310">sort</span> <span m="976510">of</span> <span
  m="976630">less--</span> <span m="977770">definitely</span> <span
  m="978370">less</span> <span m="979460">seen,</span> <span
  m="981180">but</span> <span m="984790">it's</span> <span
  m="985000">just</span> <span m="985450">the</span> <span
  m="985540">same</span> <span m="985840">thing</span> <span
  m="986080">for</span> <span m="986290">A</span> <span
  m="986440">transpose.</span> <span m="987970">Everybody</span> <span
  m="988390">sees</span> <span m="988750">that</span> <span m="988840">if</span>
  <span m="988990">I</span> <span m="989410">transpose</span> <span
  m="990130">this</span> <span m="990340">equation,</span> <span
  m="990910">then</span> <span m="991090">I've</span> <span
  m="991660">got</span> <span m="992170">something</span> <span
  m="992570">that</span> <span m="992710">looks</span> <span
  m="992980">like</span> <span m="993190">that.</span> <span
  m="993400">But</span> <span m="993610">I'd</span> <span
  m="993790">rather</span> <span m="994120">have</span> <span
  m="994270">it</span> <span m="994360">this</span> <span
  m="994600">way.</span></p><p><span m="995320">Now,</span> <span
  m="995620">one</span> <span m="995890">more</span> <span
  m="997540">fact</span> <span m="997960">I</span> <span m="998080">need.</span>
  <span m="998960">There</span> <span m="999170">is--</span> <span
  m="999370">there</span> <span m="999580">has</span> <span m="999790">to</span>
  <span m="999910">be</span> <span m="1000090">some</span> <span
  m="1002880">normalization.</span> <span m="1006090">What</span> <span
  m="1006330">should</span> <span m="1006510">be</span> <span
  m="1006660">the</span> <span m="1006750">length</span> <span
  m="1007200">of</span> <span m="1007320">these?</span> <span
  m="1007800">Right</span> <span m="1007980">now,</span> <span
  m="1008370">x</span> <span m="1008760">could</span> <span
  m="1008940">have</span> <span m="1009180">any</span> <span
  m="1009450">length.</span> <span m="1010530">y</span> <span
  m="1011100">could</span> <span m="1011340">have</span> <span
  m="1011580">any</span> <span m="1011820">length.</span> <span
  m="1012750">And</span> <span m="1012870">there's</span> <span
  m="1013110">a</span> <span m="1013200">natural</span> <span
  m="1013770">normalization,</span> <span m="1015360">which</span> <span
  m="1015630">is</span> <span m="1016920">y</span> <span
  m="1017310">transpose</span> <span m="1019020">times</span> <span
  m="1019410">x</span> <span m="1020040">equal</span> <span
  m="1020410">to</span> <span m="1020490">1.</span> <span
  m="1023520">That</span> <span m="1023760">normalizes</span> <span
  m="1024650">the</span> <span m="1024760">two.</span> <span
  m="1025415">It</span> <span m="1025770">doesn't</span> <span
  m="1026160">tell</span> <span m="1026369">me</span> <span
  m="1026640">the</span> <span m="1026790">length</span> <span
  m="1027119">of</span> <span m="1027270">x</span> <span m="1028050">or</span>
  <span m="1028290">the</span> <span m="1028410">length</span> <span
  m="1028710">of</span> <span m="1028829">y.</span> <span m="1029160">But</span>
  <span m="1029310">it</span> <span m="1029430">tells</span> <span
  m="1029760">me,</span> <span m="1030490">the</span> <span
  m="1030720">key</span> <span m="1031170">thing,</span> <span
  m="1031680">the</span> <span m="1031890">length</span> <span
  m="1032250">of</span> <span m="1032369">both.</span></p><p><span
  m="1033089">So</span> <span m="1034260">what</span> <span
  m="1034470">I've</span> <span m="1035310">got</span> <span
  m="1035520">there</span> <span m="1036300">is</span> <span
  m="1036990">tracking</span> <span m="1037450">along</span> <span
  m="1038010">one</span> <span m="1038369">eigenvalue</span> <span
  m="1040050">and</span> <span m="1040380">its</span> <span
  m="1040650">pair</span> <span m="1041010">of</span> <span
  m="1041160">eigenvectors.</span> <span m="1042480">And</span> <span
  m="1042690">you're</span> <span m="1042869">always</span> <span
  m="1043470">welcome</span> <span m="1043859">to</span> <span
  m="1044010">think</span> <span m="1044339">of</span> <span
  m="1044460">the</span> <span m="1044550">symmetric</span> <span
  m="1045119">case</span> <span m="1045480">when</span> <span
  m="1045690">y</span> <span m="1045990">and</span> <span m="1046109">x</span>
  <span m="1046380">are</span> <span m="1046470">the</span> <span
  m="1046589">same.</span> <span m="1047400">And</span> <span
  m="1047579">then</span> <span m="1047819">I</span> <span
  m="1047910">would</span> <span m="1048089">call</span> <span
  m="1048390">them</span> <span m="1048600">q.</span> <span
  m="1049740">Oh,</span> <span m="1049950">well,</span> <span
  m="1050190">I</span> <span m="1050310">would</span> <span
  m="1050400">call</span> <span m="1050610">them</span> <span
  m="1050760">q</span> <span m="1051060">if</span> <span m="1051180">it</span>
  <span m="1051240">was</span> <span m="1051450">a</span> <span
  m="1051510">symmetric</span> <span m="1052080">matrix.</span> <span
  m="1056040">So</span> <span m="1056280">if</span> <span
  m="1056370">it's</span> <span m="1056550">a</span> <span
  m="1056610">symmetric</span> <span m="1057150">matrix,</span> <span
  m="1058770">both</span> <span m="1059310">eigenvectors</span> <span
  m="1059850">would</span> <span m="1060060">be</span> <span
  m="1060180">called</span> <span m="1060570">q.</span> <span
  m="1061350">And</span> <span m="1061500">this</span> <span
  m="1061740">would</span> <span m="1061920">be</span> <span
  m="1062100">saying</span> <span m="1062550">that</span> <span
  m="1062730">q</span> <span m="1063210">is</span> <span
  m="1063450">a--</span></p><p><span m="1064520">AUDIENCE:</span> <span
  m="1064722">Unit</span> <span m="1064925">vector.</span></p><p><span
  m="1065330">GILBERT STRANG:</span> <span m="1065480">Unit</span> <span
  m="1065630">vector,</span> <span m="1066530">right.</span> <span
  m="1067070">So</span> <span m="1067280">this</span> <span
  m="1067490">is</span> <span m="1067640">all</span> <span
  m="1067790">stuff</span> <span m="1068150">we</span> <span
  m="1068300">know.</span> <span m="1069640">And</span> <span
  m="1069970">actually,</span> <span m="1070390">maybe</span> <span
  m="1070690">I</span> <span m="1070780">should</span> <span
  m="1071020">write</span> <span m="1071350">it</span> <span
  m="1071500">in</span> <span m="1074200">matrix</span> <span
  m="1074800">notation,</span> <span m="1075910">because</span> <span
  m="1076180">it's</span> <span m="1076540">important.</span> <span
  m="1084390">That's</span> <span m="1084640">for</span> <span
  m="1084850">one</span> <span m="1085300">eigenvector.</span> <span
  m="1086350">This</span> <span m="1086560">is</span> <span
  m="1086710">for</span> <span m="1086950">all</span> <span
  m="1087190">of</span> <span m="1087250">them</span> <span
  m="1087540">at</span> <span m="1087580">once.</span> <span
  m="1089650">Everybody's</span> <span m="1090160">with</span> <span
  m="1090400">it?</span> <span m="1091120">The</span> <span
  m="1091330">x's</span> <span m="1091810">are</span> <span
  m="1091930">the</span> <span m="1092050">columns</span> <span
  m="1092650">of</span> <span m="1092800">x.</span> <span m="1095120">And</span>
  <span m="1096520">lambda</span> <span m="1097020">is</span> <span
  m="1097190">the</span> <span m="1097340">diagonal</span> <span
  m="1097940">matrix</span> <span m="1098510">of</span> <span
  m="1098630">lambdas.</span> <span m="1099620">And</span> <span
  m="1099740">it</span> <span m="1099860">has</span> <span m="1100130">to</span>
  <span m="1100250">sit</span> <span m="1100550">on</span> <span
  m="1100700">the</span> <span m="1100790">right</span> <span
  m="1101180">so</span> <span m="1101450">that</span> <span
  m="1101630">it</span> <span m="1101750">will</span> <span
  m="1101930">multiply</span> <span m="1102470">those</span> <span
  m="1102740">columns.</span> <span m="1104190">So</span> <span
  m="1104270">this</span> <span m="1104510">is</span> <span
  m="1104690">like</span> <span m="1104930">all</span> <span
  m="1105810">eigenvectors</span> <span m="1106370">at</span> <span
  m="1106460">once.</span></p><p><span m="1107120">What</span> <span
  m="1107330">would</span> <span m="1107510">this</span> <span
  m="1107750">one</span> <span m="1107960">be?</span> <span
  m="1109310">This</span> <span m="1109520">would</span> <span
  m="1109700">be</span> <span m="1109880">like</span> <span m="1110150">y</span>
  <span m="1110720">transpose</span> <span m="1112910">A</span> <span
  m="1114260">equals</span> <span m="1117500">A--</span></p><p><span
  m="1119390">AUDIENCE:</span> <span m="1119620">y</span> <span
  m="1119850">transpose</span> <span m="1120310">inverse?</span></p><p><span
  m="1121690">GILBERT STRANG:</span> <span m="1121845">y</span> <span
  m="1122000">transpose,</span> <span m="1122600">yes--</span> <span
  m="1123110">equals--</span> <span m="1124770">and</span> <span
  m="1124970">probably</span> <span m="1125630">these</span> <span
  m="1126200">are</span> <span m="1126320">multiplied--</span> <span
  m="1130460">I</span> <span m="1130580">feel</span> <span
  m="1130910">wrong</span> <span m="1131330">if</span> <span
  m="1131450">I</span> <span m="1131570">write</span> <span m="1131810">y</span>
  <span m="1132080">transpose</span> <span m="1132740">here.</span> <span
  m="1133460">Like</span> <span m="1133700">here,</span> <span
  m="1134830">the</span> <span m="1136280">x</span> <span m="1136640">was</span>
  <span m="1136880">on</span> <span m="1137060">the</span> <span
  m="1137120">right</span> <span m="1137510">and</span> <span
  m="1137630">on</span> <span m="1137750">the</span> <span
  m="1137840">left.</span> <span m="1138260">And</span> <span
  m="1138380">I'll--</span> <span m="1139690">oh,</span> <span
  m="1143060">yeah,</span> <span m="1144870">y</span> <span
  m="1145130">transpose,</span> <span m="1145990">yeah.</span> <span
  m="1146310">OK,</span> <span m="1149180">so</span> <span
  m="1149390">what</span> <span m="1149570">do</span> <span m="1149720">I</span>
  <span m="1149810">put?</span> <span m="1150110">Lambda</span> <span
  m="1151800">y</span> <span m="1152060">transpose.</span> <span
  m="1152430">Thanks.</span></p><p><span m="1156730">And</span> <span
  m="1156960">what</span> <span m="1157110">do</span> <span m="1157230">I</span>
  <span m="1157350">put</span> <span m="1157560">here?</span> <span
  m="1158970">What</span> <span m="1159120">does</span> <span
  m="1159270">this</span> <span m="1159510">translate</span> <span
  m="1160080">to</span> <span m="1160530">if</span> <span
  m="1161250">this</span> <span m="1161490">was</span> <span
  m="1161700">for</span> <span m="1161880">one</span> <span
  m="1162330">eigenvector?</span> <span m="1163200">For</span> <span
  m="1163410">all</span> <span m="1163620">of</span> <span
  m="1163680">them</span> <span m="1163860">at</span> <span
  m="1163920">once,</span> <span m="1164640">it's</span> <span
  m="1164850">just</span> <span m="1165060">going</span> <span
  m="1165190">to</span> <span m="1165330">translate</span> <span
  m="1165930">to</span> <span m="1166170">y</span> <span
  m="1166470">transpose</span> <span m="1167100">x</span> <span
  m="1167370">equal</span> <span m="1167670">the</span> <span
  m="1167790">identity.</span></p><p><span m="1172330">This</span> <span
  m="1172460">is</span> <span m="1172550">pretty</span> <span
  m="1172820">basic</span> <span m="1173240">stuff.</span> <span
  m="1173540">But</span> <span m="1173780">stuff</span> <span
  m="1174290">somehow</span> <span m="1174740">we</span> <span
  m="1174920">don't</span> <span m="1175340">always</span> <span
  m="1175700">necessarily</span> <span m="1176420">see.</span> <span
  m="1177770">Those</span> <span m="1178100">are</span> <span
  m="1178160">the</span> <span m="1178280">key</span> <span
  m="1178580">facts.</span></p><p><span m="1181980">And</span> <span
  m="1182400">now,</span> <span m="1182670">I</span> <span
  m="1182850">plan</span> <span m="1183360">to</span> <span
  m="1184740">take</span> <span m="1185040">the</span> <span
  m="1185160">derivative,</span> <span m="1186900">take</span> <span
  m="1187170">the</span> <span m="1187290">derivative</span> <span
  m="1187920">of</span> <span m="1187980">respect</span> <span
  m="1188400">to</span> <span m="1188520">lambda.</span> <span
  m="1189690">Oh,</span> <span m="1190440">I</span> <span m="1190560">can</span>
  <span m="1190740">derive</span> <span m="1191130">one</span> <span
  m="1191370">more</span> <span m="1191610">fact.</span> <span
  m="1193500">So</span> <span m="1193890">this</span> <span
  m="1194250">would</span> <span m="1194340">be</span> <span
  m="1194610">a</span> <span m="1194640">formula.</span> <span
  m="1196800">This</span> <span m="1196980">is</span> <span
  m="1197130">formula</span> <span m="1197550">1.</span> <span
  m="1201680">Formula</span> <span m="1202040">1</span> <span
  m="1202340">just</span> <span m="1202580">says,</span> <span
  m="1202910">what</span> <span m="1203120">do</span> <span m="1203270">I</span>
  <span m="1203390">get</span> <span m="1203630">if</span> <span
  m="1203810">I</span> <span m="1204590">hit</span> <span
  m="1204860">this</span> <span m="1205550">on</span> <span
  m="1205700">the</span> <span m="1205790">left</span> <span
  m="1206210">by</span> <span m="1206480">y</span> <span
  m="1206780">transpose?</span> <span m="1207530">Can</span> <span
  m="1207740">I</span> <span m="1207830">do</span> <span
  m="1208010">that?</span> <span m="1208560">y</span> <span
  m="1208880">transpose</span> <span m="1210050">of</span> <span
  m="1210200">t</span> <span m="1211220">A</span> <span m="1211700">of</span>
  <span m="1212180">t</span> <span m="1214580">x</span> <span
  m="1215060">of</span> <span m="1215210">t</span> <span
  m="1216800">equals</span> <span m="1218060">lambda</span> <span
  m="1218330">of</span> <span m="1218600">t.</span> <span
  m="1218960">That's</span> <span m="1219830">a</span> <span
  m="1219920">number.</span> <span m="1220530">So</span> <span
  m="1220700">I</span> <span m="1220820">can</span> <span
  m="1221390">always</span> <span m="1221840">bring</span> <span
  m="1222140">that</span> <span m="1222380">out</span> <span
  m="1224180">in</span> <span m="1224330">front</span> <span
  m="1224600">of</span> <span m="1224720">the</span> <span
  m="1229370">inner</span> <span m="1229570">product</span> <span
  m="1230090">of</span> <span m="1230150">vector</span> <span
  m="1230530">notation.</span></p><p><span m="1232684">Are</span> <span
  m="1233162">you</span> <span m="1233640">good</span> <span
  m="1234118">for</span> <span m="1234596">that?</span> <span
  m="1237470">I'm</span> <span m="1237650">pleading</span> <span
  m="1238220">like</span> <span m="1239060">everything</span> <span
  m="1239450">I've</span> <span m="1239570">done</span> <span
  m="1239870">is</span> <span m="1242150">totally</span> <span
  m="1242820">OK.</span> <span m="1243780">And</span> <span
  m="1243800">now,</span> <span m="1244130">I</span> <span
  m="1244250">have</span> <span m="1244520">a</span> <span
  m="1246440">improvement</span> <span m="1247040">to</span> <span
  m="1247160">make</span> <span m="1247460">on</span> <span
  m="1247580">this</span> <span m="1247790">right-hand</span> <span
  m="1248240">side,</span> <span m="1248660">which</span> <span
  m="1248930">is...?</span> <span m="1251110">So</span> <span
  m="1251390">what</span> <span m="1251600">is</span> <span m="1251750">y</span>
  <span m="1251990">transpose</span> <span m="1252590">times</span> <span
  m="1252950">x?</span></p><p><span m="1253795">AUDIENCE:</span> <span
  m="1253992">1.</span></p><p><span m="1254190">GILBERT STRANG:</span> <span
  m="1254275">It's</span> <span m="1254360">1.</span> <span
  m="1255440">So</span> <span m="1256040">let's</span> <span
  m="1256310">remember</span> <span m="1256730">that.</span> <span
  m="1256940">It's</span> <span m="1257090">1.</span> <span
  m="1262070">So</span> <span m="1262360">in</span> <span
  m="1262540">other</span> <span m="1262690">words,</span> <span
  m="1263240">I</span> <span m="1263320">have</span> <span
  m="1263500">got</span> <span m="1263740">a</span> <span
  m="1263800">formula</span> <span m="1264280">for</span> <span
  m="1264460">lambda</span> <span m="1264715">of</span> <span
  m="1264970">t.</span> <span m="1267720">As</span> <span
  m="1267900">time</span> <span m="1268290">changes,</span> <span
  m="1269370">the</span> <span m="1269490">matrix</span> <span
  m="1270030">changes.</span> <span m="1271070">Its</span> <span
  m="1271290">eigenvalues</span> <span m="1272160">change</span> <span
  m="1272610">according</span> <span m="1273060">to</span> <span
  m="1273180">this</span> <span m="1273450">formula.</span> <span
  m="1274550">Its</span> <span m="1274920">eigenvectors</span> <span
  m="1275850">change</span> <span m="1276650">according</span> <span
  m="1276960">of</span> <span m="1277040">this</span> <span
  m="1277290">formula.</span> <span m="1278130">And</span> <span
  m="1278310">its</span> <span m="1278520">left</span> <span
  m="1279180">eigenvectors</span> <span m="1279810">change</span> <span
  m="1280230">according</span> <span m="1280650">to</span> <span
  m="1280770">that</span> <span m="1280980">formula.</span> <span
  m="1283760">So</span> <span m="1283950">everything</span> <span
  m="1284460">here</span> <span m="1284760">is</span> <span
  m="1285540">above</span> <span m="1285880">board.</span></p><p><span
  m="1287990">And</span> <span m="1288200">now,</span> <span
  m="1290490">what's</span> <span m="1290910">the</span> <span
  m="1291030">point?</span> <span m="1292610">The</span> <span
  m="1292730">point</span> <span m="1293090">is</span> <span
  m="1293540">I'm</span> <span m="1293750">going</span> <span
  m="1293890">to</span> <span m="1293990">find</span> <span
  m="1294350">this,</span> <span m="1296345">the</span> <span
  m="1296840">derivative.</span> <span m="1298450">So</span> <span
  m="1298710">I'm</span> <span m="1298800">going</span> <span
  m="1298920">to</span> <span m="1298980">take</span> <span
  m="1299220">the</span> <span m="1299370">derivative</span> <span
  m="1299940">of</span> <span m="1300030">that</span> <span
  m="1300270">equation</span> <span m="1301620">and</span> <span
  m="1301920">see</span> <span m="1302130">what</span> <span
  m="1302310">I</span> <span m="1302400">get.</span> <span
  m="1303330">That'll</span> <span m="1303600">be</span> <span
  m="1304380">the</span> <span m="1304500">formula</span> <span
  m="1305070">for</span> <span m="1305340">the</span> <span
  m="1305520">derivative</span> <span m="1306150">of</span> <span
  m="1306300">an</span> <span m="1306480">eigenvalue.</span> <span
  m="1307260">And</span> <span m="1308370">amazingly,</span> <span
  m="1309090">it's</span> <span m="1309300">not</span> <span
  m="1310170">that</span> <span m="1311070">widely</span> <span
  m="1311640">known.</span> <span m="1312450">Of</span> <span
  m="1312600">course,</span> <span m="1312930">it's</span> <span
  m="1313530">classical,</span> <span m="1314220">but</span> <span
  m="1315330">it's</span> <span m="1315480">not</span> <span
  m="1316170">always</span> <span m="1316500">part</span> <span
  m="1316770">of</span> <span m="1316950">courses.</span> <span
  m="1318210">So</span> <span m="1318840">this</span> <span
  m="1319080">is</span> <span m="1319350">as</span> <span
  m="1319500">time</span> <span m="1319920">varies,</span> <span
  m="1320490">the</span> <span m="1320640">matrix</span> <span
  m="1321210">varies,</span> <span m="1321720">A.</span> <span
  m="1322160">And</span> <span m="1322980">therefore,</span> <span
  m="1323460">its</span> <span m="1323640">eigenvalues</span> <span
  m="1324420">vary,</span> <span m="1325200">and</span> <span
  m="1325380">its</span> <span m="1325530">eigenvectors</span> <span
  m="1326370">vary.</span></p><p><span m="1327360">So</span> <span
  m="1327540">we're</span> <span m="1327720">going</span> <span
  m="1327820">to</span> <span m="1327960">find</span> <span m="1328710">d</span>
  <span m="1328920">lambda</span> <span m="1329350">dt.</span> <span
  m="1330960">It's</span> <span m="1331200">one</span> <span
  m="1331530">level</span> <span m="1331920">of</span> <span
  m="1332070">difficulty</span> <span m="1332730">more</span> <span
  m="1333210">to</span> <span m="1333390">find</span> <span
  m="1333990">dx</span> <span m="1334410">dt,</span> <span
  m="1336420">the</span> <span m="1336570">derivative</span> <span
  m="1337170">of</span> <span m="1337290">the</span> <span
  m="1337440">eigenvector</span> <span m="1338670">or</span> <span
  m="1338850">the</span> <span m="1339000">second</span> <span
  m="1339450">derivative</span> <span m="1339990">of</span> <span
  m="1340140">the</span> <span m="1340350">eigenvalue.</span> <span
  m="1341300">Those</span> <span m="1341610">kind</span> <span
  m="1341850">of</span> <span m="1341910">come</span> <span
  m="1342150">together.</span> <span m="1342570">And</span> <span
  m="1342690">I'm</span> <span m="1343020">not</span> <span
  m="1343200">going</span> <span m="1343390">to</span> <span
  m="1343470">go</span> <span m="1343680">there.</span> <span
  m="1344470">I'm</span> <span m="1344610">just</span> <span
  m="1344850">going</span> <span m="1344950">to</span> <span
  m="1345090">do</span> <span m="1345360">the</span> <span
  m="1345480">one</span> <span m="1345870">great</span> <span
  m="1346230">thing</span> <span m="1346560">here--</span> <span
  m="1347280">take</span> <span m="1347610">the</span> <span
  m="1347760">derivative</span> <span m="1348330">of</span> <span
  m="1348480">that</span> <span m="1348690">equation.</span></p><p><span
  m="1350020">Shall</span> <span m="1350360">I</span> <span
  m="1350460">do</span> <span m="1350640">it</span> <span
  m="1350700">over</span> <span m="1350910">there?</span> <span
  m="1353680">So</span> <span m="1353880">here</span> <span
  m="1354060">we</span> <span m="1354210">go.</span> <span m="1355060">So</span>
  <span m="1355550">I</span> <span m="1355770">want</span> <span
  m="1355950">to</span> <span m="1356010">compute</span> <span
  m="1356520">d</span> <span m="1356730">lambda</span> <span
  m="1357210">dt.</span> <span m="1360290">And</span> <span
  m="1360450">I'm</span> <span m="1360600">using</span> <span
  m="1360990">this</span> <span m="1361230">formula</span> <span
  m="1361710">for</span> <span m="1361860">lambda</span> <span
  m="1363891">there.</span></p><p><span m="1370720">So</span> <span
  m="1370900">I've</span> <span m="1371020">got</span> <span
  m="1371170">three</span> <span m="1371470">things</span> <span
  m="1371860">that</span> <span m="1371950">depend</span> <span
  m="1372370">on</span> <span m="1372520">t.</span> <span m="1373726">And</span>
  <span m="1374150">I'm</span> <span m="1374240">taking</span> <span
  m="1374600">the</span> <span m="1374720">derivative</span> <span
  m="1375350">of</span> <span m="1375500">their</span> <span
  m="1375680">product.</span> <span m="1376290">So</span> <span
  m="1376430">I'm</span> <span m="1376580">going</span> <span
  m="1376800">to</span> <span m="1376850">use</span> <span
  m="1377900">the</span> <span m="1378020">product</span> <span
  m="1378470">rule.</span> <span m="1380400">I'll</span> <span
  m="1380720">apply</span> <span m="1381110">the</span> <span
  m="1381230">product</span> <span m="1381680">rule</span> <span
  m="1381920">to</span> <span m="1382070">that</span> <span
  m="1382310">derivative.</span></p><p><span m="1384440">Take</span> <span
  m="1384740">the</span> <span m="1384860">derivative</span> <span
  m="1385430">of</span> <span m="1385550">the</span> <span
  m="1385670">first</span> <span m="1386090">guy</span> <span
  m="1388430">times</span> <span m="1389060">A</span> <span
  m="1390290">times</span> <span m="1390740">x.</span> <span
  m="1393230">Take</span> <span m="1393590">the</span> <span
  m="1393650">derivative</span> <span m="1394220">of</span> <span
  m="1394340">the</span> <span m="1394460">second</span> <span
  m="1394910">guy</span> <span m="1397910">times</span> <span
  m="1398800">the</span> <span m="1399740">second</span> <span
  m="1400160">guy</span> <span m="1414330">and</span> <span
  m="1414630">the</span> <span m="1414720">third</span> <span
  m="1415050">guy.</span> <span m="1416010">y</span> <span
  m="1416430">transpose</span> <span m="1417210">of</span> <span
  m="1417330">t</span> <span m="1420090">A</span> <span m="1420400">of</span>
  <span m="1420570">t</span> <span m="1421650">dx</span> <span
  m="1422550">dt.</span> <span m="1431422">OK?</span> <span
  m="1431920">We</span> <span m="1432100">are</span> <span
  m="1433060">one</span> <span m="1433690">minute</span> <span
  m="1434110">away</span> <span m="1434440">from</span> <span
  m="1434710">a</span> <span m="1434830">great</span> <span
  m="1435310">formula.</span> <span m="1437160">And</span> <span
  m="1437370">I'm</span> <span m="1437790">really</span> <span
  m="1438330">happy</span> <span m="1438840">if</span> <span
  m="1439020">you</span> <span m="1439110">allow</span> <span
  m="1439380">me</span> <span m="1439500">to</span> <span m="1439620">say</span>
  <span m="1439920">it.</span> <span m="1440790">That</span> <span
  m="1441250">that</span> <span m="1441720">formula</span> <span
  m="1442290">comes</span> <span m="1442770">by</span> <span
  m="1442980">just</span> <span m="1444390">taking</span> <span
  m="1444780">those</span> <span m="1445230">facts</span> <span
  m="1445710">we</span> <span m="1445860">know,</span> <span
  m="1446760">putting</span> <span m="1447150">them</span> <span
  m="1447270">together</span> <span m="1447840">into</span> <span
  m="1448080">this</span> <span m="1449100">expression</span> <span
  m="1449670">that</span> <span m="1449790">we</span> <span
  m="1449940">also</span> <span m="1450330">know,</span> <span
  m="1451280">and</span> <span m="1452100">this</span> <span
  m="1452340">is</span> <span m="1452490">like</span> <span
  m="1452820">lambda</span> <span m="1453450">equals</span> <span
  m="1454440">x</span> <span m="1454710">inverse</span> <span
  m="1455180">Ax.</span> <span m="1456470">That's</span> <span
  m="1456870">a</span> <span m="1457260">diagonalizing</span> <span
  m="1458310">thing</span> <span m="1458970">and</span> <span
  m="1459120">then</span> <span m="1459330">taking</span> <span
  m="1459750">the</span> <span m="1459900">derivative.</span></p><p><span
  m="1461740">So</span> <span m="1461910">what</span> <span
  m="1462150">do</span> <span m="1462270">I</span> <span m="1462360">get</span>
  <span m="1462600">if</span> <span m="1462750">I</span> <span
  m="1462840">take</span> <span m="1463110">that</span> <span
  m="1463290">derivative?</span> <span m="1464820">Well,</span> <span
  m="1467760">this</span> <span m="1468090">term</span> <span
  m="1470070">I'm</span> <span m="1470190">going</span> <span
  m="1470310">to</span> <span m="1470460">keep.</span> <span
  m="1471930">I'm</span> <span m="1472050">not</span> <span
  m="1472260">going</span> <span m="1472370">to</span> <span
  m="1472470">play</span> <span m="1472710">with</span> <span
  m="1472840">that.</span> <span m="1480790">Everybody</span> <span
  m="1481340">is</span> <span m="1481980">clear?</span> <span
  m="1482520">That's</span> <span m="1482820">a</span> <span
  m="1482940">number.</span> <span m="1483710">Here's</span> <span
  m="1483990">a</span> <span m="1484080">matrix.</span> <span
  m="1484770">dA</span> <span m="1485205">dt</span> <span m="1485640">is</span>
  <span m="1485820">a</span> <span m="1485910">matrix.</span> <span
  m="1488350">I</span> <span m="1488690">take</span> <span
  m="1489050">the</span> <span m="1489110">derivative</span> <span
  m="1489650">of</span> <span m="1490040">every</span> <span
  m="1490430">entry</span> <span m="1490850">in</span> <span
  m="1491030">A.</span></p><p><span m="1492250">Here's</span> <span
  m="1492700">its</span> <span m="1494840">column</span> <span
  m="1495200">vector,</span> <span m="1496470">its</span> <span
  m="1496840">eigenvector.</span> <span m="1497510">And</span> <span
  m="1497600">here's</span> <span m="1497960">a</span> <span
  m="1498020">row</span> <span m="1498290">vector.</span> <span
  m="1498770">So</span> <span m="1499010">row</span> <span
  m="1499430">times</span> <span m="1499790">matrix</span> <span
  m="1500330">times</span> <span m="1500630">column</span> <span
  m="1501080">is</span> <span m="1501230">a</span> <span
  m="1501380">number,</span> <span m="1501800">1</span> <span
  m="1502040">by</span> <span m="1502220">1.</span> <span m="1503150">And</span>
  <span m="1503510">actually,</span> <span m="1504170">that's</span> <span
  m="1504530">my</span> <span m="1504770">answer.</span> <span
  m="1507040">That's</span> <span m="1507310">my</span> <span
  m="1507520">answer.</span></p><p><span m="1507910">So</span> <span
  m="1508120">I'm</span> <span m="1508330">saying</span> <span
  m="1508780">that</span> <span m="1508960">these</span> <span
  m="1509350">two</span> <span m="1510700">terms</span> <span
  m="1512800">cancel</span> <span m="1513250">each</span> <span
  m="1513460">other</span> <span m="1513730">out</span> <span
  m="1515080">as</span> <span m="1515200">those</span> <span
  m="1515440">two</span> <span m="1515650">terms</span> <span
  m="1516040">added</span> <span m="1516210">to</span> <span
  m="1516310">zero.</span> <span m="1517000">This</span> <span
  m="1517360">is</span> <span m="1517570">the</span> <span
  m="1517690">right</span> <span m="1517990">answer</span> <span
  m="1518760">for</span> <span m="1521350">the</span> <span
  m="1521470">derivative.</span> <span m="1523060">That's</span> <span
  m="1523420">a</span> <span m="1523600">nice</span> <span
  m="1524020">formula.</span></p><p><span m="1525640">So</span> <span
  m="1525880">to</span> <span m="1526085">find</span> <span
  m="1526290">the</span> <span m="1526420">derivative</span> <span
  m="1527710">of</span> <span m="1527890">an</span> <span
  m="1528140">eigenvalue,</span> <span m="1531250">the</span> <span
  m="1531550">matrix</span> <span m="1532120">is</span> <span
  m="1532300">changing,</span> <span m="1533350">you</span> <span
  m="1533470">multiply</span> <span m="1533980">by</span> <span
  m="1534220">the</span> <span m="1535100">eigenvector</span> <span
  m="1536500">and</span> <span m="1536740">by</span> <span
  m="1537040">the</span> <span m="1537220">left</span> <span
  m="1537730">eigenvector.</span> <span m="1538260">It</span> <span
  m="1539120">gives</span> <span m="1539330">you</span> <span
  m="1539480">a</span> <span m="1539540">number.</span> <span
  m="1539960">And</span> <span m="1540080">that's</span> <span
  m="1540440">the</span> <span m="1541270">d</span> <span
  m="1541490">lambda</span> <span m="1541920">dt.</span></p><p><span
  m="1544220">So</span> <span m="1544520">why</span> <span m="1545010">do</span>
  <span m="1545150">those</span> <span m="1545480">two</span> <span
  m="1545720">guys</span> <span m="1546140">add</span> <span
  m="1546350">to</span> <span m="1546500">0?</span> <span
  m="1549060">That's</span> <span m="1549290">all</span> <span
  m="1549470">that</span> <span m="1549590">remains</span> <span
  m="1550100">here.</span> <span m="1550280">And</span> <span
  m="1550400">then</span> <span m="1550580">this</span> <span
  m="1550880">topic</span> <span m="1551360">is</span> <span
  m="1552530">ended</span> <span m="1552920">with</span> <span
  m="1553140">this</span> <span m="1553430">nice</span> <span
  m="1553820">formula.</span> <span m="1557380">So</span> <span
  m="1557870">I</span> <span m="1557960">want</span> <span m="1558110">to</span>
  <span m="1558200">simplify</span> <span m="1558800">that,</span> <span
  m="1559490">simplify</span> <span m="1560060">that,</span> <span
  m="1560390">and</span> <span m="1560540">show</span> <span
  m="1560840">that</span> <span m="1560960">they</span> <span
  m="1561110">cancel</span> <span m="1561620">each</span> <span
  m="1561830">other.</span></p><p><span m="1563150">So</span> <span
  m="1563330">what</span> <span m="1563510">is</span> <span
  m="1563710">Ax?</span> <span m="1565950">It's</span> <span
  m="1566170">lambda</span> <span m="1566560">x.</span> <span
  m="1567520">So</span> <span m="1567700">this</span> <span
  m="1567970">guy</span> <span m="1569080">is</span> <span
  m="1569290">nothing</span> <span m="1569740">but</span> <span
  m="1571060">it's</span> <span m="1572320">lambda</span> <span
  m="1573910">that</span> <span m="1574210">depends</span> <span
  m="1574720">on</span> <span m="1574900">time</span> <span
  m="1575290">of</span> <span m="1575380">course</span> <span
  m="1576190">times</span> <span m="1579220">dy</span> <span
  m="1579575">dt</span> <span m="1581760">dy</span> <span
  m="1582180">transpose</span> <span m="1582575">dt.</span> <span
  m="1583430">I'm</span> <span m="1583570">just</span> <span
  m="1583780">copying</span> <span m="1584200">that.</span> <span
  m="1584685">Ax</span> <span m="1585640">is</span> <span
  m="1585820">lambda</span> <span m="1586270">x.</span> <span
  m="1587520">Sorry,</span> <span m="1587950">I</span> <span
  m="1588040">didn't</span> <span m="1588250">mean</span> <span
  m="1588400">to</span> <span m="1588550">make</span> <span
  m="1588940">that</span> <span m="1589090">look</span> <span
  m="1589300">hard.</span></p><p><span m="1592810">You</span> <span
  m="1593270">OK</span> <span m="1593540">with</span> <span
  m="1593690">that?</span> <span m="1595310">Ax</span> <span
  m="1596090">is</span> <span m="1596270">lambda</span> <span
  m="1596690">x.</span> <span m="1597110">And</span> <span m="1597260">I</span>
  <span m="1597440">am</span> <span m="1597920">perfectly</span> <span
  m="1598460">safe,</span> <span m="1598910">because</span> <span
  m="1599240">lambda</span> <span m="1599660">is</span> <span
  m="1599780">just</span> <span m="1600110">a</span> <span
  m="1600170">number</span> <span m="1601010">to</span> <span
  m="1601130">bring</span> <span m="1601460">it</span> <span
  m="1601580">out</span> <span m="1601760">to</span> <span
  m="1601910">the</span> <span m="1602030">left.</span> <span
  m="1602670">So</span> <span m="1602810">it</span> <span
  m="1603800">doesn't</span> <span m="1604100">look</span> <span
  m="1604310">like</span> <span m="1604520">it's</span> <span
  m="1604700">in</span> <span m="1604820">the</span> <span
  m="1604940">way.</span></p><p><span m="1605870">And</span> <span
  m="1605990">what</span> <span m="1606170">about</span> <span
  m="1606410">this</span> <span m="1606650">other</span> <span
  m="1606890">term?</span> <span m="1611330">So</span> <span
  m="1611570">I</span> <span m="1611630">have</span> <span m="1611810">y</span>
  <span m="1612110">transpose--</span> <span m="1614150">oh,</span> <span
  m="1614530">y</span> <span m="1614800">transpose</span> <span
  m="1615370">A,</span> <span m="1615610">what's</span> <span
  m="1615870">that?</span> <span m="1619540">What's</span> <span
  m="1619780">y</span> <span m="1620020">transpose</span> <span
  m="1620650">A?</span> <span m="1620980">That's</span> <span
  m="1621400">the</span> <span m="1621520">combination</span> <span
  m="1622330">that</span> <span m="1622480">I</span> <span
  m="1622600">know.</span> <span m="1623770">y</span> <span
  m="1623980">transpose</span> <span m="1624640">A,</span> <span
  m="1626740">y</span> <span m="1627070">is</span> <span m="1627190">that</span>
  <span m="1627430">left</span> <span m="1627760">eigenvalue.</span> <span
  m="1628480">y</span> <span m="1628690">transpose</span> <span
  m="1629320">A</span> <span m="1629980">brings</span> <span
  m="1630310">out</span> <span m="1630490">a</span> <span
  m="1630580">lambda.</span> <span m="1631150">So</span> <span
  m="1631390">this</span> <span m="1631690">also</span> <span
  m="1632050">brings</span> <span m="1632470">out</span> <span
  m="1633040">a</span> <span m="1633130">lambda</span> <span
  m="1635180">times</span> <span m="1635530">y</span> <span
  m="1635800">transpose</span> <span m="1638260">times</span> <span
  m="1638570">dx</span> <span m="1639170">dt.</span> <span
  m="1647240">OK?</span> <span m="1648020">I</span> <span
  m="1648080">just</span> <span m="1648350">use</span> <span
  m="1648610">Ax</span> <span m="1649010">equal</span> <span
  m="1649250">lambda</span> <span m="1649610">x</span> <span
  m="1649930">there.</span> <span m="1650400">It</span> <span
  m="1650690">was</span> <span m="1651170">really</span> <span
  m="1651500">nothing.</span></p><p><span m="1652670">Now,</span> <span
  m="1652880">what</span> <span m="1653050">do</span> <span m="1653180">I</span>
  <span m="1653300">do?</span> <span m="1653990">I</span> <span
  m="1654170">want</span> <span m="1654380">this</span> <span
  m="1654620">to</span> <span m="1654740">be</span> <span m="1654920">0.</span>
  <span m="1655460">Can</span> <span m="1655670">you</span> <span
  m="1655790">see</span> <span m="1656030">it</span> <span
  m="1656150">happening?</span> <span m="1657170">It's</span> <span
  m="1657920">a</span> <span m="1657980">great</span> <span
  m="1658280">pleasure</span> <span m="1658700">to</span> <span
  m="1658820">see</span> <span m="1659060">it</span> <span
  m="1659180">happening.</span></p><p><span m="1660600">So</span> <span
  m="1660710">what</span> <span m="1660980">do</span> <span m="1661100">I</span>
  <span m="1661220">have</span> <span m="1661490">here?</span> <span
  m="1662060">What's</span> <span m="1662420">my</span> <span
  m="1662570">first</span> <span m="1662840">step</span> <span
  m="1663130">now?</span></p><p><span m="1664248">AUDIENCE:</span> <span
  m="1664455">Like</span> <span m="1664662">take</span> <span
  m="1665076">lambda--</span></p><p><span m="1665490">GILBERT STRANG:</span>
  <span m="1665635">Bring</span> <span m="1666170">lambda</span> <span
  m="1666530">outside.</span> <span m="1668170">That's</span> <span
  m="1668380">not</span> <span m="1668620">0.</span> <span m="1669130">We</span>
  <span m="1669340">don't</span> <span m="1669490">know</span> <span
  m="1669580">what</span> <span m="1669730">that</span> <span
  m="1670000">is.</span> <span m="1670780">Bring</span> <span
  m="1671120">lambda</span> <span m="1671590">outside</span> <span
  m="1672220">there</span> <span m="1673180">times</span> <span
  m="1673600">the</span> <span m="1673690">whole</span> <span
  m="1673900">thing.</span></p><p><span m="1677650">So</span> <span
  m="1677860">for</span> <span m="1678040">some</span> <span
  m="1678310">wonderful</span> <span m="1678760">reason</span> <span
  m="1680230">I</span> <span m="1680410">believe</span> <span
  m="1681040">that</span> <span m="1681220">this</span> <span
  m="1681550">number,</span> <span m="1682270">which</span> <span
  m="1682510">is</span> <span m="1682690">a</span> <span m="1683090">row</span>
  <span m="1683480">times</span> <span m="1683840">a</span> <span
  m="1683890">column,</span> <span m="1684660">a</span> <span
  m="1684910">row</span> <span m="1685240">times</span> <span m="1685660">a
  column,</span> <span m="1686740">two</span> <span m="1686980">terms</span>
  <span m="1687490">there,</span> <span m="1688390">I</span> <span
  m="1688540">believe</span> <span m="1689020">they</span> <span
  m="1689680">knock</span> <span m="1689980">each</span> <span
  m="1690190">other</span> <span m="1690430">out</span> <span
  m="1690760">and</span> <span m="1691270">that</span> <span
  m="1691810">result</span> <span m="1692320">is</span> <span
  m="1692530">0.</span> <span m="1694170">And</span> <span
  m="1694650">why?</span> <span m="1696024">Why?</span> <span
  m="1698070">Because</span> <span m="1698370">I</span> <span
  m="1698520">come</span> <span m="1698850">back</span> <span
  m="1699270">to--</span> <span m="1700980">this</span> <span
  m="1701280">board</span> <span m="1701610">has</span> <span
  m="1701820">all</span> <span m="1702090">that</span> <span
  m="1702270">I</span> <span m="1702390">know.</span> <span
  m="1703710">And</span> <span m="1703970">here's</span> <span
  m="1705030">y</span> <span m="1705360">transpose</span> <span
  m="1706080">times</span> <span m="1706500">x</span> <span
  m="1706770">equal</span> <span m="1707100">1.</span></p><p><span
  m="1707490">And</span> <span m="1707640">how</span> <span
  m="1707820">does</span> <span m="1708030">that</span> <span
  m="1708210">help</span> <span m="1708450">me?</span> <span
  m="1710330">Because</span> <span m="1710900">what</span> <span
  m="1711110">I'm</span> <span m="1711290">seeing</span> <span
  m="1711620">in</span> <span m="1711740">that</span> <span
  m="1712340">square,</span> <span m="1713420">in</span> <span
  m="1714080">those</span> <span m="1714320">brackets</span> <span
  m="1714860">is?</span></p><p><span m="1715130">AUDIENCE:</span> <span
  m="1715265">The</span> <span m="1715400">derivative</span> <span
  m="1715581">of</span> <span m="1715763">y</span> <span
  m="1716126">transpose--</span></p><p><span m="1716490">GILBERT STRANG:</span>
  <span m="1716570">The</span> <span m="1716650">derivative</span> <span
  m="1717310">of</span> <span m="1717430">the</span> <span m="1717490">y</span>
  <span m="1717730">transpose</span> <span m="1718360">x.</span> <span
  m="1719850">So</span> <span m="1720030">it's</span> <span
  m="1720180">the</span> <span m="1720330">derivative</span> <span
  m="1721050">of?</span></p><p><span m="1721860">AUDIENCE:</span> <span
  m="1722055">1</span></p><p><span m="1722250">GILBERT STRANG:</span> <span
  m="1722490">1.</span> <span m="1725620">Therefore,</span> <span
  m="1725910">0.</span> <span m="1727170">So</span> <span
  m="1727440">this</span> <span m="1728610">is</span> <span
  m="1728850">the</span> <span m="1728910">derivative</span> <span
  m="1729480">of</span> <span m="1729630">1.</span> <span m="1730430">It</span>
  <span m="1730560">equals</span> <span m="1730860">0.</span> <span
  m="1731490">Those</span> <span m="1731790">two</span> <span
  m="1732030">terms</span> <span m="1733080">knock</span> <span
  m="1733380">each</span> <span m="1733620">other</span> <span
  m="1733890">out</span> <span m="1734130">and</span> <span
  m="1734250">leave</span> <span m="1734640">just</span> <span
  m="1735070">the</span> <span m="1735240">nice</span> <span
  m="1735720">term</span> <span m="1736710">that</span> <span
  m="1736830">we're</span> <span m="1737040">seeing.</span></p><p><span
  m="1737650">So</span> <span m="1737760">the</span> <span
  m="1737910">derivative</span> <span m="1738420">of</span> <span
  m="1738510">the</span> <span m="1738690">eigenvalue,</span> <span
  m="1739380">just</span> <span m="1740210">to</span> <span
  m="1741750">have</span> <span m="1741930">one</span> <span
  m="1742170">more</span> <span m="1742530">look</span> <span
  m="1742890">at</span> <span m="1743040">it</span> <span
  m="1743130">before</span> <span m="1743490">we</span> <span
  m="1743640">leave</span> <span m="1743940">it.</span> <span
  m="1744690">The</span> <span m="1744870">derivative</span> <span
  m="1745410">of</span> <span m="1745530">the</span> <span
  m="1745680">eigenvalue</span> <span m="1746480">is</span> <span
  m="1746700">this</span> <span m="1747060">formula.</span> <span
  m="1748120">It's</span> <span m="1748200">the</span> <span
  m="1748320">rate</span> <span m="1748620">at</span> <span
  m="1748710">which</span> <span m="1748950">the</span> <span
  m="1749070">matrix</span> <span m="1749640">is</span> <span
  m="1749790">changing</span> <span m="1750810">times</span> <span
  m="1751320">the</span> <span m="1751470">eigenvectors</span> <span
  m="1753120">on</span> <span m="1753450">right</span> <span
  m="1753750">and</span> <span m="1753870">left.</span> <span
  m="1755120">Sometimes</span> <span m="1755700">they're</span> <span
  m="1755810">called</span> <span m="1756090">the</span> <span
  m="1756180">right</span> <span m="1756630">eigenvector</span> <span
  m="1757170">and</span> <span m="1757230">the</span> <span
  m="1757350">left</span> <span m="1757750">eigenvector</span> <span
  m="1761170">at</span> <span m="1761460">the</span> <span
  m="1761710">time</span> <span m="1762150">t.</span></p><p><span
  m="1763880">So</span> <span m="1765260">we're</span> <span
  m="1765380">not</span> <span m="1765650">saying</span> <span
  m="1766100">in</span> <span m="1766220">this</span> <span m="1767000">d</span>
  <span m="1767270">lambda</span> <span m="1767535">dt.</span> <span
  m="1768260">In</span> <span m="1768380">other</span> <span
  m="1768560">words,</span> <span m="1771890">I</span> <span
  m="1772220">get</span> <span m="1772400">a</span> <span
  m="1772460">nice</span> <span m="1772760">formula,</span> <span
  m="1773930">which</span> <span m="1774140">doesn't</span> <span
  m="1774560">involve</span> <span m="1775250">the</span> <span
  m="1775400">derivative</span> <span m="1776060">of</span> <span
  m="1776180">the</span> <span m="1776360">eigenvector.</span> <span
  m="1777170">That's</span> <span m="1777530">the</span> <span
  m="1777650">beauty</span> <span m="1778040">of</span> <span
  m="1778220">it.</span> <span m="1779120">If</span> <span m="1779300">I</span>
  <span m="1779420">want</span> <span m="1779660">to</span> <span
  m="1779720">go</span> <span m="1779960">up</span> <span m="1780550">to</span>
  <span m="1780770">take</span> <span m="1781040">the</span> <span
  m="1781160">next</span> <span m="1781460">step--</span> <span
  m="1783650">I</span> <span m="1783770">tried</span> <span
  m="1784310">this</span> <span m="1784590">weekend,</span> <span
  m="1785480">but</span> <span m="1786260">it's</span> <span
  m="1786530">a</span> <span m="1786590">mess.</span></p><p><span
  m="1787580">It</span> <span m="1787700">would</span> <span
  m="1787910">be</span> <span m="1788090">to</span> <span
  m="1788240">take</span> <span m="1788630">the--</span> <span
  m="1789310">so</span> <span m="1789860">this</span> <span
  m="1790100">is</span> <span m="1790250">my</span> <span
  m="1790430">formula</span> <span m="1791010">then,</span> <span
  m="1791230">d</span> <span m="1791450">lambda</span> <span
  m="1791870">dt</span> <span m="1792410">equals</span> <span
  m="1792800">this.</span> <span m="1793640">And</span> <span
  m="1794360">I</span> <span m="1794510">can</span> <span
  m="1794810">take</span> <span m="1795140">the</span> <span
  m="1795290">next</span> <span m="1795620">derivative</span> <span
  m="1796160">of</span> <span m="1796280">that,</span> <span
  m="1797240">and</span> <span m="1797420">it</span> <span
  m="1797510">will</span> <span m="1797750">involve</span> <span
  m="1798470">d</span> <span m="1798710">second</span> <span
  m="1799190">dt</span> <span m="1799880">squared.</span> <span
  m="1801350">But</span> <span m="1801590">it</span> <span
  m="1801650">will</span> <span m="1801830">also</span> <span
  m="1802250">involve</span> <span m="1802910">dx</span> <span
  m="1803360">dt</span> <span m="1803840">and</span> <span m="1803990">dy</span>
  <span m="1804450">dt.</span> <span m="1805400">And</span> <span
  m="1807460">in</span> <span m="1807800">fact,</span> <span
  m="1808170">a</span> <span m="1808250">pseudo</span> <span
  m="1808760">inverse</span> <span m="1809300">even</span> <span
  m="1809600">shows</span> <span m="1809990">up.</span> <span
  m="1810230">It's</span> <span m="1812060">another</span> <span
  m="1812870">step,</span> <span m="1813290">and</span> <span
  m="1813410">I'm</span> <span m="1813590">not</span> <span
  m="1815660">going</span> <span m="1815990">that</span> <span
  m="1816170">far,</span> <span m="1816440">because</span> <span
  m="1817310">we've</span> <span m="1818060">got</span> <span
  m="1819280">the</span> <span m="1819560">best</span> <span
  m="1819860">formula</span> <span m="1820310">there.</span></p><p><span
  m="1823890">So</span> <span m="1824100">now</span> <span
  m="1824400">that</span> <span m="1824940">has</span> <span
  m="1825150">answered</span> <span m="1826860">this</span> <span
  m="1827130">question.</span> <span m="1829620">And</span> <span
  m="1830760">I</span> <span m="1830910">could</span> <span
  m="1831120">answer</span> <span m="1831480">that</span> <span
  m="1831720">question</span> <span m="1832680">the</span> <span
  m="1832740">same</span> <span m="1833100">way.</span> <span
  m="1833440">It</span> <span m="1833530">would</span> <span
  m="1833790">involve</span> <span m="1834330">A</span> <span
  m="1834540">transpose</span> <span m="1834915">A</span> <span
  m="1835290">and</span> <span m="1836100">the</span> <span
  m="1836220">singular</span> <span m="1836730">vectors,</span> <span
  m="1837750">instead</span> <span m="1838170">of</span> <span
  m="1838320">involving</span> <span m="1838680">A</span> <span
  m="1839040">and</span> <span m="1839880">the</span> <span
  m="1840030">eigenvectors.</span> <span m="1842190">Maybe</span> <span
  m="1842550">that's</span> <span m="1843646">a</span> <span
  m="1844040">suitable</span> <span m="1844500">exercise.</span> <span
  m="1845160">I</span> <span m="1845250">don't</span> <span
  m="1845400">know.</span> <span m="1845610">I</span> <span
  m="1845730">haven't</span> <span m="1845970">done</span> <span
  m="1846180">it</span> <span m="1846270">myself.</span></p><p><span
  m="1847380">What</span> <span m="1847560">I</span> <span
  m="1847680">want</span> <span m="1847870">to</span> <span
  m="1847980">do</span> <span m="1848340">is</span> <span
  m="1850050">this,</span> <span m="1852300">now</span> <span
  m="1853170">say,</span> <span m="1853560">what</span> <span
  m="1853920">can</span> <span m="1854130">we</span> <span
  m="1854340">say</span> <span m="1856460">about</span> <span
  m="1856770">the</span> <span m="1856910">change</span> <span
  m="1857390">in</span> <span m="1857540">the</span> <span
  m="1857690">eigenvalue--</span> <span m="1858590">and</span> <span
  m="1858770">I'll</span> <span m="1858920">just</span> <span
  m="1859250">stay</span> <span m="1859900">first</span> <span
  m="1860300">of</span> <span m="1860420">all</span> <span
  m="1860570">with</span> <span m="1860810">eigenvalue--</span> <span
  m="1862670">when</span> <span m="1862970">the</span> <span
  m="1863090">change</span> <span m="1863720">is</span> <span
  m="1865610">like</span> <span m="1865820">rank</span> <span
  m="1866150">1?</span> <span m="1868040">This</span> <span
  m="1868310">is</span> <span m="1868490">a</span> <span
  m="1868550">perfect</span> <span m="1869030">example</span> <span
  m="1870260">when</span> <span m="1870410">the</span> <span
  m="1870530">change</span> <span m="1870865">is</span> <span
  m="1871200">rank</span> <span m="1871560">1.</span></p><p><span
  m="1878360">So</span> <span m="1878750">what</span> <span
  m="1879050">can</span> <span m="1879290">we</span> <span
  m="1879500">say</span> <span m="1882440">about</span> <span
  m="1885300">the</span> <span m="1885480">eigenvalues--</span> <span
  m="1886350">let's</span> <span m="1886530">take</span> <span
  m="1886800">the</span> <span m="1886950">top,</span> <span
  m="1887430">the</span> <span m="1887580">largest</span> <span
  m="1888160">eigenvalue,</span> <span m="1889440">or</span> <span
  m="1889770">all</span> <span m="1890010">of</span> <span
  m="1890070">them,</span> <span m="1891330">all</span> <span
  m="1891570">of</span> <span m="1891630">them,</span> <span
  m="1891840">lambda</span> <span m="1892350">j,</span> <span
  m="1892800">all</span> <span m="1893040">of</span> <span
  m="1893100">them--</span> <span m="1894390">of</span> <span
  m="1895680">A</span> <span m="1896760">plus</span> <span m="1899240">a</span>
  <span m="1899750">rank</span> <span m="1900110">1</span> <span
  m="1900350">matrix</span> <span m="1901460">uv</span> <span
  m="1901970">transpose.</span> <span m="1904490">Oh,</span> <span
  m="1906420">let's</span> <span m="1908030">do</span> <span
  m="1909290">the</span> <span m="1909410">nice</span> <span
  m="1910040">case</span> <span m="1910580">here,</span> <span
  m="1911200">the</span> <span m="1911720">nice</span> <span
  m="1912080">case,</span> <span m="1913110">because</span> <span
  m="1913370">if</span> <span m="1913490">I</span> <span
  m="1913640">allow</span> <span m="1913940">a</span> <span
  m="1914000">general</span> <span m="1914420">matrix</span> <span
  m="1914990">A,</span> <span m="1915650">I</span> <span m="1915920">have</span>
  <span m="1916130">to</span> <span m="1916280">worry</span> <span
  m="1916640">about</span> <span m="1917000">does</span> <span
  m="1917300">it</span> <span m="1917450">have</span> <span
  m="1917630">enough</span> <span m="1917930">eigenvectors?</span> <span
  m="1919100">Can</span> <span m="1919340">it</span> <span
  m="1919440">diagonalize?</span> <span m="1920150">All</span> <span
  m="1920270">that</span> <span m="1921230">stuff.</span> <span
  m="1922220">Let's</span> <span m="1922490">make</span> <span
  m="1923750">it</span> <span m="1923840">a</span> <span
  m="1923900">symmetric</span> <span m="1924500">matrix.</span> <span
  m="1927620">And</span> <span m="1927790">let's</span> <span
  m="1928000">make</span> <span m="1928370">the</span> <span
  m="1929590">rank</span> <span m="1929950">1</span> <span
  m="1930280">change</span> <span m="1930790">symmetric</span> <span
  m="1931420">too.</span></p><p><span m="1932500">So</span> <span
  m="1933010">the</span> <span m="1933100">question</span> <span
  m="1933550">is,</span> <span m="1933760">what</span> <span
  m="1934000">can</span> <span m="1934210">I</span> <span m="1934330">say</span>
  <span m="1934630">about</span> <span m="1934900">the</span> <span
  m="1935050">eigenvalues</span> <span m="1938320">after</span> <span
  m="1938620">a</span> <span m="1938670">rank</span> <span m="1939010">1</span>
  <span m="1939220">change?</span> <span m="1940670">So</span> <span
  m="1940720">again,</span> <span m="1941140">this</span> <span
  m="1941380">isn't</span> <span m="1941650">calculus</span> <span
  m="1942250">now,</span> <span m="1942520">because</span> <span
  m="1943420">the</span> <span m="1943540">change</span> <span
  m="1943990">that</span> <span m="1944140">I'm</span> <span
  m="1944290">making</span> <span m="1945370">is</span> <span
  m="1947380">a</span> <span m="1947970">true</span> <span
  m="1948250">vector</span> <span m="1948760">and</span> <span
  m="1948850">not</span> <span m="1949090">a</span> <span
  m="1949180">differential.</span> <span m="1952520">And</span> <span
  m="1952790">I'm</span> <span m="1953000">not</span> <span
  m="1953240">going</span> <span m="1953390">to</span> <span
  m="1954140">have</span> <span m="1954320">an</span> <span
  m="1954410">exact</span> <span m="1954860">formula</span> <span
  m="1955340">for</span> <span m="1955520">the</span> <span
  m="1956180">new</span> <span m="1956480">eigenvalues,</span> <span
  m="1957350">as</span> <span m="1957530">I</span> <span
  m="1957620">said.</span></p><p><span m="1958670">But</span> <span
  m="1958850">what</span> <span m="1959180">I</span> <span m="1959360">am</span>
  <span m="1959600">going</span> <span m="1959750">to</span> <span
  m="1959840">do</span> <span m="1960230">is</span> <span
  m="1962840">write</span> <span m="1963110">down</span> <span
  m="1963590">the</span> <span m="1964520">beautiful</span> <span
  m="1965810">facts</span> <span m="1966380">that</span> <span
  m="1966560">are</span> <span m="1966680">known</span> <span
  m="1967010">about</span> <span m="1967310">that.</span> <span
  m="1969100">And</span> <span m="1969280">here</span> <span
  m="1969490">they</span> <span m="1969700">are.</span> <span
  m="1970760">So,</span> <span m="1971170">first</span> <span
  m="1971470">of</span> <span m="1971590">all,</span> <span
  m="1972760">the</span> <span m="1972970">eigenvalues</span> <span
  m="1973930">are</span> <span m="1976540">in</span> <span
  m="1976720">descending</span> <span m="1977290">order.</span> <span
  m="1978130">We</span> <span m="1978310">use</span> <span
  m="1978580">descending</span> <span m="1979180">order</span> <span
  m="1979480">for</span> <span m="1979750">singular</span> <span
  m="1980230">values.</span> <span m="1981040">Let's</span> <span
  m="1981280">use</span> <span m="1981550">them</span> <span
  m="1981670">also</span> <span m="1982000">for</span> <span
  m="1982240">eigenvalues.</span> <span m="1983170">So</span> <span
  m="1983320">lambda</span> <span m="1983770">1</span> <span
  m="1984700">is</span> <span m="1984880">greater</span> <span
  m="1985210">or</span> <span m="1985330">equal</span> <span
  m="1985450">to</span> <span m="1985780">lambda</span> <span
  m="1986260">2,</span> <span m="1987400">greater</span> <span
  m="1987610">or</span> <span m="1987820">equal</span> <span
  m="1987985">to</span> <span m="1988150">lambda</span> <span
  m="1988580">3,</span> <span m="1989770">and</span> <span m="1989890">so</span>
  <span m="1990130">on.</span></p><p><span m="1996640">Oh,</span> <span
  m="1997500">give</span> <span m="1997680">me--</span> <span
  m="1997920">give</span> <span m="1998070">me</span> <span
  m="1998280">an</span> <span m="1999960">idea.</span> <span
  m="2000870">What</span> <span m="2001420">do</span> <span
  m="2001550">you</span> <span m="2001700">expect</span> <span
  m="2003660">from</span> <span m="2005460">that</span> <span
  m="2005700">rank</span> <span m="2006030">1</span> <span
  m="2006270">change?</span> <span m="2006690">So</span> <span
  m="2006900">that</span> <span m="2007770">change</span> <span
  m="2008040">is</span> <span m="2008340">rank</span> <span
  m="2008700">1.</span> <span m="2009870">Can</span> <span
  m="2010050">you</span> <span m="2010170">tell</span> <span
  m="2010380">me</span> <span m="2010560">any</span> <span
  m="2010740">more</span> <span m="2011040">about</span> <span
  m="2011340">that</span> <span m="2011580">change,</span> <span
  m="2012340">u</span> <span m="2012470">u</span> <span
  m="2012600">transpose?</span> <span m="2013330">What</span> <span
  m="2013500">kind</span> <span m="2013680">of</span> <span m="2013780">a</span>
  <span m="2013830">matrix</span> <span m="2014430">is</span> <span
  m="2014740">u</span> <span m="2015015">u</span> <span
  m="2015290">transpose?</span> <span m="2019320">It's</span> <span
  m="2019530">rank</span> <span m="2019920">1,</span> <span
  m="2020310">but</span> <span m="2020490">we</span> <span
  m="2020640">can</span> <span m="2020820">say</span> <span
  m="2021090">more.</span> <span m="2023300">It</span> <span
  m="2023550">is...?</span></p><p><span m="2024480">AUDIENCE:</span> <span
  m="2024683">Symmetrical.</span></p><p><span m="2026110">GILBERT STRANG:</span>
  <span m="2026295">Symmetric,</span> <span m="2026850">of</span> <span
  m="2027000">course.</span> <span m="2028290">And</span> <span
  m="2028560">it</span> <span m="2028710">is...?</span> <span
  m="2029310">Yeah?</span></p><p><span m="2029640">AUDIENCE:</span> <span
  m="2029811">Positive</span> <span m="2029983">semidefinite.</span></p><p><span
  m="2030670">GILBERT STRANG:</span> <span m="2030902">Positive</span> <span
  m="2031600">semidefinite.</span> <span m="2033100">Positive</span> <span
  m="2033760">semidefinite.</span> <span m="2034480">This</span> <span
  m="2034750">is</span> <span m="2034900">a</span> <span
  m="2034960">positive</span> <span m="2035620">change.</span> <span
  m="2036465">u</span> <span m="2036730">u</span> <span
  m="2037140">transpose</span> <span m="2037880">is</span> <span
  m="2038080">the</span> <span m="2038230">typical</span> <span
  m="2039580">rank</span> <span m="2039960">1</span> <span
  m="2041790">positive</span> <span m="2042510">semidefinite.</span> <span
  m="2043320">It</span> <span m="2043380">couldn't</span> <span
  m="2043650">be</span> <span m="2043770">positive</span> <span
  m="2044250">definite,</span> <span m="2044640">because</span> <span
  m="2044850">it's</span> <span m="2045000">only</span> <span
  m="2045210">got</span> <span m="2045390">rank</span> <span
  m="2045750">1.</span></p><p><span m="2046950">What's</span> <span
  m="2048179">the</span> <span m="2048330">eigenvector</span> <span
  m="2049110">of</span> <span m="2049230">that</span> <span
  m="2049440">matrix?</span> <span m="2050460">Let's</span> <span
  m="2050760">just--</span> <span m="2051600">why</span> <span
  m="2051810">not</span> <span m="2052199">here?</span> <span
  m="2053000">We</span> <span m="2053520">can</span> <span m="2053699">do</span>
  <span m="2053880">this</span> <span m="2054150">in</span> <span
  m="2054870">two</span> <span m="2055260">seconds.</span> <span
  m="2056199">So</span> <span m="2056460">u</span> <span m="2056684">u</span>
  <span m="2056909">transpose,</span> <span m="2057889">that's</span> <span
  m="2058219">the</span> <span m="2058290">matrix</span> <span
  m="2058830">I'm</span> <span m="2058980">asking</span> <span
  m="2059310">you</span> <span m="2059370">to</span> <span
  m="2059489">think</span> <span m="2059760">about.</span> <span
  m="2061020">And</span> <span m="2061320">it's</span> <span
  m="2061530">a</span> <span m="2061650">full</span> <span m="2062100">n</span>
  <span m="2062280">by</span> <span m="2062520">n</span> <span
  m="2062699">matrix,</span> <span m="2063420">column</span> <span
  m="2063810">times</span> <span m="2064170">a</span> <span
  m="2064230">row.</span> <span m="2065219">Tell</span> <span
  m="2065429">me</span> <span m="2065610">an</span> <span
  m="2065739">eigenvector</span> <span m="2066659">of</span> <span
  m="2066780">that</span> <span m="2067020">matrix.</span> <span
  m="2067800">Yes?</span></p><p><span m="2068190">AUDIENCE:</span> <span
  m="2068347">u.</span></p><p><span m="2068820">GILBERT STRANG:</span> <span
  m="2068985">u.</span> <span m="2069570">If</span> <span m="2069690">I</span>
  <span m="2069810">multiply</span> <span m="2070290">my</span> <span
  m="2070500">matrix</span> <span m="2071070">by</span> <span
  m="2071310">u,</span> <span m="2072389">I</span> <span
  m="2072540">get--</span> <span m="2072960">what</span> <span
  m="2073159">do</span> <span m="2073290">I</span> <span m="2073409">get?</span>
  <span m="2075190">I</span> <span m="2075290">get</span> <span
  m="2075360">some</span> <span m="2075600">number</span> <span
  m="2076120">times</span> <span m="2076440">u.</span> <span
  m="2077969">And</span> <span m="2078120">what</span> <span
  m="2078360">is</span> <span m="2078540">that</span> <span
  m="2078780">number</span> <span m="2079230">lambda?</span></p><p><span
  m="2079770">AUDIENCE:</span> <span m="2079972">u</span> <span
  m="2080174">transpose</span> <span m="2080578">u.</span></p><p><span
  m="2081600">GILBERT STRANG:</span> <span m="2081705">That</span> <span
  m="2081810">lambda</span> <span m="2082320">happens</span> <span
  m="2082770">to</span> <span m="2082889">be</span> <span m="2083130">u</span>
  <span m="2083400">transpose</span> <span m="2084179">u.</span> <span
  m="2087330">So</span> <span m="2087510">that's</span> <span
  m="2087719">different</span> <span m="2088110">from</span> <span
  m="2088290">u</span> <span m="2088385">u</span> <span
  m="2088650">transpose.</span> <span m="2089280">This</span> <span
  m="2089460">is</span> <span m="2089639">a</span> <span
  m="2089730">matrix.</span> <span m="2090760">This</span> <span
  m="2091080">is</span> <span m="2091179">18.065</span> <span
  m="2092380">now.</span> <span m="2093030">That's</span> <span
  m="2093330">a</span> <span m="2093389">number.</span> <span
  m="2094650">And</span> <span m="2095400">what</span> <span
  m="2095760">can</span> <span m="2095909">you</span> <span
  m="2096030">tell</span> <span m="2096210">me</span> <span
  m="2096330">about</span> <span m="2096540">that</span> <span
  m="2096719">number?</span> <span m="2098540">It</span> <span
  m="2098780">is...?</span></p><p><span m="2099290">AUDIENCE:</span> <span
  m="2099511">Greater</span> <span m="2099732">than</span> <span
  m="2099953">or</span> <span m="2100174">equal</span> <span
  m="2100395">to</span> <span m="2100616">0.</span></p><p><span
  m="2101060">GILBERT STRANG:</span> <span m="2101265">Greater--</span> <span
  m="2101730">well,</span> <span m="2102000">even</span> <span
  m="2102270">more.</span> <span m="2103290">Greater</span> <span
  m="2103740">than</span> <span m="2103950">0.</span> <span
  m="2104670">Greater,</span> <span m="2105120">because</span> <span
  m="2105870">this</span> <span m="2106080">is</span> <span m="2106200">a</span>
  <span m="2106320">true</span> <span m="2106650">vector</span> <span
  m="2107130">here.</span> <span m="2108090">So</span> <span
  m="2108300">this</span> <span m="2108510">is</span> <span
  m="2108630">greater</span> <span m="2108930">than</span> <span
  m="2109080">0.</span> <span m="2110250">It's</span> <span
  m="2110430">the</span> <span m="2110550">only</span> <span
  m="2110850">eigenvalue--</span> <span m="2111600">all</span> <span
  m="2111810">the</span> <span m="2111960">other</span> <span
  m="2112200">eigenvalues</span> <span m="2112920">of</span> <span
  m="2114210">that</span> <span m="2114420">rank</span> <span
  m="2114750">1</span> <span m="2114930">matrix</span> <span
  m="2115470">are</span> <span m="2115590">zero.</span> <span
  m="2116440">But</span> <span m="2116550">the</span> <span
  m="2116670">one</span> <span m="2117060">non-zero</span> <span
  m="2117990">eigenvalue</span> <span m="2118950">is</span> <span
  m="2119280">over</span> <span m="2119580">on</span> <span
  m="2119700">the</span> <span m="2119790">plus</span> <span
  m="2120150">side.</span> <span m="2120740">It's</span> <span
  m="2120930">u</span> <span m="2121110">transpose</span> <span
  m="2121800">u.</span> <span m="2122580">We</span> <span m="2122730">all</span>
  <span m="2122910">recognize</span> <span m="2123570">that</span> <span
  m="2123810">as</span> <span m="2124590">the</span> <span
  m="2124680">length</span> <span m="2125060">of</span> <span
  m="2125170">u</span> <span m="2125550">squared.</span> <span
  m="2126510">It's</span> <span m="2126660">certainly</span> <span
  m="2127080">positive.</span> <span m="2129540">So</span> <span
  m="2129720">we</span> <span m="2129840">do</span> <span
  m="2130020">have</span> <span m="2130200">a</span> <span
  m="2130260">positive</span> <span m="2130920">semidefinite</span> <span
  m="2131310">definite</span> <span m="2131790">matrix.</span></p><p><span
  m="2132690">What</span> <span m="2133020">would</span> <span
  m="2133290">your</span> <span m="2133470">guess</span> <span
  m="2133860">be</span> <span m="2136260">of</span> <span m="2136470">the</span>
  <span m="2136590">effect</span> <span m="2137190">on</span> <span
  m="2137430">the</span> <span m="2137580">eigenvalues</span> <span
  m="2138360">of</span> <span m="2138480">A?</span> <span m="2139760">So</span>
  <span m="2140550">I'm</span> <span m="2140670">coming</span> <span
  m="2140970">back</span> <span m="2141180">to</span> <span
  m="2141270">my</span> <span m="2141480">real</span> <span
  m="2141720">problem--</span> <span m="2142230">eigenvalues</span> <span
  m="2142890">of</span> <span m="2143010">S,</span> <span
  m="2143350">sorry,</span> <span m="2143970">S.</span> <span
  m="2144510">Symmetric</span> <span m="2145080">matrices,</span> <span
  m="2145680">I'm</span> <span m="2145830">saying</span> <span
  m="2146220">symmetric.</span></p><p><span m="2147240">What</span> <span
  m="2147510">is</span> <span m="2147900">your</span> <span
  m="2148130">guess</span> <span m="2148620">if</span> <span
  m="2148770">I</span> <span m="2148860">have</span> <span m="2149040">a</span>
  <span m="2149100">symmetric</span> <span m="2149700">matrix</span> <span
  m="2151090">and</span> <span m="2151260">I</span> <span m="2151440">add</span>
  <span m="2151710">on</span> <span m="2151980">u</span> <span
  m="2152230">u</span> <span m="2152430">transpose?</span> <span
  m="2153960">What</span> <span m="2154230">do</span> <span
  m="2154380">you</span> <span m="2154560">imagine</span> <span
  m="2155100">that</span> <span m="2155340">does</span> <span
  m="2155700">to</span> <span m="2155850">the</span> <span
  m="2156030">eigenvalues?</span> <span m="2157840">You're</span> <span
  m="2157990">going</span> <span m="2158110">to</span> <span
  m="2158260">get</span> <span m="2158470">it</span> <span
  m="2158590">right.</span> <span m="2159340">Just</span> <span
  m="2159670">say</span> <span m="2160000">it.</span> <span
  m="2161120">What</span> <span m="2161390">happens</span> <span
  m="2161840">to</span> <span m="2161930">the</span> <span
  m="2162110">eigenvalues</span> <span m="2162800">of</span> <span
  m="2162950">S</span> <span m="2163220">if</span> <span m="2163400">I</span>
  <span m="2163550">add</span> <span m="2163820">on</span> <span
  m="2164060">u</span> <span m="2164240">u</span> <span
  m="2164510">transpose?</span> <span m="2165320">They</span> <span
  m="2165800">will...?</span></p><p><span m="2166100">AUDIENCE:</span> <span
  m="2166250">More</span> <span m="2166400">positive.</span></p><p><span
  m="2167380">GILBERT STRANG:</span> <span m="2167470">They'll</span> <span
  m="2167560">be</span> <span m="2167740">more</span> <span
  m="2167950">positive.</span> <span m="2169330">They'll</span> <span
  m="2169510">go</span> <span m="2169750">up.</span> <span
  m="2170300">This</span> <span m="2170410">is</span> <span m="2170590">a</span>
  <span m="2170650">positive</span> <span m="2171100">thing.</span> <span
  m="2171970">It's</span> <span m="2172420">like</span> <span
  m="2172660">adding</span> <span m="2172990">17</span> <span
  m="2173680">to</span> <span m="2173800">something.</span> <span
  m="2175320">It</span> <span m="2175660">moves</span> <span
  m="2176230">up.</span> <span m="2176920">So</span> <span
  m="2177160">therefore,</span> <span m="2178810">what</span> <span
  m="2178960">I</span> <span m="2179110">believe</span> <span
  m="2179620">is--</span> <span m="2186150">so</span> <span
  m="2187990">I've</span> <span m="2188040">got</span> <span
  m="2188190">two</span> <span m="2188430">sets</span> <span
  m="2188700">of</span> <span m="2188790">eigenvalues</span> <span
  m="2189540">now.</span> <span m="2190590">One</span> <span
  m="2190860">is</span> <span m="2191040">the</span> <span
  m="2191160">eigenvalues</span> <span m="2191640">of</span> <span
  m="2191760">s.</span> <span m="2193170">The</span> <span
  m="2193260">other</span> <span m="2193500">is</span> <span
  m="2193650">the</span> <span m="2194700">different</span> <span
  m="2195090">eigenvalues</span> <span m="2195750">of</span> <span
  m="2195880">S.</span> <span m="2196650">So</span> <span m="2197370">I</span>
  <span m="2197760">can't</span> <span m="2198150">call</span> <span
  m="2198370">them</span> <span m="2198510">both</span> <span
  m="2198780">lambdas</span> <span m="2199350">or</span> <span
  m="2199470">I'm</span> <span m="2199680">in</span> <span
  m="2199830">trouble.</span> <span m="2206280">So</span> <span
  m="2208170">do</span> <span m="2208470">you</span> <span
  m="2208590">have</span> <span m="2208710">a</span> <span
  m="2208770">favorite</span> <span m="2209190">other</span> <span
  m="2209400">Greek</span> <span m="2209670">letter</span> <span
  m="2210540">for</span> <span m="2210720">the</span> <span
  m="2210900">eigenvalues</span> <span m="2211650">of</span> <span
  m="2211820">S?</span></p><p><span m="2212310">AUDIENCE:</span> <span
  m="2212496">Gamma.</span></p><p><span m="2213430">GILBERT STRANG:</span> <span
  m="2213557">Gamma.</span> <span m="2216000">OK,</span> <span
  m="2216550">gamma.</span> <span m="2217240">As</span> <span
  m="2217380">long</span> <span m="2217520">as</span> <span
  m="2217600">you</span> <span m="2217720">say</span> <span m="2217860">a</span>
  <span m="2218000">Greek</span> <span m="2218260">letter</span> <span
  m="2218590">that</span> <span m="2218635">I</span> <span
  m="2218680">have</span> <span m="2218800">some</span> <span
  m="2219070">idea</span> <span m="2219430">how</span> <span
  m="2219580">to</span> <span m="2219700">write.</span> <span
  m="2220630">Zeta,</span> <span m="2221450">it</span> <span
  m="2221620">seems</span> <span m="2221980">to</span> <span
  m="2222070">me,</span> <span m="2222300">is like</span> <span
  m="2222520">the</span> <span m="2222670">world's</span> <span
  m="2223240">toughest</span> <span m="2224440">letter</span> <span
  m="2224710">to</span> <span m="2224830">write.</span> <span
  m="2225220">And</span> <span m="2225400">electrical</span> <span
  m="2225850">engineers</span> <span m="2226250">can</span> <span
  m="2226420">coolly</span> <span m="2227620">flush</span> <span
  m="2227890">off</span> <span m="2228160">a</span> <span
  m="2229000">zeta.</span> <span m="2232390">I've</span> <span
  m="2232570">never</span> <span m="2232840">succeeded.</span> <span
  m="2233440">So</span> <span m="2234820">I'll</span> <span
  m="2235060">write--</span> <span m="2235540">what</span> <span
  m="2235750">did</span> <span m="2235930">you</span> <span
  m="2236020">say?</span></p><p><span m="2236260">AUDIENCE:</span> <span
  m="2236462">Gamma.</span></p><p><span m="2237070">GILBERT STRANG:</span> <span
  m="2237205">Gamma</span> <span m="2239280">j</span> <span
  m="2240040">of</span> <span m="2241360">the</span> <span
  m="2241510">original.</span> <span m="2242980">So</span> <span
  m="2243160">those</span> <span m="2243430">are</span> <span
  m="2243490">the</span> <span m="2243640">eigenvalues</span> <span
  m="2244210">of</span> <span m="2244300">the</span> <span
  m="2244420">original.</span> <span m="2246150">These</span> <span
  m="2246310">are</span> <span m="2246400">the</span> <span
  m="2246580">eigenvalues</span> <span m="2247600">of</span> <span
  m="2247810">the</span> <span m="2248830">modified.</span> <span
  m="2249580">And</span> <span m="2249760">we're</span> <span
  m="2249940">expecting</span> <span m="2250900">the</span> <span
  m="2250990">lambdas</span> <span m="2251590">to</span> <span
  m="2251740">be</span> <span m="2251890">bigger</span> <span
  m="2252730">than</span> <span m="2252880">the</span> <span
  m="2252970">gammas.</span> <span m="2256040">So</span> <span
  m="2256330">that's</span> <span m="2256580">just</span> <span
  m="2256630">a</span> <span m="2256680">qualitative</span> <span
  m="2257430">statement.</span> <span m="2258200">And</span> <span
  m="2258330">it's</span> <span m="2258510">true.</span> <span
  m="2259410">Each</span> <span m="2259710">lambda</span> <span
  m="2260160">is</span> <span m="2260370">bigger</span> <span
  m="2260730">than</span> <span m="2262180">the</span> <span
  m="2262350">gamma.</span> <span m="2264190">Sorry,</span> <span
  m="2264840">yeah,</span> <span m="2265150">yeah,</span> <span
  m="2265480">each</span> <span m="2265720">lambda,</span> <span
  m="2267100">by</span> <span m="2267370">adding</span> <span
  m="2267730">this</span> <span m="2267880">stuff,</span> <span
  m="2268600">the</span> <span m="2268720">lambdas</span> <span
  m="2269290">are</span> <span m="2269380">bigger</span> <span
  m="2269690">than--</span> <span m="2270040">so</span> <span
  m="2270310">I'll</span> <span m="2270400">just</span> <span
  m="2270640">write</span> <span m="2270880">that.</span> <span
  m="2271390">Lambdas</span> <span m="2271900">are</span> <span
  m="2271990">bigger</span> <span m="2272320">than</span> <span
  m="2272540">gammas.</span></p><p><span m="2280920">And</span> <span
  m="2281100">that's</span> <span m="2281520">a</span> <span
  m="2282510">fundamental</span> <span m="2282990">fact,</span> <span
  m="2284960">which</span> <span m="2285200">we</span> <span
  m="2285410">could</span> <span m="2286340">prove.</span> <span
  m="2287840">But</span> <span m="2288690">a</span> <span
  m="2288770">little</span> <span m="2289010">more</span> <span
  m="2289340">is</span> <span m="2289520">known.</span> <span
  m="2289880">Of</span> <span m="2289940">course,</span> <span
  m="2290240">the</span> <span m="2290360">question</span> <span
  m="2290870">is,</span> <span m="2291440">how</span> <span
  m="2291590">much</span> <span m="2291890">bigger?</span> <span
  m="2293450">How</span> <span m="2293600">much</span> <span
  m="2294440">can</span> <span m="2294710">they</span> <span
  m="2294890">be</span> <span m="2295700">way</span> <span
  m="2296060">bigger?</span> <span m="2297770">Well,</span> <span
  m="2298070">I</span> <span m="2298190">don't</span> <span
  m="2298340">believe</span> <span m="2298730">they</span> <span
  m="2298880">could</span> <span m="2299060">be</span> <span
  m="2299210">bigger</span> <span m="2299540">by</span> <span
  m="2299750">more</span> <span m="2300080">than</span> <span
  m="2301520">that</span> <span m="2301730">number</span> <span
  m="2302210">myself.</span> <span m="2303680">But</span> <span
  m="2305220">there's</span> <span m="2305680">just</span> <span
  m="2305990">better</span> <span m="2306290">news</span> <span
  m="2306620">than</span> <span m="2306800">that.</span></p><p><span
  m="2308250">So</span> <span m="2308300">the</span> <span
  m="2308420">lambdas</span> <span m="2308990">are</span> <span
  m="2309080">bigger</span> <span m="2309410">than</span> <span
  m="2309590">the</span> <span m="2309710">gammas.</span> <span
  m="2310550">So</span> <span m="2310730">lambda</span> <span
  m="2311180">1</span> <span m="2311480">is</span> <span
  m="2311660">bigger</span> <span m="2312020">than</span> <span
  m="2312230">gamma</span> <span m="2312620">1.</span> <span
  m="2314540">So</span> <span m="2314690">this</span> <span
  m="2314930">is</span> <span m="2316850">the</span> <span m="2317495">S</span>
  <span m="2317840">plus</span> <span m="2318530">u</span> <span
  m="2318740">u</span> <span m="2318950">transpose</span> <span
  m="2320090">matrix.</span> <span m="2321800">And</span> <span
  m="2322280">these</span> <span m="2322640">are</span> <span
  m="2322700">the</span> <span m="2322850">eigenvalues</span> <span
  m="2323450">of</span> <span m="2323570">the</span> <span m="2323720">S</span>
  <span m="2324020">matrix.</span> <span m="2325160">Lambda</span> <span
  m="2325580">1</span> <span m="2325790">is</span> <span
  m="2325970">bigger</span> <span m="2326240">than</span> <span
  m="2326450">gamma</span> <span m="2326840">1.</span></p><p><span
  m="2327260">But</span> <span m="2327440">look</span> <span
  m="2327890">what's</span> <span m="2328250">happening</span> <span
  m="2329150">in</span> <span m="2329330">this</span> <span
  m="2330140">line</span> <span m="2330500">of</span> <span
  m="2330620">text</span> <span m="2331190">here.</span> <span
  m="2332450">I'm</span> <span m="2332720">saying</span> <span
  m="2333170">that</span> <span m="2333380">gamma</span> <span
  m="2333800">1--</span> <span m="2334640">that</span> <span
  m="2334820">lambda</span> <span m="2335210">2</span> <span
  m="2335600">is</span> <span m="2335780">smaller</span> <span
  m="2336290">than</span> <span m="2336830">gamma</span> <span
  m="2337160">1.</span> <span m="2338150">Isn't</span> <span
  m="2338390">that</span> <span m="2338570">neat?</span> <span
  m="2339410">The</span> <span m="2339560">eigenvalues</span> <span
  m="2341150">go</span> <span m="2341570">up.</span> <span
  m="2345200">But</span> <span m="2345440">they</span> <span
  m="2345590">don't</span> <span m="2345900">just</span> <span
  m="2346200">like</span> <span m="2346460">go</span> <span
  m="2346760">anywhere.</span> <span m="2353060">And</span> <span
  m="2353220">that's</span> <span m="2353430">called</span> <span
  m="2354020">interlacing.</span></p><p><span m="2362570">So</span> <span
  m="2362780">this</span> <span m="2362990">is</span> <span
  m="2363170">one</span> <span m="2363410">of</span> <span
  m="2363470">those</span> <span m="2363830">wonderful</span> <span
  m="2364400">theorems</span> <span m="2364940">that</span> <span
  m="2365240">makes</span> <span m="2365630">your</span> <span
  m="2365810">heart</span> <span m="2367150">happy,</span> <span
  m="2370880">that</span> <span m="2371080">if</span> <span m="2371200">I</span>
  <span m="2371290">do</span> <span m="2371470">I</span> <span
  m="2371530">rank</span> <span m="2371890">one</span> <span
  m="2372190">change</span> <span m="2374140">and</span> <span
  m="2374470">it's</span> <span m="2374710">a</span> <span
  m="2374950">positive</span> <span m="2375970">change,</span> <span
  m="2376990">then</span> <span m="2377170">the</span> <span
  m="2377320">eigenvalues</span> <span m="2377980">increase,</span> <span
  m="2378580">but</span> <span m="2378760">they</span> <span
  m="2378940">don't</span> <span m="2379240">increase--</span> <span
  m="2381880">the</span> <span m="2382000">new</span> <span
  m="2382270">eigenvalue</span> <span m="2382750">is</span> <span
  m="2383230">below</span> <span m="2383800">the</span> <span
  m="2383950">new</span> <span m="2384250">second</span> <span
  m="2384790">eigenvalue.</span> <span m="2385800">It</span> <span
  m="2386020">doesn't</span> <span m="2386470">pass</span> <span
  m="2386890">up</span> <span m="2387130">the</span> <span
  m="2387310">old,</span> <span m="2387610">first</span> <span
  m="2388030">eigenvalues.</span> <span m="2390280">And</span> <span
  m="2390460">the</span> <span m="2391180">new</span> <span
  m="2391660">third</span> <span m="2392020">eigenvalue</span> <span
  m="2392770">doesn't</span> <span m="2393160">pass</span> <span
  m="2393550">up</span> <span m="2394150">the</span> <span
  m="2394300">old</span> <span m="2394630">second</span> <span
  m="2395040">eigenvalue.</span> <span m="2397380">So</span> <span
  m="2397560">that's</span> <span m="2397950">the</span> <span
  m="2399510">interlacing</span> <span m="2400260">theorem</span> <span
  m="2400690">that's</span> <span m="2401340">associated</span> <span
  m="2402060">with</span> <span m="2402960">the</span> <span
  m="2403050">names</span> <span m="2403530">of</span> <span
  m="2403650">famous</span> <span m="2404670">math</span> <span
  m="2405120">guys.</span> <span m="2406490">And</span> <span
  m="2407320">of</span> <span m="2407380">course</span> <span
  m="2407650">you</span> <span m="2407710">have</span> <span
  m="2407920">to</span> <span m="2408070">say</span> <span
  m="2408310">that's</span> <span m="2408580">beautiful.</span></p><p><span
  m="2410900">While</span> <span m="2411140">we're</span> <span
  m="2411980">writing</span> <span m="2412340">down</span> <span
  m="2412640">such</span> <span m="2412970">a</span> <span
  m="2413030">theorem,</span> <span m="2414350">make</span> <span
  m="2414710">a</span> <span m="2414770">guess</span> <span
  m="2415520">of</span> <span m="2415850">what</span> <span
  m="2416160">the</span> <span m="2416270">theorem</span> <span
  m="2416690">would</span> <span m="2416930">be</span> <span
  m="2418010">if</span> <span m="2418310">I</span> <span m="2420720">do</span>
  <span m="2420960">a</span> <span m="2421050">rank</span> <span
  m="2421380">2</span> <span m="2421740">change.</span> <span
  m="2423280">Suppose</span> <span m="2423790">I</span> <span
  m="2423940">do</span> <span m="2424180">an</span> <span m="2427540">S,</span>
  <span m="2429580">staying</span> <span m="2429970">symmetric.</span> <span
  m="2431220">And</span> <span m="2431350">I</span> <span m="2431470">do</span>
  <span m="2431710">a</span> <span m="2431800">rank</span> <span
  m="2432160">1</span> <span m="2432500">change.</span> <span
  m="2434200">But</span> <span m="2434380">then</span> <span
  m="2434620">I</span> <span m="2434770">also</span> <span m="2435130">do</span>
  <span m="2435370">a</span> <span m="2435460">rank</span> <span
  m="2435850">2</span> <span m="2436180">change,</span> <span
  m="2436660">say</span> <span m="2436710">w</span> <span m="2436760">w</span>
  <span m="2436810">transpose.</span></p><p><span m="2441370">So</span> <span
  m="2441520">what's</span> <span m="2441850">the</span> <span
  m="2441970">deal</span> <span m="2442300">here?</span> <span
  m="2443830">What</span> <span m="2443980">do</span> <span m="2444100">I</span>
  <span m="2444220">know</span> <span m="2444430">about</span> <span
  m="2445440">the</span> <span m="2445900">change</span> <span
  m="2446440">matrix,</span> <span m="2447100">the</span> <span
  m="2447280">delta</span> <span m="2447760">S</span> <span
  m="2448160">here?</span> <span m="2450370">I</span> <span
  m="2450460">know</span> <span m="2450730">its</span> <span
  m="2450940">rank</span> <span m="2451330">is</span> <span
  m="2452680">2.</span> <span m="2453840">I'm</span> <span
  m="2454170">assuming</span> <span m="2454590">u</span> <span
  m="2454800">and</span> <span m="2454920">w</span> <span m="2455360">are</span>
  <span m="2455490">not</span> <span m="2455730">in</span> <span
  m="2455820">the</span> <span m="2455910">same</span> <span
  m="2456210">direction.</span> <span m="2457230">So</span> <span
  m="2457410">that's</span> <span m="2457650">a</span> <span
  m="2457740">rank</span> <span m="2458040">2</span> <span
  m="2458340">matrix.</span></p><p><span m="2459990">And</span> <span
  m="2460260">what</span> <span m="2460530">can</span> <span
  m="2460740">you</span> <span m="2460830">tell</span> <span
  m="2461040">me</span> <span m="2461190">about</span> <span
  m="2461460">the</span> <span m="2461610">eigenvalues</span> <span
  m="2462330">of</span> <span m="2462480">that</span> <span
  m="2462660">rank</span> <span m="2462990">2</span> <span
  m="2463260">matrix?</span> <span m="2466480">So</span> <span
  m="2466630">it's</span> <span m="2466750">got</span> <span
  m="2466960">n</span> <span m="2467170">eigenvalues</span> <span
  m="2467810">because</span> <span m="2468030">it's</span> <span
  m="2468220">an</span> <span m="2468340">n</span> <span m="2468520">by</span>
  <span m="2468730">n</span> <span m="2468910">matrix.</span> <span
  m="2469630">But</span> <span m="2469870">how</span> <span
  m="2470020">many</span> <span m="2471340">non-zero</span> <span
  m="2472150">eigenvalues</span> <span m="2472870">has</span> <span
  m="2473040">it</span> <span m="2473110">got?</span> <span
  m="2474160">Two,</span> <span m="2475016">because</span> <span
  m="2476080">its</span> <span m="2476230">rank</span> <span
  m="2476500">is</span> <span m="2476770">2.</span> <span m="2477926">The</span>
  <span m="2478280">rank</span> <span m="2478720">tells</span> <span
  m="2479080">you</span> <span m="2479200">the</span> <span
  m="2479320">number</span> <span m="2479680">of</span> <span
  m="2479770">non-zero</span> <span m="2480400">eigenvalues</span> <span
  m="2481140">when</span> <span m="2481360">matrices</span> <span
  m="2482020">are</span> <span m="2482140">symmetric.</span> <span
  m="2483540">It</span> <span m="2483610">doesn't</span> <span
  m="2484120">tell</span> <span m="2484420">you</span> <span
  m="2484570">enough.</span> <span m="2484990">If</span> <span
  m="2485440">matrices</span> <span m="2486040">are</span> <span
  m="2486160">unsymmetric,</span> <span m="2487120">eigenvalues</span> <span
  m="2487780">can</span> <span m="2487960">be</span> <span
  m="2488140">weird.</span> <span m="2488720">So</span> <span
  m="2489700">stay</span> <span m="2490090">symmetric</span> <span
  m="2490750">here.</span></p><p><span m="2492710">So</span> <span
  m="2493360">this</span> <span m="2493750">has</span> <span
  m="2495610">two</span> <span m="2496570">non-zero</span> <span
  m="2497140">eigenvalues.</span> <span m="2498010">And</span> <span
  m="2498190">can</span> <span m="2498460">you</span> <span
  m="2498580">tell</span> <span m="2498790">me</span> <span
  m="2498970">their</span> <span m="2499240">sign.</span> <span
  m="2501110">Is</span> <span m="2501350">that</span> <span
  m="2501530">matrix</span> <span m="2502160">positive</span> <span
  m="2502760">semidefinite?</span> <span m="2504140">Yes,</span> <span
  m="2504500">of</span> <span m="2504650">course,</span> <span
  m="2505010">it</span> <span m="2505130">is.</span> <span m="2505700">Of</span>
  <span m="2505820">course.</span> <span m="2506600">So</span> <span
  m="2506840">this</span> <span m="2507110">was</span> <span
  m="2507560">and</span> <span m="2507680">this</span> <span
  m="2507950">was.</span> <span m="2508350">And</span> <span
  m="2508520">together</span> <span m="2509420">it</span> <span
  m="2509540">certainly</span> <span m="2509990">is.</span></p><p><span
  m="2510860">So</span> <span m="2511040">now,</span> <span
  m="2511310">I've</span> <span m="2512210">added</span> <span
  m="2512750">a</span> <span m="2512840">rank</span> <span m="2513200">2</span>
  <span m="2517180">positive</span> <span m="2517600">semidefinite</span> <span
  m="2518290">matrix.</span> <span m="2519160">And</span> <span
  m="2519310">now,</span> <span m="2519910">I'm</span> <span
  m="2520060">not</span> <span m="2520210">going</span> <span
  m="2520310">to</span> <span m="2520450">rewrite</span> <span
  m="2521110">this</span> <span m="2521380">line,</span> <span
  m="2521890">but</span> <span m="2522070">what</span> <span
  m="2522460">would</span> <span m="2522730">you</span> <span
  m="2522880">expect</span> <span m="2523390">to</span> <span
  m="2523510">be</span> <span m="2523690">true?</span> <span
  m="2526530">You</span> <span m="2526680">would</span> <span m="2526890">expect
  that</span> <span m="2527850">the</span> <span m="2528090">eigenvalues</span>
  <span m="2528780">increase.</span> <span m="2531730">But</span> <span
  m="2531970">how</span> <span m="2532330">big</span> <span
  m="2532690">could</span> <span m="2535270">gamma--</span> <span
  m="2536610">yeah,</span> <span m="2537600">so</span> <span
  m="2537850">gamma</span> <span m="2538270">2,</span> <span
  m="2538555">let's</span> <span m="2539320">follow</span> <span
  m="2539650">gamma</span> <span m="2539980">2.</span></p><p><span
  m="2542950">Well,</span> <span m="2543220">maybe</span> <span
  m="2543490">I</span> <span m="2543580">should</span> <span
  m="2543790">use</span> <span m="2544060">another--</span> <span
  m="2545470">do</span> <span m="2545650">the</span> <span
  m="2545740">Greeks</span> <span m="2546070">have</span> <span
  m="2546220">any</span> <span m="2546400">other</span> <span
  m="2546610">letters</span> <span m="2547030">than</span> <span
  m="2547270">lambda</span> <span m="2547750">and</span> <span
  m="2548350">gamma.</span> <span m="2549070">They</span> <span
  m="2549190">must</span> <span m="2549620">had--</span></p><p><span
  m="2550253">AUDIENCE:</span> <span m="2550429">Zeta.</span></p><p><span
  m="2550960">GILBERT STRANG:</span> <span m="2551170">Who?</span> <span
  m="2551380">C?</span> <span m="2553420">Hell</span> <span
  m="2553900">with</span> <span m="2554020">that.</span> <span
  m="2554760">Who</span> <span m="2555340">knows</span> <span
  m="2556030">one</span> <span m="2556270">I</span> <span m="2556390">can</span>
  <span m="2556840">write?</span></p><p><span m="2557150">AUDIENCE:</span> <span
  m="2557342">Alpha.</span></p><p><span m="2557920">GILBERT STRANG:</span> <span
  m="2558070">Alpha.</span> <span m="2558220">Good,</span> <span
  m="2558520">alpha.</span> <span m="2559600">Yes,</span> <span
  m="2560050">alpha.</span> <span m="2560620">Right.</span> <span
  m="2561220">So</span> <span m="2561430">alpha</span> <span
  m="2562030">is</span> <span m="2563830">the</span> <span
  m="2564640">eigenvalues</span> <span m="2565810">of</span> <span
  m="2568360">this</span> <span m="2569710">rank</span> <span
  m="2570030">2</span> <span m="2570360">change.</span> <span
  m="2573950">OK.</span> <span m="2575420">Now,</span> <span
  m="2575720">what</span> <span m="2575960">am</span> <span m="2576080">I</span>
  <span m="2576170">going</span> <span m="2576300">to</span> <span
  m="2576440">be</span> <span m="2576560">able</span> <span
  m="2576770">to</span> <span m="2576860">say?</span> <span
  m="2579000">Can</span> <span m="2579270">I</span> <span m="2579420">say</span>
  <span m="2579750">anything</span> <span m="2580380">about</span> <span
  m="2580860">the--</span> <span m="2581400">well,</span> <span
  m="2581880">of</span> <span m="2582030">course,</span> <span
  m="2585010">alpha</span> <span m="2585370">1</span> <span
  m="2586720">is</span> <span m="2586870">bigger</span> <span
  m="2587230">than</span> <span m="2587920">lambda</span> <span
  m="2588340">1,</span> <span m="2588640">which</span> <span
  m="2588850">was</span> <span m="2589030">bigger</span> <span
  m="2589360">than--</span> <span m="2590860">eigenvalues</span> <span
  m="2591260">are</span> <span m="2591550">going</span> <span
  m="2591820">up,</span> <span m="2592030">right?</span> <span
  m="2593140">I'm</span> <span m="2593290">adding</span> <span
  m="2593620">positive</span> <span m="2594100">definite</span> <span
  m="2594580">or</span> <span m="2594670">positive</span> <span
  m="2595150">semidefinite</span> <span m="2595930">stuff.</span> <span
  m="2596270">There's</span> <span m="2596470">no</span> <span
  m="2596620">way</span> <span m="2596860">eigenvalues</span> <span
  m="2597520">can</span> <span m="2597700">start</span> <span
  m="2598120">going</span> <span m="2598360">down</span> <span
  m="2598660">on</span> <span m="2598810">me.</span></p><p><span
  m="2599500">So</span> <span m="2599950">alpha</span> <span
  m="2600340">1</span> <span m="2601750">is</span> <span m="2601940">a</span>
  <span m="2601960">greater</span> <span m="2602270">or</span> <span
  m="2602470">equal</span> <span m="2602740">to</span> <span
  m="2603010">the</span> <span m="2603490">lambda</span> <span
  m="2604000">1,</span> <span m="2604570">which</span> <span
  m="2604810">had</span> <span m="2604990">just</span> <span
  m="2605770">a</span> <span m="2605860">rank</span> <span m="2606190">1</span>
  <span m="2606490">change,</span> <span m="2606970">which</span> <span
  m="2607180">is</span> <span m="2607330">greater</span> <span
  m="2607510">or</span> <span m="2607690">equal</span> <span
  m="2607990">to</span> <span m="2608800">the--</span> <span
  m="2612010">mu,</span> <span m="2612600">was</span> <span
  m="2612780">it</span> <span m="2612870">mu?</span></p><p><span
  m="2613230">AUDIENCE:</span> <span m="2613435">Gamma.</span></p><p><span
  m="2614460">GILBERT STRANG:</span> <span m="2614670">Gamma.</span> <span
  m="2615270">Gamma</span> <span m="2615690">1,</span> <span
  m="2617640">and</span> <span m="2621570">so</span> <span
  m="2621810">on.</span> <span m="2622140">OK,</span> <span
  m="2623460">now,</span> <span m="2625090">let's</span> <span
  m="2625400">see,</span> <span m="2625740">is</span> <span
  m="2626940">gamma</span> <span m="2627240">1</span> <span
  m="2628560">bigger</span> <span m="2628890">than</span> <span
  m="2629160">alpha--</span> <span m="2630370">what</span> <span
  m="2630780">am</span> <span m="2630930">I</span> <span
  m="2631110">struggling</span> <span m="2632390">to</span> <span
  m="2632610">write</span> <span m="2632910">down</span> <span
  m="2633300">here?</span> <span m="2634050">What</span> <span
  m="2634470">could</span> <span m="2634740">I</span> <span
  m="2634920">say?</span> <span m="2637160">Well,</span> <span
  m="2637340">what</span> <span m="2637590">can</span> <span
  m="2637800">I</span> <span m="2637950">say</span> <span
  m="2638460">that</span> <span m="2639540">reflects</span> <span
  m="2640170">the</span> <span m="2640290">fact</span> <span
  m="2640870">that</span> <span m="2641930">this</span> <span
  m="2644940">lambda</span> <span m="2645450">2--</span> <span
  m="2647440">or</span> <span m="2647970">sorry,</span> <span
  m="2649940">so</span> <span m="2650490">gamma</span> <span
  m="2650850">1</span> <span m="2651240">went</span> <span
  m="2651600">up.</span> <span m="2652200">Gamma</span> <span
  m="2652470">1</span> <span m="2652710">was</span> <span
  m="2652890">bigger</span> <span m="2653220">than</span> <span
  m="2653400">lambda</span> <span m="2653790">2.</span> <span
  m="2654150">That</span> <span m="2654330">was</span> <span
  m="2654540">the</span> <span m="2654630">point</span> <span
  m="2655340">here.</span> <span m="2655890">Gamma</span> <span
  m="2656220">1</span> <span m="2656460">is</span> <span
  m="2656610">bigger.</span></p><p><span m="2657050">So</span> <span
  m="2657480">this</span> <span m="2657750">was</span> <span
  m="2657920">a</span> <span m="2657960">sort</span> <span m="2658230">of</span>
  <span m="2658350">easy,</span> <span m="2658860">because</span> <span
  m="2659310">I'm</span> <span m="2659760">adding</span> <span
  m="2660180">stuff.</span> <span m="2660540">I</span> <span
  m="2660630">expected</span> <span m="2661140">the</span> <span
  m="2661260">lambda</span> <span m="2661750">to</span> <span
  m="2661890">go</span> <span m="2662160">up.</span> <span
  m="2662830">This</span> <span m="2663060">is</span> <span
  m="2663300">where</span> <span m="2663630">the</span> <span
  m="2664110">theorem</span> <span m="2664560">is</span> <span
  m="2665640">that</span> <span m="2665850">it</span> <span
  m="2665910">didn't</span> <span m="2666210">go</span> <span
  m="2666450">up</span> <span m="2666660">so</span> <span m="2666930">far</span>
  <span m="2667530">as</span> <span m="2667770">to</span> <span
  m="2667890">pass--</span> <span m="2668830">or</span> <span
  m="2669130">sorry,</span> <span m="2669630">the</span> <span
  m="2670350">lambda</span> <span m="2670770">2,</span> <span
  m="2671130">which</span> <span m="2671340">went</span> <span
  m="2671580">up,</span> <span m="2672240">didn't</span> <span
  m="2672540">pass</span> <span m="2672900">up</span> <span
  m="2673050">gamma</span> <span m="2673380">1.</span> <span
  m="2675180">Lambda</span> <span m="2675540">2</span> <span
  m="2675780">didn't</span> <span m="2676080">pass</span> <span
  m="2676410">up</span> <span m="2676560">gamma</span> <span
  m="2676890">1.</span></p><p><span m="2677580">And</span> <span
  m="2677700">now</span> <span m="2678870">let</span> <span
  m="2679020">me</span> <span m="2679170">write</span> <span
  m="2679440">those</span> <span m="2679740">words</span> <span
  m="2680190">down.</span> <span m="2680850">Now</span> <span
  m="2681390">the</span> <span m="2682500">alpha</span> <span
  m="2682920">2--</span> <span m="2685170">well,</span> <span
  m="2685740">could</span> <span m="2686340">alpha</span> <span
  m="2686640">2</span> <span m="2686970">pass</span> <span m="2687330">up</span>
  <span m="2687510">lambda</span> <span m="2687930">1?</span> <span
  m="2691690">And</span> <span m="2691870">what</span> <span
  m="2692080">about</span> <span m="2692350">alpha</span> <span
  m="2692690">3?</span></p><p><span m="2697800">Let</span> <span
  m="2697890">me</span> <span m="2698040">say</span> <span
  m="2698220">what</span> <span m="2698400">I</span> <span
  m="2698490">believe.</span> <span m="2700680">I</span> <span
  m="2700800">think</span> <span m="2701040">alpha</span> <span
  m="2701370">2,</span> <span m="2701700">which</span> <span
  m="2701940">is</span> <span m="2702060">like</span> <span m="2702240">1</span>
  <span m="2703170">behind,</span> <span m="2705110">but</span> <span
  m="2705350">I'm</span> <span m="2705650">adding</span> <span
  m="2707000">rank</span> <span m="2707270">2,</span> <span m="2708020">I</span>
  <span m="2708140">think</span> <span m="2708380">alpha</span> <span
  m="2708680">2</span> <span m="2708980">could</span> <span
  m="2709220">pass</span> <span m="2709610">up</span> <span
  m="2709760">lambda</span> <span m="2710150">1.</span> <span
  m="2712270">It</span> <span m="2712420">could</span> <span
  m="2712600">pass</span> <span m="2712900">lambda</span> <span
  m="2713200">1.</span> <span m="2713440">But</span> <span
  m="2713620">alpha</span> <span m="2713980">3</span> <span
  m="2714370">can't.</span> <span m="2715270">I</span> <span
  m="2715420">believe</span> <span m="2715870">that</span> <span
  m="2716020">alpha</span> <span m="2716380">3</span> <span
  m="2717220">is</span> <span m="2717400">smaller</span> <span
  m="2717910">than</span> <span m="2718780">lambda</span> <span
  m="2719200">1--</span> <span m="2721260">smaller</span> <span
  m="2721760">than</span> <span m="2722610">gamma</span> <span
  m="2725050">1,</span> <span m="2725380">the</span> <span
  m="2725500">original.</span> <span m="2726300">Got</span> <span
  m="2726510">it.</span> <span m="2726960">Yeah,</span> <span
  m="2727420">yeah,</span> <span m="2728780">yeah.</span></p><p><span
  m="2735020">Anyway,</span> <span m="2736530">I'll</span> <span
  m="2736850">get</span> <span m="2737030">it</span> <span
  m="2737090">right</span> <span m="2737360">in</span> <span
  m="2737480">the</span> <span m="2737570">notes.</span> <span
  m="2738680">You</span> <span m="2739520">know</span> <span
  m="2739910">what</span> <span m="2740120">question</span> <span
  m="2740630">I'm</span> <span m="2740810">asking.</span> <span
  m="2741290">And</span> <span m="2742040">for</span> <span
  m="2742190">me,</span> <span m="2742400">that's</span> <span
  m="2742700">the</span> <span m="2742790">important</span> <span
  m="2743270">thing.</span></p><p><span m="2744860">Now,</span> <span
  m="2746270">there</span> <span m="2746510">is</span> <span
  m="2746720">a</span> <span m="2746780">little</span> <span
  m="2747080">matter</span> <span m="2747620">of</span> <span
  m="2749150">why</span> <span m="2749420">is</span> <span
  m="2749570">this</span> <span m="2749810">true?</span> <span
  m="2750560">This</span> <span m="2751010">is</span> <span
  m="2751170">the</span> <span m="2751280">good</span> <span
  m="2751520">case.</span> <span m="2752460">Let</span> <span
  m="2752510">me</span> <span m="2752660">give</span> <span
  m="2752840">you</span> <span m="2752900">another</span> <span
  m="2753320">example</span> <span m="2753830">of</span> <span
  m="2753950">interlacing.</span> <span m="2754700">Can</span> <span
  m="2754940">I</span> <span m="2755030">do</span> <span
  m="2755210">that?</span> <span m="2755810">It</span> <span
  m="2758060">really</span> <span m="2758300">comes</span> <span
  m="2758600">from</span> <span m="2758780">this,</span> <span
  m="2759110">but</span> <span m="2759680">let</span> <span
  m="2759830">me</span> <span m="2760280">give</span> <span
  m="2760460">you</span> <span m="2760550">another</span> <span
  m="2760970">example</span> <span m="2761450">that's</span> <span
  m="2761720">just</span> <span m="2761960">striking.</span></p><p><span
  m="2765560">So</span> <span m="2765740">I</span> <span m="2765800">have</span>
  <span m="2766010">a</span> <span m="2766070">symmetric</span> <span
  m="2766700">matrix,</span> <span m="2767860">n</span> <span
  m="2768070">by</span> <span m="2768300">n.</span> <span
  m="2770390">Call</span> <span m="2770650">it</span> <span
  m="2770750">S.</span> <span m="2772490">And</span> <span
  m="2772610">then</span> <span m="2772910">I</span> <span
  m="2774050">throw</span> <span m="2774470">away</span> <span
  m="2776450">the</span> <span m="2776630">last</span> <span
  m="2777020">row</span> <span m="2777230">and</span> <span
  m="2777350">column.</span> <span m="2778260">So</span> <span
  m="2778370">in</span> <span m="2778550">here</span> <span
  m="2778820">is</span> <span m="2779030">S</span> <span m="2780060">n</span>
  <span m="2780260">minus</span> <span m="2780650">1.</span> <span
  m="2780875">The</span> <span m="2781100">big</span> <span
  m="2781370">matrix</span> <span m="2781910">was</span> <span
  m="2782150">Sn.</span> <span m="2784250">This</span> <span
  m="2784490">one</span> <span m="2784700">is</span> <span m="2784880">of</span>
  <span m="2785000">size</span> <span m="2785510">n</span> <span
  m="2785690">minus</span> <span m="2786110">1.</span> <span
  m="2789230">So</span> <span m="2789410">it's</span> <span
  m="2789560">got</span> <span m="2790070">sort</span> <span
  m="2790310">of</span> <span m="2790430">less</span> <span
  m="2790790">degrees</span> <span m="2791330">of</span> <span
  m="2791420">freedom,</span> <span m="2791900">because</span> <span
  m="2792260">the</span> <span m="2792410">last</span> <span
  m="2792920">degree</span> <span m="2793280">of</span> <span
  m="2793370">freedom</span> <span m="2794180">got</span> <span
  m="2794360">removed.</span></p><p><span m="2796370">And</span> <span
  m="2796670">what</span> <span m="2796880">do</span> <span
  m="2796940">you</span> <span m="2797030">think</span> <span
  m="2797270">about</span> <span m="2797510">the</span> <span
  m="2797690">eigenvalues</span> <span m="2799040">of</span> <span
  m="2800300">the</span> <span m="2800570">n</span> <span
  m="2800870">minus</span> <span m="2801230">1</span> <span
  m="2801440">eigenvalues</span> <span m="2802160">of</span> <span
  m="2802310">this</span> <span m="2802670">and</span> <span
  m="2802820">the</span> <span m="2802970">n</span> <span
  m="2803300">eigenvalues</span> <span m="2804050">of</span> <span
  m="2804170">that?</span> <span m="2805670">They</span> <span
  m="2805900">interlace.</span> <span m="2809830">So</span> <span
  m="2810070">this</span> <span m="2810730">has</span> <span
  m="2811000">eigenvalue</span> <span m="2811690">lambda</span> <span
  m="2812110">1.</span> <span m="2813370">This</span> <span
  m="2813610">would</span> <span m="2813810">have</span> <span
  m="2814150">an</span> <span m="2814270">eigenvalue</span> <span
  m="2815860">smaller</span> <span m="2816490">than</span> <span
  m="2816730">that.</span> <span m="2817990">This</span> <span
  m="2818260">would</span> <span m="2818500">have</span> <span
  m="2818800">an</span> <span m="2818920">eigenvalue</span> <span
  m="2820270">lambda</span> <span m="2820720">2.</span> <span
  m="2821710">This</span> <span m="2822010">would</span> <span
  m="2822220">have</span> <span m="2822520">an</span> <span
  m="2822640">eigenvalue</span> <span m="2824770">smaller</span> <span
  m="2825250">than</span> <span m="2825490">that</span> <span
  m="2825890">and</span> <span m="2825910">so</span> <span
  m="2826150">on.</span></p><p><span m="2826900">Just</span> <span
  m="2827230">the</span> <span m="2827350">same</span> <span
  m="2827710">interlacing</span> <span m="2827995">and</span> <span
  m="2828580">basically</span> <span m="2829120">for</span> <span
  m="2829300">the</span> <span m="2829420">same</span> <span
  m="2829720">reason,</span> <span m="2830860">that</span> <span
  m="2831100">when</span> <span m="2831520">you--</span> <span
  m="2835110">this</span> <span m="2837310">reduction</span> <span
  m="2837980">to</span> <span m="2838090">size</span> <span m="2838510">n</span>
  <span m="2838660">minus</span> <span m="2839020">1</span> <span
  m="2839290">is</span> <span m="2839440">like</span> <span
  m="2839710">I'm</span> <span m="2839890">saying</span> <span
  m="2840550">xn</span> <span m="2841000">has</span> <span m="2841240">to</span>
  <span m="2841330">be</span> <span m="2841510">0</span> <span
  m="2842260">in</span> <span m="2842410">the</span> <span
  m="2842530">energy</span> <span m="2843070">or</span> <span
  m="2843250">any</span> <span m="2843760">of</span> <span
  m="2843820">those</span> <span m="2844060">expression.</span> <span
  m="2845380">And</span> <span m="2846700">the</span> <span
  m="2846790">fact</span> <span m="2847180">of</span> <span
  m="2847300">making</span> <span m="2847750">xn</span> <span
  m="2848230">be</span> <span m="2848440">0</span> <span m="2848920">is</span>
  <span m="2849700">like</span> <span m="2850170">one</span> <span
  m="2850510">constraint,</span> <span m="2851950">taking</span> <span
  m="2852370">one</span> <span m="2852610">degree</span> <span
  m="2852940">of</span> <span m="2853030">freedom</span> <span
  m="2853450">away.</span> <span m="2854380">It</span> <span
  m="2854590">reduces</span> <span m="2855220">the</span> <span
  m="2855370">eigenvalues,</span> <span m="2856270">but</span> <span
  m="2856480">not</span> <span m="2856810">by</span> <span
  m="2857420">two.</span></p><p><span m="2858220">OK,</span> <span
  m="2858670">now</span> <span m="2858910">I</span> <span
  m="2859000">have</span> <span m="2859270">one</span> <span
  m="2859690">final</span> <span m="2861700">mystery.</span> <span
  m="2864180">And</span> <span m="2864750">let</span> <span
  m="2864900">me</span> <span m="2865650">try</span> <span m="2865950">to</span>
  <span m="2866070">tell</span> <span m="2866310">you</span> <span
  m="2866460">what.</span> <span m="2867650">It</span> <span
  m="2868020">worried</span> <span m="2868470">me.</span> <span
  m="2871420">Now</span> <span m="2871680">what</span> <span
  m="2871980">is</span> <span m="2872160">it</span> <span
  m="2872280">that</span> <span m="2872400">worried</span> <span
  m="2872760">me?</span> <span m="2875070">Yes,</span> <span
  m="2880390">suppose</span> <span m="2881620">this</span> <span
  m="2883110">change,</span> <span m="2883740">this</span> <span
  m="2884010">u,</span> <span m="2884580">this</span> <span
  m="2884820">change</span> <span m="2885240">that</span> <span
  m="2885390">I'm</span> <span m="2885540">making,</span> <span
  m="2886350">suppose</span> <span m="2886830">it's</span> <span
  m="2887010">actually</span> <span m="2889620">the</span> <span
  m="2889740">second</span> <span m="2890310">eigenvector</span> <span
  m="2890910">of</span> <span m="2891060">S.</span> <span m="2891930">So</span>
  <span m="2892820">can</span> <span m="2893030">I</span> <span
  m="2893140">write</span> <span m="2893700">this</span> <span
  m="2893870">down?</span></p><p><span m="2897970">Suppose</span> <span
  m="2900760">u</span> <span m="2901240">is</span> <span
  m="2901450">actually</span> <span m="2902170">the</span> <span
  m="2902830">second</span> <span m="2903460">eigenvector</span> <span
  m="2904270">of</span> <span m="2904480">S.</span> <span
  m="2906180">What</span> <span m="2906400">do</span> <span m="2906445">I</span>
  <span m="2906490">mean</span> <span m="2906730">by</span> <span
  m="2906880">that?</span> <span m="2909370">So</span> <span
  m="2909640">I</span> <span m="2909760">mean</span> <span
  m="2910000">that</span> <span m="2910150">S</span> <span
  m="2910450">times</span> <span m="2910900">u</span> <span
  m="2911710">is</span> <span m="2912070">lambda</span> <span
  m="2912490">2</span> <span m="2912820">times</span> <span
  m="2913210">u.</span></p><p><span m="2917670">Now,</span> <span
  m="2917870">I'm</span> <span m="2917980">going</span> <span
  m="2918090">to</span> <span m="2918220">change</span> <span
  m="2918610">it.</span> <span m="2920530">S</span> <span
  m="2920960">plus</span> <span m="2922370">u</span> <span m="2922760">u</span>
  <span m="2923050">transpose,</span> <span m="2924610">that's</span> <span
  m="2924820">what</span> <span m="2924970">I've</span> <span
  m="2925090">been</span> <span m="2925240">looking</span> <span
  m="2925600">at.</span> <span m="2925860">And</span> <span
  m="2925990">that</span> <span m="2926170">moves</span> <span
  m="2926560">the</span> <span m="2926680">eigenvalues</span> <span
  m="2927400">up.</span> <span m="2928580">But</span> <span
  m="2928760">what</span> <span m="2928970">worries</span> <span
  m="2929360">me</span> <span m="2929600">is</span> <span
  m="2929810">like</span> <span m="2930080">if</span> <span m="2930230">I</span>
  <span m="2930320">multiply</span> <span m="2930770">this</span> <span
  m="2931010">by</span> <span m="2932300">20,</span> <span
  m="2934560">some</span> <span m="2935220">big</span> <span
  m="2935430">number,</span> <span m="2937320">I'm</span> <span
  m="2937440">going</span> <span m="2937550">to</span> <span
  m="2937650">move</span> <span m="2937980">that</span> <span
  m="2938350">eigenvalue</span> <span m="2939990">way</span> <span
  m="2940290">up,</span> <span m="2940890">way</span> <span
  m="2941160">past.</span> <span m="2943340">I</span> <span
  m="2943470">got</span> <span m="2943680">worried</span> <span
  m="2944070">about</span> <span m="2944370">this</span> <span
  m="2946270">inequality.</span></p><p><span m="2948900">When</span> <span
  m="2949110">I</span> <span m="2949290">add</span> <span
  m="2949530">this,</span> <span m="2951330">that</span> <span
  m="2951930">same</span> <span m="2952410">u</span> <span m="2953580">is</span>
  <span m="2953850">lambda</span> <span m="2954340">2</span> <span
  m="2954870">plus</span> <span m="2955230">20</span> <span
  m="2956730">u.</span> <span m="2959720">Su</span> <span m="2960530">is</span>
  <span m="2960680">lambda</span> <span m="2961010">2u.</span> <span
  m="2962120">And</span> <span m="2962270">this</span> <span
  m="2962530">20</span> <span m="2963050">is</span> <span m="2963590">20.</span>
  <span m="2966350">u</span> <span m="2966650">is</span> <span
  m="2966810">a</span> <span m="2966870">unit</span> <span
  m="2967200">vector.</span></p><p><span m="2968490">So</span> <span
  m="2969180">you</span> <span m="2969330">see</span> <span
  m="2969500">my</span> <span m="2969690">worry?</span> <span
  m="2970380">Here,</span> <span m="2970590">I'm</span> <span
  m="2970770">doing</span> <span m="2971070">a</span> <span
  m="2971130">rank</span> <span m="2971460">1</span> <span
  m="2971760">change.</span> <span m="2973460">But</span> <span
  m="2973670">it's</span> <span m="2975080">moved</span> <span
  m="2975590">an</span> <span m="2975790">eigenvalue</span> <span
  m="2976370">way,</span> <span m="2976730">way</span> <span
  m="2977000">up.</span> <span m="2979080">So</span> <span
  m="2979320">how</span> <span m="2979590">could</span> <span
  m="2979830">this</span> <span m="2984060">statement</span> <span
  m="2984510">be</span> <span m="2984720">true?</span> <span
  m="2985650">So</span> <span m="2986490">I've</span> <span
  m="2986700">just</span> <span m="2986940">figured</span> <span
  m="2987360">out</span> <span m="2987540">here</span> <span
  m="2987810">what</span> <span m="2989100">gamma--</span> <span
  m="2990330">well,</span> <span m="2991962">do</span> <span
  m="2992300">you</span> <span m="2992750">see</span> <span
  m="2992970">my</span> <span m="2993180">question?</span> <span
  m="2994170">I</span> <span m="2994260">could</span> <span
  m="2994440">leave</span> <span m="2994710">it</span> <span
  m="2994890">as</span> <span m="2995130">a</span> <span
  m="2995250">question</span> <span m="2995760">to</span> <span
  m="2995910">answer</span> <span m="2996370">next</span> <span
  m="2996570">time.</span> <span m="2997680">Let</span> <span
  m="2997860">me</span> <span m="2997980">do</span> <span
  m="2998160">that.</span> <span m="3000170">And</span> <span
  m="3000390">I'll</span> <span m="3000810">put</span> <span
  m="3001080">it</span> <span m="3001920">online</span> <span
  m="3002880">so</span> <span m="3003090">you'll</span> <span
  m="3003240">see</span> <span m="3003480">it</span> <span
  m="3003600">clearly.</span></p><p><span m="3004620">It</span> <span
  m="3004740">looks</span> <span m="3005040">like</span> <span
  m="3006080">and</span> <span m="3006600">it</span> <span
  m="3007110">happens</span> <span m="3008540">this</span> <span
  m="3009600">eigenvector</span> <span m="3010800">now</span> <span
  m="3011020">has</span> <span m="3011290">eigenvalue</span> <span
  m="3011940">lambda</span> <span m="3012300">2</span> <span
  m="3012540">plus</span> <span m="3013390">20.</span> <span
  m="3013710">Why</span> <span m="3013980">doesn't</span> <span
  m="3014340">that</span> <span m="3015000">blow</span> <span
  m="3015390">away</span> <span m="3015960">this</span> <span
  m="3017160">statement?</span> <span m="3019170">I'll</span> <span
  m="3019500">put</span> <span m="3019740">that,</span> <span
  m="3020980">because</span> <span m="3021330">it's</span> <span
  m="3021540">sort</span> <span m="3021810">of</span> <span
  m="3021870">coming</span> <span m="3022260">with</span> <span
  m="3023250">minus</span> <span m="3023700">10</span> <span
  m="3023940">seconds</span> <span m="3024360">to</span> <span
  m="3024480">go</span> <span m="3024720">in</span> <span m="3024840">the</span>
  <span m="3024930">class,</span> <span m="3025350">so</span> <span
  m="3026730">let's</span> <span m="3027030">leave</span> <span
  m="3027360">that</span> <span m="3028050">and</span> <span
  m="3028620">a</span> <span m="3028680">discussion</span> <span
  m="3029280">of</span> <span m="3029370">this</span> <span
  m="3029610">for</span> <span m="3029790">next</span> <span
  m="3030090">time.</span> <span m="3032100">But</span> <span
  m="3032250">I'm</span> <span m="3032820">happy</span> <span
  m="3033150">with</span> <span m="3033350">this</span> <span
  m="3033540">lecture</span> <span m="3033960">if</span> <span
  m="3034080">you</span> <span m="3034260">are.</span> <span
  m="3035320">Last</span> <span m="3035700">lecture</span> <span
  m="3036630">I</span> <span m="3036750">got</span> <span m="3036990">u's</span>
  <span m="3037350">and</span> <span m="3037500">v's</span> <span
  m="3037950">mixed</span> <span m="3038370">up.</span> <span
  m="3038670">And</span> <span m="3039120">it's</span> <span
  m="3039270">not</span> <span m="3039480">reliable.</span> <span
  m="3040500">Here,</span> <span m="3041700">I</span> <span
  m="3041820">like</span> <span m="3042150">the</span> <span
  m="3042270">proof</span> <span m="3042930">of</span> <span
  m="3043200">the</span> <span m="3043410">lambda</span> <span
  m="3043860">dt</span> <span m="3044940">and</span> <span
  m="3045900">we're</span> <span m="3046140">started</span> <span
  m="3046680">on</span> <span m="3046830">this</span> <span
  m="3047100">topic</span> <span m="3047490">2.</span> <span
  m="3047910">Good.</span> <span m="3048300">Thank</span> <span
  m="3048600">you.</span></p>
embedded_media:
  - uid: 573bc21ac34ad59047b1cc118a9a30ed
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: z3SmljnD_nQ
  - uid: febdb3f6a86605ac2341e35044b7da42
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/z3SmljnD_nQ/default.jpg'
  - uid: fee4a6ea8148d4d4c953c30b34a45403
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: z3SmljnD_nQ
  - uid: 62ff7e185cca25a5db900591f1a6e3cb
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: z3SmljnD_nQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-15-matrices-a-t-depending-on-t-derivative-da-dt/z3SmljnD_nQ.srt
  - uid: aa56e3ef8432ecf9d89c93d75efa05a1
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: z3SmljnD_nQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-15-matrices-a-t-depending-on-t-derivative-da-dt/z3SmljnD_nQ.pdf
  - uid: e97efdded0330aba04ab229f8014031d
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: cff4bf0dc09fe722657a97fe7a59dece
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 5763cdb3580e34f9abdb13d1b0cd7e60
    parent_uid: 3f21d4df9b2f4e82d09f7d32496dc46d
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture15_300k.mp4'
type: courses
layout: video
---
