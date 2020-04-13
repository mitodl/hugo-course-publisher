---
title: 'Lecture 34: Distance Matrices, Procrustes Problem'
uid: f7538bc908587cb80a7b3788d90a46d1
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-34-distance-matrices-procrustes-problem-first-project
short_url: lecture-34-distance-matrices-procrustes-problem-first-project
inline_embed_id: 61295500lecture34distancematricesprocrustesproblemfirstproject92565727
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>This lecture continues the review of
  distance matrices. Professor Strang then introduces the Procrustes problem,
  which looks for the orthogonal matrix that swings one set of vectors as nearly
  as possible onto a second set.</p> <h2 class="subhead">Summary</h2><p>Distance
  problem: Find positions \(x\) from distances between them.<br /> Necessary and
  sufficient: Distances satisfy triangle inequality.<br /> Procrustes: Given
  \(n\) vectors \(x\) and \(n\) vectors \(y\).<br /> Find the orthogonal matrix
  \(Q\) so that \(Qx\)'s are closest to \(y\)'s.</p> <p>Related sections in
  textbook: IV.9 and IV.10</p> <p><strong>Instructor:</strong> Prof. Gilbert
  Strang</p>
related_resources_text: ''
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">OpenCourseWare</span> <span
  m="7520">continue</span> <span m="8029">to</span> <span m="8180">offer</span>
  <span m="8510">high</span> <span m="8720">quality</span> <span
  m="9200">educational</span> <span m="9860">resources</span> <span
  m="10430">for</span> <span m="10550">free.</span> <span m="11610">To</span>
  <span m="11630">make</span> <span m="11840">a</span> <span
  m="11900">donation,</span> <span m="12680">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17180">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="22520">GILBERT STRANG:</span> <span m="22765">OK.</span> <span
  m="23010">Just</span> <span m="23310">as</span> <span m="23460">we're</span>
  <span m="26130">getting</span> <span m="27810">started,</span> <span
  m="28380">I</span> <span m="28770">thought</span> <span m="29070">I'd</span>
  <span m="30030">add</span> <span m="30360">a</span> <span m="30600">few</span>
  <span m="30930">words</span> <span m="32520">about</span> <span
  m="32850">a</span> <span m="32910">question</span> <span m="33330">that</span>
  <span m="33450">came</span> <span m="33720">up</span> <span
  m="33870">after</span> <span m="34200">class.</span> <span
  m="35550">Suppose,</span> <span m="36940">in</span> <span
  m="36990">that</span> <span m="38430">discussion</span> <span
  m="39060">last</span> <span m="39390">time,</span> <span
  m="40710">where</span> <span m="41010">you</span> <span m="41190">were</span>
  <span m="42150">given</span> <span m="42540">three--</span> <span
  m="44430">you</span> <span m="44580">were</span> <span m="44730">given</span>
  <span m="45090">a</span> <span m="45150">distance</span> <span
  m="45750">matrix--</span> <span m="47220">you</span> <span
  m="47340">were</span> <span m="47460">given</span> <span m="47850">the</span>
  <span m="48000">distance</span> <span m="48570">between</span> <span
  m="50100">x1</span> <span m="50520">and</span> <span m="50670">x2,</span>
  <span m="51420">between</span> <span m="51870">x2</span> <span
  m="52260">and</span> <span m="52350">x3,</span> <span m="52980">and</span>
  <span m="53100">between</span> <span m="53550">x1</span> <span
  m="53970">and</span> <span m="54120">x3,</span> <span m="54630">and</span>
  <span m="54750">you</span> <span m="54840">wanted</span> <span
  m="55170">to</span> <span m="56010">find</span> <span m="56370">points</span>
  <span m="56910">that</span> <span m="57990">satisfied</span> <span
  m="58710">that.</span></p><p><span m="60330">Well,</span> <span
  m="61380">we're</span> <span m="62130">going</span> <span m="62280">to</span>
  <span m="62340">fail</span> <span m="62820">on</span> <span
  m="62970">this</span> <span m="63210">example,</span> <span
  m="64260">because</span> <span m="64769">if</span> <span m="64920">the</span>
  <span m="65069">distance</span> <span m="66330">here</span> <span
  m="66600">is</span> <span m="66750">1,</span> <span m="67830">the</span> <span
  m="67920">distance</span> <span m="68370">here</span> <span
  m="68640">is</span> <span m="68790">1,</span> <span m="69150">then</span>
  <span m="69420">by</span> <span m="69660">the</span> <span
  m="69810">triangle</span> <span m="70490">inequality,</span> <span
  m="72900">the</span> <span m="73050">distance</span> <span
  m="73560">from</span> <span m="73770">x1</span> <span m="74220">to</span>
  <span m="74370">x3</span> <span m="74850">could</span> <span
  m="75060">not</span> <span m="75270">be</span> <span m="75420">more</span>
  <span m="75660">than</span> <span m="75840">2.</span> <span
  m="76980">And</span> <span m="77100">when</span> <span m="77340">we</span>
  <span m="77490">square</span> <span m="77940">it,</span> <span
  m="78070">it</span> <span m="78240">could</span> <span m="78420">not</span>
  <span m="78630">be</span> <span m="78750">more</span> <span
  m="78990">than</span> <span m="79140">4.</span> <span m="79890">And</span>
  <span m="80040">here</span> <span m="80250">it's</span> <span
  m="80820">6.</span> <span m="81690">So</span> <span m="81870">what's</span>
  <span m="82170">going</span> <span m="82310">to</span> <span
  m="82410">happen?</span> <span m="82800">What</span> <span
  m="83010">goes</span> <span m="83280">wrong</span> <span m="83730">in</span>
  <span m="83850">that</span> <span m="84060">case?</span> <span
  m="86160">Yeah.</span> <span m="86560">I</span> <span m="87240">hadn't</span>
  <span m="88530">commented</span> <span m="89160">on</span> <span
  m="89340">that,</span> <span m="89640">and</span> <span m="89790">I'm</span>
  <span m="89940">not</span> <span m="90240">sure</span> <span
  m="90660">that</span> <span m="93270">the</span> <span m="93930">paper</span>
  <span m="94410">that</span> <span m="94560">I</span> <span
  m="94710">referenced</span> <span m="96350">does so.</span></p><p><span
  m="98460">So</span> <span m="98670">I</span> <span m="98730">had</span> <span
  m="98880">to</span> <span m="99030">do</span> <span m="99240">a</span> <span
  m="99300">little</span> <span m="100200">search</span> <span
  m="100590">back</span> <span m="100950">in</span> <span m="101070">the</span>
  <span m="101160">literature,</span> <span m="101760">because</span> <span
  m="102810">people</span> <span m="103140">couldn't</span> <span
  m="103650">overlook</span> <span m="104310">this</span> <span
  m="104880">problem.</span> <span m="105430">So</span> <span
  m="105570">this</span> <span m="105840">is</span> <span m="106020">the</span>
  <span m="106650">triangle</span> <span m="111150">inequality</span> <span
  m="111910">fails.</span> <span m="117340">And</span> <span
  m="117590">it's</span> <span m="117800">not</span> <span
  m="118220">going</span> <span m="118380">to</span> <span
  m="118820">help</span> <span m="119180">to</span> <span m="119360">go</span>
  <span m="119630">into</span> <span m="119930">10</span> <span
  m="120230">dimensions,</span> <span m="121670">because</span> <span
  m="121960">the</span> <span m="122080">triangle</span> <span
  m="122540">inequalities</span> <span m="123620">doesn't</span> <span
  m="125960">change.</span> <span m="127700">And</span> <span
  m="128000">it's</span> <span m="128120">still</span> <span
  m="128389">there</span> <span m="128630">in</span> <span m="128750">10</span>
  <span m="129020">dimensions.</span> <span m="129900">And</span> <span
  m="130009">we're</span> <span m="130250">still</span> <span
  m="130880">failing.</span> <span m="132170">So</span> <span
  m="132350">what</span> <span m="132680">happens?</span> <span
  m="133160">Well,</span> <span m="133370">what</span> <span
  m="133640">could</span> <span m="133910">happen?</span> <span
  m="135410">Do</span> <span m="135560">you</span> <span
  m="135620">remember?</span></p><p><span m="136250">And</span> <span
  m="136430">you'll</span> <span m="136640">have</span> <span
  m="136850">to</span> <span m="136970">remind</span> <span
  m="137480">me,</span> <span m="138350">the</span> <span m="139130">key</span>
  <span m="139700">equation.</span> <span m="140360">You</span> <span
  m="140420">remember,</span> <span m="140780">we</span> <span
  m="140930">had</span> <span m="141170">an</span> <span
  m="141320">equation</span> <span m="142880">connecting</span> <span
  m="148010">the--</span> <span m="149680">so</span> <span
  m="150350">what</span> <span m="150560">is</span> <span m="150740">the</span>
  <span m="150860">matrix</span> <span m="151410">D</span> <span
  m="151850">for</span> <span m="152030">this</span> <span
  m="152360">problem?</span> <span m="153500">So</span> <span
  m="153710">D</span> <span m="154270">is--</span> <span m="155698">this
  is</span> <span m="156650">a</span> <span m="156770">3</span> <span
  m="157040">by</span> <span m="157250">3</span> <span m="157520">matrix</span>
  <span m="159410">with</span> <span m="159680">these</span> <span
  m="160100">distances</span> <span m="160880">squared.</span> <span
  m="161630">And</span> <span m="161750">it</span> <span m="161870">was</span>
  <span m="162440">convenient</span> <span m="163040">to</span> <span
  m="163190">use</span> <span m="163520">distances</span> <span
  m="164150">squared,</span> <span m="164600">because</span> <span
  m="164960">that's</span> <span m="165200">what</span> <span
  m="165830">comes</span> <span m="166220">into</span> <span
  m="167360">the</span> <span m="167960">next</span> <span
  m="168320">steps.</span> <span m="169340">So</span> <span m="169580">of</span>
  <span m="169670">course,</span> <span m="170000">the</span> <span
  m="170120">distance</span> <span m="170630">from</span> <span
  m="170870">each</span> <span m="171200">x</span> <span m="171530">to</span>
  <span m="171740">itself</span> <span m="173030">is</span> <span
  m="173150">zero.</span></p><p><span m="174450">The</span> <span
  m="174650">distance</span> <span m="175130">from</span> <span
  m="175310">x</span> <span m="176420">distance</span> <span
  m="176840">squared</span> <span m="177500">was</span> <span
  m="177920">that.</span> <span m="178970">This</span> <span
  m="179300">one</span> <span m="179720">was</span> <span
  m="180050">that.</span> <span m="180980">But</span> <span
  m="181160">this</span> <span m="181430">one</span> <span m="181700">is</span>
  <span m="181850">6.</span> <span m="183630">OK.</span> <span
  m="186260">So</span> <span m="186470">that's</span> <span
  m="186740">the</span> <span m="186860">distance</span> <span
  m="187400">matrix.</span> <span m="188570">And</span> <span
  m="188720">we</span> <span m="188870">would</span> <span
  m="189020">like</span> <span m="189290">to</span> <span
  m="189410">find--</span> <span m="191030">the</span> <span
  m="191240">job</span> <span m="191600">was</span> <span m="191990">to</span>
  <span m="192140">find--</span> <span m="193430">and</span> <span
  m="193610">I'm</span> <span m="193790">just</span> <span
  m="194030">going</span> <span m="194120">to</span> <span
  m="194240">write</span> <span m="194510">down,</span> <span
  m="194780">we</span> <span m="194930">cannot</span> <span
  m="195410">find</span> <span m="199010">x1,</span> <span m="199880">x2,</span>
  <span m="200360">and</span> <span m="200480">x3</span> <span
  m="203900">to</span> <span m="204760">match</span> <span
  m="205230">those</span> <span m="205520">distances.</span> <span
  m="206760">So</span> <span m="206870">what</span> <span m="207080">goes</span>
  <span m="207350">wrong?</span> <span m="207650">Well,</span> <span
  m="207830">there's</span> <span m="208040">only</span> <span
  m="208280">one</span> <span m="208520">thing</span> <span
  m="208760">that</span> <span m="208970">could</span> <span
  m="209210">go</span> <span m="209420">wrong.</span> <span
  m="210320">When</span> <span m="210590">you</span> <span
  m="211040">connect</span> <span m="211520">this</span> <span
  m="211760">distance</span> <span m="212300">matrix</span> <span
  m="212850">D</span> <span m="213830">to</span> <span m="214100">the</span>
  <span m="214220">matrix</span> <span m="215420">X</span> <span
  m="215720">transpose</span> <span m="216500">X--</span> <span
  m="216920">you</span> <span m="217010">remember</span> <span
  m="217400">the</span> <span m="217580">position</span> <span
  m="218180">matrix--</span> <span m="218780">maybe</span> <span
  m="219110">I</span> <span m="219230">called</span> <span m="219620">it</span>
  <span m="220220">G?</span> <span m="222210">This</span> <span
  m="224100">is</span> <span m="224280">giving--</span> <span
  m="225390">so</span> <span m="225630">Gij</span> <span m="228120">is</span>
  <span m="228420">the</span> <span m="228840">dot</span> <span
  m="229140">product</span> <span m="230280">of</span> <span
  m="230520">xi</span> <span m="231210">with</span> <span
  m="231450">xj.</span></p><p><span m="234540">Make</span> <span
  m="234840">that</span> <span m="234990">into</span> <span m="235320">a</span>
  <span m="235550">j.</span> <span m="237270">Thank</span> <span
  m="237690">you.</span> <span m="243180">So</span> <span m="244500">Gij</span>
  <span m="245250">is</span> <span m="245400">the</span> <span
  m="245490">matrix</span> <span m="246030">of</span> <span
  m="246150">dot</span> <span m="246390">product.</span> <span
  m="248340">And</span> <span m="250350">the</span> <span
  m="250500">great</span> <span m="250860">thing</span> <span
  m="251190">was</span> <span m="251700">that</span> <span m="251880">we</span>
  <span m="252150">can</span> <span m="253440">discover</span> <span
  m="254190">what</span> <span m="254400">that</span> <span
  m="254610">matrix--</span> <span m="255070">that</span> <span
  m="255240">matrix</span> <span m="255720">G</span> <span
  m="256110">comes</span> <span m="256470">directly</span> <span
  m="256950">from</span> <span m="257190">D--</span> <span
  m="258320">comes</span> <span m="258660">directly</span> <span
  m="259140">from</span> <span m="259380">D.</span> <span m="260130">And</span>
  <span m="260339">of</span> <span m="260459">course,</span> <span
  m="260820">what</span> <span m="261029">do</span> <span m="261089">we</span>
  <span m="261240">know</span> <span m="261480">about</span> <span
  m="261779">this</span> <span m="262019">matrix</span> <span
  m="262580">of</span> <span m="262680">cross</span> <span
  m="263010">products?</span> <span m="263950">We</span> <span
  m="264030">know</span> <span m="264330">that</span> <span m="264600">is</span>
  <span m="264810">positive</span> <span m="266430">semidefinite.</span> <span
  m="273530">So</span> <span m="273710">what</span> <span m="273950">goes</span>
  <span m="274190">wrong?</span> <span m="275270">Well,</span> <span
  m="275750">just</span> <span m="276050">in</span> <span m="276200">a</span>
  <span m="276260">word,</span> <span m="277670">when</span> <span
  m="277850">we</span> <span m="278330">write</span> <span m="278630">out</span>
  <span m="278780">that</span> <span m="279020">equation</span> <span
  m="280250">and</span> <span m="280400">discover</span> <span
  m="280850">what</span> <span m="281030">G</span> <span m="281420">is,</span>
  <span m="282960">if</span> <span m="283140">the</span> <span
  m="283260">triangle</span> <span m="283740">inequality</span> <span
  m="284430">fails,</span> <span m="285690">we</span> <span
  m="285870">learn</span> <span m="286260">that</span> <span m="286545">G</span>
  <span m="286830">doesn't</span> <span m="288300">come</span> <span
  m="288540">out</span> <span m="288690">positive</span> <span
  m="289140">definite.</span></p><p><span m="291650">That's</span> <span
  m="293230">really</span> <span m="293590">all</span> <span m="293830">I</span>
  <span m="294070">want</span> <span m="294400">to</span> <span
  m="294490">say.</span> <span m="294760">And</span> <span m="294910">I</span>
  <span m="295000">could</span> <span m="295690">push</span> <span
  m="295960">through</span> <span m="296230">the</span> <span
  m="296380">example.</span> <span m="297670">G</span> <span
  m="298030">will</span> <span m="298240">not</span> <span
  m="298570">come</span> <span m="298840">out</span> <span
  m="299020">positive</span> <span m="299470">definite</span> <span
  m="300070">if</span> <span m="300340">D--</span> <span m="300820">if</span>
  <span m="301000">that's</span> <span m="301360">D</span> <span
  m="302680">because</span> <span m="303910">it</span> <span
  m="304060">can't.</span> <span m="305110">If</span> <span m="305230">it</span>
  <span m="305320">came</span> <span m="305620">out</span> <span
  m="305770">positive</span> <span m="306220">definite,</span> <span
  m="307420">then</span> <span m="307690">we</span> <span
  m="307900">could</span> <span m="308230">find</span> <span
  m="308650">an</span> <span m="308770">X.</span> <span m="309820">So</span>
  <span m="310030">if</span> <span m="310180">we</span> <span
  m="310300">had</span> <span m="310510">the</span> <span m="310660">G,</span>
  <span m="311110">then</span> <span m="311350">the</span> <span
  m="311440">final</span> <span m="311830">step,</span> <span
  m="312250">you</span> <span m="312380">remember,</span> <span
  m="312850">is</span> <span m="313000">to</span> <span m="313840">find</span>
  <span m="314140">an</span> <span m="314260">X.</span> <span
  m="314730">Well</span> <span m="315010">we</span> <span m="315190">know</span>
  <span m="315550">that</span> <span m="315760">if G</span> <span
  m="316180">is</span> <span m="316330">positive</span> <span
  m="316840">semidefinite,</span> <span m="319360">there</span> <span
  m="319630">are</span> <span m="319750">multiple</span> <span
  m="320230">ways</span> <span m="320650">to</span> <span m="320800">find</span>
  <span m="321160">an</span> <span m="321310">X.</span></p><p><span
  m="324970">This</span> <span m="325480">is</span> <span
  m="326320">positive</span> <span m="326770">semidefinite</span> <span
  m="327490">matrices</span> <span m="328220">is</span> <span
  m="328540">what</span> <span m="328780">you</span> <span m="328900">get</span>
  <span m="329170">out</span> <span m="329320">of</span> <span
  m="329470">X</span> <span m="329680">transpose</span> <span
  m="330310">X's.</span> <span m="331420">And</span> <span m="331840">we</span>
  <span m="332080">can</span> <span m="332290">find</span> <span
  m="332650">an</span> <span m="332800">x</span> <span m="333100">given</span>
  <span m="333400">a</span> <span m="333490">G.</span> <span
  m="333850">We</span> <span m="334000">can</span> <span m="334180">find</span>
  <span m="334480">G</span> <span m="334810">given</span> <span
  m="335140">an</span> <span m="335320">x.</span> <span m="336160">So</span>
  <span m="337030">it</span> <span m="337180">has</span> <span
  m="337510">to</span> <span m="337600">be</span> <span m="338440">that</span>
  <span m="341140">this</span> <span m="342550">won't</span> <span
  m="344830">be</span> <span m="346150">true--</span> <span
  m="348390">that</span> <span m="348650">the</span> <span
  m="348760">matrix</span> <span m="349270">G</span> <span
  m="349660">that</span> <span m="349840">comes</span> <span
  m="350170">out</span> <span m="350350">of</span> <span m="350440">that</span>
  <span m="350620">equation</span> <span m="351580">will</span> <span
  m="351820">turn</span> <span m="352150">out</span> <span m="352360">not</span>
  <span m="352660">to</span> <span m="352780">be</span> <span
  m="352990">positive</span> <span m="353500">definite.</span> <span
  m="354370">So</span> <span m="354780">it's</span> <span
  m="355390">really</span> <span m="355780">quite</span> <span
  m="356140">nice.</span> <span m="357350">It's</span> <span m="357430">a</span>
  <span m="357490">beautiful</span> <span m="357970">little</span> <span
  m="358240">bit</span> <span m="358450">of</span> <span
  m="358510">mathematics,</span> <span m="359290">that</span> <span
  m="360070">if,</span> <span m="361810">and</span> <span m="361990">only</span>
  <span m="362410">if,</span> <span m="362800">the</span> <span
  m="362980">triangle</span> <span m="363550">inequality</span> <span
  m="364270">is</span> <span m="364360">satisfied</span> <span
  m="365740">by</span> <span m="366010">these</span> <span
  m="366400">numbers--</span> <span m="368140">if</span> <span
  m="368410">and</span> <span m="368530">only</span> <span
  m="368890">if--</span> <span m="369730">then</span> <span
  m="369970">the</span> <span m="370090">matrix</span> <span
  m="372140">in</span> <span m="372400">the</span> <span m="372670">D</span>
  <span m="372970">matrix--</span> <span m="374300">then</span> <span
  m="374500">the</span> <span m="374650">G</span> <span m="375010">matrix</span>
  <span m="375590">that</span> <span m="375730">comes</span> <span
  m="376090">out</span> <span m="376300">of</span> <span m="376390">this</span>
  <span m="376660">equation--</span> <span m="377300">which</span> <span
  m="377410">I</span> <span m="377560">haven't</span> <span
  m="377860">written--</span> <span m="378730">is</span> <span
  m="379000">positive</span> <span m="379510">semidefinite.</span></p><p><span
  m="381360">If</span> <span m="381520">the</span> <span
  m="381650">triangle</span> <span m="381920">inequality</span> <span
  m="382530">is</span> <span m="382710">OK,</span> <span m="383640">we</span>
  <span m="383760">can</span> <span m="383940">find</span> <span
  m="384230">the</span> <span m="384330">points.</span> <span
  m="386160">If</span> <span m="386310">the</span> <span
  m="386450">triangle</span> <span m="386890">inequality</span> <span
  m="387570">is</span> <span m="387720">violated--</span> <span
  m="388350">like</span> <span m="388590">here--</span> <span
  m="390600">then</span> <span m="390960">the</span> <span
  m="391470">matrix</span> <span m="392130">G</span> <span m="392400">is</span>
  <span m="392520">not</span> <span m="392850">positive</span> <span
  m="393530">semidefinite,</span> <span m="394260">has</span> <span
  m="394500">negative</span> <span m="395010">eigenvalues,</span> <span
  m="395790">and</span> <span m="395940">we</span> <span
  m="396450">cannot</span> <span m="396960">find</span> <span
  m="397270">the</span> <span m="397360">point.</span> <span
  m="398070">Yeah.</span> <span m="399060">I</span> <span
  m="399360">could</span> <span m="399610">recall</span> <span
  m="400230">the</span> <span m="400410">G</span> <span m="400680">matrix</span>
  <span m="401250">but--</span> <span m="402120">the</span> <span
  m="402360">G</span> <span m="402750">equation,</span> <span
  m="403440">but</span> <span m="407610">it's</span> <span
  m="407820">coming</span> <span m="408270">to</span> <span
  m="408450">you</span> <span m="408750">in</span> <span m="408950">the</span>
  <span m="409890">two</span> <span m="410130">page</span> <span
  m="412920">section</span> <span m="414000">that</span> <span
  m="414240">does</span> <span m="415740">distance</span> <span
  m="418200">matrices.</span> <span m="419250">OK.</span> <span
  m="420480">That's</span> <span m="420780">just--</span> <span
  m="422070">I</span> <span m="422160">should</span> <span
  m="422430">have</span> <span m="425190">made</span> <span m="425550">a</span>
  <span m="425610">point.</span> <span m="426740">It's</span> <span
  m="426900">nice</span> <span m="427140">to</span> <span m="427230">have</span>
  <span m="427350">specific</span> <span m="428010">numbers.</span></p><p><span
  m="429000">And</span> <span m="429300">I</span> <span m="429480">could</span>
  <span m="429660">get the</span> <span m="430140">specific</span> <span
  m="430770">numbers</span> <span m="431160">for</span> <span
  m="431340">G,</span> <span m="431820">and</span> <span m="431970">we</span>
  <span m="432150">would</span> <span m="432330">see,</span> <span
  m="432750">no</span> <span m="433020">way.</span> <span m="433380">It's</span>
  <span m="433500">not</span> <span m="433740">positive</span> <span
  m="434190">definite.</span> <span m="434960">OK.</span> <span
  m="435840">So</span> <span m="436020">that's</span> <span
  m="436320">just</span> <span m="436740">tidying</span> <span
  m="437250">up</span> <span m="437400">last</span> <span
  m="437730">time.</span> <span m="438990">I</span> <span m="439110">have</span>
  <span m="439290">another</span> <span m="440190">small</span> <span
  m="440610">problem</span> <span m="442500">to</span> <span
  m="442920">talk</span> <span m="443190">about,</span> <span
  m="443670">and</span> <span m="443850">then</span> <span m="444330">a</span>
  <span m="444390">big</span> <span m="444720">question</span> <span
  m="446400">of</span> <span m="446580">whether</span> <span
  m="448560">deep</span> <span m="448830">learning</span> <span
  m="449190">actually</span> <span m="449610">works.</span> <span
  m="450510">I</span> <span m="450630">had</span> <span m="450840">an</span>
  <span m="450990">email</span> <span m="452010">from</span> <span
  m="452250">an</span> <span m="452370">expert</span> <span
  m="452880">last</span> <span m="453240">night,</span> <span
  m="453600">which</span> <span m="454890">changed</span> <span
  m="455370">my</span> <span m="455610">view</span> <span m="455880">of</span>
  <span m="456000">the</span> <span m="456120">world</span> <span
  m="457950">about</span> <span m="458310">that</span> <span
  m="459150">question,</span> <span m="459930">as</span> <span
  m="460140">you</span> <span m="460260">can</span> <span
  m="460470">imagine.</span> <span m="463390">The</span> <span
  m="463590">change</span> <span m="464070">in</span> <span m="464250">my</span>
  <span m="464520">world</span> <span m="465000">was,</span> <span
  m="466130">I</span> <span m="466440">had</span> <span
  m="466560">thought</span> <span m="467880">the</span> <span
  m="467970">answer</span> <span m="468330">was</span> <span
  m="468540">yes,</span> <span m="469170">and</span> <span m="469380">I</span>
  <span m="469560">now</span> <span m="469860">think</span> <span
  m="470190">the</span> <span m="470370">answer</span> <span
  m="470760">is</span> <span m="470940">no.</span> <span m="472140">So</span>
  <span m="472470">that's</span> <span m="472770">like</span> <span
  m="473770">rather</span> <span m="474180">a</span> <span m="474240">big</span>
  <span m="474540">issue</span> <span m="474900">for</span> <span
  m="475110">18.065.</span></p><p><span m="476820">But</span> <span
  m="477280">we'll--</span> <span m="477660">let's</span> <span
  m="477870">see</span> <span m="478140">about</span> <span
  m="478380">that</span> <span m="478590">later.</span> <span
  m="479340">OK.</span> <span m="483750">Now</span> <span
  m="484200">Procrustes'</span> <span m="485010">problem.</span> <span
  m="486380">So</span> <span m="486610">Procrustes--</span> <span
  m="488050">and</span> <span m="488580">it's</span> <span
  m="488910">included</span> <span m="489540">in</span> <span
  m="489660">the</span> <span m="489780">notes--</span> <span
  m="490920">that</span> <span m="491130">name</span> <span
  m="491490">comes</span> <span m="491820">from</span> <span m="492090">a</span>
  <span m="492120">Greek</span> <span m="492480">myth.</span> <span
  m="492930">Are</span> <span m="493020">you</span> <span m="493170">guys</span>
  <span m="493530">into</span> <span m="493800">Greek</span> <span
  m="494190">myths?</span> <span m="496800">So</span> <span
  m="498390">what</span> <span m="498570">was</span> <span m="498780">the</span>
  <span m="498900">story</span> <span m="499320">of</span> <span
  m="499410">Procrustes?</span> <span m="503280">Was</span> <span
  m="503460">it</span> <span m="503550">Procrustes</span> <span
  m="504270">who</span> <span m="508140">adjusted</span> <span
  m="508800">the</span> <span m="508980">length</span> <span
  m="509550">of</span> <span m="509760">his--</span> <span m="510540">so</span>
  <span m="511170">he</span> <span m="511320">had</span> <span
  m="511470">a</span> <span m="511500">special</span> <span
  m="511920">bed.</span> <span m="514179">Procrustes'</span> <span
  m="514900">bed--</span> <span m="515559">certain</span> <span
  m="515950">length.</span> <span m="516850">And</span> <span
  m="516970">then,</span> <span m="517150">he</span> <span m="517270">had</span>
  <span m="517390">visitors</span> <span m="518049">coming.</span> <span
  m="518950">And</span> <span m="519159">instead</span> <span
  m="519850">of</span> <span m="520210">adjusting</span> <span
  m="520809">the</span> <span m="520900">length</span> <span
  m="521289">of</span> <span m="521409">the</span> <span m="521530">bed</span>
  <span m="522730">to</span> <span m="523240">fit</span> <span
  m="523559">the</span> <span m="523659">visitor,</span> <span
  m="525400">Procrustes</span> <span m="526300">adjusted</span> <span
  m="526840">the</span> <span m="526960">length</span> <span
  m="527380">of</span> <span m="527530">the</span> <span
  m="527650">visitor</span> <span m="528700">to</span> <span
  m="529030">fit</span> <span m="529300">the</span> <span m="529420">bed.</span>
  <span m="530350">So</span> <span m="531460">either</span> <span
  m="531850">stretched</span> <span m="532400">the</span> <span
  m="532480">visitor</span> <span m="533170">or</span> <span
  m="534040">chopped</span> <span m="534430">off</span> <span
  m="535330">part</span> <span m="535570">of</span> <span m="535630">the</span>
  <span m="535780">visitor.</span></p><p><span m="536290">So</span> <span
  m="536590">anyway--</span> <span m="539170">the</span> <span
  m="539440">Greeks</span> <span m="539830">like</span> <span
  m="540160">this</span> <span m="540500">sort</span> <span m="540620">of</span>
  <span m="540730">thing.</span> <span m="541380">OK.</span> <span
  m="542050">So</span> <span m="542380">anyway,</span> <span
  m="542920">that's</span> <span m="544290">a</span> <span
  m="544450">Greek</span> <span m="544840">myth</span> <span
  m="545140">for</span> <span m="545330">18.065.</span> <span
  m="546970">OK.</span> <span m="547750">So</span> <span m="549610">the</span>
  <span m="549730">whole</span> <span m="549940">idea,</span> <span
  m="550330">the</span> <span m="550710">Procrustes</span> <span
  m="551650">problem,</span> <span m="552340">is</span> <span
  m="552490">to</span> <span m="552640">make</span> <span
  m="552940">something</span> <span m="554720">fit</span> <span
  m="555050">something</span> <span m="555530">else.</span> <span
  m="558500">So</span> <span m="558710">the</span> <span m="558860">two</span>
  <span m="559100">things</span> <span m="559910">are--</span> <span
  m="565410">so</span> <span m="565590">suppose</span> <span
  m="566040">I'm</span> <span m="566250">just</span> <span m="566580">in</span>
  <span m="566730">three</span> <span m="567030">dimensions</span> <span
  m="567360">and</span> <span m="567690">I</span> <span m="567900">have</span>
  <span m="568950">two</span> <span m="569170">vectors</span> <span
  m="569670">here.</span> <span m="570140">So I</span> <span
  m="570410">have</span> <span m="571290">a</span> <span m="571380">basis</span>
  <span m="571680">for</span> <span m="571980">a</span> <span
  m="572370">two</span> <span m="572580">dimensional</span> <span
  m="573000">space.</span> <span m="573780">And</span> <span
  m="573900">over</span> <span m="574170">here</span> <span m="574470">I</span>
  <span m="574620">have--</span> <span m="577680">people--</span> <span
  m="579390">space</span> <span m="579780">scientists</span> <span
  m="580590">might</span> <span m="581460">have</span> <span
  m="583500">one</span> <span m="583800">computation</span> <span
  m="584880">of</span> <span m="586530">the</span> <span
  m="586680">positions</span> <span m="587490">of</span> <span
  m="587580">satellites.</span></p><p><span m="589150">Then,</span> <span
  m="589650">of</span> <span m="589770">course,</span> <span
  m="590050">they</span> <span m="590130">wouldn't</span> <span
  m="590370">be</span> <span m="590550">off</span> <span m="590820">by</span>
  <span m="591030">as</span> <span m="591180">much</span> <span
  m="591480">as</span> <span m="591660">this</span> <span
  m="591930">figure</span> <span m="592350">shows.</span> <span
  m="593070">But</span> <span m="593250">then</span> <span
  m="593490">they</span> <span m="593640">have</span> <span
  m="593790">another</span> <span m="594120">computation</span> <span
  m="595830">using</span> <span m="596310">different</span> <span
  m="597060">coordinates.</span> <span m="598170">So</span> <span
  m="598380">it</span> <span m="600570">partly</span> <span
  m="601020">rotated</span> <span m="602370">from</span> <span
  m="602610">this</span> <span m="602820">picture,</span> <span
  m="603400">but</span> <span m="603480">also</span> <span
  m="603900">it's</span> <span m="604080">partly</span> <span
  m="604500">got</span> <span m="605430">round</span> <span
  m="605820">off</span> <span m="606000">errors</span> <span
  m="606450">and</span> <span m="606870">error</span> <span m="607230">in</span>
  <span m="607410">it</span> <span m="607890">between</span> <span
  m="608310">the</span> <span m="608430">two.</span> <span m="609000">So</span>
  <span m="609210">the</span> <span m="609330">question</span> <span
  m="609810">is,</span> <span m="610470">what's</span> <span
  m="610830">the</span> <span m="610950">best</span> <span
  m="612300">orthogonal</span> <span m="612960">transformation?</span> <span
  m="614160">So</span> <span m="614340">this</span> <span m="615090">is</span>
  <span m="615270">a</span> <span m="615330">bunch</span> <span
  m="615660">of</span> <span m="615720">vectors,</span> <span
  m="616230">x1,</span> <span m="617545">x2,</span> <span m="619072">to</span>
  <span m="619544">xn,</span> <span m="620760">let's</span> <span
  m="620970">say.</span> <span m="622100">And</span> <span m="622770">I</span>
  <span m="622890">want</span> <span m="623190">to</span> <span
  m="623760">modify</span> <span m="624390">them</span> <span
  m="624570">by</span> <span m="624840">an</span> <span
  m="624960">orthogonal</span> <span m="625590">matrix--</span> <span
  m="626460">maybe</span> <span m="626760">I'd</span> <span m="626860">do</span>
  <span m="627180">it</span> <span m="627300">on</span> <span
  m="627450">the</span> <span m="627600">other</span> <span
  m="627840">side.</span> <span m="628260">I</span> <span
  m="628290">think</span> <span m="628560">I</span> <span m="628650">do.</span>
  <span m="629190">Yeah.</span></p><p><span m="633970">Q,</span> <span
  m="635400">to</span> <span m="635700">be</span> <span m="635940">as</span>
  <span m="636120">close</span> <span m="636510">as</span> <span
  m="636690">possible</span> <span m="637950">to</span> <span
  m="638400">this</span> <span m="638850">other</span> <span
  m="639240">set,</span> <span m="639600">y1,</span> <span m="641340">y2</span>
  <span m="641940">up</span> <span m="642090">to</span> <span
  m="642240">yn.</span> <span m="644640">So</span> <span m="645540">let</span>
  <span m="645630">me</span> <span m="645750">just</span> <span
  m="645930">say</span> <span m="646140">it</span> <span
  m="646230">again.</span> <span m="647330">I</span> <span
  m="647400">have</span> <span m="647610">two</span> <span
  m="647850">sets</span> <span m="648210">of</span> <span
  m="648320">vectors.</span> <span m="650100">And</span> <span
  m="650220">I'm</span> <span m="650370">looking,</span> <span
  m="651120">and</span> <span m="651270">they're</span> <span
  m="652200">different--</span> <span m="652590">like</span> <span
  m="652800">those</span> <span m="653160">two</span> <span
  m="653430">sets.</span> <span m="654390">And</span> <span
  m="654600">I'm</span> <span m="654750">looking</span> <span
  m="655200">for</span> <span m="655650">the</span> <span
  m="656850">orthogonality</span> <span m="657480">matrix</span> <span
  m="658060">that,</span> <span m="658440">as</span> <span
  m="658620">well</span> <span m="659040">as</span> <span
  m="659190">possible,</span> <span m="660410">takes</span> <span
  m="660840">this</span> <span m="661080">set</span> <span
  m="661410">into</span> <span m="661650">this</span> <span
  m="661890">one.</span> <span m="662490">Of</span> <span
  m="662610">course,</span> <span m="663060">if</span> <span
  m="664410">this</span> <span m="664590">was</span> <span m="664800">an</span>
  <span m="664950">orthogonal</span> <span m="665610">basis,</span> <span
  m="666150">and</span> <span m="666270">this</span> <span m="666480">was</span>
  <span m="666690">an</span> <span m="666840">orthogonal</span> <span
  m="667410">basis,</span> <span m="668460">then</span> <span
  m="668760">we</span> <span m="668940">would</span> <span m="669150">be</span>
  <span m="669900">home</span> <span m="670230">free.</span> <span
  m="671910">Q--</span> <span m="672300">we</span> <span m="672510">could</span>
  <span m="672660">get</span> <span m="672870">equality.</span> <span
  m="673590">We</span> <span m="673770">could</span> <span
  m="673950">take</span> <span m="674760">an</span> <span
  m="674910">orthogonal</span> <span m="675540">basis</span> <span
  m="676170">directly</span> <span m="676800">into</span> <span
  m="677070">an</span> <span m="677190">orthogonal</span> <span
  m="677760">basis</span> <span m="678300">with</span> <span m="678650">a</span>
  <span m="679500">orthogonal</span> <span m="680040">matrix</span> <span
  m="680550">Q.</span></p><p><span m="681390">In</span> <span
  m="681690">other</span> <span m="681840">words,</span> <span
  m="682210">if</span> <span m="682290">x</span> <span m="682560">was</span>
  <span m="682740">an</span> <span m="682860">orthogonal</span> <span
  m="683400">matrix,</span> <span m="684240">and</span> <span
  m="684390">y</span> <span m="684720">was</span> <span m="684960">an</span>
  <span m="685110">orthogonal</span> <span m="685650">matrix,</span> <span
  m="686490">we</span> <span m="686640">would</span> <span m="686850">get</span>
  <span m="687150">the</span> <span m="687360">exact</span> <span
  m="687840">correct</span> <span m="688380">Q.</span> <span
  m="689460">But</span> <span m="692390">that's</span> <span
  m="692660">not</span> <span m="692930">the</span> <span
  m="693050">case.</span> <span m="694010">So</span> <span
  m="694160">we're</span> <span m="694310">looking</span> <span
  m="694610">for</span> <span m="694700">the</span> <span m="694820">best</span>
  <span m="695060">possible.</span> <span m="695900">So</span> <span
  m="696110">that's</span> <span m="696410">the</span> <span
  m="696920">problem</span> <span m="697340">there--</span> <span
  m="698010">minimize</span> <span m="704060">over</span> <span
  m="705080">orthogonal</span> <span m="705650">matrix--</span> <span
  m="706610">matrices</span> <span m="707360">Q.</span> <span
  m="708280">And</span> <span m="708440">I</span> <span m="708560">just</span>
  <span m="708980">want</span> <span m="709280">to</span> <span
  m="709370">get</span> <span m="709610">my</span> <span
  m="709850">notation</span> <span m="710870">to</span> <span
  m="711020">be</span> <span m="711290">consistent</span> <span
  m="712010">here.</span> <span m="715100">OK.</span> <span m="719670">So</span>
  <span m="719940">I've--</span> <span m="721500">I</span> <span
  m="721950">see</span> <span m="722220">that</span> <span
  m="723020">starting</span> <span m="723470">with</span> <span
  m="723570">the</span> <span m="723650">y's</span> <span m="724170">and</span>
  <span m="724320">mapping</span> <span m="724770">them</span> <span
  m="724980">to</span> <span m="725160">x's--</span> <span m="727200">so</span>
  <span m="728460">let</span> <span m="728580">me</span> <span
  m="728760">ask</span> <span m="728940">the</span> <span
  m="729060">question.</span> <span m="729790">What</span> <span
  m="730120">orthogonal</span> <span m="731460">matrix</span> <span
  m="732030">Q</span> <span m="732360">multiplies</span> <span
  m="733140">the</span> <span m="733290">y's</span> <span m="734790">to</span>
  <span m="735510">come</span> <span m="735810">as</span> <span
  m="735960">close</span> <span m="736320">as</span> <span
  m="736470">possible</span> <span m="737010">to</span> <span
  m="737130">the</span> <span m="737310">x's?</span></p><p><span
  m="738270">So</span> <span m="739980">over all</span> <span
  m="740670">orthogonal</span> <span m="741390">Q's</span> <span
  m="742380">I</span> <span m="742530">want</span> <span m="742740">to</span>
  <span m="742800">minimize</span> <span m="744090">YQ</span> <span
  m="745350">minus</span> <span m="746610">X</span> <span m="748470">in</span>
  <span m="748690">the</span> <span m="749000">Frobenius</span> <span
  m="749610">norm.</span> <span m="750420">And I might</span> <span
  m="750850">as</span> <span m="751280">well square it.</span> <span
  m="753100">So</span> <span m="753360">Frobenius--</span> <span
  m="754290">we're</span> <span m="754650">into</span> <span
  m="755630">the</span> <span m="755900">Frobenius</span> <span
  m="756480">norm.</span> <span m="757560">Remember</span> <span
  m="758040">the--</span> <span m="759220">of</span> <span m="759700">a</span>
  <span m="759750">matrix?</span> <span m="765850">This</span> <span
  m="766280">is</span> <span m="766430">a</span> <span m="766550">very</span>
  <span m="767090">convenient</span> <span m="767750">norm</span> <span
  m="768190">in</span> <span m="768860">data</span> <span
  m="769340">science,</span> <span m="770930">to</span> <span
  m="771080">measure</span> <span m="771410">the</span> <span
  m="771560">size</span> <span m="771920">of</span> <span m="772040">a</span>
  <span m="772100">matrix.</span> <span m="772700">And</span> <span
  m="772820">we</span> <span m="772940">have</span> <span
  m="773120">several</span> <span m="774080">possible</span> <span
  m="774590">formulas</span> <span m="775190">for</span> <span
  m="775460">it.</span> <span m="776030">So</span> <span m="777290">let</span>
  <span m="777410">me</span> <span m="777530">call</span> <span
  m="777770">the</span> <span m="777860">matrix</span> <span
  m="778400">A.</span> <span m="780215">And</span> <span m="780700">the</span>
  <span m="780930">Frobenius</span> <span m="781400">norm</span> <span
  m="781700">squared--</span> <span m="782900">so</span> <span
  m="783110">what's</span> <span m="783440">one</span> <span
  m="783740">expression,</span> <span m="784940">in</span> <span
  m="785120">terms</span> <span m="785570">of</span> <span m="785720">the</span>
  <span m="786650">entries</span> <span m="787220">of</span> <span
  m="787310">the</span> <span m="787430">matrix--</span> <span
  m="788350">the</span> <span m="788780">numbers</span> <span
  m="789410">Aij</span> <span m="790070">in</span> <span m="790190">the</span>
  <span m="790280">matrix?</span></p><p><span m="791470">The</span> <span
  m="792290">Frobenius</span> <span m="793100">norm</span> <span
  m="793820">just</span> <span m="794120">treats</span> <span
  m="794480">it</span> <span m="794570">like</span> <span m="794810">a</span>
  <span m="794870">long</span> <span m="795200">vector.</span> <span
  m="796370">So</span> <span m="796580">it's</span> <span m="796880">a11</span>
  <span m="797780">squared,</span> <span m="798350">plus</span> <span
  m="798740">a12</span> <span m="799940">squared,</span> <span
  m="800300">of</span> <span m="800660">all</span> <span m="800990">the</span>
  <span m="801050">way</span> <span m="801230">along</span> <span
  m="801590">the</span> <span m="802280">first</span> <span
  m="804320">plus</span> <span m="805370">second</span> <span
  m="806420">row,</span> <span m="807050">just--</span> <span
  m="812800">I'll</span> <span m="812980">say</span> <span m="813310">nn</span>
  <span m="813850">squared.</span> <span m="815460">OK.</span> <span
  m="816650">Sum</span> <span m="816940">of</span> <span m="817090">all</span>
  <span m="817300">the</span> <span m="817450">squares--</span> <span
  m="819730">just</span> <span m="819970">treating</span> <span
  m="820360">it</span> <span m="820450">like</span> <span m="820690">a</span>
  <span m="820750">long</span> <span m="821050">vector.</span> <span
  m="822370">OK.</span> <span m="823450">This--</span> <span
  m="824260">but</span> <span m="824590">that's</span> <span m="824870">a</span>
  <span m="825640">awkward</span> <span m="826060">expression</span> <span
  m="826690">to</span> <span m="826810">write</span> <span
  m="827110">down.</span> <span m="827860">So</span> <span
  m="828070">what</span> <span m="828340">other</span> <span
  m="829270">ways</span> <span m="829780">do</span> <span m="829930">we</span>
  <span m="830110">have</span> <span m="830530">to</span> <span
  m="831430">find</span> <span m="831900">the</span> <span
  m="832300">Frobenius</span> <span m="832990">norm</span> <span
  m="833410">of</span> <span m="835140">a</span> <span
  m="836170">matrix?</span></p><p><span m="839690">Let's</span> <span
  m="839820">see.</span> <span m="841030">I</span> <span m="841180">could</span>
  <span m="841360">look</span> <span m="841720">at</span> <span
  m="841870">this</span> <span m="842320">as</span> <span m="845200">A</span>
  <span m="845380">transpose</span> <span m="846010">A.</span> <span
  m="847870">Is</span> <span m="848020">that</span> <span
  m="848170">right?</span> <span m="848560">A</span> <span
  m="848800">transpose</span> <span m="849730">A.</span> <span
  m="850300">So</span> <span m="850540">what</span> <span
  m="851440">what's</span> <span m="851740">happening</span> <span
  m="852340">there?</span> <span m="853870">Remind</span> <span
  m="854260">me</span> <span m="854440">what--</span> <span
  m="858520">yeah.</span> <span m="859690">I</span> <span
  m="860020">would</span> <span m="860230">get</span> <span
  m="860500">all</span> <span m="860740">that.</span> <span m="861400">I</span>
  <span m="861490">would</span> <span m="861670">get</span> <span
  m="861880">all</span> <span m="862060">these</span> <span m="862540">by</span>
  <span m="863410">taking</span> <span m="865030">the</span> <span
  m="865150">matrix</span> <span m="865840">A</span> <span
  m="867190">transpose</span> <span m="868180">times</span> <span
  m="868750">A.</span> <span m="869160">But</span> <span
  m="870130">what--</span> <span m="871360">sorry.</span> <span
  m="871700">I'm</span> <span m="871840">not--</span> <span m="877610">I</span>
  <span m="877670">haven't--</span> <span m="878110">I've</span> <span
  m="878780">lost</span> <span m="879200">my</span> <span
  m="879770">thread</span> <span m="880250">of</span> <span
  m="881750">talk</span> <span m="882230">here.</span> <span
  m="884060">So</span> <span m="884360">here's--</span> <span
  m="885860">oh,</span> <span m="886190">and</span> <span m="886320">then</span>
  <span m="886490">I</span> <span m="886580">take</span> <span
  m="886890">the</span> <span m="887000">trace,</span> <span
  m="887540">of</span> <span m="887660">course.</span> <span
  m="887960">So</span> <span m="888920">that</span> <span
  m="889250">first</span> <span m="889670">row--</span> <span
  m="891320">first</span> <span m="891680">column</span> <span
  m="892070">of</span> <span m="892190">A</span> <span m="894110">times</span>
  <span m="894560">that</span> <span m="894800">one</span> <span
  m="895670">will</span> <span m="895880">give</span> <span m="896120">me</span>
  <span m="896810">the--</span> <span m="898250">one</span> <span
  m="898610">set</span> <span m="898910">of</span> <span
  m="899000">squares.</span> <span m="900650">And</span> <span
  m="900770">then,</span> <span m="901310">that</span> <span
  m="901700">one</span> <span m="902030">times</span> <span
  m="902390">the</span> <span m="902510">other,</span> <span
  m="903060">and</span> <span m="903360">the</span> <span m="903420">next</span>
  <span m="903740">one,</span> <span m="903950">will</span> <span
  m="904100">give</span> <span m="904250">me</span> <span m="904430">the</span>
  <span m="904550">next</span> <span m="904820">set</span> <span
  m="905030">of</span> <span m="905150">squares,</span> <span
  m="905880">right?</span></p><p><span m="907310">So</span> <span
  m="907760">this</span> <span m="908060">is</span> <span
  m="908340">going</span> <span m="908470">to--</span> <span
  m="908870">if</span> <span m="909080">I</span> <span m="909200">look</span>
  <span m="909500">at</span> <span m="909630">the</span> <span
  m="909830">trace--</span> <span m="910490">so</span> <span
  m="910760">now,</span> <span m="911780">let</span> <span m="911930">me.</span>
  <span m="913350">So</span> <span m="913760">I</span> <span
  m="913880">just</span> <span m="914240">want</span> <span m="914450">to</span>
  <span m="914540">look</span> <span m="914750">at</span> <span
  m="914840">the</span> <span m="914960">diagonal</span> <span
  m="915770">here.</span> <span m="917090">So</span> <span
  m="917360">it's</span> <span m="917960">the</span> <span
  m="918920">trace.</span> <span m="920240">You</span> <span
  m="920570">remember,</span> <span m="920930">the</span> <span
  m="921090">trace</span> <span m="922340">of</span> <span m="922490">a</span>
  <span m="922550">matrix--</span> <span m="923950">of</span> <span
  m="924070">a</span> <span m="924140">matrix</span> <span m="924770">M</span>
  <span m="925970">is</span> <span m="926310">the</span> <span
  m="927290">sum</span> <span m="927890">down</span> <span m="928280">the</span>
  <span m="928400">diagonal</span> <span m="929000">M11,</span> <span
  m="930220">M22,</span> <span m="931940">down</span> <span m="932270">to</span>
  <span m="932420">Mnn.</span> <span m="934430">It's</span> <span
  m="937420">the</span> <span m="937760">diagonal</span> <span
  m="938460">sum.</span> <span m="944300">And--</span> <span
  m="945570">everybody</span> <span m="946020">with</span> <span
  m="946230">me</span> <span m="946410">here</span> <span m="946800">now?</span>
  <span m="947880">So</span> <span m="948930">that</span> <span
  m="950370">term</span> <span m="950760">on</span> <span m="950880">the</span>
  <span m="951000">diagonal--</span> <span m="951600">A</span> <span
  m="951810">transpose</span> <span m="952510">A--</span> <span
  m="952680">gives</span> <span m="952980">me</span> <span m="953160">all</span>
  <span m="953370">of</span> <span m="953490">that.</span> <span
  m="954860">Then--</span> <span m="955880">or</span> <span
  m="956210">maybe</span> <span m="958130">I</span> <span
  m="958250">should</span> <span m="958430">be</span> <span
  m="958580">doing</span> <span m="958880">AA</span> <span
  m="959240">transpose.</span> <span m="960020">The</span> <span
  m="960470">point</span> <span m="960830">is,</span> <span m="961010">it</span>
  <span m="961100">doesn't</span> <span m="961400">matter.</span></p><p><span
  m="962520">Or</span> <span m="962750">the</span> <span m="962900">trace</span>
  <span m="963410">of</span> <span m="964730">AA</span> <span
  m="965270">transpose.</span> <span m="966700">That</span> <span
  m="966860">would</span> <span m="967010">be--</span> <span
  m="967820">those</span> <span m="968060">would</span> <span
  m="968210">both</span> <span m="969510">give</span> <span
  m="969830">the</span> <span m="970760">correct</span> <span
  m="971300">Frobenius</span> <span m="972020">norm</span> <span
  m="972380">squared.</span> <span m="975740">So</span> <span
  m="975960">traces</span> <span m="976530">are</span> <span
  m="976650">going</span> <span m="976750">to</span> <span
  m="976890">come</span> <span m="977160">into</span> <span
  m="977430">this</span> <span m="978480">little</span> <span
  m="978780">problem.</span> <span m="980010">Now</span> <span
  m="980250">there's</span> <span m="980460">another</span> <span
  m="980820">formula</span> <span m="981260">for</span> <span
  m="981440">the</span> <span m="981660">Frobenius</span> <span
  m="982180">norm--</span> <span m="982560">even</span> <span
  m="982860">shorter--</span> <span m="984180">well,</span> <span
  m="984990">certainly</span> <span m="985440">shorter</span> <span
  m="985830">than</span> <span m="986010">this</span> <span
  m="986280">one--</span> <span m="986940">involving</span> <span
  m="987570">a</span> <span m="987630">sum</span> <span m="987930">of</span>
  <span m="988080">squares.</span> <span m="988800">And</span> <span
  m="988950">what's</span> <span m="989310">that</span> <span
  m="989550">one?</span> <span m="991380">What's</span> <span
  m="991610">the</span> <span m="991760">other</span> <span
  m="992060">way</span> <span m="992510">to</span> <span m="992660">get</span>
  <span m="992900">the</span> <span m="993070">same</span> <span
  m="993620">answer?</span> <span m="996170">If</span> <span m="996350">I</span>
  <span m="996440">look</span> <span m="996680">at</span> <span
  m="996770">the</span> <span m="997030">SVD--</span> <span
  m="997760">look</span> <span m="998000">at</span> <span
  m="998120">singular</span> <span m="998640">values.</span> <span
  m="1000070">I</span> <span m="1000520">think</span> <span
  m="1000850">that</span> <span m="1001060">this</span> <span
  m="1001360">is</span> <span m="1001570">also</span> <span
  m="1002050">equal</span> <span m="1002410">to</span> <span
  m="1003520">the</span> <span m="1004480">sum</span> <span
  m="1004840">square</span> <span m="1005410">of</span> <span
  m="1005860">all</span> <span m="1006040">the</span> <span
  m="1006130">singular</span> <span m="1006640">values.</span></p><p><span
  m="1012850">So it's</span> <span m="1013170">three</span> <span
  m="1013610">nice</span> <span m="1014000">expressions</span> <span
  m="1015620">for</span> <span m="1015950">the</span> <span
  m="1016670">Frobenius</span> <span m="1017550">norm.</span> <span
  m="1019140">The</span> <span m="1019280">nice</span> <span
  m="1019640">ones</span> <span m="1019910">involve</span> <span
  m="1020360">A</span> <span m="1020510">transpose</span> <span
  m="1021170">A,</span> <span m="1021560">or</span> <span m="1021770">AA</span>
  <span m="1022190">transpose.</span> <span m="1023190">And</span> <span
  m="1023480">of</span> <span m="1023570">course,</span> <span
  m="1023870">that</span> <span m="1024079">connects</span> <span
  m="1024650">to</span> <span m="1024980">the</span> <span
  m="1025130">singular</span> <span m="1025670">values,</span> <span
  m="1026089">because</span> <span m="1026720">what</span> <span
  m="1026960">are--</span> <span m="1027200">what's</span> <span
  m="1027500">the</span> <span m="1027589">connection</span> <span
  m="1028160">between</span> <span m="1028910">singular</span> <span
  m="1029390">values</span> <span m="1029930">and</span> <span
  m="1030079">those--</span> <span m="1030800">and</span> <span
  m="1030950">these</span> <span m="1031250">guys--</span> <span
  m="1032089">A</span> <span m="1032240">transpose</span> <span
  m="1032930">A,</span> <span m="1033200">or</span> <span m="1033380">AA</span>
  <span m="1033740">transpose?</span> <span m="1035069">The</span> <span
  m="1036800">singular</span> <span m="1037339">values</span> <span
  m="1037970">are</span> <span m="1038390">the--</span> <span
  m="1039140">or</span> <span m="1039329">the</span> <span
  m="1039500">singular</span> <span m="1040040">values</span> <span
  m="1040569">squared</span> <span m="1042170">are</span> <span
  m="1042589">the--</span></p><p><span m="1043606">AUDIENCE:</span> <span
  m="1043844">Eigenvalues.</span></p><p><span m="1044560">GILBERT STRANG:</span>
  <span m="1044750">Eigenvalues</span> <span m="1045700">of</span> <span
  m="1045880">A</span> <span m="1046060">transpose</span> <span
  m="1046690">A.</span> <span m="1047020">And</span> <span
  m="1047710">then</span> <span m="1047890">when</span> <span
  m="1048069">I</span> <span m="1048250">add</span> <span m="1048580">up</span>
  <span m="1048790">the</span> <span m="1048940">trace,</span> <span
  m="1050110">I'm</span> <span m="1050320">adding</span> <span
  m="1050680">up</span> <span m="1050830">the</span> <span
  m="1051010">eigenvalues</span> <span m="1051970">and</span> <span
  m="1052090">that's</span> <span m="1053080">the--</span> <span
  m="1054370">that</span> <span m="1055150">gives</span> <span
  m="1055450">me</span> <span m="1055660">the</span> <span
  m="1057330">Frobenius</span> <span m="1058250">norm</span> <span
  m="1058600">squared.</span> <span m="1059080">So</span> <span
  m="1059290">this</span> <span m="1059530">is</span> <span
  m="1059740">a--</span> <span m="1063490">that</span> <span
  m="1063700">tells</span> <span m="1064000">us</span> <span
  m="1064090">something</span> <span m="1064840">important,</span> <span
  m="1066370">which</span> <span m="1066640">we</span> <span
  m="1066790">can</span> <span m="1067000">see</span> <span
  m="1067330">in</span> <span m="1067480">different</span> <span
  m="1067810">ways,</span> <span m="1068662">that the--</span> <span
  m="1069870">so</span> <span m="1071230">to</span> <span
  m="1071410">solve</span> <span m="1071740">this</span> <span
  m="1071920">problem,</span> <span m="1072440">we're</span> <span
  m="1072490">going</span> <span m="1072640">to</span> <span
  m="1072730">need</span> <span m="1073000">various</span> <span
  m="1073480">facts,</span> <span m="1073930">like</span> <span
  m="1074680">the</span> <span m="1074980">QA</span> <span m="1075940">in</span>
  <span m="1077150">the</span> <span m="1077400">Frobenius</span> <span
  m="1077980">norm</span> <span m="1079410">is</span> <span
  m="1079570">the</span> <span m="1079690">same</span> <span
  m="1080140">as</span> <span m="1080320">A</span> <span m="1081871">in</span>
  <span m="1082260">the Frobenius</span> <span m="1082690">norm.</span> <span
  m="1083200">Why</span> <span m="1083890">is</span> <span
  m="1084010">that?</span> <span m="1085680">Why?</span> <span
  m="1092440">So</span> <span m="1093280">here</span> <span
  m="1093700">I'm</span> <span m="1093880">multiplying</span> <span
  m="1094540">every</span> <span m="1094870">column</span> <span
  m="1095290">by</span> <span m="1095470">the</span> <span
  m="1095620">matrix</span> <span m="1096200">Q.</span> <span
  m="1096970">What</span> <span m="1097150">happens</span> <span
  m="1097570">to</span> <span m="1097720">the</span> <span
  m="1097840">length</span> <span m="1098200">of</span> <span
  m="1098320">the</span> <span m="1098440">column</span> <span
  m="1098840">when</span> <span m="1098980">I</span> <span
  m="1099070">multiply</span> <span m="1099580">it</span> <span
  m="1099640">by</span> <span m="1099850">q?</span></p><p><span
  m="1100210">AUDIENCE:</span> <span m="1100335">It</span> <span
  m="1100460">doesn't</span> <span m="1100585">change.</span></p><p><span
  m="1100960">GILBERT STRANG:</span> <span m="1101185">Doesn't</span> <span
  m="1101410">change.</span> <span m="1102700">So</span> <span
  m="1103300">I</span> <span m="1103450">could</span> <span
  m="1103690">add</span> <span m="1103900">up</span> <span
  m="1104080">the</span> <span m="1104230">length</span> <span
  m="1104740">of</span> <span m="1104860">the</span> <span
  m="1104980">columns</span> <span m="1105550">all</span> <span
  m="1105730">squared.</span> <span m="1106450">Here</span> <span
  m="1106690">I</span> <span m="1106810">wrote</span> <span
  m="1107140">it</span> <span m="1107290">in</span> <span
  m="1107980">terms</span> <span m="1108340">of</span> <span
  m="1108400">rows.</span> <span m="1109130">But</span> <span
  m="1109210">I</span> <span m="1109330">could</span> <span
  m="1109540">have</span> <span m="1109660">reordered</span> <span
  m="1110260">that,</span> <span m="1111130">and</span> <span
  m="1112060">got</span> <span m="1112360">it</span> <span m="1112420">in</span>
  <span m="1112510">terms</span> <span m="1112870">of</span> <span
  m="1112990">columns.</span> <span m="1113530">That's</span> <span
  m="1113860">because</span> <span m="1118720">the</span> <span
  m="1118840">length</span> <span m="1119410">of</span> <span
  m="1119620">Q</span> <span m="1120730">times</span> <span
  m="1121190">any</span> <span m="1122260">vector</span> <span
  m="1123850">squared</span> <span m="1124420">is</span> <span
  m="1126520">the</span> <span m="1126670">same</span> <span
  m="1127030">as</span> <span m="1127180">the</span> <span
  m="1127300">vector</span> <span m="1127750">squared.</span> <span
  m="1128890">And</span> <span m="1129040">these--</span> <span
  m="1129700">take</span> <span m="1130030">these</span> <span
  m="1130420">to</span> <span m="1130570">be</span> <span m="1130840">the</span>
  <span m="1131530">columns</span> <span m="1134800">of</span> <span
  m="1135010">A.</span> <span m="1136600">So</span> <span m="1137140">for</span>
  <span m="1137490">column</span> <span m="1137890">by</span> <span
  m="1138070">column,</span> <span m="1139830">the</span> <span
  m="1140000">multiplication</span> <span m="1140720">by</span> <span
  m="1141140">Q</span> <span m="1141500">doesn't</span> <span
  m="1141830">change</span> <span m="1142190">the</span> <span
  m="1142310">length.</span> <span m="1143480">And</span> <span
  m="1143600">then</span> <span m="1143840">when</span> <span
  m="1144080">I</span> <span m="1144260">add</span> <span m="1144500">up</span>
  <span m="1145070">all</span> <span m="1145280">the</span> <span
  m="1145370">columns</span> <span m="1146540">squared,</span> <span
  m="1147800">I</span> <span m="1147890">get</span> <span m="1148210">the</span>
  <span m="1148420">Frobenius</span> <span m="1149140">norm</span> <span
  m="1149660">squared.</span></p><p><span m="1150860">And</span> <span
  m="1151700">another</span> <span m="1152060">way</span> <span
  m="1152240">to</span> <span m="1152360">say</span> <span
  m="1152630">it--</span> <span m="1153440">let's</span> <span
  m="1153740">make</span> <span m="1153980">that</span> <span
  m="1154100">connection</span> <span m="1154610">between</span> <span
  m="1156380">this</span> <span m="1156650">fact--</span> <span
  m="1157070">that</span> <span m="1157430">Q</span> <span
  m="1157750">didn't</span> <span m="1158030">change</span> <span
  m="1158480">the</span> <span m="1159080">Frobenius</span> <span
  m="1159590">norm--</span> <span m="1160460">and</span> <span
  m="1160580">this</span> <span m="1160880">fact,</span> <span
  m="1161270">that</span> <span m="1161450">the</span> <span
  m="1161780">Frobenius</span> <span m="1162260">norm</span> <span
  m="1163310">is</span> <span m="1163670">expressed</span> <span
  m="1164240">in</span> <span m="1164390">terms</span> <span
  m="1164780">of</span> <span m="1164870">the</span> <span
  m="1165020">sigmas.</span> <span m="1166580">So</span> <span
  m="1167390">what</span> <span m="1167630">does</span> <span
  m="1167810">Q</span> <span m="1168170">do</span> <span m="1168380">to</span>
  <span m="1168500">the</span> <span m="1168650">sigmas?</span> <span
  m="1170520">I</span> <span m="1170790">want</span> <span m="1171000">to</span>
  <span m="1171090">see</span> <span m="1171390">in</span> <span
  m="1171540">another</span> <span m="1172440">way</span> <span
  m="1173010">the</span> <span m="1173280">answer</span> <span
  m="1174180">to</span> <span m="1174360">why.</span> <span
  m="1175260">So</span> <span m="1175530">if</span> <span m="1175680">I</span>
  <span m="1175800">have</span> <span m="1176010">a</span> <span
  m="1176070">matrix</span> <span m="1176610">A</span> <span
  m="1176880">with</span> <span m="1177060">singular</span> <span
  m="1177540">values,</span> <span m="1178590">I</span> <span
  m="1178680">multiply</span> <span m="1179250">by</span> <span
  m="1179490">Q--</span> <span m="1180000">what</span> <span
  m="1180180">happens</span> <span m="1180560">to</span> <span
  m="1180690">the</span> <span m="1180810">singular</span> <span
  m="1181320">values?</span></p><p><span m="1182840">AUDIENCE:</span> <span
  m="1183077">Don't</span> <span m="1183315">change.</span></p><p><span
  m="1183790">GILBERT STRANG:</span> <span m="1183970">Don't</span> <span
  m="1184150">change.</span> <span m="1185140">Don't</span> <span
  m="1185500">change.</span> <span m="1186010">That's</span> <span
  m="1186310">the</span> <span m="1186430">key</span> <span
  m="1186700">point</span> <span m="1187060">about</span> <span
  m="1187300">singular</span> <span m="1187800">values.</span> <span
  m="1189760">If</span> <span m="1189970">I</span> <span
  m="1190060">multiply--</span> <span m="1191050">so</span> <span
  m="1191350">A</span> <span m="1192310">has</span> <span m="1192640">a</span>
  <span m="1192770">SVD,</span> <span m="1194140">U</span> <span
  m="1194680">sigma</span> <span m="1195220">V</span> <span
  m="1195520">transpose.</span> <span m="1197530">And</span> <span
  m="1197710">QA</span> <span m="1198100">will</span> <span
  m="1200020">have</span> <span m="1200200">the</span> <span
  m="1200360">SVD</span> <span m="1201070">QU</span> <span
  m="1202350">sigma</span> <span m="1202870">V</span> <span
  m="1203250">transpose.</span> <span m="1204800">So</span> <span
  m="1204880">all</span> <span m="1205150">I've</span> <span
  m="1205270">changed</span> <span m="1205840">when</span> <span
  m="1206020">I</span> <span m="1206110">multiply</span> <span
  m="1206550">by</span> <span m="1206760">Q--</span> <span
  m="1207160">all</span> <span m="1207340">I</span> <span
  m="1207430">changed</span> <span m="1207940">was</span> <span
  m="1208180">the</span> <span m="1209020">first</span> <span
  m="1210100">factor--</span> <span m="1210670">the</span> <span
  m="1210820">first</span> <span m="1212080">orthogonal</span> <span
  m="1212860">factor</span> <span m="1213430">in</span> <span
  m="1213550">the</span> <span m="1213680">SVD.</span> <span
  m="1214930">I</span> <span m="1215020">didn't</span> <span
  m="1215290">change</span> <span m="1215650">the</span> <span
  m="1215770">sigmas.</span> <span m="1217190">They're</span> <span
  m="1217270">still</span> <span m="1217660">sitting</span> <span
  m="1218050">there.</span> <span m="1219130">So--</span> <span
  m="1219520">and</span> <span m="1219670">of</span> <span
  m="1219760">course,</span> <span m="1220090">I</span> <span
  m="1220180">could</span> <span m="1220360">do</span> <span
  m="1220630">also</span> <span m="1221020">A</span> <span m="1221410">on</span>
  <span m="1221560">the</span> <span m="1221680">other</span> <span
  m="1221920">side--</span> <span m="1222220">different</span> <span
  m="1222600">Q.</span> <span m="1223240">Same</span> <span m="1223570">Q</span>
  <span m="1223900">or</span> <span m="1224030">a</span> <span
  m="1224050">different</span> <span m="1224440">Q</span> <span
  m="1224800">on</span> <span m="1224920">the</span> <span
  m="1225010">other</span> <span m="1225220">side</span> <span
  m="1225970">would</span> <span m="1226540">show</span> <span
  m="1226810">up</span> <span m="1226990">here,</span> <span
  m="1227350">and</span> <span m="1227530">would</span> <span
  m="1227710">not</span> <span m="1228010">change</span> <span
  m="1228430">the</span> <span m="1228550">sigmas,</span> <span
  m="1229360">and</span> <span m="1229480">therefore</span> <span
  m="1229900">would</span> <span m="1230110">not</span> <span
  m="1230350">change</span> <span m="1230740">the</span> <span
  m="1230890">Frobenius</span> <span m="1231550">norm.</span></p><p><span
  m="1232420">So</span> <span m="1233530">these</span> <span
  m="1234280">are</span> <span m="1234610">important</span> <span
  m="1235960">properties</span> <span m="1236590">of</span> <span
  m="1236680">this</span> <span m="1236950">Frobenius</span> <span
  m="1237640">norm.</span> <span m="1238480">It's</span> <span
  m="1238670">a--</span> <span m="1239200">it</span> <span
  m="1239290">looks</span> <span m="1240100">messy</span> <span
  m="1240620">to</span> <span m="1240970">write</span> <span
  m="1241270">down</span> <span m="1242380">in</span> <span
  m="1242530">that</span> <span m="1242770">form,</span> <span
  m="1244240">but</span> <span m="1244690">it's</span> <span
  m="1245170">much</span> <span m="1245710">nicer</span> <span
  m="1246370">in</span> <span m="1246580">these</span> <span
  m="1246970">forms</span> <span m="1247900">and</span> <span
  m="1248200">in</span> <span m="1248560">that</span> <span
  m="1248860">form.</span> <span m="1249480">OK.</span> <span
  m="1250860">So</span> <span m="1251290">now,</span> <span
  m="1251830">if</span> <span m="1252010">I</span> <span m="1252160">can</span>
  <span m="1252400">just--</span> <span m="1253310">then</span> <span
  m="1255670">we</span> <span m="1256150">saw</span> <span
  m="1256390">that</span> <span m="1256520">it</span> <span
  m="1256560">involves</span> <span m="1257050">traces.</span> <span
  m="1258370">So</span> <span m="1258520">let</span> <span m="1258700">me</span>
  <span m="1260320">make</span> <span m="1260560">a</span> <span
  m="1260620">few</span> <span m="1260890">observations</span> <span
  m="1261640">about</span> <span m="1261970">traces.</span> <span
  m="1269180">So</span> <span m="1269360">I'll</span> <span
  m="1269450">just--</span> <span m="1271100">we</span> <span
  m="1271500">want</span> <span m="1271760">to</span> <span
  m="1273440">be</span> <span m="1273590">able</span> <span
  m="1273830">to</span> <span m="1273950">play</span> <span
  m="1274310">with</span> <span m="1274490">traces,</span> <span
  m="1275090">and</span> <span m="1275210">that's</span> <span
  m="1275450">something</span> <span m="1275810">we</span> <span
  m="1275990">really</span> <span m="1276260">haven't</span> <span
  m="1276530">done.</span> <span m="1278310">Here's</span> <span
  m="1278600">a</span> <span m="1278690">fact--</span> <span
  m="1279870">that</span> <span m="1280070">the</span> <span
  m="1280190">trace</span> <span m="1280730">of</span> <span
  m="1281390">A</span> <span m="1281540">transpose</span> <span
  m="1282230">B</span> <span m="1284450">is</span> <span
  m="1284690">equal</span> <span m="1285110">to</span> <span
  m="1285500">the</span> <span m="1287150">trace</span> <span
  m="1287870">of</span> <span m="1290420">B</span> <span
  m="1290630">transpose</span> <span m="1291350">A.</span></p><p><span
  m="1293210">Of</span> <span m="1293330">course,</span> <span
  m="1293630">if</span> <span m="1293780">B</span> <span m="1294020">is</span>
  <span m="1294230">A,</span> <span m="1295890">it's</span> <span
  m="1296720">clear,</span> <span m="1298700">and</span> <span
  m="1299150">it's</span> <span m="1299360">equal</span> <span m="1299690">to
  the</span> <span m="1299840">trace</span> <span m="1300800">of</span> <span
  m="1303790">BA</span> <span m="1304510">transpose.</span> <span
  m="1309000">So</span> <span m="1309130">even</span> <span
  m="1309370">do</span> <span m="1312220">little</span> <span
  m="1312630">changes</span> <span m="1313270">in</span> <span
  m="1313490">your</span> <span m="1314710">matrix</span> <span
  m="1315340">without</span> <span m="1315730">changing</span> <span
  m="1316240">the</span> <span m="1316360">trace.</span> <span
  m="1317530">Let's</span> <span m="1317740">see</span> <span
  m="1318280">why</span> <span m="1318850">one</span> <span
  m="1319090">of</span> <span m="1319150">these</span> <span
  m="1319480">is</span> <span m="1319630">true.</span> <span
  m="1319900">Why</span> <span m="1320830">is</span> <span
  m="1320980">that</span> <span m="1321160">first</span> <span
  m="1321550">statement</span> <span m="1322030">true?</span> <span
  m="1329130">How</span> <span m="1329370">is</span> <span
  m="1329520">that</span> <span m="1330090">matrix</span> <span
  m="1330660">related</span> <span m="1331140">to</span> <span
  m="1331290">this</span> <span m="1331560">matrix?</span></p><p><span
  m="1333166">AUDIENCE:</span> <span m="1333410">[INAUDIBLE]</span> <span
  m="1333654">transpose.</span></p><p><span m="1334630">GILBERT STRANG:</span>
  <span m="1334720">It's</span> <span m="1334810">just</span> <span
  m="1335070">a</span> <span m="1335140">transpose.</span> <span
  m="1336940">If</span> <span m="1337090">I</span> <span m="1337180">take</span>
  <span m="1337390">the</span> <span m="1337510">transpose</span> <span
  m="1338140">of</span> <span m="1338260">that</span> <span
  m="1338410">matrix,</span> <span m="1338950">I</span> <span
  m="1339070">get</span> <span m="1339280">that.</span> <span
  m="1339730">So</span> <span m="1339880">what</span> <span
  m="1340120">happens</span> <span m="1340480">to</span> <span
  m="1340570">the</span> <span m="1340720">trace?</span> <span
  m="1342120">I'm</span> <span m="1342330">adding</span> <span
  m="1342670">down</span> <span m="1342940">the</span> <span
  m="1343060">diagonal.</span> <span m="1343760">The</span> <span
  m="1343870">transpose</span> <span m="1344530">has</span> <span
  m="1344710">no</span> <span m="1344920">effect.</span> <span
  m="1346300">Clearly,</span> <span m="1349540">this</span> <span
  m="1349780">is</span> <span m="1350020">just</span> <span m="1350380">a</span>
  <span m="1350470">fact</span> <span m="1350820">that</span> <span
  m="1351010">the</span> <span m="1351340">trace</span> <span
  m="1351910">doesn't</span> <span m="1352360">change--</span> <span
  m="1352840">is</span> <span m="1353200">not</span> <span
  m="1353410">changed</span> <span m="1354220">when</span> <span
  m="1354400">you</span> <span m="1354520">transpose</span> <span
  m="1355170">a</span> <span m="1355260">matrix,</span> <span
  m="1355780">because</span> <span m="1356060">the</span> <span
  m="1356140">diagonal</span> <span m="1357100">is</span> <span
  m="1357220">not</span> <span m="1357460">changed.</span> <span
  m="1358060">Now</span> <span m="1358240">what</span> <span
  m="1358390">about</span> <span m="1358630">this</span> <span
  m="1358900">guy?</span> <span m="1361060">I</span> <span
  m="1361150">guess</span> <span m="1361330">we're</span> <span
  m="1361510">getting</span> <span m="1361780">back</span> <span
  m="1362020">to</span> <span m="1362140">old</span> <span
  m="1362410">fashioned</span> <span m="1362920">18.065,</span> <span
  m="1364210">remembering</span> <span m="1364900">facts</span> <span
  m="1365410">about</span> <span m="1366370">linear</span> <span
  m="1366730">algebra,</span> <span m="1367390">because</span> <span
  m="1367600">this</span> <span m="1367900">is</span> <span m="1368090">a</span>
  <span m="1368110">pure</span> <span m="1368440">linear</span> <span
  m="1368800">algebra.</span></p><p><span m="1369580">So</span> <span
  m="1369730">what's</span> <span m="1370060">this</span> <span
  m="1370300">one</span> <span m="1370480">about?</span> <span
  m="1371170">This</span> <span m="1371440">says</span> <span
  m="1371950">that</span> <span m="1372250">I</span> <span
  m="1372460">can</span> <span m="1373270">reverse</span> <span
  m="1373780">the</span> <span m="1373990">order</span> <span
  m="1374350">of</span> <span m="1374500">two</span> <span
  m="1374710">matrices.</span> <span m="1375570">So</span> <span
  m="1375840">I'm</span> <span m="1376240">now</span> <span
  m="1376510">looking</span> <span m="1376880">at</span> <span
  m="1378120">the</span> <span m="1378230">connection</span> <span
  m="1378790">between</span> <span m="1379180">those</span> <span
  m="1379540">two.</span> <span m="1380510">And</span> <span
  m="1382730">so</span> <span m="1383740">let</span> <span m="1383890">me</span>
  <span m="1384100">just--</span> <span m="1384340">to</span> <span
  m="1384480">use</span> <span m="1384730">different</span> <span
  m="1385120">letters--</span> <span m="1385870">CD</span> <span
  m="1386710">equals</span> <span m="1387240">the</span> <span
  m="1387370">trace</span> <span m="1387910">of</span> <span
  m="1389630">DC.</span> <span m="1391560">I</span> <span m="1391660">can</span>
  <span m="1392110">flip</span> <span m="1392440">the</span> <span
  m="1392620">order.</span> <span m="1394540">That's</span> <span
  m="1395140">all</span> <span m="1395320">I've</span> <span
  m="1395500">done</span> <span m="1395710">here</span> <span
  m="1395980">is.</span> <span m="1396130">I've</span> <span
  m="1396610">reversed</span> <span m="1397180">B</span> <span
  m="1397510">with</span> <span m="1397750">A</span> <span
  m="1397930">transpose.</span> <span m="1398980">I</span> <span
  m="1399130">reversed</span> <span m="1399580">C</span> <span
  m="1399850">with</span> <span m="1400060">D.</span> <span
  m="1401050">So</span> <span m="1401260">why</span> <span m="1401500">is</span>
  <span m="1401620">that</span> <span m="1401770">true?</span> <span
  m="1403450">Why</span> <span m="1403840">is</span> <span
  m="1404080">that</span> <span m="1404470">true?</span> <span
  m="1408030">Well,</span> <span m="1408340">how</span> <span
  m="1408610">shall</span> <span m="1408790">we</span> <span
  m="1408940">see</span> <span m="1410350">the</span> <span
  m="1410530">truth</span> <span m="1410980">of</span> <span
  m="1411130">that</span> <span m="1411460">fact?</span></p><p><span
  m="1413100">So</span> <span m="1413430">these</span> <span
  m="1414000">are</span> <span m="1414180">really</span> <span
  m="1414570">convenient</span> <span m="1415110">facts,</span> <span
  m="1415560">that</span> <span m="1416190">make</span> <span
  m="1416550">a</span> <span m="1416580">lot</span> <span m="1416790">of</span>
  <span m="1416880">people</span> <span m="1417930">use</span> <span
  m="1418320">the</span> <span m="1418440">trace</span> <span
  m="1419040">more</span> <span m="1419340">often</span> <span
  m="1419760">than</span> <span m="1419940">we</span> <span
  m="1420180">have</span> <span m="1420510">in</span> <span
  m="1420660">18.065.</span> <span m="1421770">I'm</span> <span
  m="1422190">not</span> <span m="1422400">a</span> <span m="1422460">big</span>
  <span m="1422730">user</span> <span m="1423210">of</span> <span
  m="1423990">arguments</span> <span m="1424530">based</span> <span
  m="1424920">on</span> <span m="1425460">trace,</span> <span
  m="1425910">but</span> <span m="1426180">these</span> <span
  m="1426990">are</span> <span m="1427200">identities</span> <span
  m="1428630">that</span> <span m="1429060">go</span> <span m="1429300">a</span>
  <span m="1429350">long</span> <span m="1429670">way</span> <span
  m="1430080">with</span> <span m="1430920">many</span> <span
  m="1431250">problems.</span> <span m="1432430">So</span> <span
  m="1432570">let's</span> <span m="1432780">see</span> <span
  m="1433020">why</span> <span m="1433300">that's</span> <span
  m="1433650">true.</span> <span m="1435850">Any</span> <span
  m="1436170">time</span> <span m="1436500">you</span> <span
  m="1436560">think</span> <span m="1436770">about</span> <span
  m="1437010">trace,</span> <span m="1437490">you've</span> <span
  m="1437640">got</span> <span m="1437850">two</span> <span
  m="1438990">languages</span> <span m="1439740">to</span> <span
  m="1439890">use.</span> <span m="1441090">You</span> <span
  m="1441210">can</span> <span m="1441390">use</span> <span
  m="1441630">the</span> <span m="1441780">eigenvalues.</span> <span
  m="1442680">It's</span> <span m="1442890">the</span> <span
  m="1442980">sum</span> <span m="1443310">of</span> <span
  m="1443400">the</span> <span m="1443550">eigenvalues.</span> <span
  m="1445320">Or</span> <span m="1445560">you</span> <span
  m="1445710">can</span> <span m="1445920">use</span> <span
  m="1446310">the</span> <span m="1446430">diagonal</span> <span
  m="1447030">entries,</span> <span m="1447480">because</span> <span
  m="1447780">it's</span> <span m="1447960">the</span> <span
  m="1448050">sum</span> <span m="1448380">of</span> <span
  m="1448440">the</span> <span m="1448560">diagonal</span> <span
  m="1449130">entries.</span></p><p><span m="1449760">Let's</span> <span
  m="1449970">use</span> <span m="1450240">eigenvalues.</span> <span
  m="1451980">How</span> <span m="1452220">are</span> <span
  m="1452370">the</span> <span m="1452520">eigenvalues</span> <span
  m="1453360">of</span> <span m="1453510">CD</span> <span
  m="1454290">related</span> <span m="1454740">to</span> <span
  m="1454890">the</span> <span m="1455010">eigenvalues</span> <span
  m="1455700">of</span> <span m="1455820">DC?</span> <span
  m="1457550">They're</span> <span m="1457760">the</span> <span
  m="1457910">same.</span> <span m="1459800">If</span> <span
  m="1459980">these</span> <span m="1460190">matrices</span> <span
  m="1460850">are</span> <span m="1460910">rectangular,</span> <span
  m="1461720">then</span> <span m="1461960">there</span> <span
  m="1462080">might</span> <span m="1462290">be</span> <span
  m="1462440">some</span> <span m="1462650">extra</span> <span
  m="1463040">zero</span> <span m="1463560">eigenvalues,</span> <span
  m="1464240">because</span> <span m="1464450">they</span> <span
  m="1464570">would</span> <span m="1465290">have</span> <span
  m="1465470">different</span> <span m="1465830">shapes.</span> <span
  m="1466880">But</span> <span m="1467690">zeros</span> <span
  m="1468200">are</span> <span m="1468290">not</span> <span
  m="1468500">going</span> <span m="1468680">to</span> <span
  m="1468740">affect</span> <span m="1469040">the</span> <span
  m="1469190">trace.</span> <span m="1470060">So</span> <span
  m="1470990">this</span> <span m="1471230">is</span> <span
  m="1471320">the</span> <span m="1471500">same</span> <span
  m="1473870">nonzero</span> <span m="1474730">eigenvalues.</span> <span
  m="1482020">OK.</span> <span m="1483730">And</span> <span
  m="1484180">so</span> <span m="1484450">on.</span> <span
  m="1484990">Yeah.</span> <span m="1485960">OK.</span> <span
  m="1486910">Let</span> <span m="1487090">me</span> <span
  m="1487270">just--</span> <span m="1491240">let</span> <span
  m="1491390">me</span> <span m="1492200">try</span> <span m="1492440">to</span>
  <span m="1493850">tell</span> <span m="1494090">you</span> <span
  m="1494240">the</span> <span m="1494390">steps</span> <span
  m="1494930">now</span> <span m="1495260">to</span> <span
  m="1495440">get</span> <span m="1495680">the</span> <span
  m="1495980">correct</span> <span m="1496520">Q.</span> <span
  m="1498210">And</span> <span m="1498710">let</span> <span
  m="1498830">me</span> <span m="1498920">tell</span> <span
  m="1499130">you</span> <span m="1499250">the</span> <span
  m="1499430">answer</span> <span m="1499820">first.</span></p><p><span
  m="1504410">And</span> <span m="1504700">I'm</span> <span
  m="1504880">realizing</span> <span m="1506830">that</span> <span
  m="1508960">all</span> <span m="1509170">important</span> <span
  m="1509590">question</span> <span m="1510040">four--</span> <span
  m="1511240">does</span> <span m="1511510">deep</span> <span
  m="1511750">learning</span> <span m="1512380">actually</span> <span
  m="1512800">work?</span> <span m="1514030">We're</span> <span
  m="1514210">going</span> <span m="1514330">to</span> <span
  m="1514420">run</span> <span m="1514660">out</span> <span
  m="1514810">of</span> <span m="1514900">time</span> <span
  m="1515260">today,</span> <span m="1515740">because</span> <span
  m="1515980">we</span> <span m="1516130">only</span> <span
  m="1516340">have</span> <span m="1516490">a</span> <span
  m="1516550">few</span> <span m="1516790">minutes</span> <span
  m="1517150">left.</span> <span m="1518170">I</span> <span
  m="1518350">suggest</span> <span m="1518920">we</span> <span
  m="1519760">bring</span> <span m="1520030">that</span> <span
  m="1520240">question</span> <span m="1520690">back</span> <span
  m="1520990">up,</span> <span m="1521320">because</span> <span
  m="1522760">it's</span> <span m="1522910">pretty</span> <span
  m="1523240">important</span> <span m="1523800">to</span> <span
  m="1525580">a</span> <span m="1525640">lot</span> <span m="1525880">of</span>
  <span m="1525940">people.</span> <span m="1526870">There's--</span> <span
  m="1529330">I</span> <span m="1529660">had</span> <span
  m="1529900">lunch</span> <span m="1530140">with</span> <span
  m="1530320">Professor</span> <span m="1530830">Edelman,</span> <span
  m="1531280">and</span> <span m="1531430">he</span> <span
  m="1531580">said,</span> <span m="1532270">you</span> <span
  m="1532420">know,</span> <span m="1533620">deep</span> <span
  m="1533890">learning</span> <span m="1534310">and</span> <span
  m="1534430">neural</span> <span m="1534730">nets</span> <span
  m="1535120">have</span> <span m="1535300">had</span> <span
  m="1536560">a</span> <span m="1536650">record</span> <span
  m="1537160">amount</span> <span m="1537610">of</span> <span
  m="1539290">publicity</span> <span m="1540460">and</span> <span
  m="1540790">hype</span> <span m="1541390">for</span> <span
  m="1543070">sort</span> <span m="1543340">of</span> <span
  m="1543460">computational</span> <span
  m="1544390">algorithm.</span></p><p><span m="1545830">And--</span> <span
  m="1547790">but</span> <span m="1547970">I</span> <span
  m="1548060">had--</span> <span m="1549950">I've</span> <span
  m="1550100">had</span> <span m="1550310">people</span> <span
  m="1550700">now</span> <span m="1551000">tell</span> <span
  m="1551300">me</span> <span m="1551510">that</span> <span
  m="1552230">typical</span> <span m="1554480">first--</span> <span
  m="1555860">if</span> <span m="1556040">you</span> <span
  m="1556310">create</span> <span m="1556790">a</span> <span
  m="1557070">network--</span> <span m="1559300">using</span> <span
  m="1560260">Alex's</span> <span m="1562040">design,</span> <span
  m="1563290">for</span> <span m="1563500">example--</span> <span
  m="1564690">the</span> <span m="1565000">chances</span> <span
  m="1565630">are</span> <span m="1566860">that</span> <span
  m="1567160">it</span> <span m="1567580">won't</span> <span
  m="1568000">be</span> <span m="1568180">successful--</span> <span
  m="1569590">that</span> <span m="1570130">the</span> <span
  m="1570340">successful</span> <span m="1571000">networks</span> <span
  m="1571510">have</span> <span m="1571690">been</span> <span
  m="1574180">worked</span> <span m="1574660">on,</span> <span
  m="1575620">and</span> <span m="1576070">experimented</span> <span
  m="1576880">with.</span> <span m="1577310">And</span> <span
  m="1578580">a</span> <span m="1578680">good</span> <span
  m="1579100">structure</span> <span m="1579700">has</span> <span
  m="1579970">emerged,</span> <span m="1581110">but</span> <span
  m="1581320">didn't--</span> <span m="1582220">wasn't</span> <span
  m="1582550">there</span> <span m="1582760">at</span> <span
  m="1582850">the</span> <span m="1583000">start.</span> <span
  m="1583520">So</span> <span m="1583660">I</span> <span
  m="1583780">think</span> <span m="1583990">that's</span> <span
  m="1584290">a</span> <span m="1584380">topic</span> <span
  m="1584890">for</span> <span m="1586240">Monday.</span> <span
  m="1587350">And</span> <span m="1588880">I'm</span> <span
  m="1589210">really</span> <span m="1589540">just</span> <span
  m="1589900">realizing,</span> <span m="1590680">from</span> <span
  m="1590920">talking</span> <span m="1591370">to</span> <span
  m="1591490">people</span> <span m="1591880">in</span> <span
  m="1592000">the</span> <span m="1592060">field,</span> <span
  m="1592960">that</span> <span m="1595270">it's</span> <span
  m="1595600">by</span> <span m="1595840">no</span> <span
  m="1596050">means</span> <span m="1596440">automatic.</span></p><p><span
  m="1597190">That</span> <span m="1599410">structure--</span> <span
  m="1599920">even</span> <span m="1600280">if</span> <span
  m="1600460">you</span> <span m="1600640">put</span> <span
  m="1600940">in</span> <span m="1601090">a</span> <span
  m="1601150">whole</span> <span m="1601300">bunch</span> <span
  m="1601630">of</span> <span m="1601690">layers--</span> <span
  m="1602840">it</span> <span m="1603400">may</span> <span
  m="1603640">not</span> <span m="1603910">be</span> <span
  m="1604510">what</span> <span m="1604750">you</span> <span
  m="1604900">want.</span> <span m="1605350">OK.</span> <span
  m="1606160">So</span> <span m="1606370">I'm--</span> <span
  m="1607060">let</span> <span m="1607180">me</span> <span
  m="1607330">finish</span> <span m="1608800">this</span> <span
  m="1609190">argument</span> <span m="1609640">today.</span> <span
  m="1610790">Let</span> <span m="1610810">me</span> <span
  m="1610930">give</span> <span m="1611080">you</span> <span
  m="1611140">the</span> <span m="1611290">answer.</span> <span
  m="1612310">So</span> <span m="1612490">what's</span> <span
  m="1612790">the</span> <span m="1612910">good</span> <span
  m="1613170">Q?</span> <span m="1614140">I</span> <span m="1614290">have</span>
  <span m="1615220">matrices</span> <span m="1616000">Y</span> <span
  m="1616420">and</span> <span m="1616750">X.</span> <span
  m="1619750">And</span> <span m="1620530">the</span> <span
  m="1620770">idea</span> <span m="1621160">is</span> <span
  m="1621430">that</span> <span m="1621610">I</span> <span
  m="1621730">take</span> <span m="1622090">it--</span> <span
  m="1624140">I</span> <span m="1624160">look</span> <span m="1624340">at</span>
  <span m="1624460">Y</span> <span m="1624790">transpose</span> <span
  m="1625480">X.</span> <span m="1626850">So</span> <span
  m="1627040">that'll</span> <span m="1627310">be</span> <span
  m="1627490">all</span> <span m="1627790">the</span> <span
  m="1627910">dot</span> <span m="1628210">products</span> <span
  m="1628780">of</span> <span m="1629260">one</span> <span
  m="1629590">set</span> <span m="1629860">of</span> <span
  m="1629930">vectors</span> <span m="1630370">or</span> <span
  m="1630490">the</span> <span m="1630640">other</span> <span
  m="1630880">set</span> <span m="1631090">of</span> <span
  m="1631150">vectors.</span> <span m="1631630">That's</span> <span
  m="1631840">a</span> <span m="1631930">matrix.</span> <span
  m="1632860">And</span> <span m="1633010">I</span> <span m="1633220">do</span>
  <span m="1633460">its</span> <span m="1633640">SVD--</span> <span
  m="1634470">U</span> <span m="1635010">sigma</span> <span m="1635650">V</span>
  <span m="1635920">transpose.</span> <span m="1639900">So</span> <span
  m="1640190">multiply</span> <span m="1640970">this.</span> <span
  m="1643990">Multiply</span> <span m="1644590">Y--</span> <span
  m="1645300">the</span> <span m="1645610">two</span> <span
  m="1645910">bases</span> <span m="1646510">that</span> <span
  m="1646630">you're</span> <span m="1646780">given.</span></p><p><span
  m="1647840">Of</span> <span m="1647860">course,</span> <span
  m="1648700">if</span> <span m="1648880">Y</span> <span m="1649180">was</span>
  <span m="1649360">the</span> <span m="1649480">same</span> <span
  m="1649840">as</span> <span m="1649990">X--</span> <span m="1650650">if</span>
  <span m="1650800">it</span> <span m="1650860">was</span> <span
  m="1651070">an</span> <span m="1651190">orthogonal</span> <span
  m="1651820">basis--</span> <span m="1652750">you'd</span> <span
  m="1652930">have</span> <span m="1653140">the</span> <span
  m="1653290">identity,</span> <span m="1654760">no</span> <span
  m="1655060">questions.</span> <span m="1656050">But</span> <span
  m="1656560">generally,</span> <span m="1657250">we</span> <span
  m="1657430">have--</span> <span m="1657970">it</span> <span
  m="1658090">has</span> <span m="1658360">an</span> <span
  m="1658510">SVD.</span> <span m="1659980">And</span> <span
  m="1660880">we're</span> <span m="1661090">looking</span> <span
  m="1661540">for</span> <span m="1662860">a</span> <span
  m="1663640">orthogonal</span> <span m="1664240">matrix</span> <span
  m="1664840">of</span> <span m="1664930">the</span> <span
  m="1665050">best</span> <span m="1665440">Q</span> <span
  m="1668740">is--</span> <span m="1671670">Da dun da duh.</span> <span
  m="1672510">I</span> <span m="1672610">mean,</span> <span
  m="1672720">it's</span> <span m="1672870">the</span> <span
  m="1672990">right</span> <span m="1673200">time</span> <span
  m="1673530">for</span> <span m="1678890">expressions</span> <span
  m="1679550">of</span> <span m="1679670">amazement.</span> <span
  m="1681830">It</span> <span m="1682070">is</span> <span m="1682520">UV</span>
  <span m="1683000">transpose.</span> <span m="1687380">OK.</span> <span
  m="1688130">So</span> <span m="1688340">that</span> <span
  m="1691400">gives</span> <span m="1691670">us</span> <span
  m="1691820">the</span> <span m="1691880">answer.</span> <span
  m="1692270">We're</span> <span m="1692420">given</span> <span
  m="1692930">X</span> <span m="1693230">and</span> <span m="1693380">Y.</span>
  <span m="1694950">We're</span> <span m="1695070">looking</span> <span
  m="1695430">for</span> <span m="1695580">the</span> <span
  m="1695670">best</span> <span m="1696040">Q.</span> <span
  m="1697140">And</span> <span m="1697290">the</span> <span
  m="1697440">answer</span> <span m="1697800">comes</span> <span
  m="1698310">in</span> <span m="1698460">the</span> <span
  m="1698580">simplest</span> <span m="1699090">possible</span> <span
  m="1699540">way.</span> <span m="1701280">Compute</span> <span
  m="1701670">Y</span> <span m="1701910">transpose</span> <span
  m="1702540">X.</span> <span m="1703050">Compute</span> <span
  m="1703720">its</span> <span m="1703930">SVD,</span> <span
  m="1704880">and</span> <span m="1705060">use</span> <span
  m="1705540">the</span> <span m="1705870">orthogonal</span> <span
  m="1706500">matrices</span> <span m="1707220">from</span> <span
  m="1707460">the</span> <span m="1707590">SVD.</span> <span
  m="1709360">Yeah.</span></p><p><span m="1709840">And</span> <span
  m="1710290">I'm</span> <span m="1710560">out</span> <span
  m="1710770">of</span> <span m="1710860">time</span> <span
  m="1711280">so</span> <span m="1713320">proof--</span> <span
  m="1716240">it's</span> <span m="1717230">[INAUDIBLE]</span> <span
  m="1717500">line</span> <span m="1718760">later--</span> <span
  m="1721520">either</span> <span m="1723260">to</span> <span
  m="1723410">just</span> <span m="1723650">send</span> <span
  m="1723950">you</span> <span m="1724010">the</span> <span
  m="1724160">section</span> <span m="1724610">online,</span> <span
  m="1725180">or</span> <span m="1725330">to</span> <span
  m="1725810">discuss</span> <span m="1726350">it</span> <span
  m="1726500">in</span> <span m="1726650">class</span> <span
  m="1727040">Monday.</span> <span m="1727430">But</span> <span
  m="1728510">I'm</span> <span m="1728720">really</span> <span
  m="1729020">planning</span> <span m="1729500">Monday</span> <span
  m="1730040">to</span> <span m="1731450">start</span> <span
  m="1731840">with</span> <span m="1732050">question</span> <span
  m="1732530">4.</span> <span m="1733730">And</span> <span
  m="1734180">meanwhile</span> <span m="1734810">to</span> <span
  m="1734930">ask</span> <span m="1735410">a</span> <span
  m="1735530">whole</span> <span m="1735710">lot</span> <span
  m="1735920">of</span> <span m="1735980">people--</span> <span
  m="1736910">everybody</span> <span m="1737450">I</span> <span
  m="1737630">can</span> <span m="1737870">find--</span> <span
  m="1740810">about</span> <span m="1741170">that</span> <span
  m="1741980">important</span> <span m="1742460">question,</span> <span
  m="1743600">is--</span> <span m="1744560">does</span> <span
  m="1744980">deep</span> <span m="1745310">learning</span> <span
  m="1745640">usually</span> <span m="1746060">work?</span> <span
  m="1746550">How--</span> <span m="1746750">what</span> <span
  m="1747260">can</span> <span m="1747470">you</span> <span
  m="1747590">do</span> <span m="1747770">to</span> <span
  m="1748370">make</span> <span m="1748700">sure</span> <span
  m="1748970">it</span> <span m="1749090">works,</span> <span
  m="1749375">or</span> <span m="1749660">give</span> <span
  m="1749870">yourself</span> <span m="1750260">a</span> <span
  m="1750320">better</span> <span m="1750620">chance</span> <span
  m="1751070">to</span> <span m="1751220">have</span> <span
  m="1751430">it</span> <span m="1751490">work?</span> <span
  m="1753080">So</span> <span m="1753320">let's--</span> <span
  m="1753710">that's</span> <span m="1754460">up</span> <span
  m="1754610">for</span> <span m="1754790">Monday</span> <span
  m="1755180">then.</span> <span m="1755560">Good.</span></p>
embedded_media:
  - uid: 974e6030962df1764ee4de7cfec34a42
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 0Qws8BuK3RQ
  - uid: 9d29dfbc326fe7c77d752997c0a07727
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/0Qws8BuK3RQ/default.jpg'
  - uid: 855540c329972f78772ac45f56bf062e
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 0Qws8BuK3RQ
  - uid: c2ce6c2305676e911435328deb48223b
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: 0Qws8BuK3RQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-34-distance-matrices-procrustes-problem-first-project/0Qws8BuK3RQ.srt
  - uid: f64a99f5de44badf3d0d2f6ee7253213
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: 0Qws8BuK3RQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-34-distance-matrices-procrustes-problem-first-project/0Qws8BuK3RQ.pdf
  - uid: 6369c0db9fb5fc26bd22f1ad4b2d772a
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 46fd4b1b5b07b0675c2011eccdefacb8
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: a4468a7ac9d6daf1dff5984efecc3517
    parent_uid: f7538bc908587cb80a7b3788d90a46d1
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture34_300k.mp4'
type: courses
layout: video
---
