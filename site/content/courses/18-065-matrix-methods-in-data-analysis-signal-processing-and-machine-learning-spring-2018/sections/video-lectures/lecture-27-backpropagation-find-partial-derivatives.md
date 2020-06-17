---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>In this lecture, Professor Strang
  presents Professor Sra&rsquo;s theorem which proves the convergence of
  stochastic gradient descent (SGD). He then reviews backpropagation, a method
  to compute derivatives quickly, using the chain rule.</p> <h2
  class="subhead">Summary</h2> <p>Computational graph: Each step in computing
  \(F(x)\) from the weights<br /> Derivative of each step + chain rule gives
  gradient of \(F\).<br /> Reverse mode: Backwards from output to input<br />
  The key step to optimizing weights is backprop + stoch grad descent.</p>
  <p>Related section in textbook: VII.3</p> <p><strong>Instructor:</strong>
  Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: lZrIPRnoGQQ
    parent_uid: a11969b72781922397269718da7c7cb1
    title: Video-YouTube-Stream
    type: Video
    uid: 159228789a0d5923e3179cd2d1b51b99
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/lZrIPRnoGQQ/default.jpg'
    parent_uid: a11969b72781922397269718da7c7cb1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 524a599f9672eddf70cd6f03a12424eb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: lZrIPRnoGQQ
    parent_uid: a11969b72781922397269718da7c7cb1
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 01674cf5262cccd1fd75bc3b7d76a2a9
  - id: lZrIPRnoGQQ.srt
    parent_uid: a11969b72781922397269718da7c7cb1
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-27-backpropagation-find-partial-derivatives/lZrIPRnoGQQ.srt
    title: 3play caption file
    type: null
    uid: 5321a785355053ef3b9d34e674db319d
  - id: lZrIPRnoGQQ.pdf
    parent_uid: a11969b72781922397269718da7c7cb1
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-27-backpropagation-find-partial-derivatives/lZrIPRnoGQQ.pdf
    title: 3play pdf file
    type: null
    uid: f746508a6b1dd40c702cc4424382c7ba
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a11969b72781922397269718da7c7cb1
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ca722b15b0f823c38e036c5d886de9a3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a11969b72781922397269718da7c7cb1
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bd7a951d4335dae7a346b446f2b7c93a
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture27_300k.mp4'
    parent_uid: a11969b72781922397269718da7c7cb1
    title: Video-Internet Archive-MP4
    type: Video
    uid: 48ba78d192ddab76dc8e7667a2200d6d
