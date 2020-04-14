---
title: 'Recitation 7: Incremental Improvement: Applications of Network Flow & Matching'
uid: faf5f000ed69bbf4396664e6819bcccd
parent_uid: 8c671299aae36eba669ca13490c21dec
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-7-incremental-improvement-applications-of-network-flow-matching
short_url: recitation-7-incremental-improvement-applications-of-network-flow-matching
inline_embed_id: >-
  54374831recitation7:incrementalimprovement:applicationsofnetworkflow&matching79954929
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to
  Network Flow and Matching are discussed.</p> <p><strong>Instructor:</strong>
  Ling Ren</p>
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
  <span m="7360">high-quality</span> <span m="8119">educational</span> <span
  m="8750">resources</span> <span m="9370">for</span> <span
  m="9520">free.</span> <span m="10730">To</span> <span m="10740">make</span>
  <span m="10940">a</span> <span m="10980">donation</span> <span
  m="11670">or</span> <span m="11940">view</span> <span
  m="12380">additional</span> <span m="12800">materials</span> <span
  m="13340">from</span> <span m="13490">hundreds</span> <span
  m="13920">of</span> <span m="14030">MIT</span> <span m="14450">courses,</span>
  <span m="15580">visit</span> <span m="15780">MIT</span> <span
  m="16210">OpenCourseWare</span> <span m="17250">at</span> <span
  m="17420">ocw.mit.edu.</span></p><p><span m="22570">PROFESSOR: Morning</span>
  <span m="22830">everyone.</span> <span m="23760">I hope</span> <span
  m="23890">you all</span> <span m="24110">had</span> <span m="24280">a</span>
  <span m="24850">great</span> <span m="25100">spring</span> <span
  m="25500">break.</span> <span m="28130">And</span> <span
  m="29040">during</span> <span m="29310">which</span> <span m="29950">I</span>
  <span m="30330">hope</span> <span m="30530">you</span> <span
  m="30660">can</span> <span m="30800">have</span> <span m="31000">more
  of</span> <span m="31320">6.046.</span></p><p><span m="33540">Today</span>
  <span m="34080">we're</span> <span m="34240">going</span> <span
  m="34460">to</span> <span m="34670">look</span> <span m="34900">at</span>
  <span m="35670">network</span> <span m="36050">flow</span> <span
  m="36690">and</span> <span m="37010">two</span> <span m="37150">things</span>
  <span m="37530">in</span> <span m="37660">network</span> <span
  m="37750">flow.</span> <span m="44360">The first</span> <span
  m="44600">one</span> <span m="44970">is</span> <span
  m="45390">Edmonds-Karp</span> <span m="46980">algorithm,</span> <span
  m="49370">and</span> <span m="51340">after</span> <span m="51580">that,</span>
  <span m="51890">we're</span> <span m="52070">going</span> <span
  m="52280">to</span> <span m="52420">look</span> <span m="52630">at</span>
  <span m="53300">two</span> <span m="53780">applications.</span> <span
  m="55380">In</span> <span m="55580">particular,</span> <span m="56460">they
  are</span> <span m="56730">called</span> <span m="58290">bipartite</span>
  <span m="61130">matching</span> <span m="63660">and</span> <span
  m="64160">cover.</span></p><p><span m="69160">OK.</span> <span
  m="70010">So</span> <span m="70950">we'll</span> <span m="71200">start</span>
  <span m="72220">with</span> <span m="73246">a</span> <span
  m="75530">simpler</span> <span m="75850">algorithm,</span> <span
  m="76550">which</span> <span m="76660">is</span> <span
  m="76860">Ford-Fulkerson.</span> <span m="84810">Can</span> <span
  m="84960">someone</span> <span m="85490">remind</span> <span
  m="85860">us</span> <span m="86180">what</span> <span
  m="86510">Ford-Fulkerson</span> <span m="88190">does?</span> <span
  m="100970">Go ahead.</span></p><p><span m="101966">AUDIENCE: Every time you
  have a</span> <span m="102962">augmenting</span> <span m="103460">path,</span>
  <span m="104456">it</span> <span m="104954">gets rid of it.</span></p><p><span
  m="106470">PROFESSOR: It</span> <span m="107160">gets</span> <span
  m="107540">rid</span> <span m="107680">of</span> <span m="107760">it?</span>
  <span m="107860">Yep.</span> <span m="109800">What's</span> <span
  m="110020">your</span> <span m="110090">name, by the way?</span></p><p><span
  m="110310">AUDIENCE: Michelle.</span></p><p><span m="111298">PROFESSOR:
  Michelle.</span> <span m="112780">OK.</span> <span m="113610">So,</span> <span
  m="114620">Michelle</span> <span m="114960">gave</span> <span
  m="115140">a</span> <span m="115210">very</span> <span m="115430">brief</span>
  <span m="115750">description.</span> <span m="116600">But let's</span> <span
  m="116910">be</span> <span m="117180">a</span> <span m="117240">little</span>
  <span m="117730">bit</span> <span m="117880">more</span> <span
  m="118030">detailed.</span> <span m="118880">So</span> <span
  m="119060">we</span> <span m="119140">have</span> <span m="119370">a</span>
  <span m="119760">graph</span> <span m="120410">network</span> <span
  m="120570">flow</span> <span m="121810">G,</span> <span m="122780">and</span>
  <span m="122890">the</span> <span m="122960">first</span> <span
  m="123210">thing</span> <span m="123430">it's</span> <span
  m="123870">going</span> <span m="124100">to</span> <span m="124200">do</span>
  <span m="124680">is</span> <span m="124900">that</span> <span
  m="125320">given</span> <span m="125570">the</span> <span
  m="125690">flow,</span> <span m="126440">it will</span> <span
  m="126650">transform</span> <span m="127310">G</span> <span
  m="127790">from</span> <span m="128155">a</span> <span
  m="129169">residual</span> <span m="129539">graph.</span> <span
  m="130660">Everyone</span> <span m="130900">remembers</span> <span
  m="131200">that?</span> <span m="132510">Then</span> <span
  m="134350">F-F</span> <span m="134740">algorithm</span> <span
  m="135600">will</span> <span m="135840">find</span> <span m="136230">a</span>
  <span m="136300">path</span> <span m="141510">going</span> <span
  m="141790">from</span> <span m="142060">source</span> <span
  m="142720">to</span> <span m="144640">sink</span> <span m="147360">in</span>
  <span m="147810">this</span> <span m="148350">residual</span> <span
  m="148760">graph,</span> <span m="152170">and</span> <span
  m="152370">then</span> <span m="153080">augment</span> <span
  m="157470">this</span> <span m="157730">path.</span> <span
  m="162430">Augmenting</span> <span m="162910">just</span> <span
  m="163090">means</span> <span m="163820">increasing</span> <span
  m="164680">the</span> <span m="164800">flow</span> <span m="165240">on</span>
  <span m="165410">that</span> <span m="165600">path.</span> <span
  m="166360">By</span> <span m="166530">how</span> <span
  m="166630">much?</span></p><p><span m="169485">AUDIENCE: The minimum</span>
  <span m="170455">edge</span> <span m="170940">on the</span> <span
  m="171425">path</span> <span m="171910">[INAUDIBLE].</span></p><p><span
  m="173850">PROFESSOR: Yeah,</span> <span m="174140">the</span> <span
  m="174290">minimum</span> <span m="174720">edge</span> <span
  m="175200">on</span> <span m="175350">the</span> <span m="175430">path.</span>
  <span m="176480">Let</span> <span m="176570">me</span> <span
  m="176650">just</span> <span m="176850">define</span> <span
  m="177190">that</span> <span m="177400">to</span> <span m="177640">be</span>
  <span m="178220">the</span> <span m="178320">capacity</span> <span
  m="178910">of</span> <span m="179020">the</span> <span m="179140">path,</span>
  <span m="179780">which</span> <span m="179980">is</span> <span
  m="180110">the</span> <span m="180220">capacity</span> <span
  m="180700">of</span> <span m="180820">the</span> <span
  m="181800">weakest</span> <span m="182230">link.</span> <span
  m="183570">OK.</span> <span m="184200">Then</span> <span
  m="185480">what's</span> <span m="185750">the</span> <span
  m="186080">last</span> <span m="186680">step</span> <span
  m="187160">we're</span> <span m="187260">missing</span> <span
  m="187590">here?</span> <span m="196230">So after</span> <span
  m="196710">augmenting,</span> <span m="198000">our</span> <span
  m="198210">flow</span> <span m="199520">changed</span> <span
  m="200400">from</span> <span m="200650">f to</span> <span m="202344">f
  prime.</span> <span m="204610">And</span> <span m="204740">then</span> <span
  m="204870">we're</span> <span m="205050">going</span> <span
  m="205270">to</span> <span m="206700">look</span> <span
  m="206980">back.</span> <span m="208260">We have</span> <span
  m="208410">f</span> <span m="208850">prime,</span> <span
  m="209320">then</span> <span m="209540">Gf</span> <span
  m="209890">prime,</span> <span m="210500">find</span> <span
  m="210970">a</span> <span m="211020">path in</span> <span m="211490">Gf</span>
  <span m="211610">prime,</span> <span m="211970">then</span> <span
  m="213550">continue</span> <span m="213870">from</span> <span
  m="214040">there.</span></p><p><span m="217200">So</span> <span
  m="217480">this</span> <span m="217740">algorithm,</span> <span
  m="219150">in</span> <span m="219370">some</span> <span
  m="219590">sense,</span> <span m="219900">is</span> <span
  m="220260">not</span> <span m="220480">even</span> <span m="220770">a</span>
  <span m="221120">very</span> <span m="221360">detailed</span> <span
  m="221780">algorithm,</span> <span m="222190">because</span> <span
  m="222360">it</span> <span m="222430">doesn't</span> <span
  m="222690">say</span> <span m="223620">how</span> <span m="223840">to</span>
  <span m="224020">find</span> <span m="224310">a</span> <span
  m="224380">path</span> <span m="225520">in</span> <span m="226280">the</span>
  <span m="226410">second</span> <span m="226820">step.</span> <span
  m="230000">And</span> <span m="230140">that's</span> <span
  m="230310">indeed</span> <span m="230620">a</span> <span
  m="230680">problem,</span> <span m="231160">because</span> <span
  m="231330">we</span> <span m="231440">have</span> <span m="231600">seen</span>
  <span m="233422">a</span> <span m="233900">pathologically</span> <span
  m="234640">bad</span> <span m="234900">case</span> <span
  m="240360">where</span> <span m="244810">each</span> <span
  m="245100">capacity</span> <span m="246020">is</span> <span
  m="246300">a</span> <span m="246340">billion,</span> <span
  m="248870">and</span> <span m="249380">the</span> <span
  m="249490">correct</span> <span m="249750">way</span> <span
  m="249890">to</span> <span m="250000">do</span> <span m="250190">it</span>
  <span m="250430">is</span> <span m="250590">simply</span> <span
  m="251300">augmenting</span> <span m="251760">this</span> <span
  m="251960">path</span> <span m="252290">and then</span> <span m="252640">that
  path--</span> <span m="252940">oh</span> <span m="253240">sorry,</span> <span
  m="253540">there's</span> <span m="253830">edge</span> <span
  m="254360">one--</span> <span m="255840">then</span> <span
  m="256130">we'll</span> <span m="256290">be</span> <span
  m="256399">done.</span> <span m="256790">But</span> <span
  m="257930">the</span> <span m="258320">pathologically</span> <span
  m="258959">bad</span> <span m="259200">case is</span> <span
  m="260120">we</span> <span m="260310">keep</span> <span
  m="260980">going</span> <span m="261250">through</span> <span
  m="261810">this</span> <span m="262010">middle</span> <span
  m="262250">edge.</span></p><p><span m="264670">OK. So</span> <span
  m="265280">Edmonds-Karp</span> <span m="267900">is an</span> <span
  m="268060">improvement</span> <span m="268980">to</span> <span
  m="269080">this</span> <span m="269470">algorithm.</span> <span
  m="272520">Let</span> <span m="272580">me</span> <span m="272650">just</span>
  <span m="272850">write</span> <span m="273020">it</span> <span
  m="273230">here.</span> <span m="282700">Its</span> <span
  m="283260">first</span> <span m="283570">step,</span> <span
  m="283850">third,</span> <span m="284140">and</span> <span
  m="284280">fourth</span> <span m="284530">steps</span> <span
  m="284850">are</span> <span m="284980">actually</span> <span
  m="285300">exactly</span> <span m="285660">the</span> <span
  m="285740">same.</span> <span m="286230">No</span> <span
  m="286420">change</span> <span m="286770">from</span> <span
  m="287920">Ford-Fulkerson.</span> <span m="288980">The</span> <span
  m="289080">only</span> <span m="289300">thing</span> <span
  m="289490">it</span> <span m="289620">does</span> <span m="289970">is</span>
  <span m="290170">that</span> <span m="291100">it</span> <span
  m="291450">finds</span> <span m="291720">a</span> <span
  m="291830">special</span> <span m="292230">path.</span> <span
  m="294610">Did</span> <span m="294880">Srini</span> <span
  m="295750">cover</span> <span m="296070">this</span> <span m="296260">in
  the</span> <span m="296380">lecture?</span> <span m="298150">What</span> <span
  m="298420">path</span> <span m="300170">Edmonds-Karp</span> <span
  m="300560">finds?</span> <span m="302990">I</span> <span m="303090">see</span>
  <span m="303240">some people nodding.</span> <span m="303800">OK.</span> <span
  m="304060">Go</span> <span m="304140">ahead.</span></p><p><span
  m="304420">AUDIENCE: He</span> <span m="304905">ran</span> <span
  m="305147">the</span> <span m="305390">first</span> <span
  m="305875">search</span> <span m="306360">from</span> <span
  m="307330">the</span> <span m="307815">source</span> <span m="308300">to
  the</span> <span m="308785">sink in</span> <span m="309270">Gf,</span> <span
  m="309755">take</span> <span m="310240">the</span> <span
  m="310725">shortest</span> <span m="311695">path.</span></p><p><span
  m="313150">PROFESSOR: OK.</span> <span m="313880">Does</span> <span
  m="314060">everyone</span> <span m="314440">agree</span> <span
  m="314600">with</span> <span m="314730">that?</span> <span
  m="316690">So</span> <span m="316920">Edmonds-Karp</span> <span
  m="317560">finds</span> <span m="318190">the</span> <span
  m="318300">shortest</span> <span m="318870">path.</span> <span
  m="323180">From--</span> <span m="326610">I</span> <span
  m="327060">guess,</span> <span m="327270">can you</span> <span
  m="327450">see</span> <span m="327800">that</span> <span
  m="328010">part?</span> <span m="329880">No?</span> <span m="330170">Oh, I'm
  sorry about</span> <span m="330550">that.</span></p><p><span m="350170">Find
  the shortest</span> <span m="350850">path.</span> <span
  m="353000">Here,</span> <span m="353210">shortest</span> <span
  m="353680">just</span> <span m="353910">means</span> <span
  m="354880">least</span> <span m="355250">number</span> <span
  m="355500">of</span> <span m="355590">hops.</span> <span
  m="356440">Here,</span> <span m="357510">in</span> <span
  m="357680">this</span> <span m="358120">pathologically</span> <span
  m="358690">bad</span> <span m="358890">example,</span> <span
  m="359380">Edmonds-Karp</span> <span m="359680">would</span> <span
  m="360100">do</span> <span m="360210">much</span> <span
  m="360390">better,</span> <span m="360690">because</span> <span
  m="361040">it</span> <span m="361120">would</span> <span
  m="361730">find</span> <span m="362400">this</span> <span
  m="362620">path,</span> <span m="363110">instead</span> <span
  m="363510">of</span> <span m="363700">this</span> <span
  m="364670">weird</span> <span m="364970">path.</span> <span
  m="365560">Because</span> <span m="365920">that</span> <span
  m="366160">path,</span> <span m="366745">its</span> <span
  m="367470">distance</span> <span m="367840">is</span> <span
  m="368000">2,</span> <span m="368560">and</span> <span m="369280">the</span>
  <span m="369380">one</span> <span m="369890">going</span> <span
  m="370140">across</span> <span m="370400">the</span> <span
  m="370480">middle</span> <span m="370740">is</span> <span m="370880">3.</span>
  <span m="373976">OK.</span> <span m="374460">Now</span> <span
  m="374620">we're</span> <span m="374780">going</span> <span
  m="375000">to</span> <span m="375140">prove</span> <span
  m="375680">that</span> <span m="376180">this</span> <span
  m="376440">algorithm</span> <span m="377200">runs</span> <span
  m="377720">in</span> <span m="379230">order</span> <span m="380120">VE</span>
  <span m="380450">squared.</span> <span m="384580">So</span> <span
  m="384940">OK.</span> <span m="385420">So</span> <span m="385840">one</span>
  <span m="386020">step</span> <span m="386240">back.</span> <span
  m="386670">Do</span> <span m="386730">we</span> <span m="386840">have</span>
  <span m="387010">to</span> <span m="387130">prove</span> <span m="387390">that
  is</span> <span m="387670">correct?</span> <span m="390150">That</span> <span
  m="390330">it</span> <span m="391420">indeed</span> <span
  m="391850">finds</span> <span m="392330">the</span> <span
  m="393900">maximum</span> <span m="394290">flow?</span></p><p><span
  m="400759">AUDIENCE: No, you</span> <span m="401232">don't.</span></p><p><span
  m="402660">PROFESSOR: Yeah.</span> <span m="403270">I</span> <span
  m="403520">claim</span> <span m="403870">I</span> <span
  m="403930">don't</span> <span m="404070">have</span> <span
  m="404160">to</span> <span m="404250">do</span> <span m="404390">that,</span>
  <span m="404610">because</span> <span m="404780">it's</span> <span
  m="404920">the</span> <span m="405030">same</span> <span
  m="405230">thing</span> <span m="405450">as</span> <span
  m="406150">Ford-Fulkerson.</span> <span m="406900">You</span> <span
  m="407120">can</span> <span m="407230">find any</span> <span
  m="407570">path.</span> <span m="409380">Now,</span> <span
  m="411600">we</span> <span m="411730">want</span> <span m="411880">to</span>
  <span m="412020">show--</span> <span m="412750">we</span> <span
  m="412870">want to</span> <span m="413120">bound</span> <span
  m="413510">this</span> <span m="413650">run</span> <span
  m="413840">time.</span> <span m="415280">So</span> <span m="415440">any</span>
  <span m="416380">idea,</span> <span m="417000">high-level</span> <span
  m="417420">idea,</span> <span m="417700">how</span> <span
  m="417870">we're</span> <span m="418020">going</span> <span
  m="418190">to</span> <span m="418270">do</span> <span m="418390">that?</span>
  <span m="419170">In</span> <span m="421250">which</span> <span
  m="421700">several</span> <span m="422010">steps?</span> <span
  m="454800">OK.</span> <span m="455300">So,</span> <span m="456640">OK,</span>
  <span m="456880">a</span> <span m="456940">simpler</span> <span
  m="457120">question.</span> <span m="459396">What's</span> <span
  m="459870">the</span> <span m="459980">complexity</span> <span
  m="460670">of</span> <span m="460870">this</span> <span
  m="460990">second</span> <span m="461420">step,</span> <span
  m="462380">find</span> <span m="462670">the</span> <span
  m="462770">shortest</span> <span m="463220">path</span> <span
  m="464060">from</span> <span m="464500">source</span> <span
  m="464780">to</span> <span m="464930">sink?</span> <span m="468850">Go</span>
  <span m="469160">ahead.</span></p><p><span m="469810">AUDIENCE: OV plus</span>
  <span m="470286">E.</span></p><p><span m="471240">PROFESSOR: OV plus</span>
  <span m="471460">E.</span> <span m="472440">And</span> <span
  m="473640">in</span> <span m="473780">this</span> <span
  m="473970">case,</span> <span m="474280">actually,</span> <span
  m="476210">V</span> <span m="476640">is</span> <span m="476960">always</span>
  <span m="477500">less</span> <span m="477700">than</span> <span
  m="477810">E,</span> <span m="478290">so</span> <span m="478410">I</span>
  <span m="478510">can</span> <span m="479030">simply</span> <span
  m="479350">say</span> <span m="480160">O of</span> <span m="480320">E.</span>
  <span m="482310">Now,</span> <span m="484140">how</span> <span
  m="484280">long</span> <span m="484470">does</span> <span m="484640">it</span>
  <span m="484750">take</span> <span m="484950">to</span> <span
  m="485070">augment</span> <span m="485460">that</span> <span
  m="485630">path,</span> <span m="487210">if</span> <span m="487270">we</span>
  <span m="487370">have</span> <span m="487530">found</span> <span
  m="487760">it?</span></p><p><span m="489332">AUDIENCE: O of
  E.</span></p><p><span m="491160">PROFESSOR: O of E.</span> <span
  m="492490">That's</span> <span m="492680">correct.</span> <span
  m="497110">But</span> <span m="497500">our</span> <span
  m="497600">claim,</span> <span m="500640">we</span> <span
  m="500760">can</span> <span m="500860">also</span> <span m="501100">say</span>
  <span m="501480">it's</span> <span m="501680">O of</span> <span
  m="502010">V,</span> <span m="503650">because</span> <span
  m="503990">the</span> <span m="504180">shortest</span> <span
  m="504570">path</span> <span m="508550">at</span> <span m="508970">most</span>
  <span m="509500">has</span> <span m="509990">three</span> <span
  m="510230">hops.</span> <span m="513159">And</span> <span
  m="513340">then,</span> <span m="513600">from</span> <span m="513860">f</span>
  <span m="514020">to</span> <span m="514179">f</span> <span
  m="514360">prime--</span> <span m="517090">OK. So</span> <span
  m="517549">I</span> <span m="517659">think</span> <span m="517970">in some
  sense,</span> <span m="518340">these</span> <span m="518539">two</span> <span
  m="518690">are</span> <span m="518780">the</span> <span m="518880">same</span>
  <span m="519070">steps.</span> <span m="520140">Also</span> <span m="520260">O
  of V,</span> <span m="520880">and</span> <span m="521059">then</span> <span
  m="521299">updating</span> <span m="521830">the</span> <span
  m="522650">rescue</span> <span m="522960">graph</span> <span
  m="523210">is</span> <span m="523370">also</span> <span m="523700">O of</span>
  <span m="523770">V.</span> <span m="524610">So</span> <span
  m="525230">one</span> <span m="525490">of</span> <span m="525670">these</span>
  <span m="526000">iterations--</span> <span m="527580">each</span> <span
  m="527780">iteration</span> <span m="528450">takes</span> <span m="530290">how
  long?</span></p><p><span m="532280">AUDIENCE:  O of E.</span></p><p><span
  m="533570">PROFESSOR: O of</span> <span m="533760">E.</span> <span
  m="534130">Right.</span> <span m="534320">This</span> <span
  m="534480">is</span> <span m="534690">the</span> <span m="537090">most</span>
  <span m="537360">expensive</span> <span m="537810">step in</span> <span
  m="538270">one</span> <span m="538480">iteration.</span> <span
  m="539400">OK.</span> <span m="539610">So</span> <span m="539740">what</span>
  <span m="539880">else</span> <span m="540060">do</span> <span
  m="540130">we</span> <span m="540220">have</span> <span m="540370">to</span>
  <span m="540470">do</span> <span m="540700">to</span> <span
  m="540850">prove</span> <span m="541090">this</span> <span
  m="541260">bound?</span></p><p><span m="542452">AUDIENCE: Number</span> <span
  m="542928">of</span> <span m="543404">iterations.</span></p><p><span
  m="545310">PROFESSOR: We</span> <span m="545450">need</span> <span
  m="545590">to</span> <span m="545660">show</span> <span m="546080">that</span>
  <span m="546290">the</span> <span m="546390">number</span> <span
  m="546680">of</span> <span m="546960">iterations</span> <span
  m="548470">is</span> <span m="552090">O of</span> <span m="552460">V</span>
  <span m="552690">times</span> <span m="552960">E.</span> <span
  m="554480">If</span> <span m="554640">we</span> <span m="554760">can</span>
  <span m="554930">show</span> <span m="555120">that,</span> <span
  m="561420">then</span> <span m="561650">we</span> <span m="561790">are</span>
  <span m="561970">pretty</span> <span m="562170">much</span> <span
  m="562370">done.</span> <span m="564484">OK?</span> <span
  m="574900">OK.</span> <span m="575410">Now,</span> <span m="575630">to</span>
  <span m="575860">prove</span> <span m="576120">that</span> <span
  m="576310">bound,</span> <span m="577230">we</span> <span
  m="577670">first</span> <span m="578000">need a</span> <span
  m="578170">lemma,</span> <span m="580600">which</span> <span
  m="581350">we</span> <span m="581550">call</span> <span
  m="584000">monotonic.</span> <span m="588380">So</span> <span m="589780">let
  me</span> <span m="589990">define</span> <span m="593710">delta</span> <span
  m="593950">f</span> <span m="594450">v.</span> <span m="598580">This</span>
  <span m="598800">is</span> <span m="601060">the</span> <span
  m="601510">length</span> <span m="601970">of</span> <span
  m="602110">the</span> <span m="602210">shortest</span> <span
  m="602640">path</span> <span m="602940">from</span> <span m="603290">s,</span>
  <span m="604750">from</span> <span m="604930">the</span> <span
  m="605050">source,</span> <span m="605780">to</span> <span
  m="606290">v,</span> <span m="607030">which</span> <span m="607240">is</span>
  <span m="607380">a</span> <span m="607480">node</span> <span
  m="608180">in</span> <span m="608310">a</span> <span m="608350">graph,</span>
  <span m="610610">the</span> <span m="610730">length</span> <span
  m="610960">of</span> <span m="611090">that</span> <span m="612580">in</span>
  <span m="614360">rescue</span> <span m="614710">graph</span> <span
  m="615290">of</span> <span m="615400">f.</span> <span m="620590">Is</span>
  <span m="620790">that</span> <span m="620940">definition</span> <span
  m="621160">clear?</span> <span m="627600">And</span> <span
  m="628840">this</span> <span m="629030">lemma</span> <span
  m="629420">says</span> <span m="631235">delta</span> <span m="631650">f</span>
  <span m="631710">v,</span> <span m="633400">for</span> <span
  m="634870">any</span> <span m="635200">vertex</span> <span
  m="635280">v,</span> <span m="638530">does</span> <span m="638740">not</span>
  <span m="639310">decrease.</span> <span m="643780">So</span> <span
  m="644010">it</span> <span m="644100">can</span> <span m="644410">only</span>
  <span m="645600">monotonically</span> <span
  m="647930">increase.</span></p><p><span m="651745">OK.  We are</span> <span
  m="652200">going</span> <span m="652370">to</span> <span
  m="652510">prove</span> <span m="652750">that.</span> <span
  m="661630">So</span> <span m="662480">we'll</span> <span
  m="662680">prove</span> <span m="662960">by</span> <span
  m="663110">contradiction.</span> <span m="664180">Assume</span> <span
  m="664820">this</span> <span m="664950">is</span> <span m="665080">not</span>
  <span m="665260">a</span> <span m="665320">case.</span> <span
  m="669310">That</span> <span m="669570">means</span> <span
  m="673250">there</span> <span m="673470">is</span> <span m="673540">some
  v</span> <span m="674550">that</span> <span m="675790">in</span> <span
  m="676120">f</span> <span m="676300">prime,</span> <span
  m="676930">which</span> <span m="677040">is</span> <span m="677260">the</span>
  <span m="678500">new</span> <span m="678940">residual</span> <span
  m="679300">graph,</span> <span m="682380">its</span> <span
  m="682690">shortest</span> <span m="683520">path</span> <span
  m="684470">from</span> <span m="684710">the</span> <span
  m="684820">source</span> <span m="685170">in the</span> <span
  m="685520">new</span> <span m="685790">residual</span> <span
  m="686110">graph</span> <span m="686450">is</span> <span
  m="686750">less</span> <span m="687100">than</span> <span
  m="688270">the</span> <span m="688670">old</span> <span m="689000">one.</span>
  <span m="690780">Right?</span> <span m="696910">We are</span> <span
  m="697110">going</span> <span m="697320">to</span> <span
  m="697600">derive</span> <span m="697960">a</span> <span
  m="698250">contradiction</span> <span m="698743">to that.</span> <span
  m="708590">So</span> <span m="708850">there</span> <span m="709060">may</span>
  <span m="709220">be</span> <span m="709390">many</span> <span
  m="709780">such</span> <span m="710170">vertices</span> <span
  m="710880">that</span> <span m="711680">drop.</span> <span
  m="713220">But</span> <span m="713780">if</span> <span
  m="714190">there's</span> <span m="714440">any,</span> <span
  m="715090">I'm</span> <span m="715250">going</span> <span m="715500">to</span>
  <span m="715770">define</span> <span m="716190">v</span> <span
  m="720830">to</span> <span m="721060">be</span> <span m="721200">the</span>
  <span m="721350">one</span> <span m="725630">with</span> <span
  m="729940">smallest</span> <span m="731730">delta</span> <span m="734950">in f
  prime.</span> <span m="742030">OK.</span> <span m="742560">Any</span> <span
  m="742670">questions</span> <span m="742970">about</span> <span
  m="743150">this</span> <span m="743320">step?</span> <span
  m="750750">So</span> <span m="750940">there</span> <span
  m="751130">could</span> <span m="751310">be</span> <span
  m="751560">like</span> <span m="751720">v1,</span> <span m="752090">v2,</span>
  <span m="752380">v3--</span> <span m="753050">that</span> <span
  m="753280">all</span> <span m="753990">make</span> <span
  m="754220">this</span> <span m="754390">happen.</span> <span
  m="755630">I'm</span> <span m="755770">going</span> <span m="755980">to</span>
  <span m="756100">choose</span> <span m="757060">the</span> <span
  m="757190">one</span> <span m="757600">among</span> <span
  m="757880">those</span> <span m="758740">that</span> <span
  m="758960">has</span> <span m="759240">the</span> <span
  m="759600">smallest</span> <span m="761070">distance</span> <span
  m="761520">from</span> <span m="761710">the</span> <span
  m="761810">source.</span> <span m="768060">OK?</span></p><p><span
  m="771865">Now here is</span> <span m="772460">my</span> <span
  m="772640">source.</span> <span m="774950">We</span> <span
  m="774990">have</span> <span m="775200">a</span> <span m="775250">path</span>
  <span m="777690">to v</span> <span m="781530">in</span> <span
  m="781850">graph</span> <span m="782760">Gf</span> <span
  m="783100">prime.</span> <span m="787626">OK.</span> <span
  m="788100">So</span> <span m="788270">this</span> <span m="788440">is</span>
  <span m="788550">a</span> <span m="788620">path.</span> <span
  m="789070">Then</span> <span m="789430">I</span> <span m="789540">can</span>
  <span m="789700">always</span> <span m="790050">find</span> <span
  m="790360">a</span> <span m="790430">predecessor,</span> <span
  m="793150">which</span> <span m="793330">I'll</span> <span
  m="793570">call</span> <span m="793670">u</span> <span m="793880">here.</span>
  <span m="801460">If</span> <span m="801880">this</span> <span
  m="802070">is</span> <span m="802220">the</span> <span
  m="802330">shortest</span> <span m="802740">path</span> <span
  m="803030">to</span> <span m="803140">v,</span> <span m="803960">what</span>
  <span m="804290">can</span> <span m="804500">I</span> <span
  m="804580">say</span> <span m="805580">about</span> <span
  m="809431">delta</span> <span m="809880">of</span> <span m="810070">v</span>
  <span m="810950">and</span> <span m="813830">delta of</span> <span
  m="814320">u?</span> <span m="818200">What</span> <span m="818390">can</span>
  <span m="818520">I</span> <span m="818570">say</span> <span
  m="818760">about</span> <span m="818980">these</span> <span
  m="819180">two</span> <span m="819480">quantities?</span></p><p><span
  m="827925">AUDIENCE: Can</span> <span m="828420">v</span> <span
  m="828915">decrease?</span> <span m="830895">Can v</span> <span
  m="831885">decrease</span> <span m="832380">one of them,</span> <span
  m="832875">at least?</span></p><p><span m="834370">PROFESSOR: This</span>
  <span m="834420">one</span> <span m="834590">is</span> <span
  m="834740">greater than</span> <span m="835060">that?</span></p><p><span
  m="835860">AUDIENCE: One of them</span> <span m="836312">must
  be--</span></p><p><span m="839030">PROFESSOR: One</span> <span
  m="839240">of</span> <span m="839350">them</span> <span m="839510">is</span>
  <span m="839610">greater</span> <span m="839810">than</span> <span
  m="839940">the</span> <span m="840040">other,</span> <span
  m="840900">and</span> <span m="840980">that's</span> <span
  m="841120">always</span> <span m="841330">true, right?</span> <span
  m="841890">For</span> <span m="842050">any</span> <span
  m="842140">two?</span></p><p><span m="846260">AUDIENCE: v is</span> <span
  m="847200">u plus</span> <span m="847670">1.</span></p><p><span
  m="849080">PROFESSOR: OK.</span> <span m="849550">Michelle</span> <span
  m="849870">said</span> <span m="850230">v is</span> <span m="850660">u</span>
  <span m="850770">plus</span> <span m="850990">1.</span> <span
  m="852220">Does</span> <span m="852360">that</span> <span
  m="852470">make</span> <span m="852610">sense</span> <span
  m="852800">to</span> <span m="852900">everyone?</span> <span
  m="861800">That's</span> <span m="862040">the</span> <span
  m="862140">shortest</span> <span m="862540">path</span> <span
  m="863210">to</span> <span m="863370">v.</span> <span m="864290">It</span>
  <span m="864450">goes</span> <span m="864690">through</span> <span
  m="864870">u.</span> <span m="870115">OK.</span> <span
  m="870610">That's</span> <span m="870840">correct.</span> <span
  m="876220">So</span> <span m="877860">OK,</span> <span m="877940">maybe</span>
  <span m="878160">I</span> <span m="878250">wasn't</span> <span
  m="878670">clear</span> <span m="878870">about</span> <span
  m="879040">that.</span> <span m="879270">I defined</span> <span
  m="880040">u</span> <span m="880970">to</span> <span m="881260">be</span>
  <span m="881750">v's</span> <span m="882190">predecessor</span> <span
  m="883275">on</span> <span m="883620">the</span> <span
  m="883730">shortest</span> <span m="884120">path.</span> <span
  m="886338">OK?</span> <span m="887790">Then</span> <span
  m="888050">definitely</span> <span m="889855">delta</span> <span
  m="890240">f</span> <span m="890600">prime</span> <span m="890820">of</span>
  <span m="890950">v</span> <span m="891290">is</span> <span
  m="892260">delta</span> <span m="892660">f prime</span> <span
  m="893060">u</span> <span m="893500">plus 1.</span> <span
  m="896180">Now,</span> <span m="897010">I'll</span> <span
  m="897200">use</span> <span m="897360">u</span> <span m="897710">to</span>
  <span m="897810">be</span> <span m="898050">my</span> <span m="898440">step
  stone</span> <span m="899500">back</span> <span m="899750">to</span> <span
  m="900020">the</span> <span m="900180">original</span> <span m="900560">graph,
  f.</span> <span m="902890">I</span> <span m="903130">want</span> <span
  m="903320">to</span> <span m="903380">say</span> <span
  m="903550">something</span> <span m="904460">about</span> <span
  m="904820">this</span> <span m="905000">quantity</span> <span
  m="905870">and</span> <span m="907740">delta</span> <span m="908080">u</span>
  <span m="908800">in</span> <span m="909150">graph</span> <span
  m="909440">f.</span> <span m="910560">What can I</span> <span
  m="910750">say</span> <span m="911050">about</span> <span
  m="911240">that?</span> <span m="934340">This</span> <span
  m="934450">is</span> <span m="935030">a</span> <span m="935090">tricky
  part.</span></p><p><span m="935565">AUDIENCE: It's greater</span> <span
  m="936930">than</span> <span m="937375">v?</span></p><p><span
  m="939160">PROFESSOR: This</span> <span m="939380">one</span> <span
  m="939640">is</span> <span m="939760">greater</span> <span
  m="939990">than</span> <span m="940160">that?</span> <span
  m="941740">Or</span> <span m="941970">the</span> <span
  m="942110">entire</span> <span m="942330">thing</span> <span m="942580">is
  greater than</span> <span m="943072">that?</span> <span m="947500">OK.</span>
  <span m="948000">I'm</span> <span m="948090">going</span> <span
  m="948290">to</span> <span m="948410">claim</span> <span
  m="948910">this</span> <span m="949310">one</span> <span m="950490">is</span>
  <span m="952390">greater</span> <span m="952630">than</span> <span
  m="953030">delta</span> <span m="953150">f u</span> <span
  m="953360">plus</span> <span m="953430">1.</span> <span m="955270">By</span>
  <span m="955400">which</span> <span m="955980">I'm</span> <span
  m="956740">claiming</span> <span m="957210">this</span> <span
  m="957520">quantity</span> <span m="958090">is</span> <span
  m="958310">larger</span> <span m="958530">than</span> <span
  m="958690">that.</span> <span m="961030">Can</span> <span
  m="961380">anyone</span> <span m="962060">give</span> <span
  m="962230">a</span> <span m="962270">reason</span> <span m="963670">why</span>
  <span m="963930">I</span> <span m="964030">can</span> <span
  m="964920">claim</span> <span m="965160">that?</span> <span
  m="970650">So</span> <span m="971220">recall</span> <span
  m="971840">how</span> <span m="972380">I</span> <span
  m="972730">defined</span> <span m="973300">v.</span></p><p><span
  m="981824">AUDIENCE: Can you</span> <span m="982303">repeat how you</span>
  <span m="982782">defined v?</span></p><p><span m="984700">PROFESSOR:
  Good</span> <span m="984850">question.</span> <span m="985490">So</span> <span
  m="986410">v--</span> <span m="988230">so</span> <span m="988440">there</span>
  <span m="988660">are</span> <span m="988740">several,</span> <span
  m="989200">probably</span> <span m="989510">several</span> <span
  m="989830">v's</span> <span m="990240">that</span> <span
  m="990580">have</span> <span m="991620">delta</span> <span m="991850">f</span>
  <span m="992010">prime</span> <span m="992340">less</span> <span
  m="992560">than</span> <span m="992890">delta f.</span> <span
  m="994360">I'm</span> <span m="994510">going</span> <span m="994750">to</span>
  <span m="994860">define</span> <span m="995270">v</span> <span
  m="995820">to</span> <span m="999380">be</span> <span m="999500">the</span>
  <span m="999610">one</span> <span m="1000020">with</span> <span
  m="1000250">smallest</span> <span m="1001190">delta</span> <span
  m="1001280">f.</span> <span m="1003160">Among</span> <span
  m="1003480">all</span> <span m="1003740">those</span> <span
  m="1004000">nodes</span> <span m="1004470">that</span> <span
  m="1004930">have</span> <span m="1005090">a</span> <span
  m="1005340">job</span> <span m="1005810">in</span> <span
  m="1005980">delta</span> <span m="1006140">f,</span> <span
  m="1006390">in</span> <span m="1006800">delta.</span> <span
  m="1011990">This</span> <span m="1012140">is</span> <span
  m="1012310">probably</span> <span m="1012660">a</span> <span
  m="1012710">tricky</span> <span m="1012930">part.</span> <span
  m="1014110">Then</span> <span m="1014520">by</span> <span
  m="1014780">definition,</span> <span m="1016720">since</span> <span
  m="1017500">delta</span> <span m="1017910">f u</span> <span
  m="1018590">is</span> <span m="1018790">less</span> <span
  m="1019040">than</span> <span m="1019190">delta</span> <span m="1019470">f
  v,</span> <span m="1020560">right,</span> <span m="1022610">and</span> <span
  m="1022810">I</span> <span m="1022870">defined</span> <span
  m="1023155">v</span> <span m="1025790">to</span> <span m="1025890">be</span>
  <span m="1026010">the</span> <span m="1026119">one</span> <span
  m="1026400">with</span> <span m="1026540">the</span> <span
  m="1026720">smallest</span> <span m="1027210">delta</span> <span
  m="1027950">that</span> <span m="1028170">satisfies</span> <span
  m="1028599">that.</span> <span m="1029490">So</span> <span
  m="1029760">all</span> <span m="1029950">the</span> <span
  m="1030069">u's--</span> <span m="1030619">so</span> <span
  m="1030770">u</span> <span m="1031089">is</span> <span m="1031250">a</span>
  <span m="1031310">predecessor</span> <span m="1031750">of</span> <span
  m="1031970">v,</span> <span m="1032869">so</span> <span m="1033020">u</span>
  <span m="1033339">shouldn't</span> <span m="1033750">be</span> <span
  m="1033940">one</span> <span m="1034170">of</span> <span
  m="1034290">those</span> <span m="1034589">nodes</span> <span
  m="1036310">that</span> <span m="1036690">have</span> <span
  m="1036819">a</span> <span m="1036880">drop</span> <span m="1039114">in</span>
  <span m="1039540">delta.</span> <span m="1041175">So</span> <span
  m="1041619">I</span> <span m="1041730">know</span> <span
  m="1041859">this</span> <span m="1042030">is</span> <span
  m="1042190">probably</span> <span m="1042510">a</span> <span
  m="1042569">tricky</span> <span m="1042800">part.</span> <span
  m="1044722">Yeah,</span> <span m="1045150">I'll</span> <span
  m="1045410">stop</span> <span m="1045680">for</span> <span
  m="1045810">questions</span> <span m="1046819">and</span> <span
  m="1047490">make</span> <span m="1047720">sure</span> <span
  m="1047950">we</span> <span m="1048950">resolve</span> <span
  m="1049320">this</span> <span m="1049500">part</span> <span
  m="1049750">before</span> <span m="1049980">we</span> <span
  m="1050120">move</span> <span m="1050310">on.</span> <span
  m="1055480">How</span> <span m="1055590">many</span> <span
  m="1055770">people</span> <span m="1056120">get</span> <span
  m="1056270">it?</span> <span m="1058970">OK.</span> <span m="1059270">Only
  two.</span> <span m="1059870">That's</span> <span m="1060060">not</span> <span
  m="1060230">good.</span> <span m="1060460">OK.</span></p><p><span
  m="1060670">AUDIENCE: I'm</span> <span m="1061165">confused</span> <span
  m="1061660">about</span> <span m="1062155">how</span> <span m="1062650">v can
  be</span> <span m="1063145">the one</span> <span m="1063640">with the</span>
  <span m="1064135">smallest</span> <span m="1064630">delta</span> <span
  m="1065620">f</span> <span m="1066115">if you have</span> <span m="1066610">a
  predecessor</span> <span m="1067105">with</span> <span m="1067600">a</span>
  <span m="1068590">smaller</span> <span m="1069085">delta</span> <span
  m="1069580">f.</span></p><p><span m="1073540">PROFESSOR: OK.</span> <span
  m="1074110">So</span> <span m="1078140">v</span> <span m="1078450">to</span>
  <span m="1078580">be</span> <span m="1078710">the</span> <span
  m="1078920">smallest--</span> <span m="1079530">the</span> <span
  m="1079660">one</span> <span m="1079780">with</span> <span
  m="1080140">smallest</span> <span m="1080520">f</span> <span
  m="1081840">such</span> <span m="1082240">that</span> <span
  m="1084040">delta</span> <span m="1084340">f</span> <span
  m="1084630">prime</span> <span m="1085680">is</span> <span
  m="1085870">less</span> <span m="1086140">than</span> <span
  m="1086420">delta</span> <span m="1086855">f.</span></p><p><span
  m="1088595">AUDIENCE: OK.</span></p><p><span m="1089470">PROFESSOR: OK,</span>
  <span m="1089630">maybe,</span> <span m="1089840">yeah,</span> <span
  m="1090850">that's</span> <span m="1091060">why</span> <span
  m="1092350">I</span> <span m="1092580">confused</span> <span m="1093050">you
  guys.</span> <span m="1093365">Yeah.</span> <span m="1093680">Sorry</span>
  <span m="1093880">about</span> <span m="1094020">that.</span> <span
  m="1095550">So</span> <span m="1095690">we</span> <span
  m="1095820">have</span> <span m="1096050">a</span> <span
  m="1096130">bunch</span> <span m="1096350">of</span> <span
  m="1096480">nodes</span> <span m="1096830">who</span> <span
  m="1097520">have</span> <span m="1097710">a</span> <span m="1097770">drop
  in</span> <span m="1098250">delta,</span> <span m="1099080">and</span> <span
  m="1099880">I</span> <span m="1100000">defined</span> <span
  m="1100370">v</span> <span m="1101650">to</span> <span m="1101760">be</span>
  <span m="1101870">the</span> <span m="1101980">one</span> <span
  m="1102180">among</span> <span m="1102410">them</span> <span
  m="1102700">that</span> <span m="1102900">has</span> <span
  m="1103130">the</span> <span m="1103250">smallest</span> <span
  m="1103710">delta</span> <span m="1103980">f</span> <span
  m="1104240">prime.</span> <span m="1107180">Question?</span></p><p><span
  m="1107500">AUDIENCE: Sorry,</span> <span m="1107997">I'm lost at what</span>
  <span m="1108494">delta f</span> <span m="1108991">prime is</span> <span
  m="1109985">versus</span> <span m="1110482">delta.</span></p><p><span
  m="1111980">PROFESSOR: OK.</span> <span m="1112460">Delta</span> <span
  m="1112690">f</span> <span m="1115540">of</span> <span m="1115730">a</span>
  <span m="1115780">node</span> <span m="1116290">is</span> <span
  m="1116500">the</span> <span m="1116590">shortest</span> <span
  m="1117000">path</span> <span m="1117230">from</span> <span
  m="1117400">source</span> <span m="1117670">to</span> <span
  m="1117780">that</span> <span m="1118000">node</span> <span
  m="1118413">in</span> <span m="1119660">G</span> <span m="1119920">of</span>
  <span m="1120100">f,</span> <span m="1121440">which</span> <span
  m="1121660">is</span> <span m="1121820">the</span> <span
  m="1121950">residual</span> <span m="1122290">graph</span> <span
  m="1122890">given</span> <span m="1123440">a</span> <span
  m="1123530">flow.</span> <span m="1124650">So</span> <span
  m="1125150">f</span> <span m="1125740">is,</span> <span
  m="1126770">well,</span> <span m="1127150">some</span> <span
  m="1127400">flow,</span> <span m="1127930">and</span> <span
  m="1128120">f</span> <span m="1128270">prime</span> <span
  m="1129140">is</span> <span m="1129340">the</span> <span
  m="1129450">flow</span> <span m="1129940">after</span> <span
  m="1130300">we</span> <span m="1130570">augmenting</span> <span
  m="1131820">a</span> <span m="1131920">certain</span> <span
  m="1132240">path.</span> <span m="1133870">So</span> <span
  m="1133970">f</span> <span m="1134160">prime</span> <span
  m="1134460">is</span> <span m="1134570">one step</span> <span
  m="1135200">after</span> <span m="1135410">f.</span> <span
  m="1137955">OK.</span> <span m="1138400">How</span> <span
  m="1138500">many</span> <span m="1138690">people</span> <span
  m="1138940">get</span> <span m="1139070">that</span> <span
  m="1139240">now?</span> <span m="1141780">Still</span> <span
  m="1142400">not</span> <span m="1142570">everyone.</span> <span
  m="1148135">OK.</span> <span m="1148610">Any</span> <span
  m="1148990">questions</span> <span m="1149120">about</span> <span
  m="1149450">that?</span> <span m="1153300">How</span> <span
  m="1153390">many</span> <span m="1153600">people</span> <span
  m="1155040">still</span> <span m="1155540">haven't</span> <span
  m="1155810">got</span> <span m="1155980">that?</span> <span
  m="1159200">OK,</span> <span m="1159540">so</span> <span
  m="1160910">some</span> <span m="1161150">people--</span> <span
  m="1162120">it's</span> <span m="1162280">like</span> <span
  m="1162450">Schrodinger's</span> <span m="1162930">cat.</span> <span
  m="1163270">It's</span> <span m="1163670">in</span> <span m="1163790">the
  middle</span> <span m="1164180">state.</span> <span m="1174920">Well,</span>
  <span m="1175420">then</span> <span m="1175780">I'll</span> <span
  m="1175900">have</span> <span m="1176050">to</span> <span
  m="1176150">move</span> <span m="1176330">on,</span> <span
  m="1177000">and</span> <span m="1177420">I'll</span> <span
  m="1177540">assume</span> <span m="1177700">you</span> <span
  m="1178140">all</span> <span m="1179570">get</span> <span
  m="1179770">that</span> <span m="1179940">one.</span></p><p><span
  m="1184570">As the</span> <span m="1184660">last</span> <span
  m="1184980">step,</span> <span m="1185940">so</span> <span
  m="1186110">of</span> <span m="1186220">course</span> <span m="1186440">we
  will</span> <span m="1186630">ask,</span> <span m="1188610">what's</span>
  <span m="1188930">the</span> <span m="1189200">relation</span> <span
  m="1189680">between</span> <span m="1190200">this</span> <span
  m="1190420">guy</span> <span m="1191190">and</span> <span m="1192394">delta
  f</span> <span m="1192781">of</span> <span m="1193170">v?</span> <span
  m="1196100">Because</span> <span m="1196560">in the end,</span> <span
  m="1197740">we</span> <span m="1197870">want</span> <span
  m="1197980">to</span> <span m="1198060">show</span> <span m="1198220">a</span>
  <span m="1198270">contradiction</span> <span m="1199280">that</span> <span
  m="1199680">delta f</span> <span m="1199940">v</span> <span
  m="1200390">is</span> <span m="1200660">probably</span> <span
  m="1201000">greater</span> <span m="1201770">or</span> <span
  m="1201930">equal</span> <span m="1202180">to</span> <span
  m="1202750">delta</span> <span m="1202940">f of v.</span> <span
  m="1207310">OK.</span> <span m="1207590">This</span> <span
  m="1207730">is</span> <span m="1207850">another</span> <span
  m="1208130">tricky</span> <span m="1208350">part.</span></p><p><span
  m="1213195">So</span> <span m="1213680">let</span> <span m="1213870">me</span>
  <span m="1213950">ask</span> <span m="1214860">maybe a</span> <span
  m="1215090">simpler</span> <span m="1215400">question</span> <span
  m="1215710">now.</span> <span m="1216580">So</span> <span
  m="1216720">that</span> <span m="1216930">is</span> <span
  m="1217360">our</span> <span m="1217675">G</span> <span m="1217990">of</span>
  <span m="1218890">f</span> <span m="1219010">prime.</span> <span
  m="1219840">So</span> <span m="1220160">we</span> <span
  m="1220240">also</span> <span m="1220430">have</span> <span
  m="1220670">G</span> <span m="1220770">of f.</span> <span
  m="1221500">It</span> <span m="1221850">has</span> <span
  m="1222040">the</span> <span m="1222170">source,</span> <span
  m="1223476">some</span> <span m="1223840">u</span> <span
  m="1224120">here,</span> <span m="1224630">v</span> <span
  m="1224850">there,</span> <span m="1227670">sink</span> <span
  m="1227960">there.</span> <span m="1231630">Does</span> <span
  m="1231850">this</span> <span m="1232380">edge</span> <span
  m="1233270">exist</span> <span m="1235400">in</span> <span
  m="1235530">this</span> <span m="1235710">graph?</span> <span
  m="1238470">So</span> <span m="1238490">I</span> <span m="1238590">know</span>
  <span m="1238830">if</span> <span m="1239390">that</span> <span
  m="1239580">edge</span> <span m="1239830">exists,</span> <span
  m="1240260">because</span> <span m="1240550">I</span> <span
  m="1240610">defined</span> <span m="1241250">u</span> <span
  m="1241530">to</span> <span m="1241660">be</span> <span m="1241780">the</span>
  <span m="1241880">predecessor</span> <span m="1242240">of</span> <span
  m="1242600">v.</span> <span m="1244524">But</span> <span m="1245450">u,
  v</span> <span m="1245860">is in</span> <span m="1246120">that</span> <span
  m="1246350">graph</span> <span m="1247150">doesn't</span> <span
  m="1247360">necessarily</span> <span m="1247860">mean</span> <span
  m="1248150">u, v</span> <span m="1248480">is</span> <span
  m="1248670">in</span> <span m="1248890">the</span> <span m="1249400">old
  graph.</span> <span m="1253410">It</span> <span m="1253560">could</span> <span
  m="1253730">certainly</span> <span m="1254230">exist,</span> <span
  m="1254970">but</span> <span m="1255200">is</span> <span m="1255330">it</span>
  <span m="1255430">possible</span> <span m="1255940">that</span> <span
  m="1256320">this</span> <span m="1256580">edge</span> <span
  m="1258770">didn't</span> <span m="1259080">exist?</span> <span
  m="1262080">How</span> <span m="1262190">many</span> <span
  m="1262400">people</span> <span m="1262870">would</span> <span
  m="1262980">say</span> <span m="1265220">that</span> <span
  m="1265450">edge</span> <span m="1266500">definitely</span> <span
  m="1266910">exists?</span> <span m="1270050">How</span> <span
  m="1270150">many</span> <span m="1270330">people</span> <span
  m="1270590">would</span> <span m="1270690">say</span> <span
  m="1271950">maybe</span> <span m="1272400">it</span> <span
  m="1272480">doesn't</span> <span m="1272750">exist?</span> <span
  m="1283320">OK.</span> <span m="1283830">It</span> <span
  m="1284050">doesn't</span> <span m="1284240">matter,</span> <span
  m="1284570">because</span> <span m="1284920">we</span> <span
  m="1285040">can</span> <span m="1285190">prove</span> <span m="1285420">both
  cases.</span></p><p><span m="1286910">So</span> <span m="1287640">let's
  say</span> <span m="1287980">case</span> <span m="1288230">one,</span> <span
  m="1291480">u, v</span> <span m="1293670">is</span> <span
  m="1293880">indeed</span> <span m="1295480">in</span> <span
  m="1295610">the</span> <span m="1295800">original</span> <span
  m="1296150">graph,</span> <span m="1296490">G</span> <span
  m="1296760">of</span> <span m="1296980">f.</span> <span m="1298444">OK.</span>
  <span m="1298901">In</span> <span m="1299360">that</span> <span
  m="1299520">case,</span> <span m="1299930">can</span> <span
  m="1300100">I</span> <span m="1300160">say</span> <span
  m="1300340">something</span> <span m="1300700">about</span> <span
  m="1301000">that</span> <span m="1301140">last</span> <span
  m="1301370">step?</span></p><p><span m="1318945">AUDIENCE: It's</span> <span
  m="1319935">greater or</span> <span m="1320430">equal to</span> <span
  m="1320925">delta f</span> <span m="1321420">v.</span></p><p><span
  m="1323430">PROFESSOR: Greater</span> <span m="1323720">or</span> <span
  m="1324200">equal</span> <span m="1324760">to</span> <span
  m="1327470">delta</span> <span m="1327730">v.</span> <span
  m="1329260">OK.</span> <span m="1329590">Why is that?</span></p><p><span
  m="1330940">AUDIENCE: Because</span> <span m="1332760">v</span> <span
  m="1333070">was</span> <span m="1333553">on</span> <span
  m="1334036">the</span> <span m="1334519">shortest</span> <span
  m="1335002">path.</span> <span m="1337417">Well--</span> <span
  m="1338866">yeah.</span> <span m="1339349">So</span> <span m="1339832">the
  shortest</span> <span m="1340798">path,</span> <span m="1341281">either
  passed</span> <span m="1341764">through--</span> <span
  m="1344970">yeah.</span> <span m="1345708">The shortest path</span> <span
  m="1346156">to v</span> <span m="1346604">either</span> <span
  m="1347052">passed through</span> <span m="1347500">u</span> <span
  m="1347948">or didn't.</span></p><p><span m="1348850">PROFESSOR:
  Correct.</span> <span m="1350310">Does</span> <span
  m="1350470">everyone</span> <span m="1350760">get</span> <span
  m="1350830">that?</span> <span m="1351370">So</span> <span
  m="1351710">the</span> <span m="1351810">shortest</span> <span
  m="1352270">path</span> <span m="1353260">in</span> <span
  m="1353400">this</span> <span m="1353580">graph</span> <span
  m="1353860">to</span> <span m="1354060">v</span> <span m="1354490">is</span>
  <span m="1354670">not</span> <span m="1354840">necessarily</span> <span
  m="1355480">this</span> <span m="1355720">one,</span> <span
  m="1356220">right?</span> <span m="1357890">But</span> <span
  m="1358220">if</span> <span m="1358400">it's</span> <span
  m="1358580">some</span> <span m="1359060">other</span> <span
  m="1359260">one--</span> <span m="1360045">OK,</span> <span
  m="1360460">so,</span> <span m="1360920">in</span> <span
  m="1361070">case</span> <span m="1361270">one</span> <span
  m="1361430">I'm</span> <span m="1361620">assuming</span> <span
  m="1361990">this</span> <span m="1362150">edge</span> <span
  m="1362380">exists,</span> <span m="1363390">right?</span> <span
  m="1365930">Then</span> <span m="1366140">no</span> <span
  m="1366250">matter</span> <span m="1366490">what</span> <span m="1366630">the
  shortest path</span> <span m="1366990">is,</span> <span
  m="1367520">it's</span> <span m="1367710">definitely</span> <span
  m="1368080">shorter</span> <span m="1368530">than</span> <span
  m="1369050">I</span> <span m="1369190">first</span> <span
  m="1369590">go</span> <span m="1369900">to--</span> <span
  m="1370550">from</span> <span m="1370810">s</span> <span m="1370990">to</span>
  <span m="1371100">u</span> <span m="1371430">and</span> <span
  m="1371540">then</span> <span m="1371690">u</span> <span m="1371810">to
  v.</span> <span m="1373702">Right?</span> <span m="1374650">The</span> <span
  m="1374750">shortest</span> <span m="1375160">path</span> <span
  m="1375540">between</span> <span m="1376120">s</span> <span
  m="1376360">to</span> <span m="1376490">v</span> <span m="1377190">is</span>
  <span m="1377390">definitely</span> <span m="1377870">shorter</span> <span
  m="1378580">than</span> <span m="1379080">I</span> <span
  m="1379210">first</span> <span m="1379770">go</span> <span m="1379920">from
  s</span> <span m="1380230">to</span> <span m="1380330">u</span> <span
  m="1380770">and</span> <span m="1380930">then</span> <span
  m="1381260">u</span> <span m="1381350">to v.</span> <span
  m="1383880">Make</span> <span m="1384360">sense?</span> <span
  m="1386490">OK.</span> <span m="1386680">So</span> <span
  m="1389380">case</span> <span m="1389580">one,</span> <span
  m="1390340">then,</span> <span m="1390780">is</span> <span
  m="1390900">a</span> <span m="1390960">contradiction,</span> <span
  m="1392310">because</span> <span m="1392590">we</span> <span
  m="1392730">showed</span> <span m="1393110">that</span> <span
  m="1393300">delta</span> <span m="1393470">f</span> <span
  m="1393670">prime</span> <span m="1394190">of</span> <span
  m="1394310">v</span> <span m="1394680">is</span> <span
  m="1395750">greater</span> <span m="1396310">or</span> <span
  m="1396490">equal</span> <span m="1396750">to</span> <span
  m="1398110">delta</span> <span m="1398310">f</span> <span
  m="1398730">of</span> <span m="1398850">v.</span> <span m="1401670">Any</span>
  <span m="1401800">questions</span> <span m="1402100">about</span> <span
  m="1402270">that?</span></p><p><span m="1407200">OK.</span> <span
  m="1407680">Case</span> <span m="1407950">two,</span> <span
  m="1412580">u,</span> <span m="1412800">v</span> <span m="1413810">is</span>
  <span m="1414070">not</span> <span m="1414720">in</span> <span
  m="1415820">Gf.</span> <span m="1417230">OK,</span> <span
  m="1417510">so,</span> <span m="1418070">how</span> <span
  m="1418240">can</span> <span m="1418380">that</span> <span
  m="1418620">even</span> <span m="1418990">happen?</span> <span
  m="1421070">Is</span> <span m="1421120">it</span> <span
  m="1421230">possible</span> <span m="1424272">that</span> <span
  m="1424710">this</span> <span m="1424970">edge</span> <span
  m="1427980">didn't</span> <span m="1428260">exist?</span></p><p><span
  m="1435662">AUDIENCE: It could be</span> <span m="1436155">a</span> <span
  m="1437634">backwards-facing</span> <span m="1438620">edge</span> <span
  m="1439113">that you</span> <span m="1439606">add</span> <span
  m="1442071">[INAUDIBLE].</span></p><p><span m="1444550">PROFESSOR:
  Great</span> <span m="1444740">point.</span> <span m="1445060">That's</span>
  <span m="1445330">exactly</span> <span m="1445750">right.</span> <span
  m="1446620">So</span> <span m="1447110">it</span> <span m="1447470">is</span>
  <span m="1447620">possible</span> <span m="1448260">that</span> <span
  m="1448440">this</span> <span m="1448610">edge</span> <span
  m="1449440">didn't</span> <span m="1449710">exist,</span> <span
  m="1450390">but</span> <span m="1450850">only</span> <span
  m="1451430">appeared</span> <span m="1452470">after</span> <span
  m="1452910">we</span> <span m="1453370">go from</span> <span
  m="1453590">f</span> <span m="1453850">to f</span> <span
  m="1454130">prime.</span> <span m="1455360">How</span> <span
  m="1455510">can</span> <span m="1455640">that</span> <span
  m="1455820">happen?</span> <span m="1456870">That</span> <span
  m="1457080">must</span> <span m="1457350">mean</span> <span
  m="1458370">we</span> <span m="1458530">are</span> <span
  m="1458650">augmenting</span> <span m="1459290">a</span> <span
  m="1459340">path</span> <span m="1460220">that</span> <span
  m="1461240">goes</span> <span m="1461540">right</span> <span
  m="1461750">through</span> <span m="1461950">it.</span> <span
  m="1462660">Right?</span> <span m="1463120">But</span> <span m="1463280">this
  edge</span> <span m="1463420">doesn't</span> <span m="1463870">exist,</span>
  <span m="1464380">so</span> <span m="1464430">we</span> <span
  m="1464540">cannot</span> <span m="1464850">be</span> <span
  m="1464980">augmenting</span> <span m="1465540">a</span> <span
  m="1465610">path</span> <span m="1466080">that</span> <span
  m="1466350">crosses</span> <span m="1466720">this</span> <span
  m="1466940">way.</span> <span m="1468210">We</span> <span
  m="1468400">must</span> <span m="1468700">be</span> <span
  m="1468870">augmenting</span> <span m="1469200">a</span> <span
  m="1469530">path</span> <span m="1473550">that</span> <span
  m="1473700">goes</span> <span m="1473880">like</span> <span
  m="1474050">that.</span> <span m="1475990">First</span> <span
  m="1476350">from</span> <span m="1476580">s</span> <span m="1476790">to</span>
  <span m="1477160">v,</span> <span m="1477850">and</span> <span
  m="1478070">then</span> <span m="1479040">v</span> <span m="1479240">to</span>
  <span m="1479360">u,</span> <span m="1479920">and</span> <span
  m="1480110">then</span> <span m="1481380">u</span> <span m="1481700">to
  t.</span> <span m="1483910">If</span> <span m="1484050">we</span> <span
  m="1484200">are</span> <span m="1484550">augmenting</span> <span
  m="1485370">such</span> <span m="1485660">a</span> <span
  m="1485730">path,</span> <span m="1487270">then</span> <span
  m="1487510">we're</span> <span m="1487680">going</span> <span
  m="1487920">to</span> <span m="1488180">remove</span> <span
  m="1489760">this</span> <span m="1490050">edge</span> <span
  m="1490680">from</span> <span m="1490860">v</span> <span m="1491010">to</span>
  <span m="1491110">u,</span> <span m="1492460">but</span> <span m="1492740">we
  will</span> <span m="1493010">add</span> <span m="1494720">u to</span> <span
  m="1495030">v</span> <span m="1496250">to</span> <span m="1496650">the</span>
  <span m="1496810">next</span> <span m="1497190">graph.</span> <span
  m="1502000">OK?</span> <span m="1508563">Did</span> <span
  m="1509050">everyone</span> <span m="1509350">get</span> <span
  m="1509440">that?</span></p><p><span m="1522510">So</span> <span
  m="1523540">now,</span> <span m="1524360">here--</span> <span
  m="1524830">well,</span> <span m="1524990">formally</span> <span
  m="1525480">I'm</span> <span m="1525570">going</span> <span
  m="1525770">to</span> <span m="1525870">claim</span> <span
  m="1526740">if</span> <span m="1527040">we</span> <span
  m="1527230">assume</span> <span m="1527620">u,</span> <span
  m="1527810">v</span> <span m="1528100">is</span> <span m="1528260">not</span>
  <span m="1528440">in</span> <span m="1528520">G</span> <span
  m="1528740">of</span> <span m="1528840">f,</span> <span m="1529540">and</span>
  <span m="1529750">we</span> <span m="1529890">also</span> <span
  m="1530150">know</span> <span m="1530750">u,</span> <span m="1530990">v</span>
  <span m="1532300">is</span> <span m="1532500">in</span> <span
  m="1533000">Gf</span> <span m="1533570">prime.</span> <span
  m="1535640">What</span> <span m="1535670">does</span> <span
  m="1535830">that</span> <span m="1536020">mean?</span> <span
  m="1537260">These</span> <span m="1537540">two</span> <span
  m="1539810">can</span> <span m="1540520">only</span> <span
  m="1540890">be</span> <span m="1541150">caused</span> <span
  m="1542140">by</span> <span m="1542730">the</span> <span
  m="1542890">fact</span> <span m="1543280">that</span> <span
  m="1544320">u,</span> <span m="1544640">v</span> <span m="1546390">is</span>
  <span m="1546570">in</span> <span m="1548350">G of</span> <span
  m="1548780">f.</span> <span m="1549500">Not</span> <span
  m="1549710">only</span> <span m="1550130">in</span> <span
  m="1550210">that</span> <span m="1550390">graph--</span> <span
  m="1554640">it</span> <span m="1554800">must</span> <span
  m="1555140">be</span> <span m="1555330">on</span> <span m="1555560">the</span>
  <span m="1555670">path</span> <span m="1556060">we</span> <span
  m="1556460">are</span> <span m="1556610">augmenting.</span> <span
  m="1565520">Make</span> <span m="1565680">sense?</span> <span
  m="1576710">OK.</span> <span m="1577200">So</span> <span
  m="1577400">given</span> <span m="1577650">that,</span> <span
  m="1578080">can</span> <span m="1578210">we</span> <span
  m="1578340">say</span> <span m="1578520">something</span> <span
  m="1578940">about</span> <span m="1580810">delta f</span> <span
  m="1582130">of</span> <span m="1582200">u</span> <span m="1582700">and</span>
  <span m="1582940">delta</span> <span m="1583050">f</span> <span
  m="1583290">of</span> <span m="1583670">v?</span> <span m="1593520">So</span>
  <span m="1593860">here</span> <span m="1594210">is</span> <span
  m="1594350">our</span> <span m="1594550">p.</span> <span
  m="1596375">Right?</span> <span m="1598690">This</span> <span
  m="1598830">entire</span> <span m="1599280">thing</span> <span
  m="1599430">here.</span> <span m="1608180">And</span> <span
  m="1608660">p</span> <span m="1608910">is</span> <span m="1609060">the</span>
  <span m="1609560">augmenting</span> <span m="1610160">path.</span></p><p><span
  m="1613112">AUDIENCE: And f u is</span> <span m="1613604">just</span> <span
  m="1614096">f v</span> <span m="1614588">plus 1.</span></p><p><span
  m="1617060">PROFESSOR: Correct. Right.</span> <span m="1617440">So</span>
  <span m="1618620">if</span> <span m="1618860">that</span> <span
  m="1619080">is</span> <span m="1619280">the</span> <span
  m="1620440">augmenting</span> <span m="1620810">path</span> <span
  m="1621410">in</span> <span m="1621600">Edmonds-Karp,</span> <span
  m="1622300">we</span> <span m="1622400">are</span> <span
  m="1622660">looking</span> <span m="1622940">for</span> <span
  m="1623110">the</span> <span m="1623190">shortest</span> <span
  m="1623670">path.</span> <span m="1624030">Right?</span> <span
  m="1625640">So</span> <span m="1627140">v</span> <span m="1627490">is</span>
  <span m="1627670">the</span> <span m="1627770">predecessor</span> <span
  m="1628570">of</span> <span m="1628710">u,</span> <span
  m="1629690">then</span> <span m="1630740">delta of</span> <span
  m="1631160">u</span> <span m="1632240">is</span> <span
  m="1632580">delta</span> <span m="1632650">of</span> <span
  m="1633000">v</span> <span m="1633730">plus</span> <span m="1634000">1.</span>
  <span m="1634370">That</span> <span m="1634620">means</span> <span
  m="1635360">that</span> <span m="1635620">quantity,</span> <span
  m="1637310">here,</span> <span m="1641730">is</span> <span
  m="1642914">delta</span> <span m="1643371">f</span> <span
  m="1643830">of</span> <span m="1644540">v</span> <span m="1646260">plus</span>
  <span m="1646450">2.</span> <span m="1651117">OK?</span> <span
  m="1664440">So</span> <span m="1664620">it's</span> <span
  m="1664750">also</span> <span m="1665030">a</span> <span
  m="1665080">contradiction</span> <span m="1666790">to</span> <span
  m="1667600">what</span> <span m="1667760">we</span> <span
  m="1668860">assumed.</span> <span m="1682361">OK.</span> <span
  m="1682860">So</span> <span m="1683080">that</span> <span
  m="1683370">proves</span> <span m="1684080">our</span> <span
  m="1684420">lemma</span> <span m="1684880">of</span> <span
  m="1686110">every</span> <span m="1686410">node's</span> <span
  m="1687100">delta</span> <span m="1687800">monotonically</span> <span
  m="1688270">increases.</span></p><p><span m="1690156">Now</span> <span
  m="1690540">here,</span> <span m="1690830">I'm</span> <span
  m="1690930">going</span> <span m="1691160">to</span> <span
  m="1691260">show</span> <span m="1691840">that--</span> <span
  m="1693516">our</span> <span m="1693900">final</span> <span
  m="1694200">theorem,</span> <span m="1695740">that</span> <span
  m="1696220">we</span> <span m="1696370">have</span> <span
  m="1697280">at</span> <span m="1697760">most</span> <span
  m="1698500">VE</span> <span m="1699480">number</span> <span
  m="1699760">of</span> <span m="1699990">iterations.</span> <span
  m="1707290">So</span> <span m="1707430">the</span> <span
  m="1707510">way</span> <span m="1707630">we're</span> <span
  m="1707790">going</span> <span m="1707950">to</span> <span
  m="1708020">show</span> <span m="1708230">that</span> <span
  m="1709260">is</span> <span m="1715530">we are</span> <span
  m="1715660">going</span> <span m="1715840">to</span> <span
  m="1715940">define</span> <span m="1716870">a</span> <span
  m="1717430">capacity</span> <span m="1718050">of</span> <span
  m="1718180">the</span> <span m="1718300">path.</span> <span
  m="1720530">It</span> <span m="1720690">must</span> <span
  m="1720960">be</span> <span m="1721150">the</span> <span
  m="1721240">capacity</span> <span m="1721780">of</span> <span
  m="1721890">its</span> <span m="1722050">weakest</span> <span
  m="1722410">link.</span> <span m="1722790">We're</span> <span
  m="1722970">going</span> <span m="1723180">to</span> <span
  m="1723300">define</span> <span m="1724340">its</span> <span
  m="1724510">weakest</span> <span m="1724950">link</span> <span
  m="1726080">is</span> <span m="1726410">u, v.</span> <span
  m="1728316">OK?</span> <span m="1728780">And</span> <span
  m="1728960">we're</span> <span m="1729130">going</span> <span
  m="1729350">to</span> <span m="1729460">show</span> <span
  m="1729990">that</span> <span m="1731260">u,</span> <span
  m="1731550">v--</span> <span m="1732810">we'll</span> <span
  m="1733050">call</span> <span m="1733240">that</span> <span
  m="1734990">critical</span> <span m="1735500">edge--</span> <span
  m="1737390">we're</span> <span m="1737540">going</span> <span
  m="1737740">to</span> <span m="1737850">show</span> <span m="1738090">u,
  v</span> <span m="1738810">can</span> <span m="1739250">be</span> <span
  m="1739640">critical</span> <span m="1744460">only</span> <span m="1746090">O
  of V</span> <span m="1746260">times.</span> <span m="1748840">If</span> <span
  m="1749050">that</span> <span m="1749710">holds</span> <span
  m="1750310">for</span> <span m="1750500">every</span> <span
  m="1750800">edge,</span> <span m="1751440">then</span> <span
  m="1751640">I</span> <span m="1751710">claim</span> <span
  m="1753340">all</span> <span m="1753510">the</span> <span
  m="1753630">edges</span> <span m="1753930">combined</span> <span
  m="1754510">can</span> <span m="1755090">only</span> <span
  m="1755320">be</span> <span m="1755490">augmented</span> <span m="1756780">O
  of</span> <span m="1757050">VE</span> <span
  m="1757390">times.</span></p><p><span m="1768580">Now,</span> <span
  m="1771020">how</span> <span m="1771160">do</span> <span m="1771240">we</span>
  <span m="1771340">show</span> <span m="1771500">that?</span> <span
  m="1773270">So</span> <span m="1773730">again,</span> <span
  m="1778760">let's</span> <span m="1779000">assume</span> <span m="1779490">we
  are</span> <span m="1779640">augmenting</span> <span m="1779975">a</span>
  <span m="1780310">path</span> <span m="1782260">that</span> <span
  m="1782510">goes</span> <span m="1782810">through</span> <span m="1783040">u
  to v.</span> <span m="1786590">If</span> <span m="1786760">we</span> <span
  m="1786890">do</span> <span m="1787040">that,</span> <span
  m="1788630">by</span> <span m="1789030">our</span> <span
  m="1789240">algorithm,</span> <span m="1789950">we</span> <span
  m="1790020">will</span> <span m="1790410">get rid</span> <span
  m="1790790">of</span> <span m="1790900">this</span> <span
  m="1791140">path,</span> <span m="1792490">and</span> <span
  m="1792960">have</span> <span m="1793170">an</span> <span
  m="1793240">edge</span> <span m="1795100">backwards.</span> <span
  m="1797570">We</span> <span m="1797770">go</span> <span
  m="1797970">from</span> <span m="1798810">f</span> <span m="1799090">to</span>
  <span m="1799670">some</span> <span m="1799940">other</span> <span
  m="1800670">f</span> <span m="1800840">prime.</span> <span
  m="1803730">Now,</span> <span m="1805250">when</span> <span
  m="1805560">can</span> <span m="1805840">I</span> <span
  m="1806050">augment</span> <span m="1806490">u, v</span> <span
  m="1806840">again?</span> <span m="1810490">It</span> <span
  m="1810650">can</span> <span m="1810770">only</span> <span
  m="1811110">happen</span> <span m="1812210">if</span> <span
  m="1812390">at</span> <span m="1812520">some</span> <span
  m="1812720">point,</span> <span m="1813910">I</span> <span
  m="1814040">come</span> <span m="1814280">back</span> <span
  m="1814720">to</span> <span m="1814870">augment</span> <span
  m="1815230">the</span> <span m="1815330">path</span> <span
  m="1815680">going</span> <span m="1815950">from</span> <span
  m="1816650">v</span> <span m="1816780">to</span> <span m="1816890">u,</span>
  <span m="1818850">because</span> <span m="1819260">that</span> <span
  m="1819690">will</span> <span m="1823310">eliminate</span> <span
  m="1823670">this</span> <span m="1824950">back</span> <span
  m="1825345">edge,</span> <span m="1825740">and</span> <span
  m="1829160">and</span> <span m="1829300">adds</span> <span
  m="1829540">back</span> <span m="1829930">our</span> <span
  m="1830190">edge</span> <span m="1830400">u, v.</span> <span
  m="1834210">OK.</span> <span m="1834710">Let's</span> <span
  m="1834930">see</span> <span m="1835290">what</span> <span
  m="1835510">happens</span> <span m="1836460">there.</span></p><p><span
  m="1840840">Now</span> <span m="1841460">I'll</span> <span
  m="1841770">call</span> <span m="1842000">this</span> <span
  m="1842230">graph</span> <span m="1842660">f,</span> <span
  m="1843370">this</span> <span m="1843590">graph</span> <span
  m="1844460">f</span> <span m="1844600">prime.</span> <span
  m="1850100">So</span> <span m="1850230">in</span> <span m="1850410">f</span>
  <span m="1850590">prime,</span> <span m="1852090">we</span> <span
  m="1852240">know</span> <span m="1852560">we</span> <span
  m="1852720">are</span> <span m="1852980">augmenting</span> <span
  m="1853380">the</span> <span m="1853440">path</span> <span
  m="1853710">from</span> <span m="1853900">v</span> <span m="1854130">to</span>
  <span m="1854230">u.</span> <span m="1854930">Right.</span> <span
  m="1855320">The</span> <span m="1855380">same</span> <span
  m="1855630">argument,</span> <span m="1856710">delta</span> <span
  m="1857060">u,</span> <span m="1857610">is</span> <span
  m="1857970">delta</span> <span m="1859020">v</span> <span
  m="1859730">plus</span> <span m="1860290">1</span> <span m="1860960">in</span>
  <span m="1861280">f</span> <span m="1861460">prime.</span> <span
  m="1862890">Correct?</span> <span m="1865910">And</span> <span
  m="1866080">we</span> <span m="1866190">know</span> <span
  m="1866440">this</span> <span m="1866650">one</span> <span
  m="1867400">doesn't</span> <span m="1867700">drop,</span> <span
  m="1868800">right?</span> <span m="1868980">So</span> <span
  m="1869170">it's</span> <span m="1869970">greater or</span> <span
  m="1870400">equal</span> <span m="1870670">than</span> <span
  m="1870990">delta</span> <span m="1871340">f</span> <span
  m="1871920">of</span> <span m="1872090">v</span> <span m="1873170">plus</span>
  <span m="1873590">1.</span> <span m="1876050">OK?</span> <span
  m="1878110">And</span> <span m="1878240">we</span> <span
  m="1878370">also</span> <span m="1878620">know</span> <span
  m="1879290">in</span> <span m="1879500">f,</span> <span m="1880630">v
  is</span> <span m="1881090">the</span> <span m="1881220">predecessor</span>
  <span m="1881525">of</span> <span m="1881830">u.</span> <span
  m="1884820">So</span> <span m="1886060">this</span> <span
  m="1886250">one</span> <span m="1887710">is</span> <span
  m="1887800">equal</span> <span m="1888270">to</span> <span
  m="1888910">delta</span> <span m="1889170">f</span> <span
  m="1889670">of</span> <span m="1889860">u</span> <span m="1891490">plus</span>
  <span m="1891740">2.</span> <span m="1894080">What</span> <span
  m="1894220">does</span> <span m="1894360">that</span> <span
  m="1894510">mean?</span> <span m="1895100">It</span> <span
  m="1895150">means</span> <span m="1897020">in</span> <span
  m="1897180">between</span> <span m="1899300">two</span> <span
  m="1899520">times</span> <span m="1899960">u, v</span> <span
  m="1901370">is</span> <span m="1901520">augmented,</span> <span
  m="1903190">delta</span> <span m="1903820">of</span> <span
  m="1904040">u</span> <span m="1905550">must</span> <span
  m="1905860">increase</span> <span m="1906360">by</span> <span
  m="1906520">at</span> <span m="1906690">least</span> <span
  m="1906910">2.</span></p><p><span m="1913210">Then</span> <span
  m="1913750">how</span> <span m="1913960">large</span> <span
  m="1914750">can</span> <span m="1915110">delta</span> <span
  m="1915830">of</span> <span m="1915980">a</span> <span
  m="1916040">certain</span> <span m="1916380">node</span> <span
  m="1916640">possibly</span> <span m="1917060">be?</span> <span
  m="1918210">It's</span> <span m="1918300">definitely</span> <span
  m="1920440">bounded</span> <span m="1920760">by</span> <span
  m="1920890">v.</span> <span m="1921630">So</span> <span
  m="1921920">then</span> <span m="1922160">I</span> <span
  m="1922240">claim</span> <span m="1923140">this</span> <span
  m="1923380">particular</span> <span m="1923700">edge,</span> <span
  m="1924080">u, v,</span> <span m="1924770">can</span> <span
  m="1924950">only</span> <span m="1925250">be</span> <span
  m="1925510">involved,</span> <span m="1926080">can</span> <span
  m="1926200">only</span> <span m="1926480">be</span> <span
  m="1926670">critical</span> <span m="1927490">edge,</span> <span m="1928310">O
  of V</span> <span m="1928720">times.</span> <span m="1930030">Actually,</span>
  <span m="1930470">half</span> <span m="1930730">of</span> <span
  m="1930870">V</span> <span m="1930990">times.</span> <span
  m="1932320">Strictly.</span> <span m="1933860">So</span> <span
  m="1934100">then,</span> <span m="1935060">every</span> <span
  m="1935300">edge</span> <span m="1935450">combined,</span> <span
  m="1936440">there</span> <span m="1936610">can</span> <span
  m="1936720">only</span> <span m="1937030">be</span> <span
  m="1938770">half</span> <span m="1939000">of</span> <span m="1939150">V</span>
  <span m="1939390">times</span> <span m="1939660">E</span> <span
  m="1941430">number</span> <span m="1941820">of</span> <span
  m="1942100">augmentations.</span> <span m="1950662">OK.</span> <span
  m="1951160">Any</span> <span m="1951340">questions</span> <span
  m="1951690">about</span> <span m="1951880">that</span> <span
  m="1952020">part?</span> <span m="1952420">About</span> <span
  m="1952810">the</span> <span m="1952930">entire</span> <span
  m="1953230">proof?</span> <span m="1991150">If</span> <span
  m="1991280">not,</span> <span m="1991500">we'll</span> <span
  m="1991660">move</span> <span m="1991840">on.</span></p><p><span
  m="1999920">OK. This</span> <span m="2000060">is</span> <span
  m="2000210">not</span> <span m="2000410">part</span> <span
  m="2000620">of</span> <span m="2000740">the</span> <span
  m="2001360">required</span> <span m="2002080">in the</span> <span
  m="2002190">recitation,</span> <span m="2002780">but</span> <span
  m="2003140">I'll quickly</span> <span m="2003410">say</span> <span
  m="2003660">a</span> <span m="2004100">few words</span> <span
  m="2005000">about</span> <span m="2006090">an even better</span> <span
  m="2006580">algorithm,</span> <span m="2007040">Dinic,</span> <span
  m="2008970">which</span> <span m="2009140">was</span> <span
  m="2009490">in</span> <span m="2011140">O of</span> <span m="2011420">V</span>
  <span m="2012320">squared</span> <span m="2012910">times</span> <span
  m="2013260">E.</span> <span m="2014290">So</span> <span
  m="2014670">this</span> <span m="2014850">is</span> <span
  m="2015030">an</span> <span m="2015270">improvement</span> <span
  m="2015880">to</span> <span m="2016520">Edmonds-Karp,</span> <span
  m="2017190">and</span> <span m="2017450">its</span> <span
  m="2017790">idea</span> <span m="2018070">is</span> <span
  m="2018220">that</span> <span m="2018910">I'm</span> <span
  m="2019070">going</span> <span m="2019340">to</span> <span
  m="2019550">find</span> <span m="2025690">all the</span> <span
  m="2026000">shortest</span> <span m="2026260">paths</span> <span
  m="2028000">in</span> <span m="2028150">one</span> <span m="2028330">go</span>
  <span m="2029260">from</span> <span m="2029490">s</span> <span m="2029690">to
  t.</span> <span m="2033310">I'm</span> <span m="2033440">going</span> <span
  m="2033630">to</span> <span m="2033740">augment</span> <span
  m="2034400">all</span> <span m="2034570">of</span> <span
  m="2034700">them</span> <span m="2036570">at</span> <span
  m="2036740">the</span> <span m="2036800">same</span> <span
  m="2036990">time.</span> <span m="2040150">Then,</span> <span
  m="2041390">because</span> <span m="2041760">they</span> <span m="2041890">are
  all</span> <span m="2042190">shortest</span> <span m="2042540">paths,</span>
  <span m="2043050">when</span> <span m="2043260">I</span> <span
  m="2043330">augment</span> <span m="2043900">that,</span> <span
  m="2044620">each</span> <span m="2044900">path</span> <span
  m="2045200">will</span> <span m="2045390">be</span> <span
  m="2045600">broken.</span> <span m="2046580">Maybe</span> <span
  m="2046880">I'll</span> <span m="2046970">get</span> <span m="2047150">rid
  of</span> <span m="2047340">this</span> <span m="2047520">edge,</span> <span
  m="2048030">this</span> <span m="2048239">edge,</span> <span
  m="2048679">and</span> <span m="2049010">that</span> <span
  m="2049210">edge.</span> <span m="2050050">And</span> <span m="2050270">the
  thesis</span> <span m="2050429">is</span> <span m="2050770">that</span> <span
  m="2051310">the</span> <span m="2051429">shortest</span> <span
  m="2051870">path</span> <span m="2054060">will</span> <span
  m="2054360">increase.</span></p><p><span m="2055540">So here,</span> <span
  m="2055920">the shortest</span> <span m="2056190">path is</span> <span
  m="2056730">3,</span> <span m="2057370">but</span> <span m="2057570">I</span>
  <span m="2057650">have</span> <span m="2057800">destroyed</span> <span
  m="2058469">all</span> <span m="2058690">the</span> <span
  m="2058780">shortest</span> <span m="2059120">path</span> <span
  m="2059350">of</span> <span m="2059449">length</span> <span
  m="2059679">3,</span> <span m="2060230">so</span> <span m="2060400">I'm</span>
  <span m="2060620">going</span> <span m="2060900">to</span> <span
  m="2061150">shortest</span> <span m="2061340">path</span> <span
  m="2061520">of</span> <span m="2061860">4.</span> <span m="2063650">If</span>
  <span m="2063820">they</span> <span m="2063960">do</span> <span
  m="2064120">that,</span> <span m="2064560">you</span> <span
  m="2064690">can</span> <span m="2064860">bound</span> <span
  m="2065070">the</span> <span m="2065130">number</span> <span
  m="2065440">of</span> <span m="2065650">iterations</span> <span
  m="2066469">to</span> <span m="2066780">O of V,</span> <span
  m="2068290">because</span> <span m="2068580">your</span> <span
  m="2068739">shortest</span> <span m="2069040">path</span> <span
  m="2069929">can</span> <span m="2070250">be,</span> <span
  m="2070409">at</span> <span m="2070580">most,</span> <span
  m="2070850">V.</span> <span m="2071789">But</span> <span
  m="2072669">each</span> <span m="2073110">iteration</span> <span
  m="2073670">is</span> <span m="2074020">slightly</span> <span
  m="2074429">more</span> <span m="2074590">complicated,</span> <span
  m="2075179">because</span> <span m="2075350">you</span> <span
  m="2075690">need</span> <span m="2075800">to</span> <span
  m="2075889">find</span> <span m="2076130">all the</span> <span
  m="2076600">shortest</span> <span m="2076889">paths,</span> <span
  m="2077515">and it</span> <span m="2077820">happens</span> <span
  m="2078230">that</span> <span m="2078480">they</span> <span
  m="2078580">can</span> <span m="2078940">show--</span> <span m="2079300">you
  can find it in</span> <span m="2079810">V</span> <span
  m="2080110">times</span> <span m="2080330">E.</span> <span
  m="2081010">That</span> <span m="2081230">gives</span> <span
  m="2081400">the</span> <span m="2081790">V</span> <span
  m="2081940">square</span> <span m="2082260">of E.</span></p><p><span
  m="2082830">That's</span> <span m="2083030">not</span> <span
  m="2083179">the</span> <span m="2083280">important</span> <span
  m="2083580">part.</span> <span m="2084770">The</span> <span
  m="2084830">more</span> <span m="2085010">interesting</span> <span
  m="2085370">part</span> <span m="2085670">is</span> <span
  m="2085830">that,</span> <span m="2086179">actually,</span> <span
  m="2086590">the</span> <span m="2086710">author</span> <span
  m="2087040">of</span> <span m="2087139">this</span> <span
  m="2087820">algorithm,</span> <span m="2089440">his</span> <span
  m="2089810">name</span> <span m="2090814">is</span> <span
  m="2091288">Dinitz.</span> <span m="2093658">But</span> <span
  m="2094139">his</span> <span m="2094380">algorithm</span> <span
  m="2094510">is</span> <span m="2094989">very</span> <span
  m="2095179">hard</span> <span m="2095469">to</span> <span
  m="2095570">understand.</span> <span m="2098006">Yeah,</span> <span
  m="2098350">nobody</span> <span m="2098610">got</span> <span
  m="2098810">that.</span> <span m="2099610">And</span> <span
  m="2100530">there's</span> <span m="2100750">some</span> <span
  m="2101000">other</span> <span m="2101170">guy</span> <span
  m="2101420">whose</span> <span m="2102270">name</span> <span
  m="2102820">I</span> <span m="2102930">think</span> <span
  m="2103120">is</span> <span m="2103330">Even.</span> <span
  m="2105000">He</span> <span m="2105140">understood</span> <span
  m="2105750">the</span> <span m="2105890">problem</span> <span
  m="2106350">and</span> <span m="2106540">started</span> <span
  m="2107070">advertising</span> <span m="2107650">to</span> <span
  m="2107760">people</span> <span m="2108290">and</span> <span
  m="2108580">giving</span> <span m="2108810">lectures</span> <span
  m="2110272">on</span> <span m="2110730">Dinitz's</span> <span
  m="2111090">algorithm.</span> <span m="2112290">So</span> <span
  m="2112680">he</span> <span m="2113213">popularized</span> <span
  m="2113636">the</span> <span m="2114060">algorithm,</span> <span
  m="2114660">but</span> <span m="2114840">unfortunately</span> <span
  m="2115470">he</span> <span m="2115600">got</span> <span
  m="2115780">the</span> <span m="2115860">name</span> <span
  m="2116040">of</span> <span m="2116140">the</span> <span
  m="2116380">author</span> <span m="2116540">wrong.</span> <span
  m="2117900">So</span> <span m="2118110">that's</span> <span
  m="2118350">why</span> <span m="2118570">this</span> <span
  m="2118780">algorithm</span> <span m="2119220">is</span> <span
  m="2119360">henceforth</span> <span m="2119900">called</span> <span
  m="2120400">Dinic's</span> <span m="2121295">algorithm.</span> <span
  m="2122660">This</span> <span m="2122820">is</span> <span
  m="2123440">useful</span> <span m="2123760">to</span> <span
  m="2123840">know.</span> <span m="2124330">Why?</span> <span
  m="2125370">Because</span> <span m="2126240">you</span> <span
  m="2126330">can</span> <span m="2126460">tell</span> <span
  m="2126620">this</span> <span m="2126760">story</span> <span
  m="2127020">to</span> <span m="2127110">other</span> <span
  m="2127300">people</span> <span m="2127570">so</span> <span
  m="2127840">they</span> <span m="2127970">will</span> <span
  m="2128180">assume</span> <span m="2128610">that</span> <span
  m="2128790">you</span> <span m="2128890">know</span> <span
  m="2129090">a</span> <span m="2129110">lot</span> <span
  m="2129310">about</span> <span m="2129590">Dinic's</span> <span
  m="2129820">algorithm,</span> <span m="2130520">while in</span> <span
  m="2130860">fact,</span> <span m="2131620">you</span> <span
  m="2131740">probably</span> <span m="2132100">don't.</span> <span
  m="2132460">And</span> <span m="2132600">that's</span> <span
  m="2132770">exactly</span> <span m="2133210">what</span> <span
  m="2133340">I'm</span> <span m="2133450">doing</span> <span
  m="2133670">here.</span> <span m="2137780">OK.</span></p><p><span
  m="2142460">Now</span> <span m="2142780">let's</span> <span
  m="2142980">look</span> <span m="2143140">at</span> <span
  m="2143270">one</span> <span m="2143470">application.</span> <span
  m="2150690">Bipartite</span> <span m="2153093">matching.</span> <span
  m="2158370">OK.</span> <span m="2158640">So</span> <span
  m="2158760">the</span> <span m="2158860">problem</span> <span
  m="2159260">is</span> <span m="2159450">that</span> <span
  m="2159880">we</span> <span m="2160200">have</span> <span
  m="2161880">several</span> <span m="2162250">person</span> <span
  m="2164740">and</span> <span m="2165130">several</span> <span
  m="2165580">tasks.</span> <span m="2167790">And</span> <span m="2167890">let
  me</span> <span m="2167950">get</span> <span m="2168210">rid of</span> <span
  m="2168280">one</span> <span m="2168480">person, because</span> <span
  m="2168870">I</span> <span m="2168970">don't</span> <span
  m="2169080">want</span> <span m="2169190">to</span> <span
  m="2169240">draw</span> <span m="2169400">that</span> <span
  m="2169850">many</span> <span m="2170460">stuff.</span> <span
  m="2171440">So</span> <span m="2171890">we</span> <span
  m="2172090">have</span> <span m="2172280">a</span> <span
  m="2172510">graph</span> <span m="2172720">like</span> <span
  m="2173100">that.</span> <span m="2175350">And</span> <span
  m="2175670">each</span> <span m="2176020">edge--</span> <span
  m="2178030">if</span> <span m="2178180">there</span> <span
  m="2178330">is</span> <span m="2178410">an edge,</span> <span
  m="2178810">that</span> <span m="2179210">means</span> <span
  m="2179610">this</span> <span m="2179880">person</span> <span
  m="2180590">is</span> <span m="2180790">capable</span> <span
  m="2181290">of</span> <span m="2181510">performing</span> <span
  m="2181970">that</span> <span m="2182210">task.</span> <span
  m="2186030">And</span> <span m="2186210">the</span> <span
  m="2186300">problem</span> <span m="2186750">is</span> <span
  m="2186990">that--</span> <span m="2188010">find the</span> <span
  m="2188480">matching,</span> <span m="2189240">which</span> <span
  m="2189310">means</span> <span m="2189520">the</span> <span
  m="2189650">assignment</span> <span m="2190710">from</span> <span
  m="2191840">people</span> <span m="2192270">to</span> <span
  m="2192800">tasks,</span> <span m="2193660">such</span> <span
  m="2193980">that</span> <span m="2194260">we</span> <span
  m="2194540">get</span> <span m="2195070">as</span> <span
  m="2195240">many</span> <span m="2195580">tasks</span> <span
  m="2195950">done</span> <span m="2196320">as</span> <span
  m="2196510">possible.</span> <span m="2197852">OK?</span> <span
  m="2198330">So</span> <span m="2198600">one</span> <span
  m="2198820">person</span> <span m="2199180">can</span> <span
  m="2199310">only</span> <span m="2199550">do</span> <span
  m="2199680">one</span> <span m="2199850">task,</span> <span
  m="2200130">and</span> <span m="2200410">one</span> <span
  m="2200600">task</span> <span m="2200910">only</span> <span
  m="2201120">needs</span> <span m="2201320">one</span> <span
  m="2201490">person.</span> <span m="2202720">So</span> <span
  m="2202830">here</span> <span m="2203100">you</span> <span
  m="2203220">can</span> <span m="2203370">see</span> <span m="2203560">a</span>
  <span m="2203630">bad</span> <span m="2204510">matching,</span> <span
  m="2205190">which</span> <span m="2205310">is</span> <span
  m="2205560">I</span> <span m="2205690">assign</span> <span
  m="2206570">this</span> <span m="2206980">first</span> <span
  m="2207370">guy</span> <span m="2208230">to</span> <span
  m="2208780">task</span> <span m="2209130">one,</span> <span
  m="2210100">then</span> <span m="2210440">no</span> <span
  m="2210840">one</span> <span m="2211050">can</span> <span
  m="2211220">do</span> <span m="2211410">task</span> <span
  m="2211700">two.</span> <span m="2214260">So</span> <span
  m="2215190">if</span> <span m="2215300">I'm</span> <span
  m="2215440">smarter,</span> <span m="2215970">I'll</span> <span
  m="2216330">assign</span> <span m="2216770">one</span> <span
  m="2216950">of</span> <span m="2217050">these</span> <span
  m="2217270">guys</span> <span m="2217540">to</span> <span
  m="2217670">that</span> <span m="2217880">task</span> <span
  m="2218210">and</span> <span m="2218370">have</span> <span
  m="2218580">this</span> <span m="2219810">person</span> <span
  m="2220280">handle</span> <span m="2220840">the</span> <span
  m="2221030">other</span> <span m="2221120">task.</span> <span
  m="2221790">Is</span> <span m="2221910">the</span> <span
  m="2221990">problem</span> <span m="2222240">clear?</span></p><p><span
  m="2226040">So</span> <span m="2226640">this</span> <span
  m="2226890">is</span> <span m="2227030">called</span> <span
  m="2227350">bipartite</span> <span m="2227910">graph,</span> <span
  m="2228950">because--</span> <span m="2230010">well,</span> <span
  m="2230610">which</span> <span m="2230820">means</span> <span
  m="2231120">you</span> <span m="2231330">can</span> <span
  m="2231530">partition</span> <span m="2231950">a</span> <span
  m="2232000">graph</span> <span m="2232280">into</span> <span
  m="2232550">two</span> <span m="2232690">parts,</span> <span
  m="2233540">and</span> <span m="2233800">within</span> <span
  m="2234150">each</span> <span m="2234390">part,</span> <span
  m="2234910">there's</span> <span m="2235210">no</span> <span
  m="2235400">edge</span> <span m="2235730">connecting</span> <span
  m="2236340">any</span> <span m="2236540">pair</span> <span
  m="2236910">of</span> <span m="2237110">vertices.</span> <span
  m="2238470">And</span> <span m="2239230">you</span> <span
  m="2239380">can</span> <span m="2239560">also</span> <span
  m="2239930">define</span> <span m="2240480">this</span> <span
  m="2241220">problem</span> <span m="2241660">for a</span> <span
  m="2241900">general</span> <span m="2242290">graph.</span> <span
  m="2247650">The</span> <span m="2247950">goal is</span> <span
  m="2248390">the</span> <span m="2248450">same.</span> <span
  m="2249300">Find</span> <span m="2250070">a</span> <span
  m="2250130">subset</span> <span m="2250550">of</span> <span
  m="2250650">edges</span> <span m="2256530">such</span> <span
  m="2256890">that</span> <span m="2257250">no</span> <span
  m="2257590">two</span> <span m="2257980">edges</span> <span
  m="2258700">are</span> <span m="2258870">connected</span> <span
  m="2259250">to</span> <span m="2259340">the</span> <span
  m="2259460">same</span> <span m="2261690">vertex.</span> <span
  m="2264180">But</span> <span m="2264310">we</span> <span
  m="2264420">are</span> <span m="2264490">going</span> <span
  m="2264670">to</span> <span m="2264770">look</span> <span
  m="2264940">at</span> <span m="2267080">bipartite</span> <span
  m="2268620">graph.</span> <span m="2269340">And</span> <span
  m="2269740">we</span> <span m="2269900">claim</span> <span
  m="2270820">in</span> <span m="2270990">bipartite</span> <span
  m="2271530">graph,</span> <span m="2271950">this</span> <span
  m="2272160">can</span> <span m="2272360">be</span> <span
  m="2272500">solved</span> <span m="2272990">using</span> <span
  m="2273355">max</span> <span m="2273720">flow.</span> <span
  m="2277838">OK.</span> <span m="2278290">I'll</span> <span
  m="2278430">give</span> <span m="2278590">you</span> <span
  m="2279630">one</span> <span m="2279760">minute</span> <span
  m="2280070">to</span> <span m="2280450">think</span> <span
  m="2280620">about</span> <span m="2280800">that,</span> <span
  m="2281090">how</span> <span m="2281240">to</span> <span
  m="2281970">transform</span> <span m="2282640">that</span> <span
  m="2282860">problem</span> <span m="2283590">to</span> <span
  m="2283790">a</span> <span m="2283860">max</span> <span
  m="2284120">flow</span> <span m="2284380">problem.</span> <span
  m="2341210">Any</span> <span m="2341420">ideas?</span></p><p><span
  m="2392070">OK.</span> <span m="2392410">A</span> <span
  m="2392490">hint.</span> <span m="2393770">I</span> <span
  m="2393940">will</span> <span m="2394150">add</span> <span
  m="2394290">the</span> <span m="2394440">source</span> <span
  m="2394700">here,</span> <span m="2395200">and</span> <span
  m="2395370">the</span> <span m="2395420">sink</span> <span
  m="2395670">there,</span> <span m="2399400">and</span> <span m="2399720">I'll
  have</span> <span m="2399870">created</span> <span m="2400210">these</span>
  <span m="2400510">edges.</span> <span m="2405572">OK.</span> <span
  m="2406070">How</span> <span m="2406710">do</span> <span m="2406870">I</span>
  <span m="2407090">restrict</span> <span m="2407520">the</span> <span
  m="2407620">capacity</span> <span m="2407905">of</span> <span
  m="2408190">all</span> <span m="2408290">the</span> <span
  m="2408560">edges</span> <span m="2408830">such</span> <span
  m="2409240">that</span> <span m="2409830">I</span> <span
  m="2409920">can</span> <span m="2410100">guarantee</span> <span
  m="2415690">no</span> <span m="2415850">person</span> <span
  m="2416100">is</span> <span m="2416220">taking</span> <span
  m="2416620">two</span> <span m="2416770">tasks,</span> <span
  m="2417120">and</span> <span m="2417280">no</span> <span
  m="2417410">task</span> <span m="2417710">is</span> <span
  m="2417850">assigned</span> <span m="2418240">to</span> <span
  m="2418340">two</span> <span m="2418500">people?</span></p><p><span
  m="2426880">AUDIENCE: Make all of them</span> <span m="2427375">weight
  1.</span></p><p><span m="2429360">PROFESSOR: Make</span> <span m="2429560">all
  of</span> <span m="2429790">them</span> <span m="2429970">weight</span> <span
  m="2430160">1.</span> <span m="2432298">OK. You're right.</span> <span
  m="2432780">We</span> <span m="2432950">do</span> <span
  m="2433100">that--</span> <span m="2433610">1,</span> <span m="2433970">1,
  1,</span> <span m="2434914">1,</span> <span m="2435386">1,</span> <span
  m="2435860">and</span> <span m="2436310">everything</span> <span
  m="2436640">here</span> <span m="2436920">is</span> <span
  m="2437020">weight</span> <span m="2437210">1,</span> <span
  m="2438190">then</span> <span m="2439800">that's</span> <span
  m="2440095">definitely</span> <span m="2440390">correct.</span> <span
  m="2440910">What's</span> <span m="2441080">your</span> <span
  m="2441190">name?</span></p><p><span m="2442190">AUDIENCE:
  Calvin.</span></p><p><span m="2442630">PROFESSOR: Calvin?</span> <span
  m="2443640">OK.</span> <span m="2446200">If</span> <span m="2446380">we</span>
  <span m="2446500">do</span> <span m="2446630">that,</span> <span
  m="2447280">then,</span> <span m="2448310">well,</span> <span
  m="2448500">because</span> <span m="2448850">each</span> <span
  m="2449170">person</span> <span m="2449580">only</span> <span
  m="2449810">has</span> <span m="2449980">one</span> <span
  m="2450200">incoming</span> <span m="2450590">edge--</span> <span
  m="2451800">oh,</span> <span m="2452215">sorry,</span> <span
  m="2452630">maybe</span> <span m="2453650">I</span> <span
  m="2454080">should</span> <span m="2454280">have</span> <span
  m="2454600">drawn</span> <span m="2454830">the</span> <span
  m="2455318">arrows</span> <span m="2455806">here.</span> <span
  m="2459230">Each</span> <span m="2459390">person</span> <span
  m="2459650">only</span> <span m="2459850">has</span> <span
  m="2460020">one</span> <span m="2460300">incoming</span> <span
  m="2460590">edge,</span> <span m="2460920">so</span> <span
  m="2461620">it</span> <span m="2461810">cannot</span> <span
  m="2462810">take</span> <span m="2463270">care</span> <span
  m="2463460">of</span> <span m="2463570">two</span> <span
  m="2463770">tasks</span> <span m="2464300">at</span> <span
  m="2464400">the</span> <span m="2464460">same</span> <span
  m="2464640">time.</span> <span m="2465290">Right?</span> <span
  m="2466050">Same</span> <span m="2466190">thing</span> <span
  m="2466530">for</span> <span m="2467620">each</span> <span
  m="2467840">task.</span> <span m="2468890">It</span> <span
  m="2469210">only</span> <span m="2469370">has</span> <span
  m="2469570">one</span> <span m="2469970">outgoing</span> <span
  m="2470230">edge,</span> <span m="2471250">so</span> <span
  m="2471410">it</span> <span m="2471570">cannot</span> <span
  m="2471860">be</span> <span m="2472080">taken</span> <span
  m="2472320">care</span> <span m="2472520">of</span> <span
  m="2472640">by</span> <span m="2472950">multiple</span> <span
  m="2473280">people.</span></p><p><span m="2478720">OK. So</span> <span
  m="2478970">if</span> <span m="2479170">we</span> <span
  m="2479400">find--</span> <span m="2479730">if</span> <span
  m="2479930">the</span> <span m="2480040">max flow</span> <span
  m="2481810">is</span> <span m="2481990">k,</span> <span
  m="2484160">that</span> <span m="2484420">means</span> <span
  m="2484990">we</span> <span m="2485250">can</span> <span
  m="2485540">find</span> <span m="2492250">the</span> <span
  m="2492370">max</span> <span m="2492670">matching</span> <span
  m="2493670">is</span> <span m="2493840">also</span> <span
  m="2494100">k.</span> <span m="2494740">We</span> <span m="2494920">can</span>
  <span m="2495160">get</span> <span m="2495840">k</span> <span
  m="2496260">tasks</span> <span m="2496880">done.</span> <span
  m="2498390">It's</span> <span m="2498550">very</span> <span
  m="2498760">easy</span> <span m="2498930">to</span> <span
  m="2499060">see</span> <span m="2499320">because</span> <span
  m="2499690">we</span> <span m="2499830">can</span> <span
  m="2500450">have</span> <span m="2500600">a</span> <span
  m="2500680">cut</span> <span m="2501030">here,</span> <span
  m="2502990">and</span> <span m="2503650">if</span> <span
  m="2503800">the</span> <span m="2503870">max</span> <span
  m="2504160">flow</span> <span m="2504330">is</span> <span
  m="2504520">k,</span> <span m="2504990">that</span> <span
  m="2505420">clearly</span> <span m="2506620">k tasks</span> <span
  m="2507580">are</span> <span m="2507790">taken</span> <span
  m="2508050">care</span> <span m="2508270">of.</span> <span
  m="2513562">OK.</span> <span m="2514510">Any</span> <span
  m="2514680">questions</span> <span m="2514920">about</span> <span
  m="2515100">that?</span></p><p><span m="2519755">AUDIENCE: So,</span> <span
  m="2520250">the question is</span> <span m="2520745">can we do</span> <span
  m="2521240">all the</span> <span m="2521735">assignment</span> <span
  m="2522230">[INAUDIBLE]?</span></p><p><span m="2524210">PROFESSOR: Find</span>
  <span m="2524670">an</span> <span m="2525020">assignment</span> <span
  m="2525620">from</span> <span m="2526510">people</span> <span
  m="2526780">to</span> <span m="2526920">tasks</span> <span
  m="2527390">to</span> <span m="2527540">get</span> <span m="2528330">as</span>
  <span m="2528480">many</span> <span m="2528820">tasks done</span> <span
  m="2529110">as</span> <span m="2529400">possible.</span> <span
  m="2529830">So</span> <span m="2530010">how</span> <span
  m="2530140">many</span> <span m="2530400">tasks</span> <span
  m="2531300">can</span> <span m="2531450">we</span> <span
  m="2533290">handle?</span> <span m="2537840">OK.</span> <span
  m="2538120">So</span> <span m="2538690">I'm</span> <span
  m="2538870">doing</span> <span m="2539190">a</span> <span
  m="2540390">different</span> <span m="2541260">topic</span> <span
  m="2541880">from</span> <span m="2542090">the</span> <span
  m="2542310">recitation</span> <span m="2542630">notes.</span> <span
  m="2543310">In the</span> <span m="2543450">recitation</span> <span
  m="2543960">notes,</span> <span m="2544630">we</span> <span
  m="2544910">are</span> <span m="2545880">considering</span> <span
  m="2547520">another</span> <span m="2547830">problem</span> <span
  m="2549030">called</span> <span m="2549830">bipartite</span> <span
  m="2550810">cover,</span> <span m="2552130">which</span> <span
  m="2552410">is</span> <span m="2552710">exactly</span> <span
  m="2553210">the</span> <span m="2553560">same</span> <span
  m="2553790">thing</span> <span m="2554340">as</span> <span
  m="2554620">that.</span></p><p><span m="2558790">So</span> <span
  m="2559180">cover,</span> <span m="2560000">also,</span> <span
  m="2560705">bipartite</span> <span m="2560960">graph,</span> <span
  m="2561830">is</span> <span m="2561990">defined</span> <span
  m="2562500">too</span> <span m="2562850">as,</span> <span
  m="2565910">let's</span> <span m="2566210">find</span> <span
  m="2566580">several</span> <span m="2567960">vertices</span> <span
  m="2568740">in</span> <span m="2568910">this</span> <span
  m="2569120">graph</span> <span m="2570500">such</span> <span
  m="2570910">that</span> <span m="2571820">each</span> <span
  m="2572160">node,</span> <span m="2574410">at</span> <span
  m="2574640">least--</span> <span m="2575390">OK,</span> <span
  m="2576060">let</span> <span m="2576180">me</span> <span
  m="2576400">color</span> <span m="2577500">several</span> <span
  m="2578490">nodes</span> <span m="2578930">in</span> <span
  m="2579040">this</span> <span m="2579200">graph--</span> <span
  m="2579580">such</span> <span m="2580140">that</span> <span
  m="2580390">each</span> <span m="2581290">edge</span> <span
  m="2583210">is</span> <span m="2583410">connected</span> <span
  m="2583790">to</span> <span m="2584060">at</span> <span
  m="2584240">least</span> <span m="2584430">one</span> <span
  m="2584520">dark</span> <span m="2584720">node.</span> <span
  m="2587900">OK.</span> <span m="2588390">And</span> <span
  m="2588760">this,</span> <span m="2589300">the</span> <span
  m="2589490">nodes</span> <span m="2589720">I</span> <span
  m="2589880">colored,</span> <span m="2590050">is</span> <span
  m="2590210">called</span> <span m="2590350">a</span> <span
  m="2590620">cover.</span> <span m="2591210">I</span> <span
  m="2591340">want</span> <span m="2591520">to</span> <span
  m="2591600">find</span> <span m="2591830">a</span> <span
  m="2591880">minimum</span> <span m="2592450">cover.</span> <span
  m="2594750">You</span> <span m="2595145">can</span> <span
  m="2595540">of</span> <span m="2595670">course</span> <span
  m="2596300">cover</span> <span m="2596580">all</span> <span
  m="2596730">the</span> <span m="2596820">nodes,</span> <span
  m="2597550">that</span> <span m="2597880">trivially</span> <span
  m="2598260">holds,</span> <span m="2599070">but</span> <span
  m="2599160">we</span> <span m="2599260">are</span> <span
  m="2599310">looking</span> <span m="2599530">for</span> <span m="2599620">the
  minimum</span> <span m="2600030">cover.</span> <span m="2600850">And</span>
  <span m="2601300">the</span> <span m="2601410">claim</span> <span
  m="2601700">is</span> <span m="2601860">that</span> <span m="2604700">min
  cover</span> <span m="2607420">is</span> <span m="2607600">k</span> <span
  m="2608390">if</span> <span m="2608600">and</span> <span m="2608780">only
  if</span> <span m="2610390">max flow--</span> <span m="2612540">sorry,</span>
  <span m="2614092">max</span> <span m="2615040">matching--</span> <span
  m="2620390">is</span> <span m="2620870">k.</span></p><p><span m="2623270">Why
  is</span> <span m="2623530">that?</span> <span m="2624610">Because</span>
  <span m="2626000">in</span> <span m="2626140">that</span> <span
  m="2626360">matching--</span> <span m="2629450">if</span> <span
  m="2629600">we</span> <span m="2629740">have</span> <span m="2629930">a</span>
  <span m="2630000">matching,</span> <span m="2630680">then</span> <span
  m="2631140">we</span> <span m="2631340">have</span> <span m="2631660">a</span>
  <span m="2632040">set of</span> <span m="2633880">disjointed</span> <span
  m="2634510">edges,</span> <span m="2635080">right?</span> <span
  m="2635713">No</span> <span m="2636106">two</span> <span
  m="2636500">edges</span> <span m="2636860">are</span> <span
  m="2636940">connected</span> <span m="2637350">to</span> <span
  m="2637440">the</span> <span m="2637530">same</span> <span
  m="2637770">node.</span> <span m="2639040">So</span> <span
  m="2639500">if</span> <span m="2639650">we</span> <span
  m="2639800">want</span> <span m="2640010">to</span> <span
  m="2640170">cover</span> <span m="2641340">these</span> <span
  m="2641600">edges,</span> <span m="2642460">we</span> <span
  m="2642610">at</span> <span m="2642820">least</span> <span
  m="2643060">have</span> <span m="2643300">to</span> <span
  m="2643640">add</span> <span m="2644330">one of</span> <span
  m="2644440">these</span> <span m="2644750">guys--</span> <span
  m="2647230">color</span> <span m="2647570">one</span> <span
  m="2647750">of</span> <span m="2647860">these</span> <span
  m="2648090">two,</span> <span m="2648730">and</span> <span
  m="2648880">one</span> <span m="2649070">of</span> <span
  m="2649190">these</span> <span m="2649380">two.</span> <span
  m="2650070">Right?</span> <span m="2650750">So</span> <span
  m="2650870">if</span> <span m="2651040">we</span> <span
  m="2651160">have</span> <span m="2651350">k</span> <span
  m="2652020">matching</span> <span m="2652440">edges,</span> <span
  m="2654150">then</span> <span m="2654370">we</span> <span
  m="2654490">at</span> <span m="2654660">least</span> <span
  m="2654870">need</span> <span m="2655100">k</span> <span
  m="2655400">nodes</span> <span m="2656280">to</span> <span
  m="2656690">cover</span> <span m="2656930">them.</span> <span
  m="2660280">For</span> <span m="2660400">example,</span> <span
  m="2660810">I</span> <span m="2660890">can</span> <span
  m="2661780">cover</span> <span m="2662000">them</span> <span
  m="2662430">like</span> <span m="2662610">that.</span> <span
  m="2668280">But</span> <span m="2668530">this</span> <span
  m="2668680">is</span> <span m="2668860">not</span> <span
  m="2669520">foolproof,</span> <span m="2670880">because</span> <span
  m="2671210">I</span> <span m="2671340">also</span> <span
  m="2671770">need</span> <span m="2671940">to</span> <span
  m="2672060">show</span> <span m="2672450">I</span> <span
  m="2672560">can</span> <span m="2672790">indeed</span> <span
  m="2673440">find</span> <span m="2673705">a</span> <span
  m="2673970">cover</span> <span m="2675710">that</span> <span
  m="2675880">is</span> <span m="2676040">k.</span> <span m="2685500">OK. Let
  me</span> <span m="2685830">think</span> <span m="2686070">about</span> <span
  m="2686320">whether</span> <span m="2686510">I</span> <span
  m="2686600">should</span> <span m="2688160">prove</span> <span
  m="2688420">that.</span> <span m="2694396">OK.</span> <span
  m="2694900">I'm</span> <span m="2695050">going</span> <span
  m="2695220">to</span> <span m="2695310">give</span> <span
  m="2695460">it</span> <span m="2695550">a</span> <span m="2695590">try.</span>
  <span m="2696850">If you</span> <span m="2697010">don't</span> <span
  m="2697120">get that,</span> <span m="2697240">that's</span> <span
  m="2697600">fine.</span></p><p><span m="2700365">AUDIENCE: Can</span> <span
  m="2700860">you</span> <span m="2701355">say again</span> <span
  m="2701850">what</span> <span m="2702345">cover is?</span></p><p><span
  m="2703340">PROFESSOR: OK.</span> <span m="2703530">Cover--</span></p><p><span
  m="2703950">AUDIENCE: [INAUDIBLE]?</span></p><p><span m="2705210">PROFESSOR:
  Cover</span> <span m="2705630">is</span> <span m="2705800">a</span> <span
  m="2706070">set</span> <span m="2706270">of</span> <span
  m="2706400">nodes</span> <span m="2707670">such</span> <span
  m="2707990">that</span> <span m="2708960">every</span> <span
  m="2709880">edge</span> <span m="2710330">in</span> <span
  m="2710400">the</span> <span m="2710500">graph</span> <span
  m="2711570">is</span> <span m="2711760">connected</span> <span
  m="2712180">to</span> <span m="2712590">at</span> <span
  m="2712780">least</span> <span m="2713490">one</span> <span
  m="2713720">of</span> <span m="2713840">the</span> <span
  m="2713930">nodes,</span> <span m="2715270">in</span> <span
  m="2715410">a</span> <span m="2715470">cover.</span> <span
  m="2716896">OK?</span> <span m="2717310">So</span> <span
  m="2717460">this</span> <span m="2717630">is</span> <span
  m="2717790">not</span> <span m="2717990">a</span> <span
  m="2718030">cover,</span> <span m="2718400">because</span> <span
  m="2718770">this</span> <span m="2718980">edge</span> <span
  m="2720130">is</span> <span m="2720270">not</span> <span
  m="2720470">covered.</span> <span m="2726090">So</span> <span
  m="2726120">in</span> <span m="2726280">this</span> <span
  m="2726490">case</span> <span m="2726710">I</span> <span
  m="2726770">probably</span> <span m="2727035">have</span> <span m="2727300">to
  add</span> <span m="2727560">that</span> <span m="2727890">as</span> <span
  m="2728220">well.</span> <span m="2729940">But</span> <span
  m="2730480">clearly</span> <span m="2730860">there's</span> <span
  m="2731120">a</span> <span m="2731180">better</span> <span
  m="2731430">cover,</span> <span m="2732220">even</span> <span
  m="2732580">a</span> <span m="2732860">smaller</span> <span
  m="2733270">cover,</span> <span m="2733570">which</span> <span
  m="2734020">is</span> <span m="2734440">those</span> <span
  m="2734680">two.</span> <span m="2736231">Right?</span> <span
  m="2736698">Yeah.</span></p><p><span m="2740440">So</span> <span
  m="2740660">how</span> <span m="2741050">are</span> <span
  m="2741180">we</span> <span m="2741280">going</span> <span
  m="2741540">to</span> <span m="2741920">transform</span> <span
  m="2742980">that</span> <span m="2743200">matching</span> <span
  m="2743560">to</span> <span m="2743700">cover?</span> <span
  m="2744420">So</span> <span m="2745270">let</span> <span m="2745370">me</span>
  <span m="2745620">first</span> <span m="2745920">give</span> <span
  m="2746080">a</span> <span m="2746150">matching</span> <span
  m="2746490">here.</span> <span m="2747400">One</span> <span
  m="2748160">max</span> <span m="2748440">matching</span> <span
  m="2749580">should</span> <span m="2749810">be</span> <span
  m="2750210">something</span> <span m="2750560">like</span> <span
  m="2750760">this.</span> <span m="2751950">I</span> <span
  m="2752210">have</span> <span m="2752470">this</span> <span
  m="2752650">edge</span> <span m="2753210">and</span> <span
  m="2754790">one</span> <span m="2755030">of</span> <span
  m="2755150">those</span> <span m="2755390">two.</span> <span
  m="2759640">That</span> <span m="2759780">is</span> <span m="2759900">a</span>
  <span m="2759950">matching.</span> <span m="2761340">Right?</span> <span
  m="2761940">That</span> <span m="2762080">is</span> <span m="2762210">a</span>
  <span m="2762965">max matching.</span></p><p><span m="2768510">No</span> <span
  m="2768650">questions</span> <span m="2768870">about</span> <span
  m="2769020">that?</span> <span m="2772810">Let me</span> <span m="2773200">get
  rid of</span> <span m="2773535">all</span> <span m="2773870">this.</span>
  <span m="2775460">One</span> <span m="2775680">way</span> <span
  m="2776010">to</span> <span m="2776420">transform</span> <span
  m="2776990">this</span> <span m="2777270">into</span> <span
  m="2777520">a</span> <span m="2777600">cover</span> <span
  m="2778120">is</span> <span m="2778330">that</span> <span m="2779870">I</span>
  <span m="2779990">will</span> <span m="2780360">first</span> <span
  m="2781530">color</span> <span m="2781920">these</span> <span
  m="2782110">two</span> <span m="2782220">guys.</span> <span
  m="2784230">I</span> <span m="2784495">colored</span> <span
  m="2784760">the</span> <span m="2785100">nodes</span> <span
  m="2785500">on</span> <span m="2785610">the</span> <span
  m="2785690">left</span> <span m="2786500">where</span> <span
  m="2786830">they</span> <span m="2787040">are</span> <span
  m="2787140">connected</span> <span m="2787500">to</span> <span
  m="2787640">a</span> <span m="2787700">matching</span> <span
  m="2787990">edge.</span> <span m="2790620">After</span> <span
  m="2790910">that,</span> <span m="2791300">I'm</span> <span
  m="2791440">going</span> <span m="2791680">to</span> <span
  m="2791830">start</span> <span m="2792140">from</span> <span
  m="2792370">this</span> <span m="2792580">one</span> <span
  m="2793330">and</span> <span m="2795330">jump</span> <span
  m="2795890">between</span> <span m="2796120">nodes,</span> <span
  m="2796900">taking</span> <span m="2797180">an</span> <span
  m="2797460">alternating</span> <span m="2798060">path.</span> <span
  m="2798790">Meaning</span> <span m="2799250">I'll</span> <span
  m="2799440">take</span> <span m="2799650">an</span> <span
  m="2800400">unmatched</span> <span m="2800760">edge,</span> <span
  m="2801850">and</span> <span m="2802020">then</span> <span
  m="2802190">take</span> <span m="2802400">a</span> <span
  m="2802870">matched</span> <span m="2803250">edge,</span> <span
  m="2804390">and</span> <span m="2804540">then</span> <span
  m="2804680">take</span> <span m="2804890">an</span> <span
  m="2805100">unmatched</span> <span m="2805270">edge</span> <span
  m="2805560">again,</span> <span m="2805900">but</span> <span
  m="2806050">there's</span> <span m="2806560">no</span> <span
  m="2806680">such</span> <span m="2806930">thing.</span></p><p><span
  m="2824880">OK.</span> <span m="2825410">And</span> <span
  m="2825810">if</span> <span m="2825910">I</span> <span m="2826020">take</span>
  <span m="2826300">this</span> <span m="2826570">jump,</span> <span
  m="2826860">I</span> <span m="2827220">will</span> <span
  m="2827320">swap</span> <span m="2827780">them,</span> <span
  m="2828440">make</span> <span m="2828730">that</span> <span
  m="2829410">dark.</span> <span m="2837884">OK.</span> <span
  m="2838370">This</span> <span m="2838530">graph</span> <span
  m="2838730">is</span> <span m="2838870">a little strange.</span> <span
  m="2846372">Ah,</span> <span m="2846870">OK.</span> <span
  m="2847530">Now</span> <span m="2847930">I</span> <span
  m="2848060">claim</span> <span m="2848560">this</span> <span
  m="2848730">is</span> <span m="2848870">a</span> <span
  m="2848960">cover.</span> <span m="2850460">Is</span> <span
  m="2850630">that?</span> <span m="2851570">Yeah, that</span> <span
  m="2852040">is</span> <span m="2852180">one, right?</span> <span
  m="2855490">And</span> <span m="2857000">if</span> <span
  m="2857380">there</span> <span m="2857630">is</span> <span
  m="2857730">another</span> <span m="2859500">unmatched</span> <span
  m="2859790">edge</span> <span m="2860810">going</span> <span
  m="2861080">out,</span> <span m="2861380">then</span> <span
  m="2861610">I'll</span> <span m="2861710">keep</span> <span
  m="2861930">taking</span> <span m="2862260">that</span> <span
  m="2863010">alternating</span> <span m="2863430">path.</span> <span
  m="2864160">But</span> <span m="2864350">I</span> <span
  m="2864400">have</span> <span m="2864560">to</span> <span
  m="2864690">stop,</span> <span m="2865040">because</span> <span
  m="2865330">there's</span> <span m="2865950">no</span> <span
  m="2866080">such</span> <span m="2866320">edge</span> <span
  m="2866500">anymore.</span></p><p><span m="2869090">How</span> <span
  m="2869260">can</span> <span m="2869420">I</span> <span
  m="2869640">say--</span> <span m="2869990">why</span> <span
  m="2870310">I</span> <span m="2870380">can</span> <span
  m="2870620">prove--</span> <span m="2871380">why</span> <span
  m="2871530">can</span> <span m="2871640">I</span> <span
  m="2871690">claim</span> <span m="2872000">this</span> <span
  m="2872170">is</span> <span m="2872330">a</span> <span
  m="2873530">cover?</span> <span m="2875370">So</span> <span
  m="2875570">clearly</span> <span m="2876250">if this</span> <span
  m="2876620">is</span> <span m="2876710">a</span> <span
  m="2876760">cover,</span> <span m="2877090">then</span> <span
  m="2877350">it's</span> <span m="2877450">a</span> <span
  m="2877550">cover</span> <span m="2877870">of</span> <span
  m="2878010">size</span> <span m="2878390">k,</span> <span
  m="2878650">right?</span> <span m="2878910">So</span> <span m="2879750">we
  have</span> <span m="2880040">proved</span> <span m="2880260">the</span> <span
  m="2880580">entire</span> <span m="2880750">thing.</span> <span
  m="2882150">Then</span> <span m="2882310">we're</span> <span
  m="2882490">going</span> <span m="2882680">to</span> <span
  m="2882790">consider</span> <span m="2883290">several</span> <span
  m="2883590">things</span> <span m="2883830">separately.</span></p><p><span
  m="2889280">So</span> <span m="2889480">I'm</span> <span
  m="2889910">going</span> <span m="2890100">to</span> <span
  m="2890220">first</span> <span m="2890530">claim</span> <span
  m="2891010">if</span> <span m="2891220">I</span> <span m="2891300">have</span>
  <span m="2891500">a</span> <span m="2891560">matched</span> <span
  m="2891980">edge,</span> <span m="2892970">then</span> <span
  m="2893110">it's</span> <span m="2893250">definitely</span> <span
  m="2893650">covered,</span> <span m="2895890">because</span> <span
  m="2897780">one</span> <span m="2898030">of</span> <span
  m="2898130">its</span> <span m="2898600">end</span> <span
  m="2898830">points</span> <span m="2899410">is</span> <span
  m="2899840">dark.</span> <span m="2900886">Right.</span> <span
  m="2901250">We</span> <span m="2901400">only</span> <span
  m="2901640">do</span> <span m="2901900">a</span> <span
  m="2902040">switching</span> <span m="2902710">between</span> <span
  m="2903300">dark</span> <span m="2903540">and</span> <span
  m="2903650">white</span> <span m="2906040">if</span> <span
  m="2906360">it's</span> <span m="2906610">a</span> <span
  m="2906980">matched</span> <span m="2907280">edge</span> <span
  m="2907560">itself.</span> <span m="2908420">Right.</span> <span
  m="2908870">So</span> <span m="2909450">I</span> <span m="2909590">only</span>
  <span m="2909830">need</span> <span m="2909970">to</span> <span
  m="2910100">show</span> <span m="2910530">that</span> <span
  m="2911250">this</span> <span m="2912060">thing</span> <span
  m="2912580">doesn't</span> <span m="2912850">happen.</span> <span
  m="2913930">There's an</span> <span m="2914210">edge</span> <span
  m="2915130">that's</span> <span m="2915360">unmatched,</span> <span
  m="2916020">and</span> <span m="2916540">two</span> <span
  m="2916720">of</span> <span m="2916860">its</span> <span
  m="2917020">endpoints</span> <span m="2918340">are</span> <span
  m="2918580">both</span> <span m="2918870">white.</span> <span
  m="2921770">OK.</span> <span m="2922090">I'm</span> <span
  m="2922270">going</span> <span m="2922480">to</span> <span
  m="2922590">first</span> <span m="2922910">claim</span> <span
  m="2925060">this</span> <span m="2925360">node</span> <span
  m="2925720">cannot</span> <span m="2926130">have a</span> <span
  m="2926460">matched</span> <span m="2926740">edge.</span> <span
  m="2928800">Because</span> <span m="2928980">if</span> <span
  m="2929100">it</span> <span m="2929210">does,</span> <span
  m="2929520">then</span> <span m="2929670">this</span> <span m="2929820">is
  an</span> <span m="2929960">alternating</span> <span m="2930250">path,</span>
  <span m="2931040">and</span> <span m="2931370">I'm</span> <span
  m="2931450">going</span> <span m="2931650">to</span> <span
  m="2932410">switch</span> <span m="2932760">this</span> <span
  m="2932920">too.</span> <span m="2935100">OK.</span> <span
  m="2935450">Make</span> <span m="2935630">sense?</span> <span
  m="2937870">OK.</span> <span m="2938160">So</span> <span
  m="2938360">this</span> <span m="2938640">doesn't</span> <span
  m="2938880">exist.</span> <span m="2941100">So it can only</span> <span
  m="2941530">have an</span> <span m="2941750">unmatched</span> <span
  m="2942190">edge.</span></p><p><span m="2943490">Now</span> <span
  m="2944040">what</span> <span m="2944260">can</span> <span
  m="2944410">I</span> <span m="2944490">say</span> <span
  m="2944720">about</span> <span m="2944990">this</span> <span
  m="2945190">node?</span> <span m="2946330">I</span> <span
  m="2946430">claim</span> <span m="2946880">this</span> <span
  m="2947110">node</span> <span m="2948120">needs</span> <span
  m="2948630">at</span> <span m="2948850">least</span> <span
  m="2949220">one</span> <span m="2949470">matched</span> <span
  m="2949820">edge,</span> <span m="2951780">because</span> <span
  m="2952000">if</span> <span m="2952090">it</span> <span
  m="2952230">doesn't,</span> <span m="2953455">right,</span> <span
  m="2953750">then</span> <span m="2953920">I</span> <span
  m="2954000">should</span> <span m="2954250">add</span> <span
  m="2954470">this</span> <span m="2954690">guy</span> <span
  m="2955100">into</span> <span m="2955350">my</span> <span
  m="2955470">matching.</span> <span m="2957890">It</span> <span
  m="2957970">doesn't</span> <span m="2958170">violate</span> <span
  m="2958540">any</span> <span m="2959010">constraint.</span> <span
  m="2960040">I</span> <span m="2960270">didn't</span> <span m="2960490">add
  that</span> <span m="2961020">because</span> <span m="2961770">there's</span>
  <span m="2962010">probably</span> <span m="2962600">a</span> <span
  m="2962740">matched</span> <span m="2963165">edge</span> <span
  m="2963940">connecting</span> <span m="2964350">to</span> <span
  m="2964450">this</span> <span m="2964650">guy.</span> <span
  m="2967080">Then</span> <span m="2967580">I'm</span> <span
  m="2967720">going</span> <span m="2967980">to--</span> <span
  m="2969020">so,</span> <span m="2969335">then</span> <span
  m="2969650">this</span> <span m="2969860">guy</span> <span
  m="2970030">has</span> <span m="2970240">to</span> <span m="2970330">be</span>
  <span m="2970650">dark,</span> <span m="2971070">because</span> <span
  m="2971350">this</span> <span m="2971510">one</span> <span
  m="2971700">is</span> <span m="2971830">not.</span> <span
  m="2973410">Then</span> <span m="2974250">how</span> <span
  m="2974400">did</span> <span m="2974590">this</span> <span
  m="2974740">one</span> <span m="2974920">become</span> <span
  m="2975210">dark?</span> <span m="2975510">It</span> <span m="2975650">must
  have</span> <span m="2975930">come</span> <span m="2976150">from</span> <span
  m="2976350">some</span> <span m="2976650">other</span> <span
  m="2976730">guy</span> <span m="2977210">on</span> <span
  m="2977320">the</span> <span m="2977410">left,</span> <span
  m="2977870">right?</span> <span m="2978020">So</span> <span
  m="2978120">there's</span> <span m="2978410">an</span> <span
  m="2978670">alternating</span> <span m="2978990">path</span> <span
  m="2979750">going</span> <span m="2979970">back and</span> <span
  m="2980310">forth.</span> <span m="2988840">Something</span> <span
  m="2989150">like</span> <span m="2989340">this.</span> <span
  m="2990620">There</span> <span m="2990760">is</span> <span
  m="2990860">an</span> <span m="2990920">alternating</span> <span
  m="2991460">path,</span> <span m="2992220">starting</span> <span
  m="2992610">from</span> <span m="2992830">left,</span> <span
  m="2994010">but</span> <span m="2994240">ends</span> <span
  m="2994640">here.</span> <span m="2997070">Because</span> <span
  m="2997390">we</span> <span m="2997580">showed</span> <span m="2998030">that
  this</span> <span m="2998290">guy</span> <span m="2998550">is</span> <span
  m="2998880">not</span> <span m="2999090">connecting</span> <span
  m="2999490">to</span> <span m="2999640">any</span> <span
  m="3000440">matched</span> <span m="3000740">edges.</span></p><p><span
  m="3002080">In</span> <span m="3002210">that</span> <span
  m="3002420">case,</span> <span m="3002940">what</span> <span
  m="3002980">I'm</span> <span m="3003070">going</span> <span
  m="3003260">to</span> <span m="3003350">do</span> <span m="3003640">is</span>
  <span m="3004120">match</span> <span m="3004420">this</span> <span
  m="3004470">edge,</span> <span m="3004640">match</span> <span
  m="3004940">this</span> <span m="3005240">edge,</span> <span
  m="3005420">match</span> <span m="3005600">this</span> <span
  m="3005940">edge,</span> <span m="3006350">then</span> <span
  m="3006770">unmatch</span> <span m="3007700">these</span> <span
  m="3007910">two</span> <span m="3008040">edges.</span> <span
  m="3009230">And</span> <span m="3009300">that's</span> <span
  m="3009530">a</span> <span m="3010470">larger</span> <span
  m="3011530">matching.</span> <span m="3013380">Because I</span> <span
  m="3013520">removed</span> <span m="3013870">the</span> <span
  m="3013970">two,</span> <span m="3014340">I</span> <span
  m="3014500">added</span> <span m="3014850">three.</span> <span
  m="3026400">That</span> <span m="3026650">means</span> <span
  m="3028026">a</span> <span m="3031020">max</span> <span
  m="3031310">matching</span> <span m="3031620">of</span> <span
  m="3031930">k</span> <span m="3033010">leads</span> <span
  m="3033290">to</span> <span m="3033580">a</span> <span
  m="3033850">minimum</span> <span m="3034360">cover</span> <span
  m="3035170">of</span> <span m="3035310">k</span> <span m="3035720">as</span>
  <span m="3035900">well,</span> <span m="3036680">which</span> <span
  m="3036770">also</span> <span m="3036960">means</span> <span
  m="3038010">max</span> <span m="3038380">flow</span> <span
  m="3038770">of</span> <span m="3038920">k</span> <span m="3039710">in</span>
  <span m="3039900">our</span> <span m="3040380">network</span> <span
  m="3040832">flow.</span></p><p><span m="3044450">So</span> <span
  m="3044600">this</span> <span m="3044830">part--</span> <span
  m="3045110">this</span> <span m="3045320">equivalence</span> <span
  m="3045810">is</span> <span m="3045940">not</span> <span
  m="3046090">required.</span> <span m="3050050">You</span> <span
  m="3050430">should</span> <span m="3050670">know</span> <span
  m="3052260">this</span> <span m="3052470">proof,</span> <span
  m="3053000">the</span> <span m="3053140">proof</span> <span
  m="3053400">of</span> <span m="3053500">Edmonds-Karp,</span> <span
  m="3054730">and</span> <span m="3054830">know</span> <span
  m="3055190">that</span> <span m="3055760">a</span> <span
  m="3055930">matching</span> <span m="3056370">and</span> <span
  m="3056740">cover</span> <span m="3057220">can</span> <span
  m="3057400">be</span> <span m="3057510">solved</span> <span
  m="3057900">by</span> <span m="3058560">network</span> <span
  m="3058890">flow,</span> <span m="3059850">and</span> <span
  m="3060000">that</span> <span m="3060510">Dinitz's</span> <span
  m="3060830">name</span> <span m="3061070">is</span> <span
  m="3061380">spelled</span> <span m="3061950">not</span> <span
  m="3062160">as</span> <span m="3062580">Dinic.</span> <span
  m="3067710">OK.</span> <span m="3068100">And</span> <span
  m="3068890">that's</span> <span m="3069180">everything</span> <span
  m="3069460">for</span> <span m="3069640">today.</span></p>
embedded_media:
  - uid: f7bd1e4f4243564f71d4715924662367
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 0CdxkgAjsDA
  - uid: fcbdf77767c61e1b74e0306364f76baa
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/0CdxkgAjsDA/default.jpg'
  - uid: 4a3657d09199cc7d8d0c09994db426a2
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 0CdxkgAjsDA
  - uid: a160ccbbcf9a20ab4fe1e83b1855afb9
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: 0CdxkgAjsDA.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-7-incremental-improvement-applications-of-network-flow-matching/0CdxkgAjsDA.srt
  - uid: 463e10f01b568ea52209a8ca180ccd2e
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: 0CdxkgAjsDA.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-7-incremental-improvement-applications-of-network-flow-matching/0CdxkgAjsDA.pdf
  - uid: 0e38a243dd61891a5ca7a9304f8736bd
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 8a2efe7b835a481cbe6cf8a24685ad99
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: fc97a488da078fe325c3c5e4d5507056
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: 5b6bda1979b7910275236c1d671fdc14
    parent_uid: faf5f000ed69bbf4396664e6819bcccd
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec07_300k.mp4'
type: courses
layout: video
---
