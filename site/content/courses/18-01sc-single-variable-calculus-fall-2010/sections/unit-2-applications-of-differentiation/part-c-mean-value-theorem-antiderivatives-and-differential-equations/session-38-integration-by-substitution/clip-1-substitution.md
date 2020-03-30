---
title: 'Clip 1: Substitution'
uid: 6f2769cc535a36e90aba3dc0e7ff31ba
parent_uid: def23901ebbad92ea90a23199cbba444
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-c-mean-value-theorem-antiderivatives-and-differential-equations/session-38-integration-by-substitution/clip-1-substitution
short_url: clip-1-substitution
inline_embed_id: '85531534clip1:substitution8277202'
about_this_resource_text: >-
  <p>&raquo; <a target="_blank"
  href="./resolveuid/4ae5ff13fdcb547a5b8e184f69f83043">Accompanying Notes
  (PDF)</a></p> <p class="scholar_medsm">From Lecture 15 of <a
  href="http://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/"><em>18.01
  Single Variable Calculus, Fall 2006</em></a></p>
related_resources_text: ''
transcript: >-
  <p><span m="120">The</span> <span m="370">following</span> <span
  m="540">content</span> <span m="1270">is</span> <span m="1420">provided</span>
  <span m="1680">under a</span> <span m="1870">Creative</span> <span
  m="2330">Commons</span> <span m="2730">license.</span> <span
  m="3610">Your</span> <span m="3800">support</span> <span m="4330">will</span>
  <span m="4450">help</span> <span m="4730">MIT</span> <span
  m="5190">OpenCourseWare</span> <span m="6110">continue</span> <span
  m="6320">to</span> <span m="6520">offer</span> <span m="6900">high</span>
  <span m="7130">quality</span> <span m="7620">educational</span> <span
  m="8250">resources</span> <span m="8870">for</span> <span
  m="8980">free.</span> <span m="9950">To make</span> <span m="10250">a</span>
  <span m="10310">donation,</span> <span m="11070">or to</span> <span
  m="11240">view</span> <span m="11550">additional</span> <span
  m="11980">materials</span> <span m="12540">from hundreds of</span> <span
  m="13070">MIT</span> <span m="13300">courses,</span> <span
  m="13600">visit</span> <span m="14060">MIT</span> <span
  m="15610">OpenCourseWare</span> <span m="16160">at</span> <span
  m="16560">ocw.mit.edu.</span></p><p><span m="22530">PROFESSOR: Today</span>
  <span m="22790">we're</span> <span m="22950">moving</span> <span
  m="23270">on</span> <span m="23520">from</span> <span
  m="24100">theoretical</span> <span m="24690">things,</span> <span
  m="24970">from</span> <span m="25120">the</span> <span m="25200">mean</span>
  <span m="25420">value</span> <span m="25980">theorem,</span> <span
  m="26900">to</span> <span m="28610">the</span> <span
  m="28840">introduction</span> <span m="29480">to</span> <span
  m="30300">what's</span> <span m="30570">going to</span> <span m="30760">occupy
  us</span> <span m="31430">for</span> <span m="31700">the</span> <span
  m="32030">whole</span> <span m="32220">rest</span> <span m="32460">of</span>
  <span m="32540">the</span> <span m="32620">course,</span> <span
  m="32930">which</span> <span m="33120">is</span> <span
  m="33450">integration.</span> <span m="34850">So,</span> <span
  m="35170">in</span> <span m="35280">order</span> <span m="35540">to</span>
  <span m="37010">introduce</span> <span m="37590">that</span> <span
  m="37850">subject,</span> <span m="38850">I</span> <span m="39010">need</span>
  <span m="39330">to</span> <span m="39420">introduce</span> <span
  m="39910">for</span> <span m="40140">you</span> <span m="40360">a</span> <span
  m="40440">new</span> <span m="40660">notation,</span> <span
  m="42450">which</span> <span m="42660">is</span> <span m="42810">called</span>
  <span m="43410">differentials.</span> <span m="52640">I'm</span> <span
  m="52900">going to</span> <span m="53080">tell</span> <span
  m="53350">you</span> <span m="53480">what</span> <span m="53630">a</span>
  <span m="53700">differential</span> <span m="54520">is,</span> <span
  m="55640">and</span> <span m="56000">we'll</span> <span m="56120">get</span>
  <span m="56350">used</span> <span m="56660">to</span> <span
  m="56740">using</span> <span m="57140">it</span> <span m="57360">over</span>
  <span m="58230">time.</span> <span m="62040">If</span> <span
  m="62160">you</span> <span m="62270">have</span> <span m="62450">a</span>
  <span m="62520">function</span> <span m="64280">which</span> <span
  m="64580">is</span> <span m="64710">y</span> <span m="66230">=</span> <span
  m="67170">f(x),</span> <span m="70290">then</span> <span m="71730">the</span>
  <span m="71910">differential</span> <span m="72910">of</span> <span
  m="73040">y</span> <span m="83970">is</span> <span m="84150">going</span>
  <span m="84440">to</span> <span m="84540">be</span> <span
  m="85270">denoted</span> <span m="86040">dy,</span> <span m="87650">and</span>
  <span m="87900">it's</span> <span m="88200">by</span> <span
  m="88380">definition</span> <span m="89250">f'(x) dx.</span> <span
  m="94160">So</span> <span m="94300">here's</span> <span m="94680">the</span>
  <span m="96100">notation.</span> <span m="101410">And</span> <span
  m="101900">because</span> <span m="102260">y</span> <span m="102530">is</span>
  <span m="102650">really</span> <span m="102880">equal</span> <span
  m="103260">to</span> <span m="103420">f,</span> <span
  m="104360">sometimes</span> <span m="104800">we</span> <span
  m="104900">also</span> <span m="105410">call it</span> <span
  m="105700">the</span> <span m="105780">differential</span> <span m="106610">of
  f.</span> <span m="110140">It's</span> <span m="110250">also</span> <span
  m="110590">called</span> <span m="111450">the</span> <span
  m="111560">differential</span> <span m="114910">of f.</span> <span
  m="118700">That's</span> <span m="119010">the</span> <span
  m="120050">notation,</span> <span m="121580">and</span> <span
  m="122610">it's</span> <span m="123510">the</span> <span
  m="123640">same</span> <span m="124110">thing</span> <span
  m="126750">as</span> <span m="127170">what</span> <span
  m="127360">happens</span> <span m="127740">if</span> <span
  m="127880">you</span> <span m="128980">formally</span> <span
  m="130170">just</span> <span m="130450">take</span> <span
  m="130750">this</span> <span m="130990">dx,</span> <span m="131630">act</span>
  <span m="131900">like</span> <span m="132110">it's</span> <span
  m="132240">a</span> <span m="132300">number</span> <span m="132730">and</span>
  <span m="133220">divide</span> <span m="133700">it into</span> <span
  m="133940">dy.</span> <span m="134910">So</span> <span m="135130">it</span>
  <span m="135240">means</span> <span m="135530">the</span> <span
  m="135670">same</span> <span m="136060">thing</span> <span
  m="137100">as</span> <span m="137330">this</span> <span
  m="141050">statement</span> <span m="141500">here.</span> <span
  m="142670">And</span> <span m="144820">this</span> <span m="145040">is</span>
  <span m="145530">more</span> <span m="145770">or</span> <span
  m="146040">less</span> <span m="146150">the Leibniz</span> <span
  m="147670">interpretation</span> <span m="149160">of</span> <span
  m="149280">derivatives.</span> <span m="158360">Of</span> <span
  m="159660">a</span> <span m="159780">derivative</span> <span
  m="163670">as</span> <span m="164450">a</span> <span m="165610">ratio</span>
  <span m="167960">of</span> <span m="168170">these</span> <span
  m="169180">so</span> <span m="169410">called</span> <span
  m="169780">differentials.</span> <span m="170990">It's</span> <span
  m="171270">a</span> <span m="171350">ratio</span> <span m="172670">of</span>
  <span m="174090">what</span> <span m="174400">are</span> <span
  m="174490">known</span> <span m="174790">as</span> <span
  m="175160">infinitesimals.</span></p><p><span m="184290">Now,</span> <span
  m="184460">this</span> <span m="184630">is</span> <span m="184850">kind</span>
  <span m="185090">of</span> <span m="185660">a</span> <span
  m="185830">vague</span> <span m="186240">notion,</span> <span
  m="187300">this</span> <span m="187530">little</span> <span
  m="188740">bit</span> <span m="189050">here</span> <span
  m="190120">being</span> <span m="191340">an</span> <span
  m="191560">infinitesimal.</span> <span m="192830">It's</span> <span
  m="193050">sort</span> <span m="193360">of</span> <span m="193450">like</span>
  <span m="193690">an</span> <span m="193780">infinitely</span> <span
  m="194420">small</span> <span m="194870">quantity.</span> <span
  m="196110">And</span> <span m="198190">Leibniz</span> <span
  m="198860">perfected</span> <span m="199420">the</span> <span
  m="199970">idea</span> <span m="200340">of</span> <span
  m="200890">dealing</span> <span m="201300">with</span> <span
  m="201440">these</span> <span m="201680">intuitively.</span> <span
  m="203050">And</span> <span m="203320">subsequently,</span> <span
  m="204070">mathematicians</span> <span m="204990">use</span> <span
  m="205340">them</span> <span m="205500">all</span> <span m="205700">the</span>
  <span m="205820">time.</span> <span m="206730">They're</span> <span
  m="207000">way</span> <span m="207440">more</span> <span
  m="207690">effective</span> <span m="208260">than</span> <span
  m="208440">the</span> <span m="208520">notation</span> <span
  m="209210">that</span> <span m="210340">Newton</span> <span
  m="211260">used.</span> <span m="213350">You</span> <span
  m="213510">might</span> <span m="213800">think</span> <span
  m="213990">that</span> <span m="214100">notations</span> <span
  m="214710">are</span> <span m="214860">a</span> <span m="214940">small</span>
  <span m="215340">matter,</span> <span m="216250">but</span> <span
  m="216770">they</span> <span m="218450">allow</span> <span
  m="218790">you</span> <span m="218950">to</span> <span m="219080">think</span>
  <span m="219500">much</span> <span m="219830">faster,</span> <span
  m="220420">sometimes.</span> <span m="220960">When</span> <span
  m="221070">you</span> <span m="221160">have</span> <span m="221310">the</span>
  <span m="221400">right</span> <span m="221690">names</span> <span
  m="222230">and</span> <span m="222350">the</span> <span
  m="222420">right</span> <span m="222730">symbols</span> <span
  m="223720">for</span> <span m="223860">everything.</span> <span m="224190">And
  in</span> <span m="224380">this</span> <span m="224600">case</span> <span
  m="225520">it</span> <span m="225710">made</span> <span m="225920">it</span>
  <span m="226110">very</span> <span m="226390">big</span> <span
  m="226620">difference.</span> <span m="227860">Leibniz's</span> <span
  m="228530">notation</span> <span m="229830">was</span> <span
  m="229990">adopted</span> <span m="230530">on</span> <span
  m="230750">the</span> <span m="230840">continent</span> <span
  m="232000">and</span> <span m="232280">Newton</span> <span
  m="232850">dominated</span> <span m="233880">in</span> <span
  m="234140">Britain</span> <span m="234930">and,</span> <span
  m="235190">as</span> <span m="235310">a</span> <span m="235370">result,</span>
  <span m="236650">the</span> <span m="237030">British</span> <span
  m="237380">fell</span> <span m="237620">behind</span> <span
  m="238120">by</span> <span m="238300">one</span> <span m="238520">or</span>
  <span m="238620">two</span> <span m="238800">hundred</span> <span
  m="239170">years</span> <span m="240170">in</span> <span m="240300">the</span>
  <span m="240390">development</span> <span m="240860">of</span> <span
  m="240960">calculus.</span> <span m="241850">It</span> <span
  m="241980">was</span> <span m="242300">really</span> <span m="242590">a</span>
  <span m="242670">serious</span> <span m="243270">matter.</span> <span
  m="243540">So</span> <span m="243700">it's</span> <span
  m="243820">really</span> <span m="244120">well</span> <span
  m="244370">worth</span> <span m="244650">your</span> <span
  m="244770">while</span> <span m="245570">to</span> <span m="245690">get</span>
  <span m="245860">used</span> <span m="246180">to</span> <span
  m="246270">this</span> <span m="247130">idea</span> <span m="247620">of</span>
  <span m="247730">ratios.</span> <span m="248940">And</span> <span
  m="249230">it</span> <span m="249610">comes</span> <span m="249910">up</span>
  <span m="250090">all</span> <span m="250340">over</span> <span
  m="250520">the</span> <span m="250600">place,</span> <span
  m="251060">both</span> <span m="251470">in</span> <span m="251620">this</span>
  <span m="251790">class</span> <span m="252140">and</span> <span
  m="252270">also in</span> <span m="252570">multivariable</span> <span
  m="253270">calculus.</span> <span m="254320">It's</span> <span
  m="254570">used</span> <span m="255540">in</span> <span m="255720">many</span>
  <span m="256390">contexts.</span></p><p><span m="257380">So</span> <span
  m="257650">first</span> <span m="258010">of</span> <span
  m="258130">all,</span> <span m="258370">just</span> <span m="258580">to</span>
  <span m="258670">go</span> <span m="258890">a</span> <span
  m="258980">little</span> <span m="259190">bit</span> <span
  m="259400">easy.</span> <span m="260030">We'll</span> <span
  m="260570">illustrate</span> <span m="261270">it by</span> <span
  m="261520">its</span> <span m="261930">use</span> <span m="263330">in</span>
  <span m="264080">linear</span> <span m="264400">approximations,</span> <span
  m="265320">which</span> <span m="265520">we've</span> <span
  m="265700">already</span> <span m="266060">done.</span> <span
  m="276420">The</span> <span m="276530">picture</span> <span
  m="276910">here,</span> <span m="277210">which</span> <span
  m="277420">we've</span> <span m="277560">drawn</span> <span
  m="277870">a</span> <span m="277920">number</span> <span m="278170">of</span>
  <span m="278260">times,</span> <span m="278780">is</span> <span
  m="279030">that</span> <span m="279130">you</span> <span
  m="279210">have</span> <span m="279380">some</span> <span
  m="279580">function.</span> <span m="281020">And</span> <span
  m="281650">here's</span> <span m="282380">a</span> <span
  m="282490">value</span> <span m="282890">of</span> <span m="283010">the</span>
  <span m="283090">function.</span> <span m="284300">And it's</span> <span
  m="284500">coming</span> <span m="284790">up</span> <span
  m="284950">like</span> <span m="285210">that.</span> <span
  m="287060">So</span> <span m="287440">here's our</span> <span
  m="287600">function.</span> <span m="288330">And</span> <span
  m="288560">we</span> <span m="288650">go</span> <span
  m="288840">forward</span> <span m="289450">a</span> <span
  m="289540">little</span> <span m="289790">increment</span> <span
  m="291090">to</span> <span m="291540">a</span> <span m="291640">place</span>
  <span m="293470">which</span> <span m="293690">is</span> <span
  m="293820">dx</span> <span m="294350">further</span> <span
  m="294840">along.</span> <span m="296540">The</span> <span
  m="296750">idea</span> <span m="297230">of this</span> <span
  m="297440">notation</span> <span m="298210">is</span> <span
  m="298600">that</span> <span m="298850">dx</span> <span m="299350">is</span>
  <span m="299510">going</span> <span m="299750">to</span> <span
  m="299860">replace</span> <span m="303910">the</span> <span
  m="304110">symbol</span> <span m="304470">delta</span> <span
  m="304870">x,</span> <span m="305260">which</span> <span m="305450">is</span>
  <span m="305610">the</span> <span m="305730">change</span> <span
  m="306210">in</span> <span m="306350">x.</span> <span m="307370">And</span>
  <span m="307690">we</span> <span m="307800">won't</span> <span
  m="308330">think</span> <span m="308620">too</span> <span
  m="308830">hard</span> <span m="309520">about--</span> <span
  m="310050">well,</span> <span m="310270">this</span> <span
  m="310430">is</span> <span m="310550">a</span> <span m="310640">small</span>
  <span m="311020">quantity,</span> <span m="311460">this</span> <span
  m="311610">is</span> <span m="311690">a</span> <span m="311790">small</span>
  <span m="312120">quantity,</span> <span m="312560">we're</span> <span
  m="312630">not</span> <span m="312750">going</span> <span m="312870">to</span>
  <span m="312930">think</span> <span m="313130">too</span> <span
  m="313260">hard</span> <span m="313530">about</span> <span
  m="314270">what</span> <span m="314580">that</span> <span
  m="314850">means.</span> <span m="316030">Now,</span> <span
  m="316270">similarly,</span> <span m="317750">if</span> <span
  m="317990">you</span> <span m="318590">see</span> <span m="318840">how</span>
  <span m="319020">much</span> <span m="319590">we've</span> <span
  m="319780">gone</span> <span m="320120">up -</span> <span
  m="320530">well,</span> <span m="320780">this</span> <span
  m="321010">is</span> <span m="321120">kind</span> <span m="321350">of</span>
  <span m="321420">low,</span> <span m="322640">so it's a</span> <span
  m="323200">small</span> <span m="323660">bit</span> <span
  m="325500">here.</span></p><p><span m="326600">So</span> <span
  m="326840">this</span> <span m="327070">distance</span> <span
  m="327560">here</span> <span m="329300">is,</span> <span
  m="330470">previously</span> <span m="331240">we</span> <span
  m="331360">called</span> <span m="331710">it</span> <span
  m="334470">delta</span> <span m="335190">y.</span> <span m="336040">But</span>
  <span m="336230">now</span> <span m="336400">we're</span> <span
  m="336560">just</span> <span m="336790">going</span> <span
  m="336970">to</span> <span m="337050">call it</span> <span
  m="337500">dy.</span> <span m="341810">So</span> <span m="343460">dy</span>
  <span m="344030">replaces</span> <span m="344620">delta</span> <span
  m="344920">y.</span> <span m="351200">So</span> <span m="351310">this</span>
  <span m="351500">is</span> <span m="351630">the</span> <span
  m="351730">change</span> <span m="352170">in</span> <span
  m="352280">level</span> <span m="353440">of</span> <span m="353600">the</span>
  <span m="353710">function.</span> <span m="357450">And</span> <span
  m="357730">we'll</span> <span m="357840">represent it</span> <span
  m="358340">symbolically</span> <span m="358940">this</span> <span
  m="359170">way.</span> <span m="359760">Very</span> <span
  m="360420">frequently,</span> <span m="360860">this</span> <span
  m="361220">just</span> <span m="361490">saves</span> <span m="362090">a</span>
  <span m="362170">little</span> <span m="362500">bit</span> <span
  m="362670">of</span> <span m="362800">notation.</span> <span
  m="364050">For</span> <span m="364560">the</span> <span
  m="364660">purposes</span> <span m="365210">of</span> <span
  m="365320">this,</span> <span m="365600">we'll</span> <span
  m="365810">be</span> <span m="365930">doing</span> <span m="366160">the</span>
  <span m="366260">same</span> <span m="366700">things</span> <span
  m="367030">we</span> <span m="367150">did</span> <span m="367340">with</span>
  <span m="367530">delta</span> <span m="368120">x</span> <span m="368520">and
  delta</span> <span m="368580">y,</span> <span m="369620">but</span> <span
  m="370090">this</span> <span m="370270">is</span> <span m="370390">the</span>
  <span m="370470">way</span> <span m="370640">that</span> <span
  m="370940">Leibniz</span> <span m="371430">thought</span> <span
  m="371870">of</span> <span m="371990">it.</span> <span m="372540">And</span>
  <span m="372820">he</span> <span m="373060">would</span> <span
  m="373220">just</span> <span m="373480">have</span> <span
  m="373610">drawn</span> <span m="374000">it</span> <span
  m="374220">with</span> <span m="374470">this.</span> <span
  m="374690">So</span> <span m="374830">this</span> <span
  m="375060">distance</span> <span m="375560">here is</span> <span
  m="376070">dx</span> <span m="377400">and</span> <span m="377530">this</span>
  <span m="377680">distance</span> <span m="378090">here</span> <span
  m="378290">is</span> <span m="378450">dy.</span> <span m="384670">So</span>
  <span m="384920">for</span> <span m="385210">an</span> <span
  m="385280">example</span> <span m="388000">of</span> <span
  m="388160">linear</span> <span m="388510">approximation,</span> <span
  m="390320">we'll</span> <span m="390800">say</span> <span
  m="391630">what's</span> <span m="392070">64.1,</span> <span
  m="392710">say,</span> <span m="393130">to</span> <span m="393660">the</span>
  <span m="394070">1/3</span> <span m="394670">power,</span> <span
  m="395970">approximately</span> <span m="396700">equal</span> <span
  m="397040">to?</span> <span m="399500">Now, I'm</span> <span
  m="399680">going</span> <span m="399800">to</span> <span
  m="399860">carry</span> <span m="400140">this</span> <span
  m="400350">out</span> <span m="400570">in</span> <span m="401190">this</span>
  <span m="401370">new</span> <span m="401530">notation</span> <span
  m="402240">here.</span> <span m="403470">The</span> <span
  m="403570">function</span> <span m="404100">involved</span> <span
  m="405090">is</span> <span m="405300">x^1/3.</span> <span
  m="407810">And</span> <span m="408100">then</span> <span m="408210">it's
  a</span> <span m="408440">differential,</span> <span m="409570">dy.</span>
  <span m="410990">Now,</span> <span m="411170">I</span> <span
  m="411440">want</span> <span m="411640">to</span> <span m="411700">use</span>
  <span m="412030">this</span> <span m="412230">rule</span> <span
  m="412690">to</span> <span m="412810">get</span> <span m="412970">used</span>
  <span m="413400">to</span> <span m="413520">it.</span> <span
  m="413670">Because</span> <span m="414120">this</span> <span
  m="414250">is</span> <span m="414350">what</span> <span
  m="414460">we're</span> <span m="414550">going to</span> <span
  m="414700">be</span> <span m="414800">doing</span> <span m="415070">all</span>
  <span m="415340">of</span> <span m="415490">today</span> <span
  m="416430">is,</span> <span m="416870">we're</span> <span
  m="417010">differentiating,</span> <span m="417760">or</span> <span
  m="417890">taking</span> <span m="418200">the</span> <span
  m="418270">differential</span> <span m="419040">of</span> <span
  m="419130">y.</span> <span m="420010">So</span> <span m="420270">that</span>
  <span m="420580">is</span> <span m="420750">going</span> <span
  m="421020">to</span> <span m="421090">be</span> <span m="421360">just</span>
  <span m="421690">the</span> <span m="421760">derivative.</span> <span
  m="422490">That's</span> <span m="423110">1/3</span> <span
  m="424060">x^(-2/3)</span> <span m="426430">dx.</span> <span
  m="431980">And</span> <span m="432270">now</span> <span m="432920">I'm</span>
  <span m="433100">just</span> <span m="433310">going</span> <span
  m="433510">to</span> <span m="434990">fill</span> <span m="435380">in</span>
  <span m="435850">exactly</span> <span m="436420">what</span> <span
  m="436620">this</span> <span m="436720">is.</span> <span m="438060">At
  x</span> <span m="439760">=</span> <span m="440160">64,</span> <span
  m="441130">which</span> <span m="441330">is</span> <span m="441440">the</span>
  <span m="441540">natural</span> <span m="442180">place</span> <span
  m="443790">close</span> <span m="444190">by</span> <span
  m="444770">where</span> <span m="445010">it's</span> <span
  m="445180">easy</span> <span m="445450">to</span> <span m="445550">do</span>
  <span m="445670">the</span> <span m="445800">evaluations,</span> <span
  m="447240">we</span> <span m="447550">have</span> <span m="447830">y =</span>
  <span m="450160">64^(1/3),</span> <span m="452000">which</span> <span
  m="452220">is</span> <span m="452340">just</span> <span
  m="452570">4.</span></p><p><span m="456110">And</span> <span
  m="457630">how</span> <span m="457910">about</span> <span
  m="458280">dy?</span> <span m="459740">Well,</span> <span m="460070">so</span>
  <span m="460210">this</span> <span m="460380">is</span> <span
  m="460480">a</span> <span m="460540">little</span> <span m="460750">bit</span>
  <span m="460910">more</span> <span m="461100">complicated.</span> <span
  m="462360">Put</span> <span m="462560">it</span> <span m="462660">over</span>
  <span m="462850">here.</span> <span m="463540">So</span> <span
  m="463890">dy</span> <span m="465320">=</span> <span m="466450">1/3</span>
  <span m="468980">64^(-2/3)</span> <span m="470560">dx.</span> <span
  m="475800">And</span> <span m="476140">that</span> <span m="476580">is</span>
  <span m="477120">1/3 *</span> <span m="480370">1/16</span> <span
  m="482610">dx,</span> <span m="483630">which</span> <span m="483960">is</span>
  <span m="484080">1/48</span> <span m="486400">dx.</span> <span
  m="496680">And</span> <span m="497090">now</span> <span m="498090">I'm</span>
  <span m="498250">going to</span> <span m="498410">work</span> <span
  m="498740">out</span> <span m="499160">what</span> <span m="499810">64</span>
  <span m="500180">to</span> <span m="500500">the,</span> <span
  m="501570">whatever</span> <span m="501860">it</span> <span
  m="501950">is</span> <span m="502450">here,</span> <span
  m="502760">this</span> <span m="503940">strange</span> <span
  m="504570">fraction.</span> <span m="506320">I just</span> <span
  m="506600">want to</span> <span m="506780">be</span> <span
  m="506860">very</span> <span m="507210">careful</span> <span
  m="508870">to</span> <span m="510010">explain to you</span> <span
  m="510720">one</span> <span m="510930">more</span> <span
  m="511210">thing.</span> <span m="513170">Which</span> <span
  m="513500">is</span> <span m="513870">that</span> <span
  m="514730">we're</span> <span m="515270">using</span> <span
  m="515650">x</span> <span m="515970">=</span> <span m="516330">64,</span>
  <span m="517780">and</span> <span m="518260">so</span> <span
  m="518450">we're</span> <span m="518600">thinking</span> <span
  m="518990">of</span> <span m="519440">x +</span> <span m="519900">dx</span>
  <span m="520890">is</span> <span m="521050">going to</span> <span
  m="521230">be</span> <span m="521350">64.1.</span> <span m="525240">So</span>
  <span m="525520">that</span> <span m="525790">means</span> <span
  m="526130">that</span> <span m="526380">dx</span> <span m="529250">is</span>
  <span m="529440">going</span> <span m="529660">to</span> <span
  m="529730">be</span> <span m="529860">1/10.</span> <span m="533700">So</span>
  <span m="533800">that's</span> <span m="534030">the</span> <span
  m="534190">increment</span> <span m="535220">that</span> <span
  m="535350">we're</span> <span m="535630">interested</span> <span
  m="536130">in.</span> <span m="539760">And</span> <span m="540070">now</span>
  <span m="540260">I</span> <span m="540320">can</span> <span
  m="540530">carry</span> <span m="540880">out</span> <span
  m="541120">the</span> <span m="541210">approximation.</span> <span
  m="543910">The</span> <span m="543980">approximation</span> <span
  m="545010">says</span> <span m="545660">that</span> <span
  m="545850">64.1^(1/3)</span> <span m="548930">is,</span> <span
  m="549750">well,</span> <span m="551230">it's</span> <span
  m="551420">approximately</span> <span m="552280">what</span> <span
  m="552470">I'm</span> <span m="552560">going to</span> <span
  m="552710">call</span> <span m="553010">y +</span> <span m="553600">dy.</span>
  <span m="554710">Because</span> <span m="555040">really,</span> <span
  m="555340">the</span> <span m="555450">dy</span> <span m="556360">that</span>
  <span m="556500">I'm</span> <span m="556660">determining</span> <span
  m="557290">here</span> <span m="558060">is</span> <span
  m="558340">determined</span> <span m="558800">by</span> <span
  m="558970">this</span> <span m="559210">linear</span> <span
  m="559720">relation.</span> <span m="561900">dy</span> <span
  m="562680">=</span> <span m="563000">1/48</span> <span m="565210">dx.</span>
  <span m="566450">And</span> <span m="566690">so</span> <span
  m="567170">this</span> <span m="567480">is</span> <span m="567600">only</span>
  <span m="567850">approximately</span> <span m="568730">true.</span> <span
  m="569820">Because</span> <span m="570190">what's</span> <span
  m="570410">really</span> <span m="570810">true</span> <span
  m="571650">is</span> <span m="572200">that</span> <span m="572480">this</span>
  <span m="573430">is equal to</span> <span m="574090">y</span> <span
  m="574580">+</span> <span m="575460">delta</span> <span m="575810">y.</span>
  <span m="577690">In</span> <span m="577780">our</span> <span
  m="577910">previous</span> <span m="578460">notation.</span> <span
  m="579590">So</span> <span m="579770">this</span> <span m="579920">is</span>
  <span m="580050">in</span> <span m="580180">disguise.</span> <span
  m="581600">What</span> <span m="581870">this</span> <span m="582030">is</span>
  <span m="582140">equal</span> <span m="582430">to.</span> <span
  m="582960">And</span> <span m="583220">that's</span> <span
  m="583380">the</span> <span m="583450">only</span> <span
  m="583710">approximately</span> <span m="584500">equal</span> <span
  m="584780">to</span> <span m="584940">what</span> <span m="585540">the</span>
  <span m="585630">linear</span> <span m="585950">approximation</span> <span
  m="586770">would</span> <span m="586920">give</span> <span
  m="587100">you.</span> <span m="587470">So,</span> <span
  m="587780">really,</span> <span m="588090">even</span> <span
  m="588340">though</span> <span m="588520">I</span> <span
  m="588670">wrote</span> <span m="589610">dy</span> <span m="590480">is</span>
  <span m="590640">this</span> <span m="590840">increment</span> <span
  m="591370">here,</span> <span m="591730">what</span> <span
  m="591960">it</span> <span m="592070">really</span> <span m="592650">is</span>
  <span m="593280">if</span> <span m="593510">dx</span> <span
  m="593730">is</span> <span m="594020">exactly</span> <span
  m="594520">that,</span> <span m="594830">is</span> <span
  m="595360">it's</span> <span m="595730">the</span> <span
  m="595830">amount</span> <span m="596460">it</span> <span
  m="596780">would</span> <span m="596940">go</span> <span m="597160">up</span>
  <span m="597410">if</span> <span m="597490">you</span> <span
  m="597580">went</span> <span m="597780">straight</span> <span
  m="598110">up</span> <span m="598210">the</span> <span
  m="598320">tangent</span> <span m="598880">line.</span> <span
  m="600270">So</span> <span m="600390">I'm</span> <span m="600470">not</span>
  <span m="600700">going</span> <span m="601020">to</span> <span
  m="601080">do</span> <span m="601210">that</span> <span
  m="601510">because</span> <span m="601800">that's</span> <span
  m="602040">not</span> <span m="602300">what</span> <span
  m="602450">people</span> <span m="602770">write.</span> <span
  m="603370">And</span> <span m="603530">that's</span> <span
  m="603700">not</span> <span m="603890">even</span> <span
  m="604080">what</span> <span m="604240">they</span> <span
  m="604380">think.</span> <span m="606040">They're</span> <span
  m="606150">really</span> <span m="606430">thinking</span> <span
  m="606930">of</span> <span m="607050">both</span> <span m="607510">dx</span>
  <span m="607920">and</span> <span m="608040">dy</span> <span
  m="608110">as</span> <span m="608200">being</span> <span
  m="608710">infinitesimally</span> <span m="609680">small.</span> <span
  m="610750">And</span> <span m="610920">here</span> <span
  m="611060">we're</span> <span m="611210">going</span> <span
  m="611520">to</span> <span m="612220">the</span> <span
  m="612320">finite</span> <span m="612940">level</span> <span
  m="613770">and</span> <span m="615520">doing</span> <span
  m="615790">it.</span> <span m="615900">So</span> <span m="618140">this</span>
  <span m="618320">is</span> <span m="618470">just</span> <span
  m="619110">something</span> <span m="619380">you</span> <span
  m="619470">have</span> <span m="619660">to</span> <span m="619760">live</span>
  <span m="620030">with,</span> <span m="620350">is</span> <span
  m="620510">a</span> <span m="620770">little</span> <span
  m="621010">ambiguity</span> <span m="621720">in</span> <span
  m="621870">this</span> <span m="622050">notation.</span></p><p><span
  m="628120">This</span> <span m="628280">is</span> <span m="628390">the</span>
  <span m="628480">approximation.</span> <span m="629490">And</span> <span
  m="629660">now</span> <span m="629810">I</span> <span m="629880">can</span>
  <span m="630050">just</span> <span m="630260">calculate</span> <span
  m="631310">these</span> <span m="631580">numbers</span> <span
  m="632020">here.</span> <span m="632970">y</span> <span m="633460">at</span>
  <span m="633760">this</span> <span m="634110">value</span> <span m="634720">is
  4.</span> <span m="636130">And</span> <span m="637450">dy,</span> <span
  m="637920">as</span> <span m="638080">I</span> <span m="638170">said,</span>
  <span m="638470">is</span> <span m="638620">1/48</span> <span
  m="640170">dx.</span> <span m="643630">And</span> <span m="643890">that</span>
  <span m="644050">turns</span> <span m="644340">out</span> <span
  m="644560">to</span> <span m="644680">be</span> <span m="645430">4</span>
  <span m="645730">+</span> <span m="646800">1/480,</span> <span
  m="648520">because</span> <span m="648880">dx is</span> <span
  m="649070">1/10.</span> <span m="650440">So</span> <span
  m="650630">that's</span> <span m="650850">approximately</span> <span
  m="652010">4.002.</span> <span m="654390">And</span> <span
  m="654560">that's</span> <span m="655000">our</span> <span
  m="655130">approximation.</span> <span m="664550">Now,</span> <span
  m="666020">let's</span> <span m="666340">just</span> <span m="666550">compare
  it</span> <span m="667240">to</span> <span m="671450">our</span> <span
  m="671920">previous</span> <span m="672400">notation.</span> <span
  m="680760">This</span> <span m="681010">will</span> <span
  m="681140">serve</span> <span m="681430">as</span> <span m="681540">a</span>
  <span m="681610">review</span> <span m="682250">of,</span> <span
  m="682700">if</span> <span m="682860">you</span> <span m="682970">like,</span>
  <span m="683250">of</span> <span m="683570">linear</span> <span
  m="683920">approximation.</span> <span m="695870">But</span> <span
  m="696440">what</span> <span m="696760">I</span> <span m="696810">want
  to</span> <span m="697160">emphasize</span> <span m="698000">is</span> <span
  m="698390">that</span> <span m="698610">these</span> <span
  m="698800">things</span> <span m="698990">are</span> <span
  m="699060">supposed</span> <span m="699440">to</span> <span
  m="699520">be</span> <span m="699640">the</span> <span m="699760">same.</span>
  <span m="703210">Just</span> <span m="703680">that</span> <span
  m="704190">it's</span> <span m="704340">really</span> <span
  m="704590">the</span> <span m="704690">same</span> <span
  m="705020">thing.</span> <span m="705520">It's</span> <span
  m="706010">just</span> <span m="706350">a</span> <span
  m="706450">different</span> <span m="706800">notation</span> <span
  m="707920">for</span> <span m="708060">the</span> <span m="708170">same</span>
  <span m="708540">thing.</span> <span m="712280">I</span> <span
  m="712410">remind</span> <span m="712920">you</span> <span
  m="713700">the</span> <span m="713850">basic</span> <span
  m="714280">formula</span> <span m="714690">for</span> <span
  m="714830">linear</span> <span m="715110">approximation</span> <span
  m="716110">is</span> <span m="716360">that</span> <span m="716700">f(x)</span>
  <span m="716810">is</span> <span m="717190">approximately</span> <span
  m="719010">f(a)</span> <span m="719400">+</span> <span m="720730">f'(a)
  (x-a).</span> <span m="725160">And</span> <span m="725440">we're</span> <span
  m="725610">applying</span> <span m="726130">it</span> <span
  m="726230">in</span> <span m="726310">the</span> <span
  m="726400">situation</span> <span m="727030">that</span> <span
  m="727210">a</span> <span m="727360">=</span> <span m="727420">64</span> <span
  m="729360">and</span> <span m="729700">f(x)</span> <span m="731620">=</span>
  <span m="732620">x^(1/3).</span> <span m="737980">And</span> <span
  m="738380">so</span> <span m="740690">f(a),</span> <span
  m="741000">which</span> <span m="741210">is</span> <span
  m="741300">f(64),</span> <span m="745250">is</span> <span m="745370">of</span>
  <span m="745440">course</span> <span m="745960">4.</span> <span
  m="747580">And</span> <span m="748670">f'(a),</span> <span
  m="750330">which</span> <span m="750590">is</span> <span m="755170">1/3</span>
  <span m="755420">a^(-2/3),</span> <span m="758320">is</span> <span
  m="759420">in</span> <span m="759550">our</span> <span m="759790">case</span>
  <span m="761740">1/16.</span> <span m="763210">No,</span> <span
  m="764290">1/48.</span> <span m="769600">OK,</span> <span
  m="769760">that's</span> <span m="770030">the</span> <span
  m="770110">same</span> <span m="770440">calculation</span> <span
  m="771170">as</span> <span m="771320">before.</span> <span
  m="772980">And</span> <span m="773300">then</span> <span m="773420">our</span>
  <span m="773560">relationship</span> <span m="774440">becomes</span> <span
  m="778450">x^(1/3)</span> <span m="779350">is</span> <span
  m="779490">approximately</span> <span m="780250">equal</span> <span
  m="780570">to</span> <span m="780720">4</span> <span m="781760">plus</span>
  <span m="782950">1/48 times x minus a,</span> <span m="788180">which</span>
  <span m="788330">is</span> <span m="788420">64.</span> <span
  m="792250">So</span> <span m="792400">look,</span> <span
  m="792710">every</span> <span m="793200">single</span> <span
  m="793630">number</span> <span m="794000">that</span> <span
  m="794130">I've</span> <span m="794250">written</span> <span
  m="794450">over</span> <span m="794630">here</span> <span
  m="794820">has</span> <span m="795020">a</span> <span
  m="795100">corresponding</span> <span m="797200">number</span> <span
  m="798160">for</span> <span m="798290">this</span> <span
  m="799170">other</span> <span m="799400">method.</span> <span
  m="800030">And</span> <span m="800230">now</span> <span m="800360">if</span>
  <span m="800470">I</span> <span m="800550">plug</span> <span
  m="800950">in</span> <span m="801080">the</span> <span m="801170">value</span>
  <span m="801470">we</span> <span m="801580">happen</span> <span
  m="801930">to</span> <span m="802070">want,</span> <span
  m="803250">which</span> <span m="803470">is</span> <span m="803800">the</span>
  <span m="806250">64.1,</span> <span m="807360">this</span> <span
  m="807770">would</span> <span m="808270">be 4</span> <span m="809870">+</span>
  <span m="809960">1/48</span> <span m="811120">1/10,</span> <span
  m="812500">which</span> <span m="812770">is</span> <span
  m="812880">just</span> <span m="813100">the</span> <span
  m="813180">same</span> <span m="813500">thing</span> <span
  m="813750">we</span> <span m="813860">had</span> <span
  m="817230">before.</span> <span m="818580">So</span> <span
  m="818780">again,</span> <span m="824490">same</span> <span
  m="824800">answer.</span> <span m="825270">Same</span> <span
  m="825740">method,</span> <span m="826910">new</span> <span
  m="827100">notation.</span></p><p><span m="835300">Well,</span> <span
  m="837030">now</span> <span m="837310">I</span> <span m="837410">get</span>
  <span m="837620">to</span> <span m="838010">use</span> <span
  m="838480">this</span> <span m="838700">notation</span> <span
  m="840550">in</span> <span m="840750">a</span> <span m="841440">novel</span>
  <span m="841910">way.</span> <span m="842300">So</span> <span
  m="842650">again,</span> <span m="843130">here's</span> <span
  m="843410">the</span> <span m="843480">notation.</span> <span
  m="844640">This</span> <span m="844870">notation</span> <span
  m="845410">of</span> <span m="845510">differential.</span> <span
  m="856410">The</span> <span m="856560">way</span> <span m="856710">I'm</span>
  <span m="856810">going</span> <span m="857030">to</span> <span
  m="857330">use</span> <span m="857780">it</span> <span m="857990">is</span>
  <span m="858860">in</span> <span m="859690">discussing</span> <span
  m="860170">something</span> <span m="860520">called</span> <span
  m="861510">antiderivative</span> <span m="869860">Again,</span> <span
  m="870550">this</span> <span m="870730">is</span> <span m="871570">a</span>
  <span m="871670">new</span> <span m="871870">notation</span> <span
  m="872410">now.</span> <span m="872560">But</span> <span
  m="872710">it's</span> <span m="872840">also</span> <span m="873130">a</span>
  <span m="873220">new</span> <span m="873390">idea. It's</span> <span
  m="873970">one</span> <span m="874140">that</span> <span m="874210">we</span>
  <span m="874330">haven't</span> <span m="874610">discussed</span> <span
  m="875090">yet.</span> <span m="877850">Namely,</span> <span
  m="880830">the</span> <span m="880980">notation</span> <span m="881500">that
  I</span> <span m="881600">want</span> <span m="881820">to</span> <span
  m="881880">describe</span> <span m="882320">here is</span> <span
  m="882680">what's</span> <span m="882930">called</span> <span
  m="883210">the</span> <span m="883350">integral</span> <span
  m="884450">of</span> <span m="884950">g(x)</span> <span m="885300">dx.</span>
  <span m="888090">And</span> <span m="888500">I'll</span> <span
  m="888700">denote</span> <span m="889050">that</span> <span
  m="889420">by</span> <span m="889620">a</span> <span
  m="889720">function</span> <span m="890150">capital</span> <span
  m="890720">G</span> <span m="890900">of x.</span> <span m="891560">So</span>
  <span m="892150">it's,</span> <span m="892280">you</span> <span
  m="892390">start</span> <span m="892680">with</span> <span m="892800">a</span>
  <span m="892860">function</span> <span m="893510">g(x)</span> <span
  m="893820">and</span> <span m="893940">you</span> <span
  m="894020">produce</span> <span m="894420">a</span> <span
  m="894520">function</span> <span m="894870">capital</span> <span
  m="895380">G(x),</span> <span m="896420">which</span> <span
  m="896730">is</span> <span m="896850">called</span> <span
  m="898180">the</span> <span m="899040">antiderivative</span> <span
  m="901210">of</span> <span m="906640">g.</span> <span m="912190">Notice</span>
  <span m="912550">there's</span> <span m="912760">a</span> <span
  m="912830">differential</span> <span m="913790">sitting</span> <span
  m="914070">in</span> <span m="914190">here.</span> <span
  m="915330">This</span> <span m="917890">symbol,</span> <span
  m="919540">this</span> <span m="919730">guy</span> <span
  m="919980">here,</span> <span m="923800">is</span> <span
  m="924840">called</span> <span m="925120">an</span> <span
  m="925290">integral</span> <span m="925760">sign.</span> <span m="931380">Or
  an</span> <span m="931800">integral,</span> <span m="932580">or</span> <span
  m="932970">this</span> <span m="933240">whole</span> <span
  m="933410">thing</span> <span m="933590">is</span> <span
  m="933710">called</span> <span m="933970">an</span> <span
  m="934180">integral.</span> <span m="934600">And</span> <span
  m="934860">another</span> <span m="935190">name</span> <span
  m="935530">for</span> <span m="935650">the</span> <span
  m="936040">antiderivative</span> <span m="936870">of</span> <span
  m="937020">g</span> <span m="937830">is</span> <span m="939340">the</span>
  <span m="940180">indefinite</span> <span m="944310">integral</span> <span
  m="946950">of</span> <span m="947160">g.</span> <span m="950700">And</span>
  <span m="950940">I'll</span> <span m="951130">explain</span> <span
  m="951710">to</span> <span m="951840">you</span> <span m="953300">why
  it's</span> <span m="954040">indefinite</span> <span m="954690">in</span>
  <span m="956390">just--</span> <span m="958050">very</span> <span
  m="958270">shortly</span> <span m="958770">here.</span></p><p><span
  m="964330">Well, so</span> <span m="964460">let's</span> <span
  m="964640">carry</span> <span m="964910">out</span> <span
  m="965100">some</span> <span m="965250">examples.</span> <span
  m="973330">Basically</span> <span m="973850">what</span> <span
  m="974030">I'd</span> <span m="974170">like</span> <span m="974440">to</span>
  <span m="974590">do</span> <span m="975250">is</span> <span
  m="975620">as</span> <span m="975840">many</span> <span
  m="976220">examples</span> <span m="976840">along</span> <span
  m="977150">the</span> <span m="977230">lines</span> <span m="977570">of</span>
  <span m="977670">all</span> <span m="977830">the</span> <span
  m="977940">derivatives</span> <span m="978510">that</span> <span
  m="978620">we</span> <span m="978750">derived</span> <span
  m="980380">at</span> <span m="980530">the</span> <span
  m="980630">beginning</span> <span m="980960">of</span> <span
  m="981030">the</span> <span m="981110">course.</span> <span
  m="981460">In</span> <span m="981530">other</span> <span
  m="981690">words,</span> <span m="981990">in</span> <span
  m="982140">principle</span> <span m="982590">you</span> <span
  m="982690">want</span> <span m="982870">to</span> <span m="982930">be</span>
  <span m="982990">able</span> <span m="983140">to</span> <span
  m="983260">integrate</span> <span m="983650">as</span> <span
  m="983760">many</span> <span m="984010">things</span> <span
  m="984280">as</span> <span m="984410">possible.</span> <span
  m="986550">We're</span> <span m="986830">going</span> <span
  m="987020">to</span> <span m="987100">start</span> <span m="987460">out</span>
  <span m="987990">with</span> <span m="988720">the</span> <span
  m="988840">integral</span> <span m="989310">of sin x</span> <span
  m="991330">dx.</span> <span m="994680">That's</span> <span m="995260">a</span>
  <span m="995370">function</span> <span m="996950">whose</span> <span
  m="997790">derivative</span> <span m="998310">is</span> <span
  m="998990">sin</span> <span m="999630">x.</span> <span m="1000670">So</span>
  <span m="1000870">what</span> <span m="1001140">function</span> <span
  m="1001500">would</span> <span m="1001630">that</span> <span
  m="1001900">be?</span> <span m="1004990">Cosine</span> <span
  m="1005290">x,</span> <span m="1006810">minus,</span> <span
  m="1007540">right.</span> <span m="1008400">It's</span> <span m="1008940">-cos
  x.</span> <span m="1012700">So</span> <span m="1013220">-cos x</span> <span
  m="1013850">differentiated</span> <span m="1014590">gives</span> <span
  m="1014810">you</span> <span m="1014920">sin</span> <span
  m="1015990">x.</span> <span m="1016240">So that</span> <span
  m="1016650">is</span> <span m="1017540">an</span> <span
  m="1017760">antiderivative</span> <span m="1019260">of</span> <span
  m="1019660">sine.</span> <span m="1020540">And</span> <span
  m="1020700">it</span> <span m="1020810">satisfies</span> <span
  m="1021520">this</span> <span m="1021710">property.</span> <span
  m="1022210">So</span> <span m="1022400">this</span> <span
  m="1022670">function,</span> <span m="1023660">G(x)</span> <span
  m="1026600">=</span> <span m="1027510">-</span> <span m="1028000">cos</span>
  <span m="1028230">x,</span> <span m="1029520">has</span> <span
  m="1029720">the</span> <span m="1029830">property</span> <span
  m="1030330">that</span> <span m="1030480">its</span> <span
  m="1030700">derivative</span> <span m="1032760">is</span> <span
  m="1032920">sin x.</span> <span m="1035170">On</span> <span
  m="1035360">the</span> <span m="1035470">other</span> <span
  m="1035700">hand,</span> <span m="1039210">if</span> <span
  m="1039350">you</span> <span m="1039450">differentiate</span> <span
  m="1040060">a</span> <span m="1040130">constant,</span> <span
  m="1040700">you</span> <span m="1040810">get</span> <span
  m="1041030">0.</span> <span m="1042230">So</span> <span
  m="1043130">this</span> <span m="1043440">answer</span> <span
  m="1043860">is</span> <span m="1043980">what's</span> <span
  m="1044170">called</span> <span m="1044450">indefinite.</span> <span
  m="1045090">Because</span> <span m="1045340">you</span> <span
  m="1045410">can</span> <span m="1045520">also</span> <span
  m="1045990">add</span> <span m="1046260">any</span> <span
  m="1046590">constant</span> <span m="1047270">here.</span> <span
  m="1048910">And</span> <span m="1049280">the</span> <span
  m="1049350">same</span> <span m="1049700">thing</span> <span
  m="1049970">will</span> <span m="1050120">be</span> <span
  m="1050270">true.</span> <span m="1053610">So,</span> <span m="1053940">c
  is</span> <span m="1054110">constant.</span> <span m="1058060">And</span>
  <span m="1058270">as</span> <span m="1058410">I</span> <span
  m="1058520">said,</span> <span m="1059100">the</span> <span
  m="1059630">integral is</span> <span m="1060110">called</span> <span
  m="1060490">indefinite.</span> <span m="1061660">So</span> <span
  m="1061800">that's</span> <span m="1062130">an</span> <span
  m="1062240">explanation</span> <span m="1062880">for</span> <span
  m="1063080">this</span> <span m="1064740">modifier</span> <span
  m="1065410">in</span> <span m="1065490">front</span> <span
  m="1065730">of</span> <span m="1065810">the</span> <span
  m="1065950">&quot;integral&quot;.</span> <span m="1066810">It's</span> <span
  m="1067080">indefinite</span> <span m="1067780">because</span> <span
  m="1068090">we</span> <span m="1068230">actually</span> <span
  m="1068630">didn't</span> <span m="1068960">specify</span> <span
  m="1069690">a</span> <span m="1069770">single</span> <span
  m="1070120">function.</span> <span m="1070540">We</span> <span
  m="1070620">don't</span> <span m="1070790">get</span> <span
  m="1070960">a</span> <span m="1071010">single</span> <span
  m="1071450">answer.</span> <span m="1072170">Whenever</span> <span
  m="1072580">you</span> <span m="1072990">take</span> <span
  m="1073190">the</span> <span m="1073310">antiderivative</span> <span
  m="1073840">of</span> <span m="1074040">something</span> <span
  m="1074400">it's</span> <span m="1074610">ambiguous</span> <span
  m="1075900">up</span> <span m="1076090">to</span> <span m="1076280">a</span>
  <span m="1076340">constant.</span></p><p><span m="1088110">Next,</span> <span
  m="1088630">let's</span> <span m="1088940">do</span> <span
  m="1090280">some</span> <span m="1090660">other</span> <span
  m="1090830">standard</span> <span m="1091860">functions</span> <span
  m="1092340">from</span> <span m="1092500">our</span> <span
  m="1092900">repertoire.</span> <span m="1093890">We</span> <span
  m="1093980">have</span> <span m="1094160">the</span> <span
  m="1094310">integral</span> <span m="1095080">of</span> <span m="1095690">x^a
  dx.</span> <span m="1097820">Some</span> <span m="1098140">power,</span> <span
  m="1098620">the</span> <span m="1098750">integral</span> <span
  m="1099050">of</span> <span m="1099130">a</span> <span
  m="1099220">power.</span> <span m="1100730">And</span> <span
  m="1102000">if</span> <span m="1102150">you</span> <span
  m="1102270">think</span> <span m="1102500">about</span> <span
  m="1102860">it,</span> <span m="1103370">what</span> <span
  m="1103570">you</span> <span m="1103670">should</span> <span
  m="1103830">be</span> <span m="1103940">differentiating</span> <span
  m="1104680">is</span> <span m="1104820">one</span> <span
  m="1105220">power</span> <span m="1105590">larger</span> <span
  m="1106050">than</span> <span m="1106250">that.</span> <span
  m="1107590">But</span> <span m="1107810">then</span> <span
  m="1108210">you</span> <span m="1108270">have</span> <span
  m="1108480">to</span> <span m="1108580">divide</span> <span
  m="1110080">by</span> <span m="1111380">1/(a+1),</span> <span
  m="1113250">in</span> <span m="1113440">order</span> <span
  m="1113660">that</span> <span m="1113880">the</span> <span
  m="1113960">differentiation</span> <span m="1115130">be</span> <span
  m="1115300">correct.</span> <span m="1116780">So</span> <span
  m="1117540">this</span> <span m="1117690">just</span> <span
  m="1117970">is</span> <span m="1118080">the</span> <span
  m="1118200">fact</span> <span m="1118680">that</span> <span
  m="1119330">d/dx</span> <span m="1121010">of</span> <span
  m="1121760">x^(a+1),</span> <span m="1124360">or</span> <span
  m="1124670">maybe</span> <span m="1124980">I</span> <span
  m="1125030">should</span> <span m="1125240">even</span> <span
  m="1125510">say</span> <span m="1125790">it</span> <span
  m="1125940">this</span> <span m="1126150">way.</span> <span
  m="1126600">Maybe</span> <span m="1126820">I'll</span> <span
  m="1126910">do</span> <span m="1127070">it</span> <span m="1127180">in</span>
  <span m="1127490">differential</span> <span m="1128030">notation.</span> <span
  m="1129620">d(x^(a+1))</span> <span m="1131190">=</span> <span
  m="1131690">(a+1)</span> <span m="1131950">x^a</span> <span
  m="1132260">dx.</span> <span m="1137370">So</span> <span m="1137550">if</span>
  <span m="1137660">I</span> <span m="1137760">divide</span> <span
  m="1138290">that</span> <span m="1138530">through</span> <span
  m="1138920">by</span> <span m="1139140">a+1,</span> <span
  m="1142950">then</span> <span m="1143140">I</span> <span
  m="1143200">get</span> <span m="1143450">the</span> <span
  m="1144020">relation</span> <span m="1145350">above.</span> <span
  m="1146280">And</span> <span m="1146820">because</span> <span
  m="1147770">this</span> <span m="1148040">is</span> <span
  m="1149270">ambiguous</span> <span m="1150100">up</span> <span
  m="1150290">to</span> <span m="1150440">a</span> <span
  m="1150510">constant,</span> <span m="1151800">it</span> <span
  m="1152000">could</span> <span m="1152240">be</span> <span
  m="1152770">any</span> <span m="1154440">additional</span> <span
  m="1155240">constant</span> <span m="1155820">added</span> <span
  m="1156130">to</span> <span m="1156240">that</span> <span
  m="1156450">function.</span></p><p><span m="1160830">Now,</span> <span
  m="1162390">the</span> <span m="1162550">identity</span> <span
  m="1163030">that</span> <span m="1163190">I</span> <span
  m="1163250">wrote</span> <span m="1163530">down</span> <span
  m="1163760">below</span> <span m="1164120">is</span> <span
  m="1164350">correct.</span> <span m="1166290">But</span> <span
  m="1166590">this</span> <span m="1166860">one</span> <span
  m="1167340">is</span> <span m="1167540">not</span> <span
  m="1167900">always</span> <span m="1168380">correct.</span> <span
  m="1170700">What's</span> <span m="1171060">the</span> <span
  m="1171180">exception?</span> <span m="1175200">Yeah.</span> <span
  m="1175850">a</span> <span m="1176450">equals--</span></p><p><span
  m="1178440">STUDENT: 0.</span></p><p><span m="1178710">PROFESSOR:
  Negative</span> <span m="1180290">1.</span> <span m="1182060">So</span> <span
  m="1182550">this</span> <span m="1182890">one</span> <span
  m="1183090">is</span> <span m="1183250">OK</span> <span m="1183790">for</span>
  <span m="1184010">all a.</span> <span m="1187440">But</span> <span
  m="1187640">this</span> <span m="1187900">one</span> <span
  m="1188100">fails</span> <span m="1188700">because</span> <span
  m="1188840">we've</span> <span m="1188950">divided</span> <span
  m="1189560">by</span> <span m="1189770">0</span> <span m="1190570">when</span>
  <span m="1190860">a</span> <span m="1191010">=</span> <span
  m="1191580">-1.</span> <span m="1192550">So</span> <span
  m="1192840">this</span> <span m="1193030">is</span> <span
  m="1193200">only</span> <span m="1193620">true</span> <span
  m="1194960">when</span> <span m="1195220">a is</span> <span m="1195550">not
  equal to</span> <span m="1196000">-1.</span> <span m="1204770">And</span>
  <span m="1204970">in</span> <span m="1205190">fact, of</span> <span
  m="1205790">course, what's</span> <span m="1206310">happening</span> <span
  m="1206850">when</span> <span m="1207026">a</span> <span m="1207202">=</span>
  <span m="1207380">0,</span> <span m="1207790">you're</span> <span
  m="1208700">getting</span> <span m="1209580">0</span> <span m="1210130">when
  you</span> <span m="1210880">differentiate the constant.</span> <span
  m="1211670">So</span> <span m="1211940">there's</span> <span
  m="1212290">a</span> <span m="1212460">third</span> <span m="1213070">case
  that</span> <span m="1213570">we</span> <span m="1213850">have to</span> <span
  m="1214380">carry</span> <span m="1214720">out.</span> <span
  m="1215510">Which</span> <span m="1215720">is</span> <span
  m="1215800">the</span> <span m="1215920">exceptional</span> <span
  m="1216410">case, namely</span> <span m="1217060">the</span> <span
  m="1217390">integral</span> <span m="1218010">of dx/x.</span> <span
  m="1225230">And</span> <span m="1225430">this</span> <span
  m="1225730">time,</span> <span m="1230370">if</span> <span m="1230970">we
  just</span> <span m="1231130">think back</span> <span m="1231620">to</span>
  <span m="1231720">what</span> <span m="1231990">our--</span> <span
  m="1232130">So what</span> <span m="1232330">we're doing</span> <span
  m="1232640">is</span> <span m="1232790">thinking</span> <span
  m="1233320">backwards</span> <span m="1233640">here, which</span> <span
  m="1233940">a</span> <span m="1234020">very</span> <span
  m="1234390">important</span> <span m="1234570">thing</span> <span
  m="1235080">to</span> <span m="1235200">do</span> <span m="1235380">in</span>
  <span m="1235610">math</span> <span m="1237440">at</span> <span
  m="1237560">all</span> <span m="1237880">stages.</span> <span
  m="1238690">We</span> <span m="1238850">got</span> <span m="1239080">all of
  our</span> <span m="1239430">formulas,</span> <span m="1239830">now</span>
  <span m="1240090">we're</span> <span m="1240360">reading</span> <span
  m="1240450">them backwards.</span> <span m="1241800">And so</span> <span
  m="1242170">this</span> <span m="1242400">one,</span> <span
  m="1242590">you</span> <span m="1242680">may</span> <span
  m="1242860">remember,</span> <span m="1243440">is ln</span> <span
  m="1244940">x.</span></p><p><span m="1249890">The</span> <span
  m="1250060">reason</span> <span m="1250490">why</span> <span
  m="1250840">I</span> <span m="1251060">want to</span> <span
  m="1251600">do</span> <span m="1251720">this</span> <span
  m="1252090">carefully</span> <span m="1252600">and</span> <span
  m="1252730">slowly</span> <span m="1253100">now,</span> <span
  m="1253370">is</span> <span m="1253500">right</span> <span
  m="1253800">now</span> <span m="1253940">I</span> <span
  m="1254020">also</span> <span m="1254420">want</span> <span
  m="1254620">to</span> <span m="1254720">write</span> <span
  m="1255370">the</span> <span m="1255540">more</span> <span
  m="1255730">standard</span> <span m="1256410">form</span> <span
  m="1257330">which</span> <span m="1257520">is</span> <span
  m="1257640">presented.</span> <span m="1258090">So</span> <span
  m="1258270">first</span> <span m="1258590">of</span> <span
  m="1258690">all,</span> <span m="1259250">first</span> <span m="1260090">we
  have to</span> <span m="1261370">add a constant.</span> <span
  m="1261540">And</span> <span m="1262020">please don't</span> <span
  m="1262120">put the</span> <span m="1262630">parentheses</span> <span
  m="1263350">here.</span> <span m="1264160">The parentheses</span> <span
  m="1264780">go</span> <span m="1265010">there.</span> <span
  m="1270360">But</span> <span m="1270960">there's</span> <span
  m="1271420">another</span> <span m="1272910">formula</span> <span
  m="1273560">hiding</span> <span m="1274080">in</span> <span
  m="1274150">the</span> <span m="1274230">woodwork</span> <span
  m="1274700">here</span> <span m="1275300">behind</span> <span
  m="1275650">this</span> <span m="1275880">one.</span> <span
  m="1276500">Which</span> <span m="1276780">is</span> <span
  m="1277080">that</span> <span m="1277280">you</span> <span
  m="1277410">can</span> <span m="1277550">also</span> <span m="1278090">get
  the</span> <span m="1278390">correct</span> <span m="1278970">formula</span>
  <span m="1279260">when x</span> <span m="1279580">is</span> <span
  m="1279760">negative.</span> <span m="1280870">And</span> <span
  m="1280980">that</span> <span m="1281140">turns</span> <span m="1281420">out
  to</span> <span m="1281790">be</span> <span m="1282900">this</span> <span
  m="1283170">one</span> <span m="1283520">here.</span> <span
  m="1287130">So</span> <span m="1287310">I'm</span> <span
  m="1287660">treating</span> <span m="1289320">the</span> <span
  m="1289490">case,</span> <span m="1289660">x</span> <span
  m="1290193">positive,</span> <span m="1290726">as</span> <span
  m="1291260">being</span> <span m="1291570">something</span> <span
  m="1292670">that</span> <span m="1292790">you</span> <span
  m="1293050">know.</span> <span m="1294460">But</span> <span
  m="1294600">let's</span> <span m="1294950">check</span> <span m="1295340">the
  case, x</span> <span m="1296390">negative.</span> <span m="1303530">In</span>
  <span m="1303660">order to</span> <span m="1303730">check the</span> <span
  m="1303900">case</span> <span m="1304070">x</span> <span
  m="1305060">negative,</span> <span m="1305810">I</span> <span m="1305910">have
  to</span> <span m="1306310">differentiate</span> <span m="1309370">the
  logarithm</span> <span m="1310390">of</span> <span m="1310940">the</span>
  <span m="1311130">absolute value</span> <span m="1311750">of x in that
  case.</span> <span m="1315680">And</span> <span m="1315860">that's</span>
  <span m="1316000">the</span> <span m="1316240">same thing,</span> <span
  m="1317510">again, for x negative</span> <span m="1317920">as the</span> <span
  m="1319930">derivative</span> <span m="1320770">of the</span> <span
  m="1321070">logarithm</span> <span m="1321590">of negative x.</span> <span
  m="1322170">That's</span> <span m="1322490">the</span> <span
  m="1322950">formula,</span> <span m="1325290">when</span> <span m="1326220">x
  is</span> <span m="1326640">negative.</span> <span m="1328410">And</span>
  <span m="1328560">if</span> <span m="1328670">you</span> <span
  m="1328770">carry</span> <span m="1329130">that</span> <span
  m="1329320">out,</span> <span m="1330850">what you</span> <span
  m="1330980">get,</span> <span m="1331290">maybe I'll</span> <span
  m="1331740">put</span> <span m="1332470">this</span> <span
  m="1332760">over</span> <span m="1333000">here,</span> <span
  m="1336000">is,</span> <span m="1338400">well,</span> <span
  m="1338670">it's</span> <span m="1338890">the</span> <span
  m="1338970">chain</span> <span m="1340340">rule.</span> <span
  m="1340800">It's</span> <span m="1341460">1/(-x)</span> <span
  m="1342790">times the derivative</span> <span m="1343350">with</span> <span
  m="1344340">respect</span> <span m="1344550">to</span> <span
  m="1344720">x</span> <span m="1345010">of -x.</span></p><p><span
  m="1347160">So</span> <span m="1347470">see</span> <span
  m="1347730">that</span> <span m="1347870">there are</span> <span
  m="1348110">two</span> <span m="1348520">minus signs.</span> <span
  m="1350730">There's</span> <span m="1350940">a</span> <span
  m="1351420">-x</span> <span m="1351710">in</span> <span m="1351790">the</span>
  <span m="1351860">denominator</span> <span m="1352510">and</span> <span
  m="1352660">then</span> <span m="1352750">there's</span> <span
  m="1352930">the</span> <span m="1353040">derivative</span> <span
  m="1353530">of</span> <span m="1353920">-x</span> <span m="1354700">in</span>
  <span m="1354830">the</span> <span m="1354900">numerator.</span> <span
  m="1355610">That's</span> <span m="1355940">just</span> <span
  m="1356770">-1.</span> <span m="1358070">This</span> <span
  m="1358250">part</span> <span m="1358490">is</span> <span
  m="1358930">-1.</span> <span m="1359160">So</span> <span
  m="1359360">this</span> <span m="1359980">-1</span> <span
  m="1360210">over</span> <span m="1360430">-x,</span> <span m="1361620">which
  is</span> <span m="1362110">1/x.</span> <span m="1363100">So</span> <span
  m="1363870">the</span> <span m="1364030">negative</span> <span
  m="1364390">signs</span> <span m="1364700">cancel.</span> <span
  m="1373200">If</span> <span m="1373350">you</span> <span
  m="1374350">just</span> <span m="1374580">keep</span> <span
  m="1374790">track</span> <span m="1375240">of</span> <span
  m="1375330">this</span> <span m="1376520">in</span> <span
  m="1376670">terms</span> <span m="1377070">of</span> <span
  m="1378630">ln(-x)</span> <span m="1379810">and</span> <span
  m="1379950">its</span> <span m="1380090">graph,</span> <span
  m="1381640">that's</span> <span m="1382000">a</span> <span
  m="1382090">function</span> <span m="1382510">that</span> <span
  m="1382610">looks</span> <span m="1382830">like</span> <span
  m="1383140">this.</span> <span m="1385480">For x</span> <span
  m="1385870">negative.</span> <span m="1388370">And</span> <span
  m="1388660">its</span> <span m="1388760">derivative</span> <span
  m="1391600">is</span> <span m="1392040">1/x,</span> <span m="1392830">I</span>
  <span m="1392990">claim.</span> <span m="1394170">And</span> <span
  m="1394550">if</span> <span m="1394640">you</span> <span
  m="1394910">just</span> <span m="1395180">look</span> <span
  m="1395370">at</span> <span m="1395520">it</span> <span m="1395600">a</span>
  <span m="1395650">little</span> <span m="1395870">bit</span> <span
  m="1396540">carefully,</span> <span m="1397120">you</span> <span
  m="1397260">see</span> <span m="1398460">that</span> <span
  m="1399100">the</span> <span m="1399220">slope</span> <span
  m="1399630">is</span> <span m="1399770">always</span> <span
  m="1400190">negative.</span> <span m="1403660">Right?</span> <span
  m="1403930">So</span> <span m="1404090">here</span> <span
  m="1405480">the</span> <span m="1405610">slope</span> <span
  m="1405940">is</span> <span m="1406050">negative.</span> <span
  m="1406950">So</span> <span m="1407200">it's</span> <span
  m="1408890">going</span> <span m="1409020">to</span> <span
  m="1409080">be</span> <span m="1409170">below</span> <span
  m="1409550">the</span> <span m="1409740">axis.</span> <span
  m="1410480">And,</span> <span m="1410770">in</span> <span m="1410880">fact,
  it's</span> <span m="1411330">getting</span> <span m="1411570">steeper
  and</span> <span m="1412070">steeper</span> <span m="1412540">negative</span>
  <span m="1412890">as</span> <span m="1413000">we</span> <span
  m="1413130">go</span> <span m="1413300">down.</span> <span
  m="1414980">And</span> <span m="1415190">it's</span> <span
  m="1415310">getting</span> <span m="1415740">less</span> <span
  m="1416020">and</span> <span m="1416140">less</span> <span
  m="1416350">negative</span> <span m="1416640">as</span> <span
  m="1416770">we</span> <span m="1416880">go</span> <span
  m="1417010">horizontally.</span> <span m="1417980">So</span> <span
  m="1418150">it's</span> <span m="1418260">going</span> <span
  m="1418730">like</span> <span m="1418960">this,</span> <span
  m="1419730">which</span> <span m="1420080">is</span> <span
  m="1420360">indeed</span> <span m="1420790">the</span> <span m="1420860">graph
  of</span> <span m="1421610">this</span> <span m="1421890">function,</span>
  <span m="1422370">for x</span> <span m="1422790">negative.</span> <span
  m="1423770">Again, x negative.</span></p><p><span m="1433320">So</span> <span
  m="1433510">that's</span> <span m="1434940">one</span> <span
  m="1435180">other</span> <span m="1435350">standard</span> <span
  m="1435920">formula.</span> <span m="1436850">And</span> <span
  m="1437600">very</span> <span m="1437850">quickly,</span> <span
  m="1438740">very</span> <span m="1439100">often,</span> <span
  m="1439510">we</span> <span m="1439650">won't</span> <span
  m="1439910">put</span> <span m="1440100">the</span> <span
  m="1440220">absolute</span> <span m="1440450">value</span> <span
  m="1440730">signs.</span> <span m="1441000">We'll</span> <span
  m="1441140">only</span> <span m="1441350">consider</span> <span
  m="1441740">the</span> <span m="1441830">case x</span> <span
  m="1442410">positive</span> <span m="1442930">here.</span> <span
  m="1443180">But</span> <span m="1443350">I</span> <span
  m="1443400">just</span> <span m="1443700">want</span> <span
  m="1443890">you</span> <span m="1444020">to</span> <span
  m="1444090">have</span> <span m="1444300">the</span> <span
  m="1444410">tools</span> <span m="1444870">to</span> <span
  m="1446020">do</span> <span m="1446170">it</span> <span m="1446280">in</span>
  <span m="1446400">case</span> <span m="1446930">we</span> <span
  m="1447070">want</span> <span m="1447260">to</span> <span
  m="1447320">use,</span> <span m="1447670">we</span> <span m="1447820">want
  to</span> <span m="1448020">handle,</span> <span m="1448710">both</span> <span
  m="1448960">positive</span> <span m="1449420">and</span> <span
  m="1449540">negative</span> <span m="1449820">x.</span> <span
  m="1454040">Now,</span> <span m="1456780">let's</span> <span
  m="1457270">do</span> <span m="1457430">two</span> <span
  m="1457640">more</span> <span m="1457940">examples.</span> <span
  m="1468620">The</span> <span m="1469710">integral</span> <span
  m="1470270">of</span> <span m="1470410">sec^2</span> <span
  m="1471790">x</span> <span m="1472210">dx.</span> <span
  m="1475870">These</span> <span m="1476040">are</span> <span
  m="1476110">supposed</span> <span m="1476570">to</span> <span
  m="1476810">get</span> <span m="1477060">you</span> <span
  m="1477640">to</span> <span m="1477810">remember</span> <span
  m="1478270">all</span> <span m="1478550">of</span> <span
  m="1478640">your</span> <span m="1478950">differentiation</span> <span
  m="1479810">formulas,</span> <span m="1480270">the</span> <span
  m="1480510">standard</span> <span m="1480950">ones.</span> <span
  m="1481130">So</span> <span m="1481290">this</span> <span
  m="1481490">one,</span> <span m="1481960">integral</span> <span m="1482370">of
  sec^2</span> <span m="1483120">dx</span> <span m="1483940">is</span> <span
  m="1484370">what?</span> <span m="1485770">tan x.</span> <span m="1488200">And
  here</span> <span m="1488350">we have</span> <span m="1488460">+</span> <span
  m="1488590">c,</span> <span m="1489420">all right?</span> <span
  m="1490690">And</span> <span m="1490900">then</span> <span
  m="1491840">the</span> <span m="1492020">last</span> <span
  m="1492450">one</span> <span m="1492630">of,</span> <span m="1493070">a</span>
  <span m="1493330">couple</span> <span m="1493780">of,</span> <span
  m="1493930">this</span> <span m="1494210">type</span> <span
  m="1494580">would</span> <span m="1494700">be,</span> <span
  m="1495520">let's</span> <span m="1495720">see.</span> <span
  m="1496800">I</span> <span m="1496880">should</span> <span
  m="1497270">do</span> <span m="1497740">at</span> <span
  m="1497850">least</span> <span m="1498980">this</span> <span
  m="1499330">one</span> <span m="1499620">here,</span> <span m="1500600">square
  root</span> <span m="1501030">of</span> <span m="1501110">1</span> <span
  m="1501320">- x^2.</span> <span m="1504150">This</span> <span
  m="1504370">is</span> <span m="1504480">another</span> <span
  m="1504770">notation,</span> <span m="1505340">by</span> <span
  m="1505480">the</span> <span m="1505580">way,</span> <span
  m="1505680">which</span> <span m="1505850">is</span> <span
  m="1505970">perfectly</span> <span m="1506480">acceptable.</span> <span
  m="1507240">Notice</span> <span m="1507550">I've</span> <span
  m="1507650">put</span> <span m="1507970">the</span> <span
  m="1508350">dx</span> <span m="1508710">in</span> <span m="1508810">the</span>
  <span m="1508890">numerator</span> <span m="1510280">and</span> <span
  m="1510380">the</span> <span m="1510470">function</span> <span
  m="1510870">in</span> <span m="1510950">the</span> <span
  m="1511040">denominator</span> <span m="1511690">here.</span> <span
  m="1513400">So</span> <span m="1513600">this</span> <span
  m="1513860">one</span> <span m="1514100">turns</span> <span
  m="1514420">out</span> <span m="1514620">to</span> <span m="1514720">be</span>
  <span m="1514850">sin^(-1)</span> <span m="1516280">x.</span> <span
  m="1518880">And,</span> <span m="1519120">finally,</span> <span
  m="1522610">let's</span> <span m="1522870">see.</span> <span
  m="1523710">About</span> <span m="1524670">the</span> <span
  m="1524770">integral</span> <span m="1525170">of</span> <span
  m="1525350">dx</span> <span m="1526410">/</span> <span m="1526860">(1 +
  x^2).</span> <span m="1528470">That</span> <span m="1528670">one is</span>
  <span m="1530450">tan^(-1) x.</span></p><p><span m="1541320">For</span> <span
  m="1541520">a</span> <span m="1541570">little</span> <span
  m="1541810">while,</span> <span m="1542570">because</span> <span
  m="1543000">you're</span> <span m="1543140">reading</span> <span
  m="1543420">these</span> <span m="1543540">things</span> <span
  m="1543770">backwards</span> <span m="1544150">and</span> <span
  m="1544260">forwards,</span> <span m="1544690">you'll</span> <span
  m="1544860">find</span> <span m="1545110">this</span> <span
  m="1545260">happens</span> <span m="1545630">to</span> <span
  m="1545740">you</span> <span m="1545840">on</span> <span
  m="1546030">exams.</span> <span m="1546970">It gets</span> <span
  m="1547270">slightly</span> <span m="1547700">worse</span> <span
  m="1548050">for</span> <span m="1548220">a</span> <span
  m="1548270">little</span> <span m="1548450">while.</span> <span
  m="1549540">You</span> <span m="1549820">will</span> <span
  m="1550980">antidifferentiate</span> <span m="1551900">when</span> <span
  m="1552010">you</span> <span m="1552100">meant</span> <span
  m="1552280">to</span> <span m="1552380">differentiate.</span> <span
  m="1553170">And</span> <span m="1553350">you'll</span> <span
  m="1553490">differentiate</span> <span m="1554150">when you're</span> <span
  m="1554620">meant</span> <span m="1554740">to</span> <span
  m="1554970">antidifferentiate.</span> <span m="1557230">Don't</span> <span
  m="1557530">get</span> <span m="1557750">too</span> <span
  m="1557960">frustrated</span> <span m="1558630">by</span> <span
  m="1558820">that.</span> <span m="1560190">But</span> <span
  m="1560750">eventually,</span> <span m="1562710">you'll</span> <span
  m="1562870">get</span> <span m="1563060">them</span> <span
  m="1564820">squared</span> <span m="1565070">away.</span> <span
  m="1565270">And</span> <span m="1565610">it</span> <span
  m="1565790">actually</span> <span m="1566230">helps</span> <span
  m="1566660">to</span> <span m="1566750">do</span> <span m="1566890">a</span>
  <span m="1566960">lot</span> <span m="1567170">of</span> <span
  m="1567600">practice</span> <span m="1568130">with</span> <span
  m="1571210">antidifferentiations,</span> <span m="1574420">or</span> <span
  m="1574750">integrations,</span> <span m="1575410">as</span> <span
  m="1575610">they're</span> <span m="1575750">sometimes</span> <span
  m="1576270">called.</span> <span m="1577100">Because</span> <span
  m="1577390">that</span> <span m="1577590">will</span> <span
  m="1577860">solidify</span> <span m="1578080">your</span> <span
  m="1579000">remembering</span> <span m="1579790">all</span> <span
  m="1580010">of the</span> <span m="1580150">differentiation</span> <span
  m="1580900">formulas.</span> <span m="1585820">So,</span> <span
  m="1586550">last</span> <span m="1587270">bit</span> <span
  m="1588300">of</span> <span m="1588500">information</span> <span
  m="1589900">that</span> <span m="1590040">I</span> <span
  m="1590080">want</span> <span m="1590390">to</span> <span
  m="1590830">emphasize</span> <span m="1591690">before</span> <span
  m="1591990">we</span> <span m="1592100">go</span> <span m="1592250">on</span>
  <span m="1592440">some</span> <span m="1592580">more</span> <span
  m="1592730">complicated</span> <span m="1593380">examples</span> <span
  m="1597670">is</span> <span m="1597930">this.</span> <span
  m="1604130">It's</span> <span m="1604410">obvious</span> <span
  m="1605270">because</span> <span m="1605740">the</span> <span
  m="1606620">derivative</span> <span m="1607040">of</span> <span
  m="1607140">a</span> <span m="1607210">constant</span> <span
  m="1607720">is</span> <span m="1607820">0.</span> <span
  m="1609250">That</span> <span m="1610180">the</span> <span
  m="1612570">antiderivative</span> <span m="1613220">is</span> <span
  m="1613390">ambiguous</span> <span m="1614110">up</span> <span
  m="1614280">to</span> <span m="1614390">a</span> <span
  m="1614460">constant.</span> <span m="1615330">But</span> <span
  m="1615560">it's</span> <span m="1615820">very</span> <span
  m="1616110">important</span> <span m="1616480">to</span> <span
  m="1616560">realize</span> <span m="1616920">that</span> <span
  m="1617030">this</span> <span m="1617650">is</span> <span
  m="1617780">the</span> <span m="1617970">only</span> <span
  m="1619310">ambiguity</span> <span m="1619960">that</span> <span
  m="1620130">there</span> <span m="1620310">is.</span></p><p><span
  m="1621410">So</span> <span m="1621710">the</span> <span
  m="1621990">last</span> <span m="1622390">thing</span> <span
  m="1622530">that</span> <span m="1622670">I</span> <span
  m="1622740">want</span> <span m="1623310">to</span> <span
  m="1623830">tell</span> <span m="1624030">you</span> <span m="1624150">about
  is</span> <span m="1624630">uniqueness</span> <span m="1629000">of</span>
  <span m="1629470">antiderivatives</span> <span m="1636000">up</span> <span
  m="1636240">to</span> <span m="1636400">a</span> <span
  m="1636510">constant.</span> <span m="1644070">The</span> <span
  m="1644310">theorem</span> <span m="1644660">is</span> <span
  m="1644810">the</span> <span m="1644950">following.</span> <span
  m="1650290">The theorem</span> <span m="1650470">is</span> <span
  m="1650800">if</span> <span m="1652750">F'</span> <span m="1653510">=</span>
  <span m="1653920">G',</span> <span m="1656760">then</span> <span
  m="1658960">F</span> <span m="1659820">equals</span> <span
  m="1660420">G--</span> <span m="1661230">so</span> <span
  m="1661510">F(x)</span> <span m="1661680">equals</span> <span
  m="1661740">G(x)</span> <span m="1662400">plus</span> <span
  m="1662710">a</span> <span m="1662970">constant.</span> <span
  m="1668420">But</span> <span m="1668570">that</span> <span
  m="1668640">means,</span> <span m="1668950">not</span> <span
  m="1669210">only</span> <span m="1670240">that</span> <span
  m="1672010">these</span> <span m="1672290">are</span> <span
  m="1673220">antiderivatives,</span> <span m="1674050">all</span> <span
  m="1674270">these</span> <span m="1674470">things</span> <span
  m="1674700">with</span> <span m="1674830">these</span> <span
  m="1675000">plus</span> <span m="1675600">c's</span> <span
  m="1675810">are</span> <span m="1676110">antiderivatives.</span> <span
  m="1676640">But</span> <span m="1676860">these</span> <span
  m="1677040">are</span> <span m="1677100">the</span> <span
  m="1677300">only</span> <span m="1677690">ones.</span> <span
  m="1682080">Which</span> <span m="1682280">is</span> <span
  m="1682390">very</span> <span m="1682630">reassuring.</span> <span
  m="1683300">And</span> <span m="1683440">that's</span> <span
  m="1683730">a</span> <span m="1683890">kind</span> <span m="1684230">of</span>
  <span m="1684310">uniqueness,</span> <span m="1684810">although</span> <span
  m="1685180">its</span> <span m="1685300">uniqueness</span> <span
  m="1685820">up</span> <span m="1686020">to</span> <span m="1686210">a</span>
  <span m="1686270">constant, it's</span> <span m="1686830">acceptable</span>
  <span m="1687440">to</span> <span m="1687620">us.</span> <span
  m="1689660">Now,</span> <span m="1689890">the</span> <span
  m="1690030">proof</span> <span m="1690360">of</span> <span
  m="1690470">this</span> <span m="1690820">is</span> <span
  m="1691030">very</span> <span m="1691380">quick.</span> <span
  m="1692850">But</span> <span m="1693120">this</span> <span
  m="1693290">is</span> <span m="1693430">a</span> <span
  m="1693520">fundamental</span> <span m="1694380">fact.</span> <span
  m="1698250">The</span> <span m="1698340">proof</span> <span
  m="1698590">is</span> <span m="1698730">the</span> <span
  m="1698820">following.</span> <span m="1699340">If</span> <span
  m="1700800">F'</span> <span m="1701040">=</span> <span m="1702270">G',</span>
  <span m="1705740">then</span> <span m="1707390">if</span> <span
  m="1707500">you</span> <span m="1707560">take</span> <span
  m="1707870">the</span> <span m="1707960">difference</span> <span
  m="1708630">between</span> <span m="1709040">the</span> <span
  m="1709130">two</span> <span m="1709340">functions,</span> <span
  m="1711120">its</span> <span m="1711620">derivative,</span> <span
  m="1711910">which</span> <span m="1712090">of</span> <span
  m="1712210">course</span> <span m="1712470">is</span> <span
  m="1712680">F'</span> <span m="1713190">-</span> <span m="1713520">G',</span>
  <span m="1715100">is equal to</span> <span m="1715540">0.</span> <span
  m="1720110">Hence,</span> <span m="1723550">F(x)</span> <span
  m="1724440">-</span> <span m="1724840">G(x)</span> <span m="1726570">is</span>
  <span m="1726780">a</span> <span m="1726840">constant.</span> <span
  m="1735300">Now, this</span> <span m="1735580">is</span> <span
  m="1735770">a</span> <span m="1736570">key</span> <span
  m="1736890">fact.</span> <span m="1738940">Very</span> <span
  m="1739180">important</span> <span m="1739540">fact.</span> <span
  m="1739870">We</span> <span m="1740000">deduced</span> <span
  m="1740590">it</span> <span m="1741100">last</span> <span
  m="1741520">time</span> <span m="1741980">from</span> <span
  m="1742260">the</span> <span m="1742330">mean</span> <span
  m="1742580">value</span> <span m="1743190">theorem.</span> <span
  m="1743840">It's</span> <span m="1744080">not</span> <span
  m="1744340">a</span> <span m="1744400">small</span> <span
  m="1744800">matter.</span> <span m="1745370">It's a very,</span> <span
  m="1745860">very</span> <span m="1746110">important</span> <span
  m="1746550">thing.</span> <span m="1746850">It's</span> <span
  m="1747090">the</span> <span m="1747170">basis</span> <span
  m="1747700">for</span> <span m="1747870">calculus.</span> <span
  m="1748690">It's</span> <span m="1748910">the</span> <span
  m="1748970">reason</span> <span m="1749210">why</span> <span
  m="1749320">calculus</span> <span m="1749850">make</span> <span
  m="1750090">sense.</span> <span m="1751550">If</span> <span
  m="1751780">we</span> <span m="1751890">didn't</span> <span
  m="1752210">have</span> <span m="1752960">the</span> <span
  m="1753070">fact</span> <span m="1753350">that</span> <span
  m="1753450">the</span> <span m="1753550">derivative</span> <span
  m="1753960">is</span> <span m="1754120">0</span> <span
  m="1754270">implied</span> <span m="1754620">that</span> <span
  m="1754720">the</span> <span m="1754800">function</span> <span
  m="1755160">was</span> <span m="1755555">constant,</span> <span
  m="1755950">we</span> <span m="1756070">would</span> <span
  m="1756240">be</span> <span m="1758150">done.</span> <span
  m="1758890">We</span> <span m="1759030">would</span> <span
  m="1759160">have--</span> <span m="1760360">Calculus</span> <span
  m="1760890">would</span> <span m="1761080">be</span> <span
  m="1761240">just</span> <span m="1761650">useless</span> <span
  m="1762310">for</span> <span m="1762590">us.</span> <span
  m="1763080">The</span> <span m="1763250">point</span> <span
  m="1763500">is,</span> <span m="1763620">the</span> <span
  m="1763700">rate</span> <span m="1763910">of</span> <span m="1764000">change
  is</span> <span m="1764470">supposed</span> <span m="1764840">to</span> <span
  m="1764920">determine</span> <span m="1765810">the</span> <span
  m="1766050">function</span> <span m="1767100">up</span> <span
  m="1767330">to</span> <span m="1767430">this</span> <span
  m="1767810">starting</span> <span m="1768310">value.</span> <span
  m="1769650">So</span> <span m="1769850">this</span> <span
  m="1770290">conclusion</span> <span m="1770820">is</span> <span
  m="1770950">very</span> <span m="1771230">important.</span> <span
  m="1772330">And</span> <span m="1772610">we</span> <span
  m="1772760">already</span> <span m="1773100">checked</span> <span
  m="1773470">it</span> <span m="1773600">last</span> <span
  m="1773960">time,</span> <span m="1774230">this</span> <span
  m="1774380">conclusion.</span> <span m="1775010">And</span> <span
  m="1775320">now</span> <span m="1775510">just</span> <span
  m="1775800">by</span> <span m="1775970">algebra,</span> <span
  m="1776780">I</span> <span m="1776900">can</span> <span
  m="1777070">rearrange</span> <span m="1777710">this</span> <span
  m="1778320">to</span> <span m="1778450">say</span> <span
  m="1779310">that</span> <span m="1781260">F(x)</span> <span m="1782230">is
  equal to</span> <span m="1783920">G(x)</span> <span m="1784620">plus a
  constant.</span></p><p><span m="1803340">Now,</span> <span
  m="1804540">maybe</span> <span m="1804860">I</span> <span
  m="1804910">should</span> <span m="1805070">leave</span> <span
  m="1805320">differentials</span> <span m="1805920">up</span> <span
  m="1806170">here.</span> <span m="1807530">Because</span> <span m="1810260">I
  want</span> <span m="1810540">to</span> <span m="1810730">illustrate--</span>
  <span m="1820970">So</span> <span m="1821120">let's</span> <span
  m="1821390">go on</span> <span m="1821640">to</span> <span
  m="1821770">some</span> <span m="1821920">trickier,</span> <span
  m="1822460">slightly</span> <span m="1822810">trickier,</span> <span
  m="1823260">integrals.</span> <span m="1829050">Here's</span> <span
  m="1829390">an</span> <span m="1829460">example.</span> <span
  m="1835740">The</span> <span m="1836110">integral</span> <span
  m="1836220">of,</span> <span m="1837330">say,</span> <span
  m="1839540">x^3</span> <span m="1840770">(x^4 + 2)^5</span> <span
  m="1841680">dx.</span> <span m="1851210">This</span> <span
  m="1851540">is</span> <span m="1851950">a</span> <span
  m="1852180">function</span> <span m="1852680">which</span> <span
  m="1852880">you</span> <span m="1853080">actually</span> <span
  m="1853480">do</span> <span m="1853750">know</span> <span
  m="1853880">how</span> <span m="1854090">to</span> <span
  m="1854270">integrate,</span> <span m="1855010">because</span> <span
  m="1855710">we</span> <span m="1856030">already</span> <span
  m="1856500">have</span> <span m="1856740">a</span> <span
  m="1856810">formula</span> <span m="1857260">for</span> <span
  m="1857410">all</span> <span m="1857650">powers.</span> <span
  m="1859840">Namely,</span> <span m="1860410">the</span> <span
  m="1860600">integral</span> <span m="1861290">of</span> <span
  m="1861370">x^a</span> <span m="1862510">is</span> <span
  m="1862700">equal</span> <span m="1862930">to</span> <span
  m="1863010">this.</span> <span m="1863280">And</span> <span
  m="1863410">even</span> <span m="1863610">if</span> <span
  m="1863730">it</span> <span m="1863850">were a</span> <span
  m="1864010">negative</span> <span m="1864440">power,</span> <span
  m="1864690">we</span> <span m="1864820">could</span> <span
  m="1864960">do</span> <span m="1865130">it.</span> <span m="1866520">So</span>
  <span m="1867560">it's</span> <span m="1867700">OK.</span> <span
  m="1868630">On</span> <span m="1868980">the</span> <span
  m="1869070">other</span> <span m="1869290">hand,</span> <span
  m="1869930">to</span> <span m="1870160">expand</span> <span
  m="1870880">the</span> <span m="1870960">5th</span> <span
  m="1871380">power</span> <span m="1871770">here</span> <span
  m="1872600">is</span> <span m="1872860">quite</span> <span
  m="1873200">a</span> <span m="1873240">mess.</span> <span
  m="1874290">And</span> <span m="1874560">this</span> <span
  m="1874680">is</span> <span m="1875070">just</span> <span m="1875320">a</span>
  <span m="1875420">very,</span> <span m="1875740">very</span> <span
  m="1875980">bad</span> <span m="1876290">idea.</span> <span
  m="1878480">There's</span> <span m="1878800">another</span> <span
  m="1879370">trick</span> <span m="1879760">for</span> <span
  m="1879940">doing</span> <span m="1880240">this</span> <span
  m="1880470">that</span> <span m="1880580">evaluates</span> <span
  m="1881150">this</span> <span m="1881320">much</span> <span
  m="1881670">more</span> <span m="1881890">efficiently.</span> <span
  m="1883060">And</span> <span m="1883950">it's</span> <span
  m="1884330">the</span> <span m="1884640">only</span> <span
  m="1885330">device</span> <span m="1886480">that</span> <span
  m="1886650">we're</span> <span m="1886790">going</span> <span
  m="1886950">to</span> <span m="1887040">learn</span> <span
  m="1887340">now</span> <span m="1887750">for</span> <span
  m="1888900">integrating.</span> <span m="1891550">Integration</span> <span
  m="1892160">actually</span> <span m="1892480">is</span> <span
  m="1892780">much</span> <span m="1893660">harder</span> <span
  m="1894360">than</span> <span m="1894570">differentiation,</span> <span
  m="1896690">symbolically.</span> <span m="1897520">It's</span> <span
  m="1897690">quite</span> <span m="1898180">difficult.</span> <span
  m="1899090">And</span> <span m="1899760">occasionally</span> <span
  m="1900750">impossible.</span> <span m="1902610">And</span> <span
  m="1902900">so</span> <span m="1903710">we</span> <span
  m="1903840">have</span> <span m="1904020">to</span> <span
  m="1904510">go</span> <span m="1904660">about</span> <span
  m="1904900">it</span> <span m="1905000">gently.</span> <span
  m="1905550">But</span> <span m="1905780">for</span> <span
  m="1905910">the</span> <span m="1906000">purposes</span> <span
  m="1906670">of</span> <span m="1906890">this</span> <span
  m="1907130">unit,</span> <span m="1907450">we're</span> <span m="1907730">only
  going</span> <span m="1907880">to</span> <span m="1908250">use</span> <span
  m="1908510">one</span> <span m="1908880">method.</span> <span
  m="1910110">Which</span> <span m="1910360">is</span> <span
  m="1910450">very</span> <span m="1910650">good.</span> <span
  m="1910860">That</span> <span m="1911040">means</span> <span
  m="1911230">whenever</span> <span m="1911600">you</span> <span
  m="1911750">see</span> <span m="1911970">an</span> <span
  m="1912050">integral,</span> <span m="1912460">either</span> <span
  m="1912670">you'll</span> <span m="1912830">be</span> <span
  m="1912940">able</span> <span m="1913120">to</span> <span
  m="1913700">divine</span> <span m="1914430">immediately</span> <span
  m="1915380">what</span> <span m="1915590">the</span> <span m="1915720">answer
  is,</span> <span m="1916180">or you'll</span> <span m="1916550">use</span>
  <span m="1916820">this</span> <span m="1917060">method.</span> <span
  m="1917830">So</span> <span m="1918010">this</span> <span
  m="1918200">is</span> <span m="1918340">it.</span> <span
  m="1919090">The</span> <span m="1919230">trick</span> <span
  m="1919600">is</span> <span m="1919790">called</span> <span
  m="1920310">the</span> <span m="1920380">method</span> <span
  m="1920970">of</span> <span m="1921140">substitution.</span> <span
  m="1929470">And</span> <span m="1930110">it</span> <span m="1930840">is</span>
  <span m="1931000">tailor-made</span> <span m="1932480">for</span> <span
  m="1935370">notion</span> <span m="1935770">of</span> <span
  m="1935870">differentials.</span> <span m="1937860">So</span> <span
  m="1938240">tailor-made</span> <span m="1941850">for</span> <span
  m="1943560">differential</span> <span m="1944170">notation.</span></p><p><span
  m="1956510">The</span> <span m="1956650">idea</span> <span
  m="1957060">is</span> <span m="1957220">the</span> <span
  m="1957320">following.</span> <span m="1957840">I'm</span> <span
  m="1957980">going to</span> <span m="1958590">to</span> <span
  m="1958710">define</span> <span m="1958990">a</span> <span
  m="1959020">new</span> <span m="1959190">function.</span> <span
  m="1960260">And</span> <span m="1960560">it's</span> <span
  m="1960720">the</span> <span m="1961250">messiest</span> <span
  m="1961750">function</span> <span m="1962160">that</span> <span
  m="1962280">I</span> <span m="1962360">see</span> <span
  m="1962640">here.</span> <span m="1963200">It's</span> <span
  m="1963470">u</span> <span m="1964080">=</span> <span m="1965350">x^4</span>
  <span m="1966110">+</span> <span m="1966660">2.</span> <span
  m="1970290">And</span> <span m="1970690">then,</span> <span
  m="1972200">I'm</span> <span m="1972400">going</span> <span
  m="1972640">to</span> <span m="1972730">take</span> <span
  m="1973110">its</span> <span m="1973360">differential</span> <span
  m="1976000">and</span> <span m="1976170">what</span> <span
  m="1976300">I</span> <span m="1976360">discover,</span> <span
  m="1977110">if</span> <span m="1977250">I</span> <span m="1977330">look</span>
  <span m="1977550">at</span> <span m="1977620">its</span> <span
  m="1977780">formula,</span> <span m="1978840">and</span> <span
  m="1978980">the</span> <span m="1979070">rule</span> <span
  m="1979390">for</span> <span m="1979520">differentials,</span> <span
  m="1980860">which</span> <span m="1980990">is</span> <span
  m="1981100">right</span> <span m="1981330">here.</span> <span
  m="1982570">Its</span> <span m="1982750">formula</span> <span
  m="1983220">is</span> <span m="1983420">what?</span> <span
  m="1986070">4x^3</span> <span m="1987010">dx.</span> <span
  m="1990180">Now,</span> <span m="1990480">lo</span> <span
  m="1990750">and</span> <span m="1990880">behold</span> <span
  m="1991320">with</span> <span m="1991520">these</span> <span
  m="1991910">two</span> <span m="1992120">quantities,</span> <span
  m="1994000">I</span> <span m="1994140">can</span> <span
  m="1994340">substitute,</span> <span m="1995290">I</span> <span
  m="1995370">can</span> <span m="1995550">plug</span> <span
  m="1995950">in</span> <span m="1996450">to</span> <span
  m="1996580">this</span> <span m="1996810">integral.</span> <span
  m="1997940">And</span> <span m="1998240">I</span> <span
  m="1998330">will</span> <span m="1998730">simplify</span> <span
  m="1999470">it</span> <span m="1999830">considerably.</span> <span
  m="2001760">So</span> <span m="2002000">how</span> <span
  m="2002160">does</span> <span m="2002300">that</span> <span
  m="2002500">happen?</span> <span m="2003350">Well,</span> <span
  m="2004440">this</span> <span m="2004660">integral</span> <span
  m="2005270">is</span> <span m="2005430">the</span> <span
  m="2005520">same</span> <span m="2005940">thing</span> <span
  m="2012240">as,</span> <span m="2014200">well,</span> <span
  m="2014470">really</span> <span m="2014740">I</span> <span
  m="2014810">should</span> <span m="2015050">combine</span> <span
  m="2015450">it</span> <span m="2015540">the</span> <span
  m="2015730">other</span> <span m="2015960">way.</span> <span
  m="2016350">So</span> <span m="2016530">let</span> <span m="2016680">me</span>
  <span m="2016900">move</span> <span m="2017190">this</span> <span
  m="2017310">over.</span> <span m="2021420">So</span> <span
  m="2021550">there</span> <span m="2021700">are two</span> <span
  m="2021960">pieces</span> <span m="2022520">here.</span> <span
  m="2023340">And</span> <span m="2023780">this</span> <span m="2024050">one
  is</span> <span m="2024550">u^5.</span> <span m="2026440">And</span> <span
  m="2026800">this</span> <span m="2027060">one</span> <span
  m="2027460">is</span> <span m="2027700">1/4</span> <span
  m="2029380">du.</span> <span m="2034990">Now,</span> <span
  m="2035120">that</span> <span m="2035380">makes</span> <span
  m="2035720">it</span> <span m="2035970">the</span> <span
  m="2036090">integral</span> <span m="2036680">of</span> <span
  m="2037720">u^5</span> <span m="2039120">du</span> <span m="2040370">/</span>
  <span m="2040910">4.</span> <span m="2041840">And</span> <span
  m="2042020">that's</span> <span m="2042410">relatively</span> <span
  m="2043040">easy</span> <span m="2043400">to</span> <span
  m="2043550">integrate.</span> <span m="2044040">That</span> <span
  m="2044220">is</span> <span m="2044420">just</span> <span m="2044620">a</span>
  <span m="2044710">power.</span> <span m="2045460">So</span> <span
  m="2045720">let's</span> <span m="2045980">see.</span> <span
  m="2046410">It's</span> <span m="2048110">just</span> <span
  m="2048300">1/20</span> <span m="2049720">u</span> <span m="2049970">to</span>
  <span m="2050120">the--</span> <span m="2050330">whoops,</span> <span
  m="2051010">not</span> <span m="2051200">1/20.</span> <span
  m="2051250">The</span> <span m="2051740">antiderivative</span> <span
  m="2052440">of</span> <span m="2053440">u^5</span> <span m="2053770">is</span>
  <span m="2053940">u^6.</span> <span m="2055480">With</span> <span
  m="2055780">the</span> <span m="2055860">1/6,</span> <span
  m="2056920">so</span> <span m="2057250">it's</span> <span
  m="2057460">1/24</span> <span m="2059590">u^6</span> <span
  m="2059950">+</span> <span m="2063150">c.</span> <span m="2065480">Now,</span>
  <span m="2065910">that's</span> <span m="2066440">not</span> <span
  m="2066930">the</span> <span m="2067110">answer</span> <span
  m="2068180">to</span> <span m="2068310">the</span> <span
  m="2068400">question.</span> <span m="2069050">It's</span> <span
  m="2069250">almost</span> <span m="2069790">the</span> <span
  m="2069890">answer to</span> <span m="2070190">the</span> <span
  m="2070270">question.</span> <span m="2072260">Why</span> <span
  m="2072490">isn't</span> <span m="2072690">it</span> <span
  m="2072750">the</span> <span m="2072900">answer?</span> <span
  m="2073340">It</span> <span m="2073530">isn't</span> <span
  m="2073600">the</span> <span m="2073710">answer</span> <span
  m="2073990">because</span> <span m="2074420">now</span> <span
  m="2074660">the</span> <span m="2074810">answer's</span> <span
  m="2075120">expressed</span> <span m="2075490">in</span> <span
  m="2075580">terms</span> <span m="2075830">of</span> <span
  m="2075920">u.</span> <span m="2077480">Whereas</span> <span
  m="2078040">the</span> <span m="2078140">problem</span> <span
  m="2078520">was</span> <span m="2078780">posed</span> <span
  m="2079270">in</span> <span m="2079350">terms</span> <span
  m="2079630">of</span> <span m="2079710">this</span> <span
  m="2079850">variable</span> <span m="2080340">x.</span> <span
  m="2081750">So</span> <span m="2081960">we</span> <span
  m="2082120">must</span> <span m="2082750">change</span> <span
  m="2083230">back</span> <span m="2084180">to</span> <span
  m="2084340">our</span> <span m="2084540">variable</span> <span
  m="2085070">here.</span> <span m="2085960">And</span> <span
  m="2086280">we</span> <span m="2086390">do</span> <span
  m="2086550">that</span> <span m="2086920">just</span> <span
  m="2087160">by</span> <span m="2087300">writing</span> <span
  m="2087630">it</span> <span m="2087710">in.</span> <span m="2087990">So</span>
  <span m="2088170">it's</span> <span m="2088310">1/24</span> <span
  m="2090580">(x^4 + 2)^6</span> <span m="2094670">+</span> <span
  m="2095890">c.</span> <span m="2096190">And</span> <span
  m="2096350">this</span> <span m="2096500">is</span> <span
  m="2096630">the</span> <span m="2096770">end</span> <span
  m="2097380">of</span> <span m="2097530">the</span> <span
  m="2097620">problem.</span> <span m="2102120">Yeah,</span> <span
  m="2102480">question.</span></p><p><span m="2102990">STUDENT:
  [INAUDIBLE]</span></p><p><span m="2116350">PROFESSOR: The</span> <span
  m="2117280">question</span> <span m="2117360">is,</span> <span
  m="2117440">can</span> <span m="2117520">you</span> <span
  m="2117600">see</span> <span m="2117680">it</span> <span
  m="2117760">directly?</span> <span m="2119330">Yeah.</span> <span
  m="2120160">And</span> <span m="2120460">we're</span> <span m="2120600">going
  to</span> <span m="2120790">talk</span> <span m="2121060">about</span> <span
  m="2121340">that</span> <span m="2121530">in</span> <span
  m="2121670">just</span> <span m="2121950">one</span> <span
  m="2122120">second.</span> <span m="2123820">OK.</span></p><p><span
  m="2130290">Now,</span> <span m="2132340">I'm</span> <span m="2132480">going
  to</span> <span m="2132650">do</span> <span m="2133370">one</span> <span
  m="2133660">more</span> <span m="2133900">example</span> <span
  m="2135500">and</span> <span m="2135680">illustrate</span> <span
  m="2139560">this</span> <span m="2139760">method.</span> <span
  m="2144310">Here's</span> <span m="2144550">another</span> <span
  m="2144870">example. The</span> <span m="2145940">integral</span> <span
  m="2146640">of x dx</span> <span m="2148460">over</span> <span m="2148770">the
  square</span> <span m="2149210">root of</span> <span m="2149590">1 +</span>
  <span m="2149890">x^2.</span> <span m="2151430">Now,</span> <span
  m="2151620">here's</span> <span m="2151860">another</span> <span
  m="2152200">example.</span> <span m="2156610">Now,</span> <span
  m="2156740">the</span> <span m="2156840">method</span> <span
  m="2157120">of</span> <span m="2157230">substitution</span> <span
  m="2160060">leads</span> <span m="2160550">us</span> <span
  m="2161340">to</span> <span m="2161520">the</span> <span
  m="2161680">idea</span> <span m="2162090">u =</span> <span
  m="2163010">1</span> <span m="2163250">+ x^2.</span> <span
  m="2165190">du</span> <span m="2165360">=</span> <span m="2166100">2x</span>
  <span m="2166180">dx,</span> <span m="2168590">etc.</span> <span
  m="2171540">It</span> <span m="2171770">takes</span> <span
  m="2172040">about</span> <span m="2172330">as</span> <span
  m="2172440">long</span> <span m="2172700">as</span> <span
  m="2172820">this</span> <span m="2172980">other</span> <span
  m="2173610">problem</span> <span m="2174030">did.</span> <span
  m="2174450">To</span> <span m="2174590">figure</span> <span
  m="2174900">out</span> <span m="2175090">what's</span> <span
  m="2175280">going</span> <span m="2175530">on.</span> <span
  m="2175720">It's</span> <span m="2175890">a</span> <span
  m="2175950">very</span> <span m="2176180">similar</span> <span
  m="2176660">sort</span> <span m="2176910">of</span> <span
  m="2177010">thing.</span> <span m="2177440">You</span> <span
  m="2177650">end</span> <span m="2177760">up</span> <span
  m="2177870">integrating</span> <span m="2178890">u^(-1/2).</span> <span
  m="2180870">It</span> <span m="2181000">leads</span> <span m="2181500">to
  the</span> <span m="2182130">integral</span> <span m="2182690">of</span> <span
  m="2182880">u^(-1/2)</span> <span m="2183030">du.</span> <span
  m="2188350">Is</span> <span m="2188820">everybody</span> <span
  m="2189570">seeing</span> <span m="2189970">where</span> <span
  m="2190150">this...?</span> <span m="2191630">However,</span> <span
  m="2192440">there</span> <span m="2192680">is</span> <span
  m="2192810">a</span> <span m="2193250">slightly</span> <span
  m="2193790">better</span> <span m="2194110">method.</span> <span
  m="2197540">So</span> <span m="2199730">recommended</span> <span
  m="2200360">method.</span> <span m="2206070">And</span> <span
  m="2207260">I</span> <span m="2208270">call</span> <span
  m="2208550">this</span> <span m="2208780">method</span> <span
  m="2209780">advanced</span> <span m="2210450">guessing.</span> <span
  m="2219250">What</span> <span m="2219520">advanced</span> <span
  m="2219930">guessing</span> <span m="2220310">means</span> <span
  m="2220780">is</span> <span m="2221190">that</span> <span
  m="2221340">you've</span> <span m="2221500">done</span> <span
  m="2221670">enough</span> <span m="2221910">of</span> <span
  m="2221980">these</span> <span m="2222150">problems</span> <span
  m="2222450">that</span> <span m="2222560">you</span> <span
  m="2222660">can</span> <span m="2222770">see</span> <span
  m="2223330">two</span> <span m="2223490">steps</span> <span
  m="2223880">ahead.</span> <span m="2224750">And</span> <span
  m="2225030">you</span> <span m="2225120">know</span> <span
  m="2225240">what's</span> <span m="2225740">going</span> <span
  m="2225980">to</span> <span m="2226040">happen.</span> <span
  m="2228030">So</span> <span m="2228240">the</span> <span
  m="2228350">advanced</span> <span m="2228760">guessing</span> <span
  m="2230070">leads</span> <span m="2230350">you</span> <span
  m="2230440">to</span> <span m="2230520">believe</span> <span m="2230860">that
  here</span> <span m="2231080">you</span> <span m="2231210">had</span> <span
  m="2231430">a</span> <span m="2231480">power</span> <span
  m="2232520">-1/2,</span> <span m="2233110">here</span> <span
  m="2233230">you</span> <span m="2233350">have</span> <span
  m="2233530">the</span> <span m="2233630">differential</span> <span
  m="2234290">of</span> <span m="2234370">the</span> <span
  m="2234480">thing.</span> <span m="2234650">So</span> <span
  m="2234790">it's</span> <span m="2234900">going to</span> <span
  m="2235090">work</span> <span m="2235330">out</span> <span
  m="2235550">somehow.</span> <span m="2236790">And</span> <span
  m="2237090">the</span> <span m="2237170">advanced</span> <span
  m="2237550">guessing</span> <span m="2237990">allows</span> <span
  m="2238320">you</span> <span m="2238420">to</span> <span
  m="2238490">guess</span> <span m="2239000">that</span> <span
  m="2239130">the</span> <span m="2239320">answer</span> <span
  m="2239670">should</span> <span m="2239920">be</span> <span
  m="2240050">something</span> <span m="2240500">like</span> <span
  m="2240770">this.</span> <span m="2242810">(1</span> <span
  m="2243080">+</span> <span m="2243230">x^2)^(1/2).</span> <span
  m="2246050">So</span> <span m="2246280">this</span> <span
  m="2246450">is</span> <span m="2246580">your</span> <span
  m="2246940">advanced</span> <span m="2247440">guess.</span> <span
  m="2247800">And</span> <span m="2247980">now</span> <span
  m="2248100">you</span> <span m="2248260">just</span> <span
  m="2248580">differentiate</span> <span m="2249320">it,</span> <span
  m="2249410">and</span> <span m="2249540">see</span> <span
  m="2249770">whether</span> <span m="2249990">it</span> <span
  m="2250090">works.</span> <span m="2251670">Well,</span> <span
  m="2251940">here</span> <span m="2252180">it</span> <span
  m="2252270">is.</span> <span m="2252550">It's</span> <span
  m="2252850">1/2</span> <span m="2253900">(1 + x^2)^(-1/2)</span> <span
  m="2254270">2x,</span> <span m="2257700">that's</span> <span
  m="2258260">the</span> <span m="2258360">chain</span> <span
  m="2258890">rule</span> <span m="2259050">here.</span> <span
  m="2259330">Which,</span> <span m="2259680">sure</span> <span
  m="2259890">enough,</span> <span m="2260970">gives</span> <span
  m="2261260">you</span> <span m="2261660">x</span> <span
  m="2262060">over</span> <span m="2262700">square</span> <span m="2263080">root
  of 1</span> <span m="2263320">+</span> <span m="2263590">x^2.</span> <span
  m="2264770">So</span> <span m="2264960">we're</span> <span
  m="2265100">done.</span> <span m="2265480">And</span> <span
  m="2265660">so</span> <span m="2265800">the</span> <span
  m="2265940">answer</span> <span m="2266950">is</span> <span
  m="2267900">square</span> <span m="2268380">root of (1</span> <span
  m="2268620">+</span> <span m="2268830">x^2)</span> <span m="2268980">+</span>
  <span m="2269770">c.</span></p><p><span m="2276960">Let</span> <span
  m="2277140">me</span> <span m="2278030">illustrate</span> <span
  m="2278700">this</span> <span m="2279240">further</span> <span
  m="2280810">with</span> <span m="2280930">another</span> <span
  m="2281240">example.</span> <span m="2282160">I</span> <span
  m="2282250">strongly</span> <span m="2282820">recommend that</span> <span
  m="2283450">you</span> <span m="2283540">do</span> <span
  m="2283780">this,</span> <span m="2286010">but</span> <span
  m="2286320">you</span> <span m="2286440">have</span> <span
  m="2286630">to</span> <span m="2286720">get</span> <span
  m="2286920">used</span> <span m="2287240">to</span> <span
  m="2287350">it.</span> <span m="2289270">So</span> <span
  m="2289400">here's</span> <span m="2289660">another</span> <span
  m="2289950">example.</span> <span m="2291490">e^(6x)</span> <span
  m="2291910">dx.</span> <span m="2298900">My</span> <span
  m="2299200">advanced</span> <span m="2299740">guess</span> <span
  m="2300880">is</span> <span m="2304010">e^(6x).</span> <span
  m="2306360">And</span> <span m="2306620">if</span> <span m="2306750">I</span>
  <span m="2306850">check,</span> <span m="2308830">when</span> <span
  m="2308960">I</span> <span m="2309020">differentiate</span> <span
  m="2309830">it,</span> <span m="2310020">I</span> <span m="2310250">get</span>
  <span m="2310660">6e^(6x).</span> <span m="2313180">That's</span> <span
  m="2313510">the</span> <span m="2313600">derivative.</span> <span
  m="2315020">And</span> <span m="2315390">so</span> <span m="2315540">I</span>
  <span m="2315660">know</span> <span m="2315870">that</span> <span
  m="2316010">the</span> <span m="2316200">answer,</span> <span
  m="2317610">so</span> <span m="2317840">now</span> <span m="2318240">I</span>
  <span m="2318310">know</span> <span m="2318460">what</span> <span
  m="2318580">the</span> <span m="2318700">answer is.</span> <span
  m="2319030">It's</span> <span m="2319240">1/6</span> <span
  m="2320830">e^(6x)</span> <span m="2321910">+ c.</span> <span
  m="2326300">Now,</span> <span m="2326790">OK,</span> <span
  m="2327110">you</span> <span m="2327310">could,</span> <span
  m="2328590">it's</span> <span m="2329260">also</span> <span
  m="2332500">OK,</span> <span m="2333480">but</span> <span
  m="2333680">slow,</span> <span m="2334510">to</span> <span
  m="2337200">use</span> <span m="2337660">a</span> <span
  m="2337750">substitution,</span> <span m="2339070">to</span> <span
  m="2339180">use</span> <span m="2339510">u =</span> <span
  m="2340160">6x.</span> <span m="2342550">Then</span> <span
  m="2342870">you're</span> <span m="2342980">going</span> <span
  m="2343240">to</span> <span m="2343310">get</span> <span m="2344630">du</span>
  <span m="2344960">=</span> <span m="2345860">6dx,</span> <span
  m="2346450">dot, dot, dot.</span> <span m="2347920">It's</span> <span
  m="2348070">going to</span> <span m="2348270">work,</span> <span
  m="2349380">it's</span> <span m="2349610">just</span> <span
  m="2349850">a</span> <span m="2349920">waste</span> <span
  m="2350240">of</span> <span m="2350390">time.</span></p><p><span
  m="2363220">Well,</span> <span m="2363490">I'm</span> <span m="2363630">going
  to</span> <span m="2363800">give</span> <span m="2363980">you</span> <span
  m="2364100">a</span> <span m="2364140">couple</span> <span
  m="2364430">more</span> <span m="2364620">examples.</span> <span
  m="2366760">So</span> <span m="2366880">how</span> <span
  m="2367030">about</span> <span m="2367290">this</span> <span
  m="2367540">one.</span> <span m="2373560">x</span> <span
  m="2374090">e^(-x^2)</span> <span m="2374780">dx.</span> <span
  m="2381340">What's</span> <span m="2381730">the</span> <span
  m="2381810">guess?</span> <span m="2385600">Anybody</span> <span
  m="2385950">have</span> <span m="2386110">a</span> <span
  m="2386150">guess?</span> <span m="2391270">Well,</span> <span m="2391480">you
  could</span> <span m="2391740">also</span> <span m="2392280">correct.
  So</span> <span m="2392680">I</span> <span m="2392740">don't</span> <span
  m="2392900">want</span> <span m="2393090">you</span> <span
  m="2393150">to</span> <span m="2393240">bother -</span> <span
  m="2393810">yeah,</span> <span m="2394100">go</span> <span
  m="2394230">ahead.</span></p><p><span m="2394420">STUDENT:
  [INAUDIBLE]</span></p><p><span m="2397320">PROFESSOR: Yeah,</span> <span
  m="2397500">so</span> <span m="2397640">you're</span> <span
  m="2397800">already</span> <span m="2398080">one</span> <span
  m="2398380">step</span> <span m="2398640">ahead</span> <span
  m="2398880">of</span> <span m="2398950">me.</span> <span
  m="2399120">Because</span> <span m="2399390">this</span> <span
  m="2399520">is</span> <span m="2399690">too</span> <span
  m="2399910">easy.</span> <span m="2402050">When</span> <span
  m="2402280">they</span> <span m="2402360">get</span> <span
  m="2402490">more</span> <span m="2402690">complicated,</span> <span
  m="2403710">you</span> <span m="2403900">just</span> <span m="2404110">want
  to</span> <span m="2404290">make</span> <span m="2404550">this</span> <span
  m="2405260">guess</span> <span m="2405500">here.</span> <span
  m="2405690">So</span> <span m="2406410">various</span> <span
  m="2406720">people</span> <span m="2407000">have</span> <span
  m="2407140">said</span> <span m="2407280">1/2,</span> <span
  m="2408340">and</span> <span m="2408470">they</span> <span
  m="2408560">understand</span> <span m="2408990">that</span> <span
  m="2409060">there's</span> <span m="2409230">1/2</span> <span
  m="2409570">going</span> <span m="2409790">here.</span> <span
  m="2410050">But</span> <span m="2410170">let</span> <span
  m="2410290">me</span> <span m="2410360">just</span> <span
  m="2410570">show</span> <span m="2410790">you</span> <span
  m="2410920">what</span> <span m="2411080">happens,</span> <span
  m="2412330">OK?</span> <span m="2413890">If</span> <span
  m="2414060">you</span> <span m="2414150">make</span> <span
  m="2414350">this</span> <span m="2414570">guess</span> <span
  m="2415060">and</span> <span m="2415240">you</span> <span
  m="2415320">differentiate</span> <span m="2416110">it,</span> <span
  m="2419140">what</span> <span m="2419410">you</span> <span
  m="2419550">get</span> <span m="2419860">here</span> <span
  m="2420220">is</span> <span m="2422400">e^(-x^2)</span> <span
  m="2423230">times</span> <span m="2423660">the</span> <span
  m="2423770">derivative</span> <span m="2423940">of</span> <span
  m="2424380">negative</span> <span m="2424720">2x,</span> <span
  m="2425150">so</span> <span m="2425300">that's</span> <span
  m="2426270">-2x.</span> <span m="2428130">x^2,</span> <span
  m="2428460">so</span> <span m="2428890">it's</span> <span
  m="2429260">-2x.</span> <span m="2430400">So</span> <span
  m="2430630">now</span> <span m="2430800">you</span> <span
  m="2430970">see</span> <span m="2431190">that</span> <span
  m="2431330">you're</span> <span m="2431540">off</span> <span
  m="2431970">by</span> <span m="2432170">a</span> <span
  m="2432260">factor</span> <span m="2432840">of</span> <span
  m="2433010">not</span> <span m="2433420">2,</span> <span
  m="2434350">but</span> <span m="2435210">-2.</span> <span m="2437970">So
  a</span> <span m="2438570">number</span> <span m="2438880">of</span> <span
  m="2438990">you</span> <span m="2439120">were</span> <span
  m="2439280">saying</span> <span m="2439640">that.</span> <span
  m="2439820">So</span> <span m="2439950">the</span> <span
  m="2440240">answer</span> <span m="2440560">is</span> <span
  m="2441530">-1/2</span> <span m="2442110">e^(-x^2)</span> <span
  m="2442400">+</span> <span m="2442850">c.</span> <span m="2446510">And</span>
  <span m="2446960">I</span> <span m="2447180">can</span> <span
  m="2447380">guarantee</span> <span m="2448050">you,</span> <span
  m="2448150">having</span> <span m="2448590">watched</span> <span
  m="2449090">this</span> <span m="2449440">on</span> <span
  m="2449650">various</span> <span m="2450150">problems,</span> <span
  m="2451430">that</span> <span m="2451720">people</span> <span
  m="2452190">who</span> <span m="2452400">don't</span> <span
  m="2453060">write</span> <span m="2453430">this</span> <span
  m="2453680">out</span> <span m="2455290">make</span> <span
  m="2455620">arithmetic</span> <span m="2456170">mistakes.</span> <span
  m="2457360">In</span> <span m="2457460">other</span> <span
  m="2457600">words,</span> <span m="2457880">there</span> <span
  m="2458140">is</span> <span m="2458570">a</span> <span
  m="2458710">limit</span> <span m="2459190">to</span> <span
  m="2459580">how</span> <span m="2459750">much</span> <span
  m="2460140">people</span> <span m="2460470">can</span> <span
  m="2460620">think</span> <span m="2460870">ahead</span> <span
  m="2460960">and</span> <span m="2461400">guess</span> <span
  m="2461690">correctly.</span> <span m="2462760">Another</span> <span
  m="2463110">way</span> <span m="2463270">of</span> <span
  m="2463380">doing</span> <span m="2463680">it,</span> <span
  m="2463780">by</span> <span m="2463980">the</span> <span
  m="2464100">way,</span> <span m="2464760">is</span> <span
  m="2464950">simply</span> <span m="2465280">to</span> <span
  m="2465400">write</span> <span m="2465810">this</span> <span
  m="2465990">thing</span> <span m="2466200">in</span> <span
  m="2466320">and</span> <span m="2466450">then</span> <span
  m="2466680">fix</span> <span m="2467180">the</span> <span
  m="2467300">coefficient</span> <span m="2467940">by</span> <span
  m="2468080">doing</span> <span m="2468360">the</span> <span
  m="2468440">differentiation</span> <span m="2469040">here.</span> <span
  m="2470160">That's</span> <span m="2470360">perfectly</span> <span
  m="2470750">OK</span> <span m="2471100">as</span> <span
  m="2471270">well.</span></p><p><span m="2474850">All right,</span> <span
  m="2475210">one</span> <span m="2475420">more</span> <span
  m="2476350">example.</span> <span m="2478920">We're</span> <span
  m="2479190">going</span> <span m="2479410">to</span> <span
  m="2479530">integrate</span> <span m="2480610">sin</span> <span
  m="2481100">x</span> <span m="2482350">cos</span> <span m="2483860">x
  dx.</span> <span m="2490840">So</span> <span m="2491180">what's</span> <span
  m="2491510">a</span> <span m="2491580">good</span> <span
  m="2492080">guess</span> <span m="2492950">for</span> <span
  m="2493180">this</span> <span m="2493480">one?</span></p><p><span
  m="2493750">STUDENT: [INAUDIBLE]</span></p><p><span m="2496520">PROFESSOR:
  Someone</span> <span m="2496800">suggesting</span> <span
  m="2497540">sin^2</span> <span m="2498280">x.</span> <span
  m="2498850">So</span> <span m="2499000">let's</span> <span
  m="2499290">try</span> <span m="2499630">that.</span> <span
  m="2501490">Over</span> <span m="2501810">2 -</span> <span
  m="2502460">well,</span> <span m="2503110">we'll</span> <span
  m="2503330">get</span> <span m="2503366">the</span> <span
  m="2503402">coefficient</span> <span m="2504030">in</span> <span
  m="2504110">just</span> <span m="2504350">a</span> <span
  m="2504400">second.</span> <span m="2505020">So</span> <span
  m="2505670">sin^2</span> <span m="2505970">x,</span> <span
  m="2506310">if</span> <span m="2506460">I</span> <span
  m="2506520">differentiate,</span> <span m="2507190">I</span> <span
  m="2507290">get</span> <span m="2507550">2</span> <span m="2508420">sin</span>
  <span m="2508830">x</span> <span m="2509650">cos</span> <span
  m="2510260">x.</span> <span m="2510970">So</span> <span
  m="2511160">that's</span> <span m="2511580">off</span> <span m="2511920">by
  a</span> <span m="2512080">factor</span> <span m="2512580">of 2.</span> <span
  m="2513380">So</span> <span m="2513540">the</span> <span
  m="2513680">answer</span> <span m="2514230">is</span> <span
  m="2515360">1/2</span> <span m="2516760">sin^2</span> <span
  m="2517510">x.</span> <span m="2524540">But</span> <span
  m="2524860">now</span> <span m="2529790">I</span> <span
  m="2529900">want</span> <span m="2530130">to</span> <span
  m="2530230">point</span> <span m="2530530">out</span> <span
  m="2530740">to</span> <span m="2530870">you</span> <span
  m="2532320">that</span> <span m="2534340">there's</span> <span
  m="2534560">another</span> <span m="2534820">way</span> <span
  m="2534950">of</span> <span m="2535050">doing</span> <span
  m="2535340">this</span> <span m="2535530">problem.</span> <span
  m="2537120">It's</span> <span m="2537410">also</span> <span
  m="2537890">true</span> <span m="2543650">that</span> <span
  m="2543820">if</span> <span m="2543920">you</span> <span
  m="2544040">differentiate</span> <span m="2546760">cos^2 x,</span> <span
  m="2551240">you</span> <span m="2551510">get</span> <span m="2551790">2</span>
  <span m="2552340">cos</span> <span m="2552970">x</span> <span
  m="2553740">(-sin x).</span> <span m="2558130">So</span> <span
  m="2558380">another</span> <span m="2558680">answer</span> <span
  m="2565550">is</span> <span m="2566700">that</span> <span
  m="2566860">the</span> <span m="2567010">integral</span> <span m="2567480">of
  sin</span> <span m="2567940">x</span> <span m="2569260">cos</span> <span
  m="2569620">x</span> <span m="2570410">dx is equal to</span> <span
  m="2573580">-1/2</span> <span m="2574580">cos^2</span> <span
  m="2575630">x</span> <span m="2576350">+ c.</span> <span m="2581840">So</span>
  <span m="2582030">what</span> <span m="2582660">is</span> <span
  m="2582870">going</span> <span m="2583150">on</span> <span
  m="2583530">here?</span> <span m="2583740">What's</span> <span
  m="2584100">the</span> <span m="2585980">problem</span> <span
  m="2586470">with</span> <span m="2586720">this?</span></p><p><span
  m="2586890">STUDENT: [INAUDIBLE]</span></p><p><span m="2591350">PROFESSOR:
  Pardon</span> <span m="2591550">me?</span></p><p><span m="2591660">STUDENT:
  [INAUDIBLE]</span></p><p><span m="2595060">PROFESSOR: Integrals</span> <span
  m="2596760">aren't</span> <span m="2597110">unique.</span> <span
  m="2598130">That's</span> <span m="2598460">part</span> <span
  m="2598790">of</span> <span m="2598850">the--</span> <span
  m="2599570">but</span> <span m="2599960">somehow</span> <span
  m="2600340">these</span> <span m="2600610">two</span> <span
  m="2600780">answers</span> <span m="2601130">still</span> <span
  m="2601390">have</span> <span m="2601570">to</span> <span
  m="2601660">be</span> <span m="2601770">the</span> <span
  m="2601880">same.</span></p><p><span m="2602320">STUDENT:
  [INAUDIBLE]</span></p><p><span m="2612910">PROFESSOR: OK.</span> <span
  m="2616050">What do you think?</span></p><p><span m="2616660">STUDENT:</span>
  <span m="2616835">If</span> <span m="2617010">you</span> <span
  m="2617185">add</span> <span m="2617360">them</span> <span
  m="2617535">together,</span> <span m="2617710">you</span> <span
  m="2617885">just</span> <span m="2618060">get</span> <span
  m="2618235">c.</span></p><p><span m="2618410">PROFESSOR: If</span> <span
  m="2618560">you</span> <span m="2618770">add them</span> <span
  m="2619150">together</span> <span m="2619460">you get</span> <span
  m="2620070">c.</span> <span m="2620900">Well,</span> <span
  m="2622020">actually,</span> <span m="2622840">that's</span> <span
  m="2623180">almost</span> <span m="2623730">right.</span> <span
  m="2624540">That's</span> <span m="2624750">not</span> <span
  m="2625030">what</span> <span m="2625150">you</span> <span
  m="2625260">want</span> <span m="2625440">to</span> <span
  m="2625500">do,</span> <span m="2625660">though.</span> <span
  m="2625810">You</span> <span m="2625950">don't</span> <span
  m="2626100">want</span> <span m="2626240">to</span> <span
  m="2626300">add</span> <span m="2626820">them.</span> <span
  m="2627620">You</span> <span m="2627730">want</span> <span
  m="2627870">to</span> <span m="2627930">subtract</span> <span
  m="2628650">them.</span> <span m="2630930">So</span> <span
  m="2631190">let's</span> <span m="2631460">see</span> <span
  m="2631650">what</span> <span m="2631820">happens</span> <span
  m="2632200">when</span> <span m="2632330">you</span> <span
  m="2632420">subtract</span> <span m="2633080">them.</span> <span
  m="2633750">I'm</span> <span m="2633930">going to</span> <span
  m="2634200">ignore</span> <span m="2634580">the</span> <span
  m="2634710">c,</span> <span m="2635710">for</span> <span
  m="2635860">the</span> <span m="2635960">time</span> <span
  m="2636250">being.</span> <span m="2636840">I</span> <span
  m="2636980">get</span> <span m="2637280">sin^2</span> <span
  m="2638900">x,</span> <span m="2639520">1/2</span> <span
  m="2639750">sin^2</span> <span m="2640090">x</span> <span m="2640500">-</span>
  <span m="2642450">(-1/2</span> <span m="2643420">cos^2</span> <span
  m="2644080">x).</span> <span m="2645520">So</span> <span
  m="2645730">the</span> <span m="2645850">difference</span> <span
  m="2646390">between</span> <span m="2646840">them,</span> <span
  m="2647320">we</span> <span m="2647610">hope</span> <span
  m="2648240">to</span> <span m="2648370">be</span> <span m="2648530">0.</span>
  <span m="2648880">But</span> <span m="2649120">actually</span> <span
  m="2649500">of</span> <span m="2649570">course</span> <span
  m="2649790">it's</span> <span m="2649910">not</span> <span
  m="2650300">0.</span> <span m="2650760">What</span> <span
  m="2651130">it</span> <span m="2651220">is,</span> <span m="2651640">is</span>
  <span m="2652000">it's</span> <span m="2652780">1/2</span> <span
  m="2653890">sine squared</span> <span m="2654540">plus</span> <span
  m="2654690">cosine squared,</span> <span m="2657680">which</span> <span
  m="2657910">is</span> <span m="2658180">1/2.</span> <span
  m="2658850">It's</span> <span m="2659050">not</span> <span
  m="2659310">0,</span> <span m="2659740">it's</span> <span m="2659910">a</span>
  <span m="2659980">constant.</span> <span m="2664200">So</span> <span
  m="2664440">what's</span> <span m="2664560">really</span> <span
  m="2664920">going</span> <span m="2665190">on</span> <span
  m="2665510">here</span> <span m="2665760">is</span> <span
  m="2665990">that</span> <span m="2666170">these</span> <span
  m="2666430">two</span> <span m="2666560">formulas</span> <span
  m="2667310">are</span> <span m="2667520">the</span> <span
  m="2667640">same.</span> <span m="2669290">But</span> <span
  m="2669430">you</span> <span m="2669560">have</span> <span
  m="2669730">to</span> <span m="2669960">understand</span> <span
  m="2670430">how</span> <span m="2670540">to</span> <span
  m="2670660">interpret</span> <span m="2671210">them.</span> <span
  m="2671740">The</span> <span m="2671990">two</span> <span
  m="2672370">constants,</span> <span m="2673370">here's</span> <span
  m="2673620">a</span> <span m="2673730">constant</span> <span
  m="2674190">up</span> <span m="2674290">here.</span> <span
  m="2674450">There's</span> <span m="2674650">a</span> <span
  m="2674720">constant,</span> <span m="2675270">c_1</span> <span
  m="2676370">associated</span> <span m="2676970">to</span> <span
  m="2677070">this</span> <span m="2677300">one.</span> <span
  m="2677900">There's</span> <span m="2678200">a</span> <span
  m="2678260">different</span> <span m="2678930">constant,</span> <span
  m="2679780">c_2</span> <span m="2681930">associated</span> <span
  m="2682520">to</span> <span m="2682620">this</span> <span
  m="2682860">one.</span> <span m="2683250">And</span> <span
  m="2683540">this</span> <span m="2683820">family</span> <span
  m="2684430">of</span> <span m="2684540">functions</span> <span
  m="2684990">for</span> <span m="2685100">all</span> <span
  m="2685350">possible</span> <span m="2685790">c_1's</span> <span
  m="2685960">and</span> <span m="2686320">all</span> <span
  m="2686520">possible</span> <span m="2686960">c_2's,</span> <span
  m="2687870">is</span> <span m="2688040">the</span> <span
  m="2688130">same</span> <span m="2688530">family</span> <span
  m="2689010">of</span> <span m="2689070">functions.</span> <span
  m="2689860">Now,</span> <span m="2690110">what's</span> <span
  m="2690350">the</span> <span m="2690440">relationship</span> <span
  m="2691090">between</span> <span m="2691450">c_1</span> <span
  m="2691910">and</span> <span m="2692030">c_2?</span> <span
  m="2692940">Well,</span> <span m="2693280">if</span> <span
  m="2693400">you</span> <span m="2693470">do</span> <span
  m="2693600">the</span> <span m="2693770">subtraction,</span> <span
  m="2695270">c_1</span> <span m="2695990">-</span> <span m="2696370">c_2</span>
  <span m="2697210">has</span> <span m="2697490">to</span> <span
  m="2697580">be</span> <span m="2697700">equal</span> <span
  m="2698010">to</span> <span m="2698220">1/2.</span> <span
  m="2699240">They're</span> <span m="2699380">both</span> <span
  m="2699640">constants,</span> <span m="2700110">but</span> <span
  m="2700270">they</span> <span m="2700380">differ</span> <span
  m="2700660">by</span> <span m="2700890">1/2.</span> <span
  m="2706610">So</span> <span m="2706760">this</span> <span
  m="2707400">explains,</span> <span m="2708370">when</span> <span
  m="2708520">you're</span> <span m="2708640">dealing</span> <span
  m="2708910">with</span> <span m="2709040">families</span> <span
  m="2709530">of</span> <span m="2709630">things,</span> <span
  m="2709800">they</span> <span m="2709880">don't</span> <span
  m="2710040">have</span> <span m="2710130">to</span> <span
  m="2710220">look</span> <span m="2710390">the</span> <span
  m="2710480">same.</span> <span m="2710820">And there are</span> <span
  m="2710940">lots</span> <span m="2711230">of</span> <span
  m="2711350">trig</span> <span m="2711640">functions</span> <span
  m="2712560">which</span> <span m="2713310">look</span> <span
  m="2713650">a</span> <span m="2713690">little</span> <span
  m="2713920">different.</span> <span m="2716280">So</span> <span
  m="2716440">there</span> <span m="2716830">can</span> <span
  m="2717030">be</span> <span m="2717160">several</span> <span
  m="2717520">formulas</span> <span m="2717940">that</span> <span
  m="2718020">actually</span> <span m="2718380">are</span> <span
  m="2718530">the</span> <span m="2718630">same.</span> <span
  m="2719050">And</span> <span m="2719170">it's</span> <span
  m="2719310">hard</span> <span m="2719560">to</span> <span
  m="2719630">check</span> <span m="2720240">that</span> <span
  m="2720380">they're</span> <span m="2720540">actually</span> <span
  m="2720930">the</span> <span m="2721030">same.</span> <span m="2721960">You
  need</span> <span m="2722250">some</span> <span m="2722400">trig</span> <span
  m="2722670">identities</span> <span m="2723280">to</span> <span
  m="2723400">do</span> <span m="2723570">it.</span></p><p><span
  m="2728950">Let's</span> <span m="2729190">do</span> <span
  m="2729330">one</span> <span m="2729560">more</span> <span
  m="2730860">example</span> <span m="2731540">here.</span> <span
  m="2755210">Here's</span> <span m="2755400">another</span> <span
  m="2755680">one.</span> <span m="2766250">Now,</span> <span
  m="2771970">you</span> <span m="2772100">may</span> <span
  m="2772230">be</span> <span m="2772360">thinking,</span> <span m="2772860">and
  a</span> <span m="2772980">lot</span> <span m="2773120">of</span> <span
  m="2773230">people</span> <span m="2773510">are,</span> <span
  m="2773990">thinking</span> <span m="2774710">ugh, it's</span> <span
  m="2775170">got</span> <span m="2775320">a</span> <span m="2775370">ln</span>
  <span m="2775690">in</span> <span m="2775770">it.</span> <span
  m="2782250">If</span> <span m="2782460">you're</span> <span
  m="2782750">experienced,</span> <span m="2783760">you</span> <span
  m="2784020">actually</span> <span m="2784400">can</span> <span
  m="2784730">read</span> <span m="2785020">off</span> <span
  m="2785190">the</span> <span m="2785290">answer</span> <span
  m="2785560">just</span> <span m="2785770">the</span> <span
  m="2785850">way</span> <span m="2786130">there</span> <span
  m="2786220">were</span> <span m="2786300">several</span> <span
  m="2786580">people</span> <span m="2786840">who were</span> <span
  m="2786960">shouting</span> <span m="2787360">out</span> <span
  m="2787530">the</span> <span m="2787640">answers</span> <span
  m="2788050">when</span> <span m="2788210">we</span> <span
  m="2788760">were</span> <span m="2789080">doing</span> <span
  m="2789340">the</span> <span m="2789410">rest</span> <span
  m="2789670">of</span> <span m="2789740">these</span> <span
  m="2789910">problems.</span> <span m="2791000">But,</span> <span
  m="2791540">you</span> <span m="2791760">do</span> <span
  m="2791960">need</span> <span m="2792120">to</span> <span
  m="2792210">relax.</span> <span m="2792970">Because</span> <span
  m="2793420">in</span> <span m="2793660">this</span> <span
  m="2793940">case,</span> <span m="2794560">now</span> <span
  m="2794680">this</span> <span m="2794870">is</span> <span
  m="2794990">definitely</span> <span m="2795550">not</span> <span
  m="2795790">true</span> <span m="2796090">in</span> <span
  m="2796260">general</span> <span m="2796640">when</span> <span
  m="2796790">we</span> <span m="2796890">do</span> <span
  m="2797030">integrals.</span> <span m="2797490">But,</span> <span
  m="2797640">for</span> <span m="2797870">now,</span> <span
  m="2798250">when</span> <span m="2798460">we</span> <span
  m="2798560">do</span> <span m="2798700">integrals,</span> <span
  m="2799080">they'll</span> <span m="2799220">all</span> <span
  m="2799450">be</span> <span m="2799540">manageable.</span> <span
  m="2800570">And</span> <span m="2800690">there's</span> <span
  m="2800820">only</span> <span m="2801030">one</span> <span
  m="2801320">method.</span> <span m="2802670">Which</span> <span
  m="2802990">is</span> <span m="2803100">substitution.</span> <span
  m="2807390">And</span> <span m="2807640">in</span> <span
  m="2807820">the</span> <span m="2807910">substitution</span> <span
  m="2808530">method,</span> <span m="2809500">you</span> <span m="2809680">want
  to</span> <span m="2809880">go</span> <span m="2810120">for</span> <span
  m="2810290">the</span> <span m="2810410">trickiest</span> <span
  m="2811110">part.</span> <span m="2812200">And</span> <span
  m="2812370">substitute</span> <span m="2813010">for</span> <span
  m="2813170">that.</span> <span m="2815220">So</span> <span
  m="2815440">the</span> <span m="2815550">substitution</span> <span
  m="2816220">that</span> <span m="2816770">I</span> <span
  m="2816890">proposed</span> <span m="2817630">to</span> <span
  m="2817750">you</span> <span m="2818270">is</span> <span
  m="2818660">that</span> <span m="2818920">this</span> <span
  m="2819160">should</span> <span m="2819400">be,</span> <span
  m="2819880">u</span> <span m="2820020">should</span> <span
  m="2820160">be</span> <span m="2820300">ln x.</span> <span
  m="2822200">And</span> <span m="2822460">the</span> <span
  m="2822570">advantage</span> <span m="2823250">that</span> <span
  m="2823440">that</span> <span m="2823640">has</span> <span
  m="2824270">is</span> <span m="2824610">that</span> <span
  m="2824740">its</span> <span m="2824870">differential</span> <span
  m="2826270">is</span> <span m="2826530">simpler</span> <span
  m="2827300">than</span> <span m="2827500">itself.</span> <span
  m="2828720">So</span> <span m="2828980">du</span> <span m="2830290">=</span>
  <span m="2832460">dx</span> <span m="2833460">/ x.</span> <span
  m="2835570">Remember,</span> <span m="2835920">we</span> <span
  m="2836140">use</span> <span m="2836470">that</span> <span
  m="2836710">in</span> <span m="2836930">logarithmic</span> <span
  m="2837510">differentiation,</span> <span m="2838500">too.</span> <span
  m="2841550">So</span> <span m="2841720">now</span> <span m="2842100">we</span>
  <span m="2842340">can</span> <span m="2842470">express</span> <span
  m="2843090">this</span> <span m="2844410">using</span> <span
  m="2844860">this</span> <span m="2844960">substitution.</span> <span
  m="2848810">And</span> <span m="2849000">what</span> <span
  m="2849150">we</span> <span m="2849270">get</span> <span
  m="2849940">is,</span> <span m="2850630">the</span> <span
  m="2850810">integral</span> <span m="2851460">of,</span> <span
  m="2852290">so</span> <span m="2852360">I'll</span> <span
  m="2852560">divide</span> <span m="2852950">the</span> <span
  m="2853030">two</span> <span m="2853250">parts</span> <span
  m="2853650">here.</span> <span m="2853990">It's 1</span> <span
  m="2854230">/</span> <span m="2854400">ln</span> <span m="2855530">x,
  and</span> <span m="2855640">then</span> <span m="2855790">it's</span> <span
  m="2855910">dx</span> <span m="2856080">/</span> <span m="2856320">x.
  And</span> <span m="2856710">this</span> <span m="2856840">part</span> <span
  m="2858770">is</span> <span m="2858880">1</span> <span m="2859100">/</span>
  <span m="2859310">u,</span> <span m="2859900">and</span> <span
  m="2860050">this</span> <span m="2860240">part</span> <span
  m="2860500">is</span> <span m="2860610">du.</span> <span m="2863370">So
  it's</span> <span m="2863740">the</span> <span m="2863850">integral</span>
  <span m="2864260">of</span> <span m="2864820">du</span> <span
  m="2865720">/</span> <span m="2866210">u.</span> <span m="2869260">And</span>
  <span m="2869590">that</span> <span m="2870140">is</span> <span
  m="2870410">ln</span> <span m="2871280">u</span> <span m="2872000">+ c.</span>
  <span m="2878490">Which</span> <span m="2878790">altogether,</span> <span
  m="2880240">if</span> <span m="2880470">I</span> <span m="2881190">put</span>
  <span m="2881510">back</span> <span m="2881790">in</span> <span
  m="2881970">what</span> <span m="2882500">u</span> <span
  m="2882690">is,</span> <span m="2883310">is</span> <span m="2883520">ln</span>
  <span m="2884070">(ln x)</span> <span m="2885080">+ c.</span> <span
  m="2891030">And</span> <span m="2891230">now</span> <span
  m="2891380">we</span> <span m="2891540">see</span> <span
  m="2891840">some</span> <span m="2892520">uglier</span> <span
  m="2893480">things.</span> <span m="2894290">In</span> <span
  m="2894390">fact,</span> <span m="2894980">technically</span> <span
  m="2895420">speaking,</span> <span m="2895800">we</span> <span
  m="2895900">could</span> <span m="2896010">take</span> <span
  m="2896200">the</span> <span m="2896330">absolute</span> <span
  m="2896670">value</span> <span m="2897210">here.</span> <span
  m="2898730">And</span> <span m="2898950">then</span> <span
  m="2899050">this</span> <span m="2899200">would</span> <span
  m="2899310">be</span> <span m="2899440">absolute</span> <span
  m="2899710">values</span> <span m="2900350">there.</span> <span
  m="2908130">So</span> <span m="2909130">this</span> <span
  m="2909480">is</span> <span m="2911830">the</span> <span
  m="2911960">type</span> <span m="2912200">of</span> <span
  m="2912280">example</span> <span m="2912640">where</span> <span
  m="2912750">I</span> <span m="2912830">really</span> <span
  m="2913090">would</span> <span m="2913230">recommend</span> <span
  m="2913700">that</span> <span m="2913810">you</span> <span
  m="2913910">actually</span> <span m="2914270">use</span> <span
  m="2914550">the</span> <span m="2914640">substitution,</span> <span
  m="2915740">at</span> <span m="2915850">least</span> <span
  m="2916120">for</span> <span m="2916250">now.</span> <span m="2919030">All
  right,</span> <span m="2919390">tomorrow</span> <span m="2920540">we're</span>
  <span m="2920940">going</span> <span m="2921200">to</span> <span
  m="2921290">be</span> <span m="2921820">doing</span> <span
  m="2922130">differential</span> <span m="2922570">equations.</span> <span
  m="2923080">And</span> <span m="2923250">we're</span> <span m="2923380">going
  to</span> <span m="2923570">review</span> <span m="2924240">for</span> <span
  m="2924440">the</span> <span m="2924570">test.</span> <span
  m="2925130">I'm</span> <span m="2925240">going to</span> <span
  m="2925370">give</span> <span m="2925530">you</span> <span
  m="2925650">a</span> <span m="2925750">handout</span> <span
  m="2926250">telling</span> <span m="2926550">you</span> <span
  m="2926660">just</span> <span m="2927120">exactly</span> <span
  m="2927650">what's</span> <span m="2927860">going</span> <span
  m="2927980">to</span> <span m="2928040">be</span> <span m="2928150">on</span>
  <span m="2928330">the</span> <span m="2928400">test.</span> <span
  m="2928940">So,</span> <span m="2930800">see</span> <span m="2930950">you
  tomorrow.</span></p>
