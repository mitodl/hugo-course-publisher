---
title: 'Lecture 16: Projection Matrices and Least Squares'
uid: fda8b54acc7c4cc7d39e5eac76aec9eb
parent_uid: 754d6be4ca3c378b6c8b2e4a955ffe64
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/lecture-16-projection-matrices-and-least-squares
short_url: lecture-16-projection-matrices-and-least-squares
inline_embed_id: 5403135lecture16projectionmatricesandleastsquares75666337
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m="7460">OK.</span> <span m="9910">Here's</span> <span
  m="10550">lecture</span> <span m="11220">sixteen</span> <span
  m="12350">and</span> <span m="13830">if</span> <span m="14370">you</span>
  <span m="14520">remember</span> <span m="15260">I</span> <span
  m="15490">ended</span> <span m="15920">up</span> <span m="16650">the</span>
  <span m="17150">last</span> <span m="17550">lecture</span> <span
  m="18440">with</span> <span m="18750">this</span> <span
  m="19200">formula</span> <span m="19960">for</span> <span
  m="20850">what</span> <span m="21150">I</span> <span m="21300">called</span>
  <span m="21840">a</span> <span m="22070">projection</span> <span
  m="22830">matrix.</span></p><p><span m="24610">And</span> <span
  m="25660">maybe</span> <span m="26240">I</span> <span m="26330">could</span>
  <span m="26570">just</span> <span m="26960">recap</span> <span
  m="27600">for</span> <span m="27750">a</span> <span m="27810">minute</span>
  <span m="29390">what</span> <span m="31610">is</span> <span
  m="31750">that</span> <span m="32049">magic</span> <span
  m="32680">formula</span> <span m="33320">doing?</span></p><p><span
  m="35010">For</span> <span m="35180">example,</span> <span
  m="36590">it's</span> <span m="37420">supposed</span> <span
  m="37830">to</span> <span m="37910">be</span> <span m="38370">--</span> <span
  m="38390">it's</span> <span m="38550">supposed</span> <span
  m="38850">to</span> <span m="38970">produce</span> <span m="39470">a</span>
  <span m="39540">projection,</span> <span m="40230">if</span> <span
  m="40370">I</span> <span m="40490">multiply</span> <span m="41320">by</span>
  <span m="42050">a</span> <span m="42270">b,</span> <span m="42710">so</span>
  <span m="42860">I</span> <span m="42970">take</span> <span m="43270">P</span>
  <span m="43490">times</span> <span m="43980">b,</span> <span
  m="44770">I'm</span> <span m="45300">supposed</span> <span m="45850">to</span>
  <span m="45970">project</span> <span m="46730">that</span> <span
  m="47710">vector</span> <span m="48350">b</span> <span m="49470">to</span>
  <span m="50020">the</span> <span m="50240">nearest</span> <span
  m="50850">point</span> <span m="51240">in</span> <span m="51520">the</span>
  <span m="51650">column</span> <span m="52060">space.</span></p><p><span
  m="54150">OK.</span> <span m="54800">Can</span> <span m="55290">I</span> <span
  m="55400">just</span> <span m="55780">--</span> <span m="56350">one</span>
  <span m="56620">way</span> <span m="56790">to</span> <span
  m="56900">recap</span> <span m="57480">is</span> <span m="57670">to</span>
  <span m="57830">take</span> <span m="58220">the</span> <span
  m="58370">two</span> <span m="59340">extreme</span> <span
  m="60210">cases.</span></p><p><span m="61420">Suppose</span> <span
  m="62030">a</span> <span m="62090">vector</span> <span m="62520">b</span>
  <span m="62820">is</span> <span m="62980">in</span> <span m="63150">the</span>
  <span m="63290">column</span> <span m="63680">space?</span></p><p><span
  m="65040">Then</span> <span m="65720">what</span> <span m="66430">do</span>
  <span m="66600">I</span> <span m="66720">get</span> <span
  m="67050">when</span> <span m="67310">I</span> <span m="67440">apply</span>
  <span m="67860">the</span> <span m="67990">projection</span> <span
  m="68660">P?</span> <span m="70030">So</span> <span m="71330">I'm</span> <span
  m="71500">projecting</span> <span m="72110">into</span> <span
  m="72320">the</span> <span m="72470">column</span> <span
  m="72870">space</span> <span m="73610">but</span> <span m="73830">I'm</span>
  <span m="73980">starting</span> <span m="74570">with</span> <span
  m="74760">a</span> <span m="74810">vector</span> <span m="76040">in</span>
  <span m="76770">this</span> <span m="77420">case</span> <span
  m="78140">that's</span> <span m="78380">already</span> <span
  m="78780">in</span> <span m="78940">the</span> <span m="79060">column</span>
  <span m="79450">space,</span> <span m="79950">so</span> <span
  m="80140">of</span> <span m="80300">course</span> <span m="80950">when</span>
  <span m="81330">I</span> <span m="81450">project</span> <span
  m="82020">it</span> <span m="82180">I</span> <span m="82290">get</span> <span
  m="83210">B</span> <span m="83930">again,</span> <span
  m="84420">right.</span></p><p><span m="85860">And</span> <span
  m="86080">I</span> <span m="87060">want</span> <span m="87280">to</span> <span
  m="87340">show</span> <span m="87630">you</span> <span m="87730">how</span>
  <span m="88030">that</span> <span m="88420">comes</span> <span
  m="88720">out</span> <span m="88910">of</span> <span m="88980">this</span>
  <span m="89210">formula.</span></p><p><span m="89860">Let</span> <span
  m="90010">me</span> <span m="90140">do</span> <span m="90310">the</span> <span
  m="91110">other</span> <span m="91370">extreme.</span></p><p><span
  m="92550">Suppose</span> <span m="93060">that</span> <span
  m="93270">vector</span> <span m="93710">is</span> <span
  m="93860">perpendicular</span> <span m="94720">to</span> <span
  m="94810">the</span> <span m="94950">column</span> <span
  m="95350">space.</span></p><p><span m="96210">So</span> <span
  m="96380">imagine</span> <span m="96800">this</span> <span
  m="97020">column</span> <span m="97390">space</span> <span m="97770">as</span>
  <span m="97920">a</span> <span m="98010">plane</span> <span
  m="98860">and</span> <span m="99270">imagine</span> <span m="99810">b</span>
  <span m="100170">as</span> <span m="100310">sticking</span> <span
  m="100780">straight</span> <span m="101340">up</span> <span
  m="101740">perpendicular</span> <span m="102550">to</span> <span
  m="102770">it.</span></p><p><span m="103490">What's</span> <span
  m="103950">the</span> <span m="104160">nearest</span> <span
  m="104800">point</span> <span m="105380">in</span> <span m="105560">the</span>
  <span m="105700">column</span> <span m="106090">space</span> <span
  m="106960">to</span> <span m="107340">b</span> <span m="108300">in</span>
  <span m="108640">that</span> <span m="108870">case?</span></p><p><span
  m="110490">So</span> <span m="110710">what's</span> <span
  m="111100">the</span> <span m="111220">projection</span> <span
  m="112600">onto</span> <span m="113480">the</span> <span
  m="113630">plane,</span> <span m="114380">the</span> <span
  m="114580">nearest</span> <span m="114980">point</span> <span
  m="115280">in</span> <span m="115370">the</span> <span
  m="115470">plane,</span> <span m="116230">if</span> <span
  m="116920">the</span> <span m="117090">vector</span> <span m="117500">b</span>
  <span m="117820">that</span> <span m="117980">I'm</span> <span
  m="118180">looking</span> <span m="118560">at</span> <span
  m="118870">is</span> <span m="119300">--</span> <span m="119800">got</span>
  <span m="120070">no</span> <span m="120390">component</span> <span
  m="121040">in</span> <span m="121130">the</span> <span
  m="121260">column</span> <span m="121630">space,</span> <span
  m="122000">it's</span> <span m="122210">sticking</span> <span
  m="122610">completely</span> <span m="123250">--</span> <span
  m="123550">ninety</span> <span m="123930">degrees</span> <span
  m="124410">with</span> <span m="124620">it,</span> <span
  m="125050">then</span> <span m="125810">Pb</span> <span
  m="126520">should</span> <span m="126790">be</span> <span
  m="127820">zero,</span> <span m="128780">right.</span></p><p><span
  m="130220">So</span> <span m="130610">those</span> <span m="130889">are</span>
  <span m="130960">the</span> <span m="131130">two</span> <span
  m="131350">extreme</span> <span m="131830">cases.</span></p><p><span
  m="133040">The</span> <span m="133280">average</span> <span
  m="133920">vector</span> <span m="134770">has</span> <span m="135290">a</span>
  <span m="135370">component</span> <span m="136320">P</span> <span
  m="136790">in</span> <span m="136930">the</span> <span
  m="137060">column</span> <span m="137460">space</span> <span
  m="138000">and</span> <span m="138270">a</span> <span
  m="138360">component</span> <span m="139310">perpendicular</span> <span
  m="140260">to</span> <span m="140460">it,</span> <span m="140930">and</span>
  <span m="141720">what</span> <span m="142080">the</span> <span
  m="142210">projection</span> <span m="142800">does</span> <span
  m="143140">is</span> <span m="143650">it</span> <span m="143970">kills</span>
  <span m="144980">this</span> <span m="145430">part</span> <span
  m="145930">and</span> <span m="146230">it</span> <span
  m="147030">preserves</span> <span m="148570">this</span> <span
  m="148810">part.</span> <span m="149760">OK.</span> <span
  m="150010">Can</span> <span m="150260">we</span> <span m="150370">just</span>
  <span m="150590">see</span> <span m="150790">why</span> <span
  m="151010">that's</span> <span m="151350">true?</span></p><p><span
  m="152230">Just</span> <span m="152710">--</span> <span m="153650">that</span>
  <span m="154390">formula</span> <span m="155890">ought</span> <span
  m="156470">to</span> <span m="156540">work.</span></p><p><span
  m="157140">So</span> <span m="157540">let</span> <span m="158310">me</span>
  <span m="158430">start</span> <span m="158720">with</span> <span
  m="158860">this</span> <span m="159060">one.</span> <span
  m="161010">What</span> <span m="161230">vectors</span> <span
  m="161720">are</span> <span m="161900">in</span> <span m="162000">the</span>
  <span m="162220">--</span> <span m="162490">are</span> <span
  m="162750">perpendicular</span> <span m="163610">to</span> <span
  m="163750">the</span> <span m="163890">column</span></p><p><span
  m="164260">space?</span> <span m="165240">How</span> <span
  m="165900">do</span> <span m="166030">I</span> <span m="166180">see</span>
  <span m="166510">that</span> <span m="166700">I</span> <span
  m="166800">really</span> <span m="167090">get</span> <span
  m="167320">zero?</span></p><p><span m="168220">I</span> <span
  m="168360">have</span> <span m="168490">to</span> <span
  m="168640">think,</span> <span m="168960">what</span> <span
  m="169180">does</span> <span m="169330">it</span> <span m="169500">mean</span>
  <span m="169840">for</span> <span m="169980">a</span> <span
  m="170050">vector</span> <span m="170460">b</span> <span m="170850">to</span>
  <span m="170960">be</span> <span m="171640">perpendicular</span> <span
  m="172710">to</span> <span m="172820">the</span> <span
  m="172950">column</span> <span m="173350">space?</span></p><p><span
  m="174410">So</span> <span m="174630">if</span> <span m="174730">it's</span>
  <span m="174930">perpendicular</span> <span m="175710">to</span> <span
  m="175840">all</span> <span m="176060">the</span> <span
  m="176200">columns,</span> <span m="179430">then</span> <span
  m="180110">it's</span> <span m="180360">in</span> <span m="180560">some</span>
  <span m="180790">other</span> <span m="181070">space.</span></p><p><span
  m="182100">We've</span> <span m="182300">got</span> <span
  m="182540">our</span> <span m="182690">four</span> <span
  m="183010">spaces</span> <span m="183440">so</span> <span
  m="184100">the</span> <span m="184380">reason</span> <span m="184680">I</span>
  <span m="184780">do</span> <span m="185010">this</span> <span
  m="185260">is</span> <span m="185460">it's</span> <span
  m="185740">perfectly</span> <span m="186390">using</span> <span
  m="187000">what</span> <span m="187250">we</span> <span m="187380">know</span>
  <span m="187640">about</span> <span m="187900">our</span> <span
  m="188050">four</span> <span m="188360">spaces.</span> <span
  m="190030">What</span> <span m="190460">vectors</span> <span
  m="190960">are</span> <span m="191070">perpendicular</span> <span
  m="191870">to</span> <span m="191960">the</span> <span
  m="192090">column</span> <span m="192490">space?</span></p><p><span
  m="193860">Those</span> <span m="194190">are</span> <span
  m="194260">the</span> <span m="194400">guys</span> <span m="195050">in</span>
  <span m="195240">the</span> <span m="195380">null</span> <span
  m="195760">space</span> <span m="196330">of</span> <span m="198040">A</span>
  <span m="198210">transpose,</span></p><p><span m="199190">right?</span> <span
  m="200290">That's</span> <span m="200830">the</span> <span
  m="200960">first</span> <span m="201270">section</span> <span
  m="201740">of</span> <span m="201870">this</span> <span
  m="202260">chapter,</span> <span m="202740">that's</span> <span
  m="202980">the</span> <span m="203130">key</span> <span
  m="203880">geometry</span> <span m="204710">of</span> <span
  m="204800">these</span> <span m="205030">spaces.</span></p><p><span
  m="206160">If</span> <span m="206390">I'm</span> <span
  m="206590">perpendicular</span> <span m="207270">to</span> <span
  m="207290">the</span> <span m="207440">column</span> <span
  m="207820">space,</span> <span m="208300">I'm</span> <span
  m="208550">in</span> <span m="208650">the</span> <span m="208790">null</span>
  <span m="209090">space</span> <span m="209590">of</span> <span
  m="209730">A</span> <span m="209900">transpose.</span> <span
  m="211180">OK.</span> <span m="211460">So</span> <span m="211780">if</span>
  <span m="211860">I'm</span> <span m="212020">in</span> <span
  m="212110">the</span> <span m="212220">null</span> <span
  m="212430">space</span> <span m="212770">of</span> <span m="212890">A</span>
  <span m="213010">transpose,</span> <span m="213790">and</span> <span
  m="213970">I</span> <span m="214050">multiply</span> <span
  m="215420">this</span> <span m="216650">big</span> <span
  m="217280">formula</span> <span m="217830">times</span> <span
  m="218350">b,</span> <span m="219670">so</span> <span m="220350">now</span>
  <span m="220520">I'm</span> <span m="220670">getting</span> <span
  m="221040">Pb,</span> <span m="221760">this</span> <span m="221990">is</span>
  <span m="222180">now</span> <span m="222540">the</span> <span
  m="222930">projection,</span> <span m="224120">Pb,</span> <span
  m="225380">do</span> <span m="227290">you</span> <span m="227450">see</span>
  <span m="227690">that</span> <span m="227850">I</span> <span
  m="227920">get</span> <span m="228150">zero?</span></p><p><span
  m="228530">Of</span> <span m="228640">course</span> <span m="228920">I</span>
  <span m="228980">get</span> <span m="229180">zero.</span></p><p><span
  m="230470">Right</span> <span m="230730">at</span> <span m="230870">the</span>
  <span m="231050">end</span> <span m="231310">there,</span> <span
  m="231600">A</span> <span m="231810">transpose</span> <span
  m="232530">b</span> <span m="232950">will</span> <span m="233170">give</span>
  <span m="233320">me</span> <span m="233490">zero</span> <span
  m="233830">right</span> <span m="234070">away.</span></p><p><span
  m="234840">So</span> <span m="235500">that's</span> <span
  m="235890">why</span> <span m="236180">that</span> <span
  m="236430">zero's</span> <span m="236880">here.</span></p><p><span
  m="237780">Because</span> <span m="238060">if</span> <span
  m="238210">I'm</span> <span m="238400">perpendicular</span> <span
  m="239180">to</span> <span m="239270">the</span> <span
  m="239430">column</span> <span m="239800">space,</span> <span
  m="240520">then</span> <span m="240890">I'm</span> <span m="241030">in</span>
  <span m="241150">the</span> <span m="241280">null</span> <span
  m="241560">space</span> <span m="241920">of</span> <span m="242040">A</span>
  <span m="242190">transpose</span> <span m="243030">and</span> <span
  m="243050">A</span> <span m="243260">transpose</span> <span
  m="243840">b</span> <span m="244080">is</span> <span m="246350">OK,</span>
  <span m="246540">what</span> <span m="246740">about</span> <span
  m="247000">the</span> <span m="247160">other</span> <span
  m="247400">possibility.</span> <span m="248640">zilch.</span> <span
  m="249970">How</span> <span m="250320">do</span> <span m="250440">I</span>
  <span m="250560">see</span> <span m="250860">that</span> <span
  m="251030">this</span> <span m="251260">formula</span> <span
  m="251690">gives</span> <span m="251970">me</span> <span m="252110">the</span>
  <span m="252220">right</span> <span m="252530">answer</span> <span
  m="253370">if</span> <span m="253830">b</span> <span m="254150">is</span>
  <span m="254310">in</span> <span m="254450">the</span> <span
  m="254580">column</span> <span m="254970">space?</span></p><p><span
  m="258230">So</span> <span m="258390">what's</span> <span m="258720">a</span>
  <span m="258829">typical</span> <span m="259279">vector</span> <span
  m="259690">in</span> <span m="259790">the</span> <span
  m="259910">column</span> <span m="260290">space?</span></p><p><span
  m="261890">It's</span> <span m="262060">a</span> <span
  m="262140">combination</span> <span m="262880">of</span> <span
  m="262970">the</span> <span m="263100">columns.</span></p><p><span
  m="264480">How</span> <span m="264750">do</span> <span m="264900">I</span>
  <span m="265000">write</span> <span m="265330">a</span> <span
  m="265400">combination</span> <span m="266140">of</span> <span
  m="266220">the</span> <span m="266340">columns?</span> <span
  m="267240">So</span> <span m="267790">tell</span> <span m="268180">me,</span>
  <span m="268320">how</span> <span m="268590">would</span> <span
  m="268810">I</span> <span m="268920">write,</span> <span m="270070">you</span>
  <span m="270880">know,</span> <span m="271090">your</span> <span
  m="271320">everyday</span> <span m="271770">vector</span> <span
  m="272260">that's</span> <span m="272510">in</span> <span
  m="272660">the</span> <span m="272790">column</span> <span
  m="273160">space?</span></p><p><span m="274440">It</span> <span
  m="274600">would</span> <span m="274840">have</span> <span
  m="275150">the</span> <span m="275280">form</span> <span m="275880">A</span>
  <span m="276430">times</span> <span m="277000">some</span> <span
  m="277300">x,</span> <span m="277690">right?</span></p><p><span
  m="278860">That's</span> <span m="279120">what's</span> <span
  m="279320">in</span> <span m="279450">the</span> <span
  m="279560">column</span> <span m="279920">space,</span> <span
  m="280530">A</span> <span m="280740">times</span> <span
  m="281060">something.</span></p><p><span m="282280">That</span> <span
  m="282490">makes</span> <span m="282760">it</span> <span m="282890">a</span>
  <span m="282960">combination</span> <span m="283610">of</span> <span
  m="283670">the</span> <span m="283790">columns.</span></p><p><span
  m="284730">So</span> <span m="285250">these</span> <span m="285760">b's</span>
  <span m="286310">were</span> <span m="286600">in</span> <span
  m="287680">the</span> <span m="287800">null</span> <span
  m="288040">space</span> <span m="288380">of</span> <span m="288500">A</span>
  <span m="288640">transpose.</span></p><p><span m="289570">These</span> <span
  m="290140">guys</span> <span m="290520">in</span> <span m="290620">the</span>
  <span m="290740">column</span> <span m="291120">space,</span> <span
  m="291710">those</span> <span m="292190">b's</span> <span
  m="292750">are</span> <span m="293520">Ax-s.</span> <span
  m="294640">Right?</span></p><p><span m="295210">If</span> <span
  m="295410">b</span> <span m="295570">is</span> <span m="295730">in</span>
  <span m="295850">the</span> <span m="295980">column</span> <span
  m="296320">space</span> <span m="297000">then</span> <span
  m="297390">it</span> <span m="297520">has</span> <span m="297880">the</span>
  <span m="298010">form</span> <span m="298450">Ax.</span></p><p><span
  m="301380">I'm</span> <span m="301600">going</span> <span m="301780">to</span>
  <span m="301860">stick</span> <span m="302100">that</span> <span
  m="302340">on</span> <span m="302520">the</span> <span m="302650">quiz</span>
  <span m="302980">or</span> <span m="303050">the</span> <span
  m="303190">final</span> <span m="303570">for</span> <span
  m="303750">sure.</span></p><p><span m="304450">That</span> <span
  m="304630">you</span> <span m="304900">have</span> <span m="305200">to</span>
  <span m="305400">realize</span> <span m="306680">--</span> <span
  m="306710">because</span> <span m="307270">we've</span> <span
  m="307480">said</span> <span m="307730">it</span> <span m="307900">like</span>
  <span m="308290">a</span> <span m="308420">thousand</span> <span
  m="308920">times</span> <span m="309600">that</span> <span
  m="310390">the</span> <span m="310790">things</span> <span
  m="311240">in</span> <span m="311360">the</span> <span
  m="311470">column</span> <span m="311840">space</span> <span
  m="312200">are</span> <span m="312440">vectors</span> <span
  m="313020">A</span> <span m="313250">times</span> <span m="313640">x.</span>
  <span m="314410">OK.</span> <span m="314740">And</span> <span
  m="315080">do</span> <span m="315130">you</span> <span m="315240">see</span>
  <span m="315500">what</span> <span m="315720">happens</span> <span
  m="316250">now</span> <span m="316580">if</span> <span m="316680">we</span>
  <span m="316830">use</span> <span m="317100">our</span> <span
  m="317240">formula?</span></p><p><span m="318050">There's</span> <span
  m="318340">an</span> <span m="318490">A</span> <span
  m="318660">transpose</span> <span m="319350">A.</span></p><p><span
  m="319990">Gets</span> <span m="320220">canceled</span> <span
  m="320710">by</span> <span m="320910">its</span> <span
  m="321090">inverse.</span></p><p><span m="321860">We're</span> <span
  m="322050">left</span> <span m="322370">with</span> <span m="322560">an</span>
  <span m="322700">A</span> <span m="323250">times</span> <span
  m="323830">x.</span></p><p><span m="325800">So</span> <span
  m="326050">the</span> <span m="326170">result</span> <span
  m="326610">was</span> <span m="326830">Ax.</span></p><p><span
  m="327530">Which</span> <span m="327820">was</span> <span
  m="328160">b.</span></p><p><span m="328570">Do</span> <span
  m="328890">you</span> <span m="329290">see</span> <span m="329470">that</span>
  <span m="329630">it</span> <span m="329700">works?</span></p><p><span
  m="330100">This</span> <span m="330320">is</span> <span m="330520">that</span>
  <span m="330710">whole</span> <span m="331030">business.</span></p><p><span
  m="332750">Cancel,</span> <span m="333270">cancel,</span> <span
  m="333930">leaving</span> <span m="334340">Ax.</span></p><p><span
  m="335870">And</span> <span m="336390">Ax</span> <span m="336890">was</span>
  <span m="337120">b.</span></p><p><span m="337840">So</span> <span
  m="338100">that</span> <span m="338480">turned</span> <span
  m="338780">out</span> <span m="338980">to</span> <span m="339060">be</span>
  <span m="339230">b,</span> <span m="340150">in</span> <span
  m="342260">this</span> <span m="342590">case.</span> <span
  m="343730">OK,</span> <span m="343950">so</span> <span
  m="344520">geometrically</span> <span m="345740">what</span> <span
  m="346360">we're</span> <span m="346640">seeing</span> <span
  m="347580">is</span> <span m="349320">we're</span> <span
  m="350480">taking</span> <span m="350870">a</span> <span
  m="350910">vector</span> <span m="351300">--</span> <span
  m="353010">we've</span> <span m="353260">got</span> <span
  m="353560">the</span> <span m="354360">column</span> <span
  m="355070">space</span> <span m="359110">and</span> <span
  m="359350">perpendicular</span> <span m="360210">to</span> <span
  m="360310">that</span> <span m="360770">is</span> <span m="361180">the</span>
  <span m="362200">null</span> <span m="363060">space</span> <span
  m="363870">of</span> <span m="364100">A</span> <span
  m="364270">transpose.</span></p><p><span m="366350">And</span> <span
  m="366620">our</span> <span m="366810">typical</span> <span
  m="367330">vector</span> <span m="367730">b</span> <span m="368050">is</span>
  <span m="368240">out</span> <span m="368460">here.</span></p><p><span
  m="370230">There's</span> <span m="370550">zero,</span> <span
  m="370950">so</span> <span m="371130">there's</span> <span
  m="371410">our</span> <span m="371550">typical</span> <span
  m="372000">vector</span> <span m="372360">b,</span> <span
  m="372970">and</span> <span m="373250">what</span> <span
  m="373470">we're</span> <span m="373590">doing</span> <span
  m="373970">is</span> <span m="374380">we're</span> <span
  m="374570">projecting</span> <span m="375210">it</span> <span
  m="375710">to</span> <span m="376410">P.</span> <span m="377980">And</span>
  <span m="378890">the</span> <span m="379150">--</span> <span
  m="379460">and</span> <span m="379710">of</span> <span
  m="379800">course</span> <span m="380100">at</span> <span
  m="380220">the</span> <span m="380330">same</span> <span
  m="380640">time</span> <span m="380980">we're</span> <span
  m="381160">finding</span> <span m="381640">the</span> <span
  m="381790">other</span> <span m="382020">part</span> <span
  m="382300">of</span> <span m="382400">it</span> <span m="382770">which</span>
  <span m="383120">is</span> <span m="383630">e.</span></p><p><span
  m="384810">So</span> <span m="385060">the</span> <span m="386170">two</span>
  <span m="386370">pieces,</span> <span m="387260">the</span> <span
  m="387750">projection</span> <span m="388570">piece</span> <span
  m="389400">and</span> <span m="390000">the</span> <span
  m="390120">error</span> <span m="390520">piece,</span> <span
  m="391150">add</span> <span m="391450">up</span> <span m="391750">to</span>
  <span m="392630">the</span> <span m="392940">original</span> <span
  m="393620">b.</span> <span m="395280">OK.</span> <span
  m="396230">That's</span> <span m="396660">like</span> <span
  m="397160">what</span> <span m="397750">our</span> <span
  m="397880">matrix</span> <span m="398490">does.</span></p><p><span
  m="399520">So</span> <span m="399720">this</span> <span m="399970">is</span>
  <span m="400390">P</span> <span m="401400">--</span> <span m="401440">P</span>
  <span m="401720">is</span> <span m="402140">--</span> <span
  m="402170">this</span> <span m="402420">P</span> <span m="402730">is</span>
  <span m="403060">Ab,</span> <span m="404030">is</span> <span
  m="404440">sorry</span> <span m="405130">--</span> <span m="405200">is</span>
  <span m="405520">Pb,</span> <span m="406560">it's</span> <span
  m="406850">the</span> <span m="406960">projection,</span> <span
  m="408260">applied</span> <span m="409270">to</span> <span
  m="409390">b,</span> <span m="410320">and</span> <span m="410850">this</span>
  <span m="411130">one</span> <span m="411610">is</span> <span
  m="412270">--</span> <span m="412590">OK,</span> <span
  m="412920">that's</span> <span m="413270">a</span> <span
  m="413340">projection</span> <span m="414010">too.</span></p><p><span
  m="415080">That's</span> <span m="415340">a</span> <span
  m="415430">projection</span> <span m="416050">down</span> <span
  m="416360">onto</span> <span m="416630">that</span> <span
  m="416900">space.</span></p><p><span m="418070">What's</span> <span
  m="418330">a</span> <span m="418440">good</span> <span
  m="418670">formula</span> <span m="419120">for</span> <span
  m="419410">it?</span></p><p><span m="419860">Suppose</span> <span
  m="420320">I</span> <span m="420440">ask</span> <span m="420850">you</span>
  <span m="421390">for</span> <span m="421770">the</span> <span
  m="421930">projection</span> <span m="423240">of</span> <span
  m="424630">the</span> <span m="424810">projection</span> <span
  m="425340">matrix</span> <span m="426430">onto</span> <span
  m="427480">the</span> <span m="428280">--</span> <span m="428830">this</span>
  <span m="429040">space,</span> <span m="429760">this</span> <span
  m="430100">perpendicular</span> <span m="430860">space?</span></p><p><span
  m="433240">So</span> <span m="433510">if</span> <span m="433610">this</span>
  <span m="433860">projection</span> <span m="434470">was</span> <span
  m="434680">P,</span> <span m="435980">what's</span> <span
  m="436960">the</span> <span m="437300">projection</span> <span
  m="438290">that</span> <span m="438520">gives</span> <span
  m="438760">me</span> <span m="438920">e?</span></p><p><span
  m="441070">It's</span> <span m="441320">the</span> <span m="441420">--</span>
  <span m="441940">what</span> <span m="442160">I</span> <span
  m="442220">want</span> <span m="442480">is</span> <span m="442610">to</span>
  <span m="442700">get</span> <span m="442890">the</span> <span
  m="442990">rest</span> <span m="443330">of</span> <span m="443410">the</span>
  <span m="443500">vector,</span> <span m="444170">so</span> <span
  m="444500">it'll</span> <span m="444630">be</span> <span
  m="444810">just</span> <span m="445430">I</span> <span m="445690">minus</span>
  <span m="446160">P</span> <span m="447290">times</span> <span
  m="448510">b,</span> <span m="448930">that's</span> <span m="449240">a</span>
  <span m="449320">projection</span> <span m="449970">too.</span></p><p><span
  m="450790">That's</span> <span m="451090">the</span> <span
  m="451240">projection</span> <span m="452550">onto</span> <span
  m="453680">the</span> <span m="454350">perpendicular</span> <span
  m="455610">space.</span></p><p><span m="458950">OK.</span> <span
  m="460040">So</span> <span m="460900">if</span> <span m="461020">P's</span>
  <span m="461350">a</span> <span m="461420">projection,</span> <span
  m="462160">I</span> <span m="462320">minus</span> <span m="462780">P</span>
  <span m="462930">is</span> <span m="463090">a</span> <span
  m="463170">projection.</span></p><p><span m="464150">If</span> <span
  m="464410">P</span> <span m="464660">is</span> <span
  m="464820">symmetric,</span> <span m="465810">I</span> <span
  m="466130">minus</span> <span m="466600">P</span> <span m="466780">is</span>
  <span m="466920">symmetric.</span></p><p><span m="467790">If</span> <span
  m="468020">P</span> <span m="468290">squared</span> <span
  m="468770">equals</span> <span m="469210">P,</span> <span
  m="469830">then</span> <span m="470200">I</span> <span m="470360">minus</span>
  <span m="470810">P</span> <span m="471020">squared</span> <span
  m="471360">equals</span> <span m="471680">I</span> <span
  m="471830">minus</span> <span m="472290">P.</span> <span
  m="472900">It's</span> <span m="473530">just</span> <span m="473940">--</span>
  <span m="475690">the</span> <span m="475860">algebra</span> <span
  m="476360">--</span> <span m="476600">is</span> <span m="476860">only</span>
  <span m="477160">doing</span> <span m="477590">what</span> <span
  m="477910">your</span> <span m="478850">--</span> <span
  m="480460">picture</span> <span m="481940">is</span> <span
  m="482780">completely</span> <span m="483640">telling</span> <span
  m="484040">you.</span> <span m="485270">But</span> <span m="485420">the</span>
  <span m="485580">algebra</span> <span m="486160">leads</span> <span
  m="486530">to</span> <span m="486670">this</span> <span
  m="487710">expression.</span></p><p><span m="491820">That</span> <span
  m="492120">expression</span> <span m="493000">for</span> <span
  m="493350">P</span> <span m="494240">given</span> <span m="495250">--</span>
  <span m="496280">given</span> <span m="497350">a</span> <span
  m="497940">basis</span> <span m="498490">for</span> <span
  m="498630">the</span> <span m="498760">subspace,</span> <span
  m="499480">given</span> <span m="499810">the</span> <span
  m="499910">matrix</span> <span m="500500">A</span> <span
  m="501130">whose</span> <span m="501490">columns</span> <span
  m="502290">are</span> <span m="502570">a</span> <span m="502620">basis</span>
  <span m="503200">for</span> <span m="503490">our</span> <span
  m="503700">column</span> <span m="504100">space.</span> <span
  m="505690">OK,</span> <span m="505920">that's</span> <span
  m="506270">recap</span> <span m="506880">because</span> <span
  m="507130">you</span> <span m="507420">--</span> <span m="507440">you</span>
  <span m="507540">need</span> <span m="507780">to</span> <span
  m="507900">see</span> <span m="508110">that</span> <span
  m="508340">formula</span> <span m="508820">more</span> <span
  m="509020">than</span> <span m="509210">once.</span></p><p><span
  m="510460">And</span> <span m="510710">now</span> <span m="511040">can</span>
  <span m="511300">I</span> <span m="511490">pick</span> <span
  m="511850">up</span> <span m="512330">on</span> <span m="512929">using</span>
  <span m="513340">it?</span></p><p><span m="514669">So</span> <span
  m="514840">now</span> <span m="515620">--</span> <span m="516390">and</span>
  <span m="516650">the</span> <span m="517090">--</span> <span
  m="517789">it's</span> <span m="518710">like,</span> <span
  m="519250">let</span> <span m="522230">me</span> <span m="522370">do</span>
  <span m="522549">that</span> <span m="522789">again,</span> <span
  m="523250">I'll</span> <span m="523620">go</span> <span
  m="525500">right</span> <span m="525760">through</span> <span
  m="526100">a</span> <span m="526190">problem</span> <span
  m="526590">that</span> <span m="526750">I</span> <span
  m="526850">started</span> <span m="527410">at</span> <span
  m="527510">the</span> <span m="527680">end,</span> <span
  m="527960">which</span> <span m="528270">is</span> <span
  m="529220">find</span> <span m="529970">a</span> <span m="530020">best</span>
  <span m="530270">straight</span> <span m="530610">line.</span></p><p><span
  m="532470">You</span> <span m="532580">remember</span> <span
  m="532870">that</span> <span m="533090">problem,</span> <span
  m="533580">I</span> <span m="533790">--</span> <span m="533820">I</span> <span
  m="534000">picked</span> <span m="534410">a</span> <span
  m="534480">particular</span> <span m="535880">set</span> <span
  m="536470">of</span> <span m="536580">points,</span> <span
  m="537530">they</span> <span m="537910">weren't</span> <span
  m="538240">specially</span> <span m="538740">brilliant,</span> <span
  m="539350">t</span> <span m="539510">equal</span> <span m="540060">one,</span>
  <span m="540820">two,</span> <span m="541520">three,</span> <span
  m="542780">the</span> <span m="543360">heights</span> <span
  m="543800">were</span> <span m="544070">one,</span> <span
  m="545090">two,</span> <span m="545970">and</span> <span
  m="546180">then</span> <span m="546440">two</span> <span
  m="546740">again.</span></p><p><span m="547190">So</span> <span
  m="547400">they</span> <span m="547550">were</span> <span m="547660">--</span>
  <span m="547680">heights</span> <span m="547960">were</span> <span
  m="548280">that</span> <span m="548740">point,</span> <span
  m="549610">that</span> <span m="550200">point,</span> <span
  m="550570">which</span> <span m="550780">makes</span> <span
  m="551070">it</span> <span m="551180">look</span> <span m="551390">like</span>
  <span m="551650">I've</span> <span m="551790">got</span> <span
  m="551960">a</span> <span m="552060">nice</span> <span
  m="552410">forty-five-degree</span> <span m="553320">line</span> <span
  m="553680">--</span> <span m="553700">but</span> <span m="553860">then</span>
  <span m="554120">the</span> <span m="554240">third</span> <span
  m="554630">point</span> <span m="555200">didn't</span> <span
  m="555640">lie</span> <span m="555890">on</span> <span m="556020">the</span>
  <span m="556120">line.</span></p><p><span m="558800">And</span> <span
  m="559050">I</span> <span m="559110">wanted</span> <span m="559640">to</span>
  <span m="559760">find</span> <span m="560220">the</span> <span
  m="560300">best</span> <span m="560630">straight</span> <span
  m="561010">line.</span></p><p><span m="562500">So</span> <span
  m="562800">I'm</span> <span m="562960">looking</span> <span
  m="563390">for</span> <span m="563610">the</span> <span m="563950">--</span>
  <span m="564350">this</span> <span m="564800">line,</span> <span
  m="565910">y=C+Dt.</span> <span m="570850">And</span> <span
  m="572700">it's</span> <span m="573330">not</span> <span
  m="573630">going</span> <span m="573810">to</span> <span m="573860">go</span>
  <span m="574060">through</span> <span m="574310">all</span> <span
  m="574500">three</span> <span m="574750">points,</span> <span
  m="575110">because</span> <span m="575350">no</span> <span
  m="575530">line</span> <span m="575910">goes</span> <span
  m="576140">through</span> <span m="576330">all</span> <span
  m="576520">three</span> <span m="576760">points.</span></p><p><span
  m="577880">So</span> <span m="578100">I'm</span> <span m="578250">going</span>
  <span m="578410">to</span> <span m="578480">pick</span> <span
  m="578910">the</span> <span m="579060">best</span> <span
  m="579520">line,</span> <span m="580970">the</span> <span m="582160">--</span>
  <span m="582190">the</span> <span m="582390">best</span> <span
  m="582770">being</span> <span m="583050">the</span> <span
  m="583200">one</span> <span m="583510">that</span> <span
  m="583710">makes</span> <span m="584120">the</span> <span
  m="584660">overall</span> <span m="585540">error</span> <span
  m="585990">as</span> <span m="586130">small</span> <span m="586540">as</span>
  <span m="586680">I</span> <span m="586780">can</span> <span
  m="587010">make</span> <span m="587250">it.</span></p><p><span
  m="588430">Now</span> <span m="588560">I</span> <span m="588650">have</span>
  <span m="588810">to</span> <span m="588960">tell</span> <span
  m="589150">you,</span> <span m="589270">what</span> <span m="589500">is</span>
  <span m="589640">that</span> <span m="589840">overall</span> <span
  m="590340">error?</span></p><p><span m="592390">And</span> <span
  m="594040">--</span> <span m="597400">because</span> <span
  m="597760">that</span> <span m="598740">determines</span> <span
  m="599540">what's</span> <span m="600100">the</span> <span
  m="600230">winning</span> <span m="600560">line.</span></p><p><span
  m="601600">If</span> <span m="601730">we</span> <span m="601860">don't</span>
  <span m="602090">know</span> <span m="602430">--</span> <span
  m="602740">I</span> <span m="602770">mean</span> <span m="602950">we</span>
  <span m="603050">have</span> <span m="603220">to</span> <span
  m="603340">decide</span> <span m="603780">what</span> <span
  m="604040">we</span> <span m="604180">mean</span> <span m="604540">by</span>
  <span m="604960">the</span> <span m="605270">error</span> <span
  m="605990">--</span> <span m="606810">and</span> <span m="607330">then</span>
  <span m="607860">we</span> <span m="608060">minimize</span> <span
  m="609120">and</span> <span m="609890">we</span> <span m="610060">find</span>
  <span m="610510">the</span> <span m="610690">right</span> <span
  m="610960">--</span> <span m="610990">the</span> <span m="611120">best</span>
  <span m="611360">C</span> <span m="611610">and</span> <span
  m="611740">D.</span> <span m="612940">So</span> <span m="613930">if</span>
  <span m="615820">I</span> <span m="615930">went</span> <span
  m="616220">through</span> <span m="616500">this</span> <span
  m="616780">--</span> <span m="616890">if</span> <span m="617030">I</span>
  <span m="617120">went</span> <span m="617360">through</span> <span
  m="617620">that</span> <span m="617890">point,</span></p><p><span
  m="618370">OK.</span> <span m="618600">I</span> <span m="618730">would</span>
  <span m="618930">solve</span> <span m="619400">the</span> <span
  m="619540">equation</span> <span m="620190">C+D=1.</span> <span
  m="623680">Because</span> <span m="624320">at</span> <span m="624490">t</span>
  <span m="624860">equal</span> <span m="625170">to</span> <span
  m="625320">one</span> <span m="625880">--</span> <span m="626310">I'd</span>
  <span m="626500">have</span> <span m="626740">C</span> <span
  m="626970">plus</span> <span m="627270">D,</span> <span m="627490">and</span>
  <span m="627580">it</span> <span m="627630">would</span> <span
  m="627790">come</span> <span m="628040">out</span> <span
  m="628220">right.</span> <span m="630050">If</span> <span m="630340">it</span>
  <span m="630420">went</span> <span m="630620">through</span> <span
  m="630790">this</span> <span m="631050">point,</span> <span
  m="631480">I'd</span> <span m="631680">have</span> <span m="631920">C</span>
  <span m="632320">plus</span> <span m="632720">two</span> <span
  m="632960">D</span> <span m="633650">equal</span> <span
  m="634170">to</span></p><p><span m="634310">two.</span> <span
  m="635150">Because</span> <span m="635930">at</span> <span m="636110">t</span>
  <span m="636270">equal</span> <span m="636630">to</span> <span
  m="636790">two,</span> <span m="637550">I</span> <span m="637770">would</span>
  <span m="637920">like</span> <span m="638150">to</span> <span
  m="638250">get</span> <span m="638470">the</span> <span
  m="638590">answer</span></p><p><span m="638990">two.</span> <span
  m="639550">At</span> <span m="639930">the</span> <span m="640060">third</span>
  <span m="640390">point,</span> <span m="641050">I</span> <span
  m="641550">have</span> <span m="641780">C</span> <span m="642090">plus</span>
  <span m="642390">three</span> <span m="642650">D</span> <span
  m="643060">because</span> <span m="643510">t</span> <span m="643740">is</span>
  <span m="643950">three,</span> <span m="644710">but</span> <span
  m="645060">the</span> <span m="645090">--</span> <span m="645140">the</span>
  <span m="645730">answer</span> <span m="646080">I'm</span> <span
  m="646250">shooting</span> <span m="646680">for</span> <span
  m="647010">is</span></p><p><span m="647160">two</span> <span
  m="647430">again.</span> <span m="649850">So</span> <span
  m="650050">those</span> <span m="650350">are</span> <span m="650450">my</span>
  <span m="650690">three</span> <span m="651030">equations.</span></p><p><span
  m="652680">And</span> <span m="652890">they</span> <span
  m="653020">don't</span> <span m="653280">have</span> <span m="653480">a</span>
  <span m="653550">solution.</span></p><p><span m="655720">But</span> <span
  m="655900">they've</span> <span m="656090">got</span> <span
  m="656260">a</span> <span m="656320">best</span> <span
  m="656610">solution.</span></p><p><span m="658110">What</span> <span
  m="658390">do</span> <span m="658500">I</span> <span m="658590">mean</span>
  <span m="658860">by</span> <span m="659010">best</span> <span
  m="659310">solution?</span></p><p><span m="659890">So</span> <span
  m="660080">let</span> <span m="660260">me</span> <span m="660650">take</span>
  <span m="661090">time</span> <span m="661470">out</span> <span
  m="661830">to</span> <span m="662010">remember</span> <span
  m="662980">what</span> <span m="663650">I'm</span> <span
  m="663800">talking</span> <span m="664220">about</span> <span
  m="664580">for</span> <span m="664710">best</span> <span
  m="665000">solution.</span></p><p><span m="666550">So</span> <span
  m="666930">this</span> <span m="667160">is</span> <span m="667300">my</span>
  <span m="667540">equation</span> <span m="669050">Ax=b.</span> <span
  m="671960">A</span> <span m="672780">is</span> <span m="673050">this</span>
  <span m="673320">matrix,</span> <span m="674610">one,</span> <span
  m="675210">one,</span> <span m="675460">one,</span> <span
  m="676370">one,</span> <span m="676940">two,</span> <span
  m="677170">three.</span> <span m="678440">x</span> <span m="679530">is</span>
  <span m="679760">my</span> <span m="680030">--</span> <span
  m="680050">only</span> <span m="680270">have</span> <span
  m="680520">two</span> <span m="680810">unknowns,</span> <span
  m="681330">C</span> <span m="681610">and</span> <span m="681760">D,</span>
  <span m="682580">and</span> <span m="683180">b</span> <span
  m="683440">is</span> <span m="683600">my</span> <span
  m="683840">right-hand</span> <span m="684400">side,</span> <span
  m="684800">one,</span> <span m="685060">two,</span> <span
  m="685290">three.</span> <span m="687650">OK.</span> <span
  m="691930">No</span> <span m="692170">solution.</span></p><p><span
  m="694670">Three</span> <span m="695030">eq-</span> <span m="695400">I</span>
  <span m="695460">have</span> <span m="695580">a</span> <span
  m="695650">three</span> <span m="695910">by</span> <span m="696090">two</span>
  <span m="696300">matrix,</span> <span m="697300">I</span> <span
  m="697610">do</span> <span m="697920">have</span> <span m="698140">two</span>
  <span m="698440">independent</span> <span m="699090">columns</span> <span
  m="699760">--</span> <span m="700200">so</span> <span m="700390">I</span>
  <span m="700490">do</span> <span m="700750">have</span> <span
  m="700910">a</span> <span m="700970">basis</span> <span m="701520">for</span>
  <span m="701630">the</span> <span m="701770">column</span> <span
  m="702130">space,</span> <span m="702540">those</span> <span
  m="702800">two</span> <span m="702960">columns</span> <span
  m="703690">are</span> <span m="703990">independent,</span> <span
  m="704630">they're</span> <span m="704800">a</span> <span
  m="704850">basis</span> <span m="705310">for</span> <span
  m="705430">the</span> <span m="705570">column</span> <span
  m="705990">space,</span> <span m="706420">but</span> <span
  m="707560">the</span> <span m="708190">column</span> <span
  m="708600">space</span> <span m="709000">doesn't</span> <span
  m="709310">include</span> <span m="709740">that</span> <span
  m="709970">vector.</span></p><p><span m="712370">So</span> <span
  m="713520">best</span> <span m="714290">possible</span> <span
  m="715380">in</span> <span m="716030">this</span> <span m="716560">--</span>
  <span m="717600">what</span> <span m="717890">would</span> <span
  m="718050">best</span> <span m="718330">possible</span> <span
  m="718810">mean?</span> <span m="721540">The</span> <span
  m="722190">way</span> <span m="722790">that</span> <span
  m="723050">comes</span> <span m="723400">out</span> <span m="723710">to</span>
  <span m="723860">linear</span> <span m="724240">equations</span> <span
  m="724960">is</span> <span m="725320">I</span> <span m="725650">--</span>
  <span m="725750">I</span> <span m="725990">want</span> <span
  m="726340">to</span> <span m="726510">minimize</span> <span
  m="727900">the</span> <span m="731400">sum</span> <span m="731760">of</span>
  <span m="731870">these</span> <span m="732580">--</span> <span
  m="733970">I'm</span> <span m="734110">going</span> <span m="734280">to</span>
  <span m="734330">make</span> <span m="734540">an</span> <span
  m="734690">error</span> <span m="735050">here.</span></p><p><span
  m="735550">I'm</span> <span m="735650">going</span> <span m="735800">to</span>
  <span m="735860">make</span> <span m="736050">an</span> <span
  m="736190">error</span> <span m="736490">here.</span></p><p><span
  m="736790">I'm</span> <span m="736880">going</span> <span m="737040">to</span>
  <span m="737090">make</span> <span m="737280">an</span> <span
  m="737410">error</span> <span m="737680">there.</span></p><p><span
  m="738950">And</span> <span m="739230">I'm</span> <span
  m="739380">going</span> <span m="739600">to</span> <span m="739780">sum</span>
  <span m="740990">and</span> <span m="741220">square</span> <span
  m="742330">and</span> <span m="742680">add</span> <span m="742950">up</span>
  <span m="743130">those</span> <span m="743390">errors.</span></p><p><span
  m="744970">So</span> <span m="745180">it's</span> <span m="745350">a</span>
  <span m="745450">sum</span> <span m="745860">of</span> <span
  m="746010">squares.</span></p><p><span m="746720">It's</span> <span
  m="746910">a</span> <span m="746990">least</span> <span
  m="747500">squares</span> <span m="748460">solution</span> <span
  m="749300">I'm</span> <span m="749430">looking</span> <span
  m="749800">for.</span></p><p><span m="750750">So</span> <span
  m="751290">if</span> <span m="751590">I</span> <span m="751710">--</span>
  <span m="751910">those</span> <span m="752250">errors</span> <span
  m="752750">are</span> <span m="752910">the</span> <span
  m="753080">difference</span> <span m="753650">between</span> <span
  m="754360">Ax</span> <span m="755580">and</span> <span
  m="756170">b.</span></p><p><span m="757980">That's</span> <span
  m="758250">what</span> <span m="758420">I</span> <span m="758490">want</span>
  <span m="758680">to</span> <span m="758730">make</span> <span
  m="758980">small.</span></p><p><span m="760320">And</span> <span
  m="760830">the</span> <span m="760950">way</span> <span m="761150">I'm</span>
  <span m="761390">measuring</span> <span m="761950">this</span> <span
  m="762270">--</span> <span m="762290">this</span> <span m="762450">is</span>
  <span m="762590">a</span> <span m="762650">vector,</span></p><p><span
  m="763110">right?</span> <span m="763450">This</span> <span
  m="763680">is</span> <span m="763940">e1,e2</span> <span
  m="764850">,e3.</span> <span m="765480">The</span> <span
  m="765610">Ax-b,</span> <span m="767550">this</span> <span
  m="767850">is</span> <span m="767980">the</span> <span
  m="768110">e.</span></p><p><span m="769090">The</span> <span
  m="769260">error</span> <span m="769620">vector.</span></p><p><span
  m="770890">And</span> <span m="771760">small</span> <span
  m="772520">means</span> <span m="773130">its</span> <span
  m="773360">length.</span></p><p><span m="775890">The</span> <span
  m="775970">length</span> <span m="776350">of</span> <span
  m="776460">that</span> <span m="776690">vector.</span></p><p><span
  m="777670">That's</span> <span m="777950">what</span> <span
  m="778110">I'm</span> <span m="778190">going</span> <span m="778340">to</span>
  <span m="778420">try</span> <span m="778620">to</span> <span
  m="778740">minimize.</span></p><p><span m="779370">And</span> <span
  m="780130">it's</span> <span m="780690">convenient</span> <span
  m="781290">to</span> <span m="781430">square.</span></p><p><span
  m="784280">If</span> <span m="784470">I</span> <span m="784540">make</span>
  <span m="784830">something</span> <span m="785230">small,</span> <span
  m="785690">I</span> <span m="785740">make</span> <span m="786470">--</span>
  <span m="789620">this</span> <span m="789850">is</span> <span
  m="789980">a</span> <span m="790310">never</span> <span
  m="790870">negative</span> <span m="791430">quantity,</span> <span
  m="791960">right?</span></p><p><span m="792320">The</span> <span
  m="792440">length</span> <span m="792820">of</span> <span
  m="792940">that</span> <span m="793200">vector.</span></p><p><span
  m="796760">The</span> <span m="796890">length</span> <span
  m="797200">will</span> <span m="797310">be</span> <span m="797500">zero</span>
  <span m="798540">exactly</span> <span m="799510">when</span> <span
  m="799760">the</span> <span m="800000">--</span> <span m="800040">when</span>
  <span m="800310">I</span> <span m="800370">have</span> <span
  m="800530">the</span> <span m="800620">zero</span> <span
  m="800970">vector</span> <span m="801370">here.</span></p><p><span
  m="801990">That's</span> <span m="802260">exactly</span> <span
  m="802850">the</span> <span m="802990">case</span> <span
  m="803540">when</span> <span m="804540">I</span> <span m="805130">can</span>
  <span m="805330">solve</span> <span m="805690">exactly,</span> <span
  m="806620">b</span> <span m="806890">is</span> <span m="807040">in</span>
  <span m="807180">the</span> <span m="807310">column</span> <span
  m="807720">space,</span> <span m="808410">all</span> <span
  m="809190">great.</span></p><p><span m="809730">But</span> <span
  m="810490">I'm</span> <span m="810650">not</span> <span m="810870">in</span>
  <span m="810990">that</span> <span m="811210">case</span> <span
  m="811560">now.</span></p><p><span m="811820">I'm</span> <span
  m="811970">going</span> <span m="812150">to</span> <span
  m="812210">have</span> <span m="812440">an</span> <span
  m="812560">error</span> <span m="812870">vector,</span> <span
  m="813310">e.</span></p><p><span m="814070">What's</span> <span
  m="814400">this</span> <span m="814600">error</span> <span
  m="814850">vector</span> <span m="815270">in</span> <span m="815350">my</span>
  <span m="815520">picture?</span></p><p><span m="818340">I</span> <span
  m="818430">guess</span> <span m="818730">what</span> <span
  m="818900">I'm</span> <span m="819000">trying</span> <span
  m="819250">to</span> <span m="819340">say</span> <span m="820010">is</span>
  <span m="821050">there's</span> <span m="821980">--</span> <span
  m="822030">there's</span> <span m="822380">two</span> <span
  m="822690">pictures</span> <span m="823370">of</span> <span
  m="823540">what's</span> <span m="823850">going</span> <span
  m="824120">on.</span></p><p><span m="825270">There's</span> <span
  m="825420">two</span> <span m="825750">pictures</span> <span
  m="826250">of</span> <span m="826370">what's</span> <span
  m="826630">going</span> <span m="826890">on.</span></p><p><span
  m="827540">One</span> <span m="827960">picture</span> <span
  m="828600">is</span> <span m="829320">--</span> <span m="830900">in</span>
  <span m="831430">this</span> <span m="831880">is</span> <span
  m="832100">the</span> <span m="832210">three</span> <span
  m="832470">points</span> <span m="832960">and</span> <span
  m="833140">the</span> <span m="833240">line.</span></p><p><span
  m="835020">And</span> <span m="835240">in</span> <span m="835390">that</span>
  <span m="835750">picture,</span> <span m="837250">what</span> <span
  m="838340">are</span> <span m="838610">the</span> <span
  m="838800">three</span> <span m="839180">errors?</span></p><p><span
  m="840220">The</span> <span m="840370">three</span> <span
  m="840670">errors</span> <span m="841100">are</span> <span
  m="841240">what</span> <span m="841450">I</span> <span m="841560">miss</span>
  <span m="841960">by</span> <span m="842220">in</span> <span
  m="842350">this</span> <span m="842570">equation.</span></p><p><span
  m="843480">So</span> <span m="843720">it's</span> <span m="843900">this</span>
  <span m="844440">--</span> <span m="845150">this</span> <span
  m="845660">little</span> <span m="846090">bit</span> <span
  m="846370">here.</span></p><p><span m="846740">That</span> <span
  m="847040">vertical</span> <span m="847510">distance</span> <span
  m="848020">up</span> <span m="848260">to</span> <span m="848380">the</span>
  <span m="848510">line.</span></p><p><span m="848950">There's</span> <span
  m="849270">one</span> <span m="849800">--</span> <span m="850210">sorry</span>
  <span m="850430">there's</span> <span m="850700">one,</span> <span
  m="851330">and</span> <span m="851640">there's</span> <span
  m="851870">C</span> <span m="852090">plus</span> <span
  m="852430">D.</span></p><p><span m="852780">And</span> <span
  m="852980">it's</span> <span m="853120">that</span> <span
  m="853330">difference.</span></p><p><span m="854700">Here's</span> <span
  m="855160">two</span> <span m="855780">and</span> <span
  m="856040">here's</span> <span m="857010">C+2D.</span> <span
  m="857720">So</span> <span m="858100">vertically</span> <span
  m="858940">it's</span> <span m="859130">that</span> <span
  m="859360">distance</span> <span m="859840">--</span> <span
  m="860600">that</span> <span m="861190">little</span> <span
  m="861690">error</span> <span m="862070">there</span> <span
  m="862390">is</span> <span m="862530">e1.</span> <span m="863620">This</span>
  <span m="864150">little</span> <span m="864430">error</span> <span
  m="864730">here</span> <span m="865050">is</span> <span m="865150">e2.</span>
  <span m="866220">This</span> <span m="867050">little</span> <span
  m="867340">error</span> <span m="867720">coming</span> <span
  m="868050">up</span> <span m="868600">is</span> <span m="868930">e3.</span>
  <span m="870540">e3.</span> <span m="872350">And</span> <span
  m="872930">what's</span> <span m="873270">my</span> <span
  m="873470">overall</span> <span m="874420">error?</span></p><p><span
  m="875240">Is</span> <span m="876270">e1</span> <span m="877090">square</span>
  <span m="877770">plus</span> <span m="878320">e2</span> <span
  m="878780">squared</span> <span m="879530">plus</span> <span
  m="880960">e3</span> <span m="881380">squared.</span></p><p><span
  m="883240">That's</span> <span m="883570">what</span> <span
  m="883760">I'm</span> <span m="883900">trying</span> <span
  m="884150">to</span> <span m="884200">make</span> <span
  m="884430">small.</span></p><p><span m="884920">I</span> <span
  m="886530">--</span> <span m="888150">some</span> <span
  m="888390">statisticians</span> <span m="889550">--</span> <span
  m="889740">this</span> <span m="889930">is</span> <span m="890060">a</span>
  <span m="890120">big</span> <span m="890730">part</span> <span
  m="891010">of</span> <span m="891110">statistics,</span> <span
  m="894090">fitting</span> <span m="894430">straight</span> <span
  m="894750">lines</span> <span m="895030">is</span> <span m="895190">a</span>
  <span m="895240">big</span> <span m="895430">part</span> <span
  m="895660">of</span> <span m="895740">science</span> <span
  m="896330">--</span> <span m="896360">and</span> <span
  m="896810">specifically</span> <span m="897650">statistics,</span> <span
  m="898600">where</span> <span m="898880">the</span> <span
  m="899280">right</span> <span m="899560">word</span> <span
  m="899860">to</span> <span m="899960">use</span> <span m="900310">would</span>
  <span m="900490">be</span> <span m="900770">regression.</span></p><p><span
  m="902210">I'm</span> <span m="902410">doing</span> <span
  m="902730">regression</span> <span m="903330">here.</span></p><p><span
  m="905270">Linear</span> <span m="905830">regression.</span> <span
  m="909840">And</span> <span m="910530">I'm</span> <span
  m="910730">using</span> <span m="911220">this</span> <span
  m="911510">sum</span> <span m="911760">of</span> <span
  m="911900">squares</span> <span m="912820">as</span> <span
  m="913400">the</span> <span m="913890">measure</span> <span
  m="914320">of</span> <span m="914430">error.</span></p><p><span
  m="915270">Again,</span> <span m="916010">some</span> <span
  m="916330">statisticians</span> <span m="917770">would</span> <span
  m="918990">be</span> <span m="920170">--</span> <span m="920380">they</span>
  <span m="920540">would</span> <span m="920720">say,</span> <span
  m="920870">OK,</span> <span m="921190">I'll</span> <span
  m="921310">solve</span> <span m="921740">that</span> <span
  m="921960">problem</span> <span m="922280">because</span> <span
  m="922650">it's</span> <span m="922900">the</span> <span
  m="923060">clean</span> <span m="923530">problem.</span></p><p><span
  m="924000">It</span> <span m="924110">leads</span> <span m="924440">to</span>
  <span m="924570">a</span> <span m="924630">beautiful</span> <span
  m="925270">linear</span> <span m="925680">system.</span></p><p><span
  m="927080">But</span> <span m="927480">they</span> <span
  m="927700">would</span> <span m="927920">be</span> <span m="928120">a</span>
  <span m="928180">little</span> <span m="928510">careful</span> <span
  m="929040">about</span> <span m="929490">these</span> <span
  m="929690">squares,</span> <span m="930340">for</span> <span
  m="930570">--</span> <span m="931030">in</span> <span m="931510">this</span>
  <span m="931750">case.</span></p><p><span m="932670">If</span> <span
  m="933380">one</span> <span m="933790">of</span> <span m="933860">these</span>
  <span m="934140">points</span> <span m="934620">was</span> <span
  m="934820">way</span> <span m="935180">off.</span></p><p><span
  m="935990">Suppose</span> <span m="936460">I</span> <span
  m="936560">had</span> <span m="936740">a</span> <span
  m="936800">measurement</span> <span m="937250">at</span> <span
  m="937370">t</span> <span m="937600">equal</span> <span m="937830">zero</span>
  <span m="938120">that</span> <span m="938240">was</span> <span
  m="938430">way</span> <span m="938730">off.</span></p><p><span
  m="941560">Well,</span> <span m="942190">would</span> <span
  m="942510">the</span> <span m="942600">straight</span> <span
  m="942910">line,</span> <span m="943340">would</span> <span
  m="943550">the</span> <span m="943620">best</span> <span
  m="943900">line</span> <span m="944210">be</span> <span m="944360">the</span>
  <span m="944480">same</span> <span m="944880">if</span> <span
  m="945020">I</span> <span m="945130">had</span> <span m="945340">this</span>
  <span m="945570">fourth</span> <span m="945950">point?</span></p><p><span
  m="946890">Suppose</span> <span m="947300">I</span> <span
  m="947410">have</span> <span m="947550">this</span> <span
  m="947790">fourth</span> <span m="948260">data</span> <span
  m="948540">point.</span></p><p><span m="950180">No,</span> <span
  m="950680">certainly</span> <span m="951350">the</span> <span
  m="951540">line</span> <span m="952350">would</span> <span
  m="953070">--</span> <span m="954880">it</span> <span
  m="954990">wouldn't</span> <span m="955310">be</span> <span
  m="955470">the</span> <span m="955600">--</span> <span m="955620">that</span>
  <span m="955800">wouldn't</span> <span m="956010">be</span> <span
  m="956120">the</span> <span m="956230">best</span> <span
  m="956530">line.</span></p><p><span m="957620">Because</span> <span
  m="958540">that</span> <span m="959080">line</span> <span
  m="959430">would</span> <span m="959600">have</span> <span m="959820">a</span>
  <span m="959920">giant</span> <span m="960580">error</span> <span
  m="961070">--</span> <span m="961100">and</span> <span m="961260">when</span>
  <span m="961440">I</span> <span m="961540">squared</span> <span
  m="962140">it</span> <span m="962560">it</span> <span m="962910">would</span>
  <span m="963100">be</span> <span m="963320">like</span> <span
  m="963530">way</span> <span m="964010">out</span> <span m="964220">of</span>
  <span m="964290">sight</span> <span m="964820">compared</span> <span
  m="965240">to</span> <span m="965320">the</span> <span
  m="965500">others.</span></p><p><span m="966860">So</span> <span
  m="967170">this</span> <span m="969390">would</span> <span
  m="969560">be</span> <span m="969760">called</span> <span m="970090">by</span>
  <span m="970270">statisticians</span> <span m="971200">an</span> <span
  m="971390">outlier,</span> <span m="974280">and</span> <span
  m="974770">they</span> <span m="974950">would</span> <span
  m="975200">not</span> <span m="975480">be</span> <span m="975640">happy</span>
  <span m="976090">to</span> <span m="976220">see</span> <span
  m="976520">the</span> <span m="976640">whole</span> <span
  m="976950">problem</span> <span m="977470">turned</span> <span
  m="977830">topsy-turvy</span> <span m="978580">by</span> <span
  m="978750">this</span> <span m="978990">one</span> <span
  m="979410">outlier,</span> <span m="979920">which</span> <span
  m="980180">could</span> <span m="980390">be</span> <span m="980550">a</span>
  <span m="980600">mistake,</span> <span m="981150">after</span> <span
  m="981510">all.</span></p><p><span m="982760">So</span> <span
  m="983130">they</span> <span m="983470">wouldn't</span> <span
  m="984160">--</span> <span m="984270">so</span> <span m="984470">they</span>
  <span m="984630">wouldn't</span> <span m="984940">like</span> <span
  m="985320">maybe</span> <span m="985710">squaring,</span> <span
  m="986500">if</span> <span m="986720">there</span> <span
  m="986860">were</span> <span m="987100">outliers,</span> <span
  m="987820">they</span> <span m="987970">would</span> <span
  m="988170">want</span> <span m="988360">to</span> <span
  m="988450">identify</span> <span m="989080">them.</span> <span
  m="990010">OK.</span> <span m="990440">I'm</span> <span m="990960">not</span>
  <span m="991370">going</span> <span m="991990">to</span> <span
  m="995330">--</span> <span m="995800">I</span> <span m="996070">don't</span>
  <span m="996250">want</span> <span m="996410">to</span> <span
  m="997520">suggest</span> <span m="999280">that</span> <span
  m="999470">least</span> <span m="999720">squares</span> <span
  m="1000140">isn't</span> <span m="1000410">used,</span> <span
  m="1000870">it's</span> <span m="1001030">the</span> <span
  m="1001140">most</span> <span m="1001520">used,</span> <span
  m="1002230">but</span> <span m="1002610">it's</span> <span
  m="1002860">not</span> <span m="1003230">exclusively</span> <span
  m="1004290">used</span> <span m="1004790">because</span> <span
  m="1005400">it's</span> <span m="1005650">a</span> <span
  m="1005770">little</span> <span m="1006450">--</span> <span
  m="1007040">overcompensates</span> <span m="1008310">for</span> <span
  m="1008510">outliers.</span> <span m="1010000">Because</span> <span
  m="1010380">of</span> <span m="1010470">that</span> <span
  m="1010690">squaring.</span> <span m="1011790">OK.</span> <span
  m="1012000">So</span> <span m="1012250">suppose</span> <span
  m="1012670">we</span> <span m="1012800">don't</span> <span
  m="1013030">have</span> <span m="1013200">this</span> <span
  m="1013480">guy,</span> <span m="1014300">we</span> <span
  m="1014900">just</span> <span m="1015140">have</span> <span
  m="1015270">these</span> <span m="1015490">three</span> <span
  m="1015820">equations.</span></p><p><span m="1017300">And</span> <span
  m="1018370">I</span> <span m="1018820">want</span> <span m="1019030">to</span>
  <span m="1019080">make</span> <span m="1019370">--</span> <span
  m="1019390">minimize</span> <span m="1020010">this</span> <span
  m="1020230">error.</span> <span m="1021680">OK.</span> <span
  m="1022650">Now,</span> <span m="1023820">what</span> <span
  m="1024040">I</span> <span m="1024160">said</span> <span m="1024540">is</span>
  <span m="1025420">there's</span> <span m="1025910">two</span> <span
  m="1026200">pictures</span> <span m="1026790">to</span> <span
  m="1026920">look</span> <span m="1027160">at.</span></p><p><span
  m="1028069">One</span> <span m="1028480">picture</span> <span
  m="1029079">is</span> <span m="1030020">this</span> <span
  m="1030240">one.</span></p><p><span m="1030940">The</span> <span
  m="1031079">three</span> <span m="1031490">points,</span> <span
  m="1032500">the</span> <span m="1032780">best</span> <span
  m="1033130">line.</span></p><p><span m="1034700">And</span> <span
  m="1035089">the</span> <span m="1035240">errors.</span> <span
  m="1036280">Now,</span> <span m="1037800">on</span> <span
  m="1038319">this</span> <span m="1038560">picture,</span> <span
  m="1039300">what</span> <span m="1039609">are</span> <span
  m="1039859">these</span> <span m="1040250">points</span> <span
  m="1040760">on</span> <span m="1040900">the</span> <span
  m="1041000">line,</span> <span m="1041380">the</span> <span
  m="1041470">points</span> <span m="1041819">that</span> <span
  m="1041970">are</span> <span m="1042150">really</span> <span
  m="1042470">on</span> <span m="1042740">the</span> <span
  m="1042859">line?</span></p><p><span m="1044890">So</span> <span
  m="1045099">they're</span> <span m="1046050">--</span> <span
  m="1046859">points,</span> <span m="1047329">let</span> <span
  m="1047440">me</span> <span m="1047579">call</span> <span
  m="1047920">them</span> <span m="1048180">P1,</span> <span
  m="1049240">P2,</span> <span m="1049500">and</span> <span
  m="1049640">P3,</span> <span m="1050490">those</span> <span
  m="1050870">are</span> <span m="1050990">three</span> <span
  m="1051310">numbers,</span> <span m="1052460">so</span> <span
  m="1052860">this</span> <span m="1053200">--</span> <span
  m="1053220">this</span> <span m="1053450">height</span> <span
  m="1053810">is</span> <span m="1054330">P1,</span> <span
  m="1055610">this</span> <span m="1056230">height</span> <span
  m="1056740">is</span> <span m="1057360">P2,</span> <span
  m="1058620">this</span> <span m="1059480">height</span> <span
  m="1059890">is</span> <span m="1060740">P3,</span> <span
  m="1062330">and</span> <span m="1063010">what</span> <span
  m="1063220">are</span> <span m="1063330">those</span> <span
  m="1063700">guys?</span></p><p><span m="1065700">Suppose</span> <span
  m="1066300">those</span> <span m="1066650">were</span> <span
  m="1066800">the</span> <span m="1066950">three</span> <span
  m="1067260">values</span> <span m="1067900">instead</span> <span
  m="1068560">of</span> <span m="1068580">--</span> <span
  m="1069930">there's</span> <span m="1071250">b1,</span> <span
  m="1072120">ev-</span> <span m="1072320">everybody's</span> <span
  m="1072810">seen</span> <span m="1073100">all</span> <span
  m="1073300">these</span> <span m="1073510">--</span> <span
  m="1073530">sorry,</span> <span m="1073840">my</span> <span
  m="1074870">art</span> <span m="1075200">is</span> <span m="1075390">as</span>
  <span m="1075540">usual</span> <span m="1075990">not</span> <span
  m="1076400">the</span> <span m="1076530">greatest,</span> <span
  m="1077090">but</span> <span m="1077780">there's</span> <span
  m="1078360">the</span> <span m="1078500">given</span> <span
  m="1078950">b1,</span> <span m="1080180">the</span> <span
  m="1080760">given</span> <span m="1081150">b2,</span> <span
  m="1082250">and</span> <span m="1083020">the</span> <span
  m="1083110">given</span> <span m="1083460">b3.</span> <span
  m="1084590">I</span> <span m="1085140">promise</span> <span
  m="1085610">not</span> <span m="1085860">to</span> <span
  m="1085950">put</span> <span m="1086180">a</span> <span
  m="1086240">single</span> <span m="1086720">letter</span> <span
  m="1087010">more</span> <span m="1087360">on</span> <span
  m="1087470">that</span> <span m="1087760">picture.</span> <span
  m="1089330">OK.</span> <span m="1090050">There's</span> <span
  m="1090370">b1,</span> <span m="1092490">P1</span> <span m="1092810">is</span>
  <span m="1092950">the</span> <span m="1093060">one</span> <span
  m="1093320">on</span> <span m="1093540">the</span> <span
  m="1093660">line,</span> <span m="1094180">and</span> <span
  m="1094340">e1</span> <span m="1094900">is</span> <span m="1095060">the</span>
  <span m="1095150">distance</span></p><p><span m="1095600">between.</span>
  <span m="1096600">And</span> <span m="1097400">same</span> <span
  m="1097840">at</span> <span m="1098170">points</span> <span
  m="1098840">two</span> <span m="1099240">and</span> <span
  m="1099390">same</span> <span m="1099730">at</span> <span
  m="1099860">points</span> <span m="1100310">three.</span> <span
  m="1101410">OK,</span> <span m="1101910">so</span> <span
  m="1102400">what's</span> <span m="1102670">up?</span></p><p><span
  m="1103370">What's</span> <span m="1103710">up</span> <span
  m="1103880">with</span> <span m="1104020">those</span> <span
  m="1104310">Ps?</span> <span m="1106310">P1,</span> <span
  m="1106550">P2,</span> <span m="1106790">P3,</span> <span
  m="1107050">what</span> <span m="1107270">are</span> <span
  m="1107380">they?</span></p><p><span m="1109930">They're</span> <span
  m="1110320">the</span> <span m="1110480">components,</span> <span
  m="1111350">they</span> <span m="1111570">lie</span> <span
  m="1111880">on</span> <span m="1112060">the</span> <span
  m="1112170">line,</span></p><p><span m="1112520">right?</span> <span
  m="1113720">They're</span> <span m="1115490">the</span> <span
  m="1115640">points</span> <span m="1116210">which</span> <span
  m="1116760">if</span> <span m="1117860">instead</span> <span
  m="1118420">of</span> <span m="1118520">one,</span> <span
  m="1118900">two,</span> <span m="1119190">two,</span> <span
  m="1119500">which</span> <span m="1119820">were</span> <span
  m="1120800">the</span> <span m="1121500">b's,</span> <span
  m="1122640">suppose</span> <span m="1123620">I</span> <span
  m="1123760">put</span> <span m="1124530">P1,</span> <span
  m="1125780">P2,</span> <span m="1125990">P3</span> <span m="1126280">in</span>
  <span m="1126460">here.</span></p><p><span m="1127230">I'll</span> <span
  m="1127650">figure</span> <span m="1127930">out</span> <span
  m="1128090">in</span> <span m="1128240">a</span> <span
  m="1128300">minute</span> <span m="1128540">what</span> <span
  m="1128720">those</span> <span m="1128960">numbers</span> <span
  m="1129410">are.</span></p><p><span m="1130150">But</span> <span
  m="1130340">I</span> <span m="1130410">just</span> <span
  m="1130620">want</span> <span m="1130790">to</span> <span
  m="1130830">get</span> <span m="1131080">the</span> <span
  m="1131180">picture</span> <span m="1131800">of</span> <span
  m="1131820">what</span> <span m="1131990">I'm</span> <span
  m="1132120">doing.</span></p><p><span m="1133040">If</span> <span
  m="1133310">I</span> <span m="1133430">put</span> <span m="1133800">P1,</span>
  <span m="1134700">P2,</span> <span m="1134930">P3</span> <span
  m="1135190">in</span> <span m="1135310">those</span> <span
  m="1135550">three</span> <span m="1135770">equations,</span> <span
  m="1136390">what</span> <span m="1136670">would</span> <span
  m="1136860">be</span> <span m="1137030">good</span> <span
  m="1137260">about</span> <span m="1137540">the</span> <span
  m="1138220">three</span> <span m="1138480">equations?</span></p><p><span
  m="1141820">I</span> <span m="1141950">could</span> <span
  m="1142160">solve</span> <span m="1142530">them.</span> <span
  m="1143820">A</span> <span m="1144060">line</span> <span
  m="1144510">goes</span> <span m="1144810">through</span> <span
  m="1145040">the</span> <span m="1145170">Ps.</span></p><p><span
  m="1146420">So</span> <span m="1146920">the</span> <span
  m="1147160">P1,</span> <span m="1148500">P2,</span> <span
  m="1148760">P3</span> <span m="1149060">vector,</span> <span
  m="1149450">that's</span> <span m="1149740">in</span> <span
  m="1149890">the</span> <span m="1150030">column</span></p><p><span
  m="1150400">space.</span> <span m="1151320">That</span> <span
  m="1151900">is</span> <span m="1152120">a</span> <span
  m="1152220">combination</span> <span m="1153080">of</span> <span
  m="1153190">these</span> <span m="1153480">columns.</span></p><p><span
  m="1154480">It's</span> <span m="1154870">the</span> <span
  m="1155050">closest</span> <span m="1155640">combination.</span></p><p><span
  m="1156400">It's</span> <span m="1156890">this</span> <span
  m="1157150">picture.</span></p><p><span m="1158180">See,</span> <span
  m="1158490">I've</span> <span m="1158630">got</span> <span
  m="1158850">the</span> <span m="1158980">two</span> <span
  m="1159170">pictures</span> <span m="1160050">like</span> <span
  m="1160530">here's</span> <span m="1160920">the</span> <span
  m="1161040">picture</span> <span m="1162000">that</span> <span
  m="1162410">shows</span> <span m="1162850">the</span> <span
  m="1162960">points,</span> <span m="1164140">this</span> <span
  m="1164710">is</span> <span m="1164860">a</span> <span
  m="1164940">picture</span> <span m="1165990">in</span> <span
  m="1166560">a</span> <span m="1166620">blackboard</span> <span
  m="1167260">plane,</span> <span m="1168240">here's</span> <span
  m="1169170">a</span> <span m="1169260">picture</span> <span
  m="1170510">that's</span> <span m="1171620">showing</span> <span
  m="1172440">the</span> <span m="1172730">vectors.</span></p><p><span
  m="1174310">The</span> <span m="1174460">vector</span> <span
  m="1174860">b,</span> <span m="1175660">which</span> <span
  m="1176150">is</span> <span m="1176410">in</span> <span
  m="1176550">this</span> <span m="1176840">case,</span> <span
  m="1177530">in</span> <span m="1177710">this</span> <span
  m="1177900">example</span> <span m="1178540">is</span> <span
  m="1178690">the</span> <span m="1178800">vector</span> <span
  m="1179230">one,</span> <span m="1179510">two,</span> <span
  m="1179700">two.</span></p><p><span m="1182090">The</span> <span
  m="1182280">column</span> <span m="1182740">space</span> <span
  m="1183840">is</span> <span m="1184780">in</span> <span
  m="1185040">this</span> <span m="1185270">case</span> <span
  m="1185990">spanned</span> <span m="1186810">by</span> <span
  m="1187090">the</span> <span m="1187410">--</span> <span
  m="1187940">well,</span> <span m="1188320">you</span> <span
  m="1188500">see</span> <span m="1188800">A</span> <span
  m="1188980">there.</span></p><p><span m="1189720">The</span> <span
  m="1189880">column</span> <span m="1190290">space</span> <span
  m="1190900">of</span> <span m="1191230">the</span> <span
  m="1191330">matrix</span> <span m="1192000">one,</span> <span
  m="1192400">one,</span> <span m="1192770">one,</span> <span
  m="1193130">one,</span> <span m="1193380">two,</span> <span
  m="1193650">three.</span></p><p><span m="1195600">And</span> <span
  m="1196780">this</span> <span m="1198110">picture</span> <span
  m="1198940">shows</span> <span m="1199830">the</span> <span
  m="1200050">nearest</span> <span m="1200730">point.</span></p><p><span
  m="1201540">There's</span> <span m="1202020">the</span> <span
  m="1202250">--</span> <span m="1202380">that</span> <span
  m="1202720">point</span> <span m="1203110">P1,</span> <span
  m="1204040">P2,</span> <span m="1204270">P3,</span> <span
  m="1204510">which</span> <span m="1204750">I'm</span> <span
  m="1204920">going</span> <span m="1205150">to</span> <span
  m="1205620">compute</span> <span m="1206360">before</span> <span
  m="1206650">the</span> <span m="1206790">end</span> <span
  m="1206940">of</span> <span m="1207000">this</span> <span
  m="1207210">hour,</span> <span m="1208050">is</span> <span
  m="1209050">the</span> <span m="1209940">closest</span> <span
  m="1210460">point</span> <span m="1211430">in</span> <span
  m="1211630">the</span> <span m="1211730">column</span> <span
  m="1212090">space.</span> <span m="1213090">OK.</span> <span
  m="1213780">Let</span> <span m="1214470">me</span> <span m="1214640">--</span>
  <span m="1215760">t</span> <span m="1216910">I</span> <span
  m="1217450">don't</span> <span m="1217730">dare</span> <span
  m="1218140">leave</span> <span m="1218460">it</span> <span
  m="1218580">any</span> <span m="1218810">longer</span> <span
  m="1219290">--</span> <span m="1219560">can</span> <span m="1219770">I</span>
  <span m="1219860">just</span> <span m="1220170">compute</span> <span
  m="1220610">it</span> <span m="1220780">now.</span></p><p><span
  m="1221650">So</span> <span m="1221860">I</span> <span m="1221940">want</span>
  <span m="1222170">to</span> <span m="1222250">compute</span> <span
  m="1223580">--</span> <span m="1224850">find</span> <span
  m="1225280">P.</span> <span m="1228360">All</span> <span
  m="1228480">right.</span></p><p><span m="1228800">Find</span> <span
  m="1229180">P.</span> <span m="1231810">Find</span> <span
  m="1232240">x,</span> <span m="1232980">which</span> <span
  m="1233280">is</span> <span m="1233550">CD,</span> <span
  m="1235170">find</span> <span m="1236720">P</span> <span
  m="1237580">and</span> <span m="1238070">P.</span> <span
  m="1238690">OK.</span> <span m="1239250">And</span> <span m="1239500">I</span>
  <span m="1239570">really</span> <span m="1239980">should</span> <span
  m="1240540">put</span> <span m="1240810">these</span> <span
  m="1241050">little</span> <span m="1241300">hats</span> <span
  m="1241800">on</span> <span m="1242430">to</span> <span
  m="1243160">remind</span> <span m="1243710">myself</span> <span
  m="1244460">that</span> <span m="1244850">they're</span> <span
  m="1245250">the</span> <span m="1245850">estimated</span> <span
  m="1247680">the</span> <span m="1248970">best</span> <span
  m="1249300">line,</span> <span m="1249830">not</span> <span
  m="1250290">the</span> <span m="1250410">perfect</span> <span
  m="1250870">line.</span> <span m="1251970">OK.</span> <span
  m="1253050">OK.</span> <span m="1254330">How</span> <span
  m="1254500">do</span> <span m="1254630">I</span> <span
  m="1254740">proceed?</span></p><p><span m="1255540">Let's</span> <span
  m="1256010">just</span> <span m="1256230">run</span> <span
  m="1256450">through</span> <span m="1256680">the</span> <span
  m="1256790">mechanics.</span></p><p><span m="1258340">What's</span> <span
  m="1258640">the</span> <span m="1258810">equation</span> <span
  m="1259640">for</span> <span m="1261240">x?</span></p><p><span
  m="1262530">The</span> <span m="1262630">--</span> <span m="1262650">or</span>
  <span m="1263070">x</span> <span m="1263560">hat.</span></p><p><span
  m="1264620">The</span> <span m="1264750">equation</span> <span
  m="1265340">for</span> <span m="1265480">that</span> <span
  m="1265850">is</span> <span m="1266260">A</span> <span
  m="1266510">transpose</span> <span m="1267230">A</span> <span
  m="1268220">x</span> <span m="1269060">hat</span> <span
  m="1269550">equals</span> <span m="1270180">A</span> <span
  m="1270390">transpose</span> <span m="1271070">x</span> <span
  m="1271530">--</span> <span m="1272500">A</span> <span
  m="1272650">transpose</span> <span m="1273820">b.</span></p><p><span
  m="1278020">The</span> <span m="1278400">most</span> <span
  m="1278820">--</span> <span m="1279530">I'm</span> <span m="1279640">--</span>
  <span m="1280210">will</span> <span m="1280900">venture</span> <span
  m="1281450">to</span> <span m="1281620">call</span> <span
  m="1281990">that</span> <span m="1282240">the</span> <span
  m="1282340">most</span> <span m="1282640">important</span> <span
  m="1283070">equation</span> <span m="1283620">in</span> <span
  m="1283720">statistics.</span></p><p><span m="1286350">And</span> <span
  m="1286670">in</span> <span m="1286800">estimation.</span></p><p><span
  m="1288560">And</span> <span m="1289050">whatever</span> <span
  m="1289510">you're</span> <span m="1289740">--</span> <span
  m="1289770">wherever</span> <span m="1290230">you've</span> <span
  m="1290420">got</span> <span m="1290940">error</span> <span
  m="1291510">and</span> <span m="1291660">noise</span> <span
  m="1292540">this</span> <span m="1293140">is</span> <span
  m="1293400">the</span> <span m="1293600">estimate</span> <span
  m="1294350">that</span> <span m="1294780">you</span> <span
  m="1294890">use</span> <span m="1295250">first.</span> <span
  m="1296980">OK.</span> <span m="1297500">Whenever</span> <span
  m="1298180">you're</span> <span m="1298370">fitting</span> <span
  m="1298950">things</span> <span m="1299880">by</span> <span
  m="1300690">a</span> <span m="1300770">few</span> <span
  m="1301630">parameters,</span> <span m="1302740">that's</span> <span
  m="1303280">the</span> <span m="1303420">equation</span> <span
  m="1303930">to</span> <span m="1303980">use.</span> <span
  m="1304700">OK,</span> <span m="1304880">let's</span> <span
  m="1305130">solve</span> <span m="1305440">it.</span></p><p><span
  m="1306500">What</span> <span m="1306770">is</span> <span m="1306940">A</span>
  <span m="1307100">transpose</span> <span m="1307780">A?</span></p><p><span
  m="1307970">So</span> <span m="1308160">I</span> <span m="1308280">have</span>
  <span m="1308390">to</span> <span m="1308520">figure</span> <span
  m="1308840">out</span> <span m="1309000">what</span> <span
  m="1309140">these</span> <span m="1309330">matrices</span> <span
  m="1309960">are.</span></p><p><span m="1310580">One,</span> <span
  m="1311020">one,</span> <span m="1311320">one,</span> <span
  m="1311750">one,</span> <span m="1311960">two,</span> <span
  m="1312180">three</span> <span m="1313260">and</span> <span
  m="1314750">one,</span> <span m="1315460">one,</span> <span
  m="1315830">one,</span> <span m="1316270">one,</span> <span
  m="1316560">two,</span> <span m="1316860">three,</span> <span
  m="1318260">that</span> <span m="1319450">gives</span> <span
  m="1319710">me</span> <span m="1319930">some</span> <span
  m="1320470">matrix,</span> <span m="1323830">that</span> <span
  m="1324070">gives</span> <span m="1324310">me</span> <span
  m="1324490">a</span> <span m="1324560">matrix,</span> <span
  m="1325370">what</span> <span m="1325580">do</span> <span m="1325690">I</span>
  <span m="1325800">get</span> <span m="1326090">out</span> <span
  m="1326260">of</span> <span m="1326310">that,</span> <span
  m="1326680">three,</span> <span m="1328320">six,</span> <span
  m="1329990">six,</span> <span m="1331110">and</span> <span
  m="1331870">one</span> <span m="1332510">and</span> <span
  m="1332750">four</span> <span m="1333160">and</span> <span
  m="1333280">nine,</span> <span m="1333680">fourteen.</span></p><p><span
  m="1335720">OK.</span> <span m="1337040">And</span> <span
  m="1338100">what</span> <span m="1338410">do</span> <span m="1338580">I</span>
  <span m="1338740">expect</span> <span m="1339510">to</span> <span
  m="1339890">see</span> <span m="1340130">in</span> <span
  m="1340250">that</span> <span m="1340460">matrix</span> <span
  m="1341020">and</span> <span m="1341040">I</span> <span m="1341220">do</span>
  <span m="1341440">see</span> <span m="1341660">it,</span> <span
  m="1341830">just</span> <span m="1342040">before</span> <span
  m="1342390">I</span> <span m="1342720">keep</span> <span
  m="1343160">going</span> <span m="1343460">with</span> <span
  m="1343590">the</span> <span m="1343700">calculation?</span></p><p><span
  m="1345210">I</span> <span m="1345440">expect</span> <span
  m="1345840">that</span> <span m="1346020">matrix</span> <span
  m="1346500">to</span> <span m="1346590">be</span> <span
  m="1346770">symmetric.</span></p><p><span m="1348450">I</span> <span
  m="1348730">expect</span> <span m="1349390">it</span> <span
  m="1349720">to</span> <span m="1349880">be</span> <span
  m="1350110">invertible.</span></p><p><span m="1354100">And</span> <span
  m="1354960">near</span> <span m="1355180">the</span> <span
  m="1355330">end</span> <span m="1355530">of</span> <span
  m="1355590">the</span> <span m="1355720">course</span> <span
  m="1356150">I'm</span> <span m="1356300">going</span> <span
  m="1356460">to</span> <span m="1356550">say</span> <span m="1356900">I</span>
  <span m="1357030">expect</span> <span m="1357470">it</span> <span
  m="1357580">to</span> <span m="1357660">be</span> <span
  m="1357860">positive</span> <span m="1358470">definite,</span> <span
  m="1359060">but</span> <span m="1359240">that's</span> <span
  m="1360860">a</span> <span m="1361550">future</span> <span
  m="1363170">fact</span> <span m="1364000">about</span> <span
  m="1364260">this</span> <span m="1364540">crucial</span> <span
  m="1365020">matrix,</span> <span m="1365590">A</span> <span
  m="1365770">transpose</span> <span m="1366400">A.</span></p><p><span
  m="1367050">OK.</span> <span m="1367670">And</span> <span
  m="1368120">now</span> <span m="1368440">let</span> <span
  m="1368600">me</span> <span m="1368750">figure</span> <span
  m="1369120">A</span> <span m="1369240">transpose</span> <span
  m="1369860">b.</span></p><p><span m="1370880">So</span> <span
  m="1371260">let</span> <span m="1371390">me</span> <span m="1371730">--</span>
  <span m="1371800">can</span> <span m="1372030">I</span> <span
  m="1372170">tack</span> <span m="1372590">on</span> <span m="1373540">b</span>
  <span m="1374290">as</span> <span m="1374470">an</span> <span
  m="1374590">extra</span> <span m="1375010">column</span> <span
  m="1375490">here,</span> <span m="1376380">one,</span> <span
  m="1377040">two,</span> <span m="1377280">two?</span></p><p><span
  m="1379950">And</span> <span m="1380370">tack</span> <span
  m="1380730">on</span> <span m="1381460">the</span> <span
  m="1381890">extra</span> <span m="1382700">A</span> <span
  m="1383010">transpose</span> <span m="1383810">b</span> <span
  m="1384320">is</span> <span m="1384750">--</span> <span
  m="1384770">looks</span> <span m="1385010">like</span> <span
  m="1385330">five</span> <span m="1386250">and</span> <span
  m="1387070">one</span> <span m="1387800">and</span> <span
  m="1388010">four</span> <span m="1388570">and</span> <span
  m="1388740">six,</span> <span m="1389270">eleven.</span></p><p><span
  m="1393770">I</span> <span m="1393920">think</span> <span
  m="1394330">my</span> <span m="1394530">equations</span> <span
  m="1395190">are</span> <span m="1395990">three</span> <span
  m="1396490">C</span> <span m="1397320">plus</span> <span
  m="1398000">six</span> <span m="1398340">D</span> <span
  m="1399200">equals</span> <span m="1399750">five,</span> <span
  m="1400760">and</span> <span m="1401590">six</span> <span m="1401950">D</span>
  <span m="1402740">plus</span> <span m="1403480">fourt-six</span> <span
  m="1405240">C</span> <span m="1405900">plus</span> <span
  m="1406510">fourteen</span> <span m="1407250">D</span> <span
  m="1407860">is</span> <span m="1408470">eleven.</span></p><p><span
  m="1409700">Can</span> <span m="1409960">I</span> <span
  m="1410070">just</span> <span m="1410490">for</span> <span
  m="1410690">safety</span> <span m="1411380">see</span> <span
  m="1411610">if</span> <span m="1411770">I</span> <span m="1411860">did</span>
  <span m="1412110">that</span> <span m="1412320">right?</span></p><p><span
  m="1413090">One,</span> <span m="1413410">one,</span> <span
  m="1413630">one</span> <span m="1413990">times</span> <span
  m="1414310">one,</span> <span m="1414540">two,</span> <span
  m="1414800">two</span> <span m="1415400">is</span> <span
  m="1416020">five.</span></p><p><span m="1417350">One,</span> <span
  m="1417690">two,</span> <span m="1417920">three,</span> <span
  m="1418330">that's</span> <span m="1418670">one,</span> <span
  m="1419080">four</span> <span m="1419560">and</span> <span
  m="1419680">six,</span> <span m="1420120">eleven.</span></p><p><span
  m="1420630">Looks</span> <span m="1420940">good.</span></p><p><span
  m="1422670">These</span> <span m="1422960">are</span> <span
  m="1423030">my</span> <span m="1423260">equations.</span></p><p><span
  m="1428860">That's</span> <span m="1429140">my</span> <span
  m="1429690">--</span> <span m="1430200">they're</span> <span
  m="1430640">called</span> <span m="1430920">the</span> <span
  m="1431040">normal</span> <span m="1431630">equations.</span></p><p><span
  m="1434610">I'll</span> <span m="1434730">just</span> <span
  m="1434960">write</span> <span m="1435180">that</span> <span
  m="1435370">word</span> <span m="1435690">down</span> <span
  m="1436010">because</span> <span m="1436390">it</span> <span
  m="1436500">--</span> <span m="1442800">so</span> <span m="1443020">I</span>
  <span m="1443120">solve</span> <span m="1443480">them.</span></p><p><span
  m="1444470">I</span> <span m="1444600">solve</span> <span
  m="1445090">that</span> <span m="1445380">for</span> <span
  m="1445550">C</span> <span m="1445810">and</span> <span m="1445970">D.</span>
  <span m="1449080">I</span> <span m="1449360">would</span> <span
  m="1449510">like</span> <span m="1449750">to</span> <span
  m="1450080">--</span> <span m="1450270">before</span> <span
  m="1450570">I</span> <span m="1450630">solve</span> <span
  m="1450960">them</span> <span m="1451130">could</span> <span
  m="1451370">I</span> <span m="1451440">do</span> <span m="1451610">one</span>
  <span m="1451900">thing</span> <span m="1452160">that's</span> <span
  m="1452420">on</span> <span m="1452600">the</span> <span m="1452680">--</span>
  <span m="1453130">that's</span> <span m="1453500">just</span> <span
  m="1453770">above</span> <span m="1454130">here?</span></p><p><span
  m="1456570">I</span> <span m="1456900">would</span> <span
  m="1457050">like</span> <span m="1457320">to</span> <span
  m="1457660">--</span> <span m="1458110">I'd</span> <span
  m="1458230">like</span> <span m="1458390">to</span> <span
  m="1458530">find</span> <span m="1458940">these</span> <span
  m="1459150">equations</span> <span m="1459780">from</span> <span
  m="1459990">calculus.</span></p><p><span m="1461470">I'd</span> <span
  m="1461650">like</span> <span m="1461870">to</span> <span
  m="1462010">find</span> <span m="1462500">them</span> <span
  m="1463380">from</span> <span m="1464180">this</span> <span
  m="1464610">minimizing</span> <span m="1465360">thing.</span></p><p><span
  m="1466320">So</span> <span m="1466520">what's</span> <span
  m="1466830">the</span> <span m="1466960">first</span> <span
  m="1467340">error?</span></p><p><span m="1468010">The</span> <span
  m="1468150">first</span> <span m="1468580">error</span> <span
  m="1469000">is</span> <span m="1469800">what</span> <span m="1470130">I</span>
  <span m="1470230">missed</span> <span m="1470660">by</span> <span
  m="1470980">in</span> <span m="1471080">the</span> <span
  m="1471190">first</span> <span m="1471540">equation.</span></p><p><span
  m="1472690">C</span> <span m="1473140">plus</span> <span m="1473620">D</span>
  <span m="1473980">minus</span> <span m="1474470">one</span> <span
  m="1474970">squared.</span></p><p><span m="1476250">And</span> <span
  m="1476650">the</span> <span m="1476750">second</span> <span
  m="1477220">error</span> <span m="1477630">is</span> <span
  m="1478050">what</span> <span m="1478210">I</span> <span
  m="1478270">miss</span> <span m="1478570">in</span> <span
  m="1478670">the</span> <span m="1478780">second</span> <span
  m="1479180">equation.</span></p><p><span m="1480010">C</span> <span
  m="1480450">plus</span> <span m="1480910">two</span> <span
  m="1481210">D</span> <span m="1481620">minus</span> <span
  m="1482110">two</span> <span m="1482780">squared.</span></p><p><span
  m="1484110">And</span> <span m="1484340">the</span> <span
  m="1484450">third</span> <span m="1484840">error</span> <span
  m="1485210">squared</span> <span m="1485810">is</span> <span
  m="1486480">C</span> <span m="1487280">plus</span> <span
  m="1487900">three</span> <span m="1488220">D</span> <span
  m="1488900">minus</span> <span m="1489610">two</span> <span
  m="1490370">squared.</span></p><p><span m="1492350">That's</span> <span
  m="1492870">my</span> <span m="1493680">--</span> <span
  m="1493980">overall</span> <span m="1494630">squared</span> <span
  m="1495320">error</span> <span m="1495690">that</span> <span
  m="1495860">I'm</span> <span m="1496050">trying</span> <span
  m="1496410">to</span> <span m="1496490">minimize.</span> <span
  m="1498040">OK.</span> <span m="1498610">So</span> <span
  m="1506670">how</span> <span m="1506810">would</span> <span
  m="1507000">you</span> <span m="1507100">minimize</span> <span
  m="1507650">that?</span> <span m="1508910">OK,</span> <span
  m="1509070">linear</span> <span m="1509450">algebra</span> <span
  m="1510000">has</span> <span m="1510730">given</span> <span
  m="1511180">us</span> <span m="1512110">the</span> <span
  m="1512840">equations</span> <span m="1513490">for</span> <span
  m="1513620">the</span> <span m="1513750">minimum.</span></p><p><span
  m="1516270">But</span> <span m="1517400">we</span> <span
  m="1518010">could</span> <span m="1518160">use</span> <span
  m="1518380">calculus</span> <span m="1518970">too.</span></p><p><span
  m="1520750">That's</span> <span m="1521540">a</span> <span
  m="1521620">function</span> <span m="1522120">of</span> <span
  m="1522240">two</span> <span m="1522420">variables,</span> <span
  m="1523020">C</span> <span m="1523310">and</span> <span m="1523480">D,</span>
  <span m="1524440">and</span> <span m="1525240">we're</span> <span
  m="1525390">looking</span> <span m="1525850">for</span> <span
  m="1526250">the</span> <span m="1526660">minimum.</span></p><p><span
  m="1528010">So</span> <span m="1528240">how</span> <span m="1528420">do</span>
  <span m="1528510">we</span> <span m="1528680">find</span> <span
  m="1529000">it?</span></p><p><span m="1531140">Directly</span> <span
  m="1531570">from</span> <span m="1531770">calculus,</span> <span
  m="1532920">we</span> <span m="1533920">take</span> <span
  m="1534260">partial</span> <span m="1534650">derivatives,</span> <span
  m="1535160">right,</span> <span m="1535490">we've</span> <span
  m="1535640">got</span> <span m="1535820">two</span> <span
  m="1536000">variables,</span> <span m="1536520">C</span> <span
  m="1536760">and</span> <span m="1536900">D,</span> <span m="1537510">so</span>
  <span m="1538100">take</span> <span m="1538420">the</span> <span
  m="1538550">partial</span> <span m="1539100">derivative</span> <span
  m="1539650">with</span> <span m="1539820">respect</span> <span
  m="1540210">to</span> <span m="1540330">C</span> <span m="1540900">and</span>
  <span m="1541030">set</span> <span m="1541270">it</span> <span
  m="1541400">to</span> <span m="1541490">zero,</span> <span
  m="1542240">and</span> <span m="1542500">you'll</span> <span
  m="1542640">get</span> <span m="1542830">that</span> <span
  m="1543020">equation.</span></p><p><span m="1544560">Take</span> <span
  m="1544840">the</span> <span m="1544960">partial</span> <span
  m="1545410">derivative</span> <span m="1545920">with</span> <span
  m="1546020">respect</span> <span m="1546310">--</span> <span
  m="1547140">I'm</span> <span m="1547910">not</span> <span
  m="1548090">going</span> <span m="1548210">to</span> <span
  m="1548380">write</span> <span m="1549000">it</span> <span
  m="1549120">all</span> <span m="1549380">out,</span> <span
  m="1549560">just</span> <span m="1550000">--</span> <span
  m="1550280">you</span> <span m="1550420">will.</span></p><p><span
  m="1551570">The</span> <span m="1551680">partial</span> <span
  m="1552150">derivative</span> <span m="1552640">with</span> <span
  m="1552740">respect</span> <span m="1553120">to</span> <span
  m="1553210">D,</span> <span m="1554130">it</span> <span m="1555670">--</span>
  <span m="1556010">you</span> <span m="1556230">know,</span> <span
  m="1556370">it's</span> <span m="1556540">going</span> <span
  m="1556680">to</span> <span m="1556730">be</span> <span
  m="1556880">linear,</span> <span m="1557280">that's</span> <span
  m="1557590">the</span> <span m="1557690">beauty</span> <span
  m="1558130">of</span> <span m="1558200">these</span> <span
  m="1559340">squares,that</span> <span m="1559590">if</span> <span
  m="1559880">I</span> <span m="1559970">have</span> <span
  m="1560090">the</span> <span m="1560190">square</span> <span
  m="1560780">of</span> <span m="1560880">something</span> <span
  m="1562020">and</span> <span m="1562850">I</span> <span
  m="1562940">take</span> <span m="1563220">its</span> <span
  m="1563420">derivative</span> <span m="1564160">I</span> <span
  m="1564260">get</span> <span m="1564520">something</span> <span
  m="1565550">And</span> <span m="1566250">this</span> <span
  m="1566520">is</span> <span m="1566650">what</span> <span m="1566830">I</span>
  <span m="1566890">get.</span> <span m="1567290">linear.</span></p><p><span
  m="1567520">So</span> <span m="1567750">this</span> <span
  m="1568030">is</span> <span m="1568590">the</span> <span
  m="1568860">derivative</span> <span m="1569580">of</span> <span
  m="1569780">the</span> <span m="1569960">error</span> <span
  m="1570340">with</span> <span m="1570500">respect</span> <span
  m="1570860">to</span> <span m="1570970">C</span> <span
  m="1571440">being</span> <span m="1571760">zero,</span> <span
  m="1572350">and</span> <span m="1572660">this</span> <span
  m="1572890">is</span> <span m="1573140">the</span> <span
  m="1573290">derivative</span> <span m="1573770">of</span> <span
  m="1573910">the</span> <span m="1574090">error</span> <span
  m="1574370">with</span> <span m="1574530">respect</span> <span
  m="1574860">to</span> <span m="1574950">D</span> <span
  m="1575280">being</span> <span m="1575600">zero.</span></p><p><span
  m="1577850">Wherever</span> <span m="1578280">you</span> <span
  m="1578430">look,</span> <span m="1578740">these</span> <span
  m="1578960">equations</span> <span m="1579780">keep</span> <span
  m="1580090">coming.</span></p><p><span m="1580660">So</span> <span
  m="1580860">now</span> <span m="1581080">I</span> <span
  m="1581190">guess</span> <span m="1581500">I'm</span> <span
  m="1581620">going</span> <span m="1581760">to</span> <span
  m="1581850">solve</span> <span m="1582280">it,</span> <span
  m="1582370">what</span> <span m="1582590">will</span> <span
  m="1582770">I</span> <span m="1582860">do,</span> <span
  m="1583080">I'll</span> <span m="1583250">subtract,</span> <span
  m="1584240">I'll</span> <span m="1584610">do</span> <span
  m="1584760">elimination</span> <span m="1585390">of</span> <span
  m="1585530">course,</span> <span m="1585830">because</span> <span
  m="1585980">that's</span> <span m="1586190">the</span> <span
  m="1586210">only</span> <span m="1586400">thing</span> <span
  m="1586570">I</span> <span m="1586620">know</span> <span
  m="1586830">how</span> <span m="1586950">to</span> <span
  m="1587080">do.</span></p><p><span m="1587820">Two</span> <span
  m="1588130">of</span> <span m="1588190">these</span> <span
  m="1588660">away</span> <span m="1589000">from</span> <span
  m="1589220">this</span> <span m="1590050">would</span> <span
  m="1590490">give</span> <span m="1590770">me</span> <span
  m="1591410">--</span> <span m="1592540">let's</span> <span
  m="1592730">see,</span> <span m="1592940">six,</span> <span
  m="1593800">so</span> <span m="1594070">would</span> <span
  m="1594220">that</span> <span m="1594410">be</span> <span
  m="1594610">two</span> <span m="1594940">Ds</span> <span
  m="1595650">equals</span> <span m="1596590">one?</span></p><p><span
  m="1597230">Ha.</span> <span m="1601440">So</span> <span m="1601600">it</span>
  <span m="1601710">wasn't</span> <span m="1602250">--</span> <span
  m="1603050">I</span> <span m="1603250">was</span> <span
  m="1603440">afraid</span> <span m="1603880">these</span> <span
  m="1604110">numbers</span> <span m="1604470">were</span> <span
  m="1604540">going</span> <span m="1604700">to</span> <span
  m="1604780">come</span> <span m="1605010">out</span> <span
  m="1605160">awful.</span></p><p><span m="1605760">But</span> <span
  m="1606020">if</span> <span m="1606130">I</span> <span m="1606240">take</span>
  <span m="1606570">two</span> <span m="1607540">of</span> <span
  m="1607660">those</span> <span m="1607990">away</span> <span
  m="1608270">from</span> <span m="1608470">that,</span> <span
  m="1608770">the</span> <span m="1608870">equation</span> <span
  m="1609390">I</span> <span m="1609470">get</span> <span
  m="1609680">left</span> <span m="1610060">is</span> <span
  m="1610430">two</span> <span m="1610790">D</span> <span
  m="1610980">equals</span> <span m="1611260">one,</span> <span
  m="1611480">so</span> <span m="1611630">I</span> <span
  m="1611770">think</span> <span m="1612370">D</span> <span
  m="1612700">is</span> <span m="1612870">a</span> <span m="1612940">half</span>
  <span m="1614220">and</span> <span m="1615360">C</span> <span
  m="1616070">is</span> <span m="1617070">whatever</span> <span
  m="1617700">back</span> <span m="1618030">substitution</span> <span
  m="1618900">gives,</span> <span m="1619590">six</span> <span
  m="1620210">D</span> <span m="1620490">is</span> <span
  m="1620780">three,</span> <span m="1621680">so</span> <span
  m="1622080">three</span> <span m="1622520">C</span> <span
  m="1622950">plus</span> <span m="1623360">three</span> <span
  m="1623650">is</span> <span m="1623910">five,</span> <span
  m="1624460">I'm</span> <span m="1624600">doing</span> <span
  m="1624810">back</span> <span m="1625080">substitution</span> <span
  m="1625790">now,</span> <span m="1625960">right,</span> <span
  m="1626520">three,</span> <span m="1627060">can</span> <span
  m="1627230">I</span> <span m="1627310">do</span> <span m="1627480">it</span>
  <span m="1627560">in</span> <span m="1628030">light</span> <span
  m="1628440">letters,</span> <span m="1629150">three</span> <span
  m="1629680">C</span> <span m="1630150">plus</span> <span
  m="1630910">that</span> <span m="1631320">six</span> <span
  m="1631680">D</span> <span m="1631860">is</span> <span
  m="1632110">three</span> <span m="1632690">equals</span> <span
  m="1633100">five,</span> <span m="1633950">so</span> <span
  m="1634930">three</span> <span m="1635210">C</span> <span
  m="1635430">is</span> <span m="1635630">two,</span> <span
  m="1635970">so</span> <span m="1636080">I</span> <span
  m="1636190">think</span> <span m="1636540">C</span> <span
  m="1636810">is</span> <span m="1636990">two-thirds.</span> <span
  m="1643350">One-half</span> <span m="1643680">and</span> <span
  m="1643850">two-thirds.</span> <span m="1649230">So</span> <span
  m="1649450">the</span> <span m="1651140">best</span> <span
  m="1651540">line,</span> <span m="1652060">the</span> <span
  m="1652490">best</span> <span m="1652850">line</span> <span
  m="1653980">is</span> <span m="1656090">the</span> <span
  m="1656920">constant</span> <span m="1657630">two-thirds</span> <span
  m="1658640">plus</span> <span m="1659200">one-half</span> <span
  m="1660630">t.</span></p><p><span m="1662760">And</span> <span
  m="1662990">I</span> <span m="1663010">--</span> <span m="1663670">is</span>
  <span m="1663900">my</span> <span m="1664120">picture</span> <span
  m="1664760">more</span> <span m="1665030">or</span> <span
  m="1665090">less</span> <span m="1665450">right?</span></p><p><span
  m="1666820">Let</span> <span m="1666970">me</span> <span
  m="1667130">write,</span> <span m="1667410">let</span> <span
  m="1667550">me</span> <span m="1667720">copy</span> <span
  m="1668110">that</span> <span m="1668410">best</span> <span
  m="1668740">line</span> <span m="1669060">down</span> <span
  m="1669360">again,</span> <span m="1669890">two-thirds</span> <span
  m="1670670">and</span> <span m="1670830">a</span> <span
  m="1670850">half.</span></p><p><span m="1672600">Let</span> <span
  m="1672700">me</span> <span m="1673230">--</span> <span
  m="1673600">I'll</span> <span m="1673790">put</span> <span
  m="1673970">in</span> <span m="1674160">the</span> <span
  m="1674310">two-thirds</span> <span m="1674870">and</span> <span
  m="1675050">the</span> <span m="1675080">half.</span></p><p><span
  m="1679890">OK.</span> <span m="1680710">So</span> <span
  m="1681240">what's</span> <span m="1681570">this</span> <span
  m="1681830">P1,</span> <span m="1682800">that's</span> <span
  m="1683410">the</span> <span m="1683570">value</span> <span
  m="1684080">at</span> <span m="1684320">t</span> <span
  m="1684550">equal</span> <span m="1684830">to</span> <span
  m="1684910">one.</span></p><p><span m="1685360">At</span> <span
  m="1685550">t</span> <span m="1685700">equal</span> <span
  m="1685960">to</span> <span m="1686050">one,</span> <span m="1686380">I</span>
  <span m="1686510">have</span> <span m="1686760">two-thirds</span> <span
  m="1687420">plus</span> <span m="1687720">a</span> <span
  m="1687800">half,</span> <span m="1688380">which</span> <span
  m="1688710">is</span> <span m="1689220">--</span> <span
  m="1690280">what's</span> <span m="1690510">that,</span> <span
  m="1690760">four-sixths</span> <span m="1691450">and</span> <span
  m="1691600">three-sixths,</span> <span m="1692290">so</span> <span
  m="1692400">P1,</span> <span m="1693140">oh,</span> <span m="1693400">I</span>
  <span m="1693520">promised</span> <span m="1694030">not</span> <span
  m="1694210">to</span> <span m="1694310">write</span> <span
  m="1694530">another</span> <span m="1694960">thing</span> <span
  m="1695310">on</span> <span m="1695420">this</span> <span
  m="1696510">--</span> <span m="1698400">I'll</span> <span
  m="1698930">erase</span> <span m="1699540">P1</span> <span
  m="1700080">and</span> <span m="1700210">I'll</span> <span
  m="1700380">put</span> <span m="1700670">seven-sixths.</span> <span
  m="1701860">OK.</span> <span m="1702580">And</span> <span
  m="1703710">yeah,</span> <span m="1704540">it's</span> <span
  m="1704670">above</span> <span m="1705000">one,</span> <span
  m="1705310">and</span> <span m="1705470">e1</span> <span m="1706090">is</span>
  <span m="1706680">one-sixth,</span> <span m="1707430">right.</span> <span
  m="1707990">You</span> <span m="1708310">see</span> <span
  m="1708540">it</span> <span m="1708680">all.</span></p><p><span
  m="1708870">Right?</span> <span m="1709220">What's</span> <span
  m="1709590">P2?</span> <span m="1709830">OK.</span> <span
  m="1711660">At</span> <span m="1712290">point</span> <span
  m="1712820">t</span> <span m="1713050">equal</span> <span
  m="1713330">to</span> <span m="1713480">two,</span> <span
  m="1713950">where's</span> <span m="1714210">my</span> <span
  m="1714380">line</span> <span m="1714740">here?</span></p><p><span
  m="1715230">At</span> <span m="1715390">t</span> <span
  m="1715550">equal</span> <span m="1715750">to</span> <span
  m="1715850">two,</span> <span m="1716110">it's</span> <span
  m="1716270">two-thirds</span> <span m="1716930">plus</span> <span
  m="1717620">one,</span> <span m="1718240">right?</span></p><p><span
  m="1718920">That's</span> <span m="1719210">five-thirds.</span> <span
  m="1721580">Two-thirds</span> <span m="1722140">and</span> <span
  m="1722320">t</span> <span m="1722560">is</span> <span m="1722790">two,</span>
  <span m="1723170">so</span> <span m="1723340">that's</span> <span
  m="1723600">two-thirds</span> <span m="1724130">and</span> <span
  m="1724310">one</span> <span m="1724600">make</span> <span
  m="1724880">five-thirds.</span> <span m="1726070">And</span> <span
  m="1726460">that's</span> <span m="1726690">--</span> <span
  m="1726710">sure</span> <span m="1726910">enough,</span> <span
  m="1727180">that's</span> <span m="1727510">smaller</span> <span
  m="1728000">than</span> <span m="1728240">the</span> <span
  m="1728700">exact</span> <span m="1729320">two.</span></p><p><span
  m="1730280">And</span> <span m="1730510">then</span> <span
  m="1730980">final</span> <span m="1731910">P3,</span> <span
  m="1733130">when</span> <span m="1733480">t</span> <span m="1733720">is</span>
  <span m="1733930">three,</span> <span m="1734600">oh,</span> <span
  m="1734870">what's</span> <span m="1735180">two-thirds</span> <span
  m="1735850">plus</span> <span m="1736340">three-halves?</span> <span
  m="1741390">It's</span> <span m="1741620">the</span> <span
  m="1741700">same</span> <span m="1742040">as</span> <span
  m="1742250">three-halves</span> <span m="1742700">plus</span> <span
  m="1742970">two-thirds.</span> <span m="1743950">It's</span> <span
  m="1744670">--</span> <span m="1746750">so</span> <span
  m="1747060">maybe</span> <span m="1747430">four-sixths</span> <span
  m="1748340">and</span> <span m="1748540">nine-sixths,</span> <span
  m="1749280">maybe</span> <span m="1749560">thirteen-sixths.</span> <span
  m="1751120">OK,</span> <span m="1751670">and</span> <span
  m="1752140">again,</span> <span m="1752670">look,</span> <span
  m="1753160">oh,</span> <span m="1753480">look</span> <span
  m="1753710">at</span> <span m="1753800">this,</span> <span
  m="1754260">OK.</span> <span m="1755110">You</span> <span
  m="1755650">have</span> <span m="1755800">to</span> <span
  m="1755940">admire</span> <span m="1756580">the</span> <span
  m="1756900">beauty</span> <span m="1757250">of</span> <span
  m="1757320">this</span> <span m="1757530">answer.</span> <span
  m="1759840">What's</span> <span m="1760130">this</span> <span
  m="1760360">first</span> <span m="1760730">error?</span></p><p><span
  m="1761260">So</span> <span m="1761540">here</span> <span
  m="1761800">are</span> <span m="1761850">the</span> <span
  m="1762020">errors.</span> <span m="1762490">e1,</span> <span
  m="1763530">e2</span> <span m="1763880">and</span> <span
  m="1763950">e3.</span> <span m="1765760">OK,</span> <span
  m="1765920">what</span> <span m="1766170">was</span> <span
  m="1766330">that</span> <span m="1766530">first</span> <span
  m="1766850">error,</span> <span m="1767220">e1?</span> <span
  m="1768340">Well,</span> <span m="1769860">if</span> <span
  m="1770390">we</span> <span m="1770520">decide</span> <span
  m="1771080">the</span> <span m="1771220">errors</span> <span
  m="1771740">counting</span> <span m="1772210">up,</span> <span
  m="1772640">then</span> <span m="1773050">it's</span> <span
  m="1773430">one-sixth.</span> <span m="1775260">And</span> <span
  m="1776420">the</span> <span m="1776530">last</span> <span
  m="1776970">error,</span> <span m="1777290">thirteen-sixths</span> <span
  m="1778670">minus</span> <span m="1779120">the</span> <span
  m="1779250">correct</span> <span m="1779780">two</span> <span
  m="1780280">is</span> <span m="1780450">one-sixth</span> <span
  m="1781080">again.</span></p><p><span m="1783420">And</span> <span
  m="1784080">what's</span> <span m="1784370">this</span> <span
  m="1784620">error</span> <span m="1785010">in</span> <span
  m="1785090">the</span> <span m="1785190">middle?</span></p><p><span
  m="1787890">Let's</span> <span m="1788270">see,</span> <span
  m="1788570">the</span> <span m="1788710">correct</span> <span
  m="1789090">answer</span> <span m="1789480">was</span> <span
  m="1789760">two,</span> <span m="1790580">two.</span></p><p><span
  m="1792530">And</span> <span m="1793050">we</span> <span
  m="1793150">got</span> <span m="1793470">five-thirds</span> <span
  m="1794420">and</span> <span m="1794590">it's</span> <span
  m="1794860">the</span> <span m="1795010">other</span> <span
  m="1795230">direction,</span> <span m="1795900">minus</span> <span
  m="1796780">one-third,</span> <span m="1797630">minus</span> <span
  m="1798190">two-sixths.</span> <span m="1802070">That's</span> <span
  m="1802390">our</span> <span m="1802630">error</span> <span
  m="1802890">vector.</span></p><p><span m="1804560">In</span> <span
  m="1804730">our</span> <span m="1804910">picture,</span> <span
  m="1805630">in</span> <span m="1805810">our</span> <span
  m="1805970">other</span> <span m="1806190">picture,</span> <span
  m="1806830">here</span> <span m="1807070">it</span> <span
  m="1807130">is.</span></p><p><span m="1809220">We</span> <span
  m="1809390">just</span> <span m="1809740">found</span> <span
  m="1810450">P</span> <span m="1811790">and</span> <span m="1812900">e.</span>
  <span m="1813880">e</span> <span m="1814920">is</span> <span
  m="1815160">this</span> <span m="1815400">vector,</span> <span
  m="1816430">one-sixth,</span> <span m="1817040">minus</span> <span
  m="1817400">two-sixths,</span> <span m="1818140">one-sixth,</span> <span
  m="1819120">and</span> <span m="1820100">P</span> <span m="1820610">is</span>
  <span m="1820800">this</span> <span m="1821050">guy.</span></p><p><span
  m="1821540">Well,</span> <span m="1821900">maybe</span> <span
  m="1822180">I</span> <span m="1822230">have</span> <span
  m="1822320">the</span> <span m="1822440">signs</span> <span
  m="1822890">of</span> <span m="1823010">e</span> <span
  m="1823260">wrong,</span> <span m="1823540">I</span> <span
  m="1823620">think</span> <span m="1823840">I</span> <span
  m="1823950">have,</span> <span m="1824450">let</span> <span
  m="1825070">me</span> <span m="1825220">fix</span> <span
  m="1825560">it.</span></p><p><span m="1826880">Because</span> <span
  m="1827260">I</span> <span m="1827390">would</span> <span
  m="1827600">like</span> <span m="1829120">this</span> <span
  m="1831020">one-sixth</span> <span m="1832020">--</span> <span
  m="1832840">I</span> <span m="1832990">would</span> <span
  m="1833170">like</span> <span m="1833460">this</span> <span
  m="1834340">plus</span> <span m="1835180">the</span> <span
  m="1835320">P</span> <span m="1835930">to</span> <span m="1836080">give</span>
  <span m="1836680">the</span> <span m="1836820">original</span> <span
  m="1837250">b.</span></p><p><span m="1837690">I</span> <span
  m="1837850">want</span> <span m="1839070">P</span> <span
  m="1840140">plus</span> <span m="1840710">e</span> <span m="1841090">to</span>
  <span m="1841220">match</span> <span m="1841650">b.</span></p><p><span
  m="1842730">So</span> <span m="1842970">I</span> <span m="1843130">want</span>
  <span m="1843600">minus</span> <span m="1844240">a</span> <span
  m="1844350">sixth,</span> <span m="1845180">plus</span> <span
  m="1846100">seven-sixths</span> <span m="1847080">to</span> <span
  m="1847200">give</span> <span m="1847450">the</span> <span
  m="1847590">correct</span> <span m="1848440">b</span> <span
  m="1849040">equal</span> <span m="1849370">one.</span></p><p><span
  m="1850650">OK.</span> <span m="1852090">Now</span> <span
  m="1854240">--</span> <span m="1855380">I'm</span> <span
  m="1855830">going</span> <span m="1855980">to</span> <span
  m="1856350">take</span> <span m="1856720">a</span> <span
  m="1856820">deep</span> <span m="1857110">breath</span> <span
  m="1857410">here,</span> <span m="1858060">and</span> <span
  m="1858610">ask</span> <span m="1860170">what</span> <span
  m="1861660">do</span> <span m="1861910">we</span> <span
  m="1862150">know</span> <span m="1862510">about</span> <span
  m="1862980">this</span> <span m="1863340">error</span> <span
  m="1863750">vector</span> <span m="1864280">e?</span></p><p><span
  m="1866720">You've</span> <span m="1866940">seen</span> <span
  m="1867310">now</span> <span m="1867550">this</span> <span
  m="1867760">whole</span> <span m="1867970">problem</span> <span
  m="1868360">worked</span> <span m="1868660">completely</span> <span
  m="1869790">through,</span> <span m="1870500">and</span> <span
  m="1870640">I</span> <span m="1870720">even</span> <span
  m="1871020">think</span> <span m="1871280">the</span> <span
  m="1871410">numbers</span> <span m="1871790">are</span> <span
  m="1871880">right.</span></p><p><span m="1873780">So</span> <span
  m="1874040">there's</span> <span m="1874320">P,</span> <span
  m="1875830">so</span> <span m="1876780">let</span> <span m="1876910">me</span>
  <span m="1877020">--</span> <span m="1877500">I'll</span> <span
  m="1877750">write</span> <span m="1877970">--</span> <span
  m="1878660">if</span> <span m="1879020">I</span> <span m="1879110">can</span>
  <span m="1879680">put</span> <span m="1880090">it</span> <span
  m="1880220">down</span> <span m="1880480">here,</span> <span
  m="1881120">B</span> <span m="1881900">is</span> <span m="1882540">P</span>
  <span m="1883200">plus</span> <span m="1883740">e.</span></p><p><span
  m="1884840">b</span> <span m="1885180">I</span> <span
  m="1885330">believe</span> <span m="1886060">was</span> <span
  m="1886450">one,</span> <span m="1886860">two,</span> <span
  m="1887190">two.</span></p><p><span m="1889110">The</span> <span
  m="1889260">nearest</span> <span m="1889760">point</span> <span
  m="1890430">had</span> <span m="1891120">seven-sixths,</span> <span
  m="1894860">what</span> <span m="1895050">were</span> <span
  m="1895220">the</span> <span m="1895360">others?</span> <span
  m="1896120">Five-thirds</span> <span m="1897570">and</span> <span
  m="1898610">thirteen-sixths.</span> <span m="1900590">And</span> <span
  m="1901780">the</span> <span m="1901920">e</span> <span
  m="1902320">vector</span> <span m="1902890">was</span> <span
  m="1903570">minus</span> <span m="1904150">a</span> <span
  m="1904250">sixth,</span> <span m="1905360">two-sixths,</span> <span
  m="1906950">one-third</span> <span m="1907290">in</span> <span
  m="1907410">other</span> <span m="1907580">words,</span> <span
  m="1908050">and</span> <span m="1908390">minus</span> <span
  m="1908810">a</span> <span m="1908890">sixth.</span> <span
  m="1918740">OK.</span> <span m="1919010">Tell</span> <span
  m="1919200">me</span> <span m="1919350">some</span> <span
  m="1919580">stuff</span> <span m="1919920">about</span> <span
  m="1920230">these</span> <span m="1920690">two</span> <span
  m="1920990">vectors.</span></p><p><span m="1921930">Tell</span> <span
  m="1922080">me</span> <span m="1922230">something</span> <span
  m="1922600">about</span> <span m="1922850">those</span> <span
  m="1923120">two</span> <span m="1923290">vectors,</span> <span
  m="1923820">well,</span> <span m="1924450">they</span> <span
  m="1924730">add</span> <span m="1924940">to</span> <span m="1925020">b,</span>
  <span m="1925330">right,</span> <span m="1925850">great.</span></p><p><span
  m="1926480">OK.</span> <span m="1927070">What</span> <span
  m="1927450">else?</span></p><p><span m="1929420">What</span> <span
  m="1929660">else</span> <span m="1929980">about</span> <span
  m="1930340">those</span> <span m="1930680">two</span> <span
  m="1930900">vectors,</span> <span m="1931470">the</span> <span
  m="1932360">P,</span> <span m="1932520">the</span> <span
  m="1932840">projection</span> <span m="1933530">vector</span> <span
  m="1933920">P,</span> <span m="1934590">and</span> <span
  m="1935010">the</span> <span m="1935090">error</span> <span
  m="1935500">vector</span> <span m="1935950">e.</span></p><p><span
  m="1938700">What</span> <span m="1938910">else</span> <span
  m="1939170">do</span> <span m="1939260">you</span> <span
  m="1939360">know</span> <span m="1939540">about</span> <span
  m="1939790">them?</span></p><p><span m="1941470">They're</span> <span
  m="1941720">perpendicular,</span> <span m="1942490">right.</span></p><p><span
  m="1944430">Do</span> <span m="1944550">we</span> <span
  m="1944680">dare</span> <span m="1944950">verify</span> <span
  m="1945560">that?</span></p><p><span m="1949180">Can</span> <span
  m="1949340">you</span> <span m="1949460">take</span> <span
  m="1949740">the</span> <span m="1949850">dot</span> <span
  m="1950140">product</span> <span m="1950560">of</span> <span
  m="1950620">those</span> <span m="1950880">vectors?</span></p><p><span
  m="1952230">I'm</span> <span m="1952410">like</span> <span
  m="1952660">getting</span> <span m="1953010">like</span> <span
  m="1953290">minus</span> <span m="1953930">seven</span> <span
  m="1954380">over</span> <span m="1954650">thirty-six,</span> <span
  m="1955440">can</span> <span m="1955630">I</span> <span
  m="1955740">change</span> <span m="1956090">that</span> <span
  m="1956350">to</span> <span m="1956490">ten-sixths?</span> <span
  m="1962180">Oh,</span> <span m="1962460">God,</span> <span
  m="1962970">come</span> <span m="1963340">out</span> <span
  m="1963500">right</span> <span m="1963830">here.</span></p><p><span
  m="1965250">Minus</span> <span m="1965840">seven</span> <span
  m="1966240">over</span> <span m="1966600">thirty-six,</span> <span
  m="1968210">plus</span> <span m="1968780">twenty</span> <span
  m="1969410">over</span> <span m="1969680">thirty-six,</span> <span
  m="1970880">minus</span> <span m="1971720">thirteen</span> <span
  m="1972450">over</span> <span m="1972710">thirty-six.</span> <span
  m="1976730">Thank</span> <span m="1976960">you,</span> <span
  m="1977080">God.</span></p><p><span m="1977630">OK.</span> <span
  m="1979120">And</span> <span m="1980380">what</span> <span
  m="1980680">else</span> <span m="1981230">should</span> <span
  m="1981520">we</span> <span m="1981680">know</span> <span
  m="1981950">about</span> <span m="1982250">that</span> <span
  m="1982520">vector?</span></p><p><span m="1984030">Actually</span> <span
  m="1984440">we</span> <span m="1984580">know</span> <span
  m="1984940">--</span> <span m="1985740">I've</span> <span
  m="1986080">got</span> <span m="1986220">to</span> <span
  m="1986300">say</span> <span m="1986520">we</span> <span
  m="1986700">know</span> <span m="1987160">even</span> <span
  m="1987610">a</span> <span m="1987690">little</span> <span
  m="1988010">more.</span></p><p><span m="1988740">This</span> <span
  m="1989120">vector,</span> <span m="1990120">e,</span> <span
  m="1990970">is</span> <span m="1991300">perpendicular</span> <span
  m="1992050">to</span> <span m="1992200">P,</span> <span m="1993510">but</span>
  <span m="1994930">it's</span> <span m="1995280">perpendicular</span> <span
  m="1996050">to</span> <span m="1996230">other</span> <span
  m="1996450">stuff</span> <span m="1996780">too.</span></p><p><span
  m="1998480">It's</span> <span m="1998730">perpendicular</span> <span
  m="1999540">not</span> <span m="1999890">just</span> <span
  m="2000160">to</span> <span m="2000280">this</span> <span
  m="2000750">guy</span> <span m="2001230">in</span> <span
  m="2001420">the</span> <span m="2001540">column</span> <span
  m="2001890">space,</span> <span m="2002220">this</span> <span
  m="2002410">is</span> <span m="2002550">in</span> <span m="2002690">the</span>
  <span m="2002810">column</span> <span m="2003150">space</span> <span
  m="2003530">for</span> <span m="2003670">sure.</span></p><p><span
  m="2005170">This</span> <span m="2005400">is</span> <span
  m="2005570">perpendicular</span> <span m="2006320">to</span> <span
  m="2006410">the</span> <span m="2006550">column</span> <span
  m="2006920">space.</span></p><p><span m="2007680">So</span> <span
  m="2007920">like</span> <span m="2008280">give</span> <span
  m="2008440">me</span> <span m="2008590">another</span> <span
  m="2008980">vector</span> <span m="2009430">it's</span> <span
  m="2009590">perpendicular</span> <span m="2010330">to.</span></p><p><span
  m="2012710">Another</span> <span m="2013110">because</span> <span
  m="2013660">it's</span> <span m="2013810">perpendicular</span> <span
  m="2014320">to</span> <span m="2014400">the</span> <span
  m="2014510">whole</span> <span m="2015000">column</span> <span
  m="2015360">space,</span> <span m="2015770">not</span> <span
  m="2016060">just</span> <span m="2016340">to</span> <span
  m="2016430">this</span> <span m="2016840">--</span> <span
  m="2017490">this</span> <span m="2017970">particular</span> <span
  m="2019300">projection</span> <span m="2020340">that's</span> <span
  m="2020660">--</span> <span m="2020780">that</span> <span
  m="2020950">is</span> <span m="2021140">in</span> <span m="2021260">the</span>
  <span m="2021380">column</span> <span m="2021700">space,</span> <span
  m="2022570">but</span> <span m="2023060">it's</span> <span
  m="2023980">perpendicular</span> <span m="2024500">to</span> <span
  m="2024580">other</span> <span m="2024880">stuff,</span> <span
  m="2025190">whatever's</span> <span m="2025630">in</span> <span
  m="2025740">the</span> <span m="2025860">column</span> <span
  m="2026180">space,</span> <span m="2026520">so</span> <span
  m="2026650">tell</span> <span m="2026900">me</span> <span
  m="2027070">another</span> <span m="2027610">vector</span> <span
  m="2028550">in</span> <span m="2029000">the</span> <span m="2029130">--</span>
  <span m="2029380">oh,</span> <span m="2029560">well,</span> <span
  m="2029800">I've</span> <span m="2029940">written</span> <span
  m="2030150">down</span> <span m="2030370">the</span> <span
  m="2030460">matrix,</span> <span m="2031430">so</span> <span
  m="2032110">tell</span> <span m="2032320">me</span> <span
  m="2032430">another</span> <span m="2032750">vector</span> <span
  m="2033080">in</span> <span m="2033150">the</span> <span
  m="2033240">column</span> <span m="2033530">space.</span></p><p><span
  m="2035000">Pick</span> <span m="2035190">a</span> <span
  m="2035290">nice</span> <span m="2035580">one.</span></p><p><span
  m="2038000">One,</span> <span m="2038330">one,</span> <span
  m="2038530">one.</span></p><p><span m="2039450">That's</span> <span
  m="2039580">what</span> <span m="2039740">everybody's</span> <span
  m="2040320">thinking.</span> <span m="2041490">OK,</span> <span
  m="2041700">one,</span> <span m="2042070">one,</span> <span
  m="2042300">one</span> <span m="2042550">is</span> <span m="2042700">in</span>
  <span m="2042840">the</span> <span m="2042950">column</span> <span
  m="2043350">space.</span></p><p><span m="2044230">And</span> <span
  m="2044720">this</span> <span m="2045080">guy</span> <span
  m="2045340">is</span> <span m="2045490">supposed</span> <span
  m="2045940">to</span> <span m="2045990">be</span> <span
  m="2046170">perpendicular</span> <span m="2046960">to</span> <span
  m="2047060">one,</span></p><p><span m="2047350">one,</span> <span
  m="2047610">one.</span> <span m="2048090">Is</span> <span
  m="2048380">it?</span></p><p><span m="2050000">Sure.</span> <span
  m="2050659">If</span> <span m="2050980">I</span> <span m="2051080">take</span>
  <span m="2051310">the</span> <span m="2051440">dot</span> <span
  m="2051710">product</span> <span m="2052120">with</span> <span
  m="2052260">one,</span> <span m="2052550">one,</span> <span
  m="2052780">one</span> <span m="2053150">I</span> <span m="2053230">get</span>
  <span m="2053500">minus</span> <span m="2053909">a</span> <span
  m="2054000">sixth,</span> <span m="2054420">plus</span> <span
  m="2054699">two-sixths,</span> <span m="2055280">minus</span> <span
  m="2055659">a</span> <span m="2055760">sixth,</span> <span
  m="2056690">zero.</span></p><p><span m="2058080">And</span> <span
  m="2058400">it's</span> <span m="2058590">perpendicular</span> <span
  m="2059290">to</span> <span m="2059409">one,</span> <span
  m="2059650">two,</span> <span m="2059900">three.</span></p><p><span
  m="2060659">Because</span> <span m="2060920">if</span> <span
  m="2061060">I</span> <span m="2061170">take</span> <span
  m="2061739">the</span> <span m="2062130">dot</span> <span
  m="2062370">product</span> <span m="2062630">with</span> <span
  m="2062790">one,</span> <span m="2063020">two,</span> <span
  m="2063199">three</span> <span m="2063469">I</span> <span
  m="2063550">get</span> <span m="2063810">minus</span> <span
  m="2064330">one,</span> <span m="2065070">plus</span> <span
  m="2065760">four,</span> <span m="2066929">minus</span> <span
  m="2067630">three,</span> <span m="2068380">zero</span> <span
  m="2068820">again.</span> <span m="2070310">OK,</span> <span
  m="2070510">do</span> <span m="2070630">you</span> <span
  m="2070739">see</span> <span m="2071110">the</span> <span
  m="2071480">--</span> <span m="2072449">I</span> <span m="2072650">hope</span>
  <span m="2073080">you</span> <span m="2073310">see</span> <span
  m="2073800">the</span> <span m="2074020">two</span> <span
  m="2074929">pictures.</span></p><p><span m="2075739">The</span> <span
  m="2075889">picture</span> <span m="2076489">here</span> <span
  m="2077250">for</span> <span m="2077440">vectors</span> <span
  m="2078739">and,</span> <span m="2079929">the</span> <span
  m="2080040">picture</span> <span m="2080590">here</span> <span
  m="2081110">for</span> <span m="2081340">the</span> <span
  m="2081480">best</span> <span m="2081860">line,</span> <span
  m="2082280">and</span> <span m="2082429">it's</span> <span
  m="2082639">the</span> <span m="2082760">same</span> <span
  m="2083159">picture,</span> <span m="2086449">just</span> <span
  m="2086889">--</span> <span m="2088120">this</span> <span
  m="2088650">one's</span> <span m="2088880">in</span> <span
  m="2089020">the</span> <span m="2089120">plane</span> <span
  m="2089730">and</span> <span m="2089840">it's</span> <span
  m="2090060">showing</span> <span m="2090480">the</span> <span
  m="2090590">line,</span> <span m="2091440">this</span> <span
  m="2092100">one</span> <span m="2092739">never</span> <span
  m="2093300">did</span> <span m="2093570">show</span> <span
  m="2093889">the</span> <span m="2094020">line,</span> <span
  m="2094409">this</span> <span m="2094949">--</span> <span
  m="2094980">in</span> <span m="2095120">this</span> <span
  m="2095350">picture,</span> <span m="2096060">C</span> <span
  m="2096690">and</span> <span m="2096889">D</span> <span
  m="2097620">never</span> <span m="2098050">showed</span> <span
  m="2098340">up.</span></p><p><span m="2099160">In</span> <span
  m="2099330">this</span> <span m="2099580">picture,</span> <span
  m="2100040">C</span> <span m="2100310">and</span> <span m="2100460">D</span>
  <span m="2100780">were</span> <span m="2101440">--</span> <span
  m="2101830">you</span> <span m="2101890">know,</span> <span
  m="2102040">they</span> <span m="2102220">determined</span> <span
  m="2102740">that</span> <span m="2102920">line.</span></p><p><span
  m="2104730">But</span> <span m="2105010">the</span> <span
  m="2105160">two</span> <span m="2105680">are</span> <span
  m="2106060">exactly</span> <span m="2106530">the</span> <span
  m="2106630">same.</span></p><p><span m="2107020">C</span> <span
  m="2107480">and</span> <span m="2107680">D</span> <span m="2107950">is</span>
  <span m="2108150">the</span> <span m="2108340">combination</span> <span
  m="2109230">of</span> <span m="2109330">the</span> <span
  m="2109470">two</span> <span m="2109730">columns</span> <span
  m="2110540">that</span> <span m="2110910">gives</span> <span
  m="2111420">P.</span> <span m="2114070">OK.</span> <span m="2114770">So</span>
  <span m="2115390">that's</span> <span m="2116570">these</span> <span
  m="2118030">squares.</span></p><p><span m="2119890">And</span> <span
  m="2121190">the</span> <span m="2121870">special</span> <span
  m="2122670">but</span> <span m="2122940">most</span> <span
  m="2123250">important</span> <span m="2123680">example</span> <span
  m="2124200">of</span> <span m="2124320">fitting</span> <span
  m="2124660">by</span> <span m="2124840">straight</span> <span
  m="2125220">line,</span> <span m="2125530">so</span> <span
  m="2125720">the</span> <span m="2125850">homework</span> <span
  m="2126820">that's</span> <span m="2127630">coming</span> <span
  m="2128140">then</span> <span m="2128460">Wednesday</span> <span
  m="2129200">asks</span> <span m="2129670">you</span> <span
  m="2129780">to</span> <span m="2129890">fit</span> <span m="2130250">by</span>
  <span m="2130410">straight</span> <span m="2130770">lines.</span></p><p><span
  m="2132750">So</span> <span m="2133000">you're</span> <span
  m="2133170">just</span> <span m="2133450">going</span> <span
  m="2133610">to</span> <span m="2133690">end</span> <span m="2133990">up</span>
  <span m="2134200">solving</span> <span m="2138450">the</span> <span
  m="2138610">key</span> <span m="2138880">equation.</span></p><p><span
  m="2140440">You're</span> <span m="2140580">going</span> <span
  m="2140720">to</span> <span m="2140770">end</span> <span m="2140920">up</span>
  <span m="2141040">solving</span> <span m="2141500">that</span> <span
  m="2141990">key</span> <span m="2142220">equation</span> <span
  m="2142850">and</span> <span m="2143050">then</span> <span
  m="2143280">P</span> <span m="2143700">will</span> <span m="2143910">be</span>
  <span m="2144600">Ax</span> <span m="2145720">hat.</span></p><p><span
  m="2147100">That's</span> <span m="2147430">it.</span> <span
  m="2151640">OK.</span> <span m="2154470">Now,</span> <span
  m="2155550">can</span> <span m="2156350">I</span> <span m="2156490">put</span>
  <span m="2156800">in</span> <span m="2156970">a</span> <span
  m="2157060">little</span> <span m="2157780">piece</span> <span
  m="2158350">of</span> <span m="2158490">linear</span> <span
  m="2158840">algebra</span> <span m="2159650">that</span> <span
  m="2160080">I</span> <span m="2160280">mentioned</span> <span
  m="2161560">earlier,</span> <span m="2162380">mentioned</span> <span
  m="2162870">again,</span> <span m="2163350">but</span> <span
  m="2163560">I</span> <span m="2163640">never</span> <span
  m="2163990">did</span> <span m="2164300">write?</span></p><p><span
  m="2166510">And</span> <span m="2166730">I've</span> <span
  m="2167050">--</span> <span m="2167360">I</span> <span
  m="2167610">should</span> <span m="2168110">do</span> <span
  m="2168250">it</span> <span m="2168390">right.</span> <span
  m="2169840">It's</span> <span m="2170100">about</span> <span
  m="2170450">this</span> <span m="2170670">matrix</span> <span
  m="2171260">A</span> <span m="2171470">transpose</span> <span
  m="2172200">A.</span> <span m="2175580">There.</span></p><p><span
  m="2181840">I</span> <span m="2182530">was</span> <span
  m="2182950">sure</span> <span m="2183400">that</span> <span
  m="2183600">that</span> <span m="2183820">matrix</span> <span
  m="2184300">would</span> <span m="2184480">be</span> <span
  m="2184680">invertible.</span></p><p><span m="2186450">And</span> <span
  m="2186710">of</span> <span m="2186790">course</span> <span
  m="2187410">I</span> <span m="2187560">wanted</span> <span
  m="2187970">to</span> <span m="2188040">be</span> <span
  m="2188180">sure</span> <span m="2188460">it</span> <span
  m="2188500">was</span> <span m="2188670">invertible,</span> <span
  m="2189220">because</span> <span m="2189590">I</span> <span
  m="2189730">planned</span> <span m="2190430">to</span> <span
  m="2190740">solve</span> <span m="2191470">this</span> <span
  m="2191630">system</span> <span m="2192260">with</span> <span
  m="2192970">with</span> <span m="2193250">that</span> <span
  m="2193460">matrix.</span></p><p><span m="2196210">So</span> <span
  m="2196860">and</span> <span m="2197050">I</span> <span
  m="2197240">announced</span> <span m="2198130">like</span> <span
  m="2199160">before</span> <span m="2200210">--</span> <span
  m="2200620">as</span> <span m="2200880">the</span> <span
  m="2201010">chapter</span> <span m="2201380">was</span> <span
  m="2201550">just</span> <span m="2201760">starting,</span> <span
  m="2202660">I</span> <span m="2203100">announced</span> <span
  m="2204010">that</span> <span m="2204300">it</span> <span
  m="2204350">would</span> <span m="2204590">be</span> <span
  m="2204770">invertible.</span></p><p><span m="2205390">But</span> <span
  m="2205630">now</span> <span m="2205950">I</span> <span m="2206080">--</span>
  <span m="2206360">can</span> <span m="2206550">I</span> <span
  m="2206630">come</span> <span m="2206860">back</span> <span
  m="2207160">to</span> <span m="2207270">that?</span> <span
  m="2208800">OK.</span> <span m="2212940">So</span> <span
  m="2213150">what</span> <span m="2213370">I</span> <span
  m="2213470">said</span> <span m="2213870">was</span> <span
  m="2214750">--</span> <span m="2216050">that</span> <span
  m="2217190">if</span> <span m="2217720">A</span> <span m="2220370">has</span>
  <span m="2221640">independent</span> <span m="2223680">columns,</span> <span
  m="2227440">then</span> <span m="2230250">A</span> <span
  m="2230510">transpose</span> <span m="2231630">A</span> <span
  m="2232810">is</span> <span m="2234200">invertible.</span> <span
  m="2240100">And</span> <span m="2240490">I</span> <span
  m="2240640">would</span> <span m="2240830">like</span> <span
  m="2241140">to</span> <span m="2241560">--</span> <span
  m="2244080">first</span> <span m="2244730">to</span> <span
  m="2244880">repeat</span> <span m="2245460">that</span> <span
  m="2245770">important</span> <span m="2246320">fact,</span> <span
  m="2247250">that</span> <span m="2247750">that's</span> <span
  m="2248140">the</span> <span m="2248290">requirement</span> <span
  m="2248970">that</span> <span m="2249160">makes</span> <span
  m="2249460">everything</span> <span m="2249930">go</span> <span
  m="2250280">here.</span> <span m="2252320">It's</span> <span
  m="2252550">this</span> <span m="2252900">independent</span> <span
  m="2253620">columns</span> <span m="2254110">of</span> <span
  m="2254280">A</span> <span m="2254610">that</span> <span
  m="2254880">guarantees</span> <span m="2256380">everything</span> <span
  m="2257040">goes</span> <span m="2257350">through.</span></p><p><span
  m="2259050">And</span> <span m="2259640">think</span> <span
  m="2260150">why.</span> <span m="2262140">Why</span> <span
  m="2262790">does</span> <span m="2262990">this</span> <span
  m="2263200">matrix</span> <span m="2263750">A</span> <span
  m="2263980">transpose</span> <span m="2264700">A,</span> <span
  m="2264970">why</span> <span m="2265280">is</span> <span m="2265470">it</span>
  <span m="2265610">invertible</span> <span m="2266590">if</span> <span
  m="2267390">the</span> <span m="2267570">columns</span> <span
  m="2268030">of</span> <span m="2268190">A</span> <span m="2268350">are</span>
  <span m="2268500">independent?</span> <span m="2270410">OK,</span> <span
  m="2270870">there's</span> <span m="2274900">--</span> <span
  m="2277860">so</span> <span m="2278070">if</span> <span m="2278210">it</span>
  <span m="2278370">wasn't</span> <span m="2278750">invertible,</span> <span
  m="2280590">I'm</span> <span m="2281720">--</span> <span m="2281840">so</span>
  <span m="2281960">I</span> <span m="2282010">want</span> <span
  m="2282190">to</span> <span m="2282250">prove</span> <span
  m="2282550">that.</span></p><p><span m="2284750">If</span> <span
  m="2285180">it</span> <span m="2285300">isn't</span> <span
  m="2285580">invertible,</span> <span m="2286470">then</span> <span
  m="2286890">what?</span></p><p><span m="2288060">I</span> <span
  m="2288140">want</span> <span m="2288350">to</span> <span
  m="2288410">reach</span> <span m="2288980">--</span> <span
  m="2290610">I</span> <span m="2290730">want</span> <span m="2290910">to</span>
  <span m="2290980">follow</span> <span m="2291300">that</span> <span
  m="2291720">--</span> <span m="2291910">follow</span> <span
  m="2292200">that</span> <span m="2292410">line</span> <span
  m="2292670">--</span> <span m="2293010">of</span> <span
  m="2293220">thinking</span> <span m="2293630">and</span> <span
  m="2293750">see</span> <span m="2293950">what</span> <span
  m="2294140">I</span> <span m="2294210">come</span> <span
  m="2294490">to.</span></p><p><span m="2295400">Suppose,</span> <span
  m="2296260">so</span> <span m="2296480">proof.</span></p><p><span
  m="2297480">Suppose</span> <span m="2302160">A</span> <span
  m="2302570">transpose</span> <span m="2303740">Ax</span> <span
  m="2305210">is</span> <span m="2305820">zero.</span></p><p><span
  m="2306810">I'm</span> <span m="2306940">trying</span> <span
  m="2307180">to</span> <span m="2307270">prove</span> <span
  m="2307670">this.</span></p><p><span m="2308400">This</span> <span
  m="2308610">is</span> <span m="2308850">now</span> <span m="2309510">to</span>
  <span m="2310010">prove.</span></p><p><span m="2310440">I</span> <span
  m="2315490">don't</span> <span m="2316220">like</span> <span
  m="2317000">hammer</span> <span m="2317430">away</span> <span
  m="2317630">at</span> <span m="2317820">too</span> <span
  m="2317980">many</span> <span m="2318250">proofs</span> <span
  m="2318670">in</span> <span m="2318780">this</span> <span
  m="2319030">course.</span></p><p><span m="2319910">But</span> <span
  m="2320110">this</span> <span m="2320340">is</span> <span
  m="2320490">like</span> <span m="2320740">the</span> <span
  m="2320860">central</span> <span m="2321300">fact</span> <span
  m="2321690">and</span> <span m="2321810">it</span> <span
  m="2321960">brings</span> <span m="2322350">in</span> <span
  m="2322550">all</span> <span m="2322890">the</span> <span
  m="2323060">stuff</span> <span m="2323440">we</span> <span
  m="2323570">know.</span></p><p><span m="2324340">OK.</span> <span
  m="2324820">So</span> <span m="2325030">I'll</span> <span
  m="2325170">start</span> <span m="2325510">the</span> <span
  m="2325620">proof.</span></p><p><span m="2326700">Suppose</span> <span
  m="2327570">A</span> <span m="2327810">transpose</span> <span
  m="2328450">Ax</span> <span m="2328850">is</span> <span
  m="2329000">zero.</span> <span m="2331160">What</span> <span
  m="2331530">--</span> <span m="2332010">and</span> <span
  m="2332290">I'm</span> <span m="2332430">aiming</span> <span
  m="2332740">to</span> <span m="2332840">prove</span> <span
  m="2333310">A</span> <span m="2333510">transpose</span> <span
  m="2334140">A</span> <span m="2334280">is</span> <span
  m="2334430">invertible.</span></p><p><span m="2336110">So</span> <span
  m="2336320">what</span> <span m="2336730">do</span> <span m="2336960">I</span>
  <span m="2337100">want</span> <span m="2337360">to</span> <span
  m="2337410">prove</span> <span m="2337810">now?</span></p><p><span
  m="2340680">So</span> <span m="2340920">I'm</span> <span
  m="2341370">aiming</span> <span m="2341740">to</span> <span
  m="2341840">prove</span> <span m="2342190">this</span> <span
  m="2342480">fact.</span></p><p><span m="2343560">I'll</span> <span
  m="2343890">use</span> <span m="2344240">this,</span> <span
  m="2344540">and</span> <span m="2344740">I'm</span> <span
  m="2344880">aiming</span> <span m="2345170">to</span> <span
  m="2345270">prove</span> <span m="2345640">that</span> <span
  m="2345810">this</span> <span m="2346040">matrix</span> <span
  m="2346550">is</span> <span m="2346680">invertible,</span> <span
  m="2347400">OK,</span> <span m="2348070">so</span> <span m="2348800">if</span>
  <span m="2349090">I</span> <span m="2349190">suppose</span> <span
  m="2349860">A</span> <span m="2350010">transpose</span> <span
  m="2350610">Ax</span> <span m="2351010">is</span> <span
  m="2351180">zero,</span> <span m="2351740">then</span> <span
  m="2352130">what</span> <span m="2352450">conclusion</span> <span
  m="2353120">do</span> <span m="2353250">I</span> <span m="2353340">want</span>
  <span m="2353540">to</span> <span m="2353600">reach?</span> <span
  m="2356450">I'd</span> <span m="2356660">like</span> <span
  m="2356950">to</span> <span m="2357110">know</span> <span
  m="2357480">that</span> <span m="2358520">x</span> <span
  m="2359190">must</span> <span m="2359460">be</span> <span
  m="2359620">zero.</span></p><p><span m="2361200">I</span> <span
  m="2361300">want</span> <span m="2361680">to</span> <span
  m="2361770">show</span> <span m="2362430">x</span> <span
  m="2362720">must</span> <span m="2363000">be</span> <span
  m="2363130">zero.</span></p><p><span m="2363510">To</span> <span
  m="2363690">show</span> <span m="2364120">now</span> <span
  m="2364640">--</span> <span m="2364740">to</span> <span
  m="2364900">prove</span> <span m="2365800">x</span> <span
  m="2366880">must</span> <span m="2368350">be</span> <span
  m="2369820">the</span> <span m="2370060">zero</span> <span
  m="2370390">vector.</span></p><p><span m="2373100">Is</span> <span
  m="2373250">that</span> <span m="2373460">right,</span> <span
  m="2373750">that's</span> <span m="2373990">what</span> <span
  m="2374230">we</span> <span m="2374380">worked</span> <span
  m="2377280">in</span> <span m="2377470">the</span> <span
  m="2377570">previous</span> <span m="2378030">chapter</span> <span
  m="2378640">to</span> <span m="2378830">understand,</span> <span
  m="2380180">that</span> <span m="2381250">a</span> <span
  m="2381390">matrix</span> <span m="2382060">was</span> <span
  m="2382320">invertible</span> <span m="2383850">when</span> <span
  m="2385360">its</span> <span m="2385860">null</span> <span
  m="2386190">space</span> <span m="2386740">is</span> <span
  m="2389500">only</span> <span m="2389980">the</span> <span
  m="2390100">zero</span> <span m="2390420">vector.</span></p><p><span
  m="2391960">So</span> <span m="2392190">that's</span> <span
  m="2392470">what</span> <span m="2392640">I</span> <span
  m="2392710">want</span> <span m="2392900">to</span> <span
  m="2392970">show.</span></p><p><span m="2393340">How</span> <span
  m="2393640">come</span> <span m="2394240">if</span> <span m="2394680">A</span>
  <span m="2394910">transpose</span> <span m="2395510">Ax</span> <span
  m="2395930">is</span> <span m="2396080">zero,</span> <span
  m="2396730">how</span> <span m="2397250">come</span> <span
  m="2398100">x</span> <span m="2398710">must</span> <span m="2398980">be</span>
  <span m="2399130">zero?</span></p><p><span m="2400520">What's</span> <span
  m="2400850">going</span> <span m="2401010">to</span> <span
  m="2401070">be</span> <span m="2401250">the</span> <span
  m="2401340">reason?</span> <span m="2405270">Actually</span> <span
  m="2405600">I</span> <span m="2405690">have</span> <span
  m="2405820">two</span> <span m="2406000">ways</span> <span
  m="2406410">to</span> <span m="2406550">do</span> <span
  m="2406750">it.</span></p><p><span m="2410270">Let</span> <span
  m="2410390">me</span> <span m="2410480">show</span> <span
  m="2410700">you</span> <span m="2410830">one</span> <span
  m="2411060">way.</span></p><p><span m="2412210">This</span> <span
  m="2412440">is</span> <span m="2412790">--</span> <span
  m="2413540">here,</span> <span m="2414170">trick.</span></p><p><span
  m="2418210">Take</span> <span m="2418700">the</span> <span
  m="2418890">dot</span> <span m="2419250">product</span> <span
  m="2419690">of</span> <span m="2419810">both</span> <span
  m="2420130">sides</span> <span m="2420860">with</span> <span
  m="2421290">x.</span></p><p><span m="2422880">So</span> <span
  m="2423400">I'll</span> <span m="2423530">multiply</span> <span
  m="2424050">both</span> <span m="2424320">sides</span> <span
  m="2424740">by</span> <span m="2424980">x</span> <span
  m="2425280">transpose.</span></p><p><span m="2425980">x</span> <span
  m="2426270">transpose</span> <span m="2427000">A</span> <span
  m="2427210">transpose</span> <span m="2427940">Ax</span> <span
  m="2429170">equals</span> <span m="2429830">zero.</span></p><p><span
  m="2433190">I</span> <span m="2433340">shouldn't</span> <span
  m="2433620">have</span> <span m="2433740">written</span> <span
  m="2434000">trick.</span></p><p><span m="2435100">That</span> <span
  m="2435250">makes</span> <span m="2435510">it</span> <span
  m="2435680">sound</span> <span m="2435960">like</span> <span
  m="2436270">just</span> <span m="2436630">a</span> <span
  m="2436690">dumb</span> <span m="2436990">idea.</span></p><p><span
  m="2437640">Brilliant</span> <span m="2438130">idea,</span> <span
  m="2438610">I</span> <span m="2438670">should</span> <span
  m="2438880">have</span> <span m="2439000">put.</span></p><p><span
  m="2439630">OK.</span> <span m="2443040">I'll</span> <span
  m="2443210">just</span> <span m="2443450">put</span> <span
  m="2443900">idea.</span></p><p><span m="2447920">OK.</span> <span
  m="2449230">Now,</span> <span m="2451450">I</span> <span
  m="2452460">got</span> <span m="2452720">to</span> <span
  m="2452850">that</span> <span m="2453120">equation,</span> <span
  m="2454000">x</span> <span m="2454380">transpose</span> <span
  m="2455070">A</span> <span m="2455290">transpose</span> <span
  m="2456140">Ax=0,</span> <span m="2457670">and</span> <span
  m="2457820">I'm</span> <span m="2458020">hoping</span> <span
  m="2458510">you</span> <span m="2458730">can</span> <span
  m="2458930">see</span> <span m="2460400">the</span> <span
  m="2461670">right</span> <span m="2462070">way</span> <span
  m="2462720">to</span> <span m="2463300">--</span> <span m="2466290">to</span>
  <span m="2466450">look</span> <span m="2466680">at</span> <span
  m="2466780">that</span> <span m="2466990">equation.</span> <span
  m="2472760">What</span> <span m="2473090">can</span> <span
  m="2473300">I</span> <span m="2473450">conclude</span> <span
  m="2474020">from</span> <span m="2474180">that</span> <span
  m="2474400">equation,</span> <span m="2475030">that</span> <span
  m="2475600">if</span> <span m="2476050">I</span> <span m="2476160">have</span>
  <span m="2476360">x</span> <span m="2476660">transpose</span> <span
  m="2477300">A</span> <span m="2477380">--</span> <span
  m="2477470">well,</span> <span m="2477840">what</span> <span
  m="2478160">is</span> <span m="2478510">x</span> <span
  m="2478810">transpose</span> <span m="2479510">A</span> <span
  m="2479700">transpose</span> <span m="2480450">Ax?</span></p><p><span
  m="2481070">Does</span> <span m="2481220">that</span> <span
  m="2481450">--</span> <span m="2484010">what</span> <span
  m="2484510">it's</span> <span m="2484800">giving</span> <span
  m="2485140">you?</span> <span m="2489620">It's</span> <span
  m="2489860">again</span> <span m="2490330">going</span> <span
  m="2490480">to</span> <span m="2490530">be</span> <span
  m="2490760">putting</span> <span m="2491170">in</span> <span
  m="2491350">parentheses,</span> <span m="2492170">I'm</span> <span
  m="2492380">looking</span> <span m="2492740">at</span> <span
  m="2492880">Ax</span> <span m="2493630">and</span> <span
  m="2493780">what</span> <span m="2493970">I</span> <span
  m="2494230">seeing</span> <span m="2494590">here?</span></p><p><span
  m="2497170">Its</span> <span m="2497390">transpose.</span></p><p><span
  m="2499560">So</span> <span m="2499810">I'm</span> <span
  m="2500040">seeing</span> <span m="2500430">here</span> <span
  m="2500770">this</span> <span m="2501070">is</span> <span
  m="2502220">Ax</span> <span m="2503280">transpose</span> <span
  m="2504880">Ax.</span></p><p><span m="2507580">Equaling</span> <span
  m="2508030">zero.</span></p><p><span m="2511640">Now</span> <span
  m="2511930">if</span> <span m="2512090">Ax</span> <span
  m="2512670">transpose</span> <span m="2513380">Ax,</span> <span
  m="2513980">so</span> <span m="2514120">like</span> <span
  m="2514540">let's</span> <span m="2514930">call</span> <span
  m="2515210">it</span> <span m="2515530">y</span> <span m="2516300">or</span>
  <span m="2516450">something,</span> <span m="2517040">if</span> <span
  m="2517380">y</span> <span m="2517750">transpose</span> <span
  m="2518420">y</span> <span m="2518810">is</span> <span
  m="2518990">zero,</span> <span m="2519610">what</span> <span
  m="2520040">does</span> <span m="2520280">that</span> <span
  m="2520950">tell</span> <span m="2521230">me?</span></p><p><span
  m="2526780">That</span> <span m="2526970">the</span> <span
  m="2527070">vector</span> <span m="2527490">has</span> <span
  m="2527740">to</span> <span m="2527850">be</span> <span
  m="2527990">zero,</span> <span m="2528290">right?</span></p><p><span
  m="2528950">This</span> <span m="2529240">is</span> <span
  m="2529410">the</span> <span m="2529520">length</span> <span
  m="2529850">squared,</span> <span m="2530380">that's</span> <span
  m="2530650">the</span> <span m="2530770">length</span> <span
  m="2531140">of</span> <span m="2531260">the</span> <span
  m="2531370">vector</span> <span m="2531790">Ax</span> <span
  m="2532350">squared,</span> <span m="2532970">that's</span> <span
  m="2533550">Ax</span> <span m="2534350">times</span> <span
  m="2534700">Ax.</span></p><p><span m="2535730">So</span> <span
  m="2535960">I</span> <span m="2536090">conclude</span> <span
  m="2536660">that</span> <span m="2536810">Ax</span> <span
  m="2537280">has</span> <span m="2537550">to</span> <span m="2537650">be</span>
  <span m="2537780">zero.</span></p><p><span m="2543670">Well,</span> <span
  m="2543920">I'm</span> <span m="2544050">getting</span> <span
  m="2544380">somewhere.</span></p><p><span m="2549900">Now</span> <span
  m="2550290">that</span> <span m="2550490">I</span> <span
  m="2550610">know</span> <span m="2551010">Ax</span> <span
  m="2551570">is</span> <span m="2551720">zero,</span> <span
  m="2553190">now</span> <span m="2554420">I'm</span> <span
  m="2554610">going</span> <span m="2554810">to</span> <span
  m="2554870">use</span> <span m="2555370">my</span> <span
  m="2555650">little</span> <span m="2556180">hypothesis.</span></p><p><span
  m="2557370">Somewhere</span> <span m="2558700">every</span> <span
  m="2559360">mathematician</span> <span m="2560260">has</span> <span
  m="2560620">to</span> <span m="2560780">use</span> <span
  m="2561180">the</span> <span m="2561280">hypothesis.</span></p><p><span
  m="2563290">Right?</span></p><p><span m="2565050">Now,</span> <span
  m="2565450">if</span> <span m="2565630">A</span> <span m="2565950">has</span>
  <span m="2566210">independent</span> <span m="2566880">columns</span> <span
  m="2568150">and</span> <span m="2569230">we've</span> <span
  m="2569710">--</span> <span m="2569740">we're</span> <span
  m="2569980">at</span> <span m="2570070">the</span> <span
  m="2570180">point</span> <span m="2570490">where</span> <span
  m="2570760">Ax</span> <span m="2571250">is</span> <span
  m="2571390">zero,</span> <span m="2572780">what</span> <span
  m="2573820">does</span> <span m="2573930">that</span> <span
  m="2574160">tell</span> <span m="2574400">us?</span></p><p><span
  m="2575580">I</span> <span m="2575820">could</span> <span
  m="2576080">--</span> <span m="2576380">I</span> <span m="2576400">mean</span>
  <span m="2576610">that</span> <span m="2576920">could</span> <span
  m="2577110">be</span> <span m="2577300">like</span> <span m="2577930">a</span>
  <span m="2578300">fill-in</span> <span m="2579000">question</span> <span
  m="2579610">on</span> <span m="2579760">the</span> <span
  m="2579870">final</span> <span m="2580290">exam.</span></p><p><span
  m="2581090">If</span> <span m="2581360">A</span> <span m="2581620">has</span>
  <span m="2581870">independent</span> <span m="2582530">columns</span> <span
  m="2583130">and</span> <span m="2583650">if</span> <span m="2584090">Ax</span>
  <span m="2584840">equals</span> <span m="2585270">zero</span> <span
  m="2585730">then</span> <span m="2586530">what?</span></p><p><span
  m="2590390">Please</span> <span m="2590750">say</span> <span
  m="2591040">it.</span> <span m="2591300">x</span> <span m="2592210">is</span>
  <span m="2593130">zero,</span> <span m="2593430">right.</span></p><p><span
  m="2595850">Which</span> <span m="2596090">was</span> <span
  m="2596340">just</span> <span m="2596640">what</span> <span
  m="2596800">we</span> <span m="2596910">wanted</span> <span
  m="2597250">to</span> <span m="2597350">prove.</span></p><p><span
  m="2598370">That</span> <span m="2598640">--</span> <span
  m="2598660">do</span> <span m="2599020">you</span> <span
  m="2599160">see</span> <span m="2599420">why</span> <span
  m="2599610">that</span> <span m="2599850">is?</span></p><p><span
  m="2600790">If</span> <span m="2601010">Ax</span> <span m="2601500">eq-</span>
  <span m="2601690">equals</span> <span m="2602060">zero,</span> <span
  m="2602350">now</span> <span m="2602680">we're</span> <span
  m="2602830">using</span> <span m="2603590">--</span> <span
  m="2604150">here</span> <span m="2604500">we</span> <span
  m="2604650">used</span> <span m="2605130">this</span> <span
  m="2605370">was</span> <span m="2605650">the</span> <span
  m="2605790">square</span> <span m="2606580">of</span> <span
  m="2606680">something,</span> <span m="2607190">so</span> <span
  m="2607400">I'll</span> <span m="2607700">put</span> <span
  m="2608100">in</span> <span m="2608760">little</span> <span
  m="2609350">parentheses</span> <span m="2610810">the</span> <span
  m="2611570">observation</span> <span m="2612520">we</span> <span
  m="2612650">made,</span> <span m="2613040">that</span> <span
  m="2613230">was</span> <span m="2613390">a</span> <span
  m="2613490">square</span> <span m="2614460">which</span> <span
  m="2615050">is</span> <span m="2615200">zero,</span> <span
  m="2615720">so</span> <span m="2615970">the</span> <span
  m="2616110">thing</span> <span m="2616370">has</span> <span
  m="2616640">to</span> <span m="2616760">be</span> <span
  m="2616900">zero.</span></p><p><span m="2617610">Now</span> <span
  m="2618060">we're</span> <span m="2618240">using</span> <span
  m="2618900">the</span> <span m="2619530">hypothesis</span> <span
  m="2621080">of</span> <span m="2621260">independent</span> <span
  m="2622090">columns</span> <span m="2623130">at</span> <span
  m="2623710">the</span> <span m="2623870">A</span> <span m="2624660">has</span>
  <span m="2625910">independent</span> <span
  m="2626900">columns.</span></p><p><span m="2628600">If</span> <span
  m="2628830">A</span> <span m="2629080">has</span> <span
  m="2629300">independent</span> <span m="2629910">columns,</span> <span
  m="2630870">this</span> <span m="2631270">is</span> <span
  m="2631450">telling</span> <span m="2631850">me</span> <span
  m="2632060">x</span> <span m="2632380">is</span> <span m="2632520">in</span>
  <span m="2632670">its</span> <span m="2632910">null</span> <span
  m="2633150">space,</span> <span m="2634200">and</span> <span
  m="2635300">the</span> <span m="2635420">only</span> <span
  m="2635810">thing</span> <span m="2636040">in</span> <span
  m="2636160">the</span> <span m="2636270">null</span> <span
  m="2636500">space</span> <span m="2636970">of</span> <span
  m="2637100">such</span> <span m="2637400">a</span> <span
  m="2637490">matrix</span> <span m="2638320">is</span> <span
  m="2638720">the</span> <span m="2638800">zero</span> <span
  m="2639130">vector.</span></p><p><span m="2640510">OK.</span> <span
  m="2641320">So</span> <span m="2641960">that's</span> <span
  m="2642620">the</span> <span m="2643510">argument</span> <span
  m="2644080">and</span> <span m="2644200">you</span> <span
  m="2644320">see</span> <span m="2644620">how</span> <span
  m="2644900">it</span> <span m="2645040">really</span> <span
  m="2645650">used</span> <span m="2646620">our</span> <span
  m="2647560">understanding</span> <span m="2648630">of</span> <span
  m="2650140">the</span> <span m="2650820">--</span> <span m="2651270">of</span>
  <span m="2651440">the</span> <span m="2651560">null</span> <span
  m="2651740">space.</span></p><p><span m="2653420">OK.</span> <span
  m="2653990">That's</span> <span m="2655030">great.</span></p><p><span
  m="2655650">All</span> <span m="2655910">right.</span></p><p><span
  m="2656420">So</span> <span m="2657050">where</span> <span
  m="2657550">are</span> <span m="2657680">we</span> <span
  m="2657880">then?</span> <span m="2660750">That</span> <span
  m="2661110">board</span> <span m="2661650">is</span> <span
  m="2662010">like</span> <span m="2662380">the</span> <span
  m="2662500">backup</span> <span m="2663220">theory</span> <span
  m="2664430">that</span> <span m="2665380">tells</span> <span
  m="2665810">me</span> <span m="2666510">that</span> <span
  m="2666950">this</span> <span m="2667170">matrix</span> <span
  m="2668250">had</span> <span m="2668670">to</span> <span m="2668730">be</span>
  <span m="2668920">invertible</span> <span m="2669600">because</span> <span
  m="2670530">these</span> <span m="2670910">columns</span> <span
  m="2671550">were</span> <span m="2672280">independent.</span> <span
  m="2675530">OK.</span> <span m="2678360">there's</span> <span
  m="2679080">one</span> <span m="2679840">case</span> <span
  m="2683660">of</span> <span m="2683990">independent</span> <span
  m="2684820">--</span> <span m="2684940">there's</span> <span
  m="2685270">one</span> <span m="2685590">case</span> <span
  m="2686070">where</span> <span m="2686630">the</span> <span
  m="2686790">geometry</span> <span m="2687540">gets</span> <span
  m="2688000">even</span> <span m="2688350">better.</span></p><p><span
  m="2690540">When</span> <span m="2690900">the</span> <span
  m="2691070">--</span> <span m="2692660">there's</span> <span
  m="2692870">one</span> <span m="2693080">case</span> <span
  m="2693390">when</span> <span m="2693640">columns</span> <span
  m="2694210">are</span> <span m="2694340">sure</span> <span
  m="2694770">to</span> <span m="2694860">be</span> <span
  m="2695030">independent.</span></p><p><span m="2696610">And</span> <span
  m="2696900">let</span> <span m="2697030">me</span> <span
  m="2697190">put</span> <span m="2697480">that</span> <span
  m="2697830">--</span> <span m="2697870">let</span> <span m="2698030">me</span>
  <span m="2698160">write</span> <span m="2698460">that</span> <span
  m="2698680">down</span> <span m="2699320">and</span> <span
  m="2699670">that'll</span> <span m="2699890">be</span> <span
  m="2700060">the</span> <span m="2700180">subject</span> <span
  m="2700590">for</span> <span m="2700730">next</span> <span
  m="2701050">time.</span></p><p><span m="2701780">Columns</span> <span
  m="2702940">are</span> <span m="2704280">sure</span> <span
  m="2705260">--</span> <span m="2705290">are</span> <span
  m="2705460">certainly</span> <span m="2706220">independent,</span> <span
  m="2707040">definitely</span> <span m="2707710">independent,</span> <span
  m="2715400">if</span> <span m="2720570">they're</span> <span
  m="2720780">perpendicular.</span></p><p><span m="2723290">Oh,</span> <span
  m="2723420">I've</span> <span m="2723560">got</span> <span
  m="2723720">to</span> <span m="2723790">rule</span> <span
  m="2724090">out</span> <span m="2724260">the</span> <span
  m="2724340">zero</span> <span m="2724760">column,</span> <span
  m="2725190">let</span> <span m="2725390">me</span> <span
  m="2725510">give</span> <span m="2725700">them</span> <span
  m="2725880">all</span> <span m="2726090">length</span> <span
  m="2726390">one,</span> <span m="2726720">so</span> <span
  m="2727490">they</span> <span m="2727580">can't</span> <span
  m="2727850">be</span> <span m="2728100">zero</span> <span
  m="2728660">if</span> <span m="2733020">they</span> <span
  m="2733280">are</span> <span m="2734230">perpendicular</span> <span
  m="2736540">unit</span> <span m="2737550">vectors.</span></p><p><span
  m="2742870">Like</span> <span m="2744070">the</span> <span
  m="2744800">vectors</span> <span m="2746430">one,</span> <span
  m="2747540">zero,</span> <span m="2747900">zero,</span> <span
  m="2749570">zero,</span> <span m="2750760">one,</span> <span
  m="2751060">zero</span> <span m="2752050">and</span> <span
  m="2753030">zero,</span> <span m="2753370">zero,</span> <span
  m="2753660">one.</span></p><p><span m="2755480">Those</span> <span
  m="2755800">vectors</span> <span m="2756670">are</span> <span
  m="2756990">unit</span> <span m="2757330">vectors,</span> <span
  m="2758510">they're</span> <span m="2759210">perpendicular,</span> <span
  m="2760660">and</span> <span m="2761830">they</span> <span
  m="2762170">certainly</span> <span m="2762840">are</span> <span
  m="2763100">independent.</span></p><p><span m="2765820">And</span> <span
  m="2766110">what's</span> <span m="2766400">more,</span> <span
  m="2767240">suppose</span> <span m="2767840">they're</span> <span
  m="2768530">--</span> <span m="2768830">oh,</span> <span
  m="2769460">that's</span> <span m="2769740">so</span> <span
  m="2770120">nice,</span> <span m="2770610">I</span> <span
  m="2770710">mean</span> <span m="2770900">what</span> <span
  m="2771100">is</span> <span m="2771260">A</span> <span
  m="2771460">transpose</span> <span m="2772160">A</span> <span
  m="2772420">for</span> <span m="2772600">that</span> <span
  m="2772910">matrix?</span></p><p><span m="2774080">For</span> <span
  m="2774210">the</span> <span m="2774320">matrix</span> <span
  m="2774830">with</span> <span m="2775010">these</span> <span
  m="2775290">three</span> <span m="2775520">columns?</span></p><p><span
  m="2776470">It's</span> <span m="2776760">the</span> <span
  m="2776920">identity.</span></p><p><span m="2778280">So</span> <span
  m="2779230">here's</span> <span m="2779870">the</span> <span
  m="2780010">key</span> <span m="2780450">to</span> <span
  m="2780610">the</span> <span m="2781380">lecture</span> <span
  m="2781760">that's</span> <span m="2782010">coming.</span></p><p><span
  m="2783090">If</span> <span m="2783430">we're</span> <span
  m="2783680">dealing</span> <span m="2784180">with</span> <span
  m="2784510">perpendicular</span> <span m="2785360">unit</span> <span
  m="2785750">vectors</span> <span m="2787210">and</span> <span
  m="2788290">the</span> <span m="2788380">word</span> <span
  m="2788730">for</span> <span m="2788880">that</span> <span
  m="2789210">will</span> <span m="2789490">be</span> <span
  m="2789870">--</span> <span m="2790160">see</span> <span m="2791140">I</span>
  <span m="2791470">could</span> <span m="2791650">have</span> <span
  m="2791770">said</span> <span m="2792000">orthogonal,</span> <span
  m="2792650">but</span> <span m="2792820">I</span> <span
  m="2792920">said</span> <span m="2793250">perpendicular</span> <span
  m="2794240">--</span> <span m="2795650">and</span> <span
  m="2796030">this</span> <span m="2796470">unit</span> <span
  m="2796930">vectors</span> <span m="2798030">gets</span> <span
  m="2798620">put</span> <span m="2798920">in</span> <span m="2799240">as</span>
  <span m="2799480">the</span> <span m="2799600">word</span> <span
  m="2799960">normal.</span></p><p><span m="2801370">Orthonormal</span> <span
  m="2802210">vectors.</span></p><p><span m="2806070">Those</span> <span
  m="2806500">are</span> <span m="2806640">the</span> <span
  m="2806780">best</span> <span m="2807340">columns</span> <span
  m="2807900">you</span> <span m="2808040">could</span> <span
  m="2808220">ask</span> <span m="2808500">for.</span></p><p><span
  m="2809820">Matrices</span> <span m="2810840">with</span> <span
  m="2811570">--</span> <span m="2812290">whose</span> <span
  m="2812560">columns</span> <span m="2813360">are</span> <span
  m="2813890">orthonormal,</span> <span m="2814730">they're</span> <span
  m="2815010">perpendicular</span> <span m="2815880">to</span> <span
  m="2816040">each</span> <span m="2816290">other,</span> <span
  m="2816950">and</span> <span m="2817500">they're</span> <span
  m="2817690">unit</span> <span m="2818070">vectors,</span> <span
  m="2819050">well,</span> <span m="2819710">they</span> <span
  m="2819910">don't</span> <span m="2820140">have</span> <span
  m="2820360">to</span> <span m="2820470">be</span> <span
  m="2820650">those</span> <span m="2821010">three,</span> <span
  m="2822470">let</span> <span m="2823150">me</span> <span m="2823290">do</span>
  <span m="2823510">a</span> <span m="2823600">final</span> <span
  m="2824080">example</span> <span m="2824680">over</span> <span
  m="2824910">here,</span> <span m="2826280">how</span> <span
  m="2827140">about</span> <span m="2827440">one</span> <span
  m="2827720">at</span> <span m="2827810">an</span> <span
  m="2827980">angle</span> <span m="2828320">like</span> <span
  m="2828570">that</span> <span m="2829060">and</span> <span
  m="2829340">one</span> <span m="2829560">at</span> <span
  m="2829690">ninety</span> <span m="2830020">degrees,</span> <span
  m="2831110">that</span> <span m="2831660">vector</span> <span
  m="2832110">would</span> <span m="2832400">be</span> <span
  m="2832990">cos</span> <span m="2833460">theta,</span> <span
  m="2834140">sine</span> <span m="2834620">theta,</span> <span
  m="2835820">a</span> <span m="2836570">unit</span> <span
  m="2836960">vector,</span> <span m="2838050">and</span> <span
  m="2838470">this</span> <span m="2838740">vector</span> <span
  m="2839140">would</span> <span m="2839360">be</span> <span
  m="2840110">minus</span> <span m="2840810">sine</span> <span
  m="2841170">theta</span> <span m="2842070">cos</span> <span
  m="2842660">theta.</span></p><p><span m="2844150">That</span> <span
  m="2844730">is</span> <span m="2844950">our</span> <span
  m="2845340">absolute</span> <span m="2846100">favorite</span> <span
  m="2846730">pair</span> <span m="2847570">of</span> <span
  m="2848310">orthonormal</span> <span m="2849560">vectors.</span></p><p><span
  m="2850850">They're</span> <span m="2851040">both</span> <span
  m="2851450">unit</span> <span m="2851840">vectors</span> <span
  m="2852450">and</span> <span m="2852670">they're</span> <span
  m="2852830">perpendicular.</span></p><p><span m="2853630">That</span> <span
  m="2853860">angle</span> <span m="2854300">is</span> <span
  m="2854660">ninety</span> <span m="2855050">degrees.</span></p><p><span
  m="2856520">So</span> <span m="2857030">like</span> <span
  m="2857380">our</span> <span m="2857510">job</span> <span
  m="2857840">next</span> <span m="2858180">time</span> <span
  m="2858570">is</span> <span m="2859930">first</span> <span
  m="2861140">to</span> <span m="2861240">see</span> <span
  m="2861500">why</span> <span m="2861920">orthonormal</span> <span
  m="2862590">vectors</span> <span m="2863020">are</span> <span
  m="2863130">great,</span> <span m="2863640">and</span> <span
  m="2863850">then</span> <span m="2864070">to</span> <span
  m="2864220">make</span> <span m="2864590">vectors</span> <span
  m="2865130">orthonormal</span> <span m="2866230">by</span> <span
  m="2866810">picking</span> <span m="2867240">the</span> <span
  m="2867340">right</span> <span m="2867620">basis.</span> <span
  m="2869530">OK,</span> <span m="2869750">see</span> <span
  m="2870130">you.</span></p><p><span m="2877070">Thanks.</span></p>
embedded_media:
  - uid: 42c245e07622a63d7860017d87693d23
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: osh80YCg_GM
  - uid: 532649f947c39dccb852950a9b756129
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/osh80YCg_GM/default.jpg'
  - uid: e2e5031f41c7c966a30cb06f87586ff7
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id488155309'
  - uid: 6ca83f604799294ec202821c1c404ce2
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.06S05_MP4/16.mp4'
  - uid: 41363d67fc38a1e1e249604178712830
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: osh80YCg_GM
  - uid: 1d438585adf611a600a9364f4c332738
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: osh80YCg_GM.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/lecture-16-projection-matrices-and-least-squares/osh80YCg_GM.srt
  - uid: ea9714a92a64d7937b3cccacb931ca63
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: osh80YCg_GM.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/lecture-16-projection-matrices-and-least-squares/osh80YCg_GM.pdf
  - uid: 6066e0263c103ea4aef9739cbb42427a
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 930333cb853548117ccc3151a2319678
    parent_uid: fda8b54acc7c4cc7d39e5eac76aec9eb
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---