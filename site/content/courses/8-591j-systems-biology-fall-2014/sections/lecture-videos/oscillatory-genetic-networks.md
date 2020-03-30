---
title: Oscillatory Genetic Networks
uid: 483f31c40b541821b8d0f3daee0f195f
parent_uid: 2c19124a07b81891918cf65ff26fbc3c
technical_location: >-
  https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/oscillatory-genetic-networks
short_url: oscillatory-genetic-networks
inline_embed_id: 3899252oscillatorygeneticnetworks36964253
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Prof. Jeff Gore introduces
  oscillatory genetic networks. He asks why oscillations are useful, and why
  might we want to design an oscillator. Central to the lecture is a Nature
  article: <a href="http://dx.doi.org/10.1038/35002125">A Synthetic Oscillatory
  Network of Transcriptional Regulators</a>.</p> <p><strong>Instructor:</strong>
  Prof. Jeff Gore</p>
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
  m="12800">materials</span> <span m="13330">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15560">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17260">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21225">PROFESSOR:</span> <span m="21610">Today,</span> <span m="21820">what
  we're</span> <span m="21950">going</span> <span m="22070">to</span> <span
  m="22110">do</span> <span m="22280">is,</span> <span m="23090">first,</span>
  <span m="23570">introduce</span> <span m="23930">this</span> <span
  m="24100">idea</span> <span m="24460">of</span> <span
  m="24540">oscillations.</span> <span m="25130">It</span> <span
  m="25500">might</span> <span m="25780">be</span> <span
  m="25860">useful.</span> <span m="26740">A</span> <span m="26830">fair</span>
  <span m="26980">amount</span> <span m="27170">of</span> <span
  m="27540">the</span> <span m="27710">day</span> <span m="27900">will</span>
  <span m="28010">be</span> <span m="28100">spent</span> <span
  m="28530">discussing</span> <span m="29150">this</span> <span
  m="29330">paper</span> <span m="29980">by</span> <span
  m="30170">Michael</span> <span m="30590">Elowitz</span> <span m="31280">and
  Stan</span> <span m="31550">Leibler</span> <span m="32119">that</span> <span
  m="32310">you</span> <span m="32600">read</span> <span m="33070">over</span>
  <span m="33260">the</span> <span m="33320">last</span> <span
  m="33550">few</span> <span m="33670">days,</span> <span m="34340">which</span>
  <span m="34600">was</span> <span m="34720">the</span> <span
  m="34800">first,</span> <span m="35210">kind of,</span> <span
  m="35470">experimental</span> <span m="37260">demonstration</span> <span
  m="37525">that</span> <span m="37790">you</span> <span m="37900">could</span>
  <span m="38080">take</span> <span m="38320">these</span> <span
  m="38480">random</span> <span m="38680">components,</span> <span
  m="39140">put</span> <span m="39270">them</span> <span
  m="39370">together,</span> <span m="39720">and</span> <span
  m="39960">generate</span> <span m="40320">oscillatory</span> <span
  m="40410">gene</span> <span m="41020">networks.</span></p><p><span
  m="42270">And</span> <span m="43530">finally,</span> <span
  m="44540">it's</span> <span m="44670">likely</span> <span
  m="45070">we're</span> <span m="45220">going</span> <span m="45320">to</span>
  <span m="45720">run out of time</span> <span m="45890">around</span> <span
  m="46060">here.</span> <span m="46960">But</span> <span m="47200">if</span>
  <span m="47320">we</span> <span m="47550">have</span> <span
  m="47650">time,</span> <span m="47960">we'll</span> <span
  m="48060">talk</span> <span m="48160">about</span> <span
  m="48670">other</span> <span m="49050">oscillator</span> <span
  m="49430">designs.</span> <span m="49780">In</span> <span
  m="49870">particular,</span> <span m="50110">these</span> <span
  m="50340">relaxation</span> <span m="51040">oscillators</span> <span
  m="51980">that</span> <span m="52660">are</span> <span m="52840">both</span>
  <span m="53970">robust</span> <span m="54560">and</span> <span
  m="54750">tunable.</span> <span m="55930">It's</span> <span
  m="56080">likely</span> <span m="56220">we're</span> <span
  m="56370">going</span> <span m="56450">to</span> <span
  m="57600">discuss</span> <span m="57990">this</span> <span m="58270">on</span>
  <span m="58780">Tuesday.</span> <span m="64360">All right,</span> <span
  m="64619">so</span> <span m="64879">I</span> <span m="65260">want</span> <span
  m="65440">to</span> <span m="66020">start</span> <span m="66300">by</span>
  <span m="66370">just</span> <span m="66590">thinking</span> <span
  m="66840">about</span> <span m="68140">other</span> <span
  m="68550">oscillator</span> <span m="69010">designs.</span></p><p><span
  m="71100">But</span> <span m="71250">before</span> <span m="71510">we</span>
  <span m="71620">get</span> <span m="71720">into</span> <span
  m="71840">that,</span> <span m="72280">it's</span> <span
  m="72400">worth</span> <span m="72580">just</span> <span
  m="73090">asking</span> <span m="74200">a</span> <span
  m="74270">question.</span> <span m="74730">Why</span> <span
  m="75000">is</span> <span m="75150">it</span> <span m="75280">that</span>
  <span m="75380">we</span> <span m="75500">might</span> <span
  m="75750">want</span> <span m="75920">to</span> <span m="76050">design</span>
  <span m="76560">an</span> <span m="76760">oscillator?</span> <span
  m="78250">What</span> <span m="79600">do</span> <span m="79660">we</span>
  <span m="79780">like</span> <span m="80000">about</span> <span
  m="80140">oscillations?</span> <span m="83430">Does</span> <span
  m="83550">anybody</span> <span m="83850">like</span> <span
  m="84030">oscillations?</span> <span m="84520">And</span> <span
  m="84610">if</span> <span m="84690">so,</span> <span m="84950">why?</span>
  <span m="86950">Yes.</span></p><p><span m="87320">AUDIENCE:</span> <span
  m="87801">You</span> <span m="88402">can</span> <span m="88522">make</span>
  <span m="88642">clocks.</span> <span m="88763">And clocks</span> <span
  m="89244">are</span> <span m="89725">really--</span></p><p><span
  m="90210">PROFESSOR: Perfect.</span> <span m="90880">Yes,</span> <span
  m="91170">all</span> <span m="91270">right.</span> <span m="91440">So</span>
  <span m="93540">two</span> <span m="93700">part</span> <span
  m="93990">answer.</span> <span m="94760">You</span> <span m="94860">can</span>
  <span m="94970">make</span> <span m="95180">clocks.</span> <span
  m="96060">And</span> <span m="96240">clocks</span> <span m="96600">are</span>
  <span m="96710">useful.</span> <span m="97210">All</span> <span
  m="97410">right.</span> <span m="97610">OK,</span> <span m="97780">so</span>
  <span m="97890">this</span> <span m="98050">is</span> <span m="98220">a</span>
  <span m="98890">fine</span> <span m="99210">statement.</span> <span
  m="101310">So</span> <span m="101600">oscillators</span> <span
  m="102100">are,</span> <span m="102150">kind</span> <span
  m="102260">of,</span> <span m="102360">the</span> <span
  m="102450">basis</span> <span m="103020">for</span> <span
  m="103200">time</span> <span m="103500">keeping.</span></p><p><span
  m="103890">And</span> <span m="104030">indeed,</span> <span
  m="106960">classic</span> <span m="107330">ideas</span> <span
  m="107720">of</span> <span m="107820">clocks, like a</span> <span
  m="108250">pendulum</span> <span m="109150">clock.</span> <span
  m="110180">The</span> <span m="110260">idea</span> <span m="110610">is</span>
  <span m="110890">that</span> <span m="111180">you</span> <span
  m="111310">have</span> <span m="111530">this</span> <span
  m="111640">thing.</span> <span m="112670">It's</span> <span
  m="112940">going</span> <span m="113140">back</span> <span
  m="113310">and</span> <span m="113410">forth.</span> <span
  m="113850">And</span> <span m="114030">each</span> <span
  m="114220">time</span> <span m="114490">that it</span> <span
  m="114620">goes,</span> <span m="115000">it</span> <span m="115140">let</span>
  <span m="115420">allows</span> <span m="115780">some</span> <span
  m="116150">winding</span> <span m="116460">mechanism</span> <span
  m="116910">to</span> <span m="117000">move.</span> <span m="117630">And</span>
  <span m="117760">that's</span> <span m="119070">what</span> <span
  m="119270">the</span> <span m="119340">clock</span> <span m="119640">is</span>
  <span m="119770">based.</span></p><p><span m="120230">And</span> <span
  m="120390">even</span> <span m="120570">modern</span> <span
  m="120930">clocks</span> <span m="121430">are</span> <span
  m="121720">based</span> <span m="122010">on</span> <span
  m="122430">some</span> <span m="122750">sort</span> <span m="122960">of</span>
  <span m="123030">oscillatory</span> <span m="123380">dynamic.</span> <span
  m="123740">It</span> <span m="123980">might</span> <span m="124240">be</span>
  <span m="124400">a</span> <span m="124940">very</span> <span
  m="125270">high</span> <span m="125430">frequency.</span> <span
  m="125910">But</span> <span m="126790">in</span> <span m="126950">any</span>
  <span m="127100">case,</span> <span m="127860">the</span> <span
  m="128009">basic</span> <span m="128330">idea</span> <span
  m="128560">of</span> <span m="128650">oscillations</span> <span
  m="129699">as</span> <span m="129919">a</span> <span
  m="129970">mechanism</span> <span m="130479">for</span> <span
  m="130570">time</span> <span m="130789">keeping</span> <span
  m="131100">is</span> <span m="132480">why</span> <span m="132750">we</span>
  <span m="133100">really</span> <span m="133320">care</span> <span
  m="133500">about</span> <span m="133660">it.</span></p><p><span
  m="134110">Of</span> <span m="134200">course,</span> <span
  m="135010">just</span> <span m="135200">from a</span> <span
  m="135340">dynamical</span> <span m="135730">systems</span> <span
  m="136090">perspective,</span> <span m="136520">we</span> <span
  m="136640">also</span> <span m="136960">like</span> <span
  m="137170">oscillations</span> <span m="137730">because</span> <span
  m="139740">they're</span> <span m="139930">interesting</span> <span
  m="140510">from</span> <span m="140640">a</span> <span
  m="140680">dynamical</span> <span m="141220">standpoint.</span> <span
  m="142230">And</span> <span m="142410">therefore,</span> <span
  m="142720">we'd</span> <span m="142910">like</span> <span m="143200">to</span>
  <span m="143730">know</span> <span m="144040">how</span> <span
  m="144230">we</span> <span m="144340">might</span> <span m="144650">be</span>
  <span m="144750">able</span> <span m="144910">to</span> <span
  m="145330">make</span> <span m="145610">them.</span> <span
  m="147180">Can</span> <span m="147660">anybody</span> <span
  m="147810">offer</span> <span m="148480">an</span> <span
  m="148570">example</span> <span m="149040">of</span> <span
  m="149410">an</span> <span m="149890">oscillator</span> <span
  m="150470">in</span> <span m="150785">a</span> <span m="151100">G</span> <span
  m="151340">network</span> <span m="151860">in</span> <span
  m="152620">real</span> <span m="153310">life?</span> <span
  m="154420">Yes.</span></p><p><span m="154780">AUDIENCE:</span> <span
  m="155166">Circadian.</span></p><p><span m="155940">PROFESSOR: The</span>
  <span m="156060">circadian</span> <span m="156550">oscillator.</span> <span
  m="157070">That's</span> <span m="157270">right.</span> <span
  m="157520">So</span> <span m="158640">the</span> <span m="158760">idea</span>
  <span m="159010">there</span> <span m="159300">is</span> <span
  m="159400">that</span> <span m="160224">there's</span> <span
  m="160636">a</span> <span m="161050">G</span> <span m="161230">network</span>
  <span m="161800">within</span> <span m="162240">many</span> <span
  m="162850">organizations</span> <span m="163130">that</span> <span
  m="163410">actually</span> <span m="163720">keeps</span> <span
  m="164000">track</span> <span m="164390">of</span> <span m="164580">the</span>
  <span m="164650">daily</span> <span m="164920">cycle</span> <span
  m="165480">and,</span> <span m="165640">indeed,</span> <span m="165990">is
  entrained</span> <span m="166620">by</span> <span m="166750">the</span> <span
  m="166830">daily</span> <span m="167090">cycle.</span> <span
  m="167910">So</span> <span m="168060">of</span> <span
  m="168180">course,</span> <span m="168990">the</span> <span
  m="169150">day,</span> <span m="169300">night</span> <span
  m="169580">cycle.</span> <span m="170580">That's</span> <span
  m="170820">an</span> <span m="170900">oscillator.</span> <span
  m="171420">It's</span> <span m="171510">on</span> <span m="171650">its</span>
  <span m="171750">own.</span> <span m="172060">And</span> <span
  m="172180">it</span> <span m="172300">goes</span> <span
  m="172570">without</span> <span m="172780">us,</span> <span
  m="172960">as</span> <span m="173030">well.</span></p><p><span
  m="173550">But</span> <span m="173940">it's</span> <span
  m="174090">often</span> <span m="174340">useful</span> <span
  m="174670">for</span> <span m="174750">organisms</span> <span
  m="175310">to</span> <span m="175400">be</span> <span m="175540">able</span>
  <span m="175650">to</span> <span m="175710">keep</span> <span
  m="175880">track</span> <span m="176090">of</span> <span
  m="176210">where</span> <span m="176390">in the</span> <span
  m="176490">course</span> <span m="176710">the</span> <span
  m="176820">day</span> <span m="177490">it</span> <span m="177640">might</span>
  <span m="177910">be.</span> <span m="178440">And</span> <span
  m="179790">the</span> <span m="180000">amount</span> <span
  m="180210">of</span> <span m="180350">light</span> <span
  m="180600">that</span> <span m="180950">the</span> <span
  m="181060">organism</span> <span m="181400">is</span> <span
  m="181500">getting</span> <span m="181850">at</span> <span
  m="182010">this</span> <span m="182150">particular</span> <span
  m="182380">moment</span> <span m="182730">might</span> <span
  m="182950">not</span> <span m="183250">be</span> <span m="183340">a</span>
  <span m="183400">faithful</span> <span m="183940">indicator</span> <span
  m="184420">of</span> <span m="184970">how</span> <span m="185130">much</span>
  <span m="185310">light</span> <span m="185590">there</span> <span
  m="185690">will</span> <span m="185780">be</span> <span
  m="185900">available</span> <span m="186330">in</span> <span
  m="186860">an</span> <span m="187020">hour</span> <span
  m="188390">because</span> <span m="188940">it</span> <span
  m="189020">could</span> <span m="189160">just</span> <span m="189290">be
  that</span> <span m="189410">there's</span> <span m="189580">a</span> <span
  m="189630">cloud</span> <span m="190020">crossing</span> <span
  m="190260">in</span> <span m="190370">front</span> <span m="190560">of</span>
  <span m="190770">the</span> <span m="191170">sun.</span></p><p><span
  m="192100">And</span> <span m="192200">you</span> <span
  m="192290">don't</span> <span m="192460">want--</span> <span
  m="192690">as</span> <span m="192780">an</span> <span
  m="192840">organism--</span> <span m="193260">to think</span> <span
  m="193470">that</span> <span m="193530">it's</span> <span
  m="193690">night.</span> <span m="193990">And</span> <span
  m="194110">then,</span> <span m="194250">you</span> <span
  m="194450">shut</span> <span m="194660">down</span> <span
  m="194840">all</span> <span m="194980">that</span> <span
  m="195100">machinery</span> <span m="195480">because,</span> <span
  m="195980">after</span> <span m="196260">that</span> <span
  m="196880">cloud</span> <span m="197160">passes,</span> <span
  m="197510">you</span> <span m="197630">want</span> <span m="197740">to</span>
  <span m="197780">be</span> <span m="197850">able</span> <span
  m="197960">to</span> <span m="198010">get</span> <span m="198160">going</span>
  <span m="198450">again.</span> <span m="198740">So</span> <span
  m="199010">it's</span> <span m="199140">often</span> <span
  m="199510">useful</span> <span m="200380">for</span> <span
  m="200640">an</span> <span m="200750">organism</span> <span
  m="201150">to</span> <span m="201550">know</span> <span
  m="203340">where</span> <span m="204050">in</span> <span m="204190">the</span>
  <span m="204290">morning,</span> <span m="204820">night,</span> <span
  m="205010">evening</span> <span m="205370">cycle</span> <span
  m="205950">one</span> <span m="206170">is.</span></p><p><span
  m="208070">And</span> <span m="208680">we</span> <span m="208880">will</span>
  <span m="209070">not</span> <span m="209890">be</span> <span
  m="210010">talking</span> <span m="210290">too</span> <span
  m="210450">much</span> <span m="210650">about</span> <span
  m="210900">the</span> <span m="211120">circadian</span> <span
  m="211460">oscillators</span> <span m="211920">in</span> <span
  m="211980">this</span> <span m="212090">class.</span> <span
  m="212320">Although,</span> <span m="212960">I</span> <span
  m="213060">would</span> <span m="213380">say</span> <span m="213600">to</span>
  <span m="214190">the degree of</span> <span m="214402">your</span> <span
  m="214505">interest</span> <span m="214607">in</span> <span
  m="214710">oscillations,</span> <span m="215580">I</span> <span
  m="216050">strongly</span> <span m="216390">encourage</span> <span
  m="216660">you</span> <span m="216760">to</span> <span m="216860">look</span>
  <span m="216930">up</span> <span m="217050">that</span> <span
  m="217210">literature</span> <span m="217570">because</span> <span
  m="217690">it's</span> <span m="218840">really</span> <span
  m="219080">beautiful.</span> <span m="219820">In</span> <span
  m="219930">particular,</span> <span m="220350">in</span> <span
  m="220470">some</span> <span m="220680">of</span> <span
  m="220780">these</span> <span m="221520">oscillators,</span> <span
  m="222030">it's</span> <span m="222160">been</span> <span
  m="222280">demonstrating</span> <span m="222540">you can</span> <span
  m="222800">get the</span> <span m="223090">oscillations</span> <span
  m="224450">in</span> <span m="224650">vitro.</span> <span
  m="225390">I.e,</span> <span m="226110">outside</span> <span
  m="226540">of</span> <span m="226590">the</span> <span
  m="226650">cell.</span></p><p><span m="226920">Even</span> <span m="227130">in
  the</span> <span m="227280">absence</span> <span m="227740">of</span> <span
  m="227830">any</span> <span m="228100">gene</span> <span
  m="228330">expression,</span> <span m="229310">in</span> <span
  m="229370">some</span> <span m="229510">cases,</span> <span
  m="229810">you</span> <span m="229900">can</span> <span
  m="230010">still</span> <span m="230840">get</span> <span
  m="230970">oscillations</span> <span m="231600">of</span> <span
  m="231850">just</span> <span m="232080">those</span> <span
  m="232220">protein</span> <span m="232560">components</span> <span
  m="232960">in</span> <span m="232990">a</span> <span m="233150">test
  tube.</span> <span m="233980">This</span> <span m="234690">was</span> <span
  m="234790">quite</span> <span m="234930">a</span> <span
  m="234960">shocking</span> <span m="235310">discovery</span> <span
  m="235720">when</span> <span m="235870">it</span> <span m="235890">was</span>
  <span m="237020">first</span> <span m="237210">published.</span> <span
  m="239370">But</span> <span m="239620">we</span> <span m="240150">want</span>
  <span m="240250">to</span> <span m="240290">start</span> <span
  m="240470">out</span> <span m="240680">with</span> <span
  m="240840">some</span> <span m="241300">simpler</span> <span
  m="241600">ones.</span></p><p><span m="242910">In</span> <span
  m="243040">particular,</span> <span m="243390">I</span> <span
  m="243660">want</span> <span m="243810">to</span> <span
  m="243880">start</span> <span m="244230">by</span> <span
  m="244370">thinking</span> <span m="244690">about</span> <span
  m="245980">auto</span> <span m="247260">repression.</span> <span m="248050">So
  if you have an</span> <span m="248150">auto</span> <span
  m="248570">regulatory</span> <span m="249140">loop</span> <span
  m="249770">where</span> <span m="250710">some</span> <span
  m="251040">gene</span> <span m="251390">is</span> <span
  m="251500">repressing</span> <span m="251920">itself,</span> <span
  m="255820">the</span> <span m="255950">question</span> <span
  m="256240">is</span> <span m="256980">does</span> <span m="257260">this</span>
  <span m="257480">thing</span> <span m="257820">oscillate.</span> <span
  m="259380">And</span> <span m="260140">indeed,</span> <span
  m="260790">it's</span> <span m="260970">reasonable</span> <span
  m="262010">that</span> <span m="262160">it</span> <span
  m="262300">might</span> <span m="262530">because</span> <span m="262810">we
  can</span> <span m="262930">construct</span> <span m="263550">a</span> <span
  m="263580">verbal</span> <span m="263940">argument.</span></p><p><span
  m="265960">Starts</span> <span m="266410">out</span> <span
  m="266700">high.</span> <span m="268400">Then,</span> <span
  m="268620">it</span> <span m="268720">should</span> <span
  m="269160">repress</span> <span m="269620">itself</span> <span
  m="270260">so</span> <span m="270400">you</span> <span m="270490">get</span>
  <span m="270630">less</span> <span m="271400">new</span> <span
  m="271770">x</span> <span m="272130">being</span> <span
  m="272310">made.</span> <span m="272740">So</span> <span m="272840">the</span>
  <span m="272950">concentration</span> <span m="273500">falls.</span> <span
  m="275440">So</span> <span m="275800">maybe</span> <span
  m="276840">I'll</span> <span m="276980">give</span> <span
  m="277150">you</span> <span m="277310">a</span> <span m="277390">plot</span>
  <span m="278140">to</span> <span m="278800">add</span> <span
  m="279140">to</span> <span m="279280">it.</span> <span
  m="279830">Concentration</span> <span m="280530">of</span> <span
  m="280600">x</span> <span m="280880">is</span> <span m="280950">a</span> <span
  m="281010">function</span> <span m="281290">of</span> <span
  m="281350">time.</span></p><p><span m="282000">You</span> <span
  m="282140">can</span> <span m="282200">imagine</span> <span
  m="282490">just</span> <span m="282640">starting</span> <span
  m="283000">somewhere</span> <span m="283230">high.</span> <span
  m="284370">That</span> <span m="284470">means</span> <span m="284610">it's
  a</span> <span m="284840">repressing</span> <span
  m="285740">expression.</span> <span m="286590">So</span> <span
  m="286840">it's</span> <span m="287010">going</span> <span
  m="287090">to</span> <span m="287140">fall.</span> <span m="288210">But</span>
  <span m="288330">then,</span> <span m="289010">once</span> <span
  m="289170">it</span> <span m="289220">falls</span> <span m="289480">too</span>
  <span m="289600">much,</span> <span m="289870">then</span> <span
  m="290030">all</span> <span m="290150">of</span> <span m="290250">a</span>
  <span m="290350">sudden,</span> <span m="290560">OK,</span> <span
  m="290820">well</span> <span m="291000">we're</span> <span
  m="291120">not</span> <span m="292230">repressing</span> <span
  m="292660">ourselves</span> <span m="293000">anymore.</span></p><p><span
  m="293350">So</span> <span m="293470">maybe</span> <span
  m="293760">then</span> <span m="293920">we</span> <span m="294020">get</span>
  <span m="294230">more</span> <span m="294850">expression.</span> <span
  m="296600">More of</span> <span m="296970">this</span> <span
  m="297100">x</span> <span m="297310">is</span> <span m="297420">being</span>
  <span m="297640">made.</span> <span m="298370">So</span> <span
  m="298510">it</span> <span m="298580">should</span> <span
  m="298670">come</span> <span m="298880">back</span> <span
  m="299080">up.</span> <span m="300260">And</span> <span
  m="300410">then,</span> <span m="301030">now</span> <span
  m="301160">we're</span> <span m="301220">back</span> <span
  m="301430">where</span> <span m="301840">we started.</span> <span
  m="302500">So</span> <span m="302630">this</span> <span m="303630">is a</span>
  <span m="303790">totally</span> <span m="306110">reasonable</span> <span
  m="306410">statement.</span> <span m="306720">Yes?</span></p><p><span
  m="307060">AUDIENCE:</span> <span m="307531">[INAUDIBLE]?</span></p><p><span
  m="310357">PROFESSOR:</span> <span m="310830">Well</span> <span
  m="311230">I</span> <span m="311530">don't</span> <span
  m="311650">know.</span> <span m="311810">I</span> <span
  m="311870">mean,</span> <span m="311990">I</span> <span
  m="312070">didn't</span> <span m="312280">introduce</span> <span
  m="312700">any</span> <span m="312860">damping</span> <span
  m="313360">in</span> <span m="313560">here.</span> <span m="314660">The</span>
  <span m="314790">amplitude</span> <span m="315230">is</span> <span
  m="315320">the</span> <span m="315400">same</span> <span
  m="315710">everywhere.</span></p><p><span m="317596">AUDIENCE:</span> <span
  m="318058">So</span> <span m="318135">you're</span> <span
  m="318212">saying</span> <span m="318289">that</span> <span m="318366">you
  could</span> <span m="318443">actually</span> <span m="318520">have
  something--</span></p><p><span m="319444">PROFESSOR:</span> <span
  m="319910">Well</span> <span m="323380">I</span> <span m="323440">guess</span>
  <span m="323610">what</span> <span m="323740">I'm</span> <span
  m="323870">really</span> <span m="324090">trying</span> <span
  m="324280">to</span> <span m="324340">say</span> <span m="324570">is</span>
  <span m="324720">that</span> <span m="324840">just</span> <span
  m="325070">because</span> <span m="325360">you</span> <span
  m="325460">can</span> <span m="325610">construct</span> <span
  m="326010">a</span> <span m="326040">verbal</span> <span
  m="326440">argument</span> <span m="326800">that</span> <span
  m="326930">something</span> <span m="327170">happens</span> <span
  m="327490">does</span> <span m="327660">not</span> <span
  m="328020">mean</span> <span m="328540">that a</span> <span
  m="328680">particular</span> <span m="329430">equation</span> <span
  m="329870">is</span> <span m="329950">going</span> <span m="330110">to</span>
  <span m="330160">do</span> <span m="330250">that.</span> <span
  m="331420">Part</span> <span m="331650">of</span> <span m="331710">the</span>
  <span m="331780">value</span> <span m="332080">of</span> <span
  m="332140">equations</span> <span m="332700">is</span> <span
  m="332870">that</span> <span m="333390">they</span> <span
  m="333540">force</span> <span m="333950">you</span> <span m="334090">to</span>
  <span m="334150">be</span> <span m="334310">explicit</span> <span
  m="335110">about</span> <span m="335350">all</span> <span
  m="335580">the</span> <span m="335670">assumptions</span> <span
  m="336070">that you're</span> <span m="336270">making.</span> <span
  m="337340">And</span> <span m="338010">then</span> <span
  m="338220">what</span> <span m="338340">you're going to do is you're going
  to</span> <span m="338680">ask,</span> <span m="338860">well,</span> <span
  m="339940">a given</span> <span m="340220">equation</span> <span
  m="340720">is</span> <span m="340850">a</span> <span
  m="341320">mathematical</span> <span m="342240">manifestation</span> <span
  m="342790">of</span> <span m="342860">the</span> <span
  m="342920">assumptions</span> <span m="343270">you're</span> <span
  m="343350">making.</span></p><p><span m="344140">And</span> <span
  m="344210">then,</span> <span m="344290">you're going</span> <span
  m="344360">to ask</span> <span m="344580">does</span> <span
  m="344740">that</span> <span m="344890">oscillate.</span> <span
  m="345800">Yes/no?</span> <span m="346570">And</span> <span m="346660">then
  you're going to say,</span> <span m="346780">OK,</span> <span
  m="346990">well</span> <span m="347200">what</span> <span m="347380">would
  we</span> <span m="347760">need</span> <span m="347890">to</span> <span
  m="347960">change</span> <span m="348370">in</span> <span
  m="348440">order</span> <span m="348560">to</span> <span
  m="348620">introduce</span> <span m="349000">oscillations?</span> <span
  m="350380">And</span> <span m="351770">I'll</span> <span
  m="351940">just--</span> <span m="352726">OK.</span> <span
  m="353660">So</span> <span m="353810">this</span> <span m="355450">is</span>
  <span m="355550">definitely</span> <span m="355850">an</span> <span
  m="355910">oscillation.</span> <span m="356230">The</span> <span
  m="356320">question</span> <span m="356610">is,</span> <span
  m="357380">should</span> <span m="357660">you</span> <span
  m="357800">find</span> <span m="358100">this</span> <span
  m="358230">argument</span> <span m="358630">I</span> <span
  m="358690">just</span> <span m="358820">gave</span> <span
  m="358960">you</span> <span m="359060">convincing?</span> <span
  m="360030">And</span> <span m="360880">what</span> <span
  m="361280">I'm,</span> <span m="361380">I guess,</span> <span
  m="361520">about</span> <span m="361800">to</span> <span m="361880">say</span>
  <span m="362090">is</span> <span m="362210">that</span> <span
  m="363570">you</span> <span m="363680">shouldn't.</span></p><p><span
  m="364910">But then,</span> <span m="365060">we</span> <span
  m="365460">need</span> <span m="365580">to</span> <span m="365630">be</span>
  <span m="365980">clear</span> <span m="366280">about</span> <span
  m="366380">what's</span> <span m="366570">going</span> <span
  m="366770">on</span> <span m="367020">and</span> <span m="367110">why.</span>
  <span m="368900">And</span> <span m="369580">just</span> <span
  m="369790">because</span> <span m="370560">you can</span> <span
  m="370680">make</span> <span m="370820">a</span> <span
  m="370860">verbal</span> <span m="371110">argument for</span> <span
  m="371440">something</span> <span m="371640">doesn't</span> <span
  m="371870">mean</span> <span m="372000">that</span> <span m="372110">it</span>
  <span m="372200">actually</span> <span m="373000">exist.</span> <span
  m="373430">I</span> <span m="373450">mean,</span> <span
  m="373580">that's</span> <span m="373930">a</span> <span
  m="374010">guide</span> <span m="374880">to</span> <span m="375610">how</span>
  <span m="375830">you</span> <span m="375940">might</span> <span
  m="376090">want</span> <span m="376190">to</span> <span
  m="376230">formalize</span> <span m="376780">your</span> <span
  m="376900">thinking.</span></p><p><span m="379450">And</span> <span
  m="379590">in</span> <span m="379660">particular,</span> <span
  m="380370">the</span> <span m="380600">simplest</span> <span
  m="381060">way</span> <span m="381200">to</span> <span m="381280">think</span>
  <span m="381470">about</span> <span m="381690">oscillations</span> <span
  m="382560">that</span> <span m="383900">might</span> <span
  m="384140">be</span> <span m="384230">induced</span> <span
  m="384540">in</span> <span m="384590">this</span> <span
  m="384700">situation</span> <span m="385840">would</span> <span
  m="386010">be</span> <span m="386180">to</span> <span m="386290">just</span>
  <span m="386780">say,</span> <span m="386880">all right,</span> <span
  m="387150">well</span> <span m="388330">the</span> <span
  m="388400">simplest</span> <span m="388820">model</span> <span
  m="389110">we</span> <span m="389190">have</span> <span m="390630">for</span>
  <span m="392610">an</span> <span m="392730">auto</span> <span
  m="393080">regulatory</span> <span m="393720">loop</span> <span
  m="393990">that's</span> <span m="394180">negative</span> <span
  m="395020">is</span> <span m="395240">we</span> <span m="395370">say,</span>
  <span m="395510">OK,</span> <span m="395710">well</span> <span
  m="396130">there's</span> <span m="396320">some</span> <span
  m="399650">alpha</span> <span m="401010">1</span> <span m="401370">plus</span>
  <span m="402210">protein</span> <span m="403440">and</span> <span
  m="404070">minus</span> <span m="405060">p.</span> <span m="406670">So</span>
  <span m="406780">this</span> <span m="406900">is,</span> <span m="406990">kind
  of,</span> <span m="407170">the</span> <span m="407240">simplest</span> <span
  m="408080">equation</span> <span m="408570">you can</span> <span
  m="408670">write</span> <span m="408890">that</span> <span
  m="408970">captures</span> <span m="409330">this</span> <span
  m="409490">idea</span> <span m="410240">that</span> <span
  m="410820">this</span> <span m="411030">protein</span> <span
  m="411460">p</span> <span m="412840">is</span> <span
  m="413140">negatively</span> <span m="413800">regulating</span> <span
  m="414270">itself</span> <span m="415080">in</span> <span m="415200">a</span>
  <span m="415300">cooperative</span> <span m="415680">fashion</span> <span
  m="416000">maybe.</span></p><p><span m="417930">Now</span> <span
  m="420500">it's</span> <span m="420650">already</span> <span
  m="420870">in</span> <span m="421080">a</span> <span
  m="421350">non-dimensionalize</span> <span m="422040">version.</span> <span
  m="422540">Right?</span> <span m="422820">And</span> <span
  m="422930">what</span> <span m="423040">you can</span> <span
  m="423160">see</span> <span m="423320">is</span> <span m="423440">that,</span>
  <span m="423950">within</span> <span m="425630">this</span> <span
  m="425930">realm,</span> <span m="426400">there</span> <span
  m="426500">are</span> <span m="426550">only</span> <span m="426890">two</span>
  <span m="427280">things</span> <span m="427710">that</span> <span
  m="427820">can</span> <span m="427960">possibly</span> <span
  m="428310">be</span> <span m="428410">changing.</span> <span
  m="429150">There's</span> <span m="430610">how</span> <span
  m="430950">cooperative</span> <span m="431420">that</span> <span
  m="431550">repression</span> <span m="431930">is--</span> <span
  m="432130">n--</span> <span m="432930">and</span> <span
  m="433110">then,</span> <span m="433410">the</span> <span
  m="433500">strength</span> <span m="435360">of</span> <span
  m="435570">the</span> <span m="435810">expression</span> <span
  m="436530">in</span> <span m="436580">the</span> <span
  m="436660">absence</span> <span m="437060">of</span> <span
  m="437460">repression.</span></p><p><span m="439220">And</span> <span
  m="439610">as</span> <span m="439770">we</span> <span
  m="439850">discussed</span> <span m="440780">on</span> <span
  m="440940">Tuesday,</span> <span m="441710">alpha</span> <span
  m="441995">is</span> <span m="442280">capturing</span> <span
  m="442770">all</span> <span m="442920">these</span> <span
  m="442990">dynamics</span> <span m="443380">of</span> <span
  m="443600">the</span> <span m="445910">actual</span> <span
  m="446260">strength</span> <span m="446680">of</span> <span
  m="447110">expression</span> <span m="447690">together</span> <span
  m="448000">with</span> <span m="448590">the</span> <span
  m="450360">lifetime</span> <span m="450890">of</span> <span
  m="450940">the</span> <span m="451010">protein</span> <span
  m="451530">together</span> <span m="451970">with</span> <span
  m="452220">the</span> <span m="452310">binding.</span> <span m="453425">You
  know,</span> <span m="453680">the</span> <span m="454070">binding</span> <span
  m="454370">affinity</span> <span m="454700">k.</span> <span
  m="455500">So</span> <span m="455590">all</span> <span m="455910">those</span>
  <span m="456100">things</span> <span m="456350">get</span> <span
  m="456470">wrapped</span> <span m="456710">up</span> <span
  m="456820">in</span> <span m="456880">this</span> <span m="457040">a</span>
  <span m="457410">or</span> <span m="457780">alpha</span> <span
  m="458050">rather.</span></p><p><span m="460230">All right,</span> <span
  m="460700">so</span> <span m="460810">this</span> <span m="461340">is,</span>
  <span m="461440">indeed,</span> <span m="462420">the</span> <span
  m="463590">simplest</span> <span m="464030">model</span> <span
  m="464310">you</span> <span m="464390">can</span> <span
  m="464470">write</span> <span m="464620">down</span> <span
  m="465150">to</span> <span m="465250">describe</span> <span
  m="466000">such</span> <span m="466830">a</span> <span
  m="466920">negative</span> <span m="467280">auto</span> <span
  m="467500">regulatory</span> <span m="467965">loop.</span> <span
  m="469360">Now</span> <span m="470810">the</span> <span
  m="470930">question</span> <span m="471350">is</span> <span m="472120">now
  that</span> <span m="472310">we've</span> <span m="472460">done</span> <span
  m="472630">this,</span> <span m="472910">we</span> <span
  m="473110">want</span> <span m="473320">to know</span> <span
  m="473560">does</span> <span m="473980">this</span> <span
  m="475300">thing</span> <span m="475470">oscillate.</span> <span
  m="478020">And</span> <span m="479250">even</span> <span
  m="479650">without</span> <span m="480250">analyzing</span> <span
  m="480830">this</span> <span m="480940">equation,</span> <span
  m="482590">there's</span> <span m="482760">something</span> <span
  m="483050">that's</span> <span m="483290">very</span> <span
  m="483620">strong,</span> <span m="484160">which</span> <span
  m="484340">you</span> <span m="484450">can</span> <span
  m="484600">say.</span></p><p><span m="488140">So</span> <span m="488490">in
  theory</span> <span m="488800">we're going to</span> <span
  m="488940">ask</span> <span m="489140">is</span> <span m="489260">it</span>
  <span m="489430">possible</span> <span m="490340">for</span> <span
  m="490430">this</span> <span m="490560">thing</span> <span
  m="490710">to</span> <span m="491160">oscillate.</span> <span m="493320">All
  right.</span> <span m="494190">Possible.</span> <span m="495210">Your</span>
  <span m="495500">oscillations,</span> <span m="496150">we'll</span> <span
  m="496260">say</span> <span m="496670">oscillations</span> <span
  m="497260">possible.</span> <span m="498690">And</span> <span
  m="499220">this</span> <span m="499520">time,</span> <span
  m="499760">referring</span> <span m="500230">to</span> <span
  m="500330">mathematically</span> <span m="501060">possible.</span> <span
  m="502980">So</span> <span m="503070">maybe</span> <span
  m="503400">this</span> <span m="503540">thing</span> <span
  m="503680">does</span> <span m="504010">oscillate.</span> <span
  m="504170">Maybe it</span> <span m="504420">doesn't.</span> <span
  m="504690">But</span> <span m="504780">in</span> <span
  m="504860">particular,</span> <span m="505560">without</span> <span
  m="505970">analyzing</span> <span m="506380">it, is</span> <span
  m="506500">there</span> <span m="506820">anything</span> <span
  m="507080">that</span> <span m="507180">you</span> <span m="507280">can</span>
  <span m="507400">say</span> <span m="508870">without</span> <span
  m="509230">analyzing</span> <span m="509670">it?</span></p><p><span
  m="510040">We're</span> <span m="510210">just</span> <span
  m="510310">going</span> <span m="510390">to</span> <span m="510440">say</span>
  <span m="510840">is</span> <span m="510920">it</span> <span
  m="511050">possible.</span> <span m="511440">Yes</span> <span
  m="511870">or</span> <span m="513020">no?</span> <span m="513940">If</span>
  <span m="514140">you</span> <span m="514220">say</span> <span
  m="514720">no,</span> <span m="514929">you have to</span> <span
  m="515080">be</span> <span m="515210">prepared</span> <span
  m="515679">to</span> <span m="516080">give</span> <span m="516210">an</span>
  <span m="516350">argument</span> <span m="516780">for</span> <span
  m="516909">why</span> <span m="517049">this</span> <span
  m="517190">thing</span> <span m="517690">is</span> <span m="517830">not</span>
  <span m="518080">allowed</span> <span m="518350">to</span> <span
  m="518409">oscillate.</span> <span m="518799">I'm</span> <span
  m="519074">talking</span> <span m="519350">about</span> <span
  m="519720">this</span> <span m="519890">equation.</span> <span
  m="523320">Do</span> <span m="523620">you</span> <span m="523720">don't</span>
  <span m="523860">you</span> <span m="523950">understand</span> <span
  m="524330">the</span> <span m="525940">question</span> <span m="526360">that
  I'm</span> <span m="526450">trying</span> <span m="526600">to</span> <span
  m="526650">ask?</span></p><p><span m="528936">And</span> <span
  m="529330">we</span> <span m="529470">haven't</span> <span
  m="529610">analyzed</span> <span m="529940">this</span> <span
  m="530060">thing</span> <span m="530170">yet.</span> <span
  m="530410">But</span> <span m="530590">the</span> <span
  m="530640">question</span> <span m="530930">is,</span> <span
  m="532250">even</span> <span m="532440">before</span> <span
  m="532770">analyzing</span> <span m="533060">it,</span> <span
  m="533210">can</span> <span m="533460">we</span> <span m="533580">say</span>
  <span m="533800">anything</span> <span m="534110">about</span> <span
  m="534300">whether</span> <span m="535040">it's</span> <span
  m="535720">mathematically</span> <span m="536320">allowed</span> <span
  m="537140">to</span> <span m="537360">oscillate?</span> <span
  m="542190">I'll</span> <span m="542330">give</span> <span
  m="542440">you</span> <span m="542770">10</span> <span
  m="543050">seconds</span> <span m="543420">to</span> <span
  m="543510">think</span> <span m="543680">about</span> <span
  m="543920">it.</span> <span m="552690">And</span> <span m="552850">if</span>
  <span m="552910">you</span> <span m="552990">say</span> <span
  m="553140">no,</span> <span m="553390">you</span> <span m="553510">get</span>
  <span m="554020">to</span> <span m="554090">tell</span> <span
  m="554250">me</span> <span m="554370">why.</span></p><p><span m="554600">All
  right,</span> <span m="554830">ready?</span> <span m="555660">Three,</span>
  <span m="556340">two,</span> <span m="557170">one.</span> <span
  m="560400">All</span> <span m="560440">right,</span> <span
  m="560770">so</span> <span m="560890">we</span> <span m="561320">got</span>
  <span m="561440">a</span> <span m="561490">smattering</span> <span
  m="562000">of</span> <span m="562100">things.</span> <span
  m="563100">So</span> <span m="564550">I</span> <span m="564660">think</span>
  <span m="564790">this</span> <span m="564960">is</span> <span
  m="565380">not,</span> <span m="565580">obviously,</span> <span
  m="565930">a</span> <span m="566010">priori.</span> <span
  m="567220">But</span> <span m="567360">it</span> <span m="567450">turns</span>
  <span m="567640">out</span> <span m="567750">that</span> <span
  m="567850">it's</span> <span m="568000">not</span> <span
  m="568320">actually.</span> <span m="568830">It's</span> <span
  m="568990">just</span> <span m="569390">mathematically</span> <span
  m="569960">impossible</span> <span m="570380">for this</span> <span
  m="570520">hing to</span> <span m="570700">oscillate.</span> <span
  m="571300">And</span> <span m="571470">can</span> <span
  m="571560">somebody</span> <span m="571750">say</span> <span
  m="571890">why</span> <span m="572440">that</span> <span
  m="572580">might</span> <span m="572720">be?</span></p><p><span
  m="573942">AUDIENCE:</span> <span m="574438">Because it might be</span> <span
  m="574934">you</span> <span m="574989">could</span> <span
  m="575044">only</span> <span m="575099">have</span> <span
  m="575154">one</span> <span m="575209">value</span> <span m="575264">of</span>
  <span m="575319">p</span> <span m="575374">dot?</span></p><p><span
  m="576918">PROFESSOR:</span> <span m="577420">Perfect</span> <span
  m="577780">OK.</span> <span m="578120">So</span> <span m="578290">for</span>
  <span m="578420">a</span> <span m="578460">given</span> <span
  m="578790">value</span> <span m="579070">of</span> <span m="579160">p,</span>
  <span m="580090">there's</span> <span m="580210">only</span> <span
  m="580440">some</span> <span m="580890">value</span> <span
  m="581210">of</span> <span m="581290">p</span> <span m="581520">dot</span>
  <span m="581790">that</span> <span m="581890">you</span> <span
  m="581970">can</span> <span m="582080">have.</span> <span
  m="583410">And</span> <span m="584120">in</span> <span m="584230">a</span>
  <span m="584270">particular--</span> <span m="585220">so</span> <span
  m="585430">p</span> <span m="585700">here</span> <span m="585870">is</span>
  <span m="585920">like a</span> <span m="586300">concentration</span> <span
  m="586750">of x.</span> <span m="587480">So</span> <span m="587560">I'm</span>
  <span m="587690">going</span> <span m="587800">to</span> <span
  m="587870">pick</span> <span m="589380">some</span> <span
  m="589680">value,</span> <span m="590120">randomly,</span> <span
  m="590680">here</span> <span m="591680">of</span> <span
  m="591850">p.</span></p><p><span m="592420">And</span> <span
  m="592490">what</span> <span m="592600">you're</span> <span
  m="592720">pointing</span> <span m="593020">out</span> <span
  m="593550">is</span> <span m="593780">this</span> <span m="594130">is</span>
  <span m="594830">a</span> <span m="594890">differential</span> <span
  m="595310">equation</span> <span m="596310">in</span> <span
  m="596420">which</span> <span m="597300">if</span> <span m="597430">you</span>
  <span m="597690">give</span> <span m="597930">me</span> <span
  m="598130">or</span> <span m="598280">I</span> <span m="598340">give</span>
  <span m="598490">you</span> <span m="598610">the</span> <span
  m="598720">p,</span> <span m="599160">you</span> <span m="599370">can</span>
  <span m="599520">give</span> <span m="599630">me</span> <span
  m="599860">p</span> <span m="600050">dot.</span> <span m="601860">And</span>
  <span m="602230">there's</span> <span m="602330">a</span> <span
  m="602390">single</span> <span m="602790">value</span> <span
  m="603030">p</span> <span m="603190">dot</span> <span m="603480">for</span>
  <span m="603590">each</span> <span m="603770">p.</span> <span
  m="606780">And</span> <span m="607566">in</span> <span m="607960">this</span>
  <span m="608790">oscillatory</span> <span m="608880">scheme,</span> <span
  m="609820">is</span> <span m="609940">that</span> <span
  m="610150">statement</span> <span m="610500">true?</span></p><p><span
  m="612140">No.</span> <span m="612730">What</span> <span m="612810">you</span>
  <span m="612890">can</span> <span m="612970">see</span> <span
  m="613140">is</span> <span m="613260">that,</span> <span
  m="614160">over</span> <span m="614350">here,</span> <span
  m="614750">this</span> <span m="614800">is</span> <span m="614890">x</span>
  <span m="615322">slash</span> <span m="615754">p</span> <span
  m="619130">concentration</span> <span m="619670">of</span> <span
  m="619740">x.</span> <span m="621240">We're</span> <span
  m="621370">using</span> <span m="621620">p</span> <span m="621880">here</span>
  <span m="622140">because</span> <span m="622220">we're</span> <span
  m="622340">about</span> <span m="622630">to</span> <span
  m="622700">start</span> <span m="622880">talking</span> <span
  m="623180">about</span> <span m="623370">mRNA</span> <span
  m="623710">So</span> <span m="623830">I</span> <span m="624050">want</span>
  <span m="624250">to</span> <span m="624320">keep</span> <span
  m="624580">the</span> <span m="624750">notation</span> <span
  m="625120">consistent.</span></p><p><span m="626400">What you</span> <span
  m="626560">see</span> <span m="626710">is</span> <span m="626820">that</span>
  <span m="628180">the</span> <span m="628290">derivative</span> <span
  m="628610">here</span> <span m="628770">is</span> <span
  m="628840">negative.</span> <span m="629320">The</span> <span
  m="629390">derivative</span> <span m="629720">here</span> <span
  m="629850">is</span> <span m="629930">positive.</span> <span
  m="630630">Negative,</span> <span m="631150">positive.</span> <span
  m="632410">So</span> <span m="633250">any</span> <span
  m="634280">oscillation</span> <span m="635265">that</span> <span
  m="635650">you're</span> <span m="635840">going</span> <span
  m="635920">to</span> <span m="635960">be</span> <span m="636020">able</span>
  <span m="636100">to</span> <span m="636150">imagine</span> <span
  m="636720">is</span> <span m="636850">going</span> <span m="636990">to</span>
  <span m="637030">have</span> <span m="638830">multiple</span> <span
  m="639340">values</span> <span m="639840">for</span> <span
  m="641110">the</span> <span m="641470">derivative</span> <span
  m="641940">as</span> <span m="642060">a</span> <span
  m="642110">function</span> <span m="642450">of</span> <span
  m="643550">that</span> <span m="643650">value just</span> <span
  m="643980">because</span> <span m="644100">you</span> <span
  m="644160">have</span> <span m="644280">to</span> <span m="644340">come</span>
  <span m="644490">back</span> <span m="644700">and</span> <span
  m="644810">forth.</span> <span m="645470">You have to cross that</span> <span
  m="645870">point</span> <span m="646120">multiple</span> <span
  m="646400">times.</span></p><p><span m="648700">So what</span> <span
  m="648770">this</span> <span m="648960">is</span> <span
  m="649050">saying</span> <span m="649260">is</span> <span
  m="649340">that</span> <span m="649540">since</span> <span
  m="649720">this</span> <span m="649910">is</span> <span m="651290">a</span>
  <span m="651800">differential</span> <span m="652470">equation--</span> <span
  m="653070">and</span> <span m="653100">it's</span> <span
  m="653200">actually</span> <span m="653390">important</span> <span
  m="653860">that</span> <span m="653970">it's</span> <span m="654100">a</span>
  <span m="654170">differential</span> <span m="654620">equation</span> <span
  m="654940">rather</span> <span m="655150">than</span> <span
  m="655320">a</span> <span m="655350">difference</span> <span
  m="655800">equation</span> <span m="656120">where</span> <span
  m="656220">you</span> <span m="656270">have</span> <span
  m="656380">discrete</span> <span m="656740">values.</span> <span
  m="657030">But</span> <span m="657380">given</span> <span
  m="657600">that</span> <span m="657640">this</span> <span m="657830">is</span>
  <span m="658320">a</span> <span m="658430">differential</span> <span
  m="658860">equation</span> <span m="659170">where</span> <span
  m="659290">time</span> <span m="659740">is</span> <span
  m="659860">taking</span> <span m="660130">little,</span> <span
  m="660445">little, little</span> <span m="660760">steps</span> <span
  m="662410">and</span> <span m="662570">you</span> <span m="662630">have</span>
  <span m="662720">a</span> <span m="662780">single</span> <span
  m="663230">variable,</span> <span m="664380">it</span> <span
  m="664440">just</span> <span m="664610">can't</span> <span
  m="664840">oscillate.</span></p><p><span m="670380">So</span> <span
  m="670570">for</span> <span m="670700">example,</span> <span
  m="671110">if</span> <span m="671230">you're</span> <span
  m="671350">talking</span> <span m="671710">about</span> <span
  m="671950">the</span> <span m="672050">oscillations</span> <span
  m="673120">the</span> <span m="673190">harmonic</span> <span
  m="673680">oscillator</span> <span m="674600">the</span> <span
  m="674690">important</span> <span m="675000">thing</span> <span
  m="675220">there</span> <span m="675420">is</span> <span m="675530">a</span>
  <span m="675580">you</span> <span m="675700">have</span> <span
  m="676020">both</span> <span m="676700">the</span> <span
  m="676880">position</span> <span m="677450">in</span> <span
  m="677560">the</span> <span m="677630">velocity</span> <span
  m="678260">see</span> <span m="678440">these</span> <span
  m="678620">two</span> <span m="678840">dynamical</span> <span
  m="679270">variables</span> <span m="679585">that</span> <span
  m="679900">are</span> <span m="680110">interacting</span> <span
  m="680660">in</span> <span m="680730">some</span> <span m="680900">way</span>
  <span m="681880">because</span> <span m="682130">you</span> <span
  m="682210">have</span> <span m="683260">momentum,</span> <span
  m="683800">in</span> <span m="683850">that</span> <span
  m="683990">case,</span> <span m="684900">that</span> <span
  m="685020">allows</span> <span m="685470">for</span> <span
  m="685940">the</span> <span m="686020">oscillations</span> <span
  m="686670">in</span> <span m="687020">the</span> <span m="687090">case</span>
  <span m="687320">of</span> <span m="688320">a</span> <span
  m="688540">mass</span> <span m="688810">on a spring,</span> <span
  m="689680">for</span> <span m="689720">example.</span> <span
  m="692980">Question.</span></p><p><span m="693240">AUDIENCE:</span> <span
  m="693738">I'm still not understanding.</span> <span m="694734">So the value
  of p  can not oscillate?</span></p><p><span m="698718">PROFESSOR:</span> <span
  m="699220">Right.</span> <span m="699500">So</span> <span
  m="699640">we're</span> <span m="699800">saying</span> <span
  m="700010">is</span> <span m="700080">that,</span> <span
  m="700500">right,</span> <span m="701916">p</span> <span
  m="702390">simply</span> <span m="702730">cannot</span> <span
  m="703140">oscillate</span> <span m="703610">in</span> <span
  m="704350">this</span> <span m="704540">situation</span> <span
  m="705000">where</span> <span m="705130">we</span> <span
  m="705230">have</span> <span m="705840">a</span> <span
  m="705940">differential</span> <span m="706490">equation</span> <span
  m="706910">describing</span> <span m="708070">p</span> <span
  m="709050">with--</span> <span m="710590">if</span> <span m="710680">we</span>
  <span m="710770">just</span> <span m="710940">have</span> <span
  m="711110">p</span> <span m="711310">dot</span> <span m="711770">as</span>
  <span m="711920">a function</span> <span m="712130">of</span> <span
  m="712200">p</span> <span m="712790">and</span> <span m="713000">we</span>
  <span m="713070">don't</span> <span m="713210">have</span> <span
  m="713290">a</span> <span m="713490">second</span> <span
  m="713870">order.</span> <span m="714210">A</span> <span m="714330">p</span>
  <span m="714510">double</span> <span m="714760">dot,</span> <span
  m="715040">for</span> <span m="715300">example.</span> <span
  m="716090">So</span> <span m="719240">if</span> <span m="719710">we</span>
  <span m="719820">just</span> <span m="720030">have</span> <span
  m="720870">a</span> <span m="720940">single</span> <span
  m="721230">derivative</span> <span m="721540">with respect to</span> <span
  m="721720">time</span> <span m="722640">and</span> <span
  m="722860">some</span> <span m="723070">function</span> <span
  m="723550">of</span> <span m="723640">p</span> <span m="723830">over</span>
  <span m="723990">here,</span> <span m="724460">what</span> <span
  m="724550">that</span> <span m="724660">means</span> <span
  m="724850">is</span> <span m="724940">that,</span> <span m="725250">if</span>
  <span m="726450">p is</span> <span m="726680">specified,</span> <span
  m="727220">then p</span> <span m="727520">dot</span> <span
  m="727850">is</span> <span m="727930">specified.</span></p><p><span
  m="730300">And</span> <span m="730590">that's</span> <span
  m="730850">inconsistent</span> <span m="731330">with</span> <span
  m="731420">any</span> <span m="731600">sort</span> <span m="731730">of</span>
  <span m="731810">oscillation</span> <span m="732430">because</span> <span
  m="732690">any</span> <span m="732870">oscillation's</span> <span
  m="733330">going to</span> <span m="733460">require</span> <span
  m="733920">that,</span> <span m="734750">at</span> <span
  m="734930">this</span> <span m="735160">is</span> <span
  m="735340">given</span> <span m="735660">value</span> <span
  m="735980">of</span> <span m="736090">p--</span> <span m="736380">this</span>
  <span m="736520">concentration</span> <span m="736910">of</span> <span
  m="736960">p--</span> <span m="737580">in</span> <span m="737710">this</span>
  <span m="737910">case,</span> <span m="739220">the</span> <span
  m="739460">concentration's</span> <span m="739650">going</span> <span
  m="739780">down.</span> <span m="740020">Here,</span> <span
  m="740170">it's</span> <span m="740280">going</span> <span
  m="740480">up.</span> <span m="741890">So</span> <span m="742310">here,</span>
  <span m="742820">this</span> <span m="742990">is--</span> <span
  m="743890">from</span> <span m="744100">that standpoint--</span> <span
  m="744290">a</span> <span m="744330">multi</span> <span
  m="744610">valued</span> <span m="745100">function.</span> <span
  m="746816">OK?</span> <span m="750940">And</span> <span
  m="751100">other</span> <span m="751240">questions</span> <span
  m="751580">about</span> <span m="751760">this</span> <span
  m="751850">statement?</span></p><p><span m="755840">Even</span> <span
  m="756070">if</span> <span m="756160">I</span> <span m="756240">just</span>
  <span m="756810">written</span> <span m="757030">down</span> <span
  m="757240">some</span> <span m="757430">other</span> <span
  m="757620">function</span> <span m="757990">of</span> <span
  m="758080">p</span> <span m="758300">over</span> <span m="758450">here,</span>
  <span m="758810">this</span> <span m="758920">statement</span> <span
  m="759150">would</span> <span m="759310">still</span> <span
  m="759460">be</span> <span m="759540">true.</span> <span m="763050">And</span>
  <span m="763790">it's</span> <span m="764210">valuable</span> <span
  m="764580">to</span> <span m="764630">be</span> <span m="764770">able</span>
  <span m="765160">to</span> <span m="766540">have</span> <span
  m="766740">some</span> <span m="766870">intuition</span> <span
  m="767220">about</span> <span m="767650">what</span> <span
  m="767860">are</span> <span m="767880">the</span> <span
  m="767970">essential</span> <span m="768330">ingredients</span> <span
  m="768890">to get</span> <span m="769320">this</span> <span
  m="769910">sort</span> <span m="770140">of</span> <span
  m="770460">oscillation.</span> <span m="771180">And</span> <span
  m="771460">for</span> <span m="771930">simple</span> <span
  m="772210">harmonic</span> <span m="772560">motion,</span> <span
  m="773180">right</span> <span m="773370">there</span> <span
  m="773570">we</span> <span m="773710">have</span> <span m="774040">the</span>
  <span m="774270">second</span> <span m="774590">derivative,</span> <span
  m="775250">first</span> <span m="775520">derivative,</span> <span
  m="776110">and</span> <span m="776230">that's</span> <span
  m="776540">what</span> <span m="776630">allows</span> <span
  m="778330">oscillations</span> <span m="778800">there.</span></p><p><span
  m="780190">OK,</span> <span m="780460">so</span> <span m="780560">we
  can,</span> <span m="781040">maybe,</span> <span m="781250">write</span> <span
  m="781330">down a</span> <span m="781520">more</span> <span
  m="781680">complicated</span> <span m="782280">model</span> <span
  m="783300">of a</span> <span m="783420">negative</span> <span
  m="783800">auto</span> <span m="783960">regulation.</span> <span
  m="784490">And</span> <span m="784610">then,</span> <span
  m="785170">try</span> <span m="785330">to</span> <span m="785380">ask</span>
  <span m="785550">the</span> <span m="785620">same</span> <span
  m="785800">thing.</span> <span m="786560">Might</span> <span
  m="786900">this</span> <span m="787090">new</span> <span
  m="787230">model</span> <span m="787620">oscillate?</span> <span
  m="795220">And</span> <span m="795410">this</span> <span
  m="795900">looks</span> <span m="796230">a</span> <span
  m="796280">little</span> <span m="796430">bit</span> <span
  m="796520">more</span> <span m="796670">complicated.</span> <span
  m="797230">But</span> <span m="797340">we</span> <span m="797440">just</span>
  <span m="797590">have</span> <span m="797680">to</span> <span
  m="797760">be</span> <span m="798050">a</span> <span m="798130">little</span>
  <span m="798300">bit</span> <span m="798430">careful.</span></p><p><span
  m="798730">All right,</span> <span m="799220">so</span> <span
  m="799600">this</span> <span m="799790">is,</span> <span
  m="799880">again,</span> <span m="800510">negative</span> <span
  m="800620">auto-regulation.</span> <span m="802655">What we're</span> <span
  m="803070">going</span> <span m="803460">to</span> <span m="803530">do</span>
  <span m="803730">is</span> <span m="803920">we're</span> <span
  m="804050">going</span> <span m="804130">to</span> <span
  m="804570">explicitly</span> <span m="806560">think</span> <span
  m="807000">about</span> <span m="808260">the</span> <span
  m="808390">concentration</span> <span m="808655">of</span> <span
  m="808920">the</span> <span m="809070">mRNA.</span> <span
  m="811034">OK.</span> <span m="812440">And</span> <span
  m="812510">that's</span> <span m="812710">just</span> <span
  m="812900">because</span> <span m="813270">when</span> <span
  m="814130">a</span> <span m="814290">gene</span> <span m="814770">is</span>
  <span m="814940">initially</span> <span m="816240">transcribed,</span> <span
  m="817050">it</span> <span m="817180">first</span> <span
  m="817600">makes</span> <span m="817880">mRNA.</span> <span m="818080">And
  then,</span> <span m="818320">the</span> <span m="818630">mRNA</span> <span
  m="819430">is</span> <span m="819550">translated</span> <span
  m="820140">into</span> <span m="820310">protein.</span> <span
  m="820820">Right?</span></p><p><span m="821870">So</span> <span
  m="822150">what</span> <span m="822470">we</span> <span m="822735">can</span>
  <span m="823000">do</span> <span m="823090">is</span> <span
  m="823220">we</span> <span m="823300">can</span> <span m="823380">write</span>
  <span m="823570">down</span> <span m="823670">something</span> <span
  m="823850">that</span> <span m="823950">looks</span> <span
  m="824000">like</span> <span m="824100">this.</span> <span m="824320">M</span>
  <span m="824800">dot</span> <span m="826550">derivative of</span> <span
  m="826700">m</span> <span m="826970">with respect to</span> <span
  m="827260">time.</span> <span m="828660">It's</span> <span
  m="828680">going</span> <span m="828780">to</span> <span
  m="828820">be--</span> <span m="844572">all right,</span> <span
  m="845070">so</span> <span m="846790">this</span> <span m="847060">is
  the</span> <span m="847200">concentration</span> <span m="847485">of</span>
  <span m="847770">mRNA.</span> <span m="849740">And</span> <span
  m="850100">p</span> <span m="850340">is</span> <span m="850520">the</span>
  <span m="850840">concentration</span> <span m="851290">of</span> <span
  m="851782">protein.</span> <span m="852274">OK?</span></p><p><span
  m="868510">All right,</span> <span m="868590">and what you</span> <span
  m="868720">can</span> <span m="868820">see</span> <span m="868950">is</span>
  <span m="869060">that</span> <span m="869590">the</span> <span
  m="869760">protein</span> <span m="871290">is</span> <span
  m="871460">now</span> <span m="872250">repressing</span> <span
  m="872810">expression</span> <span m="873310">of</span> <span
  m="873430">the</span> <span m="873670">mRNA.</span> <span
  m="875910">mRNA</span> <span m="876270">is</span> <span
  m="876710">being</span> <span m="876890">degraded.</span> <span
  m="878310">But</span> <span m="878400">then,</span> <span
  m="878530">down</span> <span m="878740">here,</span> <span
  m="878880">this</span> <span m="879060">is a</span> <span
  m="879120">little</span> <span m="879300">bit</span> <span
  m="879440">funny.</span> <span m="880160">But</span> <span
  m="880760">what</span> <span m="880930">you</span> <span m="881010">can</span>
  <span m="881110">see</span> <span m="881280">is</span> <span
  m="881400">that,</span> <span m="881610">if</span> <span m="881750">you</span>
  <span m="881860">have</span> <span m="882420">more</span> <span
  m="882870">mRNA,</span> <span m="883750">then</span> <span
  m="883860">that's</span> <span m="884070">going</span> <span
  m="884240">to</span> <span m="884370">lead</span> <span m="884690">to</span>
  <span m="884820">the</span> <span m="884920">production</span> <span
  m="885400">of</span> <span m="885490">protein.</span> <span
  m="886380">Yet,</span> <span m="886620">we</span> <span m="886720">also</span>
  <span m="886970">have</span> <span m="887150">a</span> <span
  m="887220">degradation</span> <span m="887770">term</span> <span
  m="888490">for the</span> <span m="888970">protein.</span> <span
  m="894557">Yes?</span></p><p><span m="895539">AUDIENCE:</span> <span
  m="896030">Why</span> <span m="896521">are we</span> <span
  m="897012">multiplying</span> <span m="897503">the</span> <span
  m="899958">degradation</span> <span m="900449">rate</span> <span m="900940">of
  the</span> <span m="901431">protein times</span> <span m="901922">some</span>
  <span m="903395">beta,</span> <span m="903886">as well?</span></p><p><span
  m="904377">PROFESSOR: That's a</span> <span m="904870">good</span> <span
  m="905020">question.</span> <span m="907190">OK,</span> <span
  m="907760">you're</span> <span m="907920">wondering</span> <span
  m="908950">why</span> <span m="909110">we've</span> <span
  m="909300">pulled</span> <span m="909620">out</span> <span
  m="909780">this</span> <span m="910310">beta.</span> <span m="910670">In
  particular--</span> <span m="912740">right.</span> <span m="912980">OK,</span>
  <span m="913190">perfect.</span> <span m="913530">OK,</span> <span
  m="913710">yeah.</span> <span m="913810">This</span> <span
  m="914270">is</span> <span m="914370">very</span> <span
  m="914530">important.</span> <span m="914930">And</span> <span
  m="915030">actually,</span> <span m="915660">this</span> <span
  m="915860">gets</span> <span m="916050">in--</span> <span
  m="916230">once</span> <span m="916270">again--</span> <span
  m="916670">to</span> <span m="916720">this</span> <span
  m="916880">question</span> <span m="917210">of</span> <span
  m="918040">these</span> <span m="919110">non-dimensional</span> <span
  m="919620">versions</span> <span m="919940">of</span> <span
  m="920010">equations.</span> <span m="921580">Mathematically,</span> <span
  m="922120">simple.</span> <span m="922550">Biologically,</span> <span
  m="923070">very</span> <span m="923240">complicated.</span> <span
  m="924140">Well,</span> <span m="924290">first</span> <span
  m="924560">of</span> <span m="924620">all,</span> <span m="926810">what</span>
  <span m="926990">is</span> <span m="927080">that</span> <span
  m="927230">we've</span> <span m="927380">used</span> <span
  m="927660">as</span> <span m="927750">our</span> <span m="927860">unit</span>
  <span m="928110">of</span> <span m="928210">time</span> <span
  m="929070">in</span> <span m="929770">these</span> <span
  m="929900">equations?</span></p><p><span m="933134">AUDIENCE:</span> <span
  m="933625">The life of mRNA.</span></p><p><span m="934116">PROFESSOR:</span>
  <span m="934610">Right.</span> <span m="934850">So it's</span> <span
  m="935020">based</span> <span m="935240">on</span> <span m="935480">the</span>
  <span m="935620">lifetime</span> <span m="936510">of</span> <span
  m="937230">the</span> <span m="937380">mRNA</span> <span
  m="938200">because</span> <span m="938420">we can</span> <span
  m="938570">see</span> <span m="938700">that</span> <span
  m="939210">there's</span> <span m="939390">nothing</span> <span
  m="939680">sitting</span> <span m="939950">in front of</span> <span
  m="940110">this</span> <span m="940410">m.</span> <span m="941060">And</span>
  <span m="941430">if</span> <span m="941550">we</span> <span
  m="941620">want</span> <span m="941840">to,</span> <span
  m="941910">then,</span> <span m="942120">allow</span> <span m="942560">for
  a</span> <span m="942720">difference</span> <span m="943100">in</span> <span
  m="943200">the</span> <span m="943250">lifetime</span> <span
  m="943760">mRNA</span> <span m="944200">and</span> <span
  m="944300">protein,</span> <span m="945150">then</span> <span
  m="945230">we</span> <span m="945320">have</span> <span m="945520">to</span>
  <span m="945760">introduce</span> <span m="946260">some</span> <span
  m="946540">other</span> <span m="947590">thing,</span> <span
  m="947890">which</span> <span m="948030">we're</span> <span
  m="948190">calling</span> <span m="948480">beta.</span></p><p><span
  m="950340">So</span> <span m="950730">beta</span> <span m="951810">is</span>
  <span m="952910">the</span> <span m="953090">ratio</span> <span
  m="953375">of--</span> <span m="953660">well</span> <span
  m="954150">which</span> <span m="954310">one's</span> <span
  m="954450">more</span> <span m="954580">stable?</span> <span
  m="954890">mRNA</span> <span m="955260">or</span> <span
  m="955350">protein,</span> <span m="955700">often,</span> <span
  m="956130">typically?</span></p><p><span m="956410">AUDIENCE:</span> <span
  m="956690">Protein.</span></p><p><span m="957000">PROFESSOR:</span> <span
  m="957310">Proteins</span> <span m="957830">are,</span> <span
  m="957890">typically,</span> <span m="958200">more</span> <span
  m="958350">stable.</span> <span m="959080">So does</span> <span
  m="959510">that</span> <span m="959680">mean</span> <span
  m="959830">that</span> <span m="959940">beta</span> <span
  m="960400">should</span> <span m="960580">be</span> <span
  m="960730">larger</span> <span m="961320">or</span> <span
  m="961410">smaller</span> <span m="962010">than</span> <span
  m="962200">1?</span> <span m="963870">OK,</span> <span m="964120">I'm</span>
  <span m="964360">going</span> <span m="964440">to</span> <span
  m="964480">let</span> <span m="964600">you</span> <span m="964660">guys</span>
  <span m="964840">think</span> <span m="964990">about</span> <span
  m="965160">this</span> <span m="965300">just</span> <span
  m="965470">make</span> <span m="965580">sure</span> <span
  m="965760">we're</span> <span m="965970">all--</span> <span
  m="966460">OK,</span> <span m="966770">so</span> <span m="968490">the</span>
  <span m="968570">question</span> <span m="968900">is</span> <span
  m="969300">beta,</span> <span m="970824">A,</span> <span
  m="971688">greater</span> <span m="972120">than</span> <span
  m="972280">1?</span> <span m="972380">Typically,</span> <span
  m="973110">much</span> <span m="973330">greater.</span> <span m="973930">Or is
  it,</span> <span m="974190">B,</span> <span m="975850">much</span> <span
  m="976010">less</span> <span m="976170">than</span> <span m="976250">1,</span>
  <span m="978450">given</span> <span m="978720">what</span> <span
  m="978820">we</span> <span m="978900">just</span> <span
  m="979070">said?</span></p><p><span m="981160">All right,</span> <span
  m="981570">you</span> <span m="981680">think</span> <span
  m="981960">about</span> <span m="982020">it for</span> <span
  m="982140">10</span> <span m="982330">seconds.</span> <span m="988572">All
  right.</span> <span m="991030">Are</span> <span m="991100">you</span> <span
  m="991200">ready?</span> <span m="993520">Three,</span> <span
  m="994340">two,</span> <span m="994950">one.</span> <span m="996670">All
  right,</span> <span m="996970">so</span> <span m="997280">most</span> <span
  m="997540">people</span> <span m="997730">are</span> <span
  m="997790">saying</span> <span m="997980">B.</span> <span m="999040">So</span>
  <span m="999170">indeed,</span> <span m="999900">beta</span> <span
  m="1000300">should</span> <span m="1000400">be</span> <span
  m="1000510">much</span> <span m="1000750">less</span> <span
  m="1001040">than</span> <span m="1001180">1.</span> <span
  m="1002390">And</span> <span m="1002500">that's</span> <span
  m="1002660">because</span> <span m="1002750">beta</span> <span
  m="1005930">is</span> <span m="1006260">the</span> <span
  m="1006900">ratio</span> <span m="1007470">of</span> <span
  m="1007550">the</span> <span m="1007640">lifetime.</span></p><p><span
  m="1008700">So</span> <span m="1008800">you</span> <span
  m="1008990">can</span> <span m="1009070">see,</span> <span
  m="1009960">if</span> <span m="1010160">beta</span> <span
  m="1010390">gets</span> <span m="1011180">larger,</span> <span
  m="1012150">that</span> <span m="1012370">increases</span> <span
  m="1013890">the</span> <span m="1014760">degradation</span> <span
  m="1015340">rate</span> <span m="1015530">of</span> <span
  m="1015620">the</span> <span m="1015710">protein.</span> <span
  m="1020180">What</span> <span m="1020390">do I want to</span> <span
  m="1020630">say?</span> <span m="1022370">So</span> <span
  m="1022550">beta</span> <span m="1023020">is</span> <span
  m="1023720">the</span> <span m="1023820">ratio</span> <span
  m="1024290">of</span> <span m="1024970">the</span> <span
  m="1025040">lifetime</span> <span m="1025400">in</span> <span
  m="1025450">the</span> <span m="1025560">mRNA</span> <span
  m="1025949">through</span> <span m="1026339">the</span> <span
  m="1026440">lifetime</span> <span m="1026839">of</span> <span
  m="1026880">the</span> <span m="1026970">protein.</span> <span
  m="1028329">Yes?</span></p><p><span m="1028649">AUDIENCE:</span> <span
  m="1028970">So I get why we have to--</span></p><p><span
  m="1029802">PROFESSOR:</span> <span m="1030220">Yeah.</span> <span
  m="1030619">No,</span> <span m="1030829">I</span> <span
  m="1030900">understand.</span> <span m="1031069">No, I</span> <span
  m="1031220">understand</span> <span m="1031430">you.</span> <span
  m="1031760">I'm</span> <span m="1031839">getting</span> <span
  m="1032040">to</span> <span m="1032099">your</span> <span
  m="1032200">question.</span> <span m="1032690">First,</span> <span
  m="1032950">we</span> <span m="1033030">have</span> <span
  m="1033150">to</span> <span m="1034099">make</span> <span
  m="1034260">since</span> <span m="1034589">of</span> <span
  m="1034670">this</span> <span m="1034930">because</span> <span
  m="1035609">the</span> <span m="1035839">next</span> <span
  m="1036030">thing</span> <span m="1036140">is</span> <span
  m="1036230">actually</span> <span m="1036430">even</span> <span
  m="1036770">weirder.</span> <span m="1038490">But</span> <span
  m="1038589">I</span> <span m="1038650">just</span> <span
  m="1038740">want</span> <span m="1038859">to be</span> <span
  m="1038920">clear</span> <span m="1039130">that</span> <span
  m="1039329">beta</span> <span m="1039690">is</span> <span
  m="1042099">defined</span> <span m="1042569">as</span> <span
  m="1043119">the</span> <span m="1043530">lifetime</span> <span
  m="1045155">of</span> <span m="1045569">mRNA</span> <span
  m="1048170">over</span> <span m="1048430">the</span> <span
  m="1048540">lifetime</span> <span m="1048970">of</span> <span
  m="1049010">the</span> <span m="1049080">protein.</span></p><p><span
  m="1050800">What's</span> <span m="1050930">interesting</span> <span
  m="1051210">is,</span> <span m="1051310">actually,</span> <span
  m="1054570">there's</span> <span m="1055030">a</span> <span
  m="1055110">typo</span> <span m="1055520">or</span> <span
  m="1055600">mistake</span> <span m="1056000">in</span> <span
  m="1057080">the</span> <span m="1057140">elements</span> <span
  m="1057540">paper,</span> <span m="1057870">actually.</span> <span
  m="1058190">So</span> <span m="1058300">if</span> <span m="1058390">you</span>
  <span m="1058510">look</span> <span m="1058720">at</span> <span
  m="1058840">figure</span> <span m="1059940">1B</span> <span
  m="1062250">or</span> <span m="1062580">so--</span> <span
  m="1066590">yeah,</span> <span m="1067050">so</span> <span
  m="1067180">figure</span> <span m="1067390">1B,</span> <span
  m="1067750">actually.</span> <span m="1067990">It</span> <span
  m="1068110">says</span> <span m="1068410">that</span> <span
  m="1068520">beta</span> <span m="1068780">is</span> <span
  m="1069020">the</span> <span m="1069450">protein</span> <span
  m="1069830">lifetime</span> <span m="1070180">divided</span> <span
  m="1070440">by</span> <span m="1070520">the</span> <span
  m="1070700">mRNA</span> <span m="1070890">lifetime.</span> <span
  m="1071570">So</span> <span m="1072850">you</span> <span
  m="1072990">can</span> <span m="1073330">correct</span> <span
  m="1073610">that,</span> <span m="1073770">if</span> <span
  m="1073870">you</span> <span m="1073950">like.</span></p><p><span
  m="1075380">So</span> <span m="1075770">beta's</span> <span
  m="1076120">is</span> <span m="1076230">the</span> <span
  m="1076790">mRNA</span> <span m="1076900">divided</span> <span
  m="1077070">by</span> <span m="1077280">the</span> <span
  m="1077440">lifetime</span> <span m="1077540">of the</span> <span
  m="1077780">protein.</span> <span m="1084940">OK,</span> <span
  m="1085090">so</span> <span m="1085590">I</span> <span
  m="1085710">think</span> <span m="1085850">that</span> <span
  m="1086020">we</span> <span m="1086200">understand</span> <span
  m="1086500">why</span> <span m="1086610">that</span> <span
  m="1086820">term</span> <span m="1087000">is</span> <span
  m="1087070">there.</span> <span m="1087220">But</span> <span
  m="1087510">the</span> <span m="1088060">weird</span> <span
  m="1088370">thing</span> <span m="1088580">is</span> <span
  m="1088700">that</span> <span m="1089010">we're</span> <span
  m="1089910">doing</span> <span m="1090170">p</span> <span
  m="1090510">minus</span> <span m="1090840">m</span> <span
  m="1091120">over</span> <span m="1091280">here.</span> <span
  m="1092300">Right?</span> <span m="1093830">And</span> <span
  m="1093940">it</span> <span m="1094080">feels,</span> <span
  m="1094890">somehow,</span> <span m="1096340">that</span> <span
  m="1096620">that</span> <span m="1096980">can't</span> <span
  m="1097330">be</span> <span m="1097430">possible.</span> <span m="1098410">You
  know,</span> <span m="1098760">that</span> <span m="1099530">it</span> <span
  m="1099740">shouldn't</span> <span m="1100090">be</span> <span
  m="1100230">beta</span> <span m="1101140">times</span> <span
  m="1101460">m</span> <span m="1101690">over</span> <span
  m="1101860">here</span> <span m="1102350">because</span> <span
  m="1104440">it</span> <span m="1104570">feels</span> <span m="1104750">like
  it's</span> <span m="1104910">under determined.</span> <span
  m="1105590">Right?</span></p><p><span m="1107370">OK.</span> <span
  m="1108920">So</span> <span m="1109950">it's</span> <span
  m="1110080">possible</span> <span m="1110420">I</span> <span
  m="1110490">just</span> <span m="1111220">screwed</span> <span
  m="1111490">up.</span> <span m="1112630">But</span> <span
  m="1113280">does</span> <span m="1113840">anybody</span> <span
  m="1114080">want</span> <span m="1114220">to</span> <span
  m="1114260">defend</span> <span m="1114810">my</span> <span
  m="1117000">equation</span> <span m="1117630">here?</span> <span
  m="1118520">How</span> <span m="1118940">might</span> <span
  m="1119110">it</span> <span m="1119250">be</span> <span
  m="1119360">possible</span> <span m="1119900">that</span> <span
  m="1120350">this</span> <span m="1120490">makes</span> <span
  m="1120710">any</span> <span m="1120850">sense</span> <span m="1121210">that
  you can</span> <span m="1121320">just</span> <span m="1121450">have</span>
  <span m="1121540">the</span> <span m="1121620">one</span> <span
  m="1121850">beta</span> <span m="1122160">here</span> <span
  m="1122960">that</span> <span m="1123110">you</span> <span
  m="1123200">pull</span> <span m="1123440">out,</span> <span
  m="1123720">and</span> <span m="1124170">it's just</span> <span
  m="1124490">p</span> <span m="1124620">minus</span> <span m="1124900">m</span>
  <span m="1125120">over</span> <span m="1125260">here?</span></p><p><span
  m="1125530">AUDIENCE:</span> <span m="1125993">I think it's an</span> <span
  m="1126456">assumption</span> <span m="1126919">of the</span> <span
  m="1127382">model</span> <span m="1127845">where they</span> <span
  m="1128308">choose</span> <span m="1128771">the lifetime</span> <span
  m="1129234">of the protein and the</span> <span m="1129697">mRNA</span> <span
  m="1131426">to be</span> <span m="1131762">similar.</span></p><p><span
  m="1132470">PROFESSOR:</span> <span m="1132840">Well no</span> <span
  m="1133120">because,</span> <span m="1133320">actually,</span> <span
  m="1134300">we</span> <span m="1134400">have</span> <span
  m="1134580">this</span> <span m="1134710">term</span> <span
  m="1134930">beta,</span> <span m="1135380">which</span> <span
  m="1135550">is</span> <span m="1135710">the</span> <span
  m="1135800">lifetime</span> <span m="1136220">of</span> <span
  m="1136470">mRNA</span> <span m="1136740">divided</span> <span
  m="1136950">by</span> <span m="1137030">lifetime</span> <span m="1137370">of
  protein. So</span> <span m="1137710">we</span> <span
  m="1137820">haven't</span> <span m="1138000">assumed</span> <span
  m="1138290">anything</span> <span m="1139130">about</span> <span
  m="1139340">this</span> <span m="1139460">beta.</span> <span m="1139730">It
  could</span> <span m="1139860">be,</span> <span m="1140490">in</span> <span
  m="1140590">principle,</span> <span m="1140880">larger</span> <span
  m="1141150">than</span> <span m="1141250">one.</span> <span
  m="1141480">Smaller,</span> <span m="1141860">actually.</span> <span
  m="1142140">So</span> <span m="1142620">it's</span> <span
  m="1142760">true</span> <span m="1143010">that</span> <span
  m="1143360">given</span> <span m="1144040">typical</span> <span
  m="1145720">facts</span> <span m="1146070">about</span> <span
  m="1146570">life</span> <span m="1147260">in</span> <span
  m="1147400">the</span> <span m="1147500">cell,</span> <span
  m="1148020">it's</span> <span m="1148150">true</span> <span m="1148290">that
  you</span> <span m="1148450">expect</span> <span m="1148870">beta be</span>
  <span m="1149030">much</span> <span m="1149220">less</span> <span
  m="1149370">than</span> <span m="1149450">1.</span> <span
  m="1149570">But</span> <span m="1149660">we</span> <span
  m="1149770">haven't</span> <span m="1150010">made</span> <span
  m="1150320">any</span> <span m="1150430">assumption.</span></p><p><span
  m="1151010">Beta</span> <span m="1151240">is</span> <span
  m="1151330">just</span> <span m="1151480">there. It</span> <span
  m="1151720">could</span> <span m="1151800">be</span> <span
  m="1151880">anything.</span> <span m="1153230">Right?</span> <span
  m="1154100">So</span> <span m="1154460">yeah,</span> <span
  m="1155080">it's</span> <span m="1155260">possible</span> <span
  m="1155730">we've</span> <span m="1155750">made</span> <span
  m="1155950">some</span> <span m="1156110">other</span> <span
  m="1156290">assumption.</span> <span m="1157630">But</span> <span
  m="1158240">what is</span> <span m="1158420">going</span> <span
  m="1158530">on.</span> <span m="1158660">Yes?</span></p><p><span
  m="1158950">AUDIENCE:</span> <span m="1159412">Is it</span> <span
  m="1160798">the</span> <span m="1161260">concentration</span> <span
  m="1162184">is</span> <span m="1162646">scaled by</span> <span
  m="1163108">the</span> <span m="1163570">amount</span> <span m="1164032">of
  necessary--</span></p><p><span m="1164960">PROFESSOR: Yes,</span> <span
  m="1165570">that's</span> <span m="1165760">right</span> <span
  m="1166240">because,</span> <span m="1166540">remember,</span> <span
  m="1168150">you</span> <span m="1168290">can</span> <span
  m="1168380">only</span> <span m="1168690">choose</span> <span
  m="1169000">one</span> <span m="1169390">unit</span> <span
  m="1169620">for</span> <span m="1169740">time.</span> <span
  m="1171530">And</span> <span m="1171670">we've</span> <span
  m="1171810">already</span> <span m="1171980">chosen</span> <span
  m="1172390">that</span> <span m="1173070">to</span> <span
  m="1173170">get</span> <span m="1173320">this</span> <span
  m="1173520">to</span> <span m="1173590">be</span> <span
  m="1173770">just</span> <span m="1173950">minus</span> <span
  m="1174210">m</span> <span m="1174360">here.</span> <span m="1175130">But
  you</span> <span m="1175290">get</span> <span m="1175480">to</span> <span
  m="1175650">choose</span> <span m="1176270">what's</span> <span
  m="1176420">the</span> <span m="1176570">unit of</span> <span
  m="1176680">concentration</span> <span m="1177240">for,</span> <span
  m="1177340">both,</span> <span m="1177870">mRNA</span> <span
  m="1178420">and</span> <span m="1178680">for</span> <span
  m="1178790">protein.</span> <span m="1180870">Can</span> <span
  m="1181340">somebody</span> <span m="1181590">remind</span> <span
  m="1181970">us</span> <span m="1182120">what</span> <span
  m="1182310">the</span> <span m="1182420">unit</span> <span
  m="1182820">of</span> <span m="1182960">concentration</span> <span
  m="1183630">is</span> <span m="1184080">for</span> <span
  m="1184220">protein?</span></p><p><span m="1186070">AUDIENCE:</span> <span
  m="1186500">The</span> <span m="1187070">dissociation</span> <span
  m="1187470">constant</span> <span m="1187870">of the</span> <span
  m="1188318">protein</span> <span m="1189214">to the--</span></p><p><span
  m="1191006">PROFESSOR:</span> <span m="1191460">That's</span> <span
  m="1191630">right.</span> <span m="1192030">So</span> <span
  m="1192190">it's</span> <span m="1192340">this</span> <span
  m="1192630">dissociation</span> <span m="1193300">constant.</span> <span
  m="1193890">And</span> <span m="1194200">more</span> <span
  m="1194380">generally,</span> <span m="1195330">it's</span> <span
  m="1195520">the</span> <span m="1195650">protein</span> <span
  m="1196180">concentration,</span> <span m="1196630">which</span> <span
  m="1196780">you</span> <span m="1196980">get</span> <span
  m="1197300">half</span> <span m="1198120">maximal</span> <span
  m="1198680">repression.</span> <span m="1200750">And</span> <span
  m="1201010">depending</span> <span m="1201360">on</span> <span
  m="1201530">the</span> <span m="1201670">detailed</span> <span
  m="1202110">models,</span> <span m="1202660">it</span> <span
  m="1202760">could</span> <span m="1202860">be</span> <span
  m="1202960">more</span> <span m="1202980">complicated.</span> <span
  m="1203730">But</span> <span m="1204140">in</span> <span
  m="1204290">this</span> <span m="1204760">phenomenological</span> <span
  m="1205340">realm,</span> <span m="1206110">if</span> <span
  m="1206670">p</span> <span m="1206890">is</span> <span
  m="1206980">equal</span> <span m="1207100">to</span> <span
  m="1207170">1,</span> <span m="1207480">you get</span> <span
  m="1207600">half</span> <span m="1207970">repression.</span> <span
  m="1209310">And</span> <span m="1209400">that's</span> <span
  m="1209550">our</span> <span m="1209650">definition</span> <span
  m="1210220">for</span> <span m="1210490">what</span> <span
  m="1211180">p</span> <span m="1211470">equal to 1</span> <span
  m="1211710">means.</span> <span m="1212270">So</span> <span
  m="1212370">we've</span> <span m="1212610">rescaled</span> <span
  m="1213000">out</span> <span m="1213100">that</span> <span
  m="1213270">k.</span></p><p><span m="1215290">So</span> <span
  m="1216480">what</span> <span m="1216670">we've</span> <span
  m="1216800">really</span> <span m="1216960">done</span> <span
  m="1217170">is</span> <span m="1217270">that</span> <span
  m="1217380">there's</span> <span m="1217530">some</span> <span
  m="1218330">unit</span> <span m="1218710">for</span> <span
  m="1218780">the</span> <span m="1218860">concentration</span> <span
  m="1219520">of</span> <span m="1219730">mRNA</span> <span
  m="1220350">that</span> <span m="1220500">we</span> <span
  m="1220930">were</span> <span m="1221030">free</span> <span
  m="1221350">to</span> <span m="1221440">choose.</span> <span m="1222190">And
  it</span> <span m="1222350">was</span> <span m="1222500">chosen</span> <span
  m="1223460">so that</span> <span m="1223700">you could</span> <span
  m="1223830">just</span> <span m="1224030">say</span> <span
  m="1224170">p</span> <span m="1224340">minus</span> <span
  m="1224580">m.</span> <span m="1226020">But</span> <span
  m="1226550">what</span> <span m="1226670">that</span> <span
  m="1226800">means</span> <span m="1227070">is</span> <span
  m="1227180">that</span> <span m="1229380">it</span> <span
  m="1229500">requires</span> <span m="1231190">a</span> <span
  m="1231260">genius</span> <span m="1231730">to</span> <span
  m="1231820">figure</span> <span m="1232080">out</span> <span
  m="1232330">what</span> <span m="1232775">m</span> <span m="1233220">equal
  to</span> <span m="1233500">1</span> <span m="1233760">means,</span> <span
  m="1234010">right?</span> <span m="1235080">It</span> <span
  m="1235280">doesn't</span> <span m="1235720">quite</span> <span
  m="1235920">require</span> <span m="1236020">a</span> <span
  m="1236170">genius.</span> <span m="1236480">But</span> <span
  m="1236960">what</span> <span m="1237240">do</span> <span m="1237280">you
  guys</span> <span m="1237400">think</span> <span m="1237530">it's</span> <span
  m="1237620">going</span> <span m="1237710">to</span> <span
  m="1237750">depend</span> <span m="1238010">on?</span> <span
  m="1249760">Yes?</span></p><p><span m="1250100">AUDIENCE:</span> <span
  m="1250598">It's going to  depend on</span> <span m="1251096">this ratio
  of</span> <span m="1251594">lifetimes,</span> <span m="1252092">as
  well.</span></p><p><span m="1252590">PROFESSOR: Yes,</span> <span
  m="1252990">right.</span> <span m="1253210">So</span> <span
  m="1253330">beta</span> <span m="1253700">is</span> <span
  m="1253830">going</span> <span m="1253940">to</span> <span
  m="1253980">appear</span> <span m="1254220">in</span> <span
  m="1254260">there.</span> <span m="1255510">So I'll give</span> <span
  m="1255950">you</span> <span m="1256100">a</span> <span
  m="1256240">hint,</span> <span m="1256320">there are</span> <span
  m="1256370">three</span> <span m="1256770">things</span> <span
  m="1257280">that</span> <span m="1257390">determine</span> <span
  m="1257680">it.</span></p><p><span m="1260470">AUDIENCE:</span> <span
  m="1260955">Transcription,</span> <span m="1261440">or the speed of</span>
  <span m="1261925">transcription.</span></p><p><span m="1262410">PROFESSOR:
  Translation,</span> <span m="1263430">yes.</span> <span m="1263650">So</span>
  <span m="1263830">the</span> <span m="1263930">translation</span> <span
  m="1264650">efficiency.</span> <span m="1264960">So</span> <span
  m="1265270">each</span> <span m="1265510">mRNA,</span> <span
  m="1267280">it's</span> <span m="1268070">going</span> <span
  m="1268160">to</span> <span m="1268210">lead to</span> <span
  m="1268400">some</span> <span m="1268670">rate</span> <span
  m="1268890">of</span> <span m="1268980">protein</span> <span
  m="1269310">synthesis.</span> <span m="1269420">So</span> <span
  m="1269810">yeah,</span> <span m="1269940">the</span> <span
  m="1269990">translation</span> <span m="1270870">rate</span> <span
  m="1271240">or</span> <span m="1271360">efficiency is</span> <span
  m="1271860">going</span> <span m="1271970">to</span> <span
  m="1272010">enter.</span></p><p><span m="1280160">There</span> <span
  m="1280290">aren't</span> <span m="1280440">that</span> <span
  m="1280600">many</span> <span m="1280700">other</span> <span
  m="1280810">things</span> <span m="1281000">it</span> <span
  m="1281020">could</span> <span m="1281170">be.</span> <span m="1281280">But
  yeah,</span> <span m="1281500">I</span> <span m="1281650">mean,</span> <span
  m="1281910">this</span> <span m="1282110">is</span> <span
  m="1282500">tricky.</span> <span m="1286470">And</span> <span
  m="1286690">it's</span> <span m="1286830">OK</span> <span
  m="1287080">if</span> <span m="1287170">you</span> <span m="1287260">can't
  just</span> <span m="1287580">figure</span> <span m="1287900">it</span> <span
  m="1287960">out</span> <span m="1288090">here</span> <span
  m="1288230">because</span> <span m="1288310">this,</span> <span
  m="1289120">I</span> <span m="1289220">think,</span> <span
  m="1289660">is</span> <span m="1290080">pretty</span> <span
  m="1290280">subtle.</span> <span m="1292580">It</span> <span
  m="1292780">turns</span> <span m="1293010">out</span> <span
  m="1293120">it</span> <span m="1293230">also</span> <span
  m="1293590">depends</span> <span m="1293870">on</span> <span
  m="1293930">that</span> <span m="1294120">k</span> <span
  m="1294510">parameter</span> <span m="1295710">because</span> <span
  m="1296440">there's</span> <span m="1296640">some</span> <span
  m="1296900">sense</span> <span m="1297300">that--</span> <span
  m="1298190">m</span> <span m="1298390">equal</span> <span
  m="1298580">to</span> <span m="1298640">1--</span> <span
  m="1299530">what</span> <span m="1299640">it's</span> <span
  m="1299710">saying</span> <span m="1299900">is</span> <span
  m="1300010">that</span> <span m="1301780">that's</span> <span
  m="1302070">the</span> <span m="1302170">amount</span> <span
  m="1302530">of</span> <span m="1302610">mRNA</span> <span
  m="1303300">that</span> <span m="1303450">you</span> <span
  m="1303600">need</span> <span m="1304740">so</span> <span
  m="1305120">that,</span> <span m="1306490">if</span> <span
  m="1306700">the</span> <span m="1306800">protein</span> <span
  m="1307250">concentration</span> <span m="1307880">where</span> <span
  m="1308020">1,</span> <span m="1309220">you</span> <span
  m="1309390">would</span> <span m="1309480">not</span> <span
  m="1309640">get</span> <span m="1309770">any</span> <span
  m="1309990">change</span> <span m="1310320">in</span> <span
  m="1310370">the</span> <span m="1310450">protein</span> <span
  m="1310750">concentration.</span></p><p><span m="1312630">And</span> <span
  m="1313880">given</span> <span m="1314160">that</span> <span
  m="1315080">now</span> <span m="1316150">I</span> <span m="1316500">had</span>
  <span m="1316630">to</span> <span m="1316720">invoke</span> <span
  m="1317170">p</span> <span m="1317490">in</span> <span
  m="1317590">there</span> <span m="1318200">and</span> <span
  m="1318360">p</span> <span m="1318570">is</span> <span
  m="1318680">scaled</span> <span m="1318990">by</span> <span
  m="1319090">k,</span> <span m="1320050">so then k also</span> <span
  m="1320340">ends</span> <span m="1320680">up</span> <span
  m="1320820">being</span> <span m="1320960">relevant</span> <span
  m="1321350">for</span> <span m="1321550">this</span> <span
  m="1321870">mRNA.</span> <span m="1322675">So</span> <span
  m="1323100">you</span> <span m="1323320">can,</span> <span
  m="1323510">if</span> <span m="1323600">you'd</span> <span
  m="1323730">like,</span> <span m="1324330">go</span> <span
  m="1324430">ahead</span> <span m="1324730">and</span> <span
  m="1324990">start</span> <span m="1325350">with</span> <span
  m="1325710">a</span> <span m="1325880">original,</span> <span
  m="1326490">reasonable</span> <span m="1326830">set</span> <span
  m="1326930">of</span> <span m="1326970">equations.</span> <span
  m="1327720">And</span> <span m="1327870">then,</span> <span
  m="1328610">get</span> <span m="1328830">back</span> <span
  m="1329000">to</span> <span m="1329080">this.</span></p><p><span
  m="1329600">But</span> <span m="1329710">I</span> <span
  m="1329770">think,</span> <span m="1330000">once</span> <span
  m="1330210">again,</span> <span m="1330360">this</span> <span
  m="1330520">just</span> <span m="1330690">highlights</span> <span
  m="1331110">that</span> <span m="1331680">these</span> <span
  m="1332820">non-dimensional</span> <span m="1333260">versions</span> <span
  m="1333480">of</span> <span m="1333520">the</span> <span
  m="1333570">equations</span> <span m="1333910">are</span> <span
  m="1334010">great.</span> <span m="1334760">But</span> <span m="1336510">you
  have to</span> <span m="1336780">be</span> <span m="1336890">careful.</span>
  <span m="1337760">You</span> <span m="1337850">don't</span> <span
  m="1338070">know</span> <span m="1338620">what</span> <span
  m="1338910">means</span> <span m="1339110">what.</span> <span m="1339780">All
  right?</span> <span m="1342420">Are</span> <span m="1342500">there</span>
  <span m="1342600">any</span> <span m="1342680">questions</span> <span
  m="1343020">about</span> <span m="1343240">what</span> <span
  m="1343440">we've</span> <span m="1343780">said</span> <span
  m="1344030">so</span> <span m="1344120">far?</span></p><p><span
  m="1351110">OK.</span> <span m="1352250">Now</span> <span
  m="1352490">what</span> <span m="1352590">we've</span> <span
  m="1352700">done</span> <span m="1352850">is</span> <span
  m="1352930">we</span> <span m="1353910">have</span> <span
  m="1354110">now</span> <span m="1354460">a</span> <span
  m="1354860">protein</span> <span m="1355360">concentration.</span> <span
  m="1355530">We have</span> <span m="1355860">mRNA</span> <span
  m="1356140">concentration.</span> <span m="1356820">And</span> <span
  m="1357700">what</span> <span m="1357880">I'm</span> <span
  m="1358240">going</span> <span m="1358600">to</span> <span
  m="1358860">ask</span> <span m="1359010">for</span> <span
  m="1359100">now</span> <span m="1359270">is,</span> <span
  m="1359970">for</span> <span m="1360170">these</span> <span m="1360450">sets
  of</span> <span m="1360940">equations,</span> <span m="1361050">is it</span>
  <span m="1361390">mathematically</span> <span m="1362290">possible</span>
  <span m="1362560">that</span> <span m="1362830">they</span> <span
  m="1363000">could,</span> <span m="1363710">maybe,</span> <span
  m="1364090">oscillate?</span> <span m="1366930">Yes.</span> <span
  m="1367450">I</span> <span m="1367570">mean,</span> <span
  m="1369310">we're</span> <span m="1369420">going</span> <span
  m="1369500">to</span> <span m="1369550">find that</span> <span
  m="1369810">the</span> <span m="1369880">answer</span> <span
  m="1370160">is</span> <span m="1370290">that</span> <span
  m="1370370">these</span> <span m="1370550">actually</span> <span
  m="1370760">don't</span> <span m="1371010">oscillate.</span> <span
  m="1371870">But</span> <span m="1373620">have</span> <span
  m="1373730">to</span> <span m="1373800">actually</span> <span
  m="1374050">do</span> <span m="1374210">the</span> <span
  m="1374310">calculation</span> <span m="1374860">if</span> <span
  m="1375230">you</span> <span m="1375330">want</span> <span
  m="1375460">to</span> <span m="1375540">determine</span> <span
  m="1375710">that.</span></p><p><span m="1375850">You</span> <span
  m="1375940">can't</span> <span m="1376180">just</span> <span
  m="1377240">say</span> <span m="1377710">that</span> <span
  m="1377830">it's</span> <span m="1378300">impossible</span> <span
  m="1378900">based</span> <span m="1379110">on</span> <span
  m="1379170">the</span> <span m="1379240">same</span> <span
  m="1379460">argument</span> <span m="1379750">here.</span> <span
  m="1380230">And</span> <span m="1380390">that's</span> <span
  m="1380580">because,</span> <span m="1381780">if</span> <span
  m="1382290">you</span> <span m="1382330">think</span> <span
  m="1382450">about</span> <span m="1382590">this</span> <span
  m="1382730">in</span> <span m="1382780">the</span> <span
  m="1382850">case</span> <span m="1383170">of</span> <span
  m="1384590">there's</span> <span m="1384910">some</span> <span
  m="1385230">mRNA</span> <span m="1386010">concentration.</span> <span
  m="1386620">Some</span> <span m="1386830">protein</span> <span
  m="1387310">concentration.</span> <span m="1388860">What</span> <span
  m="1388970">we</span> <span m="1389060">want</span> <span
  m="1389220">to</span> <span m="1389270">know</span> <span
  m="1389500">is</span> <span m="1390870">do</span> <span
  m="1391020">things</span> <span m="1391210">oscillate</span> <span
  m="1391590">in</span> <span m="1391690">this</span> <span
  m="1391850">space.</span> <span m="1392560">And</span> <span
  m="1393000">they</span> <span m="1393100">could.</span></p><p><span
  m="1395170">I</span> <span m="1395250">mean,</span> <span m="1395570">I</span>
  <span m="1395670">could</span> <span m="1395810">certainly</span> <span
  m="1396030">draw</span> <span m="1397630">a</span> <span
  m="1397720">curve.</span> <span m="1398550">It</span> <span
  m="1398650">ends</span> <span m="1398790">up</span> <span
  m="1398870">not</span> <span m="1399600">being</span> <span
  m="1399800">true</span> <span m="1399970">for</span> <span
  m="1400040">these</span> <span m="1400220">particular</span> <span
  m="1400490">sets</span> <span m="1400660">of</span> <span
  m="1400730">equations.</span> <span m="1401070">But</span> <span
  m="1401250">you</span> <span m="1401580">can't</span> <span
  m="1402280">a</span> <span m="1402370">priori,</span> <span
  m="1403120">kind</span> <span m="1403240">of,</span> <span
  m="1403330">dismiss</span> <span m="1403770">the</span> <span
  m="1403870">possibility.</span> <span m="1405690">Yes?</span></p><p><span
  m="1406458">AUDIENCE:</span> <span m="1406956">That's like</span> <span
  m="1407454">a</span> <span m="1407952">differential equation.</span> <span
  m="1408450">But if you</span> <span m="1408948">write down the
  stochastic</span> <span m="1409446">model</span> <span m="1409944">of
  that,</span> <span m="1410442">would that--</span></p><p><span
  m="1410940">PROFESSOR:</span> <span m="1411440">OK,</span> <span
  m="1411790">this</span> <span m="1412420">is</span> <span m="1412510">a</span>
  <span m="1412540">very</span> <span m="1412820">good</span> <span
  m="1412920">question.</span> <span m="1413280">So</span> <span
  m="1414140">this</span> <span m="1414310">is</span> <span
  m="1415120">the</span> <span m="1415240">differential</span> <span
  m="1415790">equation</span> <span m="1416820">format</span> <span
  m="1417130">of</span> <span m="1417170">this</span> <span
  m="1417350">and</span> <span m="1417440">that</span> <span
  m="1417920">we're</span> <span m="1418910">assuming</span> <span
  m="1419220">that</span> <span m="1419320">there</span> <span
  m="1420120">are</span> <span m="1420150">no</span> <span
  m="1420390">stochastic</span> <span m="1420970">fluctuations.</span> <span
  m="1421550">And</span> <span m="1421650">indeed,</span> <span
  m="1422220">there</span> <span m="1422420">is</span> <span
  m="1423070">a</span> <span m="1423720">large</span> <span
  m="1424210">area</span> <span m="1424590">of</span> <span
  m="1424760">excitement,</span> <span m="1425190">recently,</span> <span
  m="1425600">that is</span> <span m="1426160">trying</span> <span
  m="1426400">to</span> <span m="1426440">understand</span> <span
  m="1427450">cases</span> <span m="1427810">in</span> <span
  m="1427910">which</span> <span m="1428510">you</span> <span
  m="1428640">can</span> <span m="1428750">have,</span> <span
  m="1429460">so-called,</span> <span m="1429850">noise</span> <span
  m="1430260">induced</span> <span m="1430600">oscillations.</span></p><p><span
  m="1431530">So</span> <span m="1431620">you can</span> <span
  m="1431770">have</span> <span m="1431920">cases</span> <span
  m="1432600">that</span> <span m="1433220">the</span> <span
  m="1433360">deterministic</span> <span m="1434130">equations</span> <span
  m="1434640">do</span> <span m="1434750">not</span> <span
  m="1434970">oscillate.</span> <span m="1435770">But</span> <span
  m="1438400">if</span> <span m="1438720">you</span> <span m="1438780">do</span>
  <span m="1438900">the</span> <span m="1439000">full</span> <span
  m="1439540">stochastic</span> <span m="1440190">treatment,</span> <span
  m="1440560">then</span> <span m="1440680">that</span> <span
  m="1440930">could</span> <span m="1441150">oscillate.</span> <span
  m="1441860">In</span> <span m="1441960">particular,</span> <span
  m="1442730">if</span> <span m="1442850">you</span> <span m="1442940">do
  a</span> <span m="1443170">master</span> <span m="1443670">equation</span>
  <span m="1444020">type</span> <span m="1444310">formalism.</span> <span
  m="1445620">And</span> <span m="1445760">actually,</span> <span
  m="1445920">I</span> <span m="1446010">don't</span> <span
  m="1446230">know,</span> <span m="1446450">for</span> <span
  m="1446570">this</span> <span m="1446800">particular</span> <span
  m="1447470">equations.</span> <span m="1451094">Yeah,</span> <span
  m="1451550">I</span> <span m="1451610">don't</span> <span
  m="1451760">know</span> <span m="1452230">for</span> <span
  m="1452320">this</span> <span m="1452450">one.</span></p><p><span
  m="1452830">But</span> <span m="1454000">towards</span> <span
  m="1454170">the</span> <span m="1454240">end</span> <span m="1454390">of
  the</span> <span m="1454460">semester,</span> <span m="1454740">we</span>
  <span m="1454860">will</span> <span m="1455040">be</span> <span
  m="1455150">talking</span> <span m="1455420">about</span> <span
  m="1455680">explicit</span> <span m="1456130">models</span> <span
  m="1456490">in</span> <span m="1456580">which,</span> <span
  m="1457630">predator</span> <span m="1458000">prey</span> <span
  m="1458250">systems,</span> <span m="1459030">in</span> <span
  m="1459070">which</span> <span m="1459540">the</span> <span
  m="1460460">differential</span> <span m="1460860">equation</span> <span
  m="1461150">format</span> <span m="1461450">doesn't</span> <span
  m="1461730">oscillate.</span> <span m="1462110">But</span> <span
  m="1462230">then,</span> <span m="1462370">if</span> <span
  m="1462440">you</span> <span m="1462530">do</span> <span
  m="1462630">the</span> <span m="1462730">master</span> <span
  m="1463020">equation</span> <span m="1463730">stochastic</span> <span
  m="1464190">treatment,</span> <span m="1464500">then</span> <span
  m="1464580">it</span> <span m="1464650">does</span> <span
  m="1465020">oscillate.</span> <span m="1466046">Yeah,</span> <span
  m="1466780">so</span> <span m="1466910">we</span> <span
  m="1467030">will</span> <span m="1467270">be</span> <span
  m="1467340">talking</span> <span m="1467570">about</span> <span
  m="1468270">this</span> <span m="1468610">in</span> <span
  m="1468620">other</span> <span m="1468850">contexts.</span> <span
  m="1469170">But</span> <span m="1469330">I</span> <span
  m="1469400">don't</span> <span m="1469550">know</span> <span
  m="1469610">the</span> <span m="1469700">answer</span> <span
  m="1469870">for</span> <span m="1469950">this</span> <span
  m="1470110">model.</span></p><p><span m="1477140">All right,</span> <span
  m="1477640">so</span> <span m="1478360">let's</span> <span
  m="1478840">go</span> <span m="1479200">and,</span> <span
  m="1479600">maybe,</span> <span m="1480300">try</span> <span
  m="1480420">to</span> <span m="1480490">analyze</span> <span m="1480940">this
  a</span> <span m="1481000">little</span> <span m="1481180">bit.</span> <span
  m="1482320">And</span> <span m="1482550">this</span> <span
  m="1482730">is</span> <span m="1483320">useful</span> <span
  m="1483770">to</span> <span m="1483870">do,</span> <span
  m="1484880">partly</span> <span m="1485140">because</span> <span
  m="1486870">some</span> <span m="1487010">of</span> <span
  m="1487050">the</span> <span m="1487110">calculations</span> <span
  m="1487610">are</span> <span m="1487660">going</span> <span
  m="1487740">to</span> <span m="1487780">be</span> <span
  m="1487980">very</span> <span m="1488320">similar</span> <span
  m="1488730">to</span> <span m="1488850">what</span> <span
  m="1488940">we're</span> <span m="1489040">about</span> <span
  m="1489220">to</span> <span m="1489300">do</span> <span
  m="1489420">next,</span> <span m="1489760">which</span> <span
  m="1489910">is</span> <span m="1490500">look</span> <span
  m="1490860">at</span> <span m="1491600">stability</span> <span
  m="1492200">analysis</span> <span m="1492690">of</span> <span
  m="1493410">a</span> <span m="1493470">repressilator</span> <span
  m="1494170">kind</span> <span m="1494300">of</span> <span
  m="1494390">system.</span> <span m="1496420">All</span> <span
  m="1496490">right.</span></p><p><span m="1503350">So</span> <span
  m="1503720">this</span> <span m="1504650">thing</span> <span
  m="1504860">here</span> <span m="1506340">is</span> <span
  m="1506740">some</span> <span m="1507030">function</span> <span
  m="1507650">f</span> <span m="1508480">of</span> <span m="1508860">m</span>
  <span m="1509240">and</span> <span m="1509380">p.</span> <span
  m="1510800">And</span> <span m="1510960">this</span> <span
  m="1512090">guy</span> <span m="1512220">here</span> <span
  m="1512530">is</span> <span m="1512670">indeed,</span> <span
  m="1513030">again,</span> <span m="1513260">some</span> <span
  m="1513540">other</span> <span m="1513750">function</span> <span
  m="1514080">g</span> <span m="1514780">of</span> <span m="1514980">m</span>
  <span m="1515180">and</span> <span m="1515290">p.</span> <span
  m="1515960">And</span> <span m="1516150">we're</span> <span
  m="1516270">going</span> <span m="1516350">to</span> <span
  m="1516390">be</span> <span m="1516450">taking</span> <span
  m="1516730">derivatives</span> <span m="1517270">of</span> <span
  m="1517330">these</span> <span m="1517510">functions</span> <span
  m="1518590">around</span> <span m="1519500">the</span> <span
  m="1519600">fixed</span> <span m="1520130">point.</span> <span
  m="1524260">And</span> <span m="1524650">maybe</span> <span
  m="1524870">I</span> <span m="1524930">will</span> <span
  m="1525100">also</span> <span m="1525310">say</span> <span
  m="1525670">there's</span> <span m="1525960">going</span> <span
  m="1526100">to</span> <span m="1526180">be</span> <span
  m="1526620">some</span> <span m="1528420">stable</span> <span
  m="1528990">point.</span> <span m="1529640">We</span> <span
  m="1530010">should</span> <span m="1530150">just</span> <span
  m="1530280">calculate</span> <span m="1530605">what it is.</span></p><p><span
  m="1530930">I'm</span> <span m="1531050">sorry</span> <span
  m="1531340">I'm</span> <span m="1531790">making</span> <span
  m="1531980">this</span> <span m="1532110">go</span> <span
  m="1532190">up</span> <span m="1532290">and</span> <span
  m="1532370">down.</span> <span m="1533230">Don't</span> <span
  m="1533410">get</span> <span m="1533570">dizzy.</span> <span
  m="1537440">So</span> <span m="1537590">first</span> <span m="1537680">of
  all,</span> <span m="1539170">it's</span> <span m="1539360">always</span>
  <span m="1539690">good</span> <span m="1539830">to</span> <span
  m="1539920">know</span> <span m="1540180">whether</span> <span
  m="1540420">there</span> <span m="1540640">are</span> <span
  m="1540790">fixed</span> <span m="1541110">points</span> <span
  m="1541750">in</span> <span m="1541900">any</span> <span
  m="1542180">sort</span> <span m="1542400">of</span> <span
  m="1542940">equations</span> <span m="1543430">that</span> <span
  m="1543460">you</span> <span m="1543600">ever</span> <span
  m="1543770">look</span> <span m="1543950">at.</span> <span
  m="1546280">So</span> <span m="1546500">let's</span> <span
  m="1546920">go</span> <span m="1547080">ahead</span> <span
  m="1547330">and</span> <span m="1547820">see that.</span></p><p><span
  m="1548190">First</span> <span m="1548400">of</span> <span
  m="1548450">all,</span> <span m="1548580">is</span> <span m="1552910">m</span>
  <span m="1553490">equal to</span> <span m="1553550">0,</span> <span
  m="1553870">p equal</span> <span m="1554180">to 0?</span> <span
  m="1554520">Is</span> <span m="1554770">that</span> <span m="1554850">a</span>
  <span m="1555210">fixed</span> <span m="1555400">point in the</span> <span
  m="1555480">system?</span> <span m="1558030">No.</span> <span
  m="1558550">Right?</span> <span m="1558940">So</span> <span
  m="1560160">if</span> <span m="1560320">m</span> <span m="1560540">and p
  are</span> <span m="1560760">0,</span> <span m="1560960">then</span> <span
  m="1561090">this</span> <span m="1561270">is</span> <span m="1561360">a</span>
  <span m="1561420">fixed</span> <span m="1561660">point.</span> <span
  m="1562310">But</span> <span m="1563160">that</span> <span
  m="1563360">one's</span> <span m="1563510">not</span> <span
  m="1563810">because</span> <span m="1564390">we</span> <span
  m="1564820">get</span> <span m="1565000">expression</span> <span
  m="1565480">of</span> <span m="1565530">the</span> <span
  m="1565770">mRNA</span> <span m="1565880">in</span> <span
  m="1566350">the</span> <span m="1566450">absence</span> <span m="1566810">of
  the</span> <span m="1567080">protein.</span> <span m="1567470">So</span> <span
  m="1567610">the</span> <span m="1567710">origin</span> <span
  m="1568170">is</span> <span m="1568300">not</span> <span m="1568540">a</span>
  <span m="1568580">fixed</span> <span m="1568850">point.</span></p><p><span
  m="1570950">Now</span> <span m="1571120">to</span> <span
  m="1571290">figure</span> <span m="1571490">out</span> <span
  m="1571570">the</span> <span m="1571790">fixed points,</span> <span
  m="1571950">we</span> <span m="1572020">just</span> <span
  m="1572170">set</span> <span m="1572340">these</span> <span
  m="1572480">things</span> <span m="1572670">equal</span> <span
  m="1572840">to</span> <span m="1572890">0.</span> <span m="1573900">So</span>
  <span m="1574980">if</span> <span m="1575690">m dot is</span> <span
  m="1576180">equal</span> <span m="1576330">to</span> <span
  m="1576380">0,</span> <span m="1576920">we</span> <span
  m="1577060">have</span> <span m="1577200">0.</span> <span
  m="1577740">That's</span> <span m="1578330">alpha</span> <span
  m="1579180">1</span> <span m="1579460">plus</span> <span m="1580080">p</span>
  <span m="1581130">to</span> <span m="1581210">the</span> <span
  m="1581330">n</span> <span m="1582220">minus</span> <span
  m="1582790">m.</span> <span m="1585260">Again,</span> <span
  m="1585500">0</span> <span m="1585770">is</span> <span
  m="1586996">this.</span></p><p><span m="1590530">So</span> <span
  m="1590610">what</span> <span m="1590720">you</span> <span
  m="1590770">can</span> <span m="1590870">see</span> <span
  m="1591010">is</span> <span m="1591140">that,</span> <span
  m="1592540">at</span> <span m="1593110">equilibrium,</span> <span
  m="1593990">we</span> <span m="1594160">have</span> <span m="1594570">a</span>
  <span m="1594720">condition</span> <span m="1595290">here</span> <span
  m="1596370">where</span> <span m="1598410">m</span> <span
  m="1598950">is</span> <span m="1599120">equal</span> <span
  m="1599380">to</span> <span m="1600210">p.</span> <span m="1602130">So</span>
  <span m="1602320">from</span> <span m="1602470">this,</span> <span
  m="1602680">we</span> <span m="1602780">get</span> <span m="1603930">m</span>
  <span m="1605570">equilibrium</span> <span m="1606190">is</span> <span
  m="1606290">equal</span> <span m="1606440">to p</span> <span
  m="1606570">equilibrium.</span> <span m="1611920">So</span> <span
  m="1612090">m</span> <span m="1612290">equilibrium</span> <span
  m="1613460">over</span> <span m="1613650">here</span> <span
  m="1615080">has</span> <span m="1615240">to be</span> <span
  m="1615300">equal</span> <span m="1615440">to</span> <span
  m="1615520">p</span> <span m="1615880">equilibrium,</span> <span
  m="1615930">we</span> <span m="1616090">just</span> <span
  m="1616170">said.</span> <span m="1617040">And</span> <span
  m="1617120">that's</span> <span m="1617330">equal</span> <span
  m="1617600">to</span> <span m="1617690">this</span> <span
  m="1617880">guy</span> <span m="1618010">here.</span> <span
  m="1618330">It's</span> <span m="1619090">alpha</span> <span
  m="1619740">1</span> <span m="1620100">plus</span> <span m="1620600">p</span>
  <span m="1621280">equilibrium</span> <span m="1622130">to</span> <span
  m="1622230">the</span> <span m="1622340">n.</span></p><p><span m="1624204">All
  right.</span> <span m="1625070">And</span> <span m="1625930">the</span> <span
  m="1626480">condition</span> <span m="1626920">for</span> <span
  m="1627180">this</span> <span m="1627350">equilibrium</span> <span
  m="1627800">is</span> <span m="1627950">then</span> <span
  m="1628380">something</span> <span m="1628610">that</span> <span
  m="1628710">looks</span> <span m="1628830">like</span> <span
  m="1628960">this.</span> <span m="1636170">Now</span> <span
  m="1636370">this</span> <span m="1636420">is</span> <span
  m="1639030">maybe</span> <span m="1639420">not</span> <span
  m="1640030">so</span> <span m="1640450">intuitive.</span> <span
  m="1641570">But</span> <span m="1642450">alpha</span> <span
  m="1643200">is</span> <span m="1643450">this</span> <span
  m="1643780">non</span> <span m="1644030">dimensional</span> <span
  m="1644310">version</span> <span m="1644560">of</span> <span
  m="1644620">the</span> <span m="1644700">strength</span> <span
  m="1645530">of</span> <span m="1645790">expression.</span> <span
  m="1647980">And</span> <span m="1648070">what</span> <span
  m="1648150">this</span> <span m="1648290">is</span> <span
  m="1648400">saying</span> <span m="1648750">is</span> <span
  m="1648850">that,</span> <span m="1649780">broadly,</span> <span
  m="1652600">it's</span> <span m="1652820">not</span> <span
  m="1652990">obvious</span> <span m="1653910">how</span> <span
  m="1654030">to</span> <span m="1654090">solve</span> <span
  m="1654310">this</span> <span m="1654470">explicitly.</span></p><p><span
  m="1654950">But</span> <span m="1655580">as</span> <span
  m="1655850">the</span> <span m="1656290">strength</span> <span
  m="1656710">of</span> <span m="1656790">expression</span> <span
  m="1657250">goes</span> <span m="1657470">up,</span> <span
  m="1657950">the</span> <span m="1658150">equilibrium</span> <span
  m="1659150">here--</span> <span m="1659360">and</span> <span
  m="1660400">I'm</span> <span m="1660950">saying</span> <span
  m="1661220">equilibrium.</span> <span m="1662000">And</span> <span
  m="1662080">that's,</span> <span m="1662320">maybe,</span> <span
  m="1662830">a</span> <span m="1662880">little</span> <span
  m="1663020">bit</span> <span m="1663130">dangerous.</span> <span
  m="1663910">We</span> <span m="1664090">might</span> <span
  m="1664260">even</span> <span m="1664430">want</span> <span
  m="1664580">to</span> <span m="1664630">just</span> <span
  m="1664780">call</span> <span m="1665050">it--</span> <span m="1666885">it's
  a</span> <span m="1667380">fixed</span> <span m="1667890">point in</span>
  <span m="1668100">concentration,</span> <span m="1668600">so</span> <span
  m="1668690">it</span> <span m="1668740">doesn't</span> <span
  m="1668960">have</span> <span m="1669090">to</span> <span
  m="1669180">be</span> <span m="1669300">stable.</span> <span
  m="1670550">So</span> <span m="1670940">if</span> <span m="1671010">we</span>
  <span m="1671830">don't</span> <span m="1671930">want</span> <span
  m="1672030">to</span> <span m="1672080">bias</span> <span
  m="1672550">our</span> <span m="1672650">thinking,</span> <span
  m="1673560">different</span> <span m="1673850">people</span> <span
  m="1674110">argue</span> <span m="1674440">about</span> <span
  m="1674810">whether</span> <span m="1675050">equilibrium</span> <span
  m="1675630">should</span> <span m="1675760">be</span> <span
  m="1675830">a</span> <span m="1675890">stable</span> <span
  m="1676460">or</span> <span m="1676640">require</span> <span m="1677050">a
  stable.</span></p><p><span m="1677430">We</span> <span
  m="1677520">could</span> <span m="1677610">just</span> <span m="1677710">call
  it</span> <span m="1677920">some</span> <span m="1678070">p</span> <span
  m="1678260">0</span> <span m="1679240">if</span> <span m="1679690">that</span>
  <span m="1679920">makes</span> <span m="1680200">you</span> <span
  m="1680390">less</span> <span m="1680630">likely</span> <span
  m="1680970">to</span> <span m="1681770">bias</span> <span
  m="1682210">our</span> <span m="1682470">thinking</span> <span
  m="1682730">in</span> <span m="1682770">terms</span> <span
  m="1682940">of</span> <span m="1683000">whether</span> <span
  m="1683170">this</span> <span m="1684240">concentration</span> <span
  m="1684670">should</span> <span m="1684780">be</span> <span
  m="1684850">a</span> <span m="1684900">stable</span> <span
  m="1685310">or</span> <span m="1685510">unstable</span> <span
  m="1685930">fixed</span> <span m="1686150">point.</span> <span
  m="1689480">But</span> <span m="1689870">for</span> <span
  m="1689980">example,</span> <span m="1690520">if</span> <span
  m="1691180">we</span> <span m="1691350">have</span> <span
  m="1691660">that,</span> <span m="1692060">in</span> <span
  m="1692670">these</span> <span m="1692730">units,</span> <span
  m="1693320">if</span> <span m="1693550">alpha</span> <span
  m="1694110">is</span> <span m="1695730">around</span> <span
  m="1696000">10,</span> <span m="1696740">n</span> <span
  m="1696960">might</span> <span m="1697230">2.</span> <span
  m="1698080">Then,</span> <span m="1698480">this</span> <span
  m="1698690">thing</span> <span m="1698880">gives</span> <span
  m="1699100">us</span> <span m="1699210">something.</span> <span
  m="1699590">It's</span> <span m="1702460">in</span> <span
  m="1702570">the</span> <span m="1702630">range</span> <span m="1702860">of
  a</span> <span m="1702950">couple</span> <span m="1704612">or</span> <span
  m="1704980">2,</span> <span m="1705250">3.</span></p><p><span m="1705520">I
  mean,</span> <span m="1705790">you can</span> <span
  m="1705990">calculate</span> <span m="1706320">what</span> <span
  m="1706850">it</span> <span m="1707180">should</span> <span
  m="1707300">be.</span> <span m="1708780">2,</span> <span m="1709180">4,</span>
  <span m="1710210">maybe</span> <span m="1710430">even</span> <span
  m="1710650">exactly</span> <span m="1711080">2.</span> <span m="1712780">Did
  that--</span> <span m="1714230">yeah.</span> <span m="1714640">All</span>
  <span m="1714760">right,</span> <span m="1714960">so</span> <span
  m="1715410">yes.</span> <span m="1716140">I'm just</span> <span
  m="1716440">giving an</span> <span m="1716740">example.</span> <span
  m="1717140">If</span> <span m="1717240">alpha</span> <span
  m="1717410">were</span> <span m="1717560">10,</span> <span
  m="1717890">then</span> <span m="1718330">this</span> <span
  m="1718490">equilibrium</span> <span m="1719090">concentration</span> <span
  m="1719720">or</span> <span m="1719800">this</span> <span
  m="1720500">fixed</span> <span m="1720740">point</span> <span
  m="1720910">concentration</span> <span m="1721320">would</span> <span
  m="1721430">be</span> <span m="1721590">2</span> <span m="1721970">if</span>
  <span m="1722360">n</span> <span m="1722720">were</span> <span
  m="1722860">equal</span> <span m="1722990">to 2</span> <span
  m="1723260">to</span> <span m="1723550">give</span> <span
  m="1723700">you,</span> <span m="1723780">kind</span> <span
  m="1723910">of,</span> <span m="1723990">some</span> <span
  m="1724270">sense</span> <span m="1724630">of</span> <span
  m="1724710">the</span> <span m="1724780">numbers.</span> <span
  m="1726320">And</span> <span m="1726610">this</span> <span
  m="1727370">is</span> <span m="1727890">2</span> <span m="1728220">in</span>
  <span m="1728320">units</span> <span m="1728650">of</span> <span
  m="1728880">that</span> <span m="1729890">binding</span> <span
  m="1730180">affinity k,</span> <span m="1730700">right.</span></p><p><span
  m="1732570">Now</span> <span m="1732800">the</span> <span
  m="1732900">question</span> <span m="1733160">is,</span> <span
  m="1733330">well,</span> <span m="1733450">what</span> <span
  m="1733470">does</span> <span m="1733550">this</span> <span
  m="1733700">mean?</span> <span m="1734150">Why</span> <span
  m="1734320">did</span> <span m="1734450">we</span> <span m="1734630">do</span>
  <span m="1734830">this?</span> <span m="1735020">Why</span> <span
  m="1735140">do</span> <span m="1735200">we</span> <span
  m="1735310">care</span> <span m="1735740">at</span> <span
  m="1735810">all</span> <span m="1736110">about</span> <span
  m="1736310">the</span> <span m="1736390">properties</span> <span
  m="1736800">of that</span> <span m="1736980">fix</span> <span
  m="1737150">point?</span> <span m="1739180">OK,</span> <span
  m="1739470">so</span> <span m="1739540">this</span> <span
  m="1739910">might</span> <span m="1740080">be</span> <span
  m="1740690">some</span> <span m="1740840">p</span> <span m="1741010">0.</span>
  <span m="1742760">And</span> <span m="1742910">this</span> <span
  m="1743060">is,</span> <span m="1743150">again,</span> <span
  m="1743990">m</span> <span m="1744200">0</span> <span m="1744480">is</span>
  <span m="1744640">equal</span> <span m="1744780">to</span> <span
  m="1744850">p</span> <span m="1744980">0</span> <span m="1745250">in</span>
  <span m="1745340">these</span> <span m="1745460">units.</span> <span
  m="1747380">So</span> <span m="1747460">there's</span> <span
  m="1747810">some</span> <span m="1748110">fixed</span> <span
  m="1748420">point</span> <span m="1749030">somewhere</span> <span
  m="1749340">in</span> <span m="1749390">the</span> <span
  m="1749460">middle</span> <span m="1749660">there.</span></p><p><span
  m="1751190">Now</span> <span m="1751680">it</span> <span
  m="1751810">turns</span> <span m="1752150">out</span> <span
  m="1752270">that</span> <span m="1752330">the</span> <span
  m="1752650">stability</span> <span m="1753390">of</span> <span
  m="1753490">that fixed</span> <span m="1753890">point</span> <span
  m="1755170">is</span> <span m="1755710">very</span> <span
  m="1756180">important</span> <span m="1756630">in</span> <span
  m="1756710">determining</span> <span m="1757130">whether</span> <span
  m="1757350">there</span> <span m="1757510">are</span> <span
  m="1757650">oscillations</span> <span m="1757980">or not.</span> <span
  m="1760390">Now</span> <span m="1760890">the</span> <span
  m="1761010">question</span> <span m="1761530">of</span> <span
  m="1762390">the</span> <span m="1762630">generality</span> <span
  m="1763500">or</span> <span m="1764080">what</span> <span
  m="1764320">can</span> <span m="1764420">you</span> <span
  m="1764500">say</span> <span m="1764650">that's</span> <span
  m="1764840">universally</span> <span m="1765250">true</span> <span
  m="1765630">about</span> <span m="1765970">when</span> <span
  m="1766160">you</span> <span m="1766260">get</span> <span
  m="1766380">oscillations</span> <span m="1766870">and when</span> <span
  m="1766990">you</span> <span m="1767070">don't,</span> <span
  m="1767650">this</span> <span m="1767920">is,</span> <span
  m="1768460">in</span> <span m="1768570">general, a</span> <span
  m="1768820">very</span> <span m="1769020">hard</span> <span
  m="1769370">mathematical</span> <span m="1769880">problem,</span> <span
  m="1770820">particularly</span> <span m="1771130">in</span> <span
  m="1771200">higher</span> <span m="1771550">numbers</span> <span
  m="1771790">of</span> <span m="1771860">dimensions.</span></p><p><span
  m="1772990">But</span> <span m="1773570">for</span> <span
  m="1773810">two</span> <span m="1774040">dimensions,</span> <span
  m="1774560">there's</span> <span m="1774680">a</span> <span
  m="1774720">very</span> <span m="1774970">nice</span> <span
  m="1775500">statement</span> <span m="1775910">that</span> <span
  m="1775940">you</span> <span m="1776060">can</span> <span
  m="1776150">make</span> <span m="1776730">based</span> <span
  m="1776980">on</span> <span m="1777090">the</span> <span
  m="1777570">Poincare-Bendixson</span> <span m="1778770">criterion.</span>
  <span m="1780800">I</span> <span m="1781660">cannot</span> <span
  m="1781960">remember</span> <span m="1782180">how</span> <span
  m="1782240">to</span> <span m="1782320">spell</span> <span
  m="1782620">that.</span> <span m="1783690">I'm</span> <span
  m="1783840">probably</span> <span m="1784150">mispronouncing</span> <span
  m="1784415">it,</span> <span m="1784680">as</span> <span
  m="1784820">well.</span> <span m="1787540">So</span> <span
  m="1787700">Poincare-Bendixson,</span> <span m="1788240">what</span> <span
  m="1788340">they</span> <span m="1788450">showed</span> <span
  m="1788730">is</span> <span m="1788800">that</span> <span
  m="1789730">if,</span> <span m="1790190">in</span> <span
  m="1790400">two</span> <span m="1790570">dimensions,</span> <span
  m="1791980">you</span> <span m="1792140">can</span> <span
  m="1792270">draw</span> <span m="1792550">some</span> <span
  m="1792830">box</span> <span m="1793290">here</span> <span
  m="1795620">such</span> <span m="1795970">that</span> <span
  m="1796250">all</span> <span m="1796460">of</span> <span
  m="1796540">the</span> <span m="1796630">trajectories</span> <span
  m="1797180">are,</span> <span m="1797240">kind</span> <span
  m="1797360">of,</span> <span m="1797450">coming</span> <span
  m="1797780">in.</span></p><p><span m="1800710">And</span> <span
  m="1800870">indeed,</span> <span m="1801430">in</span> <span
  m="1801570">this</span> <span m="1801720">case,</span> <span
  m="1802050">they</span> <span m="1802440">do</span> <span
  m="1802690">come</span> <span m="1802870">in</span> <span
  m="1803260">because</span> <span m="1803390">the</span> <span
  m="1803680">trajectories</span> <span m="1803980">aren't</span> <span
  m="1804080">going to</span> <span m="1804170">cross</span> <span
  m="1805360">0.</span> <span m="1806600">If</span> <span m="1808010">you</span>
  <span m="1808080">have</span> <span m="1808170">some</span> <span
  m="1808310">mRNA,</span> <span m="1808820">then</span> <span
  m="1808930">you're</span> <span m="1809160">going to start</span> <span
  m="1809230">making</span> <span m="1809450">protein.</span> <span
  m="1811920">If</span> <span m="1812090">you</span> <span
  m="1812190">have</span> <span m="1812530">just</span> <span
  m="1812880">protein,</span> <span m="1813165">no</span> <span
  m="1813450">mRNA,</span> <span m="1813880">you're going to</span> <span
  m="1814010">start</span> <span m="1814350">making</span> <span
  m="1814580">some</span> <span m="1814865">mRNA.</span> <span
  m="1815530">And</span> <span m="1815590">we</span> <span
  m="1815670">know</span> <span m="1815810">that</span> <span
  m="1816050">trajectories</span> <span m="1816460">have to</span> <span
  m="1816650">come</span> <span m="1816810">in</span> <span
  m="1816920">from</span> <span m="1816970">out here</span> <span
  m="1817650">because</span> <span m="1818580">if</span> <span
  m="1819160">the</span> <span m="1819230">concentration</span> <span
  m="1819660">of</span> <span m="1819760">mRNA</span> <span m="1820190">and
  the</span> <span m="1820540">concentration of</span> <span
  m="1820670">protein</span> <span m="1821100">are</span> <span
  m="1821260">very</span> <span m="1821520">large</span> <span
  m="1822620">then,</span> <span m="1822680">eventually,</span> <span
  m="1823200">the</span> <span m="1823330">degradation is</span> <span
  m="1824000">going</span> <span m="1824110">to</span> <span
  m="1824470">start</span> <span m="1824690">pulling</span> <span
  m="1824910">things</span> <span m="1825110">in.</span></p><p><span
  m="1825260">So</span> <span m="1825790">if</span> <span m="1825910">you</span>
  <span m="1826000">come</span> <span m="1826190">out</span> <span
  m="1826400">far</span> <span m="1826700">enough,</span> <span
  m="1827460">eventually,</span> <span m="1828580">you're</span> <span
  m="1828830">going to</span> <span m="1828940">get</span> <span
  m="1829320">trajectories coming</span> <span m="1829530">in.</span> <span
  m="1829670">So</span> <span m="1829880">now</span> <span m="1830080">we</span>
  <span m="1830180">have there is</span> <span m="1830670">some</span> <span
  m="1830870">domain</span> <span m="1831230">where</span> <span
  m="1831390">all</span> <span m="1831460">the</span> <span
  m="1831530">trajectories</span> <span m="1831780">are going</span> <span
  m="1831940">to</span> <span m="1832040">come</span> <span
  m="1832200">in.</span> <span m="1832890">Now</span> <span
  m="1833040">you</span> <span m="1833120">can</span> <span
  m="1833220">imagine</span> <span m="1833540">that,</span> <span
  m="1833760">somehow,</span> <span m="1834060">the</span> <span
  m="1834130">stability</span> <span m="1834720">of</span> <span
  m="1834790">this</span> <span m="1834980">thing</span> <span
  m="1835670">is</span> <span m="1835840">very</span> <span
  m="1836060">important</span> <span m="1836710">because</span> <span
  m="1836920">in</span> <span m="1837210">two</span> <span
  m="1837510">dimensions</span> <span m="1838020">here</span> <span
  m="1839770">when</span> <span m="1839950">you</span> <span
  m="1840000">have</span> <span m="1840080">a</span> <span
  m="1840130">differential</span> <span m="1840520">equation,</span> <span
  m="1841080">trajectories</span> <span m="1841720">cannot</span> <span
  m="1842090">cross</span> <span m="1842400">each</span> <span
  m="1842560">other.</span></p><p><span m="1845120">So</span> <span
  m="1845290">I'm</span> <span m="1845620">not</span> <span
  m="1845930">allowed</span> <span m="1846370">in</span> <span
  m="1846510">any</span> <span m="1846730">sort</span> <span
  m="1846870">of</span> <span m="1846930">space</span> <span
  m="1847270">like</span> <span m="1847400">this</span> <span
  m="1847620">to</span> <span m="1847910">do</span> <span
  m="1848160">something</span> <span m="1849020">that</span> <span
  m="1849140">looks</span> <span m="1849330">like</span> <span
  m="1849480">this</span> <span m="1851050">because</span> <span
  m="1851290">this</span> <span m="1851490">would</span> <span
  m="1851640">require</span> <span m="1852200">that,</span> <span
  m="1852350">at</span> <span m="1852500">some</span> <span
  m="1852740">concentration</span> <span m="1853390">of</span> <span
  m="1853510">m</span> <span m="1854360">and</span> <span m="1854630">p,</span>
  <span m="1855010">I</span> <span m="1855390">have</span> <span
  m="1855800">different</span> <span m="1856120">values</span> <span
  m="1856450">for</span> <span m="1856560">m dot</span> <span
  m="1856975">and</span> <span m="1857390">p dot.</span> <span
  m="1857550">So</span> <span m="1858000">it's</span> <span
  m="1858150">similar</span> <span m="1858650">to</span> <span
  m="1858700">this</span> <span m="1858800">argument</span> <span
  m="1859080">we</span> <span m="1859160">made</span> <span
  m="1859320">for</span> <span m="1859420">one</span> <span
  m="1859610">dimension.</span> <span m="1859940">But</span> <span
  m="1860080">it's</span> <span m="1860260">just</span> <span
  m="1860440">generalized</span> <span m="1860800">to two</span> <span
  m="1861020">dimensions.</span></p><p><span m="1862360">So</span> <span
  m="1862730">we're</span> <span m="1862880">not</span> <span
  m="1863150">allowed</span> <span m="1863510">to</span> <span
  m="1863610">cross</span> <span m="1864080">trajectories.</span> <span
  m="1866250">Well</span> <span m="1867810">if</span> <span
  m="1867900">you</span> <span m="1867970">have a</span> <span
  m="1868090">differential</span> <span m="1868460">equation</span> <span
  m="1868830">in</span> <span m="1868920">any</span> <span
  m="1869090">dimensions,</span> <span m="1869400">that's</span> <span
  m="1869580">true.</span> <span m="1869750">But</span> <span
  m="1869830">the</span> <span m="1869910">thing</span> <span
  m="1870080">is</span> <span m="1870170">that</span> <span
  m="1870850">this</span> <span m="1870990">constraint</span> <span
  m="1871340">is</span> <span m="1871450">a</span> <span m="1872410">very</span>
  <span m="1872530">strong</span> <span m="1872890">constraint</span> <span
  m="1873300">in two dimensions.</span> <span m="1873630">Whereas,</span> <span
  m="1873810">in</span> <span m="1873910">three</span> <span
  m="1874110">dimensions,</span> <span m="1875000">everything</span> <span
  m="1875400">kind</span> <span m="1875530">of</span> <span
  m="1875590">goes</span> <span m="1875720">out</span> <span
  m="1875820">the</span> <span m="1875890">window</span> <span
  m="1876300">because</span> <span m="1877410">in the three</span> <span
  m="1877510">dimensions,</span> <span m="1877970">you</span> <span
  m="1878050">have</span> <span m="1878230">another</span> <span
  m="1878570">axis</span> <span m="1878810">here.</span></p><p><span
  m="1879060">And</span> <span m="1879160">then,</span> <span
  m="1879630">these</span> <span m="1879820">lines</span> <span
  m="1880240">can</span> <span m="1880410">do</span> <span
  m="1880590">all</span> <span m="1880700">sorts</span> <span
  m="1880870">of</span> <span m="1880910">crazy</span> <span
  m="1881150">things.</span> <span m="1881480">And</span> <span
  m="1881500">that's</span> <span m="1881710">actually,</span> <span
  m="1881980">basically,</span> <span m="1882370">why</span> <span
  m="1882980">you</span> <span m="1883160">need</span> <span
  m="1883430">three</span> <span m="1883640">dimensions</span> <span
  m="1884080">in order</span> <span m="1884280">to get</span> <span
  m="1884450">chaos</span> <span m="1884950">in</span> <span
  m="1885580">differential</span> <span m="1885920">equations</span> <span
  m="1887400">because</span> <span m="1888780">this</span> <span
  m="1888950">thing</span> <span m="1889110">about</span> <span
  m="1889310">the</span> <span m="1889780">absence</span> <span
  m="1890130">of</span> <span m="1890230">crossing</span> <span
  m="1890540">is</span> <span m="1890620">just</span> <span
  m="1890820">such</span> <span m="1891010">a</span> <span
  m="1891060">strong</span> <span m="1891370">constraint</span> <span
  m="1892380">in</span> <span m="1892520">two</span> <span
  m="1892650">dimensions.</span> <span m="1895960">Other</span> <span
  m="1896130">questions about</span> <span m="1896440">what</span> <span
  m="1896640">I'm</span> <span m="1896710">saying right now?</span> <span
  m="1897080">I'm</span> <span m="1897230">a</span> <span
  m="1897250">little</span> <span m="1897370">bit</span> <span
  m="1897470">worried</span> <span m="1897800">that</span> <span
  m="1897940">I'm--</span></p><p><span m="1902380">All right, so</span> <span
  m="1902570">the</span> <span m="1902960">trajectories</span> <span
  m="1903330">are</span> <span m="1903400">not</span> <span m="1903660">allowed
  to</span> <span m="1903740">cross.</span> <span m="1905420">And</span> <span
  m="1905690">that's</span> <span m="1905880">really</span> <span
  m="1906080">saying</span> <span m="1906310">something</span> <span
  m="1906800">very</span> <span m="1906970">strong</span> <span
  m="1907280">because</span> <span m="1907520">we</span> <span
  m="1907630">know</span> <span m="1907780">that,</span> <span
  m="1908290">here,</span> <span m="1908660">trajectories</span> <span
  m="1909170">are</span> <span m="1909210">going</span> <span
  m="1909300">to</span> <span m="1909370">come</span> <span
  m="1909750">out</span> <span m="1913170">of</span> <span
  m="1913290">the</span> <span m="1913370">axis.</span> <span
  m="1913930">And</span> <span m="1914630">mRNA,</span> <span
  m="1915420">we</span> <span m="1915530">don't</span> <span
  m="1915710">know</span> <span m="1916320">which</span> <span
  m="1916510">direction</span> <span m="1916870">they're</span> <span
  m="1916960">going</span> <span m="1917040">to</span> <span
  m="1917080">come.</span> <span m="1917740">But</span> <span
  m="1918050">let's</span> <span m="1918730">figure</span> <span
  m="1918890">out,</span> <span m="1919080">if</span> <span
  m="1919250">it</span> <span m="1919390">were</span> <span
  m="1919580">to</span> <span m="1919630">oscillate,</span> <span
  m="1921180">would</span> <span m="1921360">the</span> <span
  m="1921690">trajectories be</span> <span m="1922060">going</span> <span
  m="1922280">clockwise</span> <span m="1922690">or</span> <span
  m="1922750">counterclockwise?</span></p><p><span m="1925720">And</span> <span
  m="1925850">actually,</span> <span m="1926080">there's</span> <span
  m="1926290">going</span> <span m="1926380">to</span> <span
  m="1926420">be</span> <span m="1926490">some</span> <span
  m="1926720">sense</span> <span m="1927350">of</span> <span
  m="1927830">the</span> <span m="1927980">trajectories</span> <span
  m="1928430">even</span> <span m="1929070">in</span> <span
  m="1929130">the</span> <span m="1929200">absence</span> <span
  m="1929510">of</span> <span m="1929580">oscillations.</span> <span
  m="1930070">But</span> <span m="1930670">broadly,</span> <span
  m="1931200">is</span> <span m="1931740">there</span> <span
  m="1931860">kind</span> <span m="1932030">of</span> <span m="1932110">a</span>
  <span m="1933250">counterclockwise</span> <span m="1933890">or</span> <span
  m="1933980">clockwise</span> <span m="1934400">kind</span> <span
  m="1934510">of</span> <span m="1935710">motion</span> <span
  m="1936025">to</span> <span m="1936340">the</span> <span
  m="1936440">trajectories?</span> <span m="1938690">Counterclockwise,</span>
  <span m="1939410">right?</span> <span m="1939810">And</span> <span
  m="1939910">that's</span> <span m="1940050">because</span> <span
  m="1940700">mRNA</span> <span m="1941330">leads</span> <span
  m="1941560">to</span> <span m="1941660">protein.</span></p><p><span
  m="1944100">So</span> <span m="1944220">things</span> <span
  m="1944510">are</span> <span m="1944550">going</span> <span
  m="1944640">to</span> <span m="1945430">go</span> <span
  m="1945630">like</span> <span m="1945760">this.</span> <span
  m="1946320">And</span> <span m="1946640">the</span> <span
  m="1946740">question</span> <span m="1947070">is</span> <span
  m="1947836">is</span> <span m="1948220">it</span> <span
  m="1948360">going</span> <span m="1948530">to</span> <span
  m="1948780">oscillate.</span> <span m="1949020">And</span> <span
  m="1949590">in</span> <span m="1949760">two</span> <span
  m="1949930">dimensions,</span> <span m="1950350">actually--</span> <span
  m="1950880">Poincare-Bendixson--</span> <span m="1951940">what</span> <span
  m="1952050">they</span> <span m="1952160">say</span> <span
  m="1952340">is</span> <span m="1952440">that,</span> <span m="1955980">if
  there's</span> <span m="1956120">just</span> <span m="1956330">one</span>
  <span m="1956490">fixed</span> <span m="1956640">point</span> <span
  m="1956790">here,</span> <span m="1957290">then</span> <span
  m="1958300">the</span> <span m="1958410">question</span> <span
  m="1958720">of</span> <span m="1958790">whether</span> <span
  m="1959050">it</span> <span m="1959160">oscillates</span> <span
  m="1959600">is</span> <span m="1959750">the</span> <span
  m="1959830">same</span> <span m="1960150">as</span> <span
  m="1960240">the</span> <span m="1960310">question</span> <span
  m="1960670">of</span> <span m="1960800">whether</span> <span
  m="1961010">this</span> <span m="1961270">is</span> <span
  m="1962170">stable.</span> <span m="1963130">So</span> <span
  m="1964870">if</span> <span m="1964970">it's</span> <span
  m="1965170">stable,</span> <span m="1967110">then</span> <span
  m="1967330">there's</span> <span m="1967550">no</span> <span
  m="1967820">oscillations.</span></p><p><span m="1970040">If</span> <span
  m="1970260">it's</span> <span m="1970410">unstable,</span> <span
  m="1970960">than</span> <span m="1971090">there</span> <span
  m="1971150">are.</span> <span m="1979990">We'll just</span> <span
  m="1980200">say</span> <span m="1980450">no</span> <span
  m="1980620">oscillations and</span> <span m="1981080">oscillations.</span>
  <span m="1982600">And</span> <span m="1982750">that's</span> <span
  m="1982930">because</span> <span m="1983540">if</span> <span
  m="1983650">it's</span> <span m="1983760">a</span> <span
  m="1983830">stable</span> <span m="1984450">point</span> <span m="1984710">and
  all</span> <span m="1984850">the</span> <span m="1984930">trajectories
  are</span> <span m="1985300">coming</span> <span m="1985530">in,</span> <span
  m="1985900">then</span> <span m="1986300">it</span> <span
  m="1986440">just</span> <span m="1986620">looks</span> <span
  m="1986810">like</span> <span m="1986990">this.</span> <span
  m="1988440">So</span> <span m="1988570">it</span> <span
  m="1988670">spirals,</span> <span m="1989360">maybe,</span> <span
  m="1989600">into</span> <span m="1989790">a</span> <span
  m="1989840">state</span> <span m="1990090">of</span> <span
  m="1990500">coexistence.</span> <span m="1992520">Well</span> <span
  m="1993930">it</span> <span m="1994250">spirals</span> <span
  m="1994730">to</span> <span m="1994830">this</span> <span
  m="1994930">point</span> <span m="1995340">of</span> <span
  m="1995470">m</span> <span m="1995780">and p.</span></p><p><span
  m="1996090">Whereas,</span> <span m="1996360">if it's</span> <span
  m="1996560">unstable,</span> <span m="1997070">then</span> <span
  m="1997150">those</span> <span m="1997290">trajectories</span> <span
  m="1997750">are,</span> <span m="1997880">somehow,</span> <span
  m="1998330">being</span> <span m="1998530">pushed</span> <span
  m="1998810">out.</span> <span m="1999480">If</span> <span
  m="1999830">it's</span> <span m="1999980">unstable,</span> <span
  m="2000370">then</span> <span m="2000450">the</span> <span
  m="2000510">trajectories</span> <span m="2000860">are</span> <span
  m="2000910">coming</span> <span m="2001150">out</span> <span
  m="2001350">of</span> <span m="2001410">that</span> <span
  m="2003200">fixed</span> <span m="2003420">point.</span> <span
  m="2003870">In</span> <span m="2003980">which</span> <span
  m="2004150">case,</span> <span m="2004780">then</span> <span
  m="2005040">that's</span> <span m="2005690">actually</span> <span
  m="2006050">precisely</span> <span m="2006370">the</span> <span
  m="2006550">situation</span> <span m="2006620">in which you</span> <span
  m="2007020">get a</span> <span m="2007150">limit</span> <span
  m="2007530">cycle</span> <span m="2007710">oscillations.</span></p><p><span
  m="2008900">So</span> <span m="2009370">if</span> <span m="2009570">the</span>
  <span m="2009910">fixed</span> <span m="2010090">point</span> <span
  m="2010310">were</span> <span m="2010510">unstable,</span> <span
  m="2012710">it</span> <span m="2012790">looks</span> <span
  m="2012990">like</span> <span m="2013150">this</span> <span
  m="2015230">because</span> <span m="2015790">we</span> <span
  m="2015890">have</span> <span m="2015910">some</span> <span
  m="2016060">box.</span> <span m="2016930">The</span> <span
  m="2017110">trajectories</span> <span m="2017500">are</span> <span
  m="2017570">all</span> <span m="2018030">coming</span> <span
  m="2018280">in,</span> <span m="2018720">somehow,</span> <span
  m="2019100">in</span> <span m="2019210">here.</span> <span
  m="2020760">But</span> <span m="2020880">if</span> <span m="2020960">we</span>
  <span m="2021040">have</span> <span m="2021150">one</span> <span
  m="2021360">fixed</span> <span m="2021600">point</span> <span
  m="2021820">here</span> <span m="2023260">and</span> <span
  m="2023730">the</span> <span m="2023940">trajectories</span> <span
  m="2024270">are</span> <span m="2024330">coming</span> <span
  m="2024610">out,</span> <span m="2025570">that</span> <span
  m="2025710">means</span> <span m="2025860">we</span> <span
  m="2025940">have</span> <span m="2026030">something</span> <span
  m="2026270">that</span> <span m="2026370">looks</span> <span
  m="2026530">like</span> <span m="2026720">this.</span> <span
  m="2026950">It</span> <span m="2027070">kind</span> <span
  m="2027190">of</span> <span m="2027250">comes</span> <span
  m="2027470">out.</span></p><p><span m="2028310">And</span> <span
  m="2028470">given</span> <span m="2028630">that</span> <span
  m="2028730">these</span> <span m="2028880">trajectories</span> <span
  m="2029290">can't</span> <span m="2029530">cross, the</span> <span
  m="2029950">question is,</span> <span m="2030260">well,</span> <span
  m="2030430">what can</span> <span m="2030590">happen</span> <span
  m="2030920">in</span> <span m="2030990">between?</span> <span
  m="2031830">And</span> <span m="2031960">the</span> <span
  m="2032030">answer</span> <span m="2032260">is,</span> <span
  m="2033980">basically,</span> <span m="2034410">you</span> <span
  m="2034470">have</span> <span m="2034610">to</span> <span
  m="2034720">get</span> <span m="2035100">a</span> <span
  m="2035190">limit</span> <span m="2035460">cycle</span> <span
  m="2035780">oscillation.</span> <span m="2037110">There</span> <span
  m="2037320">are</span> <span m="2037550">these</span> <span
  m="2037880">strange</span> <span m="2038320">situations</span> <span
  m="2038830">where</span> <span m="2038950">you can</span> <span
  m="2039210">get</span> <span m="2040980">a</span> <span
  m="2041070">path</span> <span m="2041570">that</span> <span
  m="2041640">is</span> <span m="2041730">an</span> <span
  m="2041810">oscillation</span> <span m="2042240">that's,</span> <span
  m="2042330">kind</span> <span m="2042430">of,</span> <span
  m="2042490">stable</span> <span m="2042880">from</span> <span
  m="2043050">one</span> <span m="2043220">direction and</span> <span
  m="2043700">unstable</span> <span m="2044130">from</span> <span
  m="2044270">another.</span></p><p><span m="2045250">We're</span> <span
  m="2045420">not</span> <span m="2045590">going</span> <span
  m="2045690">to</span> <span m="2045760">worry</span> <span
  m="2046020">about</span> <span m="2046240">that</span> <span
  m="2046920">here.</span> <span m="2048030">But</span> <span
  m="2048420">broadly,</span> <span m="2049000">if</span> <span
  m="2049130">this</span> <span m="2049290">thing</span> <span
  m="2049409">is</span> <span m="2049500">coming</span> <span
  m="2049760">out,</span> <span m="2051050">then</span> <span
  m="2051350">you</span> <span m="2051480">end</span> <span
  m="2051659">up,</span> <span m="2052130">in</span> <span
  m="2052270">both</span> <span m="2052510">directions,</span> <span
  m="2053040">converging</span> <span m="2053530">to</span> <span
  m="2053639">a</span> <span m="2053690">stable</span> <span
  m="2054179">limit</span> <span m="2054449">cycle</span> <span
  m="2054909">oscillation.</span> <span m="2057949">So</span> <span
  m="2058020">it's a</span> <span m="2058210">unstable</span> <span
  m="2059070">fixed</span> <span m="2059409">point,</span> <span
  m="2061860">then</span> <span m="2062020">this</span> <span
  m="2062219">is</span> <span m="2062429">the</span> <span
  m="2062830">exact</span> <span m="2063260">situation,</span> <span
  m="2063600">which</span> <span m="2064260">you</span> <span
  m="2064370">get</span> <span m="2064560">a</span> <span
  m="2064650">limit</span> <span m="2064719">cycle</span> <span
  m="2065010">oscillation.</span></p><p><span m="2067600">OK.</span> <span
  m="2069590">So</span> <span m="2069710">that</span> <span
  m="2069870">means</span> <span m="2070010">that,</span> <span
  m="2070110">what</span> <span m="2070239">we</span> <span
  m="2070370">really</span> <span m="2070570">want</span> <span
  m="2070719">to</span> <span m="2070790">do</span> <span m="2071030">if</span>
  <span m="2071199">we</span> <span m="2071270">want</span> <span
  m="2071420">to</span> <span m="2071469">ask--</span> <span
  m="2072830">let's</span> <span m="2073530">try</span> <span
  m="2073739">to</span> <span m="2073860">back</span> <span
  m="2074100">up</span> <span m="2074199">again.</span> <span
  m="2074690">We</span> <span m="2074790">have</span> <span
  m="2075690">this</span> <span m="2076590">pair</span> <span
  m="2076880">of</span> <span m="2076929">differential</span> <span
  m="2077260">equations.</span> <span m="2077630">We</span> <span
  m="2077719">want</span> <span m="2077820">to</span> <span
  m="2077909">know</span> <span m="2078659">will</span> <span
  m="2078949">this</span> <span m="2079150">negative</span> <span
  m="2079610">auto</span> <span m="2079889">regulatory</span> <span
  m="2080850">loop</span> <span m="2082070">oscillate.</span> <span
  m="2083659">Now</span> <span m="2083860">what</span> <span
  m="2083980">I'm</span> <span m="2084090">telling</span> <span
  m="2084330">you</span> <span m="2084449">is</span> <span
  m="2084560">that</span> <span m="2084889">that</span> <span
  m="2085139">question</span> <span m="2086350">for</span> <span
  m="2086489">two</span> <span m="2086600">dimensions</span> <span
  m="2087060">is</span> <span m="2087190">analogous</span> <span
  m="2087699">to</span> <span m="2087780">the</span> <span
  m="2087860">question</span> <span m="2088159">of</span> <span
  m="2088219">figuring</span> <span m="2088460">out</span> <span
  m="2089100">whether</span> <span m="2089380">this</span> <span
  m="2089760">fixed</span> <span m="2090110">point</span> <span
  m="2091670">is</span> <span m="2091770">stable</span> <span
  m="2092139">or</span> <span m="2092159">not.</span> <span
  m="2093139">If</span> <span m="2093210">it's</span> <span
  m="2093380">stable,</span> <span m="2093820">then</span> <span
  m="2093920">we</span> <span m="2094030">don't</span> <span
  m="2094280">get</span> <span m="2094420">oscillations.</span> <span
  m="2094690">If</span> <span m="2094960">it's</span> <span
  m="2095139">unstable,</span> <span m="2096099">then</span> <span
  m="2096568">we</span> <span m="2097037">do.</span> <span
  m="2100790">Any</span> <span m="2100980">questions</span> <span
  m="2101380">about</span> <span m="2101690">this?</span></p><p><span
  m="2105280">So</span> <span m="2105490">let's</span> <span
  m="2106050">see</span> <span m="2106160">what is</span> <span
  m="2106290">is.</span> <span m="2107660">On</span> <span
  m="2108040">Tuesday,</span> <span m="2108390">what</span> <span
  m="2108500">we</span> <span m="2108590">do</span> <span m="2108660">is</span>
  <span m="2108740">we</span> <span m="2108860">talked</span> <span
  m="2109130">about</span> <span m="2109420">stability</span> <span
  m="2109790">analysis</span> <span m="2110300">for</span> <span
  m="2110420">linear</span> <span m="2111180">systems.</span> <span
  m="2113470">We</span> <span m="2113630">got</span> <span
  m="2114040">what</span> <span m="2114220">I</span> <span
  m="2114280">hope</span> <span m="2114490">is</span> <span
  m="2114580">some</span> <span m="2114840">intuition</span> <span
  m="2115170">about</span> <span m="2115320">that.</span> <span
  m="2116020">And</span> <span m="2116830">of</span> <span
  m="2116940">course,</span> <span m="2117220">what</span> <span
  m="2117330">we</span> <span m="2117420">need</span> <span
  m="2117550">to</span> <span m="2117620">do</span> <span
  m="2117730">here</span> <span m="2118390">is</span> <span
  m="2118570">try</span> <span m="2118740">to</span> <span
  m="2118790">understand</span> <span m="2119190">how</span> <span
  m="2119310">to</span> <span m="2119360">apply</span> <span
  m="2119640">linear</span> <span m="2119950">stability</span> <span
  m="2120320">analysis</span> <span m="2120750">to</span> <span
  m="2120840">this</span> <span m="2121040">non-linear</span> <span
  m="2121690">pair</span> <span m="2121985">of</span> <span
  m="2122280">differential</span> <span
  m="2122640">equations.</span></p><p><span m="2125060">And</span> <span
  m="2125290">to</span> <span m="2125370">do</span> <span
  m="2125470">that,</span> <span m="2127560">what</span> <span
  m="2127890">we</span> <span m="2127970">need</span> <span
  m="2128110">to</span> <span m="2128170">do</span> <span m="2128320">is</span>
  <span m="2128480">we</span> <span m="2128600">need</span> <span
  m="2128740">to</span> <span m="2129870">linearize</span> <span
  m="2130820">around</span> <span m="2132570">that</span> <span
  m="2132760">fixed</span> <span m="2133065">point.</span> <span
  m="2136830">So</span> <span m="2136990">what</span> <span
  m="2137090">we</span> <span m="2137170">have</span> <span
  m="2137360">is</span> <span m="2137430">we</span> <span
  m="2137530">have</span> <span m="2137660">these</span> <span
  m="2137820">two</span> <span m="2137990">functions,</span> <span
  m="2139920">f</span> <span m="2140260">and</span> <span m="2140400">g.</span>
  <span m="2142200">And</span> <span m="2142280">what</span> <span
  m="2142370">we</span> <span m="2142450">want</span> <span
  m="2142620">to</span> <span m="2142670">know</span> <span
  m="2142900">is</span> <span m="2143450">around</span> <span
  m="2143950">that</span> <span m="2144150">fixed</span> <span
  m="2144380">point--</span> <span m="2144650">so</span> <span
  m="2144760">we</span> <span m="2144840">can</span> <span
  m="2144950">define</span> <span m="2146140">some</span> <span
  m="2148050">m</span> <span m="2148335">tilde,</span> <span
  m="2149120">which</span> <span m="2149320">is</span> <span
  m="2149980">m</span> <span m="2150700">minus</span> <span
  m="2151090">this</span> <span m="2151420">m</span> <span m="2151730">0.</span>
  <span m="2152810">And</span> <span m="2153040">some p</span> <span
  m="2153210">tilde,</span> <span m="2153950">which</span> <span
  m="2154000">is</span> <span m="2154770">p</span> <span
  m="2155110">minus</span> <span m="2155550">p</span> <span
  m="2155720">0.</span></p><p><span m="2157620">So</span> <span
  m="2157760">when</span> <span m="2158050">m</span> <span
  m="2158360">tilde</span> <span m="2158640">and</span> <span
  m="2158770">p</span> <span m="2158960">tilde</span> <span m="2159260">are
  around</span> <span m="2159660">0,</span> <span m="2161070">that's</span>
  <span m="2161490">telling</span> <span m="2161860">us</span> <span
  m="2162140">that</span> <span m="2162260">we're</span> <span
  m="2162910">close</span> <span m="2163390">to</span> <span
  m="2163540">that</span> <span m="2165210">fixed</span> <span
  m="2165430">point.</span> <span m="2166490">And</span> <span
  m="2166560">we</span> <span m="2166640">want</span> <span
  m="2166780">to</span> <span m="2166820">know,</span> <span
  m="2167290">if</span> <span m="2167880">we</span> <span
  m="2168360">just</span> <span m="2168620">go a</span> <span
  m="2168730">little</span> <span m="2169050">away</span> <span
  m="2169160">from</span> <span m="2169260">the</span> <span
  m="2169420">fixed</span> <span m="2169550">point, do</span> <span
  m="2170410">we</span> <span m="2170510">get</span> <span
  m="2170680">pushed</span> <span m="2170890">away</span> <span m="2171140">or
  do we</span> <span m="2171290">come</span> <span m="2171450">back</span> <span
  m="2171670">to</span> <span m="2171760">where</span> <span
  m="2171840">we</span> <span m="2171940">started?</span> <span
  m="2175520">Well</span> <span m="2176020">we</span> <span
  m="2176160">know</span> <span m="2176410">that</span> <span m="2178030">m
  tilde</span> <span m="2178600">dot,</span> <span m="2179050">which</span>
  <span m="2179220">is</span> <span m="2179290">actually</span> <span
  m="2179520">equal</span> <span m="2179700">to</span> <span m="2179760">m
  dot,</span> <span m="2180166">as</span> <span m="2180980">well</span> <span
  m="2181380">because</span> <span m="2181675">m</span> <span m="2181970">0
  and</span> <span m="2182090">p 0</span> <span m="2182280">are</span> <span
  m="2182680">the</span> <span m="2182740">same.</span> <span
  m="2183890">p</span> <span m="2184040">tilde</span> <span
  m="2184300">dot.</span></p><p><span m="2186710">We</span> <span
  m="2186730">can</span> <span m="2186810">linearize</span> <span
  m="2187810">by</span> <span m="2189170">taking</span> <span
  m="2189540">derivatives</span> <span m="2190080">around</span> <span
  m="2192360">the</span> <span m="2192410">fixed</span> <span
  m="2192600">points.</span> <span m="2196568">And</span> <span
  m="2197020">in</span> <span m="2197210">particular,</span> <span
  m="2197710">what we</span> <span m="2197810">want</span> <span
  m="2197950">to</span> <span m="2197990">do</span> <span m="2198100">is</span>
  <span m="2198190">we</span> <span m="2198270">want</span> <span
  m="2198430">to</span> <span m="2198480">take</span> <span
  m="2201170">the</span> <span m="2201280">derivative</span> <span
  m="2202200">of</span> <span m="2203820">f</span> <span m="2204520">with</span>
  <span m="2204650">respect</span> <span m="2204980">to</span> <span
  m="2205070">m.</span> <span m="2206400">Evaluate</span> <span m="2206670">at
  the</span> <span m="2206940">fixed</span> <span m="2207140">point.</span>
  <span m="2209340">That</span> <span m="2209660">derivative</span> <span
  m="2210150">is,</span> <span m="2210340">indeed,</span> <span
  m="2210670">just</span> <span m="2210890">minus</span> <span
  m="2211220">1.</span></p><p><span m="2213590">So</span> <span
  m="2213970">in</span> <span m="2214150">general,</span> <span
  m="2214840">in</span> <span m="2215260">these</span> <span
  m="2216140">situations,</span> <span m="2216820">what</span> <span
  m="2216930">we</span> <span m="2217020">have</span> <span
  m="2217210">is</span> <span m="2217750">we</span> <span
  m="2217840">have</span> <span m="2218320">derivatives</span> <span
  m="2219035">m,</span> <span m="2219680">m dot</span> <span
  m="2219840">p</span> <span m="2220230">dot,</span> <span
  m="2221460">and</span> <span m="2221850">we</span> <span
  m="2221970">have</span> <span m="2222540">partial</span> <span
  m="2222970">of</span> <span m="2223220">this</span> <span
  m="2223450">first</span> <span m="2223880">function</span> <span
  m="2224240">f</span> <span m="2224390">with respect</span> <span
  m="2224655">to</span> <span m="2224920">m.</span> <span
  m="2226060">Partial</span> <span m="2226470">of</span> <span
  m="2226640">g.</span> <span m="2227660">Oh,</span> <span
  m="2227740">no.</span> <span m="2227840">So</span> <span
  m="2227960">this</span> <span m="2228130">is</span> <span
  m="2228190">still</span> <span m="2228400">f.</span> <span
  m="2230160">Respect</span> <span m="2232380">to</span> <span
  m="2232450">p.</span> <span m="2233300">Down</span> <span
  m="2233470">here</span> <span m="2233690">is</span> <span
  m="2233980">derivative</span> <span m="2234420">g</span> <span
  m="2234760">with respect</span> <span m="2234910">to</span> <span
  m="2235120">m.</span> <span m="2236470">Derivative</span> <span
  m="2237480">g</span> <span m="2237840">with</span> <span
  m="2237970">respect</span> <span m="2238350">to</span> <span
  m="2238440">p.</span></p><p><span m="2239670">And</span> <span
  m="2239790">this</span> <span m="2239910">is</span> <span
  m="2240030">all</span> <span m="2240400">evaluated</span> <span
  m="2241130">around</span> <span m="2241370">the</span> <span
  m="2241430">fixed</span> <span m="2241630">point</span> <span m="2241830">m
  0</span> <span m="2241970">p</span> <span m="2242420">0.</span> <span
  m="2247900">So</span> <span m="2248020">we</span> <span
  m="2248090">want</span> <span m="2248230">to</span> <span
  m="2248930">take</span> <span m="2249160">these</span> <span
  m="2249290">derivatives</span> <span m="2249790">and</span> <span
  m="2250300">evaluate</span> <span m="2250810">at the</span> <span
  m="2250990">fixed</span> <span m="2251440">point.</span> <span
  m="2254270">And</span> <span m="2254330">if</span> <span m="2254410">we</span>
  <span m="2254470">do</span> <span m="2254570">that,</span> <span
  m="2254850">we</span> <span m="2255070">get</span> <span
  m="2255380">minus</span> <span m="2255710">1</span> <span
  m="2256030">here,</span> <span m="2256530">derivative</span> <span
  m="2256880">m with</span> <span m="2257140">respect</span> <span
  m="2257470">to</span> <span m="2257550">m</span> <span
  m="2258450">times</span> <span m="2258940">m</span> <span
  m="2259170">tilde.</span></p><p><span m="2261070">This</span> <span
  m="2261250">other</span> <span m="2261730">guy,</span> <span
  m="2263080">when</span> <span m="2263190">you</span> <span
  m="2263270">take</span> <span m="2263470">the</span> <span
  m="2263540">derivative,</span> <span m="2266020">you</span> <span
  m="2266680">get</span> <span m="2266830">a</span> <span
  m="2266880">minus</span> <span m="2267540">sign</span> <span
  m="2269880">with</span> <span m="2270010">respect</span> <span
  m="2270270">to</span> <span m="2270340">p.</span> <span m="2270870">So</span>
  <span m="2270990">we</span> <span m="2271060">get a</span> <span
  m="2271190">minus</span> <span m="2271480">sign because</span> <span
  m="2271740">this</span> <span m="2271910">is</span> <span
  m="2272170">in</span> <span m="2272310">the</span> <span
  m="2272400">denominator.</span> <span m="2273800">And</span> <span
  m="2273920">then,</span> <span m="2274520">we</span> <span
  m="2274650">have</span> <span m="2274760">to</span> <span
  m="2274840">take</span> <span m="2275110">derivative</span> <span
  m="2275430">inside.</span> <span m="2276110">So</span> <span
  m="2276210">we</span> <span m="2276310">get</span> <span m="2276820">n</span>
  <span m="2278160">alpha</span> <span m="2278900">p</span> <span
  m="2279960">0</span> <span m="2280550">to</span> <span m="2280630">the</span>
  <span m="2280750">n</span> <span m="2280940">minus</span> <span
  m="2281340">1.</span> <span m="2282650">And</span> <span
  m="2282780">down,</span> <span m="2283160">we</span> <span
  m="2283240">get</span> <span m="2283350">a</span> <span m="2283410">1</span>
  <span m="2284320">plus</span> <span m="2284810">p</span> <span
  m="2285040">0</span> <span m="2287030">squared.</span> <span
  m="2288530">So</span> <span m="2288670">we</span> <span
  m="2288830">took</span> <span m="2288990">the</span> <span
  m="2289080">derivative</span> <span m="2290220">of</span> <span
  m="2290380">this</span> <span m="2290570">term</span> <span
  m="2290970">with</span> <span m="2291090">respect</span> <span
  m="2291400">to</span> <span m="2291460">p.</span> <span m="2292190">And
  we</span> <span m="2292380">evaluated</span> <span m="2292920">at</span> <span
  m="2293080">the fixed</span> <span m="2293420">point</span> <span
  m="2293690">p</span> <span m="2293840">0.</span> <span m="2296214">Did</span>
  <span m="2297210">I</span> <span m="2297290">do</span> <span
  m="2297400">that</span> <span m="2297850">right?</span></p><p><span
  m="2298160">But we</span> <span m="2298360">still</span> <span
  m="2298610">have</span> <span m="2298760">to add a</span> <span
  m="2298840">p</span> <span m="2299070">tilde</span> <span
  m="2300820">because</span> <span m="2301070">this</span> <span
  m="2301230">is</span> <span m="2301770">saying</span> <span
  m="2302380">how</span> <span m="2302600">sensitive</span> <span
  m="2303100">is</span> <span m="2303210">the</span> <span
  m="2303290">function</span> <span m="2303680">to</span> <span
  m="2303800">changes</span> <span m="2304280">in</span> <span
  m="2304420">where</span> <span m="2304590">you</span> <span
  m="2304740">are</span> <span m="2305020">times</span> <span
  m="2305410">how</span> <span m="2305560">far</span> <span
  m="2305800">you've</span> <span m="2305970">gone</span> <span
  m="2306120">away</span> <span m="2306320">from</span> <span
  m="2306540">the</span> <span m="2306890">fixed</span> <span
  m="2307350">point.</span> <span m="2308270">And</span> <span
  m="2308430">then,</span> <span m="2309010">again,</span> <span
  m="2309310">over</span> <span m="2309500">here,</span> <span
  m="2310340">we</span> <span m="2310430">take</span> <span
  m="2310590">the</span> <span m="2310660">derivatives</span> <span
  m="2310990">down</span> <span m="2311170">below.</span> <span
  m="2311510">So</span> <span m="2312320">derivative</span> <span
  m="2312660">g</span> <span m="2313050">with</span> <span
  m="2313180">respect</span> <span m="2313640">to</span> <span
  m="2313790">m.</span> <span m="2314970">That</span> <span
  m="2315130">gives</span> <span m="2315320">us</span> <span
  m="2315580">a</span> <span m="2316190">beta</span> <span m="2318760">m</span>
  <span m="2319240">tilde.</span> <span m="2320400">And</span> <span
  m="2320550">then,</span> <span m="2320890">we</span> <span
  m="2321040">have</span> <span m="2321160">a</span> <span
  m="2321230">minus</span> <span m="2321680">beta</span> <span
  m="2325110">p</span> <span m="2325270">tilde.</span></p><p><span
  m="2328535">All right,</span> <span m="2328980">so</span> <span
  m="2329090">this</span> <span m="2329710">is</span> <span
  m="2329860">just</span> <span m="2330500">an</span> <span
  m="2330600">example</span> <span m="2331380">of</span> <span
  m="2331900">linearizing</span> <span m="2332530">those</span> <span
  m="2333210">equations</span> <span m="2334210">around</span> <span
  m="2334400">that</span> <span m="2334650">fixed</span> <span
  m="2335148">point.</span> <span m="2339360">So</span> <span
  m="2340900">ultimately,</span> <span m="2341260">what</span> <span
  m="2341370">we</span> <span m="2341490">care</span> <span
  m="2341630">about</span> <span m="2341770">is</span> <span
  m="2341850">really</span> <span m="2342050">this</span> <span
  m="2343450">matrix</span> <span m="2344120">that's</span> <span
  m="2344200">specifying</span> <span m="2346530">deviations</span> <span
  m="2347290">around</span> <span m="2347580">the</span> <span
  m="2347650">equilibrium.</span> <span m="2348130">Right?</span> <span
  m="2348800">So</span> <span m="2348960">it's</span> <span
  m="2349220">useful</span> <span m="2349520">to</span> <span
  m="2349580">just</span> <span m="2350800">write</span> <span
  m="2351070">it</span> <span m="2351170">in</span> <span
  m="2351290">matrix</span> <span m="2351550">format</span> <span
  m="2351860">because</span> <span m="2352100">we</span> <span
  m="2352890">get</span> <span m="2353020">rid</span> <span
  m="2353160">of</span> <span m="2353250">some</span> <span
  m="2353370">of</span> <span m="2353410">the</span> <span
  m="2353480">M's</span> <span m="2353730">and</span> <span
  m="2353840">P's.</span></p><p><span m="2360980">Indeed,</span> <span
  m="2361500">so</span> <span m="2361650">this</span> <span
  m="2361830">matrix</span> <span m="2362390">that</span> <span
  m="2362490">we</span> <span m="2362820">either</span> <span
  m="2363070">call</span> <span m="2363300">A</span> <span m="2363600">or</span>
  <span m="2363680">the</span> <span m="2363790">Jacobean</span> <span
  m="2364580">depending</span> <span m="2364950">on--</span> <span
  m="2367680">so</span> <span m="2367980">what</span> <span
  m="2368310">we</span> <span m="2368410">have</span> <span
  m="2368700">is</span> <span m="2370240">a</span> <span
  m="2370350">minus</span> <span m="2370720">1.</span> <span m="2375950">And
  we're going to</span> <span m="2376010">call</span> <span
  m="2376190">this</span> <span m="2376380">thing</span> <span
  m="2379970">x</span> <span m="2381000">because</span> <span
  m="2381140">it's</span> <span m="2381690">going</span> <span
  m="2381800">to</span> <span m="2381870">pop</span> <span m="2382130">up</span>
  <span m="2382340">a</span> <span m="2382390">lot</span> <span m="2384560">is
  this</span> <span m="2384710">minus</span> <span m="2385390">n</span> <span
  m="2386340">alpha</span> <span m="2386670">p</span> <span
  m="2387000">0.</span> <span m="2394120">So</span> <span
  m="2394250">it's</span> <span m="2394670">an</span> <span m="2394900">x</span>
  <span m="2399540">beta</span> <span m="2399795">and</span> <span
  m="2400050">minus beta.</span></p><p><span m="2402330">And</span> <span
  m="2402500">then,</span> <span m="2402590">we</span> <span
  m="2402680">have</span> <span m="2402790">our</span> <span
  m="2402890">simple</span> <span m="2403210">rules</span> <span
  m="2403550">for</span> <span m="2403650">determining</span> <span
  m="2404520">whether</span> <span m="2405090">this</span> <span
  m="2405330">thing</span> <span m="2405510">is</span> <span
  m="2405660">going</span> <span m="2405770">to</span> <span
  m="2405820">be</span> <span m="2405920">stable</span> <span
  m="2406330">or</span> <span m="2406370">not.</span> <span
  m="2407210">It</span> <span m="2407240">depends</span> <span
  m="2407640">on</span> <span m="2407720">the</span> <span
  m="2407810">trace.</span> <span m="2408240">And</span> <span
  m="2408530">it</span> <span m="2408610">depends</span> <span
  m="2408900">on</span> <span m="2408960">the</span> <span
  m="2409030">determinant.</span> <span m="2410360">So</span> <span
  m="2410450">the</span> <span m="2410580">trace</span> <span
  m="2412290">should</span> <span m="2412450">be</span> <span
  m="2412540">negative.</span> <span m="2412940">And</span> <span m="2413100">is
  this</span> <span m="2413300">trace</span> <span m="2413590">negative?</span>
  <span m="2417180">Yes.</span> <span m="2417980">Yes</span> <span
  m="2418830">because</span> <span m="2419020">beta--</span> <span
  m="2419880">does</span> <span m="2420050">anybody</span> <span
  m="2420340">remember</span> <span m="2420510">what</span> <span
  m="2420620">beta</span> <span m="2420700">was</span> <span
  m="2421120">again.</span></p><p><span m="2423160">AUDIENCE:</span> <span
  m="2423630">Ratio of lifetimes.</span></p><p><span
  m="2424035">PROFESSOR:</span> <span m="2424320">Ratio</span> <span
  m="2424600">of</span> <span m="2424670">lifetimes.</span> <span
  m="2425150">Lifetimes</span> <span m="2425310">are</span> <span
  m="2425620">positive.</span> <span m="2426090">So</span> <span
  m="2426170">beta</span> <span m="2426390">is</span> <span
  m="2426490">positive.</span> <span m="2427100">All</span> <span
  m="2427320">right,</span> <span m="2427470">so</span> <span
  m="2427550">the</span> <span m="2427630">trace</span> <span
  m="2433070">is</span> <span m="2433350">equal</span> <span
  m="2433530">to</span> <span m="2433810">minus</span> <span
  m="2434140">1</span> <span m="2434360">minus</span> <span
  m="2434630">beta.</span> <span m="2435210">This</span> <span
  m="2435370">is,</span> <span m="2435570">indeed,</span> <span
  m="2435890">less</span> <span m="2436100">than</span> <span
  m="2436220">0.</span> <span m="2437080">So</span> <span
  m="2437190">this</span> <span m="2437380">is</span> <span
  m="2437580">consistent</span> <span m="2438420">for</span> <span
  m="2438880">stability.</span> <span m="2439410">Does</span> <span
  m="2439560">prove</span> <span m="2439920">that</span> <span
  m="2440000">it's</span> <span m="2440130">stable?</span> <span
  m="2441760">No.</span> <span m="2443980">But</span> <span
  m="2444080">we</span> <span m="2444170">also</span> <span
  m="2444380">need</span> <span m="2444580">to</span> <span
  m="2444670">know</span> <span m="2444980">about</span> <span
  m="2445350">the</span> <span m="2445490">determinant</span> <span
  m="2446020">of</span> <span m="2446120">a,</span> <span
  m="2449070">which</span> <span m="2449460">is</span> <span
  m="2449690">going</span> <span m="2449810">to</span> <span
  m="2449870">be</span> <span m="2451230">beta,</span> <span
  m="2452970">this</span> <span m="2453160">times</span> <span
  m="2453390">this,</span> <span m="2453960">minus</span> <span
  m="2454520">this</span> <span m="2454720">times</span> <span
  m="2454960">this.</span></p><p><span m="2455710">So that's</span> <span
  m="2459040">minus.</span> <span m="2459910">And</span> <span
  m="2460060">this</span> <span m="2460220">is</span> <span m="2460290">a</span>
  <span m="2460370">beta</span> <span m="2460950">times</span> <span
  m="2461800">what</span> <span m="2461950">x</span> <span
  m="2462220">was.</span> <span m="2462530">So this</span> <span
  m="2462740">gives</span> <span m="2462950">us--</span> <span
  m="2463480">we</span> <span m="2463580">can</span> <span
  m="2463670">write</span> <span m="2463820">this</span> <span
  m="2464160">all</span> <span m="2464380">down</span> <span
  m="2464710">just</span> <span m="2464870">so</span> <span
  m="2464980">that</span> <span m="2465940">it's</span> <span
  m="2466130">clear</span> <span m="2466750">that</span> <span
  m="2466890">it</span> <span m="2466940">has</span> <span m="2467140">to</span>
  <span m="2467220">be</span> <span m="2467690">positive.</span> <span
  m="2472900">So</span> <span m="2473040">beta</span> <span
  m="2473360">is</span> <span m="2473470">positive.</span> <span
  m="2474480">Positive,</span> <span m="2475080">positive,</span> <span
  m="2475560">positive,</span> <span m="2475980">positive,</span> <span
  m="2476390">positive.</span> <span m="2476830">Everything's</span> <span
  m="2477170">positive.</span> <span m="2479240">So</span> <span
  m="2479370">this</span> <span m="2479520">thing</span> <span
  m="2479670">has</span> <span m="2479850">to</span> <span m="2479910">be</span>
  <span m="2480970">greater</span> <span m="2481240">than</span> <span
  m="2481738">0.</span></p><p><span m="2483730">So</span> <span
  m="2483880">what</span> <span m="2483980">does</span> <span
  m="2484040">this</span> <span m="2484170">mean</span> <span
  m="2484360">about</span> <span m="2484510">the</span> <span
  m="2484600">stability</span> <span m="2485020">of</span> <span
  m="2485080">Ethics</span> <span m="2485340">Point?</span> <span
  m="2487810">Stable.</span> <span m="2490960">Fixed</span> <span
  m="2491320">point</span> <span m="2491580">stable.</span> <span
  m="2491970">And</span> <span m="2492030">what</span> <span
  m="2492170">does</span> <span m="2492240">that</span> <span m="2492310">mean
  about</span> <span m="2492570">oscillations?</span> <span
  m="2493856">It</span> <span m="2494830">means</span> <span
  m="2495020">there</span> <span m="2495110">are</span> <span
  m="2495140">no</span> <span m="2495370">oscillations.</span> <span
  m="2496020">Fixed point</span> <span m="2496370">stable.</span> <span
  m="2499580">Therefore,</span> <span m="2500150">no</span> <span
  m="2500420">oscillations.</span></p><p><span m="2507860">So what</span> <span
  m="2508010">this</span> <span m="2508180">is</span> <span
  m="2508260">saying</span> <span m="2508550">is</span> <span
  m="2508660">that</span> <span m="2510160">the</span> <span
  m="2510320">original,</span> <span m="2510880">kind</span> <span
  m="2511000">of</span> <span m="2511060">simple,</span> <span
  m="2511950">equation</span> <span m="2512250">we</span> <span
  m="2512350">wrote</span> <span m="2512500">down</span> <span
  m="2512870">for</span> <span m="2513050">negative</span> <span
  m="2513520">auto</span> <span m="2513740">regulation,</span> <span
  m="2514260">that</span> <span m="2514440">thing</span> <span
  m="2515010">was</span> <span m="2515200">not</span> <span
  m="2515390">allowed</span> <span m="2515710">to</span> <span
  m="2515930">oscillate</span> <span m="2516200">mathematically.</span> <span
  m="2518650">But</span> <span m="2519190">that</span> <span
  m="2519330">doesn't</span> <span m="2519580">mean</span> <span
  m="2519770">that,</span> <span m="2519860">if</span> <span
  m="2519930">you</span> <span m="2520020">explicitly</span> <span
  m="2520430">model</span> <span m="2520660">the</span> <span
  m="2520890">mRNA,</span> <span m="2521720">it</span> <span
  m="2521920">could</span> <span m="2522100">go</span> <span
  m="2522220">either</span> <span m="2522360">way.</span> <span
  m="2522570">But</span> <span m="2522750">still,</span> <span
  m="2523420">that's</span> <span m="2523650">insufficient</span> <span
  m="2524160">to</span> <span m="2524240">generate</span> <span
  m="2524540">oscillations.</span> <span m="2527040">However,</span> <span
  m="2529540">maybe</span> <span m="2529830">if</span> <span
  m="2529900">you</span> <span m="2529990">included</span> <span
  m="2530380">more</span> <span m="2530640">steps,</span> <span
  m="2531010">maybe</span> <span m="2531270">it</span> <span
  m="2531340">would</span> <span m="2531480">oscillate.</span> <span
  m="2532030">Question?</span></p><p><span m="2532620">AUDIENCE:</span> <span
  m="2533079">So</span> <span m="2533538">just to double check--</span> <span
  m="2533997">when</span> <span m="2534456">you</span> <span
  m="2534609">said,</span> <span m="2534762">no</span> <span
  m="2534915">oscillations,</span> <span m="2535006">you</span> <span
  m="2535098">mean</span> <span m="2535190">stable</span> <span
  m="2535282">oscillations?</span></p><p><span m="2537210">PROFESSOR:</span>
  <span m="2537670">That's</span> <span m="2537890">right,</span> <span
  m="2538080">sorry.</span> <span m="2538700">When</span> <span
  m="2539210">I</span> <span m="2539280">mean</span> <span m="2539420">no</span>
  <span m="2539530">oscillations,</span> <span m="2539930">what</span> <span
  m="2540020">I</span> <span m="2540070">mean</span> <span
  m="2540290">are</span> <span m="2540370">indeed,</span> <span
  m="2541070">no</span> <span m="2541330">limit</span> <span
  m="2541690">cycle</span> <span m="2541990">oscillations.</span></p><p><span
  m="2542760">AUDIENCE:</span> <span m="2543045">This is like</span> <span
  m="2543330">a</span> <span m="2543810">dampened--</span></p><p><span
  m="2545250">PROFESSOR: Yeah.</span> <span m="2546840">Yeah,</span> <span
  m="2547120">so</span> <span m="2547240">we,</span> <span
  m="2547430">actually,</span> <span m="2549970">have</span> <span
  m="2550070">not</span> <span m="2550310">solved</span> <span
  m="2550870">exactly</span> <span m="2551450">what</span> <span
  m="2551890">it</span> <span m="2551940">looks</span> <span
  m="2552090">like.</span> <span m="2552280">And</span> <span
  m="2552480">I've</span> <span m="2553490">drawn</span> <span
  m="2553700">this</span> <span m="2553840">is</span> <span m="2553960">a</span>
  <span m="2554040">pretty</span> <span m="2554340">oscillatory</span> <span
  m="2554595">thing.</span> <span m="2554850">But</span> <span
  m="2554940">it</span> <span m="2555000">might</span> <span
  m="2555290">just</span> <span m="2555500">look</span> <span
  m="2555700">like</span> <span m="2555940">this,</span> <span
  m="2556200">depending</span> <span m="2556520">on</span> <span
  m="2556580">the</span> <span m="2556640">parameters</span> <span
  m="2557250">and</span> <span m="2557350">so</span> <span
  m="2557490">forth.</span> <span m="2558220">And</span> <span
  m="2558430">indeed,</span> <span m="2558810">we</span> <span
  m="2558830">haven't</span> <span m="2558980">even</span> <span
  m="2559400">proven</span> <span m="2559970">that</span> <span
  m="2560050">this</span> <span m="2560290">thing</span> <span
  m="2561070">has</span> <span m="2561510">complex</span> <span
  m="2562460">eigenvalues.</span></p><p><span m="2563770">But</span> <span
  m="2564320">certainly,</span> <span m="2564620">there</span> <span
  m="2564710">are</span> <span m="2564740">no</span> <span
  m="2564890">limit</span> <span m="2565250">cycle</span> <span
  m="2565570">oscillations.</span> <span m="2566190">And</span> <span
  m="2566650">I'd</span> <span m="2566760">say</span> <span
  m="2566840">it's</span> <span m="2566960">really</span> <span
  m="2567150">limit</span> <span m="2567460">cycle</span> <span
  m="2567690">oscillations</span> <span m="2568200">that</span> <span
  m="2568960">people</span> <span m="2569510">find</span> <span
  m="2569750">most</span> <span m="2571050">exciting</span> <span
  m="2574010">as</span> <span m="2574080">because</span> <span
  m="2574200">limit</span> <span m="2574310">cycle</span> <span
  m="2574490">oscillations</span> <span m="2577780">have</span> <span
  m="2578130">a</span> <span m="2578530">characteristic</span> <span
  m="2579090">amplitude.</span> <span m="2580270">So</span> <span
  m="2580480">it</span> <span m="2580550">doesn't</span> <span
  m="2580730">matter</span> <span m="2580880">where</span> <span
  m="2580980">you</span> <span m="2581070">start.</span> <span
  m="2581800">The</span> <span m="2582220">oscillations</span> <span
  m="2582930">go</span> <span m="2583190">to</span> <span
  m="2583290">some</span> <span m="2583610">amplitude.</span></p><p><span
  m="2584320">And</span> <span m="2584480">they</span> <span
  m="2584620">have</span> <span m="2584940">a characteristic</span> <span
  m="2585010">period,</span> <span m="2585890">again,</span> <span
  m="2586190">independent</span> <span m="2587320">of</span> <span
  m="2587560">your</span> <span m="2587710">starting</span> <span
  m="2587970">condition.</span> <span m="2590940">So  a</span> <span
  m="2591120">limit</span> <span m="2591330">cycle</span> <span
  m="2591570">oscillation</span> <span m="2592440">has</span> <span
  m="2593340">a</span> <span m="2593400">feeling</span> <span
  m="2594040">similar</span> <span m="2594350">to</span> <span
  m="2594730">a</span> <span m="2594810">stable</span> <span
  m="2595100">fixed</span> <span m="2595280">point</span> <span m="2595440">in
  the since that</span> <span m="2595630">it</span> <span
  m="2595720">doesn't</span> <span m="2595880">matter</span> <span
  m="2595990">where</span> <span m="2596060">you</span> <span
  m="2596120">start.</span> <span m="2596460">You always</span> <span
  m="2596700">end</span> <span m="2596810">up</span> <span
  m="2596930">there.</span> <span m="2597410">So</span> <span
  m="2597500">they're</span> <span m="2597820">the</span> <span
  m="2598030">ones</span> <span m="2598300">that</span> <span
  m="2598390">are</span> <span m="2598460">really</span> <span
  m="2598980">what</span> <span m="2599080">you would</span> <span
  m="2599180">call</span> <span m="2601020">mathematically</span> <span
  m="2601520">nice</span> <span m="2601840">oscillations.</span></p><p><span
  m="2606530">And</span> <span m="2606920">when</span> <span
  m="2607000">I</span> <span m="2607040">say</span> <span
  m="2607310">this,</span> <span m="2607570">I'm,</span> <span
  m="2608320">in</span> <span m="2608420">particular,</span> <span
  m="2608950">comparing</span> <span m="2609430">them</span> <span
  m="2609600">to</span> <span m="2610210">neutrally</span> <span
  m="2610730">stable</span> <span m="2611380">orbits.</span> <span
  m="2612660">So</span> <span m="2612770">there</span> <span
  m="2612960">are</span> <span m="2613270">cases</span> <span
  m="2615080">in</span> <span m="2616180">which,</span> <span
  m="2616910">in</span> <span m="2617080">two</span> <span
  m="2618530">variables,</span> <span m="2619060">you</span> <span
  m="2619420">have</span> <span m="2619560">a</span> <span
  m="2619620">fixed</span> <span m="2619850">point</span> <span
  m="2620020">here.</span> <span m="2620640">And</span> <span
  m="2621640">at</span> <span m="2621750">least</span> <span
  m="2622110">in</span> <span m="2622560">the</span> <span
  m="2623010">case</span> <span m="2624130">of</span> <span
  m="2624340">linear</span> <span m="2624730">stability,</span> <span
  m="2625990">if</span> <span m="2626220">you</span> <span
  m="2626610">have</span> <span m="2627330">purely</span> <span
  m="2627720">imaginary</span> <span m="2628260">eigenvalues,</span> <span
  m="2629220">what</span> <span m="2629400">that</span> <span
  m="2629550">means</span> <span m="2629830">is</span> <span
  m="2629970">that</span> <span m="2631770">you</span> <span
  m="2632280">have</span> <span m="2632530">orbits</span> <span
  m="2633050">that</span> <span m="2633450">go</span> <span
  m="2633690">around</span> <span m="2634070">your</span> <span
  m="2634460">fixed</span> <span m="2634700">point.</span></p><p><span
  m="2637990">And</span> <span m="2638130">we'll</span> <span
  m="2638410">see</span> <span m="2638580">some</span> <span
  m="2638760">cases</span> <span m="2639120">that</span> <span
  m="2639180">look</span> <span m="2639360">like</span> <span
  m="2639490">this</span> <span m="2639780">later</span> <span
  m="2640020">on.</span> <span m="2641570">And</span> <span
  m="2641770">this</span> <span m="2642020">is,</span> <span
  m="2642140">indeed,</span> <span m="2642780">the</span> <span
  m="2642890">nature</span> <span m="2643350">of</span> <span
  m="2643430">the</span> <span m="2643520">oscillations</span> <span
  m="2644190">in</span> <span m="2644660">the</span> <span
  m="2645105">Lotka-Volterra</span> <span m="2645380">model</span> <span
  m="2645950">for</span> <span m="2646130">predator</span> <span
  m="2646490">prey</span> <span m="2646710">oscillations.</span> <span
  m="2647610">They're</span> <span m="2647730">not</span> <span
  m="2647980">actually</span> <span m="2648210">limit</span> <span
  m="2648560">cycle</span> <span m="2648740">oscillations.</span> <span
  m="2649340">They're</span> <span m="2649920">of</span> <span
  m="2650100">this</span> <span m="2650320">kind</span> <span
  m="2650670">that</span> <span m="2650980">are</span> <span
  m="2651100">considered</span> <span m="2652340">less</span> <span
  m="2652790">interesting</span> <span m="2653190">because</span> <span
  m="2653500">they're</span> <span m="2654010">less</span> <span
  m="2655180">robust.</span></p><p><span m="2656050">Small</span> <span
  m="2656470">changes</span> <span m="2657030">in</span> <span
  m="2657140">the</span> <span m="2657210">model</span> <span
  m="2657660">can</span> <span m="2658040">cause</span> <span
  m="2658390">these</span> <span m="2658600">things</span> <span
  m="2658900">to</span> <span m="2658970">either</span> <span
  m="2660780">go</span> <span m="2660950">away,</span> <span
  m="2661350">to</span> <span m="2661510">turn</span> <span
  m="2661730">into</span> <span m="2664840">this</span> <span
  m="2664950">kind</span> <span m="2665070">of</span> <span
  m="2665130">stable</span> <span m="2665400">spiral,</span> <span
  m="2665870">or</span> <span m="2666410">to</span> <span
  m="2666540">turn</span> <span m="2666710">into</span> <span
  m="2666850">limit</span> <span m="2667090">cycle</span> <span
  m="2667360">oscillations.</span> <span m="2668530">So</span> <span
  m="2668550">we'll</span> <span m="2668860">talk</span> <span
  m="2669200">about</span> <span m="2669450">this</span> <span
  m="2669690">more</span> <span m="2670460">in</span> <span m="2670570">a</span>
  <span m="2670620">couple</span> <span m="2670810">months.</span> <span
  m="2672950">These</span> <span m="2673110">are</span> <span
  m="2673180">neutrally</span> <span m="2673670">stable</span> <span
  m="2673970">orbits.</span></p><p><span m="2688810">OK,</span> <span
  m="2689970">but</span> <span m="2690220">what</span> <span
  m="2691140">I</span> <span m="2691170">wanted</span> <span
  m="2691360">to</span> <span m="2691400">highlight,</span> <span
  m="2691710">though, is</span> <span m="2691940">that</span> <span
  m="2692930">just</span> <span m="2693260">because</span> <span
  m="2695460">the</span> <span m="2695620">original,</span> <span
  m="2696180">simple,</span> <span m="2696580">protein</span> <span
  m="2696880">only</span> <span m="2697060">model</span> <span
  m="2697410">didn't</span> <span m="2697530">oscillate</span> <span
  m="2697940">and</span> <span m="2698380">this</span> <span
  m="2699020">protein</span> <span m="2699440">mRNA</span> <span
  m="2699820">together</span> <span m="2700140">doesn't</span> <span
  m="2700270">oscillate</span> <span m="2700560">does</span> <span
  m="2700700">not</span> <span m="2701030">mean</span> <span
  m="2701340">that</span> <span m="2701440">it's</span> <span
  m="2701540">impossible</span> <span m="2702230">to</span> <span
  m="2702310">get</span> <span m="2702510">oscillations</span> <span
  m="2703740">using</span> <span m="2704040">negative</span> <span
  m="2704360">auto</span> <span m="2704530">regulation,</span> <span
  m="2705610">either</span> <span m="2706070">experimentally</span> <span
  m="2707060">or</span> <span m="2708990">computationally.</span> <span
  m="2710080">And</span> <span m="2710770">the</span> <span
  m="2710830">question</span> <span m="2711140">is,</span> <span
  m="2711760">what</span> <span m="2711820">might</span> <span
  m="2711970">you</span> <span m="2712050">need</span> <span
  m="2712230">to</span> <span m="2712300">do</span> <span m="2712680">to</span>
  <span m="2712800">get</span> <span
  m="2713090">oscillations?</span></p><p><span m="2722120">AUDIENCE:</span>
  <span m="2722610">So in the</span> <span m="2723100">paper they talk</span>
  <span m="2723590">about</span> <span m="2724080">leakage</span> <span
  m="2724570">in the</span> <span m="2725060">negative--</span></p><p><span
  m="2730446">PROFESSOR:</span> <span m="2730840">OK,</span> <span
  m="2731160">right.</span> <span m="2731610">So</span> <span
  m="2732060">in</span> <span m="2732240">the</span> <span
  m="2732320">paper,</span> <span m="2732610">they</span> <span
  m="2732710">talk</span> <span m="2732880">about</span> <span
  m="2733050">various</span> <span m="2733330">things,</span> <span
  m="2733590">including</span> <span m="2733980">things</span> <span
  m="2734160">such</span> <span m="2734330">as</span> <span
  m="2734460">leakage.</span> <span m="2734930">It</span> <span
  m="2734970">terms</span> <span m="2735150">out</span> <span
  m="2735250">that</span> <span m="2735370">leakage</span> <span m="2736020">in
  an</span> <span m="2736230">expression</span> <span m="2737390">only</span>
  <span m="2738060">inhibits</span> <span m="2738570">oscillations</span> <span
  m="2739180">though.</span> <span m="2739800">So</span> <span
  m="2740180">in</span> <span m="2740310">some</span> <span
  m="2740520">sense,</span> <span m="2742440">if</span> <span
  m="2742560">you're</span> <span m="2742620">trying to get</span> <span
  m="2742850">oscillations,</span> <span m="2743360">leakage is</span> <span
  m="2743770">a</span> <span m="2743830">problem,</span> <span
  m="2744510">actually.</span> <span m="2745880">And</span> <span
  m="2745980">that's</span> <span m="2746140">why</span> <span
  m="2746890">they</span> <span m="2747000">use</span> <span
  m="2747180">this</span> <span m="2747350">especially</span> <span
  m="2747760">tight--</span> <span m="2748090">well</span> <span
  m="2748420">we're</span> <span m="2748700">going</span> <span
  m="2748780">to</span> <span m="2748820">talk</span> <span m="2749000">about
  that</span> <span m="2749230">in</span> <span m="2749330">a</span> <span
  m="2749430">few</span> <span m="2749530">minutes.</span></p><p><span
  m="2750030">They</span> <span m="2750150">use an</span> <span
  m="2750340">especially</span> <span m="2750700">tight</span> <span
  m="2750960">version of these</span> <span m="2751420">promoters</span> <span
  m="2751940">to</span> <span m="2753160">have</span> <span
  m="2753370">low</span> <span m="2753640">rates</span> <span
  m="2753920">of</span> <span m="2754430">leakage</span> <span m="2754880">in
  a</span> <span m="2755210">synthesis.</span> <span m="2755920">But</span>
  <span m="2756090">what</span> <span m="2756300">might</span> <span
  m="2756460">you</span> <span m="2756550">need</span> <span
  m="2756770">in</span> <span m="2756870">order</span> <span
  m="2757060">to</span> <span m="2757120">get</span> <span
  m="2757380">oscillations</span> <span m="2758410">in</span> <span
  m="2758630">negative</span> <span m="2758900">autoregulation?</span> <span
  m="2759740">Did you have--</span> <span m="2759940">have</span> <span
  m="2761500">delay.</span> <span m="2762000">Yes</span> <span
  m="2762330">indeed.</span> <span m="2762740">And</span> <span
  m="2762830">that's</span> <span m="2762990">something that</span> <span
  m="2763180">they</span> <span m="2763330">mentioned</span> <span
  m="2763670">in</span> <span m="2764860">the</span> <span
  m="2765070">Elowitz</span> <span m="2765210">paper</span> <span
  m="2765480">is</span> <span m="2766300">if</span> <span m="2766400">you</span>
  <span m="2766520">add</span> <span m="2766810">explicit</span> <span
  m="2767470">delay.</span></p><p><span m="2769150">So</span> <span
  m="2769300">for</span> <span m="2769430">example,</span> <span
  m="2770370">if</span> <span m="2770530">instead</span> <span
  m="2771070">of</span> <span m="2771320">having</span> <span
  m="2773540">the</span> <span m="2773710">repression</span> <span
  m="2774380">depend</span> <span m="2774910">on--OK,</span> <span m="2775260">I
  already</span> <span m="2775720">erased everything.</span> <span
  m="2776260">But</span> <span m="2777450">instead</span> <span
  m="2777840">of</span> <span m="2777930">having</span> <span
  m="2780790">the</span> <span m="2780920">protein,</span> <span
  m="2781480">for</span> <span m="2781600">example,</span> <span
  m="2782200">being</span> <span m="2782360">a</span> <span
  m="2782400">function</span> <span m="2782740">of</span> <span
  m="2782840">the</span> <span m="2783050">mRNA</span> <span
  m="2783310">now,</span> <span m="2783650">maybe</span> <span
  m="2783940">if</span> <span m="2784020">you</span> <span
  m="2784150">said,</span> <span m="2784330">oh,</span> <span
  m="2784510">it's</span> <span m="2784670">a</span> <span m="2784800">function
  of</span> <span m="2784890">the</span> <span m="2785100">mRNA</span> <span
  m="2786440">five</span> <span m="2786720">minutes</span> <span
  m="2786990">ago.</span> <span m="2787190">And</span> <span
  m="2787270">that's</span> <span m="2787400">just</span> <span
  m="2787490">because</span> <span m="2787640">maybe</span> <span
  m="2788020">it</span> <span m="2788120">takes</span> <span
  m="2788360">time</span> <span m="2788750">to</span> <span
  m="2788850">make</span> <span m="2789120">the</span> <span
  m="2789220">protein.</span> <span m="2789860">Or it</span> <span
  m="2789980">takes</span> <span m="2790180">time</span> <span
  m="2790360">for</span> <span m="2790440">this</span> <span
  m="2790670">or</span> <span m="2790700">that.</span> <span
  m="2791180">You</span> <span m="2791290">could</span> <span
  m="2791400">introduce</span> <span m="2791780">an</span> <span
  m="2791880">explicit</span> <span m="2792500">delay</span> <span
  m="2792810">like</span> <span m="2793000">that.</span></p><p><span
  m="2794560">Or</span> <span m="2795030">you</span> <span
  m="2795150">could</span> <span m="2795370">even,</span> <span
  m="2796180">instead,</span> <span m="2797010">have</span> <span
  m="2797180">a</span> <span m="2797230">model</span> <span
  m="2797470">where</span> <span m="2797580">you</span> <span
  m="2797640">just</span> <span m="2797860">have</span> <span
  m="2798120">more</span> <span m="2798570">steps.</span> <span
  m="2800610">So</span> <span m="2801190">what</span> <span
  m="2801400">you</span> <span m="2801490">do</span> <span m="2801670">is</span>
  <span m="2801850">you say, oh,</span> <span m="2802080">well</span> <span
  m="2802330">yeah,</span> <span m="2802490">sure.</span> <span
  m="2802730">What</span> <span m="2802830">happens</span> <span
  m="2803140">is</span> <span m="2803260">that,</span> <span
  m="2803740">first,</span> <span m="2804170">the</span> <span
  m="2804450">mRNA</span> <span m="2804730">is</span> <span
  m="2804940">made.</span> <span m="2805340">But</span> <span
  m="2805440">then,</span> <span m="2805600">after</span> <span
  m="2805780">the</span> <span m="2805990">mRNA</span> <span
  m="2806110">is</span> <span m="2806250">made,</span> <span
  m="2806540">then</span> <span m="2806660">you</span> <span
  m="2806740">have</span> <span m="2806880">to</span> <span
  m="2806960">make</span> <span m="2807560">the</span> <span
  m="2809110">peptide</span> <span m="2809540">chain.</span> <span
  m="2809960">Then,</span> <span m="2810130">the</span> <span
  m="2810700">that</span> <span m="2811580">peptide</span> <span
  m="2812060">chain has</span> <span m="2812230">to</span> <span
  m="2812310">fold.</span> <span m="2813010">And then,</span> <span
  m="2813100">maybe,</span> <span m="2813360">those</span> <span
  m="2813570">proteins</span> <span m="2813990">have</span> <span
  m="2814140">to</span> <span m="2814570">multimerize.</span></p><p><span
  m="2816050">Indeed,</span> <span m="2816470">if</span> <span
  m="2816490">you</span> <span m="2817340">right</span> <span
  m="2817540">down</span> <span m="2817670">such</span> <span
  m="2817860">a</span> <span m="2817910">model</span> <span
  m="2818740">then,</span> <span m="2819060">for</span> <span
  m="2819350">some</span> <span m="2819540">reasonable</span> <span
  m="2819870">parameters,</span> <span m="2820310">you</span> <span
  m="2820420">can</span> <span m="2820780">get</span> <span
  m="2820920">oscillations</span> <span m="2821900">just</span> <span
  m="2822190">with</span> <span m="2822280">negative</span> <span
  m="2822610">auto</span> <span m="2822760">regulation.</span> <span
  m="2823630">And</span> <span m="2823760">indeed,</span> <span
  m="2824250">I</span> <span m="2824370">would</span> <span
  m="2824500">say</span> <span m="2824630">that</span> <span
  m="2824960">over</span> <span m="2825160">the</span> <span
  m="2825260">last</span> <span m="2825620">10</span> <span
  m="2825890">years,</span> <span m="2826250">probably,</span> <span
  m="2826980">the</span> <span m="2828010">reigning</span> <span
  m="2828380">king</span> <span m="2828870">of</span> <span
  m="2829080">oscillations</span> <span m="2829890">in</span> <span
  m="2830450">the</span> <span m="2830580">field</span> <span
  m="2830820">of</span> <span m="2831180">system</span> <span
  m="2831600">synthetic</span> <span m="2831920">biology</span> <span
  m="2832260">is</span> <span m="2832420">Jeff</span> <span
  m="2832640">Hasty</span> <span m="2833470">at</span> <span
  m="2833610">San</span> <span m="2833820">Diego.</span> <span m="2834230">And
  he's</span> <span m="2834350">written</span> <span m="2834930">a</span> <span
  m="2834960">whole</span> <span m="2835130">train</span> <span
  m="2835460">of</span> <span m="2835550">beautiful</span> <span
  m="2835900">papers</span> <span m="2836870">exploring</span> <span
  m="2837880">how</span> <span m="2839290">you</span> <span
  m="2839420">can</span> <span m="2839550">make</span> <span
  m="2839870">these</span> <span m="2840130">oscillators</span> <span
  m="2840730">in</span> <span m="2841590">simple</span> <span
  m="2841900">G</span> <span m="2842030">network.</span></p><p><span
  m="2842490">So</span> <span m="2842640">he's</span> <span
  m="2842920">been</span> <span m="2843030">focusing</span> <span
  m="2844040">in</span> <span m="2844170">E. coli.</span> <span
  m="2844510">There's</span> <span m="2844660">also</span> <span
  m="2844830">been</span> <span m="2844930">great</span> <span
  m="2845170">work</span> <span m="2845440">in</span> <span
  m="2845780">higher</span> <span m="2846050">organisms</span> <span
  m="2846420">in</span> <span m="2846490">this</span> <span
  m="2846620">regard.</span> <span m="2847320">But</span> <span
  m="2848420">let's</span> <span m="2848570">say,</span> <span
  m="2849180">Hasty's</span> <span m="2849520">work</span> <span
  m="2849990">stands</span> <span m="2850320">out</span> <span
  m="2850450">in</span> <span m="2850510">terms</span> <span
  m="2850720">of</span> <span m="2851090">really</span> <span
  m="2851490">being</span> <span m="2851660">able</span> <span
  m="2851820">to</span> <span m="2851860">take</span> <span
  m="2852080">these</span> <span m="2852220">models</span> <span
  m="2852770">and</span> <span m="2852840">then</span> <span
  m="2852980">implement</span> <span m="2853410">them</span> <span
  m="2853630">in</span> <span m="2854490">cells</span> <span
  m="2854890">and,</span> <span m="2855000">kind</span> <span
  m="2855140">of,</span> <span m="2855320">going</span> <span
  m="2855490">back</span> <span m="2855640">and</span> <span
  m="2855700">forth.</span> <span m="2855890">And</span> <span
  m="2855950">he's</span> <span m="2856100">shown</span> <span
  m="2856420">that</span> <span m="2857110">you</span> <span
  m="2857200">can</span> <span m="2857450">generate</span> <span
  m="2857740">oscillations</span> <span m="2858930">just</span> <span
  m="2859180">using</span> <span m="2859400">negative</span> <span
  m="2859670">auto</span> <span m="2859800">regulation</span> <span
  m="2860390">if</span> <span m="2860570">you</span> <span
  m="2860730">have</span> <span m="2861720">enough</span> <span
  m="2862400">delays</span> <span m="2862870">in</span> <span
  m="2862990">that</span> <span m="2863160">negative</span> <span
  m="2863920">feedback</span> <span m="2864665">loop.</span></p><p><span
  m="2868510">Are</span> <span m="2868580">there</span> <span
  m="2868670">any</span> <span m="2868770">questions</span> <span
  m="2869100">about</span> <span m="2870040">where</span> <span
  m="2870300">we</span> <span m="2870440">are</span> <span
  m="2870870">right</span> <span m="2871070">now?</span> <span
  m="2872420">I</span> <span m="2872530">know</span> <span
  m="2872660">that</span> <span m="2872770">we're</span> <span
  m="2872900">supposed</span> <span m="2873100">to be</span> <span
  m="2873170">talking</span> <span m="2873320">about</span> <span
  m="2873430">the</span> <span m="2873490">repressilator.</span> <span
  m="2874100">But</span> <span m="2874630">we</span> <span
  m="2874790">first</span> <span m="2875070">have</span> <span
  m="2875180">to</span> <span m="2875920">make</span> <span
  m="2876050">sure</span> <span m="2876170">we</span> <span
  m="2876230">understand</span> <span m="2876690">the</span> <span
  m="2876850">negative auto</span> <span m="2877316">regulation.</span> <span
  m="2880580">So</span> <span m="2882380">everything that</span> <span
  m="2882610">we've</span> <span m="2883290">said,</span> <span
  m="2883800">so</span> <span m="2883960">far,</span> <span
  m="2884390">in</span> <span m="2884480">terms</span> <span m="2884560">of the
  models</span> <span m="2885670">was</span> <span m="2885770">all</span> <span
  m="2885960">known.</span></p><p><span m="2887400">But</span> <span
  m="2887600">what</span> <span m="2887770">Michael</span> <span
  m="2888140">wanted</span> <span m="2888300">to</span> <span
  m="2888410">do</span> <span m="2888540">is</span> <span m="2888630">ask</span>
  <span m="2888950">whether</span> <span m="2889090">he</span> <span
  m="2889200">could</span> <span m="2889300">really</span> <span
  m="2889730">construct</span> <span m="2890890">an</span> <span
  m="2891030">oscillator.</span> <span m="2892710">And</span> <span
  m="2893550">he</span> <span m="2893720">did</span> <span
  m="2893860">this</span> <span m="2894100">using</span> <span
  m="2894420">these</span> <span m="2894660">three</span> <span
  m="2895320">mutual</span> <span m="2895780">reppressors.</span> <span
  m="2897570">We'll</span> <span m="2897790">say</span> <span m="2897980">x,
  y,</span> <span m="2898440">and</span> <span m="2898560">z</span> <span
  m="2898800">just</span> <span m="2899440">for</span> <span
  m="2899530">now.</span> <span m="2901100">x</span> <span
  m="2901680">represses</span> <span m="2902260">y,</span> <span
  m="2903900">represses</span> <span m="2904780">z,</span> <span
  m="2907066">represses x.</span> <span m="2907740">And</span> <span
  m="2908640">has</span> <span m="2908820">a</span> <span
  m="2908870">nice</span> <span m="2909110">model</span> <span
  m="2909690">of</span> <span m="2911080">this</span> <span
  m="2911180">system</span> <span m="2911500">that</span> <span
  m="2911560">helped</span> <span m="2911790">him</span> <span
  m="2911930">guide</span> <span m="2912930">the</span> <span
  m="2913020">design</span> <span m="2913330">of</span> <span
  m="2913430">his</span> <span m="2913500">circuits.</span></p><p><span
  m="2914380">So</span> <span m="2915000">experiments--</span> <span
  m="2915720">as</span> <span m="2915960">most</span> <span
  m="2916280">of</span> <span m="2916370">us</span> <span m="2916800">who</span>
  <span m="2916920">have</span> <span m="2917000">done</span> <span
  m="2917320">them</span> <span m="2917660">know--</span> <span
  m="2918050">experiments</span> <span m="2918540">are</span> <span
  m="2918600">hard.</span> <span m="2919570">So</span> <span
  m="2919760">if</span> <span m="2920060">you</span> <span
  m="2920210">can</span> <span m="2921500">do</span> <span m="2922420">a</span>
  <span m="2922640">week</span> <span m="2922870">of</span> <span
  m="2922950">thinking</span> <span m="2923370">before</span> <span
  m="2923700">you</span> <span m="2923810">do</span> <span m="2924710">a</span>
  <span m="2924730">year</span> <span m="2925140">of</span> <span
  m="2925460">experimental</span> <span m="2926430">biology,</span> <span
  m="2926890">then</span> <span m="2927070">you</span> <span
  m="2927535">should</span> <span m="2928000">do</span> <span
  m="2928170">that.</span> <span m="2929180">And</span> <span
  m="2929620">what</span> <span m="2930040">were</span> <span
  m="2930150">the</span> <span m="2931420">lessons</span> <span
  m="2931900">that</span> <span m="2932040">he</span> <span
  m="2932680">learned</span> <span m="2933020">from</span> <span
  m="2933230">the</span> <span m="2933300">modeling</span> <span
  m="2934200">that</span> <span m="2934720">guided</span> <span
  m="2935090">his</span> <span m="2935250">construction</span> <span
  m="2936910">of</span> <span m="2937070">this</span> <span
  m="2937190">circuit?</span> <span m="2941488">Yeah?</span></p><p><span
  m="2941984">AUDIENCE:</span> <span m="2942480">Lifetime of
  mRNA.</span></p><p><span m="2943472">PROFESSOR:</span> <span
  m="2943980">Right.</span> <span m="2944120">So you</span> <span
  m="2944200">want to have</span> <span m="2944320">similar</span> <span
  m="2944850">lifetime</span> <span m="2945390">of</span> <span
  m="2945480">the</span> <span m="2945710">mRNA</span> <span
  m="2946290">and</span> <span m="2946520">the protein.</span> <span
  m="2948300">And</span> <span m="2948460">this</span> <span
  m="2948630">is,</span> <span m="2949290">somehow,</span> <span
  m="2949950">similar</span> <span m="2950280">to</span> <span
  m="2950350">this</span> <span m="2950490">idea</span> <span
  m="2950740">that</span> <span m="2950830">you</span> <span
  m="2950940">need</span> <span m="2951160">more</span> <span
  m="2951400">delay</span> <span m="2951710">elements</span> <span
  m="2952350">because</span> <span m="2952900">if</span> <span m="2953680">you
  have</span> <span m="2954230">very</span> <span m="2954440">different</span>
  <span m="2954680">lifetimes,</span> <span m="2955290">then</span> <span
  m="2955480">the</span> <span m="2956050">more</span> <span
  m="2956300">rapid</span> <span m="2956650">process,</span> <span
  m="2957030">somehow,</span> <span m="2957240">doesn't</span> <span
  m="2957550">count.</span> <span m="2959920">It's</span> <span
  m="2959950">very</span> <span m="2960190">hard</span> <span
  m="2960540">to</span> <span m="2960630">increase</span> <span
  m="2961300">the</span> <span m="2961390">lifetime</span> <span
  m="2961870">of</span> <span m="2961930">the</span> <span
  m="2962220">mRNA</span> <span m="2962590">that</span> <span
  m="2962780">much</span> <span m="2963020">in</span> <span
  m="2963450">bacteria.</span> <span m="2964220">So</span> <span
  m="2964390">instead,</span> <span m="2964710">what</span> <span
  m="2964830">he</span> <span m="2964990">did</span> <span m="2965230">is</span>
  <span m="2965350">he</span> <span m="2966070">decreased</span> <span
  m="2966500">the</span> <span m="2966590">lifetime</span> <span
  m="2967140">of</span> <span m="2967890">the</span> <span
  m="2968000">proteins</span> <span m="2968340">of</span> <span
  m="2968420">the</span> <span m="2968500">transcription</span> <span
  m="2969000">factors.</span> <span m="2969960">In</span> <span
  m="2970020">this</span> <span m="2970140">case,</span> <span m="2970340">x,
  y,</span> <span m="2970780">and</span> <span m="2970890">z.</span> <span
  m="2974080">And</span> <span m="2974220">you</span> <span
  m="2974570">mentioned</span> <span m="2974970">the</span> <span
  m="2975040">other</span> <span m="2975180">thing</span> <span
  m="2975360">that</span> <span m="2975440">he</span> <span
  m="2975550">maybe</span> <span m="2975760">did.</span></p><p><span
  m="2976080">AUDIENCE:</span> <span m="2976532">He introduced</span> <span
  m="2976984">the leakage, but he didn't mention that that
  was--</span></p><p><span m="2979696">PROFESSOR:</span> <span
  m="2980150">That's</span> <span m="2980350">right.</span> <span
  m="2980510">So</span> <span m="2981920">I</span> <span
  m="2981970">guess,</span> <span m="2982410">he</span> <span
  m="2982860">knew</span> <span m="2983080">that</span> <span
  m="2983400">leakage</span> <span m="2983860">was</span> <span
  m="2983960">going</span> <span m="2984140">to</span> <span
  m="2984180">be</span> <span m="2984280">a</span> <span
  m="2984360">problem.</span> <span m="2984820">I.e,</span> <span
  m="2985470">that</span> <span m="2985800">you</span> <span
  m="2985940">want</span> <span m="2986490">tight</span> <span
  m="2986850">repression.</span> <span m="2987910">So</span> <span
  m="2987980">he</span> <span m="2990720">used these</span> <span
  m="2991110">synthetic</span> <span m="2991850">promoters</span> <span
  m="2992610">that</span> <span m="2992710">both</span> <span
  m="2993180">had</span> <span m="2993750">high</span> <span
  m="2994100">level</span> <span m="2994410">of</span> <span
  m="2994500">expression</span> <span m="2995130">when</span> <span
  m="2995910">on</span> <span m="2996560">but</span> <span
  m="2996680">then</span> <span m="2996830">very</span> <span
  m="2997020">low</span> <span m="2997360">level of</span> <span
  m="2997710">expression</span> <span m="2998140">when</span> <span
  m="2998280">being</span> <span m="2998460">repressed.</span></p><p><span
  m="3007800">He</span> <span m="3009180">made</span> <span
  m="3009450">this</span> <span m="3009650">thing.</span> <span
  m="3010580">And</span> <span m="3011460">in</span> <span
  m="3011590">particular,</span> <span m="3012500">he</span> <span
  m="3013210">looked</span> <span m="3013440">at</span> <span
  m="3013500">it</span> <span m="3013810">in</span> <span m="3013900">a</span>
  <span m="3013960">test</span> <span m="3014240">tube.</span> <span
  m="3015190">He</span> <span m="3015380">was</span> <span
  m="3015490">able</span> <span m="3015720">to</span> <span
  m="3015800">use,</span> <span m="3016160">in</span> <span
  m="3016240">this</span> <span m="3016380">case,</span> <span
  m="3016570">IPDG</span> <span m="3017270">to</span> <span
  m="3017360">synchronize</span> <span m="3017870">them.</span> <span
  m="3018720">And he</span> <span m="3018890">looked</span> <span
  m="3019070">at</span> <span m="3019140">the</span> <span
  m="3019250">fluorescence</span> <span m="3019800">in</span> <span
  m="3019870">the</span> <span m="3019950">test</span> <span
  m="3020240">tube.</span> <span m="3022860">So</span> <span
  m="3023020">the</span> <span m="3023090">fluorescence</span> <span
  m="3023560">is</span> <span m="3023660">reporting</span> <span
  m="3024140">on</span> <span m="3025080">one</span> <span m="3025680">of</span>
  <span m="3025860">the</span> <span m="3025960">proteins.</span> <span
  m="3027020">We</span> <span m="3027240">can</span> <span
  m="3028240">call</span> <span m="3028500">it</span> <span m="3028630">x</span>
  <span m="3029000">if we'd</span> <span m="3029120">like.</span> <span
  m="3029890">But</span> <span m="3030120">fluorescence</span> <span
  m="3030490">is</span> <span m="3030770">kind of</span> <span
  m="3030950">telling</span> <span m="3031110">about the</span> <span
  m="3031430">state.</span></p><p><span m="3032850">And</span> <span
  m="3033070">if</span> <span m="3033380">it</span> <span
  m="3033490">starts</span> <span m="3033810">out,</span> <span
  m="3034120">say,</span> <span m="3034250">here,</span> <span
  m="3034780">he</span> <span m="3034930">saw</span> <span m="3035790">a</span>
  <span m="3035840">single</span> <span m="3036160">cycle.</span> <span
  m="3037390">Damped</span> <span m="3037780">oscillations,</span> <span
  m="3038270">maybe.</span> <span m="3040550">So</span> <span
  m="3041010">the</span> <span m="3041100">question</span> <span
  m="3041460">is,</span> <span m="3043530">why</span> <span
  m="3044200">did</span> <span m="3044320">this</span> <span
  m="3044450">happen?</span> <span m="3054920">So</span> <span
  m="3055070">why</span> <span m="3055300">is</span> <span m="3055430">it</span>
  <span m="3055560">that,</span> <span m="3055700">in</span> <span
  m="3055800">the</span> <span m="3055900">test</span> <span
  m="3056240">tube,</span> <span m="3056560">he</span> <span
  m="3056660">didn't</span> <span m="3056790">see</span> <span
  m="3056930">something</span> <span m="3057180">that</span> <span
  m="3057280">looked</span> <span m="3057460">very</span> <span
  m="3057680">nice?</span> <span m="3060030">Oscillations.</span></p><p><span
  m="3062660">Noise.</span> <span m="3063250">And</span> <span m="3063520">in
  particular,</span> <span m="3064290">what</span> <span m="3064520">kind</span>
  <span m="3064810">of</span> <span m="3064890">noise?</span> <span
  m="3065210">Or</span> <span m="3065270">what's</span> <span
  m="3065510">going</span> <span m="3065770">on?</span> <span
  m="3071510">Desynchronization,</span> <span m="3072730">exactly.</span> <span
  m="3073580">So</span> <span m="3073760">the</span> <span
  m="3073840">idea</span> <span m="3074040">is</span> <span
  m="3074130">that,</span> <span m="3074250">even</span> <span
  m="3074500">if</span> <span m="3074570">you</span> <span
  m="3074660">start</span> <span m="3074960">out</span> <span
  m="3075100">with</span> <span m="3075200">them</span> <span
  m="3075230">all</span> <span m="3075400">synchronized--</span> <span
  m="3076240">you</span> <span m="3076380">give it</span> <span
  m="3076630">IPDG</span> <span m="3077140">pulls,</span> <span
  m="3077980">and</span> <span m="3078080">they're</span> <span
  m="3078230">synchronized</span> <span m="3078495">in</span> <span
  m="3078760">some</span> <span m="3079420">way--</span> <span
  m="3080250">it</span> <span m="3080370">may</span> <span m="3080530">be</span>
  <span m="3080660">that, at</span> <span m="3080850">the</span> <span
  m="3080930">beginning,</span> <span m="3081205">all</span> <span
  m="3081480">of</span> <span m="3081840">them</span> <span
  m="3081980">are</span> <span m="3082070">oscillating</span> <span
  m="3082650">in</span> <span m="3082820">phase</span> <span
  m="3083160">with</span> <span m="3083260">each</span> <span
  m="3083370">other.</span></p><p><span m="3083980">But</span> <span
  m="3084090">over</span> <span m="3084280">time,</span> <span
  m="3085440">random</span> <span m="3085880">noise,</span> <span
  m="3086530">phase</span> <span m="3087120">drift,</span> <span
  m="3087420">and</span> <span m="3087470">the</span> <span
  m="3087540">different</span> <span m="3087740">oscillators</span> <span
  m="3088270">leads</span> <span m="3088910">to</span> <span
  m="3089680">some</span> <span m="3090860">of</span> <span
  m="3090910">them</span> <span m="3091320">come</span> <span
  m="3091500">down</span> <span m="3092530">and</span> <span
  m="3092690">come</span> <span m="3092840">back</span> <span
  m="3093020">up.</span> <span m="3093320">And then,</span> <span
  m="3093430">others</span> <span m="3093800">are</span> <span
  m="3093890">slower.</span> <span m="3094820">You</span> <span
  m="3094970">start</span> <span m="3095180">averaging</span> <span
  m="3095580">all</span> <span m="3095680">these</span> <span
  m="3095800">things</span> <span m="3095970">together.</span> <span
  m="3096560">And</span> <span m="3096720">it</span> <span
  m="3096790">leads</span> <span m="3097090">to</span> <span
  m="3098550">damped</span> <span m="3098850">oscillations</span> <span
  m="3101630">at the</span> <span m="3101750">test</span> <span
  m="3102060">tube</span> <span m="3102230">level</span> <span
  m="3102500">within</span> <span m="3102740">the</span> <span
  m="3102820">bulk.</span> <span m="3104530">Yes?</span></p><p><span
  m="3105100">AUDIENCE:</span> <span m="3105585">So what do you</span> <span
  m="3106070">mean in the test tube?</span> <span m="3106555">Like, you just
  take all these</span> <span m="3107040">components and</span> <span
  m="3107525">put it--</span></p><p><span m="3108500">PROFESSOR: Sorry,</span>
  <span m="3108590">when</span> <span m="3108770">I</span> <span
  m="3109030">say</span> <span m="3109120">test</span> <span
  m="3109230">tube,</span> <span m="3109470">what</span> <span
  m="3109870">I</span> <span m="3109900">mean</span> <span m="3110100">is</span>
  <span m="3110220">that</span> <span m="3110380">you</span> <span
  m="3110480">have</span> <span m="3111300">all</span> <span
  m="3111500">the</span> <span m="3111580">cells.</span> <span
  m="3112100">So</span> <span m="3112130">they</span> <span
  m="3112280">still</span> <span m="3112510">are</span> <span
  m="3112630">intact</span> <span m="3112990">cells.</span> <span
  m="3114690">But</span> <span m="3114810">it's</span> <span
  m="3114920">just</span> <span m="3115020">many</span> <span
  m="3115260">cells.</span> <span m="3116500">So</span> <span
  m="3116570">then,</span> <span m="3116710">the</span> <span
  m="3116790">signal</span> <span m="3117290">that you</span> <span
  m="3117370">get</span> <span m="3117510">the</span> <span
  m="3117580">fluorescence</span> <span m="3118110">is</span> <span
  m="3118250">some</span> <span m="3118500">average</span> <span
  m="3119370">over</span> <span m="3119650">all</span> <span
  m="3120340">or</span> <span m="3120500">sum</span> <span
  m="3120890">overall.</span> <span m="3121170">The</span> <span
  m="3121240">fluorescence</span> <span m="3121580">you</span> <span
  m="3121650">get</span> <span m="3121820">from all</span> <span
  m="3121930">those</span> <span m="3122070">cells.</span></p><p><span
  m="3126200">So</span> <span m="3126580">there's</span> <span
  m="3126760">a</span> <span m="3126810">sense</span> <span
  m="3127110">that</span> <span m="3127270">this</span> <span
  m="3127420">is</span> <span m="3127530">really</span> <span
  m="3127850">what</span> <span m="3128050">you</span> <span
  m="3128790">expect</span> <span m="3130130">given</span> <span
  m="3130410">the</span> <span m="3130480">fact</span> <span
  m="3130740">that</span> <span m="3131120">they're</span> <span
  m="3131250">going</span> <span m="3131380">to</span> <span
  m="3131440">desynchronize.</span> <span m="3132130">Of</span> <span
  m="3132190">course,</span> <span m="3132640">the</span> <span
  m="3132740">better</span> <span m="3133080">the</span> <span
  m="3133200">oscillator</span> <span m="3133740">in</span> <span
  m="3133840">the</span> <span m="3133920">sense</span> <span
  m="3134160">that</span> <span m="3134930">the</span> <span
  m="3135040">lower</span> <span m="3135230">the</span> <span
  m="3135310">phase</span> <span m="3135520">drift,</span> <span
  m="3135970">then</span> <span m="3136490">maybe</span> <span
  m="3136730">you</span> <span m="3136810">can</span> <span
  m="3136910">see</span> <span m="3137790">a</span> <span
  m="3137860">slower</span> <span m="3138130">rate</span> <span
  m="3138360">of</span> <span m="3139890">this</span> <span
  m="3140090">kind</span> <span m="3140250">of</span> <span
  m="3140320">desynchronization.</span> <span m="3141110">But</span> <span
  m="3142260">this</span> <span m="3142430">is</span> <span
  m="3142540">really</span> <span m="3142950">what</span> <span
  m="3143260">you,</span> <span m="3143360">kind</span> <span
  m="3143490">of,</span> <span m="3143550">expect.</span></p><p><span
  m="3144040">All</span> <span m="3144080">right.</span> <span
  m="3144230">So</span> <span m="3144300">that's</span> <span
  m="3144520">what,</span> <span m="3144970">maybe,</span> <span
  m="3145190">led</span> <span m="3145400">him</span> <span
  m="3145570">to</span> <span m="3145650">go</span> <span m="3145890">and</span>
  <span m="3146580">look</span> <span m="3146760">at</span> <span
  m="3146810">the</span> <span m="3146870">single</span> <span
  m="3147230">cell</span> <span m="3147480">level</span> <span
  m="3148120">where</span> <span m="3148340">he</span> <span
  m="3148540">put</span> <span m="3148690">down</span> <span
  m="3148870">single</span> <span m="3149090">cells</span> <span
  m="3149460">on</span> <span m="3149540">this</span> <span
  m="3149670">agar</span> <span m="3150025">pad and</span> <span
  m="3150380">just</span> <span m="3151240">imaged</span> <span
  m="3152700">as</span> <span m="3152830">the</span> <span
  m="3152910">cells</span> <span m="3153180">oscillated</span> <span
  m="3153600">and</span> <span m="3153760">divided.</span> <span
  m="3157170">Now</span> <span m="3158860">there</span> <span
  m="3159230">are</span> <span m="3159270">a</span> <span m="3159370">few</span>
  <span m="3159440">features</span> <span m="3159870">that</span> <span
  m="3160330">are</span> <span m="3161290">important</span> <span
  m="3161970">to</span> <span m="3162050">note</span> <span m="3162280">from
  the</span> <span m="3162540">data.</span> <span m="3163340">The</span> <span
  m="3163440">first</span> <span m="3163900">is</span> <span
  m="3164000">that</span> <span m="3164800">they</span> <span
  m="3164910">do</span> <span m="3165120">oscillate.</span></p><p><span
  m="3168590">That's</span> <span m="3168760">a</span> <span
  m="3168800">big</span> <span m="3168940">deal</span> <span
  m="3169740">because</span> <span m="3170330">this</span> <span
  m="3170510">was,</span> <span m="3170790">indeed,</span> <span
  m="3171030">the</span> <span m="3171800">first</span> <span
  m="3172120">demonstration</span> <span m="3172670">of</span> <span
  m="3173170">being</span> <span m="3173340">able</span> <span
  m="3173450">to</span> <span m="3173520">put</span> <span
  m="3173790">these</span> <span m="3174110">random</span> <span
  m="3174430">components</span> <span m="3174690">together</span> <span
  m="3175010">like that</span> <span m="3175070">and</span> <span
  m="3175340">generate</span> <span m="3175690">oscillation.</span> <span
  m="3176520">But</span> <span m="3177280">they</span> <span
  m="3177380">didn't</span> <span m="3177620">oscillate</span> <span
  m="3177990">very</span> <span m="3178250">well.</span> <span
  m="3179200">So</span> <span m="3179680">they</span> <span
  m="3179800">said,</span> <span m="3180020">oh,</span> <span
  m="3180130">maybe</span> <span m="3180400">40%</span> <span
  m="3180960">of</span> <span m="3181000">the</span> <span
  m="3181060">cells</span> <span m="3181300">oscillated.</span> <span
  m="3181850">And</span> <span m="3182280">I</span> <span
  m="3182390">have</span> <span m="3182560">no</span> <span
  m="3182820">idea</span> <span m="3183320">what</span> <span
  m="3183440">the</span> <span m="3183510">rest</span> <span
  m="3183680">of</span> <span m="3183720">the</span> <span
  m="3183800">cells</span> <span m="3184610">were</span> <span
  m="3184750">doing.</span></p><p><span m="3187470">But</span> <span
  m="3187600">also,</span> <span m="3187940">even</span> <span
  m="3188140">the</span> <span m="3188220">cells</span> <span
  m="3188440">that</span> <span m="3188560">were</span> <span
  m="3188740">oscillating,</span> <span m="3189620">there</span> <span
  m="3189720">was</span> <span m="3189820">a</span> <span
  m="3189860">fair</span> <span m="3190000">amount</span> <span
  m="3190140">of</span> <span m="3190200">noise</span> <span
  m="3190650">to</span> <span m="3190740">the</span> <span
  m="3190810">oscillation.</span> <span m="3192640">And</span> <span
  m="3193250">the</span> <span m="3193910">latter</span> <span
  m="3194230">half</span> <span m="3194490">of</span> <span
  m="3194530">this</span> <span m="3194660">paper</span> <span
  m="3195110">has</span> <span m="3195290">a</span> <span
  m="3195310">fair</span> <span m="3195590">amount of</span> <span
  m="3195830">discussion</span> <span m="3196230">of</span> <span
  m="3196340">why</span> <span m="3196540">that</span> <span
  m="3196860">might</span> <span m="3197100">be.</span> <span
  m="3197620">And</span> <span m="3198295">they</span> <span
  m="3198560">allude</span> <span m="3198870">to</span> <span
  m="3200150">the</span> <span m="3200230">ideas that had</span> <span
  m="3200420">been</span> <span m="3200870">bouncing</span> <span
  m="3201180">around</span> <span m="3202410">and</span> <span
  m="3202660">from</span> <span m="3202840">the</span> <span
  m="3203180">theoretical</span> <span m="3203630">computational</span> <span
  m="3204320">side</span> <span m="3205150">demonstrating</span> <span
  m="3205890">that</span> <span m="3206040">it</span> <span
  m="3206150">may</span> <span m="3206320">be</span> <span
  m="3206490">that</span> <span m="3206700">the</span> <span
  m="3206890">low</span> <span m="3207200">numbers</span> <span
  m="3208380">of</span> <span m="3208500">proteins,</span> <span
  m="3209120">genes</span> <span m="3209280">involved</span> <span
  m="3209600">here</span> <span m="3210160">could</span> <span
  m="3210650">introduce</span> <span m="3211140">stochastic</span> <span
  m="3212420">noise</span> <span m="3213100">into</span> <span
  m="3213320">the</span> <span m="3213430">system</span> <span
  m="3214060">and,</span> <span m="3214360">thus,</span> <span
  m="3214700">lead</span> <span m="3214900">to</span> <span
  m="3214980">this</span> <span m="3215190">kind</span> <span
  m="3215310">of</span> <span m="3215390">phase</span> <span
  m="3215730">drift</span> <span m="3216110">that</span> <span
  m="3216490">was</span> <span m="3216670">observed</span> <span
  m="3217090">experimentally.</span></p><p><span m="3218060">I think</span>
  <span m="3218290">that</span> <span m="3218700">this</span> <span
  m="3218960">basic</span> <span m="3219340">observation</span> <span
  m="3219970">that</span> <span m="3220120">Michael</span> <span
  m="3220390">had</span> <span m="3220640">that</span> <span
  m="3222200">he</span> <span m="3222320">got</span> <span
  m="3222490">oscillations,</span> <span m="3222900">but</span> <span
  m="3222990">they</span> <span m="3223070">were</span> <span
  m="3223150">noisy.</span> <span m="3223780">That</span> <span
  m="3223990">is</span> <span m="3224090">probably</span> <span
  m="3224280">what</span> <span m="3224410">led</span> <span
  m="3224610">him</span> <span m="3224750">to</span> <span
  m="3224820">start</span> <span m="3225040">thinking</span> <span
  m="3225280">more</span> <span m="3225460">and</span> <span
  m="3225520">more</span> <span m="3225700">about</span> <span
  m="3226290">the</span> <span m="3226490">role</span> <span
  m="3226650">of</span> <span m="3226740">noise</span> <span
  m="3227340">in</span> <span m="3227930">G</span> <span
  m="3228130">networks</span> <span m="3228570">and</span> <span
  m="3228650">so</span> <span m="3228770">forth</span> <span
  m="3228980">and</span> <span m="3229490">led,</span> <span
  m="3229850">later,</span> <span m="3230110">to</span> <span
  m="3230310">another</span> <span m="3231020">hugely</span> <span
  m="3231410">influential</span> <span m="3231860">paper</span> <span
  m="3233030">that</span> <span m="3233870">is</span> <span
  m="3233970">not</span> <span m="3234140">going to be a</span> <span
  m="3234330">required</span> <span m="3234790">reading in</span> <span
  m="3235060">this</span> <span m="3235210">class</span> <span
  m="3235480">but</span> <span m="3235620">is</span> <span
  m="3236080">listed</span> <span m="3236420">under</span> <span
  m="3236620">the</span> <span m="3238030">optional</span> <span
  m="3238430">reading,</span> <span m="3238700">if</span> <span
  m="3239360">you're</span> <span m="3239470">interested.</span> <span
  m="3239780">But</span> <span m="3240250">we'll</span> <span
  m="3240460">really</span> <span m="3240640">get</span> <span
  m="3240750">into</span> <span m="3241080">this</span> <span
  m="3241310">question</span> <span m="3241560">of</span> <span
  m="3241815">noise</span> <span m="3242070">more</span> <span
  m="3243040">a</span> <span m="3243100">couple</span> <span
  m="3243360">weeks</span> <span m="3243810">from</span> <span
  m="3244281">now.</span></p><p><span m="3248520">Were</span> <span
  m="3248640">there</span> <span m="3248760">any</span> <span
  m="3249050">other</span> <span m="3249350">questions</span> <span
  m="3249870">about</span> <span m="3250190">the</span> <span
  m="3251620">experimental</span> <span m="3252580">side</span> <span
  m="3252890">of</span> <span m="3252980">this</span> <span
  m="3253180">paper?</span> <span m="3255560">I</span> <span
  m="3255710">wanted</span> <span m="3256420">to</span> <span
  m="3257090">analyze</span> <span m="3258360">maybe</span> <span
  m="3258560">a</span> <span m="3258620">little</span> <span
  m="3258770">bit</span> <span m="3258890">of</span> <span
  m="3258940">simple</span> <span m="3259490">model</span> <span
  m="3259870">of</span> <span m="3260070">the</span> <span
  m="3260160">repressilator.</span> <span m="3266790">So</span> <span
  m="3266910">the</span> <span m="3267000">model</span> <span
  m="3267310">that</span> <span m="3267480">they</span> <span
  m="3267630">used</span> <span m="3268000">to</span> <span
  m="3268070">help</span> <span m="3268240">them</span> <span
  m="3268380">design</span> <span m="3269000">this</span> <span
  m="3269210">experiment</span> <span m="3269900">involved</span> <span
  m="3270580">all</span> <span m="3271000">three</span> <span
  m="3271270">proteins,</span> <span m="3271870">all</span> <span
  m="3272200">three</span> <span m="3272380">mRNAs.</span></p><p><span
  m="3273220">And</span> <span m="3273430">what</span> <span
  m="3273530">that</span> <span m="3273660">means is</span> <span
  m="3273980">that,</span> <span m="3274150">when</span> <span
  m="3274260">you</span> <span m="3274370">go</span> <span m="3274620">and
  you</span> <span m="3274680">do</span> <span m="3274800">a</span> <span
  m="3274820">model,</span> <span m="3275220">you're</span> <span
  m="3275350">going</span> <span m="3275430">to</span> <span
  m="3275470">end</span> <span m="3275610">up</span> <span
  m="3275680">with</span> <span m="3275810">a</span> <span
  m="3275860">six</span> <span m="3276320">by</span> <span
  m="3276480">six</span> <span m="3276830">matrix.</span> <span
  m="3277830">And</span> <span m="3278380">I</span> <span
  m="3278510">don't</span> <span m="3278670">have</span> <span
  m="3278830">boards</span> <span m="3279200">that</span> <span
  m="3279310">are</span> <span m="3279360">big</span> <span
  m="3279540">enough.</span> <span m="3280380">So</span> <span
  m="3280500">what</span> <span m="3280640">I'm</span> <span
  m="3280750">going</span> <span m="3280840">to</span> <span
  m="3280900">do</span> <span m="3281060">instead</span> <span
  m="3281490">is</span> <span m="3281580">I'm</span> <span
  m="3281710">going</span> <span m="3281820">to</span> <span
  m="3283220">analyze</span> <span m="3283820">just</span> <span
  m="3284540">the</span> <span m="3284640">protein</span> <span
  m="3285090">only</span> <span m="3285410">version</span> <span
  m="3285860">model</span> <span m="3286200">of</span> <span
  m="3286340">the</span> <span m="3286510">repressilator.</span> <span
  m="3292300">All right.</span></p><p><span m="3311630">So</span> <span
  m="3311830">what</span> <span m="3311930">we</span> <span
  m="3312040">have</span> <span m="3312290">here</span> <span
  m="3312580">is</span> <span m="3313990">three</span> <span
  m="3314290">proteins.</span> <span m="3315080">p1</span> <span
  m="3315710">2</span> <span m="3316010">3</span> <span m="3316320">p1</span>
  <span m="3316610">dot.</span> <span m="3318030">And</span> <span
  m="3318260">we</span> <span m="3318350">have</span> <span
  m="3319870">degradation</span> <span m="3320470">of</span> <span
  m="3320570">this</span> <span m="3320710">protein. And</span> <span
  m="3321060">we're</span> <span m="3321170">going</span> <span
  m="3321460">to</span> <span m="3321600">analyze</span> <span
  m="3321960">the</span> <span m="3322070">symmetric</span> <span
  m="3322710">version,</span> <span m="3323320">just</span> <span
  m="3323540">like</span> <span m="3323940">what</span> <span
  m="3324130">Michael</span> <span m="3324390">did.</span> <span
  m="3325430">So</span> <span m="3325620">that</span> <span
  m="3325750">means</span> <span m="3325920">we're</span> <span
  m="3326070">assuming</span> <span m="3326440">that all</span> <span
  m="3326640">the</span> <span m="3326720">proteins</span> <span
  m="3327230">are</span> <span m="3328150">equivalent.</span> <span
  m="3328570">I'm</span> <span m="3328650">sure</span> <span
  m="3329040">that's</span> <span m="3329270">not</span> <span
  m="3329490">true</span> <span m="3329890">because</span> <span
  m="3330090">these</span> <span m="3330260">are</span> <span
  m="3331600">different</span> <span m="3331880">promoters</span> <span
  m="3332195">and</span> <span m="3332510">different</span> <span
  m="3332620">everything.</span></p><p><span m="3332960">But</span> <span
  m="3333560">this</span> <span m="3333890">gives</span> <span
  m="3334070">us</span> <span m="3334190">the</span> <span
  m="3334250">intuition.</span> <span m="3335210">So</span> <span
  m="3335330">it's</span> <span m="3335430">minus</span> <span
  m="3335690">p1.</span> <span m="3335920">And</span> <span
  m="3336200">this</span> <span m="3336810">is</span> <span
  m="3336890">protein</span> <span m="3337090">1</span> <span
  m="3337360">is</span> <span m="3337750">repressed</span> <span
  m="3339320">by</span> <span m="3340790">trajectory</span> <span
  m="3341080">protein 3.</span> <span m="3347050">Protein</span> <span
  m="3347200">2</span> <span m="3347610">is</span> <span
  m="3347810">going</span> <span m="3347930">to</span> <span
  m="3348010">be</span> <span m="3349090">repressed</span> <span m="3349540">by
  protein</span> <span m="3349920">1.</span> <span m="3360130">And</span> <span
  m="3360300">then</span> <span m="3360760">protein</span> <span
  m="3361140">3</span> <span m="3361460">is</span> <span
  m="3361600">going</span> <span m="3361700">to</span> <span
  m="3361740">be</span> <span m="3361860">repressed</span> <span
  m="3364350">by</span> <span m="3364590">protein</span> <span
  m="3364870">2.</span></p><p><span m="3375790">So</span> <span
  m="3375880">this</span> <span m="3376510">is</span> <span
  m="3376700">what</span> <span m="3376810">you would</span> <span
  m="3376960">call</span> <span m="3377170">the</span> <span
  m="3377240">protein</span> <span m="3377750">only</span> <span
  m="3378090">model</span> <span m="3378540">of the</span> <span
  m="3378630">repressilator.</span> <span m="3381610">Now</span> <span
  m="3381890">just</span> <span m="3382180">as</span> <span
  m="3382340">before,</span> <span m="3382900">the</span> <span
  m="3383030">fixed</span> <span m="3383310">points</span> <span
  m="3383630">are</span> <span m="3383720">when</span> <span
  m="3384000">the</span> <span m="3386470">pi</span> <span
  m="3387020">dots</span> <span m="3387410">are</span> <span
  m="3387490">equal</span> <span m="3387680">to</span> <span
  m="3387760">0.</span> <span m="3388480">And</span> <span m="3388580">we</span>
  <span m="3388660">get</span> <span m="3389470">the</span> <span
  m="3391000">same</span> <span m="3391730">equation</span> <span
  m="3392210">that</span> <span m="3392440">we,</span> <span
  m="3392560">basically,</span> <span m="3393370">had</span> <span
  m="3393600">before</span> <span m="3394090">where</span> <span
  m="3394850">the</span> <span m="3395570">equilibrium</span> <span
  m="3396120">or</span> <span m="3396250">the</span> <span
  m="3396580">fixed</span> <span m="3396870">point,</span> <span
  m="3397160">again,</span> <span m="3398170">is</span> <span
  m="3398340">going</span> <span m="3398450">to</span> <span
  m="3398500">be</span> <span m="3399520">given</span> <span
  m="3399740">by</span> <span m="3401600">something</span> <span
  m="3401970">that</span> <span m="3402070">looks</span> <span
  m="3402170">like</span> <span m="3402330">this.</span> <span m="3403030">So
  it's</span> <span m="3403140">the</span> <span m="3403220">same</span> <span
  m="3404330">requirement</span> <span m="3405260">that</span> <span
  m="3405350">we</span> <span m="3405420">had</span> <span
  m="3406940">before.</span></p><p><span m="3411470">Now</span> <span
  m="3412010">the</span> <span m="3412140">question</span> <span
  m="3412470">is,</span> <span m="3412890">how</span> <span
  m="3413160">can</span> <span m="3414370">we</span> <span
  m="3414490">get</span> <span m="3414690">the</span> <span
  m="3414760">stability</span> <span m="3415500">of</span> <span
  m="3415740">that</span> <span m="3415930">internal</span> <span
  m="3416330">fixed</span> <span m="3416540">point?</span> <span
  m="3416840">It's</span> <span m="3417100">worth</span> <span
  m="3417380">mentioning</span> <span m="3417850">here</span> <span
  m="3418080">that</span> <span m="3418930">now</span> <span
  m="3419190">we</span> <span m="3419290">have</span> <span
  m="3419590">three</span> <span m="3419860">proteins.</span> <span
  m="3420280">So</span> <span m="3421120">the</span> <span
  m="3421270">trajectories</span> <span m="3421800">are</span> <span
  m="3421930">in this</span> <span m="3422480">three</span> <span
  m="3422660">dimensional</span> <span m="3423020">space.</span> <span
  m="3424360">So</span> <span m="3425200">from</span> <span m="3425370">a</span>
  <span m="3425440">mathematical</span> <span m="3426190">standpoint,</span>
  <span m="3428260">determining</span> <span m="3428700">the</span> <span
  m="3428790">stability</span> <span m="3429080">of</span> <span
  m="3429370">that</span> <span m="3429570">internal</span> <span
  m="3429970">fixed</span> <span m="3430220">point</span> <span
  m="3430870">is</span> <span m="3431010">actually</span> <span
  m="3431270">not</span> <span m="3431590">sufficient</span> <span
  m="3432070">to</span> <span m="3432270">tell</span> <span
  m="3432540">you</span> <span m="3432660">that</span> <span
  m="3432790">there</span> <span m="3432920">has</span> <span
  m="3433230">to</span> <span m="3433310">be</span> <span
  m="3433410">oscillations</span> <span m="3434440">or</span> <span
  m="3434570">there</span> <span m="3434720">cannot</span> <span
  m="3435020">be</span> <span m="3435110">oscillations</span> <span
  m="3435560">because</span> <span m="3435660">these</span> <span
  m="3435830">trajectories</span> <span m="3436330">are, in</span> <span
  m="3436590">principal,</span> <span m="3436920">allowed</span> <span
  m="3437300">to</span> <span m="3437370">do</span> <span m="3437500">all</span>
  <span m="3437640">sorts</span> <span m="3437930">of</span> <span
  m="3437990">crazy</span> <span m="3438300">things</span> <span
  m="3438540">in</span> <span m="3438630">three</span> <span
  m="3438810">dimensions.</span></p><p><span m="3440170">But</span> <span
  m="3440820">it</span> <span m="3440940">turns</span> <span
  m="3441200">out</span> <span m="3441440">that</span> <span
  m="3442360">it</span> <span m="3442680">still</span> <span
  m="3442900">ends</span> <span m="3443070">up</span> <span
  m="3443210">being</span> <span m="3443370">true</span> <span
  m="3443570">here</span> <span m="3443760">that</span> <span
  m="3445620">when</span> <span m="3446780">this</span> <span
  m="3447140">internal</span> <span m="3447760">fixed</span> <span
  m="3448020">point</span> <span m="3448260">is</span> <span
  m="3448400">stable,</span> <span m="3448840">you</span> <span
  m="3448930">don't</span> <span m="3449120">get</span> <span
  m="3449240">oscillations.</span> <span m="3449590">And when</span> <span
  m="3449940">it's</span> <span m="3450130">unstable,</span> <span
  m="3450580">you</span> <span m="3450700">do.</span> <span
  m="3452200">But</span> <span m="3452390">that,</span> <span
  m="3452740">sort</span> <span m="3452880">of,</span> <span
  m="3453040">didn't</span> <span m="3453340">have</span> <span m="3453520">to
  be true</span> <span m="3453850">from</span> <span m="3454000">a</span> <span
  m="3454040">mathematical</span> <span
  m="3458390">standpoint.</span></p><p><span m="3461450">All right.</span> <span
  m="3461930">Now</span> <span m="3462150">since</span> <span
  m="3462830">this</span> <span m="3463020">is</span> <span
  m="3464750">now</span> <span m="3465410">going</span> <span
  m="3465620">to</span> <span m="3465690">be</span> <span m="3465770">a</span>
  <span m="3465830">3</span> <span m="3466000">by</span> <span
  m="3466110">3</span> <span m="3466270">matrix,</span> <span
  m="3466740">we're</span> <span m="3466840">going</span> <span
  m="3466920">to</span> <span m="3466970">have</span> <span
  m="3467160">to</span> <span m="3468070">calculate</span> <span
  m="3469690">those</span> <span m="3472040">eigenvalues.</span> <span
  m="3472630">Now</span> <span m="3473080">how</span> <span
  m="3473240">many</span> <span m="3473410">eigenvalues</span> <span
  m="3473930">are</span> <span m="3473960">there</span> <span
  m="3474080">going</span> <span m="3474160">to</span> <span
  m="3474200">be?</span> <span m="3476690">Three?</span> <span
  m="3478000">OK.</span> <span m="3481140">So</span> <span
  m="3481430">this</span> <span m="3481590">thing</span> <span
  m="3481790">I've</span> <span m="3481950">written</span> <span
  m="3482540">in</span> <span m="3482660">the</span> <span
  m="3482750">form</span> <span m="3483460">of</span> <span m="3484210">a</span>
  <span m="3485490">matrix</span> <span m="3485840">to</span> <span
  m="3486010">help</span> <span m="3486250">us</span> <span
  m="3486390">out</span> <span m="3486570">a</span> <span
  m="3486630">little</span> <span m="3486800">bit.</span> <span
  m="3487630">But</span> <span m="3487650">in</span> <span
  m="3487720">particular,</span> <span m="3489110">we're</span> <span
  m="3489260">going</span> <span m="3489370">to</span> <span
  m="3489450">get</span> <span m="3489760">the</span> <span
  m="3490260">same</span> <span m="3490460">thing</span> <span m="3490610">that
  we</span> <span m="3490750">had</span> <span m="3490910">before,</span> <span
  m="3491400">which</span> <span m="3491480">is</span> <span
  m="3493010">the</span> <span m="3493120">p1</span> <span
  m="3493810">tilde.</span></p><p><span m="3494410">So</span> <span
  m="3494560">these</span> <span m="3495110">are</span> <span
  m="3495170">deviations,</span> <span m="3496100">again,</span> <span
  m="3497340">from</span> <span m="3497730">the</span> <span
  m="3497810">fixed</span> <span m="3498070">point.</span> <span
  m="3500800">And</span> <span m="3500940">we</span> <span
  m="3501060">got</span> <span m="3501380">this</span> <span
  m="3501530">matrix</span> <span m="3501960">that's</span> <span
  m="3502100">going</span> <span m="3502200">to</span> <span
  m="3502240">look</span> <span m="3502350">like</span> <span
  m="3502480">this.</span> <span m="3502670">Minus</span> <span
  m="3502940">1,</span> <span m="3503380">again,</span> <span
  m="3503630">0.</span> <span m="3504510">It's</span> <span
  m="3504550">the</span> <span m="3504660">same</span> <span
  m="3505100">x</span> <span m="3505390">that</span> <span m="3505470">we</span>
  <span m="3505540">had</span> <span m="3505740">before</span> <span
  m="3508470">conveniently</span> <span m="3509030">still</span> <span
  m="3509260">on</span> <span m="3509370">the</span> <span
  m="3509440">board.</span> <span m="3519610">So</span> <span
  m="3520110">this</span> <span m="3520310">is</span> <span
  m="3520420">just</span> <span m="3521360">after</span> <span
  m="3521670">we</span> <span m="3521790">take</span> <span
  m="3522150">these</span> <span m="3522360">derivatives.</span></p><p><span
  m="3523820">And</span> <span m="3523970">then,</span> <span
  m="3525200">we</span> <span m="3527560">have</span> <span
  m="3527770">p1</span> <span m="3528180">tilde,</span> <span
  m="3528640">p2</span> <span m="3528770">tilde,</span> <span
  m="3528920">and</span> <span m="3529330">p3</span> <span
  m="3529812">tilde.</span> <span m="3532710">Now</span> <span m="3532910">what
  we</span> <span m="3533110">need</span> <span m="3533240">to</span> <span
  m="3533320">know</span> <span m="3533560">is,</span> <span
  m="3534170">for</span> <span m="3534300">this</span> <span
  m="3534990">Jacobian,</span> <span m="3535440">what</span> <span
  m="3537350">are going</span> <span m="3537480">to</span> <span
  m="3537570">be</span> <span m="3537720">the</span> <span
  m="3538370">eigenvalues?</span> <span m="3538920">For</span> <span
  m="3539060">this</span> <span m="3539600">thing</span> <span
  m="3539760">to</span> <span m="3539800">be</span> <span
  m="3539900">stable,</span> <span m="3540400">it</span> <span
  m="3540470">requires</span> <span m="3540820">what?</span> <span
  m="3548300">What's</span> <span m="3548880">the</span> <span
  m="3548940">requirement</span> <span m="3549360">for</span> <span
  m="3549490">stability</span> <span m="3550170">of</span> <span
  m="3551310">that</span> <span m="3551520">fixed</span> <span
  m="3551760">point?</span> <span m="3552090">That</span> <span
  m="3552290">p0?</span></p><p><span m="3554704">AUDIENCE:</span> <span
  m="3555165">[INAUDIBLE].</span></p><p><span m="3557010">PROFESSOR: OK.</span>
  <span m="3557920">Right.</span> <span m="3558500">For</span> <span
  m="3558750">two</span> <span m="3559030">dimensions,</span> <span
  m="3559530">this</span> <span m="3559730">trace</span> <span
  m="3560100">and</span> <span m="3560200">determinant</span> <span
  m="3560730">condition</span> <span m="3562030">works.</span> <span
  m="3562920">It's</span> <span m="3563020">important</span> <span
  m="3563270">to</span> <span m="3563380">say</span> <span
  m="3563600">that</span> <span m="3564100">that</span> <span
  m="3564600">only</span> <span m="3564890">works</span> <span
  m="3565110">for</span> <span m="3565210">two</span> <span
  m="3565320">dimensions,</span> <span m="3565680">actually,</span> <span
  m="3566270">the</span> <span m="3566900">rule about</span> <span
  m="3567250">traces</span> <span m="3567630">and</span> <span
  m="3567720">determinants.</span> <span m="3571980">So</span> <span
  m="3572110">be</span> <span m="3572240">careful.</span> <span
  m="3573900">So</span> <span m="3573980">what's</span> <span
  m="3574230">the</span> <span m="3574310">more</span> <span
  m="3574520">general</span> <span m="3574990">statement?</span> <span
  m="3575430">Yeah.</span></p><p><span m="3575870">AUDIENCE:</span> <span
  m="3576301">Negative eigenvalues.</span></p><p><span
  m="3578025">PROFESSOR:</span> <span m="3578460">Exactly.</span> <span
  m="3578800">So</span> <span m="3578980">in</span> <span
  m="3579380">order</span> <span m="3579810">for</span> <span
  m="3580670">that</span> <span m="3580900">fixed</span> <span
  m="3581140">point</span> <span m="3581340">to</span> <span
  m="3581380">be</span> <span m="3581480">stable, it</span> <span
  m="3581910">requires</span> <span m="3582440">that</span> <span
  m="3582620">all</span> <span m="3582960">the</span> <span
  m="3583050">eigenvalues</span> <span m="3584360">have</span> <span
  m="3584590">real</span> <span m="3584800">parts</span> <span
  m="3585080">less</span> <span m="3585290">than</span> <span
  m="3585450">0.</span> <span m="3588200">So</span> <span m="3588680">in</span>
  <span m="3588790">order</span> <span m="3588990">to</span> <span
  m="3589130">determine</span> <span m="3589490">the</span> <span
  m="3589550">stability</span> <span m="3589815">of the fixed</span> <span
  m="3590080">point,</span> <span m="3590510">we</span> <span
  m="3590630">need</span> <span m="3590800">to</span> <span
  m="3591080">ask</span> <span m="3591490">what</span> <span
  m="3591630">are</span> <span m="3591650">the</span> <span
  m="3591740">eigenvalues</span> <span m="3592240">of</span> <span
  m="3592380">this</span> <span m="3592540">matrix.</span> <span
  m="3595100">And</span> <span m="3595970">to</span> <span
  m="3596050">get</span> <span m="3596200">the</span> <span
  m="3597210">eigenvalues,</span> <span m="3598180">what</span> <span
  m="3598320">we</span> <span m="3598470">do</span> <span m="3598710">is</span>
  <span m="3599460">we</span> <span m="3599570">calculate</span> <span
  m="3599920">this</span> <span m="3600060">characteristic</span> <span
  m="3600610">equation,</span> <span m="3601480">this</span> <span
  m="3601620">thing</span> <span m="3601800">that we</span> <span
  m="3601970">learned</span> <span m="3602240">about</span> <span
  m="3602880">in</span> <span m="3603790">linear</span> <span
  m="3604040">algebra</span> <span m="3604340">and</span> <span
  m="3604420">so</span> <span m="3604540">forth.</span></p><p><span
  m="3605570">What</span> <span m="3605640">we</span> <span
  m="3605750">do</span> <span m="3605910">is</span> <span m="3606000">we</span>
  <span m="3606120">take--</span> <span m="3607290">all</span> <span
  m="3607450">right,</span> <span m="3607860">this</span> <span
  m="3607990">is</span> <span m="3608100">the</span> <span
  m="3608160">matrix</span> <span m="3608460">A,</span> <span
  m="3608670">we'll</span> <span m="3608790">say.</span> <span m="3609550">This
  is</span> <span m="3609840">matrix</span> <span m="3610240">A.</span> <span
  m="3610986">And</span> <span m="3611360">what</span> <span
  m="3611990">we</span> <span m="3612070">want</span> <span
  m="3612200">to</span> <span m="3612240">do</span> <span m="3612410">is</span>
  <span m="3612520">we</span> <span m="3612610">want</span> <span
  m="3612750">to</span> <span m="3612790">ask</span> <span
  m="3619930">whether</span> <span m="3621040">the</span> <span
  m="3621140">determinant</span> <span m="3622100">of</span> <span
  m="3622230">the</span> <span m="3622300">matrix</span> <span
  m="3623360">A</span> <span m="3624570">minus</span> <span
  m="3625180">some</span> <span m="3627810">eigenvalue</span> <span
  m="3628260">times</span> <span m="3630110">the</span> <span
  m="3630190">identity</span> <span m="3630540">matrix.</span> <span
  m="3631230">We</span> <span m="3631580">want</span> <span
  m="3631770">this</span> <span m="3631920">thing</span> <span
  m="3632110">to</span> <span m="3632180">be</span> <span
  m="3632670">equal</span> <span m="3632860">to</span> <span
  m="3632910">0.</span> <span m="3633600">So</span> <span
  m="3633690">this</span> <span m="3633840">is</span> <span
  m="3633960">how</span> <span m="3634780">we</span> <span
  m="3635310">determine</span> <span m="3637060">what</span> <span
  m="3637250">the</span> <span m="3637460">eigenvalues</span> <span
  m="3637903">are.</span></p><p><span m="3640120">And</span> <span
  m="3640250">this</span> <span m="3640930">is</span> <span
  m="3641140">not</span> <span m="3641510">as</span> <span
  m="3641690">bad</span> <span m="3642030">as</span> <span m="3642140">it</span>
  <span m="3642320">could</span> <span m="3642580">be</span> <span
  m="3642850">for</span> <span m="3643060">general</span> <span
  m="3643450">three by three</span> <span m="3643870">matrices</span> <span
  m="3644270">because</span> <span m="3644390">a</span> <span
  m="3644440">lot</span> <span m="3644610">of</span> <span
  m="3644650">these</span> <span m="3644780">things</span> <span
  m="3644960">are</span> <span m="3645030">0.</span> <span m="3647180">So</span>
  <span m="3647720">this</span> <span m="3648430">thing</span> <span
  m="3648680">is</span> <span m="3648780">just</span> <span
  m="3648990">this</span> <span m="3649160">is</span> <span
  m="3649310">the</span> <span m="3649420">determinant</span> <span
  m="3650090">of</span> <span m="3650700">the</span> <span
  m="3650800">following</span> <span m="3651100">matrix.</span> <span
  m="3654270">So</span> <span m="3654360">we</span> <span
  m="3654430">have</span> <span m="3654610">minus</span> <span
  m="3654950">1</span> <span m="3655320">minus</span> <span
  m="3655670">lambda</span> <span m="3657170">0.</span> <span
  m="3657970">This</span> <span m="3658230">thing</span> <span
  m="3658520">x</span> <span m="3658880">that's,</span> <span
  m="3659990">in</span> <span m="3660120">principle,</span> <span
  m="3660460">bad.</span></p><p><span m="3661550">Minus</span> <span
  m="3661920">1</span> <span m="3662160">minus</span> <span
  m="3662440">lambda</span> <span m="3663130">0.</span> <span
  m="3664870">Getting</span> <span m="3665275">0</span> <span
  m="3665680">x</span> <span m="3666400">minus</span> <span m="3666640">1</span>
  <span m="3666910">minus</span> <span m="3667180">lambda.</span> <span
  m="3669070">Now to</span> <span m="3669270">take</span> <span
  m="3669520">the</span> <span m="3669600">determinant</span> <span
  m="3670360">three</span> <span m="3670590">by</span> <span
  m="3670700">three</span> <span m="3670860">matrix,</span> <span
  m="3671130">remember,</span> <span m="3671390">you</span> <span
  m="3671490">can</span> <span m="3671680">say,</span> <span
  m="3671980">well,</span> <span m="3672570">this</span> <span
  m="3672740">determinant</span> <span m="3673250">is</span> <span
  m="3673360">going</span> <span m="3673460">to</span> <span
  m="3673500">be</span> <span m="3673570">equal</span> <span
  m="3673790">to--</span> <span m="3674590">we</span> <span
  m="3674730">have</span> <span m="3675020">this</span> <span
  m="3675250">term.</span> <span m="3676700">So</span> <span
  m="3676840">this</span> <span m="3676980">is</span> <span m="3677100">a</span>
  <span m="3677190">minus</span> <span m="3678630">1</span> <span
  m="3679020">plus</span> <span m="3680180">a</span> <span
  m="3680250">lambda</span> <span m="3681310">times</span> <span
  m="3681710">the</span> <span m="3681800">determinant</span> <span
  m="3683040">of</span> <span m="3683160">this</span> <span
  m="3683320">matrix.</span></p><p><span m="3684950">And</span> <span
  m="3685070">then,</span> <span m="3685160">we</span> <span
  m="3685260">just</span> <span m="3685530">have</span> <span
  m="3686010">that's</span> <span m="3686250">this.</span> <span
  m="3687110">The</span> <span m="3687210">product</span> <span
  m="3687420">of</span> <span m="3687460">these</span> <span
  m="3687690">minus</span> <span m="3688120">the product of</span> <span
  m="3688370">these.</span> <span m="3689030">So</span> <span
  m="3689140">this</span> <span m="3689300">just</span> <span
  m="3689530">gives</span> <span m="3689770">us</span> <span
  m="3690550">this</span> <span m="3690700">thing</span> <span
  m="3690840">again.</span> <span m="3691080">So</span> <span
  m="3691160">this</span> <span m="3691480">is</span> <span
  m="3691710">actually</span> <span m="3692118">just</span> <span
  m="3693750">minus</span> <span m="3694110">1</span> <span
  m="3694220">plus</span> <span m="3694390">lambda</span> <span
  m="3694610">cubed.</span> <span m="3696710">Next</span> <span
  m="3697030">term,</span> <span m="3697450">this</span> <span
  m="3697510">is</span> <span m="3697620">0.</span> <span
  m="3697920">That's</span> <span m="3698080">great.</span> <span
  m="3698270">We</span> <span m="3698330">don't</span> <span
  m="3698440">need</span> <span m="3698640">to</span> <span
  m="3698780">worry</span> <span m="3698910">about</span> <span
  m="3699040">that.</span></p><p><span m="3699600">The next</span> <span
  m="3699860">one,</span> <span m="3700480">we</span> <span
  m="3700610">get</span> <span m="3700950">plus.</span> <span
  m="3701390">We</span> <span m="3701500">have</span> <span
  m="3701590">an</span> <span m="3701900">x.</span> <span
  m="3703470">Determining</span> <span m="3703840">here,</span> <span
  m="3704050">we</span> <span m="3704180">get,</span> <span
  m="3704390">again,</span> <span m="3704710">x</span> <span
  m="3705250">squared.</span> <span m="3705640">So</span> <span
  m="3705740">this</span> <span m="3705840">is</span> <span
  m="3705940">just</span> <span m="3705990">an</span> <span m="3706050">x</span>
  <span m="3706250">cubed.</span> <span m="3708840">We</span> <span
  m="3708920">want</span> <span m="3709090">the</span> <span
  m="3709140">same</span> <span m="3709400">equal</span> <span
  m="3709600">to</span> <span m="3709690">0.</span> <span m="3709980">So</span>
  <span m="3710090">we</span> <span m="3710220">actually</span> <span
  m="3710430">get</span> <span m="3710660">a</span> <span
  m="3710710">very</span> <span m="3710900">simple</span> <span
  m="3711200">requirement</span> <span m="3712780">for</span> <span
  m="3712860">the</span> <span m="3712950">eigenvalues,</span> <span
  m="3714000">which</span> <span m="3714140">is</span> <span
  m="3714290">that</span> <span m="3715840">1</span> <span
  m="3716280">plus</span> <span m="3717110">the</span> <span
  m="3717300">eigenvalues</span> <span m="3718610">cubed</span> <span
  m="3719650">is</span> <span m="3719850">equal</span> <span
  m="3720100">to</span> <span m="3720370">this</span> <span
  m="3720660">thing</span> <span m="3720930">x</span> <span
  m="3721790">cubed.</span></p><p><span m="3722810">Now</span> <span
  m="3722850">be</span> <span m="3722980">careful</span> <span
  m="3723360">because,</span> <span m="3723430">remember,</span> <span
  m="3723710">x</span> <span m="3724930">is</span> <span
  m="3725050">actually</span> <span m="3725290">a</span> <span
  m="3725360">negative</span> <span m="3725910">number.</span> <span
  m="3728310">So</span> <span m="3728340">watch</span> <span
  m="3728560">out.</span> <span m="3731230">So</span> <span m="3731670">I</span>
  <span m="3731960">think that</span> <span m="3732180">the</span> <span
  m="3732840">best</span> <span m="3733080">way</span> <span
  m="3733190">to</span> <span m="3733240">get</span> <span m="3733420">a</span>
  <span m="3733480">sense</span> <span m="3733670">of</span> <span
  m="3733720">what</span> <span m="3733840">this</span> <span
  m="3733970">thing</span> <span m="3734110">is</span> <span
  m="3734740">is</span> <span m="3735020">to</span> <span
  m="3735110">plot</span> <span m="3735410">it.</span> <span
  m="3748380">Of</span> <span m="3748420">course,</span> <span
  m="3749190">it's</span> <span m="3749380">a</span> <span
  m="3749420">little</span> <span m="3749580">bit tempting</span> <span
  m="3749940">here</span> <span m="3750190">to</span> <span
  m="3750290">just</span> <span m="3750420">say,</span> <span m="3750590">all
  right,</span> <span m="3750780">well,</span> <span m="3751740">can</span>
  <span m="3751890">we</span> <span m="3751970">just</span> <span
  m="3752140">say</span> <span m="3752370">that</span> <span
  m="3752510">1</span> <span m="3752760">plus</span> <span
  m="3753020">lambda</span> <span m="3753450">is</span> <span
  m="3753540">equal</span> <span m="3753780">to</span> <span
  m="3754020">x?</span></p><p><span m="3760210">No.</span> <span
  m="3761180">So</span> <span m="3761440">what's</span> <span
  m="3761820">the</span> <span m="3761890">matter</span> <span
  m="3762080">with</span> <span m="3762170">that?</span> <span
  m="3766960">I</span> <span m="3767020">mean,</span> <span
  m="3767130">it's,</span> <span m="3767230">sort</span> <span
  m="3767360">of,</span> <span m="3767710">true,</span> <span
  m="3768480">maybe,</span> <span m="3769640">possibly.</span> <span
  m="3771920">Right.</span> <span m="3772290">So</span> <span
  m="3772560">the</span> <span m="3772710">problem</span> <span
  m="3772990">here</span> <span m="3773140">is</span> <span
  m="3773220">that</span> <span m="3774750">we're</span> <span
  m="3775030">supposed</span> <span m="3775410">to</span> <span
  m="3775470">be</span> <span m="3776280">getting</span> <span
  m="3776660">three</span> <span m="3777520">different</span> <span
  m="3777910">eigenvalues.</span> <span m="3778740">Or  at</span> <span
  m="3779150">lease,</span> <span m="3779460">it's</span> <span
  m="3779580">possible</span> <span m="3780040">to</span> <span
  m="3780100">get</span> <span m="3780220">three</span> <span
  m="3780350">different</span> <span m="3780510">eigenvalues.</span> <span
  m="3782520">So</span> <span m="3782590">this</span> <span
  m="3782780">is</span> <span m="3782900">really</span> <span
  m="3783190">specifying</span> <span m="3784180">the</span> <span
  m="3784280">solution</span> <span m="3784730">for</span> <span
  m="3784850">1</span> <span m="3785040">plus</span> <span
  m="3785230">lambda</span> <span m="3785500">on</span> <span
  m="3785610">the</span> <span m="3785680">complex</span> <span
  m="3786130">plane.</span></p><p><span m="3787400">So</span> <span
  m="3789090">the</span> <span m="3789200">solution</span> <span
  m="3789610">for</span> <span m="3789760">1</span> <span
  m="3790000">plus</span> <span m="3790770">lambda</span> <span
  m="3792010">we</span> <span m="3792110">can</span> <span
  m="3792130">get</span> <span m="3792390">by</span> <span
  m="3792550">thinking</span> <span m="3792830">about</span> <span
  m="3793450">this</span> <span m="3794350">is</span> <span
  m="3794470">the</span> <span m="3794630">real</span> <span
  m="3794950">part</span> <span m="3796110">of</span> <span m="3796490">1</span>
  <span m="3796660">plus</span> <span m="3796860">lambda.</span> <span
  m="3797920">And</span> <span m="3798070">this</span> <span
  m="3798180">is</span> <span m="3798380">the</span> <span
  m="3798990">imaginary</span> <span m="3799490">part</span> <span
  m="3800632">of</span> <span m="3801020">1</span> <span m="3801170">plus</span>
  <span m="3801370">lambda.</span> <span m="3802720">And</span> <span
  m="3803260">we</span> <span m="3803450">know</span> <span
  m="3803770">that</span> <span m="3805810">one</span> <span
  m="3806100">solution</span> <span m="3806520">is</span> <span
  m="3806620">going</span> <span m="3806750">to</span> <span
  m="3806810">be</span> <span m="3809010">out</span> <span
  m="3809180">here</span> <span m="3809510">at</span> <span
  m="3813740">x.</span> <span m="3817830">This</span> <span
  m="3818040">distance</span> <span m="3818420">here</span> <span
  m="3818670">is</span> <span m="3819080">the</span> <span
  m="3819180">magnitude</span> <span m="3819570">of</span> <span
  m="3819660">x.</span></p><p><span m="3824870">Now</span> <span
  m="3825050">the</span> <span m="3825230">others,</span> <span
  m="3825680">however,</span> <span m="3826650">are</span> <span
  m="3826780">going</span> <span m="3826880">to</span> <span
  m="3826930">be</span> <span m="3827950">around</span> <span
  m="3829060">the</span> <span m="3829140">complex</span> <span
  m="3829510">plane</span> <span m="3830190">similar</span> <span
  m="3830640">distances</span> <span m="3831780">where</span> <span
  m="3832040">we</span> <span m="3832560">get</span> <span
  m="3832800">something</span> <span m="3833000">that</span> <span
  m="3833100">looks</span> <span m="3833160">like</span> <span
  m="3833310">this.</span> <span m="3837620">So</span> <span
  m="3837630">these</span> <span m="3837800">are,</span> <span
  m="3837870">like,</span> <span m="3838060">30,</span> <span
  m="3838300">60,</span> <span m="3838570">90</span> <span
  m="3838850">triangle.</span> <span m="3841270">So</span> <span
  m="3841330">this</span> <span m="3841470">is</span> <span
  m="3841560">30</span> <span m="3841790">degrees</span> <span
  m="3842060">here</span> <span m="3843080">because</span> <span
  m="3843270">what</span> <span m="3843440">you</span> <span
  m="3843510">see</span> <span m="3843680">is</span> <span
  m="3843830">that,</span> <span m="3844360">for</span> <span
  m="3844640">each</span> <span m="3844890">of</span> <span
  m="3844950">these</span> <span m="3845170">three</span> <span
  m="3845460">solutions</span> <span m="3846070">for</span> <span
  m="3846180">1</span> <span m="3846370">plus</span> <span
  m="3846560">lambda,</span> <span m="3847240">if</span> <span
  m="3847380">you</span> <span m="3847880">cube</span> <span
  m="3848430">them,</span> <span m="3848890">you</span> <span
  m="3849050">end</span> <span m="3849280">up</span> <span
  m="3850160">with</span> <span m="3851710">x</span> <span
  m="3851950">cubed.</span></p><p><span m="3854320">So</span> <span
  m="3854990">this</span> <span m="3855310">guy,</span> <span
  m="3856760">you</span> <span m="3857450">square</span> <span
  m="3857950">it.</span> <span m="3858200">Cube.</span> <span
  m="3858560">You</span> <span m="3858650">end</span> <span
  m="3858770">up</span> <span m="3859260">back</span> <span
  m="3859470">here.</span> <span m="3860640">This</span> <span
  m="3860850">one,</span> <span m="3861330">if</span> <span
  m="3861470">you</span> <span m="3861590">cube</span> <span
  m="3861890">it,</span> <span m="3862440">you</span> <span m="3863280">start
  out</span> <span m="3863590">here,</span> <span m="3864050">squared,</span>
  <span m="3864630">and then</span> <span m="3864820">cubed</span> <span
  m="3865160">comes</span> <span m="3865300">back</span> <span
  m="3865520">out</span> <span m="3865620">here.</span> <span
  m="3866530">Same</span> <span m="3866650">thing</span> <span
  m="3866830">and</span> <span m="3867170">this</span> <span
  m="3867740">goes</span> <span m="3867910">around</span> <span
  m="3868220">somehow.</span> <span m="3869896">All right,</span> <span
  m="3870330">so</span> <span m="3870440">there</span> <span
  m="3870580">are</span> <span m="3870620">three</span> <span
  m="3871060">solutions</span> <span m="3871570">to</span> <span
  m="3871650">this</span> <span m="3871810">1</span> <span
  m="3872070">plus</span> <span m="3872400">lambda.</span> <span
  m="3873280">And</span> <span m="3873380">there</span> <span
  m="3873590">are</span> <span m="3873670">these</span> <span
  m="3874540">points</span> <span m="3874800">here.</span></p><p><span
  m="3877130">Now,</span> <span m="3877250">of</span> <span
  m="3877320">course,</span> <span m="3877510">it's</span> <span
  m="3877640">not</span> <span m="3877930">1</span> <span
  m="3878150">plus</span> <span m="3878390">lambda</span> <span
  m="3878710">that</span> <span m="3878800">we</span> <span
  m="3878900">actually</span> <span m="3879100">wanted</span> <span
  m="3879270">to</span> <span m="3879350">know</span> <span
  m="3879470">about.</span> <span m="3879730">It</span> <span
  m="3879790">was</span> <span m="3879930">lambda.</span> <span
  m="3882490">But</span> <span m="3885220">if</span> <span m="3885380">we</span>
  <span m="3885470">know what</span> <span m="3885660">1</span> <span
  m="3885950">plus</span> <span m="3886180">lambda</span> <span
  m="3886490">is,</span> <span m="3886730">then</span> <span
  m="3886880">we</span> <span m="3887780">can</span> <span m="3887910">get
  what</span> <span m="3888090">lambda</span> <span m="3888430">is.</span> <span
  m="3888850">What</span> <span m="3888960">do</span> <span
  m="3889010">we</span> <span m="3889100">have</span> <span
  m="3889220">to</span> <span m="3889310">do?</span> <span
  m="3890800">Right,</span> <span m="3891020">we</span> <span
  m="3891080">have</span> <span m="3891170">to</span> <span
  m="3891240">slide</span> <span m="3891470">it to</span> <span
  m="3891520">the</span> <span m="3891590">left.</span></p><p><span
  m="3892560">So</span> <span m="3893060">this</span> <span
  m="3893200">is</span> <span m="3894070">the</span> <span
  m="3894150">real</span> <span m="3894380">axis.</span> <span
  m="3894910">This</span> <span m="3894970">is</span> <span
  m="3895060">the</span> <span m="3895110">imaginary</span> <span
  m="3895450">axis.</span> <span m="3896310">1.</span> <span
  m="3898830">So</span> <span m="3899160">we</span> <span
  m="3899250">have</span> <span m="3899340">to</span> <span
  m="3899420">move</span> <span m="3899580">everything</span> <span
  m="3899980">over</span> <span m="3900250">1.</span> <span
  m="3902600">Now</span> <span m="3903130">remember,</span> <span
  m="3903400">the</span> <span m="3903540">requirement</span> <span
  m="3903920">for</span> <span m="3904030">stability</span> <span
  m="3904530">was</span> <span m="3904680">that</span> <span
  m="3904970">all</span> <span m="3905360">of</span> <span
  m="3905490">the</span> <span m="3905630">eigenvalues</span> <span
  m="3907110">have</span> <span m="3907540">real</span> <span
  m="3907780">parts</span> <span m="3908690">that</span> <span
  m="3908780">were</span> <span m="3908870">negative.</span> <span
  m="3909990">That means</span> <span m="3910330">the</span> <span
  m="3910470">requirement</span> <span m="3910870">for</span> <span
  m="3910960">stability of</span> <span m="3911300">that</span> <span
  m="3911420">fixed point</span> <span m="3911570">is that</span> <span
  m="3911800">all</span> <span m="3912110">three</span> <span
  m="3912330">of</span> <span m="3912370">these</span> <span
  m="3912510">fixed</span> <span m="3912690">points</span> <span
  m="3913350">are</span> <span m="3913920">in</span> <span
  m="3914020">the</span> <span m="3914120">left</span> <span m="3914380">half of
  the</span> <span m="3914670">plane.</span></p><p><span m="3916470">So</span>
  <span m="3916640">what</span> <span m="3916760">you can</span> <span
  m="3916890">see</span> <span m="3917110">is</span> <span
  m="3917220">that,</span> <span m="3917790">in</span> <span
  m="3917920">this</span> <span m="3918120">problem,</span> <span
  m="3919420">the</span> <span m="3919520">whole</span> <span
  m="3920090">question</span> <span m="3920550">of</span> <span
  m="3920880">stability</span> <span m="3921170">and</span> <span
  m="3921460">whether</span> <span m="3921630">we get</span> <span
  m="3921760">oscillations</span> <span m="3922360">boils</span> <span
  m="3922730">down</span> <span m="3923610">to</span> <span
  m="3924130">how</span> <span m="3924380">big</span> <span
  m="3924680">this</span> <span m="3924890">thing</span> <span
  m="3925080">is.</span> <span m="3925220">What's</span> <span
  m="3925440">this</span> <span m="3925620">distance?</span> <span
  m="3926310">If</span> <span m="3926470">this</span> <span
  m="3926700">distance</span> <span m="3927090">is</span> <span
  m="3927290">more</span> <span m="3927690">than</span> <span
  m="3927830">1,</span> <span m="3928640">then</span> <span
  m="3928950">we</span> <span m="3929150">subtract</span> <span
  m="3929690">1,</span> <span m="3929950">we</span> <span
  m="3930040">don't</span> <span m="3930300">get</span> <span
  m="3931460">it</span> <span m="3931580">into</span> <span
  m="3931690">the</span> <span m="3931820">left</span> <span
  m="3931890">part</span> <span m="3932070">of</span> <span
  m="3932550">the</span> <span m="3933910">plane.</span> <span m="3935931">OK, I
  can't</span> <span m="3936340">remember</span> <span m="3936650">which</span>
  <span m="3937710">case</span> <span m="3937930">I</span> <span
  m="3937960">just</span> <span m="3938120">gave.</span></p><p><span
  m="3938370">But</span> <span m="3938950">yeah,</span> <span
  m="3939210">we</span> <span m="3939660">need</span> <span
  m="3939770">to</span> <span m="3939830">know</span> <span
  m="3940260">whether</span> <span m="3940490">this</span> <span
  m="3940710">thing</span> <span m="3941290">is</span> <span
  m="3942190">larger</span> <span m="3942470">or</span> <span
  m="3942540">smaller</span> <span m="3942850">than</span> <span
  m="3942990">1.</span> <span m="3945820">And</span> <span
  m="3946290">that</span> <span m="3946590">has</span> <span
  m="3946810">to</span> <span m="3946900">do</span> <span
  m="3947150">with</span> <span m="3947710">the</span> <span
  m="3947850">magnitude</span> <span m="3948410">of</span> <span
  m="3948500">x.</span> <span m="3951600">So</span> <span m="3951980">if</span>
  <span m="3952400">the</span> <span m="3952550">magnitude</span> <span
  m="3953180">of</span> <span m="3953270">x--</span> <span m="3956300">do</span>
  <span m="3956440">you guys</span> <span m="3956630">remember</span> <span
  m="3956840">your</span> <span m="3956940">geometry</span> <span
  m="3958170">for a</span> <span m="3958530">30, 60,</span> <span
  m="3958950">90</span> <span m="3959411">triangle?</span></p><p><span
  m="3963099">All</span> <span m="3963560">right,</span> <span
  m="3963760">so</span> <span m="3964410">if</span> <span m="3964520">the</span>
  <span m="3964610">magnitude</span> <span m="3965100">of</span> <span
  m="3965200">x--</span> <span m="3966300">and</span> <span
  m="3966430">this</span> <span m="3966550">is</span> <span m="3966630">indeed
  the</span> <span m="3966920">magnitude of</span> <span m="3967250">x.</span>
  <span m="3968760">This</span> <span m="3970410">short</span> <span
  m="3970950">edge</span> <span m="3971290">on a</span> <span m="3971470">30,
  60, 90</span> <span m="3971970">is</span> <span m="3972090">half</span> <span
  m="3972490">the</span> <span m="3972970">long</span> <span
  m="3973330">edge,</span> <span m="3973590">right?</span> <span
  m="3976320">So</span> <span m="3976570">what</span> <span
  m="3976720">we</span> <span m="3976810">can</span> <span
  m="3976880">say</span> <span m="3977070">is</span> <span
  m="3977180">that</span> <span m="3977780">this</span> <span
  m="3979150">fixed</span> <span m="3979360">point</span> <span
  m="3979590">stable,</span> <span m="3980960">state</span> <span
  m="3981220">fixed point,</span> <span m="3987100">is</span> <span
  m="3987830">if</span> <span m="3988030">and</span> <span
  m="3988100">only</span> <span m="3988330">if</span> <span
  m="3988960">the</span> <span m="3989050">magnitude</span> <span
  m="3989440">of</span> <span m="3989520">x</span> <span m="3989910">is</span>
  <span m="3990240">what?</span></p><p><span m="3995630">Lesson</span> <span
  m="3996010">two.</span> <span m="3997840">OK.</span> <span
  m="3998930">That's</span> <span m="3999160">nice.</span> <span
  m="4001140">And</span> <span m="4001790">if</span> <span m="4001880">we</span>
  <span m="4001970">want,</span> <span m="4002290">we could</span> <span
  m="4002380">plug in--</span> <span m="4002840">just to ride this out.</span>
  <span m="4004100">This</span> <span m="4004260">is</span> <span
  m="4004410">n</span> <span m="4004830">alpha</span> <span m="4006390">p</span>
  <span m="4006630">0</span> <span m="4007420">n</span> <span
  m="4007590">minus</span> <span m="4007850">1.</span></p><p><span
  m="4025100">So</span> <span m="4025330">it's</span> <span
  m="4025530">useful,</span> <span m="4026720">once</span> <span
  m="4026920">you</span> <span m="4027010">get</span> <span
  m="4027220">to</span> <span m="4027320">something</span> <span
  m="4027610">like</span> <span m="4027770">this,</span> <span
  m="4028000">to</span> <span m="4028220">try</span> <span m="4028430">to</span>
  <span m="4028510">just</span> <span m="4028720">ask,</span> <span
  m="4029830">for</span> <span m="4030000">various</span> <span
  m="4030530">kind</span> <span m="4030690">of</span> <span
  m="4030810">values,</span> <span m="4032390">how</span> <span
  m="4032560">does</span> <span m="4032670">this</span> <span
  m="4032820">play</span> <span m="4033070">out?</span> <span
  m="4033290">What</span> <span m="4033810">does</span> <span
  m="4033920">the</span> <span m="4034400">requirement</span> <span
  m="4034810">end up</span> <span m="4035275">being?</span> <span
  m="4038070">And a</span> <span m="4038170">useful</span> <span
  m="4038570">limit</span> <span m="4038780">is</span> <span
  m="4038900">to</span> <span m="4039000">think</span> <span
  m="4039160">about</span> <span m="4039590">what</span> <span
  m="4039770">happens</span> <span m="4040120">in</span> <span
  m="4040180">the</span> <span m="4040250">limit</span> <span
  m="4040500">of</span> <span m="4040590">very</span> <span
  m="4040830">strong</span> <span m="4041520">expression?</span> <span
  m="4042070">So</span> <span m="4042250">strong</span> <span
  m="4042680">expression</span> <span m="4043210">corresponds</span> <span
  m="4043630">to</span> <span m="4043720">what?</span></p><p><span
  m="4052696">AUDIENCE:</span> <span m="4053173">Big</span> <span
  m="4053650">alpha?</span></p><p><span m="4054127">PROFESSOR:</span> <span
  m="4054620">Big</span> <span m="4054770">alpha.</span> <span
  m="4055080">Yes,</span> <span m="4055330">perfect.</span> <span
  m="4058750">And</span> <span m="4058870">it</span> <span
  m="4058930">turns</span> <span m="4059160">out,</span> <span
  m="4060110">big</span> <span m="4060420">alpha</span> <span
  m="4063460">is</span> <span m="4063690">a</span> <span
  m="4063760">little</span> <span m="4064150">bit--</span> <span
  m="4064400">OK,</span> <span m="4064730">and</span> <span
  m="4064880">remember</span> <span m="4065330">we</span> <span
  m="4065440">have</span> <span m="4065530">to</span> <span m="4066150">remember
  what</span> <span m="4066540">p0</span> <span m="4067030">was.</span> <span
  m="4067340">p0</span> <span m="4067770">was</span> <span
  m="4067910">this</span> <span m="4068020">p0</span> <span
  m="4069010">times</span> <span m="4069440">1</span> <span
  m="4069870">plus</span> <span m="4070300">p0.</span> <span
  m="4075120">All</span> <span m="4075240">right,</span> <span
  m="4075440">so</span> <span m="4075840">this</span> <span
  m="4076000">is</span> <span m="4076110">the</span> <span
  m="4076200">requirement.</span></p><p><span m="4080860">And</span> <span
  m="4081040">actually,</span> <span m="4081350">if</span> <span
  m="4081510">you</span> <span m="4083910">play</span> <span
  m="4084300">with</span> <span m="4084390">these</span> <span
  m="4084500">equations</span> <span m="4084840">just</span> <span
  m="4085040">a</span> <span m="4085090">little</span> <span
  m="4085300">bit,</span> <span m="4085810">what</span> <span
  m="4085920">you'll</span> <span m="4086030">find</span> <span
  m="4086300">is</span> <span m="4086380">that,</span> <span
  m="4086540">if</span> <span m="4086710">alpha</span> <span
  m="4087150">is</span> <span m="4087240">much</span> <span
  m="4088310">larger</span> <span m="4088580">than</span> <span
  m="4088710">1,</span> <span m="4089920">then</span> <span
  m="4091440">this</span> <span m="4091740">requirement</span> <span
  m="4092360">is</span> <span m="4092560">that</span> <span m="4094600">n</span>
  <span m="4095060">is</span> <span m="4095470">less</span> <span
  m="4095930">than</span> <span m="4096430">2</span> <span m="4098340">or</span>
  <span m="4098460">less</span> <span m="4098680">than</span> <span
  m="4098790">around</span> <span m="4099060">2.</span> <span
  m="4104080">This</span> <span m="4104220">is</span> <span
  m="4104300">saying,</span> <span m="4105359">on the</span> <span
  m="4105500">flip</span> <span m="4105680">side,</span> <span
  m="4106479">the</span> <span m="4106560">fixed</span> <span
  m="4106850">point</span> <span m="4107029">is</span> <span
  m="4107609">stable</span> <span m="4108359">if</span> <span
  m="4108970">you</span> <span m="4109109">don't</span> <span
  m="4109270">have</span> <span m="4109399">very</span> <span
  m="4109630">strong</span> <span m="4112500">cooperativity</span> <span
  m="4112770">and</span> <span m="4113040">repression.</span> <span
  m="4113920">And</span> <span m="4114410">the</span> <span
  m="4114490">flip</span> <span m="4114670">side</span> <span
  m="4114850">is,</span> <span m="4114960">if</span> <span
  m="4115100">you</span> <span m="4115180">have</span> <span
  m="4115470">strong</span> <span m="4116220">cooperativity</span> <span
  m="4116740">of</span> <span m="4116819">repression,</span> <span
  m="4117569">then</span> <span m="4117850">you</span> <span
  m="4118720">can</span> <span m="4119050">get</span> <span
  m="4119270">oscillations</span> <span m="4119830">because</span> <span
  m="4120859">this</span> <span m="4121000">interior</span> <span
  m="4121260">fixed</span> <span m="4121520">point</span> <span
  m="4121640">becomes</span> <span m="4121880">unstable.</span></p><p><span
  m="4124910">So</span> <span m="4125000">this</span> <span
  m="4125200">is</span> <span m="4125330">also</span> <span
  m="4125620">saying</span> <span m="4125930">that</span> <span
  m="4127660">n</span> <span m="4128000">greater</span> <span
  m="4128370">than</span> <span m="4128490">around</span> <span
  m="4128590">2</span> <span m="4129920">leads</span> <span
  m="4130220">to</span> <span m="4130340">oscillations.</span> <span
  m="4154370">And</span> <span m="4154479">this</span> <span
  m="4154640">maybe</span> <span m="4155109">makes</span> <span
  m="4155439">sense</span> <span m="4155859">because,</span> <span
  m="4156590">when</span> <span m="4156720">you</span> <span
  m="4156810">have</span> <span m="4157340">strong</span> <span
  m="4157920">productivity</span> <span m="4158479">in</span> <span
  m="4158569">the</span> <span m="4158649">repression</span> <span
  m="4159140">there,</span> <span m="4159750">what</span> <span
  m="4159870">that's</span> <span m="4160069">telling</span> <span
  m="4160410">you</span> <span m="4160540">is</span> <span
  m="4160689">that</span> <span m="4161220">it's</span> <span
  m="4161390">a</span> <span m="4161439">switch</span> <span
  m="4161830">like</span> <span m="4162060">response.</span> <span
  m="4162979">And</span> <span m="4163319">in</span> <span
  m="4163550">that</span> <span m="4163720">regime,</span> <span
  m="4164200">it</span> <span m="4164270">maybe</span> <span
  m="4165149">becomes</span> <span m="4165729">more</span> <span
  m="4168050">like</span> <span m="4168279">a</span> <span
  m="4168359">simple</span> <span m="4168590">Boolean</span> <span
  m="4168850">kind of</span> <span m="4169240">network</span> <span
  m="4169580">where,</span> <span m="4170090">if</span> <span
  m="4170189">you</span> <span m="4170279">just</span> <span
  m="4170600">write</span> <span m="4170680">down</span> <span
  m="4170819">the</span> <span m="4170880">ones</span> <span
  m="4171100">and</span> <span m="4171170">zeroes,</span> <span m="4171479">you
  can</span> <span m="4171630">convince</span> <span m="4171850">yourself</span>
  <span m="4172130">that</span> <span m="4172210">this</span> <span
  m="4172390">thing</span> <span m="4172560">maybe,</span> <span
  m="4174170">in</span> <span m="4174350">principle,</span> <span
  m="4174670">could</span> <span m="4174810">oscillate.</span></p><p><span
  m="4178010">Now</span> <span m="4178470">if</span> <span
  m="4178569">you</span> <span m="4178670">look</span> <span
  m="4178840">at</span> <span m="4179029">the</span> <span
  m="4179899">Elowitz</span> <span m="4180600">repressilator</span> <span
  m="4181300">paper,</span> <span m="4181540">you'll</span> <span
  m="4181660">see</span> <span m="4181859">that</span> <span
  m="4181960">he</span> <span m="4182100">gives</span> <span
  m="4182350">some</span> <span m="4182580">expression</span> <span
  m="4183640">for</span> <span m="4186140">what</span> <span
  m="4186270">this</span> <span m="4186450">thing</span> <span
  m="4186800">should</span> <span m="4186950">be</span> <span
  m="4187060">like.</span> <span m="4188516">And it</span> <span
  m="4188939">looks</span> <span m="4189870">vaguely</span> <span
  m="4190189">similar.</span> <span m="4191710">Of</span> <span
  m="4191830">course,</span> <span m="4192090">there</span> <span
  m="4192439">he's</span> <span m="4192600">including</span> <span
  m="4192979">the</span> <span m="4193069">mRNAs,</span> <span
  m="4193930">as</span> <span m="4194260">well.</span> <span
  m="4196540">But</span> <span m="4196650">if</span> <span
  m="4196720">you</span> <span m="4196820">think</span> <span
  m="4197020">that</span> <span m="4197120">this</span> <span
  m="4197320">was</span> <span m="4198140">painful</span> <span
  m="4198490">to</span> <span m="4198570">do</span> <span m="4198920">in</span>
  <span m="4199060">class,</span> <span m="4199420">then</span> <span
  m="4199860">including</span> <span m="4200090">the</span> <span
  m="4200180">mRNAs</span> <span m="4200510">is</span> <span
  m="4200840">more</span> <span m="4201070">painful.</span> <span
  m="4207680">Are</span> <span m="4207790">there</span> <span
  m="4207960">any</span> <span m="4208440">questions</span> <span
  m="4208910">about</span> <span m="4211800">this</span> <span
  m="4211990">idea?</span> <span m="4214780">Yeah.</span></p><p><span
  m="4215264">AUDIENCE:</span> <span m="4215748">So</span> <span m="4216232">in
  the paper, did they</span> <span m="4216716">also only do the stability
  analysis to determine</span> <span m="4217200">the--</span></p><p><span
  m="4220104">PROFESSOR:</span> <span m="4220590">I</span> <span
  m="4220660">think</span> <span m="4220890">they</span> <span
  m="4221400">did</span> <span m="4221550">simulations,</span> <span
  m="4222350">as</span> <span m="4222460">well.</span> <span
  m="4223390">So</span> <span m="4223840">the</span> <span
  m="4223950">nature</span> <span m="4224260">of</span> <span
  m="4224350">simulations</span> <span m="4224920">is</span> <span
  m="4225100">that</span> <span m="4226380">you</span> <span
  m="4226550">can</span> <span m="4226710">convince</span> <span
  m="4226960">yourself</span> <span m="4227330">that</span> <span
  m="4227430">their</span> <span m="4227610">exist</span> <span
  m="4228680">places</span> <span m="4229260">that</span> <span
  m="4230270">do</span> <span m="4230620">oscillate</span> <span m="4231020">or
  don't</span> <span m="4231405">oscillate.</span> <span
  m="4231790">Although,</span> <span m="4232500">you'll</span> <span
  m="4232670">notice</span> <span m="4232950">that</span> <span
  m="4233050">they</span> <span m="4233160">have</span> <span
  m="4233330">a</span> <span m="4233400">very,</span> <span
  m="4233800">kind</span> <span m="4233930">of,</span> <span
  m="4234060">enigmatic</span> <span m="4236020">sentence</span> <span
  m="4236510">in</span> <span m="4236600">here,</span> <span
  m="4236850">which</span> <span m="4237020">is</span> <span
  m="4237170">that</span> <span m="4237810">it</span> <span
  m="4237920">is</span> <span m="4238080">possible</span> <span
  m="4238470">that,</span> <span m="4238740">in</span> <span
  m="4238850">addition</span> <span m="4239160">to</span> <span
  m="4239230">simple</span> <span m="4239500">oscillations,</span> <span
  m="4240360">this</span> <span m="4240630">and</span> <span
  m="4240770">more</span> <span m="4240960">realistic</span> <span
  m="4241360">models</span> <span m="4241770">may</span> <span
  m="4242050">exhibit</span> <span m="4242230">other</span> <span
  m="4242550">complex</span> <span m="4243090">types</span> <span
  m="4243450">of</span> <span m="4243550">dynamic</span> <span
  m="4243960">behavior.</span></p><p><span m="4245220">And</span> <span
  m="4245350">this</span> <span m="4245490">is</span> <span
  m="4245670">just</span> <span m="4246660">a</span> <span
  m="4247120">way</span> <span m="4247240">of</span> <span
  m="4247320">saying,</span> <span m="4247640">well,</span> <span
  m="4248120">you</span> <span m="4248210">know,</span> <span
  m="4248470">I</span> <span m="4248590">don't</span> <span
  m="4248730">know.</span> <span m="4249810">Maybe</span> <span
  m="4250150">someday</span> <span m="4251970">because</span> <span
  m="4252470">once</span> <span m="4252540">you</span> <span
  m="4252800">talk</span> <span m="4252990">about</span> <span
  m="4253130">six</span> <span m="4253350">dimensional</span> <span
  m="4253730">system,</span> <span m="4255440">you</span> <span
  m="4255610">never</span> <span m="4255870">know</span> <span
  m="4256210">if</span> <span m="4256280">you've</span> <span
  m="4256430">explored</span> <span m="4256830">all of the</span> <span
  m="4257170">parameter</span> <span m="4257660">space.</span> <span
  m="4258750">I</span> <span m="4259020">mean,</span> <span
  m="4259130">even</span> <span m="4259370">for</span> <span
  m="4259520">fixed</span> <span m="4259830">parameters,</span> <span
  m="4260170">you</span> <span m="4260230">don't</span> <span
  m="4260340">know</span> <span m="4260430">if</span> <span
  m="4260490">you</span> <span m="4260590">started at</span> <span
  m="4261010">all</span> <span m="4261150">the</span> <span
  m="4261230">right</span> <span m="4261400">locations.</span></p><p><span
  m="4262720">You</span> <span m="4262900">can</span> <span
  m="4263090">kind</span> <span m="4263640">develop</span> <span
  m="4264230">some</span> <span m="4265180">sense</span> <span
  m="4265770">that,</span> <span m="4266000">oh,</span> <span
  m="4266190">this</span> <span m="4266420">thing</span> <span m="4266580">seems
  to</span> <span m="4266950">oscillate or</span> <span m="4267370">seems</span>
  <span m="4267600">to</span> <span m="4267690">not</span> <span
  m="4267880">oscillate.</span> <span m="4268380">And</span> <span
  m="4268530">it</span> <span m="4268610">does</span> <span
  m="4268840">correspond</span> <span m="4269290">to</span> <span
  m="4269340">these</span> <span m="4269570">conditions.</span> <span
  m="4270070">But</span> <span m="4270860">you</span> <span
  m="4271930">don't</span> <span m="4272540">know.</span> <span
  m="4273080">I</span> <span m="4273480">mean,</span> <span
  m="4273830">it</span> <span m="4273990">could</span> <span
  m="4274180">be</span> <span m="4274310">that,</span> <span
  m="4274510">in</span> <span m="4274660">some</span> <span
  m="4274870">regions,</span> <span m="4275270">you</span> <span
  m="4275400">get</span> <span m="4275590">chaos</span> <span
  m="4276060">or</span> <span m="4276150">other</span> <span
  m="4276270">things.</span> <span m="4276590">Right?</span></p><p><span
  m="4277340">So</span> <span m="4277600">it's</span> <span
  m="4278370">funny</span> <span m="4278540">because</span> <span
  m="4279140">I've</span> <span m="4279730">read</span> <span
  m="4279910">this</span> <span m="4280060">paper many</span> <span
  m="4280420">times.</span> <span m="4280650">But</span> <span m="4280750">it
  was</span> <span m="4280860">only</span> <span m="4281730">last</span> <span
  m="4281990">night</span> <span m="4282200">when</span> <span
  m="4282310">I</span> <span m="4282330">was</span> <span
  m="4282450">re-reading</span> <span m="4282850">it that</span> <span
  m="4282960">I</span> <span m="4283130">kind</span> <span m="4283250">of</span>
  <span m="4283350">thought</span> <span m="4283530">about</span> <span
  m="4283700">that</span> <span m="4283780">sense</span> <span
  m="4284090">like,</span> <span m="4284230">yeah,</span> <span
  m="4285300">I'm</span> <span m="4285470">not</span> <span
  m="4285630">sure</span> <span m="4285810">either</span> <span
  m="4287320">what</span> <span m="4287520">this</span> <span
  m="4287870">model</span> <span m="4288140">could</span> <span
  m="4288260">possibly</span> <span m="4288600">do.</span> <span
  m="4289580">Yes?</span></p><p><span m="4289860">AUDIENCE:</span> <span
  m="4290356">In this</span> <span m="4290852">linear analysis</span> <span
  m="4291348">the three x's are</span> <span m="4292836">the
  same.</span></p><p><span m="4293828">PROFESSOR:</span> <span
  m="4294330">That's</span> <span m="4294500">right.</span></p><p><span
  m="4294780">AUDIENCE: Because they're</span> <span
  m="4295774">non-dimensional?</span></p><p><span m="4299750">PROFESSOR: All
  right.</span> <span m="4300250">So</span> <span m="4300540">the</span> <span
  m="4300690">reason</span> <span m="4301000">that</span> <span
  m="4301110">the</span> <span m="4301200">three</span> <span
  m="4301530">X's</span> <span m="4301900">are</span> <span
  m="4301970">the</span> <span m="4302040">same</span> <span
  m="4302370">is</span> <span m="4302510">because</span> <span
  m="4302980">we've</span> <span m="4303160">assumed</span> <span
  m="4303660">that</span> <span m="4303740">this</span> <span
  m="4306000">really</span> <span m="4306250">is</span> <span
  m="4306470">the</span> <span m="4306560">symmetric</span> <span
  m="4307120">version</span> <span m="4307800">of</span> <span
  m="4308570">the</span> <span m="4308670">repressilator</span> <span
  m="4312260">because</span> <span m="4312440">we're</span> <span
  m="4312550">assuming</span> <span m="4312870">that</span> <span
  m="4312980">all</span> <span m="4313390">of</span> <span
  m="4313500">the</span> <span m="4313590">alphas,</span> <span
  m="4313880">all</span> <span m="4314150">the</span> <span
  m="4314290">ends,</span> <span m="4314760">all</span> <span
  m="4314890">the</span> <span m="4314970">K's,</span> <span
  m="4315190">everything's</span> <span m="4315530">the</span> <span
  m="4315620">same</span> <span m="4316040">across</span> <span
  m="4316320">all</span> <span m="4316550">three</span> <span m="4316890">of
  them.</span> <span m="4317090">So</span> <span m="4317500">given</span> <span
  m="4317710">that</span> <span m="4317920">symmetry,</span> <span
  m="4318370">then</span> <span m="4318500">you're</span> <span
  m="4318650">always</span> <span m="4318870">going</span> <span
  m="4319110">to</span> <span m="4319330">end</span> <span m="4319490">up</span>
  <span m="4319590">with</span> <span m="4319700">a</span> <span
  m="4319740">symmetric</span> <span m="4320720">version</span> <span
  m="4321010">of</span> <span m="4321070">this.</span></p><p><span
  m="4322190">So</span> <span m="4322290">I</span> <span
  m="4322350">think</span> <span m="4323490">if</span> <span
  m="4323620">it</span> <span m="4323710">were</span> <span
  m="4324220">asymmetric</span> <span m="4325370">and</span> <span
  m="4325490">then</span> <span m="4325590">you</span> <span
  m="4325690">made</span> <span m="4325990">the</span> <span
  m="4326100">non-dimensional</span> <span m="4326820">versions</span> <span
  m="4327210">of</span> <span m="4327310">things,</span> <span
  m="4327880">I</span> <span m="4327980">think</span> <span
  m="4328180">you</span> <span m="4328320">still</span> <span
  m="4328570">won't</span> <span m="4328770">end</span> <span
  m="4328900">up</span> <span m="4329030">getting</span> <span
  m="4329480">the</span> <span m="4329590">same</span> <span
  m="4329840">X's</span> <span m="4330140">just</span> <span
  m="4330630">because,</span> <span m="4331070">if</span> <span
  m="4331510">it's</span> <span m="4331730">asymmetric,</span> <span
  m="4331830">then</span> <span m="4332260">and</span> <span
  m="4332350">something</span> <span m="4332540">has</span> <span
  m="4332680">to</span> <span m="4332740">be asymmetric.</span> <span
  m="4336406">Yes?</span></p><p><span m="4336882">AUDIENCE:</span> <span
  m="4337358">[INAUDIBLE]</span> <span m="4337834">so large</span> <span
  m="4339262">alpha</span> <span m="4339750">leads</span> <span
  m="4340560">to--</span></p><p><span m="4341490">PROFESSOR: Yes,</span> <span
  m="4341780">OK.</span> <span m="4342280">We</span> <span
  m="4342400">can</span> <span m="4342520">go</span> <span
  m="4342630">ahead</span> <span m="4342790">and</span> <span
  m="4344120">do</span> <span m="4344240">this.</span> <span
  m="4357020">So</span> <span m="4357180">for</span> <span
  m="4358930">large</span> <span m="4359380">alpha,</span> <span
  m="4360250">this</span> <span m="4360560">fixed</span> <span
  m="4360910">point</span> <span m="4361350">is</span> <span
  m="4361530">going</span> <span m="4361660">to</span> <span
  m="4361730">be--</span> <span m="4366280">p0</span> <span
  m="4366710">is</span> <span m="4366810">going</span> <span
  m="4366900">to</span> <span m="4366940">be</span> <span
  m="4367080">much</span> <span m="4367360">larger</span> <span
  m="4367660">than</span> <span m="4367790">1.</span> <span
  m="4368360">So</span> <span m="4368420">this</span> <span
  m="4368570">is</span> <span m="4368680">about</span> <span
  m="4369160">p0</span> <span m="4369530">to</span> <span m="4369580">the</span>
  <span m="4369660">n</span> <span m="4369780">plus</span> <span
  m="4369990">1.</span> <span m="4371190">We</span> <span m="4371270">can</span>
  <span m="4371350">neglect</span> <span m="4371700">the</span> <span
  m="4371780">1</span> <span m="4372100">for</span> <span
  m="4372210">large</span> <span m="4372460">alpha.</span></p><p><span
  m="4373750">And</span> <span m="4373880">then</span> <span
  m="4374180">and</span> <span m="4374330">then</span> <span
  m="4374460">what</span> <span m="4374570">we</span> <span
  m="4374690">can</span> <span m="4374780">say</span> <span
  m="4374990">is</span> <span m="4375130">that,</span> <span
  m="4376170">over</span> <span m="4376420">here,</span> <span
  m="4379090">for</span> <span m="4379190">example,</span> <span
  m="4379860">if</span> <span m="4380000">we</span> <span
  m="4380120">multiply</span> <span m="4380580">both</span> <span
  m="4381160">sides</span> <span m="4381640">by--</span> <span
  m="4383780">p0</span> <span m="4384290">squared,</span> <span
  m="4385210">p0</span> <span m="4385540">squared,</span> <span
  m="4386150">so</span> <span m="4386290">multiply it</span> <span
  m="4386530">by</span> <span m="4386670">one.</span> <span
  m="4387520">Then</span> <span m="4387880">this</span> <span
  m="4388140">down</span> <span m="4388350">here</span> <span
  m="4388460">is</span> <span m="4388550">definitely</span> <span
  m="4388830">alpha</span> <span m="4389160">squared.</span> <span
  m="4391650">And</span> <span m="4392070">then,</span> <span
  m="4392210">up</span> <span m="4392380">here,</span> <span m="4392600">what
  we</span> <span m="4392800">have</span> <span m="4393040">is</span> <span
  m="4393350">p0</span> <span m="4394010">to</span> <span m="4394140">the</span>
  <span m="4394220">n</span> <span m="4394340">plus</span> <span
  m="4394580">1,</span> <span m="4395350">which</span> <span
  m="4395970">we</span> <span m="4396240">decided</span> <span
  m="4396690">was</span> <span m="4396920">around</span> <span
  m="4397190">alpha</span> <span m="4397605">for a</span> <span
  m="4398020">strong</span> <span m="4398270">alpha.</span></p><p><span
  m="4400980">So</span> <span m="4401110">that</span> <span
  m="4401790">gives</span> <span m="4402010">us</span> <span
  m="4403630">alpha</span> <span m="4404070">times</span> <span
  m="4404330">alpha</span> <span m="4404670">divided</span> <span
  m="4404890">by</span> <span m="4404980">alpha</span> <span
  m="4405210">squared.</span> <span m="4406770">So</span> <span
  m="4407190">this</span> <span m="4407420">actually</span> <span
  m="4407600">all</span> <span m="4407780">goes</span> <span
  m="4408070">away</span> <span m="4408450">for</span> <span
  m="4409190">large</span> <span m="4409870">alpha.</span> <span
  m="4410410">So</span> <span m="4410520">then,</span> <span
  m="4410680">you're</span> <span m="4410960">just</span> <span
  m="4411190">left</span> <span m="4411410">with n</span> <span m="4411580">less
  than</span> <span m="4411870">2.</span> <span m="4413750">Did</span> <span
  m="4413850">that--</span></p><p><span m="4414130">AUDIENCE:</span> <span
  m="4414580">Sorry.</span> <span m="4415030">Where did that</span> <span
  m="4415480">top right equation come from?</span></p><p><span
  m="4416380">PROFESSOR:</span> <span m="4416430">OK,</span> <span
  m="4416700">so</span> <span m="4416760">this</span> <span
  m="4416930">equation</span> <span m="4417230">here</span> <span
  m="4417440">is</span> <span m="4418080">this</span> <span
  m="4418280">is</span> <span m="4418540">the</span> <span
  m="4418750">solution</span> <span m="4419980">for where</span> <span
  m="4420330">that</span> <span m="4420540">fixed</span> <span
  m="4420790">point</span> <span m="4421000">is.</span> <span
  m="4422140">So</span> <span m="4422270">in</span> <span
  m="4422530">this</span> <span m="4422820">space</span> <span
  m="4423440">of</span> <span m="4425040">the</span> <span
  m="4425170">p0's,</span> <span m="4425510">if</span> <span
  m="4425570">you</span> <span m="4425730">set</span> <span
  m="4426830">the</span> <span m="4427310">equations</span> <span
  m="4427780">for</span> <span m="4427950">p1,</span> <span
  m="4428060">p2,</span> <span m="4428310">p3,</span> <span
  m="4428410">if</span> <span m="4428530">you</span> <span m="4428795">set
  that</span> <span m="4429380">equal to</span> <span m="4429560">0,</span>
  <span m="4429770">this</span> <span m="4430620">is</span> <span
  m="4430750">the</span> <span m="4432790">expression</span> <span
  m="4433240">always</span> <span m="4433990">for a</span> <span
  m="4434180">large</span> <span m="4434420">alpha,</span> <span
  m="4434580">small.</span> <span m="4434880">So</span> <span
  m="4435010">this</span> <span m="4435140">is</span> <span m="4435450">a need
  be</span> <span m="4437080">location</span> <span m="4438220">of</span> <span
  m="4438360">that</span> <span m="4438520">fixed</span> <span
  m="4438710">point.</span></p><p><span m="4439180">And</span> <span
  m="4439290">it's</span> <span m="4439370">just,</span> <span
  m="4439850">as</span> <span m="4440000">alpha</span> <span
  m="4440290">is</span> <span m="4440400">large,</span> <span
  m="4441020">then</span> <span m="4441510">we</span> <span
  m="4441660">get</span> <span m="4441930">that</span> <span
  m="4442660">p0</span> <span m="4443190">to the</span> <span
  m="4443310">n</span> <span m="4443500">plus</span> <span m="4443830">1</span>
  <span m="4444240">is</span> <span m="4444340">approximately</span> <span
  m="4444870">equal</span> <span m="4445010">to</span> <span
  m="4445080">alpha.</span> <span m="4445920">And</span> <span
  m="4446010">this</span> <span m="4446130">is</span> <span
  m="4446250">for</span> <span m="4446430">alpha</span> <span
  m="4446740">much</span> <span m="4446940">greater</span> <span
  m="4447080">than</span> <span m="4447310">1.</span> <span
  m="4448326">And</span> <span m="4448690">in</span> <span
  m="4448870">that</span> <span m="4449050">case,</span> <span
  m="4449560">all</span> <span m="4449670">of</span> <span
  m="4449750">these</span> <span m="4449920">things</span> <span
  m="4450160">just</span> <span m="4450930">go</span> <span
  m="4451150">away.</span> <span m="4451400">And</span> <span
  m="4451470">you're</span> <span m="4451570">just</span> <span
  m="4451770">left</span> <span m="4452080">with</span> <span m="4452390">n less
  than</span> <span m="4452490">2.</span></p><p><span m="4454890">So</span>
  <span m="4455050">for</span> <span m="4455120">example,</span> <span
  m="4456670">as</span> <span m="4456960">alpha</span> <span
  m="4457990">goes</span> <span m="4458310">down</span> <span
  m="4459230">in</span> <span m="4459320">magnitude,</span> <span
  m="4460370">then</span> <span m="4460570">you</span> <span
  m="4460690">end</span> <span m="4460810">up</span> <span
  m="4460940">getting</span> <span m="4461610">a</span> <span
  m="4461720">requirement</span> <span m="4462230">that</span> <span
  m="4462580">oscillations</span> <span m="4463090">require</span> <span
  m="4463390">a</span> <span m="4463450">larger</span> <span
  m="4463670">n.</span> <span m="4472110">We'll</span> <span
  m="4472530">give</span> <span m="4472670">you</span> <span
  m="4472780">practice</span> <span m="4473300">on</span> <span
  m="4473410">this.</span> <span m="4473640">All right, so</span> <span
  m="4473900">I</span> <span m="4474020">think</span> <span m="4474200">I</span>
  <span m="4474600">wrote</span> <span m="4474920">another--</span> <span
  m="4480620">if</span> <span m="4480820">I</span> <span m="4480870">can
  find</span> <span m="4481270">my--</span> <span m="4486680">you</span> <span
  m="4486820">can</span> <span m="4486910">ask</span> <span
  m="4487180">for</span> <span m="4487380">alpha</span> <span
  m="4487720">equal</span> <span m="4488010">to</span> <span
  m="4488120">2.</span> <span m="4491180">What</span> <span m="4491410">n</span>
  <span m="4493050">required</span> <span m="4493640">for</span> <span
  m="4493760">oscillations.</span></p><p><span m="4505670">I'll</span> <span
  m="4505850">let</span> <span m="4505970">you</span> <span
  m="4506070">start</span> <span m="4506550">playing</span> <span
  m="4506760">with</span> <span m="4506840">that.</span> <span
  m="4507130">And</span> <span m="4507310">I</span> <span
  m="4507370">will</span> <span m="4508590">make</span> <span
  m="4508750">sure</span> <span m="4508910">that</span> <span
  m="4509340">I've</span> <span m="4509660">given</span> <span
  m="4509830">you</span> <span m="4509940">the</span> <span
  m="4510020">right</span> <span m="4510190">alpha</span> <span
  m="4510530">to</span> <span m="4510650">use.</span> <span
  m="4536110">So</span> <span m="4536210">in</span> <span
  m="4536310">this</span> <span m="4536330">case,</span> <span m="4536630">what
  we're</span> <span m="4536770">asking</span> <span m="4537060">is,</span>
  <span m="4537910">instead</span> <span m="4538260">of</span> <span
  m="4538310">having</span> <span m="4538520">really</span> <span
  m="4538950">strong</span> <span m="4539520">maximal</span> <span
  m="4539970">expression,</span> <span m="4540345">if</span> <span
  m="4540720">instead</span> <span m="4541740">expression</span> <span
  m="4542210">is</span> <span m="4542290">just</span> <span
  m="4542460">not</span> <span m="4542840">quite</span> <span
  m="4543370">as</span> <span m="4543580">strong,</span> <span m="4544350">then
  what</span> <span m="4544550">we'll</span> <span m="4544770">find</span> <span
  m="4545040">is that</span> <span m="4545320">you actually</span> <span
  m="4545380">need</span> <span m="4545560">to</span> <span
  m="4545610">have</span> <span m="4545840">a</span> <span
  m="4545890">more</span> <span m="4546240">cooperative</span> <span
  m="4546960">repression</span> <span m="4547240">in</span> <span
  m="4547520">order</span> <span m="4547640">to</span> <span
  m="4547680">get</span> <span m="4547840">oscillations.</span></p><p><span
  m="4549170">And</span> <span m="4549430">that's</span> <span
  m="4549590">just</span> <span m="4549720">because,</span> <span
  m="4549970">if</span> <span m="4550090">alpha</span> <span
  m="4550380">is</span> <span m="4550480">equal</span> <span
  m="4550640">to</span> <span m="4550720">2,</span> <span
  m="4551500">then</span> <span m="4551660">we</span> <span
  m="4551750">can,</span> <span m="4552010">kind of,</span> <span
  m="4552120">figure</span> <span m="4552410">out</span> <span
  m="4552550">what</span> <span m="4552790">p0</span> <span
  m="4552940">is</span> <span m="4553220">equal</span> <span
  m="4553430">to.</span> <span m="4557370">1.</span> <span
  m="4557950">Right.</span> <span m="4558860">Great.</span> <span
  m="4560190">So</span> <span m="4560300">the</span> <span
  m="4560390">fixed</span> <span m="4560630">point</span> <span
  m="4560840">is</span> <span m="4560950">at</span> <span
  m="4561090">one.</span> <span m="4563570">That's</span> <span
  m="4563840">great</span> <span m="4564170">because</span> <span
  m="4564350">this</span> <span m="4564730">we</span> <span
  m="4564840">can</span> <span m="4564970">then</span> <span
  m="4565070">figure</span> <span m="4565470">out.</span> <span
  m="4565660">Right?</span></p><p><span m="4566560">So</span> <span
  m="4566730">this</span> <span m="4566920">is</span> <span m="4567090">1</span>
  <span m="4567520">plus</span> <span m="4567760">1</span> <span
  m="4568020">square.</span> <span m="4568230">That's</span> <span
  m="4568390">a</span> <span m="4568440">four.</span> <span
  m="4569880">1.</span> <span m="4571210">2.</span> <span m="4573800">So</span>
  <span m="4573890">this</span> <span m="4574040">tells</span> <span
  m="4574280">us</span> <span m="4574430">that,</span> <span
  m="4575580">in</span> <span m="4575660">this</span> <span
  m="4575850">case,</span> <span m="4576380">we</span> <span
  m="4576470">need</span> <span m="4576660">to</span> <span
  m="4576710">have</span> <span m="4578660">very</span> <span
  m="4578820">cooperative</span> <span m="4579280">repression.</span> <span
  m="4579710">We</span> <span m="4579800">have</span> <span m="4579940">to have
  an</span> <span m="4580210">n</span> <span m="4580450">greater</span> <span
  m="4580720">than</span> <span m="4581245">around</span> <span
  m="4581520">4</span> <span m="4582660">in</span> <span
  m="4582800">order</span> <span m="4583040">to</span> <span
  m="4583110">get</span> <span m="4583330">oscillations</span> <span
  m="4585400">in</span> <span m="4586000">this</span> <span
  m="4586210">protein</span> <span m="4586560">only</span> <span
  m="4586760">model.</span> <span m="4591345">Yes?</span></p><p><span
  m="4591830">AUDIENCE:</span> <span m="4592315">It</span> <span m="4592800">is
  kind of strange that even for a really big</span> <span
  m="4594255">alpha</span> <span m="4594740">you</span> <span m="4595225">still
  need</span> <span m="4595710">n greater than</span> <span
  m="4596195">sum.</span></p><p><span m="4597650">PROFESSOR:</span> <span
  m="4598140">Yeah,</span> <span m="4598840">right,</span> <span
  m="4599160">right.</span> <span m="4599390">So</span> <span
  m="4599600">this</span> <span m="4599720">is</span> <span
  m="4599790">an</span> <span m="4599870">interesting</span> <span
  m="4600110">question</span> <span m="4600480">that</span> <span
  m="4600810">you</span> <span m="4600950">might</span> <span
  m="4601290">think</span> <span m="4601670">that</span> <span
  m="4602580">for</span> <span m="4603005">a</span> <span
  m="4603430">very</span> <span m="4604430">large</span> <span
  m="4604700">expression</span> <span m="4605130">that</span> <span
  m="4605250">you</span> <span m="4605380">wouldn't</span> <span
  m="4605560">need</span> <span m="4606070">to</span> <span
  m="4606160">have</span> <span m="4607190">cooperative</span> <span
  m="4608100">repression</span> <span m="4608600">at</span> <span
  m="4608670">all.</span> <span m="4609020">Right?</span> <span
  m="4609750">And</span> <span m="4611120">I</span> <span
  m="4611190">can't</span> <span m="4611770">say that</span> <span
  m="4611850">I</span> <span m="4611960">have</span> <span
  m="4612180">any</span> <span m="4612330">wonderful</span> <span
  m="4612930">intuition</span> <span m="4613430">about</span> <span
  m="4613750">this</span> <span m="4614880">because</span> <span
  m="4615908">it,</span> <span m="4617390">somehow,</span> <span
  m="4617710">has</span> <span m="4617930">to</span> <span m="4618040">do</span>
  <span m="4618260">with just</span> <span m="4618440">the</span> <span
  m="4618520">slopes</span> <span m="4619160">of</span> <span
  m="4619230">those</span> <span m="4619480">curves</span> <span
  m="4620020">around</span> <span m="4620370">that fixed</span> <span
  m="4620570">point.</span> <span m="4621780">And</span> <span
  m="4621910">it's</span> <span m="4622030">in</span> <span
  m="4622110">three</span> <span m="4622320">dimensions.</span></p><p><span
  m="4626050">But</span> <span m="4626270">I</span> <span
  m="4626310">think</span> <span m="4626440">that</span> <span
  m="4626830">this</span> <span m="4627060">highlights</span> <span
  m="4627650">that</span> <span m="4628640">it's</span> <span
  m="4628900">a</span> <span m="4629280">priori</span> <span
  m="4629930">if</span> <span m="4630110">you</span> <span m="4630260">go</span>
  <span m="4630470">and</span> <span m="4630690">say,</span> <span
  m="4630840">oh,</span> <span m="4631090">I</span> <span
  m="4631160">want</span> <span m="4631350">to</span> <span
  m="4632290">construct</span> <span m="4632820">this</span> <span
  m="4633000">repressilator,</span> <span m="4634905">it's</span> <span
  m="4635300">maybe</span> <span m="4635590">not even</span> <span
  m="4635880">obvious</span> <span m="4636310">that</span> <span
  m="4636580">you</span> <span m="4636750">want it</span> <span
  m="4637050">to</span> <span m="4637130">be</span> <span
  m="4637260">more</span> <span m="4637590">or</span> <span
  m="4637640">less.</span> <span m="4637960">I</span> <span
  m="4638060">mean,</span> <span m="4638410">you might not even</span> <span
  m="4638500">think</span> <span m="4638780">about</span> <span
  m="4638940">this</span> <span m="4639090">idea</span> <span
  m="4639640">of</span> <span m="4639820">cooperative</span> <span
  m="4640290">repression.</span> <span m="4640870">You</span> <span
  m="4641040">might</span> <span m="4643220">be tempted</span> <span
  m="4643470">to</span> <span m="4643520">think</span> <span
  m="4643690">that</span> <span m="4643820">any</span> <span
  m="4644350">chain</span> <span m="4644800">of</span> <span
  m="4644960">three</span> <span m="4645240">proteins</span> <span
  m="4645770">repressing</span> <span m="4646140">each</span> <span
  m="4646250">other</span> <span m="4647000">just,</span> <span
  m="4647160">kind</span> <span m="4647260">of,</span> <span
  m="4647330">has</span> <span m="4647530">to</span> <span
  m="4647730">oscillate.</span></p><p><span m="4648410">I</span> <span
  m="4648430">mean,</span> <span m="4648750">there's</span> <span
  m="4648900">a</span> <span m="4648960">little</span> <span
  m="4649170">bit</span> <span m="4649280">of</span> <span m="4649350">a</span>
  <span m="4649410">sense.</span> <span m="4649980">And</span> <span
  m="4650280">that's</span> <span m="4650720">the</span> <span m="4650830">logic
  that</span> <span m="4651330">you</span> <span m="4651410">get</span> <span
  m="4652090">at</span> <span m="4653660">if</span> <span m="4653730">you</span>
  <span m="4653810">just</span> <span m="4654000">do</span> <span
  m="4654180">0's</span> <span m="4654570">and</span> <span
  m="4654670">1's.</span> <span m="4654980">If</span> <span
  m="4655140">you</span> <span m="4655200">say,</span> <span
  m="4655340">oh,</span> <span m="4655480">here's</span> <span
  m="4655680">x.</span> <span m="4656030">Here's</span> <span
  m="4656230">y.</span> <span m="4657000">Here's</span> <span
  m="4657220">z.</span> <span m="4657880">And</span> <span
  m="4658030">they're</span> <span m="4658230">repressing</span> <span
  m="4658700">each</span> <span m="4658910">other.</span> <span
  m="4659310">Right?</span> <span m="4660062">And you</span> <span
  m="4660440">say,</span> <span m="4660540">oh,</span> <span
  m="4660660">OK,</span> <span m="4660930">well</span> <span
  m="4661320">if</span> <span m="4661570">I</span> <span
  m="4661670">start</span> <span m="4661910">out</span> <span
  m="4662570">at,</span> <span m="4663530">say,</span> <span m="4663690">0 1
  0</span> <span m="4665470">and</span> <span m="4665970">you</span> <span
  m="4666090">say,</span> <span m="4666250">OK,</span> <span
  m="4666580">that's</span> <span m="4666810">all</span> <span
  m="4666980">fine.</span> <span m="4667950">But</span> <span m="4668110">OK,
  so</span> <span m="4668300">this</span> <span m="4668710">is</span> <span
  m="4668800">repressing.</span></p><p><span m="4669400">And</span> <span
  m="4669560">it's</span> <span m="4669620">OK,</span> <span
  m="4669790">but</span> <span m="4670090">this</span> <span
  m="4670330">guy</span> <span m="4670510">wasn't</span> <span
  m="4670740">repressing</span> <span m="4671030">this</span> <span
  m="4671170">one.</span> <span m="4671340">So</span> <span
  m="4671410">now</span> <span m="4671530">we</span> <span
  m="4671610">get</span> <span m="4671700">a</span> <span m="4671760">1,</span>
  <span m="4671970">1,</span> <span m="4672090">0,</span> <span
  m="4673170">maybe.</span> <span m="4674830">Then</span> <span
  m="4674970">you</span> <span m="4675040">say, oh,</span> <span
  m="4675390">OK.</span> <span m="4675490">Well</span> <span
  m="4675590">now</span> <span m="4675770">this</span> <span
  m="4675990">guy</span> <span m="4676250">starts</span> <span
  m="4676550">repressing</span> <span m="4676880">this</span> <span
  m="4677050">one.</span> <span m="4677870">So</span> <span
  m="4678040">now</span> <span m="4678290">it</span> <span
  m="4678410">gives</span> <span m="4678610">us</span> <span
  m="4678740">a</span> <span m="4678800">1</span> <span m="4679110">0</span>
  <span m="4679420">0.</span> <span m="4680170">And</span> <span
  m="4680650">what</span> <span m="4680740">you</span> <span
  m="4680800">see</span> <span m="4680960">is</span> <span
  m="4681120">that,</span> <span m="4681650">over</span> <span
  m="4681840">these</span> <span m="4682070">two</span> <span
  m="4682370">steps,</span> <span m="4683510">the</span> <span
  m="4684110">on</span> <span m="4684670">protein</span> <span
  m="4685410">has</span> <span m="4685550">shifted. And</span> <span
  m="4685960">indeed,</span> <span m="4686380">that's</span> <span
  m="4686570">going</span> <span m="4686670">to</span> <span
  m="4686720">continue</span> <span m="4687120">going</span> <span
  m="4687310">all</span> <span m="4687410">the</span> <span
  m="4687460">way</span> <span m="4687560">around.</span></p><p><span
  m="4688250">So</span> <span m="4689020">from</span> <span
  m="4689170">this</span> <span m="4691210">Boolean</span> <span
  m="4691740">logic</span> <span m="4692130">kind</span> <span
  m="4692260">of</span> <span m="4692320">perspective,</span> <span
  m="4692720">you</span> <span m="4692810">might</span> <span
  m="4693040">think</span> <span m="4693260">that</span> <span
  m="4693430">any</span> <span m="4694600">three</span> <span
  m="4695020">proteins</span> <span m="4695670">mutually</span> <span
  m="4695930">repressing each</span> <span m="4696430">other</span> <span
  m="4696570">just</span> <span m="4697120">has</span> <span
  m="4697440">to</span> <span m="4697520">oscillate.</span> <span
  m="4698680">And it's</span> <span m="4698860">only</span> <span
  m="4699160">by</span> <span m="4699390">looking</span> <span
  m="4699650">at</span> <span m="4699790">things</span> <span
  m="4699970">a</span> <span m="4700020">little</span> <span
  m="4700200">bit</span> <span m="4700290">more</span> <span
  m="4700440">carefully</span> <span m="4700860">that</span> <span
  m="4701030">you</span> <span m="4701130">say,</span> <span
  m="4701280">oh,</span> <span m="4701470">well,</span> <span
  m="4701650">we</span> <span m="4701750">have</span> <span
  m="4701890">to</span> <span m="4701960">actually</span> <span
  m="4702180">worry</span> <span m="4703040">about</span> <span
  m="4704110">this</span> <span m="4704320">that</span> <span
  m="4705170">you</span> <span m="4705310">really</span> <span
  m="4705520">have</span> <span m="4705710">to</span> <span
  m="4705780">think</span> <span m="4706010">about</span> <span
  m="4706440">you</span> <span m="4706570">want</span> <span
  m="4706760">to</span> <span m="4708140">choose</span> <span
  m="4709440">some</span> <span m="4709610">transcription</span> <span
  m="4710110">factors</span> <span m="4710450">that</span> <span
  m="4710580">are</span> <span m="4711460">multimerizing</span> <span
  m="4711690">and</span> <span m="4712260">cooperatively</span> <span
  m="4713020">repressing the next</span> <span m="4713490">protein</span> <span
  m="4714540">just</span> <span m="4714810">to</span> <span
  m="4714860">have</span> <span m="4715040">some</span> <span
  m="4715180">reasonable</span> <span m="4715520">shot</span> <span
  m="4716400">at</span> <span m="4716660">having</span> <span
  m="4716930">this</span> <span m="4717100">thing</span> <span
  m="4718050">actually</span> <span m="4718350">oscillate.</span></p><p><span
  m="4720925">AUDIENCE: So in</span> <span m="4721380">this,</span> <span
  m="4722520">we might still</span> <span m="4722890">be</span> <span
  m="4723110">able--</span> <span m="4723560">I mean,</span> <span
  m="4724010">oscillations</span> <span m="4725010">like</span> <span
  m="4725260">this</span> <span m="4725540">might still</span> <span
  m="4725820">[INAUDIBLE]</span> <span m="4727700">but</span> <span
  m="4727890">just</span> <span m="4728676">not</span> <span
  m="4729142">like,</span> <span m="4729608">maybe,</span> <span
  m="4730074">oscillations</span> <span m="4730540">around some stable</span>
  <span m="4731006">fix point</span> <span m="4731472">or something.</span>
  <span m="4731938">Like,</span> <span m="4732870">they're</span> <span
  m="4733320">just</span> <span m="4733460">not</span> <span m="4733720">limit
  cycle</span> <span m="4733980">oscillations.</span> <span m="4736577">Do you
  think that</span> <span m="4737064">in a</span> <span
  m="4737551">[INAUDIBLE]</span> <span m="4738525">there would</span> <span
  m="4739012">probably still be</span> <span m="4739499">some kind of</span>
  <span m="4739986">oscillations somewhere.</span> <span m="4740960">Just not
  this</span> <span m="4741934">beautiful</span> <span m="4742421">limit</span>
  <span m="4742908">cycle kind.</span></p><p><span m="4744370">PROFESSOR:
  Yeah,</span> <span m="4744750">my</span> <span
  m="4745230">understanding</span> <span m="4745720">is</span> <span
  m="4745850">that</span> <span m="4746030">in,</span> <span
  m="4746410">for</span> <span m="4746510">example,</span> <span
  m="4747360">this</span> <span m="4748730">protein</span> <span
  m="4749020">only</span> <span m="4749410">model</span> <span m="4749820">of
  the</span> <span m="4749910">repressilator</span> <span
  m="4750590">that</span> <span m="4751230">if</span> <span
  m="4751470">you</span> <span m="4753260">do</span> <span
  m="4753400">not</span> <span m="4753610">have</span> <span
  m="4753790">cooperative</span> <span m="4754260">repression,</span> <span
  m="4754730">then</span> <span m="4754900">it</span> <span
  m="4755020">really</span> <span m="4756090">just</span> <span
  m="4756280">goes</span> <span m="4756420">to</span> <span
  m="4756480">that</span> <span m="4756640">stable</span> <span
  m="4757010">fixed</span> <span m="4757250">point.</span> <span
  m="4758090">Of</span> <span m="4758170">course,</span> <span
  m="4758340">you</span> <span m="4758410">have</span> <span
  m="4758510">to</span> <span m="4758590">worry</span> <span
  m="4758800">about</span> <span m="4759040">maybe</span> <span
  m="4759570">these</span> <span m="4759720">noise-induced</span> <span
  m="4760250">oscillation</span> <span m="4761020">ideas.</span> <span
  m="4762200">But</span> <span m="4762500">at</span> <span
  m="4762560">least</span> <span m="4762740">within</span> <span
  m="4762980">the</span> <span m="4763090">realm</span> <span
  m="4763410">of</span> <span m="4763560">the</span> <span
  m="4763880">deterministic,</span> <span m="4764690">differential</span> <span
  m="4765080">equations,</span> <span m="4766030">then</span> <span
  m="4767770">the</span> <span m="4767850">system</span> <span
  m="4768130">just</span> <span m="4768330">goes</span> <span
  m="4768650">to</span> <span m="4768740">that</span> <span
  m="4768920">internal</span> <span m="4769390">fixed</span> <span
  m="4769640">point that's</span> <span m="4769910">specified</span> <span
  m="4770430">by</span> <span m="4770540">this.</span> <span
  m="4774400">Question?</span></p><p><span m="4774680">AUDIENCE:</span> <span
  m="4775165">Can we think</span> <span m="4775650">like</span> <span
  m="4776135">that the</span> <span m="4779040">cooperation,</span> <span
  m="4781280">sort of,</span> <span m="4781750">introduced</span> <span
  m="4782220">delay?</span></p><p><span m="4784570">PROFESSOR:</span> <span
  m="4785040">That's</span> <span m="4785680">an</span> <span
  m="4785750">interesting</span> <span m="4786040">question.</span> <span
  m="4787130">Whether</span> <span m="4787590">cooperativity,</span> <span
  m="4788180">maybe,</span> <span m="4788510">is</span> <span
  m="4788620">introducing</span> <span m="4788960">a</span> <span
  m="4789070">delay.</span> <span m="4790290">And</span> <span
  m="4790430">that's</span> <span m="4790610">because,</span> <span
  m="4791410">after</span> <span m="4791690">the</span> <span
  m="4791770">proteins</span> <span m="4792100">are</span> <span
  m="4792150">made,</span> <span m="4792400">maybe it</span> <span
  m="4792640">takes</span> <span m="4792800">some</span> <span
  m="4792900">extra</span> <span m="4793140">time</span> <span
  m="4793800">to</span> <span m="4793940">dimer</span> <span
  m="4794350">and</span> <span m="4794480">so</span> <span
  m="4794620">forth.</span></p><p><span m="4795290">So</span> <span
  m="4795320">that</span> <span m="4795570">statement</span> <span
  m="4795950">may</span> <span m="4796140">be</span> <span
  m="4796300">true.</span> <span m="4798000">But</span> <span
  m="4798180">it's</span> <span m="4798330">not</span> <span
  m="4798730">relevant.</span> <span m="4799950">OK?</span> <span
  m="4800530">And</span> <span m="4801170">I</span> <span
  m="4801210">think</span> <span m="4801350">this</span> <span
  m="4801490">is</span> <span m="4801570">very</span> <span
  m="4801700">important.</span> <span m="4802220">This</span> <span
  m="4802420">model</span> <span m="4802820">has</span> <span
  m="4802900">certainly</span> <span m="4803430">not</span> <span
  m="4804390">taken</span> <span m="4804660">that</span> <span
  m="4804800">into</span> <span m="4804970">account.</span> <span
  m="4806170">So</span> <span m="4806460">the</span> <span
  m="4806550">mechanism</span> <span m="4807090">that's</span> <span
  m="4807290">here</span> <span m="4807640">is</span> <span
  m="4807790">not</span> <span m="4808270">what</span> <span
  m="4808410">you're</span> <span m="4808610">saying.</span></p><p><span
  m="4809200">But</span> <span m="4809300">it</span> <span
  m="4809360">may</span> <span m="4809480">be</span> <span
  m="4809720">true</span> <span m="4809960">that,</span> <span
  m="4810120">for</span> <span m="4810230">any</span> <span
  m="4810380">experimental</span> <span m="4810920">system,</span> <span
  m="4811440">such</span> <span m="4812680">delay</span> <span
  m="4813360">from</span> <span m="4813550">dimerization</span> <span
  m="4814160">is</span> <span m="4814530">relevant</span> <span
  m="4814850">and</span> <span m="4814910">helps</span> <span
  m="4815120">you</span> <span m="4815180">get</span> <span
  m="4815300">oscillations.</span> <span m="4815810">Right?</span> <span
  m="4816280">But</span> <span m="4816670">at</span> <span
  m="4816750">least</span> <span m="4816980">within</span> <span
  m="4817560">the</span> <span m="4817940">realm</span> <span
  m="4818210">of</span> <span m="4818320">this</span> <span
  m="4818530">model,</span> <span m="4819180">we</span> <span
  m="4819340">have</span> <span m="4819460">very</span> <span
  m="4819670">much</span> <span m="4819910">not</span> <span
  m="4820280">included</span> <span m="4820710">any</span> <span
  m="4820910">sort</span> <span m="4821060">of</span> <span
  m="4821120">delay</span> <span m="4821480">associated</span> <span
  m="4821910">with</span> <span m="4822010">dimerization</span> <span
  m="4822630">or</span> <span m="4822700">anything.</span> <span
  m="4823400">So</span> <span m="4823470">that</span> <span
  m="4823730">is</span> <span m="4823970">very</span> <span
  m="4824180">much</span> <span m="4824380">not</span> <span
  m="4824700">the</span> <span m="4824770">explanation</span> <span
  m="4825340">for</span> <span m="4825470">why</span> <span
  m="4826940">dimerization</span> <span m="4827510">leads to</span> <span
  m="4827720">oscillations</span> <span m="4828140">here.</span></p><p><span
  m="4828300">And</span> <span m="4828530">I</span> <span
  m="4828650">think</span> <span m="4829210">this</span> <span
  m="4829390">is</span> <span m="4829790">a</span> <span
  m="4830160">wider</span> <span m="4830480">point</span> <span
  m="4830700">that</span> <span m="4830980">it's</span> <span
  m="4831390">very</span> <span m="4831690">important</span> <span
  m="4832420">always</span> <span m="4832890">to</span> <span
  m="4832960">keep</span> <span m="4833170">track</span> <span
  m="4833460">of</span> <span m="4833580">which</span> <span
  m="4833800">effects</span> <span m="4833860">you've</span> <span
  m="4834280">included</span> <span m="4835140">in</span> <span
  m="4835250">any</span> <span m="4835410">given</span> <span
  m="4835610">analysis and</span> <span m="4836020">which</span> <span
  m="4836200">ones</span> <span m="4836360">are</span> <span
  m="4836400">not.</span> <span m="4837900">And</span> <span
  m="4838040">it's</span> <span m="4838150">very,</span> <span
  m="4838480">very</span> <span m="4838590">common.</span> <span
  m="4840040">There</span> <span m="4840140">are</span> <span
  m="4840170">many</span> <span m="4840390">things</span> <span
  m="4840570">that</span> <span m="4840650">are</span> <span
  m="4840750">true.</span> <span m="4841470">But</span> <span
  m="4841590">they</span> <span m="4841660">may</span> <span
  m="4841790">not</span> <span m="4842010">actually</span> <span
  m="4842430">be</span> <span m="4843170">relevant</span> <span
  m="4843610">for</span> <span m="4843720">the</span> <span
  m="4843930">discussion</span> <span m="4844390">at</span> <span
  m="4844460">hand.</span></p><p><span m="4845110">And</span> <span
  m="4845210">I</span> <span m="4845250">think,</span> <span
  m="4845710">in</span> <span m="4845810">those</span> <span
  m="4845990">situations,</span> <span m="4846360">it's</span> <span
  m="4846690">easy</span> <span m="4846860">to</span> <span
  m="4846920">get</span> <span m="4847220">mixed</span> <span
  m="4847470">up</span> <span m="4847930">because</span> <span
  m="4849780">it</span> <span m="4849920">still</span> <span
  m="4850090">is</span> <span m="4850180">true,</span> <span
  m="4851810">even</span> <span m="4852010">if</span> <span
  m="4852970">it's</span> <span m="4853110">not</span> <span
  m="4853260">what's</span> <span m="4853370">driving</span> <span
  m="4853590">the</span> <span m="4853670">effect that</span> <span
  m="4854060">is</span> <span m="4854220">being,</span> <span
  m="4855050">in</span> <span m="4855150">this</span> <span
  m="4855270">case,</span> <span m="4855700">analyzed.</span> <span
  m="4857800">We're</span> <span m="4857930">out</span> <span
  m="4858000">of</span> <span m="4858050">time.</span> <span
  m="4858280">So</span> <span m="4858390">we</span> <span
  m="4858460">should</span> <span m="4858730">quit.</span> <span
  m="4859190">On</span> <span m="4859960">Tuesday,</span> <span
  m="4860370">we'll</span> <span m="4860570">start</span> <span
  m="4861250">by</span> <span m="4861440">wrapping</span> <span
  m="4861870">up</span> <span m="4862070">the</span> <span
  m="4862260">oscillation</span> <span m="4862750">discussion</span> <span
  m="4863170">by</span> <span m="4863800">talking</span> <span
  m="4864050">about</span> <span m="4865020">other</span> <span
  m="4865250">oscillator</span> <span m="4865720">designs</span> <span
  m="4866480">that</span> <span m="4866610">allow</span> <span
  m="4867060">for</span> <span m="4868240">robustness</span> <span
  m="4868860">and</span> <span m="4869160">tunability.</span> <span
  m="4869460">OK?</span></p>
embedded_media:
  - uid: 8f88f986e7b7e0cde3f70eca30191814
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: xNNxlsY-F-s
  - uid: 6bbb7ac50d1a3af90a9cce37efc81a8c
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/xNNxlsY-F-s/default.jpg'
  - uid: bcb95dd393290cadf3138f5aa29e75b2
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1020693367'
  - uid: 788000a7a9f7ef720119e04f6cf40ed6
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT8.591JF14/MIT8_591JF14_lec05_300k.mp4'
  - uid: 4b00612b0a7d2235e59515a4bfe523ed
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: xNNxlsY-F-s
  - uid: 5e2facabcf05e33e88c203dc73962c22
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: xNNxlsY-F-s.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/oscillatory-genetic-networks/xNNxlsY-F-s.srt
  - uid: c0988b28f3818790cc10d280b24ca706
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: xNNxlsY-F-s.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/oscillatory-genetic-networks/xNNxlsY-F-s.pdf
  - uid: 45e0589e530168e809439b37bc4a9568
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0c2e25f54a73ce540742dfbac6ce5172
    parent_uid: 483f31c40b541821b8d0f3daee0f195f
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
