---
title: 'Recitation 4: Randomization: Randomized Median'
uid: ea756b222893f3085b773e01a5ad83b7
parent_uid: 8c671299aae36eba669ca13490c21dec
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-4-randomization-randomized-median
short_url: recitation-4-randomization-randomized-median
inline_embed_id: '38278698recitation4:randomization:randomizedmedian2463793'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to
  Randomized Select and Randomized Quicksort are discussed.</p>
  <p><strong>Instructors:</strong> Ling Ren</p>
related_resources_text: ''
transcript: >-
  <p><span m="60">The</span> <span m="190">following</span> <span
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
  <span m="14460">courses,</span> <span m="15560">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17260">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21500">LING REN: So</span> <span m="21740">today,</span> <span
  m="22040">we're</span> <span m="22200">going</span> <span m="22410">to</span>
  <span m="22680">analyze</span> <span m="23770">two</span> <span
  m="24250">random</span> <span m="24560">algorithms</span> <span
  m="25030">we've</span> <span m="25420">seen</span> <span m="25970">in</span>
  <span m="26950">the</span> <span m="26990">last</span> <span
  m="27240">lecture,</span> <span m="29000">randomized</span> <span
  m="29480">median</span> <span m="29910">and</span> <span
  m="30650">randomized</span> <span m="31250">quick</span> <span
  m="31450">sort.</span> <span m="31720">But</span> <span
  m="32910">before</span> <span m="33250">I</span> <span m="33350">go</span>
  <span m="33520">into</span> <span m="33750">that,</span> <span
  m="35480">I'd</span> <span m="35700">like</span> <span m="35920">to</span>
  <span m="36250">make</span> <span m="36490">a</span> <span
  m="36580">correction</span> <span m="37370">in</span> <span
  m="38100">problem</span> <span m="38420">set</span> <span
  m="38640">two.</span> <span m="38990">I think</span> <span
  m="39150">you</span> <span m="39460">all got</span> <span
  m="39660">feedback</span> <span m="40030">from</span> <span
  m="40180">that.</span></p><p><span m="41490">So</span> <span
  m="41620">it's</span> <span m="42180">the</span> <span m="42380">second</span>
  <span m="42710">problem,</span> <span m="43210">where</span> <span
  m="43520">you're</span> <span m="43770">asked</span> <span m="44050">to</span>
  <span m="44460">combine</span> <span m="44900">B-trees.</span> <span
  m="51810">You</span> <span m="52030">have</span> <span m="53490">two</span>
  <span m="53650">B-trees,</span> <span m="54070">T1</span> <span
  m="54420">and</span> <span m="54550">T2</span> <span m="55060">each</span>
  <span m="55320">with</span> <span m="55540">some</span> <span
  m="55690">children.</span> <span m="56620">And</span> <span
  m="57000">we're</span> <span m="57180">giving</span> <span
  m="57330">you</span> <span m="58020">another</span> <span
  m="58250">element,</span> <span m="58640">k.</span> <span m="59050">And</span>
  <span m="59270">we</span> <span m="59380">ask</span> <span m="59630">you
  to</span> <span m="59840">combine</span> <span
  m="60200">them.</span></p><p><span m="61050">So</span> <span
  m="62250">if</span> <span m="63630">the</span> <span m="63770">two</span>
  <span m="63940">trees</span> <span m="64220">are</span> <span
  m="64410">the</span> <span m="64560">same</span> <span
  m="64750">height,</span> <span m="67010">how</span> <span m="67090">do
  you</span> <span m="67210">do</span> <span m="67320">that?</span> <span
  m="68110">Does</span> <span m="68370">anyone</span> <span
  m="68400">want</span> <span m="68610">to</span> <span m="69040">share</span>
  <span m="69480">his</span> <span m="69680">or her</span> <span
  m="69890">answer?</span> <span m="73130">Go ahead.</span></p><p><span
  m="73630">AUDIENCE: You</span> <span m="74130">put</span> <span
  m="75130">k</span> <span m="75630">in the</span> <span m="76130">middle
  of</span> <span m="76630">T1 and</span> <span m="77130">T2.</span> <span
  m="77630">And</span> <span m="78630">then</span> <span m="79130">you
  can</span> <span m="79630">split.</span></p><p><span m="80130">LING REN:
  Yeah,</span> <span m="80270">exactly.</span> <span m="80770">So</span> <span
  m="80950">you</span> <span m="81100">put</span> <span m="81450">k</span> <span
  m="81700">here.</span> <span m="82780">And if</span> <span
  m="83130">this</span> <span m="83300">is</span> <span m="83440">too</span>
  <span m="83580">full,</span> <span m="83820">you</span> <span
  m="84000">split.</span> <span m="85190">So</span> <span m="86360">why</span>
  <span m="86580">do</span> <span m="86740">I</span> <span m="86860">have</span>
  <span m="87070">to</span> <span m="87230">do</span> <span
  m="87360">this?</span> <span m="88250">Can</span> <span m="88610">I</span>
  <span m="88710">simply</span> <span m="90980">just</span> <span
  m="91210">make</span> <span m="91870">k</span> <span m="92070">my new
  root</span> <span m="94370">and</span> <span m="94550">do</span> <span
  m="94650">this?</span> <span m="98360">Go ahead.</span></p><p><span
  m="98840">AUDIENCE: Because</span> <span m="99320">T1 and</span> <span
  m="99800">T2</span> <span m="100280">don't have to</span> <span m="100760">be
  valid</span> <span m="101240">like</span> <span m="101720">internal</span>
  <span m="102200">[? modular ?]</span> <span
  m="102445">nodes.</span></p><p><span m="102690">LING REN: Yeah,</span> <span
  m="103040">exactly.</span> <span m="103580">So</span> <span
  m="103900">for</span> <span m="104010">B-tree,</span> <span
  m="104540">the</span> <span m="104630">requirement</span> <span
  m="105180">on</span> <span m="105360">the</span> <span m="105430">root</span>
  <span m="106040">is</span> <span m="106210">slightly</span> <span
  m="106530">different</span> <span m="107660">from</span> <span
  m="107880">the</span> <span m="107970">requirements</span> <span
  m="108380">for</span> <span m="108460">the</span> <span m="108540">rest</span>
  <span m="108730">of</span> <span m="108800">the</span> <span
  m="108890">nodes.</span> <span m="109240">To</span> <span
  m="109520">this</span> <span m="110180">may</span> <span
  m="110310">have</span> <span m="110500">too</span> <span m="110670">few</span>
  <span m="110860">children.</span> <span m="111360">It</span> <span
  m="111750">is</span> <span m="111930">not</span> <span m="112140">a</span>
  <span m="112380">valid</span> <span m="113410">node.</span> <span
  m="115050">It's</span> <span m="115200">not</span> <span m="115370">a
  valid</span> <span m="115870">internal</span> <span
  m="116290">node.</span></p><p><span m="116560">But</span> <span
  m="117360">our</span> <span m="117570">solution</span> <span
  m="118030">actually</span> <span m="118360">made</span> <span
  m="118560">a</span> <span m="118610">mistake</span> <span m="119610">in</span>
  <span m="120330">the</span> <span m="120460">second</span> <span
  m="120820">part.</span> <span m="121770">In</span> <span m="121890">the</span>
  <span m="121970">second</span> <span m="122290">part,</span> <span
  m="122660">we're</span> <span m="122830">saying</span> <span
  m="123460">so</span> <span m="123950">T1</span> <span m="124330">and</span>
  <span m="124510">T2,</span> <span m="126480">their</span> <span
  m="126660">heights</span> <span m="127200">are</span> <span
  m="128289">different</span> <span m="128610">by</span> <span
  m="128729">1.</span> <span m="129600">Our</span> <span
  m="129800">solution</span> <span m="130240">says</span> <span
  m="130830">put</span> <span m="130889">k</span> <span m="131110">here</span>
  <span m="131870">and</span> <span m="132290">make</span> <span
  m="132470">a</span> <span m="132540">pointer.</span> <span
  m="134170">Exactly</span> <span m="134570">the</span> <span
  m="134640">same</span> <span m="134830">problem.</span></p><p><span
  m="136580">Does</span> <span m="136730">everyone</span> <span
  m="136940">see</span> <span m="137040">that?</span> <span m="138350">So
  this</span> <span m="138610">may</span> <span m="138730">not</span> <span
  m="138960">be</span> <span m="139110">a</span> <span m="139380">valid</span>
  <span m="139880">internal node.</span> <span m="141250">So</span> <span
  m="141480">what's</span> <span m="141670">the</span> <span
  m="141790">correct</span> <span m="142040">solution?</span></p><p><span
  m="144240">You</span> <span m="144370">put</span> <span m="144610">k</span>
  <span m="144790">here</span> <span m="145920">and</span> <span
  m="146290">combine</span> <span m="146720">it</span> <span
  m="147020">with</span> <span m="147350">the</span> <span
  m="147840">last</span> <span m="148450">child</span> <span
  m="149100">of</span> <span m="149240">T1.</span> <span m="149950">And</span>
  <span m="150090">then</span> <span m="150380">you</span> <span
  m="150560">may</span> <span m="150730">have</span> <span m="150880">to</span>
  <span m="150990">split and</span> <span m="151320">split again.</span> <span
  m="152540">OK.</span> <span m="153480">Everyone</span> <span
  m="153940">happy</span> <span m="154120">with</span> <span
  m="154230">that?</span></p><p><span m="159210">Now,</span> <span
  m="159290">today,</span> <span m="159930">we're</span> <span
  m="160160">going</span> <span m="160360">to</span> <span
  m="160470">look</span> <span m="160650">into</span> <span
  m="161200">randomization</span> <span m="165260">specifically</span> <span
  m="166200">we</span> <span m="166320">have</span> <span m="166470">seen</span>
  <span m="166770">two</span> <span m="166980">algorithms</span> <span
  m="167450">in</span> <span m="167590">class.</span> <span
  m="170560">I'll</span> <span m="170690">just</span> <span
  m="172110">call</span> <span m="172280">them</span> <span
  m="172640">quick</span> <span m="172880">find</span> <span
  m="174244">and</span> <span m="175160">quick sort.</span> <span
  m="183090">So</span> <span m="183620">quick</span> <span
  m="183820">find</span> <span m="184190">is</span> <span m="184440">a</span>
  <span m="184680">slightly</span> <span m="185180">generalized</span> <span
  m="185710">version</span> <span m="186310">of</span> <span
  m="186740">medium</span> <span m="187100">finding.</span></p><p><span
  m="188570">In</span> <span m="188940">the</span> <span m="189310">very</span>
  <span m="189730">first</span> <span m="190610">lecture</span> <span
  m="191100">and</span> <span m="191350">recitation,</span> <span
  m="192060">we</span> <span m="192150">have</span> <span m="192320">seen</span>
  <span m="193320">a</span> <span m="193450">non-randomized</span> <span
  m="194270">version</span> <span m="194580">of</span> <span m="194680">quick
  sort.</span> <span m="195990">So</span> <span m="196280">we</span> <span
  m="197530">divide</span> <span m="197860">them</span> <span
  m="198060">into</span> <span m="198310">groups</span> <span
  m="198650">of</span> <span m="198800">five.</span> <span m="206150">And</span>
  <span m="206320">we</span> <span m="206460">find</span> <span
  m="206790">a</span> <span m="206830">medium</span> <span m="207260">of</span>
  <span m="207390">each</span> <span m="207920">group.</span> <span
  m="208540">And</span> <span m="208810">then</span> <span
  m="209250">find</span> <span m="209500">the</span> <span
  m="209570">median</span> <span m="209870">of</span> <span
  m="210170">the</span> <span m="210270">median.</span></p><p><span
  m="211650">Depending</span> <span m="212120">on</span> <span
  m="212700">whether</span> <span m="212930">you</span> <span
  m="213040">are</span> <span m="213130">smaller</span> <span
  m="213720">or</span> <span m="213870">larger,</span> <span
  m="214860">we</span> <span m="214910">drew</span> <span m="215240">a</span>
  <span m="215630">funny</span> <span m="216220">subproblem</span> <span
  m="216730">like</span> <span m="216950">this.</span> <span
  m="218070">Anyone</span> <span m="218230">remember</span> <span
  m="218580">that?</span> <span m="219470">And</span> <span m="219610">we</span>
  <span m="219740">analyzed</span> <span m="220140">this</span> <span
  m="220320">runtime,</span> <span m="221690">where our</span> <span
  m="222050">recursion</span> <span m="222910">was</span> <span
  m="223020">one</span> <span m="223280">fifth</span> <span
  m="223540">plus</span> <span m="224070">7</span> <span m="224390">over</span>
  <span m="224560">10</span> <span m="224890">or</span> <span
  m="225010">something</span> <span m="225270">like</span> <span
  m="225430">that.</span> <span m="226080">And we</span> <span
  m="226220">show</span> <span m="226480">it's</span> <span
  m="226640">the</span> <span m="226710">worst</span> <span
  m="226920">case</span> <span m="227130">O of n.</span></p><p><span
  m="228840">So</span> <span m="229030">that's</span> <span m="229230">a
  smart</span> <span m="229520">algorithm,</span> <span m="230490">I'll</span>
  <span m="230630">give</span> <span m="230780">you</span> <span
  m="230830">that.</span> <span m="231200">But</span> <span
  m="231710">it's</span> <span m="232260">just</span> <span
  m="232540">complicated.</span> <span m="234010">You</span> <span
  m="234130">have</span> <span m="234310">to</span> <span
  m="238150">divide</span> <span m="238430">them</span> <span
  m="238550">into</span> <span m="238790">groups</span> <span
  m="239340">and</span> <span m="239600">do,</span> <span
  m="240450">well,</span> <span m="241390">several</span> <span
  m="241820">recursive</span> <span m="242230">course.</span></p><p><span
  m="243160">And</span> <span m="243380">also,</span> <span
  m="244230">let</span> <span m="244350">me</span> <span
  m="244460">digress</span> <span m="244850">a</span> <span
  m="244890">little</span> <span m="245080">bit,</span> <span
  m="246010">there's</span> <span m="246410">a</span> <span
  m="246460">very</span> <span m="246690">interesting</span> <span
  m="247060">point</span> <span m="247520">regarding</span> <span
  m="248000">this</span> <span m="249780">worst</span> <span
  m="249980">case</span> <span m="250210">O of</span> <span m="250380">n</span>
  <span m="250600">algorithm.</span> <span m="251920">Has</span> <span
  m="252090">anyone</span> <span m="252400">wondered</span> <span
  m="252840">why</span> <span m="253450">we</span> <span m="253630">use</span>
  <span m="253870">groups</span> <span m="254120">of</span> <span
  m="254270">five?</span> <span m="255900">Why</span> <span
  m="256019">not</span> <span m="256260">groups</span> <span
  m="256490">of</span> <span m="256610">three?</span></p><p><span
  m="263330">Algorithms</span> <span m="263730">should</span> <span
  m="263920">work</span> <span m="264120">in</span> <span m="264190">the</span>
  <span m="264270">same</span> <span m="264460">way,</span> <span
  m="265020">right?</span> <span m="266390">If</span> <span m="266540">we</span>
  <span m="266700">take</span> <span m="267060">out this</span> <span
  m="267250">first</span> <span m="267530">row</span> <span
  m="268090">and</span> <span m="268260">this</span> <span
  m="268420">last</span> <span m="268690">row,</span> <span m="270070">we</span>
  <span m="270170">can</span> <span m="270310">still</span> <span
  m="270650">find</span> <span m="270950">the</span> <span
  m="271030">median,</span> <span m="271510">which</span> <span
  m="271700">is</span> <span m="271860">just</span> <span m="272070">a</span>
  <span m="272150">second</span> <span m="272530">element</span> <span
  m="272670">in</span> <span m="272790">each</span> <span
  m="273050">group</span> <span m="273320">and</span> <span
  m="273500">find</span> <span m="273670">the</span> <span m="273720">median
  of</span> <span m="274130">the</span> <span m="274230">median.</span> <span
  m="274800">We</span> <span m="274900">still</span> <span
  m="275170">have</span> <span m="275410">a subproblem</span> <span
  m="276470">that</span> <span m="276850">looks</span> <span
  m="277030">like</span> <span m="277210">this.</span> <span
  m="279390">Exercise.</span></p><p><span m="280500">And</span> <span
  m="280750">it</span> <span m="280840">turns</span> <span m="281060">out</span>
  <span m="281800">if</span> <span m="281930">we</span> <span
  m="282070">use</span> <span m="282250">groups</span> <span
  m="282490">of</span> <span m="282620">three,</span> <span
  m="283300">when</span> <span m="283530">we</span> <span
  m="283650">solve</span> <span m="283930">the</span> <span
  m="284010">recursion,</span> <span m="284640">it</span> <span
  m="284760">doesn't</span> <span m="285000">solve</span> <span
  m="285220">to</span> <span m="285750">O of</span> <span m="285900">n.</span>
  <span m="286280">It</span> <span m="286690">solves to</span> <span
  m="287080">something</span> <span m="287400">else.</span> <span
  m="288700">OK.</span> <span m="289350">Now,</span> <span m="290910">end</span>
  <span m="291120">of</span> <span m="291210">digression.</span></p><p><span
  m="291770">Let's</span> <span m="292130">get</span> <span
  m="292470">back</span> <span m="292690">to</span> <span m="293440">the</span>
  <span m="293540">randomized</span> <span m="293980">version.</span> <span
  m="296180">So</span> <span m="296340">how</span> <span m="296460">does</span>
  <span m="296630">the</span> <span m="296720">randomized</span> <span
  m="297170">version</span> <span m="297420">work?</span> <span
  m="298110">It's</span> <span m="298290">that</span> <span
  m="298460">much</span> <span m="298700">simpler.</span></p><p><span
  m="299440">We</span> <span m="299560">have</span> <span m="299740">an</span>
  <span m="299800">array.</span> <span m="302130">Let</span> <span
  m="302260">me</span> <span m="302430">call</span> <span m="302710">it</span>
  <span m="305340">Find</span> <span m="306610">in</span> <span
  m="306710">array</span> <span m="307240">A,</span> <span
  m="308710">which</span> <span m="309160">is</span> <span m="309350">of</span>
  <span m="309480">size</span> <span m="309810">n.</span> <span
  m="311070">And</span> <span m="311310">we</span> <span m="311410">want</span>
  <span m="311580">to</span> <span m="311750">find</span> <span
  m="312250">i-th</span> <span m="313130">largest</span> <span
  m="313950">or</span> <span m="314110">smallest</span> <span
  m="314900">element</span> <span m="315330">in</span> <span
  m="315490">it.</span></p><p><span m="319940">So</span> <span
  m="320245">what</span> <span m="320550">we're</span> <span
  m="320860">going</span> <span m="321020">to</span> <span m="321110">do</span>
  <span m="321620">is</span> <span m="321960">that</span> <span
  m="322360">we'll</span> <span m="322560">pick</span> <span m="322790">a</span>
  <span m="322880">random</span> <span m="323280">element,</span> <span
  m="324180">x,</span> <span m="326080">in</span> <span m="326220">this</span>
  <span m="326400">array.</span> <span m="328530">And</span> <span
  m="328700">then</span> <span m="331820">we'll</span> <span
  m="332220">put</span> <span m="332730">all</span> <span m="333000">the</span>
  <span m="334180">smaller</span> <span m="335950">elements</span> <span
  m="336320">on</span> <span m="336430">this</span> <span m="336620">side</span>
  <span m="337270">and</span> <span m="337420">all</span> <span
  m="337620">the</span> <span m="337780">larger</span> <span
  m="338070">elements</span> <span m="338500">on</span> <span
  m="338610">that</span> <span m="338800">side.</span> <span
  m="344730">Now,</span> <span m="346910">because</span> <span
  m="347110">I'm</span> <span m="347260">picking</span> <span
  m="347550">the</span> <span m="347600">random</span> <span
  m="347900">one,</span> <span m="348160">so</span> <span m="348310">this</span>
  <span m="348540">x</span> <span m="348800">can</span> <span
  m="348950">be</span> <span m="349070">anywhere.</span> <span
  m="350440">If</span> <span m="350800">it</span> <span m="350960">is</span>
  <span m="352220">the</span> <span m="352390">k-th</span> <span
  m="353560">smallest</span> <span m="354220">element</span> <span
  m="356540">from</span> <span m="356730">the</span> <span
  m="356820">left,</span> <span m="357880">then</span> <span
  m="358470">what</span> <span m="358620">do</span> <span m="358690">I</span>
  <span m="358770">do</span> <span m="358890">next?</span> <span
  m="365240">My</span> <span m="365360">goal</span> <span m="365690">is</span>
  <span m="365820">to</span> <span m="365950">find</span> <span m="366250">out
  the</span> <span m="366330">i-th</span> <span m="366950">smallest</span> <span
  m="367280">element</span> <span m="368210">in</span> <span
  m="368450">this</span> <span m="368710">array,</span> <span
  m="368990">A.</span></p><p><span m="378466">AUDIENCE: If</span> <span
  m="378950">A</span> <span m="379434">is</span> <span m="379918">longer</span>
  <span m="380402">than i</span> <span m="380886">then</span> <span
  m="381854">[INAUDIBLE].</span></p><p><span m="383330">LING REN: OK.</span>
  <span m="384484">If</span> <span m="385980">i</span> <span
  m="386200">is</span> <span m="386460">less</span> <span m="386690">than</span>
  <span m="386890">k,</span> <span m="390320">then</span> <span
  m="390640">my</span> <span m="390800">element</span> <span
  m="391290">is</span> <span m="391500">on</span> <span m="391640">this</span>
  <span m="391830">side,</span> <span m="392710">right?</span> <span
  m="394220">So</span> <span m="394340">I</span> <span m="394480">should</span>
  <span m="394890">find--</span> <span m="395920">OK,</span> <span
  m="396180">let</span> <span m="396330">me</span> <span
  m="396530">define</span> <span m="397040">this</span> <span
  m="397210">to</span> <span m="397300">be the</span> <span
  m="397550">left</span> <span m="398170">array,</span> <span
  m="398450">this</span> <span m="398590">to</span> <span m="398690">be</span>
  <span m="398780">the</span> <span m="398880">right</span> <span
  m="399060">array.</span> <span m="399220">I</span> <span
  m="399400">should</span> <span m="399770">find</span> <span
  m="401020">in</span> <span m="401160">the</span> <span m="401230">left</span>
  <span m="401430">array,</span> <span m="402470">what</span> <span
  m="402660">is</span> <span m="402790">its</span> <span m="402930">size?</span>
  <span m="403580">It's</span> <span m="404090">k</span> <span
  m="404160">minus</span> <span m="404480">1.</span> <span
  m="407190">Make</span> <span m="407360">sense?</span></p><p><span
  m="407730">This</span> <span m="407860">is</span> <span m="408030">k</span>
  <span m="408110">minus</span> <span m="408410">1.</span> <span
  m="408730">And</span> <span m="408950">that</span> <span m="409160">is</span>
  <span m="409520">n</span> <span m="409830">minus</span> <span
  m="410190">k</span> <span m="411000">plus</span> <span m="411200">one</span>
  <span m="411400">element</span> <span m="411680">in</span> <span
  m="411780">the</span> <span m="411830">middle.</span> <span
  m="413376">And</span> <span m="418060">so</span> <span
  m="418260">what's</span> <span m="418460">the</span> <span
  m="418950">last</span> <span m="419330">argument</span> <span
  m="420170">in</span> <span m="420270">that</span> <span
  m="420450">function</span> <span m="420790">called?</span> <span
  m="423628">It's</span> <span m="424101">i.</span> <span m="425480">So</span>
  <span m="426180">on</span> <span m="426290">the</span> <span
  m="426380">other</span> <span m="426530">hand,</span> <span
  m="427800">if</span> <span m="427960">i</span> <span m="428320">is</span>
  <span m="428760">greater</span> <span m="429010">than</span> <span
  m="429190">k,</span> <span m="430250">then</span> <span m="430470">I</span>
  <span m="430560">should</span> <span m="430800">go</span> <span
  m="430940">to</span> <span m="431100">my</span> <span m="431240">right</span>
  <span m="431500">half.</span> <span m="433100">Its</span> <span
  m="433320">problem</span> <span m="433680">size</span> <span
  m="434080">is</span> <span m="435250">n</span> <span m="435380">minus</span>
  <span m="435680">k.</span> <span m="437670">So</span> <span
  m="437860">what's</span> <span m="438050">the</span> <span
  m="438160">last</span> <span m="438380">argument?</span></p><p><span
  m="440740">AUDIENCE: i</span> <span m="441230">minus</span> <span
  m="441720">k.</span></p><p><span m="448640">LING REN: Agree?</span> <span
  m="450630">i</span> <span m="450850">minus</span> <span m="451310">k.</span>
  <span m="454990">OK.</span> <span m="455590">So,</span> <span m="455930">of
  course,</span> <span m="456120">if</span> <span m="456490">i</span> <span
  m="456730">is</span> <span m="456870">equal</span> <span
  m="457200">than</span> <span m="457400">k,</span> <span m="458260">then</span>
  <span m="458410">we</span> <span m="458510">just</span> <span
  m="458710">return</span> <span m="459086">x.</span> <span
  m="463020">Now,</span> <span m="463420">obviously,</span> <span
  m="466150">this</span> <span m="466450">algorithm's</span> <span
  m="467100">runtime</span> <span m="467570">depends</span> <span
  m="468090">on</span> <span m="468880">our</span> <span m="469190">luck,</span>
  <span m="469710">depends</span> <span m="470050">on</span> <span
  m="470310">this</span> <span m="470700">choice</span> <span
  m="471010">of</span> <span m="471120">k.</span></p><p><span
  m="471940">If</span> <span m="472160">k</span> <span m="472450">is</span>
  <span m="472640">roughly</span> <span m="472990">in</span> <span
  m="473050">the</span> <span m="473120">middle,</span> <span
  m="473950">then</span> <span m="474830">we</span> <span
  m="475040">reduce</span> <span m="475410">the</span> <span
  m="475500">problem</span> <span m="475850">size</span> <span
  m="476120">by</span> <span m="476530">roughly</span> <span
  m="476850">half.</span> <span m="478640">However,</span> <span
  m="479220">if</span> <span m="479460">k</span> <span m="479760">is</span>
  <span m="480260">0</span> <span m="480610">or</span> <span
  m="481160">close</span> <span m="481450">to</span> <span m="481620">n,</span>
  <span m="481970">then</span> <span m="482120">we</span> <span
  m="482250">only</span> <span m="482480">reduce</span> <span
  m="482780">the</span> <span m="482870">problem</span> <span m="483160">size
  by</span> <span m="483670">a</span> <span m="483780">little</span> <span
  m="483940">bit.</span> <span m="485470">So</span> <span m="485820">it's</span>
  <span m="486700">impossible</span> <span m="487190">to</span> <span
  m="487280">give</span> <span m="487500">a</span> <span
  m="488510">definite</span> <span m="488880">runtime.</span></p><p><span
  m="490610">So</span> <span m="490820">what</span> <span m="491030">we</span>
  <span m="491440">opt</span> <span m="491680">to</span> <span
  m="491770">do</span> <span m="492290">in</span> <span
  m="493300">randomized</span> <span m="493760">algorithm</span> <span
  m="494340">is</span> <span m="494520">that</span> <span m="496120">we</span>
  <span m="496300">analyze</span> <span m="496970">expected</span> <span
  m="497510">runtime.</span> <span m="503780">What</span> <span
  m="503910">does</span> <span m="504060">that</span> <span
  m="504210">mean?</span> <span m="507840">So</span> <span m="508460">we</span>
  <span m="508570">can</span> <span m="508720">write</span> <span
  m="508880">the</span> <span m="508970">recursion</span> <span
  m="509470">of</span> <span m="509560">this.</span> <span
  m="510680">It's</span> <span m="510780">T of</span> <span m="510990">n</span>
  <span m="511680">equals--</span> <span m="517740">I</span> <span
  m="517860">have</span> <span m="518220">two</span> <span
  m="518370">subproblems.</span></p><p><span m="519320">One</span> <span
  m="519460">of</span> <span m="519580">them</span> <span m="519780">is</span>
  <span m="520070">T</span> <span m="520500">of</span> <span m="520700">k</span>
  <span m="520789">minus</span> <span m="521130">1.</span> <span
  m="522409">The</span> <span m="522610">other</span> <span m="522940">is</span>
  <span m="525020">T</span> <span m="525250">of</span> <span m="525790">n</span>
  <span m="525960">minus</span> <span m="526290">k.</span> <span
  m="527396">So</span> <span m="527790">which</span> <span m="528010">one</span>
  <span m="528320">should</span> <span m="528540">I</span> <span
  m="528600">put</span> <span m="528790">into</span> <span m="528920">the</span>
  <span m="529080">recursion?</span></p><p><span m="535653">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="536635">LING REN: Yeah.</span> <span
  m="537140">I</span> <span m="537570">don't</span> <span
  m="537740">know,</span> <span m="538210">right?</span> <span
  m="538750">I</span> <span m="538870">don't</span> <span m="539020">know</span>
  <span m="539160">whether</span> <span m="539440">my</span> <span
  m="539800">element</span> <span m="540160">is</span> <span
  m="540650">on</span> <span m="540780">a</span> <span m="540860">left</span>
  <span m="541100">or on</span> <span m="541310">the</span> <span
  m="541390">right.</span> <span m="541940">So</span> <span
  m="542080">I'll</span> <span m="542250">be</span> <span
  m="542370">conservative</span> <span m="543120">and</span> <span
  m="543390">take a</span> <span m="543570">max</span> <span m="544290">of
  these</span> <span m="544410">two.</span> <span m="549770">Let</span> <span
  m="549900">me</span> <span m="550410">write</span> <span m="550530">it</span>
  <span m="550610">down</span> <span m="550830">a little bit.</span></p><p><span
  m="565320">And</span> <span m="565640">I</span> <span m="565800">have</span>
  <span m="566000">some</span> <span m="566830">amount</span> <span
  m="567080">of</span> <span m="567170">work</span> <span m="567430">to</span>
  <span m="567530">do</span> <span m="568740">before</span> <span
  m="569070">I</span> <span m="569130">go</span> <span m="569320">to</span>
  <span m="569500">my</span> <span m="569730">subproblem.</span> <span
  m="573180">What's</span> <span m="573640">the</span> <span
  m="574660">complexity</span> <span m="576310">of that</span> <span
  m="576470">work?</span> <span m="578722">Go ahead.</span></p><p><span
  m="579220">AUDIENCE: [INAUDIBLE].</span></p><p><span m="580220">LING REN:
  It's</span> <span m="580430">all</span> <span m="580600">O  of n.</span> <span
  m="583140">O of</span> <span m="583390">theta</span> <span
  m="583470">n.</span> <span m="584240">Why is</span> <span
  m="584440">that?</span></p><p><span m="586064">AUDIENCE: Because</span> <span
  m="586522">you have</span> <span m="586980">to</span> <span
  m="587438">create</span> <span m="587896">the</span> <span
  m="588354">array.</span></p><p><span m="589730">LING REN: Yes.</span> <span
  m="590080">Because</span> <span m="590300">you</span> <span
  m="590440">have</span> <span m="590610">to</span> <span m="590970">scan</span>
  <span m="591260">the</span> <span m="591410">array</span> <span
  m="591570">once</span> <span m="591960">to</span> <span m="592130">put</span>
  <span m="592440">the</span> <span m="592690">smaller</span> <span
  m="593040">elements</span> <span m="593390">on</span> <span
  m="593490">one</span> <span m="593630">side</span> <span m="594010">and
  the</span> <span m="594320">larger</span> <span m="594630">elements on the
  other</span> <span m="594990">side.</span> <span m="595940">Now,</span> <span
  m="596870">this</span> <span m="598250">recurrence is</span> <span
  m="599040">impossible</span> <span m="599560">to</span> <span
  m="599640">solve,</span> <span m="599950">because</span> <span
  m="600150">I</span> <span m="600230">don't</span> <span m="600420">know</span>
  <span m="600540">what</span> <span m="600710">k</span> <span
  m="600920">is.</span> <span m="601620">So</span> <span
  m="602070">instead,</span> <span m="602450">we'll</span> <span
  m="602710">just</span> <span m="603430">calculate</span> <span
  m="604010">its</span> <span m="604380">expectation.</span></p><p><span
  m="619100">So</span> <span m="619290">the</span> <span
  m="619420">expectation</span> <span m="620460">of</span> <span
  m="620660">T</span> <span m="620870">of</span> <span m="621000">n</span> <span
  m="623470">is</span> <span m="623730">taking</span> <span
  m="624320">average</span> <span m="624960">over</span> <span
  m="625800">all</span> <span m="625980">the</span> <span
  m="626080">randomness,</span> <span m="626990">which</span> <span
  m="627270">means</span> <span m="627560">the</span> <span
  m="627680">choice</span> <span m="627970">of</span> <span m="628090">k.</span>
  <span m="629410">So</span> <span m="630600">there</span> <span
  m="630800">is</span> <span m="630890">a</span> <span
  m="630960">probability</span> <span m="632800">that</span> <span
  m="633080">my</span> <span m="633240">k</span> <span m="635680">is</span>
  <span m="635870">equal</span> <span m="636210">to</span> <span
  m="638860">j.</span> <span m="642070">If</span> <span m="642230">my</span>
  <span m="642360">k</span> <span m="642620">is</span> <span
  m="642730">equal</span> <span m="642980">to</span> <span m="643090">j,</span>
  <span m="644840">then</span> <span m="645040">I</span> <span
  m="645100">should</span> <span m="645380">take</span> <span
  m="645620">the</span> <span m="645740">maximum</span> <span
  m="646390">of--</span> <span m="648400">sorry.</span></p><p><span
  m="667480">If</span> <span m="667660">my</span> <span m="668030">k</span>
  <span m="668340">is</span> <span m="668770">equal</span> <span
  m="669020">to</span> <span m="669130">j,</span> <span m="669640">then</span>
  <span m="669830">I</span> <span m="669910">should</span> <span
  m="670690">take</span> <span m="671090">the</span> <span
  m="671180">expectation</span> <span m="671900">of</span> <span
  m="671990">the</span> <span m="672100">maximum</span> <span
  m="673230">between</span> <span m="673450">those</span> <span
  m="673640">two.</span> <span m="678100">And</span> <span
  m="678880">according</span> <span m="679050">to</span> <span
  m="679150">the</span> <span m="679280">definition</span> <span
  m="680110">of</span> <span m="680970">expectation,</span> <span
  m="681850">I</span> <span m="681970">should</span> <span m="682180">do</span>
  <span m="682330">a</span> <span m="682400">sum</span> <span
  m="683380">from</span> <span m="683710">j</span> <span
  m="683920">equals</span> <span m="684840">0--</span> <span
  m="685340">no,</span> <span m="685840">not</span> <span
  m="686340">zero.</span> <span m="687660">I'm</span> <span
  m="687840">starting</span> <span m="688180">with</span> <span
  m="688540">1</span> <span m="689530">all the</span> <span m="689610">way
  to</span> <span m="692515">n,</span> <span m="694010">right?</span> <span
  m="695900">Any</span> <span m="696050">questions</span> <span m="696390">so
  far?</span></p><p><span m="703940">Now,</span> <span
  m="704120">obviously,</span> <span m="711950">depending</span> <span
  m="712430">on</span> <span m="712590">my</span> <span m="712730">choice</span>
  <span m="712990">of</span> <span m="713130">j,</span> <span
  m="713470">sometimes</span> <span m="714130">this</span> <span
  m="714280">one</span> <span m="714450">is</span> <span
  m="714570">larger.</span> <span m="714960">Sometimes</span> <span
  m="715420">that</span> <span m="715600">one is</span> <span
  m="715910">larger.</span> <span m="718250">I'll</span> <span
  m="718540">just</span> <span m="718800">write</span> <span
  m="718980">it</span> <span m="719870">a little</span> <span
  m="720210">verbosely.</span></p><p><span m="723430">So</span> <span
  m="723990">if</span> <span m="726260">my</span> <span m="726470">j is</span>
  <span m="727680">1,</span> <span m="728760">then</span> <span
  m="728960">I</span> <span m="729060">should</span> <span
  m="729340">take</span> <span m="729580">the</span> <span
  m="730370">right</span> <span m="730600">one.</span> <span
  m="735060">Plus,</span> <span m="735810">if j</span> <span
  m="736610">is</span> <span m="736750">2,</span> <span m="737120">then</span>
  <span m="737220">I</span> <span m="737300">should</span> <span
  m="737520">take</span> <span m="737830">m</span> <span m="737980">minus</span>
  <span m="738260">2,</span> <span m="739040">so on</span> <span m="739180">and
  so</span> <span m="739620">forth, right?</span> <span m="740250">I</span>
  <span m="740740">think</span> <span m="741320">everyone</span> <span
  m="742140">gets</span> <span m="742360">this,</span> <span
  m="742570">right?</span></p><p><span m="742800">So</span> <span
  m="743070">I'll just</span> <span m="743450">directly</span> <span
  m="743540">jump</span> <span m="743780">to</span> <span m="743860">the</span>
  <span m="743950">next</span> <span m="744460">step.</span> <span
  m="763660">So</span> <span m="763880">when</span> <span m="764200">j</span>
  <span m="764490">is</span> <span m="764650">smaller</span> <span
  m="765440">than</span> <span m="765940">half</span> <span m="766510">of
  n,</span> <span m="766970">I</span> <span m="767080">will</span> <span
  m="767260">take</span> <span m="767480">the</span> <span
  m="767800">right</span> <span m="768070">one.</span> <span
  m="768640">If</span> <span m="768780">j</span> <span m="769030">is</span>
  <span m="770300">larger</span> <span m="770410">than</span> <span
  m="770660">half</span> <span m="771000">of n,</span> <span m="771250">I</span>
  <span m="771290">will</span> <span m="771430">take</span> <span
  m="772880">left</span> <span m="773010">one.</span> <span
  m="773720">And</span> <span m="773870">they</span> <span
  m="773980">happen</span> <span m="776610">to</span> <span m="776700">be</span>
  <span m="776810">symmetric.</span> <span m="777910">And</span> <span
  m="778200">what</span> <span m="778360">I</span> <span m="778440">have</span>
  <span m="778650">here</span> <span m="779110">is--</span> <span
  m="785630">everyone</span> <span m="786130">gets</span> <span
  m="786160">that?</span></p><p><span m="790270">Now,</span> <span
  m="790750">maybe</span> <span m="791140">I'm</span> <span
  m="791240">missing</span> <span m="791490">the</span> <span
  m="791580">minus</span> <span m="791860">1</span> <span
  m="792060">here.</span> <span m="794020">OK,</span> <span m="794880">I</span>
  <span m="795070">shouldn't</span> <span m="795490">sum to</span> <span
  m="795960">there.</span> <span m="798620">Sorry.</span> <span
  m="805310">I</span> <span m="805720">have</span> <span m="806060">n</span>
  <span m="806090">minus</span> <span m="806420">1,</span> <span
  m="806630">n,</span> <span m="806730">minus</span> <span m="807010">2,</span>
  <span m="807265">n</span> <span m="807520">minus</span> <span
  m="807840">3,</span> <span m="808120">all</span> <span m="808280">the</span>
  <span m="808370">way</span> <span m="808500">to</span> <span m="808650">half
  of</span> <span m="808900">n.</span> <span m="809982">But</span> <span
  m="810330">from</span> <span m="810620">there,</span> <span
  m="811130">I</span> <span m="811260">know</span> <span
  m="811410">longer</span> <span m="811820">go</span> <span
  m="811980">down.</span> <span m="812430">I</span> <span m="812610">go</span>
  <span m="812780">backwards,</span> <span m="813750">half</span> <span
  m="813930">of</span> <span m="814060">n</span> <span m="814200">plus</span>
  <span m="814440">1</span> <span m="814610">plus</span> <span
  m="814820">2</span> <span m="814940">plus</span> <span m="815590">3,</span>
  <span m="816030">all</span> <span m="816160">the</span> <span
  m="816240">way</span> <span m="816360">back</span> <span m="816610">to</span>
  <span m="818420">n</span> <span m="818540">minus</span> <span
  m="818820">1.</span> <span m="820925">Any</span> <span
  m="821350">questions</span> <span m="821680">so far?</span></p><p><span
  m="826750">Oh,</span> <span m="828090">we</span> <span
  m="828240">forgot</span> <span m="829100">our</span> <span
  m="829340">last</span> <span m="829630">term,</span> <span
  m="829910">which</span> <span m="830120">is a</span> <span
  m="830350">theta</span> <span m="830580">n.</span> <span
  m="836532">Now,</span> <span m="837030">how</span> <span m="837170">do</span>
  <span m="837240">we</span> <span m="837350">solve</span> <span
  m="837570">this?</span> <span m="843130">Any</span> <span
  m="844330">thoughts?</span> <span m="849090">This</span> <span
  m="849220">is</span> <span m="849350">a</span> <span
  m="849430">recurrence</span> <span m="850020">on</span> <span
  m="850160">the</span> <span m="850220">expectation</span> <span
  m="850960">of</span> <span m="851480">T.</span></p><p><span
  m="854940">So</span> <span m="855140">for</span> <span m="855270">this</span>
  <span m="856810">type</span> <span m="857020">of</span> <span
  m="857160">general</span> <span m="858030">recurrence,</span> <span
  m="859140">we</span> <span m="859240">don't</span> <span
  m="859390">have</span> <span m="859510">a</span> <span m="859950">very</span>
  <span m="860170">good</span> <span m="860340">way.</span> <span
  m="861480">Instead,</span> <span m="861690">what we'll</span> <span
  m="862020">do</span> <span m="862970">is</span> <span m="863150">just</span>
  <span m="863780">take</span> <span m="863980">a</span> <span
  m="864020">random</span> <span m="864330">guess,</span> <span
  m="865300">and</span> <span m="865460">then</span> <span m="865640">see</span>
  <span m="866240">if</span> <span m="867220">it</span> <span
  m="867370">is</span> <span m="867530">correct.</span> <span
  m="870840">So</span> <span m="871350">I</span> <span m="871490">don't
  really</span> <span m="871750">need</span> <span m="871900">to</span> <span
  m="871990">guess</span> <span m="872220">in</span> <span
  m="872310">this</span> <span m="872490">case,</span> <span
  m="872730">because</span> <span m="872900">I</span> <span
  m="872970">know</span> <span m="873190">it's</span> <span m="873300">O
  of</span> <span m="873520">n.</span></p><p><span m="874370">So</span> <span
  m="874770">let's</span> <span m="875040">just</span> <span
  m="876200">assume</span> <span m="877460">our</span> <span
  m="878060">expectation</span> <span m="878960">of</span> <span
  m="879090">Tn</span> <span m="880650">is</span> <span m="882750">theta</span>
  <span m="883100">of n.</span> <span m="884570">What</span> <span
  m="884700">does</span> <span m="884870">that</span> <span
  m="885030">mean</span> <span m="885190">again?</span> <span
  m="892670">It</span> <span m="892880">means</span> <span m="895330">I</span>
  <span m="895470">can</span> <span m="895700">find</span> <span
  m="896050">some</span> <span m="896280">constant,</span> <span
  m="898880">such</span> <span m="899240">that</span> <span
  m="901170">this</span> <span m="901820">expectation</span> <span
  m="902730">is</span> <span m="902960">bounded</span> <span
  m="903480">by</span> <span m="904640">a</span> <span
  m="904740">constant</span> <span m="905130">times</span> <span
  m="905390">n.</span> <span m="907770">So</span> <span m="907910">far so</span>
  <span m="908050">good?</span></p><p><span m="910590">Now,</span> <span
  m="911120">we</span> <span m="911230">can</span> <span m="911330">use</span>
  <span m="911710">induction,</span> <span m="912660">assume</span> <span
  m="913180">that</span> <span m="913410">this</span> <span
  m="913600">holds</span> <span m="914100">for</span> <span
  m="914750">everything</span> <span m="915940">up</span> <span
  m="916140">to</span> <span m="916340">n</span> <span m="916500">minus</span>
  <span m="916790">1.</span> <span m="917280">And</span> <span
  m="917410">we're</span> <span m="917530">going</span> <span
  m="917720">to</span> <span m="917820">show</span> <span m="918050">this</span>
  <span m="918840">also</span> <span m="919180">holds</span> <span
  m="919450">for</span> <span m="920376">n.</span> <span m="922810">Then</span>
  <span m="922960">we're</span> <span m="923110">done,</span> <span
  m="923290">right?</span></p><p><span m="926320">Now,</span> <span
  m="926490">we'll</span> <span m="926610">just</span> <span
  m="926800">plug</span> <span m="927020">that in.</span> <span
  m="929160">The</span> <span m="929220">expectation</span> <span
  m="930000">of</span> <span m="930120">T</span> <span m="930370">n</span> <span
  m="934660">will</span> <span m="934820">be</span> <span m="935030">less</span>
  <span m="935360">or</span> <span m="935380">equal</span> <span
  m="935670">than</span> <span m="936180">this</span> <span
  m="936540">sum</span> <span m="938840">from</span> <span
  m="940220">half</span> <span m="940530">of</span> <span m="940640">n</span>
  <span m="940910">to</span> <span m="941240">n.</span> <span
  m="949810">Right?</span> <span m="952710">Yeah, I</span> <span
  m="952900">just</span> <span m="953130">plugged</span> <span
  m="953320">that</span> <span m="953450">in.</span> <span m="954680">Of
  course,</span> <span m="955090">plus</span> <span m="955540">our</span> <span
  m="955790">theta</span> <span m="956190">n</span> <span
  m="956612">term.</span></p><p><span m="957880">Now,</span> <span
  m="960850">what's</span> <span m="961120">the</span> <span
  m="961620">sum</span> <span m="961880">of</span> <span m="962010">this</span>
  <span m="962180">guy?</span> <span m="965750">Any</span> <span
  m="966280">guesses?</span> <span m="968470">n</span> <span
  m="968610">square?</span> <span m="969110">n</span> <span
  m="969250">cube?</span> <span m="970400">or n?</span> <span
  m="972530">OK.</span> <span m="973010">It's</span> <span
  m="973190">probably</span> <span m="973630">a</span> <span
  m="973700">messy.</span></p><p><span m="976650">More</span> <span
  m="976890">cleanly,</span> <span m="977520">I</span> <span
  m="977630">can</span> <span m="977780">pull</span> <span
  m="977930">this</span> <span m="978130">B</span> <span m="978300">out.</span>
  <span m="981480">It's</span> <span m="981690">just</span> <span
  m="981900">the</span> <span m="982220">sigma</span> <span m="982660">of</span>
  <span m="983300">j</span> <span m="984800">if</span> <span m="984990">I</span>
  <span m="986080">change</span> <span m="986400">my</span> <span
  m="988970">sum,</span> <span m="991850">decrease</span> <span
  m="992250">the</span> <span m="993310">range</span> <span m="993570">of</span>
  <span m="993660">sum</span> <span m="993850">by</span> <span
  m="993970">1.</span> <span m="995500">What</span> <span m="995660">is</span>
  <span m="995800">the</span> <span m="995920">sigma</span> <span
  m="997250">some</span> <span m="997500">of</span> <span m="997620">j?</span>
  <span m="1003110">What</span> <span m="1003310">order</span> <span
  m="1003700">first?</span></p><p><span m="1005908">AUDIENCE: n</span> <span
  m="1006365">square.</span></p><p><span m="1007280">LING REN: n</span> <span
  m="1007440">square.</span> <span m="1008224">OK.</span> <span
  m="1010040">Yeah,</span> <span m="1010230">definitely</span> <span
  m="1010690">n square.</span> <span m="1012200">But</span> <span
  m="1014570">we</span> <span m="1014860">need</span> <span
  m="1015010">to</span> <span m="1015110">be</span> <span m="1015630">a</span>
  <span m="1015700">little</span> <span m="1015900">bit</span> <span
  m="1016060">more</span> <span m="1016230">precise</span> <span
  m="1016590">than</span> <span m="1016730">that.</span> <span
  m="1017500">So</span> <span m="1017910">what's</span> <span
  m="1018120">the</span> <span m="1018220">coefficient</span> <span
  m="1018880">before the</span> <span m="1019170">n</span> <span
  m="1019410">square?</span> <span m="1028970">So</span> <span
  m="1029140">I</span> <span m="1029270">claim</span> <span
  m="1030109">this</span> <span m="1030319">coefficient</span> <span
  m="1030890">is</span> <span m="1032290">3</span> <span m="1032490">over</span>
  <span m="1032720">8.</span> <span m="1036670">Can</span> <span
  m="1036750">anyone</span> <span m="1036910">see</span> <span
  m="1037030">that?</span></p><p><span m="1038263">AUDIENCE: Why</span> <span
  m="1038735">did</span> <span m="1039207">you assume</span> <span
  m="1039679">that</span> <span m="1040151">the expected</span> <span
  m="1040623">value</span> <span m="1041095">is theta</span> <span
  m="1041567">n.</span></p><p><span m="1042520">LING REN: Oh,</span> <span
  m="1043329">that's</span> <span m="1043520">just</span> <span
  m="1043700">a</span> <span m="1043800">guess.</span> <span
  m="1044319">If</span> <span m="1044470">it's</span> <span
  m="1044609">wrong,</span> <span m="1044970">we'll</span> <span
  m="1045130">have</span> <span m="1045300">to</span> <span
  m="1045410">assume</span> <span m="1045640">something</span> <span
  m="1045950">else,</span> <span m="1046650">which</span> <span
  m="1046849">we'll</span> <span m="1047099">see</span> <span m="1047339">in
  the</span> <span m="1047430">next</span> <span m="1047670">example.</span>
  <span m="1050940">But</span> <span m="1050950">good</span> <span
  m="1051100">question.</span> <span m="1054240">OK.</span> <span
  m="1054850">Yeah.</span> <span m="1055210">Let</span> <span
  m="1055300">me</span> <span m="1055540">ask</span> <span
  m="1055740">the</span> <span m="1055810">question</span> <span
  m="1056030">again.</span> <span m="1056750">I</span> <span
  m="1056860">claim</span> <span m="1057360">this</span> <span
  m="1057610">sum</span> <span m="1058300">is</span> <span
  m="1058490">roughly</span> <span m="1059670">3</span> <span
  m="1059860">over</span> <span m="1060070">8</span> <span m="1061340">n</span>
  <span m="1061550">square.</span> <span m="1064880">Can</span> <span
  m="1065240">anyone</span> <span m="1065590">see</span> <span
  m="1065730">that?</span> <span m="1071430">Any</span> <span
  m="1071570">ideas?</span></p><p><span m="1076690">So</span> <span
  m="1077110">I</span> <span m="1077330">don't</span> <span
  m="1077480">know</span> <span m="1077580">how</span> <span
  m="1077690">to</span> <span m="1077780">calculate</span> <span
  m="1078150">this</span> <span m="1078550">term.</span> <span
  m="1079400">But</span> <span m="1079550">I</span> <span m="1079620">do</span>
  <span m="1079820">know</span> <span m="1080040">how</span> <span
  m="1080200">to</span> <span m="1080370">calculate</span> <span
  m="1081130">sigma</span> <span m="1082270">from</span> <span
  m="1082580">1</span> <span m="1082830">to</span> <span m="1082990">n,</span>
  <span m="1083900">right?</span> <span m="1085670">This</span> <span
  m="1085810">is</span> <span m="1085920">easy.</span> <span
  m="1088310">What's</span> <span m="1088490">that?</span></p><p><span
  m="1092890">It's</span> <span m="1094130">half</span> <span
  m="1094320">of</span> <span m="1094460">n,</span> <span m="1094820">n</span>
  <span m="1095180">minus</span> <span m="1095470">1.</span> <span
  m="1097170">So</span> <span m="1097450">it's</span> <span
  m="1097660">roughly</span> <span m="1101870">half</span> <span
  m="1102130">of</span> <span m="1102300">n</span> <span
  m="1102780">squared.</span> <span m="1103910">Now,</span> <span
  m="1104770">this</span> <span m="1104980">term</span> <span
  m="1105530">is</span> <span m="1105810">the</span> <span
  m="1105920">sum</span> <span m="1106140">of</span> <span
  m="1106270">this</span> <span m="1107070">minus</span> <span
  m="1107620">the</span> <span m="1107740">sum</span> <span
  m="1108020">to</span> <span m="1108530">half</span> <span
  m="1108740">of</span> <span m="1108850">n.</span> <span m="1120180">So</span>
  <span m="1120420">it's</span> <span m="1120600">roughly</span> <span
  m="1121050">half</span> <span m="1121340">of</span> <span m="1121490">n</span>
  <span m="1121620">squared</span> <span m="1122350">minus</span> <span
  m="1123030">one</span> <span m="1123390">half</span> <span
  m="1124280">of</span> <span m="1125210">one</span> <span m="1125420">half
  n</span> <span m="1125690">squared.</span> <span m="1128200">Makes</span>
  <span m="1128370">sense?</span></p><p><span m="1130280">So</span> <span
  m="1130470">this</span> <span m="1131010">is</span> <span
  m="1131230">roughly</span> <span m="1133490">3</span> <span
  m="1133710">over</span> <span m="1133960">8</span> <span m="1134215">n</span>
  <span m="1134470">squared</span> <span m="1135420">plus</span> <span
  m="1139230">an</span> <span m="1139710">order</span> <span m="1139960">n
  term</span> <span m="1140650">or</span> <span m="1141110">less,</span> <span
  m="1141570">or</span> <span m="1141810">constant.</span> <span
  m="1145420">Any</span> <span m="1145650">questions?</span> <span
  m="1147006">Does</span> <span m="1147450">that</span> <span
  m="1147560">makes</span> <span m="1147730">sense?</span></p><p><span
  m="1150530">Then</span> <span m="1151680">it's</span> <span
  m="1151840">very</span> <span m="1152040">easy</span> <span
  m="1152350">if</span> <span m="1152530">we</span> <span
  m="1152780">just</span> <span m="1153540">plug</span> <span
  m="1153790">this</span> <span m="1153900">in.</span> <span
  m="1161480">Sorry.</span> <span m="1162620">There is</span> <span
  m="1162860">a</span> <span m="1162910">mistake.</span> <span
  m="1165000">I</span> <span m="1165250">just</span> <span
  m="1165460">realized.</span> <span m="1166670">Can</span> <span
  m="1169550">anyone</span> <span m="1169960">point</span> <span
  m="1170150">that</span> <span m="1170280">out?</span></p><p><span
  m="1176790">So</span> <span m="1176940">how</span> <span
  m="1177040">many</span> <span m="1177250">terms</span> <span
  m="1177790">do</span> <span m="1177900">I</span> <span m="1177990">have</span>
  <span m="1178940">in</span> <span m="1179080">total?</span> <span
  m="1182700">One</span> <span m="1182900">from</span> <span
  m="1183340">n,</span> <span m="1183660">I</span> <span m="1183800">have</span>
  <span m="1184150">[? a ?]</span> <span m="1184380">term.</span> <span
  m="1186720">So</span> <span m="1187060">each</span> <span
  m="1187320">term</span> <span m="1187780">should</span> <span
  m="1188000">appear</span> <span m="1188630">twice.</span> <span
  m="1192028">Correct?</span> <span m="1193840">So</span> <span
  m="1194310">I</span> <span m="1194400">should</span> <span
  m="1194620">have</span> <span m="1194975">a</span> <span
  m="1195330">two</span> <span m="1195530">here.</span></p><p><span
  m="1199690">And</span> <span m="1201420">so</span> <span m="1201590">I</span>
  <span m="1201710">somehow</span> <span m="1202070">just</span> <span
  m="1202250">throw</span> <span m="1202450">away</span> <span
  m="1202660">this</span> <span m="1202840">probability.</span> <span
  m="1203810">But</span> <span m="1203900">this</span> <span
  m="1204090">probability</span> <span m="1204650">is</span> <span
  m="1207730">1</span> <span m="1207970">over</span> <span m="1208180">n.</span>
  <span m="1209980">Because</span> <span m="1210150">I'm</span> <span
  m="1210290">choosing</span> <span m="1210590">a</span> <span
  m="1210640">random</span> <span m="1210950">element,</span> <span
  m="1211380">there is</span> <span m="1211630">1</span> <span
  m="1211860">over</span> <span m="1212110">n</span> <span
  m="1212210">probability</span> <span m="1212970">that</span> <span
  m="1213410">is</span> <span m="1213590">equal</span> <span
  m="1213920">to</span> <span m="1214530">1,</span> <span m="1215020">equal
  to</span> <span m="1215510">2, 3,</span> <span m="1215750">4.</span> <span
  m="1219130">Every</span> <span m="1219430">of</span> <span
  m="1219580">this</span> <span m="1220690">is</span> <span m="1220870">1</span>
  <span m="1221060">over</span> <span m="1221230">n.</span> <span
  m="1227340">Correct?</span></p><p><span m="1234210">So</span> <span
  m="1235230">I</span> <span m="1235320">should</span> <span
  m="1235510">have</span> <span m="1235720">2</span> <span
  m="1236140">over</span> <span m="1236360">n</span> <span
  m="1236550">here,</span> <span m="1238230">2</span> <span
  m="1238410">over</span> <span m="1238840">here.</span> <span
  m="1242060">And</span> <span m="1242230">if</span> <span m="1242330">we</span>
  <span m="1242460">plug</span> <span m="1242700">this</span> <span
  m="1242880">in,</span> <span m="1244390">it's</span> <span
  m="1244780">3</span> <span m="1246190">over</span> <span m="1246610">8</span>
  <span m="1247951">n</span> <span m="1248400">cubed</span> <span
  m="1249920">plus</span> <span m="1250460">a</span> <span
  m="1250750">theta</span> <span m="1251120">n.</span> <span
  m="1252080">Our</span> <span m="1252350">goal</span> <span
  m="1252640">is</span> <span m="1252780">to</span> <span
  m="1252910">show</span> <span m="1253590">this</span> <span
  m="1253710">is</span> <span m="1254100">less</span> <span
  m="1254330">than</span> <span m="1254790">B</span> <span
  m="1256050">times</span> <span m="1256560">n,</span> <span
  m="1259070">which</span> <span m="1259260">is</span> <span
  m="1259410">clearly</span> <span m="1260380">true.</span></p><p><span
  m="1261910">Because</span> <span m="1262170">this</span> <span
  m="1262370">is</span> <span m="1262730">3/4</span> <span m="1263390">of</span>
  <span m="1263500">n,</span> <span m="1264260">3/4</span> <span
  m="1264830">of</span> <span m="1264900">B</span> <span
  m="1265100">times</span> <span m="1265360">n,</span> <span
  m="1266180">plus</span> <span m="1266470">another</span> <span
  m="1267950">term.</span> <span m="1269030">We</span> <span
  m="1269140">can</span> <span m="1269280">say</span> <span
  m="1269480">this</span> <span m="1269690">is</span> <span
  m="1269940">another</span> <span m="1270250">constant</span> <span
  m="1270780">D</span> <span m="1270960">times</span> <span
  m="1271250">n.</span> <span m="1272120">And</span> <span m="1272310">if</span>
  <span m="1272390">we</span> <span m="1272510">choose</span> <span
  m="1272790">B</span> <span m="1273040">accordingly,</span> <span
  m="1274470">this can</span> <span m="1274840">hold.</span> <span
  m="1277440">Any</span> <span m="1277600">questions?</span></p><p><span
  m="1295680">You look</span> <span m="1295930">confused</span> <span
  m="1297430">or</span> <span m="1297690">too</span> <span
  m="1297870">easy.</span> <span m="1300080">OK.</span> <span
  m="1300430">Our</span> <span m="1300660">guess is</span> <span
  m="1300810">the</span> <span m="1301690">latter.</span> <span
  m="1304990">Oh,</span> <span m="1305480">it</span> <span m="1305630">is</span>
  <span m="1305750">not?</span> <span m="1314852">OK?</span> <span
  m="1315860">So</span> <span m="1316080">then</span> <span
  m="1316290">we</span> <span m="1316380">have</span> <span
  m="1316550">solved</span> <span m="1317120">this</span> <span
  m="1318340">expected</span> <span m="1318880">runtime</span> <span
  m="1319360">of</span> <span m="1319540">quick</span> <span
  m="1319760">find.</span></p><p><span m="1322550">Now,</span> <span
  m="1322680">let's</span> <span m="1323000">look</span> <span
  m="1323120">at</span> <span m="1323250">quick</span> <span
  m="1323410">sort.</span> <span m="1326410">Quick</span> <span
  m="1326640">sort</span> <span m="1327890">is</span> <span
  m="1328040">very</span> <span m="1328220">similar.</span> <span
  m="1329080">The</span> <span m="1329180">only</span> <span
  m="1329270">difference</span> <span m="1329660">is</span> <span
  m="1329820">that</span> <span m="1332030">once</span> <span
  m="1332280">I</span> <span m="1332450">put</span> <span m="1332860">all</span>
  <span m="1333000">the</span> <span m="1333220">smaller</span> <span
  m="1333550">elements</span> <span m="1333720">on one side</span> <span
  m="1333960">and</span> <span m="1334250">the</span> <span
  m="1334300">larger</span> <span m="1334540">elements</span> <span
  m="1334910">on</span> <span m="1335000">the</span> <span
  m="1335090">other</span> <span m="1335250">side,</span> <span
  m="1337270">instead</span> <span m="1337590">of</span> <span
  m="1337810">going</span> <span m="1337940">into</span> <span
  m="1338330">one</span> <span m="1338560">of</span> <span
  m="1338670">them,</span> <span m="1339050">I</span> <span
  m="1339180">have</span> <span m="1339360">to</span> <span
  m="1339490">sort</span> <span m="1339720">of</span> <span
  m="1339760">both.</span></p><p><span m="1343730">So</span> <span
  m="1343890">the</span> <span m="1344030">only</span> <span
  m="1344280">change</span> <span m="1345330">is</span> <span
  m="1345500">that</span> <span m="1345740">instead</span> <span
  m="1346040">of</span> <span m="1346120">taking</span> <span
  m="1346370">the</span> <span m="1346450">max</span> <span
  m="1346860">here,</span> <span m="1349360">I</span> <span
  m="1349490">need</span> <span m="1349690">to</span> <span m="1351060">add
  them.</span> <span m="1356060">Correct?</span> <span m="1359010">So</span>
  <span m="1360110">now</span> <span m="1361450">the</span> <span
  m="1361530">same</span> <span m="1361750">thing</span> <span
  m="1361910">here.</span> <span m="1362300">Instead</span> <span
  m="1362650">of</span> <span m="1362730">taking</span> <span
  m="1363050">the</span> <span m="1363120">max,</span> <span
  m="1364330">I</span> <span m="1364430">should</span> <span
  m="1365110">add</span> <span m="1365290">them</span> <span
  m="1365460">up.</span></p><p><span m="1370500">Now</span> <span
  m="1370670">when</span> <span m="1370830">it</span> <span
  m="1370940">propagates</span> <span m="1371430">here,</span> <span
  m="1373280">so</span> <span m="1373630">every</span> <span
  m="1373980">term</span> <span m="1374640">appears</span> <span
  m="1376050">twice</span> <span m="1377920">all</span> <span
  m="1378100">the</span> <span m="1378190">way</span> <span
  m="1378370">from</span> <span m="1383060">j</span> <span
  m="1383240">equals</span> <span m="1383500">1</span> <span
  m="1383750">to</span> <span m="1383880">j</span> <span m="1384090">equals
  n.</span> <span m="1385770">Is</span> <span m="1385890">everyone</span> <span
  m="1386020">following?</span></p><p><span m="1397101">AUDIENCE: Can you</span>
  <span m="1397592">repeat</span> <span m="1398083">that?</span></p><p><span
  m="1398574">LING REN: Hm-hmm?</span></p><p><span m="1399080">AUDIENCE: Can
  you</span> <span m="1399220">repeat that?</span></p><p><span m="1400360">LING
  REN: OK.</span> <span m="1400530">Sure.</span> <span
  m="1401850">Originally,</span> <span m="1402950">we</span> <span
  m="1403100">have</span> <span m="1403330">a</span> <span
  m="1403390">max</span> <span m="1403690">here.</span> <span
  m="1405880">So</span> <span m="1406510">first,</span> <span
  m="1407390">did</span> <span m="1407540">everyone</span> <span
  m="1407790">get</span> <span m="1407930">this</span> <span
  m="1408080">part?</span> <span m="1408370">We</span> <span
  m="1408490">have</span> <span m="1408750">a</span> <span
  m="1409010">plus</span> <span m="1409550">instead</span> <span m="1409870">of
  a</span> <span m="1409980">max</span> <span m="1410450">here.</span> <span
  m="1411400">We</span> <span m="1411490">have</span> <span
  m="1411650">to</span> <span m="1411770">solve</span> <span
  m="1412020">both</span> <span m="1412260">the</span> <span
  m="1412350">problems.</span></p><p><span m="1414830">Now,</span> <span
  m="1414900">if</span> <span m="1415090">it's</span> <span m="1415280">a</span>
  <span m="1415330">max,</span> <span m="1415870">then</span> <span
  m="1417070">what</span> <span m="1417230">I</span> <span
  m="1417300">have</span> <span m="1417610">is</span> <span m="1418360">n</span>
  <span m="1418450">minus</span> <span m="1418740">1, n</span> <span
  m="1419060">minus</span> <span m="1419350">2,</span> <span
  m="1419650">all</span> <span m="1419770">the</span> <span
  m="1419860">way</span> <span m="1419970">to</span> <span m="1420090">half
  of</span> <span m="1420290">n,</span> <span m="1420720">and</span> <span
  m="1420850">then</span> <span m="1421160">half of</span> <span
  m="1421360">n,</span> <span m="1421730">half of</span> <span
  m="1421970">n</span> <span m="1422080">plus</span> <span m="1422300">1,</span>
  <span m="1422570">all</span> <span m="1422660">the</span> <span
  m="1422790">way</span> <span m="1422950">back</span> <span
  m="1423220">to</span> <span m="1423500">n</span> <span
  m="1423780">minus</span> <span m="1424060">1,</span> <span
  m="1424850">right?</span> <span m="1426120">And</span> <span
  m="1426480">if</span> <span m="1426650">I</span> <span m="1426760">have</span>
  <span m="1426980">a</span> <span m="1427060">sum,</span> <span
  m="1427930">then</span> <span m="1428060">what</span> <span
  m="1428210">I</span> <span m="1428280">have</span> <span m="1428620">is</span>
  <span m="1429420">for</span> <span m="1429760">j</span> <span
  m="1430100">equals</span> <span m="1430360">1's</span> <span
  m="1430650">case,</span> <span m="1431060">I</span> <span
  m="1431240">have</span> <span m="1431580">T</span> <span m="1431880">of</span>
  <span m="1433380">0</span> <span m="1434350">and</span> <span m="1434620">T
  of</span> <span m="1434770">n</span> <span m="1435060">and</span> <span
  m="1435310">minus</span> <span m="1435600">1.</span> <span m="1436970">This
  is</span> <span m="1437230">j</span> <span m="1437510">equals</span> <span
  m="1437680">1.</span> <span m="1438130">If j</span> <span
  m="1438470">equals</span> <span m="1438850">2,</span> <span m="1439190">I
  have</span> <span m="1439610">T</span> <span m="1439810">of</span> <span
  m="1439950">1</span> <span m="1442130">and</span> <span m="1442430">T</span>
  <span m="1442570">of</span> <span m="1442730">n</span> <span
  m="1442840">minus</span> <span m="1443230">2.</span></p><p><span
  m="1445520">As</span> <span m="1445810">j</span> <span
  m="1446040">increases,</span> <span m="1446730">this</span> <span
  m="1446970">one</span> <span m="1447230">goes</span> <span
  m="1447530">from</span> <span m="1447890">0</span> <span m="1448340">to</span>
  <span m="1448880">n.</span> <span m="1449540">And</span> <span
  m="1449690">this</span> <span m="1449840">one</span> <span
  m="1450060">goes</span> <span m="1450300">from</span> <span
  m="1450550">n</span> <span m="1450660">minus</span> <span m="1450910">1</span>
  <span m="1451220">to</span> <span m="1451630">0.</span> <span
  m="1453240">I'm</span> <span m="1453380">going</span> <span
  m="1453620">to</span> <span m="1453760">sum</span> <span
  m="1454020">all</span> <span m="1454170">of</span> <span
  m="1454280">them</span> <span m="1454550">up.</span> <span
  m="1463450">Does</span> <span m="1463600">that</span> <span
  m="1463790">answer</span> <span m="1464060">your</span> <span
  m="1464090">question?</span> <span m="1466064">OK.</span> <span
  m="1467530">So</span> <span m="1467880">instead</span> <span
  m="1468210">of</span> <span m="1468380">from</span> <span m="1468760">half
  of</span> <span m="1469210">n to</span> <span m="1469660">n, we're</span>
  <span m="1469850">summing</span> <span m="1470300">from</span> <span
  m="1470850">1</span> <span m="1471160">to</span> <span
  m="1471310">n.</span></p><p><span m="1475610">Now,</span> <span
  m="1477240">we</span> <span m="1477420">also</span> <span
  m="1477670">have</span> <span m="1477880">another</span> <span
  m="1478250">good</span> <span m="1478440">question</span> <span
  m="1478800">here.</span> <span m="1480870">Why</span> <span
  m="1480960">do</span> <span m="1481090">I</span> <span
  m="1481180">guess</span> <span m="1481680">it's</span> <span m="1481890">theta
  n?</span> <span m="1483870">Well,</span> <span m="1484120">it's</span> <span
  m="1484300">just</span> <span m="1484480">a</span> <span
  m="1484510">random</span> <span m="1484840">guess.</span> <span m="1485180">It
  could</span> <span m="1485370">be</span> <span m="1485500">wrong.</span> <span
  m="1486300">For</span> <span m="1486400">example,</span> <span
  m="1486970">in</span> <span m="1487110">this</span> <span
  m="1487310">case,</span> <span m="1487720">it's</span> <span
  m="1488170">just</span> <span m="1488590">incorrect.</span></p><p><span
  m="1489540">Why?</span> <span m="1489840">Because</span> <span
  m="1491090">every</span> <span m="1491320">sum,</span> <span
  m="1495650">the</span> <span m="1495830">range</span> <span
  m="1496160">becomes</span> <span m="1496520">a</span> <span
  m="1496580">1</span> <span m="1496780">to</span> <span m="1496930">n.</span>
  <span m="1502110">Now</span> <span m="1502580">what</span> <span
  m="1502740">I</span> <span m="1502830">have</span> <span m="1503170">is</span>
  <span m="1503390">no</span> <span m="1503550">longer</span> <span
  m="1504340">3</span> <span m="1504620">over</span> <span m="1504850">8</span>
  <span m="1505530">over n.</span> <span m="1506120">What do</span> <span
  m="1506350">I</span> <span m="1506380">have</span> <span
  m="1506570">again?</span> <span m="1508730">What</span> <span m="1508960">do
  I</span> <span m="1509010">have</span> <span m="1509150">now</span> <span
  m="1509470">if it's</span> <span m="1509560">1</span> <span
  m="1509980">over</span> <span m="1510170">n?</span></p><p><span
  m="1514146">AUDIENCE: One half.</span></p><p><span m="1515550">LING REN:
  Yeah.</span> <span m="1515870">It's</span> <span m="1516020">one</span> <span
  m="1516220">half</span> <span m="1516420">of</span> <span
  m="1516560">n.</span> <span m="1518036">But</span> <span m="1518530">if</span>
  <span m="1518660">I</span> <span m="1518770">change</span> <span
  m="1519060">one</span> <span m="1519320">half</span> <span
  m="1519590">here,</span> <span m="1520740">what</span> <span
  m="1520920">I</span> <span m="1521010">get</span> <span m="1521490">is</span>
  <span m="1522130">B</span> <span m="1522470">times</span> <span
  m="1522800">n</span> <span m="1523290">plus</span> <span m="1524250">D</span>
  <span m="1524450">times</span> <span m="1524790">n.</span> <span
  m="1525530">I</span> <span m="1525560">want</span> <span m="1525770">to</span>
  <span m="1525860">prove</span> <span m="1526220">that</span> <span
  m="1526430">it's</span> <span m="1526540">smaller</span> <span
  m="1526930">than</span> <span m="1527110">B</span> <span
  m="1527260">times</span> <span m="1527540">n,</span> <span
  m="1529180">which</span> <span m="1529410">is</span> <span
  m="1530160">clearly</span> <span m="1530750">impossible</span> <span
  m="1531690">no</span> <span m="1531800">matter</span> <span
  m="1532030">how</span> <span m="1532190">you</span> <span m="1532440">choose
  B.</span></p><p><span m="1544710">Did</span> <span m="1544880">everyone</span>
  <span m="1545140">get</span> <span m="1545310">that?</span> <span
  m="1546960">If</span> <span m="1547080">we</span> <span m="1547410">the</span>
  <span m="1547530">same</span> <span m="1547800">assumption,</span> <span
  m="1548740">I</span> <span m="1548840">make</span> <span
  m="1549020">the</span> <span m="1549100">hypothesis</span> <span
  m="1550220">and</span> <span m="1550330">we</span> <span
  m="1550450">plug</span> <span m="1550670">them</span> <span
  m="1550770">in,</span> <span m="1551320">we</span> <span
  m="1551490">can</span> <span m="1551670">no</span> <span
  m="1551800">longer</span> <span m="1552100">prove</span> <span
  m="1553580">the</span> <span m="1553730">induction</span> <span
  m="1554120">step.</span> <span m="1559340">OK.</span> <span
  m="1559630">So</span> <span m="1559830">what</span> <span
  m="1559940">we</span> <span m="1560090">do?</span> <span m="1561380">We</span>
  <span m="1561500">make</span> <span m="1561670">another</span> <span
  m="1561900">guess.</span></p><p><span m="1565730">So</span> <span
  m="1565950">let</span> <span m="1566060">me</span> <span
  m="1566190">rewrite</span> <span m="1566760">our</span> <span
  m="1567050">recursion.</span> <span m="1581328">So</span> <span
  m="1581840">what's</span> <span m="1582040">the</span> <span
  m="1582160">next</span> <span m="1582430">guess?</span> <span
  m="1592300">Any</span> <span m="1592430">guesses?</span> <span m="1601186">How
  about</span> <span m="1601600">we just</span> <span m="1601850">guess</span>
  <span m="1602010">n square?</span> <span m="1608020">Anyone</span> <span
  m="1608870">unhappy</span> <span m="1609260">with</span> <span
  m="1609410">that</span> <span m="1609670">guess?</span></p><p><span
  m="1612320">So</span> <span m="1612640">we</span> <span m="1612740">can</span>
  <span m="1612850">do</span> <span m="1612960">the</span> <span
  m="1613060">same</span> <span m="1613260">thing.</span> <span
  m="1613540">We</span> <span m="1613630">can</span> <span
  m="1613750">plug</span> <span m="1614000">it</span> <span
  m="1614080">in.</span> <span m="1615260">And</span> <span
  m="1616000">that</span> <span m="1616300">will</span> <span
  m="1616460">be</span> <span m="1616680">a--</span> <span
  m="1617760">sorry,</span> <span m="1618040">I</span> <span
  m="1618180">missed</span> <span m="1618310">another</span> <span
  m="1618580">term.</span> <span m="1619030">This</span> <span
  m="1619210">is</span> <span m="1620540">1</span> <span m="1620740">over</span>
  <span m="1621010">2</span> <span m="1621210">here.</span></p><p><span
  m="1624660">If</span> <span m="1624800">we</span> <span m="1625100">make
  that</span> <span m="1625400">guess,</span> <span m="1625930">then</span>
  <span m="1626200">what</span> <span m="1626390">we</span> <span
  m="1626600">have</span> <span m="1627070">is</span> <span
  m="1627480">the</span> <span m="1627810">sum</span> <span
  m="1628140">from</span> <span m="1632270">1</span> <span m="1632430">to</span>
  <span m="1632570">n</span> <span m="1633040">minus</span> <span
  m="1633380">1,</span> <span m="1634450">the</span> <span
  m="1634550">sum</span> <span m="1634870">of</span> <span m="1635420">j</span>
  <span m="1635640">square</span> <span m="1636730">plus a</span> <span
  m="1637110">theta</span> <span m="1637520">n.</span> <span
  m="1641880">And</span> <span m="1642070">the</span> <span
  m="1642190">sum</span> <span m="1642570">of</span> <span m="1642850">j</span>
  <span m="1643290">squared</span> <span m="1644850">is</span> <span
  m="1645020">roughly</span> <span m="1652765">n</span> <span
  m="1653030">cubed</span> <span m="1653330">divided</span> <span
  m="1653650">by</span> <span m="1653760">3.</span> <span m="1659550">Is</span>
  <span m="1659690">that</span> <span m="1659810">obvious</span> <span
  m="1660170">to</span> <span m="1660290">everyone?</span></p><p><span
  m="1661350">Maybe</span> <span m="1661540">not.</span> <span
  m="1664780">OK.</span> <span m="1666100">Can</span> <span
  m="1666660">anyone</span> <span m="1667110">explain</span> <span
  m="1667500">this</span> <span m="1667870">to</span> <span
  m="1667980">us,</span> <span m="1669300">why</span> <span
  m="1669590">can</span> <span m="1669790">I</span> <span
  m="1669860">claim</span> <span m="1670560">the</span> <span
  m="1670680">sum</span> <span m="1670990">of</span> <span
  m="1671120">square</span> <span m="1671580">term</span> <span
  m="1672160">is</span> <span m="1673420">n</span> <span
  m="1673540">cubed</span> <span m="1675150">over</span> <span
  m="1675390">3?</span> <span m="1685039">Go ahead.</span></p><p><span
  m="1687494">AUDIENCE: It's</span> <span m="1687985">n</span> <span
  m="1688967">times</span> <span m="1689458">n minus 1</span> <span
  m="1689949">times</span> <span m="1690440">n minus 2</span> <span
  m="1690931">over</span> <span m="1691913">[INAUDIBLE].</span></p><p><span
  m="1695370">LING REN: I</span> <span m="1695510">think</span> <span
  m="1695780">you're</span> <span m="1696060">correct.</span> <span
  m="1696320">There is</span> <span m="1696730">a</span> <span
  m="1696800">formula,</span> <span m="1697350">which</span> <span
  m="1697700">is--</span> <span m="1698160">yeah, I</span> <span
  m="1698360">don't</span> <span m="1698490">remember</span> <span
  m="1698930">exactly,</span> <span m="1699550">but</span> <span
  m="1699650">it's</span> <span m="1700000">roughly</span> <span
  m="1702870">this.</span> <span m="1705150">If</span> <span
  m="1705300">you</span> <span m="1705420">know</span> <span
  m="1705590">this,</span> <span m="1705950">then</span> <span
  m="1706100">you</span> <span m="1706180">definitely</span> <span
  m="1706500">see</span> <span m="1706650">that.</span> <span
  m="1707310">If</span> <span m="1707430">you</span> <span
  m="1707540">don't,</span> <span m="1709972">we</span> <span
  m="1710400">can</span> <span m="1710540">turn</span> <span
  m="1710720">this</span> <span m="1710950">sum</span> <span m="1711370">into
  an</span> <span m="1711720">integral.</span> <span m="1715390">And</span>
  <span m="1715570">that</span> <span m="1715770">is</span> <span
  m="1720110">n</span> <span m="1720250">cubed</span> <span
  m="1720490">over</span> <span m="1720670">3.</span> <span
  m="1721830">Make</span> <span m="1722000">sense?</span></p><p><span
  m="1725210">If</span> <span m="1725350">we</span> <span
  m="1725550">plug</span> <span m="1725760">that</span> <span
  m="1725920">in,</span> <span m="1727050">what do we</span> <span
  m="1727350">have?</span> <span m="1729790">2</span> <span m="1730000">over
  n</span> <span m="1731470">3n</span> <span m="1731940">cubed</span> <span
  m="1733120">plus</span> <span m="1733770">theta</span> <span
  m="1734150">n.</span> <span m="1736370">Of course</span> <span
  m="1736750">there's</span> <span m="1736970">a</span> <span
  m="1737030">B</span> <span m="1737250">here.</span> <span
  m="1738290">And</span> <span m="1738430">we</span> <span
  m="1738550">want</span> <span m="1738730">to</span> <span
  m="1738820">show</span> <span m="1739420">this</span> <span
  m="1739640">is</span> <span m="1739920">less</span> <span
  m="1740160">than</span> <span m="1740460">B</span> <span
  m="1740770">times</span> <span m="1741270">n</span> <span
  m="1741360">squared.</span></p><p><span m="1747940">Does</span> <span
  m="1748110">it</span> <span m="1748140">hold?</span> <span
  m="1749670">Is</span> <span m="1749800">it true?</span> <span
  m="1757690">It's</span> <span m="1757920">clearly</span> <span
  m="1758220">true,</span> <span m="1758520">right?</span> <span
  m="1759270">So</span> <span m="1759410">this--</span> <span
  m="1761710">no.</span> <span m="1762630">This is</span> <span
  m="1762870">cubed.</span> <span m="1766710">Yeah.</span> <span
  m="1766940">Sorry, I</span> <span m="1767020">am</span> <span
  m="1767180">making</span> <span m="1767540">many</span> <span
  m="1767770">mistakes.</span> <span m="1768240">But</span> <span
  m="1768590">that's</span> <span m="1768800">actually</span> <span
  m="1769160">good</span> <span m="1769310">to</span> <span
  m="1770660">catch</span> <span m="1770880">your</span> <span
  m="1770980">attention.</span></p><p><span m="1772820">But</span> <span
  m="1772980">it</span> <span m="1773110">actually</span> <span
  m="1773390">worries</span> <span m="1773700">me</span> <span
  m="1773850">that</span> <span m="1774040">you</span> <span
  m="1774160">didn't</span> <span m="1774400">point</span> <span
  m="1774630">this</span> <span m="1774840">out.</span> <span
  m="1779460">This</span> <span m="1779630">is</span> <span
  m="1780440">2/3</span> <span m="1781090">n</span> <span
  m="1781300">squared</span> <span m="1781830">times</span> <span
  m="1782280">B.</span> <span m="1782650">It's</span> <span
  m="1782890">clearly</span> <span m="1783190">less</span> <span
  m="1783400">than</span> <span m="1783580">B</span> <span m="1783970">n</span>
  <span m="1784170">square.</span> <span m="1786030">OK.</span> <span
  m="1786510">So</span> <span m="1786950">we</span> <span
  m="1787020">claimed</span> <span m="1787300">the</span> <span
  m="1787500">algorithm</span> <span m="1787690">is</span> <span
  m="1788150">n</span> <span m="1788480">squared.</span> <span
  m="1790650">Correct?</span> <span m="1797190">Go ahead.</span></p><p><span
  m="1798170">AUDIENCE: Does that mean that you</span> <span m="1798660">claim
  that</span> <span m="1799150">it's less than</span> <span m="1799640">n
  squared,</span> <span m="1800298">being that</span> <span
  m="1800736">it's</span> <span m="1801174">n squared</span> <span
  m="1801612">definitely?</span></p><p><span m="1802490">LING REN:
  Exactly.</span> <span m="1803050">So</span> <span m="1803610">what</span>
  <span m="1803840">I've</span> <span m="1803970">proved</span> <span
  m="1804220">here</span> <span m="1804620">is</span> <span
  m="1804850">that</span> <span m="1805690">the</span> <span
  m="1805780">algorithm</span> <span m="1806380">is</span> <span
  m="1806630">definitely</span> <span m="1807380">O</span> <span m="1807810">of
  n</span> <span m="1807970">square,</span> <span m="1809720">but</span> <span
  m="1809880">maybe</span> <span m="1810210">less.</span> <span
  m="1811680">And</span> <span m="1811920">you</span> <span
  m="1812040">can</span> <span m="1812190">see</span> <span
  m="1812390">we</span> <span m="1812510">still</span> <span
  m="1812720">have</span> <span m="1813020">a</span> <span
  m="1813070">lot</span> <span m="1813260">of</span> <span
  m="1813340">room</span> <span m="1813590">here.</span> <span
  m="1814590">This</span> <span m="1815120">inequality</span> <span
  m="1816380">is</span> <span m="1816540">not</span> <span
  m="1816700">very</span> <span m="1816900">tight.</span></p><p><span
  m="1820620">So</span> <span m="1822930">in</span> <span
  m="1823120">fact,</span> <span m="1824930">it's</span> <span
  m="1825090">a</span> <span m="1825130">very</span> <span
  m="1825330">good</span> <span m="1825690">question,</span> <span
  m="1826050">how</span> <span m="1826210">do</span> <span m="1826270">we</span>
  <span m="1826380">make</span> <span m="1826570">that</span> <span
  m="1826760">guess.</span> <span m="1827570">So</span> <span
  m="1829490">you</span> <span m="1829690">already</span> <span
  m="1829910">know</span> <span m="1830100">the</span> <span
  m="1830220">answer</span> <span m="1830530">is</span> <span
  m="1830660">n</span> <span m="1830810">log</span> <span m="1831020">n,</span>
  <span m="1831190">right?</span> <span m="1831440">So</span> <span
  m="1831620">it's</span> <span m="1831780">not</span> <span
  m="1831960">interesting.</span> <span m="1832460">But</span> <span
  m="1832600">if</span> <span m="1832720">you</span> <span
  m="1832850">don't,</span> <span m="1833660">then</span> <span
  m="1834700">how</span> <span m="1834890">do</span> <span m="1834960">we</span>
  <span m="1835080">go</span> <span m="1835210">about</span> <span
  m="1835480">and</span> <span m="1835600">do</span> <span
  m="1835720">things?</span> <span m="1836100">We</span> <span
  m="1837210">have</span> <span m="1837390">to</span> <span
  m="1837630">make</span> <span m="1837810">these</span> <span
  m="1838120">guesses.</span></p><p><span m="1838870">So</span> <span
  m="1839230">how</span> <span m="1839370">about</span> <span
  m="1839870">we</span> <span m="1840000">know</span> <span
  m="1840240">this</span> <span m="1840410">n</span> <span
  m="1840610">doesn't</span> <span m="1840830">hold</span> <span
  m="1841210">and</span> <span m="1841450">2</span> <span m="1841670">is</span>
  <span m="1841830">too</span> <span m="1841970">much.</span> <span
  m="1842780">Next</span> <span m="1843020">guess is</span> <span
  m="1845150">n</span> <span m="1845390">raised</span> <span
  m="1845600">to</span> <span m="1845710">1</span> <span m="1845860">plus</span>
  <span m="1846070">epsilon.</span> <span m="1849930">Then</span> <span
  m="1850160">what</span> <span m="1850580">will</span> <span
  m="1850770">we</span> <span m="1850980">have?</span></p><p><span
  m="1852506">If</span> <span m="1852900">we</span> <span
  m="1853170">carry</span> <span m="1853420">out</span> <span
  m="1853590">the</span> <span m="1853850">same</span> <span
  m="1854480">integral</span> <span m="1854930">argument,</span> <span
  m="1857420">we</span> <span m="1857580">have</span> <span m="1858180">2</span>
  <span m="1858610">plus</span> <span m="1858910">epsilon,</span> <span
  m="1863340">n</span> <span m="1863950">raised</span> <span
  m="1864220">to</span> <span m="1864540">2</span> <span m="1864690">plus</span>
  <span m="1864950">epsilon</span> <span m="1865630">over</span> <span
  m="1866100">2 plus epsilon.</span> <span m="1866927">Correct?</span> <span
  m="1868270">And</span> <span m="1868360">if</span> <span m="1868460">we</span>
  <span m="1868570">plug</span> <span m="1868790">that</span> <span
  m="1868980">in,</span> <span m="1879820">we</span> <span
  m="1879960">get</span> <span m="1880160">this.</span> <span
  m="1883450">And</span> <span m="1883930">we</span> <span
  m="1884050">want</span> <span m="1884230">to</span> <span
  m="1884300">show</span> <span m="1884700">it's</span> <span
  m="1885210">less</span> <span m="1885510">than</span> <span
  m="1887630">n</span> <span m="1887810">raised</span> <span
  m="1888060">to</span> <span m="1888370">1</span> <span m="1888540">plus</span>
  <span m="1888770">epsilon.</span></p><p><span m="1890880">Does</span> <span
  m="1891040">this</span> <span m="1891190">hold?</span> <span
  m="1897200">This</span> <span m="1897770">term</span> <span
  m="1898070">is</span> <span m="1898200">less</span> <span
  m="1898390">than</span> <span m="1898500">1.</span> <span
  m="1899290">And</span> <span m="1899440">that's</span> <span
  m="1899920">n</span> <span m="1900150">raised</span> <span
  m="1900380">to</span> <span m="1900500">1</span> <span m="1900650">plus</span>
  <span m="1900870">epsilon.</span> <span m="1901800">So</span> <span
  m="1901950">this</span> <span m="1902120">is</span> <span
  m="1902290">true.</span> <span m="1904030">So</span> <span
  m="1904150">we</span> <span m="1904270">can</span> <span
  m="1904400">easily</span> <span m="1904770">prove</span> <span
  m="1905890">it's,</span> <span m="1906090">indeed,</span> <span
  m="1908450">n</span> <span m="1908680">raised</span> <span
  m="1908950">to</span> <span m="1909140">1</span> <span m="1909320">plus</span>
  <span m="1909540">epsilon</span> <span m="1910160">for</span> <span
  m="1910500">any</span> <span m="1910780">epsilon.</span> <span
  m="1913820">Questions?</span></p><p><span m="1917440">But</span> <span
  m="1917650">is</span> <span m="1917780">it</span> <span
  m="1917920">tight?</span> <span m="1918750">We</span> <span
  m="1918900">still</span> <span m="1919120">don't</span> <span
  m="1919280">know.</span> <span m="1921370">So</span> <span
  m="1921580">then</span> <span m="1921780">what</span> <span m="1921940">do
  we</span> <span m="1922050">do?</span> <span m="1922730">We</span> <span
  m="1922870">just</span> <span m="1923070">make</span> <span
  m="1923270">another</span> <span m="1923610">guess.</span> <span
  m="1927260">And</span> <span m="1927510">let's</span> <span
  m="1927730">guess</span> <span m="1929340">T</span> <span
  m="1929560">of</span> <span m="1929660">n</span> <span m="1931590">is</span>
  <span m="1932250">[INAUDIBLE]</span> <span m="1932540">n log</span> <span
  m="1932850">n.</span></p><p><span m="1938750">Definitely,</span> <span
  m="1939110">you</span> <span m="1939440">may</span> <span
  m="1939670">run</span> <span m="1939870">into</span> <span
  m="1940740">two</span> <span m="1940910">cases.</span> <span
  m="1941370">You</span> <span m="1941490">can</span> <span
  m="1941640">either</span> <span m="1941840">prove</span> <span
  m="1942140">it</span> <span m="1942490">or</span> <span
  m="1942700">not.</span> <span m="1944110">If</span> <span
  m="1944260">this</span> <span m="1944420">doesn't</span> <span
  m="1944570">hold, you</span> <span m="1944940">just</span> <span
  m="1945140">go</span> <span m="1945250">to</span> <span m="1945490">log
  n</span> <span m="1945800">square.</span> <span m="1946390">And</span> <span
  m="1946690">gradually,</span> <span m="1947160">you will</span> <span
  m="1947330">find the answer.</span></p><p><span m="1948550">Well,</span> <span
  m="1949160">if</span> <span m="1949290">you</span> <span
  m="1949400">don't</span> <span m="1949590">know</span> <span
  m="1949720">the</span> <span m="1949840">answer,</span> <span
  m="1950150">probably</span> <span m="1950540">this</span> <span
  m="1950690">is</span> <span m="1950790">how</span> <span
  m="1950930">you</span> <span m="1951010">do</span> <span
  m="1951140">things.</span> <span m="1952480">Now,</span> <span
  m="1952920">if</span> <span m="1953060">we</span> <span
  m="1953190">guess</span> <span m="1954170">this</span> <span m="1954780">n
  log</span> <span m="1954960">n,</span> <span m="1960670">then</span> <span
  m="1960890">I</span> <span m="1961110">have</span> <span m="1962870">a</span>
  <span m="1963010">little</span> <span m="1965770">harder</span> <span
  m="1966330">equation</span> <span m="1966940">here.</span> <span
  m="1972330">Because</span> <span m="1972520">it's</span> <span
  m="1972750">now</span> <span m="1973070">j log</span> <span
  m="1973380">j.</span></p><p><span m="1984740">How</span> <span
  m="1984870">do</span> <span m="1984970">I</span> <span
  m="1985040">compute</span> <span m="1985300">that?</span> <span
  m="1998834">Yeah.</span> <span m="1999340">It's</span> <span
  m="1999550">not</span> <span m="1999740">the</span> <span
  m="1999830">sum</span> <span m="2000240">of</span> <span
  m="2000420">natural</span> <span m="2000730">number</span> <span
  m="2001960">or</span> <span m="2002800">squares</span> <span
  m="2003240">of</span> <span m="2003330">numbers,</span> <span
  m="2004510">so</span> <span m="2004650">you</span> <span
  m="2004790">cannot</span> <span m="2005280">use</span> <span
  m="2007432">a</span> <span m="2007850">formula</span> <span
  m="2008260">like</span> <span m="2008490">this.</span> <span
  m="2009590">But</span> <span m="2009720">we</span> <span
  m="2009830">can</span> <span m="2010150">still</span> <span
  m="2010310">use</span> <span m="2010750">the</span> <span
  m="2010850">integral</span> <span m="2010990">argument.</span></p><p><span
  m="2014290">I'm</span> <span m="2014470">not</span> <span
  m="2014670">going</span> <span m="2014860">to</span> <span
  m="2014960">do</span> <span m="2015100">that,</span> <span
  m="2015520">because</span> <span m="2016450">that's</span> <span
  m="2017420">what</span> <span m="2017670">you</span> <span
  m="2018130">should</span> <span m="2018320">have</span> <span
  m="2018490">learned</span> <span m="2018950">in</span> <span
  m="2019380">calculus</span> <span m="2019790">or</span> <span
  m="2019950">other</span> <span m="2020260">math</span> <span
  m="2020450">class.</span> <span m="2022880">But it</span> <span
  m="2023000">happens</span> <span m="2023390">that</span> <span
  m="2024940">this</span> <span m="2025240">integral</span> <span
  m="2025555">of</span> <span m="2025870">j log</span> <span
  m="2026280">j</span> <span m="2029760">is</span> <span
  m="2030280">roughly</span> <span m="2034670">half</span> <span
  m="2035170">of</span> <span m="2036260">n squared</span> <span
  m="2036690">log</span> <span m="2037030">n</span> <span
  m="2038580">minus</span> <span m="2043380">some</span> <span
  m="2043670">constant</span> <span m="2044270">times</span> <span
  m="2044570">log</span> <span m="2044770">n.</span> <span m="2045260">I
  think</span> <span m="2045370">you</span> <span m="2045490">can</span> <span
  m="2045660">change</span> <span m="2045920">this</span> <span
  m="2046080">constant.</span> <span m="2046830">But</span> <span
  m="2046960">it's</span> <span m="2047940">roughly</span> <span
  m="2048270">smaller</span> <span m="2049659">than</span> <span
  m="2049880">that.</span></p><p><span m="2051389">If you</span> <span
  m="2051520">plug that in,</span> <span m="2054010">you</span> <span
  m="2054210">get</span> <span m="2064070">n</span> <span
  m="2064290">over</span> <span m="2064500">2</span> <span
  m="2065580">one</span> <span m="2065750">half</span> <span m="2068030">times
  B</span> <span m="2085520">plus</span> <span m="2085719">theta</span> <span
  m="2085980">n.</span> <span m="2087080">And</span> <span m="2087230">we</span>
  <span m="2088170">want it</span> <span m="2088449">to</span> <span
  m="2088550">be</span> <span m="2088699">smaller</span> <span
  m="2089150">than</span> <span m="2091120">B</span> <span
  m="2091550">times</span> <span m="2091870">n log</span> <span
  m="2092020">n,</span> <span m="2096199">which</span> <span
  m="2096400">will</span> <span m="2096540">be</span> <span
  m="2096650">true.</span> <span m="2105480">This</span> <span
  m="2105710">is</span> <span m="2106220">exactly</span> <span
  m="2106730">that,</span> <span m="2107930">but</span> <span
  m="2108060">we</span> <span m="2108180">are</span> <span
  m="2108310">minus</span> <span m="2108830">some term.</span> <span
  m="2110060">And the</span> <span m="2110200">term</span> <span
  m="2110500">we</span> <span m="2110640">are</span> <span
  m="2111280">extracting</span> <span m="2112040">is</span> <span
  m="2112270">larger</span> <span m="2112570">than</span> <span
  m="2112730">the</span> <span m="2112810">theta</span> <span
  m="2112980">n</span> <span m="2113190">term.</span></p><p><span
  m="2115920">So</span> <span m="2116110">we</span> <span m="2116220">can</span>
  <span m="2116370">prove</span> <span m="2116980">this</span> <span
  m="2117210">algorithm</span> <span m="2117670">is</span> <span m="2118720">n
  log</span> <span m="2118950">n.</span> <span m="2123460">But</span> <span
  m="2123570">you</span> <span m="2123640">can</span> <span
  m="2123740">ask</span> <span m="2123920">the</span> <span
  m="2123990">same</span> <span m="2124200">question,</span> <span
  m="2125840">how</span> <span m="2125890">do</span> <span m="2126000">I</span>
  <span m="2126090">know it's</span> <span m="2126580">n log</span> <span
  m="2126770">n?</span> <span m="2127260">Or if</span> <span
  m="2127390">I</span> <span m="2127470">don't</span> <span
  m="2127770">know</span> <span m="2128080">it's</span> <span m="2128260">n
  log</span> <span m="2128400">n,</span> <span m="2129200">maybe</span> <span
  m="2129490">I</span> <span m="2129530">should</span> <span
  m="2129720">go</span> <span m="2129850">about</span> <span
  m="2130120">and</span> <span m="2130270">try</span> <span
  m="2130690">log</span> <span m="2130940">log</span> <span
  m="2131140">n.</span> <span m="2136290">So</span> <span
  m="2136420">you're</span> <span m="2136550">welcome</span> <span
  m="2136860">to</span> <span m="2136960">try.</span></p><p><span
  m="2137740">And</span> <span m="2138070">it's</span> <span
  m="2138240">actually</span> <span m="2138570">a</span> <span
  m="2138630">very</span> <span m="2139150">good</span> <span
  m="2139390">thought.</span> <span m="2140120">Because</span> <span
  m="2140330">I</span> <span m="2141200">think</span> <span
  m="2141520">is</span> <span m="2141670">very</span> <span
  m="2142080">uninteresting</span> <span m="2143160">if</span> <span
  m="2143250">you</span> <span m="2143430">already</span> <span
  m="2143750">know</span> <span m="2143910">the</span> <span
  m="2144040">answer.</span> <span m="2144390">If you</span> <span
  m="2144600">don't</span> <span m="2144830">know,</span> <span
  m="2145000">you</span> <span m="2145090">have</span> <span
  m="2145260">to</span> <span m="2145350">try</span> <span
  m="2145530">that.</span></p><p><span m="2146736">But</span> <span
  m="2147230">when</span> <span m="2147380">do you</span> <span
  m="2147520">stop?</span> <span m="2149120">At</span> <span
  m="2149310">a</span> <span m="2149350">reasonable</span> <span
  m="2150000">point,</span> <span m="2150850">you</span> <span
  m="2151000">can</span> <span m="2151150">also</span> <span
  m="2151490">prove</span> <span m="2151730">the</span> <span
  m="2151870">other</span> <span m="2152050">way</span> <span
  m="2152450">that</span> <span m="2152630">it's</span> <span
  m="2152820">runtime</span> <span m="2153840">is</span> <span
  m="2154910">larger</span> <span m="2155220">than</span> <span
  m="2155370">something.</span> <span m="2156930">Here,</span> <span
  m="2157240">if</span> <span m="2157520">we</span> <span
  m="2157800">prove</span> <span m="2158060">this</span> <span
  m="2159470">big</span> <span m="2159780">O of</span> <span
  m="2159930">n</span> <span m="2160040">log</span> <span m="2160270">n,</span>
  <span m="2160580">if</span> <span m="2160690">you</span> <span
  m="2160810">can</span> <span m="2160950">show</span> <span
  m="2161100">the</span> <span m="2161230">other</span> <span
  m="2161400">way</span> <span m="2161580">that</span> <span
  m="2161780">it's</span> <span m="2161930">omega</span> <span
  m="2162170">n</span> <span m="2162330">log</span> <span m="2162430">n,</span>
  <span m="2163974">then</span> <span m="2164466">you</span> <span
  m="2164958">know</span> <span m="2165450">you</span> <span
  m="2165570">have</span> <span m="2165780">arrived</span> <span m="2166070">at
  a</span> <span m="2166540">final answer.</span></p><p><span
  m="2176870">That's</span> <span m="2177090">the</span> <span
  m="2177610">math</span> <span m="2177840">part.</span> <span
  m="2178720">Any</span> <span m="2178890">questions</span> <span
  m="2179210">about</span> <span m="2179570">that?</span> <span
  m="2183530">Yeah.</span> <span m="2184030">Any</span> <span
  m="2184190">questions</span> <span m="2184490">about</span> <span
  m="2184740">everything</span> <span m="2185100">I</span> <span
  m="2185190">have</span> <span m="2185330">said so far?</span> <span
  m="2195430">If</span> <span m="2195650">not,</span> <span
  m="2196170">so</span> <span m="2196300">lastly,</span> <span
  m="2196870">I</span> <span m="2197200">just</span> <span m="2197470">have
  a</span> <span m="2197540">few</span> <span m="2197750">comments,</span> <span
  m="2199750">several</span> <span m="2200500">terminology.</span></p><p><span
  m="2203740">Now,</span> <span m="2204150">this</span> <span
  m="2205540">recitation</span> <span m="2206180">we</span> <span
  m="2207200">focused</span> <span m="2207350">on</span> <span
  m="2207480">expected</span> <span m="2207930">runtime.</span> <span
  m="2209920">You</span> <span m="2210060">have</span> <span
  m="2210610">already</span> <span m="2210700">seen</span> <span
  m="2211560">amortized</span> <span m="2211840">runtime.</span> <span
  m="2218100">Or</span> <span m="2218340">you</span> <span
  m="2218470">may</span> <span m="2218620">have</span> <span
  m="2218870">heard</span> <span m="2218990">of</span> <span
  m="2219400">average</span> <span m="2219800">runtime.</span></p><p><span
  m="2226900">So</span> <span m="2227240">to</span> <span m="2227410">be</span>
  <span m="2227520">honest,</span> <span m="2228700">expected</span> <span
  m="2229520">and</span> <span m="2229740">amortized</span> <span
  m="2230930">are</span> <span m="2231160">just</span> <span
  m="2231470">too</span> <span m="2231780">fancier</span> <span
  m="2232280">ways</span> <span m="2232680">of</span> <span
  m="2232800">saying</span> <span m="2233180">average.</span> <span
  m="2234470">But</span> <span m="2236690">in</span> <span
  m="2236870">algorithm</span> <span m="2237230">analysis,</span> <span
  m="2237790">we</span> <span m="2237980">do</span> <span
  m="2238240">mean</span> <span m="2238480">slightly</span> <span
  m="2238870">different</span> <span m="2239170">things</span> <span
  m="2240910">with</span> <span m="2241080">these</span> <span
  m="2241280">terms.</span> <span m="2245160">So</span> <span
  m="2246150">the</span> <span m="2246270">difference</span> <span
  m="2247430">is</span> <span m="2247640">that</span> <span
  m="2248190">we</span> <span m="2248360">are</span> <span
  m="2248490">averaging</span> <span m="2249310">over</span> <span
  m="2249700">different</span> <span m="2250010">things.</span></p><p><span
  m="2251540">So</span> <span m="2251670">if</span> <span m="2251820">we</span>
  <span m="2251950">say</span> <span m="2252390">average</span> <span
  m="2252780">runtime,</span> <span m="2253310">we</span> <span
  m="2253490">usually</span> <span m="2253870">mean</span> <span
  m="2254460">taking</span> <span m="2254640">the</span> <span
  m="2254740">average</span> <span m="2255190">over</span> <span
  m="2255370">input.</span> <span m="2257370">We</span> <span
  m="2257480">can</span> <span m="2257590">imagine</span> <span
  m="2258110">a</span> <span m="2258600">quick sort</span> <span
  m="2259070">of</span> <span m="2259390">quick</span> <span
  m="2259710">find</span> <span m="2259990">algorithm</span> <span
  m="2260540">that</span> <span m="2260890">doesn't</span> <span
  m="2261150">use</span> <span m="2261340">randomness,</span> <span
  m="2261900">where</span> <span m="2262110">you'll</span> <span
  m="2262410">always</span> <span m="2262760">select</span> <span
  m="2263160">your</span> <span m="2263290">first</span> <span
  m="2263680">element</span> <span m="2264100">as</span> <span
  m="2264230">your</span> <span m="2264400">favorite.</span> <span
  m="2265380">That's</span> <span m="2265620">a</span> <span
  m="2265820">reasonable</span> <span m="2266200">algorithm.</span></p><p><span
  m="2267220">If</span> <span m="2267370">your</span> <span
  m="2267730">input</span> <span m="2268090">is</span> <span
  m="2268220">random,</span> <span m="2268720">then</span> <span
  m="2269070">you</span> <span m="2269200">can</span> <span
  m="2269550">carry</span> <span m="2269860">out</span> <span
  m="2269980">the</span> <span m="2270050">same</span> <span
  m="2270280">argument</span> <span m="2270700">and</span> <span
  m="2270860">show</span> <span m="2271160">that</span> <span
  m="2271510">its</span> <span m="2271800">complexity</span> <span
  m="2272250">is</span> <span m="2273110">over</span> <span m="2273480">n</span>
  <span m="2274250">or</span> <span m="2274420">n</span> <span m="2274520">log
  n.</span> <span m="2275320">But</span> <span m="2275790">if</span> <span
  m="2275930">your</span> <span m="2276090">input</span> <span
  m="2276410">is</span> <span m="2276650">pre-sorted</span> <span
  m="2277330">or</span> <span m="2277430">reverse</span> <span
  m="2277705">sorted</span> <span m="2278220">in</span> <span
  m="2278330">some</span> <span m="2278490">special</span> <span
  m="2278810">cases,</span> <span m="2279470">you</span> <span
  m="2279580">cannot</span> <span m="2279820">do</span> <span
  m="2279930">that.</span> <span m="2281230">So</span> <span
  m="2281450">average</span> <span m="2281870">runtime</span> <span
  m="2282330">is</span> <span m="2282430">usually</span> <span
  m="2282880">a</span> <span m="2283170">very</span> <span
  m="2283420">weak</span> <span m="2283810">argument,</span> <span
  m="2284510">because</span> <span m="2284860">you</span> <span
  m="2284930">have</span> <span m="2285080">to</span> <span
  m="2285180">make</span> <span m="2285360">assumptions</span> <span
  m="2285840">about</span> <span m="2286690">your</span> <span
  m="2287160">input.</span></p><p><span m="2288400">And</span> <span
  m="2288640">expected</span> <span m="2289110">runtime</span> <span
  m="2290710">is</span> <span m="2291010">definitely</span> <span
  m="2291330">better,</span> <span m="2291790">because</span> <span
  m="2292540">we are</span> <span m="2292720">taking</span> <span
  m="2293030">average</span> <span m="2293500">over</span> <span
  m="2294210">the</span> <span m="2294350">randomness</span> <span
  m="2294830">we</span> <span m="2295060">introduced.</span> <span
  m="2296630">They</span> <span m="2296960">are</span> <span
  m="2297060">independent</span> <span m="2297530">of</span> <span
  m="2297690">the</span> <span m="2297890">input.</span> <span
  m="2300770">So</span> <span m="2300830">we're</span> <span
  m="2300970">not</span> <span m="2301160">making</span> <span
  m="2301470">any</span> <span m="2301660">assumptions</span> <span
  m="2303230">on</span> <span m="2303310">the</span> <span
  m="2303440">input.</span></p><p><span m="2305090">So</span> <span
  m="2305230">of</span> <span m="2305400">course,</span> <span
  m="2306210">this</span> <span m="2306500">comes</span> <span
  m="2306830">at</span> <span m="2306940">a</span> <span
  m="2307000">price.</span> <span m="2307300">This</span> <span
  m="2307600">randomness</span> <span m="2308610">doesn't</span> <span
  m="2308890">come</span> <span m="2309100">for</span> <span
  m="2309220">free.</span> <span m="2310330">So</span> <span
  m="2311370">in</span> <span m="2311540">fact,</span> <span
  m="2312430">it's</span> <span m="2312890">very</span> <span
  m="2313070">hard</span> <span m="2313390">to</span> <span
  m="2313660">generate</span> <span m="2314340">high</span> <span
  m="2314640">quantity</span> <span m="2315360">random</span> <span
  m="2315690">numbers.</span> <span m="2317030">Maybe</span> <span
  m="2317400">at</span> <span m="2317510">the</span> <span
  m="2317590">end</span> <span m="2317730">of</span> <span
  m="2317810">the</span> <span m="2317910">class,</span> <span
  m="2318360">you</span> <span m="2318460">will</span> <span
  m="2318470">see</span> <span m="2318760">that</span> <span
  m="2319000">in</span> <span m="2319150">crypto,</span> <span
  m="2320190">a</span> <span m="2320250">lot</span> <span m="2320720">of</span>
  <span m="2321450">works</span> <span m="2322030">are</span> <span
  m="2322160">just</span> <span m="2322350">devoted</span> <span
  m="2322800">to</span> <span m="2323030">generate</span> <span
  m="2323990">high</span> <span m="2324200">quantity</span> <span
  m="2324620">random</span> <span m="2324900">numbers.</span> <span
  m="2325630">If</span> <span m="2325760">you</span> <span
  m="2325850">can</span> <span m="2325990">do</span> <span
  m="2326110">that</span> <span m="2326520">efficiently,</span> <span
  m="2327440">you can</span> <span m="2327570">actually</span> <span
  m="2327870">solve</span> <span m="2328080">a lot of</span> <span
  m="2328330">problems.</span></p><p><span m="2329280">So</span> <span
  m="2329450">amortized</span> <span m="2330000">runtime</span> <span
  m="2331206">are</span> <span m="2331580">slightly,</span> <span
  m="2332690">again,</span> <span m="2333040">different</span> <span
  m="2333350">from</span> <span m="2333610">these</span> <span
  m="2333830">two,</span> <span m="2334150">because</span> <span
  m="2334350">they</span> <span m="2334480">are</span> <span
  m="2334600">taking</span> <span m="2334890">average</span> <span
  m="2335280">over</span> <span m="2335670">a</span> <span
  m="2335700">number</span> <span m="2335960">of</span> <span
  m="2336070">operations.</span> <span m="2337740">You're</span> <span
  m="2338070">doing</span> <span m="2338760">many,</span> <span
  m="2339060">many</span> <span m="2339180">operations</span> <span
  m="2339680">in</span> <span m="2339830">a</span> <span m="2339890">row.</span>
  <span m="2340260">And</span> <span m="2340530">some</span> <span
  m="2340690">of</span> <span m="2340800">them</span> <span
  m="2340950">takes</span> <span m="2341190">longer.</span> <span
  m="2341500">Some</span> <span m="2341680">of</span> <span
  m="2341900">them</span> <span m="2342130">take</span> <span
  m="2343040">shorter.</span> <span m="2343540">And</span> <span
  m="2343770">you</span> <span m="2343860">take</span> <span
  m="2344090">average</span> <span m="2344400">on</span> <span
  m="2344710">those.</span></p><p><span m="2349445">OK.</span> <span
  m="2350420">That's</span> <span m="2350800">this</span> <span
  m="2351100">recitation.</span> <span m="2351730">Any</span> <span
  m="2351900">questions?</span> <span m="2360540">OK.</span></p>
embedded_media:
  - uid: 6411b493a879c6ffbff1b7494a8f14ef
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: QPk8MUtq5yA
  - uid: b502c4e17f540adcb14343bcd0843539
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: QPk8MUtq5yA.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-4-randomization-randomized-median/QPk8MUtq5yA.srt
  - uid: 87c41ed92e0b3e587cf394fff42784c3
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: QPk8MUtq5yA.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-4-randomization-randomized-median/QPk8MUtq5yA.pdf
  - uid: 9ef618b318bfd4a11925f45e9b2405b4
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 7b766f8a752df75c04f3775cffe5796a
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 8ad3f03aa1eafa79d01b637588c92789
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: QPk8MUtq5yA
  - uid: 6a6c64b5006743072f69acf472321996
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/QPk8MUtq5yA/default.jpg'
  - uid: 5cad890c067fca25805117d9767735df
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: dc215a62fdd990cdb784938ddb9a67c5
    parent_uid: ea756b222893f3085b773e01a5ad83b7
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec04_300k.mp4'
type: courses
layout: video
---
