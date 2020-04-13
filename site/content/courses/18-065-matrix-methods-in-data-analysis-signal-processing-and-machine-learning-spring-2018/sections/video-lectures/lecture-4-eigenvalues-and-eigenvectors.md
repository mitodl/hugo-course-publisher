---
title: 'Lecture 4: Eigenvalues and Eigenvectors'
uid: 8540e74dad3d88091ed4aa04d359c63d
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-4-eigenvalues-and-eigenvectors
short_url: lecture-4-eigenvalues-and-eigenvectors
inline_embed_id: 58225577lecture4eigenvaluesandeigenvectors78668964
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>Professor Strang begins this lecture
  talking about eigenvectors and eigenvalues and why they are useful.  Then he
  moves to a discussion of symmetric matrices, in particular, positive definite
  matrices.</p> <h2 class="subhead">Summary</h2> <p>\(Ax =\) eigenvalue times
  \(x\)<br /> \(A^2x&nbsp;=\) (eigenvalue)\(^2\) times \(x\)<br /> Write other
  vectors as combinations of eigenvectors<br /> Similar matrix \(B = M^{-1}AM\)
  has the same eigenvalues as \(A\)</p> <p>Related section in textbook: I.6</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
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
  m="11900">donation,</span> <span m="12680">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17180">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="22510">GILBERT STRANG:</span> <span m="22610">So</span> <span
  m="22710">last</span> <span m="23040">time</span> <span m="23340">was</span>
  <span m="23580">orthogonal</span> <span m="24240">matrices--</span> <span
  m="27340">Q.</span> <span m="30030">And</span> <span m="30450">this</span>
  <span m="30690">time</span> <span m="31080">is</span> <span
  m="31200">symmetric</span> <span m="31830">matrices,</span> <span m="32840">S.
  So</span> <span m="33150">we're</span> <span m="33390">really</span> <span
  m="33840">talking</span> <span m="34290">about</span> <span
  m="34620">the</span> <span m="34740">best</span> <span
  m="35370">matrices</span> <span m="36600">of</span> <span
  m="36780">all.</span> <span m="37620">Well,</span> <span m="37950">I'll</span>
  <span m="38070">start</span> <span m="38520">with</span> <span
  m="39180">any</span> <span m="39510">square</span> <span
  m="39990">matrix</span> <span m="41790">and</span> <span
  m="42420">about</span> <span m="42790">eigenvectors.</span> <span
  m="43620">But</span> <span m="43770">you've</span> <span
  m="43980">heard</span> <span m="44250">of</span> <span
  m="44370">eigenvectors</span> <span m="45210">more</span> <span
  m="45540">than</span> <span m="46650">once--</span> <span
  m="47130">more</span> <span m="47370">than</span> <span
  m="47580">twice--</span> <span m="48540">more</span> <span
  m="48720">than</span> <span m="48960">10</span> <span m="49260">times,</span>
  <span m="49710">probably.</span> <span m="50580">OK.</span> <span
  m="51690">So</span> <span m="52080">eigenvectors.</span> <span
  m="54270">And</span> <span m="54510">then,</span> <span m="54810">let's</span>
  <span m="55110">be</span> <span m="55320">sure</span> <span
  m="55590">we</span> <span m="55770">know</span> <span m="56040">why</span>
  <span m="56370">they're</span> <span m="56550">useful,</span> <span
  m="58440">and</span> <span m="60120">maybe</span> <span
  m="60420">compute</span> <span m="60960">one</span> <span m="61200">or</span>
  <span m="61340">two.</span></p><p><span m="62820">But</span> <span
  m="63120">then</span> <span m="63600">we'll</span> <span m="63810">move</span>
  <span m="64200">to</span> <span m="64379">symmetric</span> <span
  m="65099">matrices</span> <span m="65910">and</span> <span
  m="66090">what</span> <span m="66330">is</span> <span m="66480">special</span>
  <span m="66990">about</span> <span m="67290">those.</span> <span
  m="68260">And</span> <span m="68310">then,</span> <span m="68560">even</span>
  <span m="69300">more</span> <span m="69810">special</span> <span
  m="70980">and</span> <span m="71130">more</span> <span
  m="71490">important</span> <span m="72060">will</span> <span
  m="72300">be</span> <span m="73080">positive</span> <span
  m="73740">definite</span> <span m="74880">symmetric</span> <span
  m="75630">matrices--</span> <span m="76350">so</span> <span
  m="76590">that</span> <span m="77130">when</span> <span m="77340">I</span>
  <span m="77550">say,</span> <span m="77880">positive</span> <span
  m="78480">definite,</span> <span m="78960">I</span> <span
  m="79170">mean</span> <span m="79620">symmetric.</span> <span
  m="80280">So</span> <span m="80790">start</span> <span m="81120">with</span>
  <span m="81350">A.</span> <span m="82200">Next</span> <span
  m="82530">comes</span> <span m="82920">S.</span> <span m="83760">Then</span>
  <span m="84060">come</span> <span m="84330">the</span> <span
  m="84510">special</span> <span m="85680">S--</span> <span
  m="86850">special</span> <span m="87390">symmetric</span> <span
  m="87960">matrices</span> <span m="88710">that</span> <span
  m="88890">have</span> <span m="89190">this</span> <span m="89460">extra</span>
  <span m="90120">positive</span> <span m="90720">definite</span> <span
  m="91200">property.</span> <span m="91950">OK.</span></p><p><span
  m="93270">So</span> <span m="94050">start</span> <span m="94410">with</span>
  <span m="94850">A.</span> <span m="95830">So</span> <span m="96740">an</span>
  <span m="96970">eigenvector--</span> <span m="99360">if</span> <span
  m="99540">I</span> <span m="99630">multiply</span> <span m="100200">A</span>
  <span m="100410">by</span> <span m="100710">x,</span> <span
  m="101310">I</span> <span m="101430">get</span> <span m="101670">some</span>
  <span m="101940">vector.</span> <span m="104470">And</span> <span
  m="104590">sometimes,</span> <span m="106270">if</span> <span
  m="106510">x</span> <span m="106870">is</span> <span
  m="108430">especially</span> <span m="109180">chosen</span> <span
  m="110140">well,</span> <span m="111010">Ax</span> <span
  m="111970">comes</span> <span m="112330">out</span> <span m="112630">in</span>
  <span m="112750">the</span> <span m="112870">same</span> <span
  m="113230">direction</span> <span m="113740">as</span> <span
  m="113920">x.</span> <span m="115988">Ax</span> <span m="116400">comes</span>
  <span m="116730">out</span> <span m="117510">some</span> <span
  m="117810">number</span> <span m="119600">times</span> <span
  m="120000">x.</span> <span m="121830">So</span> <span m="122040">there</span>
  <span m="122280">are--</span> <span m="122550">normally,</span> <span
  m="123270">there</span> <span m="123480">would</span> <span
  m="123750">be,</span> <span m="124530">for</span> <span m="124740">an</span>
  <span m="124830">n</span> <span m="125070">by</span> <span m="125310">n</span>
  <span m="125490">matrix--</span> <span m="126120">so</span> <span
  m="126360">let's</span> <span m="127320">say</span> <span m="128190">A</span>
  <span m="128430">is</span> <span m="128639">n</span> <span
  m="128820">by</span> <span m="129090">n</span> <span m="130560">today.</span>
  <span m="133040">Normally,</span> <span m="133520">if</span> <span
  m="134960">we</span> <span m="135080">live</span> <span
  m="135320">right,</span> <span m="136760">there</span> <span
  m="136910">will</span> <span m="137090">be</span> <span m="137330">n</span>
  <span m="137840">different</span> <span m="139340">independent</span> <span
  m="140000">vectors--</span> <span m="141260">x</span> <span
  m="141770">eigenvectors--</span> <span m="143270">that</span> <span
  m="143450">have</span> <span m="143750">this</span> <span
  m="144020">special</span> <span m="144500">property.</span></p><p><span
  m="146740">And</span> <span m="147400">we</span> <span m="147820">can</span>
  <span m="148030">compute</span> <span m="148750">them</span> <span
  m="149560">by</span> <span m="149800">hand</span> <span m="150310">if</span>
  <span m="150720">n</span> <span m="150960">is</span> <span m="151180">2</span>
  <span m="151450">or</span> <span m="151540">3--</span> <span
  m="152680">2,</span> <span m="153160">mostly.</span> <span
  m="155140">But</span> <span m="155680">the</span> <span
  m="155890">computation</span> <span m="156790">of</span> <span
  m="157360">the</span> <span m="157540">x's</span> <span m="158200">and</span>
  <span m="158350">the</span> <span m="158440">lambdas--</span> <span
  m="158920">so</span> <span m="159160">this</span> <span m="161140">is</span>
  <span m="161350">for</span> <span m="163920">i</span> <span
  m="164430">equal</span> <span m="165000">1</span> <span m="165330">up</span>
  <span m="165480">to</span> <span m="165850">n,</span> <span
  m="166230">if</span> <span m="166440">I</span> <span m="167160">use</span>
  <span m="167520">this</span> <span m="167640">sort</span> <span
  m="167910">of</span> <span m="168210">math</span> <span
  m="168990">shorthand--</span> <span m="169920">that</span> <span
  m="170100">I</span> <span m="170190">have</span> <span m="170430">n</span>
  <span m="170670">of</span> <span m="170790">these</span> <span
  m="172350">almost</span> <span m="172830">always.</span> <span
  m="173880">And</span> <span m="175470">my</span> <span m="175680">first</span>
  <span m="175950">question</span> <span m="176370">is,</span> <span
  m="176760">what</span> <span m="177630">are</span> <span
  m="177690">they</span> <span m="177810">good</span> <span
  m="178020">for?</span> <span m="179190">Why</span> <span
  m="180480">does</span> <span m="182070">course</span> <span
  m="182430">after</span> <span m="182760">course</span> <span
  m="183150">introduce</span> <span m="183700">eigenvectors?</span> <span
  m="185840">And</span> <span m="186110">to</span> <span m="186230">me</span>
  <span m="186560">the</span> <span m="186920">key</span> <span
  m="187340">property</span> <span m="188000">is</span> <span
  m="188360">seen</span> <span m="189620">by</span> <span
  m="189860">looking</span> <span m="190340">at</span> <span m="190685">A</span>
  <span m="191030">squared.</span></p><p><span m="192440">So</span> <span
  m="192650">let</span> <span m="192770">me</span> <span m="192920">look</span>
  <span m="193160">at A</span> <span m="193440">squared.</span> <span
  m="197430">So</span> <span m="197610">it's</span> <span
  m="197770">another</span> <span m="198160">n</span> <span m="198310">by</span>
  <span m="198520">n</span> <span m="198700">matrix.</span> <span
  m="200690">And</span> <span m="201050">we</span> <span m="201260">would</span>
  <span m="201470">ask,</span> <span m="201980">suppose</span> <span
  m="202520">we</span> <span m="202700">know</span> <span
  m="202940">these</span> <span m="203210">guys?</span> <span
  m="204140">Suppose</span> <span m="204530">we've</span> <span
  m="204730">found</span> <span m="205490">those</span> <span
  m="205910">somehow.</span> <span m="207890">What</span> <span
  m="208160">about</span> <span m="208730">A</span> <span
  m="208880">squared?</span> <span m="210410">Is</span> <span
  m="211100">x</span> <span m="211650">an</span> <span
  m="211820">eigenvector</span> <span m="212660">of</span> <span
  m="212870">A</span> <span m="213050">squared</span> <span
  m="213530">also?</span> <span m="215020">Well,</span> <span
  m="215260">the</span> <span m="215350">way</span> <span m="215530">to</span>
  <span m="215830">find</span> <span m="216160">out</span> <span
  m="216340">is</span> <span m="216560">to</span> <span
  m="217240">multiply</span> <span m="218260">A</span> <span
  m="218410">squared</span> <span m="218770">by</span> <span
  m="219010">x,</span> <span m="219310">and</span> <span m="219430">see</span>
  <span m="219670">what</span> <span m="219850">happens.</span> <span
  m="221390">Do</span> <span m="221470">you</span> <span m="221620">see</span>
  <span m="221920">what's</span> <span m="222250">going</span> <span
  m="222390">to</span> <span m="222490">happen</span> <span
  m="222790">here?</span> <span m="223640">This</span> <span
  m="223780">is</span> <span m="224050">A</span> <span m="224560">times</span>
  <span m="225150">Ax,</span> <span m="228400">which</span> <span
  m="228670">is</span> <span m="228880">A</span> <span m="229330">times--</span>
  <span m="230960">Ax</span> <span m="231970">is</span> <span
  m="232120">lambda</span> <span m="232570">x--</span> <span
  m="234370">and</span> <span m="235660">now</span> <span m="235960">what</span>
  <span m="236530">do</span> <span m="236650">I</span> <span
  m="236740">do</span> <span m="236920">now?</span> <span
  m="238150">Because</span> <span m="238390">I'm</span> <span
  m="238810">shooting</span> <span m="239230">for</span> <span
  m="239350">the</span> <span m="239500">answer</span> <span
  m="239800">yes.</span></p><p><span m="241150">X</span> <span
  m="241480">is</span> <span m="241660">an</span> <span
  m="241810">eigenvector</span> <span m="242530">of</span> <span
  m="242620">A</span> <span m="242800">squared</span> <span
  m="243310">also.</span> <span m="244300">So</span> <span
  m="244600">what</span> <span m="244780">do</span> <span m="244900">I</span>
  <span m="245020">do?</span> <span m="245250">That</span> <span
  m="245440">number--</span> <span m="245950">that</span> <span
  m="246190">lambda</span> <span m="246700">is</span> <span
  m="246820">just</span> <span m="247150">a</span> <span
  m="247210">number.</span> <span m="249010">I</span> <span
  m="249130">can</span> <span m="249640">put</span> <span m="249910">it</span>
  <span m="250090">anywhere</span> <span m="250480">I</span> <span
  m="250600">like.</span> <span m="250930">So</span> <span m="251080">I</span>
  <span m="251170">can</span> <span m="251350">put</span> <span
  m="251590">it</span> <span m="251770">out</span> <span
  m="252010">front.</span> <span m="253210">And</span> <span
  m="253330">then</span> <span m="253540">I</span> <span m="253630">have</span>
  <span m="253870">Ax,</span> <span m="254740">which</span> <span
  m="255040">is?</span></p><p><span m="256170">AUDIENCE:</span> <span
  m="256420">Lambda</span> <span m="256670">x.</span></p><p><span
  m="257395">GILBERT STRANG:</span> <span m="257507">Lambda</span> <span
  m="257620">x.</span> <span m="258000">Thanks.</span> <span
  m="258399">So</span> <span m="258610">I</span> <span m="258640">have</span>
  <span m="258760">another</span> <span m="259149">lambda</span> <span
  m="259510">x.</span> <span m="259800">So there's</span> <span
  m="260070">lambda</span> <span m="260470">squared</span> <span
  m="260950">x.</span> <span m="261200">So</span> <span m="261430">I</span>
  <span m="261579">learned</span> <span m="262510">the</span> <span
  m="262720">crucial</span> <span m="263380">thing</span> <span
  m="263800">here--</span> <span m="264870">that</span> <span
  m="265120">x</span> <span m="265420">is</span> <span m="265600">also</span>
  <span m="265990">an</span> <span m="266110">eigenvector</span> <span
  m="266800">of</span> <span m="266920">A</span> <span
  m="267100">squared,</span> <span m="268270">and</span> <span
  m="268450">the</span> <span m="268600">eigenvalue</span> <span
  m="269380">is</span> <span m="271240">lambda</span> <span
  m="271630">squared.</span> <span m="273700">And</span> <span
  m="273970">of</span> <span m="274060">course,</span> <span m="274940">I</span>
  <span m="274960">can</span> <span m="275140">keep</span> <span
  m="275380">going.</span> <span m="276710">So</span> <span m="277000">A</span>
  <span m="277270">to</span> <span m="277330">the</span> <span
  m="277510">nth--</span> <span m="279025">x</span> <span m="279460">is</span>
  <span m="279760">lambda</span> <span m="280360">to</span> <span
  m="280510">the</span> <span m="280690">nth</span> <span m="281110">x.</span>
  <span m="282580">We</span> <span m="282790">have</span> <span
  m="282880">found</span> <span m="283390">the</span> <span
  m="283870">right</span> <span m="284230">vectors</span> <span
  m="284860">for</span> <span m="285100">that</span> <span
  m="285340">particular</span> <span m="285910">matrix</span> <span
  m="286460">A.</span> <span m="286660">What</span> <span
  m="286840">about</span> <span m="287110">A</span> <span
  m="287320">inverse</span> <span m="287600">x?</span></p><p><span
  m="289970">That</span> <span m="290320">will</span> <span
  m="290530">be--</span> <span m="291250">if</span> <span
  m="291460">everything</span> <span m="292180">is</span> <span
  m="292450">good--</span> <span m="293230">1</span> <span
  m="293470">over</span> <span m="293710">lambda</span> <span
  m="294190">x.</span> <span m="297040">Well,</span> <span
  m="298100">yeah.</span> <span m="298750">So</span> <span
  m="299360">anytime</span> <span m="300040">I</span> <span
  m="300190">write</span> <span m="300460">1</span> <span m="300700">over</span>
  <span m="300910">lambda,</span> <span m="301420">my</span> <span
  m="302530">mind</span> <span m="303040">says,</span> <span
  m="304100">you</span> <span m="304730">gotta</span> <span
  m="306670">make</span> <span m="306940">some</span> <span
  m="307210">comment</span> <span m="307810">on</span> <span
  m="308770">the</span> <span m="308920">special</span> <span
  m="309400">case</span> <span m="309760">where</span> <span
  m="310000">it</span> <span m="310090">doesn't</span> <span
  m="310450">work,</span> <span m="310870">which</span> <span
  m="311140">is?</span></p><p><span m="311680">AUDIENCE:</span> <span
  m="311871">Lambda</span> <span m="312062">is not</span> <span
  m="312444">equal</span> <span m="312826">to 0.</span></p><p><span
  m="313405">GILBERT STRANG:</span> <span m="313502">Yeah.</span> <span
  m="313820">If</span> <span m="314240">lambda</span> <span m="314630">is</span>
  <span m="314720">not</span> <span m="314990">0,</span> <span
  m="316070">I'm</span> <span m="316220">golden.</span> <span
  m="317720">If</span> <span m="317900">lambda</span> <span m="318380">is</span>
  <span m="318680">0,</span> <span m="320340">it</span> <span
  m="320490">doesn't</span> <span m="320730">look</span> <span
  m="320910">good.</span> <span m="322590">And</span> <span
  m="323490">what's</span> <span m="323760">happening</span> <span
  m="324180">if</span> <span m="324360">lambda</span> <span m="324810">is</span>
  <span m="324960">0?</span></p><p><span m="326332">AUDIENCE:</span> <span
  m="326541">A</span> <span m="326750">inverse</span> <span
  m="327110">[INAUDIBLE].</span></p><p><span m="327470">GILBERT STRANG:</span>
  <span m="327530">A</span> <span m="327590">doesn't</span> <span
  m="327650">even</span> <span m="327710">have</span> <span m="327950">an</span>
  <span m="328100">inverse.</span> <span m="328970">If</span> <span
  m="329150">lambda</span> <span m="329660">was</span> <span
  m="329870">0--</span> <span m="332010">which</span> <span m="332330">it</span>
  <span m="332450">could</span> <span m="332660">be--</span> <span
  m="333620">no</span> <span m="335270">rule</span> <span
  m="335630">against</span> <span m="336080">it.</span> <span
  m="336710">If</span> <span m="336890">lambda</span> <span
  m="337310">was</span> <span m="337490">0,</span> <span m="338030">this</span>
  <span m="338300">would</span> <span m="338510">say,</span> <span
  m="338880">A</span> <span m="339170">times</span> <span m="339560">the</span>
  <span m="339710">eigenvector</span> <span m="340520">is</span> <span
  m="340610">0</span> <span m="341240">times</span> <span m="341600">the</span>
  <span m="341690">eigenvector.</span> <span m="342860">So</span> <span
  m="343060">that</span> <span m="343160">would</span> <span
  m="343340">tell</span> <span m="343580">me</span> <span m="343730">that</span>
  <span m="343910">the</span> <span m="344060">eigenvector</span> <span
  m="344900">is</span> <span m="345080">in</span> <span m="345765">the</span>
  <span m="346130">null</span> <span m="346490">space.</span> <span
  m="347750">It</span> <span m="347840">would</span> <span
  m="347990">tell</span> <span m="348230">me</span> <span m="348530">the</span>
  <span m="348830">matrix</span> <span m="349370">A</span> <span
  m="349640">isn't</span> <span m="349920">invertible.</span> <span
  m="351040">It's</span> <span m="351230">taking</span> <span
  m="351650">some</span> <span m="351920">vector</span> <span
  m="352370">x</span> <span m="352700">to</span> <span m="352880">0.</span>
  <span m="355220">And</span> <span m="356000">so</span> <span
  m="356480">everything</span> <span m="357350">clicks.</span> <span
  m="358550">This</span> <span m="358790">works</span> <span
  m="359270">when</span> <span m="359480">it</span> <span
  m="359600">should</span> <span m="359840">work.</span></p><p><span
  m="361760">And</span> <span m="362770">if</span> <span m="362980">we</span>
  <span m="363130">have</span> <span m="363340">other</span> <span
  m="363610">fun--</span> <span m="363910">any</span> <span
  m="364210">function</span> <span m="364750">of</span> <span
  m="365260">the</span> <span m="365350">matrix,</span> <span
  m="365950">we</span> <span m="366100">could</span> <span
  m="366310">define</span> <span m="366910">the</span> <span
  m="367060">exponential</span> <span m="367840">of</span> <span
  m="367960">a</span> <span m="368020">matrix.</span> <span
  m="368590">18.03</span> <span m="369430">would</span> <span
  m="369610">do</span> <span m="369850">that.</span> <span
  m="370570">Let's</span> <span m="370810">just</span> <span
  m="371950">write</span> <span m="372280">it</span> <span
  m="372370">down,</span> <span m="372700">as</span> <span m="372880">if</span>
  <span m="373060">we</span> <span m="373310">know</span> <span
  m="373510">what</span> <span m="373660">it</span> <span
  m="373750">means.</span> <span m="375340">Does</span> <span
  m="375430">it</span> <span m="375850">have</span> <span m="376150">the</span>
  <span m="376270">same</span> <span m="376630">eigenvector?</span> <span
  m="377740">Well,</span> <span m="378010">sure.</span> <span
  m="378820">Because</span> <span m="379150">e to</span> <span
  m="379420">the</span> <span m="379570">At--</span> <span m="380330">the</span>
  <span m="380830">exponential</span> <span m="381550">of</span> <span
  m="381670">a</span> <span m="381730">matrix--</span> <span
  m="382900">if</span> <span m="383170">I</span> <span m="383320">see</span>
  <span m="383620">e to</span> <span m="383950">the</span> <span
  m="384130">something--</span> <span m="385120">I</span> <span
  m="385270">think</span> <span m="385570">of</span> <span
  m="385690">that</span> <span m="385900">long,</span> <span
  m="386440">infinite</span> <span m="386890">series</span> <span
  m="387610">that</span> <span m="387820">gives</span> <span
  m="388180">the</span> <span m="388360">exponential.</span> <span
  m="389980">Those--</span> <span m="390340">all</span> <span
  m="390640">the</span> <span m="390790">terms</span> <span m="391270">in</span>
  <span m="391390">that</span> <span m="391690">series</span> <span
  m="392530">have</span> <span m="392890">powers</span> <span
  m="393490">of</span> <span m="393640">A.</span> <span m="394720">So</span>
  <span m="395110">everything</span> <span m="395410">is</span> <span
  m="395650">working.</span> <span m="396250">Every</span> <span
  m="396850">term</span> <span m="397240">in</span> <span m="397330">that</span>
  <span m="397540">series--</span> <span m="398430">x</span> <span
  m="398700">is</span> <span m="398860">an</span> <span
  m="399010">eigenvector.</span></p><p><span m="399830">And</span> <span
  m="399850">when</span> <span m="400060">I</span> <span m="400150">put</span>
  <span m="400360">it</span> <span m="400510">all</span> <span
  m="400660">together,</span> <span m="401720">I</span> <span
  m="401830">learn</span> <span m="402130">that</span> <span
  m="402310">the</span> <span m="402610">eigenvalue</span> <span
  m="403660">is</span> <span m="404560">e to</span> <span m="405010">the</span>
  <span m="405130">lambda</span> <span m="405580">t.</span> <span
  m="407740">That's</span> <span m="408130">just</span> <span
  m="408460">a</span> <span m="408880">typical</span> <span
  m="409570">and</span> <span m="411610">successful</span> <span
  m="413110">work</span> <span m="413740">use.</span> <span
  m="414670">OK.</span> <span m="415660">So</span> <span
  m="415840">that's</span> <span m="416980">eigenvectors</span> <span
  m="417700">and</span> <span m="417850">eigenvalues,</span> <span
  m="418720">and</span> <span m="420910">we'll</span> <span
  m="421240">find</span> <span m="421960">some</span> <span m="422320">in</span>
  <span m="422440">a</span> <span m="422500">minute.</span> <span
  m="425800">Now,</span> <span m="426460">so</span> <span m="426700">I'm</span>
  <span m="426850">claiming</span> <span m="427330">that</span> <span
  m="427510">this--</span> <span m="431720">that</span> <span
  m="432730">from</span> <span m="432940">this</span> <span
  m="433120">first</span> <span m="433450">thing--</span> <span
  m="433840">which</span> <span m="434110">was</span> <span
  m="434470">just</span> <span m="435010">about</span> <span
  m="435670">certain</span> <span m="436120">vectors</span> <span
  m="436660">are</span> <span m="436780">special--</span> <span
  m="437950">now</span> <span m="438250">we're</span> <span
  m="438400">beginning</span> <span m="438790">to</span> <span
  m="438910">see</span> <span m="439300">why</span> <span
  m="439750">they're</span> <span m="440470">useful.</span> <span
  m="441490">So</span> <span m="441700">special</span> <span
  m="442210">is</span> <span m="442380">good.</span> <span
  m="442720">Useful</span> <span m="443200">is</span> <span
  m="443950">even</span> <span m="444250">better.</span></p><p><span
  m="445060">So</span> <span m="445750">let</span> <span m="445900">me</span>
  <span m="446050">take</span> <span m="447580">any</span> <span
  m="447850">vector,</span> <span m="451880">say</span> <span
  m="452040">v.</span> <span m="453970">And</span> <span m="456240">OK,</span>
  <span m="457810">what</span> <span m="458040">do</span> <span
  m="458170">I</span> <span m="458290">want</span> <span m="458470">to</span>
  <span m="458590">do?</span> <span m="459910">I</span> <span
  m="460000">want</span> <span m="460170">to</span> <span m="460240">use</span>
  <span m="460540">eigenvectors.</span> <span m="462190">This</span> <span
  m="462430">v</span> <span m="462790">is</span> <span
  m="463450">probably</span> <span m="463750">not</span> <span
  m="464050">an</span> <span m="464210">eigenvector.</span> <span
  m="465280">But</span> <span m="465490">I'm</span> <span
  m="465700">supposing</span> <span m="466360">that</span> <span
  m="466540">I've</span> <span m="466720">got</span> <span m="467020">n</span>
  <span m="467260">of</span> <span m="467320">them.</span> <span
  m="469330">You</span> <span m="469810">and</span> <span m="469930">I</span>
  <span m="470110">are</span> <span m="470230">agreed</span> <span
  m="470800">that</span> <span m="471010">there</span> <span
  m="471190">are</span> <span m="471400">some</span> <span
  m="471730">matrices</span> <span m="472630">for</span> <span
  m="472870">which</span> <span m="473500">there</span> <span
  m="473650">are</span> <span m="473740">not</span> <span m="474760">a</span>
  <span m="474820">full</span> <span m="475090">set</span> <span
  m="475360">of</span> <span m="475470">eigenvectors.</span> <span
  m="477290">That's</span> <span m="477650">really</span> <span
  m="478390">the</span> <span m="479870">main</span> <span
  m="480560">sort</span> <span m="480800">of</span> <span
  m="481400">annoying</span> <span m="482000">point</span> <span
  m="482480">in</span> <span m="482630">the</span> <span m="482750">whole</span>
  <span m="483620">subject</span> <span m="484160">of</span> <span
  m="484260">linear</span> <span m="484640">algebra,</span> <span
  m="485440">is</span> <span m="485630">some</span> <span
  m="485900">matrices</span> <span m="487340">don't</span> <span
  m="487640">have</span> <span m="487820">enough</span> <span
  m="488140">eigenvectors.</span> <span m="488870">But</span> <span
  m="491310">almost</span> <span m="491790">all</span> <span
  m="492000">do,</span> <span m="492390">and</span> <span
  m="492570">let's</span> <span m="492930">go</span> <span
  m="493590">forward</span> <span m="494280">assuming</span> <span
  m="495210">our</span> <span m="495450">matrix</span> <span
  m="495990">has.</span></p><p><span m="496730">OK.</span> <span
  m="497820">So</span> <span m="498060">if</span> <span m="498240">I've</span>
  <span m="498420">got</span> <span m="498690">n</span> <span
  m="499980">independent</span> <span m="500690">eigenvectors,</span> <span
  m="501330">that's</span> <span m="501570">a</span> <span
  m="501630">basis.</span> <span m="502200">I</span> <span m="502320">can</span>
  <span m="502530">write</span> <span m="502860">any</span> <span
  m="503100">vector</span> <span m="503460">v</span> <span m="504330">as</span>
  <span m="504540">a</span> <span m="504600">combination</span> <span
  m="506250">of</span> <span m="507600">those</span> <span
  m="508020">eigenvectors.</span> <span m="510620">Right.</span> <span
  m="513250">And</span> <span m="513400">then</span> <span m="513640">I</span>
  <span m="513760">can</span> <span m="514840">find</span> <span
  m="515169">out</span> <span m="515350">what</span> <span m="516130">A</span>
  <span m="516549">to</span> <span m="517510">any</span> <span
  m="517720">power.</span> <span m="520090">So</span> <span
  m="520299">that's</span> <span m="520570">the</span> <span
  m="520659">point.</span> <span m="522820">This</span> <span
  m="523690">is</span> <span m="523780">going</span> <span m="523890">to</span>
  <span m="524020">be</span> <span m="524982">the</span> <span
  m="525330">simple</span> <span m="525900">and</span> <span
  m="527780">reason</span> <span m="528280">why</span> <span
  m="529290">we</span> <span m="529460">like</span> <span m="529810">to</span>
  <span m="529960">have--</span> <span m="530520">we</span> <span
  m="530740">like</span> <span m="530980">to</span> <span m="531100">know</span>
  <span m="531310">the</span> <span m="531490">eigenvectors.</span> <span
  m="532840">Because</span> <span m="533080">if</span> <span m="533230">I</span>
  <span m="533380">choose</span> <span m="533830">those</span> <span
  m="534460">as</span> <span m="534670">my</span> <span m="534880">basis</span>
  <span m="535420">vectors,</span> <span m="536470">v</span> <span
  m="536770">is</span> <span m="536950">a</span> <span
  m="537040">combination</span> <span m="537850">of</span> <span
  m="538000">them.</span> <span m="538750">Now</span> <span m="538990">if</span>
  <span m="539110">I</span> <span m="539230">multiply</span> <span
  m="539890">by</span> <span m="540310">A,</span> <span m="540820">or</span>
  <span m="541030">A</span> <span m="541180">squared,</span> <span
  m="541870">or</span> <span m="541990">A</span> <span m="542180">to</span>
  <span m="542320">the</span> <span m="542470">k</span> <span
  m="542770">power,</span> <span m="544030">then</span> <span
  m="544480">it's</span> <span m="544690">linear.</span></p><p><span
  m="545890">So</span> <span m="546070">I</span> <span m="546160">can</span>
  <span m="546340">multiply</span> <span m="546730">each</span> <span
  m="547000">one</span> <span m="547480">by</span> <span m="547750">A</span>
  <span m="547990">to the</span> <span m="548170">k.</span> <span
  m="548950">And</span> <span m="549070">what</span> <span m="549240">do</span>
  <span m="549370">I</span> <span m="549490">get</span> <span
  m="549730">if</span> <span m="549880">I</span> <span
  m="550000">multiply</span> <span m="550630">that</span> <span
  m="550930">guy</span> <span m="551800">by</span> <span m="552580">A</span>
  <span m="552910">to</span> <span m="553060">the</span> <span
  m="553210">kth</span> <span m="553540">power?</span> <span
  m="555300">OK.</span> <span m="556240">Well,</span> <span
  m="556750">I'm</span> <span m="556930">just</span> <span
  m="557200">going</span> <span m="557350">to</span> <span
  m="557410">use--</span> <span m="557760">or,</span> <span
  m="558370">here</span> <span m="558580">I</span> <span m="558670">said</span>
  <span m="558970">n,</span> <span m="559270">but</span> <span
  m="559420">let</span> <span m="559570">me</span> <span m="559720">say</span>
  <span m="559990">k.</span> <span m="561122">Because</span> <span
  m="561510">n--</span> <span m="562510">I'm</span> <span
  m="562930">sorry.</span> <span m="563260">I'm</span> <span
  m="563440">using</span> <span m="563830">n</span> <span m="564100">for</span>
  <span m="564280">the</span> <span m="564420">size</span> <span
  m="564880">of</span> <span m="564970">the</span> <span
  m="565090">matrix.</span> <span m="566210">So</span> <span m="566260">I</span>
  <span m="566350">better</span> <span m="566590">use</span> <span
  m="566890">k</span> <span m="567310">for</span> <span m="568690">the</span>
  <span m="569230">typical</span> <span m="570280">case</span> <span
  m="570820">here.</span> <span m="571870">So</span> <span
  m="572680">what</span> <span m="572920">do</span> <span m="573040">I</span>
  <span m="573130">get?</span> <span m="574460">Just</span> <span
  m="574820">help</span> <span m="575020">me</span> <span
  m="575170">through</span> <span m="575440">this</span> <span
  m="575770">and</span> <span m="576280">we're</span> <span
  m="577270">happy.</span></p><p><span m="579140">So</span> <span
  m="579280">what</span> <span m="579550">happens</span> <span
  m="580000">when</span> <span m="580180">I</span> <span
  m="580270">multiply</span> <span m="580810">that</span> <span
  m="581080">by</span> <span m="581320">A</span> <span m="581560">to</span>
  <span m="581620">the</span> <span m="581740">k?</span> <span
  m="584330">It's</span> <span m="584570">an</span> <span
  m="584690">eigenvector,</span> <span m="585380">remember,</span> <span
  m="586760">so</span> <span m="587480">when</span> <span m="587630">I</span>
  <span m="587720">multiply</span> <span m="588080">by</span> <span
  m="588290">A</span> <span m="588470">to</span> <span m="588530">the</span>
  <span m="588650">k,</span> <span m="589010">I</span> <span
  m="589130">get?</span></p><p><span m="589670">AUDIENCE:</span> <span
  m="589842">C1.</span></p><p><span m="590360">GILBERT STRANG:</span> <span
  m="590510">C1.</span> <span m="591610">That's</span> <span
  m="591770">just</span> <span m="592010">a</span> <span
  m="592100">number.</span> <span m="593350">And</span> <span
  m="593810">A</span> <span m="594110">to</span> <span m="594170">the</span>
  <span m="594290">k</span> <span m="594620">times</span> <span
  m="595040">that</span> <span m="595280">eigenvector</span> <span
  m="596120">gives?</span></p><p><span m="596840">AUDIENCE:</span> <span
  m="597042">Lambda</span> <span m="597245">1.</span></p><p><span
  m="597650">GILBERT STRANG:</span> <span m="597792">Lambda</span> <span
  m="598220">1</span> <span m="598550">to</span> <span m="598670">the</span>
  <span m="598820">k</span> <span m="599360">times</span> <span
  m="599670">the</span> <span m="599860">eigenvector.</span> <span
  m="603970">Right?</span> <span m="605730">That's</span> <span
  m="606060">the</span> <span m="606180">whole</span> <span
  m="606390">point.</span> <span m="607170">And</span> <span
  m="608130">linearity</span> <span m="608880">says</span> <span
  m="609600">keep</span> <span m="609870">going.</span> <span
  m="611340">Cn,</span> <span m="612810">lambda</span> <span m="613380">n</span>
  <span m="613685">to</span> <span m="613990">the</span> <span
  m="614130">kth</span> <span m="614610">power,</span> <span
  m="615560">Xn.</span> <span m="618270">In</span> <span m="618390">other</span>
  <span m="618570">words,</span> <span m="619000">I</span> <span
  m="619500">can</span> <span m="619740">take--</span> <span m="622080">I</span>
  <span m="622200">can</span> <span m="622680">apply</span> <span
  m="623130">any</span> <span m="623370">power</span> <span m="623880">of</span>
  <span m="624030">a</span> <span m="624090">matrix.</span> <span
  m="624820">I</span> <span m="624920">can</span> <span m="625050">apply</span>
  <span m="625440">the</span> <span m="625620">exponential</span> <span
  m="626400">of</span> <span m="626490">a</span> <span m="626580">matrix.</span>
  <span m="627250">I</span> <span m="627350">can</span> <span
  m="627450">do</span> <span m="627660">anything</span> <span
  m="629320">quickly,</span> <span m="631610">because</span> <span
  m="633200">I've</span> <span m="633380">got</span> <span m="634280">the</span>
  <span m="634460">eigenvector.</span> <span m="635210">So</span> <span
  m="635420">really,</span> <span m="636440">I'm</span> <span
  m="636620">saying</span> <span m="636950">the</span> <span
  m="637040">first</span> <span m="638210">use</span> <span
  m="638630">for</span> <span m="638900">eigenvectors--</span> <span
  m="639860">maybe</span> <span m="640190">the</span> <span
  m="640340">principle</span> <span m="640970">use</span> <span
  m="641270">for</span> <span m="641480">which</span> <span
  m="641750">they</span> <span m="641900">were</span> <span
  m="642080">invented--</span> <span m="642680">is</span> <span
  m="643730">to</span> <span m="643880">be</span> <span m="644090">able</span>
  <span m="644420">to</span> <span m="644600">solve</span> <span
  m="645440">difference</span> <span m="645980">equations.</span></p><p><span
  m="647660">So</span> <span m="650030">if</span> <span m="650210">I</span>
  <span m="650330">call</span> <span m="650600">that</span> <span
  m="650840">Vk--</span> <span m="651560">the</span> <span m="651950">kth</span>
  <span m="652670">power--</span> <span m="653000">then</span> <span
  m="653320">the</span> <span m="654140">equation</span> <span
  m="654680">I'm</span> <span m="654860">solving</span> <span
  m="655400">here</span> <span m="655790">is</span> <span m="658660">a</span>
  <span m="658770">one</span> <span m="659130">step</span> <span
  m="659790">difference</span> <span m="660270">equation.</span> <span
  m="661530">This</span> <span m="661790">is</span> <span m="661950">my</span>
  <span m="662280">difference</span> <span m="662790">equation.</span> <span
  m="663790">And</span> <span m="663870">if</span> <span m="664020">I</span>
  <span m="664170">wanted</span> <span m="664500">to</span> <span
  m="664620">use</span> <span m="664920">exponentials,</span> <span
  m="666140">the</span> <span m="666270">equation</span> <span
  m="666840">I</span> <span m="666960">would</span> <span m="667140">be</span>
  <span m="667290">solving</span> <span m="667800">would</span> <span
  m="667980">be</span> <span m="668310">dv, dt</span> <span
  m="671340">equal</span> <span m="671820">Av.</span> <span
  m="677050">Solution</span> <span m="677720">to</span> <span
  m="680080">discrete</span> <span m="682030">steps,</span> <span
  m="683140">or</span> <span m="684310">continuous</span> <span
  m="685000">time</span> <span m="687130">evolution</span> <span
  m="688840">comes</span> <span m="689820">is</span> <span
  m="690040">trivial,</span> <span m="690670">if</span> <span
  m="690880">I</span> <span m="691030">know</span> <span m="691300">the</span>
  <span m="691480">eigenvectors.</span> <span m="692290">Because</span> <span
  m="693220">here is</span> <span m="693640">the</span> <span
  m="693760">solution</span> <span m="694360">to</span> <span
  m="694480">this</span> <span m="694750">one.</span> <span
  m="695560">And</span> <span m="695830">the</span> <span
  m="695950">solution</span> <span m="696520">to</span> <span
  m="696640">this</span> <span m="696910">one</span> <span m="697120">is</span>
  <span m="697330">the</span> <span m="697420">same</span> <span
  m="697780">thing,</span> <span m="698140">C1,</span> <span m="700080">e
  to</span> <span m="700570">the</span> <span m="700720">lambda,</span> <span
  m="701290">1,</span> <span m="701950">t,</span> <span
  m="702760">x1.</span></p><p><span m="703480">Is</span> <span
  m="703600">that</span> <span m="703780">what you</span> <span
  m="704150">were</span> <span m="704260">expecting</span> <span
  m="705400">for</span> <span m="707050">the</span> <span
  m="707230">solution</span> <span m="707890">here?</span> <span
  m="709180">Because</span> <span m="709450">if</span> <span m="709570">I</span>
  <span m="709690">takes</span> <span m="710050">the</span> <span
  m="710110">derivative,</span> <span m="710830">it</span> <span
  m="710980">brings</span> <span m="711340">down</span> <span
  m="711610">a</span> <span m="711670">lambda.</span> <span m="712810">If</span>
  <span m="712990">I</span> <span m="713110">multiply</span> <span
  m="713650">by</span> <span m="713890">A,</span> <span m="714640">it</span>
  <span m="714760">brings</span> <span m="715090">down</span> <span
  m="715360">a</span> <span m="715420">lambda--</span> <span
  m="716680">so,</span> <span m="716950">plus</span> <span m="717550">the</span>
  <span m="718360">other</span> <span m="718600">guys.</span> <span
  m="723670">OK.</span> <span m="729600">Not</span> <span
  m="729880">news,</span> <span m="731390">but</span> <span
  m="732290">important</span> <span m="732770">to</span> <span
  m="732950">remember</span> <span m="733520">what</span> <span
  m="734210">eigenvectors</span> <span m="735110">are</span> <span
  m="735530">for</span> <span m="735890">in</span> <span m="736010">the</span>
  <span m="736100">first</span> <span m="736430">place.</span> <span
  m="737450">Good.</span> <span m="741960">Yeah.</span> <span
  m="742620">Let</span> <span m="742800">me</span> <span m="742920">move</span>
  <span m="743430">ahead.</span> <span m="744220">Oh--</span> <span
  m="746430">one</span> <span m="747690">matrix</span> <span
  m="749640">fact</span> <span m="753460">is</span> <span
  m="753640">about</span> <span m="753910">something</span> <span
  m="754270">called</span> <span m="754510">similar</span> <span
  m="755080">matrices.</span> <span m="755800">So</span> <span
  m="755980">I</span> <span m="756040">have</span> <span m="756250">on</span>
  <span m="756330">my</span> <span m="756520">matrix</span> <span
  m="757090">A.</span> <span m="758170">Then</span> <span m="758380">I</span>
  <span m="758500">have</span> <span m="758680">the</span> <span
  m="758830">idea</span> <span m="759220">of</span> <span m="759340">what</span>
  <span m="759490">it</span> <span m="759580">means</span> <span
  m="759970">to</span> <span m="760120">be</span> <span
  m="760360">similar</span> <span m="761020">to</span> <span
  m="761290">A,</span> <span m="761980">so</span> <span m="762250">B</span>
  <span m="764440">is</span> <span m="764680">similar</span> <span
  m="765340">to</span> <span m="765550">A.</span> <span m="775120">What</span>
  <span m="775300">does</span> <span m="775420">that</span> <span
  m="775600">mean?</span></p><p><span m="776740">So</span> <span
  m="777190">here's</span> <span m="778090">what</span> <span
  m="778270">it</span> <span m="778330">means,</span> <span
  m="778870">first</span> <span m="779230">of</span> <span
  m="779320">all.</span> <span m="779410">It</span> <span
  m="779470">means</span> <span m="779890">that</span> <span m="780040">B</span>
  <span m="781360">can</span> <span m="781600">be</span> <span
  m="781750">found</span> <span m="782170">from</span> <span
  m="782470">A,</span> <span m="783580">by--</span> <span m="784450">this</span>
  <span m="784780">is</span> <span m="784990">the</span> <span
  m="785200">key</span> <span m="785680">operation</span> <span
  m="786490">here--</span> <span m="787310">multiplying</span> <span
  m="787930">by</span> <span m="788230">a</span> <span m="788290">matrix</span>
  <span m="788980">M,</span> <span m="789580">and</span> <span
  m="789820">its</span> <span m="790000">inverse--</span> <span
  m="790930">M</span> <span m="791170">inverse</span> <span
  m="791680">AM.</span> <span m="792940">When</span> <span m="793090">I</span>
  <span m="793240">see</span> <span m="794590">two</span> <span
  m="794800">matrices,</span> <span m="795610">B and</span> <span
  m="796120">A,</span> <span m="798550">that</span> <span m="798730">are</span>
  <span m="798850">connected</span> <span m="799480">by</span> <span
  m="800260">that</span> <span m="801490">kind</span> <span m="801730">of</span>
  <span m="801970">a</span> <span m="802300">change,</span> <span
  m="804620">M</span> <span m="804890">could</span> <span m="805130">be</span>
  <span m="805370">any</span> <span m="806210">invertible</span> <span
  m="806750">matrix.</span> <span m="808160">Then</span> <span
  m="808400">I</span> <span m="808550">would</span> <span m="808730">say</span>
  <span m="809060">B</span> <span m="809330">was</span> <span
  m="809510">similar</span> <span m="809990">to A.</span> <span
  m="811740">And</span> <span m="813240">that</span> <span
  m="813630">changed--</span> <span m="814410">that</span> <span
  m="815820">appearance</span> <span m="816330">of</span> <span
  m="816480">AM</span> <span m="816750">is</span> <span m="817530">pretty</span>
  <span m="818250">natural.</span> <span m="818920">If</span> <span
  m="819090">I</span> <span m="819240">change</span> <span
  m="819720">variables</span> <span m="820440">here</span> <span
  m="820710">by</span> <span m="821010">M,</span> <span m="821790">then</span>
  <span m="822180">I</span> <span m="822330">get--</span> <span
  m="823770">that</span> <span m="824160">similar</span> <span
  m="824670">matrix</span> <span m="825240">will</span> <span
  m="825420">show</span> <span m="825750">up.</span></p><p><span
  m="827850">So</span> <span m="828030">what's</span> <span
  m="828360">the</span> <span m="828450">key</span> <span
  m="828690">factor?</span> <span m="829110">Do you</span> <span
  m="829170">remember</span> <span m="830680">the</span> <span
  m="830790">key</span> <span m="831060">fact</span> <span
  m="831450">about</span> <span m="831750">similar</span> <span
  m="832230">matrices?</span> <span m="833760">If</span> <span
  m="834910">B</span> <span m="835250">and</span> <span m="835440">A</span>
  <span m="835680">are</span> <span m="835950">connected</span> <span
  m="836700">like</span> <span m="836970">that--</span></p><p><span
  m="837390">AUDIENCE:</span> <span m="837533">They</span> <span
  m="837676">have</span> <span m="837820">the same
  eigenvalues.</span></p><p><span m="838680">GILBERT STRANG:</span> <span
  m="838800">They</span> <span m="838920">have</span> <span
  m="839190">the</span> <span m="839370">same</span> <span
  m="839940">eigenvalues.</span> <span m="841380">So</span> <span
  m="841500">this</span> <span m="841680">is</span> <span m="842040">just</span>
  <span m="842340">a</span> <span m="842430">useful</span> <span
  m="842850">point</span> <span m="843180">to</span> <span
  m="843300">remember.</span> <span m="844170">So</span> <span
  m="844440">I'll--</span> <span m="846900">this</span> <span
  m="847050">is</span> <span m="847170">like</span> <span m="847410">one</span>
  <span m="848550">fact</span> <span m="849000">in</span> <span
  m="850980">the</span> <span m="852600">discussion</span> <span
  m="853320">of</span> <span m="853620">eigenvalues</span> <span
  m="853995">and</span> <span m="854370">eigenvectors.</span> <span
  m="855780">So</span> <span m="856650">similar</span> <span
  m="859800">matrices,</span> <span m="864820">same</span> <span
  m="867730">eigenvalues.</span> <span m="877140">Yeah.</span> <span
  m="878100">So</span> <span m="878370">in</span> <span m="878820">some</span>
  <span m="879060">way</span> <span m="879360">in</span> <span
  m="879480">the</span> <span m="879680">eigenvalue,</span> <span
  m="880470">eigenvector</span> <span m="881250">world,</span> <span
  m="882810">they're in this--</span> <span m="883800">they</span> <span
  m="884220">belong</span> <span m="884640">together.</span> <span
  m="889390">They're</span> <span m="889630">connected</span> <span
  m="890260">by</span> <span m="891010">this</span> <span
  m="892540">relation</span> <span m="893170">that</span> <span
  m="893710">just</span> <span m="894040">turns</span> <span
  m="894430">out</span> <span m="894580">to</span> <span m="894670">be</span>
  <span m="894820">the</span> <span m="894910">right</span> <span
  m="895180">thing.</span> <span m="898120">Actually,</span> <span
  m="898690">that</span> <span m="899320">is--</span> <span m="901240">it</span>
  <span m="901710">gives</span> <span m="901960">us</span> <span
  m="902140">a</span> <span m="902200">clue</span> <span m="902580">of</span>
  <span m="902680">how</span> <span m="902980">eigenvalues</span> <span
  m="903820">are</span> <span m="903940">actually</span> <span
  m="904360">computed.</span></p><p><span m="905950">Well,</span> <span
  m="906400">they're</span> <span m="906550">actually</span> <span
  m="906940">computed</span> <span m="907450">by</span> <span
  m="907630">typing</span> <span m="908110">eig</span> <span
  m="908980">of</span> <span m="909130">A,</span> <span m="910510">with</span>
  <span m="910780">parentheses</span> <span m="911620">around</span> <span
  m="912040">A.</span> <span m="912610">That's</span> <span
  m="912970">how</span> <span m="913150">they're--</span> <span
  m="914080">in</span> <span m="914950">real</span> <span
  m="915190">life.</span> <span m="917890">But</span> <span
  m="918100">what</span> <span m="918310">happens</span> <span
  m="918880">when</span> <span m="919120">you</span> <span
  m="919210">type</span> <span m="919570">eig</span> <span m="919750">of</span>
  <span m="919990">A?</span> <span m="922000">Well,</span> <span
  m="922210">you</span> <span m="922360">could</span> <span
  m="922510">say</span> <span m="922720">the</span> <span
  m="922840">eigenvalue</span> <span m="923470">shows</span> <span
  m="923830">up</span> <span m="924010">on</span> <span m="924130">the</span>
  <span m="924220">screen.</span> <span m="926080">But</span> <span
  m="926470">something</span> <span m="926950">had</span> <span
  m="927130">to</span> <span m="927220">happen</span> <span m="927610">in</span>
  <span m="927730">there.</span> <span m="928660">And</span> <span
  m="929290">what</span> <span m="929530">happened</span> <span
  m="930340">was</span> <span m="931600">that</span> <span
  m="932740">MATLAB--</span> <span m="933250">or</span> <span
  m="933340">whoever--</span> <span m="934810">took</span> <span
  m="935230">that</span> <span m="935470">matrix</span> <span
  m="936040">A,</span> <span m="937600">started</span> <span
  m="938350">using</span> <span m="939670">good</span> <span
  m="940000">choices</span> <span m="940540">of</span> <span
  m="940720">m--</span> <span m="943860">better</span> <span
  m="944220">and</span> <span m="944340">better.</span> <span
  m="947170">Took</span> <span m="947760">a</span> <span m="947820">bunch</span>
  <span m="948120">of</span> <span m="948180">steps</span> <span
  m="949650">with</span> <span m="949830">different</span> <span
  m="950190">m's.</span> <span m="950550">Because</span> <span
  m="950940">if</span> <span m="951090">I</span> <span m="951210">do</span>
  <span m="951390">another</span> <span m="951900">m,</span> <span
  m="952230">I</span> <span m="952410">still</span> <span m="952680">have</span>
  <span m="952860">a</span> <span m="952920">similar</span> <span
  m="953370">matrix,</span> <span m="954000">right?</span></p><p><span
  m="954360">If</span> <span m="955260">I</span> <span m="955410">take</span>
  <span m="956130">B</span> <span m="956580">and</span> <span
  m="956760">do</span> <span m="956970">a</span> <span
  m="957060">different</span> <span m="957660">m2</span> <span
  m="958480">to</span> <span m="958950">B--</span> <span m="960300">so</span>
  <span m="960510">I</span> <span m="960600">get</span> <span
  m="960750">something</span> <span m="961140">similar</span> <span
  m="961590">to</span> <span m="961710">B,</span> <span m="962040">then</span>
  <span m="962220">that's</span> <span m="962490">also</span> <span
  m="962850">similar</span> <span m="963300">to</span> <span
  m="963440">A.</span> <span m="964010">I've</span> <span m="964090">got</span>
  <span m="964230">a</span> <span m="964290">whole</span> <span
  m="964470">family</span> <span m="964980">of</span> <span
  m="965100">similar</span> <span m="965610">things</span> <span
  m="966030">there.</span> <span m="967020">And</span> <span
  m="967230">what</span> <span m="967590">does</span> <span
  m="968760">MATLAB</span> <span m="969270">do</span> <span
  m="970290">with</span> <span m="970500">all</span> <span
  m="970680">these</span> <span m="971010">m's,</span> <span
  m="971520">m1</span> <span m="972030">and</span> <span m="972190">m2</span>
  <span m="972740">and</span> <span m="972870">m3</span> <span
  m="973410">and</span> <span m="973530">so</span> <span m="973800">on?</span>
  <span m="974580">It</span> <span m="975900">brings</span> <span
  m="976410">the</span> <span m="976680">matrix</span> <span
  m="978650">to</span> <span m="979270">a</span> <span
  m="979920">triangular</span> <span m="980730">matrix.</span> <span
  m="982140">It</span> <span m="982620">gets</span> <span m="982880">the</span>
  <span m="983040">eigenvalues</span> <span m="983730">showing</span> <span
  m="984120">up</span> <span m="984330">on</span> <span m="984480">the</span>
  <span m="984570">diagonal.</span> <span m="987620">It's</span> <span
  m="987860">just</span> <span m="989020">tremendously--</span> <span
  m="989990">it</span> <span m="990090">was</span> <span m="990220">an</span>
  <span m="990320">inspiration</span> <span m="991580">when</span> <span
  m="991820">that--</span> <span m="993110">when</span> <span
  m="993740">the</span> <span m="993860">good</span> <span
  m="994160">choice</span> <span m="994580">of</span> <span m="994760">m</span>
  <span m="995090">appeared.</span></p><p><span m="995990">And</span> <span
  m="996500">let</span> <span m="996680">me</span> <span m="996800">just</span>
  <span m="997040">say--</span> <span m="998060">because</span> <span
  m="998450">I'm</span> <span m="998600">going</span> <span m="998900">on</span>
  <span m="999070">to</span> <span m="999230">symmetric</span> <span
  m="999860">matrices--</span> <span m="1001120">that</span> <span
  m="1001600">for</span> <span m="1001780">a</span> <span
  m="1001860">symmetric</span> <span m="1002470">matrices,</span> <span
  m="1003100">everything</span> <span m="1003640">is</span> <span
  m="1004150">sort</span> <span m="1004310">of</span> <span
  m="1004600">clean.</span> <span m="1007360">You</span> <span
  m="1007510">not</span> <span m="1008110">only</span> <span
  m="1008350">go</span> <span m="1008650">to</span> <span m="1008980">a</span>
  <span m="1010330">triangular</span> <span m="1011230">matrix,</span> <span
  m="1011770">you</span> <span m="1011920">go</span> <span
  m="1012450">toward</span> <span m="1012760">a</span> <span
  m="1012820">diagonal</span> <span m="1013540">matrix.</span> <span
  m="1014380">They</span> <span m="1014870">off--</span> <span
  m="1015490">you</span> <span m="1016090">choose</span> <span
  m="1016510">m's</span> <span m="1016960">that</span> <span
  m="1017110">make</span> <span m="1017380">the</span> <span
  m="1017560">off</span> <span m="1017830">diagonal</span> <span
  m="1018430">stuff</span> <span m="1018760">smaller</span> <span
  m="1019240">and</span> <span m="1019360">smaller</span> <span
  m="1019750">and</span> <span m="1019840">smaller.</span> <span
  m="1020710">And</span> <span m="1021160">the</span> <span
  m="1021280">eigenvalues</span> <span m="1022030">are</span> <span
  m="1022120">not</span> <span m="1022330">changing.</span> <span
  m="1023230">So</span> <span m="1023470">there,</span> <span
  m="1023740">shooting</span> <span m="1024190">up</span> <span
  m="1024339">on</span> <span m="1024460">the</span> <span
  m="1024550">diagonal,</span> <span m="1025630">are</span> <span
  m="1025869">the</span> <span m="1026020">eigenvalues.</span> <span
  m="1028800">So</span> <span m="1028980">I</span> <span
  m="1029400">guess</span> <span m="1029730">I</span> <span
  m="1029849">should</span> <span m="1031890">verify</span> <span
  m="1032520">that</span> <span m="1032849">fact,</span> <span
  m="1033329">that</span> <span m="1033569">similar</span> <span
  m="1034079">matrices</span> <span m="1034800">have</span> <span
  m="1035010">the</span> <span m="1035160">same</span> <span
  m="1035550">eigenvalues.</span></p><p><span m="1036329">Can</span> <span
  m="1036540">we--</span> <span m="1037770">there</span> <span
  m="1037920">can't</span> <span m="1038190">be</span> <span
  m="1038369">much</span> <span m="1038700">to</span> <span
  m="1038849">show.</span> <span m="1039300">There</span> <span
  m="1039510">can't</span> <span m="1039720">be</span> <span
  m="1039839">much</span> <span m="1040109">in</span> <span
  m="1040230">the</span> <span m="1040319">proof</span> <span
  m="1041310">because</span> <span m="1042270">that's</span> <span
  m="1042630">all</span> <span m="1042839">I</span> <span
  m="1042930">know.</span> <span m="1044710">And</span> <span
  m="1044849">I</span> <span m="1044940">want</span> <span m="1045119">to</span>
  <span m="1045240">know</span> <span m="1045440">its</span> <span
  m="1045630">eigenvalues</span> <span m="1046500">and</span> <span
  m="1046650">eigenvectors.</span> <span m="1047400">So</span> <span
  m="1047640">let</span> <span m="1047790">me</span> <span
  m="1047970">say,</span> <span m="1048450">suppose</span> <span
  m="1048990">m</span> <span m="1049260">inverse</span> <span
  m="1049860">Am</span> <span m="1051630">has</span> <span
  m="1051960">the</span> <span m="1052110">eigenvector</span> <span
  m="1052920">y</span> <span m="1053790">and</span> <span m="1053910">the</span>
  <span m="1054060">eigenvalue</span> <span m="1054720">of</span> <span
  m="1054780">lambda.</span> <span m="1061360">And</span> <span
  m="1061640">I</span> <span m="1061780">want</span> <span m="1061990">to</span>
  <span m="1062140">show--</span> <span m="1064610">do</span> <span
  m="1064760">I</span> <span m="1064880">want</span> <span m="1065030">to</span>
  <span m="1065120">show</span> <span m="1065360">that</span> <span
  m="1065510">y</span> <span m="1066020">is</span> <span m="1066200">an</span>
  <span m="1066340">eigenvector</span> <span m="1067130">also,</span> <span
  m="1067580">of</span> <span m="1067730">A</span> <span
  m="1067940">itself?</span> <span m="1068810">No.</span> <span
  m="1070010">Eigenvectors</span> <span m="1070850">are</span> <span
  m="1070970">changing.</span></p><p><span m="1072140">Do</span> <span
  m="1072290">I</span> <span m="1072440">want</span> <span m="1072620">to</span>
  <span m="1072740">show</span> <span m="1073010">that</span> <span
  m="1073160">lambda</span> <span m="1073730">is</span> <span
  m="1073970">an</span> <span m="1074120">eigenvalue</span> <span
  m="1075110">of</span> <span m="1075310">A</span> <span
  m="1075500">itself?</span> <span m="1076610">Yes.</span> <span
  m="1077150">That's</span> <span m="1077450">my</span> <span
  m="1077630">point.</span> <span m="1078560">So</span> <span
  m="1078800">can</span> <span m="1078980">we</span> <span
  m="1079130">see</span> <span m="1079430">that?</span> <span
  m="1080656">Ha.</span> <span m="1081650">Can</span> <span m="1081890">I</span>
  <span m="1082010">see</span> <span m="1082310">that</span> <span
  m="1082490">lambda</span> <span m="1082940">is</span> <span
  m="1083150">an</span> <span m="1083300">eigenvector?</span> <span
  m="1085250">There's</span> <span m="1085490">not</span> <span
  m="1085760">a</span> <span m="1085820">lot</span> <span m="1086090">to</span>
  <span m="1086210">do</span> <span m="1086510">here.</span> <span
  m="1087440">I</span> <span m="1087500">mean,</span> <span
  m="1087740">if</span> <span m="1087860">I</span> <span
  m="1087920">can't</span> <span m="1088190">do</span> <span
  m="1088400">it</span> <span m="1088700">soon,</span> <span
  m="1089150">I'm</span> <span m="1089330">never</span> <span
  m="1089570">going</span> <span m="1089680">to</span> <span
  m="1089810">do</span> <span m="1090020">it,</span> <span
  m="1090200">because--</span> <span m="1092300">so</span> <span
  m="1092480">what</span> <span m="1092660">am</span> <span m="1092750">I</span>
  <span m="1092870">going</span> <span m="1093010">to</span> <span
  m="1093140">do?</span></p><p><span m="1093845">AUDIENCE:</span> <span
  m="1093960">Define</span> <span m="1094075">the</span> <span
  m="1094190">vector</span> <span m="1094490">x equals my--</span></p><p><span
  m="1095930">GILBERT STRANG:</span> <span m="1096125">Yeah,</span> <span
  m="1096320">I</span> <span m="1096440">could.</span> <span
  m="1097530">Yeah.</span> <span m="1099320">X</span> <span
  m="1099830">is--</span> <span m="1100190">m-y</span> <span
  m="1100760">is</span> <span m="1100910">going</span> <span
  m="1101020">to</span> <span m="1101120">be</span> <span m="1101270">a</span>
  <span m="1101330">key,</span> <span m="1101720">and</span> <span
  m="1101840">I</span> <span m="1101960">can</span> <span m="1102140">see</span>
  <span m="1102500">m-y</span> <span m="1103040">coming.</span> <span
  m="1104120">Just--</span> <span m="1104990">when</span> <span
  m="1105170">I</span> <span m="1105260">see</span> <span m="1105500">m</span>
  <span m="1105660">inverse</span> <span m="1106100">over</span> <span
  m="1106310">there,</span> <span m="1106550">what</span> <span
  m="1106730">am</span> <span m="1106820">I</span> <span
  m="1106910">going</span> <span m="1107120">to</span> <span
  m="1107180">do</span> <span m="1107390">with</span> <span
  m="1107540">the</span> <span m="1107660">darn</span> <span
  m="1107960">thing?</span></p><p><span m="1108546">AUDIENCE:</span> <span
  m="1108714">[INAUDIBLE]</span></p><p><span m="1109220">GILBERT STRANG:</span>
  <span m="1109300">I'm</span> <span m="1109380">going</span> <span
  m="1109470">to</span> <span m="1110150">put</span> <span m="1110390">it</span>
  <span m="1110540">on</span> <span m="1110660">the</span> <span
  m="1110810">other</span> <span m="1111050">side.</span> <span
  m="1111500">I'm</span> <span m="1111560">going</span> <span
  m="1111740">to</span> <span m="1111810">multiply</span> <span
  m="1112340">that</span> <span m="1112490">equation</span> <span
  m="1112910">by</span> <span m="1113180">m.</span> <span m="1114020">So</span>
  <span m="1114470">I'll</span> <span m="1114650">have--</span> <span
  m="1115880">that</span> <span m="1116030">will</span> <span
  m="1116150">put</span> <span m="1116330">the</span> <span m="1116540">m</span>
  <span m="1116870">over</span> <span m="1117140">here.</span> <span
  m="1117560">And</span> <span m="1117710">I'll</span> <span
  m="1117830">have</span> <span m="1118100">A-M-y</span> <span
  m="1121340">equals</span> <span m="1122030">lambda</span> <span
  m="1123050">My,</span> <span m="1124330">right?</span> <span
  m="1128680">And</span> <span m="1128830">is</span> <span
  m="1128980">that</span> <span m="1129130">telling</span> <span
  m="1129460">me</span> <span m="1129610">what</span> <span m="1129820">I</span>
  <span m="1129880">want</span> <span m="1130080">to</span> <span
  m="1130150">know?</span> <span m="1130520">Yes.</span> <span
  m="1131790">That's</span> <span m="1132130">saying</span> <span
  m="1132670">that</span> <span m="1132910">My--</span> <span
  m="1134560">that</span> <span m="1134740">you</span> <span
  m="1135070">wisely</span> <span m="1135640">suggested</span> <span
  m="1136200">to</span> <span m="1136270">give</span> <span m="1136540">a</span>
  <span m="1136810">name</span> <span m="1137230">x</span> <span
  m="1137575">to--</span> <span m="1138340">is</span> <span
  m="1138550">lambda</span> <span m="1139120">times</span> <span
  m="1139540">My.</span> <span m="1141025">Do</span> <span
  m="1141440">you</span> <span m="1141550">see</span> <span
  m="1141790">that?</span> <span m="1142285">That</span> <span
  m="1142780">the</span> <span m="1143850">eigenvalue</span> <span
  m="1144700">lambda</span> <span m="1145150">didn't</span> <span
  m="1145420">change.</span> <span m="1146650">The</span> <span
  m="1146800">eigenvector</span> <span m="1148270">did</span> <span
  m="1148630">change.</span> <span m="1148970">It</span> <span
  m="1149310">changed</span> <span m="1149770">from</span> <span
  m="1150040">y</span> <span m="1150610">to</span> <span
  m="1150910">My.</span></p><p><span m="1151480">That's</span> <span
  m="1151840">the</span> <span m="1152060">x.</span> <span
  m="1153350">The</span> <span m="1153710">eigenvector</span> <span
  m="1154390">of</span> <span m="1154540">x.</span> <span
  m="1154930">This</span> <span m="1155170">is</span> <span
  m="1155380">lambda</span> <span m="1156940">x.</span> <span
  m="1158530">Yeah.</span> <span m="1159910">So</span> <span
  m="1160150">that's</span> <span m="1160420">the</span> <span
  m="1160540">role</span> <span m="1160870">of</span> <span m="1161020">M.
  It</span> <span m="1161410">just</span> <span m="1162520">gives</span> <span
  m="1162790">you</span> <span m="1163000">a</span> <span
  m="1163090">different</span> <span m="1163570">basis</span> <span
  m="1164110">for</span> <span m="1164410">eigenvectors.</span> <span
  m="1165610">But</span> <span m="1165820">it</span> <span
  m="1165940">does</span> <span m="1166240">not</span> <span
  m="1166510">change</span> <span m="1166960">eigenvalues.</span> <span
  m="1168010">Right.</span> <span m="1168880">Yeah.</span> <span
  m="1170250">OK.</span> <span m="1171540">So</span> <span
  m="1171720">those</span> <span m="1171990">are</span> <span
  m="1172110">similar</span> <span m="1172590">matrices.</span> <span
  m="1175380">Yeah,</span> <span m="1175590">some</span> <span
  m="1175800">other</span> <span m="1176010">good</span> <span
  m="1176280">things</span> <span m="1176700">happen.</span> <span
  m="1177180">A</span> <span m="1177240">lot</span> <span m="1177420">of</span>
  <span m="1177510">people</span> <span m="1177780">don't</span> <span
  m="1178500">know--</span> <span m="1178770">in</span> <span
  m="1178890">fact,</span> <span m="1179190">I</span> <span
  m="1179370">wasn't</span> <span m="1180630">very</span> <span
  m="1180960">conscious</span> <span m="1181530">of</span> <span
  m="1181650">the</span> <span m="1181770">fact</span> <span
  m="1182610">that</span> <span m="1182850">A</span> <span
  m="1183060">times</span> <span m="1183570">B</span> <span
  m="1184080">has</span> <span m="1184290">the</span> <span
  m="1184440">same</span> <span m="1184800">eigenvalues</span> <span
  m="1185550">as</span> <span m="1185730">B</span> <span
  m="1186000">times</span> <span m="1186480">A.</span> <span
  m="1187420">Well,</span> <span m="1188500">I</span> <span
  m="1188850">should</span> <span m="1189030">maybe</span> <span
  m="1189840">write</span> <span m="1190050">that</span> <span
  m="1190200">down.</span> <span m="1191130">AB</span> <span
  m="1191460">has</span> <span m="1193530">the</span> <span
  m="1193650">same</span> <span m="1195870">eigenvalues--</span> <span
  m="1198190">the</span> <span m="1198300">same</span> <span
  m="1198810">non-zero</span> <span m="1199730">ones--</span> <span
  m="1200300">you'll see.</span> <span m="1201720">I</span> <span
  m="1201840">have</span> <span m="1202050">to--</span> <span
  m="1203290">as</span> <span m="1204990">BA.</span></p><p><span
  m="1207240">This</span> <span m="1207480">is</span> <span
  m="1207660">any</span> <span m="1208665">A</span> <span m="1209160">and</span>
  <span m="1209370">B</span> <span m="1209670">same</span> <span
  m="1210030">size.</span> <span m="1210690">I'm</span> <span
  m="1210840">not</span> <span m="1211050">talking</span> <span
  m="1211500">similar</span> <span m="1211980">matrices</span> <span
  m="1212700">here.</span> <span m="1213390">I'm</span> <span
  m="1213480">talking</span> <span m="1213840">any</span> <span
  m="1214080">two</span> <span m="1214410">A and</span> <span
  m="1214710">B.</span> <span m="1217880">Yeah.</span> <span
  m="1219270">So</span> <span m="1219480">that's</span> <span
  m="1219750">a</span> <span m="1220750">good</span> <span
  m="1221010">thing</span> <span m="1221310">that</span> <span
  m="1221490">happens.</span> <span m="1223140">Now</span> <span
  m="1225840">could</span> <span m="1226050">we</span> <span
  m="1228380">see</span> <span m="1228590">y?</span> <span
  m="1229880">And</span> <span m="1230000">then</span> <span
  m="1230240">I'm</span> <span m="1231080">going</span> <span
  m="1231190">to</span> <span m="1231320">be</span> <span
  m="1231470">really</span> <span m="1232100">pretty</span> <span
  m="1232400">happy</span> <span m="1232730">with</span> <span
  m="1234040">basic</span> <span m="1234760">fact</span> <span
  m="1235240">about</span> <span m="1235660">eigenvalues.</span> <span
  m="1237870">So</span> <span m="1239390">if</span> <span m="1239510">I</span>
  <span m="1239630">want</span> <span m="1239780">to</span> <span
  m="1239870">show</span> <span m="1240140">that</span> <span
  m="1240290">two</span> <span m="1240560">things</span> <span
  m="1240920">have</span> <span m="1241070">the</span> <span
  m="1241190">same</span> <span m="1241550">eigenvalues,</span> <span
  m="1242420">what</span> <span m="1243560">do</span> <span
  m="1243620">you</span> <span m="1243740">propose?</span> <span
  m="1245760">Show</span> <span m="1246060">that</span> <span
  m="1246270">they</span> <span m="1246510">are</span> <span
  m="1247900">similar.</span> <span m="1249660">I</span> <span
  m="1249940">already</span> <span m="1250250">said,</span> <span
  m="1250600">if</span> <span m="1250750">they</span> <span
  m="1250860">are</span> <span m="1250960">similar.</span></p><p><span
  m="1251440">So</span> <span m="1251680">is</span> <span
  m="1251800">there</span> <span m="1251950">an</span> <span
  m="1252100">m?</span> <span m="1253540">Is</span> <span
  m="1253780">there</span> <span m="1253930">an</span> <span
  m="1254050">m</span> <span m="1254410">that</span> <span
  m="1254590">will</span> <span m="1254800">connect</span> <span
  m="1255970">this</span> <span m="1256420">matrix?</span> <span
  m="1258370">So</span> <span m="1258580">is</span> <span
  m="1258700">there</span> <span m="1258820">an</span> <span
  m="1258940">m</span> <span m="1260080">that</span> <span
  m="1260230">will</span> <span m="1260410">multiply</span> <span
  m="1261070">this</span> <span m="1261430">matrix</span> <span
  m="1264310">that</span> <span m="1264490">way?</span> <span
  m="1265820">So</span> <span m="1265900">that</span> <span
  m="1266050">would</span> <span m="1266140">be</span> <span
  m="1266290">similar</span> <span m="1266730">to</span> <span
  m="1266800">AB.</span> <span m="1267880">And</span> <span
  m="1268060">can</span> <span m="1268300">I</span> <span
  m="1268630">produce</span> <span m="1269140">BA</span> <span
  m="1269680">then?</span> <span m="1276770">So</span> <span
  m="1277100">I'll</span> <span m="1277340">just</span> <span
  m="1277580">put</span> <span m="1277790">the</span> <span
  m="1277880">word</span> <span m="1278150">want</span> <span
  m="1278680">up</span> <span m="1278880">here.</span> <span m="1282960">I
  want--</span> <span m="1285285">if</span> <span m="1285750">I</span> <span
  m="1285840">have</span> <span m="1286080">that,</span> <span
  m="1287580">then</span> <span m="1287850">I'm</span> <span
  m="1288000">done,</span> <span m="1288690">because</span> <span
  m="1289020">that's</span> <span m="1289230">saying</span> <span
  m="1289710">that</span> <span m="1289860">those</span> <span
  m="1290160">two</span> <span m="1290340">matrices,</span> <span
  m="1291120">AB</span> <span m="1291330">and</span> <span
  m="1291630">BA,</span> <span m="1292140">are</span> <span
  m="1292230">similar.</span> <span m="1293160">And</span> <span
  m="1293520">I</span> <span m="1293640">know</span> <span
  m="1293970">that</span> <span m="1294150">then</span> <span
  m="1294390">they</span> <span m="1294570">have</span> <span
  m="1294810">the</span> <span m="1295260">same</span> <span
  m="1295680">eigenvalues.</span> <span m="1296930">So</span> <span
  m="1298170">what</span> <span m="1298680">should</span> <span m="1298890">m
  be?</span> <span m="1301425">M</span> <span m="1301910">should</span> <span
  m="1302180">be--</span> <span m="1306840">so</span> <span
  m="1306960">what</span> <span m="1307200">is</span> <span m="1307410">M</span>
  <span m="1307740">here?</span> <span m="1309640">I</span> <span
  m="1309730">want</span> <span m="1309970">that</span> <span
  m="1310150">to</span> <span m="1310270">be</span> <span
  m="1310450">true.</span> <span m="1314700">Should</span> <span
  m="1314800">M</span> <span m="1315010">be</span> <span m="1315180">B?</span>
  <span m="1317890">Yeah.</span> <span m="1318660">M</span> <span
  m="1318980">equal</span> <span m="1319280">B.</span> <span
  m="1319700">Boy.</span> <span m="1321020">Not</span> <span
  m="1321260">the</span> <span m="1321380">most</span> <span
  m="1324030">hidden</span> <span m="1324540">fact</span> <span
  m="1325020">here.</span> <span m="1325710">Take</span> <span
  m="1326630">M</span> <span m="1326880">equal</span> <span
  m="1327030">B.</span></p><p><span m="1331110">So</span> <span
  m="1331350">then</span> <span m="1331560">I have</span> <span
  m="1331740">B</span> <span m="1332100">times</span> <span
  m="1332520">A,</span> <span m="1332850">times</span> <span
  m="1333240">BB</span> <span m="1333900">inverse--</span> <span
  m="1334950">which</span> <span m="1335160">is</span> <span
  m="1335310">the</span> <span m="1335430">identity.</span> <span
  m="1336130">So</span> <span m="1336210">I</span> <span m="1336300">have</span>
  <span m="1336450">B</span> <span m="1336660">times</span> <span
  m="1337010">A.</span> <span m="1337310">Yes.</span> <span
  m="1338130">OK.</span> <span m="1339690">So</span> <span m="1340860">AB</span>
  <span m="1341430">and</span> <span m="1341550">BA</span> <span
  m="1342300">are</span> <span m="1342780">fine.</span> <span
  m="1343440">Now,</span> <span m="1345580">what</span> <span
  m="1346000">do</span> <span m="1346060">you</span> <span
  m="1346150">think</span> <span m="1346330">about</span> <span
  m="1346540">this</span> <span m="1346780">question?</span> <span
  m="1348240">Are</span> <span m="1348580">the</span> <span
  m="1348800">eigenvalues--</span> <span m="1349720">I</span> <span
  m="1349840">now</span> <span m="1350110">know</span> <span
  m="1350350">that</span> <span m="1350560">AB</span> <span m="1351040">and
  BA</span> <span m="1351610">have</span> <span m="1351760">the</span> <span
  m="1351850">same</span> <span m="1352210">eigenvalues.</span> <span
  m="1353230">And</span> <span m="1353350">the</span> <span
  m="1353440">reason</span> <span m="1354490">I</span> <span
  m="1354850">had</span> <span m="1355060">to</span> <span m="1355330">be</span>
  <span m="1357100">careful</span> <span m="1358090">about</span> <span
  m="1359130">non-zero</span> <span m="1360160">is</span> <span
  m="1360550">that</span> <span m="1360730">if</span> <span m="1360910">I</span>
  <span m="1361030">had</span> <span m="1361210">zero</span> <span
  m="1361720">eigenvalues,</span> <span m="1363170">then--</span></p><p><span
  m="1365065">AUDIENCE:</span> <span m="1365312">[INAUDIBLE]</span></p><p><span
  m="1366055">GILBERT STRANG:</span> <span m="1366302">Yeah.</span> <span
  m="1366550">I</span> <span m="1367390">can't</span> <span
  m="1367690">count</span> <span m="1368020">on</span> <span
  m="1368170">those</span> <span m="1368440">inverses.</span> <span
  m="1369370">Right.</span> <span m="1370380">Right.</span> <span
  m="1371570">So</span> <span m="1372200">that's</span> <span
  m="1372350">why</span> <span m="1373490">I</span> <span m="1373820">put</span>
  <span m="1374050">it</span> <span m="1374090">in</span> <span
  m="1374210">that</span> <span m="1374390">little</span> <span
  m="1374870">qualifier.</span> <span m="1376100">But</span> <span
  m="1376250">now</span> <span m="1376460">I</span> <span
  m="1376580">want</span> <span m="1376760">to</span> <span
  m="1376820">ask</span> <span m="1377090">this</span> <span
  m="1377300">question.</span> <span m="1379190">If</span> <span
  m="1379370">I</span> <span m="1379520">know</span> <span
  m="1379790">the</span> <span m="1379970">eigenvalues</span> <span
  m="1380750">of</span> <span m="1380960">A--</span> <span
  m="1382070">separately,</span> <span m="1382730">by</span> <span
  m="1382970">itself, A--</span> <span m="1383390">and</span> <span
  m="1384680">of</span> <span m="1385160">B--</span> <span
  m="1385570">now</span> <span m="1385750">I'm</span> <span
  m="1385940">talking</span> <span m="1386280">about</span> <span
  m="1386450">any</span> <span m="1386660">two</span> <span
  m="1386870">matrices,</span> <span m="1387215">A</span> <span
  m="1387560">and</span> <span m="1387860">B.</span> <span m="1389850">If</span>
  <span m="1390890">I</span> <span m="1391010">have</span> <span
  m="1391130">two</span> <span m="1391340">matrices,</span> <span
  m="1392000">A--</span> <span m="1392855">I</span> <span
  m="1393290">have</span> <span m="1393410">a</span> <span
  m="1393470">matrix</span> <span m="1393950">A and</span> <span
  m="1394280">a</span> <span m="1394340">matrix</span> <span
  m="1394790">B.</span> <span m="1395580">And</span> <span m="1395720">I</span>
  <span m="1395810">know</span> <span m="1396080">their</span> <span
  m="1396560">eigenvalues</span> <span m="1397220">and</span> <span
  m="1397340">their</span> <span m="1397640">eigenvalues.</span> <span
  m="1399170">What</span> <span m="1399500">about</span> <span
  m="1399830">AB?</span> <span m="1401790">A</span> <span
  m="1401940">times</span> <span m="1402330">B.</span> <span
  m="1403140">Can</span> <span m="1403350">I</span> <span
  m="1403440">multiply</span> <span m="1404040">the</span> <span
  m="1404190">eigenvalues</span> <span m="1404820">of</span> <span
  m="1404970">A</span> <span m="1405150">times</span> <span
  m="1405510">the</span> <span m="1405600">eigenvalues</span> <span
  m="1406290">of</span> <span m="1406410">B?</span> <span
  m="1407640">Don't</span> <span m="1407970">do</span> <span
  m="1408240">it.</span> <span m="1408540">Right.</span> <span
  m="1409080">Yes.</span> <span m="1409890">Right.</span></p><p><span
  m="1410230">The</span> <span m="1410550">eigenvalues</span> <span
  m="1411270">of</span> <span m="1411390">A</span> <span
  m="1411630">times</span> <span m="1411990">the</span> <span
  m="1412080">eigenvalues</span> <span m="1412890">of</span> <span
  m="1413040">B</span> <span m="1413340">could</span> <span
  m="1413580">be</span> <span m="1414240">damn</span> <span
  m="1414480">near</span> <span m="1414720">anything.</span> <span
  m="1415620">Right.</span> <span m="1416680">They're</span> <span
  m="1416880">not</span> <span m="1417900">connected</span> <span
  m="1418450">to</span> <span m="1418560">the</span> <span
  m="1418710">eigenvalues</span> <span m="1419430">of</span> <span
  m="1419580">AB</span> <span m="1420000">specially.</span> <span
  m="1420890">And</span> <span m="1421170">maybe</span> <span
  m="1422910">something</span> <span m="1423420">could</span> <span
  m="1423600">be</span> <span m="1423750">discovered,</span> <span
  m="1424260">but</span> <span m="1424410">not</span> <span
  m="1424620">much.</span> <span m="1425800">And</span> <span
  m="1425850">similarly,</span> <span m="1426330">for</span> <span
  m="1426540">A</span> <span m="1426780">plus</span> <span m="1427230">B.</span>
  <span m="1429430">So</span> <span m="1430260">yeah.</span> <span
  m="1430920">So</span> <span m="1433140">let</span> <span m="1433260">me</span>
  <span m="1433380">just</span> <span m="1433590">write</span> <span
  m="1433890">down</span> <span m="1434160">this</span> <span
  m="1434340">point.</span> <span m="1434670">Eigenvalues</span> <span
  m="1435510">of</span> <span m="1435630">A</span> <span m="1435870">plus</span>
  <span m="1436260">B</span> <span m="1437190">are</span> <span
  m="1437640">generally</span> <span m="1438270">not</span> <span
  m="1440100">eigenvalues</span> <span m="1441150">of</span> <span
  m="1441360">A</span> <span m="1443580">plus</span> <span
  m="1444450">eigenvalues</span> <span m="1445200">of</span> <span
  m="1445350">B.</span> <span m="1448830">Generally</span> <span
  m="1449250">not.</span> <span m="1449670">Just--</span> <span
  m="1450830">there</span> <span m="1451120">is</span> <span
  m="1451230">no</span> <span m="1451410">reason.</span> <span
  m="1452200">And</span> <span m="1452640">the</span> <span
  m="1452820">reason</span> <span m="1453450">that</span> <span
  m="1454380">that's--</span> <span m="1455580">I</span> <span
  m="1455700">get</span> <span m="1455880">that</span> <span
  m="1456060">no</span> <span m="1456540">answer</span> <span
  m="1457080">is,</span> <span m="1458590">that</span> <span
  m="1458760">the</span> <span m="1458910">eigenvectors</span> <span
  m="1460050">can</span> <span m="1460260">be</span> <span
  m="1460410">all</span> <span m="1460560">different.</span></p><p><span
  m="1461040">If</span> <span m="1461130">the</span> <span
  m="1461280">eigenvectors</span> <span m="1462060">for A</span> <span
  m="1462240">are</span> <span m="1463290">totally</span> <span
  m="1463770">different</span> <span m="1464100">from</span> <span
  m="1464280">the</span> <span m="1464430">eigenvectors</span> <span
  m="1465150">for</span> <span m="1465330">B,</span> <span
  m="1466300">then</span> <span m="1466560">A</span> <span
  m="1466770">plus</span> <span m="1467190">B</span> <span
  m="1467430">will</span> <span m="1467580">have</span> <span
  m="1467880">probably</span> <span m="1468300">some</span> <span
  m="1468900">other,</span> <span m="1469290">totally</span> <span
  m="1469800">different</span> <span m="1470160">eigenvectors,</span> <span
  m="1471000">and</span> <span m="1472410">there's</span> <span
  m="1472620">nothing</span> <span m="1473850">happening</span> <span
  m="1474105">there.</span> <span m="1478420">That's</span> <span
  m="1478910">sort</span> <span m="1479180">of</span> <span
  m="1480380">thoughts</span> <span m="1480770">about</span> <span
  m="1482030">eigenvalues</span> <span m="1482900">in</span> <span
  m="1483080">general.</span> <span m="1483650">And</span> <span
  m="1483770">I</span> <span m="1483920">could--</span> <span
  m="1484940">there'd</span> <span m="1485930">be</span> <span
  m="1486050">a</span> <span m="1486080">whole</span> <span
  m="1486350">section</span> <span m="1487370">on</span> <span
  m="1487880">eigenvectors,</span> <span m="1490230">but</span> <span
  m="1490440">I'm</span> <span m="1491640">really</span> <span
  m="1492120">interested</span> <span m="1492720">in</span> <span
  m="1492900">eigenvectors</span> <span m="1493830">of</span> <span
  m="1494520">symmetric</span> <span m="1495240">matrices.</span> <span
  m="1496450">So</span> <span m="1496530">I'm</span> <span
  m="1496650">going</span> <span m="1496780">to</span> <span
  m="1496920">move</span> <span m="1497310">on</span> <span
  m="1497520">to</span> <span m="1497700">that</span> <span
  m="1500540">topic.</span></p><p><span m="1502550">So</span> <span
  m="1502870">now,</span> <span m="1504530">having</span> <span
  m="1504700">talked</span> <span m="1505030">about</span> <span
  m="1505300">any</span> <span m="1505600">matrix</span> <span
  m="1506200">A,</span> <span m="1506410">I'm</span> <span
  m="1506590">going</span> <span m="1506730">to</span> <span
  m="1506830">specialize</span> <span m="1507450">to</span> <span
  m="1507850">symmetric</span> <span m="1508480">matrices,</span> <span
  m="1509710">see</span> <span m="1510010">what's</span> <span
  m="1510310">special</span> <span m="1510820">about</span> <span
  m="1511090">the</span> <span m="1511240">eigenvalues</span> <span
  m="1512020">there,</span> <span m="1512710">what's</span> <span
  m="1512890">special</span> <span m="1513340">about</span> <span
  m="1513580">eigenvectors</span> <span m="1514540">there.</span> <span
  m="1514790">And</span> <span m="1515200">I</span> <span
  m="1515320">think</span> <span m="1515560">we've</span> <span
  m="1515740">already</span> <span m="1516070">said</span> <span
  m="1516360">it</span> <span m="1516490">in</span> <span
  m="1516670">class.</span> <span m="1517720">So</span> <span
  m="1517930">let</span> <span m="1518110">me--</span> <span
  m="1518560">let</span> <span m="1518740">me</span> <span
  m="1518920">ask</span> <span m="1519250">you</span> <span
  m="1519400">to</span> <span m="1519640">tell</span> <span
  m="1519910">me</span> <span m="1520070">about</span> <span
  m="1520380">it--</span> <span m="1520480">tell</span> <span
  m="1520690">me</span> <span m="1520830">again.</span> <span
  m="1521590">So</span> <span m="1521800">I'll</span> <span
  m="1521950">call</span> <span m="1522190">that</span> <span
  m="1522400">matrix</span> <span m="1522970">S</span> <span
  m="1523360">now,</span> <span m="1525310">as</span> <span m="1525520">a</span>
  <span m="1525580">reminder</span> <span m="1526270">always</span> <span
  m="1526690">that</span> <span m="1526840">I'm</span> <span
  m="1527080">talking</span> <span m="1527500">here</span> <span
  m="1527710">about</span> <span m="1528010">symmetric</span> <span
  m="1528580">matrices.</span> <span m="1529970">So</span> <span
  m="1530140">what</span> <span m="1530410">do</span> <span
  m="1530560">I--</span> <span m="1530800">what</span> <span
  m="1531070">are</span> <span m="1531130">the</span> <span
  m="1531490">key</span> <span m="1531880">facts</span> <span
  m="1532570">to</span> <span m="1532720">know?</span></p><p><span
  m="1533710">Eigenvalues</span> <span m="1537930">are</span> <span
  m="1538170">real</span> <span m="1541780">numbers,</span> <span
  m="1543220">if</span> <span m="1543400">the</span> <span
  m="1543520">matrix</span> <span m="1544090">is.</span> <span
  m="1544360">I'm</span> <span m="1544540">thinking</span> <span
  m="1544760">of</span> <span m="1545000">real</span> <span
  m="1545440">symmetric</span> <span m="1546100">matrices.</span> <span
  m="1548840">Of</span> <span m="1548930">course,</span> <span
  m="1549320">other</span> <span m="1549620">real</span> <span
  m="1549950">matrices</span> <span m="1550760">could</span> <span
  m="1551060">have</span> <span m="1552460">imaginary</span> <span
  m="1553270">eigenvalues.</span> <span m="1555400">Other</span> <span
  m="1555640">real</span> <span m="1555910">matrices--</span> <span
  m="1556240">so</span> <span m="1556480">just--</span> <span
  m="1557620">let's</span> <span m="1557860">just</span> <span
  m="1558100">think</span> <span m="1558400">for</span> <span
  m="1558520">a</span> <span m="1558580">moment.</span> <span
  m="1560970">Yeah.</span> <span m="1561360">Maybe</span> <span
  m="1561600">I'll</span> <span m="1561690">just</span> <span
  m="1561870">put</span> <span m="1562080">it</span> <span
  m="1562140">here.</span> <span m="1562620">Can</span> <span
  m="1562830">I</span> <span m="1562920">back</span> <span
  m="1563260">up,</span> <span m="1566150">before</span> <span
  m="1566520">I</span> <span m="1567570">keep</span> <span
  m="1567840">going</span> <span m="1568200">with</span> <span
  m="1568410">symmetric</span> <span m="1569010">matrices?</span> <span
  m="1569760">So</span> <span m="1571480">you</span> <span
  m="1571590">take</span> <span m="1571950">a</span> <span
  m="1572010">matrix</span> <span m="1572490">like</span> <span
  m="1575250">that.</span> <span m="1580150">Q,</span> <span
  m="1580440">yeah.</span> <span m="1580850">That</span> <span
  m="1581030">would</span> <span m="1581180">be</span> <span
  m="1581330">a</span> <span m="1581430">Q.</span> <span m="1581840">But</span>
  <span m="1582020">it's</span> <span m="1582200">not</span> <span
  m="1582420">specially</span> <span m="1582960">a</span> <span
  m="1583130">Q.</span> <span m="1584030">Maybe</span> <span
  m="1585500">the</span> <span m="1585650">most</span> <span
  m="1586070">remarkable</span> <span m="1586850">thing</span> <span
  m="1587150">about</span> <span m="1587420">that</span> <span
  m="1587630">matrix</span> <span m="1588320">is</span> <span
  m="1588650">that</span> <span m="1588920">it's</span> <span
  m="1589850">anti-symmetric.</span> <span m="1591080">So</span> <span
  m="1591350">I'll</span> <span m="1591530">call</span> <span
  m="1591770">it</span> <span m="1591920">A.</span> <span
  m="1593120">Right.</span> <span m="1593630">If</span> <span
  m="1593810">I</span> <span m="1593960">transpose</span> <span
  m="1594740">that</span> <span m="1595070">matrix,</span> <span
  m="1596330">what</span> <span m="1596450">do</span> <span m="1596600">I</span>
  <span m="1596720">get?</span></p><p><span m="1597990">AUDIENCE:</span> <span
  m="1598141">The</span> <span m="1598292">negative.</span></p><p><span
  m="1598900">GILBERT STRANG:</span> <span m="1598970">The</span> <span
  m="1599040">negative.</span> <span m="1599940">So</span> <span
  m="1600270">that's</span> <span m="1600600">like</span> <span
  m="1600840">anti-symmetric.</span> <span m="1602400">And</span> <span
  m="1602550">I</span> <span m="1602670">claim</span> <span
  m="1603060">that</span> <span m="1603240">an</span> <span
  m="1603360">anti-symmetric</span> <span m="1604440">matrix</span> <span
  m="1605430">has</span> <span m="1605730">imaginary</span> <span
  m="1606510">eigenvalues.</span> <span m="1607830">So</span> <span
  m="1608010">that's</span> <span m="1609840">a</span> <span
  m="1609900">90</span> <span m="1610290">degree</span> <span
  m="1610650">rotation.</span> <span m="1614330">And</span> <span
  m="1614480">you</span> <span m="1614570">might</span> <span
  m="1614810">say,</span> <span m="1615730">what</span> <span
  m="1615890">could</span> <span m="1616040">be</span> <span
  m="1616190">simpler</span> <span m="1616580">than</span> <span
  m="1616760">that?</span> <span m="1617040">A</span> <span
  m="1617130">90</span> <span m="1617450">degree</span> <span
  m="1617780">rotation--</span> <span m="1618380">that's</span> <span
  m="1618650">not</span> <span m="1618860">a</span> <span
  m="1618950">weird</span> <span m="1619280">matrix.</span> <span
  m="1621050">But</span> <span m="1621290">from</span> <span
  m="1621500">the</span> <span m="1621620">point</span> <span
  m="1621920">of</span> <span m="1621980">view</span> <span
  m="1622160">of</span> <span m="1622310">eigenvectors,</span> <span
  m="1623740">something</span> <span m="1624990">a</span> <span
  m="1625240">little</span> <span m="1625730">odd</span> <span
  m="1626060">has</span> <span m="1626300">to</span> <span
  m="1626450">happen,</span> <span m="1627300">right?</span> <span
  m="1627620">Because</span> <span m="1629060">if</span> <span
  m="1629240">I</span> <span m="1629330">have</span> <span m="1629510">a</span>
  <span m="1629570">90</span> <span m="1629930">degree</span> <span
  m="1630260">rotation--</span> <span m="1631010">if</span> <span
  m="1631130">I</span> <span m="1631250">take</span> <span m="1631520">a</span>
  <span m="1631580">vector</span> <span m="1632000">x--</span> <span
  m="1632720">any</span> <span m="1633020">vector</span> <span
  m="1633440">x--</span> <span m="1634510">could</span> <span
  m="1634760">it</span> <span m="1634880">possibly</span> <span
  m="1635570">be</span> <span m="1635780">an</span> <span
  m="1635930">eigenvector?</span></p><p><span m="1638250">Well,</span> <span
  m="1638640">apply</span> <span m="1639060">A</span> <span
  m="1639300">to</span> <span m="1639600">it.</span> <span
  m="1640910">You'd</span> <span m="1641090">be</span> <span
  m="1641300">off</span> <span m="1641600">in</span> <span
  m="1641720">this</span> <span m="1641930">direction,</span> <span
  m="1642500">Ax.</span> <span m="1644510">And</span> <span
  m="1644840">there</span> <span m="1644990">is</span> <span
  m="1645140">no</span> <span m="1645440">way</span> <span
  m="1646880">that</span> <span m="1647120">Ax</span> <span
  m="1647690">can</span> <span m="1647930">be</span> <span m="1648110">a</span>
  <span m="1648170">multiple</span> <span m="1648680">of</span> <span
  m="1648800">x.</span> <span m="1650390">So</span> <span
  m="1650630">there's</span> <span m="1650840">no</span> <span
  m="1651110">real</span> <span m="1651440">eigenvector</span> <span
  m="1652190">for</span> <span m="1653150">that</span> <span
  m="1653390">anti-symmetric</span> <span m="1654350">matrix,</span> <span
  m="1654950">or</span> <span m="1655100">any</span> <span
  m="1655400">anti-symmetric</span> <span m="1656330">matrix.</span> <span
  m="1658710">So</span> <span m="1658920">you</span> <span
  m="1659070">see</span> <span m="1659550">that</span> <span
  m="1661200">when</span> <span m="1661500">we</span> <span
  m="1661740">say</span> <span m="1662190">that</span> <span
  m="1662370">the</span> <span m="1662520">eigenvalues</span> <span
  m="1663480">of</span> <span m="1663660">a</span> <span
  m="1663720">symmetric</span> <span m="1664410">matrix</span> <span
  m="1664950">are</span> <span m="1665040">real,</span> <span
  m="1665910">we're</span> <span m="1666090">saying</span> <span
  m="1666420">that</span> <span m="1666570">this</span> <span
  m="1666810">couldn't</span> <span m="1667140">happen--</span> <span
  m="1668180">that</span> <span m="1668400">this</span> <span
  m="1669180">couldn't</span> <span m="1669540">happen</span> <span
  m="1669960">if</span> <span m="1670140">A</span> <span m="1670290">were</span>
  <span m="1670440">symmetric.</span> <span m="1671160">And</span> <span
  m="1671280">here,</span> <span m="1671490">it's the</span> <span
  m="1671880">very</span> <span m="1672240">opposite,</span> <span
  m="1672840">it's</span> <span m="1673050">anti-symmetric.</span></p><p><span
  m="1676880">Well,</span> <span m="1677330">while</span> <span
  m="1677680">that's</span> <span m="1677870">on</span> <span
  m="1677990">the</span> <span m="1678080">board,</span> <span
  m="1678530">you</span> <span m="1678650">might</span> <span
  m="1678950">say,</span> <span m="1679410">wait</span> <span
  m="1679520">a</span> <span m="1679580">minute.</span> <span
  m="1679820">How</span> <span m="1679970">could</span> <span
  m="1680090">that</span> <span m="1680300">have</span> <span
  m="1680510">any</span> <span m="1680750">eigenvector</span> <span
  m="1681410">whatsoever?</span> <span m="1685950">So</span> <span
  m="1686060">what</span> <span m="1686300">is</span> <span
  m="1686510">an</span> <span m="1686660">eigenvector</span> <span
  m="1687470">of</span> <span m="1687560">that</span> <span
  m="1687800">matrix</span> <span m="1688400">A?</span> <span
  m="1689300">How</span> <span m="1689480">do</span> <span
  m="1689570">you</span> <span m="1689660">find</span> <span
  m="1689990">the</span> <span m="1690140">eigenvectors</span> <span
  m="1690920">of</span> <span m="1691070">A?</span> <span
  m="1693080">When</span> <span m="1693260">they're</span> <span
  m="1693410">2</span> <span m="1693620">by</span> <span m="1693800">2,</span>
  <span m="1694610">that's</span> <span m="1695380">a</span> <span
  m="1695450">calculation</span> <span m="1696230">we</span> <span
  m="1696650">know</span> <span m="1696890">how</span> <span
  m="1697010">to</span> <span m="1697160">do.</span> <span
  m="1699850">You</span> <span m="1700210">remember</span> <span
  m="1700540">the</span> <span m="1700690">steps</span> <span
  m="1701170">there?</span> <span m="1701950">I'm</span> <span
  m="1702070">looking</span> <span m="1702490">for</span> <span
  m="1702700">Ax</span> <span m="1703330">equal</span> <span
  m="1703630">lambda</span> <span m="1704080">x.</span> <span
  m="1706690">So</span> <span m="1706870">right</span> <span
  m="1707080">now</span> <span m="1707290">I'm</span> <span
  m="1707440">looking</span> <span m="1707800">for</span> <span
  m="1708040">both</span> <span m="1708550">lambda</span> <span
  m="1709120">and</span> <span m="1709480">x.</span></p><p><span
  m="1710020">I've</span> <span m="1710140">got</span> <span
  m="1710290">2.</span> <span m="1711050">It's</span> <span
  m="1711220">not</span> <span m="1711490">linear,</span> <span
  m="1712000">but</span> <span m="1712210">I'm</span> <span
  m="1712390">going</span> <span m="1712540">to</span> <span
  m="1714190">bring</span> <span m="1714520">this</span> <span
  m="1714790">over</span> <span m="1715030">to</span> <span
  m="1715090">this</span> <span m="1715300">side</span> <span
  m="1715900">and</span> <span m="1716050">write</span> <span
  m="1716350">it</span> <span m="1716500">as</span> <span m="1716740">A</span>
  <span m="1717010">minus</span> <span m="1717490">lambda</span> <span
  m="1717940">I,</span> <span m="1718400">x</span> <span
  m="1718780">equals</span> <span m="1719140">0.</span> <span
  m="1723300">And</span> <span m="1723450">then</span> <span
  m="1723660">I'm</span> <span m="1723780">going</span> <span
  m="1723930">to</span> <span m="1723990">look</span> <span
  m="1724260">at</span> <span m="1724350">that</span> <span
  m="1724680">and</span> <span m="1724830">say,</span> <span
  m="1725410">wow,</span> <span m="1726000">A</span> <span
  m="1726210">minus</span> <span m="1726600">lambda</span> <span
  m="1726990">I</span> <span m="1727140">must</span> <span m="1727500">be</span>
  <span m="1728400">not</span> <span m="1728670">invertible,</span> <span
  m="1728850">b</span> <span m="1729510">because</span> <span
  m="1729810">it's</span> <span m="1730140">got</span> <span
  m="1730380">this</span> <span m="1730740">x</span> <span m="1731070">in</span>
  <span m="1731220">its</span> <span m="1731400">null</span> <span
  m="1731670">space.</span> <span m="1732690">So</span> <span
  m="1732930">the</span> <span m="1733050">determinant</span> <span
  m="1734100">of</span> <span m="1734250">this</span> <span
  m="1734520">matrix</span> <span m="1735210">must</span> <span
  m="1735600">be</span> <span m="1736380">0.</span> <span m="1739490">I</span>
  <span m="1739580">couldn't</span> <span m="1739940">have</span> <span
  m="1740210">a</span> <span m="1742700">null</span> <span
  m="1743000">space</span> <span m="1743630">unless</span> <span
  m="1744060">the</span> <span m="1744260">determinant</span> <span
  m="1744980">is</span> <span m="1745100">0.</span></p><p><span
  m="1746300">And</span> <span m="1746510">then</span> <span
  m="1746780">when</span> <span m="1746990">I</span> <span
  m="1747110">look</span> <span m="1747410">at</span> <span m="1747530">A</span>
  <span m="1747740">minus</span> <span m="1748160">lambda</span> <span
  m="1748640">I,</span> <span m="1751420">for</span> <span
  m="1751570">this</span> <span m="1751900">A,</span> <span
  m="1752590">I've</span> <span m="1752800">got</span> <span
  m="1753280">minus</span> <span m="1753760">lambdas,</span> <span
  m="1756100">minus</span> <span m="1759680">A--</span> <span m="1760350">oh,
  A</span> <span m="1760660">is</span> <span m="1760850">just</span> <span
  m="1761120">the</span> <span m="1761250">1.</span> <span
  m="1761820">And</span> <span m="1762430">that's</span> <span
  m="1762710">minus</span> <span m="1763250">1.</span> <span
  m="1763700">I'm</span> <span m="1764150">going</span> <span
  m="1764390">to</span> <span m="1764480">take</span> <span
  m="1764810">the</span> <span m="1764960">determinant.</span> <span
  m="1766250">And</span> <span m="1766370">what</span> <span
  m="1766580">am</span> <span m="1766700">I</span> <span
  m="1766790">going</span> <span m="1766890">to</span> <span
  m="1767060">get</span> <span m="1767300">for</span> <span
  m="1767480">the</span> <span m="1767700">determinant?</span> <span
  m="1769100">Lambda</span> <span m="1769610">squared--</span></p><p><span
  m="1770732">AUDIENCE:</span> <span m="1770943">Plus</span> <span
  m="1771154">1.</span></p><p><span m="1772000">GILBERT STRANG:</span> <span
  m="1772225">Plus</span> <span m="1772450">1.</span> <span
  m="1776620">And</span> <span m="1776790">I</span> <span m="1776910">set</span>
  <span m="1777210">that</span> <span m="1777510">to</span> <span
  m="1777690">0.</span> <span m="1784220">So</span> <span m="1784400">I'm</span>
  <span m="1784550">just</span> <span m="1784820">following</span> <span
  m="1785300">all</span> <span m="1785450">the</span> <span
  m="1785540">rules,</span> <span m="1788020">but</span> <span
  m="1788290">it's</span> <span m="1788560">showing</span> <span
  m="1789070">me</span> <span m="1789580">that</span> <span
  m="1789850">the</span> <span m="1789970">lambda--</span> <span
  m="1791322">the</span> <span m="1791670">two</span> <span
  m="1791950">lambdas--</span> <span m="1792500">there</span> <span
  m="1792670">are</span> <span m="1792820">two</span> <span
  m="1793060">lambdas</span> <span m="1793600">here--</span> <span
  m="1795150">but</span> <span m="1795390">they're</span> <span
  m="1795540">not</span> <span m="1795810">real,</span> <span
  m="1796290">because</span> <span m="1796860">that</span> <span
  m="1797100">equation,</span> <span m="1797730">the</span> <span
  m="1797820">roots</span> <span m="1798300">are</span> <span
  m="1798590">i</span> <span m="1798880">and</span> <span
  m="1799020">minus</span> <span m="1799470">i.</span> <span
  m="1802660">So</span> <span m="1802840">those</span> <span
  m="1803170">are</span> <span m="1803320">the</span> <span
  m="1803500">eigenvalues.</span> <span m="1807060">And</span> <span
  m="1807510">they</span> <span m="1807750">have</span> <span
  m="1808050">the</span> <span m="1808200">nice--</span> <span
  m="1808710">they</span> <span m="1808860">have</span> <span
  m="1809070">all</span> <span m="1809370">the--</span> <span
  m="1810180">well,</span> <span m="1810390">they</span> <span
  m="1810540">are</span> <span m="1810690">the</span> <span
  m="1810840">eigenvalues.</span> <span m="1811530">No</span> <span
  m="1811770">doubt</span> <span m="1812070">about</span> <span
  m="1812400">it.</span> <span m="1815560">With</span> <span
  m="1815770">2</span> <span m="1815950">by</span> <span m="1816130">2</span>
  <span m="1816490">there</span> <span m="1816700">are</span> <span
  m="1816790">two</span> <span m="1817180">quick</span> <span
  m="1817540">checks</span> <span m="1818920">that</span> <span
  m="1819580">tell</span> <span m="1819880">you,</span> <span
  m="1820090">yeah,</span> <span m="1820360">you</span> <span
  m="1820510">did</span> <span m="1820750">a</span> <span
  m="1820840">calculation</span> <span m="1821590">right.</span> <span
  m="1822790">If</span> <span m="1823000">I</span> <span m="1823210">add</span>
  <span m="1823600">up</span> <span m="1823930">the</span> <span
  m="1824080">two</span> <span m="1824410">eigenvalues</span> <span
  m="1830830">in</span> <span m="1831010">this--</span> <span
  m="1831970">if</span> <span m="1832150">I</span> <span m="1832300">add</span>
  <span m="1832480">up</span> <span m="1832600">the</span> <span
  m="1832690">two</span> <span m="1832930">eigenvalues</span> <span
  m="1833590">for</span> <span m="1833740">any</span> <span
  m="1833980">matrix,</span> <span m="1834550">and</span> <span
  m="1834670">I'm</span> <span m="1834820">going</span> <span
  m="1834940">to</span> <span m="1835060">do</span> <span m="1835270">it</span>
  <span m="1836080">for</span> <span m="1836260">this</span> <span
  m="1836530">one--</span> <span m="1837310">I</span> <span
  m="1837430">get</span> <span m="1837640">what</span> <span
  m="1837890">answer?</span></p><p><span m="1838420">AUDIENCE:</span> <span
  m="1838600">The trace?</span></p><p><span m="1839500">GILBERT STRANG:</span>
  <span m="1839560">I</span> <span m="1839620">get</span> <span
  m="1839860">the</span> <span m="1840010">same</span> <span
  m="1840610">answer</span> <span m="1841240">from</span> <span
  m="1841510">the</span> <span m="1842390">adding--</span> <span
  m="1843430">add</span> <span m="1843730">the</span> <span
  m="1843850">lambdas</span> <span m="1847060">gives</span> <span
  m="1847270">me</span> <span m="1847420">the</span> <span
  m="1847540">same</span> <span m="1847960">answer</span> <span
  m="1848410">as</span> <span m="1848890">add</span> <span
  m="1850570">the</span> <span m="1850810">diagonal</span> <span
  m="1853750">of</span> <span m="1853930">the</span> <span
  m="1854050">matrix--</span> <span m="1856690">which</span> <span
  m="1856830">I'm</span> <span m="1857010">calling</span> <span
  m="1857370">A.</span> <span m="1859560">So</span> <span m="1859890">if</span>
  <span m="1860040">I</span> <span m="1860190">add</span> <span
  m="1860410">the</span> <span m="1860520">diagonal</span> <span
  m="1861090">I</span> <span m="1861210">get</span> <span m="1861390">0
  and</span> <span m="1861810">0.</span> <span m="1863130">So</span> <span
  m="1863380">it's</span> <span m="1863520">0 plus 0.</span> <span
  m="1867790">And</span> <span m="1867940">this</span> <span
  m="1868240">number</span> <span m="1868840">adding</span> <span
  m="1869350">the</span> <span m="1869500">diagonal</span> <span
  m="1870130">is</span> <span m="1870280">called</span> <span
  m="1870640">the</span> <span m="1870820">trace.</span> <span
  m="1873790">And</span> <span m="1876430">we'll</span> <span
  m="1876640">see</span> <span m="1876850">it</span> <span
  m="1876970">again</span> <span m="1877240">because</span> <span
  m="1877600">it's</span> <span m="1877720">so</span> <span
  m="1877930">simple.</span> <span m="1879130">Just</span> <span
  m="1879430">adding</span> <span m="1879850">the</span> <span
  m="1879940">diagonal</span> <span m="1880630">entries</span> <span
  m="1881740">gives</span> <span m="1882040">you</span> <span
  m="1882910">a</span> <span m="1883390">key</span> <span m="1883720">bit</span>
  <span m="1883930">of</span> <span m="1884050">information.</span></p><p><span
  m="1885370">When</span> <span m="1885550">you</span> <span
  m="1885670">add</span> <span m="1886030">down</span> <span
  m="1886360">the</span> <span m="1886450">diagonal</span> <span
  m="1887110">it</span> <span m="1887230">tells</span> <span
  m="1887620">you</span> <span m="1887770">the</span> <span
  m="1887920">sum</span> <span m="1888670">of</span> <span
  m="1888850">the</span> <span m="1889040">eigenvalue--</span> <span
  m="1889630">some</span> <span m="1889960">of</span> <span
  m="1890080">the</span> <span m="1890200">lambdas.</span> <span
  m="1892670">Doesn't</span> <span m="1893060">tell</span> <span
  m="1893300">you</span> <span m="1893600">each</span> <span
  m="1894350">lambda</span> <span m="1894770">separately,</span> <span
  m="1895970">but</span> <span m="1896270">it</span> <span
  m="1896360">tells</span> <span m="1896660">you</span> <span
  m="1896780">the</span> <span m="1896930">sum.</span> <span
  m="1897890">So</span> <span m="1898100">it</span> <span
  m="1898160">tells</span> <span m="1898430">you</span> <span
  m="1898550">one</span> <span m="1898850">fact</span> <span
  m="1899210">by</span> <span m="1899420">doing</span> <span
  m="1899780">one</span> <span m="1900080">thing.</span> <span
  m="1901380">Yeah.</span> <span m="1902210">That's</span> <span
  m="1902510">pretty</span> <span m="1903230">handy.</span> <span
  m="1905170">Gives</span> <span m="1905380">you</span> <span
  m="1905530">a</span> <span m="1905620">quick</span> <span
  m="1905920">check</span> <span m="1906700">if</span> <span
  m="1906910">you've--</span> <span m="1909010">when</span> <span
  m="1909280">you</span> <span m="1909400">compute</span> <span
  m="1909910">this</span> <span m="1910060">determinant</span> <span
  m="1910840">and</span> <span m="1910980">solve</span> <span
  m="1911470">for</span> <span m="1911710">lambda--</span> <span
  m="1914414">the</span> <span m="1914910">thing</span> <span
  m="1915160">you--</span> <span m="1919240">this</span> <span
  m="1919660">is</span> <span m="1919810">a</span> <span m="1919870">way</span>
  <span m="1920050">to</span> <span m="1920140">compute</span> <span
  m="1920560">eigenvalues</span> <span m="1921190">by</span> <span
  m="1921400">hand.</span></p><p><span m="1923440">You</span> <span
  m="1923590">could</span> <span m="1923770">make</span> <span
  m="1924010">a</span> <span m="1924070">mistake,</span> <span
  m="1924670">because</span> <span m="1924940">it's</span> <span
  m="1925120">a</span> <span m="1925210">quadratic</span> <span
  m="1925930">formula</span> <span m="1926470">for</span> <span
  m="1926680">2</span> <span m="1926890">by</span> <span m="1927100">2,</span>
  <span m="1927940">but</span> <span m="1930380">you</span> <span
  m="1930530">can</span> <span m="1930770">check</span> <span
  m="1931520">by</span> <span m="1931820">adding</span> <span
  m="1932330">the</span> <span m="1932630">two</span> <span
  m="1932930">roots.</span> <span m="1933270">Do</span> <span
  m="1933470">you</span> <span m="1933710">get</span> <span
  m="1933920">the</span> <span m="1934070">same</span> <span
  m="1934490">as</span> <span m="1935375">the</span> <span
  m="1935870">trace</span> <span m="1936650">0</span> <span
  m="1937010">plus</span> <span m="1937340">0?</span> <span
  m="1940420">Well,</span> <span m="1940630">there's</span> <span
  m="1940840">one</span> <span m="1941080">other</span> <span
  m="1941350">check,</span> <span m="1943090">equally</span> <span
  m="1943600">quick,</span> <span m="1944170">for</span> <span
  m="1944500">2</span> <span m="1944740">by</span> <span m="1944950">2,</span>
  <span m="1945370">so</span> <span m="1945970">2</span> <span
  m="1946180">by</span> <span m="1946300">2s--</span> <span
  m="1946690">you</span> <span m="1946780">really</span> <span
  m="1947380">get</span> <span m="1947560">them</span> <span
  m="1947710">right.</span> <span m="1948940">What's</span> <span
  m="1949210">the</span> <span m="1949330">other</span> <span
  m="1949630">check</span> <span m="1950170">to--</span> <span
  m="1951070">we</span> <span m="1951250">add</span> <span
  m="1951520">the</span> <span m="1951700">eigenvalues,</span> <span
  m="1952600">we</span> <span m="1952810">get</span> <span
  m="1953020">the</span> <span m="1953170">trace.</span></p><p><span
  m="1953860">AUDIENCE:</span> <span m="1954045">[INAUDIBLE]</span></p><p><span
  m="1954970">GILBERT STRANG:</span> <span m="1955165">We</span> <span
  m="1955360">multiply</span> <span m="1956020">the</span> <span
  m="1956170">eigenvalues.</span> <span m="1957010">So</span> <span
  m="1957220">we</span> <span m="1957400">take--</span> <span
  m="1958390">so</span> <span m="1959170">now</span> <span
  m="1959620">multiply</span> <span m="1963820">the</span> <span
  m="1963990">lambdas.</span> <span m="1965640">So</span> <span
  m="1965850">then</span> <span m="1966090">I</span> <span
  m="1966270">get</span> <span m="1966580">i</span> <span
  m="1967110">times</span> <span m="1968040">minus</span> <span
  m="1968650">i.</span> <span m="1970600">And</span> <span
  m="1970760">that</span> <span m="1971040">should</span> <span
  m="1971370">equal--</span> <span m="1971860">let's--</span> <span
  m="1972300">don't</span> <span m="1972810">look</span> <span
  m="1973230">yet.</span> <span m="1974550">What</span> <span
  m="1975030">should</span> <span m="1975300">it</span> <span
  m="1975480">equal</span> <span m="1975930">if</span> <span
  m="1976080">I</span> <span m="1976230">multiply</span> <span
  m="1976980">the</span> <span m="1977130">eigenvalues</span> <span
  m="1978060">I</span> <span m="1978240">should</span> <span
  m="1978510">get</span> <span m="1978930">the?</span></p><p><span
  m="1979870">AUDIENCE:</span> <span m="1980105">Determinant.</span></p><p><span
  m="1980810">GILBERT STRANG:</span> <span m="1980977">Determinant,</span> <span
  m="1981480">right.</span> <span m="1982700">Of A.</span> <span
  m="1989640">So</span> <span m="1989850">that's</span> <span
  m="1990090">two</span> <span m="1990510">handy</span> <span
  m="1990930">checks.</span> <span m="1992680">Add</span> <span
  m="1992890">the</span> <span m="1993040">eigenvalues--</span> <span
  m="1994120">for</span> <span m="1994300">any</span> <span
  m="1994540">size--</span> <span m="1994900">3</span> <span
  m="1995140">by</span> <span m="1995290">3,</span> <span m="1995560">4</span>
  <span m="1995800">by</span> <span m="1995980">4--</span> <span
  m="1996280">but</span> <span m="1996430">it's</span> <span
  m="1996580">only</span> <span m="1996850">two</span> <span
  m="1997120">checks.</span> <span m="1998230">So</span> <span
  m="1998440">for</span> <span m="1998620">2</span> <span m="1998800">by</span>
  <span m="1998980">2,</span> <span m="1999220">it's</span> <span
  m="1999400">kind</span> <span m="1999610">of,</span> <span
  m="1999950">you've</span> <span m="2000120">got</span> <span
  m="2000390">it.</span> <span m="2001080">3</span> <span m="2001320">by</span>
  <span m="2001500">3,</span> <span m="2001740">4</span> <span
  m="2001950">by</span> <span m="2002130">4--</span> <span
  m="2002340">you</span> <span m="2002520">could</span> <span
  m="2002760">still</span> <span m="2003060">have</span> <span
  m="2003300">made</span> <span m="2003570">an</span> <span
  m="2003720">error</span> <span m="2004560">and</span> <span
  m="2005100">the</span> <span m="2005310">two</span> <span
  m="2005550">checks</span> <span m="2006000">could</span> <span
  m="2006570">potentially</span> <span m="2007770">still</span> <span
  m="2008100">work.</span> <span m="2009630">Let's just</span> <span
  m="2009960">check</span> <span m="2010290">it</span> <span
  m="2010440">out</span> <span m="2010650">here.</span> <span
  m="2010920">What's</span> <span m="2011190">i</span> <span
  m="2011400">times</span> <span m="2011820">minus</span> <span
  m="2012330">i?</span></p><p><span m="2015534">AUDIENCE:</span> <span
  m="2015782">1.</span></p><p><span m="2016030">GILBERT STRANG:</span> <span
  m="2016225">1.</span> <span m="2017230">Because</span> <span
  m="2017500">it's</span> <span m="2017680">minus</span> <span
  m="2018310">i</span> <span m="2018520">squared,</span> <span
  m="2018910">and</span> <span m="2019000">that's</span> <span
  m="2019240">plus</span> <span m="2019600">1.</span> <span
  m="2020290">And</span> <span m="2020440">the</span> <span
  m="2020560">determinant</span> <span m="2021280">of</span> <span
  m="2021400">that</span> <span m="2021640">matrix</span> <span
  m="2022300">is</span> <span m="2023850">0</span> <span
  m="2024510">minus--</span> <span m="2025050">is 1.</span> <span
  m="2025450">Yeah.</span> <span m="2027170">OK.</span> <span
  m="2027820">So</span> <span m="2028000">we</span> <span m="2028120">got</span>
  <span m="2028330">1.</span> <span m="2029350">Good.</span> <span
  m="2033610">Those</span> <span m="2033820">are</span> <span
  m="2033880">really</span> <span m="2034210">the</span> <span
  m="2034390">key</span> <span m="2034750">fact</span> <span
  m="2035170">about</span> <span m="2035470">eigenvalues.</span> <span
  m="2039010">But</span> <span m="2039280">of</span> <span
  m="2039370">course</span> <span m="2041560">they're</span> <span
  m="2041770">not--</span> <span m="2042100">it's</span> <span
  m="2042310">not</span> <span m="2042550">as</span> <span
  m="2042640">simple</span> <span m="2043030">as</span> <span
  m="2043120">solving</span> <span m="2043600">Ax</span> <span
  m="2043770">equal</span> <span m="2043970">B</span> <span
  m="2044560">to</span> <span m="2044680">find</span> <span
  m="2045010">them,</span> <span m="2046360">but</span> <span
  m="2046690">if</span> <span m="2047230">you</span> <span
  m="2047410">follow</span> <span m="2047890">through</span> <span
  m="2048340">on</span> <span m="2048489">this</span> <span
  m="2050110">idea</span> <span m="2050560">of</span> <span
  m="2051580">similar</span> <span m="2052030">matrices,</span> <span
  m="2053980">and</span> <span m="2055389">sort</span> <span
  m="2055600">of</span> <span m="2055780">chop</span> <span
  m="2056199">down</span> <span m="2056600">the</span> <span
  m="2057040">off</span> <span m="2057250">diagonal</span> <span
  m="2057790">part,</span> <span m="2058150">then</span> <span
  m="2058510">sure</span> <span m="2058750">enough,</span> <span
  m="2059020">the</span> <span m="2059170">eigenvalue's</span> <span
  m="2060040">gotta</span> <span m="2060310">show</span> <span
  m="2060610">up.</span> <span m="2062900">OK.</span></p><p><span
  m="2064790">Symmetric.</span> <span m="2067989">Symmetric</span> <span
  m="2068530">matrices.</span> <span m="2073830">So</span> <span
  m="2073909">now</span> <span m="2074150">we're</span> <span
  m="2074239">going</span> <span m="2074449">to</span> <span
  m="2074510">have</span> <span m="2074780">symmetric,</span> <span
  m="2078830">and</span> <span m="2079040">then</span> <span
  m="2079610">we'll</span> <span m="2079880">have</span> <span
  m="2080239">the</span> <span m="2080420">special,</span> <span
  m="2081080">even</span> <span m="2081380">better</span> <span
  m="2081770">than</span> <span m="2081980">symmetric,</span> <span
  m="2082639">is</span> <span m="2082790">symmetric</span> <span
  m="2083510">positive</span> <span m="2084110">definite.</span> <span
  m="2085860">OK.</span> <span m="2086190">Symmetric--</span> <span
  m="2087150">you</span> <span m="2087389">told</span> <span
  m="2087690">me</span> <span m="2087810">the</span> <span
  m="2087929">main</span> <span m="2088230">facts</span> <span
  m="2089370">are</span> <span m="2089909">the</span> <span
  m="2090090">eigenvalues</span> <span m="2093960">real,</span> <span
  m="2096330">the</span> <span m="2096659">eigenvectors</span> <span
  m="2101210">orthogonal.</span> <span m="2108030">And</span> <span
  m="2108390">I</span> <span m="2108480">guess,</span> <span
  m="2108830">actually--</span> <span m="2110280">yeah.</span> <span
  m="2111420">So</span> <span m="2111630">I</span> <span m="2111720">want</span>
  <span m="2111930">to</span> <span m="2113340">put</span> <span
  m="2115170">those</span> <span m="2115440">into</span> <span
  m="2115670">math</span> <span m="2116130">symbols</span> <span
  m="2116700">instead</span> <span m="2117060">of</span> <span
  m="2117120">words.</span> <span m="2122480">So</span> <span
  m="2124140">yeah.</span> <span m="2126500">I</span> <span
  m="2126590">guess--</span> <span m="2128330">shall</span> <span
  m="2128570">I</span> <span m="2128660">just</span> <span
  m="2129170">jump</span> <span m="2129530">in?</span> <span
  m="2131270">And</span> <span m="2131660">the</span> <span
  m="2131840">other</span> <span m="2132980">thing</span> <span
  m="2133250">hidden</span> <span m="2133610">there--</span> <span
  m="2133910">but</span> <span m="2134720">very</span> <span
  m="2134990">important</span> <span m="2135530">is--</span> <span
  m="2136830">there's</span> <span m="2137270">a</span> <span
  m="2137360">full</span> <span m="2137660">set</span> <span
  m="2137930">of</span> <span m="2138080">eigenvectors,</span> <span
  m="2139790">even</span> <span m="2140180">if</span> <span
  m="2140330">some</span> <span m="2140600">eigenvalues</span> <span
  m="2141350">happen</span> <span m="2141620">to</span> <span
  m="2141710">be</span> <span m="2141860">repeated,</span> <span
  m="2142400">like</span> <span m="2142640">the</span> <span
  m="2142790">identity</span> <span m="2143390">matrix.</span></p><p><span
  m="2144650">It's</span> <span m="2144800">still</span> <span
  m="2145100">got</span> <span m="2145430">plenty</span> <span
  m="2145820">of</span> <span m="2145940">eigenvectors.</span> <span
  m="2147940">So</span> <span m="2148150">that's</span> <span
  m="2148480">a</span> <span m="2148690">added</span> <span
  m="2149080">point</span> <span m="2149440">that</span> <span
  m="2149620">I've</span> <span m="2149830">not</span> <span
  m="2150280">made</span> <span m="2150850">there.</span> <span
  m="2151150">And</span> <span m="2151900">I</span> <span
  m="2152080">could</span> <span m="2152620">prove</span> <span
  m="2153010">those</span> <span m="2153880">two</span> <span
  m="2154120">statements,</span> <span m="2154720">but</span> <span
  m="2154900">why</span> <span m="2155110">don't</span> <span
  m="2155350">I</span> <span m="2156370">ask</span> <span m="2156700">you</span>
  <span m="2156820">to</span> <span m="2157570">accept</span> <span
  m="2158050">them</span> <span m="2158860">and</span> <span m="2159280">go
  onward?</span> <span m="2162810">What</span> <span m="2162830">are</span>
  <span m="2162890">we</span> <span m="2162950">going</span> <span
  m="2163050">to</span> <span m="2163190">do</span> <span
  m="2163340">with</span> <span m="2163520">them?</span> <span
  m="2165340">OK.</span> <span m="2171600">Can</span> <span
  m="2171870">you</span> <span m="2171960">just--</span> <span
  m="2172640">let's</span> <span m="2172830">have</span> <span
  m="2173010">an</span> <span m="2173130">example.</span> <span
  m="2176550">Let</span> <span m="2176670">me</span> <span
  m="2176790">put</span> <span m="2177200">an</span> <span
  m="2177270">example</span> <span m="2177810">here.</span> <span
  m="2178690">Suppose</span> <span m="2179340">S--</span> <span
  m="2179910">now</span> <span m="2180120">I'm</span> <span
  m="2180270">calling</span> <span m="2180600">it</span> <span
  m="2180750">S--</span> <span m="2182910">is 0s,</span> <span
  m="2183342">1</span> <span m="2183780">and</span> <span m="2184020">1.</span>
  <span m="2186610">So</span> <span m="2186720">that's</span> <span
  m="2187000">symmetric.</span> <span m="2189960">What</span> <span
  m="2190190">are</span> <span m="2190350">its</span> <span
  m="2190590">eigenvalues?</span> <span m="2193080">What</span> <span
  m="2193260">are</span> <span m="2193350">the</span> <span
  m="2193530">eigenvalues</span> <span m="2194190">of</span> <span
  m="2194310">that</span> <span m="2194610">symmetric</span> <span
  m="2195240">matrix,</span> <span m="2195840">S?</span></p><p><span
  m="2197140">AUDIENCE:</span> <span m="2197242">Plus</span> <span
  m="2197344">and</span> <span m="2197446">minus</span> <span
  m="2197550">1.</span></p><p><span m="2198370">GILBERT STRANG:</span> <span
  m="2198595">Plus</span> <span m="2198820">and</span> <span
  m="2199000">minus</span> <span m="2199270">1.</span> <span
  m="2200878">Well,</span> <span m="2201770">if</span> <span
  m="2201890">you</span> <span m="2202040">propose</span> <span
  m="2202520">two</span> <span m="2202760">eigenvalues,</span> <span
  m="2203660">I'll</span> <span m="2203870">write</span> <span
  m="2204080">them</span> <span m="2204200">down,</span> <span
  m="2204970">1</span> <span m="2205190">and</span> <span
  m="2205310">minus</span> <span m="2205700">1.</span> <span
  m="2206730">And</span> <span m="2206810">then</span> <span
  m="2207170">what</span> <span m="2207440">will</span> <span
  m="2207680">I</span> <span m="2207800">do</span> <span m="2208130">to</span>
  <span m="2208310">check</span> <span m="2208610">them?</span></p><p><span
  m="2210176">AUDIENCE:</span> <span m="2210323">Trace</span> <span
  m="2210470">and</span> <span m="2210618">determinant.</span></p><p><span
  m="2211060">GILBERT STRANG:</span> <span m="2211240">Trace</span> <span
  m="2211420">and</span> <span m="2211630">determinant.</span> <span
  m="2213810">OK.</span> <span m="2214330">So</span> <span
  m="2214750">are</span> <span m="2214930">they--</span> <span
  m="2215530">is</span> <span m="2215770">it</span> <span
  m="2215860">true</span> <span m="2216220">that</span> <span
  m="2216400">the</span> <span m="2216580">eigenvalues</span> <span
  m="2217600">are</span> <span m="2218050">1</span> <span m="2218500">and</span>
  <span m="2218650">minus</span> <span m="2219070">1?</span> <span
  m="2221600">OK.</span> <span m="2222370">How</span> <span
  m="2222580">do</span> <span m="2222730">I</span> <span
  m="2222850">check</span> <span m="2223150">the</span> <span
  m="2223300">trace?</span> <span m="2224020">What</span> <span
  m="2224260">is</span> <span m="2224440">the</span> <span
  m="2224560">trace</span> <span m="2225070">of</span> <span
  m="2225190">that</span> <span m="2225370">matrix?</span> <span
  m="2227640">0.</span> <span m="2228350">And</span> <span
  m="2228680">what's</span> <span m="2229130">the</span> <span
  m="2229220">sum</span> <span m="2229550">of</span> <span
  m="2229640">the</span> <span m="2229790">eigenvalues--</span> <span
  m="2230630">0.</span> <span m="2231450">Good.</span> <span
  m="2232570">What</span> <span m="2232750">about</span> <span
  m="2232990">determinant?</span> <span m="2233710">What's</span> <span
  m="2234010">the</span> <span m="2234130">determinant</span> <span
  m="2234820">of</span> <span m="2234940">S?</span></p><p><span
  m="2235380">AUDIENCE:</span> <span m="2235531">Minus</span> <span
  m="2235682">1.</span></p><p><span m="2236290">GILBERT STRANG:</span> <span
  m="2236485">Minus</span> <span m="2236680">1.</span> <span
  m="2237100">The</span> <span m="2237520">product</span> <span
  m="2238000">of</span> <span m="2238120">the</span> <span
  m="2238270">eigenvalues--</span> <span m="2238930">minus 1.</span> <span
  m="2239290">So</span> <span m="2239770">we've</span> <span
  m="2239980">got</span> <span m="2240220">it.</span> <span
  m="2240590">OK.</span> <span m="2241480">What</span> <span
  m="2241720">are</span> <span m="2241780">the</span> <span
  m="2241960">eigenvectors?</span> <span m="2244820">What</span> <span
  m="2245090">vector</span> <span m="2246940">can</span> <span
  m="2247480">you</span> <span m="2247660">multiply</span> <span
  m="2248500">by</span> <span m="2248860">and</span> <span m="2249010">it</span>
  <span m="2249070">doesn't</span> <span m="2249490">change</span> <span
  m="2249940">direction--</span> <span m="2250540">in</span> <span
  m="2250630">fact,</span> <span m="2250840">doesn't</span> <span
  m="2251200">change</span> <span m="2251560">at</span> <span
  m="2251680">all?</span> <span m="2252010">I'm</span> <span
  m="2252190">looking</span> <span m="2252460">for</span> <span
  m="2252610">the</span> <span m="2252760">eigenvector</span> <span
  m="2254020">that's a</span> <span m="2254410">steady</span> <span
  m="2254890">state?</span></p><p><span m="2255735">AUDIENCE:</span> <span
  m="2255866">0,</span> <span m="2255997">1?</span></p><p><span
  m="2257180">GILBERT STRANG:</span> <span m="2257326">0,</span> <span
  m="2257472">1?</span></p><p><span m="2258115">AUDIENCE:</span> <span
  m="2258280">1,</span> <span m="2258445">1.</span></p><p><span
  m="2261090">GILBERT STRANG:</span> <span m="2261135">I</span> <span
  m="2261180">think</span> <span m="2261390">it's</span> <span
  m="2261540">1,</span> <span m="2261870">1.</span> <span
  m="2263000">Yeah.</span> <span m="2263280">So</span> <span
  m="2263540">here</span> <span m="2263750">is</span> <span
  m="2263880">the</span> <span m="2264030">lambdas.</span> <span
  m="2265380">And</span> <span m="2265530">then</span> <span
  m="2265740">the</span> <span m="2265860">eigenvectors</span> <span
  m="2266880">are--</span> <span m="2267420">I</span> <span
  m="2267600">think</span> <span m="2267900">1,</span> <span
  m="2268360">1.</span> <span m="2271670">Is</span> <span
  m="2271790">that</span> <span m="2271940">right?</span> <span
  m="2273050">Yeah.</span> <span m="2273260">Sure.</span> <span
  m="2274190">S</span> <span m="2274910">is</span> <span m="2275090">just</span>
  <span m="2275360">a</span> <span m="2275420">permutation</span> <span
  m="2276260">here.</span> <span m="2277010">It's</span> <span
  m="2277190">just</span> <span m="2277490">exchanging</span> <span
  m="2278240">the</span> <span m="2278360">two</span> <span
  m="2278780">entries.</span> <span m="2279230">So</span> <span
  m="2279530">1</span> <span m="2279800">and</span> <span m="2279890">1</span>
  <span m="2280520">won't</span> <span m="2280760">change.</span> <span
  m="2281770">And</span> <span m="2281950">what's</span> <span
  m="2282620">the</span> <span m="2282770">other</span> <span
  m="2283040">eigenvector?</span></p><p><span m="2284378">AUDIENCE:</span> <span
  m="2284597">Minus 1?</span></p><p><span m="2286130">GILBERT STRANG:</span>
  <span m="2286280">1</span> <span m="2286430">and</span> <span
  m="2286550">minus</span> <span m="2287000">1.</span> <span
  m="2295220">And</span> <span m="2295340">then,</span> <span
  m="2296690">I'm</span> <span m="2296870">thinking--</span> <span
  m="2297380">remembering</span> <span m="2298010">about</span> <span
  m="2298320">this</span> <span m="2298470">similar</span> <span
  m="2299090">stuff--</span> <span m="2300140">I'm</span> <span
  m="2300380">thinking</span> <span m="2300980">that</span> <span
  m="2301250">S</span> <span m="2302960">is</span> <span
  m="2303110">similar</span> <span m="2303650">to</span> <span
  m="2306770">a</span> <span m="2306890">matrix</span> <span
  m="2307550">that</span> <span m="2307610">just</span> <span
  m="2307880">shows</span> <span m="2308270">the</span> <span
  m="2308420">eigenvalues.</span> <span m="2309710">So</span> <span
  m="2310190">S</span> <span m="2310730">is</span> <span
  m="2310880">similar</span> <span m="2311360">to--</span> <span
  m="2311690">I'm</span> <span m="2311840">going</span> <span
  m="2311970">to</span> <span m="2312080">put</span> <span m="2312410">in</span>
  <span m="2313010">an</span> <span m="2313190">M--</span> <span
  m="2314410">well,</span> <span m="2314690">I'm</span> <span
  m="2314840">going</span> <span m="2314960">to</span> <span
  m="2315050">connect</span> <span m="2315350">S--</span> <span
  m="2315650">that</span> <span m="2316790">matrix--</span> <span
  m="2317960">with</span> <span m="2319190">the</span> <span
  m="2320420">eigenvalue</span> <span m="2321500">matrix,</span> <span
  m="2323390">which</span> <span m="2323690">has</span> <span
  m="2323960">the</span> <span m="2324110">eigenvalues.</span> <span
  m="2325160">So</span> <span m="2327620">here</span> <span
  m="2328000">is</span> <span m="2328160">my--</span> <span
  m="2330950">everybody</span> <span m="2331400">calls</span> <span
  m="2331700">that</span> <span m="2331850">matrix</span> <span
  m="2332330">capital</span> <span m="2332780">lambda,</span> <span
  m="2333770">because</span> <span m="2334190">everybody</span> <span
  m="2334640">calls</span> <span m="2335030">the</span> <span
  m="2335330">eigenvalues</span> <span m="2336470">little</span> <span
  m="2336740">lambda.</span> <span m="2337550">So</span> <span
  m="2337760">the</span> <span m="2337880">matrix</span> <span
  m="2339020">that</span> <span m="2339200">has</span> <span
  m="2339530">them</span> <span m="2340250">is</span> <span
  m="2340460">called</span> <span m="2340760">capital</span> <span
  m="2341180">lambda.</span></p><p><span m="2342330">And</span> <span
  m="2342500">I--</span> <span m="2342800">my</span> <span
  m="2343070">claim</span> <span m="2343430">is</span> <span
  m="2343610">that</span> <span m="2343730">these</span> <span
  m="2344000">guys</span> <span m="2344330">are</span> <span
  m="2344420">similar--</span> <span m="2346610">that</span> <span
  m="2346890">this</span> <span m="2347190">matrix,</span> <span
  m="2347700">S,</span> <span m="2348060">that</span> <span
  m="2348210">you're</span> <span m="2348360">seeing</span> <span
  m="2348690">up</span> <span m="2348840">there--</span> <span
  m="2349650">I</span> <span m="2349800">believe</span> <span
  m="2350220">there</span> <span m="2350350">is</span> <span
  m="2350520">an</span> <span m="2350670">M</span> <span m="2352410">I</span>
  <span m="2352530">believe</span> <span m="2352890">there</span> <span
  m="2353020">is</span> <span m="2353160">an</span> <span m="2353280">M.</span>
  <span m="2354540">So</span> <span m="2354840">that</span> <span
  m="2355050">S--</span> <span m="2355650">what</span> <span
  m="2355890">did</span> <span m="2356070">I</span> <span m="2356880">put</span>
  <span m="2357120">in</span> <span m="2357240">here?</span> <span
  m="2357510">So</span> <span m="2357660">I'm</span> <span
  m="2357810">following</span> <span m="2358320">this</span> <span
  m="2358500">pattern.</span> <span m="2359370">I</span> <span
  m="2359490">believe</span> <span m="2359910">that</span> <span
  m="2360090">there</span> <span m="2360240">would</span> <span
  m="2360420">be</span> <span m="2360570">an</span> <span m="2360720">M</span>
  <span m="2362040">and</span> <span m="2362280">an</span> <span
  m="2362430">M</span> <span m="2362660">inverse,</span> <span
  m="2364280">so</span> <span m="2364530">that</span> <span
  m="2364740">this</span> <span m="2365160">would</span> <span
  m="2365400">mean</span> <span m="2365700">that.</span> <span
  m="2367590">And</span> <span m="2368100">that's</span> <span
  m="2368400">nice.</span> <span m="2369870">First</span> <span
  m="2370200">of</span> <span m="2370320">all,</span> <span
  m="2370920">it</span> <span m="2371190">would</span> <span
  m="2371820">confirm</span> <span m="2372450">that</span> <span
  m="2372600">the</span> <span m="2372780">eigenvalues</span> <span
  m="2373530">stay</span> <span m="2373890">the</span> <span
  m="2374010">same,</span> <span m="2374580">which</span> <span
  m="2375720">was</span> <span m="2376320">certain</span> <span
  m="2376800">to</span> <span m="2376890">happen.</span></p><p><span
  m="2378210">And</span> <span m="2378390">then</span> <span
  m="2378660">it</span> <span m="2378720">would</span> <span
  m="2378900">also</span> <span m="2379470">mean</span> <span
  m="2380070">that</span> <span m="2380280">I</span> <span
  m="2380460">had</span> <span m="2380670">got</span> <span m="2382310">a</span>
  <span m="2382430">diagonal</span> <span m="2383120">matrix.</span> <span
  m="2383720">And</span> <span m="2383840">of</span> <span
  m="2383930">course,</span> <span m="2384230">that's</span> <span
  m="2384560">a</span> <span m="2384650">natural</span> <span
  m="2385130">goal--</span> <span m="2385520">to</span> <span
  m="2385700">get</span> <span m="2385970">a</span> <span
  m="2386030">diagonal</span> <span m="2386630">matrix.</span> <span
  m="2389540">So</span> <span m="2389720">we</span> <span
  m="2389840">might</span> <span m="2390110">hope</span> <span
  m="2390350">that</span> <span m="2390530">the</span> <span
  m="2390740">M</span> <span m="2391070">that</span> <span
  m="2391280">gets</span> <span m="2391610">us</span> <span
  m="2391820">there</span> <span m="2392210">is</span> <span
  m="2393080">like</span> <span m="2395410">an</span> <span
  m="2395530">important</span> <span m="2395950">matrix.</span> <span
  m="2397510">So</span> <span m="2397690">do</span> <span m="2397780">you</span>
  <span m="2397870">see</span> <span m="2398110">what</span> <span
  m="2398380">I'm</span> <span m="2398500">doing</span> <span
  m="2398830">here?</span> <span m="2399520">It</span> <span
  m="2399850">comes</span> <span m="2400210">under</span> <span
  m="2400450">the</span> <span m="2400600">heading</span> <span
  m="2401020">of</span> <span m="2401560">diagonalizing</span> <span
  m="2402940">a</span> <span m="2403030">matrix.</span> <span
  m="2404350">I</span> <span m="2404440">start</span> <span
  m="2404800">with</span> <span m="2404940">a</span> <span
  m="2405010">matrix,</span> <span m="2405540">S.</span> <span
  m="2406440">I</span> <span m="2407340">find</span> <span
  m="2407700">it's</span> <span m="2407880">eigenvalues.</span> <span
  m="2408840">They</span> <span m="2409050">go</span> <span
  m="2409410">on</span> <span m="2409740">into</span> <span
  m="2410010">lambda.</span> <span m="2411420">And</span> <span
  m="2411720">I</span> <span m="2411870">believe</span> <span
  m="2412380">I</span> <span m="2412500">can</span> <span
  m="2412680">find</span> <span m="2413040">an</span> <span
  m="2413190">M,</span> <span m="2414450">so</span> <span
  m="2414840">that</span> <span m="2418320">I</span> <span
  m="2418470">see</span> <span m="2419100">they're</span> <span
  m="2419360">similar.</span></p><p><span m="2419980">They</span> <span
  m="2420000">have</span> <span m="2420150">the</span> <span
  m="2420240">same</span> <span m="2420600">eigenvalues,</span> <span
  m="2421260">1</span> <span m="2421560">and</span> <span
  m="2421680">minus</span> <span m="2422070">1,</span> <span
  m="2422260">both</span> <span m="2422490">sides.</span> <span
  m="2423660">So</span> <span m="2424410">only</span> <span
  m="2424800">remaining</span> <span m="2425370">question</span> <span
  m="2425880">is,</span> <span m="2426120">what's</span> <span
  m="2426480">M?</span> <span m="2427650">What's</span> <span
  m="2427980">the</span> <span m="2428160">matrix</span> <span
  m="2428940">that</span> <span m="2429300">diagonalizes</span> <span
  m="2430830">S?</span> <span m="2433262">The--</span> <span
  m="2434330">what</span> <span m="2434550">have</span> <span
  m="2434630">we</span> <span m="2434800">got</span> <span
  m="2435010">left</span> <span m="2435250">to</span> <span
  m="2435400">use?</span></p><p><span m="2435940">AUDIENCE:</span> <span
  m="2436172">The</span> <span m="2436405">eigenvectors.</span></p><p><span
  m="2436870">GILBERT STRANG:</span> <span m="2436960">The</span> <span
  m="2437050">eigenvectors.</span> <span m="2439140">The</span> <span
  m="2439260">matrix</span> <span m="2439555">that--</span> <span
  m="2440400">so,</span> <span m="2440700">can</span> <span m="2440940">I</span>
  <span m="2441030">put</span> <span m="2441240">the</span> <span
  m="2441450">M</span> <span m="2442260">over</span> <span
  m="2442560">there?</span> <span m="2445530">Yeah.</span> <span
  m="2446460">I'll</span> <span m="2446550">put--</span> <span
  m="2446790">that</span> <span m="2447420">M</span> <span
  m="2447840">inverse</span> <span m="2448280">is</span> <span
  m="2448470">going</span> <span m="2448590">to</span> <span
  m="2448740">go</span> <span m="2448950">over</span> <span
  m="2449910">to</span> <span m="2450060">the</span> <span
  m="2450210">other</span> <span m="2450450">side.</span> <span
  m="2452440">Oh.</span> <span m="2452680">It</span> <span
  m="2452790">goes</span> <span m="2453060">here,</span> <span
  m="2453390">doesn't</span> <span m="2453690">it?</span> <span
  m="2454800">I</span> <span m="2454890">was</span> <span
  m="2455550">worried</span> <span m="2455970">there.</span> <span
  m="2456240">It</span> <span m="2456840">didn't</span> <span
  m="2457110">look</span> <span m="2457260">good,</span> <span
  m="2457530">but</span> <span m="2458370">yeah.</span> <span
  m="2458630">So</span> <span m="2460440">this</span> <span
  m="2460740">is</span> <span m="2460890">all</span> <span
  m="2461070">going</span> <span m="2461160">to</span> <span
  m="2461280">be</span> <span m="2461400">right,</span> <span
  m="2461800">if--</span> <span m="2467990">this</span> <span
  m="2468230">is</span> <span m="2468350">what</span> <span
  m="2468560">I'd</span> <span m="2468710">like</span> <span
  m="2468920">to</span> <span m="2469070">have--</span> <span
  m="2469460">SM</span> <span m="2470120">equal</span> <span
  m="2470510">M</span> <span m="2470720">lambda.</span> <span
  m="2471980">SM</span> <span m="2472490">equal</span> <span
  m="2472790">M</span> <span m="2472970">lambda.</span> <span
  m="2474810">That's</span> <span m="2475170">diagonalizing</span> <span
  m="2476420">a</span> <span m="2476490">matrix.</span> <span
  m="2477120">That's</span> <span m="2477390">finding</span> <span
  m="2477900">the</span> <span m="2478110">M</span> <span
  m="2479990">using</span> <span m="2480380">the</span> <span
  m="2480530">eigenvectors.</span> <span m="2482390">That</span> <span
  m="2482750">produces</span> <span m="2483500">a</span> <span
  m="2483590">similar</span> <span m="2484070">matrix</span> <span
  m="2484640">lambda,</span> <span m="2485850">which</span> <span
  m="2485960">has</span> <span m="2486140">the</span> <span
  m="2486290">eigenvalues.</span> <span m="2487270">That's</span> <span
  m="2489100">the</span> <span m="2489200">great</span> <span
  m="2489620">fact</span> <span m="2490220">about</span> <span
  m="2493400">diagonalizing.</span> <span m="2495810">That's</span> <span
  m="2496110">how</span> <span m="2496290">you</span> <span
  m="2496470">use--</span> <span m="2496830">that's</span> <span
  m="2497070">another</span> <span m="2497430">way</span> <span
  m="2497580">to</span> <span m="2497700">say,</span> <span
  m="2498160">this</span> <span m="2498330">is</span> <span
  m="2498450">how</span> <span m="2498690">the</span> <span
  m="2498840">eigenvectors</span> <span m="2499620">pay</span> <span
  m="2499820">off.</span></p><p><span m="2500610">You</span> <span
  m="2500730">put</span> <span m="2500970">them</span> <span
  m="2501150">into</span> <span m="2501420">M.</span> <span
  m="2502140">You</span> <span m="2502440">take</span> <span
  m="2502770">the</span> <span m="2502860">similar</span> <span
  m="2503340">matrix</span> <span m="2503880">and</span> <span
  m="2504060">it's</span> <span m="2504300">nice</span> <span
  m="2504630">and</span> <span m="2504750">diagonal.</span> <span
  m="2505830">And</span> <span m="2505990">do</span> <span
  m="2506070">you</span> <span m="2506190">see</span> <span
  m="2506490">that</span> <span m="2506640">this</span> <span
  m="2506850">will</span> <span m="2507030">happen?</span> <span
  m="2507970">S</span> <span m="2508410">times--</span> <span
  m="2508830">so</span> <span m="2509070">M</span> <span m="2509370">has</span>
  <span m="2509640">the</span> <span m="2509760">first</span> <span
  m="2510220">eigenvector</span> <span m="2511410">and</span> <span
  m="2511530">the</span> <span m="2511650">second</span> <span
  m="2512010">eigenvector.</span> <span m="2513870">And</span> <span
  m="2514110">I</span> <span m="2514290">believe</span> <span
  m="2514800">that</span> <span m="2516520">first</span> <span
  m="2516940">eigenvector</span> <span m="2518430">times</span> <span
  m="2518820">the</span> <span m="2518910">second--</span> <span
  m="2519690">and</span> <span m="2520200">the</span> <span
  m="2520320">second</span> <span m="2520740">eigenvector--</span> <span
  m="2521370">that's</span> <span m="2521610">M</span> <span
  m="2521850">again,</span> <span m="2522390">on</span> <span
  m="2522540">this</span> <span m="2522720">side.</span> <span
  m="2523660">Let</span> <span m="2523980">me</span> <span
  m="2524070">just</span> <span m="2524340">write</span> <span
  m="2524670">in</span> <span m="2524940">1,</span> <span m="2525980">0,</span>
  <span m="2526640">0,</span> <span m="2527400">minus</span> <span
  m="2528100">1.</span> <span m="2533110">I</span> <span
  m="2533260">believe</span> <span m="2533590">is has</span> <span
  m="2533920">got</span> <span m="2534050">to</span> <span m="2534220">be</span>
  <span m="2536510">confirming</span> <span m="2537260">that</span> <span
  m="2537470">we've</span> <span m="2537620">done</span> <span
  m="2537860">the</span> <span m="2538000">thing</span> <span
  m="2538240">right--</span> <span m="2539510">confirming</span> <span
  m="2540140">that</span> <span m="2540320">the</span> <span
  m="2540500">eigenvectors</span> <span m="2541340">work</span> <span
  m="2541760">here.</span> <span m="2544550">Please</span> <span
  m="2545360">make</span> <span m="2545600">sense</span> <span
  m="2545960">out</span> <span m="2546170">of</span> <span
  m="2546230">that</span> <span m="2546770">last</span> <span
  m="2547130">line.</span></p><p><span m="2550060">When</span> <span
  m="2550270">you</span> <span m="2550390">see</span> <span
  m="2550630">that</span> <span m="2550840">last</span> <span
  m="2551170">line,</span> <span m="2552790">what</span> <span
  m="2552980">do</span> <span m="2553090">I</span> <span m="2553180">mean</span>
  <span m="2553480">to</span> <span m="2553570">make</span> <span
  m="2553840">sense</span> <span m="2554170">out</span> <span
  m="2554350">of</span> <span m="2554560">it?</span> <span m="2555460">I</span>
  <span m="2555550">want</span> <span m="2555730">to</span> <span
  m="2555790">see</span> <span m="2556090">that</span> <span
  m="2556240">that's</span> <span m="2556570">true.</span> <span
  m="2557860">How</span> <span m="2558160">do</span> <span m="2558310">I</span>
  <span m="2558430">see</span> <span m="2558730">that--</span> <span
  m="2559180">how</span> <span m="2559390">do</span> <span m="2559540">I</span>
  <span m="2559690">do</span> <span m="2560200">this--</span> <span
  m="2560770">so</span> <span m="2560950">what's</span> <span
  m="2561220">the</span> <span m="2561340">left</span> <span
  m="2561640">side</span> <span m="2561940">and</span> <span
  m="2562030">what's</span> <span m="2562270">the</span> <span
  m="2562360">right</span> <span m="2562660">side?</span> <span
  m="2567850">So</span> <span m="2568000">what--</span> <span
  m="2568640">if</span> <span m="2568930">I</span> <span
  m="2569110">multiply</span> <span m="2569550">S</span> <span
  m="2569830">by</span> <span m="2570130">a</span> <span
  m="2570610">couple</span> <span m="2570910">of</span> <span
  m="2571030">columns,</span> <span m="2572820">what's</span> <span
  m="2573030">the</span> <span m="2573150">answer?</span></p><p><span
  m="2574013">AUDIENCE:</span> <span m="2574224">Sx1</span> <span
  m="2574436">and</span> <span m="2574860">Sx2.</span></p><p><span
  m="2575615">GILBERT STRANG:</span> <span m="2575802">Sx1</span> <span
  m="2575990">and</span> <span m="2576170">Sx2.</span> <span
  m="2576920">That's</span> <span m="2577250">the</span> <span
  m="2577400">beauty</span> <span m="2577790">of</span> <span
  m="2577880">matrix</span> <span m="2578330">multiplication.</span> <span
  m="2579590">If</span> <span m="2579740">I</span> <span
  m="2579860">multiply</span> <span m="2580370">a</span> <span
  m="2580430">matrix</span> <span m="2581030">by</span> <span
  m="2581180">another</span> <span m="2581480">matrix,</span> <span
  m="2582090">I</span> <span m="2582110">can</span> <span m="2582260">do</span>
  <span m="2582390">it</span> <span m="2582530">a</span> <span
  m="2582590">column</span> <span m="2582980">at</span> <span
  m="2583060">a</span> <span m="2583220">time.</span> <span m="2585400">There
  are four</span> <span m="2585860">great</span> <span m="2586160">ways</span>
  <span m="2586490">to</span> <span m="2586610">multiply</span> <span
  m="2587060">matrices,</span> <span m="2587690">so</span> <span
  m="2587930">this</span> <span m="2588110">is</span> <span
  m="2588260">another</span> <span m="2588620">one--</span> <span
  m="2590900">a</span> <span m="2590990">column</span> <span
  m="2591380">at</span> <span m="2591470">a</span> <span
  m="2591560">time.</span> <span m="2592010">So</span> <span
  m="2592190">this</span> <span m="2592490">left</span> <span
  m="2592850">hand</span> <span m="2593120">side</span> <span
  m="2593600">is</span> <span m="2593840">Sx1,</span> <span
  m="2595690">Sx2.</span> <span m="2596810">I</span> <span
  m="2596930">just</span> <span m="2598290">do</span> <span
  m="2598550">each</span> <span m="2598790">column.</span> <span
  m="2599810">And</span> <span m="2600020">what</span> <span
  m="2600230">about</span> <span m="2600470">the</span> <span
  m="2600590">right</span> <span m="2600830">hand</span> <span
  m="2601040">side?</span> <span m="2603030">I</span> <span
  m="2603130">can</span> <span m="2603200">do</span> <span
  m="2603380">that</span> <span m="2603590">multiplication.</span></p><p><span
  m="2605404">AUDIENCE:</span> <span m="2605625">X1</span> <span
  m="2605846">minus x2.</span></p><p><span m="2606730">GILBERT STRANG:</span>
  <span m="2606925">X1</span> <span m="2607120">minus</span> <span
  m="2607510">x2</span> <span m="2607870">did</span> <span
  m="2608070">somebody</span> <span m="2608500">say?</span> <span
  m="2609860">Death.</span> <span m="2611890">No.</span> <span
  m="2612340">I</span> <span m="2612400">don't</span> <span
  m="2612550">want--</span> <span m="2612820">Oh,</span> <span
  m="2613090">x1--</span> <span m="2613600">sorry.</span> <span
  m="2614020">You</span> <span m="2614200">said</span> <span
  m="2614410">it</span> <span m="2614500">right.</span> <span
  m="2615360">OK.</span> <span m="2616330">When</span> <span
  m="2616540">you</span> <span m="2616660">said</span> <span
  m="2616900">x1</span> <span m="2617350">minus</span> <span
  m="2617740">x2,</span> <span m="2618160">I</span> <span m="2618280">was</span>
  <span m="2618430">subtracting.</span> <span m="2619120">But</span> <span
  m="2619300">you</span> <span m="2619480">meant</span> <span
  m="2620380">that</span> <span m="2620560">that's--</span> <span
  m="2620890">the</span> <span m="2620980">first</span> <span
  m="2621280">column</span> <span m="2621640">is</span> <span
  m="2621760">x1,</span> <span m="2622660">and</span> <span
  m="2622810">the</span> <span m="2622900">second</span> <span
  m="2623320">column</span> <span m="2623710">is</span> <span
  m="2623830">minus</span> <span m="2624250">x2.</span> <span
  m="2624820">Correct.</span> <span m="2625758">Sorry about</span> <span
  m="2626246">that.</span> <span m="2630640">And</span> <span
  m="2631000">did</span> <span m="2631240">we</span> <span
  m="2631390">come</span> <span m="2631600">out</span> <span
  m="2631750">right?</span> <span m="2633170">Yes.</span> <span m="2634310">Of
  course,</span> <span m="2634530">now</span> <span m="2634760">I</span> <span
  m="2634880">compare.</span> <span m="2636140">Sx1</span> <span
  m="2637310">is</span> <span m="2638030">lambda</span> <span m="2638390">one
  x1.</span> <span m="2639990">Sx2</span> <span m="2641000">is</span> <span
  m="2641210">lambda</span> <span m="2641600">two</span> <span
  m="2641870">x2.</span> <span m="2642860">And</span> <span
  m="2643010">I'm</span> <span m="2643130">golden.</span> <span
  m="2648040">So</span> <span m="2648220">what</span> <span
  m="2648460">was</span> <span m="2648730">the</span> <span
  m="2648850">point</span> <span m="2649330">of</span> <span
  m="2649690">this</span> <span m="2651440">board?</span> <span
  m="2652310">What</span> <span m="2652520">did</span> <span
  m="2652730">we</span> <span m="2653840">learn?</span></p><p><span
  m="2655640">We</span> <span m="2655850">learned--</span> <span
  m="2656780">well,</span> <span m="2657050">we</span> <span
  m="2657200">kind</span> <span m="2657470">of</span> <span
  m="2657590">expected</span> <span m="2658280">that</span> <span
  m="2658430">the</span> <span m="2658580">original</span> <span
  m="2659210">S</span> <span m="2660750">would</span> <span
  m="2660960">be</span> <span m="2661140">similar</span> <span
  m="2661740">to</span> <span m="2662370">the</span> <span
  m="2662500">lambdas,</span> <span m="2663870">because</span> <span
  m="2664880">the</span> <span m="2665130">eigenvalues</span> <span
  m="2665760">match.</span> <span m="2666690">S</span> <span
  m="2667020">has</span> <span m="2667200">eigenvalues</span> <span
  m="2667860">lambda.</span> <span m="2668790">And</span> <span
  m="2668940">this</span> <span m="2669150">diagonal</span> <span
  m="2669840">matrix</span> <span m="2670320">certainly</span> <span
  m="2670860">has</span> <span m="2671130">eigenvalues</span> <span
  m="2671790">1n</span> <span m="2672180">minus</span> <span
  m="2672570">1.</span> <span m="2673260">A</span> <span
  m="2673500">diagonal</span> <span m="2674010">matrix--</span> <span
  m="2674620">the</span> <span m="2674640">eigenvalues</span> <span
  m="2675210">are</span> <span m="2675270">right</span> <span
  m="2675480">in</span> <span m="2675570">front</span> <span
  m="2675810">of</span> <span m="2675930">you.</span> <span
  m="2677050">So</span> <span m="2677500">they're</span> <span
  m="2677650">similar.</span> <span m="2678280">S</span> <span
  m="2678580">is</span> <span m="2678700">similar</span> <span
  m="2679150">to</span> <span m="2679300">the</span> <span
  m="2679540">lambda.</span> <span m="2680560">And</span> <span
  m="2680710">there</span> <span m="2680860">should</span> <span
  m="2681130">be</span> <span m="2681280">an</span> <span m="2681460">M.</span>
  <span m="2682270">And</span> <span m="2682360">then</span> <span
  m="2682570">somebody</span> <span m="2682990">suggested,</span> <span
  m="2684010">maybe</span> <span m="2684310">the</span> <span
  m="2684490">M</span> <span m="2684760">is</span> <span m="2684910">the</span>
  <span m="2685060">eigenvectors.</span> <span m="2686260">And</span> <span
  m="2686500">that's</span> <span m="2686830">the</span> <span
  m="2686950">right</span> <span m="2687220">answer.</span></p><p><span
  m="2688550">So</span> <span m="2688990">finally,</span> <span
  m="2689800">let</span> <span m="2689950">me</span> <span
  m="2691030">write</span> <span m="2691450">that</span> <span
  m="2692080">conclusion</span> <span m="2692830">here--</span> <span
  m="2695730">which</span> <span m="2695970">isn't</span> <span
  m="2696270">just</span> <span m="2696600">for</span> <span
  m="2696840">symmetric</span> <span m="2697145">matrices.</span> <span
  m="2699650">So</span> <span m="2700100">maybe</span> <span
  m="2700370">I</span> <span m="2700490">should</span> <span
  m="2700700">put</span> <span m="2700940">it</span> <span
  m="2701030">for</span> <span m="2701360">matrix</span> <span
  m="2701900">A.</span> <span m="2704710">So</span> <span m="2704930">if</span>
  <span m="2705270">it</span> <span m="2705550">has</span> <span
  m="2706450">lambdas</span> <span m="2708910">and</span> <span
  m="2710010">eigenvectors,</span> <span m="2712480">and</span> <span
  m="2712630">the</span> <span m="2712750">claim</span> <span
  m="2713200">is</span> <span m="2713890">that</span> <span m="2714430">A</span>
  <span m="2716290">times</span> <span m="2716890">the</span> <span
  m="2717160">eigenvector</span> <span m="2718060">matrix</span> <span
  m="2722300">is</span> <span m="2722780">the</span> <span
  m="2722930">eigenvector</span> <span m="2723680">matrix</span> <span
  m="2727070">times</span> <span m="2727520">the</span> <span
  m="2727640">eigenvalues.</span> <span m="2734220">And</span> <span
  m="2734410">I</span> <span m="2734530">would</span> <span
  m="2734710">shorten</span> <span m="2735130">that</span> <span
  m="2735340">to</span> <span m="2735610">Ax</span> <span
  m="2737440">equals</span> <span m="2738460">x</span> <span
  m="2739330">lambda.</span> <span m="2742310">And</span> <span
  m="2742460">I</span> <span m="2742580">could</span> <span
  m="2742820">rewrite</span> <span m="2743300">that,</span> <span
  m="2743780">and</span> <span m="2743900">then</span> <span
  m="2744050">I'll</span> <span m="2744200">slow</span> <span
  m="2744500">down,</span> <span m="2745220">as</span> <span
  m="2745490">A</span> <span m="2746060">equal</span> <span m="2746930">x</span>
  <span m="2747800">lambda</span> <span m="2748670">x</span> <span
  m="2749030">inverse.</span></p><p><span m="2758120">Really,</span> <span
  m="2758570">this</span> <span m="2758810">is</span> <span
  m="2758960">bringing</span> <span m="2759290">it</span> <span
  m="2759380">all</span> <span m="2759560">together</span> <span
  m="2760040">in</span> <span m="2760130">a</span> <span
  m="2760190">simple,</span> <span m="2760970">small</span> <span
  m="2761390">formula.</span> <span m="2762740">It's</span> <span
  m="2762950">telling</span> <span m="2763400">us</span> <span
  m="2764480">that</span> <span m="2764720">A</span> <span m="2765050">is</span>
  <span m="2765170">similar</span> <span m="2765650">to</span> <span
  m="2765800">lambda.</span> <span m="2767360">It's</span> <span
  m="2767540">telling</span> <span m="2767960">us</span> <span
  m="2768140">the</span> <span m="2768260">matrix</span> <span
  m="2768860">M,</span> <span m="2769250">that</span> <span
  m="2769400">does</span> <span m="2769670">the</span> <span
  m="2769820">job--</span> <span m="2770360">it's</span> <span
  m="2770600">a</span> <span m="2770660">matrix</span> <span
  m="2771140">of</span> <span m="2771290">eigenvectors.</span> <span
  m="2773390">And</span> <span m="2774950">so</span> <span
  m="2775220">it's</span> <span m="2775850">like</span> <span
  m="2776060">a</span> <span m="2776150">shorthand</span> <span
  m="2776840">way</span> <span m="2777380">to</span> <span
  m="2778400">write</span> <span m="2780680">the</span> <span
  m="2780800">main</span> <span m="2781130">fact</span> <span
  m="2781580">about</span> <span m="2781880">eigenvalues</span> <span
  m="2782660">and</span> <span m="2782760">eigenvectors.</span> <span
  m="2784390">What</span> <span m="2784880">about</span> <span
  m="2785360">A</span> <span m="2785660">squared?</span> <span
  m="2786470">Can</span> <span m="2786680">I</span> <span m="2786830">go</span>
  <span m="2787040">back</span> <span m="2787400">to</span> <span
  m="2787580">the</span> <span m="2787730">very</span> <span
  m="2788090">first--</span> <span m="2788840">I</span> <span
  m="2788930">see</span> <span m="2789190">time</span> <span
  m="2789590">is</span> <span m="2789770">close</span> <span
  m="2790280">to</span> <span m="2790400">the</span> <span
  m="2790580">end</span> <span m="2790820">here.</span> <span
  m="2791510">What</span> <span m="2791720">about</span> <span
  m="2792020">A</span> <span m="2792230">squared?</span> <span
  m="2793850">What</span> <span m="2794090">are</span> <span
  m="2794150">the</span> <span m="2794330">eigenvectors</span> <span
  m="2795260">of</span> <span m="2795380">A</span> <span
  m="2795590">squared?</span> <span m="2796810">What</span> <span
  m="2796990">are</span> <span m="2797090">the</span> <span
  m="2797270">eigenvalues</span> <span m="2798200">of</span> <span
  m="2798350">A</span> <span m="2798530">squared?</span> <span
  m="2799410">That's</span> <span m="2799880">like</span> <span
  m="2800210">the</span> <span m="2800360">whole</span> <span
  m="2800600">point</span> <span m="2800930">of</span> <span
  m="2801050">eigenvalues.</span></p><p><span m="2802700">Well,</span> <span
  m="2803030">or</span> <span m="2803180">I</span> <span
  m="2803330">could</span> <span m="2803480">just</span> <span
  m="2803690">square</span> <span m="2804140">that</span> <span
  m="2804440">stupid</span> <span m="2804860">thing.</span> <span
  m="2805160">X</span> <span m="2805640">lambda,</span> <span
  m="2806360">x</span> <span m="2806690">inverse,</span> <span
  m="2807710">x</span> <span m="2808070">lambda,</span> <span
  m="2808580">x</span> <span m="2808910">inverse.</span> <span
  m="2810140">And</span> <span m="2810470">what</span> <span
  m="2810680">have</span> <span m="2810800">I</span> <span
  m="2810920">got?</span> <span m="2812600">X</span> <span
  m="2812870">inverse,</span> <span m="2813320">x</span> <span
  m="2813560">in</span> <span m="2813680">the</span> <span
  m="2813770">middle</span> <span m="2814160">is--</span></p><p><span
  m="2814730">AUDIENCE:</span> <span m="2814940">Identity.</span></p><p><span
  m="2815570">GILBERT STRANG:</span> <span m="2815765">Identity.</span> <span
  m="2818220">So</span> <span m="2818330">I</span> <span m="2818390">have</span>
  <span m="2818540">x,</span> <span m="2820100">lambda</span> <span
  m="2820550">squared,</span> <span m="2821360">x</span> <span
  m="2821660">inverse.</span> <span m="2823010">And</span> <span
  m="2823190">to</span> <span m="2823340">me</span> <span m="2824060">and</span>
  <span m="2824240">to</span> <span m="2824390">you</span> <span
  m="2824720">that</span> <span m="2824990">says,</span> <span
  m="2826130">the</span> <span m="2826250">eigenvalues</span> <span
  m="2826910">have</span> <span m="2827000">been</span> <span
  m="2827210">squared.</span> <span m="2827810">The</span> <span
  m="2827990">eigenvectors</span> <span m="2828770">didn't</span> <span
  m="2829040">change.</span> <span m="2830840">Yeah.</span> <span
  m="2831740">OK.</span> <span m="2832300">And</span> <span
  m="2832430">now</span> <span m="2832670">finally,</span> <span
  m="2833330">last</span> <span m="2833750">breath</span> <span
  m="2834260">is,</span> <span m="2835040">what</span> <span
  m="2835250">if</span> <span m="2835390">the</span> <span
  m="2835490">matrix</span> <span m="2836060">is</span> <span
  m="2836210">symmetric?</span> <span m="2838280">Then</span> <span
  m="2838550">we</span> <span m="2838700">have</span> <span
  m="2838880">different</span> <span m="2839240">letters.</span> <span
  m="2839870">That's</span> <span m="2840110">the</span> <span
  m="2840200">only--</span> <span m="2841040">that's</span> <span
  m="2841610">the</span> <span m="2842260">significant</span> <span
  m="2842900">change.</span> <span m="2843850">The</span> <span
  m="2844080">eigenvector</span> <span m="2844970">matrix</span> <span
  m="2845630">is</span> <span m="2845840">now</span> <span m="2847030">an</span>
  <span m="2847400">orthogonal</span> <span m="2848240">matrix.</span> <span
  m="2850310">I'm</span> <span m="2850770">coming</span> <span
  m="2851100">back</span> <span m="2851370">to</span> <span
  m="2851520">the</span> <span m="2851760">key</span> <span
  m="2852120">fact</span> <span m="2852590">of</span> <span
  m="2852780">what</span> <span m="2853350">makes</span> <span
  m="2853620">symmetric--</span> <span m="2854850">how</span> <span
  m="2855060">do</span> <span m="2855240">I</span> <span
  m="2855360">read--</span> <span m="2855930">how</span> <span
  m="2856080">do</span> <span m="2856200">I</span> <span m="2856290">see</span>
  <span m="2856590">symmetric</span> <span m="2857280">helping</span> <span
  m="2857700">me</span> <span m="2857940">in</span> <span m="2858090">the</span>
  <span m="2858540">eigenvector</span> <span m="2859350">and</span> <span
  m="2859470">eigenvalue</span> <span m="2860130">world?</span></p><p><span
  m="2861180">Well,</span> <span m="2861450">it</span> <span
  m="2861600">tells</span> <span m="2861990">me</span> <span
  m="2862200">that</span> <span m="2862410">the</span> <span
  m="2862590">eigenvectors</span> <span m="2865130">are</span> <span
  m="2865370">orthogonal.</span> <span m="2866960">So</span> <span
  m="2867170">the</span> <span m="2867320">x</span> <span m="2867710">is</span>
  <span m="2868040">Q.</span> <span m="2870170">The</span> <span
  m="2870320">eigenvalues</span> <span m="2871460">are</span> <span
  m="2871670">real.</span> <span m="2873140">And</span> <span
  m="2873470">the</span> <span m="2873620">eigenvectors</span> <span
  m="2874640">is</span> <span m="2874820">x</span> <span
  m="2875150">inverse.</span> <span m="2876880">But</span> <span
  m="2877100">now</span> <span m="2877490">I'm</span> <span
  m="2877670">going</span> <span m="2877770">to</span> <span
  m="2877940">make</span> <span m="2878210">those</span> <span
  m="2878770">eigenvectors</span> <span m="2879800">unit</span> <span
  m="2880430">vectors.</span> <span m="2880910">I'm</span> <span
  m="2881030">going</span> <span m="2881150">to</span> <span
  m="2881270">normalize</span> <span m="2882080">it.</span> <span
  m="2882230">So</span> <span m="2882850">I'm</span> <span
  m="2883040">really</span> <span m="2883430">allowing--</span> <span
  m="2884330">I</span> <span m="2884480">have</span> <span m="2884690">an</span>
  <span m="2884810">orthogonal</span> <span m="2885500">matrix</span> <span
  m="2886100">Q.</span> <span m="2886820">So</span> <span m="2887090">I</span>
  <span m="2887180">have</span> <span m="2887360">a</span> <span
  m="2887420">different</span> <span m="2887780">way</span> <span
  m="2888020">to</span> <span m="2888440">write</span> <span
  m="2888680">this,</span> <span m="2889010">and</span> <span
  m="2889130">this</span> <span m="2889340">is</span> <span
  m="2889550">the</span> <span m="2889760">end</span> <span
  m="2889940">of</span> <span m="2890000">the--</span> <span
  m="2890780">today's</span> <span m="2891260">class.</span> <span
  m="2892370">Q</span> <span m="2893060">lambda.</span> <span
  m="2895430">And</span> <span m="2896600">what</span> <span
  m="2896840">can</span> <span m="2897080">you</span> <span
  m="2897200">tell</span> <span m="2897410">me</span> <span
  m="2897560">about</span> <span m="2897830">Q</span> <span
  m="2898140">inverse?</span></p><p><span m="2898640">AUDIENCE:</span> <span
  m="2898802">It's</span> <span m="2898965">Q</span> <span
  m="2899290">transpose.</span></p><p><span m="2899480">GILBERT STRANG:</span>
  <span m="2899660">It's</span> <span m="2899840">Q</span> <span
  m="2900050">transpose.</span> <span m="2900630">Thanks.</span> <span
  m="2901130">So</span> <span m="2901340">that</span> <span
  m="2901520">was</span> <span m="2901700">the</span> <span
  m="2901790">last</span> <span m="2902180">lecture.</span> <span
  m="2903240">So</span> <span m="2903410">now</span> <span
  m="2904430">the</span> <span m="2904580">orthogonal</span> <span
  m="2905240">lecture</span> <span m="2905840">is</span> <span
  m="2906920">coming</span> <span m="2907280">up</span> <span
  m="2907490">at</span> <span m="2907580">the</span> <span
  m="2907730">last</span> <span m="2908120">second</span> <span
  m="2908660">of</span> <span m="2908840">the</span> <span
  m="2909440">symmetric</span> <span m="2910040">matrices</span> <span
  m="2910760">lecture.</span> <span m="2911600">And</span> <span
  m="2911720">this</span> <span m="2912320">has</span> <span
  m="2912590">the</span> <span m="2912710">name</span> <span
  m="2913190">spectral</span> <span m="2913940">theorem,</span> <span
  m="2915380">which</span> <span m="2915620">I'll</span> <span
  m="2915710">just</span> <span m="2915980">put</span> <span
  m="2916250">there.</span> <span m="2920560">And</span> <span
  m="2920920">the</span> <span m="2922390">whole</span> <span
  m="2922660">point</span> <span m="2923050">is</span> <span
  m="2923350">that</span> <span m="2925860">it</span> <span
  m="2926080">tells</span> <span m="2926440">you</span> <span
  m="2926640">what</span> <span m="2926880">every</span> <span
  m="2927070">symmetric</span> <span m="2927640">matrix</span> <span
  m="2928150">looks</span> <span m="2928420">like--</span> <span
  m="2930430">orthogonal</span> <span m="2931350">eigenvectors,</span> <span
  m="2932800">real</span> <span m="2933160">eigenvalues.</span></p>
embedded_media:
  - uid: b7ad691d861452e61e00181876b578fb
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: k095NdrHxY4
  - uid: 1010d661ca46cc68bd98fa5ec2915e81
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/k095NdrHxY4/default.jpg'
  - uid: ea5a5278c3ce64e1fbbd6b8eac00d856
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: k095NdrHxY4
  - uid: 5a1c4470b706dd88d805b50c33af3884
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: k095NdrHxY4.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-4-eigenvalues-and-eigenvectors/k095NdrHxY4.srt
  - uid: a79157d515aaa07ade32a04e56ad8d1a
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: k095NdrHxY4.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-4-eigenvalues-and-eigenvectors/k095NdrHxY4.pdf
  - uid: 7673005709766386156bf1e0463642ad
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 5b4c16152e4cf25ee0002d79d2477fb1
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: b86ddb8fe5ef3caa93eaad99d5672124
    parent_uid: 8540e74dad3d88091ed4aa04d359c63d
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture04_300k.mp4'
type: courses
layout: video
---