embedded_media:
  - uid: 5ff0c2750f7f333af75d99e08b0f1025
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: '-MI0b4h3rS0'
  - uid: 133178fdbfd416f4ba0449ebb13f5269
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/-MI0b4h3rS0/default.jpg'
  - uid: 2c8b07d6e600eeb3e6a5c6266d28bbed
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: '-MI0b4h3rS0'
  - uid: e23bfbbc1d4f20c4d46586e146c9ce56
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: '-MI0b4h3rS0.srt'
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-c-mean-value-theorem-antiderivatives-and-differential-equations/session-38-integration-by-substitution/clip-1-substitution/-MI0b4h3rS0.srt
  - uid: 1e39e2bcd0a1ec688f387e683f3b9a04
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: '-MI0b4h3rS0.pdf'
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-c-mean-value-theorem-antiderivatives-and-differential-equations/session-38-integration-by-substitution/clip-1-substitution/-MI0b4h3rS0.pdf
  - uid: 0a8ca39737fd950ce2f87fe23b0d7a97
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 40d460d06d5a5fc605d01887e8261651
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: b81ff7278e336b713b32a5c0a072d7fd
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.01JF07/ocw-18.01-f07-lec15_300k.mp4'
  - uid: f67d7d6599b446d24de6d1ba2b330c2a
    parent_uid: 6f2769cc535a36e90aba3dc0e7ff31ba
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id414308064'
type: courses
layout: video
---