inline_embed_id: 67655889lecture27backpropagationtofindderivativeofthelearningfunction9008456
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-27-backpropagation-find-partial-derivatives
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-27-backpropagation-find-partial-derivatives
title: 'Lecture 27: Backpropagation: Find Partial Derivatives'
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">OpenCourseWare</span> <span
  m="7520">continue</span> <span m="8029">to</span> <span m="8180">offer</span>
  <span m="8510">high-quality</span> <span m="9200">educational</span> <span
  m="9860">resources</span> <span m="10430">for</span> <span
  m="10550">free.</span> <span m="11610">To</span> <span m="11630">make</span>
  <span m="11840">a</span> <span m="11900">donation</span> <span
  m="12680">or</span> <span m="12800">to</span> <span m="12950">view</span>
  <span m="13160">additional</span> <span m="13550">materials</span> <span
  m="14180">from</span> <span m="14360">hundreds</span> <span
  m="14690">of</span> <span m="14810">MIT</span> <span m="15170">courses,</span>
  <span m="16470">visit</span> <span m="16670">MIT</span> <span
  m="17180">OpenCourseWare</span> <span m="18140">at</span> <span
  m="18290">ocw.mit.edu.</span></p><p><span m="22870">GILBERT STRANG:</span>
  <span m="23060">OK,</span> <span m="23250">here</span> <span
  m="23430">we</span> <span m="23550">go.</span> <span m="25590">All</span>
  <span m="25830">set,</span> <span m="26280">and</span> <span
  m="27360">two</span> <span m="27630">topics</span> <span m="28200">for</span>
  <span m="28380">today--</span> <span m="29250">one</span> <span
  m="29550">is</span> <span m="29760">to</span> <span m="29880">go</span> <span
  m="30120">back</span> <span m="30600">to</span> <span
  m="31500">Professor</span> <span m="32100">Sra's</span> <span
  m="32790">lecture.</span> <span m="34800">That</span> <span
  m="35070">was</span> <span m="35430">last</span> <span
  m="35940">Friday.</span></p><p><span m="37410">And</span> <span
  m="38460">he</span> <span m="38700">promised</span> <span m="39240">a</span>
  <span m="39340">theorem</span> <span m="39780">and</span> <span
  m="39930">proof.</span> <span m="41110">And</span> <span m="42570">this</span>
  <span m="42780">morning,</span> <span m="43140">he</span> <span
  m="43290">sent</span> <span m="43850">it</span> <span m="43980">to</span>
  <span m="44220">me.</span> <span m="45180">So</span> <span
  m="47260">it's</span> <span m="47490">proving</span> <span
  m="48180">the</span> <span m="48360">convergence</span> <span
  m="49200">of</span> <span m="49350">stochastic</span> <span
  m="50100">gradient</span> <span m="50670">descent.</span></p><p><span
  m="51660">And</span> <span m="51810">really,</span> <span
  m="52680">what's</span> <span m="53160">important,</span> <span
  m="53880">maybe,</span> <span m="54240">and</span> <span
  m="54390">useful</span> <span m="55380">is</span> <span m="55620">not</span>
  <span m="56040">so</span> <span m="56250">much</span> <span
  m="56640">the</span> <span m="56820">details</span> <span m="57480">of</span>
  <span m="57600">the</span> <span m="57720">proof,</span> <span
  m="58590">which</span> <span m="58830">I'm</span> <span m="59010">just</span>
  <span m="60270">learning,</span> <span m="61440">but</span> <span
  m="62100">the</span> <span m="62340">assumptions--</span> <span
  m="63700">what's</span> <span m="64230">the</span> <span
  m="64379">logic</span> <span m="64920">here,</span> <span
  m="65129">what</span> <span m="65370">do</span> <span m="65459">you</span>
  <span m="65580">have</span> <span m="65820">to</span> <span
  m="66030">assume</span> <span m="67230">about</span> <span
  m="67860">the</span> <span m="68040">gradient</span> <span
  m="70240">and</span> <span m="70440">about</span> <span m="70740">the</span>
  <span m="70920">algorithm</span> <span m="71850">to</span> <span
  m="72510">get</span> <span m="73110">the</span> <span m="73350">answer?</span>
  <span m="74970">But</span> <span m="75180">now</span> <span m="77100">I</span>
  <span m="77370">actually</span> <span m="77790">look</span> <span
  m="78180">back</span> <span m="78690">at</span> <span m="79140">the</span>
  <span m="79290">video</span> <span m="79770">of</span> <span
  m="79920">his</span> <span m="81510">lecture.</span> <span
  m="82920">And</span> <span m="84000">it</span> <span m="84180">was</span>
  <span m="84420">excellent.</span></p><p><span m="85860">And</span> <span
  m="86790">as</span> <span m="87030">I</span> <span m="87270">looked</span>
  <span m="87660">at</span> <span m="87900">it,</span> <span
  m="88080">there</span> <span m="88200">were</span> <span m="88440">a</span>
  <span m="88470">couple</span> <span m="88770">of</span> <span
  m="88870">things</span> <span m="89970">later</span> <span m="90510">in</span>
  <span m="90630">the</span> <span m="90720">lecture</span> <span
  m="92640">that</span> <span m="92970">I</span> <span m="93120">thought</span>
  <span m="93420">would</span> <span m="93630">make</span> <span
  m="93840">good</span> <span m="94050">projects.</span> <span
  m="95340">So</span> <span m="95580">I</span> <span m="95700">don't</span>
  <span m="95880">know</span> <span m="96000">if</span> <span
  m="96120">anybody</span> <span m="96690">is</span> <span
  m="96900">still</span> <span m="97590">open</span> <span m="98100">to</span>
  <span m="98910">what</span> <span m="99090">to</span> <span
  m="99240">do</span> <span m="99480">on</span> <span m="99630">a</span> <span
  m="99690">project.</span> <span m="100920">But</span> <span
  m="102280">here</span> <span m="102390">are</span> <span m="102420">my</span>
  <span m="102630">two</span> <span m="102900">ideas.</span></p><p><span
  m="104220">And</span> <span m="104910">if</span> <span
  m="105720">you've</span> <span m="105900">already</span> <span
  m="106200">finished</span> <span m="106560">your</span> <span
  m="106680">project,</span> <span m="107280">well,</span> <span
  m="108030">you</span> <span m="108360">get</span> <span m="108600">an</span>
  <span m="108750">A-plus</span> <span m="109530">by</span> <span
  m="111420">considering</span> <span m="112200">one</span> <span
  m="112410">of</span> <span m="112500">these.</span> <span m="113640">So</span>
  <span m="114020">you</span> <span m="114160">remember--</span> <span
  m="114690">and</span> <span m="114900">this</span> <span
  m="115140">will</span> <span m="115380">remind</span> <span
  m="115890">you</span> <span m="116010">of</span> <span m="116760">the</span>
  <span m="117330">lecture,</span> <span m="117750">which</span> <span
  m="117990">is</span> <span m="118140">a</span> <span m="118200">good</span>
  <span m="118410">thing.</span> <span m="119170">So</span> <span
  m="119250">do</span> <span m="119330">you</span> <span
  m="119400">remember</span> <span m="119910">that</span> <span
  m="120540">question</span> <span m="121140">1</span> <span
  m="122640">was</span> <span m="123000">whether,</span> <span
  m="123630">in</span> <span m="123885">the</span> <span
  m="124140">stochastic</span> <span m="124950">part,</span> <span
  m="126810">after</span> <span m="127170">you've</span> <span
  m="127380">sampled</span> <span m="128610">one</span> <span
  m="129360">or</span> <span m="129660">some</span> <span m="129930">mini</span>
  <span m="130289">batch--</span> <span m="130770">but</span> <span
  m="130949">let's</span> <span m="131220">just</span> <span
  m="131460">say</span> <span m="131760">one</span> <span m="134190">of</span>
  <span m="134370">the</span> <span m="134550">lost</span> <span
  m="134910">functions,</span> <span m="136170">coming</span> <span
  m="136530">from</span> <span m="136770">one</span> <span
  m="137130">sample--</span> <span m="137800">you</span> <span
  m="137820">remember,</span> <span m="138240">the</span> <span
  m="138360">whole</span> <span m="138600">point</span> <span
  m="138990">is</span> <span m="139770">that</span> <span m="139890">if</span>
  <span m="140040">we</span> <span m="140190">do</span> <span
  m="140460">all</span> <span m="141660">zillion</span> <span
  m="142860">samples</span> <span m="143730">at</span> <span
  m="143910">every</span> <span m="144270">iteration,</span> <span
  m="144930">we're</span> <span m="145170">really,</span> <span
  m="145750">really</span> <span m="146040">slow.</span></p><p><span
  m="147400">So</span> <span m="147630">the</span> <span
  m="148200">stochastic</span> <span m="149190">idea</span> <span
  m="149670">is</span> <span m="149880">to</span> <span
  m="150000">randomly</span> <span m="150810">pick</span> <span
  m="151170">one</span> <span m="152100">or</span> <span m="152360">a</span>
  <span m="152400">mini</span> <span m="152790">batch</span> <span
  m="153450">of</span> <span m="154320">the</span> <span
  m="154500">samples</span> <span m="155900">and</span> <span
  m="156510">just</span> <span m="157860">reduce</span> <span
  m="158370">their</span> <span m="158730">loss,</span> <span
  m="159330">just</span> <span m="159660">deal</span> <span
  m="159930">with</span> <span m="160170">the</span> <span
  m="160660">loss--</span> <span m="161790">say,</span> <span
  m="162080">the</span> <span m="162210">square</span> <span
  m="162810">loss.</span> <span m="163440">Or</span> <span
  m="163710">later</span> <span m="164130">we'll</span> <span
  m="164340">see</span> <span m="165150">cross-entropy</span> <span
  m="166410">loss.</span> <span m="166980">But</span> <span
  m="167760">whatever</span> <span m="168210">the</span> <span
  m="168360">cost</span> <span m="168840">is,</span> <span
  m="171720">just</span> <span m="172020">do</span> <span m="172260">a</span>
  <span m="172320">few</span> <span m="172770">or</span> <span
  m="173070">one.</span> <span m="174240">And</span> <span
  m="175020">then</span> <span m="175260">the</span> <span
  m="175380">question</span> <span m="175860">was,</span> <span
  m="176190">after</span> <span m="176460">you've</span> <span
  m="176580">done</span> <span m="176820">that</span> <span
  m="177030">one,</span> <span m="177490">do you</span> <span
  m="177600">put</span> <span m="177810">it</span> <span m="177900">back</span>
  <span m="178230">in</span> <span m="178320">the</span> <span
  m="178440">pot</span> <span m="180510">every</span> <span
  m="180810">time</span> <span m="181350">you</span> <span
  m="181500">sample</span> <span m="182100">over</span> <span
  m="182400">the</span> <span m="182550">whole</span> <span
  m="183180">collection?</span></p><p><span m="184380">But</span> <span
  m="184680">that's</span> <span m="185040">expensive.</span> <span
  m="186810">Or</span> <span m="187140">do</span> <span m="187260">you</span>
  <span m="187590">just</span> <span m="188580">make</span> <span
  m="188910">a</span> <span m="191160">list</span> <span m="191610">of</span>
  <span m="192120">random</span> <span m="192600">order</span> <span
  m="193050">of</span> <span m="193620">all</span> <span m="193920">the</span>
  <span m="194070">samples</span> <span m="195060">and</span> <span
  m="195210">go</span> <span m="195420">through</span> <span
  m="195720">them?</span> <span m="197290">Which</span> <span
  m="197560">is</span> <span m="197770">then</span> <span
  m="198160">without</span> <span m="198610">replacement,</span> <span
  m="200140">which</span> <span m="200350">is</span> <span m="200500">a</span>
  <span m="200560">sort</span> <span m="200860">of</span> <span
  m="201070">semi-illegal.</span></p><p><span m="202840">That</span> <span
  m="203080">is,</span> <span m="203330">the</span> <span
  m="205840">logic</span> <span m="206560">in</span> <span m="208090">the</span>
  <span m="209890">randomization</span> <span m="211780">asks</span> <span
  m="212380">you</span> <span m="212620">to</span> <span
  m="212890">replace</span> <span m="213610">every</span> <span
  m="213880">time.</span> <span m="214360">But</span> <span
  m="214960">nobody</span> <span m="215380">does</span> <span
  m="215740">it.</span> <span m="216620">It</span> <span m="216870">costs</span>
  <span m="217330">a</span> <span m="217360">lot--</span> <span
  m="218020">probably</span> <span m="218410">not</span> <span
  m="218650">worth</span> <span m="218980">it.</span></p><p><span
  m="219670">So</span> <span m="219880">the</span> <span
  m="220000">project</span> <span m="220510">would</span> <span
  m="220660">be,</span> <span m="221680">suppose</span> <span
  m="222130">you</span> <span m="222220">take</span> <span
  m="222610">1,000--</span> <span m="223870">or,</span> <span
  m="223990">say,</span> <span m="224250">just</span> <span
  m="224530">100.</span> <span m="226290">100</span> <span
  m="226720">random</span> <span m="227140">numbers--</span> <span
  m="229490">say</span> <span m="229760">you</span> <span m="230060">use</span>
  <span m="230390">MATLAB,</span> <span m="234020">just</span> <span
  m="234305">the</span> <span m="234590">command</span> <span
  m="235100">&quot;rand.&quot;</span> <span m="236240">So</span> <span
  m="236450">you</span> <span m="236600">get</span> <span
  m="236840">numbers</span> <span m="237350">whose</span> <span
  m="237590">average</span> <span m="237850">is</span> <span m="238220">a</span>
  <span m="238280">half</span> <span m="239030">from</span> <span
  m="239270">rand.</span> <span m="240540">They're</span> <span
  m="240840">between</span> <span m="241250">0</span> <span
  m="241580">and</span> <span m="241700">1.</span></p><p><span
  m="242840">OK.</span> <span m="243250">So</span> <span m="243440">we</span>
  <span m="243620">know</span> <span m="243890">what</span> <span
  m="244160">the</span> <span m="244400">average</span> <span
  m="244970">is.</span> <span m="246320">So</span> <span m="246560">let's</span>
  <span m="246830">compute</span> <span m="247280">it</span> <span
  m="247400">two</span> <span m="247670">ways.</span> <span
  m="248880">One</span> <span m="249140">is</span> <span m="249470">by</span>
  <span m="249860">not</span> <span m="250280">replacing.</span> <span
  m="253130">And</span> <span m="253340">that's</span> <span
  m="253790">the</span> <span m="254210">interesting</span> <span
  m="254840">one.</span></p><p><span m="256800">So</span> <span
  m="257810">take</span> <span m="258190">100</span> <span
  m="258700">samples.</span> <span m="259700">Well,</span> <span
  m="259970">I</span> <span m="260060">guess</span> <span m="260329">we</span>
  <span m="260510">know</span> <span m="261350">that,</span> <span
  m="261800">after</span> <span m="262100">we've</span> <span
  m="262280">got</span> <span m="262490">through</span> <span
  m="262760">the</span> <span m="262850">full</span> <span
  m="263140">100,</span> <span m="265050">we're</span> <span
  m="265370">going</span> <span m="265480">to</span> <span m="265610">get</span>
  <span m="265790">exactly</span> <span m="266300">the</span> <span
  m="266390">right</span> <span m="266690">answer.</span> <span
  m="267740">But</span> <span m="269300">anyway,</span> <span
  m="271400">my</span> <span m="271790">question</span> <span
  m="272270">would</span> <span m="272480">be,</span> <span
  m="273330">how</span> <span m="273380">much</span> <span
  m="273710">difference</span> <span m="274190">do</span> <span
  m="274280">you</span> <span m="274460">see</span> <span m="274970">in</span>
  <span m="276410">the</span> <span m="276920">eventual</span> <span
  m="277610">approach--</span> <span m="278500">so</span> <span
  m="278660">the</span> <span m="278780">law</span> <span m="279140">of</span>
  <span m="279230">large</span> <span m="279650">numbers,</span> <span
  m="280220">I</span> <span m="280340">guess,</span> <span
  m="280670">would</span> <span m="280820">tell</span> <span
  m="281090">us</span> <span m="281300">we</span> <span m="282050">get</span>
  <span m="282290">a</span> <span m="282710">average</span> <span
  m="283160">of</span> <span m="283280">a</span> <span m="283340">half</span>
  <span m="285410">for</span> <span m="285590">these</span> <span
  m="287760">numbers</span> <span m="288330">with</span> <span
  m="288750">uniform</span> <span m="289320">distribution</span> <span
  m="290820">between</span> <span m="291180">0</span> <span
  m="291510">and</span> <span m="291600">1.</span></p><p><span
  m="291930">Should</span> <span m="292140">I</span> <span m="292260">be</span>
  <span m="292410">writing</span> <span m="292830">anything</span> <span
  m="293250">here?</span> <span m="294000">Maybe</span> <span
  m="294300">I</span> <span m="294420">should.</span> <span
  m="295540">OK.</span> <span m="296370">So</span> <span m="297270">this</span>
  <span m="297540">is</span> <span m="297720">project</span> <span
  m="298290">1.</span></p><p><span m="302930">You</span> <span
  m="303390">pick</span> <span m="303660">numbers</span> <span
  m="306360">ak,</span> <span m="309090">which</span> <span m="309420">is</span>
  <span m="311520">from</span> <span m="311760">rand--</span> <span
  m="313110">so</span> <span m="314040">uniformly</span> <span
  m="314880">on</span> <span m="315360">0,1.</span> <span m="322470">And</span>
  <span m="322590">then</span> <span m="323010">my</span> <span
  m="323250">question</span> <span m="323700">is,</span> <span
  m="323940">what</span> <span m="324150">about</span> <span
  m="324480">convergence</span> <span m="325350">to</span> <span
  m="326560">the</span> <span m="328170">final--</span> <span
  m="329310">the</span> <span m="329490">average</span> <span
  m="329960">is</span> <span m="330150">a</span> <span
  m="330240">half.</span></p><p><span m="332080">So</span> <span
  m="332480">this</span> <span m="332550">may</span> <span m="333560">be</span>
  <span m="333770">too</span> <span m="333960">simple</span> <span
  m="334400">an</span> <span m="334530">example.</span> <span
  m="335100">But</span> <span m="335910">could</span> <span m="336120">we</span>
  <span m="336330">see</span> <span m="336600">what</span> <span
  m="336840">happens</span> <span m="337800">for</span> <span
  m="337980">the</span> <span m="338130">convergence</span> <span
  m="339330">of</span> <span m="341550">the</span> <span
  m="341760">average</span> <span m="342990">as</span> <span
  m="343530">you</span> <span m="344910">either</span> <span
  m="345240">do</span> <span m="345450">replacements</span> <span
  m="346200">or</span> <span m="346320">don't</span> <span m="346590">do</span>
  <span m="346830">replacements?</span> <span m="348030">And</span> <span
  m="348720">in</span> <span m="348900">fact,</span> <span m="349260">I</span>
  <span m="349650">would</span> <span m="349830">like</span> <span
  m="350100">to</span> <span m="350220">see</span> <span m="350490">a</span>
  <span m="350910">figure</span> <span m="351330">that</span> <span
  m="352680">looks</span> <span m="353010">like</span> <span
  m="353340">those</span> <span m="353730">in</span> <span m="353880">his</span>
  <span m="354120">lecture.</span> <span m="354405">Do</span> <span
  m="354690">you</span> <span m="354810">remember?</span></p><p><span
  m="355880">He</span> <span m="356220">started</span> <span
  m="356790">it</span> <span m="356910">somewhere--</span> <span
  m="358470">start--</span> <span m="360750">and</span> <span
  m="360990">then</span> <span m="361380">here's</span> <span
  m="361860">the</span> <span m="362840">finish.</span> <span
  m="365730">But</span> <span m="365950">you</span> <span
  m="366070">remember,</span> <span m="366460">the</span> <span
  m="366700">stochastic</span> <span m="367360">gradient</span> <span
  m="367840">descent</span> <span m="368500">was</span> <span
  m="368740">kind</span> <span m="368910">of</span> <span
  m="369250">pretty</span> <span m="369520">effective</span> <span
  m="370150">at</span> <span m="370240">the</span> <span
  m="370360">beginning.</span> <span m="371620">Well,</span> <span
  m="372400">the</span> <span m="372520">beginning,</span> <span
  m="373020">those</span> <span m="373300">might</span> <span
  m="373570">be</span> <span m="373930">100</span> <span
  m="374410">iterations</span> <span m="375100">each--</span> <span
  m="375460">one</span> <span m="375850">epoch,</span> <span
  m="377860">one</span> <span m="378730">run</span> <span
  m="379060">through</span> <span m="379450">the</span> <span
  m="379600">full</span> <span m="379900">number.</span></p><p><span
  m="380960">But</span> <span m="381070">then</span> <span
  m="381370">when</span> <span m="381580">it</span> <span m="381670">got</span>
  <span m="381890">to</span> <span m="382000">here,</span> <span
  m="383110">got</span> <span m="383320">closer,</span> <span
  m="383830">it</span> <span m="383920">started</span> <span
  m="385270">oscillating.</span> <span m="387180">You</span> <span
  m="387300">remember,</span> <span m="387660">he</span> <span
  m="388410">identified</span> <span m="389160">the</span> <span
  m="389310">region</span> <span m="389910">of</span> <span
  m="390060">confusion</span> <span m="390930">around</span> <span
  m="391790">the</span> <span m="392360">thing.</span> <span
  m="393790">Well,</span> <span m="393930">my</span> <span
  m="394470">suggestion</span> <span m="395100">is</span> <span
  m="395280">just,</span> <span m="397440">I</span> <span
  m="397770">think</span> <span m="398010">those</span> <span
  m="398250">videos</span> <span m="398670">should</span> <span
  m="398940">be</span> <span m="399090">accessible</span> <span
  m="399690">to</span> <span m="399810">you</span> <span m="400050">on--</span>
  <span m="400920">are</span> <span m="401010">they</span> <span
  m="401280">on</span> <span m="402040">Stellar?</span></p><p><span
  m="403140">Yeah.</span> <span m="403710">So</span> <span m="404520">I'd</span>
  <span m="404700">love</span> <span m="404910">to</span> <span
  m="405060">see</span> <span m="406950">that</span> <span
  m="408900">behavior</span> <span m="412210">and</span> <span
  m="412440">some</span> <span m="413370">good</span> <span
  m="413610">examples</span> <span m="414270">of</span> <span
  m="414360">that</span> <span m="414570">behavior</span> <span
  m="415110">and</span> <span m="415200">some</span> <span
  m="415440">pictures</span> <span m="415980">to</span> <span
  m="416130">you.</span> <span m="416510">So</span> <span m="416730">that</span>
  <span m="416910">would</span> <span m="417060">be</span> <span
  m="417630">one</span> <span m="417930">idea</span> <span
  m="418650">with</span> <span m="419010">and</span> <span
  m="419190">with--</span> <span m="419730">oh,</span> <span
  m="419940">yeah,</span> <span m="420150">that's</span> <span
  m="420480">also</span> <span m="420930">idea</span> <span m="421380">2.</span>
  <span m="423840">Idea</span> <span m="424280">2</span> <span
  m="424650">is</span> <span m="425730">the</span> <span m="425850">good</span>
  <span m="426660">start</span> <span m="427320">and</span> <span
  m="427530">then</span> <span m="427830">the</span> <span m="429090">bad</span>
  <span m="429420">finish</span> <span m="430630">for</span> <span
  m="430860">a</span> <span m="431010">stochastic</span> <span
  m="431540">gradient</span> <span m="432060">descent.</span></p><p><span
  m="432560">And</span> <span m="432750">of</span> <span
  m="432840">course,</span> <span m="436290">even</span> <span
  m="436590">without</span> <span m="437040">this,</span> <span
  m="437970">the</span> <span m="438180">magic</span> <span
  m="438690">words</span> <span m="439290">in</span> <span
  m="440820">computations</span> <span m="442650">is</span> <span
  m="442860">&quot;early</span> <span m="443220">stopping.&quot;</span> <span
  m="445170">We</span> <span m="446790">don't</span> <span
  m="449070">over-fit.</span> <span m="455330">So</span> <span
  m="455930">we</span> <span m="456140">wanted</span> <span m="456470">to</span>
  <span m="456620">stop</span> <span m="456980">early,</span> <span
  m="457340">anyway.</span></p><p><span m="458810">And</span> <span
  m="459170">early</span> <span m="459470">stopping</span> <span
  m="460040">just</span> <span m="460410">is</span> <span m="460880">a</span>
  <span m="460970">good</span> <span m="461240">idea</span> <span
  m="464850">if</span> <span m="465080">that's</span> <span
  m="465380">what</span> <span m="465530">the</span> <span
  m="465680">approach</span> <span m="466190">to</span> <span
  m="467390">the</span> <span m="470990">x</span> <span m="471230">star</span>
  <span m="471680">that</span> <span m="471860">you're</span> <span
  m="472100">looking</span> <span m="472430">for.</span> <span
  m="473400">This</span> <span m="473570">would</span> <span
  m="473750">be</span> <span m="473930">the</span> <span m="474080">place</span>
  <span m="474530">where</span> <span m="474740">the--</span> <span
  m="477170">that's</span> <span m="477800">x</span> <span
  m="478160">star</span> <span m="478670">where</span> <span
  m="480230">grad</span> <span m="480860">f</span> <span m="481240">at</span>
  <span m="481675">x</span> <span m="482110">star</span> <span
  m="482510">is</span> <span m="482650">0.</span> <span m="485040">That's</span>
  <span m="485360">the</span> <span m="485480">minimum</span> <span
  m="485930">point.</span></p><p><span m="487280">That's</span> <span
  m="488110">ARG</span> <span m="488430">MIN--</span> <span
  m="492500">exactly</span> <span m="493010">what</span> <span
  m="493190">we're</span> <span m="493310">looking</span> <span
  m="493610">for.</span> <span m="494900">And</span> <span m="495170">we</span>
  <span m="495320">don't</span> <span m="495500">find</span> <span
  m="495860">it</span> <span m="495980">very</span> <span
  m="496310">well.</span> <span m="497450">But</span> <span m="497720">we</span>
  <span m="497870">get</span> <span m="498110">close</span> <span
  m="498440">to</span> <span m="498590">it</span> <span
  m="498710">fast.</span></p><p><span m="500090">OK.</span> <span
  m="501800">Two</span> <span m="502070">ideas</span> <span m="502520">on</span>
  <span m="502720">projects--</span> <span m="505520">so</span> <span
  m="507260">maybe</span> <span m="508400">I'll</span> <span
  m="508520">go</span> <span m="508790">to</span> <span m="508970">the</span>
  <span m="509090">main</span> <span m="509540">topic</span> <span
  m="510080">of</span> <span m="510230">today--</span> <span
  m="511630">the</span> <span m="512630">topic</span> <span m="513080">I</span>
  <span m="513200">promised--</span> <span m="515299">the</span> <span
  m="515419">idea</span> <span m="515750">of</span> <span m="515840">back</span>
  <span m="516110">propagation.</span> <span m="519100">This</span> <span
  m="519370">is</span> <span m="519549">all</span> <span m="519909">to</span>
  <span m="520150">compute</span> <span m="526710">grad</span> <span
  m="527110">f--</span> <span m="528600">the</span> <span
  m="529110">gradient.</span> <span m="530130">All</span> <span
  m="530310">the</span> <span m="530460">derivatives--</span> <span
  m="532050">this</span> <span m="532290">is</span> <span m="532500">the</span>
  <span m="533980">df</span> <span m="535050">dx1</span> <span
  m="537240">to</span> <span m="537750">df</span> <span m="538080">dxm,</span>
  <span m="542460">maybe,</span> <span m="542850">I'll</span> <span
  m="543030">say,</span> <span m="544500">where</span> <span m="544770">I</span>
  <span m="544920">have</span> <span m="549762">m</span> <span
  m="551610">features</span> <span m="553110">for</span> <span
  m="553350">the</span> <span m="553470">sample.</span></p><p><span
  m="554730">OK.</span> <span m="555690">So</span> <span
  m="555870">that's</span> <span m="556140">back</span> <span
  m="556380">propagation.</span> <span m="557645">And</span> <span
  m="558130">that's</span> <span m="558450">the</span> <span
  m="559410">thing</span> <span m="559800">whose</span> <span
  m="560700">discovery,</span> <span m="561540">or</span> <span
  m="561750">rediscovery,</span> <span m="565050">put</span> <span
  m="565560">neural</span> <span m="565890">nets</span> <span
  m="566580">on</span> <span m="566760">the</span> <span m="566850">map.</span>
  <span m="569270">That's</span> <span m="569600">the</span> <span
  m="569720">key</span> <span m="569990">calculation,</span> <span
  m="570740">of</span> <span m="570860">course,</span> <span
  m="571160">to</span> <span m="571270">find</span> <span m="571580">the</span>
  <span m="571670">gradient.</span> <span m="572510">In</span> <span
  m="572690">the</span> <span m="573110">steepest</span> <span
  m="573670">descent</span> <span m="574070">algorithm,</span> <span
  m="574610">every</span> <span m="574910">step</span> <span
  m="575900">needs</span> <span m="576230">a</span> <span
  m="576290">gradient.</span></p><p><span m="578030">And</span> <span
  m="579050">if</span> <span m="579230">you</span> <span m="579410">can't</span>
  <span m="579740">compute</span> <span m="580220">it</span> <span
  m="580340">quickly,</span> <span m="580950">you're</span> <span
  m="582800">in</span> <span m="582980">bad</span> <span
  m="583220">shape.</span> <span m="585620">But</span> <span
  m="585860">you</span> <span m="585950">can</span> <span
  m="586340">compute</span> <span m="586790">it</span> <span
  m="586880">quickly</span> <span m="587840">by</span> <span
  m="588200">this</span> <span m="589280">automatic</span> <span
  m="590090">differentiation</span> <span m="591260">in</span> <span
  m="591680">reverse</span> <span m="592250">mode,</span> <span
  m="593780">which</span> <span m="594140">is</span> <span
  m="594590">otherwise</span> <span m="595250">known--</span> <span
  m="596780">I</span> <span m="596930">don't</span> <span
  m="597140">think</span> <span m="597410">the</span> <span
  m="598400">people--</span> <span m="598770">maybe</span> <span
  m="600470">Hinton</span> <span m="603110">was</span> <span
  m="603360">the</span> <span m="603440">leader</span> <span
  m="609090">in</span> <span m="609350">developing</span> <span
  m="611330">deep</span> <span m="611720">neural</span> <span
  m="612110">net--</span> <span m="612620">deep</span> <span
  m="612920">learning.</span></p><p><span m="616200">So</span> <span
  m="616460">I</span> <span m="616640">give</span> <span m="616880">him</span>
  <span m="617030">big</span> <span m="617270">credit</span> <span
  m="617690">for</span> <span m="617900">that--</span> <span
  m="618200">that</span> <span m="618500">back</span> <span
  m="618830">propagation</span> <span m="619640">would</span> <span
  m="619850">work</span> <span m="620630">and</span> <span
  m="620810">would</span> <span m="621020">give</span> <span
  m="621320">him</span> <span m="622040">fast</span> <span
  m="622520">gradients.</span> <span m="623810">But</span> <span
  m="624650">it</span> <span m="624800">actually</span> <span
  m="625190">had</span> <span m="625400">been</span> <span
  m="626990">studied</span> <span m="627440">before</span> <span
  m="628940">under</span> <span m="629270">the</span> <span
  m="629420">name</span> <span m="629840">AD--</span> <span
  m="630650">Automatic</span> <span m="631280">Differentiation.</span> <span
  m="632280">So</span> <span m="632630">may I</span> <span
  m="633050">just</span> <span m="633350">tell</span> <span
  m="633620">you</span> <span m="633710">that</span> <span
  m="633920">idea?</span> <span m="635840">Some</span> <span
  m="636110">of</span> <span m="636260">you</span> <span m="636650">may</span>
  <span m="637010">know</span> <span m="637240">it,</span> <span
  m="638640">may</span> <span m="638900">know</span> <span
  m="639140">about</span> <span m="639470">it,</span> <span
  m="639590">may</span> <span m="639800">know</span> <span
  m="639980">more</span> <span m="640250">than</span> <span m="640430">I,</span>
  <span m="640730">and</span> <span m="641090">might</span> <span
  m="641450">know</span> <span m="645698">a</span> <span m="646170">good</span>
  <span m="646490">website</span> <span m="647040">to</span> <span
  m="647700">see</span> <span m="648120">this</span> <span
  m="648510">description.</span></p><p><span m="649720">There will</span> <span
  m="650010">be,</span> <span m="650410">of</span> <span
  m="650430">course,</span> <span m="650950">a</span> <span
  m="651450">section</span> <span m="653040">of</span> <span
  m="653160">the</span> <span m="653250">notes,</span> <span
  m="656300">you</span> <span m="656430">already</span> <span
  m="656730">have</span> <span m="657000">it.</span> <span
  m="657630">This</span> <span m="657880">is</span> <span
  m="657990">section</span> <span m="658830">7.2.</span> <span
  m="662770">So</span> <span m="663030">this</span> <span m="663270">is</span>
  <span m="663420">the</span> <span m="664230">chapter</span> <span
  m="664740">on</span> <span m="665040">deep</span> <span
  m="665310">learning.</span></p><p><span m="666630">And</span> <span
  m="666930">the</span> <span m="667050">first</span> <span
  m="667560">section</span> <span m="668280">was</span> <span
  m="668580">about</span> <span m="668910">the</span> <span
  m="669060">structure</span> <span m="669660">of</span> <span
  m="669840">F</span> <span m="670020">of</span> <span m="670170">x.</span>
  <span m="671040">And</span> <span m="671370">you</span> <span
  m="671490">remember</span> <span m="671880">the</span> <span
  m="672030">key</span> <span m="672360">point</span> <span
  m="672720">about</span> <span m="673020">the</span> <span
  m="673140">structure</span> <span m="673710">of</span> <span
  m="673830">F</span> <span m="674040">of</span> <span m="674160">x</span> <span
  m="675840">is</span> <span m="676170">that</span> <span m="676650">I</span>
  <span m="676950">start</span> <span m="677310">with</span> <span
  m="677550">x</span> <span m="677940">and</span> <span m="678060">apply</span>
  <span m="678480">some</span> <span m="678810">function,</span> <span
  m="679350">F1</span> <span m="679920">of</span> <span m="680070">x.</span>
  <span m="681090">And</span> <span m="681270">to</span> <span
  m="681420">that,</span> <span m="681780">I</span> <span
  m="681930">apply</span> <span m="682320">some</span> <span
  m="682620">function,</span> <span m="683160">F2</span> <span
  m="683640">of</span> <span m="683790">x.</span> <span m="684550">And</span>
  <span m="684760">to</span> <span m="684930">that,</span> <span
  m="685230">I</span> <span m="685410">apply</span> <span m="685770">some</span>
  <span m="686310">function</span> <span m="686970">of</span> <span
  m="687930">F3</span> <span m="688650">of</span> <span m="688920">F2</span>
  <span m="689460">of</span> <span m="689640">F1</span> <span
  m="690120">of</span> <span m="690270">x.</span></p><p><span
  m="690930">And</span> <span m="691110">that's</span> <span
  m="691470">the</span> <span m="691590">thing</span> <span
  m="691950">whose</span> <span m="692280">derivative</span> <span
  m="692820">I</span> <span m="692970">need.</span> <span m="695320">So</span>
  <span m="695530">I'll</span> <span m="695650">just</span> <span
  m="695920">take</span> <span m="696430">ordinary</span> <span
  m="696940">derivative--</span> <span m="698110">well,</span> <span
  m="698440">partial</span> <span m="698890">derivatives,</span> <span
  m="699520">really.</span> <span m="700950">Yeah, I</span> <span
  m="701140">better</span> <span m="701410">say</span> <span
  m="701650">partial</span> <span m="702100">derivatives.</span></p><p><span
  m="702890">So</span> <span m="703000">suppose</span> <span m="703600">x</span>
  <span m="704320">is</span> <span m="705040">a</span> <span
  m="705130">pair,</span> <span m="705600">xy.</span> <span
  m="708690">Example--</span> <span m="710690">so</span> <span
  m="712000">here,</span> <span m="715540">let</span> <span m="715590">me</span>
  <span m="715740">show</span> <span m="716010">you</span> <span
  m="716130">my</span> <span m="716400">example.</span> <span
  m="717880">So</span> <span m="718020">suppose</span> <span m="718650">F</span>
  <span m="718830">of</span> <span m="718980">x</span> <span
  m="720690">is--</span> <span m="722610">let</span> <span m="722730">me</span>
  <span m="722880">take</span> <span m="723120">a</span> <span
  m="723210">simple</span> <span m="723630">example--</span> <span
  m="724650">x</span> <span m="724980">cubed</span> <span
  m="725490">times</span> <span m="725940">x</span> <span m="726150">plus</span>
  <span m="726450">2y.</span> <span m="730230">OK.</span> <span
  m="731980">So</span> <span m="732130">I</span> <span m="732220">want</span>
  <span m="732430">to</span> <span m="732490">think</span> <span
  m="732790">of</span> <span m="732910">that</span> <span
  m="733210">function</span> <span m="734380">the</span> <span
  m="734500">way</span> <span m="735190">anybody</span> <span
  m="735730">would,</span> <span m="738010">as</span> <span
  m="738290">the</span> <span m="738370">product</span> <span
  m="738880">of</span> <span m="738970">two</span> <span
  m="739210">functions.</span></p><p><span m="740740">So</span> <span
  m="741390">there</span> <span m="741530">is</span> <span m="741730">a</span>
  <span m="741850">product</span> <span m="742990">rule</span> <span
  m="743510">to</span> <span m="744310">get</span> <span m="744580">into</span>
  <span m="744850">the</span> <span m="745000">derivative.</span> <span
  m="746170">And</span> <span m="746350">then</span> <span m="746680">we</span>
  <span m="746860">need</span> <span m="747410">the</span> <span
  m="747630">derivatives</span> <span m="748570">of</span> <span
  m="748720">each</span> <span m="748990">piece.</span> <span
  m="750290">So</span> <span m="750490">there's</span> <span m="750700">a</span>
  <span m="750760">power</span> <span m="751180">rule</span> <span
  m="752200">and</span> <span m="753130">a</span> <span m="753580">linear</span>
  <span m="754870">combination</span> <span m="755680">rule.</span> <span
  m="756880">So</span> <span m="757120">it's</span> <span m="757300">got</span>
  <span m="757510">a</span> <span m="757570">few</span> <span
  m="757900">of</span> <span m="758020">the</span> <span m="758110">rules</span>
  <span m="758620">that</span> <span m="758740">we</span> <span
  m="758920">use.</span></p><p><span m="760360">And</span> <span
  m="760960">the</span> <span m="761320">point</span> <span m="761680">is</span>
  <span m="761890">to</span> <span m="762040">think</span> <span
  m="762430">about</span> <span m="764140">the</span> <span
  m="764310">computation</span> <span m="765160">of</span> <span
  m="765280">F</span> <span m="765490">of</span> <span m="765640">x</span> <span
  m="766750">and</span> <span m="767020">the</span> <span
  m="767170">computation</span> <span m="768130">of</span> <span
  m="768640">dF</span> <span m="769360">dx</span> <span m="771400">and</span>
  <span m="771640">the</span> <span m="771760">computation</span> <span
  m="772630">of</span> <span m="772840">dF</span> <span m="773170">dy.</span>
  <span m="774970">Those</span> <span m="775270">are</span> <span
  m="775330">the</span> <span m="775480">derivatives</span> <span
  m="776170">that</span> <span m="776320">we</span> <span
  m="776500">need.</span> <span m="777370">This</span> <span
  m="777580">is</span> <span m="777730">the</span> <span
  m="777850">function</span> <span m="778330">we</span> <span
  m="778480">need</span> <span m="779350">and</span> <span m="780820">how</span>
  <span m="781110">to</span> <span m="781180">do</span> <span
  m="781390">those</span> <span m="781690">computations</span> <span
  m="782530">quickly.</span></p><p><span m="783640">OK.</span> <span
  m="784810">And</span> <span m="784900">this</span> <span m="785110">is</span>
  <span m="785230">section</span> <span m="785680">7.2,</span> <span
  m="789850">which</span> <span m="790090">benefited</span> <span
  m="790780">a</span> <span m="790840">lot</span> <span m="791350">from</span>
  <span m="793300">a</span> <span m="793570">blog.</span> <span
  m="795100">I'm</span> <span m="795250">not</span> <span m="795490">a</span>
  <span m="795550">blog</span> <span m="796060">reader</span> <span
  m="796600">or</span> <span m="796780">a</span> <span m="796870">blog</span>
  <span m="797440">writer.</span> <span m="798010">But</span> <span
  m="799450">somehow</span> <span m="800020">I</span> <span
  m="800170">found</span> <span m="800620">this</span> <span
  m="800980">blog.</span></p><p><span m="807250">It's</span> <span
  m="808150">Christopher</span> <span m="813180">Olah,</span> <span
  m="814530">is</span> <span m="814740">his</span> <span m="814920">name.</span>
  <span m="815670">And</span> <span m="815820">he</span> <span
  m="816150">really</span> <span m="817230">writes</span> <span
  m="817650">clear</span> <span m="818070">things.</span> <span
  m="821260">He</span> <span m="821700">works</span> <span m="822030">for</span>
  <span m="822870">one</span> <span m="823080">of</span> <span
  m="823140">the</span> <span m="823230">big</span> <span
  m="823410">companies</span> <span m="823890">and</span> <span
  m="824040">does</span> <span m="825600">the</span> <span
  m="826800">deeper</span> <span m="827220">research.</span> <span
  m="827850">But</span> <span m="828060">he's</span> <span
  m="828390">also</span> <span m="828840">a</span> <span
  m="829500">really</span> <span m="829800">good</span> <span
  m="830070">expositor.</span></p><p><span m="831610">And</span> <span
  m="832380">the</span> <span m="832860">website</span> <span
  m="833460">that</span> <span m="834450">he</span> <span m="834600">now</span>
  <span m="835020">uses</span> <span m="835710">is</span> <span
  m="835950">called</span> <span m="836580">Distill</span> <span
  m="837990">dot</span> <span m="838290">something.</span> <span
  m="840530">But</span> <span m="840750">I</span> <span m="840870">think</span>
  <span m="841110">maybe</span> <span m="841410">this</span> <span
  m="841680">blog</span> <span m="842160">was</span> <span
  m="843690">earlier</span> <span m="844290">than</span> <span
  m="844620">before</span> <span m="845040">the</span> <span
  m="845190">start</span> <span m="845610">of</span> <span
  m="845770">Distill.</span> <span m="846300">But</span> <span
  m="846540">it</span> <span m="846660">might</span> <span m="846930">be</span>
  <span m="847440">loaded</span> <span m="847860">onto</span> <span
  m="848210">Distill.</span></p><p><span m="848790">Anyway,</span> <span
  m="849230">that's</span> <span m="850650">where</span> <span
  m="851100">I</span> <span m="851580">got</span> <span m="851940">this</span>
  <span m="852180">simple</span> <span m="853380">description</span> <span
  m="854190">of</span> <span m="854940">back</span> <span
  m="855210">propagation.</span> <span m="856890">And</span> <span
  m="857300">let's</span> <span m="857520">just</span> <span
  m="857790">do</span> <span m="858000">calculus,</span> <span
  m="858930">first</span> <span m="859290">of</span> <span
  m="859410">all.</span> <span m="861160">If</span> <span m="861210">I</span>
  <span m="861330">just</span> <span m="861600">have</span> <span
  m="861750">a</span> <span m="861810">function</span> <span
  m="862320">of</span> <span m="862590">maybe</span> <span
  m="862920">even</span> <span m="863190">one</span> <span
  m="863580">variable,</span> <span m="864610">what's</span> <span
  m="864780">the</span> <span m="864960">derivative?</span></p><p><span
  m="865470">What</span> <span m="865920">is</span> <span m="866160">dF</span>
  <span m="866820">dx</span> <span m="867240">here,</span> <span
  m="868770">just</span> <span m="869010">to</span> <span
  m="869100">remember</span> <span m="869610">what</span> <span
  m="870690">calculation</span> <span m="871530">we</span> <span
  m="871680">have</span> <span m="871920">to</span> <span m="872070">do?</span>
  <span m="872970">So</span> <span m="873210">dF</span> <span
  m="873810">dx,</span> <span m="875220">this</span> <span m="875670">is</span>
  <span m="875950">with</span> <span m="876210">n</span> <span
  m="876465">equal</span> <span m="876720">one--</span> <span
  m="878410">one</span> <span m="878700">variable.</span> <span
  m="880110">So</span> <span m="882640">I</span> <span m="882780">use</span>
  <span m="884820">ordinary</span> <span m="885300">derivative</span> <span
  m="885840">and</span> <span m="885930">not</span> <span
  m="886140">partial</span> <span m="886590">derivative.</span> <span
  m="887340">But</span> <span m="890290">that's</span> <span
  m="890580">what</span> <span m="891110">really</span> <span
  m="892050">has</span> <span m="892290">to</span> <span m="892380">be</span>
  <span m="892530">done.</span></p><p><span m="893160">But</span> <span
  m="893340">just,</span> <span m="894000">what's</span> <span
  m="894280">the</span> <span m="894390">derivative</span> <span
  m="894990">of</span> <span m="895140">that--</span> <span m="895530">of</span>
  <span m="895680">a</span> <span m="895740">chain</span> <span
  m="896190">of</span> <span m="896310">functions?</span> <span
  m="898560">Well,</span> <span m="898770">of</span> <span
  m="898860">course,</span> <span m="899250">the</span> <span
  m="899430">chain</span> <span m="899760">rule.</span> <span
  m="901300">So</span> <span m="901740">what</span> <span m="901920">does</span>
  <span m="902160">the</span> <span m="902250">chain</span> <span
  m="902610">rule</span> <span m="902880">say?</span></p><p><span
  m="904110">I</span> <span m="904320">differentiate</span> <span
  m="905220">dF.</span> <span m="910550">I</span> <span m="910610">don't</span>
  <span m="910790">know.</span> <span m="912670">What do</span> <span
  m="913250">I</span> <span m="913340">put</span> <span m="913610">that</span>
  <span m="913880">it's</span> <span m="914090">differentiated</span> <span
  m="914930">with</span> <span m="915170">respect</span> <span
  m="915650">to?</span> <span m="919380">dF3,</span> <span
  m="920310">dF2--</span> <span m="920820">is</span> <span
  m="920970">that</span> <span m="921060">what</span> <span m="921210">I</span>
  <span m="921300">should</span> <span m="921480">put?</span> <span
  m="921750">OK.</span> <span m="926210">And</span> <span
  m="926360">where</span> <span m="926630">do</span> <span m="926840">I</span>
  <span m="927020">evaluate</span> <span m="927770">that</span> <span
  m="928010">derivative?</span> <span m="931700">So</span> <span
  m="933470">yeah,</span> <span m="935600">I</span> <span
  m="935690">don't</span> <span m="935900">evaluate</span> <span
  m="936500">it</span> <span m="936710">at</span> <span
  m="936950">x.</span></p><p><span m="937880">I'm</span> <span
  m="938540">differentiated</span> <span m="939220">to</span> <span
  m="939360">F2.</span> <span m="939860">So</span> <span m="940100">do</span>
  <span m="940280">I</span> <span m="940460">evaluate</span> <span
  m="940855">it</span> <span m="941600">at</span> <span m="942300">F2</span>
  <span m="942890">of</span> <span m="943040">F1</span> <span
  m="943520">of</span> <span m="943670">x?</span> <span m="945500">This</span>
  <span m="945680">is</span> <span m="945860">where</span> <span
  m="946090">the</span> <span m="946250">chain</span> <span
  m="946640">rule</span> <span m="947090">gets</span> <span
  m="949920">sort</span> <span m="950170">of</span> <span m="951300">a</span>
  <span m="951410">little</span> <span m="952610">chain-ey.</span> <span
  m="954410">OK.</span> <span m="954890">Then</span> <span m="955370">we</span>
  <span m="955520">know</span> <span m="956060">that</span> <span
  m="956330">dF2</span> <span m="957050">dF1.</span> <span m="961390">And</span>
  <span m="961520">again,</span> <span m="961910">that's</span> <span
  m="962270">now</span> <span m="962630">evaluated</span> <span
  m="963560">at</span> <span m="963980">F1</span> <span m="964490">of</span>
  <span m="964640">x.</span></p><p><span m="965960">And</span> <span
  m="966140">then</span> <span m="966350">the</span> <span
  m="966470">final</span> <span m="966860">factor</span> <span
  m="967460">is</span> <span m="968210">dF1</span> <span m="969470">dx</span>
  <span m="971090">evaluated</span> <span m="972080">at</span> <span
  m="972440">x.</span> <span m="974470">That's</span> <span
  m="974750">somehow</span> <span m="975170">what</span> <span
  m="975380">we</span> <span m="975530">have</span> <span m="975770">to</span>
  <span m="975890">do.</span> <span m="977780">And</span> <span
  m="977900">that's</span> <span m="978200">just</span> <span
  m="978470">for</span> <span m="978680">an</span> <span
  m="978830">ordinary</span> <span m="980390">one-variable</span> <span
  m="981410">function.</span></p><p><span m="982010">And</span> <span
  m="982160">I</span> <span m="982340">have</span> <span m="982670">here</span>
  <span m="982940">a</span> <span m="983030">two-variable</span> <span
  m="983810">function.</span> <span m="984890">And</span> <span
  m="985130">deep</span> <span m="985460">learning</span> <span
  m="985880">has</span> <span m="986150">a</span> <span
  m="986210">million-variable</span> <span m="987230">function.</span> <span
  m="991150">So</span> <span m="991930">I</span> <span m="992080">think</span>
  <span m="992290">we</span> <span m="992440">won't</span> <span
  m="992680">go</span> <span m="992860">to</span> <span m="992980">a</span>
  <span m="993040">million.</span> <span m="993550">But</span> <span
  m="993970">two,</span> <span m="994300">we</span> <span
  m="994480">could</span> <span m="995140">manage.</span></p><p><span
  m="995570">So</span> <span m="999520">let's</span> <span
  m="999670">compute</span> <span m="1000060">the</span> <span
  m="1000180">function,</span> <span m="1000660">first</span> <span
  m="1001020">of</span> <span m="1001140">all.</span> <span
  m="1002070">Compute</span> <span m="1002880">F.</span> <span
  m="1013360">So</span> <span m="1014440">I'm</span> <span
  m="1014740">given</span> <span m="1015160">x</span> <span
  m="1015460">equals,</span> <span m="1016030">say,</span> <span
  m="1016460">2,</span> <span m="1018760">and</span> <span m="1019270">y</span>
  <span m="1019900">equals,</span> <span m="1020390">say,</span> <span
  m="1021070">3.</span> <span m="1024530">And</span> <span
  m="1025609">I'm</span> <span m="1025790">going</span> <span
  m="1025910">to</span> <span m="1026000">create</span> <span
  m="1027560">a</span> <span m="1028400">computational</span> <span
  m="1029569">graph.</span></p><p><span m="1033650">So</span> <span
  m="1033859">I'm</span> <span m="1034040">actually</span> <span
  m="1034400">going</span> <span m="1034520">to</span> <span
  m="1034640">draw</span> <span m="1035270">the</span> <span
  m="1036290">computational</span> <span m="1037280">graph</span> <span
  m="1047480">to</span> <span m="1047660">compute</span> <span
  m="1050690">for</span> <span m="1051380">F.</span> <span
  m="1053570">And</span> <span m="1053690">then</span> <span
  m="1055220">it'll</span> <span m="1055360">be</span> <span
  m="1055520">a</span> <span m="1055580">variation</span> <span
  m="1056330">of</span> <span m="1056420">that</span> <span
  m="1056660">graph</span> <span m="1057140">to</span> <span
  m="1057320">find</span> <span m="1057650">the</span> <span
  m="1057770">derivatives.</span> <span m="1060000">So</span> <span
  m="1060180">let's</span> <span m="1060450">just</span> <span
  m="1060620">start</span> <span m="1061020">with</span> <span
  m="1061230">the</span> <span m="1061290">graph,</span> <span
  m="1061750">first</span> <span m="1062010">of</span> <span
  m="1062130">all,</span> <span m="1062360">for</span> <span
  m="1062760">the</span> <span m="1064230">function,</span> <span
  m="1064890">because</span> <span m="1065130">we're</span> <span
  m="1065250">going</span> <span m="1065380">to</span> <span
  m="1065490">need</span> <span m="1065790">that.</span></p><p><span
  m="1066600">So</span> <span m="1066810">again,</span> <span
  m="1068010">it's</span> <span m="1068250">x</span> <span
  m="1068520">cubed</span> <span m="1068810">plus--</span> <span
  m="1069870">so</span> <span m="1070740">can I</span> <span
  m="1070860">write</span> <span m="1071100">that</span> <span
  m="1071310">function</span> <span m="1071820">again?</span> <span
  m="1072270">x</span> <span m="1072570">cubed</span> <span
  m="1072990">times</span> <span m="1073470">x</span> <span
  m="1073710">plus</span> <span m="1074010">2y.</span> <span
  m="1078390">So</span> <span m="1078600">I</span> <span
  m="1078720">think</span> <span m="1080460">the</span> <span
  m="1080550">first</span> <span m="1080910">step</span> <span
  m="1081240">will</span> <span m="1081420">be</span> <span
  m="1081600">to</span> <span m="1081810">find</span> <span m="1083870">x</span>
  <span m="1083910">plus</span> <span m="1084540">x</span> <span
  m="1084780">cubed--</span> <span m="1086561">that</span> <span
  m="1087030">factor,</span> <span m="1087610">which</span> <span
  m="1087900">will</span> <span m="1087990">be</span> <span
  m="1088170">8.</span> <span m="1091190">And</span> <span m="1091580">we</span>
  <span m="1091760">have</span> <span m="1091970">to</span> <span
  m="1092090">find</span> <span m="1092360">the</span> <span
  m="1092480">other</span> <span m="1092690">factor,</span> <span
  m="1093800">x</span> <span m="1094040">plus</span> <span
  m="1094250">2y.</span></p><p><span m="1096110">So</span> <span
  m="1096440">then</span> <span m="1097280">that</span> <span
  m="1097520">uses</span> <span m="1098030">y</span> <span
  m="1098600">and</span> <span m="1098960">x.</span> <span m="1099410">So</span>
  <span m="1100070">it's</span> <span m="1100280">a</span> <span
  m="1100370">directed</span> <span m="1100970">graph</span> <span
  m="1102320">in</span> <span m="1102740">going</span> <span
  m="1103040">forward</span> <span m="1103610">with</span> <span
  m="1103790">this</span> <span m="1104450">computation.</span> <span
  m="1106100">So</span> <span m="1106340">x</span> <span m="1106580">plus</span>
  <span m="1106790">2y</span> <span m="1107430">equals</span> <span
  m="1107840">whatever</span> <span m="1108290">it</span> <span
  m="1108380">is--</span> <span m="1109390">2</span> <span
  m="1110060">and</span> <span m="1110450">6--</span> <span m="1110870">oh,
  8</span> <span m="1111260">again.</span> <span m="1111620">Not</span> <span
  m="1111890">brilliant.</span> <span m="1113750">What</span> <span
  m="1114020">shall</span> <span m="1114260">I</span> <span
  m="1114830">change</span> <span m="1115430">here?</span> <span
  m="1116600">Make</span> <span m="1116870">it</span> <span
  m="1116960">3y?</span></p><p><span m="1122200">3y,</span> <span
  m="1124750">just</span> <span m="1125000">to</span> <span
  m="1125130">get</span> <span m="1125330">a</span> <span
  m="1126550">different</span> <span m="1126910">number</span> <span
  m="1127270">here.</span> <span m="1127540">So</span> <span
  m="1127780">now</span> <span m="1128050">x</span> <span m="1128350">is</span>
  <span m="1128500">2.</span> <span m="1129280">y</span> <span
  m="1129610">is</span> <span m="1129790">3.</span> <span m="1130270">I
  get</span> <span m="1130480">11.</span> <span m="1130960">That's</span> <span
  m="1131230">a</span> <span m="1131290">good</span> <span
  m="1131530">number.</span> <span m="1132818">11.</span></p><p><span
  m="1137130">OK.</span> <span m="1139760">So</span> <span
  m="1139940">far,</span> <span m="1140150">so</span> <span
  m="1140270">good?</span> <span m="1141500">And</span> <span
  m="1141650">now</span> <span m="1142850">the</span> <span
  m="1142970">next</span> <span m="1143300">step</span> <span
  m="1143660">on</span> <span m="1143780">this</span> <span
  m="1144050">graph</span> <span m="1144500">will</span> <span
  m="1144680">be,</span> <span m="1145480">I</span> <span
  m="1145760">have</span> <span m="1145880">a</span> <span
  m="1145940">product</span> <span m="1146480">of</span> <span
  m="1146600">those.</span> <span m="1147560">So</span> <span
  m="1147860">that</span> <span m="1148100">will</span> <span
  m="1148280">go</span> <span m="1148760">to</span> <span m="1149810">the</span>
  <span m="1149900">product.</span></p><p><span m="1155850">F</span> <span
  m="1156300">equals</span> <span m="1158070">8</span> <span
  m="1158280">times</span> <span m="1158730">11--</span> <span
  m="1159030">88.</span> <span m="1162050">OK.</span> <span
  m="1162600">So</span> <span m="1162780">we've</span> <span
  m="1162870">got</span> <span m="1163050">the</span> <span
  m="1163170">answer,</span> <span m="1163560">88,</span> <span
  m="1166410">which,</span> <span m="1168150">normally,</span> <span
  m="1168660">I</span> <span m="1168810">wouldn't</span> <span
  m="1169830">take</span> <span m="1170160">that</span> <span
  m="1170370">much</span> <span m="1170700">of</span> <span m="1170880">a</span>
  <span m="1171120">book</span> <span m="1171480">to</span> <span
  m="1172080">compute</span> <span m="1173400">F.</span> <span
  m="1174420">I</span> <span m="1174540">would</span> <span
  m="1174990">have</span> <span m="1175170">said,</span> <span
  m="1175500">2</span> <span m="1175830">cubed</span> <span
  m="1177540">times</span> <span m="1178740">2</span> <span
  m="1179160">plus</span> <span m="1180240">3</span> <span
  m="1180600">times</span> <span m="1181020">3.</span> <span
  m="1181710">And</span> <span m="1181860">I'd</span> <span
  m="1182020">have</span> <span m="1182580">simplified</span> <span
  m="1183360">that</span> <span m="1183640">to</span> <span m="1183810">8</span>
  <span m="1185280">times</span> <span m="1185820">11.</span> <span
  m="1187170">And</span> <span m="1187380">I</span> <span
  m="1187500">would</span> <span m="1187710">have</span> <span
  m="1187800">got</span> <span m="1188110">88.</span></p><p><span
  m="1190530">So</span> <span m="1191040">if</span> <span m="1191250">we</span>
  <span m="1191400">were</span> <span m="1191520">just</span> <span
  m="1191790">writing</span> <span m="1192240">normally,</span> <span
  m="1193260">that</span> <span m="1193470">would</span> <span
  m="1193650">do</span> <span m="1193920">it.</span> <span
  m="1194190">But</span> <span m="1194430">this</span> <span
  m="1194760">is</span> <span m="1195070">the</span> <span
  m="1195840">picture</span> <span m="1197040">of</span> <span
  m="1197220">the</span> <span m="1197340">computational</span> <span
  m="1198210">graph.</span> <span m="1199110">OK.</span> <span
  m="1200040">Good.</span> <span m="1200550">Good.</span> <span
  m="1200850">Good.</span></p><p><span m="1202440">Now</span> <span
  m="1202740">it's</span> <span m="1202950">the</span> <span
  m="1203070">derivatives--</span> <span m="1205200">two</span> <span
  m="1205440">derivatives</span> <span m="1206070">to</span> <span
  m="1206190">find--</span> <span m="1206550">dF</span> <span
  m="1207060">dx</span> <span m="1207300">and</span> <span m="1207400">dF</span>
  <span m="1207490">dy.</span> <span m="1208650">Suppose</span> <span
  m="1209160">we</span> <span m="1209400">go</span> <span
  m="1209760">forward</span> <span m="1210420">first.</span> <span
  m="1212810">My</span> <span m="1213020">point</span> <span
  m="1213380">is</span> <span m="1213530">going</span> <span
  m="1213680">to</span> <span m="1213800">be--</span> <span
  m="1214100">or</span> <span m="1214220">the</span> <span
  m="1214610">great</span> <span m="1214970">point</span> <span
  m="1215360">is</span> <span m="1215630">that</span> <span
  m="1215750">backward</span> <span m="1216260">is</span> <span
  m="1216440">better.</span> <span m="1217520">Reverse</span> <span
  m="1218060">mode</span> <span m="1218420">is</span> <span
  m="1218600">better.</span></p><p><span m="1219770">But</span> <span
  m="1219980">we</span> <span m="1220160">don't</span> <span
  m="1220400">know</span> <span m="1220610">what</span> <span
  m="1220790">that</span> <span m="1220970">means</span> <span
  m="1221330">until</span> <span m="1221600">we've</span> <span
  m="1221810">gone</span> <span m="1222110">forward.</span> <span
  m="1222650">So</span> <span m="1222830">let</span> <span m="1222980">me</span>
  <span m="1223130">go</span> <span m="1223340">forward.</span> <span
  m="1224520">So</span> <span m="1224630">now</span> <span
  m="1224870">I'm</span> <span m="1224990">going</span> <span
  m="1225140">to</span> <span m="1225230">go</span> <span
  m="1225410">forward.</span></p><p><span m="1238940">Let's</span> <span
  m="1239250">do</span> <span m="1239460">dF</span> <span m="1239950">dx.</span>
  <span m="1241590">Everybody</span> <span m="1242000">is</span> <span
  m="1242130">up</span> <span m="1242280">for</span> <span m="1242520">dF</span>
  <span m="1243110">dx--</span> <span m="1243530">the</span> <span
  m="1243630">partial</span> <span m="1243900">derivative</span> <span
  m="1244170">with</span> <span m="1244560">respect</span> <span
  m="1244950">to</span> <span m="1245160">x?</span> <span m="1246300">So</span>
  <span m="1246510">here</span> <span m="1246690">we</span> <span
  m="1246840">have</span> <span m="1248550">x</span> <span
  m="1248820">equal</span> <span m="1249080">2</span> <span
  m="1253750">and</span> <span m="1254110">y</span> <span
  m="1254560">equal</span> <span m="1254700">3.</span> <span
  m="1261168">OK.</span></p><p><span m="1264030">And</span> <span
  m="1265710">then</span> <span m="1267960">I</span> <span
  m="1268350">take</span> <span m="1268730">the</span> <span
  m="1268890">derivative</span> <span m="1270000">of</span> <span
  m="1270420">that</span> <span m="1270810">step.</span> <span
  m="1271750">The</span> <span m="1271920">first</span> <span
  m="1272250">step</span> <span m="1272670">was</span> <span
  m="1273000">x</span> <span m="1273300">2x</span> <span
  m="1273810">cubed.</span> <span m="1275040">So</span> <span
  m="1275190">I</span> <span m="1275280">need</span> <span
  m="1275580">the</span> <span m="1275730">derivative.</span> <span
  m="1276330">The</span> <span m="1276450">whole</span> <span
  m="1276690">point</span> <span m="1277050">of</span> <span
  m="1277590">AD</span> <span m="1279000">is</span> <span
  m="1279540">that</span> <span m="1282600">every</span> <span
  m="1282930">computation</span> <span m="1283710">of</span> <span
  m="1283860">a</span> <span m="1283920">derivative</span> <span
  m="1284580">breaks</span> <span m="1285060">down</span> <span
  m="1286050">like</span> <span m="1286320">this</span> <span
  m="1286770">into</span> <span m="1287130">very</span> <span
  m="1287490">simple</span> <span m="1287910">pieces.</span></p><p><span
  m="1290400">And</span> <span m="1291040">the</span> <span
  m="1292610">derivatives</span> <span m="1293360">of</span> <span
  m="1293510">those</span> <span m="1293780">simple</span> <span
  m="1294200">pieces</span> <span m="1294710">are</span> <span
  m="1294860">also</span> <span m="1295280">simple</span> <span
  m="1295700">pieces.</span> <span m="1296660">So</span> <span
  m="1296840">the</span> <span m="1296960">whole</span> <span
  m="1297200">point</span> <span m="1297590">is</span> <span
  m="1300020">to</span> <span m="1300170">replace</span> <span
  m="1302030">appropriately</span> <span m="1304190">those</span> <span
  m="1306590">intermediate</span> <span m="1307220">steps</span> <span
  m="1308420">with</span> <span m="1308690">derivatives,</span> <span
  m="1310020">so</span> <span m="1310340">as</span> <span m="1310460">to</span>
  <span m="1310550">compute</span> <span m="1311000">the</span> <span
  m="1311150">x</span> <span m="1311390">derivative.</span> <span
  m="1312920">So</span> <span m="1314510">I</span> <span m="1314630">have</span>
  <span m="1314840">to</span> <span m="1315680">use</span> <span
  m="1316010">the</span> <span m="1316130">fact</span> <span
  m="1316580">that</span> <span m="1316790">the</span> <span
  m="1318200">derivative</span> <span m="1319640">of</span> <span
  m="1319790">x</span> <span m="1320070">cubed,</span> <span
  m="1320690">with</span> <span m="1320960">respect</span> <span
  m="1321350">to</span> <span m="1321470">x--</span> <span
  m="1322040">oh,</span> <span m="1322250">I</span> <span
  m="1322340">better</span> <span m="1322580">do</span> <span
  m="1322790">partial</span> <span m="1323270">derivative--</span> <span
  m="1324200">partial</span> <span m="1324650">derivatives</span> <span
  m="1325160">of</span> <span m="1325310">x</span> <span m="1325580">cube,
  with</span> <span m="1325990">respect</span> <span m="1326320">to</span> <span
  m="1326450">x,</span> <span m="1327215">is</span> <span m="1327500">3x</span>
  <span m="1328040">squared.</span></p><p><span m="1329950">I'll</span> <span
  m="1330230">put</span> <span m="1331190">maybe</span> <span
  m="1331490">a</span> <span m="1331580">formula</span> <span
  m="1332730">and</span> <span m="1332780">then</span> <span
  m="1333110">a</span> <span m="1333200">number.</span> <span
  m="1334340">So</span> <span m="1339670">that</span> <span
  m="1339930">gives</span> <span m="1341160">3</span> <span
  m="1341490">times</span> <span m="1341850">4--</span> <span
  m="1342010">12.</span> <span m="1345910">And</span> <span
  m="1347680">the</span> <span m="1347890">derivative</span> <span
  m="1348580">of</span> <span m="1348730">x</span> <span
  m="1349120">cubed,</span> <span m="1349600">with</span> <span
  m="1349790">respect</span> <span m="1350140">to</span> <span
  m="1350290">y,</span> <span m="1351750">gives</span> <span
  m="1352350">0,</span> <span m="1353215">clearly.</span> <span
  m="1354385">So</span> <span m="1354850">that's</span> <span
  m="1355315">0.</span></p><p><span m="1360160">So</span> <span
  m="1360430">I'm</span> <span m="1361060">doing</span> <span
  m="1361420">the</span> <span m="1361540">x</span> <span
  m="1361780">derivative.</span> <span m="1364350">So</span> <span
  m="1364460">the</span> <span m="1364580">derivative</span> <span
  m="1365300">of</span> <span m="1365480">y,</span> <span
  m="1365870">with</span> <span m="1366080">respect</span> <span
  m="1366470">to</span> <span m="1366590">x,</span> <span
  m="1368630">is--</span> <span m="1371170">you</span> <span
  m="1371300">get</span> <span m="1371510">to</span> <span
  m="1371630">tell</span> <span m="1371840">me.</span> <span
  m="1374250">If</span> <span m="1374450">I'm</span> <span
  m="1374630">computing</span> <span m="1375200">partial</span> <span
  m="1375650">derivatives,</span> <span m="1377500">it</span> <span
  m="1377690">is</span> <span m="1378230">0.</span> <span m="1378560">It</span>
  <span m="1378835">is</span> <span m="1379110">0.</span> <span
  m="1379955">y</span> <span m="1380360">and</span> <span m="1380480">x</span>
  <span m="1380690">are</span> <span m="1380840">independent.</span></p><p><span
  m="1383030">And</span> <span m="1383690">this</span> <span
  m="1383890">is</span> <span m="1384170">the</span> <span
  m="1384290">reason,</span> <span m="1384830">in</span> <span
  m="1384950">my</span> <span m="1385790">view,</span> <span
  m="1386810">that</span> <span m="1387020">the</span> <span
  m="1387200">forward</span> <span m="1387680">method</span> <span
  m="1388100">is</span> <span m="1388650">wasteful,</span> <span
  m="1390080">because</span> <span m="1391490">I'm</span> <span
  m="1391640">going</span> <span m="1391710">to</span> <span
  m="1391850">have</span> <span m="1392000">to</span> <span
  m="1392120">do</span> <span m="1392330">another</span> <span
  m="1393050">whole</span> <span m="1393290">graph</span> <span
  m="1394700">for</span> <span m="1395180">the</span> <span m="1395330">y</span>
  <span m="1395630">derivative.</span> <span m="1396990">In</span> <span
  m="1397040">other</span> <span m="1397190">words,</span> <span
  m="1398630">tracking</span> <span m="1399110">the</span> <span
  m="1399680">x</span> <span m="1399950">derivatives,</span> <span
  m="1401630">a</span> <span m="1401690">whole</span> <span
  m="1401870">lot</span> <span m="1402170">of</span> <span
  m="1402290">stuff</span> <span m="1402620">never</span> <span
  m="1402920">got</span> <span m="1403220">off</span> <span
  m="1404150">the</span> <span m="1404240">ground.</span> <span
  m="1405650">So</span> <span m="1405890">we</span> <span
  m="1405950">never</span> <span m="1406220">should</span> <span
  m="1406460">have</span> <span m="1406610">looked</span> <span
  m="1406910">at</span> <span m="1407090">it.</span></p><p><span
  m="1408140">So</span> <span m="1409360">anyway,</span> <span
  m="1415350">I</span> <span m="1415620">have</span> <span
  m="1415870">this</span> <span m="1416140">x</span> <span
  m="1416460">plus</span> <span m="1416650">3y,</span> <span
  m="1421220">maybe.</span> <span m="1422010">I</span> <span
  m="1422070">don't</span> <span m="1422220">know</span> <span
  m="1422310">whether</span> <span m="1422570">to</span> <span
  m="1422620">erase</span> <span m="1422700">that.</span> <span
  m="1423270">I</span> <span m="1423360">think</span> <span m="1423630">I</span>
  <span m="1423720">will,</span> <span m="1424230">just</span> <span
  m="1425050">because</span> <span m="1425760">I</span> <span
  m="1425820">don't</span> <span m="1425970">know</span> <span
  m="1426090">what</span> <span m="1426270">to</span> <span
  m="1426390">do</span> <span m="1426570">with</span> <span
  m="1426750">it</span> <span m="1426860">there.</span> <span
  m="1429050">Yeah.</span> <span m="1429510">So</span> <span
  m="1429750">now</span> <span m="1431700">let</span> <span
  m="1431880">me</span> <span m="1432000">take</span> <span
  m="1432330">the</span> <span m="1432450">ones</span> <span
  m="1432840">that</span> <span m="1433020">I</span> <span
  m="1433860">really</span> <span m="1434280">need,</span> <span
  m="1436130">is</span> <span m="1437930">the</span> <span
  m="1438890">derivative,</span> <span m="1439520">with</span> <span
  m="1439640">respect</span> <span m="1440060">to</span> <span
  m="1440120">x,</span> <span m="1441500">of</span> <span m="1441950">x</span>
  <span m="1442250">plus</span> <span m="1442580">3y,</span> <span
  m="1445070">which</span> <span m="1445340">is</span> <span
  m="1445490">1.</span></p><p><span m="1448400">And</span> <span
  m="1448850">so</span> <span m="1449120">that</span> <span
  m="1449360">gives</span> <span m="1449660">me</span> <span
  m="1449840">the</span> <span m="1449960">answer</span> <span
  m="1451370">1</span> <span m="1452600">for</span> <span m="1452750">any</span>
  <span m="1452990">x</span> <span m="1453430">actually.</span> <span
  m="1454520">OK.</span> <span m="1457040">And</span> <span
  m="1457230">now</span> <span m="1457830">what?</span> <span
  m="1460820">Oh,</span> <span m="1461310">yeah,</span> <span
  m="1462240">I</span> <span m="1462390">don't</span> <span
  m="1462600">need</span> <span m="1462840">these.</span> <span
  m="1463440">This</span> <span m="1463980">is</span> <span m="1464130">a</span>
  <span m="1464190">waste</span> <span m="1464550">of</span> <span
  m="1464640">time.</span> <span m="1465410">Isn't</span> <span
  m="1465870">it?</span> <span m="1469090">Is</span> <span m="1469260">it</span>
  <span m="1469390">only</span> <span m="1469720">x</span> <span
  m="1469990">derivatives</span> <span m="1470650">I</span> <span
  m="1470790">want?</span></p><p><span m="1473120">Anyway,</span> <span
  m="1474020">let's</span> <span m="1474290">just</span> <span
  m="1474530">keep</span> <span m="1474740">going.</span> <span
  m="1476640">You</span> <span m="1477200">can</span> <span
  m="1477380">see,</span> <span m="1477560">this</span> <span
  m="1477860">takes</span> <span m="1478490">a</span> <span
  m="1478520">little</span> <span m="1479270">organization.</span> <span
  m="1480170">And</span> <span m="1480320">I'm</span> <span
  m="1480860">not</span> <span m="1481130">practiced</span> <span
  m="1481790">with</span> <span m="1482000">it.</span></p><p><span
  m="1482750">So</span> <span m="1482900">what</span> <span
  m="1483170">am</span> <span m="1483290">I</span> <span
  m="1483440">going</span> <span m="1483590">to</span> <span
  m="1483740">do?</span> <span m="1484170">I'm</span> <span
  m="1484220">looking</span> <span m="1484640">for</span> <span
  m="1484850">the</span> <span m="1485090">x</span> <span
  m="1485420">derivative</span> <span m="1486740">of--</span> <span
  m="1487700">I've</span> <span m="1487820">got</span> <span
  m="1487970">to</span> <span m="1488060">use</span> <span
  m="1488270">our</span> <span m="1488360">product</span> <span
  m="1488810">rule</span> <span m="1489110">now.</span> <span
  m="1490160">I</span> <span m="1490220">found</span> <span
  m="1490550">the</span> <span m="1490730">x</span> <span
  m="1490940">derivative</span> <span m="1491630">of</span> <span
  m="1491900">that</span> <span m="1492200">factor</span> <span
  m="1493430">was</span> <span m="1493670">12.</span> <span
  m="1494750">The</span> <span m="1494870">x</span> <span
  m="1495110">derivative</span> <span m="1495710">of</span> <span
  m="1495860">this</span> <span m="1496130">factor</span> <span
  m="1496700">is</span> <span m="1496850">1.</span></p><p><span
  m="1498600">And</span> <span m="1498800">now</span> <span
  m="1499400">the</span> <span m="1499580">x</span> <span
  m="1499880">derivative</span> <span m="1500720">of</span> <span
  m="1501260">the</span> <span m="1501890">product--</span> <span
  m="1503950">so</span> <span m="1504170">now</span> <span
  m="1504410">I'm</span> <span m="1504560">going</span> <span
  m="1504710">to</span> <span m="1504860">do,</span> <span
  m="1507020">somehow,</span> <span m="1507275">a</span> <span
  m="1507530">product</span> <span m="1508070">rule--</span> <span
  m="1510590">the</span> <span m="1510880">x</span> <span
  m="1511180">derivative</span> <span m="1512050">of</span> <span
  m="1514660">this</span> <span m="1514870">product.</span> <span
  m="1515440">I</span> <span m="1515920">should</span> <span
  m="1516100">have</span> <span m="1516190">given</span> <span
  m="1516520">these</span> <span m="1516820">two</span> <span
  m="1517060">terms</span> <span m="1517600">a</span> <span
  m="1517660">name.</span> <span m="1520460">Let</span> <span
  m="1520570">me</span> <span m="1520720">call</span> <span
  m="1521020">that</span> <span m="1521230">first</span> <span
  m="1521650">term</span> <span m="1522040">x</span> <span
  m="1522360">cubed,</span> <span m="1523150">and</span> <span
  m="1523300">the</span> <span m="1523420">second</span> <span
  m="1523840">term</span> <span m="1525640">x</span> <span
  m="1525910">plus</span> <span m="1526180">3y--</span> <span
  m="1526810">call</span> <span m="1527050">it</span> <span
  m="1527200">s.</span> <span m="1527870">So</span> <span
  m="1528040">I'll</span> <span m="1528160">call</span> <span
  m="1529210">the</span> <span m="1530590">two</span> <span
  m="1530830">terms</span> <span m="1531220">c and</span> <span
  m="1531655">s.</span></p><p><span m="1538930">So</span> <span
  m="1539170">that's</span> <span m="1539620">dc</span> <span
  m="1539980">ds.</span> <span m="1541210">This</span> <span
  m="1541420">is</span> <span m="1542140">dc</span> <span m="1542350">dx.</span>
  <span m="1543850">This is</span> <span m="1544270">dc</span> <span
  m="1545140">dx.</span> <span m="1546820">And</span> <span
  m="1547060">this</span> <span m="1547360">one</span> <span
  m="1547690">is</span> <span m="1548020">ds</span> <span m="1548800">dx</span>
  <span m="1553810">and</span> <span m="1554290">dc</span> <span
  m="1554620">dy.</span> <span m="1556390">Do</span> <span m="1556570">I</span>
  <span m="1556660">need</span> <span m="1556870">to</span> <span
  m="1556960">know</span> <span m="1557170">that?</span> <span
  m="1557620">I'm</span> <span m="1557700">sorry,</span> <span
  m="1560050">this</span> <span m="1560560">computational</span> <span
  m="1561220">graph</span> <span m="1561610">has</span> <span
  m="1561790">thrown</span> <span m="1562180">me.</span></p><p><span
  m="1562690">But</span> <span m="1563650">now</span> <span m="1563890">I</span>
  <span m="1563980">want</span> <span m="1564160">to</span> <span
  m="1564220">use</span> <span m="1564490">the</span> <span
  m="1564580">product</span> <span m="1565090">rule.</span> <span
  m="1567080">And</span> <span m="1567280">I'm</span> <span
  m="1567370">taking</span> <span m="1567760">x</span> <span
  m="1568030">derivatives.</span> <span m="1569860">So</span> <span
  m="1570070">I</span> <span m="1570190">should</span> <span
  m="1570430">have</span> <span m="1570550">computed</span> <span
  m="1571450">c</span> <span m="1572020">and</span> <span
  m="1572210">s.</span></p><p><span m="1573580">Yes,</span> <span
  m="1573940">I</span> <span m="1574060">see</span> <span m="1574270">I</span>
  <span m="1574930">need</span> <span m="1575260">those</span> <span
  m="1575650">in</span> <span m="1575770">the</span> <span
  m="1575860">product</span> <span m="1576310">rule.</span> <span
  m="1576580">So</span> <span m="1576790">I</span> <span
  m="1577240">should</span> <span m="1577480">have</span> <span
  m="1577570">computed</span> <span m="1578620">c</span> <span
  m="1579250">as</span> <span m="1579430">being</span> <span
  m="1579760">8</span> <span m="1581860">and</span> <span m="1583570">s</span>
  <span m="1584020">as</span> <span m="1584200">being</span> <span
  m="1588410">5.</span> <span m="1590090">Is that</span> <span
  m="1590350">right?</span> <span m="1590620">2</span> <span
  m="1590950">plus</span> <span m="1592600">3--</span> <span
  m="1593140">so</span> <span m="1593710">11.</span> <span
  m="1595940">Yeah,</span> <span m="1596170">I</span> <span
  m="1596530">needed</span> <span m="1596890">the</span> <span
  m="1597070">8.</span> <span m="1597800">Oh,</span> <span m="1598030">is</span>
  <span m="1598150">that--</span> <span m="1600820">what's</span> <span
  m="1601060">up?</span></p><p><span m="1603040">I've</span> <span
  m="1603790">just</span> <span m="1604060">been</span> <span
  m="1604420">running</span> <span m="1604840">along</span> <span
  m="1605260">here</span> <span m="1605440">without</span> <span
  m="1606670">getting</span> <span m="1607000">myself</span> <span
  m="1608020">in</span> <span m="1608230">the</span> <span
  m="1608380">whole</span> <span m="1608770">picture.</span> <span
  m="1609730">Yeah,</span> <span m="1610140">8</span> <span m="1610475">and
  11</span> <span m="1610810">is</span> <span m="1610990">right.</span> <span
  m="1611440">But</span> <span m="1611650">now</span> <span
  m="1611890">I'm</span> <span m="1612040">looking</span> <span
  m="1612430">for</span> <span m="1612700">the</span> <span
  m="1612850">derivatives.</span> <span m="1613990">So</span> <span
  m="1614200">I</span> <span m="1614290">don't</span> <span
  m="1614500">multiply</span> <span m="1614950">those.</span> <span
  m="1615760">That's</span> <span m="1616030">not</span> <span
  m="1616300">the</span> <span m="1616450">product</span> <span
  m="1616950">rule.</span></p><p><span m="1620190">So</span> <span
  m="1620370">the</span> <span m="1620460">product</span> <span
  m="1620880">rule</span> <span m="1621210">is</span> <span
  m="1621420">what?</span> <span m="1627190">So</span> <span
  m="1627580">this</span> <span m="1627850">product</span> <span
  m="1628300">rule,</span> <span m="1629470">I</span> <span
  m="1629590">have</span> <span m="1629710">to</span> <span
  m="1629830">do</span> <span m="1630010">this</span> <span
  m="1630490">combination</span> <span m="1632080">of--</span> <span
  m="1633120">this</span> <span m="1633340">is</span> <span
  m="1633550">now</span> <span m="1633820">the</span> <span
  m="1633940">product</span> <span m="1634390">rule--</span> <span
  m="1640050">for</span> <span m="1640260">the</span> <span
  m="1640440">derivative</span> <span m="1642060">of</span> <span
  m="1642990">c</span> <span m="1643560">times</span> <span
  m="1644020">s.</span> <span m="1645240">So</span> <span m="1645420">I</span>
  <span m="1645540">want</span> <span m="1645790">c</span> <span
  m="1646650">ds</span> <span m="1646995">dx</span> <span
  m="1648810">plus</span> <span m="1649350">s</span> <span m="1649740">dc</span>
  <span m="1650055">dx.</span> <span m="1650640">I</span> <span
  m="1650730">think</span> <span m="1650970">I'm</span> <span
  m="1651150">on</span> <span m="1651300">track</span> <span
  m="1651690">now.</span></p><p><span m="1652940">And</span> <span
  m="1653040">now</span> <span m="1653310">I</span> <span
  m="1653430">want</span> <span m="1653640">to</span> <span
  m="1653700">put</span> <span m="1653940">it</span> <span m="1653980">in</span>
  <span m="1654120">numbers.</span> <span m="1656640">So</span> <span
  m="1656880">c</span> <span m="1657630">is</span> <span m="1657960">8.</span>
  <span m="1660900">ds</span> <span m="1661305">dx--</span> <span
  m="1661710">have</span> <span m="1662130">we</span> <span
  m="1662400">computed</span> <span m="1663020">ds</span> <span
  m="1663340">dx?</span> <span m="1665370">Yes,</span> <span
  m="1665760">ds</span> <span m="1666060">dx</span> <span m="1666600">is</span>
  <span m="1666750">1.</span></p><p><span m="1668680">And</span> <span
  m="1668790">now</span> <span m="1669120">s</span> <span
  m="1669570">itself</span> <span m="1671070">is</span> <span
  m="1671190">computed</span> <span m="1671790">as</span> <span
  m="1672000">11.</span> <span m="1673590">And</span> <span
  m="1674040">dc</span> <span m="1674530">dx,</span> <span m="1676080">we</span>
  <span m="1676230">computed</span> <span m="1676880">as</span> <span
  m="1677200">12.</span> <span m="1678840">I</span> <span
  m="1679230">don't</span> <span m="1679470">dare</span> <span
  m="1679800">look.</span></p><p><span m="1686470">I</span> <span
  m="1686590">don't</span> <span m="1686800">think</span> <span
  m="1687100">I'm</span> <span m="1687250">going</span> <span
  m="1687380">to</span> <span m="1687550">get--</span> <span
  m="1688120">oh,</span> <span m="1688300">no,</span> <span m="1688600">I</span>
  <span m="1688690">don't</span> <span m="1688870">know</span> <span
  m="1689110">the</span> <span m="1689260">answer</span> <span
  m="1689560">yet.</span> <span m="1689830">Sorry,</span> <span
  m="1690300">I'm</span> <span m="1690850">not</span> <span
  m="1691030">trying</span> <span m="1691300">to</span> <span
  m="1691390">get</span> <span m="1691720">88.</span> <span
  m="1694740">You</span> <span m="1694890">guys</span> <span
  m="1695190">are</span> <span m="1695370">not</span> <span
  m="1695760">helping.</span> <span m="1696575">[LAUGHS]</span></p><p><span
  m="1698700">You</span> <span m="1699030">see</span> <span
  m="1699390">I'm</span> <span m="1699630">in</span> <span
  m="1699780">trouble.</span> <span m="1700210">But</span> <span
  m="1700800">what</span> <span m="1700980">I</span> <span
  m="1701130">imagine</span> <span m="1701640">here</span> <span
  m="1701940">is,</span> <span m="1702750">that's</span> <span m="1703215">8 and
  that's</span> <span m="1703680">132.</span> <span m="1704880">So</span> <span
  m="1705090">I'm</span> <span m="1705300">getting</span> <span
  m="1705580">140.</span> <span m="1708000">Is</span> <span
  m="1708150">there</span> <span m="1708270">any</span> <span
  m="1708480">possibility</span> <span m="1709290">that</span> <span
  m="1709500">that's</span> <span m="1709830">the</span> <span
  m="1709950">right</span> <span m="1710220">answer</span> <span
  m="1711120">for</span> <span m="1712200">dF</span> <span
  m="1713710">dx?</span> <span m="1714330">This</span> <span
  m="1714590">is</span> <span m="1715020">dF</span> <span m="1715335">dx</span>
  <span m="1715980">I</span> <span m="1716220">computed.</span></p><p><span
  m="1720170">By</span> <span m="1720780">watching</span> <span
  m="1721200">me</span> <span m="1721560">struggle</span> <span
  m="1722160">here,</span> <span m="1722460">you're</span> <span
  m="1722700">seeing</span> <span m="1723470">the</span> <span
  m="1724650">idea.</span> <span m="1727970">Every</span> <span
  m="1728390">step,</span> <span m="1729650">I</span> <span
  m="1729740">take</span> <span m="1730010">the</span> <span
  m="1730160">derivative</span> <span m="1730790">of</span> <span
  m="1730940">each</span> <span m="1731180">step.</span> <span
  m="1732170">So</span> <span m="1732590">it</span> <span m="1732890">was
  a</span> <span m="1732950">power</span> <span m="1733430">step,</span> <span
  m="1734270">x</span> <span m="1734540">cubed.</span> <span
  m="1735050">So</span> <span m="1735290">I</span> <span m="1735380">had</span>
  <span m="1735500">a</span> <span m="1735560">3x</span> <span
  m="1736100">squared.</span> <span m="1737000">And</span> <span
  m="1737270">a</span> <span m="1737540">sum</span> <span
  m="1737810">step,</span> <span m="1738340">so</span> <span
  m="1738530">I</span> <span m="1738560">had</span> <span m="1738710">a</span>
  <span m="1738770">1.</span></p><p><span m="1740480">Then</span> <span
  m="1742130">the</span> <span m="1742340">next</span> <span
  m="1742670">step</span> <span m="1743000">was</span> <span
  m="1743300">a</span> <span m="1743360">multiplication.</span> <span
  m="1744900">So</span> <span m="1745010">I</span> <span
  m="1745100">needed</span> <span m="1745550">the</span> <span
  m="1746330">product</span> <span m="1746750">rule</span> <span
  m="1747590">for</span> <span m="1747770">that.</span> <span
  m="1748730">I</span> <span m="1749120">have</span> <span
  m="1749420">these</span> <span m="1750080">separate</span> <span
  m="1750590">numbers.</span> <span m="1751040">So</span> <span
  m="1751280">I</span> <span m="1751370">put</span> <span
  m="1751580">them</span> <span m="1751790">in.</span></p><p><span
  m="1752570">And</span> <span m="1753950">so</span> <span
  m="1754540">it's</span> <span m="1755240">the</span> <span
  m="1755330">computational</span> <span m="1756020">graph</span> <span
  m="1756320">finished.</span> <span m="1758140">We</span> <span
  m="1758290">only</span> <span m="1758560">needed</span> <span
  m="1759310">two</span> <span m="1760480">levels.</span> <span
  m="1761710">And</span> <span m="1761980">we</span> <span
  m="1762100">got</span> <span m="1762310">8</span> <span m="1762580">and</span>
  <span m="1762670">132--</span> <span m="1763840">140.</span></p><p><span
  m="1765180">OK.</span> <span m="1766540">But</span> <span
  m="1766810">we</span> <span m="1766960">didn't</span> <span
  m="1767230">get</span> <span m="1767560">dF</span> <span m="1767710">dy</span>
  <span m="1768900">yet.</span> <span m="1774230">And</span> <span
  m="1774640">for</span> <span m="1774790">that,</span> <span
  m="1775030">I'd</span> <span m="1775780">need</span> <span
  m="1776020">to</span> <span m="1776170">redo</span> <span
  m="1776620">this</span> <span m="1776860">again.</span> <span
  m="1780160">And</span> <span m="1780340">I</span> <span
  m="1780510">don't</span> <span m="1782270">want</span> <span
  m="1782520">to</span> <span m="1782610">do</span> <span
  m="1782880">that.</span></p><p><span m="1783330">I</span> <span
  m="1783510">would</span> <span m="1783750">rather</span> <span
  m="1784230">do</span> <span m="1784890">the</span> <span
  m="1785190">reverse</span> <span m="1785910">mode</span> <span
  m="1786810">and</span> <span m="1786930">do</span> <span
  m="1787110">them</span> <span m="1787290">both</span> <span
  m="1787590">at</span> <span m="1787710">once.</span> <span
  m="1788160">That's</span> <span m="1788430">the</span> <span
  m="1788550">point</span> <span m="1788940">of</span> <span
  m="1789060">the</span> <span m="1789180">reverse</span> <span
  m="1789660">mode.</span> <span m="1790090">It's</span> <span
  m="1790170">very</span> <span m="1790470">efficient.</span> <span
  m="1791230">It's</span> <span m="1791340">very</span> <span
  m="1791790">efficient,</span> <span m="1792330">actually.</span></p><p><span
  m="1795140">Computing</span> <span m="1795710">the</span> <span
  m="1795830">gradient</span> <span m="1797090">after</span> <span
  m="1797420">you've</span> <span m="1799490">done</span> <span
  m="1799760">the</span> <span m="1799850">work</span> <span
  m="1800150">for</span> <span m="1800330">the</span> <span
  m="1800450">function,</span> <span m="1801650">computing</span> <span
  m="1802220">first</span> <span m="1802580">derivatives--</span> <span
  m="1803270">you</span> <span m="1803390">could</span> <span
  m="1803570">compute</span> <span m="1804020">n</span> <span
  m="1804350">first</span> <span m="1804710">derivatives</span> <span
  m="1805970">with</span> <span m="1806210">about</span> <span
  m="1807140">four</span> <span m="1807470">or</span> <span
  m="1807530">five</span> <span m="1807950">times</span> <span
  m="1808380">the</span> <span m="1808460">cost,</span> <span
  m="1808880">not</span> <span m="1809300">n</span> <span
  m="1809540">times.</span> <span m="1810800">That's</span> <span
  m="1811130">amazing</span> <span m="1811790">to</span> <span
  m="1811940">me.</span> <span m="1812330">That</span> <span
  m="1812570">is</span> <span m="1812780">amazing</span> <span
  m="1814100">that</span> <span m="1814580">I</span> <span
  m="1814700">can</span> <span m="1814910">compute</span> <span
  m="1815370">the</span> <span m="1815450">gradient</span> <span
  m="1817010">very</span> <span m="1817490">efficiently</span> <span
  m="1821600">by</span> <span m="1822280">the</span> <span
  m="1822400">back</span> <span m="1822700">prop.</span></p><p><span
  m="1823290">So</span> <span m="1823900">I</span> <span m="1823990">have</span>
  <span m="1824200">to</span> <span m="1824320">show</span> <span
  m="1824590">you</span> <span m="1824710">the</span> <span
  m="1824830">backwards</span> <span m="1825430">way.</span> <span
  m="1829300">Yeah.</span> <span m="1831250">I'm</span> <span
  m="1831400">just</span> <span m="1831610">going</span> <span
  m="1831760">to</span> <span m="1831850">follow</span> <span
  m="1832330">all</span> <span m="1832630">the</span> <span
  m="1832780">paths</span> <span m="1833380">backwards</span> <span
  m="1834520">so</span> <span m="1834730">that</span> <span m="1834940">I</span>
  <span m="1835090">get</span> <span m="1835360">both</span> <span
  m="1835840">dF</span> <span m="1836470">dx</span> <span m="1836740">and</span>
  <span m="1836920">dF</span> <span m="1837175">dy.</span> <span
  m="1838960">You</span> <span m="1839110">see,</span> <span
  m="1839380">the</span> <span m="1839560">idea</span> <span
  m="1840430">is</span> <span m="1840610">to</span> <span
  m="1840760">take</span> <span m="1841030">the</span> <span
  m="1841210">derivative</span> <span m="1841780">of</span> <span
  m="1841990">each</span> <span m="1842350">step--</span> <span
  m="1843280">each</span> <span m="1843550">small</span> <span
  m="1843940">step.</span></p><p><span m="1845020">That's</span> <span
  m="1845320">really</span> <span m="1845620">what</span> <span
  m="1845770">we</span> <span m="1845920">do</span> <span m="1846100">in</span>
  <span m="1846220">calculus.</span> <span m="1848080">If</span> <span
  m="1848230">you</span> <span m="1848350">think</span> <span
  m="1848590">about</span> <span m="1848860">the</span> <span
  m="1848980">start</span> <span m="1849370">of</span> <span
  m="1849490">a</span> <span m="1849550">calculus</span> <span
  m="1850180">course,</span> <span m="1851050">what</span> <span
  m="1851680">derivatives</span> <span m="1852340">do</span> <span
  m="1852460">we</span> <span m="1852640">actually</span> <span
  m="1853180">know?</span> <span m="1853600">Do</span> <span
  m="1853750">we</span> <span m="1853930">actually</span> <span
  m="1854350">use</span> <span m="1855220">F</span> <span m="1856450">at</span>
  <span m="1856720">x</span> <span m="1856990">plus</span> <span
  m="1857320">delta</span> <span m="1857770">x</span> <span
  m="1858190">minus</span> <span m="1858730">F?</span> <span
  m="1860020">What</span> <span m="1860200">derivatives</span> <span
  m="1860800">do</span> <span m="1860950">we</span> <span
  m="1861160">grind</span> <span m="1861760">out?</span></p><p><span
  m="1865960">We</span> <span m="1866110">do</span> <span m="1866320">the</span>
  <span m="1866470">derivatives</span> <span m="1867160">of</span> <span
  m="1867310">x</span> <span m="1867580">to</span> <span m="1867700">the</span>
  <span m="1867910">n.</span> <span m="1870440">Every</span> <span
  m="1870740">calculus</span> <span m="1871310">book</span> <span
  m="1871550">starts</span> <span m="1871970">with</span> <span
  m="1872150">x</span> <span m="1872330">squared</span> <span
  m="1873270">and</span> <span m="1873680">finds</span> <span
  m="1874080">the</span> <span m="1874220">derivative</span> <span
  m="1874620">of</span> <span m="1875000">x to</span> <span
  m="1875120">the</span> <span m="1875290">n.</span> <span
  m="1875930">Then</span> <span m="1876140">you</span> <span
  m="1876260">do</span> <span m="1876530">sine</span> <span m="1877010">x</span>
  <span m="1877460">and</span> <span m="1877580">cos</span> <span
  m="1878030">x.</span></p><p><span m="1881150">Then</span> <span
  m="1881570">what</span> <span m="1881810">others?</span> <span m="1882590">Are
  there</span> <span m="1882850">any</span> <span m="1883245">more?</span> <span
  m="1885390">e</span> <span m="1885610">to</span> <span m="1885690">the</span>
  <span m="1885870">x--</span> <span m="1886200">good,</span> <span
  m="1886620">e</span> <span m="1886830">to</span> <span m="1886950">the</span>
  <span m="1887130">x.</span> <span m="1888450">And</span> <span
  m="1888840">it's</span> <span m="1889230">the</span> <span
  m="1889470">inverse</span> <span m="1889980">function</span> <span
  m="1890520">log.</span> <span m="1891600">In</span> <span
  m="1891750">freshman</span> <span m="1892260">calculus,</span> <span
  m="1892950">you</span> <span m="1893070">always</span> <span
  m="1893370">write</span> <span m="1894480">ln,</span> <span
  m="1895680">just</span> <span m="1895920">to</span> <span
  m="1896040">be</span> <span m="1896250">out</span> <span m="1896460">of</span>
  <span m="1896520">date.</span> <span m="1897640">OK.</span></p><p><span
  m="1898330">And</span> <span m="1898530">now</span> <span
  m="1898830">that</span> <span m="1899010">may be</span> <span
  m="1899400">the</span> <span m="1899520">list.</span> <span
  m="1900060">Is</span> <span m="1900240">it?</span> <span
  m="1900420">And</span> <span m="1900570">then</span> <span
  m="1900780">the</span> <span m="1900900">chain</span> <span
  m="1901260">rule.</span> <span m="1903460">Are</span> <span
  m="1903610">there</span> <span m="1903850">others</span> <span
  m="1904270">that</span> <span m="1904510">you</span> <span
  m="1904660">actually</span> <span m="1906010">do</span> <span
  m="1906460">a</span> <span m="1908750">computation</span> <span
  m="1909560">of?</span></p><p><span m="1910040">Actually,</span> <span
  m="1910530">e</span> <span m="1910770">to</span> <span m="1910850">the</span>
  <span m="1911030">x</span> <span m="1911300">is</span> <span
  m="1911480">defined</span> <span m="1912860">by</span> <span
  m="1913100">the</span> <span m="1913220">property</span> <span
  m="1913820">that</span> <span m="1914030">its</span> <span
  m="1914210">derivative</span> <span m="1914810">is</span> <span
  m="1915050">e</span> <span m="1915150">to</span> <span m="1915260">the</span>
  <span m="1915440">x.</span> <span m="1917170">And</span> <span
  m="1917420">then</span> <span m="1917630">you</span> <span
  m="1917780">discover</span> <span m="1918290">what</span> <span
  m="1918470">log</span> <span m="1918830">x</span> <span m="1919100">has</span>
  <span m="1919310">to</span> <span m="1919430">be.</span> <span
  m="1920270">And</span> <span m="1920540">sine</span> <span
  m="1920960">x--</span> <span m="1921950">how</span> <span
  m="1922130">do</span> <span m="1922220">you</span> <span m="1922370">do</span>
  <span m="1922640">sine</span> <span m="1923090">of</span> <span
  m="1923210">x</span> <span m="1923480">plus</span> <span
  m="1923750">delta</span> <span m="1924140">x?</span> <span
  m="1924500">Well,</span> <span m="1925250">compare</span> <span
  m="1926030">minus</span> <span m="1926450">sine</span> <span
  m="1926810">of</span> <span m="1926960">x.</span></p><p><span
  m="1927260">How</span> <span m="1927410">do</span> <span
  m="1927500">you</span> <span m="1927560">find</span> <span
  m="1927930">the</span> <span m="1929300">hard</span> <span
  m="1929810">way,</span> <span m="1930200">once-and-for-all</span> <span
  m="1931220">way?</span> <span m="1932030">You</span> <span
  m="1932960">draw</span> <span m="1933360">a</span> <span
  m="1933410">little</span> <span m="1933770">unit</span> <span
  m="1934190">circle</span> <span m="1934910">and</span> <span
  m="1935660">mess</span> <span m="1935990">with</span> <span
  m="1936230">some</span> <span m="1937310">angles.</span> <span
  m="1937970">And</span> <span m="1938120">you</span> <span
  m="1939050">discover</span> <span m="1939740">that</span> <span
  m="1940040">the</span> <span m="1940190">derivative</span> <span
  m="1940760">of</span> <span m="1940880">the</span> <span
  m="1941000">sine</span> <span m="1941480">is</span> <span
  m="1941660">the</span> <span m="1941780">cosine.</span> <span
  m="1944140">That's</span> <span m="1944810">if</span> <span
  m="1944960">you've</span> <span m="1945200">defined</span> <span
  m="1945740">the</span> <span m="1945890">sine</span> <span
  m="1947450">as</span> <span m="1947630">a</span> <span
  m="1947690">ratio</span> <span m="1948320">of</span> <span
  m="1949310">sides</span> <span m="1950180">in</span> <span
  m="1950490">a</span> <span m="1950540">right</span> <span
  m="1950810">triangle.</span></p><p><span m="1951350">Of</span> <span
  m="1951440">course,</span> <span m="1951740">you</span> <span
  m="1951860">could</span> <span m="1952070">define</span> <span
  m="1952550">it</span> <span m="1952700">as</span> <span m="1952940">an</span>
  <span m="1953090">infinite</span> <span m="1953540">series.</span> <span
  m="1954050">And</span> <span m="1954140">then</span> <span
  m="1954380">you</span> <span m="1954470">would</span> <span
  m="1954650">be</span> <span m="1954830">back</span> <span
  m="1955130">to</span> <span m="1955700">just</span> <span
  m="1955970">using</span> <span m="1956430">that.</span> <span
  m="1957770">OK.</span> <span m="1960680">So</span> <span
  m="1960860">calculus</span> <span m="1961520">does</span> <span
  m="1961880">exactly</span> <span m="1962390">what</span> <span
  m="1962570">we're</span> <span m="1962780">doing</span> <span
  m="1963080">here--</span> <span m="1964160">finds</span> <span
  m="1964610">all</span> <span m="1964850">derivatives</span> <span
  m="1966500">by</span> <span m="1966800">the</span> <span
  m="1966950">chain</span> <span m="1967310">rule</span> <span
  m="1968030">applied</span> <span m="1968570">to</span> <span
  m="1970520">a</span> <span m="1970580">few</span> <span
  m="1971990">ones</span> <span m="1972390">that</span> <span
  m="1972580">it</span> <span m="1972740">has</span> <span
  m="1974000">worked</span> <span m="1974480">out</span> <span
  m="1974810">in</span> <span m="1975020">detail.</span></p><p><span
  m="1976030">But</span> <span m="1976220">tangent</span> <span
  m="1976820">of</span> <span m="1976970">x,</span> <span m="1977360">we</span>
  <span m="1977510">would</span> <span m="1977720">use</span> <span
  m="1978140">the</span> <span m="1979040">quotient</span> <span
  m="1979520">rule.</span> <span m="1982060">Secant</span> <span
  m="1982940">of</span> <span m="1983090">x,</span> <span m="1983510">we</span>
  <span m="1983690">would</span> <span m="1983870">use</span> <span
  m="1984180">the</span> <span m="1984260">quotient</span> <span
  m="1984770">rule,</span> <span m="1985010">1</span> <span
  m="1985250">over</span> <span m="1985460">cosine.</span> <span
  m="1986970">And</span> <span m="1987050">the</span> <span
  m="1987140">products,</span> <span m="1987860">we</span> <span
  m="1988070">use</span> <span m="1988310">the</span> <span
  m="1988400">product</span> <span m="1988880">rule.</span></p><p><span
  m="1989370">So</span> <span m="1989690">really,</span> <span
  m="1990590">calculus</span> <span m="1991850">tends</span> <span
  m="1992180">to</span> <span m="1992300">seem</span> <span
  m="1992720">fairly</span> <span m="1993170">simple</span> <span
  m="1997010">when</span> <span m="1997250">you</span> <span
  m="1997430">look</span> <span m="1997640">back</span> <span
  m="1998150">to</span> <span m="1998330">see</span> <span
  m="1998690">what,</span> <span m="1999650">actually,</span> <span
  m="2000260">you</span> <span m="2000790">did.</span> <span
  m="2002750">And</span> <span m="2003010">then</span> <span
  m="2003220">integration--</span> <span m="2003910">what</span> <span
  m="2004120">is</span> <span m="2004300">integral</span> <span
  m="2004690">calculus</span> <span m="2005260">about?</span> <span
  m="2006520">More</span> <span m="2006700">or</span> <span
  m="2006730">less</span> <span m="2007030">guessing</span> <span
  m="2007510">the</span> <span m="2007660">answer.</span></p><p><span
  m="2009240">You</span> <span m="2010150">have</span> <span
  m="2010360">to</span> <span m="2010480">integrate</span> <span
  m="2011110">f</span> <span m="2011350">of</span> <span m="2011500">x</span>
  <span m="2011830">dx.</span> <span m="2014230">So</span> <span
  m="2014440">really,</span> <span m="2014830">what</span> <span
  m="2015770">you</span> <span m="2015850">have</span> <span
  m="2016060">to</span> <span m="2016150">do</span> <span m="2016450">is</span>
  <span m="2016570">sort</span> <span m="2016920">of</span> <span
  m="2017270">think,</span> <span m="2017620">OK,</span> <span
  m="2018130">what</span> <span m="2018400">had</span> <span
  m="2018670">this</span> <span m="2018970">derivative?</span> <span
  m="2020290">What</span> <span m="2020470">function</span> <span
  m="2020950">had</span> <span m="2021160">that</span> <span
  m="2021370">derivative?</span> <span m="2022550">And</span> <span
  m="2022870">mess</span> <span m="2023170">around</span> <span
  m="2023650">and</span> <span m="2025660">get</span> <span
  m="2025960">it.</span></p><p><span m="2026230">So</span> <span
  m="2028120">really,</span> <span m="2028580">it's</span> <span
  m="2032260">a</span> <span m="2032320">freshman</span> <span
  m="2032770">course,</span> <span m="2033310">I</span> <span
  m="2033370">guess.</span> <span m="2034210">OK.</span> <span
  m="2034960">So</span> <span m="2035140">where</span> <span
  m="2035380">am</span> <span m="2035520">I?</span> <span
  m="2037740">Backward.</span> <span m="2038400">Right.</span> <span
  m="2039410">That's</span> <span m="2039710">the</span> <span
  m="2039800">thing</span> <span m="2040160">still</span> <span
  m="2040450">to</span> <span m="2040580">do.</span></p><p><span
  m="2041690">How</span> <span m="2041900">does</span> <span
  m="2042140">the</span> <span m="2042230">backward</span> <span
  m="2042740">system</span> <span m="2043190">work?</span> <span
  m="2044330">OK,</span> <span m="2044990">I'll</span> <span
  m="2045540">try</span> <span m="2045840">my</span> <span
  m="2046010">best.</span> <span m="2047450">OK.</span> <span
  m="2047780">So</span> <span m="2048670">here is</span> <span
  m="2048969">the</span> <span m="2049090">big</span> <span
  m="2049570">goal.</span> <span m="2050679">Back--</span> <span
  m="2052900">so</span> <span m="2053290">reverse</span> <span
  m="2053860">mode</span> <span m="2054310">AD.</span> <span
  m="2061040">Right.</span> <span m="2061750">And</span> <span
  m="2061900">let</span> <span m="2062020">me</span> <span
  m="2062139">make</span> <span m="2062380">myself</span> <span
  m="2062889">a</span> <span m="2062960">little</span> <span
  m="2063219">note.</span></p><p><span m="2065489">The</span> <span
  m="2065989">little</span> <span m="2066350">note</span> <span
  m="2066620">is</span> <span m="2066940">to</span> <span
  m="2067030">give</span> <span m="2067239">you</span> <span
  m="2067330">another</span> <span m="2067780">example</span> <span
  m="2070170">where</span> <span m="2070710">the</span> <span
  m="2070920">order</span> <span m="2071730">that</span> <span
  m="2072030">you</span> <span m="2072150">do</span> <span
  m="2072389">the</span> <span m="2072540">computations</span> <span
  m="2074219">makes</span> <span m="2074520">a</span> <span
  m="2074610">big</span> <span m="2074880">difference.</span> <span
  m="2077190">And</span> <span m="2077380">that's</span> <span
  m="2077870">not</span> <span m="2078290">obvious</span> <span
  m="2078770">that</span> <span m="2078920">it</span> <span
  m="2079040">will.</span> <span m="2079699">There</span> <span
  m="2079820">are</span> <span m="2079880">many</span> <span
  m="2080239">things</span> <span m="2080719">in</span> <span
  m="2080900">math</span> <span m="2081409">that</span> <span
  m="2081590">you</span> <span m="2081770">could</span> <span
  m="2082010">do</span> <span m="2082400">in</span> <span
  m="2082580">either</span> <span m="2082969">order.</span></p><p><span
  m="2084050">And</span> <span m="2085179">it</span> <span
  m="2085400">seems</span> <span m="2085730">like,</span> <span
  m="2085969">logically,</span> <span m="2086739">you've</span> <span
  m="2086989">done</span> <span m="2087199">the</span> <span
  m="2087320">same</span> <span m="2087679">things.</span> <span
  m="2088730">So</span> <span m="2089000">another,</span> <span
  m="2090620">and</span> <span m="2090860">simpler,</span> <span
  m="2092150">example</span> <span m="2093770">which</span> <span
  m="2093980">shows</span> <span m="2094520">how</span> <span
  m="2095030">one</span> <span m="2095480">way</span> <span
  m="2095780">could</span> <span m="2095960">be</span> <span
  m="2096570">way</span> <span m="2096889">faster</span> <span
  m="2097400">than</span> <span m="2097610">another</span> <span
  m="2098000">way</span> <span m="2098660">is</span> <span
  m="2098870">when</span> <span m="2099050">I'm</span> <span
  m="2099210">multiplying</span> <span m="2102000">three</span> <span
  m="2102290">matrices.</span> <span m="2104870">So</span> <span
  m="2105110">I'm</span> <span m="2105200">multiplying</span> <span
  m="2105800">three</span> <span m="2106070">matrices--</span> <span
  m="2106790">A</span> <span m="2106940">times</span> <span m="2107270">B</span>
  <span m="2107480">times</span> <span m="2107810">C.</span></p><p><span
  m="2108740">And</span> <span m="2108860">the</span> <span
  m="2108980">question</span> <span m="2109520">is,</span> <span
  m="2110300">do</span> <span m="2110480">I</span> <span m="2110600">do</span>
  <span m="2110780">BC</span> <span m="2111350">first</span> <span
  m="2112040">and</span> <span m="2112160">then</span> <span
  m="2112370">multiply</span> <span m="2112790">by</span> <span
  m="2113030">A?</span> <span m="2114110">Or</span> <span m="2114380">do</span>
  <span m="2114590">I</span> <span m="2114920">do</span> <span
  m="2115250">AB</span> <span m="2115850">first</span> <span
  m="2117080">and</span> <span m="2117230">then</span> <span
  m="2117770">multiply</span> <span m="2118220">that</span> <span
  m="2118460">by</span> <span m="2118670">C?</span> <span m="2120230">And</span>
  <span m="2120350">of</span> <span m="2120440">course,</span> <span
  m="2120740">I</span> <span m="2120860">kept</span> <span
  m="2121130">them</span> <span m="2121280">in</span> <span
  m="2121400">order--</span> <span m="2122840">in</span> <span
  m="2122960">the</span> <span m="2123080">order</span> <span
  m="2123410">ABC.</span></p><p><span m="2124370">But</span> <span
  m="2124640">the</span> <span m="2124910">order</span> <span
  m="2125420">of</span> <span m="2125660">computations</span> <span
  m="2127730">can</span> <span m="2128030">be</span> <span
  m="2129110">different.</span> <span m="2131790">You</span> <span
  m="2131940">get</span> <span m="2132090">the</span> <span
  m="2132180">right</span> <span m="2132420">answer</span> <span
  m="2132750">both</span> <span m="2133050">ways.</span> <span
  m="2133530">But</span> <span m="2134190">those</span> <span
  m="2134490">can</span> <span m="2134640">be</span> <span
  m="2134850">completely,</span> <span m="2135630">completely</span> <span
  m="2136320">different.</span></p><p><span m="2136710">One</span> <span
  m="2136950">can</span> <span m="2137130">be</span> <span
  m="2137280">1,000</span> <span m="2137820">times</span> <span
  m="2138630">faster</span> <span m="2139110">than</span> <span
  m="2139320">the</span> <span m="2139470">other.</span> <span
  m="2140720">So</span> <span m="2141360">that's</span> <span
  m="2141900">just</span> <span m="2142200">to</span> <span
  m="2142380">show--</span> <span m="2142950">actually,</span> <span
  m="2143460">it</span> <span m="2143790">kind</span> <span
  m="2144060">of</span> <span m="2144120">connects</span> <span
  m="2144690">to</span> <span m="2144840">this.</span> <span
  m="2145990">And</span> <span m="2147460">there</span> <span
  m="2147680">is</span> <span m="2147810">also</span> <span
  m="2148770">another--</span> <span m="2149630">so</span> <span
  m="2150210">I'll</span> <span m="2150360">do</span> <span
  m="2150600">that,</span> <span m="2151050">too.</span></p><p><span
  m="2153120">So</span> <span m="2153330">this</span> <span
  m="2153510">is</span> <span m="2154790">example</span> <span
  m="2155310">2,</span> <span m="2157320">where</span> <span
  m="2157560">this</span> <span m="2157830">is</span> <span
  m="2158010">meant</span> <span m="2158250">to</span> <span
  m="2158370">be</span> <span m="2158610">example</span> <span
  m="2159190">1.</span> <span m="2161580">And</span> <span
  m="2162000">example</span> <span m="2162630">3</span> <span
  m="2165690">leads</span> <span m="2166140">to</span> <span
  m="2166260">something</span> <span m="2166740">called</span> <span
  m="2167010">the</span> <span m="2167190">adjoint</span> <span
  m="2167910">method</span> <span m="2169860">in</span> <span
  m="2171510">differential</span> <span m="2172080">equations</span> <span
  m="2173960">or</span> <span m="2174320">in</span> <span
  m="2174750">optimization--</span> <span m="2177530">in</span> <span
  m="2179430">computing</span> <span m="2180900">optimum</span> <span
  m="2182000">and</span> <span m="2182340">maximizing</span> <span
  m="2182800">it.</span> <span m="2184190">Yeah.</span></p><p><span
  m="2188010">Really,</span> <span m="2188340">the</span> <span
  m="2188490">underlying</span> <span m="2190410">reason</span> <span
  m="2191010">it</span> <span m="2191400">gives</span> <span
  m="2191730">us</span> <span m="2191820">speed-up</span> <span
  m="2192450">is,</span> <span m="2193230">it</span> <span
  m="2193380">makes</span> <span m="2193650">the</span> <span
  m="2193740">right</span> <span m="2194010">choice</span> <span
  m="2195300">in</span> <span m="2195540">a</span> <span
  m="2195570">product</span> <span m="2196050">of</span> <span
  m="2196140">three</span> <span m="2196470">things.</span> <span
  m="2198030">Yeah.</span> <span m="2199170">So</span> <span
  m="2199500">it'll</span> <span m="2199680">be</span> <span
  m="2199800">enough</span> <span m="2200100">to</span> <span
  m="2200220">do</span> <span m="2200940">example</span> <span m="2201520">1
  and</span> <span m="2201990">example</span> <span m="2202550">2.</span> <span
  m="2203110">OK,</span> <span m="2203550">let</span> <span
  m="2203640">me</span> <span m="2203760">go</span> <span
  m="2203970">with</span> <span m="2204210">example</span> <span
  m="2206280">1.</span></p><p><span m="2208540">This</span> <span
  m="2208840">is</span> <span m="2209050">now</span> <span
  m="2209470">back</span> <span m="2209740">propagation.</span> <span
  m="2210520">Finally,</span> <span m="2210910">we</span> <span
  m="2211060">got</span> <span m="2211270">to</span> <span
  m="2211450">it.</span> <span m="2212300">OK.</span> <span
  m="2219330">Well,</span> <span m="2221100">I</span> <span
  m="2221310">look</span> <span m="2221550">at</span> <span
  m="2221670">my</span> <span m="2221820">notes</span> <span
  m="2222300">is</span> <span m="2222510">how</span> <span m="2222720">I</span>
  <span m="2222840">do</span> <span m="2223020">it.</span></p><p><span
  m="2227170">So</span> <span m="2227590">the</span> <span
  m="2227830">notes--</span> <span m="2228250">this</span> <span
  m="2228430">is</span> <span m="2228550">section</span> <span
  m="2228970">7.2--</span> <span m="2230410">does</span> <span
  m="2230710">these</span> <span m="2230950">computational</span> <span
  m="2231790">graphs.</span> <span m="2232720">And</span> <span
  m="2232870">then</span> <span m="2233140">here</span> <span
  m="2233590">is</span> <span m="2234640">reverse</span> <span
  m="2235180">mode.</span> <span m="2238120">So</span> <span
  m="2238510">it</span> <span m="2238660">starts</span> <span
  m="2239200">over</span> <span m="2239470">here</span> <span
  m="2239830">with</span> <span m="2240280">the--</span> <span
  m="2240840">so</span> <span m="2241000">I'm</span> <span m="2241320">going
  to</span> <span m="2241470">use</span> <span m="2241720">the</span> <span
  m="2241840">chain</span> <span m="2242260">rule.</span> <span
  m="2242810">So</span> <span m="2242980">dF</span> <span m="2243780">dF
  is</span> <span m="2244110">1.</span> <span m="2246040">And</span> <span
  m="2246190">then</span> <span m="2246400">I'm</span> <span
  m="2246490">going</span> <span m="2247660">backwards.</span></p><p><span
  m="2251500">And</span> <span m="2252740">of</span> <span
  m="2252910">course,</span> <span m="2256930">I</span> <span
  m="2257020">have</span> <span m="2257140">to</span> <span
  m="2257620">use</span> <span m="2258010">the</span> <span
  m="2258130">right</span> <span m="2258400">rule.</span> <span
  m="2258970">So</span> <span m="2259150">I</span> <span m="2259180">have</span>
  <span m="2259300">to</span> <span m="2259420">use</span> <span
  m="2259660">the</span> <span m="2259780">product</span> <span
  m="2260170">rule.</span> <span m="2261250">And</span> <span
  m="2261400">then</span> <span m="2261610">soon</span> <span
  m="2262000">I'll</span> <span m="2262150">have</span> <span
  m="2262360">to</span> <span m="2262480">use</span> <span
  m="2263080">these</span> <span m="2263500">power</span> <span
  m="2263920">rule</span> <span m="2264370">and</span> <span
  m="2264490">linear</span> <span m="2264850">rules.</span> <span
  m="2265150">So</span> <span m="2265460">of</span> <span
  m="2265750">course,</span> <span m="2266140">no</span> <span
  m="2266380">change</span> <span m="2266800">there.</span></p><p><span
  m="2267830">The</span> <span m="2267930">change</span> <span
  m="2268410">is</span> <span m="2268780">that</span> <span
  m="2268990">by</span> <span m="2269260">going</span> <span
  m="2269560">backwards--</span> <span m="2272220">oh,</span> <span
  m="2272730">I</span> <span m="2272900">don't</span> <span
  m="2273110">know</span> <span m="2273260">if</span> <span m="2273380">I</span>
  <span m="2273470">completed</span> <span m="2274040">that</span> <span
  m="2274280">sentence,</span> <span m="2275330">that</span> <span
  m="2275510">I</span> <span m="2275630">could</span> <span
  m="2275870">find</span> <span m="2277910">100</span> <span
  m="2278510">partial</span> <span m="2278960">derivatives,</span> <span
  m="2279650">if</span> <span m="2279800">the</span> <span
  m="2279920">function</span> <span m="2280430">depended</span> <span
  m="2280940">on</span> <span m="2281090">100</span> <span
  m="2281600">variables,</span> <span m="2282800">in</span> <span
  m="2282950">about</span> <span m="2283280">five</span> <span
  m="2283790">times</span> <span m="2285620">the</span> <span
  m="2285770">cost</span> <span m="2286250">of</span> <span
  m="2286400">one</span> <span m="2286730">variable--</span> <span
  m="2287870">three</span> <span m="2288200">to</span> <span
  m="2288290">five</span> <span m="2288680">times</span> <span
  m="2289070">the</span> <span m="2289160">cost</span> <span
  m="2289520">of</span> <span m="2289640">one.</span> <span
  m="2290060">So</span> <span m="2291350">you</span> <span
  m="2291560">would</span> <span m="2291740">expect</span> <span
  m="2293660">100</span> <span m="2294200">chain</span> <span
  m="2294590">rules</span> <span m="2294980">would</span> <span
  m="2295160">cost</span> <span m="2295520">100</span> <span
  m="2295910">times.</span></p><p><span m="2296480">But</span> <span
  m="2297680">you</span> <span m="2297800">see,</span> <span
  m="2298130">we're</span> <span m="2298670">reusing</span> <span
  m="2300290">the</span> <span m="2300410">pieces</span> <span
  m="2300950">in</span> <span m="2301070">the</span> <span
  m="2301220">chain</span> <span m="2302240">and</span> <span
  m="2303080">just</span> <span m="2303500">having</span> <span
  m="2304610">a</span> <span m="2304760">larger--</span> <span
  m="2306530">our</span> <span m="2306980">chain</span> <span
  m="2307400">is</span> <span m="2307550">wider.</span> <span
  m="2308190">But</span> <span m="2308270">it's</span> <span
  m="2308420">not</span> <span m="2308660">longer.</span> <span
  m="2309400">And</span> <span m="2309440">it's</span> <span
  m="2309590">not</span> <span m="2309830">repeated.</span></p><p><span
  m="2310630">Anyway,</span> <span m="2311390">so</span> <span
  m="2311630">here</span> <span m="2311870">I'm</span> <span
  m="2312080">going</span> <span m="2312260">to</span> <span
  m="2312860">use</span> <span m="2315350">whatever</span> <span m="2315830">it
  is--</span> <span m="2316400">dF</span> <span m="2317180">dc</span> <span
  m="2318860">and</span> <span m="2319240">dF</span> <span
  m="2320930">ds.</span> <span m="2323080">And I'm</span> <span
  m="2323540">remembering</span> <span m="2324230">that--</span> <span
  m="2327980">yeah,</span> <span m="2328440">OK.</span> <span
  m="2329360">So</span> <span m="2330920">dF</span> <span m="2331700">dc</span>
  <span m="2332300">is</span> <span m="2332570">s,</span> <span
  m="2333430">and</span> <span m="2333560">dF</span> <span m="2334065">ds
  is</span> <span m="2334390">c.</span> <span m="2334880">That</span> <span
  m="2335060">was</span> <span m="2337040">because</span> <span
  m="2337490">F</span> <span m="2337760">started</span> <span
  m="2338300">out</span> <span m="2338600">as</span> <span m="2339980">c</span>
  <span m="2340310">times</span> <span m="2340760">s.</span> <span
  m="2341090">It</span> <span m="2341210">was</span> <span
  m="2341420">the</span> <span m="2341480">product.</span></p><p><span
  m="2342650">OK.</span> <span m="2343220">Then</span> <span
  m="2343580">we've</span> <span m="2343760">got</span> <span
  m="2343970">to</span> <span m="2344120">evaluate</span> <span
  m="2344750">those.</span> <span m="2346900">And</span> <span
  m="2347390">I'll</span> <span m="2347600">look</span> <span
  m="2347870">again</span> <span m="2348230">to</span> <span
  m="2348350">see</span> <span m="2348740">that</span> <span
  m="2348920">I'm</span> <span m="2349190">hopefully</span> <span
  m="2349670">writing</span> <span m="2350030">down</span> <span
  m="2350300">some</span> <span m="2350540">of</span> <span
  m="2350630">the</span> <span m="2350780">correct</span> <span
  m="2351140">things.</span> <span m="2354740">OK.</span> <span
  m="2356250">So</span> <span m="2356940">now</span> <span
  m="2357450">what</span> <span m="2357630">I've</span> <span
  m="2357780">written</span> <span m="2357960">down</span> <span
  m="2358170">next</span> <span m="2358570">is</span> <span
  m="2358800">dF</span> <span m="2359400">dc</span> <span m="2359790">is</span>
  <span m="2360030">5.</span> <span m="2361350">Or</span> <span
  m="2361695">no,</span> <span m="2362040">5</span> <span m="2362580">on</span>
  <span m="2363990">that</span> <span m="2364230">example.</span></p><p><span
  m="2364770">What</span> <span m="2365010">is</span> <span
  m="2365190">it</span> <span m="2365280">here?</span> <span
  m="2365610">dF</span> <span m="2365820">dc</span> <span
  m="2370090">is--</span> <span m="2370960">c</span> <span m="2371560">is</span>
  <span m="2373900">x</span> <span m="2374200">cubed.</span> <span
  m="2375490">So</span> <span m="2375760">dF--</span> <span
  m="2376950">oh,</span> <span m="2377320">sorry,</span> <span
  m="2377650">dF</span> <span m="2378335">dc--</span> <span
  m="2380410">yeah,</span> <span m="2380620">I</span> <span
  m="2380980">want</span> <span m="2381290">s.</span> <span
  m="2382120">I'm</span> <span m="2382270">looking</span> <span
  m="2382540">for</span> <span m="2382750">s</span> <span
  m="2383070">here.</span> <span m="2383400">Yeah.</span> <span m="2384502">I'm
  looking</span> <span m="2384988">for s.</span></p><p><span
  m="2390830">So</span> <span m="2391310">I'm</span> <span
  m="2391440">looking</span> <span m="2391770">for</span> <span
  m="2391980">s.</span> <span m="2393210">And</span> <span
  m="2393390">that's</span> <span m="2395400">x</span> <span
  m="2395700">plus</span> <span m="2396150">3y.</span> <span
  m="2398460">Am</span> <span m="2398580">I</span> <span
  m="2398700">doing</span> <span m="2399030">this</span> <span
  m="2399150">well?</span> <span m="2404030">I</span> <span
  m="2404290">want,</span> <span m="2404590">in</span> <span
  m="2404740">the</span> <span m="2404890">end,</span> <span
  m="2405160">to</span> <span m="2405310">get</span> <span
  m="2406090">the</span> <span m="2406570">derivatives</span> <span
  m="2407530">with</span> <span m="2407680">respect</span> <span
  m="2408210">to</span> <span m="2408640">x</span> <span m="2409060">and</span>
  <span m="2409270">y--</span> <span m="2409690">the</span> <span
  m="2409810">whole</span> <span m="2410080">gradient.</span></p><p><span
  m="2411010">OK.</span> <span m="2411380">I</span> <span
  m="2411730">think</span> <span m="2412070">we</span> <span
  m="2412150">started</span> <span m="2412600">right.</span> <span
  m="2413580">The</span> <span m="2413650">first</span> <span
  m="2414010">derivatives</span> <span m="2415250">is</span> <span
  m="2415420">to</span> <span m="2415540">write</span> <span
  m="2415900">c</span> <span m="2416275">and s.</span> <span
  m="2416650">And</span> <span m="2416800">then</span> <span
  m="2418420">let</span> <span m="2418600">me</span> <span
  m="2418810">leave</span> <span m="2419080">these</span> <span
  m="2419350">boxes</span> <span m="2419860">open,</span> <span
  m="2420190">just</span> <span m="2420400">to</span> <span
  m="2420520">get</span> <span m="2420760">the</span> <span
  m="2420880">picture.</span></p><p><span m="2424660">Then</span> <span
  m="2424900">I'll</span> <span m="2425080">need</span> <span
  m="2427780">dc</span> <span m="2428830">dx,</span> <span m="2431080">dc</span>
  <span m="2431560">dy,</span> <span m="2435990">ds</span> <span
  m="2436335">dx,</span> <span m="2440640">and</span> <span
  m="2440910">ds</span> <span m="2441225">dy.</span> <span m="2443220">I</span>
  <span m="2443280">think</span> <span m="2443550">that's</span> <span
  m="2443820">right.</span> <span m="2447300">Here,</span> <span
  m="2447840">I</span> <span m="2447930">had</span> <span m="2448080">a</span>
  <span m="2448140">product</span> <span m="2448590">of</span> <span
  m="2448710">c and</span> <span m="2449055">s.</span> <span
  m="2449400">So</span> <span m="2449640">I</span> <span m="2451050">had</span>
  <span m="2451170">two</span> <span m="2451410">derivatives.</span></p><p><span
  m="2452700">Here</span> <span m="2453120">I</span> <span
  m="2453330">have</span> <span m="2454230">c and</span> <span
  m="2454695">s,</span> <span m="2455160">each</span> <span
  m="2455610">to</span> <span m="2456450">differentiate.</span> <span
  m="2457710">So</span> <span m="2458520">have</span> <span
  m="2458700">an</span> <span m="2458820">x</span> <span m="2459060">and</span>
  <span m="2459180">a</span> <span m="2459240">y</span> <span
  m="2459510">derivative</span> <span m="2459795">of</span> <span
  m="2460080">x</span> <span m="2460380">and</span> <span m="2460500">a</span>
  <span m="2460590">y</span> <span m="2460860">derivative.</span> <span
  m="2461760">And</span> <span m="2461880">now</span> <span
  m="2462780">it's</span> <span m="2463140">just</span> <span
  m="2463530">a</span> <span m="2463560">matter</span> <span
  m="2463890">of</span> <span m="2463950">putting</span> <span
  m="2464310">in</span> <span m="2464430">those</span> <span
  m="2464730">numbers</span> <span m="2465330">and</span> <span
  m="2465810">following</span> <span m="2466350">the</span> <span
  m="2466500">chain</span> <span m="2466920">backwards.</span></p><p><span
  m="2473630">Maybe</span> <span m="2473960">I'm</span> <span
  m="2474110">not</span> <span m="2474320">going</span> <span
  m="2474460">to</span> <span m="2474560">put</span> <span
  m="2474770">those</span> <span m="2475040">numbers</span> <span
  m="2475490">in,</span> <span m="2475730">because</span> <span
  m="2477080">if</span> <span m="2477290">I</span> <span
  m="2477380">didn't</span> <span m="2477980">reach</span> <span
  m="2478330">140,</span> <span m="2479120">you</span> <span
  m="2479240">wouldn't</span> <span m="2479510">believe</span> <span
  m="2480060">in</span> <span m="2480620">back</span> <span
  m="2480860">propagation.</span> <span m="2481830">And</span> <span
  m="2481930">that</span> <span m="2482000">would</span> <span
  m="2482180">be</span> <span m="2484220">an</span> <span
  m="2484430">unhappy</span> <span m="2485000">outcome.</span></p><p><span
  m="2488250">So</span> <span m="2488430">I'll</span> <span
  m="2488550">leave</span> <span m="2488820">you</span> <span
  m="2489010">to</span> <span m="2489560">put them</span> <span
  m="2489690">in</span> <span m="2490080">maybe.</span> <span
  m="2491520">Or</span> <span m="2491760">the</span> <span
  m="2491910">notes</span> <span m="2492720">have</span> <span
  m="2493230">a</span> <span m="2493320">separate</span> <span
  m="2493830">example</span> <span m="2494400">that</span> <span
  m="2494610">you</span> <span m="2494760">can</span> <span
  m="2494940">see.</span> <span m="2495840">But</span> <span
  m="2496050">do</span> <span m="2496170">you</span> <span
  m="2496290">see</span> <span m="2496560">the</span> <span
  m="2496680">point--</span> <span m="2497760">that</span> <span
  m="2501945">in</span> <span m="2502400">the</span> <span
  m="2502550">end,</span> <span m="2502790">I'm</span> <span
  m="2502970">going</span> <span m="2503120">to</span> <span
  m="2503240">find</span> <span m="2504260">dF</span> <span
  m="2505010">dx</span> <span m="2506750">and</span> <span m="2506990">dF</span>
  <span m="2507305">dy</span> <span m="2509570">from</span> <span
  m="2511400">the</span> <span m="2511520">chain--</span> <span
  m="2513650">from</span> <span m="2513890">one</span> <span
  m="2514370">chain</span> <span m="2514880">and</span> <span
  m="2515000">not</span> <span m="2517400">from</span> <span
  m="2517640">a</span> <span m="2517730">separate</span> <span
  m="2518270">chain</span> <span m="2518660">for</span> <span
  m="2518870">x</span> <span m="2519200">and</span> <span m="2519320">a</span>
  <span m="2519380">separate</span> <span m="2519830">chain</span> <span
  m="2520160">for</span> <span m="2520340">y.</span></p><p><span
  m="2522470">To</span> <span m="2522620">me,</span> <span
  m="2522860">that's</span> <span m="2523190">the</span> <span
  m="2523310">point</span> <span m="2524150">of</span> <span
  m="2524450">reverse</span> <span m="2524960">mode.</span> <span
  m="2526070">It's</span> <span m="2526180">a</span> <span
  m="2526370">little</span> <span m="2526580">bit</span> <span
  m="2526790">of</span> <span m="2526850">magic.</span> <span
  m="2529400">But</span> <span m="2529670">you</span> <span
  m="2529820">see</span> <span m="2530240">the</span> <span
  m="2531200">steps--</span> <span m="2532190">the</span> <span
  m="2532490">ingredient.</span></p><p><span m="2533330">And</span> <span
  m="2534590">some</span> <span m="2534890">of</span> <span
  m="2535010">you</span> <span m="2535840">have</span> <span
  m="2535970">seen</span> <span m="2536300">this</span> <span
  m="2536540">before</span> <span m="2537050">and</span> <span
  m="2537140">maybe</span> <span m="2537470">know</span> <span
  m="2537740">a</span> <span m="2537830">better</span> <span
  m="2538880">exposition.</span> <span m="2539700">I</span> <span
  m="2540200">found</span> <span m="2540530">this</span> <span
  m="2541250">blog</span> <span m="2541820">by</span> <span
  m="2542060">Christopher</span> <span m="2542640">Olah</span> <span
  m="2543170">clear.</span> <span m="2544100">And</span> <span
  m="2544220">these</span> <span m="2544550">very</span> <span
  m="2544880">simple</span> <span m="2545300">things,</span> <span
  m="2545630">you'll</span> <span m="2545810">see,</span> <span
  m="2546110">are</span> <span m="2546260">clear</span> <span
  m="2547190">in</span> <span m="2547370">the</span> <span
  m="2547490">notes.</span> <span m="2548420">But</span> <span
  m="2550580">maybe</span> <span m="2550910">another</span> <span
  m="2551330">blog</span> <span m="2552520">brings</span> <span
  m="2552920">out</span> <span m="2553160">other</span> <span
  m="2554810">points</span> <span m="2555350">to</span> <span
  m="2555890">make</span> <span m="2556240">here.</span></p><p><span
  m="2556730">It's</span> <span m="2556940">not</span> <span
  m="2557180">obvious,</span> <span m="2557870">maybe,</span> <span
  m="2558350">that</span> <span m="2558770">I</span> <span
  m="2558920">could</span> <span m="2559640">have</span> <span
  m="2559850">100</span> <span m="2560360">variables</span> <span
  m="2561660">and</span> <span m="2563300">do</span> <span
  m="2563840">the</span> <span m="2563990">calculation</span> <span
  m="2564800">in</span> <span m="2564980">four</span> <span
  m="2565310">or</span> <span m="2565340">five</span> <span
  m="2565700">times</span> <span m="2566810">the</span> <span
  m="2567980">cost--</span> <span m="2568570">four</span> <span
  m="2569030">or</span> <span m="2569090">five</span> <span
  m="2569420">times</span> <span m="2570410">being</span> <span
  m="2571160">instead</span> <span m="2571520">of</span> <span
  m="2571610">100.</span> <span m="2572740">Yeah.</span> <span
  m="2573740">But</span> <span m="2574130">it's</span> <span
  m="2574310">possible.</span></p><p><span m="2575450">OK.</span> <span
  m="2576850">So</span> <span m="2577180">could</span> <span
  m="2577450">I</span> <span m="2578380">close</span> <span
  m="2578830">today</span> <span m="2579320">with this one?</span> <span
  m="2585920">How</span> <span m="2586130">could</span> <span m="2586310">those
  be</span> <span m="2586610">different?</span> <span m="2587370">You're</span>
  <span m="2587790">computing</span> <span m="2588380">the</span> <span
  m="2588500">same</span> <span m="2588980">numbers,</span> <span
  m="2589620">the</span> <span m="2589640">same</span> <span
  m="2590460">AIJ,</span> <span m="2591310">BJKs,</span> <span
  m="2592940">CKLs,</span> <span m="2595670">and</span> <span
  m="2596150">doing</span> <span m="2596450">these</span> <span
  m="2596780">sums.</span> <span m="2597470">But</span> <span
  m="2597770">it</span> <span m="2598160">certainly</span> <span
  m="2598700">is</span> <span m="2598910">different.</span></p><p><span
  m="2599390">So</span> <span m="2599570">let's</span> <span
  m="2599840">just</span> <span m="2600620">do</span> <span
  m="2600860">that.</span> <span m="2601370">OK.</span> <span
  m="2601940">I'll</span> <span m="2602060">do</span> <span
  m="2602240">it</span> <span m="2602360">here.</span> <span
  m="2608480">And</span> <span m="2608500">then</span> <span
  m="2610900">at</span> <span m="2611020">the</span> <span
  m="2611110">right</span> <span m="2611350">time--</span> <span
  m="2611740">and</span> <span m="2611890">I</span> <span
  m="2611980">guess</span> <span m="2612250">it'll</span> <span
  m="2612400">be</span> <span m="2612580">after</span> <span
  m="2613030">Professor</span> <span m="2613570">Rao</span> <span
  m="2614620">on</span> <span m="2614800">Friday</span> <span
  m="2615160">and</span> <span m="2615250">Monday,</span> <span
  m="2616030">I'll</span> <span m="2616210">come</span> <span
  m="2616390">back</span> <span m="2616740">to</span> <span
  m="2618190">Professor</span> <span m="2618730">Sra's</span> <span
  m="2620230">short</span> <span m="2620560">proof</span> <span
  m="2622950">of</span> <span m="2623280">the</span> <span
  m="2624390">convergence</span> <span m="2625170">of</span> <span
  m="2626520">stochastic</span> <span m="2627150">gradient</span> <span
  m="2627600">descent.</span></p><p><span m="2628470">The</span> <span
  m="2628560">whole</span> <span m="2628770">point</span> <span
  m="2629250">is</span> <span m="2629550">to</span> <span
  m="2629700">show</span> <span m="2630030">you</span> <span
  m="2630780">what</span> <span m="2631020">assumptions</span> <span
  m="2631740">do</span> <span m="2631830">you</span> <span
  m="2631980">need.</span> <span m="2632560">You</span> <span
  m="2632580">need</span> <span m="2632850">some</span> <span
  m="2633090">assumptions</span> <span m="2633810">on</span> <span
  m="2634110">the</span> <span m="2635040">gradient,</span> <span
  m="2635760">some</span> <span m="2636060">assumptions</span> <span
  m="2636660">on</span> <span m="2636780">the</span> <span
  m="2636900">step</span> <span m="2637230">size.</span> <span
  m="2638190">And</span> <span m="2639480">for</span> <span m="2639720">a</span>
  <span m="2639750">good</span> <span m="2640020">proof,</span> <span
  m="2641010">all</span> <span m="2641250">the</span> <span
  m="2641400">assumptions</span> <span m="2642000">fit</span> <span
  m="2642270">together,</span> <span m="2642810">and,</span> <span
  m="2643200">dong,</span> <span m="2643680">out</span> <span
  m="2643995">comes</span> <span m="2644380">the</span> <span
  m="2644940">conclusion.</span> <span m="2646270">And</span> <span
  m="2646320">the</span> <span m="2646440">conclusion</span> <span
  m="2647070">would</span> <span m="2647190">be</span> <span
  m="2647430">how</span> <span m="2647640">fast</span> <span
  m="2648150">it</span> <span m="2648300">converges--</span> <span
  m="2650010">stochastic</span> <span m="2650700">gradient</span> <span
  m="2651150">descent.</span></p><p><span m="2651600">So</span> <span
  m="2651780">there's</span> <span m="2652980">some</span> <span
  m="2655140">expected</span> <span m="2655950">things,</span> <span
  m="2656370">because</span> <span m="2656820">it's</span> <span
  m="2656940">stochastic.</span> <span m="2658230">We</span> <span
  m="2658440">expect</span> <span m="2659520">some</span> <span
  m="2659790">assumptions</span> <span m="2660510">about</span> <span
  m="2660960">the</span> <span m="2662540">mean</span> <span m="2663380">and
  the</span> <span m="2663800">variance</span> <span m="2665060">to</span> <span
  m="2665360">go</span> <span m="2666230">into</span> <span
  m="2667340">the</span> <span m="2667460">proof.</span> <span
  m="2668390">So</span> <span m="2668620">you'll</span> <span
  m="2668840">see</span> <span m="2669110">that.</span></p><p><span
  m="2669620">But</span> <span m="2669950">maybe</span> <span
  m="2670760">it's</span> <span m="2670910">too</span> <span
  m="2671090">much</span> <span m="2671390">for</span> <span
  m="2671540">today.</span> <span m="2673960">So</span> <span
  m="2674120">I'll</span> <span m="2674630">come</span> <span
  m="2674900">back</span> <span m="2675140">to</span> <span
  m="2675260">that.</span> <span m="2676690">I</span> <span
  m="2676790">might</span> <span m="2677060">even</span> <span
  m="2677840">put</span> <span m="2678110">it</span> <span m="2678260">on</span>
  <span m="2679130">Stellar</span> <span m="2680360">and</span> <span
  m="2682820">just</span> <span m="2683150">close</span> <span
  m="2683630">with</span> <span m="2683840">this.</span></p><p><span
  m="2685130">So</span> <span m="2685340">suppose</span> <span
  m="2685940">A</span> <span m="2686510">is</span> <span m="2687200">m</span>
  <span m="2687440">by</span> <span m="2687680">n,</span> <span
  m="2689300">B</span> <span m="2690140">is</span> <span m="2690740">n</span>
  <span m="2691010">by</span> <span m="2691250">p,</span> <span
  m="2692610">and</span> <span m="2692810">C</span> <span m="2693350">is</span>
  <span m="2693620">p</span> <span m="2693920">by</span> <span
  m="2694190">q.</span> <span m="2696320">OK.</span> <span
  m="2697930">How</span> <span m="2698110">many</span> <span
  m="2700100">steps</span> <span m="2700550">does</span> <span
  m="2700760">it</span> <span m="2700850">take</span> <span
  m="2701210">to</span> <span m="2702110">find</span> <span m="2702650">A</span>
  <span m="2702860">times</span> <span m="2703250">B</span> <span
  m="2703460">times</span> <span m="2703760">C--</span> <span
  m="2704480">the</span> <span m="2704600">product</span> <span
  m="2705050">of</span> <span m="2705170">those</span> <span
  m="2705440">three</span> <span m="2705740">matrices?</span></p><p><span
  m="2706970">Well,</span> <span m="2707840">if</span> <span
  m="2708020">I</span> <span m="2708140">go</span> <span m="2708350">this</span>
  <span m="2708590">way,</span> <span m="2712580">I have</span> <span
  m="2712700">to</span> <span m="2712820">do</span> <span m="2713000">BC</span>
  <span m="2713630">first.</span> <span m="2714140">So</span> <span
  m="2714320">BC</span> <span m="2715840">costs--</span> <span
  m="2716650">how</span> <span m="2716840">many</span> <span
  m="2717380">operations</span> <span m="2718160">to</span> <span
  m="2718280">multiply</span> <span m="2718880">that</span> <span
  m="2719490">times</span> <span m="2719640">that?</span> <span
  m="2724010">npq--</span> <span m="2724910">nice</span> <span
  m="2725240">formula.</span> <span m="2725900">npq.</span> <span
  m="2728670">Why</span> <span m="2728920">is</span> <span
  m="2729040">that?</span></p><p><span m="2730540">Well,</span> <span
  m="2731050">I</span> <span m="2731200">could</span> <span
  m="2731440">say</span> <span m="2732010">that</span> <span
  m="2732220">the</span> <span m="2732370">answer</span> <span
  m="2732850">is</span> <span m="2733690">n</span> <span m="2733990">by</span>
  <span m="2734200">q.</span> <span m="2736280">And</span> <span
  m="2736730">every</span> <span m="2737470">number</span> <span
  m="2737990">in</span> <span m="2738110">there</span> <span
  m="2738530">was</span> <span m="2738770">an</span> <span
  m="2738950">inner</span> <span m="2739160">product</span> <span
  m="2741960">of</span> <span m="2742130">a</span> <span m="2742220">row</span>
  <span m="2742700">and</span> <span m="2742850">column</span> <span
  m="2743300">of</span> <span m="2743420">length</span> <span
  m="2743810">p.</span> <span m="2745310">So</span> <span m="2745730">I</span>
  <span m="2745880">have</span> <span m="2746990">nq</span> <span
  m="2747950">inner</span> <span m="2748260">products.</span></p><p><span
  m="2750350">And</span> <span m="2750530">each</span> <span
  m="2750800">one</span> <span m="2751130">costs</span> <span
  m="2752010">p--</span> <span m="2754940">multiply,</span> <span
  m="2755600">adds.</span> <span m="2758450">So</span> <span
  m="2759160">now</span> <span m="2759480">I</span> <span
  m="2759600">have</span> <span m="2759900">BC,</span> <span
  m="2761010">which</span> <span m="2761280">will</span> <span
  m="2761460">be--</span> <span m="2764280">so</span> <span
  m="2764460">now</span> <span m="2764790">I</span> <span
  m="2764910">have</span> <span m="2765450">m</span> <span m="2765690">by</span>
  <span m="2765960">n.</span> <span m="2766270">Then</span> <span
  m="2768720">I</span> <span m="2768780">have</span> <span m="2769080">m</span>
  <span m="2769350">by</span> <span m="2769650">n,</span> <span
  m="2771580">which</span> <span m="2771750">is</span> <span m="2771900">the
  A</span> <span m="2772050">times</span> <span m="2774000">B</span> <span
  m="2774210">by</span> <span m="2774420">C,</span> <span
  m="2774810">which</span> <span m="2775050">is</span> <span
  m="2775200">now</span> <span m="2775590">n</span> <span m="2775950">by</span>
  <span m="2776250">q.</span> <span m="2777360">That's</span> <span
  m="2777600">BC.</span></p><p><span m="2778110">This</span> <span
  m="2778320">is</span> <span m="2778530">A,</span> <span m="2779010">BC.</span>
  <span m="2780480">And this</span> <span m="2780810">one</span> <span
  m="2781020">costs--</span> <span m="2783450">what's</span> <span
  m="2783720">the</span> <span m="2783810">cost</span> <span
  m="2784230">here?</span> <span m="2785310">m</span> <span
  m="2785640">by</span> <span m="2786050">n,</span> <span m="2786870">m</span>
  <span m="2787200">by</span> <span m="2787500">q--</span> <span
  m="2788340">by</span> <span m="2788520">the</span> <span
  m="2788640">same</span> <span m="2789000">rule,</span> <span
  m="2789360">it'll</span> <span m="2789540">be</span> <span
  m="2789780">mnq.</span> <span m="2792954">Good.</span> <span
  m="2794450">That's</span> <span m="2795710">the</span> <span
  m="2795860">first</span> <span m="2796220">way--</span> <span
  m="2796640">A</span> <span m="2796940">times</span> <span
  m="2797420">BC.</span></p><p><span m="2798590">Now,</span> <span
  m="2798770">the</span> <span m="2798890">second</span> <span
  m="2799310">way</span> <span m="2799520">is</span> <span m="2799700">AB</span>
  <span m="2801170">times</span> <span m="2801530">C.</span> <span
  m="2803300">Let</span> <span m="2803450">me</span> <span
  m="2803600">write</span> <span m="2803900">in</span> <span
  m="2804080">again,</span> <span m="2804530">m</span> <span
  m="2804770">by</span> <span m="2805040">n,</span> <span m="2805490">n</span>
  <span m="2805790">by</span> <span m="2806060">p,</span> <span
  m="2806600">p</span> <span m="2806930">by</span> <span m="2807200">q.</span>
  <span m="2811700">So</span> <span m="2811880">now</span> <span
  m="2812090">I'm</span> <span m="2812210">doing</span> <span
  m="2812450">this</span> <span m="2812690">first--</span> <span
  m="2813890">so</span> <span m="2814130">AB</span> <span
  m="2815680">costs.</span></p><p><span m="2816680">Tell</span> <span
  m="2816890">me</span> <span m="2817100">again</span> <span
  m="2817490">now,</span> <span m="2817910">what's</span> <span
  m="2818240">the</span> <span m="2818390">rule</span> <span
  m="2818870">for</span> <span m="2819140">the</span> <span
  m="2819830">cost</span> <span m="2820400">of</span> <span m="2820900">a</span>
  <span m="2820970">matrix</span> <span m="2821450">multiplication?</span> <span
  m="2823130">mnp.</span> <span m="2824480">mnp.</span> <span
  m="2828380">And</span> <span m="2828530">then</span> <span
  m="2834270">I</span> <span m="2834580">multiply</span> <span
  m="2835240">m</span> <span m="2835510">by</span> <span m="2835750">p--</span>
  <span m="2836410">that's</span> <span m="2836740">AB--</span> <span
  m="2837760">times</span> <span m="2838150">p</span> <span
  m="2838390">by</span> <span m="2838660">q.</span> <span
  m="2838930">That's</span> <span m="2839200">C.</span></p><p><span
  m="2840580">So</span> <span m="2840910">I</span> <span m="2841060">have</span>
  <span m="2842170">mpq.</span> <span m="2847220">So</span> <span
  m="2847500">I</span> <span m="2847940">have</span> <span
  m="2848345">that</span> <span m="2848750">together</span> <span
  m="2849170">with</span> <span m="2849290">that,</span> <span
  m="2850340">or</span> <span m="2850850">that</span> <span
  m="2852320">together</span> <span m="2852710">with</span> <span
  m="2852860">that.</span> <span m="2855130">That</span> <span
  m="2855460">sum--</span> <span m="2856800">those</span> <span
  m="2857080">two</span> <span m="2857720">or</span> <span
  m="2858430">these</span> <span m="2858760">two.</span></p><p><span
  m="2861490">And</span> <span m="2861720">they're</span> <span
  m="2861860">different.</span> <span m="2863450">And</span> <span
  m="2863780">let's</span> <span m="2865490">just</span> <span
  m="2865730">recognize</span> <span m="2866390">the</span> <span
  m="2866480">most</span> <span m="2866840">important</span> <span
  m="2867290">example.</span> <span m="2868340">Suppose</span> <span
  m="2868910">C</span> <span m="2869540">is</span> <span m="2869810">a</span>
  <span m="2869900">column</span> <span m="2870290">vector--</span> <span
  m="2870770">C</span> <span m="2871100">for</span> <span
  m="2871310">column</span> <span m="2871670">vector.</span></p><p><span
  m="2872540">So</span> <span m="2872750">q</span> <span m="2873170">is</span>
  <span m="2873750">1.</span> <span m="2874280">There's</span> <span
  m="2874460">only</span> <span m="2874670">one</span> <span
  m="2874940">column.</span> <span m="2876050">So</span> <span
  m="2876230">if</span> <span m="2876350">q</span> <span m="2876650">is</span>
  <span m="2876830">1,</span> <span m="2877970">this</span> <span
  m="2878240">way</span> <span m="2878660">did</span> <span
  m="2879080">np--</span> <span m="2880170">let's</span> <span
  m="2880400">just</span> <span m="2880710">specialize</span> <span
  m="2881620">to</span> <span m="2881750">that.</span></p><p><span
  m="2886130">So</span> <span m="2886430">specialize</span> <span
  m="2887430">to</span> <span m="2892340">C</span> <span
  m="2892910">equal</span> <span m="2893430">a</span> <span
  m="2893510">column</span> <span m="2894020">vector,</span> <span
  m="2896340">which</span> <span m="2896510">means</span> <span
  m="2897080">that</span> <span m="2897410">q</span> <span m="2897770">is</span>
  <span m="2897950">1.</span> <span m="2899170">I</span> <span
  m="2899270">only</span> <span m="2899480">have</span> <span
  m="2899600">one</span> <span m="2899900">column.</span> <span
  m="2900980">So</span> <span m="2901190">then</span> <span m="2901550">A</span>
  <span m="2901940">times</span> <span m="2902860">BC</span> <span
  m="2904880">is</span> <span m="2905210">versus</span> <span
  m="2908360">AB</span> <span m="2909050">times</span> <span
  m="2909500">C.</span></p><p><span m="2910820">So</span> <span
  m="2911000">let's</span> <span m="2911270">just</span> <span
  m="2911480">figure</span> <span m="2911810">that</span> <span
  m="2912050">out</span> <span m="2912230">when</span> <span
  m="2912440">q</span> <span m="2912770">is</span> <span m="2912950">1.</span>
  <span m="2913580">So</span> <span m="2913790">npq</span> <span
  m="2915020">is</span> <span m="2915200">just</span> <span
  m="2915500">np.</span> <span m="2917840">And</span> <span
  m="2918320">mnq</span> <span m="2919520">is</span> <span
  m="2919670">just</span> <span m="2920000">mn,</span> <span
  m="2923390">where</span> <span m="2924140">AB</span> <span
  m="2925970">is</span> <span m="2926300">m</span> <span m="2926840">and</span>
  <span m="2927410">p.</span> <span m="2928595">Oh,</span> <span
  m="2929090">that's</span> <span m="2929450">a</span> <span
  m="2929510">bad</span> <span m="2929870">one.</span> <span
  m="2931190">Disaster</span> <span m="2931940">already.</span></p><p><span
  m="2935750">Those</span> <span m="2936020">are</span> <span
  m="2936110">potentially</span> <span m="2936800">two</span> <span
  m="2937040">big</span> <span m="2937280">matrices,</span> <span
  m="2938660">multiplying</span> <span m="2939350">a</span> <span
  m="2939590">column</span> <span m="2939980">vector.</span> <span
  m="2941160">So</span> <span m="2941270">here</span> <span
  m="2941510">I've</span> <span m="2941690">done</span> <span
  m="2941960">a</span> <span m="2942020">matrix</span> <span
  m="2942590">multiplication.</span> <span m="2943340">I</span> <span
  m="2943430">never</span> <span m="2943760">should</span> <span
  m="2944000">have</span> <span m="2944120">done</span> <span
  m="2944360">that.</span></p><p><span m="2944990">This</span> <span
  m="2945260">is</span> <span m="2945440">a</span> <span
  m="2945860">matrix</span> <span m="2946370">vector.</span> <span
  m="2947750">It</span> <span m="2947870">gives</span> <span
  m="2948110">me</span> <span m="2948290">a</span> <span
  m="2948350">vector.</span> <span m="2949250">And</span> <span
  m="2949370">then</span> <span m="2949550">this</span> <span
  m="2949760">is</span> <span m="2949940">a</span> <span
  m="2950000">matrix</span> <span m="2950540">vector.</span></p><p><span
  m="2951530">So</span> <span m="2952130">I</span> <span m="2952220">get</span>
  <span m="2952460">nice</span> <span m="2952940">numbers</span> <span
  m="2953420">here.</span> <span m="2954320">But</span> <span
  m="2954590">I</span> <span m="2954710">get</span> <span m="2955010">a</span>
  <span m="2955130">terrible</span> <span m="2955670">number</span> <span
  m="2956090">for</span> <span m="2956330">AB.</span> <span
  m="2957380">And</span> <span m="2957560">then</span> <span
  m="2958410">I</span> <span m="2958640">multiply</span> <span
  m="2959150">that</span> <span m="2959390">by</span> <span
  m="2959660">C.</span> <span m="2960800">So</span> <span
  m="2961010">that's</span> <span m="2961340">mpq.</span> <span
  m="2965730">mpq.</span></p><p><span m="2969390">So</span> <span
  m="2969600">mp</span> <span m="2970230">is</span> <span
  m="2970440">factoring</span> <span m="2971010">out.</span> <span
  m="2971760">So</span> <span m="2972750">if</span> <span m="2973710">I</span>
  <span m="2973860">write</span> <span m="2974160">it</span> <span
  m="2974490">as</span> <span m="2975570">n</span> <span
  m="2976740">times</span> <span m="2977430">m</span> <span
  m="2977640">plus</span> <span m="2977970">p</span> <span
  m="2979620">versus</span> <span m="2981770">this</span> <span
  m="2982040">one</span> <span m="2982340">is</span> <span m="2984200">m</span>
  <span m="2984560">that's</span> <span m="2984830">factoring</span> <span
  m="2985400">out</span> <span m="2986690">times</span> <span
  m="2989110">m--</span> <span m="2990190">no.</span> <span
  m="2991570">Yeah.</span> <span m="2993240">What's</span> <span m="2993700">up
  here?</span> <span m="2996920">Yeah.</span> <span m="2997650">Sorry.</span>
  <span m="2998760">What</span> <span m="2998940">am</span> <span
  m="2999060">I</span> <span m="2999210">doing?</span></p><p><span
  m="3005190">Yeah.</span> <span m="3006320">Is</span> <span
  m="3006610">it</span> <span m="3006720">p</span> <span m="3007080">that</span>
  <span m="3007260">factors</span> <span m="3007710">out</span> <span
  m="3007860">from</span> <span m="3008040">this</span> <span
  m="3008250">one?</span> <span m="3009540">OK.</span> <span
  m="3011520">p</span> <span m="3012030">times</span> <span m="3013600">m</span>
  <span m="3013880">plus</span> <span m="3014165">n,</span> <span m="3014450">I
  guess.</span> <span m="3015990">Sorry.</span> <span m="3019140">Anyway,</span>
  <span m="3022540">the</span> <span m="3023490">difference</span> <span
  m="3024010">is--</span></p><p><span m="3024938">AUDIENCE:</span> <span
  m="3025147">I</span> <span m="3025356">think it's</span> <span
  m="3025774">mp</span> <span m="3026930">times</span> <span m="3027720">p
  plus</span> <span m="3028160">q.</span> <span
  m="3029240">[INAUDIBLE]</span></p><p><span m="3030480">GILBERT STRANG:</span>
  <span m="3030600">Shall</span> <span m="3030720">I</span> <span
  m="3030810">go</span> <span m="3030930">over</span> <span
  m="3031260">it</span> <span m="3031380">again</span> <span
  m="3031850">or</span> <span m="3032460">write--?</span> <span
  m="3034080">Let</span> <span m="3034260">me</span> <span m="3034410">do</span>
  <span m="3034790">just</span> <span m="3035140">this</span> <span
  m="3035370">thinking</span> <span m="3035820">again.</span> <span
  m="3036120">If</span> <span m="3036270">q</span> <span m="3036600">is</span>
  <span m="3036750">1,</span> <span m="3037500">if</span> <span
  m="3037650">I</span> <span m="3037740">go</span> <span m="3037980">this</span>
  <span m="3038310">way,</span> <span m="3039560">was that</span> <span
  m="3039810">my</span> <span m="3040020">final</span> <span
  m="3040440">total</span> <span m="3040890">when</span> <span
  m="3041100">q</span> <span m="3041460">was</span> <span m="3041670">1?</span>
  <span m="3042960">And</span> <span m="3043080">that's</span> <span
  m="3043494">this?</span></p><p><span m="3045420">No.</span> <span
  m="3046440">m</span> <span m="3046770">factors</span> <span
  m="3047310">out</span> <span m="3047520">times</span> <span
  m="3047880">n</span> <span m="3048030">plus</span> <span m="3048360">p.</span>
  <span m="3049740">Let's</span> <span m="3049920">just</span> <span
  m="3050340">get</span> <span m="3050580">that</span> <span
  m="3050820">right.</span> <span m="3052800">Oh,</span> <span
  m="3052960">no,</span> <span m="3053550">n</span> <span
  m="3053910">factors</span> <span m="3054420">out.</span> <span
  m="3054690">Sorry,</span> <span m="3055050">n</span> <span
  m="3055500">factors</span> <span m="3055755">out</span> <span
  m="3056190">times</span> <span m="3056520">m</span> <span
  m="3056670">plus</span> <span m="3056940">p.</span> <span
  m="3058070">And</span> <span m="3058290">this</span> <span
  m="3058590">way</span> <span m="3059130">was</span> <span
  m="3062040">all</span> <span m="3062280">these</span> <span
  m="3062640">things.</span></p><p><span m="3063635">AUDIENCE:</span> <span
  m="3063877">Both</span> <span m="3064120">the m</span> <span m="3064605">and
  the</span> <span m="3065090">p</span> <span m="3065575">factor</span> <span
  m="3066060">out.</span></p><p><span m="3067520">GILBERT STRANG:</span> <span
  m="3067705">Both</span> <span m="3067890">the</span> <span
  m="3068120">m</span> <span m="3068570">and</span> <span m="3068780">the</span>
  <span m="3068930">p</span> <span m="3069440">factor</span> <span
  m="3070040">out.</span> <span m="3070340">OK.</span> <span
  m="3071990">Thanks.</span> <span m="3076700">Times</span> <span
  m="3078930">n</span> <span m="3079710">plus</span> <span m="3081180">q.</span>
  <span m="3082100">n</span> <span m="3082290">plus</span> <span
  m="3082740">q</span> <span m="3083070">was</span> <span m="3083250">1.</span>
  <span m="3084380">OK.</span></p><p><span m="3089220">The</span> <span
  m="3089370">whole</span> <span m="3089580">point</span> <span
  m="3090000">is,</span> <span m="3090240">we've</span> <span
  m="3090390">got</span> <span m="3090600">this</span> <span
  m="3090810">horrible</span> <span m="3091740">multiplication</span> <span
  m="3092520">of</span> <span m="3092640">three</span> <span
  m="3093810">big</span> <span m="3094050">numbers.</span> <span
  m="3096300">And</span> <span m="3096420">this</span> <span
  m="3096660">only</span> <span m="3096930">had</span> <span
  m="3097710">two</span> <span m="3098070">big</span> <span
  m="3098340">numbers.</span> <span m="3098840">So</span> <span
  m="3098970">this</span> <span m="3099980">is</span> <span
  m="3100170">orders</span> <span m="3100590">of</span> <span
  m="3100710">magnitude</span> <span m="3101670">faster</span> <span
  m="3102150">than</span> <span m="3102360">that.</span></p><p><span
  m="3102990">And</span> <span m="3103140">of</span> <span
  m="3103230">course,</span> <span m="3103650">you</span> <span
  m="3103770">would</span> <span m="3103930">have</span> <span
  m="3104070">done</span> <span m="3104310">the</span> <span
  m="3104400">calculation.</span> <span m="3105480">That</span> <span
  m="3105720">way,</span> <span m="3106080">you</span> <span
  m="3106230">would</span> <span m="3106470">have</span> <span
  m="3107370">multiplied</span> <span m="3107850">the</span> <span
  m="3107970">column</span> <span m="3108330">vector</span> <span
  m="3108720">by</span> <span m="3108930">a</span> <span
  m="3108960">matrix</span> <span m="3110210">to</span> <span
  m="3110340">get</span> <span m="3110520">another</span> <span
  m="3110910">column</span> <span m="3111270">vector.</span> <span
  m="3112140">And</span> <span m="3112290">you would have</span> <span
  m="3112560">multiplied</span> <span m="3113010">that</span> <span
  m="3113250">by</span> <span m="3113460">a</span> <span
  m="3113520">matrix</span> <span m="3114090">to</span> <span
  m="3114210">get</span> <span m="3114390">another</span> <span
  m="3114750">column</span> <span m="3115140">vector,</span> <span
  m="3116220">where</span> <span m="3116460">here,</span> <span
  m="3117390">you</span> <span m="3117540">crazily</span> <span
  m="3118290">multiplied</span> <span m="3118950">two</span> <span
  m="3119190">big</span> <span m="3119430">matrices</span> <span
  m="3120150">together</span> <span m="3121260">and</span> <span
  m="3121410">then</span> <span m="3121830">got</span> <span
  m="3122100">a</span> <span m="3122160">column</span> <span
  m="3122520">vector.</span></p><p><span m="3122940">So</span> <span
  m="3124670">there</span> <span m="3124980">is</span> <span
  m="3125340">a</span> <span m="3126030">bad</span> <span
  m="3126360">move.</span> <span m="3127020">OK,</span> <span
  m="3127410">thanks.</span> <span m="3128440">Oh,</span> <span
  m="3128775">I'm</span> <span m="3129110">past</span> <span
  m="3129450">the</span> <span m="3129600">time</span> <span
  m="3129990">on</span> <span m="3130140">this</span> <span
  m="3130410">ABC.</span> <span m="3131670">It's</span> <span
  m="3131970">just</span> <span m="3132250">to</span> <span
  m="3132390">show</span> <span m="3132780">that</span> <span
  m="3133480">on</span> <span m="3133710">a</span> <span m="3133770">very</span>
  <span m="3134130">familiar</span> <span m="3134850">calculation,</span> <span
  m="3136230">you</span> <span m="3136380">have</span> <span
  m="3136620">to</span> <span m="3136770">do</span> <span m="3136980">it</span>
  <span m="3137100">in</span> <span m="3137220">the</span> <span
  m="3137280">right</span> <span m="3137610">order.</span> <span
  m="3138510">And</span> <span m="3139320">back</span> <span
  m="3139650">propagation</span> <span m="3140490">is</span> <span
  m="3141060">the</span> <span m="3141150">right</span> <span
  m="3141480">order</span> <span m="3141840">for</span> <span
  m="3142590">partial</span> <span m="3143010">derivatives.</span></p><p><span
  m="3144180">OK.</span> <span m="3144630">Thank</span> <span
  m="3145020">you.</span> <span m="3145260">And</span> <span
  m="3145650">so</span> <span m="3145950">bring</span> <span
  m="3146250">laptops</span> <span m="3148170">Friday.</span> <span
  m="3149370">And</span> <span m="3150370">look</span> <span
  m="3150630">forward</span> <span m="3151020">to</span> <span
  m="3154260">Professor</span> <span m="3154850">Rao.</span> <span
  m="3155490">Give</span> <span m="3155730">him</span> <span
  m="3155910">a</span> <span m="3156030">good</span> <span
  m="3156330">welcome.</span></p>
uid: a11969b72781922397269718da7c7cb1
type: courses
layout: video
---
