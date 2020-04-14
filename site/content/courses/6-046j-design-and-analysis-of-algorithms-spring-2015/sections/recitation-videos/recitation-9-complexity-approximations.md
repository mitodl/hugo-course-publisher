---
title: 'Recitation 9: Complexity: Approximations'
uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
parent_uid: 8c671299aae36eba669ca13490c21dec
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-9-complexity-approximations
short_url: recitation-9-complexity-approximations
inline_embed_id: '36257797recitation9:complexity:approximations56860431'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to
  approximation algorithms are discussed, namely the traveling salesman
  problem.</p> <p><strong>Instructors:</strong> Amartya Shankha Biswas</p>
related_resources_text: ''
transcript: >-
  <p><span m="80">The</span> <span m="190">following</span> <span
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
  m="10980">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13340">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14450">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21280">AMARTYA SHANKHA BISWAS: So</span> <span m="21510">today,</span>
  <span m="23320">we're</span> <span m="23450">going</span> <span
  m="23580">to</span> <span m="23650">look</span> <span m="23840">at</span>
  <span m="24460">approximation</span> <span m="25120">algorithms</span> <span
  m="25540">for</span> <span m="25650">the</span> <span
  m="25770">traveling</span> <span m="26100">salesman</span> <span
  m="26420">problem.</span> <span m="27670">So</span> <span m="28650">I</span>
  <span m="29120">hope</span> <span m="29520">everyone</span> <span
  m="29835">knows what the</span> <span m="30150">traveling salesman</span>
  <span m="30290">problem is.</span> <span m="30850">You</span> <span
  m="30930">have</span> <span m="31100">a</span> <span m="31170">graph,</span>
  <span m="32110">you're</span> <span m="32210">trying</span> <span
  m="32430">to</span> <span m="32479">visit</span> <span m="32750">every</span>
  <span m="32960">vertex.</span> <span m="35190">So</span> <span
  m="35210">you</span> <span m="35410">start</span> <span m="35700">at
  your</span> <span m="35740">vertex,</span> <span m="36150">you</span> <span
  m="36250">visit</span> <span m="36530">every</span> <span
  m="36770">single</span> <span m="37040">one,</span> <span m="37280">and</span>
  <span m="37380">you</span> <span m="37450">end</span> <span
  m="37830">at</span> <span m="37930">the</span> <span m="37990">starting</span>
  <span m="38250">vertex.</span> <span m="39090">And</span> <span
  m="39230">you</span> <span m="39330">want</span> <span m="39480">to</span>
  <span m="39520">do</span> <span m="39640">that</span> <span
  m="39830">in</span> <span m="39990">the</span> <span m="40280">shortest</span>
  <span m="40750">possible</span> <span m="41360">time,</span> <span
  m="41760">or</span> <span m="41840">distance,</span> <span m="42230">or</span>
  <span m="42280">whatever</span> <span m="42520">the</span> <span
  m="42600">metric</span> <span m="42920">is.</span></p><p><span
  m="43990">So,</span> <span m="44850">unfortunately,</span> <span
  m="45350">this is</span> <span m="45690">NP-hard.</span> <span
  m="46840">Also,</span> <span m="47340">the</span> <span
  m="47420">approximation</span> <span m="47940">algorithms</span> <span
  m="48520">for</span> <span m="48660">any</span> <span
  m="48850">constant</span> <span m="49170">approximation</span> <span
  m="49750">is</span> <span m="49840">also</span> <span m="50220">known</span>
  <span m="50380">to</span> <span m="50690">be</span> <span
  m="50790">NP-hard.</span> <span m="52280">So</span> <span m="52430">you</span>
  <span m="52530">should</span> <span m="52730">have gone over</span> <span
  m="52980">approximation</span> <span m="53400">algorithms</span> <span
  m="53520">in</span> <span m="53690">lectures.</span> <span
  m="54120">So,</span> <span m="54320">basically,</span> <span
  m="55980">let's</span> <span m="56140">say the</span> <span
  m="56270">optimal</span> <span m="56560">solution</span> <span
  m="57210">has</span> <span m="57370">some</span> <span m="57570">value</span>
  <span m="57870">of</span> <span m="58140">e,</span> <span m="58400">and</span>
  <span m="58640">if</span> <span m="58710">you</span> <span
  m="58810">want</span> <span m="59040">to</span> <span
  m="60490">guarantee</span> <span m="60890">that</span> <span
  m="60970">your</span> <span m="61190">algorithm</span> <span
  m="61620">will</span> <span m="61850">end</span> <span m="62040">up</span>
  <span m="62200">with</span> <span m="62320">a</span> <span
  m="62350">value</span> <span m="62670">which</span> <span m="62830">is</span>
  <span m="62930">within</span> <span m="63130">a</span> <span
  m="63220">constant</span> <span m="63670">factor</span> <span
  m="63910">of</span> <span m="64080">v,</span> <span m="64440">so</span> <span
  m="64640">less</span> <span m="64860">than</span> <span m="64970">cv,</span>
  <span m="65990">that</span> <span m="66310">is</span> <span
  m="66410">an</span> <span m="66500">approximation</span> <span
  m="66930">algorithm.</span></p><p><span m="67570">But</span> <span
  m="67850">for</span> <span m="68040">the</span> <span
  m="68180">traveling</span> <span m="68460">salesman</span> <span
  m="68780">problem,</span> <span m="69520">the</span> <span
  m="70275">constant</span> <span m="70640">approximation</span> <span
  m="71100">algorithms</span> <span m="71550">are also</span> <span
  m="71680">NP-hard.</span> <span m="73190">So</span> <span
  m="73330">instead,</span> <span m="73660">we</span> <span
  m="74860">modify</span> <span m="75120">it</span> <span
  m="75380">slightly.</span> <span m="76200">So,</span> <span
  m="76770">on</span> <span m="76940">the</span> <span
  m="77010">traveling</span> <span m="77120">salesman</span> <span
  m="77510">problem,</span> <span m="77870">we</span> <span
  m="78270">impose</span> <span m="78730">something</span> <span
  m="78950">called a</span> <span m="79315">metric.</span> <span
  m="79680">So</span> <span m="80640">the</span> <span
  m="80860">important</span> <span m="81310">relation</span> <span
  m="81880">here</span> <span m="82210">is</span> <span m="82360">this</span>
  <span m="82520">one.</span></p><p><span m="83390">So,</span> <span
  m="83520">first</span> <span m="83730">of</span> <span m="83770">all,</span>
  <span m="83840">let's</span> <span m="83980">go</span> <span
  m="84100">through</span> <span m="84190">this.</span> <span
  m="84380">So</span> <span m="84740">you</span> <span m="84850">have</span>
  <span m="85440">a</span> <span m="85520">distance</span> <span
  m="85850">metric</span> <span m="86180">for--</span> <span m="86710">so</span>
  <span m="87090">xy</span> <span m="87460">are</span> <span
  m="87660">vertices.</span> <span m="88410">Your</span> <span
  m="88570">distance</span> <span m="88880">is</span> <span
  m="88960">always</span> <span m="89190">greater than</span> <span
  m="89410">0,</span> <span m="89740">which</span> <span m="90090">is</span>
  <span m="90330">reasonable.</span> <span m="91210">You're</span> <span
  m="92220">undirected,</span> <span m="92730">which</span> <span
  m="92880">is</span> <span m="92970">this</span> <span
  m="93150">relation.</span></p><p><span m="93760">And</span> <span
  m="93990">you have</span> <span m="94060">the</span> <span
  m="94140">triangle</span> <span m="94480">inequality,</span> <span
  m="95110">which</span> <span m="95170">means</span> <span
  m="95430">that</span> <span m="96220">if</span> <span m="96310">you</span>
  <span m="96420">have</span> <span m="96990">3</span> <span
  m="97610">vertices,</span> <span m="99350">and</span> <span m="99610">you
  have</span> <span m="99760">distance</span> <span m="100150">like</span> <span
  m="100310">this,</span> <span m="102475">this</span> <span
  m="102910">distance</span> <span m="103420">is</span> <span
  m="103450">always</span> <span m="103740">smaller</span> <span m="103960">than
  the</span> <span m="104120">sum</span> <span m="104250">of</span> <span
  m="104350">these</span> <span m="104490">two</span> <span
  m="104580">distances,</span> <span m="105750">which</span> <span
  m="106210">is</span> <span m="107090">like</span> <span m="107710">real</span>
  <span m="108020">world-ish</span> <span m="108380">things</span> <span
  m="108610">that</span> <span m="108710">make</span> <span
  m="108930">sense,</span> <span m="109250">right?</span> <span
  m="110120">If</span> <span m="110230">this</span> <span m="110300">distance
  was</span> <span m="110410">longer,</span> <span m="110760">it would</span>
  <span m="110870">just</span> <span m="111050">take</span> <span
  m="111200">this</span> <span m="111360">path</span> <span
  m="111635">instead.</span> <span m="112370">So</span> <span
  m="113460">the</span> <span m="114240">distance</span> <span
  m="114370">by</span> <span m="114500">taking</span> <span
  m="114800">other</span> <span m="115010">node</span> <span
  m="115230">is</span> <span m="115300">always</span> <span m="115540">greater
  than</span> <span m="115690">or equal</span> <span m="116010">to</span> <span
  m="116490">the</span> <span m="116590">direct</span> <span
  m="116870">distance.</span></p><p><span m="118790">So,</span> <span
  m="120670">turns</span> <span m="120970">out,</span> <span
  m="121390">the</span> <span m="121460">Metric</span> <span
  m="121780">TSP</span> <span m="121910">problem</span> <span
  m="122010">is</span> <span m="122270">also</span> <span
  m="122500">NP-hard.</span> <span m="123560">So</span> <span
  m="125230">nothing</span> <span m="125620">very</span> <span
  m="125810">great</span> <span m="126050">there,</span> <span
  m="126240">but</span> <span m="127220">you</span> <span m="127420">can</span>
  <span m="127520">do</span> <span m="127620">a</span> <span
  m="127680">constant</span> <span m="128009">approximation</span> <span
  m="128600">here.</span> <span m="129400">And</span> <span
  m="129930">you'll</span> <span m="130050">go</span> <span
  m="130199">through</span> <span m="130320">two</span> <span
  m="130470">approximations</span> <span m="130970">today.</span> <span
  m="131220">The</span> <span m="131350">first,</span> <span
  m="131740">the</span> <span m="131830">simpler</span> <span
  m="132170">one,</span> <span m="132750">is</span> <span m="132900">a</span>
  <span m="132960">2</span> <span m="133100">approximation,</span> <span
  m="137720">and</span> <span m="138020">then,</span> <span
  m="138200">we'll</span> <span m="138410">improve</span> <span
  m="138720">this</span> <span m="138940">to</span> <span
  m="139640">3/2.</span></p><p><span m="141270">So</span> <span
  m="142950">let's</span> <span m="143230">start</span> <span
  m="143430">with</span> <span m="143510">the</span> <span
  m="143570">first</span> <span m="143820">one.</span> <span
  m="144460">So</span> <span m="144550">before</span> <span m="144800">we</span>
  <span m="144860">begin,</span> <span m="145640">let's</span> <span
  m="147050">define</span> <span m="147360">a</span> <span
  m="147430">couple</span> <span m="147630">of</span> <span
  m="147720">terms.</span> <span m="148650">Let's</span> <span
  m="148850">define</span> <span m="150460">c</span> <span m="151220">of</span>
  <span m="151860">S.</span> <span m="152820">So</span> <span
  m="153680">what</span> <span m="153820">is</span> <span m="153920">S?</span>
  <span m="154580">Let</span> <span m="154790">X</span> <span
  m="155050">be</span> <span m="155190">a</span> <span m="155240">path.</span>
  <span m="157130">Or,</span> <span m="157230">rather,</span> <span
  m="158200">let's</span> <span m="158390">say</span> <span m="158610">S</span>
  <span m="160440">is</span> <span m="160580">a</span> <span
  m="160650">set</span> <span m="160870">of</span> <span
  m="160980">edges.</span></p><p><span m="167240">So</span> <span
  m="167830">if</span> <span m="167960">you</span> <span m="168060">have
  your</span> <span m="168270">graph,</span> <span m="169230">here,</span> <span
  m="172900">your</span> <span m="173180">set</span> <span m="173410">of</span>
  <span m="173510">edges</span> <span m="173770">could</span> <span
  m="173870">be</span> <span m="174010">something</span> <span
  m="174240">like</span> <span m="174390">this,</span> <span
  m="174815">this,</span> <span m="175240">this,</span> <span
  m="175665">this.</span> <span m="176790">So</span> <span
  m="177000">that's</span> <span m="177200">set</span> <span
  m="177390">of</span> <span m="177480">edges.</span> <span
  m="178260">And</span> <span m="178490">c</span> <span m="178680">of</span>
  <span m="178790">S</span> <span m="178950">is</span> <span
  m="179050">defined</span> <span m="179590">as</span> <span
  m="180325">the</span> <span m="180610">sum</span> <span m="182180">of</span>
  <span m="182250">the</span> <span m="182560">weights</span> <span
  m="182940">of</span> <span m="183030">all</span> <span m="183140">the</span>
  <span m="183260">edges.</span> <span m="184190">And</span> <span
  m="184870">this,</span> <span m="185250">actually,</span> <span
  m="185500">should</span> <span m="185650">be</span> <span m="185730">a</span>
  <span m="185770">multiset,</span> <span m="186220">because</span> <span
  m="186770">you</span> <span m="186860">can</span> <span
  m="187030">count</span> <span m="187270">the</span> <span
  m="187330">same</span> <span m="187570">edge</span> <span
  m="187680">twice.</span> <span m="188640">So you can</span> <span
  m="188960">count this edge</span> <span m="189255">three</span> <span
  m="189550">times,</span> <span m="189660">or</span> <span
  m="190510">how</span> <span m="190660">ever</span> <span
  m="190990">many</span> <span m="191170">times</span> <span
  m="191490">you</span> <span m="191590">want.</span> <span m="192010">So</span>
  <span m="192090">that's</span> <span m="192230">the</span> <span
  m="192290">definition.</span></p><p><span m="193580">So,</span> <span
  m="194380">now,</span> <span m="195850">we</span> <span m="196000">want</span>
  <span m="196150">to</span> <span m="196220">find</span> <span
  m="197560">a</span> <span m="197910">cycle</span> <span
  m="198830">which</span> <span m="199030">goes</span> <span
  m="199270">through</span> <span m="199400">all</span> <span
  m="199560">the</span> <span m="199610">vertices,</span> <span
  m="200700">and</span> <span m="200800">we</span> <span m="200860">want</span>
  <span m="200970">to</span> <span m="201040">minimize</span> <span
  m="201510">the</span> <span m="201620">cost</span> <span m="201930">of</span>
  <span m="202000">that</span> <span m="202200">cycle.</span> <span
  m="203420">So</span> <span m="203600">let's</span> <span m="203810">say</span>
  <span m="203940">your</span> <span m="204090">optimal--</span> <span
  m="205110">this</span> <span m="205450">should</span> <span
  m="205560">remind</span> <span m="205790">you</span> <span
  m="205920">of</span> <span m="206090">the</span> <span
  m="206300">Hamiltonian</span> <span m="206470">Cycle</span> <span
  m="206530">problem.</span> <span m="206790">So</span> <span
  m="206870">this</span> <span m="207000">is,</span> <span
  m="207070">essentially,</span> <span m="208210">finding</span> <span
  m="208650">a</span> <span m="208680">Hamiltonian</span> <span
  m="209160">cycle</span> <span m="209410">in</span> <span m="209520">the</span>
  <span m="209620">graph</span> <span m="210210">of</span> <span
  m="210330">minimum</span> <span m="210790">weight.</span> <span
  m="211490">So</span> <span m="211610">this</span> <span m="211760">is</span>
  <span m="212550">worse</span> <span m="212730">than</span> <span
  m="212850">the</span> <span m="213020">Hamiltonian</span> <span
  m="213190">cycle</span> <span m="213480">problem.</span> <span m="213770">This
  is</span> <span m="213950">find</span> <span m="214220">the</span> <span
  m="214290">minimum</span> <span m="214600">weight</span> <span
  m="214770">Hamiltonian</span> <span m="215200">cycle.</span></p><p><span
  m="217370">So</span> <span m="217980">let's</span> <span m="218210">say</span>
  <span m="219210">there</span> <span m="219440">exists</span> <span
  m="219820">this</span> <span m="220650">beautiful</span> <span
  m="221030">Hamiltonian</span> <span m="221460">cycle.</span> <span
  m="222280">You</span> <span m="222390">know</span> <span m="222580">of</span>
  <span m="223020">minimum</span> <span m="223320">weight.</span> <span
  m="224000">Let's</span> <span m="224160">call</span> <span
  m="224320">that</span> <span m="224540">H</span> <span m="224650">star</span>
  <span m="224970">G.</span> <span m="225710">So</span> <span
  m="225880">it's</span> <span m="226796">the</span> <span
  m="227180">best</span> <span m="227410">Hamiltonian</span> <span
  m="227570">cycle</span> <span m="228020">on</span> <span
  m="228130">this</span> <span m="228250">graph,</span> <span
  m="228500">and</span> <span m="228600">that's</span> <span
  m="228880">the</span> <span m="228960">shortest</span> <span
  m="229350">path</span> <span m="229660">that your</span> <span
  m="229750">traveling</span> <span m="230040">salesman can</span> <span
  m="230510">take.</span> <span m="231420">And</span> <span m="231730">so</span>
  <span m="231870">the</span> <span m="231960">cost</span> <span
  m="232250">of</span> <span m="232400">that</span> <span m="232710">is</span>
  <span m="233190">[INAUDIBLE]</span> <span m="233470">if</span> <span
  m="233580">H</span> <span m="233950">star</span> <span m="234215">S</span>
  <span m="234480">G.</span></p><p><span m="237030">So</span> <span
  m="238130">how</span> <span m="238290">do</span> <span m="238350">we</span>
  <span m="238460">go</span> <span m="238630">about</span> <span
  m="239490">trying</span> <span m="239720">to</span> <span
  m="239830">approximate</span> <span m="240210">this</span> <span
  m="240390">problem?</span> <span m="241280">So</span> <span
  m="241820">think</span> <span m="241990">about</span> <span
  m="242790">what</span> <span m="243250">algorithms</span> <span
  m="243370">you've</span> <span m="243720">seen</span> <span
  m="246210">that</span> <span m="246400">sort</span> <span m="246530">of</span>
  <span m="246610">connect</span> <span m="246920">all</span> <span
  m="247130">the</span> <span m="247210">vertices</span> <span
  m="247560">of</span> <span m="247660">a</span> <span m="247710">graph,</span>
  <span m="248590">and</span> <span m="248760">minimize</span> <span
  m="250040">costs</span> <span m="250320">of</span> <span
  m="250420">edges.</span> <span m="251650">Does it</span> <span
  m="252000">remind</span> <span m="252300">you</span> <span
  m="252680">of</span> <span m="252930">anything</span> <span
  m="253860">polynomial</span> <span m="254360">that</span> <span
  m="254430">you've</span> <span m="254580">seen</span> <span
  m="254770">in</span> <span m="254860">the</span> <span
  m="254940">class,</span> <span m="256120">that</span> <span
  m="256240">connects</span> <span m="256540">all</span> <span
  m="256720">the</span> <span m="256800">vertices?</span> <span
  m="260784">Expands</span> <span m="261269">all the</span> <span
  m="261519">vertices?</span> <span m="263400">Exactly.</span></p><p><span
  m="263840">So</span> <span m="264050">[INAUDIBLE],</span> <span
  m="264250">minimum spanning</span> <span m="264700">tree.</span> <span
  m="265370">This minimum</span> <span m="265620">spanning tree</span> <span
  m="265910">is</span> <span m="266090">polynomial</span> <span
  m="266550">time,</span> <span m="267350">and it</span> <span
  m="267650">connects</span> <span m="267810">all the</span> <span
  m="267900">vertex.</span> <span m="268360">So</span> <span
  m="268730">let's</span> <span m="268890">take</span> <span
  m="269240">some</span> <span m="269470">graph.</span> <span
  m="269780">Let's</span> <span m="269950">just</span> <span
  m="270853">go</span> <span m="271236">with</span> <span m="271620">this</span>
  <span m="271750">one.</span> <span m="272290">So you</span> <span
  m="272400">have</span> <span m="272570">some</span> <span
  m="274085">vertices,</span> <span m="274920">and</span> <span
  m="275540">you</span> <span m="276660">make</span> <span m="277170">a</span>
  <span m="277260">minimum</span> <span m="277550">spanning</span> <span
  m="277870">tree out of</span> <span m="278100">them.</span></p><p><span
  m="280480">Now,</span> <span m="281230">clearly,</span> <span m="281410">this
  is</span> <span m="281620">not</span> <span m="281770">a</span> <span
  m="281820">cycle</span> <span m="282130">yet.</span> <span
  m="282950">But</span> <span m="284060">let's</span> <span
  m="284230">try</span> <span m="284400">to</span> <span
  m="284500">construct</span> <span m="285130">a</span> <span
  m="285210">path</span> <span m="285560">out</span> <span m="285740">of</span>
  <span m="285820">this</span> <span m="285880">minimum</span> <span
  m="286230">spanning</span> <span m="286642">tree.</span> <span
  m="288290">So,</span> <span m="289250">first,</span> <span
  m="289500">let's</span> <span m="289690">root</span> <span
  m="289930">it.</span> <span m="290510">So</span> <span m="290530">let's</span>
  <span m="290680">say</span> <span m="290780">we</span> <span
  m="290900">are</span> <span m="290950">rooted</span> <span
  m="291260">minimum</span> <span m="291490">spanning</span> <span
  m="291790">tree.</span> <span m="294490">Let's say</span> <span
  m="294990">this is</span> <span m="295110">the root.</span> <span
  m="296014">So</span> <span m="296466">you</span> <span m="296918">have</span>
  <span m="298274">three</span> <span m="298730">things</span> <span
  m="298940">going</span> <span m="299150">out of</span> <span
  m="299350">there.</span> <span m="300660">I</span> <span
  m="300750">think</span> <span m="300910">that's</span> <span
  m="301110">it.</span></p><p><span m="302540">So</span> <span
  m="303150">let's</span> <span m="303430">give</span> <span
  m="303680">these</span> <span m="304070">labels.</span> <span
  m="311150">So,</span> <span m="311210">now,</span> <span m="311340">what we're
  going</span> <span m="311570">to</span> <span m="311720">do</span> <span
  m="311930">is,</span> <span m="312640">the</span> <span m="312750">way</span>
  <span m="312910">we're</span> <span m="313050">going</span> <span
  m="313160">to</span> <span m="313250">traverse</span> <span
  m="313900">all</span> <span m="314050">the</span> <span
  m="314110">vertices,</span> <span m="315080">let's</span> <span
  m="315150">just</span> <span m="315290">do a</span> <span
  m="315380">DFS.</span> <span m="316760">So,</span> <span m="316890">in</span>
  <span m="317120">DFS</span> <span m="317300">traversal,</span> <span
  m="317780">you'll</span> <span m="317920">first</span> <span
  m="318140">see</span> <span m="318260">1,</span> <span m="319830">then</span>
  <span m="319940">you'll</span> <span m="320100">go</span> <span
  m="320250">down and</span> <span m="320520">see</span> <span
  m="320670">2,</span> <span m="321932">then you'll</span> <span m="322400">go
  down</span> <span m="322760">and see</span> <span m="322930">3,</span> <span
  m="324450">then</span> <span m="324660">you'll</span> <span
  m="324910">go</span> <span m="325060">back</span> <span m="325270">up,</span>
  <span m="325630">see</span> <span m="325820">2</span> <span
  m="326020">again.</span> <span m="327260">Go</span> <span
  m="327380">back</span> <span m="327590">down,</span> <span m="327910">see
  4.</span> <span m="329290">Go</span> <span m="329400">back up,</span> <span
  m="329740">see</span> <span m="329970">2.</span> <span m="330690">1,</span>
  <span m="331938">5,</span> <span m="332886">1,</span> <span
  m="333360">6.</span></p><p><span m="334630">So,</span> <span
  m="334730">basically,</span> <span m="335220">you're</span> <span
  m="335520">ignoring</span> <span m="335910">the</span> <span
  m="335990">rest</span> <span m="336200">of</span> <span m="336270">the</span>
  <span m="336340">graph.</span> <span m="337230">You</span> <span
  m="337350">find</span> <span m="337640">your</span> <span
  m="337690">minimum</span> <span m="337940">spanning</span> <span
  m="338240">tree,</span> <span m="339000">and</span> <span m="339210">you
  follow</span> <span m="339610">all the</span> <span m="339690">paths.</span>
  <span m="340530">Follow</span> <span m="340740">them</span> <span
  m="340860">back</span> <span m="341060">up,</span> <span m="341180">and</span>
  <span m="341310">just</span> <span m="341450">do</span> <span
  m="341550">a</span> <span m="341600">DFS</span> <span
  m="341900">traversal.</span> <span m="343940">And</span> <span
  m="344140">then,</span> <span m="344380">you go reach</span> <span
  m="344740">back to</span> <span m="345020">1.</span> <span
  m="346280">And</span> <span m="346440">then,</span> <span
  m="346540">you</span> <span m="346600">have</span> <span
  m="346830">this--</span> <span m="347350">well,</span> <span
  m="347710">it</span> <span m="347870">visits</span> <span
  m="348150">all</span> <span m="348270">the</span> <span
  m="348330">vertices.</span> <span m="348800">It</span> <span
  m="348940">visits</span> <span m="349080">some of</span> <span
  m="349220">them</span> <span m="349290">more</span> <span
  m="349450">than</span> <span m="349580">once,</span> <span
  m="349800">which</span> <span m="349920">is</span> <span m="349990">a</span>
  <span m="350040">problem,</span> <span m="350550">which</span> <span
  m="350640">we'll</span> <span m="350760">deal with</span> <span
  m="351130">shortly.</span></p><p><span m="352180">But</span> <span
  m="352780">it</span> <span m="352900">visits</span> <span
  m="353110">all</span> <span m="353220">the</span> <span
  m="353280">vertices,</span> <span m="353820">and it's a</span> <span
  m="354000">cycle.</span> <span m="355580">So, now,</span> <span
  m="355740">the</span> <span m="355830">problem</span> <span
  m="356130">is,</span> <span m="356680">the</span> <span
  m="356840">traveling</span> <span m="357270">salesman</span> <span
  m="357390">problem</span> <span m="357670">does</span> <span
  m="357800">not</span> <span m="358040">allow</span> <span
  m="358320">you</span> <span m="358440">to</span> <span m="358520">visit</span>
  <span m="358830">vertices</span> <span m="359180">more</span> <span
  m="359310">than</span> <span m="359430">once.</span> <span
  m="360390">Because,</span> <span m="361220">if</span> <span
  m="361340">you</span> <span m="361430">did</span> <span m="361550">not</span>
  <span m="361730">have</span> <span m="361920">this</span> <span
  m="362070">restriction,</span> <span m="363290">you</span> <span
  m="363410">could</span> <span m="363530">shorten</span> <span
  m="363860">your</span> <span m="364010">bat</span> <span
  m="364510">length</span> <span m="364810">by</span> <span
  m="365420">going</span> <span m="365670">to a</span> <span
  m="365840">separate</span> <span m="366150">vertex</span> <span
  m="366480">and</span> <span m="366550">coming</span> <span
  m="366780">back,</span> <span m="367050">or</span> <span m="367120">something
  like</span> <span m="367460">that.</span> <span m="368000">So</span> <span
  m="368100">let's</span> <span m="368680">make</span> <span
  m="368860">that</span> <span m="368980">more</span> <span
  m="369130">concrete.</span></p><p><span m="370430">So,</span> <span
  m="370750">at</span> <span m="370820">least</span> <span m="371320">in</span>
  <span m="371450">this</span> <span m="371710">case,</span> <span
  m="372140">given</span> <span m="372390">this</span> <span
  m="372520">triangle</span> <span m="372850">inequality,</span> <span
  m="373680">I</span> <span m="373790">claim</span> <span m="374150">that</span>
  <span m="375760">you</span> <span m="375920">can</span> <span
  m="376420">just</span> <span m="376660">delete</span> <span
  m="376940">the</span> <span m="377020">duplicate</span> <span
  m="377400">vertices.</span> <span m="377910">So</span> <span
  m="378000">let's</span> <span m="378180">look</span> <span m="378350">at
  the</span> <span m="378380">duplicate</span> <span m="378700">ones.</span>
  <span m="378820">You have</span> <span m="378960">1,</span> <span
  m="379300">2,</span> <span m="379640">3,</span> <span m="380060">this</span>
  <span m="380300">repeats.</span> <span m="380850">So</span> <span
  m="381140">you</span> <span m="381430">delete</span> <span
  m="381690">that.</span> <span m="382420">Repeats,</span> <span
  m="383330">repeats,</span> <span m="384290">repeats,</span> <span
  m="385360">and</span> <span m="385500">that's</span> <span
  m="385790">cycling</span> <span m="385830">back.</span></p><p><span
  m="387140">So</span> <span m="387150">how</span> <span m="387270">do
  you</span> <span m="387390">delete</span> <span m="387720">things?</span>
  <span m="388670">So,</span> <span m="388680">in</span> <span
  m="388750">this</span> <span m="388920">case,</span> <span
  m="389230">you</span> <span m="389330">had</span> <span m="389350">a</span>
  <span m="389400">path,</span> <span m="389665">right?</span> <span
  m="389930">You were</span> <span m="390230">going</span> <span
  m="390360">1</span> <span m="390710">to</span> <span m="391206">2,</span>
  <span m="391702">and 2 to</span> <span m="392200">3,</span> <span
  m="393478">to</span> <span m="393952">2,</span> <span m="394900">and</span>
  <span m="395190">so on.</span> <span m="397780">Let's write the</span> <span
  m="398000">4</span> <span m="398295">in.</span> <span m="399360">So</span>
  <span m="400260">this</span> <span m="400400">is</span> <span
  m="400560">[INAUDIBLE]</span> <span m="400970">only</span> <span
  m="401200">at</span> <span m="401270">tree</span> <span
  m="401450">edges.</span> <span m="403090">So</span> <span m="403190">how would
  you</span> <span m="403320">delete</span> <span
  m="403570">this?</span></p><p><span m="403740">So,</span> <span
  m="403850">let's</span> <span m="404010">say,</span> <span
  m="404120">you</span> <span m="404290">find</span> <span m="404570">the
  first</span> <span m="404700">duplicate</span> <span m="405280">vertex,</span>
  <span m="405870">and</span> <span m="406040">you</span> <span
  m="406100">don't</span> <span m="406260">want that.</span> <span
  m="406440">That's</span> <span m="406610">not</span> <span
  m="406650">allowed.</span> <span m="407570">So</span> <span
  m="407720">all</span> <span m="407840">you</span> <span m="407920">do</span>
  <span m="408050">is,</span> <span m="408120">simply,</span> <span
  m="408360">you follow the</span> <span m="408730">path,</span> <span
  m="409190">and</span> <span m="409310">you</span> <span
  m="409390">bypass</span> <span m="409810">it.</span> <span
  m="410770">And</span> <span m="411010">by</span> <span m="411160">the</span>
  <span m="411250">triangle</span> <span m="411580">inequality,</span> <span
  m="412510">you</span> <span m="412600">know</span> <span
  m="412730">that</span> <span m="412900">bypassing</span> <span
  m="413360">it</span> <span m="413450">will</span> <span
  m="414210">never</span> <span m="414470">increase</span> <span
  m="414810">your</span> <span m="414950">cost.</span> <span
  m="415860">It'll</span> <span m="415900">decrease</span> <span
  m="416010">it,</span> <span m="416200">or</span> <span m="416510">it</span>
  <span m="416820">will</span> <span m="417160">keep it</span> <span
  m="417320">the</span> <span m="417470">same.</span></p><p><span
  m="418530">So</span> <span m="419490">you</span> <span m="419610">can</span>
  <span m="419700">remove</span> <span m="420000">the</span> <span
  m="420080">duplicate</span> <span m="420410">vertex</span> <span m="420730">in
  this</span> <span m="420840">path</span> <span m="421050">just by</span> <span
  m="421270">bypassing</span> <span m="421790">it.</span> <span
  m="421920">But,</span> <span m="422200">also,</span> <span
  m="422540">remember</span> <span m="422770">that this</span> <span
  m="422990">is</span> <span m="423050">a</span> <span
  m="423100">complete</span> <span m="423390">graph.</span> <span
  m="423850">So</span> <span m="423950">the</span> <span
  m="424010">metric</span> <span m="424310">is</span> <span m="424480">defined
  on</span> <span m="424810">all</span> <span m="425140">pairs</span> <span
  m="425370">of</span> <span m="425430">vertices.</span> <span
  m="426320">So</span> <span m="426440">every</span> <span
  m="426810">edge</span> <span m="427030">exists</span> <span
  m="427530">with</span> <span m="427680">some</span> <span
  m="427950">value.</span></p><p><span m="429770">So</span> <span
  m="429910">that</span> <span m="430060">also</span> <span m="430300">follows
  with the</span> <span m="430570">triangle</span> <span
  m="430980">inequality.</span> <span m="431300">So if an</span> <span
  m="431610">edge does</span> <span m="431920">not</span> <span
  m="432090">exist,</span> <span m="432780">just</span> <span
  m="432980">make</span> <span m="433160">it</span> <span m="433270">the</span>
  <span m="433340">sum</span> <span m="433530">of</span> <span
  m="433710">the--</span> <span m="434280">so</span> <span m="434400">if</span>
  <span m="434580">xz</span> <span m="435010">is</span> <span
  m="435110">not</span> <span m="435280">an</span> <span m="435390">edge,</span>
  <span m="435950">just</span> <span m="435960">make it</span> <span
  m="436180">the</span> <span m="436250">sum</span> <span m="436420">of</span>
  <span m="436530">xy</span> <span m="436820">plus</span> <span
  m="437075">yz.</span> <span m="438785">So in</span> <span
  m="439270">any</span> <span m="439570">case,</span> <span
  m="441260">you</span> <span m="441330">construct</span> <span
  m="442300">the</span> <span m="442410">initial</span> <span
  m="442730">path</span> <span m="443070">just</span> <span m="443270">by</span>
  <span m="443370">going</span> <span m="443600">down</span> <span
  m="443780">the</span> <span m="443870">tree</span> <span m="444110">and</span>
  <span m="444260">doing</span> <span m="444520">a</span> <span
  m="444850">naive</span> <span m="445250">DFS</span> <span
  m="445660">traversal.</span> <span m="446810">And,</span> <span
  m="447050">then,</span> <span m="447370">you</span> <span
  m="447470">correct</span> <span m="447790">that</span> <span
  m="448000">path</span> <span m="448470">by</span> <span
  m="449730">skipping</span> <span m="450140">over</span> <span
  m="450470">the</span> <span m="451450">duplicates.</span></p><p><span
  m="452530">So,</span> <span m="452990">finally,</span> <span
  m="453180">we'll</span> <span m="453460">end</span> <span m="453600">up</span>
  <span m="453710">with</span> <span m="453840">[INAUDIBLE]</span> <span
  m="454140">skipping</span> <span m="454320">all the</span> <span
  m="454490">duplicates</span> <span m="454990">we'll get a</span> <span
  m="455080">1, 2, 3,</span> <span m="455488">4, 5,</span> <span
  m="455896">6,</span> <span m="456304">1.</span> <span m="457460">And</span>
  <span m="457540">that's</span> <span m="457720">a valid</span> <span
  m="458000">cycle.</span> <span m="460140">So</span> <span
  m="461360">let's</span> <span m="461530">call</span> <span
  m="461650">this</span> <span m="461800">minimum</span> <span
  m="462070">spanning</span> <span m="462350">tree</span> <span
  m="462510">T.</span> <span m="464360">So</span> <span m="464490">that's</span>
  <span m="464600">your</span> <span m="464720">MST.</span> <span
  m="467760">And</span> <span m="468740">you</span> <span m="468930">are</span>
  <span m="469610">removing</span> <span m="470000">duplicate</span> <span
  m="470380">edges,</span> <span m="470640">and</span> <span
  m="470870">getting</span> <span m="471310">a</span> <span
  m="471440">cycle,</span> <span m="471850">C.</span></p><p><span
  m="474370">So</span> <span m="474490">now,</span> <span
  m="477260">actually,</span> <span m="477660">let's</span> <span
  m="478570">take</span> <span m="478720">another</span> <span
  m="478970">step</span> <span m="479190">back.</span> <span
  m="480600">OK,</span> <span m="482470">let's</span> <span
  m="482690">define</span> <span m="485290">our</span> <span
  m="485360">cycle,</span> <span m="485700">first.</span> <span
  m="487110">So</span> <span m="487630">let's</span> <span
  m="487820">call</span> <span m="488090">this</span> <span
  m="488180">cycle,</span> <span m="490420">this</span> <span
  m="490650">guy</span> <span m="490880">is</span> <span m="491150">C.</span>
  <span m="493650">And</span> <span m="493860">then,</span> <span
  m="494800">you're</span> <span m="494940">going</span> <span
  m="495130">from</span> <span m="495290">C,</span> <span m="496870">and</span>
  <span m="496980">you're</span> <span m="497500">deleting</span> <span
  m="497840">the</span> <span m="497920">duplicates,</span> <span
  m="498720">and</span> <span m="498880">you're getting</span> <span
  m="499100">C</span> <span m="499280">dash.</span> <span m="501580">So</span>
  <span m="501740">now</span> <span m="501900">what</span> <span
  m="502000">you</span> <span m="502090">have</span> <span m="502340">is</span>
  <span m="504350">cost</span> <span m="504860">of</span> <span
  m="506300">C</span> <span m="506770">dash.</span> <span
  m="507240">That's</span> <span m="507710">a</span> <span
  m="508160">[INAUDIBLE],</span> <span m="508400">but</span> <span
  m="508890">anyway.</span></p><p><span m="509870">The</span> <span
  m="509950">cost</span> <span m="510200">of</span> <span m="510260">C</span>
  <span m="510525">dash is</span> <span m="510790">less</span> <span
  m="510970">than</span> <span m="511080">equal</span> <span
  m="511320">to</span> <span m="511600">cost</span> <span m="511910">of</span>
  <span m="512220">C.</span> <span m="513590">And</span> <span
  m="513690">what</span> <span m="513789">is</span> <span m="513809">the</span>
  <span m="513929">cost</span> <span m="514169">of</span> <span
  m="514230">C?</span> <span m="516169">If</span> <span m="516289">you</span>
  <span m="516400">know</span> <span m="516820">the</span> <span
  m="517690">weight</span> <span m="518010">of your</span> <span
  m="518110">minimum</span> <span m="518480">spanning</span> <span
  m="518750">tree,</span> <span m="518929">what</span> <span
  m="519140">is</span> <span m="519230">the</span> <span m="519330">cost</span>
  <span m="519610">of</span> <span m="519659">C?</span> <span m="520049">C
  is</span> <span m="520159">just</span> <span m="520440">doing</span> <span
  m="520630">a</span> <span m="520720">[INAUDIBLE]</span> <span
  m="520860">of</span> <span m="520919">this</span> <span
  m="521190">traversal.</span> <span m="522770">So</span> <span
  m="523179">what</span> <span m="523340">is</span> <span m="523419">the</span>
  <span m="523490">cost</span> <span m="523710">of</span> <span
  m="523770">C,</span> <span m="525900">if</span> <span m="525970">you</span>
  <span m="526350">know</span> <span m="526550">your</span> <span
  m="526610">minimum</span> <span m="526860">spanning</span> <span
  m="526960">tree?</span></p><p><span m="528854">STUDENT:
  [INAUDIBLE]</span></p><p><span m="531550">AMARTYA SHANKHA BISWAS: No.</span>
  <span m="531790">So</span> <span m="531940">you're</span> <span
  m="532200">traversing</span> <span m="532690">every</span> <span
  m="533100">edge</span> <span m="533280">in</span> <span m="533360">the</span>
  <span m="533560">minimum spanning tree</span> <span m="534050">twice.</span>
  <span m="534910">So</span> <span m="535180">you're</span> <span
  m="535360">doing</span> <span m="535480">a</span> <span m="535530">DFS</span>
  <span m="535850">traversal,</span> <span m="536150">right?</span> <span
  m="536310">So you're</span> <span m="536420">going</span> <span
  m="536660">down,</span> <span m="536940">and you're</span> <span
  m="537020">coming</span> <span m="537230">back</span> <span
  m="537540">up.</span> <span m="538040">So</span> <span
  m="538180">you're</span> <span m="538310">going</span> <span
  m="538570">down,</span> <span m="539020">coming</span> <span m="539240">back
  up,</span> <span m="539430">backtracking,</span> <span
  m="539850">coming</span> <span m="540270">back</span> <span
  m="540680">down.</span> <span m="540940">So</span> <span
  m="541210">every</span> <span m="541430">edge</span> <span m="541560">is
  traversed,</span> <span m="541930">right?</span> <span m="542110">So</span>
  <span m="542190">it's</span> <span m="542300">exactly</span> <span
  m="542690">twice</span> <span m="542950">T.</span></p><p><span
  m="544290">So</span> <span m="544820">let's</span> <span m="545160">bring
  up</span> <span m="545445">a different</span> <span m="545730">board.</span>
  <span m="549010">So</span> <span m="550480">you</span> <span
  m="550550">know</span> <span m="550700">that</span> <span
  m="550890">cost</span> <span m="551270">of</span> <span m="551760">C</span>
  <span m="553000">is</span> <span m="553210">twice</span> <span
  m="553800">the</span> <span m="553910">cost</span> <span m="554300">of</span>
  <span m="554660">T.</span> <span m="555450">Does</span> <span
  m="555560">that</span> <span m="555700">make</span> <span
  m="555870">sense,</span> <span m="557030">why</span> <span
  m="557630">the</span> <span m="557750">traversal</span> <span
  m="558180">implies</span> <span m="558530">that</span> <span
  m="558640">you</span> <span m="558740">have</span> <span
  m="559350">every</span> <span m="559655">edge</span> <span
  m="559960">being</span> <span m="560130">visited</span> <span
  m="560200">twice,</span> <span m="560580">right?</span> <span
  m="562180">OK.</span></p><p><span m="562920">So,</span> <span
  m="565070">now,</span> <span m="565280">our</span> <span
  m="565420">claim</span> <span m="565730">is</span> <span
  m="565840">that</span> <span m="566560">the</span> <span m="566660">C
  dash</span> <span m="567190">cycle</span> <span m="567700">is</span> <span
  m="568455">a</span> <span m="568770">2</span> <span
  m="568930">approximation</span> <span m="569580">of</span> <span
  m="569670">the</span> <span m="569770">actual</span> <span
  m="570760">cycle.</span> <span m="571470">So</span> <span
  m="571570">why</span> <span m="571710">is</span> <span m="571830">that?</span>
  <span m="572010">So</span> <span m="572335">we've</span> <span
  m="572660">already</span> <span m="572940">[INAUDIBLE],</span> <span
  m="573130">so</span> <span m="573260">this</span> <span m="573560">also</span>
  <span m="573990">implies</span> <span m="574390">that</span> <span
  m="575310">C</span> <span m="575620">of</span> <span m="575930">C dash</span>
  <span m="577210">is</span> <span m="577680">less</span> <span
  m="577970">than</span> <span m="578100">equal</span> <span
  m="578380">to</span> <span m="579290">2</span> <span m="579570">of C</span>
  <span m="579910">T.</span> <span m="581390">Realize</span> <span
  m="581560">that</span> <span m="581900">this</span> <span m="582010">is</span>
  <span m="582100">not</span> <span m="582280">a</span> <span
  m="582320">valid</span> <span m="583310">cycle,</span> <span
  m="583820">but</span> <span m="583960">this</span> <span m="584110">is</span>
  <span m="584190">a valid</span> <span m="584420">cycle.</span></p><p><span
  m="586310">So,</span> <span m="586460">now,</span> <span m="588050">we</span>
  <span m="588160">need</span> <span m="588250">to</span> <span
  m="588300">show</span> <span m="588430">that</span> <span
  m="588710">this</span> <span m="588920">is</span> <span
  m="589030">somehow</span> <span m="589340">bounded</span> <span
  m="589790">by</span> <span m="590360">a</span> <span m="590510">star</span>
  <span m="590840">G.</span> <span m="591950">So</span> <span
  m="592080">how</span> <span m="592170">do</span> <span m="592240">you</span>
  <span m="592290">do</span> <span m="592400">that?</span> <span
  m="593260">Well,</span> <span m="593570">look at</span> <span m="593740">H
  star</span> <span m="594060">G.</span> <span m="594160">What</span> <span
  m="594270">is H</span> <span m="594410">star G?</span> <span m="594690">H
  star</span> <span m="594890">G</span> <span m="595170">is</span> <span
  m="595310">just</span> <span m="595610">a</span> <span
  m="595710">cycle,</span> <span m="596280">which</span> <span
  m="596660">goes</span> <span m="596920">through</span> <span
  m="597020">the</span> <span m="597110">optimal</span> <span
  m="597480">cycle,</span> <span m="597790">which</span> <span
  m="597940">goes</span> <span m="598170">through</span> <span m="598590">all
  the</span> <span m="598955">vertices</span> <span m="599320">and</span> <span
  m="599440">comes</span> <span m="599650">back</span> <span
  m="599870">to</span> <span m="599960">the</span> <span
  m="600840">parent</span> <span m="601100">vertex.</span></p><p><span
  m="602830">So</span> <span m="602920">this</span> <span m="603060">is</span>
  <span m="603170">H</span> <span m="603270">star</span> <span m="603560">of
  G.</span> <span m="604552">This is</span> <span m="605050">the</span> <span
  m="605140">optimal</span> <span m="605560">thing.</span> <span
  m="607290">Now,</span> <span m="607450">you</span> <span m="607560">can</span>
  <span m="607680">take</span> <span m="607830">an</span> <span
  m="607920">edge,</span> <span m="608190">e,</span> <span
  m="608350">here,</span> <span m="609600">and</span> <span
  m="609730">delete</span> <span m="610040">it.</span> <span
  m="611040">And</span> <span m="611270">then</span> <span
  m="611500">you'll</span> <span m="611790">get</span> <span m="613070">a</span>
  <span m="613160">spanning</span> <span m="613500">tree,</span> <span
  m="614450">because</span> <span m="614960">this</span> <span m="615230">is
  your</span> <span m="615550">optimal</span> <span m="615680">cycle.</span>
  <span m="616410">Remove</span> <span m="616770">one</span> <span
  m="617010">edge,</span> <span m="617380">and</span> <span
  m="617470">you</span> <span m="617530">get</span> <span m="617640">a</span>
  <span m="617690">spanning</span> <span m="618020">tree.</span> <span
  m="618960">So</span> <span m="619620">let's</span> <span
  m="619880">call</span> <span m="620100">that</span> <span m="621110">T</span>
  <span m="621250">dash.</span></p><p><span m="628940">Does that make</span>
  <span m="629190">sense, why</span> <span m="629400">that</span> <span
  m="629550">is</span> <span m="629630">a</span> <span
  m="629680">spanning</span> <span m="629970">tree?</span> <span
  m="630250">Because</span> <span m="630640">you had</span> <span
  m="630710">a</span> <span m="630810">cycle,</span> <span m="630990">and
  you</span> <span m="631320">remove</span> <span m="631490">one edge,</span>
  <span m="631860">so</span> <span m="632180">it touches</span> <span
  m="632380">all</span> <span m="632530">the</span> <span
  m="632670">vertices,</span> <span m="633080">and</span> <span m="633640">it's
  a</span> <span m="634000">tree.</span> <span m="635860">So</span> <span
  m="635960">it's</span> <span m="636060">a</span> <span
  m="636190">spanning</span> <span m="636290">tree,</span> <span
  m="636460">but</span> <span m="636540">it's</span> <span m="636690">not</span>
  <span m="636840">the</span> <span m="636900">minimum</span> <span
  m="637170">spanning</span> <span m="637450">tree.</span> <span
  m="638370">So</span> <span m="638500">you</span> <span m="638630">know</span>
  <span m="638820">that</span> <span m="641270">H</span> <span
  m="641520">star</span> <span m="642720">G,</span> <span m="643680">the</span>
  <span m="643820">cost</span> <span m="644180">of</span> <span
  m="644280">H</span> <span m="644450">star</span> <span m="644750">of</span>
  <span m="644840">G,</span> <span m="647110">is</span> <span
  m="648120">greater</span> <span m="648380">than</span> <span
  m="648640">equal</span> <span m="648810">to</span> <span m="649070">the</span>
  <span m="649230">cost</span> <span m="649620">of</span> <span
  m="651020">H</span> <span m="651250">star</span> <span m="651560">of</span>
  <span m="651870">G</span> <span m="652680">minus</span> <span
  m="653260">the</span> <span m="653430">edge we</span> <span
  m="653640">removed,</span> <span m="655720">is</span> <span
  m="656300">greater</span> <span m="656550">than</span> <span
  m="656800">equal</span> <span m="656950">to</span> <span m="657280">the</span>
  <span m="657440">cost</span> <span m="657740">of</span> <span
  m="657790">T.</span> <span m="659720">Make</span> <span
  m="659810">sense?</span></p><p><span m="661120">So</span> <span
  m="661610">you</span> <span m="661750">remove</span> <span
  m="662010">one</span> <span m="662190">edge,</span> <span
  m="663140">and</span> <span m="663310">then</span> <span
  m="663540">that</span> <span m="663930">is</span> <span
  m="664400">still</span> <span m="665110">greater</span> <span
  m="665350">than</span> <span m="665560">the</span> <span
  m="665620">minimum</span> <span m="665930">spanning tree.</span> <span
  m="667110">So,</span> <span m="668370">now,</span> <span
  m="668500">combining</span> <span m="669850">this</span> <span
  m="670150">guy</span> <span m="671610">and</span> <span m="671860">this</span>
  <span m="672030">guy,</span> <span m="673010">you</span> <span
  m="673110">get</span> <span m="673270">cost of</span> <span m="673590">C
  dash</span> <span m="673830">is</span> <span m="674230">less than</span> <span
  m="674420">equal</span> <span m="674740">to</span> <span m="674880">2</span>
  <span m="675060">[INAUDIBLE].</span> <span m="675930">We</span> <span
  m="676040">know that cost of</span> <span m="676405">C is</span> <span
  m="676770">less</span> <span m="676940">than</span> <span
  m="677050">cost</span> <span m="677330">of H</span> <span m="677480">of
  G,</span> <span m="677750">so</span> <span m="677970">you</span> <span
  m="678120">get a</span> <span m="678280">2-approximation.</span> <span
  m="692088">So</span> <span m="692590">does</span> <span m="692780">that</span>
  <span m="692950">make</span> <span m="693100">sense?</span></p><p><span
  m="698150">So</span> <span m="698440">that was a</span> <span
  m="698740">2-approximation.</span> <span m="699195">That</span> <span
  m="699550">was</span> <span m="699670">pretty</span> <span
  m="699850">straightforward,</span> <span m="700195">We</span> <span
  m="700540">just</span> <span m="700790">constructed</span> <span
  m="701210">a</span> <span m="701270">spanning</span> <span
  m="701590">tree.</span> <span m="702300">You</span> <span
  m="702590">did</span> <span m="702770">a</span> <span m="702910">DFS</span>
  <span m="703110">traversal</span> <span m="703520">and</span> <span
  m="703680">removed</span> <span m="703830">duplicates,</span> <span
  m="704480">and</span> <span m="704590">you</span> <span m="704660">have</span>
  <span m="704900">a</span> <span m="704940">nice</span> <span
  m="705160">path.</span> <span m="707280">OK,</span> <span
  m="707550">let's</span> <span m="707720">just</span> <span m="707870">keep
  it</span> <span m="708050">down.</span></p><p><span m="709736">But</span>
  <span m="710190">here's</span> <span m="710330">the thing.</span> <span
  m="710680">It</span> <span m="710860">seems</span> <span
  m="711130">kind</span> <span m="711270">of</span> <span
  m="711380">wasteful</span> <span m="711880">to</span> <span
  m="712550">go</span> <span m="712750">through</span> <span
  m="712970">all</span> <span m="713120">the</span> <span
  m="713250">edges</span> <span m="713510">when</span> <span
  m="713610">you</span> <span m="713680">don't</span> <span
  m="713840">need</span> <span m="714020">to.</span> <span m="714100">So</span>
  <span m="714250">you're</span> <span m="715070">traveling</span> <span
  m="715440">down</span> <span m="715630">the</span> <span
  m="715720">tree,</span> <span m="716400">you're</span> <span
  m="716510">going</span> <span m="716720">back</span> <span
  m="716930">up,</span> <span m="717620">and</span> <span
  m="717760">you're</span> <span m="718110">traversing</span> <span
  m="718470">every</span> <span m="718700">edge</span> <span
  m="718870">twice.</span> <span m="719690">So</span> <span m="719810">it</span>
  <span m="719900">seems</span> <span m="720110">kind</span> <span
  m="720270">of</span> <span m="720540">ridiculous</span> <span m="720950">that
  you would</span> <span m="721020">be</span> <span m="721290">doing</span>
  <span m="721590">every</span> <span m="721920">edge</span> <span
  m="722240">twice.</span> <span m="723220">So</span> <span
  m="723400">what</span> <span m="723560">could</span> <span
  m="723640">you</span> <span m="723700">do</span> <span
  m="723810">better?</span></p><p><span m="725130">Well,</span> <span
  m="726940">before</span> <span m="727230">we</span> <span m="727310">introduce
  that,</span> <span m="727680">let's</span> <span m="728655">prove</span> <span
  m="728920">a</span> <span m="728970">couple</span> <span m="729200">of</span>
  <span m="729290">lemmas.</span> <span m="731130">So,</span> <span
  m="731870">first,</span> <span m="733600">we</span> <span m="735800">started
  with</span> <span m="736080">this.</span> <span m="736230">So let's</span>
  <span m="736450">say</span> <span m="736870">S</span> <span
  m="737340">is</span> <span m="737460">a</span> <span m="737530">subset</span>
  <span m="738780">of</span> <span m="738980">V.</span> <span
  m="740340">So</span> <span m="740460">you</span> <span m="740510">have</span>
  <span m="740650">a</span> <span m="740700">graph,</span> <span
  m="742320">and</span> <span m="743070">you</span> <span m="743710">make</span>
  <span m="743880">a</span> <span m="743980">subgraph.</span> <span
  m="745290">So</span> <span m="746460">you</span> <span m="746560">pick</span>
  <span m="746740">out</span> <span m="746890">some</span> <span
  m="747060">vertices.</span></p><p><span m="747956">So you</span> <span
  m="748320">pick out</span> <span m="748580">this</span> <span
  m="748740">one,</span> <span m="749040">and this</span> <span
  m="749200">one,</span> <span m="749480">and this</span> <span
  m="749590">one,</span> <span m="749840">and this</span> <span
  m="749990">one,</span> <span m="750710">and</span> <span
  m="750820">that</span> <span m="751000">is your</span> <span
  m="751290">S.</span> <span m="752940">And,</span> <span m="753320">so,</span>
  <span m="754070">you</span> <span m="754190">get</span> <span m="754320">a
  new</span> <span m="754540">graph</span> <span m="755470">which</span> <span
  m="755920">contains</span> <span m="756400">just</span> <span
  m="756670">those</span> <span m="756870">vertices.</span> <span
  m="758310">And,</span> <span m="759130">whatever,</span> <span
  m="759420">I</span> <span m="759590">just</span> <span
  m="759740">connect</span> <span m="759990">them.</span> <span
  m="762430">So</span> <span m="762540">the</span> <span m="762600">claim</span>
  <span m="762850">is</span> <span m="762940">that</span> <span
  m="763395">that</span> <span m="763850">graph</span> <span
  m="764080">also</span> <span m="764340">has</span> <span m="764750">a</span>
  <span m="764810">Hamiltonian</span> <span m="765300">cycle,</span> <span
  m="766070">the</span> <span m="766280">minimum</span> <span
  m="766560">cost</span> <span m="766800">Hamiltonian</span> <span
  m="767050">cycle,</span> <span m="767460">which</span> <span
  m="767650">is</span> <span m="767920">also</span> <span m="768160">the
  traveling</span> <span m="768420">salesman</span> <span
  m="769310">solution.</span></p><p><span m="770380">So</span> <span
  m="770570">let's</span> <span m="770770">call</span> <span
  m="771010">that</span> <span m="772090">H</span> <span m="772890">star</span>
  <span m="773630">of</span> <span m="773840">S.</span> <span
  m="775090">So</span> <span m="775740">it's</span> <span m="775840">some</span>
  <span m="776060">cycle,</span> <span m="776850">which</span> <span
  m="777160">looks</span> <span m="777320">like</span> <span
  m="777470">this,</span> <span m="777640">I</span> <span
  m="777760">guess,</span> <span m="778612">here.</span> <span
  m="779890">So</span> <span m="780030">H</span> <span m="780180">star</span>
  <span m="780490">of S.</span> <span m="781370">Now, the</span> <span
  m="781710">claim</span> <span m="781980">is</span> <span
  m="782090">that</span> <span m="783190">the</span> <span
  m="783370">cost</span> <span m="783760">of</span> <span m="784500">H</span>
  <span m="784720">star</span> <span m="785030">of</span> <span
  m="785160">S</span> <span m="786590">is</span> <span m="786780">less</span>
  <span m="787020">than</span> <span m="787130">equal</span> <span
  m="787400">to</span> <span m="787600">the</span> <span m="788090">cost</span>
  <span m="788460">of</span> <span m="789360">H</span> <span
  m="789620">star</span> <span m="790020">of G.</span></p><p><span
  m="791580">That</span> <span m="791660">should</span> <span
  m="791820">make</span> <span m="791960">intuitive</span> <span
  m="792270">sense,</span> <span m="792850">because</span> <span
  m="793600">you're</span> <span m="793710">taking</span> <span m="793940">only
  some</span> <span m="794130">of the</span> <span m="794460">vertices</span>
  <span m="794720">and</span> <span m="794830">trying</span> <span
  m="795070">to</span> <span m="795160">traverse</span> <span
  m="795520">them,</span> <span m="796200">and,</span> <span
  m="797310">in</span> <span m="797490">this</span> <span
  m="797680">case,</span> <span m="797830">you'll</span> <span
  m="797910">try</span> <span m="798080">to</span> <span
  m="798260">traverse</span> <span m="798700">all the</span> <span
  m="799130">vertices.</span> <span m="799405">However,</span> <span
  m="800140">this</span> <span m="800220">is</span> <span m="800820">only</span>
  <span m="801030">true</span> <span m="801220">because</span> <span
  m="801460">of</span> <span m="801520">the</span> <span
  m="801600">triangle</span> <span m="801890">inequality,</span> <span
  m="802350">and</span> <span m="802530">let's see</span> <span
  m="802640">why</span> <span m="802780">that</span> <span m="802960">is</span>
  <span m="803050">the</span> <span m="803140">case.</span></p><p><span
  m="804800">So,</span> <span m="807310">proof</span> <span m="807520">by</span>
  <span m="807620">contradiction.</span> <span m="809470">Say</span> <span
  m="811830">cost</span> <span m="812230">of</span> <span m="813780">H</span>
  <span m="813950">star</span> <span m="814350">of</span> <span
  m="814510">S</span> <span m="815750">is</span> <span
  m="815910">actually</span> <span m="816400">greater</span> <span
  m="816740">than</span> <span m="817610">cost</span> <span m="818000">of</span>
  <span m="819070">H</span> <span m="819320">star</span> <span
  m="819670">of</span> <span m="820020">G.</span> <span m="822360">OK,</span>
  <span m="823280">so,</span> <span m="823980">look</span> <span
  m="824170">at</span> <span m="824220">H</span> <span m="824320">star</span>
  <span m="824680">of G.</span> <span m="824890">It's</span> <span
  m="825070">a</span> <span m="825150">cycle,</span> <span
  m="825600">right?</span> <span m="825930">So</span> <span
  m="826240">you</span> <span m="826330">have</span> <span
  m="826550">something.</span> <span m="829350">Your</span> <span
  m="829800">cycle.</span></p><p><span m="830890">And,</span> <span
  m="832120">in</span> <span m="832250">this</span> <span
  m="832350">cycle,</span> <span m="833290">you</span> <span
  m="833400">have</span> <span m="833590">all</span> <span m="833800">the</span>
  <span m="833850">vertices</span> <span m="834190">of</span> <span
  m="834290">S.</span> <span m="835060">So</span> <span m="835270">pick</span>
  <span m="835490">them</span> <span m="835630">out.</span> <span
  m="839810">And,</span> <span m="840010">now,</span> <span
  m="841190">you</span> <span m="841300">have</span> <span m="841460">a</span>
  <span m="841510">cycle</span> <span m="842460">which</span> <span
  m="843250">has</span> <span m="843520">cost</span> <span
  m="843850">less</span> <span m="844090">than</span> <span
  m="844220">the</span> <span m="844380">optimal</span> <span
  m="844540">cycle</span> <span m="844780">in S,</span> <span
  m="845310">but</span> <span m="845560">it</span> <span
  m="845680">contains</span> <span m="845810">all</span> <span
  m="845910">the</span> <span m="845980">vertices</span> <span
  m="846150">in</span> <span m="846300">S.</span> <span m="847260">So</span>
  <span m="847360">what</span> <span m="847460">you</span> <span
  m="847480">can</span> <span m="847620">do</span> <span m="847800">is,</span>
  <span m="848000">now you</span> <span m="848120">can</span> <span
  m="848250">use</span> <span m="848390">the</span> <span
  m="848530">skipping</span> <span m="848750">lemma</span> <span
  m="848910">from</span> <span m="849090">before.</span></p><p><span
  m="851840">So,</span> <span m="852180">last</span> <span
  m="852450">time,</span> <span m="852520">we</span> <span
  m="852610">didn't</span> <span m="852650">move</span> <span
  m="852850">duplicate</span> <span m="853140">vertices.</span> <span
  m="853520">But,</span> <span m="853610">this</span> <span
  m="853760">time,</span> <span m="853960">what you'll</span> <span
  m="854180">do</span> <span m="854340">is,</span> <span
  m="854810">instead,</span> <span m="854890">you'll</span> <span
  m="855180">just</span> <span m="855850">skip</span> <span
  m="856220">over</span> <span m="857320">this</span> <span
  m="857490">vertex.</span> <span m="859220">We'll</span> <span
  m="859350">skip</span> <span m="859590">over</span> <span
  m="859780">this</span> <span m="860130">vertex.</span> <span
  m="860930">And</span> <span m="861080">so,</span> <span
  m="861160">every</span> <span m="861440">vertex</span> <span
  m="861720">that's</span> <span m="861890">not</span> <span m="862200">an
  S,</span> <span m="862600">skip</span> <span m="862880">over</span> <span
  m="863020">it.</span> <span m="863720">And</span> <span m="863870">that</span>
  <span m="864030">can</span> <span m="864130">only</span> <span
  m="864320">decrease</span> <span m="864640">the</span> <span
  m="864750">cost.</span></p><p><span m="866260">So,</span> <span
  m="866290">now,</span> <span m="866470">you've</span> <span
  m="866610">constructed</span> <span m="867070">another</span> <span
  m="867360">cycle,</span> <span m="868230">which</span> <span
  m="868480">contains</span> <span m="868890">only</span> <span
  m="869130">the</span> <span m="869300">vertices</span> <span
  m="869340">of</span> <span m="869550">S.</span> <span m="869910">So</span>
  <span m="870010">it's</span> <span m="870130">a</span> <span
  m="870440">Hamiltonian</span> <span m="870540">cycle</span> <span
  m="870810">for</span> <span m="870960">S,</span> <span m="872160">but</span>
  <span m="872340">it</span> <span m="872500">has</span> <span
  m="872740">cost</span> <span m="873010">less</span> <span
  m="873170">than</span> <span m="873270">equal</span> <span
  m="873480">to</span> <span m="873620">H star</span> <span m="873950">of
  G,</span> <span m="875170">which</span> <span m="875330">means</span> <span
  m="875520">that</span> <span m="875620">this</span> <span m="876070">can
  never</span> <span m="876240">be</span> <span
  m="876370">true.</span></p><p><span m="878090">So</span> <span
  m="878410">the</span> <span m="878740">important</span> <span m="879160">fact
  is,</span> <span m="879600">there,</span> <span m="879820">that</span> <span
  m="880560">if</span> <span m="880660">you</span> <span m="880750">have</span>
  <span m="880870">a</span> <span m="880920">subset</span> <span
  m="881230">of</span> <span m="881370">vertices</span> <span
  m="881910">making</span> <span m="883540">the</span> <span
  m="883770">restricted</span> <span m="884200">graph,</span> <span
  m="887390">the</span> <span m="887570">cost</span> <span m="887780">of
  the</span> <span m="888040">minimum</span> <span m="888190">Hamiltonian</span>
  <span m="888610">cycle</span> <span m="889370">is</span> <span
  m="889500">always</span> <span m="889740">less</span> <span
  m="889880">than</span> <span m="889990">equal</span> <span
  m="890220">to</span> <span m="890300">the</span> <span m="890400">one</span>
  <span m="890540">in</span> <span m="890600">the</span> <span
  m="890650">original</span> <span m="890980">graph.</span> <span
  m="892370">So,</span> <span m="892510">intuitively,</span> <span
  m="892720">that</span> <span m="892980">should</span> <span
  m="893090">make</span> <span m="893240">sense.</span></p><p><span
  m="895190">OK,</span> <span m="896830">next</span> <span
  m="897060">thing</span> <span m="897250">is</span> <span
  m="897360">something</span> <span m="898160">which</span> <span
  m="898280">might</span> <span m="898460">seem</span> <span
  m="898580">unfamiliar</span> <span m="898970">right</span> <span
  m="899140">now,</span> <span m="901720">perfect</span> <span
  m="902050">matchings.</span> <span m="910360">So</span> <span
  m="911780">you've</span> <span m="912190">seen</span> <span
  m="912310">perfect</span> <span m="912390">matchings</span> <span
  m="912590">in</span> <span m="912800">the</span> <span
  m="912890">content</span> <span m="913170">of</span> <span
  m="913570">bipartite</span> <span m="914060">graphs,</span> <span
  m="914270">right?</span> <span m="914500">So you</span> <span
  m="914660">find</span> <span m="914930">the</span> <span
  m="915000">minimum</span> <span m="915310">cost</span> <span
  m="915550">perfect</span> <span m="915820">matching.</span> <span
  m="916560">You</span> <span m="916690">do</span> <span m="916970">this</span>
  <span m="917060">flow</span> <span m="917360">thing,</span> <span
  m="917560">you</span> <span m="917880">send</span> <span m="918080">all</span>
  <span m="918210">the</span> <span m="918520">flow</span> <span
  m="918890">in,</span> <span m="919070">and</span> <span m="919220">then</span>
  <span m="919360">you</span> <span m="919700">connect</span> <span
  m="919940">the</span> <span m="919990">vertices</span> <span
  m="920370">with</span> <span m="920460">the</span> <span
  m="920530">capacities,</span> <span m="921020">and</span> <span
  m="921380">whatever.</span></p><p><span m="922400">So,</span> <span
  m="922710">it</span> <span m="922870">turns</span> <span
  m="923050">out,</span> <span m="923770">in</span> <span m="923970">a</span>
  <span m="924020">complete</span> <span m="924360">graph,</span> <span
  m="926420">you</span> <span m="926520">can</span> <span
  m="926620">still</span> <span m="926860">do</span> <span
  m="927100">perfect</span> <span m="927380">matching.</span> <span
  m="927770">So</span> <span m="927790">perfect</span> <span
  m="928075">matching</span> <span m="928360">is,</span> <span
  m="928470">you</span> <span m="928590">have a</span> <span m="928650">bunch
  of--</span> <span m="929240">so,</span> <span m="929340">let's</span> <span
  m="929350">say,</span> <span m="929440">you</span> <span
  m="929890">need</span> <span m="930030">to</span> <span m="930080">have</span>
  <span m="930200">an</span> <span m="930270">even</span> <span
  m="930430">number</span> <span m="930670">of</span> <span
  m="930730">vertices,</span> <span m="930920">right,</span> <span
  m="931400">until</span> <span m="931590">we have</span> <span
  m="931830">perfect</span> <span m="931980">matching.</span></p><p><span
  m="932860">So,</span> <span m="933120">let's</span> <span
  m="933260">say,</span> <span m="933670">you</span> <span
  m="933740">have</span> <span m="933900">these</span> <span
  m="934040">varieties.</span> <span m="935885">So</span> <span
  m="936170">this</span> <span m="936350">is</span> <span m="936430">a</span>
  <span m="936480">perfect</span> <span m="936730">matching.</span> <span
  m="937880">So</span> <span m="937900">every</span> <span
  m="938080">vertex</span> <span m="938360">has</span> <span
  m="938480">one</span> <span m="938680">edge</span> <span
  m="938810">coming</span> <span m="939000">out</span> <span
  m="939110">of</span> <span m="939230">it,</span> <span
  m="940250">exactly</span> <span m="940630">one</span> <span m="940790">edge
  coming</span> <span m="941146">out of it.</span> <span m="941860">And</span>
  <span m="942000">it</span> <span m="942100">needs</span> <span
  m="942260">to</span> <span m="942310">be</span> <span m="942420">even,</span>
  <span m="942640">because,</span> <span m="942830">otherwise,</span> <span
  m="943085">that</span> <span m="943340">doesn't</span> <span
  m="943480">work</span> <span m="943710">out.</span></p><p><span
  m="944600">So</span> <span m="944940">that's</span> <span
  m="945350">perfect</span> <span m="945530">matching,</span> <span
  m="945820">and</span> <span m="945930">the</span> <span
  m="945990">minimum</span> <span m="946290">cost</span> <span
  m="946490">perfect</span> <span m="946680">matching</span> <span
  m="947000">is</span> <span m="947120">the</span> <span
  m="947200">minimum</span> <span m="947490">among</span> <span
  m="947780">all</span> <span m="948150">such</span> <span
  m="948520">things.</span> <span m="949430">And</span> <span m="949720">you did
  this</span> <span m="949870">for bivariate</span> <span
  m="950210">graphs.</span> <span m="950495">It's</span> <span
  m="950780">finite</span> <span m="951030">[INAUDIBLE]</span> <span
  m="951580">networks.</span> <span m="952790">So</span> <span
  m="952940">I'm</span> <span m="953030">not</span> <span
  m="953170">going</span> <span m="953270">to</span> <span m="953310">go</span>
  <span m="953470">into</span> <span m="953600">the</span> <span
  m="954090">algorithm</span> <span m="954310">for</span> <span
  m="954410">this.</span> <span m="954650">It's</span> <span
  m="954870">kind</span> <span m="955010">of</span> <span
  m="955060">complicated,</span> <span m="955540">but</span> <span
  m="956170">it</span> <span m="956300">uses</span> <span
  m="956600">linear</span> <span m="956810">programming,</span> <span
  m="957360">and</span> <span m="958150">you</span> <span m="958250">can</span>
  <span m="958380">find</span> <span m="958570">this</span> <span
  m="958690">for</span> <span m="958760">a</span> <span
  m="958810">complete</span> <span m="959070">graph,</span> <span
  m="959780">and</span> <span m="959980">it's</span> <span
  m="960090">polynomial,</span> <span m="960580">so</span> <span
  m="961050">that's</span> <span m="961260">good.</span></p><p><span
  m="962280">So,</span> <span m="962520">given</span> <span m="963360">a</span>
  <span m="963640">complete</span> <span m="963940">graph,</span> <span
  m="964300">you can</span> <span m="964420">find</span> <span
  m="964860">the</span> <span m="965300">perfect</span> <span
  m="965520">matching.</span> <span m="966520">[INAUDIBLE]</span> <span
  m="967180">for</span> <span m="967320">now.</span> <span m="967987">OK,</span>
  <span m="969300">one</span> <span m="969500">last</span> <span
  m="969790">thing</span> <span m="969920">we</span> <span
  m="970020">want</span> <span m="970140">to</span> <span
  m="970190">introduce</span> <span m="971940">is</span> <span
  m="975900">Euler</span> <span m="976020">circuits.</span> <span
  m="976960">So</span> <span m="977060">who</span> <span m="977320">has</span>
  <span m="977580">heard</span> <span m="977750">of</span> <span
  m="977850">Euler</span> <span m="978100">circuits</span> <span
  m="978390">before?</span> <span m="980072">Anyone?</span> <span
  m="980536">Sort</span> <span m="981000">of?</span> <span
  m="981606">OK.</span></p><p><span m="994150">So</span> <span
  m="995000">the</span> <span m="995100">reason</span> <span
  m="995370">we</span> <span m="995500">are--</span> <span m="995970">so,</span>
  <span m="996480">OK,</span> <span m="996660">let's</span> <span
  m="996810">go</span> <span m="996920">back</span> <span m="997090">to</span>
  <span m="997170">what</span> <span m="997540">we</span> <span
  m="997650">did</span> <span m="997820">before.</span> <span
  m="998550">We</span> <span m="998700">had</span> <span m="998810">a</span>
  <span m="998880">tree,</span> <span m="1000110">and</span> <span
  m="1001270">the</span> <span m="1001650">best</span> <span
  m="1001870">way</span> <span m="1002000">we found</span> <span
  m="1002240">to</span> <span m="1002310">traverse</span> <span
  m="1002670">it</span> <span m="1002770">was</span> <span
  m="1002960">just</span> <span m="1003140">going</span> <span m="1003450">down,
  and</span> <span m="1003820">going</span> <span m="1004050">back</span> <span
  m="1004300">up,</span> <span m="1004460">and</span> <span
  m="1004570">going</span> <span m="1004800">down,</span> <span
  m="1005100">and</span> <span m="1005370">terribly</span> <span
  m="1005610">messy.</span></p><p><span m="1006430">So</span> <span
  m="1006550">what we</span> <span m="1006630">would,</span> <span
  m="1007050">rather,</span> <span m="1007300">want</span> <span
  m="1007430">to</span> <span m="1007520">do,</span> <span m="1008460">is</span>
  <span m="1008590">sort</span> <span m="1008730">of</span> <span
  m="1008810">traverse</span> <span m="1009970">the</span> <span
  m="1010110">thing</span> <span m="1010800">without</span> <span
  m="1011660">repeating</span> <span m="1012140">edges.</span> <span
  m="1013170">So,</span> <span m="1013650">I don't know,</span> <span
  m="1013980">you've probably</span> <span m="1014270">seen</span> <span
  m="1014400">this</span> <span m="1014530">puzzle</span> <span
  m="1014770">before.</span> <span m="1015010">So</span> <span
  m="1015150">you</span> <span m="1015750">have</span> <span
  m="1016380">this</span> <span m="1016520">graph</span> <span
  m="1016820">given</span> <span m="1017030">to</span> <span
  m="1017100">you,</span> <span m="1018240">and</span> <span
  m="1019240">the</span> <span m="1019360">task</span> <span
  m="1019720">is</span> <span m="1019860">to</span> <span
  m="1020490">draw</span> <span m="1020750">this</span> <span
  m="1020950">graph</span> <span m="1021250">without</span> <span
  m="1022070">lifting</span> <span m="1022380">your</span> <span m="1022560">pen
  off</span> <span m="1022940">the</span> <span
  m="1023030">paper.</span></p><p><span m="1024630">So first,</span> <span
  m="1024900">for</span> <span m="1025010">example,</span> <span
  m="1025300">in</span> <span m="1025380">this</span> <span
  m="1025550">graph,</span> <span m="1026240">you</span> <span
  m="1026369">could</span> <span m="1026450">start</span> <span
  m="1026730">here,</span> <span m="1027560">go</span> <span
  m="1027700">here,</span> <span m="1028589">go</span> <span
  m="1028730">here,</span> <span m="1029269">and</span> <span
  m="1029579">come</span> <span m="1029770">back,</span> <span
  m="1030119">and</span> <span m="1030572">something,</span> <span
  m="1031025">and</span> <span m="1031931">there</span> <span
  m="1032384">you</span> <span m="1032837">got.</span> <span
  m="1033290">So</span> <span m="1033750">you</span> <span
  m="1033829">can</span> <span m="1033920">do</span> <span
  m="1034020">that.</span> <span m="1035390">But</span> <span
  m="1035520">if</span> <span m="1035589">you</span> <span
  m="1035710">add</span> <span m="1035890">on</span> <span
  m="1036510">another</span> <span m="1038510">lobe,</span> <span
  m="1038760">here,</span> <span m="1039470">then</span> <span
  m="1039839">you</span> <span m="1039980">can't</span> <span
  m="1040390">make</span> <span m="1040569">a</span> <span
  m="1040630">circuit.</span> <span m="1041130">You</span> <span m="1041490">can
  still</span> <span m="1041720">make</span> <span m="1041869">a</span> <span
  m="1042140">path,</span> <span m="1042369">I believe.</span> <span
  m="1042550">If you</span> <span m="1042970">add</span> <span
  m="1043160">another</span> <span m="1043410">one,</span> <span m="1043730">you
  can't even</span> <span m="1043800">make a</span> <span
  m="1044089">path.</span></p><p><span m="1045280">So</span> <span
  m="1045480">how</span> <span m="1045560">does</span> <span
  m="1045670">this</span> <span m="1045800">work?</span> <span
  m="1047339">Let's</span> <span m="1047560">see.</span> <span
  m="1047960">So,</span> <span m="1052020">let's</span> <span
  m="1052230">say,</span> <span m="1053210">forget</span> <span
  m="1053430">about</span> <span m="1053590">the</span> <span
  m="1053650">graph,</span> <span m="1053940">for now.</span> <span
  m="1054020">Let's</span> <span m="1054220">say</span> <span
  m="1054320">you're</span> <span m="1054430">just</span> <span
  m="1054640">drawing.</span> <span m="1055230">So</span> <span
  m="1055530">you</span> <span m="1055700">start</span> <span
  m="1055970">somewhere.</span> <span m="1056750">You</span> <span
  m="1057080">go</span> <span m="1057140">to</span> <span m="1057280">a</span>
  <span m="1057360">vertex.</span> <span m="1057980">You go</span> <span
  m="1058430">to</span> <span m="1058510">another</span> <span
  m="1058670">vertex.</span> <span m="1059530">Come</span> <span
  m="1059800">back,</span> <span m="1060435">go</span> <span
  m="1060750">to</span> <span m="1060880">this</span> <span
  m="1061040">vertex,</span> <span m="1061440">leave</span> <span
  m="1061630">it.</span></p><p><span m="1062766">And</span> <span
  m="1063190">so,</span> <span m="1063840">observe</span> <span
  m="1064170">that,</span> <span m="1064370">whenever</span> <span
  m="1064670">you're</span> <span m="1064930">making</span> <span
  m="1065360">this drawing,</span> <span m="1066960">you</span> <span
  m="1067380">go</span> <span m="1067580">to</span> <span m="1067690">a</span>
  <span m="1067750">vertex,</span> <span m="1068440">and</span> <span
  m="1068550">you</span> <span m="1068660">leave</span> <span
  m="1068870">it.</span> <span m="1069510">Every</span> <span
  m="1069750">time</span> <span m="1069910">you</span> <span
  m="1069980">hit</span> <span m="1070130">a</span> <span
  m="1070350">vertex,</span> <span m="1071070">you</span> <span
  m="1071210">leave</span> <span m="1071430">it.</span> <span
  m="1072340">Since</span> <span m="1072580">there's</span> <span
  m="1072710">the</span> <span m="1072850">circuit,</span> <span
  m="1073800">you</span> <span m="1073880">just</span> <span
  m="1074060">loop</span> <span m="1074280">around,</span> <span
  m="1074600">and</span> <span m="1074740">every</span> <span
  m="1074990">time</span> <span m="1075220">you enter</span> <span m="1075500">a
  vertex,</span> <span m="1075750">you'll have</span> <span m="1076060">to
  leave</span> <span m="1076490">it.</span></p><p><span m="1077480">What</span>
  <span m="1077580">that</span> <span m="1077770">means</span> <span
  m="1078010">is</span> <span m="1078110">that,</span> <span
  m="1079550">even</span> <span m="1079750">though</span> <span
  m="1079820">this</span> <span m="1080000">is</span> <span
  m="1080290">not</span> <span m="1080450">directed,</span> <span
  m="1080920">if</span> <span m="1081000">you</span> <span m="1081600">drew
  out</span> <span m="1081940">the</span> <span m="1082000">actual</span> <span
  m="1082300">path,</span> <span m="1083290">you would</span> <span
  m="1083320">see,</span> <span m="1083420">the</span> <span
  m="1083490">number</span> <span m="1084690">of edges</span> <span
  m="1084870">going</span> <span m="1085120">into</span> <span
  m="1085240">a</span> <span m="1085430">vertex</span> <span
  m="1086030">is</span> <span m="1086130">equal the</span> <span
  m="1086340">number of</span> <span m="1086610">ones</span> <span
  m="1086810">leaving,</span> <span m="1087520">which</span> <span
  m="1087690">means</span> <span m="1087980">that</span> <span
  m="1088670">every</span> <span m="1089020">degree</span> <span
  m="1089330">has</span> <span m="1089500">to</span> <span m="1089580">be</span>
  <span m="1089810">even.</span></p><p><span m="1091280">So</span> <span
  m="1091390">if you</span> <span m="1091480">go</span> <span
  m="1091620">and</span> <span m="1091680">look</span> <span
  m="1091860">at</span> <span m="1092000">this</span> <span
  m="1092180">graph,</span> <span m="1093400">which</span> <span
  m="1093550">is</span> <span m="1094240">that</span> <span
  m="1094480">of</span> <span m="1094710">lobes,</span> <span
  m="1095600">this</span> <span m="1095780">degree is</span> <span
  m="1096110">not</span> <span m="1096280">even.</span> <span
  m="1096520">Neither</span> <span m="1096780">is</span> <span
  m="1096900">this,</span> <span m="1097130">neither</span> <span
  m="1097380">is</span> <span m="1097490">this,</span> <span m="1097935">neither
  is</span> <span m="1098380">this.</span> <span m="1098860">They're all</span>
  <span m="1099000">5,</span> <span m="1099480">I think,</span> <span
  m="1099927">yeah.</span> <span m="1100374">They're all 5,</span> <span
  m="1101270">which</span> <span m="1101420">means</span> <span
  m="1101620">that</span> <span m="1101780">this</span> <span
  m="1102300">can</span> <span m="1102400">never</span> <span
  m="1102610">have</span> <span m="1102750">an</span> <span
  m="1102880">Euler</span> <span m="1103200">circuit.</span></p><p><span
  m="1103950">So a</span> <span m="1104120">graph</span> <span
  m="1104500">can</span> <span m="1104770">only</span> <span
  m="1104850">have</span> <span m="1104960">an Euler</span> <span
  m="1105220">circuit</span> <span m="1106290">if</span> <span
  m="1106430">it</span> <span m="1106550">has</span> <span
  m="1107590">even</span> <span m="1107830">degrees</span> <span
  m="1108170">for</span> <span m="1108350">every</span> <span
  m="1108640">vertex.</span> <span m="1110460">And</span> <span
  m="1110700">the</span> <span m="1110780">other</span> <span
  m="1111020">way</span> <span m="1111160">is</span> <span
  m="1111260">also</span> <span m="1111480">true.</span> <span
  m="1111940">If</span> <span m="1112090">a</span> <span
  m="1112160">graph</span> <span m="1112460">has</span> <span
  m="1112640">even</span> <span m="1112830">degrees</span> <span
  m="1113100">on</span> <span m="1113190">every</span> <span m="1113670">vertex,
  then it</span> <span m="1113760">must</span> <span m="1114100">have</span>
  <span m="1114180">an Euler</span> <span m="1114420">circuit.</span> <span
  m="1115140">That's</span> <span m="1115640">not</span> <span
  m="1115760">hard</span> <span m="1116080">to prove,</span> <span
  m="1116320">but</span> <span m="1116640">there's</span> <span
  m="1116780">a</span> <span m="1116960">constructive</span> <span
  m="1117290">algorithm</span> <span m="1117540">you can</span> <span
  m="1117620">use.</span></p><p><span m="1118370">So,</span> <span
  m="1118500">let's</span> <span m="1118670">say,</span> <span
  m="1118790">you're</span> <span m="1118940">given</span> <span
  m="1119190">this</span> <span m="1119360">graph,</span> <span
  m="1119600">for</span> <span m="1119700">instance.</span> <span
  m="1120570">You</span> <span m="1121720">would</span> <span
  m="1121830">simply</span> <span m="1122560">go</span> <span
  m="1122740">to</span> <span m="1122880">the</span> <span
  m="1123000">graph,</span> <span m="1123530">just</span> <span
  m="1123870">start at</span> <span m="1124200">some</span> <span
  m="1124360">random</span> <span m="1124650">node,</span> <span
  m="1125540">and</span> <span m="1125680">then</span> <span
  m="1125910">go</span> <span m="1126130">through,</span> <span
  m="1127130">and</span> <span m="1127330">keep</span> <span
  m="1127500">following</span> <span m="1127860">edges</span> <span
  m="1128850">until you</span> <span m="1129030">can</span> <span
  m="1129150">no</span> <span m="1129250">longer</span> <span
  m="1129490">following</span> <span m="1129850">edges.</span> <span
  m="1130150">So,</span> <span m="1130530">let's</span> <span m="1130730">say,
  you</span> <span m="1130870">stop</span> <span m="1131130">here.</span> <span
  m="1131820">Then,</span> <span m="1131940">you</span> <span
  m="1132040">pick</span> <span m="1132190">another</span> <span
  m="1132440">edge,</span> <span m="1132920">and</span> <span
  m="1133050">start,</span> <span m="1134110">and</span> <span
  m="1134210">so</span> <span m="1134330">on.</span></p><p><span
  m="1134450">And,</span> <span m="1134570">then,</span> <span
  m="1134690">you</span> <span m="1134760">can</span> <span
  m="1135030">splice</span> <span m="1135490">these</span> <span
  m="1135650">cycles</span> <span m="1135990">together</span> <span
  m="1136330">at</span> <span m="1136420">some</span> <span
  m="1136570">point.</span> <span m="1137530">So</span> <span
  m="1137880">it's</span> <span m="1138260">kind</span> <span
  m="1138390">of</span> <span m="1138450">a</span> <span
  m="1138740">[INAUDIBLE]</span> <span m="1138820">argument,</span> <span
  m="1139170">but</span> <span m="1139680">it</span> <span
  m="1139800">should</span> <span m="1139990">be</span> <span
  m="1140450">sort</span> <span m="1140660">of</span> <span
  m="1140740">intuitive</span> <span m="1141540">why</span> <span
  m="1141860">you</span> <span m="1142010">can</span> <span
  m="1142200">construct</span> <span m="1142580">another</span> <span
  m="1142840">path,</span> <span m="1143050">given</span> <span
  m="1143280">an</span> <span m="1143370">even</span> <span
  m="1143560">degree.</span> <span m="1145220">You</span> <span
  m="1145495">just</span> <span m="1145770">perform</span> <span
  m="1146180">searches.</span> <span m="1146520">You</span> <span
  m="1146890">just</span> <span m="1147130">create</span> <span
  m="1147360">cycles,</span> <span m="1147670">and you</span> <span
  m="1147920">splice</span> <span m="1148080">them</span> <span
  m="1148433">together.</span></p><p><span m="1149140">But,</span> <span
  m="1149420">for now,</span> <span m="1149650">just take it</span> <span
  m="1149790">as</span> <span m="1150290">fact</span> <span
  m="1150560">that</span> <span m="1152440">a</span> <span
  m="1152550">graph</span> <span m="1152830">is</span> <span m="1152920">an
  Euler</span> <span m="1153290">circuit,</span> <span m="1153590">as</span>
  <span m="1153890">in</span> <span m="1153960">you</span> <span
  m="1154030">can</span> <span m="1154170">draw</span> <span
  m="1154370">it</span> <span m="1154600">without</span> <span
  m="1154860">lifting</span> <span m="1154960">your pen</span> <span
  m="1155090">off,</span> <span m="1156060">if,</span> <span
  m="1156220">and</span> <span m="1156320">only</span> <span
  m="1156590">if,</span> <span m="1157070">every</span> <span
  m="1157410">vertex</span> <span m="1157780">has</span> <span
  m="1157880">even</span> <span m="1158110">degree,</span> <span
  m="1159630">so</span> <span m="1159740">why</span> <span m="1159880">is
  that</span> <span m="1159990">interesting?</span></p><p><span
  m="1161040">So,</span> <span m="1161160">let's</span> <span
  m="1161350">say,</span> <span m="1161680">we</span> <span
  m="1161790">could</span> <span m="1161920">add</span> <span m="1162180">some
  edges</span> <span m="1162540">to our</span> <span m="1162865">tree</span>
  <span m="1163910">and</span> <span m="1164100">turn</span> <span
  m="1164260">it</span> <span m="1164330">into</span> <span m="1165360">one
  of</span> <span m="1165600">those</span> <span m="1165770">nice</span> <span
  m="1166000">graphs.</span> <span m="1166870">Right now,</span> <span
  m="1167090">this</span> <span m="1167110">is</span> <span
  m="1167300">not,</span> <span m="1167490">right?</span> <span
  m="1167680">This</span> <span m="1167990">is</span> <span
  m="1168310">degree</span> <span m="1168570">1,</span> <span
  m="1168880">degree</span> <span m="1169170">1,</span> <span
  m="1169400">degree</span> <span m="1169690">3,</span> <span
  m="1169960">degree</span> <span m="1170200">1,</span> <span
  m="1170430">degree</span> <span m="1170680">1,</span> <span
  m="1171260">degree</span> <span m="1171360">3.</span> <span
  m="1171650">All</span> <span m="1171810">of</span> <span
  m="1171890">them</span> <span m="1172010">are</span> <span
  m="1172370">odd,</span> <span m="1173130">so</span> <span
  m="1173180">that's</span> <span m="1173350">not</span> <span
  m="1173470">good.</span></p><p><span m="1174200">But,</span> <span
  m="1174350">let's</span> <span m="1174490">say,</span> <span
  m="1174680">you</span> <span m="1174790">could</span> <span
  m="1175020">add</span> <span m="1175260">some</span> <span m="1175360">edges
  in,</span> <span m="1176430">turn it</span> <span m="1176640">into an
  Euler</span> <span m="1176970">circuit,</span> <span m="1178230">and</span>
  <span m="1178470">then</span> <span m="1178680">you</span> <span
  m="1178780">could</span> <span m="1179110">do</span> <span
  m="1179350">a</span> <span m="1179400">nice</span> <span
  m="1179650">reversal</span> <span m="1180010">off it,</span> <span
  m="1180860">and,</span> <span m="1181030">maybe,</span> <span
  m="1181250">that</span> <span m="1181370">will</span> <span
  m="1181440">give</span> <span m="1181590">you</span> <span
  m="1181700">a</span> <span m="1181730">better</span> <span
  m="1182140">approximation.</span> <span m="1183610">So</span> <span
  m="1183680">with that</span> <span m="1183890">hope,</span> <span
  m="1184140">let's</span> <span m="1185040">look</span> <span
  m="1185240">at</span> <span m="1185340">the</span> <span
  m="1185600">algorithm.</span></p><p><span m="1187240">So</span> <span
  m="1187390">what</span> <span m="1187480">you</span> <span
  m="1187560">do</span> <span m="1187720">is,</span> <span
  m="1188906">you</span> <span m="1189310">go</span> <span
  m="1189410">back</span> <span m="1189560">to</span> <span m="1189720">your
  tree.</span> <span m="1198090">Let's just</span> <span m="1198590">leave
  it</span> <span m="1199090">at that.</span> <span m="1200090">So,</span> <span
  m="1201670">now,</span> <span m="1202600">let's</span> <span
  m="1202800">see.</span> <span m="1203560">So</span> <span
  m="1204270">this</span> <span m="1204450">is</span> <span
  m="1204600">degree</span> <span m="1204880">2,</span> <span
  m="1205160">that's</span> <span m="1205350">good.</span> <span
  m="1206010">This</span> <span m="1206410">is</span> <span
  m="1206610">degree</span> <span m="1206880">3,</span> <span
  m="1207080">that's</span> <span m="1207470">not good.</span> <span
  m="1208350">Degree</span> <span m="1208600">1,</span> <span m="1208890">this
  is</span> <span m="1209100">fine.</span> <span m="1209860">This is</span>
  <span m="1209920">degree</span> <span m="1210180">1.</span></p><p><span
  m="1211230">This</span> <span m="1211330">also</span> <span
  m="1211650">is</span> <span m="1211710">degree</span> <span
  m="1211870">1.</span> <span m="1213390">This</span> <span
  m="1213570">is</span> <span m="1213630">degree</span> <span
  m="1213940">3.</span> <span m="1215300">Actually,</span> <span
  m="1215570">let's get</span> <span m="1215790">rid of</span> <span
  m="1215950">this,</span> <span m="1216220">so it</span> <span
  m="1216490">does</span> <span m="1216650">not</span> <span
  m="1216980">have</span> <span m="1217110">degree 3.</span> <span
  m="1217600">That's a lot</span> <span m="1217870">of</span> <span
  m="1218295">vertices.</span> <span m="1218720">OK,</span> <span
  m="1219145">there</span> <span m="1219570">we go.</span> <span
  m="1221390">So,</span> <span m="1222430">in</span> <span
  m="1222530">this</span> <span m="1222690">graph,</span> <span m="1222990">you
  see</span> <span m="1223360">that you have</span> <span m="1223580">1,</span>
  <span m="1223780">2,</span> <span m="1223950">3,</span> <span
  m="1224180">4,</span> <span m="1224360">5</span> <span
  m="1224690">vertices</span> <span m="1225060">which</span> <span
  m="1225220">have</span> <span m="1225920">degree</span> <span
  m="1226730">odd.</span> <span m="1227710">So,</span> <span
  m="1227800">now,</span> <span m="1228040">we</span> <span
  m="1228170">would</span> <span m="1228300">like</span> <span
  m="1228470">to</span> <span m="1228600">add</span> <span
  m="1228820">some</span> <span m="1228990">edges</span> <span
  m="1230470">to</span> <span m="1230600">turn</span> <span
  m="1231050">this</span> <span m="1232880">into</span> <span m="1233020">an
  Euler</span> <span m="1233320">circuitable</span> <span
  m="1233750">graph.</span> <span m="1235430">So</span> <span m="1235620">how do
  we</span> <span m="1235740">do</span> <span
  m="1235840">that?</span></p><p><span m="1236780">So</span> <span
  m="1237840">let's</span> <span m="1238040">call</span> <span
  m="1238250">the</span> <span m="1238340">set</span> <span
  m="1238530">of</span> <span m="1238660">odd</span> <span
  m="1238950">edges</span> <span m="1239410">S.</span> <span
  m="1247766">Odd</span> <span m="1248270">vertices,</span> <span
  m="1248510">sorry.</span> <span m="1256010">So</span> <span
  m="1256220">you</span> <span m="1256300">take</span> <span
  m="1256460">the</span> <span m="1256600">set of</span> <span
  m="1257000">odd-degree</span> <span m="1257920">vertices.</span> <span
  m="1259240">Now,</span> <span m="1261430">go</span> <span
  m="1261580">back</span> <span m="1261740">to</span> <span
  m="1261810">perfect</span> <span m="1262100">matchings.</span></p><p><span
  m="1263100">So</span> <span m="1263680">what</span> <span
  m="1263820">does</span> <span m="1263880">a</span> <span
  m="1263940">perfect</span> <span m="1264190">matching</span> <span
  m="1264580">do?</span> <span m="1265180">It</span> <span
  m="1265360">adds</span> <span m="1265710">edges</span> <span
  m="1266655">to</span> <span m="1266970">that</span> <span
  m="1267200">graph</span> <span m="1267580">so that</span> <span
  m="1267770">everything</span> <span m="1268470">gets</span> <span
  m="1268730">degree</span> <span m="1268980">increased</span> <span
  m="1269270">by</span> <span m="1269400">one.</span> <span
  m="1271210">So</span> <span m="1271460">if</span> <span m="1271620">you</span>
  <span m="1271700">increase</span> <span m="1271930">the</span> <span
  m="1272000">degree</span> <span m="1272250">of</span> <span
  m="1272350">all</span> <span m="1272480">the odd</span> <span
  m="1272800">vertices</span> <span m="1273040">by</span> <span
  m="1273160">1,</span> <span m="1274340">everything</span> <span
  m="1274670">turns</span> <span m="1274880">even,</span> <span
  m="1275130">right?</span> <span m="1277260">So</span> <span
  m="1278750">you</span> <span m="1278850">take</span> <span
  m="1279020">the</span> <span m="1279160">set</span> <span m="1279290">of
  odd</span> <span m="1279440">vertices.</span></p><p><span
  m="1280740">OK,</span> <span m="1280940">another</span> <span
  m="1281250">thing to</span> <span m="1281500">observe.</span> <span
  m="1282490">Realize</span> <span m="1282900">that,</span> <span
  m="1283310">how</span> <span m="1283540">many</span> <span
  m="1283690">odd</span> <span m="1283850">vertices</span> <span
  m="1284140">can</span> <span m="1284240">you</span> <span
  m="1284300">have?</span> <span m="1284520">Can</span> <span
  m="1284640">you</span> <span m="1284690">have</span> <span
  m="1284810">an</span> <span m="1284910">odd</span> <span
  m="1285130">number</span> <span m="1285340">of</span> <span
  m="1285410">odd</span> <span m="1285690">vertices?</span> <span
  m="1286860">Because</span> <span m="1287070">that</span> <span
  m="1287630">would</span> <span m="1287860">screw</span> <span m="1288220">up
  the</span> <span m="1288700">whole</span> <span m="1288930">thing</span> <span
  m="1289130">where</span> <span m="1289360">we</span> <span
  m="1289470">needed</span> <span m="1289690">an</span> <span
  m="1289730">even</span> <span m="1289920">number</span> <span
  m="1290160">of</span> <span m="1290240">things.</span></p><p><span
  m="1296070">So</span> <span m="1296310">why</span> <span m="1296810">is</span>
  <span m="1296930">that</span> <span m="1297070">not</span> <span
  m="1297310">possible?</span> <span m="1297670">Why can</span> <span
  m="1297950">you</span> <span m="1298070">not</span> <span
  m="1298220">have</span> <span m="1298360">an</span> <span
  m="1298440">odd</span> <span m="1298600">number</span> <span
  m="1298840">of</span> <span m="1298890">odd</span> <span
  m="1299200">vertices?</span> <span m="1302490">So</span> <span
  m="1303380">the</span> <span m="1303840">thing</span> <span
  m="1303990">is,</span> <span m="1304110">that,</span> <span
  m="1305760">let's</span> <span m="1305950">say,</span> <span
  m="1306710">you</span> <span m="1306920">have</span> <span
  m="1306950">some</span> <span m="1307130">graph,</span> <span
  m="1308030">and</span> <span m="1309300">what</span> <span
  m="1309470">is</span> <span m="1309540">the</span> <span
  m="1309600">sum</span> <span m="1309810">of the</span> <span
  m="1309940">degrees</span> <span m="1310260">of</span> <span
  m="1310380">the</span> <span m="1310420">graph?</span> <span
  m="1311900">Let's</span> <span m="1312240">move</span> <span
  m="1312400">to</span> <span m="1312480">a</span> <span
  m="1312540">different</span> <span m="1312830">board</span> <span
  m="1313190">for this.</span></p><p><span m="1316680">So</span> <span
  m="1316980">you have a</span> <span m="1317050">graph,</span> <span
  m="1317390">G,</span> <span m="1317866">and</span> <span m="1318342">you
  want</span> <span m="1318820">sum of</span> <span m="1319090">degrees.</span>
  <span m="1320640">So</span> <span m="1320730">di</span> <span
  m="1320870">is</span> <span m="1321010">the</span> <span
  m="1321160">degree,</span> <span m="1322220">for</span> <span
  m="1322420">all</span> <span m="1322600">V.</span> <span m="1323520">So</span>
  <span m="1324250">what</span> <span m="1324400">is this</span> <span
  m="1324560">equal</span> <span m="1324830">to?</span> <span
  m="1324970">So,</span> <span m="1325330">let's</span> <span
  m="1325480">say,</span> <span m="1325630">you have</span> <span
  m="1325760">this</span> <span m="1325890">graph.</span> <span
  m="1332990">So,</span> <span m="1333090">now,</span> <span
  m="1334060">if</span> <span m="1334170">you</span> <span
  m="1334260">count</span> <span m="1334480">the</span> <span
  m="1334540">degrees</span> <span m="1334850">of</span> <span
  m="1334940">every</span> <span m="1335140">vertex,</span> <span
  m="1336880">you're</span> <span m="1336980">basically</span> <span
  m="1337350">counting</span> <span m="1337640">the</span> <span
  m="1337720">number</span> <span m="1337950">of</span> <span
  m="1338030">edges</span> <span m="1338260">coming</span> <span
  m="1338480">out,</span> <span m="1339490">which</span> <span
  m="1339710">means</span> <span m="1339860">that</span> <span
  m="1340010">every</span> <span m="1340410">edge is</span> <span
  m="1340740">counted</span> <span m="1341030">twice,</span> <span
  m="1341430">once</span> <span m="1341680">for</span> <span
  m="1342190">this</span> <span m="1342420">end</span> <span m="1342590">point
  and</span> <span m="1342870">once</span> <span m="1342980">for this</span>
  <span m="1343150">end</span> <span m="1343330">point.</span></p><p><span
  m="1343560">So this</span> <span m="1343800">edge</span> <span
  m="1343900">is</span> <span m="1344060">counted</span> <span
  m="1344330">twice,</span> <span m="1344780">for</span> <span
  m="1345060">here</span> <span m="1345280">and</span> <span
  m="1345340">here.</span> <span m="1346120">This</span> <span m="1346270">edge
  is</span> <span m="1346450">also</span> <span m="1346650">counted
  twice.</span> <span m="1347440">So,</span> <span m="1347550">basically,</span>
  <span m="1348120">the</span> <span m="1348330">sum</span> <span
  m="1348600">of</span> <span m="1348660">the</span> <span
  m="1348740">degrees</span> <span m="1349100">is</span> <span
  m="1349330">nothing</span> <span m="1349700">but</span> <span
  m="1350110">2</span> <span m="1350540">times</span> <span
  m="1351360">mod</span> <span m="1351630">of</span> <span m="1351900">E.</span>
  <span m="1352826">Does</span> <span m="1353290">that</span> <span
  m="1353500">make</span> <span m="1353690">sense?</span> <span
  m="1357120">So</span> <span m="1358610">this</span> <span
  m="1358730">is</span> <span m="1358840">even.</span></p><p><span
  m="1360230">Now,</span> <span m="1360940">let's</span> <span
  m="1361150">say</span> <span m="1361240">you</span> <span
  m="1361350">take</span> <span m="1361620">only</span> <span
  m="1361750">the</span> <span m="1361910">odd</span> <span
  m="1362270">vertices</span> <span m="1362440">out.</span> <span
  m="1363470">So</span> <span m="1364570">the even</span> <span
  m="1364860">vertices</span> <span m="1365210">are</span> <span
  m="1365360">good.</span> <span m="1365510">This</span> <span
  m="1365740">is</span> <span m="1365940">good.</span> <span m="1366220">This is
  good.</span> <span m="1367100">This</span> <span m="1367250">is</span> <span
  m="1367340">not</span> <span m="1367550">good.</span> <span
  m="1367840">This</span> <span m="1368040">is</span> <span
  m="1368610">also</span> <span m="1369030">not good.</span> <span
  m="1370280">So</span> <span m="1370340">these</span> <span m="1370500">are
  the</span> <span m="1370780">odd</span> <span
  m="1371080">vertices.</span></p><p><span m="1373670">So</span> <span
  m="1374460">the</span> <span m="1374850">sum</span> <span
  m="1375100">of</span> <span m="1375160">the</span> <span
  m="1375220">degrees</span> <span m="1375470">of</span> <span m="1375530">the
  even</span> <span m="1375770">vertices</span> <span m="1376170">are,</span>
  <span m="1376240">by</span> <span m="1376370">definition,</span> <span
  m="1376790">even.</span> <span m="1378320">So,</span> <span
  m="1378970">if</span> <span m="1379090">you</span> <span
  m="1379200">remove</span> <span m="1379550">them,</span> <span
  m="1380190">the</span> <span m="1380280">sum</span> <span
  m="1380480">of</span> <span m="1380540">the odd</span> <span
  m="1380990">vertices</span> <span m="1381100">should</span> <span
  m="1381280">also</span> <span m="1381480">remain</span> <span
  m="1381770">even.</span> <span m="1383340">And</span> <span
  m="1383580">so,</span> <span m="1383700">you</span> <span
  m="1383850">have</span> <span m="1384850">the</span> <span
  m="1384940">sum</span> <span m="1385210">of</span> <span
  m="1386080">odd</span> <span m="1386290">degrees</span> <span
  m="1386710">becoming</span> <span m="1387290">even,</span> <span
  m="1387640">which</span> <span m="1387810">means</span> <span
  m="1387990">that</span> <span m="1388100">you'll</span> <span
  m="1388180">need</span> <span m="1388340">to</span> <span
  m="1388400">have</span> <span m="1388540">an</span> <span
  m="1388620">even</span> <span m="1388790">number</span> <span m="1389120">of
  them.</span> <span m="1389926">Make</span> <span
  m="1390330">sense?</span></p><p><span m="1392270">So,</span> <span
  m="1393830">going</span> <span m="1394050">back</span> <span
  m="1394270">to</span> <span m="1394630">this,</span> <span
  m="1394930">so</span> <span m="1395010">there's</span> <span
  m="1395350">a</span> <span m="1395600">lot</span> <span m="1395790">of</span>
  <span m="1395910">branching</span> <span m="1396310">off,</span> <span
  m="1396450">here.</span> <span m="1396640">But</span> <span m="1397290">going
  back</span> <span m="1397680">to the main</span> <span
  m="1397840">point,</span> <span m="1398060">here,</span> <span
  m="1398270">is</span> <span m="1398410">that</span> <span
  m="1398600">you</span> <span m="1398740">have</span> <span
  m="1400020">an</span> <span m="1400180">even</span> <span
  m="1400430">number</span> <span m="1400660">of</span> <span
  m="1400720">odd</span> <span m="1401045">vertices.</span> <span
  m="1402300">So</span> <span m="1402550">consider</span> <span
  m="1403420">the</span> <span m="1403520">restriction</span> <span
  m="1404310">of</span> <span m="1404720">the</span> <span
  m="1404950">original</span> <span m="1405330">graph,</span> <span
  m="1405640">G</span> <span m="1406350">to</span> <span m="1406530">this</span>
  <span m="1406650">set,</span> <span m="1406920">S.</span> <span
  m="1407840">So,</span> <span m="1408590">now,</span> <span
  m="1408740">we're</span> <span m="1408900">going</span> <span
  m="1409110">to</span> <span m="1409270">the</span> <span
  m="1409490">first</span> <span m="1409800">thing</span> <span
  m="1409920">we</span> <span m="1410020">did,</span> <span
  m="1410200">there,</span> <span m="1410410">where</span> <span
  m="1410840">we</span> <span m="1411030">considered</span> <span
  m="1411360">a</span> <span m="1411380">restriction</span> <span
  m="1412290">of</span> <span m="1412430">the</span> <span
  m="1412510">graph</span> <span m="1412800">to</span> <span
  m="1412940">a</span> <span m="1413040">certain</span> <span
  m="1413150">set</span> <span m="1413320">of</span> <span
  m="1413400">vertices.</span></p><p><span m="1414340">So</span> <span
  m="1414470">we</span> <span m="1414580">take</span> <span
  m="1414790">the</span> <span m="1414880">set,</span> <span
  m="1415200">so</span> <span m="1415280">1,</span> <span m="1415480">2,</span>
  <span m="1415680">3,</span> <span m="1415750">4,</span> <span
  m="1415920">5.</span> <span m="1417050">So</span> <span m="1417200">you</span>
  <span m="1417320">take</span> <span m="1417490">these</span> <span
  m="1417785">five</span> <span m="1418080">vertices.</span> <span
  m="1422670">And</span> <span m="1423250">you</span> <span
  m="1423350">consider</span> <span m="1423740">the</span> <span
  m="1423940">graph</span> <span m="1424840">that</span> <span
  m="1424900">is</span> <span m="1425000">restricted</span> <span
  m="1425320">to</span> <span m="1425440">these</span> <span
  m="1425620">five</span> <span m="1426110">vertices.</span> <span
  m="1426580">Oh,</span> <span m="1426750">sorry, there should be</span> <span
  m="1427160">six.</span> <span m="1429010">Oh,</span> <span
  m="1429466">that's</span> <span m="1429922">interesting.</span> <span
  m="1430378">Oh,</span> <span m="1430834">there we go.</span> <span
  m="1431290">That's</span> <span m="1431500">the</span> <span
  m="1431580">other</span> <span m="1431730">one.</span> <span
  m="1436200">So</span> <span m="1437350">those</span> <span
  m="1437810">are</span> <span m="1437850">the six</span> <span
  m="1438080">vertices</span> <span m="1438300">which have odd</span> <span
  m="1438580">degrees.</span></p><p><span m="1439640">Now,</span> <span
  m="1439770">you</span> <span m="1440430">find</span> <span
  m="1440690">the</span> <span m="1440770">perfect</span> <span
  m="1441020">matching</span> <span m="1441310">with</span> <span
  m="1441450">your polynomial-time</span> <span m="1442110">algorithm,</span>
  <span m="1443950">and</span> <span m="1445290">you</span> <span
  m="1445360">get</span> <span m="1445510">something.</span> <span
  m="1446680">So</span> <span m="1447410">you</span> <span m="1447520">can
  now</span> <span m="1447770">add</span> <span m="1447910">those</span> <span
  m="1448070">edges</span> <span m="1448320">back</span> <span
  m="1448550">in</span> <span m="1448660">here.</span> <span
  m="1449550">So</span> <span m="1449700">these are</span> <span
  m="1450190">your new</span> <span m="1450380">edges,</span> <span
  m="1451170">and,</span> <span m="1452070">let's</span> <span
  m="1452260">say,</span> <span m="1454955">something,</span> <span
  m="1456855">this</span> <span m="1457330">one.</span></p><p><span
  m="1458280">OK,</span> <span m="1459230">so</span> <span
  m="1459350">you</span> <span m="1459410">get</span> <span
  m="1459570">three</span> <span m="1459740">new</span> <span
  m="1459880">edges.</span> <span m="1460370">And,</span> <span
  m="1460820">now,</span> <span m="1460970">realize</span> <span
  m="1461260">that</span> <span m="1461370">all</span> <span
  m="1461770">the</span> <span m="1461840">degrees</span> <span
  m="1462140">are</span> <span m="1462210">now</span> <span
  m="1462370">even,</span> <span m="1462720">so</span> <span
  m="1463060">now</span> <span m="1463210">you</span> <span m="1463280">can
  do</span> <span m="1463770">your Euler</span> <span
  m="1463870">circuit.</span> <span m="1464280">Also,</span> <span
  m="1465600">let's</span> <span m="1465830">call</span> <span
  m="1465990">this</span> <span m="1466120">matching</span> <span
  m="1466500">M.</span> <span m="1467230">So</span> <span m="1467330">this
  is</span> <span m="1467460">a</span> <span m="1467530">set</span> <span
  m="1467690">of</span> <span m="1467870">edges,</span> <span
  m="1468690">M.</span> <span m="1470200">Let's</span> <span
  m="1470380">call</span> <span m="1470570">the</span> <span
  m="1470640">original</span> <span m="1471080">tree</span> <span
  m="1471370">T,</span> <span m="1472590">and</span> <span
  m="1473170">the</span> <span m="1473270">new</span> <span
  m="1473520">thing</span> <span m="1473710">that</span> <span
  m="1473810">is</span> <span m="1473940">formed,</span> <span
  m="1475410">is</span> <span m="1475820">T</span> <span
  m="1476640">union</span> <span m="1477040">M.</span></p><p><span
  m="1478270">So</span> <span m="1478580">you're taking</span> <span
  m="1478720">all the</span> <span m="1478870">edges</span> <span
  m="1479020">from T,</span> <span m="1479580">and you're</span> <span
  m="1479780">adding</span> <span m="1479970">all</span> <span m="1480100">the
  edges</span> <span m="1480350">from M.</span> <span m="1481570">So,</span>
  <span m="1482020">realize</span> <span m="1482340">that</span> <span
  m="1482410">you</span> <span m="1482510">can</span> <span
  m="1482630">have</span> <span m="1482750">multiple</span> <span
  m="1483090">edges,</span> <span m="1483370">but</span> <span
  m="1483460">that's</span> <span m="1483630">fine,</span> <span
  m="1484220">because</span> <span m="1484580">Euler</span> <span
  m="1484840">circuits</span> <span m="1485100">allow you</span> <span
  m="1485260">to</span> <span m="1485460">have</span> <span
  m="1485600">multiple</span> <span m="1486030">edges.</span> <span
  m="1486960">So,</span> <span m="1487080">now,</span> <span
  m="1487300">you</span> <span m="1487470">take</span> <span
  m="1487680">this</span> <span m="1487830">graph,</span> <span
  m="1488475">and</span> <span m="1488760">you</span> <span m="1488910">find
  this</span> <span m="1489240">Euler</span> <span
  m="1489450">circuit.</span></p><p><span m="1491490">So</span> <span
  m="1492650">that</span> <span m="1492800">is</span> <span
  m="1492940">basically</span> <span m="1493390">this</span> <span
  m="1493580">thing.</span> <span m="1494680">So</span> <span
  m="1495360">this</span> <span m="1495500">set</span> <span
  m="1495680">of</span> <span m="1495760">edges</span> <span
  m="1496010">in</span> <span m="1496100">some</span> <span
  m="1496330">order,</span> <span m="1497090">and</span> <span
  m="1497200">that</span> <span m="1497330">order</span> <span
  m="1497590">exists.</span> <span m="1499120">So</span> <span
  m="1500160">the</span> <span m="1500340">cost</span> <span
  m="1500670">of</span> <span m="1500720">the</span> <span
  m="1500800">Euler</span> <span m="1501040">circuit--</span> <span
  m="1501890">let's</span> <span m="1501960">call</span> <span
  m="1502120">it</span> <span m="1502210">C--</span> <span m="1503130">is</span>
  <span m="1503250">equal</span> <span m="1503560">to</span> <span
  m="1503710">the</span> <span m="1503860">cost</span> <span
  m="1504170">of</span> <span m="1504300">T</span> <span m="1505360">plus</span>
  <span m="1505640">the</span> <span m="1505690">cost</span> <span
  m="1506000">of</span> <span m="1506050">M,</span> <span
  m="1506600">right?</span> <span m="1507400">Because</span> <span
  m="1508150">you're</span> <span m="1508320">traversing</span> <span
  m="1508740">all</span> <span m="1508960">the</span> <span
  m="1509100">edges</span> <span m="1509340">in your</span> <span
  m="1509660">graph.</span> <span m="1510980">So that is</span> <span
  m="1511210">the cost</span> <span m="1511270">for the</span> <span
  m="1511530">Euler</span> <span m="1511790">circuit.</span></p><p><span
  m="1512640">Now,</span> <span m="1513660">my</span> <span
  m="1513730">claim</span> <span m="1514010">is</span> <span
  m="1514140">that--</span> <span m="1514860">so</span> <span
  m="1514970">this</span> <span m="1515265">is</span> <span m="1515560">the
  difference between</span> <span m="1515660">all</span> <span
  m="1515850">the</span> <span m="1515940">nodes</span> <span
  m="1516150">in</span> <span m="1516210">the</span> <span
  m="1516300">graph.</span> <span m="1517590">And,</span> <span
  m="1517900">remember,</span> <span m="1518190">you</span> <span
  m="1518260">can</span> <span m="1518380">do</span> <span
  m="1518510">the</span> <span m="1519200">whole</span> <span
  m="1519720">duplication</span> <span m="1520240">argument,</span> <span
  m="1520640">from</span> <span m="1520770">before.</span> <span
  m="1523000">So,</span> <span m="1523310">where's</span> <span
  m="1523620">that?</span> <span m="1524460">Oh,</span> <span
  m="1524880">there.</span></p><p><span m="1525240">So</span> <span
  m="1525770">you</span> <span m="1525840">can</span> <span
  m="1525930">do</span> <span m="1526010">a duplication</span> <span
  m="1526490">argument,</span> <span m="1526890">so you're</span> <span
  m="1527250">visiting</span> <span m="1527550">all</span> <span
  m="1527670">the</span> <span m="1527790">edges in</span> <span
  m="1528020">the</span> <span m="1528100">graph,</span> <span m="1528480">all
  the</span> <span m="1528820">vertices</span> <span m="1529030">in the</span>
  <span m="1529100">graph.</span> <span m="1530220">You</span> <span
  m="1530540">remove</span> <span m="1530810">the</span> <span
  m="1530880">duplicates,</span> <span m="1531840">and</span> <span
  m="1532000">you</span> <span m="1532080">have</span> <span m="1532260">a
  valid</span> <span m="1532620">path.</span> <span m="1533680">Now,</span>
  <span m="1533760">let's</span> <span m="1533970">see</span> <span
  m="1534120">if this</span> <span m="1534220">valid</span> <span
  m="1534580">path</span> <span m="1534890">is</span> <span
  m="1535020">actually</span> <span m="1536700">a</span> <span
  m="1537060">better</span> <span m="1537310">approximation.</span></p><p><span
  m="1542900">So,</span> <span m="1543060">again,</span> <span
  m="1543300">you</span> <span m="1543560">will go</span> <span
  m="1543690">from</span> <span m="1544210">C.</span> <span
  m="1544920">So</span> <span m="1544990">this</span> <span
  m="1545090">C,</span> <span m="1545395">you will go</span> <span
  m="1545700">to</span> <span m="1545770">C</span> <span
  m="1546238">dash.</span> <span m="1549046">And</span> <span
  m="1549520">this</span> <span m="1549620">will</span> <span
  m="1549710">give</span> <span m="1549850">you,</span> <span
  m="1550560">as</span> <span m="1550730">before,</span> <span
  m="1552580">cost</span> <span m="1552990">of</span> <span m="1553060">C</span>
  <span m="1553470">dash</span> <span m="1554290">is</span> <span
  m="1554700">less</span> <span m="1554900">than</span> <span m="1555300">equal
  to the</span> <span m="1555470">cost</span> <span m="1555760">of</span> <span
  m="1555820">C,</span> <span m="1557110">So,</span> <span
  m="1557230">now,</span> <span m="1557390">you're only</span> <span
  m="1557680">interested</span> <span m="1557940">in cost</span> <span
  m="1558090">of</span> <span m="1558210">C.</span> <span m="1558670">So</span>
  <span m="1558800">what</span> <span m="1558890">are</span> <span
  m="1558930">we</span> <span m="1558990">doing</span> <span
  m="1559180">there?</span></p><p><span m="1559390">So</span> <span
  m="1560820">we</span> <span m="1560910">know that</span> <span
  m="1561140">the</span> <span m="1561290">cost</span> <span
  m="1561620">of</span> <span m="1563330">C</span> <span m="1564280">is</span>
  <span m="1564360">equal</span> <span m="1564690">to</span> <span
  m="1564830">cost</span> <span m="1565170">of</span> <span m="1565250">T</span>
  <span m="1566700">plus</span> <span m="1567630">the</span> <span
  m="1567740">cost</span> <span m="1568200">of M.</span> <span
  m="1570700">So,</span> <span m="1570860">from</span> <span
  m="1571080">the</span> <span m="1571150">previous</span> <span
  m="1571550">problem,</span> <span m="1572070">we</span> <span
  m="1572180">know</span> <span m="1572450">that the</span> <span
  m="1572570">cost</span> <span m="1572870">of</span> <span m="1572980">T</span>
  <span m="1574010">is</span> <span m="1574180">less</span> <span
  m="1574380">than</span> <span m="1574490">equal</span> <span
  m="1574770">to</span> <span m="1574980">the</span> <span
  m="1575140">cost</span> <span m="1575500">of</span> <span m="1576070">H</span>
  <span m="1576200">star of</span> <span m="1576560">G,</span> <span
  m="1577305">right?</span> <span m="1578700">So</span> <span
  m="1579670">this</span> <span m="1579870">is</span> <span
  m="1580920">less</span> <span m="1581020">than</span> <span
  m="1581230">equal</span> <span m="1581490">to</span> <span
  m="1582640">cost</span> <span m="1583010">of</span> <span m="1585410">H</span>
  <span m="1585890">star</span> <span m="1586200">G.</span></p><p><span
  m="1587770">So</span> <span m="1588480">this</span> <span
  m="1588710">guy</span> <span m="1589030">is</span> <span
  m="1589630">less</span> <span m="1589930">than</span> <span
  m="1590120">the</span> <span m="1590220">optimal</span> <span
  m="1590590">Hamiltonian</span> <span m="1590790">path.</span> <span
  m="1592580">What about</span> <span m="1592850">this</span> <span
  m="1593020">guy?</span> <span m="1596130">So</span> <span
  m="1596270">let's</span> <span m="1596840">look</span> <span
  m="1596980">at</span> <span m="1597090">the</span> <span
  m="1597590">actual</span> <span m="1597890">H</span> <span
  m="1598190">star</span> <span m="1598570">G,</span> <span
  m="1598770">again.</span> <span m="1605980">So,</span> <span
  m="1606760">actually,</span> <span m="1607010">let's</span> <span
  m="1607200">look</span> <span m="1607340">at</span> <span m="1607410">H</span>
  <span m="1607530">star</span> <span m="1607950">S.</span></p><p><span
  m="1609960">So</span> <span m="1610560">remember</span> <span
  m="1610910">that</span> <span m="1611080">S</span> <span m="1611410">is</span>
  <span m="1611520">the</span> <span m="1611590">set</span> <span
  m="1611800">of</span> <span m="1611960">odd</span> <span
  m="1612240">vertices,</span> <span m="1613370">and</span> <span
  m="1613550">that</span> <span m="1613710">is</span> <span
  m="1613830">where</span> <span m="1613950">this</span> <span
  m="1614090">matching</span> <span m="1614400">is</span> <span
  m="1614530">done.</span> <span m="1615470">So</span> <span
  m="1615580">H</span> <span m="1615700">star</span> <span m="1615980">S</span>
  <span m="1616120">is</span> <span m="1616210">nothing</span> <span
  m="1616520">but</span> <span m="1616980">the</span> <span
  m="1617200">optimal</span> <span m="1617600">Hamiltonian</span> <span
  m="1618070">cycle</span> <span m="1618710">on</span> <span
  m="1618870">that</span> <span m="1619320">restricted</span> <span
  m="1619810">graph.</span> <span m="1622030">From</span> <span
  m="1622240">our</span> <span m="1622320">previous</span> <span
  m="1622680">lemma,</span> <span m="1623800">which</span> <span
  m="1623960">is</span> <span m="1624060">down</span> <span
  m="1624250">here,</span> <span m="1625250">we</span> <span
  m="1625340">know</span> <span m="1625480">that</span> <span
  m="1625690">H</span> <span m="1625810">star</span> <span m="1626120">of</span>
  <span m="1626250">S</span> <span m="1626900">is</span> <span
  m="1627040">less</span> <span m="1627230">than</span> <span m="1627340">H
  star</span> <span m="1627470">of G.</span></p><p><span m="1630080">So</span>
  <span m="1632890">we</span> <span m="1632970">know</span> <span
  m="1633140">that</span> <span m="1633600">cost</span> <span
  m="1634020">of</span> <span m="1636520">is</span> <span
  m="1637060">less</span> <span m="1637250">than</span> <span
  m="1637360">equal</span> <span m="1637630">to</span> <span
  m="1638340">cost</span> <span m="1638690">of</span> <span
  m="1639740">whatever,</span> <span m="1640370">G.</span> <span
  m="1642750">So,</span> <span m="1642800">now,</span> <span
  m="1643340">let's</span> <span m="1643750">just</span> <span m="1643980">look
  at</span> <span m="1644060">H star</span> <span m="1644330">of S.</span> <span
  m="1645440">Now,</span> <span m="1645630">we</span> <span
  m="1645800">construct</span> <span m="1645960">a</span> <span
  m="1646060">matching.</span> <span m="1648020">We</span> <span
  m="1648320">take</span> <span m="1648620">every</span> <span
  m="1648900">other</span> <span m="1649120">edge.</span> <span
  m="1649460">We</span> <span m="1649820">take</span> <span
  m="1649960">this</span> <span m="1650110">one,</span> <span
  m="1650630">and</span> <span m="1650960">we take this</span> <span
  m="1651120">one,</span> <span m="1651450">and</span> <span
  m="1651790">we</span> <span m="1651910">take</span> <span
  m="1652090">this</span> <span m="1652250">one.</span> <span
  m="1653410">And</span> <span m="1655430">look at</span> <span m="1655510">the
  alternate</span> <span m="1655900">set,</span> <span m="1656390">also.</span>
  <span m="1656630">So take</span> <span m="1656870">this</span> <span
  m="1657030">one,</span> <span m="1657290">and</span> <span
  m="1657420">this</span> <span m="1657580">one,</span> <span m="1657890">and
  this</span> <span m="1658323">one.</span></p><p><span m="1659190">So</span>
  <span m="1659330">look at the</span> <span m="1659430">blue</span> <span
  m="1659580">set</span> <span m="1659740">and</span> <span
  m="1659820">the</span> <span m="1659890">red</span> <span
  m="1660090">set.</span> <span m="1661580">Since</span> <span
  m="1661750">it's</span> <span m="1661890">part</span> <span m="1662070">of
  a</span> <span m="1662130">Hamiltonian</span> <span m="1662560">cycle,</span>
  <span m="1663030">they're</span> <span m="1663070">both</span> <span
  m="1663280">matchings,</span> <span m="1664740">right?</span> <span
  m="1666990">So</span> <span m="1667300">let's</span> <span
  m="1667500">call</span> <span m="1668740">the</span> <span
  m="1668900">red</span> <span m="1669080">one</span> <span
  m="1669300">M1,</span> <span m="1670430">and</span> <span
  m="1670520">the</span> <span m="1670600">blue</span> <span
  m="1670750">one</span> <span m="1670900">M2.</span> <span
  m="1673010">So</span> <span m="1673170">I'm</span> <span
  m="1673330">not</span> <span m="1673500">saying</span> <span
  m="1673760">they're</span> <span m="1673930">perfect</span> <span
  m="1674200">matchings.</span> <span m="1674500">They're</span> <span
  m="1675350">not</span> <span m="1675560">the</span> <span
  m="1675630">minimum</span> <span m="1676090">matchings,</span> <span
  m="1676510">but</span> <span m="1676730">they're definitely</span> <span
  m="1676950">perfect</span> <span m="1677210">matchings.</span></p><p><span
  m="1678740">And</span> <span m="1678920">because</span> <span
  m="1679920">we</span> <span m="1680010">know</span> <span
  m="1680180">the</span> <span m="1680280">perfect</span> <span
  m="1680710">matching</span> <span m="1680850">is M,</span> <span
  m="1683170">or</span> <span m="1683350">the</span> <span
  m="1683420">minimum</span> <span m="1683790">matching</span> <span
  m="1684100">is M.</span> <span m="1685720">Cost</span> <span
  m="1686010">of</span> <span m="1686070">M</span> <span m="1686270">is</span>
  <span m="1686350">less</span> <span m="1686530">than</span> <span
  m="1686650">equal</span> <span m="1686910">to</span> <span
  m="1689330">cost</span> <span m="1689670">of</span> <span
  m="1689830">M1,</span> <span m="1692000">and,</span> <span
  m="1692160">also,</span> <span m="1693630">the</span> <span
  m="1694270">cost</span> <span m="1694640">of</span> <span m="1694840">M</span>
  <span m="1696190">is</span> <span m="1696340">less</span> <span
  m="1696590">than</span> <span m="1696680">equal</span> <span
  m="1696950">to</span> <span m="1697050">the</span> <span
  m="1697180">cost</span> <span m="1698012">of</span> <span
  m="1699860">M2.</span> <span m="1701032">That</span> <span
  m="1701400">make</span> <span m="1701560">sense?</span> <span
  m="1702450">Because</span> <span m="1702640">M</span> <span
  m="1702880">was</span> <span m="1703030">the</span> <span
  m="1703110">minimum</span> <span m="1703410">cost</span> <span
  m="1703680">matching,</span> <span m="1704690">you</span> <span
  m="1705030">have</span> <span m="1705490">cost of M</span> <span
  m="1705640">is</span> <span m="1705780">less</span> <span
  m="1705960">than</span> <span m="1706090">any</span> <span
  m="1706280">other</span> <span m="1706460">matching,</span> <span
  m="1706860">which</span> <span m="1707030">is</span> <span
  m="1707450">constructed</span> <span m="1707580">from</span> <span
  m="1707820">this.</span></p><p><span m="1709270">Again,</span> <span
  m="1709690">so</span> <span m="1709810">this</span> <span
  m="1710000">implies</span> <span m="1711640">that</span> <span
  m="1712370">the</span> <span m="1712710">cost</span> <span m="1713090">of
  M</span> <span m="1714950">is</span> <span m="1717330">less</span> <span
  m="1717610">than</span> <span m="1717740">equal</span> <span
  m="1718050">to</span> <span m="1719470">half</span> <span
  m="1722870">cost</span> <span m="1723230">of--</span> <span
  m="1723755">OK,</span> <span m="1724030">let's not</span> <span
  m="1724140">write</span> <span m="1724470">this</span> <span
  m="1724670">here.</span> <span m="1727690">Let's</span> <span
  m="1728005">get</span> <span m="1728320">a</span> <span
  m="1728640">different</span> <span m="1728740">board.</span></p><p><span
  m="1736150">So</span> <span m="1737480">cost of</span> <span
  m="1737830">n</span> <span m="1739460">is</span> <span m="1739600">less</span>
  <span m="1739770">than</span> <span m="1739890">equal</span> <span
  m="1740170">to</span> <span m="1740860">half</span> <span
  m="1742990">cost</span> <span m="1743280">of</span> <span
  m="1743570">M1</span> <span m="1744786">plus</span> <span
  m="1745284">cost</span> <span m="1745782">of</span> <span
  m="1746280">M2.</span> <span m="1748770">Since</span> <span
  m="1749040">both</span> <span m="1749220">of</span> <span
  m="1749290">these</span> <span m="1749450">guys</span> <span
  m="1749640">are</span> <span m="1749690">larger</span> <span
  m="1749970">than</span> <span m="1750110">this,</span> <span
  m="1750740">their</span> <span m="1750910">average</span> <span m="1751195">is
  also</span> <span m="1751480">larger</span> <span m="1751760">than</span>
  <span m="1751970">this,</span> <span m="1752685">right?</span> <span
  m="1753515">But</span> <span m="1753930">what</span> <span
  m="1754170">is</span> <span m="1754310">cost</span> <span
  m="1754490">of</span> <span m="1754640">M1</span> <span m="1754760">cost
  of</span> <span m="1754980">M2?</span> <span m="1755805">This</span> <span
  m="1756270">is</span> <span m="1756450">nothing</span> <span
  m="1756750">but</span> <span m="1757390">half</span> <span
  m="1759780">cost</span> <span m="1760140">of</span> <span m="1761056">H</span>
  <span m="1761450">star of</span> <span m="1761720">S,</span> <span
  m="1762075">right?</span> <span m="1762650">Because</span> <span
  m="1763430">the</span> <span m="1764350">Hamiltonian</span> <span
  m="1764740">cycle</span> <span m="1765140">is</span> <span
  m="1765270">constructed</span> <span m="1765700">from</span> <span
  m="1766190">M1</span> <span m="1766560">and</span> <span
  m="1766930">M2.</span></p><p><span m="1770636">And</span> <span
  m="1771050">by</span> <span m="1771260">our</span> <span
  m="1771420">lemma,</span> <span m="1771750">this</span> <span
  m="1771920">is</span> <span m="1772190">less</span> <span
  m="1772360">than</span> <span m="1772460">equal</span> <span
  m="1772720">to</span> <span m="1772920">half</span> <span
  m="1773625">cost</span> <span m="1773960">of</span> <span m="1775210">H</span>
  <span m="1775550">star of</span> <span m="1775905">G.</span> <span
  m="1779690">So,</span> <span m="1780820">now,</span> <span
  m="1780960">we</span> <span m="1781070">have</span> <span
  m="1781270">all</span> <span m="1781400">we</span> <span
  m="1781510">need.</span> <span m="1783200">This</span> <span
  m="1783350">is</span> <span m="1783410">less</span> <span
  m="1783610">than</span> <span m="1783680">equal</span> <span
  m="1783950">to</span> <span m="1784050">half</span> <span
  m="1785640">cost</span> <span m="1786040">of</span> <span m="1787930">H</span>
  <span m="1788080">star</span> <span m="1788580">of</span> <span
  m="1788910">G.</span> <span m="1790130">And</span> <span
  m="1790330">then,</span> <span m="1791560">add</span> <span
  m="1791740">them</span> <span m="1791860">together,</span> <span
  m="1792330">you</span> <span m="1792460">get</span> <span
  m="1793510">cost</span> <span m="1793950">of</span> <span m="1794360">C</span>
  <span m="1794630">dash</span> <span m="1795630">is</span> <span
  m="1796130">less</span> <span m="1796340">than</span> <span
  m="1796450">equal</span> <span m="1796720">to</span> <span
  m="1796790">cost</span> <span m="1797020">of</span> <span
  m="1797100">C,</span> <span m="1797500">is</span> <span
  m="1797900">less</span> <span m="1798050">than</span> <span
  m="1798170">equal</span> <span m="1798390">to</span> <span
  m="1798460">the</span> <span m="1798560">sum,</span> <span
  m="1799480">which</span> <span m="1799710">is</span> <span
  m="1799900">equal</span> <span m="1800240">to</span> <span
  m="1800990">3/2</span> <span m="1802155">cost</span> <span
  m="1802460">of</span> <span m="1803670">H</span> <span m="1804110">star</span>
  <span m="1804300">of</span> <span m="1804560">G.</span></p><p><span
  m="1809310">So</span> <span m="1809610">that's</span> <span m="1809860">the
  proof.</span> <span m="1810060">So</span> <span m="1810390">there's</span>
  <span m="1810720">a</span> <span m="1810790">lot</span> <span
  m="1811470">of</span> <span m="1811540">things</span> <span
  m="1811740">going</span> <span m="1811920">on,</span> <span
  m="1812030">here.</span> <span m="1812410">Let's</span> <span
  m="1812510">try</span> <span m="1812570">to</span> <span m="1812900">go</span>
  <span m="1813020">back</span> <span m="1813250">and</span> <span
  m="1813370">see</span> <span m="1813470">what</span> <span
  m="1813570">we</span> <span m="1813660">did.</span> <span
  m="1814580">So</span> <span m="1816520">we</span> <span
  m="1816670">took</span> <span m="1817570">a minimum</span> <span
  m="1818030">spanning</span> <span m="1818290">tree,</span> <span
  m="1819830">and</span> <span m="1820020">then</span> <span
  m="1820190">we</span> <span m="1820340">tried</span> <span
  m="1820580">to</span> <span m="1820730">remove</span> <span
  m="1821030">all</span> <span m="1821190">the</span> <span
  m="1821330">odd</span> <span m="1821790">degree</span> <span
  m="1822220">vertices.</span></p><p><span m="1823660">So</span> <span
  m="1823740">we</span> <span m="1823790">took</span> <span m="1823860">all
  the</span> <span m="1823920">odd</span> <span m="1824240">degree</span> <span
  m="1824310">vertices,</span> <span m="1824820">and</span> <span
  m="1825070">made</span> <span m="1825200">a</span> <span
  m="1825270">perfect</span> <span m="1825550">matching,</span> <span
  m="1826210">the</span> <span m="1826290">minimum</span> <span
  m="1826610">cost</span> <span m="1826830">perfect</span> <span
  m="1827080">matching.</span> <span m="1827960">So</span> <span
  m="1827980">we</span> <span m="1828100">added</span> <span
  m="1828370">edges</span> <span m="1828740">just</span> <span
  m="1828930">to</span> <span m="1829000">make</span> <span
  m="1829240">everything</span> <span m="1829750">even</span> <span
  m="1829980">degree.</span> <span m="1831570">Then,</span> <span
  m="1832350">we</span> <span m="1832550">took</span> <span
  m="1833200">the</span> <span m="1833470">Euler</span> <span
  m="1833740">circuit</span> <span m="1834080">on</span> <span
  m="1834210">that</span> <span m="1834440">graph,</span> <span
  m="1836770">and</span> <span m="1836920">we</span> <span
  m="1837030">removed</span> <span m="1837190">duplicates.</span> <span
  m="1838350">So</span> <span m="1838460">that's</span> <span
  m="1838680">fine,</span> <span m="1838900">that's</span> <span
  m="1839190">the</span> <span m="1839390">easy part.</span></p><p><span
  m="1839870">But</span> <span m="1840290">you</span> <span
  m="1840420">do</span> <span m="1840520">[INAUDIBLE]</span> <span
  m="1840710">circuit</span> <span m="1841010">on</span> <span
  m="1841090">that</span> <span m="1841290">graph,</span> <span
  m="1842660">then</span> <span m="1842780">you</span> <span
  m="1842890">argued</span> <span m="1843760">that,</span> <span
  m="1844410">because</span> <span m="1844830">all the</span> <span
  m="1844950">circuits</span> <span m="1845060">in</span> <span
  m="1845200">that</span> <span m="1845420">graph</span> <span
  m="1845690">is</span> <span m="1845830">just</span> <span
  m="1846680">the</span> <span m="1846890">sum</span> <span m="1847040">of
  the</span> <span m="1847370">edges in</span> <span m="1847560">the</span>
  <span m="1847980">spanning</span> <span m="1848330">tree</span> <span
  m="1848880">plus</span> <span m="1849100">the</span> <span m="1849150">sum
  of</span> <span m="1849400">the edges</span> <span m="1849860">in</span> <span
  m="1850050">the</span> <span m="1850130">matching,</span> <span
  m="1850700">which</span> <span m="1850810">you</span> <span
  m="1850850">added</span> <span m="1851060">later.</span></p><p><span
  m="1852330">So</span> <span m="1852440">the</span> <span
  m="1852550">spanning</span> <span m="1852820">tree had</span> <span
  m="1853000">already</span> <span m="1853260">bounded,</span> <span
  m="1853600">in</span> <span m="1853670">the</span> <span
  m="1853750">previous</span> <span m="1854050">argument.</span> <span
  m="1855220">The</span> <span m="1855320">matching</span> <span
  m="1855760">was</span> <span m="1855900">bounded</span> <span
  m="1856320">by</span> <span m="1857300">taking</span> <span
  m="1857670">the</span> <span m="1857790">optimal</span> <span
  m="1858250">Hamiltonian</span> <span m="1858770">cycle,</span> <span
  m="1860070">decomposing</span> <span m="1860730">it</span> <span
  m="1860790">into</span> <span m="1860970">two</span> <span
  m="1861120">matchings,</span> <span m="1862690">arguing</span> <span
  m="1863210">that</span> <span m="1863780">those</span> <span
  m="1864060">two</span> <span m="1864170">matchings</span> <span
  m="1864550">are</span> <span m="1864620">not</span> <span
  m="1864840">the</span> <span m="1864920">optimal</span> <span
  m="1865240">matchings--</span> <span m="1865680">not</span> <span
  m="1865850">necessarily</span> <span m="1865970">the</span> <span
  m="1866120">optimal</span> <span m="1866400">matchings,</span> <span
  m="1866780">but</span> <span m="1866960">they're</span> <span
  m="1868470">less</span> <span m="1868630">than</span> <span
  m="1868750">equal</span> <span m="1868930">to</span> <span
  m="1868970">the</span> <span m="1869060">optimal.</span> <span
  m="1870120">So</span> <span m="1870880">they're</span> <span
  m="1871040">even,</span> <span m="1871120">there.</span></p><p><span
  m="1871450">And,</span> <span m="1871840">so,</span> <span
  m="1872600">the</span> <span m="1872800">cost</span> <span
  m="1873150">of</span> <span m="1873320">the</span> <span
  m="1874010">optimal</span> <span m="1874340">matching,</span> <span
  m="1874620">which</span> <span m="1874760">you were</span> <span
  m="1874910">using</span> <span m="1875250">in</span> <span
  m="1875400">our</span> <span m="1875770">constructive</span> <span
  m="1876160">path,</span> <span m="1876640">constructive</span> <span
  m="1877530">Hamiltonian</span> <span m="1877950">cycle,</span> <span
  m="1878690">is</span> <span m="1878810">less than</span> <span
  m="1879000">equal</span> <span m="1879230">to</span> <span
  m="1879290">both</span> <span m="1879460">of</span> <span
  m="1879520">these</span> <span m="1879670">matching.</span> <span
  m="1880130">You</span> <span m="1880400">add</span> <span
  m="1880610">them</span> <span m="1880670">up,</span> <span
  m="1881360">you</span> <span m="1881460">get</span> <span
  m="1881500">that</span> <span m="1881600">bound,</span> <span
  m="1881980">and</span> <span m="1882436">it</span> <span
  m="1882892">works.</span></p><p><span m="1883350">So</span> <span
  m="1884060">questions</span> <span m="1884470">on</span> <span m="1884660">any
  of the</span> <span m="1884730">steps?</span> <span m="1885230">This is</span>
  <span m="1885390">a</span> <span m="1885490">lot</span> <span
  m="1885790">of</span> <span m="1885950">branching</span> <span
  m="1886340">off</span> <span m="1887080">and then</span> <span
  m="1887290">coming</span> <span m="1887470">back</span> <span
  m="1887630">together.</span> <span m="1888816">Yeah.</span></p><p><span
  m="1889302">STUDENT: The last one's</span> <span m="1889788">3/2,</span> <span
  m="1890274">right?</span></p><p><span m="1891732">AMARTYA SHANKHA BISWAS:
  Yes.</span> <span m="1892220">That</span> <span m="1892500">is not</span>
  <span m="1892790">3 over</span> <span m="1892960">3.</span> <span
  m="1894000">That</span> <span m="1894200">would</span> <span
  m="1894570">be</span> <span m="1894910">p equal to np.</span> <span
  m="1898910">Anything</span> <span m="1899140">else?</span> <span
  m="1905920">You're</span> <span m="1906250">free</span> <span
  m="1906430">to</span> <span m="1906490">go,</span> <span m="1906810">or</span>
  <span m="1907160">ask questions,</span> <span m="1907460">or</span> <span
  m="1907760">whatever.</span></p>
embedded_media:
  - uid: 47bf732be55fe4b4f3d4a2231f91a06e
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: zM5MW5NKZJg
  - uid: 70bb5ce3c5d9b3fbe9ed9f9f37d211eb
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/zM5MW5NKZJg/default.jpg'
  - uid: 5261654d26edbef88fa55d9ab43f8472
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: zM5MW5NKZJg
  - uid: f7b68cf45b4f6fc3757c791aba05f6f2
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: zM5MW5NKZJg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-9-complexity-approximations/zM5MW5NKZJg.srt
  - uid: c42c33c495bf76b56e4056991bf2908c
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: zM5MW5NKZJg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-9-complexity-approximations/zM5MW5NKZJg.pdf
  - uid: 91f4f9edfefd8fdc51de7142be0e1d24
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 07bbebc1892112b4c1adb9464d6c8fa9
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 354b881ffd4ed2413c097c345127ec12
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: 02ce5612aa81930fcea0cd87137a095b
    parent_uid: 47bf456cc4fcde7fe84c45a4eb6c01e2
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec09_300k.mp4'
type: courses
layout: video
---
