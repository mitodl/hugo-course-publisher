---
title: 'Lecture 12: Computing Eigenvalues and Singular Values'
uid: f86188c97f54197c2e0ac6b782a4b52d
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-12-computing-eigenvalues-and-singular-values
short_url: lecture-12-computing-eigenvalues-and-singular-values
inline_embed_id: 50962656lecture12computingeigenvaluesandsingularvalues23631747
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>Numerical linear algebra is the
  subject of this lecture and, in particular, how to compute eigenvalues and
  singular values.  This includes discussion of the Hessenberg matrix, a square
  matrix that is almost (except for one extra diagonal) triangular.</p> <h2
  class="subhead">Summary</h2> <p>\(QR\) method for eigenvalues: Reverse \(A =
  QR\) to \(A_1 = RQ\)<br /> Then reverse \(A_1 = Q_1R_1\) to \(A_2 = R_1Q_1\):
  Include shifts<br /> \(A\)'s become triangular with eigenvalues on the
  diagonal.<br /> Krylov spaces and Krylov iterations</p> <p>Related section in
  textbook: II.1</p> <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
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
  <span m="8510">high</span> <span m="8720">quality</span> <span
  m="9200">educational</span> <span m="9860">resources</span> <span
  m="10430">for</span> <span m="10550">free.</span> <span m="11610">To</span>
  <span m="11630">make</span> <span m="11840">a</span> <span
  m="11900">donation</span> <span m="12680">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17180">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="23130">GILBERT STRANG:</span> <span m="23340">OK.</span> <span
  m="23550">Why</span> <span m="23700">don't</span> <span m="23910">I</span>
  <span m="24000">start?</span> <span m="25770">So</span> <span
  m="26550">I</span> <span m="26700">was</span> <span m="26880">hoping</span>
  <span m="27270">that</span> <span m="27450">we</span> <span
  m="27600">would</span> <span m="27810">have</span> <span m="28140">the</span>
  <span m="28230">next</span> <span m="30960">online</span> <span
  m="31470">assignment</span> <span m="32130">ready,</span> <span
  m="32580">but</span> <span m="32830">Julia</span> <span m="33400">0.6,</span>
  <span m="34170">the</span> <span m="34440">new</span> <span
  m="34830">version,</span> <span m="35370">is</span> <span
  m="35520">slowing</span> <span m="36030">us</span> <span
  m="36210">down,</span> <span m="37110">and</span> <span m="37990">it'll</span>
  <span m="38280">probably</span> <span m="38730">be</span> <span
  m="39000">next</span> <span m="39360">time.</span> <span m="42140">But</span>
  <span m="44980">my</span> <span m="45160">lectures,</span> <span
  m="45670">of</span> <span m="45790">course,</span> <span
  m="46210">are--</span> <span m="47110">well,</span> <span
  m="47650">what</span> <span m="47980">I</span> <span m="48070">want</span>
  <span m="48250">to</span> <span m="48340">say,</span> <span
  m="48610">perhaps,</span> <span m="49030">is</span> <span
  m="49870">this</span> <span m="50200">isn't</span> <span
  m="51400">intended</span> <span m="51940">to</span> <span m="52060">be</span>
  <span m="52210">a</span> <span m="52300">course</span> <span
  m="52690">in</span> <span m="52810">numerical</span> <span
  m="53350">linear</span> <span m="53710">algebra,</span> <span
  m="55210">but</span> <span m="55600">I</span> <span m="55750">thought</span>
  <span m="56170">I</span> <span m="56350">couldn't</span> <span
  m="57850">let</span> <span m="58030">the</span> <span m="58150">whole</span>
  <span m="58750">semester</span> <span m="59260">go</span> <span
  m="59440">by</span> <span m="59710">without</span> <span
  m="60100">saying</span> <span m="60550">something</span> <span
  m="61090">about</span> <span m="61450">how</span> <span m="61660">to</span>
  <span m="61810">compute</span> <span m="62680">eigenvalues</span> <span
  m="63790">and</span> <span m="64209">singular</span> <span
  m="64780">values.</span></p><p><span m="67420">Of</span> <span
  m="67540">course,</span> <span m="67960">you're</span> <span
  m="68080">going</span> <span m="68200">to</span> <span m="68350">call</span>
  <span m="69880">eig</span> <span m="70750">or</span> <span
  m="71780">SVD</span> <span m="73330">or</span> <span m="73510">the</span>
  <span m="73660">equivalent</span> <span m="74350">in</span> <span
  m="75490">Python</span> <span m="76150">or</span> <span
  m="76270">Julia.</span> <span m="77560">But</span> <span
  m="79930">actually,</span> <span m="80680">the</span> <span
  m="80950">QR</span> <span m="81970">factorization</span> <span
  m="83020">that</span> <span m="83170">we</span> <span m="83350">spoke</span>
  <span m="83740">about,</span> <span m="84550">that</span> <span
  m="84700">we</span> <span m="85270">spoke</span> <span
  m="85950">entirely</span> <span m="86530">about</span> <span
  m="86860">last</span> <span m="87220">time,</span> <span m="87640">is</span>
  <span m="88510">the</span> <span m="88630">key--</span> <span
  m="89470">unexpectedly,</span> <span m="90580">unexpectedly.</span> <span
  m="91870">You</span> <span m="92230">have</span> <span m="92410">a</span>
  <span m="92500">matrix</span> <span m="93100">A</span> <span
  m="96730">whose</span> <span m="97030">eigenvalues</span> <span
  m="97900">you</span> <span m="98020">want.</span> <span m="98450">So</span>
  <span m="98500">let's</span> <span m="99280">start</span> <span
  m="99610">with</span> <span m="99820">eigenvalues.</span> <span
  m="101590">And</span> <span m="101830">it</span> <span m="101950">might</span>
  <span m="102190">be</span> <span m="102340">a</span> <span
  m="102400">symmetric</span> <span m="103030">matrix.</span> <span
  m="104580">I'll</span> <span m="105550">stay</span> <span
  m="105910">with</span> <span m="106120">A</span> <span
  m="106450">rather</span> <span m="106780">than</span> <span
  m="107020">S</span> <span m="107470">because</span> <span m="107920">it</span>
  <span m="108010">doesn't</span> <span m="108340">have</span> <span
  m="108610">to</span> <span m="108760">be,</span> <span m="109060">but</span>
  <span m="109720">you</span> <span m="109900">get</span> <span
  m="110140">special--</span> <span m="111040">always</span> <span
  m="111520">you</span> <span m="111640">get</span> <span
  m="111850">something</span> <span m="112930">special</span> <span
  m="113560">if</span> <span m="114130">the</span> <span
  m="114250">matrix</span> <span m="114820">is</span> <span
  m="114940">symmetric.</span></p><p><span m="118240">So</span> <span
  m="119380">this</span> <span m="119680">method</span> <span
  m="120100">of</span> <span m="120250">computing</span> <span
  m="120790">eigenvalues,</span> <span m="122170">to</span> <span
  m="122320">me</span> <span m="122590">at</span> <span m="122680">least</span>
  <span m="123130">and</span> <span m="123280">I</span> <span
  m="123370">think</span> <span m="123610">to</span> <span
  m="123730">many</span> <span m="124060">people,</span> <span
  m="125080">came</span> <span m="125710">out</span> <span m="125950">of</span>
  <span m="126010">the</span> <span m="126130">blue</span> <span
  m="129310">a</span> <span m="129400">while</span> <span m="129699">ago,</span>
  <span m="130120">but</span> <span m="130300">not</span> <span
  m="130870">that</span> <span m="131110">long</span> <span
  m="131440">ago.</span> <span m="132640">And</span> <span m="133060">it</span>
  <span m="133270">worked</span> <span m="133660">very</span> <span
  m="134020">well.</span> <span m="134840">So</span> <span
  m="134950">here's</span> <span m="135250">the</span> <span
  m="135400">idea.</span> <span m="136420">It's</span> <span
  m="136630">called</span> <span m="136960">the</span> <span
  m="137080">QR</span> <span m="137800">method</span> <span
  m="138250">because</span> <span m="138670">you</span> <span
  m="138850">start</span> <span m="139300">by</span> <span
  m="139540">factoring</span> <span m="141730">your</span> <span
  m="141850">matrix</span> <span m="142510">into</span> <span
  m="142810">QR.</span> <span m="143530">So</span> <span
  m="143780">here's</span> <span m="144160">A.</span> <span
  m="145660">Can</span> <span m="145870">we</span> <span m="145990">call</span>
  <span m="146200">it</span> <span m="146350">A0?</span> <span
  m="149000">That's</span> <span m="149310">the</span> <span
  m="149410">matrix</span> <span m="150070">we</span> <span
  m="150280">start</span> <span m="150640">with</span> <span
  m="151450">whose</span> <span m="151720">eigenvalues</span> <span
  m="152470">we</span> <span m="152650">want.</span> <span m="153400">And</span>
  <span m="153580">I'll</span> <span m="153820">call</span> <span
  m="154180">these</span> <span m="154600">Q0</span> <span m="155020">and</span>
  <span m="155440">R0.</span></p><p><span m="157354">And</span> <span
  m="157780">you</span> <span m="157900">remember</span> <span
  m="158350">what</span> <span m="158530">that</span> <span
  m="158770">means,</span> <span m="160940">what's</span> <span
  m="161260">hiding</span> <span m="161710">behind</span> <span
  m="162160">those</span> <span m="162820">letters</span> <span
  m="163330">that</span> <span m="163450">I've</span> <span
  m="163630">written?</span> <span m="164620">You</span> <span
  m="164830">have</span> <span m="165070">the</span> <span
  m="165190">columns</span> <span m="165730">of</span> <span
  m="165880">A,</span> <span m="167350">possibly</span> <span
  m="167920">symmetric</span> <span m="168580">as</span> <span
  m="168760">I</span> <span m="168850">said,</span> <span m="169930">but</span>
  <span m="170350">not</span> <span m="170680">orthogonal</span> <span
  m="173050">usually.</span> <span m="174100">So</span> <span
  m="174310">you</span> <span m="176740">find</span> <span m="177980">an</span>
  <span m="178180">orthogonal</span> <span m="178840">basis.</span> <span
  m="179380">You</span> <span m="179530">orthogonalize--</span> <span
  m="180860">you</span> <span m="181000">line</span> <span
  m="181450">them</span> <span m="181570">up</span> <span
  m="181840">perpendicular</span> <span m="182680">to</span> <span
  m="182800">each</span> <span m="183010">other.</span> <span
  m="183700">And</span> <span m="183850">then</span> <span
  m="184060">there</span> <span m="184200">is</span> <span m="184330">a</span>
  <span m="184390">matrix</span> <span m="184990">R,</span> <span
  m="186580">which</span> <span m="187390">happens</span> <span
  m="187810">to</span> <span m="187930">be</span> <span m="188320">upper</span>
  <span m="188650">triangular,</span> <span m="190780">that</span> <span
  m="191800">connects</span> <span m="192910">the</span> <span
  m="193300">not-orthogonal</span> <span m="194740">basis</span> <span
  m="195400">with</span> <span m="195730">the</span> <span
  m="196030">orthogonality</span> <span m="196690">base.</span> <span
  m="198070">Right.</span> <span m="198810">We</span> <span
  m="199750">constructed</span> <span m="200500">R</span> <span
  m="203200">step-by-step.</span></p><p><span m="206310">And</span> <span
  m="206330">then,</span> <span m="207230">the</span> <span
  m="207380">idea</span> <span m="207770">is</span> <span
  m="209450">write</span> <span m="209720">these</span> <span
  m="210080">in</span> <span m="210230">the</span> <span
  m="210320">reverse</span> <span m="210830">order,</span> <span
  m="214390">and</span> <span m="214510">that</span> <span
  m="214690">will</span> <span m="214840">be</span> <span m="215050">A1,</span>
  <span m="215860">the</span> <span m="216010">next</span> <span
  m="216460">A.</span> <span m="220800">And</span> <span m="220950">then</span>
  <span m="221100">do</span> <span m="221310">it</span> <span
  m="221400">again</span> <span m="221760">and</span> <span
  m="221940">again</span> <span m="222300">and</span> <span
  m="222420">again.</span> <span m="224690">And</span> <span
  m="226050">so</span> <span m="226980">we're</span> <span
  m="227250">hoping,</span> <span m="227640">of</span> <span
  m="227760">course,</span> <span m="228210">that</span> <span
  m="228420">the</span> <span m="228570">eigenvalues</span> <span
  m="230370">didn't</span> <span m="230670">change.</span> <span
  m="231730">We're</span> <span m="232110">hoping</span> <span
  m="232530">that</span> <span m="232680">we</span> <span m="232830">can</span>
  <span m="233010">forget</span> <span m="233460">A0,</span> <span
  m="234780">start</span> <span m="235140">again</span> <span
  m="235440">with</span> <span m="235650">A1,</span> <span m="236190">and</span>
  <span m="236370">produce</span> <span m="236880">A2</span> <span
  m="238110">and</span> <span m="238320">continue.</span> <span
  m="239730">So</span> <span m="239910">we're</span> <span
  m="240060">hoping</span> <span m="240390">two</span> <span
  m="240600">things.</span> <span m="240960">One</span> <span
  m="241230">will</span> <span m="241380">not</span> <span m="241590">be</span>
  <span m="241740">a</span> <span m="241770">hope.</span> <span
  m="242070">We</span> <span m="242220">can</span> <span m="242430">see</span>
  <span m="242850">that</span> <span m="243150">the</span> <span
  m="243810">eigenvalues</span> <span m="246630">of</span> <span
  m="246750">A1</span> <span m="247230">and</span> <span m="247410">A0</span>
  <span m="247860">are</span> <span m="247980">the</span> <span
  m="248130">same.</span> <span m="248580">So</span> <span m="248820">we</span>
  <span m="248940">have</span> <span m="249120">not</span> <span
  m="249330">changed</span> <span m="249780">the</span> <span
  m="249930">eigenvalues.</span></p><p><span m="251190">How</span> <span
  m="251370">do</span> <span m="251490">we</span> <span m="251640">see</span>
  <span m="251910">that?</span> <span m="252840">If</span> <span
  m="252990">you</span> <span m="253140">had</span> <span m="253320">to</span>
  <span m="253440">show</span> <span m="253860">that</span> <span
  m="254010">two</span> <span m="254250">matrices</span> <span
  m="255720">had</span> <span m="255900">the</span> <span m="256050">same</span>
  <span m="256500">eigenvalues,</span> <span m="258660">would</span> <span
  m="258870">you</span> <span m="258990">compute</span> <span
  m="259470">all</span> <span m="259620">the</span> <span
  m="259769">eigenvalues</span> <span m="260490">and</span> <span
  m="260640">compare</span> <span m="261089">them?</span> <span
  m="261810">Certainly</span> <span m="262260">not.</span> <span
  m="263220">What</span> <span m="263400">would</span> <span
  m="263610">you</span> <span m="263730">do?</span> <span
  m="263940">What's</span> <span m="264270">the</span> <span
  m="265290">best</span> <span m="265890">test,</span> <span
  m="266910">the</span> <span m="267030">usual</span> <span
  m="267540">test,</span> <span m="268050">the</span> <span
  m="268200">usual</span> <span m="268950">thing</span> <span
  m="269190">you</span> <span m="269280">would</span> <span
  m="269490">want</span> <span m="269730">to</span> <span m="269790">show</span>
  <span m="271520">to--</span></p><p><span m="271860">AUDIENCE:</span> <span
  m="272065">They're</span> <span m="272270">similar.</span></p><p><span
  m="273090">GILBERT STRANG:</span> <span m="273225">They're</span> <span
  m="273360">similar,</span> <span m="273990">that's</span> <span
  m="274230">right.</span> <span m="274530">So</span> <span
  m="274860">the</span> <span m="275010">claim</span> <span
  m="275370">would</span> <span m="275550">be</span> <span
  m="276180">that</span> <span m="276360">these</span> <span
  m="276660">two</span> <span m="276900">matrices</span> <span
  m="277680">are</span> <span m="277830">similar.</span> <span
  m="279060">Right.</span> <span m="280570">So</span> <span
  m="280720">maybe</span> <span m="280990">we</span> <span
  m="281140">should</span> <span m="281350">show</span> <span
  m="281620">that.</span> <span m="282270">So</span> <span m="282490">we</span>
  <span m="282670">want</span> <span m="282880">to</span> <span
  m="282940">write</span> <span m="283300">A1</span> <span m="283870">in</span>
  <span m="284020">a</span> <span m="284080">different</span> <span
  m="284470">way.</span> <span m="285330">So</span> <span m="285880">the</span>
  <span m="285970">claim</span> <span m="286390">is</span> <span
  m="286660">A1</span> <span m="287830">is</span> <span
  m="288010">similar</span> <span m="288480">to</span> <span
  m="288590">A.</span> <span m="291820">So</span> <span m="292000">we</span>
  <span m="292120">just</span> <span m="292360">have</span> <span
  m="292540">to</span> <span m="293380">figure</span> <span
  m="293830">out--</span> <span m="295180">we</span> <span
  m="295300">have</span> <span m="295450">to</span> <span m="295540">get</span>
  <span m="295780">A1</span> <span m="296350">and</span> <span
  m="296470">turn</span> <span m="296710">it</span> <span m="297010">to</span>
  <span m="297250">A0.</span> <span m="298720">So</span> <span
  m="299130">here</span> <span m="299340">is</span> <span m="299470">A1.</span>
  <span m="303250">So</span> <span m="303460">A1.</span> <span
  m="305320">I</span> <span m="305440">want</span> <span m="305590">to</span>
  <span m="306340">show</span> <span m="306580">that</span> <span
  m="306710">that's</span> <span m="307000">right.</span> <span
  m="307300">So</span> <span m="307480">that's</span> <span
  m="308170">R0,</span> <span m="309310">Q0.</span></p><p><span
  m="311830">But</span> <span m="312010">what</span> <span m="312250">is</span>
  <span m="312490">Q0?</span> <span m="314570">From</span> <span
  m="314810">here,</span> <span m="315530">Q0</span> <span m="316280">is</span>
  <span m="316490">what</span> <span m="316760">we--</span> <span
  m="320000">Q0</span> <span m="321200">is--</span> <span m="321740">what</span>
  <span m="321950">do</span> <span m="321990">I want?</span> <span
  m="322460">I</span> <span m="322550">want</span> <span m="322760">to</span>
  <span m="322820">put</span> <span m="323090">R0</span> <span
  m="323870">inverse</span> <span m="324410">over</span> <span
  m="324650">there.</span> <span m="324960">So</span> <span
  m="326860">R0.</span> <span m="327800">Now</span> <span m="328100">for</span>
  <span m="328280">Q0,</span> <span m="329060">I'm</span> <span
  m="329240">going</span> <span m="329350">to</span> <span
  m="329510">substitute.</span> <span m="331938">So</span> <span
  m="332380">what</span> <span m="332560">is</span> <span m="332710">Q0?</span>
  <span m="335050">I</span> <span m="335440">multiply</span> <span
  m="335950">both</span> <span m="336190">sides</span> <span
  m="336580">of</span> <span m="336670">that</span> <span
  m="336850">equation</span> <span m="337360">by</span> <span
  m="337600">R0</span> <span m="338230">inverse.</span> <span
  m="339400">So</span> <span m="339640">Q0</span> <span m="340540">is</span>
  <span m="341740">A0</span> <span m="344230">is--</span> <span
  m="344580">sorry,</span> <span m="344800">I</span> <span
  m="344950">said</span> <span m="346390">A</span> <span m="346720">and</span>
  <span m="347140">wrote</span> <span m="347440">Q.</span> <span
  m="348760">A0,</span> <span m="350380">R0</span> <span
  m="351070">inverse.</span> <span m="355320">For</span> <span
  m="355520">Q0,</span> <span m="356990">I've</span> <span m="357110">put</span>
  <span m="357440">in</span> <span m="357710">what</span> <span
  m="357900">it</span> <span m="358460">equals.</span> <span
  m="359570">And</span> <span m="359990">that's</span> <span
  m="360320">done</span> <span m="360560">it.</span> <span
  m="362290">That's</span> <span m="362620">exactly</span> <span
  m="363280">telling</span> <span m="363700">me</span> <span
  m="364540">that</span> <span m="364930">A1</span> <span
  m="366640">which</span> <span m="367210">is</span> <span
  m="367420">this,</span> <span m="368440">equals</span> <span
  m="368830">this,</span> <span m="369670">and</span> <span
  m="369820">that's</span> <span m="370080">a</span> <span
  m="370300">similarity</span> <span m="371080">transformation.</span> <span
  m="372410">I</span> <span m="372430">have</span> <span m="372550">not</span>
  <span m="372790">changed</span> <span m="373180">the</span> <span
  m="373330">eigenvalues.</span> <span m="374860">So</span> <span
  m="375100">that's</span> <span m="375400">OK.</span></p><p><span
  m="377010">The</span> <span m="377160">other</span> <span
  m="377790">thing,</span> <span m="378150">which</span> <span
  m="378390">is</span> <span m="378600">the,</span> <span m="380010">you</span>
  <span m="380100">could</span> <span m="380250">say,</span> <span
  m="380460">the</span> <span m="380580">miracle</span> <span
  m="381180">in</span> <span m="381300">this</span> <span
  m="381600">thing,</span> <span m="382740">is</span> <span
  m="383070">that</span> <span m="384180">when</span> <span m="384360">I</span>
  <span m="384480">continue</span> <span m="385020">to</span> <span
  m="385140">do</span> <span m="385380">that</span> <span m="386700">for</span>
  <span m="386880">almost</span> <span m="387360">every</span> <span
  m="387660">matrix,</span> <span m="389330">the</span> <span
  m="389730">matrices</span> <span m="391050">begin</span> <span
  m="391530">to</span> <span m="391650">lose</span> <span
  m="392160">stuff</span> <span m="392730">off</span> <span
  m="393000">the</span> <span m="393090">diagonal,</span> <span
  m="395660">especially</span> <span m="396230">below</span> <span
  m="396620">the</span> <span m="396770">diagonal</span> <span
  m="397570">by</span> <span m="397800">the</span> <span
  m="398060">ordering</span> <span m="398660">that</span> <span
  m="399530">QR</span> <span m="400100">has</span> <span m="400280">done.</span>
  <span m="401180">So</span> <span m="402230">it would</span> <span
  m="402440">tend</span> <span m="402740">to--</span> <span
  m="403440">you</span> <span m="403730">start</span> <span
  m="404060">with</span> <span m="404210">a</span> <span
  m="404270">matrix</span> <span m="404810">A0.</span> <span
  m="409230">You</span> <span m="409400">got</span> <span m="409550">a</span>
  <span m="409610">matrix</span> <span m="410160">A1,</span> <span
  m="411980">which</span> <span m="412280">is</span> <span m="413600">a</span>
  <span m="413630">little</span> <span m="413930">smaller</span> <span
  m="414620">here.</span> <span m="419080">This</span> <span
  m="419370">part</span> <span m="420420">being</span> <span
  m="421620">especially</span> <span m="422160">smaller.</span></p><p><span
  m="422760">You</span> <span m="422940">do</span> <span m="423150">it</span>
  <span m="423240">again.</span> <span m="423690">This</span> <span
  m="423900">is</span> <span m="424050">even</span> <span
  m="424320">smaller.</span> <span m="426000">Even</span> <span
  m="426390">smaller.</span> <span m="427240">A2.</span> <span
  m="428460">Even</span> <span m="428820">smaller.</span> <span
  m="430080">And</span> <span m="430200">you</span> <span m="430290">keep</span>
  <span m="430530">going.</span> <span m="431820">And</span> <span
  m="434110">for</span> <span m="434340">most</span> <span
  m="434650">matrices,</span> <span m="436120">the</span> <span
  m="436180">result</span> <span m="437200">is</span> <span
  m="437830">that--</span> <span m="438730">I</span> <span
  m="438820">don't</span> <span m="438970">know</span> <span
  m="439120">how</span> <span m="439270">many</span> <span
  m="439510">steps</span> <span m="439930">we</span> <span
  m="440080">want</span> <span m="440290">to</span> <span
  m="440380">think</span> <span m="440620">of</span> <span
  m="440770">taking,</span> <span m="442420">but</span> <span
  m="443200">we</span> <span m="443410">get</span> <span m="443830">quite</span>
  <span m="444220">small</span> <span m="444760">numbers</span> <span
  m="445270">here,</span> <span m="447170">especially--</span> <span
  m="448690">yeah.</span> <span m="449000">So</span> <span
  m="449180">once</span> <span m="449450">we</span> <span m="449600">get</span>
  <span m="449780">small</span> <span m="450110">numbers</span> <span
  m="450500">here,</span> <span m="451370">little</span> <span
  m="451670">epsilons--</span> <span m="452940">that's</span> <span
  m="453470">everybody's</span> <span m="455060">shorthand</span> <span
  m="455630">for</span> <span m="455840">small</span> <span
  m="456140">numbers--</span> <span m="457610">what</span> <span
  m="459290">would</span> <span m="459500">you</span> <span
  m="459590">expect</span> <span m="459980">to</span> <span
  m="460100">see</span> <span m="460370">on</span> <span m="460490">the</span>
  <span m="460610">diagonal?</span></p><p><span m="461330">AUDIENCE:</span>
  <span m="461518">The</span> <span m="461706">eigenvalues.</span></p><p><span
  m="462460">GILBERT STRANG:</span> <span m="462550">The</span> <span
  m="462640">eigenvalues,</span> <span m="464620">because</span> <span
  m="465280">this</span> <span m="465550">has</span> <span m="465790">the</span>
  <span m="465910">same</span> <span m="466390">eigenvalues</span> <span
  m="467170">as</span> <span m="467320">this,</span> <span m="467740">as
  this,</span> <span m="468160">as</span> <span m="468310">this,</span> <span
  m="469030">and</span> <span m="469150">these</span> <span
  m="469360">little</span> <span m="469690">epsilons</span> <span
  m="470530">are</span> <span m="470620">not</span> <span
  m="470890">going</span> <span m="471090">to</span> <span
  m="472030">change</span> <span m="472450">the</span> <span
  m="472570">eigenvalues</span> <span m="473170">too</span> <span
  m="473350">much.</span> <span m="473590">So</span> <span
  m="473800">these</span> <span m="474100">will</span> <span
  m="474250">be,</span> <span m="475000">on</span> <span m="475150">the</span>
  <span m="475240">diagonal,</span> <span m="476440">will</span> <span
  m="476650">be</span> <span m="477040">close</span> <span m="477610">to</span>
  <span m="480580">the</span> <span m="480700">eigenvalues.</span> <span
  m="482020">And</span> <span m="482200">actually,</span> <span
  m="482560">what</span> <span m="482770">happens</span> <span
  m="483220">is</span> <span m="483400">this</span> <span m="483700">one</span>
  <span m="485890">comes</span> <span m="486250">first.</span> <span
  m="487270">That</span> <span m="487450">one</span> <span m="487660">is</span>
  <span m="487840">quite</span> <span m="488170">accurate</span> <span
  m="489460">first.</span> <span m="490600">I</span> <span
  m="490750">guess</span> <span m="491350">we</span> <span
  m="491560">should</span> <span m="492160">probably</span> <span
  m="492520">do</span> <span m="492730">a</span> <span m="493600">simple</span>
  <span m="494830">example</span> <span m="496640">to</span> <span
  m="497240">see</span> <span m="497510">this</span> <span
  m="497780">happen.</span></p><p><span m="499870">Actually,</span> <span
  m="500290">I</span> <span m="500440">do</span> <span m="500690">an</span>
  <span m="500830">example</span> <span m="501400">in</span> <span
  m="501550">the</span> <span m="501670">notes.</span> <span
  m="502980">And</span> <span m="503110">let</span> <span m="503260">me</span>
  <span m="503440">say</span> <span m="503890">what</span> <span
  m="504820">happens.</span> <span m="505570">So</span> <span
  m="505810">I</span> <span m="505930">do</span> <span m="506440">a</span> <span
  m="506530">2 by 2</span> <span m="507190">example</span> <span
  m="508900">which</span> <span m="509170">has</span> <span
  m="509380">something</span> <span m="509860">like</span> <span
  m="510370">cos</span> <span m="510810">theta,</span> <span
  m="512890">sine</span> <span m="513340">theta.</span> <span
  m="517830">I</span> <span m="517919">don't</span> <span m="518100">know</span>
  <span m="518250">what--</span> <span m="518520">I've</span> <span
  m="518669">forgotten</span> <span m="519090">what</span> <span
  m="519299">I</span> <span m="519390">took,</span> <span m="520289">and</span>
  <span m="520530">I</span> <span m="520620">don't</span> <span
  m="520890">have</span> <span m="521100">that</span> <span
  m="521309">page</span> <span m="521700">of</span> <span
  m="521820">notes</span> <span m="522179">here.</span> <span
  m="522440">Something</span> <span m="522840">here,</span> <span
  m="523710">something</span> <span m="524130">here,</span> <span
  m="524400">something</span> <span m="524820">here</span> <span
  m="527980">as</span> <span m="528880">A0.</span> <span m="531370">And,</span>
  <span m="531550">then</span> <span m="531940">A1,</span> <span
  m="533680">after</span> <span m="534010">just</span> <span
  m="534250">one</span> <span m="534550">step,</span> <span
  m="535810">has</span> <span m="536110">sine</span> <span
  m="537700">cubed</span> <span m="538450">theta</span> <span
  m="538970">there</span> <span m="541440">and</span> <span
  m="543510">numbers</span> <span m="543990">there</span> <span
  m="544410">that</span> <span m="545310">are</span> <span
  m="545400">getting</span> <span m="546570">much</span> <span
  m="546840">closer</span> <span m="547290">to</span> <span
  m="547410">the</span> <span m="547560">eigenvalues.</span></p><p><span
  m="548160">Sorry</span> <span m="548520">that</span> <span
  m="548700">this</span> <span m="548940">isn't</span> <span m="549210">a</span>
  <span m="549690">full-scale</span> <span m="550770">example,</span> <span
  m="551820">but</span> <span m="552090">the</span> <span
  m="552240">point</span> <span m="552700">of</span> <span m="552780">the</span>
  <span m="552900">example</span> <span m="553380">is</span> <span
  m="553590">here,</span> <span m="554460">that</span> <span
  m="554700">this</span> <span m="557790">off-diagonal</span> <span
  m="558690">entry</span> <span m="561170">gets</span> <span
  m="561440">cubed.</span> <span m="562880">And</span> <span
  m="563780">the</span> <span m="563900">next</span> <span
  m="564230">step</span> <span m="564650">will</span> <span m="565640">be</span>
  <span m="565790">its</span> <span m="565980">9th</span> <span
  m="566450">power,</span> <span m="567500">and</span> <span
  m="567590">then</span> <span m="567770">the</span> <span
  m="567890">27th</span> <span m="568640">power.</span> <span
  m="569330">So</span> <span m="569720">it's</span> <span
  m="569960">really</span> <span m="570500">quickly</span> <span
  m="570950">going</span> <span m="571250">to</span> <span m="571340">0.</span>
  <span m="572540">And</span> <span m="573620">this</span> <span
  m="575090">happens--</span> <span m="575840">so</span> <span
  m="576920">cubic</span> <span m="577430">convergence</span> <span
  m="578530">is--</span> <span m="579800">that's</span> <span
  m="580100">a</span> <span m="580400">price</span> <span m="581150">in</span>
  <span m="581800">numerical</span> <span m="583130">linear</span> <span
  m="583490">algebra.</span></p><p><span m="585410">So</span> <span
  m="586610">that</span> <span m="586880">happens.</span> <span
  m="588880">So</span> <span m="589090">this</span> <span
  m="589390">arrived</span> <span m="589990">on</span> <span
  m="590170">the</span> <span m="590290">scene</span> <span
  m="591340">and</span> <span m="593110">quickly</span> <span
  m="593560">blew</span> <span m="593860">away</span> <span
  m="594220">all</span> <span m="594460">other</span> <span
  m="594670">methods</span> <span m="595720">that</span> <span
  m="595870">were</span> <span m="597130">being</span> <span
  m="597400">used</span> <span m="597730">to</span> <span
  m="597850">compute</span> <span m="598300">eigenvalues.</span> <span
  m="600560">But</span> <span m="601790">numerical</span> <span
  m="602630">people,</span> <span m="602990">being</span> <span
  m="603470">what</span> <span m="603680">they</span> <span
  m="603860">are,</span> <span m="604610">they</span> <span
  m="604730">wanted</span> <span m="605030">to</span> <span
  m="605180">improve</span> <span m="605600">it--</span> <span
  m="606020">like,</span> <span m="606350">is</span> <span
  m="606530">there</span> <span m="606620">a</span> <span m="606680">way</span>
  <span m="606860">to</span> <span m="606950">make</span> <span
  m="607190">it</span> <span m="607310">faster?</span> <span m="608780">And
  it</span> <span m="609230">turned</span> <span m="609620">out</span> <span
  m="609800">there</span> <span m="610010">is.</span> <span m="612050">It</span>
  <span m="612110">turned</span> <span m="612440">out</span> <span
  m="612830">that</span> <span m="613790">the</span> <span
  m="613940">better</span> <span m="614330">way--</span> <span
  m="617120">basically,</span> <span m="617660">the</span> <span
  m="617810">same</span> <span m="618170">idea,</span> <span
  m="619310">but</span> <span m="619610">just</span> <span
  m="621260">you're</span> <span m="621440">always</span> <span
  m="621800">looking</span> <span m="622160">for</span> <span
  m="622370">a</span> <span m="625130">simple</span> <span
  m="626900">change.</span> <span m="631060">And</span> <span
  m="631990">the</span> <span m="632260">idea</span> <span m="632560">of</span>
  <span m="632650">introducing</span> <span m="633340">a</span> <span
  m="633430">shift</span> <span m="634680">was</span> <span
  m="634960">tried</span> <span m="636730">and</span> <span
  m="637450">turned</span> <span m="637780">out</span> <span
  m="637990">to</span> <span m="638140">work</span> <span
  m="640230">extremely</span> <span m="640770">well.</span> <span
  m="642140">So</span> <span m="642950">that's</span> <span
  m="643070">the</span> <span m="643280">improvement.</span></p><p><span
  m="644960">So</span> <span m="645150">we</span> <span m="645300">take</span>
  <span m="645720">A1--</span> <span m="647460">no.</span> <span
  m="647730">So</span> <span m="647970">how</span> <span m="648630">does</span>
  <span m="648900">it--</span> <span m="649500">how</span> <span
  m="649650">does</span> <span m="649860">the</span> <span
  m="650010">shift</span> <span m="650460">work?</span> <span
  m="651910">So</span> <span m="652020">instead</span> <span
  m="652470">of</span> <span m="652600">A1--</span> <span m="654890">have</span>
  <span m="655020">I</span> <span m="655110">got</span> <span
  m="655320">space</span> <span m="655710">here</span> <span
  m="655890">to</span> <span m="656010">do</span> <span m="656550">this?</span>
  <span m="657480">Instead</span> <span m="657870">of</span> <span
  m="658080">A0,</span> <span m="659460">I</span> <span m="659580">take</span>
  <span m="659985">A1</span> <span m="660390">minus</span> <span
  m="660880">a</span> <span m="660950">shift.</span> <span m="662430">So</span>
  <span m="662690">a</span> <span m="662760">shift</span> <span
  m="663040">is</span> <span m="663280">some</span> <span
  m="663600">multiple</span> <span m="664110">of</span> <span
  m="664200">the</span> <span m="664350">identity.</span> <span
  m="666360">If</span> <span m="666410">I</span> <span m="666500">just</span>
  <span m="666830">move</span> <span m="667160">a</span> <span
  m="667220">matrix</span> <span m="667820">by</span> <span m="668090">a</span>
  <span m="668150">multiple</span> <span m="668630">of</span> <span
  m="668750">the</span> <span m="668900">identity,</span> <span
  m="670040">what</span> <span m="670220">happens</span> <span
  m="670610">to</span> <span m="670790">its</span> <span
  m="670970">eigenvectors?</span> <span m="672050">What</span> <span
  m="672260">happens</span> <span m="672590">to</span> <span
  m="672710">its</span> <span m="672890">eigenvalues?</span> <span
  m="674720">Something</span> <span m="675110">pretty</span> <span
  m="675440">simple,</span> <span m="675920">right,</span> <span
  m="676220">because</span> <span m="676610">I'm</span> <span
  m="676760">just</span> <span m="676970">shifting</span> <span
  m="677420">by</span> <span m="678230">sI.</span> <span m="679610">What</span>
  <span m="679790">happens</span> <span m="680240">to</span> <span
  m="680390">its</span> <span m="680570">eigenvectors?</span></p><p><span
  m="681560">AUDIENCE:</span> <span m="681676">They</span> <span
  m="681792">stay</span> <span m="681908">the</span> <span
  m="682025">same.</span></p><p><span m="682490">GILBERT STRANG:</span> <span
  m="682610">They're</span> <span m="682730">the</span> <span
  m="682950">same.</span> <span m="684820">And</span> <span
  m="684950">what</span> <span m="685130">happens</span> <span
  m="685400">to</span> <span m="685490">the</span> <span
  m="685640">eigenvalues?</span></p><p><span m="686956">AUDIENCE:</span> <span
  m="687052">They</span> <span m="687148">change</span> <span
  m="687244">by</span> <span m="687342">s.</span></p><p><span m="687730">GILBERT
  STRANG:</span> <span m="687805">They</span> <span m="687880">change</span>
  <span m="688270">by</span> <span m="688480">s.</span> <span
  m="690460">If</span> <span m="690910">A0</span> <span m="691990">V</span>
  <span m="692590">equaled</span> <span m="693130">lambda</span> <span
  m="693640">v,</span> <span m="695350">then</span> <span m="695560">when</span>
  <span m="695740">I</span> <span m="695830">multiply</span> <span
  m="696220">this</span> <span m="696520">by</span> <span m="696790">V,</span>
  <span m="697150">there will</span> <span m="697360">be</span> <span
  m="697510">an</span> <span m="697630">extra--</span> <span
  m="699010">it'll</span> <span m="699190">be</span> <span
  m="699370">lambda</span> <span m="700120">minus</span> <span
  m="700750">s</span> <span m="702900">because</span> <span
  m="703350">the</span> <span m="703470">identity</span> <span
  m="704160">times</span> <span m="704560">the V</span> <span
  m="704910">is</span> <span m="705060">just</span> <span m="705300">V.</span>
  <span m="706000">So</span> <span m="707160">it</span> <span
  m="707340">just</span> <span m="707610">shifts</span> <span
  m="708030">all</span> <span m="708180">the</span> <span
  m="708330">eigenvalues</span> <span m="709080">by</span> <span
  m="709320">s.</span> <span m="710310">And</span> <span m="710460">you</span>
  <span m="710610">try</span> <span m="710850">to</span> <span
  m="711000">shift--</span> <span m="712010">you</span> <span
  m="712440">look</span> <span m="712650">for</span> <span m="712800">a</span>
  <span m="712860">shift.</span> <span m="714570">This</span> <span
  m="714870">would</span> <span m="715020">be</span> <span
  m="715200">great.</span> <span m="715620">If</span> <span
  m="715770">you</span> <span m="715890">knew</span> <span
  m="716130">lambda</span> <span m="716580">N,</span> <span m="717390">a</span>
  <span m="717780">shift</span> <span m="718790">there,</span> <span
  m="719460">you</span> <span m="719640">would</span> <span m="719820">be</span>
  <span m="720000">looking</span> <span m="720480">for</span> <span
  m="720990">0</span> <span m="721560">then</span> <span m="722460">if</span>
  <span m="722610">you</span> <span m="722760">shifted</span> <span
  m="723210">them</span> <span m="723450">all</span> <span m="723690">by</span>
  <span m="723930">that</span> <span m="724170">lambda.</span> <span
  m="725250">And</span> <span m="725460">it</span> <span m="725580">turns</span>
  <span m="725940">out</span> <span m="726120">that</span> <span
  m="726300">would</span> <span m="726510">speed</span> <span
  m="726870">things</span> <span m="727230">up.</span></p><p><span
  m="727650">So</span> <span m="728370">it</span> <span m="728630">will</span>
  <span m="728730">work</span> <span m="729000">instead</span> <span
  m="729510">with</span> <span m="729780">this</span> <span
  m="730050">matrix</span> <span m="731280">as</span> <span
  m="732210">now,</span> <span m="732780">again,</span> <span
  m="733170">I'm</span> <span m="733350">factoring</span> <span
  m="733650">it</span> <span m="733950">in</span> <span m="734230">a</span>
  <span m="734370">Q0</span> <span m="735000">R0.</span> <span
  m="737190">So</span> <span m="737430">that's</span> <span
  m="737760">the</span> <span m="738960">work</span> <span m="739380">of</span>
  <span m="739530">the</span> <span m="739620">method</span> <span
  m="740790">is</span> <span m="741120">in</span> <span m="742170">doing</span>
  <span m="742500">Gram-Schmidt</span> <span m="743250">at</span> <span
  m="743400">every</span> <span m="743670">step.</span> <span
  m="745020">And</span> <span m="745170">then</span> <span
  m="745500">there's</span> <span m="745710">a</span> <span
  m="745770">little</span> <span m="746070">work</span> <span
  m="746700">in</span> <span m="747510">reversing</span> <span
  m="748200">the</span> <span m="748320">order.</span> <span
  m="753150">And</span> <span m="753330">then</span> <span m="755220">I</span>
  <span m="755310">want</span> <span m="755490">to</span> <span
  m="755550">undo</span> <span m="756030">the</span> <span
  m="756180">shift,</span> <span m="757010">so</span> <span m="757250">I</span>
  <span m="758010">do</span> <span m="758250">that</span> <span
  m="758490">factorization.</span> <span m="759470">Now,</span> <span
  m="759690">let's</span> <span m="759900">see.</span> <span
  m="760410">You</span> <span m="760530">may</span> <span m="760680">have</span>
  <span m="760830">to</span> <span m="761340">help</span> <span
  m="761580">me</span> <span m="762150">to</span> <span
  m="762300">remember</span> <span m="762870">what</span> <span
  m="763200">I</span> <span m="763290">should</span> <span m="763530">do</span>
  <span m="763860">here.</span> <span m="765240">So</span> <span
  m="765510">I</span> <span m="765720">factor</span> <span
  m="766470">those.</span> <span m="767880">I</span> <span
  m="768000">reverse</span> <span m="768600">those.</span> <span
  m="770250">And</span> <span m="770370">then</span> <span m="770670">I</span>
  <span m="770820">think</span> <span m="771600">I</span> <span
  m="772170">add</span> <span m="772380">back</span> <span m="773940">the</span>
  <span m="774070">shift,</span> <span m="774990">and</span> <span
  m="775140">that's</span> <span m="775500">my</span> <span
  m="777200">A1.</span></p><p><span m="780700">So</span> <span
  m="780810">I</span> <span m="780980">took</span> <span m="781330">A0.</span>
  <span m="781800">I</span> <span m="781900">shifted</span> <span
  m="782430">it.</span> <span m="783450">I</span> <span m="783480">worked</span>
  <span m="783840">with</span> <span m="784020">it.</span> <span
  m="784590">QR.</span> <span m="785610">Reversed</span> <span
  m="786100">the</span> <span m="786270">order.</span> <span
  m="786750">RQ.</span> <span m="787800">Added</span> <span
  m="788160">back</span> <span m="788460">the</span> <span
  m="788620">shift</span> <span m="789420">to</span> <span m="789600">get</span>
  <span m="790410">a</span> <span m="790470">matrix.</span> <span
  m="791150">And</span> <span m="791610">what</span> <span m="791880">am</span>
  <span m="792030">I,</span> <span m="792180">of</span> <span
  m="792330">course,</span> <span m="792660">hoping</span> <span
  m="793410">about</span> <span m="793710">the</span> <span
  m="793830">matrix</span> <span m="794430">A1</span> <span
  m="795990">and</span> <span m="796230">A0?</span> <span m="796980">I'm</span>
  <span m="797130">hoping</span> <span m="797460">they're</span> <span
  m="797670">still</span> <span m="798000">similar.</span> <span
  m="799960">So</span> <span m="800140">I</span> <span m="800260">did</span>
  <span m="800470">a</span> <span m="800560">shift</span> <span
  m="801040">and</span> <span m="801160">I</span> <span m="801340">undid</span>
  <span m="801770">a</span> <span m="801850">shift.</span> <span
  m="803030">But</span> <span m="803230">of</span> <span
  m="803350">course,</span> <span m="805030">after</span> <span
  m="806020">doing</span> <span m="806300">our</span> <span
  m="806410">QR,</span> <span m="806785">I</span> <span m="807160">have</span>
  <span m="807310">to</span> <span m="807460">check,</span> <span
  m="808780">are</span> <span m="808960">these</span> <span
  m="809290">really</span> <span m="809680">still</span> <span
  m="810040">similar?</span> <span m="811060">So</span> <span
  m="811300">let</span> <span m="811480">me</span> <span m="811630">just</span>
  <span m="811930">try</span> <span m="812200">to</span> <span
  m="812320">check</span> <span m="812620">that</span> <span
  m="812830">one</span> <span m="813010">again.</span> <span
  m="814880">Maybe</span> <span m="815270">I'll</span> <span
  m="817750">just--</span> <span m="818470">it's</span> <span
  m="818950">sitting</span> <span m="819310">right</span> <span
  m="819520">there,</span> <span m="819940">so</span> <span
  m="820780">let</span> <span m="821200">me</span> <span m="821380">do</span>
  <span m="821560">it</span> <span m="821680">again.</span></p><p><span
  m="822550">I'm</span> <span m="822760">hoping</span> <span
  m="824500">something--</span> <span m="828190">where</span> <span
  m="828410">did</span> <span m="828590">we--</span> <span m="829400">oh</span>
  <span m="829550">yeah,</span> <span m="829720">here.</span> <span
  m="830570">We</span> <span m="830750">show</span> <span m="831110">that</span>
  <span m="831350">A1</span> <span m="832670">was</span> <span
  m="832850">similar</span> <span m="833330">to</span> <span
  m="833480">A0,</span> <span m="834730">and</span> <span m="834890">I'm</span>
  <span m="835040">hoping</span> <span m="835490">that's</span> <span
  m="835820">probably</span> <span m="836300">still</span> <span
  m="836630">true</span> <span m="837600">even--</span> <span
  m="838860">the</span> <span m="840650">shift</span> <span
  m="840980">didn't</span> <span m="841280">mess</span> <span
  m="841580">that</span> <span m="841760">up.</span> <span
  m="842380">Let's</span> <span m="842660">just</span> <span
  m="842870">try.</span> <span m="843620">So</span> <span m="843880">A0--</span>
  <span m="845190">that's</span> <span m="845540">R0,</span> <span
  m="846210">Q0</span> <span m="848090">plus</span> <span m="848470">sI.</span>
  <span m="852120">And</span> <span m="852320">now</span> <span
  m="853250">what</span> <span m="853550">am</span> <span m="853700">I</span>
  <span m="853850">going</span> <span m="853960">to</span> <span
  m="854180">do?</span> <span m="855240">I'm</span> <span
  m="855320">going</span> <span m="855560">to--</span> <span
  m="856490">what</span> <span m="856910">did</span> <span m="857120">I</span>
  <span m="857240">do</span> <span m="857420">before?</span> <span
  m="859170">I</span> <span m="859290">figured</span> <span
  m="859830">out</span> <span m="860160">what</span> <span m="861080">Q0</span>
  <span m="861630">was</span> <span m="863400">from</span> <span
  m="863640">this.</span> <span m="866770">You</span> <span
  m="867040">remember?</span> <span m="867570">So</span> <span
  m="868250">this</span> <span m="868460">R0.</span></p><p><span
  m="871670">Now</span> <span m="871910">I</span> <span m="872000">have</span>
  <span m="872150">to</span> <span m="872270">put</span> <span
  m="872520">in</span> <span m="872690">Q0.</span> <span m="873320">But</span>
  <span m="873530">Q0</span> <span m="874140">is</span> <span
  m="874580">this</span> <span m="874920">thing</span> <span
  m="875200">inverse</span> <span m="875770">times</span> <span
  m="876560">this.</span> <span m="876860">Is</span> <span
  m="876980">this</span> <span m="877190">going</span> <span
  m="877310">to</span> <span m="877460">work?</span> <span m="878750">I'm</span>
  <span m="880310">hoping,</span> <span m="880760">but</span> <span
  m="880910">I</span> <span m="881030">don't</span> <span
  m="881350">think</span> <span m="881630">I</span> <span
  m="881780">wanted</span> <span m="882170">to</span> <span
  m="882320">get</span> <span m="882590">that.</span> <span
  m="887190">No,</span> <span m="887610">it's</span> <span m="887790">not</span>
  <span m="888150">Q0</span> <span m="888540">there.</span> <span
  m="890610">What</span> <span m="891700">do</span> <span m="891840">I</span>
  <span m="891930">put</span> <span m="892140">it</span> <span
  m="892230">here?</span> <span m="895070">And</span> <span m="895240">if</span>
  <span m="895360">it</span> <span m="895420">doesn't</span> <span
  m="895750">work,</span> <span m="898250">we'll</span> <span
  m="898840">leave</span> <span m="899080">it</span> <span m="899200">as</span>
  <span m="899380">an</span> <span m="899500">exercise.</span></p><p><span
  m="901666">AUDIENCE:</span> <span
  m="901853">[INAUDIBLE]</span></p><p>&nbsp;</p><p><span m="903370">GILBERT
  STRANG:</span> <span m="903505">Yeah,</span> <span m="903640">because</span>
  <span m="904880">I</span> <span m="905000">didn't</span> <span
  m="906760">start</span> <span m="907300">right</span> <span
  m="907810">somehow.</span> <span m="911320">But</span> <span
  m="911860">let</span> <span m="912010">me</span> <span m="912130">just</span>
  <span m="912340">push</span> <span m="912670">along</span> <span
  m="913090">to</span> <span m="913200">see</span> <span m="913450">what</span>
  <span m="913630">happens.</span> <span m="914530">So</span> <span
  m="914790">I'm</span> <span m="914980">plugging</span> <span
  m="915490">in</span> <span m="915700">for</span> <span m="915970">Q0</span>
  <span m="916630">here.</span> <span m="917620">I'm</span> <span
  m="917740">plugging</span> <span m="918250">in</span> <span
  m="918580">this</span> <span m="919060">matrix,</span> <span
  m="919930">so</span> <span m="920180">it's</span> <span
  m="920380">shouldn't</span> <span m="920600">have</span> <span
  m="920970">inverted</span> <span m="921560">it,</span> <span
  m="922270">times</span> <span m="923380">R0</span> <span
  m="923920">inverse.</span> <span m="925600">Who</span> <span
  m="925750">knows?</span> <span m="926170">It</span> <span
  m="926260">might</span> <span m="926470">work.</span> <span
  m="928390">Who</span> <span m="928570">knows?</span> <span
  m="929840">So</span> <span m="929950">that's</span> <span
  m="930220">the</span> <span m="930340">R0,</span> <span m="930760">Q0.</span>
  <span m="931990">Right?</span> <span m="933160">Is</span> <span
  m="933310">everybody</span> <span m="933610">with</span> <span
  m="933790">me?</span> <span m="934120">Sorry</span> <span
  m="934420">about</span> <span m="934670">the--</span> <span
  m="937090">R0</span> <span m="938350">inverse.</span> <span
  m="939820">And</span> <span m="939940">then</span> <span m="940120">I</span>
  <span m="940240">have</span> <span m="940390">to</span> <span
  m="940540">add</span> <span m="940900">sI.</span></p><p><span
  m="945860">So</span> <span m="946390">what</span> <span m="946570">have</span>
  <span m="946690">I</span> <span m="946810">done?</span> <span
  m="947210">I've</span> <span m="947410">just</span> <span
  m="948790">pushed</span> <span m="949180">on,</span> <span
  m="950820">believing</span> <span m="951390">that</span> <span
  m="951570">this</span> <span m="951840">would</span> <span
  m="952050">work</span> <span m="953280">because</span> <span
  m="955000">it's</span> <span m="955650">the</span> <span
  m="955800">method</span> <span m="956250">that</span> <span
  m="957450">is</span> <span m="958230">constantly</span> <span
  m="958890">used.</span> <span m="959340">Now,</span> <span
  m="959700">do</span> <span m="959910">I</span> <span m="960060">have--</span>
  <span m="961690">what</span> <span m="961710">do</span> <span
  m="961830">I</span> <span m="961920">have</span> <span
  m="962160">there?</span> <span m="965020">Is</span> <span m="965200">it</span>
  <span m="965290">working?</span> <span m="967760">This is</span> <span
  m="967970">R0</span> <span m="969020">A.</span> <span m="969800">That</span>
  <span m="970010">was,</span> <span m="970250">of</span> <span
  m="970340">course,</span> <span m="970700">A0.</span> <span
  m="971700">R0,</span> <span m="971880">A0,</span> <span m="972740">R0</span>
  <span m="973190">inverse.</span> <span m="974390">R0,</span> <span
  m="976040">A0,</span> <span m="977880">R0</span> <span
  m="978430">inverse.</span> <span m="979040">Good.</span> <span
  m="981750">Minus</span> <span m="982500">s.</span> <span
  m="983270">What</span> <span m="985110">have</span> <span m="985260">I</span>
  <span m="985350">got</span> <span m="985620">there</span> <span
  m="986780">from</span> <span m="987430">the</span> <span m="987650">R0</span>
  <span m="988350">minus</span> <span m="988830">sI</span> <span
  m="989400">R0?</span> <span m="989940">What</span> <span m="990120">is</span>
  <span m="990300">that?</span></p><p><span m="991332">AUDIENCE:</span> <span
  m="991467">Minus</span> <span m="991602">sI.</span></p><p><span
  m="992550">GILBERT STRANG:</span> <span m="992655">That's</span> <span
  m="992760">minus</span> <span m="993210">sI.</span> <span
  m="993670">Ha,</span> <span m="994100">look.</span> <span
  m="995450">Success.</span> <span m="996540">The</span> <span
  m="996900">R0</span> <span m="997380">cancels</span> <span
  m="997850">the</span> <span m="997980">R0</span> <span
  m="998430">inverse.</span> <span m="998850">So</span> <span
  m="999720">that</span> <span m="1000020">term</span> <span
  m="1000410">from</span> <span m="1000755">that,</span> <span
  m="1001100">that,</span> <span m="1001940">that</span> <span
  m="1002690">is</span> <span m="1003200">minus</span> <span
  m="1003680">sI</span> <span m="1004580">cancels</span> <span
  m="1005060">plus</span> <span m="1005330">sI.</span> <span
  m="1005770">I'm</span> <span m="1005900">finished.</span> <span
  m="1006980">And</span> <span m="1007250">lo</span> <span
  m="1007520">and</span> <span m="1007850">behold,</span> <span
  m="1009330">we</span> <span m="1009430">have</span> <span
  m="1009500">the</span> <span m="1009630">same</span> <span
  m="1011090">similarity.</span> <span m="1011930">So</span> <span
  m="1012860">we</span> <span m="1012980">messed</span> <span
  m="1013370">around</span> <span m="1013820">by</span> <span
  m="1014150">a</span> <span m="1015080">multiple</span> <span
  m="1015590">of</span> <span m="1015680">the</span> <span
  m="1015830">identity,</span> <span m="1016520">and</span> <span
  m="1016670">it</span> <span m="1016930">didn't--</span> <span
  m="1018440">it</span> <span m="1020210">actually</span> <span
  m="1021870">makes</span> <span m="1022470">the</span> <span
  m="1022560">thing</span> <span m="1022950">converge</span> <span
  m="1023520">faster</span> <span m="1024839">if</span> <span
  m="1025020">we</span> <span m="1025170">choose</span> <span
  m="1025720">the</span> <span m="1025900">shifts</span> <span
  m="1026490">well.</span> <span m="1028950">But</span> <span
  m="1029280">basically,</span> <span m="1029940">the</span> <span
  m="1030089">same</span> <span m="1030450">idea</span> <span
  m="1030780">is</span> <span m="1030829">still</span> <span
  m="1031109">working.</span></p><p><span m="1032640">So</span> <span
  m="1032880">that's</span> <span m="1034130">the</span> <span
  m="1034220">QR</span> <span m="1034680">method.</span> <span
  m="1036230">Well,</span> <span m="1036859">that's</span> <span
  m="1037160">the</span> <span m="1037280">method.</span> <span
  m="1037819">We</span> <span m="1038119">haven't</span> <span
  m="1038510">shown</span> <span m="1039800">and</span> <span
  m="1039980">won't</span> <span m="1040310">show</span> <span
  m="1041599">that--</span> <span m="1042260">except</span> <span
  m="1042859">for</span> <span m="1043280">this</span> <span
  m="1045680">half-completed</span> <span m="1046579">example,</span> <span
  m="1048970">I</span> <span m="1049370">don't</span> <span
  m="1049580">plan</span> <span m="1049910">to</span> <span
  m="1051690">prove</span> <span m="1052440">that</span> <span
  m="1052770">the</span> <span m="1053580">lower</span> <span
  m="1054270">triangular</span> <span m="1054960">part</span> <span
  m="1055860">begins</span> <span m="1056310">to</span> <span
  m="1056430">disappear,</span> <span m="1058330">gets</span> <span
  m="1058540">smaller</span> <span m="1059050">and</span> <span
  m="1059170">smaller</span> <span m="1059560">and</span> <span
  m="1059680">smaller,</span> <span m="1060130">and</span> <span
  m="1060250">then</span> <span m="1060400">the</span> <span
  m="1060550">eigenvalues</span> <span m="1061480">pop</span> <span
  m="1061810">up</span> <span m="1061990">on</span> <span m="1062140">the</span>
  <span m="1062260">diagonal.</span> <span m="1064000">It's</span> <span
  m="1064500">amazing.</span> <span m="1067700">Amazing.</span></p><p><span
  m="1070480">Now,</span> <span m="1071920">is</span> <span
  m="1072070">there</span> <span m="1072190">any</span> <span
  m="1072400">other</span> <span m="1072790">improvement</span> <span
  m="1073330">we</span> <span m="1073480">can</span> <span
  m="1073630">make?</span> <span m="1075430">So</span> <span
  m="1075510">that's</span> <span m="1075810">the</span> <span
  m="1075930">method.</span> <span m="1077820">And where</span> <span
  m="1078040">is</span> <span m="1078300">the</span> <span
  m="1078420">work</span> <span m="1078900">in</span> <span
  m="1079410">using</span> <span m="1079800">that</span> <span
  m="1079980">method?</span> <span m="1080760">Because</span> <span
  m="1080970">that's</span> <span m="1081240">what</span> <span
  m="1081450">we</span> <span m="1081630">always</span> <span
  m="1082410">focus</span> <span m="1082920">on.</span> <span
  m="1083160">Where</span> <span m="1083500">are</span> <span
  m="1083580">we</span> <span m="1083820">spending</span> <span
  m="1084990">computer</span> <span m="1085530">time?</span> <span
  m="1086430">Well,</span> <span m="1086610">we're</span> <span
  m="1086790">spending</span> <span m="1087240">computer</span> <span
  m="1087750">time</span> <span m="1088230">in</span> <span
  m="1089580">doing</span> <span m="1090030">the</span> <span
  m="1092790">factorization.</span> <span m="1093880">So</span> <span
  m="1094370">it</span> <span m="1094530">didn't</span> <span
  m="1094800">cost</span> <span m="1095160">anything</span> <span
  m="1095510">to</span> <span m="1095670">shift</span> <span
  m="1096360">by</span> <span m="1096600">the</span> <span
  m="1096720">identity,</span> <span m="1097380">but</span> <span
  m="1097560">then</span> <span m="1097770">we</span> <span
  m="1097920">had</span> <span m="1098040">to</span> <span
  m="1098160">factor</span> <span m="1098700">that</span> <span
  m="1099000">into</span> <span m="1099250">Q0,</span> <span
  m="1099870">R0.</span> <span m="1101270">Then</span> <span
  m="1101400">it</span> <span m="1101490">didn't</span> <span
  m="1101760">cost</span> <span m="1102090">much</span> <span
  m="1102510">to</span> <span m="1103350">multiply</span> <span
  m="1103940">them</span> <span m="1104070">in</span> <span
  m="1104190">the</span> <span m="1104310">opposite</span> <span
  m="1104760">order.</span> <span m="1105580">So</span> <span
  m="1105660">the</span> <span m="1105780">work</span> <span
  m="1106110">was</span> <span m="1106410">in</span> <span
  m="1106790">QR.</span></p><p><span m="1109050">So</span> <span
  m="1109320">could</span> <span m="1109650">we</span> <span
  m="1111770">think</span> <span m="1112010">of</span> <span
  m="1112130">anything</span> <span m="1112670">to</span> <span
  m="1113030">improve</span> <span m="1113600">that</span> <span
  m="1114290">aspect?</span> <span m="1116650">Can</span> <span
  m="1116780">we</span> <span m="1116860">think</span> <span
  m="1117070">of</span> <span m="1117190">anything</span> <span
  m="1117610">there?</span> <span m="1118760">And</span> <span
  m="1118780">then</span> <span m="1118990">we've</span> <span
  m="1119230">got</span> <span m="1119470">a</span> <span
  m="1119560">really</span> <span m="1120070">first</span> <span
  m="1120490">class</span> <span m="1121450">method.</span> <span
  m="1123910">Well,</span> <span m="1126710">the</span> <span
  m="1126800">matrix</span> <span m="1127370">A--</span> <span
  m="1128790">A0,</span> <span m="1129440">the</span> <span
  m="1129590">matrix</span> <span m="1130040">we</span> <span
  m="1130160">started</span> <span m="1130550">with--</span> <span
  m="1132730">had</span> <span m="1132970">some</span> <span
  m="1133210">zeros</span> <span m="1137260">that</span> <span
  m="1139060">allowed</span> <span m="1139480">us</span> <span
  m="1139720">to</span> <span m="1141040">skip</span> <span
  m="1141880">steps</span> <span m="1142690">in</span> <span
  m="1142900">doing</span> <span m="1143350">the</span> <span
  m="1143500">QR</span> <span m="1144040">factorization.</span> <span
  m="1145370">So</span> <span m="1145960">what</span> <span
  m="1146170">am</span> <span m="1146320">I</span> <span
  m="1146560">going</span> <span m="1146690">to</span> <span
  m="1146840">say?</span> <span m="1147610">I'm</span> <span
  m="1147730">going</span> <span m="1147850">to</span> <span
  m="1147940">say</span> <span m="1148810">if</span> <span m="1151290">A</span>
  <span m="1151720">or</span> <span m="1151990">A0,</span> <span
  m="1152590">our</span> <span m="1152740">original</span> <span
  m="1153190">matrix,</span> <span m="1154570">has</span> <span
  m="1154900">a</span> <span m="1154960">bunch</span> <span
  m="1155350">of</span> <span m="1155470">zeros--</span> <span
  m="1156100">let's</span> <span m="1156250">say</span> <span
  m="1156550">it's</span> <span m="1156670">got</span> <span
  m="1156850">a</span> <span m="1156910">whole</span> <span
  m="1157090">lot</span> <span m="1157300">of</span> <span
  m="1157360">zeros</span> <span m="1157880">there.</span> <span
  m="1158410">Maybe</span> <span m="1158710">it's--</span></p><p><span
  m="1165530">Well,</span> <span m="1165950">OK.</span> <span
  m="1166940">I</span> <span m="1167060">overdid</span> <span
  m="1167600">it</span> <span m="1167750">here.</span> <span
  m="1169460">I</span> <span m="1169580">know</span> <span
  m="1169790">the</span> <span m="1169940">eigenvalues</span> <span
  m="1170570">right</span> <span m="1170840">off.</span> <span
  m="1173470">But</span> <span m="1174250">so</span> <span
  m="1174550">the</span> <span m="1174730">truth</span> <span
  m="1175120">is</span> <span m="1175510">I</span> <span
  m="1175570">can't--</span> <span m="1177130">saying</span> <span
  m="1177490">that</span> <span m="1177670">if</span> <span
  m="1178160">that</span> <span m="1179160">is</span> <span
  m="1179320">not</span> <span m="1179470">going</span> <span
  m="1179630">to</span> <span m="1179750">happen.</span> <span
  m="1181060">But</span> <span m="1182020">we</span> <span
  m="1182200">can</span> <span m="1182410">get</span> <span
  m="1183760">zeros</span> <span m="1184990">with</span> <span
  m="1185290">one</span> <span m="1185890">extra</span> <span
  m="1186370">diagonal.</span> <span m="1188470">That</span> <span
  m="1188710">turns</span> <span m="1189040">out--</span> <span
  m="1189180">so</span> <span m="1189690">here</span> <span
  m="1189970">is</span> <span m="1190180">the</span> <span
  m="1190300">main</span> <span m="1190570">diagonal.</span> <span
  m="1191050">Everybody's</span> <span m="1191440">got</span> <span
  m="1191650">his</span> <span m="1193090">eye</span> <span
  m="1193420">on</span> <span m="1193600">the</span> <span
  m="1194140">main</span> <span m="1194500">diagonal.</span> <span
  m="1195250">And</span> <span m="1199340">one</span> <span
  m="1199640">diagonal--</span> <span m="1201140">I</span> <span
  m="1201320">can</span> <span m="1201500">get</span> <span m="1201980">a</span>
  <span m="1202070">lot</span> <span m="1202340">of</span> <span
  m="1202430">zeros,</span> <span m="1203870">but</span> <span
  m="1204080">I</span> <span m="1204170">can't</span> <span
  m="1204530">by</span> <span m="1204770">simple</span> <span
  m="1206090">computations.</span> <span m="1206830">And</span> <span
  m="1207200">I'll</span> <span m="1208010">show</span> <span
  m="1208280">you</span> <span m="1208400">how</span> <span
  m="1208520">to</span> <span m="1208640">get</span> <span
  m="1209030">one.</span></p><p><span m="1210740">But</span> <span
  m="1210920">I</span> <span m="1211010">can't</span> <span
  m="1211250">get</span> <span m="1211430">all</span> <span
  m="1211610">those</span> <span m="1212030">to</span> <span
  m="1212150">be</span> <span m="1212330">0,</span> <span
  m="1212680">because</span> <span m="1212900">then</span> <span
  m="1213110">I</span> <span m="1213230">would</span> <span
  m="1214850">have</span> <span m="1215060">the</span> <span
  m="1215210">eigenvalues</span> <span m="1215840">right</span> <span
  m="1216050">there.</span> <span m="1218300">Well,</span> <span
  m="1218480">how</span> <span m="1218630">do</span> <span m="1218780">I</span>
  <span m="1218870">know</span> <span m="1219140">that</span> <span
  m="1219290">I</span> <span m="1219410">can't?</span> <span
  m="1220700">In</span> <span m="1220860">elimination,</span> <span
  m="1221810">ordinary</span> <span m="1222320">solving</span> <span
  m="1222860">AX</span> <span m="1223310">equal</span> <span
  m="1223610">B,</span> <span m="1224600">you</span> <span
  m="1224780">really</span> <span m="1225110">do</span> <span
  m="1225410">get</span> <span m="1225650">to</span> <span m="1225920">an</span>
  <span m="1226040">upper</span> <span m="1226310">triangular</span> <span
  m="1226930">form.</span> <span m="1229520">Some</span> <span
  m="1230960">operator,</span> <span m="1231700">some</span> <span
  m="1233030">elimination</span> <span m="1233750">steps</span> <span
  m="1234230">you</span> <span m="1234380">plug</span> <span
  m="1234770">away,</span> <span m="1235670">and</span> <span
  m="1235790">your</span> <span m="1235940">matrix</span> <span
  m="1236540">becomes</span> <span m="1237200">upper</span> <span
  m="1237440">triangular</span> <span m="1238100">U</span> <span
  m="1239480">and</span> <span m="1239720">you're</span> <span
  m="1239870">golden.</span> <span m="1242030">But</span> <span
  m="1244070">that's</span> <span m="1244610">too</span> <span
  m="1244790">much</span> <span m="1245060">to</span> <span
  m="1245210">expect</span> <span m="1245660">here.</span></p><p><span
  m="1248000">In</span> <span m="1248090">fact,</span> <span
  m="1248870">we</span> <span m="1249110">know</span> <span
  m="1249320">we</span> <span m="1249470">can't</span> <span
  m="1249860">do</span> <span m="1250100">it</span> <span m="1250760">by</span>
  <span m="1251030">simple</span> <span m="1251480">steps</span> <span
  m="1252460">because</span> <span m="1252740">if</span> <span
  m="1252860">we</span> <span m="1253010">could</span> <span
  m="1253220">do</span> <span m="1253460">it,</span> <span m="1254090">if</span>
  <span m="1254210">we</span> <span m="1254360">could</span> <span
  m="1254480">get</span> <span m="1254720">to</span> <span m="1254990">a</span>
  <span m="1255080">U</span> <span m="1255500">with</span> <span
  m="1256310">a</span> <span m="1256370">whole</span> <span
  m="1256940">lower</span> <span m="1257300">triangular</span> <span
  m="1257830">part</span> <span m="1258120">0,</span> <span
  m="1258860">we</span> <span m="1259040">would</span> <span
  m="1259190">have</span> <span m="1259280">found</span> <span
  m="1259580">the</span> <span m="1259730">eigenvalues.</span> <span
  m="1262230">And</span> <span m="1262440">we</span> <span
  m="1262590">know</span> <span m="1263070">that</span> <span
  m="1263340">the</span> <span m="1263550">eigenvalues</span> <span
  m="1264390">solve</span> <span m="1265020">a</span> <span
  m="1265080">system--</span> <span m="1266040">solve</span> <span
  m="1266370">an</span> <span m="1266490">equation</span> <span
  m="1267150">of</span> <span m="1267300">nth</span> <span
  m="1267660">degree.</span> <span m="1269420">And</span> <span
  m="1269930">we</span> <span m="1270140">know--</span> <span
  m="1270530">somebody</span> <span m="1271460">proved</span> <span
  m="1273920">a</span> <span m="1274130">century</span> <span
  m="1274580">or</span> <span m="1274820">more</span> <span
  m="1275180">ago--</span> <span m="1276440">that</span> <span
  m="1276590">you</span> <span m="1276740">can't</span> <span
  m="1277100">solve</span> <span m="1277520">an</span> <span
  m="1277670">nth</span> <span m="1277940">degree</span> <span
  m="1278370">equation</span> <span m="1278900">by</span> <span
  m="1279140">simple</span> <span m="1279560">little</span> <span
  m="1279830">steps.</span> <span m="1282100">Do</span> <span
  m="1282460">you</span> <span m="1282620">know</span> <span
  m="1282800">who</span> <span m="1282980">that</span> <span
  m="1283190">was</span> <span m="1283740">and</span> <span
  m="1284170">that</span> <span m="1284360">you</span> <span
  m="1284510">know</span> <span m="1284720">that</span> <span
  m="1284960">fact</span> <span m="1285580">and</span> <span
  m="1286640">what</span> <span m="1286850">degree</span> <span
  m="1288260">does</span> <span m="1288620">it</span> <span
  m="1288740">apply</span> <span m="1289130">to?</span> <span
  m="1290450">So</span> <span m="1290660">that's</span> <span
  m="1290890">an</span> <span m="1291160">important</span> <span
  m="1291620">fact</span> <span m="1292850">that</span> <span
  m="1293020">you</span> <span m="1294350">pick</span> <span
  m="1294590">up</span> <span m="1294980">in</span> <span
  m="1296090">math.</span> <span m="1296630">Yeah?</span></p><p><span
  m="1297040">AUDIENCE:</span> <span m="1297090">The</span> <span
  m="1297140">5th</span> <span m="1297190">[INAUDIBLE].</span></p><p><span
  m="1298300">GILBERT STRANG:</span> <span m="1298435">5th</span> <span
  m="1298570">degree,</span> <span m="1299240">yeah.</span> <span
  m="1299540">So</span> <span m="1299810">5</span> <span m="1300230">by</span>
  <span m="1300440">5</span> <span m="1301880">and</span> <span
  m="1302540">up</span> <span m="1303410">would</span> <span
  m="1303620">be--</span> <span m="1304280">this</span> <span
  m="1304520">is</span> <span m="1304700">impossible.</span> <span
  m="1305870">Impossible.</span> <span m="1308830">There</span> <span
  m="1308930">is</span> <span m="1308960">no</span> <span
  m="1309140">formula</span> <span m="1312590">to</span> <span
  m="1313160">find</span> <span m="1315470">a</span> <span
  m="1315530">simple</span> <span m="1315980">formula</span> <span
  m="1318380">for</span> <span m="1320000">the</span> <span
  m="1320120">lambdas.</span> <span m="1322700">And</span> <span
  m="1322910">similarly</span> <span m="1323360">for</span> <span
  m="1323550">the</span> <span m="1323700">sigmas</span> <span
  m="1324025">for</span> <span m="1324350">singular</span> <span
  m="1324860">values.</span> <span m="1326200">So</span> <span
  m="1326450">the</span> <span m="1326600">eigenvalues</span> <span
  m="1327430">is</span> <span m="1327800">definitely</span> <span
  m="1328400">a</span> <span m="1330170">level</span> <span
  m="1330680">of</span> <span m="1331130">difficulty</span> <span
  m="1331790">beyond</span> <span m="1332775">AX</span> <span
  m="1333440">equal</span> <span m="1333680">B,</span> <span
  m="1334010">the</span> <span m="1334220">inverse</span> <span
  m="1334730">matrix,</span> <span m="1335330">or</span> <span
  m="1335420">something,</span> <span m="1336290">that</span> <span
  m="1336570">pivots.</span> <span m="1337220">All</span> <span
  m="1337430">that</span> <span m="1337790">you</span> <span
  m="1337910">can</span> <span m="1338090">do</span> <span
  m="1338360">exactly</span> <span m="1339050">if</span> <span
  m="1339170">you're</span> <span m="1339260">doing</span> <span
  m="1339410">exact</span> <span m="1339890">arithmetic.</span></p><p><span
  m="1340910">We</span> <span m="1341090">cannot</span> <span
  m="1341540">find</span> <span m="1341880">the</span> <span
  m="1341960">lambdas</span> <span m="1345760">exactly,</span> <span
  m="1347970">but</span> <span m="1348990">we</span> <span
  m="1349140">can</span> <span m="1349320">get</span> <span
  m="1349500">as</span> <span m="1349710">close</span> <span
  m="1350370">as</span> <span m="1350700">we</span> <span
  m="1351000">like</span> <span m="1351560">by</span> <span
  m="1354180">continuing</span> <span m="1355020">with</span> <span
  m="1355320">the</span> <span m="1355410">QR</span> <span
  m="1355860">method.</span> <span m="1356340">So</span> <span
  m="1357030">yeah.</span> <span m="1357570">In</span> <span
  m="1357720">other</span> <span m="1357900">words,</span> <span
  m="1358230">we</span> <span m="1358380">can't--</span> <span
  m="1359040">we</span> <span m="1359250">have</span> <span
  m="1359490">to</span> <span m="1359970">settle</span> <span
  m="1360390">for--</span> <span m="1361350">if</span> <span
  m="1361530">we</span> <span m="1361620">want</span> <span
  m="1361830">to,</span> <span m="1362280">like</span> <span
  m="1363300">at</span> <span m="1363450">the</span> <span
  m="1363570">beginning,</span> <span m="1364620">improve</span> <span
  m="1365190">our</span> <span m="1365340">matrix</span> <span
  m="1365940">before</span> <span m="1366330">we</span> <span
  m="1366570">start</span> <span m="1367350">doing</span> <span
  m="1367740">that</span> <span m="1367950">stuff,</span> <span
  m="1369980">we</span> <span m="1370160">can</span> <span
  m="1370370">get</span> <span m="1370580">it</span> <span
  m="1370730">with</span> <span m="1370990">one</span> <span
  m="1371630">extra</span> <span m="1372170">diagonal.</span> <span
  m="1372860">And</span> <span m="1372990">do</span> <span
  m="1373060">you</span> <span m="1373160">know</span> <span
  m="1373340">what</span> <span m="1373580">kind</span> <span
  m="1373880">of</span> <span m="1373970">a</span> <span
  m="1374060">matrix,</span> <span m="1375290">whose</span> <span
  m="1375620">name--</span> <span m="1376330">I</span> <span
  m="1376550">don't</span> <span m="1376730">know</span> <span
  m="1376850">why.</span></p><p><span m="1377675">AUDIENCE:</span> <span
  m="1377877">Upper</span> <span m="1378080">Hessenberg.</span></p><p><span
  m="1378890">GILBERT STRANG:</span> <span m="1379040">Yeah.</span> <span
  m="1379190">Say</span> <span m="1379460">it</span> <span
  m="1379550">again.</span></p><p><span m="1379820">AUDIENCE:</span> <span
  m="1379995">Upper</span> <span m="1380170">Hessenberg.</span></p><p><span
  m="1380870">GILBERT STRANG:</span> <span m="1381080">Upper</span> <span
  m="1381290">Hessenberg.</span> <span m="1382010">So</span> <span
  m="1382250">upper</span> <span m="1382640">is</span> <span
  m="1382820">just</span> <span m="1383090">like</span> <span
  m="1383360">upper</span> <span m="1383630">triangular.</span> <span
  m="1384260">It's</span> <span m="1384410">up</span> <span
  m="1384560">there.</span> <span m="1385520">But</span> <span
  m="1386510">key</span> <span m="1386900">person's</span> <span
  m="1387500">name</span> <span m="1387980">is</span> <span
  m="1388280">Hessenberg.</span> <span m="1390980">As</span> <span
  m="1391160">I</span> <span m="1391280">say,</span> <span
  m="1394270">that's</span> <span m="1394520">a</span> <span
  m="1394580">Hessenberg</span> <span m="1395240">matrix.</span> <span
  m="1397120">So</span> <span m="1397450">Hessenberg</span> <span
  m="1398030">matrix</span> <span m="1398630">is</span> <span
  m="1398810">a</span> <span m="1398870">matrix</span> <span
  m="1399470">with</span> <span m="1400190">one</span> <span
  m="1401120">triangular</span> <span m="1401810">plus</span> <span
  m="1402140">one</span> <span m="1402380">more</span> <span
  m="1402620">diagonal,</span> <span m="1403880">but</span> <span
  m="1404090">lots</span> <span m="1404480">of</span> <span
  m="1404600">zeros.</span> <span m="1406680">Order</span> <span
  m="1407040">of</span> <span m="1407280">N</span> <span
  m="1407540">squared.</span> <span m="1408450">Something</span> <span
  m="1408870">like</span> <span m="1409110">almost</span> <span
  m="1409800">like</span> <span m="1410070">half</span> <span
  m="1410430">N</span> <span m="1410610">squared--</span> <span
  m="1411210">not</span> <span m="1411420">quite,</span> <span
  m="1411950">but</span> <span m="1413620">close--</span> <span
  m="1414640">zeros.</span></p><p><span m="1415920">And</span> <span
  m="1416190">you</span> <span m="1416790">could</span> <span
  m="1417300">show</span> <span m="1417870">those</span> <span
  m="1418320">zeros</span> <span m="1420060">stay</span> <span
  m="1420450">zeros</span> <span m="1421230">in</span> <span
  m="1421590">QR.</span> <span m="1422280">So</span> <span
  m="1422670">that</span> <span m="1423750">really</span> <span
  m="1424050">pays</span> <span m="1424440">off.</span> <span
  m="1424810">It</span> <span m="1424980">cuts</span> <span
  m="1425430">the</span> <span m="1426630">work</span> <span
  m="1426930">down</span> <span m="1427590">significantly.</span> <span
  m="1429340">So</span> <span m="1429540">that's</span> <span
  m="1429930">the--</span> <span m="1431460">full</span> <span
  m="1431850">QR</span> <span m="1432420">method</span> <span
  m="1432870">is</span> <span m="1433800">Step</span> <span
  m="1434190">1--</span> <span m="1435750">reduce</span> <span
  m="1439320">A</span> <span m="1439890">to</span> <span
  m="1440850">Hessenberg</span> <span m="1445080">form</span> <span
  m="1447180">with</span> <span m="1447480">these</span> <span
  m="1447630">zeros.</span> <span m="1448110">And</span> <span
  m="1448200">when</span> <span m="1448380">I</span> <span
  m="1448500">say</span> <span m="1448740">reduce,</span> <span
  m="1449910">I</span> <span m="1450000">mean</span> <span
  m="1450300">find</span> <span m="1450630">a</span> <span
  m="1450720">similarity</span> <span m="1451410">transformation,</span> <span
  m="1452190">of</span> <span m="1452280">course,</span> <span
  m="1452610">because</span> <span m="1453420">I</span> <span
  m="1453540">want</span> <span m="1453780">the</span> <span
  m="1453930">eigenvalues</span> <span m="1454800">of</span> <span
  m="1454950">this</span> <span m="1455970">to</span> <span
  m="1456570">end</span> <span m="1456840">up</span> <span
  m="1457900">the</span> <span m="1458070">same</span> <span
  m="1458430">as</span> <span m="1458550">the</span> <span
  m="1458670">Hessen.</span> <span m="1459030">I</span> <span
  m="1459150">want</span> <span m="1459300">to</span> <span
  m="1459390">keep</span> <span m="1459750">the</span> <span
  m="1459900">same</span> <span m="1460260">eigenvalues</span> <span
  m="1460950">as</span> <span m="1461130">I</span> <span
  m="1461220">go.</span></p><p><span m="1461820">And</span> <span
  m="1461940">then,</span> <span m="1462180">Step</span> <span
  m="1462510">2</span> <span m="1462900">is</span> <span m="1463900">QR</span>
  <span m="1465600">on</span> <span m="1465840">this</span> <span
  m="1466110">Hessenberg</span> <span m="1466740">matrix</span> <span
  m="1467730">with</span> <span m="1468210">shifts.</span> <span
  m="1473250">So</span> <span m="1473460">that's</span> <span
  m="1473790">the</span> <span m="1473910">code</span> <span
  m="1474360">that</span> <span m="1474920">would</span> <span
  m="1475590">be</span> <span m="1476610">programmed</span> <span
  m="1477420">in</span> <span m="1477660">eig(A).</span> <span
  m="1481060">That's</span> <span m="1481360">what</span> <span
  m="1481580">Matlab</span> <span m="1482120">and--</span> <span
  m="1482990">well</span> <span m="1483740">really,</span> <span
  m="1484070">Matlab</span> <span m="1484700">is</span> <span
  m="1484970">appealing--</span> <span m="1486110">like</span> <span
  m="1486410">other</span> <span m="1488000">matrix</span> <span
  m="1488780">systems--</span> <span m="1489800">is</span> <span
  m="1489980">appealing</span> <span m="1490670">to</span> <span
  m="1491030">LAPACK</span> <span m="1491930">and</span> <span
  m="1492050">LINPACK.</span> <span m="1494360">A</span> <span
  m="1494450">team</span> <span m="1494930">of</span> <span
  m="1496730">professional</span> <span m="1497360">numerical</span> <span
  m="1497990">analysts</span> <span m="1499160">really</span> <span
  m="1500210">spent</span> <span m="1500600">a</span> <span
  m="1500660">lot</span> <span m="1500960">of</span> <span
  m="1501260">effort</span> <span m="1501710">and</span> <span
  m="1501800">time.</span> <span m="1504200">The</span> <span
  m="1504350">book</span> <span m="1504950"><i>LAPACK</i></span> <span
  m="1507380">has</span> <span m="1508040">10</span> <span
  m="1508370">authors,</span> <span m="1511340">and</span> <span
  m="1512420">you</span> <span m="1514220">can</span> <span
  m="1514400">download</span> <span m="1515390">any</span> <span
  m="1516020">of</span> <span m="1516080">these</span> <span
  m="1516350">codes,</span> <span m="1516830">like</span> <span
  m="1517100">the</span> <span m="1517280">eigenvalue</span> <span
  m="1518000">code.</span> <span m="1518870">So</span> <span
  m="1520520">that's</span> <span m="1521870">where</span> <span
  m="1522050">Matlab,</span> <span m="1522550">naturally--</span> <span
  m="1523760">that's</span> <span m="1525640">the</span> <span
  m="1525970">Bible</span> <span m="1526960">for</span> <span
  m="1527590">code</span> <span m="1528640">in</span> <span
  m="1528790">linear</span> <span m="1529150">algebra.</span> <span
  m="1532640">I</span> <span m="1532840">think</span> <span
  m="1533050">it's</span> <span m="1533440">interesting</span> <span
  m="1534010">to</span> <span m="1534100">know.</span></p><p><span
  m="1535780">And</span> <span m="1536110">there's</span> <span
  m="1536350">one</span> <span m="1536590">more</span> <span
  m="1538310">good</span> <span m="1538580">thing</span> <span
  m="1538880">to</span> <span m="1539030">tell</span> <span
  m="1539300">you</span> <span m="1539450">about</span> <span
  m="1539750">this</span> <span m="1540290">method.</span> <span
  m="1542030">And</span> <span m="1542390">it</span> <span
  m="1542540">applies</span> <span m="1543260">if</span> <span
  m="1543410">the</span> <span m="1543530">matrix</span> <span
  m="1544100">is</span> <span m="1544250">symmetric.</span> <span
  m="1545910">If</span> <span m="1546070">the</span> <span
  m="1546160">matrix</span> <span m="1546700">is</span> <span
  m="1546820">symmetric,</span> <span m="1548020">then</span> <span
  m="1548230">if</span> <span m="1548350">we</span> <span
  m="1548470">check</span> <span m="1548830">all</span> <span
  m="1549010">this,</span> <span m="1549370">we</span> <span
  m="1549550">could</span> <span m="1549730">find</span> <span
  m="1550750">that</span> <span m="1550990">the</span> <span
  m="1552870">matrices</span> <span m="1553560">stayed</span> <span
  m="1554020">symmetric.</span> <span m="1555450">If</span> <span
  m="1555770">A0</span> <span m="1556050">is</span> <span
  m="1556200">symmetric,</span> <span m="1557370">I</span> <span
  m="1557490">can</span> <span m="1557670">check--</span> <span
  m="1558210">you</span> <span m="1558540">could</span> <span
  m="1558750">easily</span> <span m="1559080">check</span> <span
  m="1559410">through</span> <span m="1559710">this</span> <span
  m="1560430">and</span> <span m="1560580">you</span> <span
  m="1560700">would</span> <span m="1560820">discover</span> <span
  m="1561270">that</span> <span m="1561480">A1</span> <span
  m="1561930">is</span> <span m="1562140">also</span> <span
  m="1562500">symmetric.</span></p><p><span m="1568630">It</span> <span
  m="1569110">turns</span> <span m="1569470">out</span> <span
  m="1570580">you</span> <span m="1570850">could</span> <span
  m="1571120">rewrite</span> <span m="1571780">this</span> <span
  m="1572140">with</span> <span m="1572320">a</span> <span m="1572740">Q0</span>
  <span m="1573430">in</span> <span m="1573580">a</span> <span
  m="1573640">Q0</span> <span m="1574210">inverse</span> <span
  m="1575050">on</span> <span m="1575200">the</span> <span
  m="1575320">other</span> <span m="1575560">side,</span> <span
  m="1577850">but</span> <span m="1578060">that</span> <span
  m="1578270">Q0</span> <span m="1578810">inverse</span> <span
  m="1578990">is</span> <span m="1579470">the</span> <span
  m="1579560">same</span> <span m="1579950">as</span> <span
  m="1580100">Q0</span> <span m="1580610">transposed</span> <span
  m="1581360">because</span> <span m="1581630">it's</span> <span
  m="1581780">an</span> <span m="1581900">orthogonal</span> <span
  m="1582500">matrix,</span> <span m="1583220">and</span> <span
  m="1583640">symmetry</span> <span m="1584240">would</span> <span
  m="1584420">fall</span> <span m="1584750">out.</span> <span
  m="1586010">So</span> <span m="1586250">if</span> <span
  m="1586430">it's</span> <span m="1586580">symmetric,</span> <span
  m="1588320">and</span> <span m="1589010">it's</span> <span
  m="1589220">in</span> <span m="1589390">his</span> <span
  m="1589710">Hessenberg</span> <span m="1590090">form</span> <span
  m="1591630">and</span> <span m="1591740">it</span> <span
  m="1591830">stays</span> <span m="1592220">symmetric</span> <span
  m="1593630">at</span> <span m="1593750">every</span> <span
  m="1594050">step,</span> <span m="1594980">what</span> <span
  m="1595640">can</span> <span m="1595850">you</span> <span
  m="1595970">tell</span> <span m="1596210">me</span> <span m="1596390">about
  a</span> <span m="1596720">symmetric</span> <span
  m="1598340">Heisenberg</span> <span m="1599150">matrix?</span></p><p><span
  m="1599840">AUDIENCE:</span> <span m="1600053">[INAUDIBLE]</span></p><p><span
  m="1601120">GILBERT STRANG:</span> <span m="1601225">It's</span> <span
  m="1601330">only</span> <span m="1601610">got--</span> <span
  m="1602350">yeah.</span> <span m="1602980">You</span> <span
  m="1603130">just</span> <span m="1603370">erase</span> <span
  m="1603790">all</span> <span m="1603980">these.</span> <span
  m="1605020">If</span> <span m="1605530">they are</span> <span
  m="1605770">zeros</span> <span m="1606280">there</span> <span
  m="1606670">and</span> <span m="1606940">if</span> <span
  m="1607090">the</span> <span m="1607210">matrix</span> <span
  m="1607750">is</span> <span m="1607870">symmetric,</span> <span
  m="1608920">then</span> <span m="1609220">we</span> <span
  m="1609400">can</span> <span m="1609610">safely</span> <span
  m="1612830">predict</span> <span m="1613970">that</span> <span
  m="1614410">it</span> <span m="1614540">will</span> <span
  m="1614720">only</span> <span m="1614990">have</span> <span
  m="1615230">one</span> <span m="1615560">diagonal</span> <span
  m="1616220">above,</span> <span m="1616850">one</span> <span
  m="1617240">non-zero</span> <span m="1617940">diagonal</span> <span
  m="1618470">above</span> <span m="1618800">the</span> <span
  m="1618920">main</span> <span m="1619220">diagonal.</span> <span
  m="1620120">In</span> <span m="1620240">fact,</span> <span
  m="1621070">it</span> <span m="1621200">will</span> <span
  m="1621290">say</span> <span m="1621620">symmetric.</span> <span
  m="1624200">So</span> <span m="1624410">now</span> <span m="1625400">I</span>
  <span m="1625550">should</span> <span m="1625940">write</span> <span
  m="1626300">&quot;symmetric</span> <span m="1626990">Hessenberg</span> <span
  m="1627710">matrix,&quot;</span> <span m="1629540">and</span> <span
  m="1630200">equals</span> <span m="1631860">tridiagonal</span> <span
  m="1632960">matrix.</span> <span m="1639900">Three</span> <span
  m="1640170">diagonals.</span></p><p><span m="1643380">So</span> <span
  m="1643560">now</span> <span m="1643770">you</span> <span
  m="1643890">really</span> <span m="1644250">have</span> <span
  m="1644550">reduced</span> <span m="1645000">the</span> <span
  m="1645150">time</span> <span m="1645540">to</span> <span
  m="1646290">do</span> <span m="1646530">QR</span> <span
  m="1648340">because</span> <span m="1649435">you've</span> <span
  m="1649750">got</span> <span m="1649970">a</span> <span
  m="1650080">tridiagonal</span> <span m="1650860">matrix.</span> <span
  m="1652000">It'll</span> <span m="1652210">stay</span> <span
  m="1652660">tridiagonal</span> <span m="1653620">in</span> <span
  m="1653830">all</span> <span m="1654010">these</span> <span
  m="1654250">steps.</span> <span m="1655360">So</span> <span
  m="1655540">you're</span> <span m="1655720">working</span> <span
  m="1656170">with</span> <span m="1656440">just</span> <span
  m="1656830">three</span> <span m="1657220">N</span> <span
  m="1657460">numbers.</span> <span m="1658520">Well</span> <span
  m="1658900">actually,</span> <span m="1659350">two</span> <span
  m="1659670">N</span> <span m="1659920">because</span> <span
  m="1661030">the</span> <span m="1661330">diagonal</span> <span
  m="1661840">above</span> <span m="1662200">and</span> <span
  m="1662290">the</span> <span m="1662410">diagonal</span> <span
  m="1662890">below</span> <span m="1663220">are</span> <span
  m="1663310">the</span> <span m="1663460">same.</span> <span
  m="1664760">You're</span> <span m="1664780">working</span> <span
  m="1665110">with</span> <span m="1665290">just</span> <span
  m="1665500">two</span> <span m="1665800">N</span> <span
  m="1665980">numbers</span> <span m="1666460">instead</span> <span
  m="1666910">of</span> <span m="1667030">order</span> <span
  m="1667360">N</span> <span m="1667540">squared,</span> <span
  m="1668470">and</span> <span m="1668620">it</span> <span
  m="1668710">just</span> <span m="1669100">goes</span> <span
  m="1669430">like</span> <span m="1669670">a</span> <span
  m="1669730">bomb.</span> <span m="1670600">So</span> <span
  m="1670810">that's</span> <span m="1671770">eig</span> <span
  m="1672220">for</span> <span m="1673150">symmetric</span> <span
  m="1673690">matrices.</span> <span m="1675460">And</span> <span
  m="1675610">you</span> <span m="1675730">see</span> <span
  m="1676180">that</span> <span m="1676420">it</span> <span
  m="1676540">was</span> <span m="1676780">all</span> <span
  m="1677080">based--</span> <span m="1677900">that</span> <span
  m="1678100">really</span> <span m="1678640">the</span> <span
  m="1678790">heart</span> <span m="1679210">of</span> <span
  m="1681040">the</span> <span m="1683500">algorithm</span> <span
  m="1684220">was</span> <span m="1686070">QR.</span> <span
  m="1688480">So</span> <span m="1688810">that's</span> <span
  m="1689350">my--</span> <span m="1690540">that</span> <span
  m="1690940">took</span> <span m="1691240">half</span> <span
  m="1691480">the</span> <span m="1691600">class</span> <span
  m="1692230">to</span> <span m="1693370">report</span> <span
  m="1694000">on</span> <span m="1694360">the</span> <span
  m="1697440">favorite</span> <span m="1698340">way,</span> <span
  m="1698820">the</span> <span m="1699000">eig</span> <span
  m="1699480">way,</span> <span m="1700350">to</span> <span
  m="1701970">find</span> <span m="1702360">eigenvalues.</span></p><p><span
  m="1703650">Oh,</span> <span m="1704190">I</span> <span
  m="1704580">should</span> <span m="1704850">say</span> <span
  m="1705060">something</span> <span m="1705570">about</span> <span
  m="1706960">singular</span> <span m="1707410">values.</span> <span
  m="1709450">So</span> <span m="1709660">singular</span> <span
  m="1710110">values.</span> <span m="1711760">Of</span> <span
  m="1711880">course,</span> <span m="1712570">the</span> <span
  m="1712720">singular</span> <span m="1713260">values</span> <span
  m="1714010">of</span> <span m="1714220">the</span> <span
  m="1714370">matrix</span> <span m="1715910">are</span> <span
  m="1716180">the</span> <span m="1716360">eigenvalues</span> <span
  m="1717620">of</span> <span m="1718160">A</span> <span
  m="1718340">transpose</span> <span m="1719030">A--</span> <span
  m="1719870">square</span> <span m="1720950">root</span> <span
  m="1721190">of</span> <span m="1721250">those</span> <span
  m="1721520">eigenvalues.</span> <span m="1723140">But</span> <span
  m="1723470">you</span> <span m="1723590">wouldn't</span> <span
  m="1723830">do</span> <span m="1723980">it</span> <span
  m="1724070">that</span> <span m="1724310">way.</span> <span
  m="1724550">You</span> <span m="1724670">would</span> <span
  m="1724790">never</span> <span m="1725060">form</span> <span
  m="1725420">A</span> <span m="1725540">transpose</span> <span
  m="1725855">A.</span> <span m="1726470">Oh,</span> <span m="1726650">I</span>
  <span m="1726770">didn't</span> <span m="1727010">mention</span> <span
  m="1728510">the</span> <span m="1728660">other</span> <span
  m="1728900">thing</span> <span m="1729110">you</span> <span
  m="1729260">would</span> <span m="1729410">never,</span> <span
  m="1729830">ever,</span> <span m="1730230">ever</span> <span
  m="1730430">do,</span> <span m="1731120">so</span> <span
  m="1731330">let</span> <span m="1731510">me</span> <span
  m="1731660">just</span> <span m="1731870">put</span> <span
  m="1732110">it</span> <span m="1732200">here</span> <span
  m="1733820">like</span> <span m="1734180">in</span> <span
  m="1734360">disgrace.</span> <span m="1737000">To</span> <span
  m="1737150">solve</span> <span m="1739610">that</span> <span
  m="1739970">equation</span> <span m="1740780">is</span> <span
  m="1741050">like,</span> <span m="1741470">OK,</span> <span
  m="1742690">back</span> <span m="1742980">to</span> <span
  m="1743180">first</span> <span m="1743480">grade,</span> <span
  m="1743870">because</span> <span m="1745230">that's</span> <span
  m="1745580">not--</span> <span m="1746870">that's</span> <span
  m="1747680">very</span> <span m="1748160">bad.</span></p><p><span
  m="1749140">A</span> <span m="1749390">determinant--</span> <span
  m="1751700">first</span> <span m="1752000">of</span> <span
  m="1752090">all,</span> <span m="1752340">it's</span> <span
  m="1752420">extremely</span> <span m="1753050">slow--</span> <span
  m="1753470">extremely</span> <span m="1754280">slow.</span> <span
  m="1755090">And</span> <span m="1755420">the</span> <span
  m="1755750">determinant</span> <span m="1756500">is</span> <span
  m="1757310">packing</span> <span m="1758600">all</span> <span
  m="1758930">this</span> <span m="1760620">N</span> <span
  m="1760970">squared</span> <span m="1761390">pieces</span> <span
  m="1761870">of</span> <span m="1762020">information</span> <span
  m="1762800">into</span> <span m="1763520">N</span> <span
  m="1763820">coefficient,</span> <span m="1764850">and</span> <span
  m="1764900">it's</span> <span m="1765650">hopelessly</span> <span
  m="1767150">ill</span> <span m="1767330">conditioned.</span> <span
  m="1768270">Yeah.</span> <span m="1768610">You</span> <span
  m="1769580">lose</span> <span m="1770120">information</span> <span
  m="1770780">all</span> <span m="1770930">the</span> <span
  m="1771020">time.</span> <span m="1771320">So</span> <span
  m="1772470">really,</span> <span m="1774630">if</span> <span
  m="1774810">this</span> <span m="1774990">is</span> <span
  m="1775140">going</span> <span m="1775440">on</span> <span
  m="1775620">camera,</span> <span m="1776100">it</span> <span
  m="1776220">better</span> <span m="1776490">go</span> <span
  m="1776700">on</span> <span m="1776910">camera</span> <span
  m="1778160">with</span> <span m="1778400">an</span> <span
  m="1778540">x,</span> <span m="1778950">because</span> <span
  m="1779410">you</span> <span m="1779490">don't</span> <span
  m="1779790">do</span> <span m="1780030">it.</span></p><p><span
  m="1782820">Yeah.</span> <span m="1784410">So</span> <span
  m="1786580">where</span> <span m="1786910">was</span> <span
  m="1787240">I?</span> <span m="1787810">Singular</span> <span
  m="1788350">values.</span> <span m="1789940">So</span> <span
  m="1790180">A</span> <span m="1790390">transpose</span> <span
  m="1791170">A.</span> <span m="1793760">So</span> <span
  m="1794360">again,</span> <span m="1796500">let's</span> <span
  m="1796670">think</span> <span m="1796880">about</span> <span
  m="1797150">what</span> <span m="1797420">you</span> <span
  m="1797540">could</span> <span m="1797690">do</span> <span
  m="1797870">at</span> <span m="1797990">the</span> <span
  m="1798110">beginning</span> <span m="1799940">before</span> <span
  m="1800600">starting</span> <span m="1801200">on</span> <span
  m="1801380">QR</span> <span m="1804310">for</span> <span m="1804590">A</span>
  <span m="1804770">transpose</span> <span m="1805115">A</span> <span
  m="1805670">or</span> <span m="1806030">for</span> <span
  m="1806210">the</span> <span m="1806300">matrix</span> <span
  m="1806840">A.</span> <span m="1807820">What</span> <span
  m="1808460">could</span> <span m="1808730">you</span> <span
  m="1808880">do</span> <span m="1810410">with</span> <span
  m="1811490">orthogonal</span> <span m="1812150">matrices?</span> <span
  m="1813540">So</span> <span m="1814070">I</span> <span
  m="1814160">guess--</span> <span m="1814400">what</span> <span
  m="1814850">did</span> <span m="1815000">we</span> <span
  m="1815150">say</span> <span m="1815390">about</span> <span
  m="1815660">symmetric</span> <span m="1816200">matrices?</span></p><p><span
  m="1817610">So</span> <span m="1817790">here's</span> <span
  m="1818030">what</span> <span m="1818210">I</span> <span
  m="1818300">said</span> <span m="1818570">about</span> <span
  m="1818840">symmetric</span> <span m="1819350">matrices.</span> <span
  m="1820250">If</span> <span m="1820370">you'll</span> <span
  m="1820520">give</span> <span m="1820700">me</span> <span m="1820820">a</span>
  <span m="1820880">symmetric</span> <span m="1821450">matrix,</span> <span
  m="1822510">I</span> <span m="1822590">can</span> <span m="1823100">in</span>
  <span m="1823460">just</span> <span m="1823850">a</span> <span
  m="1824330">simple</span> <span m="1824900">number</span> <span
  m="1825260">of</span> <span m="1825380">simple</span> <span
  m="1825800">steps</span> <span m="1826820">make</span> <span
  m="1827120">it</span> <span m="1827270">tridiagonal.</span> <span
  m="1831230">I</span> <span m="1831320">can't</span> <span
  m="1831590">make</span> <span m="1831800">it</span> <span
  m="1831920">diagonal</span> <span m="1832520">because</span> <span
  m="1832790">then</span> <span m="1832970">I'd</span> <span
  m="1833090">be</span> <span m="1833240">finding</span> <span
  m="1833630">the</span> <span m="1833780">eigenvalues</span> <span
  m="1834590">and</span> <span m="1834780">Abel,</span> <span
  m="1836170">who</span> <span m="1837750">was</span> <span
  m="1837920">the</span> <span m="1838580">first</span> <span
  m="1838910">person</span> <span m="1839300">to</span> <span
  m="1839390">see</span> <span m="1839630">that</span> <span
  m="1839780">that</span> <span m="1839990">was</span> <span
  m="1840170">impossible,</span> <span m="1841810">forbids</span> <span
  m="1842260">it.</span></p><p><span m="1845290">So</span> <span
  m="1846020">let</span> <span m="1846200">me</span> <span
  m="1846410">let</span> <span m="1846530">me</span> <span
  m="1846680">write</span> <span m="1846890">down</span> <span
  m="1847130">what</span> <span m="1847250">I'm</span> <span
  m="1847370">saying</span> <span m="1847670">here.</span> <span
  m="1848450">If</span> <span m="1848600">I</span> <span m="1848720">have</span>
  <span m="1848990">a</span> <span m="1849050">symmetric</span> <span
  m="1849680">matrix</span> <span m="1850220">S,</span> <span
  m="1851366">I</span> <span m="1851750">can</span> <span
  m="1852560">find</span> <span m="1853040">a</span> <span
  m="1853070">bunch</span> <span m="1853460">of</span> <span
  m="1853610">Qs</span> <span m="1854630">and</span> <span m="1854810">Q</span>
  <span m="1855080">transposes,</span> <span m="1856720">and</span> <span
  m="1856910">I</span> <span m="1857030">can</span> <span m="1857540">put</span>
  <span m="1857750">them</span> <span m="1857870">all</span> <span
  m="1858020">together</span> <span m="1858560">into</span> <span
  m="1858770">one</span> <span m="1859070">big</span> <span
  m="1859430">Q,</span> <span m="1860510">and</span> <span
  m="1860720">it's</span> <span m="1860900">transposed.</span> <span
  m="1862490">And</span> <span m="1862640">what</span> <span
  m="1862850">do</span> <span m="1862970">I</span> <span m="1863090">know</span>
  <span m="1863330">about</span> <span m="1863660">the</span> <span
  m="1863840">eigenvalues</span> <span m="1864530">of</span> <span
  m="1864650">that</span> <span m="1864860">matrix?</span> <span
  m="1869780">Q</span> <span m="1870110">is</span> <span
  m="1870260">orthogonal</span> <span m="1870980">always.</span></p><p><span
  m="1872000">So</span> <span m="1872150">what</span> <span
  m="1872390">can</span> <span m="1872570">you</span> <span
  m="1872690">tell</span> <span m="1872900">me</span> <span
  m="1873110">about</span> <span m="1873410">the--</span> <span
  m="1873860">this</span> <span m="1874100">is</span> <span
  m="1874250">the</span> <span m="1874370">same</span> <span
  m="1874910">as</span> <span m="1875210">QSQ</span> <span
  m="1876980">inverse,</span> <span m="1878270">and</span> <span
  m="1878420">therefore</span> <span m="1878960">the</span> <span
  m="1879200">eigenvalues</span> <span m="1880400">are</span> <span
  m="1881770">the</span> <span m="1881930">same.</span> <span
  m="1883520">It's</span> <span m="1883670">similar</span> <span
  m="1884930">to</span> <span m="1885150">S.</span> <span m="1886630">And</span>
  <span m="1887350">it</span> <span m="1887980">becomes</span> <span
  m="1889170">tridiagonal</span> <span m="1895210">After?</span> <span
  m="1895630">I</span> <span m="1896680">find</span> <span m="1897520">a</span>
  <span m="1897580">good</span> <span m="1897850">Q.</span> <span
  m="1901110">Therefore,</span> <span m="1902040">same</span> <span
  m="1902940">lambdas.</span> <span m="1907007">It's</span> <span
  m="1907500">tridiagonal</span> <span m="1908270">with</span> <span
  m="1908450">the</span> <span m="1908540">same</span> <span
  m="1908870">lambdas.</span></p><p><span m="1910240">Now,</span> <span
  m="1910720">what</span> <span m="1910900">am</span> <span m="1911020">I</span>
  <span m="1911170">thinking</span> <span m="1911590">about</span> <span
  m="1911860">here?</span> <span m="1912820">I'm</span> <span
  m="1912940">thinking</span> <span m="1913270">about--</span> <span
  m="1913660">tell</span> <span m="1913960">me</span> <span
  m="1914500">the</span> <span m="1915610">corresponding</span> <span
  m="1917710">possibility</span> <span m="1920390">about</span> <span
  m="1920720">singular</span> <span m="1921230">values.</span> <span
  m="1921770">I</span> <span m="1921920">wanted</span> <span
  m="1922190">to</span> <span m="1922250">do</span> <span
  m="1922490">something</span> <span m="1923420">to</span> <span
  m="1923570">my</span> <span m="1923750">matrix.</span> <span
  m="1924470">Now,</span> <span m="1924710">I'm</span> <span
  m="1925370">always</span> <span m="1925610">taking</span> <span
  m="1925970">a</span> <span m="1926060">general</span> <span
  m="1926480">matrix</span> <span m="1926750">A.</span> <span
  m="1931126">And</span> <span m="1931600">I'm</span> <span
  m="1931750">looking</span> <span m="1932050">for</span> <span
  m="1932200">its</span> <span m="1932320">singular</span> <span
  m="1932800">values.</span> <span m="1934070">And</span> <span
  m="1934270">I'm</span> <span m="1934420">looking</span> <span
  m="1934780">to</span> <span m="1934870">simplify</span> <span
  m="1935650">it.</span> <span m="1937590">And</span> <span
  m="1937920">what</span> <span m="1938190">am</span> <span m="1938310">I</span>
  <span m="1938430">allowed</span> <span m="1938790">to</span> <span
  m="1938940">do?</span> <span m="1941240">Yeah,</span> <span
  m="1941610">I</span> <span m="1941730">guess</span> <span
  m="1941910">my</span> <span m="1942060">question</span> <span
  m="1942540">is--</span> <span m="1944070">similarity</span> <span
  m="1944940">transformations</span> <span m="1945960">left</span> <span
  m="1946290">the</span> <span m="1946470">eigenvalues</span> <span
  m="1947340">alone.</span></p><p><span m="1948210">What</span> <span
  m="1948480">can</span> <span m="1948720">I</span> <span m="1948840">do</span>
  <span m="1949260">that</span> <span m="1949410">leaves</span> <span
  m="1949800">the</span> <span m="1949980">singular</span> <span
  m="1950550">values</span> <span m="1951040">alone?</span> <span
  m="1952270">That's</span> <span m="1952470">a</span> <span
  m="1952560">fundamental</span> <span m="1953130">question</span> <span
  m="1954180">because</span> <span m="1954570">it</span> <span
  m="1954660">was</span> <span m="1954810">so</span> <span
  m="1955020">fundamental</span> <span m="1955590">for</span> <span
  m="1955770">eigenvalues.</span> <span m="1957240">By</span> <span
  m="1957510">doing</span> <span m="1957900">this,</span> <span
  m="1958935">a</span> <span m="1959400">matrix</span> <span
  m="1960090">and</span> <span m="1960240">its</span> <span
  m="1960420">inverse,</span> <span m="1961110">I</span> <span
  m="1961230">got</span> <span m="1961470">something</span> <span
  m="1961980">similar,</span> <span m="1963090">and</span> <span
  m="1963270">I</span> <span m="1963570">checked</span> <span
  m="1964080">even</span> <span m="1964440">in</span> <span
  m="1964590">this</span> <span m="1964800">class</span> <span
  m="1965750">that</span> <span m="1965940">the</span> <span
  m="1966090">eigenvalues,</span> <span m="1967440">same</span> <span
  m="1967920">lambdas.</span> <span m="1969370">Now</span> <span
  m="1969510">I</span> <span m="1969600">want</span> <span m="1969810">a</span>
  <span m="1969870">whole</span> <span m="1970110">line</span> <span
  m="1970560">that</span> <span m="1970740">ends</span> <span
  m="1971010">up</span> <span m="1971190">with</span> <span
  m="1971430">the</span> <span m="1971520">same</span> <span
  m="1973630">sigmas.</span> <span m="1976200">And</span> <span
  m="1976400">I</span> <span m="1976490">want</span> <span
  m="1976730">you</span> <span m="1976820">to</span> <span
  m="1976940">tell</span> <span m="1977210">me</span> <span
  m="1977360">what</span> <span m="1977540">I'm</span> <span
  m="1977720">allowed</span> <span m="1978050">to</span> <span
  m="1978200">do</span> <span m="1978530">to</span> <span m="1978650">the</span>
  <span m="1978770">matrix</span> <span m="1981930">without</span> <span
  m="1982290">changing</span> <span m="1982830">the</span> <span
  m="1982990">sigmas.</span></p><p><span m="1983880">So</span> <span
  m="1984300">this</span> <span m="1984570">is</span> <span
  m="1984750">a--</span> <span m="1985500">maybe</span> <span
  m="1985770">don't</span> <span m="1986040">shout</span> <span
  m="1986370">it</span> <span m="1986490">out</span> <span
  m="1987180">immediately.</span> <span m="1987950">Let</span> <span
  m="1988320">everybody</span> <span m="1988800">think.</span> <span
  m="1990030">What</span> <span m="1990840">am</span> <span m="1991020">I</span>
  <span m="1991170">allowed</span> <span m="1991530">to</span> <span
  m="1991710">do</span> <span m="1992040">to</span> <span m="1992220">a</span>
  <span m="1992310">matrix?</span> <span m="1993330">Every</span> <span
  m="1993630">matrix</span> <span m="1994140">has</span> <span
  m="1994320">got</span> <span m="1994530">these</span> <span
  m="1994800">singular</span> <span m="1995400">values,</span> <span
  m="1996790">and</span> <span m="1996930">now</span> <span m="1997140">I</span>
  <span m="1997260">want</span> <span m="1997500">to</span> <span
  m="1998820">make</span> <span m="1999330">it</span> <span m="1999450">a</span>
  <span m="2000260">better</span> <span m="2000620">matrix</span> <span
  m="2001250">with</span> <span m="2001430">more</span> <span
  m="2001700">zeros</span> <span m="2002330">or</span> <span
  m="2002420">something.</span> <span m="2005020">If</span> <span
  m="2006860">I</span> <span m="2007040">do</span> <span m="2007400">that</span>
  <span m="2008300">to</span> <span m="2008570">it,</span> <span
  m="2009790">does</span> <span m="2010120">that</span> <span
  m="2010310">change</span> <span m="2010790">the</span> <span
  m="2010940">sigmas?</span> <span m="2012530">Can</span> <span
  m="2012800">I</span> <span m="2012920">do</span> <span m="2013130">more</span>
  <span m="2013550">than</span> <span m="2013760">that</span> <span
  m="2014030">to</span> <span m="2014330">it?</span> <span
  m="2015080">What</span> <span m="2015290">can</span> <span
  m="2015500">I</span> <span m="2015620">do?</span> <span
  m="2016630">What</span> <span m="2019010">group</span> <span
  m="2019370">of</span> <span m="2019430">matrices</span> <span
  m="2020390">will</span> <span m="2020720">have</span> <span
  m="2021080">the</span> <span m="2021230">same</span> <span
  m="2021920">sigmas</span> <span m="2022970">as</span> <span
  m="2023180">my</span> <span m="2023720">starting</span> <span
  m="2024230">matrix</span> <span m="2024880">A?</span> <span
  m="2025710">So</span> <span m="2025940">that's</span> <span
  m="2026210">a</span> <span m="2026570">basic,</span> <span
  m="2027260">basic</span> <span m="2027710">question</span> <span
  m="2028190">about</span> <span m="2029470">singular</span> <span
  m="2029960">values</span> <span m="2030500">and</span> <span
  m="2030620">the</span> <span m="2030750">SVD.</span></p><p><span
  m="2032300">So</span> <span m="2032510">let's</span> <span
  m="2033530">think</span> <span m="2034040">of</span> <span
  m="2034130">the</span> <span m="2034310">answer</span> <span
  m="2035300">together.</span> <span m="2037390">So</span> <span
  m="2037600">it's</span> <span m="2038350">connected</span> <span
  m="2038830">to</span> <span m="2038950">the</span> <span
  m="2039130">SVD,</span> <span m="2040180">so</span> <span
  m="2040330">let</span> <span m="2040480">me</span> <span
  m="2040630">remember</span> <span m="2041140">the</span> <span
  m="2041420">SVD.</span> <span m="2042490">The</span> <span
  m="2042890">SVD--</span> <span m="2043680">I</span> <span
  m="2043840">have</span> <span m="2043990">some</span> <span
  m="2044320">orthogonal</span> <span m="2044950">matrix.</span> <span
  m="2046250">Then</span> <span m="2046390">the</span> <span
  m="2046540">singular</span> <span m="2047110">value</span> <span
  m="2047550">of the</span> <span m="2047650">matrix--</span> <span
  m="2048310">SV</span> <span m="2049000">for</span> <span
  m="2049210">singular</span> <span m="2049750">values.</span> <span
  m="2050650">And</span> <span m="2050800">then</span> <span
  m="2051610">another</span> <span m="2052030">orthogonal</span> <span
  m="2052630">matrix.</span> <span m="2056670">What</span> <span
  m="2056880">could</span> <span m="2057120">I</span> <span
  m="2057239">do</span> <span m="2057449">to</span> <span
  m="2057540">that</span> <span m="2057780">equation</span> <span
  m="2058710">that</span> <span m="2058860">would</span> <span
  m="2059040">not</span> <span m="2059429">touch</span> <span
  m="2060000">this</span> <span m="2060250">guy?</span></p><p><span
  m="2065330">So</span> <span m="2065570">I'm</span> <span
  m="2065750">asking,</span> <span m="2066260">what</span> <span
  m="2066929">invariants?</span> <span m="2068870">Because</span> <span
  m="2069270">not</span> <span m="2069670">touching</span> <span
  m="2070120">it</span> <span m="2070239">means</span> <span
  m="2070630">leaving</span> <span m="2071020">it</span> <span
  m="2071530">not</span> <span m="2071889">varying.</span> <span
  m="2072909">So</span> <span m="2073030">I'm</span> <span
  m="2073150">looking</span> <span m="2073570">for</span> <span
  m="2076330">under</span> <span m="2076630">what</span> <span
  m="2076929">operations</span> <span m="2078159">are</span> <span
  m="2078310">the</span> <span m="2078489">singular</span> <span
  m="2079060">values</span> <span m="2079600">invariant?</span> <span
  m="2081040">When</span> <span m="2081250">I</span> <span
  m="2081310">was</span> <span m="2081460">looking</span> <span
  m="2081820">at</span> <span m="2081940">eigenvalues,</span> <span
  m="2083570">this</span> <span m="2083860">was</span> <span
  m="2084070">the</span> <span m="2084219">operation.</span> <span
  m="2085040">Well,</span> <span m="2085900">it</span> <span
  m="2085989">didn't</span> <span m="2086230">have</span> <span
  m="2086440">to</span> <span m="2086560">be</span> <span
  m="2086860">orthogonal--</span> <span m="2087940">something,</span> <span
  m="2088480">then</span> <span m="2088630">its</span> <span
  m="2088840">inverse.</span></p><p><span m="2090159">But</span> <span
  m="2090370">now,</span> <span m="2091030">what</span> <span
  m="2091449">is</span> <span m="2091659">it</span> <span m="2091810">up</span>
  <span m="2091989">there?</span> <span m="2092420">What</span> <span
  m="2092800">could</span> <span m="2093010">I</span> <span
  m="2093159">do</span> <span m="2093400">to</span> <span
  m="2093520">that</span> <span m="2093760">matrix</span> <span
  m="2094330">A?</span> <span m="2097850">Could</span> <span
  m="2098090">I</span> <span m="2098180">multiply</span> <span
  m="2098480">it</span> <span m="2098780">by</span> <span m="2099080">Q?</span>
  <span m="2099900">Could</span> <span m="2100180">I</span> <span
  m="2100910">throw</span> <span m="2101240">in</span> <span
  m="2101440">a</span> <span m="2101510">Q</span> <span m="2102200">maybe</span>
  <span m="2102500">not</span> <span m="2102740">even</span> <span
  m="2103040">on</span> <span m="2103190">the</span> <span
  m="2103310">other</span> <span m="2103550">end?</span> <span
  m="2104690">If</span> <span m="2105350">I</span> <span
  m="2105500">throw</span> <span m="2105830">in</span> <span
  m="2106280">an</span> <span m="2106430">orthogonal</span> <span
  m="2107130">Q,</span> <span m="2108780">do</span> <span m="2109020">I</span>
  <span m="2109140">change</span> <span m="2109560">the</span> <span
  m="2109650">singular</span> <span m="2110130">values</span> <span
  m="2110760">or</span> <span m="2110910">do</span> <span m="2111120">I</span>
  <span m="2111240">not</span> <span m="2111570">change</span> <span
  m="2112050">them?</span> <span m="2112470">Fundamental</span> <span
  m="2113070">question.</span> <span m="2115170">The</span> <span
  m="2115320">answer</span> <span m="2115740">is</span> <span
  m="2117210">no,</span> <span m="2117840">I</span> <span
  m="2117930">don't</span> <span m="2118170">change</span> <span
  m="2118530">them.</span> <span m="2118770">I'm</span> <span
  m="2118950">allowed</span> <span m="2119280">to</span> <span
  m="2119430">do.</span> <span m="2119670">That</span> <span
  m="2120180">because</span> <span m="2120600">here's</span> <span
  m="2122070">an</span> <span m="2122220">orthogonal</span> <span
  m="2122820">matrix,</span> <span m="2123540">a</span> <span
  m="2123660">Q</span> <span m="2123960">times</span> <span
  m="2124350">U.</span> <span m="2125280">If</span> <span
  m="2125430">both</span> <span m="2125730">of</span> <span
  m="2125790">those</span> <span m="2126090">are</span> <span
  m="2126210">orthogonal,</span> <span m="2126870">then</span> <span
  m="2127380">the</span> <span m="2127470">product</span> <span
  m="2127950">is.</span></p><p><span m="2129060">Everybody</span> <span
  m="2129540">knows</span> <span m="2129970">that</span> <span
  m="2131070">a</span> <span m="2131130">product</span> <span
  m="2131580">of</span> <span m="2131700">two</span> <span
  m="2131940">orthogonal</span> <span m="2132510">matrix</span> <span
  m="2133020">is</span> <span m="2133590">still</span> <span
  m="2133890">orthogonal.</span> <span m="2135020">Better</span> <span
  m="2135410">know</span> <span m="2135660">that.</span> <span
  m="2136650">Better</span> <span m="2136890">know</span> <span
  m="2137100">that.</span> <span m="2139970">So</span> <span
  m="2140180">if</span> <span m="2140330">I</span> <span m="2140450">have</span>
  <span m="2140630">an</span> <span m="2140720">orthogonal</span> <span
  m="2141260">matrix</span> <span m="2141800">Q</span> <span
  m="2142670">and</span> <span m="2142820">an</span> <span
  m="2142960">orthogonal</span> <span m="2143570">matrix</span> <span
  m="2144140">U,</span> <span m="2144810">I</span> <span
  m="2144980">claim</span> <span m="2145370">that</span> <span
  m="2145550">this</span> <span m="2145850">is</span> <span
  m="2146210">still</span> <span m="2148300">orthogonal.</span> <span
  m="2151650">And</span> <span m="2152250">how</span> <span
  m="2152460">do</span> <span m="2152610">I</span> <span
  m="2152700">check</span> <span m="2153000">it?</span> <span
  m="2153330">Well,</span> <span m="2154230">I</span> <span
  m="2154320">use</span> <span m="2154590">some</span> <span
  m="2154890">test</span> <span m="2155310">for</span> <span
  m="2155560">orthogonality.</span> <span m="2156450">What</span> <span
  m="2156690">would</span> <span m="2156840">be</span> <span
  m="2157020">the--</span> <span m="2157790">what</span> <span
  m="2157950">test</span> <span m="2158370">do</span> <span
  m="2158500">you</span> <span m="2158580">like</span> <span
  m="2158790">to</span> <span m="2158910">use?</span> <span
  m="2161180">The</span> <span m="2161390">inverse</span> <span
  m="2161870">is</span> <span m="2162080">the</span> <span
  m="2162170">same</span> <span m="2162470">as</span> <span
  m="2162590">that</span> <span m="2162710">transpose,</span> <span
  m="2163115">do</span> <span m="2163520">you</span> <span
  m="2163610">like</span> <span m="2163850">that</span> <span
  m="2164030">test?</span></p><p><span m="2165800">So</span> <span
  m="2166380">I'll</span> <span m="2166670">invert</span> <span
  m="2166990">it.</span> <span m="2168010">QU</span> <span
  m="2168980">inverse.</span> <span m="2170660">Of</span> <span
  m="2170810">course,</span> <span m="2171110">for</span> <span
  m="2171260">any</span> <span m="2171470">matrix</span> <span
  m="2172070">that's</span> <span m="2172370">U</span> <span
  m="2172610">inverse,</span> <span m="2173120">Q</span> <span
  m="2173420">inverse.</span> <span m="2176220">But</span> <span
  m="2176550">these</span> <span m="2177000">were</span> <span
  m="2177210">separately</span> <span m="2177780">orthogonal,</span> <span
  m="2178470">so</span> <span m="2178710">that's</span> <span
  m="2179040">U</span> <span m="2179250">transpose</span> <span
  m="2180030">Q</span> <span m="2180240">transpose.</span> <span
  m="2183660">And</span> <span m="2183810">that</span> <span
  m="2184080">is</span> <span m="2184230">the</span> <span
  m="2184350">same</span> <span m="2184800">as</span> <span
  m="2186150">QU</span> <span m="2187830">transpose.</span> <span
  m="2191950">So</span> <span m="2192060">I</span> <span m="2192150">used</span>
  <span m="2192620">the</span> <span m="2193080">orthogonality</span> <span
  m="2193980">of</span> <span m="2194120">U</span> <span m="2194970">and</span>
  <span m="2195120">the</span> <span m="2195210">orthogonality</span> <span
  m="2196020">of</span> <span m="2196170">Q</span> <span m="2196920">to</span>
  <span m="2197040">conclude</span> <span m="2197640">that</span> <span
  m="2197880">the</span> <span m="2198030">inverse</span> <span
  m="2199290">is</span> <span m="2199470">the</span> <span
  m="2199590">transpose.</span> <span m="2200770">So</span> <span
  m="2200850">the</span> <span m="2200970">answer</span> <span
  m="2201270">is</span> <span m="2201420">yes,</span> <span m="2201780">I</span>
  <span m="2201900">could</span> <span m="2202050">do</span> <span
  m="2202290">that.</span></p><p><span m="2204060">Now,</span> <span
  m="2204330">with</span> <span m="2204540">singular</span> <span
  m="2205050">value--</span> <span m="2205620">with</span> <span
  m="2205920">eigenvalues,</span> <span m="2206880">I</span> <span
  m="2207060">had</span> <span m="2207330">to</span> <span
  m="2208890">multiply</span> <span m="2209490">on</span> <span
  m="2209640">the</span> <span m="2209760">other</span> <span
  m="2210030">side</span> <span m="2210420">by</span> <span m="2210630">Q</span>
  <span m="2211020">inverse</span> <span m="2212370">or</span> <span
  m="2212520">Q</span> <span m="2212730">transpose.</span> <span
  m="2213960">Do</span> <span m="2214110">I</span> <span m="2214200">have</span>
  <span m="2214350">to</span> <span m="2214470">do</span> <span
  m="2214650">that</span> <span m="2214830">now?</span> <span
  m="2215160">No.</span> <span m="2216960">What</span> <span
  m="2217140">can</span> <span m="2217350">I</span> <span m="2217470">do</span>
  <span m="2217650">on</span> <span m="2217770">the</span> <span
  m="2217860">right-hand</span> <span m="2218340">side?</span> <span
  m="2221600">I</span> <span m="2221650">can</span> <span
  m="2221830">multiply</span> <span m="2222370">by--</span> <span
  m="2223240">I</span> <span m="2223330">can</span> <span
  m="2223510">leave</span> <span m="2223750">it</span> <span
  m="2223870">alone.</span> <span m="2226050">Then</span> <span
  m="2226360">it</span> <span m="2227800">has</span> <span
  m="2228070">the</span> <span m="2228160">same</span> <span
  m="2228530">singular</span> <span m="2229030">values</span> <span
  m="2229480">because</span> <span m="2229930">it's</span> <span
  m="2230040">the</span> <span m="2230380">same</span> <span
  m="2230800">sigma</span> <span m="2231070">in</span> <span
  m="2231340">there.</span> <span m="2231580">If</span> <span
  m="2231730">I</span> <span m="2231880">have</span> <span m="2232120">a</span>
  <span m="2232720">orthogonal</span> <span m="2233260">matrix</span> <span
  m="2233800">times</span> <span m="2234160">a</span> <span
  m="2234250">diagonal</span> <span m="2234910">times</span> <span
  m="2235270">an</span> <span m="2235390">orthogonal,</span> <span
  m="2236110">that</span> <span m="2236350">diagonal</span> <span
  m="2237400">is--</span> <span m="2238090">positive</span> <span
  m="2238570">diagonal</span> <span m="2239090">is</span> <span
  m="2239230">going</span> <span m="2239360">to</span> <span
  m="2239500">be</span> <span m="2240040">sigma.</span></p><p><span
  m="2242290">So</span> <span m="2242770">what</span> <span
  m="2243010">can</span> <span m="2243220">I</span> <span m="2243340">do</span>
  <span m="2243550">on</span> <span m="2243730">this</span> <span
  m="2243880">side?</span> <span m="2246620">I</span> <span
  m="2246740">can</span> <span m="2246920">multiply</span> <span
  m="2247520">by</span> <span m="2247790">any</span> <span
  m="2249890">orthogonal</span> <span m="2250520">matrix</span> <span
  m="2251060">on</span> <span m="2251180">that</span> <span
  m="2251390">side</span> <span m="2251680">too.</span> <span
  m="2252380">So</span> <span m="2252560">let's</span> <span
  m="2252770">call</span> <span m="2253040">this</span> <span
  m="2253280">guy</span> <span m="2253550">Q1</span> <span
  m="2254210">and</span> <span m="2254330">this</span> <span
  m="2254510">guy</span> <span m="2254780">Q2.</span> <span m="2257330">I</span>
  <span m="2257660">still</span> <span m="2257960">have</span> <span
  m="2258140">an</span> <span m="2258230">orthogonal</span> <span
  m="2258830">matrix</span> <span m="2259430">there,</span> <span
  m="2260090">orthogonal</span> <span m="2260570">matrix</span> <span
  m="2261080">there,</span> <span m="2261380">and</span> <span
  m="2261500">the</span> <span m="2261660">same</span> <span
  m="2262250">sigma</span> <span m="2263450">popped</span> <span
  m="2263810">in</span> <span m="2263930">the</span> <span
  m="2264020">middle.</span> <span m="2265070">So</span> <span
  m="2265310">that's</span> <span m="2265610">what</span> <span
  m="2265850">you're</span> <span m="2266000">allowed</span> <span
  m="2266330">to</span> <span m="2266480">do.</span> <span
  m="2268610">That</span> <span m="2268910">gives</span> <span
  m="2269180">us</span> <span m="2269450">more</span> <span
  m="2269780">freedom.</span> <span m="2271250">Before</span> <span
  m="2271730">we</span> <span m="2271940">got--</span> <span
  m="2272240">when</span> <span m="2272630">we</span> <span
  m="2272780">had</span> <span m="2272900">to</span> <span m="2273020">do</span>
  <span m="2273860">similarity</span> <span m="2274670">transformations</span>
  <span m="2275660">with</span> <span m="2275800">the</span> <span
  m="2275930">same</span> <span m="2276470">guy,</span> <span
  m="2277240">we</span> <span m="2277460">got</span> <span m="2277730">it</span>
  <span m="2277850">to</span> <span m="2278030">be</span> <span
  m="2278510">tridiagonal.</span></p><p><span m="2280640">But</span> <span
  m="2281240">now,</span> <span m="2282800">we're</span> <span
  m="2282920">allowed</span> <span m="2283190">to</span> <span
  m="2283340">do</span> <span m="2283490">more</span> <span
  m="2283760">stuff.</span> <span m="2284960">We're</span> <span
  m="2285080">allowed</span> <span m="2285380">to</span> <span
  m="2285500">use</span> <span m="2285860">different</span> <span
  m="2287870">orthogonal</span> <span m="2288440">matrices</span> <span
  m="2289220">on</span> <span m="2289400">the</span> <span
  m="2289490">left</span> <span m="2289880">and</span> <span
  m="2290060">right.</span> <span m="2291290">And</span> <span
  m="2291500">we</span> <span m="2291680">can</span> <span
  m="2291920">reduce</span> <span m="2292430">it</span> <span
  m="2292550">even</span> <span m="2292880">further</span> <span
  m="2293420">from</span> <span m="2293830">tridiagonal</span> <span
  m="2295190">to</span> <span m="2295760">bidiagonal.</span> <span
  m="2297110">So</span> <span m="2297330">the</span> <span
  m="2298280">first</span> <span m="2298640">step</span> <span
  m="2299180">is</span> <span m="2299720">getting</span> <span
  m="2300140">zero.</span> <span m="2301250">The</span> <span
  m="2301410">step</span> <span m="2301790">of</span> <span
  m="2301910">getting</span> <span m="2302270">zeros</span> <span
  m="2304190">reduces</span> <span m="2304790">it</span> <span
  m="2304910">all</span> <span m="2305120">the</span> <span
  m="2305240">way</span> <span m="2305510">to</span> <span
  m="2305720">that,</span> <span m="2307070">with</span> <span
  m="2307280">all</span> <span m="2307640">zeros</span> <span
  m="2308180">there.</span> <span m="2311290">So</span> <span
  m="2311500">it's</span> <span m="2316310">easier.</span> <span
  m="2317690">Then</span> <span m="2319250">I</span> <span
  m="2319430">work</span> <span m="2319760">on</span> <span
  m="2319940">this.</span> <span m="2320570">This</span> <span
  m="2320810">is</span> <span m="2320990">the</span> <span
  m="2321110">matrix</span> <span m="2321680">I</span> <span
  m="2321800">work</span> <span m="2322190">on</span> <span
  m="2322460">using</span> <span m="2322880">a</span> <span
  m="2323210">QR</span> <span m="2323810">type</span> <span
  m="2324230">idea,</span> <span m="2325400">some</span> <span
  m="2326030">method</span> <span m="2326360">like</span> <span
  m="2326570">that.</span></p><p><span m="2326810">So</span> <span
  m="2327320">everybody's</span> <span m="2328190">seeing</span> <span
  m="2328580">that</span> <span m="2330170">our</span> <span
  m="2330380">algorithm</span> <span m="2331010">has</span> <span
  m="2331430">got</span> <span m="2331670">two</span> <span
  m="2332000">stages.</span> <span m="2333360">One</span> <span
  m="2333530">is</span> <span m="2333950">get</span> <span m="2334180">a</span>
  <span m="2334250">lot</span> <span m="2334460">of</span> <span
  m="2334520">zeros</span> <span m="2336360">and</span> <span
  m="2336570">get</span> <span m="2336750">them</span> <span
  m="2336960">in</span> <span m="2337110">places</span> <span
  m="2337680">that</span> <span m="2337830">will</span> <span
  m="2338070">stay</span> <span m="2338820">zero</span> <span
  m="2339480">as</span> <span m="2339900">Part</span> <span m="2340290">2</span>
  <span m="2340650">of</span> <span m="2340800">the</span> <span
  m="2340920">algorithm</span> <span m="2342450">gets</span> <span
  m="2342720">going.</span> <span m="2343860">And</span> <span
  m="2343980">then,</span> <span m="2344250">run</span> <span
  m="2344610">Part</span> <span m="2344850">2</span> <span m="2345090">of</span>
  <span m="2345210">the</span> <span m="2345360">algorithm.</span> <span
  m="2346640">You</span> <span m="2346920">staying</span> <span
  m="2347490">with--</span> <span m="2349110">each</span> <span
  m="2349380">step</span> <span m="2349710">is</span> <span
  m="2349860">very</span> <span m="2350130">fast</span> <span
  m="2350610">now</span> <span m="2350910">because</span> <span
  m="2352620">doing</span> <span m="2353010">a</span> <span
  m="2353070">QR</span> <span m="2353610">factorization</span> <span
  m="2355020">is</span> <span m="2356400">fast.</span> <span
  m="2357570">Was</span> <span m="2357800">there</span> <span
  m="2357940">a</span> <span m="2357990">question?</span> <span
  m="2358750">Yeah.</span> <span m="2360420">So</span> <span
  m="2361170">I</span> <span m="2361320">would</span> <span
  m="2361470">call</span> <span m="2361740">this</span> <span
  m="2362070">bidiagonal,</span> <span m="2363200">of</span> <span
  m="2363270">course.</span></p><p><span m="2366760">And</span> <span
  m="2367050">everybody</span> <span m="2367530">recognizes</span> <span
  m="2368340">that</span> <span m="2368490">if</span> <span m="2368640">I</span>
  <span m="2368760">have</span> <span m="2368910">a</span> <span
  m="2368970">bidiagonal</span> <span m="2369840">matrix--</span> <span
  m="2371250">call</span> <span m="2371520">it</span> <span m="2371700">A</span>
  <span m="2373430">or</span> <span m="2373580">A0</span> <span
  m="2374240">or</span> <span m="2374360">whatever--</span> <span
  m="2375530">then</span> <span m="2376480">what</span> <span
  m="2377150">do</span> <span m="2377210">you</span> <span
  m="2377270">think</span> <span m="2377510">about</span> <span
  m="2377810">A</span> <span m="2377960">transpose</span> <span
  m="2378640">A?</span> <span m="2379820">What</span> <span
  m="2380030">would</span> <span m="2380270">A</span> <span
  m="2380420">transpose</span> <span m="2380860">A--</span> <span
  m="2381300">if</span> <span m="2382010">that</span> <span
  m="2382220">was</span> <span m="2382460">A,</span> <span
  m="2383970">what</span> <span m="2384300">could</span> <span
  m="2384510">you</span> <span m="2384630">tell</span> <span
  m="2384870">me</span> <span m="2385050">about</span> <span
  m="2385470">A</span> <span m="2385620">transpose</span> <span
  m="2386280">A?</span> <span m="2390710">Could</span> <span
  m="2390890">you</span> <span m="2391070">multiply</span> <span
  m="2391760">matrices</span> <span m="2394210">knowing</span> <span
  m="2395080">where</span> <span m="2395350">the</span> <span
  m="2395470">non-zeros</span> <span m="2396310">are</span> <span
  m="2397570">in</span> <span m="2397720">your</span> <span
  m="2397870">head</span> <span m="2398230">and</span> <span
  m="2398470">get</span> <span m="2398710">an</span> <span
  m="2398860">idea</span> <span m="2399310">of</span> <span
  m="2399460">where--</span> <span m="2400210">and</span> <span
  m="2400570">so</span> <span m="2400810">if</span> <span m="2400960">I</span>
  <span m="2401080">have</span> <span m="2401200">a</span> <span
  m="2401260">bidiagonal</span> <span m="2402070">matrix</span> <span
  m="2402640">A,</span> <span m="2403540">then</span> <span
  m="2404980">implicitly</span> <span m="2406000">in</span> <span
  m="2406150">the</span> <span m="2407110">SVD,</span> <span
  m="2408130">I'm</span> <span m="2408370">looking</span> <span
  m="2408700">at</span> <span m="2408880">A</span> <span
  m="2409090">transpose</span> <span m="2409505">A.</span> <span
  m="2410590">And</span> <span m="2410950">what</span> <span
  m="2411250">would</span> <span m="2412150">be</span> <span
  m="2412300">true</span> <span m="2412570">about</span> <span
  m="2412870">A</span> <span m="2413020">transpose</span> <span
  m="2413720">A?</span> <span m="2415950">It</span> <span
  m="2416100">would</span> <span m="2416310">be</span> <span
  m="2416550">tridiagonal.</span></p><p><span m="2418750">So</span> <span
  m="2419290">what</span> <span m="2419650">I've</span> <span
  m="2419740">done</span> <span m="2419950">here</span> <span
  m="2421370">and</span> <span m="2421390">what</span> <span
  m="2421570">I've</span> <span m="2421690">done</span> <span
  m="2421900">there</span> <span m="2422620">just</span> <span
  m="2423670">match</span> <span m="2424030">up.</span> <span
  m="2425410">You</span> <span m="2425590">can</span> <span
  m="2427280">operate--</span> <span m="2427660">if</span> <span
  m="2427870">you</span> <span m="2427960">don't</span> <span
  m="2428140">want</span> <span m="2428260">to</span> <span
  m="2428350">change</span> <span m="2428710">singular</span> <span
  m="2429190">values,</span> <span m="2429700">you</span> <span
  m="2429820">can</span> <span m="2429970">get</span> <span
  m="2430150">all</span> <span m="2430300">the</span> <span
  m="2430390">way</span> <span m="2430570">to</span> <span
  m="2430690">here.</span> <span m="2432220">But</span> <span
  m="2432430">then,</span> <span m="2433220">to</span> <span
  m="2433480">find</span> <span m="2433810">those</span> <span
  m="2434020">singular</span> <span m="2434470">values,</span> <span
  m="2434980">that</span> <span m="2435100">would</span> <span
  m="2435250">involve</span> <span m="2435700">A</span> <span
  m="2435880">transpose</span> <span m="2436660">A.</span> <span
  m="2437320">It</span> <span m="2437440">would</span> <span
  m="2437590">be</span> <span m="2437770">symmetric</span> <span
  m="2438520">and</span> <span m="2438640">tridiagonal,</span> <span
  m="2439900">and</span> <span m="2440020">then</span> <span
  m="2440260">you'd</span> <span m="2440440">be</span> <span
  m="2440620">in</span> <span m="2440740">that</span> <span
  m="2442030">game.</span> <span m="2444010">So</span> <span
  m="2445420">those</span> <span m="2445870">are</span> <span
  m="2445960">the</span> <span m="2446080">basic</span> <span
  m="2446560">facts</span> <span m="2447220">of</span> <span
  m="2448290">eig</span> <span m="2448780">and</span> <span
  m="2449280">SVD</span> <span m="2450950">for</span> <span
  m="2451160">matrices</span> <span m="2452060">of</span> <span
  m="2452210">order</span> <span m="2452600">up</span> <span
  m="2452780">to</span> <span m="2453730">1,000,</span> <span
  m="2454440">say.</span> <span m="2456720">I'm</span> <span
  m="2457000">not</span> <span m="2457540">enough</span> <span
  m="2457840">of</span> <span m="2457990">an</span> <span
  m="2458110">expert</span> <span m="2458590">to</span> <span
  m="2458710">know</span> <span m="2459010">where--</span></p><p><span
  m="2463130">Maybe</span> <span m="2463490">higher,</span> <span
  m="2463910">because</span> <span m="2466700">in</span> <span
  m="2467960">perfect</span> <span m="2468620">math,</span> <span
  m="2469670">it's</span> <span m="2469880">going</span> <span
  m="2470050">to</span> <span m="2470150">take</span> <span
  m="2470420">infinitely</span> <span m="2470870">many</span> <span
  m="2471170">steps</span> <span m="2472930">or</span> <span
  m="2473170">Abel</span> <span m="2473610">would</span> <span
  m="2473800">be</span> <span m="2474070">very</span> <span
  m="2474430">surprised.</span> <span m="2476050">He</span> <span
  m="2476410">would</span> <span m="2476620">see</span> <span
  m="2476830">you</span> <span m="2476980">solving</span> <span
  m="2477910">for</span> <span m="2478120">eigenvalues</span> <span
  m="2479080">an</span> <span m="2479230">nth</span> <span
  m="2479520">degree</span> <span m="2479670">equation</span> <span
  m="2480520">by</span> <span m="2480760">a</span> <span
  m="2480790">whole</span> <span m="2480970">lot</span> <span
  m="2481210">of</span> <span m="2481270">little</span> <span
  m="2481540">steps</span> <span m="2481960">and</span> <span
  m="2482110">getting</span> <span m="2482410">them</span> <span
  m="2482530">exactly</span> <span m="2483040">right.</span> <span
  m="2483310">That</span> <span m="2483490">won't</span> <span
  m="2483790">happen.</span> <span m="2484480">But</span> <span
  m="2484810">you</span> <span m="2484990">get</span> <span
  m="2485230">them</span> <span m="2485410">within</span> <span
  m="2486880">epsilon</span> <span m="2487630">in</span> <span
  m="2487930">a</span> <span m="2488770">number</span> <span
  m="2489160">of</span> <span m="2489250">steps</span> <span
  m="2489970">that's</span> <span m="2490330">like</span> <span
  m="2490720">N</span> <span m="2491020">cubed.</span> <span
  m="2492170">So</span> <span m="2492250">that's</span> <span
  m="2492520">pretty</span> <span m="2493660">impressive.</span> <span
  m="2495040">The</span> <span m="2495220">eigenvalue</span> <span
  m="2495970">problem</span> <span m="2496510">is</span> <span
  m="2496690">being</span> <span m="2497680">&quot;solved,&quot;</span> <span
  m="2498340">in</span> <span m="2498520">quotes,</span> <span
  m="2500050">by</span> <span m="2503720">a</span> <span m="2503780">fast</span>
  <span m="2504230">method</span> <span m="2504680">that</span> <span
  m="2506590">gets</span> <span m="2507020">you</span> <span
  m="2507200">a</span> <span m="2507290">good</span> <span
  m="2507590">answer</span> <span m="2508580">within</span> <span
  m="2509830">a</span> <span m="2510080">tolerance</span> <span
  m="2510800">in</span> <span m="2511270">N</span> <span m="2511730">cube</span>
  <span m="2512090">steps.</span></p><p><span m="2515290">So</span> <span
  m="2515420">that's</span> <span m="2515660">great</span> <span
  m="2515990">as</span> <span m="2516110">long</span> <span
  m="2516320">as</span> <span m="2516500">N</span> <span
  m="2516650">isn't</span> <span m="2516920">too</span> <span
  m="2517100">big.</span> <span m="2518810">And</span> <span
  m="2518960">then,</span> <span m="2519200">when</span> <span
  m="2519500">N</span> <span m="2519800">is</span> <span m="2520190">too</span>
  <span m="2520430">big--</span> <span m="2520850">which,</span> <span
  m="2521150">of</span> <span m="2521240">course,</span> <span
  m="2521850">happens--</span> <span m="2523400">you</span> <span
  m="2523490">have</span> <span m="2523670">to</span> <span
  m="2523790">think</span> <span m="2524090">again.</span> <span
  m="2524910">So</span> <span m="2525080">this</span> <span
  m="2525380">method</span> <span m="2526870">is</span> <span
  m="2527090">a</span> <span m="2527150">giant</span> <span
  m="2527600">success</span> <span m="2530110">up</span> <span
  m="2530380">to</span> <span m="2531760">large</span> <span
  m="2532150">matrices,</span> <span m="2532940">but</span> <span
  m="2533140">then</span> <span m="2533980">you</span> <span
  m="2534040">have</span> <span m="2534220">to</span> <span
  m="2534340">think</span> <span m="2534640">again.</span> <span
  m="2535780">And</span> <span m="2536050">what</span> <span
  m="2536530">is</span> <span m="2536770">involved</span> <span
  m="2537370">in</span> <span m="2537550">thinking</span> <span
  m="2538060">again?</span> <span m="2539270">Well,</span> <span
  m="2540940">I</span> <span m="2541000">guess</span> <span
  m="2541240">more</span> <span m="2541450">thinking.</span> <span
  m="2544030">So</span> <span m="2544330">what</span> <span
  m="2544600">do</span> <span m="2544660">you</span> <span m="2544810">do</span>
  <span m="2545110">if</span> <span m="2545250">the</span> <span
  m="2545350">matrix</span> <span m="2545920">is</span> <span
  m="2546070">bigger?</span></p><p><span m="2549710">I</span> <span
  m="2549860">guess</span> <span m="2550530">that</span> <span
  m="2552800">Krylov</span> <span m="2553490">would</span> <span
  m="2553700">say,</span> <span m="2554000">use</span> <span
  m="2554300">my</span> <span m="2554510">method.</span> <span
  m="2555960">So</span> <span m="2556340">Krylov</span> <span
  m="2556880">would</span> <span m="2557060">say--</span> <span
  m="2557450">especially</span> <span m="2558110">if</span> <span
  m="2558230">your</span> <span m="2558380">matrix</span> <span
  m="2558980">was</span> <span m="2559050">sparse.</span> <span
  m="2559550">Can</span> <span m="2560150">we</span> <span
  m="2560240">just</span> <span m="2560480">remember</span> <span
  m="2560930">what</span> <span m="2561110">Krylov</span> <span
  m="2561770">was?</span> <span m="2563190">Krylov</span> <span
  m="2563790">started</span> <span m="2564300">with</span> <span
  m="2564480">a</span> <span m="2564540">vector</span> <span
  m="2565110">b,</span> <span m="2566200">multiplied</span> <span
  m="2566910">it</span> <span m="2567150">by</span> <span m="2567450">A,</span>
  <span m="2568980">multiplied</span> <span m="2569520">that</span> <span
  m="2569850">by</span> <span m="2570180">A,</span> <span m="2572016">and</span>
  <span m="2572490">got</span> <span m="2572790">up</span> <span
  m="2572910">to,</span> <span m="2573210">let's</span> <span
  m="2573420">say,</span> <span m="2573870">A</span> <span m="2574390">to</span>
  <span m="2574500">the</span> <span m="2574720">999b.</span> <span
  m="2579870">So</span> <span m="2580080">now</span> <span
  m="2580350">he's</span> <span m="2580620">got--</span> <span
  m="2581460">Krylov</span> <span m="2582790">has</span> <span
  m="2582990">got</span> <span m="2583200">1,000-dimensional</span> <span
  m="2584790">space.</span> <span m="2585300">He's</span> <span
  m="2585450">got</span> <span m="2585630">a</span> <span
  m="2585690">basis</span> <span m="2586230">for</span> <span
  m="2586500">it--</span> <span m="2586950">1,000</span> <span
  m="2587550">vectors</span> <span m="2589720">that</span> <span
  m="2590320">span</span> <span m="2590860">1,000-dimensional</span> <span
  m="2592060">space.</span></p><p><span m="2593320">And</span> <span
  m="2593830">he'll</span> <span m="2594070">look</span> <span
  m="2594370">at</span> <span m="2594460">the</span> <span
  m="2594610">matrix</span> <span m="2595690">A</span> <span
  m="2596350">only</span> <span m="2596680">on</span> <span
  m="2596860">that</span> <span m="2597100">space.</span> <span
  m="2597580">In</span> <span m="2597730">other</span> <span
  m="2597880">words--</span> <span m="2600120">I</span> <span
  m="2600270">won't</span> <span m="2600540">go</span> <span
  m="2600810">into</span> <span m="2601050">detail</span> <span
  m="2601560">about</span> <span m="2601860">that.</span> <span
  m="2602850">He</span> <span m="2603120">restricts</span> <span
  m="2603990">the</span> <span m="2604140">matrix</span> <span
  m="2605160">to</span> <span m="2605340">this</span> <span
  m="2605700">1,000-dimensional</span> <span m="2606840">space,</span> <span
  m="2608130">and</span> <span m="2608250">he</span> <span
  m="2608340">hopes</span> <span m="2608730">that</span> <span
  m="2608910">it's</span> <span m="2609390">captured.</span> <span
  m="2609990">We</span> <span m="2611100">hope</span> <span
  m="2611340">that</span> <span m="2611520">the</span> <span
  m="2611670">eigenvector</span> <span m="2612450">is</span> <span
  m="2613080">almost--</span> <span m="2613510">is</span> <span
  m="2613750">virtually</span> <span m="2614370">in</span> <span
  m="2614490">that</span> <span m="2614730">space.</span> <span
  m="2615720">And</span> <span m="2615930">actually,</span> <span
  m="2616410">I</span> <span m="2616530">wouldn't</span> <span
  m="2617610">go</span> <span m="2617820">to--</span> <span
  m="2618450">let</span> <span m="2618600">me</span> <span
  m="2618720">take</span> <span m="2618990">a</span> <span m="2619050">9</span>
  <span m="2619440">out</span> <span m="2619650">of</span> <span
  m="2619710">that.</span> <span m="2622510">100-dimensional</span> <span
  m="2623590">would</span> <span m="2623770">probably</span> <span
  m="2624160">catch</span> <span m="2625000">the</span> <span
  m="2625120">eigenvector.</span></p><p><span m="2626170">So</span> <span
  m="2626380">if</span> <span m="2626590">the</span> <span
  m="2626740">eigenvector</span> <span m="2627520">is</span> <span
  m="2627700">virtually</span> <span m="2628330">in</span> <span
  m="2628450">this</span> <span m="2628690">space,</span> <span
  m="2630290">then</span> <span m="2630620">we</span> <span
  m="2630770">can</span> <span m="2630980">look</span> <span
  m="2631520">at</span> <span m="2631730">a</span> <span
  m="2631940">matrix</span> <span m="2632630">of</span> <span
  m="2632750">order</span> <span m="2633080">100.</span> <span
  m="2633590">We</span> <span m="2633770">can</span> <span
  m="2634160">bring</span> <span m="2634760">A</span> <span
  m="2635120">down</span> <span m="2636110">to</span> <span
  m="2636530">just</span> <span m="2636860">see</span> <span
  m="2637160">its</span> <span m="2637310">action</span> <span
  m="2637850">on</span> <span m="2638150">that</span> <span
  m="2638510">space.</span> <span m="2639700">And</span> <span
  m="2640050">any</span> <span m="2640340">piece</span> <span
  m="2640880">of--</span> <span m="2642350">so</span> <span
  m="2644490">here</span> <span m="2644660">is</span> <span
  m="2644790">a--</span> <span m="2645090">so</span> <span m="2645320">I</span>
  <span m="2645410">look</span> <span m="2645620">at</span> <span
  m="2645710">vectors</span> <span m="2646190">v,</span> <span
  m="2646930">which</span> <span m="2647180">are</span> <span
  m="2647330">some</span> <span m="2648830">combination--</span> <span
  m="2649880">c1</span> <span m="2650250">b</span> <span m="2651440">plus</span>
  <span m="2651680">c2</span> <span m="2652370">Ab</span> <span
  m="2653590">plus</span> <span m="2654000">c3</span> <span m="2654800">A</span>
  <span m="2654980">squared</span> <span m="2655490">b,</span> <span
  m="2656720">and</span> <span m="2657020">c100</span> <span
  m="2658952">A</span> <span m="2659360">to</span> <span m="2659420">the</span>
  <span m="2659540">99th</span> <span m="2660380">b.</span> <span
  m="2665540">Plus</span> <span m="2665900">an</span> <span
  m="2666080">error.</span> <span m="2669710">And</span> <span
  m="2669860">I'm</span> <span m="2670060">going</span> <span
  m="2670180">to</span> <span m="2670760">ignore</span> <span
  m="2671150">that</span> <span m="2671360">error</span> <span
  m="2675860">because</span> <span m="2676100">I've</span> <span
  m="2676280">gone</span> <span m="2677450">up</span> <span
  m="2677600">to</span> <span m="2677720">dimension</span> <span
  m="2678200">100.</span> <span m="2678640">I'd</span> <span
  m="2678740">probably</span> <span m="2679220">say</span> <span
  m="2679550">it's</span> <span m="2679670">pretty</span> <span
  m="2679970">safe</span> <span m="2680300">to</span> <span
  m="2680450">ignore</span> <span m="2680810">that</span> <span
  m="2681050">error.</span></p><p><span m="2682010">And</span> <span
  m="2682130">then,</span> <span m="2682580">in</span> <span
  m="2682820">this</span> <span m="2683180">space,</span> <span
  m="2685400">just</span> <span m="2685730">looking</span> <span
  m="2686150">at</span> <span m="2686330">the</span> <span
  m="2686450">matrix</span> <span m="2687050">A--</span> <span
  m="2687410">so</span> <span m="2687710">wherever</span> <span
  m="2688310">A</span> <span m="2688640">to</span> <span m="2688700">the</span>
  <span m="2688820">100th</span> <span m="2689540">comes</span> <span
  m="2689870">in,</span> <span m="2690410">forget</span> <span
  m="2690770">it.</span> <span m="2691460">Just</span> <span
  m="2692240">think</span> <span m="2692510">about</span> <span
  m="2692750">the</span> <span m="2692870">matrix</span> <span
  m="2693410">A</span> <span m="2693770">as</span> <span
  m="2695210">multiplying</span> <span m="2695870">vectors</span> <span
  m="2696650">of</span> <span m="2696800">this</span> <span
  m="2697040">kind</span> <span m="2697400">in</span> <span
  m="2697520">this</span> <span m="2697700">space.</span> <span
  m="2698810">Then</span> <span m="2699860">I</span> <span
  m="2700010">have</span> <span m="2700220">100</span> <span
  m="2700610">by</span> <span m="2700790">100</span> <span
  m="2701750">eigenvalue</span> <span m="2702830">problem.</span> <span
  m="2703940">And</span> <span m="2706320">so</span> <span
  m="2707410">the</span> <span m="2707560">big</span> <span
  m="2708020">matrix</span> <span m="2708740">A</span> <span
  m="2709100">is</span> <span m="2709670">reduced</span> <span
  m="2710690">to</span> <span m="2710810">a</span> <span
  m="2710870">matrix</span> <span m="2711410">of</span> <span
  m="2711530">size</span> <span m="2711860">100</span> <span
  m="2712370">by--</span> <span m="2713060">do</span> <span
  m="2713180">you</span> <span m="2713300">see</span> <span
  m="2714020">what</span> <span m="2714290">I'm</span> <span
  m="2714470">saying</span> <span m="2714880">even?</span> <span
  m="2715130">So</span> <span m="2716060">I'm</span> <span
  m="2716240">not</span> <span m="2716450">giving</span> <span
  m="2716780">the</span> <span m="2716900">details.</span></p><p><span
  m="2720010">Think</span> <span m="2720310">of</span> <span
  m="2720460">a</span> <span m="2722950">matrix</span> <span
  m="2723290">A</span> <span m="2723630">of</span> <span m="2724000">size</span>
  <span m="2724420">a million.</span> <span m="2727810">And</span> <span
  m="2727990">you</span> <span m="2728170">apply</span> <span
  m="2728620">it</span> <span m="2728770">to</span> <span
  m="2729550">Krylov</span> <span m="2730180">vectors--</span> <span
  m="2730760">so</span> <span m="2731070">I</span> <span m="2731270">call</span>
  <span m="2731500">them</span> <span m="2731710">little</span> <span
  m="2731980">k</span> <span m="2732460">for</span> <span m="2732700">a</span>
  <span m="2732760">Krylov</span> <span m="2733330">vector--</span> <span
  m="2736540">in</span> <span m="2736720">this</span> <span
  m="2736990">100-dimensional</span> <span m="2737920">space.</span> <span
  m="2741310">So</span> <span m="2741490">they</span> <span
  m="2741610">have</span> <span m="2742630">a</span> <span
  m="2742690">million</span> <span m="2743200">minus</span> <span
  m="2743650">100</span> <span m="2746990">0-components,</span> <span
  m="2747740">you</span> <span m="2747890">could</span> <span
  m="2748070">say,</span> <span m="2748570">this</span> <span
  m="2749010">k.</span> <span m="2749330">This</span> <span
  m="2749540">is</span> <span m="2749690">in</span> <span m="2749810">the</span>
  <span m="2749900">Krylov</span> <span m="2750380">space.</span> <span
  m="2751350">This</span> <span m="2751400">is</span> <span
  m="2751570">A,</span> <span m="2751870">a</span> <span
  m="2752170">million--</span> <span m="2753770">k,</span> <span
  m="2754280">100.</span> <span m="2758720">It's</span> <span
  m="2759060">a</span> <span m="2759230">full--</span> <span
  m="2760170">so</span> <span m="2760500">it's</span> <span
  m="2760710">got</span> <span m="2760890">a</span> <span
  m="2761010">million</span> <span m="2761430">components,</span> <span
  m="2762030">but</span> <span m="2762240">it's</span> <span
  m="2762420">out</span> <span m="2762630">of</span> <span
  m="2762750">just</span> <span m="2763050">100-dimensional</span> <span
  m="2763920">space.</span> <span m="2764650">So</span> <span
  m="2764730">when</span> <span m="2764880">I</span> <span
  m="2764940">multiply</span> <span m="2765450">by</span> <span
  m="2765720">A,</span> <span m="2766560">it'll</span> <span
  m="2767340">be</span> <span m="2767490">mostly</span> <span
  m="2768240">in--</span> <span m="2770880">partly</span> <span
  m="2771300">in</span> <span m="2772770">the</span> <span
  m="2772860">Krylov</span> <span m="2773340">space--</span> <span
  m="2773910">k100--</span> <span m="2775590">and</span> <span
  m="2775860">a</span> <span m="2775920">piece</span> <span
  m="2776460">out</span> <span m="2777990">of</span> <span
  m="2778340">k100.</span></p><p><span m="2781880">And</span> <span
  m="2782070">I</span> <span m="2782160">just</span> <span
  m="2782490">ignore</span> <span m="2782880">that</span> <span
  m="2783330">part</span> <span m="2783540">of</span> <span
  m="2783600">the</span> <span m="2783690">matrix.</span> <span
  m="2785740">So</span> <span m="2785880">I</span> <span m="2786000">have</span>
  <span m="2786180">100</span> <span m="2786540">by</span> <span
  m="2786720">100</span> <span m="2787050">problem,</span> <span
  m="2787530">and</span> <span m="2787650">I</span> <span
  m="2787770">solve</span> <span m="2788160">to</span> <span
  m="2788280">find</span> <span m="2788580">the</span> <span
  m="2788730">eigenvalues.</span> <span m="2789570">And</span> <span
  m="2789720">they're</span> <span m="2789900">a</span> <span
  m="2789930">pretty</span> <span m="2790770">good</span> <span
  m="2791070">approximation</span> <span m="2791970">to</span> <span
  m="2792120">the</span> <span m="2793020">eigenvalues,</span> <span
  m="2793890">to</span> <span m="2794080">the,</span> <span
  m="2795240">hopefully,</span> <span m="2795840">like</span> <span
  m="2796140">the</span> <span m="2796290">lowest</span> <span
  m="2796920">100</span> <span m="2797430">eigenvalues.</span> <span
  m="2798210">I'd</span> <span m="2798360">like</span> <span
  m="2798570">to</span> <span m="2798690">know</span> <span
  m="2798930">that,</span> <span m="2800130">but</span> <span
  m="2800340">I</span> <span m="2800460">might</span> <span
  m="2800730">not</span> <span m="2800940">be</span> <span
  m="2801120">sure</span> <span m="2801990">that</span> <span
  m="2802170">this</span> <span m="2802710">idea</span> <span
  m="2803190">would</span> <span m="2803460">give</span> <span
  m="2803730">me</span> <span m="2803910">the</span> <span
  m="2804060">lowest</span> <span m="2805140">100--</span> <span
  m="2805530">the</span> <span m="2805650">first</span> <span
  m="2806040">100</span> <span m="2806430">eigenvalues</span> <span
  m="2807300">of</span> <span m="2808290">the</span> <span
  m="2808410">million,</span> <span m="2809060">of</span> <span
  m="2809180">the</span> <span m="2809280">matrix</span> <span
  m="2809850">of</span> <span m="2810000">size</span> <span m="2810360">a</span>
  <span m="2810460">million.</span> <span m="2811140">I'm</span> <span
  m="2811470">just</span> <span m="2812430">taking</span> <span
  m="2812820">a</span> <span m="2812910">few</span> <span
  m="2813150">minutes</span> <span m="2813600">here</span> <span
  m="2813840">to</span> <span m="2817070">wave</span> <span
  m="2817430">hands</span> <span m="2818780">about</span> <span
  m="2819830">what</span> <span m="2820160">Krylov</span> <span
  m="2822450">idea</span> <span m="2822870">would</span> <span
  m="2823050">do.</span> <span m="2823730">And</span> <span m="2823860">I</span>
  <span m="2823950">probably</span> <span m="2824340">won't</span> <span
  m="2824610">mention</span> <span m="2825120">Krylov</span> <span
  m="2825570">again in</span> <span m="2826020">this</span> <span
  m="2826920">semester.</span></p><p><span m="2827550">So</span> <span
  m="2828300">what</span> <span m="2828540">it</span> <span
  m="2828690">can</span> <span m="2828900">do</span> <span m="2829260">is</span>
  <span m="2830520">look</span> <span m="2830820">at</span> <span
  m="2830970">this</span> <span m="2831420">particular</span> <span
  m="2832350">type</span> <span m="2832710">of</span> <span
  m="2832830">space</span> <span m="2834630">because</span> <span
  m="2835020">we</span> <span m="2835170">can</span> <span
  m="2835380">get</span> <span m="2835590">a</span> <span
  m="2835650">basis</span> <span m="2836220">for</span> <span
  m="2836440">it</span> <span m="2836550">quickly.</span> <span
  m="2837660">Just</span> <span m="2838110">multiply</span> <span
  m="2838650">again</span> <span m="2839010">and</span> <span
  m="2839160">again</span> <span m="2839430">by</span> <span
  m="2839670">A.</span> <span m="2840960">Then</span> <span
  m="2841170">we</span> <span m="2841320">can</span> <span
  m="2841530">orthogonalize</span> <span m="2842520">that</span> <span
  m="2842760">basis.</span> <span m="2844700">That's</span> <span
  m="2845030">Gram-Schmidt</span> <span m="2845750">in</span> <span
  m="2845900">some</span> <span m="2846800">form.</span> <span
  m="2847160">We're</span> <span m="2847310">always</span> <span
  m="2847700">going</span> <span m="2848000">back</span> <span
  m="2848270">to</span> <span m="2848390">Gram-Schmidt.</span> <span
  m="2849620">Then</span> <span m="2849830">I</span> <span
  m="2849980">have</span> <span m="2850220">100</span> <span
  m="2850640">by</span> <span m="2850820">100--</span> <span
  m="2851570">I</span> <span m="2851690">have</span> <span m="2851870">a</span>
  <span m="2852680">subspace</span> <span m="2853370">of</span> <span
  m="2853490">size</span> <span m="2853910">100.</span> <span
  m="2854900">I</span> <span m="2854990">look</span> <span m="2855260">at</span>
  <span m="2855770">what</span> <span m="2856010">the</span> <span
  m="2856130">matrix</span> <span m="2856640">does</span> <span
  m="2856940">in</span> <span m="2857120">that</span> <span
  m="2857360">space,</span> <span m="2858440">and</span> <span
  m="2858680">that</span> <span m="2859570">I</span> <span
  m="2859670">could</span> <span m="2859850">look</span> <span
  m="2860090">for--</span> <span m="2861800">I</span> <span
  m="2861890">could</span> <span m="2862010">find</span> <span
  m="2862400">eigenvalues</span> <span m="2863210">restricted</span> <span
  m="2863880">to</span> <span m="2864020">that</span> <span
  m="2864260">space.</span> <span m="2865190">They</span> <span
  m="2865310">wouldn't</span> <span m="2865610">be</span> <span
  m="2865980">the</span> <span m="2866120">perfect</span> <span
  m="2866780">eigenvalues,</span> <span m="2867620">but</span> <span
  m="2867830">they</span> <span m="2868010">would</span> <span
  m="2868160">be</span> <span m="2868820">accurate.</span></p><p><span
  m="2870820">So</span> <span m="2871150">I</span> <span
  m="2871450">didn't</span> <span m="2871660">know</span> <span
  m="2871870">it</span> <span m="2871960">would</span> <span
  m="2872110">take</span> <span m="2873130">one</span> <span
  m="2873420">class</span> <span m="2873880">time</span> <span
  m="2874210">to</span> <span m="2874330">talk</span> <span
  m="2874630">about</span> <span m="2874930">finding</span> <span
  m="2875410">eigenvalues</span> <span m="2876250">and</span> <span
  m="2876390">singular</span> <span m="2876850">values,</span> <span
  m="2877330">but</span> <span m="2877900">we</span> <span
  m="2878050">did</span> <span m="2878260">some</span> <span
  m="2878530">important</span> <span m="2879040">things.</span> <span
  m="2880330">We</span> <span m="2880480">remembered</span> <span
  m="2881050">that</span> <span m="2881950">similarity</span> <span
  m="2883450">is</span> <span m="2883660">the</span> <span
  m="2883750">thing</span> <span m="2884050">to</span> <span
  m="2884200">check,</span> <span m="2885250">thing</span> <span
  m="2885490">to</span> <span m="2885640">preserve,</span> <span
  m="2886810">because</span> <span m="2887260">it</span> <span
  m="2887350">doesn't</span> <span m="2887650">change</span> <span
  m="2887980">the</span> <span m="2888100">eigenvalues.</span> <span
  m="2889360">And</span> <span m="2889540">then</span> <span
  m="2889810">we--</span> <span m="2891820">for</span> <span
  m="2892060">singular</span> <span m="2892570">values,</span> <span
  m="2893230">what</span> <span m="2893440">was</span> <span
  m="2893680">the</span> <span m="2893800">thing?</span> <span
  m="2894760">You</span> <span m="2894910">could</span> <span
  m="2895090">multiply</span> <span m="2895730">left</span> <span
  m="2896140">and</span> <span m="2896320">right</span> <span
  m="2896740">by</span> <span m="2897070">different</span> <span
  m="2898000">orthogonal</span> <span m="2898630">matrices.</span> <span
  m="2900100">And</span> <span m="2900220">somehow,</span> <span
  m="2900610">maybe</span> <span m="2900940">that</span> <span
  m="2901150">doesn't</span> <span m="2901540">have</span> <span
  m="2901810">an</span> <span m="2902060">established</span> <span
  m="2902770">name,</span> <span m="2904150">multiplying</span> <span
  m="2905650">left</span> <span m="2906070">and</span> <span
  m="2906190">right</span> <span m="2906550">by</span> <span
  m="2907812">a</span> <span m="2908190">Q1</span> <span m="2908850">and
  a</span> <span m="2909090">Q2</span> <span m="2909690">transpose.</span> <span
  m="2911070">But</span> <span m="2912630">the</span> <span
  m="2912810">idea</span> <span m="2913170">is</span> <span
  m="2913320">clear,</span> <span m="2913710">and</span> <span
  m="2913830">that</span> <span m="2914130">doesn't</span> <span
  m="2914520">change</span> <span m="2915090">the</span> <span
  m="2915540">singular</span> <span m="2916050">values.</span></p><p><span
  m="2917680">We're</span> <span m="2917860">ready</span> <span
  m="2918160">to</span> <span m="2918280">move</span> <span
  m="2919600">now</span> <span m="2920390">into--</span> <span
  m="2922630">maybe</span> <span m="2922990">our</span> <span
  m="2923110">next</span> <span m="2923410">step,</span> <span
  m="2924650">which</span> <span m="2924970">we</span> <span
  m="2925210">don't</span> <span m="2925420">spend</span> <span
  m="2925750">a</span> <span m="2925780">long</span> <span
  m="2926110">time</span> <span m="2926530">on,</span> <span
  m="2927550">will</span> <span m="2927790">be</span> <span
  m="2928570">random</span> <span m="2929260">sampling.</span> <span
  m="2929890">What</span> <span m="2930130">if</span> <span
  m="2930250">your</span> <span m="2930400">matrix</span> <span
  m="2930940">is</span> <span m="2931120">just</span> <span
  m="2931570">way</span> <span m="2932080">too</span> <span
  m="2932290">big?</span> <span m="2933700">So</span> <span
  m="2933940">that's</span> <span m="2934220">a</span> <span
  m="2936400">very</span> <span m="2936910">new</span> <span
  m="2937240">idea,</span> <span m="2938140">very</span> <span
  m="2938590">different</span> <span m="2939070">idea</span> <span
  m="2940000">in</span> <span m="2940240">numerical</span> <span
  m="2940690">linear</span> <span m="2940990">algebra,</span> <span
  m="2941470">is</span> <span m="2941680">just</span> <span
  m="2941990">to</span> <span m="2942850">sample</span> <span
  m="2943420">the</span> <span m="2943540">matrix.</span> <span
  m="2945160">Could</span> <span m="2945370">you</span> <span
  m="2945490">believe</span> <span m="2946000">that</span> <span
  m="2946210">the</span> <span m="2946360">answer</span> <span
  m="2946780">is</span> <span m="2946900">going</span> <span
  m="2947020">to</span> <span m="2947140">come</span> <span
  m="2947380">out</span> <span m="2947560">right</span> <span
  m="2948160">just</span> <span m="2948400">for</span> <span
  m="2948610">a</span> <span m="2948670">random</span> <span
  m="2949120">sample?</span> <span m="2950300">Well,</span> <span
  m="2950500">the</span> <span m="2950710">odds</span> <span
  m="2951040">are</span> <span m="2951370">in</span> <span
  m="2951520">your</span> <span m="2951700">favor.</span> <span
  m="2953110">So</span> <span m="2953320">that</span> <span
  m="2954420">will</span> <span m="2954550">be</span> <span
  m="2954670">Wednesday,</span> <span m="2955400">and</span> <span
  m="2955420">then</span> <span m="2955630">we</span> <span
  m="2955810">have</span> <span m="2956110">lots</span> <span
  m="2956650">of</span> <span m="2957790">new--</span> <span
  m="2958270">we'll</span> <span m="2958510">move</span> <span
  m="2959770">onward</span> <span m="2961810">after</span> <span
  m="2962140">that.</span> <span m="2963190">See</span> <span
  m="2963430">you</span> <span m="2963550">Wednesday.</span> <span
  m="2964360">Thanks.</span></p>
embedded_media:
  - uid: 2904ed6f6d10b546a825d3fa90c587a6
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: d32WV1rKoVk
  - uid: 4a22714bfd7685c5c7078e659e23e831
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/d32WV1rKoVk/default.jpg'
  - uid: 5f5121cb5ba1a32c406c8bd769783ee6
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: d32WV1rKoVk
  - uid: 35b1568ee2e3b3f8f4a8b234e04def47
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: d32WV1rKoVk.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-12-computing-eigenvalues-and-singular-values/d32WV1rKoVk.srt
  - uid: d16b04c5aef320f89090baf1470d4b74
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: d32WV1rKoVk.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-12-computing-eigenvalues-and-singular-values/d32WV1rKoVk.pdf
  - uid: bedd6cce83bc68ebf256aab884d07cb6
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 3f6ce0a224b6fe5e6ac4cb155daa3bd0
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 5e95b9d07387665e7c78d1bd05dad831
    parent_uid: f86188c97f54197c2e0ac6b782a4b52d
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture12_300k.mp4'
type: courses
layout: video
---
