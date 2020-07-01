---
about_this_resource_text: >-
  <h2 class="subhead"><strong>Description</strong></h2> <p>Professor Suvrit Sra
  gives this guest lecture on stochastic gradient descent (SGD), which randomly
  selects a minibatch of data at each step. The SGD is still the primary method
  for training large-scale machine learning systems.</p> <h2
  class="subhead"><strong>Summary</strong></h2><p>Full gradient descent uses all
  data in each step.<br /> Stochastic method uses a minibatch of data (often 1
  sample!).<br /> Each step is much faster and the descent starts well.<br />
  Later the points bounce around / time to stop!<br /> This method is the
  favorite for weights in deep learning.</p> <p>Related section in textbook:
  VI.5</p> <p><strong>Instructor:</strong> Prof. Suvrit Sra</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: k3AiUhwHQ28
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    title: Video-YouTube-Stream
    type: Video
    uid: 0ea931100abed6bc8158e8a3631cdaf5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/k3AiUhwHQ28/default.jpg'
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9600ab2d6f18410a23a46c277cb60e34
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: k3AiUhwHQ28
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a8503c5ddcebf0859e240258af86af90
  - id: k3AiUhwHQ28.srt
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-25-stochastic-gradient-descent/k3AiUhwHQ28.srt
    title: 3play caption file
    type: null
    uid: bca9549562cd13b0b19e8603c9dcbbcd
  - id: k3AiUhwHQ28.pdf
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-25-stochastic-gradient-descent/k3AiUhwHQ28.pdf
    title: 3play pdf file
    type: null
    uid: 7bf2bdc7cbce8d9cb6bad91a140f0227
  - id: Caption-3Play YouTube id-SRT
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ec0dc228d62f513521220ec9263cf09d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ad3b318224d834c9bb39e0522778126d
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture25_300k.mp4'
    parent_uid: cc1df015cfc3b3dd42f1d611e51bd754
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5139574f5e489f324ebf1f430813193d
inline_embed_id: 40324935lecture25stochasticgradientdescent12038985
order_index: 251
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-25-stochastic-gradient-descent
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-25-stochastic-gradient-descent
title: 'Lecture 25: Stochastic Gradient Descent'
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
  m="11900">donation</span> <span m="12650">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17180">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="22120">PROFESSOR STRANG:</span> <span m="22285">[INAUDIBLE]</span> <span
  m="22450">Professor</span> <span m="23770">Suvrit</span> <span
  m="24020">Sra</span> <span m="24610">from</span> <span m="25460">EECS</span>
  <span m="26940">who</span> <span m="27940">taught</span> <span
  m="28270">6.036</span> <span m="30040">and</span> <span m="30340">the</span>
  <span m="30480">graduate</span> <span m="30940">version.</span> <span
  m="31480">And</span> <span m="31600">maybe</span> <span m="32350">some</span>
  <span m="32619">of</span> <span m="32770">you</span> <span
  m="33880">had</span> <span m="34200">him</span> <span m="34660">in</span>
  <span m="35430">one</span> <span m="35690">or</span> <span
  m="36010">other</span> <span m="36310">of</span> <span m="36400">those</span>
  <span m="36760">classes.</span> <span m="37750">So</span> <span
  m="38035">he</span> <span m="39280">graciously</span> <span
  m="40120">agreed</span> <span m="40600">to</span> <span m="40750">come</span>
  <span m="41020">today</span> <span m="41560">and</span> <span
  m="43520">to</span> <span m="43690">talk</span> <span m="43990">about</span>
  <span m="44470">Stochastic</span> <span m="44980">Gradient</span> <span
  m="45235">Descent,</span> <span m="45490">SGD.</span> <span
  m="48910">And</span> <span m="49460">it's</span> <span
  m="50620">terrific.</span> <span m="51340">Yeah,</span> <span
  m="51760">yeah.</span></p><p><span m="52570">So</span> <span
  m="54280">we're</span> <span m="54490">not</span> <span m="54700">quite</span>
  <span m="55050">at</span> <span m="55360">1:05,</span> <span
  m="56110">but</span> <span m="56510">close.</span> <span m="60765">If</span>
  <span m="61150">everything</span> <span m="61570">is</span> <span
  m="61750">ready,</span> <span m="62180">then</span> <span
  m="62860">we're</span> <span m="63070">off.</span> <span m="63910">OK.</span>
  <span m="64250">Good.</span></p><p><span m="66440">PROFESSOR SRA:</span> <span
  m="66577">And</span> <span m="66990">your</span> <span m="68440">cutoff</span>
  <span m="68860">is</span> <span m="69190">like</span> <span
  m="69960">1:55?</span></p><p><span m="70390">PROFESSOR STRANG:</span> <span
  m="70590">Yeah.</span></p><p><span m="70790">PROFESSOR SRA:</span> <span
  m="70915">OK.</span></p><p><span m="71520">PROFESSOR STRANG:</span> <span
  m="71580">But</span> <span m="72380">this</span> <span m="72750">is</span>
  <span m="72820">not</span> <span m="73060">a</span> <span
  m="73150">sharp</span> <span m="73530">cutoff.</span></p><p><span
  m="75486">PROFESSOR SRA:</span> <span m="75730">Why</span> <span
  m="75975">is</span> <span m="76464">there</span> <span
  m="76953">[INAUDIBLE]</span> <span m="77442">fluctuation?</span></p><p><span
  m="78909">PROFESSOR STRANG:</span> <span m="79154">There</span> <span
  m="79400">you</span> <span m="79870">go.</span></p><p><span
  m="82040">PROFESSOR SRA:</span> <span m="82265">Somebody</span> <span
  m="82490">changed</span> <span m="82880">their</span> <span
  m="83180">resolution</span> <span m="83850">it</span> <span
  m="83920">seems,</span> <span m="84320">but</span> <span
  m="85730">that's</span> <span m="85940">fine.</span> <span m="87100">It
  doesn't</span> <span m="88340">bother</span> <span m="88700">us.</span> <span
  m="89580">So</span> <span m="90620">I'm</span> <span m="91010">going</span>
  <span m="91090">to</span> <span m="91190">tell</span> <span
  m="91460">you</span> <span m="91520">about,</span> <span
  m="92980">let's</span> <span m="93200">say,</span> <span m="93440">one</span>
  <span m="93620">of</span> <span m="93920">the</span> <span
  m="94130">most</span> <span m="94670">ancient</span> <span
  m="95360">optimization</span> <span m="96110">methods,</span> <span
  m="96590">much</span> <span m="96890">simpler</span> <span
  m="97460">than,</span> <span m="97700">in</span> <span m="97820">fact,</span>
  <span m="98240">the</span> <span m="98960">more</span> <span
  m="99410">advanced</span> <span m="100070">methods</span> <span
  m="100610">you</span> <span m="100670">have</span> <span
  m="100820">already</span> <span m="101180">seen</span> <span
  m="101450">in</span> <span m="101570">class.</span> <span
  m="103970">And</span> <span m="104180">interestingly,</span> <span
  m="104810">this</span> <span m="104990">more</span> <span
  m="105290">ancient</span> <span m="105830">method</span> <span
  m="107510">remains</span> <span m="109190">&quot;the&quot;</span> <span
  m="109790">method</span> <span m="110360">for</span> <span
  m="110600">training</span> <span m="111050">large</span> <span
  m="111320">scale</span> <span m="111620">machine</span> <span
  m="111980">learning</span> <span m="112970">systems.</span></p><p><span
  m="115430">So</span> <span m="115580">there's</span> <span m="115760">a</span>
  <span m="115820">little</span> <span m="115970">bit</span> <span
  m="116090">of</span> <span m="116210">history</span> <span
  m="116600">around</span> <span m="116870">that.</span> <span
  m="117110">I'm</span> <span m="117290">not</span> <span
  m="117720">going</span> <span m="117880">to</span> <span m="118070">go</span>
  <span m="118340">too</span> <span m="118520">much</span> <span
  m="118730">into</span> <span m="119540">the</span> <span
  m="119630">history.</span> <span m="120470">But</span> <span
  m="122330">the</span> <span m="122450">bottom</span> <span
  m="122840">line,</span> <span m="123080">which</span> <span
  m="123290">probably</span> <span m="124500">Gil has</span> <span
  m="126170">also</span> <span m="126470">mentioned</span> <span
  m="126860">to</span> <span m="127010">you</span> <span m="127130">in</span>
  <span m="127250">class,</span> <span m="128360">that</span> <span
  m="128570">at</span> <span m="128660">least</span> <span
  m="128870">four</span> <span m="129590">large</span> <span
  m="129979">data</span> <span m="130280">science</span> <span
  m="130610">problems,</span> <span m="131690">in</span> <span
  m="131840">the</span> <span m="131990">end,</span> <span
  m="133190">stuff</span> <span m="133580">reduces</span> <span
  m="134060">to</span> <span m="134150">solving</span> <span
  m="134510">an</span> <span m="134600">optimization</span> <span
  m="135260">problem.</span> <span m="137180">And</span> <span
  m="137450">in</span> <span m="137570">current</span> <span
  m="137870">times</span> <span m="138290">these</span> <span
  m="138470">optimization</span> <span m="139130">problems</span> <span
  m="139550">are</span> <span m="139610">pretty</span> <span
  m="139910">large.</span> <span m="141990">So</span> <span
  m="142230">people</span> <span m="143640">actually</span> <span
  m="144420">started</span> <span m="145170">liking</span> <span
  m="145680">stuff</span> <span m="145980">like</span> <span
  m="146160">gradient</span> <span m="146670">descent,</span> <span
  m="147930">which</span> <span m="148110">was</span> <span
  m="148230">invented</span> <span m="148650">by</span> <span
  m="148820">Cauchy</span> <span m="149130">back</span> <span
  m="149340">in</span> <span m="149430">the</span> <span
  m="149520">day.</span></p><p><span m="150660">And</span> <span
  m="151860">this</span> <span m="152070">is</span> <span m="152310">how</span>
  <span m="152520">I'm</span> <span m="152670">writing</span> <span
  m="152970">the</span> <span m="153060">abstract</span> <span
  m="153540">problem.</span> <span m="155550">And</span> <span
  m="155600">what</span> <span m="155810">I</span> <span m="156580">want</span>
  <span m="156770">to</span> <span m="156830">see</span> <span
  m="157120">is--</span> <span m="157280">OK,</span> <span m="157520">is</span>
  <span m="157650">it</span> <span m="157790">fitting</span> <span
  m="158120">on</span> <span m="158240">the</span> <span m="158300">page?</span>
  <span m="158960">This</span> <span m="159140">is</span> <span
  m="159260">my</span> <span m="159500">implementation</span> <span
  m="160280">in</span> <span m="160400">MATLAB</span> <span m="160850">of</span>
  <span m="160940">gradient</span> <span m="161360">descent,</span> <span
  m="162950">just</span> <span m="163790">to</span> <span m="163880">set</span>
  <span m="164120">the</span> <span m="164240">stage</span> <span
  m="164660">that</span> <span m="165170">this</span> <span
  m="165320">stuff</span> <span m="165590">really</span> <span
  m="165800">looks</span> <span m="166010">simple.</span> <span
  m="166360">You've</span> <span m="166520">already</span> <span
  m="166850">seen</span> <span m="167090">gradient</span> <span
  m="167480">descent.</span> <span m="168320">And</span> <span
  m="168500">today,</span> <span m="169940">essentially,</span> <span
  m="171720">in</span> <span m="171740">a</span> <span
  m="171800">nutshell,</span> <span m="173780">what</span> <span
  m="174200">really</span> <span m="174590">changes</span> <span
  m="175160">in</span> <span m="175340">this</span> <span
  m="175970">implementation</span> <span m="176720">of</span> <span
  m="176810">gradient</span> <span m="177230">descent</span> <span
  m="178400">is</span> <span m="178700">this</span> <span
  m="178970">part.</span> <span m="179858">That's</span> <span
  m="180296">it.</span></p><p><span m="182048">So</span> <span
  m="182490">you've</span> <span m="182620">seen</span> <span
  m="182920">gradient</span> <span m="183340">descent.</span> <span
  m="184360">I'm</span> <span m="184480">only</span> <span
  m="184750">going</span> <span m="184960">to</span> <span
  m="185050">change</span> <span m="185380">this</span> <span
  m="185620">one</span> <span m="185860">line.</span> <span
  m="186760">And</span> <span m="186910">the</span> <span
  m="187030">change</span> <span m="187360">of</span> <span
  m="187480">that</span> <span m="187690">one</span> <span
  m="187930">line,</span> <span m="189070">surprisingly,</span> <span
  m="190330">is</span> <span m="190630">driving</span> <span
  m="191380">all</span> <span m="191710">the</span> <span m="192430">deep</span>
  <span m="192700">learning</span> <span m="193090">tool</span> <span
  m="193260">boxes</span> <span m="193870">and</span> <span
  m="194020">all</span> <span m="194230">of</span> <span m="194620">large</span>
  <span m="194860">scale</span> <span m="195130">machine</span> <span
  m="195460">learning,</span> <span m="195920">et</span> <span
  m="196020">cetera.</span> <span m="196700">This</span> <span
  m="196750">is</span> <span m="196870">an</span> <span
  m="196960">oversimplification,</span> <span m="198110">but</span> <span
  m="198160">morally,</span> <span m="198640">that's</span> <span
  m="198890">it.</span> <span m="200550">So</span> <span m="200700">let's</span>
  <span m="200940">look</span> <span m="201300">at</span> <span
  m="201480">what's</span> <span m="201750">happening.</span></p><p><span
  m="203740">So</span> <span m="205560">I</span> <span m="205650">will</span>
  <span m="205800">become</span> <span m="206880">very</span> <span
  m="207180">concrete</span> <span m="207630">pretty</span> <span
  m="207840">soon.</span> <span m="208860">But</span> <span
  m="209190">abstractly,</span> <span m="209910">what</span> <span
  m="210090">I</span> <span m="210180">want</span> <span m="210510">you</span>
  <span m="210600">to</span> <span m="211200">look</span> <span
  m="211470">at</span> <span m="212400">is</span> <span m="212580">the</span>
  <span m="212700">kinds</span> <span m="213420">of</span> <span
  m="214020">optimization</span> <span m="214770">problems</span> <span
  m="215330">we</span> <span m="215530">are</span> <span
  m="216240">solving</span> <span m="216780">in</span> <span
  m="216870">machine</span> <span m="217230">learning.</span> <span
  m="218730">And</span> <span m="218910">I'll</span> <span
  m="219030">give</span> <span m="219210">you</span> <span
  m="219300">very</span> <span m="219540">concrete</span> <span
  m="219990">examples</span> <span m="220530">of</span> <span
  m="221700">these</span> <span m="222000">optimization</span> <span
  m="222690">problems</span> <span m="223170">so</span> <span
  m="223350">that</span> <span m="224100">you</span> <span m="224190">can</span>
  <span m="224370">relate</span> <span m="224700">to</span> <span
  m="224850">them</span> <span m="225000">better.</span> <span
  m="226930">But</span> <span m="227110">I'm</span> <span m="227320">just</span>
  <span m="227560">writing</span> <span m="227980">this</span> <span
  m="228220">as</span> <span m="228430">the</span> <span m="228520">key</span>
  <span m="228730">topic,</span> <span m="229540">that</span> <span
  m="229930">all</span> <span m="230200">the</span> <span
  m="230320">optimization</span> <span m="231100">problems</span> <span
  m="232330">that</span> <span m="232540">I'm</span> <span
  m="232720">going</span> <span m="232900">to</span> <span
  m="233020">talk</span> <span m="233260">about</span> <span
  m="233470">today,</span> <span m="234490">they</span> <span
  m="234640">look</span> <span m="234880">like</span> <span
  m="235060">that.</span> <span m="235920">You're</span> <span
  m="236020">trying</span> <span m="236290">to</span> <span
  m="236410">find</span> <span m="236830">an</span> <span m="236980">x</span>
  <span m="239180">over</span> <span m="239480">a</span> <span
  m="239520">cost</span> <span m="239880">function,</span> <span
  m="240810">where</span> <span m="240990">the</span> <span
  m="241110">cost</span> <span m="241410">function</span> <span
  m="241800">can</span> <span m="241980">be</span> <span
  m="242100">written</span> <span m="242460">as</span> <span m="242610">a</span>
  <span m="242670">sum.</span></p><p><span m="244360">In</span> <span
  m="244570">modern</span> <span m="244960">day</span> <span
  m="245110">machine</span> <span m="245470">learning</span> <span
  m="245860">parlance</span> <span m="246430">these</span> <span
  m="246570">are</span> <span m="246670">also</span> <span
  m="247000">called</span> <span m="247210">finite</span> <span
  m="247810">sum</span> <span m="248050">problems,</span> <span
  m="248620">in</span> <span m="248740">case</span> <span m="249100">you</span>
  <span m="249490">run</span> <span m="249790">into</span> <span
  m="250090">that</span> <span m="250240">term.</span> <span
  m="251440">And</span> <span m="251590">they</span> <span
  m="251720">just</span> <span m="251890">call it</span> <span
  m="252060">finite</span> <span m="252520">because</span> <span
  m="252850">n</span> <span m="253060">is</span> <span m="253180">finite</span>
  <span m="253600">here.</span> <span m="255620">In</span> <span
  m="255890">pure</span> <span m="256220">optimization</span> <span
  m="256940">theory</span> <span m="257160">parlance,</span> <span
  m="258320">n</span> <span m="258529">can</span> <span
  m="258740">actually</span> <span m="259070">go</span> <span
  m="259220">to</span> <span m="259370">infinity.</span> <span
  m="260570">And</span> <span m="260720">then</span> <span
  m="260899">they're</span> <span m="261050">called</span> <span
  m="261290">stochastic</span> <span m="261950">optimization</span> <span
  m="262670">problems--</span> <span m="263720">just</span> <span
  m="264080">for</span> <span m="264260">terminology,</span> <span
  m="265030">if</span> <span m="265820">while</span> <span
  m="266090">searching</span> <span m="266540">the</span> <span
  m="266630">internet</span> <span m="267080">you</span> <span
  m="267170">run</span> <span m="267500">into</span> <span
  m="267800">some</span> <span m="268130">such</span> <span
  m="268400">terminology</span> <span m="269210">so</span> <span
  m="269690">you</span> <span m="269810">kind</span> <span m="269990">of</span>
  <span m="270080">know</span> <span m="270260">what</span> <span
  m="270470">it</span> <span m="270590">means.</span></p><p><span
  m="272040">So</span> <span m="274490">here</span> <span m="274730">is</span>
  <span m="275030">our</span> <span m="275180">setup</span> <span
  m="275870">in</span> <span m="276020">machine</span> <span
  m="276350">learning.</span> <span m="277340">We</span> <span
  m="277520">have</span> <span m="278510">a</span> <span m="278680">bunch</span>
  <span m="278990">of</span> <span m="279110">training</span> <span
  m="279500">data.</span> <span m="282940">On</span> <span
  m="283050">this</span> <span m="283230">slide,</span> <span
  m="285660">I'm</span> <span m="285750">calling</span> <span
  m="286170">x1</span> <span m="286650">through</span> <span
  m="286860">xn.</span> <span m="287520">These</span> <span
  m="287790">are</span> <span m="287970">the</span> <span
  m="288090">training</span> <span m="288480">data,</span> <span
  m="288880">the</span> <span m="288900">raw</span> <span
  m="289110">features.</span> <span m="290430">Later,</span> <span
  m="290910">actually,</span> <span m="291300">I'll</span> <span
  m="291420">stop</span> <span m="291780">writing</span> <span
  m="292200">x</span> <span m="292470">for</span> <span m="292620">them</span>
  <span m="292800">and</span> <span m="292920">write</span> <span
  m="293160">them</span> <span m="293310">with</span> <span
  m="293430">the</span> <span m="293520">letter</span> <span
  m="293910">a.</span> <span m="294330">But</span> <span
  m="295110">hopefully,</span> <span m="295470">that's</span> <span
  m="295650">OK.</span></p><p><span m="297160">So</span> <span
  m="297520">x1</span> <span m="298060">through</span> <span
  m="298300">xn,</span> <span m="299200">these</span> <span
  m="299440">could</span> <span m="299620">be</span> <span
  m="299800">just</span> <span m="300700">raw</span> <span
  m="301540">images,</span> <span m="302050">for</span> <span
  m="302260">instance,</span> <span m="302770">in</span> <span
  m="302980">ImageNet</span> <span m="303610">or</span> <span
  m="303760">some</span> <span m="303940">other</span> <span
  m="304150">image</span> <span m="304450">data</span> <span
  m="304660">set.</span> <span m="305200">They</span> <span
  m="305320">could</span> <span m="305500">be</span> <span
  m="305590">text</span> <span m="306010">documents.</span> <span
  m="306550">They</span> <span m="306650">could</span> <span
  m="306820">be</span> <span m="306940">anything.</span> <span
  m="308380">y1</span> <span m="308860">through</span> <span
  m="309020">yn,</span> <span m="309875">in</span> <span
  m="310130">classical</span> <span m="310640">machine</span> <span
  m="310970">learning,</span> <span m="311960">think</span> <span
  m="312200">of</span> <span m="312320">them</span> <span m="312530">as</span>
  <span m="312860">plus</span> <span m="313160">minus 1</span> <span
  m="313520">labels--</span> <span m="314620">cat,</span> <span
  m="315050">not</span> <span m="315410">cat--</span> <span m="316190">or</span>
  <span m="316490">in</span> <span m="316640">a</span> <span
  m="316700">regression</span> <span m="317270">setup</span> <span
  m="318780">as</span> <span m="318920">some</span> <span m="319130">real</span>
  <span m="319400">number.</span></p><p><span m="320670">So</span> <span
  m="320690">that's</span> <span m="320960">our</span> <span
  m="321020">training</span> <span m="321380">data.</span> <span
  m="321650">We</span> <span m="321800">have</span> <span m="322700">d</span>
  <span m="322940">dimensional</span> <span m="323570">raw</span> <span
  m="323810">vectors,</span> <span m="325190">n</span> <span
  m="325370">of</span> <span m="325490">those.</span> <span
  m="326580">And</span> <span m="326690">we</span> <span m="326840">have</span>
  <span m="326930">corresponding</span> <span m="327560">labels</span> <span
  m="327980">which</span> <span m="328220">can</span> <span m="328490">be</span>
  <span m="329450">either</span> <span m="329690">plus</span> <span
  m="329990">or</span> <span m="330020">minus</span> <span m="330380">1</span>
  <span m="330725">in</span> <span m="331070">a</span> <span
  m="331100">classification</span> <span m="331850">setting</span> <span
  m="332360">or</span> <span m="332570">a</span> <span m="332630">real</span>
  <span m="332900">number</span> <span m="333260">in</span> <span
  m="333380">a</span> <span m="333440">regression</span> <span
  m="333950">setting.</span> <span m="334970">It's</span> <span
  m="335090">kind</span> <span m="335240">of</span> <span
  m="335360">immaterial</span> <span m="335960">for</span> <span
  m="336410">my</span> <span m="336560">lecture</span> <span
  m="336950">right</span> <span m="337130">now.</span> <span
  m="337970">So</span> <span m="338090">that's</span> <span
  m="338390">the</span> <span m="338540">input.</span></p><p><span
  m="339620">And</span> <span m="340970">whenever</span> <span
  m="341720">anybody</span> <span m="342200">says</span> <span
  m="343040">large</span> <span m="343370">scale</span> <span
  m="343730">machine</span> <span m="344120">learning,</span> <span
  m="344960">what</span> <span m="345230">do</span> <span m="345350">we</span>
  <span m="345470">really</span> <span m="345770">mean?</span> <span
  m="347090">What</span> <span m="347270">we</span> <span m="347360">mean</span>
  <span m="347660">is</span> <span m="348590">that</span> <span
  m="348830">both</span> <span m="349400">n</span> <span m="350120">and</span>
  <span m="350270">d</span> <span m="350840">can</span> <span
  m="351020">be</span> <span m="351140">large.</span> <span m="352410">So</span>
  <span m="352460">what</span> <span m="352580">does</span> <span
  m="352730">that</span> <span m="352880">mean</span> <span m="353090">in</span>
  <span m="353180">words?</span> <span m="354290">That</span> <span
  m="354680">n</span> <span m="354980">is</span> <span m="355160">the</span>
  <span m="355250">number</span> <span m="355670">of</span> <span
  m="355880">training</span> <span m="356330">data</span> <span
  m="356550">points.</span> <span m="358260">So</span> <span m="358770">n</span>
  <span m="358980">could</span> <span m="359190">be,</span> <span
  m="359340">these</span> <span m="359580">days,</span> <span
  m="360000">what?</span> <span m="360300">A million,</span> <span
  m="360800">10</span> <span m="361050">million,</span> <span
  m="361440">100</span> <span m="361740">million,</span> <span
  m="362190">depends</span> <span m="362550">on</span> <span
  m="362670">how</span> <span m="362820">big</span> <span
  m="363000">computers</span> <span m="363600">and</span> <span
  m="363720">data</span> <span m="363910">sets</span> <span
  m="364200">you've</span> <span m="364260">got.</span> <span
  m="364755">So</span> <span m="365010">n</span> <span m="365280">can</span>
  <span m="365460">be</span> <span m="365580">huge.</span></p><p><span
  m="366610">d,</span> <span m="367470">the</span> <span
  m="367590">dimensionality,</span> <span m="368400">the</span> <span
  m="368520">vectors</span> <span m="369150">that</span> <span
  m="369330">we</span> <span m="369480">are</span> <span m="369540">working
  with--</span> <span m="370110">the</span> <span m="370230">raw</span> <span
  m="370560">vectors--</span> <span m="371820">that</span> <span
  m="372000">can</span> <span m="372180">also</span> <span m="372450">be</span>
  <span m="372570">pretty</span> <span m="372840">large.</span> <span
  m="373650">Think</span> <span m="373920">of</span> <span m="374100">x</span>
  <span m="375210">is</span> <span m="375360">an</span> <span
  m="375510">image.</span> <span m="376350">If</span> <span
  m="376470">it's</span> <span m="376620">a</span> <span
  m="376680">megapixel</span> <span m="377370">image,</span> <span
  m="377910">wow,</span> <span m="378260">d's</span> <span
  m="378540">like</span> <span m="378750">a</span> <span
  m="378780">million</span> <span m="379230">already.</span> <span
  m="381010">If</span> <span m="381190">you are</span> <span
  m="382730">somebody</span> <span m="383150">like</span> <span
  m="383330">Criteo</span> <span m="383870">or</span> <span
  m="384020">Facebook</span> <span m="384590">or</span> <span
  m="384710">Google,</span> <span m="385160">and</span> <span
  m="385310">your</span> <span m="385790">serving</span> <span
  m="386300">web</span> <span m="386600">advertisements,</span> <span
  m="388400">d--</span> <span m="389410">these</span> <span m="389600">are
  the</span> <span m="389750">features--</span> <span m="391750">could</span>
  <span m="391930">be</span> <span m="392140">like</span> <span
  m="392440">in</span> <span m="392800">several</span> <span
  m="393250">hundred</span> <span m="393550">million,</span> <span
  m="393970">even</span> <span m="394480">a</span> <span
  m="394540">billion,</span> <span m="395540">where</span> <span
  m="396030">they</span> <span m="396160">encode</span> <span
  m="396580">all</span> <span m="396910">sorts</span> <span m="397330">of</span>
  <span m="397990">nasty</span> <span m="398470">stuff</span> <span
  m="398890">and</span> <span m="399010">information</span> <span
  m="399580">they</span> <span m="399700">collect</span> <span
  m="400090">about</span> <span m="400370">you as</span> <span
  m="400650">users.</span> <span m="401590">So</span> <span
  m="401910">many</span> <span m="402490">nasty</span> <span
  m="402820">things</span> <span m="403090">they</span> <span
  m="403180">can</span> <span m="403330">collect,</span> <span
  m="403630">right?</span></p><p><span m="404030">So</span> <span
  m="404200">d</span> <span m="404500">and</span> <span m="404630">n</span>
  <span m="404760">are</span> <span m="404830">huge.</span> <span
  m="406030">And</span> <span m="406210">it's</span> <span
  m="406390">because</span> <span m="406930">both</span> <span
  m="407290">d</span> <span m="407560">and</span> <span m="407980">n are</span>
  <span m="408160">huge,</span> <span m="409520">we</span> <span
  m="409570">are</span> <span m="409720">interested</span> <span
  m="410320">in</span> <span m="411070">thinking</span> <span
  m="411640">of</span> <span m="412060">optimization</span> <span
  m="412780">methods</span> <span m="413290">for</span> <span
  m="413410">large</span> <span m="413680">scale</span> <span
  m="413950">machine</span> <span m="414280">learning</span> <span
  m="415150">that</span> <span m="415330">can</span> <span
  m="415480">handle</span> <span m="415840">such</span> <span
  m="416140">big</span> <span m="416440">d</span> <span m="416760">and</span>
  <span m="416970">n.</span> <span m="419040">And</span> <span
  m="419250">this</span> <span m="419430">is</span> <span
  m="419580">driving</span> <span m="420060">a</span> <span
  m="420090">lot</span> <span m="420270">of</span> <span
  m="420390">research</span> <span m="420750">on</span> <span
  m="420870">some</span> <span m="421020">theoretical</span> <span
  m="421530">computer</span> <span m="421890">science,</span> <span
  m="422280">including</span> <span m="422700">the</span> <span
  m="422790">search</span> <span m="423120">for</span> <span
  m="423720">sublinear</span> <span m="424440">time</span> <span
  m="424740">algorithms</span> <span m="425370">and</span> <span
  m="425490">all</span> <span m="425730">sorts</span> <span m="426060">of</span>
  <span m="426660">data</span> <span m="426900">structures</span> <span
  m="427350">and</span> <span m="427440">hashing</span> <span
  m="427770">tricks</span> <span m="428100">just</span> <span
  m="428310">to</span> <span m="428430">deal</span> <span m="428700">with</span>
  <span m="428850">these</span> <span m="429210">two</span> <span
  m="429360">quantities.</span></p><p><span m="432450">So</span> <span
  m="432500">here</span> <span m="432660">is</span> <span m="432800">an</span>
  <span m="432890">example--</span> <span m="433640">super</span> <span
  m="434300">toy</span> <span m="434600">example.</span> <span
  m="436350">And</span> <span m="436490">I</span> <span m="436550">hope</span>
  <span m="436820">really</span> <span m="437480">that</span> <span
  m="437840">I</span> <span m="437930">can</span> <span
  m="438080">squeeze</span> <span m="438470">in</span> <span m="438590">a</span>
  <span m="438620">little</span> <span m="438800">bit</span> <span
  m="438950">of</span> <span m="439700">proof</span> <span
  m="440060">later</span> <span m="440420">on</span> <span
  m="440600">towards</span> <span m="440930">the</span> <span
  m="441050">end.</span> <span m="442010">I'll</span> <span
  m="442100">take</span> <span m="442280">a</span> <span m="442340">vote</span>
  <span m="442640">here</span> <span m="442910">in</span> <span
  m="443030">class</span> <span m="443390">to</span> <span m="443480">see</span>
  <span m="443660">if</span> <span m="443780">you</span> <span
  m="443910">are</span> <span m="443960">interested.</span> <span
  m="444860">Let's</span> <span m="445040">look</span> <span
  m="445190">at</span> <span m="445280">the</span> <span m="445340">most</span>
  <span m="445700">classic</span> <span m="447410">question,</span> <span
  m="447890">least</span> <span m="448160">squares</span> <span
  m="448580">regression.</span> <span m="450056">A</span> <span
  m="450510">is</span> <span m="450860">a</span> <span m="450900">matrix</span>
  <span m="451950">of</span> <span m="452070">observations--</span> <span
  m="453220">or</span> <span m="453380">sorry,</span> <span
  m="453640">measurements.</span> <span m="454230">b</span> <span m="454680">are
  the</span> <span m="454860">observations.</span> <span
  m="456020">You're</span> <span m="456120">trying</span> <span
  m="456330">to</span> <span m="456420">solve</span> <span m="456750">Ax</span>
  <span m="457020">minus</span> <span m="457380">b</span> <span
  m="457530">whole</span> <span m="457740">square.</span> <span
  m="458730">Of</span> <span m="458850">course,</span> <span m="459030">a</span>
  <span m="459090">linear</span> <span m="460110">system</span> <span
  m="460440">of</span> <span m="460560">equations,</span> <span
  m="461010">the</span> <span m="461100">most</span> <span
  m="461340">classical</span> <span m="461850">problem</span> <span
  m="462180">in</span> <span m="462270">linear</span> <span
  m="462570">algebra,</span> <span m="462960">can</span> <span
  m="463140">also</span> <span m="463380">be</span> <span
  m="463470">written</span> <span m="463740">like</span> <span
  m="463920">that,</span> <span m="464370">let's</span> <span
  m="464550">say.</span></p><p><span m="467020">This</span> <span
  m="468460">can</span> <span m="468700">be</span> <span
  m="468850">expanded.</span> <span m="469750">Hopefully,</span> <span
  m="470770">you</span> <span m="470980">are</span> <span
  m="471460">comfortable</span> <span m="472090">with</span> <span
  m="472960">this</span> <span m="473440">norm.</span> <span
  m="475360">So</span> <span m="475660">x2</span> <span
  m="476350">squared,</span> <span m="477130">this</span> <span
  m="477670">is</span> <span m="477790">just</span> <span
  m="478030">defined</span> <span m="478630">as</span> <span
  m="480100">that's</span> <span m="480340">the</span> <span
  m="480460">definition</span> <span m="481060">of</span> <span
  m="481240">that</span> <span m="481520">notation.</span> <span
  m="482380">But</span> <span m="482830">I'll</span> <span
  m="482920">just</span> <span m="483100">write</span> <span
  m="483340">it</span> <span m="484270">only</span> <span m="484570">once</span>
  <span m="484900">now.</span> <span m="486540">I</span> <span
  m="486610">hope</span> <span m="486850">you</span> <span m="487570">are</span>
  <span m="487600">fully</span> <span m="487870">familiar</span> <span
  m="488350">with</span> <span m="488470">that.</span></p><p><span
  m="489260">So</span> <span m="489340">by</span> <span
  m="489700">expanding</span> <span m="490330">that,</span> <span
  m="491140">I</span> <span m="491230">managed</span> <span m="491590">to</span>
  <span m="491710">write</span> <span m="492130">least</span> <span
  m="492370">squares</span> <span m="492760">problem</span> <span
  m="493720">in</span> <span m="493900">terms</span> <span m="494290">of</span>
  <span m="495130">what</span> <span m="495310">I</span> <span
  m="495370">call</span> <span m="495580">the</span> <span
  m="495670">finite</span> <span m="496090">sum</span> <span
  m="496480">right.</span> <span m="498220">So it's</span> <span
  m="498410">just</span> <span m="498590">going</span> <span
  m="498830">over</span> <span m="499130">all</span> <span m="499370">the</span>
  <span m="499460">roles</span> <span m="499850">in</span> <span
  m="500000">a.</span> <span m="500610">The</span> <span m="501050">end</span>
  <span m="501290">roles,</span> <span m="501620">let's</span> <span
  m="501830">say.</span> <span m="502910">So</span> <span
  m="503060">that's</span> <span m="503330">the</span> <span
  m="504140">classical</span> <span m="504620">least</span> <span
  m="504800">squares</span> <span m="505100">problem.</span> <span
  m="505700">It</span> <span m="506000">assumes</span> <span
  m="507380">this</span> <span m="507590">finite</span> <span
  m="508010">sum</span> <span m="508250">form</span> <span
  m="508610">that</span> <span m="508790">we</span> <span m="508880">care</span>
  <span m="509150">about.</span></p><p><span m="511900">Another</span> <span
  m="512200">random</span> <span m="512559">example is</span> <span
  m="513039">something</span> <span m="513370">called</span> <span
  m="513789">Lasso.</span> <span m="514150">Maybe</span> <span
  m="515020">if</span> <span m="515350">anybody</span> <span
  m="515720">of</span> <span m="515830">you</span> <span m="515950">has</span>
  <span m="516100">played</span> <span m="516370">with</span> <span
  m="517090">machine</span> <span m="517390">learning</span> <span
  m="517690">or</span> <span m="517750">statistics</span> <span
  m="518320">toolkits,</span> <span m="518770">you</span> <span
  m="518860">may</span> <span m="518980">have</span> <span
  m="519280">seen</span> <span m="519549">something</span> <span
  m="519900">called</span> <span m="520159">Lasso.</span> <span
  m="520799">Lasso</span> <span m="521200">is</span> <span
  m="521260">essentially</span> <span m="521900">least squares,</span> <span
  m="522640">but</span> <span m="522799">there's</span> <span
  m="523000">another</span> <span m="525160">simple</span> <span
  m="525910">term</span> <span m="526360">at</span> <span m="526480">the</span>
  <span m="526600">end.</span> <span m="527170">That</span> <span
  m="527350">again,</span> <span m="527590">looks</span> <span
  m="527800">like</span> <span m="528010">f</span> <span m="528160">of</span>
  <span m="528310">i.</span></p><p><span m="530460">Support</span> <span
  m="530850">vector</span> <span m="531180">machines,</span> <span
  m="532050">once</span> <span m="532410">a</span> <span
  m="532500">workhorse</span> <span m="533340">of--</span> <span
  m="535000">there's</span> <span m="535180">still</span> <span
  m="535410">a</span> <span m="535490">workhorse</span> <span
  m="536160">horse</span> <span m="536550">of</span> <span
  m="537180">people</span> <span m="537450">who</span> <span
  m="537570">work</span> <span m="537840">with</span> <span
  m="538770">small</span> <span m="539190">to</span> <span
  m="539310">medium</span> <span m="539670">sized</span> <span
  m="539940">data.</span> <span m="541840">Deep</span> <span
  m="542080">learning</span> <span m="542410">stuff</span> <span
  m="542650">requires</span> <span m="543160">huge</span> <span
  m="543460">amount</span> <span m="543730">of</span> <span
  m="543820">data.</span> <span m="544480">If</span> <span m="544600">you</span>
  <span m="544690">have</span> <span m="544810">small</span> <span
  m="545080">to</span> <span m="545200">medium</span> <span
  m="545530">amount</span> <span m="545800">of</span> <span
  m="545890">data,</span> <span m="546160">logistic</span> <span
  m="546700">regression</span> <span m="547180">support,</span> <span
  m="547480">vector</span> <span m="547780">machines,</span> <span
  m="548200">trees,</span> <span m="548530">et</span> <span
  m="548780">cetera,</span> <span m="549430">this</span> <span
  m="549640">will</span> <span m="549790">be</span> <span m="549910">your</span>
  <span m="549970">first</span> <span m="550270">go</span> <span
  m="550420">to</span> <span m="550570">methods.</span> <span
  m="550940">They</span> <span m="551310">are</span> <span
  m="551530">still</span> <span m="551860">very</span> <span
  m="552070">widely</span> <span m="552430">used.</span></p><p><span
  m="553910">These</span> <span m="554120">problems</span> <span
  m="554600">are,</span> <span m="554750">again,</span> <span
  m="554990">written</span> <span m="555290">in</span> <span
  m="555380">terms</span> <span m="555710">of</span> <span m="556460">a</span>
  <span m="556880">loss</span> <span m="557510">over</span> <span
  m="558320">training</span> <span m="558680">data.</span> <span
  m="559320">So</span> <span m="559370">this</span> <span
  m="559640">again,</span> <span m="560460">has</span> <span
  m="561380">this</span> <span m="561740">awesome</span> <span
  m="562130">format,</span> <span m="562700">which</span> <span
  m="562880">I'll</span> <span m="563000">just</span> <span
  m="563260">now</span> <span m="563510">record</span> <span
  m="563990">here.</span> <span m="565140">I</span> <span m="565240">may</span>
  <span m="565520">not</span> <span m="565820">even</span> <span
  m="566030">need</span> <span m="566240">to</span> <span
  m="566360">repeat</span> <span m="566810">it.</span> <span
  m="566950">Sometimes</span> <span m="567470">I</span> <span
  m="567530">write</span> <span m="567860">it</span> <span
  m="567980">with</span> <span m="568160">a</span> <span
  m="568190">normalization--</span> <span m="570980">you</span> <span
  m="571100">may</span> <span m="571250">wonder</span> <span
  m="571610">at</span> <span m="571730">some</span> <span
  m="571940">point,</span> <span m="572180">why--</span> <span
  m="573470">as</span> <span m="574010">that</span> <span
  m="574160">finite</span> <span m="574610">sum</span> <span
  m="574820">problem.</span> <span m="576800">And</span> <span
  m="577040">maybe</span> <span m="577370">the</span> <span
  m="577490">example</span> <span m="578060">that</span> <span
  m="578780">you</span> <span m="578960">wanted</span> <span
  m="579320">to</span> <span m="579440">see</span> <span m="580190">is</span>
  <span m="583460">something</span> <span m="583910">like</span> <span
  m="584420">that.</span></p><p><span m="585260">So</span> <span
  m="585860">deep</span> <span m="586070">neural</span> <span
  m="586370">networks</span> <span m="586790">that</span> <span
  m="587450">are</span> <span m="587570">very</span> <span
  m="587810">popular</span> <span m="588230">these</span> <span
  m="588470">days,</span> <span m="589030">they</span> <span
  m="589230">are</span> <span m="589310">just</span> <span m="589520">yet</span>
  <span m="589850">another</span> <span m="590240">example</span> <span
  m="591260">of</span> <span m="591410">this</span> <span
  m="591590">finite</span> <span m="591980">sum</span> <span
  m="592190">problem.</span> <span m="593750">How</span> <span
  m="593960">are</span> <span m="594080">they</span> <span m="594230">an</span>
  <span m="594350">example</span> <span m="594830">of</span> <span
  m="594920">that?</span> <span m="596040">So</span> <span m="597020">you</span>
  <span m="597110">have</span> <span m="597410">n</span> <span
  m="597650">training</span> <span m="598010">data</span> <span
  m="598260">points,</span> <span m="599560">there's</span> <span
  m="599840">a</span> <span m="599900">neural</span> <span
  m="600260">network</span> <span m="600620">loss,</span> <span
  m="601250">like</span> <span m="601430">cross</span> <span
  m="601760">entropy,</span> <span m="602330">or</span> <span
  m="602510">what</span> <span m="602900">have</span> <span
  m="603170">you,</span> <span m="603350">squared</span> <span
  m="603710">loss,</span> <span m="604000">cross--</span> <span
  m="604310">any</span> <span m="605210">kind</span> <span m="605390">of</span>
  <span m="605510">loss.</span> <span m="606800">yi's</span> <span
  m="607370">are</span> <span m="607520">the</span> <span
  m="607820">labels--</span> <span m="608390">cat</span> <span
  m="608720">not</span> <span m="608960">cat,</span> <span m="609260">or</span>
  <span m="610020">maybe</span> <span m="610350">a</span> <span
  m="610490">multiclass.</span> <span m="612230">And</span> <span
  m="613600">then</span> <span m="613750">you</span> <span
  m="613870">have</span> <span m="614320">a</span> <span
  m="614380">transfer</span> <span m="614890">function</span> <span
  m="615790">called</span> <span m="616050">a</span> <span
  m="616090">deep</span> <span m="616360">neural</span> <span
  m="616660">network</span> <span m="617140">which</span> <span
  m="617350">takes</span> <span m="618250">raw</span> <span
  m="618550">images</span> <span m="619060">as</span> <span
  m="619210">input</span> <span m="619690">and</span> <span
  m="619810">generates</span> <span m="620380">a</span> <span
  m="620440">prediction</span> <span m="621580">whether</span> <span
  m="621880">this</span> <span m="622090">is</span> <span m="622240">a</span>
  <span m="622300">dog</span> <span m="622600">or</span> <span
  m="622690">not.</span> <span m="623620">That</span> <span
  m="623800">whole</span> <span m="624160">thing</span> <span
  m="624550">I'm</span> <span m="624640">just</span> <span
  m="624820">calling</span> <span m="625120">DNN.</span></p><p><span
  m="626420">So</span> <span m="626640">it's</span> <span m="626740">a</span>
  <span m="626800">function</span> <span m="627190">of</span> <span
  m="627370">ai's</span> <span m="627820">which</span> <span
  m="628000">are</span> <span m="628060">the</span> <span
  m="628150">training</span> <span m="628510">data.</span> <span
  m="629330">X</span> <span m="630400">are</span> <span m="630550">the</span>
  <span m="630670">[INAUDIBLE]</span> <span m="631030">matrices</span> <span
  m="631720">of</span> <span m="631900">the</span> <span
  m="631990">neural</span> <span m="632290">network,</span> <span
  m="632720">so</span> <span m="632810">I've</span> <span m="632920">just</span>
  <span m="633100">compressed</span> <span m="633550">the</span> <span
  m="633640">whole</span> <span m="633850">neural</span> <span
  m="634120">network</span> <span m="634420">into</span> <span
  m="634600">this</span> <span m="634780">notation.</span> <span
  m="635950">Once</span> <span m="636190">again,</span> <span
  m="636430">it's</span> <span m="636580">nothing</span> <span
  m="636940">but</span> <span m="637240">an</span> <span
  m="637390">instance</span> <span m="637930">of</span> <span
  m="639340">that</span> <span m="639490">finite</span> <span
  m="639970">sum.</span> <span m="641350">So</span> <span m="641470">that</span>
  <span m="641700">fi</span> <span m="642310">in</span> <span
  m="642490">there</span> <span m="643270">captures</span> <span
  m="643780">the</span> <span m="643870">entire</span> <span
  m="644470">neural</span> <span m="644800">network</span> <span
  m="645220">architecture.</span> <span m="648170">But</span> <span
  m="648320">mathematically,</span> <span m="648980">it's</span> <span
  m="649070">still</span> <span m="649340">just</span> <span
  m="649850">one</span> <span m="650870">particular</span> <span
  m="651380">instance</span> <span m="651890">of</span> <span
  m="652040">this</span> <span m="652220">finite</span> <span
  m="652580">sum</span> <span m="652760">problem.</span></p><p><span
  m="655270">And then</span> <span m="655540">people</span> <span
  m="655870">who</span> <span m="656020">do</span> <span m="656170">a</span>
  <span m="656200">lot</span> <span m="656380">of</span> <span
  m="656470">statistics,</span> <span m="657760">maximum</span> <span
  m="658270">likelihood</span> <span m="658810">estimation.</span> <span
  m="661360">This</span> <span m="661540">is</span> <span m="661630">log</span>
  <span m="661900">likelihood</span> <span m="662500">over</span> <span
  m="663940">n</span> <span m="664150">observations.</span> <span
  m="665590">You</span> <span m="665680">want</span> <span m="665920">to</span>
  <span m="666010">maximize</span> <span m="666850">log</span> <span
  m="667090">likelihood.</span> <span m="668290">Once</span> <span
  m="668530">again,</span> <span m="668800">just</span> <span
  m="669010">a</span> <span m="669080">finite</span> <span
  m="669460">sum.</span></p><p><span m="670570">So</span> <span
  m="671290">pretty</span> <span m="671560">much</span> <span
  m="671920">most</span> <span m="672490">of</span> <span m="672670">the</span>
  <span m="673420">problems</span> <span m="673900">that</span> <span
  m="674050">we're</span> <span m="674230">interested</span> <span
  m="674710">in</span> <span m="675010">machine</span> <span
  m="675400">learning</span> <span m="675790">and</span> <span
  m="675880">statistics,</span> <span m="677140">when</span> <span
  m="677350">I</span> <span m="677440">write</span> <span m="677680">them</span>
  <span m="678580">down</span> <span m="678850">as</span> <span
  m="678970">an</span> <span m="679090">optimization</span> <span
  m="679690">problem,</span> <span m="680080">they</span> <span
  m="680200">look</span> <span m="680410">like</span> <span
  m="680620">these</span> <span m="680770">finite</span> <span
  m="681190">sum</span> <span m="681370">problems.</span> <span
  m="683400">And</span> <span m="683790">that's</span> <span
  m="684060">the</span> <span m="684210">reason</span> <span
  m="685050">to</span> <span m="685170">develop</span> <span
  m="685980">specialized</span> <span m="687570">optimization</span> <span
  m="688380">procedures</span> <span m="689070">to</span> <span
  m="689220">solve</span> <span m="689730">such</span> <span
  m="690000">finite</span> <span m="690900">some</span> <span
  m="691200">problems.</span> <span m="692740">And</span> <span
  m="692840">that's</span> <span m="692940">where</span> <span
  m="693330">SGD</span> <span m="693780">comes</span> <span
  m="694050">in.</span></p><p><span m="695940">OK.</span> <span
  m="696140">So</span> <span m="696260">that's</span> <span
  m="696470">kind</span> <span m="696680">of</span> <span m="696740">just</span>
  <span m="697070">the</span> <span m="697190">backdrop.</span> <span
  m="697830">Let's</span> <span m="698150">look</span> <span
  m="698390">at</span> <span m="698540">now</span> <span m="699200">how</span>
  <span m="699350">to</span> <span m="699500">go</span> <span
  m="699740">about</span> <span m="700340">solving</span> <span
  m="701240">these</span> <span m="701480">problems.</span> <span
  m="705730">So</span> <span m="708640">hopefully</span> <span
  m="709270">this</span> <span m="709540">iteration</span> <span
  m="710290">is</span> <span m="710470">familiar</span> <span
  m="711010">to</span> <span m="711160">you--</span> <span
  m="711460">gradient</span> <span m="711880">descent,</span> <span
  m="712450">right?</span> <span m="713490">OK.</span></p><p><span
  m="714550">So</span> <span m="718690">just</span> <span m="718900">for</span>
  <span m="719080">notation,</span> <span m="720370">f</span> <span
  m="720580">of</span> <span m="720820">x</span> <span m="721750">refers</span>
  <span m="722290">to</span> <span m="722410">that</span> <span
  m="722620">entire</span> <span m="723070">summation.</span> <span
  m="724220">F</span> <span m="724450">sub</span> <span m="724720">i</span>
  <span m="724950">of</span> <span m="725080">x</span> <span
  m="725350">refers</span> <span m="725710">to</span> <span m="725830">a</span>
  <span m="725860">single</span> <span m="726250">component.</span> <span
  m="728070">So</span> <span m="728940">if</span> <span m="729090">you</span>
  <span m="729240">were</span> <span m="729510">to</span> <span
  m="729690">try</span> <span m="729930">to</span> <span
  m="730050">solve--</span> <span m="730650">that</span> <span
  m="730830">is,</span> <span m="730980">to</span> <span
  m="731100">minimize</span> <span m="732360">this</span> <span
  m="732600">cost</span> <span m="732930">function,</span> <span
  m="733740">neural</span> <span m="734010">network,</span> <span
  m="734440">SVM,</span> <span m="734790">what</span> <span
  m="734940">have</span> <span m="735210">you</span> <span
  m="736170">using</span> <span m="736470">gradient</span> <span
  m="736860">descent,</span> <span m="738720">that's</span> <span
  m="738960">what</span> <span m="739170">one</span> <span
  m="739410">iteration</span> <span m="739920">would</span> <span
  m="740100">look</span> <span m="740310">like.</span> <span
  m="742750">Because</span> <span m="743020">it's</span> <span
  m="743170">a</span> <span m="743230">finite</span> <span
  m="743590">sum,</span> <span m="743860">gradients</span> <span
  m="744370">are</span> <span m="744430">linear</span> <span
  m="744790">operators.</span> <span m="746830">Gradient</span> <span
  m="747280">of</span> <span m="747370">the</span> <span m="747460">sum</span>
  <span m="747760">is</span> <span m="747880">the</span> <span
  m="747970">sum</span> <span m="748210">of</span> <span m="748330">the</span>
  <span m="748420">gradient--</span> <span m="749350">that's</span> <span
  m="749800">gradient</span> <span m="750190">descent</span> <span
  m="750490">for</span> <span m="750760">you.</span></p><p><span
  m="754120">And</span> <span m="754540">now,</span> <span
  m="754770">I'll</span> <span m="754880">just</span> <span
  m="755050">ask</span> <span m="755290">a</span> <span
  m="755380">rhetoric</span> <span m="755860">question</span> <span
  m="756520">that,</span> <span m="757090">if</span> <span m="757240">you</span>
  <span m="757630">put</span> <span m="757840">yourself</span> <span
  m="758230">in</span> <span m="758320">the</span> <span m="758410">shoes</span>
  <span m="758650">of</span> <span m="758770">you're</span> <span
  m="758830">[INAUDIBLE]</span> <span m="758980">algorithm</span> <span
  m="759430">designers,</span> <span m="761200">some</span> <span
  m="761440">things</span> <span m="761770">that</span> <span
  m="761950">you</span> <span m="762070">may</span> <span m="762250">want</span>
  <span m="762400">to</span> <span m="762490">think</span> <span
  m="762790">about--</span> <span m="763060">what</span> <span
  m="763690">may</span> <span m="764260">you</span> <span m="764440">not</span>
  <span m="764740">like</span> <span m="765100">about</span> <span
  m="765370">this</span> <span m="765580">iteration,</span> <span
  m="766120">given</span> <span m="766390">that</span> <span
  m="767530">big</span> <span m="767830">n,</span> <span m="768040">big</span>
  <span m="768310">d</span> <span m="768520">story</span> <span
  m="768910">that</span> <span m="769120">I</span> <span m="769180">told</span>
  <span m="769510">you?</span> <span m="770020">So</span> <span
  m="770150">anybody</span> <span m="770560">have</span> <span
  m="770830">any</span> <span m="772230">reservations</span> <span
  m="773220">or</span> <span m="773400">about</span> <span
  m="773670">drawbacks</span> <span m="774600">of</span> <span
  m="774780">this</span> <span m="774990">iteration?</span> <span
  m="775680">Any</span> <span m="775890">comments?</span></p><p><span
  m="777948">AUDIENCE:</span> <span m="778176">It's</span> <span m="778404">a
  pretty</span> <span m="778860">big</span> <span
  m="779320">sum.</span></p><p><span m="780300">PROFESSOR SRA:</span> <span
  m="780405">It's</span> <span m="780510">a</span> <span
  m="780570">pretty</span> <span m="780840">big</span> <span
  m="781050">sum.</span> <span m="782340">Especially</span> <span
  m="782675">if</span> <span m="783010">n</span> <span m="783230">is</span>
  <span m="783380">say,</span> <span m="783680">a billion</span> <span
  m="784140">on</span> <span m="784860">some</span> <span
  m="785190">bigger,</span> <span m="785610">[INAUDIBLE]</span> <span
  m="786370">number.</span> <span m="787920">That</span> <span
  m="788100">is</span> <span m="788220">definitely</span> <span
  m="789210">a</span> <span m="789270">big</span> <span
  m="789540">drawback.</span> <span m="792660">Because</span> <span
  m="792780">that</span> <span m="792990">is</span> <span m="793140">the</span>
  <span m="793260">prime</span> <span m="793590">drawback</span> <span
  m="794070">for</span> <span m="794220">large</span> <span
  m="794490">scale,</span> <span m="795300">that</span> <span
  m="795690">n</span> <span m="795900">be</span> <span m="796020">huge.</span>
  <span m="796680">There</span> <span m="796800">can</span> <span
  m="796980">be</span> <span m="797100">variety</span> <span
  m="797640">of</span> <span m="797760">other</span> <span
  m="797970">drawbacks.</span> <span m="799380">Some</span> <span
  m="799620">of</span> <span m="799710">those</span> <span m="799950">you</span>
  <span m="800040">may</span> <span m="800130">have</span> <span
  m="800250">seen</span> <span m="800520">previously</span> <span
  m="801390">when</span> <span m="801690">people</span> <span
  m="802020">compare</span> <span m="802470">whether</span> <span
  m="802710">to</span> <span m="802860">the</span> <span
  m="802980">gradient</span> <span m="803550">or</span> <span m="803640">to
  do</span> <span m="803910">Newton,</span> <span m="804340">et.</span> <span
  m="804590">Cetera</span> <span m="805200">but</span> <span
  m="805380">for</span> <span m="806460">the</span> <span
  m="806940">purpose</span> <span m="807330">of</span> <span
  m="807450">today,</span> <span m="808320">for</span> <span
  m="808430">finite</span> <span m="808830">sums,</span> <span
  m="809130">the</span> <span m="809220">big</span> <span
  m="809400">drawback</span> <span m="809880">is</span> <span
  m="810600">computing</span> <span m="811890">gradient</span> <span
  m="812520">at</span> <span m="812670">a</span> <span m="812730">single</span>
  <span m="813120">point--</span> <span m="814560">there's a</span> <span
  m="814890">subscript</span> <span m="815370">xk</span> <span
  m="815730">missing</span> <span m="816040">there--</span> <span
  m="817690">involves</span> <span m="818140">computing</span> <span
  m="818800">the</span> <span m="819190">gradient</span> <span
  m="819610">of</span> <span m="819700">that</span> <span
  m="819850">entire</span> <span m="820300">sum.</span></p><p><span
  m="820630">That sum</span> <span m="820720">is</span> <span
  m="820800">some</span> <span m="821020">is</span> <span
  m="821170">huge.</span> <span m="822880">So</span> <span
  m="823300">getting</span> <span m="823660">a</span> <span
  m="823690">single</span> <span m="824080">gradient</span> <span
  m="824530">to</span> <span m="824680">do</span> <span m="825010">a</span>
  <span m="825040">single</span> <span m="825490">step</span> <span
  m="825790">of</span> <span m="825880">gradient</span> <span
  m="826330">descent</span> <span m="827440">for</span> <span
  m="827680">a</span> <span m="827740">large</span> <span m="828220">data</span>
  <span m="828610">set</span> <span m="829030">could</span> <span
  m="829180">take</span> <span m="829450">you</span> <span
  m="830620">hours</span> <span m="831190">or</span> <span
  m="831370">days.</span> <span m="834350">So</span> <span
  m="834470">that's</span> <span m="834710">a</span> <span
  m="834740">major</span> <span m="835040">drawback.</span> <span
  m="836040">But</span> <span m="836120">then</span> <span m="836720">if</span>
  <span m="836810">you</span> <span m="837110">identify</span> <span
  m="837680">that</span> <span m="837830">drawback,</span> <span
  m="838280">anybody</span> <span m="838700">have</span> <span
  m="840550">any</span> <span m="840730">ideas</span> <span
  m="841480">how</span> <span m="841810">to</span> <span
  m="842740">counter</span> <span m="843160">that</span> <span
  m="843340">drawback,</span> <span m="843910">at</span> <span
  m="844090">least,</span> <span m="844420">say,</span> <span
  m="845230">purely</span> <span m="845620">from</span> <span
  m="845800">an</span> <span m="845920">engineering</span> <span
  m="846430">perspective?</span></p><p><span m="850090">I</span> <span
  m="850180">heard</span> <span m="850390">something.</span> <span
  m="850840">Can</span> <span m="851020">you</span> <span
  m="851370">speak</span> <span m="851660">up?</span></p><p><span
  m="853321">AUDIENCE:</span> <span m="853549">[INAUDIBLE]</span></p><p><span
  m="855610">PROFESSOR SRA:</span> <span m="855772">Using</span> <span
  m="856470">some</span> <span m="856690">kind</span> <span m="856830">of</span>
  <span m="856940">badge?</span></p><p><span m="857310">AUDIENCE:</span> <span
  m="857512">Yeah.</span></p><p><span m="858930">PROFESSOR SRA:</span> <span
  m="859110">You</span> <span m="859290">are</span> <span m="859950">well</span>
  <span m="860180">ahead</span> <span m="860500">of</span> <span
  m="860630">my</span> <span m="860780">slides.</span> <span
  m="861210">We</span> <span m="861280">are</span> <span
  m="861410">coming</span> <span m="861650">to</span> <span
  m="861840">that.</span> <span m="863020">And</span> <span
  m="864260">maybe</span> <span m="864530">somebody</span> <span
  m="864860">else</span> <span m="865070">has,</span> <span
  m="865370">essentially,</span> <span m="865820">the</span> <span
  m="865910">same</span> <span m="866150">idea.</span> <span
  m="866360">Anybody</span> <span m="866750">want</span> <span
  m="867110">to</span> <span m="868010">suggest</span> <span
  m="868520">how</span> <span m="868730">to</span> <span
  m="868850">circumvent</span> <span m="869510">that</span> <span
  m="869720">big</span> <span m="870020">n</span> <span m="870470">stuff</span>
  <span m="870910">in</span> <span m="871050">there?</span> <span
  m="873140">Anything--</span> <span m="873650">suppose you are</span> <span
  m="874060">implementing</span> <span m="874610">this.</span> <span
  m="874850">What</span> <span m="875030">would</span> <span
  m="875150">you</span> <span m="875240">do?</span></p><p><span
  m="878234">AUDIENCE:</span> <span m="878468">One</span> <span
  m="878703">example</span> <span m="879172">at a time.</span></p><p><span
  m="880110">PROFESSOR SRA:</span> <span m="880220">One</span> <span
  m="880330">example</span> <span m="880820">at</span> <span m="880930">a</span>
  <span m="881010">time.</span></p><p><span m="883176">AUDIENCE:</span> <span
  m="883410">[INAUDIBLE]</span> <span m="884583">a random</span> <span
  m="885052">sample</span> <span m="885521">full set</span> <span m="885990">of
  n.</span></p><p><span m="887400">PROFESSOR SRA:</span> <span
  m="887565">Random</span> <span m="887730">sample</span> <span
  m="888090">of</span> <span m="888180">the</span> <span m="888270">full</span>
  <span m="888540">n.</span> <span m="889110">So</span> <span
  m="889230">these</span> <span m="889410">are</span> <span
  m="889530">all</span> <span m="889770">excellent</span> <span
  m="890250">ideas.</span> <span m="891840">And</span> <span
  m="892050">hence,</span> <span m="893430">you</span> <span
  m="893820">folks</span> <span m="894330">in</span> <span m="894420">the</span>
  <span m="894510">class</span> <span m="895410">have</span> <span
  m="895560">discovered</span> <span m="896190">the</span> <span
  m="896310">most</span> <span m="896640">important</span> <span
  m="897150">method</span> <span m="897630">for</span> <span
  m="897960">optimizing</span> <span m="898560">machine</span> <span
  m="898830">learning</span> <span m="899130">problems,</span> <span
  m="899850">sitting</span> <span m="900210">here</span> <span
  m="900540">in</span> <span m="900660">a</span> <span m="900720">few</span>
  <span m="900900">moments.</span> <span m="901890">Isn't</span> <span
  m="902100">that</span> <span m="902220">great?</span> <span
  m="903750">So</span> <span m="903870">the</span> <span m="903960">part</span>
  <span m="904230">that</span> <span m="904410">is</span> <span
  m="904470">missing</span> <span m="904770">is</span> <span
  m="904890">of</span> <span m="904980">course</span> <span m="905220">to</span>
  <span m="905340">make</span> <span m="905520">sense</span> <span
  m="905880">of,</span> <span m="906300">does</span> <span
  m="906600">this</span> <span m="906780">idea</span> <span
  m="907110">work?</span> <span m="907540">Why</span> <span
  m="907620">does</span> <span m="907800">it</span> <span
  m="907920">work?</span></p><p><span m="909500">So</span> <span
  m="909650">this</span> <span m="909890">idea</span> <span m="911660">is</span>
  <span m="911870">really</span> <span m="912200">at</span> <span
  m="912320">the</span> <span m="912410">heart</span> <span m="912770">of</span>
  <span m="913280">stochastic</span> <span m="913820">gradient</span> <span
  m="914240">descent.</span> <span m="916670">So</span> <span
  m="916970">let's</span> <span m="917180">see.</span> <span
  m="919370">Maybe</span> <span m="919760">I</span> <span m="919850">can</span>
  <span m="920000">show</span> <span m="920180">you</span> <span
  m="920300">an</span> <span m="920420">example,</span> <span
  m="921080">actually,</span> <span m="921500">that</span> <span
  m="921740">I--</span> <span m="925810">I'll</span> <span
  m="926120">show</span> <span m="926300">you</span> <span m="926540">a</span>
  <span m="926900">simulation</span> <span m="927650">I</span> <span
  m="927740">found</span> <span m="928070">on</span> <span
  m="928160">somebody's</span> <span m="929390">nice</span> <span m="929660">web
  page</span> <span m="930320">about</span> <span m="930590">that.</span> <span
  m="933300">So</span> <span m="934170">exactly</span> <span
  m="934770">your</span> <span m="935130">idea,</span> <span
  m="935460">just</span> <span m="935670">put</span> <span m="935920">in</span>
  <span m="936120">slight</span> <span m="936990">mathematical</span> <span
  m="937590">notation,</span> <span m="938520">that</span> <span
  m="939300">what</span> <span m="939540">if</span> <span m="939720">at</span>
  <span m="940020">each</span> <span m="940380">iteration,</span> <span
  m="941940">we</span> <span m="942120">randomly</span> <span
  m="942720">pick</span> <span m="942990">some</span> <span
  m="943230">integer,</span> <span m="943890">i</span> <span m="944400">k</span>
  <span m="945390">out</span> <span m="945570">of</span> <span
  m="945660">the</span> <span m="945780">n</span> <span
  m="945990">training</span> <span m="946320">data</span> <span
  m="946550">points,</span> <span m="948410">and</span> <span
  m="949560">we</span> <span m="949910">instead</span> <span
  m="950330">just</span> <span m="950540">perform</span> <span
  m="950990">this</span> <span m="951230">update.</span></p><p><span
  m="956160">So</span> <span m="956570">instead</span> <span
  m="956900">of</span> <span m="957080">using</span> <span m="958100">the</span>
  <span m="958250">full</span> <span m="958610">gradient,</span> <span
  m="962200">you</span> <span m="962560">just</span> <span
  m="962800">compute</span> <span m="963190">the</span> <span
  m="963280">gradient</span> <span m="963730">of</span> <span
  m="963850">a</span> <span m="963910">single</span> <span
  m="964360">randomly</span> <span m="964840">chosen</span> <span
  m="965200">data</span> <span m="965440">point.</span> <span
  m="967430">So</span> <span m="967710">what</span> <span m="967950">have</span>
  <span m="968100">you</span> <span m="968190">done</span> <span
  m="968400">with</span> <span m="968550">that?</span> <span
  m="969240">One</span> <span m="969510">iteration</span> <span
  m="970050">is</span> <span m="970140">now</span> <span m="970500">n</span>
  <span m="970740">times</span> <span m="971070">faster.</span> <span
  m="971970">If</span> <span m="972120">n</span> <span m="972480">were a</span>
  <span m="972510">million</span> <span m="973080">or</span> <span
  m="973200">a</span> <span m="973260">billion</span> <span
  m="973770">wow,</span> <span m="974160">that's</span> <span
  m="974890">super</span> <span m="975260">fast.</span> <span
  m="977650">But</span> <span m="977770">why</span> <span
  m="977950">should</span> <span m="978130">this</span> <span
  m="978280">work</span> <span m="978540">right?</span></p><p><span
  m="981990">I</span> <span m="982080">could</span> <span m="982230">have</span>
  <span m="982320">done</span> <span m="982470">many</span> <span
  m="982710">other</span> <span m="982890">things.</span> <span
  m="983250">I</span> <span m="983310">could</span> <span m="983460">have</span>
  <span m="985170">not</span> <span m="985410">done</span> <span
  m="986010">any</span> <span m="986250">update</span> <span
  m="986610">and</span> <span m="986700">just</span> <span
  m="986880">output</span> <span m="987210">the</span> <span m="987300">0</span>
  <span m="987600">vector.</span> <span m="988050">That</span> <span
  m="988230">would</span> <span m="988530">take</span> <span
  m="988770">even</span> <span m="988980">less</span> <span
  m="989250">time.</span> <span m="990330">That's</span> <span
  m="990480">also</span> <span m="990720">an</span> <span
  m="990810">idea.</span> <span m="991180">It's</span> <span m="991290">a</span>
  <span m="991500">bad</span> <span m="991830">idea,</span> <span
  m="992130">but</span> <span m="992280">it's</span> <span m="992460">an</span>
  <span m="992580">idea</span> <span m="992880">in</span> <span
  m="992990">a</span> <span m="993060">similar</span> <span
  m="993480">league.</span></p><p><span m="994340">I</span> <span
  m="994410">could</span> <span m="994530">have</span> <span
  m="994650">done</span> <span m="994800">a</span> <span
  m="994830">variety</span> <span m="995250">of</span> <span
  m="995370">other</span> <span m="995550">things.</span> <span
  m="996270">Why</span> <span m="996450">would</span> <span
  m="996630">you</span> <span m="997140">think</span> <span
  m="997440">that</span> <span m="997620">just</span> <span
  m="998010">replacing</span> <span m="998700">that</span> <span
  m="999510">sum</span> <span m="999870">with</span> <span
  m="999990">just</span> <span m="1000230">one</span> <span
  m="1000440">random</span> <span m="1000800">example</span> <span
  m="1001280">may</span> <span m="1001430">work?</span> <span
  m="1004430">Let's</span> <span m="1004610">see</span> <span
  m="1004760">a</span> <span m="1004820">little</span> <span
  m="1005000">bit</span> <span m="1006110">more</span> <span
  m="1006410">about</span> <span m="1006650">that.</span></p><p><span
  m="1008180">So</span> <span m="1008950">of</span> <span
  m="1009070">course,</span> <span m="1009310">it's</span> <span
  m="1009490">n</span> <span m="1009670">times</span> <span
  m="1009940">faster,</span> <span m="1013010">and</span> <span
  m="1013250">the</span> <span m="1013640">key</span> <span
  m="1013880">question</span> <span m="1014330">for</span> <span
  m="1014540">us</span> <span m="1015050">here,</span> <span
  m="1015470">right</span> <span m="1015680">now--</span> <span
  m="1015860">the</span> <span m="1015950">scientific</span> <span
  m="1016430">question--</span> <span m="1016850">is</span> <span
  m="1018050">does</span> <span m="1018260">this</span> <span
  m="1018470">make</span> <span m="1018680">sense?</span> <span
  m="1020420">It</span> <span m="1020540">makes</span> <span
  m="1020840">great</span> <span m="1021140">engineering</span> <span
  m="1021680">sense.</span> <span m="1022040">Does</span> <span
  m="1022220">it</span> <span m="1022340">make</span> <span
  m="1022670">algorithmic</span> <span m="1023240">or</span> <span
  m="1023360">mathematical</span> <span m="1023960">sense?</span> <span
  m="1027450">So</span> <span m="1027490">this</span> <span
  m="1027730">idea</span> <span m="1028240">of</span> <span
  m="1029020">doing</span> <span m="1029740">stuff</span> <span
  m="1030099">in</span> <span m="1030190">the</span> <span
  m="1030280">stochastic</span> <span m="1030880">manner</span> <span
  m="1031240">was</span> <span m="1031480">actually</span> <span
  m="1031869">originally</span> <span m="1032349">proposed</span> <span
  m="1032740">by</span> <span m="1032859">Robbins</span> <span
  m="1033310">and</span> <span m="1033400">Monro,</span> <span
  m="1034270">somewhere,</span> <span m="1034660">I</span> <span
  m="1034720">think,</span> <span m="1034970">around</span> <span
  m="1035220">1951.</span> <span m="1036839">And</span> <span
  m="1036940">that's</span> <span m="1037150">the</span> <span
  m="1037270">most</span> <span m="1037599">advanced</span> <span
  m="1038079">method</span> <span m="1038859">that</span> <span
  m="1039069">we</span> <span m="1039119">are</span> <span
  m="1039220">essentially</span> <span m="1039700">using</span> <span
  m="1040240">currently.</span></p><p><span m="1042260">So</span> <span
  m="1043220">I'll</span> <span m="1043369">show</span> <span
  m="1043609">you</span> <span m="1044119">that</span> <span
  m="1044300">this</span> <span m="1044510">idea</span> <span
  m="1044869">makes</span> <span m="1045109">sense.</span> <span
  m="1045500">But</span> <span m="1045680">maybe</span> <span
  m="1045950">let's</span> <span m="1046160">first</span> <span
  m="1046400">just</span> <span m="1046640">look</span> <span
  m="1046849">at</span> <span m="1047079">a</span> <span
  m="1048319">comparison</span> <span m="1049040">of</span> <span
  m="1049710">SGD</span> <span m="1050270">with</span> <span
  m="1050440">gradient</span> <span m="1050870">descent</span> <span
  m="1051470">in</span> <span m="1053160">this</span> <span
  m="1053760">guy's</span> <span m="1054060">simulation.</span> <span
  m="1057960">So</span> <span m="1058860">this</span> <span
  m="1059010">is</span> <span m="1060140">that</span> <span
  m="1060390">MATLAB</span> <span m="1060810">code</span> <span
  m="1061080">of</span> <span m="1061140">gradient</span> <span
  m="1061560">descent,</span> <span m="1062940">and</span> <span
  m="1065610">this</span> <span m="1065850">is</span> <span
  m="1066120">just</span> <span m="1066360">a</span> <span
  m="1066420">simulation</span> <span m="1066990">of</span> <span
  m="1067080">gradient</span> <span m="1067440">descent.</span> <span
  m="1067830">As</span> <span m="1067980">you</span> <span
  m="1068070">pick</span> <span m="1068340">a</span> <span
  m="1068400">different</span> <span m="1068760">step</span> <span
  m="1069060">size,</span> <span m="1069840">that</span> <span
  m="1070020">gamma</span> <span m="1070350">in</span> <span
  m="1070530">there,</span> <span m="1071520">you</span> <span
  m="1071850">move</span> <span m="1072150">towards</span> <span
  m="1072510">the</span> <span m="1072630">optimum.</span> <span
  m="1073200">If</span> <span m="1073320">the</span> <span
  m="1073410">step</span> <span m="1073680">size</span> <span
  m="1073920">is</span> <span m="1074010">small,</span> <span
  m="1076710">you</span> <span m="1076800">make</span> <span
  m="1077070">many</span> <span m="1077370">small</span> <span
  m="1077730">steps,</span> <span m="1078330">and</span> <span
  m="1078450">you</span> <span m="1079020">keep</span> <span
  m="1079260">making</span> <span m="1079560">slow</span> <span
  m="1080310">progress,</span> <span m="1080820">and</span> <span
  m="1080940">you</span> <span m="1081360">reach</span> <span
  m="1081630">there.</span></p><p><span m="1082740">That's</span> <span
  m="1082950">for</span> <span m="1083130">a</span> <span
  m="1083190">well-conditioned</span> <span m="1083790">problem</span> <span
  m="1084210">and</span> <span m="1084300">an</span> <span
  m="1084420">ill-conditioned</span> <span m="1085120">problem.</span> <span
  m="1086250">It</span> <span m="1086340">takes</span> <span
  m="1086610">you</span> <span m="1086730">even</span> <span
  m="1087030">larger.</span> <span m="1088020">In</span> <span
  m="1088170">a</span> <span m="1088200">neural</span> <span
  m="1088530">network</span> <span m="1089070">type</span> <span
  m="1089250">problem</span> <span m="1089650">which</span> <span
  m="1089790">is</span> <span m="1089910">nonconvex,</span> <span
  m="1091590">you</span> <span m="1091740">have</span> <span
  m="1091920">to</span> <span m="1092070">typically</span> <span
  m="1092520">work</span> <span m="1092760">with</span> <span
  m="1093000">smaller</span> <span m="1093480">step</span> <span
  m="1093780">sizes.</span> <span m="1094360">And</span> <span
  m="1094460">if</span> <span m="1094560">you</span> <span
  m="1094660">take</span> <span m="1094710">bigger</span> <span
  m="1095040">ones,</span> <span m="1095250">you</span> <span
  m="1095340">can</span> <span m="1095520">get</span> <span
  m="1095700">crazy</span> <span m="1096120">oscillations.</span> <span
  m="1096810">But</span> <span m="1097560">that's</span> <span
  m="1097800">gradient</span> <span m="1098220">descent.</span></p><p><span
  m="1099750">In</span> <span m="1099870">comparison,</span> <span
  m="1102630">let's</span> <span m="1103200">hope</span> <span
  m="1103950">that</span> <span m="1104100">this</span> <span
  m="1104340">loads</span> <span m="1105000">correctly.</span> <span
  m="1106190">Well,</span> <span m="1106290">there's</span> <span
  m="1106470">even</span> <span m="1106650">a</span> <span
  m="1106710">picture</span> <span m="1107040">of</span> <span
  m="1107210">Robbins,</span> <span m="1108360">who</span> <span
  m="1108655">was</span> <span m="1108950">a</span> <span
  m="1109080">co-discoverer</span> <span m="1109880">of</span> <span
  m="1110010">the</span> <span m="1110100">stochastic</span> <span
  m="1110610">gradient</span> <span m="1111030">method.</span> <span
  m="1111960">There's</span> <span m="1112140">a</span> <span
  m="1112200">nice</span> <span m="1112410">simulation,</span> <span
  m="1113670">that</span> <span m="1114330">instead</span> <span
  m="1114690">of</span> <span m="1114840">making</span> <span
  m="1116460">that</span> <span m="1116670">kind</span> <span
  m="1116880">of</span> <span m="1117000">deterministic</span> <span
  m="1117870">descent--</span> <span m="1118810">after</span> <span
  m="1119150">all,</span> <span m="1119280">gradient</span> <span
  m="1119820">descent</span> <span m="1120270">is</span> <span
  m="1120360">called</span> <span m="1120600">&quot;gradient</span> <span
  m="1121170">descent.&quot;</span> <span m="1123540">At</span> <span
  m="1123720">every</span> <span m="1124020">step</span> <span
  m="1125550">it</span> <span m="1125700">descends--</span> <span
  m="1126550">it</span> <span m="1126570">decreases</span> <span
  m="1127200">the</span> <span m="1127320">cost</span> <span
  m="1127650">function.</span></p><p><span m="1128820">Stochastic</span> <span
  m="1129510">gradient</span> <span m="1130020">descent</span> <span
  m="1130530">is</span> <span m="1130650">actually</span> <span
  m="1130980">a</span> <span m="1131010">misnomer.</span> <span
  m="1132480">At</span> <span m="1132600">every</span> <span
  m="1132870">step</span> <span m="1133140">it</span> <span
  m="1133230">doesn't</span> <span m="1133530">do</span> <span
  m="1133680">any</span> <span m="1134220">descent.</span> <span
  m="1134850">It</span> <span m="1134910">does</span> <span
  m="1135150">not</span> <span m="1135420">decrease</span> <span
  m="1135810">the</span> <span m="1135900">cost</span> <span
  m="1136140">function.</span> <span m="1136630">So</span> <span
  m="1136730">you</span> <span m="1136830">see,</span> <span
  m="1137370">at</span> <span m="1137520">every</span> <span
  m="1137820">step,</span> <span m="1138480">those</span> <span
  m="1138690">are</span> <span m="1138750">the</span> <span
  m="1139080">contours</span> <span m="1139620">of</span> <span
  m="1139710">the</span> <span m="1139800">cost</span> <span
  m="1140070">function.</span> <span m="1140400">Sometimes</span> <span
  m="1140820">it</span> <span m="1140910">goes</span> <span
  m="1141150">up,</span> <span m="1141370">sometimes</span> <span
  m="1141630">it</span> <span m="1141690">goes</span> <span
  m="1141930">down.</span> <span m="1142620">It</span> <span
  m="1142830">fluctuates</span> <span m="1143490">around,</span> <span
  m="1144210">but</span> <span m="1144780">it</span> <span
  m="1144900">kind</span> <span m="1145170">of</span> <span
  m="1145230">stochastically</span> <span m="1146130">still</span> <span
  m="1146460">seems</span> <span m="1146760">to</span> <span
  m="1146850">be</span> <span m="1146970">making</span> <span
  m="1147270">progress</span> <span m="1147720">towards</span> <span
  m="1148020">the</span> <span m="1148140">optimum.</span></p><p><span
  m="1150640">And</span> <span m="1151660">stochastic</span> <span
  m="1152260">gradient</span> <span m="1152710">descent,</span> <span
  m="1153190">because</span> <span m="1153580">it's</span> <span
  m="1154180">not</span> <span m="1154420">using</span> <span
  m="1154720">exact</span> <span m="1155260">gradients,</span> <span
  m="1156220">just</span> <span m="1156430">working</span> <span
  m="1156760">with</span> <span m="1156880">these</span> <span
  m="1157060">random</span> <span m="1158290">examples,</span> <span
  m="1159820">it</span> <span m="1160000">actually</span> <span
  m="1160810">is</span> <span m="1160960">much</span> <span
  m="1161260">more</span> <span m="1161440">sensitive</span> <span
  m="1161980">to</span> <span m="1162100">step</span> <span
  m="1162370">sizes.</span> <span m="1164150">And</span> <span
  m="1165220">you</span> <span m="1165340">can</span> <span
  m="1165490">see,</span> <span m="1165880">as</span> <span m="1166060">I</span>
  <span m="1166120">increase</span> <span m="1166450">the</span> <span
  m="1166540">step</span> <span m="1166810">size,</span> <span
  m="1167230">its</span> <span m="1167530">behavior.</span> <span
  m="1169070">This</span> <span m="1169120">is</span> <span
  m="1169480">actually</span> <span m="1169780">full</span> <span
  m="1169990">simulation</span> <span m="1170680">for</span> <span
  m="1170930">[INAUDIBLE]</span> <span m="1171110">problem.</span></p><p><span
  m="1172940">So</span> <span m="1173100">initially,</span> <span
  m="1174150">what</span> <span m="1174840">I</span> <span
  m="1174900">want</span> <span m="1175140">you</span> <span
  m="1175230">to</span> <span m="1175350">notice</span> <span
  m="1175770">is--</span> <span m="1176040">let</span> <span
  m="1176220">me</span> <span m="1176340">go</span> <span
  m="1176550">through</span> <span m="1176760">this</span> <span
  m="1178620">a</span> <span m="1179340">few</span> <span
  m="1179580">times--</span> <span m="1180450">keep</span> <span
  m="1180690">looking</span> <span m="1181080">at</span> <span
  m="1182310">what</span> <span m="1182670">patterns</span> <span
  m="1183300">you</span> <span m="1183450">may</span> <span
  m="1183600">notice</span> <span m="1184530">in</span> <span
  m="1184680">how</span> <span m="1184890">that</span> <span
  m="1185040">line</span> <span m="1185370">is</span> <span
  m="1185490">fluctuating.</span> <span m="1187140">Hopefully</span> <span
  m="1187470">this</span> <span m="1187620">is</span> <span
  m="1187740">big</span> <span m="1187980">enough</span> <span
  m="1188130">for</span> <span m="1188340">everybody</span> <span
  m="1188760">to</span> <span m="1188880">see.</span> <span
  m="1190320">So</span> <span m="1192000">this</span> <span
  m="1192200">slider</span> <span m="1192780">that</span> <span
  m="1192930">I'm</span> <span m="1193050">shifting</span> <span
  m="1193560">is</span> <span m="1193650">just</span> <span
  m="1193840">the</span> <span m="1193920">step</span> <span
  m="1194220">size.</span> <span m="1195090">So</span> <span
  m="1195240">let</span> <span m="1195390">me</span> <span
  m="1195480">just</span> <span m="1195720">remind</span> <span
  m="1196170">you,</span> <span m="1196230">in</span> <span
  m="1196320">case</span> <span m="1196590">you</span> <span
  m="1196680">forgot,</span> <span m="1197100">the</span> <span
  m="1197250">iteration.</span> <span m="1198350">We</span> <span
  m="1198660">are</span> <span m="1198780">running</span> <span
  m="1199170">x</span> <span m="1199450">k</span> <span m="1199650">plus</span>
  <span m="1199920">1</span> <span m="1200910">is</span> <span
  m="1201990">x</span> <span m="1202290">k</span> <span m="1202520">minus</span>
  <span m="1202890">some</span> <span m="1203390">eta</span> <span
  m="1203660">k--</span> <span m="1204690">It's</span> <span
  m="1204810">called</span> <span m="1205080">alpha</span> <span
  m="1205410">there--</span> <span m="1206190">times</span> <span
  m="1206790">some</span> <span m="1207960">randomly</span> <span
  m="1208560">chosen</span> <span m="1210300">data</span> <span
  m="1210600">point.</span></p><p><span m="1211840">You</span> <span
  m="1211980">compute</span> <span m="1212370">its</span> <span
  m="1212520">gradient.</span> <span m="1213630">This</span> <span
  m="1213780">is</span> <span m="1214020">SGD.</span> <span
  m="1214920">That's</span> <span m="1215160">what</span> <span
  m="1215340">we</span> <span m="1215390">are</span> <span
  m="1215500">running.</span> <span m="1218110">And</span> <span
  m="1218980">we</span> <span m="1219160">threw</span> <span
  m="1219730">away</span> <span m="1220000">tons</span> <span
  m="1220270">of</span> <span m="1220420">information.</span> <span
  m="1221290">We</span> <span m="1221440">didn't</span> <span
  m="1221710">use</span> <span m="1221890">the</span> <span
  m="1221950">full</span> <span m="1222160">gradient.</span> <span
  m="1222570">We're</span> <span m="1222700">just</span> <span
  m="1222850">using</span> <span m="1223870">this</span> <span
  m="1224410">crude</span> <span m="1226060">gradient.</span></p><p><span
  m="1227000">So</span> <span m="1227020">this</span> <span
  m="1227200">process</span> <span m="1227590">is</span> <span
  m="1227710">very</span> <span m="1228070">sensitive</span> <span
  m="1228670">to</span> <span m="1229270">the</span> <span
  m="1229390">other</span> <span m="1229660">parameter</span> <span
  m="1230140">in</span> <span m="1230230">the</span> <span
  m="1230320">system,</span> <span m="1230710">which</span> <span
  m="1230860">is</span> <span m="1230950">the</span> <span
  m="1231040">step</span> <span m="1231310">size.</span> <span
  m="1232150">Much</span> <span m="1232360">more</span> <span
  m="1232510">sensitive</span> <span m="1232990">than</span> <span
  m="1233140">gradient</span> <span m="1233560">descent,</span> <span
  m="1233980">in</span> <span m="1234070">fact.</span> <span
  m="1234450">And</span> <span m="1234880">let's</span> <span
  m="1235060">see.</span> <span m="1235750">As</span> <span m="1235950">I</span>
  <span m="1236440">vary</span> <span m="1236860">the</span> <span
  m="1236950">step</span> <span m="1237280">size,</span> <span
  m="1237910">see</span> <span m="1238150">if</span> <span
  m="1238240">you</span> <span m="1238330">can</span> <span
  m="1238450">notice</span> <span m="1238810">some</span> <span
  m="1238990">patterns</span> <span m="1239710">on</span> <span
  m="1241750">how</span> <span m="1242440">it</span> <span
  m="1242590">tries</span> <span m="1242920">to</span> <span
  m="1243010">go</span> <span m="1243190">towards</span> <span
  m="1243550">an</span> <span m="1243670">optimum.</span></p><p><span
  m="1259890">There's</span> <span m="1260060">a</span> <span
  m="1260120">zoomed</span> <span m="1260480">in</span> <span
  m="1260600">version,</span> <span m="1261110">also,</span> <span
  m="1261430">of</span> <span m="1261650">this</span> <span
  m="1261910">later,</span> <span m="1262280">here.</span> <span
  m="1265330">I'll</span> <span m="1265580">come</span> <span
  m="1265760">to</span> <span m="1265910">that</span> <span
  m="1266060">shortly.</span> <span m="1268650">I'll</span> <span
  m="1269020">repeat</span> <span m="1269380">again,</span> <span
  m="1269650">and</span> <span m="1269740">then</span> <span
  m="1269890">I'll</span> <span m="1270010">ask</span> <span
  m="1270280">you</span> <span m="1270370">for</span> <span
  m="1270550">your</span> <span m="1270760">observations--</span> <span
  m="1271760">if</span> <span m="1271810">you</span> <span
  m="1271950">notice</span> <span m="1272350">some</span> <span
  m="1272500">patterns.</span> <span m="1275360">I</span> <span
  m="1275450">don't</span> <span m="1275630">know</span> <span
  m="1275690">if</span> <span m="1275780">they're</span> <span
  m="1275900">necessarily</span> <span m="1276350">apparent.</span> <span
  m="1276980">That's</span> <span m="1277160">the</span> <span
  m="1277280">thing</span> <span m="1277490">with</span> <span
  m="1277610">patterns.</span> <span m="1278330">Because</span> <span
  m="1278510">I</span> <span m="1278570">know</span> <span
  m="1278780">the</span> <span m="1278900">answer,</span> <span
  m="1279240">so</span> <span m="1279400">I</span> <span m="1279500">see</span>
  <span m="1279680">the</span> <span m="1279770">pattern.</span> <span
  m="1280730">If</span> <span m="1280820">you</span> <span
  m="1280910">don't</span> <span m="1281060">know</span> <span
  m="1281210">the</span> <span m="1281270">answer,</span> <span
  m="1281660">you</span> <span m="1281750">may</span> <span
  m="1281930">or</span> <span m="1282020">may</span> <span
  m="1282140">not</span> <span m="1282320">see</span> <span
  m="1282470">the</span> <span m="1282560">pattern.</span> <span
  m="1282890">But</span> <span m="1283070">I</span> <span
  m="1283550">want</span> <span m="1283700">to</span> <span
  m="1283760">see</span> <span m="1283970">if</span> <span
  m="1284060">you</span> <span m="1284180">actually</span> <span
  m="1284510">see</span> <span m="1284750">the</span> <span
  m="1285050">pattern</span> <span m="1285470">as</span> <span
  m="1285590">I</span> <span m="1286370">change</span> <span
  m="1286670">the</span> <span m="1286760">step</span> <span
  m="1287030">size.</span></p><p><span m="1288480">So</span> <span
  m="1289950">maybe</span> <span m="1290190">that</span> <span
  m="1290310">was</span> <span m="1290460">enough</span> <span
  m="1290640">simulation.</span> <span m="1291330">Anybody</span> <span
  m="1291720">have</span> <span m="1291900">any</span> <span
  m="1292050">comments</span> <span m="1292470">on</span> <span
  m="1292590">what</span> <span m="1292740">kind</span> <span
  m="1292920">of</span> <span m="1292980">pattern</span> <span
  m="1293370">you</span> <span m="1293430">may</span> <span
  m="1293550">have</span> <span m="1293700">observed?</span> <span
  m="1294780">Yep.</span></p><p><span m="1295340">AUDIENCE:</span> <span
  m="1295405">It</span> <span m="1295470">seems</span> <span
  m="1295680">like</span> <span m="1295830">the</span> <span
  m="1296460">clustering</span> <span m="1297000">in</span> <span
  m="1297060">the</span> <span m="1297150">middle</span> <span
  m="1297420">is</span> <span m="1297570">getting</span> <span
  m="1298200">larger</span> <span m="1298680">and</span> <span
  m="1298920">more</span> <span m="1299100">widespread.</span></p><p><span
  m="1299880">PROFESSOR SRA:</span> <span m="1300000">Yeah,</span> <span
  m="1300490">definitely.</span> <span m="1300960">That's</span> <span
  m="1301330">a</span> <span m="1301470">great</span> <span
  m="1301710">observation.</span> <span m="1303060">Any</span> <span
  m="1303240">other</span> <span m="1303510">comments?</span></p><p><span
  m="1309790">There's</span> <span m="1310000">one</span> <span
  m="1310180">more</span> <span m="1310390">interesting</span> <span
  m="1310840">thing</span> <span m="1311020">happening</span> <span
  m="1311470">here,</span> <span m="1312760">which</span> <span
  m="1312940">is</span> <span m="1313060">a</span> <span
  m="1313150">very,</span> <span m="1313760">very</span> <span
  m="1313930">typical</span> <span m="1314500">thing</span> <span
  m="1315340">for</span> <span m="1315610">SGD,</span> <span
  m="1316670">and</span> <span m="1316840">one</span> <span
  m="1316990">of</span> <span m="1317080">the</span> <span
  m="1317170">reasons</span> <span m="1317560">why</span> <span
  m="1317680">people</span> <span m="1317980">love</span> <span
  m="1318280">SGD.</span> <span m="1319900">Let</span> <span
  m="1320590">me</span> <span m="1320710">do</span> <span
  m="1320800">that</span> <span m="1320980">once</span> <span
  m="1321250">again</span> <span m="1321490">briefly.</span> <span
  m="1323540">OK,</span> <span m="1323790">this</span> <span
  m="1323940">is</span> <span m="1324090">tiny</span> <span
  m="1324390">step</span> <span m="1324630">size--</span> <span
  m="1325710">almost</span> <span m="1325980">zero.</span> <span
  m="1327000">Close</span> <span m="1327240">to</span> <span
  m="1327330">zero--</span> <span m="1327550">it's</span> <span
  m="1327650">not</span> <span m="1327840">exactly</span> <span
  m="1328260">zero.</span></p><p><span m="1330970">So</span> <span
  m="1331090">you</span> <span m="1331210">see</span> <span
  m="1331390">what</span> <span m="1331540">happens</span> <span
  m="1331810">for</span> <span m="1331960">a</span> <span
  m="1332020">very</span> <span m="1332290">tiny</span> <span
  m="1332560">step</span> <span m="1332800">size?</span> <span
  m="1334730">It</span> <span m="1334800">doesn't</span> <span
  m="1335070">look</span> <span m="1335250">that</span> <span
  m="1335430">stochastic,</span> <span m="1336090">right?</span> <span
  m="1336930">But</span> <span m="1337050">that's</span> <span
  m="1337230">kind</span> <span m="1337380">of</span> <span
  m="1337500">obvious</span> <span m="1337890">from</span> <span
  m="1338130">there</span> <span m="1338880">if</span> <span
  m="1339050">eta</span> <span m="1339140">k</span> <span m="1339600">is</span>
  <span m="1339750">very</span> <span m="1339990">tiny,</span> <span
  m="1341040">you'll</span> <span m="1341200">hardly</span> <span
  m="1341610">make</span> <span m="1341880">any</span> <span
  m="1343260">move.</span> <span m="1344460">So</span> <span
  m="1345180">things</span> <span m="1345510">will</span> <span
  m="1345600">look</span> <span m="1345780">very</span> <span
  m="1345990">stable.</span> <span m="1348180">And</span> <span
  m="1348210">in</span> <span m="1348330">fact,</span> <span
  m="1348570">the</span> <span m="1348660">speed</span> <span
  m="1349020">at</span> <span m="1349110">which</span> <span
  m="1349230">stochastic</span> <span m="1349710">gradient</span> <span
  m="1350040">converges,</span> <span m="1351240">that's</span> <span
  m="1351630">extremely</span> <span m="1352110">sensitive</span> <span
  m="1352560">to</span> <span m="1352680">how</span> <span
  m="1352800">you</span> <span m="1352920">pick</span> <span
  m="1353070">the</span> <span m="1353160">step</span> <span
  m="1353410">size.</span> <span m="1354190">It's</span> <span
  m="1354430">still</span> <span m="1354660">an</span> <span
  m="1354780">open</span> <span m="1355050">research</span> <span
  m="1355380">problem</span> <span m="1355740">to</span> <span
  m="1355830">come</span> <span m="1356010">up</span> <span
  m="1356050">with</span> <span m="1356180">the</span> <span
  m="1356250">best</span> <span m="1356520">way</span> <span
  m="1356640">to</span> <span m="1356730">pick</span> <span
  m="1356910">step</span> <span m="1357150">sizes.</span> <span
  m="1357740">So</span> <span m="1357870">it's</span> <span
  m="1358500">even</span> <span m="1358710">that</span> <span
  m="1358860">simple,</span> <span m="1359160">it</span> <span
  m="1359460">doesn't</span> <span m="1359730">mean</span> <span
  m="1359910">it's</span> <span m="1360060">trivial.</span></p><p><span
  m="1361570">And</span> <span m="1361810">as</span> <span m="1361990">I</span>
  <span m="1362050">vary</span> <span m="1362350">the</span> <span
  m="1362470">step</span> <span m="1362740">size,</span> <span
  m="1363520">it</span> <span m="1363700">make</span> <span
  m="1363940">some</span> <span m="1364120">progress,</span> <span
  m="1367220">and</span> <span m="1367340">it</span> <span
  m="1367790">goes</span> <span m="1368240">towards</span> <span
  m="1368600">the</span> <span m="1368690">solution.</span> <span
  m="1369650">Are</span> <span m="1369860">you</span> <span
  m="1369980">now</span> <span m="1370130">beginning</span> <span
  m="1370490">to</span> <span m="1370610">see</span> <span
  m="1370850">that</span> <span m="1371030">it</span> <span
  m="1371150">seems</span> <span m="1371480">to</span> <span
  m="1371600">be</span> <span m="1371690">making</span> <span
  m="1372720">a</span> <span m="1372830">more</span> <span
  m="1373190">stable</span> <span m="1373700">progress</span> <span
  m="1374210">in</span> <span m="1374300">the</span> <span
  m="1374390">beginning?</span> <span m="1375140">And</span> <span
  m="1375350">when</span> <span m="1375530">it</span> <span
  m="1376670">comes</span> <span m="1376970">close</span> <span
  m="1377420">to</span> <span m="1377630">the</span> <span
  m="1377780">solution,</span> <span m="1378770">it's</span> <span
  m="1378920">fluctuating</span> <span m="1379700">more.</span> <span
  m="1381430">And</span> <span m="1382030">the</span> <span
  m="1382180">bigger</span> <span m="1382600">the</span> <span
  m="1382720">step</span> <span m="1382990">size,</span> <span
  m="1385180">the</span> <span m="1385390">amount</span> <span
  m="1385780">of</span> <span m="1385840">fluctuation</span> <span
  m="1386470">near</span> <span m="1386740">the</span> <span
  m="1386860">solution</span> <span m="1387550">is</span> <span
  m="1388040">wilder</span> <span m="1388870">as</span> <span
  m="1390190">he</span> <span m="1390340">noticed</span> <span
  m="1390700">back</span> <span m="1390940">there.</span></p><p><span
  m="1392080">But</span> <span m="1392260">one</span> <span
  m="1393190">very</span> <span m="1393520">interesting</span> <span
  m="1394030">thing</span> <span m="1394330">is</span> <span
  m="1394450">more</span> <span m="1394750">or</span> <span
  m="1394810">less</span> <span m="1396490">constant.</span> <span
  m="1397090">There</span> <span m="1397300">is</span> <span
  m="1397450">more</span> <span m="1397690">fluctuation</span> <span
  m="1398350">also</span> <span m="1398560">on</span> <span
  m="1398650">the</span> <span m="1398770">outside,</span> <span
  m="1399550">but</span> <span m="1399730">you</span> <span
  m="1399820">see</span> <span m="1399970">that</span> <span
  m="1400150">the</span> <span m="1400270">initial</span> <span
  m="1400780">part</span> <span m="1401590">still</span> <span
  m="1401890">seems</span> <span m="1402220">to</span> <span
  m="1402340">be</span> <span m="1402430">making</span> <span
  m="1402700">pretty</span> <span m="1402970">good</span> <span
  m="1403120">progress.</span> <span m="1404230">And</span> <span
  m="1404350">as</span> <span m="1404500">you</span> <span
  m="1404560">come</span> <span m="1404740">close</span> <span
  m="1405130">to</span> <span m="1405220">the</span> <span
  m="1405340">solution,</span> <span m="1405970">it</span> <span
  m="1406090">fluctuates</span> <span m="1406720">more.</span> <span
  m="1407650">And</span> <span m="1407800">that</span> <span
  m="1408100">is</span> <span m="1408370">a</span> <span m="1408460">very</span>
  <span m="1408850">principally</span> <span m="1409540">typical</span> <span
  m="1409990">behavior</span> <span m="1410530">of</span> <span
  m="1410620">stochastic</span> <span m="1411190">gradient</span> <span
  m="1411580">descent,</span> <span m="1412480">that</span> <span
  m="1412780">in</span> <span m="1412930">the</span> <span
  m="1413050">beginning,</span> <span m="1415620">it</span> <span
  m="1415740">makes</span> <span m="1416100">rapid</span> <span
  m="1416490">strides.</span> <span m="1417690">So</span> <span
  m="1417840">you</span> <span m="1417960">may</span> <span
  m="1418080">see</span> <span m="1418290">your</span> <span
  m="1418410">training</span> <span m="1418830">loss</span> <span
  m="1419700">decrease</span> <span m="1421120">super</span> <span
  m="1421460">fast</span> <span m="1421800">and</span> <span
  m="1421920">then</span> <span m="1422220">kind</span> <span
  m="1422460">of</span> <span m="1423780">peter</span> <span
  m="1424140">out.</span></p><p><span m="1426620">And</span> <span
  m="1426800">it's</span> <span m="1426980">this</span> <span
  m="1427340">particular</span> <span m="1427880">behavior</span> <span
  m="1428450">which</span> <span m="1428660">guard</span> <span
  m="1428870">people</span> <span m="1429170">super</span> <span
  m="1429500">excited,</span> <span m="1429980">that,</span> <span
  m="1430160">hey,</span> <span m="1431360">in</span> <span
  m="1431480">machine</span> <span m="1431750">learning,</span> <span
  m="1432140">we are</span> <span m="1432350">working</span> <span
  m="1432710">with</span> <span m="1432890">all</span> <span
  m="1433040">sorts</span> <span m="1433310">of</span> <span
  m="1433400">big</span> <span m="1433610">data.</span> <span
  m="1434660">I</span> <span m="1434750">just</span> <span
  m="1434930">want</span> <span m="1435110">a</span> <span
  m="1435140">quick</span> <span m="1435410">and</span> <span
  m="1435530">dirty</span> <span m="1435800">progress</span> <span
  m="1436400">on</span> <span m="1436640">my</span> <span
  m="1437840">training.</span> <span m="1439040">I</span> <span
  m="1439130">don't</span> <span m="1439340">care</span> <span
  m="1439640">about</span> <span m="1439940">getting</span> <span
  m="1440270">to</span> <span m="1440480">the</span> <span
  m="1440810">best</span> <span m="1441200">optimum.</span> <span
  m="1442860">Because</span> <span m="1443340">in</span> <span
  m="1443460">machine</span> <span m="1443760">learning,</span> <span
  m="1444060">you</span> <span m="1444180">don't</span> <span
  m="1444570">just</span> <span m="1444930">care</span> <span
  m="1445170">about</span> <span m="1445440">solving</span> <span
  m="1445860">the</span> <span m="1445950">optimization</span> <span
  m="1446670">problem,</span> <span m="1447030">you</span> <span
  m="1447090">actually</span> <span m="1447450">care</span> <span
  m="1447690">about</span> <span m="1449100">finding</span> <span
  m="1449640">solutions</span> <span m="1450180">that</span> <span
  m="1450390">work</span> <span m="1450720">well</span> <span
  m="1450960">on</span> <span m="1451140">unseen</span> <span
  m="1451560">data.</span></p><p><span m="1452560">So</span> <span
  m="1452580">that</span> <span m="1452730">means</span> <span
  m="1452970">you</span> <span m="1453030">don't</span> <span
  m="1453240">want</span> <span m="1453420">to</span> <span
  m="1453570">over</span> <span m="1453850">fit</span> <span
  m="1454200">and</span> <span m="1454320">solve</span> <span
  m="1455100">the</span> <span m="1455280">optimization</span> <span
  m="1456030">problem</span> <span m="1456390">supremely</span> <span
  m="1456960">well.</span> <span m="1457740">So</span> <span
  m="1457790">it's</span> <span m="1457950">great</span> <span
  m="1458430">to</span> <span m="1458580">make</span> <span
  m="1458970">rapid</span> <span m="1459390">initial</span> <span
  m="1459750">progress.</span> <span m="1460320">And</span> <span
  m="1460470">if</span> <span m="1460770">after</span> <span
  m="1461070">that</span> <span m="1461280">progress</span> <span
  m="1461760">peters</span> <span m="1462150">out,</span> <span
  m="1462810">it's</span> <span m="1463080">OK.</span> <span
  m="1464910">This</span> <span m="1465300">intuitionistic</span> <span
  m="1466440">statement</span> <span m="1466950">that</span> <span
  m="1467100">I'm</span> <span m="1467160">making,</span> <span
  m="1468540">in</span> <span m="1468720">some</span> <span
  m="1468960">nice</span> <span m="1469350">cases</span> <span
  m="1469800">like</span> <span m="1469980">convex</span> <span
  m="1470460">optimization</span> <span m="1471150">problems,</span> <span
  m="1471600">one</span> <span m="1471780">can</span> <span
  m="1471960">mathematically</span> <span m="1472680">fully</span> <span
  m="1472920">quantify</span> <span m="1473560">these.</span> <span
  m="1474120">One</span> <span m="1474300">can</span> <span
  m="1474450">prove</span> <span m="1474690">theorems</span> <span
  m="1475200">to</span> <span m="1475770">quantify</span> <span
  m="1476340">each</span> <span m="1476820">thing</span> <span
  m="1477060">that</span> <span m="1477240">I</span> <span
  m="1477300">said</span> <span m="1478350">in</span> <span
  m="1478470">terms</span> <span m="1478740">of</span> <span
  m="1478860">how</span> <span m="1479070">close,</span> <span
  m="1479430">how</span> <span m="1479610">fast,</span> <span
  m="1480000">and</span> <span m="1480090">so</span> <span
  m="1480330">on.</span> <span m="1480750">We'll</span> <span
  m="1480900">see</span> <span m="1481080">a</span> <span
  m="1481110">little</span> <span m="1481320">bit</span> <span
  m="1481470">of</span> <span m="1481590">that.</span></p><p><span
  m="1483150">And</span> <span m="1484260">this</span> <span
  m="1484440">is</span> <span m="1484530">what</span> <span
  m="1484740">really</span> <span m="1484950">happens</span> <span
  m="1485250">to</span> <span m="1485400">SGD.</span> <span
  m="1486240">It</span> <span m="1486360">makes</span> <span
  m="1486690">great</span> <span m="1486990">initial</span> <span
  m="1487350">progress,</span> <span m="1488550">and</span> <span
  m="1489900">regardless</span> <span m="1490500">of</span> <span
  m="1491310">how</span> <span m="1491550">you</span> <span
  m="1491670">use</span> <span m="1491880">step</span> <span
  m="1492180">sizes,</span> <span m="1493290">close</span> <span
  m="1493620">to</span> <span m="1493710">the</span> <span
  m="1493830">optimum</span> <span m="1494370">it</span> <span
  m="1494490">can</span> <span m="1494700">either</span> <span
  m="1495210">get</span> <span m="1495480">stuck,</span> <span
  m="1495990">or</span> <span m="1496140">enter</span> <span
  m="1496620">some</span> <span m="1496860">kind</span> <span
  m="1497040">of</span> <span m="1497100">chaos</span> <span
  m="1497490">dynamics,</span> <span m="1498090">or</span> <span
  m="1498180">just</span> <span m="1498360">behave</span> <span
  m="1498690">like</span> <span m="1498840">crazy.</span> <span
  m="1500560">So</span> <span m="1500710">that's</span> <span
  m="1500950">typical</span> <span m="1501400">of</span> <span
  m="1501520">SGD.</span></p><p><span m="1503650">And</span> <span
  m="1503920">let's</span> <span m="1504610">look</span> <span
  m="1504880">at</span> <span m="1505180">now</span> <span
  m="1505360">slight</span> <span m="1505780">mathematical</span> <span
  m="1506560">insight</span> <span m="1507640">into</span> <span
  m="1510280">roughly</span> <span m="1510730">why</span> <span
  m="1511060">this</span> <span m="1511270">behavior</span> <span
  m="1511750">may</span> <span m="1511870">happen.</span> <span
  m="1513330">This</span> <span m="1513510">is</span> <span m="1514320">a</span>
  <span m="1514380">trivial,</span> <span m="1515070">one-dimensional</span>
  <span m="1516330">optimization</span> <span m="1517140">problem,</span> <span
  m="1518130">but</span> <span m="1518310">it</span> <span
  m="1518430">conveys</span> <span m="1519180">the</span> <span
  m="1519360">crux</span> <span m="1519870">of</span> <span
  m="1520350">why</span> <span m="1520740">this</span> <span
  m="1520950">behavior</span> <span m="1521520">is</span> <span
  m="1521640">displayed</span> <span m="1522180">by</span> <span
  m="1522330">stochastic</span> <span m="1523080">gradient</span> <span
  m="1523500">methods.</span> <span m="1523950">That</span> <span
  m="1524130">it</span> <span m="1524400">works</span> <span
  m="1524820">really</span> <span m="1525060">well</span> <span
  m="1525420">in</span> <span m="1525570">the</span> <span
  m="1525660">beginning,</span> <span m="1526470">and</span> <span
  m="1526560">then,</span> <span m="1527300">God</span> <span
  m="1527510">knows</span> <span m="1527700">what</span> <span
  m="1527850">happens</span> <span m="1528150">when</span> <span
  m="1528300">it</span> <span m="1528390">comes</span> <span
  m="1528660">close</span> <span m="1528900">to</span> <span
  m="1529020">the</span> <span m="1529080">optimum,</span> <span
  m="1529500">anything</span> <span m="1529830">can</span> <span
  m="1529980">happen.</span> <span m="1531120">So</span> <span
  m="1531240">let's</span> <span m="1531450">look</span> <span
  m="1531660">at</span> <span m="1531720">that.</span></p><p><span
  m="1538400">OK.</span> <span m="1539470">So</span> <span
  m="1540790">let's</span> <span m="1540970">look</span> <span
  m="1541180">at</span> <span m="1541450">a</span> <span
  m="1541510">simple,</span> <span m="1542080">one-dimensional</span> <span
  m="1542860">optimization</span> <span m="1543610">problem.</span> <span
  m="1544720">I'll</span> <span m="1545140">kind of</span> <span
  m="1545470">draw</span> <span m="1545830">it</span> <span
  m="1545950">out</span> <span m="1546310">maybe</span> <span
  m="1546610">on</span> <span m="1546730">the</span> <span
  m="1547090">other</span> <span m="1547330">side</span> <span
  m="1548140">so</span> <span m="1548290">that</span> <span
  m="1549250">people</span> <span m="1549550">on</span> <span
  m="1549640">this</span> <span m="1549760">side</span> <span
  m="1550030">are</span> <span m="1550090">not</span> <span
  m="1550300">disadvantaged.</span> <span m="1552490">So</span> <span
  m="1552610">I'll</span> <span m="1552730">just</span> <span
  m="1553540">draw</span> <span m="1553900">out</span> <span
  m="1556330">at</span> <span m="1556420">least</span> <span
  m="1556660">squares</span> <span m="1557020">problem--</span> <span
  m="1557830">x</span> <span m="1558340">is</span> <span m="1558550">one</span>
  <span m="1558730">dimensional.</span> <span m="1559960">Previously,</span>
  <span m="1560500">I</span> <span m="1560560">had</span> <span
  m="1560830">ai</span> <span m="1561070">transpose</span> <span
  m="1561580">x</span> <span m="1561940">Now,</span> <span m="1562180">ai</span>
  <span m="1562400">is</span> <span m="1562540">also</span> <span
  m="1562810">a</span> <span m="1562870">scalar.</span> <span
  m="1563610">So</span> <span m="1563760">it's</span> <span
  m="1563820">just</span> <span m="1564940">1D</span> <span
  m="1565570">stuff--</span> <span m="1566860">everything</span> <span
  m="1567220">is</span> <span m="1567340">1D</span></p><p><span
  m="1568780">So</span> <span m="1571390">this</span> <span
  m="1571600">is</span> <span m="1572110">our</span> <span
  m="1572410">setup.</span> <span m="1573490">Think</span> <span
  m="1573870">of</span> <span m="1575100">ai</span> <span
  m="1575470">into</span> <span m="1575830">x</span> <span
  m="1576160">minus</span> <span m="1576550">b</span> <span
  m="1576820">i.</span> <span m="1578530">These</span> <span
  m="1578710">are</span> <span m="1578800">quadratic</span> <span
  m="1579400">functions,</span> <span m="1580870">so</span> <span
  m="1581560">they</span> <span m="1581740">look</span> <span
  m="1581980">like</span> <span m="1583510">this.</span> <span
  m="1585060">Corresponding</span> <span m="1585630">to</span> <span
  m="1585750">different</span> <span m="1586140">eyes,</span> <span
  m="1586500">there's</span> <span m="1586740">like</span> <span
  m="1586950">some</span> <span m="1587160">different</span> <span
  m="1587520">functions</span> <span m="1588000">sitting</span> <span
  m="1590970">and</span> <span m="1591120">so</span> <span
  m="1591360">on.</span></p><p><span m="1594960">So</span> <span
  m="1595970">these</span> <span m="1596180">are</span> <span
  m="1596300">my</span> <span m="1596720">n</span> <span
  m="1597290">different</span> <span m="1599030">loss</span> <span
  m="1599360">functions,</span> <span m="1603080">and</span> <span
  m="1605930">I</span> <span m="1605990">want</span> <span m="1606170">to</span>
  <span m="1606290">minimize</span> <span m="1606890">those.</span> <span
  m="1612410">We</span> <span m="1612560">know--</span> <span
  m="1612890">we</span> <span m="1613040">can</span> <span
  m="1613220">actually</span> <span m="1613730">explicitly</span> <span
  m="1614420">compute</span> <span m="1615140">the</span> <span
  m="1615260">solution</span> <span m="1615800">of</span> <span
  m="1615890">that</span> <span m="1616040">problem.</span> <span
  m="1618470">So</span> <span m="1619340">you</span> <span
  m="1619490">set</span> <span m="1619730">the</span> <span
  m="1619850">derivative</span> <span m="1620390">of</span> <span
  m="1620510">f</span> <span m="1620660">of</span> <span m="1620780">x</span>
  <span m="1621020">to</span> <span m="1621140">0</span> <span
  m="1621920">so.</span> <span m="1623000">You</span> <span
  m="1623060">set</span> <span m="1623280">the</span> <span
  m="1623390">gradient</span> <span m="1623810">of</span> <span
  m="1623930">f</span> <span m="1624080">of</span> <span m="1624200">x</span>
  <span m="1624380">to</span> <span m="1624500">0.</span> <span
  m="1625410">Hopefully,</span> <span m="1626630">that's</span> <span
  m="1626960">easy</span> <span m="1627260">for</span> <span
  m="1627440">you</span> <span m="1627650">to</span> <span
  m="1627770">do.</span></p><p><span m="1629720">So</span> <span
  m="1629840">if</span> <span m="1629900">you</span> <span m="1629990">do</span>
  <span m="1630170">that</span> <span m="1630320">differentiation,</span> <span
  m="1631530">will</span> <span m="1631760">get</span> <span
  m="1631970">gradient</span> <span m="1632510">of</span> <span
  m="1632750">f</span> <span m="1632930">of</span> <span m="1633110">x</span>
  <span m="1634210">will</span> <span m="1634590">just</span> <span
  m="1634940">given</span> <span m="1635240">by.</span> <span
  m="1636860">Well,</span> <span m="1637700">you</span> <span
  m="1637970">can</span> <span m="1638150">do</span> <span
  m="1638240">that</span> <span m="1638450">in</span> <span
  m="1638540">your</span> <span m="1638690">head,</span> <span
  m="1638900">I'll</span> <span m="1639020">just</span> <span
  m="1639200">write</span> <span m="1639410">it</span> <span
  m="1639530">out</span> <span m="1639860">explicitly.</span> <span
  m="1640335">aix</span> <span m="1641780">minus</span> <span
  m="1642570">bi</span> <span m="1644180">times</span> <span
  m="1646256">ai</span> <span m="1647090">Is</span> <span
  m="1647360">equal</span> <span m="1647690">to</span> <span
  m="1647840">zero,</span> <span m="1648440">and</span> <span
  m="1648560">you</span> <span m="1648650">solve</span> <span
  m="1649010">that</span> <span m="1649580">for</span> <span
  m="1649850">x.</span> <span m="1650660">You</span> <span
  m="1650690">get</span> <span m="1650900">x</span> <span
  m="1651230">star,</span> <span m="1652430">the</span> <span
  m="1652940">optimum</span> <span m="1653720">of</span> <span
  m="1653960">this</span> <span m="1654230">least</span> <span
  m="1654500">squares</span> <span m="1654860">problem.</span> <span
  m="1656090">So</span> <span m="1656240">we</span> <span
  m="1656390">actually</span> <span m="1656690">know</span> <span
  m="1656840">how</span> <span m="1656990">to</span> <span
  m="1657110">solve</span> <span m="1657440">it</span> <span
  m="1657530">pretty</span> <span m="1657740">easily.</span></p><p><span
  m="1663950">That's</span> <span m="1663990">a</span> <span
  m="1664020">really</span> <span m="1664230">cool</span> <span
  m="1664470">example</span> <span m="1664920">actually.</span> <span
  m="1665280">I</span> <span m="1665370">got</span> <span
  m="1665610">that</span> <span m="1665850">from</span> <span
  m="1666730">textbook</span> <span m="1667410">by</span> <span
  m="1667720">Professor</span> <span m="1668160">Dimitry</span> <span
  m="1668520">[INAUDIBLE].</span> <span m="1670850">Now,</span> <span
  m="1671330">a</span> <span m="1671390">very</span> <span
  m="1671660">interesting</span> <span m="1672080">thing.</span> <span
  m="1673600">We</span> <span m="1673850">are</span> <span
  m="1673940">not</span> <span m="1674150">going</span> <span
  m="1674330">to</span> <span m="1674420">use</span> <span
  m="1674570">the</span> <span m="1674660">full</span> <span
  m="1674900">gradient,</span> <span m="1675410">we</span> <span
  m="1675490">are</span> <span m="1675610">only</span> <span
  m="1676250">going</span> <span m="1676490">to</span> <span
  m="1676610">use</span> <span m="1677000">the</span> <span
  m="1677150">gradients</span> <span m="1677780">of</span> <span
  m="1677930">individual</span> <span m="1678500">components.</span> <span
  m="1680000">So</span> <span m="1680480">what</span> <span
  m="1680780">does</span> <span m="1681080">the</span> <span
  m="1681200">minimum</span> <span m="1682760">of</span> <span
  m="1682860">an</span> <span m="1683060">individual</span> <span
  m="1683720">component</span> <span m="1684290">look</span> <span
  m="1684500">like?</span></p><p><span m="1685610">Well,</span> <span
  m="1685730">the</span> <span m="1685820">minimum</span> <span
  m="1686180">of</span> <span m="1686320">an</span> <span
  m="1686450">individual</span> <span m="1686930">component</span> <span
  m="1687500">is</span> <span m="1687980">attained</span> <span
  m="1688430">when</span> <span m="1688640">we</span> <span
  m="1688730">can</span> <span m="1688940">set</span> <span
  m="1689210">this</span> <span m="1689420">thing</span> <span
  m="1689600">to</span> <span m="1689720">0.</span> <span m="1691070">And</span>
  <span m="1691160">that</span> <span m="1691340">thing</span> <span
  m="1691610">becomes</span> <span m="1691940">0</span> <span
  m="1692570">if</span> <span m="1692680">we</span> <span
  m="1692750">just</span> <span m="1692930">pick</span> <span
  m="1693140">x</span> <span m="1693440">equal</span> <span
  m="1693740">to</span> <span m="1695190">bi</span> <span
  m="1695550">divided</span> <span m="1695970">by</span> <span
  m="1696180">ai,</span> <span m="1696470">right?</span> <span
  m="1698050">So</span> <span m="1698410">a</span> <span
  m="1698440">single</span> <span m="1698800">component</span> <span
  m="1700180">can</span> <span m="1700390">be</span> <span
  m="1700510">minimized</span> <span m="1700930">by</span> <span
  m="1701050">that</span> <span m="1701230">choice.</span></p><p><span
  m="1704640">So</span> <span m="1706370">you</span> <span
  m="1706460">can</span> <span m="1706640">do</span> <span m="1706790">a</span>
  <span m="1706850">little</span> <span m="1707120">bit</span> <span
  m="1707270">of</span> <span m="1707420">arithmetic</span> <span
  m="1707960">mean,</span> <span m="1708170">geometric</span> <span
  m="1708650">mean</span> <span m="1708860">type</span> <span
  m="1709150">inequalities</span> <span m="1710420">to</span> <span
  m="1710960">draw</span> <span m="1711230">this</span> <span
  m="1711440">picture.</span> <span m="1717520">So</span> <span
  m="1717730">over</span> <span m="1718000">all</span> <span
  m="1718640">i</span> <span m="1719090">from</span> <span m="1719300">1</span>
  <span m="1719480">through</span> <span m="1719690">n,</span> <span
  m="1720620">this</span> <span m="1720800">is</span> <span
  m="1720890">the</span> <span m="1720980">minimum</span> <span
  m="1721400">value</span> <span m="1721760">of</span> <span
  m="1721880">this</span> <span m="1722060">ratio,</span> <span
  m="1724320">ai</span> <span m="1724710">by</span> <span m="1724890">bi.</span>
  <span m="1726290">And</span> <span m="1726470">let's</span> <span
  m="1726680">say</span> <span m="1726860">this</span> <span
  m="1727040">is</span> <span m="1727130">the</span> <span
  m="1727250">max</span> <span m="1727700">value</span> <span
  m="1731360">of</span> <span m="1732200">ai</span> <span m="1732500">by</span>
  <span m="1732710">bi.</span></p><p><span m="1735200">And</span> <span
  m="1736280">we</span> <span m="1736430">know</span> <span
  m="1736670">that</span> <span m="1736880">closed</span> <span
  m="1737270">form</span> <span m="1737540">solution,</span> <span
  m="1738500">that</span> <span m="1738710">is</span> <span
  m="1738800">the</span> <span m="1738920">true</span> <span
  m="1739130">solution.</span> <span m="1741050">So</span> <span
  m="1741170">you</span> <span m="1741290">can</span> <span
  m="1741470">verify</span> <span m="1742050">with</span> <span
  m="1742220">some</span> <span m="1742880">algebra</span> <span
  m="1743950">that</span> <span m="1744140">that</span> <span
  m="1744350">solution</span> <span m="1745520">will</span> <span
  m="1745700">lie</span> <span m="1746300">in</span> <span
  m="1746480">this</span> <span m="1746720">interval.</span> <span
  m="1749010">So</span> <span m="1751310">you</span> <span
  m="1751810">may</span> <span m="1751930">want</span> <span
  m="1752170">to--</span> <span m="1753130">this</span> <span
  m="1753310">is</span> <span m="1753430">a</span> <span m="1754060">tiny</span>
  <span m="1754450">exercise</span> <span m="1755050">for</span> <span
  m="1755260">you.</span> <span m="1757220">Hopefully</span> <span
  m="1757580">some</span> <span m="1757760">of</span> <span
  m="1757880">you</span> <span m="1757970">love</span> <span
  m="1758190">inequalities</span> <span m="1758900">like</span> <span
  m="1759140">me.</span> <span m="1759380">So</span> <span
  m="1759800">this</span> <span m="1760010">is</span> <span
  m="1760190">hopefully</span> <span m="1761090">not</span> <span
  m="1761270">such</span> <span m="1761450">a</span> <span
  m="1761510">bad</span> <span m="1761720">exercise.</span> <span
  m="1762590">But</span> <span m="1762710">you</span> <span
  m="1762800">can</span> <span m="1762950">verify</span> <span
  m="1763460">that</span> <span m="1764300">within</span> <span
  m="1764630">this</span> <span m="1764900">range</span> <span
  m="1766220">of</span> <span m="1766370">the</span> <span
  m="1766490">individual</span> <span m="1767150">mins</span> <span
  m="1767510">and</span> <span m="1767630">max</span> <span
  m="1768170">is</span> <span m="1768290">where</span> <span
  m="1768560">the</span> <span m="1768680">combined</span> <span
  m="1769100">solution</span> <span m="1769550">lies.</span> <span
  m="1769860">So</span> <span m="1769990">of</span> <span
  m="1770090">course,</span> <span m="1770300">intuitively,</span> <span
  m="1770900">with</span> <span m="1771050">a</span> <span
  m="1771140">physics</span> <span m="1771680">styles</span> <span
  m="1771890">thinking,</span> <span m="1772220">you</span> <span
  m="1772280">would</span> <span m="1772370">have</span> <span
  m="1772460">guessed</span> <span m="1772730">that</span> <span
  m="1773000">right</span> <span m="1773210">away.</span></p><p><span
  m="1777380">That</span> <span m="1777530">means</span> <span
  m="1777800">when</span> <span m="1777950">you're</span> <span
  m="1778280">outside</span> <span m="1779360">where</span> <span
  m="1779570">the</span> <span m="1779720">individual</span> <span
  m="1780260">solutions,</span> <span m="1781350">let's</span> <span
  m="1781520">call</span> <span m="1781790">this</span> <span
  m="1781940">the</span> <span m="1782060">far</span> <span
  m="1782630">out</span> <span m="1782990">zone.</span> <span
  m="1786170">And</span> <span m="1786350">also,</span> <span
  m="1786680">this</span> <span m="1786860">side</span> <span
  m="1787190">is</span> <span m="1787300">the</span> <span
  m="1787370">far</span> <span m="1787760">out</span> <span
  m="1788000">zone.</span> <span m="1789320">And</span> <span
  m="1789800">this</span> <span m="1790280">region,</span> <span
  m="1791000">within</span> <span m="1791300">which</span> <span
  m="1791510">the</span> <span m="1791660">true</span> <span
  m="1791870">minimum</span> <span m="1792290">can</span> <span
  m="1792470">lie,</span> <span m="1793190">you</span> <span
  m="1793310">can</span> <span m="1793730">say,</span> <span
  m="1794330">OK,</span> <span m="1794510">that's</span> <span
  m="1794720">the</span> <span m="1794810">region</span> <span
  m="1795200">of</span> <span m="1795320">confusion.</span></p><p><span
  m="1798710">Why</span> <span m="1799030">I'm</span> <span
  m="1799450">calling</span> <span m="1799780">it</span> <span
  m="1799870">the</span> <span m="1800230">region</span> <span
  m="1800590">of</span> <span m="1800680">confusion?</span> <span
  m="1801550">Because</span> <span m="1801880">there,</span> <span
  m="1802720">by</span> <span m="1802900">minimizing</span> <span
  m="1803650">an</span> <span m="1803800">individual</span> <span
  m="1804570">fi,</span> <span m="1805420">you're</span> <span
  m="1805570">not</span> <span m="1805840">going</span> <span
  m="1806080">to</span> <span m="1806200">be</span> <span
  m="1806320">able</span> <span m="1806530">to</span> <span
  m="1806680">tell</span> <span m="1807520">what</span> <span
  m="1807730">is</span> <span m="1807880">the</span> <span
  m="1808750">combined</span> <span m="1809260">x</span> <span
  m="1809500">star.</span> <span m="1809860">That's</span> <span
  m="1810130">all.</span> <span m="1812210">And</span> <span
  m="1812990">a</span> <span m="1813050">very</span> <span
  m="1813260">interesting</span> <span m="1813710">thing</span> <span
  m="1813920">happens</span> <span m="1814280">now,</span> <span
  m="1814490">just</span> <span m="1814730">to</span> <span
  m="1815180">gain</span> <span m="1815510">some</span> <span
  m="1815660">mathematical</span> <span m="1816290">insight</span> <span
  m="1816680">into</span> <span m="1816920">that</span> <span
  m="1817100">simulation</span> <span m="1817730">that</span> <span
  m="1817880">I</span> <span m="1817940">showed</span> <span
  m="1818240">you,</span> <span m="1819380">that</span> <span
  m="1820310">if</span> <span m="1820430">you</span> <span
  m="1820520">have</span> <span m="1820670">a</span> <span
  m="1820730">scalar</span> <span m="1821330">x</span> <span
  m="1823610">that</span> <span m="1823790">is</span> <span
  m="1823940">outside</span> <span m="1824570">this</span> <span
  m="1824780">region</span> <span m="1825110">of</span> <span
  m="1825230">confusion,</span> <span m="1826586">which</span> <span
  m="1828280">states</span> <span m="1828850">that</span> <span
  m="1829090">if</span> <span m="1829270">you're</span> <span
  m="1829480">far</span> <span m="1830470">from</span> <span
  m="1832380">the</span> <span m="1832500">region</span> <span
  m="1832860">within</span> <span m="1833130">which</span> <span
  m="1833340">an</span> <span m="1833430">optimum</span> <span
  m="1833850">can</span> <span m="1834050">lie.</span> <span
  m="1834300">So</span> <span m="1834450">you're</span> <span
  m="1834570">far</span> <span m="1834870">away.</span></p><p><span
  m="1835590">So you've</span> <span m="1835710">just</span> <span
  m="1835860">started</span> <span m="1836250">out</span> <span
  m="1836400">your</span> <span m="1836460">progress,</span> <span
  m="1836910">you</span> <span m="1837000">made</span> <span
  m="1837180">a</span> <span m="1837240">random</span> <span
  m="1837600">initialization,</span> <span m="1838770">most</span> <span
  m="1838980">likely</span> <span m="1839370">far</span> <span
  m="1839700">away</span> <span m="1839880">from</span> <span
  m="1840090">where</span> <span m="1840270">the</span> <span
  m="1840390">solution</span> <span m="1840870">is.</span> <span
  m="1841050">So</span> <span m="1841080">suppose</span> <span
  m="1841440">that's</span> <span m="1841620">where</span> <span
  m="1841770">you</span> <span m="1841950">are.</span> <span
  m="1843090">What</span> <span m="1843300">happens</span> <span
  m="1844050">when</span> <span m="1844200">you're</span> <span
  m="1844320">in</span> <span m="1844440">that</span> <span
  m="1844560">far</span> <span m="1844860">out</span> <span
  m="1845040">region?</span> <span m="1846040">So</span> <span
  m="1846150">if</span> <span m="1846220">you're</span> <span
  m="1846380">in</span> <span m="1846450">the</span> <span
  m="1846570">far</span> <span m="1846900">out</span> <span
  m="1847080">region,</span> <span m="1848940">you</span> <span
  m="1849090">use</span> <span m="1849980">a</span> <span
  m="1850020">stochastic</span> <span m="1850680">gradient</span> <span
  m="1851850">of</span> <span m="1851970">some</span> <span
  m="1852340">i-th</span> <span m="1852540">component.</span></p><p><span
  m="1855470">So</span> <span m="1855620">the</span> <span
  m="1855740">full</span> <span m="1856010">gradient</span> <span
  m="1856520">will</span> <span m="1856640">look</span> <span
  m="1856880">like</span> <span m="1857060">that.</span> <span
  m="1858080">A</span> <span m="1858230">stochastic</span> <span
  m="1858800">gradient</span> <span m="1859250">looks</span> <span
  m="1859460">like</span> <span m="1859640">just</span> <span
  m="1859790">one</span> <span m="1860000">component.</span> <span
  m="1863060">And</span> <span m="1863570">when</span> <span
  m="1863840">you're</span> <span m="1863990">far</span> <span
  m="1864380">out,</span> <span m="1864860">outside</span> <span
  m="1865250">that</span> <span m="1865430">min</span> <span
  m="1865670">and</span> <span m="1865790">max</span> <span
  m="1866150">regime,</span> <span m="1868820">then</span> <span
  m="1870990">you</span> <span m="1871110">can</span> <span
  m="1871290">check</span> <span m="1872190">by</span> <span
  m="1872430">just</span> <span m="1873750">looking</span> <span
  m="1874110">at</span> <span m="1874260">it,</span> <span
  m="1876394">that</span> <span m="1878260">a</span> <span
  m="1878400">stochastic</span> <span m="1879000">gradient,</span> <span
  m="1879750">in</span> <span m="1879840">the</span> <span
  m="1879930">far</span> <span m="1880410">away</span> <span
  m="1880650">regime,</span> <span m="1881520">has</span> <span
  m="1881730">exactly</span> <span m="1882210">the</span> <span
  m="1882300">same</span> <span m="1882660">sign</span> <span
  m="1883620">as</span> <span m="1883740">the</span> <span
  m="1883830">full</span> <span m="1884100">gradient.</span></p><p><span
  m="1885890">What</span> <span m="1886040">does</span> <span
  m="1886190">gradient</span> <span m="1886580">descent</span> <span
  m="1886880">do?</span> <span m="1887150">It</span> <span
  m="1887240">says,</span> <span m="1887480">well,</span> <span
  m="1887720">walk</span> <span m="1888020">in</span> <span
  m="1888140">the</span> <span m="1888230">direction</span> <span
  m="1888710">of</span> <span m="1888830">the</span> <span
  m="1888920">negative</span> <span m="1889310">gradient.</span> <span
  m="1891030">And</span> <span m="1891530">far</span> <span
  m="1891785">away</span> <span m="1893790">from</span> <span
  m="1894120">the</span> <span m="1894240">optimum,</span> <span
  m="1894990">outside</span> <span m="1895470">the</span> <span
  m="1895530">region</span> <span m="1895860">of</span> <span
  m="1895980">confusion,</span> <span m="1896490">you're</span> <span
  m="1896610">stochastic</span> <span m="1897210">gradient</span> <span
  m="1898620">has</span> <span m="1898800">the</span> <span
  m="1898890">same</span> <span m="1899250">sign</span> <span
  m="1899670">as</span> <span m="1899790">the</span> <span
  m="1899910">true</span> <span m="1900150">gradient.</span> <span
  m="1901290">Maybe</span> <span m="1901580">in</span> <span
  m="1901650">more</span> <span m="1901860">linear</span> <span
  m="1902220">algebra</span> <span m="1902640">terms,</span> <span
  m="1904530">it</span> <span m="1904710">makes</span> <span
  m="1906850">an</span> <span m="1907320">acute</span> <span
  m="1907650">angle</span> <span m="1907980">with</span> <span
  m="1908160">your</span> <span m="1908250">gradient.</span> <span
  m="1908820">So</span> <span m="1909240">that</span> <span
  m="1909420">means</span> <span m="1909690">if</span> <span
  m="1909810">even</span> <span m="1910080">though</span> <span
  m="1910350">a</span> <span m="1910440">stochastic</span> <span
  m="1911100">gradient</span> <span m="1911640">is</span> <span
  m="1911820">not</span> <span m="1912300">exactly</span> <span
  m="1912930">the</span> <span m="1913050">full</span> <span
  m="1913290">gradient,</span> <span m="1914520">it</span> <span
  m="1915000">has</span> <span m="1915240">some</span> <span
  m="1915540">component</span> <span m="1916290">in</span> <span
  m="1916440">the</span> <span m="1916560">direction</span> <span
  m="1917100">of</span> <span m="1917190">the</span> <span
  m="1917310">true</span> <span m="1917490">gradient.</span></p><p><span
  m="1918240">This</span> <span m="1918390">is</span> <span
  m="1918510">one</span> <span m="1918750">1D.</span> <span
  m="1918960">Here</span> <span m="1919200">it</span> <span
  m="1919320">is,</span> <span m="1919500">exactly</span> <span
  m="1919950">the</span> <span m="1920040">same</span> <span
  m="1920310">sign.</span> <span m="1921060">In</span> <span
  m="1921180">multiple</span> <span m="1921720">dimensions,</span> <span
  m="1923310">this</span> <span m="1923520">is</span> <span
  m="1923640">the</span> <span m="1923730">idea</span> <span
  m="1924000">that</span> <span m="1924150">it'll</span> <span
  m="1924300">have</span> <span m="1924450">some</span> <span
  m="1925080">component</span> <span m="1925740">in</span> <span
  m="1925890">the</span> <span m="1926010">direction</span> <span
  m="1926490">of</span> <span m="1926610">true</span> <span
  m="1926880">gradient</span> <span m="1927330">when</span> <span
  m="1927510">you're</span> <span m="1927630">far</span> <span
  m="1927900">away.</span> <span m="1930930">Which</span> <span
  m="1931010">means,</span> <span m="1932450">if</span> <span
  m="1932570">you</span> <span m="1932660">then</span> <span
  m="1932840">use</span> <span m="1933170">that</span> <span
  m="1933410">direction</span> <span m="1934940">to</span> <span
  m="1935060">make</span> <span m="1935300">an</span> <span
  m="1935420">update</span> <span m="1936340">in</span> <span
  m="1936440">that</span> <span m="1936670">style,</span> <span
  m="1937970">you</span> <span m="1938120">will</span> <span
  m="1938300">end</span> <span m="1938540">up</span> <span
  m="1938630">making</span> <span m="1939830">solid</span> <span
  m="1940250">progress.</span> <span m="1941920">And</span> <span
  m="1942040">the</span> <span m="1942130">beauty</span> <span
  m="1942580">is,</span> <span m="1944830">in</span> <span
  m="1944950">the</span> <span m="1945070">time</span> <span
  m="1945460">it</span> <span m="1945640">would</span> <span
  m="1945760">have</span> <span m="1945880">taken</span> <span
  m="1946240">you</span> <span m="1946330">to</span> <span m="1946540">do</span>
  <span m="1947470">one</span> <span m="1947950">single</span> <span
  m="1948400">iteration</span> <span m="1948850">of</span> <span
  m="1948910">batch</span> <span m="1949210">gradient</span> <span
  m="1949600">descent,</span> <span m="1950410">far</span> <span
  m="1950860">away</span> <span m="1951160">you</span> <span
  m="1951280">can</span> <span m="1951550">do millions</span> <span
  m="1952060">stochastic</span> <span m="1952660">steps,</span> <span
  m="1953140">and,</span> <span m="1953290">each</span> <span
  m="1953500">step</span> <span m="1953830">will</span> <span
  m="1953920">make</span> <span m="1954130">some</span> <span
  m="1954280">progress.</span></p><p><span m="1955420">And</span> <span
  m="1955510">that's</span> <span m="1955720">where</span> <span
  m="1956200">we</span> <span m="1956350">see</span> <span
  m="1956590">this</span> <span m="1956770">dramatic,</span> <span
  m="1957340">initial--</span> <span m="1959470">again,</span> <span
  m="1960430">in</span> <span m="1960550">the</span> <span m="1960640">1D</span>
  <span m="1961000">case</span> <span m="1961270">this</span> <span
  m="1961450">is</span> <span m="1961570">explicit</span> <span
  m="1962260">mathematically.</span> <span m="1963490">In</span> <span
  m="1963610">the</span> <span m="1963700">high-D</span> <span
  m="1964150">case,</span> <span m="1964480">this</span> <span
  m="1964660">is</span> <span m="1964780">more</span> <span
  m="1965020">intuitive.</span> <span m="1966520">Without</span> <span
  m="1966850">further</span> <span m="1967210">assumptions</span> <span
  m="1967900">about</span> <span m="1968200">angles,</span> <span
  m="1968560">et,</span> <span m="1968780">we</span> <span
  m="1969010">can't</span> <span m="1969880">make</span> <span
  m="1970540">such</span> <span m="1970750">a</span> <span
  m="1970780">broad</span> <span m="1971080">claim.</span> <span
  m="1971350">But</span> <span m="1971500">intuitively,</span> <span
  m="1972100">this</span> <span m="1972280">is</span> <span
  m="1972400">what's</span> <span m="1972610">happening,</span> <span
  m="1973420">and</span> <span m="1973540">why</span> <span
  m="1973930">you</span> <span m="1974110">see</span> <span
  m="1974320">this</span> <span m="1975100">awesome</span> <span
  m="1975550">initial</span> <span m="1975970">speed.</span></p><p><span
  m="1979160">And</span> <span m="1979280">once</span> <span
  m="1979580">you're</span> <span m="1979730">inside</span> <span
  m="1980210">the</span> <span m="1980300">region</span> <span
  m="1980780">of</span> <span m="1980930">confusion,</span> <span
  m="1984610">then</span> <span m="1985270">this</span> <span
  m="1985540">behavior</span> <span m="1985960">breaks</span> <span
  m="1986320">down.</span> <span m="1987580">Some</span> <span
  m="1987820">stochastic</span> <span m="1988330">gradient</span> <span
  m="1988700">may</span> <span m="1988780">have</span> <span
  m="1988870">the</span> <span m="1988960">same</span> <span
  m="1989200">sign</span> <span m="1989500">as</span> <span
  m="1989590">the</span> <span m="1989710">full</span> <span
  m="1989920">gradient,</span> <span m="1990310">some</span> <span
  m="1990490">may</span> <span m="1990640">not.</span> <span
  m="1991390">And</span> <span m="1991510">that's</span> <span
  m="1991750">why</span> <span m="1991870">you</span> <span
  m="1991990">can</span> <span m="1992170">get</span> <span
  m="1992530">crazy</span> <span m="1992920">fluctuations.</span> <span
  m="1995300">So</span> <span m="1995360">this</span> <span
  m="1995660">simple</span> <span m="1996080">1D</span> <span
  m="1996470">example</span> <span m="1997040">kind</span> <span
  m="1997280">of</span> <span m="1997910">exactly</span> <span
  m="1998690">shows</span> <span m="1999170">you</span> <span
  m="2000190">what</span> <span m="2000400">we</span> <span
  m="2000520">saw</span> <span m="2000730">in</span> <span
  m="2000820">that</span> <span m="2000970">picture.</span></p><p><span
  m="2004090">And</span> <span m="2004240">people</span> <span
  m="2004540">really</span> <span m="2004810">love</span> <span
  m="2005020">this</span> <span m="2005230">initial</span> <span
  m="2005560">progress.</span> <span m="2006070">Because,</span> <span
  m="2006610">often</span> <span m="2006970">we</span> <span
  m="2007090">also</span> <span m="2007390">do</span> <span
  m="2007580">early</span> <span m="2007930">stopping.</span> <span
  m="2008530">You</span> <span m="2008620">train</span> <span
  m="2008920">for</span> <span m="2009040">some</span> <span
  m="2009220">time,</span> <span m="2010140">and</span> <span
  m="2010240">then</span> <span m="2010360">you</span> <span
  m="2010420">say,</span> <span m="2010570">OK,</span> <span
  m="2011230">I'm</span> <span m="2011420">done.</span></p><p><span
  m="2014230">So</span> <span m="2015920">importantly,</span> <span
  m="2017670">if</span> <span m="2017720">you</span> <span
  m="2017870">are</span> <span m="2018770">purely</span> <span
  m="2019280">an</span> <span m="2019460">optimization</span> <span
  m="2020240">person,</span> <span m="2020990">not</span> <span
  m="2021200">thinking</span> <span m="2021710">so</span> <span
  m="2021890">much</span> <span m="2022070">in</span> <span
  m="2022160">terms</span> <span m="2022400">of</span> <span
  m="2022490">machine</span> <span m="2022790">learning,</span> <span
  m="2024490">then</span> <span m="2024640">please</span> <span
  m="2024910">keep</span> <span m="2025090">in</span> <span
  m="2025180">mind</span> <span m="2025480">that</span> <span
  m="2025660">stochastic</span> <span m="2026200">gradient</span> <span
  m="2026650">descent</span> <span m="2027560">or</span> <span
  m="2028300">stochastic</span> <span m="2028560">gradient</span> <span
  m="2029110">method</span> <span m="2029800">is</span> <span
  m="2029950">not</span> <span m="2030250">such</span> <span
  m="2030520">a</span> <span m="2030580">great</span> <span
  m="2030850">optimization</span> <span m="2031570">method.</span> <span
  m="2032410">Because</span> <span m="2032590">once</span> <span
  m="2032890">in</span> <span m="2032980">the</span> <span
  m="2033070">region</span> <span m="2033400">of</span> <span
  m="2033520">confusion,</span> <span m="2034000">it</span> <span
  m="2034090">can</span> <span m="2034240">just</span> <span
  m="2034420">fluctuate</span> <span m="2034960">all</span> <span
  m="2035230">over</span> <span m="2035830">forever.</span> <span
  m="2038230">And</span> <span m="2038380">in</span> <span
  m="2038470">machine</span> <span m="2038770">learning,</span> <span
  m="2039010">you</span> <span m="2039100">say,</span> <span
  m="2039310">oh,</span> <span m="2039460">the</span> <span
  m="2039550">region</span> <span m="2039910">of</span> <span
  m="2040000">confusion,</span> <span m="2040480">that's</span> <span
  m="2040660">fine.</span> <span m="2041340">It'll</span> <span
  m="2041380">make</span> <span m="2041590">my</span> <span
  m="2041710">method</span> <span m="2042040">robust.</span> <span
  m="2042420">It'll</span> <span m="2042910">make</span> <span
  m="2043090">my</span> <span m="2043240">neural</span> <span
  m="2043510">network</span> <span m="2043840">training</span> <span
  m="2044170">more</span> <span m="2044350">robust.</span> <span
  m="2045120">It's</span> <span m="2045350">generalize</span> <span
  m="2045820">better,</span> <span m="2046280">et</span> <span
  m="2046570">cetera, er</span> <span m="2046700">cetera--</span> <span
  m="2046990">we</span> <span m="2047110">like</span> <span
  m="2047350">that.</span></p><p><span m="2048280">So</span> <span
  m="2048460">it</span> <span m="2048520">depends</span> <span
  m="2048909">on</span> <span m="2049030">which</span> <span
  m="2050620">frame</span> <span m="2050860">of</span> <span
  m="2050980">mind</span> <span m="2051190">you're</span> <span
  m="2051370">in.</span> <span m="2053770">So</span> <span
  m="2053889">that's</span> <span m="2054460">the</span> <span
  m="2055179">awesome</span> <span m="2055480">thing</span> <span
  m="2055750">about</span> <span m="2056020">the</span> <span
  m="2056230">stochastic</span> <span m="2056500">gradient</span> <span
  m="2056949">method.</span></p><p><span m="2059625">So</span> <span
  m="2062880">I'll</span> <span m="2063060">give</span> <span
  m="2063210">you</span> <span m="2063495">now</span> <span
  m="2064739">key</span> <span m="2064980">mathematical</span> <span
  m="2065699">ideas</span> <span m="2066060">behind</span> <span
  m="2066750">the</span> <span m="2066840">success</span> <span
  m="2067290">of</span> <span m="2067449">SGD.</span> <span
  m="2067949">This</span> <span m="2068130">was</span> <span
  m="2068250">like</span> <span m="2068730">little</span> <span
  m="2069030">illustration.</span> <span m="2070800">Very</span> <span
  m="2071159">abstractly,</span> <span m="2072960">this</span> <span
  m="2073170">is</span> <span m="2074159">an</span> <span
  m="2074280">idea</span> <span m="2074610">that</span> <span
  m="2074820">[INAUDIBLE]</span> <span m="2075239">throughout</span> <span
  m="2075690">machine</span> <span m="2076080">learning</span> <span
  m="2077310">and</span> <span m="2077460">throughout</span> <span
  m="2077770">theoretical</span> <span m="2078360">computer</span> <span
  m="2078750">science</span> <span m="2079590">and</span> <span
  m="2079739">statistics,</span> <span m="2081060">anytime</span> <span
  m="2082139">you're</span> <span m="2082380">faced</span> <span
  m="2082980">with</span> <span m="2083130">the</span> <span
  m="2083250">need</span> <span m="2083790">to</span> <span
  m="2083969">compute</span> <span m="2084840">an</span> <span
  m="2084989">expensive</span> <span m="2085620">quantity,</span> <span
  m="2087260">resort</span> <span m="2087770">to</span> <span
  m="2087920">randomization</span> <span m="2089300">to</span> <span
  m="2089389">speed</span> <span m="2089719">up</span> <span
  m="2089840">the</span> <span m="2089929">computation.</span> <span
  m="2091900">SGD</span> <span m="2092550">is</span> <span
  m="2092730">one</span> <span m="2092940">example.</span> <span
  m="2094710">The</span> <span m="2094760">true</span> <span
  m="2095030">gradient</span> <span m="2095510">was</span> <span
  m="2095690">expensive</span> <span m="2096260">to</span> <span
  m="2096409">compute,</span> <span m="2097640">so</span> <span
  m="2097940">we</span> <span m="2098810">create</span> <span
  m="2099410">a</span> <span m="2099470">randomized</span> <span
  m="2100730">estimate</span> <span m="2101480">of</span> <span
  m="2101630">the</span> <span m="2101750">true</span> <span
  m="2101930">gradient.</span> <span m="2103250">And</span> <span
  m="2103370">the</span> <span m="2103460">randomized</span> <span
  m="2103970">estimate</span> <span m="2104510">is</span> <span
  m="2104870">much</span> <span m="2105110">faster</span> <span
  m="2105650">to</span> <span m="2105800">compute.</span></p><p><span
  m="2108670">And</span> <span m="2109030">mathematically,</span> <span
  m="2109750">what</span> <span m="2109930">will</span> <span
  m="2110080">start</span> <span m="2110350">happening</span> <span
  m="2111400">is,</span> <span m="2112360">depending</span> <span
  m="2112840">on</span> <span m="2113020">how</span> <span
  m="2113380">good</span> <span m="2113710">your</span> <span
  m="2113860">randomized</span> <span m="2114430">estimate</span> <span
  m="2114940">is,</span> <span m="2115900">your</span> <span
  m="2116050">method</span> <span m="2116500">may</span> <span
  m="2116710">or</span> <span m="2116830">may</span> <span
  m="2117010">not</span> <span m="2117520">convert</span> <span
  m="2118030">to</span> <span m="2118180">the</span> <span
  m="2118300">right</span> <span m="2118540">answer.</span> <span
  m="2121260">So</span> <span m="2121550">of</span> <span
  m="2121700">course,</span> <span m="2121980">one</span> <span
  m="2122000">has</span> <span m="2122120">to</span> <span m="2122240">be</span>
  <span m="2122330">careful</span> <span m="2122720">about</span> <span
  m="2122960">what</span> <span m="2123410">particular</span> <span
  m="2123920">randomized</span> <span m="2124580">estimate</span> <span
  m="2125050">one</span> <span m="2125180">makes.</span> <span
  m="2128070">But</span> <span m="2128670">really</span> <span
  m="2128940">abstractly,</span> <span m="2129670">even</span> <span
  m="2129870">if</span> <span m="2130020">I</span> <span
  m="2130080">hadn't</span> <span m="2130380">shown</span> <span
  m="2130770">you,</span> <span m="2131340">the</span> <span
  m="2131490">main</span> <span m="2131910">idea,</span> <span
  m="2132390">this</span> <span m="2132630">idea</span> <span
  m="2132930">you</span> <span m="2133020">can</span> <span
  m="2133230">apply</span> <span m="2133560">in</span> <span
  m="2133680">many</span> <span m="2133950">other</span> <span
  m="2134160">settings.</span> <span m="2135630">If</span> <span
  m="2135750">you</span> <span m="2135810">have</span> <span
  m="2135930">a</span> <span m="2135990">difficult</span> <span
  m="2136380">quantity,</span> <span m="2136860">come</span> <span
  m="2137070">up</span> <span m="2137160">with</span> <span m="2137310">a</span>
  <span m="2137340">randomized</span> <span m="2137880">estimate</span> <span
  m="2139320">and</span> <span m="2140310">save</span> <span
  m="2140610">on</span> <span m="2140730">computation.</span> <span
  m="2141360">This</span> <span m="2141540">is</span> <span m="2141660">a</span>
  <span m="2141720">very</span> <span m="2142080">important</span> <span
  m="2142710">theme</span> <span m="2143220">throughout</span> <span
  m="2144240">machine</span> <span m="2144600">learning</span> <span
  m="2144930">and</span> <span m="2145020">data</span> <span
  m="2145260">science.</span></p><p><span m="2148140">And</span> <span
  m="2148320">this</span> <span m="2148470">is</span> <span
  m="2148620">the</span> <span m="2148710">key</span> <span
  m="2148890">property.</span> <span m="2150150">So</span> <span
  m="2151440">stochastic</span> <span m="2152100">gradient</span> <span
  m="2152580">descent,</span> <span m="2153480">it</span> <span
  m="2153600">uses</span> <span m="2154200">stochastic</span> <span
  m="2155340">gradients.</span> <span m="2156570">Stochastic</span> <span
  m="2156855">is,</span> <span m="2157140">here,</span> <span
  m="2157680">used</span> <span m="2157920">very</span> <span
  m="2158160">loosely.</span> <span m="2158550">And</span> <span
  m="2158680">it</span> <span m="2158760">just</span> <span
  m="2158940">means</span> <span m="2159300">that</span> <span
  m="2159460">some</span> <span m="2159660">randomization.</span> <span
  m="2161350">That's</span> <span m="2161530">all</span> <span
  m="2161710">it</span> <span m="2161800">means.</span></p><p><span
  m="2163550">And</span> <span m="2163570">the</span> <span
  m="2163660">property--</span> <span m="2164210">the</span> <span
  m="2164350">key</span> <span m="2164770">property</span> <span
  m="2165610">that</span> <span m="2165820">we</span> <span
  m="2165970">have</span> <span m="2166810">is</span> <span
  m="2168700">in</span> <span m="2168940">expectation.</span> <span
  m="2170770">The</span> <span m="2170890">expectation</span> <span
  m="2171670">is</span> <span m="2171880">over</span> <span
  m="2172720">whatever</span> <span m="2173170">randomness</span> <span
  m="2173740">you</span> <span m="2173830">used.</span> <span
  m="2175250">So</span> <span m="2175300">if</span> <span m="2175420">you</span>
  <span m="2175510">picked</span> <span m="2177130">some</span> <span
  m="2178180">random</span> <span m="2178900">training</span> <span
  m="2179230">data</span> <span m="2179470">point</span> <span
  m="2179800">out</span> <span m="2179980">of</span> <span
  m="2180100">the</span> <span m="2180220">million,</span> <span
  m="2181180">then</span> <span m="2182140">the</span> <span
  m="2182260">expectation</span> <span m="2182920">is</span> <span
  m="2183040">over</span> <span m="2183280">the</span> <span
  m="2183370">probability</span> <span m="2184000">distribution</span> <span
  m="2184660">over</span> <span m="2185530">what</span> <span
  m="2185710">kind</span> <span m="2185890">of</span> <span
  m="2186010">randomness</span> <span m="2186520">you</span> <span
  m="2186640">used.</span> <span m="2187540">If</span> <span
  m="2187660">you</span> <span m="2187960">picked</span> <span
  m="2188290">uniformly</span> <span m="2188920">at</span> <span
  m="2189040">random</span> <span m="2189460">from</span> <span
  m="2190120">a</span> <span m="2190180">million</span> <span
  m="2190510">points,</span> <span m="2191420">then</span> <span
  m="2191440">this</span> <span m="2191620">expectation</span> <span
  m="2192280">is</span> <span m="2192400">over</span> <span
  m="2192610">that</span> <span m="2192820">uniform</span> <span
  m="2193180">probability.</span></p><p><span m="2194320">But</span> <span
  m="2194470">the</span> <span m="2194590">key</span> <span
  m="2194860">property</span> <span m="2195580">for</span> <span
  m="2195850">SGD,</span> <span m="2198770">or</span> <span
  m="2198890">at</span> <span m="2198980">least</span> <span
  m="2199190">the</span> <span m="2199310">version</span> <span
  m="2199640">of</span> <span m="2199760">SGD</span> <span
  m="2200150">I'm</span> <span m="2200300">talking</span> <span
  m="2200630">about,</span> <span m="2201290">is</span> <span
  m="2201470">that</span> <span m="2201830">that</span> <span
  m="2202880">over</span> <span m="2203210">that</span> <span
  m="2203390">randomness.</span> <span m="2204740">The</span> <span
  m="2204860">thing</span> <span m="2205160">that</span> <span
  m="2205340">you're</span> <span m="2205520">pretending</span> <span
  m="2206150">to</span> <span m="2206300">use,</span> <span
  m="2206990">instead</span> <span m="2207380">of</span> <span
  m="2207470">the</span> <span m="2207560">true</span> <span
  m="2207770">gradient</span> <span m="2208340">n expectation</span> <span
  m="2209270">actually</span> <span m="2209720">it</span> <span
  m="2209960">is</span> <span m="2210290">the</span> <span
  m="2210410">true</span> <span m="2210650">gradient.</span> <span
  m="2212200">So</span> <span m="2212660">in</span> <span
  m="2212890">statistics</span> <span m="2213520">language,</span> <span
  m="2213970">this</span> <span m="2214120">is</span> <span
  m="2214270">called</span> <span m="2215630">the</span> <span
  m="2215740">stochastic</span> <span m="2216340">gradient</span> <span
  m="2216790">that</span> <span m="2216970">we</span> <span
  m="2217090">use</span> <span m="2217540">is</span> <span m="2217690">an</span>
  <span m="2217870">unbiased</span> <span m="2219070">estimate</span> <span
  m="2219820">of</span> <span m="2220000">the</span> <span
  m="2220210">true</span> <span m="2220480">gradient.</span> <span
  m="2223130">And</span> <span m="2224060">this</span> <span
  m="2224240">is</span> <span m="2224360">a</span> <span m="2224420">very</span>
  <span m="2224630">important</span> <span m="2225020">property</span> <span
  m="2225500">in</span> <span m="2225650">the</span> <span
  m="2225770">mathematical</span> <span m="2226430">analysis</span> <span
  m="2227000">of</span> <span m="2227120">stochastic</span> <span
  m="2227660">gradient</span> <span m="2228050">descent,</span> <span
  m="2228620">that</span> <span m="2228890">it</span> <span
  m="2229010">is</span> <span m="2229130">an</span> <span
  m="2229280">unbiased</span> <span m="2229820">estimate,</span> <span
  m="2232240">And</span></p><p><span m="2232600">Intuitively</span> <span
  m="2233140">speaking</span> <span m="2234010">anytime</span> <span
  m="2234520">you</span> <span m="2234640">did</span> <span
  m="2234910">any</span> <span m="2235210">proof</span> <span
  m="2236050">in</span> <span m="2236200">class,</span> <span
  m="2236830">or</span> <span m="2237250">in</span> <span m="2237370">the</span>
  <span m="2237460">book,</span> <span m="2237760">or</span> <span
  m="2237880">lecture,</span> <span m="2238270">or</span> <span
  m="2238360">to</span> <span m="2238480">wherever,</span> <span
  m="2239670">where</span> <span m="2240010">you were</span> <span
  m="2240460">using</span> <span m="2241000">true</span> <span
  m="2241240">gradients,</span> <span m="2243100">more or less,</span> <span
  m="2244060">you</span> <span m="2244180">can</span> <span
  m="2244360">do</span> <span m="2244540">those</span> <span
  m="2244750">same</span> <span m="2245110">proofs--</span> <span
  m="2245800">more</span> <span m="2246040">or</span> <span
  m="2246100">less,</span> <span m="2246310">not</span> <span
  m="2246490">always.</span> <span m="2247540">Using</span> <span
  m="2247840">stochastic</span> <span m="2248380">gradients</span> <span
  m="2248950">by</span> <span m="2251750">encapsulating</span> <span
  m="2252620">everything</span> <span m="2253640">within</span> <span
  m="2254180">expectations</span> <span m="2254960">over</span> <span
  m="2255170">the</span> <span m="2255290">randomness.</span> <span
  m="2257060">I'll</span> <span m="2257120">show</span> <span
  m="2257150">you</span> <span m="2257180">an</span> <span
  m="2257600">example</span> <span m="2257630">of</span> <span
  m="2257660">what</span> <span m="2257840">I</span> <span
  m="2257900">mean</span> <span m="2258080">by</span> <span
  m="2258200">that.</span> <span m="2258980">I'm</span> <span
  m="2259160">just</span> <span m="2259790">trying</span> <span
  m="2260030">to</span> <span m="2260120">simplify</span> <span
  m="2260690">that</span> <span m="2260870">for</span> <span
  m="2261080">you.</span> <span m="2262370">And</span></p><p><span
  m="2262670">In</span> <span m="2262850">particular,</span> <span
  m="2267350">the</span> <span m="2267470">unbiasedness</span> <span
  m="2268190">is</span> <span m="2268310">great.</span> <span
  m="2268710">So</span> <span m="2268850">it</span> <span
  m="2268940">means</span> <span m="2269990">I</span> <span
  m="2270110">can</span> <span m="2270410">kind</span> <span
  m="2270620">of</span> <span m="2270740">plug-in</span> <span
  m="2271730">these</span> <span m="2273020">stochastic</span> <span
  m="2273620">gradients</span> <span m="2274160">in</span> <span
  m="2274250">place</span> <span m="2274520">of</span> <span
  m="2274610">the</span> <span m="2274730">true</span> <span
  m="2274910">gradient,</span> <span m="2275430">and</span> <span
  m="2275690">I'm</span> <span m="2275840">still</span> <span
  m="2276080">doing</span> <span m="2276260">something</span> <span
  m="2276650">meaningful.</span> <span m="2277830">So</span> <span
  m="2277850">this</span> <span m="2278030">is</span> <span
  m="2278180">answering</span> <span m="2279290">that</span> <span
  m="2279470">earlier</span> <span m="2279860">question,</span> <span
  m="2280310">why</span> <span m="2281720">this</span> <span
  m="2281900">random</span> <span m="2282230">stuff?</span> <span
  m="2283130">Why</span> <span m="2283370">should</span> <span
  m="2283580">we</span> <span m="2283700">think</span> <span
  m="2283970">it</span> <span m="2284210">may</span> <span
  m="2284390">work?</span></p><p><span m="2285350">But</span> <span
  m="2285470">there's</span> <span m="2285650">another</span> <span
  m="2285950">very</span> <span m="2286160">important</span> <span
  m="2286610">aspect</span> <span m="2287120">to</span> <span
  m="2287420">why</span> <span m="2288230">it</span> <span
  m="2288410">works,</span> <span m="2288740">beyond</span> <span
  m="2289220">this</span> <span m="2290000">unbiasedness,</span> <span
  m="2292260">that</span> <span m="2292560">the</span> <span
  m="2292800">amount</span> <span m="2293430">of</span> <span
  m="2294210">noise,</span> <span m="2295350">or</span> <span
  m="2295710">the</span> <span m="2297480">amount</span> <span
  m="2297810">of</span> <span m="2297900">stochasticity</span> <span
  m="2299250">is</span> <span m="2299400">controlled.</span> <span
  m="2300240">So</span> <span m="2300360">just</span> <span
  m="2300630">because</span> <span m="2300990">it</span> <span
  m="2301110">is</span> <span m="2301230">an</span> <span
  m="2301380">unbiased</span> <span m="2301980">estimate,</span> <span
  m="2304760">doesn't</span> <span m="2305030">mean</span> <span
  m="2305420">that</span> <span m="2305930">it's</span> <span
  m="2306080">going</span> <span m="2306190">to</span> <span
  m="2306350">work</span> <span m="2306680">that</span> <span
  m="2306950">well.</span></p><p><span m="2308300">Why?</span> <span
  m="2308930">Because</span> <span m="2309260">it</span> <span
  m="2309380">could</span> <span m="2309530">still</span> <span
  m="2309800">fluctuate</span> <span m="2310430">hugely,</span> <span
  m="2310910">right?</span> <span m="2312140">Essentially,</span> <span
  m="2312620">plus</span> <span m="2312920">infinity</span> <span
  m="2313400">here,</span> <span m="2313640">minus</span> <span
  m="2314000">infinity</span> <span m="2314480">here.</span> <span
  m="2314730">You</span> <span m="2314840">take</span> <span
  m="2315050">an</span> <span m="2315170">average,</span> <span
  m="2315470">you</span> <span m="2315560">get</span> <span
  m="2315740">0.</span> <span m="2316130">So</span> <span
  m="2317480">that</span> <span m="2317660">is</span> <span
  m="2318050">essentially</span> <span m="2318530">unbiased,</span> <span
  m="2319100">but</span> <span m="2319340">the</span> <span
  m="2319490">fluctuation</span> <span m="2320120">is</span> <span
  m="2320210">gigantic.</span> <span m="2321200">So</span> <span
  m="2321350">whenever</span> <span m="2322130">talking</span> <span
  m="2322850">about</span> <span m="2323150">estimates,</span> <span
  m="2324320">what's</span> <span m="2324560">the</span> <span
  m="2324680">other</span> <span m="2324980">key</span> <span
  m="2325190">quantity</span> <span m="2325700">we</span> <span
  m="2325820">need</span> <span m="2325970">to</span> <span
  m="2326090">care</span> <span m="2326330">about</span> <span
  m="2327080">beyond</span> <span m="2327650">expectation?</span></p><p><span
  m="2329144">AUDIENCE:</span> <span m="2329345">Variance.</span></p><p><span
  m="2329546">AUDIENCE:</span> <span m="2329747">Variance.</span></p><p><span
  m="2330350">PROFESSOR SRA:</span> <span m="2330522">Variance.</span> <span
  m="2331850">And</span> <span m="2332060">really,</span> <span
  m="2332330">the</span> <span m="2332480">key</span> <span
  m="2332810">thing</span> <span m="2333595">that</span> <span
  m="2334030">governs</span> <span m="2335180">the</span> <span
  m="2335300">speed</span> <span m="2335870">at</span> <span
  m="2336050">which</span> <span m="2336320">stochastic</span> <span
  m="2337010">gradient</span> <span m="2337490">descent</span> <span
  m="2338870">does</span> <span m="2339260">the</span> <span
  m="2339380">job</span> <span m="2339770">that</span> <span
  m="2339920">we</span> <span m="2340070">want it</span> <span
  m="2340460">to</span> <span m="2340610">do</span> <span m="2341330">is,</span>
  <span m="2341480">how</span> <span m="2341720">much</span> <span
  m="2341930">variance</span> <span m="2342610">do</span> <span
  m="2342740">the</span> <span m="2342830">stochastic</span> <span
  m="2343070">gradients</span> <span m="2343880">have?</span></p><p><span
  m="2346090">Just</span> <span m="2346390">this</span> <span
  m="2347290">simple</span> <span m="2347680">statistical</span> <span
  m="2348280">point,</span> <span m="2348730">in</span> <span
  m="2348820">fact,</span> <span m="2349150">is</span> <span
  m="2349330">at</span> <span m="2349420">the</span> <span
  m="2349510">heart</span> <span m="2350020">of</span> <span
  m="2350800">a</span> <span m="2350860">sequence</span> <span
  m="2351580">of</span> <span m="2352030">research</span> <span
  m="2352510">progress</span> <span m="2353200">in</span> <span
  m="2353320">the</span> <span m="2353410">past</span> <span
  m="2353740">five</span> <span m="2354100">years</span> <span
  m="2354970">in</span> <span m="2355090">the</span> <span
  m="2355150">field</span> <span m="2355480">of</span> <span
  m="2355540">stochastic</span> <span m="2356110">gradient,</span> <span
  m="2357280">where</span> <span m="2357430">people</span> <span
  m="2357790">have</span> <span m="2358030">worked</span> <span
  m="2358390">really</span> <span m="2358810">hard</span> <span
  m="2359890">to</span> <span m="2360010">come</span> <span
  m="2360250">up</span> <span m="2360340">with</span> <span
  m="2360520">newer</span> <span m="2361150">and</span> <span
  m="2361270">newer,</span> <span m="2361690">fancier</span> <span
  m="2362320">and</span> <span m="2362440">fancier</span> <span
  m="2362950">versions</span> <span m="2363430">of</span> <span
  m="2363490">stochastic</span> <span m="2364060">gradient</span> <span
  m="2365050">which</span> <span m="2366160">have</span> <span
  m="2366460">the</span> <span m="2366610">unbiasedness</span> <span
  m="2367120">property,</span> <span m="2368140">but</span> <span
  m="2368320">have</span> <span m="2368470">smaller</span> <span
  m="2368980">and</span> <span m="2369070">smaller</span> <span
  m="2369490">variance.</span> <span m="2370840">And</span> <span
  m="2370960">the</span> <span m="2371020">smaller</span> <span
  m="2371530">the</span> <span m="2371650">variance</span> <span
  m="2372100">you</span> <span m="2372220">have,</span> <span
  m="2373730">the</span> <span m="2373840">better</span> <span
  m="2374620">your</span> <span m="2374800">stochastic</span> <span
  m="2375460">gradient</span> <span m="2376960">is</span> <span
  m="2377260">as</span> <span m="2377440">a</span> <span
  m="2377500">replacement</span> <span m="2378040">of</span> <span
  m="2378160">the</span> <span m="2378250">true</span> <span
  m="2378430">gradient.</span> <span m="2381100">And</span> <span
  m="2381310">of</span> <span m="2381400">course,</span> <span
  m="2381580">the</span> <span m="2381670">better</span> <span
  m="2381890">[INAUDIBLE]</span> <span m="2382720">of</span> <span
  m="2382780">the</span> <span m="2382870">true</span> <span
  m="2383050">gradient,</span> <span m="2384670">then</span> <span
  m="2384850">you</span> <span m="2384970">truly</span> <span
  m="2385300">get</span> <span m="2385540">that</span> <span
  m="2386400">n</span> <span m="2386580">times</span> <span
  m="2387130">up.</span></p><p><span m="2391550">So</span> <span
  m="2391700">the</span> <span m="2391760">speed</span> <span
  m="2392090">of</span> <span m="2392180">convergence</span> <span
  m="2392690">depends</span> <span m="2393020">on</span> <span
  m="2393110">how</span> <span m="2393290">noisy</span> <span
  m="2393650">the</span> <span m="2393750">stochastic</span> <span
  m="2393920">gradients</span> <span m="2394640">are.</span> <span
  m="2395690">It</span> <span m="2395810">seems</span> <span
  m="2396080">like</span> <span m="2396290">I'm</span> <span
  m="2396440">going</span> <span m="2396650">too</span> <span
  m="2396830">slow.</span> <span m="2397130">I</span> <span
  m="2397220">won't</span> <span m="2397460">be</span> <span
  m="2397580">able</span> <span m="2397700">to</span> <span
  m="2397790">do</span> <span m="2397940">a</span> <span
  m="2398080">proof,</span> <span m="2399100">which</span> <span
  m="2399380">sucks.</span> <span m="2400290">But</span> <span
  m="2402860">let</span> <span m="2402950">me</span> <span
  m="2403100">actually</span> <span m="2403400">tell</span> <span
  m="2403580">you</span> <span m="2403640">then</span> <span
  m="2403850">about,</span> <span m="2404900">rather</span> <span
  m="2405170">than</span> <span m="2405350">the</span> <span
  m="2405980">proof,</span> <span m="2407300">I</span> <span
  m="2407420">think</span> <span m="2407660">I'll</span> <span
  m="2407870">share</span> <span m="2408260">the</span> <span
  m="2408380">proof</span> <span m="2408740">with</span> <span
  m="2408890">Gil.</span> <span m="2409790">Because</span> <span
  m="2410150">the</span> <span m="2410240">proof</span> <span
  m="2410570">that</span> <span m="2410720">I</span> <span
  m="2410780">wanted</span> <span m="2411500">to</span> <span
  m="2411590">actually</span> <span m="2411860">show</span> <span
  m="2412130">you,</span> <span m="2414740">gives</span> <span
  m="2415070">a</span> <span m="2415130">proof</span> <span
  m="2415520">of</span> <span m="2416480">stochastic</span> <span
  m="2417110">gradient</span> <span m="2417650">is</span> <span
  m="2417930">well-behaved</span> <span m="2419090">on</span> <span
  m="2419270">both</span> <span m="2419540">convex</span> <span
  m="2420080">and</span> <span m="2420200">nonconvex</span> <span
  m="2420860">problems.</span> <span m="2421400">And</span> <span
  m="2421550">the</span> <span m="2421640">proof</span> <span
  m="2421880">I</span> <span m="2421970">wanted</span> <span
  m="2422300">to</span> <span m="2422390">show</span> <span
  m="2422630">was</span> <span m="2422930">for</span> <span
  m="2423140">the</span> <span m="2423230">nonconvex</span> <span
  m="2423890">case,</span> <span m="2424160">because</span> <span
  m="2424430">it</span> <span m="2424550">applies</span> <span
  m="2424880">to</span> <span m="2424970">neural</span> <span
  m="2425270">networks.</span> <span m="2425660">So</span> <span
  m="2425780">you</span> <span m="2425870">may</span> <span
  m="2425990">be</span> <span m="2426080">curious</span> <span
  m="2426530">about</span> <span m="2426740">that</span> <span
  m="2426920">proof.</span> <span m="2427690">And</span> <span
  m="2427820">remarkably,</span> <span m="2428420">that</span> <span
  m="2428570">proof</span> <span m="2428810">is</span> <span
  m="2428900">much</span> <span m="2429050">simpler</span> <span
  m="2429470">than</span> <span m="2429650">the</span> <span
  m="2430220">case</span> <span m="2430460">of</span> <span
  m="2430580">convex</span> <span m="2430940">problems.</span></p><p><span
  m="2432230">So</span> <span m="2432710">let</span> <span m="2432830">me</span>
  <span m="2432920">just</span> <span m="2433070">mention</span> <span
  m="2433430">some</span> <span m="2433640">very</span> <span
  m="2434030">important</span> <span m="2434550">points</span> <span
  m="2435050">about</span> <span m="2435290">stochastic</span> <span
  m="2435800">gradient.</span> <span m="2436440">So</span> <span
  m="2436490">even</span> <span m="2436730">though</span> <span
  m="2436880">this</span> <span m="2437060">method</span> <span
  m="2437390">has</span> <span m="2437540">been</span> <span
  m="2437690">around</span> <span m="2437960">since</span> <span
  m="2438220">1951,</span> <span m="2439340">every</span> <span
  m="2439610">deep</span> <span m="2439820">learning</span> <span
  m="2440150">tool</span> <span m="2440320">kit</span> <span
  m="2440510">has</span> <span m="2440780">it,</span> <span
  m="2441050">and</span> <span m="2441190">we</span> <span
  m="2441330">are</span> <span m="2441440">studying</span> <span
  m="2441830">it</span> <span m="2441950">in</span> <span
  m="2442040">class,</span> <span m="2444500">there</span> <span
  m="2444740">are</span> <span m="2444860">still</span> <span
  m="2445160">gaps</span> <span m="2445640">between</span> <span
  m="2446510">what</span> <span m="2446720">we</span> <span
  m="2446840">can</span> <span m="2447020">say</span> <span
  m="2447200">theoretically</span> <span m="2447770">and</span> <span
  m="2447860">what</span> <span m="2448040">happens</span> <span
  m="2448340">in</span> <span m="2448430">practice.</span> <span
  m="2450200">And</span> <span m="2450410">I'll</span> <span
  m="2450500">show</span> <span m="2450710">you</span> <span
  m="2450830">those</span> <span m="2451040">gaps</span> <span
  m="2451490">already,</span> <span m="2452000">and</span> <span
  m="2452420">encourage</span> <span m="2452870">you</span> <span
  m="2452960">to</span> <span m="2453080">think</span> <span
  m="2453350">about</span> <span m="2453620">those</span> <span
  m="2454010">if</span> <span m="2454100">you</span> <span
  m="2454220">wish.</span></p><p><span m="2455040">So</span> <span
  m="2455120">let's</span> <span m="2455390">look</span> <span
  m="2455600">back</span> <span m="2455840">at</span> <span
  m="2456020">our</span> <span m="2456080">problem</span> <span
  m="2456530">and</span> <span m="2456620">deliver</span> <span
  m="2457010">two</span> <span m="2457220">variants.</span> <span
  m="2458420">So</span> <span m="2458570">here</span> <span
  m="2458780">are</span> <span m="2458930">the</span> <span
  m="2459080">two</span> <span m="2459260">variants.</span> <span
  m="2460490">I'm</span> <span m="2460730">going</span> <span
  m="2460850">to</span> <span m="2460970">ask</span> <span m="2461300">if</span>
  <span m="2461480">any</span> <span m="2461720">of</span> <span
  m="2461840">you</span> <span m="2461920">is</span> <span
  m="2462050">familiar</span> <span m="2462590">with</span> <span
  m="2462770">these</span> <span m="2462980">variants</span> <span
  m="2463910">in</span> <span m="2464060">some</span> <span
  m="2464390">way</span> <span m="2464600">or</span> <span
  m="2464720">the</span> <span m="2464840">other.</span> <span
  m="2465780">So</span> <span m="2467150">I</span> <span m="2467450">just</span>
  <span m="2467630">call</span> <span m="2467840">it</span> <span
  m="2467960">feasible.</span> <span m="2468910">Here,</span> <span
  m="2469250">there</span> <span m="2469430">are</span> <span
  m="2469550">no</span> <span m="2469730">constraints.</span> <span
  m="2470350">So</span> <span m="2470390">start</span> <span
  m="2470720">with</span> <span m="2470870">any</span> <span
  m="2471050">random</span> <span m="2471440">vector</span> <span
  m="2471860">of</span> <span m="2472010">your</span> <span
  m="2473370">choice.</span> <span m="2475070">In</span> <span
  m="2475190">deep</span> <span m="2475370">network</span> <span
  m="2475700">training</span> <span m="2476030">you</span> <span
  m="2476090">have</span> <span m="2476210">to</span> <span
  m="2476330">work</span> <span m="2476540">harder.</span></p><p><span
  m="2477710">And</span> <span m="2477860">then,</span> <span
  m="2478850">this</span> <span m="2479030">is</span> <span
  m="2479120">the</span> <span m="2479240">iteration</span> <span
  m="2479750">you</span> <span m="2479810">run--</span> <span
  m="2480740">option</span> <span m="2481160">1</span> <span
  m="2481370">and</span> <span m="2481490">option</span> <span
  m="2481850">2.</span> <span m="2482810">So</span> <span
  m="2482960">option</span> <span m="2483260">1</span> <span
  m="2483440">says,</span> <span m="2484310">that</span> <span
  m="2484460">was</span> <span m="2485180">the</span> <span
  m="2485300">idea</span> <span m="2485600">we</span> <span
  m="2485720">had</span> <span m="2485930">in</span> <span
  m="2486050">class,</span> <span m="2486800">randomly</span> <span
  m="2487280">pick</span> <span m="2487490">some</span> <span
  m="2487670">training</span> <span m="2488000">data</span> <span
  m="2488240">point,</span> <span m="2488570">use</span> <span
  m="2488780">its</span> <span m="2488870">stochastic</span> <span
  m="2489350">gradient.</span> <span m="2493840">What</span> <span
  m="2494050">do</span> <span m="2494140">we</span> <span
  m="2494260">mean</span> <span m="2494500">by</span> <span
  m="2494650">randomly</span> <span m="2495130">pick?</span> <span
  m="2496060">The</span> <span m="2496660">moment</span> <span
  m="2497030">you</span> <span m="2497140">use</span> <span
  m="2497350">the</span> <span m="2497470">word</span> <span
  m="2497710">random,</span> <span m="2498970">you</span> <span
  m="2499030">have</span> <span m="2499150">to</span> <span
  m="2499270">define</span> <span m="2501730">what's</span> <span
  m="2502000">the</span> <span m="2502120">randomness.</span></p><p><span
  m="2503850">So</span> <span m="2504050">one</span> <span
  m="2504320">randomness</span> <span m="2504800">is</span> <span
  m="2504920">uniform</span> <span m="2505280">probability</span> <span
  m="2505580">over</span> <span m="2505880">n</span> <span
  m="2506090">training</span> <span m="2506520">data</span> <span
  m="2506730">points.</span> <span m="2507050">That</span> <span
  m="2507230">is</span> <span m="2507350">one</span> <span
  m="2507710">randomness.</span> <span m="2509760">The</span> <span
  m="2509910">other</span> <span m="2510150">version</span> <span
  m="2510540">is</span> <span m="2511830">you</span> <span
  m="2511950">pick</span> <span m="2512950">a</span> <span
  m="2513120">training</span> <span m="2513480">data</span> <span
  m="2513720">point</span> <span m="2514020">without</span> <span
  m="2514380">replacement.</span> <span m="2516660">So</span> <span
  m="2517610">with</span> <span m="2517790">replacement</span> <span
  m="2518300">means</span> <span m="2519530">uniformly</span> <span
  m="2520070">at</span> <span m="2520160">random.</span> <span
  m="2520550">Each</span> <span m="2520760">time</span> <span
  m="2520970">you</span> <span m="2521060">draw</span> <span
  m="2521300">a</span> <span m="2521390">number</span> <span
  m="2521690">from</span> <span m="2521870">1</span> <span
  m="2522050">through</span> <span m="2522260">n,</span> <span
  m="2522500">use</span> <span m="2522740">their</span> <span
  m="2522890">stochastic</span> <span m="2523370">gradient,</span> <span
  m="2523790">move</span> <span m="2524050">on.</span> <span
  m="2525000">Which</span> <span m="2525050">means</span> <span
  m="2525200">the</span> <span m="2525260">same</span> <span
  m="2525560">point</span> <span m="2525950">can</span> <span
  m="2526280">easily</span> <span m="2526610">be</span> <span
  m="2526700">picked</span> <span m="2526940">twice,</span> <span
  m="2527300">also.</span></p><p><span m="2529210">And</span> <span
  m="2529660">without</span> <span m="2529990">replacement</span> <span
  m="2530500">means,</span> <span m="2530860">if</span> <span
  m="2530950">you've</span> <span m="2531670">picked</span> <span
  m="2531940">a</span> <span m="2532000">point</span> <span
  m="2532330">number</span> <span m="2532570">three,</span> <span
  m="2533740">you're</span> <span m="2533860">not</span> <span
  m="2534040">going</span> <span m="2534140">to</span> <span
  m="2534250">pick</span> <span m="2534460">it</span> <span
  m="2534580">again</span> <span m="2535450">until</span> <span
  m="2535750">you've</span> <span m="2535870">gone</span> <span
  m="2536140">through</span> <span m="2536320">the</span> <span
  m="2536410">entire</span> <span m="2536740">training</span> <span
  m="2537080">data</span> <span m="2537360">set.</span> <span
  m="2539400">Those</span> <span m="2539610">are</span> <span
  m="2539670">two</span> <span m="2539820">types</span> <span
  m="2540060">of</span> <span m="2540150">randomness.</span> <span
  m="2543170">Which</span> <span m="2543310">version</span> <span
  m="2543600">would</span> <span m="2543760">you</span> <span
  m="2543880">use?</span></p><p><span m="2547570">There</span> <span
  m="2547720">is</span> <span m="2547870">no</span> <span
  m="2548020">right</span> <span m="2548290">or</span> <span
  m="2548560">wrong</span> <span m="2548890">answer</span> <span
  m="2549130">to</span> <span m="2549220">this.</span> <span
  m="2549400">I'm</span> <span m="2549550">just</span> <span
  m="2549670">taking</span> <span m="2549970">a</span> <span
  m="2550030">poll.</span> <span m="2550870">What</span> <span
  m="2551260">would</span> <span m="2551410">you</span> <span
  m="2551560">use?</span> <span m="2553830">Think</span> <span
  m="2554400">that</span> <span m="2554580">you're</span> <span
  m="2554670">writing</span> <span m="2555030">a</span> <span
  m="2555090">program</span> <span m="2555480">for</span> <span
  m="2555630">this,</span> <span m="2557380">and</span> <span
  m="2557560">maybe</span> <span m="2558580">think</span> <span
  m="2558940">really</span> <span m="2559300">pragmatically,</span> <span
  m="2560500">practically.</span> <span m="2561160">So</span> <span
  m="2561520">that's</span> <span m="2561730">enough</span> <span
  m="2561910">of</span> <span m="2562050">a</span> <span
  m="2562140">hint.</span> <span m="2563050">Which</span> <span
  m="2563230">one</span> <span m="2563560">would</span> <span
  m="2563710">you</span> <span m="2563800">use--</span> <span
  m="2564170">I'm</span> <span m="2564270">just</span> <span
  m="2564310">curious.</span></p><p><span m="2567110">Who</span> <span
  m="2567440">would</span> <span m="2567680">use</span> <span
  m="2567980">1?</span> <span m="2568340">Please,</span> <span
  m="2568640">raise</span> <span m="2568880">hands.</span> <span
  m="2570200">OK.</span> <span m="2571700">And</span> <span
  m="2572050">the</span> <span m="2573290">exclusion--</span> <span
  m="2573920">the</span> <span m="2574490">compliment</span> <span
  m="2575020">thereof.</span> <span m="2575700">I</span> <span
  m="2575720">don't</span> <span m="2575840">know.</span> <span
  m="2575990">Maybe</span> <span m="2576200">some</span> <span
  m="2576320">people</span> <span m="2576560">are</span> <span
  m="2576620">undecided.</span> <span m="2577130">Who</span> <span
  m="2577250">would</span> <span m="2577400">use</span> <span
  m="2577580">2?</span> <span m="2579790">Very</span> <span
  m="2580000">few</span> <span m="2580150">people.</span> <span
  m="2580540">Ooh,</span> <span m="2581200">OK.</span></p><p><span
  m="2584380">How</span> <span m="2584560">many</span> <span
  m="2584770">of</span> <span m="2584890">you</span> <span
  m="2585010">use</span> <span m="2585670">neural</span> <span
  m="2585970">network</span> <span m="2586300">training</span> <span
  m="2586600">toolkits</span> <span m="2586870">like</span> <span
  m="2587010">TensorFlow,</span> <span m="2587560">PyTorch,</span> <span
  m="2588480">whatnot?</span> <span m="2590750">Which</span> <span
  m="2590990">version</span> <span m="2591340">are</span> <span
  m="2591460">they</span> <span m="2591620">using?</span></p><p><span
  m="2596160">Actually,</span> <span m="2596590">every</span> <span
  m="2597060">person</span> <span m="2597510">in</span> <span
  m="2597600">the</span> <span m="2597720">real</span> <span
  m="2597990">world</span> <span m="2598260">is</span> <span
  m="2598380">using</span> <span m="2598710">version</span> <span
  m="2599040">2.</span> <span m="2601040">Are</span> <span
  m="2601190">you</span> <span m="2601310">really</span> <span
  m="2601580">going</span> <span m="2601770">to</span> <span
  m="2602000">randomly</span> <span m="2603680">go</span> <span
  m="2603860">through</span> <span m="2604040">your</span> <span
  m="2604190">RAM</span> <span m="2604580">each</span> <span
  m="2604820">time</span> <span m="2605600">to</span> <span
  m="2605720">pick</span> <span m="2605990">random</span> <span
  m="2606320">points?</span> <span m="2607170">That'll</span> <span
  m="2607460">kill</span> <span m="2607730">your</span> <span
  m="2607850">GPU</span> <span m="2608300">performance</span> <span
  m="2608840">like</span> <span m="2609050">anything.</span></p><p><span
  m="2611100">What</span> <span m="2611280">people</span> <span
  m="2611610">do</span> <span m="2611820">is</span> <span
  m="2613020">take</span> <span m="2613200">a</span> <span
  m="2613270">data</span> <span m="2613560">set,</span> <span
  m="2614230">use</span> <span m="2614460">a</span> <span
  m="2614520">pre-shuffle</span> <span m="2615180">operation,</span> <span
  m="2615960">and</span> <span m="2616080">then</span> <span
  m="2616260">just</span> <span m="2617290">stream</span> <span
  m="2617730">through</span> <span m="2617910">the</span> <span
  m="2618000">data.</span> <span m="2618970">What</span> <span
  m="2619050">does</span> <span m="2619170">streaming</span> <span
  m="2619560">through</span> <span m="2619710">the</span> <span
  m="2619830">data</span> <span m="2620100">mean?</span> <span
  m="2621210">Without</span> <span m="2621540">replacement.</span> <span
  m="2622930">So</span> <span m="2623040">all</span> <span
  m="2623310">the</span> <span m="2623430">toolkits</span> <span
  m="2623940">actually</span> <span m="2624330">are</span> <span
  m="2624450">using</span> <span m="2624810">the</span> <span
  m="2624940">without</span> <span m="2625290">replacement</span> <span
  m="2625750">version,</span> <span m="2627680">even</span> <span
  m="2627920">though,</span> <span m="2628040">intuitively,</span> <span
  m="2629510">uniform</span> <span m="2629930">random</span> <span
  m="2630290">feels</span> <span m="2630620">much</span> <span
  m="2630830">nicer.</span></p><p><span m="2631940">And</span> <span
  m="2632120">that</span> <span m="2632270">feeling</span> <span
  m="2632630">is</span> <span m="2632750">not</span> <span
  m="2633320">ill-founded,</span> <span m="2633920">because</span> <span
  m="2634280">that's</span> <span m="2634550">the</span> <span
  m="2634670">only</span> <span m="2635000">version</span> <span
  m="2635420">we</span> <span m="2635540">know</span> <span
  m="2635750">how</span> <span m="2635900">to</span> <span
  m="2636020">analyze</span> <span m="2636410">mathematically.</span> <span
  m="2637910">So</span> <span m="2638630">even</span> <span
  m="2638840">for</span> <span m="2638960">this</span> <span
  m="2639140">method,</span> <span m="2639650">everybody</span> <span
  m="2640100">studies it.</span> <span m="2640510">There are</span> <span
  m="2640790">a million</span> <span m="2641150">papers</span> <span
  m="2641540">on</span> <span m="2641720">it.</span> <span
  m="2642590">The</span> <span m="2642710">version</span> <span
  m="2643070">that</span> <span m="2643220">is</span> <span
  m="2643370">used</span> <span m="2643640">in</span> <span
  m="2643760">practice</span> <span m="2644390">is</span> <span
  m="2644540">not</span> <span m="2644780">the</span> <span
  m="2644870">version</span> <span m="2645260">we</span> <span
  m="2645380">know</span> <span m="2645530">how</span> <span
  m="2645650">to</span> <span m="2645770">analyze.</span> <span
  m="2647540">It's</span> <span m="2647930">a</span> <span
  m="2648020">major</span> <span m="2648470">open</span> <span
  m="2648770">problem</span> <span m="2649220">in</span> <span
  m="2649310">the</span> <span m="2649400">field</span> <span
  m="2649670">of</span> <span m="2649760">stochastic</span> <span
  m="2650270">gradient</span> <span m="2651110">to</span> <span
  m="2651230">actually</span> <span m="2651710">analyze</span> <span
  m="2652160">the</span> <span m="2652280">version</span> <span
  m="2652610">that</span> <span m="2652760">we</span> <span
  m="2652880">use</span> <span m="2653180">in</span> <span
  m="2653270">practice.</span></p><p><span m="2654810">It's</span> <span
  m="2655440">kind</span> <span m="2655710">of</span> <span
  m="2655800">embarrassing,</span> <span m="2656340">but</span> <span
  m="2658410">without</span> <span m="2658770">replacement</span> <span
  m="2659310">means</span> <span m="2659550">non-IAD</span> <span
  m="2660270">probability</span> <span m="2660870">theory,</span> <span
  m="2661290">and</span> <span m="2661440">non-IAD</span> <span
  m="2662100">probability</span> <span m="2662730">theory</span> <span
  m="2663120">is</span> <span m="2663660">not</span> <span m="2663900">so</span>
  <span m="2664050">easy.</span> <span m="2664980">That's</span> <span
  m="2665250">the</span> <span m="2665580">answer.</span> <span
  m="2667020">OK.</span></p><p><span m="2667680">So</span> <span
  m="2667800">the</span> <span m="2667920">other</span> <span
  m="2668160">version</span> <span m="2668520">is</span> <span
  m="2668640">this</span> <span m="2668790">mini-batch</span> <span
  m="2669240">idea--</span> <span m="2669690">which</span> <span
  m="2670830">you</span> <span m="2671010">mentioned</span> <span
  m="2671670">really</span> <span m="2672210">early</span> <span
  m="2672570">on--</span> <span m="2673650">is</span> <span
  m="2674250">that</span> <span m="2675780">rather</span> <span
  m="2676230">than</span> <span m="2676860">pick</span> <span
  m="2677160">one</span> <span m="2677850">random</span> <span
  m="2678300">point,</span> <span m="2679560">I'll</span> <span
  m="2679800">pick</span> <span m="2680160">a</span> <span
  m="2680220">mini</span> <span m="2680520">batch.</span> <span
  m="2682230">So</span> <span m="2682410">I</span> <span m="2682500">had</span>
  <span m="2682650">a</span> <span m="2682680">million</span> <span
  m="2683010">points--</span> <span m="2683670">each</span> <span
  m="2683850">time,</span> <span m="2684150">instead</span> <span
  m="2684420">of</span> <span m="2684510">picking</span> <span
  m="2684780">one,</span> <span m="2685020">maybe</span> <span
  m="2685260">I'll</span> <span m="2685380">pick</span> <span
  m="2686040">10,</span> <span m="2686340">or.</span> <span
  m="2686440">100,</span> <span m="2686820">or</span> <span
  m="2686910">1,000,</span> <span m="2687360">or</span> <span
  m="2687450">what</span> <span m="2687660">have</span> <span
  m="2687900">you.</span> <span m="2688900">So</span> <span
  m="2688950">this</span> <span m="2690530">averages</span> <span
  m="2691130">things.</span> <span m="2691940">Averaging</span> <span
  m="2692390">things</span> <span m="2692840">reduces</span> <span
  m="2693290">the</span> <span m="2693380">variance.</span> <span
  m="2694070">So</span> <span m="2694250">this</span> <span
  m="2694430">is</span> <span m="2694850">actually</span> <span
  m="2695160">a</span> <span m="2695180">good</span> <span
  m="2695360">thing,</span> <span m="2697240">because</span> <span
  m="2697450">the</span> <span m="2697540">more</span> <span
  m="2697900">quantities</span> <span m="2698410">you</span> <span
  m="2698530">average,</span> <span m="2698890">the</span> <span
  m="2698980">less</span> <span m="2699220">noise</span> <span
  m="2699520">you</span> <span m="2699640">have.</span> <span
  m="2700690">That's</span> <span m="2701260">kind</span> <span
  m="2701470">of</span> <span m="2701920">what</span> <span
  m="2702070">happened</span> <span m="2702400">in</span> <span
  m="2702730">probability.</span></p><p><span m="2704380">So</span> <span
  m="2704740">we</span> <span m="2704920">pick</span> <span m="2705280">a</span>
  <span m="2705310">mini-batch,</span> <span m="2707690">and</span> <span
  m="2707770">the</span> <span m="2708550">stochastic</span> <span
  m="2709240">estimate</span> <span m="2710980">now</span> <span m="2711300">is
  this</span> <span m="2712350">not</span> <span m="2712560">just</span> <span
  m="2712770">a</span> <span m="2712800">single</span> <span
  m="2713130">gradient,</span> <span m="2713520">but</span> <span
  m="2713700">averaged</span> <span m="2714150">over</span> <span
  m="2715020">a</span> <span m="2715080">mini-batch.</span> <span m="2717490">So
  a</span> <span m="2717640">mini-batch</span> <span m="2718120">of</span> <span
  m="2718210">size</span> <span m="2718510">1</span> <span m="2718840">is</span>
  <span m="2718990">the</span> <span m="2719110">pure</span> <span
  m="2719470">vanilla</span> <span m="2719930">SGD.</span> <span
  m="2721000">Mini-batch</span> <span m="2721480">of</span> <span
  m="2721570">size</span> <span m="2721990">n</span> <span m="2722260">is</span>
  <span m="2722470">nothing</span> <span m="2722830">other</span> <span
  m="2723010">than</span> <span m="2723220">pure</span> <span
  m="2723490">gradient</span> <span m="2723910">descent.</span> <span
  m="2724750">Something</span> <span m="2725170">in</span> <span
  m="2725260">between</span> <span m="2725800">is</span> <span
  m="2726100">what</span> <span m="2726310">people</span> <span
  m="2726610">actually</span> <span m="2726970">use.</span> <span
  m="2728730">And</span> <span m="2728880">again,</span> <span
  m="2729180">the</span> <span m="2729270">theoretical</span> <span
  m="2729870">analysis</span> <span m="2730380">only</span> <span
  m="2730680">exists</span> <span m="2731070">if</span> <span
  m="2731190">the</span> <span m="2731280">mini-batch</span> <span
  m="2731820">is</span> <span m="2731940">picked</span> <span
  m="2732330">with</span> <span m="2732990">replacement</span> <span
  m="2733660">not</span> <span m="2733890">without</span> <span
  m="2734160">replacement.</span></p><p><span m="2736440">So</span> <span
  m="2736490">one</span> <span m="2736640">of</span> <span
  m="2736730">the</span> <span m="2736820">reasons</span> <span
  m="2737270">actually--</span> <span m="2737750">a</span> <span
  m="2738020">very</span> <span m="2738350">important</span> <span
  m="2738740">thing--</span> <span m="2740660">in</span> <span
  m="2740810">theory,</span> <span m="2741360">you</span> <span
  m="2741620">don't</span> <span m="2741920">gain</span> <span
  m="2742250">too</span> <span m="2742490">much</span> <span
  m="2742760">in</span> <span m="2742850">terms</span> <span
  m="2743150">of</span> <span m="2744050">computational</span> <span
  m="2744860">gains</span> <span m="2745190">on</span> <span
  m="2745310">convergent</span> <span m="2745880">speed</span> <span
  m="2746660">by</span> <span m="2746810">using</span> <span
  m="2747110">mini-batches.</span> <span m="2748100">But</span> <span
  m="2748280">mini-batches</span> <span m="2749030">are</span> <span
  m="2749150">really</span> <span m="2749570">crucial,</span> <span
  m="2750180">especially</span> <span m="2750740">in</span> <span
  m="2750900">the</span> <span m="2751130">deep</span> <span
  m="2751550">learning,</span> <span m="2751940">GPU-style</span> <span
  m="2752660">training,</span> <span m="2754160">because</span> <span
  m="2754580">they</span> <span m="2754820">allow</span> <span
  m="2755150">you</span> <span m="2755270">to</span> <span m="2755420">do</span>
  <span m="2755600">things</span> <span m="2755900">in</span> <span
  m="2756020">parallel.</span> <span m="2758330">Each</span> <span
  m="2758570">thread</span> <span m="2759740">or</span> <span
  m="2759920">each</span> <span m="2760130">core</span> <span
  m="2760520">or</span> <span m="2760640">subcore</span> <span
  m="2761270">or</span> <span m="2761360">small</span> <span
  m="2761720">chip</span> <span m="2762020">or</span> <span
  m="2762110">what</span> <span m="2762320">have,</span> <span
  m="2762530">you</span> <span m="2762650">depending</span> <span
  m="2763130">on</span> <span m="2763250">your</span> <span
  m="2763370">hardware,</span> <span m="2764880">can</span> <span
  m="2765150">be</span> <span m="2765270">working</span> <span
  m="2765660">with</span> <span m="2765810">one</span> <span
  m="2766020">stochastic</span> <span m="2766560">gradient.</span> <span
  m="2767290">So</span> <span m="2767340">mini-batches,</span> <span
  m="2768060">the</span> <span m="2768210">larger</span> <span
  m="2768600">the</span> <span m="2768720">mini</span> <span
  m="2768990">batch</span> <span m="2769620">the</span> <span
  m="2769710">more</span> <span m="2769920">things</span> <span
  m="2770220">you</span> <span m="2770310">can</span> <span
  m="2770460">do</span> <span m="2770550">in</span> <span
  m="2770640">parallel.</span></p><p><span m="2773760">So</span> <span
  m="2773890">mini-batches</span> <span m="2774610">are</span> <span
  m="2774760">greatly</span> <span m="2775540">exploited</span> <span
  m="2776170">by</span> <span m="2776320">people</span> <span
  m="2776740">to</span> <span m="2779050">give</span> <span
  m="2779380">you</span> <span m="2779440">a</span> <span
  m="2779500">cheap</span> <span m="2779800">version</span> <span
  m="2780220">of</span> <span m="2780340">parallelism.</span> <span
  m="2782140">And</span> <span m="2782450">where</span> <span
  m="2782550">does</span> <span m="2782650">the</span> <span
  m="2782740">parallelism</span> <span m="2783370">happen?</span> <span
  m="2783700">You</span> <span m="2783790">can</span> <span
  m="2783940">think</span> <span m="2784240">that</span> <span
  m="2784600">each</span> <span m="2784990">core</span> <span
  m="2786740">computes</span> <span m="2787340">a</span> <span
  m="2787400">stochastic</span> <span m="2788030">gradient.</span> <span
  m="2788670">So</span> <span m="2788720">the</span> <span
  m="2788810">hard</span> <span m="2789200">part</span> <span
  m="2789590">is</span> <span m="2789740">not</span> <span
  m="2790940">adding</span> <span m="2791270">these</span> <span
  m="2791450">things</span> <span m="2791720">up</span> <span
  m="2791930">and</span> <span m="2793040">making</span> <span
  m="2793370">the</span> <span m="2793460">update</span> <span
  m="2793790">to</span> <span m="2793970">x,</span> <span m="2794270">the</span>
  <span m="2794390">hard</span> <span m="2794750">part</span> <span
  m="2795170">is</span> <span m="2795320">computing</span> <span
  m="2795860">a</span> <span m="2796190">stochastic</span> <span
  m="2796730">gradient.</span> <span m="2798110">So</span> <span
  m="2798210">if</span> <span m="2798310">you</span> <span
  m="2798410">can</span> <span m="2798440">compute</span> <span
  m="2799190">10,000</span> <span m="2799820">of</span> <span
  m="2799910">those</span> <span m="2800150">in</span> <span
  m="2800240">parallel</span> <span m="2800660">because</span> <span
  m="2800990">you</span> <span m="2801050">have</span> <span
  m="2801170">10,000</span> <span m="2801710">cores,</span> <span
  m="2802820">great</span> <span m="2803090">for</span> <span
  m="2803270">you.</span> <span m="2804240">And</span> <span
  m="2804380">that's</span> <span m="2804590">the</span> <span
  m="2804680">reason</span> <span m="2804980">people</span> <span
  m="2805220">love</span> <span m="2805460">using</span> <span
  m="2805700">mini-batches.</span></p><p><span m="2807800">But</span> <span
  m="2807950">a</span> <span m="2807980">nice</span> <span
  m="2808220">side</span> <span m="2808550">remark</span> <span
  m="2808880">here,</span> <span m="2810240">this</span> <span
  m="2810540">also</span> <span m="2811800">brings</span> <span
  m="2812030">us</span> <span m="2812160">closer</span> <span
  m="2812460">to</span> <span m="2812550">the</span> <span
  m="2812670">research</span> <span m="2813090">edge</span> <span
  m="2813270">of</span> <span m="2813390">things</span> <span
  m="2813660">again.</span> <span m="2814710">That,</span> <span
  m="2815910">well,</span> <span m="2816240">you'd</span> <span
  m="2816480">love</span> <span m="2816750">to</span> <span
  m="2816900">use</span> <span m="2817140">very</span> <span
  m="2817380">large</span> <span m="2817650">mini-batches</span> <span
  m="2818280">so</span> <span m="2818460">that</span> <span
  m="2818610">you</span> <span m="2818700">can</span> <span
  m="2819030">fully</span> <span m="2819810">max</span> <span
  m="2820260">out</span> <span m="2820440">on</span> <span
  m="2820590">the</span> <span m="2820680">parallelism</span> <span
  m="2821310">available</span> <span m="2821760">to</span> <span
  m="2821880">you.</span> <span m="2822210">Maybe</span> <span
  m="2822420">you</span> <span m="2822480">have</span> <span
  m="2822600">a</span> <span m="2822660">multi-GPU</span> <span
  m="2823260">system,</span> <span m="2824070">if</span> <span
  m="2824220">you're</span> <span m="2825390">friends</span> <span
  m="2825750">with</span> <span m="2826020">nVidia or</span> <span
  m="2826400">Google.</span> <span m="2827340">I</span> <span
  m="2827460">only</span> <span m="2827730">have</span> <span
  m="2827950">two</span> <span m="2828200">GPUs.</span></p><p><span
  m="2829300">But it</span> <span m="2829500">depends</span> <span
  m="2829860">on</span> <span m="2829980">how</span> <span
  m="2830130">many</span> <span m="2830370">GPU</span> <span
  m="2830580">shows</span> <span m="2830790">you</span> <span
  m="2830910">have.</span> <span m="2831990">You'd</span> <span
  m="2832170">like</span> <span m="2832440">to</span> <span
  m="2832710">really</span> <span m="2833010">max</span> <span
  m="2833370">out</span> <span m="2833490">on</span> <span
  m="2833610">parallelism</span> <span m="2834240">so</span> <span
  m="2834390">that</span> <span m="2834900">you</span> <span
  m="2835050">can</span> <span m="2835500">really</span> <span
  m="2835800">crunch</span> <span m="2836280">through</span> <span
  m="2836940">big</span> <span m="2837360">data</span> <span
  m="2837630">sets</span> <span m="2837930">as</span> <span
  m="2838080">fast</span> <span m="2838350">as</span> <span
  m="2838470">possible.</span> <span m="2839550">But</span> <span
  m="2839730">you</span> <span m="2839790">know</span> <span
  m="2839910">what</span> <span m="2840030">happens</span> <span
  m="2840390">with</span> <span m="2840510">very</span> <span
  m="2840750">large</span> <span m="2840990">mini-batches?</span> <span
  m="2844510">So</span> <span m="2844630">if</span> <span m="2844720">you</span>
  <span m="2844780">have</span> <span m="2845330">very</span> <span
  m="2846010">large</span> <span m="2846310">mini-batches,</span> <span
  m="2848020">stochastic</span> <span m="2848680">gradient</span> <span
  m="2849130">starts</span> <span m="2849520">looking</span> <span
  m="2849850">more</span> <span m="2850090">like?</span> <span
  m="2853610">Full</span> <span m="2853910">gradient</span> <span
  m="2854390">descent,</span> <span m="2854750">which</span> <span
  m="2854930">is</span> <span m="2855020">also</span> <span
  m="2855200">called</span> <span m="2855350">batch</span> <span
  m="2855590">gradient</span> <span m="2855980">descent.</span></p><p><span
  m="2858350">That's</span> <span m="2858560">not</span> <span
  m="2858800">a</span> <span m="2858860">bad</span> <span
  m="2859070">thing.</span> <span m="2859310">That's</span> <span
  m="2859550">awesome</span> <span m="2859910">for</span> <span
  m="2860090">optimization.</span> <span m="2861320">But</span> <span
  m="2862160">it</span> <span m="2862250">is</span> <span m="2862610">a</span>
  <span m="2862670">weird</span> <span m="2863030">conundrum</span> <span
  m="2863570">that</span> <span m="2863720">happens</span> <span
  m="2864350">in</span> <span m="2864530">training</span> <span
  m="2864890">deep</span> <span m="2865100">neural</span> <span
  m="2865340">networks.</span> <span m="2866390">This</span> <span
  m="2866540">type</span> <span m="2866750">of</span> <span
  m="2866840">problem</span> <span m="2867200">we</span> <span
  m="2867320">wouldn't</span> <span m="2867590">have</span> <span
  m="2867750">for</span> <span m="2867890">convex</span> <span
  m="2868340">optimization.</span> <span m="2869450">But</span> <span
  m="2869600">in</span> <span m="2869720">deep</span> <span
  m="2869900">neural</span> <span m="2870140">networks,</span> <span
  m="2870700">this</span> <span m="2870780">is</span> <span
  m="2870880">really</span> <span m="2871130">disturbing</span> <span
  m="2871670">thing</span> <span m="2871880">happens,</span> <span
  m="2872960">that</span> <span m="2874100">if</span> <span
  m="2874190">you</span> <span m="2874310">use</span> <span
  m="2874550">this</span> <span m="2874760">very</span> <span
  m="2875030">large</span> <span m="2875510">mini-batches,</span> <span
  m="2876770">your</span> <span m="2876920">method</span> <span
  m="2877310">starts</span> <span m="2877880">resembling</span> <span
  m="2878390">gradient</span> <span m="2878780">descent.</span> <span
  m="2879260">That</span> <span m="2879440">means</span> <span
  m="2879650">it</span> <span m="2879740">decreases</span> <span
  m="2880370">noise</span> <span m="2880850">so</span> <span
  m="2881120">much</span> <span m="2882380">so</span> <span
  m="2882590">that</span> <span m="2882770">this</span> <span
  m="2882980">region</span> <span m="2883430">of</span> <span
  m="2883550">confusion</span> <span m="2885530">shrinks</span> <span
  m="2886070">so</span> <span m="2886310">much--</span> <span
  m="2887990">which</span> <span m="2888260">all</span> <span
  m="2888500">sounds</span> <span m="2888860">good,</span> <span
  m="2889100">but</span> <span m="2889310">it</span> <span
  m="2889490">ends</span> <span m="2889790">up</span> <span
  m="2889880">being</span> <span m="2890120">really</span> <span
  m="2890390">bad</span> <span m="2890630">for</span> <span
  m="2890810">machine</span> <span m="2891170">learning.</span></p><p><span
  m="2891950">That's</span> <span m="2892130">what</span> <span
  m="2892250">I</span> <span m="2892340">said,</span> <span
  m="2892580">that</span> <span m="2892730">in</span> <span
  m="2892820">machine</span> <span m="2893090">learning</span> <span
  m="2893360">you</span> <span m="2893480">want</span> <span
  m="2893720">some</span> <span m="2893930">region</span> <span
  m="2894230">of</span> <span m="2894380">uncertainty.</span> <span
  m="2895480">And</span> <span m="2895610">what</span> <span
  m="2895820">it</span> <span m="2895910">means</span> <span
  m="2896360">actually</span> <span m="2897260">is,</span> <span
  m="2898400">a</span> <span m="2898460">lot</span> <span m="2898640">of</span>
  <span m="2898760">people</span> <span m="2899590">have</span> <span
  m="2900350">been</span> <span m="2900500">working</span> <span
  m="2900860">on</span> <span m="2900980">this,</span> <span
  m="2901500">including</span> <span m="2902140">at</span> <span
  m="2902300">big</span> <span m="2902450">companies,</span> <span
  m="2903700">that</span> <span m="2904700">if</span> <span
  m="2904880">you</span> <span m="2905030">reduce</span> <span
  m="2905540">that</span> <span m="2905720">region</span> <span
  m="2906080">of</span> <span m="2906200">uncertainty</span> <span
  m="2906860">too</span> <span m="2907040">much,</span> <span
  m="2907730">you</span> <span m="2908030">end</span> <span
  m="2908300">up</span> <span m="2909020">over-fitting</span> <span
  m="2909770">your</span> <span m="2909890">neural</span> <span
  m="2910190">network.</span> <span m="2911250">And</span> <span
  m="2911300">then</span> <span m="2912350">it</span> <span
  m="2912470">starts</span> <span m="2913220">sucking</span> <span
  m="2913940">in</span> <span m="2914360">its</span> <span
  m="2915150">test</span> <span m="2915530">data,</span> <span
  m="2915860">unseen</span> <span m="2916280">data</span> <span
  m="2916550">performance.</span> <span m="2918080">So</span> <span
  m="2918260">even</span> <span m="2918560">though</span> <span
  m="2918800">for</span> <span m="2920000">parallelism,</span> <span
  m="2920750">programming,</span> <span m="2921740">optimization</span> <span
  m="2922490">theory,</span> <span m="2923300">big</span> <span
  m="2923570">mini-batch</span> <span m="2924110">is</span> <span
  m="2924290">awesome,</span> <span m="2925730">unfortunately</span> <span
  m="2926490">there's</span> <span m="2927500">price</span> <span
  m="2927860">to</span> <span m="2927950">be</span> <span
  m="2928070">paid,</span> <span m="2928910">that</span> <span
  m="2930630">it</span> <span m="2930780">hurts</span> <span
  m="2931200">your</span> <span m="2931970">test</span> <span
  m="2932300">error</span> <span m="2932520">performance.</span></p><p><span
  m="2933780">And</span> <span m="2933900">there</span> <span
  m="2934010">are</span> <span m="2934050">all</span> <span
  m="2934380">sorts</span> <span m="2934710">of</span> <span
  m="2934980">methods</span> <span m="2935490">people</span> <span
  m="2935760">are</span> <span m="2935790">trying</span> <span
  m="2936030">to</span> <span m="2936150">cook</span> <span
  m="2936420">up,</span> <span m="2937680">including</span> <span
  m="2939420">shrinking</span> <span m="2940140">data</span> <span
  m="2940800">accordingly,</span> <span m="2941880">or</span> <span
  m="2942090">chaining</span> <span m="2942510">neural</span> <span
  m="2942810">network</span> <span m="2943200">architecture,</span> <span
  m="2943860">and</span> <span m="2944010">all</span> <span
  m="2944220">sorts</span> <span m="2944490">of</span> <span
  m="2944610">ideas.</span> <span m="2944970">You</span> <span
  m="2945060">can</span> <span m="2945210">cook</span> <span
  m="2945420">up</span> <span m="2945540">your</span> <span
  m="2945720">ideas</span> <span m="2946020">for</span> <span
  m="2946140">your</span> <span m="2946290">favorite</span> <span
  m="2946680">architecture,</span> <span m="2947610">how</span> <span
  m="2947820">to</span> <span m="2947910">make</span> <span m="2948120">a</span>
  <span m="2948180">large</span> <span m="2948450">mini-batch</span> <span
  m="2948960">without</span> <span m="2949380">hurting</span> <span
  m="2949770">the</span> <span m="2949860">final</span> <span
  m="2950220">performance.</span> <span m="2951270">But</span> <span
  m="2951420">it's</span> <span m="2951510">still</span> <span
  m="2952020">somewhat</span> <span m="2952650">of</span> <span
  m="2953490">an</span> <span m="2953640">open</span> <span
  m="2953940">question</span> <span m="2954450">on</span> <span
  m="2954630">how</span> <span m="2954900">to</span> <span
  m="2955110">optimally</span> <span m="2955680">select</span> <span
  m="2957540">how</span> <span m="2957870">large</span> <span
  m="2958290">your</span> <span m="2958500">mini-batch</span> <span
  m="2958980">should</span> <span m="2959220">be.</span> <span
  m="2960720">So</span> <span m="2961700">even</span> <span
  m="2961940">though</span> <span m="2962060">these</span> <span
  m="2962240">ideas</span> <span m="2962570">are</span> <span
  m="2962630">simple,</span> <span m="2963080">you</span> <span
  m="2963170">see</span> <span m="2963320">that</span> <span
  m="2963680">every</span> <span m="2963950">simple</span> <span
  m="2964340">idea</span> <span m="2964670">leads</span> <span
  m="2965120">to</span> <span m="2965810">an</span> <span
  m="2965930">entire</span> <span m="2966790">sub</span> <span
  m="2967100">area</span> <span m="2968180">of</span> <span
  m="2968550">SGD.</span></p><p><span m="2970880">So</span> <span
  m="2971680">here</span> <span m="2971930">are</span> <span
  m="2972200">practical</span> <span m="2972770">challenges.</span> <span
  m="2973880">People</span> <span m="2974270">have</span> <span
  m="2974660">various</span> <span m="2975170">heuristics</span> <span
  m="2975860">for</span> <span m="2975950">solving</span> <span
  m="2976430">these</span> <span m="2976580">challenges.</span> <span
  m="2977630">You</span> <span m="2977780">can</span> <span
  m="2977960">cook</span> <span m="2978170">up</span> <span
  m="2978290">your</span> <span m="2978500">own,</span> <span
  m="2979190">but</span> <span m="2979370">it's</span> <span
  m="2979520">not</span> <span m="2979790">that</span> <span
  m="2980000">one</span> <span m="2980240">idea</span> <span
  m="2980600">always</span> <span m="2980990">works.</span> <span
  m="2982340">So</span> <span m="2982640">if</span> <span m="2982730">you</span>
  <span m="2982820">look</span> <span m="2983030">at</span> <span
  m="2984130">SGD,</span> <span m="2985490">what</span> <span
  m="2985670">are</span> <span m="2985730">the</span> <span
  m="2985850">moving</span> <span m="2986150">parts?</span> <span
  m="2988310">The</span> <span m="2988400">moving</span> <span
  m="2988700">parts</span> <span m="2988940">in</span> <span
  m="2989110">SGD--</span> <span m="2990400">the</span> <span
  m="2990530">gradients,</span> <span m="2991520">stochastic</span> <span
  m="2992060">gradient,</span> <span m="2992510">the</span> <span
  m="2992630">step</span> <span m="2992880">size,</span> <span
  m="2993200">the</span> <span m="2993290">mini</span> <span
  m="2993560">batch.</span> <span m="2994220">So</span> <span
  m="2995210">how</span> <span m="2995390">should</span> <span m="2995570">I
  pick</span> <span m="2995840">step</span> <span m="2996110">sizes--</span>
  <span m="2997100">very</span> <span m="2997430">non-trivial</span> <span
  m="2998090">problem.</span></p><p><span m="2999890">Different</span> <span
  m="3000250">deep</span> <span m="3000460">learning</span> <span
  m="3000760">toolkits</span> <span m="3001180">may</span> <span
  m="3001300">have</span> <span m="3001450">different</span> <span
  m="3001780">ways</span> <span m="3002020">of</span> <span
  m="3002140">automating</span> <span m="3002710">that</span> <span
  m="3002890">tuning,</span> <span m="3004030">but</span> <span
  m="3004180">it's</span> <span m="3004300">one</span> <span
  m="3004420">of</span> <span m="3004510">the</span> <span
  m="3004600">painful</span> <span m="3004960">things.</span> <span
  m="3007540">Which</span> <span m="3007810">mini</span> <span
  m="3008050">batch</span> <span m="3008350">to</span> <span
  m="3008470">use?</span> <span m="3009040">With</span> <span
  m="3009250">replacement,</span> <span m="3009760">without</span> <span
  m="3010060">replacement</span> <span m="3010540">I</span> <span
  m="3010630">already</span> <span m="3010900">showed</span> <span
  m="3011200">you.</span> <span m="3012200">But</span> <span
  m="3012370">which</span> <span m="3012640">mini</span> <span
  m="3012910">batch</span> <span m="3013090">should</span> <span
  m="3013270">I</span> <span m="3013330">use,</span> <span
  m="3013630">how</span> <span m="3013750">large</span> <span
  m="3014110">that</span> <span m="3014260">should</span> <span
  m="3014470">be?</span> <span m="3015470">Again,</span> <span
  m="3015800">not</span> <span m="3015910">an</span> <span
  m="3016030">easy</span> <span m="3016270">question</span> <span
  m="3016690">to</span> <span m="3016810">answer.</span></p><p><span
  m="3018040">How</span> <span m="3018280">to</span> <span
  m="3018400">compute</span> <span m="3018790">stochastic</span> <span
  m="3019360">gradients.</span> <span m="3020830">Does</span> <span
  m="3020980">anybody</span> <span m="3021340">know</span> <span
  m="3021520">how</span> <span m="3021610">stochastic</span> <span
  m="3022090">gradients</span> <span m="3022540">are</span> <span
  m="3022570">computed</span> <span m="3022990">for</span> <span
  m="3023110">deep</span> <span m="3023320">network</span> <span
  m="3023620">training?</span> <span m="3025710">Anybody</span> <span
  m="3026040">know?</span> <span m="3030190">There</span> <span
  m="3030370">is</span> <span m="3030760">a</span> <span m="3030820">very</span>
  <span m="3031090">famous</span> <span m="3031570">algorithm</span> <span
  m="3032110">called</span> <span m="3032320">back</span> <span
  m="3032590">propagation.</span> <span m="3034430">That</span> <span
  m="3034610">back</span> <span m="3034850">propagation</span> <span
  m="3035690">algorithm</span> <span m="3036200">is</span> <span
  m="3036380">used</span> <span m="3036650">to</span> <span
  m="3036770">compute</span> <span m="3037250">a</span> <span
  m="3037280">single</span> <span m="3037580">stochastic</span> <span
  m="3038060">gradient.</span></p><p><span m="3039800">Some</span> <span
  m="3040040">people</span> <span m="3040790">use</span> <span
  m="3041060">the</span> <span m="3041150">word</span> <span
  m="3041330">back</span> <span m="3041620">prop</span> <span
  m="3042030">to</span> <span m="3042170">mean</span> <span
  m="3042370">SGD.</span> <span m="3043070">But</span> <span
  m="3043220">what</span> <span m="3043370">back</span> <span
  m="3043680">prop</span> <span m="3044090">really means</span> <span
  m="3044420">is</span> <span m="3045440">some</span> <span
  m="3046160">kind</span> <span m="3046400">of</span> <span
  m="3046520">algorithm</span> <span m="3047060">which</span> <span
  m="3047510">computes</span> <span m="3047930">for</span> <span
  m="3048080">you</span> <span m="3048260">a</span> <span
  m="3048320">single</span> <span m="3048620">stochastic</span> <span
  m="3049130">gradient.</span> <span m="3051660">And</span> <span
  m="3051810">hence</span> <span m="3053250">this</span> <span
  m="3053850">TensorFlow,</span> <span m="3054390">et</span> <span
  m="3054570">cetera--</span> <span m="3054780">these</span> <span
  m="3054930">toolkits--</span> <span m="3055350">they</span> <span
  m="3055470">come</span> <span m="3055680">up</span> <span
  m="3055770">with</span> <span m="3055920">all</span> <span
  m="3056070">sorts</span> <span m="3056340">of</span> <span
  m="3056460">ways</span> <span m="3056730">to</span> <span
  m="3057210">automate</span> <span m="3057870">the</span> <span
  m="3058230">computation</span> <span m="3058800">of</span> <span
  m="3058920">a</span> <span m="3058950">gradient.</span> <span
  m="3059400">Because,</span> <span m="3059760">really,</span> <span
  m="3060030">that's</span> <span m="3060270">the</span> <span
  m="3060360">main</span> <span m="3060570">thing.</span></p><p><span
  m="3061560">And</span> <span m="3061680">then</span> <span
  m="3061860">other</span> <span m="3062100">ideas</span> <span
  m="3062400">like</span> <span m="3062520">gradient</span> <span
  m="3062910">clipping,</span> <span m="3063300">and</span> <span
  m="3063390">momentum,</span> <span m="3063850">et</span> <span
  m="3064060">cetera.</span> <span m="3064430">There's a</span> <span
  m="3064620">bunch</span> <span m="3064920">of</span> <span
  m="3065040">other</span> <span m="3065280">ideas.</span> <span
  m="3066220">And</span> <span m="3066330">the</span> <span
  m="3066420">theoretical</span> <span m="3066930">challenges,</span> <span
  m="3067470">I</span> <span m="3068160">mentioned</span> <span
  m="3068520">to</span> <span m="3068640">you</span> <span
  m="3068730">already--</span> <span m="3069810">proving</span> <span
  m="3070170">that</span> <span m="3070380">it</span> <span
  m="3070470">works,</span> <span m="3071040">that</span> <span
  m="3071250">it</span> <span m="3071370">actually</span> <span
  m="3071670">solves</span> <span m="3072140">what</span> <span
  m="3072510">it</span> <span m="3072600">set</span> <span
  m="3072840">out</span> <span m="3072960">to</span> <span
  m="3073080">do.</span> <span m="3073350">Unfortunately,</span> <span
  m="3074640">I</span> <span m="3074730">was</span> <span m="3074910">too</span>
  <span m="3075120">slow.</span> <span m="3075870">I</span> <span
  m="3075960">couldn't</span> <span m="3076260">show</span> <span
  m="3076500">you</span> <span m="3076680">the</span> <span
  m="3077250">awesome</span> <span m="3078820">five-line</span> <span
  m="3079410">proof</span> <span m="3079680">that</span> <span
  m="3079860">I</span> <span m="3079980">have</span> <span
  m="3080250">that</span> <span m="3080470">SGD</span> <span
  m="3080880">works</span> <span m="3081210">for</span> <span
  m="3081330">neural</span> <span m="3081600">networks.</span> <span
  m="3083420">And</span> <span m="3084320">theoretical</span> <span
  m="3084920">analysis,</span> <span m="3085400">as</span> <span
  m="3085550">I</span> <span m="3085610">said,</span> <span
  m="3085850">it's</span> <span m="3086930">really</span> <span
  m="3087260">laggy.</span></p><p><span m="3088610">My</span> <span
  m="3088820">proof</span> <span m="3089120">also</span> <span
  m="3089450">uses</span> <span m="3090350">the</span> <span
  m="3090470">with</span> <span m="3090740">replacement.</span> <span
  m="3092670">And</span> <span m="3092830">the</span> <span
  m="3092890">without</span> <span m="3093280">replacement</span> <span
  m="3094000">version,</span> <span m="3094390">which</span> <span
  m="3094570">is</span> <span m="3094660">the</span> <span
  m="3094780">one</span> <span m="3094960">that</span> <span
  m="3095110">is</span> <span m="3095230">actually</span> <span
  m="3095530">implemented,</span> <span m="3098900">there's</span> <span
  m="3099010">very</span> <span m="3099220">little</span> <span
  m="3099610">progress</span> <span m="3100120">on</span> <span
  m="3100240">that.</span> <span m="3100390">There</span> <span
  m="3100510">is</span> <span m="3100600">some</span> <span
  m="3100750">progress.</span> <span m="3101230">There's</span> <span
  m="3101500">a</span> <span m="3101530">bunch</span> <span
  m="3101800">of</span> <span m="3101860">papers,</span> <span
  m="3102640">including</span> <span m="3103090">from</span> <span
  m="3103290">our</span> <span m="3103390">colleagues</span> <span
  m="3103750">at</span> <span m="3103840">MIT,</span> <span
  m="3104200">but</span> <span m="3104530">it's</span> <span
  m="3105460">quite</span> <span m="3105730">unsolved.</span></p><p><span
  m="3107050">And</span> <span m="3107260">the</span> <span
  m="3107350">biggest</span> <span m="3107710">question,</span> <span
  m="3108370">which</span> <span m="3109510">most</span> <span
  m="3109960">of</span> <span m="3110050">the</span> <span
  m="3110170">people</span> <span m="3110950">in</span> <span
  m="3111070">machine</span> <span m="3111430">learning</span> <span
  m="3111910">are</span> <span m="3112030">currently</span> <span
  m="3112480">excited</span> <span m="3113050">about</span> <span
  m="3113860">these</span> <span m="3114100">days</span> <span
  m="3115120">is</span> <span m="3116350">stuff</span> <span
  m="3116680">like,</span> <span m="3116980">why</span> <span
  m="3117340">does</span> <span m="3117670">SGD</span> <span
  m="3118360">work</span> <span m="3118690">so</span> <span
  m="3119020">well</span> <span m="3119260">for</span> <span
  m="3119470">neural</span> <span m="3119770">networks?</span> <span
  m="3120700">We</span> <span m="3120790">use</span> <span
  m="3121060">this</span> <span m="3121270">crappy</span> <span
  m="3121660">optimization</span> <span m="3122320">method,</span> <span
  m="3122900">it</span> <span m="3123640">very</span> <span
  m="3123910">rapidly</span> <span m="3124390">does</span> <span
  m="3124570">some</span> <span m="3124780">fitting--</span> <span
  m="3125640">the</span> <span m="3125830">data is</span> <span
  m="3125950">large,</span> <span m="3126280">neural</span> <span
  m="3126550">network</span> <span m="3126910">is</span> <span
  m="3127000">large,</span> <span m="3127990">and</span> <span
  m="3128410">then</span> <span m="3128830">this</span> <span
  m="3129190">neural</span> <span m="3129460">network</span> <span
  m="3129850">ends</span> <span m="3130060">up</span> <span
  m="3130210">having</span> <span m="3130480">great</span> <span
  m="3130810">classification</span> <span m="3131560">performance.</span> <span
  m="3132700">Why</span> <span m="3132850">is</span> <span
  m="3132940">that</span> <span m="3133090">happening?</span> <span
  m="3134060">It's</span> <span m="3134110">called</span> <span
  m="3134380">trying</span> <span m="3134650">to</span> <span
  m="3135010">explain--</span> <span m="3136090">build</span> <span
  m="3136420">a</span> <span m="3136510">theory</span> <span
  m="3136900">of</span> <span m="3137020">generalization.</span> <span
  m="3137860">Why</span> <span m="3138070">does</span> <span
  m="3139060">an</span> <span m="3139210">SGD-trained</span> <span
  m="3140260">neural</span> <span m="3140560">network</span> <span
  m="3141430">work</span> <span m="3141730">better</span> <span
  m="3142090">than</span> <span m="3142300">neural</span> <span
  m="3142570">networks</span> <span m="3142990">train</span> <span
  m="3143260">with</span> <span m="3143410">more</span> <span
  m="3143620">fancy</span> <span m="3144010">optimization</span> <span
  m="3144670">methods?</span></p><p><span m="3145660">It's</span> <span
  m="3145840">a</span> <span m="3145900">mystery,</span> <span
  m="3146380">and</span> <span m="3147160">most</span> <span
  m="3147400">of</span> <span m="3147460">the</span> <span
  m="3147580">people</span> <span m="3147850">who</span> <span
  m="3147940">take</span> <span m="3148240">interest</span> <span
  m="3148630">in</span> <span m="3148720">theoretical</span> <span
  m="3149260">machine</span> <span m="3149560">learning</span> <span
  m="3150010">and</span> <span m="3150100">statistics,</span> <span
  m="3151150">that</span> <span m="3151330">is</span> <span
  m="3151450">one</span> <span m="3151600">of</span> <span
  m="3151720">the</span> <span m="3151810">mysteries</span> <span
  m="3152230">they're</span> <span m="3152380">trying</span> <span
  m="3152620">to</span> <span m="3152740">understand.</span> <span
  m="3153730">So</span> <span m="3154390">I</span> <span
  m="3154480">think</span> <span m="3154630">that's</span> <span
  m="3155560">my</span> <span m="3155860">story</span> <span
  m="3156130">of</span> <span m="3156400">SGD.</span> <span
  m="3157420">And</span> <span m="3158050">this</span> <span
  m="3158380">is</span> <span m="3158470">the</span> <span
  m="3158560">part</span> <span m="3158890">we</span> <span
  m="3159880">skipped,</span> <span m="3160270">but</span> <span
  m="3160540">it's</span> <span m="3160730">OK.</span> <span
  m="3161480">The</span> <span m="3161980">intuition</span> <span
  m="3162490">behind</span> <span m="3162870">SGD</span> <span
  m="3163250">is</span> <span m="3164170">much</span> <span
  m="3164410">more</span> <span m="3164590">important</span> <span
  m="3165070">in</span> <span m="3165250">this.</span></p><p><span
  m="3166190">So</span> <span m="3166630">I</span> <span
  m="3166720">think</span> <span m="3166900">we</span> <span
  m="3167020">can</span> <span m="3168470">close.</span></p><p><span
  m="3168950">PROFESSOR STRANG:</span> <span m="3169106">Thank</span> <span
  m="3169262">you.</span></p><p><span m="3169890">[APPLAUSE]</span></p><p><span
  m="3175530">And</span> <span m="3176140">maybe</span> <span m="3176430">I
  can</span> <span m="3176740">learn</span> <span m="3176870">the</span> <span
  m="3177120">proof</span> <span m="3177680">for</span> <span
  m="3178360">Monday's</span> <span m="3178750">lecture.</span></p><p><span
  m="3179240">PROFESSOR SRA:</span> <span m="3179380">Exactly.</span> <span
  m="3179800">Yeah,</span> <span m="3179930">I</span> <span
  m="3180020">think</span> <span m="3180260">so.</span> <span
  m="3180695">That'll</span> <span m="3181160">be</span> <span
  m="3181250">great.</span></p>
uid: cc1df015cfc3b3dd42f1d611e51bd754
type: courses
layout: video
---
