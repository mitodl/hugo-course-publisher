---
title: >-
  Recitation 1: Divide & Conquer: Smarter Interval Scheduling, Master Theorem,
  Strassen's Algorithm
uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
parent_uid: 8c671299aae36eba669ca13490c21dec
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-1-divide-conquer-smarter-interval-scheduling-master-theorem-strassens-algorithm
short_url: >-
  recitation-1-divide-conquer-smarter-interval-scheduling-master-theorem-strassens-algorithm
inline_embed_id: >-
  79578250recitation1:divide&conquer:smarterintervalscheduling,mastertheorem,strassen'salgorithm99226528
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to
  matrix multiplication and weighted interval scheduling are
  discussed.</p><p><strong>Instructors:</strong> Ling Ren</p>
related_resources_text: ''
transcript: >-
  <p><span m="90">The</span> <span m="190">following</span> <span
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
  <span m="10740">make</span> <span m="10940">a</span> <span
  m="10990">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13340">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="20872">LING REN: All</span> <span m="21280">right,</span> <span
  m="21530">welcome</span> <span m="21860">everyone.</span> <span
  m="22680">This</span> <span m="22880">is</span> <span m="23110">6046</span>
  <span m="24030">presentation.</span> <span m="25870">Just</span> <span
  m="26040">make</span> <span m="26200">sure</span> <span
  m="26390">you're</span> <span m="26490">in</span> <span m="26680">the</span>
  <span m="26870">right</span> <span m="27080">place.</span> <span
  m="30670">My</span> <span m="30810">name</span> <span m="31020">is</span>
  <span m="31170">Ling</span> <span m="31360">Ren.</span> <span
  m="32050">I'm</span> <span m="32340">one</span> <span m="32590">of</span>
  <span m="32710">the</span> <span m="32870">10</span> <span
  m="33140">TAs</span> <span m="33740">for</span> <span m="34080">this</span>
  <span m="34280">class.</span> <span m="36570">We</span> <span
  m="36710">do</span> <span m="36950">have</span> <span m="37350">a</span> <span
  m="37750">second</span> <span m="38350">TA</span> <span m="38640">for</span>
  <span m="38800">this</span> <span m="39210">section.</span> <span
  m="39860">I</span> <span m="40080">think</span> <span m="40440">he</span>
  <span m="40710">is</span> <span m="40940">not</span> <span
  m="41170">here</span> <span m="41420">right</span> <span m="41590">now,</span>
  <span m="41840">but,</span> <span m="43510">basically,</span> <span
  m="43910">[INAUDIBLE]</span> <span m="44310">and</span> <span
  m="44620">I</span> <span m="44740">will</span> <span m="44920">be</span> <span
  m="45210">switching</span> <span m="45750">every</span> <span
  m="45960">other</span> <span m="46140">week.</span></p><p><span
  m="48840">I</span> <span m="49000">want</span> <span m="49200">to</span> <span
  m="49260">remind</span> <span m="49680">you,</span> <span
  m="50180">just</span> <span m="50510">a</span> <span m="50710">heads</span>
  <span m="50900">up,</span> <span m="51500">this</span> <span
  m="51770">section</span> <span m="52350">is</span> <span
  m="53180">recorded</span> <span m="53720">for</span> <span
  m="54030">OCW</span> <span m="54570">purpose.</span> <span
  m="55500">But</span> <span m="56420">I</span> <span m="56500">think</span>
  <span m="57130">he's</span> <span m="57270">only</span> <span
  m="58170">recording</span> <span m="58810">us,</span> <span
  m="59790">the</span> <span m="59920">TAs.</span> <span m="61110">You're</span>
  <span m="61560">not</span> <span m="62010">in</span> <span m="62280">a</span>
  <span m="62360">camera.</span> <span m="68040">All</span> <span
  m="68110">right,</span> <span m="68300">so,</span> <span m="68520">the</span>
  <span m="68650">only</span> <span m="68880">purpose</span> <span
  m="69590">we</span> <span m="69690">are</span> <span m="69830">here</span>
  <span m="70140">is</span> <span m="70270">to</span> <span
  m="70400">help</span> <span m="70650">you</span> <span m="70840">learn</span>
  <span m="71170">this</span> <span m="71710">very</span> <span
  m="71950">interesting,</span> <span m="72460">and</span> <span
  m="72610">also</span> <span m="72840">very</span> <span
  m="73060">useful,</span> <span m="73460">class.</span></p><p><span
  m="74320">So</span> <span m="75430">don't</span> <span
  m="75630">hesitate</span> <span m="76040">to</span> <span m="76200">ask</span>
  <span m="76500">any</span> <span m="76670">questions</span> <span
  m="77810">or</span> <span m="78320">give</span> <span m="78570">us</span>
  <span m="78770">any</span> <span m="79030">feedback,</span> <span
  m="79580">like</span> <span m="79780">whether</span> <span
  m="79960">I'm</span> <span m="80170">going</span> <span m="80780">too</span>
  <span m="80990">fast</span> <span m="81450">or</span> <span
  m="81590">too</span> <span m="81770">slow,</span> <span
  m="82790">whether</span> <span m="82860">you</span> <span
  m="83040">want</span> <span m="83320">us</span> <span m="83490">to</span>
  <span m="84000">cover</span> <span m="84360">something</span> <span
  m="85120">that's</span> <span m="85880">not</span> <span m="86150">in</span>
  <span m="86260">the</span> <span m="86360">posted</span> <span
  m="86820">schedule,</span> <span m="88370">or</span> <span
  m="89340">just</span> <span m="89970">anything</span> <span m="90940">we
  can</span> <span m="91030">help.</span> <span m="92390">All</span> <span
  m="92500">right,</span> <span m="92700">so</span> <span m="92810">let's</span>
  <span m="93050">get</span> <span m="93190">started.</span></p><p><span
  m="94930">The</span> <span m="95140">two</span> <span
  m="95330">lectures</span> <span m="96080">in</span> <span
  m="96580">this</span> <span m="96770">week,</span> <span m="97070">in</span>
  <span m="97180">the</span> <span m="97270">first</span> <span
  m="97520">week,</span> <span m="98640">focus</span> <span m="99020">on</span>
  <span m="99710">divide</span> <span m="99810">and</span> <span
  m="100020">conquer.</span> <span m="109610">It</span> <span
  m="109730">is</span> <span m="109850">a</span> <span m="109940">class</span>
  <span m="110190">of</span> <span m="110300">algorithm</span> <span
  m="110760">that</span> <span m="111000">usually</span> <span
  m="111690">involves</span> <span m="112080">recursion</span> <span
  m="113170">in</span> <span m="113570">the</span> <span
  m="113970">algorithm</span> <span m="114340">description.</span> <span
  m="115960">And</span> <span m="116420">Professor</span> <span
  m="116990">Devadas</span> <span m="117965">worked</span> <span
  m="119380">through</span> <span m="119980">several</span> <span
  m="121640">algorithms,</span> <span m="122220">including</span> <span
  m="122760">weighted</span> <span m="123150">interval</span> <span
  m="123540">scheduling</span> <span m="124800">and</span> <span
  m="125030">a</span> <span m="125190">bunch</span> <span m="125440">of</span>
  <span m="125650">others,</span> <span m="126220">and</span> <span
  m="126360">he</span> <span m="126500">left</span> <span
  m="126920">several</span> <span m="127280">open</span> <span
  m="127640">problems.</span></p><p><span m="140920">So</span> <span
  m="141110">we</span> <span m="141270">will</span> <span
  m="141720">answer</span> <span m="142110">those</span> <span
  m="142380">open</span> <span m="143260">questions</span> <span
  m="143750">in</span> <span m="143870">this</span> <span
  m="144030">section,</span> <span m="144460">and</span> <span
  m="144920">we'll</span> <span m="144970">also</span> <span
  m="146570">show</span> <span m="146910">you</span> <span m="147250">a</span>
  <span m="147330">new</span> <span m="147550">algorithm,</span> <span
  m="147810">and</span> <span m="148380">analyze</span> <span
  m="149010">a</span> <span m="149160">bunch</span> <span m="149390">of</span>
  <span m="149510">other</span> <span m="149680">algorithms.</span> <span
  m="152080">So</span> <span m="152610">just</span> <span m="152890">to</span>
  <span m="153440">remind</span> <span m="153840">everyone</span> <span
  m="154360">what</span> <span m="154530">weighted</span> <span
  m="154680">interval</span> <span m="155150">scheduling</span> <span
  m="155700">is.</span> <span m="160230">In</span> <span m="160390">this</span>
  <span m="160560">problem,</span> <span m="161150">we</span> <span
  m="161210">are</span> <span m="161330">given</span> <span m="161870">a</span>
  <span m="161940">bunch</span> <span m="162210">of</span> <span
  m="162380">requests,</span> <span m="172490">each</span> <span
  m="172630">with</span> <span m="172870">a</span> <span m="172940">start</span>
  <span m="173300">time</span> <span m="173660">and</span> <span
  m="173900">a</span> <span m="174030">finish</span> <span
  m="174420">time.</span> <span m="175230">And</span> <span
  m="175460">our</span> <span m="175650">goal</span> <span m="176230">is</span>
  <span m="176490">to</span> <span m="176670">find</span> <span
  m="177940">a</span> <span m="178010">subset</span> <span m="178410">of</span>
  <span m="178560">them</span> <span m="179310">that</span> <span
  m="180270">are</span> <span m="180440">compatible,</span> <span
  m="181480">meaning</span> <span m="181670">they</span> <span
  m="181780">do</span> <span m="181890">not</span> <span
  m="182080">overlap,</span> <span m="183330">and</span> <span
  m="184510">that</span> <span m="184750">have</span> <span m="185020">a</span>
  <span m="185410">largest</span> <span m="186060">combined</span> <span
  m="186870">weight.</span> <span m="187640">OK,</span> <span m="187990">are
  we</span> <span m="188330">clear?</span> <span m="188680">Everyone</span>
  <span m="189130">clear about</span> <span m="189300">that?</span></p><p><span
  m="190760">So</span> <span m="191570">an</span> <span m="191870">easier</span>
  <span m="192320">case</span> <span m="192750">is</span> <span
  m="193000">when</span> <span m="193790">the</span> <span
  m="193900">problem</span> <span m="194260">is</span> <span
  m="194380">unweighted,</span> <span m="195230">meaning</span> <span
  m="195540">that</span> <span m="196710">every</span> <span
  m="197100">task</span> <span m="197510">has</span> <span m="197730">the</span>
  <span m="197880">same</span> <span m="198210">weight.</span> <span
  m="198980">In</span> <span m="199120">that</span> <span
  m="199320">case,</span> <span m="199530">we</span> <span m="199650">can</span>
  <span m="199760">just</span> <span m="199900">solve</span> <span
  m="200160">it</span> <span m="200500">using</span> <span m="200880">our</span>
  <span m="201620">[? Grady ?]</span> <span m="201920">algorithm.</span> <span
  m="204120">But</span> <span m="204330">when</span> <span m="204650">the</span>
  <span m="204760">problem</span> <span m="205100">becomes</span> <span
  m="205460">weighted,</span> <span m="206360">we</span> <span
  m="206540">have</span> <span m="206710">to</span> <span m="206820">use</span>
  <span m="207560">dynamic</span> <span m="208010">programming,</span> <span
  m="208530">or</span> <span m="208700">recursion,</span> <span
  m="209860">and</span> <span m="210410">Srini</span> <span
  m="212050">introduced</span> <span m="212560">a</span> <span
  m="212760">simple</span> <span m="213090">one,</span> <span
  m="213620">a</span> <span m="213710">basic</span> <span
  m="214080">version,</span> <span m="215560">in</span> <span
  m="215720">a</span> <span m="215760">class.</span> <span m="216560">Can</span>
  <span m="216930">someone</span> <span m="217800">remind</span> <span
  m="218220">us</span> <span m="218670">how</span> <span m="218760">that</span>
  <span m="219030">algorithm</span> <span m="219440">works?</span> <span
  m="221830">Any</span> <span m="221940">volunteers?</span></p><p><span
  m="233645">AUDIENCE: [INAUDIBLE]</span></p><p><span m="238620">LING REN: Can
  you</span> <span m="238790">speak</span> <span
  m="239000">louder?</span></p><p><span m="239650">AUDIENCE: [INAUDIBLE]</span>
  <span m="241880">so</span> <span m="242020">we</span> <span
  m="242140">find</span> <span m="242290">that it's</span> <span
  m="242750">not</span> <span m="243218">conflicting</span> <span
  m="243686">[INAUDIBLE].</span></p><p><span m="249330">LING REN: So</span>
  <span m="249530">what's</span> <span m="249660">your</span> <span
  m="249730">name?</span></p><p><span m="250597">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="255850">LING REN: Yeah,</span> <span
  m="255950">I</span> <span m="256050">think</span> <span m="256709">the</span>
  <span m="256880">version</span> <span m="257010">you</span> <span
  m="257230">described</span> <span m="257790">is</span> <span
  m="258180">for</span> <span m="258410">the</span> <span
  m="258640">unweighted</span> <span m="258930">case.</span> <span
  m="259360">In</span> <span m="259500">unweighted</span> <span
  m="259890">case,</span> <span m="260200">we</span> <span
  m="260480">just</span> <span m="260760">schedule</span> <span
  m="262230">the</span> <span m="262430">1</span> <span m="262820">with</span>
  <span m="262980">the</span> <span m="263050">earliest</span> <span
  m="263600">finish</span> <span m="263900">time,</span> <span
  m="264270">and,</span> <span m="264450">then,</span> <span
  m="265210">we</span> <span m="265560">remove</span> <span
  m="265910">all</span> <span m="266040">the</span> <span
  m="266140">incompatible</span> <span m="266730">ones,</span> <span
  m="267040">and</span> <span m="267200">we</span> <span m="267320">keep</span>
  <span m="267500">going,</span> <span m="268300">right?</span> <span
  m="268500">That</span> <span m="269160">solved</span> <span m="269490">the
  unweighted</span> <span m="270150">version.</span> <span m="270990">If</span>
  <span m="271130">it's</span> <span m="271300">the</span> <span
  m="271400">weighted</span> <span m="271710">version,</span> <span
  m="272350">we</span> <span m="272490">need</span> <span m="272670">to</span>
  <span m="272780">use</span> <span m="273600">recursion.</span> <span
  m="274495">And</span> <span m="274750">remember,</span> <span
  m="275650">we</span> <span m="275880">break</span> <span m="276210">the</span>
  <span m="276340">problem</span> <span m="276800">into</span> <span
  m="278120">many</span> <span m="278590">sub-problems,</span> <span
  m="279970">and</span> <span m="280180">each</span> <span m="280390">one</span>
  <span m="280750">can</span> <span m="280990">potentially</span> <span
  m="281600">be an</span> <span m="281860">optimal</span> <span
  m="282280">solution.</span> <span m="284020">Does</span> <span
  m="284210">anyone</span> <span m="284580">remember</span> <span
  m="284880">that?</span> <span m="288010">Care to give</span> <span
  m="288280">it a try?</span></p><p><span m="289398">AUDIENCE: Sure.</span>
  <span m="290862">So</span> <span m="291350">we</span> <span
  m="291838">break</span> <span m="292326">it</span> <span
  m="292814">into</span> <span m="293302">subproblems.</span> <span
  m="293790">We took the</span> <span m="294278">best</span> <span
  m="294766">solution</span> <span m="295254">from a</span> <span
  m="295742">certain</span> <span m="296230">point,</span> <span
  m="297694">and</span> <span m="298182">then</span> <span m="298670">we</span>
  <span m="299158">calculate</span> <span m="299646">that</span> <span
  m="300134">subproblem</span> <span m="300622">starting</span> <span
  m="301110">at</span> <span m="301598">all the different</span> <span
  m="302086">finish times.</span> <span
  m="303062">[INAUDIBLE].</span></p><p><span m="306000">LING REN: Great.</span>
  <span m="306470">What</span> <span m="306790">is</span> <span
  m="306900">your</span> <span m="306990">name?</span></p><p><span
  m="307516">AUDIENCE: [? Amin. ?]</span></p><p><span m="310090">LING REN: [?
  Amin? ?]</span> <span m="310590">OK.</span> <span m="311210">[? Amin ?]</span>
  <span m="311550">said,</span> <span m="312800">let's</span> <span
  m="313130">just</span> <span m="313380">try</span> <span
  m="313630">every</span> <span m="313950">one</span> <span m="314700">as</span>
  <span m="314930">our</span> <span m="315320">potential</span> <span
  m="317290">first</span> <span m="318320">request.</span> <span
  m="322250">So</span> <span m="322510">if</span> <span m="324110">we</span>
  <span m="325000">request the</span> <span m="325460">j</span> <span
  m="325690">as</span> <span m="325970">our</span> <span
  m="326120">first,</span> <span m="326890">we</span> <span
  m="327050">get</span> <span m="327240">its</span> <span
  m="327370">weight.</span> <span m="328890">And</span> <span
  m="329130">then,</span> <span m="329780">we're</span> <span
  m="329960">going</span> <span m="330190">to</span> <span
  m="330440">solve</span> <span m="331240">a subproblem.</span> <span
  m="331900">So</span> <span m="332080">let</span> <span m="332180">me</span>
  <span m="332540">call</span> <span m="332860">the</span> <span
  m="332980">original</span> <span m="333380">problem.</span> <span
  m="333930">We</span> <span m="334110">did</span> <span
  m="334300">interval</span> <span m="334640">scheduling</span> <span
  m="335890">with</span> <span m="338210">all</span> <span m="338400">the</span>
  <span m="338480">incoming</span> <span m="338910">requests.</span></p><p><span
  m="341040">Now,</span> <span m="341260">we</span> <span
  m="341370">choose</span> <span m="341800">j,</span> <span
  m="342610">request</span> <span m="343050">as</span> <span
  m="343230">our</span> <span m="343370">first.</span> <span
  m="344480">Now,</span> <span m="344660">we</span> <span m="344790">are</span>
  <span m="344890">left</span> <span m="345230">with</span> <span
  m="345510">a</span> <span m="345570">subproblem</span> <span
  m="350550">that</span> <span m="351060">starts</span> <span
  m="351800">after</span> <span m="352320">request</span> <span
  m="352770">to</span> <span m="352800">j</span> <span
  m="353300">finishes.</span> <span m="354250">So I'll</span> <span
  m="354600">write</span> <span m="354910">that</span> <span
  m="355230">as</span> <span m="356280">Rj,</span> <span m="358860">Where
  I</span> <span m="359330">define</span> <span m="359780">Rj</span> <span
  m="361860">to</span> <span m="361960">be</span> <span m="363240">the</span>
  <span m="363360">set</span> <span m="363590">of</span> <span
  m="363680">requests</span> <span m="365300">where</span> <span
  m="365790">their</span> <span m="366020">stop</span> <span
  m="366350">time</span> <span m="368870">is</span> <span
  m="369070">later</span> <span m="373070">than</span> <span
  m="373490">the</span> <span m="373580">finish</span> <span
  m="373870">time</span> <span m="374130">of</span> <span m="374310">the</span>
  <span m="374420">j-th</span> <span m="374680">request.</span></p><p><span
  m="378450">OK,</span> <span m="378590">so</span> <span m="379850">just</span>
  <span m="380060">to</span> <span m="380520">repeat,</span> <span
  m="382230">we</span> <span m="382450">choose</span> <span m="382630">a</span>
  <span m="382750">request,</span> <span m="383180">has</span> <span
  m="383400">the</span> <span m="383500">potential</span> <span
  m="383970">to</span> <span m="384570">be</span> <span m="384680">the</span>
  <span m="384780">first</span> <span m="385020">request,</span> <span
  m="386060">and</span> <span m="386250">then,</span> <span m="386550">we</span>
  <span m="386680">look</span> <span m="386890">at</span> <span
  m="387250">all</span> <span m="387450">the</span> <span
  m="387540">requests</span> <span m="387920">that</span> <span
  m="388140">start</span> <span m="388450">after</span> <span
  m="388830">it,</span> <span m="389510">and</span> <span
  m="389790">solve</span> <span m="390070">a</span> <span
  m="390130">subproblem</span> <span m="392290">of</span> <span
  m="393010">that</span> <span m="393200">case.</span> <span
  m="394090">Then,</span> <span m="394320">we</span> <span
  m="394440">take</span> <span m="394640">a</span> <span m="394690">max</span>
  <span m="398580">of</span> <span m="398780">all</span> <span
  m="398930">the</span> <span m="399040">candidate</span> <span
  m="399500">we</span> <span m="399610">have,</span> <span m="403880">and</span>
  <span m="404330">that's</span> <span m="404600">going</span> <span
  m="404800">to</span> <span m="404890">give</span> <span m="405100">us</span>
  <span m="405270">the</span> <span m="405450">optimal</span> <span
  m="405840">solution.</span> <span m="407740">Any</span> <span
  m="407900">question</span> <span m="408170">about</span> <span
  m="408390">this</span> <span m="408530">algorithm?</span></p><p><span
  m="414980">So</span> <span m="415150">this</span> <span
  m="415370">algorithm</span> <span m="415850">runs</span> <span
  m="416090">in</span> <span m="416540">n</span> <span m="416840">square</span>
  <span m="417250">time.</span> <span m="425560">Now,</span> <span
  m="425730">we're</span> <span m="425880">going</span> <span
  m="426110">to</span> <span m="427040">try</span> <span m="427400">to</span>
  <span m="427650">optimize</span> <span m="428180">that,</span> <span
  m="428620">and</span> <span m="428830">come</span> <span m="429000">up</span>
  <span m="429120">with</span> <span m="429270">a</span> <span
  m="429960">better</span> <span m="430370">algorithm.</span> <span
  m="432460">So</span> <span m="434550">in</span> <span m="434710">order</span>
  <span m="434910">to</span> <span m="435020">improve</span> <span
  m="435610">anything,</span> <span m="436800">we</span> <span
  m="437040">first</span> <span m="438330">want</span> <span
  m="438510">to</span> <span m="438680">identify</span> <span
  m="439610">the</span> <span m="439690">inefficiency</span> <span
  m="440660">in</span> <span m="440830">this</span> <span
  m="441020">algorithm.</span> <span m="442650">So</span> <span
  m="443770">which</span> <span m="444090">part</span> <span
  m="444570">in</span> <span m="444730">the</span> <span
  m="444800">algorithm</span> <span m="445380">do</span> <span
  m="445790">you</span> <span m="445960">think</span> <span m="446210">is</span>
  <span m="446540">inefficient,</span> <span m="446960">or</span> <span
  m="447380">silly,</span> <span m="448470">unnecessary?</span> <span
  m="449410">Go</span> <span m="449530">ahead.</span></p><p><span
  m="449690">AUDIENCE: So</span> <span m="450166">it's</span> <span
  m="450642">inefficient</span> <span m="451118">to look</span> <span
  m="451594">through</span> <span m="452070">every previous</span> <span
  m="452546">subproblem,</span> <span m="455840">when</span> <span
  m="456110">we're</span> <span m="456380">trying to</span> <span
  m="456788">find</span> <span m="460046">maximum</span> <span
  m="460499">[INAUDIBLE].</span></p><p><span m="463220">LING REN: I</span> <span
  m="463320">was</span> <span m="463420">saying</span> <span
  m="463710">that</span> <span m="464130">we</span> <span
  m="464250">don't</span> <span m="464390">need</span> <span
  m="464540">to</span> <span m="464660">go</span> <span
  m="464870">through</span> <span m="465610">every</span> <span
  m="465980">of</span> <span m="466080">this</span> <span
  m="466260">case.</span></p><p><span m="468428">AUDIENCE: Yeah,</span> <span
  m="469342">we</span> <span m="469799">shouldn't</span> <span
  m="471170">Well,</span> <span m="471400">we should</span> <span m="471864">be
  able to</span> <span m="472328">efficiently</span> <span m="472792">query
  for</span> <span m="475344">the</span> <span m="475801">right
  one.</span></p><p><span m="478090">LING REN: OK,</span> <span
  m="478930">I</span> <span m="479080">think</span> <span m="480040">you
  are</span> <span m="480230">definitely</span> <span m="480990">correct.</span>
  <span m="481910">So</span> <span m="482160">let</span> <span
  m="482290">me</span> <span m="482520">just</span> <span m="482790">go</span>
  <span m="482990">through</span> <span m="483720">what</span> <span
  m="483980">this</span> <span m="484160">algorithm</span> <span
  m="484570">does,</span> <span m="484870">and</span> <span m="485150">it</span>
  <span m="485230">will</span> <span m="485410">be</span> <span
  m="485530">more</span> <span m="485720">clear.</span> <span
  m="486770">So</span> <span m="487410">what</span> <span m="487620">this</span>
  <span m="487780">means</span> <span m="488190">is,</span> <span
  m="489550">I'll</span> <span m="489750">choose</span> <span
  m="490970">the</span> <span m="491070">first</span> <span
  m="491370">request.</span> <span m="492510">I'll</span> <span
  m="492750">request</span> <span m="492830">1</span> <span m="493220">as</span>
  <span m="493380">my</span> <span m="493520">first</span> <span
  m="493770">request.</span> <span m="494820">Then,</span> <span
  m="495740">I'm</span> <span m="495870">going</span> <span m="496100">to</span>
  <span m="496220">consider</span> <span m="496870">only</span> <span
  m="497200">the</span> <span m="497310">requests</span> <span
  m="497910">that</span> <span m="498090">start</span> <span
  m="498670">after</span> <span m="499030">1</span> <span
  m="499290">finishes,</span> <span m="499850">right?</span> <span
  m="500100">That</span> <span m="500570">only</span> <span
  m="500870">leaves</span> <span m="501460">request</span> <span
  m="501810">a</span> <span m="501850">5.</span> <span
  m="502680">Potentially</span> <span m="503060">some other's</span> <span
  m="503800">already</span> <span m="503930">been</span> <span
  m="504100">drawn</span> <span m="504350">there.</span> <span
  m="505710">That's</span> <span m="505890">my</span> <span
  m="506040">first</span> <span m="506310">candidate</span> <span
  m="507060">in</span> <span m="507210">that</span> <span
  m="507420">max.</span></p><p><span m="508592">My</span> <span
  m="508960">second</span> <span m="509460">candidate</span> <span
  m="509940">is</span> <span m="510120">actually</span> <span
  m="510670">request</span> <span m="511140">2</span> <span m="511910">as</span>
  <span m="512090">my</span> <span m="512280">first</span> <span
  m="512600">request.</span> <span m="514169">Then,</span> <span
  m="514450">I</span> <span m="514580">have</span> <span m="514730">to</span>
  <span m="514860">remove</span> <span m="515280">request</span> <span
  m="515630">1,</span> <span m="516010">because</span> <span
  m="516270">it</span> <span m="516380">starts</span> <span
  m="516640">too</span> <span m="516809">early,</span> <span
  m="518049">and</span> <span m="518210">then,</span> <span
  m="518390">I'm</span> <span m="518500">left</span> <span
  m="518730">with</span> <span m="518950">all</span> <span m="519080">the</span>
  <span m="519360">remaining</span> <span m="519720">requests.</span> <span
  m="520510">I'll</span> <span m="520679">solve</span> <span
  m="520909">that</span> <span m="521150">subproblem.</span> <span
  m="522380">That's</span> <span m="522570">candidate</span> <span
  m="523030">2.</span></p><p><span m="523880">Candidate</span> <span
  m="524330">3,</span> <span m="526990">I</span> <span m="527120">chose</span>
  <span m="527670">request</span> <span m="528140">3</span> <span
  m="528470">as</span> <span m="528710">my</span> <span m="528850">first</span>
  <span m="529140">request,</span> <span m="530190">and</span> <span
  m="530380">then</span> <span m="530570">I</span> <span m="530630">have</span>
  <span m="530770">to</span> <span m="530880">remove</span> <span
  m="531560">1</span> <span m="531820">and</span> <span m="531980">2,</span>
  <span m="532460">because</span> <span m="532720">they</span> <span
  m="532830">start</span> <span m="533090">too</span> <span
  m="533310">early.</span> <span m="534810">Oh,</span> <span m="535180">4</span>
  <span m="535440">as</span> <span m="535570">well.</span> <span
  m="535970">It</span> <span m="536120">also</span> <span
  m="536330">starts</span> <span m="536620">too</span> <span
  m="536810">early,</span> <span m="536960">right?</span> <span
  m="537150">Before</span> <span m="537600">3</span> <span
  m="537800">finishes.</span> <span m="538750">Everyone</span> <span
  m="539130">following</span> <span m="539410">that?</span> <span
  m="540080">So</span> <span m="540460">we're</span> <span
  m="540690">left</span> <span m="540900">with</span> <span
  m="541250">the</span> <span m="541350">remaining</span> <span
  m="541740">request.</span> <span m="544170">Is</span> <span
  m="544310">it</span> <span m="544410">more</span> <span
  m="544570">clear</span> <span m="544810">now?</span> <span
  m="548820">Go</span> <span m="548930">ahead.</span></p><p><span
  m="549290">AUDIENCE: So</span> <span m="550270">candidate,</span> <span
  m="551250">if you</span> <span m="551740">start with</span> <span
  m="552230">3, that's</span> <span m="552720">actually a</span> <span
  m="553210">subproblem of 2.</span> <span
  m="556150">[INAUDIBLE].</span></p><p><span m="560070">LING REN: Great</span>
  <span m="560300">point.</span> <span m="562790">What's</span> <span
  m="562920">your</span> <span m="563010">name?</span></p><p><span
  m="563170">AUDIENCE: Andrew.</span></p><p><span m="564990">LING REN:
  Andrew</span> <span m="565300">said,</span> <span m="566230">we</span> <span
  m="566380">can</span> <span m="566620">potentially</span> <span
  m="567370">be</span> <span m="567590">solving</span> <span
  m="568270">many</span> <span m="568650">repeated</span> <span
  m="569840">subproblems,</span> <span m="570820">like</span> <span
  m="570940">this.</span> <span m="572590">We</span> <span
  m="572730">definitely</span> <span m="573070">don't</span> <span
  m="573110">want</span> <span m="573310">to</span> <span m="573350">do</span>
  <span m="573480">that.</span> <span m="574370">And</span> <span
  m="574760">that's</span> <span m="575060">actually</span> <span
  m="576640">the</span> <span m="577160">core</span> <span
  m="577400">idea,</span> <span m="577870">the</span> <span
  m="578300">one</span> <span m="578580">crisp</span> <span
  m="578880">idea</span> <span m="579340">of</span> <span
  m="579760">dynamic</span> <span m="580220">programming.</span> <span
  m="581720">Andrew,</span> <span m="581990">can</span> <span
  m="582110">you</span> <span m="582230">tell</span> <span m="582400">me</span>
  <span m="582600">what's</span> <span m="582850">the</span> <span
  m="583190">definition</span> <span m="583880">of</span> <span
  m="584380">dynamic</span> <span m="584730">programming?</span> <span
  m="586016">You</span> <span m="586390">remember?</span> <span
  m="586970">Anyone</span> <span m="587170">remember</span> <span
  m="587720">that?</span> <span m="589846">Go</span> <span
  m="590320">ahead.</span></p><p><span m="590700">AUDIENCE: Just</span> <span
  m="591010">memorize</span> <span m="591650">subproblems,</span> <span
  m="591990">then</span> <span m="592560">look</span> <span m="593020">them
  up.</span></p><p><span m="593940">LING REN: Exactly.</span> <span
  m="594830">So</span> <span m="595080">dynamic</span> <span
  m="595610">programming</span> <span m="596970">says,</span> <span
  m="598400">we</span> <span m="598510">will</span> <span
  m="598690">break</span> <span m="599520">a</span> <span
  m="599620">problem</span> <span m="600060">into</span> <span
  m="600420">subproblems,</span> <span m="601160">and</span> <span
  m="601420">subproblems</span> <span m="601920">into</span> <span
  m="602130">even</span> <span m="602350">more</span> <span
  m="602510">subproblems,</span> <span m="603670">but</span> <span
  m="604110">whenever</span> <span m="604550">we</span> <span
  m="604680">solve</span> <span m="604940">one,</span> <span
  m="605370">we</span> <span m="605550">should</span> <span
  m="606510">memorize,</span> <span m="607480">or</span> <span
  m="607910">just</span> <span m="608100">remember</span> <span
  m="608600">its</span> <span m="608790">result</span> <span
  m="609220">and</span> <span m="609320">store</span> <span m="609600">it</span>
  <span m="609660">somewhere.</span> <span m="610450">And</span> <span
  m="610500">if</span> <span m="610560">you</span> <span m="610820">need
  it</span> <span m="611170">again,</span> <span m="611740">we'll</span> <span
  m="611830">just</span> <span m="611950">retrieve</span> <span
  m="612300">it,</span> <span m="612780">without</span> <span
  m="613240">resolving</span> <span m="613690">the</span> <span
  m="613780">problem.</span> <span m="616830">That's</span> <span
  m="617010">definitely</span> <span m="617400">a</span> <span
  m="617450">great</span> <span m="617660">point.</span></p><p><span
  m="619240">So</span> <span m="620830">we</span> <span m="620970">can</span>
  <span m="621100">analyze</span> <span m="621920">the</span> <span
  m="622030">complexity</span> <span m="622530">of</span> <span
  m="622740">this</span> <span m="623080">algorithm</span> <span
  m="624050">later,</span> <span m="624860">because</span> <span
  m="625020">I</span> <span m="625060">want</span> <span m="625230">to</span>
  <span m="625360">touch</span> <span m="625670">on</span> <span
  m="625800">this</span> <span m="626140">more</span> <span
  m="626560">efficient</span> <span m="626820">algorithm</span> <span
  m="627220">first.</span> <span m="628080">And</span> <span
  m="628210">we'll</span> <span m="628390">see</span> <span
  m="628730">that,</span> <span m="629050">even</span> <span
  m="629440">after</span> <span m="629820">Andrew's</span> <span
  m="630230">optimization,</span> <span m="631070">its</span> <span
  m="631250">runtime</span> <span m="631680">is</span> <span m="631980">n</span>
  <span m="632190">square.</span> <span m="633030">So</span> <span
  m="633550">without</span> <span m="633910">that</span> <span
  m="634100">observation,</span> <span m="634710">if</span> <span
  m="634800">we</span> <span m="634920">are</span> <span
  m="634990">solving</span> <span m="635440">repeated</span> <span
  m="635970">subproblems,</span> <span m="636580">these</span> <span
  m="636880">will</span> <span m="637010">be</span> <span m="637190">a</span>
  <span m="637380">lot</span> <span m="637610">worse</span> <span
  m="637850">than</span> <span m="637960">that.</span> <span
  m="640150">Yeah,</span> <span m="640400">go</span> <span
  m="640520">ahead.</span></p><p><span m="640730">AUDIENCE: You can also</span>
  <span m="641206">trim ones</span> <span m="641682">that</span> <span
  m="642158">get</span> <span m="642634">to the</span> <span
  m="643110">same</span> <span m="643586">place,</span> <span m="644062">so you
  don't need</span> <span m="644538">to explore</span> <span m="645014">two
  paths.</span></p><p><span m="646785">LING REN: Sorry,</span> <span
  m="647280">say that</span> <span m="647400">again?</span></p><p><span
  m="647720">AUDIENCE: You don't need</span> <span m="648217">to explore</span>
  <span m="648714">two paths</span> <span m="649211">that</span> <span
  m="649710">[INAUDIBLE]</span> <span m="650055">both exploring</span> <span
  m="650400">3.</span> <span m="650830">Once</span> <span
  m="651260">they're</span> <span m="651690">both looking</span> <span
  m="652157">at 3,</span> <span m="652624">then you</span> <span m="653091">only
  need to</span> <span m="653558">do the ones</span> <span m="654025">more
  efficient</span> <span m="654492">to that point.</span></p><p><span
  m="656360">LING REN: OK,</span> <span m="656580">cool.</span> <span
  m="657420">Go</span> <span m="657520">ahead.</span> <span
  m="659318">Oh,</span> <span m="659850">same</span> <span
  m="660060">thing?</span></p><p><span m="660952">AUDIENCE: Well,</span> <span
  m="661310">I have</span> <span m="661340">another</span> <span m="661828">one
  as well.</span> <span m="662316">So</span> <span m="662804">I think</span>
  <span m="663292">to</span> <span m="663780">get</span> <span m="664268">better
  than</span> <span m="664760">n squared,</span> <span m="665020">we need</span>
  <span m="665220">to make the</span> <span m="665640">observation</span> <span
  m="665940">that</span> <span m="667575">it's</span> <span
  m="669800">always</span> <span m="670230">fine</span> <span
  m="670660">to</span> <span m="672650">start</span> <span m="673140">a</span>
  <span m="673435">subproblem</span> <span m="674100">later.</span> <span
  m="675830">So</span> <span m="676000">if you've</span> <span
  m="676770">decided</span> <span m="677251">you're taking</span> <span
  m="677732">a certain</span> <span m="678213">sequence of intervals</span>
  <span m="678694">from your</span> <span m="679175">first</span> <span
  m="679656">interval, and</span> <span m="680137">then you want</span> <span
  m="680620">to see how to</span> <span m="681064">compute from there,</span>
  <span m="682840">it's</span> <span m="683335">always</span> <span
  m="683830">valid to</span> <span m="684325">start</span> <span
  m="684820">later</span> <span m="687244">than,</span> <span
  m="690220">maybe,</span> <span m="690716">you</span> <span m="691212">had
  to.</span> <span m="691708">So that</span> <span m="692204">means that</span>
  <span m="693196">if we</span> <span m="693692">can</span> <span
  m="694188">efficiently</span> <span m="695575">starting</span> <span
  m="695970">at any particular</span> <span m="696469">point,</span> <span
  m="696968">query</span> <span m="697467">for the</span> <span
  m="698465">maximum</span> <span m="700960">of any</span> <span m="701459">of
  the</span> <span m="701958">subproblems</span> <span
  m="702457">starting</span> <span m="702956">after that point,</span> <span
  m="703455">then</span> <span m="703954">we</span> <span m="704453">can</span>
  <span m="704952">[INAUDIBLE].</span></p><p><span m="705460">LING REN:
  OK,</span> <span m="705820">great.</span> <span m="707050">I</span> <span
  m="707210">think</span> <span m="707580">we</span> <span m="707770">are</span>
  <span m="707850">on the</span> <span m="707960">same</span> <span
  m="708130">page.</span> <span m="708740">So</span> <span
  m="711090">when</span> <span m="711510">I</span> <span
  m="711600">describe</span> <span m="712030">the</span> <span
  m="712110">steps</span> <span m="712410">of</span> <span
  m="712530">this</span> <span m="712810">algorithm,</span> <span
  m="713420">remember</span> <span m="714460">this</span> <span
  m="714700">third</span> <span m="715070">candidate.</span> <span
  m="716110">I</span> <span m="716240">choose</span> <span
  m="716520">this</span> <span m="717230">as</span> <span m="717410">my</span>
  <span m="717560">first,</span> <span m="718500">right?</span> <span
  m="719440">It</span> <span m="719590">makes</span> <span
  m="719850">zero</span> <span m="720150">sense,</span> <span
  m="721440">because,</span> <span m="722310">if</span> <span
  m="722460">I</span> <span m="722540">do</span> <span m="722680">that,</span>
  <span m="723230">I</span> <span m="723380">might</span> <span
  m="723620">as</span> <span m="723740">well</span> <span m="724970">put
  in</span> <span m="725260">2,</span> <span m="725450">as</span> <span
  m="725600">well.</span> <span m="726410">Doesn't</span> <span
  m="726590">hurt,</span> <span m="727351">right?</span> <span
  m="730117">Everyone</span> <span m="730640">get</span> <span
  m="730900">that?</span></p><p><span m="733500">So</span> <span
  m="734450">the</span> <span m="735240">idea</span> <span m="735600">is</span>
  <span m="735780">that</span> <span m="736400">we</span> <span
  m="736680">shouldn't</span> <span m="737830">try</span> <span
  m="738410">every</span> <span m="738950">possible</span> <span
  m="740820">W</span> <span m="742120">request</span> <span m="742600">as</span>
  <span m="742770">my</span> <span m="742930">first.</span> <span
  m="744340">Some</span> <span m="744590">requests</span> <span
  m="745490">are</span> <span m="745620">just</span> <span
  m="745810">better,</span> <span m="746790">more</span> <span
  m="747000">suited</span> <span m="747340">to</span> <span m="747460">be</span>
  <span m="747620">the</span> <span m="748170">first</span> <span
  m="748480">request.</span> <span m="749425">And</span> <span
  m="749910">how</span> <span m="750100">we're</span> <span
  m="750270">going</span> <span m="750440">to</span> <span m="750520">do</span>
  <span m="750660">that?</span> <span m="752150">So,</span> <span
  m="752360">apparently,</span> <span m="753000">1</span> <span
  m="753510">can</span> <span m="753680">potentially</span> <span
  m="754130">be</span> <span m="754250">the</span> <span m="754330">first</span>
  <span m="754550">request.</span> <span m="755020">2</span> <span
  m="755810">can</span> <span m="756110">also</span> <span m="756200">be.</span>
  <span m="756780">But</span> <span m="757210">it</span> <span
  m="757950">doesn't</span> <span m="758140">make</span> <span
  m="758560">any</span> <span m="758880">sense</span> <span
  m="759200">for</span> <span m="759760">any</span> <span
  m="760000">requests</span> <span m="760350">come</span> <span
  m="760570">after</span> <span m="760860">that,</span> <span
  m="761820">because</span> <span m="762060">there's</span> <span m="762320">and
  earlier</span> <span m="762700">request.</span></p><p><span
  m="764110">So</span> <span m="765770">the</span> <span
  m="766040">efficient</span> <span m="766320">algorithm,</span> <span
  m="768070">let's</span> <span m="768330">first</span> <span
  m="769850">sort</span> <span m="770240">them</span> <span m="770600">by</span>
  <span m="770810">their</span> <span m="771030">start</span> <span
  m="771370">time.</span> <span m="772370">We're</span> <span
  m="772550">going</span> <span m="772790">to</span> <span
  m="772910">consider</span> <span m="773450">the</span> <span
  m="773610">request</span> <span m="774230">that</span> <span
  m="774530">comes</span> <span m="774860">early</span> <span
  m="776100">first.</span> <span m="782128">So I</span> <span
  m="782620">have</span> <span m="782890">my</span> <span
  m="784420">entire</span> <span m="784690">problem,</span> <span
  m="785070">here.</span> <span m="788710">Now,</span> <span
  m="788830">I'm</span> <span m="788970">going</span> <span m="789210">to</span>
  <span m="789400">ask</span> <span m="789710">a</span> <span
  m="789800">question.</span> <span m="790890">Should</span> <span
  m="791200">I</span> <span m="791910">include</span> <span
  m="792500">request</span> <span m="792960">1</span> <span m="793350">in</span>
  <span m="793440">my</span> <span m="793570">solution</span> <span
  m="794380">or</span> <span m="794590">not?</span> <span
  m="795750">That's</span> <span m="795880">only</span> <span
  m="796110">two</span> <span m="796260">cases.</span></p><p><span
  m="802180">So</span> <span m="802340">if</span> <span m="802530">I</span>
  <span m="802650">do</span> <span m="802850">not</span> <span
  m="804460">select</span> <span m="804890">1</span> <span m="806100">in</span>
  <span m="806200">my</span> <span m="806330">solution,</span> <span
  m="807350">what</span> <span m="807690">subproblem</span> <span
  m="808440">am</span> <span m="808500">I</span> <span m="808880">left</span>
  <span m="809020">with?</span> <span m="814700">Any</span> <span
  m="815320">idea?</span> <span m="817640">If</span> <span m="817780">I</span>
  <span m="818070">decide</span> <span m="818520">I</span> <span
  m="818700">will</span> <span m="818850">not</span> <span
  m="819050">include</span> <span m="819400">1</span> <span m="820250">in</span>
  <span m="820380">my</span> <span m="820500">solution.</span></p><p><span
  m="822690">AUDIENCE: [INAUDIBLE].</span></p><p><span m="824010">LING REN:
  Yeah,</span> <span m="824470">exactly.</span> <span m="827660">There's</span>
  <span m="827900">no</span> <span m="828040">conflicts</span> <span
  m="828760">anywhere.</span> <span m="829410">I'll</span> <span
  m="829890">solve</span> <span m="830310">a</span> <span
  m="830430">subproblem</span> <span m="830880">from</span> <span
  m="831060">2</span> <span m="831190">to</span> <span m="831350">n.</span>
  <span m="832560">If</span> <span m="832700">I</span> <span
  m="832790">do</span> <span m="833010">decide</span> <span m="833880">to</span>
  <span m="833990">put</span> <span m="834780">my</span> <span
  m="834930">request</span> <span m="835340">1</span> <span m="836450">in</span>
  <span m="836570">a</span> <span m="836650">solution,</span> <span
  m="837090">I</span> <span m="837170">get</span> <span m="837430">this</span>
  <span m="837610">weight.</span> <span m="838610">So</span> <span
  m="838850">what's</span> <span m="839110">the</span> <span
  m="839410">subproblem</span> <span m="840330">I'm</span> <span m="840520">left
  with?</span> <span m="849520">Yeah,</span> <span m="850020">in</span> <span
  m="850130">this</span> <span m="850520">example,</span> <span
  m="851090">it's</span> <span m="851260">five.</span> <span
  m="852540">Correct.</span> <span m="852830">But</span> <span
  m="853120">more</span> <span m="853290">generally--</span></p><p><span
  m="856850">AUDIENCE: [INAUDIBLE]</span> <span m="858290">So</span> <span
  m="859730">every</span> <span m="860210">request</span> <span
  m="860690">that</span> <span m="861170">starts</span> <span
  m="861650">afterward.</span></p><p><span m="863100">LING REN: Exactly,</span>
  <span m="863670">every</span> <span m="864020">request</span> <span
  m="864530">that</span> <span m="865210">starts</span> <span
  m="865810">after</span> <span m="866080">1</span> <span
  m="866310">finishes.</span> <span m="869000">Now,</span> <span
  m="869300">suddenly,</span> <span m="869890">we are</span> <span
  m="870050">not</span> <span m="870370">breaking</span> <span
  m="870790">the</span> <span m="871040">original</span> <span
  m="871390">problem</span> <span m="871720">into</span> <span
  m="871970">n</span> <span m="872170">subproblems.</span> <span
  m="872990">We</span> <span m="873130">only</span> <span m="873330">have</span>
  <span m="873540">two</span> <span m="874090">subproblems.</span> <span
  m="880050">So let</span> <span m="880190">me</span> <span
  m="880220">draw</span> <span m="880340">a</span> <span
  m="880740">recursion</span> <span m="880990">tree,</span> <span
  m="881570">which</span> <span m="881880">is</span> <span m="883022">a</span>
  <span m="883500">powerful</span> <span m="883700">tool</span> <span
  m="883970">in</span> <span m="884240">analyzing</span> <span
  m="884810">these</span> <span m="885130">sort</span> <span
  m="885330">of</span> <span m="885430">things.</span></p><p><span
  m="889800">So</span> <span m="889960">we</span> <span m="890060">start</span>
  <span m="890340">with</span> <span m="890540">our</span> <span
  m="891210">original</span> <span m="891600">problem,</span> <span
  m="892280">from</span> <span m="892530">1</span> <span m="892720">to</span>
  <span m="892850">n,</span> <span m="896780">and</span> <span
  m="897160">we</span> <span m="897270">have</span> <span m="897460">two</span>
  <span m="897630">subproblems,</span> <span m="898560">2 to</span> <span
  m="898880">n</span> <span m="899300">and</span> <span m="899590">R1</span>
  <span m="900420">to</span> <span m="900580">n.</span> <span
  m="902760">This</span> <span m="903040">one,</span> <span
  m="903570">we'll</span> <span m="903970">also</span> <span
  m="904120">break</span> <span m="904360">them</span> <span
  m="904540">into</span> <span m="904890">subproblems.</span> <span
  m="906800">So</span> <span m="906950">what</span> <span m="907070">is</span>
  <span m="907200">this</span> <span m="907340">one?</span> <span
  m="912590">OK,</span> <span m="913620">I</span> <span m="913730">have</span>
  <span m="913900">my</span> <span m="914290">sub</span> <span
  m="914500">problem</span> <span m="914840">2 to n,</span> <span
  m="915890">and</span> <span m="916070">I</span> <span m="916110">need</span>
  <span m="916280">to</span> <span m="916410">further</span> <span
  m="916890">reapply</span> <span m="917290">the</span> <span
  m="917380">same</span> <span m="917590">trick</span></p><p><span
  m="926278">AUDIENCE: [INAUDIBLE].</span> <span m="932103">The</span> <span
  m="932486">max</span> <span m="933366">of</span> <span m="933862">Wi</span>
  <span m="934358">has to</span> <span m="934854">be--</span></p><p><span
  m="935350">LING REN: Oh,</span> <span m="936110">sorry.</span> <span
  m="939660">These</span> <span m="939890">are</span> <span
  m="940690">the</span> <span m="941060">two</span> <span
  m="941210">cases.</span> <span m="944590">Either</span> <span
  m="944820">I</span> <span m="944920">do</span> <span m="945070">not</span>
  <span m="945300">schedule</span> <span m="945660">my</span> <span
  m="945790">first,</span> <span m="946800">or</span> <span m="947130">I</span>
  <span m="947350">schedule</span> <span m="947530">it,</span> <span
  m="948650">and</span> <span m="948770">this is</span> <span
  m="948920">my</span> <span m="949080">first</span> <span
  m="949440">request.</span> <span m="950970">Now,</span> <span
  m="951110">here,</span> <span m="952050">I'm</span> <span
  m="952450">left</span> <span m="952690">with</span> <span
  m="952860">this</span> <span m="953030">problem.</span> <span
  m="953550">Either</span> <span m="953800">I</span> <span m="953910">do</span>
  <span m="954030">not</span> <span m="954260">schedule</span> <span
  m="954600">it,</span> <span m="955000">or</span> <span m="955460">I</span>
  <span m="955580">schedule</span> <span m="956020">it</span> <span
  m="956880">as</span> <span m="957040">my</span> <span m="957180">first</span>
  <span m="957500">request.</span> <span m="958470">So</span> <span
  m="958720">what</span> <span m="958860">is</span> <span m="959000">this</span>
  <span m="959140">one?</span></p><p><span m="965102">AUDIENCE: Probably</span>
  <span m="965578">be 3</span> <span m="967006">to the n.</span></p><p><span
  m="968440">LING REN: 3</span> <span m="968750">to</span> <span
  m="969060">n,</span> <span m="970010">because</span> <span
  m="970210">now</span> <span m="970360">I'm</span> <span
  m="970540">asking</span> <span m="970910">the</span> <span
  m="971010">same</span> <span m="971210">question</span> <span
  m="971590">for</span> <span m="971720">2.</span> <span m="972560">And,</span>
  <span m="972760">here,</span> <span m="973380">I'll</span> <span
  m="973600">have</span> <span m="974210">R2</span> <span m="975790">to</span>
  <span m="975960">n,</span> <span m="977000">so</span> <span
  m="977180">on</span> <span m="977390">and</span> <span m="977490">so</span>
  <span m="977530">forth.</span> <span m="980140">Now,</span> <span
  m="982210">let</span> <span m="982320">me</span> <span m="982670">point</span>
  <span m="982820">out</span> <span m="983020">the</span> <span
  m="984940">big</span> <span m="985120">difference</span> <span
  m="986600">for</span> <span m="986770">this</span> <span
  m="987160">version,</span> <span m="987700">and</span> <span
  m="987970">for</span> <span m="988060">the</span> <span
  m="988130">basic</span> <span m="988440">version.</span> <span
  m="989380">So</span> <span m="989590">I'm</span> <span
  m="989790">starting</span> <span m="990340">with</span> <span
  m="990660">the</span> <span m="991160">request</span> <span
  m="992100">that</span> <span m="992430">starts</span> <span
  m="992880">first.</span> <span m="993820">If</span> <span m="993960">I</span>
  <span m="994050">do</span> <span m="994200">not</span> <span
  m="994480">do</span> <span m="994610">that,</span> <span m="995990">say,
  if</span> <span m="996450">here,</span> <span m="997940">I</span> <span
  m="998650">am</span> <span m="998780">asking</span> <span
  m="999090">the</span> <span m="999180">question</span> <span
  m="999510">for</span> <span m="999640">5,</span> <span m="1000380">do</span>
  <span m="1000510">I</span> <span m="1000660">schedule</span> <span
  m="1001010">5</span> <span m="1001370">as</span> <span m="1001540">my</span>
  <span m="1001670">first</span> <span m="1002870">or</span> <span
  m="1003040">not?</span></p><p><span m="1004150">Then,</span> <span
  m="1004700">what</span> <span m="1004870">happens?</span> <span
  m="1007250">Then,</span> <span m="1008980">these</span> <span
  m="1009320">two</span> <span m="1009500">branches</span> <span
  m="1010060">do</span> <span m="1010170">not</span> <span
  m="1010430">cover</span> <span m="1010700">all</span> <span
  m="1010830">the</span> <span m="1010920">cases,</span> <span
  m="1011400">because</span> <span m="1012210">I</span> <span
  m="1012320">can</span> <span m="1012480">potentially</span> <span
  m="1013630">schedule</span> <span m="1013830">it,</span> <span
  m="1015100">but</span> <span m="1015330">not</span> <span
  m="1015650">as</span> <span m="1015830">my</span> <span
  m="1016000">first,</span> <span m="1017030">in the</span> <span
  m="1017200">optimal</span> <span m="1017550">solution,</span> <span
  m="1019840">if</span> <span m="1019990">I'm</span> <span
  m="1020190">asking</span> <span m="1020630">a</span> <span
  m="1020710">question</span> <span m="1021120">for a</span> <span
  m="1021410">random</span> <span m="1021750">request.</span> <span
  m="1023650">However,</span> <span m="1024560">if</span> <span
  m="1024690">I</span> <span m="1024790">start</span> <span
  m="1025540">with</span> <span m="1025819">the</span> <span
  m="1025940">first</span> <span m="1026290">request,</span> <span
  m="1027690">first</span> <span m="1027990">meaning</span> <span
  m="1028780">it</span> <span m="1028970">starts</span> <span
  m="1029329">earliest,</span> <span m="1030089">it</span> <span
  m="1030300">will</span> <span m="1030530">either</span> <span
  m="1030780">be</span> <span m="1030930">not</span> <span
  m="1031140">scheduled,</span> <span m="1031710">or</span> <span
  m="1032140">it</span> <span m="1032220">will</span> <span
  m="1032349">be</span> <span m="1032470">scheduled,</span> <span
  m="1033060">and</span> <span m="1033170">as</span> <span
  m="1033410">the</span> <span m="1033520">first.</span> <span
  m="1034040">Because</span> <span m="1034470">it</span> <span
  m="1034660">cannot</span> <span m="1035040">be</span> <span
  m="1035640">the</span> <span m="1035750">second</span> <span
  m="1036040">request</span> <span m="1036440">in</span> <span
  m="1036510">my</span> <span m="1036619">solution.</span></p><p><span
  m="1041020">Any</span> <span m="1041190">questions</span> <span
  m="1041500">about</span> <span m="1041690">this</span> <span
  m="1041829">algorithm?</span> <span m="1051230">OK,</span> <span
  m="1053380">now,</span> <span m="1053520">this</span> <span
  m="1053660">is</span> <span m="1053810">the</span> <span
  m="1053890">algorithm.</span> <span m="1054820">Let's</span> <span
  m="1055130">analyze</span> <span m="1055630">its</span> <span
  m="1055830">complexity.</span> <span m="1057930">So</span> <span
  m="1058150">what's</span> <span m="1058350">the</span> <span
  m="1058600">overall</span> <span m="1058900">complexity.</span> <span
  m="1061130">when</span> <span m="1061250">we</span> <span
  m="1061380">go</span> <span m="1061540">all</span> <span
  m="1061740">the</span> <span m="1061820">way</span> <span
  m="1061940">down,</span> <span m="1062280">solve</span> <span
  m="1062710">the</span> <span m="1063100">entire</span> <span
  m="1063280">original</span> <span m="1063730">problem?</span> <span
  m="1065710">Any</span> <span m="1066380">guesses?</span> <span
  m="1069740">What</span> <span m="1069870">do you</span> <span
  m="1069960">think?</span> <span m="1075040">What</span> <span m="1075530">do
  you</span> <span m="1075800">think?</span> <span m="1077450">Go</span> <span
  m="1077580">ahead.</span></p><p><span m="1079286">AUDIENCE: It should</span>
  <span m="1079778">be</span> <span m="1080270">log n,</span> <span
  m="1081254">because</span> <span m="1081746">[INAUDIBLE]</span> <span
  m="1082238">sort  the</span> <span m="1082730">intervals,</span> <span
  m="1083222">and we're</span> <span m="1083714">going to</span> <span
  m="1084206">need to,</span> <span m="1084698">for every</span> <span
  m="1085190">interval,</span> <span m="1087158">find</span> <span
  m="1087650">the</span> <span m="1089618">next</span> <span
  m="1090110">interval</span> <span m="1090602">that</span> <span
  m="1091094">starts</span> <span m="1091586">after</span> <span
  m="1092078">it,</span> <span m="1093800">and</span> <span
  m="1094770">do</span> <span m="1095255">that for</span> <span
  m="1095740">[INAUDIBLE].</span></p><p><span m="1097200">LING REN: Cool.</span>
  <span m="1097610">So</span> <span m="1098190">the</span> <span
  m="1098360">first</span> <span m="1098640">step</span> <span
  m="1098980">is</span> <span m="1099170">sorting,</span> <span
  m="1101050">which</span> <span m="1101250">is</span> <span
  m="1101460">n</span> <span m="1101640">log n.</span> <span
  m="1105930">Now,</span> <span m="1106160">after</span> <span
  m="1106540">I</span> <span m="1106650">sort</span> <span
  m="1107160">everything,</span> <span m="1110560">the</span> <span
  m="1110680">question</span> <span m="1111730">I</span> <span
  m="1111850">need</span> <span m="1112010">to</span> <span
  m="1112390">answer</span> <span m="1112890">is,</span> <span
  m="1113300">how</span> <span m="1113460">many</span> <span
  m="1113820">unique</span> <span m="1114580">subproblems</span> <span
  m="1116300">are</span> <span m="1116470">there,</span> <span
  m="1117020">in</span> <span m="1117190">this</span> <span
  m="1117390">entire</span> <span m="1117750">recursion</span> <span
  m="1118190">tree?</span> <span m="1118480">So</span> <span
  m="1118770">I'm</span> <span m="1118880">not</span> <span
  m="1119070">going</span> <span m="1119290">to</span> <span
  m="1119470">solve</span> <span m="1119800">the</span> <span
  m="1119910">same</span> <span m="1120110">problem</span> <span
  m="1120480">twice.</span> <span m="1122270">How</span> <span
  m="1122370">many</span> <span m="1122520">unique</span> <span
  m="1122820">problems</span> <span m="1124130">exist,</span> <span
  m="1124630">here?</span> <span m="1127420">n</span> <span
  m="1128000">of</span> <span m="1128100">them,</span> <span
  m="1128330">right?</span> <span m="1128500">Just</span> <span
  m="1128810">this</span> <span m="1129270">left</span> <span
  m="1129340">branch.</span> <span m="1130780">All</span> <span
  m="1131140">the</span> <span m="1131280">others</span> <span
  m="1131910">will</span> <span m="1132150">be</span> <span
  m="1132610">one</span> <span m="1132880">of</span> <span
  m="1133020">these.</span></p><p><span m="1134280">So</span> <span
  m="1134480">I</span> <span m="1134580">can</span> <span
  m="1134890">start</span> <span m="1135100">from</span> <span
  m="1136250">the</span> <span m="1136410">bottom</span> <span
  m="1136730">of</span> <span m="1136820">the</span> <span
  m="1136910">tree</span> <span m="1137290">and</span> <span
  m="1138030">work</span> <span m="1138300">my</span> <span
  m="1138440">way</span> <span m="1138640">up,</span> <span
  m="1139430">and</span> <span m="1141220">when</span> <span
  m="1142390">I</span> <span m="1142430">want</span> <span m="1142590">to</span>
  <span m="1143070">take</span> <span m="1143270">this</span> <span
  m="1143440">step,</span> <span m="1144470">I'll</span> <span
  m="1144720">look</span> <span m="1144910">up</span> <span
  m="1145090">the</span> <span m="1145190">result</span> <span
  m="1145540">of</span> <span m="1145650">this</span> <span m="1146130">in
  one</span> <span m="1147690">of</span> <span m="1147780">the</span> <span
  m="1147860">subproblems</span> <span m="1148360">I've</span> <span
  m="1148510">already</span> <span m="1148770">solved.</span> <span
  m="1150100">So,</span> <span m="1150740">actually,</span> <span
  m="1151120">the</span> <span m="1151250">recursion</span> <span
  m="1151840">itself</span> <span m="1154990">is</span> <span
  m="1155180">only</span> <span m="1155500">O of n.</span></p><p><span
  m="1157456">AUDIENCE: I missed</span> <span m="1157898">when you said,</span>
  <span m="1158340">what is</span> <span m="1158770">the</span> <span
  m="1159242">sorting</span> <span m="1159714">referring</span> <span
  m="1160186">to?</span></p><p><span m="1162080">LING REN: OK,</span> <span
  m="1162610">so</span> <span m="1163320">we</span> <span
  m="1163470">need</span> <span m="1163650">to</span> <span
  m="1165110">start</span> <span m="1165830">with</span> <span
  m="1166145">the</span> <span m="1166460">request</span> <span m="1167810">that
  starts</span> <span m="1168110">first,</span> <span m="1168690">right?</span>
  <span m="1170180">We</span> <span m="1170300">need</span> <span
  m="1170440">to</span> <span m="1170530">decide</span> <span
  m="1170930">whether</span> <span m="1171120">we</span> <span
  m="1171300">schedule</span> <span m="1171540">it</span> <span
  m="1171770">or</span> <span m="1171940">not.</span> <span
  m="1173710">And,</span> <span m="1173870">then,</span> <span
  m="1174130">we</span> <span m="1174240">need</span> <span
  m="1174410">to</span> <span m="1175170">do</span> <span m="1175290">the</span>
  <span m="1175380">same</span> <span m="1175590">thing</span> <span
  m="1175900">for</span> <span m="1176180">this</span> <span
  m="1176680">request</span> <span m="1177050">2.</span> <span
  m="1177400">It's</span> <span m="1177710">the</span> <span
  m="1178220">start</span> <span m="1178700">earliest</span> <span
  m="1179010">request</span> <span m="1179550">in</span> <span
  m="1179730">this</span> <span m="1179840">subset.</span> <span
  m="1180880">We</span> <span m="1181020">always</span> <span
  m="1181310">need</span> <span m="1181420">to</span> <span
  m="1181480">do</span> <span m="1181620">that</span> <span
  m="1182410">for</span> <span m="1183770">all</span> <span
  m="1183950">the</span> <span m="1184040">subproblems.</span> <span
  m="1187890">So</span> <span m="1187940">the</span> <span
  m="1188020">overall</span> <span m="1188330">complexity</span> <span
  m="1188700">is</span> <span m="1192090">n</span> <span m="1192290">log
  n.</span></p><p><span m="1196510">But</span> <span m="1196860">if</span> <span
  m="1197010">we</span> <span m="1197170">only</span> <span
  m="1197440">focus</span> <span m="1197830">on</span> <span
  m="1197970">this</span> <span m="1198120">recursion</span> <span
  m="1199080">step,</span> <span m="1199540">our</span> <span
  m="1199980">improvement</span> <span m="1200470">is</span> <span
  m="1200600">actually</span> <span m="1200990">larger</span> <span
  m="1201230">than</span> <span m="1201390">that,</span> <span
  m="1201770">because</span> <span m="1201940">it</span> <span
  m="1202110">went</span> <span m="1202390">from</span> <span
  m="1203380">n</span> <span m="1203560">square</span> <span
  m="1206260">to</span> <span m="1208860">O</span> <span m="1209050">of</span>
  <span m="1209130">n.</span> <span m="1210490">So</span> <span
  m="1210700">why</span> <span m="1210960">is</span> <span
  m="1211110">the</span> <span m="1211190">original</span> <span
  m="1211690">algorithm</span> <span m="1212390">n</span> <span
  m="1212610">squared?</span> <span m="1214160">I</span> <span
  m="1214270">think</span> <span m="1214480">it</span> <span
  m="1214880">also</span> <span m="1215390">has</span> <span
  m="1215600">only</span> <span m="1215890">n</span> <span
  m="1216520">unique</span> <span m="1216910">subproblems,</span> <span
  m="1217610">right?</span> <span m="1222340">So</span> <span m="1222500">do
  you</span> <span m="1222720">agree</span> <span m="1223040">that</span> <span
  m="1223280">the</span> <span m="1223360">original</span> <span
  m="1223710">algorithm</span> <span m="1223860">is</span> <span
  m="1224120">n</span> <span m="1224460">squared,</span> <span
  m="1224740">or</span> <span m="1225080">do you</span> <span
  m="1225210">think</span> <span m="1225410">it's</span> <span
  m="1225580">also</span> <span m="1225990">O of</span> <span
  m="1226230">n?</span> <span m="1227430">Just</span> <span
  m="1227690">focus</span> <span m="1228010">on</span> <span
  m="1228110">the</span> <span m="1228180">recursion</span> <span
  m="1228570">step.</span></p><p><span m="1233720">AUDIENCE: Didn't</span> <span
  m="1234211">the</span> <span m="1234702">original</span> <span
  m="1235193">algorithm</span> <span m="1235684">solve</span> <span
  m="1236175">some</span> <span m="1236666">subproblems</span> <span
  m="1237648">up</span> <span m="1238139">to</span> <span m="1238630">n</span>
  <span m="1239121">times?</span> <span m="1239612">So</span> <span
  m="1240103">that's</span> <span m="1240594">why</span> <span m="1241085">it's
  still</span> <span m="1241576">of n squared,</span> <span m="1242067">because
  it</span> <span m="1242558">solved</span> <span m="1243049">the same
  thing?</span></p><p><span m="1245020">LING REN: But</span> <span
  m="1245230">assuming</span> <span m="1245750">I</span> <span
  m="1245810">do</span> <span m="1245920">not</span> <span m="1246100">do</span>
  <span m="1246200">that,</span> <span m="1246590">assuming,</span> <span
  m="1246990">whenever I</span> <span m="1247370">solve</span> <span
  m="1247590">it</span> <span m="1247670">once,</span> <span
  m="1248250">I</span> <span m="1248550">store</span> <span
  m="1248910">the</span> <span m="1249010">result</span> <span
  m="1249530">somewhere,</span> <span m="1250410">and</span> <span
  m="1250590">I</span> <span m="1250640">directly</span> <span
  m="1251390">get</span> <span m="1251560">it.</span> <span
  m="1253100">Assuming</span> <span m="1253460">I</span> <span
  m="1253530">do</span> <span m="1253650">that,</span> <span
  m="1254710">what's</span> <span m="1254920">the</span> <span
  m="1255040">complexity?</span> <span m="1261006">Go</span> <span
  m="1261479">ahead.</span></p><p><span m="1262900">AUDIENCE: O</span> <span
  m="1262920">of n.</span></p><p><span m="1263726">LING REN: You</span> <span
  m="1264130">think</span> <span m="1264280">it's</span> <span m="1264410">O
  of</span> <span m="1264520">n?</span> <span m="1266960">So</span> <span
  m="1267250">anyone</span> <span m="1267600">think</span> <span
  m="1267770">it's</span> <span m="1268580">n</span> <span
  m="1269000">squared?</span> <span m="1269490">Because</span> <span
  m="1269680">I</span> <span m="1269760">think</span> <span
  m="1269940">Srini</span> <span m="1270210">said</span> <span
  m="1270390">it's</span> <span m="1270510">n</span> <span
  m="1270640">squared.</span> <span m="1270980">Go</span> <span
  m="1271472">ahead.</span></p><p><span m="1272456">AUDIENCE: I think</span>
  <span m="1272948">the original</span> <span m="1273440">algorithm</span> <span
  m="1273932">isn't</span> <span m="1274424">[INAUDIBLE]</span> <span
  m="1274916">squared,</span> <span m="1275408">because</span> <span
  m="1275900">we're still doing</span> <span m="1276392">[INAUDIBLE]</span>
  <span m="1276884">for every</span> <span m="1277376">subproblem</span> <span
  m="1277868">[INAUDIBLE].</span></p><p><span m="1279360">LING REN:
  Exactly</span> <span m="1279790">right.</span> <span m="1281620">So,</span>
  <span m="1281960">here,</span> <span m="1282520">whenever</span> <span
  m="1282920">we</span> <span m="1283090">go</span> <span m="1283260">up</span>
  <span m="1283470">one</span> <span m="1283670">step,</span> <span
  m="1284130">I'm</span> <span m="1284310">doing</span> <span
  m="1284870">constant</span> <span m="1285220">number</span> <span
  m="1285500">of</span> <span m="1285590">work.</span> <span
  m="1286420">Just</span> <span m="1287000">comparing</span> <span
  m="1287470">two</span> <span m="1287850">numbers</span> <span
  m="1288280">and</span> <span m="1288800">taking</span> <span
  m="1289190">the</span> <span m="1289240">max.</span> <span
  m="1289940">However,</span> <span m="1290180">in</span> <span
  m="1290450">the</span> <span m="1290660">original</span> <span
  m="1291170">algorithm,</span> <span m="1291970">which</span> <span
  m="1292630">is</span> <span m="1292790">here,</span> <span
  m="1294590">whenever</span> <span m="1294830">I</span> <span
  m="1294860">want</span> <span m="1295030">to</span> <span
  m="1295130">go</span> <span m="1295520">one</span> <span
  m="1295730">step</span> <span m="1295990">up,</span> <span
  m="1296510">there</span> <span m="1296860">are</span> <span
  m="1297190">n</span> <span m="1297430">branches</span> <span
  m="1298630">of</span> <span m="1298790">the</span> <span
  m="1298900">tree.</span></p><p><span m="1300720">So</span> <span
  m="1301060">my</span> <span m="1301220">total</span> <span
  m="1301510">amount</span> <span m="1301720">of</span> <span
  m="1301770">work</span> <span m="1302170">is</span> <span m="1302530">1</span>
  <span m="1303030">plus</span> <span m="1303400">2</span> <span
  m="1303770">plus</span> <span m="1304050">3</span> <span
  m="1304580">plus</span> <span m="1305350">n,</span> <span
  m="1305640">right?</span> <span m="1306410">Every</span> <span
  m="1306680">step</span> <span m="1306990">becomes</span> <span
  m="1307340">harder</span> <span m="1307740">when</span> <span
  m="1307900">I</span> <span m="1307970">go</span> <span m="1308150">up.</span>
  <span m="1308940">And</span> <span m="1309150">this</span> <span
  m="1309540">is</span> <span m="1311000">n</span> <span
  m="1311120">squared.</span> <span m="1322720">Any</span> <span
  m="1322870">questions</span> <span m="1323180">about</span> <span
  m="1323350">that?</span> <span m="1330192">OK,</span> <span
  m="1331160">this</span> <span m="1331300">is</span> <span
  m="1331390">so</span> <span m="1331510">much</span> <span
  m="1331760">for</span> <span m="1331930">our</span> <span
  m="1332220">weighted</span> <span m="1332710">interval</span> <span
  m="1333340">scheduling.</span> <span m="1334690">Now,</span> <span
  m="1335050">I'm</span> <span m="1335140">going</span> <span
  m="1335340">to</span> <span m="1335510">transition</span> <span
  m="1335960">into</span> <span m="1336010">the</span> <span
  m="1336070">next</span> <span m="1336300">topic.</span> <span
  m="1336830">So</span> <span m="1337390">any</span> <span
  m="1337550">question</span> <span m="1339140">on</span> <span
  m="1339370">the</span> <span m="1339480">side,</span> <span
  m="1339880">in</span> <span m="1340000">general,</span> <span
  m="1341180">for</span> <span m="1341460">the</span> <span
  m="1341530">scheduling</span> <span m="1341940">problem?</span> <span
  m="1346021">Do</span> <span m="1346480">you</span> <span
  m="1346530">have</span> <span m="1346680">a</span> <span
  m="1346760">question?</span> <span m="1347914">No?</span></p><p><span
  m="1349210">OK,</span> <span m="1353040">now,</span> <span
  m="1353260">let's</span> <span m="1353490">turn</span> <span
  m="1353630">to</span> <span m="1353890">a</span> <span
  m="1353950">second</span> <span m="1354330">topic</span> <span
  m="1355860">of</span> <span m="1355980">this</span> <span
  m="1356340">section,</span> <span m="1357290">which</span> <span
  m="1357490">is</span> <span m="1357860">Strassen</span> <span
  m="1358290">algorithm.</span> <span m="1362270">Strassen</span> <span
  m="1362680">algorithm</span> <span m="1363070">is</span> <span
  m="1363260">an</span> <span m="1363910">efficient</span> <span
  m="1364450">algorithm</span> <span m="1364750">for</span> <span
  m="1365620">matrix</span> <span m="1366020">multiplication,</span> <span
  m="1367860">and</span> <span m="1368020">matrix</span> <span
  m="1368350">multiplication</span> <span m="1368970">is</span> <span
  m="1369120">a</span> <span m="1369560">really</span> <span m="1369910">useful
  primitive.</span> <span m="1371630">It</span> <span m="1371940">has</span>
  <span m="1372150">applications</span> <span m="1372730">in</span> <span
  m="1372860">almost</span> <span m="1373550">every</span> <span
  m="1374820">area</span> <span m="1375880">I</span> <span
  m="1375950">can</span> <span m="1376130">think</span> <span
  m="1376340">of.</span> <span m="1376690">Circuit</span> <span
  m="1377110">simulation,</span> <span m="1378490">climate</span> <span
  m="1379060">simulation,</span> <span m="1380410">and</span> <span
  m="1380690">physics,</span> <span m="1381570">basically</span> <span
  m="1381940">everything.</span></p><p><span m="1383760">Now,</span> <span
  m="1384570">I</span> <span m="1384960">actually</span> <span
  m="1385830">had</span> <span m="1386040">some</span> <span
  m="1386260">experience</span> <span m="1386830">with</span> <span
  m="1387490">matrix</span> <span m="1387860">multiplication,</span> <span
  m="1388490">because</span> <span m="1388590">my</span> <span
  m="1388750">undergrad</span> <span m="1389150">research</span> <span
  m="1390250">was</span> <span m="1390890">improving</span> <span
  m="1391660">matrix</span> <span m="1392140">algorithms.</span> <span
  m="1393090">And,</span> <span m="1393290">actually,</span> <span
  m="1393620">many</span> <span m="1393930">matrix</span> <span
  m="1394360">algorithms,</span> <span m="1395040">including</span> <span
  m="1395430">inversion,</span> <span m="1396400">solving</span> <span
  m="1396690">equations,</span> <span m="1397840">they</span> <span
  m="1397930">all</span> <span m="1398260">use</span> <span
  m="1398890">multiplication</span> <span m="1399780">as</span> <span
  m="1400030">a</span> <span m="1400130">primitive.</span> <span
  m="1401090">So</span> <span m="1401770">it</span> <span
  m="1401980">actually</span> <span m="1402310">comes</span> <span
  m="1402570">down</span> <span m="1402850">to</span> <span
  m="1403010">improving</span> <span m="1403530">matrix</span> <span
  m="1403870">multiplication.</span></p><p><span m="1405400">And</span> <span
  m="1405530">I</span> <span m="1405590">tried</span> <span
  m="1405850">very</span> <span m="1406040">hard</span> <span
  m="1407950">to</span> <span m="1408590">just</span> <span
  m="1408800">optimize</span> <span m="1409300">this</span> <span
  m="1409500">basic</span> <span m="1410110">matrix</span> <span
  m="1411000">multiplication.</span> <span m="1412170">We'll</span> <span
  m="1412360">take</span> <span m="1412580">a</span> <span
  m="1412720">row,</span> <span m="1413450">you take</span> <span
  m="1413620">a</span> <span m="1413680">column,</span> <span
  m="1414360">and</span> <span m="1415410">then</span> <span
  m="1415930">you</span> <span m="1416090">get</span> <span
  m="1416450">your</span> <span m="1416660">answer</span> <span
  m="1416940">for</span> <span m="1417060">this</span> <span
  m="1417870">spot.</span> <span m="1419200">Everyone's</span> <span
  m="1419670">familiar</span> <span m="1420010">with</span> <span
  m="1420160">that,</span> <span m="1420400">right?</span> <span
  m="1421690">I</span> <span m="1421770">tried</span> <span
  m="1421940">very</span> <span m="1422150">hard,</span> <span
  m="1422690">but</span> <span m="1422880">it's</span> <span
  m="1423050">still</span> <span m="1423370">100</span> <span
  m="1423750">x</span> <span m="1424240">slower</span> <span
  m="1424890">than</span> <span m="1425160">the</span> <span
  m="1425230">best</span> <span m="1425500">algorithm</span> <span
  m="1425890">out</span> <span m="1426050">there.</span></p><p><span
  m="1426980">So</span> <span m="1427320">I</span> <span
  m="1427440">finally</span> <span m="1427850">look</span> <span
  m="1428010">it</span> <span m="1428110">up,</span> <span
  m="1428530">and</span> <span m="1429470">I</span> <span m="1429600">was</span>
  <span m="1429760">completely</span> <span m="1430210">mind-blown</span> <span
  m="1430990">when</span> <span m="1431140">I</span> <span
  m="1431450">know</span> <span m="1431920">that</span> <span
  m="1432520">matrix</span> <span m="1432970">algorithm</span> <span
  m="1433600">complexity</span> <span m="1434810">is</span> <span
  m="1435270">not</span> <span m="1435860">n</span> <span
  m="1436200">cubic.</span> <span m="1437850">It's</span> <span
  m="1438060">actually</span> <span m="1438450">smaller</span> <span
  m="1438870">than</span> <span m="1439050">that.</span> <span
  m="1443790">Is</span> <span m="1444080">this</span> <span m="1444370">a</span>
  <span m="1444430">surprise</span> <span m="1444870">to</span> <span
  m="1445110">you?</span> <span m="1446440">Anyone</span> <span
  m="1446680">expect</span> <span m="1447060">that</span> <span
  m="1447250">before?</span> <span m="1452210">And</span> <span
  m="1452840">the</span> <span m="1453020">technique</span> <span
  m="1454300">the</span> <span m="1454360">more</span> <span
  m="1454590">efficient</span> <span m="1454960">algorithm</span> <span
  m="1455320">uses</span> <span m="1455790">is,</span> <span
  m="1456240">exactly,</span> <span m="1456750">Strassen</span> <span
  m="1457300">algorithm.</span></p><p><span m="1458510">Now</span> <span
  m="1458650">that</span> <span m="1458800">we're</span> <span
  m="1458920">talking</span> <span m="1459170">about</span> <span
  m="1459350">divide</span> <span m="1459600">and</span> <span
  m="1459700">conquer,</span> <span m="1460180">you</span> <span m="1460660">can
  guess</span> <span m="1461290">it</span> <span m="1461430">must</span> <span
  m="1461700">be</span> <span m="1461830">a</span> <span
  m="1461890">divide</span> <span m="1462170">and</span> <span
  m="1462260">conquer</span> <span m="1462550">algorithm.</span> <span
  m="1463770">And,</span> <span m="1464760">so,</span> <span
  m="1465460">does</span> <span m="1465620">anyone</span> <span m="1465950">have
  an</span> <span m="1466120">idea</span> <span m="1466540">how</span> <span
  m="1466690">to</span> <span m="1466830">divide</span> <span
  m="1467440">the</span> <span m="1467520">original</span> <span
  m="1467890">problem?</span> <span m="1474450">Anyone</span> <span
  m="1474470">want</span> <span m="1474720">to</span> <span
  m="1475110">give</span> <span m="1475250">it</span> <span m="1475330">a</span>
  <span m="1475370">try?</span> <span m="1481490">So</span> <span
  m="1482120">are you</span> <span m="1482260">familiar</span> <span
  m="1482640">with</span> <span m="1483040">tiled</span> <span
  m="1484330">matrix</span> <span m="1484930">multiplication,</span> <span
  m="1485760">or</span> <span m="1485870">blocked</span> <span
  m="1486780">matrix</span> <span m="1487150">multiplication?</span> <span
  m="1488686">OK,</span> <span m="1489810">can you</span> <span
  m="1490140">tell</span> <span m="1490310">us</span> <span
  m="1490410">what</span> <span m="1490580">that</span> <span
  m="1490650">is?</span></p><p><span m="1491400">AUDIENCE: Yeah.</span> <span
  m="1491890">You can</span> <span m="1492380">break</span> <span m="1492870">it
  into</span> <span m="1494340">[INAUDIBLE].</span></p><p><span m="1501200">LING
  REN: OK,</span> <span m="1502925">so</span> <span m="1503230">say</span> <span
  m="1503540">this</span> <span m="1503740">is</span> <span
  m="1503900">our</span> <span m="1504140">A</span> <span m="1504610">and</span>
  <span m="1505080">B,</span> <span m="1505890">and</span> <span
  m="1506020">we</span> <span m="1506140">want</span> <span
  m="1506430">C.</span> <span m="1507430">We</span> <span m="1507570">can</span>
  <span m="1507770">break</span> <span m="1508090">each</span> <span
  m="1508300">matrix</span> <span m="1508940">into</span> <span
  m="1509210">four</span> <span m="1509420">parts.</span> <span
  m="1510330">I'll</span> <span m="1510490">call</span> <span
  m="1510650">this</span> <span m="1510940">A11,</span> <span
  m="1512130">A12,</span> <span m="1513870">A21,</span> <span
  m="1514080">A22.</span> <span m="1516710">B11,</span> <span
  m="1517710">B12,</span> <span m="1519350">B21,</span> <span
  m="1520650">B22.</span> <span m="1524750">Same</span> <span
  m="1525010">thing</span> <span m="1525150">for</span> <span
  m="1525270">C.</span></p><p><span m="1529390">Now,</span> <span
  m="1533800">I</span> <span m="1534080">would</span> <span
  m="1534210">like</span> <span m="1534790">someone</span> <span
  m="1535220">to</span> <span m="1535360">tell</span> <span
  m="1535540">me,</span> <span m="1535830">what</span> <span
  m="1536000">is</span> <span m="1536180">C11,</span> <span
  m="1536880">in</span> <span m="1537000">this</span> <span
  m="1537180">case?</span> <span m="1541820">Yes.</span></p><p><span
  m="1542255">AUDIENCE: A11</span> <span
  m="1542690">[INAUDIBLE].</span></p><p><span m="1549590">LING REN: A12,</span>
  <span m="1550720">B21,</span> <span m="1550990">yep.</span> <span
  m="1552300">And</span> <span m="1553630">C12</span> <span
  m="1555320">is--</span> <span m="1557280">Just</span> <span
  m="1557380">speak</span> <span m="1557620">up,</span> <span
  m="1558900">don't</span> <span m="1559000">be</span> <span
  m="1559070">shy.</span> <span m="1561150">This</span> <span
  m="1561290">is</span> <span m="1561430">also</span> <span
  m="1561620">my</span> <span m="1561790">first</span> <span
  m="1562600">section</span> <span m="1563620">ever,</span> <span
  m="1563780">in</span> <span m="1564040">my</span> <span
  m="1564190">life,</span> <span m="1564650">teaching</span> <span
  m="1565020">a</span> <span m="1565040">recitation.</span> <span
  m="1565700">I'm</span> <span m="1565900">more</span> <span
  m="1566080">nervous</span> <span m="1566360">than</span> <span
  m="1566490">you</span> <span m="1566600">guys.</span> <span
  m="1569790">What</span> <span m="1569940">is</span> <span
  m="1570110">C12?</span></p><p><span m="1576288">AUDIENCE: A11,</span> <span
  m="1577236">B12?</span></p><p><span m="1579620">LING REN: A11,</span> <span
  m="1583030">B12.</span> <span m="1585800">A12,</span> <span
  m="1587280">B22,</span> <span m="1587716">right?</span> <span
  m="1588152">So</span> <span m="1588590">the</span> <span
  m="1588750">rule</span> <span m="1589030">is</span> <span
  m="1589830">the</span> <span m="1589960">same</span> <span
  m="1590380">as</span> <span m="1590540">before.</span> <span
  m="1591000">Matrix</span> <span m="1591360">multiplication.</span> <span
  m="1592040">Compute</span> <span m="1592260">this,</span> <span
  m="1593150">we</span> <span m="1593280">take</span> <span
  m="1593490">this</span> <span m="1593670">row,</span> <span
  m="1594050">this</span> <span m="1594210">column,</span> <span
  m="1594400">and</span> <span m="1594950">it</span> <span
  m="1595040">gives</span> <span m="1595290">us</span> <span
  m="1595470">this.</span></p><p><span m="1595870">AUDIENCE: So</span> <span
  m="1596340">the first one</span> <span
  m="1596810">[INAUDIBLE].</span></p><p><span m="1601040">LING REN:
  Right,</span> <span m="1601980">thank</span> <span m="1602160">you.</span>
  <span m="1607060">A12,</span> <span m="1607490">B21.</span> <span
  m="1610370">OK.</span> <span m="1611680">And,</span> <span
  m="1611870">same</span> <span m="1612060">thing,</span> <span
  m="1612390">C21,</span> <span m="1613160">we're</span> <span
  m="1613310">going</span> <span m="1613530">to</span> <span
  m="1613650">take</span> <span m="1613900">this</span> <span
  m="1614100">row</span> <span m="1614740">and</span> <span
  m="1615250">this</span> <span m="1615460">column.</span> <span
  m="1616655">A21</span> <span m="1617970">B11</span> <span
  m="1623540">plus</span> <span m="1624410">A22</span> <span
  m="1626560">B21.</span> <span m="1627840">C11</span> <span
  m="1629740">is</span> <span m="1630530">A21</span> <span
  m="1632550">B12</span> <span m="1634000">plus</span> <span
  m="1634950">A22</span> <span m="1637000">B22.</span> <span
  m="1638380">OK.</span> <span m="1644260">And</span> <span
  m="1644580">everyone</span> <span m="1644980">understands</span> <span
  m="1645370">this?</span> <span m="1646562">OK,</span> <span
  m="1646990">great.</span></p><p><span m="1648090">So,</span> <span
  m="1648430">now,</span> <span m="1648710">we've</span> <span
  m="1648930">broken</span> <span m="1649340">up</span> <span
  m="1649490">the</span> <span m="1649680">original</span> <span
  m="1650050">problem</span> <span m="1650490">into</span> <span
  m="1651150">several</span> <span m="1651540">subproblems.</span> <span
  m="1652600">We</span> <span m="1652740">only</span> <span
  m="1652940">need</span> <span m="1653100">to</span> <span
  m="1653210">do</span> <span m="1653760">matrix</span> <span
  m="1654120">multiplication</span> <span m="1654720">here</span> <span
  m="1656600">eight</span> <span m="1656850">times.</span> <span
  m="1659900">And</span> <span m="1660490">each</span> <span
  m="1660750">of</span> <span m="1660880">this</span> <span
  m="1661070">matrix</span> <span m="1661900">is</span> <span
  m="1663090">half</span> <span m="1663570">in</span> <span
  m="1663630">size.</span> <span m="1664520">If</span> <span
  m="1664780">the</span> <span m="1664870">original</span> <span
  m="1665240">algorithm</span> <span m="1665520">is</span> <span
  m="1665710">n</span> <span m="1665830">cubic,</span> <span
  m="1667120">now</span> <span m="1667330">each</span> <span
  m="1667530">sub</span> <span m="1667770">problem</span> <span
  m="1668180">is</span> <span m="1668520">half</span> <span m="1668930">n</span>
  <span m="1669310">cubic.</span> <span m="1670530">Then</span> <span
  m="1670610">we</span> <span m="1670710">have</span> <span
  m="1671980">eight</span> <span m="1672160">of</span> <span
  m="1672300">them,</span> <span m="1673400">so</span> <span
  m="1673620">the</span> <span m="1673710">complexity</span> <span
  m="1673940">is</span> <span m="1675370">still</span> <span
  m="1675860">n</span> <span m="1676080">cubic.</span> <span
  m="1677170">No</span> <span m="1677340">improvement</span> <span
  m="1677820">at</span> <span m="1678180">all.</span></p><p><span
  m="1681860">So,</span> <span m="1682090">actually,</span> <span
  m="1682510">to</span> <span m="1682550">be</span> <span
  m="1682720">more</span> <span m="1682870">precise,</span> <span
  m="1685880">we</span> <span m="1686020">can</span> <span
  m="1686380">further</span> <span m="1686790">break</span> <span
  m="1687020">up</span> <span m="1687710">these</span> <span
  m="1687940">matrices</span> <span m="1688500">into</span> <span
  m="1689020">smaller</span> <span m="1689890">blocks.</span> <span
  m="1690640">So,</span> <span m="1691350">to</span> <span m="1691650">be</span>
  <span m="1691770">precise,</span> <span m="1692290">its</span> <span
  m="1693160">complexity</span> <span m="1693800">should</span> <span
  m="1693990">be</span> <span m="1694170">given</span> <span
  m="1695220">by</span> <span m="1695810">a</span> <span
  m="1695950">recursion.</span> <span m="1700740">Eight</span> <span
  m="1700940">subproblems,</span> <span m="1701890">each</span> <span
  m="1702120">one</span> <span m="1702460">half</span> <span
  m="1702800">the</span> <span m="1702900">size,</span> <span
  m="1704060">plus--</span> <span m="1706180">can</span> <span
  m="1706960">anyone</span> <span m="1707220">tell</span> <span
  m="1707360">me?</span> <span m="1707540">What's</span> <span
  m="1707780">the</span> <span m="1708070">merging</span> <span
  m="1709030">complexity,</span> <span m="1710690">once</span> <span
  m="1710900">I</span> <span m="1710990">get</span> <span m="1712950">all</span>
  <span m="1713150">this?</span> <span m="1718500">[INAUDIBLE].</span> <span
  m="1724428">Go</span> <span m="1724940">ahead.</span></p><p><span
  m="1725310">AUDIENCE: Is it just constant</span> <span
  m="1725800">because</span> <span m="1726055">you're adding?</span></p><p><span
  m="1728740">LING REN: Yeah,</span> <span m="1728930">because</span> <span
  m="1729170">I'm</span> <span m="1729300">adding.</span> <span
  m="1729690">But</span> <span m="1729860">is</span> <span m="1729980">it</span>
  <span m="1730040">constant?</span> <span m="1732420">I'm</span> <span
  m="1732620">adding</span> <span m="1732870">these</span> <span
  m="1733020">two</span> <span m="1733160">matrices.</span></p><p><span
  m="1736000">AUDIENCE: [INAUDIBLE].</span></p><p><span m="1738852">LING REN:
  Pardon?</span></p><p><span m="1740160">AUDIENCE: For</span> <span
  m="1740640">each</span> <span m="1741100">level it can</span> <span
  m="1741590">base case?</span></p><p><span m="1743060">LING REN: Yeah,</span>
  <span m="1743240">for</span> <span m="1743480">base</span> <span
  m="1743570">case,</span> <span m="1743760">it's,</span> <span
  m="1743890">of</span> <span m="1744020">course,</span> <span
  m="1744290">constant.</span> <span m="1745560">OK,</span> <span
  m="1745780">so</span> <span m="1746060">maybe</span> <span
  m="1746300">I'm</span> <span m="1746400">not</span> <span
  m="1746590">clear</span> <span m="1746790">about</span> <span
  m="1746960">this.</span> <span m="1747180">What's</span> <span
  m="1747650">the</span> <span m="1747810">subproblem,</span> <span
  m="1748200">in</span> <span m="1748260">this</span> <span
  m="1748410">case?</span> <span m="1749110">It's</span> <span
  m="1749300">this</span> <span m="1750510">multiplication</span> <span
  m="1751100">operation,</span> <span m="1751930">OK?</span> <span
  m="1753100">And,</span> <span m="1753500">so,</span> <span
  m="1754010">these</span> <span m="1754490">are</span> <span
  m="1754640">the</span> <span m="1754730">eight</span> <span
  m="1755010">subproblems</span> <span m="1755650">I</span> <span
  m="1756130">will</span> <span m="1756340">solve.</span> <span
  m="1757270">After</span> <span m="1757570">solving</span> <span
  m="1757900">them,</span> <span m="1758230">I</span> <span
  m="1758340">need</span> <span m="1758500">to</span> <span
  m="1758630">add</span> <span m="1758900">them</span> <span
  m="1759220">together.</span> <span m="1760590">And</span> <span
  m="1761120">adding</span> <span m="1761620">two</span> <span
  m="1762250">matrices,</span> <span m="1764760">and</span> <span
  m="1764990">each</span> <span m="1765360">is</span> <span
  m="1765520">size</span> <span m="1766010">ha;f</span> <span
  m="1766360">of</span> <span m="1766570">n.</span> <span m="1767520">The</span>
  <span m="1767630">complexity</span> <span m="1768190">is--</span></p><p><span
  m="1768580">AUDIENCE: n</span> <span m="1768998">squared</span> <span
  m="1769416">2 over</span> <span m="1769834">2?</span></p><p><span
  m="1770670">LING REN: Yeah,</span> <span m="1770930">it's</span> <span
  m="1771510">n</span> <span m="1771710">squared.</span> <span
  m="1774300">Basically,</span> <span m="1774680">n</span> <span
  m="1774780">squared.</span> <span m="1775770">So,</span> <span
  m="1776990">to</span> <span m="1777090">get</span> <span m="1777270">a</span>
  <span m="1777320">precise</span> <span m="1779050">complexity,</span> <span
  m="1779620">we</span> <span m="1779720">should</span> <span
  m="1779890">solve</span> <span m="1780110">this</span> <span
  m="1780260">recursion,</span> <span m="1780790">but</span> <span
  m="1780990">it</span> <span m="1781070">will</span> <span
  m="1781210">end</span> <span m="1781400">up</span> <span
  m="1781500">being</span> <span m="1781690">the</span> <span
  m="1781780">same</span> <span m="1781980">thing</span> <span
  m="1782180">as</span> <span m="1782670">this</span> <span
  m="1782920">intuition,</span> <span m="1783530">n</span> <span
  m="1784280">cubic.</span> <span m="1786090">OK,</span> <span
  m="1786360">so</span> <span m="1786620">now,</span> <span
  m="1787140">this</span> <span m="1787300">is</span> <span
  m="1787430">the</span> <span m="1787510">magic.</span></p><p><span
  m="1788470">So</span> <span m="1788630">Strassen,</span> <span
  m="1788980">in</span> <span m="1789520">1969,</span> <span
  m="1791690">came</span> <span m="1791920">up</span> <span
  m="1792060">with</span> <span m="1792240">this</span> <span
  m="1792460">algorithm.</span></p><p><span m="1795670">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="1800820">LING REN: Each</span> <span
  m="1801120">of</span> <span m="1801300">these</span> <span
  m="1802190">is</span> <span m="1803165">a</span> <span m="1803510">half</span>
  <span m="1803910">n</span> <span m="1804340">by</span> <span
  m="1804490">half</span> <span m="1804530">n</span> <span
  m="1805140">matrix.</span></p><p><span m="1806222">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="1810380">LING REN: So</span> <span
  m="1810740">Strassen</span> <span m="1811240">came</span> <span
  m="1811420">up</span> <span m="1811540">with</span> <span
  m="1811680">this</span> <span m="1811850">algorithm.</span> <span
  m="1813270">He</span> <span m="1813390">somehow</span> <span
  m="1814230">defined</span> <span m="1815370">M1</span> <span
  m="1815980">through</span> <span m="1816240">M7,</span> <span
  m="1818390">seven</span> <span m="1818880">matrices,</span> <span
  m="1820620">in</span> <span m="1820780">this</span> <span
  m="1820940">way.</span> <span m="1822820">I</span> <span
  m="1823420">can't</span> <span m="1823820">provide</span> <span
  m="1824130">any</span> <span m="1824300">intuition,</span> <span
  m="1824770">because</span> <span m="1825190">I</span> <span
  m="1825280">didn't</span> <span m="1825530">come</span> <span
  m="1825700">up</span> <span m="1825810">with</span> <span
  m="1825910">this.</span> <span m="1826570">And,</span> <span
  m="1826760">somehow,</span> <span m="1828320">with</span> <span
  m="1828500">those</span> <span m="1828730">seven</span> <span
  m="1829170">matrices,</span> <span m="1830580">he</span> <span
  m="1830740">can</span> <span m="1831010">reconstruct,</span> <span
  m="1832090">he</span> <span m="1832190">can</span> <span
  m="1832320">compute</span> <span m="1833210">all</span> <span
  m="1833430">the</span> <span m="1833520">four</span> <span
  m="1835110">submatrices</span> <span m="1835810">in</span> <span
  m="1835940">C.</span></p><p><span m="1838680">And</span> <span
  m="1838820">it's</span> <span m="1838940">not</span> <span
  m="1839110">very</span> <span m="1839400">just</span> <span
  m="1839760">interesting</span> <span m="1840190">to</span> <span
  m="1840310">check</span> <span m="1840540">it,</span> <span
  m="1840770">because</span> <span m="1841040">the</span> <span
  m="1841140">algorithm</span> <span m="1841550">is</span> <span
  m="1841660">definitely</span> <span m="1842070">correct.</span> <span
  m="1843470">But</span> <span m="1843690">let's</span> <span
  m="1844010">just</span> <span m="1844200">do</span> <span
  m="1844610">one</span> <span m="1844830">of</span> <span
  m="1844940">them.</span> <span m="1845150">OK,</span> <span
  m="1845350">how</span> <span m="1845520">about</span> <span
  m="1845720">this</span> <span m="1845880">one.</span> <span
  m="1846740">So</span> <span m="1846940">C21</span> <span m="1847910">is</span>
  <span m="1848050">M2</span> <span m="1848410">plus</span> <span
  m="1848650">M4.</span> <span m="1849270">So</span> <span m="1849705">M2</span>
  <span m="1850140">plus</span> <span m="1850563">M4.</span> <span
  m="1852190">So</span> <span m="1852580">M2</span> <span
  m="1852750">will</span> <span m="1853080">have</span> <span
  m="1853585">A12</span> <span m="1855010">B11,</span> <span
  m="1857300">A22</span> <span m="1857940">B11.</span> <span
  m="1858830">So</span> <span m="1859300">M4,</span> <span
  m="1859750">there's</span> <span m="1860000">A22</span> <span
  m="1861250">minus</span> <span m="1861690">B11,</span> <span
  m="1862200">so</span> <span m="1862320">that</span> <span
  m="1862530">cancels</span> <span m="1862900">out.</span> <span
  m="1863920">So</span> <span m="1864310">we're</span> <span
  m="1864670">left</span> <span m="1864770">with</span> <span
  m="1865530">A21</span> <span m="1866270">B11</span> <span
  m="1867090">plus</span> <span m="1867700">A22</span> <span
  m="1868820">B21.</span> <span m="1872180">That's</span> <span
  m="1872350">the</span> <span m="1872450">correct</span> <span
  m="1872720">answer.</span></p><p><span m="1875370">So</span> <span
  m="1875410">this,</span> <span m="1876790">I</span> <span
  m="1876910">guess,</span> <span m="1877120">is</span> <span
  m="1877260">a</span> <span m="1877320">very</span> <span
  m="1877590">clever</span> <span m="1877830">algorithm.</span> <span
  m="1878400">You</span> <span m="1878490">have</span> <span
  m="1878660">to</span> <span m="1878770">work</span> <span
  m="1878970">in</span> <span m="1879060">that</span> <span
  m="1879260">area</span> <span m="1879560">for</span> <span
  m="1879960">10</span> <span m="1880340">years</span> <span
  m="1880670">to</span> <span m="1880840">come</span> <span
  m="1881010">up</span> <span m="1881090">with</span> <span
  m="1881200">this</span> <span m="1881770">so</span> <span
  m="1881870">that's</span> <span m="1882120">not</span> <span
  m="1882300">our</span> <span m="1882670">concern.</span> <span
  m="1883220">Our</span> <span m="1883910">goal</span> <span
  m="1884920">is</span> <span m="1885110">to</span> <span
  m="1885300">analyze</span> <span m="1886070">this</span> <span
  m="1886270">algorithm.</span> <span m="1887620">What's</span> <span
  m="1887830">the</span> <span m="1887970">complexity</span> <span
  m="1888680">of</span> <span m="1888830">it?</span> <span m="1893760">So</span>
  <span m="1893840">does</span> <span m="1894010">anyone</span> <span
  m="1894450">understand</span> <span m="1894740">this</span> <span
  m="1894870">recursion?</span> <span m="1897200">Can</span> <span
  m="1897520">someone</span> <span m="1897850">tell</span> <span
  m="1898050">me,</span> <span m="1898250">what's</span> <span
  m="1898450">the</span> <span m="1898560">recursion</span> <span
  m="1899920">for</span> <span m="1900770">this</span> <span
  m="1900980">part,</span> <span m="1901400">for</span> <span
  m="1901570">this</span> <span m="1901970">Strassen</span> <span
  m="1902260">algorithm?</span></p><p><span m="1907860">We</span> <span
  m="1907980">have</span> <span m="1908220">the</span> <span
  m="1908300">original</span> <span m="1908700">problem,</span> <span
  m="1915610">and</span> <span m="1916150">we</span> <span
  m="1916270">have</span> <span m="1916450">some--</span> <span
  m="1916970">go</span> <span m="1917080">ahead.</span></p><p><span
  m="1917280">AUDIENCE: So</span> <span m="1917769">since</span> <span
  m="1918258">each of</span> <span m="1918747">the</span> <span
  m="1919236">M</span> <span m="1919725">1 through</span> <span
  m="1920214">7</span> <span m="1920703">only require</span> <span
  m="1921192">one multiplication,</span> <span m="1922659">you'll</span> <span
  m="1923148">need to</span> <span m="1923637">solve seven</span> <span
  m="1924615">subproblems,</span> <span m="1925593">so</span> <span
  m="1926082">7T</span> <span m="1927060">n</span> <span m="1927549">over
  2</span> <span m="1928527">plus</span> <span m="1929016">O</span> <span
  m="1929505">n squared.</span></p><p><span m="1931950">LING REN: That's</span>
  <span m="1932200">absolutely</span> <span m="1932630">correct.</span> <span
  m="1936220">Everyone</span> <span m="1936310">gets</span> <span
  m="1936510">this?</span> <span m="1938040">So</span> <span
  m="1938810">what</span> <span m="1938990">Strassen</span> <span
  m="1939680">did,</span> <span m="1939970">is</span> <span
  m="1940810">he</span> <span m="1941050">came</span> <span
  m="1941280">up</span> <span m="1941410">with</span> <span
  m="1941560">the</span> <span m="1941620">seven</span> <span
  m="1941920">matrices.</span> <span m="1942730">Each</span> <span
  m="1943030">one</span> <span m="1943340">requires</span> <span
  m="1943860">only</span> <span m="1944590">one</span> <span
  m="1946450">multiplication.</span> <span m="1947600">So</span> <span
  m="1947680">we</span> <span m="1947760">have</span> <span
  m="1947960">seven</span> <span m="1948340">subproblems,</span> <span
  m="1949780">instead</span> <span m="1950200">of</span> <span
  m="1950370">eight,</span> <span m="1951340">and</span> <span
  m="1951490">that's</span> <span m="1951740">going</span> <span
  m="1951970">to</span> <span m="1952670">give</span> <span
  m="1952860">us</span> <span m="1952980">a</span> <span
  m="1953050">benefit,</span> <span m="1954410">an</span> <span
  m="1954530">improvement.</span></p><p><span m="1958290">So</span> <span
  m="1958470">the</span> <span m="1958560">question</span> <span
  m="1958900">now</span> <span m="1959060">becomes,</span> <span
  m="1959530">how</span> <span m="1959750">do</span> <span m="1959910">I</span>
  <span m="1960020">solve</span> <span m="1960490">this</span> <span
  m="1960660">recursion?</span> <span m="1961370">Given</span> <span
  m="1961580">this</span> <span m="1961740">recursion,</span> <span
  m="1962280">how</span> <span m="1962420">do</span> <span m="1962540">I</span>
  <span m="1962630">know</span> <span m="1962970">its</span> <span
  m="1963140">complexity?</span> <span m="1964000">And</span> <span
  m="1964140">same</span> <span m="1964340">question</span> <span
  m="1964900">there.</span> <span m="1969230">Anyone</span> <span
  m="1969330">want</span> <span m="1969560">to</span> <span
  m="1969610">give</span> <span m="1969740">it</span> <span m="1969820">a</span>
  <span m="1969890">try?</span> <span m="1974200">So</span> <span
  m="1974350">that's</span> <span m="1974720">going</span> <span
  m="1974940">to</span> <span m="1978080">be</span> <span
  m="1978190">covered</span> <span m="1978640">in</span> <span
  m="1978800">a</span> <span m="1978870">third</span> <span
  m="1979080">topic,</span> <span m="1993830">which</span> <span
  m="1994070">is</span> <span m="1994450">Master</span> <span
  m="1994810">Theorem.</span></p><p><span m="2001770">So</span> <span
  m="2001970">Master</span> <span m="2002300">Theorem</span> <span
  m="2003220">does</span> <span m="2003540">exactly</span> <span
  m="2004000">that.</span> <span m="2005840">All</span> <span
  m="2006040">it</span> <span m="2006130">does</span> <span
  m="2006780">is,</span> <span m="2009180">given</span> <span
  m="2009490">the</span> <span m="2009610">recursion,</span> <span
  m="2012170">a</span> <span m="2017020">and</span> <span m="2017390">T</span>
  <span m="2018285">of</span> <span m="2018730">n</span> <span
  m="2018930">over</span> <span m="2019230">b,</span> <span
  m="2019860">plus</span> <span m="2022100">some</span> <span
  m="2024100">work</span> <span m="2024390">for</span> <span
  m="2024550">merging,</span> <span m="2027130">where</span> <span m="2027360">a
  and</span> <span m="2027690">b</span> <span m="2027840">are</span> <span
  m="2027920">constants,</span> <span m="2028900">it</span> <span
  m="2029260">directly</span> <span m="2029820">tell</span> <span
  m="2030130">you</span> <span m="2030890">what</span> <span m="2031220">T
  of</span> <span m="2031530">n is,</span> <span m="2032980">in</span> <span
  m="2033180">some</span> <span m="2033400">cases.</span> <span
  m="2035810">So</span> <span m="2036040">I'll</span> <span
  m="2036340">first</span> <span m="2036600">write</span> <span
  m="2036830">the</span> <span m="2037250">formula.</span></p><p><span
  m="2039640">Master</span> <span m="2039940">Theorem</span> <span
  m="2040310">actually</span> <span m="2040730">has</span> <span
  m="2040870">three</span> <span m="2041040">cases.</span> <span
  m="2041990">The</span> <span m="2042090">first</span> <span
  m="2042290">case,</span> <span m="2042830">fn,</span> <span
  m="2044370">is</span> <span m="2045450">order</span> <span
  m="2046890">n</span> <span m="2047160">raised</span> <span
  m="2047440">to</span> <span m="2047550">c,</span> <span
  m="2047950">where</span> <span m="2048219">c</span> <span
  m="2048620">is</span> <span m="2048820">less</span> <span
  m="2049130">than</span> <span m="2049926">log b</span> <span
  m="2050363">of</span> <span m="2050800">a.</span> <span
  m="2051354">Then,</span> <span m="2051679">Master</span> <span
  m="2052100">Theorem</span> <span m="2052540">says,</span> <span
  m="2052900">it's</span> <span m="2053120">complexity</span> <span
  m="2054620">is</span> <span m="2054899">theta</span> <span
  m="2060316">log</span> <span m="2060790">b</span> <span m="2061040">of</span>
  <span m="2061409">a.</span></p><p><span m="2065570">Second</span> <span
  m="2065929">case,</span> <span m="2067409">fn</span> <span
  m="2068620">is</span> <span m="2069060">theta</span> <span
  m="2070610">nc</span> <span m="2071800">log</span> <span m="2072230">K,</span>
  <span m="2075040">where</span> <span m="2075190">c</span> <span
  m="2075530">is,</span> <span m="2077335">log</span> <span m="2077800">b</span>
  <span m="2077960">is</span> <span m="2078080">equal</span> <span
  m="2078500">to</span> <span m="2080110">b</span> <span m="2080260">of</span>
  <span m="2080380">a,</span> <span m="2081159">then</span> <span
  m="2081909">it's</span> <span m="2082560">complexity</span> <span
  m="2083270">is</span> <span m="2084880">n</span> <span
  m="2085240">raised</span> <span m="2085600">to</span> <span
  m="2085980">c</span> <span m="2087110">log</span> <span m="2087159">K</span>
  <span m="2087424">plus</span> <span m="2087690">1</span> <span
  m="2088080">n.</span> <span m="2090389">You</span> <span
  m="2090480">don't</span> <span m="2090580">necessarily</span> <span
  m="2091020">have</span> <span m="2091170">to</span> <span
  m="2091270">copy</span> <span m="2091530">them,</span> <span
  m="2091690">because</span> <span m="2092670">you</span> <span
  m="2092780">just</span> <span m="2092980">find</span> <span
  m="2093179">them</span> <span m="2094110">anywhere.</span></p><p><span
  m="2095520">And</span> <span m="2095699">the</span> <span
  m="2095780">third</span> <span m="2096040">case,</span> <span
  m="2096820">you</span> <span m="2096909">can</span> <span
  m="2097040">imagine,</span> <span m="2098160">it's</span> <span
  m="2098380">the</span> <span m="2100090">only</span> <span
  m="2100360">remaining</span> <span m="2100760">case,</span> <span
  m="2101190">which</span> <span m="2101400">is,</span> <span
  m="2102340">fn</span> <span m="2102710">is</span> <span
  m="2102840">large,</span> <span m="2103205">it's</span> <span
  m="2103570">omega</span> <span m="2104630">n</span> <span m="2104770">raised
  to</span> <span m="2105170">c,</span> <span m="2105550">where</span> <span
  m="2105770">c</span> <span m="2106070">is</span> <span
  m="2106200">greater</span> <span m="2106610">than</span> <span
  m="2107940">log</span> <span m="2108380">b</span> <span m="2108540">of</span>
  <span m="2108690">a.</span> <span m="2110085">Then,</span> <span
  m="2110550">Master</span> <span m="2110900">Theorem</span> <span
  m="2111240">says,</span> <span m="2111920">its</span> <span
  m="2112190">complexity,</span> <span m="2113280">the</span> <span
  m="2113480">complexity</span> <span m="2113845">of</span> <span
  m="2114210">Tn,</span> <span m="2114900">is</span> <span
  m="2115920">theta</span> <span m="2116844">fn.</span></p><p><span
  m="2119630">So,</span> <span m="2119860">intuitively,</span> <span
  m="2121180">if</span> <span m="2121550">fn</span> <span m="2122210">is</span>
  <span m="2122420">not</span> <span m="2122620">too</span> <span
  m="2122710">much</span> <span m="2122890">work,</span> <span
  m="2123810">then</span> <span m="2124460">it's</span> <span
  m="2124640">basically</span> <span m="2125110">this</span> <span
  m="2125310">recursion,</span> <span m="2126170">what</span> <span
  m="2126630">recursion</span> <span m="2126960">gives</span> <span
  m="2127150">you.</span> <span m="2127800">If</span> <span
  m="2128010">fn</span> <span m="2128670">dominates,</span> <span
  m="2129320">fn</span> <span m="2129650">is</span> <span m="2130850">the</span>
  <span m="2131730">biggest</span> <span m="2132060">component,</span> <span
  m="2133330">then</span> <span m="2133680">Tn</span> <span
  m="2134180">is,</span> <span m="2134400">roughly,</span> <span m="2134740">on
  the</span> <span m="2134900">order</span> <span m="2135190">of</span> <span
  m="2135290">fn,</span> <span m="2135840">and</span> <span
  m="2136030">there's</span> <span m="2136250">a</span> <span
  m="2136520">case</span> <span m="2136720">in</span> <span
  m="2136790">the</span> <span m="2136860">middle.</span> <span
  m="2145600">Now,</span> <span m="2145750">let's</span> <span
  m="2146380">see</span> <span m="2146710">why</span> <span
  m="2146890">that</span> <span m="2147050">is the</span> <span
  m="2147190">case.</span> <span m="2148000">I'll</span> <span
  m="2148290">only</span> <span m="2148600">cover</span> <span
  m="2148880">one</span> <span m="2149080">case,</span> <span
  m="2149330">here.</span></p><p><span m="2159200">So,</span> <span
  m="2159340">again,</span> <span m="2159960">we are</span> <span
  m="2160080">going</span> <span m="2160310">to</span> <span
  m="2160410">draw</span> <span m="2160630">a</span> <span
  m="2160710">recursion</span> <span m="2161200">tree,</span> <span
  m="2162030">because</span> <span m="2162300">that</span> <span
  m="2162460">is</span> <span m="2162590">very</span> <span
  m="2162820">useful</span> <span m="2163115">in</span> <span
  m="2163410">all</span> <span m="2163800">the</span> <span
  m="2163900">recursion</span> <span m="2164300">problems.</span> <span
  m="2166390">So</span> <span m="2166800">we</span> <span
  m="2166920">start</span> <span m="2167850">with</span> <span
  m="2168000">a</span> <span m="2168080">problem</span> <span
  m="2168510">of</span> <span m="2168620">size</span> <span
  m="2168940">n,</span> <span m="2170556">and</span> <span m="2170980">we</span>
  <span m="2171190">break</span> <span m="2171480">them</span> <span
  m="2171650">into</span> <span m="2171960">problem</span> <span
  m="2172390">size</span> <span m="2172880">n</span> <span
  m="2173350">over</span> <span m="2173760">b.</span></p><p><span
  m="2182560">So</span> <span m="2182770">on</span> <span m="2183020">and
  so</span> <span m="2183200">forth.</span> <span m="2184000">What's</span>
  <span m="2184280">the</span> <span m="2184410">size</span> <span
  m="2184670">of</span> <span m="2184810">this subproblem?</span> <span
  m="2191770">So</span> <span m="2192280">that</span> <span
  m="2192680">recursion</span> <span m="2193150">represents</span> <span
  m="2193630">a</span> <span m="2193740">class</span> <span
  m="2194070">of</span> <span m="2194460">recursive</span> <span
  m="2194990">algorithm.</span> <span m="2196500">Every</span> <span
  m="2196740">time</span> <span m="2197090">it</span> <span
  m="2197200">breaks</span> <span m="2197500">the</span> <span
  m="2197630">problem,</span> <span m="2199330">it</span> <span
  m="2199470">reduced</span> <span m="2199790">the</span> <span
  m="2199870">problem</span> <span m="2200140">size</span> <span
  m="2200430">by</span> <span m="2200560">a</span> <span
  m="2200610">factor</span> <span m="2200860">of</span> <span
  m="2200950">b,</span> <span m="2201620">so</span> <span m="2201810">what
  do</span> <span m="2202220">I have</span> <span m="2202580">here?</span> <span
  m="2205630">Go</span> <span m="2205720">ahead.</span></p><p><span
  m="2206404">AUDIENCE: [INAUDIBLE]</span></p><p><span m="2208180">LING REN:
  n</span> <span m="2208490">over</span> <span m="2209620">b</span> <span
  m="2209780">squared.</span> <span m="2212510">So</span> <span
  m="2212660">on</span> <span m="2212830">and</span> <span m="2212930">so</span>
  <span m="2212970">forth.</span> <span m="2213760">So</span> <span
  m="2214330">what</span> <span m="2214740">is</span> <span
  m="2214990">a,</span> <span m="2215682">in</span> <span
  m="2216030">this</span> <span m="2216910">graph?</span></p><p><span
  m="2219640">AUDIENCE: 3.</span></p><p><span m="2221950">LING REN: 3,</span>
  <span m="2222940">think</span> <span m="2223100">so?</span> <span
  m="2223650">3.</span> <span m="2224322">a</span> <span m="2224660">is</span>
  <span m="2224800">just</span> <span m="2225000">a</span> <span
  m="2225430">branching</span> <span m="2225880">factor</span> <span
  m="2226570">of</span> <span m="2226740">this</span> <span
  m="2226920">tree.</span> <span m="2228490">I keep</span> <span
  m="2228850">going.</span> <span m="2229980">Finally,</span> <span
  m="2230520">I</span> <span m="2230640">will</span> <span
  m="2230890">reach</span> <span m="2231270">my</span> <span
  m="2232380">base</span> <span m="2232660">case.</span> <span
  m="2234330">So</span> <span m="2234850">my</span> <span
  m="2234950">next</span> <span m="2235220">question</span> <span
  m="2235520">is,</span> <span m="2235980">after</span> <span
  m="2236660">how</span> <span m="2236880">many</span> <span
  m="2237270">levels</span> <span m="2237620">of</span> <span
  m="2237710">recursion</span> <span m="2239060">will</span> <span
  m="2239260">I</span> <span m="2239400">reach</span> <span m="2239690">a</span>
  <span m="2239770">base</span> <span m="2240050">case</span> <span
  m="2240610">of</span> <span m="2241090">size</span> <span
  m="2242090">1?</span> <span m="2251498">Go</span> <span
  m="2251980">ahead.</span></p><p><span m="2252462">AUDIENCE: Log</span> <span
  m="2252944">b of</span> <span m="2253426">[INAUDIBLE]?</span></p><p><span
  m="2254872">LING REN: Log</span> <span m="2255380">b</span> <span
  m="2255690">of--</span> <span m="2262630">OK,</span> <span
  m="2262960">so,</span> <span m="2265000">here</span> <span
  m="2265370">is</span> <span m="2265590">n</span> <span m="2265990">over</span>
  <span m="2266240">b,</span> <span m="2266650">n</span> <span
  m="2266850">over</span> <span m="2267020">b</span> <span
  m="2267150">square,</span> <span m="2267590">next</span> <span
  m="2267890">one</span> <span m="2268340">n</span> <span m="2268450">over
  b</span> <span m="2268730">cubic,</span> <span m="2269780">so</span> <span
  m="2269970">on</span> <span m="2270130">and</span> <span m="2270230">so</span>
  <span m="2270280">forth.</span> <span m="2270630">So,</span> <span
  m="2271290">say,</span> <span m="2271790">this</span> <span
  m="2272160">last</span> <span m="2272450">level</span> <span
  m="2272540">it</span> <span m="2272960">Tth</span> <span
  m="2273250">level,</span> <span m="2274370">than</span> <span
  m="2274740">the</span> <span m="2274820">problems</span> <span
  m="2275270">size</span> <span m="2275460">is</span> <span m="2275620">n</span>
  <span m="2275670">over--</span> <span m="2279810">we</span> <span
  m="2280010">raise</span> <span m="2280110">to</span> <span
  m="2280230">T,</span> <span m="2281930">and</span> <span m="2282060">we</span>
  <span m="2282150">want</span> <span m="2282370">that</span> <span
  m="2282600">to</span> <span m="2282800">be</span> <span m="2286400">a</span>
  <span m="2286480">constant,</span> <span m="2287690">so</span> <span
  m="2287910">what</span> <span m="2288030">is</span> <span
  m="2288180">T?</span></p><p><span m="2293440">AUDIENCE: Log</span> <span
  m="2293933">b on n.</span></p><p><span m="2295420">LING REN: Log</span> <span
  m="2296400">b</span> <span m="2298010">of</span> <span m="2298170">n.</span>
  <span m="2300276">Now,</span> <span m="2300740">this</span> <span
  m="2300920">is</span> <span m="2301070">the</span> <span
  m="2301170">recursion</span> <span m="2301630">tree,</span> <span
  m="2302590">and</span> <span m="2303140">we</span> <span
  m="2303340">have</span> <span m="2303580">that</span> <span
  m="2303870">fn</span> <span m="2304320">among</span> <span
  m="2304570">the</span> <span m="2304960">emerging</span> <span
  m="2305340">work</span> <span m="2305550">to</span> <span
  m="2305670">do.</span> <span m="2306350">So,</span> <span
  m="2306610">here,</span> <span m="2306930">we</span> <span
  m="2307020">have</span> <span m="2307220">to</span> <span
  m="2307330">do</span> <span m="2307790">fn</span> <span
  m="2308220">work,</span> <span m="2310160">to</span> <span
  m="2310380">merge</span> <span m="2310810">these</span> <span
  m="2311430">a</span> <span m="2311610">results</span> <span
  m="2312300">to</span> <span m="2314050">the</span> <span
  m="2314800">solution</span> <span m="2315210">of</span> <span
  m="2315330">our</span> <span m="2315450">problem,</span> <span
  m="2315810">n.</span> <span m="2316940">Then,</span> <span
  m="2317870">we</span> <span m="2318040">have</span> <span
  m="2318330">f-</span> <span m="2320320">what's</span> <span m="2320470">the
  emerging</span> <span m="2320580">work</span> <span m="2320770">for</span>
  <span m="2320920">this</span> <span m="2321120">level,</span> <span
  m="2322040">for</span> <span m="2322220">this</span> <span
  m="2323540">part</span> <span m="2323740">of</span> <span
  m="2323840">the</span> <span m="2323930">tree?</span> <span
  m="2327160">This</span> <span m="2327340">is</span> <span
  m="2327460">my</span> <span m="2328040">problem</span> <span
  m="2328350">size.</span></p><p><span m="2331708">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2334670">LING REN: n</span> <span
  m="2334820">over</span> <span m="2335060">b,</span> <span
  m="2335640">right.</span> <span m="2335890">And</span> <span
  m="2336070">we</span> <span m="2336190">have</span> <span m="2336390">a</span>
  <span m="2336570">of</span> <span m="2336690">them.</span> <span
  m="2337650">OK,</span> <span m="2339540">so</span> <span m="2339660">on</span>
  <span m="2339940">and</span> <span m="2340310">so forth.</span> <span
  m="2341590">So,</span> <span m="2342270">then,</span> <span
  m="2342720">we</span> <span m="2343990">know</span> <span
  m="2344440">what</span> <span m="2344600">is</span> <span
  m="2344980">Tn.</span> <span m="2345920">Let's</span> <span
  m="2346210">just</span> <span m="2347420">enumerate</span> <span
  m="2348030">all</span> <span m="2348260">the</span> <span
  m="2348370">work</span> <span m="2348570">we</span> <span
  m="2348670">have</span> <span m="2348850">to</span> <span
  m="2348970">do.</span> <span m="2349260">So</span> <span m="2349590">on</span>
  <span m="2349740">the</span> <span m="2349780">first</span> <span
  m="2350050">level,</span> <span m="2350320">we</span> <span
  m="2350420">have</span> <span m="2350640">to</span> <span
  m="2350730">do</span> <span m="2351550">fn.</span> <span
  m="2353470">OK,</span> <span m="2353760">on</span> <span
  m="2353910">second</span> <span m="2354230">level,</span> <span
  m="2355210">af</span> <span m="2357710">n</span> <span m="2357890">of</span>
  <span m="2358030">b--</span> <span m="2358820">sorry,</span> <span
  m="2359070">n</span> <span m="2359260">over</span> <span
  m="2359450">b.</span></p><p><span m="2360460">And</span> <span
  m="2360670">what's</span> <span m="2360880">the</span> <span
  m="2360970">next</span> <span m="2361200">level?</span> <span
  m="2365850">We</span> <span m="2365930">have</span> <span
  m="2366500">how</span> <span m="2366580">many</span> <span
  m="2366830">subproblems?</span> <span m="2370080">Speak</span> <span
  m="2370290">louder.</span></p><p><span m="2371007">AUDIENCE: a
  squared.</span></p><p><span m="2372200">LING REN: a</span> <span
  m="2372400">square</span> <span m="2372890">subproblems,</span> <span
  m="2374380">and</span> <span m="2374650">each</span> <span
  m="2374870">of</span> <span m="2374990">them</span> <span
  m="2375210">is</span> <span m="2380180">n</span> <span m="2380420">over</span>
  <span m="2380830">b</span> <span m="2381170">squared.</span> <span
  m="2383570">And,</span> <span m="2383730">finally,</span> <span
  m="2384980">I</span> <span m="2385130">reach</span> <span
  m="2385440">my</span> <span m="2387560">last</span> <span
  m="2387950">level.</span> <span m="2389172">They</span> <span
  m="2389570">are</span> <span m="2389750">all</span> <span
  m="2390190">base</span> <span m="2390440">cases,</span> <span
  m="2391400">so</span> <span m="2391540">I</span> <span m="2391680">have</span>
  <span m="2392030">a</span> <span m="2392560">raised</span> <span
  m="2392840">to</span> <span m="2392960">T</span> <span m="2393200">of</span>
  <span m="2393310">them,</span> <span m="2394300">because</span> <span
  m="2394620">I</span> <span m="2394690">defined</span> <span
  m="2395050">T</span> <span m="2395280">to</span> <span m="2395420">be</span>
  <span m="2395600">my</span> <span m="2395850">depth</span> <span
  m="2396130">of</span> <span m="2396240">the</span> <span
  m="2396340">tree.</span> <span m="2397370">And</span> <span
  m="2397570">each</span> <span m="2397780">of</span> <span
  m="2397910">them</span> <span m="2398200">is</span> <span m="2399120">T</span>
  <span m="2399280">of</span> <span m="2399390">1.</span></p><p><span
  m="2402630">OK,</span> <span m="2403450">so</span> <span
  m="2404090">that's</span> <span m="2404540">Tn.</span> <span
  m="2405770">I'm</span> <span m="2405940">not</span> <span
  m="2406240">entirely</span> <span m="2406730">happy</span> <span
  m="2407280">with</span> <span m="2407480">this</span> <span
  m="2408020">formula,</span> <span m="2408590">because</span> <span
  m="2409410">I</span> <span m="2409550">have</span> <span
  m="2409700">this</span> <span m="2409860">beautiful</span> <span
  m="2410300">pattern,</span> <span m="2410660">here,</span> <span
  m="2411850">except</span> <span m="2412240">for</span> <span
  m="2412370">that</span> <span m="2412520">last</span> <span
  m="2412890">guy.</span> <span m="2414540">It's</span> <span
  m="2416066">add</span> <span m="2416470">one a</span> <span
  m="2416690">and</span> <span m="2417050">divide</span> <span m="2417330">one
  b,</span> <span m="2417790">blah,</span> <span m="2418070">blah,</span> <span
  m="2418230">blah.</span> <span m="2419910">So</span> <span
  m="2421110">I'm</span> <span m="2421260">going</span> <span
  m="2421470">to</span> <span m="2421580">change</span> <span
  m="2421920">this</span> <span m="2423140">T</span> <span
  m="2423470">into</span> <span m="2423870">f.</span> <span
  m="2424580">Can</span> <span m="2424700">I</span> <span m="2424750">do</span>
  <span m="2424850">that?</span></p><p><span m="2426570">Because</span> <span
  m="2426870">it's</span> <span m="2426990">[INAUDIBLE]</span> <span
  m="2427430">is</span> <span m="2427680">the</span> <span
  m="2427790">same,</span> <span m="2428070">right?</span> <span
  m="2428610">T1</span> <span m="2428990">is</span> <span m="2429080">a</span>
  <span m="2429130">constant,</span> <span m="2429560">f1</span> <span
  m="2429880">is</span> <span m="2430000">also</span> <span
  m="2430230">constant.</span> <span m="2431230">Then,</span> <span
  m="2431490">I</span> <span m="2431570">get</span> <span m="2431790">my</span>
  <span m="2431960">beautiful</span> <span m="2432290">form,</span> <span
  m="2432820">where</span> <span m="2435310">it's</span> <span
  m="2435520">a</span> <span m="2436300">sum</span> <span
  m="2439230">from</span> <span m="2439580">i</span> <span
  m="2441140">equals</span> <span m="2441450">0</span> <span
  m="2442250">to</span> <span m="2442340">T.</span> <span
  m="2444210">What's</span> <span m="2444410">in</span> <span
  m="2444510">the</span> <span m="2444590">sum?</span> <span
  m="2450226">Go</span> <span m="2450712">ahead.</span></p><p><span
  m="2451684">AUDIENCE: [INAUDIBLE].</span></p><p><span m="2455086">LING REN:
  a</span> <span m="2455580">raised</span> <span m="2455900">to</span> <span
  m="2456020">i,</span> <span m="2456456">f</span> <span m="2456892">of</span>
  <span m="2457328">n</span> <span m="2458200">over</span> <span
  m="2458690">b1.</span> <span m="2462022">Everyone</span> <span
  m="2462720">gets</span> <span m="2462910">that?</span> <span
  m="2465970">Now,</span> <span m="2466870">you</span> <span
  m="2466990">can</span> <span m="2467130">roughly</span> <span
  m="2467410">see</span> <span m="2467650">why</span> <span
  m="2467820">we</span> <span m="2467910">have</span> <span
  m="2468060">three</span> <span m="2468240">cases.</span> <span
  m="2470080">So</span> <span m="2470880">let</span> <span m="2471020">me</span>
  <span m="2471190">deal</span> <span m="2471400">with</span> <span
  m="2471540">the</span> <span m="2471620">first</span> <span
  m="2471870">case.</span> <span m="2472750">The</span> <span
  m="2472760">first</span> <span m="2473010">case</span> <span
  m="2473330">says,</span> <span m="2473763">fn</span> <span
  m="2474630">is</span> <span m="2475250">order</span> <span
  m="2478560">n</span> <span m="2478780">raised</span> <span
  m="2479020">to</span> <span m="2479150">c.</span></p><p><span
  m="2481200">What</span> <span m="2481330">does</span> <span
  m="2481490">that</span> <span m="2481670">mean?</span> <span
  m="2485200">It</span> <span m="2485280">means</span> <span
  m="2486420">this</span> <span m="2486660">guy</span> <span
  m="2486820">here</span> <span m="2489110">is</span> <span
  m="2489260">sigma</span> <span m="2489585">a</span> <span
  m="2489910">raised</span> <span m="2490185">to n,</span> <span
  m="2490940">then</span> <span m="2492890">this</span> <span
  m="2493110">is</span> <span m="2493240">what's</span> <span
  m="2493410">in</span> <span m="2493520">my</span> <span m="2493690">f</span>
  <span m="2495270">raised to</span> <span m="2495710">c.</span> <span
  m="2497120">There</span> <span m="2497290">should</span> <span
  m="2497450">be</span> <span m="2497560">order,</span> <span
  m="2497900">here,</span> <span m="2498410">but</span> <span
  m="2498580">everything</span> <span m="2498970">has</span> <span
  m="2499110">order</span> <span m="2499540">before</span> <span
  m="2499880">it,</span> <span m="2500250">so</span> <span m="2500440">I</span>
  <span m="2500560">just</span> <span m="2500830">omit</span> <span
  m="2501860">that.</span> <span m="2502120">So</span> <span
  m="2502310">it</span> <span m="2502520">actually</span> <span
  m="2502860">should</span> <span m="2503020">be</span> <span
  m="2503120">this,</span> <span m="2503760">OK?</span></p><p><span
  m="2506310">So</span> <span m="2506610">this,</span> <span
  m="2509320">because</span> <span m="2509540">n</span> <span
  m="2509810">raised</span> <span m="2510050">to</span> <span
  m="2510140">c</span> <span m="2510460">is</span> <span
  m="2510590">actually</span> <span m="2510890">independent</span> <span
  m="2511430">of</span> <span m="2511560">the</span> <span
  m="2511680">sum,</span> <span m="2512620">I</span> <span
  m="2512740">can</span> <span m="2512890">pull</span> <span
  m="2513040">it</span> <span m="2513140">out.</span> <span
  m="2518300">And</span> <span m="2519720">what</span> <span m="2519920">am
  I</span> <span m="2520080">left</span> <span m="2520290">with?</span> <span
  m="2527940">Is</span> <span m="2528050">that</span> <span
  m="2528180">correct?</span> <span m="2531000">Now,</span> <span
  m="2531170">this</span> <span m="2531350">is</span> <span m="2531520">a</span>
  <span m="2531790">sum</span> <span m="2532360">of</span> <span
  m="2532940">geometric</span> <span m="2533450">sequence.</span></p><p><span
  m="2535190">We</span> <span m="2535220">know</span> <span
  m="2535410">how</span> <span m="2535550">to</span> <span
  m="2535640">solve</span> <span m="2535850">that,</span> <span
  m="2537120">but</span> <span m="2537320">we</span> <span
  m="2537480">need</span> <span m="2537650">to</span> <span
  m="2538180">check</span> <span m="2538530">whether</span> <span
  m="2538750">this</span> <span m="2538960">ratio</span> <span
  m="2539500">is</span> <span m="2539790">greater</span> <span
  m="2540210">or</span> <span m="2540470">larger</span> <span
  m="2540740">than</span> <span m="2540870">1,</span> <span
  m="2541210">or</span> <span m="2541390">if it's</span> <span
  m="2541550">equal</span> <span m="2541870">to</span> <span
  m="2541980">1.</span> <span m="2542760">And</span> <span
  m="2543150">what</span> <span m="2543280">is</span> <span
  m="2543420">this</span> <span m="2543590">ratio?</span> <span
  m="2545260">The</span> <span m="2545370">case</span> <span
  m="2545580">tells</span> <span m="2545790">us.</span> <span
  m="2546500">So</span> <span m="2546700">c</span> <span m="2547670">is</span>
  <span m="2547870">less</span> <span m="2548150">than</span> <span
  m="2548320">log</span> <span m="2548540">b</span> <span m="2548720">of</span>
  <span m="2548770">a.</span> <span m="2550160">That</span> <span
  m="2550430">means</span> <span m="2551710">b</span> <span
  m="2551960">raised</span> <span m="2552240">to</span> <span
  m="2552340">c</span> <span m="2553090">is</span> <span m="2553240">less</span>
  <span m="2553470">than</span> <span m="2553690">b</span> <span
  m="2554240">raised</span> <span m="2554450">to</span> <span
  m="2554520">this</span> <span m="2554740">guy,</span> <span
  m="2558270">which</span> <span m="2558470">is</span> <span
  m="2560630">a,</span> <span m="2560900">right?</span> <span
  m="2561830">So</span> <span m="2562030">we</span> <span
  m="2562150">know</span> <span m="2562960">our</span> <span
  m="2563390">denominator</span> <span m="2566380">is</span> <span
  m="2566500">smaller</span> <span m="2566820">than</span> <span
  m="2567020">or</span> <span m="2567110">numerator.</span></p><p><span
  m="2568150">So</span> <span m="2568600">this</span> <span
  m="2568780">is</span> <span m="2570080">an</span> <span
  m="2570210">increasing</span> <span m="2570610">sequence,</span> <span
  m="2571100">right?</span> <span m="2572470">So</span> <span
  m="2573070">what</span> <span m="2573200">we</span> <span
  m="2573320">have</span> <span m="2573730">is</span> <span m="2574060">n</span>
  <span m="2574390">raised</span> <span m="2574660">to</span> <span
  m="2574930">c,</span> <span m="2575770">then</span> <span
  m="2576730">that</span> <span m="2577040">thing</span> <span
  m="2579260">raised</span> <span m="2579820">to</span> <span
  m="2579890">t</span> <span m="2580750">minus</span> <span m="2581130">1</span>
  <span m="2581530">divided</span> <span m="2581980">by</span> <span
  m="2582560">this</span> <span m="2583380">thing</span> <span
  m="2583520">minus</span> <span m="2583820">1.</span> <span
  m="2584030">But</span> <span m="2584170">they</span> <span m="2584300">are
  all</span> <span m="2584490">constants.</span> <span m="2586151">Are</span>
  <span m="2586530">everyone</span> <span m="2586810">familiar</span> <span
  m="2587140">with</span> <span m="2588060">this</span> <span
  m="2588230">formula.</span> <span m="2589250">of</span> <span
  m="2589550">geometric</span> <span m="2590010">sequence?</span> <span
  m="2592350">OK,</span> <span m="2593150">so</span> <span
  m="2593460">that's</span> <span m="2593670">what</span> <span
  m="2593810">we</span> <span m="2593910">have.</span></p><p><span
  m="2598830">Next,</span> <span m="2600250">we</span> <span
  m="2600350">have</span> <span m="2600590">t</span> <span
  m="2601030">equals</span> <span m="2601460">log</span> <span
  m="2601710">b</span> <span m="2601890">of</span> <span m="2602000">n.</span>
  <span m="2603480">That</span> <span m="2603740">means</span> <span
  m="2605520">b</span> <span m="2606610">raised</span> <span
  m="2606920">to</span> <span m="2607030">t</span> <span m="2609980">is</span>
  <span m="2610200">n,</span> <span m="2611120">correct?</span> <span
  m="2613120">So,</span> <span m="2614200">then,</span> <span
  m="2614600">b</span> <span m="2614830">raised</span> <span
  m="2615040">to</span> <span m="2615140">t</span> <span m="2615320">is</span>
  <span m="2615440">n,</span> <span m="2615870">then</span> <span
  m="2616000">we</span> <span m="2616130">have</span> <span
  m="2616300">raised</span> <span m="2616560">to</span> <span
  m="2616660">c,</span> <span m="2617770">they</span> <span
  m="2617910">cancel</span> <span m="2618630">out.</span> <span m="2619610">What
  do</span> <span m="2619750">we</span> <span m="2619900">have?</span> <span
  m="2621980">I</span> <span m="2622435">want to</span> <span
  m="2622890">make</span> <span m="2623140">sure</span> <span
  m="2623270">everyone's</span> <span m="2623630">following.</span></p><p><span
  m="2632146">AUDIENCE: is it a over t?</span></p><p><span m="2633590">LING REN:
  A</span> <span m="2634190">raised</span> <span m="2634570">to</span> <span
  m="2634860">t.</span> <span m="2639730">No</span> <span
  m="2639820">questions?</span></p><p><span m="2640650">AUDIENCE: Can you</span>
  <span m="2641130">do that</span> <span m="2641610">stuff</span> <span
  m="2642090">again?</span></p><p><span m="2642570">LING REN: OK,</span> <span
  m="2643160">let</span> <span m="2643230">me</span> <span m="2643300">do</span>
  <span m="2643390">that</span> <span m="2643570">again.</span> <span
  m="2645990">It's</span> <span m="2646170">actually</span> <span
  m="2646570">a</span> <span m="2646690">raised</span> <span m="2646840">to
  t,</span> <span m="2647890">and</span> <span m="2648100">then</span> <span
  m="2649340">n</span> <span m="2650260">over</span> <span m="2650670">bt</span>
  <span m="2652210">raised</span> <span m="2652330">to</span> <span
  m="2652450">c,</span> <span m="2652770">right?</span></p><p><span
  m="2654116">AUDIENCE: How</span> <span m="2654572">did you</span> <span
  m="2655028">get from the</span> <span m="2655484">line above
  that?</span></p><p><span m="2655940">LING REN: This</span> <span
  m="2656400">one</span> <span m="2656770">to</span> <span
  m="2656900">here?</span></p><p><span m="2657190">AUDIENCE:
  Yeah.</span></p><p><span m="2657610">LING REN: Oh,</span> <span
  m="2657790">it's</span> <span m="2658540">the</span> <span
  m="2658810">sum</span> <span m="2659090">of</span> <span
  m="2659190">geometric</span> <span m="2659680">sequence,</span> <span
  m="2660100">so</span> <span m="2660200">if</span> <span m="2660380">I</span>
  <span m="2660490">have</span> <span m="2660800">1</span> <span
  m="2661080">plus</span> <span m="2661430">q</span> <span
  m="2661830">plus</span> <span m="2662110">q</span> <span
  m="2662340">squared,</span> <span m="2664160">all</span> <span
  m="2664320">the</span> <span m="2664400">way</span> <span
  m="2664520">to</span> <span m="2664660">qt,</span> <span
  m="2665620">it's</span> <span m="2666700">qt</span> <span
  m="2667900">plus</span> <span m="2668270">1,</span> <span m="2668660">I</span>
  <span m="2668730">guess--</span> <span m="2669040">or</span> <span
  m="2669350">t,</span> <span m="2669520">I</span> <span
  m="2669870">don't</span> <span m="2670020">remember</span> <span
  m="2670410">very well--</span> <span m="2671100">minus</span> <span
  m="2671440">1,</span> <span m="2671780">then</span> <span m="2672120">q</span>
  <span m="2672490">minus</span> <span m="2672830">1.</span> <span
  m="2675530">I</span> <span m="2675630">guess</span> <span
  m="2675850">this</span> <span m="2675920">should</span> <span
  m="2676110">be</span> <span m="2676240">t</span> <span m="2676370">plus</span>
  <span m="2676600">1.</span></p><p><span m="2678620">So</span> <span
  m="2678780">this</span> <span m="2678940">is</span> <span
  m="2678980">what</span> <span m="2679330">we're</span> <span
  m="2679570">doing.</span> <span m="2680050">So</span> <span
  m="2680340">this</span> <span m="2680560">is</span> <span
  m="2680710">our</span> <span m="2680880">q</span> <span
  m="2681820">minus</span> <span m="2682290">1,</span> <span
  m="2682740">and</span> <span m="2682920">divided</span> <span
  m="2683260">by</span> <span m="2683380">q</span> <span
  m="2683560">minus</span> <span m="2683810">1,</span> <span
  m="2684020">they</span> <span m="2684180">are</span> <span
  m="2684210">all</span> <span m="2684330">constants,</span> <span
  m="2684920">so</span> <span m="2684980">I</span> <span
  m="2685070">don't</span> <span m="2685220">care</span> <span
  m="2685370">about</span> <span m="2685540">them.</span> <span
  m="2688820">So</span> <span m="2689080">a</span> <span
  m="2689340">raised</span> <span m="2691100">plus</span> <span m="2691455">this
  thing</span> <span m="2691810">raised</span> <span m="2691930">to</span> <span
  m="2692050">c,</span> <span m="2692430">but</span> <span m="2692570">we</span>
  <span m="2692700">said</span> <span m="2692990">that</span> <span
  m="2694040">b</span> <span m="2694170">raised</span> <span
  m="2694350">to</span> <span m="2694440">t</span> <span m="2694600">is</span>
  <span m="2694700">equal</span> <span m="2694960">to</span> <span
  m="2695130">n,</span> <span m="2696190">so</span> <span
  m="2697360">we're</span> <span m="2697510">just</span> <span
  m="2697710">left</span> <span m="2697930">with</span> <span
  m="2698350">a</span> <span m="2698550">raised</span> <span m="2698840">to
  t.</span></p><p><span m="2701710">And</span> <span m="2704010">what</span>
  <span m="2704160">is</span> <span m="2704390">t?</span> <span
  m="2706700">t</span> <span m="2706990">is</span> <span m="2707220">log</span>
  <span m="2707550">b</span> <span m="2707760">of</span> <span
  m="2707890">n.</span> <span m="2709820">I</span> <span m="2709910">can</span>
  <span m="2710140">write</span> <span m="2710340">it</span> <span
  m="2710490">as</span> <span m="2711822">log</span> <span m="2712260">a</span>
  <span m="2712490">of n</span> <span m="2713430">over</span> <span
  m="2714550">log</span> <span m="2714910">a</span> <span m="2715090">of</span>
  <span m="2716030">b.</span> <span m="2717820">Everyone</span> <span
  m="2718110">familiar</span> <span m="2718340">with</span> <span
  m="2718490">that?</span> <span m="2720260">That</span> <span
  m="2720490">means</span> <span m="2721810">log</span> <span
  m="2722240">a</span> <span m="2722450">of</span> <span m="2722610">n,</span>
  <span m="2723880">log</span> <span m="2724990">b</span> <span
  m="2725110">of</span> <span m="2725240">a.</span> <span m="2727390">This
  is</span> <span m="2727550">when I</span> <span m="2727820">flip</span> <span
  m="2728050">them.</span> <span m="2731660">So</span> <span
  m="2731910">this,</span> <span m="2733300">what</span> <span
  m="2733430">is</span> <span m="2733550">that?</span></p><p><span
  m="2736430">AUDIENCE: n.</span></p><p><span m="2737800">LING REN: That</span>
  <span m="2737950">is</span> <span m="2738090">n.</span> <span
  m="2742930">OK,</span> <span m="2743890">we're</span> <span
  m="2743990">done.</span> <span m="2747190">Are</span> <span
  m="2747675">we?</span> <span m="2758840">Not</span> <span
  m="2758990">exactly,</span> <span m="2759970">because</span> <span
  m="2760300">I</span> <span m="2760430">have</span> <span m="2760680">an</span>
  <span m="2760880">order</span> <span m="2761220">here,</span> <span
  m="2761610">right?</span> <span m="2761820">So</span> <span
  m="2761930">everything</span> <span m="2762450">is</span> <span
  m="2762590">ordered.</span> <span m="2764260">If</span> <span
  m="2764380">you</span> <span m="2764510">only</span> <span
  m="2764720">care</span> <span m="2764880">about</span> <span
  m="2765110">order,</span> <span m="2765950">big</span> <span
  m="2766280">O,</span> <span m="2766840">then</span> <span
  m="2767070">it's</span> <span m="2767200">fine.</span> <span
  m="2767620">But</span> <span m="2767910">that</span> <span
  m="2768160">theorem</span> <span m="2768470">says</span> <span
  m="2768680">theta,</span> <span m="2769590">so</span> <span
  m="2769740">you</span> <span m="2769840">have</span> <span
  m="2769990">to</span> <span m="2770110">prove</span> <span
  m="2770340">it</span> <span m="2770450">the</span> <span
  m="2770550">other</span> <span m="2770720">way,</span> <span
  m="2770990">that</span> <span m="2771200">it's</span> <span
  m="2771490">no</span> <span m="2771700">less</span> <span
  m="2771970">than</span> <span m="2772110">that.</span></p><p><span
  m="2773300">I'm</span> <span m="2773410">not</span> <span
  m="2773570">going</span> <span m="2773720">to</span> <span
  m="2773800">do</span> <span m="2773930">that.</span> <span
  m="2774160">It's</span> <span m="2775070">not</span> <span
  m="2775220">very</span> <span m="2775390">hard.</span> <span
  m="2776970">Next,</span> <span m="2777280">I'm</span> <span
  m="2777390">going</span> <span m="2777590">to</span> <span
  m="2777700">apply</span> <span m="2778030">this</span> <span
  m="2778240">theorem</span> <span m="2778930">to</span> <span
  m="2779800">the</span> <span m="2779930">two</span> <span
  m="2780970">problems</span> <span m="2781530">we</span> <span
  m="2781640">left</span> <span m="2781890">here.</span> <span
  m="2783780">So</span> <span m="2786240">let's</span> <span
  m="2786450">apply</span> <span m="2786840">Master</span> <span
  m="2787140">Theorem</span> <span m="2787530">to</span> <span
  m="2788720">this</span> <span m="2788950">recurrence.</span> <span
  m="2789570">I think</span> <span m="2789935">you are</span> <span
  m="2790300">still</span> <span m="2790610">looking</span> <span
  m="2790840">at</span> <span m="2790990">that</span> <span
  m="2791140">side.</span></p><p><span m="2795970">So</span> <span
  m="2796820">what</span> <span m="2796970">is</span> <span
  m="2797160">the</span> <span m="2797580">a, b,</span> <span
  m="2798000">c</span> <span m="2798840">for</span> <span
  m="2798970">this?</span> <span m="2804180">a</span> <span
  m="2804490">is</span> <span m="2804775">8,</span> <span m="2805430">b
  is</span> <span m="2805740">2,</span> <span m="2806300">right?</span> <span
  m="2807700">And</span> <span m="2807930">c</span> <span m="2808410">is</span>
  <span m="2810210">2.</span> <span m="2813150">Log</span> <span
  m="2813640">b</span> <span m="2813950">of a</span> <span m="2814930">is</span>
  <span m="2815260">3,</span> <span m="2817200">so</span> <span
  m="2817320">that's</span> <span m="2818390">which</span> <span
  m="2818620">case</span> <span m="2819110">of</span> <span
  m="2819260">the</span> <span m="2819340">Master</span> <span
  m="2819450">Theorem?</span> <span m="2823910">So</span> <span
  m="2824240">the</span> <span m="2824380">theorem</span> <span
  m="2824740">says</span> <span m="2825030">it</span> <span
  m="2825160">should</span> <span m="2825360">be</span> <span
  m="2825700">n</span> <span m="2826050">raised</span> <span
  m="2826410">to</span> <span m="2827175">log</span> <span m="2827510">b</span>
  <span m="2827660">of</span> <span m="2827800">a,</span> <span
  m="2828660">which</span> <span m="2828840">is</span> <span
  m="2828990">3,</span> <span m="2830200">OK?</span></p><p><span
  m="2833550">Now,</span> <span m="2834890">what</span> <span
  m="2835030">we</span> <span m="2835180">have</span> <span
  m="2835360">here,</span> <span m="2839230">can</span> <span
  m="2839840">I</span> <span m="2839910">remind</span> <span
  m="2840160">someone</span> <span m="2840530">to</span> <span
  m="2840610">do</span> <span m="2840720">that</span> <span m="2840880">for
  me?</span> <span m="2847029">Want</span> <span m="2847510">to</span> <span
  m="2847680">give</span> <span m="2847800">it</span> <span m="2847890">a</span>
  <span m="2847930">try?</span> <span m="2854860">Go</span> <span
  m="2855345">ahead.</span></p><p><span m="2857300">AUDIENCE: OK,</span> <span
  m="2857730">so we</span> <span m="2858189">have</span> <span
  m="2860025">a</span> <span m="2860484">equals 7,</span> <span
  m="2862320">b</span> <span m="2862779">equals</span> <span
  m="2863240">2,</span> <span m="2865660">and</span> <span m="2866050">c</span>
  <span m="2866355">equals</span> <span m="2866660">2,</span> <span
  m="2867030">like</span> <span m="2867240">before.</span> <span
  m="2869300">And,</span> <span m="2869640">now,</span> <span
  m="2870010">we</span> <span m="2870140">want</span> <span
  m="2870360">to</span> <span m="2870450">see</span> <span
  m="2870820">whether</span> <span m="2872372">c</span> <span
  m="2872863">equals</span> <span m="2873354">2</span> <span
  m="2873845">is</span> <span m="2874336">less than</span> <span
  m="2876300">log</span> <span m="2876791">b</span> <span m="2877282">of</span>
  <span m="2878760">a,</span> <span m="2879320">which</span> <span
  m="2879736">is log</span> <span m="2880152">2 of</span> <span
  m="2880570">7.</span> <span m="2886396">Pretty</span> <span m="2886890">sure
  that's</span> <span m="2886990">still</span> <span m="2887200">the</span>
  <span m="2887510">case.</span> <span m="2888140">So</span> <span
  m="2889590">we</span> <span m="2889780">should</span> <span
  m="2889990">just</span> <span m="2890200">get</span> <span
  m="2890450">n</span> <span m="2890908">to the</span> <span
  m="2891824">log</span> <span m="2892282">2 of</span> <span
  m="2892740">7.</span></p><p><span m="2893660">LING REN: Yeah,</span> <span
  m="2893950">exactly.</span> <span m="2895180">So,</span> <span
  m="2895720">yeah.</span> <span m="2896720">Yeah,</span> <span
  m="2897090">thank</span> <span m="2897240">you.</span> <span
  m="2897390">let's</span> <span m="2897620">give him</span> <span
  m="2897970">a</span> <span m="2898120">round</span> <span
  m="2898220">of</span> <span m="2898320">applause.</span> <span
  m="2902640">So</span> <span m="2903080">log</span> <span m="2903820">2</span>
  <span m="2903970">of</span> <span m="2904070">7</span> <span
  m="2905280">is</span> <span m="2905450">definitely</span> <span
  m="2905800">greater</span> <span m="2906030">than</span> <span
  m="2906180">2.</span> <span m="2906480">Why?</span> <span
  m="2907070">Because</span> <span m="2907430">log</span> <span
  m="2907660">2</span> <span m="2908085">of 4</span> <span m="2908840">is</span>
  <span m="2909030">2,</span> <span m="2909220">right?</span> <span
  m="2909880">So</span> <span m="2910390">this</span> <span
  m="2910640">happens</span> <span m="2911010">to</span> <span
  m="2911120">be</span> <span m="2911700">n</span> <span
  m="2912200">raised</span> <span m="2912550">to</span> <span
  m="2913320">2.80,</span> <span m="2915860">and</span> <span
  m="2916800">many</span> <span m="2917090">other</span> <span
  m="2917220">digits,</span> <span m="2918030">but</span> <span
  m="2918180">it's</span> <span m="2918760">less</span> <span
  m="2919010">than</span> <span m="2919800">n</span> <span
  m="2920010">cubic.</span></p><p><span m="2922450">And,</span> <span
  m="2923510">just</span> <span m="2923930">for</span> <span
  m="2924180">knowledge</span> <span m="2924570">purpose,</span> <span
  m="2925930">this</span> <span m="2926090">is</span> <span
  m="2926510">no</span> <span m="2926660">longer</span> <span
  m="2926950">the</span> <span m="2927050">best.</span> <span
  m="2928200">It</span> <span m="2928390">was</span> <span
  m="2928590">the</span> <span m="2928680">best,</span> <span
  m="2928970">when</span> <span m="2929160">it</span> <span
  m="2929240">was</span> <span m="2929390">proposed,</span> <span
  m="2930300">and,</span> <span m="2930970">well,</span> <span
  m="2931860">researchers</span> <span m="2932340">in</span> <span
  m="2932450">that</span> <span m="2932640">area</span> <span
  m="2932970">have</span> <span m="2933180">got</span> <span
  m="2933450">it</span> <span m="2933660">down</span> <span
  m="2933970">to</span> <span m="2934180">n</span> <span
  m="2934340">raised</span> <span m="2934610">to</span> <span
  m="2934950">2.35.</span> <span m="2936590">I</span> <span
  m="2936660">think</span> <span m="2936840">2.37,</span> <span
  m="2937740">first,</span> <span m="2938260">then</span> <span
  m="2938490">2.35.</span> <span m="2940180">I'm</span> <span
  m="2940340">not</span> <span m="2940740">following</span> <span
  m="2940820">the</span> <span m="2940930">literature</span> <span
  m="2941140">very</span> <span m="2941320">closely,</span> <span
  m="2941570">so</span> <span m="2941840">maybe</span> <span
  m="2942120">it's</span> <span m="2942320">2.34</span> <span
  m="2942970">now.</span></p><p><span m="2946010">So</span> <span
  m="2946470">I</span> <span m="2946660">should</span> <span
  m="2946890">have</span> <span m="2947140">one</span> <span
  m="2947360">more</span> <span m="2947490">thing</span> <span
  m="2947680">to</span> <span m="2948390">cover,</span> <span
  m="2948740">but</span> <span m="2949140">I</span> <span
  m="2949260">think</span> <span m="2949470">we are</span> <span
  m="2949720">running out</span> <span m="2949780">of</span> <span
  m="2949990">time.</span> <span m="2950200">Sorry</span> <span
  m="2950410">about</span> <span m="2950570">that.</span> <span
  m="2951340">I</span> <span m="2951450">can</span> <span m="2951740">post
  it.</span> <span m="2952490">So</span> <span m="2952890">the</span> <span
  m="2952970">last</span> <span m="2953300">thing</span> <span
  m="2953760">we</span> <span m="2954110">should</span> <span
  m="2954410">do</span> <span m="2955240">is,</span> <span
  m="2955530">remember,</span> <span m="2955910">we</span> <span
  m="2956010">have</span> <span m="2956200">this</span> <span
  m="2956360">medium</span> <span m="2956660">finding</span> <span
  m="2956990">algorithm,</span> <span m="2957490">where</span> <span
  m="2957780">we</span> <span m="2957890">have</span> <span m="2958090">a</span>
  <span m="2958160">recurrence,</span> <span m="2960090">which</span> <span
  m="2960360">is,</span> <span m="2961490">I</span> <span
  m="2961590">think,</span> <span m="2962260">10</span> <span
  m="2962640">over</span> <span m="2962950">5,</span> <span
  m="2964280">some</span> <span m="2965300">ceiling,</span> <span
  m="2965970">and</span> <span m="2966120">then</span> <span
  m="2966340">plus</span> <span m="2969010">this</span> <span
  m="2970240">[INAUDIBLE]</span> <span m="2970470">n</span> <span
  m="2971626">plus</span> <span m="2972180">theta</span> <span
  m="2972530">n.</span></p><p><span m="2973760">And</span> <span
  m="2975970">we</span> <span m="2976050">want</span> <span
  m="2976220">to</span> <span m="2976300">solve</span> <span
  m="2976570">this</span> <span m="2976720">recursion,</span> <span
  m="2978780">but</span> <span m="2979280">we</span> <span
  m="2979390">cannot</span> <span m="2979680">apply</span> <span
  m="2979930">Master</span> <span m="2980280">Theorem.</span> <span
  m="2981180">Apparently,</span> <span m="2981300">it's</span> <span
  m="2981430">not</span> <span m="2981570">the</span> <span
  m="2981620">right</span> <span m="2981820">form.</span> <span
  m="2983430">So</span> <span m="2983720">when</span> <span
  m="2984010">Master</span> <span m="2984300">Theorem</span> <span
  m="2984640">doesn't</span> <span m="2984890">apply,</span> <span
  m="2985340">we have</span> <span m="2985510">to</span> <span
  m="2985680">study</span> <span m="2985970">it</span> <span
  m="2986110">case</span> <span m="2986340">by</span> <span
  m="2986450">case.</span> <span m="2987470">Let me</span> <span
  m="2987550">see</span> <span m="2987740">if I</span> <span
  m="2988160">have</span> <span m="2988280">time</span> <span
  m="2988490">to</span> <span m="2988570">do</span> <span
  m="2988700">that.</span> <span m="2994970">OK,</span> <span
  m="2995090">I</span> <span m="2995220">think</span> <span m="2995390">I</span>
  <span m="2995430">probably</span> <span m="2995930">do.</span></p><p><span
  m="3001640">To</span> <span m="3001740">solve</span> <span
  m="3001970">that</span> <span m="3002160">case,</span> <span
  m="3003160">first,</span> <span m="3003590">can</span> <span
  m="3003800">someone</span> <span m="3004180">tell</span> <span
  m="3004340">me,</span> <span m="3004720">what's</span> <span
  m="3004950">the</span> <span m="3005030">definition</span> <span
  m="3005570">of</span> <span m="3005720">theta?</span> <span
  m="3006180">We</span> <span m="3006260">have</span> <span
  m="3006410">to</span> <span m="3006530">go</span> <span
  m="3006660">back</span> <span m="3006860">to</span> <span
  m="3006950">the</span> <span m="3007010">definition</span> <span
  m="3008110">to</span> <span m="3008300">solve</span> <span
  m="3008450">that.</span> <span m="3011180">What</span> <span
  m="3011320">does</span> <span m="3011590">theta</span> <span
  m="3012110">even</span> <span m="3012340">mean?</span> <span
  m="3012720">So</span> <span m="3013410">if</span> <span m="3013740">I</span>
  <span m="3013860">say</span> <span m="3014140">fn</span> <span
  m="3015240">is</span> <span m="3015640">theta</span> <span
  m="3015990">n,</span> <span m="3017300">what</span> <span
  m="3017450">do</span> <span m="3017570">I</span> <span
  m="3017660">really</span> <span m="3017890">mean?</span> <span
  m="3021764">Go</span> <span m="3022220">ahead.</span></p><p><span
  m="3022490">AUDIENCE: It's</span> <span m="3022984">tightly</span> <span
  m="3023478">bounded,</span> <span m="3023972">so</span> <span m="3024960">you
  can</span> <span m="3025454">move the</span> <span
  m="3025948">[INAUDIBLE]</span> <span m="3026442">to either</span> <span
  m="3026936">side.</span></p><p><span m="3027930">LING REN: So</span> <span
  m="3028340">it</span> <span m="3028470">means</span> <span
  m="3029050">I</span> <span m="3029200">can</span> <span
  m="3029430">find</span> <span m="3030590">some</span> <span
  m="3030930">K1</span> <span m="3031490">and</span> <span m="3031840">K2</span>
  <span m="3033140">such</span> <span m="3033470">that</span> <span
  m="3034050">this</span> <span m="3034360">holds</span> <span
  m="3035320">when</span> <span m="3035570">n</span> <span
  m="3035760">gets</span> <span m="3037140">sufficiently</span> <span
  m="3037720">large.</span> <span m="3038680">OK,</span> <span
  m="3039550">so,</span> <span m="3039780">now,</span> <span
  m="3040070">we're</span> <span m="3040240">going</span> <span
  m="3040430">to</span> <span m="3040510">do</span> <span
  m="3040680">induction.</span> <span m="3049490">Assuming,</span> <span
  m="3050030">for</span> <span m="3050590">all</span> <span
  m="3050820">the</span> <span m="3051390">small</span> <span
  m="3051820">n</span> <span m="3052590">less</span> <span
  m="3052840">than</span> <span m="3053090">capital</span> <span
  m="3053450">N,</span> <span m="3055530">my</span> <span m="3055840">Tn</span>
  <span m="3057490">is</span> <span m="3057740">bounded</span> <span
  m="3058180">by</span> <span m="3058340">this</span> <span
  m="3058590">K2</span> <span m="3059410">and</span> <span m="3059620">K1</span>
  <span m="3060030">thing.</span></p><p><span m="3063360">Then,</span> <span
  m="3065110">my</span> <span m="3065300">next</span> <span
  m="3065570">step</span> <span m="3066300">is,</span> <span m="3066700">T
  of</span> <span m="3066840">this</span> <span m="3067010">capital</span> <span
  m="3067360">N</span> <span m="3068720">would</span> <span
  m="3068950">be</span> <span m="3069760">bounded.</span> <span
  m="3070660">I'll</span> <span m="3070880">do</span> <span
  m="3071110">the</span> <span m="3071760">right</span> <span
  m="3071990">side</span> <span m="3072220">first.</span> <span
  m="3072885">It</span> <span m="3073160">will</span> <span
  m="3073280">be</span> <span m="3073390">bounded</span> <span
  m="3073840">by</span> <span m="3074510">K2</span> <span m="3076280">n5</span>
  <span m="3078180">ceiling,</span> <span m="3080910">plus</span> <span
  m="3085910">K2.</span> <span m="3088220">[INAUDIBLE]</span> <span
  m="3090120">in</span> <span m="3090410">a</span> <span
  m="3090470">second</span> <span m="3090800">term,</span> <span
  m="3091640">n</span> <span m="3091820">plus</span> <span
  m="3092340">another</span> <span m="3092640">theta</span> <span
  m="3092950">n.</span></p><p><span m="3093740">So,</span> <span
  m="3093910">we</span> <span m="3094030">know,</span> <span
  m="3094550">that</span> <span m="3094820">means</span> <span
  m="3095220">it's</span> <span m="3095430">bounded</span> <span
  m="3095880">by</span> <span m="3096090">some</span> <span
  m="3096320">other</span> <span m="3096510">number.</span> <span
  m="3096860">I'll</span> <span m="3097090">say</span> <span
  m="3097450">A2,</span> <span m="3097780">then.</span> <span
  m="3099110">That's</span> <span m="3099300">the</span> <span
  m="3099390">definition</span> <span m="3099820">of</span> <span
  m="3099910">theta</span> <span m="3100300">n.</span> <span
  m="3101910">Then,</span> <span m="3104470">I</span> <span
  m="3104720">want</span> <span m="3104990">this</span> <span
  m="3105340">to</span> <span m="3105470">be--</span> <span
  m="3106260">sorry,</span> <span m="3106550">all</span> <span
  m="3106700">of</span> <span m="3106820">them</span> <span
  m="3106950">should</span> <span m="3107110">be</span> <span
  m="3107240">capital</span> <span m="3107590">N.</span> <span
  m="3108310">Capital N,</span> <span m="3109360">Capital</span> <span
  m="3109665">N.</span> <span m="3110840">I</span> <span m="3110950">want</span>
  <span m="3111220">this</span> <span m="3111510">to</span> <span
  m="3111660">be</span> <span m="3111880">smaller</span> <span
  m="3112340">than</span> <span m="3113140">K2</span> <span
  m="3114450">capital</span> <span m="3114800">N.</span></p><p><span
  m="3121140">So</span> <span m="3121780">let</span> <span m="3121910">me</span>
  <span m="3122140">redo</span> <span m="3122280">this</span> <span
  m="3122530">first</span> <span m="3122740">step.</span> <span
  m="3123120">This</span> <span m="3123300">is</span> <span
  m="3123450">roughly</span> <span m="3127010">5</span> <span
  m="3127450">of</span> <span m="3127590">K2</span> <span
  m="3128490">plus</span> <span m="3130290">7</span> <span
  m="3130930">over</span> <span m="3131010">10</span> <span
  m="3131300">K2,</span> <span m="3132950">plus</span> <span
  m="3134110">A2</span> <span m="3134880">of</span> <span m="3135010">n,</span>
  <span m="3135930">plus</span> <span m="3136110">a</span> <span
  m="3136180">bunch</span> <span m="3136410">of</span> <span
  m="3136510">constants</span> <span m="3137360">that</span> <span
  m="3137510">I</span> <span m="3137590">don't</span> <span
  m="3137760">care.</span> <span m="3138910">I</span> <span m="3139030">want
  it</span> <span m="3139390">to</span> <span m="3139470">be</span> <span
  m="3139620">smaller</span> <span m="3140070">than</span> <span
  m="3140530">K2</span> <span m="3141010">of</span> <span
  m="3141483">n.</span></p><p><span m="3144321">Can</span> <span
  m="3144800">I</span> <span m="3144880">reach</span> <span
  m="3145050">that?</span> <span m="3145640">Of</span> <span
  m="3145760">course</span> <span m="3145950">I</span> <span
  m="3146030">can,</span> <span m="3146430">right?</span> <span
  m="3147050">If</span> <span m="3147220">I</span> <span
  m="3147490">select</span> <span m="3147990">a</span> <span
  m="3148240">K2</span> <span m="3148985">to</span> <span m="3149360">be</span>
  <span m="3149550">greater</span> <span m="3150240">than</span> <span
  m="3150510">all</span> <span m="3150680">we</span> <span
  m="3150760">have</span> <span m="3150930">here,</span> <span
  m="3152140">what</span> <span m="3152320">is</span> <span
  m="3152450">this?</span> <span m="3153030">This</span> <span
  m="3153430">is</span> <span m="3154160">9</span> <span m="3154390">over</span>
  <span m="3154620">10</span> <span m="3157200">K2</span> <span
  m="3157950">plus</span> <span m="3158360">A2,</span> <span
  m="3159360">right?</span> <span m="3160930">So</span> <span
  m="3161260">if</span> <span m="3161450">I</span> <span
  m="3161570">select</span> <span m="3162030">the</span> <span
  m="3162300">K2</span> <span m="3162660">to</span> <span m="3162950">be</span>
  <span m="3163110">greater</span> <span m="3163490">than</span> <span
  m="3166970">10</span> <span m="3167280">times</span> <span
  m="3167800">A2--</span> <span m="3170986">is</span> <span
  m="3171430">everyone</span> <span m="3171510">following</span> <span
  m="3171820">that?</span> <span m="3173160">When</span> <span
  m="3173530">n</span> <span m="3173860">is</span> <span
  m="3174010">sufficiently</span> <span m="3174590">large,</span> <span
  m="3175720">Tn</span> <span m="3176220">should</span> <span
  m="3176410">be</span> <span m="3176890">bounded</span> <span
  m="3177320">by</span> <span m="3178280">A2</span> <span m="3178760">n.</span>
  <span m="3181700">That's</span> <span m="3181890">the</span> <span
  m="3182010">induction.</span></p><p><span m="3184890">I am</span> <span
  m="3185140">assuming,</span> <span m="3185700">when</span> <span
  m="3185910">n</span> <span m="3186180">is</span> <span
  m="3186300">smaller</span> <span m="3186660">than</span> <span
  m="3187510">capital</span> <span m="3187890">N,</span> <span
  m="3188110">I</span> <span m="3188180">have</span> <span
  m="3188340">solved</span> <span m="3188610">them.</span> <span
  m="3189030">So</span> <span m="3189200">I</span> <span m="3189320">can</span>
  <span m="3189530">use</span> <span m="3189740">these</span> <span
  m="3189930">two,</span> <span m="3190800">and</span> <span
  m="3191160">I</span> <span m="3191260">solve</span> <span
  m="3191430">the</span> <span m="3191510">next</span> <span
  m="3191700">step.</span> <span m="3193030">So</span> <span
  m="3193110">there's</span> <span m="3193360">the</span> <span
  m="3193470">other</span> <span m="3193660">side,</span> <span
  m="3194200">which</span> <span m="3194470">is</span> <span
  m="3194570">very</span> <span m="3194780">similar.</span> <span
  m="3195400">I'm</span> <span m="3195450">not</span> <span
  m="3195620">going</span> <span m="3195780">to</span> <span
  m="3195950">go</span> <span m="3196090">through</span> <span
  m="3196240">that.</span></p><p><span m="3198640">All</span> <span
  m="3198720">right,</span> <span m="3199680">so</span> <span
  m="3201180">that's</span> <span m="3201640">all</span> <span
  m="3201820">for</span> <span m="3201950">today.</span> <span
  m="3202760">And</span> <span m="3203410">just</span> <span
  m="3203610">to</span> <span m="3203780">quickly</span> <span
  m="3204070">recap,</span> <span m="3204530">we</span> <span
  m="3205070">went</span> <span m="3205320">through</span> <span
  m="3206680">the</span> <span m="3208760">weighted</span> <span
  m="3208930">interval</span> <span m="3209260">scheduling,</span> <span
  m="3210450">and</span> <span m="3210760">the</span> <span
  m="3210820">Strassen</span> <span m="3211200">algorithm,</span> <span
  m="3211590">Master</span> <span m="3212180">Theorem</span> <span
  m="3212640">and</span> <span m="3212800">applying</span> <span
  m="3213240">Master</span> <span m="3213510">Theorem,</span> <span
  m="3214410">and</span> <span m="3214700">that</span> <span
  m="3215340">case</span> <span m="3215550">study</span> <span
  m="3216010">of</span> <span m="3216160">a</span> <span m="3216390">new</span>
  <span m="3216550">recursion.</span> <span m="3219350">OK,</span> <span
  m="3220050">thanks,</span> <span m="3220260">everyone,</span> <span
  m="3220550">for</span> <span m="3220660">coming.</span></p>
embedded_media:
  - uid: 419c81e494351a24a0cc8c4121c202ec
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 09vU-wVwW3U
  - uid: 3f04355f4818b608a6fda214fa1c07a7
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/09vU-wVwW3U/default.jpg'
  - uid: c65996d20849000ec53e59e30501704d
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 09vU-wVwW3U
  - uid: 7f7e30e9b7dfd3fbd09dba4edfa98719
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: 09vU-wVwW3U.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-1-divide-conquer-smarter-interval-scheduling-master-theorem-strassens-algorithm/09vU-wVwW3U.srt
  - uid: e476c627f9e1b70a400494b13702e59d
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: 09vU-wVwW3U.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-1-divide-conquer-smarter-interval-scheduling-master-theorem-strassens-algorithm/09vU-wVwW3U.pdf
  - uid: 75e38b2d98428a1cf555ca118c0fa155
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: cb42ad5832c466732cb1ebeecd312616
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: dbc241630daf27bbdcf4aa04368856fb
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: 0f32fe8c1c9dd97a27efb1ffb48298b1
    parent_uid: de6daa14b4c7ffd3995f0ca7df7b5a9b
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec01_300k.mp4'
type: courses
layout: video
---
