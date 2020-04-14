---
title: 'Lecture 3: Divide & Conquer: FFT'
uid: ca589b3282601ed3431f87f715da272a
parent_uid: 59a7a862feb85c8b52509910c07728e5
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-3-divide-conquer-fft
short_url: lecture-3-divide-conquer-fft
inline_embed_id: '69610843lecture3:divide&conquer:fft17393659'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine continues
  with divide and conquer algorithms, introducing the fast fourier
  transform.</p><p><strong>Instructors:</strong> Erik Demaine</p>
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
  m="9520">free.</span> <span m="10730">To</span> <span m="10830">make</span>
  <span m="10940">a</span> <span m="10980">donation</span> <span
  m="11670">or</span> <span m="11940">view</span> <span
  m="12380">additional</span> <span m="12800">materials</span> <span
  m="13330">from</span> <span m="13490">hundreds</span> <span
  m="13920">of</span> <span m="14030">MIT</span> <span m="14460">courses,</span>
  <span m="15560">visit</span> <span m="15780">MIT</span> <span
  m="16210">OpenCourseWare</span> <span m="17260">at</span> <span
  m="17420">ocw.mit.edu.</span></p><p><span m="21240">ERIK DEMAINE: All
  right,</span> <span m="21630">let's</span> <span m="21860">get</span> <span
  m="22020">started.</span> <span m="24360">I</span> <span m="24660">am</span>
  <span m="24810">Erik</span> <span m="25050">Demaine.</span> <span
  m="25510">You</span> <span m="25750">can call</span> <span m="25960">me</span>
  <span m="26100">Erik.</span> <span m="27130">Today</span> <span
  m="27610">we're</span> <span m="27770">going</span> <span m="27890">to</span>
  <span m="27990">do</span> <span m="28230">another</span> <span
  m="28720">divide</span> <span m="29020">and</span> <span
  m="29110">conquer</span> <span m="29460">algorithm</span> <span
  m="29900">called</span> <span m="30110">the</span> <span m="30190">fast</span>
  <span m="30600">Fourier</span> <span m="30980">transform.</span> <span
  m="31970">It's</span> <span m="32150">probably</span> <span
  m="32680">the</span> <span m="32860">most</span> <span m="34180">taught</span>
  <span m="34710">algorithm</span> <span m="35300">at</span> <span
  m="35390">MIT.</span> <span m="35870">It's</span> <span m="35990">used</span>
  <span m="36250">in</span> <span m="36350">all</span> <span
  m="36600">sorts</span> <span m="36890">of</span> <span
  m="37000">contexts,</span> <span m="39300">especially</span> <span
  m="39910">digital</span> <span m="40260">signal</span> <span
  m="40570">processing</span> <span m="41440">like</span> <span
  m="41740">MP3</span> <span m="42720">compression,</span> <span
  m="43230">and</span> <span m="43480">all</span> <span m="43620">sorts</span>
  <span m="43850">of</span> <span m="43940">things.</span> <span
  m="45090">But</span> <span m="45210">we're</span> <span m="45350">going</span>
  <span m="45460">to</span> <span m="45550">think</span> <span
  m="45750">about</span> <span m="46010">it</span> <span m="46140">today</span>
  <span m="46670">in</span> <span m="46900">the</span> <span
  m="46990">context</span> <span m="47860">of</span> <span
  m="47910">divide</span> <span m="48150">and</span> <span
  m="48230">conquer</span> <span m="49120">and</span> <span
  m="49480">polynomials.</span> <span m="51560">So</span> <span
  m="52480">let</span> <span m="52650">me</span> <span m="52800">remind</span>
  <span m="53250">you--</span> <span m="53870">I</span> <span
  m="54060">mean,</span> <span m="54150">this</span> <span
  m="54930">class</span> <span m="55270">is</span> <span m="55380">all</span>
  <span m="55540">about</span> <span m="55800">polynomial</span> <span
  m="56330">time,</span> <span m="56860">but</span> <span
  m="57740">usually</span> <span m="58240">with</span> <span
  m="58410">polynomial</span> <span m="58900">time</span> <span
  m="59160">we</span> <span m="59290">only</span> <span m="59460">care</span>
  <span m="59650">about</span> <span m="59840">the</span> <span
  m="59930">lead</span> <span m="60170">term.</span></p><p><span
  m="61250">Today--</span> <span m="62520">and</span> <span
  m="62710">today</span> <span m="62990">only,</span> <span
  m="63400">pretty</span> <span m="63640">much--</span> <span
  m="64250">we're</span> <span m="64440">going</span> <span m="64540">to</span>
  <span m="64599">be</span> <span m="64739">thinking</span> <span
  m="65069">about</span> <span m="65489">all</span> <span m="65890">the</span>
  <span m="66040">terms</span> <span m="66980">in</span> <span
  m="67170">a</span> <span m="68150">polynomial.</span> <span
  m="69670">So</span> <span m="70030">I'll</span> <span m="70730">talk</span>
  <span m="70910">about</span> <span m="71110">polynomials</span> <span
  m="71660">mostly</span> <span m="72070">a and</span> <span m="72380">b.</span>
  <span m="73080">You have</span> <span m="73460">a</span> <span
  m="73520">constant</span> <span m="73960">term,</span> <span
  m="75020">and</span> <span m="75250">then</span> <span m="75480">a
  linear</span> <span m="75860">term,</span> <span m="77270">and</span> <span
  m="77550">a</span> <span m="77620">quadratic</span> <span
  m="78110">term,</span> <span m="79200">and</span> <span m="79620">so</span>
  <span m="79890">on</span> <span m="81290">up</span> <span
  m="81580">to--</span> <span m="82040">I</span> <span m="82170">will</span>
  <span m="82300">say</span> <span m="82490">that</span> <span m="82630">there
  are</span> <span m="82820">n</span> <span m="83220">terms--</span> <span
  m="83820">which</span> <span m="83920">means</span> <span m="84160">the</span>
  <span m="84250">last</span> <span m="84540">one</span> <span
  m="84710">is</span> <span m="84870">a</span> <span m="85130">n</span> <span
  m="85290">minus</span> <span m="85640">1.</span> <span
  m="88150">Normally</span> <span m="88610">the</span> <span
  m="88830">degree</span> <span m="89180">the</span> <span
  m="89280">polynomial</span> <span m="89960">here</span> <span
  m="90320">is</span> <span m="90640">n</span> <span m="90790">minus</span>
  <span m="91100">1.</span> <span m="92320">I</span> <span m="92550">wish</span>
  <span m="92860">the</span> <span m="92990">degree</span> <span
  m="93620">was</span> <span m="93870">defined</span> <span m="94300">to</span>
  <span m="94360">be</span> <span m="94510">n</span> <span
  m="94710">here,</span> <span m="94930">but</span> <span
  m="95070">whatever.</span> <span m="95880">That's--</span> <span m="96360">I'm
  not--</span> <span m="96630">I</span> <span m="96690">can't</span> <span
  m="96960">change</span> <span m="97290">the</span> <span
  m="97360">definitions</span> <span m="97860">in</span> <span
  m="97960">algebra.</span> <span m="99110">So</span> <span
  m="100260">this</span> <span m="100530">is</span> <span m="100680">the</span>
  <span m="100970">traditional</span> <span m="101380">algebraic</span> <span
  m="101900">way</span> <span m="102060">of</span> <span
  m="102200">thinking</span> <span m="102560">about</span> <span
  m="102890">a</span> <span m="102950">polynomial.</span> <span
  m="104680">Of</span> <span m="104830">course,</span> <span
  m="105170">you</span> <span m="105210">can</span> <span
  m="105390">write</span> <span m="105620">it</span> <span
  m="105730">with</span> <span m="105870">summation</span> <span
  m="106370">notation.</span> <span m="108640">akx</span> <span
  m="109540">to</span> <span m="109680">the</span> <span m="109790">k,</span>
  <span m="110825">k</span> <span m="111300">equals</span> <span
  m="111630">0</span> <span m="112060">to</span> <span m="112280">n</span> <span
  m="112470">minus</span> <span m="112760">1.</span> <span
  m="112990">We'll</span> <span m="113130">jump</span> <span
  m="113370">back</span> <span m="113590">and</span> <span
  m="113700">forth</span> <span m="113900">between</span> <span
  m="114240">them.</span></p><p><span m="114790">I'm</span> <span
  m="114960">also</span> <span m="115200">going</span> <span
  m="115450">to</span> <span m="115560">introduce</span> <span
  m="116130">a</span> <span m="116330">vector</span> <span
  m="116710">notation</span> <span m="117380">for</span> <span
  m="117630">polynomials</span> <span m="119350">because--</span> <span
  m="123040">so</span> <span m="123180">the</span> <span m="123310">ai's</span>
  <span m="123710">are</span> <span m="123800">real</span> <span
  m="124020">numbers,</span> <span m="124930">typically.</span> <span
  m="126770">We</span> <span m="126890">might</span> <span
  m="127090">change</span> <span m="127360">that</span> <span
  m="127550">at</span> <span m="127650">some</span> <span
  m="127840">point,</span> <span m="129620">but</span> <span
  m="129910">usually--</span> <span m="130449">a</span> <span
  m="130770">common</span> <span m="131220">reason--</span> <span
  m="131680">maybe</span> <span m="131910">you</span> <span
  m="131980">don't</span> <span m="132140">care</span> <span
  m="132310">much</span> <span m="132520">about</span> <span
  m="132690">polynomials,</span> <span m="133320">but</span> <span
  m="133480">you</span> <span m="133590">definitely</span> <span
  m="133930">care</span> <span m="134110">about</span> <span
  m="134330">vectors.</span> <span m="135260">Any</span> <span
  m="135450">kind</span> <span m="135660">of</span> <span
  m="135760">one-dimensional</span> <span m="136360">data</span> <span
  m="136590">set</span> <span m="137180">is</span> <span m="137500">a</span>
  <span m="137580">string</span> <span m="137990">of</span> <span
  m="138620">real</span> <span m="138840">numbers,</span> <span
  m="139570">like</span> <span m="140490">if</span> <span
  m="140630">you're</span> <span m="140780">sampling</span> <span
  m="141410">audio--</span> <span m="141850">like</span> <span
  m="142050">right</span> <span m="142220">now</span> <span
  m="142400">we're</span> <span m="142530">recording</span> <span
  m="143420">this</span> <span m="144140">microphone--</span> <span
  m="145130">you're</span> <span m="145240">seeing</span> <span
  m="145460">lots</span> <span m="145800">of</span> <span
  m="145940">different--</span> <span m="148050">the</span> <span
  m="148250">movement</span> <span m="148850">of</span> <span
  m="149190">the</span> <span m="149340">membrane</span> <span
  m="149800">in</span> <span m="149910">this</span> <span
  m="150050">microphone</span> <span m="150940">over</span> <span
  m="151180">time.</span> <span m="152120">You're</span> <span
  m="152290">sampling--</span> <span m="153420">whatever--</span> <span
  m="154300">40,000</span> <span m="155350">times</span> <span
  m="155580">the</span> <span m="155640">second.</span> <span
  m="156340">Each</span> <span m="156500">one</span> <span
  m="156670">you're</span> <span m="156770">measuring</span> <span m="157080">a
  real</span> <span m="157250">number</span> <span m="157500">about</span> <span
  m="157710">where</span> <span m="157860">that</span> <span
  m="158110">thing</span> <span m="158320">is.</span> <span
  m="158860">That</span> <span m="159080">is</span> <span m="159210">a</span>
  <span m="159270">sequence</span> <span m="159650">of</span> <span
  m="159750">real</span> <span m="159930">numbers.</span> <span
  m="160910">Now,</span> <span m="161040">you</span> <span m="161190">can</span>
  <span m="161320">convert</span> <span m="161660">it</span> <span
  m="161710">into</span> <span m="161920">a</span> <span
  m="161970">polynomial</span> <span m="163210">if</span> <span
  m="163270">you</span> <span m="163400">want.</span> <span m="163610">They're
  the</span> <span m="163860">same</span> <span m="164110">thing.</span> <span
  m="164740">x</span> <span m="165200">is</span> <span m="165460">not</span>
  <span m="165630">necessarily</span> <span m="166020">meaningful</span> <span
  m="166420">here.</span> <span m="166990">We</span> <span
  m="167130">really</span> <span m="167370">care</span> <span
  m="167530">about</span> <span m="167770">other</span> <span
  m="167910">coefficients.</span></p><p><span m="169770">Now,</span> <span
  m="170080">given</span> <span m="170360">such</span> <span m="170560">a</span>
  <span m="170620">polynomial</span> <span m="171800">there</span> <span
  m="172000">are</span> <span m="172040">three</span> <span
  m="172520">typical</span> <span m="172970">things</span> <span
  m="173320">we</span> <span m="173670">want</span> <span m="173920">to</span>
  <span m="174030">do.</span> <span m="175330">So</span> <span
  m="175580">these</span> <span m="175860">are</span> <span
  m="177230">the</span> <span m="177380">operations</span> <span
  m="178050">on</span> <span m="178190">polynomials.</span> <span
  m="184730">I'll</span> <span m="184890">say</span> <span m="185070">why</span>
  <span m="185400">we</span> <span m="185490">want</span> <span
  m="185690">to</span> <span m="185760">do</span> <span m="185900">them</span>
  <span m="186090">in</span> <span m="186170">a</span> <span
  m="186210">second.</span> <span m="188800">So</span> <span
  m="189210">the</span> <span m="189380">obvious</span> <span
  m="189700">one,</span> <span m="189970">if</span> <span m="190070">you</span>
  <span m="190170">do</span> <span m="190230">care</span> <span
  m="190470">about</span> <span m="190730">x,</span> <span m="191740">is</span>
  <span m="191970">some</span> <span m="192170">kind</span> <span
  m="192360">of</span> <span m="192460">evaluation.</span> <span
  m="194650">So</span> <span m="194910">maybe</span> <span m="195610">I</span>
  <span m="195770">give</span> <span m="196040">you</span> <span
  m="196730">a</span> <span m="196820">polynomial--</span> <span
  m="197900">a</span> <span m="198140">of</span> <span m="198250">x--</span>
  <span m="199550">and</span> <span m="199810">I</span> <span
  m="199860">give</span> <span m="200120">you</span> <span m="200290">a</span>
  <span m="200340">number--</span> <span m="201340">let's</span> <span
  m="201490">call</span> <span m="201710">it</span> <span m="201800">x0--</span>
  <span m="203390">and</span> <span m="203610">I</span> <span
  m="203680">want</span> <span m="203930">to</span> <span
  m="204040">compute</span> <span m="204510">what</span> <span
  m="204730">is</span> <span m="205070">a</span> <span m="205220">of</span>
  <span m="205350">x0.</span> <span m="206660">So</span> <span
  m="206830">if</span> <span m="206930">I</span> <span m="207010">plug
  in--</span> <span m="207650">x</span> <span m="207930">here</span> <span
  m="208260">is a</span> <span m="208330">general</span> <span
  m="208750">variable,</span> <span m="209600">but</span> <span
  m="209690">if</span> <span m="209800">I</span> <span m="209880">give</span>
  <span m="210160">you</span> <span m="210260">an</span> <span
  m="210340">actual</span> <span m="210940">real</span> <span
  m="211150">number,</span> <span m="211490">say,</span> <span
  m="211770">for</span> <span m="211960">the</span> <span m="212070">x's,</span>
  <span m="213470">what</span> <span m="213700">does</span> <span
  m="213880">that</span> <span m="215600">add</span> <span m="215790">up</span>
  <span m="215950">to?</span></p><p><span m="219070">So,</span> <span
  m="219380">how</span> <span m="219780">would</span> <span
  m="219970">you</span> <span m="220100">solve</span> <span
  m="220770">evaluation</span> <span m="221390">before</span> <span
  m="221670">we</span> <span m="221770">go</span> <span m="221900">to</span>
  <span m="221990">the</span> <span m="222140">other</span> <span
  m="222800">operations?</span> <span m="228230">There's</span> <span
  m="228340">an</span> <span m="228460">obvious</span> <span
  m="228830">way.</span> <span m="230300">We,</span> <span m="230820">you
  know--</span> <span m="231500">you</span> <span m="231630">compute</span>
  <span m="231970">all</span> <span m="232200">the</span> <span
  m="232270">terms</span> <span m="232640">and</span> <span
  m="232750">add</span> <span m="232930">them</span> <span m="233100">up,</span>
  <span m="233580">but</span> <span m="234940">if</span> <span
  m="235170">you</span> <span m="235260">do</span> <span m="235370">that</span>
  <span m="235560">naively,</span> <span m="236240">computing</span> <span
  m="239190">x</span> <span m="239560">to</span> <span m="239700">the</span>
  <span m="239930">k--</span> <span m="241140">in</span> <span
  m="241570">this</span> <span m="241770">form,</span> <span
  m="242110">maybe--</span> <span m="242390">computing</span> <span
  m="242830">x</span> <span m="243010">to</span> <span m="243110">the</span>
  <span m="243230">k</span> <span m="243700">maybe</span> <span
  m="244010">takes</span> <span m="244270">k</span> <span
  m="244480">multiplications,</span> <span m="246050">and</span> <span
  m="246250">so</span> <span m="246540">the</span> <span m="246680">total</span>
  <span m="246980">runtime</span> <span m="247430">of</span> <span
  m="247510">the</span> <span m="247610">quadratic,</span> <span
  m="248300">but</span> <span m="248480">we</span> <span m="248590">can</span>
  <span m="248710">do</span> <span m="248810">better</span> <span
  m="249050">than</span> <span m="249200">that.</span></p><p><span
  m="255510">I</span> <span m="255660">know</span> <span m="255780">it's</span>
  <span m="255900">11</span> <span m="256170">o'clock--</span> <span
  m="256490">too</span> <span m="256630">early</span> <span m="256850">in</span>
  <span m="256930">the</span> <span m="256990">morning</span> <span
  m="257350">think.</span> <span m="265850">Yeah.</span></p><p><span
  m="266840">AUDIENCE: When you've already</span> <span
  m="267335">calculated</span> <span m="267830">x to the</span> <span
  m="268325">i,</span> <span m="268820">you can calculate</span> <span
  m="269315">x to the</span> <span m="269830">i plus 1</span> <span
  m="270315">by</span> <span m="270800">multiplying it.</span></p><p><span
  m="271030">ERIK DEMAINE: Good.</span> <span m="271390">Once</span> <span
  m="271620">you've</span> <span m="271750">computed</span> <span
  m="272280">x</span> <span m="272500">to</span> <span m="272580">the</span>
  <span m="272680">k,</span> <span m="273180">you can</span> <span
  m="273280">compute x</span> <span m="273660">to</span> <span
  m="273790">the</span> <span m="273850">k</span> <span m="274090">plus</span>
  <span m="274380">1</span> <span m="275340">with</span> <span
  m="275530">one</span> <span m="275800">multiplication,</span> <span
  m="276920">and</span> <span m="277090">so</span> <span m="277190">you</span>
  <span m="277370">can</span> <span m="278530">compute</span> <span
  m="278860">all</span> <span m="279490">x</span> <span m="279760">to</span>
  <span m="279890">n's</span> <span m="280760">in</span> <span
  m="280900">linear</span> <span m="281180">time</span> <span
  m="282150">and</span> <span m="284400">then</span> <span
  m="284570">you're</span> <span m="284660">basically</span> <span
  m="285140">doing</span> <span m="285240">a</span> <span m="286420">dot</span>
  <span m="286650">product</span> <span m="287030">between</span> <span
  m="288040">x</span> <span m="288300">to</span> <span m="288390">the</span>
  <span m="288490">k's</span> <span m="289160">and</span> <span m="289590">the
  a</span> <span m="289820">vector.</span> <span m="291330">Cool,</span> <span
  m="291700">my</span> <span m="292090">first</span> <span
  m="292530">Frisbee.</span></p><p><span m="296510">So,</span> <span
  m="298380">that's</span> <span m="298610">one</span> <span
  m="298800">way</span> <span m="298920">to</span> <span m="299040">do</span>
  <span m="299230">it.</span> <span m="299550">There's</span> <span
  m="299890">a</span> <span m="299960">slightly</span> <span
  m="300500">slicker</span> <span m="300880">way</span> <span
  m="301030">to</span> <span m="301150">write</span> <span m="301360">it</span>
  <span m="301510">called</span> <span m="301830">Horner's</span> <span
  m="302220">Rule,</span> <span m="302500">but</span> <span
  m="302690">it's</span> <span m="302850">doing</span> <span
  m="303100">exactly</span> <span m="303470">the</span> <span
  m="303580">same</span> <span m="303800">thing that</span> <span
  m="304060">you</span> <span m="304150">said.</span> <span
  m="308410">It's</span> <span m="308600">a--</span> <span
  m="309020">this</span> <span m="309230">is</span> <span m="309310">just</span>
  <span m="309540">a</span> <span m="309600">nice</span> <span
  m="309890">algebraic</span> <span m="310410">way</span> <span
  m="310560">of</span> <span m="310660">writing</span> <span
  m="310980">it.</span> <span m="311950">a of</span> <span m="312260">x</span>
  <span m="312630">is</span> <span m="312830">the</span> <span
  m="312920">same</span> <span m="313400">as</span> <span m="313960">a0</span>
  <span m="314520">plus</span> <span m="314960">x</span> <span
  m="315300">times</span> <span m="315960">a1</span> <span
  m="316700">plus</span> <span m="317020">x</span> <span m="317370">times</span>
  <span m="317940">a2</span> <span m="318580">plus,</span> <span
  m="319960">and</span> <span m="320110">so</span> <span m="320320">on.</span>
  <span m="321340">x</span> <span m="321760">times</span> <span m="323200">a
  n</span> <span m="323570">minus</span> <span m="323880">1,</span> <span
  m="324220">and</span> <span m="324350">then</span> <span
  m="324540">lots</span> <span m="324870">of--</span> <span
  m="325940">close</span> <span m="326320">parentheses.</span> <span
  m="328250">So</span> <span m="328470">this</span> <span m="328660">is,</span>
  <span m="329020">of</span> <span m="329170">course,</span> <span
  m="329380">equivalent</span> <span m="330330">to</span> <span
  m="330480">that</span> <span m="330660">expression</span> <span
  m="331380">by</span> <span m="332320">the</span> <span m="332770">law
  of</span> <span m="333060">distribution,</span> <span m="334370">and</span>
  <span m="335300">this</span> <span m="335500">is</span> <span
  m="335620">essentially</span> <span m="336140">doing</span> <span
  m="336440">the</span> <span m="337340">x-products</span> <span
  m="337880">one</span> <span m="337980">at</span> <span m="338140">a</span>
  <span m="338220">time.</span> <span m="338940">So,</span> <span
  m="338980">this</span> <span m="339170">is</span> <span
  m="339250">clearly</span> <span m="339700">order</span> <span
  m="339960">n</span> <span m="340580">additions</span> <span
  m="340990">and</span> <span m="341080">multiplication,</span> <span
  m="341890">so</span> <span m="342460">we</span> <span m="342610">get</span>
  <span m="343900">order</span> <span m="344160">n</span> <span
  m="344950">time.</span> <span m="345530">In</span> <span
  m="345690">this</span> <span m="345950">lecture,</span> <span
  m="346340">time</span> <span m="347400">is</span> <span m="347700">the</span>
  <span m="347890">number</span> <span m="348260">of</span> <span
  m="348340">arithmetic</span> <span m="348850">operations.</span> <span
  m="350065">That's our</span> <span m="350430">model.</span> <span
  m="350950">Assume</span> <span m="351160">it</span> <span
  m="351350">takes</span> <span m="351570">constant</span> <span
  m="351910">time</span> <span m="352170">to</span> <span
  m="352230">multiply</span> <span m="352605">or</span> <span
  m="352980">add</span> <span m="354850">two</span> <span m="355160">real</span>
  <span m="355380">numbers.</span> <span m="361070">OK.</span> <span
  m="364730">Cool.</span> <span m="365050">So,</span> <span
  m="365370">evaluation--</span> <span m="365980">that's</span> <span
  m="366190">easy.</span> <span m="367850">Linear</span> <span
  m="368150">time,</span> <span m="368680">for</span> <span
  m="368790">today,</span> <span m="369080">is</span> <span
  m="369240">good.</span> <span m="370330">Quadratic</span> <span
  m="370920">is</span> <span m="371200">bad.</span> <span m="372260">We</span>
  <span m="372370">want</span> <span m="372570">to</span> <span
  m="372820">beat</span> <span m="373010">quadratic.</span></p><p><span
  m="374200">OK,</span> <span m="374450">second</span> <span
  m="374770">thing</span> <span m="374880">you</span> <span
  m="374990">might</span> <span m="375170">want</span> <span
  m="375300">to</span> <span m="375380">do</span> <span m="375810">with</span>
  <span m="376080">polynomials</span> <span m="376690">is</span> <span
  m="376880">add</span> <span m="377170">them.</span> <span
  m="378430">The</span> <span m="378520">third</span> <span
  m="378770">thing</span> <span m="379000">is</span> <span
  m="379100">multiply</span> <span m="379380">them.</span></p><p><span
  m="381280">So,</span> <span m="382070">we're</span> <span
  m="382220">given</span> <span m="382500">two</span> <span
  m="382640">polynomials--</span> <span m="384040">a</span> <span
  m="384180">of</span> <span m="384280">x</span> <span m="384730">and</span>
  <span m="385050">b</span> <span m="385220">of</span> <span
  m="385300">x--</span> <span m="386640">and</span> <span m="386810">we</span>
  <span m="386900">want</span> <span m="387100">to</span> <span
  m="387160">compute</span> <span m="387550">a</span> <span
  m="387600">new</span> <span m="387800">polynomial--</span> <span
  m="388380">c</span> <span m="388560">of</span> <span m="388660">x--</span>
  <span m="389950">that</span> <span m="390780">is</span> <span
  m="391010">the</span> <span m="391100">summation.</span> <span
  m="391730">How</span> <span m="391930">do</span> <span m="392010">you</span>
  <span m="392100">define</span> <span m="392450">the</span> <span
  m="392530">summation?</span> <span m="393900">Well,</span> <span
  m="394110">you</span> <span m="394260">would</span> <span
  m="394370">like</span> <span m="395100">c of</span> <span m="395440">x</span>
  <span m="395690">to</span> <span m="395800">equal</span> <span
  m="396170">a</span> <span m="396270">of</span> <span m="396380">x</span> <span
  m="396570">plus</span> <span m="396760">b</span> <span m="396920">of</span>
  <span m="397000">x</span> <span m="397290">for</span> <span
  m="397460">all</span> <span m="397740">x.</span> <span
  m="399390">That's</span> <span m="399620">the</span> <span
  m="399660">definition.</span> <span m="401010">Of</span> <span
  m="401260">course,</span> <span m="401510">we</span> <span
  m="401630">can</span> <span m="401810">do</span> <span m="401970">it</span>
  <span m="402100">algebraically</span> <span m="402800">as</span> <span
  m="402900">well</span> <span m="403570">because</span> <span
  m="404830">these</span> <span m="405050">are</span> <span
  m="405330">numbers</span> <span m="406390">in</span> <span
  m="406510">the</span> <span m="406640">end--</span> <span
  m="407110">for</span> <span m="407300">any</span> <span m="407480">x</span>
  <span m="407730">this</span> <span m="407920">evaluates</span> <span
  m="408360">to a</span> <span m="408450">number--</span> <span
  m="409610">so</span> <span m="409890">if</span> <span m="410010">we</span>
  <span m="410170">add</span> <span m="410520">two</span> <span
  m="410660">polynomials</span> <span m="411290">of</span> <span
  m="411390">this</span> <span m="411580">form--</span> <span
  m="411970">one</span> <span m="412130">with</span> <span
  m="412350">ai's,</span> <span m="412870">one with</span> <span
  m="413130">the</span> <span m="413210">b</span> <span m="413400">i's--</span>
  <span m="414130">all</span> <span m="414350">we're</span> <span
  m="414470">doing</span> <span m="414960">is</span> <span
  m="416020">adding</span> <span m="416660">corresponding</span> <span
  m="417410">ai's</span> <span m="418550">and</span> <span m="418670">b</span>
  <span m="418840">i's.</span> <span m="419470">So,</span> <span
  m="419760">this</span> <span m="419970">is</span> <span
  m="420100">easy.</span> <span m="422180">We</span> <span
  m="422320">just</span> <span m="422560">need</span> <span m="422840">ck</span>
  <span m="423690">to</span> <span m="424170">equal</span> <span
  m="424620">ak</span> <span m="426020">plus</span> <span m="426430">bk</span>
  <span m="428091">for all</span> <span m="428580">k.</span> <span
  m="429860">So,</span> <span m="430010">again,</span> <span
  m="430700">linear</span> <span m="430990">time--</span> <span
  m="431900">no</span> <span m="431990">problem.</span></p><p><span
  m="434050">Third</span> <span m="434470">operation</span> <span
  m="436152">is</span> <span m="436640">the</span> <span
  m="436720">exciting</span> <span m="437120">one,</span> <span
  m="437870">the</span> <span m="437960">hard</span> <span m="438190">one</span>
  <span m="438470">to</span> <span m="439020">get</span> <span
  m="439210">good,</span> <span m="442450">otherwise</span> <span
  m="442790">this</span> <span m="442950">lecture</span> <span
  m="443320">would</span> <span m="443480">be</span> <span
  m="443650">over</span> <span m="443910">in</span> <span m="444030">a</span>
  <span m="444410">couple</span> <span m="444720">more</span> <span
  m="444870">minutes.</span> <span m="446840">So</span> <span
  m="447090">multiplication--</span> <span m="447830">same</span> <span
  m="448110">deal.</span> <span m="448930">We're</span> <span
  m="449050">given</span> <span m="449340">a of</span> <span m="449570">x</span>
  <span m="449930">and b</span> <span m="450290">of</span> <span
  m="450370">x,</span> <span m="451540">and</span> <span m="451620">we</span>
  <span m="451730">want</span> <span m="452040">to</span> <span
  m="452280">convert</span> <span m="452660">that</span> <span
  m="452970">into</span> <span m="453520">some</span> <span m="453800">c
  of</span> <span m="454090">x</span> <span m="455750">that,</span> <span
  m="456010">for</span> <span m="456170">all</span> <span m="456350">x,</span>
  <span m="456640">evaluates</span> <span m="457480">to</span> <span
  m="457650">the</span> <span m="457760">product</span> <span
  m="458770">of</span> <span m="459230">those</span> <span m="459540">two</span>
  <span m="460820">polynomials.</span></p><p><span m="464720">How</span> <span
  m="465040">do</span> <span m="465140">we</span> <span m="465260">do</span>
  <span m="465400">this?</span> <span m="467750">We</span> <span
  m="467880">can't</span> <span m="468150">just</span> <span
  m="468430">multiply</span> <span m="469040">corresponding</span> <span
  m="470390">ak's</span> <span m="470660">and</span> <span
  m="470930">bk's.</span> <span m="473040">In</span> <span
  m="473170">fact,</span> <span m="473470">if</span> <span m="473570">you</span>
  <span m="473670">take</span> <span m="473830">a</span> <span
  m="473880">big</span> <span m="474270">thing</span> <span
  m="474440">like</span> <span m="474620">this</span> <span m="474830">and
  you</span> <span m="474950">multiply</span> <span m="475500">it</span> <span
  m="475590">by</span> <span m="475740">corresponding</span> <span
  m="476760">big</span> <span m="476940">thing--</span> <span
  m="477240">eh,</span> <span m="477520">let's</span> <span m="477730">do</span>
  <span m="477870">it.</span> <span m="491460">This</span> <span
  m="491610">doesn't</span> <span m="491790">look</span> <span m="492070">like
  fun.</span> <span m="497800">We</span> <span m="498020">get--</span> <span
  m="498500">let's</span> <span m="498720">see.</span> <span
  m="499020">So,</span> <span m="499230">the</span> <span
  m="499370">constant</span> <span m="499790">term</span> <span
  m="500180">is</span> <span m="500310">just</span> <span m="500530">the</span>
  <span m="500570">product--</span> <span m="501000">that's</span> <span
  m="501290">easy,</span> <span m="502560">the</span> <span
  m="502670">constant</span> <span m="503050">terms--</span> <span
  m="504180">but</span> <span m="504390">then,</span> <span m="504680">if</span>
  <span m="504930">I</span> <span m="505070">take</span> <span
  m="505440">this</span> <span m="505660">product</span> <span
  m="506220">or</span> <span m="506360">this</span> <span
  m="506590">product,</span> <span m="507100">I</span> <span
  m="507180">get</span> <span m="507510">linear</span> <span
  m="507910">terms.</span> <span m="508360">So</span> <span
  m="508390">it's</span> <span m="508580">going</span> <span
  m="508700">to</span> <span m="508770">be</span> <span m="509440">a1b0</span>
  <span m="512400">plus</span> <span m="512680">a0b1</span> <span
  m="514970">times</span> <span m="515270">x,</span> <span m="516330">and</span>
  <span m="516549">then</span> <span m="516700">there's</span> <span
  m="516870">a</span> <span m="516940">quadratic</span> <span
  m="517530">term</span> <span m="518370">which</span> <span m="518590">I</span>
  <span m="518690">get</span> <span m="519070">from--</span> <span
  m="520400">switch</span> <span m="520700">colors--</span> <span
  m="523150">this</span> <span m="523602">and</span> <span
  m="524054">this</span> <span m="524960">and</span> <span
  m="525210">this.</span> <span m="526170">So</span> <span
  m="526320">there's</span> <span m="526560">three</span> <span
  m="526840">things</span> <span m="527610">times</span> <span
  m="527970">x</span> <span m="528170">squared,</span> <span
  m="529330">and</span> <span m="529560">that's</span> <span
  m="529750">where</span> <span m="529860">I</span> <span m="529900">get</span>
  <span m="530090">tired.</span></p><p><span m="531280">I'm</span> <span
  m="531410">going</span> <span m="531530">to</span> <span
  m="531600">switch</span> <span m="532110">to</span> <span
  m="533040">the</span> <span m="533150">summation</span> <span
  m="533650">notation.</span> <span m="536470">I</span> <span
  m="536600">didn't</span> <span m="536800">go</span> <span m="536890">to</span>
  <span m="536960">high</span> <span m="537080">school,</span> <span
  m="537300">but</span> <span m="537430">I</span> <span m="537470">assume</span>
  <span m="537740">in</span> <span m="537800">high</span> <span
  m="537930">school</span> <span m="538390">algebra</span> <span
  m="538500">you</span> <span m="538630">learn</span> <span
  m="538820">this.</span> <span m="540720">ck</span> <span m="542480">is</span>
  <span m="543310">the</span> <span m="543480">sum</span> <span
  m="544030">of</span> <span m="545370">j</span> <span m="545760">equals</span>
  <span m="546180">0</span> <span m="547770">to</span> <span
  m="548020">k.</span> <span m="550180">ajbk</span> <span
  m="551940">minus</span> <span m="552560">j.</span> <span
  m="553770">That's</span> <span m="554020">the</span> <span
  m="554100">general</span> <span m="554420">form</span> <span
  m="554830">because</span> <span m="555820">aj</span> <span
  m="556370">came</span> <span m="556680">from</span> <span m="556950">an</span>
  <span m="557020">x</span> <span m="557180">to</span> <span
  m="557270">the</span> <span m="557380">j</span> <span m="557580">term,</span>
  <span m="558250">bk</span> <span m="558560">minus</span> <span
  m="558860">j</span> <span m="559050">came</span> <span m="559330">from</span>
  <span m="559550">x</span> <span m="559820">to</span> <span
  m="559890">the</span> <span m="560020">k</span> <span m="560190">minus</span>
  <span m="560470">j</span> <span m="560650">term.</span> <span
  m="561290">When</span> <span m="561460">you</span> <span
  m="561560">multiply</span> <span m="561990">those</span> <span
  m="562190">together,</span> <span m="562610">you</span> <span
  m="562710">get</span> <span m="562740">x</span> <span m="562950">to</span>
  <span m="563050">the</span> <span m="563160">k,</span> <span
  m="563970">so</span> <span m="564170">this</span> <span m="564470">is</span>
  <span m="564730">the</span> <span m="564860">coefficient</span> <span
  m="565440">of</span> <span m="565560">x</span> <span m="565760">to</span>
  <span m="565840">the</span> <span m="565920">k.</span> <span
  m="566980">Cool?</span> <span m="568830">So,</span> <span
  m="568960">that's</span> <span m="569160">what</span> <span
  m="569270">we'd</span> <span m="569420">like</span> <span m="569620">to</span>
  <span m="569730">compute.</span> <span m="571060">Given</span> <span
  m="571370">a and</span> <span m="571610">b</span> <span m="572170">we</span>
  <span m="572240">want</span> <span m="572400">to</span> <span
  m="572440">compute</span> <span m="572730">this</span> <span
  m="572900">polynomial</span> <span m="573420">c.</span> <span
  m="574340">How</span> <span m="574570">long</span> <span
  m="574780">does</span> <span m="574910">it</span> <span
  m="575020">take?</span> <span m="578816">We have</span> <span
  m="579290">to</span> <span m="579430">do</span> <span m="579540">this</span>
  <span m="579730">for</span> <span m="579870">all</span> <span
  m="580050">k.</span> <span m="581780">So,</span> <span m="581930">to</span>
  <span m="582010">compute</span> <span m="582290">the</span> <span
  m="582370">k-th</span> <span m="582580">term</span> <span
  m="582980">takes</span> <span m="583550">order</span> <span
  m="583790">k</span> <span m="584050">time,</span> <span m="585210">so</span>
  <span m="585360">the</span> <span m="585430">total</span> <span
  m="585660">time</span> <span m="586010">is</span> <span m="586160">n</span>
  <span m="586310">squared.</span> <span m="592370">So,</span> <span
  m="592640">that's</span> <span m="593550">not</span> <span
  m="593830">good</span> <span m="594130">for</span> <span
  m="594380">this</span> <span m="594580">lecture.</span> <span
  m="595620">We</span> <span m="595810">want</span> <span m="595970">to</span>
  <span m="596040">do</span> <span m="596160">better.</span></p><p><span
  m="597240">In</span> <span m="597340">fact,</span> <span
  m="597630">today</span> <span m="598410">we</span> <span
  m="598600">will</span> <span m="598810">achieve</span> <span
  m="602980">n</span> <span m="603120">log</span> <span m="603480">n.</span>
  <span m="606560">That's</span> <span m="606790">our</span> <span
  m="606910">goal--</span> <span m="608210">polynomial</span> <span
  m="608700">multiplication</span> <span m="609380">in</span> <span m="609720">n
  log</span> <span m="610120">n.</span> <span m="611230">Why</span> <span
  m="611460">do</span> <span m="611540">we</span> <span m="611640">care</span>
  <span m="611920">about</span> <span m="612180">polynomial</span> <span
  m="612700">multiplication?</span> <span m="614120">Because</span> <span
  m="614970">it's</span> <span m="615140">equivalent</span> <span
  m="615610">to</span> <span m="615730">another</span> <span
  m="616030">operation</span> <span m="616570">which</span> <span
  m="616770">we</span> <span m="616900">use</span> <span m="617100">all</span>
  <span m="617340">the</span> <span m="617440">time</span> <span
  m="618470">in</span> <span m="618940">digital</span> <span
  m="619270">signal</span> <span m="619630">processing,</span> <span
  m="620900">image</span> <span m="621300">editing,</span> <span
  m="621990">all</span> <span m="622120">sorts</span> <span m="622370">of</span>
  <span m="622420">different</span> <span m="622710">things,</span> <span
  m="623530">which</span> <span m="623800">is</span> <span
  m="624430">convolution.</span></p><p><span m="632910">Convolution</span> <span
  m="633470">is</span> <span m="633570">usually</span> <span
  m="633960">thought</span> <span m="634190">of</span> <span
  m="634320">as</span> <span m="634500">an</span> <span
  m="634600">operation</span> <span m="635070">on</span> <span
  m="635250">vectors.</span> <span m="644450">So,</span> <span
  m="646600">remember</span> <span m="646860">this</span> <span
  m="647250">vector</span> <span m="647520">notation,</span> <span
  m="648360">where</span> <span m="648580">we're</span> <span
  m="648790">just</span> <span m="649010">thinking</span> <span
  m="649200">about</span> <span m="649380">the</span> <span
  m="649460">coefficients.</span> <span m="650120">x's</span> <span
  m="650510">are</span> <span m="650590">kind</span> <span m="650770">of</span>
  <span m="650860">irrelevant.</span> <span m="651420">We're just</span> <span
  m="651730">thinking</span> <span m="651970">about</span> <span
  m="652130">a</span> <span m="652170">sequence</span> <span
  m="652570">of</span> <span m="652650">real</span> <span
  m="652850">numbers.</span> <span m="654380">So,</span> <span
  m="654460">maybe</span> <span m="654780">that</span> <span
  m="655000">sequence</span> <span m="655380">of</span> <span
  m="655470">real</span> <span m="655630">numbers</span> <span
  m="655930">for</span> <span m="656120">a</span> <span
  m="656820">represents</span> <span m="658790">waveform.</span> <span
  m="659930">Maybe</span> <span m="660150">this</span> <span
  m="660310">is</span> <span m="660420">the</span> <span m="660590">audio</span>
  <span m="660970">I'm</span> <span m="661070">speaking</span> <span
  m="661450">now.</span></p><p><span m="663080">And</span> <span
  m="663220">then</span> <span m="663600">I</span> <span m="663790">take</span>
  <span m="664870">some</span> <span m="665110">other</span> <span
  m="665370">waveform.</span> <span m="665940">Here</span> <span
  m="666160">I</span> <span m="666210">have</span> <span m="667510">a</span>
  <span m="667910">Gaussian</span> <span m="668580">function--</span> <span
  m="669470">e to the</span> <span m="669680">minus</span> <span
  m="669890">x</span> <span m="670070">squared--</span> <span
  m="671010">and</span> <span m="671320">I</span> <span m="671440">want</span>
  <span m="671630">to</span> <span m="671720">take--</span> <span
  m="673440">for</span> <span m="673690">all</span> <span
  m="673920">possible</span> <span m="674500">shifts</span> <span
  m="675080">of</span> <span m="675230">this</span> <span
  m="675420">Gaussian</span> <span m="676620">I</span> <span
  m="676720">want</span> <span m="676880">to</span> <span
  m="676940">compute</span> <span m="677290">the</span> <span
  m="677380">dot</span> <span m="677700">product</span> <span
  m="678110">between</span> <span m="678810">the</span> <span
  m="678930">blackboard</span> <span m="679650">and</span> <span
  m="679860">the</span> <span m="679930">piece</span> <span m="680120">of</span>
  <span m="680200">paper.</span> <span m="681480">That's</span> <span
  m="681680">some</span> <span m="681800">kind</span> <span m="681970">of</span>
  <span m="682030">smoothing</span> <span m="682460">function,</span> <span
  m="682950">if</span> <span m="683040">I</span> <span m="683110">wanted</span>
  <span m="683440">to</span> <span m="684420">clean</span> <span
  m="684685">up</span> <span m="684950">noise</span> <span m="685390">or</span>
  <span m="685470">something</span> <span m="685770">like</span> <span
  m="685930">that.</span></p><p><span m="686530">You</span> <span m="686580">can
  do</span> <span m="686690">the</span> <span m="686790">same</span> <span
  m="687010">thing</span> <span m="687230">on</span> <span m="687330">a</span>
  <span m="687390">two-dimensional</span> <span m="687970">image.</span> <span
  m="688550">It's</span> <span m="688850">a</span> <span
  m="688890">little</span> <span m="689080">harder</span> <span
  m="689340">to</span> <span m="689430">think</span> <span
  m="689640">about,</span> <span m="690060">but</span> <span
  m="690070">you</span> <span m="690190">can</span> <span m="690330">map</span>
  <span m="690540">a</span> <span m="690600">two-dimensional</span> <span
  m="691120">image</span> <span m="691370">to a</span> <span
  m="691500">one-dimensional</span> <span m="692030">vector.</span> <span
  m="692750">And</span> <span m="692880">you</span> <span m="692930">have</span>
  <span m="693070">a</span> <span m="693160">two-dimensional</span> <span
  m="693720">Gaussian--</span> <span m="694120">if</span> <span
  m="694230">you</span> <span m="694320">ever</span> <span m="694490">do</span>
  <span m="694650">Gaussian</span> <span m="695090">blur in</span> <span
  m="695490">Photoshop</span> <span m="696920">this</span> <span
  m="697130">is</span> <span m="697240">what</span> <span
  m="697390">you're</span> <span m="697490">doing--</span> <span
  m="697780">a</span> <span m="697840">convolution--</span> <span
  m="699530">and</span> <span m="699750">it's</span> <span
  m="699910">used</span> <span m="700160">to</span> <span
  m="701990">pretend</span> <span m="702400">that</span> <span
  m="702530">your</span> <span m="702690">lens is</span> <span m="703030">out
  of</span> <span m="703290">focus</span> <span m="703910">when</span> <span
  m="704080">you</span> <span m="704670">do</span> <span m="704770">that.</span>
  <span m="705640">It's</span> <span m="706010">done</span> <span
  m="706350">in</span> <span m="707470">audio</span> <span
  m="707720">processing,</span> <span m="708010">and</span> <span
  m="708300">all</span> <span m="708440">sorts</span> <span m="708670">of</span>
  <span m="708760">things.</span></p><p><span m="710090">So,</span> <span
  m="710930">formally,</span> <span m="712230">you're</span> <span
  m="712360">given</span> <span m="712640">two</span> <span
  m="712800">vectors</span> <span m="714210">and</span> <span
  m="714580">you</span> <span m="714700">want</span> <span m="714870">to</span>
  <span m="714940">take</span> <span m="715240">all</span> <span
  m="715590">possible</span> <span m="716040">shifts</span> <span
  m="716360">of</span> <span m="716450">one</span> <span
  m="716660">vector</span> <span m="717480">and</span> <span
  m="717720">take</span> <span m="717890">the</span> <span m="718000">dot</span>
  <span m="718240">product</span> <span m="718670">with</span> <span
  m="718790">the</span> <span m="718910">other</span> <span
  m="719070">one.</span> <span m="720200">I</span> <span m="720290">have</span>
  <span m="720490">that written</span> <span m="720760">down.</span> <span
  m="721880">I</span> <span m="722250">just--</span> <span m="724510">dot</span>
  <span m="724720">product,</span> <span m="725120">same</span> <span
  m="725350">thing</span> <span m="725550">as</span> <span
  m="725710">inner</span> <span m="725910">product,</span> <span
  m="727140">which</span> <span m="727300">just</span> <span
  m="727500">means</span> <span m="727730">multiply</span> <span
  m="728280">corresponding</span> <span m="730660">positions</span> <span
  m="731250">and</span> <span m="731360">add</span> <span m="731550">them</span>
  <span m="731690">up.</span> <span m="742260">And,</span> <span
  m="742490">if</span> <span m="742580">you</span> <span
  m="742720">ignore</span> <span m="743010">this</span> <span
  m="743210">minus</span> <span m="743640">sign,</span> <span
  m="744610">that's</span> <span m="744820">exactly</span> <span
  m="745270">what</span> <span m="745430">this</span> <span m="745580">is</span>
  <span m="745690">doing.</span> <span m="745960">This</span> <span
  m="746100">is</span> <span m="746180">taking</span> <span m="746530">aj</span>
  <span m="747630">versus</span> <span m="748180">bk,</span> <span
  m="749100">pretend</span> <span m="749610">it's</span> <span
  m="749730">plus</span> <span m="750090">j.</span> <span m="750810">So,</span>
  <span m="750970">that's</span> <span m="751190">the</span> <span
  m="751300">bj</span> <span m="752390">vector,</span> <span
  m="753050">but</span> <span m="753290">with</span> <span m="753430">all</span>
  <span m="753650">possible</span> <span m="754110">shifts</span> <span
  m="754440">k.</span> <span m="754650">We</span> <span
  m="754780">compute</span> <span m="755130">this</span> <span
  m="755300">for</span> <span m="755510">all</span> <span m="755890">k.</span>
  <span m="758120">That's</span> <span m="758330">really</span> <span
  m="758530">cool.</span> <span m="759780">We're</span> <span
  m="759940">going</span> <span m="760030">to</span> <span
  m="760090">compute</span> <span m="760400">it in</span> <span
  m="760680">n</span> <span m="760860">log</span> <span m="761170">n</span>
  <span m="761330">time.</span> <span m="762120">All</span> <span
  m="762420">different</span> <span m="762710">n</span> <span
  m="762960">shifts</span> <span m="763310">of</span> <span m="763430">b</span>
  <span m="764100">will</span> <span m="764230">take</span> <span
  m="764420">the</span> <span m="764520">dot</span> <span
  m="764750">product</span> <span m="765040">with</span> <span
  m="765160">a.</span> <span m="765320">It's</span> <span m="765730">kind</span>
  <span m="765900">of</span> <span m="765960">magical</span> <span
  m="766440">because</span> <span m="766580">it</span> <span
  m="766650">looks</span> <span m="766850">like</span> <span
  m="766970">you're</span> <span m="767060">doing</span> <span
  m="767270">n</span> <span m="767400">squared</span> <span
  m="767650">work,</span> <span m="768280">but</span> <span m="768440">we</span>
  <span m="768530">will</span> <span m="768630">do</span> <span
  m="768770">it</span> <span m="768860">in</span> <span m="769070">n</span>
  <span m="769230">log</span> <span m="769430">n</span> <span
  m="769590">time.</span></p><p><span m="773160">The</span> <span
  m="773480">only</span> <span m="773820">issue</span> <span
  m="774110">is</span> <span m="774240">we</span> <span m="774350">have</span>
  <span m="774540">to</span> <span m="774650">reverse</span> <span
  m="775050">b.</span> <span m="776210">Then</span> <span m="776380">the</span>
  <span m="776440">minus</span> <span m="776750">signs</span> <span
  m="777180">turn</span> <span m="777350">into</span> <span
  m="777520">plus</span> <span m="777760">signs.</span> <span
  m="778860">And</span> <span m="779090">there's</span> <span
  m="779220">some</span> <span m="779400">boundary</span> <span
  m="779870">conditions,</span> <span m="780350">but</span> <span
  m="780500">it's</span> <span m="780690">basically</span> <span
  m="781110">the</span> <span m="781310">same.</span> <span m="781710">If</span>
  <span m="781830">we</span> <span m="781910">can</span> <span
  m="782050">solve</span> <span m="782250">polynomial</span> <span
  m="782700">multiplication,</span> <span m="783860">we</span> <span
  m="783960">can solve</span> <span m="784310">convolution.</span> <span
  m="785253">Cool?</span> <span m="787040">So,</span> <span
  m="787260">that's</span> <span m="787480">why</span> <span
  m="787690">we</span> <span m="787850">care</span> <span
  m="788150">about</span> <span m="789030">multiplication.</span></p><p><span
  m="792040">So,</span> <span m="792330">how</span> <span m="792540">are</span>
  <span m="792640">we</span> <span m="792650">going</span> <span
  m="792760">to</span> <span m="792820">solve</span> <span
  m="793160">this?</span> <span m="795190">What</span> <span
  m="795450">I'd</span> <span m="795570">like</span> <span m="795750">to</span>
  <span m="795870">do</span> <span m="796590">is</span> <span
  m="797040">talk</span> <span m="797240">about</span> <span
  m="797510">alternate</span> <span m="797970">representations</span> <span
  m="798760">of</span> <span m="798840">polynomials.</span> <span
  m="799650">That's</span> <span m="800340">the</span> <span
  m="800780">next</span> <span m="801010">thing</span> <span
  m="801100">here.</span> <span m="801270">We</span> <span
  m="801350">just</span> <span m="801520">did</span> <span
  m="801750">operations.</span> <span m="802730">Let's</span> <span
  m="802860">talk</span> <span m="803040">about</span> <span
  m="803230">different</span> <span m="803490">representations.</span> <span
  m="805140">So,</span> <span m="805430">we</span> <span
  m="805580">talked</span> <span m="805830">about</span> <span
  m="806020">this</span> <span m="806150">one</span> <span
  m="806360">representation--</span> <span m="807460">it's</span> <span
  m="807670">one</span> <span m="807940">way</span> <span m="808130">to</span>
  <span m="808290">represent</span> <span m="809520">polynomial--</span> <span
  m="810270">but</span> <span m="810410">it's</span> <span m="810540">not</span>
  <span m="810700">the</span> <span m="810820">only</span> <span
  m="811040">one.</span> <span m="811260">You</span> <span
  m="811360">probably</span> <span m="811830">know</span> <span
  m="812010">others.</span> <span m="815490">So,</span> <span
  m="816060">on</span> <span m="816180">the</span> <span m="816280">one</span>
  <span m="816510">hand</span> <span m="816870">we</span> <span
  m="816990">have</span> <span m="821760">representation</span> <span
  m="822660">a</span> <span m="823890">is</span> <span m="824560">a</span> <span
  m="825050">coefficient</span> <span m="825530">vector.</span> <span
  m="829530">So</span> <span m="829780">we</span> <span m="829940">can</span>
  <span m="830860">write</span> <span m="831090">down</span> <span
  m="831486">the</span> <span m="831882">ai's.</span> <span
  m="832280">That</span> <span m="832440">was</span> <span
  m="832580">just</span> <span m="832770">one</span> <span m="833040">way</span>
  <span m="833270">to</span> <span m="833420">represent</span> <span
  m="835690">a</span> <span m="835750">polynomial.</span></p><p><span
  m="836900">Can</span> <span m="837050">anyone</span> <span
  m="837320">give</span> <span m="837490">me</span> <span
  m="838100">another</span> <span m="838380">way</span> <span
  m="838530">to</span> <span m="838660">represent</span> <span
  m="838935">a</span> <span m="839210">polynomial?</span> <span
  m="839730">I</span> <span m="840100">have</span> <span m="840300">two</span>
  <span m="840480">ways</span> <span m="840690">in</span> <span
  m="840770">mind.</span> <span m="841680">Yeah.</span></p><p><span
  m="841920">AUDIENCE: Generating</span> <span
  m="842366">function?</span></p><p><span m="843260">ERIK DEMAINE:
  Generating</span> <span m="843860">function.</span> <span
  m="844590">Isn't</span> <span m="844740">that</span> <span
  m="845010">the</span> <span m="845150">same--</span> <span
  m="845930">oh,</span> <span m="846080">I</span> <span m="846200">guess</span>
  <span m="849050">in</span> <span m="849220">principle</span> <span
  m="849940">you</span> <span m="850150">could</span> <span
  m="850300">imagine</span> <span m="851500">writing</span> <span
  m="851780">a</span> <span m="851830">recurrence</span> <span
  m="852340">on</span> <span m="852430">the</span> <span
  m="852520">generating</span> <span m="852900">function</span> <span
  m="853300">or</span> <span m="853380">something.</span> <span
  m="854320">It's</span> <span m="854470">plausible.</span> <span
  m="854970">In</span> <span m="855050">general,</span> <span
  m="855600">generating</span> <span m="855960">functions</span> <span
  m="856290">are</span> <span m="856480">polynomials</span> <span m="857130">if
  you know what</span> <span m="857460">that--</span> <span
  m="857960">they</span> <span m="858100">are</span> <span
  m="858330">cool.</span> <span m="859580">So</span> <span m="859900">it</span>
  <span m="860010">doesn't</span> <span m="860310">quite</span> <span
  m="860560">answer</span> <span m="860730">the</span> <span
  m="860830">question.</span> <span m="861430">Yeah?</span></p><p><span
  m="861640">AUDIENCE: [INAUDIBLE]</span></p><p><span m="863270">ERIK DEMAINE:
  Sure.</span></p><p><span m="863620">AUDIENCE:
  Representation.</span></p><p><span m="864910">ERIK DEMAINE:
  Sorry?</span></p><p><span m="865523">AUDIENCE: Points?</span></p><p><span
  m="866310">ERIK DEMAINE: Point</span> <span m="866740">representation,</span>
  <span m="867480">yeah.</span> <span m="867980">I</span> <span
  m="868080">call</span> <span m="868360">them</span> <span
  m="869160">samples.</span> <span m="870860">I'm</span> <span
  m="870940">going</span> <span m="871050">to</span> <span m="871120">put</span>
  <span m="871340">that</span> <span m="871520">under</span> <span
  m="871900">C.</span> <span m="875510">A</span> <span m="875570">bunch</span>
  <span m="875830">of</span> <span m="875910">samples,</span> <span
  m="876460">a</span> <span m="876520">bunch</span> <span m="876740">of</span>
  <span m="876830">points</span> <span m="877340">on</span> <span
  m="877590">the</span> <span m="877670">polynomial.</span> <span
  m="879240">So</span> <span m="879450">like</span> <span m="879690">xk,</span>
  <span m="881955">yk</span> <span m="886140">for--</span> <span m="889804">how
  many</span> <span m="890290">do</span> <span m="890400">we</span> <span
  m="890500">need--</span> <span m="890660">I</span> <span
  m="890840">think</span> <span m="891200">n</span> <span
  m="891420">minus</span> <span m="891730">1</span> <span m="892050">should
  do</span> <span m="892400">it.</span> <span m="893500">We'll check.</span>
  <span m="894550">Yep.</span> <span m="895780">And</span> <span
  m="895990">if</span> <span m="896150">we</span> <span m="896430">are</span>
  <span m="896620">told</span> <span m="897080">that</span> <span
  m="897200">a</span> <span m="897380">of</span> <span m="897500">xk</span>
  <span m="898840">equals</span> <span m="899310">yk,</span> <span
  m="900700">and</span> <span m="900940">we're</span> <span
  m="901090">told</span> <span m="901490">that</span> <span
  m="901620">all</span> <span m="901900">the</span> <span m="902060">xk's</span>
  <span m="902600">are</span> <span m="902690">distinct,</span> <span
  m="907450">then</span> <span m="907800">this</span> <span
  m="908100">uniquely</span> <span m="908650">determines</span> <span
  m="909336">the</span> <span m="909680">polynomial.</span> <span
  m="910860">You</span> <span m="910960">have</span> <span m="911190">a</span>
  <span m="911270">degree</span> <span m="912130">n</span> <span
  m="912400">minus</span> <span m="912660">one</span> <span
  m="912820">polynomial,</span> <span m="913780">and</span> <span
  m="913920">you</span> <span m="913990">have</span> <span m="914210">n</span>
  <span m="914460">samples.</span> <span m="915680">There's</span> <span
  m="915800">only</span> <span m="916050">one</span> <span
  m="916330">polynomial</span> <span m="916870">that</span> <span
  m="916990">passes</span> <span m="917410">through</span> <span
  m="917750">all</span> <span m="917950">those</span> <span
  m="918160">points.</span> <span m="920620">It's</span> <span
  m="920840">a</span> <span m="920900">consequence</span> <span
  m="921420">of</span> <span m="921510">the</span> <span
  m="921610">fundamental</span> <span m="922210">theorem</span> <span
  m="923180">of</span> <span m="923560">algebra</span> <span
  m="924890">that</span> <span m="925050">gives</span> <span
  m="925190">you</span> <span m="925370">uniqueness.</span> <span
  m="926490">Existence,</span> <span m="927280">I</span> <span
  m="927380">think,</span> <span m="927440">was</span> <span
  m="927580">proved</span> <span m="927810">by</span> <span
  m="927950">Legendre</span> <span m="929310">in</span> <span m="929940">1700s,
  1800s--</span> <span m="931060">a</span> <span m="931300">long</span> <span
  m="931420">time</span> <span m="931660">ago.</span> <span
  m="933070">This</span> <span m="933270">is</span> <span
  m="933400">good.</span> <span m="933600">This</span> <span
  m="933750">is</span> <span m="933860">what</span> <span
  m="934000">we're</span> <span m="934110">going</span> <span
  m="934230">to</span> <span m="934280">use.</span></p><p><span
  m="935310">There's</span> <span m="935450">another</span> <span
  m="935770">answer.</span> <span m="936603">I should</span> <span
  m="936946">give you a</span> <span m="937290">Frisbee</span> <span
  m="937670">first.</span> <span m="939970">You look</span> <span
  m="940410">so</span> <span m="940720">excited.</span> <span
  m="942330">Just</span> <span m="942530">wait</span> <span
  m="942700">till</span> <span m="942820">I</span> <span m="942890">hit</span>
  <span m="943070">you,</span> <span m="943390">then</span> <span
  m="944015">you'll</span> <span m="944360">be</span> <span
  m="944470">less</span> <span m="944690">excited.</span> <span
  m="946140">OK,</span> <span m="946650">so.</span> <span
  m="947420">Samples,</span> <span m="948430">coefficients,</span> <span
  m="949510">anything</span> <span m="949780">else?</span> <span
  m="951090">Yeah.</span></p><p><span m="951280">AUDIENCE:
  Roots?</span></p><p><span m="952170">ERIK DEMAINE: Roots,</span> <span
  m="952670">yeah.</span> <span m="956320">Roots</span> <span
  m="956655">is</span> <span m="956990">the</span> <span m="957130">other</span>
  <span m="957340">answer</span> <span m="957830">I</span> <span
  m="958100">was</span> <span m="958210">looking</span> <span
  m="958470">for,</span> <span m="958790">but</span> <span
  m="959090">it's</span> <span m="959400">not</span> <span
  m="959570">going</span> <span m="959670">to</span> <span m="959720">be</span>
  <span m="959870">so</span> <span m="960100">good</span> <span
  m="960340">algorithmically,</span> <span m="961010">as</span> <span
  m="961190">we'll</span> <span m="961320">see.</span> <span
  m="962060">Sorry.</span></p><p><span m="965120">So,</span> <span
  m="965450">I</span> <span m="965530">can</span> <span m="965690">give</span>
  <span m="965840">you</span> <span m="965940">a</span> <span
  m="965990">sequence</span> <span m="966360">of</span> <span
  m="966460">roots.</span> <span m="966700">This</span> <span
  m="966910">is</span> <span m="967070">the</span> <span
  m="967160">fundamental</span> <span m="967670">theorem</span> <span
  m="967930">of</span> <span m="968030">algebra</span> <span
  m="968420">that</span> <span m="968590">every</span> <span
  m="969360">polynomial</span> <span m="970280">is</span> <span
  m="970490">uniquely</span> <span m="971030">determined</span> <span
  m="971590">by</span> <span m="971840">its</span> <span m="972320">set</span>
  <span m="972590">of</span> <span m="972700">roots.</span> <span
  m="972980">If</span> <span m="973120">you</span> <span m="973350">allow</span>
  <span m="973690">roots</span> <span m="973910">with</span> <span
  m="974020">multiplicity</span> <span m="975390">then</span> <span
  m="975680">every</span> <span m="976070">polynomial</span> <span
  m="976365">of</span> <span m="976660">degree</span> <span m="976940">n</span>
  <span m="977090">has</span> <span m="977320">exactly</span> <span
  m="978130">n</span> <span m="978410">roots.</span> <span m="979420">So,</span>
  <span m="979750">this</span> <span m="979940">would</span> <span
  m="980030">be</span> <span m="980170">some</span> <span
  m="980400">sequence</span> <span m="980950">of</span> <span
  m="982195">r1</span> <span m="982690">up</span> <span m="982955">to</span>
  <span m="984530">rn</span> <span m="985360">minus</span> <span
  m="985740">1,</span> <span m="987730">and</span> <span m="987960">the</span>
  <span m="988030">polynomial</span> <span m="988660">would</span> <span
  m="988800">be</span> <span m="988920">given</span> <span
  m="989270">as--</span> <span m="989510">you</span> <span
  m="989610">actually</span> <span m="989810">need</span> <span
  m="990070">a</span> <span m="990170">constant</span> <span
  m="991250">multiplier--</span> <span m="991940">but</span> <span
  m="992750">x</span> <span m="993000">minus</span> <span m="993330">r0,</span>
  <span m="994360">x</span> <span m="994590">minus</span> <span
  m="994990">r1.</span> <span m="996920">That</span> <span
  m="997100">would</span> <span m="997240">be</span> <span
  m="998370">polynomial.</span> <span m="999800">The</span> <span
  m="999890">trouble</span> <span m="1000240">with</span> <span
  m="1000420">roots</span> <span m="1001000">is</span> <span
  m="1001230">that</span> <span m="1001330">if</span> <span m="1001470">I</span>
  <span m="1001530">give</span> <span m="1001780">you</span> <span
  m="1001990">a</span> <span m="1002070">coefficient</span> <span
  m="1002580">vector</span> <span m="1003280">and</span> <span
  m="1003470">I</span> <span m="1003510">want</span> <span m="1003690">to</span>
  <span m="1003760">compute</span> <span m="1004090">the</span> <span
  m="1004190">roots,</span> <span m="1005290">not</span> <span
  m="1005510">only</span> <span m="1005700">is</span> <span
  m="1005790">it</span> <span m="1005870">hard</span> <span
  m="1006160">to</span> <span m="1006200">do,</span> <span
  m="1006370">it's</span> <span m="1006530">impossible</span> <span
  m="1007240">to</span> <span m="1007360">do</span> <span m="1007940">in</span>
  <span m="1008120">our</span> <span m="1008230">model.</span> <span
  m="1008620">If</span> <span m="1008710">you're</span> <span
  m="1008870">only</span> <span m="1009120">allowed</span> <span
  m="1009410">to</span> <span m="1009580">add,</span> <span
  m="1010190">subtract,</span> <span m="1010680">multiply,</span> <span
  m="1011020">divide,</span> <span m="1011550">take</span> <span
  m="1011710">square</span> <span m="1011980">roots,</span> <span
  m="1012290">take</span> <span m="1012890">k-th</span> <span
  m="1013130">roots,</span> <span m="1014340">there</span> <span
  m="1014660">is</span> <span m="1014760">no</span> <span m="1015080">way</span>
  <span m="1015290">to</span> <span m="1015400">solve</span> <span
  m="1015720">a</span> <span m="1015780">polynomial</span> <span
  m="1016520">of</span> <span m="1017540">degree</span> <span
  m="1017770">5</span> <span m="1018130">or</span> <span
  m="1018250">larger.</span> <span m="1018930">There's</span> <span
  m="1019090">the</span> <span m="1019250">quadratic</span> <span
  m="1019660">formula,</span> <span m="1020440">cubic</span> <span
  m="1020680">formula,</span> <span m="1021110">quartic</span> <span
  m="1021460">formula.</span> <span m="1021690">There</span> <span
  m="1021960">is</span> <span m="1022070">no</span> <span
  m="1022220">quintic</span> <span m="1022570">formula.</span> <span
  m="1023060">That's an</span> <span m="1023140">old</span> <span
  m="1023830">result.</span> <span m="1024130">1800s.</span></p><p><span
  m="1025250">So,</span> <span m="1026369">going</span> <span
  m="1026650">from</span> <span m="1026819">coefficient</span> <span
  m="1027300">vector</span> <span m="1027579">to</span> <span
  m="1027670">roots</span> <span m="1028420">takes</span> <span
  m="1028740">infinite</span> <span m="1029160">time.</span> <span
  m="1030119">It's</span> <span m="1030310">not</span> <span
  m="1030490">so</span> <span m="1030619">good.</span> <span
  m="1031530">And,</span> <span m="1031640">in</span> <span
  m="1031730">particular,</span> <span m="1032380">if</span> <span
  m="1032480">we</span> <span m="1032579">think</span> <span
  m="1032680">about</span> <span m="1033020">our</span> <span
  m="1033260">operations,</span> <span m="1034859">addition</span> <span
  m="1035660">becomes</span> <span m="1036069">really</span> <span
  m="1036290">difficult.</span> <span m="1038000">Multiplication</span> <span
  m="1038700">is</span> <span m="1038829">easy</span> <span
  m="1039150">if</span> <span m="1039290">I</span> <span m="1039359">have</span>
  <span m="1039640">two</span> <span m="1041619">polynomials</span> <span
  m="1042210">represented</span> <span m="1042720">as</span> <span
  m="1042859">a</span> <span m="1042910">sequence</span> <span
  m="1043220">of</span> <span m="1043339">roots.</span> <span
  m="1043579">I</span> <span m="1043650">want</span> <span m="1043819">to</span>
  <span m="1043859">multiply</span> <span m="1044329">them.</span> <span
  m="1044540">That's</span> <span m="1044780">just</span> <span
  m="1045069">concatenating</span> <span m="1045819">the</span> <span
  m="1045910">vectors--</span> <span m="1047540">taking</span> <span
  m="1047780">union</span> <span m="1048630">the</span> <span
  m="1048720">vectors</span> <span m="1049750">of</span> <span
  m="1050010">their</span> <span m="1050380">root</span> <span
  m="1050990">lists.</span> <span m="1051790">So</span> <span
  m="1051910">that's</span> <span m="1052100">cool.</span> <span m="1052300">I'm
  multiplying</span> <span m="1052760">the</span> <span m="1052840">c's,</span>
  <span m="1053190">I</span> <span m="1053240">guess.</span> <span
  m="1054150">But</span> <span m="1054340">addition</span> <span
  m="1054790">is</span> <span m="1054920">really</span> <span
  m="1055160">hard</span> <span m="1055450">because</span> <span
  m="1055740">addition</span> <span m="1056190">is</span> <span
  m="1056320">sort</span> <span m="1056540">of</span> <span
  m="1056650">fundamentally</span> <span m="1057440">about</span> <span
  m="1057710">coefficient</span> <span m="1058220">vectors.</span> <span
  m="1059670">And</span> <span m="1059850">then,</span> <span
  m="1061340">once</span> <span m="1061610">you</span> <span
  m="1061710">go</span> <span m="1061910">there--</span> <span
  m="1062430">you</span> <span m="1062580">can</span> <span
  m="1062700">go</span> <span m="1062860">from</span> <span
  m="1063080">roots</span> <span m="1063320">to</span> <span
  m="1063420">coefficient</span> <span m="1063850">vectors</span> <span
  m="1064200">and</span> <span m="1064290">add</span> <span
  m="1064450">them</span> <span m="1064590">up,</span> <span
  m="1064830">but</span> <span m="1064990">then</span> <span
  m="1065130">there's</span> <span m="1065310">no</span> <span
  m="1065480">relation</span> <span m="1065870">between</span> <span
  m="1066180">the</span> <span m="1066320">roots</span> <span
  m="1066640">of</span> <span m="1066940">the</span> <span
  m="1067450">sum</span> <span m="1067850">of</span> <span
  m="1068010">the</span> <span m="1068090">polynomials</span> <span
  m="1068640">versus</span> <span m="1068940">the</span> <span m="1069030">roots
  of the</span> <span m="1069520">original.</span> <span m="1072330">I</span>
  <span m="1072430">don't</span> <span m="1072540">know</span> <span
  m="1072620">for</span> <span m="1072760">sure</span> <span
  m="1072940">that</span> <span m="1073060">that's</span> <span
  m="1073300">impossible.</span> <span m="1073850">It's</span> <span
  m="1073960">definitely</span> <span m="1074260">very,</span> <span
  m="1074640">very</span> <span m="1074750">hard,</span> <span
  m="1075760">probably</span> <span m="1076220">impossible.</span></p><p><span
  m="1082200">Let</span> <span m="1082390">me</span> <span
  m="1082510">draw</span> <span m="1082740">a</span> <span
  m="1082770">little</span> <span m="1082980">table.</span> <span
  m="1084940">Each</span> <span m="1085110">of</span> <span
  m="1085160">these</span> <span m="1085320">representations</span> <span
  m="1086210">has</span> <span m="1087140">some</span> <span
  m="1087520">advantages</span> <span m="1088170">and</span> <span
  m="1088560">a</span> <span m="1088630">disadvantage</span> <span
  m="1090270">in</span> <span m="1090410">terms</span> <span
  m="1090750">of</span> <span m="1090960">these</span> <span
  m="1091170">three</span> <span m="1091370">operations.</span> <span
  m="1092700">So,</span> <span m="1093090">on</span> <span
  m="1093340">the</span> <span m="1093460">one</span> <span
  m="1093720">hand,</span> <span m="1094700">we</span> <span
  m="1094870">have</span> <span m="1097370">the</span> <span
  m="1098050">algorithms</span> <span m="1098670">we</span> <span
  m="1098980">care</span> <span m="1099240">about--</span> <span
  m="1102360">evaluation,</span> <span m="1107910">addition,</span> <span
  m="1109570">and</span> <span m="1109810">multiplication--</span> <span
  m="1118790">and</span> <span m="1119350">on</span> <span
  m="1119580">the</span> <span m="1119700">other</span> <span
  m="1119860">axis</span> <span m="1120300">we</span> <span
  m="1120420">have</span> <span m="1120840">our</span> <span
  m="1121170">representations,</span> <span m="1122100">which</span> <span
  m="1122400">are</span> <span m="1123370">coefficient</span> <span
  m="1124070">vectors,</span> <span m="1127950">roots,</span> <span
  m="1131490">and</span> <span m="1131770">samples.</span> <span
  m="1132310">You'll</span> <span m="1132420">see</span> <span
  m="1132600">why</span> <span m="1132750">I</span> <span
  m="1132820">chose</span> <span m="1133090">this</span> <span
  m="1133220">order</span> <span m="1133590">in</span> <span
  m="1133670">a</span> <span m="1133700">moment.</span> <span
  m="1133990">It</span> <span m="1134060">makes</span> <span
  m="1134290">for</span> <span m="1134410">a</span> <span
  m="1134460">nice,</span> <span m="1134690">pretty</span> <span
  m="1134930">matrix.</span> <span m="1143950">We've</span> <span
  m="1144100">talked</span> <span m="1144340">about</span> <span
  m="1144530">almost</span> <span m="1145000">every</span> <span
  m="1145310">cell</span> <span m="1145700">in</span> <span
  m="1145840">this</span> <span m="1145990">matrix,</span> <span
  m="1147260">but</span> <span m="1147320">let</span> <span
  m="1147480">me</span> <span m="1147580">just</span> <span
  m="1147780">summarize.</span></p><p><span m="1148950">We</span> <span
  m="1149040">started</span> <span m="1149430">out</span> <span
  m="1149600">just</span> <span m="1149780">thinking</span> <span
  m="1150090">about</span> <span m="1151010">coefficient</span> <span
  m="1151520">vector,</span> <span m="1152310">and</span> <span
  m="1152730">evaluation</span> <span m="1153510">was</span> <span
  m="1153770">linear</span> <span m="1154070">time.</span> <span
  m="1156320">Addition</span> <span m="1156830">was</span> <span
  m="1157010">linear</span> <span m="1157310">time.</span> <span
  m="1158600">Multiplication,</span> <span m="1159480">so</span> <span
  m="1159730">far,</span> <span m="1160020">was</span> <span
  m="1160130">quadratic,</span> <span m="1160760">although</span> <span
  m="1160980">our</span> <span m="1161200">goal</span> <span
  m="1162000">is</span> <span m="1162160">to</span> <span
  m="1162260">make</span> <span m="1162470">n</span> <span
  m="1162600">log</span> <span m="1162840">n.</span> <span
  m="1163820">For</span> <span m="1165370">roots,</span> <span
  m="1166980">I</span> <span m="1167090">just</span> <span
  m="1167250">said</span> <span m="1167460">multiplication</span> <span
  m="1168100">is</span> <span m="1168220">easy.</span> <span
  m="1168670">That's</span> <span m="1168810">linear</span> <span
  m="1169100">time,</span> <span m="1169770">addition</span> <span
  m="1170330">is</span> <span m="1170580">really</span> <span
  m="1170830">hard--</span> <span m="1174381">like,</span> <span
  m="1174830">infinite</span> <span m="1175240">time--</span> <span
  m="1176620">and</span> <span m="1177880">evaluation,</span> <span
  m="1178920">I</span> <span m="1179050">guess</span> <span
  m="1179270">that's</span> <span m="1180150">linear</span> <span
  m="1180460">time.</span> <span m="1181910">In</span> <span
  m="1182000">fact,</span> <span m="1182360">the</span> <span
  m="1182460">way</span> <span m="1182530">it's</span> <span
  m="1182740">written,</span> <span m="1183320">you</span> <span
  m="1183380">only</span> <span m="1183560">have</span> <span
  m="1183800">a</span> <span m="1183840">linear</span> <span
  m="1184120">number</span> <span m="1184460">of</span> <span
  m="1184540">subtractions</span> <span m="1185070">and</span> <span
  m="1185200">multiplications,</span> <span m="1185980">so</span> <span
  m="1186530">it's</span> <span m="1186620">really</span> <span
  m="1186800">easy</span> <span m="1187010">to</span> <span
  m="1187130">evaluate.</span></p><p><span m="1189330">And</span> <span
  m="1189610">then</span> <span m="1189800">sample</span> <span
  m="1190360">vectors--</span> <span m="1190840">we</span> <span
  m="1190940">haven't</span> <span m="1191170">talked</span> <span
  m="1191920">much</span> <span m="1192150">about</span> <span
  m="1192420">that.</span> <span m="1195100">The</span> <span
  m="1195210">idea</span> <span m="1195460">is,</span> <span
  m="1195580">suppose</span> <span m="1195950">you're</span> <span
  m="1196060">given</span> <span m="1196570">two</span> <span
  m="1196820">polynomials</span> <span m="1197990">with</span> <span
  m="1198160">the</span> <span m="1198260">same</span> <span
  m="1198880">xk's.</span> <span m="1199840">We're</span> <span
  m="1199960">going</span> <span m="1200070">to</span> <span
  m="1200120">fix</span> <span m="1200480">xk's.</span> <span m="1200980">All we
  need</span> <span m="1201250">is</span> <span m="1201510">that</span> <span
  m="1201600">they're</span> <span m="1201720">distinct.</span> <span
  m="1202290">So</span> <span m="1202340">xk</span> <span
  m="1202770">could</span> <span m="1202930">equal</span> <span
  m="1203230">k,</span> <span m="1203590">for</span> <span
  m="1203720">example,</span> <span m="1204650">just</span> <span
  m="1205000">a</span> <span m="1205070">bunch</span> <span
  m="1205300">of</span> <span m="1205380">integers.</span> <span
  m="1206230">And</span> <span m="1206380">then</span> <span
  m="1206510">we</span> <span m="1206880">are</span> <span
  m="1207330">told</span> <span m="1208490">what</span> <span
  m="1208810">polynomial</span> <span m="1209360">a</span> <span
  m="1209570">evaluates</span> <span m="1210270">to</span> <span
  m="1210540">at</span> <span m="1210730">every</span> <span
  m="1210970">xk,</span> <span m="1211400">and we're</span> <span
  m="1211540">told what</span> <span m="1211850">polynomial</span> <span
  m="1212330">b</span> <span m="1212560">evaluates</span> <span
  m="1213350">to</span> <span m="1213650">at</span> <span
  m="1213800">every</span> <span m="1214040">xk.</span></p><p><span
  m="1214940">So,</span> <span m="1215120">we're</span> <span
  m="1215200">given</span> <span m="1215430">some</span> <span
  m="1215630">yk's</span> <span m="1216180">and</span> <span
  m="1216250">some</span> <span m="1216580">zk's,</span> <span
  m="1218300">and</span> <span m="1218530">then</span> <span
  m="1218670">we</span> <span m="1218790">want</span> <span
  m="1218940">to</span> <span m="1219030">compute,</span> <span
  m="1219460">say,</span> <span m="1219920">the</span> <span
  m="1220820">sum</span> <span m="1221580">or</span> <span
  m="1222660">the</span> <span m="1222950">product</span> <span
  m="1223510">of</span> <span m="1223650">those</span> <span
  m="1223860">two</span> <span m="1223970">vectors.</span> <span
  m="1224850">What</span> <span m="1224980">do</span> <span
  m="1225030">we</span> <span m="1225150">do?</span> <span
  m="1226580">Just</span> <span m="1227010">add</span> <span
  m="1227360">or</span> <span m="1227470">multiply</span> <span
  m="1227980">the</span> <span m="1228110">corresponding</span> <span
  m="1229810">yk</span> <span m="1230070">and</span> <span
  m="1230510">zk's,</span> <span m="1232030">because</span> <span
  m="1232460">if</span> <span m="1233180">we're</span> <span
  m="1233310">told</span> <span m="1234550">we</span> <span
  m="1234720">want</span> <span m="1235710">c</span> <span m="1235950">of</span>
  <span m="1236020">x</span> <span m="1236290">to</span> <span
  m="1236360">equal</span> <span m="1236710">a</span> <span
  m="1236800">of</span> <span m="1236910">x</span> <span
  m="1237120">times</span> <span m="1237470">b</span> <span
  m="1237640">of</span> <span m="1237730">x,</span> <span m="1238040">or</span>
  <span m="1238120">c</span> <span m="1238280">of</span> <span
  m="1238350">x</span> <span m="1238560">to equal</span> <span
  m="1238910">a</span> <span m="1239060">of</span> <span m="1239160">x</span>
  <span m="1239390">plus</span> <span m="1239680">b</span> <span
  m="1239820">of</span> <span m="1239890">x</span> <span m="1240080">for</span>
  <span m="1240240">all</span> <span m="1240450">x,</span> <span
  m="1241160">Well,</span> <span m="1241320">now</span> <span
  m="1241530">we</span> <span m="1241620">know</span> <span
  m="1241760">what</span> <span m="1241880">x's</span> <span
  m="1242280">we</span> <span m="1242290">care</span> <span
  m="1242530">about.</span> <span m="1242760">We</span> <span
  m="1242870">just</span> <span m="1243050">do</span> <span
  m="1243200">it</span> <span m="1243300">at</span> <span m="1243430">the</span>
  <span m="1243540">xk's.</span> <span m="1244600">That's</span> <span
  m="1244780">what</span> <span m="1244850">we're</span> <span
  m="1244970">told</span> <span m="1245310">for a</span> <span m="1245645">and
  for</span> <span m="1245980">b,</span> <span m="1246590">and</span> <span
  m="1246810">so</span> <span m="1247020">to</span> <span
  m="1247120">compute</span> <span m="1248160">c</span> <span
  m="1248600">of</span> <span m="1248710">xk</span> <span
  m="1249320">it's</span> <span m="1249520">just</span> <span
  m="1249820">the</span> <span m="1250090">sum or</span> <span
  m="1250460">the</span> <span m="1250580">product</span> <span
  m="1251000">of</span> <span m="1251180">yk</span> <span m="1251350">and</span>
  <span m="1251650">zk.</span></p><p><span m="1253290">So</span> <span
  m="1253450">multiplication</span> <span m="1254110">is</span> <span
  m="1254220">really</span> <span m="1254470">easy</span> <span
  m="1255310">in</span> <span m="1255530">the</span> <span
  m="1255590">sample</span> <span m="1255970">view,</span> <span
  m="1256180">and</span> <span m="1256290">this</span> <span
  m="1256450">is</span> <span m="1256610">why</span> <span m="1257420">we</span>
  <span m="1257600">are</span> <span m="1257680">going</span> <span
  m="1257920">to</span> <span m="1258090">use</span> <span
  m="1258570">this</span> <span m="1258810">view.</span> <span
  m="1259460">We're</span> <span m="1259600">also</span> <span
  m="1259880">going</span> <span m="1260100">to</span> <span
  m="1260220">use</span> <span m="1260350">this</span> <span
  m="1260610">view</span> <span m="1261350">because,</span> <span
  m="1261740">as</span> <span m="1261880">we'll</span> <span
  m="1261980">see,</span> <span m="1262270">there's</span> <span
  m="1262400">a</span> <span m="1262470">problem.</span> <span
  m="1264270">Addition</span> <span m="1264900">is</span> <span
  m="1265080">easy,</span> <span m="1266160">multiplication</span> <span
  m="1266880">is</span> <span m="1267090">easy,</span> <span
  m="1268800">evaluation</span> <span m="1270580">is</span> <span
  m="1270790">annoying.</span> <span m="1273130">I</span> <span
  m="1273260">can</span> <span m="1273450">evaluate</span> <span
  m="1276080">a</span> <span m="1276190">of</span> <span m="1276280">x</span>
  <span m="1276570">at</span> <span m="1276760">xk</span> <span
  m="1277530">for</span> <span m="1277830">any</span> <span
  m="1278130">k,</span> <span m="1279010">but</span> <span m="1279150">I</span>
  <span m="1279200">can't</span> <span m="1279480">evaluate</span> <span
  m="1280030">it</span> <span m="1280220">at</span> <span
  m="1280710">some</span> <span m="1281130">arbitrary</span> <span
  m="1281700">value</span> <span m="1282010">of</span> <span
  m="1282100">x.</span> <span m="1283880">That's</span> <span
  m="1284860">annoying.</span> <span m="1285500">I'm</span> <span
  m="1285630">told</span> <span m="1286060">at</span> <span
  m="1286150">these</span> <span m="1286340">finite</span> <span
  m="1286690">sample</span> <span m="1286970">points,</span> <span
  m="1287210">but</span> <span m="1287320">now</span> <span m="1287440">I</span>
  <span m="1287540">have</span> <span m="1287700">to</span> <span
  m="1287820">somehow</span> <span m="1288010">interpolate.</span> <span
  m="1289100">This is</span> <span m="1289260">called</span> <span
  m="1289460">polynomial</span> <span m="1289920">interpolation,</span> <span
  m="1291170">well</span> <span m="1291360">studied</span> <span
  m="1291740">in</span> <span m="1291970">numerical</span> <span
  m="1292360">analysis</span> <span m="1292880">and</span> <span
  m="1292950">so</span> <span m="1293080">on.</span> <span
  m="1293620">You</span> <span m="1293750">can</span> <span
  m="1293860">do</span> <span m="1294110">it,</span> <span
  m="1295430">but</span> <span m="1296940">it</span> <span
  m="1297150">takes</span> <span m="1297380">quadratic</span> <span
  m="1297820">time,</span> <span m="1298110">in</span> <span
  m="1298170">general.</span> <span m="1298960">The</span> <span
  m="1299270">best</span> <span m="1299540">known</span> <span
  m="1299700">algorithms</span> <span m="1300260">are</span> <span
  m="1300410">quadratic.</span> <span m="1303890">So,</span> <span
  m="1305870">this</span> <span m="1306200">is</span> <span
  m="1306330">bad,</span> <span m="1308020">this</span> <span
  m="1308270">is</span> <span m="1308390">bad,</span> <span
  m="1309370">and</span> <span m="1309700">this</span> <span
  m="1309900">is</span> <span m="1310000">bad,</span> <span
  m="1312020">so</span> <span m="1313300">no</span> <span
  m="1313610">representation</span> <span m="1314260">is</span> <span
  m="1314390">perfect.</span> <span m="1316380">Life</span> <span
  m="1316590">sucks.</span></p><p><span m="1319100">What</span> <span
  m="1319260">we'd</span> <span m="1319410">like</span> <span
  m="1319650">is</span> <span m="1319790">to</span> <span m="1319930">get</span>
  <span m="1320210">the</span> <span m="1320290">best--</span> <span
  m="1320700">now</span> <span m="1320870">this</span> <span
  m="1321100">one</span> <span m="1321300">is</span> <span
  m="1321420">really</span> <span m="1321690">hard</span> <span
  m="1321900">to</span> <span m="1321970">work</span> <span
  m="1322200">with</span> <span m="1322390">because</span> <span
  m="1322700">converting</span> <span m="1323110">inter</span> <span
  m="1323330">roots</span> <span m="1324880">is</span> <span
  m="1325100">impossible</span> <span m="1326270">in</span> <span
  m="1326930">an</span> <span m="1327040">arithmetic</span> <span
  m="1327510">model,</span> <span m="1328210">so</span> <span
  m="1328650">we're</span> <span m="1328820">going</span> <span
  m="1328930">to</span> <span m="1329000">focus</span> <span
  m="1329460">on</span> <span m="1330140">column</span> <span
  m="1330540">A</span> <span m="1330870">and</span> <span
  m="1331200">column</span> <span m="1331530">C.</span> <span
  m="1332230">We</span> <span m="1332340">kind</span> <span
  m="1332610">of</span> <span m="1332660">like</span> <span
  m="1332830">to</span> <span m="1332920">take</span> <span
  m="1333150">the</span> <span m="1333700">min</span> <span
  m="1334230">of</span> <span m="1334400">those</span> <span
  m="1334620">two</span> <span m="1334790">columns.</span> <span
  m="1335860">We</span> <span m="1335960">won't</span> <span
  m="1336090">quite</span> <span m="1336470">get</span> <span
  m="1336660">that.</span> <span m="1337440">What</span> <span
  m="1337670">we</span> <span m="1337820">will</span> <span
  m="1338310">get</span> <span m="1338650">is</span> <span m="1338940">an</span>
  <span m="1339390">algorithm</span> <span m="1339870">for</span> <span
  m="1340030">converting</span> <span m="1340620">between</span> <span
  m="1341170">these</span> <span m="1341350">two</span> <span
  m="1341480">representations</span> <span m="1342980">in</span> <span
  m="1343160">n</span> <span m="1343330">log</span> <span m="1343580">n</span>
  <span m="1343720">time--</span> <span m="1345710">it's</span> <span
  m="1345800">not</span> <span m="1345950">quite</span> <span
  m="1346190">linear,</span> <span m="1346510">but</span> <span
  m="1346660">close--</span> <span m="1348110">and</span> <span
  m="1348580">once</span> <span m="1348810">we</span> <span
  m="1348910">can</span> <span m="1349030">do</span> <span
  m="1349130">that,</span> <span m="1349400">if</span> <span
  m="1349550">we</span> <span m="1349630">want</span> <span
  m="1349820">to</span> <span m="1349870">multiply</span> <span
  m="1350930">two</span> <span m="1351080">things</span> <span
  m="1351420">in</span> <span m="1351550">the</span> <span
  m="1351650">coefficient</span> <span m="1352200">land</span> <span
  m="1352840">we</span> <span m="1352970">can</span> <span
  m="1353080">convert</span> <span m="1353490">to</span> <span
  m="1353580">sample</span> <span m="1353940">land,</span> <span
  m="1355090">do</span> <span m="1355250">it</span> <span m="1355330">in</span>
  <span m="1355430">linear</span> <span m="1355680">time,</span> <span
  m="1355970">and</span> <span m="1356050">then</span> <span
  m="1356170">convert</span> <span m="1356520">back.</span> <span
  m="1358070">So</span> <span m="1359170">that's</span> <span
  m="1359470">the</span> <span m="1360070">magical</span> <span
  m="1360530">transformation</span> <span m="1361230">we're</span> <span
  m="1361370">going</span> <span m="1361600">to</span> <span
  m="1361770">cover,</span> <span m="1362610">and</span> <span
  m="1362750">it</span> <span m="1362850">is</span> <span
  m="1363010">called</span> <span m="1363280">the</span> <span
  m="1363360">fast</span> <span m="1363690">Fourier</span> <span
  m="1364020">transfer.</span></p><p><span m="1364360">Fast</span> <span
  m="1364570">Fourier</span> <span m="1364770">transform</span> <span
  m="1365210">is</span> <span m="1365310">the</span> <span
  m="1365440">algorithm.</span> <span m="1366390">Discrete</span> <span
  m="1366770">Fourier</span> <span m="1367090">transform</span> <span
  m="1367580">is</span> <span m="1367780">that</span> <span
  m="1368070">transformation</span> <span m="1369840">mathematically.</span>
  <span m="1373172">Cool.</span> <span m="1374150">So</span> <span
  m="1374480">the</span> <span m="1374640">whole</span> <span
  m="1374910">name</span> <span m="1375120">of</span> <span
  m="1375180">the</span> <span m="1375270">game</span> <span
  m="1375580">is</span> <span m="1375710">converting</span> <span
  m="1376990">from</span> <span m="1377180">coefficient</span> <span
  m="1378080">representation</span> <span m="1378770">to</span> <span
  m="1378870">samples,</span> <span m="1379860">or</span> <span
  m="1380070">vice</span> <span m="1380350">versa.</span> <span
  m="1380720">Turns</span> <span m="1380980">out</span> <span
  m="1381110">they're</span> <span m="1381250">almost</span> <span
  m="1381570">the</span> <span m="1381640">same,</span> <span
  m="1382180">though</span> <span m="1382270">that</span> <span
  m="1382470">won't</span> <span m="1382650">be</span> <span
  m="1382780">obvious</span> <span m="1383190">for</span> <span
  m="1383420">a</span> <span m="1383470">long</span> <span
  m="1383750">time--</span> <span m="1384150">till</span> <span
  m="1384490">the</span> <span m="1384620">end</span> <span
  m="1384810">of</span> <span m="1384880">the</span> <span
  m="1385300">class.</span> <span m="1385920">Any</span> <span
  m="1386030">questions</span> <span m="1386450">before</span> <span
  m="1386790">we</span> <span m="1387430">proceed?</span> <span
  m="1388834">Yeah.</span></p><p><span m="1389808">AUDIENCE: [INAUDIBLE]</span>
  <span m="1390295">multiply</span> <span m="1391270">repetitions,</span> <span
  m="1391680">why</span> <span m="1391940">not</span> <span
  m="1392120">we</span> <span m="1392612">evaluate</span> <span
  m="1393104">a</span> <span m="1393596">and b</span> <span
  m="1394088">first</span> <span m="1394580">then</span> <span
  m="1395072">multiply?</span></p><p><span m="1395564">ERIK DEMAINE: Ah.</span>
  <span m="1396550">So,</span> <span m="1397770">OK,</span> <span
  m="1398020">the</span> <span m="1398100">question</span> <span
  m="1398450">is,</span> <span m="1400120">if</span> <span m="1400310">I</span>
  <span m="1400380">want</span> <span m="1400700">to--</span> <span
  m="1401570">we'll</span> <span m="1401790">get</span> <span
  m="1401990">there</span> <span m="1402160">in</span> <span
  m="1402230">a</span> <span m="1402290">second--</span> <span
  m="1402730">but</span> <span m="1402900">if</span> <span m="1403110">I</span>
  <span m="1403210">want</span> <span m="1403410">to</span> <span
  m="1403460">multiply,</span> <span m="1404740">and</span> <span
  m="1404960">it's</span> <span m="1405110">so</span> <span
  m="1405280">easy</span> <span m="1405530">to</span> <span
  m="1405610">do</span> <span m="1405740">in</span> <span
  m="1405850">sample</span> <span m="1406180">land,</span> <span m="1406400">why
  don't</span> <span m="1406620">I</span> <span m="1406730">just</span> <span
  m="1406920">sample</span> <span m="1407390">a and</span> <span
  m="1407670">b</span> <span m="1408480">and</span> <span
  m="1408650">then</span> <span m="1408810">multiply</span> <span
  m="1409230">them?</span> <span m="1409550">That's</span> <span
  m="1409920">right,</span> <span m="1410840">but</span> <span m="1411030">[?
  effect ?]</span> <span m="1411350">sampling</span> <span m="1411730">is</span>
  <span m="1411910">not</span> <span m="1412150">so</span> <span
  m="1412300">easy.</span> <span m="1412690">It</span> <span
  m="1412810">takes</span> <span m="1413000">quadratic</span> <span
  m="1413420">time.</span> <span m="1414520">Let's</span> <span
  m="1415100">go</span> <span m="1415260">there</span> <span
  m="1415420">now.</span></p><p><span m="1423290">Because</span> <span
  m="1423470">we</span> <span m="1423560">have</span> <span m="1423690">n</span>
  <span m="1423910">samples</span> <span m="1424350">to</span> <span
  m="1424450">do,</span> <span m="1424660">each</span> <span
  m="1424880">one</span> <span m="1425150">will cost</span> <span
  m="1425950">linear</span> <span m="1426230">time.</span> <span
  m="1427950">Remember,</span> <span m="1428180">to</span> <span
  m="1428370">evaluate</span> <span m="1428930">a</span> <span
  m="1428980">polynomial</span> <span m="1429520">takes</span> <span
  m="1429770">linear</span> <span m="1430070">time.</span> <span
  m="1431160">If</span> <span m="1431300">you</span> <span
  m="1431440">want</span> <span m="1431610">to</span> <span
  m="1431680">think</span> <span m="1431910">of</span> <span
  m="1432010">it</span> <span m="1432190">in</span> <span m="1432430">a</span>
  <span m="1432840">matrix--</span> <span m="1433600">let's</span> <span
  m="1433690">enter</span> <span m="1433990">the</span> <span
  m="1434120">matrix--</span> <span m="1437210">then</span> <span
  m="1438430">we</span> <span m="1438630">get</span> <span m="1440030">a</span>
  <span m="1440150">big</span> <span m="1440380">matrix.</span> <span
  m="1453920">So</span> <span m="1454130">we're</span> <span
  m="1454240">given</span> <span m="1454540">the</span> <span
  m="1454730">xi's</span> <span m="1456000">and</span> <span
  m="1456220">we</span> <span m="1456320">just</span> <span
  m="1456510">want</span> <span m="1456640">to</span> <span
  m="1456680">evaluate</span> <span m="1457360">a</span> <span
  m="1457410">given</span> <span m="1457690">polynomial</span> <span
  m="1459310">whose</span> <span m="1459500">coefficients</span> <span
  m="1460120">are</span> <span m="1460200">given</span> <span
  m="1460510">by</span> <span m="1461280">a0,</span> <span
  m="1461745">a1,</span> <span m="1463020">a2,</span> <span
  m="1465560">and</span> <span m="1465880">minus</span> <span
  m="1466160">1.</span> <span m="1467060">Our</span> <span
  m="1467160">goal</span> <span m="1467460">is</span> <span
  m="1467610">to</span> <span m="1467710">compute</span> <span
  m="1468220">the</span> <span m="1468430">yi's--</span> <span
  m="1469170">y0,</span> <span m="1470300">y1,</span> <span
  m="1471710">y2,</span> <span m="1473310">to</span> <span m="1473720">yn</span>
  <span m="1474110">minus</span> <span m="1474420">1--</span> <span
  m="1476350">and</span> <span m="1476900">if</span> <span
  m="1477090">you</span> <span m="1477220">know</span> <span m="1477400">a
  matrix-vector</span> <span m="1478140">product,</span> <span
  m="1478880">you</span> <span m="1478980">take</span> <span
  m="1479210">this</span> <span m="1479460">row</span> <span
  m="1480230">with</span> <span m="1480390">that</span> <span
  m="1480600">column.</span> <span m="1481020">You</span> <span
  m="1481090">take</span> <span m="1481280">the</span> <span
  m="1481370">dot</span> <span m="1481580">product</span> <span
  m="1481970">that</span> <span m="1482160">multiplies</span> <span
  m="1482640">corresponding</span> <span m="1483180">entries.</span> <span
  m="1484110">You</span> <span m="1484260">get</span> <span
  m="1484610">y0.</span> <span m="1485130">That</span> <span
  m="1485320">is</span> <span m="1485530">the</span> <span
  m="1485620">definition</span> <span m="1486190">of</span> <span
  m="1486310">the</span> <span m="1486420">polynomial</span> <span
  m="1486910">evaluation.</span> <span m="1487960">I'm</span> <span
  m="1488070">just</span> <span m="1488230">going</span> <span
  m="1488360">to</span> <span m="1488450">write</span> <span
  m="1488750">a</span> <span m="1488800">bunch</span> <span
  m="1489110">of</span> <span m="1489230">these</span> <span
  m="1489460">rows</span> <span m="1491395">so you get the</span> <span
  m="1491850">pattern.</span> <span m="1498527">Pretty</span> <span
  m="1500860">simple.</span> <span m="1509580">This</span> <span
  m="1509890">is</span> <span m="1510080">called</span> <span
  m="1511040">the</span> <span m="1512140">Vandermonde</span> <span
  m="1512880">matrix.</span> <span m="1520560">I'll call it</span> <span
  m="1520900">V.</span> <span m="1523140">And</span> <span m="1523360">in</span>
  <span m="1523460">general--</span> <span m="1525485">I don't</span> <span
  m="1525970">have room</span> <span m="1526310">for</span> <span
  m="1526550">it,</span> <span m="1526790">so let me go--</span></p><p><span
  m="1540560">In</span> <span m="1540750">general,</span> <span
  m="1541250">if</span> <span m="1541350">we</span> <span
  m="1541450">look</span> <span m="1541580">at</span> <span m="1542430">V</span>
  <span m="1542770">ij,</span> <span m="1544100">it's</span> <span
  m="1544270">just--</span> <span m="1545680">sorry.</span> <span
  m="1547260">You</span> <span m="1547780">may</span> <span
  m="1547970">notice</span> <span m="1548430">I'm</span> <span
  m="1548620">not</span> <span m="1548830">using</span> <span
  m="1549120">the</span> <span m="1549200">letter</span> <span
  m="1549430">i.</span> <span m="1549800">We</span> <span
  m="1550030">will</span> <span m="1550180">get</span> <span m="1550380">to
  why</span> <span m="1550640">in a</span> <span m="1550900">moment.</span>
  <span m="1552090">V</span> <span m="1552250">jk.</span> <span
  m="1553860">Row</span> <span m="1554280">j,</span> <span
  m="1554790">column</span> <span m="1555210">k.</span> <span
  m="1555960">That's</span> <span m="1556200">going</span> <span
  m="1556310">to</span> <span m="1556370">be</span> <span m="1556590">x</span>
  <span m="1556950">sub</span> <span m="1557160">j</span> <span
  m="1557630">to</span> <span m="1557940">the</span> <span
  m="1558080">power</span> <span m="1558520">k.</span> <span
  m="1559670">That's</span> <span m="1559920">the</span> <span
  m="1559990">Vandermonde</span> <span m="1560400">matrix.</span> <span
  m="1562710">We</span> <span m="1562800">can</span> <span
  m="1563050">compute</span> <span m="1563520">it</span> <span
  m="1563740">in</span> <span m="1563930">quadratic</span> <span
  m="1564390">time.</span> <span m="1564630">It has</span> <span
  m="1564760">quadratic</span> <span m="1565260">entries.</span> <span
  m="1565640">We</span> <span m="1565760">can</span> <span
  m="1565890">use</span> <span m="1566170">the</span> <span
  m="1566270">trick</span> <span m="1566520">we</span> <span
  m="1567000">suggested</span> <span m="1567320">earlier--</span> <span
  m="1567730">compute</span> <span m="1568050">each</span> <span
  m="1568260">term</span> <span m="1568500">from</span> <span
  m="1568680">the</span> <span m="1568770">previous</span> <span
  m="1569130">one</span> <span m="1570590">by</span> <span
  m="1570780">multiplying</span> <span m="1571420">by</span> <span
  m="1571640">xj--</span> <span m="1574100">and</span> <span
  m="1574230">then</span> <span m="1574360">we</span> <span
  m="1574470">want</span> <span m="1574640">to</span> <span
  m="1574710">compute</span> <span m="1575130">this</span> <span
  m="1575370">matrix-vector</span> <span m="1576700">product,</span> <span
  m="1577910">and</span> <span m="1578140">you</span> <span
  m="1578260">can</span> <span m="1578380">clearly</span> <span
  m="1578680">do</span> <span m="1578850">it</span> <span m="1578960">in</span>
  <span m="1579100">quadratic</span> <span m="1579570">time--</span> <span
  m="1580820">I'm</span> <span m="1580900">just</span> <span
  m="1581470">computing</span> <span m="1581940">each</span> <span
  m="1582420">thing</span> <span m="1582630">correspondingly--</span> <span
  m="1583800">and</span> <span m="1584080">that's</span> <span
  m="1584310">sort</span> <span m="1584590">of</span> <span
  m="1584680">the</span> <span m="1584760">best</span> <span
  m="1585050">you</span> <span m="1585160">can</span> <span
  m="1585310">do</span> <span m="1585490">without</span> <span
  m="1585800">any</span> <span m="1585990">further</span> <span
  m="1586250">assumptions.</span> <span m="1586790">So</span> <span
  m="1586870">this</span> <span m="1587000">takes--</span> <span
  m="1588970">if</span> <span m="1589120">I</span> <span m="1589440">want</span>
  <span m="1589700">to</span> <span m="1589760">compute</span> <span
  m="1590090">this</span> <span m="1590260">product,</span> <span
  m="1590740">that's</span> <span m="1591070">the</span> <span
  m="1592130">coefficients</span> <span m="1594060">to</span> <span
  m="1594230">samples</span> <span m="1595770">problem.</span> <span
  m="1598210">This</span> <span m="1598900">is</span> <span
  m="1599090">the</span> <span m="1599160">same</span> <span
  m="1599480">thing</span> <span m="1600400">as</span> <span
  m="1600770">computing</span> <span m="1601740">V</span> <span
  m="1602570">times</span> <span m="1603780">the</span> <span
  m="1603960">A</span> <span m="1604360">vector,</span> <span
  m="1605860">so</span> <span m="1606020">this</span> <span
  m="1606190">is</span> <span m="1606320">a</span> <span
  m="1606380">matrix-vector</span> <span m="1607100">multiplication,</span>
  <span m="1608440">which</span> <span m="1608600">takes</span> <span
  m="1609870">n</span> <span m="1610050">squared</span> <span
  m="1610410">time.</span> <span m="1614100">OK?</span></p><p><span
  m="1615000">On</span> <span m="1615170">the</span> <span
  m="1615300">other</span> <span m="1615470">hand--</span> <span
  m="1615920">so,</span> <span m="1617180">that's a</span> <span
  m="1617430">problem</span> <span m="1618110">because</span> <span
  m="1618350">we're</span> <span m="1618480">trying</span> <span
  m="1618750">to</span> <span m="1618810">beat</span> <span
  m="1619310">quadratic</span> <span m="1619880">multiplication,</span> <span
  m="1620730">so</span> <span m="1620800">if</span> <span m="1620900">we</span>
  <span m="1621050">spend</span> <span m="1621320">quadratic</span> <span
  m="1621780">time</span> <span m="1621990">to</span> <span
  m="1622060">convert</span> <span m="1622380">over</span> <span
  m="1622580">here</span> <span m="1622880">it doesn't</span> <span
  m="1623040">matter</span> <span m="1623335">if this is</span> <span
  m="1623630">linear</span> <span m="1623940">time.</span> <span
  m="1624740">There are</span> <span m="1624850">two</span> <span
  m="1624990">problems.</span> <span m="1625450">One</span> <span
  m="1625560">is</span> <span m="1625710">that</span> <span
  m="1625920">conversion</span> <span m="1626340">costs</span> <span
  m="1626640">too</span> <span m="1626750">much.</span> <span
  m="1626990">The</span> <span m="1627130">other is</span> <span
  m="1627400">we</span> <span m="1627520">don't</span> <span
  m="1627690">yet</span> <span m="1627850">know</span> <span
  m="1627980">how</span> <span m="1628090">to</span> <span
  m="1628180">convert</span> <span m="1628490">backwards.</span> <span
  m="1629970">But</span> <span m="1630270">this</span> <span
  m="1630510">matrix</span> <span m="1630930">field</span> <span
  m="1631120">gives</span> <span m="1631380">us</span> <span
  m="1631540">also</span> <span m="1631860">the</span> <span
  m="1631990">reverse</span> <span m="1632380">transformation.</span> <span
  m="1633620">If</span> <span m="1633900">we</span> <span
  m="1634010">want</span> <span m="1634200">to</span> <span
  m="1634260">convert</span> <span m="1634690">samples</span> <span
  m="1636620">to</span> <span m="1637210">coefficients,</span> <span
  m="1641310">this</span> <span m="1641680">is--</span> <span
  m="1644350">the</span> <span m="1644500">best</span> <span
  m="1644790">notation</span> <span m="1645220">I</span> <span m="1645290">know
  is</span> <span m="1645740">from</span> <span m="1645940">MATLAB.</span> <span
  m="1646190">How many</span> <span m="1646570">people</span> <span
  m="1646840">know</span> <span m="1646950">MATLAB?</span> <span
  m="1648036">A</span> <span m="1648410">bunch.</span> <span
  m="1648820">So</span> <span m="1649130">for</span> <span
  m="1649320">you,</span> <span m="1649650">it's</span> <span
  m="1649980">V</span> <span m="1650190">backslash</span> <span
  m="1650790">A,</span> <span m="1651620">but</span> <span
  m="1652230">usually</span> <span m="1652780">in</span> <span
  m="1653070">linear</span> <span m="1653330">algebra</span> <span
  m="1653740">like</span> <span m="1653890">18.06</span> <span
  m="1654460">you</span> <span m="1654560">see</span> <span
  m="1654760">you</span> <span m="1655530">have</span> <span
  m="1656720">some</span> <span m="1657220">matrix</span> <span
  m="1657730">V</span> <span m="1659060">times</span> <span
  m="1659430">some</span> <span m="1659770">unknown</span> <span
  m="1660170">vector--</span> <span m="1660540">usually</span> <span
  m="1660820">it's</span> <span m="1660930">called</span> <span
  m="1661170">x,</span> <span m="1661510">here</span> <span
  m="1661700">it's</span> <span m="1661830">called</span> <span
  m="1662060">a--</span> <span m="1662525">and</span> <span
  m="1662990">you</span> <span m="1663090">know</span> <span
  m="1663280">the</span> <span m="1663390">right-hand</span> <span
  m="1663780">side.</span> <span m="1664380">You</span> <span
  m="1664520">want</span> <span m="1664640">to</span> <span
  m="1664690">solve</span> <span m="1664990">for</span> <span
  m="1665090">this.</span> <span m="1665710">How</span> <span
  m="1665870">do</span> <span m="1665930">you</span> <span m="1666030">do</span>
  <span m="1666230">it?</span></p><p><span m="1669619">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="1670990">ERIK DEMAINE:
  Sorry?</span></p><p><span m="1672250">AUDIENCE: Multiply</span> <span
  m="1672670">by the</span> <span m="1673090">inverse?</span></p><p><span
  m="1673930">ERIK DEMAINE: Multiply</span> <span m="1674330">by</span> <span
  m="1674470">the</span> <span m="1674610">inverse.</span> <span
  m="1675050">Yeah.</span> <span m="1675450">How</span> <span
  m="1675590">do</span> <span m="1675650">you</span> <span m="1675730">do</span>
  <span m="1675860">it</span> <span m="1675940">in</span> <span
  m="1676030">computer</span> <span m="1676350">science?</span></p><p><span
  m="1677350">AUDIENCE: Gaussian</span> <span
  m="1677740">elimination.</span></p><p><span m="1678130">ERIK DEMAINE:
  Gaussian</span> <span m="1678510">elimination.</span> <span
  m="1679250">Turns</span> <span m="1679520">out</span> <span
  m="1679700">inverse</span> <span m="1680110">is</span> <span
  m="1680270">the</span> <span m="1680360">right</span> <span
  m="1680560">answer</span> <span m="1680920">here,</span> <span
  m="1681215">but</span> <span m="1682080">Gaussian</span> <span
  m="1682460">elimination</span> <span m="1682970">would</span> <span
  m="1683060">be</span> <span m="1683160">the</span> <span
  m="1683250">standard</span> <span m="1683640">way</span> <span
  m="1684020">to</span> <span m="1684370">solve</span> <span
  m="1684940">a</span> <span m="1685040">linear</span> <span
  m="1685330">system</span> <span m="1685630">like</span> <span
  m="1685810">that.</span> <span m="1686360">The</span> <span
  m="1686640">trouble</span> <span m="1686920">with</span> <span
  m="1687060">Gaussian</span> <span m="1687440">elimination</span> <span
  m="1689250">is</span> <span m="1689500">it</span> <span
  m="1689600">takes</span> <span m="1689840">cubic</span> <span
  m="1690200">time</span> <span m="1692060">in</span> <span
  m="1693000">its</span> <span m="1693180">normal</span> <span
  m="1693480">form.</span> <span m="1696080">In</span> <span
  m="1696270">this</span> <span m="1696510">case</span> <span
  m="1696820">it's</span> <span m="1696940">a</span> <span
  m="1696990">little</span> <span m="1697230">bit</span> <span
  m="1697380">special</span> <span m="1697780">because</span> <span
  m="1698130">this</span> <span m="1698300">matrix</span> <span
  m="1698770">is</span> <span m="1698910">essentially</span> <span
  m="1699360">fixed.</span> <span m="1699830">The</span> <span
  m="1699980">xi's</span> <span m="1701160">don't</span> <span
  m="1701320">need</span> <span m="1701480">to</span> <span
  m="1701550">change.</span> <span m="1702130">It</span> <span
  m="1702190">could</span> <span m="1702350">be</span> <span
  m="1702580">xi</span> <span m="1703650">is</span> <span
  m="1704110">just</span> <span m="1704380">i</span> <span m="1705150">or</span>
  <span m="1705220">something,</span> <span m="1706200">so</span> <span
  m="1706390">we</span> <span m="1706510">can--</span> <span
  m="1706720">in</span> <span m="1706880">this</span> <span
  m="1707070">case</span> <span m="1707290">it's</span> <span
  m="1707440">a</span> <span m="1707590">little</span> <span
  m="1707850">better</span> <span m="1708160">to</span> <span
  m="1708240">compute</span> <span m="1708500">the</span> <span
  m="1708620">inverse</span> <span m="1709020">first.</span></p><p><span
  m="1710320">So</span> <span m="1710530">we</span> <span
  m="1710660">could</span> <span m="1710810">also</span> <span
  m="1711050">just</span> <span m="1711260">do</span> <span m="1711380">v</span>
  <span m="1712140">inverse</span> <span m="1712630">times</span> <span
  m="1713340">a.</span> <span m="1715520">From</span> <span m="1715790">a</span>
  <span m="1715830">numerical</span> <span m="1716240">analysis</span> <span
  m="1716600">standpoint</span> <span m="1716990">this is</span> <span
  m="1717160">very</span> <span m="1717340">bad,</span> <span
  m="1717700">but</span> <span m="1717920">don't</span> <span
  m="1718060">worry</span> <span m="1718190">about</span> <span
  m="1718440">it</span> <span m="1718530">for</span> <span
  m="1718610">now.</span> <span m="1719120">We're</span> <span
  m="1719310">going</span> <span m="1719400">to</span> <span
  m="1719440">get</span> <span m="1719580">a</span> <span
  m="1719620">better</span> <span m="1719870">algorithm</span> <span
  m="1720980">today.</span> <span m="1721070">Anyway,</span> <span
  m="1721470">it</span> <span m="1721540">doesn't</span> <span
  m="1721790">involve</span> <span m="1723020">matrices</span> <span
  m="1723410">at</span> <span m="1723490">all,</span> <span
  m="1723780">but</span> <span m="1724310">the</span> <span
  m="1724410">nice</span> <span m="1724610">thing</span> <span
  m="1724790">is,</span> <span m="1724930">if</span> <span
  m="1725530">computing</span> <span m="1725980">the</span> <span
  m="1726140">inverse,</span> <span m="1726590">that</span> <span
  m="1726810">takes</span> <span m="1727060">n</span> <span
  m="1727240">cubed</span> <span m="1727490">time,</span> <span
  m="1727760">but</span> <span m="1727880">you only</span> <span
  m="1728090">have</span> <span m="1728180">to</span> <span
  m="1728270">do</span> <span m="1728410">it</span> <span
  m="1728460">once.</span> <span m="1728990">So</span> <span
  m="1729190">if</span> <span m="1729260">you</span> <span
  m="1729340">have</span> <span m="1729440">to</span> <span
  m="1729540">do</span> <span m="1729670">this</span> <span
  m="1729790">many</span> <span m="1730030">times</span> <span
  m="1731150">you</span> <span m="1731350">can</span> <span
  m="1731490">do</span> <span m="1731670">this</span> <span
  m="1732260">product</span> <span m="1732760">in</span> <span
  m="1732950">n</span> <span m="1733130">squared</span> <span
  m="1733440">time.</span> <span m="1733840">You just</span> <span
  m="1734060">have</span> <span m="1734170">to</span> <span
  m="1734860">maintain</span> <span m="1735280">that</span> <span
  m="1735480">v</span> <span m="1735610">inverse</span> <span
  m="1736930">once</span> <span m="1737170">and</span> <span
  m="1737270">for</span> <span m="1737440">all.</span> <span
  m="1739300">OK,</span> <span m="1740010">great.</span></p><p><span
  m="1740250">So,</span> <span m="1740360">we've</span> <span
  m="1740430">got</span> <span m="1740610">quadratic</span> <span
  m="1741250">algorithms</span> <span m="1741820">to</span> <span
  m="1741960">go</span> <span m="1742160">back</span> <span
  m="1742380">and</span> <span m="1742480">forth</span> <span
  m="1742720">between</span> <span m="1743050">these</span> <span
  m="1743220">representations.</span> <span m="1743960">That,</span> <span
  m="1744100">at</span> <span m="1744160">least,</span> <span
  m="1744380">tells</span> <span m="1744600">us</span> <span
  m="1744740">it's</span> <span m="1744890">doable,</span> <span
  m="1746110">but</span> <span m="1748590">we,</span> <span
  m="1748750">of</span> <span m="1748850">course,</span> <span
  m="1749080">need</span> <span m="1749210">better</span> <span
  m="1749470">than</span> <span m="1749600">quadratic</span> <span
  m="1750140">to</span> <span m="1750240">improve</span> <span
  m="1751075">on</span> <span m="1751410">the</span> <span
  m="1751540">naive</span> <span m="1752920">multiplication</span> <span
  m="1753530">algorithm,</span> <span m="1754820">so</span> <span
  m="1754970">that's</span> <span m="1755160">what</span> <span
  m="1755230">we're</span> <span m="1755340">going</span> <span
  m="1755460">to</span> <span m="1755540">do.</span> <span m="1758740">In</span>
  <span m="1758890">general,</span> <span m="1759230">we</span> <span
  m="1759340">can't</span> <span m="1759560">do</span> <span
  m="1759680">any</span> <span m="1759840">better,</span> <span
  m="1760730">but</span> <span m="1760870">we</span> <span
  m="1760980">have</span> <span m="1761200">one</span> <span
  m="1762030">freedom,</span> <span m="1763320">which</span> <span
  m="1763510">is</span> <span m="1763620">we</span> <span
  m="1763980">have</span> <span m="1764200">said</span> <span
  m="1764480">nothing</span> <span m="1764960">about</span> <span
  m="1765200">the</span> <span m="1765330">x</span> <span
  m="1765550">case.</span> <span m="1766430">We</span> <span
  m="1766460">can</span> <span m="1766610">choose</span> <span
  m="1766860">them</span> <span m="1766990">to</span> <span
  m="1767120">be</span> <span m="1767270">whatever</span> <span
  m="1768010">we</span> <span m="1768150">want</span> <span
  m="1768410">them</span> <span m="1768550">to</span> <span
  m="1768620">be.</span> <span m="1769770">I</span> <span
  m="1769870">keep</span> <span m="1770120">saying</span> <span
  m="1770380">xk</span> <span m="1770620">equals</span> <span
  m="1770950">k.</span> <span m="1771800">That</span> <span
  m="1771980">seems</span> <span m="1772240">fine.</span> <span
  m="1772930">It's</span> <span m="1773160">actually</span> <span
  m="1773510">really</span> <span m="1773700">bad</span> <span
  m="1773960">choice</span> <span m="1774350">for a</span> <span
  m="1774800">reason</span> <span m="1774920">we</span> <span
  m="1775030">will</span> <span m="1775180">get</span> <span
  m="1775380">to,</span> <span m="1776200">but</span> <span
  m="1776440">there</span> <span m="1776610">is</span> <span
  m="1776740">a</span> <span m="1776800">choice</span> <span
  m="1777540">where,</span> <span m="1777720">magically,</span> <span
  m="1778380">this</span> <span m="1778550">transformation</span> <span
  m="1779210">becomes</span> <span m="1779610">easy</span> <span
  m="1780830">and</span> <span m="1781090">you</span> <span
  m="1781190">can</span> <span m="1781290">do</span> <span m="1781420">it</span>
  <span m="1781480">in</span> <span m="1781600">n</span> <span
  m="1781700">log</span> <span m="1781710">n</span> <span
  m="1782060">time.</span></p><p><span m="1783910">Before</span> <span
  m="1784290">we</span> <span m="1784420">get</span> <span
  m="1784690">there,</span> <span m="1787660">I</span> <span
  m="1787680">want</span> <span m="1787870">to</span> <span
  m="1787920">give</span> <span m="1788150">you</span> <span
  m="1788310">some</span> <span m="1789750">motivation</span> <span
  m="1790690">for</span> <span m="1792340">how</span> <span
  m="1792970">this</span> <span m="1793140">could</span> <span
  m="1793260">possibly</span> <span m="1793700">work.</span> <span
  m="1815140">As</span> <span m="1815330">you</span> <span
  m="1815490">might</span> <span m="1815660">expect,</span> <span
  m="1816150">even</span> <span m="1816530">just</span> <span
  m="1816690">from</span> <span m="1816870">that</span> <span
  m="1817040">n</span> <span m="1817170">log</span> <span m="1817420">n</span>
  <span m="1817540">running</span> <span m="1817800">time,</span> <span
  m="1818680">we're</span> <span m="1818860">going</span> <span
  m="1819080">to</span> <span m="1819140">be</span> <span
  m="1819320">using</span> <span m="1819660">divide</span> <span
  m="1819980">and</span> <span m="1820080">conquer,</span> <span
  m="1823930">so</span> <span m="1824030">let's</span> <span
  m="1824220">just</span> <span m="1824380">think</span> <span
  m="1824600">about</span> <span m="1824900">how</span> <span
  m="1825210">divide</span> <span m="1825520">and</span> <span
  m="1825620">conquer</span> <span m="1825980">could</span> <span
  m="1826130">work.</span> <span m="1828780">I'm</span> <span
  m="1828850">going</span> <span m="1828960">to</span> <span
  m="1829110">show</span> <span m="1829370">you</span> <span
  m="1829520">an</span> <span m="1829600">idea</span> <span
  m="1830640">and</span> <span m="1831030">then</span> <span
  m="1831190">we'll</span> <span m="1831300">figure</span> <span
  m="1831620">out</span> <span m="1831700">how</span> <span
  m="1831940">that</span> <span m="1832080">idea</span> <span
  m="1832380">could</span> <span m="1832520">possibly</span> <span
  m="1832900">work.</span> <span m="1833760">It</span> <span
  m="1834200">doesn't</span> <span m="1834480">work</span> <span
  m="1834700">at</span> <span m="1834770">the</span> <span
  m="1834840">moment,</span> <span m="1835200">but</span> <span
  m="1835410">we</span> <span m="1836190">will</span> <span
  m="1836310">be</span> <span m="1836470">able</span> <span
  m="1836630">to</span> <span m="1836720">choose</span> <span
  m="1837030">the</span> <span m="1837140">xk</span> <span m="1837560">so</span>
  <span m="1837850">that</span> <span m="1838020">it works.</span></p><p><span
  m="1840210">So,</span> <span m="1840350">let's</span> <span
  m="1840590">say</span> <span m="1841990">the</span> <span
  m="1842110">goal--</span> <span m="1843950">I</span> <span
  m="1843990">mean,</span> <span m="1844180">what</span> <span
  m="1844340">we</span> <span m="1844440">want</span> <span
  m="1844650">to</span> <span m="1844730">do</span> <span m="1844910">is</span>
  <span m="1845070">compute</span> <span m="1845490">this</span> <span
  m="1846190">v</span> <span m="1846480">times</span> <span
  m="1847090">a.</span> <span m="1847880">I'm</span> <span
  m="1848020">going</span> <span m="1848130">to</span> <span
  m="1848200">convert--</span> <span m="1848910">think</span> <span
  m="1849080">of</span> <span m="1849150">that</span> <span
  m="1849430">back</span> <span m="1851120">into</span> <span
  m="1851780">polynomial</span> <span m="1853400">land.</span> <span
  m="1854110">So</span> <span m="1854390">our</span> <span
  m="1854580">goal</span> <span m="1854860">is</span> <span
  m="1854950">to</span> <span m="1855070">compute</span> <span m="1855480">a
  of</span> <span m="1855750">x</span> <span m="1857210">for</span> <span
  m="1857450">all</span> <span m="1858650">x</span> <span m="1859190">in</span>
  <span m="1859430">some</span> <span m="1860340">set</span> <span
  m="1860790">x.</span> <span m="1865050">This</span> <span
  m="1865230">is</span> <span m="1866850">taking</span> <span
  m="1867220">a</span> <span m="1867270">bunch</span> <span
  m="1867520">of</span> <span m="1867590">samples.</span> <span
  m="1870420">Set</span> <span m="1870610">x</span> <span m="1870880">is</span>
  <span m="1870970">just</span> <span m="1871170">a</span> <span
  m="1871210">set</span> <span m="1871460">of</span> <span
  m="1871590">the</span> <span m="1871720">xk's,</span> <span
  m="1873260">but</span> <span m="1873460">I'm</span> <span
  m="1873580">going</span> <span m="1873680">to</span> <span
  m="1873760">change</span> <span m="1874100">that</span> <span
  m="1874350">set</span> <span m="1874610">in</span> <span m="1874760">a</span>
  <span m="1874800">moment</span> <span m="1876550">using</span> <span
  m="1877120">recursion.</span> <span m="1879410">So</span> <span
  m="1879570">the</span> <span m="1879690">input</span> <span
  m="1880000">to</span> <span m="1880080">this</span> <span
  m="1880240">algorithm</span> <span m="1880640">is</span> <span
  m="1880730">a</span> <span m="1880780">polynomial</span> <span m="1881400">a
  of</span> <span m="1881670">x,</span> <span m="1882390">and</span> <span
  m="1882670">it's</span> <span m="1882860">a</span> <span
  m="1883390">set</span> <span m="1883860">capital</span> <span
  m="1884280">X</span> <span m="1885046">of</span> <span
  m="1885760">positions</span> <span m="1886520">that</span> <span
  m="1886630">I'd</span> <span m="1886740">like</span> <span
  m="1886890">to</span> <span m="1886960">evaluate</span> <span
  m="1887360">that</span> <span m="1887480">polynomial</span> <span
  m="1888170">at.</span> <span m="1888420">This</span> <span
  m="1888610">is</span> <span m="1888710">clearly</span> <span
  m="1889000">more</span> <span m="1889210">general</span> <span
  m="1889580">than</span> <span m="1889690">the</span> <span
  m="1889780">problem</span> <span m="1890070">we're</span> <span
  m="1890200">trying</span> <span m="1890420">to</span> <span
  m="1890480">solve,</span> <span m="1892210">and</span> <span
  m="1892380">I'm</span> <span m="1892450">going</span> <span
  m="1892530">to</span> <span m="1892590">solve</span> <span
  m="1892910">it</span> <span m="1893030">with</span> <span
  m="1893220">divide</span> <span m="1893460">and</span> <span
  m="1893530">conquer.</span> <span m="1893950">In</span> <span
  m="1894140">divide and</span> <span m="1894440">conquer</span> <span
  m="1894740">there</span> <span m="1894910">are</span> <span
  m="1894950">three</span> <span m="1895120">steps.</span> <span
  m="1895750">Divide,</span> <span m="1896570">conquer,</span> <span
  m="1897010">and</span> <span m="1897220">combine.</span></p><p><span
  m="1899440">Let's</span> <span m="1899710">start</span> <span
  m="1899930">with</span> <span m="1900150">divide.</span> <span
  m="1903660">Here's</span> <span m="1903920">the</span> <span
  m="1903990">big</span> <span m="1904190">idea.</span> <span
  m="1908190">I</span> <span m="1908310">would</span> <span
  m="1908460">say</span> <span m="1908570">there</span> <span
  m="1908710">are</span> <span m="1908780">two</span> <span
  m="1908960">natural</span> <span m="1909330">ways</span> <span
  m="1909580">to</span> <span m="1909700">divide</span> <span
  m="1910040">a</span> <span m="1910080">vector.</span> <span
  m="1910500">One</span> <span m="1910770">is</span> <span m="1911080">in</span>
  <span m="1911200">the</span> <span m="1911270">middle,</span> <span
  m="1911960">that's what</span> <span m="1912100">we've always</span> <span
  m="1912470">seen</span> <span m="1912770">with</span> <span
  m="1912910">merge</span> <span m="1913170">sort</span> <span
  m="1914660">and</span> <span m="1916080">convex</span> <span
  m="1916430">hull</span> <span m="1916650">from</span> <span
  m="1916800">last</span> <span m="1917040">time,</span> <span
  m="1918390">but</span> <span m="1918550">there's</span> <span
  m="1918710">another</span> <span m="1919060">way</span> <span
  m="1919470">which</span> <span m="1919750">will</span> <span
  m="1919920">work</span> <span m="1920130">better</span> <span
  m="1920390">here,</span> <span m="1921000">which</span> <span
  m="1921220">is</span> <span m="1921430">the</span> <span
  m="1922170">even</span> <span m="1922550">entries</span> <span
  m="1923130">and</span> <span m="1923270">the</span> <span
  m="1923400">odd</span> <span m="1923620">entries.</span> <span
  m="1925480">So</span> <span m="1925590">I'm</span> <span
  m="1925710">going</span> <span m="1925820">to</span> <span
  m="1925890">divide</span> <span m="1926350">into</span> <span
  m="1926770">even</span> <span m="1927750">and</span> <span
  m="1927960">odd</span> <span m="1928340">coefficients.</span></p><p><span
  m="1935410">Let</span> <span m="1935590">me</span> <span
  m="1935760">write</span> <span m="1935940">that</span> <span
  m="1936150">down.</span> <span m="1938150">One</span> <span
  m="1938440">of</span> <span m="1938540">them</span> <span
  m="1938880">is</span> <span m="1939060">called</span> <span
  m="1939380">a</span> <span m="1939500">sub</span> <span
  m="1939830">even</span> <span m="1940100">of</span> <span
  m="1940190">x--</span> <span m="1940610">that's</span> <span
  m="1940840">a</span> <span m="1940890">polynomial.</span> <span
  m="1941860">It's</span> <span m="1942010">going</span> <span
  m="1942110">to</span> <span m="1942150">have</span> <span
  m="1942360">half</span> <span m="1942760">the</span> <span
  m="1942870">degree,</span> <span m="1944090">so</span> <span
  m="1944280">it's</span> <span m="1944440">going</span> <span
  m="1944660">to</span> <span m="1944800">be</span> <span m="1945210">sum</span>
  <span m="1945770">from</span> <span m="1946110">k</span> <span
  m="1946460">equals</span> <span m="1946970">0</span> <span
  m="1948270">to--</span> <span m="1951000">I</span> <span
  m="1951200">wrote</span> <span m="1951280">n</span> <span
  m="1951490">here,</span> <span m="1951750">but</span> <span
  m="1951890">I</span> <span m="1951930">think</span> <span m="1952170">I</span>
  <span m="1952230">want</span> <span m="1952450">something</span> <span
  m="1952660">like</span> <span m="1952910">n</span> <span
  m="1953080">over</span> <span m="1953380">2</span> <span
  m="1955070">minus</span> <span m="1955530">1,</span> <span
  m="1956150">n</span> <span m="1956350">minus</span> <span m="1956570">1</span>
  <span m="1956720">over</span> <span m="1956870">2,</span> <span
  m="1957260">one</span> <span m="1957430">of</span> <span
  m="1957490">those</span> <span m="1957710">things--</span> <span
  m="1959970">of</span> <span m="1960360">a</span> <span m="1961500">to k</span>
  <span m="1963260">x</span> <span m="1963700">to</span> <span
  m="1963820">the</span> <span m="1963960">k.</span></p><p><span
  m="1965910">So,</span> <span m="1966800">really,</span> <span
  m="1967070">what</span> <span m="1967230">I</span> <span
  m="1967290">want--</span> <span m="1967940">which</span> <span
  m="1968280">is</span> <span m="1968450">easier</span> <span
  m="1968690">to</span> <span m="1968760">write--</span> <span
  m="1969000">is,</span> <span m="1969470">in</span> <span
  m="1969740">the</span> <span m="1969850">vector</span> <span
  m="1970170">notation,</span> <span m="1971290">I</span> <span
  m="1971410">want</span> <span m="1971690">all</span> <span
  m="1972010">the</span> <span m="1972260">even</span> <span
  m="1972570">entries.</span> <span m="1975080">I</span> <span
  m="1975140">won't</span> <span m="1975390">try</span> <span
  m="1975510">to</span> <span m="1975760">figure</span> <span m="1975970">out
  what</span> <span m="1976040">the</span> <span m="1976130">last</span> <span
  m="1976430">one</span> <span m="1976570">is,</span> <span
  m="1976720">but</span> <span m="1976830">it's</span> <span
  m="1977030">roughly</span> <span m="1977520">n</span> <span
  m="1977650">over</span> <span m="1977820">2-ish.</span> <span m="1980750">I'll
  just write</span> <span m="1981040">that.</span> <span m="1982270">You</span>
  <span m="1982510">can go</span> <span m="1982650">a</span> <span
  m="1982710">little</span> <span m="1982910">bit</span> <span
  m="1983050">extra.</span> <span m="1983470">It's</span> <span
  m="1983630">fine</span> <span m="1984400">if</span> <span
  m="1984480">you</span> <span m="1984570">define</span> <span
  m="1985110">a</span> <span m="1985300">sub</span> <span m="1985540">n</span>
  <span m="1985760">to</span> <span m="1985860">be</span> <span
  m="1985960">0,</span> <span m="1986340">and</span> <span m="1986430">a</span>
  <span m="1986510">sub</span> <span m="1986690">n</span> <span
  m="1986800">plus</span> <span m="1987020">1</span> <span m="1987210">to</span>
  <span m="1987260">be</span> <span m="1987370">zero,</span> <span
  m="1987630">and</span> <span m="1987890">all those to</span> <span
  m="1988170">be</span> <span m="1988270">0,</span> <span
  m="1988920">those</span> <span m="1989140">terms</span> <span
  m="1989350">will</span> <span m="1989440">disappear.</span></p><p><span
  m="1990700">So</span> <span m="1991270">the</span> <span
  m="1991370">key</span> <span m="1991560">thing</span> <span
  m="1991710">here</span> <span m="1991850">is</span> <span
  m="1991950">I'm</span> <span m="1992030">taking</span> <span
  m="1992330">the</span> <span m="1992480">even</span> <span
  m="1992700">entries,</span> <span m="1993170">but</span> <span
  m="1994736">I</span> <span m="1995200">don't</span> <span
  m="1995390">have</span> <span m="1995540">2k</span> <span
  m="1996050">up</span> <span m="1996230">here.</span> <span
  m="1998040">This</span> <span m="1998330">is</span> <span
  m="1998640">the</span> <span m="1999310">x</span> <span m="1999740">to</span>
  <span m="1999880">the</span> <span m="1999960">0</span> <span
  m="2000280">term.</span> <span m="2000640">This</span> <span
  m="2000690">is</span> <span m="2000780">the</span> <span m="2000900">x</span>
  <span m="2001090">to</span> <span m="2001170">the 1</span> <span
  m="2001280">term.</span> <span m="2001930">This</span> <span
  m="2001990">is</span> <span m="2002110">the</span> <span m="2002300">x</span>
  <span m="2002570">to</span> <span m="2002670">the</span> <span
  m="2002880">2</span> <span m="2003120">term.</span> <span
  m="2004020">So</span> <span m="2004180">there's</span> <span
  m="2004360">a</span> <span m="2004420">difference</span> <span
  m="2004830">between</span> <span m="2005680">x</span> <span
  m="2005920">to</span> <span m="2005980">the</span> <span
  m="2006070">k's</span> <span m="2006240">and</span> <span
  m="2007050">the</span> <span m="2007280">sub</span> <span
  m="2008480">2k,</span> <span m="2009760">but,</span> <span
  m="2009930">I</span> <span m="2010150">mean,</span> <span
  m="2010230">just</span> <span m="2010400">think</span> <span
  m="2010560">about</span> <span m="2010780">it</span> <span
  m="2010870">in</span> <span m="2011010">vector</span> <span
  m="2011280">form.</span> <span m="2011600">Don't</span> <span
  m="2011760">worry</span> <span m="2011960">about</span> <span
  m="2012530">the</span> <span m="2012640">algebra</span> <span
  m="2013030">for</span> <span m="2013170">now.</span> <span
  m="2013620">We're</span> <span m="2013720">going</span> <span m="2013830">to
  have to</span> <span m="2014030">worry</span> <span m="2014150">about</span>
  <span m="2014380">it</span> <span m="2014480">in</span> <span
  m="2014490">a</span> <span m="2014570">second,</span> <span
  m="2014925">but,</span> <span m="2016130">intuitively,</span> <span
  m="2016700">what</span> <span m="2016890">I</span> <span
  m="2016950">want</span> <span m="2017160">to</span> <span
  m="2017250">do</span> <span m="2018050">is</span> <span
  m="2018480">extract</span> <span m="2019220">from</span> <span
  m="2019530">the</span> <span m="2019600">vector</span> <span
  m="2019930">of</span> <span m="2020060">all</span> <span
  m="2020390">the</span> <span m="2020510">ai's</span> <span
  m="2022240">these</span> <span m="2022460">two</span> <span
  m="2022620">vectors--</span> <span m="2024160">the</span> <span
  m="2025820">odd</span> <span m="2026120">coefficients</span> <span
  m="2027600">in</span> <span m="2027770">order</span> <span
  m="2028090">and</span> <span m="2028380">the even</span> <span
  m="2028690">coefficients</span> <span m="2029230">in</span> <span
  m="2029320">order--</span> <span m="2030830">but</span> <span
  m="2030910">I'm</span> <span m="2031000">going</span> <span
  m="2031110">to</span> <span m="2031170">need</span> <span
  m="2031360">the</span> <span m="2031480">algebraic</span> <span
  m="2031940">form</span> <span m="2032780">in</span> <span m="2032990">a</span>
  <span m="2033030">moment</span> <span m="2033500">for</span> <span
  m="2033670">the</span> <span m="2033820">combined</span> <span
  m="2034290">step.</span> <span m="2038260">It</span> <span
  m="2038890">should</span> <span m="2039090">be</span> <span
  m="2039260">2k</span> <span m="2039640">plus</span> <span m="2039950">1</span>
  <span m="2041080">x</span> <span m="2041350">to</span> <span
  m="2041570">k.</span> <span m="2046790">That's</span> <span
  m="2046960">step</span> <span m="2047160">one.</span> <span
  m="2050290">Easy</span> <span m="2050530">to</span> <span
  m="2050610">do.</span> <span m="2050830">Linear</span> <span
  m="2051100">time,</span> <span m="2051400">of</span> <span
  m="2051500">course.</span></p><p><span m="2054510">Let's</span> <span
  m="2054800">jump</span> <span m="2055040">ahead</span> <span
  m="2055380">to</span> <span m="2055449">step</span> <span
  m="2055750">three,</span> <span m="2056190">combine.</span> <span
  m="2060739">In</span> <span m="2060940">order</span> <span
  m="2061170">to</span> <span m="2061440">compute</span> <span
  m="2062730">a</span> <span m="2062969">of</span> <span m="2063080">x</span>
  <span m="2063780">from--</span> <span m="2064420">what</span> <span
  m="2064560">I'd</span> <span m="2064630">like</span> <span
  m="2064800">to</span> <span m="2064909">do</span> <span m="2065040">is</span>
  <span m="2065120">recursively</span> <span m="2065770">compute</span> <span
  m="2066219">a</span> <span m="2066389">even</span> <span m="2066690">of</span>
  <span m="2066780">x</span> <span m="2067020">and</span> <span
  m="2067190">a</span> <span m="2067360">odd</span> <span m="2067540">of</span>
  <span m="2067639">x</span> <span m="2067830">for</span> <span
  m="2067960">some</span> <span m="2068370">values</span> <span
  m="2068820">x.</span> <span m="2069110">It's</span> <span
  m="2069250">not</span> <span m="2069440">going</span> <span
  m="2069530">to</span> <span m="2069590">be</span> <span m="2069760">x</span>
  <span m="2069969">and</span> <span m="2070050">x.</span> <span
  m="2070290">It's</span> <span m="2070360">going</span> <span
  m="2070460">to</span> <span m="2070500">be</span> <span
  m="2070570">some</span> <span m="2070780">other</span> <span
  m="2070989">set.</span> <span m="2072469">Let's</span> <span
  m="2072679">think</span> <span m="2072889">about</span> <span
  m="2073489">how</span> <span m="2073909">I</span> <span m="2074050">can</span>
  <span m="2074270">compute</span> <span m="2075300">a</span> <span
  m="2075460">of</span> <span m="2075560">x</span> <span
  m="2075949">given</span> <span m="2076350">some</span> <span
  m="2076659">solutions</span> <span m="2077210">to</span> <span
  m="2077510">a</span> <span m="2077620">even</span> <span m="2077900">of</span>
  <span m="2078000">x</span> <span m="2078580">and</span> <span
  m="2078780">a</span> <span m="2079120">odd</span> <span m="2079270">of</span>
  <span m="2079360">x.</span> <span m="2080739">So</span> <span
  m="2080949">this</span> <span m="2081190">is</span> <span
  m="2081280">step</span> <span m="2083540">three,</span> <span
  m="2089320">combine.</span></p><p><span m="2092780">So</span> <span
  m="2093969">I</span> <span m="2094100">would</span> <span
  m="2094250">like</span> <span m="2097670">a</span> <span m="2097850">of</span>
  <span m="2097960">x</span> <span m="2098470">over</span> <span
  m="2098740">here,</span> <span m="2100040">and</span> <span
  m="2100600">I</span> <span m="2100690">want</span> <span m="2102260">a</span>
  <span m="2102500">even</span> <span m="2104060">of</span> <span
  m="2104190">something</span> <span m="2106180">and</span> <span
  m="2106710">a</span> <span m="2107910">odd</span> <span m="2109380">of</span>
  <span m="2109520">something</span> <span m="2110880">and</span> <span
  m="2111140">something</span> <span m="2111750">in</span> <span
  m="2111840">here.</span> <span m="2113330">Anyone</span> <span
  m="2114730">see</span> <span m="2115050">the</span> <span
  m="2115180">algebra?</span> <span m="2119260">Maybe</span> <span
  m="2119460">start</span> <span m="2119700">with</span> <span
  m="2119810">this?</span> <span m="2125130">I</span> <span
  m="2125220">hear</span> <span m="2125430">a mumble.</span> <span
  m="2126373">Yeah.</span></p><p><span m="2126866">AUDIENCE: x
  squared.</span></p><p><span m="2127360">ERIK DEMAINE: x</span> <span
  m="2127580">squared.</span> <span m="2128250">Exactly.</span> <span
  m="2132138">Time for a</span> <span m="2132612">purple one.</span> <span
  m="2136404">I'm</span> <span m="2136880">getting</span> <span
  m="2137090">better.</span></p><p><span m="2138070">Why x</span> <span
  m="2138550">squared?</span> <span m="2138970">Because</span> <span
  m="2139840">we</span> <span m="2139950">have</span> <span
  m="2140220">this</span> <span m="2140400">mismatch</span> <span
  m="2141000">here.</span> <span m="2141740">We</span> <span
  m="2141870">have</span> <span m="2142050">a</span> <span
  m="2142250">sub</span> <span m="2142490">2k.</span> <span
  m="2143290">We</span> <span m="2143400">want</span> <span m="2143670">x</span>
  <span m="2143900">to</span> <span m="2143990">the</span> <span
  m="2144120">2k.</span> <span m="2145530">How</span> <span
  m="2145720">could</span> <span m="2145840">we</span> <span
  m="2145950">do</span> <span m="2146080">that?</span> <span
  m="2146320">Well,</span> <span m="2146460">we</span> <span
  m="2146570">could</span> <span m="2146720">put</span> <span
  m="2147180">x</span> <span m="2147450">squared</span> <span
  m="2147940">to</span> <span m="2148040">the</span> <span
  m="2148160">2k,</span> <span m="2149590">and</span> <span m="2152650">x</span>
  <span m="2152900">squared</span> <span m="2153140">to</span> <span
  m="2153230">the</span> <span m="2153350">k</span> <span m="2154190">is</span>
  <span m="2154360">the</span> <span m="2154450">same</span> <span
  m="2154720">thing</span> <span m="2155080">as</span> <span
  m="2155350">x</span> <span m="2155580">to</span> <span m="2155700">the</span>
  <span m="2155830">2k.</span> <span m="2158670">And</span> <span
  m="2158940">so</span> <span m="2159350">magically</span> <span
  m="2159980">this</span> <span m="2160200">transforms</span> <span
  m="2161000">into</span> <span m="2161920">the</span> <span
  m="2162120">even</span> <span m="2162580">entries</span> <span
  m="2163760">of</span> <span m="2164240">a of x.</span> <span
  m="2164790">That's</span> <span m="2165000">half</span> <span
  m="2165300">of</span> <span m="2165400">them.</span> <span
  m="2166110">We</span> <span m="2166280">do</span> <span m="2166410">the</span>
  <span m="2166530">same</span> <span m="2166870">thing</span> <span
  m="2167090">for</span> <span m="2167190">the</span> <span
  m="2167320">odd</span> <span m="2167560">ones</span> <span
  m="2168580">and</span> <span m="2168760">we're</span> <span
  m="2168960">almost</span> <span m="2169630">there.</span> <span
  m="2171260">Now</span> <span m="2171400">we</span> <span
  m="2171510">have</span> <span m="2171910">a</span> <span
  m="2172320">sub</span> <span m="2172600">2k</span> <span
  m="2172930">plus</span> <span m="2173220">1</span> <span
  m="2174370">times</span> <span m="2174810">x</span> <span
  m="2175040">to</span> <span m="2175140">the</span> <span
  m="2175380">2k,</span> <span m="2176310">no</span> <span
  m="2176570">plus</span> <span m="2176870">1.</span> <span
  m="2178180">So</span> <span m="2178360">how</span> <span
  m="2178580">can</span> <span m="2178730">I</span> <span m="2179220">add</span>
  <span m="2179430">a</span> <span m="2179610">plus</span> <span
  m="2179850">1?</span></p><p><span m="2180617">AUDIENCE: Multiply</span> <span
  m="2181044">by</span> <span m="2181471">x.</span></p><p><span m="2181900">ERIK
  DEMAINE: Multiply</span> <span m="2182310">by</span> <span
  m="2182490">x</span> <span m="2184000">here.</span> <span
  m="2185320">Take</span> <span m="2185500">the</span> <span
  m="2185570">whole</span> <span m="2185790">thing,</span> <span
  m="2185980">multiply</span> <span m="2186380">by</span> <span
  m="2186550">x,</span> <span m="2187700">then</span> <span m="2187870">I</span>
  <span m="2187930">get</span> <span m="2188180">all</span> <span
  m="2188480">of</span> <span m="2188630">the</span> <span
  m="2188930">odd</span> <span m="2189230">terms</span> <span
  m="2189720">of</span> <span m="2190090">a of x.</span> <span
  m="2191010">I</span> <span m="2191160">add</span> <span
  m="2191280">these</span> <span m="2191470">together.</span> <span
  m="2192880">I</span> <span m="2192980">get</span> <span m="2193280">a of
  x.</span> <span m="2195790">I</span> <span m="2195820">mean,</span> <span
  m="2195970">you</span> <span m="2196070">could</span> <span
  m="2196230">prove</span> <span m="2196460">this</span> <span
  m="2196740">more</span> <span m="2196890">carefully,</span> <span
  m="2197560">but</span> <span m="2199850">that's</span> <span
  m="2200080">just</span> <span m="2200270">algebra</span> <span
  m="2201140">to</span> <span m="2201290">see</span> <span
  m="2201450">that</span> <span m="2201600">this</span> <span
  m="2201790">is</span> <span m="2201920">correct.</span> <span
  m="2202980">Once</span> <span m="2203090">you</span> <span
  m="2203200">have</span> <span m="2203570">this,</span> <span
  m="2203910">it</span> <span m="2204040">tells</span> <span
  m="2204320">you</span> <span m="2204470">what</span> <span
  m="2204660">I</span> <span m="2204740">need</span> <span m="2204960">to</span>
  <span m="2205080">do</span> <span m="2205700">is</span> <span
  m="2205870">compute</span> <span m="2206270">a even</span> <span
  m="2207180">of</span> <span m="2207380">x</span> <span
  m="2207680">squared</span> <span m="2208700">for</span> <span
  m="2208940">all</span> <span m="2209220">x</span> <span m="2209490">in</span>
  <span m="2209620">x,</span> <span m="2210940">so</span> <span
  m="2211080">this</span> <span m="2211340">is</span> <span
  m="2212460">4x</span> <span m="2213140">and</span> <span m="2213320">x.</span>
  <span m="2214080">There's</span> <span m="2214220">a</span> <span
  m="2214280">for</span> <span m="2214500">loop</span> <span
  m="2214630">for</span> <span m="2214920">you.</span> <span
  m="2215630">So</span> <span m="2215810">that's</span> <span
  m="2216010">going</span> <span m="2216110">to</span> <span
  m="2216190">take</span> <span m="2216470">linear</span> <span
  m="2216790">time.</span> <span m="2217120">If</span> <span
  m="2217270">I</span> <span m="2217390">already</span> <span
  m="2217800">know</span> <span m="2217960">this</span> <span
  m="2218180">value</span> <span m="2218900">and</span> <span
  m="2219110">I</span> <span m="2219200">already</span> <span
  m="2219550">know</span> <span m="2219710">this</span> <span
  m="2219910">value,</span> <span m="2220350">I</span> <span
  m="2220420">do</span> <span m="2220650">one</span> <span
  m="2220890">multiplication,</span> <span m="2221590">one</span> <span
  m="2221790">addition,</span> <span m="2222670">and</span> <span
  m="2222820">boom.</span> <span m="2223140">I</span> <span
  m="2223220">get</span> <span m="2223440">a</span> <span m="2223550">of</span>
  <span m="2223650">x.</span></p><p><span m="2225760">So</span> <span
  m="2227050">in</span> <span m="2227340">the</span> <span
  m="2228320">conquer</span> <span m="2228740">step</span> <span
  m="2230240">I</span> <span m="2230410">want</span> <span m="2230730">to</span>
  <span m="2231620">recursively</span> <span m="2235500">compute--</span> <span
  m="2240580">I think I'll</span> <span m="2240950">call it--</span> <span
  m="2241380">a</span> <span m="2242240">even</span> <span m="2243480">of</span>
  <span m="2243660">y,</span> <span m="2245370">and</span> <span
  m="2245880">a</span> <span m="2246280">odd</span> <span m="2248091">of</span>
  <span m="2248500">y</span> <span m="2251540">for</span> <span
  m="2252890">y</span> <span m="2253460">in</span> <span m="2253890">x</span>
  <span m="2254340">squared.</span> <span m="2255440">x</span> <span
  m="2255680">squared</span> <span m="2256890">is</span> <span
  m="2257230">the</span> <span m="2257390">set</span> <span
  m="2257740">of</span> <span m="2257910">squares</span> <span
  m="2258600">of</span> <span m="2258700">all</span> <span
  m="2258910">numbers</span> <span m="2259320">in x.</span> <span
  m="2263220">So</span> <span m="2263400">I'm</span> <span
  m="2263550">changing</span> <span m="2264060">my</span> <span
  m="2264210">set</span> <span m="2264450">x.</span> <span m="2264700">I</span>
  <span m="2264760">started</span> <span m="2265150">with</span> <span
  m="2265290">a</span> <span m="2265350">polynomial</span> <span
  m="2265940">a</span> <span m="2266692">and</span> <span m="2267070">a</span>
  <span m="2267130">set</span> <span m="2267380">x.</span> <span
  m="2268240">Recursively,</span> <span m="2269030">I'm</span> <span
  m="2269670">doing</span> <span m="2269910">a</span> <span
  m="2270020">different</span> <span m="2270330">polynomial</span> <span
  m="2271310">of</span> <span m="2271440">half</span> <span
  m="2271940">the</span> <span m="2272100">degree--</span> <span
  m="2273710">half</span> <span m="2273990">the</span> <span
  m="2274080">number</span> <span m="2274330">of</span> <span
  m="2274410">terms--</span> <span m="2277000">but</span> <span
  m="2277180">with</span> <span m="2277340">a</span> <span
  m="2277370">different</span> <span m="2277880">set</span> <span
  m="2280400">of</span> <span m="2280560">the</span> <span
  m="2280640">same</span> <span m="2280980">size.</span> <span
  m="2282650">I</span> <span m="2282830">started</span> <span
  m="2283140">with</span> <span m="2283700">x.</span> <span m="2284500">x</span>
  <span m="2284900">squared</span> <span m="2285400">has</span> <span
  m="2285620">the</span> <span m="2285700">same</span> <span
  m="2285940">size</span> <span m="2286250">as</span> <span
  m="2286380">x,</span> <span m="2286630">right?</span></p><p><span
  m="2288300">So</span> <span m="2288650">let's</span> <span
  m="2289070">try</span> <span m="2289310">to</span> <span
  m="2289450">figure</span> <span m="2289730">out</span> <span
  m="2289810">how</span> <span m="2290860">fast</span> <span
  m="2291350">or</span> <span m="2291540">slow</span> <span
  m="2292080">this</span> <span m="2292270">algorithm</span> <span
  m="2292640">is.</span> <span m="2295760">But</span> <span
  m="2295900">that</span> <span m="2296100">isn't</span> <span
  m="2296290">divide</span> <span m="2296550">and</span> <span
  m="2296630">conquer.</span> <span m="2296920">That</span> <span
  m="2297150">is</span> <span m="2297290">going</span> <span
  m="2297420">to</span> <span m="2297490">be</span> <span m="2298290">our</span>
  <span m="2298470">golden</span> <span m="2298750">ticket.</span> <span
  m="2300290">It's pretty</span> <span m="2300510">simple,</span> <span
  m="2304770">but</span> <span m="2304930">we're</span> <span
  m="2305060">going</span> <span m="2305150">to</span> <span
  m="2305210">need</span> <span m="2305390">another</span> <span
  m="2305700">trick.</span> <span m="2306070">So</span> <span
  m="2307260">I'm</span> <span m="2307430">going</span> <span
  m="2307550">to</span> <span m="2307660">write</span> <span
  m="2308830">a</span> <span m="2308910">recurrence.</span> <span
  m="2309540">Now,</span> <span m="2309690">this</span> <span
  m="2310850">recurrence</span> <span m="2311260">depends</span> <span
  m="2311940">on</span> <span m="2312080">two</span> <span
  m="2312280">things.</span> <span m="2312720">One</span> <span
  m="2312920">is</span> <span m="2313500">how</span> <span
  m="2313720">many</span> <span m="2313970">terms</span> <span
  m="2314380">are</span> <span m="2314530">there</span> <span
  m="2314680">in</span> <span m="2314880">a</span> <span m="2315680">that</span>
  <span m="2315860">we've</span> <span m="2316030">been</span> <span
  m="2316160">calling</span> <span m="2316530">n?</span> <span
  m="2317610">And</span> <span m="2317810">the</span> <span
  m="2317930">other</span> <span m="2318150">is</span> <span
  m="2318260">how</span> <span m="2318450">many</span> <span
  m="2318680">numbers</span> <span m="2319110">are</span> <span
  m="2319260">there</span> <span m="2319700">in x?</span> <span
  m="2320170">How</span> <span m="2320300">many</span> <span
  m="2320490">different</span> <span m="2320750">places</span> <span
  m="2321100">do I</span> <span m="2321240">have</span> <span
  m="2321340">to</span> <span m="2321430">evaluate</span> <span
  m="2322000">my</span> <span m="2322050">polynomial?</span> <span
  m="2323150">So</span> <span m="2323420">we've</span> <span
  m="2323590">got</span> <span m="2323920">t</span> <span m="2324340">of</span>
  <span m="2325200">n,</span> <span m="2325780">and I</span> <span
  m="2326120">always</span> <span m="2326330">call it</span> <span
  m="2326620">size</span> <span m="2326890">of</span> <span
  m="2326990">x.</span> <span m="2331680">So</span> <span
  m="2332830">divide</span> <span m="2332940">and</span> <span
  m="2333120">conquer</span> <span m="2333510">goes</span> <span
  m="2333730">hand-in-hand</span> <span m="2334200">with</span> <span
  m="2334340">recurrences.</span> <span m="2335620">Generally</span> <span
  m="2336110">you've</span> <span m="2336250">got</span> <span
  m="2336630">the</span> <span m="2336710">recursive</span> <span
  m="2337070">part,</span> <span m="2338310">so</span> <span
  m="2338420">that's</span> <span m="2338670">just</span> <span
  m="2338870">how</span> <span m="2339110">big</span> <span
  m="2339480">are</span> <span m="2339700">the</span> <span
  m="2339830">subproblems.</span> <span m="2340440">How</span> <span
  m="2340580">many</span> <span m="2340830">are</span> <span
  m="2340980">there?</span> <span m="2341280">There are</span> <span
  m="2341390">two</span> <span m="2341650">subproblems.</span> <span
  m="2343100">They</span> <span m="2343220">have</span> <span
  m="2343530">half</span> <span m="2344040">the</span> <span
  m="2344140">size</span> <span m="2344520">in</span> <span
  m="2344610">terms</span> <span m="2344860">of</span> <span
  m="2345000">n,</span> <span m="2345910">but</span> <span
  m="2346060">they</span> <span m="2346130">have</span> <span
  m="2346300">the</span> <span m="2346380">same</span> <span
  m="2346810">size</span> <span m="2347180">in</span> <span
  m="2347270">terms</span> <span m="2347490">of</span> <span
  m="2347570">x.</span> <span m="2348920">So,</span> <span
  m="2351930">all</span> <span m="2352010">right,</span> <span
  m="2352340">2</span> <span m="2353270">times--</span> <span
  m="2353870">because</span> <span m="2354030">there's</span> <span
  m="2354190">two</span> <span m="2354350">subproblems--</span> <span
  m="2355710">each</span> <span m="2355910">with</span> <span
  m="2355990">size</span> <span m="2356350">n</span> <span
  m="2356520">over</span> <span m="2356700">2</span> <span
  m="2358490">and</span> <span m="2359820">size</span> <span
  m="2360160">x,</span> <span m="2363010">plus</span> <span
  m="2364610">what</span> <span m="2365020">goes</span> <span
  m="2365240">here</span> <span m="2365590">is</span> <span
  m="2365830">however</span> <span m="2366250">much</span> <span
  m="2366550">it</span> <span m="2366660">costs</span> <span
  m="2366970">to</span> <span m="2367060">do</span> <span m="2367210">the</span>
  <span m="2367320">divide</span> <span m="2367670">step,</span> <span
  m="2368240">plus</span> <span m="2368700">however</span> <span
  m="2368970">much</span> <span m="2369220">it</span> <span
  m="2369510">costs</span> <span m="2369760">to</span> <span m="2369910">do
  the</span> <span m="2370020">combined step--</span> <span
  m="2370460">all</span> <span m="2370690">the</span> <span
  m="2370800">non-recursive</span> <span m="2371490">parts.</span> <span
  m="2372620">So</span> <span m="2372690">this</span> <span
  m="2372910">is</span> <span m="2373030">just</span> <span
  m="2373300">partitioning</span> <span m="2373780">the</span> <span
  m="2373850">vectors--</span> <span m="2374530">linear</span> <span
  m="2374790">scan,</span> <span m="2375640">linear</span> <span
  m="2375870">time.</span> <span m="2377290">This</span> <span
  m="2377660">is--</span> <span m="2378740">we</span> <span
  m="2378890">talked</span> <span m="2379140">about it--</span> <span
  m="2379350">it's</span> <span m="2379480">a</span> <span
  m="2379620">constant</span> <span m="2380030">number</span> <span
  m="2380770">of</span> <span m="2380950">arithmetic</span> <span
  m="2381410">operations</span> <span m="2382370">for</span> <span
  m="2382550">each</span> <span m="2382800">x.</span> <span
  m="2383560">So</span> <span m="2383700">this</span> <span
  m="2383880">cause-order</span> <span m="2384390">x</span> <span
  m="2384680">time,</span> <span m="2385400">this</span> <span
  m="2385580">cause-order</span> <span m="2386040">n</span> <span
  m="2386360">time.</span> <span m="2388390">So,</span> <span
  m="2389020">in</span> <span m="2389070">general,</span> <span
  m="2390170">we</span> <span m="2390330">get</span> <span m="2392070">n</span>
  <span m="2392740">plus</span> <span m="2393830">x.</span></p><p><span
  m="2395560">Now,</span> <span m="2395760">this</span> <span
  m="2395980">is,</span> <span m="2396560">again,</span> <span
  m="2396890">not</span> <span m="2397180">a</span> <span
  m="2397310">recurrent</span> <span m="2397760">solvable</span> <span
  m="2398260">by</span> <span m="2398430">the</span> <span
  m="2398530">master</span> <span m="2398910">method</span> <span
  m="2399260">because</span> <span m="2399540">it</span> <span
  m="2399610">has</span> <span m="2399810">two</span> <span
  m="2399970">variables.</span> <span m="2403130">So</span> <span
  m="2403860">usually</span> <span m="2404310">when</span> <span
  m="2404430">you're</span> <span m="2404670">faced</span> <span
  m="2404920">with</span> <span m="2404990">this sort of</span> <span
  m="2405080">thing,</span> <span m="2405500">you</span> <span
  m="2405630">want</span> <span m="2405770">to</span> <span
  m="2405840">do</span> <span m="2406420">back</span> <span
  m="2406620">of</span> <span m="2406680">the</span> <span
  m="2406760">envelope</span> <span m="2407630">picture.</span> <span
  m="2408600">Draw a</span> <span m="2408970">recursion</span> <span
  m="2409490">tree.</span> <span m="2410110">That's a</span> <span
  m="2410450">good</span> <span m="2410600">way</span> <span
  m="2410730">to</span> <span m="2410810">go.</span> <span m="2411600">So</span>
  <span m="2411840">at</span> <span m="2412010">the</span> <span
  m="2412120">root--</span> <span m="2413450">now,</span> <span
  m="2413540">I</span> <span m="2413660">know</span> <span
  m="2413860">that</span> <span m="2414000">initially</span> <span
  m="2415250">x</span> <span m="2415590">equals</span> <span
  m="2415980">n.</span> <span m="2416720">When</span> <span m="2416860">I</span>
  <span m="2416940">start</span> <span m="2417190">out</span> <span
  m="2417420">I</span> <span m="2417510">have</span> <span m="2417790">n</span>
  <span m="2417970">coefficients,</span> <span m="2418540">I</span> <span
  m="2418640">have</span> <span m="2418900">n</span> <span
  m="2419190">different</span> <span m="2419540">positions</span> <span
  m="2419960">I</span> <span m="2420020">want</span> <span m="2420210">to</span>
  <span m="2420260">evaluate</span> <span m="2421190">them</span> <span
  m="2421270">at</span> <span m="2421550">because</span> <span
  m="2421840">that's</span> <span m="2422620">what</span> <span
  m="2422750">I</span> <span m="2422790">want</span> <span m="2423000">to</span>
  <span m="2423080">do</span> <span m="2423270">to</span> <span
  m="2423380">do</span> <span m="2423520">this</span> <span
  m="2423710">conversion</span> <span m="2424210">from</span> <span
  m="2424360">coefficients</span> <span m="2424700">to</span> <span
  m="2425040">samples.</span> <span m="2426490">So</span> <span
  m="2426900">at</span> <span m="2427080">the</span> <span
  m="2427230">root</span> <span m="2427470">of</span> <span
  m="2427550">the</span> <span m="2427740">recursion tree</span> <span
  m="2428190">I'm</span> <span m="2428270">just</span> <span
  m="2428410">going</span> <span m="2428520">to</span> <span
  m="2428580">write</span> <span m="2428800">n.</span> <span
  m="2429330">Order</span> <span m="2429610">n</span> <span
  m="2429820">work</span> <span m="2430570">to</span> <span
  m="2430680">get</span> <span m="2430840">started</span> <span
  m="2431510">and</span> <span m="2431700">to</span> <span m="2432160">do</span>
  <span m="2432300">the</span> <span m="2432390">recursions.</span></p><p><span
  m="2433360">There</span> <span m="2433480">are</span> <span
  m="2433570">two</span> <span m="2433870">recursive</span> <span
  m="2434330">calls.</span> <span m="2435610">One</span> <span
  m="2435850">has</span> <span m="2436050">som--</span> <span
  m="2436640">both</span> <span m="2436900">have</span> <span
  m="2437020">size</span> <span m="2437360">n</span> <span
  m="2437500">over</span> <span m="2437680">2</span> <span m="2438080">in</span>
  <span m="2438160">terms</span> <span m="2438390">of</span> <span
  m="2438510">a,</span> <span m="2439242">and</span> <span
  m="2439610">they</span> <span m="2439690">have</span> <span
  m="2440460">the</span> <span m="2440600">same</span> <span
  m="2441240">x--</span> <span m="2441720">which</span> <span
  m="2441940">is</span> <span m="2442230">also</span> <span
  m="2442470">known</span> <span m="2442670">as</span> <span
  m="2442940">n--</span> <span m="2444280">in</span> <span
  m="2444480">those</span> <span m="2444670">two</span> <span
  m="2444840">recursions.</span> <span m="2445340">So</span> <span
  m="2445750">in</span> <span m="2445860">fact,</span> <span
  m="2446330">the</span> <span m="2446420">linear</span> <span
  m="2446560">work</span> <span m="2446750">here</span> <span
  m="2446940">will</span> <span m="2447100">be</span> <span m="2447680">n</span>
  <span m="2447880">and</span> <span m="2448310">n,</span> <span m="2448740">and
  then we'll</span> <span m="2449170">get</span> <span m="2449390">n</span>
  <span m="2450110">and n.</span> <span m="2450680">x</span> <span
  m="2450970">never</span> <span m="2451240">goes</span> <span
  m="2451490">down,</span> <span m="2451800">so</span> <span
  m="2451940">x</span> <span m="2452240">always</span> <span
  m="2452660">remains</span> <span m="2453100">n--</span> <span
  m="2454390">the</span> <span m="2454510">original</span> <span
  m="2454890">value</span> <span m="2455320">of n.</span> <span
  m="2456120">This</span> <span m="2456300">is</span> <span m="2456440">a</span>
  <span m="2456740">bad</span> <span m="2457190">recurrence.</span> <span
  m="2459240">There are</span> <span m="2459550">n--</span> <span
  m="2460100">sorry,</span> <span m="2460260">there</span> <span
  m="2460330">are</span> <span m="2460520">log n</span> <span
  m="2460910">levels.</span> <span m="2461990">That's</span> <span
  m="2462240">the</span> <span m="2462300">good</span> <span
  m="2462550">news.</span> <span m="2462730">Once</span> <span
  m="2462930">we</span> <span m="2463040">get</span> <span
  m="2463210">down</span> <span m="2463470">to</span> <span
  m="2464440">constant</span> <span m="2464880">size</span> <span
  m="2465100">we</span> <span m="2465230">can</span> <span
  m="2465390">kind</span> <span m="2465560">of</span> <span
  m="2465640">stop.</span> <span m="2466300">When</span> <span
  m="2466410">there's</span> <span m="2466530">only</span> <span
  m="2466720">one</span> <span m="2467000">coefficient</span> <span
  m="2468020">I</span> <span m="2468150">know</span> <span
  m="2468320">how</span> <span m="2468490">to</span> <span
  m="2468730">evaluate</span> <span m="2469270">the</span> <span
  m="2469380">polynomial</span> <span m="2469910">with</span> <span
  m="2470490">just</span> <span m="2470790">a</span> <span m="2470890">0.</span>
  <span m="2471740">That's</span> <span m="2471940">easy.</span> <span
  m="2473090">So</span> <span m="2473410">down</span> <span
  m="2473560">at</span> <span m="2473900">the</span> <span
  m="2473980">bottom</span> <span m="2474340">here,</span> <span
  m="2474720">at</span> <span m="2474820">the</span> <span
  m="2475200">last</span> <span m="2475570">level--</span> <span
  m="2477010">this</span> <span m="2477100">is</span> <span
  m="2477250">the</span> <span m="2477340">height</span> <span
  m="2477540">log</span> <span m="2477795">n--</span> <span
  m="2479150">the</span> <span m="2479240">last</span> <span
  m="2479500">level</span> <span m="2479710">is</span> <span
  m="2479780">just,</span> <span m="2480290">again,</span> <span
  m="2480550">going</span> <span m="2480680">to</span> <span
  m="2480740">be</span> <span m="2480860">a</span> <span
  m="2480910">whole</span> <span m="2481040">bunch</span> <span
  m="2481260">of</span> <span m="2481350">n's--</span> <span
  m="2481790">all</span> <span m="2482080">the</span> <span
  m="2482150">same</span> <span m="2482880">n.</span> <span
  m="2483440">Here</span> <span m="2483750">n</span> <span m="2483950">is</span>
  <span m="2484110">the</span> <span m="2484240">original</span> <span
  m="2484560">value</span> <span m="2484860">of</span> <span
  m="2484930">x</span> <span m="2485410">because</span> <span
  m="2485630">we</span> <span m="2485740">haven't</span> <span
  m="2485930">changed</span> <span m="2486230">that.</span> <span
  m="2487250">How</span> <span m="2487420">many</span> <span
  m="2487650">n's</span> <span m="2487900">are</span> <span
  m="2487970">there</span> <span m="2488090">down</span> <span
  m="2488310">here?</span></p><p><span m="2494200">AUDIENCE: 2 to the log
  n.</span></p><p><span m="2494670">ERIK DEMAINE: 2</span> <span m="2494950">to
  the</span> <span m="2495080">log</span> <span m="2495435">n,</span> <span
  m="2495790">also</span> <span m="2496060">known</span> <span
  m="2496240">as</span> <span m="2496340">n.</span> <span
  m="2500717">Good.</span> <span m="2501180">So</span> <span
  m="2501400">we</span> <span m="2501510">had--</span> <span
  m="2503120">because</span> <span m="2503200">we</span> <span
  m="2503270">had</span> <span m="2503360">log n</span> <span
  m="2503670">levels,</span> <span m="2504410">we</span> <span
  m="2504510">had</span> <span m="2504650">binary</span> <span
  m="2505200">branching,</span> <span m="2505710">so it's</span> <span
  m="2506000">2</span> <span m="2506260">to</span> <span m="2506520">the</span>
  <span m="2506610">number</span> <span m="2506840">of</span> <span
  m="2506910">levels,</span> <span m="2507830">which</span> <span
  m="2508040">is</span> <span m="2508120">just</span> <span
  m="2508330">n.</span> <span m="2509100">So</span> <span
  m="2509790">this</span> <span m="2510030">is</span> <span m="2511860">n</span>
  <span m="2512000">squared.</span> <span m="2514180">All</span> <span
  m="2514390">this</span> <span m="2514540">work,</span> <span
  m="2515280">still</span> <span m="2515650">n</span> <span
  m="2515810">squared.</span></p><p><span m="2521540">Clearly</span> <span
  m="2521840">what</span> <span m="2522020">we</span> <span
  m="2522130">need</span> <span m="2523630">is</span> <span
  m="2523760">for</span> <span m="2523930">x</span> <span m="2524190">to</span>
  <span m="2524270">get</span> <span m="2524470">smaller,</span> <span
  m="2524870">too.</span> <span m="2526500">If</span> <span
  m="2526730">x--</span> <span m="2528350">if,</span> <span
  m="2528500">in</span> <span m="2528660">this</span> <span
  m="2528860">recursion--</span> <span m="2529580">let</span> <span
  m="2529750">me,</span> <span m="2530250">in</span> <span
  m="2530430">red,</span> <span m="2530860">draw</span> <span
  m="2531140">the</span> <span m="2531250">recursion</span> <span
  m="2531660">I</span> <span m="2531720">would</span> <span
  m="2531820">like</span> <span m="2532020">to</span> <span
  m="2532110">have.</span> <span m="2535980">If</span> <span
  m="2536170">x</span> <span m="2536510">became</span> <span
  m="2537080">x</span> <span m="2537330">over</span> <span m="2537560">2</span>
  <span m="2537820">here,</span> <span m="2538340">that's</span> <span
  m="2538480">the</span> <span m="2538640">only</span> <span
  m="2538950">change</span> <span m="2539320">we'd</span> <span
  m="2539490">need.</span> <span m="2540740">Then</span> <span
  m="2541640">n</span> <span m="2541860">and</span> <span m="2541960">x</span>
  <span m="2542305">change</span> <span m="2542650">in</span> <span
  m="2542710">exactly</span> <span m="2543240">the</span> <span
  m="2543350">same</span> <span m="2543630">way,</span> <span
  m="2544640">and</span> <span m="2544740">so</span> <span
  m="2544840">then</span> <span m="2545070">we</span> <span
  m="2545520">can</span> <span m="2545680">just</span> <span
  m="2545850">forget</span> <span m="2546090">about</span> <span
  m="2546340">x--</span> <span m="2546700">it's</span> <span
  m="2546860">going</span> <span m="2546950">to</span> <span
  m="2547000">be</span> <span m="2547110">the</span> <span
  m="2547210">same</span> <span m="2547450">as</span> <span
  m="2547570">n.</span> <span m="2548310">Then</span> <span
  m="2548490">we</span> <span m="2548590">get</span> <span m="2548840">2</span>
  <span m="2549520">times</span> <span m="2549810">n</span> <span
  m="2549930">over</span> <span m="2550100">2</span> <span
  m="2551610">plus</span> <span m="2552160">order</span> <span
  m="2552370">n.</span> <span m="2553040">Look</span> <span
  m="2553450">familiar?</span> <span m="2554440">It</span> <span
  m="2554510">is</span> <span m="2554780">our</span> <span
  m="2555040">bread</span> <span m="2555300">and</span> <span
  m="2555410">butter</span> <span m="2555670">recurrence--</span> <span
  m="2556140">merge</span> <span m="2556350">sort</span> <span
  m="2556550">recurrence.</span> <span m="2557500">That's</span> <span
  m="2557780">n</span> <span m="2557920">log</span> <span m="2558250">n.</span>
  <span m="2559470">That's</span> <span m="2559700">what</span> <span
  m="2559770">we</span> <span m="2559890">need</span> <span
  m="2560090">to</span> <span m="2560160">do.</span> <span
  m="2560330">Somehow,</span> <span m="2562370">when</span> <span
  m="2562560">we</span> <span m="2562740">convert</span> <span
  m="2564170">our</span> <span m="2564360">set</span> <span m="2564740">x</span>
  <span m="2566396">to</span> <span m="2566810">x</span> <span
  m="2567100">squared,</span> <span m="2568050">I</span> <span
  m="2568130">want</span> <span m="2568400">x</span> <span m="2568690">to</span>
  <span m="2568780">get</span> <span m="2569040">smaller.</span> <span
  m="2572100">Is</span> <span m="2572520">that</span> <span m="2572900">at
  all</span> <span m="2573150">plausible?</span> <span m="2573740">Let's</span>
  <span m="2573940">think</span> <span m="2574100">about</span> <span
  m="2574390">it.</span></p><p><span m="2584150">What's</span> <span
  m="2584410">the</span> <span m="2584570">base</span> <span
  m="2584900">case?</span> <span m="2586680">To keep</span> <span
  m="2586850">things</span> <span m="2587030">simple</span> <span
  m="2587370">let's</span> <span m="2587620">say</span> <span
  m="2588310">the</span> <span m="2588390">base</span> <span
  m="2588740">case</span> <span m="2589040">when</span> <span
  m="2591860">x</span> <span m="2592040">equals</span> <span
  m="2592380">1,</span> <span m="2593210">I'll</span> <span
  m="2593350">just</span> <span m="2593520">let</span> <span
  m="2593700">x</span> <span m="2594080">be--</span> <span
  m="2595350">let's</span> <span m="2595530">say</span> <span
  m="2595690">I</span> <span m="2595740">want</span> <span m="2595930">to</span>
  <span m="2596000">compute</span> <span m="2597230">my</span> <span
  m="2597740">a</span> <span m="2598020">at</span> <span m="2598260">1.</span>
  <span m="2599300">Keep</span> <span m="2599470">it</span> <span
  m="2599570">simple.</span> <span m="2602810">What</span> <span
  m="2603050">if</span> <span m="2603180">I</span> <span m="2603270">want</span>
  <span m="2603950">two</span> <span m="2604470">values</span> <span
  m="2604880">in</span> <span m="2604990">x?</span> <span m="2606170">I'd</span>
  <span m="2606290">like</span> <span m="2606530">to</span> <span
  m="2606620">have</span> <span m="2606810">the</span> <span
  m="2606890">feature</span> <span m="2607230">that</span> <span
  m="2607410">when</span> <span m="2607590">I</span> <span
  m="2607680">square</span> <span m="2608300">all</span> <span
  m="2608510">the</span> <span m="2608580">values</span> <span
  m="2608990">in</span> <span m="2609110">x--</span> <span m="2610680">so</span>
  <span m="2610910">I</span> <span m="2611010">want</span> <span
  m="2611380">two</span> <span m="2611590">values,</span> <span
  m="2612080">but</span> <span m="2612260">when</span> <span
  m="2612410">I</span> <span m="2612460">square</span> <span
  m="2612870">them</span> <span m="2613790">I</span> <span
  m="2613870">only</span> <span m="2614090">have</span> <span
  m="2614220">one</span> <span m="2614440">value.</span> <span
  m="2618240">Solve</span> <span m="2618580">for</span> <span
  m="2618730">x.</span> <span m="2624368">Yeah.</span></p><p><span
  m="2624846">AUDIENCE: Negative 1</span> <span m="2625324">and
  1?</span></p><p><span m="2625810">ERIK DEMAINE: Negative</span> <span
  m="2626200">1</span> <span m="2626400">and</span> <span m="2626520">1.</span>
  <span m="2629320">Whew,</span> <span m="2629806">tough one.</span> <span
  m="2631264">Ehh.</span> <span m="2632240">Not</span> <span
  m="2632430">bad.</span> <span m="2633470">Good</span> <span
  m="2633630">catch.</span> <span m="2635720">Negative</span> <span
  m="2636050">1</span> <span m="2636220">and</span> <span m="2636330">1.</span>
  <span m="2636710">That</span> <span m="2636940">could</span> <span
  m="2637080">work.</span> <span m="2639050">What</span> <span
  m="2639230">are</span> <span m="2639300">negative</span> <span m="2639600">1
  and 1?</span> <span m="2640060">They're</span> <span m="2640250">the</span>
  <span m="2640420">square</span> <span m="2641160">roots</span> <span
  m="2641530">of</span> <span m="2641670">1.</span> <span
  m="2642750">Negative</span> <span m="2643090">1</span> <span
  m="2643340">squared</span> <span m="2643760">is</span> <span
  m="2643910">1,</span> <span m="2644560">1</span> <span
  m="2644790">squared</span> <span m="2645160">is</span> <span
  m="2645280">1.</span> <span m="2645870">There's</span> <span
  m="2646040">two</span> <span m="2646210">square</span> <span
  m="2646500">roots</span> <span m="2646700">for</span> <span
  m="2646790">every</span> <span m="2646960">number.</span> <span
  m="2647920">Two</span> <span m="2648200">square</span> <span
  m="2648670">roots</span> <span m="2648870">for</span> <span
  m="2649010">every</span> <span m="2649230">number.</span> <span
  m="2649750">Interesting.</span> <span m="2651480">So</span> <span
  m="2651550">that</span> <span m="2651800">means,</span> <span
  m="2652320">if</span> <span m="2652460">I</span> <span m="2652520">just</span>
  <span m="2652700">keep</span> <span m="2652880">taking</span> <span
  m="2653180">square</span> <span m="2653510">roots,</span> <span
  m="2654300">when</span> <span m="2654420">I</span> <span
  m="2654490">square</span> <span m="2654890">them</span> <span
  m="2655290">it</span> <span m="2655450">collapses</span> <span
  m="2656380">by</span> <span m="2656640">a</span> <span
  m="2656710">factor</span> <span m="2657080">of</span> <span
  m="2657170">2.</span> <span m="2659190">Let</span> <span m="2659440">me</span>
  <span m="2662610">go to</span> <span m="2662840">another</span> <span
  m="2663050">board</span> <span m="2667440">and</span> <span
  m="2667520">define</span> <span m="2667830">something.</span></p><p><span
  m="2675160">You're all</span> <span m="2675480">anticipating</span> <span
  m="2676090">what's</span> <span m="2676250">going</span> <span
  m="2676340">to</span> <span m="2676390">happen,</span> <span
  m="2676900">but</span> <span m="2678100">I'm</span> <span
  m="2678260">going</span> <span m="2678350">to</span> <span
  m="2678430">say,</span> <span m="2679930">a</span> <span
  m="2680090">collapsing</span> <span m="2681840">set</span> <span
  m="2683350">x--</span> <span m="2685406">or,</span> <span m="2685840">a
  set</span> <span m="2686060">is</span> <span m="2686190">collapsing</span>
  <span m="2687270">if</span> <span m="2688040">either</span> <span
  m="2690830">the</span> <span m="2690900">size</span> <span
  m="2691330">of</span> <span m="2691440">x</span> <span
  m="2691690">squared</span> <span m="2692720">is</span> <span
  m="2692940">the</span> <span m="2693000">size</span> <span
  m="2693340">of</span> <span m="2693520">x</span> <span
  m="2693870">divided</span> <span m="2694290">by</span> <span
  m="2694430">2,</span> <span m="2697450">and,</span> <span
  m="2697610">recursively,</span> <span m="2698290">x</span> <span
  m="2698490">squared</span> <span m="2698820">is</span> <span
  m="2698940">collapsing.</span> <span m="2704810">So</span> <span
  m="2704930">I</span> <span m="2704980">need</span> <span
  m="2705140">this</span> <span m="2705290">to</span> <span
  m="2705390">work</span> <span m="2705660">all</span> <span
  m="2705940">the</span> <span m="2706020">way</span> <span
  m="2706140">down</span> <span m="2706340">the</span> <span
  m="2706400">recursion.</span> <span m="2707310">Or</span> <span
  m="2708190">I</span> <span m="2708250">need</span> <span m="2708410">a</span>
  <span m="2708460">base</span> <span m="2708740">case,</span> <span
  m="2709030">which</span> <span m="2709200">is</span> <span
  m="2709300">just</span> <span m="2709540">x</span> <span
  m="2709790">equals</span> <span m="2710090">1.</span> <span
  m="2711020">There's</span> <span m="2711170">a</span> <span
  m="2711220">single</span> <span m="2711670">item</span> <span
  m="2711970">in</span> <span m="2712060">x.</span> <span m="2712750">So</span>
  <span m="2712870">I</span> <span m="2712960">happened</span> <span
  m="2713250">to</span> <span m="2713310">start</span> <span
  m="2713560">with</span> <span m="2713920">x</span> <span
  m="2714180">equals</span> <span m="2715030">the</span> <span
  m="2715140">item</span> <span m="2715380">1.</span> <span
  m="2715610">It</span> <span m="2715690">didn't</span> <span
  m="2715860">have</span> <span m="2716080">to</span> <span
  m="2716170">be</span> <span m="2716300">1.</span> <span m="2716720">It</span>
  <span m="2717130">could</span> <span m="2717280">have</span> <span
  m="2717360">been</span> <span m="2718010">7.</span> <span
  m="2718980">It</span> <span m="2719120">couldn't</span> <span
  m="2719420">be</span> <span m="2719550">0</span> <span
  m="2719880">because</span> <span m="2720210">0--</span> <span
  m="2721770">you</span> <span m="2721990">won't</span> <span
  m="2722200">get</span> <span m="2722380">two</span> <span
  m="2722510">numbers.</span> <span m="2722930">There's</span> <span
  m="2723070">only</span> <span m="2723500">one</span> <span
  m="2723950">square</span> <span m="2724230">root</span> <span
  m="2724340">of</span> <span m="2724400">0.</span> <span m="2724780">OK,</span>
  <span m="2725000">so</span> <span m="2725190">I</span> <span
  m="2725300">lied</span> <span m="2725570">a</span> <span
  m="2725610">little</span> <span m="2725790">bit.</span> <span
  m="2726310">Other</span> <span m="2726530">than</span> <span
  m="2726710">0,</span> <span m="2727550">every</span> <span
  m="2727840">number</span> <span m="2728210">has</span> <span
  m="2728490">exactly</span> <span m="2728920">two</span> <span
  m="2729060">square</span> <span m="2729330">roots,</span> <span
  m="2730850">so</span> <span m="2731850">what's</span> <span
  m="2732250">the</span> <span m="2732520">square</span> <span
  m="2732910">root</span> <span m="2733090">of</span> <span
  m="2733410">negative</span> <span m="2733740">1?</span></p><p><span
  m="2735092">AUDIENCE: i.</span></p><p><span m="2735563">ERIK DEMAINE:
  i.</span> <span m="2737450">So</span> <span m="2739390">complex</span> <span
  m="2739810">numbers.</span> <span m="2741150">If</span> <span
  m="2741180">I</span> <span m="2741250">take</span> <span
  m="2741520">square</span> <span m="2741900">roots</span> <span
  m="2742240">of</span> <span m="2742370">these</span> <span
  m="2742580">guys</span> <span m="2743440">I</span> <span
  m="2743600">get</span> <span m="2744170">i</span> <span m="2745320">and</span>
  <span m="2745720">negative</span> <span m="2746020">i,</span> <span
  m="2747040">and</span> <span m="2747490">again</span> <span
  m="2747760">I</span> <span m="2747810">get</span> <span m="2748010">minus
  1</span> <span m="2748340">and</span> <span m="2748811">1.</span> <span
  m="2751640">That's</span> <span m="2752450">when</span> <span
  m="2752630">x</span> <span m="2753040">equals</span> <span
  m="2753295">4.</span> <span m="2753880">Turns</span> <span
  m="2754120">out</span> <span m="2754770">this</span> <span
  m="2754940">is</span> <span m="2755070">only</span> <span
  m="2755300">going</span> <span m="2755420">to</span> <span
  m="2755490">work</span> <span m="2755660">for</span> <span
  m="2755770">powers</span> <span m="2756090">of</span> <span
  m="2756200">2,</span> <span m="2756550">but,</span> <span
  m="2756770">hey,</span> <span m="2756960">if</span> <span m="2757190">n</span>
  <span m="2757340">isn't</span> <span m="2757440">a</span> <span
  m="2757570">power</span> <span m="2757870">of 2</span> <span
  m="2758050">just</span> <span m="2758260">round</span> <span
  m="2758590">up</span> <span m="2758740">to</span> <span m="2758850">the</span>
  <span m="2758910">next</span> <span m="2759130">power of</span> <span
  m="2759430">2.</span> <span m="2759680">That</span> <span
  m="2760270">only</span> <span m="2760500">hurts</span> <span
  m="2760730">me</span> <span m="2760850">by</span> <span m="2760990">a</span>
  <span m="2761050">factor</span> <span m="2761350">of</span> <span
  m="2761440">2.</span></p><p><span m="2763370">Complex</span> <span
  m="2763980">numbers.</span> <span m="2765100">Every</span> <span
  m="2765440">time</span> <span m="2765700">I</span> <span
  m="2765770">said</span> <span m="2766060">real</span> <span
  m="2766410">number</span> <span m="2766830">in</span> <span
  m="2766900">the</span> <span m="2766980">past,</span> <span
  m="2767740">pretend</span> <span m="2768070">I</span> <span
  m="2768170">said</span> <span m="2768370">complex</span> <span
  m="2768830">number.</span> <span m="2769670">Everything</span> <span
  m="2770120">I</span> <span m="2770160">said</span> <span m="2770380">is</span>
  <span m="2770460">still</span> <span m="2770670">true.</span> <span
  m="2770920">Actually,</span> <span m="2771790">the</span> <span
  m="2771960">root</span> <span m="2772270">thing</span> <span
  m="2772750">is</span> <span m="2772900">only</span> <span
  m="2773180">true</span> <span m="2773440">when</span> <span
  m="2773560">you</span> <span m="2773690">allow</span> <span
  m="2773940">complex</span> <span m="2774440">numbers.</span> <span
  m="2774820">Some</span> <span m="2775430">polynomials</span> <span
  m="2775920">have</span> <span m="2776050">complex</span> <span
  m="2776480">roots,</span> <span m="2777420">so</span> <span
  m="2778350">pretend</span> <span m="2778500">I</span> <span
  m="2778550">said</span> <span m="2778990">complex.</span> <span
  m="2780040">We're</span> <span m="2780230">going</span> <span
  m="2780320">to</span> <span m="2780380">need</span> <span
  m="2780530">complex</span> <span m="2780940">numbers.</span> <span
  m="2781280">This</span> <span m="2781510">is</span> <span
  m="2781620">why.</span> <span m="2782100">Because,</span> <span
  m="2782570">when</span> <span m="2782720">we'd</span> <span
  m="2782810">start</span> <span m="2783090">taking</span> <span
  m="2783330">square</span> <span m="2783590">roots,</span> <span
  m="2784330">we</span> <span m="2784570">immediately</span> <span
  m="2785010">get</span> <span m="2786970">complex</span> <span
  m="2787380">numbers.</span></p><p><span m="2787890">Next</span> <span
  m="2788210">would</span> <span m="2788310">be</span> <span
  m="2788490">x</span> <span m="2788710">equals</span> <span
  m="2789040">8.</span> <span m="2794400">Square</span> <span
  m="2794650">root</span> <span m="2794730">of</span> <span
  m="2794790">i.</span> <span m="2797160">Square</span> <span
  m="2797430">root</span> <span m="2797510">of</span> <span
  m="2797580">i--</span> <span m="2797910">let's see</span> <span m="2798140">if
  I</span> <span m="2798260">can</span> <span m="2798360">do</span> <span
  m="2798490">it--</span> <span m="2798990">should</span> <span
  m="2799240">be</span> <span m="2799530">root</span> <span m="2799780">2</span>
  <span m="2800030">over</span> <span m="2800250">2</span> <span
  m="2801390">times</span> <span m="2801690">1</span> <span
  m="2801910">plus</span> <span m="2802220">i.</span> <span
  m="2805420">And</span> <span m="2805520">then</span> <span
  m="2805660">this</span> <span m="2805840">one</span> <span
  m="2806020">is</span> <span m="2806170">just</span> <span
  m="2806420">the--</span> <span m="2810000">square</span> <span
  m="2810340">root</span> <span m="2810410">of</span> <span
  m="2810570">negative</span> <span m="2811170">i</span> <span
  m="2811470">is</span> <span m="2811640">going</span> <span
  m="2811760">to</span> <span m="2811850">be</span> <span
  m="2812000">root</span> <span m="2812210">2</span> <span
  m="2812440">over</span> <span m="2812610">2</span> <span
  m="2813360">times</span> <span m="2814440">1</span> <span
  m="2814800">minus</span> <span m="2815180">i,</span> <span
  m="2816890">and</span> <span m="2817070">then</span> <span
  m="2817220">we</span> <span m="2817300">have</span> <span
  m="2817590">all</span> <span m="2817800">our</span> <span
  m="2817950">old</span> <span m="2818150">guys.</span> <span
  m="2823640">Oh,</span> <span m="2823850">and</span> <span
  m="2823960">then</span> <span m="2824130">I</span> <span
  m="2824200">could</span> <span m="2824350">write</span> <span
  m="2824560">plus</span> <span m="2824770">or</span> <span
  m="2824840">minus</span> <span m="2825250">in</span> <span
  m="2825340">front</span> <span m="2825520">of</span> <span
  m="2825590">each</span> <span m="2825750">of</span> <span
  m="2826150">these.</span> <span m="2826610">I was like,</span> <span
  m="2826900">there weren't</span> <span m="2827170">enough</span> <span
  m="2827360">terms</span> <span m="2827700">there.</span> <span
  m="2828000">Now</span> <span m="2828250">I've</span> <span
  m="2828420">got</span> <span m="2828660">eight--</span> <span
  m="2829420">sorry,</span> <span m="2829540">I've</span> <span
  m="2829690">got</span> <span m="2829870">four</span> <span
  m="2830080">numbers</span> <span m="2830410">here.</span> <span
  m="2831190">I've</span> <span m="2831290">got</span> <span
  m="2831480">four</span> <span m="2831680">numbers</span> <span
  m="2831970">there.</span></p><p><span m="2832465">How</span> <span
  m="2832730">in</span> <span m="2832830">the</span> <span
  m="2832950">world</span> <span m="2833960">could</span> <span
  m="2834140">I</span> <span m="2834200">remember</span> <span
  m="2834710">this?</span> <span m="2835020">Maybe</span> <span
  m="2835260">I</span> <span m="2835340">memorized</span> <span
  m="2835920">it.</span> <span m="2836050">No,</span> <span m="2836910">I</span>
  <span m="2836930">didn't</span> <span m="2837120">memorize it.</span> <span
  m="2837530">It's</span> <span m="2837710">actually</span> <span
  m="2838010">really</span> <span m="2838400">easy</span> <span
  m="2839060">to</span> <span m="2839290">figure</span> <span
  m="2839540">this</span> <span m="2839730">out</span> <span
  m="2841330">if</span> <span m="2841470">you</span> <span
  m="2841570">know</span> <span m="2841700">geometry.</span> <span
  m="2843715">Geometry.</span> <span m="2845500">Let's</span> <span
  m="2845870">do</span> <span m="2846080">geometry</span> <span
  m="2846920">over</span> <span m="2847270">here.</span> <span
  m="2856090">It's</span> <span m="2856570">convenient.</span> <span
  m="2857070">I'm</span> <span m="2857260">actually</span> <span m="2857560">a
  geometer.</span></p><p><span m="2863180">You know,</span> <span
  m="2863610">complex</span> <span m="2864000">numbers</span> <span
  m="2864350">have</span> <span m="2864620">two</span> <span
  m="2864760">parts,</span> <span m="2865210">right?</span> <span
  m="2865380">The</span> <span m="2865490">real</span> <span
  m="2865700">part</span> <span m="2866200">and</span> <span
  m="2866240">the</span> <span m="2866310">complex</span> <span
  m="2866740">part.</span> <span m="2867570">I'm</span> <span
  m="2867680">going</span> <span m="2867800">to</span> <span
  m="2867870">draw</span> <span m="2868150">that</span> <span
  m="2868390">in</span> <span m="2868610">what's</span> <span
  m="2868770">called</span> <span m="2868940">the</span> <span
  m="2869000">complex</span> <span m="2869470">plane,</span> <span
  m="2870390">where</span> <span m="2870560">we</span> <span
  m="2870690">draw</span> <span m="2871000">the</span> <span
  m="2871130">real</span> <span m="2871370">part</span> <span
  m="2872260">here,</span> <span m="2873210">and</span> <span
  m="2873630">I</span> <span m="2873690">guess</span> <span
  m="2873880">it's</span> <span m="2873990">usually</span> <span
  m="2874250">called</span> <span m="2874440">the</span> <span
  m="2874530">imaginary</span> <span m="2875160">part</span> <span
  m="2875830">on</span> <span m="2875980">the</span> <span
  m="2876070">y-axis.</span> <span m="2877260">Every</span> <span
  m="2877580">point</span> <span m="2878000">in</span> <span
  m="2878070">this</span> <span m="2878240">plane</span> <span
  m="2878930">is</span> <span m="2879070">a</span> <span
  m="2879140">complex</span> <span m="2879540">number,</span> <span
  m="2879860">and</span> <span m="2879940">vice</span> <span
  m="2880190">versa--</span> <span m="2880600">the</span> <span
  m="2880650">same</span> <span m="2880920">thing.</span></p><p><span
  m="2884320">So</span> <span m="2884990">what</span> <span
  m="2885180">did</span> <span m="2885270">we</span> <span
  m="2885380">start</span> <span m="2885680">with?</span> <span
  m="2885870">We</span> <span m="2885950">started</span> <span
  m="2886270">with</span> <span m="2886430">the</span> <span
  m="2886500">number</span> <span m="2886790">1.</span> <span
  m="2888160">Number</span> <span m="2888400">1</span> <span
  m="2891780">will</span> <span m="2891880">be</span> <span
  m="2892020">here.</span> <span m="2892510">It</span> <span
  m="2892600">has</span> <span m="2892800">no</span> <span
  m="2893020">imaginary</span> <span m="2893560">part,</span> <span
  m="2894020">so</span> <span m="2894120">it's</span> <span
  m="2894240">on</span> <span m="2894430">the</span> <span
  m="2894550">x-axis--</span> <span m="2895430">this</span> <span
  m="2895620">is</span> <span m="2895720">the</span> <span
  m="2895820">real</span> <span m="2896070">line</span> <span
  m="2896310">down</span> <span m="2896510">here--</span> <span
  m="2897210">and</span> <span m="2897370">it's</span> <span
  m="2897510">at</span> <span m="2897770">position</span> <span
  m="2898150">1,</span> <span m="2898390">which</span> <span
  m="2898610">I'm</span> <span m="2898640">going to just</span> <span
  m="2899140">define</span> <span m="2899310">to</span> <span
  m="2899660">be</span> <span m="2899850">right</span> <span
  m="2900570">there.</span> <span m="2901860">Then</span> <span
  m="2902040">we've</span> <span m="2902130">got</span> <span
  m="2902330">negative 1.</span> <span m="2902630">That's</span> <span
  m="2903130">over</span> <span m="2903310">here.</span> <span
  m="2904650">Then</span> <span m="2904900">we</span> <span
  m="2905040">got</span> <span m="2905920">i.</span> <span
  m="2906860">That's</span> <span m="2907200">here,</span> <span
  m="2907680">1</span> <span m="2907950">times</span> <span
  m="2908250">i.</span> <span m="2908940">Then</span> <span
  m="2909110">we've</span> <span m="2909210">got</span> <span
  m="2909380">negative</span> <span m="2909700">i.</span> <span
  m="2910440">That's</span> <span m="2910650">here.</span> <span
  m="2913380">Then</span> <span m="2913530">we've</span> <span
  m="2913620">got</span> <span m="2913840">root</span> <span
  m="2914110">2</span> <span m="2914320">over</span> <span m="2914550">2</span>
  <span m="2914770">times</span> <span m="2915200">i</span> <span
  m="2915410">plus</span> <span m="2915790">1.</span> <span
  m="2916660">That's</span> <span m="2917780">here.</span> <span
  m="2920470">Root</span> <span m="2920620">2</span> <span
  m="2920760">over</span> <span m="2920920">2</span> <span m="2921120">by</span>
  <span m="2921600">root 2</span> <span m="2921830">over</span> <span
  m="2922130">2.</span> <span m="2923060">What is</span> <span
  m="2923290">a</span> <span m="2923370">property</span> <span
  m="2924110">of</span> <span m="2924530">root</span> <span m="2924700">2</span>
  <span m="2924830">over</span> <span m="2925040">2</span> <span
  m="2925750">comma</span> <span m="2926080">root</span> <span
  m="2926230">2</span> <span m="2926350">over</span> <span m="2926510">2?</span>
  <span m="2926920">It</span> <span m="2927250">has</span> <span
  m="2927600">distance</span> <span m="2928000">exactly</span> <span
  m="2928510">1</span> <span m="2928880">to</span> <span m="2928980">the</span>
  <span m="2929130">origin.</span></p><p><span m="2930850">If</span> <span
  m="2931100">I</span> <span m="2931200">draw</span> <span
  m="2931540">this</span> <span m="2931760">triangle,</span> <span
  m="2932810">root</span> <span m="2933060">2</span> <span
  m="2933440">over</span> <span m="2933650">2,</span> <span
  m="2935300">root</span> <span m="2935520">2</span> <span
  m="2935770">over</span> <span m="2936020">2.</span> <span m="2937012">I</span>
  <span m="2937510">square</span> <span m="2938010">this.</span> <span
  m="2938290">I</span> <span m="2938350">get</span> <span m="2938620">a</span>
  <span m="2938660">half.</span> <span m="2938990">I</span> <span
  m="2939070">square</span> <span m="2939330">this</span> <span
  m="2939570">I</span> <span m="2939630">get</span> <span m="2939790">a</span>
  <span m="2939810">half.</span> <span m="2940720">I</span> <span
  m="2940850">add</span> <span m="2941070">them</span> <span
  m="2941190">together,</span> <span m="2941570">I</span> <span
  m="2941610">get</span> <span m="2941800">what?</span> <span
  m="2942900">Take</span> <span m="2943080">the</span> <span
  m="2943150">square</span> <span m="2943400">root,</span> <span
  m="2943550">I</span> <span m="2943590">still</span> <span
  m="2943790">get</span> <span m="2943950">1,</span> <span m="2944170">so</span>
  <span m="2945050">this</span> <span m="2945280">distance</span> <span
  m="2945690">is</span> <span m="2945830">1.</span> <span
  m="2946870">Interesting.</span> <span m="2948270">And</span> <span
  m="2948450">then</span> <span m="2948740">I</span> <span
  m="2948800">got</span> <span m="2949020">the</span> <span
  m="2949100">negative</span> <span m="2949540">of</span> <span
  m="2949650">that,</span> <span m="2949860">which</span> <span
  m="2950020">is</span> <span m="2950140">over</span> <span
  m="2950320">here,</span> <span m="2951070">and</span> <span m="2951340">a
  negative</span> <span m="2951700">of that.</span> <span
  m="2952670">Then</span> <span m="2952840">this</span> <span
  m="2953000">is</span> <span m="2953130">the--</span> <span m="2953996">with
  a</span> <span m="2954430">negative--</span> <span m="2955720">did</span>
  <span m="2956020">I</span> <span m="2956080">get</span> <span
  m="2956220">it</span> <span m="2956280">wrong?</span> <span
  m="2957095">Yep,</span> <span m="2957590">sorry.</span> <span
  m="2958870">It</span> <span m="2958920">doesn't</span> <span
  m="2959360">matter,</span> <span m="2959940">but</span> <span
  m="2961080">I'll</span> <span m="2961150">think</span> <span
  m="2961340">of</span> <span m="2961430">it</span> <span m="2961490">as</span>
  <span m="2961790">i</span> <span m="2963240">minus--</span> <span
  m="2964860">killed a</span> <span m="2965305">chalk--</span> <span
  m="2966640">i</span> <span m="2967390">minus</span> <span
  m="2969580">1.</span> <span m="2970620">It's</span> <span
  m="2970780">the</span> <span m="2970880">same</span> <span
  m="2971160">because</span> <span m="2971340">I</span> <span
  m="2971380">have</span> <span m="2971480">the</span> <span m="2971560">plus
  and</span> <span m="2971780">minus,</span> <span m="2972200">but</span> <span
  m="2972820">I</span> <span m="2972940">like</span> <span
  m="2973220">the</span> <span m="2973310">geometry.</span> <span
  m="2974150">So</span> <span m="2974670">this</span> <span
  m="2975330">point</span> <span m="2975780">is</span> <span
  m="2976950">negative</span> <span m="2978110">root</span> <span
  m="2978300">2</span> <span m="2978420">over</span> <span m="2978560">2</span>
  <span m="2979210">by</span> <span m="2979370">root</span> <span
  m="2979550">2</span> <span m="2979670">over</span> <span m="2979800">2,</span>
  <span m="2980380">and</span> <span m="2980580">then</span> <span
  m="2980710">there's</span> <span m="2980900">the</span> <span
  m="2980950">negative</span> <span m="2981350">over</span> <span
  m="2981550">here.</span> <span m="2983724">What</span> <span
  m="2984170">property do</span> <span m="2984650">these</span> <span
  m="2984860">points</span> <span m="2985150">have?</span> <span
  m="2990770">I</span> <span m="2990840">heard</span> <span m="2990980">a</span>
  <span m="2991050">word.</span></p><p><span m="2991730">AUDIENCE: Unit</span>
  <span m="2992110">circle?</span></p><p><span m="2992490">ERIK DEMAINE:
  Unit</span> <span m="2992900">circle.</span> <span m="2997690">Good.</span>
  <span m="2998650">Who</span> <span m="2998760">said</span> <span
  m="2998970">unit</span> <span m="2999140">circle?</span> <span
  m="3000660">Nice.</span> <span m="3002160">It's</span> <span
  m="3002350">a</span> <span m="3002370">unit</span> <span
  m="3002620">circle,</span> <span m="3003050">right?</span> <span
  m="3003930">Clearly</span> <span m="3004250">that</span> <span
  m="3004410">deserves</span> <span m="3004730">a</span> <span
  m="3004780">Frisbee</span> <span m="3005130">end.</span></p><p><span
  m="3009970">Unit</span> <span m="3010380">circle.</span> <span
  m="3011200">Hm.</span> <span m="3013150">Circle.</span> <span m="3014980">It
  seem</span> <span m="3015450">good.</span> <span m="3017020">What's</span>
  <span m="3017410">going</span> <span m="3017740">on</span> <span
  m="3017980">here</span> <span m="3018870">is</span> <span m="3022110">I</span>
  <span m="3022220">took</span> <span m="3022480">this</span> <span
  m="3022730">number.</span> <span m="3024100">I</span> <span
  m="3024210">claimed</span> <span m="3024590">it</span> <span
  m="3024680">was</span> <span m="3024830">the</span> <span
  m="3024930">square</span> <span m="3025390">root</span> <span
  m="3026240">of</span> <span m="3026540">i</span> <span
  m="3028000">because</span> <span m="3028330">it</span> <span
  m="3028420">turns</span> <span m="3028670">out,</span> <span
  m="3028750">if</span> <span m="3028830">you</span> <span
  m="3028930">take</span> <span m="3029180">points</span> <span
  m="3029530">on</span> <span m="3029630">the</span> <span
  m="3029720">unit</span> <span m="3029970">circle</span> <span
  m="3030470">in</span> <span m="3030560">the</span> <span
  m="3030650">complex</span> <span m="3031090">plane,</span> <span
  m="3031670">when</span> <span m="3031810">you</span> <span
  m="3031920">square</span> <span m="3032360">a</span> <span
  m="3032400">number</span> <span m="3033320">it's</span> <span
  m="3033400">like</span> <span m="3033610">doubling</span> <span
  m="3034210">the</span> <span m="3034370">angle</span> <span
  m="3035070">relative to</span> <span m="3035570">the</span> <span
  m="3035720">x-axis.</span></p><p><span m="3036260">This</span> <span
  m="3036420">is</span> <span m="3036550">angle</span> <span
  m="3036800">0.</span> <span m="3037560">This</span> <span
  m="3037740">is</span> <span m="3037860">angle--</span> <span
  m="3038580">what</span> <span m="3038830">do you</span> <span m="3039010">call
  it--</span> <span m="3039210">45</span> <span m="3039630">degrees.</span>
  <span m="3040900">This</span> <span m="3041130">is</span> <span
  m="3041260">angle</span> <span m="3041940">90</span> <span
  m="3042230">degrees.</span> <span m="3042550">So</span> <span
  m="3042730">when</span> <span m="3042880">I</span> <span
  m="3043020">square</span> <span m="3043340">this</span> <span
  m="3043510">number</span> <span m="3044210">I</span> <span
  m="3044330">get</span> <span m="3044500">90</span> <span
  m="3044770">degrees.</span> <span m="3045360">That's</span> <span
  m="3045570">why</span> <span m="3045770">this</span> <span
  m="3045980">number</span> <span m="3047880">is</span> <span
  m="3048050">a</span> <span m="3048120">square</span> <span
  m="3048360">root</span> <span m="3048560">of</span> <span
  m="3049360">i.</span> <span m="3049820">I probably</span> <span
  m="3050050">should have</span> <span m="3050240">labeled</span> <span
  m="3050950">some</span> <span m="3051140">of</span> <span
  m="3051190">these.</span> <span m="3051648">This is</span> <span
  m="3052106">i.</span> <span m="3053022">This</span> <span
  m="3053480">is</span> <span m="3053620">minus</span> <span
  m="3054020">i.</span> <span m="3054770">This</span> <span
  m="3055240">is</span> <span m="3055520">minus</span> <span
  m="3055850">1,</span> <span m="3057500">and</span> <span
  m="3057760">this</span> <span m="3057920">is</span> <span
  m="3058020">1.</span> <span m="3060320">In</span> <span
  m="3060460">general,</span> <span m="3062310">we</span> <span
  m="3062460">get</span> <span m="3062710">something</span> <span
  m="3065540">called--</span> <span m="3071440">so</span> <span
  m="3072210">these</span> <span m="3072440">are</span> <span
  m="3072520">called</span> <span m="3072800">the</span> <span
  m="3073280">n-th</span> <span m="3074160">roots</span> <span
  m="3074480">of</span> <span m="3074590">unity.</span></p><p><span
  m="3079040">Unity</span> <span m="3079470">is</span> <span
  m="3079570">just</span> <span m="3079760">a</span> <span
  m="3079800">fancy</span> <span m="3080170">word</span> <span
  m="3080420">for</span> <span m="3080820">1.</span> <span m="3083330">1</span>
  <span m="3083560">is</span> <span m="3083680">here,</span> <span
  m="3085150">and</span> <span m="3085370">first</span> <span
  m="3085670">we</span> <span m="3085780">computed</span> <span
  m="3086290">the</span> <span m="3086370">square</span> <span
  m="3086700">roots</span> <span m="3086910">of</span> <span
  m="3087010">1.</span> <span m="3087380">They</span> <span
  m="3087470">were</span> <span m="3087590">minus</span> <span
  m="3087930">1</span> <span m="3088110">and</span> <span m="3088250">1.</span>
  <span m="3088920">Then</span> <span m="3089060">we</span> <span
  m="3089840">computed</span> <span m="3090360">the</span> <span
  m="3090570">fourth</span> <span m="3091070">roots</span> <span
  m="3091850">of</span> <span m="3091970">1.</span> <span m="3092280">All</span>
  <span m="3092580">of</span> <span m="3092910">these</span> <span
  m="3093080">numbers,</span> <span m="3096320">if</span> <span
  m="3096400">you</span> <span m="3096470">take</span> <span
  m="3096620">the</span> <span m="3096690">fourth</span> <span
  m="3096940">power,</span> <span m="3097910">you</span> <span
  m="3098000">get</span> <span m="3098190">1.</span> <span
  m="3099590">Then</span> <span m="3099820">we</span> <span
  m="3099930">computed</span> <span m="3100330">the</span> <span
  m="3100510">eighth</span> <span m="3101280">roots</span> <span
  m="3101530">of</span> <span m="3101620">1.</span></p><p><span
  m="3101970">All</span> <span m="3102320">of</span> <span
  m="3102400">these</span> <span m="3102570">numbers,</span> <span
  m="3102930">if</span> <span m="3103030">you</span> <span
  m="3103120">take</span> <span m="3103790">the</span> <span
  m="3103950">8th</span> <span m="3104260">power,</span> <span
  m="3105160">you</span> <span m="3105250">get</span> <span m="3105420">1</span>
  <span m="3105620">again.</span> <span m="3106140">So,</span> <span
  m="3106270">in</span> <span m="3106360">general,</span> <span
  m="3106830">n-th</span> <span m="3107040">roots</span> <span
  m="3107490">of</span> <span m="3107590">unity.</span> <span
  m="3109200">We're</span> <span m="3109390">going</span> <span
  m="3109490">to</span> <span m="3109560">assume</span> <span
  m="3109810">n</span> <span m="3109980">is</span> <span m="3110060">a</span>
  <span m="3110120">power</span> <span m="3110380">of</span> <span
  m="3110470">2,</span> <span m="3110740">but</span> <span
  m="3110920">this</span> <span m="3111120">notion</span> <span
  m="3111440">actually</span> <span m="3111720">makes</span> <span
  m="3111920">sense</span> <span m="3112110">for</span> <span
  m="3112240">any</span> <span m="3112460">n.</span> <span
  m="3113730">And</span> <span m="3114080">they're</span> <span
  m="3114220">just</span> <span m="3114430">uniformly</span> <span
  m="3114990">spaced</span> <span m="3115330">around</span> <span
  m="3115500">the</span> <span m="3115570">circle,</span> <span
  m="3116000">and</span> <span m="3116100">if</span> <span m="3116220">you
  know</span> <span m="3117072">some</span> <span m="3117500">geometry</span>
  <span m="3118090">and</span> <span m="3118220">how</span> <span
  m="3118440">it</span> <span m="3118480">relates</span> <span
  m="3118780">to</span> <span m="3118890">trig,</span> <span
  m="3119640">you</span> <span m="3119760">know</span> <span
  m="3119890">that</span> <span m="3120070">a</span> <span
  m="3120140">general</span> <span m="3120460">point</span> <span
  m="3120720">on</span> <span m="3120810">the</span> <span
  m="3120870">circle</span> <span m="3121820">is</span> <span
  m="3122200">cos</span> <span m="3122500">theta</span> <span
  m="3123370">comma</span> <span m="3123910">sine</span> <span
  m="3124250">theta.</span> <span m="3124610">x-coordinate</span> <span
  m="3125210">is</span> <span m="3125340">cos</span> <span
  m="3125570">theta.</span> <span m="3126480">y-coordinate</span> <span
  m="3126785">is</span> <span m="3127090">sine</span> <span
  m="3127320">theta.</span> <span m="3127650">This</span> <span
  m="3127730">is</span> <span m="3127840">also</span> <span m="3128210">a</span>
  <span m="3128260">funny</span> <span m="3128550">notation</span> <span
  m="3129010">for</span> <span m="3129120">complex</span> <span
  m="3129580">numbers--</span> <span m="3129990">not</span> <span
  m="3130150">so</span> <span m="3130260">funny,</span> <span
  m="3130600">this</span> <span m="3130810">is</span> <span
  m="3130960">the</span> <span m="3131110">geometric</span> <span
  m="3132090">interpretation</span> <span m="3133020">of</span> <span
  m="3134400">cos</span> <span m="3135710">theta</span> <span
  m="3137340">plus</span> <span m="3138500">i</span> <span
  m="3138660">sine</span> <span m="3139070">theta.</span></p><p><span
  m="3141510">And</span> <span m="3141680">if</span> <span m="3141810">I</span>
  <span m="3141870">want</span> <span m="3142110">them</span> <span
  m="3142230">uniformly</span> <span m="3142830">spaced</span> <span
  m="3143170">around</span> <span m="3143320">the</span> <span
  m="3143380">circle,</span> <span m="3143810">and</span> <span
  m="3143880">I</span> <span m="3143940">want</span> <span m="3144190">to</span>
  <span m="3144300">include</span> <span m="3145400">this</span> <span
  m="3145670">point--</span> <span m="3146460">also</span> <span
  m="3146790">known</span> <span m="3147060">as</span> <span
  m="3147290">theta</span> <span m="3147650">equals</span> <span
  m="3148200">0--</span> <span m="3148880">because</span> <span
  m="3149150">when</span> <span m="3149280">theta</span> <span
  m="3149530">equals</span> <span m="3149830">0,</span> <span
  m="3150510">cos</span> <span m="3150770">theta</span> <span
  m="3151050">is</span> <span m="3151160">1,</span> <span
  m="3151600">sine</span> <span m="3151900">theta</span> <span
  m="3152160">0.</span> <span m="3155070">So</span> <span m="3155170">I</span>
  <span m="3155240">want</span> <span m="3155420">to</span> <span
  m="3155470">say</span> <span m="3155740">4</span> <span
  m="3156820">theta</span> <span m="3158510">equals</span> <span
  m="3159180">to</span> <span m="3159280">0,</span> <span m="3160380">and</span>
  <span m="3160600">then--</span> <span m="3163220">here</span> <span
  m="3163530">I'm</span> <span m="3163610">going</span> <span
  m="3163720">to</span> <span m="3163780">get</span> <span
  m="3163940">fancy--</span> <span m="3164760">tau</span> <span
  m="3165180">over</span> <span m="3165430">n</span> <span m="3166630">to</span>
  <span m="3166830">tau</span> <span m="3167760">over</span> <span
  m="3167960">n</span> <span m="3170114">up</span> <span m="3170530">to</span>
  <span m="3171276">n</span> <span m="3171650">minus</span> <span
  m="3172050">1</span> <span m="3172430">over</span> <span m="3172700">n</span>
  <span m="3173190">times</span> <span m="3173680">tau.</span> <span
  m="3174280">What's</span> <span m="3174610">tau?</span></p><p><span
  m="3175846">AUDIENCE: 2pi.</span></p><p><span m="3176220">ERIK DEMAINE:
  2pi,</span> <span m="3177060">thank</span> <span m="3177310">you.</span> <span
  m="3180590">This</span> <span m="3180750">is</span> <span
  m="3181140">modern</span> <span m="3181510">notation</span> <span
  m="3182870">just</span> <span m="3183050">over</span> <span
  m="3183200">the</span> <span m="3183310">last</span> <span
  m="3183600">couple</span> <span m="3183800">years.</span> <span
  m="3184390">I</span> <span m="3184530">believe</span> <span m="3184870">in
  tau</span> <span m="3185260">so</span> <span m="3185460">much</span> <span
  m="3186200">I</span> <span m="3186290">got</span> <span m="3186450">it</span>
  <span m="3186520">tattooed</span> <span m="3186980">on</span> <span
  m="3187160">my</span> <span m="3187320">arm.</span> <span
  m="3189790">Tau</span> <span m="3190300">is</span> <span
  m="3190640">the</span> <span m="3190910">fundamental</span> <span
  m="3191490">constant.</span> <span m="3192260">Screw</span> <span
  m="3192580">pi.</span> <span m="3194310">None</span> <span
  m="3194460">of</span> <span m="3194530">that</span> <span m="3194830">3</span>
  <span m="3195350">and</span> <span m="3195460">change.</span> <span
  m="3196000">Six</span> <span m="3196550">and</span> <span m="3196680">change
  is</span> <span m="3197100">where</span> <span m="3197280">it's</span> <span
  m="3197400">at.</span> <span m="3199460">So</span> <span
  m="3200520">tau.</span> <span m="3201220">Clearly</span> <span
  m="3201530">this</span> <span m="3201680">is</span> <span
  m="3201780">much</span> <span m="3202020">nicer.</span> <span
  m="3202320">Tau</span> <span m="3202670">over</span> <span
  m="3202940">n,</span> <span m="3203080">not</span> <span
  m="3203320">2pi</span> <span m="3203840">over</span> <span
  m="3204120">n.</span> <span m="3204840">Tau</span> <span m="3205730">is</span>
  <span m="3205920">a</span> <span m="3205980">whole</span> <span
  m="3206190">circle.</span> <span m="3208870">This</span> <span
  m="3209030">is</span> <span m="3209140">one</span> <span
  m="3209390">n-th</span> <span m="3209550">of</span> <span m="3209640">a</span>
  <span m="3209770">circle,</span> <span m="3210190">2n-ths</span> <span
  m="3210680">of</span> <span m="3210760">a</span> <span
  m="3210860">circle,</span> <span m="3211690">n</span> <span
  m="3211910">minus</span> <span m="3212190">1</span> <span
  m="3212350">over</span> <span m="3212500">n-ths</span> <span
  m="3212610">of</span> <span m="3212720">a</span> <span
  m="3212780">circle.</span> <span m="3213020">I</span> <span
  m="3213100">didn't</span> <span m="3213300">do</span> <span
  m="3213480">n</span> <span m="3213750">n-ths</span> <span
  m="3213980">of</span> <span m="3214090">a</span> <span
  m="3214150">circle</span> <span m="3214470">because</span> <span
  m="3214770">that's</span> <span m="3215010">also</span> <span
  m="3215340">the</span> <span m="3215460">same</span> <span
  m="3215760">as</span> <span m="3215880">0.</span></p><p><span
  m="3219020">Now,</span> <span m="3222060">why</span> <span
  m="3225170">did</span> <span m="3225320">I</span> <span
  m="3225380">introduce</span> <span m="3225790">this</span> <span
  m="3225940">notation?</span> <span m="3227290">Because</span> <span
  m="3227490">there's</span> <span m="3227640">this</span> <span
  m="3227920">other</span> <span m="3228230">great</span> <span
  m="3228500">thing</span> <span m="3229540">called</span> <span
  m="3230240">Euler's</span> <span m="3230600">formula,</span> <span
  m="3233220">which</span> <span m="3233530">is</span> <span
  m="3233710">that</span> <span m="3234690">this</span> <span
  m="3235460">equals</span> <span m="3236770">e</span> <span
  m="3237950">to</span> <span m="3238150">the</span> <span m="3238570">i</span>
  <span m="3242375">theta.</span> <span m="3247130">Double</span> <span
  m="3247210">check.</span> <span m="3249380">It's</span> <span
  m="3249770">so</span> <span m="3249920">rare</span> <span
  m="3250150">that</span> <span m="3250340">I</span> <span
  m="3250400">get</span> <span m="3250620">to</span> <span m="3250710">do</span>
  <span m="3251430">real</span> <span m="3253000">calculus.</span> <span
  m="3254050">This</span> <span m="3254220">is</span> <span
  m="3254310">Euler's</span> <span m="3254630">formula--</span> <span
  m="3255010">e</span> <span m="3255610">for</span> <span
  m="3255820">Euler--</span> <span m="3256460">another</span> <span
  m="3256800">number--</span> <span m="3257190">2</span> <span
  m="3257350">and</span> <span m="3257470">change.</span> <span
  m="3258840">e</span> <span m="3259110">to</span> <span m="3259240">the</span>
  <span m="3259380">i--</span> <span m="3259880">this</span> <span
  m="3260120">is</span> <span m="3260280">funny</span> <span
  m="3260540">because</span> <span m="3260740">it's</span> <span
  m="3260880">complex--</span> <span m="3261540">times</span> <span
  m="3261810">theta</span> <span m="3262070">is</span> <span
  m="3262390">equal</span> <span m="3262720">to</span> <span
  m="3262880">cos</span> <span m="3263160">theta</span> <span
  m="3263420">plus</span> <span m="3263730">i</span> <span
  m="3263830">sine</span> <span m="3264070">theta.</span> <span
  m="3264780">This</span> <span m="3264890">is</span> <span
  m="3265020">the</span> <span m="3265150">relation</span> <span
  m="3265560">between</span> <span m="3266240">exponentials</span> <span
  m="3267460">and</span> <span m="3267660">trigonometry.</span> <span
  m="3268980">That's</span> <span m="3269460">a</span> <span
  m="3269690">big</span> <span m="3269880">thing</span> <span
  m="3270090">Euler</span> <span m="3270370">did.</span> <span
  m="3271670">Cool.</span> <span m="3273080">So</span> <span
  m="3273340">what?</span> <span m="3273660">Because</span> <span
  m="3274180">this</span> <span m="3274570">lets</span> <span
  m="3274840">us</span> <span m="3275060">understand</span> <span
  m="3275900">how</span> <span m="3276080">squares</span> <span
  m="3276520">work--</span> <span m="3278470">not</span> <span
  m="3279010">squares</span> <span m="3279440">the</span> <span
  m="3279520">shape,</span> <span m="3281450">squares</span> <span
  m="3282040">the</span> <span m="3282290">operation.</span></p><p><span
  m="3290580">When</span> <span m="3290830">I</span> <span
  m="3290950">take</span> <span m="3291240">squares--</span> <span
  m="3295400">so</span> <span m="3295560">if</span> <span m="3295660">I</span>
  <span m="3295760">take</span> <span m="3296040">e</span> <span
  m="3296260">to</span> <span m="3296370">the</span> <span m="3296520">i</span>
  <span m="3296670">theta,</span> <span m="3297060">this</span> <span
  m="3297320">is</span> <span m="3298720">one</span> <span m="3298980">of</span>
  <span m="3299100">my</span> <span m="3299350">roots</span> <span
  m="3299580">of</span> <span m="3299680">unity.</span> <span
  m="3300020">Let</span> <span m="3300500">me</span> <span
  m="3300570">expand</span> <span m="3300910">out</span> <span
  m="3301060">what</span> <span m="3301170">theta</span> <span
  m="3301440">is.</span> <span m="3302380">So</span> <span
  m="3302620">theta</span> <span m="3303570">is</span> <span
  m="3303910">some</span> <span m="3304410">k</span> <span
  m="3304840">times</span> <span m="3305270">tau</span> <span
  m="3305630">over</span> <span m="3305910">n.</span> <span
  m="3307460">Let's</span> <span m="3307670">do it this</span> <span
  m="3307870">way</span> <span m="3307970">first.</span> <span
  m="3309010">So</span> <span m="3309420">in</span> <span
  m="3309570">reality</span> <span m="3309920">we</span> <span
  m="3310030">have</span> <span m="3310910">k</span> <span
  m="3311990">tau</span> <span m="3312660">over</span> <span
  m="3312910">n,</span> <span m="3314950">but</span> <span
  m="3315310">when</span> <span m="3315500">I</span> <span
  m="3315580">square</span> <span m="3316070">it,</span> <span
  m="3317070">that's</span> <span m="3317330">the</span> <span
  m="3317410">same</span> <span m="3317670">thing</span> <span
  m="3317870">as</span> <span m="3317980">putting</span> <span
  m="3318220">the</span> <span m="3318330">2</span> <span
  m="3318610">right</span> <span m="3318810">here.</span> <span m="3319790">This
  is</span> <span m="3320070">the</span> <span m="3320140">same</span> <span
  m="3320400">thing</span> <span m="3320650">as</span> <span
  m="3320880">e</span> <span m="3321140">to</span> <span m="3321380">i</span>
  <span m="3321710">times</span> <span m="3322580">2</span> <span
  m="3322770">theta.</span></p><p><span m="3324570">Bingo.</span> <span
  m="3324890">I</span> <span m="3325000">get</span> <span
  m="3325220">what</span> <span m="3325380">I</span> <span
  m="3325430">was</span> <span m="3325570">claiming,</span> <span
  m="3325950">that</span> <span m="3326520">if</span> <span m="3326690">I</span>
  <span m="3326770">start</span> <span m="3327050">at</span> <span
  m="3327160">some</span> <span m="3327440">angle</span> <span
  m="3327760">theta</span> <span m="3328200">relative</span> <span
  m="3328590">to</span> <span m="3328700">the</span> <span
  m="3328820">x-axis,</span> <span m="3330060">when</span> <span
  m="3330270">I</span> <span m="3330360">square</span> <span
  m="3330720">the</span> <span m="3330830">number</span> <span
  m="3331450">I</span> <span m="3331570">just</span> <span
  m="3331760">double</span> <span m="3332020">the</span> <span
  m="3332160">angle.</span> <span m="3332950">This</span> <span
  m="3333160">is</span> <span m="3333290">why.</span> <span
  m="3335370">This</span> <span m="3335570">is</span> <span
  m="3335710">obvious</span> <span m="3337550">just</span> <span
  m="3337850">from</span> <span m="3338170">regular</span> <span
  m="3338860">algebra.</span> <span m="3339770">And</span> <span
  m="3339850">then</span> <span m="3340010">this</span> <span
  m="3340320">thing,</span> <span m="3340610">Euler's</span> <span
  m="3340930">formula,</span> <span m="3341820">tells</span> <span
  m="3342130">me</span> <span m="3342250">that</span> <span
  m="3342430">corresponds</span> <span m="3342910">to</span> <span
  m="3342990">doubling</span> <span m="3343330">the</span> <span
  m="3343430">angle</span> <span m="3344860">on</span> <span
  m="3345000">a</span> <span m="3345050">circle.</span> <span
  m="3345680">So</span> <span m="3345880">it only</span> <span
  m="3345950">works</span> <span m="3346140">with</span> <span
  m="3346210">points</span> <span m="3346440">on</span> <span
  m="3346520">a</span> <span m="3346570">circle.</span> <span
  m="3347970">So</span> <span m="3348190">when</span> <span m="3348340">I</span>
  <span m="3348400">go</span> <span m="3348620">here</span> <span
  m="3349340">I</span> <span m="3349510">get</span> <span m="3350060">e</span>
  <span m="3350380">to</span> <span m="3350540">the</span> <span
  m="3351170">i2k</span> <span m="3356700">times</span> <span m="3357050">tau
  over</span> <span m="3357330">n--</span> <span m="3358610">twice</span> <span
  m="3359160">as</span> <span m="3359280">far</span> <span
  m="3359640">around</span> <span m="3359930">circle.</span> <span
  m="3362080">All</span> <span m="3362160">right.</span> <span
  m="3363850">Fine.</span></p><p><span m="3366530">What</span> <span
  m="3366700">happens</span> <span m="3367040">if</span> <span
  m="3367170">I</span> <span m="3367230">take</span> <span
  m="3367440">this</span> <span m="3367700">number</span> <span
  m="3368820">and</span> <span m="3369000">I</span> <span m="3369060">square
  it?</span> <span m="3370520">This</span> <span m="3370800">has</span> <span
  m="3370990">a</span> <span m="3371090">really</span> <span
  m="3371320">big</span> <span m="3371650">angle.</span> <span
  m="3372030">This</span> <span m="3372240">is</span> <span
  m="3373980">1/2</span> <span m="3374690">plus</span> <span
  m="3374970">1/8,</span> <span m="3376040">whatever</span> <span
  m="3376170">that</span> <span m="3376370">is--</span> <span
  m="3377770">5/8</span> <span m="3378850">times</span> <span
  m="3379150">tau.</span> <span m="3380500">When</span> <span
  m="3380760">I</span> <span m="3381170">double</span> <span m="3381580">that
  angle</span> <span m="3383140">I</span> <span m="3383340">go</span> <span
  m="3385231">to</span> <span m="3385640">here.</span> <span
  m="3388230">Now,</span> <span m="3388870">this,</span> <span
  m="3389230">you</span> <span m="3389410">might</span> <span
  m="3389610">call</span> <span m="3389820">it,</span> <span
  m="3390080">10/8,</span> <span m="3391260">or</span> <span
  m="3391730">you</span> <span m="3391910">might</span> <span
  m="3392180">also</span> <span m="3392420">call</span> <span
  m="3392610">it</span> <span m="3392720">1/4</span> <span
  m="3395170">because</span> <span m="3395580">when</span> <span
  m="3395760">you</span> <span m="3395840">go</span> <span
  m="3395950">around</span> <span m="3396130">the</span> <span
  m="3396180">circle</span> <span m="3396540">you</span> <span
  m="3396630">stay</span> <span m="3396900">on</span> <span
  m="3397000">the</span> <span m="3397070">circle.</span></p><p><span
  m="3397880">So</span> <span m="3398020">there's</span> <span
  m="3398180">another</span> <span m="3398450">thing</span> <span
  m="3398650">going</span> <span m="3398920">on,</span> <span
  m="3399100">which</span> <span m="3399270">is</span> <span
  m="3399390">really--</span> <span m="3401160">this</span> <span
  m="3401420">is</span> <span m="3401740">e</span> <span m="3401960">to</span>
  <span m="3402090">the</span> <span m="3402210">i</span> <span
  m="3402950">times</span> <span m="3403630">2</span> <span
  m="3403880">theta</span> <span m="3405390">mod</span> <span
  m="3406200">tau.</span> <span m="3407580">Usually</span> <span
  m="3407860">we</span> <span m="3407970">think</span> <span
  m="3408150">of</span> <span m="3408220">mods</span> <span
  m="3408720">relative</span> <span m="3409070">to</span> <span
  m="3409140">integers,</span> <span m="3409720">but</span> <span
  m="3411670">what</span> <span m="3411870">I</span> <span
  m="3411940">mean</span> <span m="3412140">is</span> <span
  m="3412330">every</span> <span m="3412530">time</span> <span
  m="3412720">I</span> <span m="3412770">add</span> <span m="3412960">a</span>
  <span m="3413000">multiple</span> <span m="3413410">of tau</span> <span
  m="3413750">nothing</span> <span m="3414050">changes.</span> <span
  m="3414540">If</span> <span m="3414620">I</span> <span m="3414670">go</span>
  <span m="3414870">around</span> <span m="3415050">the</span> <span
  m="3415110">circle</span> <span m="3415430">five</span> <span
  m="3415690">times</span> <span m="3416050">and</span> <span
  m="3416170">then</span> <span m="3416320">do</span> <span
  m="3416440">something,</span> <span m="3416900">it's</span> <span
  m="3417150">the</span> <span m="3417200">same</span> <span
  m="3417410">as</span> <span m="3417480">just</span> <span
  m="3417630">doing</span> <span m="3417920">the something.</span> <span
  m="3419290">So</span> <span m="3419480">I</span> <span m="3419560">kind</span>
  <span m="3419790">of</span> <span m="3419880">need</span> <span
  m="3420080">that.</span></p><p><span m="3421620">And</span> <span
  m="3421840">this</span> <span m="3422040">is</span> <span
  m="3422160">true</span> <span m="3422500">because</span> <span
  m="3424110">e</span> <span m="3424720">to</span> <span m="3424820">the</span>
  <span m="3424980">i</span> <span m="3426000">tau</span> <span
  m="3427020">equals</span> <span m="3427560">1.</span> <span
  m="3428340">You</span> <span m="3428730">may</span> <span
  m="3428890">know</span> <span m="3429130">it</span> <span
  m="3429270">as</span> <span m="3429550">e</span> <span m="3429760">to</span>
  <span m="3429920">the</span> <span m="3430130">i</span> <span
  m="3430790">pi</span> <span m="3431320">equals</span> <span
  m="3431720">negative</span> <span m="3432090">1,</span> <span m="3432500">but
  clearly</span> <span m="3432870">this</span> <span m="3433110">is</span> <span
  m="3433220">a</span> <span m="3433310">superior</span> <span
  m="3433770">formula--</span> <span m="3434620">so</span> <span
  m="3434850">superior</span> <span m="3435670">I</span> <span
  m="3435810">got</span> <span m="3435990">it</span> <span
  m="3436060">tattooed</span> <span m="3436430">on</span> <span
  m="3436550">my</span> <span m="3436690">other</span> <span
  m="3437000">arm.</span></p><p><span m="3437220">[LAUGHTER]</span></p><p><span
  m="3440690">It's</span> <span m="3440850">amazing</span> <span
  m="3441310">what</span> <span m="3441440">you</span> <span
  m="3441520">can</span> <span m="3441660">do</span> <span
  m="3441780">with</span> <span m="3441900">a</span> <span
  m="3441960">laser</span> <span m="3442240">printer</span> <span
  m="3442590">and</span> <span m="3442670">a</span> <span
  m="3442760">temporary</span> <span m="3443190">tattoo</span> <span
  m="3443550">kit.</span> <span m="3444260">Sadly,</span> <span
  m="3444920">these</span> <span m="3445700">won't</span> <span
  m="3445840">last,</span> <span m="3446330">but</span> <span
  m="3447950">definitely</span> <span m="3448460">try</span> <span
  m="3448690">it at</span> <span m="3449140">home.</span> <span
  m="3451440">Cool.</span></p><p><span m="3452090">So</span> <span
  m="3452740">e</span> <span m="3452960">to</span> <span m="3453040">the</span>
  <span m="3453230">i</span> <span m="3453560">tau</span> <span
  m="3453940">equals</span> <span m="3454330">1,</span> <span
  m="3454920">so</span> <span m="3455890">going</span> <span
  m="3456130">around</span> <span m="3456390">in circles--</span> <span
  m="3456980">same</span> <span m="3457200">thing</span> <span
  m="3457440">as</span> <span m="3457560">not.</span> <span
  m="3458550">All</span> <span m="3458630">right.</span> <span
  m="3459860">So</span> <span m="3460550">you</span> <span
  m="3460720">can</span> <span m="3460840">draw</span> <span m="3461130">on
  this</span> <span m="3461290">picture</span> <span m="3461640">for</span>
  <span m="3461780">every</span> <span m="3462040">number,</span> <span
  m="3462390">what</span> <span m="3462580">is</span> <span
  m="3462680">its</span> <span m="3462810">square?</span> <span
  m="3464440">And,</span> <span m="3464620">in</span> <span
  m="3464690">general,</span> <span m="3465780">if</span> <span
  m="3465960">you</span> <span m="3466060">look</span> <span
  m="3466220">at</span> <span m="3466290">these</span> <span
  m="3466580">four</span> <span m="3466830">guys,</span> <span
  m="3468030">their</span> <span m="3468250">squares</span> <span
  m="3468660">are</span> <span m="3468710">just</span> <span
  m="3468880">going</span> <span m="3468980">to</span> <span
  m="3469040">be</span> <span m="3469160">these</span> <span
  m="3469400">two</span> <span m="3469520">guys.</span> <span
  m="3470040">If</span> <span m="3470160">you</span> <span
  m="3470290">look</span> <span m="3470430">at</span> <span
  m="3470510">these</span> <span m="3470760">four</span> <span
  m="3471010">guys,</span> <span m="3471850">their</span> <span
  m="3472070">squares</span> <span m="3472510">are</span> <span
  m="3472550">going</span> <span m="3472680">to</span> <span
  m="3472750">be</span> <span m="3473200">among</span> <span
  m="3473540">these</span> <span m="3473770">four</span> <span
  m="3473980">guys.</span></p><p><span m="3475000">So</span> <span
  m="3475130">I</span> <span m="3475180">started</span> <span
  m="3475500">with</span> <span m="3475760">8</span> <span
  m="3475950">guys.</span> <span m="3476440">I</span> <span
  m="3476500">square</span> <span m="3476770">them,</span> <span
  m="3476910">I</span> <span m="3476960">get</span> <span m="3477120">4.</span>
  <span m="3477530">I square</span> <span m="3477770">them,</span> <span
  m="3477950">I</span> <span m="3478010">get</span> <span m="3478210">2.</span>
  <span m="3478500">I</span> <span m="3478570">square</span> <span
  m="3478830">them,</span> <span m="3479010">I</span> <span
  m="3479060">get</span> <span m="3479240">1.</span> <span
  m="3479510">That's</span> <span m="3479730">how</span> <span
  m="3479870">we</span> <span m="3479990">constructed</span> <span
  m="3480480">it,</span> <span m="3481400">but</span> <span
  m="3481540">you</span> <span m="3481640">can</span> <span
  m="3481760">see</span> <span m="3481930">it</span> <span
  m="3482110">works</span> <span m="3482420">not</span> <span
  m="3482680">only</span> <span m="3483000">for</span> <span
  m="3483830">this</span> <span m="3484420">8-point</span> <span
  m="3484980">set</span> <span m="3485100">that</span> <span
  m="3485200">we</span> <span m="3485320">constructed</span> <span
  m="3485880">sort</span> <span m="3486030">of</span> <span
  m="3486100">by</span> <span m="3486270">hand,</span> <span
  m="3487800">but</span> <span m="3488030">it</span> <span
  m="3488180">works</span> <span m="3488500">for</span> <span
  m="3488710">the</span> <span m="3488860">n-th</span> <span
  m="3489130">roots</span> <span m="3489300">of</span> <span
  m="3489390">unity.</span> <span m="3489770">As</span> <span
  m="3489910">long</span> <span m="3490350">as</span> <span m="3490470">n</span>
  <span m="3490640">is</span> <span m="3490760">a</span> <span
  m="3490820">power</span> <span m="3491160">of</span> <span
  m="3491280">2</span> <span m="3493120">this</span> <span
  m="3493520">set</span> <span m="3493720">of</span> <span
  m="3493830">points</span> <span m="3494260">will</span> <span
  m="3494500">be</span> <span m="3494760">collapsing.</span></p><p><span
  m="3497690">So</span> <span m="3498840">if</span> <span m="3499200">n</span>
  <span m="3500130">is</span> <span m="3500340">the</span> <span
  m="3500410">power</span> <span m="3500740">of</span> <span
  m="3500880">2</span> <span m="3501710">for</span> <span
  m="3501760">some</span> <span m="3501970">integer</span> <span
  m="3502280">k,</span> <span m="3503240">then</span> <span
  m="3504480">n-th</span> <span m="3505480">roots</span> <span
  m="3505710">of</span> <span m="3505820">unity</span> <span
  m="3511120">are</span> <span m="3511380">collapsing</span> <span
  m="3522210">according</span> <span m="3522510">to</span> <span
  m="3522620">this</span> <span m="3522780">definition.</span> <span
  m="3524700">And</span> <span m="3524860">that's</span> <span
  m="3525060">what</span> <span m="3525140">we</span> <span
  m="3525280">want.</span> <span m="3526480">Then</span> <span
  m="3526850">this</span> <span m="3527090">divide</span> <span
  m="3527360">and</span> <span m="3527460">conquer</span> <span
  m="3527790">algorithm</span> <span m="3528480">runs</span> <span
  m="3528820">in</span> <span m="3528910">n</span> <span m="3529050">log</span>
  <span m="3529290">n</span> <span m="3529410">time</span> <span
  m="3530140">because</span> <span m="3530640">every</span> <span
  m="3530870">time</span> <span m="3531070">we</span> <span
  m="3531160">square</span> <span m="3531840">the</span> <span
  m="3531940">set</span> <span m="3532160">x,</span> <span m="3533000">we</span>
  <span m="3533160">reduce</span> <span m="3533470">its</span> <span
  m="3533600">size</span> <span m="3533890">by</span> <span m="3534030">a</span>
  <span m="3534130">factor</span> <span m="3534390">of</span> <span
  m="3534470">2.</span> <span m="3535510">We</span> <span m="3535660">get</span>
  <span m="3535840">t</span> <span m="3536020">of</span> <span
  m="3536090">n</span> <span m="3536280">equals</span> <span
  m="3536500">2</span> <span m="3536630">times</span> <span m="3536880">t</span>
  <span m="3537040">of</span> <span m="3537110">n</span> <span
  m="3537250">over</span> <span m="3537420">2</span> <span
  m="3537630">plus</span> <span m="3537930">n.</span> <span
  m="3538990">Plus</span> <span m="3539160">order</span> <span
  m="3539350">n</span> <span m="3539560">and</span> <span
  m="3539660">that's</span> <span m="3539850">order</span> <span
  m="3540050">n</span> <span m="3540160">log</span> <span
  m="3540400">n.</span></p><p><span m="3541190">And</span> <span
  m="3541340">so</span> <span m="3541470">this</span> <span
  m="3542630">whole</span> <span m="3542930">thing</span> <span
  m="3543760">we</span> <span m="3543920">compute--</span> <span
  m="3544540">in</span> <span m="3544610">other</span> <span
  m="3544740">words,</span> <span m="3545000">we</span> <span
  m="3545020">set</span> <span m="3545710">xk</span> <span m="3547050">to</span>
  <span m="3547280">be</span> <span m="3548540">e</span> <span
  m="3549790">to</span> <span m="3549940">the</span> <span m="3550170">ik</span>
  <span m="3551740">tau</span> <span m="3552510">over</span> <span
  m="3552780">n.</span> <span m="3553280">Now,</span> <span m="3554400">I guess
  I</span> <span m="3554490">should</span> <span m="3554650">say</span> <span
  m="3554770">how</span> <span m="3554880">to</span> <span
  m="3555010">compute</span> <span m="3555490">that,</span> <span
  m="3555780">but</span> <span m="3555910">let's</span> <span
  m="3556150">just</span> <span m="3556310">say</span> <span
  m="3556960">that's</span> <span m="3557240">given</span> <span
  m="3557510">to</span> <span m="3557630">you</span> <span
  m="3557710">for</span> <span m="3557870">free.</span> <span
  m="3558500">It</span> <span m="3558620">takes</span> <span
  m="3558810">constant</span> <span m="3559160">time</span> <span
  m="3559400">to</span> <span m="3559490">compute</span> <span
  m="3560320">each</span> <span m="3560710">roots of</span> <span
  m="3561070">unity.</span> <span m="3561650">In</span> <span
  m="3561760">fact,</span> <span m="3562150">again,</span> <span
  m="3562420">we</span> <span m="3562530">only</span> <span m="3562730">need to
  do</span> <span m="3563020">this</span> <span m="3563210">once</span> <span
  m="3563510">and</span> <span m="3563630">for</span> <span
  m="3563810">all</span> <span m="3565390">for</span> <span
  m="3565630">each</span> <span m="3565820">value</span> <span
  m="3566080">of</span> <span m="3566150">n,</span> <span m="3567000">so</span>
  <span m="3567200">you</span> <span m="3567300">can think of</span> <span
  m="3567640">it</span> <span m="3567700">as</span> <span
  m="3567810">just</span> <span m="3567990">being</span> <span
  m="3568170">part</span> <span m="3568450">of</span> <span
  m="3568530">the</span> <span m="3568650">algorithm.</span> <span
  m="3569680">These</span> <span m="3569910">are</span> <span
  m="3569940">the</span> <span m="3570080">xk's</span> <span
  m="3570540">we</span> <span m="3570670">use.</span> <span m="3570990">I</span>
  <span m="3571050">said</span> <span m="3571410">xk</span> <span
  m="3571870">could</span> <span m="3572020">be</span> <span
  m="3572160">anything</span> <span m="3572600">we</span> <span
  m="3572670">want</span> <span m="3572920">as</span> <span
  m="3573030">long</span> <span m="3573210">as</span> <span
  m="3573300">they're</span> <span m="3573430">all</span> <span
  m="3573550">different,</span> <span m="3574370">so</span> <span
  m="3574450">I'm</span> <span m="3574640">going</span> <span
  m="3574730">to</span> <span m="3574810">choose</span> <span
  m="3575130">them</span> <span m="3575290">to</span> <span
  m="3575400">be</span> <span m="3575580">n</span> <span
  m="3576240">uniformly</span> <span m="3576830">spaced</span> <span
  m="3577260">points</span> <span m="3578260">around</span> <span
  m="3578700">the</span> <span m="3579110">complex</span> <span
  m="3580040">unit</span> <span m="3580390">circle.</span> <span
  m="3581830">And</span> <span m="3582000">then</span> <span
  m="3582160">magically</span> <span m="3583240">this</span> <span
  m="3583550">algorithm</span> <span m="3584560">runs</span> <span
  m="3584840">in n</span> <span m="3584950">log n</span> <span
  m="3585380">time.</span> <span m="3586610">It's</span> <span
  m="3586740">pretty</span> <span m="3586960">cool.</span></p><p><span
  m="3589110">Intuitively,</span> <span m="3589535">you</span> <span
  m="3589960">think</span> <span m="3590130">of</span> <span
  m="3590200">real</span> <span m="3590370">numbers</span> <span
  m="3590690">x</span> <span m="3590870">squared,</span> <span
  m="3591150">of</span> <span m="3591230">course</span> <span
  m="3591590">it</span> <span m="3591690">has</span> <span
  m="3591720">the</span> <span m="3591790">same</span> <span m="3591990">sides
  as</span> <span m="3592350">x.</span> <span m="3594360">But</span> <span
  m="3594830">once</span> <span m="3595030">you</span> <span
  m="3595120">go</span> <span m="3595220">to</span> <span
  m="3595270">complex</span> <span m="3595670">numbers</span> <span
  m="3596580">there's</span> <span m="3596760">this</span> <span
  m="3596920">nifty</span> <span m="3597220">trick</span> <span
  m="3597950">where</span> <span m="3598330">you</span> <span
  m="3598420">start</span> <span m="3598700">with</span> <span
  m="3598820">one</span> <span m="3599030">n-th</span> <span
  m="3599640">of</span> <span m="3599820">the</span> <span
  m="3599900">circle</span> <span m="3600920">and</span> <span
  m="3601240">you'd</span> <span m="3601500">uniformly</span> <span
  m="3601930">space</span> <span m="3602220">points</span> <span
  m="3602590">after</span> <span m="3602810">the</span> <span
  m="3602890">first</span> <span m="3603220">level of</span> <span
  m="3603470">recursion.</span> <span m="3603920">You</span> <span
  m="3604080">only</span> <span m="3604350">have</span> <span
  m="3604520">to</span> <span m="3605010">be</span> <span
  m="3605120">dealing</span> <span m="3605380">with</span> <span
  m="3605520">n</span> <span m="3605650">over</span> <span
  m="3605820">two</span> <span m="3606000">of</span> <span
  m="3606100">those</span> <span m="3606310">points,</span> <span
  m="3607050">namely</span> <span m="3607310">the</span> <span
  m="3607420">even</span> <span m="3607720">ones,</span> <span
  m="3608580">also</span> <span m="3608850">known</span> <span
  m="3609010">as</span> <span m="3609120">the</span> <span m="3609250">n</span>
  <span m="3609380">over</span> <span m="3609580">[? 2th ?]</span> <span
  m="3609790">roots</span> <span m="3610160">of</span> <span
  m="3610290">unity.</span> <span m="3611470">And</span> <span
  m="3611600">after</span> <span m="3611740">the next</span> <span
  m="3611880">level</span> <span m="3612050">of</span> <span
  m="3612260">recursion</span> <span m="3612720">is the</span> <span
  m="3612970">n over</span> <span m="3613140">fourth</span> <span
  m="3613470">roots</span> <span m="3613650">of</span> <span
  m="3613720">unity.</span> <span m="3614130">And</span> <span
  m="3614150">so</span> <span m="3614290">on.</span> <span m="3614870">So</span>
  <span m="3614910">this</span> <span m="3615110">recursion</span> <span
  m="3615600">is</span> <span m="3615700">well</span> <span
  m="3615860">defined.</span> <span m="3616930">When</span> <span
  m="3617040">you</span> <span m="3617100">have</span> <span
  m="3617410">a</span> <span m="3617450">vector</span> <span m="3617820">of
  size</span> <span m="3618090">n</span> <span m="3618690">you</span> <span
  m="3618830">just</span> <span m="3619030">have</span> <span
  m="3619140">to</span> <span m="3619240">deal</span> <span
  m="3619420">with</span> <span m="3619510">the</span> <span
  m="3619620">n-th</span> <span m="3619870">roots</span> <span
  m="3620040">of</span> <span m="3620120">unity,</span> <span
  m="3621050">and</span> <span m="3621230">you're</span> <span
  m="3621330">happy.</span></p><p><span m="3625710">That</span> <span
  m="3626020">is</span> <span m="3627110">fast</span> <span
  m="3627380">Fourier</span> <span m="3627660">transform.</span> <span
  m="3628090">That</span> <span m="3628350">algorithm</span> <span
  m="3629500">with</span> <span m="3629780">these</span> <span
  m="3630050">xi's</span> <span m="3631180">is</span> <span
  m="3631390">FFT.</span> <span m="3633750">So</span> <span
  m="3634160">let</span> <span m="3634260">me</span> <span
  m="3634440">write</span> <span m="3634600">this</span> <span
  m="3634760">somewhere.</span> <span m="3644590">It</span> <span
  m="3644700">kind</span> <span m="3644890">of</span> <span
  m="3644960">snuck</span> <span m="3645260">up</span> <span
  m="3645400">on</span> <span m="3645560">us.</span> <span
  m="3646040">This</span> <span m="3646350">is</span> <span
  m="3646730">the</span> <span m="3646900">algorithm</span> <span
  m="3647290">we</span> <span m="3647420">were</span> <span
  m="3647600">aiming</span> <span m="3648670">to</span> <span
  m="3649090">find.</span></p><p><span m="3650690">Fast</span> <span
  m="3651030">Fourier</span> <span m="3651370">transform</span> <span
  m="3661440">is</span> <span m="3664230">that</span> <span
  m="3664490">divide</span> <span m="3664770">and</span> <span
  m="3664850">conquer</span> <span m="3665160">algorithm</span> <span
  m="3665640">on</span> <span m="3665750">the</span> <span
  m="3665820">right.</span> <span m="3672570">I'll</span> <span
  m="3672920">write</span> <span m="3673060">it</span> <span
  m="3673550">abstractly.</span> <span m="3674860">For</span> <span
  m="3675070">something</span> <span m="3675340">called</span> <span
  m="3675540">the</span> <span m="3675590">DFT--</span> <span
  m="3677210">the</span> <span m="3677340">discrete</span> <span
  m="3677800">Fourier</span> <span m="3678080">transform--</span> <span
  m="3685210">is</span> <span m="3685490">the</span> <span
  m="3685740">corresponding</span> <span m="3686420">mathematical</span> <span
  m="3687360">transformation.</span> <span m="3689570">The fast</span> <span
  m="3689840">is</span> <span m="3689960">about</span> <span m="3690230">an
  algorithm.</span> <span m="3691310">Discrete</span> <span
  m="3691700">is</span> <span m="3691820">about</span> <span
  m="3693180">discrete.</span> <span m="3694840">So</span> <span
  m="3695030">DFT</span> <span m="3697160">is</span> <span
  m="3698700">this</span> <span m="3698950">thing</span> <span m="3699080">that
  we</span> <span m="3699290">wanted</span> <span m="3699450">to</span> <span
  m="3699610">compute,</span> <span m="3700040">which</span> <span
  m="3700210">was</span> <span m="3700410">basically</span> <span
  m="3701370">the</span> <span m="3701550">product</span> <span
  m="3702260">v</span> <span m="3702650">times</span> <span
  m="3703320">a.</span></p><p><span m="3705660">Remember,</span> <span
  m="3705940">v</span> <span m="3706130">was</span> <span m="3706330">the</span>
  <span m="3706380">Vandermonde</span> <span m="3706810">matrix,</span> <span
  m="3708310">and</span> <span m="3708940">it</span> <span
  m="3709100">depended</span> <span m="3709540">on</span> <span
  m="3709680">all</span> <span m="3709810">these</span> <span
  m="3710050">xk's.</span> <span m="3712430">And</span> <span
  m="3712680">we're</span> <span m="3712780">going</span> <span
  m="3712900">to</span> <span m="3712960">set</span> <span m="3714180">xk</span>
  <span m="3715400">to</span> <span m="3715580">be</span> <span
  m="3716010">this</span> <span m="3716940">e</span> <span m="3717210">to</span>
  <span m="3717370">the</span> <span m="3717810">ik</span> <span
  m="3719040">tau</span> <span m="3719450">over</span> <span
  m="3719800">n.</span> <span m="3723400">So</span> <span m="3724180">if</span>
  <span m="3724330">you</span> <span m="3724460">remember</span> <span
  m="3725610">the</span> <span m="3726470">vjk</span> <span
  m="3729900">here</span> <span m="3730610">was</span> <span
  m="3731640">xj</span> <span m="3732620">to the</span> <span
  m="3733110">k-th</span> <span m="3733600">power,</span> <span
  m="3734810">so</span> <span m="3735000">this</span> <span
  m="3735220">just</span> <span m="3735410">becomes</span> <span
  m="3736840">e</span> <span m="3737630">to</span> <span m="3737770">the</span>
  <span m="3738030">ijk</span> <span m="3741130">tau</span> <span
  m="3742030">over</span> <span m="3742250">n.</span> <span
  m="3743650">It's</span> <span m="3743780">a</span> <span
  m="3743840">little</span> <span m="3744050">funny</span> <span
  m="3744400">these</span> <span m="3744890">are</span> <span
  m="3745140">all</span> <span m="3745560">consecutive</span> <span
  m="3746120">because</span> <span m="3746370">this</span> <span
  m="3746550">is</span> <span m="3746670">a</span> <span
  m="3746750">totally</span> <span m="3747200">different,</span> <span
  m="3747640">but--</span> <span m="3749940">that's</span> <span
  m="3750200">the</span> <span m="3750300">matrix.</span> <span
  m="3751620">If</span> <span m="3751730">you</span> <span
  m="3751840">take</span> <span m="3752210">that</span> <span
  m="3752550">matrix</span> <span m="3753560">times</span> <span
  m="3754770">a</span> <span m="3754810">vector,</span> <span
  m="3755260">that</span> <span m="3755480">is</span> <span
  m="3755590">called</span> <span m="3755770">a</span> <span
  m="3755850">discrete</span> <span m="3756200">Fourier</span> <span
  m="3756500">transform</span> <span m="3756835">of the</span> <span
  m="3757170">vector,</span> <span m="3758530">and</span> <span
  m="3758900">FFT</span> <span m="3760010">is</span> <span m="3760170">a</span>
  <span m="3760230">way</span> <span m="3760330">to</span> <span
  m="3760400">compute</span> <span m="3760750">it in</span> <span
  m="3760900">n</span> <span m="3761000">log</span> <span m="3761230">n</span>
  <span m="3761390">time.</span> <span m="3761780">You</span> <span
  m="3761860">just</span> <span m="3762050">run</span> <span
  m="3762250">this</span> <span m="3762410">algorithm</span> <span
  m="3763330">and</span> <span m="3763470">for</span> <span
  m="3763560">those</span> <span m="3763930">xk's</span> <span
  m="3764520">it'll</span> <span m="3764680">just</span> <span
  m="3764850">work</span> <span m="3765180">in n log</span> <span m="3765642">n
  time.</span> <span m="3768880">Cool.</span></p><p><span m="3770480">But</span>
  <span m="3770670">if</span> <span m="3770770">you</span> <span
  m="3770900">remember</span> <span m="3771320">way</span> <span
  m="3771540">back</span> <span m="3771810">to</span> <span
  m="3771920">the</span> <span m="3772030">beginning,</span> <span
  m="3772520">what</span> <span m="3772690">we</span> <span
  m="3772850">needed</span> <span m="3773560">is</span> <span
  m="3773750">a</span> <span m="3773820">way--</span> <span
  m="3774160">this</span> <span m="3774390">converts</span> <span
  m="3775000">a</span> <span m="3775080">coefficient</span> <span
  m="3775590">vector</span> <span m="3776300">into</span> <span
  m="3776520">a</span> <span m="3776580">sample</span> <span
  m="3776970">vector.</span> <span m="3778390">Then</span> <span
  m="3778710">we</span> <span m="3778800">can</span> <span
  m="3782760">multiply</span> <span m="3783490">the</span> <span
  m="3783740">polynomials,</span> <span m="3784890">then</span> <span
  m="3785030">we</span> <span m="3785100">need</span> <span
  m="3785240">to</span> <span m="3785320">transform</span> <span
  m="3785820">the</span> <span m="3785910">sample</span> <span
  m="3786390">vector</span> <span m="3786770">that</span> <span
  m="3786910">results</span> <span m="3787790">back</span> <span
  m="3788150">into</span> <span m="3788410">a</span> <span
  m="3788470">coefficient</span> <span m="3788980">vector.</span> <span
  m="3789820">So</span> <span m="3789990">we're</span> <span
  m="3790120">only</span> <span m="3790460">half</span> <span
  m="3790890">done.</span> <span m="3791750">I</span> <span
  m="3792150">only</span> <span m="3792390">have</span> <span
  m="3792790">15</span> <span m="3793190">minutes.</span> <span
  m="3793840">Luckily,</span> <span m="3794260">the</span> <span
  m="3794430">other</span> <span m="3794620">half</span> <span
  m="3794930">is</span> <span m="3795230">almost</span> <span
  m="3795620">identical</span> <span m="3796300">to</span> <span
  m="3796410">this</span> <span m="3796620">half,</span> <span
  m="3797040">so</span> <span m="3797780">let's</span> <span
  m="3798020">do</span> <span m="3798140">that</span> <span
  m="3798450">next.</span> <span m="3799420">Maybe</span> <span
  m="3799760">over</span> <span m="3800000">here.</span></p><p><span
  m="3808160">So</span> <span m="3808370">we've</span> <span
  m="3808500">got</span> <span m="3808750">our</span> <span
  m="3808930">great</span> <span m="3809380">divide and</span> <span
  m="3809550">conquer</span> <span m="3809880">algorithm,</span> <span
  m="3811130">what</span> <span m="3811270">we</span> <span
  m="3811410">need</span> <span m="3811640">now--</span> <span
  m="3812810">let</span> <span m="3812940">me</span> <span
  m="3813020">give</span> <span m="3813190">you</span> <span
  m="3813290">the</span> <span m="3813490">polynomial</span> <span
  m="3814590">multiplication</span> <span m="3815190">algorithm.</span> <span
  m="3818520">Let's</span> <span m="3818940">call</span> <span
  m="3819130">this--</span> <span m="3820180">sound</span> <span
  m="3820660">more</span> <span m="3820870">exotic--</span> <span
  m="3821630">fast</span> <span m="3822130">polynomial</span> <span
  m="3822660">multiplication,</span> <span m="3824290">fast</span> <span
  m="3824640">meaning</span> <span m="3824990">n</span> <span
  m="3825090">log</span> <span m="3825310">n.</span> <span
  m="3828830">Let's</span> <span m="3829030">say</span> <span
  m="3829170">that</span> <span m="3829310">we're</span> <span
  m="3829440">given</span> <span m="3829810">two</span> <span
  m="3832550">polynomials,</span> <span m="3833250">a and</span> <span
  m="3833550">b,</span> <span m="3834620">represented</span> <span
  m="3835230">in</span> <span m="3835440">coefficient</span> <span
  m="3836200">form.</span> <span m="3840770">What</span> <span
  m="3840990">we</span> <span m="3841130">need</span> <span
  m="3843180">is--</span> <span m="3843470">I'll</span> <span m="3843760">call
  it</span> <span m="3844110">a</span> <span m="3844250">star,</span> <span
  m="3845650">which</span> <span m="3845910">is</span> <span
  m="3846280">the</span> <span m="3846370">result</span> <span
  m="3846910">of</span> <span m="3847030">running</span> <span
  m="3847480">FFT</span> <span m="3848030">on</span> <span m="3848260">a.</span>
  <span m="3850230">It's</span> <span m="3850480">the</span> <span
  m="3850610">discrete</span> <span m="3851000">Fourier</span> <span
  m="3851270">transform</span> <span m="3851720">of</span> <span
  m="3851900">a.</span> <span m="3852380">b</span> <span
  m="3852860">star,</span> <span m="3855320">do</span> <span
  m="3855550">the</span> <span m="3855650">same</span> <span
  m="3855920">thing.</span></p><p><span m="3857430">So</span> <span
  m="3857570">we</span> <span m="3857680">know</span> <span
  m="3858140">what</span> <span m="3858320">this</span> <span
  m="3858510">means</span> <span m="3859100">is</span> <span
  m="3859750">convert</span> <span m="3860250">a</span> <span m="3860650">from
  a</span> <span m="3861050">coefficient</span> <span m="3861500">vector</span>
  <span m="3861800">into</span> <span m="3861960">a</span> <span
  m="3862020">sample</span> <span m="3862380">vector.</span> <span
  m="3863040">Convert</span> <span m="3863480">b</span> <span
  m="3864200">from</span> <span m="3864480">a</span> <span
  m="3864530">coefficient</span> <span m="3864980">vector</span> <span
  m="3865270">into a</span> <span m="3865360">sample</span> <span
  m="3865690">vector.</span> <span m="3865970">Now</span> <span
  m="3866180">I</span> <span m="3866270">have</span> <span
  m="3866450">the</span> <span m="3866540">samples</span> <span
  m="3867150">of</span> <span m="3867260">a</span> <span m="3867410">star</span>
  <span m="3868580">at</span> <span m="3869690">the</span> <span
  m="3869830">n-th</span> <span m="3870080">roots</span> <span
  m="3870260">of</span> <span m="3870360">unity--</span> <span
  m="3871880">these</span> <span m="3872080">guys--</span> <span
  m="3875100">and</span> <span m="3875270">I</span> <span
  m="3875330">have</span> <span m="3875520">the</span> <span
  m="3875980">samples</span> <span m="3876400">of</span> <span
  m="3876490">b</span> <span m="3876930">at</span> <span m="3877130">the</span>
  <span m="3877210">exact</span> <span m="3877750">same</span> <span
  m="3878140">points--</span> <span m="3878630">the</span> <span
  m="3878750">n-th</span> <span m="3878980">roots</span> <span
  m="3879150">of</span> <span m="3879230">unity--</span> <span
  m="3880250">so</span> <span m="3880450">I</span> <span m="3880550">can</span>
  <span m="3880730">compute</span> <span m="3881110">c</span> <span
  m="3881430">star,</span> <span m="3883160">the</span> <span
  m="3883870">transform</span> <span m="3884500">version--</span> <span
  m="3884990">the</span> <span m="3885230">DFT</span> <span
  m="3885900">of</span> <span m="3886140">c--</span> <span m="3887170">is</span>
  <span m="3887400">just</span> <span m="3887750">the,</span> <span
  m="3889940">I</span> <span m="3890060">mean,</span> <span m="3890260">c</span>
  <span m="3890610">star</span> <span m="3890950">k</span> <span
  m="3891920">equals</span> <span m="3892530">a</span> <span
  m="3892690">star</span> <span m="3893020">k</span> <span
  m="3894490">times</span> <span m="3895260">b</span> <span
  m="3895440">star</span> <span m="3895690">k.</span> <span
  m="3895900">This</span> <span m="3896060">is</span> <span
  m="3896190">the</span> <span m="3896340">multiplication</span> <span
  m="3897070">algorithm</span> <span m="3899970">for</span> <span
  m="3900150">sample</span> <span m="3900560">vectors.</span> <span
  m="3901160">We</span> <span m="3901290">started</span> <span
  m="3901610">with</span> <span m="3901730">that.</span> <span
  m="3902440">That's</span> <span m="3902680">linear</span> <span
  m="3902970">time.</span></p><p><span m="3903990">And</span> <span
  m="3904200">then</span> <span m="3904690">the</span> <span
  m="3904780">missing</span> <span m="3905130">piece</span> <span
  m="3905970">is</span> <span m="3906180">I</span> <span m="3906240">need</span>
  <span m="3906420">to</span> <span m="3906610">re-compute</span> <span
  m="3907170">c,</span> <span m="3908120">which</span> <span
  m="3908390">is</span> <span m="3908580">the</span> <span
  m="3908860">inverse</span> <span m="3909840">fast</span> <span
  m="3910170">Fourier</span> <span m="3910640">transform</span> <span
  m="3911885">of</span> <span m="3912380">c</span> <span
  m="3913750">star.</span> <span m="3917940">So</span> <span
  m="3918260">this</span> <span m="3918450">is</span> <span
  m="3918640">the</span> <span m="3919390">missing</span> <span
  m="3920100">link,</span> <span m="3920520">so</span> <span
  m="3920590">to</span> <span m="3920680">speak.</span> <span
  m="3921030">We</span> <span m="3921130">need</span> <span
  m="3921220">to</span> <span m="3921310">be</span> <span
  m="3921430">able</span> <span m="3921590">to</span> <span
  m="3921650">go</span> <span m="3921780">backwards</span> <span
  m="3922880">in</span> <span m="3923000">this</span> <span
  m="3923130">transformation.</span> <span m="3932910">Good</span> <span
  m="3933060">news</span> <span m="3933270">is</span> <span
  m="3934510">the</span> <span m="3934620">algorithm</span> <span
  m="3934990">is</span> <span m="3935070">not</span> <span
  m="3935210">going</span> <span m="3935300">to</span> <span
  m="3935360">change.</span> <span m="3936630">What we're</span> <span
  m="3936930">computing</span> <span m="3937620">isn't</span> <span
  m="3937910">going to</span> <span m="3938130">change.</span> <span
  m="3940246">All</span> <span m="3940720">that's</span> <span
  m="3940870">going</span> <span m="3940970">to</span> <span
  m="3941030">change</span> <span m="3941350">are</span> <span
  m="3941420">the</span> <span m="3941550">xk's.</span> <span
  m="3945230">Why?</span> <span m="3946740">Because,</span> <span
  m="3948730">remember</span> <span m="3949740">from</span> <span
  m="3949970">the</span> <span m="3950070">top--</span> <span
  m="3950980">right</span> <span m="3951210">now</span> <span
  m="3951470">we</span> <span m="3951570">know</span> <span
  m="3951700">how</span> <span m="3951790">to</span> <span
  m="3951870">compute</span> <span m="3952240">v</span> <span
  m="3952590">times</span> <span m="3952980">a,</span> <span
  m="3953530">but</span> <span m="3953650">what we</span> <span
  m="3953760">now</span> <span m="3953940">need</span> <span
  m="3954130">to</span> <span m="3954230">compute</span> <span
  m="3954590">is</span> <span m="3954820">the</span> <span
  m="3955040">inverse</span> <span m="3955500">times</span> <span
  m="3955800">a.</span> <span m="3957230">So</span> <span m="3957400">the</span>
  <span m="3957630">only</span> <span m="3957880">question</span> <span
  m="3958200">is,</span> <span m="3958340">what</span> <span
  m="3958650">is</span> <span m="3958940">the</span> <span
  m="3959150">inverse?</span></p><p><span m="3960470">This</span> <span
  m="3960790">matrix</span> <span m="3961620">has</span> <span
  m="3961940">a</span> <span m="3962010">super</span> <span
  m="3962340">special</span> <span m="3962690">structure--</span> <span
  m="3963080">it's</span> <span m="3963240">symmetric,</span> <span
  m="3965660">lots</span> <span m="3965850">of</span> <span
  m="3965930">points</span> <span m="3966200">on</span> <span
  m="3966260">a</span> <span m="3966310">circle--</span> <span
  m="3967340">maybe</span> <span m="3967760">the</span> <span
  m="3967960">inverse</span> <span m="3968340">has</span> <span
  m="3968610">a</span> <span m="3968670">nice</span> <span
  m="3969090">structure.</span> <span m="3970560">And</span> <span
  m="3970690">it</span> <span m="3970780">does.</span> <span
  m="3973070">Claim</span> <span m="3973430">is</span> <span
  m="3975940">the</span> <span m="3976910">inverse</span> <span
  m="3978130">is</span> <span m="3979160">v</span> <span
  m="3980820">complex</span> <span m="3981370">conjugate</span> <span
  m="3982390">divided</span> <span m="3982790">by</span> <span
  m="3982890">n.</span> <span m="3985220">What's</span> <span
  m="3985380">complex</span> <span m="3985760">conjugate?</span> <span
  m="3987340">For</span> <span m="3987640">a geometer,</span> <span
  m="3988090">it's</span> <span m="3988220">reflection</span> <span
  m="3988790">through</span> <span m="3988960">the</span> <span
  m="3989100">x-axis.</span> <span m="3990220">For</span> <span
  m="3990600">an</span> <span m="3990830">algebraic</span> <span
  m="3991770">person,</span> <span m="3993580">a</span> <span
  m="3993800">plus</span> <span m="3994230">ib,</span> <span
  m="3995130">the</span> <span m="3995200">complex</span> <span
  m="3995650">conjugate</span> <span m="3996300">is</span> <span
  m="3997040">a</span> <span m="3997200">minus</span> <span
  m="3997670">ib.</span> <span m="4000000">So</span> <span
  m="4000300">just</span> <span m="4000500">apply</span> <span
  m="4000860">that</span> <span m="4001110">to</span> <span
  m="4001270">every</span> <span m="4001650">entry</span> <span
  m="4002040">in</span> <span m="4002640">the</span> <span
  m="4002730">matrix,</span> <span m="4003560">and</span> <span
  m="4003710">then</span> <span m="4003800">divide</span> <span
  m="4004130">all</span> <span m="4004290">the</span> <span
  m="4004410">entries</span> <span m="4004730">by</span> <span
  m="4004890">n.</span> <span m="4005750">You</span> <span
  m="4005880">get</span> <span m="4006050">the</span> <span
  m="4006150">inverse.</span> <span m="4010130">Cool.</span></p><p><span
  m="4011490">Very</span> <span m="4011750">cool</span> <span
  m="4012800">because</span> <span m="4013710">what</span> <span
  m="4013990">this</span> <span m="4014140">tells</span> <span
  m="4014480">us</span> <span m="4015300">is</span> <span m="4015470">we</span>
  <span m="4015610">run</span> <span m="4015780">exactly</span> <span
  m="4016370">the</span> <span m="4016480">same</span> <span
  m="4016800">algorithm</span> <span m="4017815">and</span> <span
  m="4018220">do</span> <span m="4018330">exactly</span> <span
  m="4018850">the</span> <span m="4018960">same</span> <span
  m="4019400">transformation.</span> <span m="4021320">If</span> <span
  m="4021480">we</span> <span m="4021550">want</span> <span
  m="4021750">to</span> <span m="4021820">do</span> <span m="4022410">the</span>
  <span m="4022740">inverse</span> <span m="4023820">we</span> <span
  m="4023950">can</span> <span m="4024080">actually</span> <span
  m="4024410">just</span> <span m="4024660">use</span> <span
  m="4024860">v,</span> <span m="4025770">but</span> <span
  m="4025920">with</span> <span m="4026080">a</span> <span
  m="4026130">different</span> <span m="4026670">choice</span> <span
  m="4027010">of</span> <span m="4027130">xk.</span> <span
  m="4028310">Namely,</span> <span m="4030960">for</span> <span
  m="4031180">the</span> <span m="4031350">inverse,</span> <span
  m="4032090">we'll call</span> <span m="4032300">it</span> <span
  m="4032530">xk</span> <span m="4032980">inverse.</span> <span
  m="4036280">We</span> <span m="4036450">just</span> <span
  m="4036710">take</span> <span m="4037440">the</span> <span
  m="4037570">complex</span> <span m="4038090">conjugate</span> <span
  m="4039230">of</span> <span m="4039450">this</span> <span
  m="4039690">thing,</span> <span m="4040950">which</span> <span
  m="4041210">turns</span> <span m="4041490">out</span> <span
  m="4041690">to</span> <span m="4041810">be</span> <span m="4044040">e</span>
  <span m="4044390">to</span> <span m="4044560">the</span> <span
  m="4046690">minus</span> <span m="4048392">ijk</span> <span
  m="4050430">tau</span> <span m="4050980">over</span> <span
  m="4051250">n,</span> <span m="4052070">and</span> <span
  m="4052450">then</span> <span m="4052540">divide</span> <span
  m="4052850">the</span> <span m="4052910">whole</span> <span
  m="4053060">thing</span> <span m="4053220">by n.</span> <span
  m="4056610">I'm</span> <span m="4056730">using</span> <span
  m="4057050">a</span> <span m="4057110">fact</span> <span
  m="4057480">here,</span> <span m="4057710">which</span> <span
  m="4057940">is</span> <span m="4058080">that</span> <span
  m="4058550">the</span> <span m="4058670">complex</span> <span
  m="4059090">conjugate</span> <span m="4059550">of</span> <span
  m="4059700">this</span> <span m="4059910">number</span> <span
  m="4061580">is</span> <span m="4062030">actually,</span> <span
  m="4062750">just,</span> <span m="4062990">you</span> <span
  m="4063070">put</span> <span m="4063210">a</span> <span
  m="4063250">minus</span> <span m="4063580">sign</span> <span
  m="4063770">here.</span> <span m="4065090">Why</span> <span
  m="4065280">does</span> <span m="4065370">that</span> <span
  m="4065540">hold?</span> <span m="4065940">Because</span> <span
  m="4066440">geometry.</span></p><p><span m="4069350">Theta</span> <span
  m="4069700">is</span> <span m="4069910">usually</span> <span
  m="4070210">measuring</span> <span m="4070570">the</span> <span
  m="4070750">counterclockwise</span> <span m="4071670">angle</span> <span
  m="4073040">from</span> <span m="4073460">the</span> <span
  m="4073580">x-axis.</span> <span m="4074990">If</span> <span
  m="4075110">you</span> <span m="4075190">take</span> <span
  m="4075360">the</span> <span m="4075440">complex</span> <span
  m="4075830">conjugate</span> <span m="4076700">you</span> <span
  m="4076840">go</span> <span m="4076990">from</span> <span
  m="4077180">up</span> <span m="4077360">here</span> <span
  m="4077890">to</span> <span m="4078040">down</span> <span
  m="4078290">here--</span> <span m="4079350">the</span> <span
  m="4079430">reflection</span> <span m="4079850">to</span> <span
  m="4079960">the</span> <span m="4080060">x-axis.</span> <span
  m="4080600">That's</span> <span m="4080780">the</span> <span
  m="4080850">same</span> <span m="4081150">thing</span> <span
  m="4081350">as</span> <span m="4081460">if</span> <span m="4081570">you</span>
  <span m="4081680">measure</span> <span m="4081950">theta</span> <span
  m="4082270">as</span> <span m="4082400">a</span> <span
  m="4082500">clockwise</span> <span m="4083120">angle</span> <span
  m="4083930">from</span> <span m="4084720">the</span> <span
  m="4084830">x-axis.</span> <span m="4085380">That's</span> <span
  m="4085560">the</span> <span m="4085630">same</span> <span
  m="4085810">thing</span> <span m="4085960">as</span> <span
  m="4086070">negating</span> <span m="4086490">the angle.</span> <span
  m="4087790">So</span> <span m="4087960">that's</span> <span
  m="4088140">just</span> <span m="4088290">a</span> <span
  m="4088340">little</span> <span m="4088950">geometry.</span> <span
  m="4089520">You</span> <span m="4089620">can</span> <span
  m="4089750">prove</span> <span m="4089970">it</span> <span
  m="4090020">algebraically,</span> <span m="4090730">although</span> <span
  m="4091040">I</span> <span m="4091110">don't</span> <span
  m="4091300">know</span> <span m="4091420">how</span> <span
  m="4092750">off-hand.</span> <span m="4093850">It's</span> <span
  m="4094010">not</span> <span m="4094630">hard.</span> <span
  m="4095830">So</span> <span m="4096250">if</span> <span m="4096420">I</span>
  <span m="4096470">want</span> <span m="4096630">to</span> <span
  m="4096689">take</span> <span m="4096920">some</span> <span
  m="4097240">angle</span> <span m="4097800">and</span> <span
  m="4097899">then</span> <span m="4098370">flip</span> <span
  m="4098649">it</span> <span m="4098800">through</span> <span
  m="4098920">the</span> <span m="4099010">x-axis,</span> <span
  m="4099600">it's</span> <span m="4099700">the</span> <span
  m="4099800">same</span> <span m="4100069">as</span> <span
  m="4100760">the</span> <span m="4100870">negative</span> <span
  m="4101189">of</span> <span m="4101270">the</span> <span
  m="4101399">angle.</span> <span m="4101750">So</span> <span m="4102069">the
  complex</span> <span m="4102439">conjugate</span> <span m="4102840">of</span>
  <span m="4102979">this</span> <span m="4103189">number</span> <span
  m="4104439">is</span> <span m="4105319">the</span> <span
  m="4105359">same</span> <span m="4105569">thing</span> <span
  m="4105770">with</span> <span m="4105899">a</span> <span
  m="4105939">minus</span> <span m="4106260">sign.</span> <span
  m="4107069">And</span> <span m="4107170">then</span> <span
  m="4107270">we</span> <span m="4107370">have</span> <span
  m="4107470">to</span> <span m="4107569">divide</span> <span
  m="4107670">by</span> <span m="4107819">n.</span> <span m="4108330">If</span>
  <span m="4108479">I</span> <span m="4108649">just--</span> <span
  m="4111084">did I lie?</span></p><p><span m="4114979">I</span> <span
  m="4115040">can't</span> <span m="4115420">divide</span> <span
  m="4115689">by</span> <span m="4115830">n,</span> <span
  m="4116085">sorry.</span> <span m="4117279">It's in</span> <span
  m="4117340">the</span> <span m="4117430">wrong</span> <span
  m="4117660">spot.</span> <span m="4118640">I</span> <span
  m="4118750">use</span> <span m="4119029">these</span> <span
  m="4119420">xk's</span> <span m="4121330">and</span> <span
  m="4121500">then</span> <span m="4122479">I</span> <span
  m="4122609">apply</span> <span m="4122990">the</span> <span
  m="4123210">transform.</span> <span m="4123670">I</span> <span
  m="4123760">take</span> <span m="4124029">this</span> <span
  m="4125370">thing.</span> <span m="4125670">I</span> <span
  m="4125800">get</span> <span m="4126175">not</span> <span
  m="4126550">quite</span> <span m="4126979">the</span> <span
  m="4127050">inverse,</span> <span m="4127760">but</span> <span
  m="4127899">I</span> <span m="4127990">end</span> <span m="4128140">up</span>
  <span m="4128229">getting</span> <span m="4128580">n</span> <span
  m="4129060">the inverse.</span> <span m="4129939">I</span> <span
  m="4130040">multiply</span> <span m="4130700">that</span> <span
  m="4131029">by</span> <span m="4131189">my</span> <span m="4131500">a
  star.</span> <span m="4133649">That's</span> <span m="4133890">going</span>
  <span m="4133990">to</span> <span m="4134040">give</span> <span
  m="4134200">me</span> <span m="4134710">n</span> <span
  m="4134950">times</span> <span m="4135290">n.</span> <span
  m="4142000">So</span> <span m="4143319">then</span> <span m="4143590">I</span>
  <span m="4143660">just</span> <span m="4143840">take</span> <span
  m="4143979">that</span> <span m="4144109">vector</span> <span
  m="4144399">and</span> <span m="4144450">divided</span> <span
  m="4144750">by</span> <span m="4144880">n.</span> <span
  m="4145330">Boom,</span> <span m="4145560">I've</span> <span
  m="4145700">got</span> <span m="4145870">the</span> <span
  m="4145970">inverse</span> <span m="4146330">transform.</span> <span
  m="4146830">So</span> <span m="4147010">this</span> <span
  m="4147210">is</span> <span m="4147319">how</span> <span
  m="4147460">you</span> <span m="4147620">do</span> <span
  m="4149240">inverse</span> <span m="4150010">fast</span> <span
  m="4150310">Fourier</span> <span m="4150890">transform.</span> <span
  m="4153200">You</span> <span m="4153319">just</span> <span
  m="4153520">flip</span> <span m="4153790">the</span> <span
  m="4153899">sign</span> <span m="4154270">and</span> <span
  m="4154330">the</span> <span m="4154470">exponent</span> <span
  m="4155270">in</span> <span m="4155390">the</span> <span
  m="4155500">xk's,</span> <span m="4157000">then</span> <span
  m="4157210">you</span> <span m="4157319">do</span> <span
  m="4157460">the</span> <span m="4157560">same</span> <span
  m="4158950">matrix-vector</span> <span m="4159609">product,</span> <span
  m="4160270">and</span> <span m="4160350">then</span> <span
  m="4160450">you</span> <span m="4160550">divide</span> <span
  m="4160850">by</span> <span m="4160960">n.</span> <span m="4161670">And</span>
  <span m="4161770">then</span> <span m="4161870">you've</span> <span
  m="4161970">done</span> <span m="4162170">the inverse.</span> <span
  m="4162870">So</span> <span m="4163029">that's</span> <span
  m="4163270">how</span> <span m="4163380">you</span> <span
  m="4163550">do--</span> <span m="4164620">if</span> <span
  m="4164750">you</span> <span m="4164830">believe</span> <span
  m="4165069">this</span> <span m="4165220">claim--</span> <span
  m="4165560">that's</span> <span m="4165770">how you do</span> <span
  m="4166060">this</span> <span m="4166250">last</span> <span
  m="4166510">step.</span> <span m="4166840">Question?</span></p><p><span
  m="4167260">AUDIENCE: What's</span> <span m="4167746">the</span> <span
  m="4168232">j in the</span> <span m="4168718">x</span> <span
  m="4169204">j</span> <span m="4169690">[INAUDIBLE].</span></p><p><span
  m="4170180">ERIK DEMAINE: Whoops,</span> <span m="4170810">no</span> <span
  m="4170970">j,</span> <span m="4171245">sorry.</span> <span
  m="4173330">I</span> <span m="4173430">was</span> <span
  m="4173689">imagining</span> <span m="4175202">these</span> <span
  m="4175630">guys.</span> <span m="4177180">Just</span> <span
  m="4177420">k.</span> <span m="4178680">Thank</span> <span
  m="4178870">you.</span> <span m="4180700">Other</span> <span
  m="4180850">questions?</span></p><p><span m="4183720">So</span> <span
  m="4184050">what</span> <span m="4184229">remains</span> <span
  m="4185020">is</span> <span m="4185220">to</span> <span
  m="4185330">prove</span> <span m="4186270">this</span> <span
  m="4186470">claim.</span> <span m="4188390">I'd be</span> <span
  m="4188500">very</span> <span m="4188689">happy</span> <span
  m="4189020">if</span> <span m="4189189">I--</span> <span m="4191294">I</span>
  <span m="4191720">should</span> <span m="4191899">probably</span> <span
  m="4192170">have</span> <span m="4192590">better--</span> <span
  m="4194420">anyway,</span> <span m="4196350">that's</span> <span
  m="4196650">not the</span> <span m="4196950">best.</span> <span
  m="4197570">I'm going</span> <span m="4197660">to</span> <span
  m="4197720">call</span> <span m="4197930">this</span> <span
  m="4199770">xk</span> <span m="4200100">prime.</span> <span
  m="4201600">Then</span> <span m="4202440">when</span> <span
  m="4202580">I</span> <span m="4202640">plug</span> <span
  m="4202930">that</span> <span m="4203080">in,</span> <span
  m="4203350">I</span> <span m="4203450">get</span> <span m="4203510">a</span>
  <span m="4203620">different</span> <span m="4204030">matrix,</span> <span
  m="4205060">v</span> <span m="4205370">prime.</span> <span
  m="4206850">And</span> <span m="4207930">what</span> <span
  m="4208220">this</span> <span m="4208390">claim</span> <span
  m="4208700">says</span> <span m="4209720">is</span> <span
  m="4209870">that</span> <span m="4209990">v prime</span> <span
  m="4211280">is</span> <span m="4212040">equal</span> <span
  m="4212400">to</span> <span m="4213340">n</span> <span
  m="4213680">times</span> <span m="4214630">the</span> <span
  m="4214850">inverse.</span> <span m="4216330">So I</span> <span
  m="4216460">apply</span> <span m="4216840">the</span> <span
  m="4216980">same</span> <span m="4217560">f</span> <span m="4217710">of</span>
  <span m="4217820">t</span> <span m="4217980">algorithm,</span> <span
  m="4218810">but</span> <span m="4218950">with</span> <span
  m="4219110">v</span> <span m="4219350">prime</span> <span
  m="4219870">instead</span> <span m="4220210">of</span> <span
  m="4220310">v,</span> <span m="4221310">then</span> <span m="4221460">I</span>
  <span m="4221510">get</span> <span m="4221790">not</span> <span
  m="4222020">quite</span> <span m="4222410">the</span> <span
  m="4222490">product</span> <span m="4222870">I</span> <span
  m="4222920">want,</span> <span m="4223390">but</span> <span
  m="4223680">just</span> <span m="4223850">n</span> <span
  m="4224050">times</span> <span m="4224290">the</span> <span
  m="4224370">product</span> <span m="4224710">I</span> <span
  m="4224780">want.</span> <span m="4225230">Divide</span> <span
  m="4225520">every</span> <span m="4225720">term</span> <span
  m="4225900">by</span> <span m="4226040">n</span> <span m="4226940">and</span>
  <span m="4227280">we</span> <span m="4227380">get</span> <span
  m="4227540">the</span> <span m="4227620">inverse.</span> <span
  m="4229320">This is the</span> <span m="4229710">cool</span> <span
  m="4229900">thing</span> <span m="4230090">about</span> <span
  m="4230340">complex</span> <span m="4230710">numbers.</span> <span
  m="4231040">Here</span> <span m="4231170">we</span> <span
  m="4231340">get</span> <span m="4231500">another</span> <span
  m="4231850">cool</span> <span m="4232020">thing.</span> <span
  m="4233580">All</span> <span m="4233650">right,</span> <span
  m="4234500">but</span> <span m="4234670">we</span> <span
  m="4234760">have</span> <span m="4234840">to</span> <span
  m="4234940">prove</span> <span m="4235190">this</span> <span
  m="4235360">claim.</span> <span m="4236120">So</span> <span
  m="4236310">let's</span> <span m="4236670">do</span> <span
  m="4236810">a</span> <span m="4236870">little</span> <span
  m="4237080">bit</span> <span m="4237190">of</span> <span
  m="4237280">algebra.</span> <span m="4238420">No</span> <span
  m="4238520">pain,</span> <span m="4238880">no</span> <span
  m="4238980">gain.</span> <span m="4242020">Good.</span></p><p><span
  m="4245460">So</span> <span m="4247310">let's</span> <span
  m="4247590">look</span> <span m="4247840">at</span> <span
  m="4248340">vjk</span> <span m="4249620">prime.</span> <span
  m="4255270">Sorry.</span> <span m="4264690">So</span> <span
  m="4265100">let's</span> <span m="4269980">look</span> <span
  m="4270150">at</span> <span m="4270360">p,</span> <span m="4270710">the</span>
  <span m="4270830">product</span> <span m="4271360">of</span> <span
  m="4271560">v,</span> <span m="4272460">and</span> <span m="4273260">v</span>
  <span m="4273650">complex</span> <span m="4274100">conjugate--</span> <span
  m="4275720">what</span> <span m="4275810">I</span> <span
  m="4275850">was</span> <span m="4275970">calling</span> <span
  m="4276210">v</span> <span m="4276410">prime</span> <span
  m="4276715">up</span> <span m="4277020">there.</span> <span
  m="4278550">I</span> <span m="4278640">claim</span> <span
  m="4279360">that</span> <span m="4279850">this</span> <span
  m="4280180">thing</span> <span m="4280850">is</span> <span
  m="4281180">n</span> <span m="4281500">times</span> <span
  m="4281870">the</span> <span m="4282030">identity</span> <span
  m="4282500">matrix,</span> <span m="4283240">with</span> <span
  m="4283350">1's</span> <span m="4283800">down</span> <span
  m="4284000">the</span> <span m="4284080">diagonal</span> <span
  m="4284355">and</span> <span m="4284630">0's</span> <span
  m="4284990">everywhere</span> <span m="4285310">else.</span> <span
  m="4286860">So</span> <span m="4287070">let's</span> <span
  m="4287280">look</span> <span m="4287570">at</span> <span
  m="4287940">this</span> <span m="4288100">product.</span> <span
  m="4288990">In</span> <span m="4289160">general,</span> <span
  m="4289590">let's</span> <span m="4289810">look</span> <span
  m="4290020">at</span> <span m="4290230">the</span> <span
  m="4292010">the</span> <span m="4292100">jk-th</span> <span
  m="4293670">item</span> <span m="4294040">in</span> <span
  m="4294140">the</span> <span m="4294230">product.</span> <span
  m="4295370">That's</span> <span m="4295620">going</span> <span
  m="4295820">to</span> <span m="4295920">come</span> <span
  m="4296300">from</span> <span m="4297410">row</span> <span
  m="4297740">j</span> <span m="4298730">of</span> <span m="4299225">V,</span>
  <span m="4300950">dot</span> <span m="4301200">product</span> <span
  m="4302190">with</span> <span m="4302580">column</span> <span
  m="4303670">k</span> <span m="4305020">of</span> <span m="4305560">the</span>
  <span m="4305990">complex</span> <span m="4306440">conjugate.</span> <span
  m="4307860">Now</span> <span m="4308200">the</span> <span
  m="4308370">matrices</span> <span m="4308770">here</span> <span
  m="4308920">are</span> <span m="4308970">symmetric,</span> <span
  m="4309120">so</span> <span m="4309540">actually</span> <span
  m="4309810">rows</span> <span m="4310030">and</span> <span
  m="4310110">columns</span> <span m="4310410">are</span> <span
  m="4310440">the</span> <span m="4310550">same,</span> <span
  m="4310890">but</span> <span m="4311100">that's</span> <span
  m="4311290">the</span> <span m="4311380">general</span> <span
  m="4311680">definition</span> <span m="4312670">of</span> <span
  m="4312930">the</span> <span m="4313020">cell</span> <span
  m="4313470">and</span> <span m="4313580">the</span> <span
  m="4313660">product</span> <span m="4314030">of</span> <span
  m="4314090">two</span> <span m="4314240">matrices.</span> <span
  m="4317330">So</span> <span m="4318110">let's</span> <span
  m="4318330">write</span> <span m="4318500">it</span> <span
  m="4318610">out</span> <span m="4318860">and</span> <span m="4319080">a
  summation.</span> <span m="4321170">We</span> <span m="4321390">have--</span>
  <span m="4323360">from</span> <span m="4323645">m</span> <span
  m="4323930">equals</span> <span m="4324550">0--</span> <span
  m="4324780">it's</span> <span m="4324930">so</span> <span
  m="4325130">hard</span> <span m="4325360">not</span> <span
  m="4325560">to</span> <span m="4325670">use</span> <span m="4325940">i</span>
  <span m="4326300">for</span> <span m="4326490">my</span> <span
  m="4326680">summations.</span> <span m="4327450">It's</span> <span
  m="4327930">the</span> <span m="4328090">only</span> <span
  m="4328350">class</span> <span m="4328650">I have</span> <span
  m="4328820">to</span> <span m="4328880">do</span> <span m="4329020">it</span>
  <span m="4329080">because</span> <span m="4329270">i is</span> <span
  m="4329560">already</span> <span m="4329810">taken,</span> <span
  m="4330270">but</span> <span m="4330700">I</span> <span
  m="4330800">guess</span> <span m="4330930">I can</span> <span
  m="4331110">still</span> <span m="4331290">use</span> <span
  m="4331440">capital I,</span> <span m="4332040">but</span> <span
  m="4333680">we'll</span> <span m="4333900">use</span> <span
  m="4334070">m</span> <span m="4334883">because</span> <span
  m="4335306">i</span> <span m="4335730">is</span> <span
  m="4336160">complex</span> <span m="4336560">number</span> <span
  m="4336810">today.</span></p><p><span m="4338120">So</span> <span
  m="4338310">we</span> <span m="4338420">have</span> <span m="4339790">e</span>
  <span m="4340210">to</span> <span m="4340380">the</span> <span
  m="4340660">i</span> <span m="4341690">tau</span> <span m="4342690">jm</span>
  <span m="4344650">over</span> <span m="4345000">n</span> <span
  m="4348000">times</span> <span m="4349450">e</span> <span
  m="4350570">to</span> <span m="4350870">the</span> <span
  m="4351100">minus</span> <span m="4352580">i</span> <span
  m="4353520">tau</span> <span m="4353720">mk</span> <span m="4355130">k</span>
  <span m="4355510">over</span> <span m="4355770">n.</span> <span
  m="4356010">I</span> <span m="4356060">don't</span> <span
  m="4356210">know</span> <span m="4356360">why</span> <span
  m="4356560">I</span> <span m="4356630">changed</span> <span
  m="4356950">the</span> <span m="4357070">order.</span> <span
  m="4357940">I</span> <span m="4358060">put</span> <span m="4358220">the</span>
  <span m="4358330">tau</span> <span m="4358530">here</span> <span
  m="4358750">instead</span> <span m="4359010">of</span> <span
  m="4359070">there,</span> <span m="4359290">but</span> <span
  m="4359630">same</span> <span m="4359820">thing.</span> <span
  m="4362720">This</span> <span m="4362950">is</span> <span
  m="4363060">just</span> <span m="4363370">the</span> <span
  m="4364300">for</span> <span m="4364490">every</span> <span
  m="4365570">position</span> <span m="4366040">m</span> <span
  m="4366310">in</span> <span m="4366400">the</span> <span
  m="4366490">cell</span> <span m="4366980">and</span> <span
  m="4367140">corresponding</span> <span m="4367650">position</span> <span
  m="4367980">m</span> <span m="4368520">in--</span> <span
  m="4368840">sorry,</span> <span m="4369280">m</span> <span
  m="4369460">in</span> <span m="4369570">the</span> <span
  m="4369680">row,</span> <span m="4370260">corresponding</span> <span
  m="4370690">position</span> <span m="4371020">m in</span> <span
  m="4371270">the</span> <span m="4371340">column,</span> <span
  m="4372450">I</span> <span m="4372550">have</span> <span m="4372700">jm</span>
  <span m="4374280">and</span> <span m="4374460">I</span> <span
  m="4374500">have</span> <span m="4374973">mk--</span> <span
  m="4375920">again,</span> <span m="4376290">the</span> <span
  m="4376390">order</span> <span m="4376470">doesn't</span> <span
  m="4376700">matter.</span> <span m="4376970">It's symmetric,</span> <span
  m="4377960">but</span> <span m="4378160">I'm</span> <span
  m="4378250">getting</span> <span m="4378540">it</span> <span
  m="4378640">right</span> <span m="4378860">here.</span> <span
  m="4379600">This</span> <span m="4379850">is--</span> <span
  m="4380510">we're</span> <span m="4380670">using</span> <span
  m="4380890">this</span> <span m="4381090">formula.</span> <span
  m="4383520">I</span> <span m="4383570">put</span> <span m="4383810">a</span>
  <span m="4384420">minus</span> <span m="4384760">sign</span> <span
  m="4385000">here</span> <span m="4385200">because</span> <span
  m="4386060">this</span> <span m="4386280">is</span> <span
  m="4387080">the</span> <span m="4387450">complex</span> <span
  m="4387820">conjugate.</span></p><p><span m="4389600">So</span> <span
  m="4389750">now</span> <span m="4389930">I</span> <span
  m="4390010">just</span> <span m="4390180">do</span> <span
  m="4390280">some</span> <span m="4390470">algebra.</span> <span
  m="4391440">These</span> <span m="4391620">share</span> <span
  m="4391890">a</span> <span m="4391950">lot.</span> <span
  m="4392230">They</span> <span m="4392340">share</span> <span
  m="4392690">i.</span> <span m="4393520">They</span> <span
  m="4393700">share</span> <span m="4394880">m,</span> <span
  m="4396590">and</span> <span m="4396990">they</span> <span
  m="4397080">share</span> <span m="4397360">the</span> <span
  m="4397540">divided</span> <span m="4398030">by</span> <span
  m="4398180">n.</span> <span m="4400500">So</span> <span
  m="4400660">this</span> <span m="4400930">is</span> <span
  m="4402080">sum</span> <span m="4403690">m</span> <span
  m="4404000">equals</span> <span m="4404380">0,</span> <span
  m="4405530">n</span> <span m="4405660">minus</span> <span m="4406020">1</span>
  <span m="4406930">e</span> <span m="4407420">to</span> <span
  m="4407790">the</span> <span m="4408020">i--</span> <span
  m="4408465">oh,</span> <span m="4408910">they</span> <span
  m="4409160">also</span> <span m="4409210">share</span> <span
  m="4409480">tau--</span> <span m="4410940">tau</span> <span
  m="4412700">m</span> <span m="4413100">over</span> <span m="4413420">n</span>
  <span m="4414930">times</span> <span m="4417050">j</span> <span
  m="4417330">minus</span> <span m="4417700">k.</span> <span
  m="4420060">Please</span> <span m="4420370">correct</span> <span
  m="4420640">me</span> <span m="4420700">if</span> <span m="4420820">I</span>
  <span m="4420890">make</span> <span m="4421130">any</span> <span
  m="4421280">mistakes.</span> <span m="4423570">Cool.</span></p><p><span
  m="4423950">So</span> <span m="4424340">it</span> <span
  m="4424450">depends</span> <span m="4424850">how</span> <span
  m="4425020">and</span> <span m="4425370">k</span> <span
  m="4425570">relate,</span> <span m="4426170">of</span> <span
  m="4426510">course.</span> <span m="4428660">If</span> <span
  m="4428790">j</span> <span m="4429100">equals</span> <span
  m="4429550">k,</span> <span m="4431700">that's</span> <span
  m="4432000">also</span> <span m="4432220">known</span> <span
  m="4432410">as</span> <span m="4432490">something</span> <span
  m="4432810">on</span> <span m="4432900">the</span> <span
  m="4433000">diagonal.</span> <span m="4434410">I</span> <span
  m="4434520">want</span> <span m="4434730">the</span> <span
  m="4434800">matrix</span> <span m="4435170">n,</span> <span
  m="4435440">n,</span> <span m="4435770">n,</span> <span m="4436170">n,</span>
  <span m="4436950">0,</span> <span m="4437540">0.</span> <span
  m="4439090">So</span> <span m="4439680">j</span> <span
  m="4439970">equals</span> <span m="4440360">k.</span> <span
  m="4440590">That's</span> <span m="4440960">the</span> <span
  m="4441070">diagonal.</span> <span m="4441510">That's</span> <span
  m="4441700">where</span> <span m="4441790">I</span> <span
  m="4441830">want</span> <span m="4442000">to</span> <span
  m="4442050">get</span> <span m="4442210">n,</span> <span
  m="4442610">and,</span> <span m="4442770">indeed,</span> <span
  m="4443130">if</span> <span m="4443270">j</span> <span
  m="4443460">equals</span> <span m="4443700">k,</span> <span
  m="4444240">this</span> <span m="4444410">becomes</span> <span
  m="4444760">0.</span> <span m="4445320">So</span> <span m="4445500">all</span>
  <span m="4445820">this</span> <span m="4445990">becomes</span> <span
  m="4446300">0.</span> <span m="4446540">e</span> <span m="4446700">to</span>
  <span m="4446830">the</span> <span m="4446930">0</span> <span
  m="4447370">is</span> <span m="4448050">1,</span> <span m="4449410">and</span>
  <span m="4449610">so I'm</span> <span m="4449770">summing</span> <span
  m="4450210">up</span> <span m="4450350">1</span> <span m="4451030">n</span>
  <span m="4451270">times.</span> <span m="4451920">I</span> <span
  m="4451990">get</span> <span m="4452190">n.</span> <span
  m="4454260">Cool.</span> <span m="4455060">That's</span> <span
  m="4455330">one</span> <span m="4455490">case.</span> <span
  m="4455810">This</span> <span m="4455970">is</span> <span m="4456110">n</span>
  <span m="4457100">if</span> <span m="4457860">j</span> <span
  m="4458100">equals</span> <span m="4458500">k,</span> <span
  m="4459730">and</span> <span m="4459910">somehow</span> <span
  m="4460240">I</span> <span m="4460330">claim</span> <span
  m="4460630">that</span> <span m="4460710">everywhere</span> <span
  m="4461110">else</span> <span m="4461390">I</span> <span
  m="4461430">get</span> <span m="4461600">0's.</span> <span
  m="4463300">So</span> <span m="4464000">let's</span> <span
  m="4464140">prove</span> <span m="4464340">that.</span></p><p><span
  m="4483810">So</span> <span m="4484450">if</span> <span m="4487170">j</span>
  <span m="4487540">does</span> <span m="4487710">not</span> <span
  m="4488060">equal</span> <span m="4488390">k--</span> <span
  m="4490830">I'm</span> <span m="4490900">going</span> <span
  m="4491030">to</span> <span m="4491150">rewrite</span> <span
  m="4491640">this</span> <span m="4492740">a</span> <span
  m="4492830">little</span> <span m="4493110">bit.</span> <span
  m="4494070">j</span> <span m="4494390">and</span> <span m="4494640">k
  are</span> <span m="4494990">fixed.</span> <span m="4497010">m</span> <span
  m="4497710">is</span> <span m="4497870">changing</span> <span
  m="4498290">in</span> <span m="4498390">the</span> <span
  m="4498480">sum,</span> <span m="4500100">so</span> <span m="4500630">I</span>
  <span m="4500770">want</span> <span m="4500960">to</span> <span
  m="4501030">write</span> <span m="4501270">this</span> <span
  m="4501500">as</span> <span m="4502610">sum</span> <span m="4503870">m</span>
  <span m="4504200">equals</span> <span m="4504570">0</span> <span
  m="4505210">to</span> <span m="4505350">n</span> <span
  m="4505530">minus</span> <span m="4505880">1,</span> <span
  m="4508580">e</span> <span m="4509050">to</span> <span m="4509230">the</span>
  <span m="4509430">i</span> <span m="4510240">tau</span> <span
  m="4515280">j</span> <span m="4515550">minus</span> <span
  m="4515960">k,</span> <span m="4517880">over</span> <span
  m="4518270">m,</span> <span m="4519630">times</span> <span
  m="4520010">m.</span> <span m="4522510">In</span> <span
  m="4522620">other</span> <span m="4522760">words,</span> <span
  m="4523760">this</span> <span m="4523900">thing</span> <span
  m="4524870">raised</span> <span m="4525210">to</span> <span
  m="4525310">the</span> <span m="4525540">n-th</span> <span
  m="4525850">power.</span> <span m="4527430">What</span> <span
  m="4527600">is</span> <span m="4527760">this</span> <span
  m="4528080">series?</span> <span m="4533460">One</span> <span
  m="4533640">word.</span></p><p><span m="4534836">AUDIENCE:
  Geometric.</span></p><p><span m="4536060">ERIK DEMAINE: Geometric.</span>
  <span m="4536760">Thank</span> <span m="4537110">you.</span> <span
  m="4541100">This</span> <span m="4541250">is</span> <span m="4541380">a</span>
  <span m="4541450">geometric</span> <span m="4541960">series,</span> <span
  m="4543930">and</span> <span m="4544710">I</span> <span
  m="4544820">guess</span> <span m="4545050">I</span> <span
  m="4545090">should</span> <span m="4545260">have</span> <span
  m="4545380">waited</span> <span m="4546670">to</span> <span
  m="4546770">give</span> <span m="4546940">you</span> <span
  m="4547020">the</span> <span m="4547120">Frisbee</span> <span
  m="4547510">until</span> <span m="4547860">you</span> <span
  m="4548010">tell</span> <span m="4548190">me</span> <span
  m="4548360">how</span> <span m="4548540">do</span> <span
  m="4548610">you</span> <span m="4548840">solve</span> <span
  m="4548970">a</span> <span m="4549050">geometric</span> <span
  m="4549530">series</span> <span m="4550380">with</span> <span
  m="4550550">a</span> <span m="4550610">finite</span> <span
  m="4551450">term?</span> <span m="4551660">So</span> <span
  m="4551790">think</span> <span m="4551980">of</span> <span
  m="4552040">this</span> <span m="4552210">as</span> <span m="4552420">z</span>
  <span m="4552650">to</span> <span m="4552780">the</span> <span
  m="4553040">m.</span> <span m="4555050">Do you</span> <span
  m="4555480">know</span> <span m="4555600">the</span> <span
  m="4555670">formula?</span></p><p><span m="4556080">AUDIENCE: That's</span>
  <span m="4556565">the</span> <span m="4557050">e</span> <span m="4557535">to
  the</span> <span m="4558020">i</span> <span
  m="4558505">tau--</span></p><p><span m="4559480">ERIK DEMAINE: Just</span>
  <span m="4559860">z.</span></p><p><span m="4560190">ERIK DEMAINE: Oh,</span>
  <span m="4560660">z</span> <span m="4561130">to the</span> <span m="4561600">n
  minus</span> <span m="4562070">1.</span></p><p><span m="4563480">ERIK DEMAINE:
  Z</span> <span m="4563770">to</span> <span m="4563830">the</span> <span
  m="4563920">n</span> <span m="4564080">minus</span> <span
  m="4564370">1.</span> <span m="4564670">Almost.</span></p><p><span
  m="4565290">AUDIENCE: Over z</span> <span m="4565710">minus</span> <span
  m="4566130">1.</span></p><p><span m="4566550">ERIK DEMAINE: Over</span> <span
  m="4566730">z</span> <span m="4566850">minus</span> <span
  m="4567090">1.</span> <span m="4567280">Yep.</span> <span
  m="4568250">That's--</span> <span m="4568880">If</span> <span
  m="4569040">you</span> <span m="4569120">have</span> <span
  m="4569350">sum</span> <span m="4569740">of</span> <span m="4569910">z</span>
  <span m="4570490">to</span> <span m="4571080">the</span> <span
  m="4571200">k,</span> <span m="4571615">k</span> <span
  m="4572030">equals</span> <span m="4572400">0</span> <span
  m="4572730">to</span> <span m="4573060">n</span> <span
  m="4573210">minus</span> <span m="4573500">1.</span> <span
  m="4574210">That's</span> <span m="4574490">that.</span> <span
  m="4574830">It's</span> <span m="4575170">in</span> <span
  m="4575390">the</span> <span m="4575700">appendix</span> <span
  m="4576220">of</span> <span m="4576330">your</span> <span
  m="4576410">textbook.</span> <span m="4577290">So</span> <span
  m="4577460">we</span> <span m="4577550">just</span> <span
  m="4577700">plug</span> <span m="4577880">that</span> <span
  m="4578040">in</span> <span m="4579300">and</span> <span m="4579540">we</span>
  <span m="4579660">get--</span> <span m="4581340">oh</span> <span
  m="4581540">boy--</span> <span m="4582780">e</span> <span
  m="4583130">to</span> <span m="4583260">the--</span> <span m="4585570">better
  chalk--</span> <span m="4586940">e</span> <span m="4587160">to</span> <span
  m="4587320">the</span> <span m="4587540">i</span> <span m="4588460">tau</span>
  <span m="4589380">j</span> <span m="4589830">minus</span> <span
  m="4590740">k</span> <span m="4591340">over</span> <span m="4591790">n</span>
  <span m="4593930">to</span> <span m="4594220">the</span> <span
  m="4594440">n-th</span> <span m="4594750">power</span> <span
  m="4596010">minus</span> <span m="4596480">1</span> <span
  m="4597070">over</span> <span m="4598540">e</span> <span m="4598870">to</span>
  <span m="4599000">the</span> <span m="4599270">i.</span> <span
  m="4599500">Actually,</span> <span m="4599830">the</span> <span
  m="4599950">denominator</span> <span m="4600440">doesn't</span> <span
  m="4600700">really</span> <span m="4600890">matter</span> <span
  m="4601880">because</span> <span m="4602550">this is</span> <span
  m="4602680">supposed</span> <span m="4603010">to</span> <span
  m="4603060">be</span> <span m="4603170">0,</span> <span m="4603660">so</span>
  <span m="4604500">it's</span> <span m="4604590">all</span> <span
  m="4604720">about</span> <span m="4604930">the</span> <span
  m="4605000">numerator,</span> <span m="4606870">but it's</span> <span
  m="4606970">the</span> <span m="4607060">same</span> <span
  m="4607360">thing.</span> <span m="4608360">Minus</span> <span
  m="4608800">1.</span></p><p><span m="4613130">Where's</span> <span
  m="4613340">my</span> <span m="4613430">red?</span> <span
  m="4614306">Red.</span></p><p><span m="4616590">The n</span> <span
  m="4617110">cancels</span> <span m="4617520">with</span> <span
  m="4617690">the</span> <span m="4617850">n.</span> <span
  m="4620280">This</span> <span m="4620730">is</span> <span
  m="4620980">an</span> <span m="4621100">integer</span> <span
  m="4622100">not</span> <span m="4622470">equal</span> <span
  m="4622790">to</span> <span m="4622890">zero,</span> <span
  m="4624200">so</span> <span m="4624370">we</span> <span
  m="4624460">have</span> <span m="4624790">e</span> <span m="4625400">to</span>
  <span m="4625530">the</span> <span m="4625680">i</span> <span
  m="4626120">tau</span> <span m="4627090">to</span> <span m="4627240">an</span>
  <span m="4627330">integer</span> <span m="4627750">power.</span> <span
  m="4629020">What's</span> <span m="4629350">e to the</span> <span
  m="4629760">i</span> <span m="4630095">tau?</span> <span m="4632480">1.</span>
  <span m="4635430">Convenient</span> <span m="4635820">that</span> <span
  m="4636210">I</span> <span m="4636310">have</span> <span
  m="4636510">that</span> <span m="4636680">there.</span> <span
  m="4637170">1</span> <span m="4637500">minus</span> <span m="4637810">1</span>
  <span m="4638070">is</span> <span m="4638210">0,</span> <span
  m="4639040">so</span> <span m="4639190">we</span> <span m="4639280">get</span>
  <span m="4639450">0.</span> <span m="4641050">Satisfying.</span></p><p><span
  m="4644670">So</span> <span m="4644960">that</span> <span
  m="4645210">proves</span> <span m="4645540">this</span> <span
  m="4645780">claim.</span> <span m="4646700">We</span> <span
  m="4646860">prove</span> <span m="4647110">that,</span> <span
  m="4647220">on</span> <span m="4647390">the</span> <span
  m="4647480">diagonal,</span> <span m="4647910">we</span> <span
  m="4648020">get</span> <span m="4648210">n</span> <span
  m="4648780">because</span> <span m="4648970">we</span> <span
  m="4649060">had</span> <span m="4649190">n</span> <span
  m="4649320">copies</span> <span m="4649520">of</span> <span
  m="4649640">1.</span> <span m="4650370">Off</span> <span
  m="4650620">the</span> <span m="4650710">diagonal</span> <span
  m="4651250">we</span> <span m="4651370">get</span> <span m="4651550">0,</span>
  <span m="4653030">like</span> <span m="4653480">this.</span> <span
  m="4654110">Therefore,</span> <span m="4656530">v</span> <span
  m="4656890">complex</span> <span m="4657310">conjugate</span> <span
  m="4658180">times</span> <span m="4658680">n</span> <span
  m="4659160">is</span> <span m="4659490">the</span> <span m="4659690">v
  inverse.</span> <span m="4660530">Therefore,</span> <span
  m="4660890">this</span> <span m="4661160">algorithm</span> <span
  m="4661970">actually</span> <span m="4662320">computes</span> <span
  m="4662740">the</span> <span m="4662790">inverse</span> <span
  m="4663220">fast</span> <span m="4663440">Fourier</span> <span
  m="4663720">transform.</span></p><p><span m="4666520">So</span> <span
  m="4666860">that's</span> <span m="4667060">it</span> <span
  m="4667160">for</span> <span m="4667270">algorithms</span> <span
  m="4667950">today,</span> <span m="4669460">but</span> <span
  m="4669590">let</span> <span m="4669700">me</span> <span
  m="4669950">quickly</span> <span m="4670420">tell</span> <span
  m="4670650">you</span> <span m="4670810">about</span> <span
  m="4671060">some</span> <span m="4671190">applications.</span> <span
  m="4672730">You've</span> <span m="4673260">probably</span> <span
  m="4673750">taken</span> <span m="4674020">other</span> <span
  m="4674190">classes</span> <span m="4674590">that</span> <span
  m="4674800">use</span> <span m="4675040">applications</span> <span
  m="4675325">of</span> <span m="4675610">fast</span> <span
  m="4675940">Fourier</span> <span m="4676140">transform,</span> <span
  m="4676560">so</span> <span m="4676920">I will just</span> <span
  m="4677010">summarize.</span> <span m="4678510">If</span> <span
  m="4678690">you've</span> <span m="4678930">ever</span> <span
  m="4679600">edited</span> <span m="4680430">audio,</span> <span
  m="4681560">you</span> <span m="4681670">probably</span> <span
  m="4682380">did</span> <span m="4682590">it</span> <span
  m="4682810">in--</span> <span m="4684950">unless</span> <span
  m="4685170">you're</span> <span m="4685250">just</span> <span
  m="4685600">pasting</span> <span m="4686390">audio</span> <span
  m="4686620">clips</span> <span m="4686870">together--</span> <span
  m="4688490">you</span> <span m="4688660">probably</span> <span
  m="4688960">did</span> <span m="4689130">it</span> <span m="4689240">in</span>
  <span m="4689380">what's</span> <span m="4689560">called</span> <span
  m="4689750">frequency</span> <span m="4690260">space.</span></p><p><span
  m="4691160">So</span> <span m="4691410">you</span> <span
  m="4691530">know</span> <span m="4691800">that--</span> <span
  m="4692220">as</span> <span m="4692420">I</span> <span
  m="4692530">talked</span> <span m="4692780">about</span> <span
  m="4692940">in</span> <span m="4692980">the</span> <span
  m="4693040">beginning--</span> <span m="4693910">when</span> <span
  m="4694170">we're</span> <span m="4694340">measuring</span> <span
  m="4694940">where</span> <span m="4695190">the</span> <span
  m="4695380">membrane</span> <span m="4695790">on</span> <span
  m="4695890">this</span> <span m="4696030">microphone</span> <span
  m="4696480">goes</span> <span m="4696720">over</span> <span
  m="4696960">time,</span> <span m="4697720">that</span> <span
  m="4697970">is</span> <span m="4698120">in</span> <span m="4699300">the</span>
  <span m="4699410">time</span> <span m="4699740">domain</span> <span
  m="4700400">for</span> <span m="4700540">every</span> <span
  m="4700850">time</span> <span m="4701550">we</span> <span
  m="4701660">sample</span> <span m="4702090">where,</span> <span
  m="4702400">physically,</span> <span m="4702820">this</span> <span
  m="4703010">thing</span> <span m="4703230">is.</span> <span
  m="4703850">If</span> <span m="4704010">you</span> <span
  m="4704190">apply--</span> <span m="4705390">I</span> <span
  m="4705470">think</span> <span m="4705640">the</span> <span
  m="4705720">way</span> <span m="4705840">I</span> <span
  m="4705870">defined</span> <span m="4706180">it</span> <span
  m="4706240">here</span> <span m="4706410">is the</span> <span
  m="4706570">inverse</span> <span m="4706940">fast</span> <span
  m="4707150">Fourier</span> <span m="4707410">transform,</span> <span
  m="4707860">usually it's</span> <span m="4708160">called</span> <span
  m="4708540">Fourier</span> <span m="4708840">transform--</span> <span
  m="4710140">to</span> <span m="4710340">that</span> <span
  m="4711210">time</span> <span m="4711810">domain</span> <span
  m="4712430">vector,</span> <span m="4712990">you</span> <span
  m="4713120">get</span> <span m="4713300">a</span> <span m="4713380">new</span>
  <span m="4713610">vector.</span> <span m="4714950">Now</span> <span
  m="4715860">it's</span> <span m="4716030">a</span> <span
  m="4716100">complex</span> <span m="4716620">vector.</span> <span
  m="4717130">You may</span> <span m="4717425">have started</span> <span
  m="4717720">with</span> <span m="4717820">real</span> <span
  m="4718030">numbers.</span> <span m="4718450">You</span> <span
  m="4718550">get</span> <span m="4718610">complex</span> <span
  m="4719070">numbers.</span></p><p><span m="4720000">So</span> <span
  m="4720650">for</span> <span m="4720920">every</span> <span
  m="4722660">position</span> <span m="4723020">in</span> <span
  m="4723380">the</span> <span m="4723460">vector--</span> <span
  m="4723850">what</span> <span m="4724000">it</span> <span
  m="4724050">corresponds</span> <span m="4724630">to--</span> <span
  m="4724770">the</span> <span m="4725220">x-axis</span> <span
  m="4725920">is</span> <span m="4726020">no</span> <span
  m="4726150">longer</span> <span m="4726450">time.</span> <span
  m="4727060">Now</span> <span m="4727290">it's</span> <span
  m="4727430">frequency.</span> <span m="4728360">For</span> <span
  m="4728520">every</span> <span m="4728790">frequency</span> <span
  m="4729710">you're</span> <span m="4729850">measuring,</span> <span
  m="4731390">essentially,</span> <span m="4731870">you're</span> <span
  m="4731970">viewing</span> <span m="4732370">this</span> <span
  m="4733070">vector--</span> <span m="4733510">the</span> <span
  m="4733620">waveform--</span> <span m="4734460">as</span> <span
  m="4734660">a</span> <span m="4734720">bunch</span> <span
  m="4735370">of</span> <span m="4736040">trigonometric</span> <span
  m="4736720">functions--</span> <span m="4737130">say,</span> <span
  m="4737850">sine</span> <span m="4738790">of</span> <span
  m="4739040">something</span> <span m="4739420">times</span> <span
  m="4739720">theta.</span> <span m="4741420">If</span> <span
  m="4741570">you</span> <span m="4741760">look</span> <span
  m="4741980">at</span> <span m="4742090">one</span> <span m="4742250">of</span>
  <span m="4742320">the</span> <span m="4742430">entries</span> <span
  m="4742740">in</span> <span m="4742790">the</span> <span
  m="4742870">vector,</span> <span m="4743200">and</span> <span
  m="4743430">it's</span> <span m="4743660">a</span> <span
  m="4743740">complex</span> <span m="4744150">number--</span> <span
  m="4744470">if</span> <span m="4744570">you</span> <span
  m="4744670">compute</span> <span m="4744810">the</span> <span
  m="4744880">magnitude</span> <span m="4745510">of</span> <span
  m="4745580">the</span> <span m="4745670">complex</span> <span
  m="4746060">number--</span> <span m="4746250">the</span> <span
  m="4746380">length</span> <span m="4746680">of</span> <span
  m="4746770">the</span> <span m="4746840">vector,</span> <span
  m="4748280">of</span> <span m="4748430">the length</span> <span
  m="4748640">of</span> <span m="4748720">that</span> <span
  m="4748940">two-coordinate</span> <span m="4749640">vector--</span> <span
  m="4750590">that</span> <span m="4750830">is</span> <span
  m="4751120">how</span> <span m="4751490">much</span> <span
  m="4753330">stuff--</span> <span m="4753695">of</span> <span
  m="4754060">that</span> <span m="4754360">frequency--</span> <span
  m="4754790">you</span> <span m="4754920">have.</span> <span
  m="4755900">And</span> <span m="4756100">then</span> <span
  m="4756260">the</span> <span m="4756490">angle</span> <span
  m="4756950">of</span> <span m="4757060">the</span> <span
  m="4757140">vector,</span> <span m="4757540">in</span> <span
  m="4757680">2D,</span> <span m="4758630">is</span> <span
  m="4759230">how</span> <span m="4759660">that</span> <span
  m="4760700">trigonometric</span> <span m="4761250">function</span> <span
  m="4761560">shifted</span> <span m="4762200">in</span> <span
  m="4762380">time.</span></p><p><span m="4763670">So</span> <span
  m="4763980">if</span> <span m="4764140">you</span> <span
  m="4764270">take</span> <span m="4764620">a</span> <span
  m="4764720">pure</span> <span m="4765060">note,</span> <span
  m="4765410">like</span> <span m="4765650">if</span> <span m="4765780">I</span>
  <span m="4765870">was</span> <span m="4766710">playing</span> <span
  m="4767080">a</span> <span m="4767130">bell</span> <span
  m="4767900">and</span> <span m="4768030">it's</span> <span
  m="4768120">exactly</span> <span m="4768630">C</span> <span
  m="4768820">major,</span> <span m="4771615">it</span> <span
  m="4771900">looks</span> <span m="4772360">really</span> <span
  m="4772600">wavy.</span> <span m="4772980">It's</span> <span
  m="4773160">actually</span> <span m="4773430">a</span> <span
  m="4773480">nice</span> <span m="4773800">perfect</span> <span
  m="4775490">sine</span> <span m="4775780">curve--</span> <span
  m="4776730">some</span> <span m="4776990">offset</span> <span
  m="4777440">depending</span> <span m="4777650">on</span> <span
  m="4777760">when</span> <span m="4777890">I</span> <span
  m="4777960">hit</span> <span m="4778140">it--</span> <span
  m="4779700">and</span> <span m="4779880">then</span> <span
  m="4780040">if</span> <span m="4780140">you</span> <span
  m="4780230">apply</span> <span m="4780450">the</span> <span
  m="4780540">Fourier</span> <span m="4780800">transform</span> <span
  m="4781160">what you</span> <span m="4781310">get</span> <span
  m="4781460">is</span> <span m="4781640">0's</span> <span
  m="4782050">everywhere</span> <span m="4782480">except</span> <span
  m="4782930">for</span> <span m="4783010">the</span> <span
  m="4783130">one</span> <span m="4783380">frequency</span> <span
  m="4783900">that's</span> <span m="4784090">appearing,</span> <span
  m="4784790">and</span> <span m="4784990">there</span> <span
  m="4785140">you</span> <span m="4785240">get</span> <span
  m="4785730">1,</span> <span m="4786590">and</span> <span
  m="4786830">everywhere</span> <span m="4787100">else</span> <span
  m="4787330">you</span> <span m="4787420">get</span> <span
  m="4787580">0.&nbsp;</span> <span m="4788540">Well,</span> <span
  m="4788820">1</span> <span m="4789150">possibly</span> <span
  m="4789600">rotated,</span> <span m="4790620">depending</span> <span
  m="4790990">on</span> <span m="4791090">the</span> <span
  m="4791170">phase.</span></p><p><span m="4792650">And</span> <span
  m="4792830">you</span> <span m="4792940">can</span> <span
  m="4793080">take</span> <span m="4793360">any</span> <span
  m="4794560">audio</span> <span m="4794830">stream,</span> <span
  m="4795410">convert it</span> <span m="4795880">by</span> <span m="4796060">a
  Fourier</span> <span m="4796380">transform,</span> <span m="4797300">do</span>
  <span m="4797440">manipulations</span> <span m="4798100">there.</span> <span
  m="4798250">For</span> <span m="4798390">example,</span> <span
  m="4799020">you've</span> <span m="4799140">probably</span> <span
  m="4799560">heard</span> <span m="4799780">of</span> <span
  m="4799870">high-pass</span> <span m="4800430">filters</span> <span
  m="4800890">that</span> <span m="4801240">removes</span> <span
  m="4801600">all</span> <span m="4801720">the</span> <span
  m="4801780">high</span> <span m="4801960">frequencies,</span> <span
  m="4802470">or</span> <span m="4802550">low-pass</span> <span
  m="4802980">filters</span> <span m="4803310">remove all</span> <span
  m="4803740">of the low</span> <span m="4803860">frequencies.</span> <span
  m="4804400">You</span> <span m="4804780">just</span> <span
  m="4804880">convert</span> <span m="4805280">to this</span> <span
  m="4805370">space</span> <span m="4805790">and zero</span> <span
  m="4806160">out</span> <span m="4806370">the</span> <span
  m="4806450">parts</span> <span m="4806700">you</span> <span
  m="4806800">want,</span> <span m="4807330">and</span> <span
  m="4807460">then</span> <span m="4807540">you</span> <span
  m="4807620">convert</span> <span m="4807940">back with</span> <span
  m="4808260">inverse</span> <span m="4808590">Fourier</span> <span
  m="4808850">transform.</span></p><p><span m="4810350">If</span> <span
  m="4810450">you've</span> <span m="4810550">used</span> <span
  m="4810650">Adobe</span> <span m="4811000">Audition</span> <span
  m="4811420">or</span> <span m="4811540">Audacity,</span> <span
  m="4811980">they</span> <span m="4812120">can</span> <span
  m="4812260">all</span> <span m="4812410">do</span> <span
  m="4812560">these</span> <span m="4812760">things.</span> <span
  m="4814140">And</span> <span m="4814370">there</span> <span
  m="4814470">are</span> <span m="4814550">tons</span> <span
  m="4814920">of</span> <span m="4815020">contexts</span> <span
  m="4815490">where</span> <span m="4815720">converting</span> <span
  m="4816120">to</span> <span m="4816200">Fourier</span> <span
  m="4816490">space</span> <span m="4816880">makes</span> <span
  m="4817180">life</span> <span m="4817450">easy.</span> <span
  m="4818500">And,</span> <span m="4818870">in</span> <span
  m="4818990">general,</span> <span m="4819320">if</span> <span
  m="4819420">you</span> <span m="4819520">have</span> <span
  m="4819620">any</span> <span m="4819750">time-based</span> <span
  m="4820130">signal</span> <span m="4820790">you</span> <span
  m="4820870">should</span> <span m="4821060">always</span> <span
  m="4821340">think</span> <span m="4821520">about</span> <span
  m="4821930">what</span> <span m="4822140">do you</span> <span
  m="4822290">get</span> <span m="4822510">with</span> <span
  m="4822650">FFT</span> <span m="4823220">when</span> <span
  m="4823540">you</span> <span m="4823700">transform</span> <span
  m="4824290">to</span> <span m="4825430">frequency-based</span> <span
  m="4826300">signal,</span> <span m="4826940">and</span> <span
  m="4827100">you</span> <span m="4827220">can</span> <span
  m="4827340">do</span> <span m="4827490">lots</span> <span
  m="4827720">of</span> <span m="4827770">cool</span> <span
  m="4827950">things</span> <span m="4828130">you</span> <span
  m="4828220">couldn't</span> <span m="4828450">do</span> <span
  m="4828560">otherwise.</span> <span m="4828970">And</span> <span
  m="4829230">it</span> <span m="4829290">only</span> <span
  m="4829490">takes</span> <span m="4829710">n</span> <span
  m="4829810">log</span> <span m="4829910">n</span> <span
  m="4830130">time.</span></p><p><span m="4830790">Plus</span> <span
  m="4831040">people</span> <span m="4831280">do</span> <span
  m="4831390">it</span> <span m="4831500">in</span> <span
  m="4831530">hardware.</span> <span m="4832360">There's</span> <span
  m="4832600">a</span> <span m="4832660">fast</span> <span
  m="4833010">implementation</span> <span m="4833600">called</span> <span
  m="4833860">FFTW--</span> <span m="4834770">the</span> <span
  m="4834910">fastest</span> <span m="4835530">Fourier</span> <span
  m="4835870">transform</span> <span m="4836370">in</span> <span
  m="4836450">the</span> <span m="4836530">west--</span> <span
  m="4837460">which</span> <span m="4837640">is</span> <span
  m="4837730">made</span> <span m="4837940">here</span> <span
  m="4838120">at</span> <span m="4838170">MIT</span> <span m="4838920">a</span>
  <span m="4839310">bunch</span> <span m="4839520">of</span> <span
  m="4839620">years</span> <span m="4839820">ago,</span> <span
  m="4840360">and</span> <span m="4840540">is</span> <span
  m="4840630">still</span> <span m="4840970">the</span> <span
  m="4841110">best</span> <span m="4841900">software</span> <span
  m="4842290">implementation</span> <span m="4842810">of</span> <span
  m="4842880">FFT.</span> <span m="4843390">So</span> <span
  m="4843550">people</span> <span m="4843790">use</span> <span
  m="4843950">it</span> <span m="4844190">everywhere.</span> <span
  m="4846150">Your</span> <span m="4846470">noise-cancelling</span> <span
  m="4847040">headsets</span> <span m="4847410">probably</span> <span
  m="4847770">use</span> <span m="4847940">it,</span> <span
  m="4848560">MP3</span> <span m="4849290">uses</span> <span
  m="4849420">it.</span> <span m="4849720">It's a cool</span> <span
  m="4850020">algorithm.</span></p>
embedded_media:
  - uid: 000c77a402a811a470caac230ce923be
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: iTMn0Kt18tg
  - uid: cdc9b0822c55973b922f4af37a6bd00a
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: iTMn0Kt18tg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-3-divide-conquer-fft/iTMn0Kt18tg.srt
  - uid: 6c4e79cba85427e3ed99637eed01227f
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: iTMn0Kt18tg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-3-divide-conquer-fft/iTMn0Kt18tg.pdf
  - uid: a6d49305c689088a0925364d360ed82b
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 204c24ad1bdb8e323ff4a9beb4987e4a
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 5053f26cec472d5c83fd7cb51e157f93
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: iTMn0Kt18tg
  - uid: a2ff8c2cc083afb35a368a33375caf4c
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/iTMn0Kt18tg/default.jpg'
  - uid: b24fef1541879fdf00c2ca214eb9b3f1
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: c9fb5912fe96083477a4f97d2b396668
    parent_uid: ca589b3282601ed3431f87f715da272a
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec03_300k.mp4'
type: courses
layout: video
---
