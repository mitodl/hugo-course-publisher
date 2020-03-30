---
title: Causes and Consequences of Stochastic Gene Expression
uid: fccab379f1fc5a5de2fe49b20461eca2
parent_uid: 2c19124a07b81891918cf65ff26fbc3c
technical_location: >-
  https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/causes-and-consequences-of-stochastic-gene-expression
short_url: causes-and-consequences-of-stochastic-gene-expression
inline_embed_id: 18805263causesandconsequencesofstochasticgeneexpression80033195
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, the class analyzes a simple
  model of gene expression, first to understand the deterministic behavior of
  the model, and then to look at the stochastic behavior of the model.</p>
  <p><strong>Instructor:</strong> Prof. Jeff Gore</p>
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
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21590">PROFESSOR: Our</span> <span m="21980">goal</span> <span
  m="22230">for</span> <span m="22370">today</span> <span m="22750">is</span>
  <span m="22940">to</span> <span m="23290">basically</span> <span
  m="24580">analyze</span> <span m="25230">this</span> <span
  m="25580">simple</span> <span m="25910">model</span> <span m="26350">to</span>
  <span m="26510">death.</span> <span m="27530">So</span> <span
  m="27670">we're</span> <span m="27920">first</span> <span
  m="28860">going</span> <span m="29090">to</span> <span m="29610">try</span>
  <span m="29750">to</span> <span m="29810">understand</span> <span
  m="30520">the</span> <span m="31670">deterministic</span> <span
  m="32549">behavior</span> <span m="32960">of</span> <span
  m="33380">this</span> <span m="33650">model</span> <span m="34000">gene</span>
  <span m="34190">expression,</span> <span m="34970">where</span> <span
  m="35090">we</span> <span m="35200">just</span> <span m="35520">get</span>
  <span m="37380">transcription</span> <span m="37670">of</span> <span
  m="37960">mRNA,</span> <span m="38130">and</span> <span m="38370">then</span>
  <span m="38680">translation</span> <span m="39320">of protein.</span> <span
  m="40100">And</span> <span m="40220">after</span> <span m="40670">we</span>
  <span m="40820">think</span> <span m="41000">we</span> <span
  m="41100">understand</span> <span m="42410">the</span> <span
  m="42640">mean</span> <span m="42960">behavior,</span> <span
  m="43400">the</span> <span m="43510">deterministic</span> <span
  m="44010">dynamics,</span> <span m="44450">then</span> <span
  m="44610">we</span> <span m="44730">will</span> <span m="45210">try</span>
  <span m="45430">to</span> <span m="45490">understand</span> <span
  m="47060">just</span> <span m="47270">stochastic</span> <span
  m="47770">behavior</span> <span m="48490">in</span> <span
  m="48630">this</span> <span m="48760">model.</span></p><p><span
  m="49400">So</span> <span m="49560">we're</span> <span m="49650">going</span>
  <span m="49750">to</span> <span m="50400">try</span> <span m="50590">to</span>
  <span m="50650">understand</span> <span m="51370">what's</span> <span
  m="51610">the</span> <span m="51710">distribution</span> <span
  m="52670">of</span> <span m="53450">mRNA</span> <span m="54935">in a</span>
  <span m="55220">cell in</span> <span m="55680">this</span> <span
  m="55760">simple</span> <span m="56050">situation.</span> <span
  m="56920">What's</span> <span m="57190">the distribution</span> <span
  m="57645">of</span> <span m="58100">protein?</span> <span
  m="58770">What's</span> <span m="59050">going</span> <span m="59140">to</span>
  <span m="59190">be</span> <span m="59380">the</span> <span
  m="59490">bursting</span> <span m="59890">behavior?</span> <span
  m="61520">Everything</span> <span m="61820">you can</span> <span
  m="62010">possibly</span> <span m="62560">think</span> <span
  m="62700">of</span> <span m="62900">to</span> <span m="63570">ask</span> <span
  m="63870">about this</span> <span m="64110">model,</span> <span
  m="64420">we</span> <span m="64580">will</span> <span
  m="64750">hopefully</span> <span m="65070">have</span> <span
  m="65390">asked</span> <span m="65730">by</span> <span m="65840">the</span>
  <span m="65950">end</span> <span m="66090">of</span> <span
  m="66620">today's</span> <span m="67040">class.</span></p><p><span
  m="68230">This</span> <span m="68590">simple</span> <span
  m="68980">model</span> <span m="69370">of</span> <span m="69500">gene</span>
  <span m="69610">expression,</span> <span m="70150">as</span> <span
  m="70330">was</span> <span m="70660">indicated</span> <span
  m="71450">in</span> <span m="71580">the</span> <span m="71650">review,</span>
  <span m="72020">is</span> <span m="72420">perhaps</span> <span
  m="72830">a</span> <span m="72970">reasonable</span> <span
  m="73370">description</span> <span m="74210">of</span> <span
  m="75190">gene</span> <span m="75350">expression</span> <span
  m="75800">in</span> <span m="76510">bacteria,</span> <span
  m="78212">when</span> <span m="79010">the</span> <span m="79130">gene</span>
  <span m="79390">is</span> <span m="79470">in</span> <span
  m="79830">some</span> <span m="79960">active</span> <span
  m="80730">state.</span> <span m="81180">So</span> <span
  m="81290">there's</span> <span m="81470">no</span> <span
  m="81620">repressor,</span> <span m="82130">for</span> <span
  m="82320">example,</span> <span m="82710">bound.</span> <span
  m="85600">Although</span> <span m="85790">maybe</span> <span m="86160">even in
  the</span> <span m="86460">presence</span> <span m="86770">of a</span> <span
  m="86830">repressor,</span> <span m="87655">if it's</span> <span
  m="87990">binding</span> <span m="88420">and</span> <span
  m="88540">unbinding,</span> <span m="88660">maybe</span> <span
  m="88930">you</span> <span m="89050">still</span> <span m="89280">end</span>
  <span m="89410">up</span> <span m="89530">getting</span> <span
  m="89800">some</span> <span m="89940">sort</span> <span m="90070">of</span>
  <span m="90160">renormalization</span> <span m="90970">that</span> <span
  m="91070">looks</span> <span m="91250">like</span> <span
  m="91440">this.</span> <span m="92600">But</span> <span m="93120">this</span>
  <span m="93340">is</span> <span m="93900">first</span> <span
  m="94230">order,</span> <span m="94460">a reasonable</span> <span
  m="94770">description</span> <span m="95220">of</span> <span
  m="96070">gene</span> <span m="96200">expression</span> <span
  m="96650">in</span> <span m="97062">bacteria.</span></p><p><span
  m="98710">And</span> <span m="98870">it's</span> <span m="99370">the</span>
  <span m="99420">model</span> <span m="99820">that</span> <span
  m="100730">was</span> <span m="100940">basically</span> <span
  m="101460">used</span> <span m="101850">in</span> <span m="102110">the</span>
  <span m="102270">Sunney</span> <span m="102460">Xie</span> <span
  m="102660">paper</span> <span m="102970">that</span> <span
  m="103100">we</span> <span m="103790">talked</span> <span
  m="103970">about</span> <span m="104070">on</span> <span
  m="104160">Tuesday.</span> <span m="104860">And</span> <span
  m="105370">hopefully</span> <span m="105700">this</span> <span
  m="105920">model</span> <span m="106290">will allow</span> <span
  m="106560">us</span> <span m="106760">to</span> <span m="107280">think</span>
  <span m="107690">a</span> <span m="107900">little</span> <span
  m="108050">bit</span> <span m="108130">more</span> <span
  m="108280">deeply</span> <span m="108630">about</span> <span
  m="109430">the</span> <span m="109600">data</span> <span
  m="109880">that</span> <span m="110140">they</span> <span
  m="110250">obtained</span> <span m="110390">in that</span> <span
  m="110790">paper.</span></p><p><span m="113640">As</span> <span
  m="113940">always,</span> <span m="114940">we</span> <span
  m="115010">want</span> <span m="115230">to</span> <span
  m="115340">start</span> <span m="116325">by</span> <span
  m="116770">understanding</span> <span m="117320">the</span> <span
  m="117540">basic</span> <span m="117790">aspects</span> <span
  m="118140">of</span> <span m="118180">the</span> <span
  m="118230">model.</span> <span m="119210">So</span> <span
  m="119300">what</span> <span m="119430">we're</span> <span
  m="119510">going</span> <span m="119640">to do,</span> <span m="119780">is
  we're</span> <span m="120020">going to go</span> <span
  m="120140">through</span> <span m="120470">a</span> <span
  m="120530">series</span> <span m="120870">of</span> <span
  m="120920">questions</span> <span m="122010">of</span> <span
  m="122430">increasing</span> <span m="122920">difficulty.</span> <span
  m="123660">And</span> <span m="124190">in</span> <span m="124390">some</span>
  <span m="124720">of</span> <span m="124830">them,</span> <span
  m="125550">we</span> <span m="125760">are</span> <span
  m="126250">indeed,</span> <span m="126580">the</span> <span
  m="126750">answers</span> <span m="127200">will</span> <span
  m="127350">end</span> <span m="127480">up</span> <span m="127630">being</span>
  <span m="130555">something</span> <span m="130979">divided</span> <span
  m="131240">by</span> <span m="131330">something.</span> <span
  m="132480">In</span> <span m="132580">which</span> <span
  m="132770">case</span> <span m="133020">you</span> <span
  m="133110">take</span> <span m="133270">advantage</span> <span
  m="133550">of</span> <span m="133610">your</span> <span
  m="133700">cards,</span> <span m="134200">and</span> <span
  m="134800">illustrate</span> <span m="135120">that</span> <span
  m="135320">by</span> <span m="135420">putting</span> <span
  m="135600">something</span> <span m="135890">on</span> <span
  m="135940">top,</span> <span m="136220">something</span> <span
  m="136490">below.</span></p><p><span m="144410">But</span> <span
  m="144540">just</span> <span m="144720">first</span> <span
  m="146080">in</span> <span m="146220">this</span> <span
  m="146390">model,</span> <span m="147010">what</span> <span
  m="147190">is</span> <span m="147300">the</span> <span m="147360">unit</span>
  <span m="147640">of</span> <span m="147750">time?</span> <span
  m="148270">So</span> <span m="148340">if</span> <span m="148440">I</span>
  <span m="148530">say</span> <span m="149290">t</span> <span
  m="149600">is</span> <span m="149700">equal</span> <span m="149880">to</span>
  <span m="149950">1,</span> <span m="150330">or</span> <span
  m="150420">delta</span> <span m="150690">t</span> <span m="150830">is</span>
  <span m="150920">equal</span> <span m="151050">to</span> <span
  m="151120">1,</span> <span m="152072">what</span> <span m="152550">am</span>
  <span m="152780">I</span> <span m="153070">referring</span> <span
  m="153850">to?</span> <span m="155460">So</span> <span m="155650">we're</span>
  <span m="155770">not</span> <span m="156010">use</span> <span
  m="156160">the</span> <span m="156260">cards.</span> <span
  m="156860">But</span> <span m="158740">in</span> <span
  m="158830">particular,</span> <span m="159260">the</span> <span
  m="159360">question</span> <span m="159730">is,</span> <span
  m="160636">is</span> <span m="161090">delta t</span> <span
  m="161380">equal</span> <span m="161550">to</span> <span m="161620">1,</span>
  <span m="162070">is</span> <span m="162200">that</span> <span
  m="162430">a</span> <span m="162500">cell</span> <span m="162850">cycle</span>
  <span m="165260">necessarily?</span> <span m="166560">Yes</span> <span
  m="166840">or</span> <span m="167010">no,</span> <span
  m="167340">ready,</span> <span m="167650">three,</span> <span
  m="168430">two,</span> <span m="169220">one.</span></p><p><span
  m="169550">Well</span> <span m="169800">I guess</span> <span
  m="169970">now</span> <span m="170350">maybe</span> <span
  m="170710">I've</span> <span m="171210">complicated</span> <span
  m="171670">things</span> <span m="171950">by--</span> <span
  m="173020">well,</span> <span m="174850">this</span> <span
  m="175000">was</span> <span m="175100">really going to be</span> <span
  m="175520">relevant</span> <span m="175960">for the</span> <span
  m="176210">later</span> <span m="176510">ones.</span> <span
  m="177910">All</span> <span m="178170">right.</span> <span
  m="178910">Now</span> <span m="179070">I've</span> <span
  m="179140">totally</span> <span m="179380">confused</span> <span
  m="179690">you.</span> <span m="181000">But</span> <span m="181690">can</span>
  <span m="181850">somebody</span> <span m="182140">offer</span> <span
  m="182290">why</span> <span m="182710">it</span> <span m="182890">may</span>
  <span m="183030">or</span> <span m="183080">may</span> <span
  m="183200">not</span> <span m="183590">be--</span> <span m="185230">how</span>
  <span m="185480">do</span> <span m="185530">we</span> <span
  m="185620">think</span> <span m="185750">about</span> <span
  m="185810">the</span> <span m="185850">unit</span> <span m="186100">of</span>
  <span m="186180">time</span> <span m="186460">in</span> <span
  m="186530">this</span> <span m="186680">model?</span></p><p><span
  m="188920">AUDIENCE: Usually</span> <span m="189400">the</span> <span
  m="189880">lifetime</span> <span m="190360">of one</span> <span m="190840">of
  the species</span> <span m="191320">[INAUDIBLE].</span></p><p><span
  m="194680">PROFESSOR: Right.</span> <span m="195030">OK</span> <span
  m="195190">so</span> <span m="196070">indeed,</span> <span
  m="196580">what</span> <span m="196750">we</span> <span
  m="197230">often</span> <span m="197600">do</span> <span m="197750">in</span>
  <span m="197820">these</span> <span m="197980">non-dimensionalized</span>
  <span m="198640">models</span> <span m="199070">is</span> <span
  m="199190">we</span> <span m="199330">set</span> <span
  m="199720">something</span> <span m="200040">equal</span> <span
  m="200300">to</span> <span m="200370">1.</span> <span m="201530">Have
  we</span> <span m="201810">set</span> <span m="201970">anything</span> <span
  m="202290">equal</span> <span m="202500">to</span> <span m="202560">1</span>
  <span m="202770">here?</span> <span m="203876">No.</span> <span
  m="204430">So</span> <span m="204520">in</span> <span
  m="204590">principle,</span> <span m="205110">we've</span> <span
  m="205330">said</span> <span m="205570">there's</span> <span
  m="205710">some</span> <span m="205870">degradation</span> <span
  m="206520">rate</span> <span m="206790">of</span> <span m="206890">the</span>
  <span m="207100">mRNA,</span> <span m="207700">some</span> <span
  m="207890">degradation</span> <span m="208440">rate</span> <span
  m="208600">of</span> <span m="208650">the</span> <span
  m="208730">protein.</span> <span m="210600">And</span> <span
  m="210730">in</span> <span m="210800">general,</span> <span
  m="211100">those</span> <span m="211410">will</span> <span
  m="211600">be</span> <span m="211710">given</span> <span m="211960">in</span>
  <span m="212080">some</span> <span m="212350">units</span> <span
  m="214260">involving</span> <span m="214780">seconds</span> <span
  m="215360">or</span> <span m="215430">minutes</span> <span
  m="215880">or</span> <span m="216000">hours.</span> <span m="218120">So</span>
  <span m="218280">in</span> <span m="218420">general,</span> <span
  m="219000">so</span> <span m="219690">at</span> <span m="219810">this</span>
  <span m="219970">stage,</span> <span m="220340">we</span> <span
  m="220350">have</span> <span m="220470">not</span> <span
  m="220850">yet--</span> <span m="221140">we</span> <span
  m="221240">have</span> <span m="221330">not</span> <span
  m="221530">actually</span> <span m="223240">gotten</span> <span
  m="223520">to</span> <span m="223630">this</span> <span m="224310">sort</span>
  <span m="224480">of</span> <span m="224850">non-dimensionalized</span> <span
  m="225670">version</span> <span m="225980">of</span> <span
  m="226060">any</span> <span m="226190">model.</span></p><p><span m="227110">So
  in</span> <span m="227190">this</span> <span m="227350">case</span> <span
  m="228030">this</span> <span m="228200">is</span> <span
  m="228310">going</span> <span m="228430">to</span> <span m="228480">be</span>
  <span m="229220">something</span> <span m="229490">like</span> <span
  m="229760">a</span> <span m="229830">seconds,</span> <span
  m="230680">or</span> <span m="230960">minutes,</span> <span
  m="231790">or</span> <span m="232370">hours,</span> <span
  m="233500">whatever</span> <span m="234240">units</span> <span
  m="234620">we</span> <span m="234980">use</span> <span m="235200">for</span>
  <span m="237360">those</span> <span m="237580">degradation</span> <span
  m="237830">rates.</span> <span m="238230">So</span> <span m="239700">we</span>
  <span m="240140">have</span> <span m="240220">not</span> <span
  m="240400">done</span> <span m="240540">anything</span> <span
  m="240790">where</span> <span m="240890">it's</span> <span
  m="241050">the</span> <span m="241170">cell</span> <span
  m="241360">generation</span> <span m="241720">time,</span> <span
  m="241990">or</span> <span m="242120">the</span> <span
  m="242340">protein</span> <span m="242430">lifetime,</span> <span
  m="242700">mRNA</span> <span m="243010">lifetime,</span> <span m="243400">or
  anything</span> <span m="243863">like</span> <span m="244326">that.</span>
  <span m="244790">Here</span> <span m="245400">everybody</span> <span
  m="245720">happy</span> <span m="246010">with</span> <span
  m="246110">this</span> <span m="246550">statement</span> <span
  m="246880">so</span> <span m="246980">far?</span></p><p><span
  m="250200">So</span> <span m="250360">we'll</span> <span m="250710">go</span>
  <span m="250850">ahead</span> <span m="250990">and</span> <span
  m="251320">vote</span> <span m="251630">here.</span> <span
  m="252180">So</span> <span m="252330">we're</span> <span
  m="252440">going</span> <span m="252520">to</span> <span m="252580">do</span>
  <span m="252790">some</span> <span m="252970">A,</span> <span
  m="253270">B,</span> <span m="253715">C,</span> <span m="254160">D's.</span>
  <span m="256899">And</span> <span m="257040">you</span> <span
  m="257130">can</span> <span m="257250">always</span> <span
  m="257620">combine</span> <span m="258769">anything</span> <span
  m="259079">you</span> <span m="259190">want.</span> <span m="259890">So</span>
  <span m="260010">we'll</span> <span m="260170">go</span> <span
  m="260290">ahead</span> <span m="260550">and</span> <span
  m="262089">say</span> <span m="262460">this</span> <span m="262610">is</span>
  <span m="263630">the</span> <span m="263710">synthesis</span> <span
  m="264230">rate</span> <span m="264470">of</span> <span m="264950">the</span>
  <span m="265120">mRNA.</span> <span m="266980">This is</span> <span
  m="267060">the degradation</span> <span m="267610">rate</span> <span
  m="267880">for</span> <span m="267950">the</span> <span
  m="268190">mRNA,</span> <span m="268750">the</span> <span
  m="268810">synthesis</span> <span m="269330">rate</span> <span
  m="269530">for</span> <span m="269590">the</span> <span
  m="269690">protein,</span> <span m="270380">the</span> <span
  m="270650">degradation</span> <span m="271160">rate</span> <span
  m="271430">for</span> <span m="271600">the</span> <span
  m="271700">protein.</span> <span m="274910">And</span> <span
  m="275240">if</span> <span m="275390">you're</span> <span
  m="275500">just</span> <span m="275630">confused,</span> <span m="275780">you
  can</span> <span m="276090">just</span> <span m="276260">do</span> <span
  m="276340">this.</span> <span m="276830">But</span> <span m="277240">in</span>
  <span m="277420">general,</span> <span m="277900">for any of the</span> <span
  m="278020">questions</span> <span m="278370">we're</span> <span
  m="278460">going</span> <span m="278540">to</span> <span m="278600">do,</span>
  <span m="278870">you</span> <span m="278990">can</span> <span
  m="279270">do</span> <span m="279400">some</span> <span
  m="279580">combination</span> <span m="280230">of</span> <span
  m="280860">these</span> <span m="281030">guys</span> <span
  m="281260">by</span> <span m="281490">putting</span> <span
  m="281790">things</span> <span m="282000">in</span> <span m="282040">numerator
  and</span> <span m="282320">denominator.</span> <span
  m="282710">Yes?</span></p><p><span m="283576">AUDIENCE: Calculate</span> <span
  m="284010">the population</span> <span m="284890">of the cells</span> <span
  m="285330">that</span> <span m="285770">were hidden?</span></p><p><span
  m="286650">PROFESSOR: Yes.</span> <span m="287930">Question</span> <span
  m="288280">is,</span> <span m="288810">if</span> <span m="289570">you</span>
  <span m="289700">just</span> <span m="289930">look</span> <span
  m="290200">at</span> <span m="290550">the</span> <span m="290830">cell</span>
  <span m="291050">population,</span> <span m="291810">and</span> <span
  m="292410">you</span> <span m="292550">find</span> <span
  m="292740">it's</span> <span m="292840">growing</span> <span
  m="293090">exponentially,</span> <span m="293520">the question</span> <span
  m="293750">is</span> <span m="293830">what</span> <span m="294070">is</span>
  <span m="294190">going to</span> <span m="294330">be</span> <span
  m="294450">that</span> <span m="294800">rate</span> <span m="295100">of</span>
  <span m="295300">exponential</span> <span m="295770">growth.</span> <span
  m="299570">Have</span> <span m="299750">I</span> <span m="300150">done</span>
  <span m="300340">something</span> <span m="300530">wrong</span> <span
  m="300760">already?</span></p><p><span m="304576">AUDIENCE:
  [INAUDIBLE]?</span></p><p><span m="308570">PROFESSOR: OK.</span> <span
  m="308900">But</span> <span m="309560">I</span> <span m="309730">am</span>
  <span m="309870">going</span> <span m="309970">to</span> <span
  m="310020">say</span> <span m="310160">that</span> <span m="310870">now</span>
  <span m="311090">for</span> <span m="311180">this</span> <span
  m="311360">we're</span> <span m="311450">going</span> <span
  m="311530">to</span> <span m="311570">assume</span> <span
  m="311850">that</span> <span m="311990">the</span> <span
  m="312540">protein</span> <span m="312910">is</span> <span
  m="313010">stable.</span> <span m="313800">So</span> <span
  m="313990">it's</span> <span m="314150">not</span> <span
  m="314510">actually</span> <span m="314850">degraded.</span> <span
  m="322870">This</span> <span m="323060">is</span> <span m="323210">to</span>
  <span m="323340">remind</span> <span m="323800">you</span> <span
  m="324210">of</span> <span m="324970">what</span> <span m="325100">we</span>
  <span m="325210">read</span> <span m="325360">about</span> <span
  m="325530">in</span> <span m="325620">chapter</span> <span
  m="325910">one,</span> <span m="326400">maybe of</span> <span
  m="326830">Uri's</span> <span m="327140">book,</span> <span
  m="328160">maybe</span> <span m="328350">chapter</span> <span
  m="328720">two.</span> <span m="330050">I'll</span> <span
  m="330350">give</span> <span m="330490">you</span> <span m="330680">10</span>
  <span m="330900">seconds</span> <span m="331220">to</span> <span
  m="331270">think</span> <span m="331430">about</span> <span
  m="331590">this.</span></p><p><span m="340910">Do</span> <span
  m="340990">you</span> <span m="341060">need</span> <span
  m="341200">more</span> <span m="341320">time?</span> <span m="344070">All
  right,</span> <span m="344980">Ready,</span> <span m="345330">three,</span>
  <span m="346080">two,</span> <span m="346680">one.</span> <span
  m="348590">OK.</span> <span m="350010">We</span> <span m="350090">got</span>
  <span m="350200">a</span> <span m="350240">bunch</span> <span
  m="350430">of</span> <span m="350500">C's and</span> <span m="350820">a
  bunch</span> <span m="350980">of</span> <span m="351040">D's</span> <span
  m="352130">and</span> <span m="352420">some</span> <span
  m="352580">E's.</span> <span m="353480">All</span> <span
  m="353550">right.</span> <span m="353730">So</span> <span m="353790">the
  E's</span> <span m="354170">are</span> <span m="354220">going</span> <span
  m="354330">to</span> <span m="354660">argue</span> <span
  m="354970">with</span> <span m="355070">me,</span> <span
  m="355330">presumably</span> <span m="355730">rather</span> <span
  m="355950">than</span> <span m="356250">a neighbor.</span> <span
  m="360770">OK.</span> <span m="361910">I</span> <span m="362010">think</span>
  <span m="362230">that there</span> <span m="362520">are</span> <span
  m="362700">enough</span> <span m="363070">people</span> <span
  m="363390">that</span> <span m="363510">are</span> <span
  m="363570">disagreeing</span> <span m="364050">on</span> <span
  m="364140">this</span> <span m="364510">to</span> <span
  m="365000">maybe</span> <span m="365530">go</span> <span
  m="365670">ahead,</span> <span m="366030">and</span> <span
  m="366130">turn.</span> <span m="366470">You</span> <span
  m="366640">should</span> <span m="366820">be able to</span> <span
  m="366980">find</span> <span m="367210">somebody</span> <span
  m="367470">that</span> <span m="367540">disagrees</span> <span
  m="367820">with</span> <span m="368100">you.</span> <span
  m="368580">The</span> <span m="368640">distribution</span> <span
  m="369060">was</span> <span m="369240">a</span> <span m="369280">bit</span>
  <span m="369500">patchy,</span> <span m="369990">unfortunately.</span> <span
  m="370980">Did</span> <span m="371120">you</span> <span
  m="371220">guys--</span> <span m="373970">you</span> <span
  m="374070">guys</span> <span m="374340">are</span> <span
  m="374410">worried</span> <span m="374720">that</span> <span
  m="374810">you're</span> <span m="374970">not</span> <span m="375140">going to
  be</span> <span m="375420">able to find somebody.</span> <span
  m="375700">OK.</span> <span m="376160">Fine,</span> <span
  m="376440">fine.</span> <span m="377650">Yeah?</span></p><p><span
  m="378650">AUDIENCE: So</span> <span m="378950">if the</span> <span
  m="381240">protein</span> <span m="381698">is stable,</span> <span
  m="382160">ah,</span> <span m="382580">so the</span> <span
  m="383012">mRNA</span> <span m="383444">may not</span> <span m="383876">be
  stable?</span></p><p><span m="384740">PROFESSOR: The</span> <span
  m="384880">mRNA</span> <span m="385280">may</span> <span m="385390">not</span>
  <span m="385560">be</span> <span m="385650">stable.</span></p><p><span
  m="386095">AUDIENCE: Ah,</span> <span m="386540">OK.</span> <span
  m="386926">That makes</span> <span m="387312">sense.</span></p><p><span
  m="387700">PROFESSOR: And</span> <span m="387910">in</span> <span
  m="387980">general</span> <span m="388780">which</span> <span
  m="389040">one</span> <span m="389770">typically</span> <span
  m="389980">has</span> <span m="390100">a</span> <span m="390150">longer</span>
  <span m="390390">lifetime?</span></p><p><span m="392251">AUDIENCE:
  Proteins.</span></p><p><span m="392690">PROFESSOR: Proteins</span> <span
  m="393640">typically</span> <span m="393840">have</span> <span
  m="393910">a</span> <span m="393960">longer</span> <span
  m="394180">lifetime.</span> <span m="395090">Right.</span> <span
  m="395430">So</span> <span m="395550">mRNA</span> <span m="398230">are</span>
  <span m="398590">actively</span> <span m="399060">degraded,</span> <span
  m="399510">typically.</span> <span m="400810">They're</span> <span
  m="400970">also</span> <span m="401140">just</span> <span
  m="401270">kind</span> <span m="401380">of</span> <span m="401600">less</span>
  <span m="401880">stable</span> <span m="402410">intrinsically.</span> <span
  m="404790">But what</span> <span m="404950">we're</span> <span
  m="405120">going</span> <span m="405200">to</span> <span m="405270">assume
  for</span> <span m="405530">now</span> <span m="405700">is</span> <span
  m="405780">that</span> <span m="405850">we're</span> <span
  m="406050">working</span> <span m="406400">with</span> <span
  m="406780">stable</span> <span m="407140">proteins.</span> <span
  m="408890">In</span> <span m="409030">which</span> <span
  m="409240">case</span> <span m="411560">the</span> <span
  m="411680">growth</span> <span m="411980">rate</span> <span
  m="412430">of</span> <span m="412570">the</span> <span
  m="412640">population</span> <span m="414340">will</span> <span
  m="414660">just</span> <span m="414930">be</span> <span m="415120">this</span>
  <span m="416260">effective</span> <span m="416810">degradation</span> <span
  m="417270">rate</span> <span m="417460">of</span> <span m="417530">the</span>
  <span m="417610">protein.</span></p><p><span m="419450">So</span> <span
  m="419570">in</span> <span m="419670">this</span> <span
  m="419800">model,</span> <span m="420425">even</span> <span
  m="420710">if</span> <span m="420950">we</span> <span m="421100">say</span>
  <span m="421250">there's</span> <span m="421420">no</span> <span
  m="421630">active</span> <span m="422950">degradation</span> <span
  m="423350">of</span> <span m="423560">the protein,</span> <span
  m="424050">still there's</span> <span m="424140">going</span> <span
  m="424240">to</span> <span m="424280">be</span> <span m="424340">some</span>
  <span m="424490">effective</span> <span m="425540">degradation</span> <span
  m="428850">that's</span> <span m="428940">due to</span> <span
  m="429210">dilution.</span> <span m="430930">So</span> <span m="431130">we
  can</span> <span m="431360">say</span> <span m="431630">effective,</span>
  <span m="432380">if you</span> <span m="432844">like.</span> <span
  m="436280">So</span> <span m="436610">the</span> <span m="436940">rate</span>
  <span m="437220">of</span> <span m="437900">exponential</span> <span
  m="438330">growth</span> <span m="438540">of the</span> <span
  m="438630">population</span> <span m="439040">will</span> <span
  m="439150">be</span> <span m="439380">equal</span> <span m="439610">to</span>
  <span m="439660">this</span> <span m="439780">effective</span> <span
  m="440170">degradation</span> <span m="440610">rate</span> <span
  m="440760">for</span> <span m="440830">the</span> <span
  m="440910">protein,</span> <span m="441270">if</span> <span
  m="441360">it's</span> <span m="441490">stable.</span></p><p><span
  m="445153">AUDIENCE: So you're</span> <span m="445632">talking about</span>
  <span m="446111">the population</span> <span m="446590">of the</span> <span
  m="447069">protein?</span></p><p><span m="448990">PROFESSOR: No.</span> <span
  m="450000">The</span> <span m="450160">growth</span> <span
  m="450540">rate</span> <span m="450920">of</span> <span m="451250">the</span>
  <span m="451350">cell</span> <span m="451700">population.</span> <span
  m="453240">So</span> <span m="454665">this</span> <span m="455080">is</span>
  <span m="455190">if</span> <span m="455290">we</span> <span
  m="455400">go</span> <span m="455600">in</span> <span m="455700">there,</span>
  <span m="456020">and</span> <span m="457140">you</span> <span
  m="457620">go</span> <span m="457860">into</span> <span m="457960">your</span>
  <span m="458110">spectrophotometer.</span> <span m="458980">And you</span>
  <span m="459130">measure</span> <span m="460660">population--</span> <span
  m="461350">numbers</span> <span m="461710">in function</span> <span
  m="461800">of</span> <span m="461900">time</span> <span m="462190">is</span>
  <span m="462290">growing</span> <span m="462690">exponentially.</span> <span
  m="463280">It'll</span> <span m="463480">grow</span> <span
  m="463670">exponentially</span> <span m="464110">with</span> <span
  m="464270">this</span> <span m="464500">rate.</span> <span
  m="465300">Because</span> <span m="466115">this</span> <span
  m="466480">is</span> <span m="466610">what's</span> <span
  m="466790">causing</span> <span m="467210">the</span> <span
  m="467290">dilution.</span></p><p><span m="467710">In</span> <span
  m="467780">some</span> <span m="467920">ways</span> <span m="470332">if</span>
  <span m="470710">you</span> <span m="470860">stop</span> <span
  m="471140">making</span> <span m="471350">the</span> <span
  m="471430">protein,</span> <span m="472600">and</span> <span
  m="472900">you</span> <span m="473270">double</span> <span
  m="473540">the</span> <span m="473620">number</span> <span
  m="473780">of</span> <span m="473830">cells,</span> <span
  m="474170">and</span> <span m="474320">that means the</span> <span
  m="474600">concentration</span> <span m="474880">of</span> <span
  m="476020">the</span> <span m="476120">protein</span> <span m="476560">in
  each</span> <span m="476700">cell</span> <span m="477100">has to</span> <span
  m="477420">go down</span> <span m="477680">by a</span> <span
  m="477920">factor</span> <span m="478300">of two.</span> <span
  m="479570">So</span> <span m="479630">that's</span> <span
  m="479770">the</span> <span m="479840">statement.</span> <span
  m="480420">Are</span> <span m="480520">there</span> <span
  m="480670">any</span> <span m="480780">questions</span> <span
  m="483100">about</span> <span m="483280">why</span> <span
  m="483640">I'm</span> <span m="483760">making</span> <span
  m="483940">this</span> <span m="484070">argument?</span> <span
  m="485404">Yes?</span></p><p><span m="485846">AUDIENCE: What</span> <span
  m="486288">was the</span> <span m="486730">relevance of</span> <span
  m="487172">the protein being</span> <span
  m="487614">stable?</span></p><p><span m="488280">PROFESSOR: All</span> <span
  m="488500">right.</span> <span m="488720">So</span> <span
  m="488800">the</span> <span m="488880">relevance</span> <span m="489220">of
  the</span> <span m="489320">protein</span> <span m="489540">being
  stable,</span> <span m="490310">because</span> <span m="490450">this</span>
  <span m="490600">is</span> <span m="490710">in</span> <span
  m="490830">general,</span> <span m="493280">this</span> <span
  m="493630">delta,</span> <span m="494490">this</span> <span
  m="494700">is</span> <span m="494880">the</span> <span
  m="495290">effective</span> <span m="496070">rate.</span> <span
  m="497540">This</span> <span m="497690">is</span> <span
  m="497800">going</span> <span m="497930">to</span> <span m="497990">be</span>
  <span m="498100">equal</span> <span m="498320">to</span> <span
  m="498480">the</span> <span m="499320">growth</span> <span
  m="499820">rate</span> <span m="499990">of</span> <span m="500050">the</span>
  <span m="500120">population.</span> <span m="500970">So</span> <span
  m="501060">you</span> <span m="501200">might</span> <span
  m="501390">call</span> <span m="501640">it</span> <span
  m="501780">gamma</span> <span m="502760">growth</span> <span
  m="505740">plus</span> <span m="506660">the</span> <span
  m="507660">actual</span> <span m="508010">degradation.</span> <span
  m="510010">I</span> <span m="510570">don't</span> <span m="510680">want</span>
  <span m="510780">to</span> <span m="510820">use</span> <span
  m="510980">the</span> <span m="511100">same,</span> <span
  m="512190">but</span> <span m="512330">I'll</span> <span m="512530">just
  say</span> <span m="512669">plus</span> <span m="512929">the</span> <span
  m="513010">degradation</span> <span m="513520">rate.</span> <span
  m="514770">And</span> <span m="515329">this</span> <span m="515620">is</span>
  <span m="516059">a</span> <span m="516169">true</span> <span
  m="517490">physical</span> <span m="518100">degradation,</span> <span
  m="519530">true</span> <span m="519750">degradation</span> <span
  m="520627">rate</span> <span m="521104">of the</span> <span
  m="521581">protein.</span></p><p><span m="522750">So</span> <span
  m="522870">if</span> <span m="522940">it's</span> <span
  m="523130">stable,</span> <span m="523929">then</span> <span
  m="524080">we</span> <span m="524169">say</span> <span m="524340">that</span>
  <span m="524940">this</span> <span m="525210">thing</span> <span
  m="525340">is</span> <span m="525510">zero.</span> <span m="527380">So</span>
  <span m="527540">when</span> <span m="527660">we</span> <span
  m="527750">say</span> <span m="527880">stable</span> <span
  m="528370">protein,</span> <span m="528710">it means</span> <span
  m="528930">there's</span> <span m="529140">no</span> <span
  m="529520">degradation</span> <span m="530140">of</span> <span
  m="530180">the</span> <span m="530260">protein.</span> <span
  m="530970">So</span> <span m="531100">this</span> <span
  m="531960">physical</span> <span m="532290">degradation</span> <span
  m="532520">rate is</span> <span m="532880">zero.</span> <span
  m="533700">And</span> <span m="533820">then</span> <span m="534250">the</span>
  <span m="534560">effective</span> <span m="535110">degradation</span> <span
  m="535540">rate of</span> <span m="535830">the protein</span> <span
  m="536070">is just</span> <span m="536260">equal</span> <span
  m="536490">to</span> <span m="536590">the</span> <span
  m="537350">growth</span> <span m="537570">rate of</span> <span
  m="537875">the</span> <span m="538180">population.</span></p><p><span
  m="539148">AUDIENCE:</span> <span m="539390">OK,</span> <span
  m="539424">so</span> <span m="539459">no</span> <span
  m="539493">degradation</span> <span m="539528">means</span> <span
  m="539562">stable,</span> <span m="539597">basically?</span></p><p><span
  m="542052">PROFESSOR: Yes,</span> <span m="543020">sorry,</span> <span
  m="543340">yeah.</span> <span m="545710">Any</span> <span
  m="545890">other</span> <span m="546000">questions</span> <span
  m="546340">about</span> <span m="546650">what</span> <span m="546780">I</span>
  <span m="546810">mean</span> <span m="546970">by</span> <span
  m="547050">this?</span></p><p><span m="551270">So</span> <span
  m="551410">now</span> <span m="551660">what we</span> <span
  m="551740">want</span> <span m="551860">to</span> <span m="551900">do</span>
  <span m="552020">is</span> <span m="552130">ask</span> <span
  m="552670">a</span> <span m="552750">few</span> <span m="552920">other</span>
  <span m="553090">quantities</span> <span m="553980">about</span> <span
  m="554510">this</span> <span m="554640">model.</span> <span
  m="555240">So</span> <span m="555310">for</span> <span
  m="555430">example,</span> <span m="557410">what</span> <span
  m="557690">will</span> <span m="557840">be</span> <span m="558110">the</span>
  <span m="560370">number</span> <span m="560720">of</span> <span
  m="560770">mRNA</span> <span m="561170">per</span> <span
  m="561310">cell?</span></p><p><span m="572450">And</span> <span
  m="573110">this</span> <span m="573380">is</span> <span
  m="573480">always</span> <span m="573750">going</span> <span
  m="573850">to</span> <span m="573890">be</span> <span m="574010">the</span>
  <span m="574120">mean.</span> <span m="581030">I'll</span> <span
  m="581140">give</span> <span m="581280">you</span> <span m="581480">20</span>
  <span m="581760">seconds.</span> <span m="582570">In</span> <span
  m="582750">this</span> <span m="582910">model</span> <span m="583830">what
  is</span> <span m="583990">the</span> <span m="584080">mean</span> <span
  m="584350">number</span> <span m="584640">of</span> <span
  m="584760">mRNA</span> <span m="585080">per</span> <span
  m="585200">cell?</span> <span m="609160">All right.</span> <span
  m="610280">Ready?</span> <span m="612580">Three,</span> <span
  m="613540">two,</span> <span m="614290">one.</span> <span
  m="621410">And</span> <span m="621690">we</span> <span m="622060">have</span>
  <span m="623040">let's</span> <span m="623200">say</span> <span
  m="623450">a</span> <span m="623530">majority</span> <span
  m="624170">of</span> <span m="624270">the</span> <span m="624310">group</span>
  <span m="624580">is</span> <span m="624970">saying</span> <span
  m="625120">it's</span> <span m="625330">A</span> <span m="625520">over</span>
  <span m="625760">B,</span> <span m="626630">which</span> <span
  m="626870">corresponds</span> <span m="627580">to</span> <span
  m="627650">the</span> <span m="627730">synthesis</span> <span
  m="628420">rate</span> <span m="628910">of</span> <span m="629050">the
  mRNA</span> <span m="630120">divided</span> <span m="630390">by the</span>
  <span m="630510">degradation.</span></p><p><span m="631540">Some</span> <span
  m="631690">people</span> <span m="631940">are</span> <span
  m="632330">this</span> <span m="632480">one?</span> <span
  m="633370">Yes,</span> <span m="633760">so</span> <span m="633820">this</span>
  <span m="633980">is</span> <span m="634080">indeed,</span> <span
  m="634500">synthesis</span> <span m="635040">rate</span> <span
  m="635750">divided</span> <span m="636110">by</span> <span
  m="636400">the</span> <span m="636590">degradation</span> <span
  m="637090">rate.</span> <span m="640120">Now</span> <span
  m="642570">this</span> <span m="643220">is</span> <span
  m="643330">saying</span> <span m="643650">that</span> <span
  m="644440">what</span> <span m="644600">happens</span> <span
  m="644990">later</span> <span m="645330">doesn't</span> <span
  m="645550">really</span> <span m="646350">matter,</span> <span
  m="647360">for</span> <span m="648080">the</span> <span m="648710">mean</span>
  <span m="649050">mRNA</span> <span m="649600">number.</span> <span
  m="650300">Because</span> <span m="650640">it's</span> <span
  m="650750">just</span> <span m="650950">that</span> <span
  m="651080">it's</span> <span m="651230">going</span> <span
  m="651320">to</span> <span m="651360">be</span> <span m="651490">made</span>
  <span m="651760">at</span> <span m="651890">some</span> <span
  m="651960">rate.</span> <span m="652860">Its</span> <span
  m="653050">lifetime</span> <span m="653560">is</span> <span
  m="653670">given</span> <span m="653880">by</span> <span m="653990">1</span>
  <span m="654180">over</span> <span m="654340">delta</span> <span
  m="654600">m.</span> <span m="655290">Now</span> <span m="656840">this</span>
  <span m="657080">thing,</span> <span m="657280">of</span> <span
  m="657380">course,</span> <span m="657610">is</span> <span
  m="657740">again</span> <span m="658350">as</span> <span
  m="658480">always,</span> <span m="658660">the</span> <span
  m="658925">effective</span> <span m="659190">degradation</span> <span
  m="659600">rate.</span> <span m="659800">So</span> <span m="659930">it's
  the</span> <span m="660030">sum</span> <span m="660850">of</span> <span
  m="661840">the</span> <span m="662140">sort</span> <span m="662280">of</span>
  <span m="662360">physical</span> <span m="662660">degradation</span> <span
  m="663150">rate,</span> <span m="663440">plus</span> <span
  m="665050">this</span> <span m="665420">dilution</span> <span m="665870">due
  to</span> <span m="666030">growth.</span></p><p><span m="666570">But</span>
  <span m="667050">in</span> <span m="667190">general,</span> <span
  m="667520">the</span> <span m="667620">true</span> <span
  m="667900">degradation,</span> <span m="669170">the</span> <span
  m="669320">physical</span> <span m="669550">degradation</span> <span
  m="669980">is</span> <span m="670070">much</span> <span
  m="670440">faster</span> <span m="670850">than</span> <span
  m="671030">the</span> <span m="671320">cell</span> <span
  m="671610">division</span> <span m="671920">rate.</span> <span
  m="672980">So</span> <span m="673090">this</span> <span m="673520">is</span>
  <span m="673750">very</span> <span m="674070">close to</span> <span
  m="674400">actually</span> <span m="674660">just</span> <span
  m="675350">the</span> <span m="675610">physical</span> <span
  m="675930">degradation</span> <span m="676320">rate.</span> <span
  m="678140">But</span> <span m="678550">in</span> <span m="678660">any</span>
  <span m="678800">case,</span> <span m="679180">it's</span> <span
  m="679240">just</span> <span m="679420">delta</span> <span
  m="679580">m,</span> <span m="680900">regardless.</span> <span
  m="682640">Are</span> <span m="682730">there</span> <span
  m="682830">any</span> <span m="682950">questions</span> <span
  m="683330">about</span> <span m="683590">why</span> <span
  m="684270">this</span> <span m="684450">is</span> <span m="684630">the</span>
  <span m="684710">way</span> <span m="684800">it</span> <span
  m="684860">is?</span> <span m="686920">Yes?</span></p><p><span
  m="687820">AUDIENCE: Does</span> <span m="688270">it</span> <span
  m="688720">matter</span> <span m="689170">whether it's</span> <span
  m="689465">only</span> <span m="689760">physical?</span> <span
  m="690740">Because</span> <span m="691226">wouldn't</span> <span
  m="691712">it</span> <span m="692198">be the same</span> <span m="692684">if
  it were--</span></p><p><span m="693170">PROFESSOR: It</span> <span
  m="693340">doesn't</span> <span m="693630">matter</span> <span
  m="693900">that</span> <span m="694020">it's</span> <span
  m="694120">only--</span> <span m="694370">exactly.</span> <span
  m="694860">That's what I</span> <span m="695190">was trying to say.</span>
  <span m="695520">So</span> <span m="695930">the</span> <span
  m="696080">way</span> <span m="696210">that this</span> <span
  m="696470">is</span> <span m="696570">written,</span> <span
  m="697550">it</span> <span m="697680">doesn't</span> <span
  m="697910">matter</span> <span m="698230">whether</span> <span
  m="698980">the--</span> <span m="700890">this</span> <span
  m="701100">is</span> <span m="701190">the</span> <span
  m="701290">answer</span> <span m="701540">regardless</span> <span
  m="702420">of</span> <span m="702580">whether</span> <span
  m="702760">the</span> <span m="702850">physical</span> <span
  m="703100">degradation</span> <span m="703410">rate</span> <span
  m="703720">is</span> <span m="703850">much</span> <span
  m="704080">larger</span> <span m="704370">than</span> <span
  m="704590">the</span> <span m="704820">growth</span> <span m="705020">rate
  or</span> <span m="705510">not.</span> <span
  m="706000">Yeah.</span></p><p><span m="711240">All</span> <span
  m="711430">right.</span> <span m="712330">What</span> <span
  m="712570">is</span> <span m="712810">this</span> <span
  m="716850">protein</span> <span m="717330">molecules</span> <span
  m="718160">per</span> <span m="718660">mRNA?</span> <span
  m="720150">How</span> <span m="720310">many</span> <span
  m="720480">protein</span> <span m="720960">molecules</span> <span
  m="721360">are</span> <span m="721410">made</span> <span
  m="721750">from</span> <span m="721930">each</span> <span
  m="722250">mRNA?</span> <span m="724690">Protein</span> <span
  m="728350">produced--</span> <span m="759052">Do</span> <span
  m="759550">you</span> <span m="759660">need</span> <span
  m="759820">more</span> <span m="759940">time?</span> <span
  m="772040">Remember.</span> <span m="772820">This</span> <span
  m="773000">is</span> <span m="773150">again,</span> <span
  m="773280">the</span> <span m="773350">mean</span> <span
  m="774000">number</span> <span m="774320">of</span> <span
  m="776160">proteins</span> <span m="776340">produced</span> <span
  m="776920">from</span> <span m="777030">a</span> <span
  m="777070">single</span> <span m="777410">mRNA</span> <span m="778515">or
  each</span> <span m="778890">mRNA.</span></p><p><span m="782500">Let's</span>
  <span m="782830">go</span> <span m="782930">ahead</span> <span m="783080">and
  vote,</span> <span m="783490">so I</span> <span m="783670">can</span> <span
  m="783770">see</span> <span m="784100">where</span> <span m="784280">we</span>
  <span m="784440">are.</span> <span m="785570">Ready?</span> <span
  m="786330">Three,</span> <span m="787330">two,</span> <span
  m="788110">one.</span> <span m="794630">OK.</span> <span m="794990">So</span>
  <span m="795330">we</span> <span m="795470">have,</span> <span
  m="795820">I'd</span> <span m="796060">say,</span> <span m="799700">so</span>
  <span m="799900">at</span> <span m="800070">least</span> <span
  m="800220">a</span> <span m="800260">majority</span> <span
  m="800730">are</span> <span m="800800">saying</span> <span
  m="801010">it's</span> <span m="801120">going</span> <span
  m="801210">to</span> <span m="801250">be</span> <span m="801960">C</span>
  <span m="802730">over</span> <span m="803300">B</span> <span
  m="803800">Now.</span> <span m="805180">All</span> <span
  m="805310">right.</span> <span m="805460">So this</span> <span
  m="805700">is</span> <span m="805810">interesting.</span> <span m="806510">So
  this</span> <span m="806620">is</span> <span m="806730">saying</span> <span
  m="807700">that</span> <span m="808010">really</span> <span
  m="808190">what's</span> <span m="808320">happening</span> <span
  m="808660">is</span> <span m="808760">that</span> <span
  m="811616">there's</span> <span m="812110">a</span> <span
  m="812170">competition</span> <span m="813860">once</span> <span
  m="814080">you</span> <span m="814190">make</span> <span m="814520">an</span>
  <span m="814610">mRNA</span> <span m="816110">that</span> <span
  m="816460">the</span> <span m="816670">proteins</span> <span
  m="817130">are</span> <span m="817200">going</span> <span m="817300">to</span>
  <span m="817340">be</span> <span m="817480">getting</span> <span
  m="817660">fired</span> <span m="817970">off at</span> <span
  m="818210">some</span> <span m="818420">rate.</span> <span
  m="819230">But</span> <span m="819340">eventually</span> <span
  m="819680">it's</span> <span m="819800">going</span> <span
  m="819890">to</span> <span m="819930">be</span> <span
  m="820030">degraded.</span></p><p><span m="820460">It's a</span> <span
  m="820620">competition</span> <span m="821170">between</span> <span
  m="821360">those</span> <span m="821540">two</span> <span
  m="821700">rates</span> <span m="822305">that</span> <span
  m="822560">determines</span> <span m="823440">basically</span> <span
  m="823690">how</span> <span m="823980">many</span> <span
  m="824250">proteins,</span> <span m="825340">how</span> <span
  m="825510">many</span> <span m="825650">times</span> <span
  m="826170">do</span> <span m="826640">you</span> <span m="827240">fire</span>
  <span m="827600">off</span> <span m="827710">a</span> <span
  m="827790">protein</span> <span m="828090">before</span> <span
  m="828410">you</span> <span m="828500">get</span> <span
  m="828660">degraded.</span> <span m="832930">Any</span> <span
  m="833110">questions</span> <span m="833460">about</span> <span
  m="833630">that</span> <span m="833800">logic?</span></p><p><span
  m="838142">AUDIENCE: Can</span> <span m="838631">you please</span> <span
  m="839120">just repeat that</span> <span m="839609">one more
  time?</span></p><p><span m="840100">PROFESSOR: Sure.</span> <span
  m="840810">Right,</span> <span m="841020">so</span> <span
  m="841370">what</span> <span m="841550">we're</span> <span
  m="841720">assuming</span> <span m="841910">is</span> <span
  m="842030">that</span> <span m="842140">OK,</span> <span m="842560">an</span>
  <span m="842720">mRNA</span> <span m="843250">is</span> <span
  m="843480">produced.</span> <span m="844420">And</span> <span
  m="844570">that's</span> <span m="844750">already</span> <span
  m="844920">happened.</span> <span m="845220">So</span> <span
  m="845300">it</span> <span m="845340">doesn't</span> <span
  m="845600">matter</span> <span m="845950">what</span> <span
  m="846120">Sm</span> <span m="846620">is</span> <span
  m="846810">anymore.</span> <span m="847800">So</span> <span
  m="847860">now</span> <span m="848020">we</span> <span m="848090">have</span>
  <span m="848420">an</span> <span m="848690">mRNA.</span> <span
  m="851670">Eventually</span> <span m="852170">this</span> <span
  m="852310">mRNA</span> <span m="852690">will</span> <span m="852810">be</span>
  <span m="852910">degraded.</span> <span m="854580">But</span> <span
  m="854890">before</span> <span m="855280">that</span> <span
  m="855470">happens,</span> <span m="857000">we</span> <span m="857200">want
  to</span> <span m="857410">know,</span> <span m="857920">basically</span>
  <span m="858210">how</span> <span m="858460">many</span> <span
  m="858710">proteins</span> <span m="859140">do we</span> <span
  m="859240">expect</span> <span m="860190">to</span> <span m="860640">be</span>
  <span m="860740">made.</span></p><p><span m="861710">Now</span> <span
  m="861750">if</span> <span m="862250">Sp</span> <span m="862760">and</span>
  <span m="862880">delta</span> <span m="863110">m</span> <span
  m="863290">are</span> <span m="863330">the</span> <span m="863420">same</span>
  <span m="864490">that</span> <span m="864650">means</span> <span
  m="864820">you</span> <span m="864950">kind</span> <span m="865080">of</span>
  <span m="865140">expect</span> <span m="865450">one</span> <span
  m="865780">protein</span> <span m="866110">to</span> <span
  m="866160">be</span> <span m="866260">made</span> <span m="867120">on</span>
  <span m="867300">average,</span> <span m="867800">before</span> <span
  m="868070">it's</span> <span m="868340">degraded.</span> <span
  m="868800">Or</span> <span m="869510">if</span> <span m="869550">Sp</span>
  <span m="870070">we're</span> <span m="870200">twice</span> <span
  m="870650">delta</span> <span m="870900">m,</span> <span
  m="871030">then</span> <span m="871110">you</span> <span
  m="871380">would</span> <span m="871650">get</span> <span
  m="871890">two</span> <span m="872050">proteins</span> <span
  m="872430">made</span> <span m="873070">before</span> <span
  m="873170">it</span> <span m="873560">was</span> <span
  m="873800">degraded.</span> <span m="874580">Now</span> <span
  m="874720">this</span> <span m="874900">is</span> <span m="875020">a</span>
  <span m="875100">mean</span> <span m="875960">statement.</span> <span
  m="876680">We're</span> <span m="876880">about</span> <span
  m="877160">to</span> <span m="877280">start</span> <span
  m="877580">thinking--</span> <span m="878330">in</span> <span
  m="878630">10</span> <span m="878790">minutes,</span> <span
  m="879000">we'll</span> <span m="879100">think</span> <span
  m="879260">about</span> <span m="879540">this</span> <span
  m="879970">distribution.</span> <span m="881140">And</span> <span
  m="881300">so</span> <span m="881970">we have to</span> <span
  m="882190">be</span> <span m="882280">careful.</span> <span
  m="882560">But</span> <span m="882690">in</span> <span m="882750">terms</span>
  <span m="882940">of</span> <span m="883020">mean</span> <span
  m="883360">behavior,</span> <span m="884260">this</span> <span
  m="885100">thing is</span> <span m="885510">true.</span></p><p><span
  m="886504">AUDIENCE: So is this</span> <span m="887001">different</span> <span
  m="887498">than</span> <span m="887995">it has</span> <span
  m="888492">been</span> <span m="888989">for the</span> <span
  m="889486">number</span> <span m="889983">of</span> <span
  m="890480">proteins</span> <span m="890977">per</span> <span
  m="891474">mRNA</span> <span m="891971">in the cell?</span></p><p><span
  m="893960">PROFESSOR: Is</span> <span m="894120">this</span> <span
  m="894250">different</span> <span m="894530">from</span> <span
  m="894670">the</span> <span m="894770">number</span> <span
  m="895300">of</span> <span m="895510">proteins</span> <span
  m="896500">in</span> <span m="896650">the</span> <span
  m="896720">cell?</span></p><p><span m="897150">AUDIENCE: Number</span> <span
  m="897641">of</span> <span m="898132">proteins</span> <span
  m="898623">per</span> <span m="899114">mRNA</span> <span m="899605">in</span>
  <span m="900096">the</span> <span m="900587">cell.</span> <span
  m="902551">Because</span> <span m="903042">then you</span> <span
  m="903533">will have to</span> <span m="904024">do the protein</span> <span
  m="904515">concentration</span> <span m="905006">over</span> <span
  m="905497">mRNA</span> <span m="905988">concentration.</span></p><p><span
  m="906480">PROFESSOR: OK.</span> <span m="906690">Right.</span> <span
  m="906890">So</span> <span m="906990">this</span> <span m="907140">is</span>
  <span m="907260">not</span> <span m="907640">the</span> <span
  m="907730">same</span> <span m="907990">thing</span> <span
  m="908290">as</span> <span m="908390">asking</span> <span
  m="909472">about</span> <span m="909820">the</span> <span
  m="910770">ratio</span> <span m="912140">of</span> <span m="912470">the</span>
  <span m="912550">number</span> <span m="912790">of</span> <span
  m="912860">proteins.</span> <span m="913430">And</span> <span
  m="914150">we</span> <span m="914260">can</span> <span
  m="914370">calculate</span> <span m="914730">that</span> <span
  m="915980">as</span> <span m="916090">well.</span> <span
  m="916710">Yeah</span> <span m="916870">these</span> <span
  m="917030">are</span> <span m="917080">different.</span> <span
  m="919900">This</span> <span m="920040">is</span> <span m="920100">the</span>
  <span m="920190">number</span> <span m="920550">of</span> <span
  m="920660">protein</span> <span m="921050">molecules</span> <span
  m="921400">produced</span> <span m="921730">from</span> <span
  m="921910">each</span> <span m="922080">mRNA.</span> <span
  m="922895">So</span> <span m="923310">this is</span> <span
  m="923650">just</span> <span m="923750">talking</span> <span
  m="923910">about</span> <span m="924070">production.</span> <span
  m="924340">Because</span> <span m="924550">indeed,</span> <span
  m="924820">the</span> <span m="924880">degradation</span> <span
  m="925380">rates</span> <span m="925740">are</span> <span
  m="925830">going</span> <span m="925920">to</span> <span m="925960">be</span>
  <span m="926060">different.</span> <span m="926510">So</span> <span
  m="926590">then</span> <span m="927610">we</span> <span m="927760">can</span>
  <span m="927900">see</span> <span m="928460">what</span> <span
  m="928570">that</span> <span m="928900">ends up</span> <span
  m="929130">being.</span></p><p><span m="931330">Any</span> <span
  m="931520">other</span> <span m="931720">questions</span> <span
  m="932190">about</span> <span m="933460">why</span> <span
  m="933620">this</span> <span m="933800">one</span> <span m="933940">is</span>
  <span m="934030">what</span> <span m="934150">it</span> <span
  m="934220">is?</span> <span m="938930">How</span> <span
  m="939060">about</span> <span m="939870">the</span> <span
  m="940460">number</span> <span m="941000">of</span> <span
  m="941110">mRNA</span> <span m="941720">produced</span> <span
  m="942290">per</span> <span m="942610">cell</span> <span
  m="942910">cycle?</span> <span m="947500">And</span> <span
  m="948080">for</span> <span m="948250">now</span> <span
  m="950170">we're</span> <span m="950560">going</span> <span m="950950">to
  ignore</span> <span m="951190">factors</span> <span m="951690">of</span> <span
  m="951800">log</span> <span m="952140">two.</span> <span m="996840">Do</span>
  <span m="997030">you</span> <span m="997120">need</span> <span
  m="997250">more</span> <span m="997380">time?</span> <span m="1001800">So
  another</span> <span m="1002010">10</span> <span
  m="1002230">seconds.</span></p><p><span m="1014596">AUDIENCE: Produced</span>
  <span m="1015095">but</span> <span m="1015594">not</span> <span
  m="1016093">degraded?</span></p><p><span m="1019110">PROFESSOR:
  Produced,</span> <span m="1019790">yes.</span> <span m="1020590">We're</span>
  <span m="1020730">just</span> <span m="1021020">talking</span> <span
  m="1021120">about</span> <span m="1021540">production.</span> <span
  m="1025089">Because</span> <span m="1025250">we've</span> <span
  m="1025359">already</span> <span m="1025569">calculated</span> <span
  m="1025910">a</span> <span m="1025950">number</span> <span
  m="1026260">of</span> <span m="1026329">mRNA</span> <span
  m="1028180">in</span> <span m="1028310">the</span> <span
  m="1028380">cell.</span> <span m="1030980">But</span> <span
  m="1031420">now</span> <span m="1031560">we</span> <span m="1031640">want to
  know</span> <span m="1031829">the</span> <span m="1032020">mean</span> <span
  m="1032200">number</span> <span m="1032420">produced.</span> <span
  m="1034670">For</span> <span m="1034810">example,</span> <span
  m="1035190">this</span> <span m="1035329">is</span> <span
  m="1035440">the</span> <span m="1035540">same</span> <span
  m="1036130">as</span> <span m="1036800">the</span> <span
  m="1036910">mean</span> <span m="1037190">number</span> <span
  m="1037490">of</span> <span m="1038160">protein</span> <span
  m="1038550">bursts</span> <span m="1039550">observed</span> <span
  m="1041350">in</span> <span m="1041730">Sunney</span> <span
  m="1042010">Xie's</span> <span m="1042290">paper.</span> <span
  m="1043910">But</span> <span m="1044680">this</span> <span
  m="1044839">is</span> <span m="1044950">just</span> <span
  m="1045150">the</span> <span m="1045180">number</span> <span
  m="1045440">of</span> <span m="1045510">mRNA</span> <span
  m="1045890">produced</span> <span m="1046300">per</span> <span
  m="1046640">cell cycle.</span></p><p><span m="1047440">All right.</span> <span
  m="1047589">Let's</span> <span m="1047770">see</span> <span
  m="1047849">where</span> <span m="1047960">we</span> <span
  m="1048060">are.</span> <span m="1048180">Ready?</span> <span
  m="1048520">Three,</span> <span m="1049190">two,</span> <span
  m="1050080">one.</span> <span m="1051920">All</span> <span
  m="1052080">right.</span> <span m="1052310">So</span> <span
  m="1052360">we've</span> <span m="1052440">got</span> <span
  m="1053432">lots</span> <span m="1053780">of</span> <span
  m="1053840">A's</span> <span m="1054130">over</span> <span
  m="1054280">D's.</span> <span m="1054720">That's</span> <span
  m="1054890">sounds</span> <span m="1055160">nice.</span> <span
  m="1056060">So</span> <span m="1056160">this</span> <span
  m="1056260">is</span> <span m="1056380">going to</span> <span
  m="1056470">be</span> <span m="1056590">some</span> <span
  m="1056990">synthesis</span> <span m="1057520">rate.</span> <span
  m="1058090">But</span> <span m="1058230">now</span> <span
  m="1058390">the</span> <span m="1058470">relevant</span> <span
  m="1058800">thing</span> <span m="1059010">is</span> <span
  m="1059140">this</span> <span m="1060180">delta</span> <span
  m="1060440">p.</span> <span m="1060600">Because</span> <span
  m="1060780">that's</span> <span m="1061370">the</span> <span
  m="1061970">cell</span> <span m="1062600">division</span> <span
  m="1062780">rate.</span> <span m="1063250">So</span> <span
  m="1063740">it's</span> <span m="1064660">barring</span> <span
  m="1065180">issues</span> <span m="1065430">of</span> <span
  m="1065530">log</span> <span m="1065770">two,</span> <span
  m="1066050">it's</span> <span m="1066150">approximately</span> <span
  m="1066810">the</span> <span m="1066910">synthesis</span> <span
  m="1067430">rate</span> <span m="1067630">of</span> <span
  m="1067730">the</span> <span m="1067830">mRNA</span> <span
  m="1068540">divided</span> <span m="1068930">by</span> <span
  m="1069870">delta</span> <span m="1070130">p.</span> <span
  m="1070770">Because</span> <span m="1071285">this</span> <span
  m="1071550">is</span> <span m="1072205">the</span> <span
  m="1072650">growth</span> <span m="1072900">rate</span> <span
  m="1073030">of</span> <span m="1073130">population.</span></p><p><span
  m="1074760">Cell</span> <span m="1075050">generation</span> <span
  m="1075420">time</span> <span m="1075820">is</span> <span
  m="1075950">log</span> <span m="1076260">two</span> <span
  m="1077110">off</span> <span m="1077310">of</span> <span
  m="1077360">that.</span> <span m="1079720">Are</span> <span
  m="1079830">there</span> <span m="1080060">any</span> <span
  m="1080230">questions</span> <span m="1080540">about</span> <span
  m="1080960">that</span> <span m="1081140">statement?</span> <span
  m="1084810">All right,</span> <span m="1085020">so</span> <span
  m="1085080">this</span> <span m="1085210">is</span> <span
  m="1085330">the</span> <span m="1085410">mean</span> <span
  m="1086090">number.</span> <span m="1086870">Now</span> <span
  m="1087500">from</span> <span m="1087630">the</span> <span
  m="1087720">paper,</span> <span m="1088170">we</span> <span
  m="1088320">know</span> <span m="1088640">how</span> <span
  m="1088790">this</span> <span m="1088980">thing</span> <span
  m="1089130">is</span> <span m="1089310">distributed.</span> <span
  m="1096080">We</span> <span m="1096230">should</span> <span
  m="1096640">probably--</span> <span m="1097010">we're</span> <span
  m="1097130">going</span> <span m="1097220">to</span> <span
  m="1097950">use</span> <span m="1098210">a</span> <span
  m="1098270">bunch</span> <span m="1098510">of</span> <span
  m="1098590">distributions</span> <span m="1099270">over</span> <span
  m="1099430">the</span> <span m="1099530">next</span> <span
  m="1100290">couple.</span></p><p><span m="1101840">So</span> <span
  m="1104200">we</span> <span m="1104340">can--</span> <span
  m="1108180">we</span> <span m="1108300">like</span> <span
  m="1108470">exponential</span> <span m="1109040">distributions.</span> <span
  m="1110540">We</span> <span m="1110780">like</span> <span
  m="1112870">geometric</span> <span m="1113420">distributions.</span> <span
  m="1116465">We</span> <span m="1116920">like</span> <span
  m="1117250">Poisson.</span> <span m="1120390">We</span> <span
  m="1120828">like</span> <span m="1121270">Gaussian.</span> <span
  m="1124900">And we</span> <span m="1125110">like</span> <span
  m="1125870">gamma.</span> <span m="1132070">These</span> <span
  m="1132260">are</span> <span m="1132310">various</span> <span
  m="1132700">probability</span> <span m="1133190">distributions.</span> <span
  m="1133505">The</span> <span m="1133820">question</span> <span
  m="1134160">is,</span> <span m="1134310">how</span> <span
  m="1134540">is</span> <span m="1134710">it</span> <span
  m="1134860">that</span> <span m="1135240">now,</span> <span
  m="1135460">not</span> <span m="1135610">the</span> <span
  m="1135680">mean,</span> <span m="1135930">but</span> <span m="1136030">how
  is</span> <span m="1136220">the</span> <span m="1136350">number</span> <span
  m="1136730">of</span> <span m="1136770">mRNA</span> <span
  m="1137160">produced</span> <span m="1137470">per</span> <span
  m="1137600">cell</span> <span m="1137830">cycle</span> <span
  m="1138170">distributed.</span> <span m="1140400">Ready?</span> <span
  m="1140960">Three,</span> <span m="1141740">two,</span> <span
  m="1142390">one.</span></p><p><span m="1147580">All right.</span> <span
  m="1148620">We've</span> <span m="1148860">got</span> <span
  m="1150780">some--</span> <span m="1151600">this</span> <span
  m="1151960">side</span> <span m="1152180">of</span> <span
  m="1152220">the</span> <span m="1152420">rooms</span> <span
  m="1152770">a</span> <span m="1152830">little</span> <span
  m="1153350">bit</span> <span m="1155290">slower,</span> <span
  m="1155990">maybe.</span> <span m="1156530">But</span> <span
  m="1156860">that's</span> <span m="1157390">OK.</span> <span
  m="1158710">So</span> <span m="1158820">maybe</span> <span
  m="1159030">some</span> <span m="1159190">people</span> <span
  m="1159410">are</span> <span m="1159510">not</span> <span
  m="1159920">confident</span> <span m="1160440">of</span> <span
  m="1160540">this</span> <span m="1160660">statement.</span> <span
  m="1162500">OK.</span> <span m="1162870">So</span> <span
  m="1163130">this</span> <span m="1163270">one</span> <span
  m="1163450">ends</span> <span m="1163620">up</span> <span
  m="1163740">being</span> <span m="1163940">Poisson.</span> <span
  m="1167000">So</span> <span m="1167400">this</span> <span
  m="1167640">is</span> <span m="1168205">indeed</span> <span
  m="1168520">how</span> <span m="1168940">the</span> <span
  m="1169050">number</span> <span m="1169460">of--</span> <span
  m="1170500">this</span> <span m="1170630">is</span> <span
  m="1170780">number</span> <span m="1171360">mRNA</span> <span
  m="1174030">per</span> <span m="1174290">cycle.</span></p><p><span
  m="1176100">Now</span> <span m="1176600">this</span> <span
  m="1176820">is--</span> <span m="1177010">so</span> <span
  m="1177330">Poisson,</span> <span m="1177790">in</span> <span
  m="1177830">general,</span> <span m="1178190">that's</span> <span
  m="1178330">what</span> <span m="1178440">you</span> <span
  m="1178510">get</span> <span m="1178760">if there's</span> <span
  m="1178890">some</span> <span m="1179200">probability</span> <span
  m="1179760">per</span> <span m="1180050">unit</span> <span
  m="1180400">time</span> <span m="1181080">that</span> <span
  m="1181220">something's</span> <span m="1181510">going</span> <span
  m="1181650">to</span> <span m="1181690">happen,</span> <span
  m="1182030">and</span> <span m="1182100">you</span> <span
  m="1182190">want</span> <span m="1182250">to know</span> <span
  m="1182360">how</span> <span m="1182550">many</span> <span
  m="1182760">of</span> <span m="1182820">them</span> <span
  m="1182940">happen</span> <span m="1183240">in</span> <span
  m="1183310">some</span> <span m="1183690">finite</span> <span
  m="1184120">time</span> <span m="1184330">period.</span> <span
  m="1185240">That's</span> <span m="1185380">basically the</span> <span
  m="1185790">definition</span> <span m="1186320">of</span> <span
  m="1186400">a</span> <span m="1186500">Poisson.</span> <span
  m="1189700">And</span> <span m="1189830">this</span> <span
  m="1190250">is,</span> <span m="1191120">if</span> <span
  m="1191300">you</span> <span m="1191480">recall,</span> <span
  m="1192290">this</span> <span m="1192440">is</span> <span
  m="1192570">what</span> <span m="1193050">we</span> <span
  m="1193150">talked</span> <span m="1193390">about</span> <span
  m="1194200">on</span> <span m="1194330">Tuesday.</span> <span
  m="1194610">The</span> <span m="1194710">probability</span> <span
  m="1195290">observe</span> <span m="1195590">n,</span> <span
  m="1196290">it's</span> <span m="1196530">given</span> <span
  m="1196900">by</span> <span m="1197380">this</span> <span
  m="1197830">mean</span> <span m="1198240">number.</span> <span
  m="1200200">So</span> <span m="1200340">if</span> <span
  m="1200470">lambda</span> <span m="1200800">is</span> <span
  m="1200880">the</span> <span m="1200960">mean,</span> <span
  m="1201650">then</span> <span m="1201730">we</span> <span
  m="1201820">get</span> <span m="1201990">lambda</span> <span
  m="1202410">to</span> <span m="1202480">the</span> <span m="1202590">n,</span>
  <span m="1203000">over</span> <span m="1203210">n</span> <span
  m="1203430">factorial,</span> <span m="1204620">e</span> <span
  m="1204880">to</span> <span m="1205000">the</span> <span
  m="1205060">minus</span> <span m="1205440">lambda.</span></p><p><span
  m="1207020">If</span> <span m="1207170">you</span> <span m="1209690">go</span>
  <span m="1209830">ahead</span> <span m="1209910">and</span> <span
  m="1209990">calculate</span> <span m="1210310">the</span> <span
  m="1210330">mean</span> <span m="1210540">of</span> <span
  m="1210580">this,</span> <span m="1210840">you</span> <span
  m="1211030">indeed</span> <span m="1211160">get</span> <span
  m="1211840">lambda.</span> <span m="1212170">So</span> <span
  m="1214650">lambda</span> <span m="1215270">is</span> <span m="1215460">equal
  to the</span> <span m="1215680">mean,</span> <span m="1217310">which</span>
  <span m="1217550">in</span> <span m="1217600">this</span> <span
  m="1217710">case</span> <span m="1217890">was around,</span> <span
  m="1219800">well</span> <span m="1220070">in</span> <span
  m="1220180">the</span> <span m="1220240">case</span> <span
  m="1220500">of</span> <span m="1220810">Sunney's</span> <span
  m="1221100">paper,</span> <span m="1221530">does</span> <span
  m="1221680">anybody</span> <span m="1221920">remember</span> <span
  m="1222210">what</span> <span m="1222410">that</span> <span
  m="1222960">roughly</span> <span m="1223260">was?</span> <span m="1225900">It
  was</span> <span m="1226030">around</span> <span
  m="1226300">one.</span></p><p><span m="1235490">Now</span> <span
  m="1236780">what</span> <span m="1236950">about</span> <span
  m="1237080">this</span> <span m="1237210">other</span> <span
  m="1237390">one?</span> <span m="1237770">So</span> <span
  m="1238190">we</span> <span m="1238320">also</span> <span
  m="1238540">have</span> <span m="1238670">another</span> <span
  m="1239060">mRNA</span> <span m="1239580">problem,</span> <span
  m="1240600">which</span> <span m="1240700">is</span> <span
  m="1240940">that</span> <span m="1241370">we</span> <span
  m="1241510">calculated</span> <span m="1241780">the</span> <span
  m="1241850">mean</span> <span m="1242180">number</span> <span
  m="1242460">of</span> <span m="1242500">mRNA</span> <span
  m="1242790">per</span> <span m="1242910">cell.</span> <span
  m="1243900">If</span> <span m="1244020">you</span> <span
  m="1244140">look</span> <span m="1244320">at</span> <span m="1244360">a</span>
  <span m="1244420">cell, the</span> <span m="1244860">mean number</span> <span
  m="1245370">is</span> <span m="1245550">this.</span> <span m="1246790">But
  what's</span> <span m="1247030">the</span> <span
  m="1247160">probability</span> <span m="1247730">distribution</span> <span
  m="1248970">of</span> <span m="1249130">the</span> <span
  m="1249220">number</span> <span m="1249570">of</span> <span
  m="1249630">mRNA</span> <span m="1250430">per</span> <span
  m="1250630">cell?</span> <span m="1251400">So</span> <span
  m="1251540">we</span> <span m="1251800">probably--</span> <span
  m="1253480">I'm</span> <span m="1253690">trying</span> <span
  m="1253770">think</span> <span m="1253970">it--</span> <span
  m="1256510">you</span> <span m="1256660">probably</span> <span
  m="1256940">don't</span> <span m="1257280">yet know</span> <span
  m="1257460">this</span> <span m="1257640">answer.</span></p><p><span
  m="1258980">This</span> <span m="1259210">ends</span> <span
  m="1259400">up</span> <span m="1259610">also</span> <span
  m="1259960">being</span> <span m="1260210">Poisson.</span> <span
  m="1260720">We're</span> <span m="1260850">going</span> <span
  m="1260940">to</span> <span m="1261010">calculate</span> <span
  m="1261540">this</span> <span m="1261980">in</span> <span m="1262360">a</span>
  <span m="1262410">bit.</span> <span m="1262960">But</span> <span
  m="1263060">this</span> <span m="1263190">is</span> <span
  m="1263360">very</span> <span m="1263670">confusing</span> <span
  m="1264230">somehow.</span> <span m="1265260">That</span> <span
  m="1265520">both</span> <span m="1265860">this</span> <span
  m="1266200">thing</span> <span m="1266520">and</span> <span
  m="1266760">this</span> <span m="1266910">thing,</span> <span
  m="1267110">are</span> <span m="1267200">Poisson.</span> <span
  m="1268070">But</span> <span m="1268160">they're</span> <span
  m="1268260">not</span> <span m="1268450">the</span> <span
  m="1268520">same</span> <span m="1268730">Poisson,</span> <span m="1269190">in
  the</span> <span m="1269370">sense</span> <span m="1269500">they</span> <span
  m="1269570">have</span> <span m="1269690">different</span> <span
  m="1269960">lambdas.</span> <span m="1271410">Which</span> <span
  m="1271840">one</span> <span m="1273230">is</span> <span
  m="1273340">going</span> <span m="1273430">to</span> <span
  m="1273470">be</span> <span m="1273540">larger?</span> <span
  m="1274800">This</span> <span m="1274940">one or</span> <span m="1275060">this
  one?</span> <span m="1278090">The</span> <span m="1278190">bottom</span> <span
  m="1278380">one,</span> <span m="1278540">right?</span> <span
  m="1279030">And</span> <span m="1279140">that's</span> <span
  m="1279320">because</span> <span m="1280330">delta</span> <span
  m="1280690">m</span> <span m="1280990">is</span> <span m="1281080">much</span>
  <span m="1281270">larger</span> <span m="1281580">than</span> <span
  m="1281720">delta</span> <span m="1281970">p,</span> <span
  m="1282260">typically.</span></p><p><span m="1283910">So</span> <span
  m="1284050">indeed,</span> <span m="1284590">if</span> <span
  m="1284680">you</span> <span m="1284770">ask,</span> <span
  m="1285280">in</span> <span m="1285500">Sunney's</span> <span
  m="1285790">paper,</span> <span m="1286040">for</span> <span
  m="1286120">example,</span> <span m="1287800">there</span> <span
  m="1287850">was</span> <span m="1288740">just</span> <span
  m="1288910">over</span> <span m="1289090">one</span> <span
  m="1289630">mRNA</span> <span m="1290160">produced</span> <span
  m="1290490">per</span> <span m="1290600">cell</span> <span
  m="1290790">cycle.</span> <span m="1291460">But</span> <span
  m="1291620">the</span> <span m="1292000">mean</span> <span
  m="1292300">number</span> <span m="1292520">of</span> <span
  m="1292590">mRNA</span> <span m="1292860">might</span> <span
  m="1293270">have</span> <span m="1293550">been</span> <span
  m="1294710">1/30th</span> <span m="1295930">of</span> <span
  m="1296060">that.</span> <span m="1296420">Because</span> <span
  m="1296690">the</span> <span m="1296770">degradation</span> <span
  m="1297200">rate</span> <span m="1297340">was</span> <span
  m="1297430">just</span> <span m="1297600">1</span> <span
  m="1297770">and</span> <span m="1297930">1/2</span> <span
  m="1298100">minutes.</span> <span m="1299910">What</span> <span
  m="1300090">that's</span> <span m="1300340">saying</span> <span
  m="1300580">is</span> <span m="1301920">that</span> <span
  m="1302580">in</span> <span m="1302680">a</span> <span
  m="1302760">typical</span> <span m="1303130">situation</span> <span
  m="1303520">you</span> <span m="1303610">would</span> <span
  m="1303740">not</span> <span m="1304030">see an</span> <span
  m="1304250">mRNA</span> <span m="1304570">in a</span> <span
  m="1304760">cell</span> <span m="1307240">in</span> <span
  m="1307380">that</span> <span m="1307530">condition.</span></p><p><span
  m="1311050">We're</span> <span m="1311150">going</span> <span
  m="1311230">to</span> <span m="1311290">calculate</span> <span
  m="1311760">this</span> <span m="1312110">in</span> <span m="1312220">a</span>
  <span m="1312250">moment.</span> <span m="1312550">So</span> <span
  m="1312610">don't</span> <span m="1312800">worry</span> <span
  m="1313070">if</span> <span m="1313250">you</span> <span
  m="1313320">don't</span> <span m="1313470">see</span> <span
  m="1313610">why</span> <span m="1313750">it's a</span> <span
  m="1313840">Poisson.</span> <span m="1315810">But</span> <span
  m="1316110">don't</span> <span m="1316340">get</span> <span
  m="1316480">confused.</span> <span m="1316870">There</span> <span
  m="1317090">are</span> <span m="1317160">two</span> <span
  m="1317370">different</span> <span m="1317630">distributions</span> <span
  m="1318400">that</span> <span m="1318670">arise</span> <span
  m="1319160">from</span> <span m="1319420">the</span> <span
  m="1319530">mRNA</span> <span m="1320780">in</span> <span
  m="1320920">the</span> <span m="1321010">cell</span> <span m="1321380">or in
  the</span> <span m="1321590">cell</span> <span m="1321720">cycle.</span> <span
  m="1321980">And</span> <span m="1322240">they're</span> <span
  m="1322280">different</span> <span m="1322730">Poissons.</span> <span
  m="1326190">And</span> <span m="1326660">I</span> <span
  m="1326760">think</span> <span m="1326920">that--</span> <span
  m="1327150">I</span> <span m="1327400">mean</span> <span m="1327740">I'm
  sure</span> <span m="1327860">that in some</span> <span
  m="1328020">deep</span> <span m="1328600">sense</span> <span
  m="1328980">there's</span> <span m="1329140">a</span> <span
  m="1329200">reason</span> <span m="1329440">that they're</span> <span
  m="1329510">the</span> <span m="1329650">same.</span> <span
  m="1329850">But</span> <span m="1331520">it's</span> <span
  m="1332200">somehow</span> <span m="1332530">not</span> <span
  m="1332910">immediately</span> <span m="1333330">obvious.</span></p><p><span
  m="1338790">So</span> <span m="1338910">there</span> <span
  m="1338980">was</span> <span m="1339070">another</span> <span
  m="1339450">one</span> <span m="1339680">that</span> <span
  m="1339810">we</span> <span m="1340010">might</span> <span m="1340280">have
  wanted</span> <span m="1340460">to</span> <span m="1340610">do,</span> <span
  m="1340830">which</span> <span m="1340990">is</span> <span
  m="1345280">the</span> <span m="1345390">mean</span> <span
  m="1345550">number</span> <span m="1345740">of</span> <span
  m="1345830">proteins</span> <span m="1346560">in</span> <span
  m="1346650">each</span> <span m="1346800">cell.</span> <span
  m="1362820">Now</span> <span m="1363300">this</span> <span
  m="1363580">one</span> <span m="1363760">is</span> <span m="1364090">a</span>
  <span m="1364150">bit</span> <span m="1364320">harder.</span> <span
  m="1365740">And</span> <span m="1365930">this</span> <span
  m="1366090">one</span> <span m="1366400">is</span> <span
  m="1366550">going</span> <span m="1366680">to</span> <span
  m="1367000">take</span> <span m="1367240">full</span> <span
  m="1367640">advantage</span> <span m="1368730">of</span> <span
  m="1368960">the</span> <span m="1369040">cards</span> <span
  m="1369490">that</span> <span m="1369590">you</span> <span
  m="1369690">have</span> <span m="1369760">in</span> <span
  m="1369840">front</span> <span m="1370030">of</span> <span
  m="1370090">you.</span> <span m="1370590">So</span> <span
  m="1371790">be</span> <span m="1371950">prepared.</span> <span
  m="1372810">I'm</span> <span m="1372950">going</span> <span
  m="1373030">to</span> <span m="1373070">give</span> <span
  m="1373190">you</span> <span m="1373270">30</span> <span
  m="1373500">seconds.</span> <span m="1373800">Because</span> <span
  m="1373880">this</span> <span m="1374030">one</span> <span
  m="1374890">you</span> <span m="1375040">might--</span> <span
  m="1376320">well</span> <span m="1376480">you</span> <span
  m="1376570">might</span> <span m="1376750">need a</span> <span
  m="1377160">little bit</span> <span m="1377290">more time.</span></p><p><span
  m="1413846">AUDIENCE: This is</span> <span
  m="1414370">hard.</span></p><p><span m="1419050">PROFESSOR: Yeah.</span> <span
  m="1419385">Although</span> <span m="1419720">I</span> <span
  m="1419790">think</span> <span m="1419940">that</span> <span
  m="1420050">it's</span> <span m="1420520">useful</span> <span
  m="1420980">to</span> <span m="1421120">see</span> <span
  m="1421440">that</span> <span m="1422500">it can</span> <span
  m="1422660">be</span> <span m="1422750">a</span> <span m="1422810">bit</span>
  <span m="1422950">tricky.</span> <span m="1423230">Because</span> <span
  m="1423850">this</span> <span m="1424060">really</span> <span
  m="1424320">is</span> <span m="1424530">the</span> <span
  m="1424660">simplest</span> <span m="1425200">possible</span> <span
  m="1425520">model.</span> <span m="1426120">We're</span> <span
  m="1426220">going</span> <span m="1426310">to</span> <span
  m="1426410">talk</span> <span m="1426620">about</span> <span
  m="1426810">some</span> <span m="1427000">models</span> <span
  m="1427440">that</span> <span m="1429370">get</span> <span
  m="1429510">to</span> <span m="1429560">be</span> <span
  m="1429660">horribly</span> <span m="1430070">complicated.</span> <span
  m="1430940">And</span> <span m="1431130">so</span> <span
  m="1431220">it's</span> <span m="1431340">useful</span> <span m="1431660">to
  just</span> <span m="1431840">make</span> <span m="1432010">sure</span> <span
  m="1432220">you</span> <span m="1432490">can</span> <span
  m="1432630">nail</span> <span m="1432820">down</span> <span
  m="1433000">the</span> <span m="1433060">intuition</span> <span
  m="1433640">on</span> <span m="1433760">this</span> <span
  m="1433910">model.</span></p><p><span m="1450610">All right.</span> <span
  m="1451150">Do you</span> <span m="1451270">need</span> <span
  m="1451430">more</span> <span m="1451560">time?</span> <span
  m="1451830">It's</span> <span m="1451940">OK</span> <span
  m="1452380">if</span> <span m="1452940">this</span> <span
  m="1453260">is</span> <span m="1453530">escaping</span> <span
  m="1454050">you</span> <span m="1454210">at</span> <span
  m="1454290">this</span> <span m="1454420">moment.</span> <span m="1455446">Why
  don't</span> <span m="1455920">we</span> <span m="1455990">go</span> <span
  m="1456060">and</span> <span m="1456170">see</span> <span
  m="1456310">where</span> <span m="1456480">we</span> <span
  m="1456580">are?</span> <span m="1456720">Ready?</span> <span
  m="1457350">Three,</span> <span m="1458090">two,</span> <span
  m="1458660">one.</span> <span m="1461640">All</span> <span
  m="1461710">right.</span> <span m="1463520">So</span> <span
  m="1463780">you</span> <span m="1463890">know</span> <span
  m="1464410">all</span> <span m="1464760">the</span> <span
  m="1464860">naysayers</span> <span m="1465650">on</span> <span
  m="1465730">the</span> <span m="1465820">cards,</span> <span
  m="1466410">now</span> <span m="1466530">that you've</span> <span
  m="1466700">done</span> <span m="1466930">this,</span> <span
  m="1467210">you</span> <span m="1467540">feel</span> <span
  m="1467790">like</span> <span m="1468030">it's</span> <span
  m="1468680">an</span> <span m="1468770">amazing</span> <span
  m="1469150">system.</span></p><p><span m="1469540">So it's</span> <span
  m="1469800">AC</span> <span m="1470270">over</span> <span
  m="1470400">DB.</span> <span m="1471200">So</span> <span
  m="1471340">the</span> <span m="1471440">two,</span> <span
  m="1472240">the</span> <span m="1472410">product</span> <span
  m="1472700">of</span> <span m="1472750">the</span> <span
  m="1472810">synthesis</span> <span m="1473160">rates</span> <span
  m="1473540">divided</span> <span m="1473900">by</span> <span
  m="1473990">the</span> <span m="1474080">product</span> <span
  m="1474420">of</span> <span m="1474540">degradation</span> <span
  m="1474940">rates.</span> <span m="1476060">So</span> <span
  m="1476250">what</span> <span m="1476350">we</span> <span
  m="1476440">have</span> <span m="1476640">is</span> <span
  m="1476990">the</span> <span m="1477290">synthesis</span> <span
  m="1477800">rate</span> <span m="1478040">for</span> <span
  m="1478110">the</span> <span m="1478370">mRNA</span> <span
  m="1478510">divided</span> <span m="1478820">by</span> <span
  m="1478960">the</span> <span m="1479130">degradation</span> <span
  m="1479395">rate</span> <span m="1479660">for</span> <span
  m="1479780">the</span> <span m="1480020">mRNA.</span> <span
  m="1481000">Synthesis</span> <span m="1481270">rate</span> <span
  m="1481490">for</span> <span m="1481560">the</span> <span
  m="1481650">proteins</span> <span m="1482260">divided</span> <span
  m="1482900">by the</span> <span m="1483110">degradation</span> <span
  m="1483240">rate</span> <span m="1483666">for the</span> <span
  m="1484092">proteins.</span></p><p><span m="1485800">Can</span> <span
  m="1485940">somebody</span> <span m="1486440">give</span> <span
  m="1486610">us</span> <span m="1486720">a</span> <span
  m="1487360">verbal</span> <span m="1487740">explanation</span> <span
  m="1488210">for</span> <span m="1488310">why</span> <span
  m="1488470">this</span> <span m="1488600">might</span> <span m="1488740">have
  been,</span> <span m="1490100">or</span> <span m="1490260">why</span> <span
  m="1490360">this</span> <span m="1490610">is?</span> <span
  m="1492014">Yes?</span></p><p><span m="1494002">AUDIENCE: It's</span> <span
  m="1494499">the</span> <span m="1494996">same</span> <span
  m="1495493">reasoning</span> <span m="1495990">as</span> <span
  m="1496487">the</span> <span m="1496984">number</span> <span
  m="1497481">of</span> <span m="1497978">mRNA</span> <span m="1498475">per
  cell.</span> <span m="1498972">But</span> <span m="1499469">instead of</span>
  <span m="1499966">just a</span> <span m="1500463">basel--</span> <span
  m="1501457">like</span> <span m="1501954">a</span> <span
  m="1502948">synthesis</span> <span m="1503445">rate</span> <span
  m="1504439">doesn't</span> <span m="1504936">depend</span> <span
  m="1505433">on the</span> <span m="1505930">concentration.</span> <span
  m="1506427">You're</span> <span m="1506924">just multiplying</span> <span
  m="1507421">the</span> <span m="1507918">synthesis</span> <span
  m="1508415">rate</span> <span m="1508940">by the</span> <span
  m="1509440">number</span> <span m="1509940">of</span> <span
  m="1510346">mRNA.</span></p><p><span m="1511160">PROFESSOR: Yeah,</span> <span
  m="1511530">that's</span> <span m="1511770">great.</span> <span
  m="1512250">OK.</span> <span m="1513160">So</span> <span m="1513270">what
  you're</span> <span m="1513440">saying</span> <span m="1513650">is</span>
  <span m="1513710">that</span> <span m="1514260">this</span> <span
  m="1514540">thing</span> <span m="1514730">here</span> <span
  m="1515210">was</span> <span m="1516500">indeed,</span> <span
  m="1517220">we</span> <span m="1517250">calculate</span> <span
  m="1517840">that</span> <span m="1518380">was</span> <span
  m="1518460">the</span> <span m="1518550">mean</span> <span
  m="1518830">number</span> <span m="1519240">of</span> <span
  m="1519320">mRNA</span> <span m="1519640">in the cell.</span> <span
  m="1520480">If you</span> <span m="1520630">just</span> <span
  m="1520780">start</span> <span m="1521030">with</span> <span
  m="1521100">something,</span> <span m="1521700">and</span> <span
  m="1521800">you</span> <span m="1521900">have</span> <span
  m="1522000">a</span> <span m="1522130">production and</span> <span
  m="1522610">degradation</span> <span m="1522865">rate.</span> <span
  m="1523120">OK.</span> <span m="1523320">Well</span> <span
  m="1523460">that</span> <span m="1523590">means</span> <span
  m="1523760">that</span> <span m="1523860">if</span> <span
  m="1523930">you</span> <span m="1524050">had</span> <span
  m="1524360">one</span> <span m="1524640">mRNA,</span> <span
  m="1525870">then</span> <span m="1526010">indeed</span> <span
  m="1526310">that's</span> <span m="1526510">what</span> <span
  m="1526660">the</span> <span m="1526940">concentration</span> <span
  m="1527280">would</span> <span m="1527650">be,</span> <span
  m="1527810">is</span> <span m="1527970">this</span> <span
  m="1528180">Sp</span> <span m="1528610">divided</span> <span
  m="1528980">by</span> <span m="1529120">delta p.</span></p><p><span
  m="1530100">But</span> <span m="1530230">now</span> <span m="1530420">we--
  </span> <span m="1530880">well</span> <span m="1531100">we</span> <span
  m="1531330">multiply</span> <span m="1532000">that</span> <span
  m="1532490">by</span> <span m="1532620">the</span> <span
  m="1532750">number</span> <span m="1533070">of</span> <span
  m="1533120">mRNA,</span> <span m="1533440">and</span> <span
  m="1533660">then</span> <span m="1533840">we</span> <span
  m="1534070">are</span> <span m="1534210">set.</span> <span
  m="1540500">All</span> <span m="1540550">right.</span> <span
  m="1543000">Now</span> <span m="1548050">another</span> <span
  m="1548340">question.</span> <span m="1550010">We</span> <span
  m="1550270">have</span> <span m="1550410">a</span> <span
  m="1550460">distribution,</span> <span m="1551100">or</span> <span
  m="1551290">a</span> <span m="1551390">mean</span> <span
  m="1552190">protein--</span> <span m="1553130">wait</span> <span
  m="1553390">sorry,</span> <span m="1556010">mean</span> <span
  m="1556260">number.</span> <span m="1558350">We</span> <span m="1558420">have
  the</span> <span m="1558530">mean</span> <span m="1558790">number</span> <span
  m="1559010">of</span> <span m="1559140">protein</span> <span
  m="1559690">produced</span> <span m="1560190">from</span> <span
  m="1560380">each</span> <span m="1560710">mRNA,</span> <span
  m="1562810">is</span> <span m="1563240">something.</span></p><p><span
  m="1564730">And</span> <span m="1564990">the</span> <span
  m="1565090">question</span> <span m="1565380">is,</span> <span m="1565800">is
  this</span> <span m="1566200">the</span> <span m="1566380">most</span> <span
  m="1566830">likely</span> <span m="1567660">number</span> <span
  m="1568060">of</span> <span m="1568190">proteins</span> <span
  m="1568720">to</span> <span m="1568820">observe.</span> <span
  m="1570420">Is</span> <span m="1570610">the</span> <span
  m="1571070">distribution</span> <span m="1572280">here,</span> <span
  m="1572580">now</span> <span m="1573020">this</span> <span
  m="1573210">is</span> <span m="1573270">a</span> <span
  m="1573330">mean,</span> <span m="1574370">but</span> <span
  m="1574580">now</span> <span m="1574800">we</span> <span
  m="1574880">want</span> <span m="1575120">to start</span> <span
  m="1575230">thinking</span> <span m="1575570">about the</span> <span
  m="1575830">probabilistic</span> <span m="1576720">stochastic</span> <span
  m="1577240">elements.</span> <span m="1577960">Is</span> <span
  m="1578130">this</span> <span m="1578360">the</span> <span
  m="1578440">most</span> <span m="1578710">likely,</span> <span
  m="1579170">is</span> <span m="1579310">it</span> <span
  m="1579660">like</span> <span m="1579900">the</span> <span
  m="1579960">number</span> <span m="1580180">of</span> <span
  m="1580250">proteins</span> <span m="1580590">observed</span> <span
  m="1580940">from</span> <span m="1581140">an</span> <span
  m="1581490">mRNA?</span></p><p><span m="1585030">The</span> <span
  m="1585130">question</span> <span m="1585400">is,</span> <span m="1586740">is
  this</span> <span m="1586830">most</span> <span m="1587360">likely.</span>
  <span m="1589240">By</span> <span m="1589420">which</span> <span
  m="1589580">I</span> <span m="1589630">mean</span> <span m="1590240">is</span>
  <span m="1590480">the</span> <span m="1590590">probability</span> <span
  m="1590950">distribution</span> <span m="1591380">peaked</span> <span
  m="1591770">here.</span> <span m="1593480">So</span> <span
  m="1593640">we're</span> <span m="1593710">going</span> <span
  m="1593790">to</span> <span m="1593830">do</span> <span m="1593930">an</span>
  <span m="1594070">A</span> <span m="1594440">as a yes,</span> <span
  m="1595580">and</span> <span m="1595830">B</span> <span m="1596250">is
  a</span> <span m="1596710">no.</span> <span m="1602390">Does</span> <span
  m="1602610">everybody</span> <span m="1602840">understand</span> <span
  m="1603170">the</span> <span m="1603230">question</span> <span
  m="1603560">I'm</span> <span m="1603650">trying</span> <span
  m="1603820">to</span> <span m="1603860">ask?</span> <span m="1605520">So
  an</span> <span m="1605680">mRNA</span> <span m="1606750">is</span> <span
  m="1606940">here.</span> <span m="1607920">There's</span> <span
  m="1608130">going</span> <span m="1608250">to</span> <span
  m="1608300">be</span> <span m="1608430">some</span> <span
  m="1608600">proteins</span> <span m="1609060">made</span> <span
  m="1609250">from it.</span> <span m="1609570">This</span> <span
  m="1609720">is</span> <span m="1609850">the</span> <span
  m="1609970">mean.</span> <span m="1611040">What I</span> <span
  m="1611170">want</span> <span m="1611310">to</span> <span
  m="1611350">know</span> <span m="1611570">is,</span> <span
  m="1612960">is</span> <span m="1613080">that</span> <span
  m="1613420">we</span> <span m="1613530">should</span> <span
  m="1613780">somehow</span> <span m="1613940">expect?</span> <span
  m="1614370">In a</span> <span m="1614440">sense,</span> <span
  m="1615060">is</span> <span m="1615170">the</span> <span
  m="1615260">distribution</span> <span m="1615680">peaked,</span> <span
  m="1615975">the</span> <span m="1616270">probability</span> <span
  m="1616540">distribution</span> <span m="1616930">peaked</span> <span
  m="1617220">around</span> <span m="1617550">this</span> <span
  m="1617780">value?</span></p><p><span m="1620630">And</span> <span
  m="1620820">C</span> <span m="1621260">is--</span> <span m="1623320">do
  I</span> <span m="1623440">want</span> <span m="1623580">to</span> <span
  m="1623620">do</span> <span m="1623700">a</span> <span
  m="1623770">depends?</span> <span m="1624410">Well</span> <span
  m="1624830">you</span> <span m="1624950">can</span> <span
  m="1625080">always</span> <span m="1625660">argue</span> <span
  m="1626340">after.</span> <span m="1628321">Do</span> <span
  m="1628700">you</span> <span m="1628820">need</span> <span
  m="1628950">more</span> <span m="1629060">time?</span></p><p><span
  m="1631750">AUDIENCE: Is</span> <span m="1632218">this,</span> <span
  m="1632686">you're</span> <span m="1633154">saying,</span> <span
  m="1633622">is this</span> <span m="1634090">the most</span> <span
  m="1634558">likely</span> <span m="1635026">number</span> <span
  m="1635494">of</span> <span m="1635962">proteins?</span></p><p><span
  m="1636440">PROFESSOR: Yeah.</span> <span m="1636800">What</span> <span
  m="1636910">I'm</span> <span m="1637000">wondering</span> <span
  m="1638661">is</span> <span m="1639130">the</span> <span
  m="1639210">mode</span> <span m="1641230">there?</span></p><p><span
  m="1641957">AUDIENCE: Right.</span> <span m="1642444">But</span> <span
  m="1642931">only for</span> <span m="1643420">this</span> <span
  m="1643810">quantity?</span></p><p><span m="1644560">PROFESSOR: Only</span>
  <span m="1644860">yeah.</span> <span m="1646360">So</span> <span
  m="1646480">now</span> <span m="1646700">we're</span> <span
  m="1646920">not</span> <span m="1647040">doing</span> <span
  m="1647230">means</span> <span m="1647600">anymore.</span> <span
  m="1648200">We want</span> <span m="1648400">to</span> <span
  m="1648630">know</span> <span m="1648770">if the</span> <span
  m="1648860">probability</span> <span m="1649210">distribution</span> <span
  m="1649620">of</span> <span m="1649670">the</span> <span
  m="1649760">protein</span> <span m="1650080">produced</span> <span
  m="1650380">from</span> <span m="1650470">each</span> <span
  m="1650610">mRNA</span> <span m="1651980">is</span> <span
  m="1652160">the</span> <span m="1652250">mode</span> <span
  m="1652680">around</span> <span m="1653020">this.</span> <span
  m="1653950">Ready?</span> <span m="1654960">Three,</span> <span
  m="1655780">two,</span> <span m="1656700">one.</span> <span
  m="1658070">All</span> <span m="1658120">right.</span> <span
  m="1658310">We</span> <span m="1658410">got</span> <span m="1658590">a</span>
  <span m="1658660">lot</span> <span m="1659180">of</span> <span
  m="1659230">no's,</span> <span m="1659590">but</span> <span
  m="1659790">some</span> <span m="1660080">yeses.</span></p><p><span
  m="1661270">So</span> <span m="1661510">this</span> <span
  m="1661690">is</span> <span m="1661820">actually</span> <span
  m="1662050">going</span> <span m="1662200">to</span> <span
  m="1662250">be</span> <span m="1662320">a no.</span> <span
  m="1662685">And</span> <span m="1663050">this</span> <span
  m="1663340">was</span> <span m="1663810">because</span> <span
  m="1666560">the</span> <span m="1666720">probability</span> <span
  m="1667180">distribution.</span> <span m="1669860">The</span> <span
  m="1669950">question</span> <span m="1670270">is,</span> <span
  m="1670940">what</span> <span m="1671270">is</span> <span
  m="1671340">the</span> <span m="1671450">probability</span> <span
  m="1671730">distribution</span> <span m="1672150">for</span> <span
  m="1672360">the</span> <span m="1672480">number</span> <span
  m="1672770">of</span> <span m="1672880">proteins</span> <span
  m="1673400">produced</span> <span m="1673810">from</span> <span
  m="1674010">each</span> <span m="1674380">mRNA.</span> <span
  m="1675615">It's</span> <span m="1676030">going to</span> <span
  m="1676120">be</span> <span m="1676230">one</span> <span m="1676410">of</span>
  <span m="1676460">these.</span> <span m="1676800">Ready?</span> <span
  m="1677640">Three,</span> <span m="1678450">two,</span> <span
  m="1679120">one.</span> <span m="1684760">All</span> <span
  m="1684900">right.</span> <span m="1685110">So</span> <span
  m="1685190">we've</span> <span m="1685280">got</span> <span
  m="1685580">some</span> <span m="1686100">difference.</span> <span
  m="1686770">But</span> <span m="1687580">I'd</span> <span
  m="1687820">say</span> <span m="1687910">that</span> <span
  m="1688260">most</span> <span m="1688640">of</span> <span
  m="1688680">the</span> <span m="1688740">group is</span> <span
  m="1689060">saying</span> <span m="1689190">it's</span> <span
  m="1689370">going</span> <span m="1689460">to</span> <span
  m="1689500">be</span> <span m="1689600">A</span> <span m="1689730">or</span>
  <span m="1689860">B.</span> <span m="1690050">And</span> <span
  m="1690130">indeed</span> <span m="1690480">these</span> <span
  m="1690710">are</span> <span m="1691690">almost</span> <span
  m="1692030">the</span> <span m="1692110">same</span> <span
  m="1692650">distributions.</span> <span m="1693790">What's</span> <span
  m="1694400">the</span> <span m="1694460">difference</span> <span
  m="1694790">between</span> <span m="1695020">them?</span></p><p><span
  m="1695823">AUDIENCE: One's</span> <span
  m="1696316">discrete--</span></p><p><span m="1696810">PROFESSOR: Right.</span>
  <span m="1696980">So</span> <span m="1697040">this</span> <span
  m="1697220">guy's</span> <span m="1697440">discrete.</span> <span
  m="1697720">This</span> <span m="1698000">guy is</span> <span
  m="1698410">continuous.</span> <span m="1699990">Right.</span> <span
  m="1700180">Indeed</span> <span m="1700610">when we're</span> <span
  m="1700780">taking</span> <span m="1700920">about</span> <span
  m="1701090">the</span> <span m="1701150">numbers,</span> <span
  m="1701760">then</span> <span m="1701840">we</span> <span
  m="1701910">should</span> <span m="1702080">get--</span> <span
  m="1702390">it's</span> <span m="1702570">a</span> <span
  m="1702630">geometric.</span> <span m="1703110">But</span> <span
  m="1704210">often</span> <span m="1704760">we're</span> <span
  m="1704870">kind</span> <span m="1705030">of</span> <span m="1705220">a</span>
  <span m="1705380">little</span> <span m="1705590">bit</span> <span
  m="1706410">loose</span> <span m="1706910">about</span> <span
  m="1707530">these</span> <span m="1707680">things.</span> <span
  m="1707910">So</span> <span m="1708010">it's</span> <span
  m="1708120">not</span> <span m="1708270">a</span> <span
  m="1708320">disaster</span> <span m="1708770">if you</span> <span
  m="1708880">said</span> <span m="1709060">exponential.</span> <span
  m="1709550">But</span> <span m="1710010">the</span> <span
  m="1710110">key</span> <span m="1710300">thing</span> <span
  m="1710470">is</span> <span m="1710600">that</span> <span
  m="1711500">the</span> <span m="1711630">distribution</span> <span
  m="1712180">looks</span> <span m="1712990">something</span> <span
  m="1713390">like--</span> <span m="1713700">so</span> <span
  m="1713810">now</span> <span m="1713970">I've</span> <span
  m="1714100">certainly</span> <span m="1714380">drawn</span> <span
  m="1714790">it</span> <span m="1714890">as</span> <span m="1715020">an</span>
  <span m="1715110">exponential.</span> <span m="1715930">This</span> <span
  m="1716050">is</span> <span m="1716120">the</span> <span
  m="1716240">probability</span> <span m="1717370">of</span> <span
  m="1717530">n</span> <span m="1718010">as</span> <span m="1718420">a</span>
  <span m="1718510">function</span> <span m="1718890">of n.</span> <span
  m="1719250">Of</span> <span m="1719360">course,</span> <span
  m="1719740">the</span> <span m="1719840">geometric</span> <span
  m="1720390">thing</span> <span m="1720720">it</span> <span
  m="1721020">looks--</span></p><p><span m="1724322">AUDIENCE: Sorry.</span>
  <span m="1725286">So</span> <span m="1725768">why</span> <span
  m="1726732">should we</span> <span m="1727214">expect</span> <span
  m="1728178">that</span> <span m="1728660">distribution?</span></p><p><span
  m="1729630">PROFESSOR: Why</span> <span m="1729850">should</span> <span
  m="1729970">we</span> <span m="1730040">expect</span> <span
  m="1730340">the</span> <span m="1730510">distribution?</span> <span
  m="1731120">So</span> <span m="1731190">one</span> <span
  m="1731380">answer</span> <span m="1731650">is</span> <span
  m="1731880">that</span> <span m="1732200">because</span> <span
  m="1732430">that's</span> <span m="1732620">what</span> <span
  m="1732810">you</span> <span m="1732960">read</span> <span
  m="1733170">on</span> <span m="1733290">Tuesday.</span> <span
  m="1733940">But</span> <span m="1734460">let's</span> <span
  m="1734690">go</span> <span m="1734800">ahead</span> <span
  m="1734970">and--</span> <span m="1741030">yes,</span> <span
  m="1741680">but</span> <span m="1741910">let's</span> <span
  m="1742420">go</span> <span m="1742520">ahead</span> <span
  m="1742740">and</span> <span m="1743130">calculate</span> <span
  m="1743520">it.</span> <span m="1744300">That's</span> <span
  m="1744870">useful.</span></p><p><span m="1747620">The</span> <span
  m="1747800">way</span> <span m="1747910">to</span> <span
  m="1747980">think</span> <span m="1748140">about</span> <span
  m="1748320">this,</span> <span m="1748620">in</span> <span
  m="1748740">some</span> <span m="1748970">ways,</span> <span
  m="1749280">there's</span> <span m="1749520">another</span> <span
  m="1749790">way</span> <span m="1749890">to</span> <span
  m="1750230">write</span> <span m="1750490">this</span> <span
  m="1750690">perhaps.</span> <span m="1751060">Which</span> <span
  m="1751190">is</span> <span m="1751290">that</span> <span
  m="1751880">imagine</span> <span m="1752250">you</span> <span
  m="1752350">have</span> <span m="1752580">an</span> <span
  m="1752660">mRNA.</span> <span m="1755820">Now</span> <span
  m="1756630">at</span> <span m="1756970">some</span> <span
  m="1757160">rate</span> <span m="1758296">it's</span> <span
  m="1758670">going</span> <span m="1758760">to</span> <span
  m="1758800">be</span> <span m="1758890">degraded.</span> <span
  m="1760270">And</span> <span m="1760410">maybe</span> <span
  m="1760500">we'll</span> <span m="1760730">keep</span> <span
  m="1761010">the</span> <span m="1761130">degradation</span> <span
  m="1761620">rate</span> <span m="1761950">down,</span> <span
  m="1762460">just</span> <span m="1762680">for--</span> <span
  m="1765180">so</span> <span m="1765290">there's a</span> <span
  m="1765520">degradation</span> <span m="1766010">rate.</span> <span
  m="1767320">But</span> <span m="1767440">then</span> <span
  m="1768020">if</span> <span m="1768110">you'd</span> <span
  m="1768230">like,</span> <span m="1768440">we</span> <span
  m="1768530">could</span> <span m="1768630">draw</span> <span
  m="1768880">it</span> <span m="1768980">like</span> <span
  m="1769210">this.</span> <span m="1770090">Where</span> <span
  m="1771550">this</span> <span m="1771700">is</span> <span
  m="1771860">the</span> <span m="1772030">synthesis</span> <span
  m="1772610">rate</span> <span m="1772900">for</span> <span
  m="1773030">a</span> <span m="1773070">protein.</span> <span
  m="1773885">And</span> <span m="1775470">out</span> <span
  m="1775660">pops</span> <span m="1775870">a</span> <span
  m="1775940">protein.</span></p><p><span m="1780010">And so</span> <span
  m="1780120">the idea</span> <span m="1780240">is</span> <span
  m="1780390">that</span> <span m="1780570">is</span> <span
  m="1780770">here</span> <span m="1781080">we're</span> <span
  m="1781250">in</span> <span m="1781310">some</span> <span
  m="1781450">state</span> <span m="1781900">where,</span> <span
  m="1782120">OK,</span> <span m="1782500">here</span> <span
  m="1782710">we</span> <span m="1782800">have</span> <span
  m="1783000">an</span> <span m="1783300">mRNA.</span> <span
  m="1784540">Here's</span> <span m="1784650">the</span> <span
  m="1784700">state</span> <span m="1784900">where</span> <span
  m="1784970">we</span> <span m="1785080">don't</span> <span
  m="1785250">have</span> <span m="1785370">an</span> <span
  m="1785440">mRNA.</span> <span m="1786740">Now</span> <span
  m="1786900">this</span> <span m="1787070">is</span> <span
  m="1787180">the</span> <span m="1787290">competition</span> <span
  m="1787890">between</span> <span m="1788100">those</span> <span
  m="1788250">two</span> <span m="1788380">rates</span> <span
  m="1788620">that</span> <span m="1788810">I was telling</span> <span
  m="1788970">you</span> <span m="1789130">about.</span> <span m="1789780">There
  is</span> <span m="1789940">some</span> <span m="1790080">degradation</span>
  <span m="1790640">rate</span> <span m="1790820">for the</span> <span
  m="1791115">mRNA.</span> <span m="1791410">Or</span> <span
  m="1791750">there's</span> <span m="1791930">a</span> <span
  m="1791980">synthesis</span> <span m="1792370">rate</span> <span
  m="1792610">where</span> <span m="1792720">we</span> <span
  m="1792810">go</span> <span m="1792930">around</span> <span
  m="1793080">this</span> <span m="1793200">loop.</span> <span
  m="1794040">If</span> <span m="1794190">we</span> <span
  m="1794300">come</span> <span m="1794560">around</span> <span
  m="1794690">this</span> <span m="1794800">loop,</span> <span
  m="1795000">we</span> <span m="1795100">come</span> <span
  m="1795260">back</span> <span m="1795550">to</span> <span
  m="1795620">the</span> <span m="1795700">state</span> <span
  m="1796000">with</span> <span m="1796160">an</span> <span
  m="1796240">mRNA.</span> <span m="1796700">There</span> <span
  m="1796790">still is</span> <span m="1797070">an</span> <span
  m="1797120">mRNA</span> <span m="1797390">intact.</span> <span
  m="1798090">Just</span> <span m="1798320">out</span> <span
  m="1798540">pops</span> <span m="1798780">a protein.</span></p><p><span
  m="1801060">So</span> <span m="1801250">then what</span> <span
  m="1801350">we</span> <span m="1801430">want</span> <span
  m="1801650">to</span> <span m="1801770">do,</span> <span m="1801960">is</span>
  <span m="1802060">we</span> <span m="1802150">want</span> <span
  m="1802310">to</span> <span m="1802520">think</span> <span
  m="1802650">about</span> <span m="1804920">what's</span> <span
  m="1805170">the</span> <span m="1805270">number</span> <span
  m="1805670">of</span> <span m="1805760">proteins</span> <span
  m="1806310">that</span> <span m="1806430">we</span> <span
  m="1806540">expect,</span> <span m="1807220">not</span> <span
  m="1807370">just</span> <span m="1807540">the</span> <span
  m="1807610">mean,</span> <span m="1807980">but</span> <span
  m="1808240">the</span> <span m="1808510">actual</span> <span
  m="1808710">distribution.</span> <span m="1813560">So</span> <span
  m="1813730">it's</span> <span m="1814110">useful</span> <span
  m="1815845">in</span> <span m="1816250">these</span> <span
  m="1816380">situations</span> <span m="1816980">to</span> <span
  m="1817700">define</span> <span m="1819550">some</span> <span
  m="1820820">probability</span> <span m="1822160">rho,</span> <span
  m="1824120">which</span> <span m="1824620">is</span> <span
  m="1824710">the</span> <span m="1824810">probability</span> <span
  m="1825185">you</span> <span m="1825560">actually,</span> <span
  m="1826280">if</span> <span m="1826430">you're</span> <span
  m="1826610">here,</span> <span m="1827290">it's</span> <span
  m="1827360">the</span> <span m="1827460">probability</span> <span
  m="1827755">that</span> <span m="1828050">you</span> <span
  m="1828420">produce</span> <span m="1828870">one</span> <span
  m="1829240">protein</span> <span m="1830170">at</span> <span
  m="1830340">least.</span> <span m="1832110">The</span> <span
  m="1832200">question</span> <span m="1832440">is,</span> <span
  m="1832700">which</span> <span m="1832990">path</span> <span m="1833240">do
  you</span> <span m="1833350">take</span> <span
  m="1833610">initially.</span></p><p><span m="1834930">Well that's</span> <span
  m="1835240">just</span> <span m="1835530">given</span> <span
  m="1835810">by</span> <span m="1835920">the</span> <span
  m="1836040">ratios.</span> <span m="1836620">So</span> <span
  m="1836740">there's</span> <span m="1837100">the</span> <span
  m="1837260">rate</span> <span m="1837590">that</span> <span
  m="1838020">we</span> <span m="1838220">take</span> <span
  m="1838880">this</span> <span m="1839000">circular</span> <span
  m="1839390">path</span> <span m="1839690">divided</span> <span
  m="1839980">by</span> <span m="1840070">the</span> <span
  m="1840170">sum</span> <span m="1841120">of</span> <span
  m="1841240">these</span> <span m="1841440">two</span> <span
  m="1841610">other</span> <span m="1841865">rates.</span> <span
  m="1847320">And</span> <span m="1847430">then</span> <span
  m="1847810">what</span> <span m="1847910">we</span> <span
  m="1847920">can</span> <span m="1848000">do</span> <span m="1848070">is</span>
  <span m="1848170">we</span> <span m="1848260">can</span> <span
  m="1848350">ask,</span> <span m="1848710">well</span> <span
  m="1849710">what</span> <span m="1849910">is</span> <span
  m="1850080">the</span> <span m="1850200">probability</span> <span
  m="1851840">that</span> <span m="1852070">0</span> <span
  m="1852570">proteins</span> <span m="1853050">are</span> <span
  m="1853140">produced,</span> <span m="1855570">probability</span> <span
  m="1855770">that</span> <span m="1856211">we get</span> <span
  m="1856652">0.</span> <span m="1858420">Well</span> <span
  m="1859480">if</span> <span m="1859780">we</span> <span
  m="1860570">take</span> <span m="1860820">this</span> <span
  m="1861010">path</span> <span m="1861340">initially,</span> <span
  m="1862700">will</span> <span m="1862850">we</span> <span
  m="1862950">have</span> <span m="1863100">0</span> <span
  m="1863330">proteins?</span></p><p><span m="1864185">AUDIENCE:
  No.</span></p><p><span m="1864560">PROFESSOR: No.</span> <span
  m="1865150">Right,</span> <span m="1865310">so</span> <span
  m="1865400">this</span> <span m="1865890">probability</span> <span
  m="1867410">is</span> <span m="1867580">indeed</span> <span
  m="1868110">simply</span> <span m="1868610">equal</span> <span
  m="1869170">to</span> <span m="1869860">the</span> <span
  m="1869950">probability</span> <span m="1870310">that</span> <span
  m="1870440">we</span> <span m="1870550">do</span> <span
  m="1870690">this</span> <span m="1871050">first,</span> <span
  m="1871910">which</span> <span m="1872010">is</span> <span
  m="1872420">1</span> <span m="1872760">minus</span> <span
  m="1873250">rho.</span> <span m="1880790">Now</span> <span
  m="1880920">what's</span> <span m="1881070">the</span> <span
  m="1881160">probably</span> <span m="1881480">that</span> <span
  m="1881580">we</span> <span m="1881670">get</span> <span m="1881830">1</span>
  <span m="1882040">protein?</span> <span m="1882310">Well,</span> <span
  m="1884160">only</span> <span m="1884330">1?</span> <span
  m="1884640">That's</span> <span m="1884900">equal</span> <span
  m="1885090">to</span> <span m="1885130">the</span> <span
  m="1885230">probability</span> <span m="1885700">that</span> <span
  m="1886150">we</span> <span m="1886310">first</span> <span
  m="1886970">take</span> <span m="1887780">this</span> <span
  m="1888080">path,</span> <span m="1888740">and</span> <span
  m="1888890">then</span> <span m="1889040">we</span> <span
  m="1889130">take</span> <span m="1889300">this</span> <span
  m="1889440">path.</span> <span m="1890790">Well</span> <span m="1890910">we
  can</span> <span m="1891050">multiply</span> <span m="1891400">those</span>
  <span m="1891590">probabilities.</span> <span m="1892390">Because</span> <span
  m="1893530">we</span> <span m="1893670">first</span> <span
  m="1894140">take</span> <span m="1894440">the</span> <span
  m="1894690">circular</span> <span m="1895070">path</span> <span m="1895350">to
  make</span> <span m="1895530">a</span> <span m="1895580">protein.</span> <span
  m="1896770">And</span> <span m="1896970">then</span> <span
  m="1897170">we</span> <span m="1897280">take</span> <span
  m="1897690">the</span> <span m="1897790">degradation</span> <span
  m="1898260">path.</span></p><p><span m="1899920">Well</span> <span
  m="1900185">what's the</span> <span m="1900450">probability</span> <span
  m="1900740">we</span> <span m="1900820">get</span> <span m="1900980">2?</span>
  <span m="1901690">Well</span> <span m="1901800">that's</span> <span
  m="1901990">just</span> <span m="1902110">that we</span> <span
  m="1902230">come around</span> <span m="1902540">here</span> <span
  m="1902750">once,</span> <span m="1904110">twice,</span> <span
  m="1904940">and</span> <span m="1905070">then</span> <span
  m="1905170">degrade.</span> <span m="1910540">Now</span> <span
  m="1911500">if</span> <span m="1911660">you're</span> <span
  m="1911780">not</span> <span m="1912020">seeing</span> <span
  m="1912250">a</span> <span m="1912290">pattern</span> <span
  m="1912630">here,</span> <span m="1912830">then</span> <span
  m="1914360">we're</span> <span m="1914510">in</span> <span
  m="1914580">trouble.</span> <span m="1917400">So</span> <span
  m="1917480">this</span> <span m="1917670">says</span> <span
  m="1917780">the</span> <span m="1917880">probability</span> <span
  m="1918240">of</span> <span m="1918300">n</span> <span m="1918910">will</span>
  <span m="1919140">then</span> <span m="1919470">just be</span> <span
  m="1919700">equal</span> <span m="1919880">to</span> <span
  m="1920040">rho</span> <span m="1920540">to</span> <span
  m="1920630">the</span> <span m="1920810">n,</span> <span m="1921522">1</span>
  <span m="1921880">minus</span> <span m="1922410">rho.</span></p><p><span
  m="1928850">And</span> <span m="1928990">indeed,</span> <span
  m="1929840">it's</span> <span m="1930010">always</span> <span
  m="1930350">useful</span> <span m="1930990">in</span> <span
  m="1931140">order</span> <span m="1931340">to</span> <span
  m="1931540">warm</span> <span m="1931830">up</span> <span
  m="1932010">your</span> <span m="1932300">probability</span> <span
  m="1932810">muscles,</span> <span m="1933370">to</span> <span
  m="1934030">check</span> <span m="1934340">to</span> <span
  m="1934410">make</span> <span m="1934550">sure</span> <span
  m="1934720">that</span> <span m="1936542">this</span> <span
  m="1936960">is</span> <span m="1937040">a</span> <span
  m="1937110">normalized</span> <span m="1937580">probability</span> <span
  m="1937880">distribution.</span> <span m="1938830">So</span> <span
  m="1939030">sum</span> <span m="1939720">over</span> <span
  m="1941330">all</span> <span m="1942550">possible</span> <span
  m="1942960">ends</span> <span m="1943440">indeed</span> <span
  m="1943590">goes</span> <span m="1943820">to</span> <span
  m="1944260">1.</span> <span m="1945820">And</span> <span
  m="1945910">that's</span> <span m="1946080">just</span> <span
  m="1946230">because</span> <span m="1946490">the</span> <span
  m="1946570">sum</span> <span m="1946890">over</span> <span
  m="1947090">a</span> <span m="1947140">bunch</span> <span
  m="1947460">of</span> <span m="1948230">rho</span> <span m="1948610">to</span>
  <span m="1948690">the</span> <span m="1948840">n's</span> <span
  m="1949190">is</span> <span m="1949380">equal</span> <span
  m="1949590">to</span> <span m="1949770">1</span> <span
  m="1950080">divided</span> <span m="1950360">by</span> <span
  m="1950620">1</span> <span m="1950920">minus</span> <span
  m="1951170">rho,</span> <span m="1951440">which</span> <span
  m="1951600">is</span> <span m="1951850">the</span> <span
  m="1951940">term</span> <span m="1952140">there.</span> <span
  m="1952440">And</span> <span m="1952520">that</span> <span
  m="1952640">goes</span> <span m="1952790">to</span> <span
  m="1952870">1.</span></p><p><span m="1954591">AUDIENCE: So this</span> <span
  m="1955068">is</span> <span m="1955545">making</span> <span
  m="1956022">a</span> <span m="1956499">pretty</span> <span
  m="1956976">strong</span> <span m="1957453">assumption that</span> <span
  m="1957930">they're</span> <span m="1958407">all
  independent?</span></p><p><span m="1958890">PROFESSOR: Yep,</span> <span
  m="1959290">yep.</span> <span m="1961180">Yep.</span> <span
  m="1962540">This</span> <span m="1962700">is</span> <span
  m="1962800">assuming</span> <span m="1964600">that</span> <span
  m="1965390">if</span> <span m="1965520">you've</span> <span
  m="1965660">gone</span> <span m="1965870">around</span> <span
  m="1966060">once,</span> <span m="1966750">you</span> <span
  m="1967030">return.</span> <span m="1967970">But</span> <span
  m="1968860">I've</span> <span m="1969040">come</span> <span
  m="1969190">back</span> <span m="1969350">to</span> <span
  m="1969420">the</span> <span m="1969500">original</span> <span
  m="1969750">state.</span></p><p><span m="1970100">AUDIENCE:</span> <span
  m="1970335">But do</span> <span m="1970570">mRNAs</span> <span
  m="1971034">like</span> <span m="1971498">actually</span> <span
  m="1971962">get</span> <span m="1972426">caught in</span> <span
  m="1973354">ribosomes--</span></p><p><span m="1975060">PROFESSOR: There</span>
  <span m="1975270">are</span> <span m="1975300">a</span> <span
  m="1975360">lot</span> <span m="1975610">of</span> <span
  m="1975670">things</span> <span m="1975880">that</span> <span
  m="1976600">can</span> <span m="1976940">be</span> <span
  m="1977040">true.</span> <span m="1978720">And</span> <span
  m="1979830">I</span> <span m="1979970">would</span> <span
  m="1980120">say</span> <span m="1980310">that</span> <span
  m="1981750">in</span> <span m="1982920">biology</span> <span
  m="1983530">and</span> <span m="1983620">in</span> <span
  m="1983720">life,</span> <span m="1984040">what you</span> <span
  m="1984200">do</span> <span m="1984440">is</span> <span m="1984560">you</span>
  <span m="1984740">first</span> <span m="1985170">write</span> <span
  m="1985280">down</span> <span m="1985430">the</span> <span
  m="1985490">simplest</span> <span m="1985940">possible</span> <span
  m="1986260">model.</span> <span m="1987090">And</span> <span
  m="1987210">then</span> <span m="1987340">you</span> <span
  m="1987430">go</span> <span m="1987600">and</span> <span
  m="1987680">you</span> <span m="1987760">make</span> <span
  m="1987940">measurements.</span> <span m="1988540">And</span> <span
  m="1988630">you</span> <span m="1988710">ask</span> <span
  m="1988960">whether</span> <span m="1989130">the</span> <span
  m="1989240">simplest</span> <span m="1990050">possible</span> <span
  m="1990360">model</span> <span m="1991430">can</span> <span
  m="1991870">adequately</span> <span m="1992300">explain</span> <span
  m="1992580">the</span> <span m="1992630">data.</span></p><p><span
  m="1993380">And</span> <span m="1993600">if</span> <span
  m="1993990">the</span> <span m="1994110">answer</span> <span
  m="1994210">is</span> <span m="1994450">no,</span> <span
  m="1994910">then</span> <span m="1994990">you're</span> <span
  m="1995140">allowed</span> <span m="1995600">to</span> <span
  m="1995710">start</span> <span m="1995930">thinking</span> <span
  m="1996130">about</span> <span m="1996270">other</span> <span
  m="1996410">things.</span> <span m="1996960">Because</span> <span
  m="1997200">everything's</span> <span m="1997590">is in</span> <span
  m="1997875">principle</span> <span m="1998160">true.</span> <span
  m="1999770">In that</span> <span m="1999990">mRNA,</span> <span
  m="2001130">maybe</span> <span m="2001460">it's</span> <span m="2001620">this
  or</span> <span m="2001670">that.</span> <span m="2002400">The</span> <span
  m="2002460">question</span> <span m="2002700">is</span> <span
  m="2002760">whether</span> <span m="2002930">it's</span> <span
  m="2003070">significant.</span> <span m="2004130">And</span> <span
  m="2004300">at</span> <span m="2004360">least</span> <span
  m="2004700">from</span> <span m="2004820">the</span> <span
  m="2004900">data</span> <span m="2005160">from</span> <span
  m="2005270">Sunney's</span> <span m="2005690">group</span> <span
  m="2005900">would</span> <span m="2006030">say</span> <span
  m="2006250">that</span> <span m="2007170">in</span> <span
  m="2007530">that</span> <span m="2007740">condition,</span> <span
  m="2008390">in</span> <span m="2008520">those</span> <span
  m="2008710">cells,</span> <span m="2009995">that</span> <span
  m="2010320">those</span> <span m="2010580">things</span> <span
  m="2010730">are</span> <span m="2010790">not</span> <span
  m="2011240">significant,</span> <span m="2011390">in the</span> <span
  m="2011450">sense</span> <span m="2011660">that</span> <span
  m="2012000">you</span> <span m="2012120">still</span> <span
  m="2012360">get</span> <span m="2012490">a</span> <span
  m="2012520">geometric</span> <span
  m="2012950">distribution.</span></p><p><span m="2013950">Of</span> <span
  m="2014110">course</span> <span m="2014520">it</span> <span
  m="2014650">could</span> <span m="2014840">also</span> <span
  m="2015070">be</span> <span m="2015350">that</span> <span
  m="2016280">those</span> <span m="2016800">other</span> <span
  m="2016950">things</span> <span m="2017170">actually</span> <span
  m="2017400">are</span> <span m="2017665">true and</span> <span
  m="2017930">are</span> <span m="2018070">significant.</span> <span
  m="2018470">But</span> <span m="2018550">then</span> <span
  m="2018650">you</span> <span m="2018750">end</span> <span
  m="2018910">up</span> <span m="2019060">with</span> <span
  m="2019200">some</span> <span m="2020010">new</span> <span
  m="2020350">parameters</span> <span m="2021120">that</span> <span
  m="2021260">describe</span> <span m="2022900">how</span> <span
  m="2023460">things</span> <span m="2023700">look</span> <span
  m="2023910">as</span> <span m="2024010">a</span> <span
  m="2024050">result</span> <span m="2024340">of</span> <span
  m="2024410">all</span> <span m="2024500">the</span> <span
  m="2024570">complexity.</span> <span m="2025260">That's</span> <span
  m="2025480">also</span> <span m="2025820">OK</span> <span
  m="2026200">in</span> <span m="2026300">the</span> <span
  m="2026370">sense</span> <span m="2026640">that</span> <span m="2028690">I'd
  say</span> <span m="2028850">that</span> <span m="2029010">you can</span>
  <span m="2029110">get</span> <span m="2029800">a</span> <span
  m="2029940">quantitative</span> <span m="2030310">description</span> <span
  m="2030720">of</span> <span m="2030850">the</span> <span
  m="2030940">process</span> <span m="2031350">by</span> <span
  m="2031940">describing</span> <span m="2032340">it</span> <span
  m="2032420">as</span> <span m="2032550">a</span> <span
  m="2032590">geometric</span> <span m="2032860">with</span> <span
  m="2033130">just</span> <span m="2033300">a</span> <span
  m="2033350">single</span> <span m="2033630">free</span> <span
  m="2033830">parameter.</span> <span m="2034580">And</span> <span
  m="2034690">they</span> <span m="2034790">found</span> <span m="2035110">that
  the</span> <span m="2035180">mean</span> <span m="2036050">was</span> <span
  m="2036260">four,</span> <span m="2036880">or</span> <span
  m="2037020">four</span> <span m="2037300">or</span> <span
  m="2037340">five.</span> <span m="2038750">The</span> <span
  m="2038830">mean</span> <span m="2039060">number</span> <span
  m="2039310">of</span> <span m="2039370">proteins</span> <span
  m="2039690">produced</span> <span m="2041240">from</span> <span
  m="2041330">each</span> <span m="2041420">mRNA.</span> <span
  m="2041960">But</span> <span m="2042770">they</span> <span
  m="2042920">got</span> <span m="2043110">this</span> <span
  m="2043960">geometric</span> <span m="2044440">distribution</span> <span
  m="2045480">in</span> <span m="2045580">that</span> <span
  m="2045750">paper.</span> <span m="2050830">Yes?</span></p><p><span
  m="2055159">And</span> <span m="2055489">I'll</span> <span
  m="2055670">just</span> <span m="2056010">mention</span> <span
  m="2056460">here</span> <span m="2056670">that</span> <span
  m="2057340">the</span> <span m="2057540">mean</span> <span
  m="2058270">of</span> <span m="2058429">this</span> <span
  m="2059940">is</span> <span m="2060560">rho</span> <span
  m="2060830">divided</span> <span m="2061070">by</span> <span
  m="2061159">1</span> <span m="2061330">minus</span> <span
  m="2061520">rho.</span> <span m="2064280">So</span> <span m="2064409">what
  you</span> <span m="2064570">see</span> <span m="2064699">is</span> <span
  m="2064840">that</span> <span m="2065000">as</span> <span
  m="2065260">rho</span> <span m="2065650">goes</span> <span
  m="2065909">to</span> <span m="2066010">1,</span> <span
  m="2066860">then</span> <span m="2066989">this</span> <span
  m="2067179">thing</span> <span m="2067360">is</span> <span
  m="2067520">going</span> <span m="2067699">to</span> <span
  m="2067790">diverge.</span> <span m="2069060">And</span> <span
  m="2069170">that</span> <span m="2069300">makes</span> <span
  m="2069500">sense.</span> <span m="2070050">because</span> <span
  m="2070480">as</span> <span m="2070639">rho goes</span> <span m="2071100">to
  1,</span> <span m="2071370">it's</span> <span m="2071460">saying</span> <span
  m="2071750">that</span> <span m="2072870">you</span> <span
  m="2073179">essentially</span> <span m="2073540">always</span> <span
  m="2074380">synthesize</span> <span m="2074840">another</span> <span
  m="2075020">protein</span> <span m="2075300">rather</span> <span
  m="2075570">than</span> <span m="2075780">degrading.</span></p><p><span
  m="2077750">And</span> <span m="2078159">before</span> <span
  m="2078520">I</span> <span m="2079010">move</span> <span
  m="2079170">on,</span> <span m="2079290">I</span> <span
  m="2079350">just</span> <span m="2079469">want</span> <span
  m="2079590">to</span> <span m="2079639">say</span> <span
  m="2079840">one</span> <span m="2080010">more</span> <span
  m="2080150">thing,</span> <span m="2080350">which</span> <span
  m="2080380">is</span> <span m="2080460">that</span> <span
  m="2081110">there</span> <span m="2081270">are</span> <span
  m="2081340">many</span> <span m="2081730">different</span> <span
  m="2082510">definitions</span> <span m="2082960">of</span> <span
  m="2083030">the</span> <span m="2083110">geometric</span> <span
  m="2083630">distribution,</span> <span m="2084670">depending</span> <span
  m="2085000">upon</span> <span m="2085250">whether</span> <span
  m="2085480">the</span> <span m="2085710">probability</span> <span
  m="2085964">of</span> <span m="2086219">rho is the</span> <span
  m="2086710">probability of</span> <span m="2087130">terminating,</span> <span
  m="2087390">or</span> <span m="2087650">the</span> <span
  m="2087739">probability</span> <span m="2088080">of going</span> <span
  m="2088260">around,</span> <span m="2088850">and</span> <span
  m="2089010">also</span> <span m="2089250">depending</span> <span
  m="2089560">on</span> <span m="2089659">whether</span> <span
  m="2089949">you're</span> <span m="2090830">asking</span> <span
  m="2091370">what</span> <span m="2091530">is</span> <span
  m="2091659">the--</span> <span m="2092050">here</span> <span
  m="2092300">we're</span> <span m="2092380">talking</span> <span
  m="2092550">about</span> <span m="2093159">the</span> <span
  m="2093500">probability</span> <span m="2093860">distribution</span> <span
  m="2094300">for</span> <span m="2094389">the</span> <span
  m="2094510">number</span> <span m="2094889">of</span> <span
  m="2095000">proteins</span> <span m="2095469">produced.</span> <span
  m="2096320">Whereas</span> <span m="2096560">we</span> <span
  m="2096670">could</span> <span m="2096800">have</span> <span
  m="2096889">talked</span> <span m="2097070">about</span> <span
  m="2097180">the</span> <span m="2097250">probability</span> <span
  m="2097690">distribution</span> <span m="2098110">for</span> <span
  m="2098180">the</span> <span m="2098290">number</span> <span
  m="2098550">of</span> <span m="2098620">times</span> <span
  m="2098910">we</span> <span m="2099010">go</span> <span
  m="2099120">around</span> <span m="2099320">this</span> <span
  m="2099460">loop</span> <span m="2099680">before,</span> <span
  m="2100840">no,</span> <span m="2100930">no</span> <span
  m="2101220">sorry.</span> <span m="2103150">That</span> <span
  m="2103290">is</span> <span m="2103380">for</span> <span
  m="2103460">the</span> <span m="2103540">number</span> <span
  m="2103740">of</span> <span m="2104020">proteins</span> <span
  m="2104270">produced.</span></p><p><span m="2105200">So the</span> <span
  m="2105440">other</span> <span m="2105680">way</span> <span
  m="2105880">you</span> <span m="2105990">could have</span> <span
  m="2106160">defined</span> <span m="2106460">this</span> <span
  m="2106630">is</span> <span m="2106860">the</span> <span
  m="2108630">number</span> <span m="2109000">of</span> <span
  m="2109110">times</span> <span m="2111010">where</span> <span
  m="2111410">it's--</span> <span m="2112170">the</span> <span
  m="2112320">number</span> <span m="2112510">of</span> <span
  m="2113570">cycles</span> <span m="2114030">that</span> <span
  m="2114490">you</span> <span m="2114650">had</span> <span
  m="2114770">to</span> <span m="2114810">go</span> <span
  m="2114960">before</span> <span m="2115190">you</span> <span
  m="2115280">went</span> <span m="2115580">here,</span> <span m="2116040">in
  the</span> <span m="2116160">sense</span> <span m="2116350">that</span> <span
  m="2116560">if</span> <span m="2116700">you</span> <span
  m="2116950">first</span> <span m="2117250">go</span> <span
  m="2117360">here,</span> <span m="2117580">you</span> <span m="2117650">can
  either</span> <span m="2117870">call</span> <span m="2118010">that</span>
  <span m="2118150">a</span> <span m="2118270">0</span> <span m="2118440">or
  a</span> <span m="2118610">1.</span> <span m="2119870">Do you</span> <span
  m="2119970">see what</span> <span m="2120070">I'm saying?</span> <span
  m="2120880">And</span> <span m="2121170">reasonable</span> <span
  m="2121550">people</span> <span m="2121800">can</span> <span
  m="2121910">disagree.</span> <span m="2122890">But</span> <span
  m="2123020">you</span> <span m="2123130">end</span> <span
  m="2123240">up</span> <span m="2123360">getting</span> <span
  m="2124060">distributions</span> <span m="2125080">that</span> <span
  m="2125290">are</span> <span m="2125570">just</span> <span
  m="2125730">a</span> <span m="2125770">little</span> <span
  m="2125950">bit</span> <span m="2126060">different.</span> <span
  m="2127200">So</span> <span m="2127840">watch</span> <span
  m="2128120">out.</span> <span m="2128250">If</span> <span
  m="2128330">you</span> <span m="2128400">just</span> <span
  m="2128560">memorize</span> <span m="2129130">something,</span> <span
  m="2129900">you</span> <span m="2130060">might</span> <span
  m="2130280">have</span> <span m="2130420">memorized</span> <span
  m="2131100">the</span> <span m="2131620">equation</span> <span
  m="2132050">for</span> <span m="2132290">a</span> <span
  m="2132370">different</span> <span m="2132610">definition</span> <span
  m="2133070">of</span> <span m="2133190">this</span> <span
  m="2133340">distribution.</span> <span m="2135240">Does</span> <span
  m="2135330">everyone</span> <span m="2135510">understand</span> <span
  m="2136040">what</span> <span m="2136160">I</span> <span
  m="2136240">tried</span> <span m="2136460">to</span> <span
  m="2136540">say</span> <span m="2136670">there?</span> <span
  m="2138780">Maybe?</span> <span m="2139380">Yeah?</span></p><p><span
  m="2140285">AUDIENCE: When there's</span> <span m="2140740">no
  degradation</span> <span m="2141195">is it</span> <span m="2141650">still
  a</span> <span m="2142105">Poisson?</span></p><p><span m="2143492">PROFESSOR:
  Ah,</span> <span m="2144700">if</span> <span m="2144860">there's</span> <span
  m="2145070">no</span> <span m="2145350">degradation</span> <span
  m="2146020">then</span> <span m="2146210">would</span> <span
  m="2146360">this</span> <span m="2146550">be</span> <span m="2146660">a</span>
  <span m="2146750">Poisson?</span> <span m="2148040">I</span> <span
  m="2148210">mean,</span> <span m="2148410">this</span> <span
  m="2148620">would</span> <span m="2149310">be</span> <span
  m="2149640">infinity,</span> <span m="2151200">right?</span></p><p><span
  m="2152436">AUDIENCE: Right,</span> <span m="2152914">[INAUDIBLE]</span> <span
  m="2153392">protein,</span> <span m="2153870">this is</span> <span
  m="2154348">done</span> <span m="2154826">independently,</span> <span
  m="2155304">like</span> <span m="2155782">there's</span> <span
  m="2156260">an</span> <span m="2156738">mRNA.</span> <span
  m="2157216">[INAUDIBLE]</span> <span m="2157694">proteins</span> <span
  m="2158172">independently.</span></p><p><span m="2159620">PROFESSOR:
  OK.</span> <span m="2161880">So</span> <span m="2162020">I</span> <span
  m="2162160">want</span> <span m="2162280">to</span> <span
  m="2162320">be</span> <span m="2162410">clear.</span> <span
  m="2162570">This</span> <span m="2162810">is,</span> <span
  m="2163070">p</span> <span m="2163250">of</span> <span m="2163320">n</span>
  <span m="2163510">is,</span> <span m="2167080">this</span> <span
  m="2167250">is</span> <span m="2167350">the</span> <span
  m="2167470">probability</span> <span m="2168000">distribution</span> <span
  m="2171250">for</span> <span m="2173650">number</span> <span
  m="2174010">of</span> <span m="2174120">proteins</span> <span
  m="2174640">n,</span> <span m="2178150">produced</span> <span
  m="2178730">from</span> <span m="2178870">a</span> <span
  m="2178910">single</span> <span m="2179200">mRNA.</span></p><p><span
  m="2186020">Now</span> <span m="2186260">if</span> <span
  m="2186580">there's</span> <span m="2186780">no</span> <span
  m="2187080">degradation</span> <span m="2188220">of the</span> <span
  m="2188550">mRNA,</span> <span m="2190110">then</span> <span
  m="2190320">this</span> <span m="2190510">thing</span> <span
  m="2190710">is</span> <span m="2190910">not</span> <span
  m="2191130">even,</span> <span m="2191340">I</span> <span
  m="2191380">think,</span> <span m="2191600">defined</span> <span
  m="2192340">in</span> <span m="2192860">that</span> <span
  m="2193570">the</span> <span m="2193670">number</span> <span
  m="2194010">of</span> <span m="2194560">proteins</span> <span
  m="2195940">produced</span> <span m="2196360">from</span> <span
  m="2196640">that</span> <span m="2196730">mRNA</span> <span
  m="2197280">just</span> <span m="2198220">really</span> <span
  m="2198410">goes</span> <span m="2198550">to</span> <span
  m="2198620">infinity.</span> <span m="2199330">If</span> <span
  m="2199400">you</span> <span m="2199530">wanted</span> <span
  m="2199700">to</span> <span m="2199850">ask</span> <span
  m="2200150">about</span> <span m="2201940">the</span> <span
  m="2202400">probability</span> <span m="2202640">distribution</span> <span
  m="2203090">for</span> <span m="2203170">the</span> <span
  m="2203280">number</span> <span m="2203650">of</span> <span
  m="2203810">proteins</span> <span m="2204740">produced</span> <span
  m="2205170">in</span> <span m="2205220">some</span> <span
  m="2205380">unit,</span> <span m="2205860">some</span> <span
  m="2206040">period</span> <span m="2206240">of</span> <span
  m="2206300">time</span> <span m="2208760">that</span> <span
  m="2209000">would</span> <span m="2209140">indeed</span> <span
  m="2209470">be</span> <span m="2209650">a</span> <span
  m="2209710">Poisson</span> <span m="2209990">distribution,</span> <span
  m="2213000">assuming</span> <span m="2213410">that there's</span> <span
  m="2213660">no</span> <span m="2213750">degradation.</span> <span
  m="2216210">Do</span> <span m="2216400">you</span> <span
  m="2216660">understand</span> <span m="2217310">what</span> <span
  m="2217640">I'm trying to</span> <span m="2218020">say?</span></p><p><span
  m="2218972">AUDIENCE: So</span> <span m="2219448">Sp</span> <span
  m="2219924">is</span> <span m="2220400">like</span> <span
  m="2220876">0?</span></p><p><span m="2222780">PROFESSOR: If</span> <span
  m="2223030">Sp,</span> <span m="2225940">I'm</span> <span
  m="2226110">sorry.</span> <span m="2226330">If</span> <span
  m="2226460">Sp</span> <span m="2226760">were</span> <span
  m="2226860">0?</span></p><p><span m="2228046">AUDIENCE: Yeah.</span> <span
  m="2228542">[INAUDIBLE].</span></p><p><span m="2241440">PROFESSOR: OK.</span>
  <span m="2241950">And</span> <span m="2242100">you're</span> <span
  m="2242250">saying</span> <span m="2242440">that</span> <span
  m="2242580">what</span> <span m="2242730">would</span> <span
  m="2242840">be</span> <span m="2242970">Poisson</span> <span
  m="2243210">distributed?</span></p><p><span m="2244269">AUDIENCE: The</span>
  <span m="2244758">number</span> <span m="2245247">of</span> <span
  m="2245736">proteins.</span></p><p><span m="2256090">PROFESSOR: Yeah,</span>
  <span m="2256480">I</span> <span m="2256580">think</span> <span
  m="2256790">that</span> <span m="2256940">actually--</span> <span
  m="2258210">no</span> <span m="2258360">I</span> <span
  m="2258430">think</span> <span m="2258920">that--</span> <span
  m="2260570">I</span> <span m="2260760">think</span> <span
  m="2260990">that</span> <span m="2261070">you're</span> <span
  m="2261190">probably</span> <span m="2261610">right.</span> <span
  m="2261940">That</span> <span m="2262220">as</span> <span
  m="2262470">Sp</span> <span m="2262740">goes</span> <span
  m="2262930">to</span> <span m="2263030">0--</span> <span
  m="2263620">I'm</span> <span m="2263840">a</span> <span
  m="2263890">little</span> <span m="2264110">bit</span> <span
  m="2264280">worried</span> <span m="2264720">that--</span></p><p><span
  m="2265260">AUDIENCE: No, no,</span> <span m="2265655">no.</span> <span
  m="2266050">Zero-th</span> <span m="2266360">order, sorry.</span></p><p><span
  m="2266670">PROFESSOR: Oh.</span></p><p><span m="2267436">AUDIENCE: Not</span>
  <span m="2267820">0.</span> <span m="2269284">[INAUDIBLE].</span></p><p><span
  m="2272220">PROFESSOR: OK.</span> <span m="2273500">Right,</span> <span
  m="2273710">so</span> <span m="2273810">the</span> <span
  m="2273960">mRNA</span> <span m="2274300">distribution</span> <span
  m="2274670">we're about</span> <span m="2274990">to find</span> <span
  m="2275260">is</span> <span m="2275420">indeed</span> <span m="2275470">going
  to</span> <span m="2275770">be a</span> <span m="2275910">Poisson</span> <span
  m="2276610">at</span> <span m="2276720">steady</span> <span
  m="2276970">state.</span> <span m="2278250">And</span> <span
  m="2278450">so</span> <span m="2278560">if</span> <span
  m="2279760">there's</span> <span m="2279920">some</span> <span
  m="2280070">process</span> <span m="2280420">by</span> <span
  m="2280510">which</span> <span m="2280680">the</span> <span
  m="2280780">protein</span> <span m="2281090">distribution</span> <span
  m="2281460">is</span> <span m="2281560">really</span> <span
  m="2281750">just</span> <span m="2281920">mirroring</span> <span
  m="2282980">the</span> <span m="2284260">mRNA</span> <span
  m="2284710">distribution,</span> <span m="2285200">then</span> <span
  m="2285380">it</span> <span m="2285520">will</span> <span
  m="2286920">also</span> <span m="2287320">be</span> <span
  m="2287580">Poisson.</span> <span m="2287810">Although</span> <span
  m="2288070">I</span> <span m="2288140">think</span> <span m="2288250">you
  have</span> <span m="2288480">to be</span> <span m="2288570">careful</span>
  <span m="2288940">about</span> <span m="2289925">how</span> <span
  m="2290280">you</span> <span m="2290430">actually</span> <span
  m="2290680">implement</span> <span m="2291060">that.</span> <span
  m="2292050">Because</span> <span m="2292190">even</span> <span
  m="2292390">in</span> <span m="2292450">the</span> <span
  m="2292530">absence</span> <span m="2292830">of</span> <span
  m="2292920">this</span> <span m="2293120">geometric</span> <span
  m="2293590">bursting,</span> <span m="2295290">different</span> <span
  m="2295540">things,</span> <span m="2295960">I think,</span> <span
  m="2296070">can happen.</span></p><p><span m="2297390">Because</span> <span
  m="2297780">for</span> <span m="2297880">example,</span> <span
  m="2298290">if</span> <span m="2298320">there</span> <span
  m="2298420">were</span> <span m="2298680">exactly</span> <span
  m="2299270">10</span> <span m="2299600">proteins</span> <span
  m="2300420">produced</span> <span m="2300810">from</span> <span
  m="2300960">each</span> <span m="2301160">mRNA,</span> <span
  m="2302230">then</span> <span m="2302350">that</span> <span
  m="2302550">probability</span> <span m="2302910">distribution</span> <span
  m="2303800">is</span> <span m="2304150">a</span> <span
  m="2304210">shift.</span> <span m="2306240">But</span> <span
  m="2306390">then</span> <span m="2308060">it's</span> <span
  m="2308820">no</span> <span m="2309010">longer</span> <span
  m="2309260">actually</span> <span m="2309470">going</span> <span
  m="2309570">to</span> <span m="2309630">be</span> <span
  m="2310520">Poisson,</span> <span m="2310980">because</span> <span
  m="2311280">the</span> <span m="2311500">mean</span> <span
  m="2311730">and</span> <span m="2311820">variance</span> <span
  m="2312220">are</span> <span m="2312290">going</span> <span
  m="2312400">to</span> <span m="2312830">scale</span> <span
  m="2313150">differently</span> <span m="2313810">if you</span> <span
  m="2313870">do</span> <span m="2313980">that.</span></p><p><span
  m="2315450">Let's</span> <span m="2316110">maybe</span> <span
  m="2316470">do</span> <span m="2316980">the</span> <span
  m="2317320">Poisson</span> <span m="2317660">distribution</span> <span
  m="2317945">for the</span> <span m="2318230">mRNA</span> <span
  m="2318640">first.</span> <span m="2318950">And</span> <span
  m="2319020">then</span> <span m="2319100">we</span> <span
  m="2319190">can</span> <span m="2319300">try</span> <span
  m="2319490">to</span> <span m="2321490">touch</span> <span
  m="2321710">back</span> <span m="2322150">on this.</span> <span
  m="2326040">So</span> <span m="2327330">this</span> <span
  m="2327600">is</span> <span m="2327910">a</span> <span m="2328040">plot</span>
  <span m="2328400">of</span> <span m="2328490">kind</span> <span
  m="2328620">of</span> <span m="2328750">geometric</span> <span
  m="2329240">distribution</span> <span m="2329790">with a</span> <span
  m="2329950">mean</span> <span m="2330270">of</span> <span
  m="2330680">3-4-ish.</span> <span m="2336860">Is</span> <span
  m="2336960">everybody</span> <span m="2337230">happy</span> <span
  m="2337540">with</span> <span m="2338850">where</span> <span
  m="2339010">we</span> <span m="2339120">are</span> <span
  m="2339440">now?</span> <span m="2340312">OK.</span></p><p><span
  m="2342060">Now</span> <span m="2342670">from</span> <span
  m="2343010">this,</span> <span m="2343430">what</span> <span
  m="2343540">we've</span> <span m="2343650">said</span> <span
  m="2343840">so</span> <span m="2343940">far</span> <span m="2344290">is</span>
  <span m="2344460">it</span> <span m="2344600">obvious</span> <span
  m="2345250">what</span> <span m="2345370">the</span> <span
  m="2345460">distribution</span> <span m="2346110">of</span> <span
  m="2346210">proteins</span> <span m="2346770">will</span> <span
  m="2346890">be</span> <span m="2347130">in</span> <span m="2347230">a</span>
  <span m="2347290">cell?</span> <span m="2348580">We can</span> <span
  m="2348840">say</span> <span m="2349140">obvious,</span> <span
  m="2349620">yes.</span> <span m="2350080">Or</span> <span
  m="2350220">not</span> <span m="2350420">obvious,</span> <span
  m="2350770">no.</span> <span m="2352920">Ready,</span> <span
  m="2354260">just</span> <span m="2354510">verbal,</span> <span
  m="2354950">yes?</span> <span m="2355330">Ready</span> <span
  m="2355980">or</span> <span m="2356080">no?</span> <span m="2356340">All
  right.</span> <span m="2356520">Ready?</span> <span m="2356810">Three,</span>
  <span m="2357010">two,</span> <span m="2357170">one.</span></p><p><span
  m="2357690">AUDIENCE: No.</span></p><p><span m="2358520">PROFESSOR: No.</span>
  <span m="2358900">Right.</span> <span m="2359570">So</span> <span
  m="2359740">we've</span> <span m="2359910">said</span> <span
  m="2360320">that</span> <span m="2361680">the</span> <span
  m="2361780">distribution</span> <span m="2362560">of</span> <span
  m="2362690">size</span> <span m="2363030">of protein</span> <span
  m="2363390">bursts</span> <span m="2363770">from</span> <span
  m="2363910">single</span> <span m="2364160">mRNA</span> <span
  m="2364400">is</span> <span m="2364780">geometric.</span> <span
  m="2365190">But</span> <span m="2365600">that</span> <span
  m="2365780">doesn't</span> <span m="2366000">mean</span> <span
  m="2366230">that</span> <span m="2366260">that's</span> <span
  m="2366490">going</span> <span m="2366600">to</span> <span
  m="2366650">be</span> <span m="2366890">the</span> <span
  m="2367280">distribution</span> <span m="2367880">of</span> <span
  m="2367970">proteins</span> <span m="2368450">in the</span> <span
  m="2368610">cell.</span> <span m="2370240">And</span> <span
  m="2370390">indeed</span> <span m="2370730">after,</span> <span
  m="2371000">we're</span> <span m="2371100">going</span> <span
  m="2371180">to</span> <span m="2371230">find</span> <span
  m="2371460">that</span> <span m="2371590">the</span> <span
  m="2371670">distribution</span> <span m="2372120">of</span> <span
  m="2372620">mRNA</span> <span m="2373030">is going</span> <span m="2373140">to
  be</span> <span m="2373280">Poisson.</span> <span m="2373790">But</span> <span
  m="2373890">even</span> <span m="2373990">then</span> <span
  m="2374200">it's</span> <span m="2374320">not</span> <span
  m="2374730">obvious</span> <span m="2375220">what</span> <span
  m="2375320">the</span> <span m="2375380">distribution</span> <span
  m="2375830">of proteins</span> <span m="2376135">is.</span></p><p><span
  m="2387800">All right.</span> <span m="2387910">So</span> <span
  m="2388020">what</span> <span m="2388120">we</span> <span
  m="2388200">want</span> <span m="2388320">to</span> <span
  m="2388360">do</span> <span m="2388440">now</span> <span m="2388670">is</span>
  <span m="2388790">we</span> <span m="2388880">want</span> <span
  m="2389060">to</span> <span m="2389140">introduce</span> <span
  m="2390100">kind</span> <span m="2390240">of</span> <span m="2390320">a</span>
  <span m="2390390">simple</span> <span m="2390810">version</span> <span
  m="2391120">of</span> <span m="2391210">what's</span> <span
  m="2391390">known</span> <span m="2391590">as</span> <span
  m="2391700">the</span> <span m="2391770">Master</span> <span
  m="2392200">Equation.</span> <span m="2395390">Now</span> <span
  m="2395540">you</span> <span m="2395660">guys</span> <span
  m="2395850">are</span> <span m="2395900">going</span> <span
  m="2395980">to</span> <span m="2396040">do</span> <span
  m="2396260">more</span> <span m="2396580">reading</span> <span
  m="2396940">on</span> <span m="2397100">this</span> <span
  m="2398010">for</span> <span m="2398640">the</span> <span
  m="2398780">lecture</span> <span m="2399160">on</span> <span
  m="2399590">Tuesday.</span> <span m="2400330">Where</span> <span
  m="2400480">we're</span> <span m="2400580">going</span> <span
  m="2400690">to</span> <span m="2400770">talk</span> <span
  m="2401000">about</span> <span m="2401530">the</span> <span
  m="2401600">Master</span> <span m="2401930">Equation,</span> <span
  m="2402570">as</span> <span m="2402770">well</span> <span
  m="2403080">as</span> <span m="2404230">the</span> <span
  m="2404330">Fokker-Planck</span> <span m="2405080">approximation.</span> <span
  m="2406310">Maybe</span> <span m="2406990">the</span> <span
  m="2407050">Gillespie</span> <span m="2407390">algorithm,</span> <span
  m="2407760">and</span> <span m="2407840">so</span> <span
  m="2407970">forth.</span></p><p><span m="2408620">But</span> <span
  m="2409790">I</span> <span m="2409860">want</span> <span m="2410050">to</span>
  <span m="2410550">start</span> <span m="2411060">by</span> <span
  m="2411930">thinking</span> <span m="2412090">about</span> <span
  m="2412260">the</span> <span m="2412460">this</span> <span
  m="2413000">notion</span> <span m="2413380">in</span> <span
  m="2413480">the</span> <span m="2413560">simplest</span> <span
  m="2413990">possible</span> <span m="2414310">context.</span> <span
  m="2415740">So</span> <span m="2415890">what</span> <span
  m="2415990">we're</span> <span m="2416060">going</span> <span
  m="2416140">to</span> <span m="2416190">do</span> <span m="2416250">is</span>
  <span m="2416370">we're</span> <span m="2416500">going</span> <span
  m="2416590">to</span> <span m="2416670">think</span> <span
  m="2416930">about</span> <span m="2417150">the</span> <span
  m="2417240">world.</span> <span m="2418580">So</span> <span
  m="2418690">we</span> <span m="2418760">want</span> <span
  m="2418890">to</span> <span m="2418930">know</span> <span
  m="2419455">the</span> <span m="2419830">steady</span> <span
  m="2420130">state,</span> <span m="2420910">or the</span> <span
  m="2420990">equilibrium</span> <span m="2421550">distribution</span> <span
  m="2422310">of</span> <span m="2422560">mRNA</span> <span
  m="2423020">numbers</span> <span m="2423410">in</span> <span
  m="2423470">the</span> <span m="2423530">cell,</span> <span
  m="2424130">given</span> <span m="2424410">this</span> <span
  m="2424560">process.</span> <span m="2426170">So</span> <span
  m="2426300">that's</span> <span m="2426560">great.</span> <span
  m="2427400">We</span> <span m="2427540">can--</span> <span
  m="2428900">so</span> <span m="2429970">mRNA</span> <span
  m="2430530">distribution,</span> <span m="2431130">question</span> <span
  m="2431410">mark.</span></p><p><span m="2440520">Now</span> <span
  m="2441380">in</span> <span m="2441440">this</span> <span
  m="2441580">case</span> <span m="2441760">we</span> <span
  m="2441850">don't</span> <span m="2442020">care</span> <span
  m="2442210">about</span> <span m="2442410">Sp,</span> <span
  m="2442970">delta</span> <span m="2443240">p,</span> <span
  m="2443520">because</span> <span m="2443850">the only things</span> <span
  m="2444320">that are</span> <span m="2444440">relevant</span> <span
  m="2444820">are</span> <span m="2444900">going</span> <span
  m="2444990">to</span> <span m="2445030">be</span> <span
  m="2445140">these.</span> <span m="2447350">Now</span> <span
  m="2447720">what</span> <span m="2447900">we're</span> <span
  m="2447970">going</span> <span m="2448050">to</span> <span
  m="2448090">do</span> <span m="2448280">is</span> <span
  m="2448380">we're</span> <span m="2448490">going</span> <span
  m="2448570">to</span> <span m="2448630">think</span> <span
  m="2448830">about</span> <span m="2449000">the</span> <span
  m="2449080">world</span> <span m="2449370">in</span> <span
  m="2449410">which</span> <span m="2450520">we</span> <span
  m="2450660">just</span> <span m="2450830">defined</span> <span
  m="2451430">states</span> <span m="2452450">corresponding</span> <span
  m="2453060">to</span> <span m="2453150">the</span> <span
  m="2453230">different</span> <span m="2453500">numbers</span> <span
  m="2454010">of</span> <span m="2454700">these</span> <span
  m="2454900">mRNAs.</span></p><p><span m="2457860">So</span> <span
  m="2458660">there's</span> <span m="2458930">a</span> <span
  m="2458980">state</span> <span m="2459340">where</span> <span
  m="2459590">there's</span> <span m="2459890">0.</span> <span
  m="2461170">We</span> <span m="2461270">can't</span> <span
  m="2461590">go</span> <span m="2461710">to</span> <span m="2461770">the</span>
  <span m="2461870">left,</span> <span m="2462380">less</span> <span
  m="2462670">than</span> <span m="2462820">0,</span> <span
  m="2463120">but</span> <span m="2463230">we</span> <span
  m="2463320">can</span> <span m="2463530">go</span> <span m="2463680">to</span>
  <span m="2464550">the</span> <span m="2464670">state</span> <span
  m="2465070">where</span> <span m="2465140">there's</span> <span
  m="2466240">1,</span> <span m="2468980">or</span> <span m="2469110">the</span>
  <span m="2469180">state</span> <span m="2469410">where</span> <span
  m="2469490">there's</span> <span m="2469690">2,</span> <span
  m="2470160">and</span> <span m="2470180">so</span> <span
  m="2470310">forth.</span></p><p><span m="2476340">Now</span> <span
  m="2476760">the</span> <span m="2476870">description</span> <span
  m="2477470">here</span> <span m="2477770">is</span> <span
  m="2478150">supposed</span> <span m="2478590">to</span> <span
  m="2478650">be</span> <span m="2479730">the</span> <span
  m="2479860">analog</span> <span m="2480390">of</span> <span
  m="2480730">this</span> <span m="2480900">over</span> <span
  m="2481030">there.</span> <span m="2481680">So</span> <span
  m="2482150">this</span> <span m="2482320">is</span> <span
  m="2483010">trying</span> <span m="2483270">to</span> <span
  m="2483320">understand</span> <span m="2483730">the</span> <span
  m="2483780">situation</span> <span m="2484210">where</span> <span
  m="2485120">the</span> <span m="2485200">deterministic</span> <span
  m="2485740">equations</span> <span m="2486240">would</span> <span
  m="2486360">be</span> <span m="2486640">described</span> <span
  m="2487010">by</span> <span m="2487190">m</span> <span m="2487593">dot</span>
  <span m="2487996">is</span> <span m="2488400">equal</span> <span
  m="2488570">to</span> <span m="2488630">this</span> <span
  m="2488790">some</span> <span m="2488970">synthesis</span> <span
  m="2489540">rate,</span> <span m="2492050">minus</span> <span
  m="2492600">a</span> <span m="2492690">degradation</span> <span
  m="2493170">rate</span> <span m="2493400">that's</span> <span
  m="2493510">proportional</span> <span m="2494040">to</span> <span
  m="2494120">the</span> <span m="2494210">number,</span> <span
  m="2495600">so</span> <span m="2495770">minus</span> <span
  m="2496780">delta</span> <span m="2497110">m</span> <span
  m="2498320">times</span> <span m="2498700">m.</span></p><p><span
  m="2502590">So</span> <span m="2502720">what you can</span> <span
  m="2502930">see</span> <span m="2503040">is</span> <span
  m="2503140">that</span> <span m="2505420">the</span> <span
  m="2505520">deterministic</span> <span m="2506110">equations</span> <span
  m="2506880">are</span> <span m="2507080">very</span> <span
  m="2507370">simple.</span> <span m="2509010">We</span> <span
  m="2509120">already</span> <span m="2509310">calculated</span> <span
  m="2509810">the</span> <span m="2509890">equilibrium.</span> <span
  m="2511350">So when</span> <span m="2511540">this</span> <span
  m="2511680">thing</span> <span m="2511840">is</span> <span
  m="2511930">equal</span> <span m="2512090">to</span> <span
  m="2512160">0,</span> <span m="2512670">then</span> <span
  m="2512860">we</span> <span m="2512970">get</span> <span
  m="2513150">that</span> <span m="2513290">m</span> <span
  m="2513590">equilibrium</span> <span m="2515320">is</span> <span
  m="2515550">just</span> <span m="2515750">going</span> <span
  m="2515840">to</span> <span m="2515900">equal</span> <span m="2516100">to
  the</span> <span m="2516220">synthesis</span> <span m="2516690">rate</span>
  <span m="2516980">divided</span> <span m="2517250">by</span> <span
  m="2517310">the</span> <span m="2517390">degradation</span> <span
  m="2517810">rate.</span></p><p><span m="2522210">If</span> <span
  m="2522380">we're</span> <span m="2522570">away</span> <span m="2522860">from
  the</span> <span m="2523090">equilibrium</span> <span m="2523830">in</span>
  <span m="2523920">this</span> <span m="2524060">deterministic</span> <span
  m="2524520">approximation,</span> <span m="2525910">how</span> <span
  m="2526070">long</span> <span m="2526520">is it</span> <span
  m="2526680">going</span> <span m="2526760">to</span> <span
  m="2526820">take</span> <span m="2527040">us</span> <span
  m="2527230">to</span> <span m="2527320">kind</span> <span
  m="2527460">of</span> <span m="2527580">approach</span> <span
  m="2528040">our</span> <span m="2528160">equilibrium?</span> <span
  m="2530640">Verbal</span> <span m="2531020">answer,</span> <span
  m="2531300">ready?</span> <span m="2531610">Three,</span> <span
  m="2532060">two,</span> <span m="2532460">one.</span></p><p><span
  m="2533100">[STUDENTS RESPOND]</span></p><p><span m="2534600">PROFESSOR:
  Right.</span> <span m="2534900">So</span> <span m="2535335">it's going</span>
  <span m="2535660">to be</span> <span m="2535770">1</span> <span
  m="2536000">over</span> <span m="2536160">delta</span> <span
  m="2536480">m.</span> <span m="2537130">So</span> <span
  m="2537220">this</span> <span m="2537780">tells</span> <span
  m="2538060">us</span> <span m="2538230">the</span> <span
  m="2538450">characteristic</span> <span m="2539210">timescale</span> <span
  m="2540320">to</span> <span m="2540500">come back.</span> <span m="2541160">So
  if</span> <span m="2541290">we're--</span> <span m="2542570">this</span> <span
  m="2542790">is</span> <span m="2543190">the</span> <span
  m="2543330">equilibrium</span> <span m="2544020">Sm</span> <span
  m="2545500">over</span> <span m="2545730">delta</span> <span
  m="2546070">m.</span> <span m="2548015">This is</span> <span
  m="2548470">m</span> <span m="2548940">as</span> <span m="2549100">a</span>
  <span m="2549180">function</span> <span m="2549650">of</span> <span
  m="2549790">time.</span> <span m="2551570">If</span> <span
  m="2551660">we're</span> <span m="2551770">below,</span> <span
  m="2552390">we</span> <span m="2552510">come</span> <span
  m="2552660">here.</span> <span m="2552980">If we're</span> <span
  m="2553120">above,</span> <span m="2553520">we</span> <span
  m="2553600">come</span> <span m="2553730">here.</span> <span
  m="2555070">And</span> <span m="2557640">this</span> <span
  m="2557810">time</span> <span m="2558170">is</span> <span m="2558280">1</span>
  <span m="2558530">over</span> <span m="2559240">delta</span> <span
  m="2559750">m.</span> <span m="2561686">Are the</span> <span
  m="2562170">any</span> <span m="2562330">questions</span> <span
  m="2562720">about?</span></p><p><span m="2570920">Now</span> <span
  m="2571130">this--</span> <span m="2571880">so</span> <span
  m="2572190">I</span> <span m="2572590">want</span> <span m="2572750">to</span>
  <span m="2572790">highlight</span> <span m="2573130">that</span> <span
  m="2573290">this</span> <span m="2573560">is</span> <span
  m="2573720">like</span> <span m="2574560">the</span> <span
  m="2574830">world's</span> <span m="2575380">simplest</span> <span
  m="2577280">dynamical</span> <span m="2578280">equation,</span> <span
  m="2578640">almost</span> <span m="2579830">the</span> <span
  m="2579890">world's</span> <span m="2580090">simplest.</span> <span
  m="2581900">Yet</span> <span m="2582290">what</span> <span
  m="2582440">we're</span> <span m="2582530">going</span> <span
  m="2582610">to</span> <span m="2582650">find</span> <span
  m="2582840">is</span> <span m="2582900">that</span> <span
  m="2583340">once</span> <span m="2583540">we</span> <span m="2583650">go
  over</span> <span m="2583820">and</span> <span m="2583930">we</span> <span
  m="2584030">try</span> <span m="2584190">to</span> <span
  m="2584240">understand</span> <span m="2584660">the</span> <span
  m="2584730">full</span> <span m="2585100">probability</span> <span
  m="2585540">distribution</span> <span m="2586920">of</span> <span
  m="2587060">the</span> <span m="2587140">stochastic</span> <span
  m="2587700">system</span> <span m="2588320">then</span> <span
  m="2588820">it's</span> <span m="2589680">a</span> <span
  m="2589740">little</span> <span m="2589940">bit</span> <span
  m="2590060">more</span> <span m="2590210">complicated.</span> <span
  m="2590470">In</span> <span m="2590560">particular,</span> <span
  m="2590920">we</span> <span m="2591030">end</span> <span m="2591190">up</span>
  <span m="2591870">with</span> <span m="2592130">an</span> <span
  m="2592290">infinite</span> <span m="2592840">set</span> <span
  m="2593140">of</span> <span m="2593250">differential</span> <span
  m="2593630">equations.</span></p><p><span m="2595710">So</span> <span
  m="2595790">in</span> <span m="2595880">general</span> <span
  m="2596850">the</span> <span m="2597040">Master</span> <span
  m="2597560">Equation</span> <span m="2598270">format,</span> <span
  m="2598640">where</span> <span m="2598790">we're</span> <span
  m="2599260">going</span> <span m="2599340">to</span> <span
  m="2599530">write</span> <span m="2599740">differential</span> <span
  m="2600080">equations</span> <span m="2600450">for</span> <span
  m="2600550">how</span> <span m="2601380">these</span> <span
  m="2601770">probabilities</span> <span m="2603030">change</span> <span
  m="2603420">over</span> <span m="2603560">time.</span> <span
  m="2605530">Now</span> <span m="2606050">what</span> <span
  m="2606180">we've</span> <span m="2606360">done</span> <span
  m="2606560">is</span> <span m="2606650">we've</span> <span
  m="2606810">traded</span> <span m="2607310">a</span> <span
  m="2607440">single</span> <span m="2607920">differential</span> <span
  m="2608350">equation</span> <span m="2608830">for</span> <span
  m="2609020">an</span> <span m="2609200">infinite</span> <span
  m="2609550">number</span> <span m="2609770">of</span> <span
  m="2609840">differential</span> <span m="2610240">equations.</span> <span
  m="2611170">So</span> <span m="2611290">that's</span> <span
  m="2611970">a</span> <span m="2612020">bummer.</span> <span
  m="2613650">But</span> <span m="2614280">on</span> <span
  m="2614410">the</span> <span m="2614500">other</span> <span
  m="2614640">hand,</span> <span m="2615550">it</span> <span
  m="2615700">will</span> <span m="2615870">allow</span> <span
  m="2616210">us</span> <span m="2616350">to</span> <span m="2616420">do</span>
  <span m="2616720">the</span> <span m="2616820">full</span> <span
  m="2617170">stochastic</span> <span m="2617530">treatment.</span> <span
  m="2619830">And</span> <span m="2620010">it's</span> <span
  m="2620140">also</span> <span m="2620530">a</span> <span
  m="2620590">nice,</span> <span m="2621430">to</span> <span
  m="2621740">me,</span> <span m="2621860">the</span> <span
  m="2621960">master</span> <span m="2622210">equation</span> <span
  m="2622510">is</span> <span m="2622600">useful in</span> <span
  m="2622900">kind</span> <span m="2623070">of</span> <span
  m="2623120">two</span> <span m="2623280">ways.</span></p><p><span
  m="2623590">One</span> <span m="2623720">is</span> <span
  m="2623800">that</span> <span m="2624540">it's</span> <span
  m="2625320">going</span> <span m="2625400">to be a</span> <span
  m="2625570">tool</span> <span m="2625900">for</span> <span
  m="2626030">us</span> <span m="2626150">to</span> <span m="2626240">do</span>
  <span m="2626610">analytic</span> <span m="2627010">calculations.</span> <span
  m="2628110">But</span> <span m="2628130">it's</span> <span
  m="2628250">also</span> <span m="2629770">kind</span> <span
  m="2629880">of</span> <span m="2629950">a</span> <span
  m="2630010">principled</span> <span m="2630550">way</span> <span
  m="2631010">of</span> <span m="2631460">organizing</span> <span
  m="2631870">your</span> <span m="2632010">thoughts</span> <span m="2632390">so
  that</span> <span m="2632450">you can</span> <span m="2632680">go</span> <span
  m="2632890">and do</span> <span m="2633300">stochastic</span> <span
  m="2633770">simulations,</span> <span m="2634085">if</span> <span
  m="2634400">that's</span> <span m="2634570">what</span> <span
  m="2634660">you</span> <span m="2634730">want</span> <span
  m="2634830">to</span> <span m="2634870">do.</span> <span m="2635860">So</span>
  <span m="2636530">it's</span> <span m="2636720">also</span> <span
  m="2636950">just</span> <span m="2637120">kind</span> <span
  m="2637240">of</span> <span m="2637330">like</span> <span m="2637510">a</span>
  <span m="2637620">weigh</span> <span m="2637840">station</span> <span
  m="2638240">to kind</span> <span m="2638370">of</span> <span
  m="2638440">help</span> <span m="2638690">you</span> <span
  m="2639130">set</span> <span m="2639420">up</span> <span
  m="2640070">your</span> <span m="2640690">simulation.</span></p><p><span
  m="2656290">So</span> <span m="2656410">what</span> <span
  m="2656510">we're</span> <span m="2656640">going</span> <span
  m="2656720">to</span> <span m="2656770">do</span> <span m="2656940">is</span>
  <span m="2657050">we're</span> <span m="2657170">going</span> <span
  m="2657260">to</span> <span m="2657620">ask</span> <span
  m="2659190">about</span> <span m="2659490">the</span> <span
  m="2659580">general</span> <span m="2660050">way</span> <span
  m="2660260">that</span> <span m="2660490">this</span> <span
  m="2660680">thing</span> <span m="2661060">is</span> <span
  m="2661270">going</span> <span m="2661390">to</span> <span
  m="2662180">move</span> <span m="2662440">between</span> <span
  m="2662700">different</span> <span m="2662930">states.</span> <span
  m="2663240">In</span> <span m="2663320">particular,</span> <span
  m="2664180">we</span> <span m="2665350">are</span> <span
  m="2665470">going</span> <span m="2665560">to</span> <span
  m="2665610">have</span> <span m="2666390">some</span> <span
  m="2666880">general</span> <span m="2667240">state</span> <span
  m="2668250">in</span> <span m="2668390">here.</span> <span
  m="2669950">Mn,</span> <span m="2672320">which</span> <span
  m="2672380">can</span> <span m="2672520">go</span> <span
  m="2672680">forward</span> <span m="2673460">or</span> <span
  m="2673580">back,</span> <span m="2674670">Mn</span> <span
  m="2674840">plus</span> <span m="2675070">1.</span></p><p><span
  m="2687060">Now</span> <span m="2687420">what</span> <span
  m="2687720">we</span> <span m="2687810">want</span> <span
  m="2687940">to</span> <span m="2687990">do</span> <span m="2688150">is</span>
  <span m="2688290">think</span> <span m="2688440">about</span> <span
  m="2689345">how</span> <span m="2689780">those</span> <span
  m="2690030">probabilities</span> <span m="2690700">are</span> <span
  m="2690750">going</span> <span m="2690840">to</span> <span
  m="2690900">change</span> <span m="2691330">over</span> <span
  m="2691510">time.</span> <span m="2693970">So</span> <span
  m="2694610">we</span> <span m="2694780">typically</span> <span
  m="2695250">have</span> <span m="2695530">fn.</span> <span
  m="2697640">So</span> <span m="2697790">this</span> <span
  m="2697950">is</span> <span m="2698740">often</span> <span
  m="2699030">written</span> <span m="2699250">as</span> <span
  m="2699360">an</span> <span m="2699792">fn</span> <span m="2701088">and</span>
  <span m="2701520">fn</span> <span m="2702420">minus</span> <span
  m="2702770">1.</span> <span m="2704040">And</span> <span
  m="2704230">then</span> <span m="2704600">this</span> <span
  m="2704910">is</span> <span m="2705525">a</span> <span m="2705920">g.</span>
  <span m="2706710">I</span> <span m="2707010">want</span> <span
  m="2707150">to</span> <span m="2707190">make</span> <span
  m="2707350">sure</span> <span m="2707510">I</span> <span
  m="2707540">get</span> <span m="2707730">the</span> <span
  m="2707820">n's</span> <span m="2708210">and</span> <span m="2708430">n
  minus</span> <span m="2708670">ones</span> <span m="2709040">correct</span>
  <span m="2709380">here.</span></p><p><span m="2713030">Typically we</span>
  <span m="2713500">write</span> <span m="2713690">gm</span> <span
  m="2714120">plus</span> <span m="2714430">1,</span> <span
  m="2716340">gn.</span> <span m="2717890">So</span> <span
  m="2718130">these</span> <span m="2718410">are</span> <span
  m="2718460">telling</span> <span m="2718670">us</span> <span
  m="2718770">about</span> <span m="2718960">the</span> <span
  m="2719120">rates</span> <span m="2721205">of</span> <span
  m="2721550">being</span> <span m="2722220">in</span> <span
  m="2722370">this</span> <span m="2722560">state,</span> <span
  m="2722910">with</span> <span m="2723290">say,</span> <span
  m="2723580">n</span> <span m="2723920">mRNAs,</span> <span
  m="2725060">as</span> <span m="2725350">compared</span> <span
  m="2725880">to</span> <span m="2726040">going</span> <span
  m="2726310">here.</span> <span m="2727190">We're</span> <span
  m="2727290">going</span> <span m="2727350">here.</span> <span
  m="2728860">So</span> <span m="2728990">then</span> <span
  m="2729250">what</span> <span m="2729350">we can</span> <span
  m="2729510">do</span> <span m="2729580">is</span> <span m="2729660">we</span>
  <span m="2729730">can</span> <span m="2729940">write</span> <span
  m="2731260">the</span> <span m="2731380">change</span> <span
  m="2732970">in</span> <span m="2733640">the</span> <span
  m="2733820">probability</span> <span m="2735940">of</span> <span
  m="2737320">mn</span> <span m="2739280">with</span> <span
  m="2739410">respect</span> <span m="2739750">to</span> <span
  m="2739800">time.</span></p><p><span m="2741560">Well</span> <span
  m="2742410">there are</span> <span m="2742790">just</span> <span
  m="2742960">a</span> <span m="2743000">few</span> <span
  m="2743180">different</span> <span m="2743420">ways</span> <span
  m="2743750">that</span> <span m="2743860">the</span> <span
  m="2743950">probability</span> <span m="2744840">can</span> <span
  m="2744970">change.</span> <span m="2745890">So</span> <span
  m="2746070">we</span> <span m="2746210">can</span> <span
  m="2746600">leave</span> <span m="2747040">the</span> <span
  m="2747220">state</span> <span m="2747560">in</span> <span
  m="2747660">two</span> <span m="2747780">different</span> <span
  m="2748000">ways.</span> <span m="2749280">fn,</span> <span
  m="2751610">gn.</span> <span m="2755210">So</span> <span
  m="2755830">the</span> <span m="2756320">way</span> <span
  m="2756470">that</span> <span m="2757280">we</span> <span
  m="2757480">lose</span> <span m="2757860">the</span> <span
  m="2757950">probability</span> <span m="2758460">is</span> <span
  m="2758630">that</span> <span m="2758830">we</span> <span
  m="2758980">have</span> <span m="2759900">fn</span> <span
  m="2760880">plus</span> <span m="2761270">gn</span> <span
  m="2762390">times</span> <span m="2763030">the</span> <span
  m="2763130">probability</span> <span m="2763840">that</span> <span
  m="2764020">we</span> <span m="2764160">are</span> <span m="2764330">in</span>
  <span m="2764560">mn.</span> <span m="2766426">That's an</span> <span
  m="2766830">n</span> <span m="2767120">there.</span></p><p><span
  m="2768660">And</span> <span m="2768750">then</span> <span
  m="2768880">there</span> <span m="2769180">are going</span> <span
  m="2769350">to be</span> <span m="2769450">two</span> <span
  m="2769630">ways</span> <span m="2769910">that</span> <span
  m="2769980">we</span> <span m="2770290">gain</span> <span
  m="2770550">probability.</span> <span m="2771660">We can</span> <span
  m="2771810">gain</span> <span m="2772140">probably</span> <span
  m="2772550">from</span> <span m="2772720">the</span> <span
  m="2772820">mn</span> <span m="2773340">minus</span> <span
  m="2773610">1.</span> <span m="2774260">So</span> <span
  m="2774370">this</span> <span m="2774550">is</span> <span
  m="2774740">fn</span> <span m="2775680">minus</span> <span
  m="2775980">1,</span> <span m="2779210">plus</span> <span m="2780640">we
  can</span> <span m="2780760">get</span> <span m="2781020">probability</span>
  <span m="2781450">from</span> <span m="2781630">the</span> <span
  m="2781750">upper</span> <span m="2782100">state.</span> <span
  m="2782960">That's</span> <span m="2783210">a</span> <span
  m="2783320">gn</span> <span m="2783810">plus</span> <span m="2784060">1</span>
  <span m="2786400">mn</span> <span m="2787660">plus</span> <span
  m="2788080">1.</span> <span m="2790440">So</span> <span
  m="2790550">this</span> <span m="2790670">is</span> <span
  m="2790810">just</span> <span m="2790980">saying</span> <span
  m="2791340">that</span> <span m="2791910">the</span> <span
  m="2792010">change</span> <span m="2792520">in</span> <span
  m="2792630">the</span> <span m="2792750">probability</span> <span
  m="2793590">of</span> <span m="2793730">being</span> <span
  m="2794020">in</span> <span m="2794110">this</span> <span
  m="2794280">state</span> <span m="2794800">is</span> <span m="2795120">going
  to</span> <span m="2795260">be</span> <span m="2795350">given</span> <span
  m="2795630">by</span> <span m="2795890">the</span> <span
  m="2796010">probability</span> <span m="2796470">that we</span> <span
  m="2796610">leave</span> <span m="2796780">the</span> <span
  m="2796840">state.</span> <span m="2798290">Sorry.</span> <span
  m="2798560">The probability</span> <span m="2798970">that</span> <span
  m="2799550">we</span> <span m="2800280">enter</span> <span
  m="2800400">the</span> <span m="2800580">state,</span> <span m="2800710">minus
  the</span> <span m="2800980">probability</span> <span m="2801270">that
  we're</span> <span m="2801570">leaving the</span> <span
  m="2801840">state,</span> <span m="2803610">kind</span> <span
  m="2803750">of</span> <span m="2803810">the</span> <span
  m="2803890">rates.</span></p><p><span m="2806200">Now</span> <span
  m="2807160">this</span> <span m="2807390">is</span> <span
  m="2807510">going</span> <span m="2807620">to</span> <span
  m="2807660">be</span> <span m="2807740">true</span> <span
  m="2807950">for</span> <span m="2808070">all</span> <span
  m="2808250">n,</span> <span m="2808570">except</span> <span
  m="2808650">for</span> <span m="2808930">n</span> <span
  m="2809770">equal</span> <span m="2810010">to</span> <span
  m="2810070">zero,</span> <span m="2810470">we</span> <span
  m="2810570">don't</span> <span m="2810730">have</span> <span
  m="2811220">the</span> <span m="2811540">terms</span> <span
  m="2812120">over</span> <span m="2812280">on</span> <span
  m="2812370">the</span> <span m="2812450">left.</span> <span
  m="2814330">So</span> <span m="2816038">this</span> <span
  m="2816440">is</span> <span m="2816540">kind</span> <span
  m="2816660">of</span> <span m="2816740">for</span> <span
  m="2817260">all</span> <span m="2817460">n.</span> <span m="2818170">So</span>
  <span m="2818260">this</span> <span m="2818440">is,</span> <span
  m="2818980">in</span> <span m="2819060">particular</span> <span
  m="2819380">this</span> <span m="2819540">is</span> <span
  m="2819790">for</span> <span m="2820080">n,</span> <span
  m="2820630">basically</span> <span m="2820900">0</span> <span
  m="2821370">on</span> <span m="2821520">up</span> <span m="2821660">to</span>
  <span m="2821750">infinity.</span> <span m="2823250">So</span> <span
  m="2823520">this</span> <span m="2823770">is</span> <span m="2823940">a</span>
  <span m="2824040">differential</span> <span m="2824510">equation</span> <span
  m="2824930">for</span> <span m="2825030">the</span> <span
  m="2825130">probability</span> <span m="2826480">for</span> <span
  m="2826540">having</span> <span m="2826790">an</span> <span
  m="2827010">mRNA.</span> <span m="2827700">But</span> <span
  m="2828180">this</span> <span m="2828500">is,</span> <span
  m="2829240">we</span> <span m="2829490">have to have</span> <span
  m="2829590">a</span> <span m="2829660">different</span> <span
  m="2830150">equation</span> <span m="2830540">for</span> <span
  m="2830680">each</span> <span m="2831100">n,</span> <span
  m="2831790">0,</span> <span m="2832090">1,</span> <span m="2832230">2,</span>
  <span m="2832340">3,</span> <span m="2832500">4,</span> <span
  m="2832690">5</span> <span m="2833115">on</span> <span
  m="2833540">up.</span></p><p><span m="2836510">So</span> <span
  m="2837550">this</span> <span m="2837730">is</span> <span
  m="2837770">what</span> <span m="2837880">I</span> <span
  m="2837910">mean</span> <span m="2838120">by</span> <span
  m="2838920">converting</span> <span m="2839780">single</span> <span
  m="2840540">differential</span> <span m="2840890">equation,</span> <span
  m="2841400">which</span> <span m="2841600">is</span> <span
  m="2841690">actually</span> <span m="2843330">an</span> <span
  m="2843530">exceedingly</span> <span m="2843840">simple</span> <span
  m="2844150">one,</span> <span m="2844640">for</span> <span
  m="2844780">one</span> <span m="2844990">that</span> <span
  m="2845160">is</span> <span m="2845550">for</span> <span m="2845770">an</span>
  <span m="2845880">infinite</span> <span m="2846240">set.</span> <span
  m="2846530">And each</span> <span m="2846720">one</span> <span
  m="2846960">is</span> <span m="2847070">even</span> <span m="2847440">a</span>
  <span m="2847520">little</span> <span m="2847670">bit</span> <span
  m="2847750">more</span> <span m="2847900">complicated.</span> <span
  m="2848460">In</span> <span m="2848640">general,</span> <span
  m="2849200">these</span> <span m="2849260">f's and</span> <span
  m="2849940">n's</span> <span m="2851650">can</span> <span
  m="2851790">be</span> <span m="2851900">pretty</span> <span
  m="2852080">complicated.</span> <span m="2853400">In</span> <span
  m="2853690">this</span> <span m="2853840">situation</span> <span
  m="2855550">they're</span> <span m="2855730">not so</span> <span
  m="2855930">bad.</span></p><p><span m="2857450">But</span> <span
  m="2858280">let's</span> <span m="2858670">make</span> <span
  m="2858830">sure.</span> <span m="2860520">Can</span> <span
  m="2860620">somebody</span> <span m="2861010">say</span> <span
  m="2861310">what</span> <span m="2861570">fn</span> <span
  m="2862590">and</span> <span m="2863480">gn</span> <span
  m="2863930">are</span> <span m="2863990">equal</span> <span
  m="2864170">to?</span> <span m="2871830">Any</span> <span
  m="2873010">volunteers?</span></p><p><span m="2874144">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2876000">PROFESSOR: Right</span> <span
  m="2876360">so</span> <span m="2876910">fn,</span> <span
  m="2878510">this</span> <span m="2878670">is</span> <span
  m="2878840">rate</span> <span m="2879220">that we</span> <span
  m="2879600">add</span> <span m="2880130">a</span> <span m="2880210">new</span>
  <span m="2880440">mRNA.</span> <span m="2880670">Well</span> <span
  m="2880780">that's</span> <span m="2881000">just</span> <span
  m="2882240">synthesis</span> <span m="2882740">rate</span> <span
  m="2883030">for</span> <span m="2883230">mRNA.</span> <span
  m="2884450">And</span> <span m="2884620">this</span> <span m="2884810">guy
  is</span> <span m="2885130">what?</span></p><p><span
  m="2886774">AUDIENCE:</span> <span m="2886988">Delta.</span></p><p><span
  m="2888760">PROFESSOR: So</span> <span m="2888820">this</span> <span
  m="2888970">is</span> <span m="2889070">degradation</span> <span
  m="2889560">rate.</span> <span m="2890310">And</span> <span
  m="2890460">we</span> <span m="2890540">actually</span> <span
  m="2890760">do</span> <span m="2890950">have</span> <span
  m="2891080">to</span> <span m="2891160">multiply</span> <span
  m="2891640">still</span> <span m="2892050">by</span> <span
  m="2892940">the</span> <span m="2893120">number</span> <span
  m="2894140">n.</span> <span m="2898720">And</span> <span
  m="2898740">that's</span> <span m="2898890">because</span> <span
  m="2899130">as</span> <span m="2899360">we</span> <span m="2899510">go</span>
  <span m="2900250">further</span> <span m="2900880">out</span> <span
  m="2901120">here</span> <span m="2901300">to</span> <span
  m="2901370">the</span> <span m="2901480">right,</span> <span
  m="2902100">then</span> <span m="2902290">it</span> <span
  m="2902390">is</span> <span m="2902520">true.</span> <span
  m="2903540">The</span> <span m="2903820">rate</span> <span
  m="2904070">at</span> <span m="2904130">which</span> <span
  m="2904290">we</span> <span m="2904500">come</span> <span
  m="2904710">back</span> <span m="2905020">to the</span> <span
  m="2905090">left</span> <span m="2905350">is</span> <span
  m="2905420">increasing.</span> <span m="2906140">Because</span> <span
  m="2906330">there's</span> <span m="2906630">just more</span> <span
  m="2907600">mRNA</span> <span m="2907970">that</span> <span
  m="2908050">can</span> <span m="2908160">be</span> <span
  m="2908250">degraded.</span></p><p><span m="2912010">Now</span> <span
  m="2913390">it's</span> <span m="2913570">worth</span> <span
  m="2914020">saying</span> <span m="2914490">that</span> <span
  m="2915450">you</span> <span m="2915650">can,</span> <span
  m="2916060">for</span> <span m="2916110">example,</span> <span
  m="2917220">use</span> <span m="2917540">this</span> <span
  m="2917780">to</span> <span m="2917890">simulate</span> <span
  m="2918360">the</span> <span m="2918450">probability</span> <span
  m="2918910">distribution</span> <span m="2919880">if</span> <span
  m="2920000">you</span> <span m="2920110">start</span> <span
  m="2920530">from</span> <span m="2920750">any</span> <span
  m="2921040">distribution</span> <span m="2921490">you</span> <span
  m="2921590">like.</span> <span m="2921850">So</span> <span
  m="2921950">for</span> <span m="2922030">example,</span> <span
  m="2922290">you</span> <span m="2922380">could</span> <span
  m="2922510">start</span> <span m="2923130">M0</span> <span
  m="2923630">equal</span> <span m="2923810">to</span> <span
  m="2923890">1.</span> <span m="2924370">And</span> <span
  m="2924530">then</span> <span m="2924720">just</span> <span
  m="2924910">simulate</span> <span m="2925780">how</span> <span
  m="2926280">the</span> <span m="2926390">probability</span> <span
  m="2927970">recalibrates</span> <span m="2928210">and</span> <span
  m="2928810">comes</span> <span m="2929700">over</span> <span
  m="2929880">here.</span> <span m="2930740">Similarly,</span> <span
  m="2931450">you</span> <span m="2931540">could</span> <span
  m="2931660">do</span> <span m="2931810">it</span> <span
  m="2932070">over</span> <span m="2932190">here.</span> <span
  m="2932340">You</span> <span m="2932440">could</span> <span
  m="2932530">start</span> <span m="2932710">with any</span> <span
  m="2932900">probability</span> <span m="2933590">distribution</span> <span
  m="2934030">you</span> <span m="2934120">want.</span> <span
  m="2934590">And</span> <span m="2934750">you</span> <span
  m="2934850">could</span> <span m="2935260">use</span> <span
  m="2935580">this</span> <span m="2935770">as</span> <span m="2935880">a</span>
  <span m="2935930">framework</span> <span m="2936390">to</span> <span
  m="2936480">calculate</span> <span m="2937280">what</span> <span
  m="2937440">the</span> <span m="2937520">probability</span> <span
  m="2937920">distribution</span> <span m="2938360">will</span> <span
  m="2938500">be</span> <span m="2938690">at</span> <span m="2938770">any</span>
  <span m="2938960">time</span> <span m="2939220">later.</span></p><p><span
  m="2943600">But</span> <span m="2943760">you</span> <span
  m="2943860">can</span> <span m="2943970">also</span> <span
  m="2944270">use</span> <span m="2944500">this</span> <span
  m="2944790">just</span> <span m="2944990">as</span> <span m="2945100">a</span>
  <span m="2945160">way</span> <span m="2945460">of</span> <span
  m="2946840">figuring</span> <span m="2947200">out</span> <span
  m="2948132">what</span> <span m="2948604">the</span> <span
  m="2949076">equilibrium</span> <span m="2949550">distribution</span> <span
  m="2949970">is going</span> <span m="2950110">to be.</span> <span
  m="2950450">Because</span> <span m="2950910">at</span> <span
  m="2951150">equilibrium,</span> <span m="2952920">we</span> <span
  m="2953060">can</span> <span m="2953150">just</span> <span
  m="2953370">ask,</span> <span m="2954040">for</span> <span
  m="2954140">each</span> <span m="2954320">one</span> <span
  m="2954510">of</span> <span m="2954590">these</span> <span
  m="2955060">arrows,</span> <span m="2955930">the</span> <span
  m="2956220">probability</span> <span m="2956740">of</span> <span
  m="2956860">moving</span> <span m="2957070">to</span> <span
  m="2957120">the</span> <span m="2957180">right</span> <span m="2957490">has to
  be</span> <span m="2957710">equal to the</span> <span
  m="2957830">probability</span> <span m="2958250">of moving to</span> <span
  m="2958430">the left,</span> <span m="2958760">otherwise</span> <span
  m="2959070">we</span> <span m="2959170">wouldn't</span> <span
  m="2959420">be</span> <span m="2959490">at</span> <span
  m="2959560">equilibrium.</span> <span m="2961070">And</span> <span
  m="2961350">that's</span> <span m="2961530">true</span> <span
  m="2961720">for</span> <span m="2961860">every</span> <span
  m="2962120">one</span> <span m="2962350">of</span> <span
  m="2962440">these</span> <span m="2962660">kinds</span> <span
  m="2962840">of</span> <span m="2962930">pairs</span> <span
  m="2963290">of</span> <span m="2963746">arrows.</span></p><p><span
  m="2967400">And</span> <span m="2968440">in</span> <span
  m="2968520">particular,</span> <span m="2969140">what</span> <span
  m="2969200">we</span> <span m="2969310">can</span> <span
  m="2971580">get,</span> <span m="2972090">and</span> <span
  m="2972250">I</span> <span m="2972280">want</span> <span m="2972430">to</span>
  <span m="2972470">make</span> <span m="2972590">sure</span> <span
  m="2972780">that--</span> <span m="2974180">so but</span> <span
  m="2974440">it's not</span> <span m="2974670">that</span> <span
  m="2974870">fn</span> <span m="2975310">is</span> <span
  m="2975410">equal</span> <span m="2975560">to</span> <span
  m="2976840">gn--</span> <span m="2984340">so</span> <span
  m="2984540">it's</span> <span m="2984700">really</span> <span
  m="2985010">going</span> <span m="2985100">to</span> <span
  m="2985140">end</span> <span m="2985250">up</span> <span
  m="2985360">being</span> <span m="2985620">that</span> <span
  m="2985870">if</span> <span m="2986030">you</span> <span
  m="2986190">see</span> <span m="2986360">what</span> <span
  m="2986540">fn</span> <span m="2986710">and</span> <span
  m="2987090">gn,</span> <span m="2987600">so that</span> <span
  m="2987840">fn</span> <span m="2989430">is</span> <span
  m="2989570">going</span> <span m="2989680">to</span> <span
  m="2989790">have</span> <span m="2989970">to</span> <span
  m="2990040">be</span> <span m="2990090">equal</span> <span
  m="2990280">to</span> <span m="2991080">g</span> <span m="2991610">of</span>
  <span m="2991720">n</span> <span m="2991950">plus</span> <span
  m="2992270">1</span> <span m="2996680">for</span> <span m="2996850">all</span>
  <span m="2997090">n.</span> <span m="2997350">Yes?</span></p><p><span
  m="2998320">AUDIENCE: Do you</span> <span m="2998805">also</span> <span
  m="2999290">need to</span> <span m="2999775">multiply</span> <span
  m="3000260">like</span> <span m="3000745">natural</span> <span
  m="3001230">probabilities--</span></p><p><span m="3001715">PROFESSOR:
  Ah,</span> <span m="3002690">Yes,</span> <span m="3003290">yes,</span> <span
  m="3004810">indeed.</span> <span m="3005860">So</span> <span
  m="3006030">that</span> <span m="3006310">sorry,</span> <span
  m="3007720">times</span> <span m="3008130">mn</span> <span
  m="3008840">times</span> <span m="3009670">m</span> <span
  m="3010105">of</span> <span m="3010540">n plus</span> <span
  m="3010760">1.</span> <span m="3014870">So</span> <span
  m="3015030">it's</span> <span m="3015970">the</span> <span
  m="3016320">kind</span> <span m="3016450">of</span> <span
  m="3016540">probably</span> <span m="3016870">flux</span> <span
  m="3017220">so</span> <span m="3017310">we</span> <span
  m="3017390">have</span> <span m="3017520">to</span> <span
  m="3017650">equalize.</span></p><p><span m="3019700">So</span> <span
  m="3019760">this</span> <span m="3019920">is</span> <span
  m="3020020">nice</span> <span m="3020240">because</span> <span
  m="3020380">this</span> <span m="3020610">gives</span> <span
  m="3020820">us</span> <span m="3021170">a</span> <span
  m="3021330">ratio</span> <span m="3022760">of</span> <span
  m="3022970">things.</span> <span m="3023780">In</span> <span
  m="3023860">particular,</span> <span m="3024820">this</span> <span
  m="3025010">tells</span> <span m="3025220">us</span> <span
  m="3025410">that</span> <span m="3025600">the</span> <span
  m="3025930">probability</span> <span m="3026440">of</span> <span
  m="3026540">being</span> <span m="3026750">in</span> <span
  m="3026810">the</span> <span m="3026910">n</span> <span
  m="3027110">plus</span> <span m="3027460">1</span> <span
  m="3028350">divided</span> <span m="3028610">by</span> <span
  m="3028690">the</span> <span m="3028790">probability</span> <span
  m="3029190">of</span> <span m="3029270">being</span> <span
  m="3029550">n,</span> <span m="3029810">and</span> <span
  m="3030370">this</span> <span m="3030740">is</span> <span
  m="3031090">at</span> <span m="3031300">equilibrium.</span> <span
  m="3036330">Is</span> <span m="3036760">going</span> <span
  m="3037020">to</span> <span m="3037110">be</span> <span m="3039390">fn</span>
  <span m="3040340">divided</span> <span m="3040670">by</span> <span
  m="3041650">gn</span> <span m="3042040">plus</span> <span
  m="3042310">1.</span> <span m="3044130">Which</span> <span
  m="3044380">is</span> <span m="3044580">this</span> <span
  m="3044690">synthesis</span> <span m="3045380">rate.</span> <span
  m="3046830">And</span> <span m="3046980">then</span> <span
  m="3047160">down</span> <span m="3047410">here</span> <span
  m="3047790">is</span> <span m="3047910">going</span> <span
  m="3048010">to</span> <span m="3048050">be</span> <span
  m="3048150">this</span> <span m="3048480">degradation</span> <span
  m="3049050">rate</span> <span m="3049710">times,</span> <span
  m="3051520">in</span> <span m="3051610">this</span> <span
  m="3051770">case,</span> <span m="3052030">n</span> <span
  m="3052370">plus</span> <span m="3052800">1.</span></p><p><span
  m="3060300">So</span> <span m="3060380">this</span> <span
  m="3060530">is</span> <span m="3060610">useful.</span> <span
  m="3061430">Because</span> <span m="3061880">for</span> <span
  m="3062020">example,</span> <span m="3063420">if</span> <span
  m="3063560">we</span> <span m="3063670">start</span> <span
  m="3064020">at</span> <span m="3064240">m,</span> <span m="3064790">we</span>
  <span m="3065000">could</span> <span m="3065100">say</span> <span
  m="3065220">that</span> <span m="3066090">m1</span> <span
  m="3067710">over</span> <span m="3067950">m0--</span> <span
  m="3070590">well</span> <span m="3070830">maybe</span> <span
  m="3071240">we'll</span> <span m="3071400">even</span> <span
  m="3072750">put</span> <span m="3072890">the</span> <span
  m="3072990">m0</span> <span m="3073340">over</span> <span
  m="3073530">on</span> <span m="3073830">the</span> <span
  m="3073900">right.</span> <span m="3077360">So</span> <span
  m="3077470">then</span> <span m="3077800">m1,</span> <span
  m="3078670">what</span> <span m="3078780">is</span> <span
  m="3078870">that</span> <span m="3079000">equal</span> <span
  m="3079160">to?</span> <span m="3079330">That's</span> <span
  m="3079610">going</span> <span m="3079730">to</span> <span
  m="3079800">be</span> <span m="3080790">synthesis</span> <span
  m="3081250">rate</span> <span m="3081430">divided</span> <span
  m="3081650">degradation</span> <span m="3081870">rate,</span> <span
  m="3085010">times</span> <span m="3085680">m0.</span></p><p><span
  m="3088010">But</span> <span m="3088130">then</span> <span
  m="3088330">we</span> <span m="3088430">also</span> <span
  m="3088670">know</span> <span m="3088940">that</span> <span
  m="3089550">m2,</span> <span m="3090970">well</span> <span
  m="3091200">that's</span> <span m="3091370">going</span> <span
  m="3091470">to</span> <span m="3091510">be</span> <span
  m="3091710">again,</span> <span m="3093420">synthesis</span> <span
  m="3094020">rate</span> <span m="3094470">divided</span> <span
  m="3094670">by</span> <span m="3094750">degradation</span> <span
  m="3095260">rate.</span> <span m="3095640">And we're</span> <span
  m="3095740">going</span> <span m="3095820">to</span> <span
  m="3095860">get</span> <span m="3095950">a</span> <span
  m="3096000">squared.</span> <span m="3096970">But</span> <span
  m="3097070">then</span> <span m="3097200">now</span> <span
  m="3097350">we</span> <span m="3097420">have</span> <span
  m="3097500">to</span> <span m="3097590">divide</span> <span
  m="3097930">by</span> <span m="3099260">1/2</span> <span
  m="3099820">times</span> <span m="3100140">m0.</span></p><p><span
  m="3102550">Continuing</span> <span m="3102970">on,</span> <span
  m="3103250">m3</span> <span m="3107480">we</span> <span m="3107590">get</span>
  <span m="3107790">Sm</span> <span m="3109190">over</span> <span
  m="3109390">delta</span> <span m="3109670">m</span> <span
  m="3110940">cubed,</span> <span m="3111600">divided</span> <span
  m="3111930">by</span> <span m="3112120">1</span> <span m="3112560">over</span>
  <span m="3113000">3</span> <span m="3113440">times</span> <span
  m="3114070">2</span> <span m="3115320">times</span> <span
  m="3115600">m0.</span> <span m="3118830">So</span> <span m="3119020">in</span>
  <span m="3119140">general,</span> <span m="3119810">we</span> <span
  m="3119920">get</span> <span m="3120360">the</span> <span
  m="3120570">probability</span> <span m="3121200">of</span> <span
  m="3121290">being</span> <span m="3121420">in</span> <span
  m="3121480">the</span> <span m="3121590">nth</span> <span
  m="3121770">state,</span> <span m="3123440">is</span> <span
  m="3123610">going</span> <span m="3123730">to</span> <span
  m="3123790">be</span> <span m="3124960">this</span> <span
  m="3125230">thing.</span> <span m="3125870">We'll</span> <span
  m="3126180">call</span> <span m="3126550">it</span> <span
  m="3126670">lambda</span> <span m="3127670">for</span> <span
  m="3127810">now.</span> <span m="3130480">Lambda</span> <span
  m="3130980">to</span> <span m="3131080">the</span> <span m="3131210">n,</span>
  <span m="3131540">divided</span> <span m="3131900">by</span> <span
  m="3132090">n</span> <span m="3132480">factorial,</span> <span
  m="3133400">times</span> <span m="3134120">m0.</span></p><p><span
  m="3139980">Now</span> <span m="3140370">what's</span> <span
  m="3140620">the--</span> <span m="3141860">and</span> <span
  m="3142170">I'll--</span> <span m="3142970">remember</span> <span
  m="3143630">lambda</span> <span m="3144030">here</span> <span
  m="3144280">we've</span> <span m="3145070">defined</span> <span
  m="3145230">it</span> <span m="3145590">to</span> <span m="3145670">be</span>
  <span m="3146710">the</span> <span m="3146820">ratio</span> <span
  m="3147170">Sm</span> <span m="3147350">over</span> <span
  m="3147530">delta</span> <span m="3147978">m.</span> <span
  m="3151120">Now</span> <span m="3151260">if</span> <span m="3151330">we</span>
  <span m="3151440">sum</span> <span m="3151860">over</span> <span
  m="3152160">all</span> <span m="3153060">these</span> <span
  m="3153240">probabilities,</span> <span m="3153840">what should</span> <span
  m="3153980">we</span> <span m="3154080">get?</span></p><p><span
  m="3155831">AUDIENCE: 1.</span></p><p><span m="3156300">PROFESSOR: 1.</span>
  <span m="3157460">Right,</span> <span m="3157580">if</span> <span
  m="3157670">we</span> <span m="3157760">sum</span> <span
  m="3158090">over</span> <span m="3158600">this</span> <span
  m="3159050">thing,</span> <span m="3161910">what</span> <span
  m="3161960">does</span> <span m="3162060">that</span> <span
  m="3162180">equal</span> <span m="3162390">to?</span> <span
  m="3165840">It's</span> <span m="3166210">what?</span></p><p><span
  m="3168200">AUDIENCE: Eta</span> <span m="3168680">lambda.</span></p><p><span
  m="3169640">PROFESSOR: Eta</span> <span m="3170120">lambda,</span> <span
  m="3170490">right?</span> <span m="3171100">So</span> <span
  m="3171730">just</span> <span m="3171940">remember</span> <span
  m="3172680">in</span> <span m="3172830">this</span> <span
  m="3172990">world--</span> <span m="3175880">the</span> <span
  m="3176040">sum</span> <span m="3176520">over</span> <span
  m="3177260">lambda</span> <span m="3177750">to</span> <span
  m="3177840">the</span> <span m="3178000">n,</span> <span m="3178966">n</span>
  <span m="3179450">factorial,</span> <span m="3180650">from</span> <span
  m="3180840">n</span> <span m="3181130">equal</span> <span
  m="3181430">to</span> <span m="3182110">0</span> <span m="3182500">to</span>
  <span m="3182640">infinity,</span> <span m="3183490">this</span> <span
  m="3183680">is</span> <span m="3183790">indeed</span> <span
  m="3184230">the</span> <span m="3184300">definition</span> <span
  m="3184840">of</span> <span m="3184980">e</span> <span m="3185210">to
  the</span> <span m="3185440">lambda.</span> <span m="3188420">So</span> <span
  m="3188560">what</span> <span m="3188680">that</span> <span
  m="3188770">means</span> <span m="3188990">is</span> <span
  m="3189090">that</span> <span m="3189830">the</span> <span
  m="3189910">normalization</span> <span m="3190610">condition</span> <span
  m="3191000">is that</span> <span m="3191110">m0</span> <span
  m="3191780">has</span> <span m="3192000">to</span> <span m="3192040">be</span>
  <span m="3192090">equal</span> <span m="3192270">to</span> <span
  m="3192350">e</span> <span m="3192560">to</span> <span m="3192650">the</span>
  <span m="3192720">minus</span> <span m="3192970">lambda,</span> <span
  m="3200130">which</span> <span m="3200300">is</span> <span
  m="3200410">indeed</span> <span m="3200730">a</span> <span
  m="3200800">Poisson</span> <span m="3201050">distribution.</span> <span
  m="3210548">I'll</span> <span m="3211050">raise</span> <span m="3211340">it
  up</span> <span m="3211836">a little bit.</span></p><p><span
  m="3216680">So</span> <span m="3216800">this</span> <span
  m="3216950">is</span> <span m="3217050">saying,</span> <span
  m="3217730">OK,</span> <span m="3217910">to</span> <span
  m="3218010">back</span> <span m="3218260">up.</span> <span
  m="3219160">If</span> <span m="3219260">we</span> <span
  m="3219340">just</span> <span m="3219570">have</span> <span
  m="3220470">constant</span> <span m="3220920">rate</span> <span
  m="3221090">of</span> <span m="3221170">creation</span> <span
  m="3221640">of</span> <span m="3221710">something,</span> <span
  m="3222390">constant</span> <span m="3222810">rate</span> <span
  m="3222950">of</span> <span m="3223040">degradation</span> <span
  m="3223860">of</span> <span m="3224000">that</span> <span
  m="3224220">thing,</span> <span m="3224910">on</span> <span
  m="3225070">a</span> <span m="3225120">per</span> <span
  m="3225600">item</span> <span m="3225890">basis,</span> <span
  m="3226750">per</span> <span m="3226900">unit</span> <span
  m="3227080">basis,</span> <span m="3227720">then</span> <span
  m="3227900">you</span> <span m="3227990">end</span> <span
  m="3228090">up</span> <span m="3228160">getting</span> <span
  m="3228330">a</span> <span m="3228410">Poisson</span> <span
  m="3228920">distribution,</span> <span m="3231050">at</span> <span
  m="3231370">equilibrium</span> <span m="3231870">for</span> <span
  m="3232460">the</span> <span m="3232570">number</span> <span
  m="3233330">of</span> <span m="3233530">that</span> <span
  m="3233730">thing,</span> <span m="3234760">in</span> <span
  m="3234890">this</span> <span m="3234990">case,</span> <span
  m="3235410">the</span> <span m="3235420">number</span> <span
  m="3235610">of</span> <span m="3235810">mRNA</span> <span m="3236310">in
  the</span> <span m="3236810">cell.</span></p><p><span
  m="3244310">Questions</span> <span m="3244820">about</span> <span
  m="3245070">why</span> <span m="3245220">that</span> <span
  m="3245380">is?</span> <span m="3245940">What</span> <span
  m="3246090">happened?</span> <span m="3247700">How</span> <span
  m="3247860">we</span> <span m="3247960">calculate</span> <span
  m="3248330">it?</span></p><p><span m="3251931">AUDIENCE: Could</span> <span
  m="3252404">you explain</span> <span m="3252877">why</span> <span
  m="3253350">[INAUDIBLE]?</span></p><p><span m="3257150">PROFESSOR:
  Sure.</span> <span m="3264440">So</span> <span m="3264600">this</span> <span
  m="3264870">is</span> <span m="3265040">basically</span> <span
  m="3267980">f</span> <span m="3268290">of</span> <span m="3268410">n.</span>
  <span m="3268810">And</span> <span m="3268940">this</span> <span
  m="3269100">is</span> <span m="3269250">basically</span> <span
  m="3270100">this</span> <span m="3270280">g</span> <span m="3270590">of</span>
  <span m="3270660">n.</span> <span m="3270850">But</span> <span
  m="3271980">remember</span> <span m="3272480">here</span> <span
  m="3273300">n</span> <span m="3273550">is</span> <span m="3273660">the</span>
  <span m="3273750">number</span> <span m="3274160">of</span> <span
  m="3274460">proteins</span> <span m="3275530">or</span> <span
  m="3275670">the</span> <span m="3275760">number</span> <span
  m="3275920">of</span> <span m="3275990">mRNA.</span> <span
  m="3277550">So</span> <span m="3277660">then</span> <span
  m="3277940">that's</span> <span m="3278740">in</span> <span
  m="3278920">the</span> <span m="3280600">context</span> <span
  m="3281200">of</span> <span m="3281330">the</span> <span
  m="3281390">master</span> <span m="3281650">equation,</span> <span
  m="3282480">then</span> <span m="3282770">m and</span> <span
  m="3282970">n</span> <span m="3283435">are there.</span> <span
  m="3283900">You</span> <span m="3284020">get</span> <span m="3284210">n</span>
  <span m="3284480">by</span> <span m="3284620">the</span> <span
  m="3284740">current</span> <span m="3285040">number</span> <span
  m="3285320">of</span> <span m="3285400">m.</span> <span m="3286640">Does
  that</span> <span m="3287060">make sense?</span> <span
  m="3291250">Yes?</span></p><p><span m="3293270">AUDIENCE: I'm</span> <span
  m="3293580">confused</span> <span m="3293890">how</span> <span
  m="3294347">you</span> <span m="3294804">changed</span> <span
  m="3296175">m0</span> <span m="3296632">to the</span> <span
  m="3297089">e</span> <span m="3297546">to the</span> <span
  m="3298003">minus</span> <span m="3298460">lambda.</span></p><p><span
  m="3298920">PROFESSOR: OK.</span> <span m="3300940">Well</span> <span
  m="3301130">let's</span> <span m="3301350">just</span> <span
  m="3301600">do</span> <span m="3301750">it.</span> <span m="3303130">So</span>
  <span m="3303470">mn,</span> <span m="3304000">this</span> <span
  m="3304150">is</span> <span m="3304280">the</span> <span
  m="3304370">probability</span> <span m="3305170">that</span> <span
  m="3305280">we</span> <span m="3305410">observe</span> <span
  m="3307680">n</span> <span m="3308280">mRNA.</span> <span
  m="3309890">And</span> <span m="3309980">we</span> <span
  m="3310100">know</span> <span m="3310340">that</span> <span
  m="3310480">the</span> <span m="3310560">sum</span> <span
  m="3312160">over</span> <span m="3312700">mn,</span> <span
  m="3313610">so</span> <span m="3313820">all</span> <span
  m="3313990">these</span> <span m="3314130">probabilities</span> <span
  m="3314950">from</span> <span m="3315130">n</span> <span
  m="3315330">equal</span> <span m="3315540">to</span> <span
  m="3315620">0</span> <span m="3315950">to</span> <span
  m="3316070">infinity,</span> <span m="3318335">has to</span> <span
  m="3318750">be</span> <span m="3318820">equal to</span> <span
  m="3318900">1.</span> <span m="3320410">Something</span> <span m="3320780">has
  to</span> <span m="3320920">happen.</span></p><p><span m="3322970">Well</span>
  <span m="3323120">let's</span> <span m="3323360">do</span> <span
  m="3323450">this</span> <span m="3323765">sum.</span> <span m="3324080">This
  is</span> <span m="3324210">equal</span> <span m="3324410">to</span> <span
  m="3325110">the</span> <span m="3325220">sum</span> <span
  m="3325985">of</span> <span m="3326250">lambda</span> <span
  m="3326760">to</span> <span m="3326860">the</span> <span m="3326980">n,</span>
  <span m="3327380">over</span> <span m="3327620">n</span> <span
  m="3328190">factorial</span> <span m="3329150">m0.</span> <span
  m="3332890">But</span> <span m="3333230">m0,</span> <span m="3335540">is
  this</span> <span m="3335780">a</span> <span m="3335840">function</span> <span
  m="3336120">of</span> <span m="3336180">n?</span> <span m="3339100">No.</span>
  <span m="3339690">m0</span> <span m="3340130">is</span> <span
  m="3340230">just,</span> <span m="3340690">this is</span> <span
  m="3340770">just</span> <span m="3340930">the</span> <span
  m="3341020">probability</span> <span m="3341890">at</span> <span
  m="3342020">equilibrium</span> <span m="3342480">that you have</span> <span
  m="3342740">0</span> <span m="3343270">mRNA.</span> <span
  m="3344410">So</span> <span m="3344490">we</span> <span m="3344590">can</span>
  <span m="3344670">just</span> <span m="3344860">pull</span> <span
  m="3345000">this</span> <span m="3345130">thing</span> <span
  m="3345250">out.</span> <span m="3346720">This</span> <span
  m="3346890">is</span> <span m="3346980">just</span> <span
  m="3347170">some</span> <span m="3347410">number,</span> <span
  m="3347810">some</span> <span m="3347960">probability.</span></p><p><span
  m="3354560">Now</span> <span m="3354690">the</span> <span
  m="3354750">statement</span> <span m="3355110">is</span> <span
  m="3355230">that</span> <span m="3355390">while</span> <span
  m="3356130">this</span> <span m="3356450">thing,</span> <span
  m="3356720">this</span> <span m="3356870">is</span> <span
  m="3357030">the</span> <span m="3357150">definition</span> <span
  m="3358740">of</span> <span m="3359000">e</span> <span m="3359170">to</span>
  <span m="3359290">the</span> <span m="3359400">lambda.</span> <span
  m="3363060">So</span> <span m="3363790">in</span> <span
  m="3363940">general,</span> <span m="3365370">so</span> <span m="3365590">e
  to</span> <span m="3365790">the</span> <span m="3365920">x</span> <span
  m="3366170">we</span> <span m="3366250">often</span> <span
  m="3366420">write</span> <span m="3366700">is</span> <span
  m="3366810">equal</span> <span m="3366970">to</span> <span
  m="3367080">1,</span> <span m="3368160">plus</span> <span
  m="3368510">x,</span> <span m="3369100">plus</span> <span m="3369430">x</span>
  <span m="3369710">squared</span> <span m="3370160">over</span> <span
  m="3370480">2,</span> <span m="3371110">plus</span> <span m="3372150">dot,
  dot,</span> <span m="3372250">dot.</span> <span m="3376190">So</span> <span
  m="3376310">this</span> <span m="3376550">thing</span> <span
  m="3376810">is</span> <span m="3377010">indeed</span> <span
  m="3377510">just</span> <span m="3377740">equal</span> <span m="3377870">e
  to</span> <span m="3378331">the</span> <span
  m="3378792">lambda.</span></p><p><span m="3380820">So what</span> <span
  m="3380970">we</span> <span m="3381070">know</span> <span
  m="3381340">is</span> <span m="3381460">that</span> <span
  m="3383370">this</span> <span m="3383660">is</span> <span
  m="3383750">still</span> <span m="3383850">1.</span> <span
  m="3384370">So</span> <span m="3385070">m0</span> <span m="3385750">times e to
  the</span> <span m="3386170">lambda,</span> <span m="3386570">is</span> <span
  m="3386670">equal</span> <span m="3386800">to</span> <span
  m="3386860">1,</span> <span m="3387150">so</span> <span m="3387440">m0</span>
  <span m="3387850">is</span> <span m="3388120">to the</span> <span
  m="3388618">minus</span> <span m="3389116">lambda.</span></p><p><span
  m="3395590">Any</span> <span m="3395780">other</span> <span
  m="3395940">questions</span> <span m="3396380">about</span> <span
  m="3396830">how</span> <span m="3397050">we</span> <span
  m="3397160">got</span> <span m="3397380">here?</span> <span
  m="3398750">What's</span> <span m="3398950">going</span> <span
  m="3399130">on?</span> <span m="3400182">Yes?</span></p><p><span
  m="3401598">AUDIENCE: The plot</span> <span m="3402070">of the</span> <span
  m="3403070">solution</span> <span m="3403570">to the</span> <span
  m="3404070">adjoining</span> <span m="3404570">equation,</span> <span
  m="3407070">that</span> <span m="3407565">would</span> <span
  m="3408060">be</span> <span m="3408555">like</span> <span
  m="3409050">the</span> <span m="3409545">mean value,</span> <span
  m="3410040">that would be</span> <span m="3410535">the behavior of</span>
  <span m="3411030">the mean</span> <span m="3411525">values?</span></p><p><span
  m="3412515">PROFESSOR: That</span> <span m="3413010">Is</span> <span
  m="3413210">the</span> <span m="3413450">expected</span> <span
  m="3414390">behavior</span> <span m="3414930">of</span> <span
  m="3415020">the</span> <span m="3415110">mean</span> <span
  m="3415330">value</span> <span m="3415700">over</span> <span
  m="3415840">time.</span> <span m="3417570">In</span> <span
  m="3417670">this</span> <span m="3417830">case,</span> <span
  m="3418220">fn</span> <span m="3418710">and gn</span> <span
  m="3419160">are</span> <span m="3419220">both</span> <span
  m="3419450">linear</span> <span m="3419980">functions</span> <span
  m="3420640">of</span> <span m="3420980">the</span> <span
  m="3421060">number</span> <span m="3421450">of the</span> <span
  m="3421520">mRNA.</span> <span m="3422140">Which</span> <span
  m="3422350">means</span> <span m="3422690">that</span> <span
  m="3424050">in</span> <span m="3424180">the</span> <span
  m="3424260">context</span> <span m="3424620">of</span> <span
  m="3424660">the</span> <span m="3424700">master</span> <span
  m="3425190">equation,</span> <span m="3425670">if</span> <span
  m="3425810">you</span> <span m="3426230">ask</span> <span
  m="3426600">about</span> <span m="3426880">the</span> <span
  m="3428160">expectation</span> <span m="3432432">of</span> <span
  m="3432810">mn,</span> <span m="3434590">this</span> <span
  m="3435630">quantity</span> <span m="3437040">is</span> <span
  m="3437250">indeed</span> <span m="3437800">equal</span> <span
  m="3438180">to--</span> <span m="3439110">it has</span> <span
  m="3439290">the</span> <span m="3439370">same</span> <span
  m="3439630">behavior</span> <span m="3440300">as,</span> <span
  m="3442310">over</span> <span m="3442530">time,</span> <span
  m="3444260">as</span> <span m="3444600">the</span> <span
  m="3445140">deterministic</span> <span
  m="3445590">equations.</span></p><p><span m="3448210">So</span> <span
  m="3448810">if</span> <span m="3449300">f</span> <span m="3449470">and</span>
  <span m="3450030">g</span> <span m="3450230">are</span> <span
  m="3450300">nonlinear,</span> <span m="3450770">then</span> <span
  m="3450890">actually</span> <span m="3451150">you</span> <span
  m="3451240">get</span> <span m="3451410">a</span> <span
  m="3451450">deviation.</span> <span m="3453420">But</span> <span
  m="3453630">in</span> <span m="3453740">this</span> <span
  m="3453920">case,</span> <span m="3454530">it</span> <span
  m="3454860">is</span> <span m="3454980">indeed</span> <span
  m="3455190">the</span> <span m="3455250">same.</span> <span
  m="3455750">What</span> <span m="3455920">it</span> <span
  m="3455980">means</span> <span m="3456250">that</span> <span
  m="3460226">if</span> <span m="3460720">you</span> <span
  m="3460820">compare</span> <span m="3461230">the</span> <span
  m="3461340">stochastic</span> <span m="3461940">and</span> <span
  m="3462030">the</span> <span m="3462100">deterministic</span> <span
  m="3462670">trajectories,</span> <span m="3463680">what</span> <span
  m="3463790">you would</span> <span m="3463980">see</span> <span
  m="3464160">is</span> <span m="3464300">that</span> <span
  m="3465560">this</span> <span m="3465720">thing</span> <span
  m="3465900">is</span> <span m="3466050">going</span> <span
  m="3466170">to</span> <span m="3466230">be</span> <span m="3466430">a</span>
  <span m="3466540">little</span> <span m="3466740">bit</span> <span
  m="3469300">jagged,</span> <span m="3469730">or</span> <span
  m="3469810">whatnot.</span> <span m="3471040">And</span> <span
  m="3471060">then</span> <span m="3471250">even</span> <span
  m="3471490">at</span> <span m="3471600">equilibrium</span> <span
  m="3472250">it's</span> <span m="3472420">going</span> <span
  m="3472520">to</span> <span m="3472580">come</span> <span
  m="3472750">up</span> <span m="3472850">and</span> <span
  m="3472930">down</span> <span m="3473170">a</span> <span
  m="3473210">little</span> <span m="3473400">bit.</span> <span
  m="3474380">I'm</span> <span m="3474470">trying</span> <span
  m="3474750">to</span> <span m="3474850">add</span> <span m="3474990">a</span>
  <span m="3475040">little</span> <span m="3475170">bit of</span> <span
  m="3475340">jaggedness</span> <span m="3475750">because</span> <span
  m="3475910">it's</span> <span m="3476100">discrete.</span></p><p><span
  m="3477870">But</span> <span m="3478970">the</span> <span
  m="3479250">deterministic</span> <span m="3479980">equation</span> <span
  m="3480330">here</span> <span m="3481230">is</span> <span
  m="3481400">what</span> <span m="3481520">you would</span> <span
  m="3481660">get</span> <span m="3481980">if</span> <span
  m="3482110">you</span> <span m="3482300">average</span> <span
  m="3482760">together</span> <span m="3483630">an</span> <span
  m="3483810">infinite</span> <span m="3484190">number</span> <span
  m="3484510">of</span> <span m="3484580">these</span> <span
  m="3484720">stochastic</span> <span m="3485380">trajectories.</span> <span
  m="3487830">Because</span> <span m="3487960">another</span> <span
  m="3488250">one</span> <span m="3488430">might</span> <span
  m="3488610">have</span> <span m="3488710">come</span> <span
  m="3488880">down</span> <span m="3489160">here.</span> <span
  m="3493200">Does</span> <span m="3493330">that</span> <span
  m="3493550">answer?</span></p><p><span m="3495938">AUDIENCE: Is</span> <span
  m="3496410">m</span> <span m="3496882">playing</span> <span
  m="3497354">a</span> <span m="3497826">double</span> <span
  m="3498298">role?</span> <span m="3498770">Like in that</span> <span
  m="3499242">deterministic</span> <span m="3499714">equation,</span> <span
  m="3500186">m is</span> <span m="3500660">the concentration</span> <span
  m="3501030">of</span> <span m="3501423">mRNA?</span></p><p><span
  m="3502210">PROFESSOR: I</span> <span m="3502340">think</span> <span
  m="3502550">that</span> <span m="3502670">I'm--</span> <span
  m="3504000">yeah</span> <span m="3504470">I</span> <span
  m="3504540">think</span> <span m="3504710">that</span> <span
  m="3504820">I</span> <span m="3504910">should--</span> <span
  m="3505410">my</span> <span m="3505550">nomenclature</span> <span
  m="3506170">I</span> <span m="3506210">think</span> <span
  m="3506350">was</span> <span m="3506470">not</span> <span
  m="3506670">very</span> <span m="3506860">good.</span> <span
  m="3507320">I've</span> <span m="3507510">used</span> <span
  m="3507760">two</span> <span m="3507880">different</span> <span
  m="3508100">things.</span> <span m="3509360">And</span> <span
  m="3509740">now</span> <span m="3510000">that</span> <span
  m="3510100">I'm</span> <span m="3510200">doing</span> <span
  m="3510470">this,</span> <span m="3510660">I</span> <span
  m="3510700">think</span> <span m="3510880">that</span> <span
  m="3511020">I</span> <span m="3511410">should</span> <span
  m="3511590">have--</span> <span m="3513880">I</span> <span m="3514560">should
  have</span> <span m="3514700">just</span> <span m="3514860">called</span>
  <span m="3515050">it</span> <span m="3515190">p</span> <span
  m="3515480">of</span> <span m="3516526">n,</span> <span m="3516980">or</span>
  <span m="3517630">maybe</span> <span m="3517790">I</span> <span
  m="3517820">should've</span> <span m="3518220">used</span> <span
  m="3518470">n</span> <span m="3518650">here.</span> <span m="3525590">I</span>
  <span m="3525750">think</span> <span m="3525960">I</span> <span
  m="3525990">was</span> <span m="3526090">trying</span> <span
  m="3526340">to</span> <span m="3526640">be</span> <span m="3526730">consistent
  with</span> <span m="3526820">some</span> <span m="3526930">of</span> <span
  m="3526980">the</span> <span m="3527070">previous,</span> <span
  m="3527750">but</span> <span m="3528310">I think</span> <span m="3528600">it
  was</span> <span m="3528820">a</span> <span m="3528860">mistake.</span> <span
  m="3532460">Yes?</span></p><p><span m="3535025">AUDIENCE:</span> <span
  m="3535267">Are you plotting stochastic?</span></p><p><span
  m="3538820">PROFESSOR: I'm</span> <span m="3539040">plotting--</span> <span
  m="3542660">OK,</span> <span m="3543520">so</span> <span
  m="3544260">no,</span> <span m="3544670">I'm</span> <span
  m="3544840">not.</span> <span m="3545720">So</span> <span
  m="3545860">this</span> <span m="3546160">is</span> <span
  m="3546730">if</span> <span m="3546880">you</span> <span
  m="3547020">run</span> <span m="3547260">an</span> <span
  m="3547430">actual</span> <span m="3549800">stochastic</span> <span
  m="3550400">trajectory.</span> <span m="3551450">Then</span> <span
  m="3551960">at</span> <span m="3552090">any</span> <span m="3552300">moment
  in</span> <span m="3552630">time,</span> <span m="3552840">you</span> <span
  m="3552970">just</span> <span m="3553180">have</span> <span
  m="3553460">one--</span> <span m="3554620">there's</span> <span
  m="3554770">some</span> <span m="3555060">number</span> <span
  m="3555390">of</span> <span m="3555540">mRNA.</span> <span
  m="3556830">Whereas</span> <span m="3557790">the</span> <span
  m="3558190">sum</span> <span m="3558450">over</span> <span
  m="3558560">the</span> <span m="3558750">mn's,</span> <span
  m="3559155">this</span> <span m="3559410">is</span> <span
  m="3559510">talking</span> <span m="3559680">about</span> <span
  m="3559820">the</span> <span m="3559920">probability</span> <span
  m="3560440">distribution</span> <span m="3561290">of</span> <span
  m="3561630">the</span> <span m="3561700">entire</span> <span
  m="3562000">thing.</span> <span m="3562430">So</span> <span
  m="3562960">really</span> <span m="3563690">if</span> <span
  m="3563780">you</span> <span m="3563880">started</span> <span
  m="3564190">here,</span> <span m="3564660">the</span> <span
  m="3564750">master</span> <span m="3565070">equation</span> <span
  m="3565380">would</span> <span m="3565470">give</span> <span
  m="3565580">you</span> <span m="3565640">some</span> <span
  m="3565800">distribution</span> <span m="3566590">for</span> <span
  m="3566660">the</span> <span m="3566770">n's,</span> <span
  m="3567160">some</span> <span m="3567270">distribution</span> <span
  m="3567840">for</span> <span m="3567920">m's.</span> <span
  m="3570550">And</span> <span m="3570680">so</span> <span m="3570760">if</span>
  <span m="3571200">you</span> <span m="3571330">looked</span> <span
  m="3571520">at</span> <span m="3571620">these</span> <span
  m="3572690">over</span> <span m="3572880">time,</span> <span
  m="3573350">than</span> <span m="3574410">the</span> <span
  m="3574560">mean</span> <span m="3574780">of</span> <span
  m="3574830">these</span> <span m="3575020">distributions</span> <span
  m="3575510">is</span> <span m="3575650">indeed</span> <span
  m="3575990">equal</span> <span m="3576270">to</span> <span
  m="3576360">the</span> <span m="3576690">deterministic</span> <span
  m="3578560">behavior.</span> <span m="3580525">Yes?</span></p><p><span
  m="3580980">AUDIENCE: Is it</span> <span m="3581435">possible to</span> <span
  m="3581890">recover,</span> <span m="3582350">like</span> <span
  m="3582530">how</span> <span m="3582790">would we</span> <span
  m="3583010">recover</span> <span m="3583320">the</span> <span
  m="3584170">differential</span> <span m="3584595">equation</span> <span
  m="3586506">from</span> <span m="3586912">the</span> <span
  m="3587318">master</span> <span m="3587724">equation?</span> <span
  m="3588130">Is that</span> <span m="3588480">possible?</span> <span
  m="3589280">Maybe that</span> <span m="3589730">would</span> <span
  m="3590180">help.</span></p><p><span m="3590630">PROFESSOR: Yeah.</span> <span
  m="3592760">I</span> <span m="3592820">think</span> <span
  m="3592970">that</span> <span m="3594160">in</span> <span
  m="3594330">the</span> <span m="3594440">end,</span> <span
  m="3594720">there's</span> <span m="3594860">going to be</span> <span
  m="3594930">a</span> <span m="3595030">one-to-one</span> <span
  m="3595620">relationship</span> <span m="3596100">from,</span> <span
  m="3596450">I</span> <span m="3596530">guess,</span> <span
  m="3596730">this</span> <span m="3597830">differential</span> <span
  m="3598340">equation</span> <span m="3598810">to</span> <span
  m="3598920">the</span> <span m="3599030">master</span> <span
  m="3599500">equation.</span> <span m="3600230">I'm</span> <span
  m="3600650">trying</span> <span m="3600870">to</span> <span
  m="3600920">think</span> <span m="3601080">of</span> <span
  m="3601150">any</span> <span m="3601960">weird</span> <span
  m="3602280">case</span> <span m="3602540">or</span> <span
  m="3602610">something</span> <span m="3602840">funny's</span> <span
  m="3603140">going</span> <span m="3603230">to</span> <span
  m="3603270">happen.</span> <span m="3603540">Is something</span> <span
  m="3603800">funny</span> <span m="3603970">going</span> <span
  m="3604060">to</span> <span m="3604100">happen?</span></p><p><span
  m="3604830">AUDIENCE: No.</span> <span m="3605318">But</span> <span
  m="3605806">like the</span> <span m="3606294">easy way</span> <span
  m="3606782">is just to</span> <span m="3607270">write them all</span> <span
  m="3607758">in terms</span> <span m="3608246">of the</span> <span
  m="3608734">distribution.</span> <span m="3609222">And you can</span> <span
  m="3609710">just</span> <span m="3610198">differentiate</span> <span
  m="3611174">the</span> <span m="3611662">whole</span> <span
  m="3612150">sum.</span> <span m="3613068">And in</span> <span
  m="3613556">that</span> <span m="3614044">sum,</span> <span
  m="3614532">we</span> <span m="3615020">express</span> <span
  m="3615508">the</span> <span m="3615996">[INAUDIBLE]</span> <span
  m="3617460">with</span> <span m="3618436">your</span> <span
  m="3618924">last</span> <span m="3619412">equation.</span> <span
  m="3620388">[INAUDIBLE].</span></p><p><span m="3623320">PROFESSOR:
  Right.</span> <span m="3623730">But</span> <span m="3623760">I think</span>
  <span m="3624260">this</span> <span m="3624420">is</span> <span
  m="3624540">the</span> <span m="3624660">much</span> <span
  m="3624950">more</span> <span m="3625090">mathematical</span> <span
  m="3625840">way.</span> <span m="3626000">I</span> <span
  m="3626050">mean</span> <span m="3626190">because</span> <span
  m="3626380">I</span> <span m="3626450">think</span> <span
  m="3626600">that</span> <span m="3626700">actually,</span> <span
  m="3627330">I</span> <span m="3627590">mean,</span> <span
  m="3630230">from</span> <span m="3630530">the</span> <span
  m="3630630">differential</span> <span m="3631090">equation,</span> <span
  m="3631640">you</span> <span m="3631810">actually</span> <span
  m="3633120">from</span> <span m="3633290">the</span> <span
  m="3633390">terms</span> <span m="3633810">here,</span> <span
  m="3634050">you</span> <span m="3634130">can</span> <span
  m="3634220">actually</span> <span m="3634440">construct</span> <span
  m="3635020">the</span> <span m="3635100">master</span> <span
  m="3635460">equation.</span> <span m="3636060">And</span> <span
  m="3636220">I</span> <span m="3636280">think</span> <span
  m="3636510">by</span> <span m="3636650">the</span> <span
  m="3636720">same</span> <span m="3637080">way,</span> <span
  m="3638500">you</span> <span m="3638720">can</span> <span
  m="3639020">go</span> <span m="3639250">from</span> <span
  m="3639420">the</span> <span m="3639470">master</span> <span
  m="3639770">equation,</span> <span m="3640260">and</span> <span
  m="3640320">I</span> <span m="3640550">think</span> <span
  m="3640700">that</span> <span m="3640820">there's</span> <span
  m="3640960">going</span> <span m="3641070">to</span> <span
  m="3641110">be</span> <span m="3641230">a</span> <span
  m="3641340">unique</span> <span m="3641810">differential</span> <span
  m="3642230">equation</span> <span m="3642630">that</span> <span
  m="3642750">would</span> <span m="3642930">have</span> <span
  m="3643540">gotten</span> <span m="3643860">you</span> <span
  m="3644010">to</span> <span m="3644090">that</span> <span
  m="3644310">master</span> <span m="3644610">equation.</span> <span
  m="3644950">So I</span> <span m="3645010">think</span> <span
  m="3645160">just</span> <span m="3645310">from</span> <span
  m="3645420">the</span> <span m="3645520">terms</span> <span
  m="3646030">you</span> <span m="3646140">can</span> <span
  m="3646280">do</span> <span m="3646400">it.</span></p><p><span
  m="3646990">You</span> <span m="3647130">could</span> <span
  m="3647230">also</span> <span m="3648380">do</span> <span
  m="3648540">like</span> <span m="3648700">moment</span> <span
  m="3648930">generating</span> <span m="3649200">functions</span> <span
  m="3649530">to</span> <span m="3649590">get</span> <span m="3649740">to</span>
  <span m="3650640">how</span> <span m="3650830">things</span> <span
  m="3651040">change.</span> <span m="3651620">But</span> <span
  m="3652220">I</span> <span m="3652300">mean</span> <span m="3652390">I</span>
  <span m="3652460">think</span> <span m="3652620">that</span> <span
  m="3652760">it's</span> <span m="3652950">really</span> <span
  m="3658480">from</span> <span m="3658840">this,</span> <span
  m="3659100">for</span> <span m="3659200">example,</span> <span
  m="3659540">I</span> <span m="3659600">think</span> <span
  m="3659900">it</span> <span m="3660370">tells</span> <span
  m="3660660">you</span> <span m="3660770">that that</span> <span
  m="3661090">was</span> <span m="3661300">the</span> <span
  m="3661370">differential</span> <span m="3661750">equation.</span> <span
  m="3664050">Does</span> <span m="3664230">that--</span></p><p><span
  m="3666980">I</span> <span m="3667020">mean</span> <span
  m="3667130">it's</span> <span m="3667440">sort</span> <span
  m="3667610">of--</span> <span m="3670250">the</span> <span
  m="3670350">way</span> <span m="3670540">that we</span> <span
  m="3670650">typically</span> <span m="3670960">do</span> <span
  m="3671200">things</span> <span m="3671560">these things,</span> <span
  m="3671670">is that we</span> <span m="3671750">have a</span> <span
  m="3671990">differential</span> <span m="3672350">equation,</span> <span
  m="3672760">and</span> <span m="3672850">then</span> <span
  m="3673000">we</span> <span m="3673120">construct</span> <span
  m="3673740">the</span> <span m="3673810">master</span> <span
  m="3674220">equation.</span> <span m="3674790">So</span> <span
  m="3674890">then</span> <span m="3674990">we</span> <span
  m="3675090">already</span> <span m="3675430">knew</span> <span
  m="3675600">what</span> <span m="3675710">the</span> <span
  m="3675760">differential</span> <span m="3676100">equation</span> <span
  m="3676340">was.</span> <span m="3676520">But</span> <span
  m="3676920">I</span> <span m="3677000">think</span> <span
  m="3677350">just</span> <span m="3677560">from</span> <span
  m="3677800">the</span> <span m="3677910">terms</span> <span
  m="3678350">in</span> <span m="3678690">your</span> <span
  m="3678810">master</span> <span m="3679170">equation,</span> <span
  m="3680100">you</span> <span m="3680270">can</span> <span
  m="3680750">say,</span> <span m="3680970">all</span> <span
  m="3681060">right.</span> <span m="3683070">This</span> <span
  m="3683210">was</span> <span m="3683400">the</span> <span
  m="3683470">differential</span> <span m="3683830">equation</span> <span
  m="3684110">that it</span> <span m="3684606">started with.</span></p><p><span
  m="3691560">Any</span> <span m="3691810">other</span> <span
  m="3692020">questions</span> <span m="3692340">about</span> <span
  m="3692670">what</span> <span m="3692780">happened</span> <span
  m="3693050">here?</span> <span m="3700320">So</span> <span
  m="3700450">we</span> <span m="3700710">have,</span> <span
  m="3701310">I</span> <span m="3701390">think,</span> <span
  m="3701580">a</span> <span m="3701660">fair</span> <span
  m="3701990">number,</span> <span m="3702850">a fair</span> <span
  m="3703220">knowledge</span> <span m="3703650">of</span> <span
  m="3703710">what's</span> <span m="3703860">going</span> <span
  m="3704000">on</span> <span m="3704180">here</span> <span
  m="3704290">now.</span> <span m="3705890">We</span> <span
  m="3706000">know</span> <span m="3706300">that</span> <span
  m="3708180">the</span> <span m="3708910">equilibrium</span> <span
  m="3709490">distribution</span> <span m="3709930">of</span> <span
  m="3710020">mRNA</span> <span m="3710380">in</span> <span
  m="3710470">the</span> <span m="3710540">cell</span> <span
  m="3710900">is</span> <span m="3710980">going</span> <span
  m="3711070">to</span> <span m="3711110">be</span> <span
  m="3711220">Poisson.</span> <span m="3712620">We</span> <span
  m="3712720">also</span> <span m="3712990">know</span> <span
  m="3713210">that</span> <span m="3713380">the</span> <span
  m="3713700">distribution</span> <span m="3714600">of</span> <span
  m="3714800">the</span> <span m="3714880">number</span> <span
  m="3715100">of</span> <span m="3715140">mRNA</span> <span
  m="3715550">produced</span> <span m="3715870">per</span> <span
  m="3715990">sell</span> <span m="3716200">cycle is</span> <span
  m="3716610">also</span> <span m="3716960">Poisson.</span> <span
  m="3717230">But</span> <span m="3717620">it's a</span> <span
  m="3717720">different</span> <span m="3718090">Poisson</span> <span
  m="3718610">from the</span> <span m="3718670">first</span> <span
  m="3719110">one.</span></p><p><span m="3720600">We</span> <span
  m="3720820">know</span> <span m="3721160">that</span> <span
  m="3721890">the</span> <span m="3722000">number</span> <span
  m="3722310">of</span> <span m="3722430">proteins</span> <span
  m="3723150">produced</span> <span m="3723560">per</span> <span
  m="3723860">mRNA</span> <span m="3724430">is</span> <span m="3724530">going
  to</span> <span m="3724640">be</span> <span m="3724780">geometrically</span>
  <span m="3725490">distributed.</span> <span m="3728920">The</span> <span
  m="3729030">one</span> <span m="3729240">thing</span> <span
  m="3729400">that</span> <span m="3729500">we</span> <span
  m="3729600">have</span> <span m="3729730">not</span> <span
  m="3730020">yet</span> <span m="3730180">done</span> <span
  m="3730400">is</span> <span m="3730570">to</span> <span m="3730840">ask</span>
  <span m="3731930">about</span> <span m="3732210">the</span> <span
  m="3732640">distribution</span> <span m="3733500">of</span> <span
  m="3734020">protein</span> <span m="3735340">in</span> <span
  m="3735430">the</span> <span m="3735500">cell.</span> <span
  m="3737650">So</span> <span m="3737820">let's</span> <span
  m="3738580">say</span> <span m="3738680">something</span> <span
  m="3738930">about</span> <span m="3739120">that.</span></p><p><span
  m="3739690">I'm</span> <span m="3739880">not</span> <span
  m="3740060">going</span> <span m="3740140">to</span> <span
  m="3740180">do</span> <span m="3740290">the</span> <span
  m="3740350">whole</span> <span m="3740510">derivation.</span> <span
  m="3741060">Because</span> <span m="3741260">it's</span> <span
  m="3741600">harder.</span> <span m="3742560">But</span> <span
  m="3742760">I</span> <span m="3742870">encourage</span> <span
  m="3743250">you</span> <span m="3743490">to--</span> <span
  m="3745810">even</span> <span m="3746100">the</span> <span
  m="3746220">continuous</span> <span m="3746760">version</span> <span
  m="3747180">of</span> <span m="3747290">the derivation</span> <span
  m="3749570">is</span> <span m="3749680">definitely</span> <span
  m="3749940">harder</span> <span m="3750200">than</span> <span
  m="3750340">this.</span> <span m="3750840">But</span> <span
  m="3750940">then</span> <span m="3751540">the</span> <span
  m="3751620">discrete</span> <span m="3752170">derivation</span> <span
  m="3752720">is</span> <span m="3752890">even</span> <span
  m="3754200">worse.</span></p><p><span m="3756620">So</span> <span
  m="3757010">what</span> <span m="3757230">we're</span> <span
  m="3757400">going</span> <span m="3757480">to</span> <span
  m="3757530">talk</span> <span m="3757710">about,</span> <span
  m="3758060">and</span> <span m="3758460">the way</span> <span
  m="3758540">we'll</span> <span m="3758930">typically</span> <span
  m="3759330">maybe</span> <span m="3759530">think</span> <span
  m="3759680">about</span> <span m="3759850">this</span> <span
  m="3760210">from</span> <span m="3760400">the standpoint</span> <span
  m="3760600">of</span> <span m="3760700">this</span> <span
  m="3760850">class</span> <span m="3761160">is</span> <span
  m="3762430">the</span> <span m="3762510">continuous</span> <span
  m="3763390">approximation</span> <span m="3764730">to--</span> <span
  m="3766630">oh,</span> <span m="3766710">that</span> <span
  m="3766860">might</span> <span m="3767000">have</span> <span
  m="3767080">ended</span> <span m="3767280">up</span> <span
  m="3767370">being</span> <span m="3767490">useful.</span> <span
  m="3767840">Well</span> <span m="3768806">it's</span> <span
  m="3769180">OK.</span> <span m="3769790">Is</span> <span
  m="3769960">the</span> <span m="3770020">continuous</span> <span
  m="3770620">approximation</span> <span m="3773220">to</span> <span
  m="3773360">the</span> <span m="3773420">real</span> <span
  m="3773620">answer.</span></p><p><span m="3774740">And</span> <span
  m="3775010">in</span> <span m="3775090">particular,</span> <span
  m="3775520">just</span> <span m="3775700">the</span> <span
  m="3775770">way</span> <span m="3775890">that</span> <span
  m="3776030">the</span> <span m="3776100">exponential</span> <span
  m="3776720">is</span> <span m="3776790">the</span> <span
  m="3776860">continuous</span> <span m="3777300">approximation</span> <span
  m="3777880">of</span> <span m="3778450">the</span> <span
  m="3778890">geometric</span> <span m="3779280">distribution,</span> <span
  m="3780820">in</span> <span m="3780920">the</span> <span
  m="3780980">same</span> <span m="3781210">way</span> <span
  m="3782210">you</span> <span m="3782360">can</span> <span
  m="3782490">think</span> <span m="3782640">about</span> <span
  m="3783850">the</span> <span m="3783960">equilibrium</span> <span
  m="3784370">distribution</span> <span m="3785030">of</span> <span
  m="3785360">protein</span> <span m="3785880">in</span> <span
  m="3785970">the</span> <span m="3786040">cell.</span> <span
  m="3786370">In</span> <span m="3786460">this</span> <span
  m="3786620">model</span> <span m="3786990">is</span> <span
  m="3787090">going</span> <span m="3787190">to</span> <span
  m="3787230">be</span> <span m="3787320">gamma</span> <span
  m="3787680">distributed.</span> <span m="3788720">But</span> <span
  m="3788900">gamma</span> <span m="3789260">is</span> <span
  m="3790010">a</span> <span m="3790070">continuous</span> <span
  m="3790600">distribution.</span> <span m="3791110">But</span> <span
  m="3791220">it's</span> <span m="3791480">a</span> <span
  m="3791740">continuous</span> <span m="3792170">analog</span> <span
  m="3795570">of</span> <span m="3795840">the</span> <span
  m="3796200">negative</span> <span m="3796680">binomial.</span></p><p><span
  m="3797880">So</span> <span m="3798360">let</span> <span m="3798480">me</span>
  <span m="3798570">just</span> <span m="3800700">make</span> <span
  m="3800880">sure</span> <span m="3801160">I'm--</span> <span
  m="3810660">and</span> <span m="3810840">Sunney</span> <span
  m="3811320">Xie</span> <span m="3811430">actually</span> <span
  m="3811710">has</span> <span m="3813401">a</span> <span
  m="3813880">nice</span> <span m="3814430"><i>PRL</i></span> <span
  m="3814770">paper</span> <span m="3815040">where</span> <span
  m="3815240">he</span> <span m="3815390">derives</span> <span
  m="3816940">the</span> <span m="3817300">gamma</span> <span
  m="3817560">distribution.</span> <span m="3818670">But</span> <span
  m="3818900">even</span> <span m="3819140">earlier</span> <span
  m="3819680">actually</span> <span m="3820540">Paulson</span> <span
  m="3820970">had</span> <span m="3821190">derived</span> <span
  m="3821710">this</span> <span m="3822250">negative</span> <span
  m="3822550">binomial</span> <span m="3822980">distribution,</span> <span
  m="3823700">the</span> <span m="3823840">discrete</span> <span
  m="3824220">version</span> <span m="3825130">of</span> <span
  m="3825230">the</span> <span m="3825300">solution.</span></p><p><span
  m="3836910">So</span> <span m="3836930">this</span> <span
  m="3837020">is</span> <span m="3837120">the</span> <span
  m="3837200">number</span> <span m="3837590">of</span> <span
  m="3837680">protein</span> <span m="3838180">per</span> <span
  m="3838470">cell.</span> <span m="3839620">We</span> <span
  m="3839770">already</span> <span m="3839930">know</span> <span
  m="3840070">the</span> <span m="3840160">mean.</span> <span
  m="3844870">So</span> <span m="3845952">this</span> <span
  m="3846440">is</span> <span m="3846520">approximately</span> <span
  m="3847080">distributed as a</span> <span m="3847580">gamma.</span> <span
  m="3849410">A</span> <span m="3849590">gamma</span> <span
  m="3849930">is</span> <span m="3850260">a</span> <span
  m="3850360">distribution</span> <span m="3850980">that</span> <span
  m="3851080">requires</span> <span m="3851610">two</span> <span
  m="3851850">parameters</span> <span m="3852410">to</span> <span
  m="3852490">describe.</span> <span m="3853330">So</span> <span
  m="3853440">a</span> <span m="3853700">Poisson</span> <span
  m="3854200">can</span> <span m="3854310">be</span> <span
  m="3854370">described</span> <span m="3854790">by</span> <span
  m="3854930">single</span> <span m="3855360">parameter.</span> <span
  m="3857230">Gamma</span> <span m="3857600">is</span> <span
  m="3858110">typically</span> <span m="3858420">described</span> <span
  m="3858720">by</span> <span m="3858820">two.</span></p><p><span
  m="3863580">And</span> <span m="3864020">b</span> <span m="3864380">is</span>
  <span m="3864530">going</span> <span m="3864660">to</span> <span
  m="3864730">be</span> <span m="3865800">the</span> <span
  m="3865960">burst</span> <span m="3866320">size,</span> <span
  m="3869806">whereas</span> <span m="3870440">a</span> <span
  m="3870740">is</span> <span m="3872300">the</span> <span
  m="3872430">mean</span> <span m="3872720">number</span> <span
  m="3872980">of</span> <span m="3873050">bursts</span> <span
  m="3875060">per</span> <span m="3875445">cell</span> <span
  m="3875830">cycle,</span> <span m="3883230">which</span> <span
  m="3883390">is</span> <span m="3883490">the</span> <span
  m="3883570">same</span> <span m="3883820">as</span> <span
  m="3883990">the</span> <span m="3884670">mean</span> <span
  m="3884880">number</span> <span m="3885350">of</span> <span
  m="3885390">mRNA</span> <span m="3885850">produced,</span> <span
  m="3886070">so</span> <span m="3886330">mean</span> <span
  m="3886680">number</span> <span m="3887030">of bursts.</span></p><p><span
  m="3896670">So</span> <span m="3896820">the</span> <span
  m="3897170">gamma</span> <span m="3898786">of</span> <span
  m="3899280">this</span> <span m="3899470">a,</span> <span
  m="3899590">b.</span> <span m="3919130">All</span> <span
  m="3919200">right.</span> <span m="3919350">So</span> <span
  m="3921120">the</span> <span m="3921470">gamma</span> <span m="3921520">of
  a</span> <span m="3922130">is</span> <span m="3922470">the</span> <span
  m="3922630">gamma</span> <span m="3923000">function.</span> <span
  m="3923920">It's</span> <span m="3925320">equal</span> <span
  m="3925640">to--</span> <span m="3927050">now</span> <span m="3927330">is
  it</span> <span m="3927660">a</span> <span m="3927790">minus</span> <span
  m="3928050">1</span> <span m="3928260">factorial?</span> <span m="3929360">I
  always</span> <span m="3929470">get</span> <span m="3929590">the--</span>
  <span m="3929750">is it</span> <span m="3930180">a</span> <span
  m="3930340">minus</span> <span m="3930610">1 or a</span> <span
  m="3930870">plus</span> <span m="3931140">1</span> <span
  m="3931260">factorial.</span> <span m="3931770">Anybody</span> <span
  m="3932910">remember</span> <span m="3933310">this?</span> <span
  m="3933590">Yeah,</span> <span m="3933910">a</span> <span
  m="3934010">minus</span> <span m="3934230">1.</span></p><p><span
  m="3943830">I</span> <span m="3944080">mean</span> <span
  m="3944220">it's</span> <span m="3944340">like</span> <span
  m="3944470">a</span> <span m="3944510">lot</span> <span m="3944690">of</span>
  <span m="3944750">things.</span> <span m="3945290">You</span> <span
  m="3945460">look</span> <span m="3945660">at</span> <span
  m="3945730">this</span> <span m="3945870">equation.</span> <span
  m="3946740">It</span> <span m="3946840">doesn't</span> <span
  m="3946920">really</span> <span m="3947120">mean</span> <span m="3947300">a
  whole</span> <span m="3947360">lot.</span> <span m="3948980">But</span> <span
  m="3949080">I</span> <span m="3949140">think</span> <span
  m="3949310">that</span> <span m="3950130">a</span> <span
  m="3950220">reasonable</span> <span m="3950610">way</span> <span
  m="3950720">to</span> <span m="3950800">think</span> <span
  m="3950990">about</span> <span m="3951240">this</span> <span
  m="3951540">is</span> <span m="3952470">the</span> <span
  m="3952630">gamma</span> <span m="3953390">is</span> <span
  m="3955100">approximately</span> <span m="3955670">what</span> <span
  m="3955810">you</span> <span m="3955890">get</span> <span
  m="3956120">when</span> <span m="3956240">you</span> <span
  m="3957330">add</span> <span m="3957670">together</span> <span
  m="3960480">a</span> <span m="3960810">different</span> <span
  m="3961290">exponentials</span> <span m="3962260">with</span> <span
  m="3963100">length</span> <span m="3963370">scale,</span> <span
  m="3964200">given</span> <span m="3964460">by</span> <span
  m="3964620">b.</span></p><p><span m="3966860">When</span> <span
  m="3967060">you</span> <span m="3967160">add</span> <span
  m="3967440">probability</span> <span m="3967700">distributions,</span> <span
  m="3968140">you have</span> <span m="3968330">to do</span> <span
  m="3968500">a</span> <span m="3968560">convolution.</span> <span
  m="3970070">So</span> <span m="3970330">in</span> <span
  m="3970450">some</span> <span m="3970620">ways,</span> <span
  m="3971000">the</span> <span m="3971140">way</span> <span
  m="3971250">to</span> <span m="3971320">think</span> <span
  m="3971480">about</span> <span m="3971630">it,</span> <span m="3971700">and
  this</span> <span m="3971850">kind</span> <span m="3972070">of</span> <span
  m="3972140">makes</span> <span m="3972360">sense.</span> <span
  m="3972630">Because</span> <span m="3973230">what</span> <span
  m="3973770">is</span> <span m="3973910">happening</span> <span
  m="3974290">is</span> <span m="3974400">that</span> <span
  m="3975560">it</span> <span m="3975720">takes</span> <span
  m="3976180">something</span> <span m="3976690">of</span> <span
  m="3976820">order</span> <span m="3977920">cell</span> <span
  m="3978190">division</span> <span m="3978490">time</span> <span
  m="3978780">for</span> <span m="3978890">these</span> <span
  m="3979070">proteins</span> <span m="3979520">to go</span> <span
  m="3979650">away.</span> <span m="3979880">Because</span> <span
  m="3980050">they're</span> <span m="3980170">stable.</span></p><p><span
  m="3982200">Now</span> <span m="3983210">each--</span> <span
  m="3984050">and</span> <span m="3984390">so</span> <span
  m="3984480">then</span> <span m="3984610">what</span> <span
  m="3984720">you</span> <span m="3984820">want to</span> <span
  m="3984900">know</span> <span m="3985070">is</span> <span
  m="3985350">how</span> <span m="3985510">many</span> <span
  m="3985700">proteins</span> <span m="3986080">are</span> <span
  m="3986150">kind</span> <span m="3986270">of</span> <span
  m="3986340">produced</span> <span m="3987200">over</span> <span
  m="3987330">the</span> <span m="3987410">course</span> <span
  m="3987680">of</span> <span m="3987730">a</span> <span m="3987790">cell</span>
  <span m="3988010">cycle.</span> <span m="3990200">Well</span> <span
  m="3990620">that</span> <span m="3990990">actually</span> <span
  m="3991260">you</span> <span m="3991340">can</span> <span
  m="3991490">get</span> <span m="3991660">at</span> <span m="3992460">by</span>
  <span m="3993090">asking</span> <span m="3995690">how</span> <span
  m="3995790">many</span> <span m="3996020">bursts are</span> <span
  m="3996280">there</span> <span m="3996400">going</span> <span
  m="3996480">to</span> <span m="3996520">be.</span> <span
  m="3997060">And</span> <span m="3997240">then</span> <span
  m="3997550">how</span> <span m="3997790">big</span> <span
  m="3997990">are</span> <span m="3998060">the</span> <span
  m="3998170">bursts?</span></p><p><span m="4001450">So</span> <span
  m="4001580">indeed,</span> <span m="4001800">the</span> <span
  m="4002040">mean</span> <span m="4002270">here</span> <span
  m="4004630">is</span> <span m="4004770">equal</span> <span
  m="4004980">to</span> <span m="4005160">a</span> <span
  m="4005480">times</span> <span m="4005890">b.</span> <span
  m="4007580">And</span> <span m="4007730">the</span> <span
  m="4007800">variance</span> <span m="4009500">is equal</span> <span
  m="4009690">to</span> <span m="4009830">a</span> <span
  m="4010080">times</span> <span m="4010380">b</span> <span
  m="4010550">squared.</span> <span m="4016700">So</span> <span
  m="4016850">for</span> <span m="4016970">example,</span> <span
  m="4017280">if</span> <span m="4017360">you</span> <span
  m="4017450">have</span> <span m="4017550">a</span> <span
  m="4017600">single</span> <span m="4018090">exponential</span> <span
  m="4018550">distribution,</span> <span m="4021480">with</span> <span
  m="4022720">burst</span> <span m="4023000">size</span> <span
  m="4023350">b,</span> <span m="4024610">then</span> <span
  m="4025070">this</span> <span m="4025370">is</span> <span
  m="4025460">what</span> <span m="4025580">you</span> <span
  m="4025680">get.</span> <span m="4026270">So</span> <span
  m="4026390">this</span> <span m="4026570">is</span> <span
  m="4026720">the</span> <span m="4026800">probability</span> <span
  m="4028030">that</span> <span m="4028300">you</span> <span
  m="4028400">get</span> <span m="4028840">n</span> <span
  m="4029110">proteins.</span> <span m="4029820">And</span> <span
  m="4029910">this</span> <span m="4030060">is</span> <span
  m="4030410">this</span> <span m="4030570">function</span> <span
  m="4030840">of</span> <span m="4030960">n.</span> <span m="4031500">So for
  a</span> <span m="4031880">single</span> <span m="4032230">burst,</span> <span
  m="4033990">this</span> <span m="4034200">is</span> <span
  m="4034490">exponentially</span> <span m="4035040">distributed.</span> <span
  m="4035500">So</span> <span m="4035580">this</span> <span
  m="4035750">is</span> <span m="4035810">the</span> <span
  m="4035920">continuous</span> <span m="4037250">version.</span></p><p><span
  m="4038990">Now</span> <span m="4039660">if</span> <span m="4039810">we</span>
  <span m="4040150">add</span> <span m="4040530">together</span> <span
  m="4041580">multiple</span> <span m="4042360">of</span> <span
  m="4042510">these</span> <span m="4042780">bursts,</span> <span
  m="4043280">this</span> <span m="4043440">is</span> <span
  m="4043710">really</span> <span m="4043930">saying</span> <span
  m="4044130">that we</span> <span m="4044270">sample</span> <span
  m="4044670">from</span> <span m="4044790">this</span> <span
  m="4044920">distribution,</span> <span m="4045330">say</span> <span
  m="4045460">twice.</span> <span m="4046240">And</span> <span
  m="4046670">then</span> <span m="4046750">we</span> <span
  m="4047180">add</span> <span m="4047440">the</span> <span
  m="4047520">resulting</span> <span m="4048280">value.</span> <span
  m="4049120">So</span> <span m="4049220">this</span> <span
  m="4049400">is</span> <span m="4049540">a</span> <span
  m="4049680">convolution.</span> <span m="4050790">You</span> <span
  m="4050910">guys</span> <span m="4051220">will</span> <span
  m="4051360">have</span> <span m="4051730">an</span> <span
  m="4051870">opportunity</span> <span m="4052500">to</span> <span
  m="4052590">practice</span> <span m="4053180">this</span> <span
  m="4053360">on</span> <span m="4053580">your</span> <span
  m="4053920">problem</span> <span m="4054200">sets.</span> <span
  m="4055310">But</span> <span m="4055660">what</span> <span
  m="4055780">happens</span> <span m="4056160">is</span> <span
  m="4056330">that</span> <span m="4056570">you</span> <span
  m="4056680">end</span> <span m="4056800">up</span> <span
  m="4056910">getting</span> <span m="4057120">something</span> <span
  m="4057410">that</span> <span m="4057530">looks</span> <span
  m="4057960">like--</span> <span m="4059010">it's</span> <span
  m="4059110">going</span> <span m="4059220">to</span> <span
  m="4059280">go.</span> <span m="4062920">So</span> <span m="4063070">it</span>
  <span m="4063150">increases</span> <span m="4063470">linearly.</span> <span
  m="4064380">If</span> <span m="4064670">you</span> <span
  m="4064720">added</span> <span m="4065020">three</span> <span
  m="4065270">of</span> <span m="4065320">them</span> <span
  m="4065410">together</span> <span m="4066470">this</span> <span
  m="4066700">increase</span> <span m="4067130">is</span> <span
  m="4067360">quadratic.</span> <span m="4068100">And</span> <span
  m="4068340">it kind of</span> <span m="4068660">goes like that.</span> <span
  m="4069120">So</span> <span m="4069190">this</span> <span
  m="4069350">thing</span> <span m="4070880">becomes</span> <span
  m="4071920">kind</span> <span m="4072100">of--</span> <span m="4072260">it
  goes</span> <span m="4072570">from</span> <span m="4073180">a</span> <span
  m="4073410">distribution</span> <span m="4074170">where</span> <span
  m="4074490">it's peaked</span> <span m="4074870">at</span> <span
  m="4074970">0,</span> <span m="4075300">to</span> <span
  m="4075420">something</span> <span m="4075650">that's</span> <span
  m="4075800">peaked</span> <span m="4076150">at a</span> <span
  m="4076280">nonzero</span> <span m="4076750">value.</span></p><p><span
  m="4080060">Now</span> <span m="4081110">you</span> <span
  m="4081240">can</span> <span m="4081580">ask,</span> <span
  m="4082090">for</span> <span m="4082110">example,</span> <span
  m="4082630">what</span> <span m="4082660">happens</span> <span
  m="4084400">as</span> <span m="4085620">for a</span> <span
  m="4085790">large</span> <span m="4086350">a,</span> <span
  m="4088260">if</span> <span m="4088340">you</span> <span
  m="4088410">have</span> <span m="4088500">many</span> <span
  m="4088760">bursts,</span> <span m="4089810">what</span> <span
  m="4089970">does</span> <span m="4090080">this</span> <span
  m="4090270">thing</span> <span m="4090560">look</span> <span
  m="4090720">like?</span> <span m="4091330">Oh,</span> <span
  m="4091670">I</span> <span m="4091770">wish</span> <span m="4092360">I</span>
  <span m="4092480">hadn't</span> <span m="4093080">erased</span> <span
  m="4093460">my</span> <span m="4093670">probability</span> <span
  m="4094080">distributions.</span> <span m="4097290">So</span> <span
  m="4097370">what</span> <span m="4097510">are</span> <span
  m="4097529">the</span> <span m="4097640">gamma</span> <span
  m="4098080">converged</span> <span m="4098560">to</span> <span
  m="4099370">for</span> <span m="4099700">large</span> <span
  m="4100010">a?</span> <span m="4102350">A</span> <span
  m="4102420">normal</span> <span m="4102729">distribution.</span> <span
  m="4103149">Right?</span> <span m="4103950">So</span> <span
  m="4104040">that's</span> <span m="4104210">the</span> <span
  m="4104310">central</span> <span m="4104710">limit</span> <span
  m="4104960">theorem.</span></p><p><span m="4106359">If</span> <span
  m="4106420">you</span> <span m="4106510">take</span> <span
  m="4107220">any</span> <span m="4107490">well-behaved</span> <span
  m="4108189">probability</span> <span m="4108460">distribution,</span> <span
  m="4108939">you</span> <span m="4109080">add</span> <span
  m="4109300">it.</span> <span m="4109649">You</span> <span
  m="4110130">sample</span> <span m="4110430">from</span> <span
  m="4110590">it</span> <span m="4110910">many</span> <span
  m="4111170">times.</span> <span m="4112200">Then you</span> <span
  m="4112270">end up</span> <span m="4112560">getting</span> <span
  m="4112740">a</span> <span m="4112810">Gaussian.</span> <span
  m="4118649">If</span> <span m="4119109">you</span> <span
  m="4119200">don't</span> <span m="4119310">remember</span> <span
  m="4119540">that</span> <span m="4119689">very</span> <span
  m="4119800">well,</span> <span m="4120069">then</span> <span
  m="4120330">this</span> <span m="4120510">is</span> <span
  m="4120580">something</span> <span m="4122420">to</span> <span
  m="4122550">read</span> <span m="4122710">about</span> <span
  m="4122939">over</span> <span m="4123029">the</span> <span
  m="4123100">weekend.</span> <span m="4129109">Just</span> <span
  m="4129279">like</span> <span m="4129410">the</span> <span
  m="4129490">Poisson</span> <span m="4130080">is</span> <span
  m="4130200">also</span> <span m="4130460">going</span> <span
  m="4130580">to</span> <span m="4130680">go</span> <span
  m="4130970">to--</span> <span m="4133160">for</span> <span
  m="4133270">large</span> <span m="4133590">lambda,</span> <span
  m="4133840">the</span> <span m="4134040">Poisson</span> <span
  m="4137920">also</span> <span m="4138100">looks</span> <span
  m="4138240">like</span> <span m="4138340">a</span> <span
  m="4138390">Gaussian.</span></p><p><span m="4138870">Can</span> <span
  m="4138970">somebody</span> <span m="4139120">give an</span> <span
  m="4139340">explanation,</span> <span m="4140330">an</span> <span
  m="4140560">intuitive</span> <span m="4140630">explanation</span> <span
  m="4141149">for</span> <span m="4141210">why</span> <span
  m="4141370">that</span> <span m="4141560">should</span> <span
  m="4141680">be?</span> <span m="4143500">Why</span> <span
  m="4144414">it--</span> <span m="4145811">yes?</span></p><p><span
  m="4146773">AUDIENCE: Because</span> <span m="4147254">in a</span> <span
  m="4147735">Poisson</span> <span m="4148216">distribution,</span> <span
  m="4148697">you can't</span> <span m="4149178">have anything</span> <span
  m="4149659">negative.</span></p><p><span m="4150630">PROFESSOR: OK.</span>
  <span m="4150890">So</span> <span m="4151109">a</span> <span
  m="4151290">Poisson</span> <span m="4151420">distribution</span> <span
  m="4151790">can't have</span> <span m="4152060">anything--</span> <span
  m="4152189">but</span> <span m="4152310">now</span> <span m="4152490">I</span>
  <span m="4152560">feel</span> <span m="4152660">like</span> <span
  m="4152750">you're</span> <span m="4152870">arguing</span> <span
  m="4153109">against</span> <span m="4153380">me.</span> <span
  m="4154970">Because</span> <span m="4155109">a</span> <span
  m="4155149">Gaussian</span> <span m="4155950">has</span> <span
  m="4156160">negative</span> <span m="4156430">values,</span> <span
  m="4156979">right?</span></p><p><span m="4157762">AUDIENCE: Right.</span>
  <span m="4158245">So</span> <span m="4158728">when the</span> <span
  m="4159211">mean is</span> <span m="4159694">really small,</span> <span
  m="4160177">only</span> <span m="4160660">have</span> <span
  m="4161143">[INAUDIBLE].</span></p><p><span m="4163080">PROFESSOR: OK.</span>
  <span m="4163529">Yeah.</span> <span m="4164100">All</span> <span
  m="4164229">right.</span> <span m="4164990">So</span> <span
  m="4165090">what</span> <span m="4165189">you're</span> <span
  m="4165260">saying</span> <span m="4165450">is</span> <span
  m="4165529">that</span> <span m="4165830">Poisson</span> <span
  m="4166450">for</span> <span m="4166880">small</span> <span
  m="4167180">lambda</span> <span m="4168755">it</span> <span
  m="4169100">can't</span> <span m="4169479">go</span> <span
  m="4169600">negative.</span> <span m="4172550">OK.</span> <span
  m="4172720">No</span> <span m="4172779">I think  that</span> <span
  m="4173069">that's</span> <span m="4173569">true.</span> <span
  m="4176200">Yeah,</span> <span m="4176380">and so</span> <span
  m="4176600">somehow</span> <span m="4176930">the</span> <span
  m="4177060">probability</span> <span m="4177450">distribution</span> <span
  m="4177609">is</span> <span m="4177710">somehow</span> <span
  m="4177990">piling</span> <span m="4178350">up,</span> <span
  m="4178460">as</span> <span m="4178560">you</span> <span
  m="4178649">say.</span> <span m="4180149">What</span> <span
  m="4180420">are</span> <span m="4180660">some</span> <span
  m="4180720">other</span> <span m="4180870">ways</span> <span
  m="4181080">of</span> <span m="4181160">thinking</span> <span
  m="4181359">about</span> <span m="4181479">this?</span></p><p><span
  m="4190884">AUDIENCE: [INAUDIBLE].</span> <span m="4200289">Because if
  you</span> <span m="4200784">have a low</span> <span m="4201279">lambda</span>
  <span m="4201774">that means</span> <span m="4202269">it's</span> <span
  m="4202764">a</span> <span m="4203259">Poisson.</span> <span m="4204744">And
  then</span> <span m="4205239">I'm just</span> <span
  m="4205734">imagining</span> <span m="4207219">stretching</span> <span
  m="4207714">out.</span> <span m="4208704">[INAUDIBLE].</span></p><p><span
  m="4212510">PROFESSOR: OK.</span> <span m="4212720">So</span> <span
  m="4212850">I</span> <span m="4213060">think that's</span> <span
  m="4213480">fair.</span> <span m="4214480">Another</span> <span
  m="4214770">way</span> <span m="4214880">we can</span> <span
  m="4215060">think</span> <span m="4215210">about</span> <span
  m="4215390">this,</span> <span m="4215550">is</span> <span
  m="4215660">let's</span> <span m="4215810">say</span> <span
  m="4216010">that</span> <span m="4216170">we</span> <span
  m="4216290">have</span> <span m="4216490">some</span> <span
  m="4216700">process</span> <span m="4216985">that's</span> <span
  m="4217270">occurring</span> <span m="4217630">randomly</span> <span
  m="4218150">over</span> <span m="4218300">some</span> <span
  m="4218460">period</span> <span m="4218660">of</span> <span
  m="4218740">time.</span> <span m="4220600">And</span> <span
  m="4220810">this</span> <span m="4220930">could</span> <span
  m="4221010">be</span> <span m="4221180">say,</span> <span
  m="4221810">mRNA</span> <span m="4222160">production.</span> <span
  m="4223470">And</span> <span m="4224070">here</span> <span
  m="4224400">this</span> <span m="4224570">is</span> <span
  m="4224680">just</span> <span m="4224930">the</span> <span
  m="4225070">number</span> <span m="4225330">that</span> <span
  m="4225430">we</span> <span m="4225540">observe</span> <span
  m="4225970">here,</span> <span m="4226250">this</span> <span
  m="4226410">is</span> <span m="4226490">going</span> <span m="4226640">to be
  a</span> <span m="4226790">Poisson,</span> <span m="4227840">with</span> <span
  m="4227980">some</span> <span m="4228160">mean</span> <span
  m="4228390">lambda.</span></p><p><span m="4229580">Now</span> <span
  m="4229780">let's</span> <span m="4229980">just</span> <span
  m="4230100">say</span> <span m="4230230">that</span> <span
  m="4230340">I</span> <span m="4230390">take</span> <span
  m="4230570">another</span> <span m="4230840">one,</span> <span
  m="4232520">same</span> <span m="4232800">process,</span> <span
  m="4233580">same</span> <span m="4233900">period</span> <span
  m="4234120">of</span> <span m="4234200">time.</span> <span m="4234520">How
  is</span> <span m="4234710">this guy</span> <span m="4234850">going</span>
  <span m="4235060">to</span> <span m="4235100">be</span> <span
  m="4235150">distributed?</span> <span m="4238240">So</span> <span
  m="4238340">this</span> <span m="4238390">also</span> <span
  m="4238650">Poisson</span> <span m="4239070">of</span> <span
  m="4239120">lambda.</span> <span m="4243430">Now</span> <span
  m="4245880">let's</span> <span m="4246080">say</span> <span
  m="4246400">I</span> <span m="4246540">take</span> <span
  m="4246810">this</span> <span m="4246990">probability</span> <span
  m="4247420">distribution,</span> <span m="4247740">and</span> <span
  m="4248060">I</span> <span m="4248390">take</span> <span
  m="4248910">this</span> <span m="4249150">probability</span> <span
  m="4249460">distribution.</span> <span m="4249970">And I</span> <span
  m="4250310">convolve</span> <span m="4250730">them.</span> <span
  m="4252830">I'm going to</span> <span m="4252930">do the</span> <span
  m="4253020">calculation</span> <span m="4253460">of</span> <span
  m="4253500">my</span> <span m="4253610">head.</span> <span
  m="4254050">I</span> <span m="4254360">did</span> <span
  m="4254560">it.</span></p><p><span m="4257100">So</span> <span
  m="4257220">for</span> <span m="4257340">those</span> <span
  m="4257510">of</span> <span m="4257570">you</span> <span
  m="4257700">who</span> <span m="4257800">haven't</span> <span
  m="4257970">done</span> <span m="4258090">convolutions--</span> <span
  m="4259490">whatever.</span> <span m="4262410">Yes,</span> <span
  m="4263230">what's</span> <span m="4263370">the</span> <span
  m="4263450">new</span> <span m="4263560">distribution</span> <span
  m="4263970">going</span> <span m="4264050">to</span> <span
  m="4264090">be?</span> <span m="4271380">Poisson</span> <span
  m="4272010">2</span> <span m="4272210">lambda.</span> <span
  m="4273460">And</span> <span m="4273640">why</span> <span
  m="4273800">does</span> <span m="4273920">that</span> <span
  m="4274010">have</span> <span m="4274190">to</span> <span
  m="4274270">be?</span></p><p><span m="4277824">AUDIENCE:</span> <span
  m="4278065">That line was sort of-- you put it by n.</span></p><p><span
  m="4281690">PROFESSOR: Yeah.</span> <span m="4282370">That's</span> <span
  m="4282610">right.</span> <span m="4282790">This</span> <span
  m="4282960">line,</span> <span m="4283480">I</span> <span
  m="4283580">just</span> <span m="4283670">kind</span> <span
  m="4283870">of</span> <span m="4283990">like</span> <span m="4284190">I</span>
  <span m="4284300">just</span> <span m="4284450">made</span> <span
  m="4284720">it</span> <span m="4284860">up.</span> <span m="4285100">I</span>
  <span m="4285190">could</span> <span m="4285350">have</span> <span
  m="4285440">just</span> <span m="4285590">said,</span> <span
  m="4285750">oh.</span> <span m="4285990">Well it's</span> <span
  m="4286080">the</span> <span m="4286170">same</span> <span
  m="4286400">process</span> <span m="4287060">occurring</span> <span
  m="4287380">over</span> <span m="4287530">here.</span> <span
  m="4287890">So</span> <span m="4288530">we</span> <span
  m="4288650">have</span> <span m="4288790">to</span> <span
  m="4288870">have</span> <span m="4288980">the</span> <span
  m="4289050">mean.</span> <span m="4289490">It's</span> <span m="4289610">still
  is</span> <span m="4289790">going to</span> <span m="4289930">be</span> <span
  m="4290010">a</span> <span m="4290080">Poisson</span> <span
  m="4290450">process.</span> <span m="4291080">And</span> <span
  m="4291180">the</span> <span m="4291280">mean</span> <span
  m="4291950">has</span> <span m="4292200">to</span> <span m="4292280">be</span>
  <span m="4292490">the--</span> <span m="4294110">well</span> <span
  m="4294870">we</span> <span m="4294960">just</span> <span
  m="4295120">had</span> <span m="4295360">twice</span> <span
  m="4295660">the</span> <span m="4295730">length.</span> <span
  m="4295960">And</span> <span m="4296050">indeed,</span> <span
  m="4296730">for</span> <span m="4296930">independent</span> <span
  m="4297400">probability</span> <span m="4297660">distributions,</span> <span
  m="4298170">means</span> <span m="4298520">always</span> <span
  m="4298810">add.</span> <span m="4299840">So</span> <span
  m="4299940">this</span> <span m="4300110">all</span> <span
  m="4300250">consistent</span> <span m="4300720">will all</span> <span
  m="4300810">the</span> <span m="4300880">things</span> <span
  m="4301080">we</span> <span m="4301180">know.</span> <span
  m="4301780">So</span> <span m="4301980">this</span> <span
  m="4302190">has</span> <span m="4302380">to</span> <span m="4302440">be</span>
  <span m="4302630">a Poisson</span> <span m="4302880">of 2</span> <span
  m="4303010">lambda.</span> <span m="4303690">If</span> <span
  m="4303870">I</span> <span m="4303950">add</span> <span
  m="4304060">another</span> <span m="4304370">segment</span> <span
  m="4304730">on</span> <span m="4304870">here,</span> <span m="4305370">it
  has</span> <span m="4305520">to</span> <span m="4305630">Poisson</span> <span
  m="4305910">of</span> <span m="4305960">3</span> <span
  m="4306210">lambda.</span></p><p><span m="4307600">But</span> <span
  m="4307740">what</span> <span m="4307890">you</span> <span
  m="4307960">see</span> <span m="4308110">is</span> <span
  m="4308220">that</span> <span m="4308980">we</span> <span
  m="4309090">see</span> <span m="4309210">that</span> <span
  m="4309320">Poisson</span> <span m="4309860">of</span> <span
  m="4310000">n</span> <span m="4310200">lambda,</span> <span
  m="4311510">which</span> <span m="4311610">is</span> <span
  m="4311840">the</span> <span m="4311930">sum</span> <span
  m="4312330">over</span> <span m="4312480">many</span> <span
  m="4312680">Poissons.</span> <span m="4316380">Poissons</span> <span
  m="4316660">are</span> <span m="4316770">well-behaved</span> <span
  m="4317150">probability</span> <span m="4317400">distributions.</span> <span
  m="4317890">You add them</span> <span m="4318180">together,</span> <span
  m="4318460">you're going</span> <span m="4318560">to</span> <span
  m="4318600">have</span> <span m="4318700">to</span> <span
  m="4318880">get</span> <span m="4319080">a Gaussian.</span> <span
  m="4319990">So</span> <span m="4320090">you</span> <span
  m="4320170">can</span> <span m="4320280">see</span> <span
  m="4320550">that</span> <span m="4321430">the</span> <span
  m="4321650">Poisson</span> <span m="4322030">has</span> <span
  m="4322370">to</span> <span m="4322460">become</span> <span
  m="4322840">Gaussian</span> <span m="4323230">for</span> <span
  m="4323340">large</span> <span m="4323590">lambda.</span> <span
  m="4323940">And</span> <span m="4324220">indeed</span> <span
  m="4324520">it</span> <span m="4324600">does.</span></p><p><span
  m="4329520">So</span> <span m="4329630">there's</span> <span
  m="4329770">a</span> <span m="4329820">comment</span> <span
  m="4330130">about</span> <span m="4330340">this</span> <span
  m="4330510">in</span> <span m="4330920">the--</span></p><p><span
  m="4331660">AUDIENCE: It's</span> <span m="4332090">a little</span> <span
  m="4332555">bit more</span> <span m="4333020">complicated</span> <span
  m="4333485">than this</span> <span m="4333950">because</span> <span
  m="4335350">obviously</span> <span m="4335790">you</span> <span
  m="4335980">always</span> <span m="4336235">just</span> <span
  m="4336490">divide</span> <span m="4336990">from</span> <span
  m="4337440">lambda</span> <span m="4337935">[INAUDIBLE].</span> <span
  m="4341895">Like</span> <span m="4342390">you would have</span> <span
  m="4342885">to say</span> <span m="4343380">that Poisson lambda</span> <span
  m="4343875">is</span> <span m="4344370">just like</span> <span
  m="4344865">a</span> <span m="4345360">combination</span> <span
  m="4345855">of</span> <span m="4347340">S--</span></p><p><span
  m="4348340">PROFESSOR: OK.</span> <span m="4349410">You're</span> <span
  m="4349580">saying</span> <span m="4349840">that</span> <span
  m="4349940">if</span> <span m="4350070">I</span> <span m="4350170">do</span>
  <span m="4350420">this</span> <span m="4350630">calculation</span> <span
  m="4351220">backwards,</span> <span m="4351860">I'm</span> <span
  m="4351940">going</span> <span m="4352030">to</span> <span
  m="4352080">get</span> <span m="4352220">into</span> <span
  m="4352350">trouble.</span> <span m="4352710">Because if</span> <span
  m="4352850">I</span> <span m="4352940">try</span> <span m="4353110">to</span>
  <span m="4353190">break</span> <span m="4353370">them--</span></p><p><span
  m="4353560">AUDIENCE: So</span> <span m="4354007">if you</span> <span
  m="4354454">require</span> <span m="4354901">lambda</span> <span
  m="4355348">to be--</span> <span m="4356242">you</span> <span m="4356689">have
  to</span> <span m="4357136">have</span> <span m="4357590">like a</span> <span
  m="4358160">significant</span> <span m="4358590">probability</span> <span
  m="4359020">of getting</span> <span m="4359450">at least one</span> <span
  m="4359880">candidate, right?</span></p><p><span m="4360970">PROFESSOR:
  So</span> <span m="4361080">I'd</span> <span m="4361210">say</span> <span
  m="4361390">lambda</span> <span m="4361810">has to be</span> <span
  m="4362000">much,</span> <span m="4362500">much</span> <span
  m="4362700">larger</span> <span m="4362930">than</span> <span
  m="4363090">1.</span> <span m="4365670">So</span> <span
  m="4365840">once</span> <span m="4366000">you're</span> <span
  m="4366300">at</span> <span m="4366450">lambda</span> <span
  m="4366660">of</span> <span m="4366720">100,</span> <span
  m="4367210">it</span> <span m="4367460">looks</span> <span
  m="4367640">like</span> <span m="4367760">a</span> <span
  m="4368235">Gaussian.</span> <span m="4371090">And</span> <span m="4371450">in
  Sunney's</span> <span m="4371740">paper,</span> <span m="4372180">he
  had</span> <span m="4372330">a</span> <span m="4372380">comment</span> <span
  m="4372720">about this.</span> <span m="4373110">Does</span> <span
  m="4373230">anybody</span> <span m="4373510">remember</span> <span
  m="4373780">what</span> <span m="4373900">it</span> <span
  m="4373950">was?</span></p><p><span m="4379160">Was</span> <span
  m="4379380">mRNA</span> <span m="4379830">production</span> <span
  m="4380220">really</span> <span m="4380550">well</span> <span
  m="4380730">described</span> <span m="4381290">as--</span> <span
  m="4384300">they</span> <span m="4384650">mention</span> <span
  m="4385020">that</span> <span m="4385160">actually</span> <span
  m="4386320">there is</span> <span m="4386470">some</span> <span
  m="4386660">violation</span> <span m="4388090">of</span> <span
  m="4388290">this</span> <span m="4388460">model</span> <span
  m="4389280">in</span> <span m="4389420">the</span> <span
  m="4389500">data.</span></p><p><span m="4392105">AUDIENCE:</span> <span
  m="4392330">Does it go into eukaryotes?</span></p><p><span
  m="4394360">PROFESSOR: Oh,</span> <span m="4394580">as</span> <span
  m="4394660">soon as</span> <span m="4394900">you</span> <span m="4395050">go
  into</span> <span m="4395200">eukaryotes,</span> <span m="4396120">this</span>
  <span m="4396290">is</span> <span m="4396380">why</span> <span
  m="4396600">I</span> <span m="4397160">stay</span> <span
  m="4397410">away</span> <span m="4397580">from</span> <span
  m="4397710">them.</span> <span m="4398160">But</span> <span
  m="4398340">even</span> <span m="4398930">in</span> <span
  m="4399020">their</span> <span m="4399190">data,</span> <span
  m="4400430">in</span> <span m="4400650">E. coli,</span> <span
  m="4401350">they</span> <span m="4401660">actually</span> <span
  m="4401940">observed</span> <span m="4402490">a</span> <span
  m="4402630">deviation.</span></p><p><span m="4409955">So</span> <span
  m="4410260">what</span> <span m="4410490">they</span> <span
  m="4410640">found</span> <span m="4410840">is</span> <span
  m="4410920">that</span> <span m="4411070">there</span> <span
  m="4411170">was</span> <span m="4411290">a</span> <span
  m="4411380">cell</span> <span m="4411680">cycle</span> <span
  m="4411970">dependence</span> <span m="4412500">to</span> <span
  m="4413500">this</span> <span m="4414520">bursting</span> <span
  m="4415060">rate,</span> <span m="4415260">i.e.</span> <span
  m="4415440">the</span> <span m="4415520">mRNA</span> <span
  m="4416000">production</span> <span m="4416810">over</span> <span
  m="4416930">the</span> <span m="4417000">course</span> <span
  m="4417220">of</span> <span m="4417320">the</span> <span
  m="4417420">cell</span> <span m="4417500">cycle.</span> <span
  m="4419510">And</span> <span m="4419750">presumably</span> <span
  m="4420470">their</span> <span m="4420630">conclusion</span> <span
  m="4421130">of</span> <span m="4421280">this</span> <span
  m="4421450">was</span> <span m="4421570">that</span> <span
  m="4421880">you</span> <span m="4422160">have</span> <span
  m="4422380">this</span> <span m="4422580">guy.</span> <span
  m="4423740">And</span> <span m="4423870">then</span> <span
  m="4424030">he</span> <span m="4424290">turns</span> <span
  m="4424620">into,</span> <span m="4425320">gets</span> <span
  m="4425510">longer.</span> <span m="4427160">And</span> <span
  m="4427270">then</span> <span m="4427380">eventually</span> <span
  m="4428470">he</span> <span m="4428810">septates,</span> <span
  m="4429500">and</span> <span m="4429670">then</span> <span
  m="4429790">you</span> <span m="4429860">get</span> <span
  m="4430000">two</span> <span m="4430370">cells.</span></p><p><span
  m="4435540">What</span> <span m="4435910">he</span> <span
  m="4435990">found</span> <span m="4436190">is</span> <span
  m="4436260">that</span> <span m="4436880">these</span> <span
  m="4437570">longer</span> <span m="4438130">cells</span> <span
  m="4439270">had</span> <span m="4439410">actually</span> <span
  m="4439940">a</span> <span m="4440090">larger</span> <span
  m="4440620">rate</span> <span m="4441090">of</span> <span
  m="4441220">mRNA</span> <span m="4441620">synthesis</span> <span
  m="4442090">than</span> <span m="4442180">the</span> <span
  m="4442250">smaller</span> <span m="4442580">cells.</span> <span
  m="4443310">And</span> <span m="4443350">actually</span> <span
  m="4443790">this</span> <span m="4443980">makes</span> <span
  m="4444200">sense.</span> <span m="4444460">Because</span> <span
  m="4445430">here</span> <span m="4445830">you</span> <span
  m="4445960">maybe</span> <span m="4446160">have</span> <span
  m="4446330">just</span> <span m="4446510">one</span> <span
  m="4446710">copy</span> <span m="4447010">of</span> <span
  m="4447060">the</span> <span m="4447130">genome.</span> <span
  m="4447590">Whereas</span> <span m="4447800">here</span> <span
  m="4448620">you</span> <span m="4448800">might</span> <span
  m="4449240">have--</span> <span m="4451280">you're</span> <span
  m="4451390">making</span> <span m="4451640">a</span> <span
  m="4451690">second</span> <span m="4451960">copy.</span> <span
  m="4452930">So</span> <span m="4453820">you</span> <span
  m="4454210">might</span> <span m="4454330">have</span> <span
  m="4454420">two</span> <span m="4454570">copies</span> <span
  m="4454940">of</span> <span m="4454990">that</span> <span
  m="4455490">gene.</span> <span m="4456180">So it</span> <span
  m="4456680">may</span> <span m="4456910">make</span> <span
  m="4457190">sense</span> <span m="4457450">that</span> <span
  m="4458616">this</span> <span m="4459100">bursting</span> <span
  m="4459510">rate</span> <span m="4459720">should</span> <span
  m="4459880">grow.</span></p><p><span m="4461330">But</span> <span
  m="4461550">does that</span> <span m="4461620">mean</span> <span
  m="4461790">that</span> <span m="4461870">you</span> <span
  m="4462200">should</span> <span m="4462450">not</span> <span
  m="4462700">expect</span> <span m="4462975">it</span> <span
  m="4463250">to</span> <span m="4463310">be</span> <span m="4463630">a</span>
  <span m="4463830">Poisson</span> <span m="4464230">distribution</span> <span
  m="4464660">for</span> <span m="4464830">the</span> <span
  m="4465590">number</span> <span m="4466130">of</span> <span
  m="4466380">bursts</span> <span m="4466640">per</span> <span
  m="4466900">cell</span> <span m="4467150">cycle?</span> <span
  m="4473546">No.</span> <span m="4474040">It</span> <span
  m="4474140">actually</span> <span m="4474370">is</span> <span
  m="4474832">still--</span> <span m="4475756">it</span> <span
  m="4476220">still</span> <span m="4476490">is</span> <span
  m="4476600">described</span> <span m="4476960">by a</span> <span
  m="4477300">Poisson.</span> <span m="4477420">Because</span> <span
  m="4477560">you</span> <span m="4477640">can</span> <span
  m="4477750">just</span> <span m="4477870">say,</span> <span
  m="4478600">this</span> <span m="4478770">is</span> <span
  m="4478870">the</span> <span m="4478960">cell</span> <span
  m="4479230">cycle.</span> <span m="4480650">And</span> <span
  m="4481150">here</span> <span m="4481500">this</span> <span
  m="4481680">is</span> <span m="4481800">Poisson</span> <span
  m="4482450">of</span> <span m="4482590">sum</span> <span
  m="4482850">lambda</span> <span m="4483150">1.</span> <span
  m="4483480">Here</span> <span m="4483610">is</span> <span m="4483690">a</span>
  <span m="4483750">Poisson</span> <span m="4484160">of sum</span> <span
  m="4484510">lambda</span> <span m="4484610">2.</span> <span
  m="4485270">So</span> <span m="4485390">there</span> <span
  m="4485470">could</span> <span m="4485560">be</span> <span
  m="4485640">a</span> <span m="4485700">different</span> <span
  m="4486020">rate</span> <span m="4486970">over</span> <span
  m="4487110">the</span> <span m="4487200">course of the</span> <span
  m="4487440">thing.</span> <span m="4487700">But</span> <span
  m="4487860">you</span> <span m="4487940">still</span> <span
  m="4488210">have</span> <span m="4488330">just</span> <span
  m="4488660">two</span> <span m="4488810">Poissons.</span> <span
  m="4489200">You</span> <span m="4489310">still</span> <span
  m="4489480">get</span> <span m="4489590">another</span> <span
  m="4489830">Poisson.</span> <span m="4491230">So</span> <span
  m="4491370">adding</span> <span m="4491710">Poissons,</span> <span
  m="4492110">gives</span> <span m="4492250">you</span> <span
  m="4492320">backup</span> <span m="4492840">Poisson.</span> <span
  m="4494610">They</span> <span m="4494750">don't</span> <span
  m="4494910">have</span> <span m="4494990">to</span> <span
  m="4495070">have</span> <span m="4495200">the</span> <span
  m="4495250">same</span> <span m="4495470">mean</span> <span
  m="4495680">lambda.</span></p><p><span m="4504230">I</span> <span
  m="4504330">just</span> <span m="4504440">want</span> <span
  m="4504570">to</span> <span m="4505010">make</span> <span
  m="4505470">one</span> <span m="4505790">comment</span> <span
  m="4506270">about</span> <span m="4507390">what</span> <span
  m="4507550">you</span> <span m="4507590">have</span> <span
  m="4507670">to</span> <span m="4507760">do</span> <span
  m="4507950">once</span> <span m="4508140">you</span> <span
  m="4508220">start</span> <span m="4508440">thinking</span> <span
  m="4508700">about</span> <span m="4508970">eukaryotes.</span> <span
  m="4509940">And</span> <span m="4510070">the</span> <span
  m="4510140">basic--</span> <span m="4514310">so</span> <span m="4514390">you
  can</span> <span m="4514500">see</span> <span m="4514610">the</span> <span
  m="4514690">gamma</span> <span m="4515050">distribution</span> <span
  m="4515540">can</span> <span m="4515670">either</span> <span
  m="4515840">be</span> <span m="4516020">peaked</span> <span
  m="4516350">at</span> <span m="4516440">0,</span> <span m="4516830">or</span>
  <span m="4517000">it</span> <span m="4517060">can</span> <span
  m="4517170">be</span> <span m="4517290">peaked</span> <span
  m="4517550">at</span> <span m="4517650">nonzero</span> <span
  m="4518000">value.</span> <span m="4519940">So</span> <span
  m="4520050">most,</span> <span m="4520560">for</span> <span
  m="4520660">like</span> <span m="4520810">highly</span> <span
  m="4521060">expressed</span> <span m="4521390">proteins,</span> <span
  m="4521710">you'll</span> <span m="4521840">see</span> <span
  m="4522030">that</span> <span m="4522180">it</span> <span
  m="4522280">looks</span> <span m="4523120">something</span> <span
  m="4523410">like</span> <span m="4523900">this.</span></p><p><span
  m="4524880">Now</span> <span m="4526170">for</span> <span
  m="4526580">eukaryotes,</span> <span m="4526910">you</span> <span
  m="4527240">also</span> <span m="4527500">have</span> <span
  m="4527620">to</span> <span m="4527700">consider</span> <span
  m="4528450">there's</span> <span m="4528660">some</span> <span
  m="4528900">rate</span> <span m="4530210">that</span> <span
  m="4530310">you</span> <span m="4530490">go</span> <span
  m="4531300">between</span> <span m="4531580">an</span> <span
  m="4531860">active</span> <span m="4532290">and</span> <span
  m="4532490">inactive</span> <span m="4533160">promoter.</span> <span
  m="4537790">And</span> <span m="4538220">this</span> <span
  m="4538380">actually</span> <span m="4538590">makes</span> <span
  m="4538790">things</span> <span m="4538980">much</span> <span
  m="4539240">more</span> <span m="4539430">complicated.</span> <span
  m="4540470">So</span> <span m="4540840">there's</span> <span
  m="4541030">a</span> <span m="4541180">rate</span> <span
  m="4541550">going</span> <span m="4542110">to</span> <span
  m="4542820">inactive,</span> <span m="4543220">a</span> <span
  m="4543530">rate</span> <span m="4543730">going</span> <span
  m="4544080">to</span> <span m="4544370">active.</span> <span
  m="4545990">And</span> <span m="4546180">so</span> <span
  m="4546260">now</span> <span m="4547420">if</span> <span
  m="4547590">you</span> <span m="4547710">look</span> <span
  m="4547890">at,</span> <span m="4548070">for</span> <span
  m="4548170">example,</span> <span m="4548390">the</span> <span
  m="4548490">mRNA</span> <span m="4549670">number</span> <span
  m="4550150">per</span> <span m="4550320">cell,</span> <span
  m="4550630">you'll</span> <span m="4550790">see</span> <span
  m="4550980">that</span> <span m="4551390">it</span> <span
  m="4551510">is</span> <span m="4551710">no</span> <span
  m="4551980">longer</span> <span m="4552310">a Poisson.</span></p><p><span
  m="4553950">And</span> <span m="4554560">I</span> <span
  m="4554740">encourage</span> <span m="4555170">you,</span> <span
  m="4555510">if</span> <span m="4555610">you're</span> <span
  m="4555760">curious</span> <span m="4556110">about</span> <span
  m="4556290">such</span> <span m="4556470">things,</span> <span
  m="4557230">to</span> <span m="4557350">come</span> <span
  m="4557600">up</span> <span m="4557910">and</span> <span
  m="4558560">look</span> <span m="4558860">at</span> <span
  m="4559050">this.</span> <span m="4560340">The</span> <span
  m="4560860">solution</span> <span m="4561410">for</span> <span
  m="4561500">the</span> <span m="4561560">steady</span> <span
  m="4561780">state</span> <span m="4561900">distribution</span> <span
  m="4562320">has</span> <span m="4562560">been</span> <span
  m="4562660">solved</span> <span m="4562950">analytically.</span> <span
  m="4563420">For</span> <span m="4563530">example,</span> <span
  m="4564460">Arjun</span> <span m="4564780">Raj,</span> <span m="4565190">who
  is</span> <span m="4565360">the</span> <span m="4565490">author</span> <span
  m="4565940">of</span> <span m="4566170">the</span> <span
  m="4566260">review</span> <span m="4566630">that</span> <span
  m="4566690">you</span> <span m="4566820">guys</span> <span
  m="4567060">just</span> <span m="4567250">read,</span> <span
  m="4567910">derived</span> <span m="4569510">this</span> <span
  m="4569780">equation</span> <span m="4570240">here,</span> <span
  m="4571100">which</span> <span m="4572070">I don't</span> <span
  m="4572160">know</span> <span m="4572330">if</span> <span
  m="4572390">you</span> <span m="4572490">can</span> <span
  m="4572610">see.</span> <span m="4573020">But</span> <span
  m="4573160">even</span> <span m="4573370">from</span> <span
  m="4573520">a</span> <span m="4573570">distance,</span> <span
  m="4573960">you</span> <span m="4574050">can</span> <span
  m="4574130">see</span> <span m="4574330">that</span> <span
  m="4574510">this</span> <span m="4574690">is</span> <span
  m="4574820">the</span> <span m="4574900">solution.</span> <span
  m="4575740">And</span> <span m="4575850">this</span> <span
  m="4575940">is</span> <span m="4576130">just</span> <span
  m="4576400">for</span> <span m="4576480">the</span> <span
  m="4576610">mRNA</span> <span m="4577250">distribution.</span> <span
  m="4577525">This is</span> <span m="4577800">not</span> <span
  m="4578030">even</span> <span m="4578190">getting</span> <span
  m="4578360">to</span> <span m="4578420">the</span> <span
  m="4578630">level</span> <span m="4578920">of the</span> <span
  m="4579010">protein.</span></p><p><span m="4580640">And</span> <span
  m="4580800">it</span> <span m="4580890">involves</span> <span
  m="4581240">many</span> <span m="4581550">gamma</span> <span
  m="4581870">functions,</span> <span m="4582860">as</span> <span
  m="4583060">well</span> <span m="4583430">as</span> <span m="4584620">a</span>
  <span m="4584780">confluent</span> <span m="4585580">hypergeometric</span>
  <span m="4586480">function</span> <span m="4586860">of</span> <span
  m="4586940">the</span> <span m="4587020">first</span> <span
  m="4587290">kind,</span> <span m="4589210">which</span> <span
  m="4589330">is</span> <span m="4589770">a</span> <span
  m="4589930">disaster.</span> <span m="4591400">But</span> <span
  m="4591840">he</span> <span m="4592400">went</span> <span
  m="4592670">to</span> <span m="4592790">Courant.</span> <span
  m="4593230">He</span> <span m="4593330">was</span> <span m="4593580">an</span>
  <span m="4593740">applied</span> <span m="4594100">mathematician.</span> <span
  m="4594570">So</span> <span m="4594660">this</span> <span
  m="4594810">is,</span> <span m="4594930">I</span> <span
  m="4594980">guess,</span> <span m="4595610">this</span> <span
  m="4595760">is</span> <span m="4595880">what</span> <span
  m="4596180">you</span> <span m="4596360">can</span> <span
  m="4596480">do</span> <span m="4596770">after</span> <span
  m="4597030">doing</span> <span m="4597290">a</span> <span
  m="4597340">PhD</span> <span m="4597740">in</span> <span
  m="4597940">applied</span> <span m="4598190">mathematics.</span></p><p><span
  m="4600030">The</span> <span m="4600330">point</span> <span
  m="4600610">though</span> <span m="4600800">is</span> <span
  m="4600900">that</span> <span m="4601560">it</span> <span
  m="4601900">ends</span> <span m="4602060">up</span> <span
  m="4602150">being</span> <span m="4602300">very</span> <span
  m="4602490">complicated.</span> <span m="4603020">And</span> <span
  m="4603140">you</span> <span m="4603240">can</span> <span
  m="4603410">get</span> <span m="4604530">hugely</span> <span
  m="4605380">varying</span> <span m="4605890">distributions</span> <span
  m="4606510">for</span> <span m="4606580">the</span> <span
  m="4606850">mRNA.</span> <span m="4607490">And</span> <span
  m="4607640">indeed</span> <span m="4608340">this</span> <span
  m="4608670">is</span> <span m="4608920">seen</span> <span
  m="4609290">in</span> <span m="4609530">individual</span> <span
  m="4609970">cells.</span> <span m="4610240">If you</span> <span
  m="4610390">look</span> <span m="4610540">at</span> <span
  m="4610620">mammalian</span> <span m="4611120">cells,</span> <span
  m="4611860">just</span> <span m="4612120">at the</span> <span
  m="4612210">mRNA</span> <span m="4612960">level,</span> <span
  m="4613170">you</span> <span m="4613260">can</span> <span
  m="4613370">have</span> <span m="4613570">some</span> <span
  m="4613790">cells</span> <span m="4614480">that</span> <span
  m="4614810">have</span> <span m="4614950">hardly</span> <span
  m="4615200">any</span> <span m="4615610">mRNA,</span> <span
  m="4615980">some</span> <span m="4616260">that</span> <span
  m="4616310">have</span> <span m="4616430">a</span> <span
  m="4616470">huge</span> <span m="4616780">number.</span> <span
  m="4617920">The</span> <span m="4618030">protein</span> <span
  m="4618390">distributions</span> <span m="4619360">actually</span> <span
  m="4619720">end</span> <span m="4619850">up</span> <span
  m="4619970">being</span> <span m="4620890">more</span> <span
  m="4621420">regular</span> <span m="4622570">than</span> <span
  m="4622700">the</span> <span m="4622800">mRNA</span> <span
  m="4623240">distributions.</span> <span m="4623890">Because</span> <span
  m="4624550">of</span> <span m="4624780">this</span> <span
  m="4625270">difference</span> <span m="4625540">in</span> <span
  m="4625620">lifetime.</span></p><p><span m="4627290">So</span> <span
  m="4627690">the</span> <span m="4627970">mRNA</span> <span
  m="4628370">numbers</span> <span m="4628700">may</span> <span
  m="4628860">fluctuate</span> <span m="4629340">wildly.</span> <span
  m="4629800">But</span> <span m="4630460">the</span> <span
  m="4630630">protein</span> <span m="4631240">numbers</span> <span
  m="4631610">will</span> <span m="4631730">fluctuate</span> <span
  m="4632150">less,</span> <span m="4632480">because</span> <span
  m="4632780">they</span> <span m="4632950">last</span> <span
  m="4633360">longer.</span> <span m="4634720">So</span> <span
  m="4634800">then</span> <span m="4634930">you</span> <span
  m="4635040">do</span> <span m="4635210">some</span> <span
  m="4635400">averaging</span> <span m="4635990">over</span> <span
  m="4636140">this</span> <span m="4636310">crazy</span> <span
  m="4636680">mRNA</span> <span m="4637090">business.</span></p><p><span
  m="4643940">Now</span> <span m="4644150">in</span> <span
  m="4644300">the</span> <span m="4644380">last--</span> <span
  m="4644710">yeah,</span> <span m="4645195">go ahead.</span></p><p><span
  m="4645680">AUDIENCE: In terms</span> <span m="4646165">of</span> <span
  m="4646650">timescale,</span> <span m="4647135">like</span> <span
  m="4647620">all this</span> <span m="4648590">is</span> <span
  m="4649075">switching</span> <span m="4649560">to the</span> <span
  m="4650045">active and</span> <span m="4650530">inactive</span> <span
  m="4651015">promoter,</span> <span m="4651500">like to the</span> <span
  m="4651985">other--</span></p><p><span m="4652480">PROFESSOR: Ah,</span> <span
  m="4652700">yes.</span> <span m="4653390">That's</span> <span
  m="4653530">a</span> <span m="4653590">good</span> <span
  m="4653780">question.</span> <span m="4656490">I</span> <span
  m="4656960">think</span> <span m="4657220">that</span> <span
  m="4657470">people</span> <span m="4657900">argue</span> <span
  m="4658610">very</span> <span m="4658750">much</span> <span
  m="4658920">about</span> <span m="4659180">this.</span> <span
  m="4659470">This</span> <span m="4660240">is</span> <span
  m="4660390">kind</span> <span m="4660530">of</span> <span
  m="4660630">minutes.</span> <span m="4661630">This</span> <span
  m="4661830">can</span> <span m="4662030">be</span> <span
  m="4662900">hours.</span> <span m="4664150">And</span> <span
  m="4664360">this</span> <span m="4665110">is</span> <span
  m="4666060">maybe</span> <span m="4666460">in</span> <span
  m="4666690">between</span> <span m="4667170">those</span> <span
  m="4667380">timescales</span> <span m="4668370">would</span> <span
  m="4668550">be</span> <span m="4668700">typical.</span> <span
  m="4671020">And</span> <span m="4671190">when</span> <span
  m="4671300">I</span> <span m="4671350">say</span> <span
  m="4671510">hours,</span> <span m="4671810">especially like in</span> <span
  m="4672270">mammalian</span> <span m="4672800">cells,</span> <span
  m="4673540">they</span> <span m="4673630">might</span> <span
  m="4673810">only</span> <span m="4673970">divide</span> <span m="4674350">once
  a day</span> <span m="4674890">or</span> <span m="4675010">so.</span> <span
  m="4675630">So</span> <span m="4675710">then</span> <span
  m="4677340">this</span> <span m="4677800">gets</span> <span
  m="4677980">to</span> <span m="4678040">be</span> <span
  m="4678130">many</span> <span m="4678370">hours.</span> <span m="4679460">And
  then</span> <span m="4679600">I'd</span> <span m="4679750">say</span> <span
  m="4682400">minutes</span> <span m="4682830">is</span> <span
  m="4682970">kind</span> <span m="4683220">of</span> <span
  m="4683460">the--</span></p><p><span m="4690110">So</span> <span
  m="4691160">there</span> <span m="4691550">were</span> <span
  m="4691630">many</span> <span m="4691910">biological</span> <span
  m="4692530">examples</span> <span m="4693070">that</span> <span
  m="4693190">were</span> <span m="4693400">discussed</span> <span
  m="4693860">in</span> <span m="4693920">that</span> <span
  m="4694090">review.</span> <span m="4694690">And</span> <span
  m="4694860">I'm</span> <span m="4695540">not</span> <span
  m="4695690">going</span> <span m="4695770">to</span> <span
  m="4695850">talk</span> <span m="4696080">about</span> <span
  m="4696220">all</span> <span m="4696440">them.</span> <span
  m="4696560">But</span> <span m="4696660">I</span> <span
  m="4696720">think</span> <span m="4696880">that</span> <span
  m="4697000">it's</span> <span m="4697310">a</span> <span
  m="4697350">nice</span> <span m="4697670">review.</span> <span
  m="4698070">Because</span> <span m="4698740">it</span> <span
  m="4699190">goes</span> <span m="4699420">over</span> <span
  m="4699670">some</span> <span m="4699800">of</span> <span
  m="4699840">the</span> <span m="4699910">papers</span> <span m="4700280">that
  you've</span> <span m="4700460">read,</span> <span m="4700900">or that</span>
  <span m="4700990">we've</span> <span m="4701120">talked</span> <span
  m="4701370">about</span> <span m="4701500">over</span> <span
  m="4701580">the</span> <span m="4701660">course</span> <span
  m="4701860">of</span> <span m="4701960">the</span> <span
  m="4702060">semester.</span> <span m="4702950">It</span> <span
  m="4703000">also</span> <span m="4703770">illustrates</span> <span
  m="4704220">some</span> <span m="4704340">different</span> <span
  m="4704700">biological</span> <span m="4705630">context</span> <span
  m="4706050">in</span> <span m="4706100">which</span> <span
  m="4706310">noise</span> <span m="4706730">may</span> <span
  m="4706920">play</span> <span m="4707110">a</span> <span
  m="4707180">role.</span></p><p><span m="4708460">But</span> <span
  m="4708680">I</span> <span m="4708820">want</span> <span m="4709020">to</span>
  <span m="4709080">mention</span> <span m="4709560">one</span> <span
  m="4709780">study</span> <span m="4710110">that</span> <span
  m="4710220">was</span> <span m="4710380">done</span> <span
  m="4711070">by</span> <span m="4711400">actually</span> <span
  m="4711650">again,</span> <span m="4712140">Arjun</span> <span
  m="4712940">together</span> <span m="4713450">with</span> <span
  m="4713860">Hedia</span> <span m="4714060">Maamar,</span> <span
  m="4715010">in</span> <span m="4716210">collaboration</span> <span
  m="4716460">with</span> <span m="4716720">Dave</span> <span
  m="4716980">Dubnau,</span> <span m="4717460">where</span> <span
  m="4717590">they</span> <span m="4717690">were</span> <span
  m="4717790">studying</span> <span m="4718060">this</span> <span
  m="4718180">process</span> <span m="4718500">of</span> <span
  m="4718580">competence.</span> <span m="4720130">So</span> <span
  m="4720400">in</span> <span m="4720560">B. subtilis,</span> <span
  m="4721640">during</span> <span m="4722010">sometimes</span> <span
  m="4722750">particularly</span> <span m="4723060">of</span> <span
  m="4723150">starvation,</span> <span m="4723880">or</span> <span
  m="4724240">other</span> <span m="4724440">forms</span> <span
  m="4724680">of</span> <span m="4724750">unhappiness,</span> <span
  m="4725580">they</span> <span m="4726450">kind</span> <span
  m="4726600">of</span> <span m="4726680">pick</span> <span
  m="4726900">up</span> <span m="4727070">DNA</span> <span
  m="4727380">from</span> <span m="4727530">outside.</span> <span
  m="4729190">So</span> <span m="4729320">they'll</span> <span
  m="4729650">import</span> <span m="4730100">DNA.</span> <span m="4731170">Some
  of</span> <span m="4731420">it</span> <span m="4731480">may</span> <span
  m="4731590">just</span> <span m="4731750">be</span> <span
  m="4731930">consumed.</span> <span m="4732740">But</span> <span
  m="4732820">some of</span> <span m="4733100">it</span> <span
  m="4733210">could</span> <span m="4733350">actually</span> <span
  m="4733720">be</span> <span m="4734510">incorporated</span> <span
  m="4734865">into the</span> <span m="4735220">genome.</span></p><p><span
  m="4736940">Now</span> <span m="4738260">what</span> <span
  m="4738440">they</span> <span m="4738540">found</span> <span
  m="4738820">is</span> <span m="4738920">that</span> <span
  m="4739210">this</span> <span m="4739420">competence</span> <span
  m="4739880">process</span> <span m="4740950">is</span> <span
  m="4741130">mediated</span> <span m="4741740">by</span> <span
  m="4742020">this</span> <span m="4742180">protein</span> <span
  m="4742500">comK.</span> <span m="4748000">And</span> <span
  m="4748190">there</span> <span m="4748260">was</span> <span
  m="4748340">a</span> <span m="4748400">positive</span> <span
  m="4748770">feedback</span> <span m="4749100">loop,</span> <span
  m="4750450">where</span> <span m="4750660">this</span> <span
  m="4750780">guy</span> <span m="4751450">ends</span> <span
  m="4751680">up</span> <span m="4752160">positively</span> <span
  m="4752650">activating</span> <span m="4753070">itself.</span> <span
  m="4754780">And</span> <span m="4754960">this</span> <span
  m="4755210">helps</span> <span m="4756360">lead</span> <span
  m="4756710">to</span> <span m="4756790">bistability</span> <span
  m="4757650">in</span> <span m="4757790">this</span> <span
  m="4757980">network.</span> <span m="4759270">Only</span> <span
  m="4759510">a</span> <span m="4759560">small</span> <span
  m="4760040">fraction</span> <span m="4760590">of</span> <span
  m="4760690">the</span> <span m="4760790">cells</span> <span
  m="4761270">kind</span> <span m="4761410">of</span> <span
  m="4761540">get</span> <span m="4761850">into</span> <span
  m="4762350">this</span> <span m="4762500">high</span> <span
  m="4762790">feedback</span> <span m="4763260">state.</span> <span
  m="4763760">Only</span> <span m="4763960">a</span> <span
  m="4764020">small</span> <span m="4764350">fraction</span> <span
  m="4764700">of</span> <span m="4765010">them</span> <span
  m="4765320">activate</span> <span m="4765780">competence</span> <span
  m="4766230">and</span> <span m="4766330">then</span> <span
  m="4766660">uptake</span> <span m="4767040">DNA.</span></p><p><span
  m="4768260">And</span> <span m="4768400">what</span> <span
  m="4768520">they</span> <span m="4768620">were</span> <span
  m="4768740">able</span> <span m="4768900">to</span> <span
  m="4768950">show</span> <span m="4769590">in</span> <span
  m="4769700">that</span> <span m="4769880">study</span> <span
  m="4770150">was</span> <span m="4770290">that</span> <span
  m="4770690">it</span> <span m="4770900">was</span> <span
  m="4771270">sort</span> <span m="4771440">of</span> <span
  m="4771520">noise-induced.</span> <span m="4773270">That</span> <span
  m="4773510">they</span> <span m="4773740">were</span> <span
  m="4773860">able</span> <span m="4774200">to</span> <span
  m="4774660">vary</span> <span m="4775580">both</span> <span
  m="4775930">the</span> <span m="4776100">transcription</span> <span
  m="4776760">rate</span> <span m="4776970">and</span> <span
  m="4777060">the</span> <span m="4777130">translation</span> <span
  m="4777760">rate,</span> <span m="4778420">in</span> <span
  m="4778520">a</span> <span m="4778580">way</span> <span m="4779120">so</span>
  <span m="4779310">as</span> <span m="4779450">to</span> <span
  m="4779550">reduce</span> <span m="4780030">the</span> <span
  m="4780100">noise.</span> <span m="4781840">The</span> <span
  m="4781920">mean</span> <span m="4782220">is</span> <span
  m="4782320">the</span> <span m="4782410">same.</span> <span
  m="4783580">So</span> <span m="4783720">if</span> <span m="4783780">you</span>
  <span m="4785000">in</span> <span m="4785210">the</span> <span
  m="4785750">context</span> <span m="4786320">of</span> <span
  m="4787770">this</span> <span m="4788020">model,</span> <span
  m="4789190">what</span> <span m="4789290">they</span> <span
  m="4789390">did</span> <span m="4789650">is</span> <span
  m="4789790">they</span> <span m="4790020">varied</span> <span
  m="4791600">transcription</span> <span m="4792220">rate,</span> <span
  m="4792640">and they</span> <span m="4792950">varied</span> <span
  m="4793130">translation</span> <span m="4793420">rate,</span> <span
  m="4795640">each</span> <span m="4795910">say,</span> <span
  m="4796090">by</span> <span m="4796250">a</span> <span
  m="4796350">factor</span> <span m="4796520">of</span> <span
  m="4796620">2.</span> <span m="4798180">So</span> <span
  m="4798280">they</span> <span m="4798350">got</span> <span
  m="4798460">the</span> <span m="4798520">same</span> <span
  m="4798740">mean,</span> <span m="4799100">but</span> <span
  m="4799220">then</span> <span m="4799440">different</span> <span
  m="4799910">noise.</span></p><p><span m="4802550">And</span> <span
  m="4802850">we're</span> <span m="4803050">out</span> <span
  m="4803190">of</span> <span m="4803280">time.</span> <span
  m="4803630">I</span> <span m="4803690">would</span> <span
  m="4803890">have</span> <span m="4804070">you</span> <span
  m="4804210">vote.</span> <span m="4805340">But</span> <span
  m="4805640">can</span> <span m="4805810">anybody</span> <span
  m="4806140">remember?</span> <span m="4806800">If</span> <span
  m="4807220">you</span> <span m="4807330">want</span> <span
  m="4807460">to</span> <span m="4807530">decrease</span> <span
  m="4808180">the</span> <span m="4808280">noise</span> <span
  m="4810010">in</span> <span m="4810120">the</span> <span
  m="4810240">number</span> <span m="4810590">of</span> <span
  m="4810640">the</span> <span m="4810720">proteins,</span> <span
  m="4811900">which</span> <span m="4812080">of</span> <span
  m="4812130">these</span> <span m="4812310">do you</span> <span
  m="4812410">want</span> <span m="4812500">to</span> <span
  m="4812540">go</span> <span m="4812690">up,</span> <span m="4812910">and
  which</span> <span m="4813130">do you</span> <span m="4813220">want</span>
  <span m="4813300">to</span> <span m="4813340">go</span> <span
  m="4813410">down?</span> <span m="4815820">And</span> <span
  m="4815950">which</span> <span m="4816090">one is</span> <span
  m="4816250">going</span> <span m="4816590">up?</span> <span
  m="4816800">Which</span> <span m="4816930">one's</span> <span
  m="4817080">going</span> <span m="4817260">up</span> <span
  m="4817555">let's</span> <span m="4817850">say?</span></p><p><span
  m="4818710">AUDIENCE: Sm.</span></p><p><span m="4819140">PROFESSOR: Sm.</span>
  <span m="4820270">Right,</span> <span m="4820510">so if</span> <span
  m="4820600">you</span> <span m="4820730">want</span> <span
  m="4820920">to</span> <span m="4821010">reduce</span> <span
  m="4821460">the</span> <span m="4821550">noise,</span> <span
  m="4823270">but</span> <span m="4823290">keep</span> <span
  m="4823460">the</span> <span m="4823590">mean</span> <span
  m="4823680">constant,</span> <span m="4823980">you</span> <span
  m="4824400">increase</span> <span m="4824820">the</span> <span
  m="4824890">rate</span> <span m="4825690">of</span> <span
  m="4826100">transcription,</span> <span m="4826440">and</span> <span
  m="4826780">you</span> <span m="4826880">decrease</span> <span
  m="4827410">the</span> <span m="4827490">rate</span> <span
  m="4827610">of</span> <span m="4827660">translation.</span> <span
  m="4828120">Because</span> <span m="4828770">the</span> <span
  m="4828930">noise</span> <span m="4829320">is</span> <span
  m="4829390">really</span> <span m="4829580">driven</span> <span
  m="4829820">by</span> <span m="4829920">this</span> <span
  m="4830100">protein</span> <span m="4830460">bursting</span> <span
  m="4830970">behavior</span> <span m="4831350">here.</span> <span
  m="4833250">And</span> <span m="4833680">that's</span> <span
  m="4833930">precisely</span> <span m="4834380">what</span> <span
  m="4834500">they</span> <span m="4834600">did.</span> <span
  m="4834910">They</span> <span m="4835060">changed</span> <span
  m="4835440">those</span> <span m="4835650">two</span> <span
  m="4835780">quantities.</span> <span m="4836630">They</span> <span
  m="4836730">got</span> <span m="4836860">the</span> <span
  m="4836920">same</span> <span m="4837180">mean,</span> <span
  m="4837850">lower</span> <span m="4838160">noise,</span> <span
  m="4838480">and</span> <span m="4838580">then</span> <span
  m="4838710">they</span> <span m="4838840">reduced</span> <span
  m="4839340">the</span> <span m="4839410">amount</span> <span m="4839710">of
  competence</span> <span m="4840010">in that</span> <span
  m="4840310">sur--</span></p>
embedded_media:
  - uid: b34f72bfd7dec4bdee0cf839c3b6db65
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 03bVGr-vYHQ
  - uid: 24bf575c88cdf09b6d4b44101db83f22
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/03bVGr-vYHQ/default.jpg'
  - uid: fea908d9629154888aaebe1e393cec03
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1020693367'
  - uid: eeb963a2aaaff371ce958f87336e5726
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT8.591JF14/MIT8_591JF14_lec09_300k.mp4'
  - uid: 5176e254e93492bce4d2986dc0aa7bf4
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 03bVGr-vYHQ
  - uid: ee72dae34dbae286bb2fe4f7aa41b07d
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: 03bVGr-vYHQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/causes-and-consequences-of-stochastic-gene-expression/03bVGr-vYHQ.srt
  - uid: 195cbaeb87e41654080f5dab22574438
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: 03bVGr-vYHQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/causes-and-consequences-of-stochastic-gene-expression/03bVGr-vYHQ.pdf
  - uid: 205a5f069f8e95b5a4ab96b3ba75fc18
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 9d79427d5275b79ea2123c1bacd9e9e4
    parent_uid: fccab379f1fc5a5de2fe49b20461eca2
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
