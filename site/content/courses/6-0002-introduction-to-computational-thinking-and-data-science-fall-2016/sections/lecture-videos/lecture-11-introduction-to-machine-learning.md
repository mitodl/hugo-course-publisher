---
title: 'Lecture 11: Introduction to Machine Learning'
uid: dd779f84f03099cfa408202267bcd832
parent_uid: dfe2b9f5ab127795415ac86facf4a535
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/lecture-videos/lecture-11-introduction-to-machine-learning
short_url: lecture-11-introduction-to-machine-learning
inline_embed_id: 59519697lecture11introductiontomachinelearning58431029
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Prof. Guttag introduces
  machine learning and shows examples of supervised learning using feature
  vectors.</p> <p><strong>Instructor: </strong>Eric Grimson</p>
related_resources_text: ''
transcript: >-
  <p><span m="790">The</span> <span m="880">following</span> <span
  m="1330">content</span> <span m="1810">is</span> <span
  m="1930">provided</span> <span m="2380">under</span> <span m="2590">a</span>
  <span m="2680">Creative</span> <span m="3130">Commons</span> <span
  m="3520">license.</span> <span m="4550">Your</span> <span
  m="4630">support</span> <span m="5110">will</span> <span m="5260">help</span>
  <span m="5530">MIT</span> <span m="6010">OpenCourseWare</span> <span
  m="6760">continue</span> <span m="7240">to</span> <span m="7390">offer</span>
  <span m="7720">high</span> <span m="7930">quality</span> <span
  m="8410">educational</span> <span m="9070">resources</span> <span
  m="9640">for</span> <span m="9790">free.</span> <span m="10850">To</span>
  <span m="10950">make</span> <span m="11050">a</span> <span
  m="11110">donation</span> <span m="11860">or</span> <span m="12040">to</span>
  <span m="12160">view</span> <span m="12370">additional</span> <span
  m="12760">materials</span> <span m="13390">from</span> <span
  m="13570">hundreds</span> <span m="13900">of</span> <span m="13990">MIT</span>
  <span m="14380">courses,</span> <span m="15680">visit</span> <span
  m="15880">MIT</span> <span m="16390">OpenCourseWare</span> <span
  m="17320">at</span> <span m="17510">ocw.mit.edu.</span></p><p><span
  m="31130">ERIC GRIMSON:</span> <span m="31257">OK.</span> <span
  m="31640">Welcome</span> <span m="32030">back.</span> <span
  m="34480">You</span> <span m="34570">know,</span> <span m="34790">it's</span>
  <span m="34840">that</span> <span m="35020">time</span> <span
  m="35380">a</span> <span m="35440">term</span> <span m="35890">when</span>
  <span m="36040">we're</span> <span m="36190">all</span> <span
  m="36370">kind</span> <span m="36730">of</span> <span m="37360">doing</span>
  <span m="37630">this.</span> <span m="38950">So</span> <span
  m="39100">let</span> <span m="39250">me</span> <span m="39340">see</span>
  <span m="39490">if</span> <span m="39580">I</span> <span m="39640">can</span>
  <span m="39730">get</span> <span m="39880">a</span> <span m="39940">few</span>
  <span m="40120">smiles</span> <span m="40600">by</span> <span
  m="40750">simply</span> <span m="41200">noting</span> <span
  m="41590">to</span> <span m="41740">you</span> <span m="41980">that</span>
  <span m="42220">two</span> <span m="42520">weeks</span> <span
  m="42820">from</span> <span m="42970">today</span> <span m="43840">is</span>
  <span m="43990">the</span> <span m="44080">last</span> <span
  m="44410">class.</span> <span m="46200">Should</span> <span
  m="46380">be</span> <span m="46470">worth</span> <span m="46680">at</span>
  <span m="46740">least</span> <span m="46950">a</span> <span
  m="46980">little</span> <span m="47250">bit</span> <span m="47370">of</span>
  <span m="47460">a</span> <span m="47520">smile,</span> <span
  m="47880">right?</span> <span m="48050">Professor</span> <span
  m="48480">Guttag</span> <span m="48660">is</span> <span
  m="49040">smiling.</span> <span m="49500">He</span> <span
  m="49620">likes</span> <span m="49920">that</span> <span
  m="50100">idea.</span> <span m="51030">You're</span> <span
  m="51150">almost</span> <span m="51480">there.</span> <span
  m="53830">What</span> <span m="53880">are</span> <span m="53980">we</span>
  <span m="54090">doing</span> <span m="54360">for</span> <span
  m="54450">the</span> <span m="54570">last</span> <span m="54840">couple</span>
  <span m="55110">of</span> <span m="55230">lectures?</span> <span
  m="56670">We're</span> <span m="56790">talking</span> <span
  m="57180">about</span> <span m="57390">linear</span> <span
  m="57750">regression.</span></p><p><span m="58770">And</span> <span
  m="58890">I</span> <span m="58920">just</span> <span m="59100">want</span>
  <span m="59250">to</span> <span m="59310">remind</span> <span
  m="59640">you,</span> <span m="59700">this</span> <span m="59910">was</span>
  <span m="60060">the</span> <span m="60210">idea</span> <span
  m="60660">of</span> <span m="61590">I</span> <span m="61650">have</span> <span
  m="61890">some</span> <span m="62100">experimental</span> <span
  m="62760">data.</span> <span m="63690">Case</span> <span m="64080">of</span>
  <span m="64200">a</span> <span m="64260">spring</span> <span
  m="64680">where</span> <span m="64800">I</span> <span m="64890">put</span>
  <span m="65040">different</span> <span m="65370">weights</span> <span
  m="65670">on</span> <span m="66030">measure</span> <span
  m="66360">displacements.</span> <span m="67620">And</span> <span
  m="67740">regression</span> <span m="68340">was</span> <span
  m="68550">giving</span> <span m="68880">us</span> <span m="69030">a</span>
  <span m="69120">way</span> <span m="69510">of</span> <span
  m="69690">deducing</span> <span m="70410">a</span> <span
  m="70500">model</span> <span m="71640">to</span> <span m="71730">fit</span>
  <span m="72540">that</span> <span m="72720">data.</span> <span
  m="73495">And</span> <span m="73940">In</span> <span m="74080">some</span>
  <span m="74280">cases</span> <span m="74700">it</span> <span
  m="74790">was</span> <span m="75000">easy.</span> <span m="75380">We</span>
  <span m="75420">knew,</span> <span m="75720">for</span> <span
  m="75840">example,</span> <span m="76190">it</span> <span m="76260">was</span>
  <span m="76350">going</span> <span m="76470">to</span> <span
  m="76530">be</span> <span m="76620">a</span> <span m="76650">linear</span>
  <span m="76980">model.</span> <span m="77280">We</span> <span
  m="77430">found</span> <span m="77670">the</span> <span m="77760">best</span>
  <span m="78120">line</span> <span m="78510">that</span> <span
  m="78600">would</span> <span m="78750">fit</span> <span m="78960">that</span>
  <span m="79110">data.</span></p><p><span m="79320">In</span> <span
  m="79410">some</span> <span m="79620">cases,</span> <span m="80010">we</span>
  <span m="80130">said</span> <span m="80340">we</span> <span
  m="80460">could</span> <span m="80640">use</span> <span
  m="80850">validation</span> <span m="82110">to</span> <span
  m="82230">actually</span> <span m="82650">let</span> <span m="82860">us</span>
  <span m="82980">explore</span> <span m="83550">to</span> <span
  m="83760">find</span> <span m="84180">the</span> <span m="84300">best</span>
  <span m="84570">model</span> <span m="84870">that</span> <span
  m="84960">would</span> <span m="85110">fit</span> <span m="85320">it,</span>
  <span m="85410">whether</span> <span m="87980">a</span> <span
  m="88080">linear,</span> <span m="88500">a</span> <span
  m="88590">quadratic,</span> <span m="89100">a</span> <span
  m="89160">cubic,</span> <span m="89580">some</span> <span
  m="89820">higher</span> <span m="90090">order</span> <span
  m="90330">thing.</span> <span m="91500">So</span> <span m="91680">we'll</span>
  <span m="91770">be</span> <span m="91890">using</span> <span
  m="92280">that</span> <span m="93270">to</span> <span m="93390">deduce</span>
  <span m="93690">something</span> <span m="94290">about</span> <span
  m="94540">a</span> <span m="94590">model.</span></p><p><span
  m="96340">That's</span> <span m="96940">a</span> <span m="97030">nice</span>
  <span m="97330">segue</span> <span m="98410">into</span> <span
  m="98620">the</span> <span m="98770">topic</span> <span m="99130">for</span>
  <span m="99250">the</span> <span m="99340">next</span> <span
  m="99580">three</span> <span m="99800">lectures,</span> <span
  m="100450">the</span> <span m="100600">last</span> <span m="100930">big</span>
  <span m="101140">topic</span> <span m="101530">of</span> <span
  m="101590">the</span> <span m="101680">class,</span> <span
  m="102680">which</span> <span m="102790">is</span> <span
  m="102940">machine</span> <span m="103360">learning.</span> <span
  m="104360">And</span> <span m="104450">I'm</span> <span m="104510">going
  to</span> <span m="104650">argue,</span> <span m="105090">you</span> <span
  m="105190">can</span> <span m="105370">debate</span> <span
  m="105670">whether</span> <span m="105940">that's</span> <span
  m="106150">actually</span> <span m="106480">an</span> <span
  m="106540">example</span> <span m="107050">of</span> <span
  m="107110">learning.</span> <span m="107510">But</span> <span
  m="107530">it</span> <span m="107620">has</span> <span m="107860">many</span>
  <span m="108130">of</span> <span m="108190">the</span> <span
  m="108340">elements</span> <span m="108760">that</span> <span
  m="108850">we</span> <span m="109000">want</span> <span m="109180">to</span>
  <span m="109240">talk</span> <span m="109540">about</span> <span
  m="109870">when</span> <span m="110050">we</span> <span m="110170">talk</span>
  <span m="110590">about</span> <span m="110830">machine</span> <span
  m="111160">learning.</span> <span m="112700">So</span> <span
  m="112900">as</span> <span m="113050">always,</span> <span
  m="113620">there's</span> <span m="113800">a</span> <span
  m="113860">reading</span> <span m="114160">assignment.</span> <span
  m="115210">Chapter</span> <span m="115480">22</span> <span
  m="115900">of</span> <span m="115960">the</span> <span m="116050">book</span>
  <span m="116260">gives</span> <span m="116470">you</span> <span
  m="116560">a</span> <span m="116620">good</span> <span m="116770">start</span>
  <span m="117100">on</span> <span m="117220">this,</span> <span
  m="117500">and</span> <span m="117600">it</span> <span m="117700">will</span>
  <span m="117730">follow</span> <span m="118090">up</span> <span
  m="118210">with</span> <span m="118360">other</span> <span
  m="118570">pieces.</span></p><p><span m="120160">And</span> <span
  m="120310">I</span> <span m="120400">want</span> <span m="120580">to</span>
  <span m="120640">start</span> <span m="121990">by</span> <span
  m="122140">basically</span> <span m="122650">outlining</span> <span
  m="123100">what</span> <span m="123220">we're</span> <span
  m="123310">going</span> <span m="123520">to</span> <span m="123610">do.</span>
  <span m="124030">And</span> <span m="124120">I'm</span> <span
  m="124240">going</span> <span m="124390">to</span> <span
  m="124480">begin</span> <span m="124810">by</span> <span
  m="124990">saying,</span> <span m="125380">as</span> <span
  m="125500">I'm</span> <span m="125620">sure</span> <span
  m="125860">you're</span> <span m="126010">aware,</span> <span
  m="126280">this</span> <span m="126520">is</span> <span m="126670">a</span>
  <span m="126790">huge</span> <span m="127630">topic.</span> <span
  m="129130">I've</span> <span m="129340">listed</span> <span
  m="129729">just</span> <span m="130060">five</span> <span
  m="130780">subjects</span> <span m="131470">in</span> <span
  m="131620">course</span> <span m="131910">six</span> <span
  m="132760">that</span> <span m="132880">all</span> <span
  m="133060">focus</span> <span m="133480">on</span> <span
  m="133630">machine</span> <span m="133960">learning.</span> <span
  m="134770">And</span> <span m="134890">that</span> <span
  m="135070">doesn't</span> <span m="135580">include</span> <span
  m="136180">other</span> <span m="136450">subjects</span> <span
  m="136900">where</span> <span m="137050">learning</span> <span
  m="137470">is</span> <span m="137590">a</span> <span m="137650">central</span>
  <span m="138040">part.</span> <span m="139030">So</span> <span
  m="139210">natural</span> <span m="139600">language</span> <span
  m="140050">processing,</span> <span m="141150">computational</span> <span
  m="141850">biology,</span> <span m="142360">computer</span> <span
  m="142720">vision</span> <span m="143110">robotics</span> <span
  m="143740">all</span> <span m="144460">rely</span> <span
  m="144940">today,</span> <span m="145390">heavily</span> <span
  m="146260">on</span> <span m="146380">machine</span> <span
  m="146770">learning.</span> <span m="147070">And</span> <span
  m="147160">you'll</span> <span m="147310">see</span> <span
  m="147580">those</span> <span m="147850">in</span> <span
  m="147970">those</span> <span m="148120">subjects</span> <span
  m="148570">as</span> <span m="148690">well.</span></p><p><span
  m="150050">So</span> <span m="150130">we're</span> <span m="150220">not</span>
  <span m="150340">going</span> <span m="150490">to</span> <span
  m="150580">compress</span> <span m="151810">five</span> <span
  m="152080">subjects</span> <span m="152560">into</span> <span
  m="152740">three</span> <span m="152980">lectures.</span> <span
  m="154490">But</span> <span m="154540">what</span> <span m="154660">we</span>
  <span m="154810">are</span> <span m="154960">going</span> <span
  m="155080">to</span> <span m="155170">do</span> <span m="155380">is</span>
  <span m="155530">give</span> <span m="155710">you</span> <span
  m="155770">the</span> <span m="155950">introduction.</span> <span
  m="156920">We're</span> <span m="156940">going</span> <span
  m="157060">to</span> <span m="157120">start</span> <span m="157600">by</span>
  <span m="157780">talking</span> <span m="158260">about</span> <span
  m="158530">the</span> <span m="158650">basic</span> <span
  m="159040">concepts</span> <span m="159580">of</span> <span
  m="159640">machine</span> <span m="159970">learning.</span> <span
  m="160810">The</span> <span m="160930">idea</span> <span m="161170">of</span>
  <span m="161290">having</span> <span m="161590">examples,</span> <span
  m="162220">and</span> <span m="162340">how</span> <span m="162520">do</span>
  <span m="162610">you</span> <span m="162760">talk</span> <span
  m="163090">about</span> <span m="163330">features</span> <span
  m="163780">representing</span> <span m="164350">those</span> <span
  m="164560">examples,</span> <span m="165400">how</span> <span
  m="165520">do</span> <span m="165610">you</span> <span
  m="165700">measure</span> <span m="166030">distances</span> <span
  m="166690">between</span> <span m="167110">them,</span> <span
  m="167650">and</span> <span m="167800">use</span> <span m="168160">the</span>
  <span m="168280">notion</span> <span m="168700">of</span> <span
  m="168790">distance</span> <span m="169720">to</span> <span
  m="169840">try</span> <span m="170080">and</span> <span
  m="170230">group</span> <span m="170590">similar</span> <span
  m="171100">things</span> <span m="171400">together</span> <span
  m="171820">as</span> <span m="171970">a</span> <span m="172030">way</span>
  <span m="172210">of</span> <span m="172330">doing</span> <span
  m="172750">machine</span> <span m="173110">learning.</span> <span
  m="173450">And</span> <span m="173550">we're</span> <span m="173650">going
  to</span> <span m="173710">look,</span> <span m="174430">as</span> <span
  m="174580">a</span> <span m="174640">consequence,</span> <span
  m="175330">of</span> <span m="175420">two</span> <span
  m="175750">different</span> <span m="176350">standard</span> <span
  m="176980">ways</span> <span m="177730">of</span> <span
  m="177850">doing</span> <span m="178120">learning.</span></p><p><span
  m="179530">One,</span> <span m="179800">we</span> <span m="179920">call</span>
  <span m="180100">classification</span> <span m="180970">methods.</span> <span
  m="182080">Example</span> <span m="182450">we're</span> <span
  m="182500">going</span> <span m="182620">to</span> <span
  m="182680">see,</span> <span m="182830">there</span> <span
  m="182930">is</span> <span m="183040">something</span> <span
  m="183340">called</span> <span m="183580">&quot;k</span> <span
  m="183820">nearest</span> <span m="184120">neighbor&quot;</span> <span
  m="185110">and</span> <span m="185200">the</span> <span
  m="185260">second</span> <span m="185620">class,</span> <span
  m="186310">called</span> <span m="186550">clustering</span> <span
  m="187030">methods.</span> <span m="188390">Classification</span> <span
  m="189250">works</span> <span m="189580">well</span> <span
  m="189820">when</span> <span m="190000">I</span> <span m="190120">have</span>
  <span m="190630">what</span> <span m="190750">we</span> <span
  m="190900">would</span> <span m="191050">call</span> <span
  m="191320">labeled</span> <span m="191740">data.</span> <span
  m="192090">I</span> <span m="192250">know</span> <span
  m="193090">labels</span> <span m="193630">on</span> <span m="193870">my</span>
  <span m="194020">examples,</span> <span m="194920">and</span> <span
  m="195010">I'm</span> <span m="195070">going</span> <span m="195190">to</span>
  <span m="195250">use</span> <span m="195520">that</span> <span
  m="195700">to</span> <span m="195820">try</span> <span m="196000">and</span>
  <span m="196090">define</span> <span m="196570">classes</span> <span
  m="197200">that</span> <span m="197350">I</span> <span m="197410">can</span>
  <span m="197560">learn,</span> <span m="198270">and</span> <span
  m="198430">clustering</span> <span m="199000">working</span> <span
  m="199330">well,</span> <span m="199510">when</span> <span m="199690">I</span>
  <span m="199780">don't</span> <span m="200020">have</span> <span
  m="200200">labeled</span> <span m="200530">data.</span> <span m="200930">And
  we'll</span> <span m="200950">see</span> <span m="201130">what</span> <span
  m="201280">that</span> <span m="201400">means</span> <span
  m="202220">in</span> <span m="202330">a</span> <span m="202390">couple</span>
  <span m="202630">of</span> <span m="202690">minutes.</span> <span
  m="202960">But</span> <span m="203050">we're</span> <span
  m="203170">going</span> <span m="203290">to</span> <span
  m="203380">give</span> <span m="203680">you</span> <span m="204640">an</span>
  <span m="204730">early</span> <span m="205420">view</span> <span
  m="205600">of</span> <span m="205690">this.</span></p><p><span
  m="207500">Unless</span> <span m="207830">Professor</span> <span
  m="208220">Guttag</span> <span m="208640">changes</span> <span
  m="209030">his</span> <span m="209150">mind,</span> <span
  m="209360">we're</span> <span m="209510">probably</span> <span
  m="209900">not</span> <span m="210080">going</span> <span m="210230">to</span>
  <span m="210320">show</span> <span m="210560">you</span> <span
  m="210770">the</span> <span m="210920">current</span> <span
  m="211460">really</span> <span m="211760">sophisticated</span> <span
  m="212540">machine</span> <span m="212900">learning</span> <span
  m="213140">methods</span> <span m="213500">like</span> <span
  m="213980">convolutional</span> <span m="214640">neural</span> <span
  m="214880">nets</span> <span m="215150">or</span> <span m="215270">deep</span>
  <span m="215570">learning,</span> <span m="215870">things</span> <span
  m="216090">you'll</span> <span m="216200">read</span> <span
  m="216380">about</span> <span m="216620">in</span> <span m="216740">the</span>
  <span m="216800">news.</span> <span m="217040">But</span> <span
  m="217220">you're</span> <span m="217310">going</span> <span
  m="217430">to</span> <span m="217490">get</span> <span m="217670">a</span>
  <span m="217730">sense</span> <span m="218390">of</span> <span
  m="218510">what's</span> <span m="218720">behind</span> <span
  m="219170">those,</span> <span m="219380">by</span> <span
  m="219530">looking</span> <span m="219920">at</span> <span
  m="219980">what</span> <span m="220160">we</span> <span m="220280">do</span>
  <span m="220430">when</span> <span m="220550">we</span> <span
  m="220640">talk</span> <span m="220880">about</span> <span
  m="221060">learning</span> <span m="221390">algorithms.</span></p><p><span
  m="223990">Before</span> <span m="224290">I</span> <span m="224350">do</span>
  <span m="224530">it,</span> <span m="224650">I</span> <span
  m="224710">want</span> <span m="224890">to</span> <span
  m="224980">point</span> <span m="225280">out</span> <span m="225430">to</span>
  <span m="225520">you</span> <span m="225640">just</span> <span
  m="226030">how</span> <span m="226300">prevalent</span> <span
  m="226780">this</span> <span m="227020">is.</span> <span m="227200">And</span>
  <span m="227320">I'm</span> <span m="227410">going</span> <span
  m="227560">to</span> <span m="227920">admit</span> <span
  m="228280">with</span> <span m="228430">my</span> <span m="228640">gray</span>
  <span m="228910">hair,</span> <span m="229870">I</span> <span
  m="230020">started</span> <span m="230380">working</span> <span
  m="230710">in</span> <span m="230800">AI</span> <span m="231160">in</span>
  <span m="231250">1975</span> <span m="232600">when</span> <span
  m="232750">machine</span> <span m="233110">learning</span> <span
  m="233380">was</span> <span m="233530">a</span> <span m="233590">pretty</span>
  <span m="233920">simple</span> <span m="234580">thing</span> <span
  m="234730">to</span> <span m="234850">do.</span> <span m="235030">And</span>
  <span m="235120">it's</span> <span m="235240">been</span> <span
  m="235390">fascinating</span> <span m="236050">to</span> <span
  m="236170">watch</span> <span m="236470">over</span> <span
  m="236680">40</span> <span m="236980">years,</span> <span
  m="237680">the</span> <span m="237820">change.</span> <span
  m="238150">And</span> <span m="238270">if</span> <span m="238360">you</span>
  <span m="238480">think</span> <span m="238780">about</span> <span
  m="239020">it,</span> <span m="239110">just</span> <span
  m="239320">think</span> <span m="239560">about</span> <span
  m="239770">where</span> <span m="239920">you</span> <span
  m="240040">see</span> <span m="240310">it.</span> <span
  m="241550">AlphaGo,</span> <span m="243160">machine</span> <span
  m="243460">learning</span> <span m="243730">based</span> <span
  m="244420">system</span> <span m="245200">from</span> <span
  m="245380">Google</span> <span m="246240">that</span> <span
  m="246370">beat</span> <span m="246730">a</span> <span
  m="246790">world-class</span> <span m="247570">level</span> <span
  m="247930">Go</span> <span m="248230">player.</span> <span
  m="249040">Chess</span> <span m="249400">has</span> <span
  m="249520">already</span> <span m="249820">been</span> <span
  m="250480">conquered</span> <span m="250930">by</span> <span
  m="251050">computers</span> <span m="251500">for</span> <span
  m="251650">a</span> <span m="251680">while.</span> <span m="251980">Go</span>
  <span m="252850">now</span> <span m="253060">belongs</span> <span
  m="253480">to</span> <span m="253600">computers.</span> <span
  m="254020">Best</span> <span m="254380">Go players</span> <span
  m="254740">in</span> <span m="254830">the</span> <span m="254920">world</span>
  <span m="255160">are</span> <span m="255250">computers.</span></p><p><span
  m="256930">I'm</span> <span m="257019">sure</span> <span
  m="257200">many</span> <span m="257440">of</span> <span m="257529">you</span>
  <span m="257649">use</span> <span m="257950">Netflix.</span> <span
  m="258519">Any</span> <span m="258820">recommendation</span> <span
  m="259630">system,</span> <span m="260019">Netflix,</span> <span
  m="260660">Amazon,</span> <span m="261070">pick</span> <span
  m="261279">your</span> <span m="261399">favorite,</span> <span
  m="261820">uses</span> <span m="262330">a</span> <span
  m="262390">machine</span> <span m="262750">learning</span> <span
  m="263080">algorithm</span> <span m="263770">to</span> <span
  m="263890">suggest</span> <span m="264370">things</span> <span
  m="264610">for</span> <span m="264790">you.</span> <span m="265510">And</span>
  <span m="265580">in</span> <span m="265650">fact,</span> <span
  m="265940">you've</span> <span m="266040">probably</span> <span
  m="266230">seen</span> <span m="266440">it</span> <span m="266560">on</span>
  <span m="266710">Google,</span> <span m="267040">right?</span> <span
  m="267730">The</span> <span m="267850">ads</span> <span m="268240">that</span>
  <span m="268360">pop</span> <span m="268690">up</span> <span
  m="268930">on</span> <span m="269110">Google</span> <span
  m="269470">are</span> <span m="269560">coming</span> <span
  m="270010">from</span> <span m="270430">a</span> <span
  m="270490">machine</span> <span m="270820">learning</span> <span
  m="271090">algorithm</span> <span m="271510">that's</span> <span
  m="271690">looking</span> <span m="272020">at</span> <span
  m="272110">your</span> <span m="272320">preferences.</span> <span
  m="273220">Scary</span> <span m="273640">thought.</span> <span
  m="274900">Drug</span> <span m="275140">discovery,</span> <span
  m="276700">character</span> <span m="277120">recognition--</span> <span
  m="277750">the</span> <span m="277840">post</span> <span
  m="278160">office</span> <span m="278980">does</span> <span
  m="279400">character</span> <span m="279940">recognition</span> <span
  m="280480">of</span> <span m="280600">handwritten</span> <span
  m="281140">characters</span> <span m="281710">using</span> <span
  m="282100">a</span> <span m="282130">machine</span> <span
  m="282460">learning</span> <span m="282790">algorithm</span> <span
  m="283230">and</span> <span m="283300">a</span> <span
  m="283360">computer</span> <span m="283690">vision</span> <span
  m="283960">system</span> <span m="284350">behind</span> <span
  m="284770">it.</span></p><p><span m="286330">You</span> <span
  m="286420">probably</span> <span m="286720">don't</span> <span
  m="286930">know</span> <span m="287170">this</span> <span
  m="287350">company.</span> <span m="288190">It's</span> <span
  m="288340">actually</span> <span m="288610">an</span> <span
  m="288740">MIT</span> <span m="289030">spin-off</span> <span
  m="289420">called</span> <span m="289630">Two</span> <span
  m="289810">Sigma,</span> <span m="290260">it's a</span> <span
  m="290320">hedge</span> <span m="290560">fund</span> <span
  m="290800">in</span> <span m="290920">New</span> <span m="291010">York.</span>
  <span m="292060">They</span> <span m="292300">heavily</span> <span
  m="292870">use</span> <span m="293290">AI</span> <span m="293670">and</span>
  <span m="293820">machine</span> <span m="294160">learning</span> <span
  m="294460">techniques.</span> <span m="294970">And</span> <span
  m="295060">two</span> <span m="295300">years</span> <span
  m="295630">ago,</span> <span m="296080">their</span> <span
  m="296380">fund</span> <span m="297130">returned</span> <span
  m="298090">a</span> <span m="298210">56%</span> <span
  m="300280">return.</span> <span m="302080">I</span> <span
  m="302110">wish</span> <span m="302320">I'd</span> <span
  m="302440">invested</span> <span m="302920">in</span> <span
  m="303010">the</span> <span m="303100">fund.</span> <span m="303280">I</span>
  <span m="303340">don't</span> <span m="303520">have</span> <span
  m="303670">the</span> <span m="303760">kinds</span> <span m="304000">of</span>
  <span m="304060">millions you</span> <span m="304480">need,</span> <span
  m="304850">but</span> <span m="304960">that's</span> <span
  m="305230">an</span> <span m="305320">impressive</span> <span
  m="305890">return.</span> <span m="306370">56%</span> <span
  m="307480">return</span> <span m="308020">on</span> <span
  m="308170">your</span> <span m="308290">money</span> <span
  m="308590">in</span> <span m="308680">one</span> <span m="308890">year.</span>
  <span m="309820">Last</span> <span m="310090">year</span> <span
  m="310180">they</span> <span m="310300">didn't</span> <span
  m="310540">do</span> <span m="310630">quite</span> <span m="310900">as</span>
  <span m="311020">well,</span> <span m="311170">but</span> <span
  m="311290">they</span> <span m="311410">do</span> <span
  m="311530">extremely</span> <span m="312040">well</span> <span
  m="312250">using</span> <span m="312550">machine</span> <span
  m="312850">learning</span> <span m="313090">techniques.</span></p><p><span
  m="314140">Siri.</span> <span m="316550">Another</span> <span
  m="316790">great</span> <span m="317060">MIT</span> <span
  m="317450">company</span> <span m="317810">called</span> <span
  m="317990">Mobileye</span> <span m="318680">that</span> <span
  m="318860">does</span> <span m="319130">computer</span> <span
  m="319490">vision</span> <span m="319820">systems</span> <span
  m="320240">with</span> <span m="320340">a</span> <span m="320450">heavy</span>
  <span m="320750">machine</span> <span m="321110">learning</span> <span
  m="321350">component</span> <span m="322370">that</span> <span
  m="322490">is</span> <span m="322640">used</span> <span m="323030">in</span>
  <span m="323180">assistive</span> <span m="323630">driving</span> <span
  m="324080">and</span> <span m="324170">will</span> <span m="324320">be</span>
  <span m="324470">used</span> <span m="324920">in</span> <span
  m="325100">completely</span> <span m="325550">autonomous</span> <span
  m="326030">driving.</span> <span m="326450">It</span> <span
  m="326630">will</span> <span m="326810">do</span> <span
  m="327020">things</span> <span m="327380">like</span> <span
  m="327620">kick</span> <span m="327880">in</span> <span m="328010">your</span>
  <span m="328160">brakes</span> <span m="328520">if</span> <span
  m="328640">you're</span> <span m="328760">closing</span> <span
  m="329210">too</span> <span m="329360">fast</span> <span m="330260">on</span>
  <span m="330470">the</span> <span m="330830">car</span> <span
  m="331130">in</span> <span m="331220">front</span> <span m="331400">of</span>
  <span m="331520">you,</span> <span m="332450">which</span> <span
  m="332480">is</span> <span m="332570">going</span> <span m="332690">to</span>
  <span m="332750">be</span> <span m="332840">really</span> <span
  m="333080">bad</span> <span m="333350">for</span> <span m="333500">me</span>
  <span m="333650">because</span> <span m="333830">I</span> <span
  m="333920">drive</span> <span m="334220">like</span> <span m="334430">a</span>
  <span m="334910">Bostonian.</span> <span m="335600">And</span> <span
  m="335690">it</span> <span m="335780">would</span> <span m="335900">be</span>
  <span m="336020">kicking</span> <span m="336380">in</span> <span
  m="336500">constantly.</span></p><p><span m="338030">Face</span> <span
  m="338360">recognition.</span> <span m="339530">Facebook</span> <span
  m="340820">uses</span> <span m="341150">this,</span> <span
  m="341630">many</span> <span m="341870">other</span> <span
  m="342080">systems</span> <span m="342530">do to</span> <span
  m="343580">both</span> <span m="343790">detect</span> <span
  m="344210">and</span> <span m="344300">recognize</span> <span
  m="344810">faces.</span> <span m="346070">IBM</span> <span
  m="346520">Watson--</span> <span m="347660">cancer</span> <span
  m="348020">diagnosis.</span> <span m="348720">These</span> <span
  m="348770">are</span> <span m="348890">all</span> <span m="349160">just</span>
  <span m="349400">examples</span> <span m="349910">of</span> <span
  m="349970">machine</span> <span m="350390">learning</span> <span
  m="350720">being</span> <span m="351200">used</span> <span
  m="351980">everywhere.</span> <span m="352820">And</span> <span
  m="352970">it</span> <span m="353030">really</span> <span
  m="353360">is.</span> <span m="353870">I've</span> <span
  m="353960">only</span> <span m="354170">picked</span> <span
  m="354430">nine.</span> <span m="356720">So</span> <span
  m="357800">what</span> <span m="357980">is</span> <span m="358100">it?</span>
  <span m="360280">I'm</span> <span m="360350">going</span> <span
  m="360470">to</span> <span m="360540">make</span> <span m="360720">an</span>
  <span m="360810">obnoxious</span> <span m="361260">statement.</span> <span
  m="362140">You're</span> <span m="362250">now</span> <span
  m="362430">used</span> <span m="362670">to</span> <span
  m="362760">that.</span> <span m="363870">I'm</span> <span m="363960">going
  to</span> <span m="364110">claim</span> <span m="364440">that</span> <span
  m="364590">you</span> <span m="364920">could</span> <span
  m="365070">argue</span> <span m="365370">that</span> <span
  m="365580">almost</span> <span m="366120">every</span> <span
  m="366480">computer</span> <span m="366930">program</span> <span
  m="367410">learns</span> <span m="367980">something.</span> <span
  m="369420">But</span> <span m="369600">the</span> <span
  m="369720">level</span> <span m="370170">of</span> <span
  m="370260">learning</span> <span m="370650">really</span> <span
  m="370920">varies</span> <span m="371310">a</span> <span
  m="371370">lot.</span></p><p><span m="371640">So</span> <span
  m="371760">if</span> <span m="371850">you</span> <span m="371940">think</span>
  <span m="372150">back</span> <span m="372390">to</span> <span
  m="372480">the</span> <span m="372600">first</span> <span
  m="372900">lecture</span> <span m="373230">in</span> <span
  m="373350">60001,</span> <span m="375150">we</span> <span
  m="375300">showed</span> <span m="375570">you</span> <span
  m="375690">Newton's</span> <span m="376050">method</span> <span
  m="376500">for</span> <span m="376650">computing</span> <span
  m="377070">square</span> <span m="377470">roots.</span> <span
  m="378630">And</span> <span m="378750">you</span> <span
  m="378900">could</span> <span m="379080">argue,</span> <span
  m="380090">you'd</span> <span m="380190">have</span> <span
  m="380340">to</span> <span m="380430">stretch</span> <span
  m="380830">it,</span> <span m="380910">but</span> <span m="381060">you</span>
  <span m="381120">could</span> <span m="381300">argue</span> <span
  m="381600">that</span> <span m="381780">that</span> <span
  m="382020">method</span> <span m="382920">learns</span> <span
  m="383280">something</span> <span m="383730">about</span> <span
  m="384240">how</span> <span m="384360">to</span> <span
  m="384480">compute</span> <span m="384750">square</span> <span
  m="385020">roots.</span> <span m="385260">In</span> <span
  m="385320">fact,</span> <span m="386010">you</span> <span
  m="386100">could</span> <span m="386220">generalize</span> <span
  m="386910">it</span> <span m="387030">to</span> <span m="387450">roots</span>
  <span m="388020">of</span> <span m="388140">any</span> <span
  m="388320">order</span> <span m="388530">power.</span> <span
  m="390030">But</span> <span m="390170">it</span> <span
  m="390240">really</span> <span m="390540">didn't</span> <span
  m="390840">learn.</span> <span m="391110">I</span> <span
  m="391170">really</span> <span m="391470">had</span> <span
  m="391710">to</span> <span m="391830">program</span> <span
  m="392310">it.</span> <span m="393440">All</span> <span
  m="393820">right.</span> <span m="393960">Think</span> <span
  m="394170">about</span> <span m="394470">last</span> <span
  m="394800">week</span> <span m="395310">when</span> <span m="395600">we</span>
  <span m="395730">talked</span> <span m="396030">about</span> <span
  m="396180">linear</span> <span m="396540">regression.</span> <span
  m="397500">Now</span> <span m="397670">it</span> <span
  m="398130">starts</span> <span m="398550">to</span> <span
  m="398670">feel</span> <span m="399030">a</span> <span
  m="399090">little</span> <span m="399330">bit</span> <span
  m="399480">more</span> <span m="399810">like</span> <span m="400050">a</span>
  <span m="400110">learning</span> <span m="400560">algorithm.</span> <span
  m="401040">Because</span> <span m="401310">what did</span> <span m="401550">we
  do?</span></p><p><span m="401730">We</span> <span m="402060">gave</span> <span
  m="402420">you</span> <span m="402570">a</span> <span m="402660">set</span>
  <span m="403200">of</span> <span m="403320">data</span> <span
  m="403590">points,</span> <span m="404550">mass</span> <span
  m="405120">displacement</span> <span m="405750">data</span> <span
  m="405990">points.</span> <span m="407200">And</span> <span
  m="407220">then</span> <span m="407340">we</span> <span
  m="407460">showed</span> <span m="407790">you</span> <span
  m="407910">how</span> <span m="408090">the</span> <span
  m="408210">computer</span> <span m="408720">could</span> <span
  m="408960">essentially</span> <span m="409650">fit</span> <span
  m="410280">a</span> <span m="410340">curve</span> <span m="410820">to</span>
  <span m="410940">that</span> <span m="411120">data</span> <span
  m="411390">point.</span> <span m="412290">And</span> <span
  m="412390">it</span> <span m="412470">was,</span> <span m="412560">in</span>
  <span m="412740">some</span> <span m="413040">sense,</span> <span
  m="413380">learning</span> <span m="413940">a</span> <span
  m="414090">model</span> <span m="414600">for</span> <span
  m="415440">that</span> <span m="415740">data</span> <span
  m="416100">that</span> <span m="416270">it</span> <span
  m="416340">could</span> <span m="416580">then</span> <span
  m="416820">use</span> <span m="417120">to</span> <span
  m="417270">predict</span> <span m="418230">behavior.</span> <span
  m="418960">In</span> <span m="418980">other</span> <span
  m="419130">situations.</span> <span m="420570">And</span> <span
  m="420660">that's</span> <span m="420840">getting</span> <span
  m="421110">closer</span> <span m="421530">to</span> <span
  m="421650">what</span> <span m="421800">we</span> <span
  m="421950">would</span> <span m="422100">like</span> <span
  m="422460">when</span> <span m="422610">we</span> <span
  m="422700">think</span> <span m="422910">about</span> <span
  m="423120">a</span> <span m="423180">machine</span> <span
  m="423510">learning</span> <span m="423810">algorithm.</span> <span
  m="424230">We'd</span> <span m="424380">like</span> <span m="424710">to</span>
  <span m="424860">have</span> <span m="425850">program</span> <span
  m="427020">that</span> <span m="427170">can</span> <span
  m="427440">learn</span> <span m="428460">from</span> <span
  m="428730">experience,</span> <span m="430460">something</span> <span
  m="430880">that</span> <span m="431030">it</span> <span m="431120">can</span>
  <span m="431270">then</span> <span m="431420">use</span> <span
  m="431690">to</span> <span m="431810">deduce</span> <span
  m="432200">new</span> <span m="432350">facts.</span></p><p><span
  m="434280">Now</span> <span m="434530">it's</span> <span
  m="434690">been</span> <span m="434870">a</span> <span
  m="434930">problem</span> <span m="435350">in</span> <span
  m="435440">AI</span> <span m="435860">for</span> <span m="436070">a</span>
  <span m="436100">very</span> <span m="436370">long</span> <span
  m="436670">time.</span> <span m="436980">And</span> <span m="437090">I</span>
  <span m="437260">love</span> <span m="437510">this</span> <span
  m="437690">quote.</span> <span m="438080">It's</span> <span
  m="438380">from</span> <span m="438830">a</span> <span
  m="438920">gentleman</span> <span m="439370">named</span> <span
  m="439700">Art</span> <span m="439910">Samuel.</span> <span
  m="441530">1959</span> <span m="442580">is</span> <span m="442730">the</span>
  <span m="442850">quote</span> <span m="443630">in</span> <span
  m="443780">which</span> <span m="443960">he</span> <span
  m="444080">says,</span> <span m="444830">his</span> <span
  m="445070">definition</span> <span m="445580">of</span> <span
  m="445640">machine</span> <span m="445910">learning</span> <span
  m="446210">is</span> <span m="446330">the</span> <span m="446450">field</span>
  <span m="446780">of</span> <span m="446870">study</span> <span
  m="447200">that</span> <span m="447350">gives</span> <span
  m="447620">computers</span> <span m="448130">the</span> <span
  m="448250">ability</span> <span m="448700">to</span> <span
  m="448880">learn</span> <span m="449870">without</span> <span
  m="450170">being</span> <span m="450440">explicitly</span> <span
  m="451130">programmed.</span> <span m="452570">And</span> <span
  m="452690">I</span> <span m="452750">think</span> <span m="452930">many</span>
  <span m="453140">people</span> <span m="453440">would</span> <span
  m="453560">argue,</span> <span m="453890">he</span> <span
  m="454070">wrote</span> <span m="454460">the</span> <span
  m="454580">first</span> <span m="455060">such</span> <span
  m="455420">program.</span> <span m="456080">It</span> <span
  m="456260">learned</span> <span m="456650">from</span> <span
  m="457010">experience.</span> <span m="458710">In</span> <span
  m="458800">his</span> <span m="458980">case,</span> <span m="459280">it</span>
  <span m="459340">played</span> <span m="459610">checkers.</span></p><p><span
  m="460690">Kind</span> <span m="460930">of</span> <span
  m="460990">shows</span> <span m="461260">you</span> <span
  m="461320">how</span> <span m="461500">the</span> <span
  m="461620">field</span> <span m="461890">has</span> <span
  m="461980">progressed.</span> <span m="462250">But</span> <span
  m="462520">we</span> <span m="462670">started</span> <span
  m="463000">with</span> <span m="463120">checkers,</span> <span
  m="463540">we</span> <span m="463630">got</span> <span m="463840">to</span>
  <span m="463960">chess,</span> <span m="464230">we</span> <span
  m="464350">now</span> <span m="464560">do</span> <span m="464710">Go.</span>
  <span m="465610">But</span> <span m="465790">it</span> <span
  m="465850">played</span> <span m="466090">checkers.</span> <span
  m="466570">It</span> <span m="466720">beat</span> <span
  m="466960">national</span> <span m="467440">level</span> <span
  m="467770">players,</span> <span m="468250">most</span> <span
  m="468640">importantly,</span> <span m="469240">it</span> <span
  m="469420">learned</span> <span m="470020">to</span> <span
  m="470200">improve</span> <span m="471220">its</span> <span
  m="471460">methods</span> <span m="472570">by</span> <span
  m="472750">watching</span> <span m="473290">how</span> <span
  m="473590">it</span> <span m="473680">did</span> <span m="473920">in</span>
  <span m="474040">games</span> <span m="474460">and</span> <span
  m="474610">then</span> <span m="474760">inferring</span> <span
  m="475270">something</span> <span m="475630">to</span> <span
  m="475720">change</span> <span m="476230">what</span> <span
  m="476410">it</span> <span m="476470">thought</span> <span
  m="476680">about</span> <span m="476890">as</span> <span m="477040">it</span>
  <span m="477100">did</span> <span m="477310">that.</span> <span
  m="478600">Samuel</span> <span m="478990">did</span> <span m="479140">a</span>
  <span m="479200">bunch</span> <span m="479440">of</span> <span
  m="479530">other</span> <span m="479740">things.</span> <span
  m="479950">I</span> <span m="480040">just</span> <span
  m="480250">highlighted</span> <span m="480730">one.</span> <span
  m="480940">You</span> <span m="481030">may</span> <span m="481180">see</span>
  <span m="481330">in</span> <span m="481420">a</span> <span
  m="481480">follow</span> <span m="481830">on</span> <span
  m="481930">course,</span> <span m="482170">he</span> <span
  m="482230">invented</span> <span m="482650">what's</span> <span
  m="482800">called</span> <span m="483040">Alpha-Beta</span> <span
  m="483580">Pruning,</span> <span m="483970">which</span> <span
  m="484120">is</span> <span m="484240">a</span> <span m="484300">really</span>
  <span m="484600">useful</span> <span m="484960">technique</span> <span
  m="485350">for</span> <span m="485470">doing</span> <span
  m="485740">search.</span></p><p><span m="486896">But</span> <span
  m="487310">the</span> <span m="487420">idea</span> <span m="487720">is,</span>
  <span m="487940">how</span> <span m="488050">can</span> <span
  m="488230">we</span> <span m="488320">have</span> <span m="488560">the</span>
  <span m="488680">computer</span> <span m="489640">learn</span> <span
  m="490390">without</span> <span m="490660">being</span> <span
  m="490840">explicitly</span> <span m="491380">programmed?</span> <span
  m="493470">And</span> <span m="493540">one</span> <span m="493720">way</span>
  <span m="493840">to</span> <span m="493960">think</span> <span
  m="494230">about</span> <span m="494470">this</span> <span
  m="494710">is</span> <span m="494860">to</span> <span m="494980">think</span>
  <span m="495250">about</span> <span m="495490">the</span> <span
  m="495610">difference</span> <span m="496060">between</span> <span
  m="496450">how</span> <span m="496630">we</span> <span m="496840">would</span>
  <span m="496960">normally</span> <span m="497440">program</span> <span
  m="497890">and</span> <span m="497980">what</span> <span m="498220">we</span>
  <span m="498370">would</span> <span m="498520">like</span> <span
  m="498760">from</span> <span m="499180">a</span> <span
  m="499210">machine</span> <span m="499540">learning</span> <span
  m="499870">algorithm.</span> <span m="501970">Normal</span> <span
  m="502300">programming,</span> <span m="502840">I</span> <span
  m="502900">know</span> <span m="503020">you're</span> <span
  m="503140">not</span> <span m="503290">convinced</span> <span
  m="503650">there's</span> <span m="503770">such</span> <span
  m="504010">a</span> <span m="504070">thing</span> <span m="504310">as</span>
  <span m="504430">normal</span> <span m="504760">programming,</span> <span
  m="505430">but</span> <span m="505480">if</span> <span m="505600">you</span>
  <span m="505660">think</span> <span m="505930">of</span> <span
  m="506020">traditional</span> <span m="506620">programming,</span> <span
  m="507820">what's</span> <span m="508120">the</span> <span
  m="508210">process?</span> <span m="510100">I</span> <span
  m="510250">write</span> <span m="510490">a</span> <span
  m="510550">program</span> <span m="511900">that</span> <span
  m="512049">I</span> <span m="512140">input</span> <span m="512470">to</span>
  <span m="512559">the</span> <span m="512679">computer</span> <span
  m="513610">so</span> <span m="513820">that</span> <span m="514010">it</span>
  <span m="514120">can</span> <span m="514330">then</span> <span
  m="514510">take</span> <span m="514780">data</span> <span
  m="515500">and</span> <span m="515590">produce</span> <span
  m="516340">some</span> <span m="516549">appropriate</span> <span
  m="517030">output.</span></p><p><span m="518409">And</span> <span
  m="518539">the</span> <span m="518650">square</span> <span
  m="518980">root</span> <span m="519250">finder</span> <span
  m="519640">really</span> <span m="520030">sits</span> <span
  m="520330">there,</span> <span m="520510">right?</span> <span
  m="520750">I</span> <span m="520870">wrote</span> <span m="521169">code</span>
  <span m="521559">for</span> <span m="521710">using</span> <span
  m="522039">Newton</span> <span m="522309">method</span> <span
  m="522610">to</span> <span m="522730">find</span> <span m="522940">a</span>
  <span m="523000">square</span> <span m="523240">root,</span> <span
  m="523480">and</span> <span m="523600">then</span> <span m="523780">it</span>
  <span m="523960">gave</span> <span m="524350">me</span> <span
  m="524500">the</span> <span m="525340">process</span> <span
  m="526360">of</span> <span m="526480">given</span> <span m="526720">any</span>
  <span m="526900">number,</span> <span m="527270">I'll</span> <span
  m="527410">give</span> <span m="527590">you</span> <span m="527680">the</span>
  <span m="527770">square</span> <span m="528040">root.</span> <span
  m="530800">But</span> <span m="530920">if</span> <span m="531010">you</span>
  <span m="531070">think</span> <span m="531280">about</span> <span
  m="531460">what</span> <span m="531610">we</span> <span m="531730">did</span>
  <span m="531880">last</span> <span m="532240">time,</span> <span
  m="532780">it</span> <span m="532840">was</span> <span m="533020">a</span>
  <span m="533050">little</span> <span m="533320">different.</span> <span
  m="533740">And</span> <span m="533860">in</span> <span m="533950">fact,</span>
  <span m="534310">in</span> <span m="534460">a</span> <span
  m="534520">machine</span> <span m="534970">learning</span> <span
  m="535540">approach,</span> <span m="536900">the</span> <span
  m="536950">idea</span> <span m="537400">is</span> <span m="537670">that</span>
  <span m="537790">I'm</span> <span m="537940">going</span> <span
  m="538090">to</span> <span m="538180">give</span> <span m="538690">the</span>
  <span m="538810">computer</span> <span m="540370">output.</span> <span
  m="541600">I'm</span> <span m="541660">going</span> <span m="541780">to</span>
  <span m="541870">give it</span> <span m="542170">examples</span> <span
  m="542920">of</span> <span m="543100">what</span> <span m="543490">I</span>
  <span m="543670">want</span> <span m="544390">the</span> <span
  m="544510">program</span> <span m="544930">to</span> <span
  m="545050">do,</span> <span m="545920">labels</span> <span
  m="546490">on</span> <span m="546670">data,</span> <span
  m="547420">characterizations</span> <span m="548380">of</span> <span
  m="548470">different</span> <span m="548770">classes</span> <span
  m="549280">of</span> <span m="549400">things.</span></p><p><span
  m="550380">And</span> <span m="550510">what</span> <span m="550660">I</span>
  <span m="550750">want</span> <span m="550960">the</span> <span
  m="551050">computer</span> <span m="551500">to</span> <span
  m="551620">do</span> <span m="551860">is,</span> <span m="552040">given</span>
  <span m="552490">that</span> <span m="553090">characterization</span> <span
  m="553930">of</span> <span m="554020">output</span> <span
  m="554350">and</span> <span m="554470">data,</span> <span m="555580">I</span>
  <span m="555710">wanted</span> <span m="556240">that</span> <span
  m="556390">machine</span> <span m="556720">learning</span> <span
  m="557080">algorithm</span> <span m="557500">to</span> <span
  m="557560">actually</span> <span m="557950">produce</span> <span
  m="558280">for</span> <span m="558460">me</span> <span m="558820">a</span>
  <span m="558940">program,</span> <span m="560480">a</span> <span
  m="560540">program</span> <span m="561050">that</span> <span
  m="561230">I</span> <span m="561380">can</span> <span m="561620">then</span>
  <span m="561860">use</span> <span m="562250">to</span> <span
  m="562430">infer</span> <span m="563330">new</span> <span
  m="563600">information</span> <span m="564440">about</span> <span
  m="565100">things.</span> <span m="565370">And</span> <span
  m="565490">that</span> <span m="565820">creates,</span> <span
  m="566300">if</span> <span m="566390">you</span> <span m="566480">like,</span>
  <span m="567560">a</span> <span m="567620">really</span> <span
  m="567920">nice</span> <span m="568160">loop</span> <span
  m="569570">where</span> <span m="569720">I</span> <span m="569810">can</span>
  <span m="569990">have</span> <span m="570260">the</span> <span
  m="570350">machine</span> <span m="570650">learning</span> <span
  m="570920">algorithm</span> <span m="571400">learn</span> <span
  m="571850">the</span> <span m="571970">program</span> <span
  m="572420">which</span> <span m="572600">I</span> <span m="572720">can</span>
  <span m="572900">then</span> <span m="573080">use</span> <span
  m="574190">to</span> <span m="574310">solve</span> <span
  m="574550">some</span> <span m="574730">other</span> <span
  m="574880">problem.</span> <span m="576190">That</span> <span
  m="576410">would</span> <span m="576560">be</span> <span
  m="576680">really</span> <span m="576920">great</span> <span
  m="577130">if</span> <span m="577250">we</span> <span m="577340">could</span>
  <span m="577490">do</span> <span m="577670">it.</span></p><p><span
  m="578260">And</span> <span m="578540">as</span> <span m="578660">I</span>
  <span m="578720">suggested,</span> <span m="579260">that</span> <span
  m="579410">curve-fitting</span> <span m="580070">algorithm</span> <span
  m="580340">is</span> <span m="580610">a</span> <span m="580700">simple</span>
  <span m="581270">version</span> <span m="581600">of</span> <span
  m="581690">that.</span> <span m="581870">It</span> <span
  m="582050">learned</span> <span m="582560">a</span> <span
  m="582710">model</span> <span m="583130">for</span> <span
  m="583310">the</span> <span m="583430">data,</span> <span
  m="584120">which</span> <span m="584300">I</span> <span
  m="584360">could</span> <span m="584510">then</span> <span
  m="584690">use</span> <span m="585230">to</span> <span m="585350">label</span>
  <span m="585680">any</span> <span m="585830">other</span> <span
  m="586010">instances</span> <span m="586460">of</span> <span
  m="586520">the</span> <span m="586640">data</span> <span m="586820">or</span>
  <span m="586970">predict</span> <span m="587390">what</span> <span
  m="587570">I</span> <span m="587660">would</span> <span m="587780">see</span>
  <span m="588020">in</span> <span m="588110">terms</span> <span
  m="588380">of</span> <span m="588740">spring</span> <span
  m="589100">displacement</span> <span m="589670">as</span> <span
  m="589780">I</span> <span m="589850">changed</span> <span
  m="590200">the</span> <span m="590300">masses.</span> <span
  m="592100">So</span> <span m="592250">that's</span> <span
  m="592490">the</span> <span m="592580">kind</span> <span m="592790">of</span>
  <span m="592880">idea</span> <span m="593150">we're</span> <span
  m="593240">going</span> <span m="593390">to</span> <span
  m="593480">explore.</span> <span m="594850">If</span> <span
  m="595280">we</span> <span m="595370">want</span> <span m="595610">to</span>
  <span m="595700">learn</span> <span m="596060">things,</span> <span
  m="596390">we</span> <span m="596510">could</span> <span
  m="596630">also</span> <span m="597050">ask,</span> <span m="597290">so</span>
  <span m="597500">how</span> <span m="597650">do</span> <span
  m="597740">you</span> <span m="597890">learn?</span> <span
  m="599200">And</span> <span m="599300">how</span> <span
  m="599450">should</span> <span m="599610">a</span> <span
  m="599690">computer</span> <span m="600080">learn?</span></p><p><span
  m="602540">Well,</span> <span m="602720">for</span> <span
  m="602870">you</span> <span m="603020">as</span> <span m="603140">a</span>
  <span m="603200">human,</span> <span m="603680">there</span> <span
  m="603770">are</span> <span m="603800">a</span> <span m="603830">couple</span>
  <span m="604070">of</span> <span m="604160">possibilities.</span> <span
  m="605120">This</span> <span m="605300">is</span> <span m="605450">the</span>
  <span m="605540">boring</span> <span m="605930">one.</span> <span
  m="606140">This</span> <span m="606350">is</span> <span m="606980">the</span>
  <span m="607100">old</span> <span m="607310">style</span> <span
  m="607670">way</span> <span m="607880">of</span> <span m="608000">doing</span>
  <span m="608240">it,</span> <span m="608300">right?</span> <span
  m="608900">Memorize</span> <span m="609470">facts.</span> <span
  m="610910">Memorize</span> <span m="611420">as</span> <span
  m="611540">many</span> <span m="611750">facts</span> <span
  m="612050">as</span> <span m="612170">you</span> <span m="612260">can</span>
  <span m="612590">and</span> <span m="612710">hope</span> <span
  m="612950">that</span> <span m="613070">we</span> <span m="613220">ask</span>
  <span m="613490">you</span> <span m="613630">on</span> <span
  m="613730">the</span> <span m="613820">final</span> <span
  m="614150">exam</span> <span m="614900">instances</span> <span
  m="615440">of</span> <span m="615530">those</span> <span
  m="615740">facts,</span> <span m="616190">as</span> <span
  m="616340">opposed</span> <span m="616640">to</span> <span
  m="616700">some</span> <span m="616880">other</span> <span
  m="617090">facts</span> <span m="617360">you</span> <span
  m="617420">haven't</span> <span m="617630">memorized.</span> <span
  m="619100">This</span> <span m="619370">is,</span> <span m="620060">if</span>
  <span m="620120">you</span> <span m="620210">think</span> <span
  m="620420">way</span> <span m="620660">back</span> <span m="620930">to</span>
  <span m="621050">the</span> <span m="621170">first</span> <span
  m="621470">lecture,</span> <span m="622580">an</span> <span
  m="622700">example</span> <span m="623210">of</span> <span
  m="623300">declarative</span> <span m="624080">knowledge,</span> <span
  m="625100">statements</span> <span m="625640">of</span> <span
  m="625730">truth.</span> <span m="626840">Memorize</span> <span
  m="627230">as</span> <span m="627350">many</span> <span m="627560">as</span>
  <span m="627680">you</span> <span m="627740">can.</span> <span
  m="628370">Have</span> <span m="628580">Wikipedia</span> <span
  m="629090">in</span> <span m="629210">your</span> <span m="629330">back</span>
  <span m="629540">pocket.</span></p><p><span m="631620">Better</span> <span
  m="631890">way</span> <span m="632040">to</span> <span m="632130">learn</span>
  <span m="633180">is</span> <span m="633270">to</span> <span
  m="633390">be</span> <span m="633450">able</span> <span m="633660">to</span>
  <span m="633780">infer,</span> <span m="634570">to</span> <span
  m="634760">deduce</span> <span m="635280">new</span> <span
  m="635520">information</span> <span m="636690">from</span> <span
  m="636900">old.</span> <span m="637980">And</span> <span m="638070">if</span>
  <span m="638160">you</span> <span m="638250">think</span> <span
  m="638430">about</span> <span m="638700">this,</span> <span
  m="639165">this</span> <span m="639630">gets</span> <span
  m="639840">closer</span> <span m="640290">to</span> <span
  m="640410">what</span> <span m="640560">we</span> <span
  m="640710">called</span> <span m="641130">imperative</span> <span
  m="641700">knowledge--</span> <span m="642870">ways</span> <span
  m="643410">to</span> <span m="643530">deduce</span> <span
  m="644310">new</span> <span m="644460">things.</span> <span
  m="646370">Now,</span> <span m="646820">in</span> <span m="646890">the</span>
  <span m="646980">first</span> <span m="647220">cases,</span> <span
  m="647610">we</span> <span m="647790">built</span> <span
  m="648100">that</span> <span m="648310">in</span> <span m="648480">when</span>
  <span m="648630">we</span> <span m="649020">wrote</span> <span
  m="649260">that</span> <span m="649410">program</span> <span
  m="649830">to</span> <span m="649950">do</span> <span m="650280">square</span>
  <span m="650580">roots.</span> <span m="651510">But</span> <span
  m="651630">what</span> <span m="651780">we'd</span> <span
  m="651900">like</span> <span m="652110">in</span> <span m="652230">a</span>
  <span m="652290">learning</span> <span m="652680">algorithm</span> <span
  m="653430">is</span> <span m="653580">to</span> <span m="653700">have</span>
  <span m="654240">much</span> <span m="654630">more</span> <span
  m="654960">like</span> <span m="655260">that</span> <span
  m="655440">generalization</span> <span m="656370">idea.</span></p><p><span
  m="656760">We're</span> <span m="657000">interested</span> <span
  m="658140">in</span> <span m="658290">extending</span> <span
  m="658920">our</span> <span m="659100">capabilities</span> <span
  m="659880">to</span> <span m="660030">write</span> <span
  m="660330">programs</span> <span m="660990">that</span> <span
  m="661140">can</span> <span m="661350">infer</span> <span
  m="662070">useful</span> <span m="662610">information</span> <span
  m="663840">from</span> <span m="664080">implicit</span> <span
  m="664740">patterns</span> <span m="665520">in</span> <span
  m="665640">the</span> <span m="665730">data.</span> <span m="666030">So</span>
  <span m="666180">not</span> <span m="666390">something</span> <span
  m="666780">explicitly</span> <span m="667570">built</span> <span
  m="668310">like</span> <span m="668610">that</span> <span
  m="668760">comparison</span> <span m="669390">of</span> <span
  m="669480">weights</span> <span m="669930">and</span> <span
  m="670020">displacements,</span> <span m="671100">but</span> <span
  m="671280">actually</span> <span m="671730">implicit</span> <span
  m="672300">patterns</span> <span m="672720">in</span> <span
  m="672840">the</span> <span m="672930">data,</span> <span
  m="673350">and</span> <span m="673500">have</span> <span m="673950">the</span>
  <span m="674100">algorithm</span> <span m="674700">figure</span> <span
  m="675180">out</span> <span m="675300">what</span> <span
  m="675480">those</span> <span m="675660">patterns</span> <span
  m="676110">are,</span> <span m="676740">and</span> <span m="676860">use</span>
  <span m="677250">those</span> <span m="677490">to</span> <span
  m="677640">generate</span> <span m="678060">a</span> <span
  m="678120">program</span> <span m="678610">you</span> <span
  m="678780">can</span> <span m="678930">use</span> <span m="679710">to</span>
  <span m="679980">infer</span> <span m="680320">new</span> <span
  m="680520">data</span> <span m="681030">about</span> <span
  m="681630">objects,</span> <span m="682170">about</span> <span
  m="682620">string</span> <span m="682980">displacements,</span> <span
  m="683970">whatever</span> <span m="684300">it</span> <span
  m="684390">is</span> <span m="684510">you're</span> <span
  m="684630">trying</span> <span m="684870">to</span> <span
  m="684960">do.</span></p><p><span m="687560">OK.</span> <span
  m="687900">So</span> <span m="688160">the</span> <span m="688310">idea</span>
  <span m="688670">then,</span> <span m="689120">the</span> <span
  m="689240">basic</span> <span m="689630">paradigm</span> <span
  m="690200">that</span> <span m="690320">we're</span> <span
  m="690410">going</span> <span m="690530">to</span> <span
  m="690590">see,</span> <span m="692300">is</span> <span
  m="692420">we're</span> <span m="692480">going</span> <span
  m="692600">to</span> <span m="692660">give</span> <span m="693190">the</span>
  <span m="693260">system</span> <span m="694580">some</span> <span
  m="694730">training</span> <span m="695090">data,</span> <span
  m="695510">some</span> <span m="695720">observations.</span> <span
  m="697130">We</span> <span m="697190">did</span> <span m="697340">that</span>
  <span m="697460">last</span> <span m="697760">time</span> <span
  m="697910">with</span> <span m="698030">just</span> <span
  m="698180">the</span> <span m="698300">spring</span> <span
  m="699290">displacements.</span> <span m="701300">We're</span> <span
  m="701360">going</span> <span m="701480">to</span> <span
  m="701570">then</span> <span m="701750">try</span> <span m="701960">and</span>
  <span m="702080">have</span> <span m="702710">a</span> <span
  m="702850">way</span> <span m="703070">to</span> <span
  m="703190">figure</span> <span m="703520">out,</span> <span
  m="703610">how</span> <span m="703790">do</span> <span m="703910">we</span>
  <span m="704030">write</span> <span m="704270">code,</span> <span
  m="704630">how</span> <span m="704750">do</span> <span m="704870">we</span>
  <span m="704960">write</span> <span m="705170">a</span> <span
  m="705230">program,</span> <span m="705680">a</span> <span
  m="705740">system</span> <span m="706160">that</span> <span
  m="706280">will</span> <span m="706490">infer</span> <span
  m="707000">something</span> <span m="707510">about</span> <span
  m="708230">the</span> <span m="708350">process</span> <span
  m="708980">that</span> <span m="709130">generated</span> <span
  m="709730">the</span> <span m="709820">data?</span> <span
  m="711290">And</span> <span m="711410">then</span> <span
  m="711680">from</span> <span m="711920">that,</span> <span
  m="712950">we</span> <span m="712970">want</span> <span m="713120">to</span>
  <span m="713210">be</span> <span m="713300">able</span> <span
  m="713450">to</span> <span m="713540">use</span> <span m="713750">that</span>
  <span m="713900">to</span> <span m="714020">make</span> <span
  m="714200">predictions</span> <span m="714860">about</span> <span
  m="715070">things</span> <span m="715310">we</span> <span
  m="715460">haven't</span> <span m="715700">seen</span> <span
  m="715970">before.</span></p><p><span m="717880">So</span> <span
  m="717900">again,</span> <span m="718240">I</span> <span
  m="718340">want</span> <span m="718440">to</span> <span
  m="718540">drive</span> <span m="718920">home</span> <span
  m="719100">this</span> <span m="719310">point.</span> <span
  m="719610">If</span> <span m="719730">you</span> <span m="719880">think</span>
  <span m="720210">about</span> <span m="720510">it,</span> <span
  m="721080">the</span> <span m="721200">spring</span> <span
  m="721920">example</span> <span m="722910">fit</span> <span
  m="723180">that</span> <span m="723360">model.</span> <span
  m="724830">I</span> <span m="724920">gave</span> <span m="725190">you</span>
  <span m="725820">a</span> <span m="725880">set</span> <span
  m="726120">of</span> <span m="726180">data,</span> <span
  m="727260">spatial</span> <span m="727650">deviations</span> <span
  m="728340">relative</span> <span m="728790">to</span> <span
  m="728910">mass</span> <span m="729330">displacements.</span> <span
  m="729720">For</span> <span m="729810">different</span> <span
  m="730110">masses,</span> <span m="730470">how</span> <span
  m="730590">far</span> <span m="730800">did</span> <span m="730920">the</span>
  <span m="731010">spring</span> <span m="731340">move?</span> <span
  m="732040">I</span> <span m="732630">then</span> <span
  m="733350">inferred</span> <span m="733920">something</span> <span
  m="734310">about</span> <span m="734580">the</span> <span
  m="734760">underlying</span> <span m="735450">process.</span> <span
  m="736550">In</span> <span m="736940">the</span> <span m="737010">first</span>
  <span m="737220">case,</span> <span m="737430">I</span> <span
  m="737520">said</span> <span m="737790">I</span> <span m="737880">know</span>
  <span m="738180">it's</span> <span m="738330">linear,</span> <span
  m="738660">but</span> <span m="738810">let</span> <span m="738990">me</span>
  <span m="739080">figure</span> <span m="739410">out</span> <span
  m="739500">what</span> <span m="739740">the</span> <span
  m="739890">actual</span> <span m="740250">linear</span> <span
  m="740820">equation</span> <span m="741330">is.</span> <span
  m="741480">What's</span> <span m="741720">the</span> <span
  m="741840">spring</span> <span m="742140">constant</span> <span
  m="742590">associated</span> <span m="743160">with</span> <span
  m="743370">it?</span> <span m="744150">And</span> <span
  m="744330">based</span> <span m="744780">on</span> <span
  m="744930">that</span> <span m="745170">result,</span> <span
  m="745650">I</span> <span m="745830">got</span> <span m="746070">a</span>
  <span m="746130">piece</span> <span m="746400">of</span> <span
  m="746460">code</span> <span m="746820">I</span> <span m="746940">could</span>
  <span m="747120">use</span> <span m="747390">to</span> <span
  m="747540">predict</span> <span m="748560">new</span> <span
  m="748680">displacements.</span></p><p><span m="750120">So</span> <span
  m="750210">it's</span> <span m="750310">got</span> <span m="750480">all</span>
  <span m="750600">of</span> <span m="750660">those</span> <span
  m="750870">elements,</span> <span m="751650">training</span> <span
  m="752040">data,</span> <span m="752860">an</span> <span
  m="753150">inference</span> <span m="753630">engine,</span> <span
  m="754440">and</span> <span m="754560">then</span> <span m="754710">the</span>
  <span m="754800">ability</span> <span m="755190">to</span> <span
  m="755310">use</span> <span m="755520">that</span> <span m="755670">to</span>
  <span m="755760">make</span> <span m="755940">new</span> <span
  m="756060">predictions.</span> <span m="758140">But</span> <span
  m="758260">that's</span> <span m="758470">a</span> <span
  m="758560">very</span> <span m="758800">simple</span> <span
  m="759250">kind</span> <span m="759550">of</span> <span
  m="759670">learning</span> <span m="759970">setting.</span> <span
  m="760330">So</span> <span m="760450">the</span> <span m="760570">more</span>
  <span m="760840">common</span> <span m="761320">one</span> <span
  m="761560">is</span> <span m="761680">one</span> <span m="761840">I'm</span>
  <span m="761920">going</span> <span m="762070">to</span> <span
  m="762130">use</span> <span m="762370">as</span> <span m="762520">an</span>
  <span m="762610">example,</span> <span m="763280">which</span> <span
  m="763450">is,</span> <span m="763660">when</span> <span m="763870">I</span>
  <span m="764020">give</span> <span m="764380">you</span> <span
  m="765100">a</span> <span m="765250">set</span> <span m="765610">of</span>
  <span m="765760">examples,</span> <span m="767210">those</span> <span
  m="767380">examples</span> <span m="767830">have</span> <span
  m="768010">some</span> <span m="768220">data</span> <span
  m="768550">associated</span> <span m="769090">with</span> <span
  m="769240">them,</span> <span m="769360">some</span> <span
  m="769510">features</span> <span m="770740">and</span> <span
  m="770920">some</span> <span m="771130">labels.</span> <span
  m="772330">For</span> <span m="772590">each</span> <span
  m="772840">example,</span> <span m="773390">I</span> <span
  m="773490">might</span> <span m="773530">say</span> <span
  m="773750">this</span> <span m="773980">is</span> <span m="774130">a</span>
  <span m="774220">particular</span> <span m="774790">kind</span> <span
  m="775060">of</span> <span m="775150">thing.</span> <span
  m="775960">This</span> <span m="776110">other</span> <span
  m="776350">one</span> <span m="776460">is</span> <span
  m="776530">another</span> <span m="776860">kind</span> <span
  m="777130">of</span> <span m="777220">thing.</span> <span
  m="778250">And</span> <span m="778270">what</span> <span m="778420">I</span>
  <span m="778510">want</span> <span m="778720">to</span> <span
  m="778780">do</span> <span m="778990">is</span> <span m="779110">figure</span>
  <span m="779440">out</span> <span m="779560">how</span> <span
  m="779800">to</span> <span m="779920">do</span> <span
  m="780100">inference</span> <span m="780610">on</span> <span
  m="780820">labeling</span> <span m="781480">new</span> <span
  m="781660">things.</span></p><p><span m="781930">So</span> <span
  m="782050">it's</span> <span m="782170">not</span> <span
  m="782380">just,</span> <span m="783190">what's</span> <span
  m="783490">the</span> <span m="783580">displacement</span> <span
  m="784180">of</span> <span m="784240">the</span> <span m="784330">mass,</span>
  <span m="784570">it's</span> <span m="784720">actually</span> <span
  m="785050">a</span> <span m="785080">label.</span> <span m="785440">And</span>
  <span m="785560">I'm</span> <span m="785680">going</span> <span
  m="785800">to</span> <span m="785890">use</span> <span m="786130">one</span>
  <span m="786310">of</span> <span m="786370">my</span> <span
  m="786550">favorite</span> <span m="786910">examples.</span> <span
  m="787540">I'm</span> <span m="787690">a</span> <span m="787750">big</span>
  <span m="788830">New</span> <span m="788950">England</span> <span
  m="789220">Patriots</span> <span m="789700">fan,</span> <span
  m="789970">if</span> <span m="790090">you're</span> <span
  m="790180">not,</span> <span m="790630">my</span> <span
  m="790780">apologies.</span> <span m="792010">But</span> <span
  m="792160">I'm</span> <span m="792200">going</span> <span m="792320">to</span>
  <span m="792380">use</span> <span m="792530">football</span> <span
  m="792850">players.</span> <span m="793090">So</span> <span
  m="793330">I'm</span> <span m="793390">going</span> <span m="793510">to</span>
  <span m="793600">show</span> <span m="793760">you</span> <span
  m="793800">in</span> <span m="793900">a</span> <span m="793930">second,</span>
  <span m="795040">I'm</span> <span m="795130">going</span> <span
  m="795310">to</span> <span m="795370">give</span> <span m="795490">you</span>
  <span m="795550">a</span> <span m="795580">set</span> <span
  m="795820">of</span> <span m="795910">examples</span> <span
  m="796420">of</span> <span m="796480">football</span> <span
  m="796870">players.</span> <span m="797830">The</span> <span
  m="797950">label</span> <span m="798400">is</span> <span m="798640">the</span>
  <span m="798730">position</span> <span m="799270">they</span> <span
  m="799420">play.</span> <span m="800280">And</span> <span
  m="800740">the</span> <span m="800860">data,</span> <span
  m="801190">well,</span> <span m="801370">it</span> <span
  m="801430">could</span> <span m="801550">be</span> <span
  m="801640">lots</span> <span m="801910">of</span> <span
  m="801970">things.</span> <span m="802180">We're</span> <span
  m="802240">going</span> <span m="802360">to</span> <span m="802420">use</span>
  <span m="802600">height</span> <span m="802810">and</span> <span
  m="802900">weight.</span></p><p><span m="803920">But</span> <span
  m="804040">what</span> <span m="804160">we</span> <span m="804310">want</span>
  <span m="804490">to</span> <span m="804550">do</span> <span
  m="804820">is</span> <span m="805000">then</span> <span m="805210">see</span>
  <span m="805660">how</span> <span m="805960">would</span> <span
  m="806170">we</span> <span m="806350">come</span> <span m="806620">up</span>
  <span m="806800">with</span> <span m="806980">a</span> <span
  m="807070">way</span> <span m="807400">of</span> <span
  m="807580">characterizing</span> <span m="809080">the</span> <span
  m="809200">implicit</span> <span m="809710">pattern</span> <span
  m="810490">of</span> <span m="810580">how</span> <span m="810820">does</span>
  <span m="811000">weight</span> <span m="811270">and</span> <span
  m="811390">height</span> <span m="811660">predict</span> <span
  m="812170">the</span> <span m="812260">kind</span> <span m="812500">of</span>
  <span m="812560">position</span> <span m="813010">this</span> <span
  m="813160">player</span> <span m="813460">could</span> <span
  m="813640">play.</span> <span m="814630">And</span> <span
  m="814750">then</span> <span m="814900">come</span> <span m="815500">up</span>
  <span m="815590">with</span> <span m="815740">an</span> <span
  m="815830">algorithm</span> <span m="816290">that will</span> <span
  m="816420">predict</span> <span m="816850">the</span> <span
  m="816940">position</span> <span m="817480">of</span> <span
  m="817600">new</span> <span m="817750">players.</span> <span
  m="818515">We'll</span> <span m="818830">do</span> <span m="818980">the</span>
  <span m="819100">draft</span> <span m="819400">for</span> <span
  m="819520">next</span> <span m="819790">year.</span> <span
  m="819940">Where</span> <span m="820060">do</span> <span m="820180">we</span>
  <span m="820270">want</span> <span m="820480">them</span> <span
  m="820600">to</span> <span m="820720">play?</span> <span
  m="822670">That's</span> <span m="822970">the</span> <span
  m="823090">paradigm.</span> <span m="824500">Set</span> <span
  m="824710">of</span> <span m="824800">observations,</span> <span
  m="826330">potentially</span> <span m="826810">labeled,</span> <span
  m="827050">potentially</span> <span m="827560">not.</span> <span
  m="828910">Think</span> <span m="829180">about</span> <span
  m="829360">how</span> <span m="829480">do</span> <span m="829600">we</span>
  <span m="829690">do</span> <span m="829840">inference</span> <span
  m="830200">to</span> <span m="830320">find</span> <span m="830620">a</span>
  <span m="830680">model.</span> <span m="831520">And</span> <span
  m="831610">then</span> <span m="831730">how</span> <span m="831850">do</span>
  <span m="831970">we</span> <span m="832060">use</span> <span
  m="832270">that</span> <span m="832390">model</span> <span
  m="832690">to</span> <span m="832810">make</span> <span
  m="832990">predictions.</span></p><p><span m="835000">What</span> <span
  m="835150">we're</span> <span m="835270">going</span> <span
  m="835390">to</span> <span m="835480">see,</span> <span m="836390">and</span>
  <span m="836490">we're</span> <span m="836590">going</span> <span
  m="836690">to</span> <span m="836790">see</span> <span
  m="836890">multiple</span> <span m="837160">examples</span> <span
  m="837620">today,</span> <span m="837970">is</span> <span
  m="838100">that</span> <span m="838240">that</span> <span
  m="838450">learning</span> <span m="838840">can</span> <span
  m="839020">be</span> <span m="839170">done</span> <span m="839500">in</span>
  <span m="839650">one</span> <span m="839890">of</span> <span
  m="839980">two</span> <span m="840880">very</span> <span
  m="841210">broad</span> <span m="841530">ways.</span> <span
  m="842870">The</span> <span m="842890">first</span> <span
  m="843130">one</span> <span m="843270">is</span> <span
  m="843370">called</span> <span m="843610">supervised</span> <span
  m="844300">learning.</span> <span m="845460">And</span> <span
  m="845540">in</span> <span m="845680">that</span> <span
  m="845890">case,</span> <span m="846370">for</span> <span
  m="846700">every</span> <span m="847300">new</span> <span
  m="847570">example</span> <span m="848140">I</span> <span
  m="848200">give</span> <span m="848410">you</span> <span m="848560">as</span>
  <span m="848680">part</span> <span m="848890">of</span> <span
  m="848950">the</span> <span m="849070">training</span> <span
  m="849490">data,</span> <span m="849850">I</span> <span m="850000">have</span>
  <span m="850390">a</span> <span m="850540">label</span> <span
  m="851020">on</span> <span m="851200">it.</span> <span m="851470">I</span>
  <span m="851590">know</span> <span m="851890">the</span> <span
  m="852010">kind</span> <span m="852340">of</span> <span
  m="852400">thing</span> <span m="852640">it</span> <span m="852760">is.</span>
  <span m="853660">And</span> <span m="853750">what</span> <span
  m="853900">I'm</span> <span m="853960">going</span> <span m="854080">to</span>
  <span m="854140">do</span> <span m="854380">is</span> <span
  m="854530">look</span> <span m="854770">for</span> <span m="855070">how</span>
  <span m="855220">do</span> <span m="855370">I</span> <span
  m="855490">find</span> <span m="855850">a</span> <span m="855940">rule</span>
  <span m="856390">that</span> <span m="856540">would</span> <span
  m="856720">predict</span> <span m="857260">the</span> <span
  m="857380">label</span> <span m="857740">associated</span> <span
  m="858400">with</span> <span m="858790">unseen</span> <span
  m="859340">input</span> <span m="860020">based</span> <span
  m="860350">on</span> <span m="860470">those</span> <span
  m="860680">examples.</span> <span m="861610">It's</span> <span
  m="861730">supervised</span> <span m="862330">because</span> <span
  m="862510">I</span> <span m="862600">know</span> <span m="862870">what</span>
  <span m="863050">the</span> <span m="863170">labeling</span> <span
  m="863650">is.</span></p><p><span m="865010">Second</span> <span
  m="865400">kind,</span> <span m="865840">if</span> <span
  m="865970">this</span> <span m="866150">is</span> <span
  m="866210">supervised,</span> <span m="866750">the</span> <span
  m="866870">obvious</span> <span m="867170">other</span> <span
  m="867350">one</span> <span m="867500">is</span> <span
  m="867590">called</span> <span m="867860">unsupervised.</span> <span
  m="868820">In</span> <span m="868970">that</span> <span
  m="869180">case,</span> <span m="869450">I'm</span> <span
  m="869600">just</span> <span m="869750">going</span> <span
  m="869870">to</span> <span m="869960">give</span> <span m="870110">you</span>
  <span m="870230">a</span> <span m="870290">bunch</span> <span
  m="870620">of</span> <span m="870710">examples.</span> <span
  m="872210">But</span> <span m="872450">I</span> <span m="872570">don't</span>
  <span m="872930">know</span> <span m="873170">the</span> <span
  m="873290">labels</span> <span m="873680">associated</span> <span
  m="874190">with</span> <span m="874400">them.</span> <span
  m="874550">I'm</span> <span m="874640">going</span> <span m="874790">to</span>
  <span m="874850">just</span> <span m="875120">try</span> <span
  m="875450">and</span> <span m="875570">find</span> <span
  m="875900">what</span> <span m="876140">are</span> <span m="876230">the</span>
  <span m="876380">natural</span> <span m="876920">ways</span> <span
  m="877280">to</span> <span m="877430">group</span> <span
  m="878300">those</span> <span m="878510">examples</span> <span
  m="879020">together</span> <span m="879860">into</span> <span
  m="880070">different</span> <span m="880370">models.</span> <span
  m="881680">And</span> <span m="881780">in</span> <span m="881840">some</span>
  <span m="882020">cases,</span> <span m="882410">I</span> <span
  m="882470">may</span> <span m="882570">know</span> <span m="882770">how</span>
  <span m="882950">many</span> <span m="883130">models</span> <span
  m="883550">are</span> <span m="883640">there.</span> <span
  m="884090">In</span> <span m="884150">some</span> <span
  m="884360">cases,</span> <span m="884720">I</span> <span m="884780">may</span>
  <span m="884930">want</span> <span m="885080">to</span> <span
  m="885170">just</span> <span m="885320">say</span> <span
  m="885470">what's</span> <span m="885740">the</span> <span
  m="885860">best</span> <span m="886100">grouping</span> <span
  m="886490">I</span> <span m="886610">can</span> <span
  m="886760">find.</span></p><p><span m="888770">OK.</span> <span
  m="890760">What</span> <span m="890850">I'm</span> <span
  m="890910">going</span> <span m="891030">to</span> <span m="891090">do</span>
  <span m="891240">today</span> <span m="891510">is</span> <span
  m="891630">not</span> <span m="891810">a</span> <span m="891870">lot</span>
  <span m="892050">of</span> <span m="892110">code.</span> <span
  m="893280">I</span> <span m="893310">was</span> <span
  m="893460">expecting</span> <span m="893910">cheers</span> <span
  m="894240">for</span> <span m="894360">that,</span> <span
  m="894510">John,</span> <span m="894780">but</span> <span m="894900">I</span>
  <span m="894960">didn't</span> <span m="895140">get</span> <span
  m="895320">them.</span> <span m="895470">Not</span> <span m="895680">a</span>
  <span m="895710">lot</span> <span m="895920">of</span> <span
  m="895980">code.</span> <span m="897240">What</span> <span
  m="897360">I'm</span> <span m="897420">going</span> <span m="897540">to</span>
  <span m="897600">do</span> <span m="897780">is</span> <span
  m="897870">show</span> <span m="898230">you</span> <span
  m="898560">basically,</span> <span m="899250">the</span> <span
  m="899400">intuitions</span> <span m="900030">behind</span> <span
  m="900390">doing</span> <span m="900630">this</span> <span
  m="900780">learning.</span> <span m="901060">And I&quot;m</span> <span
  m="901170">going</span> <span m="901290">to</span> <span
  m="901350">start</span> <span m="901680">with</span> <span
  m="901830">my</span> <span m="901980">New</span> <span
  m="902130">England</span> <span m="902490">Patriots</span> <span
  m="902940">example.</span> <span m="903460">So</span> <span
  m="903510">here</span> <span m="903750">are</span> <span
  m="904230">some</span> <span m="904410">data</span> <span
  m="904650">points</span> <span m="904920">about</span> <span
  m="905250">current</span> <span m="905610">Patriots</span> <span
  m="906060">players.</span> <span m="906880">And</span> <span
  m="907020">I've</span> <span m="907080">got</span> <span m="907200">two</span>
  <span m="907470">kinds</span> <span m="908510">of</span> <span
  m="908610">positions.</span> <span m="909120">I've</span> <span
  m="909210">got</span> <span m="909480">receivers,</span> <span
  m="910610">and</span> <span m="910730">I</span> <span m="910770">have</span>
  <span m="910950">linemen.</span> <span m="912240">And</span> <span
  m="912330">each</span> <span m="912480">one</span> <span m="912620">is</span>
  <span m="912720">just</span> <span m="912870">labeled</span> <span
  m="913200">by</span> <span m="913410">the</span> <span m="913530">name,</span>
  <span m="914070">the</span> <span m="914190">height</span> <span
  m="914490">in</span> <span m="914640">inches,</span> <span
  m="915090">and</span> <span m="915210">the</span> <span
  m="915330">weight</span> <span m="915870">in</span> <span
  m="915990">pounds.</span> <span m="916650">OK?</span> <span
  m="917700">Five</span> <span m="918000">of</span> <span
  m="918120">each.</span></p><p><span m="920590">If</span> <span
  m="920830">I</span> <span m="920980">plot</span> <span m="921430">those</span>
  <span m="922490">on</span> <span m="922620">a</span> <span
  m="922890">two</span> <span m="923020">dimensional</span> <span
  m="923440">plot,</span> <span m="924370">this</span> <span
  m="924490">is</span> <span m="924610">what</span> <span m="924760">I</span>
  <span m="924820">get.</span> <span m="926260">OK?</span> <span
  m="926860">No</span> <span m="926950">big</span> <span m="927100">deal.</span>
  <span m="929320">What</span> <span m="929460">am I</span> <span
  m="929560">trying</span> <span m="929770">to</span> <span
  m="929860">do?</span> <span m="930490">I'm</span> <span
  m="930850">trying</span> <span m="931270">to</span> <span
  m="931420">learn,</span> <span m="932140">are</span> <span
  m="932380">their</span> <span m="932500">characteristics</span> <span
  m="933370">that</span> <span m="933490">distinguish</span> <span
  m="934210">the</span> <span m="934330">two</span> <span
  m="934510">classes</span> <span m="934990">from</span> <span
  m="935140">one</span> <span m="935290">another?</span> <span
  m="936220">And</span> <span m="936280">in</span> <span m="936400">the</span>
  <span m="936550">unlabeled</span> <span m="937180">case,</span> <span
  m="937510">all</span> <span m="937780">I</span> <span m="937900">have</span>
  <span m="938200">are</span> <span m="938290">just</span> <span
  m="938500">a</span> <span m="938560">set</span> <span m="938770">of</span>
  <span m="938860">examples.</span> <span m="940240">So</span> <span
  m="940450">what</span> <span m="940660">I</span> <span m="940780">want</span>
  <span m="940990">to</span> <span m="941080">do</span> <span
  m="941320">is</span> <span m="941440">decide</span> <span
  m="941890">what</span> <span m="942220">makes</span> <span
  m="943150">two</span> <span m="943300">players</span> <span
  m="943870">similar</span> <span m="945250">with</span> <span
  m="945370">the</span> <span m="945490">goal</span> <span m="945850">of</span>
  <span m="945940">seeing,</span> <span m="946240">can</span> <span
  m="946390">I</span> <span m="946510">separate</span> <span
  m="947560">this</span> <span m="947800">distribution</span> <span
  m="948550">into</span> <span m="948850">two</span> <span m="949750">or</span>
  <span m="949870">more</span> <span m="950260">natural</span> <span
  m="950680">groups.</span></p><p><span m="952430">Similar</span> <span
  m="952910">is</span> <span m="953000">a</span> <span
  m="953060">distance</span> <span m="953510">measure.</span> <span
  m="954120">It</span> <span m="954460">says</span> <span m="954560">how</span>
  <span m="954680">do</span> <span m="954800">I</span> <span
  m="954860">take</span> <span m="955100">two</span> <span
  m="955280">examples</span> <span m="955790">with</span> <span
  m="955970">values</span> <span m="956420">or</span> <span
  m="956510">features</span> <span m="956900">associated,</span> <span
  m="957175">and</span> <span m="957450">we're going to</span> <span
  m="957580">decide</span> <span m="957920">how</span> <span
  m="958070">far</span> <span m="958310">apart</span> <span
  m="958610">are</span> <span m="958730">they?</span> <span
  m="959500">And</span> <span m="959820">in</span> <span m="960090">the</span>
  <span m="960290">unlabeled</span> <span m="960890">case,</span> <span
  m="961610">the</span> <span m="961730">simple</span> <span
  m="962150">way</span> <span m="962300">to</span> <span m="962420">do</span>
  <span m="962630">it</span> <span m="962720">is</span> <span
  m="962870">to</span> <span m="962990">say,</span> <span m="963770">if</span>
  <span m="964010">I</span> <span m="964160">know</span> <span
  m="964460">that</span> <span m="964640">there</span> <span
  m="964790">are</span> <span m="964910">at</span> <span m="964970">least</span>
  <span m="965750">k</span> <span m="966080">groups</span> <span
  m="966470">there--</span> <span m="966980">in</span> <span
  m="967040">this</span> <span m="967190">case,</span> <span
  m="967400">I'm</span> <span m="967460">going</span> <span m="967580">to</span>
  <span m="967640">tell</span> <span m="967790">you</span> <span
  m="967880">there</span> <span m="968000">are</span> <span
  m="968090">two</span> <span m="968360">different</span> <span
  m="968720">groups</span> <span m="969020">there--</span> <span
  m="969800">how</span> <span m="970100">could</span> <span m="970310">I</span>
  <span m="970430">decide</span> <span m="971330">how</span> <span
  m="971660">best</span> <span m="971990">to</span> <span
  m="972110">cluster</span> <span m="972600">things</span> <span
  m="972830">together</span> <span m="973670">so</span> <span
  m="973850">that</span> <span m="974000">all</span> <span m="974270">the</span>
  <span m="974330">examples</span> <span m="974870">in</span> <span
  m="974990">one</span> <span m="975200">group</span> <span
  m="975470">are</span> <span m="975590">close</span> <span m="975920">to</span>
  <span m="976040">each</span> <span m="976220">other,</span> <span
  m="977000">all</span> <span m="977180">the</span> <span
  m="977240">examples</span> <span m="977750">in</span> <span
  m="977870">the</span> <span m="977960">other</span> <span
  m="978170">group</span> <span m="978410">are</span> <span
  m="978470">close</span> <span m="978710">to</span> <span
  m="978770">each</span> <span m="978920">other,</span> <span
  m="979130">and</span> <span m="979250">they're</span> <span
  m="979550">reasonably</span> <span m="980000">far</span> <span
  m="980210">apart.</span></p><p><span m="982190">There</span> <span
  m="982310">are</span> <span m="982340">many</span> <span
  m="982580">ways</span> <span m="982820">to</span> <span m="982970">do</span>
  <span m="983120">it.</span> <span m="983780">I'm</span> <span
  m="983840">going</span> <span m="983960">to</span> <span
  m="984020">show</span> <span m="984230">you</span> <span
  m="984350">one.</span> <span m="985260">It's</span> <span m="985480">a</span>
  <span m="985550">very</span> <span m="985730">standard</span> <span
  m="986210">way,</span> <span m="986540">and</span> <span m="986660">it</span>
  <span m="986720">works,</span> <span m="987500">basically,</span> <span
  m="988040">as</span> <span m="988160">follows.</span> <span
  m="989920">If</span> <span m="989970">all</span> <span m="990180">I</span>
  <span m="990240">know</span> <span m="990540">is</span> <span
  m="990690">that</span> <span m="990810">there</span> <span
  m="990960">are</span> <span m="991080">two</span> <span
  m="991350">groups</span> <span m="991650">there,</span> <span
  m="992340">I'm</span> <span m="992430">going</span> <span m="992580">to</span>
  <span m="992670">start</span> <span m="993030">by</span> <span
  m="993180">just</span> <span m="993420">picking</span> <span
  m="994080">two</span> <span m="994350">examples</span> <span
  m="995550">as</span> <span m="995670">my</span> <span
  m="995850">exemplars.</span> <span m="997610">Pick</span> <span
  m="997790">them</span> <span m="997880">at</span> <span
  m="997970">random.</span> <span m="998330">Actually at</span> <span
  m="998630">random</span> <span m="998960">is</span> <span
  m="999020">not</span> <span m="999170">great.</span> <span m="999410">I
  don't</span> <span m="999500">want</span> <span m="999680">to</span> <span
  m="999740">pick</span> <span m="999920">too</span> <span m="1000100">closely
  to</span> <span m="1000480">each</span> <span m="1000640">other.</span> <span
  m="1000820">I'm</span> <span m="1000880">going</span> <span
  m="1001000">to</span> <span m="1001060">try</span> <span
  m="1001150">and</span> <span m="1001240">pick</span> <span
  m="1001450">them</span> <span m="1001570">far</span> <span
  m="1001840">apart.</span> <span m="1002020">But</span> <span
  m="1002170">I</span> <span m="1002230">pick</span> <span
  m="1002410">two</span> <span m="1002650">examples</span> <span m="1003640">as
  my</span> <span m="1003890">exemplars.</span> <span m="1004920">And</span>
  <span m="1005320">for</span> <span m="1005500">all</span> <span
  m="1005710">the</span> <span m="1005830">other</span> <span
  m="1006010">examples</span> <span m="1006550">in</span> <span
  m="1006640">the</span> <span m="1006730">training</span> <span
  m="1007210">data,</span> <span m="1007540">I</span> <span
  m="1007720">say</span> <span m="1008020">which</span> <span
  m="1008980">one</span> <span m="1009250">is</span> <span m="1009430">it</span>
  <span m="1009520">closest</span> <span m="1009970">to.</span></p><p><span
  m="1010880">What</span> <span m="1011070">I'm</span> <span
  m="1011120">going</span> <span m="1011230">to</span> <span
  m="1011290">try</span> <span m="1011530">and</span> <span
  m="1011620">do</span> <span m="1011770">is</span> <span
  m="1011890">create</span> <span m="1012220">clusters</span> <span
  m="1012820">with</span> <span m="1012970">the</span> <span
  m="1013090">property</span> <span m="1013630">that</span> <span
  m="1013810">the</span> <span m="1013930">distances</span> <span
  m="1014590">between</span> <span m="1015190">all</span> <span
  m="1015430">of</span> <span m="1015520">the</span> <span
  m="1015580">examples</span> <span m="1016080">of</span> <span
  m="1016130">that</span> <span m="1016300">cluster</span> <span
  m="1017080">are</span> <span m="1017200">small.</span> <span
  m="1017860">The</span> <span m="1018010">average</span> <span
  m="1018490">distance</span> <span m="1018940">is</span> <span
  m="1019030">small.</span> <span m="1020050">And</span> <span
  m="1020140">see</span> <span m="1020320">if</span> <span m="1020440">I</span>
  <span m="1020500">can</span> <span m="1020650">find</span> <span
  m="1020890">clusters</span> <span m="1021310">that</span> <span
  m="1021390">gets</span> <span m="1021640">the</span> <span
  m="1021790">average</span> <span m="1022150">distance</span> <span
  m="1022540">for</span> <span m="1022660">both</span> <span
  m="1023060">clusters</span> <span m="1023250">as</span> <span
  m="1023300">small</span> <span m="1023570">as</span> <span
  m="1023800">possible.</span> <span m="1025380">This</span> <span
  m="1025490">algorithm</span> <span m="1026000">works</span> <span
  m="1026300">by</span> <span m="1026510">picking</span> <span
  m="1026900">two</span> <span m="1027079">examples,</span> <span
  m="1028099">clustering</span> <span m="1028670">all</span> <span
  m="1028819">the</span> <span m="1028940">other</span> <span
  m="1029089">examples</span> <span m="1029540">by</span> <span
  m="1029690">simply</span> <span m="1030020">saying</span> <span
  m="1030290">put</span> <span m="1030589">it</span> <span m="1030710">in</span>
  <span m="1030859">the</span> <span m="1030980">group</span> <span
  m="1032710">to</span> <span m="1032839">which</span> <span
  m="1033050">it's</span> <span m="1033170">closest</span> <span
  m="1033920">to</span> <span m="1034010">that</span> <span
  m="1034190">example.</span></p><p><span m="1035480">Once</span> <span
  m="1035780">I've</span> <span m="1035900">got</span> <span
  m="1036140">those</span> <span m="1036319">clusters,</span> <span
  m="1037280">I'm</span> <span m="1037369">going</span> <span
  m="1037520">to</span> <span m="1037579">find</span> <span
  m="1038060">the</span> <span m="1038210">median</span> <span
  m="1038839">element</span> <span m="1039290">of</span> <span
  m="1039380">that</span> <span m="1039560">group.</span> <span
  m="1040160">Not</span> <span m="1040430">mean,</span> <span
  m="1040790">but</span> <span m="1040940">median,</span> <span
  m="1041270">what's</span> <span m="1041540">the</span> <span
  m="1041690">one</span> <span m="1042170">closest</span> <span
  m="1042710">to</span> <span m="1042829">the</span> <span
  m="1042950">center?</span> <span m="1044060">And</span> <span
  m="1044150">treat</span> <span m="1044480">those</span> <span
  m="1045650">as</span> <span m="1045920">exemplars</span> <span
  m="1046819">and</span> <span m="1046940">repeat</span> <span
  m="1047240">the</span> <span m="1047359">process.</span> <span
  m="1048410">And</span> <span m="1048500">I'll</span> <span
  m="1048620">just</span> <span m="1048830">do</span> <span
  m="1048980">it</span> <span m="1049090">either</span> <span
  m="1049240">some</span> <span m="1049490">number</span> <span
  m="1049730">of</span> <span m="1049820">times or</span> <span
  m="1050210">until</span> <span m="1050450">I</span> <span
  m="1050510">don't</span> <span m="1050720">get</span> <span
  m="1050870">any</span> <span m="1051080">change</span> <span
  m="1052070">in</span> <span m="1052430">the</span> <span
  m="1052520">process.</span> <span m="1053570">So</span> <span
  m="1053810">it's</span> <span m="1053990">clustering</span> <span
  m="1054650">based</span> <span m="1054950">on</span> <span
  m="1055100">distance.</span> <span m="1055490">And</span> <span
  m="1055580">we'll</span> <span m="1055700">come</span> <span
  m="1055850">back</span> <span m="1056060">to</span> <span
  m="1056150">distance</span> <span m="1056570">in</span> <span
  m="1056690">a</span> <span m="1056720">second.</span></p><p><span
  m="1059040">So</span> <span m="1059120">here's</span> <span
  m="1059350">what</span> <span m="1059450">would</span> <span
  m="1059540">have</span> <span m="1059840">my</span> <span
  m="1059990">football</span> <span m="1060320">players.</span> <span
  m="1060650">If</span> <span m="1060800">I</span> <span m="1060890">just</span>
  <span m="1061400">did</span> <span m="1061700">this</span> <span
  m="1062000">based</span> <span m="1062420">on</span> <span
  m="1062660">weight,</span> <span m="1063770">there's</span> <span
  m="1064160">the</span> <span m="1064280">natural</span> <span
  m="1064700">dividing</span> <span m="1065180">line.</span> <span
  m="1065400">And</span> <span m="1065540">it</span> <span
  m="1065630">kind</span> <span m="1065900">of</span> <span
  m="1065960">makes</span> <span m="1066170">sense.</span> <span
  m="1066865">All</span> <span m="1067200">right?</span> <span
  m="1067500">These</span> <span m="1067760">three</span> <span
  m="1068060">are</span> <span m="1068180">obviously</span> <span
  m="1068660">clustered,</span> <span m="1069270">and</span> <span
  m="1069370">again,</span> <span m="1069570">it's</span> <span
  m="1069650">just</span> <span m="1069830">on</span> <span
  m="1070010">this</span> <span m="1070220">axis.</span> <span
  m="1070610">They're</span> <span m="1070790">all</span> <span
  m="1070970">down</span> <span m="1071270">here.</span> <span
  m="1071990">These</span> <span m="1072160">seven</span> <span
  m="1072710">are</span> <span m="1072890">at</span> <span m="1073010">a</span>
  <span m="1073070">different</span> <span m="1073340">place.</span> <span
  m="1073580">There's</span> <span m="1073760">a</span> <span
  m="1073850">natural</span> <span m="1074330">dividing</span> <span
  m="1074840">line</span> <span m="1075080">there.</span> <span
  m="1076530">If</span> <span m="1076580">I</span> <span m="1076700">were</span>
  <span m="1076820">to</span> <span m="1076940">do</span> <span
  m="1077210">it</span> <span m="1077690">based</span> <span
  m="1078020">on</span> <span m="1078170">height,</span> <span
  m="1079870">not</span> <span m="1080110">as</span> <span
  m="1080290">clean.</span> <span m="1081790">This</span> <span
  m="1082030">is</span> <span m="1082150">what</span> <span
  m="1082360">my</span> <span m="1082580">algorithm</span> <span
  m="1083020">came</span> <span m="1083260">up</span> <span
  m="1083410">with</span> <span m="1083560">as</span> <span
  m="1083740">the</span> <span m="1083860">best</span> <span
  m="1084310">dividing</span> <span m="1084880">line</span> <span
  m="1085120">here,</span> <span m="1085360">meaning</span> <span
  m="1085720">that</span> <span m="1085870">these</span> <span
  m="1086260">four,</span> <span m="1087040">again,</span> <span
  m="1087340">just</span> <span m="1087580">based</span> <span
  m="1087970">on</span> <span m="1088120">this</span> <span
  m="1088360">axis</span> <span m="1089140">are</span> <span
  m="1089260">close</span> <span m="1089590">together.</span> <span
  m="1090550">These</span> <span m="1090790">six</span> <span
  m="1091360">are</span> <span m="1091450">close</span> <span
  m="1091750">together.</span> <span m="1092170">But</span> <span
  m="1092290">it's</span> <span m="1092410">not</span> <span
  m="1092620">nearly</span> <span m="1093010">as</span> <span
  m="1093130">clean.</span></p><p><span m="1094390">And</span> <span
  m="1094480">that's</span> <span m="1094660">part</span> <span
  m="1094870">of</span> <span m="1094930">the</span> <span
  m="1095020">issue</span> <span m="1095180">we'll</span> <span
  m="1095260">look</span> <span m="1095500">at</span> <span
  m="1095650">is</span> <span m="1095800">how</span> <span m="1095980">do</span>
  <span m="1096100">I</span> <span m="1096220">find</span> <span
  m="1096490">the</span> <span m="1096580">best</span> <span
  m="1096790">clusters.</span> <span m="1098350">If</span> <span
  m="1098530">I</span> <span m="1098620">use</span> <span
  m="1099010">both</span> <span m="1099730">height</span> <span
  m="1100270">and</span> <span m="1100420">weight,</span> <span
  m="1102340">I</span> <span m="1102440">get</span> <span
  m="1102510">that,</span> <span m="1104040">which</span> <span
  m="1104200">was</span> <span m="1104310">actually</span> <span
  m="1104670">kind</span> <span m="1104910">of</span> <span
  m="1104970">nice,</span> <span m="1105270">right?</span> <span
  m="1105570">Those</span> <span m="1106050">three</span> <span
  m="1106800">cluster</span> <span m="1107300">together.</span> <span
  m="1107610">they're</span> <span m="1107910">near</span> <span
  m="1108150">each</span> <span m="1108360">other,</span> <span
  m="1108780">in</span> <span m="1108870">terms</span> <span
  m="1109170">of</span> <span m="1109290">just</span> <span
  m="1109500">distance</span> <span m="1109950">in</span> <span
  m="1110070">the</span> <span m="1110160">plane.</span> <span
  m="1110910">Those</span> <span m="1111210">seven</span> <span
  m="1112140">are</span> <span m="1112230">near</span> <span
  m="1112440">each</span> <span m="1112590">other.</span> <span
  m="1112830">There's</span> <span m="1113010">a</span> <span
  m="1113100">nice,</span> <span m="1113620">natural</span> <span
  m="1113970">dividing</span> <span m="1114510">line</span> <span
  m="1115290">through</span> <span m="1115530">here.</span> <span
  m="1116550">And</span> <span m="1116670">in</span> <span
  m="1116760">fact,</span> <span m="1117060">that</span> <span
  m="1117180">gives</span> <span m="1117450">me</span> <span
  m="1118530">a</span> <span m="1118560">classifier.</span> <span
  m="1120240">This</span> <span m="1120590">line</span> <span
  m="1122040">is</span> <span m="1122250">the</span> <span
  m="1122400">equidistant</span> <span m="1123090">line</span> <span
  m="1123360">between</span> <span m="1123840">the</span> <span
  m="1123960">centers</span> <span m="1124470">of</span> <span
  m="1124560">those</span> <span m="1124830">two</span> <span
  m="1124980">clusters.</span> <span m="1125460">Meaning,</span> <span
  m="1125760">any</span> <span m="1125970">point</span> <span
  m="1126390">along</span> <span m="1126660">this</span> <span
  m="1126840">line</span> <span m="1127650">is</span> <span
  m="1127770">the</span> <span m="1127860">same</span> <span
  m="1128160">distance</span> <span m="1128580">to</span> <span
  m="1128640">the</span> <span m="1128760">center</span> <span
  m="1129000">of</span> <span m="1129060">that</span> <span
  m="1129240">group</span> <span m="1129750">as</span> <span
  m="1129930">it</span> <span m="1130020">is</span> <span m="1130170">to</span>
  <span m="1130260">that</span> <span m="1130470">group.</span></p><p><span
  m="1131570">And</span> <span m="1131670">so</span> <span
  m="1131730">any</span> <span m="1131970">new</span> <span
  m="1132150">example,</span> <span m="1132790">if</span> <span
  m="1132890">it's</span> <span m="1132900">above</span> <span
  m="1133170">the</span> <span m="1133290">line,</span> <span
  m="1133620">I</span> <span m="1133710">would</span> <span
  m="1133890">say</span> <span m="1134100">gets</span> <span
  m="1134340">that</span> <span m="1134520">label,</span> <span
  m="1134850">if</span> <span m="1134970">it's</span> <span
  m="1135090">below</span> <span m="1135360">the</span> <span
  m="1135480">line,</span> <span m="1136080">gets</span> <span
  m="1136350">that</span> <span m="1136530">label.</span> <span
  m="1138420">In</span> <span m="1138540">a</span> <span
  m="1138600">second,</span> <span m="1138900">we'll</span> <span
  m="1139020">come</span> <span m="1139200">back</span> <span
  m="1139410">to</span> <span m="1139500">look</span> <span
  m="1139710">at</span> <span m="1139800">how</span> <span m="1139980">do</span>
  <span m="1140100">we</span> <span m="1140190">measure</span> <span
  m="1140490">the</span> <span m="1140610">distances,</span> <span
  m="1141120">but</span> <span m="1141270">the</span> <span
  m="1141420">idea</span> <span m="1141810">here</span> <span
  m="1142110">is</span> <span m="1142230">pretty</span> <span
  m="1142500">simple.</span> <span m="1142830">I</span> <span
  m="1142890">want</span> <span m="1143120">to</span> <span
  m="1143220">find</span> <span m="1143520">groupings</span> <span
  m="1144360">near</span> <span m="1144630">each</span> <span
  m="1144810">other</span> <span m="1145530">and</span> <span
  m="1145650">far</span> <span m="1145890">apart</span> <span
  m="1146160">from</span> <span m="1146310">the</span> <span
  m="1146400">other</span> <span m="1146580">group.</span></p><p><span
  m="1149110">Now</span> <span m="1149320">suppose</span> <span
  m="1149830">I</span> <span m="1149920">actually</span> <span
  m="1150310">knew</span> <span m="1150520">the</span> <span
  m="1150670">labels</span> <span m="1151930">on</span> <span
  m="1152710">these</span> <span m="1153400">players.</span> <span
  m="1156790">These</span> <span m="1157060">are</span> <span
  m="1157420">the</span> <span m="1157540">receivers.</span> <span
  m="1158980">Those</span> <span m="1159220">are</span> <span
  m="1159970">the</span> <span m="1160060">linemen.</span> <span
  m="1161060">And</span> <span m="1161170">for</span> <span
  m="1161290">those</span> <span m="1161560">of</span> <span
  m="1161620">you</span> <span m="1161800">who</span> <span
  m="1161900">are</span> <span m="1162000">football</span> <span
  m="1162550">fans,</span> <span m="1162880">you</span> <span
  m="1162970">can</span> <span m="1163090">figure it</span> <span
  m="1163300">out,</span> <span m="1163480">right?</span> <span
  m="1163710">Those</span> <span m="1163930">are</span> <span
  m="1164020">the</span> <span m="1164140">two</span> <span
  m="1164290">tight</span> <span m="1164560">ends.</span> <span
  m="1164830">They</span> <span m="1164900">are</span> <span
  m="1164980">much</span> <span m="1165190">bigger.</span> <span
  m="1166400">I</span> <span m="1166500">think</span> <span
  m="1166540">that's</span> <span m="1166840">Bennett</span> <span
  m="1167170">and</span> <span m="1167260">that's</span> <span
  m="1167470">Gronk</span> <span m="1167830">if</span> <span
  m="1167950">you're</span> <span m="1168070">really</span> <span
  m="1168460">a</span> <span m="1168520">big</span> <span
  m="1168730">Patriots</span> <span m="1169150">fan.</span> <span
  m="1169390">But</span> <span m="1169510">those</span> <span
  m="1169780">are</span> <span m="1169870">tight</span> <span
  m="1170140">ends,</span> <span m="1170350">those</span> <span
  m="1170560">are</span> <span m="1170650">wide</span> <span
  m="1170920">receivers,</span> <span m="1171430">and</span> <span
  m="1171520">it's</span> <span m="1171580">going</span> <span
  m="1171700">to</span> <span m="1171760">come</span> <span
  m="1171910">back</span> <span m="1172150">in</span> <span m="1172210">a</span>
  <span m="1172270">second,</span> <span m="1172480">but</span> <span
  m="1172630">there</span> <span m="1172870">are</span> <span
  m="1172930">the</span> <span m="1173080">labels.</span></p><p><span
  m="1174400">Now</span> <span m="1174730">what</span> <span
  m="1174910">I</span> <span m="1175000">want</span> <span m="1175210">to</span>
  <span m="1175300">do</span> <span m="1175450">is</span> <span
  m="1175510">say,</span> <span m="1175750">if</span> <span m="1175870">I</span>
  <span m="1175960">could</span> <span m="1176110">take</span> <span
  m="1176380">advantage</span> <span m="1176830">of</span> <span
  m="1176890">knowing</span> <span m="1177250">the</span> <span
  m="1177370">labels,</span> <span m="1177820">how</span> <span
  m="1178120">would</span> <span m="1178270">I</span> <span
  m="1178360">divide</span> <span m="1179170">these</span> <span
  m="1179380">groups</span> <span m="1179710">up?</span> <span
  m="1180280">And</span> <span m="1180400">that's</span> <span
  m="1180640">kind</span> <span m="1180880">of</span> <span
  m="1180940">easy</span> <span m="1181240">to</span> <span
  m="1181360">see.</span> <span m="1182770">Basic</span> <span
  m="1183250">idea,</span> <span m="1183630">in</span> <span
  m="1183910">this</span> <span m="1184180">case,</span> <span
  m="1184480">is</span> <span m="1184630">if</span> <span
  m="1184720">I've</span> <span m="1184870">got</span> <span
  m="1185200">labeled</span> <span m="1185710">groups</span> <span
  m="1186040">in</span> <span m="1186160">that</span> <span
  m="1186310">feature</span> <span m="1186640">space,</span> <span
  m="1186940">what</span> <span m="1187090">I</span> <span
  m="1187210">want</span> <span m="1187480">to</span> <span
  m="1187540">do</span> <span m="1187780">is</span> <span
  m="1187990">find</span> <span m="1188500">a</span> <span
  m="1188620">subsurface</span> <span m="1190270">that</span> <span
  m="1190420">naturally</span> <span m="1191080">divides</span> <span
  m="1191680">that</span> <span m="1191860">space.</span> <span
  m="1192220">Now</span> <span m="1192370">subsurface</span> <span
  m="1193030">is</span> <span m="1193150">a</span> <span
  m="1193210">fancy</span> <span m="1193630">word.</span> <span
  m="1193810">It</span> <span m="1193870">says,</span> <span
  m="1194410">in</span> <span m="1194530">the</span> <span
  m="1194620">two-dimensional</span> <span m="1195190">case,</span> <span
  m="1195460">I</span> <span m="1195670">want</span> <span m="1195870">to</span>
  <span m="1196000">know</span> <span m="1196180">what's</span> <span
  m="1196540">the</span> <span m="1196660">best</span> <span
  m="1197020">line,</span> <span m="1198280">if</span> <span
  m="1198400">I</span> <span m="1198460">can</span> <span
  m="1198610">find</span> <span m="1198940">a</span> <span
  m="1199000">single</span> <span m="1199330">line,</span> <span
  m="1199570">that</span> <span m="1199690">separates</span> <span
  m="1200290">all</span> <span m="1200500">the</span> <span
  m="1200590">examples</span> <span m="1201070">with</span> <span
  m="1201220">one</span> <span m="1201460">label</span> <span
  m="1201820">from</span> <span m="1202000">all</span> <span
  m="1202240">the</span> <span m="1202300">examples</span> <span
  m="1203170">of</span> <span m="1203290">the</span> <span
  m="1203350">second</span> <span m="1203680">label.</span></p><p><span
  m="1204820">We'll</span> <span m="1205240">see</span> <span
  m="1205510">that,</span> <span m="1205750">if</span> <span
  m="1205900">the</span> <span m="1205960">examples</span> <span
  m="1206500">are</span> <span m="1206590">well</span> <span
  m="1206830">separated,</span> <span m="1207560">this</span> <span
  m="1207730">is</span> <span m="1207910">easy</span> <span
  m="1208270">to</span> <span m="1208390">do,</span> <span
  m="1208630">and</span> <span m="1208750">it's</span> <span
  m="1208870">great.</span> <span m="1209890">But</span> <span
  m="1210070">in</span> <span m="1210190">some</span> <span
  m="1210430">cases,</span> <span m="1211100">it's</span> <span
  m="1211180">going</span> <span m="1211390">to</span> <span
  m="1211480">be</span> <span m="1211600">more</span> <span
  m="1211780">complicated</span> <span m="1212500">because</span> <span
  m="1212830">some</span> <span m="1213160">of</span> <span
  m="1213250">the</span> <span m="1213310">examples</span> <span
  m="1213790">may</span> <span m="1213890">be</span> <span
  m="1214090">very</span> <span m="1214360">close</span> <span
  m="1214690">to</span> <span m="1214810">one</span> <span
  m="1214990">another.</span> <span m="1216140">And</span> <span
  m="1216240">that's</span> <span m="1216310">going</span> <span
  m="1216460">to</span> <span m="1216550">raise</span> <span
  m="1216850">a</span> <span m="1216910">problem</span> <span
  m="1217330">that</span> <span m="1217450">you</span> <span
  m="1217540">saw</span> <span m="1217810">last</span> <span
  m="1218140">lecture.</span> <span m="1219040">I</span> <span
  m="1219160">want</span> <span m="1219430">to</span> <span
  m="1219550">avoid</span> <span m="1220180">overfitting.</span> <span
  m="1220900">I</span> <span m="1220990">don't</span> <span
  m="1221200">want</span> <span m="1221350">to</span> <span
  m="1221410">create</span> <span m="1221740">a</span> <span
  m="1221860">really</span> <span m="1222400">complicated</span> <span
  m="1223120">surface</span> <span m="1223510">to</span> <span
  m="1223630">separate</span> <span m="1224140">things.</span> <span
  m="1224870">And</span> <span m="1224950">so</span> <span m="1225130">we</span>
  <span m="1225220">may</span> <span m="1225400">have</span> <span
  m="1225580">to</span> <span m="1225700">tolerate</span> <span
  m="1226330">a</span> <span m="1226420">few</span> <span
  m="1226930">incorrectly</span> <span m="1227560">labeled</span> <span
  m="1227920">things,</span> <span m="1228490">if</span> <span
  m="1228580">we</span> <span m="1228670">can't</span> <span
  m="1228880">pull</span> <span m="1229090">it</span> <span
  m="1229180">out.</span></p><p><span m="1230790">And</span> <span
  m="1230910">as</span> <span m="1231030">you</span> <span
  m="1231130">already</span> <span m="1231360">figured</span> <span
  m="1231630">out,</span> <span m="1231780">in</span> <span
  m="1231870">this</span> <span m="1232080">case,</span> <span
  m="1232590">with</span> <span m="1232920">the</span> <span
  m="1233010">labeled</span> <span m="1233400">data,</span> <span
  m="1233700">there's</span> <span m="1234000">the</span> <span
  m="1234150">best</span> <span m="1234420">fitting</span> <span
  m="1234720">line</span> <span m="1235020">right</span> <span
  m="1235260">there.</span> <span m="1236460">Anybody</span> <span
  m="1236850">over</span> <span m="1237090">280</span> <span
  m="1237520">pounds</span> <span m="1238380">is</span> <span
  m="1238980">going</span> <span m="1239190">to</span> <span
  m="1239250">be</span> <span m="1239340">a</span> <span
  m="1239370">great</span> <span m="1239580">lineman.</span> <span
  m="1240090">Anybody</span> <span m="1240630">under</span> <span
  m="1240870">280</span> <span m="1241220">pounds</span> <span
  m="1241920">is</span> <span m="1242070">more</span> <span
  m="1242250">likely</span> <span m="1242550">to</span> <span
  m="1242670">be</span> <span m="1242790">a</span> <span
  m="1242850">receiver.</span> <span m="1245250">OK.</span> <span
  m="1246270">So</span> <span m="1246420">I've</span> <span
  m="1246510">got</span> <span m="1246630">two</span> <span
  m="1246780">different</span> <span m="1247020">ways</span> <span
  m="1247290">of</span> <span m="1247350">trying</span> <span
  m="1247560">to</span> <span m="1247650">think</span> <span
  m="1247830">about</span> <span m="1248040">doing</span> <span
  m="1248280">this</span> <span m="1248430">labeling.</span> <span
  m="1248800">I'm</span> <span m="1248830">going</span> <span
  m="1248940">to</span> <span m="1249000">come</span> <span
  m="1249150">back</span> <span m="1249420">to</span> <span
  m="1249510">both</span> <span m="1249750">of</span> <span
  m="1249840">them</span> <span m="1249990">in</span> <span m="1250080">a</span>
  <span m="1250110">second.</span></p><p><span m="1252160">Now</span> <span
  m="1252240">suppose</span> <span m="1253200">I</span> <span
  m="1253350">add</span> <span m="1253530">in</span> <span
  m="1253650">some</span> <span m="1253830">new</span> <span
  m="1253980">data.</span> <span m="1255490">I</span> <span
  m="1255560">want</span> <span m="1255760">to</span> <span
  m="1255830">label</span> <span m="1256370">new</span> <span
  m="1256580">instances.</span> <span m="1258110">Now</span> <span
  m="1258260">these</span> <span m="1258500">are</span> <span
  m="1258620">actually</span> <span m="1258980">players</span> <span
  m="1259340">of</span> <span m="1259430">a</span> <span
  m="1259460">different</span> <span m="1259760">position.</span> <span
  m="1260170">These</span> <span m="1260360">are</span> <span
  m="1260420">running</span> <span m="1260750">backs.</span> <span
  m="1261230">But</span> <span m="1261470">I</span> <span
  m="1261590">say,</span> <span m="1261960">all</span> <span
  m="1262070">I</span> <span m="1262160">know</span> <span
  m="1262340">about</span> <span m="1262580">is</span> <span
  m="1262730">receivers</span> <span m="1263450">and</span> <span
  m="1263660">linemen.</span> <span m="1264530">I</span> <span
  m="1264620">get</span> <span m="1264860">these</span> <span
  m="1265110">two</span> <span m="1265520">new</span> <span
  m="1265730">data</span> <span m="1266060">points.</span> <span
  m="1266510">I'd</span> <span m="1266690">like</span> <span
  m="1266870">to</span> <span m="1266960">know,</span> <span
  m="1267240">are</span> <span m="1267290">they</span> <span
  m="1267440">more</span> <span m="1267650">likely</span> <span
  m="1268070">to</span> <span m="1268220">be</span> <span m="1268610">a</span>
  <span m="1268700">receiver</span> <span m="1269780">or</span> <span
  m="1269930">a</span> <span m="1270300">linemen?</span> <span
  m="1271430">And</span> <span m="1271550">there's</span> <span
  m="1271790">the</span> <span m="1271880">data</span> <span
  m="1272120">for</span> <span m="1272270">these</span> <span
  m="1272480">two</span> <span m="1272630">gentlemen.</span> <span
  m="1274130">So</span> <span m="1274280">if</span> <span m="1274370">I</span>
  <span m="1274430">go</span> <span m="1274610">back</span> <span
  m="1275000">to</span> <span m="1276050">now</span> <span
  m="1276200">plotting</span> <span m="1276710">them,</span> <span
  m="1277640">oh</span> <span m="1277820">you</span> <span
  m="1277970">notice</span> <span m="1278270">one</span> <span
  m="1278390">of</span> <span m="1278480">the</span> <span
  m="1278840">issues.</span> <span m="1279210">So</span> <span
  m="1279260">there</span> <span m="1279560">are</span> <span
  m="1279680">my</span> <span m="1279860">linemen,</span> <span
  m="1280280">the</span> <span m="1280400">red</span> <span
  m="1280640">ones</span> <span m="1281270">are</span> <span
  m="1281390">my</span> <span m="1281570">receivers,</span> <span
  m="1282110">the</span> <span m="1282230">two</span> <span
  m="1282860">black</span> <span m="1283340">dots</span> <span
  m="1284330">are</span> <span m="1284420">the</span> <span
  m="1284540">two</span> <span m="1284750">running</span> <span
  m="1285050">backs.</span></p><p><span m="1285860">And</span> <span
  m="1286310">notice</span> <span m="1286790">right</span> <span
  m="1287060">here.</span> <span m="1288500">It's</span> <span
  m="1288610">going</span> <span m="1288730">to</span> <span
  m="1288790">be</span> <span m="1288880">really</span> <span
  m="1289510">hard</span> <span m="1289990">to</span> <span
  m="1290140">separate</span> <span m="1290890">those</span> <span
  m="1291310">two</span> <span m="1291550">examples</span> <span
  m="1292120">from</span> <span m="1292270">one</span> <span
  m="1292420">another.</span> <span m="1292850">They</span> <span
  m="1292900">are</span> <span m="1293020">so</span> <span
  m="1293230">close</span> <span m="1293530">to</span> <span
  m="1293650">each</span> <span m="1293800">other.</span> <span
  m="1294040">And</span> <span m="1294160">that's</span> <span
  m="1294340">going</span> <span m="1294460">to</span> <span
  m="1294520">be</span> <span m="1294610">one</span> <span m="1294760">of</span>
  <span m="1294820">the</span> <span m="1294880">things</span> <span
  m="1295090">we</span> <span m="1295180">have</span> <span
  m="1295330">to</span> <span m="1295420">trade</span> <span
  m="1295660">off.</span> <span m="1297040">But</span> <span
  m="1297190">if</span> <span m="1297280">I</span> <span
  m="1297340">think</span> <span m="1297580">about</span> <span
  m="1297790">using</span> <span m="1298390">what</span> <span
  m="1298540">I</span> <span m="1298690">learned</span> <span
  m="1299020">as</span> <span m="1299140">a</span> <span
  m="1299200">classifier</span> <span m="1301240">with</span> <span
  m="1301420">unlabeled</span> <span m="1301960">data,</span> <span
  m="1304010">there</span> <span m="1304190">were</span> <span
  m="1304340">my</span> <span m="1304490">two</span> <span
  m="1304700">clusters.</span> <span m="1306030">Now</span> <span
  m="1306260">you</span> <span m="1306410">see,</span> <span
  m="1306770">oh,</span> <span m="1306980">I've</span> <span
  m="1307100">got</span> <span m="1307250">an</span> <span
  m="1307400">interesting</span> <span m="1307910">example.</span> <span
  m="1308420">This</span> <span m="1308870">new</span> <span
  m="1309260">example</span> <span m="1309740">I</span> <span
  m="1309830">would</span> <span m="1309950">say</span> <span
  m="1310250">is</span> <span m="1310400">clearly</span> <span
  m="1311450">more</span> <span m="1311690">like</span> <span
  m="1311930">a</span> <span m="1311990">receiver</span> <span
  m="1312680">than</span> <span m="1312830">a</span> <span
  m="1313100">lineman.</span> <span m="1314240">But</span> <span
  m="1314330">that</span> <span m="1314540">one</span> <span
  m="1314750">there,</span> <span m="1316340">unclear.</span> <span
  m="1317660">Almost</span> <span m="1318020">exactly</span> <span
  m="1318560">lies</span> <span m="1318950">along</span> <span
  m="1319310">that</span> <span m="1319460">dividing</span> <span
  m="1319970">line</span> <span m="1320180">between</span> <span
  m="1320540">those</span> <span m="1320750">two</span> <span
  m="1320900">clusters.</span></p><p><span m="1322310">And</span> <span
  m="1322480">I</span> <span m="1322580">would</span> <span
  m="1322730">either</span> <span m="1322970">say,</span> <span
  m="1323210">I</span> <span m="1323330">want</span> <span m="1323540">to</span>
  <span m="1323630">rethink</span> <span m="1324170">the</span> <span
  m="1324290">clustering</span> <span m="1324860">or</span> <span
  m="1325040">I</span> <span m="1325130">want</span> <span m="1325360">to</span>
  <span m="1325430">say,</span> <span m="1325680">you</span> <span
  m="1325700">know</span> <span m="1325820">what?</span> <span
  m="1326610">As</span> <span m="1326780">I</span> <span
  m="1326870">know,</span> <span m="1327410">maybe</span> <span
  m="1327650">there</span> <span m="1327830">aren't</span> <span
  m="1328010">two</span> <span m="1328190">clusters</span> <span
  m="1328670">here.</span> <span m="1329270">Maybe</span> <span
  m="1329510">there</span> <span m="1329690">are</span> <span
  m="1329750">three.</span> <span m="1330560">And</span> <span
  m="1330680">I</span> <span m="1330740">want</span> <span m="1330920">to</span>
  <span m="1330980">classify</span> <span m="1331580">them</span> <span
  m="1331730">a</span> <span m="1331760">little</span> <span
  m="1332000">differently.</span> <span m="1333270">So</span> <span
  m="1333320">I'll</span> <span m="1333380">come</span> <span
  m="1333560">back</span> <span m="1333770">to</span> <span
  m="1333860">that.</span> <span m="1335570">On</span> <span
  m="1335660">the</span> <span m="1335720">other</span> <span
  m="1335930">hand,</span> <span m="1336990">if</span> <span m="1337070">I
  had</span> <span m="1337250">used</span> <span m="1337490">the</span> <span
  m="1337610">labeled</span> <span m="1338030">data,</span> <span
  m="1338540">there</span> <span m="1338720">was</span> <span
  m="1338900">my</span> <span m="1339080">dividing</span> <span
  m="1339560">line.</span> <span m="1340340">This</span> <span
  m="1340520">is</span> <span m="1340670">really</span> <span
  m="1340970">easy.</span> <span m="1341960">Both</span> <span
  m="1342320">of</span> <span m="1342410">those</span> <span
  m="1342740">new</span> <span m="1342980">examples</span> <span
  m="1343460">are</span> <span m="1343580">clearly</span> <span
  m="1344150">below</span> <span m="1344480">the</span> <span
  m="1344630">dividing</span> <span m="1345080">line.</span> <span
  m="1345320">They</span> <span m="1345500">are</span> <span
  m="1345650">clearly</span> <span m="1346250">examples</span> <span
  m="1346850">that</span> <span m="1346970">I</span> <span
  m="1347090">would</span> <span m="1347240">categorize</span> <span
  m="1348350">as</span> <span m="1348500">being</span> <span
  m="1348710">more</span> <span m="1348950">like</span> <span
  m="1349160">receivers</span> <span m="1349910">than</span> <span
  m="1350060">they</span> <span m="1350180">are</span> <span
  m="1350330">like</span> <span m="1350560">linemen.</span></p><p><span
  m="1352380">And</span> <span m="1352530">I</span> <span
  m="1352620">know</span> <span m="1352860">it's</span> <span
  m="1352980">a</span> <span m="1353040">football</span> <span
  m="1353460">example.</span> <span m="1353880">If you</span> <span
  m="1353970">don't</span> <span m="1354180">like</span> <span
  m="1354360">football,</span> <span m="1354750">pick</span> <span
  m="1354960">another</span> <span m="1355260">example.</span> <span
  m="1356130">But</span> <span m="1356370">you</span> <span
  m="1356490">get</span> <span m="1356760">the</span> <span
  m="1356880">sense</span> <span m="1357270">of</span> <span
  m="1357420">why</span> <span m="1357810">I</span> <span m="1357900">can</span>
  <span m="1358080">use</span> <span m="1358500">the</span> <span
  m="1358620">data</span> <span m="1359460">in</span> <span m="1359580">a</span>
  <span m="1359640">labeled</span> <span m="1360060">case</span> <span
  m="1360420">and</span> <span m="1360510">the</span> <span
  m="1360630">unlabeled</span> <span m="1361080">case</span> <span
  m="1361500">to</span> <span m="1361620">come</span> <span
  m="1361800">up</span> <span m="1361920">with</span> <span
  m="1362040">different</span> <span m="1362310">ways</span> <span
  m="1362730">of</span> <span m="1362790">building</span> <span
  m="1363120">the</span> <span m="1363210">clusters.</span> <span
  m="1365840">So</span> <span m="1366020">what</span> <span
  m="1366110">we're</span> <span m="1366170">going</span> <span
  m="1366290">to</span> <span m="1366350">do</span> <span
  m="1366470">over</span> <span m="1366650">the</span> <span
  m="1366740">next</span> <span m="1367340">2</span> <span
  m="1367480">and</span> <span m="1367620">1/2</span> <span
  m="1367760">lectures</span> <span m="1368870">is</span> <span
  m="1369020">look</span> <span m="1369350">at</span> <span
  m="1369500">how</span> <span m="1369830">can</span> <span
  m="1370040">we</span> <span m="1370190">write</span> <span
  m="1370550">code</span> <span m="1371420">to</span> <span
  m="1371540">learn</span> <span m="1372530">that</span> <span
  m="1372680">way</span> <span m="1372860">of</span> <span
  m="1372920">separating</span> <span m="1373400">things</span> <span
  m="1373640">out?</span></p><p><span m="1374550">We're</span> <span
  m="1374800">going to</span> <span m="1374870">learn</span> <span
  m="1375080">models</span> <span m="1375500">based</span> <span
  m="1375800">on</span> <span m="1375950">unlabeled</span> <span
  m="1376400">data.</span> <span m="1377740">That's</span> <span
  m="1377910">the</span> <span m="1377970">case</span> <span
  m="1378180">where</span> <span m="1378270">I</span> <span
  m="1378360">don't</span> <span m="1378570">know</span> <span
  m="1378690">what</span> <span m="1378780">the</span> <span
  m="1378870">labels</span> <span m="1379200">are,</span> <span
  m="1379350">by</span> <span m="1379500">simply</span> <span
  m="1380040">trying</span> <span m="1380280">to</span> <span
  m="1380370">find</span> <span m="1380640">ways</span> <span
  m="1381330">to</span> <span m="1381450">cluster</span> <span
  m="1381960">things</span> <span m="1382230">together</span> <span
  m="1382890">nearby,</span> <span m="1383790">and</span> <span
  m="1383880">then</span> <span m="1384030">use</span> <span
  m="1384360">the</span> <span m="1384480">clusters</span> <span
  m="1384990">to</span> <span m="1385110">assign</span> <span
  m="1385440">labels</span> <span m="1385830">to</span> <span
  m="1385950">new</span> <span m="1386100">data.</span> <span
  m="1387020">And</span> <span m="1387150">we're</span> <span
  m="1387210">going</span> <span m="1387330">to</span> <span
  m="1387390">learn</span> <span m="1387600">models</span> <span
  m="1388080">by</span> <span m="1388320">looking</span> <span
  m="1388830">at</span> <span m="1388950">labeled</span> <span
  m="1389460">data</span> <span m="1389820">and</span> <span
  m="1389940">seeing</span> <span m="1390240">how</span> <span
  m="1390480">do</span> <span m="1390630">we</span> <span
  m="1390750">best</span> <span m="1391170">come</span> <span
  m="1391470">up</span> <span m="1391650">with</span> <span m="1391860">a</span>
  <span m="1391950">way</span> <span m="1392190">of</span> <span
  m="1392310">separating</span> <span m="1393510">with</span> <span
  m="1393750">a</span> <span m="1393810">line</span> <span m="1394380">or</span>
  <span m="1394530">a</span> <span m="1394590">plane</span> <span
  m="1395010">or</span> <span m="1395160">a</span> <span
  m="1395220">collection</span> <span m="1395700">of</span> <span
  m="1395820">lines,</span> <span m="1396660">examples</span> <span
  m="1397230">from</span> <span m="1397410">one</span> <span
  m="1397590">group,</span> <span m="1398340">from</span> <span
  m="1398520">examples</span> <span m="1398970">of</span> <span
  m="1399060">the</span> <span m="1399180">other</span> <span
  m="1399360">group.</span></p><p><span m="1400320">With</span> <span
  m="1400710">the</span> <span m="1400830">acknowledgment</span> <span
  m="1401610">that</span> <span m="1401760">we</span> <span
  m="1401910">want</span> <span m="1402150">to</span> <span
  m="1402270">avoid</span> <span m="1402690">overfitting,</span> <span
  m="1403740">we</span> <span m="1403830">don't</span> <span
  m="1403950">want</span> <span m="1404100">to</span> <span
  m="1404160">create</span> <span m="1404370">a</span> <span
  m="1404430">really</span> <span m="1404700">complicated</span> <span
  m="1405270">system.</span> <span m="1405630">And</span> <span
  m="1405720">as</span> <span m="1405870">a</span> <span
  m="1405930">consequence,</span> <span m="1407070">we're</span> <span
  m="1407190">going</span> <span m="1407340">to</span> <span
  m="1407400">have</span> <span m="1407550">to</span> <span
  m="1407670">make</span> <span m="1407850">some</span> <span
  m="1408000">trade-offs</span> <span m="1408480">between</span> <span
  m="1408840">what</span> <span m="1408960">we</span> <span
  m="1409080">call</span> <span m="1409320">false</span> <span
  m="1409650">positives</span> <span m="1410610">and</span> <span
  m="1410700">false</span> <span m="1411000">negatives.</span> <span
  m="1412200">But</span> <span m="1412320">the</span> <span
  m="1412410">resulting</span> <span m="1412830">classifier</span> <span
  m="1413460">can</span> <span m="1413640">then</span> <span
  m="1413790">label</span> <span m="1414120">any</span> <span
  m="1414330">new</span> <span m="1414510">data</span> <span
  m="1414780">by</span> <span m="1414930">just</span> <span
  m="1415140">deciding</span> <span m="1415620">where</span> <span
  m="1415800">you</span> <span m="1416010">are</span> <span
  m="1416190">with</span> <span m="1416370">respect</span> <span
  m="1416730">to</span> <span m="1416820">that</span> <span
  m="1416970">separating</span> <span m="1417450">line.</span></p><p><span
  m="1420360">So</span> <span m="1420500">here's</span> <span
  m="1420740">what</span> <span m="1420860">you're</span> <span
  m="1420980">going</span> <span m="1421130">to</span> <span
  m="1421190">see</span> <span m="1421940">over</span> <span
  m="1422060">the</span> <span m="1422150">next</span> <span
  m="1422900">2</span> <span m="1423020">and</span> <span m="1423140">1/2</span>
  <span m="1423260">lectures.</span> <span m="1424930">Every</span> <span
  m="1425070">machine</span> <span m="1425430">learning</span> <span
  m="1425790">method</span> <span m="1426120">has</span> <span
  m="1427230">five</span> <span m="1427590">essential</span> <span
  m="1428010">components.</span> <span m="1429510">We</span> <span
  m="1429630">need</span> <span m="1429840">to</span> <span
  m="1429900">decide</span> <span m="1430320">what's</span> <span
  m="1430590">the</span> <span m="1430710">training</span> <span
  m="1431100">data,</span> <span m="1431310">and</span> <span
  m="1431430">how</span> <span m="1431670">are</span> <span
  m="1431760">we</span> <span m="1431880">going</span> <span
  m="1432060">to</span> <span m="1432150">evaluate</span> <span
  m="1432900">the</span> <span m="1433020">success</span> <span
  m="1433470">of</span> <span m="1433560">that</span> <span
  m="1433680">system.</span> <span m="1434370">We've</span> <span
  m="1434670">already</span> <span m="1434910">seen</span> <span
  m="1435120">some</span> <span m="1435270">examples</span> <span
  m="1435750">of</span> <span m="1435840">that.</span> <span
  m="1436900">We</span> <span m="1436950">need</span> <span
  m="1437160">to</span> <span m="1437280">decide</span> <span
  m="1437880">how</span> <span m="1438180">are</span> <span
  m="1438270">we</span> <span m="1438390">going</span> <span
  m="1438600">to</span> <span m="1438750">represent</span> <span
  m="1440010">each</span> <span m="1440340">instance</span> <span
  m="1441070">that</span> <span m="1441090">we're</span> <span
  m="1441210">giving</span> <span m="1441510">it.</span></p><p><span
  m="1442560">I</span> <span m="1442680">happened</span> <span
  m="1442980">to</span> <span m="1443100">choose</span> <span
  m="1443490">height</span> <span m="1443790">and</span> <span
  m="1443940">weight</span> <span m="1444180">for</span> <span
  m="1444330">football</span> <span m="1444660">players.</span> <span
  m="1445190">But</span> <span m="1445350">I</span> <span
  m="1445410">might</span> <span m="1445600">have</span> <span
  m="1445710">been</span> <span m="1445830">better</span> <span
  m="1446100">off</span> <span m="1446340">to</span> <span
  m="1446460">pick</span> <span m="1446820">average</span> <span
  m="1447240">speed</span> <span m="1448200">or,</span> <span
  m="1448590">I</span> <span m="1448710">don't</span> <span
  m="1448830">know,</span> <span m="1449040">arm</span> <span
  m="1449370">length,</span> <span m="1449620">something</span> <span
  m="1450030">else.</span> <span m="1450210">How</span> <span
  m="1450360">do</span> <span m="1450510">I</span> <span
  m="1450600">figure</span> <span m="1450870">out</span> <span
  m="1450960">what</span> <span m="1451170">are</span> <span
  m="1451230">the</span> <span m="1451350">right</span> <span
  m="1451560">features.</span> <span m="1452670">And</span> <span
  m="1452820">associated</span> <span m="1453420">with</span> <span
  m="1453600">that,</span> <span m="1453810">how</span> <span
  m="1454080">do</span> <span m="1454260">I</span> <span
  m="1454350">measure</span> <span m="1455070">distances</span> <span
  m="1455820">between</span> <span m="1456750">those</span> <span
  m="1456960">features?</span> <span m="1457320">How</span> <span
  m="1457440">do</span> <span m="1457560">I</span> <span
  m="1457600">decide</span> <span m="1458010">what's</span> <span
  m="1458280">close</span> <span m="1458610">and</span> <span
  m="1458730">what's</span> <span m="1458970">not</span> <span
  m="1459180">close?</span> <span m="1460290">Maybe</span> <span
  m="1460650">it</span> <span m="1460740">should</span> <span
  m="1460920">be</span> <span m="1461040">different,</span> <span
  m="1461400">in</span> <span m="1461490">terms</span> <span
  m="1461760">of</span> <span m="1461850">weight</span> <span
  m="1462090">versus</span> <span m="1462450">height,</span> <span
  m="1462720">for</span> <span m="1462840">example.</span> <span
  m="1463290">I</span> <span m="1463380">need</span> <span m="1463530">to</span>
  <span m="1463620">make</span> <span m="1463800">that</span> <span
  m="1463980">decision.</span></p><p><span m="1465180">And</span> <span
  m="1465270">those</span> <span m="1465540">are</span> <span
  m="1465630">the</span> <span m="1465750">two</span> <span
  m="1465870">things</span> <span m="1466090">we're</span> <span
  m="1466150">going</span> <span m="1466290">to</span> <span
  m="1466350">show</span> <span m="1466530">you</span> <span
  m="1466590">examples</span> <span m="1467070">of</span> <span
  m="1467240">today,</span> <span m="1467680">how</span> <span
  m="1467790">to</span> <span m="1467880">go</span> <span
  m="1468000">through</span> <span m="1468210">that.</span> <span
  m="1470140">Starting</span> <span m="1470530">next</span> <span
  m="1470770">week,</span> <span m="1470980">Professor</span> <span
  m="1471340">Guttag</span> <span m="1471530">is</span> <span
  m="1471820">going</span> <span m="1471970">to</span> <span
  m="1472030">show</span> <span m="1472180">you</span> <span
  m="1472300">how</span> <span m="1472450">you</span> <span
  m="1472600">take</span> <span m="1472990">those</span> <span
  m="1473740">and</span> <span m="1473860">actually</span> <span
  m="1474160">start</span> <span m="1474430">building</span> <span
  m="1474760">more</span> <span m="1475030">detailed</span> <span
  m="1475390">versions</span> <span m="1475870">of</span> <span
  m="1475990">measuring</span> <span m="1477750">clustering,</span> <span
  m="1478260">measuring</span> <span m="1478740">similarities</span> <span
  m="1479790">to</span> <span m="1479880">find</span> <span
  m="1480330">an</span> <span m="1480450">objective</span> <span
  m="1480930">function</span> <span m="1481320">that</span> <span
  m="1481440">you</span> <span m="1481560">want</span> <span
  m="1481770">to</span> <span m="1481830">minimize</span> <span
  m="1482370">to</span> <span m="1482490">decide</span> <span
  m="1482910">what</span> <span m="1483120">is</span> <span
  m="1483300">the</span> <span m="1483390">best</span> <span
  m="1483600">cluster</span> <span m="1483990">to</span> <span
  m="1484080">use.</span> <span m="1484830">And</span> <span
  m="1484950">then</span> <span m="1485070">what</span> <span
  m="1485280">is</span> <span m="1485460">the</span> <span
  m="1485580">best</span> <span m="1485880">optimization</span> <span
  m="1486660">method</span> <span m="1486990">you</span> <span
  m="1487110">want</span> <span m="1487230">to</span> <span
  m="1487320">use</span> <span m="1487740">to</span> <span
  m="1487860">learn</span> <span m="1488100">that</span> <span
  m="1488250">model.</span></p><p><span m="1490350">So let's</span> <span
  m="1490790">start</span> <span m="1491070">talking</span> <span
  m="1491370">about</span> <span m="1491520">features.</span> <span
  m="1494080">I've</span> <span m="1494200">got</span> <span
  m="1494320">a</span> <span m="1494350">set</span> <span m="1494590">of</span>
  <span m="1494680">examples,</span> <span m="1495600">labeled</span> <span
  m="1495960">or</span> <span m="1496060">not.</span> <span m="1496960">I</span>
  <span m="1497050">need</span> <span m="1497260">to</span> <span
  m="1497380">decide</span> <span m="1497770">what</span> <span
  m="1497980">is</span> <span m="1498160">it</span> <span
  m="1498250">about</span> <span m="1498520">those</span> <span
  m="1498700">examples</span> <span m="1499270">that's</span> <span
  m="1499450">useful</span> <span m="1500560">to</span> <span
  m="1500680">use</span> <span m="1501520">when</span> <span
  m="1501670">I</span> <span m="1501730">want</span> <span m="1501940">to</span>
  <span m="1502040">decide</span> <span m="1502420">what's</span> <span
  m="1502660">close</span> <span m="1502960">to</span> <span
  m="1503050">another</span> <span m="1503350">thing</span> <span
  m="1503560">or</span> <span m="1503650">not.</span> <span
  m="1505350">And</span> <span m="1505450">one</span> <span
  m="1505490">of</span> <span m="1505550">the</span> <span
  m="1505640">problems</span> <span m="1506120">is,</span> <span
  m="1506300">if</span> <span m="1506420">it</span> <span m="1506510">was</span>
  <span m="1506690">really</span> <span m="1507050">easy,</span> <span
  m="1507470">it</span> <span m="1507590">would</span> <span
  m="1507740">be</span> <span m="1508280">really</span> <span
  m="1508610">easy.</span> <span m="1509600">Features</span> <span
  m="1510110">don't</span> <span m="1510500">always</span> <span
  m="1510860">capture</span> <span m="1511220">what</span> <span
  m="1511370">you</span> <span m="1511490">want.</span> <span
  m="1512510">I'm</span> <span m="1512570">going</span> <span
  m="1512750">to</span> <span m="1512840">belabor</span> <span
  m="1513290">that</span> <span m="1513500">football</span> <span
  m="1513950">analogy,</span> <span m="1514490">but</span> <span
  m="1514610">why</span> <span m="1514850">did</span> <span m="1514970">I</span>
  <span m="1515090">pick</span> <span m="1515300">height</span> <span
  m="1515510">and</span> <span m="1515600">weight.</span> <span
  m="1516050">Because</span> <span m="1516230">it</span> <span
  m="1516320">was</span> <span m="1516500">easy</span> <span
  m="1516740">to</span> <span m="1516860">find.</span></p><p><span
  m="1518615">You know,</span> <span m="1518870">if</span> <span
  m="1519140">you</span> <span m="1519230">work</span> <span
  m="1519410">for</span> <span m="1519500">the</span> <span
  m="1519590">New</span> <span m="1519740">England</span> <span
  m="1519980">Patriots,</span> <span m="1520430">what</span> <span
  m="1520640">is</span> <span m="1520760">the</span> <span
  m="1520850">thing</span> <span m="1521060">that</span> <span
  m="1521180">you</span> <span m="1521300">really</span> <span
  m="1521630">look</span> <span m="1521870">for</span> <span
  m="1522110">when</span> <span m="1522260">you're</span> <span
  m="1522380">asking,</span> <span m="1522900">what's</span> <span
  m="1523010">the</span> <span m="1523130">right</span> <span
  m="1523310">feature?</span> <span m="1523660">It's</span> <span
  m="1523820">probably</span> <span m="1524270">some</span> <span
  m="1524630">other</span> <span m="1524870">combination</span> <span
  m="1525380">of</span> <span m="1525520">things.</span> <span
  m="1525660">So</span> <span m="1525800">you,</span> <span
  m="1526070">as</span> <span m="1526250">a</span> <span
  m="1526310">designer,</span> <span m="1527210">have</span> <span
  m="1527330">to</span> <span m="1527450">say</span> <span
  m="1527630">what</span> <span m="1527810">are</span> <span
  m="1527870">the</span> <span m="1527990">features</span> <span
  m="1528380">I</span> <span m="1528470">want</span> <span m="1528680">to</span>
  <span m="1528740">use.</span> <span m="1530200">That</span> <span
  m="1530270">quote,</span> <span m="1530540">by</span> <span
  m="1530690">the</span> <span m="1530780">way,</span> <span
  m="1531000">is</span> <span m="1531100">from</span> <span
  m="1531290">one</span> <span m="1531410">of</span> <span
  m="1531470">the</span> <span m="1531560">great</span> <span
  m="1531740">statisticians</span> <span m="1532490">of</span> <span
  m="1532550">the</span> <span m="1532640">20th</span> <span
  m="1532970">century,</span> <span m="1533430">which</span> <span
  m="1533480">I</span> <span m="1533540">think</span> <span
  m="1533720">captures</span> <span m="1534200">it</span> <span
  m="1534320">well.</span></p><p><span m="1535640">So</span> <span
  m="1536810">feature</span> <span m="1537230">engineering,</span> <span
  m="1538460">as</span> <span m="1538640">you,</span> <span
  m="1538820">as</span> <span m="1538970">a</span> <span
  m="1539030">programmer,</span> <span m="1539630">comes</span> <span
  m="1539900">down</span> <span m="1540140">to</span> <span
  m="1540230">deciding</span> <span m="1540800">both</span> <span
  m="1541140">what</span> <span m="1541370">are</span> <span
  m="1541490">the</span> <span m="1541610">features</span> <span
  m="1542030">I</span> <span m="1542120">want</span> <span m="1542330">to</span>
  <span m="1542420">measure</span> <span m="1543290">in</span> <span
  m="1543440">that</span> <span m="1543590">vector</span> <span
  m="1543910">that</span> <span m="1543990">I'm</span> <span
  m="1544100">going</span> <span m="1544220">to</span> <span
  m="1544280">put</span> <span m="1544430">together,</span> <span
  m="1545480">and</span> <span m="1545570">how</span> <span
  m="1545780">do</span> <span m="1545960">I</span> <span
  m="1546020">decide</span> <span m="1546470">relative</span> <span
  m="1546950">ways</span> <span m="1547280">to</span> <span
  m="1547400">weight</span> <span m="1547640">it?</span> <span
  m="1549340">So</span> <span m="1549520">John,</span> <span
  m="1549850">and</span> <span m="1549970">Ana,</span> <span
  m="1550170">and</span> <span m="1550300">I</span> <span
  m="1550420">could</span> <span m="1550660">have</span> <span
  m="1550840">made</span> <span m="1551170">our</span> <span
  m="1555070">job</span> <span m="1555520">this</span> <span
  m="1555760">term</span> <span m="1556090">really</span> <span
  m="1556450">easy</span> <span m="1557680">if</span> <span
  m="1557830">we</span> <span m="1557980">had</span> <span
  m="1558070">sat</span> <span m="1558370">down</span> <span
  m="1558610">at</span> <span m="1558670">the</span> <span
  m="1558790">beginning</span> <span m="1559090">of</span> <span
  m="1559150">the</span> <span m="1559270">term</span> <span
  m="1559480">and</span> <span m="1559570">said,</span> <span
  m="1559720">you</span> <span m="1559810">know,</span> <span
  m="1559900">we've</span> <span m="1560080">taught</span> <span
  m="1560320">this</span> <span m="1560470">course</span> <span
  m="1560740">many</span> <span m="1560980">times.</span> <span
  m="1561270">We've</span> <span m="1561400">got</span> <span
  m="1561580">data</span> <span m="1561940">from,</span> <span
  m="1562180">I</span> <span m="1562240">don't</span> <span
  m="1562390">know,</span> <span m="1562540">John,</span> <span
  m="1562840">thousands</span> <span m="1563320">of</span> <span
  m="1563380">students,</span> <span m="1563980">probably</span> <span
  m="1564430">over</span> <span m="1564640">this</span> <span
  m="1564790">time.</span> <span m="1565650">Let's</span> <span
  m="1565900">just</span> <span m="1566080">build</span> <span
  m="1566320">a</span> <span m="1566380">little</span> <span
  m="1566740">learning</span> <span m="1567190">algorithm</span> <span
  m="1567640">that</span> <span m="1567730">takes</span> <span
  m="1568000">a</span> <span m="1568060">set</span> <span m="1568330">of</span>
  <span m="1568420">data</span> <span m="1568720">and</span> <span
  m="1568870">predicts</span> <span m="1569440">your</span> <span
  m="1569680">final</span> <span m="1570010">grade.</span></p><p><span
  m="1571490">You</span> <span m="1571590">don't</span> <span
  m="1571600">have</span> <span m="1571690">to</span> <span
  m="1571810">come</span> <span m="1571940">to</span> <span
  m="1571980">class,</span> <span m="1572500">don't</span> <span
  m="1572710">have</span> <span m="1572800">to</span> <span
  m="1572890">go</span> <span m="1572980">through</span> <span
  m="1573160">all</span> <span m="1573280">the</span> <span
  m="1573370">problems,</span> <span m="1573670">because</span> <span
  m="1573790">we'll</span> <span m="1574090">just</span> <span
  m="1574330">predict</span> <span m="1574690">your</span> <span
  m="1574810">final</span> <span m="1575170">grade.</span> <span
  m="1575440">Wouldn't</span> <span m="1575620">that</span> <span
  m="1575710">be</span> <span m="1575830">nice?</span> <span
  m="1576300">Make</span> <span m="1576520">our</span> <span
  m="1576670">job</span> <span m="1576910">a</span> <span
  m="1576940">little</span> <span m="1577180">easier,</span> <span
  m="1577540">and</span> <span m="1578260">you</span> <span
  m="1578410">may</span> <span m="1578560">or</span> <span
  m="1578650">may</span> <span m="1578740">not</span> <span
  m="1578950">like</span> <span m="1579160">that</span> <span
  m="1579370">idea.</span> <span m="1580930">But</span> <span
  m="1581140">I</span> <span m="1581200">could</span> <span
  m="1581350">think</span> <span m="1581620">about</span> <span
  m="1581860">predicting</span> <span m="1582400">that</span> <span
  m="1582550">grade?</span> <span m="1583240">Now</span> <span
  m="1583330">why</span> <span m="1583480">am</span> <span m="1583570">I</span>
  <span m="1583660">telling</span> <span m="1584050">this</span> <span
  m="1584230">example.</span> <span m="1584620">I</span> <span
  m="1584680">was</span> <span m="1584800">trying</span> <span
  m="1584950">to</span> <span m="1585010">see</span> <span m="1585160">if</span>
  <span m="1585250">I</span> <span m="1585310">could</span> <span
  m="1585430">get</span> <span m="1585610">a</span> <span m="1585670">few</span>
  <span m="1585850">smiles.</span> <span m="1586270">I</span> <span
  m="1586360">saw</span> <span m="1586570">a</span> <span
  m="1586600">couple</span> <span m="1586900">of</span> <span
  m="1586990">them</span> <span m="1587140">there.</span></p><p><span
  m="1588750">But</span> <span m="1588880">think</span> <span
  m="1589120">about</span> <span m="1589330">the</span> <span
  m="1589420">features.</span> <span m="1590780">What</span> <span
  m="1591040">I</span> <span m="1591130">measure?</span> <span
  m="1592360">Actually,</span> <span m="1592480">I'll</span> <span
  m="1592660">put</span> <span m="1592840">this</span> <span
  m="1592990">on</span> <span m="1593140">John</span> <span
  m="1593410">because</span> <span m="1593590">it's</span> <span
  m="1593740">his</span> <span m="1593920">idea.</span> <span
  m="1594210">What</span> <span m="1594400">would</span> <span
  m="1594520">he</span> <span m="1594700">measure?</span> <span
  m="1595930">Well,</span> <span m="1596800">GPA</span> <span
  m="1597460">is</span> <span m="1597580">probably</span> <span
  m="1598300">not</span> <span m="1598750">a</span> <span m="1598840">bad</span>
  <span m="1599260">predictor</span> <span m="1599650">of</span> <span
  m="1600040">performance.</span> <span m="1601090">You</span> <span
  m="1601210">do</span> <span m="1601390">well</span> <span
  m="1601570">in</span> <span m="1601690">other</span> <span
  m="1601900">classes,</span> <span m="1602380">you're</span> <span
  m="1602650">likely</span> <span m="1602980">to</span> <span
  m="1603100">do</span> <span m="1603220">well</span> <span
  m="1603460">in</span> <span m="1603580">this</span> <span
  m="1603760">class.</span></p><p><span m="1605140">I'm</span> <span
  m="1605200">going</span> <span m="1605320">to</span> <span
  m="1605380">use</span> <span m="1605590">this</span> <span
  m="1605770">one</span> <span m="1605980">very</span> <span
  m="1606460">carefully.</span> <span m="1607000">Prior</span> <span
  m="1607510">programming</span> <span m="1608230">experience</span> <span
  m="1609190">is</span> <span m="1609670">at</span> <span
  m="1609820">least</span> <span m="1610300">a</span> <span
  m="1610390">predictor,</span> <span m="1610840">but</span> <span
  m="1610990">it</span> <span m="1611080">is</span> <span m="1611290">not</span>
  <span m="1612250">a</span> <span m="1612340">perfect</span> <span
  m="1612730">predictor.</span> <span m="1614020">Those</span> <span
  m="1614260">of</span> <span m="1614320">you who</span> <span
  m="1614470">haven't</span> <span m="1614710">programmed</span> <span
  m="1615040">before,</span> <span m="1615340">in</span> <span
  m="1615400">this</span> <span m="1615550">class,</span> <span
  m="1615850">you</span> <span m="1615940">can</span> <span
  m="1616060">still</span> <span m="1616300">do</span> <span
  m="1616420">really</span> <span m="1616750">well</span> <span
  m="1616900">in</span> <span m="1616990">this</span> <span
  m="1617140">class.</span> <span m="1617320">But</span> <span
  m="1617470">it's</span> <span m="1617650">an</span> <span
  m="1617770">indication</span> <span m="1618340">that</span> <span
  m="1618460">you've</span> <span m="1618610">seen</span> <span
  m="1618880">other</span> <span m="1619120">programming</span> <span
  m="1619660">languages.</span></p><p><span m="1621580">On</span> <span
  m="1621670">the</span> <span m="1621760">other</span> <span
  m="1621940">hand,</span> <span m="1622250">I</span> <span
  m="1622350">don't</span> <span m="1622390">believe</span> <span
  m="1622750">in</span> <span m="1622840">astrology.</span> <span
  m="1624250">So</span> <span m="1624400">I</span> <span
  m="1624490">don't</span> <span m="1624700">think</span> <span
  m="1624910">the</span> <span m="1625030">month</span> <span
  m="1625390">in</span> <span m="1625480">which</span> <span
  m="1625690">you're</span> <span m="1625810">born,</span> <span
  m="1626890">the</span> <span m="1627430">astrological</span> <span
  m="1628150">sign</span> <span m="1628450">under</span> <span
  m="1628690">which</span> <span m="1628900">you</span> <span
  m="1629020">were</span> <span m="1629140">born</span> <span
  m="1629470">has</span> <span m="1629650">probably</span> <span
  m="1630100">anything</span> <span m="1630430">to</span> <span
  m="1630520">do</span> <span m="1630670">with</span> <span
  m="1630790">how</span> <span m="1630940">well</span> <span
  m="1631120">you'd</span> <span m="1631300">program.</span> <span
  m="1632500">I</span> <span m="1632590">doubt</span> <span
  m="1632980">that</span> <span m="1633160">eye</span> <span
  m="1633370">color</span> <span m="1633700">has</span> <span
  m="1633910">anything</span> <span m="1634240">to</span> <span
  m="1634330">do</span> <span m="1634420">with</span> <span
  m="1634540">how</span> <span m="1634660">well</span> <span
  m="1634840">you'd</span> <span m="1634990">program.</span> <span
  m="1635470">You</span> <span m="1635590">get</span> <span
  m="1635740">the</span> <span m="1635890">idea.</span> <span
  m="1636160">Some</span> <span m="1636490">features</span> <span
  m="1636970">matter,</span> <span m="1637780">others</span> <span
  m="1638110">don't.</span></p><p><span m="1639730">Now</span> <span
  m="1640300">I</span> <span m="1640390">could</span> <span
  m="1640690">just</span> <span m="1640960">throw</span> <span
  m="1641230">all</span> <span m="1641470">the</span> <span
  m="1641590">features</span> <span m="1642070">in</span> <span
  m="1642340">and</span> <span m="1642520">hope</span> <span
  m="1642910">that</span> <span m="1643030">the</span> <span
  m="1643150">machine</span> <span m="1643480">learning</span> <span
  m="1643780">algorithm</span> <span m="1644200">sorts</span> <span
  m="1644710">out</span> <span m="1644950">those</span> <span
  m="1645210">it</span> <span m="1645310">wants</span> <span
  m="1645610">to</span> <span m="1645700">keep</span> <span
  m="1645970">from</span> <span m="1646120">those</span> <span
  m="1646360">it</span> <span m="1646480">doesn't.</span> <span
  m="1647920">But</span> <span m="1648040">I</span> <span
  m="1648100">remind</span> <span m="1648520">you</span> <span m="1648640">of
  that</span> <span m="1648820">idea</span> <span m="1649180">of</span> <span
  m="1649390">overfitting.</span> <span m="1650560">If</span> <span
  m="1650860">I</span> <span m="1651010">do</span> <span
  m="1651220">that,</span> <span m="1651460">there</span> <span
  m="1651670">is</span> <span m="1651940">the</span> <span
  m="1652060">danger</span> <span m="1652570">that</span> <span
  m="1652750">it</span> <span m="1652930">will</span> <span
  m="1653170">find</span> <span m="1653560">some</span> <span
  m="1653980">correlation</span> <span m="1654640">between</span> <span
  m="1655450">birth</span> <span m="1655900">month,</span> <span
  m="1656350">eye</span> <span m="1656590">color,</span> <span
  m="1657010">and</span> <span m="1657370">GPA.</span></p><p><span
  m="1659200">And</span> <span m="1659290">that's</span> <span
  m="1659500">going</span> <span m="1659650">to</span> <span
  m="1659980">lead</span> <span m="1660280">to</span> <span m="1660460">a</span>
  <span m="1660520">conclusion</span> <span m="1661030">that</span> <span
  m="1661120">we</span> <span m="1661240">really</span> <span
  m="1661510">don't</span> <span m="1661750">like.</span> <span
  m="1663240">By</span> <span m="1663390">the</span> <span
  m="1663510">way,</span> <span m="1663630">in</span> <span
  m="1663720">case</span> <span m="1663960">you're</span> <span
  m="1664080">worried,</span> <span m="1664620">I</span> <span
  m="1664710">can</span> <span m="1664890">assure</span> <span
  m="1665220">you</span> <span m="1665310">that</span> <span
  m="1665460">Stu</span> <span m="1665850">Schmill</span> <span
  m="1666060">in</span> <span m="1666180">the</span> <span
  m="1666300">dean</span> <span m="1666870">of</span> <span
  m="1666960">admissions</span> <span m="1667410">department</span> <span
  m="1667860">does</span> <span m="1668070">not</span> <span
  m="1668400">use</span> <span m="1668670">machine</span> <span
  m="1669000">learning</span> <span m="1669540">to</span> <span
  m="1669660">pick</span> <span m="1669870">you.</span> <span
  m="1670590">He</span> <span m="1670740">actually</span> <span
  m="1671100">looks</span> <span m="1671340">at</span> <span
  m="1671430">a</span> <span m="1671460">whole</span> <span
  m="1671640">bunch</span> <span m="1671940">of</span> <span
  m="1672000">things</span> <span m="1672270">because</span> <span
  m="1672690">it's</span> <span m="1672840">not</span> <span
  m="1673050">easy</span> <span m="1673320">to</span> <span
  m="1673410">replace</span> <span m="1673830">him</span> <span
  m="1673950">with</span> <span m="1674130">a</span> <span
  m="1674190">machine--</span> <span m="1675180">yet.</span></p><p><span
  m="1676765">All</span> <span m="1677180">right.</span> <span
  m="1677370">So</span> <span m="1677520">what</span> <span
  m="1677680">this</span> <span m="1677780">says</span> <span
  m="1678120">is</span> <span m="1678450">we</span> <span
  m="1678570">need</span> <span m="1678750">to</span> <span
  m="1678870">think</span> <span m="1679170">about</span> <span
  m="1680100">how</span> <span m="1680280">do</span> <span m="1680400">we</span>
  <span m="1680490">pick</span> <span m="1680670">the</span> <span
  m="1680790">features.</span> <span m="1681180">And</span> <span
  m="1681330">mostly,</span> <span m="1681780">what</span> <span
  m="1681900">we're</span> <span m="1682050">trying</span> <span
  m="1682290">to</span> <span m="1682380">do</span> <span m="1682550">is</span>
  <span m="1682710">to</span> <span m="1682830">maximize</span> <span
  m="1684090">something</span> <span m="1684420">called</span> <span
  m="1684630">the</span> <span m="1684720">signal</span> <span
  m="1685050">to</span> <span m="1685170">noise</span> <span
  m="1685440">ratio.</span> <span m="1685830">Maximize</span> <span
  m="1687000">those</span> <span m="1687330">features</span> <span
  m="1687720">that</span> <span m="1687840">carry</span> <span
  m="1688260">the</span> <span m="1688380">most</span> <span
  m="1688650">information,</span> <span m="1689670">and</span> <span
  m="1689790">remove</span> <span m="1690090">the</span> <span
  m="1690210">ones</span> <span m="1690450">that</span> <span
  m="1690570">don't.</span> <span m="1692580">So</span> <span
  m="1692700">I</span> <span m="1692760">want</span> <span m="1692940">to</span>
  <span m="1693000">show</span> <span m="1693180">you</span> <span
  m="1693240">an</span> <span m="1693330">example</span> <span
  m="1694200">of</span> <span m="1694290">how</span> <span
  m="1694410">you</span> <span m="1694560">might</span> <span
  m="1694740">think</span> <span m="1694980">about</span> <span
  m="1695220">this.</span> <span m="1697530">I</span> <span
  m="1697550">want</span> <span m="1697730">to</span> <span
  m="1697820">label</span> <span m="1699180">reptiles.</span> <span
  m="1699965">I</span> <span m="1700240">want</span> <span m="1700370">to</span>
  <span m="1700430">come</span> <span m="1700610">up</span> <span
  m="1700730">with</span> <span m="1700850">a</span> <span
  m="1700910">way</span> <span m="1701120">of</span> <span
  m="1701210">labeling</span> <span m="1702050">animals</span> <span
  m="1702620">as,</span> <span m="1702860">are</span> <span
  m="1703010">they</span> <span m="1703160">a</span> <span
  m="1703220">reptile</span> <span m="1703700">or</span> <span
  m="1703760">not.</span></p><p><span m="1705100">And</span> <span
  m="1705220">I</span> <span m="1705290">give</span> <span
  m="1705470">you</span> <span m="1705560">a</span> <span
  m="1705620">single</span> <span m="1706010">example.</span> <span
  m="1706400">With</span> <span m="1706610">a</span> <span
  m="1706670">single</span> <span m="1707000">example,</span> <span
  m="1707420">you</span> <span m="1707540">can't</span> <span
  m="1707780">really</span> <span m="1708080">do</span> <span
  m="1708260">much.</span> <span m="1708560">But</span> <span
  m="1708980">from</span> <span m="1709250">this</span> <span
  m="1709430">example,</span> <span m="1710450">I</span> <span
  m="1710570">know</span> <span m="1710840">that</span> <span
  m="1710990">a</span> <span m="1711050">cobra,</span> <span
  m="1711560">it</span> <span m="1712160">lays</span> <span
  m="1712490">eggs,</span> <span m="1712760">it</span> <span
  m="1712880">has</span> <span m="1713060">scales,</span> <span
  m="1713520">it's</span> <span m="1713660">poisonous,</span> <span
  m="1714200">it's</span> <span m="1714320">cold</span> <span
  m="1714560">blooded,</span> <span m="1715130">it</span> <span
  m="1715190">has</span> <span m="1715430">no</span> <span
  m="1715610">legs,</span> <span m="1716530">and</span> <span
  m="1716660">it's</span> <span m="1716780">a</span> <span
  m="1716810">reptile.</span> <span m="1717200">So</span> <span
  m="1717410">I</span> <span m="1717500">could</span> <span
  m="1717650">say</span> <span m="1717860">my</span> <span
  m="1718070">model</span> <span m="1718430">of</span> <span
  m="1718520">a</span> <span m="1718580">reptile</span> <span
  m="1719090">is</span> <span m="1719840">well,</span> <span
  m="1720020">I'm</span> <span m="1720110">not</span> <span
  m="1720260">certain.</span> <span m="1720500">I</span> <span
  m="1720560">don't</span> <span m="1720710">have</span> <span
  m="1720830">enough</span> <span m="1721040">data</span> <span
  m="1721310">yet.</span></p><p><span m="1722990">But</span> <span
  m="1723170">if</span> <span m="1723260">I</span> <span m="1723350">give</span>
  <span m="1723560">you</span> <span m="1723680">a</span> <span
  m="1723770">second</span> <span m="1724190">example,</span> <span
  m="1725330">and</span> <span m="1725450">it</span> <span
  m="1725540">also</span> <span m="1725930">happens</span> <span
  m="1726320">to</span> <span m="1726440">be</span> <span
  m="1726560">egg-laying,</span> <span m="1727070">have</span> <span
  m="1727220">scales,</span> <span m="1727760">poisonous,</span> <span
  m="1728300">cold</span> <span m="1728570">blooded,</span> <span
  m="1728840">no</span> <span m="1729080">legs.</span> <span
  m="1729740">There</span> <span m="1730100">is</span> <span
  m="1730250">my</span> <span m="1730430">model,</span> <span
  m="1730820">right?</span> <span m="1731720">Perfectly</span> <span
  m="1732260">reasonable</span> <span m="1732710">model,</span> <span
  m="1733420">whether</span> <span m="1733670">I</span> <span
  m="1733850">design</span> <span m="1734270">it</span> <span
  m="1734360">or</span> <span m="1734450">a</span> <span
  m="1734480">machine</span> <span m="1734780">learning</span> <span
  m="1735080">algorithm</span> <span m="1735380">would</span> <span
  m="1735500">do</span> <span m="1735650">it</span> <span
  m="1736070">says,</span> <span m="1736430">if</span> <span
  m="1736610">all</span> <span m="1736820">of</span> <span
  m="1736910">these</span> <span m="1737120">are</span> <span
  m="1737210">true,</span> <span m="1738200">label</span> <span
  m="1738500">it</span> <span m="1738590">as</span> <span m="1738740">a</span>
  <span m="1738800">reptile.</span> <span m="1740210">OK?</span></p><p><span
  m="1742110">And</span> <span m="1742460">now</span> <span m="1742690">I</span>
  <span m="1742780">give</span> <span m="1742960">you</span> <span
  m="1743110">a</span> <span m="1743170">boa</span> <span
  m="1743440">constrictor.</span> <span m="1745366">Ah.</span> <span
  m="1747260">It's</span> <span m="1747470">a</span> <span
  m="1747560">reptile.</span> <span m="1748790">But</span> <span
  m="1748940">it</span> <span m="1749030">doesn't</span> <span
  m="1749420">fit</span> <span m="1749870">the</span> <span
  m="1749960">model.</span> <span m="1751120">And</span> <span
  m="1751360">in</span> <span m="1751450">particular,</span> <span
  m="1753010">it's</span> <span m="1753280">not</span> <span
  m="1753580">egg-laying,</span> <span m="1754760">and</span> <span
  m="1754900">it's</span> <span m="1755020">not</span> <span
  m="1755200">poisonous.</span> <span m="1756950">So</span> <span
  m="1757100">I've</span> <span m="1757190">got</span> <span
  m="1757310">to</span> <span m="1757370">refine</span> <span
  m="1757820">the</span> <span m="1757910">model.</span> <span
  m="1758240">Or</span> <span m="1758390">the</span> <span
  m="1758570">algorithm</span> <span m="1758860">has</span> <span
  m="1759150">got</span> <span m="1759290">to</span> <span
  m="1759380">refine</span> <span m="1759740">the</span> <span
  m="1759890">model.</span> <span m="1759990">And</span> <span
  m="1760190">this,</span> <span m="1760500">I</span> <span
  m="1760600">want</span> <span m="1760670">to</span> <span
  m="1760730">remind</span> <span m="1761030">you, is</span> <span
  m="1761140">looking</span> <span m="1761450">at</span> <span
  m="1761510">the</span> <span m="1761630">features.</span> <span
  m="1761960">So</span> <span m="1762110">I</span> <span
  m="1762170">started</span> <span m="1762530">out</span> <span
  m="1762620">with</span> <span m="1762770">five</span> <span
  m="1763070">features.</span> <span m="1763910">This</span> <span
  m="1764150">doesn't</span> <span m="1764540">fit.</span></p><p><span
  m="1765870">So</span> <span m="1765950">probably</span> <span
  m="1766490">what</span> <span m="1766640">I</span> <span
  m="1766730">should</span> <span m="1766880">do</span> <span
  m="1767240">is</span> <span m="1767390">reduce</span> <span
  m="1767780">it.</span> <span m="1768730">I'm</span> <span m="1768810">going
  to</span> <span m="1768900">look</span> <span m="1769100">at</span> <span
  m="1769160">scales.</span> <span m="1769970">I'm</span> <span
  m="1770040">going</span> <span m="1770160">to</span> <span
  m="1770210">look</span> <span m="1770390">at</span> <span
  m="1770450">cold</span> <span m="1770700">blooded.</span> <span
  m="1771140">I'm</span> <span m="1771230">going to</span> <span
  m="1771410">look</span> <span m="1771590">at</span> <span
  m="1771680">legs.</span> <span m="1772790">That</span> <span
  m="1773030">captures</span> <span m="1773600">all</span> <span
  m="1773780">three</span> <span m="1773990">examples.</span> <span
  m="1774600">Again,</span> <span m="1774700">if</span> <span
  m="1774790">you</span> <span m="1774890">think</span> <span
  m="1775070">about</span> <span m="1775280">this</span> <span
  m="1775430">in</span> <span m="1775550">terms</span> <span
  m="1775790">of</span> <span m="1775850">clustering,</span> <span
  m="1776660">all</span> <span m="1776930">three</span> <span
  m="1777230">of</span> <span m="1777290">them</span> <span
  m="1777470">would</span> <span m="1777620">fit</span> <span
  m="1777830">with</span> <span m="1778010">that.</span></p><p><span
  m="1779720">OK.</span> <span m="1780120">Now</span> <span m="1780330">I</span>
  <span m="1780390">give</span> <span m="1780570">you</span> <span
  m="1780690">another</span> <span m="1780990">example--</span> <span
  m="1782680">chicken.</span> <span m="1784070">I</span> <span
  m="1784130">don't</span> <span m="1784310">think</span> <span
  m="1784490">it's</span> <span m="1784610">a</span> <span
  m="1784670">reptile.</span> <span m="1785535">In</span> <span
  m="1785950">fact,</span> <span m="1786540">I'm</span> <span
  m="1786640">pretty</span> <span m="1786740">sure</span> <span
  m="1786890">it's</span> <span m="1787010">not</span> <span
  m="1787190">a</span> <span m="1787250">reptile.</span> <span
  m="1788600">And</span> <span m="1788750">it</span> <span
  m="1788960">nicely</span> <span m="1789590">still</span> <span
  m="1790430">fits</span> <span m="1791060">this</span> <span
  m="1791270">model,</span> <span m="1792290">right?</span> <span
  m="1793350">Because,</span> <span m="1793820">while</span> <span
  m="1794030">it</span> <span m="1794090">has</span> <span
  m="1794360">scales,</span> <span m="1794810">which</span> <span
  m="1794960">you</span> <span m="1795140">may or</span> <span
  m="1795410">not</span> <span m="1795620">realize,</span> <span
  m="1796310">it's</span> <span m="1796460">not</span> <span
  m="1796670">cold</span> <span m="1796880">blooded,</span> <span
  m="1797270">and</span> <span m="1797390">it</span> <span
  m="1797480">has</span> <span m="1797750">legs.</span> <span
  m="1798500">So</span> <span m="1798800">it</span> <span m="1798950">is</span>
  <span m="1799130">a</span> <span m="1799190">negative</span> <span
  m="1799700">example</span> <span m="1800150">that</span> <span
  m="1800300">reinforces</span> <span m="1800960">the</span> <span
  m="1801080">model.</span> <span m="1802380">Sounds</span> <span
  m="1802680">good.</span> <span m="1804644">And</span> <span
  m="1805060">now</span> <span m="1805250">I'll</span> <span
  m="1805320">give</span> <span m="1805470">you</span> <span
  m="1805560">an</span> <span m="1805650">alligator.</span> <span
  m="1807740">It's</span> <span m="1807870">a</span> <span
  m="1807930">reptile.</span> <span m="1809720">And</span> <span
  m="1809900">oh</span> <span m="1810200">fudge,</span> <span
  m="1810920">right?</span> <span m="1811460">It</span> <span
  m="1811700">doesn't</span> <span m="1812180">satisfy</span> <span
  m="1813110">the</span> <span m="1813200">model.</span> <span
  m="1814370">Because</span> <span m="1815430">while</span> <span
  m="1815720">it</span> <span m="1815780">does</span> <span
  m="1816350">have</span> <span m="1816500">scales</span> <span
  m="1817400">and</span> <span m="1817520">it</span> <span m="1817610">is</span>
  <span m="1817790">cold</span> <span m="1818090">blooded,</span> <span
  m="1819170">it</span> <span m="1819320">has</span> <span
  m="1819560">legs.</span></p><p><span m="1821390">I'm</span> <span
  m="1821510">almost</span> <span m="1821780">done</span> <span
  m="1821930">with</span> <span m="1822050">the</span> <span
  m="1822110">example.</span> <span m="1822530">But</span> <span
  m="1822650">you</span> <span m="1822740">see</span> <span
  m="1822920">the</span> <span m="1823040">point.</span> <span
  m="1823280">Again,</span> <span m="1823580">I've</span> <span
  m="1823640">got</span> <span m="1823850">to</span> <span
  m="1823940">think</span> <span m="1824210">about</span> <span
  m="1824390">how</span> <span m="1824600">do</span> <span m="1824740">I</span>
  <span m="1824840">refine</span> <span m="1825350">this.</span> <span
  m="1825650">And</span> <span m="1825770">I</span> <span
  m="1825830">could</span> <span m="1826910">by</span> <span
  m="1827090">saying,</span> <span m="1827610">all</span> <span
  m="1827710">right.</span> <span m="1828500">Let's</span> <span
  m="1828650">make</span> <span m="1828800">it</span> <span m="1828860">a</span>
  <span m="1828890">little</span> <span m="1829070">more</span> <span
  m="1829220">complicated--</span> <span m="1830210">has</span> <span
  m="1830510">scales,</span> <span m="1830930">cold</span> <span
  m="1831250">blooded,</span> <span m="1831530">0</span> <span
  m="1831920">or</span> <span m="1832010">four</span> <span
  m="1832280">legs--</span> <span m="1833060">I'm</span> <span
  m="1833120">going</span> <span m="1833240">to</span> <span
  m="1833300">say</span> <span m="1833480">it's</span> <span
  m="1833630">a</span> <span m="1833690">reptile.</span> <span
  m="1836670">I'll</span> <span m="1836730">give</span> <span
  m="1836910">you</span> <span m="1837000">the</span> <span
  m="1837090">dart</span> <span m="1837330">frog.</span> <span
  m="1838860">Not</span> <span m="1839100">a</span> <span
  m="1839160">reptile,</span> <span m="1839530">it's</span> <span
  m="1839740">an</span> <span m="1839820">amphibian.</span> <span
  m="1840780">And</span> <span m="1840900">that's</span> <span
  m="1841140">nice</span> <span m="1841440">because</span> <span
  m="1841860">it</span> <span m="1841950">still</span> <span
  m="1842250">satisfies</span> <span m="1842625">this.</span> <span
  m="1843000">So</span> <span m="1843210">it's</span> <span
  m="1843330">an</span> <span m="1843480">example</span> <span
  m="1843990">outside</span> <span m="1844440">of</span> <span
  m="1844500">the</span> <span m="1844620">cluster</span> <span
  m="1845530">that</span> <span m="1845730">says</span> <span
  m="1846960">no</span> <span m="1847140">scales,</span> <span
  m="1848340">not</span> <span m="1848490">cold</span> <span
  m="1848670">blooded,</span> <span m="1850350">but</span> <span
  m="1850530">happens to</span> <span m="1850830">have</span> <span
  m="1850950">four</span> <span m="1851190">legs.</span> <span
  m="1851460">It's</span> <span m="1851550">not</span> <span
  m="1851760">a</span> <span m="1851790">reptile.</span> <span
  m="1852180">That's</span> <span m="1852420">good.</span></p><p><span
  m="1853780">And</span> <span m="1853900">then</span> <span
  m="1854050">I</span> <span m="1854140">give</span> <span
  m="1854380">you--</span> <span m="1855250">I have</span> <span m="1855390">to
  give</span> <span m="1855570">you a</span> <span m="1855700">python,</span>
  <span m="1856330">right?</span> <span m="1856570">I</span> <span
  m="1856660">mean,</span> <span m="1856910">there</span> <span
  m="1857010">has</span> <span m="1857140">to</span> <span m="1857260">be</span>
  <span m="1857350">a</span> <span m="1857410">python</span> <span
  m="1857800">in</span> <span m="1857920">here.</span> <span
  m="1859030">Oh</span> <span m="1859120">come</span> <span
  m="1859270">on.</span> <span m="1859430">At</span> <span
  m="1859530">least</span> <span m="1859670">grown</span> <span
  m="1860080">at</span> <span m="1860230">me</span> <span
  m="1860350">when</span> <span m="1860470">I</span> <span
  m="1860560">say</span> <span m="1860800">that.</span> <span
  m="1861130">There</span> <span m="1861280">has</span> <span
  m="1861400">to</span> <span m="1861520">be</span> <span m="1861580">a</span>
  <span m="1861640">python</span> <span m="1862090">here.</span> <span
  m="1862990">And</span> <span m="1863110">I</span> <span
  m="1863170">give</span> <span m="1863290">you</span> <span
  m="1863380">that</span> <span m="1863600">and</span> <span
  m="1863710">a</span> <span m="1863770">salmon.</span> <span
  m="1865470">And</span> <span m="1865560">now</span> <span m="1865860">I</span>
  <span m="1866010">am</span> <span m="1867060">in</span> <span
  m="1867150">trouble.</span> <span m="1868620">Because</span> <span
  m="1870090">look</span> <span m="1870270">at</span> <span
  m="1870360">scales,</span> <span m="1871550">look</span> <span
  m="1871740">at</span> <span m="1871800">cold</span> <span
  m="1872040">blooded,</span> <span m="1873150">look</span> <span
  m="1873330">at</span> <span m="1873440">legs.</span> <span
  m="1874810">I</span> <span m="1874880">can't</span> <span
  m="1875120">separate</span> <span m="1875510">them.</span> <span
  m="1876610">On</span> <span m="1876880">those</span> <span
  m="1877180">features,</span> <span m="1877590">there's</span> <span
  m="1877840">no</span> <span m="1878050">way</span> <span m="1878230">to</span>
  <span m="1878350">come</span> <span m="1878620">up</span> <span
  m="1878770">with</span> <span m="1878920">a</span> <span
  m="1879010">way</span> <span m="1879310">that</span> <span
  m="1879490">will</span> <span m="1879880">correctly</span> <span
  m="1880510">say</span> <span m="1880750">that</span> <span
  m="1880900">the</span> <span m="1881020">python</span> <span
  m="1881500">is</span> <span m="1881620">a</span> <span
  m="1881680">reptile</span> <span m="1882580">and</span> <span
  m="1882700">the</span> <span m="1882790">salmon</span> <span
  m="1883300">is</span> <span m="1883510">not.</span> <span
  m="1884576">And</span> <span m="1884990">so</span> <span
  m="1885910">there's</span> <span m="1886060">no</span> <span
  m="1886270">easy</span> <span m="1886630">way</span> <span
  m="1886840">to</span> <span m="1886960">add</span> <span m="1887170">in</span>
  <span m="1887290">that</span> <span m="1887440">rule.</span></p><p><span
  m="1888370">And</span> <span m="1888460">probably</span> <span
  m="1888830">my</span> <span m="1889000">best</span> <span
  m="1889300">thing</span> <span m="1889510">is</span> <span
  m="1889630">to</span> <span m="1889720">simply</span> <span
  m="1890110">go</span> <span m="1890290">back</span> <span
  m="1890560">to</span> <span m="1890680">just</span> <span
  m="1890980">two</span> <span m="1891190">features,</span> <span
  m="1891730">scales</span> <span m="1892810">and</span> <span
  m="1892900">cold</span> <span m="1893170">blooded.</span> <span
  m="1894490">And</span> <span m="1894580">basically</span> <span
  m="1895150">say,</span> <span m="1895360">if</span> <span
  m="1895450">something</span> <span m="1895780">has</span> <span
  m="1895960">scales</span> <span m="1896320">and</span> <span
  m="1896410">it's</span> <span m="1896530">cold</span> <span
  m="1896770">blooded,</span> <span m="1897070">I'm</span> <span
  m="1897160">going</span> <span m="1897310">to</span> <span
  m="1897370">call</span> <span m="1897610">it</span> <span m="1897700">a</span>
  <span m="1897760">reptile.</span> <span m="1898850">If</span> <span
  m="1898940">it</span> <span m="1899170">doesn't</span> <span
  m="1899470">have</span> <span m="1899620">both</span> <span
  m="1899860">of</span> <span m="1899920">those,</span> <span
  m="1900160">I'm</span> <span m="1900220">going</span> <span
  m="1900370">to</span> <span m="1900430">say</span> <span
  m="1900580">it's</span> <span m="1900730">not</span> <span
  m="1900940">a</span> <span m="1901000">reptile.</span> <span
  m="1902170">It</span> <span m="1902320">won't</span> <span
  m="1902650">be</span> <span m="1902830">perfect.</span> <span
  m="1904040">It's</span> <span m="1904060">going</span> <span
  m="1904240">to</span> <span m="1904300">incorrectly</span> <span
  m="1904990">label</span> <span m="1905320">the</span> <span
  m="1905440">salmon.</span> <span m="1905800">But</span> <span
  m="1905950">I've</span> <span m="1906070">made</span> <span
  m="1906370">a</span> <span m="1906430">design</span> <span
  m="1906970">choice</span> <span m="1907330">here</span> <span
  m="1907870">that's</span> <span m="1908050">important.</span> <span
  m="1909310">And</span> <span m="1909460">the</span> <span
  m="1909550">design</span> <span m="1910060">choice</span> <span
  m="1910340">is</span> <span m="1910900">that</span> <span m="1911110">I</span>
  <span m="1911260">will</span> <span m="1911440">have</span> <span
  m="1911740">no</span> <span m="1912430">false</span> <span
  m="1913060">negatives.</span></p><p><span m="1914470">What</span> <span
  m="1914590">that</span> <span m="1914740">means</span> <span
  m="1915070">is</span> <span m="1915220">there's</span> <span
  m="1915400">not</span> <span m="1915580">going</span> <span
  m="1915730">to</span> <span m="1915820">be</span> <span m="1915970">any</span>
  <span m="1916240">instance</span> <span m="1916660">of</span> <span
  m="1916720">something</span> <span m="1917080">that's</span> <span
  m="1917260">not</span> <span m="1917560">a</span> <span
  m="1917620">reptile</span> <span m="1919090">that</span> <span
  m="1919180">I'm</span> <span m="1919240">going</span> <span
  m="1919360">to</span> <span m="1919420">call</span> <span m="1919840">a</span>
  <span m="1919900">reptile.</span> <span m="1921380">I</span> <span
  m="1921470">may</span> <span m="1921830">have</span> <span
  m="1922430">some</span> <span m="1922670">false</span> <span
  m="1923060">positives.</span> <span m="1924540">So</span> <span
  m="1924560">I</span> <span m="1924620">did</span> <span
  m="1924810">that</span> <span m="1924890">the</span> <span
  m="1924980">wrong</span> <span m="1925160">way.</span> <span
  m="1925280">A</span> <span m="1925310">false</span> <span
  m="1925580">negative</span> <span m="1925880">says,</span> <span
  m="1926330">everything</span> <span m="1926720">that's</span> <span
  m="1926870">not</span> <span m="1927080">a</span> <span
  m="1927140">reptile</span> <span m="1927500">I'm</span> <span
  m="1927560">going</span> <span m="1927680">to</span> <span
  m="1929000">categorize</span> <span m="1929540">that</span> <span
  m="1929690">direction.</span> <span m="1930020">I</span> <span
  m="1930080">may</span> <span m="1930260">have</span> <span
  m="1930380">some</span> <span m="1930560">false</span> <span
  m="1930860">positives,</span> <span m="1931490">in</span> <span
  m="1931610">that,</span> <span m="1931760">I</span> <span
  m="1931820">may</span> <span m="1931970">have</span> <span
  m="1932120">a</span> <span m="1932210">few</span> <span
  m="1932540">things</span> <span m="1932870">that</span> <span
  m="1933020">I</span> <span m="1933110">will</span> <span
  m="1933320">incorrectly</span> <span m="1933920">label</span> <span
  m="1934280">as</span> <span m="1934400">a</span> <span
  m="1934460">reptile.</span> <span m="1935690">And</span> <span
  m="1935790">in</span> <span m="1935900">particular,</span> <span
  m="1936980">salmon</span> <span m="1937430">is</span> <span
  m="1937550">going</span> <span m="1937700">to</span> <span
  m="1937790">be</span> <span m="1937880">an</span> <span
  m="1937970">instance</span> <span m="1938330">of</span> <span
  m="1938420">that.</span></p><p><span m="1939620">This</span> <span
  m="1939800">trade</span> <span m="1940250">off of</span> <span
  m="1940310">false</span> <span m="1940910">positives</span> <span
  m="1941480">and</span> <span m="1941600">false</span> <span
  m="1941900">negatives</span> <span m="1942320">is</span> <span
  m="1942410">something</span> <span m="1942830">that</span> <span
  m="1942950">we</span> <span m="1943130">worry</span> <span
  m="1943430">about,</span> <span m="1943640">as</span> <span
  m="1943760">we</span> <span m="1943910">think</span> <span
  m="1944120">about</span> <span m="1944330">it.</span> <span
  m="1944390">Because</span> <span m="1944540">there's</span> <span
  m="1944690">no</span> <span m="1944930">perfect</span> <span
  m="1945350">way,</span> <span m="1946040">in</span> <span
  m="1946100">many</span> <span m="1946340">cases,</span> <span m="1946690">to
  separate</span> <span m="1946930">out</span> <span m="1947240">the</span>
  <span m="1947360">data.</span> <span m="1948820">And</span> <span
  m="1948960">if</span> <span m="1949080">you</span> <span
  m="1949140">think</span> <span m="1949320">back</span> <span
  m="1949500">to</span> <span m="1949590">my</span> <span
  m="1949680">example</span> <span m="1950100">of</span> <span
  m="1950160">the</span> <span m="1950250">New</span> <span
  m="1950370">England</span> <span m="1950640">Patriots,</span> <span
  m="1951570">that</span> <span m="1951960">running</span> <span
  m="1952320">back</span> <span m="1952590">and</span> <span
  m="1952680">that</span> <span m="1952830">wide</span> <span
  m="1953160">receiver</span> <span m="1953700">were</span> <span
  m="1953880">so</span> <span m="1954210">close</span> <span
  m="1954510">together</span> <span m="1954930">in</span> <span
  m="1955020">height and</span> <span m="1955290">weight,</span> <span
  m="1955500">there</span> <span m="1955660">was</span> <span
  m="1955770">no</span> <span m="1956010">way</span> <span
  m="1956190">I'm</span> <span m="1956310">going</span> <span
  m="1956430">to</span> <span m="1956520">be</span> <span
  m="1956610">able</span> <span m="1956790">to</span> <span
  m="1956910">separate</span> <span m="1957360">them</span> <span
  m="1957510">apart.</span> <span m="1958290">And</span> <span
  m="1958410">I</span> <span m="1958470">just</span> <span
  m="1958650">have</span> <span m="1958800">to</span> <span
  m="1958890">be</span> <span m="1959040">willing</span> <span
  m="1959340">to</span> <span m="1959430">decide</span> <span
  m="1959880">how</span> <span m="1960150">many</span> <span
  m="1960420">false</span> <span m="1960720">positives</span> <span
  m="1961230">or</span> <span m="1961290">false</span> <span
  m="1961560">negatives</span> <span m="1962320">do</span> <span
  m="1962430">I</span> <span m="1962520">want</span> <span m="1962700">to</span>
  <span m="1962760">tolerate.</span></p><p><span m="1965370">Once</span> <span
  m="1965640">I've</span> <span m="1965740">figured</span> <span
  m="1966120">out</span> <span m="1966210">what</span> <span
  m="1966390">features</span> <span m="1966870">to</span> <span
  m="1967020">use,</span> <span m="1969230">which</span> <span
  m="1969350">is</span> <span m="1969470">good,</span> <span
  m="1969980">then</span> <span m="1970130">I</span> <span
  m="1970220">have</span> <span m="1970310">to</span> <span
  m="1970400">decide</span> <span m="1970850">about</span> <span
  m="1971060">distance.</span> <span m="1972210">How</span> <span
  m="1972230">do</span> <span m="1972350">I</span> <span
  m="1972440">compare</span> <span m="1973040">two</span> <span
  m="1973220">feature</span> <span m="1973610">vectors?</span> <span
  m="1973960">I'm</span> <span m="1974030">going</span> <span
  m="1974110">to</span> <span m="1974200">say</span> <span
  m="1974370">vector</span> <span m="1974660">because</span> <span
  m="1974810">there</span> <span m="1974900">could be</span> <span
  m="1975020">multiple</span> <span m="1975440">dimensions</span> <span
  m="1975890">to</span> <span m="1976040">it.</span> <span
  m="1976640">How</span> <span m="1976790">do</span> <span m="1976940">I</span>
  <span m="1977000">decide</span> <span m="1977450">how</span> <span
  m="1977600">to</span> <span m="1977690">compare</span> <span
  m="1978080">them?</span> <span m="1978260">Because</span> <span
  m="1978560">I</span> <span m="1978650">want</span> <span m="1978860">to</span>
  <span m="1978950">use</span> <span m="1979250">the</span> <span
  m="1979370">distances</span> <span m="1980630">to</span> <span
  m="1980750">figure</span> <span m="1981020">out</span> <span
  m="1981140">either</span> <span m="1981350">how</span> <span
  m="1981470">to</span> <span m="1981560">group</span> <span
  m="1981860">things</span> <span m="1982100">together</span> <span
  m="1982520">or</span> <span m="1982670">how</span> <span m="1982820">to</span>
  <span m="1982940">find</span> <span m="1983210">a</span> <span
  m="1983270">dividing</span> <span m="1983750">line</span> <span
  m="1983960">that</span> <span m="1984080">separates</span> <span
  m="1984550">things</span> <span m="1984830">apart.</span></p><p><span
  m="1985940">So</span> <span m="1986150">one</span> <span m="1986300">of</span>
  <span m="1986360">the</span> <span m="1986450">things</span> <span
  m="1986690">I</span> <span m="1986750">have</span> <span m="1986840">to</span>
  <span m="1986930">decide</span> <span m="1987350">is</span> <span
  m="1987800">which</span> <span m="1988010">features.</span> <span
  m="1989470">I</span> <span m="1989560">also</span> <span
  m="1989830">have</span> <span m="1989920">to</span> <span
  m="1990010">decide</span> <span m="1990400">the</span> <span
  m="1990520">distance.</span> <span m="1990970">And</span> <span
  m="1991090">finally,</span> <span m="1991660">I</span> <span
  m="1991780">may</span> <span m="1991990">want</span> <span
  m="1992230">to</span> <span m="1992290">decide</span> <span
  m="1992710">how</span> <span m="1992920">to</span> <span
  m="1993070">weigh</span> <span m="1993910">relative</span> <span
  m="1994420">importance</span> <span m="1995110">of</span> <span
  m="1995260">different</span> <span m="1995680">dimensions</span> <span
  m="1996660">in</span> <span m="1996760">the</span> <span
  m="1996850">feature</span> <span m="1997180">vector.</span> <span
  m="1997990">Some</span> <span m="1998350">may</span> <span
  m="1998470">be</span> <span m="1998620">more</span> <span
  m="1998800">valuable</span> <span m="1999280">than</span> <span
  m="1999430">others</span> <span m="1999700">in</span> <span
  m="1999790">making</span> <span m="2000120">that</span> <span
  m="2000240">decision.</span> <span m="2001400">And</span> <span
  m="2001500">I</span> <span m="2001600">want</span> <span m="2001700">to</span>
  <span m="2001800">show</span> <span m="2001860">you</span> <span
  m="2001920">an</span> <span m="2001980">example</span> <span
  m="2002400">of</span> <span m="2002520">that.</span></p><p><span
  m="2004570">So</span> <span m="2004670">let's</span> <span
  m="2004710">go</span> <span m="2004830">back</span> <span
  m="2005010">to</span> <span m="2005100">my</span> <span
  m="2005310">animals.</span> <span m="2008000">I</span> <span
  m="2008060">started</span> <span m="2008450">off</span> <span
  m="2008660">with</span> <span m="2008810">a</span> <span
  m="2008870">feature</span> <span m="2009170">vector</span> <span
  m="2009470">that</span> <span m="2009620">actually</span> <span
  m="2009950">had</span> <span m="2010160">five</span> <span
  m="2010580">dimensions</span> <span m="2011090">to</span> <span
  m="2011270">it.</span> <span m="2011390">It</span> <span
  m="2011510">was</span> <span m="2012650">egg-laying,</span> <span
  m="2013700">cold</span> <span m="2014030">blooded,</span> <span
  m="2014775">has</span> <span m="2015040">scales,</span> <span
  m="2016305">I</span> <span m="2016780">forget</span> <span
  m="2017030">what</span> <span m="2017120">the</span> <span
  m="2017210">other</span> <span m="2017390">one</span> <span
  m="2017570">was,</span> <span m="2017750">and</span> <span
  m="2017810">number</span> <span m="2018140">of</span> <span
  m="2018230">legs.</span> <span m="2019700">So</span> <span
  m="2020150">one</span> <span m="2020330">of</span> <span
  m="2020390">the</span> <span m="2020480">ways</span> <span
  m="2020660">I</span> <span m="2020750">could</span> <span
  m="2020900">think</span> <span m="2021110">about</span> <span
  m="2021350">this</span> <span m="2021560">is</span> <span
  m="2021650">saying</span> <span m="2022160">I've</span> <span
  m="2022430">got</span> <span m="2022670">four</span> <span
  m="2023090">binary</span> <span m="2023600">features</span> <span
  m="2024830">and</span> <span m="2024950">one</span> <span
  m="2025820">integer</span> <span m="2026180">feature</span> <span
  m="2026780">associated</span> <span m="2027320">with</span> <span
  m="2027470">each</span> <span m="2027650">animal.</span> <span
  m="2028910">And</span> <span m="2029000">one</span> <span
  m="2029210">way</span> <span m="2029330">to</span> <span
  m="2029450">learn</span> <span m="2029720">to</span> <span
  m="2029810">separate</span> <span m="2030350">out</span> <span
  m="2030560">reptiles</span> <span m="2031050">from</span> <span
  m="2031180">non</span> <span m="2031460">reptiles</span> <span
  m="2032000">is</span> <span m="2032120">to</span> <span
  m="2032270">measure</span> <span m="2032660">the</span> <span
  m="2032780">distance</span> <span m="2033200">between</span> <span
  m="2035000">pairs</span> <span m="2035270">of</span> <span
  m="2035360">examples</span> <span m="2036680">and</span> <span
  m="2036770">use</span> <span m="2037010">that</span> <span
  m="2037220">distance</span> <span m="2037630">to</span> <span
  m="2037720">decide</span> <span m="2038030">what's</span> <span
  m="2038270">near</span> <span m="2038480">each</span> <span
  m="2038630">other</span> <span m="2038840">and</span> <span
  m="2038930">what's</span> <span m="2039170">not.</span></p><p><span
  m="2040260">And</span> <span m="2040360">as we've</span> <span
  m="2040460">said</span> <span m="2040640">before,</span> <span
  m="2040940">it</span> <span m="2041050">will</span> <span
  m="2041240">either</span> <span m="2041330">be</span> <span
  m="2041450">used</span> <span m="2041690">to</span> <span
  m="2041810">cluster</span> <span m="2042230">things</span> <span
  m="2042530">or</span> <span m="2042620">to</span> <span
  m="2042740">find</span> <span m="2043040">a</span> <span
  m="2043070">classifier</span> <span m="2043730">surface</span> <span
  m="2044080">that</span> <span m="2044210">separates</span> <span
  m="2044720">them.</span> <span m="2046620">So</span> <span
  m="2046670">here's</span> <span m="2046880">a</span> <span
  m="2046940">simple</span> <span m="2047270">way</span> <span
  m="2047420">to</span> <span m="2047540">do</span> <span m="2047690">it.</span>
  <span m="2049070">For</span> <span m="2049219">each</span> <span
  m="2049460">of</span> <span m="2049580">these</span> <span
  m="2049790">examples,</span> <span m="2050600">I'm</span> <span
  m="2050690">going</span> <span m="2050810">to just</span> <span
  m="2051040">let</span> <span m="2051230">true be</span> <span
  m="2051710">1,</span> <span m="2052159">false</span> <span
  m="2052540">be</span> <span m="2052670">0.</span> <span m="2053060">So</span>
  <span m="2053239">the</span> <span m="2053330">first</span> <span
  m="2053630">four</span> <span m="2053929">are</span> <span
  m="2054020">either</span> <span m="2054230">0s</span> <span
  m="2054590">or</span> <span m="2054679">1s.</span> <span
  m="2055310">And</span> <span m="2055400">the</span> <span
  m="2055489">last</span> <span m="2055790">one</span> <span
  m="2055900">is</span> <span m="2056060">the</span> <span
  m="2056150">number</span> <span m="2056420">of</span> <span
  m="2056540">legs.</span> <span m="2058070">And</span> <span
  m="2058190">now</span> <span m="2058400">I</span> <span
  m="2058460">could</span> <span m="2058580">say,</span> <span
  m="2058760">all</span> <span m="2058820">right.</span> <span
  m="2059000">How</span> <span m="2059120">do</span> <span m="2059239">I</span>
  <span m="2059300">measure</span> <span m="2059600">distances</span> <span
  m="2060170">between</span> <span m="2061370">animals</span> <span
  m="2062540">or</span> <span m="2062690">anything</span> <span
  m="2062989">else,</span> <span m="2063139">but</span> <span
  m="2063260">these</span> <span m="2063440">kinds</span> <span
  m="2063679">of</span> <span m="2063770">feature</span> <span
  m="2064100">vectors?</span></p><p><span m="2066070">Here,</span> <span
  m="2066400">we're</span> <span m="2066520">going</span> <span
  m="2066670">to</span> <span m="2066760">use</span> <span
  m="2066909">something</span> <span m="2067300">called</span> <span
  m="2067540">the</span> <span m="2067690">Minkowski</span> <span
  m="2068260">Metric</span> <span m="2068620">or</span> <span
  m="2068710">the</span> <span m="2068800">Minkowski</span> <span
  m="2069370">difference.</span> <span m="2070750">Given</span> <span
  m="2071170">two</span> <span m="2071469">vectors</span> <span
  m="2072310">and</span> <span m="2072429">a power,</span> <span
  m="2072909">p,</span> <span m="2074080">we</span> <span
  m="2074230">basically</span> <span m="2074860">take</span> <span
  m="2075130">the</span> <span m="2075280">absolute</span> <span
  m="2075760">value</span> <span m="2076300">of</span> <span
  m="2076510">the</span> <span m="2076630">difference</span> <span
  m="2077080">between</span> <span m="2077469">each</span> <span
  m="2077710">of</span> <span m="2077770">the</span> <span
  m="2077889">components</span> <span m="2078429">of</span> <span
  m="2078489">the</span> <span m="2078610">vector,</span> <span
  m="2079960">raise</span> <span m="2080290">it</span> <span
  m="2080380">to</span> <span m="2080500">the</span> <span
  m="2080620">p-th</span> <span m="2080889">power,</span> <span
  m="2082260">take</span> <span m="2082500">the</span> <span
  m="2082620">sum,</span> <span m="2083969">and</span> <span
  m="2084090">take</span> <span m="2084420">the</span> <span
  m="2084570">p-th</span> <span m="2084949">route</span> <span
  m="2085230">of</span> <span m="2085320">that.</span> <span m="2086840">So
  let's</span> <span m="2087270">do the</span> <span m="2087409">two</span>
  <span m="2087620">obvious</span> <span m="2087920">examples.</span> <span
  m="2088460">If</span> <span m="2088610">p</span> <span m="2088850">is</span>
  <span m="2089000">equal</span> <span m="2089270">to</span> <span
  m="2089420">1,</span> <span m="2089630">I</span> <span m="2089719">just</span>
  <span m="2089929">measure</span> <span m="2090230">the</span> <span
  m="2090409">absolute</span> <span m="2091010">distance</span> <span
  m="2091699">between</span> <span m="2092780">each</span> <span
  m="2092960">component,</span> <span m="2093800">add</span> <span
  m="2094010">them</span> <span m="2094190">up,</span> <span
  m="2095090">and</span> <span m="2095210">that's</span> <span
  m="2095420">my</span> <span m="2095540">distance.</span> <span
  m="2096469">It's</span> <span m="2096560">called</span> <span
  m="2096770">the</span> <span m="2096860">Manhattan</span> <span
  m="2097370">metric.</span></p><p><span m="2098950">The</span> <span
  m="2099040">one</span> <span m="2099250">you've</span> <span
  m="2099370">seen</span> <span m="2099610">more,</span> <span
  m="2099850">the</span> <span m="2099950">one</span> <span
  m="2100060">we</span> <span m="2100120">saw</span> <span
  m="2100300">last</span> <span m="2100600">time,</span> <span
  m="2100840">if</span> <span m="2100960">p is</span> <span
  m="2101260">equal</span> <span m="2101500">to</span> <span
  m="2101650">2,</span> <span m="2102460">this</span> <span
  m="2102730">is</span> <span m="2102880">Euclidean</span> <span
  m="2103420">distance,</span> <span m="2103780">right?</span> <span
  m="2103900">It's</span> <span m="2104090">the</span> <span
  m="2104200">sum</span> <span m="2104470">of</span> <span
  m="2104560">the</span> <span m="2104680">squares</span> <span
  m="2105220">of</span> <span m="2105310">the</span> <span
  m="2105430">differences</span> <span m="2105990">of</span> <span
  m="2106060">the</span> <span m="2106180">components.</span> <span
  m="2107050">Take</span> <span m="2107230">the</span> <span
  m="2107320">square</span> <span m="2107590">root.</span> <span
  m="2108400">Take</span> <span m="2108550">the</span> <span
  m="2108610">square</span> <span m="2108820">root</span> <span
  m="2108940">because</span> <span m="2109180">it</span> <span
  m="2109270">makes</span> <span m="2109690">it</span> <span
  m="2109810">have</span> <span m="2109990">certain</span> <span
  m="2110230">properties</span> <span m="2110680">of</span> <span
  m="2110770">a</span> <span m="2110830">distance.</span> <span
  m="2112420">That's</span> <span m="2113830">the</span> <span
  m="2113980">Euclidean</span> <span m="2114490">distance.</span> <span
  m="2116540">So</span> <span m="2116620">now</span> <span m="2117380">if</span>
  <span m="2117550">I want</span> <span m="2117670">to</span> <span
  m="2117730">measure</span> <span m="2118000">difference</span> <span
  m="2118390">between</span> <span m="2118690">these</span> <span
  m="2118900">two,</span> <span m="2120240">here's</span> <span
  m="2120510">the</span> <span m="2120630">question.</span> <span
  m="2122750">Is</span> <span m="2122930">this</span> <span
  m="2123140">circle</span> <span m="2123590">closer</span> <span
  m="2124010">to</span> <span m="2124130">the</span> <span
  m="2124220">star</span> <span m="2125600">or</span> <span
  m="2125690">closer</span> <span m="2126050">to</span> <span
  m="2126140">the</span> <span m="2126230">cross?</span></p><p><span
  m="2127780">Unfortunately,</span> <span m="2128260">I</span> <span
  m="2128320">put</span> <span m="2128500">the</span> <span
  m="2128620">answer</span> <span m="2128920">up</span> <span
  m="2129070">here.</span> <span m="2130310">But</span> <span
  m="2130580">it</span> <span m="2130670">differs,</span> <span
  m="2131210">depending</span> <span m="2131690">on</span> <span
  m="2131840">the</span> <span m="2131930">metric</span> <span
  m="2132290">I</span> <span m="2132380">use.</span> <span
  m="2133580">Right?</span> <span m="2133760">Euclidean</span> <span
  m="2134330">distance,</span> <span m="2134750">well,</span> <span
  m="2134990">that's</span> <span m="2135670">square</span> <span
  m="2135980">root</span> <span m="2136190">of</span> <span m="2136250">2</span>
  <span m="2136490">times</span> <span m="2136790">2,</span> <span
  m="2137000">so</span> <span m="2137120">it's</span> <span
  m="2137240">about</span> <span m="2137480">2.8.</span> <span
  m="2138770">And</span> <span m="2138860">that's</span> <span
  m="2139130">three.</span> <span m="2139400">So</span> <span
  m="2139580">in</span> <span m="2139700">terms</span> <span
  m="2140030">of</span> <span m="2140120">just</span> <span
  m="2140450">standard</span> <span m="2141020">distance</span> <span
  m="2141440">in</span> <span m="2141560">the</span> <span
  m="2141650">plane,</span> <span m="2142580">we</span> <span
  m="2142730">would</span> <span m="2142820">say</span> <span
  m="2143030">that</span> <span m="2143210">these</span> <span
  m="2143450">two</span> <span m="2143630">are</span> <span
  m="2143690">closer</span> <span m="2144500">than</span> <span
  m="2144650">those</span> <span m="2144890">two</span> <span
  m="2145070">are.</span> <span m="2146780">Manhattan</span> <span
  m="2147260">distance,</span> <span m="2147680">why</span> <span
  m="2147860">is</span> <span m="2147980">it</span> <span
  m="2148040">called</span> <span m="2148280">that?</span> <span
  m="2148430">Because</span> <span m="2148610">you</span> <span
  m="2148700">can</span> <span m="2148850">only</span> <span
  m="2149120">walk</span> <span m="2149420">along</span> <span
  m="2149810">the</span> <span m="2149930">avenues</span> <span
  m="2150710">and</span> <span m="2150860">the</span> <span
  m="2150950">streets.</span> <span m="2152040">Manhattan</span> <span
  m="2152480">distance</span> <span m="2152870">would</span> <span
  m="2152990">basically</span> <span m="2153500">say</span> <span
  m="2153770">this</span> <span m="2153980">is</span> <span
  m="2154130">one,</span> <span m="2154460">two,</span> <span
  m="2154820">three,</span> <span m="2155150">four</span> <span
  m="2155570">units</span> <span m="2155900">away.</span> <span
  m="2156500">This</span> <span m="2156680">is</span> <span
  m="2156830">one,</span> <span m="2157190">two,</span> <span
  m="2157730">three</span> <span m="2158060">units</span> <span
  m="2158440">away.</span></p><p><span m="2159170">And</span> <span
  m="2159380">under</span> <span m="2159560">Manhattan</span> <span
  m="2160100">distance,</span> <span m="2161060">this</span> <span
  m="2161420">is</span> <span m="2161540">closer,</span> <span
  m="2162020">this</span> <span m="2162230">pairing</span> <span
  m="2162590">is</span> <span m="2162710">closer</span> <span
  m="2163580">than</span> <span m="2163700">that</span> <span
  m="2163880">pairing</span> <span m="2164240">is.</span> <span
  m="2165960">Now</span> <span m="2166080">you're</span> <span
  m="2166230">used</span> <span m="2166470">to</span> <span
  m="2166560">thinking</span> <span m="2166920">Euclidean.</span> <span
  m="2167430">We're</span> <span m="2167520">going</span> <span
  m="2167640">to</span> <span m="2167700">use</span> <span
  m="2167970">that.</span> <span m="2168220">But</span> <span
  m="2168300">this</span> <span m="2168540">is</span> <span
  m="2168660">going</span> <span m="2168810">to</span> <span
  m="2168900">be</span> <span m="2169020">important</span> <span
  m="2169440">when</span> <span m="2169590">we</span> <span
  m="2169680">think</span> <span m="2170010">about</span> <span
  m="2170220">how</span> <span m="2170520">are</span> <span
  m="2170610">we</span> <span m="2170760">comparing</span> <span
  m="2171300">distances</span> <span m="2172080">between</span> <span
  m="2172440">these</span> <span m="2172620">different</span> <span
  m="2172860">pieces.</span> <span m="2175360">So</span> <span
  m="2175440">typically,</span> <span m="2175960">we'll</span> <span
  m="2176130">use</span> <span m="2176610">Euclidean.</span> <span
  m="2177270">We're</span> <span m="2177360">going</span> <span
  m="2177480">to</span> <span m="2177540">see</span> <span
  m="2177720">Manhattan</span> <span m="2178170">actually</span> <span
  m="2178470">has</span> <span m="2178620">some</span> <span
  m="2178800">value.</span> <span m="2179120">So</span> <span
  m="2179220">if</span> <span m="2179320">I</span> <span m="2179420">go</span>
  <span m="2179520">back</span> <span m="2179670">to</span> <span
  m="2179790">my</span> <span m="2179940">three</span> <span
  m="2180150">examples--</span> <span m="2180630">boy,</span> <span
  m="2180780">that's</span> <span m="2180960">a</span> <span
  m="2181020">gross</span> <span m="2181290">slide,</span> <span
  m="2181680">isn't</span> <span m="2181860">it?</span> <span
  m="2181950">But</span> <span m="2182040">there</span> <span
  m="2182190">we</span> <span m="2182280">go--</span> <span
  m="2182790">rattlesnake,</span> <span m="2183360">boa</span> <span
  m="2183630">constrictor,</span> <span m="2184170">and</span> <span
  m="2184320">dart</span> <span m="2184620">frog.</span> <span
  m="2185570">There</span> <span m="2185770">is</span> <span
  m="2185880">the</span> <span m="2185970">representation.</span></p><p><span
  m="2186870">I</span> <span m="2187020">can</span> <span
  m="2187230">ask,</span> <span m="2187590">what's</span> <span
  m="2187890">the</span> <span m="2188010">distance</span> <span
  m="2188430">between</span> <span m="2188850">them?</span> <span
  m="2190020">In</span> <span m="2190170">the</span> <span
  m="2190230">handout</span> <span m="2190560">for</span> <span
  m="2190710">today,</span> <span m="2190950">we've</span> <span
  m="2191070">given</span> <span m="2191280">you</span> <span
  m="2191340">a</span> <span m="2191370">little</span> <span
  m="2191580">piece</span> <span m="2191790">of</span> <span
  m="2191850">code</span> <span m="2192120">that</span> <span
  m="2192240">would</span> <span m="2192360">do</span> <span
  m="2192540">that.</span> <span m="2192850">And if</span> <span
  m="2193110">I</span> <span m="2193260">actually</span> <span
  m="2193680">run</span> <span m="2193950">through</span> <span
  m="2194280">it,</span> <span m="2194610">I</span> <span
  m="2194820">get,</span> <span m="2196050">actually,</span> <span
  m="2196320">a</span> <span m="2196380">nice</span> <span
  m="2196620">little</span> <span m="2196980">result.</span> <span
  m="2198270">Here</span> <span m="2198510">are</span> <span
  m="2198630">the</span> <span m="2198750">distances</span> <span
  m="2199380">between</span> <span m="2199920">those</span> <span
  m="2200160">vectors</span> <span m="2200610">using</span> <span
  m="2201120">Euclidean</span> <span m="2201990">metric.</span> <span
  m="2203720">I'm</span> <span m="2203820">going</span> <span
  m="2203940">to</span> <span m="2204000">come</span> <span
  m="2204090">back</span> <span m="2204280">to them.</span> <span
  m="2204490">But</span> <span m="2204540">you</span> <span
  m="2204630">can</span> <span m="2204780">see</span> <span
  m="2205800">the</span> <span m="2205920">two</span> <span
  m="2206160">snakes,</span> <span m="2207600">nicely,</span> <span
  m="2208050">are</span> <span m="2208350">reasonably</span> <span
  m="2208830">close</span> <span m="2209100">to</span> <span
  m="2209220">each</span> <span m="2209400">other.</span> <span
  m="2210030">Whereas,</span> <span m="2210360">the</span> <span
  m="2210480">dart</span> <span m="2210840">frog</span> <span
  m="2211470">is</span> <span m="2211620">a</span> <span m="2211680">fair</span>
  <span m="2211920">distance</span> <span m="2212370">away</span> <span
  m="2212610">from</span> <span m="2212790">that.</span> <span
  m="2214220">Nice,</span> <span m="2214490">right?</span> <span
  m="2214910">That's</span> <span m="2215090">a</span> <span
  m="2215120">nice</span> <span m="2215330">separation</span> <span
  m="2215870">that</span> <span m="2216000">says</span> <span
  m="2216590">there's</span> <span m="2216740">a</span> <span
  m="2216800">difference</span> <span m="2217130">between</span> <span
  m="2217460">these</span> <span m="2217640">two.</span></p><p><span
  m="2218480">OK.</span> <span m="2220220">Now</span> <span m="2220460">I</span>
  <span m="2220550">throw</span> <span m="2220820">in</span> <span
  m="2220940">the</span> <span m="2221060">alligator.</span> <span
  m="2223160">Sounds</span> <span m="2223400">like</span> <span
  m="2223520">a</span> <span m="2223580">Dungeons</span> <span
  m="2224000">&amp;</span> <span m="2224090">Dragons</span> <span
  m="2224540">game.</span> <span m="2224810">I</span> <span
  m="2224870">throw</span> <span m="2225140">in</span> <span
  m="2225260">the</span> <span m="2225380">alligator,</span> <span
  m="2226040">and</span> <span m="2226160">I</span> <span
  m="2226220">want</span> <span m="2226430">to</span> <span
  m="2226490">do</span> <span m="2226580">the</span> <span
  m="2226700">same</span> <span m="2226940">comparison.</span> <span
  m="2229480">And</span> <span m="2229610">I</span> <span
  m="2229700">don't</span> <span m="2229910">get</span> <span
  m="2230150">nearly</span> <span m="2230600">as</span> <span
  m="2230720">nice</span> <span m="2231020">a</span> <span
  m="2231110">result.</span> <span m="2232890">Because</span> <span
  m="2233250">now</span> <span m="2233760">it</span> <span
  m="2233910">says,</span> <span m="2234720">as</span> <span
  m="2235050">before,</span> <span m="2235980">the</span> <span
  m="2236100">two</span> <span m="2236310">snakes</span> <span
  m="2237270">are</span> <span m="2237360">close</span> <span
  m="2237660">to</span> <span m="2237780">each</span> <span
  m="2237960">other.</span> <span m="2239320">But</span> <span
  m="2239390">it</span> <span m="2239450">says</span> <span
  m="2239840">that</span> <span m="2239960">the</span> <span
  m="2240080">dart</span> <span m="2240470">frog</span> <span
  m="2240830">and</span> <span m="2240920">the</span> <span
  m="2241070">alligator</span> <span m="2241700">are</span> <span
  m="2241850">much</span> <span m="2242180">closer,</span> <span
  m="2242870">under</span> <span m="2243200">this</span> <span
  m="2243500">measurement,</span> <span m="2244640">than</span> <span
  m="2244940">either</span> <span m="2245270">of</span> <span
  m="2245330">them</span> <span m="2245540">is</span> <span
  m="2246320">to</span> <span m="2246440">the</span> <span
  m="2246620">other.</span> <span m="2247185">And</span> <span m="2247570">to
  remind</span> <span m="2248330">you,</span> <span m="2248430">right,</span>
  <span m="2248690">the</span> <span m="2248840">alligator</span> <span
  m="2249770">and</span> <span m="2249920">the</span> <span
  m="2250040">two</span> <span m="2250220">snakes</span> <span
  m="2250700">I</span> <span m="2250790">would</span> <span
  m="2250910">like</span> <span m="2251120">to</span> <span
  m="2251240">be</span> <span m="2251330">close</span> <span
  m="2251690">to</span> <span m="2251810">one</span> <span
  m="2251990">another</span> <span m="2252320">and</span> <span
  m="2252650">a</span> <span m="2252770">distance</span> <span
  m="2253250">away</span> <span m="2253970">from</span> <span
  m="2254180">the</span> <span m="2254270">frog.</span> <span
  m="2254640">Because</span> <span m="2254900">I'm</span> <span
  m="2254990">trying</span> <span m="2255200">to</span> <span
  m="2255290">classify</span> <span m="2255830">reptiles</span> <span
  m="2256310">versus</span> <span m="2256670">not.</span></p><p><span
  m="2258470">So</span> <span m="2258550">what</span> <span
  m="2258700">happened</span> <span m="2259060">here?</span> <span
  m="2261250">Well,</span> <span m="2261400">this</span> <span
  m="2261580">is</span> <span m="2261700">a</span> <span
  m="2261760">place</span> <span m="2262120">where</span> <span
  m="2262300">the</span> <span m="2262480">feature</span> <span
  m="2262870">engineering</span> <span m="2263140">is</span> <span
  m="2263410">going</span> <span m="2263560">to</span> <span
  m="2263650">be</span> <span m="2263740">important.</span> <span
  m="2264640">Because</span> <span m="2264910">in</span> <span
  m="2265030">fact,</span> <span m="2265420">the</span> <span
  m="2265540">alligator</span> <span m="2266200">differs</span> <span
  m="2266740">from</span> <span m="2266920">the</span> <span
  m="2267040">frog</span> <span m="2267820">in</span> <span
  m="2267970">three</span> <span m="2268660">features.</span> <span
  m="2271810">And</span> <span m="2271990">only</span> <span
  m="2272290">in</span> <span m="2272380">two</span> <span
  m="2272620">features</span> <span m="2273010">from,</span> <span
  m="2273220">say,</span> <span m="2273430">the</span> <span
  m="2273550">boa</span> <span m="2273790">constrictor.</span> <span
  m="2275300">But</span> <span m="2275450">one</span> <span
  m="2275690">of</span> <span m="2275750">those</span> <span
  m="2275960">features</span> <span m="2276410">is</span> <span
  m="2276560">the</span> <span m="2276680">number</span> <span
  m="2277010">of</span> <span m="2277100">legs.</span> <span
  m="2277590">And</span> <span m="2277640">there,</span> <span
  m="2277970">while</span> <span m="2278240">on</span> <span
  m="2278330">the</span> <span m="2278450">binary</span> <span
  m="2279020">axes,</span> <span m="2279650">the</span> <span
  m="2279770">difference is</span> <span m="2280250">between</span> <span
  m="2280540">a</span> <span m="2280610">0</span> <span m="2280940">and</span>
  <span m="2281030">1,</span> <span m="2281540">here</span> <span m="2281990">it
  can be</span> <span m="2282080">between</span> <span m="2283730">0</span>
  <span m="2284270">and</span> <span m="2284420">4.</span> <span
  m="2285620">So</span> <span m="2285890">that</span> <span
  m="2286250">is</span> <span m="2286460">weighing</span> <span
  m="2287000">the</span> <span m="2287120">distance</span> <span
  m="2287570">a</span> <span m="2287660">lot</span> <span
  m="2287990">more</span> <span m="2288290">than</span> <span
  m="2288440">we</span> <span m="2288590">would</span> <span
  m="2288740">like.</span> <span m="2289100">The</span> <span
  m="2289460">legs</span> <span m="2289880">dimension</span> <span
  m="2290450">is</span> <span m="2290630">too</span> <span
  m="2290840">large,</span> <span m="2291440">if</span> <span
  m="2291560">you</span> <span m="2291650">like.</span></p><p><span
  m="2293520">How</span> <span m="2293670">would</span> <span
  m="2293760">I</span> <span m="2293850">fix</span> <span
  m="2294180">this?</span> <span m="2295416">This</span> <span
  m="2295830">is</span> <span m="2295950">actually,</span> <span
  m="2296370">I</span> <span m="2296520">would</span> <span
  m="2296700">argue,</span> <span m="2297060">a</span> <span
  m="2297150">natural</span> <span m="2297660">place</span> <span
  m="2298020">to</span> <span m="2298170">use</span> <span
  m="2298500">Manhattan</span> <span m="2299130">distance.</span> <span
  m="2300690">Why</span> <span m="2301020">should</span> <span
  m="2301290">I</span> <span m="2301440">think</span> <span
  m="2301800">that</span> <span m="2301950">the</span> <span
  m="2302070">difference</span> <span m="2302520">in</span> <span
  m="2302640">the</span> <span m="2302730">number</span> <span
  m="2303090">of</span> <span m="2303210">legs</span> <span
  m="2304690">or</span> <span m="2304810">the</span> <span
  m="2304930">number</span> <span m="2305260">of</span> <span
  m="2305350">legs</span> <span m="2305650">difference</span> <span
  m="2306160">is</span> <span m="2306340">more</span> <span
  m="2306610">important</span> <span m="2307630">than</span> <span
  m="2307750">whether</span> <span m="2307990">it</span> <span
  m="2308080">has</span> <span m="2308230">scales</span> <span
  m="2308680">or</span> <span m="2308770">not?</span> <span
  m="2310400">Why</span> <span m="2310640">should</span> <span
  m="2310820">I</span> <span m="2310940">think</span> <span
  m="2311210">that</span> <span m="2311360">measuring</span> <span
  m="2311840">that</span> <span m="2311990">distance</span> <span
  m="2312620">Euclidean-wise</span> <span m="2313640">makes</span> <span
  m="2313910">sense?</span> <span m="2314300">They</span> <span
  m="2314450">are</span> <span m="2314570">really</span> <span
  m="2314960">completely</span> <span m="2315620">different</span> <span
  m="2316010">measurements.</span> <span m="2316880">And</span> <span
  m="2316970">in</span> <span m="2317060">fact,</span> <span
  m="2317490">I'm</span> <span m="2317590">not</span> <span
  m="2317690">going</span> <span m="2317750">to</span> <span m="2317810">do
  it,</span> <span m="2318090">but</span> <span m="2318110">if</span> <span
  m="2318200">I</span> <span m="2318280">ran</span> <span
  m="2318620">Manhattan</span> <span m="2319160">metric</span> <span
  m="2319550">on</span> <span m="2319700">this,</span> <span
  m="2319880">it</span> <span m="2320000">would</span> <span
  m="2320180">get</span> <span m="2320780">the</span> <span
  m="2320900">alligator</span> <span m="2321380">much</span> <span
  m="2321710">closer</span> <span m="2322520">to</span> <span
  m="2322640">the</span> <span m="2322760">snakes,</span> <span
  m="2323160">exactly</span> <span m="2323720">because</span> <span
  m="2324140">it</span> <span m="2324230">differs</span> <span
  m="2324650">only</span> <span m="2324890">in</span> <span
  m="2325020">two</span> <span m="2325220">features,</span> <span
  m="2326090">not</span> <span m="2326300">three.</span></p><p><span
  m="2328160">The</span> <span m="2328250">other</span> <span
  m="2328430">way</span> <span m="2328550">I</span> <span
  m="2328640">could</span> <span m="2328790">fix</span> <span
  m="2329090">it</span> <span m="2329750">would</span> <span
  m="2329900">be</span> <span m="2330050">to</span> <span m="2330140">say</span>
  <span m="2330410">I'm</span> <span m="2330650">letting</span> <span
  m="2331010">too</span> <span m="2331280">much</span> <span
  m="2331520">weight</span> <span m="2331790">be</span> <span
  m="2331880">associated</span> <span m="2332510">with</span> <span
  m="2332660">the</span> <span m="2332780">difference</span> <span
  m="2333170">in</span> <span m="2333260">the</span> <span
  m="2333350">number</span> <span m="2333590">of</span> <span
  m="2333710">legs.</span> <span m="2334430">So</span> <span
  m="2334580">let's</span> <span m="2334820">just</span> <span
  m="2335000">make</span> <span m="2335270">it</span> <span m="2335360">a</span>
  <span m="2335420">binary</span> <span m="2335900">feature.</span> <span
  m="2336800">Either</span> <span m="2337050">it</span> <span
  m="2337110">doesn't</span> <span m="2337490">have</span> <span
  m="2337700">legs</span> <span m="2338420">or</span> <span
  m="2338540">it</span> <span m="2338600">does</span> <span
  m="2338870">have</span> <span m="2339080">legs.</span> <span
  m="2340310">Run</span> <span m="2340550">the</span> <span
  m="2340640">same</span> <span m="2340880">classification.</span> <span
  m="2343040">And</span> <span m="2343160">now</span> <span
  m="2343520">you</span> <span m="2343700">see</span> <span
  m="2344990">the</span> <span m="2345110">snakes</span> <span
  m="2346100">and</span> <span m="2346220">the</span> <span
  m="2346340">alligator</span> <span m="2347450">are</span> <span
  m="2347570">all</span> <span m="2347720">close</span> <span
  m="2348050">to</span> <span m="2348200">each</span> <span
  m="2348350">other.</span> <span m="2349510">Whereas</span> <span
  m="2349990">the</span> <span m="2350110">dart</span> <span
  m="2350410">frog,</span> <span m="2351310">not</span> <span
  m="2351580">as</span> <span m="2351910">far</span> <span
  m="2352180">away</span> <span m="2352450">as</span> <span
  m="2352620">it</span> <span m="2352680">was</span> <span
  m="2352870">before,</span> <span m="2353290">but</span> <span
  m="2353410">there's</span> <span m="2353590">a</span> <span
  m="2353650">pretty</span> <span m="2353950">natural</span> <span
  m="2354370">separation,</span> <span m="2354970">especially</span> <span
  m="2355480">using</span> <span m="2355780">that</span> <span
  m="2355960">number</span> <span m="2356230">between</span> <span
  m="2356720">them.</span></p><p><span m="2358450">What's</span> <span
  m="2358660">my</span> <span m="2358840">point?</span> <span
  m="2360180">Choice</span> <span m="2360600">of</span> <span
  m="2360690">features</span> <span m="2361410">matters.</span> <span
  m="2362610">Throwing</span> <span m="2362940">too</span> <span
  m="2363120">many</span> <span m="2363330">features</span> <span
  m="2363780">in</span> <span m="2363930">may,</span> <span
  m="2364230">in</span> <span m="2364350">fact,</span> <span
  m="2364710">give</span> <span m="2364950">us</span> <span
  m="2365790">some</span> <span m="2366000">overfitting.</span> <span
  m="2367450">And</span> <span m="2367620">in</span> <span
  m="2367680">particular,</span> <span m="2368250">deciding</span> <span
  m="2368760">the</span> <span m="2368880">weights</span> <span
  m="2369300">that</span> <span m="2369450">I</span> <span
  m="2369600">want</span> <span m="2369930">on</span> <span
  m="2370080">those</span> <span m="2370290">features</span> <span
  m="2371250">has</span> <span m="2371430">a</span> <span
  m="2371490">real</span> <span m="2371730">impact.</span> <span
  m="2372090">And</span> <span m="2372210">you,</span> <span
  m="2372420">as</span> <span m="2372600">a</span> <span
  m="2372660">designer</span> <span m="2373140">or</span> <span
  m="2373230">a</span> <span m="2373290">programmer,</span> <span
  m="2373830">have</span> <span m="2374010">a</span> <span
  m="2374070">lot</span> <span m="2374280">of</span> <span
  m="2374400">influence</span> <span m="2374820">in</span> <span
  m="2374910">how</span> <span m="2375060">you</span> <span
  m="2375180">think</span> <span m="2375420">about</span> <span
  m="2375630">using</span> <span m="2375990">those.</span> <span
  m="2377340">So</span> <span m="2377490">feature</span> <span
  m="2377820">engineering</span> <span m="2378300">really</span> <span
  m="2378570">matters.</span> <span m="2378930">How</span> <span
  m="2379080">you</span> <span m="2379250">pick</span> <span
  m="2379470">the</span> <span m="2379590">features,</span> <span
  m="2380080">what</span> <span m="2380190">you</span> <span
  m="2380340">use</span> <span m="2380610">is</span> <span
  m="2380700">going</span> <span m="2380850">to</span> <span
  m="2380940">be</span> <span m="2381030">important.</span> <span
  m="2383580">OK.</span></p><p><span m="2384880">The</span> <span
  m="2384970">last</span> <span m="2385300">piece</span> <span
  m="2385570">of</span> <span m="2385630">this</span> <span
  m="2385870">then</span> <span m="2386080">is</span> <span
  m="2387620">we're</span> <span m="2387740">going</span> <span
  m="2387860">to</span> <span m="2387920">look</span> <span
  m="2388100">at</span> <span m="2388190">some</span> <span
  m="2388340">examples</span> <span m="2389600">where</span> <span
  m="2389720">we</span> <span m="2389810">give</span> <span
  m="2389960">you</span> <span m="2390050">data,</span> <span
  m="2391030">got</span> <span m="2391370">features</span> <span
  m="2391760">associated</span> <span m="2392300">with</span> <span
  m="2392480">them.</span> <span m="2393530">We're</span> <span
  m="2393650">going</span> <span m="2393770">to,</span> <span
  m="2393830">in</span> <span m="2393980">some</span> <span
  m="2394220">cases</span> <span m="2394550">have</span> <span
  m="2394730">them</span> <span m="2394850">labeled,</span> <span
  m="2395180">in</span> <span m="2395270">other</span> <span
  m="2395480">cases</span> <span m="2395970">not.</span> <span
  m="2396120">And</span> <span m="2396250">we</span> <span
  m="2396380">know</span> <span m="2396650">how</span> <span m="2397010">now
  to</span> <span m="2397130">think</span> <span m="2397370">about</span> <span
  m="2397580">how</span> <span m="2397760">do</span> <span m="2397850">we</span>
  <span m="2397970">measure</span> <span m="2398330">distances</span> <span
  m="2398840">between</span> <span m="2399140">them.</span> <span
  m="2399230">John.</span></p><p><span m="2400640">JOHN GUTTAG:</span> <span
  m="2400796">You</span> <span m="2400952">probably</span> <span
  m="2401110">didn't</span> <span m="2401580">intend</span> <span m="2402050">to
  say</span> <span m="2402520">weights</span> <span m="2402990">of
  features.</span> <span m="2403460">You</span> <span m="2403930">intended to
  say</span> <span m="2404400">how they're</span> <span
  m="2404620">scaled.</span></p><p><span m="2404780">ERIC GRIMSON:</span> <span
  m="2404855">Sorry.</span> <span m="2404990">The</span> <span
  m="2405080">scales</span> <span m="2405500">and</span> <span
  m="2405560">not</span> <span m="2405770">the--</span> <span
  m="2405920">thank</span> <span m="2406160">you,</span> <span
  m="2406250">John.</span> <span m="2406530">No, I</span> <span
  m="2406670">did.</span> <span m="2406920">I</span> <span
  m="2407180">take</span> <span m="2407420">that</span> <span
  m="2407540">back.</span> <span m="2407850">I</span> <span
  m="2407950">did</span> <span m="2408050">not</span> <span
  m="2408140">mean</span> <span m="2408320">to</span> <span
  m="2408440">say</span> <span m="2408650">weights</span> <span
  m="2408980">of</span> <span m="2409040">features.</span> <span
  m="2409340">I</span> <span m="2409400">meant</span> <span
  m="2409580">to</span> <span m="2409640">say</span> <span
  m="2409820">the</span> <span m="2409940">scale</span> <span
  m="2410780">of</span> <span m="2411050">the</span> <span
  m="2411170">dimension</span> <span m="2411650">is</span> <span
  m="2411800">going</span> <span m="2411950">to</span> <span
  m="2412040">be</span> <span m="2412130">important here.</span> <span
  m="2412550">Thank</span> <span m="2412790">you,</span> <span
  m="2412880">for</span> <span m="2413630">the</span> <span
  m="2413930">amplification</span> <span m="2414770">and</span> <span
  m="2414860">correction.</span> <span m="2415370">You're</span> <span
  m="2415520">absolutely</span> <span m="2415970">right.</span></p><p><span
  m="2416210">JOHN GUTTAG:</span> <span m="2416678">Weights,</span> <span
  m="2417146">we use</span> <span m="2417614">in a different way,</span> <span
  m="2418082">as we'll see</span> <span m="2418550">next
  time.</span></p><p><span m="2419020">ERIC GRIMSON:</span> <span
  m="2419095">And</span> <span m="2419170">we're</span> <span
  m="2419260">going</span> <span m="2419380">to</span> <span
  m="2419440">see</span> <span m="2419590">next</span> <span
  m="2419830">time</span> <span m="2420060">why we're</span> <span
  m="2420160">going</span> <span m="2420310">to</span> <span
  m="2420370">use</span> <span m="2420550">weights</span> <span
  m="2420880">in</span> <span m="2420940">different</span> <span
  m="2421240">ways.</span> <span m="2421450">So</span> <span
  m="2421570">rephrase</span> <span m="2422080">it.</span> <span
  m="2422470">Block</span> <span m="2422770">that</span> <span
  m="2422920">out</span> <span m="2423040">of</span> <span
  m="2423100">your</span> <span m="2423190">mind.</span> <span
  m="2423570">We're</span> <span m="2423670">going to</span> <span
  m="2423730">talk</span> <span m="2423970">about</span> <span
  m="2424150">scales</span> <span m="2424930">and</span> <span
  m="2425050">the</span> <span m="2425140">scale</span> <span
  m="2425470">on</span> <span m="2425560">the</span> <span
  m="2425680">axes</span> <span m="2426070">as</span> <span
  m="2426190">being</span> <span m="2426430">important</span> <span
  m="2426910">here.</span> <span m="2428050">And</span> <span
  m="2428140">we</span> <span m="2428260">already</span> <span
  m="2428500">said</span> <span m="2428710">we're</span> <span
  m="2428770">going</span> <span m="2428890">to</span> <span
  m="2428950">look</span> <span m="2429160">at</span> <span
  m="2429250">two</span> <span m="2429520">different</span> <span
  m="2429940">kinds</span> <span m="2430690">of</span> <span
  m="2430840">learning,</span> <span m="2431740">labeled</span> <span
  m="2432190">and</span> <span m="2432310">unlabeled,</span> <span
  m="2432910">clustering</span> <span m="2433480">and</span> <span
  m="2433570">classifying.</span> <span m="2434920">And</span> <span
  m="2435010">I</span> <span m="2435100">want</span> <span m="2435310">to</span>
  <span m="2435370">just</span> <span m="2435580">finish</span> <span
  m="2435940">up</span> <span m="2436150">by</span> <span
  m="2436390">showing</span> <span m="2436840">you</span> <span
  m="2437530">two</span> <span m="2437710">examples</span> <span
  m="2438220">of</span> <span m="2438310">that.</span> <span
  m="2438940">How</span> <span m="2439120">we</span> <span
  m="2439300">would</span> <span m="2439450">think</span> <span
  m="2439750">about</span> <span m="2439960">them</span> <span
  m="2440230">algorithmically,</span> <span m="2441310">and</span> <span
  m="2441400">we'll</span> <span m="2441520">look</span> <span
  m="2441700">at</span> <span m="2441790">them</span> <span
  m="2441940">in</span> <span m="2442000">more</span> <span
  m="2442150">detail</span> <span m="2442540">next</span> <span
  m="2442780">time.</span></p><p><span m="2444020">As</span> <span
  m="2444160">we</span> <span m="2444280">look</span> <span
  m="2444520">at</span> <span m="2444610">it,</span> <span m="2444700">I</span>
  <span m="2444790">want</span> <span m="2444970">to</span> <span
  m="2445030">remind</span> <span m="2445420">you</span> <span
  m="2445520">the</span> <span m="2445660">things</span> <span
  m="2446260">that</span> <span m="2446380">are</span> <span
  m="2446440">going</span> <span m="2446560">to</span> <span
  m="2446620">be</span> <span m="2446710">important</span> <span
  m="2447130">to</span> <span m="2447250">you.</span> <span
  m="2448530">How</span> <span m="2448680">do</span> <span m="2448800">I</span>
  <span m="2448890">measure</span> <span m="2449220">distance</span> <span
  m="2449670">between</span> <span m="2450060">examples?</span> <span
  m="2450930">What's</span> <span m="2451110">the</span> <span
  m="2451200">right</span> <span m="2451410">way</span> <span
  m="2451530">to</span> <span m="2451650">design</span> <span
  m="2452070">that?</span> <span m="2453060">What</span> <span
  m="2453300">is</span> <span m="2453510">the</span> <span
  m="2453630">right</span> <span m="2453900">set</span> <span
  m="2454110">of</span> <span m="2454200">features</span> <span
  m="2454650">to</span> <span m="2454800">use</span> <span m="2455510">in</span>
  <span m="2455640">that</span> <span m="2455790">vector?</span> <span
  m="2457060">And</span> <span m="2457110">then,</span> <span
  m="2457620">what</span> <span m="2458220">constraints</span> <span
  m="2458940">do</span> <span m="2459120">I</span> <span m="2459210">want</span>
  <span m="2459420">to</span> <span m="2459480">put</span> <span
  m="2459960">on</span> <span m="2460110">the</span> <span
  m="2460200">model?</span> <span m="2461520">In</span> <span
  m="2461580">the</span> <span m="2461670">case</span> <span
  m="2461910">of</span> <span m="2462030">unlabelled</span> <span
  m="2462540">data,</span> <span m="2462780">how</span> <span
  m="2463020">do</span> <span m="2463170">I</span> <span
  m="2463260">decide</span> <span m="2463800">how</span> <span
  m="2464040">many</span> <span m="2464310">clusters</span> <span
  m="2465060">I</span> <span m="2465150">want</span> <span m="2465360">to</span>
  <span m="2465420">have?</span> <span m="2466700">Because</span> <span
  m="2466890">I</span> <span m="2466950">can</span> <span
  m="2467040">give</span> <span m="2467220">you</span> <span
  m="2467280">a</span> <span m="2467340">really</span> <span
  m="2467730">easy</span> <span m="2468000">way</span> <span
  m="2468150">to</span> <span m="2468270">do</span> <span
  m="2468390">clustering.</span> <span m="2468840">If</span> <span
  m="2468930">I</span> <span m="2469110">give</span> <span
  m="2469290">you</span> <span m="2469380">100</span> <span
  m="2469710">examples,</span> <span m="2470160">I</span> <span
  m="2470220">say</span> <span m="2470430">build</span> <span
  m="2470700">100</span> <span m="2471000">clusters.</span> <span
  m="2472110">Every</span> <span m="2472350">example</span> <span
  m="2472740">is</span> <span m="2472890">its</span> <span
  m="2473010">own</span> <span m="2473190">cluster.</span></p><p><span
  m="2474250">Distance</span> <span m="2474700">is</span> <span
  m="2474870">really</span> <span m="2475140">good.</span> <span
  m="2475470">It's</span> <span m="2475570">really</span> <span
  m="2475710">close</span> <span m="2475980">to</span> <span
  m="2476070">itself,</span> <span m="2477000">but</span> <span
  m="2477150">it</span> <span m="2477210">does</span> <span m="2477390">a</span>
  <span m="2477450">lousy</span> <span m="2477870">job</span> <span
  m="2478110">of</span> <span m="2478170">labeling</span> <span
  m="2478680">things</span> <span m="2478920">on</span> <span
  m="2479040">it.</span> <span m="2479240">So</span> <span m="2479280">I</span>
  <span m="2479370">have</span> <span m="2479520">to</span> <span
  m="2479640">think</span> <span m="2479910">about,</span> <span
  m="2480120">how</span> <span m="2480330">do</span> <span m="2480440">I</span>
  <span m="2480540">decide</span> <span m="2481290">how</span> <span
  m="2481410">many</span> <span m="2481650">clusters,</span> <span
  m="2482610">what's</span> <span m="2482850">the</span> <span
  m="2482970">complexity</span> <span m="2483630">of</span> <span
  m="2483690">that</span> <span m="2483810">separating</span> <span
  m="2484320">service?</span> <span m="2484650">How</span> <span
  m="2484830">do</span> <span m="2484950">I</span> <span
  m="2485040">basically</span> <span m="2485700">avoid</span> <span
  m="2486300">the</span> <span m="2486480">overfitting</span> <span
  m="2487080">problem,</span> <span m="2487710">which</span> <span
  m="2487800">I</span> <span m="2487860">don't</span> <span
  m="2488010">want</span> <span m="2488190">to</span> <span
  m="2488250">have?</span> <span m="2490840">So</span> <span
  m="2491304">just</span> <span m="2491770">to</span> <span
  m="2491890">remind</span> <span m="2492310">you,</span> <span
  m="2492430">we've</span> <span m="2492610">already</span> <span
  m="2492850">seen</span> <span m="2493120">a</span> <span
  m="2493150">little</span> <span m="2493450">version</span> <span
  m="2493750">of</span> <span m="2493810">this,</span> <span
  m="2494020">the</span> <span m="2494110">clustering</span> <span
  m="2494650">method.</span> <span m="2496240">This</span> <span
  m="2496350">is</span> <span m="2497160">a</span> <span
  m="2497220">standard</span> <span m="2497670">way</span> <span
  m="2497820">to</span> <span m="2497940">do</span> <span m="2498120">it,</span>
  <span m="2498360">simply</span> <span m="2498750">repeating</span> <span
  m="2499170">what</span> <span m="2499290">we</span> <span
  m="2499380">had</span> <span m="2499530">on</span> <span m="2499640">an</span>
  <span m="2499720">earlier</span> <span m="2500040">slide.</span></p><p><span
  m="2500400">If</span> <span m="2500640">I</span> <span m="2500700">want</span>
  <span m="2500880">to</span> <span m="2500940">cluster it</span> <span
  m="2501420">into</span> <span m="2501600">groups,</span> <span
  m="2502420">I</span> <span m="2502520">start</span> <span
  m="2503220">by</span> <span m="2503340">saying</span> <span
  m="2503580">how</span> <span m="2503730">many</span> <span
  m="2503910">clusters</span> <span m="2504330">am</span> <span
  m="2504450">I</span> <span m="2504510">looking</span> <span
  m="2504810">for?</span> <span m="2505410">Pick</span> <span
  m="2505680">an</span> <span m="2505770">example</span> <span
  m="2506460">I</span> <span m="2506610">take</span> <span m="2506820">as</span>
  <span m="2506910">my</span> <span m="2507060">early</span> <span
  m="2507330">representation.</span> <span m="2508590">For</span> <span
  m="2508740">every</span> <span m="2509040">other</span> <span
  m="2509220">example</span> <span m="2509670">in</span> <span
  m="2509760">the</span> <span m="2509850">training</span> <span
  m="2510240">data,</span> <span m="2510640">put</span> <span
  m="2510840">it</span> <span m="2510990">to</span> <span m="2511170">the</span>
  <span m="2511290">closest</span> <span m="2512100">cluster.</span> <span
  m="2513210">Once</span> <span m="2513450">I've</span> <span
  m="2513540">got</span> <span m="2513780">those,</span> <span
  m="2513990">find</span> <span m="2514260">the</span> <span
  m="2514380">median,</span> <span m="2514830">repeat</span> <span
  m="2515250">the</span> <span m="2515340">process.</span> <span
  m="2517080">And</span> <span m="2517200">that</span> <span
  m="2517450">led</span> <span m="2518470">to</span> <span
  m="2518590">that</span> <span m="2519220">separation.</span> <span
  m="2521820">Now</span> <span m="2522030">once</span> <span
  m="2522270">I've</span> <span m="2522390">got</span> <span
  m="2522660">it,</span> <span m="2522750">I</span> <span
  m="2522840">like</span> <span m="2523020">to</span> <span
  m="2523140">validate</span> <span m="2523710">it.</span> <span
  m="2523930">And</span> <span m="2523950">in</span> <span
  m="2524040">fact,</span> <span m="2524890">I</span> <span
  m="2524990">should</span> <span m="2525030">have</span> <span
  m="2525120">said</span> <span m="2525300">this</span> <span
  m="2525480">better.</span> <span m="2525780">Those</span> <span
  m="2526080">two</span> <span m="2526380">clusters</span> <span
  m="2526890">came</span> <span m="2527130">without</span> <span
  m="2527490">looking</span> <span m="2527820">at</span> <span
  m="2528260">the</span> <span m="2528420">two</span> <span
  m="2528660">black</span> <span m="2528990">dots.</span></p><p><span
  m="2529980">Once</span> <span m="2530250">I</span> <span
  m="2530340">put</span> <span m="2530520">the</span> <span
  m="2530640">black</span> <span m="2531000">dots</span> <span
  m="2531360">in,</span> <span m="2531510">I'd</span> <span
  m="2531630">like</span> <span m="2531840">to</span> <span
  m="2531960">validate,</span> <span m="2532560">how</span> <span
  m="2532800">well</span> <span m="2532980">does</span> <span
  m="2533160">this</span> <span m="2533340">really</span> <span
  m="2533700">work?</span> <span m="2534510">And</span> <span
  m="2534660">that</span> <span m="2535440">example</span> <span
  m="2536050">there</span> <span m="2536190">is</span> <span
  m="2536340">really</span> <span m="2536640">not</span> <span
  m="2536940">very</span> <span m="2537240">encouraging.</span> <span
  m="2537780">It's</span> <span m="2537930">too</span> <span
  m="2538110">close.</span> <span m="2539590">So</span> <span
  m="2539740">that's</span> <span m="2539980">a</span> <span
  m="2540070">natural</span> <span m="2540430">place</span> <span
  m="2540700">to</span> <span m="2540790">say,</span> <span
  m="2540970">OK,</span> <span m="2541310">what</span> <span
  m="2541420">if</span> <span m="2541540">I</span> <span m="2541660">did</span>
  <span m="2541840">this</span> <span m="2542020">with</span> <span
  m="2542170">three</span> <span m="2542440">clusters?</span> <span
  m="2545360">That's</span> <span m="2545510">what</span> <span
  m="2545630">I</span> <span m="2545690">get.</span> <span m="2547970">I</span>
  <span m="2548090">like</span> <span m="2548410">the</span> <span
  m="2548540">that.</span> <span m="2549240">All</span> <span
  m="2549590">right?</span> <span m="2549860">That</span> <span
  m="2550280">has</span> <span m="2550790">a</span> <span
  m="2550940">really</span> <span m="2551480">nice</span> <span
  m="2551780">cluster</span> <span m="2552290">up</span> <span
  m="2552440">here.</span> <span m="2553460">The</span> <span
  m="2553830">fact</span> <span m="2554100">that</span> <span
  m="2554190">the</span> <span m="2554340">algorithm</span> <span
  m="2554730">didn't</span> <span m="2554940">know</span> <span
  m="2555060">the</span> <span m="2555150">labeling</span> <span
  m="2555630">is</span> <span m="2555750">irrelevant.</span> <span
  m="2556200">There's</span> <span m="2556350">a</span> <span
  m="2556440">nice</span> <span m="2556830">grouping</span> <span
  m="2557220">of</span> <span m="2557310">five.</span> <span
  m="2557720">There's</span> <span m="2557910">a</span> <span
  m="2557970">nice</span> <span m="2558330">grouping</span> <span
  m="2558660">of</span> <span m="2558750">four.</span> <span
  m="2559710">And</span> <span m="2559800">there's</span> <span
  m="2559980">a</span> <span m="2560040">nice</span> <span
  m="2560310">grouping</span> <span m="2560670">of</span> <span
  m="2560760">three</span> <span m="2561080">in</span> <span
  m="2561340">between.</span></p><p><span m="2562620">And</span> <span
  m="2562740">in</span> <span m="2562800">fact,</span> <span
  m="2563100">if</span> <span m="2563220">I</span> <span
  m="2563370">looked</span> <span m="2563700">at</span> <span
  m="2563820">the</span> <span m="2565020">average</span> <span
  m="2565530">distance</span> <span m="2565980">between</span> <span
  m="2566550">examples</span> <span m="2567150">in</span> <span
  m="2567270">each</span> <span m="2567450">of</span> <span
  m="2567510">these</span> <span m="2567720">clusters,</span> <span
  m="2568200">it</span> <span m="2568350">is</span> <span
  m="2568500">much</span> <span m="2568860">tighter</span> <span
  m="2570510">than</span> <span m="2570690">in</span> <span
  m="2570780">that</span> <span m="2570960">example.</span> <span
  m="2572440">And</span> <span m="2572530">so</span> <span
  m="2572680">that</span> <span m="2573880">leads</span> <span
  m="2574360">to,</span> <span m="2575200">then,</span> <span
  m="2575410">the</span> <span m="2575500">question</span> <span
  m="2575860">of</span> <span m="2576310">should</span> <span
  m="2576490">I</span> <span m="2576550">look</span> <span
  m="2576760">for</span> <span m="2576880">four</span> <span
  m="2577090">clusters?</span> <span m="2577660">Question,</span> <span
  m="2578150">please.</span></p><p><span m="2578350">AUDIENCE:</span> <span
  m="2578572">Is</span> <span m="2578795">that</span> <span
  m="2579240">overlap</span> <span m="2579685">between the</span> <span
  m="2580130">two</span> <span m="2580575">clusters</span> <span m="2581020">not
  an</span> <span m="2581465">issue?</span></p><p><span m="2582360">ERIC
  GRIMSON:</span> <span m="2582400">Yes.</span> <span m="2582440">The</span>
  <span m="2582500">question</span> <span m="2582830">is,</span> <span
  m="2582980">is</span> <span m="2583100">the</span> <span
  m="2583220">overlap</span> <span m="2583640">between</span> <span
  m="2583940">the</span> <span m="2584060">two</span> <span
  m="2584180">clusters</span> <span m="2584600">a</span> <span
  m="2584660">problem?</span> <span m="2585060">No.</span> <span
  m="2585860">I</span> <span m="2586010">just</span> <span
  m="2586220">drew</span> <span m="2586490">it</span> <span
  m="2586580">here</span> <span m="2586730">so</span> <span m="2586880">I</span>
  <span m="2586940">could</span> <span m="2587090">let</span> <span
  m="2587240">you</span> <span m="2587360">see</span> <span
  m="2587660">where</span> <span m="2587870">those</span> <span
  m="2588110">pieces</span> <span m="2588530">are.</span> <span
  m="2589010">But</span> <span m="2589190">in</span> <span
  m="2589280">fact,</span> <span m="2589670">if</span> <span
  m="2589880">you</span> <span m="2589970">like,</span> <span
  m="2590240">the</span> <span m="2591830">center</span> <span
  m="2592250">is</span> <span m="2592430">there.</span> <span
  m="2593090">Those</span> <span m="2593330">three</span> <span
  m="2593540">points</span> <span m="2593870">are</span> <span
  m="2593990">all</span> <span m="2594110">closer</span> <span
  m="2594470">to</span> <span m="2594590">that</span> <span
  m="2594770">center</span> <span m="2595550">than</span> <span
  m="2595700">they</span> <span m="2595850">are</span> <span
  m="2596120">to</span> <span m="2596240">that</span> <span
  m="2596450">center.</span> <span m="2596780">So</span> <span
  m="2596930">the</span> <span m="2597050">fact</span> <span
  m="2597260">that</span> <span m="2597350">they</span> <span
  m="2597440">overlap</span> <span m="2597880">is a</span> <span
  m="2597980">good</span> <span m="2598010">question.</span> <span
  m="2598260">It's</span> <span m="2598420">just</span> <span
  m="2598520">the</span> <span m="2598640">way</span> <span m="2598790">I</span>
  <span m="2598850">happened</span> <span m="2599120">to</span> <span
  m="2599210">draw</span> <span m="2599450">them.</span> <span
  m="2600020">I</span> <span m="2600110">should</span> <span
  m="2600290">really</span> <span m="2600680">draw</span> <span
  m="2600980">these,</span> <span m="2601160">not</span> <span
  m="2601400">as</span> <span m="2601490">circles,</span> <span
  m="2601940">but</span> <span m="2602090">as</span> <span
  m="2602150">some</span> <span m="2602660">little</span> <span
  m="2602930">bit</span> <span m="2603050">more</span> <span
  m="2603200">convoluted</span> <span m="2603770">surface.</span> <span
  m="2605104">OK?</span> <span m="2606050">Having</span> <span
  m="2606320">done</span> <span m="2606500">three,</span> <span
  m="2606770">I</span> <span m="2606830">could</span> <span
  m="2606950">say</span> <span m="2607160">should</span> <span
  m="2607370">I</span> <span m="2607460">look</span> <span
  m="2607640">for</span> <span m="2607790">four?</span></p><p><span
  m="2608900">Well,</span> <span m="2610490">those</span> <span
  m="2610760">points</span> <span m="2611090">down</span> <span
  m="2611300">there,</span> <span m="2611480">as</span> <span
  m="2611600">I've</span> <span m="2611720">already</span> <span
  m="2611960">said,</span> <span m="2612200">are</span> <span
  m="2612320">an</span> <span m="2612410">example</span> <span
  m="2612890">where</span> <span m="2613040">it's</span> <span
  m="2613130">going</span> <span m="2613280">to</span> <span
  m="2613340">be</span> <span m="2613460">hard</span> <span
  m="2613790">to</span> <span m="2613910">separate</span> <span
  m="2614330">them</span> <span m="2614480">out.</span> <span
  m="2614750">And</span> <span m="2614900">I</span> <span
  m="2614990">don't</span> <span m="2615170">want</span> <span
  m="2615350">to</span> <span m="2615410">overfit.</span> <span
  m="2615920">Because</span> <span m="2616160">the</span> <span
  m="2616250">only</span> <span m="2616460">way</span> <span
  m="2616550">to</span> <span m="2616640">separate</span> <span
  m="2617030">those</span> <span m="2617270">out</span> <span
  m="2617720">is</span> <span m="2618590">going</span> <span
  m="2618770">to</span> <span m="2618860">be</span> <span m="2618950">to</span>
  <span m="2619070">come</span> <span m="2619250">up</span> <span
  m="2619370">with</span> <span m="2619520">a</span> <span
  m="2619580">really</span> <span m="2619910">convoluted</span> <span
  m="2620510">cluster,</span> <span m="2620900">which</span> <span
  m="2621050">I</span> <span m="2621140">don't</span> <span
  m="2621350">like.</span> <span m="2621950">All</span> <span
  m="2622010">right?</span> <span m="2623580">Let</span> <span
  m="2623630">me</span> <span m="2623720">finish</span> <span
  m="2624110">with</span> <span m="2624380">showing</span> <span
  m="2624680">you</span> <span m="2624800">one</span> <span
  m="2625070">other</span> <span m="2625280">example</span> <span
  m="2626480">from</span> <span m="2626630">the</span> <span
  m="2626720">other</span> <span m="2626930">direction.</span> <span
  m="2627650">Which</span> <span m="2627840">is,</span> <span
  m="2627980">suppose</span> <span m="2629180">I</span> <span
  m="2629270">give</span> <span m="2629510">you</span> <span
  m="2629780">labeled</span> <span m="2630170">examples.</span></p><p><span
  m="2632010">So</span> <span m="2632130">again,</span> <span
  m="2632370">the</span> <span m="2632460">goal</span> <span
  m="2632730">is</span> <span m="2632880">I've</span> <span
  m="2633000">got</span> <span m="2633240">features</span> <span
  m="2634200">associated</span> <span m="2634740">with</span> <span
  m="2634890">each</span> <span m="2635070">example.</span> <span
  m="2635470">They're</span> <span m="2635550">going</span> <span
  m="2635660">to</span> <span m="2635720">have</span> <span
  m="2635810">multiple</span> <span m="2636180">dimensions</span> <span
  m="2636690">on</span> <span m="2636840">it.</span> <span
  m="2636930">But</span> <span m="2637050">I</span> <span
  m="2637170">also</span> <span m="2637530">know</span> <span
  m="2637800">the</span> <span m="2637950">label</span> <span
  m="2638340">associated</span> <span m="2638880">with</span> <span
  m="2639000">them.</span> <span m="2639450">And</span> <span
  m="2639570">I</span> <span m="2639750">want</span> <span m="2640050">to</span>
  <span m="2640170">learn</span> <span m="2640950">what</span> <span
  m="2641190">is</span> <span m="2641370">the</span> <span
  m="2641490">best</span> <span m="2641880">way</span> <span
  m="2642060">to</span> <span m="2642180">come</span> <span
  m="2642420">up</span> <span m="2642600">with</span> <span m="2642720">a</span>
  <span m="2642810">rule</span> <span m="2643110">that</span> <span
  m="2643230">will</span> <span m="2643350">let</span> <span
  m="2643500">me</span> <span m="2643620">take</span> <span
  m="2643830">new</span> <span m="2644070">examples</span> <span
  m="2644760">and</span> <span m="2644880">assign</span> <span
  m="2645240">them</span> <span m="2645360">to</span> <span
  m="2645480">the</span> <span m="2645600">right</span> <span
  m="2645810">group.</span> <span m="2647301">A</span> <span
  m="2647730">number</span> <span m="2647970">of</span> <span
  m="2648030">ways</span> <span m="2648300">to</span> <span
  m="2648420">do</span> <span m="2648570">this.</span> <span
  m="2648910">You</span> <span m="2648930">can</span> <span
  m="2649080">simply</span> <span m="2649500">say</span> <span
  m="2649830">I'm</span> <span m="2650010">looking</span> <span
  m="2650310">for</span> <span m="2650460">the</span> <span
  m="2650580">simplest</span> <span m="2651120">surface</span> <span
  m="2651900">that</span> <span m="2652020">will</span> <span
  m="2652110">separate</span> <span m="2652530">those</span> <span
  m="2652710">examples.</span> <span m="2654180">In</span> <span
  m="2654270">my</span> <span m="2654420">football</span> <span
  m="2654780">case</span> <span m="2655050">that</span> <span
  m="2655140">were</span> <span m="2655290">in</span> <span
  m="2655380">the</span> <span m="2655470">plane,</span> <span
  m="2655770">what's</span> <span m="2656010">the</span> <span
  m="2656130">best</span> <span m="2656370">line</span> <span
  m="2656940">that</span> <span m="2657060">separates</span> <span
  m="2657510">them,</span> <span m="2657660">which</span> <span
  m="2657780">turns</span> <span m="2658020">out</span> <span
  m="2658140">to</span> <span m="2658260">be</span> <span
  m="2658380">easy.</span></p><p><span m="2659610">I</span> <span
  m="2659730">might</span> <span m="2660030">look</span> <span
  m="2660270">for</span> <span m="2660480">a</span> <span
  m="2660540">more</span> <span m="2660720">complicated</span> <span
  m="2661560">surface.</span> <span m="2662140">And</span> <span
  m="2662240">we're</span> <span m="2662340">going</span> <span
  m="2662440">to</span> <span m="2662540">see</span> <span m="2662640">an</span>
  <span m="2662740">example</span> <span m="2663090">in</span> <span
  m="2663180">a</span> <span m="2663270">second</span> <span
  m="2663600">where</span> <span m="2663720">maybe</span> <span
  m="2664080">it's</span> <span m="2664230">a</span> <span
  m="2664350">sequence</span> <span m="2664950">of</span> <span
  m="2665070">line</span> <span m="2665430">segments</span> <span
  m="2666360">that</span> <span m="2666480">separates</span> <span
  m="2666990">them</span> <span m="2667140">out.</span> <span
  m="2667260">Because</span> <span m="2667740">there's</span> <span
  m="2667920">not</span> <span m="2668160">just</span> <span
  m="2668430">one</span> <span m="2668670">line</span> <span
  m="2668940">that</span> <span m="2669060">does</span> <span
  m="2669330">the</span> <span m="2669410">separation.</span> <span
  m="2670920">As</span> <span m="2671220">before,</span> <span
  m="2671670">I</span> <span m="2671760">want</span> <span m="2671970">to</span>
  <span m="2672030">be</span> <span m="2672180">careful.</span> <span
  m="2672790">If</span> <span m="2672810">I</span> <span m="2672900">make</span>
  <span m="2673110">it</span> <span m="2673230">too</span> <span
  m="2673440">complicated,</span> <span m="2674140">I</span> <span
  m="2674220">may</span> <span m="2674370">get</span> <span m="2674550">a</span>
  <span m="2674670">really</span> <span m="2675090">good</span> <span
  m="2675300">separator,</span> <span m="2676200">but</span> <span
  m="2676380">I</span> <span m="2676470">overfit</span> <span
  m="2676980">to</span> <span m="2677100">the</span> <span
  m="2677220">data.</span> <span m="2678440">And</span> <span
  m="2678570">you're</span> <span m="2678660">going</span> <span
  m="2678780">to</span> <span m="2678840">see</span> <span
  m="2679050">next</span> <span m="2679290">time.</span> <span
  m="2679470">I'm</span> <span m="2679530">going</span> <span m="2679650">to
  just</span> <span m="2679800">highlight</span> <span m="2680250">it</span>
  <span m="2680310">here.</span> <span m="2680520">There's</span> <span
  m="2680730">a</span> <span m="2680790">third</span> <span
  m="2681150">way,</span> <span m="2681430">which</span> <span
  m="2681510">will</span> <span m="2681630">lead</span> <span
  m="2681840">to</span> <span m="2682110">almost</span> <span
  m="2682440">the</span> <span m="2682560">same</span> <span
  m="2682770">kind</span> <span m="2682980">of</span> <span
  m="2683040">result</span> <span m="2683910">called</span> <span
  m="2684210">k</span> <span m="2684450">nearest</span> <span
  m="2684810">neighbors.</span></p><p><span m="2686160">And</span> <span
  m="2686250">the</span> <span m="2686370">idea</span> <span
  m="2686700">here</span> <span m="2687030">is</span> <span
  m="2687330">I've</span> <span m="2687480">got</span> <span
  m="2687660">a</span> <span m="2687720">set</span> <span m="2687930">of</span>
  <span m="2688020">labeled</span> <span m="2688380">data.</span> <span
  m="2689550">And</span> <span m="2689650">what</span> <span
  m="2689730">I'm</span> <span m="2689820">going</span> <span
  m="2690030">to</span> <span m="2690120">do</span> <span m="2690630">is,</span>
  <span m="2690870">for</span> <span m="2691020">every</span> <span
  m="2691320">new</span> <span m="2691530">example,</span> <span
  m="2692100">say</span> <span m="2692370">find</span> <span
  m="2693060">the</span> <span m="2693180">k,</span> <span
  m="2693460">say</span> <span m="2693660">the</span> <span
  m="2693780">five</span> <span m="2694440">closest</span> <span
  m="2695310">labeled</span> <span m="2695700">examples.</span> <span
  m="2697250">And</span> <span m="2697370">take</span> <span
  m="2697550">a</span> <span m="2697580">vote.</span> <span
  m="2698600">If</span> <span m="2698720">3</span> <span m="2698990">out</span>
  <span m="2699110">of</span> <span m="2699170">5</span> <span
  m="2699530">or</span> <span m="2699590">4</span> <span m="2699890">out
  of</span> <span m="2700010">5</span> <span m="2700340">or</span> <span
  m="2700430">5</span> <span m="2700730">out</span> <span m="2700850">of</span>
  <span m="2700910">5</span> <span m="2701210">of</span> <span
  m="2701270">those</span> <span m="2701450">labels</span> <span
  m="2701870">are</span> <span m="2701960">the</span> <span
  m="2702080">same,</span> <span m="2702500">I'm</span> <span
  m="2702620">going</span> <span m="2702770">to</span> <span
  m="2702830">say</span> <span m="2703010">it's</span> <span
  m="2703130">part</span> <span m="2703370">of</span> <span
  m="2703430">that</span> <span m="2703610">group.</span> <span
  m="2704970">And</span> <span m="2704990">if</span> <span m="2705110">I</span>
  <span m="2705170">have</span> <span m="2705320">less</span> <span
  m="2705620">than</span> <span m="2705740">that,</span> <span
  m="2705890">I'm</span> <span m="2705980">going</span> <span
  m="2706100">to</span> <span m="2706160">leave</span> <span
  m="2706370">it</span> <span m="2706460">as</span> <span
  m="2706580">unclassified.</span> <span m="2707510">And</span> <span
  m="2707630">that's</span> <span m="2707840">a</span> <span
  m="2707900">nice</span> <span m="2708260">way</span> <span
  m="2708440">of</span> <span m="2708530">actually</span> <span
  m="2708830">thinking</span> <span m="2709130">about</span> <span
  m="2709280">how</span> <span m="2709400">to</span> <span
  m="2709520">learn</span> <span m="2709780">them.</span></p><p><span
  m="2710870">And</span> <span m="2710960">let</span> <span
  m="2711080">me</span> <span m="2711200">just</span> <span
  m="2711380">finish</span> <span m="2711710">by</span> <span
  m="2711860">showing</span> <span m="2712220">you</span> <span
  m="2712310">an</span> <span m="2712430">example.</span> <span
  m="2712940">Now</span> <span m="2713030">I</span> <span
  m="2713120">won't</span> <span m="2713300">use</span> <span
  m="2713480">football</span> <span m="2713810">players</span> <span
  m="2714230">on</span> <span m="2714350">this</span> <span
  m="2714500">one.</span> <span m="2714710">I'll</span> <span
  m="2714830">use</span> <span m="2715010">a</span> <span
  m="2715070">different</span> <span m="2715400">example.</span> <span
  m="2717380">I'm</span> <span m="2717500">going</span> <span
  m="2717620">to</span> <span m="2717680">give</span> <span
  m="2717830">you</span> <span m="2717890">some</span> <span
  m="2718070">voting</span> <span m="2718460">data.</span> <span
  m="2720020">I</span> <span m="2720080">think</span> <span
  m="2720230">this</span> <span m="2720410">is</span> <span
  m="2720530">actually</span> <span m="2720860">simulated</span> <span
  m="2721400">data.</span> <span m="2721800">But</span> <span
  m="2721970">these</span> <span m="2722330">are</span> <span
  m="2722600">a</span> <span m="2722690">set</span> <span m="2722960">of</span>
  <span m="2723530">voters</span> <span m="2724250">in</span> <span
  m="2724370">the</span> <span m="2724460">United</span> <span
  m="2724730">States</span> <span m="2726020">with</span> <span
  m="2726230">their</span> <span m="2726380">preference.</span> <span
  m="2726890">They</span> <span m="2727010">tend</span> <span
  m="2727250">to</span> <span m="2727340">vote</span> <span
  m="2727610">Republican.</span> <span m="2728180">They</span> <span
  m="2728300">tend</span> <span m="2728480">to</span> <span
  m="2728540">vote</span> <span m="2728720">Democrat.</span> <span
  m="2729260">And</span> <span m="2729410">the</span> <span
  m="2729500">two</span> <span m="2729800">categories</span> <span
  m="2730520">are</span> <span m="2730850">their</span> <span
  m="2731030">age</span> <span m="2732140">and</span> <span
  m="2732230">how</span> <span m="2732350">far</span> <span
  m="2732590">away</span> <span m="2732800">they</span> <span
  m="2732950">live</span> <span m="2733100">from</span> <span
  m="2733280">Boston.</span> <span m="2734820">Whether</span> <span
  m="2735060">those</span> <span m="2735240">are</span> <span
  m="2735330">relevant</span> <span m="2735720">or</span> <span
  m="2735810">not,</span> <span m="2736020">I</span> <span
  m="2736050">don't</span> <span m="2736200">know,</span> <span
  m="2736440">but</span> <span m="2736560">they</span> <span
  m="2736630">are</span> <span m="2736710">just</span> <span
  m="2736890">two</span> <span m="2737040">things</span> <span
  m="2737240">I'm</span> <span m="2737280">going</span> <span
  m="2737400">to</span> <span m="2737460">use</span> <span m="2737640">to</span>
  <span m="2737760">classify</span> <span m="2738360">them.</span> <span
  m="2739020">And</span> <span m="2739140">I'd</span> <span
  m="2739260">like</span> <span m="2739530">to</span> <span
  m="2739650">say,</span> <span m="2740010">how</span> <span
  m="2740280">would</span> <span m="2740490">I</span> <span
  m="2740640">fit</span> <span m="2740970">a</span> <span
  m="2741030">curve</span> <span m="2741750">to</span> <span
  m="2741870">separate</span> <span m="2742920">those</span> <span
  m="2743100">two</span> <span m="2743250">classes?</span></p><p><span
  m="2746110">I'm</span> <span m="2746200">going</span> <span
  m="2746320">to</span> <span m="2746380">keep</span> <span
  m="2746800">half</span> <span m="2747160">the</span> <span
  m="2747280">data</span> <span m="2747610">to</span> <span
  m="2747730">test.</span> <span m="2748690">I'm</span> <span
  m="2748750">going</span> <span m="2748870">to</span> <span
  m="2748930">use</span> <span m="2749080">half</span> <span
  m="2749350">the</span> <span m="2749440">data</span> <span
  m="2749710">to</span> <span m="2749830">train.</span> <span
  m="2750910">So</span> <span m="2751060">if</span> <span
  m="2751150">this</span> <span m="2751360">is</span> <span
  m="2751510">my</span> <span m="2751690">training</span> <span
  m="2752200">data,</span> <span m="2752470">I</span> <span
  m="2752590">can</span> <span m="2752710">say</span> <span
  m="2753020">what's</span> <span m="2753310">the</span> <span
  m="2753430">best</span> <span m="2753790">line</span> <span
  m="2754330">that</span> <span m="2754510">separates</span> <span
  m="2755110">these?</span> <span m="2757040">I</span> <span
  m="2757100">don't</span> <span m="2757220">know</span> <span
  m="2757280">about</span> <span m="2757490">best,</span> <span
  m="2757760">but</span> <span m="2757940">here</span> <span
  m="2758210">are</span> <span m="2758360">two</span> <span
  m="2758660">examples.</span> <span m="2760200">This</span> <span
  m="2760240">solid</span> <span m="2760850">line</span> <span
  m="2761570">has</span> <span m="2761960">the</span> <span
  m="2762080">property</span> <span m="2762620">that</span> <span
  m="2762830">all</span> <span m="2763130">the</span> <span
  m="2763250">Democrats</span> <span m="2763880">are</span> <span
  m="2763970">on</span> <span m="2764120">one</span> <span
  m="2764330">side.</span> <span m="2765620">Everything</span> <span
  m="2766100">on</span> <span m="2766220">the</span> <span
  m="2766340">other</span> <span m="2766550">side</span> <span
  m="2766820">is</span> <span m="2766970">a</span> <span
  m="2767010">Republican,</span> <span m="2767540">but</span> <span
  m="2767660">there</span> <span m="2767840">are</span> <span
  m="2768080">some</span> <span m="2768380">Republicans</span> <span
  m="2769100">on</span> <span m="2769250">this</span> <span
  m="2769400">side</span> <span m="2769670">of</span> <span
  m="2769730">the</span> <span m="2769820">line.</span> <span
  m="2770000">I</span> <span m="2770090">can't</span> <span
  m="2770330">find</span> <span m="2770600">a</span> <span
  m="2770660">line</span> <span m="2770960">that</span> <span
  m="2771080">completely</span> <span m="2771620">separates</span> <span
  m="2772100">these,</span> <span m="2772310">as</span> <span
  m="2772430">I</span> <span m="2772520">did</span> <span
  m="2772700">with</span> <span m="2772850">the</span> <span
  m="2772970">football</span> <span m="2773270">players.</span> <span
  m="2774260">But</span> <span m="2774410">there is</span> <span
  m="2774710">a</span> <span m="2774830">decent</span> <span
  m="2775370">line</span> <span m="2776060">to</span> <span
  m="2776150">separate</span> <span m="2776630">them.</span></p><p><span
  m="2777690">Here's</span> <span m="2777800">another</span> <span
  m="2778130">candidate.</span> <span m="2778700">That</span> <span
  m="2778910">dash</span> <span m="2779360">line</span> <span
  m="2780230">has</span> <span m="2780470">the</span> <span
  m="2780590">property</span> <span m="2781130">that</span> <span
  m="2781280">on</span> <span m="2781430">the</span> <span
  m="2781550">right</span> <span m="2781850">side</span> <span
  m="2783090">you've</span> <span m="2783170">got--</span> <span
  m="2783440">boy,</span> <span m="2783680">I</span> <span
  m="2783770">don't</span> <span m="2783980">think</span> <span
  m="2784130">this</span> <span m="2784280">is</span> <span
  m="2784370">deliberate,</span> <span m="2784820">John,</span> <span
  m="2785070">right--</span> <span m="2785240">but</span> <span
  m="2785390">on</span> <span m="2785540">the</span> <span
  m="2785660">right</span> <span m="2785990">side,</span> <span
  m="2786480">you've</span> <span m="2786500">got</span> <span
  m="2786740">almost</span> <span m="2787130">all</span> <span
  m="2787250">Republicans.</span> <span m="2788195">It</span> <span
  m="2788450">seems</span> <span m="2788870">perfectly</span> <span
  m="2789350">appropriate.</span> <span m="2790730">One</span> <span
  m="2791030">Democrat,</span> <span m="2791990">but</span> <span
  m="2792170">there's</span> <span m="2792320">a</span> <span
  m="2792530">pretty</span> <span m="2792860">good</span> <span
  m="2793010">separation</span> <span m="2793580">there.</span> <span
  m="2794000">And</span> <span m="2794270">on</span> <span
  m="2794420">the</span> <span m="2794510">left</span> <span
  m="2794780">side,</span> <span m="2795080">you've</span> <span
  m="2795190">got</span> <span m="2795380">a</span> <span m="2795440">mix</span>
  <span m="2795710">of</span> <span m="2795800">things.</span> <span
  m="2796130">But</span> <span m="2796340">most</span> <span
  m="2796880">of</span> <span m="2797030">the</span> <span
  m="2797150">Democrats</span> <span m="2797780">are</span> <span
  m="2797960">on</span> <span m="2798080">the</span> <span
  m="2798170">left</span> <span m="2798380">side</span> <span
  m="2798650">of</span> <span m="2798710">that</span> <span
  m="2798920">line.</span> <span m="2799990">All</span> <span
  m="2800090">right?</span> <span m="2800480">The</span> <span
  m="2800570">fact</span> <span m="2800840">that</span> <span
  m="2800960">left</span> <span m="2801260">and</span> <span
  m="2801350">right</span> <span m="2801560">correlates</span> <span
  m="2802010">with</span> <span m="2802100">distance</span> <span
  m="2802490">from</span> <span m="2802610">Boston</span> <span
  m="2803000">is</span> <span m="2803060">completely</span> <span
  m="2803510">irrelevant</span> <span m="2803990">here.</span> <span
  m="2804470">But</span> <span m="2804620">it</span> <span
  m="2804710">has</span> <span m="2804920">a</span> <span
  m="2804950">nice</span> <span m="2805220">punch</span> <span
  m="2805550">to</span> <span m="2805700">it.</span></p><p><span
  m="2806636">JOHN GUTTAG:</span> <span m="2806852">Relevant,</span> <span
  m="2807069">but</span> <span m="2807502">not</span> <span
  m="2807935">accidental.</span></p><p><span m="2808370">ERIC GRIMSON:</span>
  <span m="2808445">But</span> <span m="2808520">not</span> <span
  m="2808730">accidental.</span> <span m="2809270">Thank</span> <span
  m="2809540">you.</span> <span m="2810920">All</span> <span
  m="2810980">right.</span> <span m="2811070">So</span> <span
  m="2811190">now</span> <span m="2811400">the</span> <span
  m="2811490">question</span> <span m="2811790">is,</span> <span
  m="2812010">how</span> <span m="2812090">would</span> <span
  m="2812240">I</span> <span m="2812330">evaluate</span> <span
  m="2812900">these?</span> <span m="2813170">How</span> <span
  m="2813320">do</span> <span m="2813440">I</span> <span
  m="2813500">decide</span> <span m="2813980">which</span> <span
  m="2814220">one</span> <span m="2814330">is</span> <span
  m="2814460">better?</span> <span m="2815570">And</span> <span
  m="2815690">I'm</span> <span m="2815780">simply</span> <span
  m="2816140">going</span> <span m="2816290">to</span> <span
  m="2816350">show</span> <span m="2816560">you,</span> <span
  m="2816680">very</span> <span m="2816980">quickly,</span> <span
  m="2817340">some</span> <span m="2817550">examples.</span> <span
  m="2818880">First</span> <span m="2819080">one</span> <span
  m="2819290">is</span> <span m="2819590">to</span> <span
  m="2819770">look</span> <span m="2820130">at</span> <span
  m="2820750">what's</span> <span m="2820880">called</span> <span
  m="2821120">the</span> <span m="2821240">confusion</span> <span
  m="2821750">matrix.</span> <span m="2822890">What</span> <span
  m="2823010">does</span> <span m="2823130">that</span> <span
  m="2823250">mean?</span> <span m="2823580">It</span> <span
  m="2823700">says</span> <span m="2824790">for</span> <span
  m="2825150">this,</span> <span m="2825620">one</span> <span
  m="2825800">of</span> <span m="2825890">these</span> <span
  m="2826040">classifiers</span> <span m="2826640">for</span> <span
  m="2826700">example,</span> <span m="2827090">the</span> <span
  m="2827180">solid</span> <span m="2827540">line.</span> <span
  m="2827760">Here</span> <span m="2828080">are</span> <span
  m="2828230">the</span> <span m="2828350">predictions,</span> <span
  m="2829100">based</span> <span m="2829490">on</span> <span
  m="2829580">the</span> <span m="2829670">solid</span> <span
  m="2830030">line</span> <span m="2830270">of</span> <span
  m="2830330">whether</span> <span m="2830600">they</span> <span
  m="2830750">would</span> <span m="2830900">be</span> <span
  m="2831320">more</span> <span m="2831500">likely</span> <span
  m="2831830">to</span> <span m="2831920">be</span> <span
  m="2832010">Democrat</span> <span m="2832550">or</span> <span
  m="2832640">Republican.</span> <span m="2833540">And</span> <span
  m="2833690">here is</span> <span m="2834170">the</span> <span
  m="2834350">actual</span> <span m="2834800">label.</span> <span
  m="2836090">Same</span> <span m="2836360">thing</span> <span
  m="2836540">for</span> <span m="2836660">the</span> <span
  m="2836780">dashed</span> <span m="2837110">line.</span></p><p><span
  m="2837410">And</span> <span m="2837620">that</span> <span
  m="2837980">diagonal</span> <span m="2839030">is</span> <span
  m="2839210">important</span> <span m="2839720">because</span> <span
  m="2840110">those</span> <span m="2840530">are</span> <span
  m="2841280">the</span> <span m="2841400">correctly</span> <span
  m="2842120">labeled</span> <span m="2842990">results.</span> <span
  m="2843740">Right?</span> <span m="2844540">It</span> <span
  m="2844640">correctly,</span> <span m="2845600">in</span> <span
  m="2845750">the</span> <span m="2846610">solid</span> <span
  m="2846920">line</span> <span m="2847130">case,</span> <span
  m="2847460">gets</span> <span m="2847700">all</span> <span
  m="2847970">of</span> <span m="2848060">the</span> <span
  m="2848330">correct</span> <span m="2848720">labelings</span> <span
  m="2849200">of</span> <span m="2849290">the</span> <span
  m="2849380">Democrats.</span> <span m="2850400">It</span> <span
  m="2850490">gets</span> <span m="2850730">half</span> <span
  m="2851120">of</span> <span m="2851180">the</span> <span
  m="2851270">Republicans</span> <span m="2851900">right.</span> <span
  m="2852080">But</span> <span m="2852230">it</span> <span
  m="2852300">has</span> <span m="2852500">some</span> <span
  m="2853130">where</span> <span m="2853390">it's</span> <span
  m="2854090">actually</span> <span m="2854480">Republican,</span> <span
  m="2855080">but</span> <span m="2855200">it</span> <span
  m="2855290">labels</span> <span m="2855650">it</span> <span
  m="2855860">as</span> <span m="2855980">a</span> <span
  m="2856070">Democrat.</span> <span m="2857700">That,</span> <span
  m="2858330">we'd</span> <span m="2858540">like</span> <span
  m="2859050">to</span> <span m="2859170">be</span> <span
  m="2859290">really</span> <span m="2859620">large.</span> <span
  m="2860580">And</span> <span m="2860700">in</span> <span
  m="2860760">fact,</span> <span m="2861060">it</span> <span
  m="2861180">leads</span> <span m="2861630">to</span> <span
  m="2862020">a</span> <span m="2862110">natural</span> <span
  m="2862560">measure</span> <span m="2863070">called</span> <span
  m="2863340">the</span> <span m="2863490">accuracy.</span> <span
  m="2864880">Which</span> <span m="2865050">is,</span> <span
  m="2865560">just</span> <span m="2865770">to</span> <span
  m="2865860">go</span> <span m="2865980">back</span> <span
  m="2866250">to</span> <span m="2866370">that,</span> <span
  m="2866520">we</span> <span m="2866640">say</span> <span
  m="2866880">that</span> <span m="2867060">these</span> <span
  m="2867330">are</span> <span m="2867450">true</span> <span
  m="2867750">positives.</span> <span m="2868650">Meaning,</span> <span
  m="2869280">I</span> <span m="2869400">labeled</span> <span
  m="2869820">it</span> <span m="2869910">as</span> <span
  m="2870060">being</span> <span m="2870300">an</span> <span
  m="2870390">instance,</span> <span m="2870780">and</span> <span
  m="2870900">it</span> <span m="2870960">really</span> <span
  m="2871320">is.</span></p><p><span m="2872070">These</span> <span
  m="2872340">are</span> <span m="2872460">true</span> <span
  m="2872760">negatives.</span> <span m="2873330">I</span> <span
  m="2873420">label</span> <span m="2873770">it</span> <span
  m="2873870">as</span> <span m="2874050">not</span> <span
  m="2874290">being</span> <span m="2874500">an</span> <span
  m="2874590">instance,</span> <span m="2875070">and</span> <span
  m="2875160">it</span> <span m="2875250">really</span> <span
  m="2875550">isn't.</span> <span m="2876330">And</span> <span
  m="2876480">then</span> <span m="2876660">these</span> <span
  m="2877050">are</span> <span m="2877740">the</span> <span
  m="2877860">false</span> <span m="2878220">positives.</span> <span
  m="2879450">I</span> <span m="2879580">labeled</span> <span
  m="2880040">it</span> <span m="2880170">as</span> <span
  m="2880320">being</span> <span m="2880530">an</span> <span
  m="2880620">instance</span> <span m="2880890">and</span> <span
  m="2881160">it's</span> <span m="2881290">not,</span> <span
  m="2881550">and</span> <span m="2881670">these</span> <span
  m="2881880">are</span> <span m="2881970">the</span> <span
  m="2882090">false</span> <span m="2882390">negatives.</span> <span
  m="2882840">I</span> <span m="2882960">labeled</span> <span
  m="2883290">it</span> <span m="2883380">as</span> <span m="2883560">not</span>
  <span m="2883800">being</span> <span m="2883980">an</span> <span
  m="2884070">instance,</span> <span m="2884520">and</span> <span
  m="2884670">it</span> <span m="2884790">is.</span> <span
  m="2885680">And</span> <span m="2885930">an</span> <span
  m="2886020">easy</span> <span m="2886350">way</span> <span
  m="2886530">to</span> <span m="2886620">measure</span> <span
  m="2886960">it</span> <span m="2887160">is</span> <span m="2887310">to</span>
  <span m="2887430">look</span> <span m="2887730">at</span> <span
  m="2888450">the</span> <span m="2888540">correct</span> <span
  m="2888870">labels</span> <span m="2889620">over</span> <span
  m="2889830">all</span> <span m="2890040">of</span> <span
  m="2890090">the</span> <span m="2890190">labels.</span> <span
  m="2891390">The</span> <span m="2891480">true</span> <span
  m="2891660">positives</span> <span m="2892260">and</span> <span
  m="2892380">the</span> <span m="2892470">true</span> <span
  m="2892830">negatives,</span> <span m="2893040">the</span> <span
  m="2893130">ones</span> <span m="2893340">I</span> <span
  m="2893400">got</span> <span m="2893580">right.</span> <span
  m="2894820">And</span> <span m="2895010">in</span> <span
  m="2895110">that</span> <span m="2895290">case,</span> <span
  m="2896080">both</span> <span m="2896280">models</span> <span
  m="2896610">come</span> <span m="2896820">up</span> <span
  m="2897000">with</span> <span m="2897930">a</span> <span m="2897990">value
  of</span> <span m="2898360">0.7.</span></p><p><span m="2899980">So</span>
  <span m="2900130">which</span> <span m="2900340">one is</span> <span
  m="2900550">better?</span> <span m="2900820">Well,</span> <span
  m="2901000">I</span> <span m="2901090">should</span> <span
  m="2901270">validate</span> <span m="2901780">that.</span> <span
  m="2901900">And</span> <span m="2901990">I'm</span> <span
  m="2902050">going</span> <span m="2902170">to</span> <span
  m="2902230">do</span> <span m="2902350">that</span> <span
  m="2902500">in</span> <span m="2902620">a</span> <span
  m="2902650">second</span> <span m="2902950">by</span> <span
  m="2903070">looking</span> <span m="2903340">at</span> <span
  m="2903430">other</span> <span m="2903640">data.</span> <span
  m="2905670">We</span> <span m="2905730">could</span> <span
  m="2905820">also</span> <span m="2906120">ask,</span> <span
  m="2906330">could</span> <span m="2906450">we</span> <span
  m="2906600">find</span> <span m="2906840">something</span> <span
  m="2907260">with</span> <span m="2907800">less</span> <span
  m="2908070">training</span> <span m="2908460">error?</span> <span
  m="2908660">This</span> <span m="2908880">is</span> <span
  m="2908970">only</span> <span m="2909240">getting</span> <span
  m="2909570">70%</span> <span m="2910410">right.</span> <span
  m="2911310">Not</span> <span m="2911520">great.</span> <span
  m="2913250">Well,</span> <span m="2913590">here is</span> <span
  m="2914090">a</span> <span m="2914150">more</span> <span
  m="2914330">complicated</span> <span m="2914960">model.</span> <span
  m="2916010">And</span> <span m="2916100">this</span> <span
  m="2916280">is</span> <span m="2916400">where</span> <span
  m="2916550">you</span> <span m="2916640">start</span> <span
  m="2916880">getting</span> <span m="2917150">worried</span> <span
  m="2917360">about</span> <span m="2917570">overfitting.</span> <span
  m="2918140">Now</span> <span m="2918380">what</span> <span
  m="2918530">I've</span> <span m="2918680">done,</span> <span
  m="2918890">is</span> <span m="2919040">I've</span> <span
  m="2919160">come</span> <span m="2919400">up</span> <span
  m="2919580">with</span> <span m="2919760">a</span> <span
  m="2919880">sequence</span> <span m="2920450">of</span> <span
  m="2920600">lines</span> <span m="2921710">that</span> <span
  m="2921830">separate</span> <span m="2922280">them.</span> <span
  m="2922430">So</span> <span m="2922610">everything</span> <span
  m="2923150">above</span> <span m="2923630">this</span> <span
  m="2923870">line,</span> <span m="2924230">I'm</span> <span
  m="2924350">going</span> <span m="2924530">to</span> <span
  m="2924590">say</span> <span m="2925260">is</span> <span m="2925430">a</span>
  <span m="2925490">Republican.</span> <span m="2926080">Everything</span> <span
  m="2926540">below</span> <span m="2926960">this</span> <span
  m="2927170">line,</span> <span m="2927410">I'm</span> <span
  m="2927500">going</span> <span m="2927620">to</span> <span
  m="2927680">say</span> <span m="2928430">is</span> <span m="2928550">a</span>
  <span m="2928640">Democrat.</span></p><p><span m="2928910">So</span> <span
  m="2929180">I'm</span> <span m="2929360">avoiding</span> <span
  m="2929870">that</span> <span m="2930140">one.</span> <span
  m="2930350">I'm</span> <span m="2930500">avoiding</span> <span
  m="2930950">that</span> <span m="2931130">one.</span> <span
  m="2931310">I'm</span> <span m="2931430">still</span> <span
  m="2931640">capturing</span> <span m="2932120">many</span> <span
  m="2932360">of</span> <span m="2932450">the</span> <span
  m="2932540">same</span> <span m="2932810">things.</span> <span
  m="2934340">And</span> <span m="2934370">in</span> <span
  m="2934460">this</span> <span m="2934730">case,</span> <span
  m="2936110">I</span> <span m="2936170">get</span> <span m="2936320">12</span>
  <span m="2936740">true</span> <span m="2936980">positives,</span> <span
  m="2937640">13</span> <span m="2938240">true</span> <span
  m="2938450">negatives,</span> <span m="2939140">and</span> <span
  m="2939260">only</span> <span m="2939500">5</span> <span
  m="2940250">false</span> <span m="2940520">positives.</span> <span
  m="2942080">And</span> <span m="2942200">that's</span> <span
  m="2942410">kind</span> <span m="2942650">of</span> <span
  m="2942740">nice.</span> <span m="2943000">You</span> <span
  m="2943070">can</span> <span m="2943190">see</span> <span
  m="2943370">the</span> <span m="2943490">5.</span> <span
  m="2943790">It's</span> <span m="2943970">those</span> <span
  m="2944330">five</span> <span m="2944720">red</span> <span
  m="2944990">ones</span> <span m="2945230">down</span> <span
  m="2945470">there.</span> <span m="2946040">It's</span> <span
  m="2946280">accuracy</span> <span m="2946580">is</span> <span
  m="2946880">0.833.</span> <span m="2949360">And</span> <span
  m="2949440">now,</span> <span m="2949740">if</span> <span m="2949860">I</span>
  <span m="2949980">apply</span> <span m="2950400">that</span> <span
  m="2950610">to</span> <span m="2950730">the</span> <span
  m="2950880">test</span> <span m="2951200">data,</span> <span
  m="2953530">I</span> <span m="2953590">get</span> <span m="2953830">an</span>
  <span m="2953950">OK</span> <span m="2954310">result.</span> <span
  m="2955596">It</span> <span m="2956020">has</span> <span m="2956230">an</span>
  <span m="2956320">accuracy</span> <span m="2956800">of</span> <span
  m="2956890">about</span> <span m="2957130">0.6.</span></p><p><span
  m="2959440">I</span> <span m="2959530">could</span> <span
  m="2959740">use</span> <span m="2959980">this</span> <span
  m="2960160">idea</span> <span m="2960430">to</span> <span
  m="2960550">try</span> <span m="2960760">and</span> <span
  m="2960850">generalize</span> <span m="2961330">to</span> <span
  m="2961420">say</span> <span m="2961630">could</span> <span
  m="2961870">I</span> <span m="2961930">come</span> <span m="2962140">up</span>
  <span m="2962290">with</span> <span m="2962410">a</span> <span
  m="2962500">better</span> <span m="2962770">model.</span> <span
  m="2963100">And</span> <span m="2963190">you're</span> <span
  m="2963280">going</span> <span m="2963400">to</span> <span
  m="2963460">see</span> <span m="2963610">that</span> <span
  m="2963790">next</span> <span m="2964060">time.</span> <span
  m="2965860">There</span> <span m="2966010">could</span> <span
  m="2966130">be</span> <span m="2966280">other</span> <span
  m="2966550">ways</span> <span m="2966850">in</span> <span
  m="2966940">which</span> <span m="2967150">I</span> <span
  m="2967270">measure</span> <span m="2967660">this.</span> <span
  m="2968050">And</span> <span m="2968140">I</span> <span
  m="2968230">want</span> <span m="2968380">to</span> <span
  m="2968440">use</span> <span m="2968620">this</span> <span
  m="2968830">as</span> <span m="2968950">the</span> <span
  m="2969070">last</span> <span m="2969400">example.</span> <span
  m="2969860">Another</span> <span m="2970270">good</span> <span
  m="2970540">measure</span> <span m="2971000">we</span> <span
  m="2971020">use</span> <span m="2971260">is</span> <span
  m="2971380">called</span> <span m="2971590">PPV,</span> <span
  m="2973720">Positive</span> <span m="2974260">Predictive</span> <span
  m="2974740">Value</span> <span m="2975820">which</span> <span
  m="2976060">is</span> <span m="2976210">how</span> <span
  m="2976540">many</span> <span m="2976810">true</span> <span
  m="2977140">positives</span> <span m="2977890">do</span> <span
  m="2978070">I</span> <span m="2978160">come</span> <span m="2978400">up</span>
  <span m="2978580">with</span> <span m="2978935">out</span> <span
  m="2979290">of</span> <span m="2979480">all</span> <span
  m="2979660">the</span> <span m="2979780">things</span> <span
  m="2980230">I</span> <span m="2980350">labeled</span> <span
  m="2980980">positively.</span> <span m="2982580">And</span> <span
  m="2982780">in</span> <span m="2982900">this</span> <span
  m="2983010">solid</span> <span m="2983470">model,</span> <span
  m="2984100">in</span> <span m="2984280">the</span> <span
  m="2984370">dashed</span> <span m="2984790">line,</span> <span
  m="2985630">I</span> <span m="2985760">can</span> <span m="2985830">get</span>
  <span m="2986200">values</span> <span m="2986560">about</span> <span
  m="2986770">0.57.</span> <span m="2988120">The</span> <span
  m="2988210">complex</span> <span m="2988720">model</span> <span
  m="2989080">on</span> <span m="2989200">the</span> <span
  m="2989290">training</span> <span m="2989650">data</span> <span
  m="2989890">is</span> <span m="2990010">better.</span> <span
  m="2990500">And</span> <span m="2990840">then</span> <span
  m="2991180">the</span> <span m="2991270">testing</span> <span
  m="2991660">data</span> <span m="2991870">is</span> <span
  m="2992050">even</span> <span m="2992410">stronger.</span></p><p><span
  m="2993960">And</span> <span m="2994050">finally,</span> <span
  m="2994440">two</span> <span m="2994710">other</span> <span
  m="2994950">examples</span> <span m="2995490">are</span> <span
  m="2995550">called</span> <span m="2995820">sensitivity</span> <span
  m="2996810">and</span> <span m="2996900">specificity.</span> <span
  m="2998850">Sensitivity</span> <span m="2999660">basically</span> <span
  m="3000290">tells</span> <span m="3000620">you</span> <span
  m="3000740">what</span> <span m="3000980">percentage</span> <span
  m="3001490">did</span> <span m="3001640">I</span> <span
  m="3001730">correctly</span> <span m="3002210">find.</span> <span
  m="3003610">And</span> <span m="3003710">specificity</span> <span
  m="3004520">said</span> <span m="3004790">what</span> <span
  m="3005000">percentage</span> <span m="3005510">did</span> <span
  m="3005660">I</span> <span m="3005750">correctly</span> <span
  m="3006230">reject.</span> <span m="3007700">And</span> <span
  m="3007820">I</span> <span m="3007880">show</span> <span
  m="3008210">you</span> <span m="3008330">this</span> <span
  m="3008540">because</span> <span m="3008930">this</span> <span
  m="3009170">is</span> <span m="3009290">where</span> <span
  m="3009470">the</span> <span m="3009560">trade-off</span> <span
  m="3009980">comes</span> <span m="3010310">in.</span> <span
  m="3012240">If</span> <span m="3012350">sensitivity</span> <span
  m="3013040">is</span> <span m="3013130">how</span> <span
  m="3013280">many</span> <span m="3013460">did</span> <span
  m="3013610">I</span> <span m="3013670">correctly</span> <span
  m="3014210">label</span> <span m="3014840">out</span> <span
  m="3015050">of</span> <span m="3015170">those</span> <span
  m="3015425">that</span> <span m="3015680">I</span> <span
  m="3015770">both</span> <span m="3015980">correctly</span> <span
  m="3016400">labeled</span> <span m="3017020">and</span> <span
  m="3017420">incorrectly</span> <span m="3018080">labeled</span> <span
  m="3019070">as</span> <span m="3019250">being</span> <span
  m="3019490">negative,</span> <span m="3020450">how</span> <span
  m="3020570">many</span> <span m="3020740">them</span> <span
  m="3020910">did</span> <span m="3021000">I</span> <span
  m="3021110">correctly</span> <span m="3021560">label</span> <span
  m="3021840">as</span> <span m="3021950">being</span> <span
  m="3022130">the</span> <span m="3022220">kind</span> <span
  m="3022460">that</span> <span m="3022580">I</span> <span
  m="3022670">want?</span> <span m="3023980">I</span> <span
  m="3024130">can</span> <span m="3024310">make</span> <span
  m="3024520">sensitivity</span> <span m="3025910">1.</span></p><p><span
  m="3027310">Label</span> <span m="3027760">everything</span> <span
  m="3028180">is</span> <span m="3028270">the</span> <span
  m="3028390">thing</span> <span m="3028570">I'm</span> <span
  m="3028660">looking</span> <span m="3028900">for.</span> <span
  m="3030090">Great.</span> <span m="3030710">Everything</span> <span
  m="3030980">is</span> <span m="3031180">correct.</span> <span
  m="3032140">But</span> <span m="3032980">the</span> <span
  m="3033070">specificity</span> <span m="3034390">will</span> <span
  m="3034540">be</span> <span m="3034720">0.</span> <span
  m="3035740">Because</span> <span m="3036070">I'll</span> <span
  m="3036220">have</span> <span m="3036430">a</span> <span
  m="3036490">bunch</span> <span m="3036760">of</span> <span
  m="3036820">things</span> <span m="3037090">incorrectly</span> <span
  m="3037630">labeled.</span> <span m="3039020">I</span> <span
  m="3039200">could</span> <span m="3039380">make</span> <span
  m="3039590">the</span> <span m="3039710">specificity</span> <span
  m="3041000">1,</span> <span m="3042170">reject</span> <span
  m="3042650">everything.</span> <span m="3043460">Say</span> <span
  m="3043670">nothing</span> <span m="3044090">as</span> <span
  m="3044210">an</span> <span m="3044300">instance.</span> <span
  m="3045410">True</span> <span m="3045590">negatives</span> <span
  m="3046070">goes</span> <span m="3046340">to</span> <span
  m="3050720">1,</span> <span m="3050960">and</span> <span
  m="3051050">I'm</span> <span m="3051200">in</span> <span m="3051320">a</span>
  <span m="3051380">great</span> <span m="3051620">place</span> <span
  m="3051920">there,</span> <span m="3052070">but</span> <span
  m="3052220">my</span> <span m="3052340">sensitivity</span> <span
  m="3053300">goes</span> <span m="3053540">to</span> <span
  m="3053690">0.</span> <span m="3055170">I've</span> <span
  m="3055290">got</span> <span m="3055440">a</span> <span
  m="3055510">trade-off.</span> <span m="3056130">As</span> <span
  m="3056460">I</span> <span m="3056580">think</span> <span
  m="3056820">about</span> <span m="3057030">the</span> <span
  m="3057120">machine</span> <span m="3057510">learning</span> <span
  m="3057840">algorithm</span> <span m="3058230">I'm</span> <span
  m="3058320">using</span> <span m="3058680">and</span> <span
  m="3058760">my</span> <span m="3058950">choice</span> <span
  m="3059550">of</span> <span m="3059790">that</span> <span
  m="3060000">classifier,</span> <span m="3061170">I'm</span> <span
  m="3061350">going</span> <span m="3061500">to</span> <span
  m="3061590">see</span> <span m="3061800">a</span> <span
  m="3061860">trade</span> <span m="3062115">off</span> <span
  m="3062370">where</span> <span m="3062580">I</span> <span
  m="3062700">can</span> <span m="3063360">increase</span> <span
  m="3064590">specificity</span> <span m="3065550">at</span> <span
  m="3065640">the</span> <span m="3065760">cost</span> <span
  m="3066090">of</span> <span m="3066150">sensitivity</span> <span
  m="3066870">or</span> <span m="3066990">vice</span> <span
  m="3067260">versa.</span></p><p><span m="3068310">And</span> <span
  m="3068430">you'll</span> <span m="3068520">see</span> <span
  m="3068730">a</span> <span m="3068790">nice</span> <span
  m="3069060">technique</span> <span m="3069480">called</span> <span
  m="3069840">ROC</span> <span m="3070410">or</span> <span
  m="3070500">Receiver</span> <span m="3070950">Operator</span> <span
  m="3071430">Curve</span> <span m="3071730">that</span> <span
  m="3071850">gives</span> <span m="3072090">you</span> <span
  m="3072210">a</span> <span m="3072270">sense</span> <span
  m="3072570">of</span> <span m="3072660">how</span> <span
  m="3072750">you</span> <span m="3072900">want</span> <span
  m="3073050">to</span> <span m="3073110">deal</span> <span
  m="3073320">with</span> <span m="3073470">that.</span> <span
  m="3075080">And</span> <span m="3075170">with</span> <span
  m="3075290">that,</span> <span m="3075440">we'll</span> <span
  m="3075530">see</span> <span m="3075680">you</span> <span
  m="3075770">next</span> <span m="3075950">time.</span> <span
  m="3076200">We'll</span> <span m="3076300">take</span> <span
  m="3076370">your</span> <span m="3076460">question</span> <span
  m="3076790">off</span> <span m="3076970">line</span> <span
  m="3077180">if</span> <span m="3077240">you</span> <span
  m="3077300">don't</span> <span m="3077450">mind,</span> <span
  m="3077600">because</span> <span m="3077750">I've</span> <span
  m="3077840">run</span> <span m="3078020">over</span> <span
  m="3078230">time.</span> <span m="3078680">But</span> <span
  m="3078770">we'll</span> <span m="3078920">see you</span> <span
  m="3079130">next</span> <span m="3079340">time</span> <span
  m="3079550">where</span> <span m="3079670">Professor</span> <span
  m="3080060">Guttag</span> <span m="3080380">will</span> <span
  m="3080510">show</span> <span m="3080720">you</span> <span
  m="3080810">examples</span> <span m="3081320">of</span> <span
  m="3081380">this.</span></p><p>&nbsp;</p>
embedded_media:
  - uid: 50cc2a1a516db788a585c6eec1c83b29
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: h0e2HAPTGF4
  - uid: a1d344b033c96c432dd1566393b06c1b
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/h0e2HAPTGF4/default.jpg'
  - uid: 7098a7e9236bce837cf586b5763f6c6e
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: h0e2HAPTGF4
  - uid: c2f885e123057a7418c9b809ac137ae5
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: h0e2HAPTGF4.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/lecture-videos/lecture-11-introduction-to-machine-learning/h0e2HAPTGF4.srt
  - uid: c74647368fed9529ffc97b943424233e
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: h0e2HAPTGF4.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/lecture-videos/lecture-11-introduction-to-machine-learning/h0e2HAPTGF4.pdf
  - uid: de19425af321016e26c2e6a93efd1f2c
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: b70e0241418de112f5b9d26ec1f4a91c
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 83207431cbb29c81e341fbcbfe099390
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1235164695'
  - uid: c60c5f95650325d1b8393e8b9a3d55bb
    parent_uid: dd779f84f03099cfa408202267bcd832
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.0002F16/MIT6_0002F16_lec11_300k.mp4'
type: courses
layout: video
---