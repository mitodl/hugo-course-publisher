---
title: 'Lecture 17: Rapidly Decreasing Singular Values'
uid: 2e886024ae523bdce29d1126eac0b14d
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-17-rapidly-decreasing-singular-values
short_url: lecture-17-rapidly-decreasing-singular-values
inline_embed_id: 45829030lecture17rapidlydecreasingsingularvalues15579828
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>Professor Alex Townsend gives this
  guest lecture answering the question &ldquo;Why are there so many low rank
  matrices that appear in computational math?&rdquo;  Working effectively with
  low rank matrices is critical in image compression applications.</p> <h2
  class="subhead">Summary</h2> <p>Professor Alex Townsend's lecture<br /> Why do
  so many matrices have low effective rank?<br /> Sylvester test for rapid decay
  of singular values<br /> Image compression: Rank \(k\) needs only \(2kn\)
  numbers.<br /> Flags give many examples / diagonal lines give high rank.</p>
  <p>Related section in textbook: III.3</p> <p><strong>Instructor:</strong>
  Prof. Alex Townsend</p>
related_resources_text: ''
transcript: >-
  <p><span m="22290">GILBERT STRANG:</span> <span m="22520">So</span> <span
  m="22590">let</span> <span m="22660">me</span> <span m="24250">use</span>
  <span m="24480">the</span> <span m="24520">mic</span> <span
  m="26050">to</span> <span m="26710">introduce</span> <span
  m="27340">Alex</span> <span m="27670">Townsend,</span> <span
  m="28840">who</span> <span m="29500">taught</span> <span m="29830">here</span>
  <span m="30250">at</span> <span m="30460">MIT--</span> <span
  m="31000">taught</span> <span m="31240">Linear</span> <span
  m="31540">Algebra</span> <span m="31960">18.06</span> <span
  m="33700">very</span> <span m="34030">successfully.</span></p><p><span
  m="35570">And</span> <span m="35875">then</span> <span m="36670">now</span>
  <span m="36940">he's</span> <span m="37120">at</span> <span
  m="37300">Cornell</span> <span m="37810">on</span> <span m="37930">the</span>
  <span m="38020">faculty,</span> <span m="38980">still</span> <span
  m="39310">teaching</span> <span m="39790">very</span> <span
  m="40060">successfully.</span> <span m="40870">And</span> <span
  m="41830">he</span> <span m="41950">was</span> <span m="42190">invited</span>
  <span m="42760">here</span> <span m="43030">yesterday</span> <span
  m="43690">for</span> <span m="43900">a</span> <span m="43990">big</span> <span
  m="44320">event</span> <span m="45700">over</span> <span m="45940">in</span>
  <span m="46060">Engineering.</span></p><p><span m="47260">And</span> <span
  m="50410">he</span> <span m="50560">agreed</span> <span m="50950">to</span>
  <span m="52090">give</span> <span m="52300">a</span> <span
  m="52390">talk</span> <span m="52780">about</span> <span m="53620">a</span>
  <span m="53710">section</span> <span m="54220">of</span> <span
  m="54340">the</span> <span m="54460">book--</span> <span
  m="54820">section</span> <span m="55360">4.3--</span> <span
  m="57520">which,</span> <span m="57760">if</span> <span m="57910">you</span>
  <span m="58030">look</span> <span m="58300">at</span> <span
  m="58480">it,</span> <span m="58600">you'll</span> <span m="58780">see</span>
  <span m="59050">is</span> <span m="59230">all</span> <span
  m="59410">about</span> <span m="59710">his</span> <span m="59920">work.</span>
  <span m="60790">And</span> <span m="61610">now</span> <span
  m="61810">you</span> <span m="61930">get</span> <span m="62110">to</span>
  <span m="62230">hear</span> <span m="62410">from</span> <span
  m="62680">the</span> <span m="63490">creator</span> <span
  m="63970">himself.</span> <span m="64760">OK.</span></p><p><span
  m="71000">ALEX TOWNSEND:</span> <span m="71100">OK.</span> <span
  m="71200">Thanks.</span> <span m="71830">Thank</span> <span
  m="72020">you,</span> <span m="72100">Gil.</span> <span m="72710">Thank</span>
  <span m="72820">you</span> <span m="72910">for</span> <span
  m="73000">inviting</span> <span m="73300">me</span> <span
  m="73450">here.</span> <span m="74442">I</span> <span m="74870">hope</span>
  <span m="74950">you're</span> <span m="75070">enjoying</span> <span
  m="75400">the</span> <span m="75460">course.</span></p><p><span
  m="75990">Today</span> <span m="76810">I</span> <span m="76900">want</span>
  <span m="77110">to</span> <span m="77440">tell</span> <span
  m="77770">you</span> <span m="78580">a</span> <span m="78640">little</span>
  <span m="78820">about</span> <span m="79690">why</span> <span
  m="79990">there</span> <span m="80280">so</span> <span m="80500">many</span>
  <span m="80800">matrices</span> <span m="82240">that</span> <span
  m="82390">are</span> <span m="82480">low</span> <span m="82720">rank</span>
  <span m="83050">in</span> <span m="83140">the</span> <span
  m="83230">world.</span> <span m="84440">So</span> <span m="84820">as</span>
  <span m="85060">computational</span> <span m="85720">mathematicians--</span>
  <span m="86480">Gil</span> <span m="86625">and</span> <span
  m="86770">myself--</span> <span m="87250">we</span> <span
  m="87400">come</span> <span m="87580">across</span> <span
  m="88240">low-rank</span> <span m="88660">matrices</span> <span
  m="89410">all</span> <span m="89590">the</span> <span m="89680">time.</span>
  <span m="90700">And</span> <span m="92170">we</span> <span
  m="92380">started</span> <span m="92800">wondering,</span> <span
  m="93320">as</span> <span m="93370">a</span> <span m="93400">community,</span>
  <span m="94810">why?</span></p><p><span m="96650">What</span> <span
  m="96850">is</span> <span m="97000">it</span> <span m="97090">about</span>
  <span m="98560">the</span> <span m="98680">problems</span> <span
  m="99190">that</span> <span m="99310">we</span> <span m="99480">are</span>
  <span m="100360">looking</span> <span m="100690">at?</span> <span
  m="101290">What</span> <span m="101530">makes</span> <span
  m="102220">low-rank</span> <span m="102700">matrices</span> <span
  m="103210">appear?</span> <span m="104320">And</span> <span
  m="104620">today</span> <span m="104890">I</span> <span m="104980">want</span>
  <span m="105160">to</span> <span m="105220">give</span> <span
  m="105730">you</span> <span m="105850">that</span> <span
  m="106000">story--</span> <span m="106690">or</span> <span
  m="106750">at</span> <span m="106810">least</span> <span m="106990">an</span>
  <span m="107080">overview</span> <span m="107500">of</span> <span
  m="107590">that</span> <span m="107740">story.</span></p><p><span
  m="109510">So</span> <span m="109990">for</span> <span m="110950">this</span>
  <span m="111130">class,</span> <span m="112270">x</span> <span
  m="112600">is</span> <span m="112720">going</span> <span m="112810">to</span>
  <span m="112930">be</span> <span m="113500">n</span> <span
  m="113710">by</span> <span m="113950">n</span> <span m="114580">real</span>
  <span m="114940">matrix.</span> <span m="117600">So</span> <span
  m="117850">nice</span> <span m="118120">and</span> <span
  m="118210">square.</span> <span m="119680">And</span> <span
  m="119980">you</span> <span m="120220">already</span> <span
  m="120460">know,</span> <span m="120940">or</span> <span m="121015">are</span>
  <span m="121090">very</span> <span m="121330">comfortable</span> <span
  m="121900">with,</span> <span m="122410">the</span> <span
  m="122770">singular</span> <span m="123310">values</span> <span
  m="124000">of</span> <span m="124210">a</span> <span
  m="124270">matrix.</span></p><p><span m="125500">So</span> <span
  m="125920">the</span> <span m="126040">singular</span> <span
  m="126430">values</span> <span m="126910">of</span> <span m="127030">a</span>
  <span m="127090">matrix,</span> <span m="128530">as</span> <span
  m="128710">you</span> <span m="128800">know,</span> <span
  m="129220">are</span> <span m="129520">a</span> <span
  m="129789">sequence</span> <span m="130389">of</span> <span
  m="130509">numbers</span> <span m="133230">that</span> <span
  m="133440">are</span> <span m="134580">monotonically</span> <span
  m="135360">non-increasing</span> <span m="139180">that</span> <span
  m="139380">tell</span> <span m="139590">us</span> <span m="139770">all</span>
  <span m="139890">kinds</span> <span m="140280">of</span> <span
  m="140370">things</span> <span m="141030">about</span> <span
  m="141300">the</span> <span m="141390">matrix</span> <span
  m="141840">x.</span></p><p><span m="146250">For</span> <span
  m="146520">example,</span> <span m="147640">the</span> <span
  m="147750">number</span> <span m="148110">of</span> <span
  m="148290">nonzero</span> <span m="149190">singular</span> <span
  m="149640">values</span> <span m="150090">tell</span> <span
  m="150330">us</span> <span m="150540">the</span> <span m="150660">rank</span>
  <span m="151950">of</span> <span m="152160">the</span> <span
  m="152250">matrix</span> <span m="152730">x.</span> <span
  m="153840">And</span> <span m="153990">they</span> <span
  m="154110">also,</span> <span m="154680">you</span> <span
  m="154860">probably</span> <span m="155190">know,</span> <span
  m="155490">tell</span> <span m="155760">us</span> <span m="155910">how</span>
  <span m="156180">well</span> <span m="157210">a</span> <span
  m="157290">matrix</span> <span m="157830">x</span> <span m="158130">can</span>
  <span m="158340">be</span> <span m="158490">approximated</span> <span
  m="159810">by</span> <span m="160110">a</span> <span
  m="160260">low-rank</span> <span m="160920">matrix.</span></p><p><span
  m="162600">So</span> <span m="163620">let</span> <span m="163740">me</span>
  <span m="163860">just</span> <span m="164010">write</span> <span
  m="164250">two</span> <span m="164460">facts</span> <span
  m="164790">down</span> <span m="165060">that</span> <span
  m="165210">you</span> <span m="165510">already</span> <span
  m="165900">are</span> <span m="165960">familiar</span> <span
  m="166410">with.</span> <span m="167740">So</span> <span
  m="167880">here's</span> <span m="168690">a</span> <span
  m="168750">fact--</span> <span m="170940">that,</span> <span
  m="171690">if</span> <span m="172770">I</span> <span m="172890">look</span>
  <span m="173100">at</span> <span m="173160">the</span> <span
  m="173250">number</span> <span m="173580">of</span> <span
  m="173710">non-zero</span> <span m="174570">singular</span> <span
  m="175050">values</span> <span m="176520">in</span> <span
  m="176670">x--</span> <span m="177210">so</span> <span m="178200">I'm</span>
  <span m="178380">imagining</span> <span m="178920">there's</span> <span
  m="179100">going</span> <span m="179190">to</span> <span m="179280">be</span>
  <span m="179430">k</span> <span m="180120">non-zero</span> <span
  m="180900">singular</span> <span m="181350">values--</span> <span
  m="186600">then</span> <span m="187050">we</span> <span m="187200">can</span>
  <span m="187380">say</span> <span m="187560">a</span> <span
  m="187620">few</span> <span m="187800">things</span> <span
  m="188070">about</span> <span m="188280">x.</span></p><p><span
  m="189480">For</span> <span m="189660">example,</span> <span
  m="191370">the</span> <span m="191460">rank</span> <span m="191820">of</span>
  <span m="191910">x,</span> <span m="193140">as</span> <span
  m="193320">we</span> <span m="193440">know,</span> <span m="193740">is</span>
  <span m="193950">k--</span> <span m="196350">the</span> <span
  m="196440">number</span> <span m="196800">of</span> <span
  m="196920">non-zero</span> <span m="197550">singular</span> <span
  m="197970">values.</span> <span m="199980">But</span> <span
  m="200190">we</span> <span m="200370">also</span> <span m="200670">know</span>
  <span m="201810">from</span> <span m="202080">the</span> <span
  m="202200">SVD</span> <span m="203670">that</span> <span m="203910">we</span>
  <span m="204090">can</span> <span m="204360">decompose</span> <span
  m="205260">x</span> <span m="205770">into</span> <span m="206250">a</span>
  <span m="206340">sum</span> <span m="206970">of</span> <span
  m="207330">rank</span> <span m="207720">1</span> <span
  m="208020">matrices--</span> <span m="209670">in</span> <span
  m="209790">fact,</span> <span m="210070">the</span> <span
  m="210120">sum</span> <span m="210540">of</span> <span m="210810">k</span>
  <span m="211350">of</span> <span m="211470">them.</span></p><p><span
  m="213120">So</span> <span m="214320">because</span> <span m="214860">x</span>
  <span m="215130">is</span> <span m="215250">rank</span> <span
  m="215580">k,</span> <span m="216630">we</span> <span m="216780">can</span>
  <span m="217050">write</span> <span m="217320">down</span> <span
  m="217770">a</span> <span m="218160">low-rank</span> <span
  m="219090">representation</span> <span m="220230">for</span> <span
  m="220530">x,</span> <span m="221580">and</span> <span m="221700">it</span>
  <span m="221790">involves</span> <span m="222210">k</span> <span
  m="222510">terms,</span> <span m="225150">like</span> <span
  m="225360">this.</span></p><p><span m="227830">Each</span> <span
  m="227970">one</span> <span m="228120">of</span> <span m="228210">these</span>
  <span m="228870">vectors</span> <span m="229350">here</span> <span
  m="230040">is</span> <span m="230800">a</span> <span m="230850">column</span>
  <span m="231210">vector.</span> <span m="232350">So</span> <span
  m="232500">if</span> <span m="232620">I</span> <span m="232710">draw</span>
  <span m="232980">this</span> <span m="233190">pictorially,</span> <span
  m="237030">this</span> <span m="237180">guy</span> <span
  m="237390">looks</span> <span m="237630">like</span> <span
  m="237780">this,</span> <span m="238390">right?</span> <span
  m="238800">And</span> <span m="239310">we</span> <span m="239460">have</span>
  <span m="239640">k</span> <span m="239910">of</span> <span
  m="240030">them.</span> <span m="241240">So</span> <span
  m="241650">because</span> <span m="242280">x</span> <span m="242550">is</span>
  <span m="242640">rank</span> <span m="242910">k,</span> <span
  m="243360">we</span> <span m="243540">can</span> <span m="243690">write</span>
  <span m="244020">x</span> <span m="244590">as</span> <span m="244800">a</span>
  <span m="244860">sum</span> <span m="245400">of</span> <span
  m="245940">k</span> <span m="246390">rank</span> <span m="246750">1</span>
  <span m="246990">matrices.</span></p><p><span m="248580">And</span> <span
  m="248700">we</span> <span m="248850">also</span> <span m="249090">have</span>
  <span m="249390">an</span> <span m="249850">initial</span> <span
  m="250230">fact</span> <span m="250530">that</span> <span m="250710">we</span>
  <span m="250860">already</span> <span m="251100">know--</span> <span
  m="251880">that</span> <span m="252390">the</span> <span
  m="252720">dimension</span> <span m="254220">of</span> <span
  m="254580">the</span> <span m="254820">column</span> <span
  m="255270">space</span> <span m="255720">of</span> <span m="255840">x</span>
  <span m="256740">is</span> <span m="256890">equal</span> <span
  m="257130">to</span> <span m="257250">k,</span> <span m="257970">and</span>
  <span m="258149">the</span> <span m="258269">same</span> <span
  m="258600">with</span> <span m="258779">the</span> <span m="258870">row</span>
  <span m="259170">space.</span> <span m="260730">So</span> <span
  m="260940">the</span> <span m="261029">column</span> <span
  m="261390">space</span> <span m="263070">of</span> <span m="263250">x</span>
  <span m="264960">equals</span> <span m="265920">the</span> <span
  m="266010">row</span> <span m="266250">space</span> <span m="266580">of</span>
  <span m="266700">x--</span> <span m="267620">the</span> <span
  m="267780">dimension--</span> <span m="271790">and</span> <span
  m="272490">they</span> <span m="272730">all</span> <span
  m="273020">equal</span> <span m="273180">k.</span></p><p><span
  m="275190">And</span> <span m="275365">so</span> <span m="275540">there</span>
  <span m="275840">are</span> <span m="275940">three</span> <span
  m="276360">facts</span> <span m="276780">we</span> <span m="276930">can</span>
  <span m="277080">determine</span> <span m="277650">from</span> <span
  m="277920">looking</span> <span m="278340">at</span> <span
  m="278610">this</span> <span m="278850">sequence</span> <span
  m="279750">of</span> <span m="280050">singular</span> <span
  m="280620">values</span> <span m="281700">of</span> <span m="281850">a</span>
  <span m="281880">matrix</span> <span m="282390">x.</span> <span
  m="284100">Of</span> <span m="284220">course,</span> <span
  m="284460">the</span> <span m="284550">singular</span> <span
  m="284910">value</span> <span m="285180">sequence</span> <span
  m="285660">is</span> <span m="285780">unique.</span> <span m="287460">X</span>
  <span m="287730">defines</span> <span m="289470">its</span> <span
  m="289800">own</span> <span m="290010">singular</span> <span
  m="290400">values.</span></p><p><span m="294270">What</span> <span
  m="294450">we're</span> <span m="294630">interested</span> <span
  m="295080">in</span> <span m="295230">here</span> <span m="295560">is,</span>
  <span m="295950">what</span> <span m="296370">makes</span> <span
  m="297330">x?</span> <span m="298520">What</span> <span m="298615">are</span>
  <span m="298710">the</span> <span m="298800">properties</span> <span
  m="299310">of</span> <span m="299400">x</span> <span m="300260">that</span>
  <span m="300510">make</span> <span m="300780">sure</span> <span
  m="301140">that</span> <span m="301320">the</span> <span
  m="301410">singular</span> <span m="301890">values</span> <span
  m="302430">have</span> <span m="302730">a</span> <span m="302760">lot</span>
  <span m="302970">of</span> <span m="303060">zeros</span> <span
  m="303510">in</span> <span m="303600">that</span> <span
  m="303780">sequence?</span> <span m="305250">Can</span> <span
  m="305460">we</span> <span m="307290">try</span> <span m="307500">to</span>
  <span m="307620">understand</span> <span m="308280">what</span> <span
  m="308490">kind</span> <span m="308730">of</span> <span m="308850">x</span>
  <span m="309060">makes</span> <span m="309360">that</span> <span
  m="309480">happen?</span></p><p><span m="312960">And</span> <span
  m="313410">we</span> <span m="313710">really</span> <span
  m="314040">like</span> <span m="314370">matrices</span> <span
  m="315060">that</span> <span m="315390">have</span> <span m="315750">a</span>
  <span m="315810">lot</span> <span m="315960">of</span> <span
  m="316080">zeros</span> <span m="316530">here,</span> <span
  m="316770">for</span> <span m="316920">the</span> <span
  m="317040">following</span> <span m="318150">reason--</span> <span
  m="322530">we</span> <span m="322650">say</span> <span m="322830">x</span>
  <span m="323040">is</span> <span m="323160">low</span> <span
  m="323340">rank</span> <span m="328290">if</span> <span m="328470">the</span>
  <span m="328560">following</span> <span m="328950">holds,</span> <span
  m="329340">right?</span> <span m="330330">Because</span> <span
  m="330740">if</span> <span m="331230">we</span> <span m="331350">wanted</span>
  <span m="331590">to</span> <span m="331680">send</span> <span
  m="332010">x</span> <span m="332310">to</span> <span m="332520">our</span>
  <span m="332610">friend--</span> <span m="333120">we're</span> <span
  m="333270">imagining</span> <span m="333780">x</span> <span
  m="334230">as</span> <span m="334290">picture</span> <span
  m="335490">where</span> <span m="335940">each</span> <span
  m="336240">entry</span> <span m="336810">is</span> <span m="337020">a</span>
  <span m="337080">pixel</span> <span m="338310">of</span> <span
  m="338520">that</span> <span m="338850">image.</span></p><p><span
  m="340170">If</span> <span m="340380">that</span> <span
  m="340560">matrix--</span> <span m="341610">that</span> <span
  m="341790">image--</span> <span m="342210">was</span> <span
  m="342450">low</span> <span m="342660">rank,</span> <span m="343710">we</span>
  <span m="343860">could</span> <span m="344070">send</span> <span
  m="344610">the</span> <span m="344910">picture</span> <span
  m="345420">to</span> <span m="345630">our</span> <span
  m="345720">friend</span> <span m="346590">in</span> <span
  m="347310">two</span> <span m="347550">ways.</span> <span m="348870">We</span>
  <span m="349050">could</span> <span m="349200">send</span> <span
  m="350250">one</span> <span m="350730">every</span> <span
  m="351060">single</span> <span m="351420">entry</span> <span
  m="351780">of</span> <span m="351870">x.</span> <span m="353310">And</span>
  <span m="353700">for</span> <span m="354000">us</span> <span
  m="354150">to</span> <span m="354240">do</span> <span m="354390">that,</span>
  <span m="354790">we</span> <span m="354840">would</span> <span
  m="354960">have</span> <span m="355140">to</span> <span m="355230">send</span>
  <span m="355710">n</span> <span m="355920">squared</span> <span
  m="357240">pieces</span> <span m="357630">of</span> <span
  m="357750">information,</span> <span m="358410">because</span> <span
  m="358770">we'd</span> <span m="358920">have</span> <span m="359010">to</span>
  <span m="359100">send</span> <span m="359310">every</span> <span
  m="359550">entry.</span></p><p><span m="361010">But</span> <span
  m="361200">if</span> <span m="361350">x</span> <span m="361650">is</span>
  <span m="361800">sufficiently</span> <span m="362430">low</span> <span
  m="362640">rank,</span> <span m="363300">we</span> <span
  m="363450">could</span> <span m="363630">also</span> <span
  m="363960">send</span> <span m="365130">our</span> <span
  m="365250">friend</span> <span m="365880">the</span> <span
  m="366030">vectors--</span> <span m="367250">u,</span> <span
  m="368410">u1,</span> <span m="369090">v1,</span> <span m="369750">uk,</span>
  <span m="370320">up</span> <span m="370440">to</span> <span
  m="370560">vk.</span> <span m="372240">And</span> <span m="373200">how</span>
  <span m="373980">much</span> <span m="374250">pieces</span> <span
  m="374670">of</span> <span m="374760">data</span> <span
  m="375150">would</span> <span m="375360">we</span> <span
  m="375570">have</span> <span m="375750">to</span> <span m="375870">send</span>
  <span m="376200">our</span> <span m="376290">friend</span> <span
  m="376710">to</span> <span m="376890">get</span> <span m="377130">x</span>
  <span m="377400">to</span> <span m="377520">them</span> <span
  m="378240">if</span> <span m="378390">we</span> <span m="378540">sent</span>
  <span m="378840">in</span> <span m="378960">the</span> <span
  m="379020">low-rank</span> <span m="379530">form?</span></p><p><span
  m="380730">Well,</span> <span m="381240">there's</span> <span
  m="384780">2n</span> <span m="385290">here,</span> <span m="385800">2n</span>
  <span m="386310">here</span> <span m="386580">numbers.</span> <span
  m="387390">There's</span> <span m="387570">k</span> <span m="387810">of</span>
  <span m="387900">them.</span> <span m="388530">So</span> <span
  m="388770">we'd</span> <span m="388890">have</span> <span m="389040">to</span>
  <span m="389130">send</span> <span m="389520">2kn</span> <span
  m="392160">numbers.</span> <span m="393750">And</span> <span
  m="394020">we</span> <span m="394470">strictly</span> <span
  m="395010">say</span> <span m="395340">a</span> <span m="395400">matrix</span>
  <span m="395910">is</span> <span m="396030">low</span> <span
  m="396210">rank</span> <span m="397020">if</span> <span m="399270">it's</span>
  <span m="399420">more</span> <span m="399630">efficient</span> <span
  m="400140">to</span> <span m="400260">send</span> <span m="400590">x</span>
  <span m="400890">to</span> <span m="401040">our</span> <span
  m="401130">friend</span> <span m="401700">in</span> <span
  m="401850">low-rank</span> <span m="402330">form</span> <span
  m="403110">then</span> <span m="403350">in</span> <span
  m="403500">full-rank</span> <span m="404190">form.</span></p><p><span
  m="406650">So</span> <span m="406950">this,</span> <span m="407250">of</span>
  <span m="407310">course,</span> <span m="408030">by</span> <span
  m="408270">a</span> <span m="408330">little</span> <span
  m="408570">calculation,</span> <span m="409800">just</span> <span
  m="409980">shows</span> <span m="410310">us</span> <span
  m="410490">that,</span> <span m="412620">provided</span> <span
  m="413100">the</span> <span m="413190">rank</span> <span m="413640">is</span>
  <span m="413880">less</span> <span m="414210">than</span> <span
  m="414390">half</span> <span m="414780">the</span> <span
  m="414900">size</span> <span m="415290">of</span> <span m="415380">the</span>
  <span m="415440">matrix,</span> <span m="416640">we</span> <span
  m="417030">are</span> <span m="417240">calling</span> <span
  m="417660">the</span> <span m="417750">matrix</span> <span
  m="418620">low</span> <span m="418890">rank.</span></p><p><span
  m="420450">Now,</span> <span m="421350">often,</span> <span
  m="422040">in</span> <span m="422160">practice,</span> <span
  m="425030">we</span> <span m="425210">demand</span> <span
  m="425570">more.</span> <span m="429920">We</span> <span
  m="430070">demand</span> <span m="431540">that</span> <span
  m="431690">k</span> <span m="431990">is</span> <span m="432110">much</span>
  <span m="432440">smaller</span> <span m="434270">than</span> <span
  m="434570">this</span> <span m="434780">number,</span> <span
  m="435260">so</span> <span m="435440">that</span> <span m="435590">it's</span>
  <span m="435860">far</span> <span m="436250">more</span> <span
  m="436550">efficient</span> <span m="437480">to</span> <span
  m="437660">send</span> <span m="437990">our</span> <span
  m="438080">friend</span> <span m="438940">the</span> <span
  m="439100">matrix</span> <span m="439550">x</span> <span m="439850">in</span>
  <span m="439970">low-rank</span> <span m="440360">form</span> <span
  m="441330">than</span> <span m="441550">in</span> <span
  m="441700">full-rank</span> <span m="441970">form.</span> <span
  m="443750">So</span> <span m="443960">the</span> <span
  m="444080">colloquial</span> <span m="444860">use</span> <span
  m="445220">of</span> <span m="445340">the</span> <span m="445460">word</span>
  <span m="445730">low</span> <span m="445910">rank</span> <span
  m="446810">is</span> <span m="447890">kind</span> <span m="448070">of</span>
  <span m="448190">this</span> <span m="448370">situation.</span> <span
  m="449540">But</span> <span m="449720">this</span> <span m="449870">is</span>
  <span m="450020">the</span> <span m="450110">strict</span> <span
  m="450620">definition</span> <span m="451250">of</span> <span
  m="451370">it.</span></p><p><span m="454010">So</span> <span
  m="455600">what</span> <span m="455780">do</span> <span
  m="456710">low-rank</span> <span m="457310">matrices</span> <span
  m="457850">look</span> <span m="458090">like?</span> <span
  m="459600">And</span> <span m="460220">to</span> <span m="460370">do</span>
  <span m="460550">that,</span> <span m="460980">I</span> <span
  m="461000">have</span> <span m="461690">some</span> <span
  m="461870">pictures</span> <span m="462260">for</span> <span
  m="462470">you.</span> <span m="463580">I</span> <span m="463730">have</span>
  <span m="463940">some</span> <span m="464120">flags--</span> <span
  m="464990">the</span> <span m="465110">world</span> <span
  m="465470">flags.</span> <span m="467990">So</span> <span
  m="468360">these</span> <span m="468720">are</span> <span
  m="468780">all</span> <span m="469050">matrices</span> <span
  m="469770">x--</span> <span m="470430">these</span> <span
  m="470700">examples--</span> <span m="471270">because</span> <span
  m="471450">their</span> <span m="471570">flags</span> <span
  m="472020">happen</span> <span m="472320">to</span> <span
  m="472410">not</span> <span m="472560">be</span> <span
  m="472680">square.</span> <span m="474690">I</span> <span
  m="475070">hope</span> <span m="475260">you</span> <span m="475320">can</span>
  <span m="475530">all</span> <span m="475620">see</span> <span
  m="475710">this.</span></p><p><span m="476610">But</span> <span
  m="478540">the</span> <span m="478780">top</span> <span m="479020">row</span>
  <span m="479290">here</span> <span m="479920">are</span> <span
  m="480040">all</span> <span m="480390">matrices</span> <span
  m="481380">that</span> <span m="481630">are</span> <span
  m="482050">extremely</span> <span m="482590">low</span> <span
  m="482770">rank.</span> <span m="484360">For</span> <span
  m="484540">example,</span> <span m="485470">the</span> <span
  m="485620">Austria</span> <span m="486040">flag--</span> <span
  m="486610">if</span> <span m="486730">you</span> <span m="486820">want</span>
  <span m="487000">to</span> <span m="487060">send</span> <span
  m="487300">that</span> <span m="487450">to</span> <span m="487570">your</span>
  <span m="487690">friend,</span> <span m="488350">that</span> <span
  m="488650">matrix</span> <span m="489430">is</span> <span m="489670">of</span>
  <span m="489790">rank</span> <span m="490000">1.</span> <span
  m="491020">So</span> <span m="491350">all</span> <span m="491530">you</span>
  <span m="491620">have</span> <span m="491770">to</span> <span
  m="491860">do</span> <span m="492130">is</span> <span m="492220">send</span>
  <span m="492790">your</span> <span m="492940">friend</span> <span
  m="493240">two</span> <span m="493510">vectors.</span> <span
  m="494740">You</span> <span m="494860">have</span> <span m="495010">to</span>
  <span m="495100">tell</span> <span m="495370">your</span> <span
  m="495520">friend</span> <span m="495730">the</span> <span
  m="495820">column</span> <span m="496180">space</span> <span
  m="497260">and</span> <span m="497380">the</span> <span m="497470">row</span>
  <span m="497710">space.</span> <span m="498250">And</span> <span
  m="498370">there's</span> <span m="498580">only</span> <span
  m="499150">the</span> <span m="499270">dimensions</span> <span
  m="499690">of</span> <span m="499770">one</span> <span m="500020">of</span>
  <span m="500110">both.</span></p><p><span m="501190">For</span> <span
  m="501520">the</span> <span m="501940">English</span> <span
  m="502300">flag,</span> <span m="502720">you</span> <span
  m="502840">need</span> <span m="502990">to</span> <span m="503080">send</span>
  <span m="503350">them</span> <span m="503740">two</span> <span
  m="504460">column</span> <span m="504790">vectors</span> <span
  m="506190">and</span> <span m="506350">two</span> <span m="506560">row</span>
  <span m="506770">vectors--</span> <span m="507640">u1,</span> <span
  m="508780">v1,</span> <span m="509440">u2</span> <span m="510040">and</span>
  <span m="510190">v2.</span> <span m="511900">And</span> <span
  m="512080">as</span> <span m="512230">we</span> <span m="512350">go</span>
  <span m="512530">down</span> <span m="513130">this</span> <span
  m="513370">row,</span> <span m="513760">they</span> <span
  m="513880">get</span> <span m="514090">slowly</span> <span
  m="514659">fuller</span> <span m="515049">and</span> <span
  m="515140">fuller</span> <span m="515440">rank.</span></p><p><span
  m="516289">So</span> <span m="516580">the</span> <span
  m="516730">Japanese</span> <span m="517270">flag,</span> <span
  m="517780">for</span> <span m="517960">example,</span> <span
  m="518440">is</span> <span m="519370">low</span> <span m="519580">rank</span>
  <span m="520360">but</span> <span m="521590">not</span> <span
  m="521799">that</span> <span m="521980">small.</span> <span
  m="523059">The</span> <span m="523270">Scottish</span> <span
  m="523720">flag</span> <span m="524110">is</span> <span
  m="524260">essentially</span> <span m="524650">full</span> <span
  m="524900">rank.</span> <span m="525880">So</span> <span
  m="526840">it's</span> <span m="527110">very</span> <span
  m="527470">inefficient</span> <span m="528010">to</span> <span
  m="528100">send</span> <span m="528340">your</span> <span
  m="528460">friend</span> <span m="528730">the</span> <span
  m="528820">Scottish</span> <span m="529300">flag</span> <span
  m="530350">in</span> <span m="530530">low-rank</span> <span
  m="530980">form.</span> <span m="531340">You're</span> <span
  m="531460">better</span> <span m="531700">off</span> <span
  m="531820">sending</span> <span m="532300">almost</span> <span
  m="532690">every</span> <span m="532900">single</span> <span
  m="533200">entry.</span></p><p><span m="535190">So</span> <span
  m="536530">what</span> <span m="536700">do</span> <span
  m="536870">low-rank</span> <span m="537320">matrices</span> <span
  m="537800">look</span> <span m="538040">like?</span> <span
  m="551360">Well,</span> <span m="553090">if</span> <span m="553240">the</span>
  <span m="553330">matrix</span> <span m="553870">is</span> <span
  m="554110">extremely</span> <span m="554620">low</span> <span
  m="554800">rank,</span> <span m="555250">like</span> <span
  m="555520">rank</span> <span m="555820">1,</span> <span m="556660">then</span>
  <span m="556960">when</span> <span m="557170">you</span> <span
  m="557290">look</span> <span m="557500">at</span> <span m="557590">that</span>
  <span m="557740">matrix--</span> <span m="558340">like</span> <span
  m="558550">here,</span> <span m="558940">like</span> <span
  m="559120">the</span> <span m="559210">flag--</span> <span
  m="559900">it's</span> <span m="560350">highly</span> <span
  m="560800">aligned</span> <span m="561940">with</span> <span
  m="562330">the</span> <span m="564160">coordinates--</span> <span
  m="565420">with</span> <span m="565600">the</span> <span
  m="565690">rows</span> <span m="566080">and</span> <span
  m="566170">columns.</span></p><p><span m="567440">So</span> <span
  m="568150">if</span> <span m="568300">it's</span> <span m="568420">rank</span>
  <span m="568690">1,</span> <span m="571060">the</span> <span
  m="571150">matrix</span> <span m="571630">is</span> <span
  m="571750">highly</span> <span m="572050">aligned--</span> <span
  m="573590">like</span> <span m="573850">the</span> <span
  m="573970">Austria</span> <span m="574360">flag.</span> <span
  m="581050">And</span> <span m="581350">of</span> <span
  m="581440">course,</span> <span m="581770">as</span> <span
  m="581950">we</span> <span m="582130">add</span> <span m="582310">in</span>
  <span m="582430">more</span> <span m="582700">and</span> <span
  m="582790">more</span> <span m="582970">rank</span> <span
  m="583360">here,</span> <span m="583690">the</span> <span
  m="584110">situation</span> <span m="584860">gets</span> <span
  m="585160">a</span> <span m="585220">bit</span> <span
  m="585430">blurry.</span> <span m="586300">For</span> <span
  m="586420">example,</span> <span m="586870">once</span> <span
  m="587140">we</span> <span m="587260">get</span> <span m="587410">into</span>
  <span m="587770">the</span> <span m="587860">medium</span> <span
  m="588400">rank</span> <span m="588730">situation,</span> <span
  m="589450">which</span> <span m="589750">is</span> <span m="589870">a</span>
  <span m="589930">circle,</span> <span m="590860">it's</span> <span
  m="590980">very</span> <span m="591280">hard</span> <span m="591550">to</span>
  <span m="591640">see</span> <span m="591910">that</span> <span
  m="592060">the</span> <span m="592180">circle</span> <span
  m="592750">is</span> <span m="592960">actually,</span> <span
  m="593320">in</span> <span m="593570">fact,</span> <span m="594670">low</span>
  <span m="594910">rank.</span></p><p><span m="596800">But</span> <span
  m="596980">what</span> <span m="597190">I'm</span> <span
  m="597250">going</span> <span m="597520">to</span> <span m="597580">do</span>
  <span m="597820">was</span> <span m="598090">try</span> <span
  m="598330">to</span> <span m="598420">understand</span> <span
  m="598960">why</span> <span m="599350">the</span> <span
  m="600460">Scottish</span> <span m="600880">flag</span> <span
  m="601240">or</span> <span m="601330">diagonal</span> <span
  m="602080">patterns--</span> <span m="603750">particularly</span> <span
  m="605010">a</span> <span m="605440">bad</span> <span
  m="605830">example</span> <span m="606490">for</span> <span
  m="606820">low</span> <span m="607090">rank.</span> <span m="607990">So</span>
  <span m="608260">I'm</span> <span m="608410">going</span> <span
  m="608490">to</span> <span m="608590">take</span> <span m="608830">the</span>
  <span m="608920">triangular</span> <span m="609610">flag</span> <span
  m="612040">to</span> <span m="612310">examine</span> <span
  m="612970">that</span> <span m="613240">more</span> <span
  m="613450">carefully.</span> <span m="615980">So</span> <span
  m="616370">the</span> <span m="616750">triangular</span> <span
  m="617230">flag</span> <span m="618820">looks</span> <span
  m="619030">like--</span> <span m="619600">I'll</span> <span
  m="619660">take</span> <span m="619840">a</span> <span
  m="619900">square</span> <span m="620350">matrix</span> <span
  m="621520">and</span> <span m="621730">I'll</span> <span
  m="624460">color</span> <span m="624880">in</span> <span m="625160">the</span>
  <span m="625580">bottom</span> <span m="625970">half.</span></p><p><span
  m="627110">So</span> <span m="627230">this</span> <span
  m="627440">matrix</span> <span m="628040">is</span> <span
  m="628340">the</span> <span m="628460">matrix</span> <span
  m="628970">of</span> <span m="629120">ones</span> <span
  m="630360">below</span> <span m="630680">the</span> <span
  m="630770">diagonal.</span> <span m="638830">And</span> <span
  m="639010">I'm</span> <span m="639160">interested</span> <span
  m="639640">in</span> <span m="639760">this</span> <span
  m="639940">matrix</span> <span m="640580">and,</span> <span
  m="640660">in</span> <span m="640990">particular,</span> <span
  m="641560">its</span> <span m="641680">singular</span> <span
  m="642070">values,</span> <span m="642490">to</span> <span
  m="642580">try</span> <span m="642790">to</span> <span
  m="642880">understand</span> <span m="643360">why</span> <span
  m="643630">diagonal</span> <span m="644110">patterns</span> <span
  m="645520">are</span> <span m="646000">not</span> <span
  m="646360">particularly</span> <span m="647740">useful</span> <span
  m="648250">for</span> <span m="648730">low-rank</span> <span
  m="650050">compression.</span> <span m="651760">And</span> <span
  m="653350">this</span> <span m="654310">matrix</span> <span
  m="655030">of</span> <span m="655240">all</span> <span m="655330">ones</span>
  <span m="655810">has</span> <span m="656050">a</span> <span
  m="656110">really</span> <span m="656380">nice</span> <span
  m="656680">property</span> <span m="657190">that,</span> <span
  m="657340">if</span> <span m="657460">I</span> <span m="657550">take</span>
  <span m="657760">its</span> <span m="657910">inverse,</span> <span
  m="659260">it</span> <span m="659890">looks</span> <span m="660550">a</span>
  <span m="660580">lot</span> <span m="660790">like--</span> <span
  m="661750">getting</span> <span m="661990">close</span> <span
  m="662320">to</span> <span m="662500">Gil's</span> <span
  m="662980">favorite</span> <span m="663430">matrix.</span></p><p><span
  m="664850">So</span> <span m="665140">if</span> <span m="665290">I</span>
  <span m="665380">take</span> <span m="665620">the</span> <span
  m="665770">inverse</span> <span m="667300">of</span> <span
  m="667510">this</span> <span m="667750">matrix--</span> <span
  m="668550">it</span> <span m="668650">has</span> <span m="668860">an</span>
  <span m="668950">inverse</span> <span m="669370">because</span> <span
  m="669730">it's</span> <span m="670030">got</span> <span
  m="670210">ones</span> <span m="670660">on</span> <span m="670750">the</span>
  <span m="670840">diagonal--</span> <span m="672100">then</span> <span
  m="673030">its</span> <span m="673240">inverse</span> <span
  m="677560">is</span> <span m="677860">the</span> <span
  m="677950">following</span> <span m="680380">matrix,</span> <span
  m="681220">which</span> <span m="681880">people</span> <span
  m="682240">familiar</span> <span m="682720">with</span> <span
  m="682970">finite</span> <span m="683290">difference</span> <span
  m="683710">schemes</span> <span m="684220">will</span> <span
  m="684580">notice</span> <span m="685480">the</span> <span
  m="685810">familiarity</span> <span m="686680">between</span> <span
  m="687010">that</span> <span m="687400">and</span> <span m="687640">the</span>
  <span m="687730">first</span> <span m="688180">order</span> <span
  m="689260">finite</span> <span m="689650">difference</span> <span
  m="690580">approximation.</span></p><p><span m="692770">In</span> <span
  m="692920">particular,</span> <span m="693520">if</span> <span
  m="693730">I</span> <span m="693850">go</span> <span m="694060">a</span> <span
  m="694090">bit</span> <span m="694390">further</span> <span
  m="694810">and</span> <span m="694930">times</span> <span
  m="695500">two</span> <span m="695710">of</span> <span m="695800">these</span>
  <span m="695980">together,</span> <span m="696550">and</span> <span
  m="696670">do</span> <span m="696820">this,</span> <span
  m="699130">then</span> <span m="701110">this</span> <span m="701410">is</span>
  <span m="702100">essentially</span> <span m="702580">Gil's</span> <span
  m="703180">favorite</span> <span m="703630">matrix,</span> <span
  m="705370">except</span> <span m="706000">one</span> <span
  m="706390">entry</span> <span m="707980">happens</span> <span
  m="708310">to</span> <span m="708430">be</span> <span
  m="708550">different--</span> <span m="712540">ends</span> <span
  m="712720">up</span> <span m="712810">being</span> <span
  m="713050">this</span> <span m="713260">matrix,</span> <span
  m="715310">which</span> <span m="715390">is</span> <span
  m="715570">very</span> <span m="715840">close</span> <span
  m="716170">to</span> <span m="716710">the</span> <span
  m="716860">second</span> <span m="717310">order,</span> <span
  m="717820">central,</span> <span m="718990">finite</span> <span
  m="719320">difference</span> <span m="719800">matrix.</span></p><p><span
  m="721210">And</span> <span m="721570">people</span> <span
  m="721870">have</span> <span m="722050">very</span> <span
  m="722350">well</span> <span m="722560">studied</span> <span
  m="722950">that</span> <span m="723130">matrix</span> <span
  m="724240">and</span> <span m="724570">know</span> <span m="724960">its</span>
  <span m="725650">eigenvalues,</span> <span m="726430">its</span> <span
  m="726550">singular</span> <span m="726970">values--</span> <span
  m="727930">they</span> <span m="728080">know</span> <span
  m="728230">everything</span> <span m="728620">about</span> <span
  m="728830">that</span> <span m="728980">matrix.</span> <span
  m="730300">And</span> <span m="730480">you'll</span> <span
  m="730660">remember</span> <span m="731440">that</span> <span
  m="731620">if</span> <span m="731800">we</span> <span m="731950">know</span>
  <span m="732310">the</span> <span m="732460">eigenvalues</span> <span
  m="733900">of</span> <span m="734440">a</span> <span m="734470">matrix,</span>
  <span m="735850">like</span> <span m="736390">x</span> <span
  m="736630">transpose</span> <span m="737140">x,</span> <span
  m="738010">we</span> <span m="738250">know</span> <span m="738700">the</span>
  <span m="739120">singular</span> <span m="739570">values</span> <span
  m="739960">of</span> <span m="740170">x.</span> <span m="741610">So</span>
  <span m="742030">this</span> <span m="742270">allows</span> <span
  m="742660">us</span> <span m="742870">to</span> <span m="742990">show,</span>
  <span m="745030">by</span> <span m="745450">the</span> <span
  m="745570">fact</span> <span m="745810">that</span> <span m="745930">we</span>
  <span m="746080">know</span> <span m="746260">that,</span> <span
  m="747132">that</span> <span m="747570">the</span> <span
  m="747700">singular</span> <span m="748090">values</span> <span
  m="750430">of</span> <span m="750580">this</span> <span
  m="750790">matrix</span> <span m="752590">are</span> <span
  m="752680">not</span> <span m="752920">very</span> <span
  m="753190">amenable</span> <span m="754090">to</span> <span
  m="754330">low</span> <span m="754540">rank.</span> <span
  m="754990">They're</span> <span m="755200">all</span> <span
  m="755410">non-zero,</span> <span m="757060">and</span> <span
  m="757330">they</span> <span m="757450">don't</span> <span
  m="757660">even</span> <span m="757870">decay.</span></p><p><span
  m="759400">So</span> <span m="761050">I'm</span> <span
  m="761170">getting</span> <span m="761440">this</span> <span
  m="761590">from--</span> <span m="764520">I</span> <span
  m="764700">rang</span> <span m="765000">up</span> <span m="765120">Gil,</span>
  <span m="765840">and</span> <span m="766020">Gil</span> <span
  m="766260">tells</span> <span m="766560">me</span> <span
  m="766770">these</span> <span m="766980">numbers.</span> <span
  m="774670">That</span> <span m="774930">allows</span> <span
  m="775230">us</span> <span m="775350">to</span> <span m="775440">work</span>
  <span m="775800">out</span> <span m="775980">exactly</span> <span
  m="776580">what</span> <span m="776760">the</span> <span
  m="776880">singular</span> <span m="777300">values</span> <span
  m="777660">of</span> <span m="777750">this</span> <span
  m="777930">matrix</span> <span m="778350">are,</span> <span
  m="778500">from</span> <span m="778860">the</span> <span
  m="779100">connection</span> <span m="779760">to</span> <span
  m="780030">finite</span> <span m="780420">differences.</span></p><p><span
  m="782130">And</span> <span m="782250">so</span> <span m="782430">we</span>
  <span m="782670">can</span> <span m="783030">understand</span> <span
  m="783600">why</span> <span m="783780">this</span> <span m="783990">is</span>
  <span m="784110">not</span> <span m="784260">good</span> <span
  m="784590">by</span> <span m="784800">looking</span> <span
  m="785130">at</span> <span m="785250">the</span> <span
  m="785340">singular</span> <span m="785730">values.</span> <span
  m="786700">So</span> <span m="786840">the</span> <span m="786930">first</span>
  <span m="787300">singular</span> <span m="787650">value</span> <span
  m="787980">of</span> <span m="788100">x</span> <span m="789360">from</span>
  <span m="789600">this</span> <span m="789780">expression</span> <span
  m="790410">is</span> <span m="790620">going</span> <span m="790710">to</span>
  <span m="790830">be</span> <span m="791100">approximately</span> <span
  m="793590">2n</span> <span m="793890">over</span> <span m="794250">pi.</span>
  <span m="795960">And</span> <span m="796320">from</span> <span
  m="796530">this</span> <span m="796710">expression,</span> <span
  m="797190">again,</span> <span m="797670">for</span> <span
  m="797730">the</span> <span m="797790">last</span> <span
  m="798150">guy--</span> <span m="799110">the</span> <span
  m="799630">last</span> <span m="799960">singular</span> <span
  m="800490">value</span> <span m="800820">of</span> <span m="800940">x</span>
  <span m="802800">is</span> <span m="803160">going</span> <span
  m="803260">to</span> <span m="803370">be</span> <span
  m="803460">approximately</span> <span m="804150">a</span> <span
  m="804210">half.</span></p><p><span m="806430">So</span> <span
  m="806880">these</span> <span m="807210">singular</span> <span
  m="807630">values</span> <span m="808020">are</span> <span
  m="808080">all</span> <span m="808260">large.</span> <span
  m="808890">They're</span> <span m="809070">not</span> <span
  m="809250">getting</span> <span m="809490">close</span> <span
  m="809760">to</span> <span m="809880">zero.</span> <span m="811110">If</span>
  <span m="811290">I</span> <span m="811380">plotted</span> <span
  m="812370">these</span> <span m="812550">singular</span> <span
  m="813060">values</span> <span m="815040">on</span> <span m="815190">a</span>
  <span m="815250">graph--</span> <span m="817070">so</span> <span
  m="817260">here's</span> <span m="817940">the</span> <span
  m="818040">first</span> <span m="818410">singular</span> <span
  m="818730">value,</span> <span m="819690">the</span> <span
  m="819780">second,</span> <span m="820680">and</span> <span
  m="820870">the</span> <span m="821010">n-th--</span> <span
  m="823040">then</span> <span m="823440">what</span> <span
  m="823620">would</span> <span m="823830">the</span> <span
  m="823920">graph</span> <span m="824280">look</span> <span
  m="824490">like?</span></p><p><span m="825210">Well,</span> <span
  m="826910">plot</span> <span m="827360">these</span> <span
  m="827630">numbers.</span> <span m="831330">Divide</span> <span
  m="831790">by</span> <span m="832000">this</span> <span m="832085">guy</span>
  <span m="833290">so</span> <span m="833470">that</span> <span
  m="833620">they</span> <span m="833830">all</span> <span m="834190">are</span>
  <span m="834310">bounded</span> <span m="834940">between</span> <span
  m="835600">1</span> <span m="836800">and</span> <span m="836980">0</span>
  <span m="838570">because</span> <span m="838900">of</span> <span
  m="838990">the</span> <span m="839080">normalization,</span> <span
  m="839800">because</span> <span m="839980">I</span> <span
  m="840070">divided</span> <span m="840430">by</span> <span
  m="840610">sigma</span> <span m="841060">1</span> <span m="841360">of</span>
  <span m="841450">x.</span></p><p><span m="843190">And</span> <span
  m="843550">so</span> <span m="844000">we</span> <span m="844210">can</span>
  <span m="844360">plot</span> <span m="844600">them,</span> <span
  m="844840">and</span> <span m="844930">they</span> <span
  m="845080">will</span> <span m="845230">look</span> <span
  m="845470">like</span> <span m="850800">this</span> <span
  m="851040">kind</span> <span m="851250">of</span> <span
  m="851310">thing.</span> <span m="855150">This</span> <span
  m="855360">number</span> <span m="855660">happens</span> <span
  m="856050">to</span> <span m="856140">be</span> <span m="856350">here</span>
  <span m="856650">where</span> <span m="856830">they</span> <span
  m="858180">come</span> <span m="858510">to</span> <span m="858690">be</span>
  <span m="859420">pi</span> <span m="859740">over</span> <span
  m="859870">4n,</span> <span m="861600">which</span> <span m="861780">is</span>
  <span m="861900">me</span> <span m="862080">dividing</span> <span
  m="862740">this</span> <span m="862950">number</span> <span
  m="863220">by</span> <span m="863400">this</span> <span
  m="863580">number,</span> <span m="864350">approximately.</span></p><p><span
  m="867540">So</span> <span m="867990">triangular</span> <span
  m="868680">patterns</span> <span m="869310">are</span> <span
  m="869550">extremely</span> <span m="870030">bad</span> <span
  m="870330">for</span> <span m="870480">low</span> <span
  m="870660">rank.</span> <span m="872071">We</span> <span
  m="872250">need</span> <span m="872640">things--</span> <span
  m="872995">or</span> <span m="873570">we</span> <span m="873690">at
  least</span> <span m="874020">intuitively</span> <span m="874740">think</span>
  <span m="875040">that</span> <span m="875190">we</span> <span
  m="875340">need</span> <span m="875640">things--</span> <span
  m="875970">aligned</span> <span m="877050">with</span> <span
  m="877260">the</span> <span m="877320">rows</span> <span m="877620">and</span>
  <span m="877710">columns,</span> <span m="879120">but</span> <span
  m="879390">the</span> <span m="879480">circle</span> <span
  m="879930">case</span> <span m="881880">happens</span> <span
  m="882210">to</span> <span m="882300">also</span> <span m="882600">be</span>
  <span m="882750">low</span> <span m="882870">rank.</span> <span
  m="885570">And</span> <span m="887490">so</span> <span m="887730">what</span>
  <span m="887940">happened</span> <span m="888240">to</span> <span
  m="888360">the</span> <span m="888450">Japanese</span> <span
  m="889020">flag?</span> <span m="894300">Why</span> <span m="894930">is</span>
  <span m="895320">the</span> <span m="895470">Japanese</span> <span
  m="896010">flag</span> <span m="896640">convenient</span> <span
  m="897360">for</span> <span m="898320">low</span> <span
  m="898590">rank?</span></p><p><span m="899970">Well</span> <span
  m="901800">it's</span> <span m="901980">the</span> <span
  m="902070">fact</span> <span m="902340">that</span> <span
  m="902430">it's</span> <span m="902550">a</span> <span
  m="902610">circle,</span> <span m="903420">and</span> <span
  m="903600">there's</span> <span m="903750">lots</span> <span
  m="903930">of</span> <span m="904020">symmetry</span> <span
  m="904710">in</span> <span m="904890">a</span> <span m="904950">circle.</span>
  <span m="906340">So</span> <span m="906360">if</span> <span
  m="906480">I</span> <span m="906570">try</span> <span m="906760">to</span>
  <span m="906870">look</span> <span m="907050">at</span> <span
  m="907140">the</span> <span m="907230">rank</span> <span m="908160">of</span>
  <span m="908310">a</span> <span m="908370">circle,</span> <span
  m="910750">the</span> <span m="910850">Japanese</span> <span
  m="911250">flag,</span> <span m="913740">then</span> <span m="914760">I</span>
  <span m="914880">can</span> <span m="916410">bound</span> <span
  m="916710">this</span> <span m="916950">rank</span> <span m="918090">by</span>
  <span m="919170">decomposing</span> <span m="920100">the</span> <span
  m="920250">Japanese</span> <span m="920760">flag</span> <span
  m="921870">into</span> <span m="922350">two</span> <span
  m="922680">things.</span> <span m="924130">So</span> <span
  m="924270">this</span> <span m="924450">is</span> <span
  m="924570">going</span> <span m="924670">to</span> <span m="924780">be</span>
  <span m="924900">less</span> <span m="925230">than</span> <span
  m="925740">or</span> <span m="925920">equal</span> <span m="926160">to</span>
  <span m="926820">the</span> <span m="926940">rank</span> <span
  m="928140">of</span> <span m="929010">sum</span> <span m="929460">of</span>
  <span m="929580">two</span> <span m="929820">matrices,</span> <span
  m="931170">and</span> <span m="931380">I'll</span> <span m="931530">do</span>
  <span m="931890">it</span> <span m="932020">so</span> <span
  m="932190">that</span> <span m="932340">the</span> <span
  m="932460">decomposition</span> <span m="933150">works</span> <span
  m="933480">out.</span></p><p><span m="934050">I</span> <span
  m="934170">have</span> <span m="934350">the</span> <span
  m="934440">circle.</span> <span m="935430">I'm</span> <span
  m="935550">going</span> <span m="935630">to</span> <span m="935730">cut</span>
  <span m="936060">out</span> <span m="937610">a</span> <span
  m="937670">rank</span> <span m="938090">one</span> <span
  m="938360">piece</span> <span m="939810">that</span> <span
  m="940040">lives</span> <span m="940280">in</span> <span m="940370">the</span>
  <span m="940460">middle</span> <span m="940730">of</span> <span
  m="940820">this</span> <span m="940970">circle.</span> <span
  m="947550">OK?</span> <span m="947940">And I'm</span> <span
  m="948050">going</span> <span m="948170">to</span> <span m="948230">cut</span>
  <span m="948470">out</span> <span m="948680">a</span> <span
  m="948770">square</span> <span m="950210">from</span> <span
  m="950510">the</span> <span m="950690">interior</span> <span
  m="951360">of</span> <span m="951540">that</span> <span
  m="953670">circle.</span> <span m="954650">OK?</span> <span
  m="955490">And</span> <span m="955620">I</span> <span m="955710">can</span>
  <span m="956010">figure</span> <span m="956340">out--</span> <span
  m="956610">of</span> <span m="956730">course</span> <span
  m="956940">the</span> <span m="957060">rank</span> <span m="957420">is</span>
  <span m="957540">just</span> <span m="957690">bounded</span> <span
  m="958110">by</span> <span m="958290">the</span> <span m="958380">sum</span>
  <span m="958650">of</span> <span m="958770">those</span> <span
  m="958920">two</span> <span m="959100">ranks.</span> <span
  m="960630">This</span> <span m="960990">guy</span> <span m="961410">is</span>
  <span m="961800">bounded</span> <span m="962160">by</span> <span
  m="962340">rank</span> <span m="962610">one</span> <span
  m="963480">because</span> <span m="963780">it's</span> <span
  m="963900">highly</span> <span m="964320">aligned</span> <span
  m="964770">with</span> <span m="964950">the</span> <span
  m="965010">grid.</span> <span m="969570">So</span> <span
  m="969670">this</span> <span m="969880">guy</span> <span m="970060">is</span>
  <span m="970150">bounded</span> <span m="970450">by</span> <span
  m="970600">rank</span> <span m="970840">one.</span> <span m="971800">So</span>
  <span m="976820">this</span> <span m="977060">thing</span> <span
  m="977783">here</span> <span m="982620">plus</span> <span
  m="983090">1.</span></p><p><span m="986010">And</span> <span
  m="987030">now</span> <span m="987720">I</span> <span m="987870">have</span>
  <span m="988050">to</span> <span m="988170">try</span> <span
  m="988500">to</span> <span m="988650">understand</span> <span
  m="989280">the</span> <span m="989430">rank</span> <span m="989910">of</span>
  <span m="990240">this</span> <span m="991050">piece.</span> <span
  m="992820">Now</span> <span m="993330">this</span> <span
  m="993570">piece</span> <span m="993870">has</span> <span
  m="994080">lots</span> <span m="994410">of</span> <span
  m="994500">symmetry.</span> <span m="995910">For</span> <span
  m="996090">example,</span> <span m="996600">we</span> <span
  m="996750">know</span> <span m="997020">that</span> <span
  m="997350">the</span> <span m="998400">rank</span> <span m="998730">of</span>
  <span m="998850">that</span> <span m="999030">matrix</span> <span
  m="999690">is</span> <span m="999930">the</span> <span
  m="1000050">dimension</span> <span m="1000710">of</span> <span
  m="1000830">the</span> <span m="1001610">column</span> <span
  m="1001940">space</span> <span m="1003320">and</span> <span
  m="1003560">the</span> <span m="1003680">dimension</span> <span
  m="1004070">of</span> <span m="1004160">the</span> <span
  m="1004250">row</span> <span m="1004520">space.</span> <span
  m="1006360">So</span> <span m="1006650">when</span> <span
  m="1006860">we</span> <span m="1006980">look</span> <span
  m="1007190">at</span> <span m="1007280">this</span> <span
  m="1007460">matrix,</span> <span m="1007940">because</span> <span
  m="1008300">of</span> <span m="1008390">symmetry,</span> <span
  m="1009650">if</span> <span m="1009800">I</span> <span
  m="1009890">divide</span> <span m="1010340">this</span> <span
  m="1010580">matrix</span> <span m="1011030">in</span> <span
  m="1011150">half</span> <span m="1013460">along</span> <span
  m="1013700">the</span> <span m="1013790">columns,</span> <span
  m="1015230">all</span> <span m="1015410">the</span> <span
  m="1015500">columns</span> <span m="1015920">on</span> <span
  m="1016040">the</span> <span m="1016100">left</span> <span
  m="1016760">appear</span> <span m="1017090">on</span> <span
  m="1017210">the</span> <span m="1017300">right.</span> <span
  m="1018320">So</span> <span m="1019790">for</span> <span
  m="1020000">example,</span> <span m="1020390">the</span> <span
  m="1020480">rank</span> <span m="1020750">of</span> <span
  m="1020840">this</span> <span m="1021020">matrix</span> <span
  m="1021920">is</span> <span m="1022070">the</span> <span
  m="1022160">same</span> <span m="1022520">as</span> <span
  m="1022640">the</span> <span m="1022730">rank</span> <span
  m="1023720">of</span> <span m="1023870">that</span> <span
  m="1024050">matrix</span> <span m="1024589">because</span> <span
  m="1024859">I</span> <span m="1024920">didn't</span> <span
  m="1025099">change</span> <span m="1025430">the</span> <span
  m="1025520">column</span> <span m="1025849">space.</span> <span
  m="1027880">OK?</span></p><p><span m="1028430">Now</span> <span
  m="1028670">I</span> <span m="1028760">go</span> <span
  m="1028910">again</span> <span m="1029750">and</span> <span
  m="1029960">divide</span> <span m="1030500">along</span> <span
  m="1030770">the</span> <span m="1030859">rows,</span> <span
  m="1033650">and</span> <span m="1034220">now</span> <span
  m="1035000">the</span> <span m="1035180">row</span> <span
  m="1035660">dimension</span> <span m="1036170">of</span> <span
  m="1036290">this</span> <span m="1036589">matrix</span> <span
  m="1037819">is</span> <span m="1038089">the</span> <span
  m="1038180">same</span> <span m="1038569">as</span> <span
  m="1038660">the</span> <span m="1038750">top</span> <span
  m="1039020">half,</span> <span m="1039380">because</span> <span
  m="1039740">as</span> <span m="1039890">I</span> <span m="1040010">wipe</span>
  <span m="1040310">out</span> <span m="1040490">those,</span> <span
  m="1040880">I</span> <span m="1040970">didn't</span> <span
  m="1041180">change</span> <span m="1041599">the</span> <span
  m="1041720">dimension</span> <span m="1042200">of</span> <span
  m="1042290">the</span> <span m="1042380">row</span> <span
  m="1042589">space</span> <span m="1043130">because</span> <span
  m="1043550">the</span> <span m="1043640">rows</span> <span
  m="1043940">are</span> <span m="1044000">the</span> <span
  m="1044089">same</span> <span m="1044480">top-bottom.</span> <span
  m="1046079">And</span> <span m="1046359">so</span> <span
  m="1046480">this</span> <span m="1046630">becomes</span> <span
  m="1047140">the</span> <span m="1047260">rank</span> <span
  m="1047680">of</span> <span m="1047829">that</span> <span
  m="1048369">tiny</span> <span m="1048790">little</span> <span
  m="1049090">matrix</span> <span m="1049590">there.</span> <span
  m="1050650">And</span> <span m="1051220">because</span> <span
  m="1051490">it's</span> <span m="1051580">small,</span> <span
  m="1052990">it</span> <span m="1053140">won't</span> <span
  m="1053380">have</span> <span m="1053620">too</span> <span
  m="1053860">large</span> <span m="1054050">a</span> <span
  m="1054220">rank.</span> <span m="1055840">So</span> <span
  m="1056200">this</span> <span m="1056440">is</span> <span
  m="1059140">definitely</span> <span m="1059530">less</span> <span
  m="1059830">than--</span> <span m="1060010">if</span> <span
  m="1060160">I</span> <span m="1060220">divide</span> <span
  m="1060610">that</span> <span m="1060730">up,</span> <span
  m="1062978">a</span> <span m="1063430">little</span> <span
  m="1063700">guy</span> <span m="1064000">here</span> <span
  m="1064990">looks</span> <span m="1065230">like</span> <span
  m="1065440">that</span> <span m="1067390">plus</span> <span
  m="1068560">the</span> <span m="1068650">other</span> <span
  m="1068860">guy</span> <span m="1070120">that</span> <span
  m="1070330">looks</span> <span m="1070600">like</span> <span
  m="1076550">that</span> <span m="1078240">plus</span> <span
  m="1078550">1.</span></p><p><span m="1080450">And</span> <span
  m="1080570">so</span> <span m="1081200">of</span> <span
  m="1081320">course</span> <span m="1081770">the</span> <span
  m="1084500">row</span> <span m="1084905">space</span> <span
  m="1085070">of</span> <span m="1085190">this</span> <span
  m="1085550">matrix</span> <span m="1087270">cannot</span> <span
  m="1087540">be</span> <span m="1087660">very</span> <span
  m="1087900">high</span> <span m="1088140">because</span> <span
  m="1088380">this</span> <span m="1088590">is</span> <span m="1088710">a</span>
  <span m="1088740">very</span> <span m="1088980">thin</span> <span
  m="1089340">matrix.</span> <span m="1090030">There's</span> <span
  m="1090690">lots</span> <span m="1090870">of</span> <span
  m="1090930">zeros</span> <span m="1091380">in</span> <span
  m="1091470">that</span> <span m="1091590">matrix,</span> <span
  m="1092160">only</span> <span m="1092400">a</span> <span
  m="1092430">few</span> <span m="1092640">ones.</span> <span
  m="1093800">And</span> <span m="1093990">so</span> <span
  m="1094170">you</span> <span m="1094350">can</span> <span
  m="1094470">go</span> <span m="1094650">along</span> <span
  m="1095040">and</span> <span m="1095160">do</span> <span m="1095310">a</span>
  <span m="1095370">bit</span> <span m="1095520">of</span> <span
  m="1095610">trig</span> <span m="1096600">to</span> <span
  m="1096720">try</span> <span m="1096960">to</span> <span
  m="1097050">figure</span> <span m="1097350">out</span> <span
  m="1098160">how</span> <span m="1098670">many</span> <span
  m="1098880">rows</span> <span m="1099480">are</span> <span
  m="1099570">non-zero</span> <span m="1100860">in</span> <span
  m="1101010">this</span> <span m="1101250">matrix.</span></p><p><span
  m="1102420">And</span> <span m="1102840">a</span> <span m="1102900">bit</span>
  <span m="1103080">of</span> <span m="1103170">trig</span> <span
  m="1104700">tells</span> <span m="1105030">you--</span> <span
  m="1105660">well</span> <span m="1105840">it</span> <span
  m="1105930">depends</span> <span m="1106260">on</span> <span
  m="1106350">the</span> <span m="1106410">radius</span> <span
  m="1106890">of</span> <span m="1107010">this</span> <span
  m="1107310">original</span> <span m="1108690">circle.</span> <span
  m="1109630">So</span> <span m="1109650">if</span> <span m="1109740">I</span>
  <span m="1109830">make</span> <span m="1110310">the</span> <span
  m="1110370">original</span> <span m="1110730">radius</span> <span
  m="1111210">r</span> <span m="1111900">of</span> <span m="1112050">this</span>
  <span m="1112290">Japanese</span> <span m="1113070">flag,</span> <span
  m="1114120">then</span> <span m="1114720">the</span> <span
  m="1114870">bound</span> <span m="1115440">that</span> <span
  m="1115620">you</span> <span m="1115830">end</span> <span
  m="1116010">up</span> <span m="1116100">getting</span> <span
  m="1117000">will</span> <span m="1117150">be,</span> <span
  m="1118110">for</span> <span m="1118290">this</span> <span
  m="1118440">matrix,</span> <span m="1119340">r</span> <span
  m="1119746">1</span> <span m="1120560">minus</span> <span
  m="1120930">square</span> <span m="1121320">root</span> <span
  m="1121600">2</span> <span m="1122320">over</span> <span m="1122920">2</span>
  <span m="1123710">for</span> <span m="1123840">this</span> <span
  m="1124050">guy.</span> <span m="1124570">That's a bit</span> <span
  m="1124820">of</span> <span m="1124890">trig.</span> <span m="1126020">I've
  got to</span> <span m="1126540">make</span> <span m="1126690">sure</span>
  <span m="1126870">that's</span> <span m="1127020">an</span> <span
  m="1127110">integer.</span> <span m="1128220">And</span> <span
  m="1128400">then</span> <span m="1128550">again,</span> <span
  m="1128850">here</span> <span m="1129020">it's</span> <span
  m="1129150">the</span> <span m="1129240">same</span> <span
  m="1129980">but</span> <span m="1130200">for</span> <span
  m="1130350">the</span> <span m="1130440">column</span> <span
  m="1130740">space.</span> <span m="1132160">So</span> <span
  m="1132180">this</span> <span m="1132330">is</span> <span
  m="1132420">me</span> <span m="1132630">just</span> <span
  m="1132810">doing</span> <span m="1133050">trig.</span> <span
  m="1136230">OK?</span></p><p><span m="1136640">And</span> <span
  m="1136740">that's</span> <span m="1136980">bound</span> <span
  m="1137340">on</span> <span m="1137430">the</span> <span
  m="1137520">rank.</span> <span m="1137870">It</span> <span
  m="1137940">happens</span> <span m="1138270">to</span> <span
  m="1138360">be</span> <span m="1138480">extremely</span> <span
  m="1138930">good.</span> <span m="1139650">And</span> <span
  m="1139800">if</span> <span m="1139890">you</span> <span
  m="1139980">work</span> <span m="1140310">out</span> <span
  m="1141360">what</span> <span m="1141600">that</span> <span
  m="1141810">rank</span> <span m="1142170">is</span> <span
  m="1142440">and</span> <span m="1142560">try</span> <span
  m="1142740">to</span> <span m="1142860">look</span> <span
  m="1143010">back,</span> <span m="1143540">you</span> <span
  m="1143640">will</span> <span m="1143730">find</span> <span
  m="1144030">it's</span> <span m="1144150">extremely</span> <span
  m="1144660">efficient</span> <span m="1145170">to</span> <span
  m="1145350">send</span> <span m="1146160">the</span> <span
  m="1146250">Japanese</span> <span m="1146760">flag</span> <span
  m="1147150">to</span> <span m="1147270">your</span> <span
  m="1147450">friend</span> <span m="1148410">in</span> <span
  m="1148560">low</span> <span m="1148770">rank</span> <span
  m="1149070">form,</span> <span m="1150790">because</span> <span
  m="1150970">it's</span> <span m="1151090">not</span> <span
  m="1151270">full</span> <span m="1151450">rank</span> <span
  m="1151840">because</span> <span m="1152110">these</span> <span
  m="1152320">numbers</span> <span m="1152620">are</span> <span
  m="1152680">so</span> <span m="1152890">small.</span> <span
  m="1153760">So</span> <span m="1153880">this</span> <span
  m="1154360">comes</span> <span m="1154630">out</span> <span
  m="1154780">to</span> <span m="1154870">be,</span> <span
  m="1155460">like,</span> <span m="1155840">approximately</span> <span
  m="1156760">1/2</span> <span m="1157510">r</span> <span
  m="1158870">plus</span> <span m="1159240">1.</span> <span
  m="1161080">So</span> <span m="1161290">much</span> <span
  m="1161530">smaller</span> <span m="1161890">than</span> <span
  m="1162040">what</span> <span m="1162220">you</span> <span
  m="1162370">would</span> <span m="1162580">expect,</span> <span
  m="1163750">because</span> <span m="1164200">remember,</span> <span
  m="1164530">a circle</span> <span m="1165010">is</span> <span
  m="1165130">almost</span> <span m="1166060">the</span> <span
  m="1166300">anti-version</span> <span m="1166870">version</span> <span
  m="1167350">of</span> <span m="1167500">a line</span> <span
  m="1167860">with</span> <span m="1168010">the</span> <span
  m="1168100">grid,</span> <span m="1169450">but</span> <span
  m="1169570">yet,</span> <span m="1169730">it's</span> <span
  m="1169840">still</span> <span m="1170050">low</span> <span
  m="1170200">rank.</span> <span m="1172860">OK.</span></p><p><span
  m="1175050">Now</span> <span m="1175510">most</span> <span
  m="1176470">matrices</span> <span m="1177100">that</span> <span
  m="1177220">we</span> <span m="1177370">come</span> <span
  m="1179170">up</span> <span m="1179350">with</span> <span
  m="1179680">in</span> <span m="1179890">computational</span> <span
  m="1180520">math</span> <span m="1181270">are</span> <span
  m="1181390">not</span> <span m="1181720">exactly</span> <span
  m="1182350">of</span> <span m="1182440">finite</span> <span
  m="1183130">rank.</span> <span m="1184600">They</span> <span
  m="1184780">are</span> <span m="1185020">of</span> <span
  m="1185560">numerical</span> <span m="1186280">rank.</span> <span
  m="1188860">And</span> <span m="1189010">so</span> <span
  m="1189250">I'll</span> <span m="1189490">just</span> <span
  m="1189670">define</span> <span m="1190060">that.</span> <span
  m="1191390">So</span> <span m="1194920">the</span> <span
  m="1195010">numerical</span> <span m="1195580">rank</span> <span
  m="1196750">of</span> <span m="1196900">a</span> <span
  m="1196950">matrix</span> <span m="1198060">is</span> <span
  m="1198190">very</span> <span m="1198430">similar</span> <span
  m="1198730">to</span> <span m="1198850">the</span> <span
  m="1198970">rank,</span> <span m="1199330">except</span> <span
  m="1199630">we</span> <span m="1199810">allow</span> <span
  m="1200170">ourselves</span> <span m="1201190">a</span> <span
  m="1201250">little</span> <span m="1201520">bit</span> <span
  m="1201670">of</span> <span m="1201790">wiggle</span> <span
  m="1202150">room</span> <span m="1202720">when</span> <span
  m="1202900">we</span> <span m="1203020">define</span> <span
  m="1203440">it,</span> <span m="1204310">and</span> <span
  m="1204490">so</span> <span m="1204670">that</span> <span
  m="1204850">amount</span> <span m="1205090">of</span> <span
  m="1205210">wiggle</span> <span m="1205510">room</span> <span
  m="1206260">will</span> <span m="1206410">be</span> <span
  m="1207190">of</span> <span m="1208210">parameter</span> <span
  m="1209110">called</span> <span m="1209500">tol</span> <span
  m="1210730">called</span> <span m="1211000">epsilon.</span> <span
  m="1212140">That's</span> <span m="1212380">a</span> <span
  m="1212440">tolerance.</span> <span m="1213010">I'm</span> <span
  m="1213100">thinking</span> <span m="1213340">of</span> <span
  m="1213430">epsilon</span> <span m="1214150">as</span> <span
  m="1214330">a</span> <span m="1214390">tolerance.</span> <span
  m="1216436">That's</span> <span m="1217100">the</span> <span
  m="1217190">amount</span> <span m="1217430">of</span> <span
  m="1217520">wiggle</span> <span m="1217820">room</span> <span
  m="1218090">I'm</span> <span m="1218210">going</span> <span
  m="1218310">to</span> <span m="1218420">give</span> <span
  m="1218570">myself.</span> <span m="1221110">OK.</span></p><p><span
  m="1222140">And</span> <span m="1223280">we</span> <span
  m="1223430">say</span> <span m="1223700">that</span> <span
  m="1224300">the</span> <span m="1224420">numerical</span> <span
  m="1224990">rank--</span> <span m="1227240">I'll</span> <span m="1227720">put
  an</span> <span m="1227960">epsilon</span> <span m="1228350">there to</span>
  <span m="1228770">denote</span> <span m="1229130">numerical</span> <span
  m="1229670">rank--</span> <span m="1231350">is</span> <span
  m="1231530">k.</span> <span m="1234170">k</span> <span m="1234530">is</span>
  <span m="1234680">the</span> <span m="1234770">first</span> <span
  m="1235310">singular</span> <span m="1235790">value,</span> <span
  m="1236540">or</span> <span m="1236630">the</span> <span
  m="1236750">last</span> <span m="1237020">singular</span> <span
  m="1237320">value,</span> <span m="1237650">above</span> <span
  m="1238070">epsilon.</span> <span m="1239120">In</span> <span
  m="1239270">the</span> <span m="1239330">following</span> <span
  m="1239750">sense,</span> <span m="1240170">I'm</span> <span
  m="1240320">copying</span> <span m="1240830">the</span> <span
  m="1241010">definition</span> <span m="1241550">above</span> <span
  m="1242370">but</span> <span m="1242510">with</span> <span
  m="1242690">epsilons</span> <span m="1243260">instead</span> <span
  m="1243530">of</span> <span m="1243620">zeros.</span> <span
  m="1245090">If</span> <span m="1245420">this</span> <span
  m="1245630">singular</span> <span m="1245990">value</span> <span
  m="1246860">is</span> <span m="1247070">less</span> <span
  m="1247400">than</span> <span m="1248390">epsilon,</span> <span
  m="1251430">relatively,</span> <span m="1252960">and</span> <span
  m="1253650">the</span> <span m="1253770">kth</span> <span m="1254400">one
  was</span> <span m="1254640">not</span> <span m="1255600">below.</span> <span
  m="1256220">So</span> <span m="1257250">k</span> <span m="1257670">plus</span>
  <span m="1257940">1</span> <span m="1258210">is</span> <span
  m="1258330">the</span> <span m="1258420">first</span> <span
  m="1258720">singular</span> <span m="1259050">value</span> <span
  m="1259750">below</span> <span m="1260280">epsilon</span> <span
  m="1260880">in</span> <span m="1261000">this</span> <span
  m="1261210">relative</span> <span m="1261900">sense.</span></p><p><span
  m="1263130">So</span> <span m="1263550">of</span> <span
  m="1263700">course</span> <span m="1265290">the</span> <span
  m="1265380">rank</span> <span m="1267120">of</span> <span
  m="1267800">0x,</span> <span m="1269430">if</span> <span
  m="1269580">that</span> <span m="1269820">was</span> <span
  m="1269940">defined,</span> <span m="1270480">is</span> <span
  m="1270630">the</span> <span m="1270720">same</span> <span
  m="1271080">as</span> <span m="1271740">the</span> <span
  m="1271830">rank</span> <span m="1272130">of</span> <span
  m="1272280">x.</span> <span m="1273480">OK?</span> <span m="1274290">So</span>
  <span m="1274470">this</span> <span m="1274650">is</span> <span
  m="1274740">just</span> <span m="1274950">allowing</span> <span
  m="1275340">ourselves</span> <span m="1275760">some</span> <span
  m="1275970">wiggle</span> <span m="1276240">room.</span> <span
  m="1277540">But</span> <span m="1277770">this</span> <span
  m="1278070">is</span> <span m="1278220">actually</span> <span
  m="1278520">what</span> <span m="1278700">we're</span> <span
  m="1278850">interested</span> <span m="1279420">more</span> <span
  m="1279840">in</span> <span m="1280050">practice.</span> <span m="1281040">All
  right?</span> <span m="1281370">I</span> <span m="1281670">don't</span> <span
  m="1281820">want</span> <span m="1281970">to</span> <span
  m="1282030">necessarily</span> <span m="1282660">send</span> <span
  m="1282960">my</span> <span m="1283200">friend</span> <span
  m="1283560">the</span> <span m="1283650">flag</span> <span
  m="1284340">to</span> <span m="1284640">exact</span> <span
  m="1285090">precision.</span> <span m="1286170">I</span> <span
  m="1286230">would</span> <span m="1286350">actually</span> <span
  m="1286560">be</span> <span m="1286710">happy</span> <span
  m="1287100">to</span> <span m="1287250">send</span> <span
  m="1287520">my</span> <span m="1287670">friend</span> <span
  m="1288060">the</span> <span m="1288150">flag</span> <span
  m="1288900">up</span> <span m="1289080">to</span> <span m="1289320">16</span>
  <span m="1289950">digits</span> <span m="1290730">of</span> <span
  m="1290880">precision,</span> <span m="1291550">for</span> <span
  m="1291600">example.</span> <span m="1292320">They're</span> <span
  m="1292440">not</span> <span m="1292560">going</span> <span
  m="1292670">to</span> <span m="1292740">tell</span> <span
  m="1292920">the</span> <span m="1293040">difference</span> <span
  m="1293820">between</span> <span m="1294210">those</span> <span
  m="1294480">two</span> <span m="1294690">flags.</span> <span
  m="1295830">And</span> <span m="1296010">if</span> <span m="1296160">I</span>
  <span m="1296220">can</span> <span m="1296370">get</span> <span
  m="1296490">away</span> <span m="1297300">with</span> <span
  m="1297480">compressing</span> <span m="1298020">the</span> <span
  m="1298110">matrix</span> <span m="1299550">a</span> <span
  m="1299610">lot</span> <span m="1299790">more</span> <span
  m="1300180">once</span> <span m="1300420">I</span> <span
  m="1300510">have</span> <span m="1300660">a</span> <span
  m="1300690">little</span> <span m="1300990">bit</span> <span
  m="1301110">of</span> <span m="1301200">wiggle</span> <span
  m="1301470">room,</span> <span m="1302220">that</span> <span
  m="1302400">would</span> <span m="1302520">be</span> <span
  m="1302670">a</span> <span m="1302730">good</span> <span
  m="1302940">thing.</span></p><p><span m="1304270">So</span> <span
  m="1308760">we</span> <span m="1308880">know</span> <span
  m="1309240">from</span> <span m="1312290">the</span> <span
  m="1312460">Eckart</span> <span m="1312750">and</span> <span
  m="1313040">Young</span> <span m="1318250">that</span> <span
  m="1318880">the</span> <span m="1319030">singular</span> <span
  m="1319450">values</span> <span m="1319840">tell</span> <span
  m="1320140">us</span> <span m="1320320">how</span> <span
  m="1320590">well</span> <span m="1321430">we</span> <span
  m="1321580">can</span> <span m="1321760">approximate</span> <span
  m="1322540">x</span> <span m="1323380">by</span> <span m="1323620">a</span>
  <span m="1323680">low-rank</span> <span m="1324370">matrix.</span> <span
  m="1325900">In</span> <span m="1326050">particular,</span> <span
  m="1328580">we</span> <span m="1328600">know</span> <span
  m="1328870">that</span> <span m="1329260">the</span> <span
  m="1329500">k</span> <span m="1329770">plus</span> <span m="1330040">1</span>
  <span m="1331120">singular</span> <span m="1331570">value</span> <span
  m="1331930">of</span> <span m="1332050">x</span> <span
  m="1333460">tells</span> <span m="1333790">us</span> <span
  m="1333970">how</span> <span m="1334210">well</span> <span
  m="1334600">x</span> <span m="1334990">can</span> <span m="1335230">be</span>
  <span m="1335350">approximated</span> <span m="1336820">by</span> <span
  m="1337030">a</span> <span m="1337090">rank</span> <span m="1337750">k</span>
  <span m="1338350">matrix.</span> <span m="1339390">OK?</span> <span
  m="1340570">For</span> <span m="1340750">example,</span> <span
  m="1341380">when</span> <span m="1341740">the</span> <span
  m="1341860">rank</span> <span m="1342220">was</span> <span
  m="1342400">exactly</span> <span m="1342940">k,</span> <span
  m="1344020">the</span> <span m="1344950">sigma</span> <span
  m="1345460">k</span> <span m="1345700">plus</span> <span m="1345940">1</span>
  <span m="1346180">was</span> <span m="1346420">0,</span> <span
  m="1348040">and</span> <span m="1348190">then</span> <span
  m="1348400">this</span> <span m="1348610">came</span> <span
  m="1348850">out</span> <span m="1348940">to</span> <span m="1349060">be</span>
  <span m="1349180">0</span> <span m="1349570">and</span> <span
  m="1349660">we</span> <span m="1349780">found</span> <span
  m="1350020">that</span> <span m="1350170">x</span> <span
  m="1350620">was</span> <span m="1350830">exactly</span> <span
  m="1351550">a</span> <span m="1351610">rank</span> <span m="1351940">k</span>
  <span m="1352210">matrix.</span></p><p><span m="1353260">Here,</span> <span
  m="1353530">because</span> <span m="1353830">we</span> <span
  m="1353950">have</span> <span m="1354130">the</span> <span
  m="1354220">wiggle</span> <span m="1354520">room,</span> <span
  m="1355300">the</span> <span m="1355420">epsilon,</span> <span
  m="1356170">we</span> <span m="1356320">get</span> <span m="1356470">an</span>
  <span m="1356590">approximation,</span> <span m="1357580">not</span> <span
  m="1357820">an</span> <span m="1357910">exact.</span> <span
  m="1359180">So</span> <span m="1360100">this</span> <span
  m="1360250">is</span> <span m="1360370">telling</span> <span
  m="1360670">us</span> <span m="1362920">how</span> <span
  m="1363160">well</span> <span m="1363490">we</span> <span
  m="1363640">can</span> <span m="1363760">approximate</span> <span
  m="1364330">x</span> <span m="1366010">by</span> <span m="1366250">a
  rank</span> <span m="1366640">k</span> <span m="1366970">matrix.</span> <span
  m="1370030">OK?</span> <span m="1371290">That's</span> <span
  m="1371470">what</span> <span m="1371590">the</span> <span
  m="1371680">singular</span> <span m="1372040">values</span> <span
  m="1372370">are</span> <span m="1372430">telling</span> <span
  m="1372790">us.</span> <span m="1374170">And</span> <span
  m="1374290">so</span> <span m="1374530">this</span> <span
  m="1374770">allows</span> <span m="1375160">us</span> <span
  m="1375820">to</span> <span m="1377440">try</span> <span
  m="1377770">our</span> <span m="1377860">best</span> <span
  m="1378190">to</span> <span m="1378340">compress</span> <span
  m="1378790">matrices</span> <span m="1379480">but</span> <span
  m="1379690">use</span> <span m="1380050">low-rank</span> <span
  m="1380770">approximation</span> <span m="1383140">rather</span> <span
  m="1383470">than</span> <span m="1384430">doing</span> <span
  m="1384730">things</span> <span m="1385000">exactly.</span></p><p><span
  m="1387930">And</span> <span m="1388220">of</span> <span
  m="1388310">course,</span> <span m="1388670">on</span> <span
  m="1388790">a</span> <span m="1388820">computer,</span> <span
  m="1389420">when</span> <span m="1389600">we're</span> <span
  m="1389720">using</span> <span m="1390110">floating</span> <span
  m="1390620">point</span> <span m="1391100">arithmetic,</span> <span
  m="1392660">or</span> <span m="1393020">on</span> <span m="1393200">a</span>
  <span m="1393230">computer</span> <span m="1393650">because</span> <span
  m="1394100">we</span> <span m="1394370">always</span> <span
  m="1394820">round</span> <span m="1395450">numbers</span> <span
  m="1396350">to</span> <span m="1396620">the</span> <span
  m="1396830">nearest</span> <span m="1397400">16-digit</span> <span
  m="1398480">number,</span> <span m="1399710">if</span> <span
  m="1399860">epsilon</span> <span m="1400310">was</span> <span
  m="1400460">16</span> <span m="1400880">digits,</span> <span
  m="1401450">your</span> <span m="1401660">computer</span> <span
  m="1402320">wouldn't</span> <span m="1402650">be</span> <span
  m="1402860">able</span> <span m="1403010">to</span> <span
  m="1403100">tell</span> <span m="1403310">the</span> <span
  m="1403400">difference</span> <span m="1404660">between</span> <span
  m="1406310">x</span> <span m="1407090">or</span> <span m="1408590">x</span>
  <span m="1409010">the</span> <span m="1409130">rank</span> <span
  m="1409400">k</span> <span m="1409640">approximation</span> <span
  m="1410990">if</span> <span m="1411140">this</span> <span
  m="1411350">number</span> <span m="1412910">satisfied</span> <span
  m="1413450">this</span> <span m="1413810">expression.</span> <span
  m="1415040">Your</span> <span m="1415190">computer</span> <span
  m="1415610">would</span> <span m="1415730">think</span> <span
  m="1415970">of</span> <span m="1416090">x</span> <span m="1416420">and</span>
  <span m="1416540">xk</span> <span m="1417140">as</span> <span
  m="1417290">the</span> <span m="1417380">same</span> <span
  m="1417680">matrix</span> <span m="1418190">because</span> <span
  m="1419060">it</span> <span m="1419180">would</span> <span
  m="1419390">inevitably</span> <span m="1420140">round</span> <span
  m="1420500">both</span> <span m="1422240">to</span> <span
  m="1422810">epsilon,</span> <span m="1423800">within</span> <span
  m="1424100">epsilon.</span> <span m="1425410">OK.</span></p><p><span
  m="1426150">So</span> <span m="1426300">what</span> <span
  m="1426480">kind</span> <span m="1426750">of</span> <span
  m="1426840">matrices</span> <span m="1428010">are</span> <span
  m="1428160">numerically</span> <span m="1428940">of</span> <span
  m="1429130">low rank?</span> <span m="1443130">Of</span> <span
  m="1443250">course</span> <span m="1443760">all</span> <span
  m="1444840">low-rank</span> <span m="1445380">matrices</span> <span
  m="1446340">are</span> <span m="1446490">numerically</span> <span
  m="1447210">of</span> <span m="1447330">low</span> <span
  m="1447480">rank</span> <span m="1448620">because</span> <span
  m="1449190">the</span> <span m="1449310">wiggle</span> <span
  m="1449580">room</span> <span m="1449820">can</span> <span
  m="1450030">only</span> <span m="1450330">help</span> <span
  m="1450630">you</span> <span m="1456410">but</span> <span
  m="1456590">it's</span> <span m="1456680">far</span> <span
  m="1456920">more</span> <span m="1457160">than</span> <span
  m="1457340">that.</span> <span m="1459230">There</span> <span
  m="1459410">are</span> <span m="1459500">many</span> <span
  m="1459800">full-rank</span> <span m="1460490">matrices--</span> <span
  m="1461060">matrices</span> <span m="1461630">that</span> <span
  m="1461780">don't</span> <span m="1462020">have</span> <span
  m="1462230">any</span> <span m="1462560">singular</span> <span
  m="1463010">values</span> <span m="1463340">that</span> <span
  m="1463460">are</span> <span m="1463520">zero--</span> <span
  m="1464570">but</span> <span m="1464810">the</span> <span
  m="1464900">singular</span> <span m="1465260">values</span> <span
  m="1465560">decay</span> <span m="1465890">rapidly</span> <span
  m="1466520">to</span> <span m="1466730">zero.</span> <span
  m="1467700">That</span> <span m="1468410">are</span> <span
  m="1468860">full-rank</span> <span m="1469340">matrices</span> <span
  m="1469970">with</span> <span m="1470180">low</span> <span
  m="1470690">numerical</span> <span m="1471410">rank</span> <span
  m="1472010">because</span> <span m="1472370">of</span> <span
  m="1472430">the</span> <span m="1472550">wiggle</span> <span
  m="1472820">room.</span></p><p><span m="1473780">So</span> <span
  m="1473990">for</span> <span m="1474230">example,</span> <span
  m="1475280">here</span> <span m="1475520">is</span> <span
  m="1476150">the</span> <span m="1476300">classic</span> <span
  m="1478190">matrix</span> <span m="1478880">that</span> <span
  m="1479060">fits</span> <span m="1479390">this</span> <span
  m="1480740">regime.</span> <span m="1483140">If</span> <span
  m="1483260">I</span> <span m="1483380">give</span> <span
  m="1483560">you</span> <span m="1483680">this,</span> <span
  m="1484010">this</span> <span m="1484190">is</span> <span
  m="1484310">called</span> <span m="1484520">the</span> <span
  m="1484670">Hilbert</span> <span m="1485210">matrix.</span> <span
  m="1491070">This</span> <span m="1491340">is</span> <span m="1491490">a</span>
  <span m="1491550">matrix</span> <span m="1492120">that</span> <span
  m="1492360">happens</span> <span m="1492840">to</span> <span
  m="1492960">have</span> <span m="1493200">extremely</span> <span
  m="1494100">low</span> <span m="1494970">numerical</span> <span
  m="1495660">rank</span> <span m="1497050">but</span> <span
  m="1497350">it's</span> <span m="1497590">actually</span> <span
  m="1497860">full</span> <span m="1498160">rank,</span> <span
  m="1499950">which</span> <span m="1500130">means</span> <span
  m="1500520">that</span> <span m="1500940">I</span> <span
  m="1501120">can</span> <span m="1501270">approximate</span> <span
  m="1502600">H</span> <span m="1504370">by</span> <span m="1504860">a</span>
  <span m="1504990">rank</span> <span m="1505330">k</span> <span
  m="1505560">matrix</span> <span m="1506040">where</span> <span
  m="1506160">k</span> <span m="1506340">is</span> <span
  m="1506460">quite</span> <span m="1506670">small</span> <span
  m="1507690">very</span> <span m="1507990">well,</span> <span
  m="1508620">provided</span> <span m="1509130">you</span> <span
  m="1509220">give</span> <span m="1509400">me</span> <span
  m="1509520">some</span> <span m="1509700">wiggle</span> <span
  m="1509970">room,</span> <span m="1510880">but</span> <span
  m="1510990">it's</span> <span m="1511110">not</span> <span
  m="1511980">a</span> <span m="1512040">low-rank</span> <span
  m="1512730">matrix</span> <span m="1513300">in</span> <span
  m="1513420">the</span> <span m="1513480">sense</span> <span
  m="1513750">that</span> <span m="1513900">if</span> <span
  m="1514050">epsilon</span> <span m="1514530">was</span> <span
  m="1514650">zero</span> <span m="1515070">here,</span> <span
  m="1515640">you</span> <span m="1515760">didn't</span> <span
  m="1515940">allow</span> <span m="1516150">me</span> <span
  m="1516300">the</span> <span m="1516390">wriggle</span> <span
  m="1516630">room,</span> <span m="1517170">all</span> <span
  m="1517380">the</span> <span m="1517470">singular</span> <span
  m="1517860">values</span> <span m="1518220">of</span> <span
  m="1518310">this</span> <span m="1518460">matrix</span> <span
  m="1518910">are</span> <span m="1518970">positive.</span> <span
  m="1520500">So</span> <span m="1521500">it's</span> <span
  m="1522750">of</span> <span m="1522950">low</span> <span
  m="1523250">numerical</span> <span m="1523820">rank</span> <span
  m="1524570">but</span> <span m="1526990">it's</span> <span
  m="1527180">not</span> <span m="1527360">a</span> <span
  m="1527420">low-rank</span> <span m="1527990">matrix.</span></p><p><span
  m="1528920">The</span> <span m="1529040">other</span> <span
  m="1529190">classical</span> <span m="1530930">example</span> <span
  m="1532340">which</span> <span m="1532550">motivated</span> <span
  m="1533360">a</span> <span m="1533420">lot</span> <span m="1533600">of</span>
  <span m="1534100">the</span> <span m="1534230">research</span> <span
  m="1534710">in</span> <span m="1534800">this</span> <span
  m="1534980">area</span> <span m="1535370">was</span> <span
  m="1535640">the</span> <span m="1535760">Vandermonde</span> <span
  m="1536330">matrix.</span> <span m="1537780">So</span> <span
  m="1537860">here</span> <span m="1538130">is</span> <span
  m="1538310">the</span> <span m="1538430">Vandermonde</span> <span
  m="1538970">matrix.</span> <span m="1548370">An</span> <span
  m="1548570">n</span> <span m="1548690">by</span> <span m="1548900">n</span>
  <span m="1549110">version</span> <span m="1549470">of</span> <span
  m="1549570">it.</span> <span m="1550580">Think</span> <span
  m="1550850">of</span> <span m="1550940">the</span> <span
  m="1551090">xi's</span> <span m="1551570">as</span> <span
  m="1551660">real.</span> <span m="1555838">And</span> <span
  m="1556310">this</span> <span m="1556460">is</span> <span
  m="1556580">Vandermonde.</span> <span m="1562060">This</span> <span
  m="1562240">is</span> <span m="1562330">the</span> <span
  m="1562420">matrix</span> <span m="1562900">that</span> <span
  m="1563020">comes</span> <span m="1563350">up</span> <span
  m="1563500">when</span> <span m="1563680">you</span> <span
  m="1563770">try</span> <span m="1564010">to</span> <span m="1564100">do</span>
  <span m="1564280">polynomial</span> <span m="1565090">interpolation</span>
  <span m="1566710">at</span> <span m="1566860">real</span> <span
  m="1567220">points.</span></p><p><span m="1568450">This</span> <span
  m="1568660">is</span> <span m="1568990">an</span> <span
  m="1569110">extremely</span> <span m="1571030">bad</span> <span
  m="1571450">matrix</span> <span m="1572050">to</span> <span
  m="1572170">deal</span> <span m="1572380">with</span> <span
  m="1572650">because</span> <span m="1573160">it's</span> <span
  m="1573820">numerically</span> <span m="1574480">low</span> <span
  m="1574660">rank,</span> <span m="1575950">and</span> <span
  m="1576310">often,</span> <span m="1576730">you</span> <span
  m="1576880">actually</span> <span m="1577090">want</span> <span
  m="1577270">to</span> <span m="1577360">solve</span> <span
  m="1578170">a</span> <span m="1578230">linear</span> <span
  m="1578560">system</span> <span m="1579430">with</span> <span
  m="1579580">this</span> <span m="1579760">matrix.</span> <span
  m="1581050">And</span> <span m="1581560">numerical</span> <span
  m="1582230">low</span> <span m="1582310">rank</span> <span
  m="1582820">implies</span> <span m="1583540">that</span> <span
  m="1583690">it's</span> <span m="1583840">extremely</span> <span
  m="1584350">hard</span> <span m="1584530">to</span> <span
  m="1584680">invert,</span> <span m="1586230">so</span> <span
  m="1589870">numerical</span> <span m="1590400">low</span> <span
  m="1590470">rank</span> <span m="1590670">is</span> <span
  m="1590770">not</span> <span m="1590890">always</span> <span
  m="1591190">good</span> <span m="1591370">for</span> <span
  m="1591520">you.</span> <span m="1592120">OK?</span> <span
  m="1593020">Often,</span> <span m="1593350">we</span> <span
  m="1593500">want</span> <span m="1599260">the</span> <span
  m="1599500">inverse,</span> <span m="1600910">which</span> <span
  m="1601090">exists,</span> <span m="1602620">but</span> <span
  m="1604000">it's</span> <span m="1604120">difficult</span> <span
  m="1604570">because</span> <span m="1611050">V</span> <span
  m="1613300">has</span> <span m="1613570">low</span> <span
  m="1615040">numerical</span> <span m="1615640">rank.</span></p><p><span
  m="1623700">OK.</span> <span m="1624300">So</span> <span
  m="1624720">people</span> <span m="1625080">have</span> <span
  m="1625170">been</span> <span m="1625320">trying</span> <span
  m="1625560">to</span> <span m="1625650">understand</span> <span
  m="1626280">why</span> <span m="1626580">these</span> <span
  m="1626820">matrices</span> <span m="1628320">are</span> <span
  m="1628590">numerically</span> <span m="1629400">of</span> <span
  m="1629520">low</span> <span m="1629730">rank</span> <span
  m="1630420">for</span> <span m="1630630">a</span> <span
  m="1630690">number</span> <span m="1630990">of</span> <span
  m="1631110">years,</span> <span m="1632220">and</span> <span
  m="1632520">the</span> <span m="1633300">classic</span> <span
  m="1634590">reason</span> <span m="1635940">why</span> <span
  m="1636210">there</span> <span m="1636360">are</span> <span
  m="1636450">so</span> <span m="1636660">many</span> <span
  m="1636930">low-rank</span> <span m="1637350">matrices</span> <span
  m="1638550">is</span> <span m="1638790">because</span> <span
  m="1639440">the</span> <span m="1640050">world</span> <span
  m="1640440">is</span> <span m="1640500">smooth,</span> <span
  m="1641040">as</span> <span m="1641190">people</span> <span
  m="1641460">say.</span> <span m="1642240">They</span> <span
  m="1642360">say,</span> <span m="1642990">the</span> <span
  m="1643080">world</span> <span m="1643350">is</span> <span
  m="1643410">smooth.</span> <span m="1645630">That's</span> <span
  m="1645870">why</span> <span m="1646200">matrices</span> <span
  m="1648153">are</span> <span m="1649420">of</span> <span
  m="1649840">numerical</span> <span m="1650650">low</span> <span
  m="1650830">rank.</span> <span m="1652570">And</span> <span
  m="1652840">to</span> <span m="1653260">illustrate</span> <span
  m="1653770">that</span> <span m="1653950">point,</span> <span
  m="1656740">I</span> <span m="1656830">will</span> <span m="1656950">do</span>
  <span m="1657100">an</span> <span m="1657190">example.</span></p><p><span
  m="1658710">So</span> <span m="1659200">this</span> <span
  m="1659440">is</span> <span m="1659560">classically</span> <span
  m="1660190">understood</span> <span m="1661140">by</span> <span
  m="1661460">a</span> <span m="1661540">man</span> <span
  m="1661850">called</span> <span m="1662190">Reade</span> <span
  m="1663380">in</span> <span m="1663950">1983,</span> <span
  m="1668955">and</span> <span m="1669520">this</span> <span
  m="1670150">is</span> <span m="1670300">what</span> <span
  m="1670450">his</span> <span m="1670660">reason</span> <span
  m="1670990">was.</span> <span m="1671740">I</span> <span
  m="1671800">have</span> <span m="1671920">a</span> <span
  m="1671980">picture</span> <span m="1672280">of</span> <span
  m="1672370">John</span> <span m="1672640">Reade.</span> <span
  m="1674090">He's</span> <span m="1674230">not</span> <span
  m="1674380">very</span> <span m="1674530">famous,</span> <span
  m="1675100">so</span> <span m="1675370">I try</span> <span
  m="1675620">to</span> <span m="1676600">make</span> <span
  m="1676780">sure</span> <span m="1677680">his</span> <span
  m="1677830">picture</span> <span m="1678190">gets</span> <span
  m="1678400">around.</span> <span m="1680620">He's</span> <span
  m="1680740">playing</span> <span m="1680980">the</span> <span
  m="1681040">piano.</span> <span m="1681450">It's,</span> <span
  m="1681550">like,</span> <span m="1681700">one</span> <span
  m="1681850">of</span> <span m="1681910">the</span> <span
  m="1682000">only</span> <span m="1682180">pictures</span> <span
  m="1682540">I</span> <span m="1682600">could</span> <span
  m="1682720">find</span> <span m="1682990">of</span> <span
  m="1683080">him.</span></p><p><span m="1684400">So</span> <span
  m="1685390">what</span> <span m="1685630">is</span> <span
  m="1685780">in</span> <span m="1685900">this</span> <span
  m="1686080">reason?</span> <span m="1686830">Why</span> <span
  m="1686980">do</span> <span m="1687070">people</span> <span
  m="1687310">say</span> <span m="1687520">this?</span> <span
  m="1688520">Well</span> <span m="1688840">here's</span> <span
  m="1689080">an</span> <span m="1689170">example</span> <span
  m="1691420">that</span> <span m="1691540">illustrates</span> <span
  m="1692080">it.</span> <span m="1692830">If</span> <span m="1692980">I</span>
  <span m="1693070">take</span> <span m="1693280">a</span> <span
  m="1693340">polynomial</span> <span m="1695470">in</span> <span
  m="1695620">two</span> <span m="1695800">variables</span> <span
  m="1697090">and</span> <span m="1697420">I--</span> <span
  m="1699930">for</span> <span m="1700050">example,</span> <span
  m="1700770">this</span> <span m="1700950">is</span> <span m="1701070">a</span>
  <span m="1701100">polynomial</span> <span m="1701610">of</span> <span
  m="1701700">two</span> <span m="1701850">variables--</span> <span
  m="1703050">and</span> <span m="1703200">my</span> <span m="1703380">x</span>
  <span m="1704340">matrix</span> <span m="1705150">comes</span> <span
  m="1705480">from</span> <span m="1705660">sampling</span> <span
  m="1707340">that</span> <span m="1708510">polynomial</span> <span
  m="1709200">integers--</span> <span m="1710580">for</span> <span
  m="1710700">example,</span> <span m="1716900">this</span> <span
  m="1717230">matrix--</span> <span m="1718940">then</span> <span
  m="1719180">that</span> <span m="1719330">matrix</span> <span
  m="1719870">happens</span> <span m="1720260">to</span> <span
  m="1720350">be</span> <span m="1720650">of</span> <span m="1720980">low</span>
  <span m="1721250">rank--</span> <span m="1724940">mathematically</span> <span
  m="1725630">of</span> <span m="1725720">low</span> <span
  m="1725870">rank,</span> <span m="1728510">with</span> <span
  m="1728690">epsilon</span> <span m="1729080">equals</span> <span
  m="1729310">zero.</span></p><p><span m="1730250">Why</span> <span
  m="1730490">is</span> <span m="1730610">that?</span> <span
  m="1730790">Well</span> <span m="1730940">if</span> <span m="1731090">I</span>
  <span m="1731180">write</span> <span m="1731420">down</span> <span
  m="1732410">x</span> <span m="1733610">in</span> <span
  m="1733700">terms</span> <span m="1733940">of</span> <span
  m="1734030">matrices,</span> <span m="1734480">you</span> <span
  m="1734570">could</span> <span m="1734720">easily</span> <span
  m="1735020">see</span> <span m="1735260">it.</span> <span
  m="1736220">So</span> <span m="1736550">this</span> <span
  m="1736760">is</span> <span m="1736910">made</span> <span
  m="1737150">up</span> <span m="1737300">of</span> <span m="1737450">a</span>
  <span m="1737510">matrix</span> <span m="1737960">of</span> <span
  m="1738050">all</span> <span m="1738140">ones</span> <span
  m="1740120">plus</span> <span m="1742420">a</span> <span
  m="1742580">matrix</span> <span m="1744290">of</span> <span
  m="1744620">j--</span> <span m="1745010">so</span> <span
  m="1745250">that's</span> <span m="1745470">1,</span> <span
  m="1746220">2,</span> <span m="1746930">up</span> <span m="1747290">to
  n,</span> <span m="1748070">1,</span> <span m="1748620">2,</span> <span
  m="1749410">up to n,</span> <span m="1751160">because</span> <span
  m="1751460">every</span> <span m="1751790">entry</span> <span
  m="1752090">of</span> <span m="1752180">that</span> <span
  m="1752330">matrix</span> <span m="1752750">just</span> <span
  m="1752930">depends</span> <span m="1753260">on</span> <span
  m="1753350">the</span> <span m="1753470">row</span> <span
  m="1753830">index.</span> <span m="1755500">And</span> <span
  m="1755630">then</span> <span m="1755780">this</span> <span
  m="1755960">guy</span> <span m="1756590">depends</span> <span
  m="1757040">on</span> <span m="1757130">both</span> <span m="1757370">j</span>
  <span m="1757670">and</span> <span m="1757850">k.</span> <span
  m="1758730">So</span> <span m="1759680">this</span> <span
  m="1759860">is</span> <span m="1759950">a</span> <span
  m="1760010">multiplication</span> <span m="1760760">table,</span> <span
  m="1761100">right?</span> <span m="1761330">So</span> <span
  m="1761510">this</span> <span m="1761720">is</span> <span
  m="1762740">n,</span> <span m="1763700">2,</span> <span m="1764330">4,</span>
  <span m="1764960">up</span> <span m="1765080">to</span> <span
  m="1765170">2n,</span> <span m="1767300">n,</span> <span
  m="1767960">2n,</span> <span m="1768740">n</span> <span
  m="1768890">squared.</span> <span m="1771635">OK.</span></p><p><span
  m="1774050">Clearly,</span> <span m="1774530">the</span> <span
  m="1774650">matrix</span> <span m="1775190">of</span> <span
  m="1775310">all</span> <span m="1775430">ones</span> <span
  m="1776450">is</span> <span m="1776840">a</span> <span m="1777170">rank</span>
  <span m="1777520">one</span> <span m="1777800">matrix.</span> <span
  m="1782260">The</span> <span m="1782390">same</span> <span
  m="1782630">with</span> <span m="1782720">this</span> <span
  m="1782900">guy.</span> <span m="1783560">The</span> <span
  m="1783650">column</span> <span m="1784010">space</span> <span
  m="1784370">is</span> <span m="1784460">just</span> <span
  m="1784850">of</span> <span m="1784970">dimension</span> <span
  m="1785430">one.</span> <span m="1787220">And</span> <span
  m="1788600">the</span> <span m="1788720">last</span> <span
  m="1788990">guy</span> <span m="1789260">also</span> <span
  m="1789620">happens</span> <span m="1789950">to</span> <span
  m="1790040">be</span> <span m="1790370">of</span> <span
  m="1790610">rank</span> <span m="1790910">one</span> <span
  m="1791960">because</span> <span m="1792530">I</span> <span
  m="1792650">can</span> <span m="1792830">write</span> <span
  m="1793130">this</span> <span m="1793340">matrix</span> <span
  m="1794690">in</span> <span m="1795170">rank</span> <span
  m="1795500">one</span> <span m="1795740">form,</span> <span m="1798230">which
  is</span> <span m="1798500">a</span> <span m="1798530">column</span> <span
  m="1798950">vector</span> <span m="1801254">times</span> <span
  m="1801710">a</span> <span m="1802170">row</span> <span
  m="1802500">vector.</span> <span m="1803250">OK.</span> <span
  m="1804090">So</span> <span m="1804720">this</span> <span
  m="1804960">matrix</span> <span m="1805440">x</span> <span
  m="1806070">is</span> <span m="1806400">of</span> <span
  m="1806640">rank</span> <span m="1806940">three.</span> <span
  m="1813710">I</span> <span m="1813770">guess</span> <span
  m="1814010">at</span> <span m="1814090">lowest</span> <span
  m="1814390">rank</span> <span m="1814580">three</span> <span
  m="1814820">is</span> <span m="1814950">what I've actually</span> <span
  m="1815340">shown.</span> <span m="1816640">OK.</span></p><p><span
  m="1820000">Now</span> <span m="1820120">of</span> <span
  m="1820180">course</span> <span m="1820420">this</span> <span
  m="1820600">hasn't</span> <span m="1820810">got</span> <span
  m="1821020">to</span> <span m="1821290">numerical</span> <span
  m="1821980">low</span> <span m="1822160">rank</span> <span
  m="1822460">yet,</span> <span m="1823480">so</span> <span
  m="1823630">let's</span> <span m="1823840">get</span> <span
  m="1824050">ourselves</span> <span m="1824560">there.</span> <span
  m="1828690">So</span> <span m="1828900">Reade</span> <span
  m="1829620">knew</span> <span m="1829890">this,</span> <span
  m="1830550">and</span> <span m="1830760">he</span> <span
  m="1830880">said</span> <span m="1831090">to</span> <span
  m="1831210">himself,</span> <span m="1831740">OK,</span> <span
  m="1832160">well</span> <span m="1832560">if</span> <span m="1832950">I</span>
  <span m="1833160">can</span> <span m="1833610">approximate--</span> <span
  m="1835590">if</span> <span m="1835770">x</span> <span m="1836100">is</span>
  <span m="1836250">actually</span> <span m="1836520">coming</span> <span
  m="1836820">from</span> <span m="1837060">sampling</span> <span
  m="1837660">a</span> <span m="1837700">function,</span> <span
  m="1838800">and</span> <span m="1838950">I</span> <span
  m="1839070">approximate</span> <span m="1839640">that</span> <span
  m="1839790">function</span> <span m="1840180">by</span> <span
  m="1840390">polynomial,</span> <span m="1841890">then</span> <span
  m="1842160">I'm</span> <span m="1842310">going</span> <span
  m="1842390">to</span> <span m="1842490">get</span> <span
  m="1842640">myself</span> <span m="1843270">a</span> <span
  m="1843360">low-rank</span> <span m="1844140">approximation</span> <span
  m="1845670">and</span> <span m="1845790">get</span> <span m="1845950">a</span>
  <span m="1846000">bound</span> <span m="1846510">on</span> <span
  m="1846750">the</span> <span m="1846900">numerical</span> <span
  m="1847500">rank.</span></p><p><span m="1848920">So</span> <span
  m="1849780">in</span> <span m="1849900">general,</span> <span
  m="1852780">if</span> <span m="1852930">I</span> <span m="1853020">give</span>
  <span m="1853230">you</span> <span m="1853980">a</span> <span
  m="1854070">polynomial</span> <span m="1854820">of</span> <span
  m="1854940">two</span> <span m="1855150">variables,</span> <span
  m="1856620">which</span> <span m="1856800">can</span> <span
  m="1856980">be</span> <span m="1857100">written</span> <span
  m="1857370">down--</span> <span m="1858630">it's</span> <span
  m="1859410">degree</span> <span m="1859800">n</span> <span
  m="1860460">in</span> <span m="1860580">both</span> <span m="1862170">x</span>
  <span m="1862470">and</span> <span m="1862590">y.</span> <span
  m="1864000">Let's just</span> <span m="1865170">keep</span> <span
  m="1865380">these</span> <span m="1865590">indexes</span> <span
  m="1866130">away</span> <span m="1866430">from</span> <span
  m="1866640">the</span> <span m="1866730">matrix</span> <span
  m="1867120">index.</span> <span m="1870360">I</span> <span
  m="1870510">give</span> <span m="1870720">you</span> <span
  m="1870870">this</span> <span m="1871140">such</span> <span
  m="1871690">polynomial,</span> <span m="1873510">and</span> <span
  m="1873630">I</span> <span m="1873750">go</span> <span m="1873930">away</span>
  <span m="1874170">and</span> <span m="1874290">I</span> <span
  m="1874380">sample</span> <span m="1874860">it</span> <span
  m="1877290">and</span> <span m="1877410">make</span> <span
  m="1877620">a</span> <span m="1878100">matrix</span> <span
  m="1878910">X,</span> <span m="1880560">then</span> <span
  m="1881340">X,</span> <span m="1882150">by</span> <span
  m="1882360">looking</span> <span m="1882690">at</span> <span
  m="1882780">each</span> <span m="1882990">term</span> <span
  m="1883350">individually</span> <span m="1883890">like</span> <span
  m="1884130">I</span> <span m="1884220">did</span> <span
  m="1884400">there,</span> <span m="1885260">will</span> <span
  m="1885630">have</span> <span m="1886950">low</span> <span
  m="1887160">rank</span> <span m="1888420">mathematically,</span> <span
  m="1890520">with</span> <span m="1890700">epsilon</span> <span
  m="1891030">equals</span> <span m="1891270">zero.</span> <span
  m="1891830">This</span> <span m="1891990">will</span> <span
  m="1892110">have,</span> <span m="1892980">at</span> <span
  m="1893520">most,</span> <span m="1894150">m</span> <span
  m="1894360">squared</span> <span m="1894960">rank,</span> <span
  m="1895590">and</span> <span m="1895710">if</span> <span m="1895830">m</span>
  <span m="1896010">is</span> <span m="1896160">3</span> <span
  m="1896550">or</span> <span m="1896690">4</span> <span m="1896950">or</span>
  <span m="1897210">10,</span> <span m="1898180">it</span> <span
  m="1898680">possibly</span> <span m="1899160">could</span> <span
  m="1899370">be</span> <span m="1899490">low</span> <span
  m="1899820">because</span> <span m="1900390">this</span> <span
  m="1900870">X</span> <span m="1901140">could</span> <span
  m="1901290">be</span> <span m="1901470">a</span> <span
  m="1901560">large</span> <span m="1901950">matrix.</span> <span
  m="1903570">OK.</span></p><p><span m="1904320">So</span> <span
  m="1904500">what</span> <span m="1904710">Reade</span> <span
  m="1905030">did</span> <span m="1905220">for</span> <span
  m="1905400">the</span> <span m="1905490">Hilbert</span> <span
  m="1905820">matrix</span> <span m="1906470">was</span> <span
  m="1906630">said,</span> <span m="1907020">OK,</span> <span
  m="1907890">well</span> <span m="1908010">look</span> <span
  m="1908220">at</span> <span m="1908280">that</span> <span
  m="1908490">guy.</span> <span m="1909270">That</span> <span
  m="1909420">guy</span> <span m="1909660">looks</span> <span
  m="1909930">like</span> <span m="1910140">it's</span> <span
  m="1910260">sampling</span> <span m="1910830">a</span> <span
  m="1910890">function.</span> <span m="1912330">It</span> <span
  m="1912420">looks</span> <span m="1912630">like</span> <span
  m="1912840">it's</span> <span m="1912930">sampling</span> <span
  m="1913380">the</span> <span m="1913440">function</span> <span
  m="1913860">1</span> <span m="1914220">over</span> <span m="1914370">x</span>
  <span m="1914670">plus</span> <span m="1914940">y</span> <span
  m="1915300">minus</span> <span m="1915630">1.</span> <span
  m="1917170">So</span> <span m="1917400">he</span> <span
  m="1917580">said</span> <span m="1917790">to</span> <span
  m="1917880">himself,</span> <span m="1919140">well,</span> <span
  m="1920640">that</span> <span m="1920850">x,</span> <span
  m="1922650">if</span> <span m="1922800">I</span> <span m="1922890">look</span>
  <span m="1923070">at</span> <span m="1923130">the</span> <span
  m="1923220">Hilbert</span> <span m="1923580">matrix,</span> <span
  m="1927110">then</span> <span m="1927360">that</span> <span
  m="1927540">is</span> <span m="1927750">sampling</span> <span
  m="1928260">a</span> <span m="1928320">function.</span> <span
  m="1929600">It</span> <span m="1929880">happens</span> <span
  m="1930300">to</span> <span m="1930390">not</span> <span m="1930600">be</span>
  <span m="1930720">a</span> <span m="1930780">polynomial.</span> <span
  m="1933270">It</span> <span m="1933330">happens</span> <span
  m="1933660">to</span> <span m="1933720">be</span> <span
  m="1933870">this</span> <span m="1934080">function.</span></p><p><span
  m="1936480">But</span> <span m="1936630">that's</span> <span
  m="1936810">OK</span> <span m="1937110">because</span> <span
  m="1937350">sampling</span> <span m="1937980">polynomials,</span> <span
  m="1940080">integers,</span> <span m="1940950">gives</span> <span
  m="1941130">me</span> <span m="1941280">low</span> <span
  m="1941550">rank</span> <span m="1941910">exactly.</span> <span
  m="1942970">Maybe</span> <span m="1943500">sampling</span> <span
  m="1944160">smooth</span> <span m="1944790">functions,</span> <span
  m="1945360">functions</span> <span m="1945780">like</span> <span
  m="1945960">this,</span> <span m="1947670">can</span> <span
  m="1947880">be</span> <span m="1948000">well</span> <span
  m="1948270">approximated</span> <span m="1948990">by</span> <span
  m="1949140">polynomials</span> <span m="1949770">and</span> <span
  m="1949860">therefore</span> <span m="1950190">have</span> <span
  m="1950520">low</span> <span m="1950880">numerical</span> <span
  m="1951600">rank.</span> <span m="1952680">And</span> <span
  m="1953250">that's</span> <span m="1953520">what</span> <span
  m="1953640">he</span> <span m="1953760">did</span> <span m="1953970">in</span>
  <span m="1954060">this</span> <span m="1954210">case.</span> <span
  m="1954900">So</span> <span m="1955740">he</span> <span
  m="1957450">tried</span> <span m="1957630">to</span> <span
  m="1957720">find</span> <span m="1958140">a</span> <span m="1958200">p,</span>
  <span m="1958700">a</span> <span m="1959700">polynomial</span> <span
  m="1960390">approximation</span> <span m="1961290">to</span> <span
  m="1961620">f.</span> <span m="1962790">In</span> <span
  m="1962910">particular,</span> <span m="1963390">he</span> <span
  m="1963600">looked</span> <span m="1963870">at</span> <span
  m="1963920">exactly</span> <span m="1964380">this</span> <span
  m="1964590">kind</span> <span m="1965610">of</span> <span
  m="1965760">approximation.</span> <span m="1970870">So</span> <span
  m="1971080">he</span> <span m="1971230">has</span> <span
  m="1971430">some</span> <span m="1971650">numbers</span> <span
  m="1972010">here</span> <span m="1973690">so</span> <span
  m="1973870">that</span> <span m="1974020">things</span> <span
  m="1974320">get</span> <span m="1974500">dissolved</span> <span
  m="1974890">later.</span> <span m="1975805">And</span> <span
  m="1976300">he</span> <span m="1976420">tried</span> <span
  m="1976720">to</span> <span m="1976780">find</span> <span m="1977065">a</span>
  <span m="1977605">p</span> <span m="1978880">that</span> <span
  m="1979350">did</span> <span m="1979570">this</span> <span
  m="1979810">kind</span> <span m="1980020">of</span> <span
  m="1980110">approximation.</span> <span m="1981220">So</span> <span
  m="1981700">this</span> <span m="1982030">approximates</span> <span
  m="1982960">f.</span></p><p><span m="1988560">And</span> <span
  m="1988770">then</span> <span m="1989100">he</span> <span
  m="1989250">would</span> <span m="1989430">develop</span> <span
  m="1990150">a</span> <span m="1990360">low-rank</span> <span
  m="1991170">approximation</span> <span m="1992100">to</span> <span
  m="1992550">X</span> <span m="1994080">by</span> <span
  m="1994350">sampling</span> <span m="1995280">p.</span> <span
  m="1996780">So</span> <span m="1996990">he</span> <span
  m="1997110">would</span> <span m="1997230">say,</span> <span
  m="1997580">OK,</span> <span m="1997960">well</span> <span
  m="1999720">if</span> <span m="1999900">I</span> <span m="2000290">let</span>
  <span m="2000470">y</span> <span m="2000890">be</span> <span
  m="2001070">a</span> <span m="2001160">sampling</span> <span
  m="2004010">of</span> <span m="2004220">p,</span> <span
  m="2005900">then</span> <span m="2006260">from</span> <span
  m="2006500">the</span> <span m="2006590">fact</span> <span
  m="2006860">that</span> <span m="2007040">f</span> <span m="2007310">is</span>
  <span m="2007430">a</span> <span m="2007460">good</span> <span
  m="2007610">approximation</span> <span m="2008180">to</span> <span
  m="2008270">p,</span> <span m="2009620">y</span> <span m="2009890">is</span>
  <span m="2010010">a</span> <span m="2010040">good</span> <span
  m="2010160">approximation</span> <span m="2010790">to</span> <span
  m="2010880">X.</span> <span m="2012350">And</span> <span m="2012560">so</span>
  <span m="2013550">this</span> <span m="2013730">has</span> <span
  m="2013880">finite</span> <span m="2014240">rank.</span> <span
  m="2018198">He</span> <span m="2018920">wrote</span> <span
  m="2019160">down</span> <span m="2022030">that</span> <span
  m="2022220">this</span> <span m="2022460">must</span> <span
  m="2022730">hold.</span> <span m="2026160">And</span> <span
  m="2026470">the</span> <span m="2026590">epsilon</span> <span
  m="2027010">comes</span> <span m="2027310">out</span> <span
  m="2027460">here</span> <span m="2027670">because</span> <span
  m="2028670">these</span> <span m="2028930">factors</span> <span
  m="2029500">were</span> <span m="2029650">chosen</span> <span
  m="2030040">just</span> <span m="2030220">right.</span> <span
  m="2031390">The</span> <span m="2031650">divide</span> <span
  m="2032050">by</span> <span m="2032260">n</span> <span m="2032530">was</span>
  <span m="2032710">chosen</span> <span m="2033070">so</span> <span
  m="2033250">that</span> <span m="2033640">the</span> <span
  m="2033760">epsilon</span> <span m="2034150">came</span> <span
  m="2034420">out</span> <span m="2034690">just</span> <span
  m="2034910">there.</span> <span m="2036000">OK?</span></p><p><span
  m="2036460">So,</span> <span m="2036760">for</span> <span
  m="2036940">many</span> <span m="2037180">years,</span> <span
  m="2037570">that</span> <span m="2037720">was</span> <span
  m="2037900">kind</span> <span m="2038140">of</span> <span
  m="2038230">the</span> <span m="2038320">canonical</span> <span
  m="2038920">reason</span> <span m="2039340">that</span> <span
  m="2039490">people</span> <span m="2039760">would</span> <span
  m="2039940">give,</span> <span m="2040780">that,</span> <span
  m="2041320">well,</span> <span m="2041600">if</span> <span
  m="2041770">the</span> <span m="2041890">matrix</span> <span
  m="2042820">X</span> <span m="2043210">is</span> <span
  m="2043300">sampled</span> <span m="2043810">from</span> <span
  m="2044080">a</span> <span m="2044140">smooth</span> <span
  m="2044560">function,</span> <span m="2045920">then</span> <span
  m="2047500">we</span> <span m="2047620">can</span> <span
  m="2047770">approximate</span> <span m="2048250">our</span> <span
  m="2048370">function</span> <span m="2048699">by</span> <span
  m="2048880">a</span> <span m="2048909">polynomial</span> <span
  m="2050440">and</span> <span m="2050710">get</span> <span
  m="2051520">polynomial</span> <span m="2052750">rank</span> <span
  m="2053380">approximations.</span> <span m="2055060">And</span> <span
  m="2055179">therefore,</span> <span m="2056050">the</span> <span
  m="2056230">matrix</span> <span m="2056650">X</span> <span
  m="2056920">will</span> <span m="2057070">be</span> <span
  m="2057370">of</span> <span m="2057580">low</span> <span
  m="2057940">numerical</span> <span m="2058570">rank.</span> <span
  m="2062310">There's</span> <span m="2062730">an</span> <span
  m="2062820">issue</span> <span m="2063750">with</span> <span
  m="2063989">this</span> <span m="2065159">reasoning,</span> <span
  m="2066630">especially</span> <span m="2067050">for</span> <span
  m="2067170">the</span> <span m="2067260">Hilbert</span> <span
  m="2067560">matrix,</span> <span m="2068489">that</span> <span
  m="2068670">it</span> <span m="2068820">doesn't</span> <span
  m="2069239">actually</span> <span m="2069690">work</span> <span
  m="2070080">that</span> <span m="2070260">well.</span></p><p><span
  m="2071710">So</span> <span m="2072600">for</span> <span
  m="2072810">example,</span> <span m="2073960">if</span> <span
  m="2074040">I</span> <span m="2074130">take</span> <span
  m="2074400">the</span> <span m="2074520">1,000</span> <span
  m="2075270">by</span> <span m="2075489">1,000</span> <span
  m="2076320">Hilbert</span> <span m="2076650">matrix</span> <span
  m="2078710">and</span> <span m="2078840">I</span> <span
  m="2078929">look</span> <span m="2079139">at</span> <span
  m="2079230">its</span> <span m="2079350">rank--</span> <span
  m="2081072">OK,</span> <span m="2081920">well</span> <span
  m="2082070">I've</span> <span m="2082190">already</span> <span
  m="2082400">told</span> <span m="2082639">you</span> <span
  m="2082730">this</span> <span m="2082909">is</span> <span
  m="2083030">full</span> <span m="2083239">rank.</span> <span
  m="2085040">You'll</span> <span m="2085159">get</span> <span
  m="2085280">1,000.</span> <span m="2086650">All</span> <span
  m="2086840">the</span> <span m="2086929">singular</span> <span
  m="2087290">values</span> <span m="2087710">are</span> <span
  m="2088400">positive.</span> <span m="2090929">If</span> <span
  m="2090949">I</span> <span m="2091010">look</span> <span m="2091219">at</span>
  <span m="2091280">the</span> <span m="2091370">numerical</span> <span
  m="2092090">rank</span> <span m="2094929">of</span> <span
  m="2095080">this</span> <span m="2095290">1,000</span> <span
  m="2095980">by</span> <span m="2096159">1,000</span> <span
  m="2096760">Hilbert</span> <span m="2097060">matrix</span> <span
  m="2097810">and</span> <span m="2097960">I</span> <span m="2098020">compute
  it,</span> <span m="2098580">I</span> <span m="2098650">compute</span> <span
  m="2098950">the</span> <span m="2099170">SVD</span> <span
  m="2100480">and</span> <span m="2100630">I</span> <span
  m="2100690">look</span> <span m="2100900">at</span> <span
  m="2100990">how</span> <span m="2101170">many</span> <span
  m="2102010">are</span> <span m="2102220">above</span> <span
  m="2103030">epsilon</span> <span m="2104890">where</span> <span
  m="2105130">epsilon</span> <span m="2105820">is</span> <span
  m="2106420">10</span> <span m="2106600">to</span> <span m="2106720">the</span>
  <span m="2106810">minus</span> <span m="2107140">15,</span> <span
  m="2108430">so</span> <span m="2109630">that</span> <span
  m="2109810">means</span> <span m="2110350">I</span> <span
  m="2110470">can</span> <span m="2110620">approximate</span> <span
  m="2111220">the</span> <span m="2111340">1,000</span> <span
  m="2111850">by</span> <span m="2112030">1,000</span> <span
  m="2112540">Hilbert</span> <span m="2112840">matrix</span> <span
  m="2113650">by</span> <span m="2113890">a rank</span> <span
  m="2114160">28</span> <span m="2114730">matrix</span> <span
  m="2116020">and</span> <span m="2116140">only</span> <span
  m="2116380">give</span> <span m="2116620">up</span> <span
  m="2118750">15--</span> <span m="2119070">there</span> <span
  m="2119390">will</span> <span m="2119590">be</span> <span
  m="2119680">exact</span> <span m="2120100">15</span> <span
  m="2120640">digits,</span> <span m="2121710">which</span> <span
  m="2121900">is</span> <span m="2122020">a</span> <span m="2122050">huge</span>
  <span m="2122320">amount.</span> <span m="2124450">So</span> <span
  m="2124990">this</span> <span m="2125230">is</span> <span
  m="2125380">what</span> <span m="2125620">we</span> <span
  m="2125770">get</span> <span m="2126340">in</span> <span
  m="2126490">practice,</span> <span m="2127030">but</span> <span
  m="2128770">Reade's</span> <span m="2131430">argument</span> <span
  m="2131910">here</span> <span m="2139060">shows</span> <span
  m="2139540">that</span> <span m="2141040">the</span> <span
  m="2141160">rank</span> <span m="2141730">of</span> <span
  m="2141880">this</span> <span m="2142120">matrix,</span> <span
  m="2142670">the</span> <span m="2142750">numerical</span> <span
  m="2143350">rank,</span> <span m="2145200">is</span> <span
  m="2145420">at</span> <span m="2145530">most.</span> <span
  m="2149220">So</span> <span m="2149430">it</span> <span
  m="2149520">doesn't</span> <span m="2149790">do</span> <span
  m="2149970">a</span> <span m="2150030">very</span> <span
  m="2150210">good</span> <span m="2150420">job</span> <span
  m="2150810">on</span> <span m="2150930">the</span> <span
  m="2151020">Hilbert</span> <span m="2151350">matrix</span> <span
  m="2153210">for</span> <span m="2154020">bounding</span> <span
  m="2154590">the</span> <span m="2154680">rank,</span> <span
  m="2156710">right?</span></p><p><span m="2157220">So</span> <span
  m="2157430">Reade</span> <span m="2157760">comes</span> <span
  m="2158030">along,</span> <span m="2158880">takes</span> <span
  m="2159020">this</span> <span m="2159230">function.</span> <span
  m="2160100">He</span> <span m="2160220">tries</span> <span
  m="2160490">to</span> <span m="2160580">find</span> <span m="2160790">a</span>
  <span m="2160820">polynomial</span> <span m="2161390">that</span> <span
  m="2161540">does</span> <span m="2161750">this,</span> <span
  m="2162350">where</span> <span m="2162520">epsilon</span> <span
  m="2162920">is</span> <span m="2163070">10 to</span> <span
  m="2163160">the</span> <span m="2163220">minus</span> <span
  m="2163520">15.</span> <span m="2164480">He</span> <span
  m="2164570">finds</span> <span m="2164960">that</span> <span
  m="2166460">the</span> <span m="2166550">number</span> <span
  m="2166820">of</span> <span m="2166910">terms</span> <span
  m="2167240">that</span> <span m="2167330">he</span> <span
  m="2167450">needs</span> <span m="2167750">in</span> <span
  m="2167840">this</span> <span m="2168050">expression</span> <span
  m="2168590">here</span> <span m="2169580">is</span> <span
  m="2169790">around</span> <span m="2170270">719,</span> <span
  m="2173570">and</span> <span m="2173750">therefore,</span> <span
  m="2174230">that's</span> <span m="2174530">the</span> <span
  m="2175550">rank</span> <span m="2175940">that</span> <span
  m="2176090">he</span> <span m="2176240">gets.</span> <span
  m="2176580">The</span> <span m="2177020">bound</span> <span
  m="2177470">on</span> <span m="2177590">the</span> <span
  m="2177680">numerical</span> <span m="2178310">rank.</span> <span
  m="2179300">The</span> <span m="2179420">trouble</span> <span
  m="2179780">is</span> <span m="2180080">that</span> <span
  m="2180400">719</span> <span m="2182390">tells</span> <span
  m="2182690">us</span> <span m="2182840">that</span> <span
  m="2184400">this</span> <span m="2184610">is</span> <span
  m="2184700">not</span> <span m="2185120">of</span> <span
  m="2185270">low</span> <span m="2185540">numerical</span> <span
  m="2186080">rank,</span> <span m="2187310">but</span> <span
  m="2187520">we</span> <span m="2187640">know</span> <span
  m="2187820">it</span> <span m="2187980">is,</span> <span m="2189020">so</span>
  <span m="2189170">it's</span> <span m="2189290">an</span> <span
  m="2189830">unsatisfactory</span> <span m="2190910">reason.</span></p><p><span
  m="2192450">So</span> <span m="2194200">there's</span> <span
  m="2194440">been</span> <span m="2194980">several</span> <span
  m="2195970">people</span> <span m="2196330">trying</span> <span
  m="2196690">to</span> <span m="2196780">come</span> <span
  m="2197020">up</span> <span m="2197200">with</span> <span
  m="2198070">more</span> <span m="2198370">appropriate</span> <span
  m="2199150">reasons</span> <span m="2199780">that</span> <span
  m="2199900">explain</span> <span m="2200860">the</span> <span
  m="2200980">28</span> <span m="2201640">here.</span> <span
  m="2204190">And</span> <span m="2204370">so</span> <span
  m="2205390">one</span> <span m="2205630">reason</span> <span
  m="2206050">that</span> <span m="2208250">I've</span> <span
  m="2208540">started</span> <span m="2208850">to</span> <span
  m="2209140">use</span> <span m="2210220">is</span> <span
  m="2211090">another</span> <span m="2211600">slightly</span> <span
  m="2211990">different</span> <span m="2212380">way</span> <span
  m="2212710">of</span> <span m="2212800">looking</span> <span
  m="2213130">at</span> <span m="2213220">things,</span> <span
  m="2214360">which</span> <span m="2214660">is</span> <span
  m="2215890">to</span> <span m="2216250">say</span> <span
  m="2216710">the</span> <span m="2216760">world</span> <span
  m="2217180">is</span> <span m="2217360">Sylvester.</span> <span
  m="2223690">Now</span> <span m="2224170">Sylvester,</span> <span
  m="2229460">what</span> <span m="2229610">does</span> <span
  m="2229760">that</span> <span m="2229910">mean?</span> <span
  m="2230420">What</span> <span m="2230570">does</span> <span
  m="2230690">the</span> <span m="2230750">word</span> <span
  m="2231050">&quot;Sylvester&quot;</span> <span m="2231530">mean</span> <span
  m="2231800">in</span> <span m="2231890">this</span> <span
  m="2232070">case?</span> <span m="2233010">It</span> <span
  m="2233110">means</span> <span m="2233270">that</span> <span
  m="2233480">the</span> <span m="2233630">matrices</span> <span
  m="2234260">satisfy</span> <span m="2234950">a</span> <span
  m="2235080">certain</span> <span m="2235430">type</span> <span
  m="2235700">of</span> <span m="2235820">equation</span> <span
  m="2236920">called</span> <span m="2237170">the</span> <span
  m="2237290">Sylvester</span> <span m="2237950">equation,</span> <span
  m="2240080">and</span> <span m="2241480">so</span> <span
  m="2241640">the</span> <span m="2241730">reason</span> <span
  m="2242060">is</span> <span m="2242180">really,</span> <span
  m="2243470">many</span> <span m="2243770">of</span> <span
  m="2243860">these</span> <span m="2244040">matrices</span> <span
  m="2245420">satisfy</span> <span m="2247190">a</span> <span
  m="2247850">Sylvester</span> <span m="2248420">equation,</span> <span
  m="2249230">and</span> <span m="2249350">that</span> <span
  m="2249500">takes</span> <span m="2249770">the</span> <span
  m="2249860">form--</span> <span m="2256270">for</span> <span
  m="2256450">sum</span> <span m="2256750">A,</span> <span m="2256930">B,</span>
  <span m="2257200">and</span> <span m="2257350">C.</span></p><p><span
  m="2264570">OK. So</span> <span m="2264810">X</span> <span
  m="2265080">is</span> <span m="2265230">your</span> <span
  m="2265380">matrix</span> <span m="2265800">of</span> <span
  m="2265920">interest.</span> <span m="2266580">You</span> <span
  m="2266730">want</span> <span m="2266940">to</span> <span
  m="2267030">show</span> <span m="2267360">X</span> <span m="2267750">is</span>
  <span m="2267960">of</span> <span m="2268110">numerical</span> <span
  m="2268830">low</span> <span m="2269070">rank.</span> <span
  m="2270690">And</span> <span m="2271140">the</span> <span
  m="2271320">task</span> <span m="2271800">at</span> <span
  m="2271890">hand</span> <span m="2272280">is</span> <span m="2272400">to find
  an</span> <span m="2272910">A,</span> <span m="2273270">B,</span> <span
  m="2273570">and</span> <span m="2273720">C</span> <span m="2274470">so</span>
  <span m="2274770">that</span> <span m="2275765">X</span> <span
  m="2276300">satisfies</span> <span m="2276960">that</span> <span
  m="2277140">equation.</span> <span m="2278880">OK.</span> <span
  m="2280030">For</span> <span m="2280240">example,</span> <span
  m="2282100">the</span> <span m="2282220">two</span> <span
  m="2282430">matrices</span> <span m="2282940">I've</span> <span
  m="2283060">had</span> <span m="2283510">on</span> <span
  m="2283630">the</span> <span m="2283690">board</span> <span
  m="2285450">satisfy</span> <span m="2286740">a</span> <span
  m="2286930">Sylvester</span> <span m="2287410">equation--</span> <span
  m="2289360">a</span> <span m="2289450">Sylvester</span> <span
  m="2289780">matrix</span> <span m="2290200">equation.</span> <span
  m="2290780">There</span> <span m="2290890">is</span> <span
  m="2291040">an</span> <span m="2291160">A,</span> <span m="2291460">a</span>
  <span m="2291670">B, and</span> <span m="2291760">a</span> <span
  m="2291820">C</span> <span m="2292630">for</span> <span
  m="2292750">which</span> <span m="2292930">they</span> <span
  m="2293050">do</span> <span m="2293230">this.</span></p><p><span
  m="2294490">For</span> <span m="2294640">example,</span> <span
  m="2296080">remember</span> <span m="2296380">the</span> <span
  m="2296500">Hilbert</span> <span m="2296830">matrix,</span> <span
  m="2298010">which</span> <span m="2298090">we</span> <span
  m="2298210">have</span> <span m="2298390">there</span> <span
  m="2298700">still, but I'll</span> <span m="2299230">write</span> <span
  m="2299440">it</span> <span m="2299500">down</span> <span
  m="2299680">again.</span> <span m="2304710">Has</span> <span
  m="2304930">these</span> <span m="2305200">entries.</span> <span
  m="2306770">So</span> <span m="2306870">all we</span> <span
  m="2307030">need</span> <span m="2307180">to</span> <span
  m="2307240">do</span> <span m="2307480">is</span> <span m="2307630">to</span>
  <span m="2307720">try</span> <span m="2308050">to</span> <span
  m="2308140">figure</span> <span m="2308440">out</span> <span
  m="2308770">an</span> <span m="2308950">A,</span> <span m="2309370">a</span>
  <span m="2309790">B,</span> <span m="2310480">and</span> <span
  m="2310570">then</span> <span m="2310720">a</span> <span m="2310790">C</span>
  <span m="2311500">so</span> <span m="2311770">that</span> <span
  m="2312070">we</span> <span m="2312280">can</span> <span
  m="2312460">make</span> <span m="2312760">it</span> <span
  m="2312850">fit</span> <span m="2313120">a</span> <span
  m="2313150">Sylvester</span> <span m="2313570">equation.</span> <span
  m="2314230">There's</span> <span m="2314440">many</span> <span
  m="2314860">different</span> <span m="2315220">ways</span> <span
  m="2315520">of</span> <span m="2315610">doing</span> <span
  m="2315940">this.</span> <span m="2316820">The</span> <span
  m="2316840">one</span> <span m="2317080">that</span> <span
  m="2317160">I</span> <span m="2317350">like</span> <span m="2319360">is</span>
  <span m="2320170">the</span> <span m="2320290">following,</span> <span
  m="2321050">where</span> <span m="2321320">if</span> <span
  m="2321340">I</span> <span m="2321430">put</span> <span m="2321610">1/2</span>
  <span m="2322150">here</span> <span m="2323250">and</span> <span
  m="2323380">3/2</span> <span m="2324280">here,</span> <span
  m="2325660">all</span> <span m="2325840">the</span> <span
  m="2325900">way</span> <span m="2326110">down</span> <span
  m="2326420">to</span> <span m="2326520">n</span> <span
  m="2326800">minus</span> <span m="2327190">1/2,</span> <span
  m="2330350">times</span> <span m="2330710">this</span> <span
  m="2330890">matrix--</span> <span m="2333850">so</span> <span
  m="2334070">this</span> <span m="2334250">is</span> <span
  m="2334370">timesing</span> <span m="2334850">the</span> <span
  m="2334940">top</span> <span m="2335300">of</span> <span
  m="2335390">this</span> <span m="2335630">matrix</span> <span
  m="2336290">by</span> <span m="2337976">1/2</span> <span
  m="2339080">and</span> <span m="2339170">then</span> <span
  m="2339320">3/2</span> <span m="2340370">and</span> <span
  m="2340460">then</span> <span m="2340670">5/2.</span> <span
  m="2342050">So</span> <span m="2342210">we're</span> <span
  m="2342590">basically timesing</span> <span m="2343670">each</span> <span
  m="2343880">entry</span> <span m="2344900">of</span> <span
  m="2345020">this</span> <span m="2345200">matrix</span> <span
  m="2345620">by</span> <span m="2345890">j</span> <span
  m="2346640">minus</span> <span m="2347180">1/2.</span></p><p><span
  m="2350510">And</span> <span m="2350630">then</span> <span
  m="2350780">I</span> <span m="2350870">do</span> <span
  m="2351080">something</span> <span m="2351380">on</span> <span
  m="2351500">the</span> <span m="2351560">right</span> <span
  m="2352040">here,</span> <span m="2352380">which</span> <span
  m="2352460">I'm</span> <span m="2352610">allowed</span> <span
  m="2352850">to</span> <span m="2352910">do</span> <span
  m="2353090">because</span> <span m="2353270">I've</span> <span
  m="2353360">got</span> <span m="2353510">the</span> <span m="2353600">B</span>
  <span m="2353930">freedom,</span> <span m="2354440">and</span> <span
  m="2354740">I</span> <span m="2354800">choose</span> <span
  m="2355100">this</span> <span m="2355310">to</span> <span
  m="2355400">be</span> <span m="2357470">the</span> <span
  m="2357590">same</span> <span m="2358250">up</span> <span
  m="2358400">to</span> <span m="2358550">a</span> <span
  m="2358610">minus</span> <span m="2358970">sign.</span> <span
  m="2363680">Then</span> <span m="2363920">when</span> <span
  m="2364100">you</span> <span m="2364190">think</span> <span
  m="2364430">about</span> <span m="2364700">this,</span> <span
  m="2365700">what</span> <span m="2365750">is</span> <span
  m="2365870">it</span> <span m="2365960">doing?</span> <span
  m="2366830">It's</span> <span m="2367080">timing</span> <span
  m="2368300">the</span> <span m="2368420">jk</span> <span
  m="2369230">entry--</span> <span m="2370460">this</span> <span
  m="2370670">is--</span> <span m="2371000">by</span> <span m="2371750">j</span>
  <span m="2372140">minus</span> <span m="2372590">1/2.</span> <span
  m="2373370">That's</span> <span m="2373550">what</span> <span
  m="2373670">this</span> <span m="2373850">is</span> <span
  m="2373940">doing.</span> <span m="2374840">And</span> <span
  m="2374960">what's</span> <span m="2375230">this</span> <span
  m="2375440">doing</span> <span m="2375990">is</span> <span
  m="2376100">timesing</span> <span m="2376640">the</span> <span
  m="2376760">jk</span> <span m="2377210">entry</span> <span
  m="2377570">by</span> <span m="2377930">k</span> <span
  m="2378380">minus</span> <span m="2378830">1/2.</span> <span
  m="2380420">So</span> <span m="2380630">this</span> <span
  m="2380870">is,</span> <span m="2381230">in</span> <span
  m="2381350">total,</span> <span m="2382520">timesing</span> <span
  m="2383000">the</span> <span m="2383090">jk</span> <span
  m="2383690">entry</span> <span m="2384590">by</span> <span
  m="2384860">j</span> <span m="2385400">plus</span> <span m="2385700">k</span>
  <span m="2386420">minus</span> <span m="2386810">1/2</span> <span
  m="2387230">minus</span> <span m="2387620">1/2,</span> <span
  m="2388130">which</span> <span m="2388280">is</span> <span
  m="2388370">minus</span> <span m="2388700">1,</span> <span
  m="2389700">so</span> <span m="2389840">this</span> <span
  m="2390050">is</span> <span m="2390170">timesing</span> <span
  m="2390590">the</span> <span m="2390680">jk</span> <span
  m="2391130">entry</span> <span m="2391850">by</span> <span
  m="2392120">j</span> <span m="2392450">plus</span> <span m="2392750">k</span>
  <span m="2393080">minus</span> <span m="2393440">1.</span> <span
  m="2394810">So</span> <span m="2394830">it</span> <span
  m="2394920">knocks</span> <span m="2395340">out</span> <span
  m="2395640">the</span> <span m="2395790">denominator.</span> <span
  m="2397690">And</span> <span m="2397740">what</span> <span
  m="2397920">we</span> <span m="2398040">get</span> <span
  m="2398310">from</span> <span m="2399210">this</span> <span
  m="2400740">equation</span> <span m="2401370">is</span> <span
  m="2401490">a</span> <span m="2401550">bunch</span> <span
  m="2401790">of</span> <span m="2401880">ones.</span> <span
  m="2411050">So</span> <span m="2411260">in</span> <span
  m="2411350">this</span> <span m="2411500">case,</span> <span
  m="2411950">A</span> <span m="2412370">and B</span> <span
  m="2413030">are</span> <span m="2413120">diagonal,</span> <span
  m="2414080">and</span> <span m="2414230">C</span> <span m="2414650">is</span>
  <span m="2414800">the</span> <span m="2414890">matrix</span> <span
  m="2415370">of</span> <span m="2415490">all</span> <span
  m="2415610">ones.</span> <span m="2417250">OK?</span></p><p><span
  m="2417920">We</span> <span m="2418040">can</span> <span
  m="2418190">also</span> <span m="2418430">do</span> <span
  m="2418610">this</span> <span m="2418820">for</span> <span
  m="2418970">Vandermonde.</span> <span m="2420590">So</span> <span
  m="2421310">Vandermonde,</span> <span m="2423510">you'll</span> <span
  m="2423680">remember,</span> <span m="2424790">looks</span> <span
  m="2425060">like</span> <span m="2425480">this.</span> <span
  m="2430970">And</span> <span m="2430990">then</span> <span
  m="2431260">over</span> <span m="2431500">here,</span> <span
  m="2431710">we</span> <span m="2431830">have</span> <span
  m="2432790">this</span> <span m="2432940">guy,</span> <span
  m="2435610">the</span> <span m="2435740">matrix</span> <span
  m="2436220">that</span> <span m="2436350">appears</span> <span
  m="2437810">with</span> <span m="2438050">polynomial</span> <span
  m="2438740">interpolation.</span> <span m="2441030">OK.</span> <span
  m="2441410">So</span> <span m="2442460">if</span> <span m="2442580">I</span>
  <span m="2442670">think</span> <span m="2442910">about</span> <span
  m="2443180">this,</span> <span m="2443840">I</span> <span
  m="2443990">could</span> <span m="2444200">also</span> <span
  m="2444530">come</span> <span m="2444770">up</span> <span
  m="2444860">with</span> <span m="2445070">an</span> <span
  m="2445430">A,</span> <span m="2445790">B,</span> <span m="2446120">and</span>
  <span m="2446270">C,</span> <span m="2447920">and</span> <span
  m="2449330">for</span> <span m="2449510">example,</span> <span
  m="2450020">here's</span> <span m="2450200">one</span> <span
  m="2450410">that</span> <span m="2450530">works.</span> <span
  m="2452180">I</span> <span m="2452360">can</span> <span
  m="2452540">stick</span> <span m="2452900">the</span> <span
  m="2453080">x's</span> <span m="2454850">on</span> <span
  m="2455000">the</span> <span m="2455090">diagonal.</span></p><p><span
  m="2459740">So</span> <span m="2460880">if</span> <span m="2461030">you</span>
  <span m="2461210">imagine</span> <span m="2461600">what</span> <span
  m="2461810">that</span> <span m="2462020">matrix</span> <span
  m="2462470">on</span> <span m="2462590">the</span> <span
  m="2462650">left</span> <span m="2463010">is</span> <span
  m="2463130">doing,</span> <span m="2463850">it's</span> <span
  m="2464190">timesing</span> <span m="2465950">each</span> <span
  m="2466220">column</span> <span m="2466700">by</span> <span
  m="2467000">the</span> <span m="2467120">vector</span> <span
  m="2467540">x.</span> <span m="2468360">OK?</span> <span m="2468590">So</span>
  <span m="2468740">the</span> <span m="2468860">first</span> <span
  m="2469370">column</span> <span m="2469760">of</span> <span
  m="2469850">this</span> <span m="2470090">matrix</span> <span
  m="2470570">becomes</span> <span m="2471020">x,</span> <span
  m="2471740">the</span> <span m="2471830">vector</span> <span
  m="2472160">x.</span> <span m="2472940">The</span> <span
  m="2473060">second</span> <span m="2474080">becomes</span> <span
  m="2474650">the</span> <span m="2474890">vector</span> <span
  m="2475310">x</span> <span m="2475550">squared,</span> <span
  m="2476630">where</span> <span m="2476790">squared</span> <span
  m="2477170">is</span> <span m="2477290">done</span> <span
  m="2477470">entry-wise.</span> <span m="2478670">And</span> <span
  m="2478760">then</span> <span m="2478880">the</span> <span
  m="2478970">third</span> <span m="2479360">entry</span> <span
  m="2479660">is</span> <span m="2479780">now</span> <span m="2479960">x</span>
  <span m="2480170">cubed,</span> <span m="2481140">and</span> <span
  m="2481160">when</span> <span m="2481250">we</span> <span
  m="2481310">get</span> <span m="2481460">to</span> <span
  m="2481550">the</span> <span m="2481640">last,</span> <span
  m="2481940">it's</span> <span m="2482120">x</span> <span m="2482360">to</span>
  <span m="2482480">the</span> <span m="2482660">n.</span> <span
  m="2484660">OK?</span> <span m="2484920">So</span> <span
  m="2485070">that's</span> <span m="2485250">like,</span> <span
  m="2485430">multiply</span> <span m="2486150">each</span> <span
  m="2486570">column</span> <span m="2487200">by</span> <span
  m="2487680">the</span> <span m="2487800">vector</span> <span
  m="2488310">x.</span></p><p><span m="2490080">So</span> <span
  m="2490350">if</span> <span m="2490470">I</span> <span m="2490560">want</span>
  <span m="2490770">to</span> <span m="2490860">try</span> <span
  m="2491310">to</span> <span m="2491400">come</span> <span
  m="2491640">up</span> <span m="2491760">with</span> <span m="2491910">a</span>
  <span m="2491940">matrix--</span> <span m="2492480">so</span> <span
  m="2492780">what's</span> <span m="2493050">left</span> <span
  m="2493470">is</span> <span m="2493650">of</span> <span m="2493800">low</span>
  <span m="2494010">rank,</span> <span m="2494480">is</span> <span
  m="2494960">like</span> <span m="2495220">of</span> <span
  m="2495390">this</span> <span m="2495570">form.</span> <span
  m="2496680">What</span> <span m="2496860">I</span> <span
  m="2496950">can</span> <span m="2497130">do</span> <span m="2497520">is</span>
  <span m="2498120">shift</span> <span m="2498990">the</span> <span
  m="2499110">columns.</span> <span m="2500520">So</span> <span
  m="2501600">I've</span> <span m="2501780">noticed</span> <span
  m="2502290">that</span> <span m="2502530">this</span> <span
  m="2502860">product</span> <span m="2503340">here,</span> <span
  m="2503580">this</span> <span m="2503760">diagonal</span> <span
  m="2504180">matrix,</span> <span m="2504540">has</span> <span
  m="2504660">made</span> <span m="2504840">the</span> <span
  m="2504930">first</span> <span m="2505260">column</span> <span
  m="2505630">x.</span> <span m="2506700">So</span> <span m="2506850">if</span>
  <span m="2506940">I</span> <span m="2507030">want</span> <span
  m="2507180">to</span> <span m="2507240">kill</span> <span
  m="2507540">off</span> <span m="2507690">that</span> <span
  m="2507840">column,</span> <span m="2508230">I</span> <span
  m="2508320">can</span> <span m="2508470">take</span> <span
  m="2508680">the</span> <span m="2508800">second</span> <span
  m="2509160">column</span> <span m="2509550">and</span> <span
  m="2509720">permute</span> <span m="2510630">it</span> <span
  m="2511020">to</span> <span m="2511140">the</span> <span
  m="2511230">first</span> <span m="2511530">column.</span> <span
  m="2512190">I</span> <span m="2512310">could</span> <span
  m="2512430">take</span> <span m="2512610">the</span> <span
  m="2512700">third</span> <span m="2513000">column</span> <span
  m="2513360">and</span> <span m="2513450">permute</span> <span
  m="2513930">it</span> <span m="2514020">to</span> <span m="2514110">the</span>
  <span m="2514230">second,</span> <span m="2515040">the</span> <span
  m="2515160">last</span> <span m="2515430">column</span> <span m="2515750">and
  permute</span> <span m="2516720">it</span> <span m="2516810">to</span> <span
  m="2516960">the</span> <span m="2517050">penultimate</span> <span
  m="2517650">column</span> <span m="2518040">here.</span> <span
  m="2518910">And</span> <span m="2519030">that</span> <span
  m="2519150">will</span> <span m="2519300">actually</span> <span
  m="2519540">kill</span> <span m="2519930">off</span> <span
  m="2520350">a</span> <span m="2520380">lot</span> <span m="2520590">of</span>
  <span m="2520740">what</span> <span m="2520920">I've</span> <span
  m="2521070">created</span> <span m="2522030">in</span> <span
  m="2522150">this</span> <span m="2522360">matrix</span> <span
  m="2522840">right</span> <span m="2523080">here.</span></p><p><span
  m="2523710">So</span> <span m="2523860">let</span> <span m="2523980">me</span>
  <span m="2524100">write</span> <span m="2524280">that</span> <span
  m="2524400">down.</span> <span m="2525300">This</span> <span
  m="2525450">is</span> <span m="2525600">a</span> <span
  m="2525690">circumshift</span> <span m="2526620">matrix.</span> <span
  m="2528510">This</span> <span m="2528840">does</span> <span
  m="2529170">that</span> <span m="2529560">permutation.</span> <span
  m="2537350">I've</span> <span m="2537530">put</span> <span
  m="2537710">a</span> <span m="2537770">minus</span> <span m="2538160">1
  there.</span> <span m="2538580">I</span> <span m="2538640">could</span> <span
  m="2538820">have put</span> <span m="2539000">any</span> <span
  m="2539240">number</span> <span m="2539570">there.</span> <span
  m="2539810">It</span> <span m="2540140">doesn't</span> <span
  m="2540380">make</span> <span m="2540590">any</span> <span
  m="2540740">difference.</span> <span m="2542440">But</span> <span
  m="2542600">this</span> <span m="2542780">is</span> <span
  m="2542900">the</span> <span m="2542990">one</span> <span
  m="2543170">that</span> <span m="2543290">works</span> <span
  m="2543620">out</span> <span m="2543860">extremely</span> <span
  m="2544250">nicely.</span> <span m="2545120">Now</span> <span
  m="2545330">this</span> <span m="2546170">zeros</span> <span
  m="2546650">out</span> <span m="2547040">lots</span> <span
  m="2547460">of</span> <span m="2547580">things</span> <span
  m="2548390">because</span> <span m="2548720">of</span> <span
  m="2548780">the</span> <span m="2548870">way</span> <span
  m="2549170">I've</span> <span m="2549380">done</span> <span
  m="2549650">the</span> <span m="2549740">multiplication</span> <span
  m="2550520">by</span> <span m="2550700">x</span> <span m="2551030">and</span>
  <span m="2551150">the</span> <span m="2551210">circumshift</span> <span
  m="2552005">of</span> <span m="2552260">the</span> <span
  m="2552380">columns.</span></p><p><span m="2553790">And</span> <span
  m="2553910">so</span> <span m="2554150">the</span> <span
  m="2554240">first</span> <span m="2554540">column</span> <span
  m="2554870">is</span> <span m="2554930">zero</span> <span
  m="2556040">because</span> <span m="2557030">this</span> <span
  m="2557270">first</span> <span m="2557540">column</span> <span
  m="2557840">is</span> <span m="2558010">x,</span> <span
  m="2559010">this</span> <span m="2559190">first</span> <span
  m="2559400">column</span> <span m="2559700">is</span> <span
  m="2559910">x,</span> <span m="2561020">so</span> <span
  m="2561470">I've</span> <span m="2561570">got</span> <span
  m="2561740">x</span> <span m="2561980">minus</span> <span
  m="2562280">x.</span> <span m="2563240">This</span> <span
  m="2563420">column</span> <span m="2563720">was</span> <span
  m="2563870">x</span> <span m="2564020">squared</span> <span
  m="2564470">minus</span> <span m="2564800">x</span> <span
  m="2564920">squared,</span> <span m="2566010">so</span> <span
  m="2566150">I</span> <span m="2566210">got</span> <span
  m="2566390">zero,</span> <span m="2567170">and</span> <span
  m="2567290">I</span> <span m="2567380">just</span> <span
  m="2567530">keep</span> <span m="2567680">going</span> <span
  m="2567920">along</span> <span m="2569060">until</span> <span
  m="2570020">that</span> <span m="2570170">last</span> <span
  m="2570500">column.</span> <span m="2571430">That</span> <span
  m="2571610">last</span> <span m="2571940">column</span> <span
  m="2572240">is</span> <span m="2572330">a</span> <span
  m="2572390">problem</span> <span m="2572870">because</span> <span
  m="2573320">the</span> <span m="2573440">last</span> <span
  m="2573710">column</span> <span m="2574040">of</span> <span
  m="2574130">this</span> <span m="2574340">guy</span> <span
  m="2574940">is</span> <span m="2575150">x</span> <span m="2575420">to</span>
  <span m="2575540">the</span> <span m="2575690">n,</span> <span
  m="2576800">whereas</span> <span m="2577220">I</span> <span
  m="2577280">don't</span> <span m="2577490">have</span> <span m="2577670">x to
  the</span> <span m="2578080">n in</span> <span m="2578410">V,</span> <span
  m="2578630">so</span> <span m="2579200">there</span> <span
  m="2579410">are</span> <span m="2579510">some</span> <span
  m="2579890">numbers</span> <span m="2580340">here.</span> <span
  m="2582550">OK.</span></p><p><span m="2585940">You'll</span> <span
  m="2586090">notice</span> <span m="2586510">that</span> <span
  m="2586780">C</span> <span m="2587290">in</span> <span m="2587500">both</span>
  <span m="2587740">cases</span> <span m="2588550">happens</span> <span
  m="2588970">to</span> <span m="2589090">be</span> <span m="2589330">a</span>
  <span m="2589420">low-rank</span> <span m="2590020">matrix.</span> <span
  m="2591070">In</span> <span m="2591190">these</span> <span
  m="2591430">cases,</span> <span m="2591770">it</span> <span
  m="2591850">happens</span> <span m="2592120">to</span> <span
  m="2592210">be</span> <span m="2592420">of</span> <span
  m="2592660">rank</span> <span m="2593050">one.</span> <span
  m="2594661">And</span> <span m="2595060">so</span> <span
  m="2597130">people</span> <span m="2597460">were</span> <span
  m="2597550">wondering,</span> <span m="2598750">maybe</span> <span
  m="2599110">it's</span> <span m="2599290">something</span> <span
  m="2599650">to</span> <span m="2599710">do</span> <span
  m="2599890">with</span> <span m="2600100">satisfying</span> <span
  m="2600760">these</span> <span m="2600970">kind</span> <span
  m="2601250">of</span> <span m="2601330">equations</span> <span
  m="2602830">that</span> <span m="2603040">makes</span> <span
  m="2604330">these</span> <span m="2604810">matrices</span> <span
  m="2605470">that</span> <span m="2605620">appear</span> <span
  m="2605980">in</span> <span m="2606100">practice</span> <span
  m="2607180">numerically</span> <span m="2608080">of</span> <span
  m="2608170">low</span> <span m="2608320">rank.</span> <span
  m="2609850">And</span> <span m="2610690">after</span> <span
  m="2611020">a</span> <span m="2611080">lot</span> <span m="2611500">of</span>
  <span m="2611770">work</span> <span m="2612490">in</span> <span
  m="2612640">this</span> <span m="2612820">area,</span> <span
  m="2613630">people</span> <span m="2614050">have</span> <span
  m="2614560">come</span> <span m="2614860">up</span> <span
  m="2615040">with</span> <span m="2615400">a</span> <span
  m="2615460">bound</span> <span m="2616690">that</span> <span
  m="2617740">demonstrates</span> <span m="2619990">that</span> <span
  m="2621370">these</span> <span m="2621610">kind</span> <span
  m="2621820">of</span> <span m="2621880">equations</span> <span
  m="2622360">are</span> <span m="2622420">key</span> <span
  m="2622930">to</span> <span m="2623260">understanding</span> <span
  m="2624850">numerical</span> <span m="2625620">low</span> <span
  m="2625690">rank.</span></p><p><span m="2626470">So</span> <span
  m="2628990">if</span> <span m="2629230">X</span> <span
  m="2629590">satisfies</span> <span m="2632910">a</span> <span
  m="2633190">Sylvester</span> <span m="2633670">equation,</span> <span
  m="2636910">like</span> <span m="2637150">this,</span> <span
  m="2641080">and</span> <span m="2643745">A</span> <span m="2644750">is</span>
  <span m="2645440">normal,</span> <span m="2646030">B</span> <span
  m="2646310">is</span> <span m="2646490">normal--</span> <span
  m="2647220">I</span> <span m="2647320">don't</span> <span
  m="2647390">really</span> <span m="2647630">want</span> <span
  m="2647780">to</span> <span m="2647840">concentrate</span> <span
  m="2648410">on</span> <span m="2649700">those</span> <span
  m="2650000">two</span> <span m="2650420">conditions.</span> <span
  m="2652590">It's</span> <span m="2654080">a</span> <span
  m="2654110">little</span> <span m="2654350">bit</span> <span
  m="2654470">academic.</span> <span m="2657230">Then--</span> <span
  m="2659180">people</span> <span m="2659510">have</span> <span
  m="2659630">found</span> <span m="2659930">a</span> <span
  m="2659960">bound</span> <span m="2660830">on</span> <span
  m="2660950">the</span> <span m="2661040">singular</span> <span
  m="2661430">values</span> <span m="2662060">of</span> <span
  m="2662240">any</span> <span m="2662540">matrix</span> <span
  m="2663110">that</span> <span m="2663260">satisfies</span> <span
  m="2664010">this</span> <span m="2664220">kind</span> <span
  m="2664460">of</span> <span m="2664550">expression,</span> <span
  m="2666020">and</span> <span m="2667850">they</span> <span
  m="2667970">found</span> <span m="2669590">this</span> <span
  m="2669800">following</span> <span m="2670200">bound.</span> <span
  m="2681829">OK,</span> <span m="2682330">so</span> <span
  m="2682510">here,</span> <span m="2685280">the</span> <span
  m="2685370">rank</span> <span m="2685790">of</span> <span m="2685940">C</span>
  <span m="2687270">is</span> <span m="2687610">r.</span> <span
  m="2689240">So</span> <span m="2689360">that</span> <span
  m="2689510">goes</span> <span m="2689750">there.</span> <span
  m="2690180">So</span> <span m="2690260">in</span> <span m="2690380">our</span>
  <span m="2690500">cases,</span> <span m="2691040">the</span> <span
  m="2691160">two</span> <span m="2691310">examples</span> <span
  m="2691790">we</span> <span m="2691940">have,</span> <span
  m="2692360">r</span> <span m="2692570">is</span> <span m="2692690">1,</span>
  <span m="2693530">so</span> <span m="2693680">we</span> <span
  m="2693770">can</span> <span m="2693920">forget</span> <span
  m="2694250">about</span> <span m="2694520">r.</span></p><p><span
  m="2695990">This</span> <span m="2696260">nasty</span> <span
  m="2696770">guy</span> <span m="2697100">here</span> <span
  m="2698880">is</span> <span m="2699550">called</span> <span
  m="2701080">the</span> <span m="2701400">Zolotarev</span> <span
  m="2702550">number.</span> <span m="2707010">E</span> <span
  m="2708810">is</span> <span m="2708990">a</span> <span m="2709050">set</span>
  <span m="2710100">that</span> <span m="2710250">contains</span> <span
  m="2710700">the</span> <span m="2710820">eigenvalues</span> <span
  m="2711510">of</span> <span m="2711630">A,</span> <span m="2712814">and</span>
  <span m="2713760">F</span> <span m="2714780">is</span> <span
  m="2714950">a</span> <span m="2715020">set</span> <span
  m="2716250">that</span> <span m="2716370">contains</span> <span
  m="2716790">the</span> <span m="2716910">eigenvalues</span> <span
  m="2717480">of</span> <span m="2717600">B.</span> <span m="2722200">OK.</span>
  <span m="2723270">Now</span> <span m="2723510">it</span> <span
  m="2723570">looks</span> <span m="2723810">like</span> <span
  m="2723990">we</span> <span m="2724130">have</span> <span
  m="2724230">gained</span> <span m="2724560">absolutely</span> <span
  m="2725610">nothing</span> <span m="2726480">by</span> <span
  m="2726720">this</span> <span m="2727620">bound,</span> <span
  m="2728040">because</span> <span m="2728700">I've</span> <span
  m="2728910">just</span> <span m="2729090">told</span> <span
  m="2729420">you</span> <span m="2729570">singular</span> <span
  m="2729930">values</span> <span m="2730260">are</span> <span
  m="2730320">bound</span> <span m="2730560">by</span> <span
  m="2730710">Zolotarev</span> <span m="2731280">numbers.</span> <span
  m="2732540">That</span> <span m="2732750">doesn't</span> <span
  m="2733380">mean</span> <span m="2733620">anything</span> <span
  m="2734100">to</span> <span m="2734220">anyone.</span> <span
  m="2735450">It</span> <span m="2736260">means</span> <span
  m="2736590">a</span> <span m="2736620">little</span> <span
  m="2736830">bit</span> <span m="2736980">to</span> <span m="2737070">me</span>
  <span m="2737370">but</span> <span m="2737670">not</span> <span
  m="2737880">that</span> <span m="2738030">much.</span></p><p><span
  m="2738960">So</span> <span m="2740340">the</span> <span
  m="2740460">key</span> <span m="2740730">to</span> <span
  m="2740850">this</span> <span m="2741480">bound--</span> <span
  m="2742020">the</span> <span m="2742140">reason</span> <span
  m="2742440">this</span> <span m="2742620">is</span> <span
  m="2742740">useful--</span> <span m="2743970">is</span> <span
  m="2744120">that</span> <span m="2744780">so</span> <span
  m="2745170">many</span> <span m="2745470">people</span> <span
  m="2746550">have</span> <span m="2746730">worked</span> <span
  m="2747150">out</span> <span m="2747690">what</span> <span
  m="2748110">these</span> <span m="2748440">Zolotarev</span> <span
  m="2749220">numbers</span> <span m="2749640">actually</span> <span
  m="2750120">mean.</span> <span m="2752190">OK?</span> <span
  m="2752700">So</span> <span m="2754080">these</span> <span
  m="2754320">are</span> <span m="2754380">two</span> <span
  m="2754710">key</span> <span m="2755010">people</span> <span
  m="2756180">that</span> <span m="2756360">worked</span> <span
  m="2756780">out</span> <span m="2757620">what</span> <span
  m="2757800">this</span> <span m="2757980">bound</span> <span
  m="2758280">means.</span> <span m="2759360">And</span> <span
  m="2759660">we</span> <span m="2759840">have</span> <span
  m="2760020">gained</span> <span m="2760290">a</span> <span
  m="2760350">lot</span> <span m="2760680">because</span> <span
  m="2762270">people</span> <span m="2762600">have</span> <span
  m="2762720">been</span> <span m="2762900">studying</span> <span
  m="2763440">this</span> <span m="2763650">number.</span> <span
  m="2764880">This</span> <span m="2765060">is,</span> <span
  m="2765180">like,</span> <span m="2765390">a</span> <span
  m="2765960">number</span> <span m="2766320">that</span> <span
  m="2766470">people</span> <span m="2766740">cared</span> <span
  m="2767040">about</span> <span m="2767370">from</span> <span
  m="2768420">1870</span> <span m="2769530">onwards</span> <span
  m="2770010">to</span> <span m="2770190">the</span> <span
  m="2770280">present</span> <span m="2770640">day,</span> <span
  m="2771600">and</span> <span m="2771750">people</span> <span
  m="2772080">have</span> <span m="2772230">studied</span> <span
  m="2772830">this</span> <span m="2773070">number</span> <span
  m="2773490">extremely</span> <span m="2774000">well.</span> <span
  m="2774870">So</span> <span m="2775410">we've</span> <span
  m="2775710">gained</span> <span m="2776040">something</span> <span
  m="2776520">by</span> <span m="2776940">turning</span> <span
  m="2777450">it</span> <span m="2777510">into</span> <span m="2777870">a</span>
  <span m="2777930">more</span> <span m="2778200">abstract</span> <span
  m="2778680">problem</span> <span m="2779730">that</span> <span
  m="2779910">people</span> <span m="2780330">have</span> <span
  m="2780900">thought</span> <span m="2781290">about</span> <span
  m="2781860">previously,</span> <span m="2783030">and</span> <span
  m="2783180">now</span> <span m="2783420">we</span> <span
  m="2783570">can</span> <span m="2783720">go</span> <span m="2783990">to</span>
  <span m="2784140">the</span> <span m="2784260">literature</span> <span
  m="2785220">on</span> <span m="2785400">Zolotarev</span> <span
  m="2786090">numbers,</span> <span m="2786450">whatever</span> <span
  m="2786780">they</span> <span m="2786990">are,</span> <span
  m="2787680">and</span> <span m="2787830">discover</span> <span
  m="2788340">this</span> <span m="2788520">whole</span> <span
  m="2789210">literature</span> <span m="2790200">of</span> <span
  m="2790380">work</span> <span m="2790980">on</span> <span
  m="2791190">this</span> <span m="2791340">Zolotarev</span> <span
  m="2791970">number.</span></p><p><span m="2792900">And</span> <span
  m="2793020">the</span> <span m="2793080">key</span> <span
  m="2793380">part--</span> <span m="2794610">I'll</span> <span
  m="2794680">just</span> <span m="2794850">tell</span> <span
  m="2795000">you</span> <span m="2795090">the</span> <span
  m="2795210">key--</span> <span m="2801240">is</span> <span
  m="2801390">that</span> <span m="2801630">the</span> <span
  m="2801930">sets</span> <span m="2802710">E</span> <span
  m="2802980">and</span> <span m="2803160">F</span> <span m="2803700">are</span>
  <span m="2803790">separated.</span> <span m="2813960">So</span> <span
  m="2814200">for</span> <span m="2814380">example,</span> <span
  m="2814950">in</span> <span m="2815070">the</span> <span
  m="2815160">Hilbert</span> <span m="2815580">matrix,</span> <span
  m="2816670">the</span> <span m="2816690">eigenvalues</span> <span
  m="2817440">of</span> <span m="2817560">A</span> <span m="2817905">can</span>
  <span m="2818250">be</span> <span m="2818370">read</span> <span
  m="2818580">off</span> <span m="2818730">the</span> <span
  m="2818820">diagonal.</span> <span m="2825540">What</span> <span
  m="2825750">are</span> <span m="2825900">they?</span> <span
  m="2826155">They</span> <span m="2826410">are</span> <span
  m="2826720">between</span> <span m="2828420">minus</span> <span
  m="2828900">1/2</span> <span m="2829980">and</span> <span m="2830420">n</span>
  <span m="2830580">minus</span> <span m="2831000">1/2.</span> <span
  m="2833550">And</span> <span m="2833670">the</span> <span
  m="2833760">eigenvalues</span> <span m="2834300">of</span> <span
  m="2834390">B</span> <span m="2835980">lie</span> <span m="2836400">in</span>
  <span m="2837240">the</span> <span m="2837390">set</span> <span
  m="2838770">minus</span> <span m="2839400">1/2</span> <span
  m="2840540">minus</span> <span m="2841020">n</span> <span
  m="2841260">plus</span> <span m="2841620">1/2.</span> <span
  m="2843524">And</span> <span m="2843990">the</span> <span
  m="2844550">key</span> <span m="2844970">reason</span> <span
  m="2845570">why</span> <span m="2845990">the</span> <span
  m="2846110">Hilbert</span> <span m="2846500">matrix</span> <span
  m="2847610">is</span> <span m="2847970">of</span> <span m="2848210">low</span>
  <span m="2848630">numerical</span> <span m="2849320">rank</span> <span
  m="2850130">is</span> <span m="2850250">the</span> <span
  m="2850340">fact</span> <span m="2850610">that</span> <span
  m="2850760">these</span> <span m="2851060">two</span> <span
  m="2851270">sets</span> <span m="2851630">are</span> <span
  m="2851720">separated,</span> <span m="2853470">and</span> <span
  m="2853570">that</span> <span m="2853640">makes</span> <span
  m="2853940">this</span> <span m="2854170">Zolotarev</span> <span
  m="2854840">number</span> <span m="2855290">gets</span> <span
  m="2855500">small</span> <span m="2856010">extremely</span> <span
  m="2856580">quickly</span> <span m="2857030">with</span> <span
  m="2857220">k.</span></p><p><span m="2858950">Now</span> <span
  m="2859220">you</span> <span m="2859370">might</span> <span
  m="2859580">wonder</span> <span m="2859910">why</span> <span
  m="2860310">there</span> <span m="2860420">is</span> <span
  m="2860600">a</span> <span m="2860660">question</span> <span
  m="2861080">mark</span> <span m="2861980">on</span> <span
  m="2862160">Penzl's</span> <span m="2862760">name.</span> <span
  m="2864980">There</span> <span m="2865160">is</span> <span
  m="2865620">an</span> <span m="2866780">unofficial</span> <span
  m="2867500">curse</span> <span m="2868350">that's</span> <span
  m="2869690">been</span> <span m="2869840">going</span> <span
  m="2870110">on</span> <span m="2870290">for</span> <span m="2870470">a</span>
  <span m="2870530">while.</span> <span m="2871430">Both</span> <span
  m="2871760">these</span> <span m="2871970">men</span> <span
  m="2872240">died</span> <span m="2873290">while</span> <span
  m="2873560">working</span> <span m="2874040">on</span> <span
  m="2874160">the</span> <span m="2874230">Zolotarev</span> <span
  m="2874730">problem.</span> <span m="2875870">They</span> <span
  m="2876020">both</span> <span m="2876320">died</span> <span
  m="2876770">at</span> <span m="2876920">the</span> <span
  m="2877070">age</span> <span m="2877340">of</span> <span
  m="2877490">31.</span> <span m="2880270">One</span> <span
  m="2880630">died</span> <span m="2881050">by</span> <span
  m="2881320">being</span> <span m="2881620">hit</span> <span
  m="2881830">by</span> <span m="2882040">a</span> <span
  m="2882100">train,</span> <span m="2882940">Zolotarev.</span> <span
  m="2883990">It's</span> <span m="2884170">unclear</span> <span
  m="2884680">whether</span> <span m="2885010">he</span> <span
  m="2885580">was</span> <span m="2885820">suicidal</span> <span
  m="2886570">or</span> <span m="2886770">it was</span> <span
  m="2886930">accidental.</span></p><p><span m="2888660">Penzl</span> <span
  m="2889690">died</span> <span m="2890050">at</span> <span
  m="2890140">the</span> <span m="2890260">age</span> <span
  m="2890410">of</span> <span m="2890500">31</span> <span m="2891190">in</span>
  <span m="2891370">the</span> <span m="2891490">Canadian</span> <span
  m="2892150">mountains</span> <span m="2893440">by</span> <span
  m="2893680">an</span> <span m="2893770">avalanche.</span> <span
  m="2896030">I</span> <span m="2896240">am</span> <span
  m="2896360">currently</span> <span m="2897950">not</span> <span
  m="2898340">yet</span> <span m="2898610">31</span> <span
  m="2899140">but</span> <span m="2899300">going</span> <span
  m="2899410">to</span> <span m="2899540">be</span> <span m="2899630">31</span>
  <span m="2899990">very</span> <span m="2900170">soon,</span> <span
  m="2901130">and</span> <span m="2901640">I'm</span> <span
  m="2902120">scared</span> <span m="2902570">that I</span> <span
  m="2902750">may</span> <span m="2902930">join</span> <span
  m="2903230">this</span> <span m="2903410">list.</span> <span
  m="2907860">OK.</span> <span m="2909020">But</span> <span
  m="2909140">for</span> <span m="2909290">the</span> <span
  m="2909380">Hilbert</span> <span m="2909740">matrix,</span> <span
  m="2910490">what</span> <span m="2910700">you</span> <span
  m="2910850">get</span> <span m="2911090">from</span> <span
  m="2911330">this</span> <span m="2911720">analysis,</span> <span
  m="2912770">based</span> <span m="2913280">on</span> <span
  m="2914390">these</span> <span m="2914720">two</span> <span
  m="2914930">peoples'</span> <span m="2915290">work,</span> <span
  m="2916520">is</span> <span m="2916710">a</span> <span
  m="2916730">bound</span> <span m="2917570">on</span> <span
  m="2917720">the</span> <span m="2917810">numerical</span> <span
  m="2918350">rank.</span> <span m="2919700">And</span> <span
  m="2919880">the</span> <span m="2919970">rank</span> <span
  m="2920270">that</span> <span m="2920390">you</span> <span
  m="2920540">get</span> <span m="2921260">is,</span> <span
  m="2922690">let's</span> <span m="2922850">say,</span> <span
  m="2923150">a</span> <span m="2923240">world</span> <span
  m="2923630">record</span> <span m="2924020">bound.</span> <span
  m="2925820">For</span> <span m="2925970">the</span> <span
  m="2926060">Hilbert</span> <span m="2926360">matrix</span> <span
  m="2929510">is</span> <span m="2931100">34,</span> <span
  m="2932100">which</span> <span m="2932320">is</span> <span
  m="2932510">not</span> <span m="2932660">quite</span> <span
  m="2932900">28,</span> <span m="2934280">not</span> <span
  m="2934430">yet,</span> <span m="2936260">but</span> <span
  m="2936440">it's</span> <span m="2936590">far</span> <span
  m="2936950">more</span> <span m="2938270">descriptive</span> <span
  m="2939050">of</span> <span m="2939220">28</span> <span
  m="2939880">than</span> <span m="2940090">719.</span></p><p><span
  m="2942860">And</span> <span m="2944390">so</span> <span
  m="2944720">this</span> <span m="2945200">technique</span> <span
  m="2945860">of</span> <span m="2946010">bounding</span> <span
  m="2946490">singular</span> <span m="2946910">values</span> <span
  m="2947420">by</span> <span m="2947630">using</span> <span
  m="2947960">these</span> <span m="2948110">Zolotarev</span> <span
  m="2948740">numbers</span> <span m="2949550">is</span> <span
  m="2949700">starting</span> <span m="2950150">to</span> <span
  m="2950270">gain</span> <span m="2950630">popularity</span> <span
  m="2951530">because</span> <span m="2952400">we</span> <span
  m="2952550">can</span> <span m="2952700">finally</span> <span
  m="2953210">answer</span> <span m="2953690">to</span> <span
  m="2953900">ourselves</span> <span m="2954980">why</span> <span
  m="2955370">there</span> <span m="2955520">are</span> <span
  m="2955640">so</span> <span m="2955940">many</span> <span
  m="2956240">low-rank</span> <span m="2956840">matrices</span> <span
  m="2957530">that</span> <span m="2957680">appear</span> <span
  m="2958130">in</span> <span m="2958310">computational</span> <span
  m="2958980">math.</span> <span m="2960420">And</span> <span
  m="2961950">it's</span> <span m="2962100">all</span> <span
  m="2962220">based</span> <span m="2962640">on</span> <span
  m="2963230">two</span> <span m="2964270">31-year-olds</span> <span
  m="2965620">that</span> <span m="2965760">died.</span> <span
  m="2967440">And</span> <span m="2969000">so</span> <span m="2969240">if</span>
  <span m="2969360">you</span> <span m="2969480">ever</span> <span
  m="2969660">wonder</span> <span m="2970440">when</span> <span
  m="2970620">you're</span> <span m="2970710">doing</span> <span
  m="2970920">computational</span> <span m="2971400">science</span> <span
  m="2972120">when</span> <span m="2972300">a</span> <span
  m="2972360">low</span> <span m="2972540">rank</span> <span
  m="2972810">appears</span> <span m="2973830">and</span> <span
  m="2973980">the</span> <span m="2974070">smoothness</span> <span
  m="2974670">argument</span> <span m="2975120">does</span> <span
  m="2975330">not</span> <span m="2975480">work</span> <span
  m="2975750">for</span> <span m="2975900">you,</span> <span
  m="2976710">you</span> <span m="2976830">might</span> <span
  m="2977100">like</span> <span m="2977280">to</span> <span
  m="2977370">think</span> <span m="2977700">about</span> <span
  m="2978090">Zolotarev</span> <span m="2978990">and</span> <span
  m="2979110">the</span> <span m="2979200">curse.</span> <span
  m="2980990">OK,</span> <span m="2981570">thank</span> <span
  m="2981780">you</span> <span m="2981840">very</span> <span
  m="2981960">much.</span></p><p><span
  m="2982721">[APPLAUSE]</span></p><p>&nbsp;</p><p><span m="2987431">GILBERT
  STRANG:</span> <span m="2987666">Thank you</span> <span
  m="2987902">[INAUDIBLE]</span> <span m="2988373">Excellent.</span></p><p><span
  m="2989790">ALEX TOWNSEND:</span> <span m="2989880">How</span> <span
  m="2989970">does</span> <span m="2990120">it</span> <span
  m="2990210">work</span> <span m="2990390">now?</span></p><p><span
  m="2991880">GILBERT STRANG:</span> <span m="2992130">We're</span> <span
  m="2992380">good.</span> <span m="2993680">Yeah.</span></p><p><span
  m="2994260">ALEX TOWNSEND:</span> <span m="2994335">I'm</span> <span
  m="2994410">happy</span> <span m="2994620">to</span> <span
  m="2994710">take</span> <span m="2994830">questions</span> <span
  m="2995730">if</span> <span m="2995910">we</span> <span
  m="2996030">have</span> <span m="2996240">a</span> <span
  m="2996300">minute,</span> <span m="2996960">if</span> <span
  m="2997050">you</span> <span m="2997140">have</span> <span
  m="2997260">any</span> <span m="2997410">questions.</span></p><p><span
  m="2997920">GILBERT STRANG:</span> <span m="2997962">How</span> <span
  m="2998004">near</span> <span m="2998046">of</span> <span
  m="2998088">31</span> <span m="2998130">are you?</span></p><p><span
  m="3002400">ALEX TOWNSEND:</span> <span m="3002430">[INAUDIBLE]</span> <span
  m="3002460">I</span> <span m="3002820">get</span> <span m="3003090">a</span>
  <span m="3003150">spotlight.</span> <span m="3003960">I'm</span> <span
  m="3004140">31</span> <span m="3004590">in</span> <span
  m="3004680">December.</span></p><p><span m="3005490">GILBERT STRANG:</span>
  <span m="3005700">Wow.</span> <span m="3006330">OK.</span></p><p><span
  m="3007170">ALEX TOWNSEND:</span> <span m="3007320">So</span> <span
  m="3007470">they</span> <span m="3007620">died</span> <span
  m="3007950">at</span> <span m="3008160">the</span> <span
  m="3008280">age</span> <span m="3008490">of</span> <span
  m="3008610">31,</span> <span m="3009120">so</span> <span
  m="3010470">you</span> <span m="3010550">know,</span> <span
  m="3010920">next</span> <span m="3011280">year</span> <span
  m="3011520">is</span> <span m="3011670">the</span> <span
  m="3011940">scary</span> <span m="3012360">year</span> <span
  m="3012570">for</span> <span m="3012690">me.</span> <span
  m="3014640">So</span> <span m="3015600">I'm not</span> <span
  m="3015810">driving</span> <span m="3016230">anywhere.</span> <span
  m="3016550">I'm</span> <span m="3016870">not</span> <span
  m="3017100">leaving</span> <span m="3017370">my</span> <span
  m="3017490">house</span> <span m="3018660">until</span> <span
  m="3018900">I</span> <span m="3018990">become</span> <span
  m="3019270">32.</span></p><p><span m="3020930">GILBERT STRANG:</span> <span
  m="3021090">Well,</span> <span m="3021250">thank</span> <span
  m="3021490">you</span> <span m="3021790">[INAUDIBLE]</span></p><p><span
  m="3022690">ALEX TOWNSEND:</span> <span m="3022790">OK,</span> <span
  m="3022890">thanks.</span></p><p><span
  m="3024190">[APPLAUSE]</span></p><p>&nbsp;</p>
embedded_media:
  - uid: cd2948433ad817d66ffd95a47977584e
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 9BYsNpTCZGg
  - uid: a802065f78c37d682036dc32aca9055b
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/9BYsNpTCZGg/default.jpg'
  - uid: 58eed1c6ea38701d20b1d24e93e8df3a
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 9BYsNpTCZGg
  - uid: b70b4d81660d707bb57ce3edfcfbf794
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: 9BYsNpTCZGg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-17-rapidly-decreasing-singular-values/9BYsNpTCZGg.srt
  - uid: 2e06fb9f2c8b5cd7ea48a6cf2994db13
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: 9BYsNpTCZGg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-17-rapidly-decreasing-singular-values/9BYsNpTCZGg.pdf
  - uid: 71c9e716e54a21ffd6ecf2e7a46e15ee
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 2a136a68e79a4574e88e8305c0b0ef3f
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 4ae4dd8f6b2083de133bc71c3289a2f3
    parent_uid: 2e886024ae523bdce29d1126eac0b14d
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture17_300k.mp4'
type: courses
layout: video
---
