---
title: Microbial Evolution Experiments and Optimal Gene Circuit Design
uid: 86d262091449f6a469c9a0917f8fae8d
parent_uid: 2c19124a07b81891918cf65ff26fbc3c
technical_location: >-
  https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/microbial-evolution-experiments-and-optimal-gene-circuit-design
short_url: microbial-evolution-experiments-and-optimal-gene-circuit-design
inline_embed_id: 97345967microbialevolutionexperimentsandoptimalgenecircuitdesign88899287
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Prof. Jeff Gore discusses
  the Nature article &quot;Optimality and Evolutionary Tuning of the Expression
  Level of a Protein,&quot; with emphasis on the connection between theory,
  prediction, and experiment.</p> <p><strong>Instructor:</strong> Prof. Jeff
  Gore</p>
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
  <span m="10830">make</span> <span m="10940">a</span> <span
  m="10980">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13340">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21680">PROFESSOR:</span> <span m="21940">So</span> <span
  m="22090">today,</span> <span m="22740">our</span> <span m="23020">goal</span>
  <span m="23340">is</span> <span m="23520">to</span> <span
  m="23990">really</span> <span m="24280">go</span> <span
  m="24600">through</span> <span m="24970">this</span> <span
  m="25510">the</span> <span m="25680">paper</span> <span m="25910">that
  you</span> <span m="26140">read</span> <span m="26640">maybe</span> <span
  m="27080">last</span> <span m="27320">night</span> <span m="28240">by</span>
  <span m="28410">Dekel and</span> <span m="28890">Alon</span> <span
  m="29480">&quot;Optimality</span> <span m="30090">and</span> <span
  m="30170">Evolutionary</span> <span m="30680">Tuning</span> <span m="31130">of
  the</span> <span m="31240">Expression</span> <span m="31700">Level</span>
  <span m="31980">of a</span> <span m="32080">Protein.&quot;</span> <span
  m="32855">It</span> <span m="33130">was</span> <span
  m="33280">published</span> <span m="33900">in</span> <span
  m="34140"><i>Nature</i></span> <span m="34330">in</span> <span
  m="34450">2005.</span> <span m="35690">I</span> <span m="35780">think</span>
  <span m="35930">that</span> <span m="36070">it's</span> <span
  m="36660">a</span> <span m="36700">very</span> <span
  m="36990">interesting</span> <span m="37470">paper,</span> <span
  m="38470">exploring</span> <span m="39140">some</span> <span
  m="39340">kind</span> <span m="39510">of</span> <span m="39630">big</span>
  <span m="40130">general</span> <span m="40550">ideas.</span></p><p><span
  m="42060">I</span> <span m="42220">think</span> <span m="42390">it's</span>
  <span m="42570">also,</span> <span m="43480">in</span> <span
  m="43820">some</span> <span m="43990">ways,</span> <span
  m="44630">rather</span> <span m="46080">misleading.</span> <span
  m="46960">And</span> <span m="47510">we'll</span> <span m="47920">try</span>
  <span m="48080">to</span> <span m="48260">understand</span> <span
  m="48910">or</span> <span m="49120">discuss</span> <span m="49970">the</span>
  <span m="50030">ways</span> <span m="50280">in</span> <span
  m="50370">which</span> <span m="51720">the</span> <span
  m="52280">connections</span> <span m="52800">between</span> <span
  m="53150">experiment,</span> <span m="54630">theory,</span> <span
  m="55360">prediction,</span> <span m="56030">and</span> <span
  m="56140">so</span> <span m="56300">forth,</span> <span m="57760">how</span>
  <span m="57950">they</span> <span m="58060">all</span> <span
  m="58170">play</span> <span m="58400">out</span> <span m="58640">in</span>
  <span m="58730">the</span> <span m="58790">context</span> <span
  m="59320">of</span> <span m="59510">this</span> <span
  m="59700">problem.</span></p><p><span m="62190">Before</span> <span
  m="62500">we</span> <span m="62620">get</span> <span m="62910">going</span>
  <span m="63230">too</span> <span m="63380">much</span> <span
  m="63850">on</span> <span m="64010">the</span> <span m="64080">science,</span>
  <span m="64360">I</span> <span m="64400">just</span> <span
  m="64519">want</span> <span m="64670">to</span> <span m="64830">remind</span>
  <span m="65239">everyone</span> <span m="65650">that</span> <span
  m="66300">Andrew</span> <span m="66850">will</span> <span m="67020">not</span>
  <span m="67310">be</span> <span m="67410">having</span> <span
  m="67700">office</span> <span m="68030">hours</span> <span
  m="68470">today.</span> <span m="68790">He</span> <span m="68980">is</span>
  <span m="69200">off</span> <span m="69500">interviewing</span> <span
  m="70020">for</span> <span m="71510">MD,</span> <span m="71800">PhD</span>
  <span m="72250">programs</span> <span m="72640">right</span> <span
  m="72730">now.</span> <span m="73800">But</span> <span m="75030">if you</span>
  <span m="75230">had</span> <span m="75420">questions</span> <span
  m="75820">about</span> <span m="75920">the</span> <span
  m="75990">problems,</span> <span m="76370">I hope</span> <span
  m="76540">that</span> <span m="76640">you</span> <span m="76700">asked</span>
  <span m="76920">[? Sarab ?]</span> <span m="77880">last</span> <span
  m="78200">night.</span></p><p><span m="78770">You</span> <span
  m="78920">might</span> <span m="79200">be</span> <span m="79320">able</span>
  <span m="79520">to</span> <span m="80180">grab</span> <span
  m="80480">him</span> <span m="80660">after</span> <span m="81140">the</span>
  <span m="81390">lecture</span> <span m="81640">today,</span> <span
  m="83530">but</span> <span m="84200">yes.</span> <span m="85230">Any</span>
  <span m="85920">other</span> <span m="86020">questions</span> <span
  m="86490">about</span> <span m="87370">anything</span> <span
  m="87770">before</span> <span m="88020">we</span> <span m="88120">get</span>
  <span m="88230">going?</span> <span m="90895">No.</span></p><p><span
  m="93830">So I</span> <span m="93960">think</span> <span m="94130">that</span>
  <span m="94330">this</span> <span m="94830">paper</span> <span
  m="96210">in</span> <span m="96340">general,</span> <span m="96620">I</span>
  <span m="96680">guess,</span> <span m="97120">the</span> <span
  m="97190">lecture</span> <span m="97480">today</span> <span
  m="98190">is</span> <span m="98320">really</span> <span m="99800">a</span>
  <span m="99940">combination</span> <span m="100460">of</span> <span
  m="100540">trying</span> <span m="100930">to</span> <span
  m="101340">start</span> <span m="101760">thinking</span> <span
  m="102070">about</span> <span m="102900">maybe</span> <span
  m="103120">laboratory</span> <span m="103750">evolution</span> <span
  m="105040">or</span> <span m="105730">kind</span> <span m="105910">of</span>
  <span m="106010">population</span> <span m="106590">level</span> <span
  m="106850">phenomena</span> <span m="107300">in</span> <span
  m="107410">general,</span> <span m="108480">as</span> <span
  m="108700">well</span> <span m="109010">as</span> <span m="109890">this</span>
  <span m="110080">question</span> <span m="110520">of</span> <span
  m="111150">optimization</span> <span m="112090">in</span> <span
  m="112280">terms</span> <span m="112510">of</span> <span
  m="112640">protein</span> <span m="113000">expression.</span></p><p><span
  m="115630">So</span> <span m="117290">can</span> <span
  m="117380">somebody</span> <span m="117600">just</span> <span
  m="118080">maybe</span> <span m="119340">summarize</span> <span
  m="120870">the</span> <span m="121320">big</span> <span m="121590">idea</span>
  <span m="122120">of</span> <span m="122220">this</span> <span
  m="122370">paper?</span> <span m="130150">Yes,</span> <span
  m="130500">please.</span></p><p><span m="132394">AUDIENCE:</span> <span
  m="132872">Protein</span> <span m="133350">expression</span> <span
  m="133828">levels</span> <span m="135262">evolve</span> <span
  m="136218">to</span> <span m="138130">optimal</span> <span
  m="138608">values</span> <span m="139086">for</span> <span
  m="139564">cost-benefit</span> <span m="140520">questions.</span></p><p><span
  m="140998">PROFESSOR:</span> <span m="141480">Right,</span> <span
  m="141990">so</span> <span m="142110">that's</span> <span
  m="142560">the</span> <span m="142720">argument</span> <span
  m="143330">at</span> <span m="143440">least.</span> <span
  m="143920">And</span> <span m="144490">they</span> <span
  m="144600">have</span> <span m="144770">a</span> <span m="144830">very</span>
  <span m="145090">nice</span> <span m="145900">first</span> <span
  m="146470">sentence</span> <span m="146990">here.</span> <span
  m="148000">&quot;Different</span> <span m="148420">proteins</span> <span
  m="148940">have</span> <span m="149140">different</span> <span
  m="149500">expression</span> <span m="149900">levels.&quot;</span> <span
  m="151220">You</span> <span m="151290">know,</span> <span
  m="151440">it's</span> <span m="151600">hard</span> <span m="152040">to</span>
  <span m="152120">argue</span> <span m="152510">with</span> <span
  m="152590">that</span> <span m="152770">statement,</span> <span
  m="153540">nice,</span> <span m="154230">concise.</span> <span
  m="154660">But</span> <span m="155310">the</span> <span
  m="155430">question</span> <span m="155680">is,</span> <span
  m="155760">well,</span> <span m="156240">why?</span></p><p><span
  m="157600">And</span> <span m="157740">I'd</span> <span m="157890">say</span>
  <span m="158020">that</span> <span m="158580">there</span> <span
  m="158840">is</span> <span m="159970">a</span> <span m="160090">range,</span>
  <span m="160470">different</span> <span m="160880">philosophical</span> <span
  m="161870">opinions</span> <span m="163150">out</span> <span
  m="163560">in</span> <span m="163720">the</span> <span
  m="163820">world.</span> <span m="164910">I</span> <span
  m="165010">said</span> <span m="165240">that</span> <span
  m="166140">some</span> <span m="166600">group</span> <span
  m="167400">that</span> <span m="167620">is</span> <span m="167730">very</span>
  <span m="167890">much</span> <span m="168060">reflected</span> <span
  m="168470">in</span> <span m="168560">this</span> <span
  m="168780">study</span> <span m="169550">is</span> <span
  m="170260">trying</span> <span m="170650">to</span> <span
  m="170710">think</span> <span m="171230">about</span> <span
  m="171460">this</span> <span m="171610">in</span> <span m="171660">the</span>
  <span m="171720">context</span> <span m="172110">of</span> <span
  m="172220">optimization.</span></p><p><span m="174180">Well,</span> <span
  m="174470">maybe</span> <span m="175010">the</span> <span
  m="175140">reason</span> <span m="175610">that we</span> <span
  m="175740">see</span> <span m="176650">a</span> <span m="176750">given</span>
  <span m="177220">level of</span> <span m="177640">expression</span> <span
  m="177900">of</span> <span m="178160">some</span> <span
  m="178300">protein</span> <span m="178590">is</span> <span
  m="178690">because,</span> <span m="179800">at</span> <span
  m="179880">least</span> <span m="180350">over</span> <span
  m="180580">evolutionary</span> <span m="181190">time,</span> <span
  m="181780">in</span> <span m="181900">some</span> <span
  m="182110">ancestral</span> <span m="182440">environment that</span> <span
  m="182770">we</span> <span m="182880">don't</span> <span
  m="183070">know,</span> <span m="183620">but</span> <span
  m="183770">maybe</span> <span m="184600">it</span> <span
  m="184730">evolved</span> <span m="185790">to</span> <span
  m="185950">optimize</span> <span m="186440">some</span> <span
  m="186610">cost-benefit</span> <span m="188020">problem.</span></p><p><span
  m="190130">And</span> <span m="190230">then</span> <span m="190240">I'd</span>
  <span m="190290">say</span> <span m="190500">that</span> <span
  m="190780">there's</span> <span m="190990">another</span> <span
  m="191310">kind</span> <span m="191420">of</span> <span
  m="191490">general</span> <span m="191780">philosophical</span> <span
  m="192710">approach</span> <span m="193060">that</span> <span
  m="193160">tends</span> <span m="193410">to</span> <span m="193460">be</span>
  <span m="193560">a</span> <span m="193640">little</span> <span
  m="193960">bit</span> <span m="194140">more</span> <span
  m="195310">agnostic</span> <span m="196350">or</span> <span
  m="196540">just</span> <span m="196740">maybe</span> <span
  m="198430">more</span> <span m="198690">of</span> <span m="198760">a</span>
  <span m="198880">sense</span> <span m="199100">that</span> <span
  m="200180">certainly</span> <span m="200720">things</span> <span
  m="200970">could</span> <span m="201170">have</span> <span
  m="201270">evolved</span> <span m="202290">to</span> <span
  m="202590">optimize</span> <span m="202720">something.</span> <span
  m="203020">But</span> <span m="203530">we</span> <span m="203740">can</span>
  <span m="204070">never</span> <span m="204410">really</span> <span
  m="204720">know</span> <span m="205050">where</span> <span
  m="205180">they</span> <span m="205410">evolved</span> <span
  m="205620">in,</span> <span m="205880">so</span> <span m="206030">we</span>
  <span m="206610">shouldn't</span> <span m="207180">be</span> <span
  m="207540">going</span> <span m="207810">out</span> <span m="207890">on</span>
  <span m="207960">a</span> <span m="208050">limb</span> <span
  m="208300">on</span> <span m="208360">these</span> <span
  m="208510">things.</span></p><p><span m="208730">And</span> <span
  m="210020">given</span> <span m="210660">that</span> <span
  m="211070">this</span> <span m="211280">is</span> <span
  m="211430">philosophy,</span> <span m="212150">I</span> <span
  m="212230">will</span> <span m="212430">maybe</span> <span
  m="212730">not</span> <span m="213120">require</span> <span
  m="213660">that</span> <span m="213820">you</span> <span
  m="214380">agree</span> <span m="215000">with</span> <span
  m="215160">any</span> <span m="215400">particular</span> <span
  m="215750">standpoint.</span> <span m="216130">But</span> <span
  m="216230">I</span> <span m="216280">will</span> <span m="216490">say</span>
  <span m="216690">that</span> <span m="216830">it's</span> <span
  m="216980">at</span> <span m="217040">least</span> <span
  m="217670">worth</span> <span m="218090">thinking</span> <span
  m="218420">about</span> <span m="218620">the</span> <span
  m="218690">question</span> <span m="219070">and</span> <span
  m="219170">maybe</span> <span m="219440">you</span> <span
  m="219550">can</span> <span m="220070">do</span> <span
  m="220180">measurements</span> <span m="220730">to</span> <span
  m="221920">illuminate</span> <span m="222160">whether</span> <span
  m="223260">all</span> <span m="223400">these</span> <span
  m="223530">ideas</span> <span m="223860">might</span> <span
  m="224150">make</span> <span m="224340">sense.</span></p><p><span
  m="225390">And</span> <span m="226160">then</span> <span
  m="226300">we'll</span> <span m="226480">try</span> <span
  m="226910">to,</span> <span m="227370">over</span> <span m="227540">the</span>
  <span m="227600">next</span> <span m="228160">hour</span> <span
  m="228660">and</span> <span m="228740">a</span> <span m="228770">half,</span>
  <span m="229560">figure</span> <span m="229880">out</span> <span
  m="230140">to</span> <span m="230230">what</span> <span
  m="230360">degree</span> <span m="230880">this</span> <span
  m="231220">paper</span> <span m="231910">maybe</span> <span
  m="232580">should</span> <span m="232820">convince</span> <span
  m="233280">us</span> <span m="233660">of</span> <span m="234350">this</span>
  <span m="234610">optimization</span> <span m="235180">in</span> <span
  m="235230">the</span> <span m="235300">context</span> <span
  m="235740">of</span> <span m="236000">this</span> <span
  m="236210">particular</span> <span m="237690">protein.</span></p><p><span
  m="238640">Now,</span> <span m="239890">even</span> <span m="240170">if</span>
  <span m="240250">it's</span> <span m="240380">the</span> <span
  m="240460">case</span> <span m="240890">that</span> <span
  m="241070">somebody</span> <span m="241360">convinces</span> <span
  m="241720">you</span> <span m="242120">maybe</span> <span
  m="242450">that</span> <span m="244110">expression</span> <span
  m="244630">of</span> <span m="244750">the</span> <span m="244800">lac</span>
  <span m="245220">operon</span> <span m="245490">maybe</span> <span
  m="245730">does</span> <span m="246040">optimize</span> <span
  m="246750">some</span> <span m="246910">cost-benefit</span> <span
  m="247300">analysis.</span> <span m="247730">That</span> <span
  m="247870">does</span> <span m="248010">not</span> <span
  m="248620">prove</span> <span m="249250">that</span> <span
  m="249400">every</span> <span m="249730">protein</span> <span
  m="250860">optimize</span> <span m="251340">things.</span> <span
  m="251760">So</span> <span m="253590">don't</span> <span m="253770">get</span>
  <span m="253870">overwhelmed</span> <span m="254460">or</span> <span
  m="254820">underwhelmed</span> <span m="255310">or</span> <span
  m="255350">whatever</span> <span m="255640">it</span> <span
  m="255700">might</span> <span m="255860">be.</span></p><p><span
  m="257920">Let's</span> <span m="258260">just</span> <span
  m="258470">first</span> <span m="258790">make</span> <span
  m="258950">sure</span> <span m="259450">that</span> <span m="260300">we</span>
  <span m="260500">understand</span> <span m="260880">what</span> <span
  m="260950">we</span> <span m="261040">mean</span> <span m="261190">by</span>
  <span m="261290">costs</span> <span m="261760">and</span> <span
  m="261880">benefits</span> <span m="262320">in</span> <span
  m="262380">this</span> <span m="262530">case.</span> <span
  m="263960">Can</span> <span m="264150">somebody</span> <span
  m="266440">pick</span> <span m="266820">one</span> <span m="266980">of</span>
  <span m="267060">them?</span> <span m="275340">Now,</span> <span
  m="275630">what</span> <span m="276230">is</span> <span m="276370">a</span>
  <span m="276440">cost</span> <span m="276730">and</span> <span
  m="276810">benefit</span> <span m="277290">in</span> <span
  m="277360">the</span> <span m="277440">context</span> <span
  m="277860">of</span> <span m="278330">maybe</span> <span
  m="278530">this</span> <span m="278730">paper?</span> <span
  m="286290">Yes.</span></p><p><span m="286772">AUDIENCE:</span> <span
  m="287254">Producing</span> <span m="287736">protein</span> <span
  m="288700">requires</span> <span m="289182">some kind of</span> <span
  m="289664">resource.</span></p><p><span m="290146">PROFESSOR:</span> <span
  m="290650">Right,</span> <span m="291890">requires--</span></p><p><span
  m="292295">AUDIENCE:</span> <span m="292700">[INAUDIBLE]</span> <span
  m="293624">energy--</span></p><p><span m="294550">PROFESSOR:</span> <span
  m="294590">--requires</span> <span m="295130">resources</span> <span
  m="295910">of</span> <span m="296010">some</span> <span m="296300">sort</span>
  <span m="296620">or</span> <span m="296750">another</span> <span
  m="299350">to</span> <span m="299430">express</span> <span
  m="299800">these</span> <span m="299940">proteins.</span> <span
  m="304460">And</span> <span m="304990">this</span> <span m="305160">can</span>
  <span m="305280">manifest</span> <span m="305760">in</span> <span
  m="305820">many</span> <span m="306040">different</span> <span
  m="306260">ways.</span> <span m="307780">But</span> <span
  m="307980">certainly,</span> <span m="310290">if</span> <span
  m="310510">you</span> <span m="310670">were</span> <span m="310770">not</span>
  <span m="311000">making</span> <span m="311220">these</span> <span
  m="311420">proteins,</span> <span m="311790">you</span> <span m="311870">could
  have</span> <span m="312000">been</span> <span m="312110">making</span> <span
  m="312340">some</span> <span m="312520">other</span> <span
  m="312650">proteins.</span> <span m="313300">And</span> <span
  m="313320">so</span> <span m="313740">if</span> <span m="314100">these</span>
  <span m="314240">proteins</span> <span m="314530">are</span> <span
  m="314570">not</span> <span m="314710">helping</span> <span
  m="314940">you,</span> <span m="315040">then</span> <span
  m="315110">maybe</span> <span m="315330">something</span> <span
  m="315560">else</span> <span m="315690">would</span> <span
  m="315860">have.</span></p><p><span m="316640">But</span> <span
  m="317100">they're</span> <span m="317430">are</span> <span
  m="317510">many</span> <span m="317690">different</span> <span
  m="317890">ways</span> <span m="318100">of</span> <span
  m="318150">looking</span> <span m="318380">at</span> <span
  m="318460">this.</span> <span m="320190">But</span> <span
  m="320440">there</span> <span m="320610">is</span> <span
  m="320920">some</span> <span m="321160">finite</span> <span
  m="321400">number</span> <span m="321550">of</span> <span
  m="321620">things</span> <span m="321930">that</span> <span
  m="322110">the</span> <span m="322180">cell</span> <span m="322460">can</span>
  <span m="322590">do.</span> <span m="325550">And</span> <span
  m="325680">the</span> <span m="325740">benefits,</span> <span
  m="326140">of</span> <span m="326220">course,</span> <span
  m="326680">in</span> <span m="327200">the</span> <span
  m="327270">case--</span> <span m="327580">and</span> <span
  m="327740">this</span> <span m="328250">is</span> <span m="329460">in</span>
  <span m="329590">particular</span> <span m="329770">in the</span> <span
  m="329890">case</span> <span m="330110">of</span> <span m="330200">a</span>
  <span m="330240">lac</span> <span m="330700">operon,</span> <span
  m="333140">what</span> <span m="334750">does</span> <span
  m="335860">this</span> <span m="336040">network</span> <span
  m="336320">allow</span> <span m="336490">us</span> <span m="336610">to</span>
  <span m="336680">do?</span> <span m="338930">Yeah.</span></p><p><span
  m="339425">AUDIENCE:</span> <span m="339920">You get to</span> <span
  m="340415">consume</span> <span m="340910">the energy</span> <span
  m="341405">of</span> <span m="341900">lactose.</span></p><p><span
  m="342400">PROFESSOR:</span> <span m="342710">Yes.</span></p><p><span
  m="343076">AUDIENCE:</span> <span m="343442">Lets you go
  faster.</span></p><p><span m="343810">PROFESSOR: That's</span> <span
  m="343930">right,</span> <span m="344110">you</span> <span
  m="344170">get</span> <span m="344330">to</span> <span
  m="344550">consume</span> <span m="344970">lactose</span> <span
  m="348510">in</span> <span m="348580">this</span> <span
  m="348710">case.</span> <span m="351720">Now,</span> <span
  m="351860">we've</span> <span m="352050">already</span> <span
  m="352270">spent</span> <span m="352690">some</span> <span
  m="352890">time</span> <span m="353310">thinking</span> <span
  m="353780">or</span> <span m="353880">discussing</span> <span
  m="355190">the</span> <span m="355410">lac</span> <span
  m="355700">operon.</span></p><p><span m="357230">What</span> <span
  m="357530">were</span> <span m="357680">the</span> <span m="357900">two</span>
  <span m="358350">key</span> <span m="359170">components</span> <span
  m="359620">in</span> <span m="359710">here</span> <span m="366660">in</span>
  <span m="366730">the</span> <span m="366820">lac</span> <span
  m="367020">operon?</span> <span m="368180">If</span> <span m="368350">you were
  a</span> <span m="368840">cell</span> <span m="369290">and</span> <span
  m="369380">you</span> <span m="369510">wanted</span> <span
  m="369870">to</span> <span m="370750">eat</span> <span
  m="371040">lactose,</span> <span m="371540">what</span> <span
  m="371690">would</span> <span m="371810">you</span> <span
  m="371940">need</span> <span m="372100">to</span> <span m="372190">do?</span>
  <span m="385550">I'm</span> <span m="385730">picking</span> <span
  m="385990">somebody</span> <span m="386380">to--</span> <span
  m="386500">yes,</span> <span m="386770">please.</span></p><p><span
  m="387581">AUDIENCE:</span> <span m="388032">It's a</span> <span
  m="388483">gene</span> <span m="388934">that you should</span> <span
  m="389385">express,</span> <span m="389610">the</span> <span
  m="389836">lac</span> <span m="390738">gene?</span></p><p><span
  m="391189">PROFESSOR:</span> <span m="391640">OK,</span> <span
  m="391900">right.</span> <span m="392090">So</span> <span
  m="392270">the</span> <span m="392400">lac</span> <span
  m="392650">genes.</span> <span m="393030">But</span> <span
  m="393500">maybe</span> <span m="393770">in</span> <span m="394760">a</span>
  <span m="394850">little</span> <span m="395100">bit</span> <span
  m="395200">more</span> <span m="395380">detail,</span> <span
  m="396100">what</span> <span m="396200">do</span> <span m="396240">we</span>
  <span m="396330">mean</span> <span m="396580">when</span> <span
  m="396680">we</span> <span m="396780">say</span> <span m="396800">the</span>
  <span m="396910">lac</span> <span m="397200">genes?</span> <span
  m="400900">Well,</span> <span m="402750">I</span> <span
  m="402830">mean,</span> <span m="403470">it's</span> <span
  m="403620">not</span> <span m="403760">just</span> <span
  m="403960">lactose.</span> <span m="404700">But</span> <span
  m="404910">I</span> <span m="404990">mean,</span> <span m="405250">what</span>
  <span m="405570">are</span> <span m="405610">the</span> <span
  m="405730">things</span> <span m="405980">that</span> <span
  m="406060">have</span> <span m="406190">to</span> <span
  m="406270">happen</span> <span m="406600">if</span> <span
  m="406670">you</span> <span m="406770">want</span> <span m="406860">to</span>
  <span m="406900">eat</span> <span m="407060">anything,</span> <span
  m="407570">I</span> <span m="407670">guess?</span> <span m="409340">Your
  cell--</span></p><p><span m="412320">AUDIENCE:</span> <span
  m="412770">Import.</span></p><p><span m="413670">PROFESSOR:</span> <span
  m="414120">Right,</span> <span m="414370">so</span> <span
  m="414430">you</span> <span m="414550">first</span> <span m="414770">have
  to</span> <span m="414860">import</span> <span m="415115">it.</span> <span
  m="417700">Now,</span> <span m="418040">in</span> <span m="418160">some</span>
  <span m="418470">cases,</span> <span m="418950">this</span> <span
  m="419110">can</span> <span m="419220">be</span> <span m="419340">done</span>
  <span m="419910">maybe</span> <span m="420330">for</span> <span
  m="420460">some--</span> <span m="421680">maybe</span> <span
  m="421970">nutrients,</span> <span m="422520">it</span> <span
  m="422600">could</span> <span m="422670">be</span> <span
  m="422750">done</span> <span m="422920">even</span> <span
  m="423080">passively,</span> <span m="423900">if</span> <span
  m="424260">it</span> <span m="424320">crosses</span> <span
  m="424730">the</span> <span m="424800">membrane</span> <span
  m="425260">easily.</span> <span m="425620">But</span> <span
  m="426100">for</span> <span m="426830">most</span> <span m="427230">of</span>
  <span m="427280">the</span> <span m="427350">things</span> <span
  m="427570">that</span> <span m="427650">you</span> <span
  m="427830">might</span> <span m="428280">think</span> <span
  m="428450">about,</span> <span m="428600">you</span> <span
  m="428670">actually</span> <span m="428950">have to do</span> <span
  m="429190">active</span> <span m="429650">import.</span></p><p><span
  m="430710">So</span> <span m="430820">this</span> <span m="431030">is</span>
  <span m="431200">done</span> <span m="431530">by</span> <span
  m="431730">what?</span> <span m="432400">Anybody</span> <span
  m="432710">remember?</span> <span m="436670">lacY.</span> <span
  m="440660">So</span> <span m="440790">lacY</span> <span m="441700">is</span>
  <span m="443550">a</span> <span m="443620">membrane</span> <span
  m="444050">protein</span> <span m="445390">that</span> <span
  m="446480">imports</span> <span m="446840">lactose.</span> <span
  m="453330">And</span> <span m="453470">then</span> <span m="453540">what
  do</span> <span m="453660">you</span> <span m="453720">need</span> <span
  m="453880">to</span> <span m="453920">do?</span></p><p><span
  m="455751">AUDIENCE:</span> <span m="456228">Break the two apart,</span> <span
  m="456705">and then</span> <span m="457182">you can</span> <span
  m="457659">metabolize.</span></p><p><span m="458613">PROFESSOR:</span> <span
  m="459090">Right,</span> <span m="460020">then</span> <span
  m="460250">you</span> <span m="460330">have</span> <span m="460510">to</span>
  <span m="462130">eat</span> <span m="462380">it</span> <span
  m="462580">somehow.</span> <span m="463120">Now,</span> <span
  m="463620">of</span> <span m="463710">course,</span> <span
  m="464160">metabolism</span> <span m="464760">is</span> <span
  m="464840">a</span> <span m="464870">very</span> <span
  m="465040">complicated</span> <span m="465500">thing.</span> <span
  m="466300">But</span> <span m="467090">the</span> <span m="467500">key</span>
  <span m="467730">thing</span> <span m="467890">that's</span> <span
  m="468070">different</span> <span m="468320">between</span> <span
  m="468440">lactose</span> <span m="468930">and</span> <span
  m="469000">maybe</span> <span m="470300">the</span> <span
  m="470420">simple</span> <span m="470710">sugars</span> <span
  m="471500">is</span> <span m="471650">that</span> <span m="472020">you</span>
  <span m="472160">first</span> <span m="472450">have</span> <span
  m="472590">to</span> <span m="473600">break</span> <span m="473760">down
  the</span> <span m="473900">lactose</span> <span m="474500">into</span> <span
  m="474770">its</span> <span m="475040">constituent</span> <span
  m="475530">parts.</span></p><p><span m="475760">A</span> <span
  m="475800">lactose</span> <span m="476260">is</span> <span m="476410">a</span>
  <span m="476500">disaccharide</span> <span m="478170">composed</span> <span
  m="478530">of</span> <span m="478640">two</span> <span
  m="478990">simple</span> <span m="479790">monosaccharides.</span> <span
  m="481340">So</span> <span m="481540">what</span> <span m="481660">you</span>
  <span m="481730">need</span> <span m="481890">is</span> <span
  m="481970">you</span> <span m="482040">need</span> <span
  m="482220">this</span> <span m="482390">lacZ,</span> <span
  m="484020">beta-galactosidase,</span> <span m="485210">in</span> <span
  m="485350">order</span> <span m="485530">to</span> <span
  m="485630">cleave</span> <span m="487170">that</span> <span
  m="487380">bond.</span> <span m="487670">And</span> <span
  m="487730">then</span> <span m="487820">you</span> <span
  m="487900">have</span> <span m="488010">the</span> <span m="488100">two</span>
  <span m="488350">simple</span> <span m="488940">monosaccharides</span> <span
  m="490140">that</span> <span m="490280">can</span> <span m="490370">be
  eaten.</span></p><p><span m="493990">Now,</span> <span m="494470">the</span>
  <span m="494580">lac</span> <span m="494830">operon</span> <span
  m="495150">also</span> <span m="495430">has</span> <span
  m="495610">this</span> <span m="495790">lacA.</span> <span
  m="496100">And</span> <span m="496550">it's</span> <span m="496690">not</span>
  <span m="496880">quite</span> <span m="497160">obvious</span> <span
  m="497550">what</span> <span m="497650">that</span> <span
  m="497780">thing</span> <span m="497920">does,</span> <span
  m="498200">so</span> <span m="498400">nobody</span> <span
  m="498710">ever</span> <span m="498860">talks</span> <span
  m="499110">about</span> <span m="499290">it.</span> <span
  m="499460">But</span> <span m="500340">there</span> <span m="500520">is</span>
  <span m="500670">a</span> <span m="500740">third</span> <span
  m="501010">protein</span> <span m="501840">there.</span> <span
  m="503180">But</span> <span m="503450">what</span> <span m="503740">we</span>
  <span m="503820">always</span> <span m="504000">talk</span> <span
  m="504180">about</span> <span m="504310">is</span> <span
  m="504390">lacY,</span> <span m="504970">that's</span> <span
  m="505110">require to</span> <span m="505460">import the</span> <span
  m="505900">lactose</span> <span m="506400">and</span> <span
  m="506470">then</span> <span m="506550">lacZ</span> <span
  m="507100">that</span> <span m="507220">is</span> <span
  m="507310">required</span> <span m="509140">to</span> <span
  m="509290">break</span> <span m="509550">the</span> <span
  m="509620">lactose</span> <span m="509950">down</span> <span
  m="510170">into</span> <span m="510290">its</span> <span
  m="510530">monosaccharides.</span></p><p><span m="512429">And</span> <span
  m="512570">then</span> <span m="513059">the</span> <span
  m="513220">idea--</span> <span m="514179">and</span> <span
  m="514419">that's</span> <span m="514600">not</span> <span
  m="514730">sufficient.</span> <span m="515679">You</span> <span
  m="515789">don't</span> <span m="516020">take</span> <span
  m="516280">those</span> <span m="516429">monosaccharides</span> <span
  m="516940">and</span> <span m="517039">instantly</span> <span
  m="518100">make</span> <span m="518350">more</span> <span
  m="518539">cells</span> <span m="518870">out</span> <span m="518950">of</span>
  <span m="519020">it.</span> <span m="519390">But</span> <span
  m="519480">the</span> <span m="519570">idea</span> <span m="519940">is</span>
  <span m="520140">that</span> <span m="520610">the</span> <span
  m="520789">rest</span> <span m="521150">of</span> <span m="521299">the</span>
  <span m="522210">metabolic</span> <span m="522669">machinery</span> <span
  m="523150">is</span> <span m="523309">kind</span> <span m="523450">of</span>
  <span m="523590">there</span> <span m="524320">any</span> <span
  m="524540">ways</span> <span m="524910">to</span> <span m="525000">do</span>
  <span m="525200">other--</span> <span m="525980">that's</span> <span
  m="526210">kind</span> <span m="526350">of</span> <span m="526450">some</span>
  <span m="527210">assumptions.</span></p><p><span m="538570">Can</span> <span
  m="538750">somebody</span> <span m="539800">explain</span> <span
  m="540350">how</span> <span m="540620">it</span> <span m="540710">is</span>
  <span m="540910">that</span> <span m="541050">they</span> <span
  m="541210">measured</span> <span m="542790">the</span> <span
  m="542990">cost</span> <span m="544840">of</span> <span
  m="544970">expressing</span> <span m="545630">these</span> <span
  m="545980">proteins?</span> <span m="551680">Yes.</span></p><p><span
  m="552140">AUDIENCE:</span> <span m="552633">So</span> <span
  m="553126">they</span> <span m="553619">[INAUDIBLE]</span> <span
  m="557563">expressed</span> <span m="558056">these proteins</span> <span
  m="559535">at</span> <span m="560028">different levels</span> <span
  m="560521">using</span> <span m="561014">different</span> <span
  m="562000">concentrations</span> <span m="562493">of</span> <span
  m="562986">IPTG.</span></p><p><span m="563479">PROFESSOR:</span> <span
  m="563990">Right.</span></p><p><span m="564250">AUDIENCE: There</span> <span
  m="564420">was no</span> <span m="565346">lactose</span> <span
  m="565809">around,</span> <span m="566272">so it</span> <span m="566735">was
  only the</span> <span m="567198">cost to</span> <span m="567661">no
  benefits.</span> <span m="568124">And then</span> <span m="568587">they
  measured</span> <span m="569050">[INAUDIBLE].</span></p><p><span
  m="569520">PROFESSOR: All</span> <span m="569580">right,</span> <span
  m="569780">perfect.</span> <span m="570370">OK,</span> <span
  m="570720">so</span> <span m="570840">there</span> <span m="571100">are</span>
  <span m="571270">several</span> <span m="571610">key</span> <span
  m="571800">things</span> <span m="572060">in</span> <span
  m="572140">here.</span> <span m="572760">So</span> <span
  m="572920">first</span> <span m="573190">of</span> <span
  m="573240">all,</span> <span m="573390">normally,</span> <span
  m="573840">what</span> <span m="573950">we</span> <span m="574060">do</span>
  <span m="574330">is</span> <span m="574870">it's</span> <span
  m="575120">lactose</span> <span m="575800">inside</span> <span
  m="576190">the</span> <span m="576250">cell</span> <span
  m="577210">that</span> <span m="577400">causes</span> <span
  m="578240">this</span> <span m="578440">lac</span> <span
  m="578710">repressor</span> <span m="579250">to</span> <span
  m="579360">fall</span> <span m="579690">off</span> <span m="579930">and
  then</span> <span m="580200">you</span> <span m="580360">get</span> <span
  m="580550">expression</span> <span m="581734">of</span> <span
  m="583710">the</span> <span m="583920">lac</span> <span
  m="584235">operon.</span></p><p><span m="586200">But</span> <span
  m="586460">in</span> <span m="586670">order</span> <span m="586960">to</span>
  <span m="587330">kind</span> <span m="587490">of</span> <span
  m="588830">sidestep</span> <span m="589380">or</span> <span
  m="589480">circumvent</span> <span m="590010">that</span> <span
  m="590120">normal</span> <span m="590470">network,</span> <span
  m="590810">what</span> <span m="590910">we</span> <span m="591810">are</span>
  <span m="591950">doing</span> <span m="592210">in</span> <span
  m="592280">this</span> <span m="592430">case</span> <span m="592760">is</span>
  <span m="592960">adding</span> <span m="593260">IPTG.</span> <span
  m="594672">So</span> <span m="595110">IPTG</span> <span
  m="597120">allows</span> <span m="597490">one</span> <span
  m="597970">to</span> <span m="598120">get</span> <span
  m="598410">expression</span> <span m="599872">of--</span> <span
  m="604070">and</span> <span m="604230">what</span> <span
  m="604390">IPTG</span> <span m="604770">is</span> <span m="604950">that</span>
  <span m="605470">it</span> <span m="606080">stops</span> <span
  m="606580">the</span> <span m="606870">inhibition</span> <span
  m="608660">of</span> <span m="610490">this</span> <span m="612540">lac</span>
  <span m="612770">promoter,</span> <span m="613110">where</span> <span
  m="613210">you</span> <span m="613280">get</span> <span m="613420">lacZ</span>
  <span m="614000">and</span> <span m="614070">lacY.</span></p><p><span
  m="620330">Now,</span> <span m="621790">the</span> <span
  m="622250">idea</span> <span m="622520">here</span> <span m="622760">is</span>
  <span m="622840">that</span> <span m="623050">you</span> <span
  m="623240">can</span> <span m="624120">control</span> <span
  m="624720">the</span> <span m="624810">level</span> <span m="625785">of</span>
  <span m="626070">expression</span> <span m="627100">of</span> <span
  m="627200">this</span> <span m="627350">operon,</span> <span
  m="628540">because</span> <span m="628720">what</span> <span
  m="628830">we</span> <span m="628960">really</span> <span
  m="629150">want</span> <span m="629360">is</span> <span m="630450">we</span>
  <span m="630600">want</span> <span m="630710">to</span> <span
  m="630750">measure</span> <span m="631100">a</span> <span
  m="631150">plot</span> <span m="631990">of</span> <span
  m="633490">something</span> <span m="633840">that</span> <span
  m="634010">you</span> <span m="634120">would</span> <span
  m="634230">call</span> <span m="634480">cost--</span> <span
  m="636760">and</span> <span m="637370">we'll</span> <span
  m="637590">explore</span> <span m="638080">a</span> <span
  m="638130">little</span> <span m="638270">bit</span> <span
  m="638350">more</span> <span m="638500">what</span> <span
  m="638620">that</span> <span m="638760">means--</span> <span
  m="639470">as</span> <span m="639630">a</span> <span
  m="639700">function</span> <span m="640390">of</span> <span
  m="641250">the</span> <span m="641520">lac</span> <span
  m="641990">operon</span> <span m="642570">expression.</span></p><p><span
  m="646860">And</span> <span m="647020">this</span> <span m="647160">is</span>
  <span m="647260">often</span> <span m="647620">done</span> <span
  m="647980">relative</span> <span m="648700">to</span> <span
  m="650300">the</span> <span m="650770">full</span> <span
  m="651210">induction</span> <span m="652500">of</span> <span
  m="653250">the</span> <span m="653340">wild</span> <span
  m="653630">type</span> <span m="653850">lac</span> <span
  m="654050">operon.</span> <span m="657440">And</span> <span
  m="658170">this</span> <span m="658390">is</span> <span m="658600">a</span>
  <span m="658760">relative</span> <span m="659320">growth</span> <span
  m="659670">rate</span> <span m="659930">reduction.</span> <span
  m="660370">So</span> <span m="661080">basically,</span> <span
  m="662050">this</span> <span m="662220">is</span> <span m="662620">a</span>
  <span m="662780">percentage,</span> <span m="663250">say,</span> <span
  m="663390">decrease</span> <span m="665520">in</span> <span m="665680">growth
  rate.</span></p><p><span m="670770">Now,</span> <span m="671520">there
  was</span> <span m="671780">a</span> <span m="671840">key</span> <span
  m="672030">thing</span> <span m="672240">that</span> <span
  m="672380">you</span> <span m="672480">brought</span> <span
  m="672660">up,</span> <span m="672790">which</span> <span m="672920">is</span>
  <span m="672980">that</span> <span m="673830">you</span> <span
  m="673970">want</span> <span m="674100">to</span> <span
  m="674150">measure</span> <span m="674620">the</span> <span
  m="674760">growth</span> <span m="675160">rate</span> <span
  m="675370">in</span> <span m="675470">the</span> <span
  m="676130">absence</span> <span m="676520">of</span> <span
  m="676600">lactose.</span> <span m="677430">Because</span> <span
  m="677750">otherwise</span> <span m="678640">as</span> <span
  m="678900">we</span> <span m="679050">increase</span> <span
  m="679600">the</span> <span m="679810">level</span> <span m="680090">of</span>
  <span m="680180">expression</span> <span m="680650">here--</span> <span
  m="681000">so</span> <span m="681150">we're</span> <span
  m="681300">controlling</span> <span m="681680">this</span> <span
  m="681840">by</span> <span m="681980">IPTG,</span> <span m="683370">so</span>
  <span m="683490">there's</span> <span m="683670">some</span> <span
  m="683720">mapping</span> <span m="684180">from</span> <span
  m="684310">IPTG</span> <span m="684970">concentration</span> <span
  m="686210">to</span> <span m="686460">the</span> <span m="686750">level</span>
  <span m="687030">of</span> <span m="687080">expression</span> <span
  m="687480">here.</span></p><p><span m="689390">But</span> <span
  m="690860">we</span> <span m="690870">want</span> <span m="691110">to</span>
  <span m="691180">be</span> <span m="691280">able</span> <span
  m="691380">to</span> <span m="691440">measure</span> <span
  m="691650">the</span> <span m="691780">cost</span> <span
  m="692630">separate</span> <span m="693080">from</span> <span
  m="693200">the</span> <span m="693260">benefits.</span> <span
  m="695430">So</span> <span m="695900">it's</span> <span
  m="696110">important</span> <span m="696470">then</span> <span
  m="696600">to</span> <span m="696700">grow</span> <span m="697020">this</span>
  <span m="697310">in</span> <span m="697400">the</span> <span
  m="697530">absence</span> <span m="698060">of</span> <span
  m="698180">lactose.</span> <span m="699760">So</span> <span
  m="700130">say,</span> <span m="700530">no</span> <span
  m="700730">lactose.</span></p><p><span m="704180">But</span> <span
  m="704380">if</span> <span m="704460">I</span> <span m="704540">just</span>
  <span m="705240">take</span> <span m="705990">bacteria</span> <span
  m="707260">and</span> <span m="707470">I</span> <span m="707530">put</span>
  <span m="707790">them</span> <span m="707920">in</span> <span
  m="708000">a</span> <span m="708100">tube</span> <span m="709480">with</span>
  <span m="710800">say</span> <span m="711380">minimal</span> <span
  m="711740">media,</span> <span m="712270">salt,</span> <span
  m="712760">so</span> <span m="713030">forth,</span> <span
  m="713730">but</span> <span m="713850">no</span> <span
  m="714010">lactose,</span> <span m="714970">are</span> <span
  m="715080">they</span> <span m="715160">going</span> <span
  m="715260">to</span> <span m="715320">grow?</span> <span
  m="718130">They</span> <span m="718210">need</span> <span m="718330">to</span>
  <span m="718380">draw</span> <span m="718570">something.</span> <span
  m="721820">So</span> <span m="722250">what</span> <span m="722380">is</span>
  <span m="722460">it</span> <span m="722580">that</span> <span
  m="722650">the</span> <span m="722760">authors</span> <span
  m="723160">have</span> <span m="723310">done?</span> <span
  m="731182">Yes.</span></p><p><span m="731674">AUDIENCE:</span> <span
  m="732166">Glycerol.</span></p><p><span m="732658">PROFESSOR:</span> <span
  m="733150">That's right,  they</span> <span m="733300">added</span> <span
  m="733570">some</span> <span m="733690">glycerol</span> <span
  m="736300">and</span> <span m="736770">in</span> <span
  m="737680">different</span> <span m="738110">parts.</span> <span m="738270">I
  think it's</span> <span m="738450">1%</span> <span m="739610">glycerol.</span>
  <span m="740100">Does</span> <span m="740220">anybody</span> <span
  m="740860">happen</span> <span m="741130">to</span> <span
  m="741180">remember?</span> <span m="743950">I think,</span> <span
  m="744420">for</span> <span m="744580">most</span> <span m="744920">of</span>
  <span m="744990">it,</span> <span m="745070">it</span> <span
  m="745130">was</span> <span m="745320">0.1%.</span> <span m="746740">I
  tell</span> <span m="747140">you</span> <span m="747390">what,</span> <span
  m="747660">we'll</span> <span m="747930">say</span> <span m="748090">a</span>
  <span m="748180">little</span> <span m="748400">bit</span> <span
  m="748510">of</span> <span m="749010">small</span> <span
  m="749760">concentrations</span> <span m="750310">of</span> <span
  m="750560">glycerol.</span></p><p><span m="755215">So</span> <span
  m="755690">the</span> <span m="755880">idea</span> <span m="756100">is</span>
  <span m="756250">that</span> <span m="756700">this</span> <span
  m="756930">is</span> <span m="757180">kind</span> <span m="757350">of</span>
  <span m="758110">a</span> <span m="758200">second</span> <span
  m="758550">rate</span> <span m="758860">carbon</span> <span
  m="759180">source.</span> <span m="760360">The</span> <span
  m="760800">bacteria</span> <span m="761190">are</span> <span
  m="761270">not</span> <span m="761620">super</span> <span
  m="761980">happy,</span> <span m="762280">but</span> <span
  m="762460">they're</span> <span m="762590">OK.</span> <span
  m="764630">And</span> <span m="764810">then</span> <span
  m="767890">given</span> <span m="768200">this,</span> <span
  m="768850">what</span> <span m="769300">they</span> <span
  m="769480">were</span> <span m="769620">able</span> <span
  m="769830">demonstrate</span> <span m="770180">is</span> <span
  m="770250">that,</span> <span m="770420">if</span> <span
  m="770580">they</span> <span m="770680">did</span> <span m="770960">add</span>
  <span m="771110">lactose,</span> <span m="771480">they</span> <span
  m="771560">would</span> <span m="771720">have</span> <span
  m="771790">grown</span> <span m="772070">faster.</span></p><p><span
  m="774100">So</span> <span m="774140">there's</span> <span m="774320">a</span>
  <span m="774380">sense</span> <span m="774710">that</span> <span
  m="774980">the</span> <span m="775250">lactose</span> <span
  m="776410">does</span> <span m="776630">help</span> <span
  m="776930">the</span> <span m="777030">cells.</span> <span
  m="778160">But</span> <span m="778380">you</span> <span m="778490">have</span>
  <span m="778620">to</span> <span m="778680">have</span> <span
  m="778770">some</span> <span m="778930">glycerol.</span> <span
  m="779290">Otherwise,</span> <span m="779520">you</span> <span
  m="779620">can't</span> <span m="779920">really</span> <span
  m="780090">measure these</span> <span m="780587">things.</span> <span
  m="783072">Yeah.</span></p><p><span m="783569">AUDIENCE: Why is it</span>
  <span m="784066">that--</span> <span m="784563">you were saying  if</span>
  <span m="785060">you</span> <span m="785557">put like a  very good</span>
  <span m="786054">carbon</span> <span m="786551">source--</span></p><p><span
  m="787050">PROFESSOR: Well--</span></p><p><span m="787460">AUDIENCE: You're
  not</span> <span m="787913">going to see any</span> <span
  m="788366">[INAUDIBLE].</span></p><p><span m="788820">PROFESSOR: OK,</span>
  <span m="789180">so</span> <span m="789350">first</span> <span
  m="789570">of</span> <span m="789620">all</span> <span m="789800">what I
  was</span> <span m="789940">saying is</span> <span m="790190">that</span>
  <span m="790350">you</span> <span m="790410">have</span> <span
  m="790500">to</span> <span m="790540">have</span> <span m="790640">some</span>
  <span m="790950">carbon</span> <span m="791180">source.</span></p><p><span
  m="791590">AUDIENCE:</span> <span m="791930">Sure.</span></p><p><span
  m="792270">PROFESSOR:</span> <span m="792610">Right,</span> <span
  m="793160">so</span> <span m="794430">you</span> <span m="794520">have</span>
  <span m="794590">to</span> <span m="794670">do</span> <span
  m="794760">something.</span> <span m="796030">And</span> <span
  m="796740">it's</span> <span m="796960">just</span> <span
  m="797090">good</span> <span m="797260">conceptually to</span> <span
  m="797680">make</span> <span m="797820">sure</span> <span
  m="798130">you</span> <span m="798370">think about</span> <span
  m="798590">how</span> <span m="798770">you would</span> <span
  m="798950">actually</span> <span m="799130">do</span> <span
  m="799220">this</span> <span m="799340">experiment.</span> <span
  m="799940">Now,</span> <span m="801300">you</span> <span m="801430">have
  to</span> <span m="801620">add</span> <span m="801780">some</span> <span
  m="801950">carbon source.</span> <span m="802150">But</span> <span
  m="802350">the</span> <span m="802410">question</span> <span
  m="802670">is,</span> <span m="802840">well,</span> <span
  m="802950">what</span> <span m="803000">happens</span> <span
  m="803260">if</span> <span m="803320">you</span> <span m="803460">just</span>
  <span m="803810">added</span> <span m="804300">a</span> <span
  m="804360">bunch</span> <span m="804540">of</span> <span
  m="804610">glucose?</span></p><p><span m="807780">Now,</span> <span
  m="808110">in</span> <span m="808240">that</span> <span m="808460">case</span>
  <span m="808750">actually,</span> <span m="809710">for</span> <span
  m="810680">some</span> <span m="810800">of</span> <span m="810840">the</span>
  <span m="810950">other</span> <span m="811170">experiments,</span> <span
  m="811670">I</span> <span m="811710">think</span> <span m="811890">that</span>
  <span m="812150">would</span> <span m="812350">have</span> <span
  m="812490">caused</span> <span m="812910">problems</span> <span
  m="813660">in</span> <span m="813750">the</span> <span m="813810">sense</span>
  <span m="814040">that</span> <span m="814560">then</span> <span
  m="815210">there</span> <span m="815350">would</span> <span
  m="815480">not</span> <span m="815660">be</span> <span m="815800">any</span>
  <span m="815990">benefits</span> <span m="816520">associated</span> <span
  m="816940">with</span> <span m="818390">growing</span> <span
  m="819300">or</span> <span m="819450">with</span> <span
  m="819580">adding</span> <span m="821080">increasing</span> <span
  m="821890">lac</span> <span m="822760">operon</span> <span
  m="823040">expression.</span></p><p><span m="824470">For</span> <span
  m="824570">this</span> <span m="824790">experiment,</span> <span
  m="825240">in</span> <span m="825320">principle,</span> <span
  m="825940">one</span> <span m="826160">could</span> <span
  m="826290">have</span> <span m="826420">done</span> <span
  m="826640">that,</span> <span m="827090">although</span> <span
  m="828350">you</span> <span m="828440">really</span> <span
  m="828590">want</span> <span m="828710">to</span> <span
  m="828750">measure</span> <span m="828970">the</span> <span
  m="829120">costs</span> <span m="829435">and</span> <span
  m="829750">associated</span> <span m="830210">benefits</span> <span
  m="830570">in</span> <span m="830690">some</span> <span
  m="830940">environment,</span> <span m="831450">which</span> <span
  m="831650">you're</span> <span m="831690">to</span> <span m="831780">be</span>
  <span m="831850">doing</span> <span m="832070">in</span> <span
  m="832300">later</span> <span m="832630">experiments.</span></p><p><span
  m="832885">So</span> <span m="833140">I</span> <span m="833250">think</span>
  <span m="833380">it's</span> <span m="833500">really</span> <span
  m="835880">from a</span> <span m="836060">conceptual</span> <span
  m="836440">standpoint,</span> <span m="836790">in principle,</span> <span
  m="837130">you can</span> <span m="837230">measure</span> <span
  m="837430">this</span> <span m="837790">in</span> <span
  m="838370">glucose,</span> <span m="840850">but</span> <span
  m="840960">then</span> <span m="841100">you'd</span> <span
  m="841230">always</span> <span m="841380">worry,</span> <span
  m="841680">oh,</span> <span m="841840">well,</span> <span
  m="841950">maybe</span> <span m="842490">it's</span> <span
  m="842650">different.</span> <span m="843800">Yeah.</span></p><p><span
  m="844195">AUDIENCE:</span> <span m="844590">[INAUDIBLE].</span></p><p><span
  m="847251">PROFESSOR:</span> <span m="847680">Oh,</span> <span
  m="847840">yeah,</span> <span m="848080">right.</span> <span
  m="848630">So</span> <span m="848790">you</span> <span m="849130">could</span>
  <span m="849290">have</span> <span m="849380">broken</span> <span
  m="849690">down--</span> <span m="851360">So</span> <span
  m="851800">the</span> <span m="851940">other</span> <span m="852110">issue
  is</span> <span m="852460">that,</span> <span m="853440">in</span> <span
  m="853790">principle--</span> <span m="854540">and</span> <span
  m="854850">they</span> <span m="854940">don't</span> <span
  m="855110">talk</span> <span m="855320">about</span> <span m="855460">this
  here--</span> <span m="855840">but yeah, if</span> <span m="855980">you</span>
  <span m="856070">add</span> <span m="856180">a</span> <span
  m="856230">bunch</span> <span m="856430">of</span> <span
  m="856510">glucose,</span> <span m="857270">then</span> <span m="857790">you
  would</span> <span m="857950">have</span> <span m="858130">to</span> <span
  m="858360">have</span> <span m="858560">another</span> <span
  m="858960">mutant</span> <span m="859420">in</span> <span
  m="859510">order</span> <span m="859720">to</span> <span
  m="859940">break</span> <span m="860260">the</span> <span
  m="860420">glucose</span> <span m="860950">repression,</span> <span
  m="861920">because</span> <span m="862230">if</span> <span
  m="862370">you</span> <span m="862480">have</span> <span
  m="862740">this</span> <span m="862920">preferred</span> <span
  m="863420">carbon</span> <span m="863700">source,</span> <span
  m="864020">glucose,</span> <span m="865400">then</span> <span
  m="865610">you'll</span> <span m="865940">naturally</span> <span
  m="866380">repress</span> <span m="867840">the</span> <span
  m="868040">CRP,</span> <span m="868420">all</span> <span m="868730">of</span>
  <span m="868900">the</span> <span m="870210">alternative</span> <span
  m="870700">modes</span> <span m="870970">of</span> <span
  m="871120">carbon</span> <span m="871490">metabolism</span> <span
  m="871860">just</span> <span m="872180">because</span> <span
  m="872380">glucose</span> <span m="872910">was</span> <span
  m="872990">kind</span> <span m="873120">of the</span> <span
  m="873300">best.</span></p><p><span m="878100">And</span> <span
  m="878290">what</span> <span m="878800">was</span> <span m="878950">the</span>
  <span m="879070">key</span> <span m="880730">conclusion</span> <span
  m="882110">from</span> <span m="882940">this</span> <span
  m="883240">first</span> <span m="884420">data</span> <span
  m="884770">plot?</span></p><p><span m="887700">AUDIENCE:</span> <span
  m="888192">It's</span> <span m="888684">nonlinear.</span></p><p><span
  m="889176">PROFESSOR: All right,</span> <span m="889670">nonlinear.</span>
  <span m="891370">The</span> <span m="891510">cost</span> <span m="892000">is
  a</span> <span m="892120">function of the</span> <span m="892510">lac</span>
  <span m="892750">expression.</span> <span m="893660">And</span> <span
  m="893780">it</span> <span m="893860">grows</span> <span
  m="894580">super</span> <span m="895030">linearly.</span> <span
  m="895490">I</span> <span m="895620">always</span> <span
  m="895800">forget</span> <span m="896060">what the difference</span> <span
  m="896130">is</span> <span m="896350">in</span> <span m="896460">concave
  and</span> <span m="896930">convex</span> <span m="897250">is.</span> <span
  m="897790">I don't know if</span> <span m="898190">other</span> <span
  m="898390">people</span> <span m="898590">have</span> <span
  m="898730">this</span> <span m="898860">particular</span> <span
  m="899540">brain</span> <span m="899760">problem.</span></p><p><span
  m="900150">But</span> <span m="900720">the</span> <span
  m="901040">second</span> <span m="901460">derivative is</span> <span
  m="901830">positive.</span> <span m="903620">In</span> <span
  m="903740">particular,</span> <span m="904080">that</span> <span
  m="904330">means</span> <span m="904590">that</span> <span
  m="904740">if</span> <span m="904950">you</span> <span m="905100">do</span>
  <span m="905310">draw</span> <span m="905740">some</span> <span
  m="905930">sort</span> <span m="906140">of</span> <span m="906240">like</span>
  <span m="908210">line,</span> <span m="910130">then</span> <span
  m="910610">they</span> <span m="910820">have</span> <span
  m="910940">data</span> <span m="911260">that</span> <span
  m="911610">looks</span> <span m="911960">something</span> <span
  m="912310">like--</span> <span m="912880">so</span> <span m="913820">here
  is</span> <span m="914150">0.5.</span> <span m="915980">We</span> <span
  m="916180">have</span> <span m="916370">something</span> <span
  m="916730">that</span> <span m="917140">kind</span> <span m="917320">of</span>
  <span m="917400">falls</span> <span m="918900">below</span> <span
  m="919330">here.</span></p><p><span m="922770">They</span> <span
  m="922870">had</span> <span m="922990">about a</span> <span
  m="923180">0.25.</span> <span m="924880">And</span> <span m="925080">it</span>
  <span m="925290">was</span> <span m="925390">also</span> <span
  m="925720">a</span> <span m="925760">little</span> <span m="925950">bit</span>
  <span m="926690">below</span> <span m="928340">that</span> <span
  m="928730">crossed.</span> <span m="929555">They</span> <span
  m="929810">had</span> <span m="929980">a</span> <span m="930040">0.75.</span>
  <span m="934100">And</span> <span m="934230">then</span> <span
  m="934330">they</span> <span m="934420">had</span> <span m="934550">a</span>
  <span m="934600">1.</span></p><p><span m="935550">Why</span> <span
  m="935740">is it</span> <span m="935840">that</span> <span
  m="936000">they</span> <span m="936090">can't</span> <span
  m="936360">go</span> <span m="936470">above</span> <span m="936840">1</span>
  <span m="937380">here?</span> <span m="947820">Why</span> <span
  m="947980">do</span> <span m="948040">they</span> <span m="948140">not</span>
  <span m="948310">have</span> <span m="948420">more</span> <span
  m="948580">data</span> <span m="948970">out</span> <span
  m="949100">here?</span></p><p><span m="954130">AUDIENCE:</span> <span
  m="954604">Because</span> <span m="955078">you can't have</span> <span
  m="955552">more</span> <span m="956026">expression</span> <span
  m="956500">than full</span> <span m="956974">expression.</span></p><p><span
  m="957450">PROFESSOR: You</span> <span m="957550">can't</span> <span
  m="957750">have</span> <span m="957860">more</span> <span
  m="958090">expression than full</span> <span m="958540">expression</span>
  <span m="958900">with</span> <span m="959290">this</span> <span
  m="959530">promoter,</span> <span m="960340">because</span> <span
  m="960530">what</span> <span m="960650">they are</span> <span
  m="960820">doing</span> <span m="961020">is</span> <span
  m="961100">they're</span> <span m="961230">adding</span> <span
  m="961560">IPTG,</span> <span m="962620">so</span> <span
  m="962750">they</span> <span m="962840">titrate</span> <span
  m="963420">between</span> <span m="964245">0</span> <span
  m="965300">and</span> <span m="966020">maximal</span> <span
  m="966550">expression</span> <span m="967340">from</span> <span
  m="967540">this</span> <span m="967670">promoter.</span> <span m="968070">In
  principle,</span> <span m="968700">you</span> <span m="968800">could</span>
  <span m="968900">always</span> <span m="969020">get</span> <span
  m="969150">another</span> <span m="969430">one.</span> <span
  m="969710">And</span> <span m="969790">then</span> <span m="969910">you</span>
  <span m="970220">should</span> <span m="970440">be</span> <span
  m="970520">able</span> <span m="970630">to</span> <span m="970700">go</span>
  <span m="970780">out</span> <span m="971150">further,</span> <span
  m="971630">right?</span></p><p><span m="975640">And</span> <span
  m="976460">at</span> <span m="976650">maximal</span> <span
  m="977130">expression,</span> <span m="977550">they</span> <span
  m="977670">measure</span> <span m="978280">about</span> <span
  m="978470">a</span> <span m="978510">4%</span> <span m="979170">growth</span>
  <span m="979390">deficit,</span> <span m="980450">0.04,</span> <span
  m="986540">just to</span> <span m="986850">give you</span> <span
  m="986980">a</span> <span m="987020">sense</span> <span m="987220">of</span>
  <span m="987280">scale.</span> <span m="988370">So</span> <span
  m="988500">this</span> <span m="988640">is</span> <span m="989260">4%</span>
  <span m="990940">deficit.</span> <span m="994800">Now,</span> <span
  m="996380">I</span> <span m="996510">want</span> <span m="996700">to</span>
  <span m="996750">ask</span> <span m="997020">a</span> <span
  m="997090">more</span> <span m="997300">general</span> <span
  m="997680">question.</span></p><p><span m="998560">So</span> <span
  m="998710">let's</span> <span m="998900">imagine</span> <span
  m="999350">that</span> <span m="999450">you</span> <span m="999630">are</span>
  <span m="999710">measuring</span> <span m="1000030">some</span> <span
  m="1000270">quantity.</span> <span m="1003950">So</span> <span
  m="1004190">we'll</span> <span m="1004390">say</span> <span
  m="1004770">this</span> <span m="1004910">is</span> <span
  m="1005000">some</span> <span m="1005160">quality</span> <span
  m="1005540">y</span> <span m="1006320">as</span> <span m="1006520">a</span>
  <span m="1006560">function</span> <span m="1006880">of</span> <span
  m="1007060">x.</span> <span m="1008320">And</span> <span
  m="1008470">let's</span> <span m="1008630">imagine</span> <span
  m="1009090">that</span> <span m="1009310">the</span> <span
  m="1010650">true</span> <span m="1012180">y</span> <span m="1012580">as</span>
  <span m="1012690">a</span> <span m="1012740">function</span> <span
  m="1012980">of</span> <span m="1013040">x</span> <span
  m="1013390">looks</span> <span m="1013670">like</span> <span
  m="1016820">something.</span></p><p><span m="1019570">Now,</span> <span
  m="1020320">you</span> <span m="1020500">go</span> <span
  m="1020690">and</span> <span m="1020760">you</span> <span
  m="1020880">measure</span> <span m="1023550">at</span> <span
  m="1023920">multiple</span> <span m="1024359">values</span> <span
  m="1024670">of</span> <span m="1024730">x</span> <span m="1031119">this</span>
  <span m="1031310">curve,</span> <span m="1031990">because</span> <span
  m="1032530">we're</span> <span m="1032730">very</span> <span
  m="1032960">interested</span> <span m="1033230">in</span> <span
  m="1033300">what</span> <span m="1033440">this</span> <span
  m="1033569">curve</span> <span m="1033740">looks</span> <span
  m="1033900">like.</span> <span m="1035640">Now,</span> <span
  m="1035910">the</span> <span m="1036000">question</span> <span
  m="1036369">is,</span> <span m="1037589">what</span> <span
  m="1038380">fraction</span> <span m="1040300">of</span> <span
  m="1040530">the</span> <span m="1041790">error</span> <span
  m="1042069">bars</span> <span m="1042470">will</span> <span
  m="1042660">contain</span> <span m="1043310">this</span> <span
  m="1043540">curve</span> <span m="1060460">and,</span> <span
  m="1060580">of</span> <span m="1060660">course,</span> <span
  m="1062550">contain</span> <span m="1064960">this</span> <span
  m="1064990">is</span> <span m="1065060">true</span> <span
  m="1065420">curve?</span></p><p><span m="1067500">So</span> <span
  m="1067600">I'm</span> <span m="1067710">assuming</span> <span
  m="1068010">that</span> <span m="1068100">this</span> <span
  m="1068840">curve</span> <span m="1069690">is</span> <span
  m="1072220">the</span> <span m="1072310">god-given</span> <span
  m="1073510">actual</span> <span m="1073780">thing that</span> <span
  m="1073950">you're</span> <span m="1074335">measuring.</span> <span
  m="1074720">And</span> <span m="1075090">so</span> <span
  m="1075980">you</span> <span m="1076190">measure</span> <span m="1076360">this
  quantity</span> <span m="1076640">with</span> <span m="1076760">noise.</span>
  <span m="1081480">So</span> <span m="1082400">we</span> <span
  m="1082510">measure</span> <span m="1082800">this</span> <span
  m="1083170">some number  of</span> <span m="1083600">times,</span> <span
  m="1084090">some</span> <span m="1084190">number of</span> <span
  m="1084370">times.</span> <span m="1091770">Do</span> <span
  m="1091910">you</span> <span m="1092070">understand</span> <span
  m="1092140">the</span> <span m="1092180">question?</span></p><p><span
  m="1092870">So</span> <span m="1093560">here,</span> <span
  m="1096750">contained</span> <span m="1097130">the</span> <span
  m="1097210">curve.</span> <span m="1099980">There, it</span> <span
  m="1100200">didn't.</span> <span m="1101970">So what</span> <span
  m="1102170">fraction</span> <span m="1102790">of</span> <span
  m="1102980">error</span> <span m="1103200">bars</span> <span
  m="1104720">will</span> <span m="1104900">contain</span> <span
  m="1106660">that</span> <span m="1107130">curve?</span></p><p><span
  m="1109965">AUDIENCE:</span> <span m="1110420">[INAUDIBLE].</span></p><p><span
  m="1111785">PROFESSOR:</span> <span m="1112240">Right.</span> <span
  m="1114990">And</span> <span m="1115140">indeed,</span> <span
  m="1115410">what</span> <span m="1115530">we</span> <span
  m="1115620">want--</span> <span m="1116360">it's</span> <span
  m="1116520">always</span> <span m="1116700">good--</span> <span
  m="1117530">what</span> <span m="1117700">were</span> <span
  m="1117810">the</span> <span m="1117950">error</span> <span
  m="1118190">bars</span> <span m="1118570">in</span> <span
  m="1119240">the</span> <span m="1119810">figure</span> <span
  m="1120200">2A</span> <span m="1120840">in</span> <span
  m="1120940">this?</span> <span m="1125160">Right,</span> <span
  m="1125390">well,</span> <span m="1125660">OK,</span> <span
  m="1125750">so</span> <span m="1125940">they're</span> <span
  m="1126130">experimental</span> <span m="1126740">error,</span> <span
  m="1127400">right.</span></p><p><span m="1129130">Incidentally,</span> <span
  m="1129440">how</span> <span m="1129630">is</span> <span m="1129730">it that
  they</span> <span m="1129920">actually</span> <span m="1130170">measure</span>
  <span m="1130420">these</span> <span m="1130600">things?</span> <span
  m="1131040">Does</span> <span m="1131160">anybody--</span> <span
  m="1139560">And</span> <span m="1139680">so</span> <span
  m="1139760">these</span> <span m="1140130">are</span> <span
  m="1140180">actually</span> <span m="1140510">a</span> <span
  m="1140610">result</span> <span m="1140970">of</span> <span
  m="1141970">growing</span> <span m="1142750">on</span> <span
  m="1143970">a</span> <span m="1144040">nice</span> <span
  m="1144300">[INAUDIBLE]</span> <span m="1144470">well, like a</span> <span
  m="1144860">microtiter</span> <span m="1145430">plate,</span> <span
  m="1146170">where</span> <span m="1146240">they</span> <span
  m="1146400">used</span> <span m="1146620">a</span> <span
  m="1146680">checkerboard</span> <span m="1147200">pattern.</span> <span
  m="1147650">And</span> <span m="1147750">they</span> <span
  m="1148190">take</span> <span m="1148950">48</span> <span
  m="1149630">different</span> <span m="1149870">cultures.</span> <span
  m="1150320">And</span> <span m="1150380">they</span> <span
  m="1150440">measure</span> <span m="1151270">the</span> <span
  m="1151430">growth</span> <span m="1151760">rates</span> <span
  m="1152050">for</span> <span m="1152140">each</span> <span
  m="1152260">one</span> <span m="1152390">individually.</span> <span
  m="1152810">And</span> <span m="1154260">then</span> <span
  m="1154380">they're</span> <span m="1154510">plotting</span> <span
  m="1154890">the</span> <span m="1154980">standard</span> <span
  m="1155510">error of</span> <span m="1155850">the mean.</span></p><p><span
  m="1189240">Do</span> <span m="1189500">you</span> <span
  m="1189690">understand</span> <span m="1190290">what</span> <span
  m="1190460">I'm</span> <span m="1190620">trying</span> <span
  m="1190780">to</span> <span m="1190820">ask</span> <span
  m="1191010">you?</span></p><p><span m="1194062">AUDIENCE:</span> <span
  m="1194539">So</span> <span m="1195493">in that</span> <span
  m="1195970">case,</span> <span m="1196447">I mean,</span> <span
  m="1196924">the size of the error</span> <span m="1197401">bars,</span> <span
  m="1198355">you just</span> <span m="1198832">want a</span> <span
  m="1199610">scaling</span> <span m="1200350">or something,</span> <span
  m="1201270">[? if that's right, ?]</span> <span m="1201750">because the
  size</span> <span m="1202230">of the error</span> <span
  m="1202710">bars--</span></p><p><span m="1203190">PROFESSOR: Right,
  well--</span></p><p><span m="1204670">AUDIENCE:</span> <span m="1204930">I
  just--</span></p><p><span m="1205300">PROFESSOR: Yeah, OK,</span> <span
  m="1205490">so</span> <span m="1205610">this</span> <span
  m="1205770">is</span> <span m="1205880">a good</span> <span
  m="1205990">question.</span> <span m="1206450">We'll</span> <span
  m="1206680">find</span> <span m="1206750">out.</span> <span
  m="1232150">So</span> <span m="1232470">it depends</span> <span
  m="1232620">on</span> <span m="1232750">n,</span> <span
  m="1233150">where</span> <span m="1233210">n</span> <span
  m="1233460">is</span> <span m="1233570">the</span> <span
  m="1233660">number</span> <span m="1234140">of</span> <span
  m="1234440">samples</span> <span m="1235160">that</span> <span
  m="1235170">we</span> <span m="1235320">took</span> <span
  m="1236260">at</span> <span m="1236400">each</span> <span
  m="1236640">location.</span> <span m="1241700">Question,</span> <span
  m="1242040">yeah.</span></p><p><span m="1242400">AUDIENCE: Yeah,</span> <span
  m="1243364">the standard</span> <span m="1243846">error</span> <span
  m="1244328">is just</span> <span m="1244810">the</span> <span
  m="1245292">[INAUDIBLE]?</span></p><p><span m="1248760">PROFESSOR:</span>
  <span m="1249000">Right,</span> <span m="1249310">so</span> <span
  m="1249390">standard</span> <span m="1249910">error</span> <span
  m="1250140">of</span> <span m="1250240">the</span> <span
  m="1250340">mean,</span> <span m="1250470">this</span> <span
  m="1250620">is</span> <span m="1250700">an</span> <span
  m="1250780">important</span> <span m="1251110">question.</span> <span
  m="1254190">What</span> <span m="1254320">you</span> <span
  m="1254380">do</span> <span m="1254550">is</span> <span m="1254660">you</span>
  <span m="1254790">calculate</span> <span m="1255240">the</span> <span
  m="1255310">standard</span> <span m="1256230">deviation,</span> <span
  m="1257210">divide</span> <span m="1257570">by</span> <span
  m="1258210">the</span> <span m="1258300">square</span> <span
  m="1258610">root</span> <span m="1258720">of</span> <span
  m="1259120">n--</span> <span m="1260680">OK,</span> <span
  m="1260840">now,</span> <span m="1261560">I</span> <span
  m="1261690">always</span> <span m="1261890">forget</span> <span
  m="1262210">whether</span> <span m="1262430">it's</span> <span m="1262790">n
  or</span> <span m="1263040">n</span> <span m="1263200">minus</span> <span
  m="1263410">1, now.</span></p><p><span m="1264760">We</span> <span
  m="1266000">already</span> <span m="1267410">did</span> <span
  m="1267640">one</span> <span m="1267860">n</span> <span
  m="1267980">minus</span> <span m="1268190">1,</span> <span
  m="1268350">right?</span> <span m="1269020">So it's</span> <span
  m="1271140">you</span> <span m="1271260">measure</span> <span
  m="1271470">the</span> <span m="1271560">standard</span> <span
  m="1271780">deviation</span> <span m="1272210">of</span> <span m="1272280">the
  data,</span> <span m="1272700">the</span> <span m="1272930">standard</span>
  <span m="1273240">deviation</span> <span m="1273610">in</span> <span
  m="1273790">y</span> <span m="1275080">divided</span> <span
  m="1275380">by</span> <span m="1275600">root</span> <span
  m="1276820">n,</span> <span m="1277090">where</span> <span
  m="1277240">n</span> <span m="1277430">is</span> <span m="1277520">the</span>
  <span m="1277580">number</span> <span m="1277780">of</span> <span
  m="1277830">measurements</span> <span m="1278200">you</span> <span
  m="1278270">took</span> <span m="1278430">at</span> <span m="1278995">that
  point.</span></p><p><span m="1280390">But</span> <span m="1280590">of</span>
  <span m="1280670">course,</span> <span m="1280970">when</span> <span
  m="1281090">you</span> <span m="1281170">measure</span> <span
  m="1281390">the</span> <span m="1283710">standard</span> <span
  m="1285080">deviation,</span> <span m="1286140">there</span> <span
  m="1286250">was</span> <span m="1286350">already</span> <span
  m="1286610">an</span> <span m="1286730">n</span> <span
  m="1286820">minus</span> <span m="1287030">1,</span> <span
  m="1287250">right?</span> <span m="1289590">Have</span> <span
  m="1289730">I</span> <span m="1289790">lost</span> <span m="1290070">a</span>
  <span m="1290130">minus</span> <span m="1290350">1?</span> <span
  m="1291390">Do you</span> <span m="1291770">guys--</span> <span
  m="1294150">OK.</span> <span m="1297426">Yeah.</span></p><p><span
  m="1297912">AUDIENCE: Isn't the</span> <span m="1298398">standard--</span>
  <span m="1300342">I thought the</span> <span m="1300828">standard</span> <span
  m="1301314">error of the</span> <span m="1301800">mean</span> <span
  m="1302286">and not the</span> <span m="1302772">actual standard</span> <span
  m="1303258">deviation</span> <span m="1304230">[INAUDIBLE]?</span></p><p><span
  m="1305202">PROFESSOR:</span> <span m="1305690">Yes.</span> <span
  m="1306740">And</span> <span m="1307060">we're</span> <span
  m="1307180">going</span> <span m="1307260">to</span> <span
  m="1307350">spend</span> <span m="1307610">a</span> <span
  m="1307660">lot</span> <span m="1307770">of</span> <span
  m="1307820">time</span> <span m="1308560">talking</span> <span
  m="1308940">about</span> <span m="1309370">what</span> <span
  m="1309540">the</span> <span m="1309600">difference</span> <span
  m="1309700">is</span> <span m="1309980">between</span> <span
  m="1310190">a</span> <span m="1310270">standard</span> <span
  m="1311220">deviation</span> <span m="1311890">and</span> <span
  m="1311930">a</span> <span m="1311990">standard</span> <span
  m="1312400">error</span> <span m="1312650">of</span> <span
  m="1312750">the</span> <span m="1312850">mean.</span> <span
  m="1313290">And</span> <span m="1313490">it</span> <span
  m="1313620">depends</span> <span m="1313950">on</span> <span
  m="1314030">what</span> <span m="1314140">you're</span> <span
  m="1314230">trying</span> <span m="1314410">to</span> <span
  m="1314470">ask.</span> <span m="1325810">Do you guys</span> <span
  m="1325930">understand</span> <span m="1326360">what I'm</span> <span
  m="1326510">trying to ask</span> <span m="1326805">here?</span></p><p><span
  m="1330490">All right, well,</span> <span m="1330610">let's</span> <span
  m="1330770">just</span> <span m="1330880">see</span> <span
  m="1331020">where</span> <span m="1331180">we</span> <span
  m="1331300">are,</span> <span m="1331500">and then</span> <span
  m="1331680">we'll</span> <span m="1332330">discuss.</span> <span
  m="1332790">OK,</span> <span m="1332910">ready?</span> <span
  m="1334030">3,</span> <span m="1335450">2,</span> <span m="1336510">1.</span>
  <span m="1342840">All</span> <span m="1343020">right,</span> <span
  m="1343260">so</span> <span m="1343380">we got</span> <span
  m="1345420">many</span> <span m="1345680">A's,</span> <span
  m="1346220">B's,</span> <span m="1347060">C's.</span> <span
  m="1349470">Nobody</span> <span m="1349850">likes</span> <span
  m="1350150">D.</span> <span m="1351970">OK,</span> <span
  m="1352230">but</span> <span m="1352860">it's</span> <span
  m="1352990">very</span> <span m="1353220">common</span> <span
  m="1353590">to</span> <span m="1353670">see</span> <span
  m="1353860">that.</span></p><p><span m="1356250">Let's</span> <span
  m="1356410">go</span> <span m="1356490">ahead</span> <span
  m="1356640">and--</span> <span m="1357940">it's</span> <span
  m="1358260">worthwhile,</span> <span m="1358920">I</span> <span
  m="1359030">think</span> <span m="1361130">there's</span> <span
  m="1361330">enough</span> <span m="1361540">variation</span> <span
  m="1362100">to</span> <span m="1363410">decide.</span> <span
  m="1365240">And</span> <span m="1365390">in</span> <span
  m="1365450">particular,</span> <span m="1367120">between</span> <span
  m="1367450">your</span> <span m="1367560">neighbor,</span> <span
  m="1367970">try</span> <span m="1368150">to</span> <span
  m="1368250">agree</span> <span m="1368630">on</span> <span
  m="1369430">why</span> <span m="1369680">or</span> <span
  m="1369770">why</span> <span m="1370000">not</span> <span
  m="1370530">it</span> <span m="1370640">might</span> <span
  m="1370900">depend</span> <span m="1371220">on</span> <span
  m="1371340">n</span> <span m="1372580">and</span> <span m="1372710">so</span>
  <span m="1372830">forth.</span> <span m="1374500">We'll</span> <span
  m="1374910">just</span> <span m="1375080">have</span> <span
  m="1375180">a</span> <span m="1375230">minute</span> <span m="1375690">to
  think about this.</span></p><p><span m="1379666">AUDIENCE:</span> <span
  m="1380163">[INTERPOSING VOICES].</span></p><p><span
  m="1447755">PROFESSOR:</span> <span m="1448290">So</span> <span
  m="1448400">what</span> <span m="1448480">do</span> <span
  m="1448520">you</span> <span m="1448560">guys</span> <span
  m="1448700">think?</span></p><p><span m="1449516">AUDIENCE:</span> <span
  m="1449982">We're</span> <span m="1450448">still</span> <span
  m="1451846">[INAUDIBLE].</span></p><p><span m="1452780">PROFESSOR:</span>
  <span m="1453135">OK,</span> <span m="1453490">no, that's</span> <span
  m="1453720">fine.</span></p><p><span m="1454100">AUDIENCE:</span> <span
  m="1454594">[INTERPOSING VOICES].</span></p><p><span
  m="1490230">PROFESSOR:</span> <span m="1490360">Why don't</span> <span
  m="1490590">we</span> <span m="1490640">go</span> <span
  m="1490760">ahead</span> <span m="1490940">and</span> <span
  m="1491290">reconvene,</span> <span m="1492030">so</span> <span
  m="1492230">we</span> <span m="1492350">can</span> <span
  m="1492560">kind</span> <span m="1492730">of</span> <span
  m="1492970">try</span> <span m="1493300">to</span> <span
  m="1493380">figure</span> <span m="1493680">out</span> <span
  m="1494250">what</span> <span m="1494680">is</span> <span
  m="1495110">going</span> <span m="1495360">on</span> <span
  m="1495500">here.</span> <span m="1496650">I</span> <span
  m="1496730">just</span> <span m="1496870">want to</span> <span
  m="1496970">see</span> <span m="1497790">if</span> <span m="1497910">anybody
  has</span> <span m="1498330">changed</span> <span m="1498770">their</span>
  <span m="1498960">opinion</span> <span m="1499370">as</span> <span
  m="1499510">a</span> <span m="1499560">result</span> <span
  m="1499950">of</span> <span m="1500200">discussing</span> <span
  m="1500810">with</span> <span m="1500960">their</span> <span
  m="1501050">neighbor.</span> <span m="1501480">All</span> <span
  m="1501680">right,</span> <span m="1501910">let's</span> <span m="1502390">see
  it.</span> <span m="1502590">3,</span> <span m="1503000">2,</span> <span
  m="1503360">1.</span></p><p><span m="1506630">Some</span> <span
  m="1506820">people are</span> <span m="1507030">not</span> <span
  m="1507190">even</span> <span m="1507350">willing</span> <span
  m="1507660">to--</span> <span m="1507850">all</span> <span
  m="1508060">right,</span> <span m="1508280">OK,</span> <span m="1508380">so
  it's</span> <span m="1508510">interesting.</span> <span m="1508980">So</span>
  <span m="1509080">now,</span> <span m="1509290">actually,</span> <span
  m="1509650">it</span> <span m="1509950">seems</span> <span
  m="1510210">like</span> <span m="1511040">there</span> <span
  m="1511230">is</span> <span m="1511490">some</span> <span
  m="1511770">convergence</span> <span m="1512630">to</span> <span
  m="1513800">this.</span> <span m="1515430">Should</span> <span
  m="1515850">I</span> <span m="1515970">feel</span> <span
  m="1516190">like</span> <span m="1516870">that</span> <span
  m="1517400">you</span> <span m="1517530">guys</span> <span
  m="1519030">in</span> <span m="1519210">general</span> <span
  m="1519790">have</span> <span m="1521370">more</span> <span
  m="1521630">accurate</span> <span m="1522070">votes</span> <span
  m="1522460">than</span> <span m="1523000">past</span> <span
  m="1523370">years</span> <span m="1523910">somehow.</span> <span m="1524630">I
  don't</span> <span m="1524760">know.</span></p><p><span m="1526820">So</span>
  <span m="1527110">let's</span> <span m="1527840">try</span> <span
  m="1528050">to</span> <span m="1528110">figure</span> <span
  m="1528310">out</span> <span m="1528960">why</span> <span
  m="1529370">it</span> <span m="1529480">might</span> <span
  m="1530080">be</span> <span m="1530360">that</span> <span
  m="1530950">and</span> <span m="1531140">what</span> <span
  m="1531360">this</span> <span m="1531590">thing</span> <span
  m="1531950">standard</span> <span m="1532060">deviation</span> <span
  m="1532350">is.</span> <span m="1533710">Let's</span> <span
  m="1533860">try</span> <span m="1533990">to</span> <span
  m="1534060">figure</span> <span m="1534220">out</span> <span m="1534290">what
  all</span> <span m="1534500">these</span> <span m="1534570">things</span>
  <span m="1534740">are.</span></p><p><span m="1539510">So</span> <span
  m="1539620">the</span> <span m="1539690">idea</span> <span
  m="1540000">is</span> <span m="1540100">that</span> <span
  m="1540480">we're</span> <span m="1540770">going</span> <span
  m="1540860">to</span> <span m="1541100">measure</span> <span
  m="1541990">some</span> <span m="1542250">quantity,</span> <span
  m="1544710">but</span> <span m="1544870">it's</span> <span
  m="1545520">a</span> <span m="1545810">measurement</span> <span
  m="1546150">with</span> <span m="1546310">error.</span> <span
  m="1546820">And</span> <span m="1546950">for</span> <span
  m="1547050">now,</span> <span m="1547380">we'll</span> <span
  m="1547480">just</span> <span m="1547590">assume</span> <span
  m="1548240">that</span> <span m="1548370">the</span> <span
  m="1548440">measurement</span> <span m="1548880">error</span> <span
  m="1549210">is</span> <span m="1550710">Gaussian</span> <span
  m="1550980">distributed,</span> <span m="1553450">because</span> <span
  m="1553590">otherwise,</span> <span m="1554090">we</span> <span
  m="1554180">get</span> <span m="1554350">confused</span> <span
  m="1554880">and</span> <span m="1554940">everything.</span></p><p><span
  m="1556290">So</span> <span m="1556410">let's</span> <span
  m="1556560">say--</span> <span m="1558270">so</span> <span
  m="1558440">what</span> <span m="1558560">we're</span> <span m="1558680">going
  to do is we're going to</span> <span m="1559120">measure</span> <span
  m="1559430">some</span> <span m="1559580">quantity</span> <span
  m="1560000">with</span> <span m="1560190">error.</span> <span
  m="1561020">OK,</span> <span m="1561430">so it's--</span> <span
  m="1568610">Now,</span> <span m="1569660">what</span> <span
  m="1569830">we're</span> <span m="1570030">interested</span> <span
  m="1570520">in</span> <span m="1572140">is</span> <span m="1572180">not</span>
  <span m="1572490">really</span> <span m="1572750">the</span> <span
  m="1572950">width</span> <span m="1573400">of</span> <span
  m="1573520">the</span> <span m="1573610">resulting</span> <span
  m="1574050">distribution,</span> <span m="1574560">because</span> <span
  m="1574660">that's</span> <span m="1575400">a</span> <span
  m="1575520">result</span> <span m="1575890">of</span> <span
  m="1575960">how</span> <span m="1576420">accurate,</span> <span
  m="1577200">how</span> <span m="1577370">good</span> <span
  m="1577800">we</span> <span m="1577930">are</span> <span m="1578270">as</span>
  <span m="1578440">experimentalists.</span></p><p><span m="1579950">What</span>
  <span m="1580120">we're</span> <span m="1580250">really</span> <span
  m="1580500">interested</span> <span m="1580780">in</span> <span
  m="1581050">is</span> <span m="1582730">this</span> <span
  m="1582920">true</span> <span m="1583310">quantity,</span> <span
  m="1583950">so</span> <span m="1584110">the</span> <span
  m="1584220">mean</span> <span m="1584630">of</span> <span
  m="1584710">our</span> <span m="1584830">distribution.</span> <span
  m="1587520">We</span> <span m="1587650">want</span> <span m="1587950">to
  know</span> <span m="1588140">mean.</span> <span m="1594840">Now,</span> <span
  m="1595350">if</span> <span m="1595500">you</span> <span
  m="1595610">read</span> <span m="1595750">the</span> <span
  m="1595810">supplemental</span> <span m="1596250">section</span> <span
  m="1596550">of</span> <span m="1596590">this</span> <span
  m="1596720">paper,</span> <span m="1597080">what</span> <span
  m="1597210">you'll</span> <span m="1597320">see</span> <span
  m="1597520">is</span> <span m="1597650">that</span> <span
  m="1598230">there's</span> <span m="1598460">a</span> <span
  m="1598520">significant</span> <span m="1599240">standard</span> <span
  m="1599730">deviation</span> <span m="1600360">to</span> <span
  m="1600440">their</span> <span m="1600560">measurements,</span> <span
  m="1602260">where  the</span> <span m="1602390">standard</span> <span
  m="1602645">deviation,</span> <span m="1604440">they</span> <span
  m="1604650">don't</span> <span m="1604810">actually</span> <span
  m="1605010">quote</span> <span m="1605380">exactly</span> <span
  m="1605670">what</span> <span m="1605770">it is.</span></p><p><span
  m="1605970">But they have</span> <span m="1606120">plots</span> <span
  m="1606560">of</span> <span m="1606590">the</span> <span
  m="1606660">histograms,</span> <span m="1609350">where</span> <span
  m="1610450">like,</span> <span m="1610640">for</span> <span
  m="1610720">example,</span> <span m="1610960">this</span> <span
  m="1611710">is</span> <span m="1612040">a</span> <span
  m="1612120">histogram</span> <span m="1612750">of</span> <span
  m="1612820">the</span> <span m="1612900">different</span> <span
  m="1613240">growth</span> <span m="1613550">rate</span> <span
  m="1613750">measurements</span> <span m="1614340">across</span> <span
  m="1614660">those</span> <span m="1614820">48</span> <span
  m="1615270">samples,</span> <span m="1616700">and</span> <span
  m="1616790">actually,</span> <span m="1617010">in this</span> <span
  m="1617150">case,</span> <span m="1617340">even</span> <span
  m="1618290">more</span> <span m="1618520">than</span> <span
  m="1618650">that.</span> <span m="1621960">But</span> <span
  m="1622080">what</span> <span m="1622190">you</span> <span
  m="1622260">see</span> <span m="1622400">is</span> <span
  m="1622520">that</span> <span m="1623260">the</span> <span
  m="1623680">standard deviation</span> <span m="1624160">might</span> <span
  m="1624430">be</span> <span m="1625070">3%,</span> <span
  m="1626380">4%.</span></p><p><span m="1628210">So</span> <span
  m="1628330">the</span> <span m="1628410">standard</span> <span
  m="1628750">deviation</span> <span m="1629830">is</span> <span
  m="1630030">actually</span> <span m="1630470">something</span> <span
  m="1630880">that's</span> <span m="1634540">big.</span> <span
  m="1636400">Now</span> <span m="1636510">the</span> <span
  m="1636590">question</span> <span m="1636950">is,</span> <span
  m="1637990">what</span> <span m="1638230">we</span> <span
  m="1638380">really</span> <span m="1638570">want</span> <span
  m="1638730">to</span> <span m="1638780">now</span> <span
  m="1639090">is,</span> <span m="1639730">how</span> <span
  m="1640040">the</span> <span m="1640180">mean</span> <span
  m="1640540">of</span> <span m="1640610">these</span> <span
  m="1640820">distributions</span> <span m="1641370">are</span> <span
  m="1641600">shifting,</span> <span m="1641800">because we</span> <span
  m="1641890">want</span> <span m="1642070">to</span> <span
  m="1642120">know</span> <span m="1642850">something</span> <span
  m="1643160">about</span> <span m="1643300">this</span> <span
  m="1643490">true</span> <span m="1645400">underlying</span> <span
  m="1646040">growth</span> <span m="1646410">rate</span> <span
  m="1646770">deficit,</span> <span m="1647600">because</span> <span
  m="1648390">each</span> <span m="1648610">individual</span> <span
  m="1648930">measurement</span> <span m="1649330">is a</span> <span
  m="1650120">rather</span> <span m="1650380">noisy</span> <span
  m="1650770">measurement.</span></p><p><span m="1652750">And</span> <span
  m="1652850">indeed,</span> <span m="1653330">in</span> <span
  m="1653410">this</span> <span m="1653530">case,</span> <span
  m="1653720">the</span> <span m="1653810">noise</span> <span
  m="1654340">is</span> <span m="1654460">larger</span> <span
  m="1654780">than</span> <span m="1654930">the</span> <span
  m="1655000">signal.</span> <span m="1656500">But</span> <span
  m="1656750">if</span> <span m="1656900">we</span> <span
  m="1657060">believe</span> <span m="1657660">that</span> <span
  m="1657810">we</span> <span m="1657950">don't</span> <span
  m="1658170">have</span> <span m="1658320">a</span> <span
  m="1658380">shifting</span> <span m="1658830">systematic</span> <span
  m="1659460">error,</span> <span m="1659770">then</span> <span
  m="1659910">we</span> <span m="1660010">can</span> <span
  m="1660140">average</span> <span m="1660540">that</span> <span
  m="1660680">out</span> <span m="1661640">just</span> <span
  m="1661900">by</span> <span m="1662210">making</span> <span
  m="1662480">many</span> <span m="1662650">measurements.</span></p><p><span
  m="1669290">So</span> <span m="1669350">the</span> <span
  m="1669410">question</span> <span m="1669780">is,</span> <span
  m="1670530">so</span> <span m="1670680">the</span> <span
  m="1670770">standard</span> <span m="1671210">error</span> <span
  m="1671400">of</span> <span m="1671500">the</span> <span
  m="1671600">mean,</span> <span m="1671790">what</span> <span
  m="1671940">it's</span> <span m="1672110">telling</span> <span
  m="1672480">us</span> <span m="1672590">about</span> <span
  m="1673930">is</span> <span m="1674760">that</span> <span
  m="1676380">if</span> <span m="1676780">you</span> <span
  m="1676880">measure</span> <span m="1677220">this</span> <span
  m="1677410">quantity</span> <span m="1677910">n</span> <span
  m="1678190">times,</span> <span m="1678800">you</span> <span
  m="1678900">get</span> <span m="1679120">some</span> <span
  m="1679450">mean.</span> <span m="1683420">So</span> <span
  m="1684110">let's</span> <span m="1684270">say</span> <span
  m="1684350">that</span> <span m="1684490">this</span> <span
  m="1684700">is</span> <span m="1684830">a--</span> <span
  m="1685650">ooh,</span> <span m="1686030">it's</span> <span
  m="1686140">a</span> <span m="1686180">little</span> <span
  m="1686350">bit</span> <span m="1686460">of</span> <span m="1686980">a</span>
  <span m="1687020">broad</span> <span m="1687630">somehow</span> <span
  m="1687960">Gaussian.</span></p><p><span m="1694250">So</span> <span
  m="1694380">this</span> <span m="1694550">is</span> <span m="1695400">a</span>
  <span m="1695620">histogram</span> <span m="1696050">of</span> <span
  m="1696190">our</span> <span m="1696320">measurements</span> <span
  m="1697100">of</span> <span m="1697220">this</span> <span
  m="1697370">thing.</span> <span m="1698520">And</span> <span
  m="1698780">what</span> <span m="1698930">we</span> <span
  m="1699040">want</span> <span m="1699180">to</span> <span
  m="1699220">know</span> <span m="1700280">is</span> <span
  m="1702470">the</span> <span m="1702560">mean</span> <span
  m="1702830">of</span> <span m="1702890">this</span> <span
  m="1703060">distribution.</span> <span m="1703840">So</span> <span
  m="1703900">this</span> <span m="1704050">is</span> <span
  m="1704140">similar</span> <span m="1704610">to</span> <span
  m="1704800">our</span> <span m="1705000">discussion</span> <span
  m="1705880">of</span> <span m="1706150">super</span> <span
  m="1706400">resolution</span> <span m="1706830">microscopy.</span></p><p><span
  m="1709440">And</span> <span m="1709900">the</span> <span
  m="1709970">question</span> <span m="1710250">is,</span> <span
  m="1711070">how</span> <span m="1711240">will</span> <span
  m="1711350">the</span> <span m="1711440">mean</span> <span
  m="1711850">be</span> <span m="1711960">distributed</span> <span
  m="1712490">if</span> <span m="1712610">you</span> <span
  m="1712710">have</span> <span m="1713680">these</span> <span
  m="1713920">n</span> <span m="1714160">measurements?</span> <span
  m="1720070">It's a</span> <span m="1720170">Gaussian</span> <span
  m="1720680">distribution.</span> <span m="1722240">And</span> <span
  m="1723310">it's</span> <span m="1723520">certainly</span> <span
  m="1723880">a</span> <span m="1723930">Gaussian</span> <span
  m="1724220">distribution,</span> <span m="1724660">because</span> <span
  m="1724990">of</span> <span m="1725100">course,</span> <span
  m="1725410">if</span> <span m="1725860">we--</span> <span
  m="1726125">what</span> <span m="1726390">we're</span> <span
  m="1726470">doing</span> <span m="1726640">is</span> <span
  m="1726710">we're</span> <span m="1726830">measuring</span> <span
  m="1727310">a</span> <span m="1727360">bunch</span> <span
  m="1727580">of</span> <span m="1727660">Gaussians.</span></p><p><span
  m="1728480">And</span> <span m="1728680">we're</span> <span
  m="1730270">going</span> <span m="1730360">to</span> <span
  m="1730440">add</span> <span m="1730780">them</span> <span
  m="1730830">all</span> <span m="1731220">together.</span> <span
  m="1731650">And</span> <span m="1731750">then</span> <span
  m="1731880">we're</span> <span m="1732000">going</span> <span
  m="1732080">to</span> <span m="1732320">calculate</span> <span
  m="1732730">the</span> <span m="1732810">mean.</span> <span
  m="1733020">So</span> <span m="1733180">we</span> <span
  m="1733310">definitely</span> <span m="1733650">get a</span> <span
  m="1734170">Gaussian.</span> <span m="1736120">And</span> <span
  m="1736260">indeed,</span> <span m="1737870">because</span> <span
  m="1738140">of the</span> <span m="1738250">central</span> <span
  m="1738580">limit</span> <span m="1738780">theorem,</span> <span
  m="1738980">this is</span> <span m="1739090">also</span> <span
  m="1739200">saying</span> <span m="1739280">that</span> <span
  m="1739500">even</span> <span m="1739810">if</span> <span
  m="1739930">your</span> <span m="1740190">errors</span> <span
  m="1740840">were</span> <span m="1740980">not</span> <span
  m="1741150">distributed</span> <span m="1741660">super</span> <span
  m="1742180">Gaussian,</span> <span m="1743800">even</span> <span
  m="1743990">if</span> <span m="1744100">they</span> <span
  m="1745030">were</span> <span m="1745200">a</span> <span
  m="1745300">little</span> <span m="1745360">bit</span> <span
  m="1745520">funny</span> <span m="1745710">shaped,</span> <span
  m="1746300">the</span> <span m="1746400">resulting</span> <span
  m="1746780">distributions</span> <span m="1747350">of</span> <span
  m="1747430">the</span> <span m="1747520">means</span> <span
  m="1747950">will</span> <span m="1748300">look</span> <span
  m="1748540">more</span> <span m="1748800">like</span> <span
  m="1748980">a</span> <span m="1749120">Gaussian.</span></p><p><span
  m="1753320">Now,</span> <span m="1753740">what</span> <span
  m="1753920">we</span> <span m="1754050">often</span> <span
  m="1754530">plot</span> <span m="1755830">is</span> <span
  m="1756040">the</span> <span m="1756120">standard</span> <span
  m="1756460">error</span> <span m="1756650">of</span> <span
  m="1756750">the</span> <span m="1756760">mean,</span> <span
  m="1757240">which</span> <span m="1757530">is</span> <span
  m="1757650">kind</span> <span m="1757880">of</span> <span
  m="1758260">the</span> <span m="1758600">plus</span> <span
  m="1758980">or</span> <span m="1759030">minus</span> <span
  m="1759780">1</span> <span m="1760650">sigma</span> <span
  m="1761330">of</span> <span m="1761560">the</span> <span
  m="1761660">distribution</span> <span m="1762260">of</span> <span
  m="1762680">the</span> <span m="1762850">mean.</span> <span
  m="1764490">So</span> <span m="1764690">if</span> <span m="1764870">we</span>
  <span m="1764990">go</span> <span m="1765220">and</span> <span
  m="1765880">we</span> <span m="1766090">sample</span> <span
  m="1766450">from</span> <span m="1766580">this</span> <span
  m="1766730">distribution</span> <span m="1767210">n</span> <span
  m="1767380">times,</span> <span m="1768070">we'll</span> <span
  m="1768280">get</span> <span m="1768460">some</span> <span
  m="1768730">value.</span> <span m="1769380">If</span> <span
  m="1769650">we</span> <span m="1769740">sample</span> <span m="1770000">from
  it</span> <span m="1770130">again,</span> <span m="1770450">we'll</span> <span
  m="1770590">get</span> <span m="1770680">some</span> <span
  m="1770800">other</span> <span m="1770930">value,</span> <span
  m="1771940">so</span> <span m="1772020">forth.</span></p><p><span
  m="1772670">Now,</span> <span m="1772850">the</span> <span
  m="1772960">distribution</span> <span m="1773510">of</span> <span
  m="1773570">the</span> <span m="1773650">means</span> <span
  m="1773980">we're</span> <span m="1774050">going</span> <span
  m="1774130">to</span> <span m="1774170">calculate</span> <span
  m="1774490">is</span> <span m="1774600">not</span> <span
  m="1774880">going</span> <span m="1774980">to</span> <span
  m="1775020">be</span> <span m="1775160">a</span> <span
  m="1775330">representation</span> <span m="1775920">of</span> <span
  m="1775980">the</span> <span m="1776050">full</span> <span
  m="1777060">standard</span> <span m="1777400">deviation.</span> <span
  m="1778450">But</span> <span m="1778610">rather,</span> <span
  m="1778950">it's</span> <span m="1779060">going</span> <span
  m="1779140">to</span> <span m="1779180">be</span> <span
  m="1779230">suppressed</span> <span m="1780150">by</span> <span
  m="1780320">this</span> <span m="1780420">root</span> <span
  m="1780630">n,</span> <span m="1781000">where</span> <span
  m="1781200">n</span> <span m="1781400">is</span> <span m="1781510">the</span>
  <span m="1781590">number</span> <span m="1781800">that</span> <span
  m="1781880">we're</span> <span m="1781990">sampling.</span></p><p><span
  m="1782790">So</span> <span m="1782820">if</span> <span m="1782880">you</span>
  <span m="1783610">look</span> <span m="1783820">at</span> <span
  m="1783910">the</span> <span m="1783970">histogram</span> <span
  m="1784490">of</span> <span m="1784620">the</span> <span
  m="1784700">means,</span> <span m="1785510">you're</span> <span
  m="1785610">going</span> <span m="1785690">to</span> <span
  m="1785730">get</span> <span m="1785860">a</span> <span
  m="1785890">Gaussian</span> <span m="1786170">in</span> <span
  m="1786440">here--</span> <span m="1787010">OK,</span> <span
  m="1787450">that's</span> <span m="1787710">not</span> <span
  m="1787840">a</span> <span m="1787860">very</span> <span
  m="1787990">nice</span> <span m="1788190">Gaussian,</span> <span
  m="1788650">but--</span> <span m="1791950">with</span> <span
  m="1792440">a</span> <span m="1792490">width</span> <span
  m="1793290">that</span> <span m="1794860">is</span> <span
  m="1795100">the</span> <span m="1796700">standard</span> <span
  m="1797020">deviation</span> <span m="1797340">divided by</span> <span
  m="1797570">root n.</span></p><p><span m="1801800">Now,</span> <span
  m="1802410">if</span> <span m="1802560">we</span> <span
  m="1802670">assume</span> <span m="1803130">that</span> <span
  m="1803230">we</span> <span m="1803370">don't</span> <span
  m="1803640">have</span> <span m="1803830">any</span> <span
  m="1804170">systematic</span> <span m="1804760">error,</span> <span
  m="1806360">then</span> <span m="1807270">this</span> <span
  m="1808840">distribution</span> <span m="1809800">of</span> <span
  m="1809940">means</span> <span m="1810360">that</span> <span
  m="1810500">you</span> <span m="1810660">would</span> <span
  m="1810910">have</span> <span m="1811360">calculated--</span> <span
  m="1812650">it's</span> <span m="1813090">Gaussian,</span> <span
  m="1813480">it's</span> <span m="1813670">centered</span> <span
  m="1813960">on</span> <span m="1814060">the</span> <span
  m="1814130">right</span> <span m="1814310">value,</span> <span
  m="1814940">but</span> <span m="1817820">about</span> <span
  m="1818030">a</span> <span m="1818080">third</span> <span
  m="1818370">of</span> <span m="1818420">the</span> <span
  m="1818490">time,</span> <span m="1818890">it'll</span> <span
  m="1819680">be</span> <span m="1820310">beyond</span> <span
  m="1820750">the</span> <span m="1820840">plus</span> <span
  m="1821060">or</span> <span m="1821110">minus</span> <span
  m="1821340">1</span> <span m="1821510">sigma.</span></p><p><span
  m="1823230">And</span> <span m="1823740">what</span> <span
  m="1823870">that</span> <span m="1824020">means</span> <span
  m="1824280">is</span> <span m="1824400">that</span> <span
  m="1826430">about</span> <span m="1826650">a</span> <span
  m="1826710">third</span> <span m="1826960">of</span> <span
  m="1827070">time,</span> <span m="1827710">if</span> <span
  m="1827830">you</span> <span m="1827970">plot</span> <span
  m="1828320">this</span> <span m="1828570">standard</span> <span
  m="1828825">error of</span> <span m="1829080">the</span> <span
  m="1829140">mean,</span> <span m="1829370">it</span> <span
  m="1829460">should</span> <span m="1829820">fall</span> <span
  m="1830170">off</span> <span m="1830520">of</span> <span
  m="1830880">the</span> <span m="1831090">kind</span> <span
  m="1831210">of</span> <span m="1831300">true</span> <span
  m="1831670">curve.</span> <span m="1836060">And</span> <span
  m="1836280">this</span> <span m="1837630">basically</span> <span
  m="1838190">does</span> <span m="1838320">not</span> <span
  m="1838520">depend</span> <span m="1838780">on</span> <span
  m="1838910">n.</span> <span m="1841330">And</span> <span
  m="1841360">can</span> <span m="1841510">somebody</span> <span
  m="1841720">say</span> <span m="1841880">why</span> <span
  m="1843140">it</span> <span m="1843280">doesn't?</span> <span
  m="1845182">Yeah.</span></p><p><span m="1846150">AUDIENCE:</span> <span
  m="1846634">Yeah,</span> <span m="1847118">I think</span> <span m="1847602">I
  was sort of</span> <span m="1848086">confusing</span> <span
  m="1848570">myself,</span> <span m="1849054">but</span> <span m="1849538">this
  makes</span> <span m="1850022">sense.</span> <span m="1850506">So</span> <span
  m="1850990">yeah,</span> <span m="1851474">I mean,</span> <span
  m="1852926">you know that</span> <span m="1853410">these</span> <span
  m="1853895">error bars</span> <span m="1854380">will</span> <span
  m="1854600">shrink,</span> <span m="1855081">if you</span> <span
  m="1855562">take more</span> <span m="1856043">measurements.</span> <span
  m="1856524">But on the</span> <span m="1857005">other hand,</span> <span
  m="1858450">the</span> <span m="1858570">actual</span> <span
  m="1858920">measurements</span> <span m="1859420">will</span> <span
  m="1859560">be</span> <span m="1859720">closer--</span></p><p><span
  m="1860150">PROFESSOR:</span> <span m="1860510">That's</span> <span
  m="1860650">right.</span></p><p><span m="1861090">AUDIENCE: --to</span> <span
  m="1861600">the</span> <span m="1861976">true value.</span></p><p><span
  m="1862352">PROFESSOR:</span> <span m="1862730">That's</span> <span
  m="1862900">right.</span> <span m="1863240">So</span> <span
  m="1863380">what</span> <span m="1863510">happens</span> <span m="1863860">is
  that</span> <span m="1864050">as</span> <span m="1864390">you</span> <span
  m="1864900">sample</span> <span m="1865510">from</span> <span
  m="1865760">this</span> <span m="1865950">distribution</span> <span
  m="1866450">a</span> <span m="1866490">larger</span> <span
  m="1866800">number</span> <span m="1867140">n</span> <span
  m="1867360">times,</span> <span m="1868160">then</span> <span
  m="1868350">your</span> <span m="1868570">error</span> <span
  m="1868820">bars</span> <span m="1869060">shrink,</span> <span
  m="1869400">but</span> <span m="1869590">your</span> <span
  m="1869910">measurements</span> <span m="1870420">get</span> <span
  m="1870560">closer</span> <span m="1871090">to</span> <span
  m="1871200">the</span> <span m="1871300">curve.</span> <span
  m="1872230">And</span> <span m="1872360">those</span> <span
  m="1872570">two</span> <span m="1872700">effects</span> <span
  m="1873250">cancel.</span> <span m="1874170">So</span> <span
  m="1874310">you</span> <span m="1874960">should</span> <span
  m="1875270">end</span> <span m="1875450">up</span> <span
  m="1875560">roughly</span> <span m="1875830">with</span> <span
  m="1877290">2/3</span> <span m="1878340">of</span> <span m="1878460">the
  errors</span> <span m="1878660">bars</span> <span
  m="1879220">containing</span> <span m="1879480">this</span> <span
  m="1879740">curve, or</span> <span m="1880050">1/3</span> <span
  m="1880490">falling</span> <span m="1880810">off.</span></p><p><span
  m="1883200">And</span> <span m="1883320">I</span> <span
  m="1883370">think</span> <span m="1883500">that</span> <span
  m="1883830">this</span> <span m="1884090">is</span> <span m="1884930">a</span>
  <span m="1885030">little</span> <span m="1885270">bit</span> <span
  m="1885400">surprising,</span> <span m="1885890">because</span> <span
  m="1885960">there's</span> <span m="1886100">always</span> <span
  m="1886510">a</span> <span m="1886580">sense</span> <span
  m="1887130">that</span> <span m="1887290">we</span> <span
  m="1887470">feel</span> <span m="1888020">that</span> <span
  m="1889540">there's</span> <span m="1889940">something</span> <span
  m="1890490">wrong</span> <span m="1890980">with</span> <span
  m="1891130">our</span> <span m="1891600">measurements</span> <span
  m="1892380">or</span> <span m="1892470">something</span> <span
  m="1892790">wrong</span> <span m="1893210">with</span> <span
  m="1893370">our</span> <span m="1894430">model</span> <span
  m="1895120">or</span> <span m="1895460">whatnot,</span> <span
  m="1895900">if</span> <span m="1897090">any</span> <span
  m="1897360">error</span> <span m="1899810">bar</span> <span
  m="1900030">does</span> <span m="1900150">not</span> <span
  m="1900320">contain</span> <span m="1900680">the</span> <span
  m="1900760">line.</span></p><p><span m="1901210">I</span> <span
  m="1901240">mean,</span> <span m="1901580">I</span> <span
  m="1901730">feel</span> <span m="1901940">like</span> <span
  m="1902130">I</span> <span m="1902290">often</span> <span
  m="1902700">see</span> <span m="1902960">there's</span> <span
  m="1903610">this</span> <span m="1903740">effort</span> <span
  m="1904060">that</span> <span m="1904180">people</span> <span
  m="1904420">have</span> <span m="1904710">to</span> <span
  m="1904840">try</span> <span m="1905060">to</span> <span
  m="1905520">make</span> <span m="1905760">it</span> <span
  m="1905930">so</span> <span m="1906050">that</span> <span
  m="1909520">these</span> <span m="1909700">error</span> <span
  m="1909870">bars</span> <span m="1910290">always</span> <span
  m="1910680">overlap</span> <span m="1911220">with</span> <span
  m="1911540">some</span> <span m="1912290">underlying</span> <span
  m="1912740">curve</span> <span m="1913250">that is</span> <span
  m="1913350">supposed to</span> <span m="1913780">represent</span> <span
  m="1914260">reality.</span> <span m="1914830">But</span> <span
  m="1916870">that's</span> <span m="1917100">not,</span> <span
  m="1917590">in</span> <span m="1917680">principle,</span> <span
  m="1918030">supposed</span> <span m="1918330">to</span> <span
  m="1918370">be</span> <span m="1918450">true.</span></p><p><span
  m="1922016">Are there</span> <span m="1922470">any</span> <span
  m="1922570">questions</span> <span m="1922920">about</span> <span
  m="1923200">where</span> <span m="1923370">we</span> <span m="1923460">are
  right</span> <span m="1923660">now?</span> <span m="1925772">OK.</span> <span
  m="1927580">Now,</span> <span m="1928880">what</span> <span
  m="1929060">I</span> <span m="1929090">want</span> <span m="1929220">to</span>
  <span m="1929260">do is</span> <span m="1929360">something</span> <span
  m="1929580">slightly</span> <span m="1929840">different,</span> <span
  m="1930160">which</span> <span m="1930210">is</span> <span
  m="1930410">ask--</span> <span m="1931380">let's</span> <span
  m="1931610">say</span> <span m="1931740">that</span> <span
  m="1931910">this</span> <span m="1932110">is</span> <span m="1932240">a</span>
  <span m="1932380">curve</span> <span m="1933730">that</span> <span
  m="1933830">is</span> <span m="1933930">not</span> <span
  m="1935560">the</span> <span m="1935770">underlying</span> <span
  m="1936350">reality</span> <span m="1936830">but</span> <span
  m="1936940">is</span> <span m="1937020">instead</span> <span
  m="1938170">a</span> <span m="1938300">fit</span> <span m="1938720">to</span>
  <span m="1938860">the</span> <span m="1938970">data.</span> <span
  m="1941920">How</span> <span m="1942160">does</span> <span
  m="1942340">this</span> <span m="1942650">change</span> <span
  m="1947420">anything that</span> <span m="1947800">we've</span> <span
  m="1947940">said?</span> <span m="1951310">Or</span> <span m="1951430">does
  it?</span></p><p><span m="1953462">All right,</span> <span
  m="1953900">well,</span> <span m="1954100">OK,</span> <span
  m="1954300">let's--</span> <span m="1957444">OK,</span> <span m="1957880">so
  we're</span> <span m="1958130">going to say</span> <span m="1958470">do</span>
  <span m="1958530">fit.</span> <span m="1959510">The</span> <span
  m="1960000">question</span> <span m="1960320">is</span> <span
  m="1961310">does</span> <span m="1962150">this</span> <span
  m="1962380">change</span> <span m="1965120">the</span> <span
  m="1965610">thing</span> <span m="1965750">here?</span> <span
  m="1966000">Do</span> <span m="1966270">you</span> <span
  m="1966370">understand?</span> <span m="1971950">Change,</span> <span
  m="1974110">A</span> <span m="1974500">is</span> <span m="1974880">Yes,</span>
  <span m="1976610">B</span> <span m="1976930">is</span> <span
  m="1977150">No.</span> <span m="1982273">Yes.</span></p><p><span
  m="1982770">AUDIENCE:</span> <span m="1983267">Do you have the same</span>
  <span m="1983764">modeling</span> <span m="1984758">for</span> <span
  m="1985255">the fit</span> <span m="1985752">as we did</span> <span
  m="1986249">for</span> <span m="1986746">the</span> <span
  m="1987243">original--</span></p><p><span m="1987740">PROFESSOR:</span> <span
  m="1988240">Yeah, well,</span> <span m="1988300">let's</span> <span
  m="1988540">say</span> <span m="1988660">that</span> <span
  m="1988990">this</span> <span m="1990990">was</span> <span
  m="1991120">a</span> <span m="1991210">curve</span> <span
  m="1991710">predicted</span> <span m="1992190">by</span> <span
  m="1992430">some</span> <span m="1992710">fancy</span> <span
  m="1993190">theory</span> <span m="1994310">but</span> <span
  m="1996680">that</span> <span m="1996810">you</span> <span
  m="1996900">have</span> <span m="1997030">to</span> <span
  m="1997110">specify</span> <span m="1999920">the</span> <span
  m="2000020">mass</span> <span m="2000420">of</span> <span
  m="2000510">something</span> <span m="2001100">and</span> <span
  m="2001260">the--</span> <span m="2001710">so I don't know,</span> <span
  m="2001840">there are</span> <span m="2002220">two</span> <span
  m="2002740">things</span> <span m="2002920">that are</span> <span
  m="2002990">specified.</span> <span m="2003490">So</span> <span
  m="2003610">what</span> <span m="2003730">you</span> <span
  m="2003780">do</span> <span m="2003920">is you</span> <span
  m="2004020">fit.</span></p><p><span m="2005390">And</span> <span
  m="2005540">the</span> <span m="2005610">question</span> <span
  m="2005950">is,</span> <span m="2006190">does</span> <span
  m="2006370">it</span> <span m="2006470">change</span> <span
  m="2007270">what</span> <span m="2007440">fraction</span> <span
  m="2007810">of</span> <span m="2007850">the error</span> <span
  m="2008090">bars</span> <span m="2008360">you</span> <span
  m="2008460">expect</span> <span m="2009530">to</span> <span
  m="2009640">contain</span> <span m="2010120">the</span> <span
  m="2010190">true</span> <span m="2010400">curve?</span> <span
  m="2012320">Ready?</span> <span m="2014100">Is it</span> <span
  m="2014240">not</span> <span m="2014460">clear</span> <span
  m="2014650">what</span> <span m="2014730">I'm</span> <span
  m="2014830">asking?</span></p><p><span m="2015647">AUDIENCE:</span> <span
  m="2016144">But</span> <span m="2016641">the true curve</span> <span
  m="2017138">is</span> <span m="2017635">determined by</span> <span
  m="2018132">the</span> <span m="2018629">god.</span></p><p><span
  m="2019623">[LAUGHTER]</span></p><p><span m="2020617">PROFESSOR:</span> <span
  m="2021120">Right,</span> <span m="2021360">so</span> <span
  m="2021450">the</span> <span m="2021550">truth</span> <span
  m="2021860">curves--</span> <span m="2022650">we</span> <span
  m="2022770">don't</span> <span m="2022890">need</span> <span
  m="2023010">to</span> <span m="2023050">get</span> <span
  m="2023480">too</span> <span m="2023710">much</span> <span
  m="2023970">into</span> <span m="2024140">this.</span> <span
  m="2026750">But</span> <span m="2027000">I</span> <span
  m="2027150">mean,</span> <span m="2028320">the</span> <span
  m="2028400">reason</span> <span m="2028650">we're</span> <span
  m="2028790">doing</span> <span m="2029160">science</span> <span
  m="2029670">is</span> <span m="2029800">to</span> <span m="2029950">try</span>
  <span m="2031160">to</span> <span m="2031460">look</span> <span
  m="2031610">into</span> <span m="2031730">the</span> <span
  m="2031810">mind</span> <span m="2032150">of</span> <span
  m="2032240">God,</span> <span m="2032530">right?</span> <span
  m="2032730">So</span> <span m="2032820">we</span> <span
  m="2033020">were</span> <span m="2033130">doing</span> <span
  m="2033350">a</span> <span m="2033410">fit</span> <span m="2034280">to</span>
  <span m="2034420">try</span> <span m="2034630">to--</span></p><p><span
  m="2035140">AUDIENCE:</span> <span m="2035634">But</span> <span
  m="2036128">you</span> <span m="2036622">can fit</span> <span
  m="2037116">anything</span> <span m="2037610">to anything.</span> <span
  m="2038104">You know,</span> <span m="2038598">what does that</span> <span
  m="2039092">mean?</span> <span m="2040985">Do you</span> <span m="2041390">see
  what</span> <span m="2041650">I mean?</span> <span m="2041910">Like,</span>
  <span m="2042385">I could--</span></p><p><span m="2042860">AUDIENCE: It
  depends on</span> <span m="2043335">whether--</span></p><p><span
  m="2043810">AUDIENCE: I could</span> <span m="2044000">get curve</span> <span
  m="2044500">that</span> <span m="2045040">passes</span> <span
  m="2045375">through</span> <span m="2045960">each</span> <span m="2046290">and
  every</span> <span m="2046738">of these points</span> <span
  m="2047186">points,</span> <span m="2048082">if</span> <span m="2048530">you
  give</span> <span m="2048978">me enough</span> <span m="2049426">time
  with</span> <span m="2049874">it.</span> <span m="2050330">So</span> <span
  m="2050590">I guess</span> <span m="2051062">I don't understand</span> <span
  m="2051534">the question.</span></p><p><span m="2052950">[INTERPOSING
  VOICES].</span></p><p><span m="2059494">PROFESSOR:</span> <span
  m="2059969">All right,</span> <span m="2060300">yeah.</span> <span
  m="2060650">OK,</span> <span m="2061070">but</span> <span m="2061270">I</span>
  <span m="2061340">think</span> <span m="2061729">you're</span> <span
  m="2061989">arguing</span> <span m="2062310">for</span> <span
  m="2062460">something</span> <span m="2062889">already</span> <span
  m="2063409">maybe.</span> <span m="2064820">But</span> <span
  m="2065310">let's</span> <span m="2065469">just</span> <span
  m="2065600">say</span> <span m="2065790">that</span> <span
  m="2065929">this</span> <span m="2066060">was a--</span> <span m="2066540">I
  mean,</span> <span m="2068870">let's</span> <span m="2069219">just</span>
  <span m="2069429">for</span> <span m="2069540">concreteness</span> <span
  m="2070010">let's</span> <span m="2070179">say</span> <span
  m="2070350">that</span> <span m="2070469">I</span> <span
  m="2070590">measured</span> <span m="2072040">at</span> <span
  m="2072460">15</span> <span m="2073969">values</span> <span
  m="2074380">of</span> <span m="2074480">x.</span> <span m="2075340">I</span>
  <span m="2075460">have</span> <span m="2075650">some</span> <span
  m="2075850">error</span> <span m="2076270">bars</span> <span m="2076639">and
  some error.</span></p><p><span m="2077630">But</span> <span
  m="2077880">then</span> <span m="2078320">I</span> <span
  m="2078500">needed</span> <span m="2078790">three</span> <span
  m="2079949">parameters</span> <span m="2080530">to</span> <span
  m="2080600">characterize</span> <span m="2081210">this</span> <span
  m="2081420">curve.</span> <span m="2081880">And</span> <span
  m="2082040">so</span> <span m="2082150">those</span> <span
  m="2082650">I</span> <span m="2082710">used</span> <span m="2083020">to</span>
  <span m="2083090">fit.</span> <span m="2085330">Are</span> <span
  m="2085409">you</span> <span m="2085469">happier</span> <span
  m="2085850">with</span> <span m="2086239">three</span> <span
  m="2086489">fitting</span> <span m="2086699">parameters</span> <span
  m="2087120">and</span> <span m="2087199">15</span> <span
  m="2087699">measurements?</span> <span m="2090600">All right,</span> <span
  m="2090739">let's</span> <span m="2090889">just</span> <span
  m="2090980">see</span> <span m="2091110">where</span> <span
  m="2091219">we</span> <span m="2091320">are.</span> <span
  m="2091449">OK,</span> <span m="2091639">ready,</span> <span
  m="2092360">3,</span> <span m="2093210">2,</span> <span
  m="2093909">1.</span></p><p><span m="2096460">OK,</span> <span
  m="2096730">so</span> <span m="2096949">we</span> <span
  m="2097080">have</span> <span m="2098050">a</span> <span
  m="2098140">majority</span> <span m="2098720">of A</span> <span
  m="2098810">but</span> <span m="2099240">a</span> <span
  m="2099290">significant</span> <span m="2099790">minority</span> <span
  m="2100220">of</span> <span m="2100370">B.</span> <span m="2102200">So</span>
  <span m="2103140">just</span> <span m="2103330">to</span> <span
  m="2103470">be</span> <span m="2103720">a</span> <span m="2103780">lot</span>
  <span m="2103890">more</span> <span m="2104080">concrete,</span> <span
  m="2104540">can</span> <span m="2104640">somebody</span> <span
  m="2104840">say</span> <span m="2105040">why</span> <span
  m="2105270">they're</span> <span m="2105400">saying</span> <span
  m="2105770">yes?</span> <span m="2113605">Yeah.</span></p><p><span
  m="2114094">AUDIENCE: I guess</span> <span m="2115072">intuitively,</span>
  <span m="2116539">[INAUDIBLE]</span> <span m="2117028">we try to</span> <span
  m="2117517">optimize</span> <span m="2118495">the number of</span> <span
  m="2118984">error bars</span> <span m="2119473">that go
  through.</span></p><p><span m="2119962">PROFESSOR:</span> <span
  m="2120451">Yeah,</span> <span m="2120940">so</span> <span
  m="2121090">the</span> <span m="2121180">fit</span> <span
  m="2121450">is</span> <span m="2121590">somehow</span> <span
  m="2121800">trying</span> <span m="2122370">to</span> <span
  m="2122440">get</span> <span m="2122660">the</span> <span
  m="2122740">curve</span> <span m="2123230">to</span> <span
  m="2123290">go</span> <span m="2124090">near</span> <span
  m="2124650">the</span> <span m="2124800">error</span> <span
  m="2125040">bars.</span> <span m="2125950">And</span> <span
  m="2126260">typically</span> <span m="2126650">when</span> <span
  m="2126780">we</span> <span m="2126890">do</span> <span m="2127010">a</span>
  <span m="2127150">fit,</span> <span m="2127320">we're</span> <span
  m="2127470">typically</span> <span m="2127820">trying</span> <span
  m="2128060">to</span> <span m="2128110">minimize</span> <span
  m="2128570">this</span> <span m="2128810">mean</span> <span
  m="2129210">squared</span> <span m="2130180">error</span> <span
  m="2130610">or</span> <span m="2130730">deviation</span> <span
  m="2131690">from</span> <span m="2132360">our</span> <span
  m="2132540">curve</span> <span m="2132910">to</span> <span
  m="2133660">the</span> <span m="2133880">data point.</span></p><p><span
  m="2138940">How</span> <span m="2139490">much</span> <span
  m="2139850">you</span> <span m="2140140">expect</span> <span
  m="2140250">this</span> <span m="2140410">to</span> <span
  m="2140670">make</span> <span m="2140860">a</span> <span
  m="2140910">difference?</span> <span m="2141850">So</span> <span
  m="2141990">for</span> <span m="2142160">concreteness</span> <span
  m="2142640">again,</span> <span m="2142890">let's</span> <span
  m="2143050">say</span> <span m="2143130">that</span> <span
  m="2143240">I</span> <span m="2143320">had</span> <span m="2143490">15</span>
  <span m="2145540">values</span> <span m="2145910">of</span> <span
  m="2145980">x</span> <span m="2150670">that</span> <span m="2151050">I</span>
  <span m="2151090">was</span> <span m="2151250">measuring</span> <span
  m="2151560">things</span> <span m="2151700">at.</span> <span
  m="2153300">Now,</span> <span m="2155050">we</span> <span
  m="2155180">expect</span> <span m="2156170">say</span> <span
  m="2156370">five</span> <span m="2156970">of</span> <span
  m="2157020">them--</span> <span m="2158140">five</span> <span
  m="2158720">will</span> <span m="2159610">miss</span> <span m="2160070">true
  curve,</span> <span m="2162940">we</span> <span m="2163050">decided</span>
  <span m="2165380">roughly.</span></p><p><span m="2166590">Now</span> <span
  m="2166690">the</span> <span m="2166770">question</span> <span
  m="2167140">is,</span> <span m="2169620">what</span> <span
  m="2169740">happens</span> <span m="2169780">if</span> <span
  m="2170000">we,</span> <span m="2170470">instead</span> <span
  m="2170720">of</span> <span m="2170780">having</span> <span
  m="2170940">this</span> <span m="2171070">true</span> <span
  m="2171260">curve,</span> <span m="2171510">if</span> <span
  m="2171630">we</span> <span m="2172050">do</span> <span m="2172150">a</span>
  <span m="2172200">fit</span> <span m="2172660">using</span> <span
  m="2172910">these</span> <span m="2173100">three</span> <span
  m="2173370">parameters?</span> <span m="2175800">How</span> <span
  m="2175940">much</span> <span m="2176150">of a</span> <span
  m="2176220">difference</span> <span m="2176550">should it</span> <span
  m="2176830">make</span> <span m="2178930">to</span> <span
  m="2179070">this</span> <span m="2179470">very,</span> <span
  m="2180270">very</span> <span m="2180580">roughly?</span></p><p><span
  m="2182390">We'll</span> <span m="2182610">see--</span> <span
  m="2192740">Now,</span> <span m="2192970">I'm</span> <span
  m="2193120">asking</span> <span m="2196310">roughly</span> <span
  m="2196620">how</span> <span m="2196740">many</span> <span
  m="2197040">of</span> <span m="2197170">these</span> <span
  m="2198270">error</span> <span m="2198480">bars do you</span> <span
  m="2198800">expect to</span> <span m="2199250">then</span> <span
  m="2199330">miss</span> <span m="2200250">the</span> <span
  m="2200410">fitted</span> <span m="2200740">curve?</span> <span
  m="2203890">And</span> <span m="2205210">this</span> <span
  m="2205370">is</span> <span m="2207030">we</span> <span
  m="2207800">used</span> <span m="2208060">three</span> <span
  m="2208370">fitting</span> <span m="2208740">parameters,</span> <span
  m="2209110">say.</span> <span m="2214610">That</span> <span
  m="2214760">was</span> <span m="2214900">parameters</span> <span
  m="2215220">over</span> <span m="2215540">there.</span></p><p><span
  m="2216640">Do</span> <span m="2216760">understand</span> <span
  m="2217020">the</span> <span m="2217080">question?</span> <span
  m="2218550">So</span> <span m="2218730">instead</span> <span
  m="2219050">of</span> <span m="2219150">plotting</span> <span
  m="2220210">this</span> <span m="2220410">god-given</span> <span
  m="2220930">curve,</span> <span m="2221190">instead</span> <span
  m="2221590">we're</span> <span m="2221720">plotting</span> <span
  m="2222550">a</span> <span m="2222630">curve</span> <span
  m="2222840">that</span> <span m="2222960">I'm</span> <span
  m="2223220">giving</span> <span m="2223420">you,</span> <span
  m="2224170">where I</span> <span m="2224290">use</span> <span
  m="2224560">three</span> <span m="2224810">fitting</span> <span
  m="2225040">parameters</span> <span m="2225960">to fit</span> <span
  m="2226230">to the</span> <span m="2226330">data.</span></p><p><span
  m="2229410">And</span> <span m="2230220">I'm</span> <span
  m="2230530">just</span> <span m="2230650">trying</span> <span m="2230830">to
  get it</span> <span m="2230960">roughly.</span> <span m="2231290">I</span>
  <span m="2231350">think that</span> <span m="2231830">this</span> <span
  m="2232100">is</span> <span m="2233860">not</span> <span m="2234140">a</span>
  <span m="2234210">rigorous</span> <span m="2234520">statement</span> <span
  m="2234810">I'm</span> <span m="2234920">about</span> <span
  m="2235070">to</span> <span m="2235150">make,</span> <span
  m="2235390">but</span> <span m="2235510">just</span> <span m="2235710">so
  that</span> <span m="2235890">we're</span> <span m="2236060">all</span> <span
  m="2236230">roughly</span> <span m="2236580">on the</span> <span
  m="2236640">same</span> <span m="2236810">page.</span> <span m="2237350">All
  right,</span> <span m="2237460">ready,</span> <span m="2238230">3,</span>
  <span m="2239180">2,</span> <span m="2240070">1.</span></p><p><span
  m="2247900">Right,</span> <span m="2248190">so</span> <span
  m="2248860">it'll</span> <span m="2249170">be</span> <span
  m="2249350">somewhere</span> <span m="2249800">in</span> <span
  m="2249890">here.</span> <span m="2251030">And</span> <span
  m="2251290">I</span> <span m="2251350">think</span> <span
  m="2251470">this</span> <span m="2251610">is</span> <span
  m="2251690">not</span> <span m="2251950">quite</span> <span
  m="2253500">true.</span> <span m="2254240">But</span> <span
  m="2254330">the</span> <span m="2254390">idea</span> <span
  m="2254770">is</span> <span m="2254980">that,</span> <span
  m="2256320">in</span> <span m="2256450">particular,</span> <span
  m="2259100">if</span> <span m="2259550">you</span> <span
  m="2259750">make</span> <span m="2261240">n</span> <span
  m="2261540">measurements</span> <span m="2262900">and</span> <span
  m="2263080">then</span> <span m="2263200">you</span> <span
  m="2263450">use</span> <span m="2264980">n</span> <span
  m="2265310">fitting</span> <span m="2265600">parameters,</span> <span
  m="2266530">in</span> <span m="2266670">general</span> <span
  m="2267190">you</span> <span m="2267660">will</span> <span
  m="2267970">get</span> <span m="2268270">a</span> <span
  m="2268380">perfect</span> <span m="2268940">fit,</span> <span
  m="2270040">i.e.</span> <span m="2270960">the</span> <span
  m="2271090">curve</span> <span m="2271540">will</span> <span
  m="2271750">go</span> <span m="2272120">through</span> <span
  m="2272620">every</span> <span m="2273100">single</span> <span
  m="2273520">data</span> <span m="2273780">point</span> <span
  m="2274320">amazingly</span> <span m="2275530">perfectly.</span></p><p><span
  m="2277170">So</span> <span m="2277410">if</span> <span m="2277510">I</span>
  <span m="2277630">give</span> <span m="2277840">you</span> <span
  m="2279560">15</span> <span m="2280050">measurements</span> <span
  m="2280470">across</span> <span m="2280820">here</span> <span
  m="2281830">and</span> <span m="2282000">then</span> <span
  m="2282280">I</span> <span m="2282380">give</span> <span
  m="2282570">you</span> <span m="2282740">a</span> <span
  m="2282810">15-degree</span> <span m="2284040">polynomial--</span> <span
  m="2284820">I</span> <span m="2284910">guess,</span> <span
  m="2285060">we</span> <span m="2285140">only</span> <span
  m="2285260">need</span> <span m="2285360">a</span> <span
  m="2285430">14-degree</span> <span m="2286040">polynomial</span> <span
  m="2287020">with</span> <span m="2287180">15</span> <span
  m="2287810">free</span> <span m="2288300">parameters--</span> <span
  m="2288960">then</span> <span m="2289090">that</span> <span
  m="2289520">polynomial</span> <span m="2290180">will</span> <span
  m="2290380">go</span> <span m="2290590">through</span> <span
  m="2291990">everyone</span> <span m="2292350">of</span> <span
  m="2292390">your</span> <span m="2292480">data</span> <span
  m="2292670">points</span> <span m="2293320">spot</span> <span
  m="2293840">on,</span> <span m="2294960">not</span> <span
  m="2295200">even</span> <span m="2295420">a</span> <span
  m="2295490">question</span> <span m="2295850">of</span> <span
  m="2295930">whether</span> <span m="2296230">it</span> <span
  m="2297710">goes</span> <span m="2297940">through</span> <span
  m="2298040">the</span> <span m="2298150">error</span> <span
  m="2298360">bars.</span> <span m="2298790">I'm</span> <span
  m="2299050">saying</span> <span m="2301260">literally--</span> <span
  m="2311710">and</span> <span m="2311780">that's</span> <span
  m="2311940">just</span> <span m="2312110">because</span> <span
  m="2312390">you're</span> <span m="2312500">just</span> <span
  m="2312660">solving</span> <span m="2313030">an</span> <span
  m="2313090">equation</span> <span m="2313580">at</span> <span
  m="2313650">that</span> <span m="2313850">stage.</span></p><p><span
  m="2317060">Now,</span> <span m="2317820">this</span> <span
  m="2318040">is</span> <span m="2318200">a</span> <span
  m="2318270">stupid</span> <span m="2319100">statement,</span> <span
  m="2319680">except</span> <span m="2319910">that</span> <span
  m="2320060">once</span> <span m="2320340">you're</span> <span
  m="2320510">kind</span> <span m="2320680">of</span> <span
  m="2320780">like</span> <span m="2322280">in the</span> <span
  m="2322390">heat</span> <span m="2322630">of the</span> <span
  m="2322720">moment,</span> <span m="2324020">eagerly</span> <span
  m="2324410">trying</span> <span m="2324790">to</span> <span
  m="2325140">do</span> <span m="2325260">some</span> <span
  m="2325410">fitting</span> <span m="2325770">for</span> <span
  m="2325870">your</span> <span m="2325980">advisor</span> <span
  m="2326480">or</span> <span m="2326530">whatever,</span> <span
  m="2327630">it's</span> <span m="2327820">easy</span> <span
  m="2328170">to</span> <span m="2328260">fall</span> <span
  m="2328530">into</span> <span m="2328650">this</span> <span
  m="2328740">trap,</span> <span m="2329750">where</span> <span
  m="2329920">you</span> <span m="2330030">just</span> <span
  m="2330200">kind</span> <span m="2330350">of</span> <span
  m="2330460">like</span> <span m="2331920">add</span> <span
  m="2332290">extra</span> <span m="2332610">parameters.</span></p><p><span
  m="2334180">I mean,</span> <span m="2334380">I</span> <span
  m="2334480">definitely</span> <span m="2334510">remember in</span> <span
  m="2334780">graduate</span> <span m="2335140">school,</span> <span
  m="2335210">I</span> <span m="2335290">was</span> <span
  m="2335520">surprised.</span> <span m="2335940">I was</span> <span
  m="2336030">like,</span> <span m="2336120">oh,</span> <span
  m="2336240">this</span> <span m="2336380">thing,</span> <span
  m="2336560">it</span> <span m="2336690">works</span> <span
  m="2336910">wonderfully.</span> <span m="2337620">It's</span> <span
  m="2337730">like</span> <span m="2337870">it</span> <span
  m="2337960">seems</span> <span m="2338240">to</span> <span
  m="2338760">magically</span> <span m="2339330">goes</span> <span
  m="2339600">through</span> <span m="2339740">all</span> <span
  m="2339910">my</span> <span m="2340020">data.</span> <span
  m="2341380">And</span> <span m="2341520">then</span> <span
  m="2342040">I</span> <span m="2342080">felt</span> <span
  m="2342240">very</span> <span m="2342410">stupid</span> <span
  m="2342750">like</span> <span m="2343260">30</span> <span
  m="2343480">seconds</span> <span m="2343760">later.</span> <span
  m="2345690">But</span> <span m="2346310">this</span> <span
  m="2346550">is</span> <span m="2346640">just</span> <span m="2347020">a</span>
  <span m="2347130">very</span> <span m="2347980">easy</span> <span
  m="2348230">thing</span> <span m="2348400">to</span> <span
  m="2348460">screw</span> <span m="2348760">up</span> <span m="2348920">and
  forget about.</span></p><p><span m="2351880">So</span> <span
  m="2352280">what</span> <span m="2352400">this</span> <span
  m="2352550">is</span> <span m="2352640">saying</span> <span
  m="2352880">is</span> <span m="2352940">that,</span> <span
  m="2353080">if</span> <span m="2353530">you</span> <span
  m="2353680">see</span> <span m="2353940">a</span> <span
  m="2354240">curve--</span> <span m="2354860">if</span> <span
  m="2355860">in</span> <span m="2355930">the</span> <span
  m="2356010">course</span> <span m="2356270">of</span> <span
  m="2356330">your</span> <span m="2356440">work</span> <span
  m="2356930">or</span> <span m="2357160">if</span> <span
  m="2357230">you're</span> <span m="2357360">reading</span> <span
  m="2357540">a</span> <span m="2357590">paper</span> <span
  m="2359040">and</span> <span m="2361110">you</span> <span
  m="2361370">see</span> <span m="2361550">some</span> <span
  m="2361730">curve</span> <span m="2363020">and</span> <span
  m="2363130">you</span> <span m="2363220">want</span> <span
  m="2363340">to</span> <span m="2363390">know</span> <span
  m="2364140">something</span> <span m="2364610">about</span> <span
  m="2366510">how</span> <span m="2366620">much</span> <span
  m="2366780">information</span> <span m="2367310">is</span> <span
  m="2367430">it</span> <span m="2367770">or</span> <span
  m="2368070">whether</span> <span m="2369310">things</span> <span
  m="2369580">look</span> <span m="2369720">reasonable</span> <span
  m="2370100">given</span> <span m="2370240">the</span> <span
  m="2370310">data,</span> <span m="2370810">it's</span> <span
  m="2371490">useful</span> <span m="2372070">to</span> <span
  m="2372150">kind</span> <span m="2372340">of</span> <span
  m="2372970">orient</span> <span m="2373370">yourself</span> <span
  m="2373750">relative</span> <span m="2374170">to</span> <span
  m="2374590">these</span> <span m="2374730">statements,</span> <span
  m="2376260">that</span> <span m="2377690">depending</span> <span
  m="2378040">on</span> <span m="2378110">how</span> <span
  m="2378260">many</span> <span m="2378440">free</span> <span
  m="2378620">parameters</span> <span m="2379190">you're</span> <span
  m="2379570">kind</span> <span m="2379730">of</span> <span
  m="2379810">using,</span> <span m="2380960">you</span> <span
  m="2381170">expect</span> <span m="2382520">a</span> <span
  m="2383710">larger</span> <span m="2384290">or</span> <span
  m="2384380">smaller</span> <span m="2384730">number</span> <span
  m="2385070">of</span> <span m="2385330">these</span> <span
  m="2385580">data</span> <span m="2385810">points to</span> <span
  m="2386110">kind</span> <span m="2386230">of</span> <span
  m="2386310">go</span> <span m="2386450">through</span> <span
  m="2387580">the</span> <span m="2387670">curve</span> <span m="2388050">that
  you</span> <span m="2388220">see.</span></p><p><span m="2393910">But</span>
  <span m="2395760">I</span> <span m="2395900">would</span> <span
  m="2396080">just</span> <span m="2396250">want</span> <span
  m="2396350">to</span> <span m="2396400">stress</span> <span
  m="2396830">that</span> <span m="2398090">you don't</span> <span
  m="2398270">want</span> <span m="2398420">to</span> <span
  m="2398460">be</span> <span m="2398570">anywhere</span> <span
  m="2398980">close</span> <span m="2399330">to</span> <span
  m="2399400">the</span> <span m="2399460">point</span> <span
  m="2399630">where</span> <span m="2399740">you</span> <span m="2399800">have
  a</span> <span m="2399910">number</span> <span m="2400130">of</span> <span
  m="2400190">parameters</span> <span m="2400670">equal</span> <span
  m="2401040">to</span> <span m="2402790">the</span> <span
  m="2402920">number</span> <span m="2403310">of</span> <span
  m="2404050">kind</span> <span m="2404170">of</span> <span
  m="2404210">measurements</span> <span m="2404690">that</span> <span
  m="2404820">you're</span> <span m="2404910">making.</span></p><p><span
  m="2405590">And</span> <span m="2406860">for</span> <span
  m="2407020">any</span> <span m="2407310">sort</span> <span
  m="2407490">of</span> <span m="2407660">reasonable</span> <span
  m="2409160">curve</span> <span m="2409720">describing</span> <span
  m="2410510">what</span> <span m="2410650">you</span> <span
  m="2410730">hope</span> <span m="2410910">is a</span> <span
  m="2410990">reality,</span> <span m="2411580">you</span> <span
  m="2411700">expect</span> <span m="2412360">some</span> <span
  m="2412970">of</span> <span m="2413040">those</span> <span
  m="2414450">data</span> <span m="2414670">points</span> <span
  m="2414900">with</span> <span m="2415030">their error</span> <span
  m="2415310">bars to</span> <span m="2415580">kind</span> <span
  m="2415740">of</span> <span m="2415840">miss</span> <span
  m="2416190">the</span> <span m="2416300">curve.</span> <span
  m="2416920">And</span> <span m="2416990">that</span> <span
  m="2417160">doesn't</span> <span m="2417440">mean</span> <span
  m="2417680">that</span> <span m="2418150">they're</span> <span
  m="2418340">sloppy</span> <span m="2418770">experimentalists.</span> <span
  m="2419300">It</span> <span m="2419680">doesn't mean</span> <span
  m="2419920">whatever.</span></p><p><span m="2425250">OK,</span> <span
  m="2425410">now</span> <span m="2425580">coming</span> <span
  m="2425820">back</span> <span m="2426890">to</span> <span
  m="2427400">the</span> <span m="2427520">task</span> <span
  m="2427820">at</span> <span m="2427880">hand,</span> <span
  m="2431640">do</span> <span m="2431940">you</span> <span
  m="2432020">understand</span> <span m="2432950">why they're</span> <span
  m="2433250">plotting</span> <span m="2433460">the standard</span> <span
  m="2433840">error of</span> <span m="2434020">the</span> <span
  m="2434100">mean</span> <span m="2434420">rather</span> <span
  m="2434670">than</span> <span m="2434850">the</span> <span
  m="2434920">standard</span> <span m="2435200">deviation?</span></p><p><span
  m="2438500">Because</span> <span m="2438830">what</span> <span
  m="2439060">your</span> <span m="2439290">interest</span> <span
  m="2439660">in,</span> <span m="2439965">in</span> <span
  m="2440270">principle,</span> <span m="2440750">is</span> <span
  m="2440890">not--</span> <span m="2441910">the</span> <span
  m="2442470">question you're</span> <span m="2442860">trying to</span> <span
  m="2443030">answer</span> <span m="2443280">is</span> <span
  m="2443380">not</span> <span m="2444180">how</span> <span
  m="2444480">variable</span> <span m="2445000">are</span> <span
  m="2445100">their</span> <span m="2445740">measurements</span> <span
  m="2446720">but</span> <span m="2447410">to</span> <span
  m="2447610">what</span> <span m="2447880">certainty</span> <span
  m="2449290">can</span> <span m="2449440">they</span> <span
  m="2449540">claim</span> <span m="2449900">to</span> <span
  m="2450010">know</span> <span m="2450980">the</span> <span
  m="2452180">actual</span> <span m="2453460">god-given,</span> <span
  m="2454040">real</span> <span m="2455800">cost</span> <span
  m="2456300">associated</span> <span m="2456890">with</span> <span
  m="2457000">expressing</span> <span m="2457870">these</span> <span
  m="2458060">proteins</span> <span m="2458560">as</span> <span
  m="2458680">a</span> <span m="2458740">function of the</span> <span
  m="2459090">expression</span> <span m="2459430">level.</span> <span
  m="2460000">And</span> <span m="2460140">for</span> <span
  m="2460220">that,</span> <span m="2460440">you</span> <span
  m="2460530">really</span> <span m="2460680">want</span> <span
  m="2460810">to</span> <span m="2460850">ask</span> <span m="2461050">about
  the</span> <span m="2461240">standard error of the</span> <span
  m="2461720">mean.</span></p><p><span m="2467280">Great.</span> <span
  m="2470500">So now,</span> <span m="2470740">we</span> <span m="2470910">can
  come</span> <span m="2471040">back</span> <span m="2471900">and</span> <span
  m="2473770">ask</span> <span m="2474060">about,</span> <span
  m="2475450">why</span> <span m="2475840">did</span> <span m="2475980">I</span>
  <span m="2476040">just</span> <span m="2476200">spend</span> <span
  m="2476530">half</span> <span m="2476810">an</span> <span
  m="2476900">hour</span> <span m="2477750">talking</span> <span
  m="2478140">about</span> <span m="2479700">standard</span> <span
  m="2480040">error</span> <span m="2480180">of</span> <span
  m="2480280">the</span> <span m="2480380">mean,</span> <span
  m="2480990">standard</span> <span m="2481230">deviations,</span> <span
  m="2482820">fitting</span> <span m="2483280">to</span> <span
  m="2483410">data?</span> <span m="2488070">Well,</span> <span
  m="2488200">you</span> <span m="2488290">guys</span> <span
  m="2488430">are</span> <span m="2488480">probably</span> <span
  m="2488690">all</span> <span m="2488900">asking</span> <span
  m="2489060">yourself</span> <span m="2489370">that</span> <span
  m="2489480">question.</span> <span m="2490640">But</span> <span
  m="2490780">does</span> <span m="2490860">anybody</span> <span
  m="2491050">have</span> <span m="2491160">an</span> <span
  m="2491260">answer</span> <span m="2491620">if</span> <span
  m="2491870">I--</span> <span m="2492380">Yeah.</span></p><p><span
  m="2493814">AUDIENCE:</span> <span m="2494292">You</span> <span
  m="2494770">can</span> <span m="2498594">fit</span> <span
  m="2499072">with</span> <span m="2499550">different</span> <span
  m="2500028">curves</span> <span m="2500506">if you</span> <span
  m="2500984">use</span> <span m="2501462">different</span> <span
  m="2501940">things.</span></p><p><span m="2502418">PROFESSOR:</span> <span
  m="2502910">You</span> <span m="2503120">can</span> <span
  m="2503260">fit</span> <span m="2503460">with</span> <span
  m="2503550">different</span> <span m="2503780">curves</span> <span
  m="2504240">if</span> <span m="2504340">you--</span> <span
  m="2504510">yeah,</span> <span m="2504770">I</span> <span m="2504820">think
  that</span> <span m="2505030">that's</span> <span m="2506940">hard</span>
  <span m="2507260">to</span> <span m="2507310">argue</span> <span
  m="2507580">that</span> <span m="2507800">statement.</span> <span
  m="2508840">But</span> <span m="2508930">the</span> <span
  m="2509010">statement</span> <span m="2509330">is</span> <span
  m="2509420">a</span> <span m="2509480">little</span> <span
  m="2509670">bit</span> <span m="2509810">like</span> <span
  m="2510260">&quot;different</span> <span m="2510660">proteins</span> <span
  m="2511030">have</span> <span m="2511150">different</span> <span
  m="2511390">expression</span> <span m="2511730">levels,&quot;</span> <span
  m="2514380">but</span> <span m="2514890">a little bit</span> <span
  m="2515140">more</span> <span m="2515350">concrete</span> <span
  m="2516350">maybe.</span> <span m="2517766">Yeah.</span></p><p><span
  m="2518249">AUDIENCE: So in this</span> <span m="2518732">case,</span> <span
  m="2520181">I didn't check</span> <span m="2520664">their</span> <span
  m="2521147">calculations,</span> <span m="2521630">but if you</span> <span
  m="2522113">have a  natural</span> <span m="2522596">line,</span> <span
  m="2523079">then</span> <span m="2524045">you can't</span> <span
  m="2524528">make</span> <span m="2525011">this</span> <span
  m="2525494">calculation</span> <span m="2525977">of</span> <span
  m="2526460">optimization.</span></p><p><span m="2527426">PROFESSOR:</span>
  <span m="2527920">Yeah,</span> <span m="2528350">but</span> <span
  m="2528500">I</span> <span m="2528550">think</span> <span
  m="2528750">that--</span> <span m="2529260">right,</span> <span
  m="2529690">so--</span></p><p><span m="2530121">AUDIENCE: In the sense
  that</span> <span m="2530552">there won't be</span> <span
  m="2531845">[INAUDIBLE].</span></p><p><span m="2532550">PROFESSOR:</span>
  <span m="2532950">Yeah,</span> <span m="2533250">OK.</span> <span
  m="2534450">So</span> <span m="2534550">I</span> <span
  m="2534620">think</span> <span m="2534790">that</span> <span
  m="2536030">this</span> <span m="2536230">is</span> <span m="2536280">a</span>
  <span m="2536350">tricky</span> <span m="2536590">thing.</span> <span
  m="2538000">The</span> <span m="2538190">data</span> <span
  m="2539450">certainly</span> <span m="2540030">do</span> <span
  m="2541590">argue</span> <span m="2542560">for</span> <span
  m="2542720">a</span> <span m="2542790">super</span> <span
  m="2543160">linear</span> <span m="2543590">cost.</span> <span
  m="2544630">But</span> <span m="2544750">I</span> <span
  m="2544800">would</span> <span m="2544920">say that</span> <span
  m="2545130">they</span> <span m="2545310">argued</span> <span
  m="2545720">for</span> <span m="2546010">it</span> <span
  m="2546170">rather</span> <span m="2546570">weakly,</span> <span
  m="2549640">in</span> <span m="2549830">that</span> <span
  m="2550490">if</span> <span m="2550990">you</span> <span
  m="2551100">look</span> <span m="2551290">at</span> <span
  m="2551360">their</span> <span m="2551490">data</span> <span
  m="2553600">and</span> <span m="2553790">you</span> <span
  m="2553910">just</span> <span m="2554720">fit</span> <span
  m="2554820">a</span> <span m="2554890">line,</span> <span
  m="2555350">you</span> <span m="2555450">would</span> <span
  m="2555590">say,</span> <span m="2556490">it's</span> <span
  m="2556690">maybe</span> <span m="2557140">OK.</span></p><p><span
  m="2559510">And</span> <span m="2559700">of</span> <span
  m="2559780">course,</span> <span m="2560950">once</span> <span
  m="2561130">again,</span> <span m="2561280">should</span> <span
  m="2561520">we</span> <span m="2561640">be</span> <span
  m="2561760">surprised</span> <span m="2562830">that</span> <span
  m="2562940">the</span> <span m="2563020">quadratic</span> <span
  m="2563640">fits</span> <span m="2564040">better?</span> <span
  m="2566110">No.</span> <span m="2567200">And</span> <span
  m="2567310">this</span> <span m="2567460">is</span> <span m="2567810">a</span>
  <span m="2567930">very</span> <span m="2569590">dangerous</span> <span
  m="2570140">thing,</span> <span m="2570480">if</span> <span
  m="2570560">you're</span> <span m="2570670">comparing</span> <span
  m="2571120">models.</span> <span m="2571810">It'll</span> <span
  m="2572140">always</span> <span m="2572470">be</span> <span
  m="2572550">the</span> <span m="2572630">case,</span> <span m="2573010">if
  you</span> <span m="2573110">add</span> <span m="2573240">another</span> <span
  m="2573450">parameter,</span> <span m="2573930">it will</span> <span
  m="2574170">look</span> <span m="2574380">better.</span></p><p><span
  m="2577240">But</span> <span m="2577490">the</span> <span
  m="2577570">question</span> <span m="2577950">then</span> <span
  m="2578130">is</span> <span m="2579680">how</span> <span
  m="2579980">strong</span> <span m="2580600">of</span> <span
  m="2580730">a</span> <span m="2580860">case</span> <span
  m="2581730">should</span> <span m="2582590">we</span> <span
  m="2582790">make</span> <span m="2583020">of</span> <span
  m="2583090">this?</span> <span m="2583670">And</span> <span
  m="2583820">then</span> <span m="2584600">how</span> <span
  m="2584860">important</span> <span m="2585370">is</span> <span
  m="2585530">it</span> <span m="2585790">for</span> <span
  m="2587060">the</span> <span m="2587190">conclusions</span> <span
  m="2588050">of</span> <span m="2588240">the</span> <span
  m="2588330">study?</span></p><p><span m="2590980">Now,</span> <span
  m="2594430">in</span> <span m="2594560">addition</span> <span
  m="2594850">to</span> <span m="2594910">the</span> <span
  m="2595050">line</span> <span m="2595580">and</span> <span
  m="2595650">the</span> <span m="2595730">quadratic,</span> <span
  m="2596390">they</span> <span m="2596500">had</span> <span
  m="2596670">another</span> <span m="2597040">curve</span> <span
  m="2598680">in</span> <span m="2598830">here,</span> <span
  m="2599600">which</span> <span m="2599820">looks</span> <span
  m="2600160">like--</span> <span m="2600970">let</span> <span
  m="2600980">me</span> <span m="2601070">see</span> <span m="2601220">if</span>
  <span m="2601340">I can</span> <span m="2601400">get</span> <span
  m="2601690">it</span> <span m="2601780">right</span> <span
  m="2602040">for</span> <span m="2602240">you</span> <span
  m="2602350">guys.</span> <span m="2608080">So</span> <span
  m="2608200">this</span> <span m="2608380">is</span> <span
  m="2608550">fine,</span> <span m="2610650">tricky</span> <span
  m="2611050">thing.</span> <span m="2612860">So</span> <span
  m="2613730">it's</span> <span m="2614060">the</span> <span
  m="2614200">dashed</span> <span m="2614500">line that</span> <span
  m="2614710">looks</span> <span m="2614900">very</span> <span
  m="2615190">similar</span> <span m="2615540">to</span> <span
  m="2615620">the</span> <span m="2615680">solid</span> <span
  m="2616020">quadratic</span> <span m="2616490">line.</span></p><p><span
  m="2618130">Can</span> <span m="2618250">somebody</span> <span
  m="2618370">remind</span> <span m="2618670">us</span> <span
  m="2618780">what</span> <span m="2618920">the</span> <span
  m="2619010">difference</span> <span m="2619400">was</span> <span
  m="2619750">between</span> <span m="2620550">those</span> <span
  m="2620730">two</span> <span m="2622110">non-linear</span> <span
  m="2622990">curves</span> <span m="2623380">that</span> <span
  m="2623510">they</span> <span m="2623620">had?</span> <span
  m="2633350">Why</span> <span m="2633520">do</span> <span
  m="2633610">they</span> <span m="2633750">have</span> <span
  m="2634060">two</span> <span m="2634350">curves</span> <span
  m="2634820">that</span> <span m="2635930">look</span> <span
  m="2636210">so</span> <span m="2636460">similar?</span></p><p><span
  m="2647730">AUDIENCE:</span> <span m="2648220">I think</span> <span
  m="2648720">the dashed</span> <span m="2649000">line</span> <span
  m="2649490">responds</span> <span m="2649940">to</span> <span
  m="2650110">some</span> <span m="2650310">model</span> <span
  m="2650610">where</span> <span m="2651460">there's</span> <span
  m="2651640">only</span> <span m="2652560">so</span> <span
  m="2652790">much</span> <span m="2653100">of</span> <span
  m="2653190">this</span> <span m="2653400">certain</span> <span
  m="2653850">resource</span> <span m="2654300">that--</span></p><p><span
  m="2654750">PROFESSOR:</span> <span m="2655200">Right,</span> <span
  m="2655500">OK,</span> <span m="2655650">so</span> <span m="2655890">my</span>
  <span m="2656140">dashed</span> <span m="2656580">line</span> <span
  m="2656860">is</span> <span m="2656980">their</span> <span
  m="2657210">red</span> <span m="2657480">line,</span> <span
  m="2657840">just</span> <span m="2658040">to--</span> <span
  m="2658110">OK</span> <span m="2658860">dashed</span> <span
  m="2660270">red</span> <span m="2660610">in</span> <span
  m="2660790">the</span> <span m="2660870">paper.</span> <span
  m="2662600">So</span> <span m="2663650">it's</span> <span
  m="2663820">this</span> <span m="2663970">line</span> <span
  m="2664300">where</span> <span m="2664390">there's</span> <span
  m="2664610">a</span> <span m="2664750">finite</span> <span
  m="2665950">amount</span> <span m="2666130">of</span> <span
  m="2666200">resources</span> <span m="2667060">or</span> <span
  m="2667150">protein-making</span> <span m="2668450">machinery</span> <span
  m="2669010">that</span> <span m="2669170">the</span> <span
  m="2669240">cell</span> <span m="2669490">has.</span> <span
  m="2669890">And</span> <span m="2669960">if</span> <span
  m="2670030">you</span> <span m="2670430">use</span> <span
  m="2670780">them</span> <span m="2670950">up,</span> <span
  m="2671180">then</span> <span m="2671290">you</span> <span
  m="2671380">don't</span> <span m="2671550">get</span> <span
  m="2671670">any</span> <span m="2671840">growth.</span></p><p><span
  m="2672920">And</span> <span m="2673320">of</span> <span
  m="2673380">course,</span> <span m="2673600">that</span> <span
  m="2673800">statement</span> <span m="2675620">kind</span> <span
  m="2675960">of</span> <span m="2676020">has</span> <span m="2676200">to</span>
  <span m="2676270">be</span> <span m="2676390">true</span> <span
  m="2676730">on</span> <span m="2676880">some</span> <span
  m="2677270">level.</span> <span m="2677540">And</span> <span
  m="2677720">the</span> <span m="2677820">question</span> <span
  m="2678260">is</span> <span m="2678390">whether--</span></p><p><span
  m="2679455">AUDIENCE:</span> <span m="2679930">--that</span> <span
  m="2680150">scale</span> <span m="2680515">is--</span></p><p><span
  m="2680880">PROFESSOR: --it's</span> <span m="2681090">relevant</span> <span
  m="2681580">here,</span> <span m="2682200">right.</span> <span
  m="2686620">Certainly,</span> <span m="2687820">I</span> <span
  m="2687920">would</span> <span m="2688010">say</span> <span
  m="2688150">that</span> <span m="2688390">one</span> <span
  m="2688590">question</span> <span m="2688890">is</span> <span
  m="2688980">whether</span> <span m="2689220">you</span> <span
  m="2689420">can</span> <span m="2689730">reject</span> <span
  m="2690430">the</span> <span m="2690520">hypothesis</span> <span
  m="2691880">that</span> <span m="2692360">this</span> <span
  m="2692650">cost</span> <span m="2692920">function</span> <span
  m="2693190">is</span> <span m="2693260">a</span> <span
  m="2693310">line.</span> <span m="2693810">Another</span> <span
  m="2694090">question</span> <span m="2694460">is</span> <span
  m="2694570">whether</span> <span m="2695150">you</span> <span
  m="2695280">can</span> <span m="2695440">distinguish</span> <span
  m="2696120">between</span> <span m="2696650">the</span> <span
  m="2696760">two</span> <span m="2696940">quadratic</span> <span
  m="2697570">or</span> <span m="2697650">the</span> <span
  m="2697730">two</span> <span m="2697860">non-linear</span> <span
  m="2698750">curves</span> <span m="2699450">based</span> <span
  m="2699710">on</span> <span m="2699790">the</span> <span
  m="2699870">data.</span></p><p><span m="2701490">And</span> <span
  m="2702100">I</span> <span m="2702180">think</span> <span
  m="2702310">the</span> <span m="2702420">answer</span> <span
  m="2702880">to</span> <span m="2702960">the</span> <span
  m="2703030">second</span> <span m="2703360">question</span> <span
  m="2703720">is</span> <span m="2703870">certainly</span> <span
  m="2704550">not.</span> <span m="2705960">And they</span> <span
  m="2706140">don't</span> <span m="2706390">claim</span> <span
  m="2706970">that</span> <span m="2707100">they</span> <span
  m="2707210">can.</span> <span m="2710410">But</span> <span
  m="2710680">it's</span> <span m="2711050">important</span> <span
  m="2711480">to</span> <span m="2711560">just</span> <span
  m="2711740">note</span> <span m="2711990">that</span> <span
  m="2712440">it's</span> <span m="2712590">just</span> <span
  m="2712920">impossible</span> <span m="2714540">for</span> <span
  m="2714630">them</span> <span m="2714870">to</span> <span
  m="2715030">assume--</span> <span m="2715320">I mean, those</span> <span
  m="2715770">curves</span> <span m="2716070">are</span> <span
  m="2716180">so,</span> <span m="2716860">so</span> <span
  m="2717110">similar</span> <span m="2717750">over</span> <span
  m="2717890">the</span> <span m="2717950">entire</span> <span
  m="2718360">range</span> <span m="2719180">where</span> <span
  m="2719300">they</span> <span m="2719440">have</span> <span
  m="2719580">data</span> <span m="2720110">that</span> <span
  m="2720330">it's</span> <span m="2720740">going</span> <span
  m="2720900">to</span> <span m="2720940">be</span> <span
  m="2721070">possible</span> <span m="2721500">to</span> <span
  m="2721610">distinguish</span> <span m="2722430">those</span> <span
  m="2722630">two</span> <span m="2722720">things.</span></p><p><span
  m="2724420">But</span> <span m="2724550">does</span> <span
  m="2724690">it</span> <span m="2724820">matter</span> <span
  m="2725150">which</span> <span m="2725340">of</span> <span
  m="2725390">the</span> <span m="2725450">two</span> <span
  m="2725590">cost</span> <span m="2725830">functions</span> <span
  m="2728620">is</span> <span m="2729680">the</span> <span
  m="2729780">true</span> <span m="2730040">cost</span> <span
  m="2730310">function?</span> <span m="2733600">Yeah.</span></p><p><span
  m="2734095">AUDIENCE: Is it</span> <span m="2734590">because the</span> <span
  m="2735580">[INAUDIBLE]</span> <span m="2736075">where</span> <span
  m="2737560">the marginal</span> <span m="2738055">benefits</span> <span
  m="2738550">become zero</span> <span m="2739045">is like</span> <span
  m="2740035">inside</span> <span m="2740530">the range</span> <span
  m="2741025">where  the</span> <span m="2742015">cost functions</span> <span
  m="2742510">are still</span> <span m="2743005">exactly</span> <span
  m="2743500">the same?</span></p><p><span m="2744985">PROFESSOR:</span> <span
  m="2745490">OK,</span> <span m="2745880">right.</span> <span
  m="2746060">So</span> <span m="2746190">what</span> <span
  m="2746320">you're</span> <span m="2746440">saying</span> <span
  m="2746700">is</span> <span m="2746810">that</span> <span
  m="2746980">the</span> <span m="2747080">two</span> <span
  m="2747310">cost</span> <span m="2747650">functions</span> <span
  m="2748040">they</span> <span m="2748210">have</span> <span
  m="2750330">they</span> <span m="2750480">behave</span> <span
  m="2750730">similarly</span> <span m="2751310">over</span> <span
  m="2751470">the</span> <span m="2751590">range</span> <span
  m="2752380">that</span> <span m="2752510">is</span> <span
  m="2752630">relevant</span> <span m="2753100">maybe,</span> <span
  m="2753870">so</span> <span m="2754050">then</span> <span
  m="2755120">therefore, it</span> <span m="2755400">doesn't</span> <span
  m="2755620">matter.</span> <span m="2756350">Is</span> <span
  m="2756730">that--</span> <span m="2757460">or</span> <span
  m="2757620">am</span> <span m="2757640">I--</span> <span
  m="2757880">OK.</span></p><p><span m="2759780">So</span> <span
  m="2759910">why</span> <span m="2760050">do</span> <span
  m="2760110">they</span> <span m="2760190">have</span> <span
  m="2760320">to</span> <span m="2760680">cost</span> <span
  m="2760980">functions</span> <span m="2761380">there</span> <span
  m="2761580">then,</span> <span m="2761790">why</span> <span
  m="2762240">two</span> <span m="2762420">non-linear</span> <span
  m="2762830">cost</span> <span m="2763050">functions?</span> <span
  m="2768790">Just</span> <span m="2769060">to</span> <span
  m="2770810">provide</span> <span m="2771170">variety</span> <span
  m="2772690">in</span> <span m="2772810">our</span> <span
  m="2772910">modeling?</span> <span m="2774142">Yep.</span></p><p><span
  m="2774634">AUDIENCE:</span> <span m="2775126">They were doing</span> <span
  m="2775618">another experiment</span> <span m="2776110">later</span> <span
  m="2776602">on,</span> <span m="2777094">and</span> <span m="2777586">they
  said</span> <span m="2778570">something</span> <span m="2779062">like</span>
  <span m="2780538">something</span> <span m="2782014">was saturated</span>
  <span m="2782506">and that</span> <span m="2782998">was</span> <span
  m="2783490">modeled by</span> <span m="2783982">the second</span> <span
  m="2784474">cost function.</span></p><p><span m="2784980">PROFESSOR:
  Right,</span> <span m="2785480">yes.</span> <span m="2785690">That's</span>
  <span m="2786010">right.</span> <span m="2786770">And</span> <span
  m="2786970">what's</span> <span m="2787730">the</span> <span
  m="2787940">later</span> <span m="2788260">experiment</span> <span
  m="2788650">they're</span> <span m="2788730">going</span> <span
  m="2788820">to</span> <span m="2788880">do,</span> <span
  m="2789090">just</span> <span m="2789250">so</span> <span
  m="2789370">that</span> <span m="2789480">we're--</span></p><p><span
  m="2794770">AUDIENCE:</span> <span m="2794810">You should</span> <span
  m="2795245">ask somebody</span> <span m="2795680">else</span> <span
  m="2796115">to explain</span> <span m="2796550">that,</span> <span
  m="2796985">not me.</span></p><p><span m="2798010">PROFESSOR:</span> <span
  m="2798100">You</span> <span m="2798270">regret</span> <span
  m="2798590">opening your mouth.</span> <span m="2798910">No,</span> <span
  m="2799390">OK.</span> <span m="2801240">So</span> <span
  m="2801390">yeah,</span> <span m="2801540">so</span> <span
  m="2801650">what</span> <span m="2801830">is</span> <span
  m="2801920">the</span> <span m="2802030">experiment</span> <span
  m="2802400">that</span> <span m="2802450">they're</span> <span
  m="2803420">going</span> <span m="2803520">to</span> <span
  m="2803580">do?</span></p><p><span m="2805291">AUDIENCE:</span> <span
  m="2805758">Measuring</span> <span m="2806225">the benefit?</span></p><p><span
  m="2807159">PROFESSOR:</span> <span m="2807630">So</span> <span
  m="2807870">next,</span> <span m="2808090">they're going to</span> <span
  m="2808210">measure</span> <span m="2808390">the</span> <span
  m="2808470">benefit.</span> <span m="2808850">But</span> <span
  m="2809190">this</span> <span m="2810000">question</span> <span
  m="2810330">about</span> <span m="2810470">the</span> <span
  m="2810540">two</span> <span m="2810710">cost</span> <span
  m="2811030">functions</span> <span m="2812730">is</span> <span
  m="2812870">not</span> <span m="2813090">somehow</span> <span
  m="2813330">relevant</span> <span m="2813650">yet</span> <span m="2813810">for
  the benefit</span> <span m="2814306">part.</span> <span
  m="2821760">Yes.</span></p><p><span m="2822420">AUDIENCE:</span> <span
  m="2822916">So</span> <span m="2823412">they're doing it</span> <span
  m="2823908">in different</span> <span m="2824404">concentrations</span> <span
  m="2824900">of</span> <span m="2825396">lactose</span> <span m="2825892">and
  seeing if</span> <span m="2827380">the protein</span> <span
  m="2827876">expression</span> <span m="2828372">could adapt</span> <span
  m="2828868">[INAUDIBLE].</span></p><p><span m="2829370">PROFESSOR:
  Right,</span> <span m="2830575">after</span> <span m="2830970">a</span> <span
  m="2831030">long</span> <span m="2831340">time.</span> <span
  m="2831590">So</span> <span m="2831690">they</span> <span
  m="2831830">actually</span> <span m="2832070">do</span> <span
  m="2832240">laboratory</span> <span m="2832910">evolution</span> <span
  m="2833300">experiments,</span> <span m="2833880">where</span> <span
  m="2834000">they</span> <span m="2834140">grow</span> <span
  m="2835500">these</span> <span m="2835860">bacterial</span> <span
  m="2836240">populations</span> <span m="2836780">in</span> <span
  m="2836890">different</span> <span m="2837320">lactose</span> <span
  m="2837890">concentrations.</span> <span m="2838820">And then</span> <span
  m="2839000">they</span> <span m="2839120">look</span> <span
  m="2839330">to</span> <span m="2839430">see</span> <span
  m="2839970">what</span> <span m="2840190">level</span> <span
  m="2840550">of</span> <span m="2840670">the</span> <span
  m="2840730">lac</span> <span m="2841320">operon</span> <span
  m="2841630">expression</span> <span m="2842480">does</span> <span
  m="2842580">the</span> <span m="2842660">population</span> <span
  m="2843130">evolve</span> <span m="2843480">to.</span></p><p><span
  m="2845240">So</span> <span m="2845510">what</span> <span
  m="2845640">they're</span> <span m="2845770">trying</span> <span
  m="2846080">to</span> <span m="2846150">do</span> <span
  m="2846270">here</span> <span m="2846520">is</span> <span
  m="2846580">they're</span> <span m="2846700">trying</span> <span
  m="2847030">to</span> <span m="2847090">say,</span> <span
  m="2847290">OK,</span> <span m="2847520">well,</span> <span
  m="2848470">we</span> <span m="2848570">can</span> <span
  m="2848660">measure</span> <span m="2848920">some</span> <span
  m="2849100">cost</span> <span m="2850320">as</span> <span m="2850460">a</span>
  <span m="2850510">function of</span> <span m="2850800">expression.</span>
  <span m="2851680">Maybe</span> <span m="2852070">we</span> <span
  m="2852190">can</span> <span m="2852300">measure</span> <span
  m="2852550">some</span> <span m="2852690">benefits</span> <span
  m="2853540">as</span> <span m="2853680">a</span> <span m="2853730">function
  of</span> <span m="2854040">expression.</span> <span m="2855110">And
  then</span> <span m="2855410">from</span> <span m="2855640">that,</span> <span
  m="2855830">we'd</span> <span m="2855970">like</span> <span
  m="2856150">to</span> <span m="2856190">be</span> <span
  m="2856250">able</span> <span m="2856370">to</span> <span
  m="2856440">predict</span> <span m="2857420">where</span> <span
  m="2857540">the</span> <span m="2857640">population</span> <span
  m="2858140">will</span> <span m="2858320">evolve</span> <span
  m="2858650">to.</span></p><p><span m="2869260">And</span> <span
  m="2869810">they</span> <span m="2869930">had</span> <span
  m="2870090">these</span> <span m="2870270">two</span> <span
  m="2871380">non-linear</span> <span m="2872040">cost</span> <span
  m="2872350">functions,</span> <span m="2873170">which</span> <span
  m="2873460">based</span> <span m="2873750">on</span> <span
  m="2873930">the</span> <span m="2874010">data</span> <span
  m="2874220">they</span> <span m="2874300">have,</span> <span m="2874490">they
  can't</span> <span m="2874580">distinguish.</span> <span
  m="2875020">But</span> <span m="2875150">they</span> <span
  m="2875280">say,</span> <span m="2875570">oh, well,</span> <span
  m="2875810">they're both</span> <span m="2876070">kind</span> <span
  m="2876200">of</span> <span m="2876270">reasonable</span> <span
  m="2877110">cost</span> <span m="2877370">functions.</span></p><p><span
  m="2878640">And</span> <span m="2879010">in</span> <span
  m="2879180">some</span> <span m="2879290">ways,</span> <span
  m="2879540">maybe</span> <span m="2879720">the</span> <span
  m="2879810">problem</span> <span m="2880250">here</span> <span
  m="2880440">is</span> <span m="2880530">that</span> <span
  m="2881250">the</span> <span m="2881390">two</span> <span
  m="2881980">costs</span> <span m="2882250">functions</span> <span
  m="2883320">end</span> <span m="2883470">up</span> <span
  m="2883550">being</span> <span m="2883700">wildly</span> <span
  m="2884280">different</span> <span m="2884710">in</span> <span
  m="2884790">terms</span> <span m="2885030">of</span> <span
  m="2885150">predicting</span> <span m="2886590">what</span> <span
  m="2886770">happens</span> <span m="2887620">for</span> <span
  m="2888300">large</span> <span m="2889540">lac</span> <span
  m="2889910">concentrations,</span> <span m="2891400">where</span> <span
  m="2891550">you</span> <span m="2891660">would</span> <span
  m="2891800">want</span> <span m="2891970">to</span> <span
  m="2892060">express</span> <span m="2892460">more of</span> <span
  m="2892880">the protein.</span></p><p><span m="2900140">Do</span> <span
  m="2900340">you</span> <span m="2900500">guys--</span> <span m="2900790">do
  you</span> <span m="2900910">remember</span> <span m="2901170">this</span>
  <span m="2901770">or not?</span> <span m="2903450">Sort</span> <span
  m="2903720">of.</span> <span m="2907350">And</span> <span
  m="2907460">that's</span> <span m="2907660">actually--</span> <span
  m="2908200">well, you</span> <span m="2908340">might</span> <span
  m="2908450">as</span> <span m="2908520">well</span> <span
  m="2908620">just</span> <span m="2908770">look</span> <span
  m="2908990">at</span> <span m="2909050">that.</span> <span
  m="2910230">So</span> <span m="2910300">that's</span> <span
  m="2910540">figure</span> <span m="2910840">4.</span></p><p><span
  m="2913590">That's</span> <span m="2914100">the</span> <span
  m="2914600">normalized</span> <span m="2915210">lacZ</span> <span
  m="2915490">activity</span> <span m="2915900">that</span> <span
  m="2916180">the</span> <span m="2916540">populations</span> <span
  m="2917010">evolve</span> <span m="2917340">to</span> <span
  m="2917540">as</span> <span m="2917660">a</span> <span
  m="2917700">function</span> <span m="2918020">of</span> <span
  m="2918080">the</span> <span m="2918150">lactose</span> <span
  m="2918490">concentration</span> <span m="2918960">they're</span> <span
  m="2919090">evolving</span> <span m="2919460">in.</span> <span
  m="2919820">And</span> <span m="2920140">what</span> <span
  m="2920310">you</span> <span m="2920380">see</span> <span
  m="2920560">is</span> <span m="2920720">that</span> <span
  m="2921990">this</span> <span m="2922170">red</span> <span
  m="2922510">curve</span> <span m="2922880">corresponding</span> <span
  m="2923710">to</span> <span m="2924090">the</span> <span
  m="2925030">finite</span> <span m="2925510">resources</span> <span
  m="2926260">cost</span> <span m="2926570">function,</span> <span
  m="2927050">it</span> <span m="2927840">explains</span> <span
  m="2928660">the</span> <span m="2928750">data.</span> <span
  m="2929020">Whereas,</span> <span m="2929290">the</span> <span
  m="2929400">other</span> <span m="2929570">ones</span> <span
  m="2929780">very</span> <span m="2929970">much</span> <span
  m="2930220">do</span> <span m="2930350">not.</span></p><p><span
  m="2935570">And</span> <span m="2935780">that's</span> <span
  m="2936000">just</span> <span m="2936200">because</span> <span
  m="2937580">these</span> <span m="2937800">other</span> <span
  m="2938030">models</span> <span m="2938800">then</span> <span
  m="2939230">would</span> <span m="2939390">predict</span> <span
  m="2939750">that</span> <span m="2939960">if</span> <span
  m="2940080">you</span> <span m="2940220">grow</span> <span
  m="2940590">the</span> <span m="2940910">cells</span> <span
  m="2941360">in</span> <span m="2941470">a</span> <span m="2941540">lot</span>
  <span m="2941980">of</span> <span m="2942070">lactose</span> <span
  m="2942570">they</span> <span m="2942650">should</span> <span
  m="2943240">express</span> <span m="2944730">out</span> <span
  m="2944970">to</span> <span m="2945050">five</span> <span
  m="2945410">times</span> <span m="2945800">the</span> <span
  m="2945880">lac</span> <span m="2946170">expression,</span> <span
  m="2946630">much,</span> <span m="2946900">much,</span> <span
  m="2947080">much</span> <span m="2947290">more,</span> <span
  m="2948340">which</span> <span m="2948550">is</span> <span
  m="2948640">not</span> <span m="2948900">what</span> <span
  m="2948990">they</span> <span m="2949080">see</span> <span
  m="2949260">experimentally.</span> <span m="2954000">Yes.</span></p><p><span
  m="2954360">AUDIENCE:</span> <span m="2954846">Is there</span> <span
  m="2955332">another</span> <span m="2955818">way</span> <span
  m="2956790">to</span> <span m="2957276">put</span> <span m="2957762">a</span>
  <span m="2958248">bound</span> <span m="2958734">on the expression,</span>
  <span m="2959706">because</span> <span m="2960192">of</span> <span
  m="2960678">this</span> <span m="2961164">expression</span> <span
  m="2961650">we have?</span> <span m="2962136">You</span> <span
  m="2962622">mentioned</span> <span m="2963108">for that promoter,</span> <span
  m="2964080">it's not</span> <span m="2964566">possible</span> <span
  m="2965538">to--</span></p><p><span m="2966024">PROFESSOR: OK,</span> <span
  m="2966520">but</span> <span m="2966860">the</span> <span
  m="2966930">idea</span> <span m="2967270">of</span> <span
  m="2967500">evolution</span> <span m="2968080">is</span> <span
  m="2968190">that</span> <span m="2968330">evolution</span> <span
  m="2968890">can</span> <span m="2970000">make</span> <span
  m="2970160">it</span> <span m="2970220">a</span> <span
  m="2970270">stronger</span> <span m="2970670">promoter.</span> <span
  m="2971890">So</span> <span m="2972030">you guys,</span> <span
  m="2972820">one</span> <span m="2973040">statement</span> <span
  m="2973160">is,</span> <span m="2973490">given</span> <span
  m="2973810">this</span> <span m="2974130">DNA</span> <span
  m="2974550">sequence</span> <span m="2975070">at</span> <span
  m="2975200">that</span> <span m="2975370">promoter,</span> <span
  m="2975720">how</span> <span m="2975880">much</span> <span
  m="2976050">expression</span> <span m="2976470">can</span> <span
  m="2976570">you</span> <span m="2976670">get?</span> <span m="2977290">And
  the</span> <span m="2977630">most</span> <span m="2978000">you can</span>
  <span m="2978060">get</span> <span m="2978260">is</span> <span
  m="2978390">this</span> <span m="2979170">amount that's</span> <span
  m="2979570">normalized</span> <span m="2979880">to</span> <span
  m="2979980">1.</span> <span m="2980630">But</span> <span m="2980780">if</span>
  <span m="2980850">you</span> <span m="2980940">make</span> <span
  m="2981100">mutations</span> <span m="2981620">in that</span> <span
  m="2981670">promoter,</span> <span m="2983290">then</span> <span
  m="2983440">you</span> <span m="2983550">could</span> <span m="2983750">go
  out</span> <span m="2983980">further.</span></p><p><span m="2988050">So</span>
  <span m="2988330">the</span> <span m="2988490">question</span> <span
  m="2989070">now</span> <span m="2989370">is,</span> <span
  m="2990570">after</span> <span m="2991160">we</span> <span
  m="2991310">kind</span> <span m="2991420">of</span> <span
  m="2991500">tell</span> <span m="2991830">you</span> <span
  m="2991990">the</span> <span m="2992120">results</span> <span
  m="2992520">of</span> <span m="2992570">these</span> <span
  m="2992670">evolution</span> <span m="2993070">experiments,</span> <span
  m="2994210">how</span> <span m="2995990">much</span> <span
  m="2996610">should</span> <span m="2996890">that</span> <span
  m="2997130">favor</span> <span m="2997650">this</span> <span
  m="2997910">dashed</span> <span m="2998450">red</span> <span
  m="2998810">line,</span> <span m="2999200">this super</span> <span
  m="2999660">linear</span> <span m="3000890">cost</span> <span
  m="3001230">function</span> <span m="3002070">with</span> <span
  m="3002290">finite</span> <span m="3002700">resources?</span> <span
  m="3004810">And</span> <span m="3006770">on</span> <span
  m="3006910">one</span> <span m="3007050">level,</span> <span m="3007280">you'd
  say,</span> <span m="3007430">oh,</span> <span m="3007620">well,</span> <span
  m="3007830">that's</span> <span m="3008930">pretty</span> <span
  m="3009130">compelling.</span></p><p><span m="3011810">On</span> <span
  m="3012240">another</span> <span m="3012620">level,</span> <span
  m="3015910">later</span> <span m="3016190">people</span> <span
  m="3016470">that</span> <span m="3016540">have</span> <span m="3016630">come
  and</span> <span m="3016990">measured</span> <span m="3017250">this</span>
  <span m="3018290">find that</span> <span m="3018540">it's</span> <span
  m="3018830">basically</span> <span m="3019140">a</span> <span
  m="3019200">line.</span> <span m="3021230">So</span> <span
  m="3021920">are</span> <span m="3022010">there</span> <span
  m="3022190">any</span> <span m="3022320">questions?</span> <span
  m="3023390">So</span> <span m="3023900">it</span> <span
  m="3024100">seems</span> <span m="3024430">to</span> <span
  m="3024920">basically</span> <span m="3025630">be</span> <span
  m="3025800">not</span> <span m="3026210">true</span> <span
  m="3026770">within</span> <span m="3027130">this</span> <span
  m="3027340">range.</span> <span m="3029360">It</span> <span
  m="3029500">is</span> <span m="3029670">the</span> <span
  m="3029760">case</span> <span m="3030060">that</span> <span
  m="3030180">if</span> <span m="3030270">you</span> <span m="3030360">go</span>
  <span m="3030560">out</span> <span m="3030820">far</span> <span
  m="3031100">enough,</span> <span m="3031420">then</span> <span
  m="3031650">the</span> <span m="3032040">growth</span> <span
  m="3032340">does</span> <span m="3032540">go</span> <span
  m="3032630">to</span> <span m="3032690">0.</span> <span m="3032890">But</span>
  <span m="3033800">that's</span> <span m="3034330">much</span> <span
  m="3034570">further</span> <span m="3034850">out.</span> <span
  m="3036510">Yes.</span></p><p><span m="3036840">AUDIENCE:</span> <span
  m="3037337">After they--</span> <span m="3038331">on the</span> <span
  m="3038828">experiment,</span> <span m="3039325">they had</span> <span
  m="3041313">[INAUDIBLE]</span> <span m="3041810">expression</span> <span
  m="3042307">protein at the</span> <span m="3042804">[INAUDIBLE] level.</span>
  <span m="3043301">Why didn't they go back</span> <span m="3043798">and do
  the</span> <span m="3044295">experiment again,</span> <span m="3044792">just
  to see</span> <span m="3045289">[INAUDIBLE]?</span></p><p><span
  m="3045786">PROFESSOR:</span> <span m="3046290">OK,</span> <span
  m="3046490">so</span> <span m="3046630">actually,</span> <span
  m="3047000">one</span> <span m="3047270">of</span> <span
  m="3047350">these</span> <span m="3047550">curves--</span> <span
  m="3048080">so</span> <span m="3048850">the</span> <span
  m="3049270">triangle,</span> <span m="3050060">the</span> <span
  m="3050160">sort</span> <span m="3050320">of</span> <span
  m="3050380">teal</span> <span m="3050850">triangle,</span> <span
  m="3053220">it</span> <span m="3053350">is</span> <span
  m="3053610">indeed</span> <span m="3053990">higher</span> <span
  m="3054360">up.</span> <span m="3054870">And</span> <span
  m="3055080">it's</span> <span m="3055400">kind</span> <span
  m="3055620">of</span> <span m="3055710">here.</span> <span
  m="3057330">So</span> <span m="3057390">they</span> <span
  m="3057510">do</span> <span m="3057740">have</span> <span m="3057980">a</span>
  <span m="3058040">data</span> <span m="3058290">point</span> <span
  m="3058520">that</span> <span m="3058620">is</span> <span
  m="3058800">further</span> <span m="3059390">beyond</span> <span
  m="3059830">and</span> <span m="3060140">is,</span> <span
  m="3061000">again,</span> <span m="3061320">above</span> <span
  m="3062120">that</span> <span m="3062290">curve.</span> <span
  m="3063030">So</span> <span m="3063340">that</span> <span
  m="3063570">does</span> <span m="3063880">provide</span> <span
  m="3064970">somewhat</span> <span m="3065410">further</span> <span
  m="3066030">support</span> <span m="3066560">for</span> <span
  m="3066680">a</span> <span m="3066720">non-linear</span> <span
  m="3067396">model.</span></p><p><span m="3070870">But</span> <span
  m="3071660">again,</span> <span m="3072140">there's a</span> <span
  m="3072340">question</span> <span m="3072620">of</span> <span
  m="3072670">how</span> <span m="3072800">strong</span> <span
  m="3073280">that</span> <span m="3073460">should</span> <span
  m="3073620">be</span> <span m="3073860">and</span> <span m="3073960">so</span>
  <span m="3074070">forth.</span> <span m="3075650">And</span> <span
  m="3075800">indeed,</span> <span m="3077780">I'd</span> <span
  m="3077960">say,</span> <span m="3078690">for</span> <span
  m="3078760">example,</span> <span m="3079030">Terry</span> <span
  m="3079420">Hwa</span> <span m="3079880">has</span> <span
  m="3080130">spent</span> <span m="3080250">a</span> <span
  m="3080320">lot</span> <span m="3080580">of</span> <span
  m="3080640">time</span> <span m="3081620">characterizing</span> <span
  m="3082360">growth</span> <span m="3083210">rates</span> <span
  m="3083730">as</span> <span m="3083800">a</span> <span
  m="3083870">function</span> <span m="3084290">of</span> <span
  m="3084480">many,</span> <span m="3084800">many</span> <span
  m="3084910">things.</span></p><p><span m="3086450">And</span> <span
  m="3088550">if</span> <span m="3089140">you</span> <span
  m="3089230">measure</span> <span m="3089620">the</span> <span
  m="3091680">relative</span> <span m="3092080">growth</span> <span
  m="3092390">rate</span> <span m="3093000">as</span> <span m="3093190">a</span>
  <span m="3093250">function</span> <span m="3093690">of</span> <span
  m="3096440">a</span> <span m="3096550">non-useful</span> <span
  m="3097360">protein</span> <span m="3097690">expression--</span> <span
  m="3101520">and</span> <span m="3101890">what</span> <span
  m="3102070">he</span> <span m="3102150">finds</span> <span m="3102510">is
  that</span> <span m="3102640">this thing</span> <span
  m="3103000">basically</span> <span m="3103420">looks</span> <span
  m="3103620">like</span> <span m="3104760">a</span> <span
  m="3104850">line</span> <span m="3105140">in</span> <span
  m="3105200">this</span> <span m="3105410">axis.</span></p><p><span
  m="3106430">And</span> <span m="3106900">it</span> <span
  m="3107050">saturates</span> <span m="3107580">at</span> <span
  m="3107650">around</span> <span m="3108600">if</span> <span m="3108730">you're
  at</span> <span m="3108880">30%</span> <span m="3109780">maybe</span> <span
  m="3110150">of</span> <span m="3112310">total</span> <span
  m="3113090">protein</span> <span m="3113600">expression.</span> <span
  m="3115740">So</span> <span m="3115820">this is</span> <span
  m="3115950">a</span> <span m="3116040">lot.</span> <span
  m="3117600">But</span> <span m="3118170">this</span> <span
  m="3118500">is</span> <span m="3118620">kind</span> <span
  m="3118780">of</span> <span m="3118880">where</span> <span
  m="3119680">the</span> <span m="3119750">cell</span> <span
  m="3120020">just</span> <span m="3120160">can't</span> <span
  m="3120350">handle</span> <span m="3120630">that.</span></p><p><span
  m="3124190">So</span> <span m="3124280">Terry</span> <span
  m="3124570">Hwa</span> <span m="3124840">has</span> <span
  m="3125600">recently</span> <span m="3127080">been</span> <span
  m="3127190">exploring</span> <span m="3127530">a</span> <span
  m="3127570">lot</span> <span m="3127710">of</span> <span
  m="3127750">these</span> <span m="3127940">sort</span> <span
  m="3128300">of</span> <span m="3128410">phenomenological</span> <span
  m="3129480">growth</span> <span m="3129780">laws,</span> <span
  m="3130400">where</span> <span m="3132540">he</span> <span
  m="3132740">imposes</span> <span m="3133280">costs</span> <span
  m="3133740">of</span> <span m="3133830">various</span> <span
  m="3134160">sorts</span> <span m="3134830">and</span> <span
  m="3135080">then</span> <span m="3135260">looks</span> <span
  m="3135550">at</span> <span m="3136195">how</span> <span
  m="3136500">the</span> <span m="3136610">cell</span> <span
  m="3136900">kind</span> <span m="3137030">of</span> <span
  m="3137090">responds.</span></p><p><span m="3137570">And what he</span> <span
  m="3137780">finds</span> <span m="3138500">is</span> <span
  m="3138620">just</span> <span m="3139150">a</span> <span
  m="3139260">remarkably</span> <span m="3140520">large</span> <span
  m="3140830">number</span> <span m="3141020">of</span> <span
  m="3141110">lines</span> <span m="3141740">in</span> <span
  m="3141860">various</span> <span m="3142610">spaces</span> <span
  m="3143600">that</span> <span m="3144590">I</span> <span
  m="3144750">find</span> <span m="3145220">very</span> <span
  m="3145440">surprising,</span> <span m="3147410">but</span> <span
  m="3147590">that</span> <span m="3147680">he</span> <span
  m="3147800">can</span> <span m="3148140">understand</span> <span
  m="3148640">using</span> <span m="3148920">kind</span> <span
  m="3149070">of</span> <span m="3149150">some</span> <span
  m="3149530">phenomenological</span> <span m="3150240">modeling.</span> <span
  m="3151376">But</span> <span m="3151720">this</span> <span
  m="3152000">is</span> <span m="3152390">one</span> <span m="3152680">of</span>
  <span m="3152790">like</span> <span m="3153090">a</span> <span
  m="3153220">dozen</span> <span m="3153580">lines</span> <span m="3154020">that
  he</span> <span m="3154150">sees</span> <span m="3154460">of</span> <span
  m="3154520">various</span> <span m="3154840">axes</span> <span
  m="3155430">doing</span> <span m="3155630">things.</span></p><p><span
  m="3157060">But</span> <span m="3157170">the</span> <span
  m="3157500">point</span> <span m="3157760">here</span> <span
  m="3157970">is</span> <span m="3158070">that,</span> <span
  m="3158760">as</span> <span m="3158900">a</span> <span
  m="3158950">function</span> <span m="3159340">of</span> <span
  m="3159460">the</span> <span m="3159560">level of</span> <span
  m="3159940">expression</span> <span m="3160350">of</span> <span
  m="3160450">these</span> <span m="3160610">non-useful</span> <span
  m="3161050">proteins,</span> <span m="3162450">what he</span> <span
  m="3162700">sees is</span> <span m="3163150">that</span> <span
  m="3163840">for</span> <span m="3164020">a</span> <span
  m="3164050">variety</span> <span m="3164380">of different</span> <span
  m="3164570">proteins--</span> <span m="3164980">including</span> <span
  m="3165390">beta-gal</span> <span m="3166130">but</span> <span
  m="3166220">also</span> <span m="3166640">beta-lactamase</span> <span
  m="3167215">and</span> <span m="3167490">other</span> <span
  m="3168530">proteins</span> <span m="3168980">that are</span> <span
  m="3169050">not</span> <span m="3169230">being</span> <span
  m="3169380">used</span> <span m="3169820">in</span> <span
  m="3169860">that</span> <span m="3170000">particular</span> <span
  m="3170250">environment--</span> <span m="3170880">what he</span> <span
  m="3171010">sees is</span> <span m="3171450">that</span> <span
  m="3171650">there's</span> <span m="3172480">basically</span> <span
  m="3172780">a</span> <span m="3172850">linear</span> <span
  m="3174330">cost</span> <span m="3174850">growth,</span> <span
  m="3178550">as</span> <span m="3178950">you</span> <span
  m="3179420">impose</span> <span m="3179960">this</span> <span
  m="3180450">non-useful</span> <span m="3181060">protein</span> <span
  m="3181290">expression.</span></p><p><span m="3183900">So</span> <span
  m="3184000">I'd</span> <span m="3184110">say</span> <span
  m="3184220">that</span> <span m="3185960">this</span> <span
  m="3186230">basic</span> <span m="3186590">statement</span> <span
  m="3187120">of</span> <span m="3187280">it</span> <span
  m="3187420">being</span> <span m="3187600">not--</span> <span m="3188490">the
  statement</span> <span m="3188770">of</span> <span m="3189130">cost</span>
  <span m="3189470">being</span> <span m="3189780">super</span> <span
  m="3190050">linear,</span> <span m="3190570">I</span> <span
  m="3190660">think,</span> <span m="3192130">ends</span> <span
  m="3192360">up</span> <span m="3192520">not</span> <span
  m="3192750">being</span> <span m="3192950">true.</span> <span
  m="3195130">Now,</span> <span m="3195730">what</span> <span
  m="3195950">does</span> <span m="3196110">it</span> <span
  m="3196230">mean</span> <span m="3196880">for</span> <span
  m="3197530">this</span> <span m="3197830">paper?</span></p><p><span
  m="3209104">AUDIENCE:</span> <span m="3209596">I mean,</span> <span
  m="3210088">they still</span> <span m="3210580">presented with</span> <span
  m="3211072">same</span> <span m="3211564">hypothesis</span> <span
  m="3212056">and</span> <span m="3212548">had</span> <span
  m="3213040">these</span> <span m="3213532">data to</span> <span
  m="3214024">back</span> <span m="3214516">up</span> <span m="3215008">some of
  it.</span></p><p><span m="3215510">PROFESSOR: Yeah,</span> <span
  m="3215900">right.</span> <span m="3216090">So</span> <span m="3218240">it's
  a</span> <span m="3218570">very</span> <span m="3218730">interesting</span>
  <span m="3219020">hypothesis.</span> <span m="3219770">They</span> <span
  m="3219970">did</span> <span m="3220450">nice</span> <span
  m="3220740">evolution</span> <span m="3221160">experiments,</span> <span
  m="3221480">where they</span> <span m="3221800">saw</span> <span
  m="3222220">the</span> <span m="3222310">population</span> <span
  m="3222820">adapt</span> <span m="3223220">to</span> <span
  m="3223290">different</span> <span m="3223520">levels.</span></p><p><span
  m="3225430">But</span> <span m="3225550">what</span> <span
  m="3225670">does</span> <span m="3225750">it</span> <span
  m="3225860">mean</span> <span m="3226470">about</span> <span
  m="3227460">the</span> <span m="3227590">predictions,</span> <span
  m="3228930">in</span> <span m="3229000">particular,</span> <span
  m="3229660">in the sense that</span> <span m="3230070">if</span> <span
  m="3230190">you</span> <span m="3230300">measure</span> <span
  m="3230950">cost</span> <span m="3231260">and</span> <span
  m="3231340">benefits,</span> <span m="3231840">then</span> <span
  m="3231960">you</span> <span m="3232050">want</span> <span
  m="3232140">to</span> <span m="3232190">predict</span> <span
  m="3232590">where</span> <span m="3232680">it's</span> <span
  m="3232780">going</span> <span m="3232870">to</span> <span
  m="3232910">evolve.</span> <span m="3237350">What</span> <span
  m="3237490">happens?</span> <span m="3238170">If</span> <span
  m="3238670">it's</span> <span m="3238860">the</span> <span
  m="3238950">case</span> <span m="3239350">that</span> <span
  m="3240190">cost</span> <span m="3240690">as</span> <span m="3240760">a</span>
  <span m="3240810">function of</span> <span m="3241080">expression</span> <span
  m="3241510">is</span> <span m="3241610">actually</span> <span
  m="3241820">linear,</span> <span m="3242730">then</span> <span
  m="3242830">what</span> <span m="3242850">does</span> <span
  m="3242930">that</span> <span m="3243090">mean</span> <span
  m="3243830">for</span> <span m="3244090">their</span> <span
  m="3244440">ability</span> <span m="3244800">to</span> <span
  m="3244890">predict</span> <span m="3245330">what's</span> <span
  m="3245460">going</span> <span m="3245630">to happen?</span></p><p><span
  m="3263462">AUDIENCE:</span> <span m="3263970">Seems</span> <span
  m="3264100">like</span> <span m="3264565">if they use their</span> <span
  m="3265030">same</span> <span m="3265746">model</span> <span
  m="3266232">for</span> <span m="3266718">the benefit</span> <span
  m="3267204">in this</span> <span m="3267690">linear</span> <span
  m="3268662">cost,</span> <span m="3269148">that</span> <span m="3269634">their
  predictions</span> <span m="3270120">would be really</span> <span
  m="3270606">off</span> <span m="3271578">[INAUDIBLE].</span></p><p><span
  m="3272070">PROFESSOR: Yeah,</span> <span m="3272790">right.</span> <span
  m="3273000">So</span> <span m="3273090">the</span> <span
  m="3273200">problem</span> <span m="3273920">is</span> <span
  m="3274030">that</span> <span m="3274550">if</span> <span
  m="3274680">you</span> <span m="3274780">actually</span> <span
  m="3275020">use</span> <span m="3275210">a</span> <span
  m="3275280">linear</span> <span m="3276300">function</span> <span
  m="3276660">here,</span> <span m="3277330">then</span> <span
  m="3278590">their</span> <span m="3279080">model</span> <span
  m="3279460">doesn't</span> <span m="3279900">even</span> <span
  m="3280170">predict</span> <span m="3281835">that</span> <span
  m="3282100">there</span> <span m="3282320">should</span> <span
  m="3282440">be</span> <span m="3282520">an</span> <span
  m="3282660">optimum,</span> <span m="3283730">because</span> <span
  m="3284130">their</span> <span m="3284340">benefit</span> <span
  m="3284820">function ends</span> <span m="3285250">up</span> <span
  m="3285350">also</span> <span m="3285640">being</span> <span
  m="3285930">essentially</span> <span m="3286260">linear</span> <span
  m="3286790">with</span> <span m="3286930">the</span> <span
  m="3286990">amount</span> <span m="3287230">of</span> <span
  m="3288030">this</span> <span m="3288240">protein</span> <span
  m="3288530">expressed.</span></p><p><span m="3289390">So</span> <span
  m="3289530">if</span> <span m="3289600">you</span> <span
  m="3289680">have</span> <span m="3289810">two</span> <span
  m="3290070">lines--</span> <span m="3293130">so</span> <span
  m="3293310">overall</span> <span m="3294040">growth</span> <span
  m="3295660">is</span> <span m="3296060">something</span> <span
  m="3296460">like</span> <span m="3297610">goes</span> <span
  m="3297910">as</span> <span m="3298070">benefits</span> <span
  m="3298650">minus</span> <span m="3299010">costs.</span> <span
  m="3302490">And</span> <span m="3302590">maybe</span> <span
  m="3304110">this</span> <span m="3304220">is</span> <span m="3304300">a</span>
  <span m="3304400">relative</span> <span m="3304840">growth.</span> <span
  m="3307340">So</span> <span m="3307660">if</span> <span m="3307730">you</span>
  <span m="3307830">have</span> <span m="3307960">a line</span> <span
  m="3309590">here</span> <span m="3309980">and</span> <span
  m="3310030">a</span> <span m="3310110">line</span> <span
  m="3310500">here,</span> <span m="3312350">no</span> <span
  m="3312690">optimum.</span> <span m="3315340">So</span> <span
  m="3315460">that's</span> <span m="3315680">kind</span> <span
  m="3315870">of</span> <span m="3315940">a</span> <span
  m="3315990">bummer.</span></p><p><span m="3318480">But</span> <span
  m="3319530">it</span> <span m="3319680">doesn't</span> <span
  m="3319930">mean</span> <span m="3320100">that</span> <span
  m="3320210">that's--</span> <span m="3323760">in</span> <span
  m="3324120">biology,</span> <span m="3324560">eventually</span> <span
  m="3324890">things</span> <span m="3325120">are</span> <span
  m="3325360">non-linear,</span> <span m="3326050">so</span> <span
  m="3326160">there</span> <span m="3326280">should</span> <span
  m="3326540">be</span> <span m="3326650">some</span> <span
  m="3327280">optimum.</span> <span m="3328160">And</span> <span
  m="3328300">actually,</span> <span m="3328480">what</span> <span
  m="3328570">I</span> <span m="3328630">would</span> <span
  m="3328750">say</span> <span m="3328900">is that</span> <span
  m="3329030">I</span> <span m="3329120">think</span> <span
  m="3329330">that</span> <span m="3329620">the</span> <span
  m="3329820">non-linearity</span> <span m="3330760">is</span> <span
  m="3330900">probably</span> <span m="3331330">actually</span> <span
  m="3331700">here.</span></p><p><span m="3332830">That's</span> <span
  m="3333120">the</span> <span m="3333500">non-linearity</span> <span
  m="3334040">that's</span> <span m="3334220">relevant,</span> <span
  m="3334790">maybe,</span> <span m="3336330">is</span> <span
  m="3336820">dominated</span> <span m="3337770">on</span> <span
  m="3337930">the</span> <span m="3338010">benefit</span> <span
  m="3338450">side</span> <span m="3338730">rather</span> <span
  m="3338960">than</span> <span m="3339150">the</span> <span
  m="3339250">cost</span> <span m="3339550">side.</span> <span
  m="3341980">My</span> <span m="3342160">guess as to</span> <span
  m="3342420">what's</span> <span m="3342600">going</span> <span
  m="3342730">on</span> <span m="3342870">here</span> <span
  m="3343030">is</span> <span m="3343100">that</span> <span
  m="3343240">rather</span> <span m="3343490">than</span> <span
  m="3343640">the</span> <span m="3343730">costs</span> <span
  m="3344940">growing</span> <span m="3345610">super</span> <span
  m="3346040">linearly</span> <span m="3346590">with</span> <span
  m="3346810">the</span> <span m="3347110">expression</span> <span
  m="3347480">level,</span> <span m="3348240">rather</span> <span
  m="3348510">the</span> <span m="3348630">benefits</span> <span
  m="3349200">will</span> <span m="3349390">be</span> <span
  m="3349690">sub-linear</span> <span m="3351410">with the</span> <span
  m="3351590">expression</span> <span m="3352000">level.</span> <span
  m="3355840">And</span> <span m="3357160">why</span> <span
  m="3357350">might</span> <span m="3357550">that</span> <span
  m="3357750">be?</span></p><p><span m="3366626">AUDIENCE:</span> <span
  m="3367103">We're</span> <span m="3367580">just seeing</span> <span
  m="3367740">them apart,</span> <span m="3368740">splitting up</span> <span
  m="3369240">more</span> <span m="3369688">lactose</span> <span
  m="3370136">that's</span> <span m="3370584">useful,</span> <span
  m="3371032">just so it</span> <span m="3371480">can't</span> <span
  m="3371928">metabolize</span> <span m="3372376">more of it.</span></p><p><span
  m="3372824">PROFESSOR:</span> <span m="3373280">Right,</span> <span
  m="3373520">you know,</span> <span m="3373630">at</span> <span
  m="3373750">some</span> <span m="3374080">point,</span> <span
  m="3374640">it's</span> <span m="3374790">just</span> <span
  m="3374990">that</span> <span m="3375160">the</span> <span
  m="3375240">cell</span> <span m="3375550">doesn't</span> <span
  m="3375830">need</span> <span m="3376150">more</span> <span
  m="3376370">sugar.</span> <span m="3378310">And</span> <span
  m="3378660">then</span> <span m="3378800">it's</span> <span
  m="3378990">not</span> <span m="3379160">going</span> <span
  m="3379250">to</span> <span m="3379300">be</span> <span m="3379430">as</span>
  <span m="3379530">useful.</span></p><p><span m="3380140">And</span> <span
  m="3380290">even</span> <span m="3380920">before</span> <span
  m="3381320">you</span> <span m="3381450">get</span> <span
  m="3381610">to</span> <span m="3381690">that</span> <span
  m="3381870">regime,</span> <span m="3382640">I</span> <span
  m="3382740">think</span> <span m="3383150">there</span> <span
  m="3383820">are</span> <span m="3383840">various</span> <span
  m="3384200">ways</span> <span m="3384470">in</span> <span
  m="3384530">which</span> <span m="3385400">cells</span> <span m="3385700">may
  be</span> <span m="3385970">able to</span> <span m="3386150">use</span> <span
  m="3388590">the</span> <span m="3388660">sugar</span> <span
  m="3388920">more</span> <span m="3389190">or</span> <span
  m="3389230">less</span> <span m="3389440">efficiently,</span> <span
  m="3389900">depending</span> <span m="3390160">on</span> <span
  m="3390200">how</span> <span m="3390290">much</span> <span
  m="3390490">they</span> <span m="3390570">have</span> <span
  m="3391030">it,</span> <span m="3391050">which</span> <span
  m="3391220">means</span> <span m="3391490">that</span> <span
  m="3391680">as--</span> <span m="3392590">and</span> <span
  m="3392690">this</span> <span m="3392830">is</span> <span
  m="3392980">just</span> <span m="3393290">like</span> <span
  m="3393810">for</span> <span m="3394000">us,</span> <span
  m="3394840">the</span> <span m="3394910">first</span> <span m="3395240">slice
  of</span> <span m="3395480">pizza is</span> <span m="3395880">great.</span>
  <span m="3396910">But</span> <span m="3397010">then</span> <span
  m="3397140">once</span> <span m="3397290">you're</span> <span m="3397380">at
  the</span> <span m="3397510">fifth</span> <span m="3397780">one,</span> <span
  m="3398100">you</span> <span m="3398200">start</span> <span
  m="3398490">to</span> <span m="3398560">feel</span> <span m="3398800">a</span>
  <span m="3398830">little</span> <span m="3399080">bit</span> <span
  m="3399790">full.</span></p><p><span m="3400580">So</span> <span
  m="3401240">in</span> <span m="3401430">general</span> <span
  m="3401900">benefits</span> <span m="3402700">as</span> <span
  m="3402900">a</span> <span m="3402950">function</span> <span
  m="3403280">of</span> <span m="3403570">anything,</span> <span
  m="3407020">should</span> <span m="3407270">have</span> <span
  m="3407440">some</span> <span m="3407720">saturating</span> <span
  m="3408450">behavior.</span> <span m="3413560">And</span> <span
  m="3414090">my</span> <span m="3414210">sense</span> <span
  m="3414420">is</span> <span m="3414540">that</span> <span
  m="3414640">this</span> <span m="3414810">is</span> <span
  m="3414930">basically</span> <span m="3415630">why</span> <span
  m="3415840">there's</span> <span m="3416070">an optimum</span> <span
  m="3416340">here.</span></p><p><span m="3418510">Now,</span> <span
  m="3418650">of</span> <span m="3418740">course,</span> <span
  m="3422250">I'd</span> <span m="3422430">say</span> <span
  m="3422530">that</span> <span m="3423640">all</span> <span
  m="3423870">these</span> <span m="3424040">cost</span> <span
  m="3424300">functions</span> <span m="3424640">behave</span> <span
  m="3424930">very</span> <span m="3425210">similarly</span> <span
  m="3425730">in</span> <span m="3425820">here.</span> <span
  m="3426520">So</span> <span m="3426650">the</span> <span
  m="3426780">predictions</span> <span m="3427440">that</span> <span
  m="3427540">they</span> <span m="3427720">make</span> <span
  m="3428050">in</span> <span m="3428170">here</span> <span
  m="3428500">are</span> <span m="3428610">really</span> <span
  m="3428840">not</span> <span m="3429160">very</span> <span
  m="3429350">sensitive</span> <span m="3429820">to</span> <span
  m="3430260">which</span> <span m="3430550">of the</span> <span
  m="3430660">cost</span> <span m="3430930">functions</span> <span
  m="3431200">they</span> <span m="3431300">use.</span> <span
  m="3431520">And</span> <span m="3431640">those</span> <span
  m="3431880">are</span> <span m="3431990">all</span> <span
  m="3432160">still</span> <span m="3432460">then</span> <span
  m="3433290">relevant</span> <span m="3433830">and</span> <span
  m="3433950">valid.</span></p><p><span m="3435710">The</span> <span
  m="3435900">question</span> <span m="3436310">is</span> <span
  m="3436450">just</span> <span m="3437000">trying</span> <span
  m="3437320">to</span> <span m="3437380">predict</span> <span
  m="3437640">what</span> <span m="3437730">happens</span> <span
  m="3438300">beyond</span> <span m="3438790">the</span> <span m="3438880">range
  that you have</span> <span m="3439290">data</span> <span m="3439690">is</span>
  <span m="3439790">very</span> <span m="3439980">hard,</span> <span
  m="3440370">because</span> <span m="3440950">it</span> <span
  m="3441100">depends</span> <span m="3441410">very</span> <span
  m="3441570">much</span> <span m="3441790">on</span> <span
  m="3441930">what</span> <span m="3442420">your</span> <span
  m="3442580">curve</span> <span m="3442940">does</span> <span
  m="3443270">past</span> <span m="3443610">that</span> <span
  m="3443810">region.</span></p><p><span m="3451160">So</span> <span
  m="3451330">I</span> <span m="3452010">guess</span> <span
  m="3452200">I've</span> <span m="3452520">made</span> <span
  m="3452640">an</span> <span m="3452780">argument</span> <span
  m="3453400">that</span> <span m="3453490">I</span> <span
  m="3453560">think</span> <span m="3453910">that</span> <span
  m="3454340">maybe</span> <span m="3454630">what's</span> <span
  m="3454750">happening</span> <span m="3455060">is</span> <span
  m="3455140">that the</span> <span m="3455250">benefit</span> <span
  m="3455630">function</span> <span m="3455880">here</span> <span
  m="3456050">is</span> <span m="3456140">non-linear.</span> <span
  m="3456390">But</span> <span m="3456730">what</span> <span
  m="3456850">did</span> <span m="3456950">they</span> <span
  m="3457020">actually</span> <span m="3457330">do</span> <span
  m="3457600">to</span> <span m="3458190">measure</span> <span
  m="3458620">the</span> <span m="3458720">benefits,</span> <span
  m="3459540">because</span> <span m="3459730">this</span> <span
  m="3460680">is</span> <span m="3460820">not</span> <span m="3461880">I
  think</span> <span m="3462030">totally</span> <span m="3462330">obvious</span>
  <span m="3462580">either?</span></p><p><span m="3486510">So</span> <span
  m="3487710">what</span> <span m="3487730">should I</span> <span
  m="3487990">be</span> <span m="3488190">plotting?</span> <span
  m="3488660">Well,</span> <span m="3488960">this</span> <span
  m="3489110">is</span> <span m="3489200">still</span> <span
  m="3489420">a</span> <span m="3489490">relative</span> <span
  m="3489880">growth</span> <span m="3490140">rate.</span> <span
  m="3495210">And</span> <span m="3496050">here,</span> <span
  m="3497310">this</span> <span m="3497550">was</span> <span
  m="3497660">actually</span> <span m="3498330">lactose</span> <span
  m="3498890">concentrations.</span> <span m="3499530">So</span> <span
  m="3499630">this</span> <span m="3499810">is</span> <span
  m="3499940">not</span> <span m="3501340">lac</span> <span
  m="3501700">expression,</span> <span m="3502190">which</span> <span
  m="3502340">is</span> <span m="3502430">the</span> <span
  m="3502520">most</span> <span m="3502760">obvious</span> <span
  m="3503220">thing</span> <span m="3503650">that you would</span> <span
  m="3503850">want</span> <span m="3503970">to</span> <span
  m="3504010">do,</span> <span m="3504130">but</span> <span
  m="3504210">that's</span> <span m="3504550">harder.</span></p><p><span
  m="3506530">And</span> <span m="3506670">what</span> <span
  m="3506810">they</span> <span m="3506910">show</span> <span
  m="3507230">is</span> <span m="3507330">that</span> <span
  m="3507590">their</span> <span m="3507740">model</span> <span
  m="3508100">is</span> <span m="3508170">sort</span> <span
  m="3508290">of</span> <span m="3508330">consistent</span> <span
  m="3508800">on</span> <span m="3508940">this</span> <span
  m="3509170">axis.</span> <span m="3510690">This is</span> <span
  m="3510930">external</span> <span m="3511550">lactose.</span> <span
  m="3516360">And</span> <span m="3517110">the</span> <span
  m="3517240">idea</span> <span m="3517540">is</span> <span
  m="3517700">that--</span> <span m="3520960">here is</span> <span
  m="3521300">0--</span> <span m="3521870">in</span> <span
  m="3521950">the</span> <span m="3522110">absence</span> <span
  m="3522600">of</span> <span m="3522680">any</span> <span
  m="3522820">lactose,</span> <span m="3523390">if</span> <span
  m="3523510">you</span> <span m="3523810">induce</span> <span
  m="3525040">the</span> <span m="3525160">lac</span> <span
  m="3525420">operon,</span> <span m="3525860">then</span> <span
  m="3525990">you're</span> <span m="3526140">at</span> <span
  m="3526220">this</span> <span m="3526390">minus</span> <span
  m="3526830">4</span> <span m="3527060">and</span> <span
  m="3527290">1/2%</span> <span m="3528070">or</span> <span
  m="3528160">whatnot.</span></p><p><span m="3530400">So</span> <span
  m="3530560">it</span> <span m="3530830">kind</span> <span
  m="3531000">of</span> <span m="3531090">starts</span> <span
  m="3531420">out</span> <span m="3532580">down</span> <span
  m="3532790">here.</span> <span m="3534650">And</span> <span
  m="3534780">then</span> <span m="3535310">up</span> <span
  m="3535490">here,</span> <span m="3535780">it</span> <span
  m="3535850">comes</span> <span m="3536100">out</span> <span
  m="3536350">up</span> <span m="3536460">to</span> <span
  m="3536730">above</span> <span m="3537140">0.1.</span> <span
  m="3538300">So</span> <span m="3538330">this</span> <span
  m="3538490">is</span> <span m="3538670">the</span> <span
  m="3538790">first</span> <span m="3538890">4,</span> <span
  m="3539780">maybe</span> <span m="3540130">4.5%.</span> <span
  m="3541620">This</span> <span m="3541770">is</span> <span
  m="3541920">up</span> <span m="3542100">here</span> <span
  m="3542360">at</span> <span m="3542490">10%.</span> <span
  m="3543970">And</span> <span m="3544120">you</span> <span
  m="3544220">end</span> <span m="3544350">up</span> <span
  m="3544450">with</span> <span m="3544570">a</span> <span
  m="3544610">curve</span> <span m="3544970">that</span> <span m="3545080">kind
  of</span> <span m="3549730">goes</span> <span m="3550040">from</span> <span
  m="3550800">4% or</span> <span m="3551290">5%</span> <span
  m="3551600">deficit</span> <span m="3552420">up</span> <span
  m="3552600">to</span> <span m="3552720">10%</span> <span m="3552920">or</span>
  <span m="3552970">11%</span> <span m="3554260">advantage.</span></p><p><span
  m="3555760">And</span> <span m="3556860">this</span> <span
  m="3556980">is</span> <span m="3557090">at</span> <span
  m="3557240">full</span> <span m="3557570">induction</span> <span
  m="3557830">of</span> <span m="3558090">the</span> <span
  m="3558140">lac</span> <span m="3558480">operon.</span> <span
  m="3562870">What</span> <span m="3563090">this</span> <span
  m="3563300">is</span> <span m="3563430">saying</span> <span
  m="3563830">is</span> <span m="3563980">that</span> <span
  m="3566510">if</span> <span m="3566690">you're</span> <span
  m="3566860">making</span> <span m="3568160">the</span> <span
  m="3568500">proteins</span> <span m="3570390">to</span> <span
  m="3570510">break</span> <span m="3570720">down and</span> <span
  m="3571190">consume</span> <span m="3571460">lactose,</span> <span
  m="3571890">then</span> <span m="3572080">there's</span> <span
  m="3572240">a</span> <span m="3572310">cost.</span> <span
  m="3573880">That's</span> <span m="3574170">just</span> <span
  m="3574280">how</span> <span m="3574370">they</span> <span
  m="3574450">plotted</span> <span m="3574800">it.</span></p><p><span
  m="3575500">But</span> <span m="3575750">that</span> <span
  m="3576580">the</span> <span m="3576720">benefits</span> <span
  m="3577220">do</span> <span m="3577340">indeed</span> <span
  m="3577620">outweigh</span> <span m="3577930">the</span> <span
  m="3578040">costs</span> <span m="3578620">at</span> <span
  m="3578840">some</span> <span m="3579180">concentration</span> <span
  m="3579820">of</span> <span m="3579900">lactose.</span> <span
  m="3584230">But</span> <span m="3584370">then</span> <span
  m="3585080">here,</span> <span m="3586150">there's</span> <span
  m="3587440">a</span> <span m="3587550">saturation.</span> <span
  m="3588160">And</span> <span m="3588290">here,</span> <span
  m="3588700">the</span> <span m="3588780">saturation</span> <span
  m="3589090">in</span> <span m="3589400">their</span> <span
  m="3589510">model--</span> <span m="3590380">they</span> <span
  m="3590690">get</span> <span m="3590820">a</span> <span
  m="3590860">saturation</span> <span m="3592710">just</span> <span
  m="3593030">because</span> <span m="3593430">of</span> <span
  m="3595020">the</span> <span m="3595340">dynamics</span> <span
  m="3595750">of</span> <span m="3595860">import.</span></p><p><span
  m="3597210">So</span> <span m="3597320">what they</span> <span
  m="3597440">assume</span> <span m="3597800">is</span> <span
  m="3597920">that</span> <span m="3598040">there's a</span> <span
  m="3598220">Michaelis-Menten</span> <span m="3599050">kinetics</span> <span
  m="3599420">for</span> <span m="3599530">import.</span> <span
  m="3601990">So</span> <span m="3602550">the</span> <span
  m="3602660">import</span> <span m="3603070">rate</span> <span
  m="3606250">kind</span> <span m="3606430">of</span> <span
  m="3606540">goes</span> <span m="3607920">as</span> <span
  m="3608700">the</span> <span m="3609660">concentration</span> <span
  m="3610790">of</span> <span m="3611820">the</span> <span
  m="3612000">lactose</span> <span m="3613820">divided</span> <span
  m="3614090">by</span> <span m="3614170">some</span> <span m="3614370">k</span>
  <span m="3614740">plus the</span> <span m="3615060">concentration</span> <span
  m="3615720">again</span> <span m="3616390">of</span> <span
  m="3616520">lactose,</span> <span m="3620310">so</span> <span
  m="3620690">Michaelis-Menten</span> <span
  m="3621340">dynamics.</span></p><p><span m="3625140">But</span> <span
  m="3625250">of</span> <span m="3625330">course,</span> <span
  m="3625690">if</span> <span m="3625790">you</span> <span
  m="3625890">have</span> <span m="3626040">more</span> <span
  m="3626440">of</span> <span m="3626510">the</span> <span
  m="3626610">protein</span> <span m="3627740">lacY,</span> <span
  m="3628240">then</span> <span m="3628340">you'll</span> <span
  m="3628450">be</span> <span m="3628530">able</span> <span
  m="3628640">to</span> <span m="3628680">import</span> <span
  m="3629040">more.</span> <span m="3632570">So</span> <span
  m="3632680">just</span> <span m="3632880">because</span> <span
  m="3633100">you</span> <span m="3633160">have</span> <span
  m="3633250">saturation</span> <span m="3633910">as</span> <span
  m="3634010">a</span> <span m="3634070">function</span> <span
  m="3634330">of</span> <span m="3634450">lactose</span> <span
  m="3635960">does</span> <span m="3636120">not</span> <span
  m="3636430">mean</span> <span m="3636620">that</span> <span
  m="3636740">you'll</span> <span m="3636880">have</span> <span
  m="3637090">saturation</span> <span m="3637840">in</span> <span
  m="3637980">terms</span> <span m="3638340">of</span> <span
  m="3638770">the</span> <span m="3640080">number</span> <span
  m="3640340">of</span> <span m="3640410">proteins</span> <span m="3640880">that
  you're</span> <span m="3641000">making.</span> <span m="3643240">Do you</span>
  <span m="3643370">understand</span> <span m="3643890">why</span> <span
  m="3644020">I'm</span> <span m="3644100">saying</span> <span
  m="3644290">that?</span></p><p><span m="3647890">And indeed,</span> <span
  m="3648450">I</span> <span m="3648530">would</span> <span
  m="3648650">say</span> <span m="3648760">that</span> <span
  m="3650720">many</span> <span m="3651060">underlying</span> <span
  m="3651620">models</span> <span m="3652150">could</span> <span
  m="3652320">have</span> <span m="3652410">been</span> <span
  m="3652540">consistent</span> <span m="3652930">with</span> <span
  m="3653040">this</span> <span m="3653200">data</span> <span
  m="3653380">as</span> <span m="3653480">well.</span> <span
  m="3653740">So</span> <span m="3653870">I'd</span> <span
  m="3654100">say</span> <span m="3654380">that</span> <span
  m="3655030">their</span> <span m="3655230">data</span> <span
  m="3655580">does</span> <span m="3655710">not</span> <span
  m="3657540">reject</span> <span m="3658020">the</span> <span
  m="3658100">hypothesis</span> <span m="3658960">that</span> <span
  m="3660300">the</span> <span m="3660410">benefit</span> <span
  m="3661420">function</span> <span m="3661750">is</span> <span
  m="3662000">sublinear.</span> <span m="3666068">Yeah.</span></p><p><span
  m="3666544">AUDIENCE: So that</span> <span m="3667496">you just said</span>
  <span m="3668448">if you have</span> <span m="3668924">more</span> <span
  m="3669400">lacY</span> <span m="3670370">and import</span> <span
  m="3670850">more</span> <span m="3671636">and it</span> <span
  m="3672030">would</span> <span m="3672350">saturate to an</span> <span
  m="3672800">[INAUDIBLE].</span> <span m="3673700">So</span> <span
  m="3674780">you</span> <span m="3675228">could</span> <span
  m="3675676">imagine</span> <span m="3676124">that by</span> <span
  m="3676572">evolution</span> <span m="3677468">something</span> <span
  m="3677916">happened</span> <span m="3678364">there.</span> <span
  m="3678820">So</span> <span m="3679030">why would</span> <span
  m="3679430">you</span> <span m="3679900">even expect</span> <span
  m="3681310">the</span> <span m="3681780">prediction</span> <span
  m="3682250">of this</span> <span m="3682720">cost-benefit</span> <span
  m="3683660">analysis?</span> <span m="3687210">You see what</span> <span
  m="3687620">I</span> <span m="3688030">mean?</span></p><p><span
  m="3688300">PROFESSOR: OK,</span> <span m="3688560">so</span> <span
  m="3688670">you're</span> <span m="3689130">saying</span> <span
  m="3689460">that</span> <span m="3691340">evolution</span> <span
  m="3691760">might</span> <span m="3691900">be</span> <span
  m="3691990">able</span> <span m="3692110">to</span> <span
  m="3692160">change</span> <span m="3692440">other</span> <span
  m="3692660">things</span> <span m="3693020">as</span> <span
  m="3693120">well</span> <span m="3693710">to</span> <span
  m="3693810">kind</span> <span m="3693940">of</span> <span
  m="3694020">fiddle--</span> <span m="3694280">yeah.</span> <span
  m="3695020">I</span> <span m="3695110">think</span> <span
  m="3695250">this</span> <span m="3695430">is</span> <span
  m="3695520">an</span> <span m="3695590">important</span> <span
  m="3696050">question.</span> <span m="3697160">I</span> <span
  m="3697470">think the</span> <span m="3697550">basic</span> <span
  m="3697860">answer</span> <span m="3698130">is that there</span> <span
  m="3698370">are</span> <span m="3698410">some</span> <span
  m="3698740">things</span> <span m="3699000">that are</span> <span
  m="3699160">easier</span> <span m="3699540">for</span> <span
  m="3699680">evolution</span> <span m="3700140">to</span> <span
  m="3700260">do</span> <span m="3700480">than</span> <span
  m="3700660">others.</span> <span m="3701850">And</span> <span
  m="3702010">also</span> <span m="3702270">that</span> <span
  m="3702420">somethings</span> <span m="3703100">have</span> <span
  m="3703220">maybe</span> <span m="3703530">already</span> <span
  m="3704050">been</span> <span m="3704420">optimized.</span></p><p><span
  m="3706240">Now,</span> <span m="3707650">relevant</span> <span
  m="3707950">to</span> <span m="3708010">this</span> <span
  m="3708170">point,</span> <span m="3708450">so</span> <span
  m="3708680">they</span> <span m="3708820">did</span> <span
  m="3709000">these</span> <span m="3709390">laboratory</span> <span
  m="3709750">evolution</span> <span m="3710180">experiments,</span> <span
  m="3711100">and</span> <span m="3711400">there</span> <span
  m="3711540">was</span> <span m="3712010">one</span> <span
  m="3712720">category</span> <span m="3714270">of</span> <span
  m="3714450">mutation</span> <span m="3715000">that</span> <span
  m="3715140">they</span> <span m="3715270">did</span> <span
  m="3715550">not</span> <span m="3716100">see.</span> <span
  m="3717310">Does</span> <span m="3717480">anybody</span> <span
  m="3717790">remember</span> <span m="3718060">what</span> <span
  m="3718200">that</span> <span m="3718340">was?</span></p><p><span
  m="3729380">What's</span> <span m="3729630">the</span> <span
  m="3729700">most</span> <span m="3729880">straightforward</span> <span
  m="3730440">way</span> <span m="3730570">of</span> <span
  m="3730660">kind</span> <span m="3730800">of</span> <span
  m="3730910">getting</span> <span m="3731190">around</span> <span
  m="3731650">all</span> <span m="3731770">this</span> <span
  m="3731950">cost-benefit</span> <span m="3732640">discussion</span> <span
  m="3734080">that</span> <span m="3734460">we've</span> <span m="3734670">just
  had?</span></p><p><span m="3757250">So the</span> <span m="3757400">one</span>
  <span m="3757560">thing that</span> <span m="3757760">they</span> <span
  m="3757880">did</span> <span m="3758070">not</span> <span
  m="3758410">see</span> <span m="3758720">was</span> <span
  m="3760010">significant</span> <span m="3760670">improvements</span> <span
  m="3761220">in</span> <span m="3761270">the</span> <span
  m="3761380">enzyme.</span> <span m="3763100">So</span> <span
  m="3763600">they</span> <span m="3763990">checked,</span> <span
  m="3764490">and</span> <span m="3764600">they</span> <span
  m="3765100">found</span> <span m="3765460">that</span> <span
  m="3765600">they</span> <span m="3765710">did</span> <span
  m="3765910">not</span> <span m="3766190">see</span> <span
  m="3766310">any</span> <span m="3766510">increase</span> <span
  m="3766910">the</span> <span m="3767050">lacZ</span> <span
  m="3767400">activity</span> <span m="3769120">normalized</span> <span
  m="3769550">by</span> <span m="3769640">the</span> <span
  m="3769710">amount</span> <span m="3769970">of</span> <span
  m="3770510">the</span> <span m="3770770">lacZ that</span> <span
  m="3771150">was</span> <span m="3771360">being</span> <span
  m="3771580">made.</span></p><p><span m="3773400">Now,</span> <span
  m="3774190">that</span> <span m="3774440">might</span> <span
  m="3774670">make</span> <span m="3774830">sense,</span> <span
  m="3775060">because</span> <span m="3775240">if</span> <span
  m="3775710">this</span> <span m="3776020">enzyme</span> <span
  m="3776315">has</span> <span m="3776610">already</span> <span
  m="3777560">been</span> <span m="3778510">gone</span> <span
  m="3778810">through</span> <span m="3779150">millions</span> <span
  m="3779560">of</span> <span m="3779650">years</span> <span
  m="3780510">of</span> <span m="3780650">optimization</span> <span
  m="3782840">to</span> <span m="3782990">break</span> <span
  m="3783260">down</span> <span m="3783440">lactose,</span> <span
  m="3783820">then</span> <span m="3783970">it's</span> <span
  m="3784130">reasonable</span> <span m="3784580">to say, oh,</span> <span
  m="3784890">well,</span> <span m="3785520">in</span> <span
  m="3785640">the</span> <span m="3785730">next</span> <span
  m="3786050">five</span> <span m="3786430">generations</span> <span
  m="3787200">in</span> <span m="3787310">the</span> <span
  m="3787370">lab,</span> <span m="3787670">it</span> <span
  m="3788180">maybe</span> <span m="3788460">won't</span> <span
  m="3788950">improve.</span></p><p><span m="3790730">Of</span> <span
  m="3790880">course,</span> <span m="3791740">you</span> <span
  m="3791770">always</span> <span m="3791900">have</span> <span
  m="3791990">to</span> <span m="3792030">be</span> <span
  m="3792110">careful</span> <span m="3792340">about</span> <span
  m="3792500">this,</span> <span m="3792650">because</span> <span
  m="3793230">it</span> <span m="3793370">could</span> <span
  m="3793580">be</span> <span m="3793740">that</span> <span
  m="3794870">some</span> <span m="3795390">sequence</span> <span
  m="3796110">slash</span> <span m="3796510">structure</span> <span
  m="3797210">is</span> <span m="3797470">best</span> <span
  m="3797980">when</span> <span m="3798100">you're</span> <span
  m="3798240">thinking</span> <span m="3798540">about--</span> <span
  m="3800200">when</span> <span m="3800480">is</span> <span
  m="3800580">it</span> <span m="3800750">that  E. coli</span> <span
  m="3801100">might</span> <span m="3801300">see</span> <span
  m="3801420">lactose?</span> <span m="3806400">Our</span> <span
  m="3806550">gut.</span></p><p><span m="3808350">So</span> <span
  m="3808700">you</span> <span m="3808890">imagine</span> <span
  m="3809340">you</span> <span m="3809430">have</span> <span
  m="3810130">bacteria</span> <span m="3810510">in the</span> <span
  m="3810580">gut.</span> <span m="3810810">That's</span> <span
  m="3810970">a</span> <span m="3811020">different</span> <span
  m="3811390">environment</span> <span m="3811880">than</span> <span
  m="3812100">in</span> <span m="3812200">the</span> <span
  m="3812290">lab.</span> <span m="3813520">So</span> <span
  m="3814020">it</span> <span m="3814130">could</span> <span
  m="3814370">be</span> <span m="3814660">very</span> <span
  m="3814890">well</span> <span m="3815200">that</span> <span
  m="3815710">the</span> <span m="3815840">enzyme,</span> <span
  m="3816650">because</span> <span m="3816850">of</span> <span
  m="3816910">the</span> <span m="3816990">pH</span> <span
  m="3817390">and</span> <span m="3817790">all</span> <span
  m="3817900">these</span> <span m="3818010">other</span> <span
  m="3818120">things,</span> <span m="3819120">the</span> <span
  m="3819260">enzyme</span> <span m="3820130">actually</span> <span
  m="3820780">could</span> <span m="3821000">adapt</span> <span
  m="3821340">to</span> <span m="3821410">the</span> <span
  m="3821490">lab,</span> <span m="3822120">even</span> <span
  m="3822510">though</span> <span m="3823320">it</span> <span
  m="3823470">may</span> <span m="3823590">have</span> <span
  m="3823700">already</span> <span m="3824130">been</span> <span
  m="3824450">adapted</span> <span m="3824850">to</span> <span
  m="3824920">our</span> <span m="3825040">gut.</span></p><p><span
  m="3825270">So</span> <span m="3825640">you have</span> <span
  m="3825930">to</span> <span m="3826040">got</span> <span m="3826140">to</span>
  <span m="3826180">be</span> <span m="3826280">careful</span> <span
  m="3826580">about</span> <span m="3826750">this</span> <span
  m="3826890">kind</span> <span m="3827000">of</span> <span
  m="3827070">argument</span> <span m="3827370">always.</span> <span
  m="3829680">But</span> <span m="3830270">of</span> <span
  m="3830360">course,</span> <span m="3830530">once</span> <span
  m="3830700">you</span> <span m="3830800">see</span> <span
  m="3831020">the</span> <span m="3831100">result,</span> <span
  m="3831490">then</span> <span m="3831630">you</span> <span
  m="3831800">say,</span> <span m="3831970">oh,</span> <span m="3832260">well,
  that's</span> <span m="3832430">because</span> <span m="3832660">of</span>
  <span m="3832720">this.</span></p><p><span m="3836870">So I</span> <span
  m="3837000">just</span> <span m="3837260">want</span> <span
  m="3837350">to</span> <span m="3837390">make</span> <span
  m="3837470">sure</span> <span m="3837610">that we</span> <span
  m="3837730">know what</span> <span m="3837960">these</span> <span
  m="3838150">experiments</span> <span m="3838540">look</span> <span
  m="3838640">like.</span> <span m="3838810">So</span> <span
  m="3839080">they</span> <span m="3839450">went</span> <span
  m="3839630">for</span> <span m="3839780">500</span> <span
  m="3840650">generations.</span> <span m="3847270">So it's</span> <span
  m="3847650">useful to</span> <span m="3847780">ask</span> <span
  m="3847980">how</span> <span m="3848260">long</span> <span
  m="3849770">this</span> <span m="3849970">experiment</span> <span
  m="3850950">should</span> <span m="3851180">have</span> <span
  m="3851330">taken.</span></p><p><span m="3861110">Is</span> <span
  m="3861280">it</span> <span m="3861790">closest</span> <span
  m="3862490">to</span> <span m="3872210">three</span> <span
  m="3872480">days,</span> <span m="3875060">three</span> <span
  m="3875320">weeks?</span> <span m="3891030">Anytime</span> <span
  m="3891730">you</span> <span m="3891950">read</span> <span
  m="3892260">about</span> <span m="3892480">an</span> <span
  m="3892570">experiment,</span> <span m="3893940">it's</span> <span
  m="3894190">useful</span> <span m="3894530">just to</span> <span
  m="3894740">have</span> <span m="3894860">some</span> <span
  m="3895340">notion</span> <span m="3896300">of</span> <span
  m="3896580">what</span> <span m="3896810">the</span> <span
  m="3896930">authors</span> <span m="3897270">went through</span> <span
  m="3897730">in</span> <span m="3897890">order</span> <span
  m="3898140">to</span> <span m="3898240">bring</span> <span
  m="3898520">you</span> <span m="3898670">the</span> <span
  m="3898770">results</span> <span m="3898940">you're reading</span> <span
  m="3899408">about.</span></p><p><span m="3905500">If</span> <span
  m="3905630">you</span> <span m="3907540">are</span> <span
  m="3907690">not</span> <span m="3907910">sure,</span> <span
  m="3908430">you</span> <span m="3908560">can</span> <span
  m="3908710">just</span> <span m="3909740">make</span> <span
  m="3909920">a</span> <span m="3909960">guess.</span> <span m="3910420">OK,
  ready,</span> <span m="3911040">3,</span> <span m="3912030">2,</span> <span
  m="3912860">1.</span> <span m="3915210">All</span> <span
  m="3915280">right,</span> <span m="3915560">so</span> <span
  m="3915640">we</span> <span m="3915750">have</span> <span
  m="3916560">some</span> <span m="3916780">number</span> <span
  m="3916990">of</span> <span m="3917070">A's,</span> <span
  m="3917650">some</span> <span m="3917800">number</span> <span
  m="3918040">of</span> <span m="3918180">B's,</span> <span
  m="3918760">and</span> <span m="3919020">a</span> <span m="3919130">couple
  of</span> <span m="3919470">C's.</span></p><p><span m="3921150">Well,</span>
  <span m="3921850">one</span> <span m="3922290">thing</span> <span
  m="3922430">you</span> <span m="3922520">might</span> <span
  m="3922740">say</span> <span m="3922940">is,</span> <span
  m="3924390">how</span> <span m="3925050">fast</span> <span
  m="3925420">can</span> <span m="3925580">E. coli</span> <span
  m="3925810">divide?</span> <span m="3927690">OK,</span> <span m="3928370">on
  one</span> <span m="3928530">level,</span> <span m="3928880">you may
  say</span> <span m="3929040">oh,</span> <span m="3929270">about</span> <span
  m="3929420">20</span> <span m="3929660">minutes.</span> <span
  m="3932930">That</span> <span m="3933140">should</span> <span
  m="3933390">give</span> <span m="3933600">us</span> <span
  m="3935370">what?</span> <span m="3935950">75-ish</span> <span
  m="3937440">generations</span> <span m="3938100">a</span> <span
  m="3938180">day.</span> <span m="3938570">So</span> <span
  m="3938960">we</span> <span m="3939040">should</span> <span
  m="3939200">be</span> <span m="3939270">able</span> <span
  m="3939380">to</span> <span m="3939440">get</span> <span
  m="3939650">here</span> <span m="3940810">in</span> <span m="3940930">a</span>
  <span m="3941000">week</span> <span m="3941300">or</span> <span
  m="3941360">something,</span> <span m="3944112">maybe.</span></p><p><span
  m="3946940">But</span> <span m="3947040">that's</span> <span
  m="3947190">not</span> <span m="3947470">what</span> <span
  m="3947680">they</span> <span m="3947840">did,</span> <span
  m="3950840">for</span> <span m="3950960">several</span> <span
  m="3951170">reasons.</span> <span m="3951540">First</span> <span
  m="3951690">of</span> <span m="3951770">all,</span> <span
  m="3952520">this</span> <span m="3952710">would</span> <span
  m="3952800">be</span> <span m="3952900">in</span> <span
  m="3953050">rich</span> <span m="3953310">media.</span> <span
  m="3954790">In</span> <span m="3955110">the</span> <span
  m="3955760">environment</span> <span m="3956430">that</span> <span
  m="3956480">they</span> <span m="3956670">are</span> <span
  m="3956760">doing</span> <span m="3956970">this</span> <span
  m="3957050">in,</span> <span m="3957480">it's a bit</span> <span
  m="3957690">slower.</span> <span m="3958800">But</span> <span
  m="3959020">that</span> <span m="3959170">would</span> <span
  m="3959320">get</span> <span m="3959490">you</span> <span
  m="3959610">maybe</span> <span m="3960050">to</span> <span
  m="3960160">the</span> <span m="3962740">two or</span> <span
  m="3962930">three-week</span> <span m="3963330">mark.</span></p><p><span
  m="3964420">But</span> <span m="3964520">that</span> <span
  m="3964660">still</span> <span m="3964930">is</span> <span
  m="3965000">not</span> <span m="3965490">what</span> <span
  m="3965670">happened.</span> <span m="3966480">They</span> <span
  m="3966570">actually</span> <span m="3966840">had</span> <span
  m="3966990">to</span> <span m="3967050">go</span> <span m="3967170">for</span>
  <span m="3967250">three</span> <span m="3967450">months.</span> <span
  m="3970780">And</span> <span m="3971720">this</span> <span
  m="3971860">is</span> <span m="3971950">because</span> <span
  m="3972630">experiments</span> <span m="3973360">are</span> <span
  m="3973480">not</span> <span m="3973720">always</span> <span
  m="3974130">keeping</span> <span m="3974510">cells</span> <span
  m="3975110">constantly</span> <span m="3975590">dividing</span> <span
  m="3976070">at their</span> <span m="3976440">maximal</span> <span
  m="3976920">rates.</span></p><p><span m="3978720">The</span> <span
  m="3978920">standard</span> <span m="3979410">way</span> <span
  m="3979580">that</span> <span m="3979680">we</span> <span
  m="3979790">do</span> <span m="3979920">this</span> <span
  m="3980160">is</span> <span m="3980340">what's</span> <span
  m="3980650">known</span> <span m="3981000">as</span> <span
  m="3981140">kind</span> <span m="3981260">of</span> <span
  m="3981380">daily</span> <span m="3981780">batch</span> <span
  m="3982120">culture.</span> <span m="3985250">And</span> <span
  m="3985370">does</span> <span m="3985470">anybody</span> <span
  m="3985740">know</span> <span m="3985980">how</span> <span
  m="3986090">much</span> <span m="3986310">they</span> <span
  m="3987280">diluted</span> <span m="3987680">by</span> <span
  m="3988070">each</span> <span m="3988350">day?</span> <span
  m="3994330">Yeah,</span> <span m="3994660">so I</span> <span
  m="3994920">think</span> <span m="3995360">it</span> <span
  m="3995450">was</span> <span m="3996490">diluting</span> <span
  m="3996810">by</span> <span m="3996950">a</span> <span
  m="3997010">factor</span> <span m="3997240">of</span> <span
  m="3997280">100.</span></p><p><span m="3998950">So</span> <span
  m="3999090">it's</span> <span m="4000170">daily</span> <span
  m="4000520">batch</span> <span m="4000810">culture</span> <span
  m="4001450">with</span> <span m="4001610">100x</span> <span
  m="4003340">dilution,</span> <span m="4007810">which</span> <span
  m="4008050">corresponds</span> <span m="4008740">to</span> <span
  m="4008860">about</span> <span m="4009870">6.6</span> <span
  m="4010850">generations</span> <span m="4011600">per</span> <span
  m="4011790">day.</span> <span m="4016250">So</span> <span
  m="4016260">this</span> <span m="4016420">is</span> <span
  m="4016590">very</span> <span m="4017060">far</span> <span
  m="4017550">from</span> <span m="4018820">what</span> <span m="4019000">you
  would</span> <span m="4019170">think</span> <span m="4019380">of</span> <span
  m="4019460">as</span> <span m="4019570">kind</span> <span
  m="4019700">of</span> <span m="4020280">the</span> <span
  m="4020430">best</span> <span m="4020730">they</span> <span
  m="4020820">could</span> <span m="4020980">possibly</span> <span
  m="4021360">do.</span> <span m="4027150">And</span> <span
  m="4027320">what</span> <span m="4027450">it</span> <span
  m="4027500">means</span> <span m="4027760">is</span> <span m="4027880">that,
  yeah,</span> <span m="4028080">it</span> <span m="4028320">does</span> <span
  m="4028550">take</span> <span m="4028740">about</span> <span
  m="4028960">three</span> <span m="4029140">months</span> <span
  m="4029680">for</span> <span m="4029760">them</span> <span m="4029920">to
  have</span> <span m="4030020">done</span> <span m="4030220">this</span> <span
  m="4030480">experiment.</span></p><p><span m="4033010">It</span> <span
  m="4033170">also</span> <span m="4033570">means</span> <span
  m="4033950">that</span> <span m="4034040">if</span> <span
  m="4034120">you</span> <span m="4034260">look</span> <span
  m="4034590">at</span> <span m="4038440">the</span> <span
  m="4038560">number</span> <span m="4039460">over</span> <span
  m="4039660">the</span> <span m="4039750">course of</span> <span
  m="4040050">each</span> <span m="4040360">day,</span> <span
  m="4043980">this</span> <span m="4044270">is</span> <span m="4045020">n</span>
  <span m="4045740">max.</span> <span m="4047750">And</span> <span
  m="4047820">they</span> <span m="4048230">dilute--</span> <span
  m="4049570">this</span> <span m="4049720">is</span> <span m="4049840">n</span>
  <span m="4050040">max</span> <span m="4050510">over</span> <span
  m="4050780">100--</span> <span m="4051600">so</span> <span
  m="4051710">they</span> <span m="4052490">dilute  by</span> <span
  m="4052850">a factor of</span> <span m="4053020">100.</span></p><p><span
  m="4056170">When</span> <span m="4056350">you</span> <span
  m="4056860">transfer</span> <span m="4057380">cells</span> <span
  m="4058520">from</span> <span m="4059200">a</span> <span
  m="4059490">saturated</span> <span m="4060040">state into</span> <span
  m="4060430">new</span> <span m="4060560">environment,</span> <span
  m="4060890">do</span> <span m="4060910">they</span> <span
  m="4061000">start</span> <span m="4061210">dividing</span> <span
  m="4061530">immediately,</span> <span m="4062440">for</span> <span
  m="4062520">those</span> <span m="4062740">of</span> <span
  m="4062800">you</span> <span m="4062950">who</span> <span
  m="4063020">have</span> <span m="4063120">done</span> <span
  m="4063290">this</span> <span m="4063420">experiment?</span> <span
  m="4064410">No.</span> <span m="4065130">It's</span> <span
  m="4065260">going</span> <span m="4065350">to</span> <span
  m="4065410">take</span> <span m="4065700">an</span> <span
  m="4065800">hour</span> <span m="4066110">or</span> <span
  m="4066160">two</span> <span m="4068480">for</span> <span
  m="4068540">them</span> <span m="4068690">to</span> <span
  m="4068740">get</span> <span m="4068870">going.</span></p><p><span
  m="4070710">But then</span> <span m="4070920">they're</span> <span
  m="4071030">going</span> <span m="4071140">to</span> <span
  m="4071250">start</span> <span m="4071610">dividing.</span> <span
  m="4072070">And this</span> <span m="4072270">on</span> <span
  m="4072420">a</span> <span m="4072490">log</span> <span
  m="4073040">scale</span> <span m="4073440">maybe--</span> <span
  m="4078040">log</span> <span m="4078355">N.</span> <span m="4079430">And
  what</span> <span m="4079810">you'll</span> <span m="4080070">see</span> <span
  m="4080190">is</span> <span m="4080310">they</span> <span
  m="4080370">kind</span> <span m="4080540">of</span> <span
  m="4080640">go--</span> <span m="4081200">they're</span> <span
  m="4081340">dividing</span> <span m="4081670">exponentially</span> <span
  m="4082260">and then</span> <span m="4082430">they</span> <span
  m="4082540">saturate.</span></p><p><span m="4084190">Indeed,</span> <span
  m="4084580">they're going to</span> <span m="4084650">saturate</span> <span
  m="4086690">for about</span> <span m="4086850">a</span> <span
  m="4087180">fair</span> <span m="4087310">amount</span> <span
  m="4087440">of</span> <span m="4087500">time.</span> <span
  m="4087860">So</span> <span m="4087930">this</span> <span
  m="4089040">might</span> <span m="4089200">be</span> <span
  m="4089620">an</span> <span m="4089750">hour</span> <span m="4090130">or
  two.</span> <span m="4090560">This</span> <span m="4090830">might</span> <span
  m="4091090">be</span> <span m="4092790">say</span> <span
  m="4093070">five</span> <span m="4093490">hours.</span></p><p><span
  m="4094710">But</span> <span m="4094830">then</span> <span
  m="4095000">you</span> <span m="4095120">still</span> <span
  m="4095380">have</span> <span m="4095600">another</span> <span
  m="4096090">roughly</span> <span m="4096350">20</span> <span
  m="4096680">hours</span> <span m="4096950">to</span> <span
  m="4097050">go</span> <span m="4099279">before</span> <span
  m="4099540">the</span> <span m="4099630">next</span> <span
  m="4099920">dilution.</span> <span m="4103279">And</span> <span
  m="4103310">then</span> <span m="4103439">we</span> <span
  m="4103529">repeat.</span> <span m="4105790">So</span> <span
  m="4105880">they</span> <span m="4105970">actually</span> <span
  m="4106210">saturated</span> <span m="4106670">for a</span> <span
  m="4106810">fair</span> <span m="4107580">fraction</span> <span m="4107970">of
  the day.</span></p><p><span m="4112700">Now,</span> <span
  m="4113210">in</span> <span m="4113529">all</span> <span
  m="4113649">these</span> <span m="4113819">discussions</span> <span
  m="4114580">of</span> <span m="4114720">laboratory</span> <span
  m="4115200">evolution--</span> <span m="4115939">and</span> <span
  m="4116229">in</span> <span m="4116450">many of the</span> <span
  m="4116710">calculations</span> <span m="4117319">we're</span> <span
  m="4117420">going</span> <span m="4117510">to</span> <span
  m="4117550">be</span> <span m="4117600">doing</span> <span
  m="4117779">over</span> <span m="4117890">the</span> <span
  m="4117960">next</span> <span m="4118149">couple of</span> <span
  m="4118410">weeks--</span> <span m="4121350">we'll</span> <span
  m="4121500">typically</span> <span m="4121859">assume</span> <span
  m="4122350">that</span> <span m="4122930">what</span> <span
  m="4123250">is</span> <span m="4123359">being</span> <span
  m="4123569">optimized</span> <span m="4124180">is</span> <span
  m="4124380">the</span> <span m="4124479">growth</span> <span
  m="4124840">rate,</span> <span m="4125250">the</span> <span
  m="4125370">rate</span> <span m="4125510">of</span> <span
  m="4125600">division.</span></p><p><span m="4127600">But</span> <span
  m="4127840">you</span> <span m="4127910">can</span> <span
  m="4128010">imagine</span> <span m="4128330">there</span> <span
  m="4128470">being</span> <span m="4128660">other</span> <span
  m="4128890">things</span> <span m="4129260">that</span> <span
  m="4129380">might</span> <span m="4129680">possibly</span> <span
  m="4130310">be</span> <span m="4130540">optimized</span> <span
  m="4131370">in</span> <span m="4131420">the</span> <span
  m="4131490">course</span> <span m="4131800">of</span> <span
  m="4131859">these</span> <span m="4132010">sorts</span> <span
  m="4132229">of</span> <span m="4132270">experiments.</span> <span
  m="4132870">Can</span> <span m="4133010">somebody</span> <span
  m="4133870">volunteer</span> <span m="4134630">what</span> <span
  m="4135170">are</span> <span m="4135300">other</span> <span
  m="4135430">things?</span></p><p><span m="4140338">AUDIENCE:</span> <span
  m="4140830">Maximum</span> <span m="4141322">density?</span></p><p><span
  m="4142306">PROFESSOR:</span> <span m="4142800">Right,</span> <span
  m="4143060">so</span> <span m="4143140">you</span> <span
  m="4143250">could</span> <span m="4143380">imagine,</span> <span
  m="4144569">if</span> <span m="4144680">you</span> <span
  m="4144790">could</span> <span m="4144890">just</span> <span
  m="4145810">eke</span> <span m="4146040">out</span> <span
  m="4146310">one</span> <span m="4146640">more</span> <span
  m="4146899">division</span> <span m="4147569">out</span> <span
  m="4147760">there,</span> <span m="4148279">then</span> <span
  m="4148460">you</span> <span m="4148859">could</span> <span
  m="4149220">get</span> <span m="4149500">an</span> <span
  m="4149770">advantage.</span> <span m="4150529">And</span> <span
  m="4150630">there's</span> <span m="4150779">a</span> <span
  m="4150840">whole</span> <span m="4151149">set</span> <span
  m="4151410">of</span> <span m="4151479">interesting</span> <span
  m="4151830">things,</span> <span m="4152680">these</span> <span
  m="4152859">growth</span> <span m="4153260">advantage.</span> <span
  m="4153729">It's</span> <span m="4153890">stationary</span> <span
  m="4154430">phase</span> <span m="4154710">or</span> <span
  m="4154779">the</span> <span m="4154870">GASP</span> <span
  m="4155420">mutants,</span> <span m="4156540">where</span> <span
  m="4157020">the</span> <span m="4157120">focus</span> <span
  m="4157580">is</span> <span m="4157710">on</span> <span
  m="4157859">trying</span> <span m="4158220">to</span> <span
  m="4158330">do</span> <span m="4158479">well</span> <span
  m="4159029">here.</span></p><p><span m="4160040">And</span> <span
  m="4160170">also</span> <span m="4160430">you</span> <span
  m="4160569">can</span> <span m="4160670">imagine</span> <span
  m="4161210">related</span> <span m="4162100">maybe,</span> <span
  m="4163660">if</span> <span m="4163800">you</span> <span m="4164000">do</span>
  <span m="4164130">better</span> <span m="4164470">out</span> <span
  m="4164800">for</span> <span m="4164890">this</span> <span
  m="4165229">period,</span> <span m="4167090">cells</span> <span
  m="4167950">will</span> <span m="4168109">start</span> <span
  m="4168370">dying</span> <span m="4168770">eventually.</span> <span
  m="4169370">So</span> <span m="4169600">if</span> <span m="4169770">you</span>
  <span m="4169870">have</span> <span m="4169960">a</span> <span
  m="4170000">lower</span> <span m="4170229">rate</span> <span
  m="4170380">of</span> <span m="4170529">death</span> <span
  m="4170910">at</span> <span m="4171109">saturation,</span> <span
  m="4171434">then</span> <span m="4171760">you</span> <span
  m="4171870">can</span> <span m="4171979">also</span> <span
  m="4172260">spread.</span> <span m="4174930">Other--</span> <span
  m="4175649">yep.</span></p><p><span m="4176136">AUDIENCE: Sorry,</span> <span
  m="4176623">can I</span> <span m="4177110">ask a quick</span> <span
  m="4177597">question?</span> <span m="4178571">What's</span> <span
  m="4179545">a</span> <span m="4180032">possible reason</span> <span
  m="4180519">for</span> <span m="4181006">the</span> <span
  m="4181493">initial</span> <span m="4181980">[INAUDIBLE]</span> <span
  m="4182954">used</span> <span m="4183441">[INAUDIBLE]</span> <span
  m="4183928">at the beginning?</span></p><p><span m="4184415">PROFESSOR:</span>
  <span m="4184910">Yeah,</span> <span m="4185729">right.</span> <span
  m="4185899">So</span> <span m="4185979">I</span> <span
  m="4186149">think</span> <span m="4186500">it's</span> <span
  m="4186930">basically</span> <span m="4187470">that</span> <span
  m="4187810">when</span> <span m="4188189">the</span> <span
  m="4188260">cells</span> <span m="4188620">are</span> <span
  m="4188720">saturated,</span> <span m="4190870">they</span> <span
  m="4191060">generally</span> <span m="4191439">enter</span> <span
  m="4192822">a</span> <span m="4193310">rather</span> <span
  m="4194040">distinct</span> <span m="4194530">physiological</span> <span
  m="4195230">state,</span> <span m="4195570">as</span> <span
  m="4195690">compared</span> <span m="4196080">to</span> <span
  m="4196160">the</span> <span m="4196300">dividing</span> <span
  m="4196760">state.</span> <span m="4198070">And</span> <span
  m="4198240">I</span> <span m="4198290">think</span> <span
  m="4198460">the</span> <span m="4198780">longer</span> <span
  m="4199250">they</span> <span m="4199420">sit</span> <span
  m="4199760">in</span> <span m="4200100">this</span> <span
  m="4200530">saturated</span> <span m="4201000">phase,</span> <span
  m="4201340">the</span> <span m="4201440">longer</span> <span m="4201780">it's
  going to</span> <span m="4201930">take</span> <span m="4202130">them</span>
  <span m="4202240">to</span> <span m="4202300">get</span> <span
  m="4202460">going</span> <span m="4203580">in</span> <span
  m="4203690">the</span> <span m="4203750">next</span> <span
  m="4203970">day,</span> <span m="4204190">for</span> <span
  m="4204330">example.</span></p><p><span m="4206620">And</span> <span
  m="4206800">it's</span> <span m="4207210">also</span> <span
  m="4207430">the</span> <span m="4207510">case</span> <span
  m="4207780">that</span> <span m="4208540">cells</span> <span
  m="4209400">in</span> <span m="4209670">saturated</span> <span
  m="4210040">culture</span> <span m="4210260">tend</span> <span
  m="4210440">to</span> <span m="4210480">be</span> <span
  m="4210610">more</span> <span m="4210880">resistant</span> <span
  m="4211310">to</span> <span m="4211430">a</span> <span
  m="4211490">variety</span> <span m="4211830">of</span> <span
  m="4212150">perturbations</span> <span m="4212840">of</span> <span
  m="4212900">various</span> <span m="4213160">sorts--</span> <span
  m="4213470">so</span> <span m="4213600">if you're</span> <span
  m="4214080">talking</span> <span m="4214310">about</span> <span
  m="4214970">heat,</span> <span m="4215340">salt,</span> <span
  m="4217150">this,</span> <span m="4217340">that,</span> <span m="4217490">and
  the other thing.</span> <span m="4219550">What's</span> <span
  m="4219880">something</span> <span m="4220040">else</span> <span
  m="4220230">they</span> <span m="4220300">could</span> <span
  m="4220450">be</span> <span m="4221150">optimized</span> <span
  m="4221950">here?</span> <span m="4229906">If</span> <span m="4230390">you
  were</span> <span m="4230560">imagining</span> <span m="4231360">you're</span>
  <span m="4231580">a</span> <span m="4231640">cell,</span> <span
  m="4231990">you</span> <span m="4232130">want</span> <span
  m="4232330">to</span> <span m="4232480">spread,</span> <span m="4234300">what
  would</span> <span m="4234490">you</span> <span
  m="4234530">do?</span></p><p><span m="4239620">AUDIENCE:</span> <span
  m="4239970">[INAUDIBLE].</span></p><p><span m="4241952">PROFESSOR:</span>
  <span m="4242360">OK,</span> <span m="4242630">right.</span> <span
  m="4242810">So</span> <span m="4243110">we're</span> <span
  m="4243270">saying</span> <span m="4243500">that</span> <span
  m="4243560">the</span> <span m="4243690">media is</span> <span
  m="4244070">specified</span> <span m="4245280">by</span> <span
  m="4245610">the</span> <span m="4245770">experimentalist.</span> <span
  m="4246580">So</span> <span m="4247140">you're the cell</span> <span
  m="4250590">in</span> <span m="4250730">this</span> <span
  m="4251360">Gedanken</span> <span m="4251890">experiment.</span></p><p><span
  m="4253510">AUDIENCE:</span> <span m="4253950">You'd</span> <span
  m="4254390">divide</span> <span m="4254830">yourself.</span></p><p><span
  m="4255270">PROFESSOR:</span> <span m="4255710">Right,</span> <span
  m="4255910">so you can</span> <span m="4256010">eat</span> <span
  m="4256310">the</span> <span m="4256410">other</span> <span
  m="4256560">cells,</span> <span m="4256970">yeah.</span> <span
  m="4260000">Well,</span> <span m="4260480">and</span> <span
  m="4260640">in</span> <span m="4260740">particular,</span> <span
  m="4260940">actually</span> <span m="4261230">out</span> <span
  m="4261420">here,</span> <span m="4261760">this</span> <span
  m="4261990">is</span> <span m="4262130">part</span> <span
  m="4262340">of</span> <span m="4262400">how</span> <span
  m="4262520">the</span> <span m="4262610">GASP</span> <span
  m="4262940">mutants</span> <span m="4263220">spread,</span> <span
  m="4263970">is</span> <span m="4264120">that</span> <span
  m="4264850">when</span> <span m="4264960">other</span> <span
  m="4265180">cells</span> <span m="4265450">start</span> <span
  m="4265670">to</span> <span m="4265740">die,</span> <span
  m="4266230">they</span> <span m="4266420">lyse</span> <span
  m="4266940">their</span> <span m="4267100">contents.</span> <span
  m="4267700">And</span> <span m="4268830">then</span> <span
  m="4269640">the</span> <span m="4269860">cells</span> <span m="4270170">that
  are</span> <span m="4270270">surviving</span> <span m="4270740">can</span>
  <span m="4270850">actually</span> <span m="4271115">eat</span> <span
  m="4271380">the</span> <span m="4271890">contents,</span> <span
  m="4272370">yeah.</span></p><p><span m="4272760">AUDIENCE:</span> <span
  m="4273252">Is this a</span> <span m="4273744">way to</span> <span
  m="4275712">coordinate</span> <span m="4276204">between different</span> <span
  m="4276696">cells,</span> <span m="4277188">so that</span> <span
  m="4277680">they</span> <span m="4279156">can</span> <span m="4280140">sort
  of</span> <span m="4280632">evenly</span> <span m="4281124">distribute</span>
  <span m="4281616">themselves</span> <span m="4282108">in the</span> <span
  m="4282610">media,</span> <span m="4282900">so</span> <span
  m="4283364">you</span> <span m="4283828">don't have</span> <span
  m="4284292">to many--</span></p><p><span m="4285220">PROFESSOR: OK,
  right.</span> <span m="4285710">So</span> <span m="4285830">I'm</span> <span
  m="4285990">actually</span> <span m="4286190">assuming</span> <span
  m="4286360">here</span> <span m="4286550">it's</span> <span
  m="4286660">well</span> <span m="4287060">mixed,</span> <span
  m="4288260">so</span> <span m="4290500">that</span> <span
  m="4291030">in</span> <span m="4291110">principle</span> <span
  m="4291390">would</span> <span m="4291490">not</span> <span
  m="4291600">be</span> <span m="4291670">an</span> <span
  m="4291730">issue.</span> <span m="4291950">But</span> <span m="4292750">yeah,
  so</span> <span m="4293030">you</span> <span m="4293170">can</span> <span
  m="4293260">imagine</span> <span m="4293680">spatial</span> <span
  m="4294200">effects</span> <span m="4294490">of</span> <span
  m="4294560">various</span> <span m="4294840">sorts</span> <span
  m="4295140">being</span> <span m="4295400">relevant.</span></p><p><span
  m="4296520">I</span> <span m="4296590">guess</span> <span m="4297620">I</span>
  <span m="4297710">just</span> <span m="4297910">drew</span> <span
  m="4298090">this</span> <span m="4298250">up</span> <span
  m="4298380">here</span> <span m="4298590">to</span> <span
  m="4299170">highlight</span> <span m="4299470">that,</span> <span
  m="4299790">in</span> <span m="4299870">principle,</span> <span
  m="4300170">you</span> <span m="4300240">can</span> <span
  m="4300360">also</span> <span m="4301860">decrease</span> <span
  m="4302350">the</span> <span m="4303100">lag</span> <span
  m="4303395">time.</span> <span m="4306450">So</span> <span
  m="4306570">if</span> <span m="4307140">you</span> <span
  m="4307510">start</span> <span m="4307900">dividing</span> <span
  m="4308290">more</span> <span m="4308510">rapidly</span> <span m="4310680">at
  the</span> <span m="4310740">beginning of the</span> <span
  m="4311020">day,</span> <span m="4311400">then</span> <span
  m="4313390">you'll</span> <span m="4313780">get</span> <span
  m="4313920">to</span> <span m="4313980">spread</span> <span
  m="4314380">before</span> <span m="4314720">your</span> <span
  m="4314810">neighbors</span> <span m="4315220">and</span> <span
  m="4315490">your</span> <span m="4315750">genotypes</span> <span
  m="4316290">will</span> <span m="4316470">indeed</span> <span
  m="4316680">spread.</span> <span m="4317646">Yep.</span></p><p><span
  m="4318440">AUDIENCE:</span> <span m="4318870">So</span> <span m="4320702">I
  just</span> <span m="4321160">know</span> <span m="4321618">so little</span>
  <span m="4322076">about cells,</span> <span m="4322540">but</span> <span
  m="4323800">is</span> <span m="4323970">it</span> <span
  m="4324070">true</span> <span m="4324260">that</span> <span
  m="4325260">a</span> <span m="4325360">lot</span> <span m="4325570">of</span>
  <span m="4325820">the</span> <span m="4325930">cells</span> <span
  m="4327832">could</span> <span m="4328290">survive</span> <span
  m="4329326">and</span> <span m="4329730">be the same</span> <span
  m="4330140">cell for</span> <span m="4330390">that</span> <span
  m="4330770">whole</span> <span m="4331170">duration</span> <span
  m="4332470">when</span> <span m="4332900">they were in the</span> <span
  m="4333388">stationary phase?</span></p><p><span m="4334852">PROFESSOR:</span>
  <span m="4335340">You're</span> <span m="4335570">asking</span> <span
  m="4335920">whether</span> <span m="4336250">the--</span></p><p><span
  m="4336600">AUDIENCE:</span> <span m="4337083">Yeah,</span> <span
  m="4337566">whether</span> <span m="4338049">a cell that</span> <span
  m="4338532">entered the beginning</span> <span m="4339015">of the
  stationary</span> <span m="4339498">phase,</span> <span m="4339981">that same
  cell</span> <span m="4340464">would have</span> <span m="4340947">a pretty
  good</span> <span m="4341430">chance</span> <span
  m="4341913">of--</span></p><p><span m="4342400">PROFESSOR: Yeah,</span> <span
  m="4343820">over</span> <span m="4344520">I</span> <span
  m="4344580">think</span> <span m="4344910">this</span> <span
  m="4345140">sort</span> <span m="4345270">of</span> <span
  m="4345360">12-hour</span> <span m="4346120">type</span> <span
  m="4346300">period,</span> <span m="4346790">I</span> <span
  m="4346830">think</span> <span m="4347500">the</span> <span
  m="4347640">answer</span> <span m="4347920">is</span> <span
  m="4348040">yes.</span> <span m="4348590">But</span> <span
  m="4348920">if</span> <span m="4349010">you</span> <span m="4349120">go</span>
  <span m="4349450">for</span> <span m="4350530">an</span> <span
  m="4350730">extra</span> <span m="4351070">day</span> <span
  m="4351480">or</span> <span m="4351620">two,</span> <span
  m="4351870">then</span> <span m="4352080">I</span> <span
  m="4352130">think</span> <span m="4352790">you</span> <span
  m="4352920">can</span> <span m="4353020">start</span> <span
  m="4353250">getting</span> <span m="4353320">extensive</span> <span
  m="4353860">cell</span> <span m="4354070">death.</span></p><p><span
  m="4354531">AUDIENCE:</span> <span m="4354992">Because then</span> <span
  m="4355453">who</span> <span m="4355914">knows?</span> <span
  m="4356375">Maybe</span> <span m="4356836">long enough,</span> <span
  m="4357297">though,</span> <span m="4357760">they would develop</span> <span
  m="4358256">a little clock</span> <span m="4358752">to let them</span> <span
  m="4359250">know that it was</span> <span m="4359650">about to</span> <span
  m="4360050">split.</span></p><p><span m="4360450">PROFESSOR: Yes,</span> <span
  m="4360930">right.</span> <span m="4361210">Yeah,</span> <span
  m="4362050">so</span> <span m="4362140">people</span> <span
  m="4362420">have</span> <span m="4362660">thought about--</span> <span
  m="4363110">and I'm</span> <span m="4363210">not</span> <span
  m="4363360">sure</span> <span m="4363580">if</span> <span
  m="4363700">this--</span></p><p><span m="4364015">AUDIENCE: And it seems like
  it would.</span></p><p><span m="4364330">PROFESSOR: --particular</span> <span
  m="4364710">effect is--</span> <span m="4365150">yeah,</span> <span
  m="4366000">right.</span> <span m="4367590">But</span> <span m="4368190">I
  just want to</span> <span m="4368300">mention</span> <span
  m="4368600">that</span> <span m="4368730">this</span> <span
  m="4368940">is</span> <span m="4369330">something</span> <span
  m="4369630">that</span> <span m="4369880">you</span> <span
  m="4370030">kind</span> <span m="4370180">of</span> <span
  m="4370280">maybe</span> <span m="4370530">would</span> <span
  m="4370640">expect,</span> <span m="4371100">indeed,</span> <span
  m="4371460">you</span> <span m="4371880">see</span> <span
  m="4372200">in</span> <span m="4372290">these--</span> <span
  m="4372680">so</span> <span m="4373080">they're a</span> <span
  m="4373260">famous set of</span> <span m="4373760">experiments</span> <span
  m="4374460">done</span> <span m="4374640">by</span> <span
  m="4374760">Richard</span> <span m="4375130">Lenski</span> <span
  m="4377530">at</span> <span m="4377980">Michigan</span> <span
  m="4378290">State,</span> <span m="4378580">where</span> <span
  m="4378680">he's</span> <span m="4380220">been</span> <span
  m="4380740">dividing</span> <span m="4381920">six</span> <span
  m="4382260">or</span> <span m="4382370">eight--</span> <span
  m="4383550">doing</span> <span m="4383750">daily</span> <span
  m="4384410">batch</span> <span m="4384680">dilutions</span> <span
  m="4385610">of</span> <span m="4386870">equal</span> <span m="4387210">E.
  coli</span> <span m="4387280">cultures</span> <span m="4387870">now</span>
  <span m="4388250">for</span> <span m="4388980">decades.</span></p><p><span
  m="4389940">So</span> <span m="4390320">he</span> <span
  m="4390510">started,</span> <span m="4391515">I</span> <span
  m="4391930">don't</span> <span m="4392020">know,</span> <span
  m="4392830">late</span> <span m="4393030">'80s</span> <span m="4393530">or
  so.</span> <span m="4393980">I don't know if</span> <span
  m="4394070">you</span> <span m="4394130">guys</span> <span
  m="4394260">remember.</span> <span m="4395710">So</span> <span
  m="4396090">he's</span> <span m="4396270">gone</span> <span
  m="4396520">tens</span> <span m="4396930">of</span> <span
  m="4397030">thousands</span> <span m="4397520">of</span> <span
  m="4397590">generations</span> <span m="4398340">and has</span> <span
  m="4398560">seen</span> <span m="4400010">a</span> <span m="4400120">bunch
  of</span> <span m="4400370">remarkable</span> <span m="4400800">things.</span>
  <span m="4401480">One</span> <span m="4401740">of the</span> <span
  m="4401830">things</span> <span m="4402110">that</span> <span
  m="4402320">he</span> <span m="4402490">has</span> <span
  m="4402880">seen,</span> <span m="4403260">as</span> <span
  m="4403520">you</span> <span m="4403620">might have</span> <span
  m="4403740">expected,</span> <span m="4404130">is</span> <span
  m="4404260">a</span> <span m="4404320">decrease</span> <span
  m="4404720">in</span> <span m="4404790">the</span> <span
  m="4404870">lag</span> <span m="4405210">time</span> <span m="4406090">of
  the</span> <span m="4406530">vector</span> <span
  m="4406790">area.</span></p><p><span m="4414050">So</span> <span
  m="4414210">what</span> <span m="4414330">we</span> <span
  m="4414420">have</span> <span m="4414650">now</span> <span
  m="4414840">is</span> <span m="4414950">a</span> <span
  m="4415000">situation</span> <span m="4415570">where</span> <span
  m="4416130">they</span> <span m="4418310">add</span> <span
  m="4418660">IPTG,</span> <span m="4420500">so</span> <span
  m="4420730">that</span> <span m="4422302">all</span> <span
  m="4422720">the</span> <span m="4422830">cells</span> <span m="4423530">are
  in</span> <span m="4423720">principle</span> <span m="4424200">start</span>
  <span m="4424390">out</span> <span m="4424560">expressing</span> <span
  m="4425300">the</span> <span m="4425420">lac</span> <span
  m="4425620">operon.</span> <span m="4426660">And</span> <span
  m="4426820">then</span> <span m="4426950">they</span> <span
  m="4427100">grow</span> <span m="4429200">the</span> <span
  m="4429290">cells</span> <span m="4429620">over</span> <span
  m="4429820">time.</span></p><p><span m="4430190">And what</span> <span
  m="4430310">they</span> <span m="4430400">see</span> <span
  m="4430660">is</span> <span m="4430790">that</span> <span
  m="4431960">the</span> <span m="4432390">lacZ</span> <span
  m="4433390">activity,</span> <span m="4437830">it</span> <span
  m="4437960">starts</span> <span m="4438290">out at</span> <span
  m="4438550">being</span> <span m="4438780">1,</span> <span
  m="4439970">normalized,</span> <span m="4442890">for</span> <span
  m="4443050">all</span> <span m="4443250">the</span> <span
  m="4443330">cultures,</span> <span m="4443660">because</span> <span
  m="4443840">there's</span> <span m="4444470">IPTG,</span> <span
  m="4445440">so</span> <span m="4445530">it</span> <span
  m="4445570">doesn't</span> <span m="4445770">matter</span> <span
  m="4445920">how</span> <span m="4446080">much</span> <span
  m="4446480">lactose</span> <span m="4446760">there</span> <span
  m="4447040">is.</span> <span m="4447270">But</span> <span
  m="4447760">what</span> <span m="4447950">they</span> <span
  m="4448060">see</span> <span m="4448320">is</span> <span
  m="4448480">that</span> <span m="4449490">over</span> <span
  m="4449720">time,</span> <span m="4454060">they</span> <span
  m="4454190">see</span> <span m="4454390">things</span> <span
  m="4454650">that</span> <span m="4454750">look</span> <span
  m="4454920">like</span> <span m="4455110">this.</span></p><p><span
  m="4459100">So</span> <span m="4459220">the</span> <span
  m="4459720">0.5</span> <span m="4460870">millimolar</span> <span
  m="4462630">lactose</span> <span m="4463350">didn't</span> <span
  m="4463580">change</span> <span m="4463880">very</span> <span
  m="4464030">much.</span> <span m="4465740">But</span> <span
  m="4466000">if</span> <span m="4466170">you</span> <span
  m="4466310">look</span> <span m="4466500">at</span> <span
  m="4466990">some</span> <span m="4467200">of</span> <span
  m="4467300">the</span> <span m="4467400">others,</span> <span
  m="4468710">like</span> <span m="4468880">no</span> <span
  m="4469150">lactose,</span> <span m="4472580">there</span> <span
  m="4472740">was</span> <span m="4472790">significant</span> <span
  m="4473810">decrease</span> <span m="4474300">in</span> <span
  m="4474370">expression.</span> <span m="4475380">Whereas,</span> <span
  m="4476050">up</span> <span m="4476250">here</span> <span
  m="4476580">at,</span> <span m="4476800">for</span> <span
  m="4476890">example,</span> <span m="4477170">2</span> <span
  m="4477350">millimolar</span> <span m="4478660">lactose,</span> <span
  m="4479090">they</span> <span m="4479220">see</span> <span
  m="4479460">an</span> <span m="4479550">increase.</span></p><p><span
  m="4483610">So</span> <span m="4483740">what you</span> <span
  m="4483900">see</span> <span m="4484080">is</span> <span
  m="4484210">that</span> <span m="4485750">there</span> <span
  m="4486100">really</span> <span m="4486290">are</span> <span
  m="4486490">evolutionary</span> <span m="4487150">changes</span> <span
  m="4487900">of</span> <span m="4490010">these</span> <span
  m="4490210">strains,</span> <span m="4491200">because--</span> <span
  m="4493150">and</span> <span m="4493320">it's</span> <span
  m="4493870">very,</span> <span m="4494110">very</span> <span
  m="4494210">relevant</span> <span m="4495000">that</span> <span
  m="4496290">they</span> <span m="4497000">had</span> <span
  m="4497280">IPTG</span> <span m="4498520">in</span> <span
  m="4498630">the</span> <span m="4498700">media.</span> <span
  m="4499150">So</span> <span m="4499380">if</span> <span
  m="4499850">they</span> <span m="4499950">did</span> <span
  m="4500110">this</span> <span m="4500230">experiment</span> <span
  m="4500670">without</span> <span m="4501020">IPTG,</span> <span
  m="4501305">do</span> <span m="4501590">you</span> <span
  m="4501740">have</span> <span m="4501920">any</span> <span
  m="4503060">sense</span> <span m="4503420">of</span> <span
  m="4503800">what</span> <span m="4504660">would</span> <span
  m="4504800">kind</span> <span m="4504940">of</span> <span
  m="4505010">happen</span> <span m="4505770">to</span> <span
  m="4506000">the</span> <span m="4506090">cells?</span> <span m="4506350">I
  mean,</span> <span m="4506440">how</span> <span m="4506660">would that</span>
  <span m="4506820">change</span> <span m="4507710">the</span> <span
  m="4507780">results?</span> <span m="4509923">Yep.</span></p><p><span
  m="4510394">AUDIENCE:</span> <span m="4510865">The expression</span> <span
  m="4511336">level</span> <span m="4511807">would be determined</span> <span
  m="4512278">by</span> <span m="4512749">[INAUDIBLE].</span></p><p><span
  m="4513691">PROFESSOR:</span> <span m="4514170">Right,</span> <span
  m="4514480">so</span> <span m="4514580">the</span> <span
  m="4515220">expression</span> <span m="4515730">would</span> <span
  m="4515830">be</span> <span m="4515920">determined</span> <span
  m="4516380">by</span> <span m="4516810">the lactose.</span> <span
  m="4517660">But</span> <span m="4518900">let's</span> <span
  m="4519110">say</span> <span m="4519200">that</span> <span
  m="4519310">after</span> <span m="4519670">500</span> <span
  m="4520050">generations,</span> <span m="4521020">we</span> <span
  m="4521200">put</span> <span m="4521440">them</span> <span
  m="4521580">all</span> <span m="4521890">in</span> <span m="4522410">a</span>
  <span m="4522500">millimolar</span> <span m="4523030">lactose.</span> <span
  m="4524170">How</span> <span m="4524390">different</span> <span m="4524710">do
  you</span> <span m="4524800">think</span> <span m="4524940">they're</span>
  <span m="4525030">going</span> <span m="4525110">to</span> <span
  m="4525170">be?</span></p><p><span m="4534240">I mean,</span> <span
  m="4534360">do</span> <span m="4534520">think</span> <span
  m="4534740">that</span> <span m="4535350">the</span> <span
  m="4536010">culture</span> <span m="4536460">grown,</span> <span
  m="4536860">for</span> <span m="4536910">example,</span> <span m="4537180">in
  the</span> <span m="4537250">absence</span> <span m="4537670">of</span> <span
  m="4537740">lactose,</span> <span m="4538620">do you</span> <span
  m="4538950">think</span> <span m="4539180">that</span> <span
  m="4539310">it</span> <span m="4539380">would</span> <span
  m="4539520">still</span> <span m="4539770">be</span> <span
  m="4539940">able</span> <span m="4540140">to</span> <span
  m="4541610">eat</span> <span m="4541760">lactose</span> <span
  m="4542390">after 500</span> <span m="4542870">generations</span> <span
  m="4544350">in that</span> <span m="4544500">experiment?</span> <span
  m="4551560">Hm?</span></p><p><span m="4552674">AUDIENCE:</span> <span
  m="4553116">Yes.</span></p><p><span m="4553560">PROFESSOR: Yes,</span> <span
  m="4554040">OK.</span> <span m="4554410">And</span> <span
  m="4554600">yeah,</span> <span m="4554700">so</span> <span
  m="4554780">what's</span> <span m="4554950">the</span> <span
  m="4555000">difference?</span> <span m="4555350">I</span> <span
  m="4555380">mean,</span> <span m="4556080">why</span> <span
  m="4556240">are</span> <span m="4556290">you</span> <span
  m="4556410">saying</span> <span m="4556690">yes</span> <span
  m="4556990">or</span> <span m="4557070">what's</span> <span
  m="4557270">the--</span></p><p><span m="4558472">AUDIENCE:</span> <span
  m="4558958">[INAUDIBLE].</span> <span m="4559930">I don't know</span> <span
  m="4560416">how hard</span> <span m="4560902">it is--</span></p><p><span
  m="4561390">PROFESSOR: Well,</span> <span m="4561640">yeah,</span> <span
  m="4561870">right.</span> <span m="4562870">So</span> <span
  m="4563010">this</span> <span m="4563240">is</span> <span
  m="4563330">an</span> <span m="4563420">experiment</span> <span
  m="4563860">with</span> <span m="4564070">IPTG.</span> <span m="4568580">And
  now,</span> <span m="4568860">I'm</span> <span m="4568930">just</span> <span
  m="4569150">trying</span> <span m="4569310">to</span> <span
  m="4570040">think</span> <span m="4570220">about</span> <span
  m="4570460">or</span> <span m="4570590">imagine</span> <span
  m="4570990">what</span> <span m="4571130">would have</span> <span
  m="4571270">happened</span> <span m="4571520">if</span> <span m="4571600">they
  had</span> <span m="4571830">done</span> <span m="4572150">the</span> <span
  m="4572230">same</span> <span m="4572560">experiment</span> <span
  m="4573580">without</span> <span m="4573960">IPTG</span> <span
  m="4574930">just</span> <span m="4575140">growing</span> <span
  m="4575620">in</span> <span m="4575710">that</span> <span
  m="4575870">environment,</span> <span m="4576950">in</span> <span
  m="4577010">particular,</span> <span m="4577820">if</span> <span
  m="4577950">you</span> <span m="4578100">grow</span> <span
  m="4578980">minus</span> <span m="4579460">IPTG</span> <span
  m="4582090">and</span> <span m="4582260">then</span> <span
  m="4582380">minus</span> <span m="4582800">lactose</span> <span
  m="4584940">for</span> <span m="4585040">500</span> <span
  m="4585440">generations?</span></p><p><span m="4590100">And</span> <span
  m="4590310">then</span> <span m="4590430">what</span> <span
  m="4590650">I</span> <span m="4590730">want</span> <span m="4590900">to</span>
  <span m="4590940">ask</span> <span m="4591130">is,</span> <span
  m="4591210">OK,</span> <span m="4591360">let's</span> <span m="4591570">say
  that</span> <span m="4591750">you</span> <span m="4591860">go</span> <span
  m="4591960">over</span> <span m="4592070">there</span> <span m="4592220">and
  you</span> <span m="4592320">just</span> <span m="4592450">add</span> <span
  m="4592650">lactose.</span> <span m="4596240">Will</span> <span
  m="4596320">the</span> <span m="4596410">cells,</span> <span m="4596850">do
  you think,</span> <span m="4597190">be</span> <span m="4597270">able</span>
  <span m="4597460">to</span> <span m="4597560">grow</span> <span
  m="4597810">and the</span> <span m="4597920">lactose?</span> <span
  m="4601410">OK.</span> <span m="4601700">And</span> <span
  m="4601970">so</span> <span m="4602860">why</span> <span m="4603110">is</span>
  <span m="4603280">it</span> <span m="4603440">that</span> <span
  m="4605200">here</span> <span m="4605840">the</span> <span
  m="4605980">answer</span> <span m="4606180">seems</span> <span
  m="4606390">to</span> <span m="4606470">be</span> <span
  m="4606600">no?</span></p><p><span m="4617880">So</span> <span
  m="4618030">here,</span> <span m="4618210">we have</span> <span
  m="4618380">evolved</span> <span m="4618950">a</span> <span
  m="4619030">population</span> <span m="4619710">that</span> <span
  m="4622640">not</span> <span m="4622850">only</span> <span
  m="4624460">it's</span> <span m="4624660">not</span> <span
  m="4624850">expressing</span> <span m="4625680">the</span> <span
  m="4625760">lacZ</span> <span m="4627060">activity</span> <span
  m="4627510">here.</span> <span m="4627700">But</span> <span
  m="4627950">indeed,</span> <span m="4628310">if</span> <span
  m="4628410">you</span> <span m="4628510">put</span> <span
  m="4628650">lactose</span> <span m="4629010">in</span> <span
  m="4629060">there,</span> <span m="4629240">it doesn't</span> <span
  m="4629490">express.</span> <span m="4631970">So</span> <span
  m="4632250">these</span> <span m="4632950">cells</span> <span
  m="4633280">can</span> <span m="4633420">no</span> <span
  m="4633590">longer</span> <span m="4633940">grow on</span> <span
  m="4634200">lactose.</span> <span m="4636280">So</span> <span
  m="4636440">what's</span> <span m="4636880">the</span> <span
  m="4636990">key</span> <span m="4637270">difference</span> <span
  m="4637760">here?</span> <span m="4638552">Yep.</span></p><p><span
  m="4639044">AUDIENCE:</span> <span m="4639536">So I mean,</span> <span
  m="4640028">there's no</span> <span m="4640520">[INAUDIBLE]</span> <span
  m="4641504">in this case.</span></p><p><span m="4641996">PROFESSOR:</span>
  <span m="4642488">Right.</span> <span m="4642980">Now</span> <span
  m="4643080">I think</span> <span m="4643200">this</span> <span
  m="4643650">is</span> <span m="4643740">just</span> <span
  m="4643930">really</span> <span m="4644210">important.</span> <span
  m="4645350">So</span> <span m="4645530">in</span> <span
  m="4645640">this</span> <span m="4645860">case,</span> <span
  m="4646610">there</span> <span m="4646780">is</span> <span
  m="4647270">approximately,</span> <span m="4648270">we'll</span> <span
  m="4648410">say,</span> <span m="4648630">no</span> <span
  m="4649470">cost</span> <span m="4651080">to</span> <span
  m="4651240">having</span> <span m="4653760">the</span> <span
  m="4653850">lac</span> <span m="4654270">operon</span> <span
  m="4654330">on</span> <span m="4654410">there,</span> <span
  m="4654570">because</span> <span m="4654760">it's</span> <span
  m="4654850">just</span> <span m="4655010">not</span> <span
  m="4655290">being</span> <span m="4655450">expressed.</span></p><p><span
  m="4656700">So</span> <span m="4656820">then</span> <span
  m="4656950">the</span> <span m="4657030">only</span> <span m="4657220">cost
  is</span> <span m="4657650">associated</span> <span m="4658000">with</span>
  <span m="4658350">DNA</span> <span m="4658700">replication.</span> <span
  m="4659780">So</span> <span m="4659930">the</span> <span
  m="4660650">advantage</span> <span m="4661280">associated</span> <span
  m="4661820">with</span> <span m="4662690">shutting</span> <span
  m="4663130">off</span> <span m="4663530">or</span> <span
  m="4663830">removing</span> <span m="4664470">the</span> <span
  m="4664540">ability</span> <span m="4664820">to</span> <span m="4664910">grow
  on</span> <span m="4665170">lactose</span> <span m="4665590">is just</span>
  <span m="4665840">really</span> <span m="4666020">minimal.</span> <span
  m="4666660">And</span> <span m="4666770">indeed,</span> <span
  m="4667320">in</span> <span m="4667460">this</span> <span
  m="4667670">culture,</span> <span m="4670200">the</span> <span
  m="4670340">authors</span> <span m="4670570">did</span> <span
  m="4670750">say,</span> <span m="4671420">what</span> <span
  m="4671580">happened.</span></p><p><span m="4673020">AUDIENCE:</span> <span
  m="4673510">Yeah,</span> <span m="4674980">the entire</span> <span
  m="4675470">gene</span> <span m="4675960">is</span> <span
  m="4676450">diluted,</span> <span m="4676940">right?</span></p><p><span
  m="4677430">PROFESSOR: Yeah,</span> <span m="4677920">right.</span> <span
  m="4678330">So it was</span> <span m="4678560">almost</span> <span
  m="4678980">a</span> <span m="4679030">kB</span> <span m="4679650">was</span>
  <span m="4679800">just</span> <span m="4679990">removed</span> <span
  m="4680470">from</span> <span m="4680640">the</span> <span
  m="4680720">genome.</span> <span m="4681410">And</span> <span
  m="4681670">that</span> <span m="4681880">kB</span> <span
  m="4682200">included</span> <span m="4682990">the</span> <span
  m="4683930">promoter.</span> <span m="4684510">And</span> <span
  m="4685830">so</span> <span m="4685970">that</span> <span
  m="4686180">it</span> <span m="4686290">just--</span> <span
  m="4686600">yeah.</span> <span m="4688140">So</span> <span
  m="4688200">it's</span> <span m="4688330">not</span> <span
  m="4688580">going</span> <span m="4688680">to</span> <span
  m="4688730">be</span> <span m="4688870">able</span> <span
  m="4689010">to</span> <span m="4689080">grow on</span> <span
  m="4689395">lactose</span> <span m="4689710">anymore.</span></p><p><span
  m="4692980">But</span> <span m="4693260">the</span> <span
  m="4693410">key</span> <span m="4693580">thing</span> <span
  m="4693730">is</span> <span m="4693820">here,</span> <span
  m="4694340">these</span> <span m="4694920">cells</span> <span
  m="4695310">were</span> <span m="4695450">subject</span> <span
  m="4695830">to</span> <span m="4695890">this</span> <span
  m="4696060">5%</span> <span m="4696690">cost</span> <span
  m="4697210">associated with</span> <span m="4697590">making</span> <span
  m="4697830">the</span> <span m="4697910">lac</span> <span
  m="4698130">operon,</span> <span m="4699780">which</span> <span
  m="4700050">means</span> <span m="4700330">that</span> <span
  m="4700830">that</span> <span m="4701240">mutant</span> <span
  m="4701980">that</span> <span m="4702110">appeared,</span> <span
  m="4703260">it</span> <span m="4703480">had</span> <span m="4703770">a</span>
  <span m="4703820">5%</span> <span m="4704180">advantage,</span> <span
  m="4704260">and</span> <span m="4704670">so it</span> <span
  m="4704730">was</span> <span m="4704920">able</span> <span
  m="4705100">to</span> <span m="4705160">spread</span> <span
  m="4705480">throughout the</span> <span
  m="4705760">population.</span></p><p><span m="4709700">Whereas,</span> <span
  m="4710030">what</span> <span m="4710220">they</span> <span
  m="4710330">could</span> <span m="4710490">see</span> <span
  m="4710650">is</span> <span m="4710760">that</span> <span
  m="4713910">the</span> <span m="4714000">evolved</span> <span
  m="4715560">lacZ</span> <span m="4715980">activity</span> <span
  m="4717240">indeed</span> <span m="4717990">was</span> <span
  m="4718250">different,</span> <span m="4718540">depending</span> <span
  m="4718830">on</span> <span m="4718910">how</span> <span
  m="4719040">much</span> <span m="4719260">lactose</span> <span
  m="4720790">they</span> <span m="4720910">had</span> <span m="4721120">in
  the</span> <span m="4721290">culture.</span> <span m="4722340">And</span>
  <span m="4722460">this</span> <span m="4722590">is</span> <span
  m="4722720">in</span> <span m="4722860">the</span> <span
  m="4722940">presence</span> <span m="4723270">by</span> <span
  m="4723410">IPTG,</span> <span m="4723850">so</span> <span
  m="4725190">they</span> <span m="4725330">removed</span> <span
  m="4726180">that</span> <span m="4726370">feedback</span> <span
  m="4726680">loop.</span></p><p><span m="4733160">And</span> <span
  m="4733310">in</span> <span m="4733900">these</span> <span
  m="4734070">experiments,</span> <span m="4735080">anyway</span> <span
  m="4735420">you</span> <span m="4735510">slice</span> <span
  m="4735870">it,</span> <span m="4736670">the</span> <span
  m="4737320">normalized</span> <span m="4737960">lacZ</span> <span
  m="4738280">activity</span> <span m="4739100">did</span> <span
  m="4739260">not</span> <span m="4739580">go</span> <span
  m="4739730">above</span> <span m="4740110">around</span> <span
  m="4740450">1.2</span> <span m="4741660">or</span> <span
  m="4742000">1.3.</span> <span m="4743000">So</span> <span
  m="4743110">there</span> <span m="4743260">is</span> <span
  m="4743560">some</span> <span m="4743980">non-linearity</span> <span
  m="4744790">that</span> <span m="4744920">is</span> <span
  m="4745030">somehow</span> <span m="4745820">constraining</span> <span
  m="4746480">those</span> <span m="4746680">cells</span> <span
  m="4747090">from</span> <span m="4747250">going</span> <span
  m="4747610">up</span> <span m="4747810">to</span> <span
  m="4750170">increased</span> <span m="4750590">expression</span> <span
  m="4751140">very</span> <span m="4751440">much</span> <span
  m="4751660">beyond</span> <span m="4751940">the</span> <span
  m="4752010">wild</span> <span m="4752290">type.</span></p><p><span
  m="4758620">We</span> <span m="4758860">are</span> <span
  m="4760310">out</span> <span m="4760470">of</span> <span
  m="4760530">time,</span> <span m="4761090">but</span> <span
  m="4761320">on</span> <span m="4762100">Tuesday,</span> <span
  m="4762430">we'll</span> <span m="4762890">start</span> <span
  m="4763130">talking</span> <span m="4763470">about</span> <span
  m="4764540">evolution,</span> <span m="4764800">and</span> <span
  m="4765060">in</span> <span m="4765140">particular,</span> <span
  m="4765510">in</span> <span m="4765520">the</span> <span
  m="4765680">context</span> <span m="4766090">of</span> <span
  m="4766160">neutral</span> <span m="4766540">evolution,</span> <span
  m="4766970">as</span> <span m="4767150">kind</span> <span
  m="4767260">of</span> <span m="4767330">a</span> <span m="4767380">null</span>
  <span m="4767660">model</span> <span m="4767950">to</span> <span
  m="4768030">try</span> <span m="4768180">to</span> <span
  m="4768240">understand</span> <span m="4768540">these</span> <span
  m="4768660">dynamics.</span></p><p><span m="4769570">And</span> <span
  m="4769980">we</span> <span m="4770170">will</span> <span
  m="4770340">also</span> <span m="4770600">talk</span> <span
  m="4770900">more</span> <span m="4771170">about</span> <span
  m="4771850">why</span> <span m="4772170">it</span> <span
  m="4772480">takes</span> <span m="4773600">as</span> <span
  m="4773780">long</span> <span m="4773990">as</span> <span
  m="4774070">it</span> <span m="4774160">does</span> <span
  m="4774410">before</span> <span m="4774700">you</span> <span
  m="4774760">start</span> <span m="4775050">seeing</span> <span
  m="4775310">anything</span> <span m="4775670">happening</span> <span
  m="4775980">here.</span> <span m="4776290">If</span> <span
  m="4776710">you</span> <span m="4776790">have</span> <span
  m="4776870">any</span> <span m="4776940">questions,</span> <span
  m="4777440">please</span> <span m="4777740">feel free</span> <span
  m="4778040">to come</span> <span m="4778340">on up.</span></p>
embedded_media:
  - uid: edec914a9351b8688b9b9f77fe23b648
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 9yGxpWVWYDY
  - uid: d8ee8f12789bc7372389441096cba557
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/9yGxpWVWYDY/default.jpg'
  - uid: 64a82f4255d17353810c2e3bcfb9543a
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1020693367'
  - uid: 2b7151da98ee9b27fce8d0b79258c99a
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT8.591JF14/MIT8_591JF14_lec14_300k.mp4'
  - uid: f029386eff45a678e4af71d9c0744d7b
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 9yGxpWVWYDY
  - uid: a35ea24edfc8567f5a6dc16e59ea8367
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: 9yGxpWVWYDY.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/microbial-evolution-experiments-and-optimal-gene-circuit-design/9yGxpWVWYDY.srt
  - uid: 9c7db76bcc1106ddd7bd6ac361dea3f5
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: 9yGxpWVWYDY.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/microbial-evolution-experiments-and-optimal-gene-circuit-design/9yGxpWVWYDY.pdf
  - uid: d6bc425a12c5b558d88a466a9d52bfea
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 8ba8f7db24fbdf6cc49cce7de14c3a4d
    parent_uid: 86d262091449f6a469c9a0917f8fae8d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
