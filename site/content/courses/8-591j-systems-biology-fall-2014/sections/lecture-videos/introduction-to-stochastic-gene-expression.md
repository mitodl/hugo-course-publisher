---
title: Introduction to Stochastic Gene Expression
uid: 3819cba968901df779b5023a5d4ad6f3
parent_uid: 2c19124a07b81891918cf65ff26fbc3c
technical_location: >-
  https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/introduction-to-stochastic-gene-expression
short_url: introduction-to-stochastic-gene-expression
inline_embed_id: 70767587introductiontostochasticgeneexpression97457179
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture by Prof. Jeff Gore centers on
  discussion of one of his favorite scientific papers: &quot;<a
  href="http://dx.doi.org/10.1126/science.1119623">Probing Gene Expression in
  Live Cells, One Protein Molecule at a Time</a>,&quot; by Yu et al.</p>
  <p><strong>Instructor:</strong> Prof. Jeff Gore</p>
related_resources_text: ''
transcript: >-
  <p><span m="70">The</span> <span m="190">following</span> <span
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
  m="21030">PROFESSOR: Today,</span> <span m="21900">as</span> <span
  m="22090">I</span> <span m="22230">mentioned</span> <span m="22740">to</span>
  <span m="22800">you</span> <span m="23690">in</span> <span
  m="23840">last</span> <span m="24160">lecture,</span> <span
  m="24710">we're</span> <span m="24830">going</span> <span m="24920">to</span>
  <span m="25030">really</span> <span m="25260">be</span> <span
  m="25390">focusing</span> <span m="25920">in</span> <span
  m="26380">quite</span> <span m="26720">some</span> <span
  m="26930">depth</span> <span m="27640">into</span> <span m="27800">this</span>
  <span m="27970">paper</span> <span m="28210">by</span> <span
  m="28340">Sunney</span> <span m="28660">Xie.</span> <span m="29370">So</span>
  <span m="29740">I</span> <span m="29990">would</span> <span
  m="30100">say</span> <span m="30210">that</span> <span m="30340">it</span>
  <span m="30450">is</span> <span m="31260">one</span> <span m="31540">of</span>
  <span m="31640">my</span> <span m="31920">all</span> <span
  m="32180">time</span> <span m="32580">favorite</span> <span
  m="33060">papers.</span> <span m="33940">And</span> <span m="34180">in</span>
  <span m="34250">particular</span> <span m="34820">from</span> <span
  m="34980">the</span> <span m="35040">standpoint</span> <span
  m="35490">of</span> <span m="35600">discussing</span> <span m="36130">a</span>
  <span m="36190">paper</span> <span m="36500">in</span> <span
  m="36570">class,</span> <span m="37300">I</span> <span m="37380">think</span>
  <span m="37570">it</span> <span m="37690">is</span> <span
  m="38900">absolutely</span> <span m="39420">wonderful.</span></p><p><span
  m="40190">It</span> <span m="40980">is,</span> <span m="41900">I</span> <span
  m="42040">think,</span> <span m="42180">clearly</span> <span
  m="42520">written.</span> <span m="43140">It</span> <span
  m="43420">explains</span> <span m="44660">why</span> <span
  m="44870">that</span> <span m="44990">did</span> <span m="45190">all</span>
  <span m="45290">these</span> <span m="45500">things.</span> <span
  m="46270">And</span> <span m="46430">they</span> <span
  m="46590">checked</span> <span m="47250">all</span> <span
  m="47540">sorts</span> <span m="47900">of</span> <span
  m="48180">possible</span> <span m="48680">sources</span> <span
  m="49130">of</span> <span m="50830">perhaps</span> <span m="51220">being
  lead</span> <span m="51390">astray.</span> <span m="52390">And</span> <span
  m="52620">I</span> <span m="52820">think</span> <span m="53000">it</span>
  <span m="53240">was</span> <span m="53340">a</span> <span
  m="53380">huge</span> <span m="53600">amount</span> <span m="53770">of</span>
  <span m="53850">work,</span> <span m="54130">and</span> <span
  m="54350">it</span> <span m="54460">was</span> <span m="54600">a</span> <span
  m="54940">technical</span> <span m="55430">tour de force</span> <span
  m="56190">when</span> <span m="56310">it</span> <span m="56400">came</span>
  <span m="56610">out.</span></p><p><span m="57410">So</span> <span
  m="58340">before</span> <span m="58840">this,</span> <span m="59330">I</span>
  <span m="59410">would</span> <span m="59540">say</span> <span
  m="59700">single</span> <span m="60120">molecule</span> <span
  m="60570">biophysics,</span> <span m="61450">by</span> <span
  m="61550">which</span> <span m="61760">I</span> <span m="61800">mean</span>
  <span m="62040">both</span> <span m="63900">single</span> <span
  m="64180">molecule</span> <span m="64840">fluorescence,</span> <span
  m="65540">i.e.,</span> <span m="65710">detection,</span> <span
  m="66740">as</span> <span m="66940">well</span> <span m="67160">as</span>
  <span m="67230">single</span> <span m="67450">molecule</span> <span
  m="67730">manipulation,</span> <span m="68480">were</span> <span
  m="69450">almost</span> <span m="69850">exclusively</span> <span
  m="70562">in</span> <span m="71180">vitro</span> <span
  m="71730">techniques.</span> <span m="72590">So</span> <span
  m="72670">we</span> <span m="72770">took</span> <span
  m="73070">purified</span> <span m="73530">components,</span> <span
  m="74390">and</span> <span m="74540">then</span> <span m="74720">we</span>
  <span m="75320">studied</span> <span m="76050">the</span> <span
  m="76210">fluorescence,</span> <span m="76850">or</span> <span
  m="76930">the</span> <span m="77490">mechanical</span> <span
  m="77960">properties</span> <span m="78350">and</span> <span
  m="78440">so</span> <span m="78560">forth,</span> <span m="78840">of</span>
  <span m="79600">these</span> <span m="79750">molecules</span> <span
  m="80670">in</span> <span m="82080">the</span> <span
  m="82170">equivalent</span> <span m="82520">of</span> <span m="82580">a</span>
  <span m="82650">test</span> <span m="82900">tube.</span></p><p><span
  m="83180">But</span> <span m="83590">really,</span> <span m="83810">in</span>
  <span m="84050">glass</span> <span m="84330">slides,</span> <span
  m="84920">where</span> <span m="85080">we</span> <span m="85230">just</span>
  <span m="85500">had</span> <span m="85590">to</span> <span
  m="85650">purified</span> <span m="85990">components,</span> <span
  m="86670">so no</span> <span m="86780">know</span> <span
  m="87010">living</span> <span m="87260">cells.</span> <span
  m="88100">And</span> <span m="88370">I</span> <span m="88410">think</span>
  <span m="88540">we</span> <span m="88640">got</span> <span m="88760">a</span>
  <span m="88810">lot</span> <span m="88970">of</span> <span
  m="89020">insight</span> <span m="89390">into</span> <span
  m="89630">the</span> <span m="89720">dynamics</span> <span m="90290">of</span>
  <span m="90910">molecular</span> <span m="91330">motors,</span> <span
  m="91950">transcription,</span> <span m="92760">translation,</span> <span
  m="93050">and</span> <span m="93340">so</span> <span m="93520">forth.</span>
  <span m="95040">And</span> <span m="95300">I</span> <span
  m="95360">think</span> <span m="95520">that</span> <span m="95670">many</span>
  <span m="96060">of</span> <span m="96160">us</span> <span m="96520">in</span>
  <span m="96630">the</span> <span m="96710">field</span> <span
  m="97200">thought</span> <span m="97540">that</span> <span
  m="98410">this</span> <span m="99130">paper</span> <span m="99600">was</span>
  <span m="99800">essentially</span> <span m="100750">not</span> <span
  m="101100">possible.</span></p><p><span m="102700">I</span> <span
  m="104060">did</span> <span m="104170">my</span> <span m="104270">Ph.D</span>
  <span m="106000">in the</span> <span m="106230">single molecule</span> <span
  m="106590">area,</span> <span m="107030">from</span> <span
  m="107120">of</span> <span m="107400">2002</span> <span m="107875">to</span>
  <span m="108350">2005,</span> <span m="108980">I</span> <span
  m="109030">graduated.</span> <span m="110140">And</span> <span
  m="111320">indeed,</span> <span m="111650">I</span> <span
  m="112410">did</span> <span m="112520">a</span> <span m="112580">little</span>
  <span m="112780">bit</span> <span m="112880">of</span> <span
  m="112960">work</span> <span m="113230">in</span> <span m="113480">this</span>
  <span m="114030">area</span> <span m="114420">of</span> <span
  m="114830">single</span> <span m="115100">molecule</span> <span
  m="115360">fluorescence,</span> <span m="115830">and</span> <span
  m="116280">I</span> <span m="116390">was</span> <span
  m="116920">basically</span> <span m="117410">unsuccessful.</span> <span
  m="118070">Even</span> <span m="118550">just</span> <span
  m="118800">doing</span> <span m="119080">this</span> <span
  m="119320">kind</span> <span m="119470">of</span> <span m="119560">an</span>
  <span m="119690">in</span> <span m="119830">vitro</span> <span
  m="120170">setting.</span> <span m="120860">My</span> <span
  m="121060">lab</span> <span m="122360">is</span> <span
  m="122630">[INAUDIBLE],</span> <span m="123340">we</span> <span
  m="123580">did</span> <span m="124900">primarily</span> <span
  m="125280">single</span> <span m="125490">molecule</span> <span
  m="125740">manipulation.</span> <span m="126360">We</span> <span
  m="127930">were</span> <span m="128050">playing</span> <span
  m="128289">with</span> <span m="128639">the</span> <span
  m="129340">single</span> <span m="129770">molecule</span> <span
  m="130060">fluorescence .</span> <span m="130550">And</span> <span
  m="130810">eventually,</span> <span m="131920">people</span> <span
  m="132310">in</span> <span m="132400">the lab</span> <span
  m="132610">got</span> <span m="132750">it to</span> <span
  m="132900">work.</span> <span m="133510">But</span> <span m="133610">I
  would</span> <span m="133740">say</span> <span m="133840">that</span> <span
  m="133930">my</span> <span m="134170">foray</span> <span m="134560">into
  it</span> <span m="134870">was maybe</span> <span
  m="135170">unsuccessful.</span></p><p><span m="136540">So</span> <span
  m="136660">I had</span> <span m="136870">a</span> <span m="137190">very</span>
  <span m="137560">healthy</span> <span m="138920">respect</span> <span
  m="139290">for</span> <span m="139330">the</span> <span
  m="139390">challenges</span> <span m="139880">that</span> <span
  m="139970">are</span> <span m="140010">involved</span> <span
  m="140390">in</span> <span m="140510">doing</span> <span
  m="140810">single</span> <span m="141060">molecule</span> <span
  m="141380">fluorescence.</span> <span m="142520">And</span> <span
  m="143080">the</span> <span m="143140">thought</span> <span
  m="143370">of</span> <span m="143780">doing</span> <span
  m="144000">this</span> <span m="144160">in</span> <span m="144250">live</span>
  <span m="144530">cells</span> <span m="145110">was</span> <span
  m="147420">very</span> <span m="147860">scary.</span> <span m="148740">And
  I'd</span> <span m="149010">say that many</span> <span m="149170">of</span>
  <span m="149230">us</span> <span m="149340">thought</span> <span
  m="149600">it</span> <span m="149660">was</span> <span m="149960">not</span>
  <span m="150140">going</span> <span m="150220">to</span> <span
  m="150270">work.</span> <span m="150900">And</span> <span
  m="151030">indeed,</span> <span m="151740">this</span> <span
  m="152460">project</span> <span m="153010">was</span> <span
  m="153110">one--</span> <span m="153940">and</span> <span
  m="154180">the</span> <span m="154270">general</span> <span
  m="154530">goal</span> <span m="154880">of</span> <span
  m="154970">studying</span> <span m="156240">a</span> <span
  m="156650">single</span> <span m="156970">molecule</span> <span
  m="157280">dynamics</span> <span m="157640">in</span> <span
  m="157710">living</span> <span m="157900">cells,</span> <span m="158220">is
  something</span> <span m="158460">that's</span> <span
  m="158630">Sunney's</span> <span m="158950">group</span> <span
  m="159130">had</span> <span m="159220">been</span> <span
  m="159330">working</span> <span m="159590">on,</span> <span
  m="159720">I</span> <span m="159750">think,</span> <span m="159920">for</span>
  <span m="160010">many</span> <span m="160270">years.</span></p><p><span
  m="160930">And</span> <span m="161270">it</span> <span
  m="161580">indeed</span> <span m="161900">was</span> <span
  m="162160">very</span> <span m="162360">hard.</span> <span
  m="163060">But</span> <span m="164200">then</span> <span
  m="164320">there</span> <span m="164400">were</span> <span
  m="164450">these</span> <span m="164630">two</span> <span
  m="164750">papers</span> <span m="165150">they</span> <span
  m="165230">came</span> <span m="165470">out,</span> <span
  m="165860">both</span> <span m="166050">from</span> <span
  m="166160">Sunnye's</span> <span m="166490">lab</span> <span
  m="166770">actually.</span> <span m="167850">And</span> <span
  m="168090">they</span> <span m="168170">came</span> <span
  m="168380">out</span> <span m="169190">both,</span> <span m="169520">i think,
  in</span> <span m="169740">January</span> <span m="170200">of</span> <span
  m="170670">2006,</span> <span m="171380">one</span> <span m="171620">in</span>
  <span m="171690">science,</span> <span m="172030">one</span> <span
  m="172190">in</span> <span m="172240">Nature,</span> <span
  m="172790">demonstrating</span> <span m="173740">not</span> <span
  m="174110">one</span> <span m="174360">way</span> <span m="174640">of</span>
  <span m="174990">doing</span> <span m="175190">this,</span> <span
  m="175350">but rather</span> <span m="175650">two</span> <span
  m="175850">ways</span> <span m="176730">of</span> <span
  m="176840">getting</span> <span m="177080">single</span> <span
  m="177360">molecule</span> <span m="177990">dynamics</span> <span
  m="178610">inside</span> <span m="178860">living</span> <span
  m="179070">cells.</span></p><p><span m="180280">So</span> <span
  m="180700">today,</span> <span m="181020">obviously,</span> <span
  m="181300">we're</span> <span m="181480">going</span> <span
  m="181560">to</span> <span m="181600">be</span> <span
  m="181710">primarily</span> <span m="182040">talking</span> <span
  m="182230">about</span> <span m="182430">this</span> <span
  m="182880">paper</span> <span m="183100">by</span> <span
  m="183260">[INAUDIBLE].</span> <span m="184350">But</span> <span
  m="184800">if</span> <span m="184930">you're</span> <span
  m="185140">interested in</span> <span m="185260">these</span> <span
  m="185390">things,</span> <span m="185580">I</span> <span
  m="185650">encourage</span> <span m="185930">you</span> <span
  m="185990">to</span> <span m="186270">check</span> <span m="186480">out</span>
  <span m="186630">[INAUDIBLE]</span> <span m="187190">paper,</span> <span
  m="187420">which</span> <span m="187590">also</span> <span
  m="189190">published,</span> <span m="189590">[INAUDIBLE],</span> <span
  m="190230">at the</span> <span m="190340">same</span> <span
  m="190530">time.</span> <span m="191120">And</span> <span
  m="191320">that</span> <span m="191480">was</span> <span
  m="191730">based</span> <span m="192060">on</span> <span m="192340">a</span>
  <span m="192420">microfluidic</span> <span m="193180">assay,</span> <span
  m="194190">where</span> <span m="194990">instead</span> <span
  m="195270">of</span> <span m="195340">doing</span> <span m="195600">the</span>
  <span m="195700">single</span> <span m="196090">molecule</span> <span
  m="196440">fluorescence</span> <span m="197400">within</span> <span
  m="197830">cells,</span> <span m="198130">instead</span> <span
  m="199290">by</span> <span m="199450">trapping</span> <span
  m="199850">the</span> <span m="199930">cells</span> <span m="200260">in</span>
  <span m="200370">small</span> <span m="200630">volumes,</span> <span
  m="201290">and</span> <span m="201420">then</span> <span
  m="201580">using</span> <span m="202170">more</span> <span
  m="202350">traditional</span> <span m="202840">enzymatic</span> <span
  m="203380">assays,</span> <span m="203760">such</span> <span
  m="203930">as</span> <span m="204570">this</span> <span m="205090">beta</span>
  <span m="205270">[INAUDIBLE]</span> <span m="205570">assay,</span> <span
  m="206720">enclosed</span> <span m="207170">in a</span> <span
  m="207260">small</span> <span m="207490">volume,</span> <span
  m="207790">it's</span> <span m="207960">almost</span> <span
  m="208170">possible</span> <span m="208630">to</span> <span
  m="208750">study,</span> <span m="209270">once</span> <span
  m="209510">again,</span> <span m="210020">these</span> <span m="210190">sort
  of</span> <span m="210505">busting</span> <span m="210820">dynamics</span>
  <span m="212080">in</span> <span m="212180">E. coli.</span> <span
  m="212580">And</span> <span m="212690">also</span> <span
  m="213000">they</span> <span m="213090">did</span> <span m="213260">it</span>
  <span m="213690">in</span> <span m="213830">yeast,</span> <span
  m="214050">and</span> <span m="214140">demonstrated</span> <span
  m="214530">that it's</span> <span m="214730">kind</span> <span
  m="214860">of</span> <span m="214930">a</span> <span
  m="215360">generally</span> <span m="215670">practical</span> <span
  m="216410">assay.</span></p><p><span m="217970">So</span> <span
  m="218210">if</span> <span m="218690">you're</span> <span
  m="218870">interested</span> <span m="219210">in</span> <span
  m="219290">those</span> <span m="219430">papers,</span> <span
  m="219680">I</span> <span m="219880">encourage you</span> <span
  m="220130">to</span> <span m="220220">check</span> <span m="220420">it</span>
  <span m="220490">out.</span> <span m="221770">But</span> <span
  m="222430">for</span> <span m="222560">me,</span> <span m="222930">this</span>
  <span m="223080">was</span> <span m="223260">really</span> <span
  m="224100">an</span> <span m="224320">eye-opening</span> <span
  m="224660">thing.</span> <span m="224980">So I</span> <span
  m="225670">graduated</span> <span m="226940">with</span> <span
  m="227100">my</span> <span m="227230">Ph.D.</span> <span m="227800">in</span>
  <span m="228110">December</span> <span m="228375">of</span> <span
  m="228640">2005,</span> <span m="229400">and</span> <span
  m="230760">then</span> <span m="231350">I</span> <span m="231810">went</span>
  <span m="231960">to</span> <span m="232030">a</span> <span
  m="232090">conference</span> <span m="232760">in</span> <span
  m="234280">Cambridge,</span> <span m="234780">England,</span> <span
  m="235320">where</span> <span m="235740">where</span> <span
  m="235870">Sunney</span> <span m="236170">presented</span> <span
  m="237270">this</span> <span m="237390">work.</span> <span
  m="237660">And</span> <span m="238220">I</span> <span m="238450">think</span>
  <span m="238580">that</span> <span m="238710">it</span> <span
  m="239070">really</span> <span m="239970">blew</span> <span
  m="240360">many</span> <span m="240590">of</span> <span m="240660">our</span>
  <span m="240750">minds,</span> <span m="241030">this</span> <span
  m="241210">idea</span> <span m="241450">that</span> <span
  m="241750">you</span> <span m="241880">could</span> <span
  m="242020">start</span> <span m="242330">to</span> <span m="242400">get</span>
  <span m="242790">this</span> <span m="243110">sort</span> <span
  m="243270">of</span> <span m="243320">data</span> <span
  m="243700">within</span> <span m="243960">live cells.</span></p><p><span
  m="244420">And</span> <span m="244510">indeed,</span> <span
  m="245210">Sunney's</span> <span m="246020">group</span> <span
  m="246280">over</span> <span m="246410">the</span> <span
  m="246510">next</span> <span m="246980">five</span> <span
  m="247260">years</span> <span m="248040">did</span> <span m="248170">a</span>
  <span m="248210">whole</span> <span m="248360">series</span> <span
  m="248780">of</span> <span m="249150">what I'd consider to</span> <span
  m="249470">be</span> <span m="249790">beautiful</span> <span
  m="250440">studies,</span> <span m="251280">probing,</span> <span
  m="251660">for</span> <span m="251750">example,</span> <span
  m="252380">the</span> <span m="252490">dynamics</span> <span
  m="253290">of</span> <span m="253760">this</span> <span
  m="253970">[INAUDIBLE]</span> <span m="254220">repressor</span> <span
  m="254680">binding,</span> <span m="255280">unbindings</span> <span
  m="256480">onto</span> <span m="257000">this</span> <span
  m="257220">promoter,</span> <span m="257839">the</span> <span
  m="258209">search</span> <span m="258570">process.</span> <span
  m="260960">Yeah.</span> <span m="261250">A</span> <span
  m="261470">whole</span> <span m="261880">slew</span> <span
  m="262110">of,</span> <span m="262200">I</span> <span m="262260">think,</span>
  <span m="262420">really</span> <span m="262610">beautiful</span> <span
  m="262870">things.</span> <span m="263040">So</span> <span
  m="263660">we're</span> <span m="263760">not</span> <span m="263950">going to
  have</span> <span m="264020">the</span> <span m="264200">chance</span> <span
  m="264500">to</span> <span m="264600">go</span> <span m="264740">over</span>
  <span m="264870">all</span> <span m="264970">those</span> <span
  m="265110">papers</span> <span m="265450">in</span> <span
  m="265490">this</span> <span m="265600">class,</span> <span
  m="265910">but</span> <span m="266590">I</span> <span
  m="266630">encourage</span> <span m="266920">you</span> <span
  m="267090">to</span> <span m="268010">look</span> <span m="268673">at</span>
  <span m="269136">them.</span></p><p><span m="270990">Can</span> <span
  m="271160">somebody</span> <span m="272440">say</span> <span
  m="273070">what</span> <span m="273280">the</span> <span
  m="273390">primary</span> <span m="274010">challenge is</span> <span
  m="275520">with</span> <span m="275660">doing</span> <span
  m="276130">single</span> <span m="276520">molecule</span> <span
  m="276820">fluorescence</span> <span m="277320">in</span> <span
  m="278700">these</span> <span m="278930">live</span> <span
  m="279170">cells?</span> <span m="288130">So</span> <span
  m="288290">why</span> <span m="289040">is</span> <span m="289220">it</span>
  <span m="289380">that</span> <span m="289510">I</span> <span
  m="289680">did</span> <span m="289930">not</span> <span m="290160">think
  that</span> <span m="290300">this</span> <span m="290520">was</span> <span
  m="290630">going</span> <span m="290720">to</span> <span
  m="290770">work?</span> <span m="292460">And</span> <span
  m="292730">now,</span> <span m="294250">you're</span> <span
  m="294370">going</span> <span m="294450">to</span> <span
  m="294490">have</span> <span m="294600">to</span> <span m="296690">give</span>
  <span m="296900">an</span> <span m="296970">argument</span> <span
  m="297270">that</span> <span m="297360">ends</span> <span m="297530">up</span>
  <span m="297600">not</span> <span m="297770">being</span> <span
  m="297920">true.</span> <span m="298583">But</span> <span
  m="299310">why</span> <span m="299715">is</span> <span m="300120">it</span>
  <span m="300350">that</span> <span m="300530">this is</span> <span
  m="300780">such a</span> <span m="301220">hard</span> <span m="301970">thing
  to</span> <span m="302200">do.</span> <span
  m="304308">Yeah?</span></p><p><span m="305724">AUDIENCE: [INAUDIBLE]</span>
  <span m="306668">laser at</span> <span m="307140">the</span> <span
  m="307612">cell</span> <span m="308084">but</span> <span m="308202">you</span>
  <span m="308320">can't</span> <span m="308438">kill</span> <span
  m="308556">the cell?</span></p><p><span m="309500">PROFESSOR: Right.</span>
  <span m="309830">OK.</span> <span m="309990">So</span> <span
  m="310110">one</span> <span m="310320">is</span> <span m="310420">that</span>
  <span m="311550">there's</span> <span m="312580">laser,</span> <span
  m="316060">the</span> <span m="316200">cell,</span> <span
  m="317320">and</span> <span m="317500">then</span> <span
  m="318030">there's</span> <span m="318200">a big</span> <span
  m="318310">question</span> <span m="318620">mark.</span> <span m="319240">Is
  this</span> <span m="320140">going</span> <span m="320250">to</span> <span
  m="320320">be</span> <span m="321030">OK?</span> <span m="321910">And</span>
  <span m="322080">indeed,</span> <span m="323350">we</span> <span
  m="323390">certainly</span> <span m="323670">know</span> <span
  m="323940">that</span> <span m="324800">at</span> <span m="325080">one</span>
  <span m="325370">limit,</span> <span m="325550">it's</span> <span
  m="325840">not</span> <span m="326220">going to be OK.</span></p><p><span
  m="328200">If  you</span> <span m="328510">take the</span> <span
  m="328570">lasers</span> <span m="329190">at</span> <span
  m="329850">Los</span> <span m="330260">Alamos</span> <span
  m="330700">National</span> <span m="331020">Lab,</span> <span
  m="332530">you</span> <span m="332740">can</span> <span
  m="333100">vaporize</span> <span m="333360">the cell.</span> <span
  m="334150">So it's</span> <span m="334270">certainly</span> <span
  m="334910">enough</span> <span m="335310">power,</span> <span
  m="335680">and</span> <span m="335740">the</span> <span
  m="335810">cell's</span> <span m="336060">going to</span> <span
  m="336210">be</span> <span m="336330">dead</span> <span m="337040">for</span>
  <span m="337200">sure.</span> <span m="337960">And</span> <span
  m="338220">so</span> <span m="338610">the</span> <span
  m="338680">question</span> <span m="338990">is</span> <span
  m="339100">maybe,</span> <span m="339410">oh, can</span> <span
  m="339560">you</span> <span m="340010">dial</span> <span
  m="340260">down</span> <span m="340610">the</span> <span
  m="340680">laser</span> <span m="341120">power</span> <span
  m="341400">enough</span> <span m="341660">to</span> <span
  m="341770">get--</span> <span m="342590">and</span> <span
  m="342910">indeed,</span> <span m="343210">this</span> <span
  m="343360">is</span> <span m="343430">something</span> <span m="343650">that
  they</span> <span m="343790">talk</span> <span m="344010">about,</span> <span
  m="344840">their</span> <span m="345230">strategy in</span> <span
  m="345710">this</span> <span m="345780">paper.</span></p><p><span
  m="347630">Other</span> <span m="348430">challenges,</span> <span
  m="349100">problems?</span></p><p><span m="350090">AUDIENCE: Many
  molecules.</span></p><p><span m="351850">PROFESSOR: Right.</span> <span
  m="352100">so the principle</span> <span m="352210">of</span> <span
  m="352530">many</span> <span m="352870">molecules.</span> <span
  m="354760">So</span> <span m="354930">we</span> <span m="355020">have</span>
  <span m="355170">to</span> <span m="355210">figure</span> <span
  m="355360">out</span> <span m="355470">some</span> <span m="355590">way</span>
  <span m="355700">of</span> <span m="356640">separating</span> <span
  m="356910">them,</span> <span m="357650">either</span> <span
  m="358000">temporarily</span> <span m="358690">or</span> <span
  m="358800">spatially.</span> <span m="359350">Indeed</span> <span
  m="359760">in</span> <span m="360040">this</span> <span
  m="360200">paper,</span> <span m="360440">they</span> <span
  m="360570">actually</span> <span m="360800">do</span> <span
  m="361800">both.</span> <span m="365250">We</span> <span m="365350">say</span>
  <span m="366000">many</span> <span m="366230">molecules.</span> <span
  m="366580">And of</span> <span m="366710">course,</span> <span
  m="366870">we</span> <span m="366940">have</span> <span m="367030">to</span>
  <span m="367130">decide</span> <span m="367400">what</span> <span
  m="367460">we</span> <span m="367530">mean</span> <span m="367660">by</span>
  <span m="367740">this.</span> <span m="367860">Because</span> <span
  m="368710">ultimately,</span> <span m="369060">we're</span> <span
  m="369230">interested in doing</span> <span m="369660">single</span> <span
  m="370140">molecule</span> <span m="370660">measurements.</span></p><p><span
  m="372380">But</span> <span m="372480">then,</span> <span m="372580">of</span>
  <span m="372680">course,</span> <span m="372970">of</span> <span
  m="373040">the</span> <span m="373150">plural</span> <span
  m="373700">of</span> <span m="373810">single</span> <span m="374240">is</span>
  <span m="374340">many.</span> <span m="375270">How</span> <span
  m="375470">many</span> <span m="375850">is</span> <span m="376000">too</span>
  <span m="376150">many</span> <span m="376510">for</span> <span
  m="376650">us</span> <span m="376850">to</span> <span m="377010">study,</span>
  <span m="377430">and</span> <span m="377520">so</span> <span
  m="377630">forth?</span> <span m="379720">The</span> <span
  m="379810">question</span> <span m="380090">here</span> <span
  m="380240">is</span> <span m="380310">maybe</span> <span
  m="380560">like,</span> <span m="380730">how</span> <span m="381050">to</span>
  <span m="381220">separate,</span> <span m="381490">right?</span> <span
  m="391330">What</span> <span m="391480">are</span> <span
  m="391640">other</span> <span m="392490">challenges</span> <span m="392875">in
  this?</span></p><p><span m="395124">AUDIENCE: Diffusion.</span></p><p><span
  m="395590">PROFESSOR: Right.</span> <span m="396060">There's</span> <span
  m="396240">diffusion.</span> <span m="397240">So</span> <span
  m="398390">we're</span> <span m="398510">going</span> <span
  m="398600">to</span> <span m="398730">talk</span> <span m="398990">more</span>
  <span m="399350">about</span> <span m="399570">this,</span> <span
  m="399790">for</span> <span m="399890">sure.</span> <span
  m="400600">Well,</span> <span m="400920">actually, all of</span> <span
  m="401190">these</span> <span m="401360">things,</span> <span m="401710">we're
  going to talk</span> <span m="401920">about.</span> <span
  m="402650">Diffusion.</span> <span m="403400">And</span> <span
  m="404180">why</span> <span m="404320">is</span> <span m="404680">this
  a</span> <span m="404740">problem,</span> <span m="405150">though?</span>
  <span m="407050">Right.</span> <span m="407290">So</span> <span
  m="407400">it's</span> <span m="407550">diffusion</span> <span
  m="408860">is</span> <span m="409670">maybe</span> <span
  m="409760">fast.</span> <span m="411560">And</span> <span m="413690">so</span>
  <span m="413800">this</span> <span m="413990">is</span> <span
  m="414130">going</span> <span m="414250">to</span> <span m="414300">end</span>
  <span m="414590">up</span> <span m="414760">being</span> <span
  m="414940">relevant</span> <span m="415500">for kind of</span> <span
  m="415580">signal</span> <span m="416070">to</span> <span
  m="416190">noise</span> <span m="416610">reasons.</span> <span
  m="419120">So</span> <span m="420490">what's</span> <span
  m="420710">the</span> <span m="420800">signal</span> <span
  m="421260">and</span> <span m="421340">what's</span> <span
  m="421550">the</span> <span m="421630">noise?</span></p><p><span
  m="433992">AUDIENCE: Autofluorescence.</span></p><p><span
  m="435470">PROFESSOR: Right.</span> <span m="435590">So there's</span> <span
  m="435780">autofluorescence.</span> <span m="436630">So</span> <span
  m="436930">in</span> <span m="436990">particular,</span> <span
  m="437730">this</span> <span m="438020">noise</span> <span
  m="439330">is</span> <span m="439510">autofluorescence</span> <span
  m="440790">from</span> <span m="441160">what?</span></p><p><span
  m="448264">AUDIENCE: From the cell.</span></p><p><span m="450240">PROFESSOR:
  From the</span> <span m="450510">cell.</span> <span m="450850">Right.</span>
  <span m="458270">And</span> <span m="458520">what's</span> <span
  m="459050">the</span> <span m="459130">signal,</span> <span
  m="459610">just</span> <span m="459780">to</span> <span m="459830">be</span>
  <span m="459920">clear</span> <span m="460215">here?</span></p><p><span
  m="460996">AUDIENCE: Photons</span> <span m="461482">from</span> <span
  m="461968">[INAUDIBLE].</span></p><p><span m="463640">PROFESSOR: Right.</span>
  <span m="463925">So it's</span> <span m="464210">photons</span> <span
  m="464680">from,</span> <span m="464920">in</span> <span
  m="465020">this</span> <span m="465140">case,</span> <span
  m="465640">the</span> <span m="466210">GFP-like</span> <span
  m="466810">molecule.</span> <span m="467115">Yeah?</span> <span
  m="468520">So</span> <span m="470100">we</span> <span m="470210">want</span>
  <span m="470370">to do</span> <span m="470490">single</span> <span
  m="471060">molecule</span> <span m="471430">measurements.</span> <span
  m="471920">We</span> <span m="471970">want</span> <span m="472150">to</span>
  <span m="472390">be</span> <span m="472490">able</span> <span
  m="472630">to</span> <span m="473310">measure</span> <span
  m="473760">or</span> <span m="473840">detect</span> <span
  m="474590">the</span> <span m="475000">fluorescence</span> <span
  m="475540">coming</span> <span m="475780">from</span> <span
  m="475940">this</span> <span m="476660">single</span> <span
  m="477410">fluorescent</span> <span m="477830">protein.</span></p><p><span
  m="479240">Now</span> <span m="479370">the</span> <span
  m="479450">question</span> <span m="479750">is,</span> <span
  m="480850">if</span> <span m="481260">it's</span> <span m="481470">a</span>
  <span m="481530">single</span> <span m="481960">molecule,</span> <span
  m="482370">does that</span> <span m="482410">mean</span> <span m="482560">that
  it's</span> <span m="482730">going</span> <span m="482810">to</span> <span
  m="482860">send</span> <span m="483030">out</span> <span
  m="483350">just</span> <span m="483550">a</span> <span
  m="483600">single</span> <span m="483930">photon?</span> <span
  m="487600">No.</span> <span m="488260">Maybe</span> <span
  m="488500">they</span> <span m="488820">come</span> <span
  m="488970">out</span> <span m="489160">as</span> <span
  m="489220">single</span> <span m="489440">photons.</span> <span
  m="489750">But</span> <span m="490120">we</span> <span m="490590">can</span>
  <span m="490720">detect</span> <span m="491090">them.</span> <span
  m="493410">Now</span> <span m="494940">the</span> <span
  m="495090">challenge</span> <span m="495640">in,</span> <span
  m="495990">in</span> <span m="496340">some</span> <span m="496500">ways</span>
  <span m="496630">surprising,</span> <span m="497090">is</span> <span
  m="497200">not</span> <span m="497590">that</span> <span m="497700">the</span>
  <span m="497940">number</span> <span m="498450">of</span> <span
  m="498600">photons</span> <span m="499150">is</span> <span
  m="499270">so</span> <span m="499460">small.</span> <span
  m="501450">Does</span> <span m="501570">anybody</span> <span
  m="501790">have</span> <span m="501900">any</span> <span
  m="502260">rough</span> <span m="502610">sense</span> <span
  m="502940">of</span> <span m="503010">maybe</span> <span m="504310">how</span>
  <span m="504490">many</span> <span m="504720">photons</span> <span
  m="505340">are</span> <span m="505450">we</span> <span
  m="505570">collecting</span> <span m="506080">from</span> <span
  m="506230">each</span> <span m="506360">of</span> <span
  m="506410">these?</span></p><p><span m="508125">AUDIENCE: Many</span> <span
  m="508570">thousands.</span></p><p><span m="509460">PROFESSOR: Yes.</span>
  <span m="510170">I'd</span> <span m="510280">say</span> <span
  m="510400">many</span> <span m="510770">thousands.</span> <span
  m="511960">In</span> <span m="512140">particular--</span> <span m="514260">so
  we'll say</span> <span m="514380">many</span> <span
  m="514650">thousands.</span> <span m="519880">It</span> <span
  m="520110">could</span> <span m="520220">be</span> <span
  m="520620">even</span> <span m="520820">10</span> <span m="521140">to</span>
  <span m="521200">the</span> <span m="521280">4</span> <span
  m="522110">per</span> <span m="522380">second</span> <span m="522929">or
  so.</span> <span m="523610">It</span> <span m="523700">depends</span> <span
  m="524130">on</span> <span m="524340">the</span> <span m="524700">laser</span>
  <span m="524970">intensity.</span> <span m="526300">Many</span> <span
  m="526530">thousands of</span> <span m="526890">photons</span> <span
  m="528260">collected.</span> <span m="533013">Yes?</span></p><p><span
  m="533987">AUDIENCE: That's before</span> <span
  m="534474">[INAUDIBLE].</span></p><p><span m="535460">PROFESSOR: Yes.</span>
  <span m="536170">That's</span> <span m="536360">right.</span> <span
  m="538280">And</span> <span m="539220">indeed,</span> <span
  m="540030">the</span> <span m="540710">stronger</span> <span
  m="541170">the</span> <span m="541300">intensity</span> <span
  m="541600">of</span> <span m="541900">the laser</span> <span
  m="542170">light</span> <span m="542310">that you illuminate</span> <span
  m="542755">with,</span> <span m="543200">the</span> <span
  m="543340">faster</span> <span m="543760">you're</span> <span
  m="543910">going</span> <span m="543990">to</span> <span m="544030">collect
  the</span> <span m="544350">photons,</span> <span m="544750">but in</span>
  <span m="545000">general, it</span> <span m="545360">won't</span> <span
  m="545710">increase</span> <span m="546010">the</span> <span
  m="546090">total</span> <span m="546430">number</span> <span
  m="546660">of</span> <span m="546730">photons</span> <span
  m="547740">that</span> <span m="547920">you</span> <span
  m="547990">collect.</span> <span m="550100">So</span> <span
  m="550750">in</span> <span m="551190">these</span> <span
  m="551310">sorts</span> <span m="551510">of</span> <span
  m="551560">situations,</span> <span m="552340">you</span> <span
  m="553910">might</span> <span m="554190">get,</span> <span
  m="554520">say--</span> <span m="555940">we'll</span> <span
  m="556090">say</span> <span m="556600">10</span> <span m="557030">to</span>
  <span m="557090">the</span> <span m="557160">4,</span> <span
  m="557860">plus</span> <span m="558090">or</span> <span m="558120">minus
  in</span> <span m="558360">order</span> <span m="558560">of</span> <span
  m="558610">magnitude,</span> <span m="559610">photons</span> <span
  m="560020">per</span> <span m="560180">second.</span></p><p><span
  m="561260">And</span> <span m="561660">they</span> <span
  m="561730">might</span> <span m="561970">last</span> <span
  m="562400">for,</span> <span m="563280">depending</span> <span
  m="563630">on</span> <span m="563710">how--</span> <span m="564210">for</span>
  <span m="564990">30</span> <span m="565300">seconds</span> <span
  m="565770">or</span> <span m="565830">so.</span> <span m="566255">And</span>
  <span m="566520">of</span> <span m="566730">course,</span> <span
  m="567440">we'll</span> <span m="567570">look</span> <span
  m="567710">at</span> <span m="567760">the</span> <span
  m="567830">actual</span> <span m="568050">numbers</span> <span
  m="568340">in</span> <span m="568420">this</span> <span
  m="568600">paper.</span> <span m="569200">But</span> <span
  m="569360">in</span> <span m="569440">many</span> <span m="569690">of</span>
  <span m="569730">these</span> <span m="570270">situations--</span> <span
  m="571880">times</span> <span m="572920">10 to</span> <span
  m="573320">100</span> <span m="573660">seconds.</span></p><p><span
  m="579360">In</span> <span m="579460">this</span> <span
  m="579680">case,</span> <span m="580140">it</span> <span
  m="580200">actually</span> <span m="580450">bleached</span> <span
  m="581070">faster.</span> <span m="581760">Right.</span> <span
  m="582540">But</span> <span m="582970">we'll</span> <span
  m="583270">see.</span> <span m="584550">Well, you</span> <span
  m="584960">might</span> <span m="585120">be</span> <span
  m="585180">able</span> <span m="585260">to</span> <span m="585300">get</span>
  <span m="585460">also--</span> <span m="586060">if</span> <span
  m="586280">you</span> <span m="588060">use</span> <span
  m="588280">organic</span> <span m="588640">dyes</span> <span m="588940">and
  other--</span> <span m="589220">right.</span> <span m="591040">But</span>
  <span m="591180">this</span> <span m="591310">gives</span> <span
  m="591430">you</span> <span m="591520">some</span> <span
  m="591740">sense</span> <span m="592030">of</span> <span
  m="592150">that</span> <span m="592510">there's</span> <span
  m="592830">a</span> <span m="592890">fair</span> <span
  m="593230">number</span> <span m="593560">of</span> <span
  m="593630">photons</span> <span m="594080">that</span> <span
  m="594100">you</span> <span m="594240">could,</span> <span
  m="594550">in</span> <span m="594650">principle,</span> <span
  m="595050">collect</span> <span m="595460">from</span> <span
  m="595780">a</span> <span m="595870">single</span> <span
  m="596120">molecule.</span></p><p><span m="599090">Now,</span> <span
  m="599220">of</span> <span m="599280">course,</span> <span
  m="599550">you</span> <span m="599650">might</span> <span m="599680">be</span>
  <span m="599770">worried,</span> <span m="600070">well,</span> <span
  m="600390">these</span> <span m="600560">are</span> <span
  m="600600">the</span> <span m="600680">photons</span> <span
  m="601190">that</span> <span m="601920">you</span> <span
  m="602070">shine</span> <span m="602530">on</span> <span
  m="602670">your</span> <span m="602900">camera.</span> <span
  m="603430">But</span> <span m="603600">then</span> <span
  m="603670">your</span> <span m="603770">camera</span> <span
  m="604070">won't</span> <span m="604580">pick</span> <span
  m="604790">up</span> <span m="604960">all of them.</span> <span
  m="606760">The</span> <span m="606860">way</span> <span m="607020">that
  we</span> <span m="607300">think</span> <span m="607470">about</span> <span
  m="607710">this</span> <span m="607930">is</span> <span m="608610">by</span>
  <span m="608780">what's</span> <span m="608940">known</span> <span
  m="609040">as</span> <span m="609130">the</span> <span
  m="609210">quantum</span> <span m="609640">efficiency.</span> <span
  m="611410">Quantum</span> <span m="611590">efficiency</span> <span
  m="611990">tells</span> <span m="612260">us</span> <span
  m="612450">basically</span> <span m="614510">this</span> <span
  m="615990">is</span> <span m="616090">the</span> <span
  m="616160">fraction</span> <span m="617340">of</span> <span
  m="617400">photons</span> <span m="617940">detected.</span></p><p><span
  m="620020">But</span> <span m="621880">with</span> <span
  m="622070">modern</span> <span m="622330">cameras,</span> <span
  m="622770">actually,</span> <span m="624430">this</span> <span
  m="624610">thing is</span> <span m="624840">approximately</span> <span
  m="625400">one.</span> <span m="628240">So</span> <span m="628340">it's</span>
  <span m="628500">0.9</span> <span m="629560">maybe</span> <span
  m="630020">with</span> <span m="631420">modern</span> <span
  m="631700">cameras,</span> <span m="632350">which</span> <span
  m="632500">is</span> <span m="634440">for</span> <span m="634560">our</span>
  <span m="634650">purposes,</span> <span m="635460">basically</span> <span
  m="635800">one.</span> <span m="637010">Which</span> <span
  m="637280">means</span> <span m="637500">that</span> <span
  m="638100">you</span> <span m="638200">can</span> <span
  m="638590">detect,</span> <span m="639030">actually, the</span> <span
  m="639270">majority</span> <span m="639750">of</span> <span
  m="639800">the</span> <span m="639860">photons</span> <span
  m="640530">that</span> <span m="640640">are</span> <span
  m="640700">hitting</span> <span m="641260">your</span> <span
  m="641360">camera.</span></p><p><span m="643540">From</span> <span
  m="643990">that</span> <span m="644100">standpoint,</span> <span
  m="645050">the</span> <span m="645210">number</span> <span
  m="645610">of</span> <span m="645690">photons</span> <span
  m="646130">is</span> <span m="646250">not</span> <span
  m="646510">actually</span> <span m="646890">the</span> <span
  m="647020">problem.</span> <span m="649270">You</span> <span
  m="649760">can</span> <span m="649880">collect</span> <span
  m="650780">many</span> <span m="651140">thousands</span> <span
  m="652000">of</span> <span m="652130">photons.</span> <span
  m="653970">So</span> <span m="654000">the</span> <span
  m="654090">problem</span> <span m="654540">is</span> <span
  m="654640">really</span> <span m="654870">detecting</span> <span
  m="655330">that</span> <span m="655520">signal</span> <span
  m="655970">over</span> <span m="656730">the</span> <span
  m="656830">background</span> <span m="657280">signal.</span> <span
  m="657700">Over</span> <span m="657880">the</span> <span
  m="657970">autofluorescence</span> <span m="658750">of</span> <span
  m="659900">the</span> <span m="660000">cell.</span></p><p><span
  m="662140">And</span> <span m="662290">indeed,</span> <span
  m="663020">if</span> <span m="663260">you</span> <span m="663370">look</span>
  <span m="663540">at</span> <span m="664470">the</span> <span
  m="665350">figure,</span> <span m="665890">figure</span> <span
  m="666140">one,</span> <span m="666910">you</span> <span m="667180">can</span>
  <span m="667280">very</span> <span m="667480">clearly</span> <span
  m="667820">see</span> <span m="668130">the</span> <span
  m="668220">autofluorescence</span> <span m="669320">of</span> <span
  m="669500">the</span> <span m="669580">cell.</span> <span m="670900">So</span>
  <span m="671060">the</span> <span m="671340">fluorescence</span> <span
  m="671940">where</span> <span m="672220">there's</span> <span
  m="672650">the</span> <span m="672730">cell</span> <span m="673550">is</span>
  <span m="673700">indeed</span> <span m="674020">much</span> <span
  m="674290">larger</span> <span m="674660">than</span> <span
  m="674850">where</span> <span m="675390">there's no cell.</span> <span
  m="676990">The</span> <span m="677170">autofluorescence</span> <span
  m="677930">is,</span> <span m="679310">I'd</span> <span m="679520">say,</span>
  <span m="679620">the</span> <span m="679950">primary</span> <span
  m="680620">challenge</span> <span m="681190">here.</span></p><p><span
  m="682060">Of</span> <span m="682160">course,</span> <span
  m="682490">there</span> <span m="682590">are</span> <span
  m="682690">many,</span> <span m="683260">many</span> <span
  m="683400">others.</span> <span m="684170">Right.</span> <span
  m="684350">So</span> <span m="684410">this</span> <span m="684570">is</span>
  <span m="686300">potentially</span> <span m="686620">a</span> <span
  m="686670">big</span> <span m="686840">problem.</span> <span
  m="691200">And</span> <span m="691460">in</span> <span m="691620">order</span>
  <span m="691880">to</span> <span m="691930">get</span> <span
  m="692100">around</span> <span m="692350">that,</span> <span
  m="692520">there</span> <span m="692620">are</span> <span
  m="692760">all</span> <span m="692970">these</span> <span
  m="693150">other</span> <span m="693300">strategies</span> <span
  m="693770">that</span> <span m="694820">the</span> <span
  m="694910">author's</span> <span m="695720">going to</span> <span
  m="696050">implement.</span> <span m="696890">Yes?</span></p><p><span
  m="698122">AUDIENCE: What is the</span> <span
  m="698588">[INAUDIBLE]?</span></p><p><span m="703250">PROFESSOR: Yeah.</span>
  <span m="703460">So</span> <span m="704120">many</span> <span
  m="704750">things</span> <span m="705160">are</span> <span
  m="705270">weakly</span> <span m="705620">fluorescent,</span> <span
  m="706170">I</span> <span m="706220">think</span> <span m="706390">is</span>
  <span m="706570">the</span> <span m="707390">short answer.</span> <span
  m="707750">And</span> <span m="707820">this</span> <span
  m="708500">also</span> <span m="708800">depends</span> <span
  m="709300">upon,</span> <span m="710160">for</span> <span
  m="710310">example,</span> <span m="711100">cells</span> <span
  m="711400">are</span> <span m="711450">more</span> <span
  m="711790">autofluorescent</span> <span m="711930">if</span> <span
  m="712380">you</span> <span m="712560">grow</span> <span
  m="712750">them</span> <span m="712850">in a</span> <span
  m="712920">rich</span> <span m="713210">media</span> <span
  m="713660">than</span> <span m="713810">in</span> <span
  m="713900">minimal</span> <span m="714290">media,</span> <span
  m="714740">for</span> <span m="714920">some</span> <span
  m="715250">mysterious</span> <span m="715770">reason.</span></p><p><span
  m="716540">Yeah.</span> <span m="717190">But</span> <span
  m="717290">it's</span> <span m="717310">really</span> <span
  m="717510">just</span> <span m="717630">that there</span> <span
  m="717700">are</span> <span m="717830">many</span> <span
  m="718100">things</span> <span m="718410">that</span> <span
  m="718510">are</span> <span m="718660">weakly</span> <span
  m="718830">fluorescent.</span> <span m="719440">And</span> <span
  m="719720">it's</span> <span m="719800">just</span> <span m="719930">there are
  a</span> <span m="720130">lot</span> <span m="720410">of</span> <span
  m="720470">molecules</span> <span m="721130">in a</span> <span
  m="721180">cell.</span></p><p><span m="724384">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="726220">PROFESSOR: Yeah,</span> <span
  m="726930">right.</span> <span m="729370">In</span> <span
  m="729490">the</span> <span m="729570">case</span> <span
  m="729850">that</span> <span m="730140">you</span> <span m="730260">put</span>
  <span m="730500">in</span> <span m="730760">a</span> <span
  m="730820">fluorescent</span> <span m="731230">protein</span> <span
  m="731890">or</span> <span m="732410">a</span> <span
  m="732960">fluorescent</span> <span m="733360">dye,</span> <span
  m="733970">then</span> <span m="734170">it</span> <span m="734240">has</span>
  <span m="734780">rather</span> <span m="735110">well-defined</span> <span
  m="735740">absorption</span> <span m="736200">and</span> <span
  m="736280">emission</span> <span m="736940">spectra.</span> <span
  m="738430">And</span> <span m="739150">each</span> <span
  m="739400">individual</span> <span m="740240">absorber</span> <span
  m="740710">emitter</span> <span m="741020">indeed</span> <span
  m="741470">has</span> <span m="741950">a</span> <span
  m="742030">well-defined</span> <span m="742690">absorption</span> <span
  m="743080">emission</span> <span m="743590">profile.</span> <span
  m="744230">But</span> <span m="744360">then</span> <span m="744590">in</span>
  <span m="744740">the</span> <span m="744810">cell, there are</span> <span
  m="745170">just</span> <span m="745320">many,</span> <span
  m="745620">many,</span> <span m="745790">many</span> <span
  m="745930">of</span> <span m="746000">them,</span> <span
  m="746580">which</span> <span m="746670">means</span> <span
  m="746900">that</span> <span m="747050">there's</span> <span
  m="747250">rather</span> <span m="747740">what you want</span> <span
  m="747860">to call</span> <span m="748585">an</span> <span
  m="749470">absorption</span> <span m="749970">of</span> <span
  m="750060">broadband</span> <span m="751540">emission.</span> <span
  m="752520">So</span> <span m="753100">indeed,</span> <span
  m="753470">in</span> <span m="753660">some</span> <span
  m="753910">wavelengths,</span> <span m="754360">it's</span> <span
  m="754980">worse</span> <span m="755420">than</span> <span
  m="755590">in</span> <span m="755700">others.</span> <span
  m="756150">But</span> <span m="756310">it's</span> <span m="756440">not</span>
  <span m="756700">that</span> <span m="756790">you get</span> <span
  m="757090">well-defined</span> <span m="758440">peaks</span> <span
  m="758950">the</span> <span m="759030">way</span> <span m="759130">you</span>
  <span m="759200">do</span> <span m="759330">for</span> <span
  m="759460">a</span> <span m="759510">single</span> <span
  m="760720">kind</span> <span m="760910">of</span> <span
  m="760950">[INAUDIBLE].</span></p><p><span m="762130">AUDIENCE: I guess</span>
  <span m="762595">I was</span> <span m="763060">just</span> <span
  m="763525">wondering</span> <span m="763990">[INAUDIBLE].</span></p><p><span
  m="767710">PROFESSOR: Yes.</span> <span m="768130">And indeed,</span> <span
  m="768650">in</span> <span m="768900">this</span> <span
  m="769110">case,</span> <span m="769440">they're</span> <span
  m="770200">exciting</span> <span m="770600">with a</span> <span
  m="770780">laser.</span> <span m="771300">So at</span> <span
  m="771610">least</span> <span m="771920">on</span> <span m="772050">the</span>
  <span m="772120">excitation,</span> <span m="772730">it's</span> <span
  m="772900">as</span> <span m="773270">precise</span> <span
  m="773740">as</span> <span m="773840">you</span> <span m="774010">can</span>
  <span m="774470">hope</span> <span m="774640">for.</span> <span
  m="775560">And</span> <span m="775780">indeed,</span> <span
  m="775990">on</span> <span m="776340">the</span> <span
  m="776420">emission</span> <span m="777510">they</span> <span
  m="777660">will</span> <span m="777950">use</span> <span m="779560">a</span>
  <span m="779610">filter.</span> <span m="779970">So</span> <span
  m="780100">they're</span> <span m="780410">not</span> <span
  m="780880">going</span> <span m="780980">to</span> <span m="781020">be</span>
  <span m="781120">absorbed.</span> <span m="781790">It's</span> <span
  m="781980">probably</span> <span m="782560">a</span> <span
  m="782630">few</span> <span m="782850">tens</span> <span m="783180">of</span>
  <span m="783260">nanometers</span> <span m="783750">that</span> <span
  m="783830">they're</span> <span m="784160">looking</span> <span
  m="784400">at.</span> <span m="785350">So in</span> <span
  m="785500">that</span> <span m="785700">sense,</span> <span
  m="785800">they</span> <span m="785960">are</span> <span
  m="786460">filtering</span> <span m="786920">out,</span> <span
  m="787100">but</span> <span m="787330">still,</span> <span
  m="788110">there</span> <span m="788300">is</span> <span
  m="788460">autofluorescence.</span></p><p><span m="797134">All right.</span>
  <span m="799570">Now</span> <span m="801200">getting</span> <span
  m="801520">at</span> <span m="801580">this</span> <span
  m="801710">question</span> <span m="803036">of</span> <span
  m="803490">the</span> <span m="803850">single</span> <span
  m="805930">molecule</span> <span m="806690">fluorescence,</span> <span
  m="808310">the</span> <span m="808380">limitations,</span> <span
  m="809250">diffusion,</span> <span m="809720">and</span> <span
  m="809820">so</span> <span m="809920">forth,</span> <span
  m="810970">it's</span> <span m="811280">always</span> <span
  m="812120">valuable</span> <span m="813290">to</span> <span
  m="813430">have</span> <span m="813630">a</span> <span m="813680">sense</span>
  <span m="813970">of</span> <span m="814040">scale</span> <span
  m="815230">in</span> <span m="815560">anything</span> <span
  m="815950">that</span> <span m="816050">you're</span> <span
  m="816140">ever</span> <span m="816260">doing.</span> <span
  m="817840">So</span> <span m="818080">just</span> <span
  m="818440">let's</span> <span m="818910">wake</span> <span
  m="819210">up</span> <span m="819430">by</span> <span
  m="819540">reminding</span> <span m="819880">ourselves,</span> <span
  m="820170">how</span> <span m="820340">big</span> <span m="820510">is</span>
  <span m="820590">a</span> <span m="820850">protein?</span> <span
  m="821830">Right.</span> <span m="822000">So,</span> <span
  m="822140">typical</span> <span m="822610">protein.</span> <span
  m="823790">Typical</span> <span m="824160">protein.</span> <span
  m="827670">And</span> <span m="827890">for</span> <span m="828010">now,</span>
  <span m="828220">we'll</span> <span m="828320">say</span> <span
  m="828460">e.g.</span> <span m="829590">For</span> <span
  m="829700">example,</span> <span m="830460">GFP</span> <span
  m="830620">or</span> <span m="831480">whatever.</span></p><p><span
  m="855650">All</span> <span m="855850">right.</span> <span
  m="856440">We're</span> <span m="856560">not</span> <span
  m="856730">going</span> <span m="856830">to</span> <span
  m="856930">give</span> <span m="856960">you</span> <span
  m="857040">very</span> <span m="857170">much</span> <span
  m="857380">time</span> <span m="857700">to</span> <span
  m="857780">think</span> <span m="857960">about</span> <span
  m="858170">this.</span> <span m="859110">But</span> <span m="859630">I
  just</span> <span m="859890">want</span> <span m="860010">to</span> <span
  m="860060">make</span> <span m="860230">sure</span> <span
  m="860490">that</span> <span m="861580">we</span> <span m="861740">all</span>
  <span m="862020">keep</span> <span m="862180">track</span> <span
  m="862510">of</span> <span m="862580">senses</span> <span m="862980">of</span>
  <span m="863060">scale</span> <span m="863800">in</span> <span
  m="863970">the</span> <span m="864050">world.</span> <span
  m="866250">Ready.</span> <span m="867010">Three,</span> <span
  m="867550">two,</span> <span m="868000">one.</span> <span
  m="870590">All</span> <span m="870780">right.</span> <span
  m="871170">So</span> <span m="871250">we've</span> <span m="871340">got</span>
  <span m="871470">some</span> <span m="871690">B's,</span> <span
  m="871960">C's,</span> <span m="873410">D's.</span> <span
  m="874760">All</span> <span m="874880">right.</span></p><p><span
  m="877630">Wow.</span> <span m="877910">We</span> <span m="878000">got</span>
  <span m="878110">a</span> <span m="878190">lot</span> <span
  m="879680">of</span> <span m="880690">surprisingly</span> <span
  m="881390">wide</span> <span m="881750">wide</span> <span
  m="882030">range,</span> <span m="882450">actually.</span> <span
  m="884462">[LAUGHING]</span> <span m="885350">OK.</span> <span
  m="885840">Well,</span> <span m="886120">we</span> <span
  m="886350">also</span> <span m="886530">have</span> <span
  m="886740">the</span> <span m="886820">mirror</span> <span
  m="887110">image</span> <span m="887450">problem</span> <span
  m="887770">over</span> <span m="887940">here.</span> <span
  m="889950">OK,</span> <span m="891560">right.</span> <span
  m="893200">So,</span> <span m="893340">indeed,</span> <span
  m="895580">I'll</span> <span m="895700">say</span> <span
  m="895820">this</span> <span m="896310">is</span> <span m="896390">a</span>
  <span m="896460">typical</span> <span m="899110">protein</span> <span
  m="899440">size.</span> <span m="903416">So,</span> <span
  m="903920">it's</span> <span m="904020">a</span> <span m="904060">few</span>
  <span m="904230">nanometers.</span> <span m="905500">Depending</span> <span
  m="905930">on,</span> <span m="906710">there</span> <span
  m="907010">are</span> <span m="907420">some</span> <span
  m="907860">that</span> <span m="908110">get</span> <span
  m="908510">longer,</span> <span m="909270">especially</span> <span
  m="909640">if you're</span> <span m="909700">thinking</span> <span
  m="909910">about</span> <span m="910590">a</span> <span
  m="910740">long--</span> <span m="911400">there</span> <span
  m="911550">are</span> <span m="911600">some</span> <span
  m="912280">structural--</span> <span m="912710">well, you know.</span> <span
  m="913250">Of</span> <span m="913290">course,</span> <span m="913460">if
  you're</span> <span m="913900">talking</span> <span m="914050">about</span>
  <span m="914620">filaments,</span> <span m="915220">they</span> <span
  m="915340">can</span> <span m="915480">be--</span> <span m="917360">but
  if</span> <span m="917635">you're</span> <span m="917910">talking</span> <span
  m="918050">about</span> <span m="918190">a</span> <span
  m="918270">typical</span> <span m="918640">globular</span> <span
  m="919090">protein,</span> <span m="919880">it's a</span> <span
  m="920070">few</span> <span m="920250">nanometers</span> <span m="920660">in
  diameter.</span></p><p><span m="927060">The</span> <span
  m="927170">question</span> <span m="927520">is,</span> <span
  m="928930">let's</span> <span m="929410">say</span> <span m="929570">that
  this</span> <span m="929810">is</span> <span m="929850">a</span> <span
  m="929900">fluorescent</span> <span m="930330">protein,</span> <span
  m="930680">or</span> <span m="930830">GFP.</span> <span m="931720">And
  now</span> <span m="932080">what</span> <span m="932330">we</span> <span
  m="932430">do</span> <span m="932560">is</span> <span m="932650">we</span>
  <span m="933060">look</span> <span m="933280">at</span> <span
  m="933330">it.</span> <span m="935210">And</span> <span
  m="935340">we're</span> <span m="935430">going</span> <span
  m="935520">to</span> <span m="935570">get</span> <span m="935850">some</span>
  <span m="936410">fluorescent</span> <span m="937330">spot.</span> <span
  m="945620">So</span> <span m="945730">this</span> <span m="945900">is</span>
  <span m="946230">plotting</span> <span m="947040">the</span> <span
  m="947150">intensity</span> <span m="952020">as</span> <span
  m="952120">a</span> <span m="952180">function</span> <span
  m="952930">of</span> <span m="953400">position.</span> <span
  m="953970">Right?</span></p><p><span m="955470">So</span> <span
  m="955760">this</span> <span m="955870">is</span> <span m="957605">the</span>
  <span m="958070">intensity</span> <span m="958510">I</span> <span
  m="959210">is</span> <span m="959270">a function of</span> <span
  m="959350">position</span> <span m="959700">X.</span> <span
  m="964140">Now</span> <span m="964280">the</span> <span
  m="964350">question</span> <span m="964700">is,</span> <span
  m="966150">what</span> <span m="966420">is</span> <span
  m="966560">going</span> <span m="966790">to</span> <span m="966840">be</span>
  <span m="968940">the</span> <span m="969000">size</span> <span
  m="969360">of</span> <span m="969400">the</span> <span m="969480">spot?</span>
  <span m="974220">We</span> <span m="974360">conveniently</span> <span
  m="974960">have</span> <span m="975750">some</span> <span
  m="975920">size</span> <span m="976230">scales</span> <span
  m="976670">up</span> <span m="976850">on</span> <span m="976950">the</span>
  <span m="977020">board.</span> <span m="979640">I'll let</span> <span
  m="979780">us</span> <span m="980020">think</span> <span
  m="980210">about</span> <span m="980420">this</span> <span
  m="980630">for</span> <span m="982380">eight</span> <span
  m="982590">seconds.</span> <span m="993240">All right.</span> <span
  m="993350">Ready.</span> <span m="994080">Three,</span> <span
  m="995200">two,</span> <span m="996240">one.</span></p><p><span
  m="1000620">OK.</span> <span m="1001410">We</span> <span
  m="1001580">have</span> <span m="1001740">a</span> <span
  m="1001800">majority</span> <span m="1002240">of</span> <span
  m="1002280">the</span> <span m="1002330">group</span> <span
  m="1002540">that</span> <span m="1002670">is</span> <span
  m="1002830">saying</span> <span m="1003110">that</span> <span
  m="1003200">indeed,</span> <span m="1003470">it's</span> <span
  m="1003580">going</span> <span m="1003720">to</span> <span
  m="1003770">be</span> <span m="1003900">D.</span> <span m="1004840">So</span>
  <span m="1005310">this</span> <span m="1005480">is</span> <span
  m="1005590">what's</span> <span m="1005760">known</span> <span
  m="1005920">as</span> <span m="1006000">a</span> <span
  m="1006070">diffraction</span> <span m="1006760">limited</span> <span
  m="1007140">spot.</span> <span m="1016870">And</span> <span
  m="1017000">this</span> <span m="1018270">is</span> <span m="1018460">a</span>
  <span m="1018560">fundamental</span> <span m="1019400">physics</span> <span
  m="1020040">limitation,</span> <span m="1021960">that</span> <span
  m="1022400">if</span> <span m="1022580">you</span> <span
  m="1022810">are</span> <span m="1023370">imaging</span> <span
  m="1023790">something</span> <span m="1024280">with</span> <span
  m="1027030">light</span> <span m="1027640">that</span> <span
  m="1027790">is</span> <span m="1029109">of</span> <span
  m="1029270">some</span> <span m="1029660">wavelength,</span> <span
  m="1030160">lambda,</span> <span m="1031130">this</span> <span
  m="1031210">is</span> <span m="1031400">of</span> <span
  m="1031589">order</span> <span m="1031940">lambda</span> <span
  m="1032240">over</span> <span m="1032440">2--</span> <span
  m="1033160">it</span> <span m="1033400">depends</span> <span
  m="1033770">on</span> <span m="1033980">numerical</span> <span
  m="1034430">aperture</span> <span m="1034910">or</span> <span
  m="1035225">projective</span> <span m="1035540">and</span> <span
  m="1035619">so</span> <span m="1035710">forth.</span> <span
  m="1035890">But</span> <span m="1036040">you know.</span></p><p><span
  m="1036940">So</span> <span m="1037069">order of</span> <span
  m="1037369">lambda.</span> <span m="1038020">A</span> <span
  m="1038040">little</span> <span m="1038240">bit</span> <span
  m="1038349">less</span> <span m="1038619">maybe.</span> <span
  m="1041900">And</span> <span m="1042050">indeed,</span> <span
  m="1042960">the</span> <span m="1044910">wavelength</span> <span
  m="1045400">of the</span> <span m="1045490">light</span> <span
  m="1045800">that's</span> <span m="1045950">being</span> <span
  m="1046109">used</span> <span m="1046359">here</span> <span
  m="1046770">is--</span> <span m="1048160">they're</span> <span
  m="1049070">exciting</span> <span m="1049470">with</span> <span
  m="1049620">500</span> <span m="1050160">something.</span> <span
  m="1050780">And</span> <span m="1050880">then</span> <span
  m="1052840">let</span> <span m="1053800">me</span> <span
  m="1053890">just--</span> <span m="1058980">514.</span> <span
  m="1059630">OK.</span> <span m="1061050">So</span> <span
  m="1061190">indeed,</span> <span m="1061700">what</span> <span
  m="1061870">happens</span> <span m="1062190">is</span> <span
  m="1062340">that</span> <span m="1062430">we</span> <span
  m="1062520">shine</span> <span m="1062810">in</span> <span
  m="1062870">light.</span> <span m="1064280">So</span> <span
  m="1064460">this</span> <span m="1064600">is</span> <span
  m="1064830">the</span> <span m="1065070">lambda</span> <span
  m="1066360">incident</span> <span m="1068460">that</span> <span
  m="1068610">is</span> <span m="1069400">514.</span></p><p><span
  m="1072340">Now,</span> <span m="1072520">there's</span> <span
  m="1072690">going</span> <span m="1072810">to</span> <span
  m="1072870">be</span> <span m="1073610">some</span> <span
  m="1073990">GFP</span> <span m="1074740">that</span> <span
  m="1074970">looks</span> <span m="1075230">like</span> <span
  m="1075390">this.</span> <span m="1076890">And</span> <span
  m="1076990">then,</span> <span m="1077120">we're</span> <span
  m="1077240">going</span> <span m="1077330">to</span> <span
  m="1077390">get</span> <span m="1077600">out</span> <span
  m="1079770">lambda</span> <span m="1080190">emission.</span> <span
  m="1082120">All</span> <span m="1082220">right.</span> <span
  m="1082560">Question,</span> <span m="1082990">is</span> <span
  m="1083130">the</span> <span m="1083660">emitted</span> <span
  m="1084040">light</span> <span m="1084290">going to be equal?</span> <span
  m="1085300">Is</span> <span m="1085400">the</span> <span
  m="1085480">wavelength</span> <span m="1085870">going</span> <span
  m="1086020">to</span> <span m="1086070">be</span> <span m="1086210">514</span>
  <span m="1087120">nanometers?</span> <span m="1087650">Yes or no?</span> <span
  m="1088250">Ready?</span> <span m="1088810">Three,</span> <span
  m="1089590">two,</span> <span m="1090390">one.</span></p><p><span
  m="1091516">AUDIENCE: No.</span></p><p><span m="1092210">PROFESSOR: No.</span>
  <span m="1093410">Lambda</span> <span m="1093800">emission.</span> <span
  m="1094230">Is</span> <span m="1094340">it</span> <span
  m="1094420">going</span> <span m="1094570">to</span> <span
  m="1094610">be</span> <span m="1094760">greater</span> <span
  m="1095160">than</span> <span m="1095390">or</span> <span
  m="1095540">less</span> <span m="1096010">than</span> <span
  m="1096920">lambda</span> <span m="1097600">incident?</span> <span
  m="1098330">Ready?</span> <span m="1099130">Three,</span> <span
  m="1099720">two,</span> <span m="1100290">one.</span></p><p><span
  m="1100860">AUDIENCE: Greater than.</span></p><p><span m="1101560">PROFESSOR:
  Greater</span> <span m="1101850">than.</span> <span m="1102730">So</span>
  <span m="1102830">this</span> <span m="1102950">thing</span> <span
  m="1103110">is</span> <span m="1103260">greater</span> <span
  m="1103720">than</span> <span m="1103890">514.</span> <span
  m="1107030">Now,</span> <span m="1107710">if</span> <span
  m="1107860">you</span> <span m="1107960">just</span> <span
  m="1108120">have</span> <span m="1108250">scattering</span> <span
  m="1109230">off</span> <span m="1109470">something--</span> <span
  m="1110870">so</span> <span m="1110950">let's</span> <span
  m="1111120">say</span> <span m="1111220">that</span> <span
  m="1111590">we</span> <span m="1111940">had</span> <span m="1112100">a</span>
  <span m="1112160">gold</span> <span m="1112590">particle,</span> <span
  m="1112955">and</span> <span m="1113320">we</span> <span
  m="1113510">shine--</span> <span m="1115350">what's</span> <span
  m="1115500">going</span> <span m="1115590">to</span> <span
  m="1115630">be</span> <span m="1115690">the</span> <span
  m="1115780">relationship</span> <span m="1116290">between</span> <span
  m="1117180">lamba</span> <span m="1117410">incident and</span> <span
  m="1117810">lambda</span> <span m="1118170">emission?</span></p><p><span
  m="1122990">Is</span> <span m="1123140">it</span> <span
  m="1123260">possible</span> <span m="1123660">to</span> <span
  m="1123710">have</span> <span m="1124440">the</span> <span
  m="1124590">same</span> <span m="1124810">wavelength</span> <span
  m="1125200">come</span> <span m="1125360">out</span> <span
  m="1125610">as</span> <span m="1125720">you</span> <span
  m="1125860">put</span> <span m="1126000">in</span> <span m="1126660">of</span>
  <span m="1127440">some</span> <span m="1127700">object?</span> <span
  m="1132740">Yes.</span> <span m="1133120">If you</span> <span
  m="1133320">just</span> <span m="1133530">have</span> <span
  m="1133790">something,</span> <span m="1134190">a</span> <span
  m="1134310">mirror,</span> <span m="1135800">you</span> <span
  m="1135890">can</span> <span m="1136050">get</span> <span
  m="1136190">back--</span> <span m="1136490">so</span> <span
  m="1137120">it</span> <span m="1137220">is</span> <span
  m="1137420">possible.</span> <span m="1137960">But</span> <span
  m="1138200">in</span> <span m="1138350">general,</span> <span
  m="1139640">there's</span> <span m="1139720">going</span> <span
  m="1139810">to</span> <span m="1139850">be</span> <span
  m="1139940">some</span> <span m="1140300">dissipation.</span> <span
  m="1141560">It's a</span> <span m="1141730">question of</span> <span
  m="1142030">how</span> <span m="1142160">much</span> <span
  m="1142600">and</span> <span m="1142680">so</span> <span
  m="1142770">forth.</span></p><p><span m="1143340">But</span> <span
  m="1143870">certainly</span> <span m="1144180">for</span> <span
  m="1144280">something</span> <span m="1144500">like</span> <span
  m="1144660">fluorescence,</span> <span m="1146600">you</span> <span
  m="1147210">have</span> <span m="1147400">a</span> <span
  m="1147670">higher</span> <span m="1147990">energy</span> <span
  m="1148220">photon,</span> <span m="1149060">and</span> <span
  m="1149180">you</span> <span m="1149260">have</span> <span
  m="1149560">a</span> <span m="1149880">photon</span> <span
  m="1150270">that's</span> <span m="1150430">emitted.</span> <span
  m="1154160">And</span> <span m="1154440">of</span> <span
  m="1154540">course,</span> <span m="1154750">energy</span> <span
  m="1155050">goes</span> <span m="1155230">as</span> <span m="1155300">1</span>
  <span m="1155460">over</span> <span m="1155600">lambda.</span></p><p><span
  m="1158620">Now,</span> <span m="1159480">this</span> <span
  m="1160000">is</span> <span m="1160110">useful</span> <span
  m="1160760">because</span> <span m="1161500">you</span> <span
  m="1161630">can</span> <span m="1161790">actually</span> <span
  m="1163070">spectrally</span> <span m="1163720">separate</span> <span
  m="1164160">things.</span> <span m="1170170">I</span> <span
  m="1170290">just</span> <span m="1170390">want</span> <span
  m="1170550">to</span> <span m="1170620">highlight,</span> <span
  m="1171040">though,</span> <span m="1171190">that</span> <span
  m="1171400">if</span> <span m="1171550">this</span> <span
  m="1172730">separation</span> <span m="1173380">is</span> <span
  m="1173540">of</span> <span m="1173660">order</span> <span
  m="1173880">300</span> <span m="1174330">nanometers</span> <span
  m="1175770">and</span> <span m="1176450">our</span> <span
  m="1176650">protein</span> <span m="1177200">is--</span> <span
  m="1180130">that</span> <span m="1180530">[INAUDIBLE]</span> <span
  m="1180750">our</span> <span m="1180820">GFP.</span> <span
  m="1182300">Nicely</span> <span m="1182610">drawn.</span> <span
  m="1183460">Not</span> <span m="1183630">even</span> <span
  m="1183760">quite</span> <span m="1184050">to</span> <span
  m="1184140">scale.</span> <span m="1184800">To</span> <span
  m="1185030">scale,</span> <span m="1185390">it's</span> <span
  m="1185460">actually</span> <span m="1185710">even</span> <span
  m="1185890">smaller.</span></p><p><span m="1187340">It's a</span> <span
  m="1187590">factor of</span> <span m="1187900">100</span> <span m="1188370">in
  size.</span> <span m="1189430">This</span> <span m="1189640">thing</span>
  <span m="1190050">is</span> <span m="1190190">only</span> <span m="1190420">3
  nanometers</span> <span m="1194100">in</span> <span m="1194250">size,</span>
  <span m="1197170">300 nanometers</span> <span m="1198170">wide.</span> <span
  m="1203570">Now,</span> <span m="1205100">it's</span> <span
  m="1205730">important</span> <span m="1206030">to be</span> <span
  m="1206120">clear</span> <span m="1206580">about</span> <span
  m="1206810">what</span> <span m="1206980">this</span> <span
  m="1207190">means,</span> <span m="1207790">this</span> <span
  m="1208020">diffraction</span> <span m="1208460">limited</span> <span
  m="1208690">spot.</span> <span m="1210580">The</span> <span
  m="1211560">first</span> <span m="1211960">thing</span> <span
  m="1212170">to</span> <span m="1212380">note</span> <span
  m="1212720">is</span> <span m="1212880">that</span> <span
  m="1213350">what</span> <span m="1213520">it</span> <span
  m="1213580">means</span> <span m="1213830">is that</span> <span
  m="1213940">if</span> <span m="1214020">you</span> <span
  m="1214100">have</span> <span m="1214270">two</span> <span
  m="1214630">proteins--</span> <span m="1216310">so</span> <span
  m="1216420">for</span> <span m="1216530">example,</span> <span
  m="1216900">I</span> <span m="1216990">add</span> <span
  m="1217130">another</span> <span m="1217400">one</span> <span
  m="1217600">over</span> <span m="1217750">here--</span> <span
  m="1219290">that</span> <span m="1219430">it's</span> <span
  m="1219560">going</span> <span m="1219660">to</span> <span
  m="1219710">be</span> <span m="1219840">very</span> <span
  m="1220240">hard</span> <span m="1220580">to</span> <span
  m="1220650">tell</span> <span m="1221010">that</span> <span
  m="1221110">we</span> <span m="1221210">have</span> <span
  m="1221500">those</span> <span m="1221750">two</span> <span
  m="1221940">proteins</span> <span m="1222430">next</span> <span m="1222670">to
  each other.</span> <span m="1224180">Because</span> <span
  m="1224400">the</span> <span m="1224480">resulting</span> <span
  m="1225030">fluorescence</span> <span m="1225680">pattern</span> <span
  m="1226010">will</span> <span m="1226290">look</span> <span
  m="1226570">essentially</span> <span m="1226990">the</span> <span
  m="1227070">same.</span></p><p><span m="1229670">Will</span> <span
  m="1229880">it be</span> <span m="1230010">exactly</span> <span
  m="1230440">the</span> <span m="1230500">same?</span> <span
  m="1232320">What's</span> <span m="1232530">going</span> <span
  m="1232620">to</span> <span m="1232660">change?</span> <span
  m="1233920">The</span> <span m="1234000">intensity.</span> <span
  m="1234710">The</span> <span m="1234890">intensity,</span> <span
  m="1235590">you</span> <span m="1235680">expect</span> <span
  m="1236050">to</span> <span m="1236100">go</span> <span m="1236190">up</span>
  <span m="1236310">by</span> <span m="1236430">a</span> <span
  m="1236870">factor</span> <span m="1237180">of</span> <span
  m="1237270">two,</span> <span m="1237670">absent</span> <span
  m="1238050">some</span> <span m="1238940">interaction</span> <span
  m="1239470">between.</span> <span m="1240170">You</span> <span
  m="1240310">can,</span> <span m="1240990">in</span> <span
  m="1241090">principle,</span> <span m="1241250">get</span> <span
  m="1241360">interactions</span> <span m="1241760">there.</span> <span
  m="1242160">But</span> <span m="1242425">let's</span> <span
  m="1242690">for</span> <span m="1242810">now</span> <span
  m="1243020">assume</span> <span m="1243270">that there's</span> <span
  m="1243470">no</span> <span m="1243660">interaction.</span></p><p><span
  m="1244500">Right.</span> <span m="1244620">Then the intensity</span> <span
  m="1244720">wouldn't</span> <span m="1244880">need</span> <span
  m="1245050">to</span> <span m="1245400">go</span> <span m="1245560">up</span>
  <span m="1245700">by</span> <span m="1245820">a</span> <span
  m="1245920">factor</span> <span m="1246080">of</span> <span
  m="1246140">two.</span> <span m="1247000">But</span> <span
  m="1248140">unless</span> <span m="1248450">you're</span> <span
  m="1248610">very</span> <span m="1248970">careful</span> <span
  m="1249430">about</span> <span m="1250320">all</span> <span
  m="1250510">of</span> <span m="1250610">your</span> <span
  m="1250920">optics</span> <span m="1251290">and</span> <span
  m="1251360">so</span> <span m="1251470">forth,</span> <span
  m="1251660">it's</span> <span m="1251760">actually</span> <span
  m="1252390">a</span> <span m="1252490">challenge</span> <span
  m="1253000">to</span> <span m="1253100">use</span> <span
  m="1253310">this</span> <span m="1253460">intensity</span> <span
  m="1254440">alone</span> <span m="1255350">to</span> <span
  m="1256550">distinguish</span> <span m="1257010">these</span> <span
  m="1257180">things.</span> <span m="1259610">It's</span> <span
  m="1259760">only--</span> <span m="1260380">so</span> <span
  m="1260500">the</span> <span m="1260570">statement</span> <span
  m="1260920">with</span> <span m="1261050">a</span> <span
  m="1261090">diffraction--</span> <span m="1262030">you</span> <span
  m="1262390">need</span> <span m="1262750">these</span> <span
  m="1264040">two</span> <span m="1264390">proteins</span> <span
  m="1264860">to</span> <span m="1264930">be</span> <span
  m="1265020">separated</span> <span m="1265560">by</span> <span
  m="1265810">something</span> <span m="1266180">like</span> <span
  m="1266440">lambda</span> <span m="1266810">over</span> <span
  m="1267010">2</span> <span m="1267600">in</span> <span
  m="1267740">order</span> <span m="1267950">for</span> <span
  m="1268080">you</span> <span m="1268190">to</span> <span
  m="1268580">start</span> <span m="1268820">to</span> <span
  m="1268890">see</span> <span m="1269480">the</span> <span
  m="1269560">separation.</span></p><p><span m="1270360">Right.</span> <span
  m="1270680">Because</span> <span m="1270840">then</span> <span
  m="1271100">you</span> <span m="1271220">have</span> <span
  m="1271410">something</span> <span m="1271620">that</span> <span
  m="1271720">looks</span> <span m="1271770">like</span> <span
  m="1271920">this.</span> <span m="1272870">Something</span> <span
  m="1273120">that</span> <span m="1273220">looks</span> <span
  m="1273310">like</span> <span m="1273490">this.</span> <span
  m="1274130">And</span> <span m="1274310">then</span> <span
  m="1274460">the</span> <span m="1274590">sum</span> <span
  m="1274970">of</span> <span m="1275020">those</span> <span m="1275230">two,
  indeed--</span> <span m="1280190">so</span> <span m="1280290">you</span> <span
  m="1281050">say,</span> <span m="1281190">all</span> <span
  m="1281320">right,</span> <span m="1281480">well,</span> <span
  m="1281980">it</span> <span m="1282050">looks</span> <span
  m="1282190">like</span> <span m="1282300">there</span> <span
  m="1282410">are</span> <span m="1282480">two</span> <span
  m="1282700">molecules</span> <span m="1283320">there.</span></p><p><span
  m="1288570">Now,</span> <span m="1288810">I</span> <span
  m="1288910">just</span> <span m="1289040">want</span> <span
  m="1289170">to--</span> <span m="1290690">and</span> <span
  m="1291350">the</span> <span m="1292890">notion</span> <span
  m="1293230">of</span> <span m="1293290">a</span> <span m="1293330">lot</span>
  <span m="1293490">of</span> <span m="1293540">these</span> <span
  m="1293800">so-called</span> <span m="1294140">super</span> <span
  m="1294470">resolution</span> <span m="1294940">techniques</span> <span
  m="1295300">is</span> <span m="1295490">figuring</span> <span
  m="1295720">out</span> <span m="1295820">a</span> <span m="1295910">way</span>
  <span m="1296230">to</span> <span m="1296360">distinguish</span> <span
  m="1296760">these</span> <span m="1296910">things,</span> <span
  m="1297120">and we'll</span> <span m="1297280">maybe</span> <span
  m="1297520">say</span> <span m="1297680">something</span> <span
  m="1297960">about</span> <span m="1298160">that</span> <span
  m="1298260">in</span> <span m="1298320">a</span> <span
  m="1298370">moment.</span> <span m="1299060">But</span> <span
  m="1299160">I</span> <span m="1299230">just</span> <span
  m="1299380">want</span> <span m="1299510">to</span> <span
  m="1299560">highlight</span> <span m="1300440">that</span> <span
  m="1301360">if</span> <span m="1301510">we</span> <span
  m="1301600">come</span> <span m="1301820">back</span> <span
  m="1302030">to</span> <span m="1302100">the</span> <span
  m="1302160">situation</span> <span m="1302700">where</span> <span
  m="1302840">we</span> <span m="1302960">have</span> <span m="1303250">a</span>
  <span m="1303340">single</span> <span m="1303750">protein</span> <span
  m="1304030">there.</span> <span m="1306360">Now</span> <span
  m="1306470">the</span> <span m="1306540">question</span> <span
  m="1306810">is,</span> <span m="1307490">how</span> <span
  m="1311350">accurately</span> <span m="1311940">can</span> <span
  m="1312100">we</span> <span m="1312240">tell</span> <span
  m="1312470">where</span> <span m="1312600">that</span> <span
  m="1312770">protein</span> <span m="1313120">is,</span> <span
  m="1314230">if</span> <span m="1314370">we</span> <span m="1314460">know
  that</span> <span m="1314790">there's</span> <span m="1314970">just</span>
  <span m="1315170">a</span> <span m="1315210">single</span> <span
  m="1315563">protein there?</span></p><p><span m="1339230">Now</span> <span
  m="1339390">in</span> <span m="1339510">particular,</span> <span
  m="1340820">this</span> <span m="1341380">size</span> <span
  m="1341890">of</span> <span m="1341940">the</span> <span
  m="1342000">spot</span> <span m="1342320">is</span> <span
  m="1342410">telling</span> <span m="1342700">us</span> <span
  m="1342880">something,</span> <span m="1345570">but</span> <span
  m="1346680">it</span> <span m="1346870">might</span> <span
  m="1349610">not</span> <span m="1350590">be</span> <span
  m="1350970">quite</span> <span m="1351500">as</span> <span m="1351570">strong
  of a</span> <span m="1351910">limitation</span> <span m="1352410">as</span>
  <span m="1352540">it</span> <span m="1352610">appears</span> <span
  m="1352980">at</span> <span m="1353090">first</span> <span
  m="1353360">glance.</span> <span m="1355300">And</span> <span
  m="1355370">that's</span> <span m="1355520">because</span> <span
  m="1357100">in</span> <span m="1357200">this</span> <span
  m="1357400">case,</span> <span m="1357990">well</span> <span
  m="1358220">maybe</span> <span m="1358400">I'll</span> <span
  m="1358500">bring</span> <span m="1358640">it</span> <span
  m="1358720">back,</span> <span m="1361080">what we</span> <span
  m="1361440">see</span> <span m="1361640">is</span> <span m="1361740">a</span>
  <span m="1361790">big</span> <span m="1362020">spot.</span> <span
  m="1362990">300</span> <span m="1363340">nanometers,</span> <span
  m="1364110">kind</span> <span m="1364230">of</span> <span
  m="1364310">wide.</span></p><p><span m="1365300">But</span> <span
  m="1366560">if</span> <span m="1366740">we</span> <span m="1366840">see</span>
  <span m="1367030">this</span> <span m="1367200">and</span> <span
  m="1367280">we</span> <span m="1367370">know</span> <span
  m="1367640">it's</span> <span m="1367740">just</span> <span
  m="1367900">a</span> <span m="1367950">single</span> <span
  m="1368190">protein</span> <span m="1368450">there,</span> <span
  m="1368710">I</span> <span m="1368740">mean,</span> <span
  m="1368930">could</span> <span m="1369610">the</span> <span
  m="1369690">protein</span> <span m="1370100">be over</span> <span
  m="1370240">here?</span> <span m="1371440">No.</span> <span
  m="1372040">If</span> <span m="1372160">the</span> <span
  m="1372510">protein</span> <span m="1372780">where</span> <span
  m="1372880">over</span> <span m="1373000">here,</span> <span
  m="1373220">then</span> <span m="1373370">the</span> <span
  m="1373460">spot</span> <span m="1373810">would</span> <span
  m="1376800">be</span> <span m="1376930">over</span> <span
  m="1377040">there</span> <span m="1377280">right.</span> <span
  m="1378816">So</span> <span m="1379320">actually,</span> <span
  m="1379870">even</span> <span m="1380210">though</span> <span
  m="1380720">the</span> <span m="1381140">size</span> <span
  m="1381510">of</span> <span m="1381560">the</span> <span
  m="1381630">spot</span> <span m="1382000">is</span> <span m="1382790">300
  nanometers,</span> <span m="1383530">in</span> <span
  m="1383680">principle,</span> <span m="1384130">if</span> <span
  m="1384580">you</span> <span m="1384760">want</span> <span
  m="1384860">to</span> <span m="1384900">know</span> <span
  m="1385000">where</span> <span m="1385110">that</span> <span
  m="1385280">protein</span> <span m="1385570">is,</span> <span
  m="1385790">if</span> <span m="1385940">you</span> <span
  m="1386030">know</span> <span m="1386210">there's</span> <span
  m="1386400">just</span> <span m="1386600">a</span> <span
  m="1386630">single</span> <span m="1386880">protein,</span> <span
  m="1388410">well,</span> <span m="1388790">in</span> <span
  m="1388900">that</span> <span m="1389110">case</span> <span
  m="1389500">what</span> <span m="1389630">you want to</span> <span
  m="1389790">know</span> <span m="1389960">is,</span> <span
  m="1390160">where's</span> <span m="1390380">the</span> <span
  m="1390480">center</span> <span m="1390970">of</span> <span
  m="1391040">that</span> <span m="1391260">distribution?</span></p><p><span
  m="1393860">And</span> <span m="1394200">that</span> <span
  m="1394540">problem,</span> <span m="1395212">well,</span> <span
  m="1396080">the</span> <span m="1396170">width</span> <span
  m="1396380">of</span> <span m="1396420">the</span> <span
  m="1396480">distribution</span> <span m="1397040">is</span> <span
  m="1397310">relevant.</span> <span m="1399100">But</span> <span
  m="1400040">there's</span> <span m="1400220">something</span> <span
  m="1400490">else</span> <span m="1400700">that's</span> <span
  m="1400850">also</span> <span m="1401210">very</span> <span
  m="1401550">relevant.</span> <span m="1405570">And</span> <span
  m="1406030">quite</span> <span m="1406290">generally,</span> <span
  m="1407180">if</span> <span m="1407280">you</span> <span
  m="1407410">measure</span> <span m="1407780">some</span> <span
  m="1407970">quantity</span> <span m="1409550">n</span> <span
  m="1409770">times,</span> <span m="1410600">and</span> <span
  m="1410700">you</span> <span m="1410820">want</span> <span
  m="1411020">to</span> <span m="1411060">know--</span> <span
  m="1418560">so</span> <span m="1418680">you're</span> <span
  m="1418830">measuring</span> <span m="1421070">the</span> <span
  m="1421160">height</span> <span m="1421730">of</span> <span
  m="1422570">min</span> <span m="1422960">entering</span> <span
  m="1423215">the</span> <span m="1423470">army--</span> <span
  m="1424505">if</span> <span m="1424790">you</span> <span
  m="1425100">want</span> <span m="1425220">to</span> <span
  m="1425260">know</span> <span m="1425980">the</span> <span
  m="1426000">mean,</span> <span m="1428610">what</span> <span
  m="1428760">is</span> <span m="1428850">it</span> <span
  m="1428980">that</span> <span m="1429030">determines</span> <span
  m="1431130">your</span> <span m="1431760">uncertainty</span> <span
  m="1432410">around</span> <span m="1432730">the</span> <span
  m="1432790">mean?</span></p><p><span m="1434890">Right.</span> <span
  m="1435060">There's</span> <span m="1435210">the</span> <span
  m="1435290">sample</span> <span m="1435660">size.</span> <span
  m="1437840">Now,</span> <span m="1438360">does</span> <span
  m="1438520">the</span> <span m="1438600">width</span> <span m="1438710">of
  the</span> <span m="1438840">distribution</span> <span
  m="1439480">enter?</span> <span m="1442440">Yeah.</span> <span
  m="1442840">So</span> <span m="1442940">in</span> <span
  m="1443090">general,</span> <span m="1444320">your</span> <span
  m="1444790">uncertainty</span> <span m="1446770">in</span> <span
  m="1446930">the</span> <span m="1447000">mean</span> <span
  m="1451590">is</span> <span m="1451750">going</span> <span
  m="1452000">to</span> <span m="1452080">go</span> <span
  m="1453830">with</span> <span m="1454170">the</span> <span
  m="1454350">width</span> <span m="1454620">of</span> <span
  m="1454670">the</span> <span m="1454740">distribution,</span> <span
  m="1455620">sigma</span> <span m="1456070">of</span> <span
  m="1456600">whatever,</span> <span m="1457860">divided</span> <span
  m="1458210">by--</span> <span m="1459720">what do</span> <span
  m="1459820">I</span> <span m="1459920">put</span> <span
  m="1460160">down</span> <span m="1460330">here?</span> <span m="1463005">Root
  of</span> <span m="1463490">N,</span> <span m="1465230">where</span> <span
  m="1465700">N</span> <span m="1466020">is</span> <span m="1466160">the</span>
  <span m="1466270">number</span> <span m="1466610">of</span> <span
  m="1466670">samples</span> <span m="1467200">that</span> <span
  m="1467320">we</span> <span m="1467420">take.</span></p><p><span
  m="1473180">What</span> <span m="1473380">this</span> <span
  m="1473660">is</span> <span m="1473800">saying</span> <span
  m="1474070">is</span> <span m="1474160">that</span> <span
  m="1477140">as</span> <span m="1477480">we</span> <span
  m="1478010">sample</span> <span m="1478490">this</span> <span
  m="1478670">distribution</span> <span m="1479540">more</span> <span
  m="1479840">and</span> <span m="1479900">more,</span> <span
  m="1482070">does</span> <span m="1482210">the</span> <span
  m="1482310">standard</span> <span m="1482730">deviation</span> <span
  m="1483260">of</span> <span m="1483320">the</span> <span
  m="1483390">distribution,</span> <span m="1484790">does</span> <span
  m="1484940">it</span> <span m="1485350">go</span> <span m="1485450">to</span>
  <span m="1485520">0?</span> <span m="1487610">No.</span> <span
  m="1490700">These</span> <span m="1490880">are</span> <span
  m="1490960">all</span> <span m="1491090">trivial</span> <span
  m="1491380">statements,</span> <span m="1491820">but</span> <span
  m="1491910">I</span> <span m="1491950">can't</span> <span
  m="1492190">tell</span> <span m="1492300">you</span> <span
  m="1492400">how</span> <span m="1492620">many</span> <span
  m="1492820">times</span> <span m="1493940">I</span> <span
  m="1494040">see</span> <span m="1494250">this</span> <span
  m="1494490">getting</span> <span m="1494700">confused.</span></p><p><span
  m="1495210">OK.</span> <span m="1495680">So</span> <span m="1495800">if
  you</span> <span m="1496090">measure</span> <span m="1496590">many,</span>
  <span m="1496940">many,</span> <span m="1497090">many</span> <span
  m="1497170">times,</span> <span m="1497450">you</span> <span
  m="1497510">get</span> <span m="1497630">a</span> <span
  m="1497660">very</span> <span m="1498140">beautiful</span> <span
  m="1498440">distribution.</span> <span m="1500260">Right.</span> <span
  m="1501740">The</span> <span m="1501830">width</span> <span
  m="1502070">of</span> <span m="1502140">this</span> <span m="1502340">region
  of the</span> <span m="1502620">sigma,</span> <span m="1503570">that</span>
  <span m="1504090">you</span> <span m="1504220">get</span> <span
  m="1504420">very</span> <span m="1504680">accurately.</span> <span
  m="1505805">It's</span> <span m="1506300">true</span> <span
  m="1506440">also</span> <span m="1506640">that your</span> <span
  m="1506900">uncertainty</span> <span m="1507165">in</span> <span
  m="1507430">the width,</span> <span m="1508840">that</span> <span
  m="1508990">actually</span> <span m="1509140">does</span> <span
  m="1509300">go</span> <span m="1509370">to</span> <span m="1509420">0.</span>
  <span m="1509660">But the</span> <span m="1509750">width</span> <span
  m="1509960">of</span> <span m="1510080">it,</span> <span
  m="1510290">the</span> <span m="1510430">width</span> <span
  m="1510600">doesn't</span> <span m="1510830">go</span> <span
  m="1510880">to</span> <span m="1510940">0.</span> <span m="1511300">The</span>
  <span m="1511380">width</span> <span m="1512500">of</span> <span
  m="1512550">the</span> <span m="1512610">distribution.</span></p><p><span
  m="1513890">But</span> <span m="1514010">your</span> <span
  m="1514170">uncertainty</span> <span m="1514740">in</span> <span
  m="1515140">the</span> <span m="1515280">mean,</span> <span
  m="1516700">that</span> <span m="1516900">goes</span> <span
  m="1517050">down</span> <span m="1517310">as</span> <span m="1517510">1</span>
  <span m="1517700">over</span> <span m="1517990">root of N.</span> <span
  m="1518950">And</span> <span m="1519200">what</span> <span
  m="1519420">is</span> <span m="1519670">N</span> <span m="1520050">in</span>
  <span m="1520140">the</span> <span m="1520210">case</span> <span
  m="1520560">our</span> <span m="1522160">detection</span> <span
  m="1522810">business</span> <span m="1523100">here?</span> <span
  m="1525650">The</span> <span m="1525730">number</span> <span
  m="1526020">of</span> <span m="1526080">photons.</span> <span
  m="1526730">Right?</span></p><p><span m="1527170">Now,</span> <span
  m="1527380">of</span> <span m="1527460">course,</span> <span
  m="1529260">in</span> <span m="1529430">the</span> <span
  m="1529540">actual</span> <span m="1529900">experiment,</span> <span
  m="1530550">we</span> <span m="1530650">don't</span> <span
  m="1530890">get</span> <span m="1531260">precisely</span> <span
  m="1531860">this</span> <span m="1532030">distribution.</span> <span
  m="1532600">Instead,</span> <span m="1533230">it's</span> <span
  m="1533440">kind</span> <span m="1533680">of</span> <span
  m="1534590">sort</span> <span m="1534760">of</span> <span
  m="1534860">quantized</span> <span m="1535520">somehow</span> <span
  m="1535740">spatially,</span> <span m="1536270">because</span> <span
  m="1536510">we're</span> <span m="1536660">actually</span> <span
  m="1536860">detecting</span> <span m="1537340">it</span> <span
  m="1537530">on</span> <span m="1537760">a</span> <span m="1537810">CCD</span>
  <span m="1538310">chip.</span> <span m="1539120">All</span> <span
  m="1539200">right.</span> <span m="1539340">So</span> <span
  m="1539420">you</span> <span m="1539540">can</span> <span
  m="1539680">go</span> <span m="1539980">and</span> <span m="1540080">do</span>
  <span m="1540170">the</span> <span m="1540260">math,</span> <span
  m="1540600">figure</span> <span m="1540900">out</span> <span
  m="1541210">everything.</span> <span m="1541760">But</span> <span
  m="1541870">actually,</span> <span m="1542090">that's</span> <span
  m="1542300">not</span> <span m="1542500">as</span> <span
  m="1542570">much</span> <span m="1542740">a</span> <span
  m="1542820">limitation</span> <span m="1543250">as</span> <span
  m="1543320">you</span> <span m="1543410">might</span> <span
  m="1543550">have</span> <span m="1543710">expected.</span></p><p><span
  m="1545220">In</span> <span m="1545350">many</span> <span
  m="1545570">cases,</span> <span m="1545910">the</span> <span
  m="1546010">pixel</span> <span m="1546370">size</span> <span
  m="1546760">on</span> <span m="1546860">the</span> <span
  m="1546980">image</span> <span m="1547310">plane</span> <span
  m="1547970">is</span> <span m="1548110">actually</span> <span
  m="1548760">something</span> <span m="1548960">like</span> <span
  m="1549070">100 nanometers.</span> <span m="1551060">So</span> <span
  m="1551190">this</span> <span m="1551380">distribution</span> <span
  m="1551910">that</span> <span m="1552090">measure,</span> <span
  m="1553690">although</span> <span m="1554410">in</span> <span
  m="1554520">principle</span> <span m="1554890">it</span> <span
  m="1554960">looks</span> <span m="1555120">like</span> <span
  m="1555250">this,</span> <span m="1555600">what you</span> <span
  m="1555710">actually</span> <span m="1556120">measure</span> <span
  m="1556460">is</span> <span m="1556540">something</span> <span
  m="1556860">that</span> <span m="1556990">looks</span> <span
  m="1557420">like--</span> <span m="1560040">well,</span> <span
  m="1560190">maybe</span> <span m="1560380">I</span> <span
  m="1560410">should--</span> <span m="1569040">something</span> <span
  m="1569330">like</span> <span m="1569480">that.</span> <span
  m="1569960">Right.</span> <span m="1570670">Because</span> <span
  m="1571270">you</span> <span m="1571440">have</span> <span
  m="1571800">discrete</span> <span m="1573220">pixels</span> <span
  m="1573700">on</span> <span m="1574320">the</span> <span
  m="1574390">CCD.</span></p><p><span m="1576990">And it</span> <span
  m="1577870">feels</span> <span m="1578340">that</span> <span m="1578540">that
  should</span> <span m="1578650">just</span> <span m="1578860">kind</span>
  <span m="1579000">of</span> <span m="1579070">totally</span> <span
  m="1579820">screw</span> <span m="1580110">you.</span> <span
  m="1580210">But</span> <span m="1580460">if</span> <span
  m="1580860">you</span> <span m="1581010">go</span> <span
  m="1581250">and</span> <span m="1581330">do</span> <span
  m="1581430">the</span> <span m="1581500">math,</span> <span
  m="1581710">you</span> <span m="1581800">find</span> <span
  m="1581980">it's</span> <span m="1582080">not</span> <span
  m="1582590">as</span> <span m="1582710">bad</span> <span m="1582900">as</span>
  <span m="1582970">you</span> <span m="1583050">might</span> <span
  m="1583170">expect.</span> <span m="1584430">So</span> <span
  m="1584600">broadly,</span> <span m="1585180">you</span> <span
  m="1585310">do</span> <span m="1585570">get</span> <span
  m="1585920">essentially</span> <span m="1586420">something</span> <span
  m="1586620">that goes</span> <span m="1587060">as</span> <span
  m="1587210">1</span> <span m="1587380">over</span> <span m="1587680">the root
  of N,</span> <span m="1588020">where</span> <span m="1588030">N</span> <span
  m="1588200">is</span> <span m="1588300">the</span> <span
  m="1588360">number</span> <span m="1588570">of</span> <span
  m="1588630">photons.</span> <span m="1589370">And</span> <span
  m="1589540">if</span> <span m="1589600">you</span> <span
  m="1589720">collect</span> <span m="1590920">10</span> <span
  m="1591330">to</span> <span m="1591370">the</span> <span m="1591460">4</span>
  <span m="1591640">photons,</span> <span m="1593730">that</span> <span
  m="1593930">actually,</span> <span m="1594275">it's</span> <span
  m="1594620">a</span> <span m="1594680">lot</span> <span m="1594860">of</span>
  <span m="1594920">photons.</span></p><p><span m="1595940">So</span> <span
  m="1596450">if</span> <span m="1596600">we</span> <span
  m="1596700">want</span> <span m="1596870">to</span> <span
  m="1596920">know</span> <span m="1597200">the</span> <span
  m="1598070">uncertainty</span> <span m="1598740">in</span> <span
  m="1599240">the</span> <span m="1599560">center</span> <span
  m="1600050">of</span> <span m="1600160">our</span> <span
  m="1600270">distribution,</span> <span m="1600790">well,</span> <span
  m="1601510">this</span> <span m="1601700">thing,</span> <span
  m="1602530">we</span> <span m="1602770">might</span> <span
  m="1603020">have</span> <span m="1603130">something</span> <span
  m="1603470">that's</span> <span m="1603600">of</span> <span
  m="1603700">order</span> <span m="1603920">300</span> <span
  m="1604670">nanometers</span> <span m="1605750">here.</span> <span
  m="1606910">We</span> <span m="1606920">take</span> <span
  m="1607050">the</span> <span m="1607110">square</span> <span
  m="1607540">root</span> <span m="1607820">of</span> <span
  m="1607900">10</span> <span m="1608100">to</span> <span m="1608140">the</span>
  <span m="1608230">4.</span></p><p><span m="1611540">All right.</span> <span
  m="1611630">So we</span> <span m="1611710">get</span> <span
  m="1611840">to</span> <span m="1611900">divide</span> <span
  m="1612210">by</span> <span m="1612280">something</span> <span
  m="1612650">like</span> <span m="1612790">100.</span> <span
  m="1615340">And</span> <span m="1615610">these</span> <span
  m="1615800">are</span> <span m="1615870">all</span> <span
  m="1615980">very</span> <span m="1616200">rough</span> <span
  m="1616580">numbers.</span> <span m="1617330">But</span> <span
  m="1620150">the</span> <span m="1620230">point</span> <span
  m="1620410">is</span> <span m="1620480">that</span> <span
  m="1620590">we</span> <span m="1620690">can</span> <span
  m="1620820">get</span> <span m="1621000">down</span> <span
  m="1621180">to</span> <span m="1621260">nanometer</span> <span
  m="1622010">resolution</span> <span m="1623550">in</span> <span
  m="1623680">terms</span> <span m="1623980">of</span> <span
  m="1624100">the</span> <span m="1625040">uncertainty</span> <span
  m="1625340">that</span> <span m="1625640">which</span> <span
  m="1625850">we</span> <span m="1625950">know</span> <span
  m="1626150">the</span> <span m="1626250">mean</span> <span
  m="1626570">of</span> <span m="1626620">that</span> <span
  m="1626760">distribution.</span> <span m="1628060">Yes?</span></p><p><span
  m="1629160">AUDIENCE: [INAUDIBLE].</span></p><p><span m="1633410">PROFESSOR:
  Yeah,</span> <span m="1633820">yeah. Right.</span> <span m="1634050">So</span>
  <span m="1634140">again,</span> <span m="1635200">it's</span> <span
  m="1635590">surprising.</span> <span m="1635940">The</span> <span
  m="1636030">thing</span> <span m="1636200">is</span> <span
  m="1636300">that</span> <span m="1637620">even</span> <span
  m="1637910">with</span> <span m="1638030">just</span> <span
  m="1638310">two,</span> <span m="1639100">in</span> <span
  m="1639240">principle,</span> <span m="1639650">we</span> <span
  m="1639750">can</span> <span m="1639850">be</span> <span
  m="1639950">very</span> <span m="1640010">sensitive.</span> <span
  m="1640530">Right?</span> <span m="1640800">I</span> <span
  m="1640830">mean,</span> <span m="1644270">actually,</span> <span
  m="1644550">sometimes</span> <span m="1644870">people</span> <span
  m="1645070">actually</span> <span m="1645250">do</span> <span
  m="1645400">just</span> <span m="1645560">put</span> <span m="1645680">it on
  like</span> <span m="1645980">quadrant</span> <span m="1646390">photo</span>
  <span m="1646770">detector,</span> <span m="1647470">where</span> <span
  m="1647580">you</span> <span m="1648020">really</span> <span
  m="1648260">only</span> <span m="1648440">get</span> <span
  m="1649230">essentially</span> <span m="1649590">binary</span> <span
  m="1650040">information.</span> <span m="1650610">But</span> <span
  m="1651110">even</span> <span m="1651350">with</span> <span
  m="1651450">just</span> <span m="1651670">two,</span> <span
  m="1652720">if</span> <span m="1652880">I</span> <span m="1652950">say</span>
  <span m="1653150">OK,</span> <span m="1653460">well,</span> <span
  m="1653720">it</span> <span m="1653890">looks</span> <span
  m="1654100">like</span> <span m="1654280">this,</span> <span
  m="1654930">or</span> <span m="1655700">if</span> <span m="1656130">it</span>
  <span m="1656210">looks</span> <span m="1656390">a</span> <span
  m="1656440">little</span> <span m="1656610">bit</span> <span
  m="1657040">like</span> <span m="1657150">that,</span> <span
  m="1657430">if</span> <span m="1657850">there's</span> <span
  m="1657990">no</span> <span m="1658190">error</span> <span m="1658630">in
  our</span> <span m="1658720">measurements</span> <span
  m="1659030">there,</span> <span m="1659380">then</span> <span
  m="1659580">you</span> <span m="1659700">can</span> <span
  m="1659840">actually</span> <span m="1661260">get</span> <span
  m="1661910">that</span> <span m="1662140">location</span> <span
  m="1662480">very</span> <span m="1662710">well.</span> <span
  m="1663120">Yeah.</span></p><p><span m="1664950">It's</span> <span
  m="1665090">surprising.</span> <span m="1665840">I'm</span> <span
  m="1665960">not</span> <span m="1667050">going</span> <span m="1667430">to
  like.</span> <span m="1668290">Yeah,</span> <span m="1668400">but</span> <span
  m="1668510">even</span> <span m="1668810">with</span> <span
  m="1669000">this</span> <span m="1669880">quantization</span> <span
  m="1670520">of</span> <span m="1670590">some</span> <span
  m="1670700">sort</span> <span m="1670820">that's</span> <span
  m="1670870">due</span> <span m="1670990">to the</span> <span
  m="1671400">CCD,</span> <span m="1672510">city</span> <span
  m="1672980">you</span> <span m="1673100">can</span> <span
  m="1673200">still</span> <span m="1673450">get</span> <span m="1673570">down
  to</span> <span m="1673940">nanometer</span> <span
  m="1674310">resolution.</span> <span m="1679310">Your</span> <span
  m="1679630">resolution</span> <span m="1680010">is</span> <span
  m="1680100">worse than it</span> <span m="1680520">would</span> <span
  m="1680590">be</span> <span m="1680700">if</span> <span m="1680780">you
  knew</span> <span m="1681010">actually</span> <span m="1681280">exactly</span>
  <span m="1681610">where</span> <span m="1681860">each</span> <span
  m="1681990">photon was</span> <span m="1682310">hitting,</span> <span
  m="1682490">but</span> <span m="1683730">it's</span> <span
  m="1683860">not</span> <span m="1683970">very</span> <span
  m="1684110">sensitive,</span> <span m="1684470">actually.</span></p><p><span
  m="1686660">And</span> <span m="1686840">indeed,</span> <span
  m="1687170">in</span> <span m="1687260">the</span> <span
  m="1687350">presence</span> <span m="1687970">of--</span> <span
  m="1688330">and this</span> <span m="1688470">is</span> <span
  m="1688510">a</span> <span m="1688560">highly</span> <span
  m="1688800">technical</span> <span m="1689200">comment.</span> <span
  m="1689510">But</span> <span m="1689930">in</span> <span
  m="1690040">the</span> <span m="1690120">presence</span> <span
  m="1691190">of</span> <span m="1691370">read</span> <span
  m="1691690">noise</span> <span m="1692160">and other</span> <span
  m="1692350">kinds</span> <span m="1692550">of</span> <span
  m="1692630">noise</span> <span m="1692970">in</span> <span
  m="1693040">the</span> <span m="1693110">CCD,</span> <span
  m="1693540">actually,</span> <span m="1694350">in</span> <span
  m="1694470">many</span> <span m="1694700">cases,</span> <span
  m="1695050">it's</span> <span m="1695170">actually</span> <span
  m="1695380">better</span> <span m="1695590">to have</span> <span
  m="1695700">somewhat</span> <span m="1696000">larger</span> <span
  m="1696360">pixels,</span> <span m="1697610">again,</span> <span
  m="1698340">than</span> <span m="1698980">you</span> <span
  m="1699070">would</span> <span m="1699160">expect.</span></p><p><span
  m="1699960">So</span> <span m="1700220">these</span> <span
  m="1700790">balancing</span> <span m="1701230">many</span> <span
  m="1701300">different</span> <span m="1701600">things.</span> <span
  m="1703020">People</span> <span m="1703300">have thought</span> <span
  m="1703580">carefully</span> <span m="1703890">about</span> <span
  m="1704040">this</span> <span m="1704110">stuff.</span> <span
  m="1704390">But</span> <span m="1704840">in</span> <span
  m="1704920">the</span> <span m="1705010">end,</span> <span
  m="1705220">100</span> <span m="1705580">nanometer</span> <span
  m="1705830">pixel</span> <span m="1706140">is</span> <span
  m="1706250">actually</span> <span m="1707600">fine.</span> <span
  m="1708780">And</span> <span m="1708970">just</span> <span m="1709140">to
  be</span> <span m="1709250">clear,</span> <span m="1709640">it's</span> <span
  m="1709780">100 nanometers</span> <span m="1710470">at</span> <span
  m="1710970">the</span> <span m="1711410">sample</span> <span
  m="1711820">plane.</span> <span m="1713120">So</span> <span
  m="1713260">it's</span> <span m="1713390">typically</span> <span
  m="1713700">of order</span> <span m="1713910">10</span> <span
  m="1714120">microns</span> <span m="1715530">size</span> <span
  m="1716110">on</span> <span m="1716320">the</span> <span
  m="1716670">camera</span> <span m="1717050">itself.</span> <span
  m="1718470">So</span> <span m="1718480">the</span> <span
  m="1718560">physical</span> <span m="1719000">size</span> <span
  m="1719370">of</span> <span m="1720060">each</span> <span
  m="1720320">of</span> <span m="1720470">the</span> <span
  m="1720800">pixels</span> <span m="1721150">on</span> <span
  m="1721230">the</span> <span m="1721290">cameras,</span> <span
  m="1723680">10</span> <span m="1724230">microns</span> <span
  m="1724860">within a</span> <span m="1725080">factor</span> <span
  m="1725310">of</span> <span m="1725673">2,</span> <span m="1726400">between 5
  and</span> <span m="1726470">20,</span> <span m="1727030">but</span> <span
  m="1727170">then</span> <span m="1727540">you</span> <span
  m="1727660">get</span> <span m="1727770">100x</span> <span
  m="1728370">typically</span> <span m="1728990">magnification</span> <span
  m="1729840">at</span> <span m="1729970">the</span> <span
  m="1730040">sample</span> <span m="1730360">point.</span></p><p><span
  m="1732620">So</span> <span m="1733300">to be</span> <span
  m="1733450">clear,</span> <span m="1733710">10</span> <span
  m="1734280">microns</span> <span m="1734700">divided</span> <span
  m="1734930">by</span> <span m="1735020">100</span> <span m="1735510">is</span>
  <span m="1735970">100</span> <span m="1736390">nanometers.</span> <span
  m="1738770">Is</span> <span m="1739320">everybody</span> <span
  m="1739550">following?</span> <span m="1740280">OK</span> <span
  m="1740660">I</span> <span m="1740750">don't</span> <span
  m="1740860">want</span> <span m="1741190">to--</span> <span m="1741628">all
  right.</span> <span m="1743820">The</span> <span m="1743990">key</span> <span
  m="1744240">thing--</span> <span m="1744620">three,</span> <span
  m="1745200">you</span> <span m="1745300">can</span> <span
  m="1745320">ignore.</span> <span m="1745710">But</span> <span
  m="1745830">the</span> <span m="1746090">key</span> <span
  m="1746420">thing</span> <span m="1746660">to</span> <span
  m="1746750">notice</span> <span m="1747020">here</span> <span
  m="1747700">is</span> <span m="1747940">this</span> <span
  m="1748820">thing</span> <span m="1749090">that's here,</span> <span
  m="1749330">which</span> <span m="1749470">is</span> <span
  m="1749580">nanometer</span> <span m="1750090">resolution.</span> <span
  m="1754980">And</span> <span m="1755300">it's</span> <span
  m="1755410">been</span> <span m="1755570">known</span> <span
  m="1756450">for</span> <span m="1756620">decades</span> <span
  m="1757160">that</span> <span m="1757370">this</span> <span
  m="1758880">is,</span> <span m="1759050">in</span> <span
  m="1759150">principle,</span> <span m="1759510">possible</span> <span
  m="1760090">and</span> <span m="1760180">so</span> <span
  m="1760240">forth.</span> <span m="1760890">But</span> <span
  m="1761660">I</span> <span m="1761780">think</span> <span
  m="1761950">that</span> <span m="1762200">within</span> <span
  m="1762520">the</span> <span m="1762620">realm</span> <span
  m="1762880">of</span> <span m="1762980">single</span> <span
  m="1763340">molecule</span> <span m="1763790">biophysics,</span> <span
  m="1765820">it</span> <span m="1765990">was</span> <span
  m="1766120">really</span> <span m="1766400">popularized</span> <span
  m="1768050">in</span> <span m="1768550">some</span> <span
  m="1769950">very</span> <span m="1770150">nice</span> <span
  m="1770370">papers</span> <span m="1771520">by</span> <span
  m="1772000">Ahmet</span> <span m="1772140">Yildiz,</span> <span
  m="1772460">et</span> <span m="1772850">al,</span> <span
  m="1775140">where</span> <span m="1775290">they</span> <span
  m="1776730">attached</span> <span m="1777060">single</span> <span
  m="1777380">molecules</span> <span m="1777920">onto</span> <span
  m="1778350">the</span> <span m="1779960">heads</span> <span
  m="1780410">of</span> <span m="1780490">various</span> <span
  m="1780810">motors</span> <span m="1781240">as</span> <span
  m="1781340">they</span> <span m="1781440">were</span> <span
  m="1781770">walking</span> <span m="1782880">along</span> <span
  m="1783180">tracks,</span> <span m="1783590">and</span> <span
  m="1783700">showing</span> <span m="1784100">that</span> <span
  m="1784250">these</span> <span m="1784400">motors</span> <span
  m="1784820">were</span> <span m="1784920">walking</span> <span
  m="1785280">kind</span> <span m="1785430">of</span> <span
  m="1785470">like</span> <span m="1785680">this,</span> <span
  m="1786190">by</span> <span m="1786320">catching</span> <span
  m="1786680">fluorophores</span> <span m="1787240">here,</span> <span
  m="1787440">and then</span> <span m="1787560">you</span> <span
  m="1787650">could</span> <span m="1787750">really</span> <span
  m="1787920">just</span> <span m="1787990">see</span> <span
  m="1788330">it,</span> <span m="1788760">see</span> <span
  m="1788970">them</span> <span m="1789100">walking it.</span></p><p><span
  m="1794490">Any</span> <span m="1794670">questions</span> <span
  m="1794990">about</span> <span m="1795260">why</span> <span
  m="1795600">it's</span> <span m="1795960">in</span> <span
  m="1796060">principle</span> <span m="1796460">possible</span> <span
  m="1796880">to</span> <span m="1796920">get</span> <span
  m="1797050">nanometer</span> <span m="1797410">resolution</span> <span
  m="1798390">in</span> <span m="1798460">this</span> <span
  m="1798610">process?</span></p><p><span m="1800536">AUDIENCE: Doesn't</span>
  <span m="1801018">this</span> <span m="1801500">assume</span> <span
  m="1801982">that the protein</span> <span m="1802464">is</span> <span
  m="1802946">100%</span> <span m="1803428">static?</span></p><p><span
  m="1804874">PROFESSOR: Yes.</span></p><p><span m="1805838">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="1811150">PROFESSOR: Yeah.</span> <span
  m="1811730">Yeah,</span> <span m="1811880">indeed.</span> <span
  m="1812480">Right</span> <span m="1812600">now,</span> <span
  m="1812700">I'm</span> <span m="1812970">assuming</span> <span
  m="1813320">that this</span> <span m="1813540">thing</span> <span
  m="1813730">is</span> <span m="1814690">constant.</span> <span
  m="1815360">And</span> <span m="1815560">the</span> <span
  m="1815710">question</span> <span m="1815970">is</span> <span
  m="1816060">like,</span> <span m="1817360">how</span> <span
  m="1817540">much</span> <span m="1817920">movement</span> <span
  m="1818430">is</span> <span m="1818560">a</span> <span
  m="1818620">problem?</span> <span m="1819330">And</span> <span
  m="1819350">so</span> <span m="1819430">then</span> <span
  m="1819540">you</span> <span m="1819780">have</span> <span
  m="1819880">to--</span> <span m="1821010">you</span> <span
  m="1821120">know.</span></p><p><span m="1822068">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="1825860">PROFESSOR: That's</span> <span
  m="1826150">right.</span> <span m="1826360">So</span> <span
  m="1826570">indeed,</span> <span m="1828330">often,</span> <span
  m="1828600">you're</span> <span m="1828720">trading</span> <span
  m="1829070">off</span> <span m="1829250">spatial</span> <span
  m="1829750">resolution</span> <span m="1830210">for</span> <span
  m="1830330">temporal</span> <span m="1830700">resolution.</span> <span
  m="1831690">And</span> <span m="1831800">also,</span> <span
  m="1832270">the</span> <span m="1832580">intensity</span> <span
  m="1833560">of</span> <span m="1833690">your</span> <span
  m="1833810">laser,</span> <span m="1834200">and</span> <span
  m="1834300">so</span> <span m="1834400">forth.</span> <span
  m="1834840">But</span> <span m="1834880">in</span> <span
  m="1835050">these</span> <span m="1835280">sort of</span> <span
  m="1835340">experiments,</span> <span m="1835830">I</span> <span
  m="1835870">think</span> <span m="1836040">that</span> <span
  m="1837870">what</span> <span m="1838020">they</span> <span
  m="1838110">did</span> <span m="1838260">is</span> <span
  m="1838320">they</span> <span m="1838420">slowed</span> <span
  m="1838830">down</span> <span m="1839120">the</span> <span
  m="1839200">motors</span> <span m="1839770">quite</span> <span
  m="1840030">a</span> <span m="1840100">lot.</span> <span m="1840910">So</span>
  <span m="1841000">it was</span> <span m="1841130">limiting</span> <span
  m="1841610">ATP.</span></p><p><span m="1842410">So</span> <span
  m="1842530">indeed,</span> <span m="1842880">the</span> <span
  m="1842970">motors</span> <span m="1843400">in</span> <span
  m="1843510">those</span> <span m="1843680">experiments,</span> <span
  m="1844260">I</span> <span m="1844350">think</span> <span
  m="1844490">they</span> <span m="1844570">were</span> <span
  m="1844670">taking</span> <span m="1844960">steps</span> <span
  m="1845370">of</span> <span m="1845470">order</span> <span
  m="1845920">every</span> <span m="1847880">second</span> <span
  m="1848340">or</span> <span m="1848420">10</span> <span
  m="1848620">seconds.</span> <span m="1848990">I mean, it</span> <span
  m="1849090">was</span> <span m="1849430">as</span> <span
  m="1849700">slow</span> <span m="1850060">as</span> <span m="1850140">you
  can</span> <span m="1850350">go,</span> <span m="1850640">and</span> <span
  m="1850990">still,</span> <span m="1851900">yes.</span> <span
  m="1852080">And</span> <span m="1852150">then</span> <span
  m="1852390">at</span> <span m="1852470">each</span> <span
  m="1852650">location,</span> <span m="1853110">I</span> <span
  m="1853140">think</span> <span m="1853530">they</span> <span
  m="1853580">were</span> <span m="1853680">collecting</span> <span
  m="1853980">10</span> <span m="1854140">to the 4</span> <span
  m="1854590">or</span> <span m="1854880">a</span> <span m="1855170">few</span>
  <span m="1855360">10 to the 4</span> <span m="1855840">photons.</span> <span
  m="1859310">And</span> <span m="1859460">incidentally</span> <span
  m="1859890">in</span> <span m="1859960">this</span> <span
  m="1860110">case,</span> <span m="1860920">these</span> <span
  m="1861080">are</span> <span m="1861120">the</span> <span
  m="1861240">photons</span> <span m="1861590">that</span> <span
  m="1861660">are</span> <span m="1861740">being</span> <span
  m="1861900">collected.</span> <span m="1862850">And</span> <span
  m="1863110">typically,</span> <span m="1863540">you</span> <span
  m="1863630">would</span> <span m="1863700">only</span> <span
  m="1863860">be</span> <span m="1863980">collecting</span> <span
  m="1865100">10%,</span> <span m="1865850">15%</span> <span
  m="1866280">of</span> <span m="1867210">the</span> <span
  m="1867280">photons.</span> <span m="1867820">Because</span> <span
  m="1868180">the</span> <span m="1868240">photons</span> <span
  m="1868560">are</span> <span m="1868600">actually</span> <span
  m="1868820">being</span> <span m="1868970">emitted</span> <span
  m="1870440">everywhere.</span> <span m="1871380">But</span> <span
  m="1871530">you only</span> <span m="1872460">collect</span> <span
  m="1872770">the ones</span> <span m="1872950">that</span> <span
  m="1873100">go</span> <span m="1873400">back</span> <span
  m="1873600">to</span> <span m="1873660">your</span> <span
  m="1873780">objective.</span></p><p><span m="1880680">All right.</span> <span
  m="1881750">I</span> <span m="1882100">just want</span> <span
  m="1882200">to</span> <span m="1882240">make</span> <span
  m="1882400">one</span> <span m="1882650">comment</span> <span
  m="1882980">about</span> <span m="1883940">the</span> <span
  m="1884000">super</span> <span m="1884240">resolution</span> <span
  m="1884710">techniques</span> <span m="1885160">that</span> <span
  m="1885600">have</span> <span m="1885850">been</span> <span
  m="1886290">spreading.</span> <span m="1887500">So</span> <span
  m="1887840">the</span> <span m="1887950">question</span> <span
  m="1888290">here</span> <span m="1888510">is,</span> <span
  m="1888600">well,</span> <span m="1888850">let's</span> <span
  m="1889000">say</span> <span m="1889080">that you</span> <span
  m="1889220">have</span> <span m="1889350">two</span> <span
  m="1889590">proteins</span> <span m="1890400">next</span> <span
  m="1890590">to</span> <span m="1890660">each</span> <span
  m="1890780">other.</span> <span m="1891900">What</span> <span
  m="1891970">can</span> <span m="1892090">you</span> <span
  m="1892180">do?</span></p><p><span m="1895110">Now,</span> <span
  m="1896070">the</span> <span m="1896180">basic</span> <span
  m="1896570">idea</span> <span m="1897060">of</span> <span
  m="1897190">all</span> <span m="1897360">these</span> <span
  m="1898580">super</span> <span m="1898790">resolution</span> <span
  m="1899160">techniques</span> <span m="1899610">is</span> <span
  m="1899820">that</span> <span m="1900940">if</span> <span
  m="1902870">we</span> <span m="1902990">know</span> <span
  m="1903300">that</span> <span m="1903400">we</span> <span m="1903500">have
  a</span> <span m="1903640">signal</span> <span m="1903890">for</span> <span
  m="1903980">only</span> <span m="1904170">one</span> <span
  m="1904370">protein,</span> <span m="1905200">then</span> <span
  m="1905340">we</span> <span m="1905450">can</span> <span
  m="1905560">actually</span> <span m="1905870">figure</span> <span
  m="1906060">out</span> <span m="1906130">where</span> <span
  m="1906260">it</span> <span m="1906310">is.</span> <span m="1907120">So</span>
  <span m="1907240">what</span> <span m="1907350">you</span> <span
  m="1907410">need</span> <span m="1907560">to</span> <span
  m="1907620">do</span> <span m="1907820">is</span> <span
  m="1908150">figure</span> <span m="1908380">out</span> <span
  m="1908480">a</span> <span m="1908530">way</span> <span m="1908750">so</span>
  <span m="1908920">you</span> <span m="1909070">just</span> <span
  m="1909340">have</span> <span m="1909590">one</span> <span
  m="1909840">at</span> <span m="1909910">a</span> <span m="1909990">time</span>
  <span m="1910780">emitting.</span> <span m="1911810">So</span> <span
  m="1911940">there</span> <span m="1912070">are</span> <span
  m="1912110">various</span> <span m="1912460">schemes</span> <span
  m="1912810">to</span> <span m="1912890">make</span> <span
  m="1913080">it</span> <span m="1913220">so</span> <span
  m="1913320">that</span> <span m="1913700">these</span> <span
  m="1914200">proteins</span> <span m="1915190">can</span> <span
  m="1915300">either</span> <span m="1915440">turn</span> <span
  m="1915670">on</span> <span m="1915890">or</span> <span
  m="1915990">off.</span></p><p><span m="1917690">Now,</span> <span
  m="1918280">what</span> <span m="1918490">you</span> <span
  m="1918560">can</span> <span m="1918630">do</span> <span m="1918780">is</span>
  <span m="1918890">if</span> <span m="1919240">just</span> <span
  m="1919650">one</span> <span m="1920100">turns</span> <span
  m="1920340">on,</span> <span m="1920990">you</span> <span
  m="1921100">got</span> <span m="1921280">some</span> <span
  m="1921330">photons,</span> <span m="1921790">you say</span> <span
  m="1921940">OK,</span> <span m="1922110">this</span> <span
  m="1922380">protein</span> <span m="1922690">goes</span> <span
  m="1922760">over</span> <span m="1922910">here.</span> <span
  m="1924610">Then</span> <span m="1924870">if</span> <span
  m="1925020">later,</span> <span m="1926420">this</span> <span
  m="1926570">other</span> <span m="1927350">protein</span> <span
  m="1927800">becomes</span> <span m="1928030">fluorescent,</span> <span
  m="1928970">now</span> <span m="1929600">you can</span> <span
  m="1929770">figure out</span> <span m="1930070">where that</span> <span
  m="1930240">is.</span> <span m="1931090">And</span> <span
  m="1931180">so</span> <span m="1931250">you</span> <span m="1931380">do</span>
  <span m="1931590">this</span> <span m="1932130">basic</span> <span
  m="1932760">super</span> <span m="1933070">resolution</span> <span
  m="1933520">localization</span> <span m="1934860">multiple</span> <span
  m="1935360">times,</span> <span m="1935790">and then</span> <span
  m="1935890">you</span> <span m="1935990">can</span> <span
  m="1936110">identify</span> <span m="1936600">where</span> <span
  m="1937670">things</span> <span m="1937870">are.</span></p><p><span
  m="1941800">Yeah.</span> <span m="1942240">So</span> <span
  m="1943610">all</span> <span m="1943820">the</span> <span
  m="1943910">microscopy</span> <span m="1944590">guys</span> <span
  m="1944950">really</span> <span m="1945170">like</span> <span
  m="1945410">to</span> <span m="1945490">have</span> <span
  m="1948900">fun</span> <span m="1949630">acronyms.</span> <span
  m="1950960">So</span> <span m="1954820">these</span> <span
  m="1955070">guys,</span> <span m="1955510">when</span> <span
  m="1955620">they</span> <span m="1955750">did</span> <span
  m="1955950">it,</span> <span m="1956750">they</span> <span
  m="1957290">called</span> <span m="1957510">it</span> <span
  m="1958330">FIONA.</span> <span m="1961990">So</span> <span
  m="1962280">this</span> <span m="1962480">is--</span> <span m="1963100">is
  it</span> <span m="1963130">DreamWorks?</span> <span m="1963900">Or</span>
  <span m="1964720">this</span> <span m="1964950">is</span> <span
  m="1965070">where</span> <span m="1966010">the</span> <span
  m="1966280">green</span> <span m="1966480">ogre</span> <span
  m="1966960">like</span> <span m="1967580">that</span> <span
  m="1968040">and</span> <span m="1968150">then</span> <span
  m="1968290">the</span> <span m="1968750">red</span> <span
  m="1968990">head?</span></p><p><span m="1969350">AUDIENCE:
  Shrek.</span></p><p><span m="1970190">PROFESSOR: Shrek?</span> <span
  m="1970620">All</span> <span m="1970730">right.</span> <span
  m="1970950">So</span> <span m="1971050">Shrek.</span> <span m="1971460">And
  so</span> <span m="1971580">Fiona</span> <span m="1972140">was the</span>
  <span m="1972220">redhead.</span> <span m="1973710">And</span> <span
  m="1974010">this</span> <span m="1974180">stands</span> <span
  m="1974450">for</span> <span m="1974610">fluorescent</span> <span
  m="1975090">imaging</span> <span m="1975960">with</span> <span m="1976250">1
  nanometer</span> <span m="1977110">accuracy.</span> <span
  m="1979930">And</span> <span m="1980080">then</span> <span
  m="1980510">indeed,</span> <span m="1982460">a</span> <span
  m="1982650">group</span> <span m="1982930">at</span> <span
  m="1983730">UCSF</span> <span m="1984430">then</span> <span
  m="1984610">developed</span> <span m="1985760">SHREK,</span> <span
  m="1986210">which</span> <span m="1986370">is</span> <span
  m="1986850">simultaneous</span> <span m="1987730">high</span> <span
  m="1987980">resolution</span> <span m="1988910">imaging--</span> <span
  m="1990260">something.</span> <span m="1990910">OK.</span> <span m="1991110">I
  can't remember</span> <span m="1991410">how</span> <span m="1991500">it</span>
  <span m="1991570">ended.</span> <span m="1992110">But,</span> <span
  m="1992790">yeah.</span></p><p><span m="1994210">So</span> <span
  m="1994820">the</span> <span m="1995110">super</span> <span
  m="1995370">resolution</span> <span m="1995780">techniques,</span> <span
  m="1996170">they</span> <span m="1997540">call</span> <span
  m="1997890">them--</span> <span m="1998860">so</span> <span
  m="1998990">Xiaowei Zhuang</span> <span m="2000040">at</span> <span
  m="2000100">Harvard</span> <span m="2000500">called</span> <span
  m="2001150">hers</span> <span m="2002070">STORM,</span> <span
  m="2004260">stochastic</span> <span m="2005090">reconstruction</span> <span
  m="2006050">of</span> <span m="2006150">something</span> <span
  m="2006470">or</span> <span m="2006530">another.</span> <span
  m="2008270">So</span> <span m="2008480">this</span> <span
  m="2008640">is</span> <span m="2008770">the</span> <span
  m="2008860">Zhuang</span> <span m="2009320">method.</span> <span
  m="2010860">And</span> <span m="2011530">then</span> <span
  m="2011680">Eric</span> <span m="2011980">Betzig</span> <span
  m="2012320">called</span> <span m="2012740">his</span> <span
  m="2012995">PALM,</span> <span m="2013790">which</span> <span
  m="2014150">stood</span> <span m="2014500">still</span> <span
  m="2014660">for</span> <span m="2014750">something</span> <span
  m="2014960">else.</span></p><p><span m="2016230">I</span> <span
  m="2016310">don't</span> <span m="2016510">know.</span> <span
  m="2016820">But</span> <span m="2016980">in particular,</span> <span
  m="2018060">Betzig--</span> <span m="2020240">there's</span> <span
  m="2020570">a</span> <span m="2020620">long</span> <span
  m="2020980">history</span> <span m="2021560">of</span> <span
  m="2022250">the</span> <span m="2022350">hard</span> <span
  m="2022760">core</span> <span m="2023000">microscopists,</span> <span
  m="2023840">somehow</span> <span m="2024290">like,</span> <span
  m="2027410">developing</span> <span m="2027820">their</span> <span
  m="2027950">techniques</span> <span m="2028390">in</span> <span
  m="2028460">their</span> <span m="2028590">garages.</span> <span
  m="2029190">I</span> <span m="2029270">don't</span> <span
  m="2029390">know</span> <span m="2029520">what</span> <span
  m="2029680">it</span> <span m="2029750">is,</span> <span
  m="2029900">but</span> <span m="2030090">there have</span> <span
  m="2030320">been</span> <span m="2030660">a</span> <span
  m="2030700">number</span> <span m="2031070">of</span> <span
  m="2031110">these</span> <span m="2031270">cases.</span> <span
  m="2031550">And</span> <span m="2031720">Betzig</span> <span
  m="2031920">I</span> <span m="2032060">think</span> <span
  m="2032650">was</span> <span m="2032810">one</span> <span
  m="2032960">of</span> <span m="2033030">them.</span></p><p><span
  m="2033450">Now</span> <span m="2033930">he's</span> <span
  m="2034500">at</span> <span m="2034950">Janelia</span> <span
  m="2035310">Farm,</span> <span m="2035730">HHMI,</span> <span
  m="2036080">and</span> <span m="2036430">has</span> <span
  m="2036620">been</span> <span m="2036760">developing</span> <span
  m="2037070">all</span> <span m="2037180">sorts</span> <span
  m="2037440">of</span> <span m="2037620">advanced</span> <span
  m="2038010">microscopy</span> <span m="2038450">techniques.</span> <span
  m="2040670">So</span> <span m="2040780">I</span> <span
  m="2040850">think</span> <span m="2041030">that</span> <span
  m="2041180">that</span> <span m="2041420">[INAUDIBLE]</span> <span
  m="2041530">did</span> <span m="2041700">not</span> <span
  m="2041930">develop</span> <span m="2042210">hers</span> <span
  m="2042490">in</span> <span m="2042560">the</span> <span
  m="2042640">garage.</span> <span m="2043930">But</span> <span
  m="2044210">um--</span></p><p><span m="2044490">AUDIENCE:</span> <span
  m="2044916">And they're</span> <span m="2045342">all based</span> <span
  m="2045768">on the same</span> <span
  m="2046194">principle--</span></p><p><span m="2047050">PROFESSOR: Yeah.</span>
  <span m="2047900">It's</span> <span m="2048190">all</span> <span
  m="2048350">about</span> <span m="2049300">temporal.</span> <span
  m="2049870">It's</span> <span m="2049969">a</span> <span
  m="2050070">question</span> <span m="2050230">of</span> <span
  m="2051429">how</span> <span m="2052420">you're</span> <span
  m="2052570">getting</span> <span m="2052780">them</span> <span
  m="2052900">to</span> <span m="2052960">turn</span> <span
  m="2053170">on</span> <span m="2053350">and</span> <span
  m="2053420">off.</span></p><p><span m="2056150">AUDIENCE: It sounds</span>
  <span m="2056642">like</span> <span m="2057134">[INAUDIBLE]</span> <span
  m="2057626">acronyms.</span></p><p><span m="2058610">PROFESSOR: Oh</span>
  <span m="2058790">do</span> <span m="2058900">they</span> <span
  m="2059060">also</span> <span m="2059300">have?</span></p><p><span
  m="2060041">AUDIENCE: ROSY,</span> <span m="2060443">COZY,</span> <span
  m="2060845">NOSY.</span></p><p><span m="2061250">PROFESSOR: Yeah.</span> <span
  m="2062250">Right,</span> <span m="2062449">right.</span> <span
  m="2062630">For</span> <span m="2062730">the</span> <span
  m="2062820">different</span> <span m="2063130">sequences</span> <span
  m="2063800">or</span> <span m="2063880">something?</span> <span
  m="2064260">Yeah,</span> <span m="2064690">yeah.</span> <span
  m="2068300">All</span> <span m="2068540">of</span> <span
  m="2068659">these</span> <span m="2070040">acronyms,</span> <span
  m="2072909">maybe</span> <span m="2073130">I just</span> <span
  m="2073270">never</span> <span m="2073420">came</span> <span
  m="2073580">up</span> <span m="2073639">with</span> <span m="2073699">a</span>
  <span m="2073780">good</span> <span m="2073909">one,</span> <span
  m="2074100">so</span> <span m="2074578">then I--</span></p><p><span
  m="2076490">AUDIENCE: [INAUDIBLE].</span></p><p><span m="2078880">PROFESSOR:
  Yes.</span> <span m="2079820">Indeed.</span> <span m="2080870">I</span> <span
  m="2081070">always</span> <span m="2081270">like</span> <span
  m="2081850">when</span> <span m="2081969">somebody</span> <span
  m="2082300">uses</span> <span m="2082620">acronyms</span> <span
  m="2083100">that</span> <span m="2083190">I</span> <span
  m="2083239">don't</span> <span m="2083380">know,</span> <span
  m="2083610">I</span> <span m="2083739">always</span> <span
  m="2084370">like</span> <span m="2084600">to</span> <span
  m="2085350">say,</span> <span m="2085449">oh,</span> <span
  m="2085980">all</span> <span m="2086170">these</span> <span
  m="2086370">TLAs</span> <span m="2087340">are</span> <span
  m="2087449">tricky,</span> <span m="2087920">or</span> <span
  m="2087969">whatever.</span> <span m="2088260">And</span> <span
  m="2088360">then</span> <span m="2089674">I</span> <span
  m="2089929">say,</span> <span m="2090070">it's</span> <span
  m="2090570">three</span> <span m="2090800">letter</span> <span
  m="2091060">acronym.</span></p><p><span m="2092002">AUDIENCE:
  [LAUGHING]</span></p><p><span m="2093480">PROFESSOR: I</span> <span
  m="2094260">very</span> <span m="2094489">much</span> <span
  m="2094650">like</span> <span m="2094800">self-referential</span> <span
  m="2095480">humor.</span> <span m="2098980">OK.</span> <span
  m="2101230">So</span> <span m="2101280">that's</span> <span
  m="2101430">the</span> <span m="2101510">idea</span> <span
  m="2101700">of</span> <span m="2101750">the</span> <span
  m="2101820">super</span> <span m="2102030">resolution</span> <span
  m="2102410">techniques.</span> <span m="2107230">Any</span> <span
  m="2107410">questions</span> <span m="2107740">about</span> <span
  m="2107880">that</span> <span m="2108290">before we</span> <span
  m="2108340">kind</span> <span m="2108490">of</span> <span
  m="2108910">get</span> <span m="2109080">back</span> <span
  m="2109320">actually</span> <span m="2109600">to</span> <span
  m="2109690">the</span> <span m="2109770">paper?</span> <span
  m="2113530">OK.</span> <span m="2114660">Now</span> <span
  m="2115230">in</span> <span m="2115530">this</span> <span
  m="2115640">whole</span> <span m="2115780">discussion,</span> <span
  m="2116140">as</span> <span m="2116240">was</span> <span
  m="2116360">pointed</span> <span m="2116630">out,</span> <span
  m="2117140">we've</span> <span m="2117450">been</span> <span
  m="2117560">assuming</span> <span m="2118050">that</span> <span
  m="2118130">the</span> <span m="2118340">protein</span> <span
  m="2118800">is</span> <span m="2118920">not</span> <span
  m="2119630">moving</span> <span m="2120060">around</span> <span
  m="2120950">during</span> <span m="2121230">our</span> <span
  m="2121330">imaging</span> <span m="2121650">time.</span></p><p><span
  m="2123430">So</span> <span m="2123570">one</span> <span m="2123760">of</span>
  <span m="2123810">the</span> <span m="2123890">major</span> <span
  m="2124180">challenges</span> <span m="2124900">of</span> <span
  m="2125200">doing</span> <span m="2125450">this</span> <span
  m="2125580">whole</span> <span m="2125770">business</span> <span
  m="2126120">in live</span> <span m="2126410">cells</span> <span
  m="2127550">is</span> <span m="2127800">not</span> <span
  m="2128050">only</span> <span m="2128230">is</span> <span
  m="2128300">there</span> <span m="2128410">a</span> <span
  m="2128460">lot</span> <span m="2128620">of</span> <span
  m="2128960">autofluorescence,</span> <span m="2131010">but</span> <span
  m="2131730">in</span> <span m="2131890">addition,</span> <span
  m="2132730">you</span> <span m="2133230">can't</span> <span
  m="2133680">necessarily</span> <span m="2134930">wait</span> <span
  m="2135260">10</span> <span m="2135500">seconds</span> <span
  m="2135970">to</span> <span m="2136100">localize</span> <span
  m="2136530">where</span> <span m="2136610">this</span> <span
  m="2136740">thing</span> <span m="2136930">is,</span> <span
  m="2137200">because</span> <span m="2138280">it</span> <span
  m="2138490">will</span> <span m="2138960">have moved</span> <span
  m="2139420">somewhere</span> <span m="2139720">else</span> <span
  m="2139950">right.</span> <span m="2141180">And</span> <span
  m="2141340">in</span> <span m="2141400">particular,</span> <span
  m="2143080">diffusion</span> <span m="2143500">is</span> <span
  m="2143580">a</span> <span m="2143620">problem.</span></p><p><span
  m="2146250">Can</span> <span m="2146400">somebody</span> <span
  m="2146660">remind</span> <span m="2147060">us</span> <span
  m="2147630">what</span> <span m="2150140">the</span> <span
  m="2150210">authors</span> <span m="2150540">did</span> <span
  m="2150710">in</span> <span m="2150790">order</span> <span
  m="2150920">to</span> <span m="2150960">get</span> <span
  m="2151090">around</span> <span m="2151470">the</span> <span
  m="2151730">diffusion</span> <span m="2152090">problems?</span> <span
  m="2155700">I'm</span> <span m="2155790">sorry</span> <span m="2155980">what
  was</span> <span m="2156120">it?</span></p><p><span m="2156902">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2158600">PROFESSOR: They</span> <span
  m="2158700">attached</span> <span m="2159160">it</span> <span
  m="2159280">to</span> <span m="2159390">the</span> <span
  m="2159470">membrane.</span> <span m="2160640">And</span> <span
  m="2160860">why</span> <span m="2161390">does</span> <span
  m="2161500">that</span> <span m="2161640">help?</span></p><p><span
  m="2166207">AUDIENCE: [INAUDIBLE].</span></p><p><span m="2169045">PROFESSOR:
  Yeah.</span> <span m="2169520">That's</span> <span m="2170110">perfect.</span>
  <span m="2170920">Proteins</span> <span m="2171100">diffuse</span> <span
  m="2171590">slower.</span> <span m="2172270">And</span> <span
  m="2172450">I</span> <span m="2172520">think</span> <span
  m="2173200">depending</span> <span m="2173810">on</span> <span
  m="2173860">the</span> <span m="2173950">organism,</span> <span
  m="2174600">there's</span> <span m="2174710">more</span> <span
  m="2174870">or</span> <span m="2174890">less</span> <span
  m="2175100">diffusion</span> <span m="2175530">and</span> <span
  m="2175630">so</span> <span m="2175730">forth</span> <span
  m="2175800">right.</span> <span m="2175960">But</span> <span
  m="2177640">what</span> <span m="2178090">they</span> <span
  m="2178400">did</span> <span m="2178570">is they</span> <span
  m="2178700">anchored</span> <span m="2179540">to</span> <span
  m="2179670">the</span> <span m="2179740">membrane</span> <span
  m="2185500">to</span> <span m="2185600">reduce</span> <span
  m="2186010">diffusion.</span> <span m="2186960">I'll</span> <span
  m="2187090">just say</span> <span m="2187400">it</span> <span
  m="2187560">reduces</span> <span m="2187660">diffusion.</span></p><p><span
  m="2194330">And</span> <span m="2194620">indeed,</span> <span
  m="2195130">just</span> <span m="2195300">from</span> <span
  m="2195450">a</span> <span m="2195520">back of the</span> <span
  m="2196350">envelope</span> <span m="2196900">calculation,</span> <span
  m="2197350">you can</span> <span m="2197430">convince</span> <span
  m="2197790">yourself</span> <span m="2198170">that</span> <span
  m="2198260">you</span> <span m="2198350">probably</span> <span
  m="2198760">are</span> <span m="2198820">going</span> <span
  m="2198920">to</span> <span m="2198980">need</span> <span
  m="2199170">to</span> <span m="2199260">do</span> <span
  m="2199360">this.</span> <span m="2201770">So in</span> <span
  m="2201880">particular,</span> <span m="2202430">let's</span> <span
  m="2202730">ask--</span> <span m="2204260">in</span> <span
  m="2204540">this</span> <span m="2204760">paper,</span> <span
  m="2205160">actually,</span> <span m="2205400">they</span> <span
  m="2206420">image</span> <span m="2206800">the</span> <span
  m="2207490">fluorophore</span> <span m="2209221">for</span> <span
  m="2209670">0.1</span> <span m="2210040">seconds,</span> <span
  m="2210390">right?</span> <span m="2212610">Does</span> <span
  m="2212860">that</span> <span m="2213240">sound right?</span> <span
  m="2213790">So</span> <span m="2214380">the</span> <span
  m="2215270">image</span> <span m="2218210">collected,</span> <span
  m="2221900">so</span> <span m="2222040">delta</span> <span
  m="2222350">t</span> <span m="2222840">is</span> <span
  m="2223120">equal</span> <span m="2223280">to</span> <span
  m="2223360">0.1</span> <span m="2224032">sets.</span></p><p><span
  m="2225340">So</span> <span m="2225410">the</span> <span
  m="2225460">question</span> <span m="2225740">is,</span> <span
  m="2225820">how</span> <span m="2226050">far</span> <span
  m="2226480">will</span> <span m="2227100">a</span> <span
  m="2227180">protein</span> <span m="2227670">typically</span> <span
  m="2227870">diffuse</span> <span m="2228440">in</span> <span
  m="2228810">0.1</span> <span m="2229160">seconds?</span> <span
  m="2233120">Well,</span> <span m="2233890">this</span> <span
  m="2234040">is</span> <span m="2234140">why</span> <span m="2234380">we</span>
  <span m="2234520">have</span> <span m="2235700">diffusion</span> <span
  m="2236190">calculations.</span> <span m="2236620">Right.</span> <span
  m="2238630">First</span> <span m="2238800">of</span> <span
  m="2238840">all,</span> <span m="2241420">the</span> <span
  m="2241550">diffusion</span> <span m="2241950">coefficient,</span> <span
  m="2243020">we're</span> <span m="2243140">going</span> <span
  m="2243220">to</span> <span m="2243260">talk</span> <span
  m="2243490">more</span> <span m="2243820">about</span> <span
  m="2244090">diffusion</span> <span m="2245200">in</span> <span
  m="2245580">a</span> <span m="2245630">few</span> <span
  m="2245820">weeks.</span> <span m="2246210">But</span> <span
  m="2249720">you</span> <span m="2249820">should</span> <span m="2250000">also
  in</span> <span m="2250270">principal</span> <span m="2250590">be able
  to</span> <span m="2250790">calculate</span> <span m="2251100">how</span>
  <span m="2251190">these</span> <span m="2251350">things</span> <span
  m="2251520">go.</span></p><p><span m="2251660">So</span> <span
  m="2251790">in</span> <span m="2251920">general,</span> <span
  m="2252840">this</span> <span m="2252970">is</span> <span
  m="2253120">going</span> <span m="2253230">to</span> <span
  m="2253280">be</span> <span m="2253750">a</span> <span m="2253870">kT</span>
  <span m="2254440">over</span> <span m="2254610">some</span> <span
  m="2254870">gamma,</span> <span m="2255490">which</span> <span
  m="2255760">tells</span> <span m="2256010">us</span> <span
  m="2256490">how</span> <span m="2256750">hard--</span> <span
  m="2257580">so</span> <span m="2257720">kT</span> <span m="2259232">is</span>
  <span m="2259860">thermal</span> <span m="2260300">energy.</span> <span
  m="2260950">OK.</span> <span m="2264660">So,</span> <span
  m="2265370">thermal.</span> <span m="2265940">And</span> <span
  m="2266320">at</span> <span m="2266460">room</span> <span
  m="2266680">temperature</span> <span m="2267770">kT</span> <span
  m="2269100">is</span> <span m="2269280">around</span> <span
  m="2269360">4.1</span> <span m="2270530">piconewton</span> <span
  m="2271150">nanometers</span> <span m="2272430">in</span> <span
  m="2272610">some unit.</span> <span m="2273095">There</span> <span
  m="2273580">are</span> <span m="2273610">many</span> <span
  m="2273840">different</span> <span m="2274070">ways</span> <span
  m="2274320">you</span> <span m="2274410">can</span> <span
  m="2274480">write</span> <span m="2274680">that.</span></p><p><span
  m="2275435">Whereas</span> <span m="2275900">gamma</span> <span
  m="2276300">tells</span> <span m="2276610">us</span> <span
  m="2276760">just</span> <span m="2276950">how</span> <span
  m="2277160">hard</span> <span m="2277420">it</span> <span
  m="2277480">is</span> <span m="2277630">to</span> <span
  m="2277720">push</span> <span m="2278250">something.</span> <span
  m="2280730">In</span> <span m="2280840">particular,</span> <span
  m="2282700">if</span> <span m="2282820">you</span> <span
  m="2282930">push</span> <span m="2283180">them with</span> <span
  m="2283390">some</span> <span m="2283570">force,</span> <span
  m="2285370">it</span> <span m="2285460">will</span> <span
  m="2285580">move</span> <span m="2286070">with</span> <span
  m="2286240">some</span> <span m="2286550">velocity.</span> <span
  m="2288650">Now</span> <span m="2289060">is this</span> <span
  m="2290150">consistent</span> <span m="2290700">with</span> <span
  m="2292190">freshman</span> <span m="2292600">mechanics?</span> <span
  m="2297390">No.</span> <span m="2297940">It's</span> <span
  m="2298100">not.</span> <span m="2298950">OK.</span> <span
  m="2301990">Is</span> <span m="2302200">that</span> <span m="2302300">a</span>
  <span m="2302350">problem?</span> <span m="2306160">So</span> <span
  m="2306320">why</span> <span m="2307060">is</span> <span m="2307200">it</span>
  <span m="2307310">that</span> <span m="2307430">I'm</span> <span
  m="2307510">writing</span> <span m="2307750">this?</span></p><p><span
  m="2310750">AUDIENCE: Solvents</span> <span m="2311000">exerting a
  force</span> <span m="2311370">[INAUDIBLE]?</span></p><p><span
  m="2312554">PROFESSOR: Right.</span> <span m="2312961">So</span> <span
  m="2313370">solvents</span> <span m="2313920">exerting</span> <span
  m="2314380">a</span> <span m="2314430">force.</span> <span
  m="2315630">That's</span> <span m="2316020">true.</span> <span
  m="2316600">But</span> <span m="2317210">in</span> <span
  m="2317340">the</span> <span m="2317420">case</span> <span
  m="2317740">of</span> <span m="2318580">freshman</span> <span
  m="2318900">mechanics,</span> <span m="2319970">when</span> <span
  m="2320120">we're</span> <span m="2320230">pushing</span> <span
  m="2320530">blocks,</span> <span m="2322030">it's</span> <span
  m="2322140">also</span> <span m="2322360">true</span> <span
  m="2323100">that</span> <span m="2323660">the</span> <span
  m="2323770">other</span> <span m="2323970">things</span> <span
  m="2324250">are</span> <span m="2324330">exerting</span> <span
  m="2324630">forces.</span> <span m="2325050">The</span> <span
  m="2325160">tables.</span> <span m="2325780">But</span> <span
  m="2325870">we</span> <span m="2325940">still</span> <span
  m="2326430">write</span> <span m="2326750">down</span> <span
  m="2327690">F</span> <span m="2327860">is</span> <span
  m="2327960">equal</span> <span m="2328120">to</span> <span
  m="2328230">MA.</span> <span m="2329210">So</span> <span
  m="2329310">it's</span> <span m="2329420">not</span> <span
  m="2329690">just</span> <span m="2330140">that</span> <span
  m="2330200">other</span> <span m="2330390">things</span> <span
  m="2330750">are</span> <span m="2330880">exerting</span> <span
  m="2331290">forces.</span> <span m="2332365">Yeah?</span></p><p><span
  m="2333335">AUDIENCE: They're</span> <span m="2333820">always</span> <span
  m="2334305">in a continuum?</span></p><p><span m="2337220">PROFESSOR:
  Always</span> <span m="2337620">in</span> <span m="2337710">a</span> <span
  m="2337750">continuum.</span></p><p><span m="2338476">AUDIENCE: They're</span>
  <span m="2338840">always</span> <span m="2339263">surrounded</span> <span
  m="2339686">by</span> <span m="2340109">[INAUDIBLE].</span></p><p><span
  m="2341380">PROFESSOR: OK.</span> <span m="2342160">Yeah.</span> <span
  m="2343130">It's</span> <span m="2343360">always</span> <span
  m="2343655">surrounded--</span> <span m="2344850">but</span> <span
  m="2345040">I'm</span> <span m="2345320">actually</span> <span
  m="2346020">surrounded</span> <span m="2346280">by</span> <span
  m="2346390">fluid</span> <span m="2346700">now</span> <span
  m="2346920">too.</span> <span m="2347290">You know, you</span> <span
  m="2347460">can</span> <span m="2347745">wave</span> <span
  m="2348030">your</span> <span m="2348355">arms</span> <span
  m="2348680">and</span> <span m="2349340">feel</span> <span
  m="2349630">it.</span></p><p><span m="2350453">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2351280">PROFESSOR: OK, right.</span> <span
  m="2352010">So</span> <span m="2352090">it</span> <span
  m="2352160">comes</span> <span m="2352390">down</span> <span
  m="2352630">to</span> <span m="2352850">the</span> <span
  m="2353040">viscosity.</span> <span m="2353790">Indeed,</span> <span
  m="2354140">this</span> <span m="2354830">whole</span> <span
  m="2354980">thing</span> <span m="2355090">about</span> <span
  m="2355250">being</span> <span m="2355410">a</span> <span
  m="2355470">low</span> <span m="2355900">Reynolds</span> <span
  m="2356310">number,</span> <span m="2356890">we're</span> <span
  m="2356950">going</span> <span m="2357030">to</span> <span
  m="2357080">talk</span> <span m="2357290">about</span> <span
  m="2357450">this</span> <span m="2357940">in</span> <span
  m="2358100">much</span> <span m="2358340">more</span> <span
  m="2358590">detail</span> <span m="2359690">in</span> <span
  m="2359800">a</span> <span m="2359840">few</span> <span
  m="2359970">weeks,</span> <span m="2360230">when</span> <span
  m="2360430">we</span> <span m="2361420">think</span> <span
  m="2361600">about</span> <span m="2361810">how</span> <span
  m="2362020">bacteria</span> <span m="2362470">swim,</span> <span
  m="2362880">and</span> <span m="2363320">so</span> <span
  m="2363480">forth.</span> <span m="2363740">But</span> <span
  m="2363850">I</span> <span m="2363910">just</span> <span
  m="2364040">want</span> <span m="2364140">to</span> <span
  m="2364180">mention</span> <span m="2364550">that</span> <span
  m="2365100">this</span> <span m="2365280">is</span> <span
  m="2365390">because</span> <span m="2365710">we're at this</span> <span
  m="2365870">low</span> <span m="2366150">Reynolds</span> <span
  m="2366480">number,</span> <span m="2367140">where</span> <span
  m="2367780">the</span> <span m="2367890">so-called</span> <span
  m="2369130">inertial</span> <span m="2369580">forces,</span> <span
  m="2369920">like</span> <span m="2370040">momentum</span> <span
  m="2370700">are</span> <span m="2371120">negligible.</span></p><p><span
  m="2373020">Inertia</span> <span m="2373290">forces</span> <span
  m="2373640">are</span> <span m="2373850">negligible.</span> <span
  m="2374370">So then</span> <span m="2374530">it's</span> <span
  m="2374890">really,</span> <span m="2375710">this</span> <span
  m="2376030">is</span> <span m="2376150">in</span> <span
  m="2376220">some</span> <span m="2376340">ways</span> <span
  m="2376470">more</span> <span m="2376720">like</span> <span
  m="2377290">Aristotelian</span> <span m="2378170">physics,</span> <span
  m="2379470">but</span> <span m="2379630">it</span> <span
  m="2379840">ends</span> <span m="2379980">up</span> <span
  m="2380090">being</span> <span m="2380240">true</span> <span
  m="2380440">for</span> <span m="2380560">small</span> <span
  m="2380960">objects</span> <span m="2381600">in</span> <span
  m="2383120">viscous</span> <span m="2383440">liquids.</span> <span
  m="2386330">And</span> <span m="2386490">indeed,</span> <span
  m="2386810">this</span> <span m="2387040">thing</span> <span
  m="2387560">it</span> <span m="2387710">scales</span> <span
  m="2389460">as</span> <span m="2389690">the</span> <span
  m="2389780">radius.</span> <span m="2390100">So</span> <span
  m="2390210">in</span> <span m="2390290">principle,</span> <span
  m="2390810">we</span> <span m="2390840">can</span> <span
  m="2390950">actually</span> <span m="2391160">calculate</span> <span
  m="2392060">roughly</span> <span m="2396780">how</span> <span
  m="2397420">the</span> <span m="2397500">diffusion</span> <span
  m="2397880">coefficient is</span> <span m="2398440">going</span> <span
  m="2398620">to</span> <span m="2398810">behave</span> <span
  m="2399200">as</span> <span m="2399360">a</span> <span m="2399610">function
  of</span> <span m="2399880">size.</span> <span m="2399970">The object
  and</span> <span m="2400360">so</span> <span
  m="2400430">forth.</span></p><p><span m="2400990">But</span> <span
  m="2401510">I'll</span> <span m="2401630">just</span> <span
  m="2401800">tell</span> <span m="2402000">you</span> <span
  m="2402140">that</span> <span m="2402990">for</span> <span
  m="2403470">a</span> <span m="2403520">protein</span> <span
  m="2403910">size</span> <span m="2404230">object</span> <span
  m="2405270">in</span> <span m="2405420">the</span> <span
  m="2405500">cell,</span> <span m="2405840">you</span> <span
  m="2406060">might</span> <span m="2406310">get</span> <span
  m="2406860">something</span> <span m="2407550">like</span> <span
  m="2409040">10 micron</span> <span m="2411110">squared</span> <span
  m="2411550">per</span> <span m="2411670">second.</span> <span
  m="2414570">Now,</span> <span m="2417800">already</span> <span
  m="2418190">just</span> <span m="2418400">from</span> <span
  m="2418570">units,</span> <span m="2419460">you</span> <span
  m="2419590">can</span> <span m="2419700">see</span> <span
  m="2420000">how</span> <span m="2420460">the</span> <span
  m="2420870">kind</span> <span m="2421020">of</span> <span
  m="2421100">typical</span> <span m="2421520">diffusion</span> <span
  m="2421900">distance</span> <span m="2422180">has</span> <span
  m="2422330">to</span> <span m="2422410">scale</span> <span
  m="2422750">with</span> <span m="2422940">time.</span> <span
  m="2424800">And</span> <span m="2425150">in</span> <span
  m="2425280">particular,</span> <span m="2426240">you're</span> <span
  m="2426370">going</span> <span m="2426470">to</span> <span
  m="2426510">get</span> <span m="2426800">that</span> <span
  m="2427100">the</span> <span m="2427210">typical</span> <span
  m="2427700">kind</span> <span m="2428020">of</span> <span
  m="2429120">distance</span> <span m="2429700">that</span> <span
  m="2429730">you</span> <span m="2429850">go</span> <span m="2430260">in</span>
  <span m="2434100">a</span> <span m="2434150">typical</span> <span
  m="2434420">distance--</span> <span m="2435450">we'll</span> <span
  m="2435590">say</span> <span m="2435710">square</span> <span
  m="2435990">root,</span> <span m="2436450">because</span> <span
  m="2436690">it's</span> <span m="2436810">the</span> <span
  m="2436880">square</span> <span m="2437170">root</span> <span
  m="2437310">of</span> <span m="2437500">2</span> <span
  m="2437900">times</span> <span m="2438280">D</span> <span
  m="2438570">times</span> <span m="2438870">time.</span></p><p><span
  m="2440450">So</span> <span m="2440570">you</span> <span m="2440740">can
  see</span> <span m="2440930">if</span> <span m="2441050">you</span> <span
  m="2441160">multiply</span> <span m="2442330">the</span> <span
  m="2442410">time</span> <span m="2442990">by</span> <span
  m="2443250">the</span> <span m="2443360">D,</span> <span
  m="2444272">then</span> <span m="2444730">you</span> <span
  m="2444830">end</span> <span m="2444940">up</span> <span
  m="2445070">with</span> <span m="2445200">a</span> <span
  m="2445230">micron</span> <span m="2445610">squared,</span> <span
  m="2445880">so you</span> <span m="2446150">have</span> <span m="2446330">to
  take</span> <span m="2446510">a</span> <span m="2446880">square</span> <span
  m="2447180">root</span> <span m="2447340">to</span> <span
  m="2447390">get</span> <span m="2447720">something</span> <span
  m="2448390">that's a</span> <span m="2448560">characteristic</span> <span
  m="2448950">distance.</span> <span m="2451320">And</span> <span
  m="2451460">indeed,</span> <span m="2451840">this</span> <span
  m="2452090">is</span> <span m="2452640">the</span> <span
  m="2452740">kind</span> <span m="2452910">of</span> <span
  m="2452960">math</span> <span m="2453220">that</span> <span
  m="2453340">I</span> <span m="2453400">can</span> <span m="2453530">do.</span>
  <span m="2454450">So</span> <span m="2455030">this</span> <span
  m="2455610">is</span> <span m="2455700">an</span> <span
  m="2456850">order</span> <span m="2457120">one</span> <span
  m="2457890">micron.</span></p><p><span m="2463160">And</span> <span
  m="2463570">how</span> <span m="2464020">big</span> <span
  m="2464230">is</span> <span m="2464340">an</span> <span m="2464420">E.
  coli</span> <span m="2464790">cell?</span></p><p><span m="2466483">AUDIENCE:
  One micron?</span></p><p><span m="2467780">PROFESSOR: One</span> <span
  m="2467960">micron,</span> <span m="2468330">roughly,</span> <span
  m="2468750">right?</span> <span m="2469450">So</span> <span
  m="2469660">it</span> <span m="2469840">might</span> <span
  m="2470000">be</span> <span m="2470080">a</span> <span
  m="2470140">couple</span> <span m="2470460">microns</span> <span
  m="2470930">long.</span> <span m="2471860">A</span> <span
  m="2471910">bit</span> <span m="2472060">less</span> <span
  m="2472250">than</span> <span m="2472340">a</span> <span m="2472380">micron
  in</span> <span m="2472880">width.</span> <span m="2473400">And</span> <span
  m="2473480">what</span> <span m="2473630">this</span> <span
  m="2473750">is</span> <span m="2473860">saying</span> <span
  m="2474130">is</span> <span m="2474200">that</span> <span
  m="2475010">0.1</span> <span m="2475440">seconds,</span> <span
  m="2475760">which</span> <span m="2475890">is</span> <span
  m="2475970">our</span> <span m="2476100">exposure</span> <span
  m="2476640">time</span> <span m="2476910">on our</span> <span
  m="2477030">camera,</span> <span m="2477300">you would</span> <span
  m="2477480">expect</span> <span m="2478710">something</span> <span
  m="2479080">like</span> <span m="2479270">GFP</span> <span
  m="2479660">to</span> <span m="2479750">diffuse</span> <span
  m="2480070">around</span> <span m="2480340">roughly</span> <span
  m="2481030">the</span> <span m="2481140">cell</span> <span
  m="2481420">volume.</span> <span m="2482550">And</span> <span
  m="2482630">maybe</span> <span m="2482910">not</span> <span
  m="2483080">the</span> <span m="2483140">entire</span> <span
  m="2483610">one,</span> <span m="2483930">but</span> <span
  m="2484760">a</span> <span m="2484810">fair</span> <span
  m="2485000">fraction</span> <span m="2485340">of</span> <span
  m="2485480">it.</span> <span m="2485610">What this</span> <span
  m="2485750">is</span> <span m="2485840">saying</span> <span m="2486070">is
  that</span> <span m="2486270">the</span> <span m="2486330">diffusion</span>
  <span m="2486720">really</span> <span m="2486950">would</span> <span
  m="2487150">be</span> <span m="2487290">a</span> <span
  m="2487340">problem,</span> <span m="2488400">even</span> <span
  m="2488600">with</span> <span m="2488690">this</span> <span
  m="2488820">relatively</span> <span m="2489140">short</span> <span
  m="2489790">exposure</span> <span m="2490180">time.</span> <span
  m="2490614">Yeah?</span></p><p><span m="2491916">AUDIENCE:
  [INAUDIBLE]?</span></p><p><span m="2493220">PROFESSOR: Yes.</span> <span
  m="2493400">So</span> <span m="2493695">this</span> <span
  m="2493990">is</span> <span m="2494120">assuming</span> <span
  m="2494630">that</span> <span m="2494760">the</span> <span
  m="2494860">cytoplasm</span> <span m="2495450">has a</span> <span
  m="2495590">viscosity</span> <span m="2496080">that's</span> <span
  m="2496190">maybe</span> <span m="2496370">an</span> <span
  m="2496460">order</span> <span m="2496750">of</span> <span
  m="2496820">magnitude</span> <span m="2497340">larger</span> <span
  m="2497660">than</span> <span m="2497780">water.</span> <span
  m="2498380">And</span> <span m="2498480">that's</span> <span
  m="2498720">just</span> <span m="2498900">because</span> <span
  m="2499250">the</span> <span m="2499680">inside</span> <span
  m="2500030">is</span> <span m="2500380">chock</span> <span
  m="2500630">full</span> <span m="2500790">of</span> <span
  m="2500870">proteins</span> <span m="2501440">and so</span> <span
  m="2501530">forth.</span> <span m="2502510">Now,</span> <span
  m="2503050">there's</span> <span m="2503740">a</span> <span
  m="2503890">lot</span> <span m="2504180">of</span> <span
  m="2504250">discussion</span> <span m="2504750">of</span> <span
  m="2504880">what</span> <span m="2505050">the</span> <span
  m="2506150">mechanism</span> <span m="2506950">is</span> <span
  m="2507270">of</span> <span m="2507430">diffusion and</span> <span
  m="2507880">transport</span> <span m="2508350">inside</span> <span
  m="2508740">cells.</span> <span m="2509170">It</span> <span
  m="2509250">may</span> <span m="2509490">depend</span> <span
  m="2509760">on</span> <span m="2509850">the</span> <span
  m="2509910">size.</span></p><p><span m="2510630">It's</span> <span
  m="2510780">a</span> <span m="2510830">very</span> <span
  m="2511100">complicated</span> <span m="2512080">area.</span> <span
  m="2512420">But</span> <span m="2513210">for</span> <span
  m="2513440">our</span> <span m="2513610">purposes,</span> <span
  m="2513990">this</span> <span m="2514170">is</span> <span m="2514220">a</span>
  <span m="2514300">reasonable</span> <span m="2515160">way to think about
  it.</span> <span m="2515920">But</span> <span m="2516020">indeed,</span> <span
  m="2516310">the</span> <span m="2516370">viscosity</span> <span
  m="2517050">of</span> <span m="2517320">the</span> <span
  m="2517390">cytoplasm,</span> <span m="2518160">you'd</span> <span
  m="2518270">expect</span> <span m="2518560">to</span> <span
  m="2518630">be</span> <span m="2518890">significantly</span> <span
  m="2519570">more</span> <span m="2519850">than</span> <span
  m="2520010">the</span> <span m="2520110">viscosity of</span> <span
  m="2520560">water.</span> <span m="2523760">Yeah?</span></p><p><span
  m="2524563">AUDIENCE: [INAUDIBLE]</span> <span m="2525026">lower</span> <span
  m="2525489">the</span> <span m="2525952">[INAUDIBLE]</span> <span
  m="2526415">time?</span></p><p><span m="2528270">PROFESSOR: Lower</span> <span
  m="2528630">the?</span></p><p><span m="2529760">AUDIENCE: Yeah.</span> <span
  m="2530100">Like</span> <span m="2530370">two orders of</span> <span
  m="2530720">magnitude</span> <span m="2531070">instead</span> <span
  m="2531910">of one?</span></p><p><span m="2532490">PROFESSOR: Right.</span>
  <span m="2532690">So</span> <span m="2533590">in</span> <span
  m="2533980">principle,</span> <span m="2534450">we</span> <span
  m="2534560">could.</span> <span m="2535390">There</span> <span
  m="2535610">are</span> <span m="2535720">technical</span> <span
  m="2536170">issues</span> <span m="2536380">on</span> <span
  m="2536510">various</span> <span m="2536850">sides.</span> <span
  m="2537610">So</span> <span m="2537740">of</span> <span
  m="2537830">course,</span> <span m="2538030">you</span> <span
  m="2538110">have</span> <span m="2538190">to</span> <span
  m="2538290">say,</span> <span m="2538400">oh</span> <span
  m="2538590">well,</span> <span m="2538820">a</span> <span
  m="2539470">typical</span> <span m="2539840">camera,</span> <span
  m="2540200">just</span> <span m="2540340">the</span> <span
  m="2540410">shutter</span> <span m="2540890">of</span> <span
  m="2541050">opening,</span> <span m="2541560">shutting,</span> <span
  m="2542280">that</span> <span m="2542470">actually</span> <span
  m="2542710">has</span> <span m="2542850">some</span> <span
  m="2543020">limit.</span> <span m="2543670">But</span> <span
  m="2544020">you</span> <span m="2544150">can</span> <span
  m="2544280">get</span> <span m="2544420">around</span> <span
  m="2544760">that</span> <span m="2545050">using</span> <span
  m="2545370">kind</span> <span m="2545520">of</span> <span
  m="2545680">strob--</span> <span m="2546115">you know,</span> <span
  m="2546640">there are</span> <span m="2546790">fancy</span> <span
  m="2547150">things</span> <span m="2547360">you</span> <span
  m="2547430">can</span> <span m="2547540">do.</span></p><p><span
  m="2548930">But</span> <span m="2549030">there's</span> <span
  m="2549200">just</span> <span m="2549330">a</span> <span
  m="2549380">more</span> <span m="2549590">fundamental</span> <span
  m="2550230">thing</span> <span m="2550550">here,</span> <span
  m="2551460">which</span> <span m="2551650">is--</span> <span
  m="2552760">so</span> <span m="2553550">this</span> <span
  m="2553840">is</span> <span m="2553950">already</span> <span m="2554950">100
  milliseconds.</span> <span m="2555380">If</span> <span m="2555750">you
  go</span> <span m="2555860">down to</span> <span m="2556110">like</span> <span
  m="2556300">say,</span> <span m="2556450">1 millisecond,</span> <span
  m="2557660">then</span> <span m="2558140">it's</span> <span
  m="2558300">true</span> <span m="2558490">that the</span> <span
  m="2558720">protein</span> <span m="2559040">won't</span> <span
  m="2559220">be</span> <span m="2559290">able</span> <span
  m="2559390">to</span> <span m="2559470">diffuse</span> <span
  m="2559870">very</span> <span m="2560050">far,</span> <span
  m="2560240">but</span> <span m="2560400">then you</span> <span
  m="2560550">also</span> <span m="2560830">just don't</span> <span
  m="2561060">collect</span> <span m="2561310">any</span> <span
  m="2562150">photons.</span></p><p><span m="2563020">The</span> <span
  m="2563230">number</span> <span m="2563450">of</span> <span
  m="2563500">photons</span> <span m="2563790">you</span> <span
  m="2563870">collect</span> <span m="2564070">scales</span> <span
  m="2564370">linearly</span> <span m="2564800">with the</span> <span
  m="2564940">time,</span> <span m="2565260">right?</span> <span
  m="2565670">So</span> <span m="2565770">at</span> <span m="2565830">some
  point,</span> <span m="2566110">it's</span> <span m="2566180">just</span>
  <span m="2566330">that</span> <span m="2566745">you  really</span> <span
  m="2567160">don't</span> <span m="2567310">get</span> <span
  m="2567830">very</span> <span m="2567950">many</span> <span
  m="2568110">photons.</span> <span m="2568730">And</span> <span
  m="2568840">then</span> <span m="2569400">again,</span> <span
  m="2570140">you</span> <span m="2570240">have</span> <span
  m="2570260">this</span> <span m="2570410">extra</span> <span
  m="2570710">problem</span> <span m="2571300">of</span> <span
  m="2572130">distinguishing</span> <span m="2572980">the</span> <span
  m="2573970">fluorescence</span> <span m="2575630">from</span> <span
  m="2575840">the</span> <span m="2576070">autofluorescence.</span></p><p><span
  m="2577270">And</span> <span m="2577390">I</span> <span
  m="2577580">just</span> <span m="2577680">want</span> <span
  m="2577800">to</span> <span m="2577840">maybe</span> <span
  m="2578050">mention</span> <span m="2578330">one</span> <span
  m="2578430">more</span> <span m="2578560">thing.</span> <span
  m="2579630">In</span> <span m="2580120">Figure</span> <span
  m="2580350">1,</span> <span m="2580600">you</span> <span
  m="2580680">can</span> <span m="2580770">actually</span> <span
  m="2580960">see</span> <span m="2581720">how</span> <span
  m="2581870">big</span> <span m="2582210">the</span> <span
  m="2582690">fluorescence</span> <span m="2583190">intensity</span> <span
  m="2583690">of</span> <span m="2585350">this</span> <span
  m="2585560">Venus</span> <span m="2585980">protein</span> <span
  m="2586300">is,</span> <span m="2586660">as</span> <span
  m="2586950">compared</span> <span m="2587410">to</span> <span
  m="2587500">the</span> <span m="2587720">autofluorescence.</span> <span
  m="2588310">And</span> <span m="2588410">you</span> <span
  m="2588560">see</span> <span m="2588670">that</span> <span
  m="2588770">if</span> <span m="2589290">you</span> <span m="2589900">decrease
  that</span> <span m="2590330">exposure</span> <span m="2590740">time</span>
  <span m="2590960">by</span> <span m="2591590">even</span> <span
  m="2591850">one</span> <span m="2592030">order</span> <span
  m="2592190">of</span> <span m="2592230">magnitude,</span> <span
  m="2592580">you</span> <span m="2592690">wouldn't</span> <span
  m="2592960">be</span> <span m="2593030">able</span> <span
  m="2593160">to</span> <span m="2593410">see</span> <span
  m="2594190">them</span> <span m="2594360">over</span> <span
  m="2594480">the</span> <span m="2594550">background.</span> <span
  m="2595480">Right?</span> <span m="2596040">And</span> <span
  m="2596160">that's</span> <span m="2596300">true,</span> <span
  m="2596430">even</span> <span m="2596610">though</span> <span
  m="2596760">they</span> <span m="2597170">won't</span> <span
  m="2597360">have</span> <span m="2597470">had</span> <span
  m="2597600">a</span> <span m="2597630">chance</span> <span
  m="2597830">to</span> <span m="2597960">diffuse.</span> <span
  m="2598250">It's</span> <span m="2598390">just</span> <span
  m="2598560">that</span> <span m="2599030">you</span> <span
  m="2599120">don't</span> <span m="2599260">have</span> <span
  m="2599370">enough</span> <span m="2599520">signal.</span></p><p><span
  m="2600368">AUDIENCE: [INAUDIBLE].</span></p><p><span m="2604040">PROFESSOR:
  Oh.</span> <span m="2605430">Right.</span> <span m="2605610">So</span> <span
  m="2605680">you</span> <span m="2605760">can</span> <span
  m="2605860">also</span> <span m="2606200">increase</span> <span
  m="2606610">the</span> <span m="2606700">intensity.</span> <span
  m="2608340">Yeah,</span> <span m="2609180">that's</span> <span
  m="2609450">right.</span> <span m="2609880">And</span> <span
  m="2610120">there</span> <span m="2610260">is</span> <span
  m="2610430">some</span> <span m="2610770">limit</span> <span
  m="2611200">to</span> <span m="2612660">how</span> <span
  m="2612840">much</span> <span m="2613090">you</span> <span
  m="2613180">can</span> <span m="2613280">increase</span> <span
  m="2613630">the</span> <span m="2613700">intensity</span> <span m="2614180">of
  the laser,</span> <span m="2615310">just</span> <span
  m="2615500">because</span> <span m="2616050">there</span> <span
  m="2616310">is</span> <span m="2616580">some</span> <span
  m="2616860">cycling</span> <span m="2617390">time</span> <span
  m="2619560">of</span> <span m="2619690">the</span> <span
  m="2619780">protein</span> <span m="2621050">in</span> <span
  m="2621240">terms</span> <span m="2621420">of,</span> <span m="2621660">you
  excite</span> <span m="2622330">it,</span> <span m="2622680">and</span> <span
  m="2622750">then</span> <span m="2622840">it</span> <span
  m="2622920">takes</span> <span m="2623120">some</span> <span
  m="2623250">time</span> <span m="2623540">before</span> <span
  m="2623760">it's</span> <span m="2623870">going</span> <span
  m="2623960">to</span> <span m="2624030">emit.</span> <span
  m="2624190">So</span> <span m="2624260">that</span> <span
  m="2624560">actually</span> <span m="2624760">sets</span> <span
  m="2624990">a</span> <span m="2625510">fundamental</span> <span
  m="2626020">limit.</span></p><p><span m="2627270">Yeah,</span> <span
  m="2628360">I</span> <span m="2628650">don't</span> <span
  m="2628790">know</span> <span m="2628880">enough</span> <span
  m="2629050">about</span> <span m="2629180">the</span> <span
  m="2629250">details</span> <span m="2629840">of</span> <span
  m="2630040">this</span> <span m="2630700">in</span> <span
  m="2630790">the</span> <span m="2630830">sense</span> <span
  m="2631100">of</span> <span m="2631330">whether</span> <span
  m="2631950">maybe</span> <span m="2632360">it</span> <span
  m="2632430">would've</span> <span m="2632600">been</span> <span
  m="2632710">possible</span> <span m="2633140">for</span> <span
  m="2633250">them</span> <span m="2633460">to</span> <span
  m="2633560">try</span> <span m="2633780">to</span> <span
  m="2635110">adjust</span> <span m="2635450">these</span> <span
  m="2635580">various</span> <span m="2635790">parameters</span> <span
  m="2636250">to do it in</span> <span m="2636520">some</span> <span
  m="2636670">other</span> <span m="2636790">way.</span> <span
  m="2638350">But</span> <span m="2639690">these</span> <span
  m="2639830">are</span> <span m="2639880">all</span> <span
  m="2640000">the</span> <span m="2640080">things</span> <span m="2640330">you
  have to</span> <span m="2640440">consider.</span> <span
  m="2642200">Question?</span></p><p><span m="2651410">OK.</span> <span
  m="2652770">So</span> <span m="2652980">what</span> <span
  m="2653180">we</span> <span m="2653270">have</span> <span
  m="2653450">now</span> <span m="2653700">is</span> <span
  m="2655130">some</span> <span m="2655360">sense--</span> <span
  m="2655570">OK,</span> <span m="2656280">we</span> <span
  m="2656460">need</span> <span m="2656690">to</span> <span
  m="2656760">maybe</span> <span m="2657120">anchor</span> <span
  m="2657430">into</span> <span m="2657500">the</span> <span
  m="2657550">membrane</span> <span m="2658000">to</span> <span
  m="2658280">reduce</span> <span m="2658620">the</span> <span
  m="2658750">diffusion.</span> <span m="2659470">All right.</span> <span
  m="2659660">So</span> <span m="2659740">they</span> <span
  m="2659880">did</span> <span m="2660090">that.</span> <span
  m="2661290">And</span> <span m="2661570">we'll</span> <span
  m="2661860">maybe</span> <span m="2662050">say</span> <span
  m="2662200">something</span> <span m="2662610">more</span> <span
  m="2663360">about</span> <span m="2663970">this</span> <span
  m="2664200">anchoring</span> <span m="2664520">process</span> <span
  m="2664940">in</span> <span m="2665020">a</span> <span
  m="2665050">moment.</span> <span m="2665320">But</span> <span
  m="2665840">first,</span> <span m="2666170">I</span> <span
  m="2666250">want</span> <span m="2666440">to</span> <span
  m="2666630">make</span> <span m="2666790">sure</span> <span
  m="2666980">that</span> <span m="2667450">we're</span> <span
  m="2667620">all</span> <span m="2667810">on</span> <span
  m="2667910">the</span> <span m="2668010">same</span> <span
  m="2668060">page</span> <span m="2668350">in</span> <span
  m="2668770">understanding</span> <span m="2670190">their</span> <span
  m="2670420">arguments</span> <span m="2670830">for</span> <span
  m="2670940">why</span> <span m="2671130">this</span> <span
  m="2671330">is</span> <span m="2671420">a</span> <span
  m="2671490">single</span> <span m="2671900">molecule</span> <span
  m="2672340">that</span> <span m="2672420">they're</span> <span
  m="2672570">looking</span> <span m="2672780">at.</span> <span
  m="2673990">Can</span> <span m="2674110">somebody</span> <span
  m="2674630">remind</span> <span m="2675030">us</span> <span
  m="2675760">their</span> <span m="2677490">primary</span> <span
  m="2678240">evidence</span> <span m="2678650">that this is</span> <span
  m="2678780">a</span> <span m="2679030">single</span> <span
  m="2679240">molecule?</span></p><p><span m="2692090">So question</span> <span
  m="2692450">is,</span> <span m="2693070">a</span> <span
  m="2693650">molecule</span> <span m="2694120">,</span> <span
  m="2696420">we'll</span> <span m="2696600">say</span> <span
  m="2696760">single</span> <span m="2697080">fluorophore,</span> <span
  m="2697520">just to--</span> <span m="2704700">question</span> <span
  m="2704960">mark.</span> <span m="2705140">How</span> <span
  m="2705240">do</span> <span m="2705310">we</span> <span
  m="2705705">know?</span></p><p><span m="2706585">AUDIENCE: The</span> <span
  m="2707070">intensity drops off.</span></p><p><span m="2707555">PROFESSOR:
  Right. The</span> <span m="2708040">intensity</span> <span
  m="2708660">drops</span> <span m="2709040">off</span> <span
  m="2709230">suddenly.</span> <span m="2711850">So</span> <span
  m="2712010">if</span> <span m="2712070">you</span> <span
  m="2712170">look</span> <span m="2712310">at</span> <span
  m="2712380">the</span> <span m="2712480">intensity</span> <span
  m="2713570">as</span> <span m="2713730">a</span> <span
  m="2713780">function</span> <span m="2714060">of</span> <span
  m="2714140">time,</span> <span m="2714960">what</span> <span
  m="2715110">you</span> <span m="2715210">see</span> <span
  m="2715560">is</span> <span m="2715760">that</span> <span
  m="2716610">it</span> <span m="2716790">looks</span> <span
  m="2717040">like,</span> <span m="2718300">and</span> <span
  m="2718460">then.</span> <span m="2720990">So</span> <span
  m="2721100">it's</span> <span m="2721230">actually</span> <span
  m="2721490">more</span> <span m="2721730">noise,</span> <span
  m="2722200">but</span> <span m="2722300">this</span> <span
  m="2722350">is</span> <span m="2722440">just</span> <span
  m="2722660">to--</span> <span m="2727250">now</span> <span
  m="2727720">this</span> <span m="2727920">is</span> <span
  m="2728040">what</span> <span m="2728160">it</span> <span
  m="2728230">looks</span> <span m="2728340">like</span> <span m="2728480">for
  a</span> <span m="2728580">single</span> <span m="2728870">molecule,</span>
  <span m="2729240">but</span> <span m="2729380">we</span> <span
  m="2729490">should</span> <span m="2729670">also</span> <span
  m="2729930">be</span> <span m="2730100">clear</span> <span
  m="2730890">of</span> <span m="2731570">what</span> <span
  m="2731760">it</span> <span m="2731830">would</span> <span
  m="2731940">look</span> <span m="2732080">like</span> <span
  m="2732250">if</span> <span m="2732350">it were</span> <span
  m="2732530">many</span> <span m="2732900">molecules.</span></p><p><span
  m="2734540">So this</span> <span m="2734720">is</span> <span
  m="2734860">if</span> <span m="2734930">it's</span> <span m="2735060">a</span>
  <span m="2735130">single</span> <span m="2735580">molecule.</span> <span
  m="2737610">And</span> <span m="2737710">this</span> <span
  m="2737850">is</span> <span m="2738500">what we</span> <span
  m="2738580">call</span> <span m="2738710">a</span> <span
  m="2738760">bleach</span> <span m="2739270">event.</span> <span
  m="2741770">And</span> <span m="2741910">so</span> <span
  m="2741990">the</span> <span m="2742130">molecule</span> <span
  m="2742630">dies</span> <span m="2743030">for</span> <span
  m="2743170">one</span> <span m="2743640">reason</span> <span
  m="2743910">or</span> <span m="2743960">another.</span> <span
  m="2744480">So</span> <span m="2744560">it</span> <span
  m="2744670">goes,</span> <span m="2746140">some</span> <span
  m="2746820">oxygen</span> <span m="2747560">reaction,</span> <span
  m="2748020">something.</span> <span m="2749460">Now</span> <span
  m="2749790">the</span> <span m="2749870">question</span> <span
  m="2750130">is,</span> <span m="2750220">what</span> <span
  m="2750360">happens</span> <span m="2751310">if</span> <span
  m="2751470">it</span> <span m="2751650">said</span> <span
  m="2751800">there</span> <span m="2751870">are</span> <span
  m="2751930">many</span> <span m="2753090">molecules?</span></p><p><span
  m="2762290">AUDIENCE: [INAUDIBLE].</span></p><p><span m="2764190">PROFESSOR:
  OK.</span> <span m="2764380">Now,</span> <span m="2764580">what</span> <span
  m="2764690">we</span> <span m="2764770">want</span> <span m="2764950">to do
  is</span> <span m="2765100">imaginn--</span> <span m="2766120">let's</span>
  <span m="2766270">say</span> <span m="2766350">that</span> <span
  m="2766590">we</span> <span m="2766710">shined</span> <span
  m="2767370">light</span> <span m="2767780">on</span> <span
  m="2768570">a</span> <span m="2768650">bead</span> <span
  m="2769150">containing</span> <span m="2769570">fluorescence,</span> <span
  m="2771400">containing</span> <span m="2771770">fluorescent</span> <span
  m="2772070">molecules.</span> <span m="2774960">So</span> <span
  m="2775080">I'm</span> <span m="2775390">going</span> <span
  m="2775480">to</span> <span m="2775520">give</span> <span
  m="2775660">us</span> <span m="2775990">some</span> <span
  m="2776210">options.</span> <span m="2779680">It</span> <span
  m="2779880">could</span> <span m="2780090">be</span> <span
  m="2781400">many</span> <span m="2781580">molecules.</span> <span
  m="2782610">OK.</span> <span m="2782900">We</span> <span
  m="2783090">could.</span> <span m="2803712">All right.</span> <span
  m="2804240">I'll</span> <span m="2804340">give</span> <span
  m="2804450">you</span> <span m="2804520">a</span> <span
  m="2804910">choice</span> <span m="2805360">those</span> <span
  m="2805810">three.</span></p><p><span m="2807160">AUDIENCE: So we're</span>
  <span m="2807610">talking about</span> <span
  m="2808060">[INAUDIBLE]?</span></p><p><span m="2808960">PROFESSOR: Yes.</span>
  <span m="2809280">I'm</span> <span m="2809700">asking</span> <span
  m="2810140">if</span> <span m="2810310">instead--</span> <span
  m="2812130">what</span> <span m="2812810">happens</span> <span
  m="2812950">in</span> <span m="2813140">the</span> <span
  m="2813200">microscope is</span> <span m="2813680">you</span> <span
  m="2813820">see</span> <span m="2814050">a</span> <span
  m="2814110">spot.</span> <span m="2815720">And</span> <span
  m="2816390">the</span> <span m="2816500">spot</span> <span
  m="2816950">is</span> <span m="2817050">always</span> <span
  m="2817260">huge.</span> <span m="2817880">Right?</span> <span
  m="2818210">300</span> <span m="2818645">nanometers.</span> <span
  m="2819850">So</span> <span m="2819940">there</span> <span
  m="2820080">could</span> <span m="2820290">be</span> <span
  m="2820490">one</span> <span m="2821030">molecule</span> <span
  m="2821360">there,</span> <span m="2821530">or</span> <span
  m="2821690">there</span> <span m="2821820">could</span> <span
  m="2822010">be</span> <span m="2822810">100.</span> <span m="2823710">You
  could</span> <span m="2823930">fit</span> <span m="2824010">1,000</span> <span
  m="2824520">in</span> <span m="2824590">there.</span> <span
  m="2824940">No</span> <span m="2825090">problem.</span> <span
  m="2825490">Right?</span> <span m="2825800">10</span> <span
  m="2826270">by</span> <span m="2826370">10</span> <span m="2826590">by</span>
  <span m="2826690">10</span> <span m="2826870">molecules?</span> <span
  m="2827330">That</span> <span m="2827440">still is only</span> <span
  m="2827705">30 nanometers.</span> <span m="2828560">That's</span> <span
  m="2828660">still</span> <span m="2828870">much</span> <span
  m="2829030">smaller</span> <span m="2829390">than</span> <span
  m="2829540">defraction</span> <span m="2829630">limited</span> <span
  m="2830120">spot.</span></p><p><span m="2830880">So</span> <span
  m="2832145">of course,</span> <span m="2832420">if you</span> <span
  m="2832710">see</span> <span m="2832970">something,</span> <span
  m="2833710">and</span> <span m="2834190">the</span> <span
  m="2834340">spot</span> <span m="2834870">is</span> <span
  m="2836110">10</span> <span m="2836390">microns</span> <span
  m="2837070">in</span> <span m="2837190">width,</span> <span
  m="2838780">you'd</span> <span m="2838940">be</span> <span
  m="2839080">pretty</span> <span m="2839330">confident</span> <span
  m="2839800">that</span> <span m="2839940">either</span> <span
  m="2840290">your</span> <span m="2840430">optics</span> <span
  m="2840960">suck,</span> <span m="2841630">or</span> <span
  m="2843090">you're</span> <span m="2843200">looking</span> <span
  m="2843390">at</span> <span m="2843440">many</span> <span
  m="2843590">molecules.</span> <span m="2844550">But</span> <span
  m="2844880">if</span> <span m="2845000">you</span> <span
  m="2845080">see</span> <span m="2845220">diffraction</span> <span
  m="2845670">limited</span> <span m="2845990">spot,</span> <span
  m="2846170">then</span> <span m="2846290">it's</span> <span
  m="2846420">not</span> <span m="2846560">so</span> <span
  m="2846690">obvious.</span> <span m="2847040">And</span> <span
  m="2847200">so</span> <span m="2847280">the</span> <span
  m="2847360">question</span> <span m="2847660">is,</span> <span
  m="2847790">if</span> <span m="2847910">you</span> <span
  m="2848090">plot</span> <span m="2848430">the</span> <span
  m="2848500">intensity</span> <span m="2849040">of</span> <span
  m="2849110">a</span> <span m="2849150">diffraction</span> <span
  m="2849590">limited</span> <span m="2849800">spot</span> <span
  m="2850090">as</span> <span m="2850190">a</span> <span
  m="2850230">function</span> <span m="2850480">of</span> <span
  m="2850540">time,</span> <span m="2852220">how</span> <span
  m="2852410">do</span> <span m="2852470">you</span> <span
  m="2852540">know</span> <span m="2852710">that it's a</span> <span
  m="2852840">single molecule?</span></p><p><span m="2853300">They</span> <span
  m="2853390">claim,</span> <span m="2853650">oh</span> <span
  m="2853810">well,</span> <span m="2853940">it's</span> <span
  m="2854050">because</span> <span m="2854290">of</span> <span
  m="2854360">this.</span> <span m="2855210">But</span> <span
  m="2855620">it's</span> <span m="2855740">always</span> <span
  m="2855890">good</span> <span m="2856000">to</span> <span
  m="2856040">be</span> <span m="2856110">clear.</span> <span
  m="2856880">What</span> <span m="2857090">would</span> <span
  m="2857200">it</span> <span m="2857260">look</span> <span
  m="2857410">like</span> <span m="2857620">if</span> <span
  m="2857730">it</span> <span m="2857800">were</span> <span
  m="2857950">not</span> <span m="2859190">a single</span> <span
  m="2859310">molecule, but</span> <span m="2859620">instead</span> <span
  m="2859980">it</span> <span m="2860030">were</span> <span m="2860710">a</span>
  <span m="2860760">collection</span> <span m="2861140">of</span> <span
  m="2861210">molecules&gt;</span> <span m="2863950">Let's</span> <span
  m="2864060">go</span> <span m="2864140">ahead</span> <span
  m="2864240">and</span> <span m="2864320">vote.</span> <span
  m="2864870">Ready?</span> <span m="2865750">Three,</span> <span
  m="2866540">two,</span> <span m="2867370">one.</span></p><p><span
  m="2870320">So</span> <span m="2870480">we</span> <span
  m="2870590">have</span> <span m="2870710">a</span> <span
  m="2870920">fair</span> <span m="2871870">number</span> <span
  m="2872250">of</span> <span m="2872370">different</span> <span
  m="2872660">responses.</span> <span m="2875340">It</span> <span
  m="2875800">seems</span> <span m="2876040">to</span> <span
  m="2876080">be</span> <span m="2876140">a</span> <span
  m="2876200">split</span> <span m="2876560">across</span> <span
  m="2876860">the</span> <span m="2876990">room</span> <span
  m="2877350">is</span> <span m="2877460">the</span> <span
  m="2877560">only</span> <span m="2877770">problem.</span> <span
  m="2879481">So</span> <span m="2879920">I'm</span> <span
  m="2880050">not</span> <span m="2880170">going</span> <span
  m="2880250">to</span> <span m="2880330">have you</span> <span
  m="2880400">discuss,</span> <span m="2880750">because</span> <span
  m="2880930">I</span> <span m="2881000">think</span> <span
  m="2881250">your</span> <span m="2881430">neighbors</span> <span
  m="2881870">typically</span> <span m="2882250">agree</span> <span
  m="2882480">with</span> <span m="2882560">you.</span> <span
  m="2883550">But</span> <span m="2883970">in</span> <span
  m="2884250">this</span> <span m="2884390">case,</span> <span
  m="2884670">it's</span> <span m="2884730">going</span> <span
  m="2884820">to</span> <span m="2884870">be</span> <span m="2885180">C.</span>
  <span m="2885920">And</span> <span m="2886010">this,</span> <span
  m="2886310">it</span> <span m="2886430">was</span> <span m="2886550">an</span>
  <span m="2886640">attempt</span> <span m="2887050">of</span> <span
  m="2887130">mine</span> <span m="2887430">of</span> <span
  m="2887530">drawing--</span> <span m="2888420">what</span> <span
  m="2888540">is</span> <span m="2888640">it?</span> <span
  m="2888750">Exponential</span> <span m="2889510">distribution.</span> <span
  m="2890395">So</span> <span m="2890730">you'll</span> <span
  m="2890880">see</span> <span m="2891180">exponential</span> <span
  m="2891800">decay.</span></p><p><span m="2894040">So</span> <span
  m="2894100">this</span> <span m="2894270">is</span> <span
  m="2895250">typical</span> <span m="2895690">of</span> <span
  m="2895790">processes</span> <span m="2896380">where</span> <span
  m="2896490">something</span> <span m="2896840">is</span> <span
  m="2896930">happening</span> <span m="2898110">at</span> <span
  m="2898240">a</span> <span m="2898320">constant</span> <span
  m="2898870">rate</span> <span m="2899430">over</span> <span
  m="2899620">time,</span> <span m="2900230">and</span> <span
  m="2900370">then</span> <span m="2900500">you're</span> <span
  m="2900980">seeing</span> <span m="2901270">this</span> <span
  m="2901420">thing</span> <span m="2901600">go</span> <span
  m="2901740">away.</span> <span m="2902110">So</span> <span
  m="2902130">this</span> <span m="2902290">could</span> <span
  m="2902450">be,</span> <span m="2902720">for</span> <span
  m="2902820">example,</span> <span m="2905360">radioactivity</span> <span
  m="2906060">is</span> <span m="2906180">the</span> <span
  m="2906260">classic</span> <span m="2906550">thing</span> <span
  m="2906690">we</span> <span m="2906760">always</span> <span
  m="2906910">talk.</span> <span m="2907930">These</span> <span
  m="2908060">are</span> <span m="2908140">random</span> <span
  m="2908460">events.</span> <span m="2908830">We</span> <span
  m="2908950">thought</span> <span m="2909200">the</span> <span
  m="2909640">radiation</span> <span m="2910470">coming</span> <span
  m="2910810">off</span> <span m="2911050">of</span> <span
  m="2911170">some</span> <span m="2911430">source</span> <span
  m="2911860">is</span> <span m="2911940">a</span> <span
  m="2912000">function</span> <span m="2912250">of</span> <span
  m="2912300">time</span> <span m="2912620">that's</span> <span
  m="2912740">going</span> <span m="2912830">to</span> <span
  m="2912910">decay</span> <span m="2913350">exponentially.</span></p><p><span
  m="2916300">Similarly</span> <span m="2916850">here,</span> <span
  m="2917580">now</span> <span m="2919390">this</span> <span
  m="2919620">is--</span> <span m="2921660">again,</span> <span
  m="2922350">intensity</span> <span m="2922910">is</span> <span
  m="2922990">a</span> <span m="2923050">function</span> <span
  m="2923350">of</span> <span m="2923420">time.</span> <span m="2924130">In the
  case</span> <span m="2924280">of</span> <span m="2924420">many</span> <span
  m="2924720">molecules,</span> <span m="2925690">we</span> <span
  m="2925790">get</span> <span m="2926230">this</span> <span
  m="2926420">thing</span> <span m="2926710">that look</span> <span
  m="2926910">like</span> <span m="2927100">C.</span> <span
  m="2928200">Now,</span> <span m="2928790">there's</span> <span
  m="2928960">going</span> <span m="2929070">to</span> <span
  m="2929110">be</span> <span m="2929210">some</span> <span
  m="2929460">time</span> <span m="2929790">scale</span> <span
  m="2930080">here</span> <span m="2931180">which</span> <span
  m="2933440">is</span> <span m="2933780">telling</span> <span
  m="2934060">us</span> <span m="2934140">about</span> <span
  m="2934340">the</span> <span m="2934480">typical</span> <span
  m="2936700">time</span> <span m="2937170">for</span> <span
  m="2937390">this</span> <span m="2938230">bleach</span> <span
  m="2938790">event,</span> <span m="2939530">which</span> <span
  m="2939790">we're</span> <span m="2939960">told</span> <span
  m="2940270">is</span> <span m="2940420">what?</span></p><p><span
  m="2943950">250 milliseconds.</span> <span m="2948280">And</span> <span
  m="2948710">indeed,</span> <span m="2948890">this</span> <span
  m="2949010">is</span> <span m="2949120">telling</span> <span
  m="2949430">us,</span> <span m="2949550">actually,</span> <span
  m="2949810">that they're</span> <span m="2951460">already</span> <span
  m="2951890">illuminating</span> <span m="2952560">these</span> <span
  m="2952790">guys</span> <span m="2953660">at</span> <span
  m="2953840">pretty</span> <span m="2954080">high</span> <span
  m="2954300">intensity.</span> <span m="2955420">Because</span> <span
  m="2956610">250</span> <span m="2957190">milliseconds</span> <span
  m="2957600">is</span> <span m="2957720">not</span> <span
  m="2958800">that</span> <span m="2959050">long.</span> <span
  m="2966400">Yes?</span></p><p><span m="2967311">AUDIENCE:
  [INAUDIBLE]?</span></p><p><span m="2972130">PROFESSOR: Yes.</span></p><p><span
  m="2972710">AUDIENCE:</span> <span m="2973130">Is it</span> <span
  m="2973550">really a function</span> <span m="2973970">common photons</span>
  <span m="2974390">[INAUDIBLE]?</span></p><p><span m="2978180">PROFESSOR:
  It's</span> <span m="2978560">not</span> <span m="2978810">really</span> <span
  m="2979050">a</span> <span m="2979100">function</span> <span
  m="2979500">of</span> <span m="2979970">the--</span> <span
  m="2980940">it</span> <span m="2981080">ends</span> <span
  m="2981280">up</span> <span m="2981390">being</span> <span
  m="2981500">a</span> <span m="2981550">function</span> <span
  m="2981810">of</span> <span m="2981880">the</span> <span m="2981940">number
  of</span> <span m="2982140">photons</span> <span m="2982450">that are emitted,
  but</span> <span m="2982760">that's</span> <span m="2982990">basically</span>
  <span m="2983270">because</span> <span m="2984040">you're</span> <span
  m="2984310">in kind of</span> <span m="2984480">some</span> <span
  m="2984600">ground</span> <span m="2984920">state.</span> <span
  m="2985300">You</span> <span m="2985410">excite</span> <span
  m="2985950">up</span> <span m="2986170">to</span> <span
  m="2986290">this</span> <span m="2986470">other</span> <span
  m="2986690">state.</span> <span m="2987900">And</span> <span
  m="2988040">then,</span> <span m="2988460">you</span> <span
  m="2988600">get</span> <span m="2988760">this</span> <span
  m="2989130">relaxation</span> <span m="2989790">to</span> <span
  m="2989870">a</span> <span m="2989930">lower</span> <span
  m="2990160">state.</span></p><p><span m="2991430">So</span> <span
  m="2992771">this</span> <span m="2993220">is</span> <span
  m="2993370">the</span> <span m="2994020">energy</span> <span
  m="2994500">of</span> <span m="2994660">the</span> <span
  m="2994880">absorbed</span> <span m="2995280">photon.</span> <span
  m="2995440">This is the energy of the</span> <span m="2995930">emitted</span>
  <span m="2996260">photon.</span> <span m="2997710">The</span> <span
  m="2998090">idea</span> <span m="2998450">is</span> <span
  m="2998550">that</span> <span m="2998640">each</span> <span
  m="2998840">time</span> <span m="2999020">you</span> <span
  m="2999090">go</span> <span m="2999280">around</span> <span
  m="2999580">this</span> <span m="2999660">cycle,</span> <span
  m="3001440">that's</span> <span m="3001570">one</span> <span
  m="3001750">emission</span> <span m="3002100">cycle,</span> <span
  m="3002660">there's</span> <span m="3002830">some</span> <span
  m="3003080">probability</span> <span m="3003810">that's</span> <span
  m="3003950">small--</span> <span m="3005710">1</span> <span
  m="3006090">in</span> <span m="3006210">10</span> <span m="3006530">to</span>
  <span m="3006610">the</span> <span m="3006740">5,</span> <span
  m="3007500">or</span> <span m="3007580">something</span> <span
  m="3007720">like</span> <span m="3007810">that--</span> <span
  m="3009030">that</span> <span m="3009170">it</span> <span
  m="3009240">reacts</span> <span m="3009540">with</span> <span
  m="3009750">oxygen,</span> <span m="3010130">or</span> <span
  m="3010200">something</span> <span m="3010550">that</span> <span
  m="3010950">causes</span> <span m="3011370">it to go</span> <span
  m="3011500">to</span> <span m="3011580">the</span> <span
  m="3011690">start.</span> <span m="3012520">And</span> <span
  m="3012740">it's</span> <span m="3012910">in</span> <span
  m="3013000">principle,</span> <span m="3013460">irreversible</span> <span
  m="3014030">state.</span></p><p><span m="3014930">Of</span> <span
  m="3015380">course,</span> <span m="3015650">the</span> <span
  m="3015950">dynamics</span> <span m="3016360">of</span> <span
  m="3016400">these</span> <span m="3016520">things</span> <span m="3016720">can
  be</span> <span m="3016840">more</span> <span m="3017000">complicated,</span>
  <span m="3017520">but</span> <span m="3017600">that's</span> <span
  m="3018160">the</span> <span m="3018290">[INAUDIBLE]</span> <span
  m="3018630">way of thinking about it.</span> <span m="3020700">What</span>
  <span m="3020790">that</span> <span m="3020900">means</span> <span
  m="3021210">is that</span> <span m="3022580">that's</span> <span
  m="3023230">more</span> <span m="3023840">or</span> <span
  m="3023890">less</span> <span m="3024340">a</span> <span
  m="3024490">constant</span> <span m="3024890">number</span> <span
  m="3025080">of</span> <span m="3025140">photons</span> <span
  m="3026260">that</span> <span m="3026410">you're</span> <span
  m="3026500">going</span> <span m="3026590">to</span> <span
  m="3026630">get</span> <span m="3026790">out.</span> <span
  m="3029060">There</span> <span m="3029180">are</span> <span
  m="3029210">many</span> <span m="3029570">cases</span> <span
  m="3029890">where</span> <span m="3030000">this</span> <span
  m="3031030">approximation</span> <span m="3031560">fails.</span></p><p><span
  m="3037850">This</span> <span m="3039160">single</span> <span
  m="3039670">step</span> <span m="3039930">bleaching</span> <span
  m="3040430">is</span> <span m="3040730">kind</span> <span
  m="3040870">of</span> <span m="3040940">a</span> <span
  m="3041060">classic</span> <span m="3042220">signature</span> <span
  m="3042930">of</span> <span m="3043260">the</span> <span m="3043430">fact
  that</span> <span m="3043620">you're</span> <span m="3043780">looking</span>
  <span m="3043990">at</span> <span m="3044060">a</span> <span
  m="3044110">single</span> <span m="3045010">fluorescent</span> <span
  m="3045410">molecule.</span> <span m="3047640">Now,</span> <span
  m="3050230">there are</span> <span m="3050570">secondary</span> <span
  m="3051910">arguments</span> <span m="3052360">for</span> <span
  m="3052700">why</span> <span m="3052880">this</span> <span
  m="3053040">is</span> <span m="3053270">a</span> <span
  m="3053350">single</span> <span m="3054890">[INAUDIBLE]</span> <span
  m="3055860">Venus</span> <span m="3056150">they're</span> <span
  m="3056270">looking</span> <span m="3056480">at</span> <span
  m="3056610">was</span> <span m="3056740">what?</span></p><p><span
  m="3066570">What</span> <span m="3066850">was</span> <span
  m="3067000">their</span> <span m="3067110">supporting</span> <span
  m="3067700">evidence?</span> <span m="3069110">Yes?</span></p><p><span
  m="3069710">AUDIENCE: [INAUDIBLE].</span></p><p><span m="3071560">PROFESSOR:
  Yeah. The</span> <span m="3071750">intensity</span> <span
  m="3072490">matched</span> <span m="3072870">what?</span></p><p><span
  m="3073621">AUDIENCE: [INAUDIBLE].</span></p><p><span m="3076990">PROFESSOR:
  That's</span> <span m="3077220">right.</span> <span m="3077380">So</span>
  <span m="3077620">what</span> <span m="3078120">they</span> <span
  m="3078390">said is,</span> <span m="3078490">well,</span> <span
  m="3078640">all right. This</span> <span m="3078800">intensity</span> <span
  m="3081220">matched</span> <span m="3081650">what</span> <span
  m="3081760">they</span> <span m="3081850">measured</span> <span
  m="3083380">on</span> <span m="3083520">a</span> <span
  m="3083600">slide.</span> <span m="3085750">Just</span> <span
  m="3086050">the</span> <span m="3086120">molecule.</span> <span
  m="3087800">But</span> <span m="3088020">I'd</span> <span
  m="3088140">say</span> <span m="3088510">this</span> <span
  m="3088790">really</span> <span m="3089010">is,</span> <span
  m="3089190">I</span> <span m="3089290">would</span> <span
  m="3089370">say,</span> <span m="3089490">supporting</span> <span
  m="3090240">evidence,</span> <span m="3090640">because</span> <span
  m="3092020">the</span> <span m="3092100">intensity</span> <span
  m="3092740">of</span> <span m="3092990">the</span> <span
  m="3093070">fluorescence</span> <span m="3093770">can</span> <span
  m="3094190">just</span> <span m="3094440">be</span> <span
  m="3094700">different</span> <span m="3095090">in</span> <span
  m="3095160">different</span> <span
  m="3095580">environments.</span></p><p><span m="3098010">I</span> <span
  m="3098110">think</span> <span m="3098260">that this</span> <span
  m="3098490">is</span> <span m="3098570">kind</span> <span
  m="3098740">of</span> <span m="3098800">thing</span> <span
  m="3098940">that</span> <span m="3099350">it's--</span> <span
  m="3102320">there</span> <span m="3102450">are</span> <span
  m="3102470">many</span> <span m="3102660">ways</span> <span m="3102890">that
  this</span> <span m="3103080">can</span> <span m="3103200">fail.</span> <span
  m="3103750">Right,</span> <span m="3103920">so</span> <span
  m="3103990">I</span> <span m="3104040">think</span> <span
  m="3104200">that</span> <span m="3105030">in</span> <span
  m="3105170">general,</span> <span m="3105570">we</span> <span
  m="3105670">consider</span> <span m="3105920">this</span> <span
  m="3106070">to</span> <span m="3106200">be the</span> <span
  m="3106270">gold</span> <span m="3106490">standard.</span> <span
  m="3113935">All</span> <span m="3114420">right.</span> <span
  m="3115430">Now</span> <span m="3116300">in</span> <span
  m="3116480">their</span> <span m="3117170">experimental</span> <span
  m="3118020">setup,</span> <span m="3118640">there's</span> <span
  m="3118990">something</span> <span m="3119310">that's,</span> <span
  m="3119490">I</span> <span m="3119550">think,</span> <span
  m="3119850">very</span> <span m="3120070">nice</span> <span m="3120390">that
  they</span> <span m="3120860">do,</span> <span m="3121130">which</span> <span
  m="3121390">is,</span> <span m="3121990">if</span> <span
  m="3122170">you</span> <span m="3122320">look</span> <span
  m="3122500">at</span> <span m="3122620">the--</span> <span
  m="3130550">now</span> <span m="3130760">this</span> <span
  m="3130930">is</span> <span m="3131150">the</span> <span
  m="3131750">we'll</span> <span m="3131920">say,</span> <span
  m="3132130">laser</span> <span m="3133350">illumination.</span> <span
  m="3137480">Here,</span> <span m="3137820">this</span> <span
  m="3137980">is</span> <span m="3138110">kind</span> <span
  m="3138240">of</span> <span m="3138350">on,</span> <span m="3138820">and
  this</span> <span m="3138960">is off.</span></p><p><span
  m="3141630">What</span> <span m="3141800">they</span> <span
  m="3141900">do</span> <span m="3142090">is</span> <span
  m="3142430">every</span> <span m="3142800">three</span> <span
  m="3143160">minutes,</span> <span m="3143850">they</span> <span
  m="3144040">illuminate.</span> <span m="3151950">And</span> <span
  m="3152150">then,</span> <span m="3155410">this</span> <span
  m="3155550">is</span> <span m="3155720">not</span> <span m="3156150">to</span>
  <span m="3156260">scale.</span> <span m="3162480">This</span> <span
  m="3162630">was</span> <span m="3162800">1.2</span> <span
  m="3164550">seconds.</span> <span m="3166920">So</span> <span
  m="3167040">we</span> <span m="3167380">might</span> <span
  m="3167570">want</span> <span m="3167680">to</span> <span
  m="3167720">even--</span> <span m="3168884">there's</span> <span
  m="3169266">a</span> <span m="3169650">separation</span> <span
  m="3170140">in</span> <span m="3170190">there.</span> <span
  m="3170850">So</span> <span m="3170990">they</span> <span
  m="3171110">illuminate</span> <span m="3171380">for</span> <span
  m="3171650">1.2</span> <span m="3172060">seconds,</span> <span
  m="3172430">and</span> <span m="3172550">they</span> <span
  m="3172630">collect</span> <span m="3173220">the</span> <span
  m="3173330">light</span> <span m="3174280">for</span> <span
  m="3174420">the</span> <span m="3174520">first</span> <span
  m="3175000">0.1</span> <span m="3175460">seconds.</span> <span
  m="3178020">This</span> <span m="3178210">is</span> <span
  m="3178310">the</span> <span m="3178400">period</span> <span
  m="3178690">where</span> <span m="3178760">they</span> <span
  m="3178860">collect</span> <span m="3182080">for</span> <span
  m="3183030">0.1.</span></p><p><span m="3191930">Can</span> <span
  m="3192100">somebody</span> <span m="3193120">tell</span> <span
  m="3193440">us</span> <span m="3194050">why</span> <span
  m="3194220">they</span> <span m="3194330">might</span> <span
  m="3194610">possibly</span> <span m="3195090">want</span> <span
  m="3195350">to</span> <span m="3195460">do</span> <span
  m="3195640">this?</span> <span m="3196480">Shine</span> <span
  m="3196870">more</span> <span m="3197120">light</span> <span
  m="3197430">on</span> <span m="3197580">the</span> <span
  m="3197640">sample</span> <span m="3198060">than</span> <span
  m="3198980">they</span> <span m="3199100">need</span> <span
  m="3199290">to?</span> <span m="3201630">They're</span> <span
  m="3201750">not</span> <span m="3201920">going</span> <span
  m="3202020">to</span> <span m="3203760">analyze</span> <span
  m="3204120">that</span> <span m="3204240">data.</span> <span
  m="3207900">So</span> <span m="3208000">this</span> <span
  m="3208140">is</span> <span m="3208260">an</span> <span
  m="3208350">intentional</span> <span m="3209040">bleaching</span> <span
  m="3209550">step.</span> <span m="3211920">So</span> <span
  m="3212070">this</span> <span m="3212380">part</span> <span
  m="3212670">here</span> <span m="3213650">is</span> <span
  m="3214580">to</span> <span m="3214680">bleach.</span> <span
  m="3217620">And</span> <span m="3217780">we'll</span> <span
  m="3217910">see</span> <span m="3218200">that</span> <span
  m="3218690">this</span> <span m="3218940">is</span> <span
  m="3219060">actually</span> <span m="3219330">essential</span> <span
  m="3219970">for</span> <span m="3220150">the</span> <span
  m="3220250">way</span> <span m="3220450">that</span> <span
  m="3220560">they're</span> <span m="3221030">collecting</span> <span
  m="3221350">their data.</span></p><p><span m="3224890">Given</span> <span
  m="3225120">everything</span> <span m="3225360">that we've</span> <span
  m="3225550">just</span> <span m="3225830">said,</span> <span
  m="3226520">you</span> <span m="3226650">should</span> <span
  m="3226920">be</span> <span m="3227100">able</span> <span
  m="3227250">to</span> <span m="3227320">tell</span> <span
  m="3227550">me</span> <span m="3228880">what</span> <span
  m="3229200">fraction</span> <span m="3230020">of</span> <span
  m="3230190">the</span> <span m="3230270">molecules</span> <span
  m="3231170">will</span> <span m="3231430">not</span> <span
  m="3231870">be</span> <span m="3232000">bleached.</span> <span
  m="3244240">That</span> <span m="3244450">survive</span> <span
  m="3244990">bleaching.</span> <span m="3246780">Survive</span> <span
  m="3247690">the</span> <span m="3247960">so-called</span> <span
  m="3248320">bleaching</span> <span m="3248790">step.</span> <span
  m="3257430">You</span> <span m="3257570">can</span> <span
  m="3257680">ignore</span> <span m="3258090">my</span> <span
  m="3258240">writing.</span> <span m="3258640">You</span> <span
  m="3258700">should</span> <span m="3258850">be</span> <span
  m="3258960">able</span> <span m="3259080">to</span> <span
  m="3259240">think</span> <span m="3259460">about</span> <span
  m="3259640">it</span> <span m="3259720">on</span> <span
  m="3259820">your</span> <span m="3260030">own.</span></p><p><span
  m="3279640">I'll</span> <span m="3279650">go</span> <span
  m="3279760">ahead,</span> <span m="3279850">and</span> <span
  m="3280070">I'll</span> <span m="3280200">give</span> <span
  m="3280370">you</span> <span m="3281000">30</span> <span
  m="3281310">seconds</span> <span m="3281670">to</span> <span
  m="3281770">think</span> <span m="3281950">about</span> <span
  m="3282170">this.</span> <span m="3283390">And</span> <span m="3283590">I
  think</span> <span m="3284000">all</span> <span m="3284190">of</span> <span
  m="3284320">the</span> <span m="3284670">information</span> <span
  m="3284925">that</span> <span m="3285180">you</span> <span
  m="3285320">need</span> <span m="3285670">is</span> <span
  m="3285790">in</span> <span m="3285880">principle</span> <span
  m="3288110">written</span> <span m="3288400">up</span> <span
  m="3288510">on</span> <span m="3288580">the</span> <span
  m="3288640">board.</span> <span m="3288960">Yes?</span></p><p><span
  m="3290330">AUDIENCE: [INAUDIBLE].</span></p><p><span m="3299330">PROFESSOR:
  Right.</span> <span m="3300270">I'm</span> <span m="3300390">assuming</span>
  <span m="3300700">that</span> <span m="3300800">they</span> <span
  m="3301100">start</span> <span m="3301460">out</span> <span
  m="3301760">being</span> <span m="3301970">fluorescent.</span> <span
  m="3304120">Now</span> <span m="3305130">over</span> <span
  m="3305370">time,</span> <span m="3305860">we're</span> <span
  m="3305970">illuminating</span> <span m="3306500">them</span> <span
  m="3306610">with</span> <span m="3306700">this</span> <span
  m="3306850">laser</span> <span m="3307120">light.</span> <span
  m="3307360">So</span> <span m="3309680">eventually,</span> <span
  m="3310450">they</span> <span m="3310660">will</span> <span
  m="3310800">bleach.</span> <span m="3312100">But</span> <span
  m="3313480">perhaps</span> <span m="3314410">some</span> <span
  m="3314600">of</span> <span m="3314670">them</span> <span
  m="3314900">have</span> <span m="3315510">survived</span> <span
  m="3316560">for</span> <span m="3316700">that</span> <span
  m="3316840">entire</span> <span m="3317220">1.2</span> <span
  m="3317510">seconds.</span> <span m="3317820">So</span> <span
  m="3317920">if</span> <span m="3318000">you</span> <span
  m="3318130">looked</span> <span m="3318420">at</span> <span
  m="3318500">it</span> <span m="3318880">after</span> <span
  m="3319140">this</span> <span m="3319260">bleaching</span> <span
  m="3319520">step,</span> <span m="3319750">it</span> <span
  m="3319820">would</span> <span m="3319930">still</span> <span
  m="3320260">be</span> <span m="3320450">fluorescent.</span> <span
  m="3329000">Maybe</span> <span m="3329220">another</span> <span
  m="3329610">30</span> <span m="3329840">seconds,</span> <span
  m="3330340">because--</span></p><p><span m="3356070">Do</span> <span
  m="3356180">you</span> <span m="3356250">need</span> <span
  m="3356420">more</span> <span m="3356570">time?</span> <span
  m="3363560">Let</span> <span m="3363840">me</span> <span
  m="3363940">see</span> <span m="3364870">where</span> <span
  m="3365090">we</span> <span m="3365230">are,</span> <span
  m="3365440">just</span> <span m="3365590">so</span> <span
  m="3365690">that</span> <span m="3365810">we</span> <span
  m="3365930">can</span> <span m="3366620">get</span> <span m="3366760">a</span>
  <span m="3366800">sense</span> <span m="3367180">of things.</span> <span
  m="3367330">Ready?</span> <span m="3367870">Three,</span> <span
  m="3368610">two,</span> <span m="3369420">one.</span> <span
  m="3372930">All</span> <span m="3373070">right.</span> <span
  m="3373460">Great.</span> <span m="3374000">We're</span> <span
  m="3374890">roughly</span> <span m="3375240">uniformly</span> <span
  m="3375770">distributed</span> <span m="3377060">between--</span> <span
  m="3378780">all</span> <span m="3378930">right.</span> <span
  m="3379100">Perfect.</span> <span m="3379440">So</span> <span
  m="3379770">this</span> <span m="3379940">is</span> <span
  m="3380080">an</span> <span m="3380200">opportunity</span> <span
  m="3380630">to</span> <span m="3380920">turn</span> <span
  m="3381200">to</span> <span m="3381240">your</span> <span
  m="3381340">neighbor</span> <span m="3381680">and</span> <span
  m="3381790">discuss.</span></p><p><span m="3383170">You</span> <span
  m="3383280">should,</span> <span m="3383630">even</span> <span
  m="3384010">with</span> <span m="3385620">back</span> <span
  m="3385870">of</span> <span m="3385930">the</span> <span
  m="3386000">envelope</span> <span m="3386450">calculations</span> <span
  m="3386970">in</span> <span m="3387070">your</span> <span
  m="3387400">head,</span> <span m="3387760">be</span> <span
  m="3387920">able</span> <span m="3388300">to</span> <span
  m="3388600">get</span> <span m="3388950">roughly</span> <span
  m="3389250">where</span> <span m="3389350">this.</span> <span
  m="3389610">But</span> <span m="3389740">you're</span> <span
  m="3389920">also</span> <span m="3390170">welcome,</span> <span
  m="3391130">if</span> <span m="3391190">you</span> <span
  m="3391300">want,</span> <span m="3391520">to</span> <span
  m="3391620">double</span> <span m="3391910">check.</span> <span
  m="3392560">Pull out</span> <span m="3392920">your</span> <span
  m="3393040">iPhone.</span> <span m="3393450">You</span> <span
  m="3393550">can</span> <span m="3393980">use</span> <span
  m="3394220">the</span> <span m="3394300">Google</span> <span
  m="3394600">calculator.</span> <span m="3395150">I</span> <span
  m="3395570">give</span> <span m="3395700">you</span> <span
  m="3395840">just</span> <span m="3396050">a</span> <span
  m="3396110">minute</span> <span m="3396330">or</span> <span
  m="3396440">two</span> <span m="3396600">to</span> <span
  m="3396740">turn</span> <span m="3397010">to</span> <span m="3397110">a</span>
  <span m="3397160">neighbor.</span> <span m="3397660">You</span> <span
  m="3397770">should</span> <span m="3397940">certainly</span> <span
  m="3398360">be</span> <span m="3398440">able</span> <span
  m="3398550">to</span> <span m="3398610">find</span> <span
  m="3398830">somebody</span> <span m="3399160">that</span> <span
  m="3399370">disagrees</span> <span m="3399950">with</span> <span
  m="3400020">you.</span></p><p><span m="3401316">[STUDENT
  CHATTER]</span></p><p><span m="3487550">PROFESSOR: Why</span> <span
  m="3487680">don't</span> <span m="3487940">we</span> <span
  m="3487990">go</span> <span m="3488130">ahead</span> <span
  m="3488290">and</span> <span m="3488410">reconvene?</span> <span
  m="3489060">It's</span> <span m="3489840">OK</span> <span
  m="3490230">if</span> <span m="3490380">you're</span> <span
  m="3490520">still</span> <span m="3490940">kind</span> <span
  m="3491070">of</span> <span m="3491160">confused</span> <span
  m="3491550">by</span> <span m="3491660">this.</span> <span
  m="3492330">I've</span> <span m="3492540">partly</span> <span
  m="3492930">doing</span> <span m="3493130">this</span> <span
  m="3493350">to</span> <span m="3493570">encourage</span> <span
  m="3493940">you</span> <span m="3494090">to</span> <span
  m="3494630">review</span> <span m="3495160">your</span> <span
  m="3495440">probability</span> <span m="3495790">distributions,</span> <span
  m="3496360">because</span> <span m="3496600">we</span> <span
  m="3496780">are</span> <span m="3496870">going</span> <span
  m="3497070">to</span> <span m="3497150">dive</span> <span
  m="3497630">into</span> <span m="3497940">them</span> <span
  m="3498850">rather</span> <span m="3499320">strongly</span> <span
  m="3499860">over</span> <span m="3500010">the</span> <span
  m="3500110">next</span> <span m="3500370">week.</span> <span
  m="3501100">And</span> <span m="3501230">so</span> <span
  m="3501350">it's</span> <span m="3501500">good--</span> <span
  m="3501760">if</span> <span m="3502860">you</span> <span
  m="3503000">can't</span> <span m="3503200">quite</span> <span
  m="3503330">remember</span> <span m="3503690">how</span> <span
  m="3503840">these are</span> <span m="3504030">going</span> <span
  m="3504130">to</span> <span m="3504200">work,</span> <span
  m="3504550">it's</span> <span m="3504760">good</span> <span
  m="3504910">to</span> <span m="3504990">start</span> <span
  m="3505280">reviewing</span> <span m="3505640">now.</span></p><p><span
  m="3506310">All right.</span> <span m="3506790">Can</span> <span m="3506920">I
  just</span> <span m="3506990">see</span> <span m="3507150">where</span> <span
  m="3507270">we</span> <span m="3507370">are?</span> <span
  m="3507530">Ready?</span> <span m="3508480">Three,</span> <span
  m="3509120">two,</span> <span m="3509720">one.</span> <span
  m="3511360">OK.</span> <span m="3511790">So</span> <span m="3511970">we</span>
  <span m="3512080">have</span> <span m="3512300">some</span> <span
  m="3512490">B's</span> <span m="3512820">and</span> <span
  m="3512960">C's.</span> <span m="3515380">All</span> <span
  m="3515630">right.</span> <span m="3517090">I'm</span> <span
  m="3517350">pretty</span> <span m="3517540">confident</span> <span
  m="3517980">it's B,</span> <span m="3518190">although</span> <span
  m="3518340">I'm</span> <span m="3518490">a</span> <span
  m="3518510">little</span> <span m="3518620">bit</span> <span
  m="3518720">worried</span> <span m="3519040">now.</span> <span
  m="3521010">All</span> <span m="3521100">right,</span> <span
  m="3521240">so</span> <span m="3521330">what's</span> <span
  m="3521920">going</span> <span m="3522000">to</span> <span
  m="3522040">happen?</span> <span m="3522420">So</span> <span
  m="3523690">basically,</span> <span m="3524380">the</span> <span
  m="3524510">probability</span> <span m="3525005">that this</span> <span
  m="3525500">thing</span> <span m="3525680">survives</span> <span
  m="3526230">as</span> <span m="3526360">a</span> <span
  m="3526420">function</span> <span m="3526750">of</span> <span
  m="3526840">time</span> <span m="3528470">is</span> <span
  m="3528810">the</span> <span m="3528950">same</span> <span
  m="3529610">as,</span> <span m="3530430">essentially,</span> <span
  m="3531240">the</span> <span m="3531370">decay</span> <span
  m="3531870">and</span> <span m="3531980">the</span> <span
  m="3532090">overall</span> <span m="3532470">intensity</span> <span
  m="3533790">fluorescence</span> <span m="3534280">for</span> <span
  m="3534370">many</span> <span m="3534560">molecules over</span> <span
  m="3534980">time.</span></p><p><span m="3536090">Because</span> <span
  m="3536260">this</span> <span m="3536620">plot</span> <span
  m="3536880">here</span> <span m="3537030">is</span> <span
  m="3537120">really</span> <span m="3537340">a</span> <span
  m="3537400">plot</span> <span m="3537630">of</span> <span
  m="3537720">the</span> <span m="3537790">fraction</span> <span
  m="3539240">of</span> <span m="3539420">the</span> <span
  m="3539500">molecules</span> <span m="3540250">that have</span> <span
  m="3540320">survived</span> <span m="3540820">as</span> <span
  m="3540910">a</span> <span m="3540960">function</span> <span
  m="3541240">of</span> <span m="3541300">time.</span> <span
  m="3542380">Right.</span> <span m="3543510">So</span> <span
  m="3543670">indeed,</span> <span m="3544340">the</span> <span
  m="3544610">probability</span> <span m="3545370">of</span> <span
  m="3545440">survival</span> <span m="3547400">for</span> <span
  m="3547610">an</span> <span m="3547680">exponential</span> <span
  m="3548210">process</span> <span m="3548590">like</span> <span
  m="3548740">this</span> <span m="3548940">is</span> <span m="3549040">a</span>
  <span m="3549090">function</span> <span m="3549380">of</span> <span
  m="3549460">time,</span> <span m="3549720">t,</span> <span
  m="3550660">is</span> <span m="3550750">going</span> <span
  m="3550860">to</span> <span m="3550900">be</span> <span
  m="3551020">equal</span> <span m="3551240">to</span> <span
  m="3552020">e</span> <span m="3553040">to</span> <span m="3553200">the</span>
  <span m="3554040">minus</span> <span m="3555090">t</span> <span
  m="3555610">over</span> <span m="3555940">some</span> <span
  m="3556550">constant</span> <span m="3557340">[INAUDIBLE].</span></p><p><span
  m="3560720">And</span> <span m="3561530">what</span> <span
  m="3561760">is</span> <span m="3561920">t</span> <span m="3562260">in</span>
  <span m="3562380">tau?</span> <span m="3562780">Well,</span> <span
  m="3564600">t</span> <span m="3565850">is</span> <span m="3566260">this</span>
  <span m="3566500">time</span> <span m="3566780">1.2</span> <span
  m="3567360">seconds.</span> <span m="3570660">So</span> <span
  m="3570920">we</span> <span m="3571000">have</span> <span m="3571560">e</span>
  <span m="3571990">to</span> <span m="3572110">the--</span> <span
  m="3572780">we'll write</span> <span m="3573210">it like an</span> <span
  m="3573610">exponent.</span> <span m="3574610">So</span> <span
  m="3574650">now</span> <span m="3574840">we</span> <span
  m="3574920">have</span> <span m="3575100">a</span> <span
  m="3575180">minus.</span> <span m="3575720">We</span> <span
  m="3575810">have</span> <span m="3576100">1.2</span> <span
  m="3577470">seconds</span> <span m="3578600">divided</span> <span
  m="3579060">by</span> <span m="3579480">the</span> <span
  m="3579800">lifetime</span> <span m="3580480">in</span> <span
  m="3580550">this</span> <span m="3580690">condition,</span> <span
  m="3581060">we're</span> <span m="3581160">told</span> <span
  m="3581340">is</span> <span m="3581430">250</span> <span
  m="3582000">milliseconds.</span> <span m="3582840">So</span> <span
  m="3583010">we can</span> <span m="3583140">write</span> <span
  m="3583480">0.25</span> <span m="3587000">seconds.</span> <span
  m="3589880">So</span> <span m="3590000">this</span> <span
  m="3590150">is</span> <span m="3590930">approximately</span> <span
  m="3591810">e</span> <span m="3592040">to</span> <span m="3592130">the</span>
  <span m="3592210">minus</span> <span m="3592540">5,</span> <span
  m="3596150">which</span> <span m="3596590">indeed,</span> <span
  m="3597100">is</span> <span m="3597480">equal</span> <span
  m="3597710">to</span> <span m="3598320">what</span> <span m="3598510">I</span>
  <span m="3598650">thought</span> <span m="3598950">is</span> <span
  m="3599300">0.8%.</span> <span m="3602850">So</span> <span
  m="3603100">it's</span> <span m="3603870">around</span> <span
  m="3604160">1%,</span></p><p><span m="3609240">Are</span> <span
  m="3609350">there</span> <span m="3609450">any</span> <span
  m="3609530">questions</span> <span m="3609950">about</span> <span
  m="3610180">this</span> <span m="3610460">logic</span> <span
  m="3610930">or</span> <span m="3610990">this</span> <span
  m="3611180">calculation?</span> <span m="3612670">Yes?</span></p><p><span
  m="3615470">AUDIENCE: [INAUDIBLE].</span></p><p><span m="3620300">PROFESSOR:
  Oh,</span> <span m="3620760">no,</span> <span m="3621115">no.</span> <span
  m="3621470">Sorry,</span> <span m="3621710">sorry.</span> <span
  m="3621890">No,</span> <span m="3622010">no.</span> <span
  m="3622640">Bleaching,</span> <span m="3623360">this</span> <span
  m="3623590">is</span> <span m="3623720">a</span> <span
  m="3623810">result</span> <span m="3626180">of</span> <span
  m="3626600">chemical</span> <span m="3628030">inactivation</span> <span
  m="3629200">of</span> <span m="3629550">the</span> <span
  m="3630120">fluorescent</span> <span m="3630470">protein</span> <span
  m="3631160">that</span> <span m="3631330">is</span> <span
  m="3631450">kind</span> <span m="3631580">of</span> <span
  m="3631640">induced</span> <span m="3632210">by</span> <span
  m="3633880">being</span> <span m="3634310">in</span> <span
  m="3634440">this</span> <span m="3634590">excited</span> <span
  m="3635060">state.</span> <span m="3635900">So</span> <span
  m="3635980">the</span> <span m="3636100">idea</span> <span
  m="3636340">is</span> <span m="3636450">that</span> <span
  m="3636940">if</span> <span m="3637670">you're</span> <span
  m="3637820">shining</span> <span m="3638170">light</span> <span
  m="3638460">on</span> <span m="3638640">this</span> <span
  m="3638820">fluorescent</span> <span m="3639100">protein,</span> <span
  m="3639810">then</span> <span m="3640800">it's</span> <span
  m="3641000">going</span> <span m="3641230">to</span> <span
  m="3641660">bleach</span> <span m="3644620">at</span> <span
  m="3644750">a</span> <span m="3644790">rate</span> <span
  m="3645010">that</span> <span m="3645530">is</span> <span
  m="3645750">kind</span> <span m="3645890">of--</span> <span
  m="3647630">distribution</span> <span m="3648160">of</span> <span
  m="3648370">say,</span> <span m="3648980">lifetime's</span> <span
  m="3649430">going</span> <span m="3649530">to</span> <span
  m="3649570">be</span> <span m="3649720">exponential</span> <span
  m="3650760">with</span> <span m="3651100">a</span> <span
  m="3651620">time</span> <span m="3651920">constant</span> <span
  m="3652250">of</span> <span m="3652340">250</span> <span
  m="3652800">milliseconds.</span></p><p><span m="3653430">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="3657620">PROFESSOR: That's</span> <span
  m="3657970">right.</span> <span m="3658300">That's</span> <span
  m="3658470">right.</span> <span m="3658890">But</span> <span
  m="3659030">it's</span> <span m="3659410">a</span> <span
  m="3659480">one-step</span> <span m="3660080">process</span> <span
  m="3660520">though.</span> <span m="3661060">That's</span> <span
  m="3661250">what</span> <span m="3661370">we</span> <span
  m="3661440">see</span> <span m="3661610">here.</span> <span
  m="3661890">It's</span> <span m="3662070">not</span> <span
  m="3662380">that</span> <span m="3663110">that</span> <span
  m="3663370">individual</span> <span m="3663800">protein</span> <span
  m="3664160">is</span> <span m="3664260">getting</span> <span
  m="3664470">worse</span> <span m="3664690">and</span> <span
  m="3664780">worse</span> <span m="3665060">as</span> <span
  m="3665200">it's</span> <span m="3665580">being</span> <span
  m="3665750">used.</span> <span m="3666960">But</span> <span
  m="3667110">it's</span> <span m="3667240">really</span> <span
  m="3667470">just</span> <span m="3667680">that</span> <span
  m="3667990">there's</span> <span m="3668420">some</span> <span
  m="3669480">rate</span> <span m="3669890">that</span> <span
  m="3670060">it--</span> <span m="3670710">some</span> <span
  m="3670850">probability,</span> <span m="3671340">of course,</span> <span
  m="3671590">time</span> <span m="3671760">that it</span> <span
  m="3671900">cycles</span> <span m="3672300">that</span> <span
  m="3672470">it</span> <span m="3672630">is,</span> <span
  m="3674340">we'll</span> <span m="3674480">say</span> <span m="3674690">for
  now,</span> <span m="3674920">irreversibly</span> <span
  m="3675870">inactivated.</span></p><p><span m="3679460">There</span> <span
  m="3679610">are</span> <span m="3679720">also</span> <span
  m="3680100">all</span> <span m="3680490">these</span> <span
  m="3680930">so-called</span> <span m="3681500">blinking</span> <span
  m="3681740">events,</span> <span m="3682620">where</span> <span
  m="3684770">fluorescent</span> <span m="3685160">molecules</span> <span
  m="3685610">can</span> <span m="3686470">kind</span> <span
  m="3686610">of</span> <span m="3686710">temporarily</span> <span
  m="3687360">go</span> <span m="3687570">into</span> <span m="3688390">a</span>
  <span m="3688520">non-fluorescent</span> <span m="3688910">state,</span> <span
  m="3689270">and</span> <span m="3689560">then</span> <span
  m="3689650">they</span> <span m="3689750">return,</span> <span
  m="3690065">but</span> <span m="3690380">right</span> <span
  m="3690570">now,</span> <span m="3690800">we're</span> <span
  m="3691260">talking about these</span> <span m="3691980">irreversible</span>
  <span m="3693170">steps.</span> <span m="3696890">Are</span> <span
  m="3696930">there</span> <span m="3697040">any</span> <span
  m="3697140">other</span> <span m="3697260">questions</span> <span
  m="3697580">about</span> <span m="3698360">what</span> <span
  m="3699130">I</span> <span m="3699160">mean</span> <span m="3699310">by</span>
  <span m="3699390">bleaching,</span> <span m="3699830">or</span> <span
  m="3700330">this</span> <span m="3701190">calculation?</span></p><p><span
  m="3707054">AUDIENCE: [INAUDIBLE].</span></p><p><span m="3708320">PROFESSOR:
  So</span> <span m="3708790">my</span> <span m="3708870">claim</span> <span
  m="3709220">is</span> <span m="3709310">that</span> <span
  m="3709510">0.8%</span> <span m="3711920">is</span> <span
  m="3712080">very</span> <span m="3712300">close,</span> <span
  m="3712770">is</span> <span m="3712890">approximately</span> <span
  m="3714170">1%.</span></p><p><span m="3714842">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="3718150">PROFESSOR: Yes,</span> <span
  m="3718890">sorry.</span> <span m="3721240">I</span> <span
  m="3721460">did</span> <span m="3721640">something</span> <span
  m="3721870">funny</span> <span m="3722350">here.</span> <span
  m="3723040">Yeah, yeah.</span> <span m="3729950">So</span> <span
  m="3731470">it's</span> <span m="3731630">useful</span> <span m="3732010">to
  just</span> <span m="3732210">kind</span> <span m="3732340">of</span> <span
  m="3732400">go</span> <span m="3732530">through</span> <span
  m="3732650">these</span> <span m="3732780">calculations.</span> <span
  m="3733240">And</span> <span m="3733340">actually,</span> <span
  m="3733550">I</span> <span m="3733570">think</span> <span
  m="3733710">that</span> <span m="3734090">in</span> <span
  m="3734260">going</span> <span m="3734510">through</span> <span
  m="3734640">them,</span> <span m="3735030">you</span> <span
  m="3735150">kind</span> <span m="3735300">of</span> <span
  m="3735390">really</span> <span m="3735630">get</span> <span
  m="3735830">to</span> <span m="3735970">get</span> <span m="3736080">a</span>
  <span m="3736120">sense</span> <span m="3736340">of</span> <span
  m="3736540">why</span> <span m="3736820">they</span> <span
  m="3736940">design</span> <span m="3737300">their</span> <span
  m="3737430">experiments</span> <span m="3737780">the</span> <span
  m="3737910">way they</span> <span m="3738020">did and</span> <span
  m="3738320">everything.</span></p><p><span m="3740080">So</span> <span
  m="3740200">the</span> <span m="3740290">idea</span> <span
  m="3740550">is</span> <span m="3740680">that</span> <span
  m="3741950">what</span> <span m="3742100">they're</span> <span
  m="3742220">doing</span> <span m="3742490">here</span> <span
  m="3742990">every</span> <span m="3743280">three</span> <span
  m="3743490">minutes,</span> <span m="3745000">they're</span> <span
  m="3745180">looking</span> <span m="3745500">at</span> <span
  m="3745560">the</span> <span m="3745630">cells,</span> <span m="3746000">and
  they're</span> <span m="3746160">asking,</span> <span m="3747890">is</span>
  <span m="3748190">there</span> <span m="3748420">are</span> <span
  m="3748570">a</span> <span m="3748650">protein,</span> <span
  m="3749280">or</span> <span m="3749490">maybe</span> <span
  m="3749700">more</span> <span m="3749890">than</span> <span
  m="3750010">one</span> <span m="3750270">here?</span> <span
  m="3751160">And</span> <span m="3751590">then</span> <span
  m="3752340">they</span> <span m="3752460">try</span> <span
  m="3752630">to</span> <span m="3752720">kill</span> <span
  m="3754140">all</span> <span m="3754400">those</span> <span
  m="3754800">fluorescent</span> <span m="3755210">proteins.</span> <span
  m="3755910">And</span> <span m="3757310">then</span> <span
  m="3757400">they</span> <span m="3757520">look</span> <span
  m="3757750">again</span> <span m="3758050">three</span> <span
  m="3758240">minutes</span> <span m="3758470">later.</span> <span
  m="3759170">Are</span> <span m="3759670">there</span> <span
  m="3759920">any</span> <span m="3760480">new</span> <span
  m="3760810">proteins</span> <span m="3761250">that</span> <span
  m="3762090">were</span> <span m="3762190">made.</span> <span
  m="3763210">Yes?</span></p><p><span m="3763860">AUDIENCE: [INAUDIBLE].</span>
  <span m="3765979">You</span> <span m="3766452">can't</span> <span
  m="3766925">see</span> <span m="3767398">it</span> <span
  m="3767871">[INAUDIBLE].</span></p><p><span m="3769770">PROFESSOR:
  That's</span> <span m="3769900">right.</span> <span m="3770230">You</span>
  <span m="3770380">don't--</span></p><p><span m="3770610">AUDIENCE:</span>
  <span m="3770852">Do you</span> <span m="3771094">calibrate</span> <span
  m="3771578">the intensity</span> <span
  m="3772062">[INAUDIBLE].</span></p><p><span m="3774000">PROFESSOR: So</span>
  <span m="3774130">what</span> <span m="3774270">they're</span> <span
  m="3774590">really</span> <span m="3774800">doing</span> <span m="3774980">is
  they're</span> <span m="3775060">asking,</span> <span m="3775360">how</span>
  <span m="3775590">many</span> <span m="3775810">spots</span> <span
  m="3776480">do</span> <span m="3776630">I</span> <span m="3776730">see?</span>
  <span m="3780600">So</span> <span m="3780870">in</span> <span
  m="3781030">that</span> <span m="3781220">experiment,</span> <span
  m="3781720">they</span> <span m="3781740">don't</span> <span
  m="3782040">know</span> <span m="3782340">that</span> <span
  m="3782510">it</span> <span m="3783370">was</span> <span m="3783450">a</span>
  <span m="3783500">single</span> <span m="3783750">molecule.</span> <span
  m="3785330">Although</span> <span m="3785690">I</span> <span
  m="3785910">think</span> <span m="3786250">that in</span> <span
  m="3786430">many--</span></p><p><span m="3786700">AUDIENCE: Then</span> <span
  m="3786850">why</span> <span m="3787316">do</span> <span m="3787782">they
  talk</span> <span m="3788248">about this</span> <span
  m="3788714">[INAUDIBLE]?</span></p><p><span m="3791510">PROFESSOR:
  Well,</span> <span m="3791800">that's</span> <span m="3792090">how</span>
  <span m="3792190">they</span> <span m="3792340">checked</span> <span
  m="3792890">to</span> <span m="3792960">make</span> <span
  m="3793110">sure</span> <span m="3793340">it was</span> <span
  m="3793430">a</span> <span m="3793470">single</span> <span
  m="3793690">molecule.</span> <span m="3794510">Although</span> <span
  m="3795010">I</span> <span m="3795110">think</span> <span
  m="3795250">that</span> <span m="3795370">actually,</span> <span
  m="3795800">in</span> <span m="3795920">principle</span> <span
  m="3796320">here,</span> <span m="3796520">I</span> <span
  m="3796560">think</span> <span m="3796730">they</span> <span
  m="3796790">actually</span> <span m="3797110">maybe</span> <span
  m="3797490">do</span> <span m="3798110">continue</span> <span
  m="3798530">to</span> <span m="3798650">look</span> <span
  m="3798870">at</span> <span m="3798960">them.</span> <span
  m="3800310">That's</span> <span m="3800500">not</span> <span
  m="3800670">part</span> <span m="3800810">of</span> <span
  m="3800850">their</span> <span m="3800950">analysis.</span> <span
  m="3801970">So</span> <span m="3802080">for</span> <span
  m="3802240">many</span> <span m="3802460">of the case,</span> <span
  m="3802930">they</span> <span m="3803030">actually</span> <span
  m="3803180">do</span> <span m="3803480">see</span> <span
  m="3804250">that</span> <span m="3804400">this</span> <span
  m="3804540">molecule</span> <span m="3804990">is</span> <span
  m="3805090">here,</span> <span m="3805310">and</span> <span
  m="3805380">then</span> <span m="3805470">it</span> <span
  m="3805520">bleaches,</span> <span m="3805800">and</span> <span
  m="3806120">a</span> <span m="3806190">different</span> <span
  m="3806470">molecule</span> <span m="3806990">was</span> <span
  m="3807150">here,</span> <span m="3807930">and it</span> <span
  m="3808090">bleached.</span></p><p><span m="3811120">But</span> <span
  m="3811260">what they're</span> <span m="3811410">really</span> <span
  m="3811660">asking</span> <span m="3812010">is</span> <span
  m="3812140">at</span> <span m="3812220">the</span> <span
  m="3812280">beginning,</span> <span m="3814110">how</span> <span
  m="3814260">many</span> <span m="3815040">fluorescent</span> <span
  m="3815340">proteins</span> <span m="3815770">did I</span> <span
  m="3815840">see?</span> <span m="3817830">And</span> <span
  m="3817960">I</span> <span m="3817990">think</span> <span
  m="3818130">the</span> <span m="3818200">camera</span> <span
  m="3818500">actually</span> <span m="3818730">maybe</span> <span
  m="3818940">was</span> <span m="3819190">collecting</span> <span
  m="3819710">still</span> <span m="3820070">during</span> <span
  m="3820260">that</span> <span m="3820420">bleaching</span> <span
  m="3820730">step.</span> <span m="3820940">It's</span> <span
  m="3821040">just</span> <span m="3821220">that it</span> <span
  m="3821480">wasn't</span> <span m="3821810">kind</span> <span
  m="3821960">of</span> <span m="3822600">part</span> <span m="3822830">of
  it.</span> <span m="3823050">Their</span> <span m="3823200">analysis</span>
  <span m="3823780">is</span> <span m="3823900">in</span> <span
  m="3823980">some</span> <span m="3824130">ways</span> <span
  m="3824270">really</span> <span m="3824500">just</span> <span
  m="3824860">based</span> <span m="3825100">on</span> <span
  m="3825300">this.</span> <span m="3826890">Or</span> <span m="3827290">in
  other</span> <span m="3827640">experiments,</span> <span m="3828030">you can
  go</span> <span m="3828150">look to</span> <span m="3828430">confirm</span>
  <span m="3828890">that it</span> <span m="3829120">bleaches</span> <span
  m="3830070">single</span> <span m="3830340">step</span> <span
  m="3830660">here.</span></p><p><span m="3835610">OK.</span> <span
  m="3836580">So</span> <span m="3836680">we</span> <span
  m="3837000">spent</span> <span m="3837180">a long time</span> <span
  m="3837490">talking</span> <span m="3837860">like</span> <span
  m="3838040">the</span> <span m="3838370">general</span> <span
  m="3838750">idea</span> <span m="3839140">of</span> <span
  m="3839230">how</span> <span m="3839320">to</span> <span
  m="3839400">design</span> <span m="3839710">these</span> <span
  m="3839860">experiments</span> <span m="3840450">and</span> <span
  m="3840550">so</span> <span m="3840560">forth.</span> <span
  m="3842680">I'm</span> <span m="3842730">not</span> <span
  m="3842890">going</span> <span m="3842970">to</span> <span
  m="3843010">say</span> <span m="3843160">very</span> <span
  m="3843380">much</span> <span m="3843610">about</span> <span
  m="3844350">the</span> <span m="3844500">design</span> <span
  m="3844900">of</span> <span m="3844960">the</span> <span
  m="3845040">experiments,</span> <span m="3845710">except</span> <span
  m="3846030">that</span> <span m="3847600">they</span> <span
  m="3848400">did</span> <span m="3848690">a</span> <span
  m="3848760">number</span> <span m="3849010">things.</span> <span
  m="3849560">They</span> <span m="3850140">used</span> <span
  m="3850450">this</span> <span m="3850660">Venus</span> <span
  m="3851120">protein</span> <span m="3851520">that</span> <span
  m="3851640">has</span> <span m="3852760">a</span> <span
  m="3852880">faster</span> <span m="3853220">maturation</span> <span
  m="3853860">than</span> <span m="3854630">traditional</span> <span
  m="3855070">GFP.</span></p><p><span m="3857320">They</span> <span
  m="3857470">also</span> <span m="3859000">targeted</span> <span
  m="3859440">it</span> <span m="3859750">to the</span> <span
  m="3859820">membrane,</span> <span m="3860610">not</span> <span
  m="3860910">by</span> <span m="3861040">putting</span> <span
  m="3861540">Venus</span> <span m="3862030">into</span> <span
  m="3862200">the</span> <span m="3862290">membrane--</span> <span
  m="3863200">that</span> <span m="3863500">would</span> <span
  m="3864450">be</span> <span m="3864580">tricky,</span> <span
  m="3864930">I</span> <span m="3864960">think--</span> <span
  m="3865400">but</span> <span m="3865750">rather by</span> <span
  m="3866480">attaching</span> <span m="3867250">the</span> <span
  m="3867360">Venus</span> <span m="3867640">protein</span> <span
  m="3867940">to</span> <span m="3869030">another</span> <span
  m="3869990">protein</span> <span m="3870360">that</span> <span
  m="3870560">is</span> <span m="3871110">put</span> <span m="3871340">in</span>
  <span m="3871450">the</span> <span m="3871500">membrane.</span> <span
  m="3872080">And</span> <span m="3872290">indeed,</span> <span
  m="3872520">this</span> <span m="3872670">TSR</span> <span
  m="3873630">membrane</span> <span m="3874040">protein,</span> <span
  m="3874270">we're</span> <span m="3874410">going</span> <span
  m="3874490">to</span> <span m="3874530">be</span> <span
  m="3874600">talking</span> <span m="3874930">about</span> <span
  m="3875170">it</span> <span m="3875540">in</span> <span m="3875640">a</span>
  <span m="3875690">couple</span> <span m="3875920">of</span> <span
  m="3875990">weeks</span> <span m="3876520">when</span> <span
  m="3876680">we're</span> <span m="3876780">discussing</span> <span
  m="3877600">the</span> <span m="3877720">chemotaxis</span> <span
  m="3878790">network</span> <span m="3879510">that</span> <span
  m="3879720">is</span> <span m="3880180">in</span> <span m="3880660">E.
  coli</span> <span m="3880800">for how</span> <span m="3880950">E.</span> <span
  m="3881250">coli</span> <span m="3881330">find</span> <span
  m="3881660">food</span> <span m="3881980">and</span> <span
  m="3882080">so</span> <span m="3882200">forth.</span></p><p><span
  m="3884030">I</span> <span m="3884280">think</span> <span
  m="3884440">that</span> <span m="3884650">in</span> <span
  m="3884960">reading</span> <span m="3885200">these papers,</span> <span
  m="3885860">it's</span> <span m="3886360">interesting.</span> <span
  m="3886820">Sometimes,</span> <span m="3888070">authors</span> <span
  m="3888500">make</span> <span m="3888740">kind</span> <span
  m="3888860">of</span> <span m="3888920">a</span> <span m="3888970">side</span>
  <span m="3889340">comment</span> <span m="3889720">that</span> <span
  m="3889830">just</span> <span m="3890040">illuminates</span> <span
  m="3890660">kind</span> <span m="3890800">of</span> <span
  m="3891160">how</span> <span m="3891430">difficult</span> <span
  m="3891870">everything</span> <span m="3892120">was.</span> <span
  m="3893000">And</span> <span m="3893100">I</span> <span
  m="3893140">think</span> <span m="3893270">that</span> <span
  m="3893380">they</span> <span m="3893490">had</span> <span
  m="3893910">a</span> <span m="3894010">nice</span> <span
  m="3894260">one</span> <span m="3894400">in</span> <span
  m="3894460">here,</span> <span m="3894650">where</span> <span
  m="3894710">they</span> <span m="3894800">said</span> <span
  m="3896410">that</span> <span m="3896690">they</span> <span
  m="3896970">were</span> <span m="3897060">checking</span> <span
  m="3897360">with</span> <span m="3897450">TSR</span> <span
  m="3898080">to</span> <span m="3898190">make</span> <span
  m="3898360">sure</span> <span m="3898560">that</span> <span
  m="3899070">the</span> <span m="3900110">behavior</span> <span
  m="3901140">of</span> <span m="3901320">the</span> <span
  m="3901490">TSR</span> <span m="3901880">Venus</span> <span
  m="3902410">and</span> <span m="3902520">just</span> <span
  m="3902720">Venus</span> <span m="3904130">were</span> <span
  m="3904300">similar</span> <span m="3904720">in terms</span> <span
  m="3904890">of</span> <span m="3904950">the</span> <span
  m="3905010">amount</span> <span m="3905210">of</span> <span
  m="3905280">fluorescence.</span></p><p><span m="3906670">And</span> <span
  m="3906760">then,</span> <span m="3907730">they</span> <span
  m="3907800">say,</span> <span m="3908090">no</span> <span
  m="3908410">notable</span> <span m="3908780">difference</span> <span
  m="3909120">was</span> <span m="3909250">observed,</span> <span
  m="3910230">indicating</span> <span m="3910690">that</span> <span
  m="3910800">the</span> <span m="3910860">introduction</span> <span
  m="3911350">of</span> <span m="3911400">the</span> <span
  m="3911480">TSR</span> <span m="3911810">sequence</span> <span
  m="3912190">does</span> <span m="3912370">not</span> <span
  m="3912640">change</span> <span m="3912910">the</span> <span
  m="3913000">yield</span> <span m="3913390">of</span> <span
  m="3913570">Venus</span> <span m="3913860">production,</span> <span
  m="3915890">which</span> <span m="3916030">is</span> <span
  m="3916150">not</span> <span m="3916390">the</span> <span
  m="3916460">case</span> <span m="3916860">for</span> <span
  m="3917040">many</span> <span m="3917350">other</span> <span
  m="3917740">membrane</span> <span m="3918170">targeting</span> <span
  m="3918560">sequences</span> <span m="3919100">that</span> <span
  m="3919210">we</span> <span m="3919320">tested.</span></p><p><span
  m="3920060">So</span> <span m="3920180">this</span> <span
  m="3920330">is</span> <span m="3920450">like,</span> <span
  m="3921090">a</span> <span m="3921240">little</span> <span
  m="3921890">add-on</span> <span m="3922150">onto</span> <span
  m="3922470">the</span> <span m="3922580">sentence</span> <span
  m="3923020">that</span> <span m="3923150">is</span> <span
  m="3923290">like,</span> <span m="3924130">I</span> <span
  m="3924260">mean,</span> <span m="3925610">six</span> <span
  m="3925880">months</span> <span m="3926160">of</span> <span
  m="3926240">somebody's</span> <span m="3926980">life</span> <span
  m="3927480">was</span> <span m="3927990">dedicated</span> <span
  m="3928400">to</span> <span m="3928930">trying--</span> <span
  m="3929450">you</span> <span m="3929590">can</span> <span
  m="3929690">just</span> <span m="3929870">imagine</span> <span
  m="3930440">all</span> <span m="3930570">the</span> <span
  m="3931370">over</span> <span m="3931590">coffee,</span> <span
  m="3932100">their</span> <span m="3932250">frustration.</span> <span
  m="3933190">They</span> <span m="3933320">tried</span> <span m="3933670">all
  of</span> <span m="3934020">these</span> <span m="3934220">different</span>
  <span m="3934510">things,</span> <span m="3934940">and</span> <span
  m="3935020">they</span> <span m="3935130">always</span> <span
  m="3935430">got--</span> <span m="3936590">and</span> <span
  m="3937310">for</span> <span m="3937470">an</span> <span
  m="3937560">awful</span> <span m="3937810">lot</span> <span
  m="3938000">of</span> <span m="3938050">these</span> <span
  m="3938290">things,</span> <span m="3939100">I</span> <span
  m="3939280">would</span> <span m="3939410">have</span> <span
  m="3939490">still</span> <span m="3939800">been</span> <span
  m="3940820">very</span> <span m="3941090">much</span> <span
  m="3941630">interested</span> <span m="3942120">in</span> <span
  m="3942240">the</span> <span m="3942330">study,</span> <span
  m="3942860">even</span> <span m="3943160">if</span> <span
  m="3944380">the</span> <span m="3945300">addition of</span> <span
  m="3945680">TSR</span> <span m="3946060">did</span> <span
  m="3946380">change</span> <span m="3946870">the</span> <span
  m="3947010">kinetics.</span> <span m="3948390">Because</span> <span
  m="3948500">I</span> <span m="3948550">think</span> <span
  m="3948710">that</span> <span m="3949320">still</span> <span
  m="3949660">is</span> <span m="3949720">very</span> <span
  m="3949940">interesting.</span></p><p><span m="3950050">But</span> <span
  m="3950140">they</span> <span m="3950270">really</span> <span
  m="3950510">wanted</span> <span m="3950800">this</span> <span
  m="3950960">to</span> <span m="3951080">be</span> <span
  m="3951900">just</span> <span m="3952460">airtight,</span> <span
  m="3952890">or</span> <span m="3952940">maybe</span> <span
  m="3953090">the</span> <span m="3953190">referees</span> <span
  m="3953680">need</span> <span m="3953830">to</span> <span
  m="3953880">be--</span> <span m="3953970">I don't know.</span> <span
  m="3955030">But</span> <span m="3955420">you</span> <span
  m="3955590">can</span> <span m="3955890">tell</span> <span m="3956080">that
  they</span> <span m="3956310">just</span> <span m="3956460">went</span> <span
  m="3956570">to</span> <span m="3956630">a</span> <span m="3956690">lot</span>
  <span m="3956880">of</span> <span m="3956930">work</span> <span
  m="3957090">to</span> <span m="3957170">try</span> <span m="3957360">to</span>
  <span m="3957580">find</span> <span m="3957980">the</span> <span
  m="3958060">thing</span> <span m="3958350">where</span> <span
  m="3958750">everything</span> <span m="3961030">would</span> <span
  m="3961150">be</span> <span m="3961230">just</span> <span
  m="3961400">right.</span> <span m="3966560">Now,</span> <span
  m="3967110">once</span> <span m="3967680">they</span> <span
  m="3967780">kind</span> <span m="3967910">of</span> <span
  m="3967970">described</span> <span m="3968280">their</span> <span
  m="3968380">setup,</span> <span m="3970610">they</span> <span
  m="3970680">had</span> <span m="3970810">this</span> <span
  m="3970940">wonderful</span> <span m="3971750">paragraph,</span> <span
  m="3972160">I</span> <span m="3972270">think.</span> <span
  m="3975020">They</span> <span m="3975100">say,</span> <span
  m="3975500">oh,</span> <span m="3975650">these</span> <span
  m="3975970">proteins,</span> <span m="3976270">they're</span> <span
  m="3976700">generating</span> <span m="3976980">bursts,</span> <span
  m="3977900">and</span> <span m="3978440">the</span> <span
  m="3978630">number</span> <span m="3978990">in</span> <span
  m="3979050">the</span> <span m="3979130">bursts</span> <span
  m="3979500">varies,</span> <span m="3980320">and</span> <span
  m="3980430">there's</span> <span m="3980510">spread,</span> <span
  m="3980920">and</span> <span m="3981000">so</span> <span
  m="3981100">forth.</span></p><p><span m="3981320">And</span> <span
  m="3981410">they</span> <span m="3982400">very</span> <span
  m="3982590">nicely</span> <span m="3982860">tell</span> <span
  m="3983040">us,</span> <span m="3984130">with</span> <span
  m="3984340">this</span> <span m="3984490">data,</span> <span
  m="3984740">we</span> <span m="3984830">can</span> <span
  m="3984940">ask</span> <span m="3985140">four</span> <span
  m="3985360">questions.</span> <span m="3987510">And</span> <span
  m="3987820">they</span> <span m="3987930">say,</span> <span
  m="3988100">do</span> <span m="3988320">these</span> <span
  m="3988580">gene</span> <span m="3988760">expression</span> <span
  m="3989250">bursts</span> <span m="3989700">occur</span> <span
  m="3989980">randomly</span> <span m="3990400">in time?</span> <span
  m="3991135">That's</span> <span m="3991580">going to</span> <span
  m="3991650">be</span> <span m="3991760">yes.</span> <span
  m="3993030">How</span> <span m="3993150">many</span> <span
  m="3993350">mRNA</span> <span m="3993560">new</span> <span
  m="3993700">molecules</span> <span m="3994200">are</span> <span
  m="3994370">responsible</span> <span m="3994990">for</span> <span
  m="3995140">each</span> <span m="3995370">gene</span> <span
  m="3995730">expression</span> <span m="3996390">burst</span> <span
  m="3996770">under</span> <span m="3996960">the</span> <span
  m="3997060">repressed</span> <span m="3997470">conditions?</span> <span
  m="3998620">One.</span></p><p><span m="4000050">What</span> <span
  m="4000240">is</span> <span m="4000330">the</span> <span
  m="4000440">distribution</span> <span m="4001060">of</span> <span
  m="4001160">the</span> <span m="4001250">number</span> <span
  m="4001630">of</span> <span m="4001710">protein</span> <span
  m="4002040">molecules</span> <span m="4002570">in</span> <span
  m="4002660">each</span> <span m="4002840">burst?</span> <span
  m="4003620">It's</span> <span m="4003890">going to</span> <span
  m="4003990">be</span> <span m="4005030">geometrically</span> <span
  m="4005540">distributed.</span> <span m="4006710">And</span> <span
  m="4006840">what</span> <span m="4006980">is</span> <span
  m="4007070">the</span> <span m="4007210">origin</span> <span
  m="4007750">of</span> <span m="4007840">the</span> <span
  m="4007930">temporal</span> <span m="4008340">spread</span> <span
  m="4008890">of</span> <span m="4009030">the</span> <span
  m="4009170">individual</span> <span m="4009660">bursts?</span> <span
  m="4010760">And</span> <span m="4011370">now,</span> <span
  m="4011820">I</span> <span m="4011920">think</span> <span
  m="4012090">that</span> <span m="4012460">this</span> <span
  m="4012630">is</span> <span m="4012730">nice,</span> <span m="4012990">just
  to</span> <span m="4013200">give</span> <span m="4013360">a</span> <span
  m="4013420">reader</span> <span m="4013670">a kind</span> <span
  m="4013770">of</span> <span m="4013840">like,</span> <span
  m="4014030">heads</span> <span m="4014320">up</span> <span
  m="4014500">of</span> <span m="4015100">where</span> <span
  m="4015290">we're</span> <span m="4015400">heading.</span></p><p><span
  m="4017200">And</span> <span m="4018610">the</span> <span
  m="4018690">origin</span> <span m="4019020">of the</span> <span
  m="4019090">temporal</span> <span m="4019340">spread</span> <span
  m="4019690">is</span> <span m="4019800">actually--</span> <span
  m="4020360">they're</span> <span m="4020690">arguing</span> <span
  m="4020990">is</span> <span m="4021290">actually</span> <span
  m="4021960">the</span> <span m="4022090">Venus</span> <span
  m="4022440">maturation</span> <span m="4022960">time.</span> <span
  m="4024030">So</span> <span m="4024120">in</span> <span
  m="4024240">that</span> <span m="4024440">case,</span> <span
  m="4026150">the</span> <span m="4026240">fact</span> <span m="4026730">that
  there's</span> <span m="4026940">a</span> <span m="4027000">finite</span>
  <span m="4027510">time</span> <span m="4027790">for</span> <span
  m="4027880">maturation</span> <span m="4028370">of the Venus</span> <span
  m="4029000">ends</span> <span m="4029260">up</span> <span
  m="4029430">allowing</span> <span m="4029880">them</span> <span
  m="4029990">to</span> <span m="4030060">measure</span> <span
  m="4030290">the</span> <span m="4030390">bursts</span> <span m="4030810">in
  an</span> <span m="4030900">interesting</span> <span
  m="4031260">way.</span></p><p><span m="4032340">Before</span> <span
  m="4032690">we</span> <span m="4032800">get</span> <span
  m="4032910">into</span> <span m="4033130">the</span> <span
  m="4033980">details</span> <span m="4034310">of that,</span> <span
  m="4034520">though,</span> <span m="4034800">I want</span> <span
  m="4034990">to</span> <span m="4035850">make</span> <span
  m="4036050">sure</span> <span m="4036240">that</span> <span
  m="4036340">we're</span> <span m="4036470">all</span> <span
  m="4036650">clear</span> <span m="4037450">about</span> <span
  m="4039080">what</span> <span m="4039680">they</span> <span
  m="4039860">mean</span> <span m="4040280">by</span> <span m="4041000">a</span>
  <span m="4041100">burst.</span> <span m="4042270">Because</span> <span
  m="4042520">this</span> <span m="4042690">is</span> <span
  m="4043140">something</span> <span m="4043450">that</span> <span
  m="4043560">is</span> <span m="4044520">oddly--</span> <span
  m="4045450">it</span> <span m="4045710">feels</span> <span
  m="4046540">like</span> <span m="4046720">it's</span> <span
  m="4046860">the</span> <span m="4046940">most</span> <span
  m="4047310">trivial</span> <span m="4048280">statement</span> <span
  m="4048970">ever.</span> <span m="4049690">But</span> <span
  m="4050230">I</span> <span m="4050340">think</span> <span m="4050470">what
  we're</span> <span m="4050640">going</span> <span m="4050720">to</span> <span
  m="4050760">find</span> <span m="4051080">is</span> <span
  m="4051200">that</span> <span m="4051830">there's</span> <span
  m="4051970">a</span> <span m="4052020">lot</span> <span m="4052190">of</span>
  <span m="4052260">confusion</span> <span m="4052690">about</span> <span
  m="4052890">it.</span></p><p><span m="4054820">This</span> <span
  m="4055070">is</span> <span m="4055190">a</span> <span
  m="4055240">question,</span> <span m="4055590">how</span> <span
  m="4055860">is</span> <span m="4056020">it that</span> <span m="4056160">you
  go</span> <span m="4056350">from</span> <span m="4056490">the</span> <span
  m="4056600">data</span> <span m="4057070">to</span> <span
  m="4057710">the</span> <span m="4057810">quantities</span> <span
  m="4058410">that</span> <span m="4058560">they</span> <span
  m="4058950">plot</span> <span m="4059360">and that</span> <span
  m="4059470">they're</span> <span m="4059680">interested</span> <span
  m="4060020">in?</span> <span m="4061070">We</span> <span
  m="4061160">want</span> <span m="4061310">to</span> <span
  m="4061360">get</span> <span m="4061550">a</span> <span
  m="4061600">sense</span> <span m="4061870">of</span> <span
  m="4062430">how</span> <span m="4062700">many</span> <span
  m="4063090">proteins</span> <span m="4063760">are</span> <span
  m="4063860">made</span> <span m="4064210">in</span> <span
  m="4064310">each</span> <span m="4064500">one</span> <span
  m="4064690">of</span> <span m="4064740">these</span> <span
  m="4065230">bursts?</span> <span m="4066410">And</span> <span
  m="4066530">so</span> <span m="4066640">they</span> <span
  m="4066750">have</span> <span m="4067180">in</span> <span
  m="4067340">Figure</span> <span m="4067680">3B,</span> <span
  m="4069990">they</span> <span m="4070150">plot</span> <span
  m="4070820">the</span> <span m="4071160">number</span> <span
  m="4071600">of</span> <span m="4071710">protein</span> <span
  m="4072270">molecules</span> <span m="4072730">produced.</span> <span
  m="4074100">Number</span> <span m="4074950">of</span> <span
  m="4075710">proteins</span> <span m="4076810">produced.</span> <span
  m="4080160">It's</span> <span m="4080610">a</span> <span
  m="4080700">function</span> <span m="4081040">of</span> <span
  m="4081110">time.</span></p><p><span m="4084280">And</span> <span
  m="4084620">they</span> <span m="4084720">have</span> <span
  m="4085230">these</span> <span m="4085380">things.</span> <span
  m="4085790">And</span> <span m="4086380">This</span> <span
  m="4086580">was</span> <span m="4086680">a</span> <span
  m="4086740">cell</span> <span m="4086960">division</span> <span
  m="4087270">event.</span> <span m="4088690">And</span> <span
  m="4089040">here</span> <span m="4089300">they</span> <span
  m="4089450">say,</span> <span m="4090590">we</span> <span
  m="4090700">have</span> <span m="4091940">2,</span> <span
  m="4094010">4.</span> <span m="4096010">And</span> <span
  m="4096330">here</span> <span m="4096540">at</span> <span
  m="4096670">25</span> <span m="4097250">minutes,</span> <span
  m="4101020">we</span> <span m="4101100">have</span> <span
  m="4101200">this</span> <span m="4101319">thing</span> <span
  m="4101450">here,</span> <span m="4102439">and</span> <span
  m="4102800">it</span> <span m="4102899">looks</span> <span
  m="4103170">like.</span> <span m="4110420">And</span> <span
  m="4110529">then</span> <span m="4110649">this</span> <span
  m="4110760">thing</span> <span m="4110910">goes</span> <span
  m="4111090">on.</span> <span m="4111510">And</span> <span
  m="4111620">there's</span> <span m="4114120">50,</span> <span
  m="4116120">we</span> <span m="4116250">have</span> <span
  m="4116430">another,</span> <span m="4118283">and</span> <span m="4118754">so
  forth.</span></p><p><span m="4121109">This is a</span> <span
  m="4121260">zoom</span> <span m="4121609">in</span> <span
  m="4121779">of</span> <span m="4122910">Figure</span> <span
  m="4123160">3B,</span> <span m="4124332">the</span> <span
  m="4124870">top</span> <span m="4125040">panel.</span> <span
  m="4126930">So</span> <span m="4126939">what I</span> <span
  m="4127020">want</span> <span m="4127120">to</span> <span
  m="4127210">know</span> <span m="4127359">is,</span> <span
  m="4129479">what</span> <span m="4129700">is</span> <span
  m="4129870">the</span> <span m="4129950">size</span> <span
  m="4130550">of</span> <span m="4130640">the</span> <span
  m="4130729">first</span> <span m="4131495">burst?</span></p><p><span
  m="4164279">So</span> <span m="4164529">you</span> <span
  m="4164729">can</span> <span m="4164890">either</span> <span
  m="4165310">look</span> <span m="4165529">at</span> <span
  m="4165620">my</span> <span m="4166149">beautifully</span> <span
  m="4166540">drawn</span> <span m="4166920">illustration,</span> <span
  m="4167500">or</span> <span m="4167630">you</span> <span
  m="4167700">can</span> <span m="4167810">look</span> <span
  m="4167990">at</span> <span m="4168229">the</span> <span
  m="4168350">paper</span> <span m="4168630">in</span> <span
  m="4168710">front</span> <span m="4168859">of</span> <span
  m="4168920">you.</span> <span m="4169950">So</span> <span
  m="4169979">this</span> <span m="4170140">is</span> <span m="4170240">a</span>
  <span m="4170310">paper</span> <span m="4170850">analyzing</span> <span
  m="4171399">the</span> <span m="4171479">size</span> <span
  m="4171910">distribution</span> <span m="4173170">of</span> <span
  m="4173380">protein</span> <span m="4173939">bursts</span> <span
  m="4174850">observed</span> <span m="4175979">in</span> <span
  m="4176630">living</span> <span m="4177040">cells.</span> <span
  m="4177960">Right?</span> <span m="4178479">That's</span> <span
  m="4178649">the</span> <span m="4179580">point</span> <span
  m="4179810">of</span> <span m="4179850">this</span> <span
  m="4179960">paper.</span> <span m="4182979">Now,</span> <span
  m="4183120">the</span> <span m="4183189">question</span> <span
  m="4183470">is,</span> <span m="4183790">from</span> <span
  m="4184090">the</span> <span m="4184189">data</span> <span
  m="4184479">they're</span> <span m="4184689">collecting,</span> <span
  m="4185950">we</span> <span m="4186050">want</span> <span
  m="4186220">to</span> <span m="4186270">know</span> <span
  m="4186510">what</span> <span m="4186660">is</span> <span
  m="4186729">the</span> <span m="4186819">size</span> <span
  m="4187290">of</span> <span m="4188279">the</span> <span
  m="4188359">protein</span> <span m="4188720">burst?</span> <span
  m="4189626">The first protein</span> <span
  m="4190112">burst.</span></p><p><span m="4204710">Now,</span> <span
  m="4205910">there's</span> <span m="4206100">no</span> <span
  m="4206290">calculation</span> <span m="4207060">for</span> <span
  m="4207170">you</span> <span m="4207250">to</span> <span
  m="4207320">do.</span> <span m="4208815">There's</span> <span
  m="4209240">not</span> <span m="4209520">much</span> <span
  m="4209750">of</span> <span m="4209820">one.</span> <span
  m="4212050">So</span> <span m="4212750">I'm</span> <span
  m="4212860">not</span> <span m="4212990">going</span> <span
  m="4213070">to</span> <span m="4213110">give</span> <span
  m="4213240">you</span> <span m="4213360">maybe</span> <span
  m="4213550">anymore</span> <span m="4213820">time</span> <span
  m="4214150">to</span> <span m="4214660">figure</span> <span m="4214920">this
  out.</span> <span m="4215520">So</span> <span m="4215610">let's</span> <span
  m="4215950">see</span> <span m="4216070">where</span> <span
  m="4216180">we</span> <span m="4216290">are.</span> <span
  m="4216440">Ready?</span> <span m="4217300">Three,</span> <span
  m="4218280">two,</span> <span m="4219190">one.</span></p><p><span
  m="4221450">All</span> <span m="4221650">right.</span> <span
  m="4222010">So</span> <span m="4222150">we</span> <span m="4222250">got</span>
  <span m="4223230">at</span> <span m="4223760">least</span> <span
  m="4224110">a</span> <span m="4224270">majority</span> <span
  m="4225100">of</span> <span m="4225180">the</span> <span
  m="4225280">group</span> <span m="4225650">is</span> <span
  m="4226690">saying</span> <span m="4227100">that</span> <span
  m="4227250">it's</span> <span m="4229350">indeed</span> <span
  m="4229640">3.</span> <span m="4232700">Now,</span> <span
  m="4235070">the</span> <span m="4235410">issue</span> <span
  m="4235680">here</span> <span m="4236040">is</span> <span
  m="4236180">that</span> <span m="4237630">the</span> <span
  m="4238060">weight</span> <span m="4238380">of</span> <span
  m="4238440">the</span> <span m="4238500">experimental</span> <span
  m="4238920">design</span> <span m="4239220">is</span> <span
  m="4239290">working</span> <span m="4239560">so that</span> <span
  m="4239820">every</span> <span m="4240180">three</span> <span
  m="4240520">minutes,</span> <span m="4241960">what we're</span> <span
  m="4242180">asking</span> <span m="4242550">is,</span> <span
  m="4243010">how</span> <span m="4243290">many</span> <span
  m="4244070">Venus</span> <span m="4244540">molecules</span> <span
  m="4245980">kind</span> <span m="4246120">of</span> <span
  m="4246280">folded</span> <span m="4246900">in</span> <span
  m="4247020">that</span> <span m="4247230">previous</span> <span
  m="4247690">three</span> <span m="4247880">minutes?</span> <span
  m="4248840">And</span> <span m="4248980">then,</span> <span
  m="4249600">any</span> <span m="4249840">of</span> <span
  m="4249910">them</span> <span m="4250280">that</span> <span
  m="4250720">there</span> <span m="4250920">are,</span> <span
  m="4251120">we</span> <span m="4251240">count,</span> <span
  m="4251780">and</span> <span m="4251880">then</span> <span
  m="4251970">we</span> <span m="4252100">kill</span> <span
  m="4252360">them.</span></p><p><span m="4253920">And</span> <span
  m="4254040">then,</span> <span m="4254300">the</span> <span
  m="4254410">next.</span> <span m="4254850">And</span> <span
  m="4255220">indeed,</span> <span m="4255980">what</span> <span
  m="4256110">happened</span> <span m="4256320">here</span> <span
  m="4256500">is</span> <span m="4256570">that</span> <span
  m="4256780">every</span> <span m="4257000">three</span> <span
  m="4257170">minutes,</span> <span m="4258110">they're</span> <span
  m="4258240">asking</span> <span m="4258460">this</span> <span
  m="4258570">question.</span> <span m="4259430">No</span> <span
  m="4259640">proteins.</span> <span m="4261080">And</span> <span
  m="4261200">then</span> <span m="4261460">here,</span> <span
  m="4262250">they</span> <span m="4262360">see</span> <span
  m="4262540">one.</span> <span m="4263860">Now,</span> <span
  m="4264290">that's</span> <span m="4264520">not</span> <span
  m="4264810">yet</span> <span m="4265535">a</span> <span
  m="4265880">protein</span> <span m="4266400">burst.</span> <span
  m="4266700">That's</span> <span m="4268510">maybe</span> <span
  m="4268880">a</span> <span m="4268930">protein verse.</span> <span
  m="4269430">But</span> <span m="4269900">it</span> <span
  m="4270060">could</span> <span m="4270250">be</span> <span
  m="4270350">that</span> <span m="4270420">we're</span> <span
  m="4270550">in</span> <span m="4270610">the</span> <span
  m="4270690">middle</span> <span m="4271190">of</span> <span
  m="4271320">a</span> <span m="4271390">protein</span> <span
  m="4271690">burst.</span> <span m="4272810">And</span> <span
  m="4272960">indeed,</span> <span m="4273240">what</span> <span
  m="4273320">we</span> <span m="4273420">see</span> <span m="4273560">is</span>
  <span m="4273670">that</span> <span m="4273830">the</span> <span
  m="4273910">next</span> <span m="4274430">time</span> <span
  m="4274680">point,</span> <span m="4276380">the</span> <span
  m="4276450">next</span> <span m="4276680">three</span> <span
  m="4276850">minutes,</span> <span m="4277290">we</span> <span
  m="4277440">see,</span> <span m="4277590">oh,</span> <span
  m="4277730">actually,</span> <span m="4278000">now there's</span> <span
  m="4278240">two</span> <span m="4280050">new</span> <span
  m="4280440">proteins</span> <span m="4280840">that were</span> <span
  m="4281000">produced</span> <span m="4281370">in</span> <span
  m="4281440">that</span> <span m="4281550">next</span> <span
  m="4281810">three</span> <span m="4281960">minutes.</span></p><p><span
  m="4283020">So</span> <span m="4283160">indeed,</span> <span
  m="4283860">this</span> <span m="4284150">whole</span> <span
  m="4284610">thing</span> <span m="4285370">is</span> <span
  m="4285550">a</span> <span m="4285950">protein burst.</span> <span
  m="4293820">So</span> <span m="4294020">we</span> <span m="4294120">got</span>
  <span m="4294360">1</span> <span m="4294760">plus</span> <span
  m="4295040">2.</span> <span m="4295280">So</span> <span m="4295480">that was
  the</span> <span m="4295580">calculation</span> <span m="4296020">I was</span>
  <span m="4296120">referring</span> <span m="4296430">to.</span> <span
  m="4298110">And</span> <span m="4298290">so</span> <span
  m="4298390">what</span> <span m="4298540">they're</span> <span
  m="4298710">plotting</span> <span m="4300070">is</span> <span
  m="4301340">the</span> <span m="4301470">distribution</span> <span
  m="4302430">of</span> <span m="4303390">these</span> <span
  m="4303600">different</span> <span m="4303900">protein</span> <span
  m="4304210">burst</span> <span m="4304620">sizes.</span> <span
  m="4306060">Now,</span> <span m="4306160">this</span> <span
  m="4306240">is</span> <span m="4306320">a</span> <span
  m="4306400">small</span> <span m="4306730">protein</span> <span
  m="4306930">burst.</span> <span m="4307140">They</span> <span
  m="4307250">see</span> <span m="4307490">some</span> <span
  m="4307830">that</span> <span m="4308340">get</span> <span
  m="4308500">up</span> <span m="4308680">to</span> <span m="4308780">be</span>
  <span m="4309500">10,</span> <span m="4310110">15.</span> <span
  m="4311630">And</span> <span m="4311720">that</span> <span
  m="4311870">corresponds</span> <span m="4312350">to</span> <span
  m="4312440">some</span> <span m="4312560">of</span> <span
  m="4312600">these</span> <span m="4312730">cases,</span> <span
  m="4313040">where</span> <span m="4313170">they</span> <span
  m="4313330">see</span> <span m="4315730">something</span> <span
  m="4316010">that</span> <span m="4316130">looks,</span> <span
  m="4316610">for</span> <span m="4316730">example,</span> <span
  m="4317290">more</span> <span m="4317510">like--</span> <span
  m="4324740">yeah,</span> <span m="4324890">question?</span></p><p><span
  m="4325150">AUDIENCE: [INAUDIBLE].</span></p><p><span m="4328760">PROFESSOR:
  Yeah,</span> <span m="4329120">right.</span></p><p><span m="4330590">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="4331910">PROFESSOR: Yes,</span> <span
  m="4333110">exactly.</span> <span m="4334700">And</span> <span
  m="4335060">ultimately,</span> <span m="4337090">first</span> <span
  m="4337850">of all,</span> <span m="4338270">the</span> <span
  m="4338350">number</span> <span m="4339110">of</span> <span
  m="4339290">protein</span> <span m="4339730">bursts</span> <span
  m="4340380">per</span> <span m="4340780">cell</span> <span
  m="4341160">cycle,</span> <span m="4341550">per</span> <span
  m="4341760">hour</span> <span m="4342390">in</span> <span
  m="4342550">these</span> <span m="4342710">conditions,</span> <span
  m="4343710">is</span> <span m="4344440">of</span> <span
  m="4344570">order</span> <span m="4344940">one.</span> <span
  m="4347690">And</span> <span m="4347840">then</span> <span
  m="4348410">the</span> <span m="4348870">width,</span> <span
  m="4349350">the</span> <span m="4349450">time,</span> <span
  m="4350270">of</span> <span m="4350390">a</span> <span
  m="4350460">protein</span> <span m="4350720">burst</span> <span
  m="4351120">is</span> <span m="4351820">five,</span> <span
  m="4353860">seven</span> <span m="4354180">minutes.</span> <span
  m="4354820">Something</span> <span m="4355120">like</span> <span
  m="4355270">that</span> <span m="4355530">typically.</span></p><p><span
  m="4356560">So</span> <span m="4356670">this</span> <span
  m="4357170">gives</span> <span m="4357310">you</span> <span
  m="4357380">a</span> <span m="4357420">sense</span> <span
  m="4357670">of</span> <span m="4357740">how</span> <span
  m="4357950">frequently</span> <span m="4358420">they</span> <span
  m="4358550">will</span> <span m="4359020">overlap.</span> <span
  m="4360850">And</span> <span m="4361140">indeed,</span> <span
  m="4361490">what</span> <span m="4361590">you</span> <span
  m="4361680">expect</span> <span m="4362280">from</span> <span
  m="4362550">this</span> <span m="4362800">is</span> <span
  m="4363100">that</span> <span m="4364260">15%</span> <span
  m="4365000">of</span> <span m="4365080">them</span> <span
  m="4365280">are</span> <span m="4365410">actually</span> <span
  m="4366470">that</span> <span m="4366680">they</span> <span
  m="4366800">see</span> <span m="4367170">as</span> <span
  m="4367310">one</span> <span m="4367510">burst</span> <span
  m="4367710">might</span> <span m="4367900">actually</span> <span
  m="4368200">have</span> <span m="4368500">been</span> <span m="4368670">two
  though.</span> <span m="4370710">It's</span> <span m="4370900">also</span>
  <span m="4371270">worth</span> <span m="4371480">mentioning</span> <span
  m="4371930">that--</span> <span m="4375950">right.</span> <span
  m="4376170">So</span> <span m="4376970">what</span> <span m="4377170">I</span>
  <span m="4377310">just</span> <span m="4377440">said</span> <span
  m="4377570">is</span> <span m="4377660">in</span> <span m="4377740">the</span>
  <span m="4377810">model,</span> <span m="4378190">where</span> <span
  m="4378420">you know</span> <span m="4378760">that</span> <span
  m="4379100">it's</span> <span m="4379220">always</span> <span
  m="4379540">just</span> <span m="4379730">one</span> <span
  m="4380020">mRNA</span> <span m="4380370">that</span> <span
  m="4380700">is</span> <span m="4380830">produced</span> <span
  m="4381420">each</span> <span m="4381630">time,</span> <span
  m="4382620">what</span> <span m="4383650">they</span> <span
  m="4383730">say</span> <span m="4383930">is they think</span> <span
  m="4384070">is</span> <span m="4384320">that</span> <span
  m="4384940">the</span> <span m="4385110">promoter</span> <span
  m="4385560">is</span> <span m="4385680">tightly</span> <span
  m="4386000">repressed</span> <span m="4387300">by</span> <span
  m="4387430">the</span> <span m="4387540">Lac</span> <span
  m="4387840">repressor.</span></p><p><span m="4389230">Ever</span> <span
  m="4389430">now</span> <span m="4389660">and then,</span> <span
  m="4389780">the</span> <span m="4389850">Lac</span> <span
  m="4390110">repressor</span> <span m="4390330">falls</span> <span
  m="4390660">off,</span> <span m="4391320">and</span> <span
  m="4391450">it's</span> <span m="4391560">going</span> <span
  m="4391660">to</span> <span m="4391730">bind</span> <span
  m="4392070">again.</span> <span m="4393580">But</span> <span
  m="4394560">some</span> <span m="4394820">fraction</span> <span
  m="4395180">of</span> <span m="4395240">that</span> <span
  m="4395410">time,</span> <span m="4396380">when</span> <span
  m="4396740">the</span> <span m="4396980">repressor</span> <span
  m="4397610">unbinds,</span> <span m="4398300">you</span> <span
  m="4398430">get</span> <span m="4398570">the</span> <span
  m="4398650">RNA</span> <span m="4399000">p</span> <span
  m="4399200">binding,</span> <span m="4399550">and</span> <span
  m="4399610">then</span> <span m="4399730">you</span> <span
  m="4399850">get</span> <span m="4400390">a</span> <span
  m="4400510">transcription</span> <span m="4401020">event.</span></p><p><span
  m="4401880">And</span> <span m="4402010">I</span> <span
  m="4402100">think</span> <span m="4402270">that</span> <span
  m="4402370">in</span> <span m="4402480">general,</span> <span
  m="4403030">it</span> <span m="4403130">is</span> <span
  m="4403160">just</span> <span m="4403390">one</span> <span
  m="4403720">mRNA</span> <span m="4404270">that</span> <span
  m="4404400">is</span> <span m="4404510">produced</span> <span
  m="4404800">there.</span> <span m="4405230">So</span> <span
  m="4405250">just</span> <span m="4405440">a</span> <span
  m="4405490">single</span> <span m="4405900">RNA</span> <span
  m="4406280">polymerase</span> <span m="4406580">bound,</span> <span
  m="4407320">and</span> <span m="4407450">made</span> <span
  m="4407680">an</span> <span m="4407770">mRNA.</span> <span
  m="4408510">But</span> <span m="4409010">I'm</span> <span
  m="4409110">sure</span> <span m="4409280">that</span> <span
  m="4409580">some</span> <span m="4409990">fraction</span> <span
  m="4410410">of</span> <span m="4410480">the</span> <span
  m="4410550">time,</span> <span m="4410820">it was</span> <span
  m="4410960">actually</span> <span m="4411260">two</span> <span
  m="4412120">that</span> <span m="4412240">were</span> <span
  m="4412330">produced</span> <span m="4412780">during</span> <span
  m="4412940">that</span> <span m="4413060">time.</span> <span
  m="4413290">And</span> <span m="4413610">those</span> <span
  m="4413830">would</span> <span m="4414000">certainly</span> <span
  m="4414370">show</span> <span m="4414550">up</span> <span
  m="4414640">as</span> <span m="4414730">one</span> <span
  m="4414930">protein</span> <span m="4415380">burst.</span> <span
  m="4417260">Right?</span> <span m="4417610">Because</span> <span
  m="4418280">the</span> <span m="4418700">lifetime</span> <span
  m="4419180">of</span> <span m="4419220">the</span> <span
  m="4419290">mRNAs</span> <span m="4419890">in this</span> <span
  m="4420020">situation</span> <span m="4420620">is</span> <span
  m="4420920">of</span> <span m="4421020">order</span> <span
  m="4421340">what?</span></p><p><span m="4425010">Yeah.</span> <span
  m="4425060">It was,</span> <span m="4425190">I think,</span> <span
  m="4425390">one</span> <span m="4425600">and</span> <span m="4425810">a
  half</span> <span m="4426020">minutes</span> <span m="4426400">maybe?</span>
  <span m="4427890">It was</span> <span m="4428070">short.</span> <span
  m="4431300">Yeah.</span> <span m="4431770">One</span> <span m="4431810">and a
  half</span> <span m="4432000">minutes.</span> <span m="4433810">What</span>
  <span m="4433920">that</span> <span m="4434020">means</span> <span
  m="4434320">is that</span> <span m="4434440">on</span> <span
  m="4434570">this</span> <span m="4434770">time</span> <span
  m="4435020">scale,</span> <span m="4435520">if</span> <span
  m="4435640">there</span> <span m="4435730">were</span> <span
  m="4435810">two</span> <span m="4436010">mRNAs</span> <span
  m="4436510">produced,</span> <span m="4436880">they</span> <span
  m="4437590">would</span> <span m="4437710">look</span> <span
  m="4437890">like</span> <span m="4438060">the</span> <span
  m="4438120">same</span> <span m="4438420">mRNA.</span></p><p><span
  m="4439220">But</span> <span m="4440050">from</span> <span
  m="4440580">this</span> <span m="4440720">data</span> <span
  m="4440990">what</span> <span m="4441110">they</span> <span
  m="4441300">conclude</span> <span m="4441810">is</span> <span
  m="4443560">that</span> <span m="4443690">there's</span> <span
  m="4444020">typically</span> <span m="4444400">only</span> <span
  m="4444620">one</span> <span m="4444880">mRNA</span> <span
  m="4445380">produced</span> <span m="4445940">in</span> <span
  m="4446060">each</span> <span m="4446240">protein</span> <span
  m="4446500">burst,</span> <span m="4447110">and</span> <span
  m="4447730">there's</span> <span m="4448070">not</span> <span
  m="4448800">that</span> <span m="4448970">many</span> <span
  m="4449340">protein</span> <span m="4449580">bursts</span> <span
  m="4449880">per</span> <span m="4451430">hour</span> <span m="4451740">of
  the</span> <span m="4451840">cell</span> <span m="4452060">division,</span>
  <span m="4452350">so</span> <span m="4452690">they</span> <span
  m="4452810">won't</span> <span m="4453070">overlap</span> <span
  m="4453530">too</span> <span m="4453710">much.</span> <span
  m="4454500">But</span> <span m="4455630">it's</span> <span
  m="4455740">going</span> <span m="4455830">to</span> <span
  m="4455870">happen</span> <span m="4456690">at</span> <span
  m="4456860">some</span> <span m="4456960">rate.</span> <span m="4464110">All
  right.</span></p><p><span m="4468520">What</span> <span
  m="4470100">they</span> <span m="4470220">see</span> <span
  m="4470440">is</span> <span m="4470590">that</span> <span
  m="4470980">the</span> <span m="4471180">distribution</span> <span
  m="4471870">of</span> <span m="4471940">the</span> <span
  m="4472020">protein</span> <span m="4472340">bursts--</span> <span
  m="4473830">we</span> <span m="4473960">said</span> <span
  m="4474130">it</span> <span m="4474440">was</span> <span
  m="4474570">roughly</span> <span m="4476020">one</span> <span
  m="4476430">per</span> <span m="4477550">cell</span> <span
  m="4477770">division</span> <span m="4478070">time,</span> <span
  m="4478300">which</span> <span m="4478560">they</span> <span
  m="4478750">found</span> <span m="4478960">was</span> <span
  m="4479120">55</span> <span m="4479580">minutes</span> <span
  m="4479840">here.</span> <span m="4480720">And</span> <span
  m="4481110">they</span> <span m="4481200">found</span> <span
  m="4481520">that</span> <span m="4481830">the</span> <span
  m="4482170">number</span> <span m="4482690">of</span> <span
  m="4482770">protein</span> <span m="4483080">bursts</span> <span
  m="4483740">per</span> <span m="4484060">cell</span> <span
  m="4484280">cycle</span> <span m="4485140">was</span> <span
  m="4485330">distributed</span> <span m="4486620">Poisson</span></p><p><span
  m="4489160">So</span> <span m="4489290">let</span> <span m="4489370">me</span>
  <span m="4489900">write</span> <span m="4490220">this</span> <span
  m="4490400">down</span> <span m="4490640">somewhere.</span> <span
  m="4504730">The</span> <span m="4504790">number</span> <span
  m="4505080">of</span> <span m="4505410">protein</span> <span
  m="4505910">bursts</span> <span m="4510550">per</span> <span
  m="4511540">cell</span> <span m="4511790">cycle.</span> <span m="4514920">So
  this</span> <span m="4515130">was</span> <span m="4515280">distributed</span>
  <span m="4515700">as</span> <span m="4515800">a</span> <span
  m="4515870">Poisson</span> <span m="4516190">with</span> <span
  m="4518720">mean</span> <span m="4519380">[INAUDIBLE]</span> <span
  m="4519980">lambda</span> <span m="4520740">of</span> <span
  m="4520870">around</span> <span m="4521320">1.</span> <span
  m="4521950">1.2.</span> <span m="4524300">They</span> <span
  m="4524650">call</span> <span m="4524820">this</span> <span
  m="4525030">n</span> <span m="4525260">cycle.</span> <span
  m="4527220">So</span> <span m="4527570">I'll</span> <span
  m="4527760">be</span> <span m="4527870">consistent.</span> <span
  m="4528250">So</span> <span m="4528660">this</span> <span m="4528980">n</span>
  <span m="4531900">cycle</span> <span m="4532640">to</span> <span
  m="4533520">the</span> <span m="4533960">1.2.</span></p><p><span
  m="4539320">Now,</span> <span m="4539820">you</span> <span
  m="4539980">guys--</span> <span m="4540700">the</span> <span
  m="4540790">Poisson</span> <span m="4541040">is</span> <span
  m="4541290">a</span> <span m="4541480">distribution</span> <span
  m="4541860">that</span> <span m="4541990">we're</span> <span
  m="4542100">going</span> <span m="4542180">to</span> <span
  m="4542230">be</span> <span m="4542340">spending</span> <span
  m="4544470">a</span> <span m="4544550">lot</span> <span m="4544730">of</span>
  <span m="4544800">time</span> <span m="4545340">thinking</span> <span
  m="4545540">about.</span> <span m="4546810">So</span> <span
  m="4546990">the</span> <span m="4547140">normal</span> <span
  m="4547480">way</span> <span m="4547640">that</span> <span
  m="4547900">we</span> <span m="4548310">write</span> <span m="4548590">it
  is</span> <span m="4549460">that</span> <span m="4549850">if</span> <span
  m="4550980">it's</span> <span m="4551620">the</span> <span
  m="4551760">probability</span> <span m="4553230">of</span> <span
  m="4553410">observing</span> <span m="4554930">some</span> <span
  m="4555400">number</span> <span m="4556750">n--</span> <span
  m="4557030">and</span> <span m="4557130">this</span> <span
  m="4557640">is</span> <span m="4557980">a</span> <span
  m="4558070">number</span> <span m="4558340">n</span> <span
  m="4558600">bursts</span> <span m="4559160">per</span> <span
  m="4559350">cycle</span> <span m="4559750">in</span> <span
  m="4559790">this</span> <span m="4559910">case,</span> <span m="4560230">p of
  n.</span> <span m="4561080">We</span> <span m="4561180">normally</span> <span
  m="4561470">write</span> <span m="4561620">it as</span> <span
  m="4561750">a</span> <span m="4561770">function</span> <span
  m="4562090">of</span> <span m="4562190">the</span> <span
  m="4562250">mean</span> <span m="4562620">lambda,</span> <span
  m="4563460">where</span> <span m="4564160">it's</span> <span
  m="4564400">lambda</span> <span m="4564770">to</span> <span
  m="4564910">the</span> <span m="4565040">n</span> <span
  m="4566100">over</span> <span m="4566310">n</span> <span
  m="4566540">factorial.</span></p><p><span m="4567590">And</span> <span
  m="4567620">then</span> <span m="4567760">for</span> <span
  m="4567870">normalization,</span> <span m="4568700">we</span> <span
  m="4568810">have</span> <span m="4568870">to</span> <span
  m="4568970">write</span> <span m="4569200">e</span> <span
  m="4569410">to</span> <span m="4569520">the</span> <span
  m="4570210">minus</span> <span m="4571070">lambda</span> <span
  m="4571360">here.</span> <span m="4574190">We're</span> <span
  m="4574370">going</span> <span m="4574450">to</span> <span
  m="4574490">spend</span> <span m="4574710">a</span> <span
  m="4574760">lot</span> <span m="4575040">of</span> <span
  m="4575110">time</span> <span m="4575420">thinking</span> <span
  m="4575630">about</span> <span m="4575980">the Poisson</span> <span
  m="4577780">next</span> <span m="4578090">class.</span> <span
  m="4579390">So</span> <span m="4579530">I</span> <span
  m="4579810">would</span> <span m="4580000">say</span> <span
  m="4580150">that</span> <span m="4580280">if</span> <span
  m="4580890">it's</span> <span m="4581080">been</span> <span
  m="4581180">a</span> <span m="4581280">while</span> <span
  m="4581480">since</span> <span m="4581600">you've</span> <span
  m="4581690">thought</span> <span m="4581880">about</span> <span
  m="4581990">probability</span> <span m="4582430">distributions,</span> <span
  m="4582790">then</span> <span m="4583270">you</span> <span
  m="4583410">should</span> <span m="4584170">play</span> <span
  m="4584990">via</span> <span m="4585470">textbook,</span> <span
  m="4586180">Wikipedia,</span> <span m="4586680">whatnot,</span> <span
  m="4586990">with</span> <span m="4587910">the</span> <span
  m="4588130">Poisson,</span> <span m="4589110">the</span> <span
  m="4589270">exponential,</span> <span m="4590570">the</span> <span
  m="4590830">geometric,</span> <span m="4592770">and</span> <span
  m="4592990">also</span> <span m="4593430">the</span> <span
  m="4593590">gamma</span> <span m="4594120">distributions.</span> <span
  m="4594870">Because</span> <span m="4595070">we're</span> <span
  m="4595200">going</span> <span m="4595280">to</span> <span
  m="4595320">be</span> <span m="4595460">using</span> <span
  m="4595780">those</span> <span m="4596480">in</span> <span
  m="4596580">the</span> <span m="4596660">next</span> <span
  m="4596850">class.</span></p><p><span m="4602670">Now,</span> <span
  m="4603530">in</span> <span m="4603680">this</span> <span
  m="4603860">distribution,</span> <span m="4604390">what</span> <span
  m="4604780">it</span> <span m="4605040">basically</span> <span
  m="4605310">ends</span> <span m="4605470">up</span> <span
  m="4605580">being</span> <span m="4605770">is</span> <span
  m="4605890">that</span> <span m="4606600">sometimes,</span> <span
  m="4607300">you</span> <span m="4607410">see</span> <span
  m="4607770">zero</span> <span m="4608240">bursts.</span> <span
  m="4609080">Sometimes</span> <span m="4609540">you</span> <span
  m="4609630">see</span> <span m="4609820">one.</span> <span
  m="4610930">Every</span> <span m="4611100">now</span> <span
  m="4611250">and</span> <span m="4611310">then,</span> <span
  m="4611410">you</span> <span m="4611500">see</span> <span
  m="4611670">two.</span> <span m="4612230">It's</span> <span
  m="4612590">kind</span> <span m="4612800">of</span> <span
  m="4612980">what</span> <span m="4613430">this means.</span></p><p><span
  m="4622660">There's</span> <span m="4622880">one</span> <span
  m="4623160">other</span> <span m="4623350">thing</span> <span
  m="4623650">that</span> <span m="4623760">is,</span> <span
  m="4623990">I</span> <span m="4624090">think,</span> <span
  m="4624320">a</span> <span m="4624380">bit</span> <span
  m="4624700">tricky</span> <span m="4625380">often,</span> <span
  m="4625880">which</span> <span m="4626130">is</span> <span
  m="4626930">how</span> <span m="4627220">they</span> <span
  m="4627350">calculated</span> <span m="4628850">that</span> <span
  m="4629000">it</span> <span m="4629070">was</span> <span
  m="4629240">typically</span> <span m="4629740">one</span> <span
  m="4630160">mRNA</span> <span m="4631590">that</span> <span
  m="4631800">led</span> <span m="4632140">to</span> <span
  m="4632610">each</span> <span m="4632880">of</span> <span
  m="4632920">these</span> <span m="4633100">proteins</span> <span
  m="4633450">bursts.</span> <span m="4634520">Can</span> <span
  m="4634630">somebody</span> <span m="4634900">remind</span> <span
  m="4635350">us</span> <span m="4636540">kind</span> <span
  m="4636720">of</span> <span m="4637230">experimentally</span> <span
  m="4638190">what</span> <span m="4638540">they</span> <span
  m="4638620">had</span> <span m="4638780">to</span> <span m="4638840">do</span>
  <span m="4639060">in</span> <span m="4639150">order</span> <span
  m="4639330">to</span> <span m="4639390">get</span> <span m="4639520">at
  that?</span></p><p><span m="4646830">The</span> <span
  m="4647080">average</span> <span m="4647630">RNA</span> <span
  m="4648180">per</span> <span m="4648410">cell,</span> <span
  m="4648790">right.</span> <span m="4649720">Right,</span> <span
  m="4649860">so</span> <span m="4649930">they</span> <span
  m="4650010">did</span> <span m="4650200">this</span> <span
  m="4650730">RT-PCR.</span> <span m="4652380">So</span> <span
  m="4652540">what</span> <span m="4652670">they</span> <span
  m="4652880">did,</span> <span m="4653450">they</span> <span
  m="4653590">reverse</span> <span m="4654220">transcribed.</span> <span
  m="4654940">They</span> <span m="4655000">converted</span> <span
  m="4655380">the</span> <span m="4656010">mRNA</span> <span
  m="4656190">into</span> <span m="4656890">DNA,</span> <span m="4657320">and
  they</span> <span m="4657500">amplified</span> <span m="4658210">to</span>
  <span m="4658290">get</span> <span m="4658410">a</span> <span
  m="4658460">sense</span> <span m="4658700">of</span> <span
  m="4658760">how</span> <span m="4659160">much</span> <span
  m="4659450">mRNA</span> <span m="4659870">there</span> <span
  m="4660000">was.</span> <span m="4661860">And</span> <span
  m="4663110">from</span> <span m="4663320">that,</span> <span
  m="4663970">the</span> <span m="4664120">formula,</span> <span
  m="4664700">when</span> <span m="4664800">you</span> <span
  m="4664900">first</span> <span m="4665040">look</span> <span
  m="4665250">at</span> <span m="4665320">it,</span> <span m="4665540">it</span>
  <span m="4665670">feels</span> <span m="4665990">kind</span> <span
  m="4666180">of</span> <span m="4666250">mysterious,</span> <span
  m="4667130">or</span> <span m="4667210">something</span> <span
  m="4667500">like</span> <span m="4667690">that.</span></p><p><span
  m="4669070">But</span> <span m="4669760">it's</span> <span m="4669870">one
  of</span> <span m="4669970">those</span> <span m="4670130">things</span> <span
  m="4670420">that</span> <span m="4670540">you</span> <span
  m="4670580">just</span> <span m="4671350">have</span> <span
  m="4671540">to</span> <span m="4672010">keep</span> <span
  m="4672210">track</span> <span m="4672520">of</span> <span
  m="4672640">like,</span> <span m="4673550">units</span> <span
  m="4674000">and</span> <span m="4674100">so</span> <span
  m="4674220">forth.</span> <span m="4675360">So</span> <span
  m="4675740">you</span> <span m="4675840">can</span> <span
  m="4675940">basically</span> <span m="4676320">think about</span> <span
  m="4676500">the</span> <span m="4676800">number</span> <span
  m="4677190">of</span> <span m="4677270">mRNA.</span> <span
  m="4680110">And</span> <span m="4680240">this</span> <span
  m="4680740">is</span> <span m="4680850">indeed,</span> <span
  m="4682030">this</span> <span m="4682150">is</span> <span
  m="4682280">per</span> <span m="4682510">cell.</span> <span
  m="4684320">But</span> <span m="4684570">cell,</span> <span
  m="4684940">this</span> <span m="4685080">doesn't</span> <span
  m="4685280">have</span> <span m="4685390">units,</span> <span
  m="4685800">right?</span> <span m="4686490">But</span> <span
  m="4686630">if</span> <span m="4686700">we</span> <span
  m="4687020">wanted</span> <span m="4687260">the</span> <span
  m="4688780">expectation</span> <span m="4689340">value,</span> <span
  m="4689800">the</span> <span m="4689900">number</span> <span
  m="4690220">of</span> <span m="4690270">the</span> <span
  m="4690470">mRNA</span> <span m="4690830">that's</span> <span
  m="4691050">going</span> <span m="4691160">to be per</span> <span
  m="4691460">cell,</span> <span m="4692450">well,</span> <span
  m="4692600">that's</span> <span m="4692970">going</span> <span
  m="4693080">to</span> <span m="4693120">be</span> <span
  m="4693190">given</span> <span m="4693380">by</span> <span
  m="4693490">the</span> <span m="4693610">number</span> <span m="4694050">of
  the</span> <span m="4694190">mRNA</span> <span m="4696530">per</span> <span
  m="4696770">burst,</span> <span m="4701960">times</span> <span
  m="4702960">the</span> <span m="4703460">number</span> <span
  m="4703840">of</span> <span m="4703900">bursts</span> <span
  m="4705200">per</span> <span m="4706420">unit</span> <span
  m="4706680">time.</span></p><p><span m="4711720">So</span> <span
  m="4711770">this</span> <span m="4711910">is</span> <span
  m="4712010">some</span> <span m="4712230">rate</span> <span
  m="4715920">burst,</span> <span m="4716680">and</span> <span
  m="4716780">then</span> <span m="4716910">also</span> <span
  m="4717620">times</span> <span m="4717970">the</span> <span
  m="4718080">lifetime</span> <span m="4718740">of</span> <span
  m="4718880">the</span> <span m="4719110">mRNA.</span> <span
  m="4726140">Now</span> <span m="4726340">in</span> <span
  m="4726430">this</span> <span m="4726570">formula,</span> <span
  m="4726910">there's</span> <span m="4727080">also</span> <span
  m="4727390">the</span> <span m="4727590">added</span> <span
  m="4728480">factor,</span> <span m="4728950">where</span> <span
  m="4729150">they</span> <span m="4729270">have</span> <span
  m="4729580">like,</span> <span m="4729870">the</span> <span
  m="4730320">time</span> <span m="4730620">of</span> <span
  m="4730670">the</span> <span m="4730750">cell</span> <span
  m="4731020">cycle.</span> <span m="4731650">But</span> <span
  m="4731750">that's</span> <span m="4731920">just</span> <span
  m="4732090">because</span> <span m="4733050">this</span> <span
  m="4733300">could have</span> <span m="4733600">been</span> <span
  m="4734030">bursts</span> <span m="4734480">per</span> <span
  m="4734630">minute,</span> <span m="4735110">lifetime</span> <span
  m="4735520">of</span> <span m="4735600">mRNA</span> <span
  m="4736110">minutes.</span></p><p><span m="4736450">But</span> <span
  m="4736550">then,</span> <span m="4737460">if</span> <span
  m="4738030">you</span> <span m="4738160">want</span> <span
  m="4738310">to</span> <span m="4738370">put</span> <span m="4738500">in</span>
  <span m="4738580">the</span> <span m="4738640">extra</span> <span
  m="4738900">term,</span> <span m="4739170">then</span> <span m="4739270">you
  have to say,</span> <span m="4739380">oh,</span> <span m="4739600">the</span>
  <span m="4739690">cell</span> <span m="4739970">cycle</span> <span
  m="4740290">is</span> <span m="4740440">55</span> <span
  m="4740930">minutes.</span> <span m="4741650">So</span> <span
  m="4741770">then</span> <span m="4741890">you</span> <span m="4741990">have
  to</span> <span m="4742100">do</span> <span m="4742210">that</span> <span
  m="4742360">conversion</span> <span m="4742800">of</span> <span
  m="4742900">time</span> <span m="4743620">into</span> <span
  m="4743790">the</span> <span m="4743880">proper units.</span> <span
  m="4745040">So</span> <span m="4745140">that's</span> <span
  m="4745610">what</span> <span m="4745730">ends up
  happening.</span></p><p><span m="4757450">Are</span> <span
  m="4757540">there</span> <span m="4757700">any</span> <span
  m="4757850">questions</span> <span m="4758330">about</span> <span
  m="4759010">what</span> <span m="4759180">happened</span> <span
  m="4759420">here?</span> <span m="4765860">Now,</span> <span m="4766630">what
  we're</span> <span m="4766860">going</span> <span m="4766940">to</span> <span
  m="4766990">do</span> <span m="4769030">next</span> <span
  m="4769430">lecture</span> <span m="4770650">is</span> <span
  m="4771160">kind</span> <span m="4771380">of</span> <span
  m="4771490">go</span> <span m="4771760">through</span> <span
  m="4772200">a</span> <span m="4772350">simplified</span> <span
  m="4773020">model</span> <span m="4773480">of</span> <span
  m="4775360">gene</span> <span m="4775530">expression,</span> <span
  m="4776520">where</span> <span m="4776620">there's</span> <span
  m="4776800">just</span> <span m="4777020">some</span> <span
  m="4778110">rate</span> <span m="4778520">of</span> <span
  m="4778750">mRNA</span> <span m="4779220">formation,</span> <span
  m="4780260">mRNA</span> <span m="4780680">degradation,</span> <span
  m="4781720">the</span> <span m="4781960">mRNA</span> <span
  m="4782300">makes</span> <span m="4782560">protein,</span> <span
  m="4783020">proteins get</span> <span m="4783430">degraded.</span> <span
  m="4784360">And</span> <span m="4784450">then</span> <span
  m="4784600">in</span> <span m="4784750">that</span> <span
  m="4784940">model,</span> <span m="4785580">we</span> <span
  m="4785710">want</span> <span m="4785880">to</span> <span
  m="4785940">try</span> <span m="4786090">to</span> <span
  m="4786160">understand</span> <span m="4787480">how</span> <span
  m="4787770">everything</span> <span m="4788120">is</span> <span
  m="4788230">distributed.</span></p><p><span m="4791140">And</span> <span
  m="4791190">we're</span> <span m="4791290">going</span> <span
  m="4791370">to</span> <span m="4791440">relate</span> <span
  m="4791780">that</span> <span m="4792000">back</span> <span
  m="4792260">to</span> <span m="4792350">some</span> <span m="4792500">of
  the</span> <span m="4792570">experimental</span> <span m="4793120">data</span>
  <span m="4793380">in</span> <span m="4793440">this</span> <span
  m="4793610">paper.</span> <span m="4793900">In</span> <span
  m="4793970">particular,</span> <span m="4794240">for</span> <span
  m="4794330">example,</span> <span m="4795110">this</span> <span
  m="4795780">geometric</span> <span m="4796310">distribution</span> <span
  m="4796860">of</span> <span m="4796960">protein</span> <span
  m="4797750">burst</span> <span m="4798200">sizes</span> <span
  m="4798660">is</span> <span m="4798770">something</span> <span
  m="4799060">that</span> <span m="4799240">you</span> <span
  m="4799330">expect</span> <span m="4799760">from</span> <span
  m="4800550">the</span> <span m="4800660">most</span> <span
  m="4800870">basic</span> <span m="4801210">simple</span> <span
  m="4801450">model</span> <span m="4803560">that</span> <span
  m="4803720">you</span> <span m="4803830">would</span> <span
  m="4803900">have</span> <span m="4804000">written</span> <span
  m="4804170">down.</span> <span m="4805160">So</span> <span m="4805240">from
  that</span> <span m="4805400">same</span> <span m="4805540">point,</span>
  <span m="4805710">it's</span> <span m="4805830">not</span> <span
  m="4805970">a</span> <span m="4806020">surprise.</span> <span
  m="4807180">It</span> <span m="4807400">is</span> <span
  m="4807600">often</span> <span m="4807890">assumed</span> <span
  m="4808480">this</span> <span m="4808590">thing</span> <span
  m="4808730">should</span> <span m="4808970">be</span> <span
  m="4809790">geometrically</span> <span m="4810300">distributed,</span> <span
  m="4811060">and</span> <span m="4811210">it</span> <span
  m="4811260">was.</span> <span m="4811590">And that's</span> <span
  m="4811750">wonderful.</span></p><p><span m="4813370">From</span> <span
  m="4813540">my</span> <span m="4813810">standpoint,</span> <span
  m="4814190">I</span> <span m="4814260">think</span> <span
  m="4814400">that</span> <span m="4814890">even</span> <span
  m="4815140">things</span> <span m="4815450">that</span> <span
  m="4815550">we</span> <span m="4815720">assume</span> <span
  m="4816020">to</span> <span m="4816060">be</span> <span
  m="4816160">true,</span> <span m="4817110">we should</span> <span
  m="4817180">still</span> <span m="4817590">check</span> <span
  m="4817840">to</span> <span m="4817920">see</span> <span m="4818090">if</span>
  <span m="4818170">they</span> <span m="4818280">are</span> <span
  m="4818420">true.</span> <span m="4819580">And</span> <span
  m="4820280">in</span> <span m="4820480">other</span> <span
  m="4820670">cases,</span> <span m="4821130">they</span> <span
  m="4821230">may</span> <span m="4821330">not</span> <span
  m="4821430">be,</span> <span m="4821580">and</span> <span
  m="4821680">so</span> <span m="4821820">forth.</span> <span
  m="4823280">Are</span> <span m="4823390">there</span> <span
  m="4823510">any</span> <span m="4823650">questions</span> <span
  m="4824110">about</span> <span m="4824990">this</span> <span
  m="4825140">paper?</span> <span m="4827426">No?</span> <span
  m="4831140">OK.</span> <span m="4831540">Then</span> <span
  m="4831740">I</span> <span m="4831910">will</span> <span
  m="4832150">see</span> <span m="4832350">you</span> <span m="4832560">our next
  class.</span></p>
embedded_media:
  - uid: 0f7a78b3ba171e575cf8afdb4b210615
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: dP4NQIpUH6w
  - uid: 8e620297def601ec86589780a4e1ac36
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/dP4NQIpUH6w/default.jpg'
  - uid: afd1734b42839954ef15eac9e609b2d4
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1020693367'
  - uid: 5b59c0cff0b7e66e31f6804ffb3eb641
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT8.591JF14/MIT8_591JF14_lec08_300k.mp4'
  - uid: 23c96e055b26124591724d8e58292df5
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: dP4NQIpUH6w
  - uid: f4ad7ccf297c8538c50e202e837a4fec
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: dP4NQIpUH6w.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/introduction-to-stochastic-gene-expression/dP4NQIpUH6w.srt
  - uid: cf6ce8d298504155dae9e9ade8428f5b
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: dP4NQIpUH6w.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/introduction-to-stochastic-gene-expression/dP4NQIpUH6w.pdf
  - uid: 6b3c8028cdb2688a57ad0fab2d7a01ac
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ed244aa3188670545bdd0fa8c40959b4
    parent_uid: 3819cba968901df779b5023a5d4ad6f3
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
