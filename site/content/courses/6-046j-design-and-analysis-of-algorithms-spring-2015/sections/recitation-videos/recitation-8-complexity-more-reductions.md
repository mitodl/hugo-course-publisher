---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to
  NP-Completeness are discussed.</p> <p><strong>Instructors:</strong> Amartya
  Shankha Biswas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: G7mqtB6npfE
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 92d5bc57907dddc35555b5fd26a0b200
  - id: G7mqtB6npfE.srt
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-8-complexity-more-reductions/G7mqtB6npfE.srt
    title: 3play caption file
    type: null
    uid: e58235e767192cfb5424ab984ac1b939
  - id: G7mqtB6npfE.pdf
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-8-complexity-more-reductions/G7mqtB6npfE.pdf
    title: 3play pdf file
    type: null
    uid: 388be709efd841104a32e7076592f24e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 6906d0e6f352c08e697de61af1e0866d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bb6bfeb7d1abc5fd0f3b5d5bf79f7ae8
  - id: Video-YouTube-Stream
    media_location: G7mqtB6npfE
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    title: Video-YouTube-Stream
    type: Video
    uid: adf001da9291a0ed6c83bce2652366ce
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/G7mqtB6npfE/default.jpg'
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c1df2b0e3e95a9cca960978eb690ced6
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    title: Video-iTunes U-MP4
    type: Video
    uid: 9e3096a6afff7e373146b15da7928a5a
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec08_300k.mp4'
    parent_uid: ee6f3c270c10d7b9558d51a2dca6fde3
    title: Video-Internet Archive-MP4
    type: Video
    uid: e63cce42bcca1ae2878ec8635fe5fc0b
inline_embed_id: '77826237recitation8:complexity:morereductions6367823'
order_index: 420
parent_uid: 8c671299aae36eba669ca13490c21dec
related_resources_text: ''
short_url: recitation-8-complexity-more-reductions
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-8-complexity-more-reductions
title: 'Recitation 8: Complexity: More Reductions'
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
  m="10990">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12370">additional</span> <span
  m="12800">materials</span> <span m="13340">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14450">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="23250">AMARTYA SHANKHA BISWAS: Let's</span> <span m="23420">start.</span>
  <span m="24240">So</span> <span m="25280">today</span> <span
  m="25650">we're</span> <span m="25790">going</span> <span m="25870">to</span>
  <span m="26080">do</span> <span m="26220">some</span> <span
  m="26560">NP</span> <span m="26720">hardness</span> <span
  m="27160">reductions.</span> <span m="28290">So</span> <span
  m="28590">let's</span> <span m="28770">just</span> <span m="28930">do</span>
  <span m="29020">a</span> <span m="29070">quick</span> <span
  m="29280">recap</span> <span m="29710">of</span> <span m="30950">P</span>
  <span m="31100">and</span> <span m="31320">NP.</span> <span
  m="32000">So</span> <span m="34420">let's</span> <span m="34920">see.</span>
  <span m="37920">So</span> <span m="38400">P</span> <span m="38590">is--</span>
  <span m="49980">so you have a</span> <span m="50020">decision</span> <span
  m="50360">problem.</span> <span m="51150">So I have an</span> <span
  m="51380">input</span> <span m="51730">x</span> <span m="52730">and</span>
  <span m="52860">you</span> <span m="53480">have</span> <span
  m="53620">some</span> <span m="53740">algorithm,</span> <span
  m="53890">A,</span> <span m="55010">and it</span> <span m="55210">spits</span>
  <span m="55480">out</span> <span m="55600">an</span> <span
  m="55720">answer,</span> <span m="56040">which</span> <span
  m="56220">is</span> <span m="57230">either</span> <span m="57450">0</span>
  <span m="57750">or</span> <span m="57890">1.</span> <span m="58710">So</span>
  <span m="58830">that's</span> <span m="58970">a</span> <span
  m="58990">decision</span> <span m="59310">problem.</span> <span
  m="59950">And</span> <span m="60870">if a</span> <span
  m="60940">problem</span> <span m="61160">isn't</span> <span
  m="61430">P,</span> <span m="62070">this algorithm</span> <span
  m="62520">A</span> <span m="62900">runs</span> <span m="63160">in</span> <span
  m="63220">polynomial</span> <span m="63720">time.</span></p><p><span
  m="65485">So</span> <span m="65980">what about</span> <span
  m="66310">NP?</span> <span m="67410">So</span> <span m="67680">NP</span> <span
  m="68370">is</span> <span m="69320">when</span> <span m="69490">the</span>
  <span m="69560">solution</span> <span m="69910">is</span> <span
  m="70010">verifiable</span> <span m="70355">in</span> <span
  m="70700">polynomial</span> <span m="71210">time.</span> <span
  m="71860">So</span> <span m="72010">let's</span> <span m="72200">say</span>
  <span m="72330">you</span> <span m="72390">have</span> <span
  m="72510">an</span> <span m="72580">input</span> <span m="72810">x</span>
  <span m="73840">and</span> <span m="74870">some</span> <span
  m="75510">oracle,</span> <span m="75950">which</span> <span
  m="76120">is</span> <span m="76300">[INAUDIBLE]</span> <span
  m="76550">run</span> <span m="76790">exponential</span> <span
  m="77230">time</span> <span m="77430">or is has infinite</span> <span
  m="77890">computation</span> <span m="78300">time</span> <span
  m="78900">gives</span> <span m="79140">you</span> <span m="79270">an</span>
  <span m="79360">answer,</span> <span m="81250">so</span> <span
  m="81460">you</span> <span m="81740">get</span> <span m="81890">x</span> <span
  m="82180">and</span> <span m="82290">you</span> <span m="82350">get</span>
  <span m="82490">an</span> <span m="82570">answer</span> <span
  m="82850">which</span> <span m="82990">is</span> <span m="83050">either</span>
  <span m="83260">0</span> <span m="83490">or</span> <span m="83620">1.</span>
  <span m="85830">And</span> <span m="86190">you</span> <span
  m="86300">also</span> <span m="86490">get</span> <span m="86590">a</span>
  <span m="86640">certificate.</span> <span m="87870">So</span> <span
  m="88060">let's</span> <span m="88200">call</span> <span m="88240">that</span>
  <span m="88340">a</span> <span m="88390">certificate.</span> <span
  m="89250">And</span> <span m="89440">given</span> <span m="89660">these</span>
  <span m="89890">three</span> <span m="90150">values,</span> <span
  m="91150">you</span> <span m="92160">can</span> <span m="92290">verify</span>
  <span m="92720">whether the</span> <span m="93000">solution</span> <span
  m="93360">was</span> <span m="93460">correct</span> <span m="93740">or</span>
  <span m="93850">not</span> <span m="94270">in</span> <span
  m="94400">polynomial</span> <span m="94655">time.</span> <span
  m="96080">Make</span> <span m="96200">sense?</span></p><p><span
  m="97690">So</span> <span m="98080">clearly</span> <span m="98550">if</span>
  <span m="98670">you're</span> <span m="98770">going</span> <span
  m="98950">to</span> <span m="99070">compute</span> <span m="99400">the</span>
  <span m="99460">answer</span> <span m="99680">in polynomial</span> <span
  m="100000">time,</span> <span m="100150">you</span> <span m="100540">can
  also</span> <span m="100620">verify</span> <span m="100910">in</span> <span
  m="101000">polynomial</span> <span m="101360">time.</span> <span
  m="101640">So</span> <span m="102060">P</span> <span m="102250">is a
  subset</span> <span m="102350">of</span> <span m="102480">NP.</span> <span
  m="104260">And</span> <span m="105400">so</span> <span
  m="105590">that's</span> <span m="105770">it.</span> <span
  m="106490">So</span> <span m="107420">now,</span> <span m="108370">NP</span>
  <span m="108690">hard</span> <span m="108960">problems</span> <span
  m="109910">are</span> <span m="110110">problems</span> <span
  m="110580">that</span> <span m="110690">are</span> <span m="110760">at</span>
  <span m="110830">least</span> <span m="111120">as</span> <span
  m="111330">hard</span> <span m="111610">to solve as</span> <span
  m="112070">any</span> <span m="112290">problem</span> <span m="112560">in
  NP.</span> <span m="113620">And</span> <span m="113960">so</span> <span
  m="114220">now</span> <span m="114410">today</span> <span
  m="114640">we're</span> <span m="115000">going</span> <span m="115255">to be
  doing</span> <span m="115510">some</span> <span m="115660">reductions.</span>
  <span m="116290">So I think</span> <span m="116700">we did</span> <span
  m="116870">some of them in</span> <span m="117300">class,</span> <span
  m="118400">Nintendo</span> <span m="118840">games</span> <span
  m="119060">or</span> <span m="119160">something.</span> <span m="120150">Is
  that</span> <span m="120300">what we</span> <span m="120410">did?</span> <span
  m="121120">So</span> <span m="121990">today</span> <span m="122250">we are
  going to</span> <span m="122510">do</span> <span m="122630">some</span> <span
  m="122940">less</span> <span m="123260">interesting</span> <span
  m="123640">examples,</span> <span m="124140">but</span> <span
  m="125720">let's</span> <span m="125890">see.</span></p><p><span
  m="126960">So</span> <span m="128330">how</span> <span m="128449">do</span>
  <span m="128509">we</span> <span m="128580">do</span> <span
  m="128680">reductions?</span> <span m="129900">So</span> <span
  m="130509">if</span> <span m="131150">we</span> <span m="131260">know</span>
  <span m="131480">that</span> <span m="131880">we</span> <span
  m="131940">have</span> <span m="132870">a</span> <span
  m="132940">problem</span> <span m="133320">A,</span> <span
  m="134130">which</span> <span m="134400">is</span> <span m="134590">a</span>
  <span m="134670">hard</span> <span m="134900">problem,</span> <span
  m="136070">and</span> <span m="136480">we</span> <span m="136590">want</span>
  <span m="136840">to</span> <span m="136970">show</span> <span
  m="137340">that</span> <span m="137590">problem</span> <span
  m="137910">B</span> <span m="138110">is</span> <span m="138220">hard.</span>
  <span m="145010">So</span> <span m="145130">we</span> <span
  m="145190">want</span> <span m="145330">to</span> <span m="145400">draw</span>
  <span m="145590">this</span> <span m="145750">implication.</span> <span
  m="147560">So</span> <span m="147710">if we want to draw</span> <span
  m="148000">this implication--</span> <span m="148810">so</span> <span
  m="148910">this</span> <span m="149030">is</span> <span
  m="149100">equivalent</span> <span m="149470">to</span> <span
  m="149530">saying</span> <span m="150350">that</span> <span
  m="153760">if</span> <span m="153930">B is</span> <span
  m="154320">easy,</span> <span m="158140">then</span> <span m="159432">A</span>
  <span m="159790">is</span> <span m="160080">easy.</span> <span
  m="161003">Sorry,</span> <span m="161486">other way.</span> <span
  m="165350">This</span> <span m="165480">is the</span> <span
  m="165620">counter</span> <span m="165830">positive.</span></p><p><span
  m="166830">So</span> <span m="168390">assuming</span> <span
  m="168700">that</span> <span m="168880">B has a</span> <span
  m="169160">polynomial</span> <span m="169540">time</span> <span
  m="169860">solution,</span> <span m="170550">A</span> <span m="170810">has
  a</span> <span m="170850">polynomial</span> <span m="171300">time</span> <span
  m="171470">solution.</span> <span m="172310">And</span> <span
  m="172420">that</span> <span m="172590">statement</span> <span
  m="172830">is</span> <span m="172930">equivalent</span> <span
  m="172980">to</span> <span m="173270">saying</span> <span m="173560">if A
  is</span> <span m="173840">hard,</span> <span m="174080">B is</span> <span
  m="174320">hard.</span> <span m="174410">So</span> <span m="174510">if</span>
  <span m="174570">you</span> <span m="174630">know</span> <span
  m="174770">that</span> <span m="174900">A</span> <span m="175060">is</span>
  <span m="175420">an</span> <span m="175600">NP</span> <span
  m="175920">hard</span> <span m="176180">problem,</span> <span
  m="176510">we</span> <span m="176820">can</span> <span m="176970">say</span>
  <span m="177070">that</span> <span m="177260">B</span> <span m="177470">is
  an</span> <span m="177610">NP</span> <span m="177680">hard</span> <span
  m="177870">problem.</span> <span m="178870">So</span> <span
  m="179980">if</span> <span m="180180">we</span> <span m="180260">want</span>
  <span m="180380">to</span> <span m="180420">show</span> <span
  m="180580">that</span> <span m="180700">B</span> <span m="180995">is an</span>
  <span m="181290">NP</span> <span m="181410">hard</span> <span
  m="181670">problem,</span> <span m="181980">first</span> <span
  m="182170">we</span> <span m="182230">show</span> <span m="182390">that</span>
  <span m="182540">B</span> <span m="182730">is an</span> <span
  m="182830">NP,</span> <span m="183320">and</span> <span m="183810">then</span>
  <span m="184010">we</span> <span m="184180">show that</span> <span
  m="184320">B is</span> <span m="184490">hard.</span></p><p><span
  m="186850">So</span> <span m="187890">the</span> <span m="187990">way</span>
  <span m="189060">do</span> <span m="189160">this</span> <span
  m="189290">step</span> <span m="190120">is--</span> <span m="191320">so</span>
  <span m="191720">your</span> <span m="192610">A</span> <span
  m="192830">looks</span> <span m="193030">like</span> <span
  m="193210">this.</span> <span m="194250">You</span> <span
  m="194890">have</span> <span m="195220">your</span> <span
  m="195410">algorithm,</span> <span m="197250">and</span> <span
  m="197710">it</span> <span m="197840">spits</span> <span m="198110">out</span>
  <span m="198250">an</span> <span m="198380">answer</span> <span
  m="199440">in</span> <span m="199600">0</span> <span m="199800">to</span>
  <span m="199930">1.</span> <span m="202900">And</span> <span
  m="203210">B</span> <span m="203350">looks</span> <span m="203540">like</span>
  <span m="203700">this.</span> <span m="205370">Let's say</span> <span
  m="206710">you</span> <span m="206830">have</span> <span m="207140">an</span>
  <span m="207260">input</span> <span m="207500">y</span> <span m="209070">and
  it spits</span> <span m="209380">out an answer</span> <span
  m="209810">in</span> <span m="210866">0 to</span> <span
  m="211340">1.</span></p><p><span m="212870">And</span> <span
  m="214120">you</span> <span m="214230">want</span> <span m="214380">to</span>
  <span m="214440">find</span> <span m="214730">a</span> <span
  m="214780">function</span> <span m="215190">R</span> <span
  m="216340">which</span> <span m="216590">takes</span> <span
  m="216900">your</span> <span m="217440">x</span> <span m="218810">and</span>
  <span m="219010">sends it</span> <span m="219330">to</span> <span
  m="219410">y.</span> <span m="220980">So</span> <span
  m="221230">basically,</span> <span m="222060">if</span> <span
  m="222210">you</span> <span m="222820">know</span> <span m="223070">how</span>
  <span m="223200">to</span> <span m="223280">solve</span> <span
  m="223630">B</span> <span m="223800">very</span> <span m="224060">fast,</span>
  <span m="225220">then</span> <span m="225370">you</span> <span
  m="225510">can</span> <span m="226750">take</span> <span m="227170">an</span>
  <span m="227270">input</span> <span m="227560">to</span> <span
  m="227670">A.</span> <span m="229200">So</span> <span m="229575">you
  take</span> <span m="229950">x,</span> <span m="231550">you</span> <span
  m="231710">transform</span> <span m="232260">it,</span> <span
  m="234190">and</span> <span m="234300">then</span> <span m="234380">you</span>
  <span m="234490">apply</span> <span m="235130">B.</span> <span
  m="236840">And</span> <span m="236950">the</span> <span
  m="237010">condition</span> <span m="237390">is</span> <span
  m="237510">that</span> <span m="238185">A</span> <span
  m="238530">applied</span> <span m="239170">to</span> <span m="239460">x</span>
  <span m="240510">is</span> <span m="240640">the</span> <span
  m="240720">same</span> <span m="240970">as</span> <span m="241110">B</span>
  <span m="241250">applied</span> <span m="241490">to R of</span> <span
  m="241850">x.</span></p><p><span m="242760">So</span> <span
  m="242980">basically,</span> <span m="243500">what</span> <span m="243650">you
  are</span> <span m="243770">doing</span> <span m="244110">is</span> <span
  m="244450">you're</span> <span m="244850">showing</span> <span
  m="245250">that</span> <span m="246030">A</span> <span m="246290">is</span>
  <span m="246660">easy</span> <span m="247500">by</span> <span
  m="247620">showing</span> <span m="247900">that</span> <span
  m="248150">you</span> <span m="248240">can</span> <span
  m="248380">use--</span> <span m="248730">so</span> <span m="248890">let's
  say</span> <span m="249100">B is</span> <span m="249470">easy.</span> <span
  m="249920">We</span> <span m="250020">can</span> <span m="250120">use</span>
  <span m="250200">B to</span> <span m="250470">compute</span> <span
  m="250800">A,</span> <span m="251470">so</span> <span m="251560">then A</span>
  <span m="251840">must</span> <span m="252070">be</span> <span
  m="252170">easy.</span> <span m="253040">But</span> <span
  m="253190">since</span> <span m="253340">we</span> <span
  m="253420">know</span> <span m="253550">that</span> <span m="253670">A</span>
  <span m="253770">is</span> <span m="253890">hard,</span> <span
  m="254680">that</span> <span m="254910">there's</span> <span
  m="255080">something</span> <span m="255330">wrong</span> <span m="255510">in
  our logic,</span> <span m="255940">so</span> <span m="256089">B</span> <span
  m="256260">must</span> <span m="256430">be</span> <span
  m="256500">hard.</span> <span m="257500">Does</span> <span
  m="257630">that</span> <span m="257760">makes</span> <span
  m="257910">sense?</span> <span m="260765">Yes?</span> <span
  m="262250">Sort</span> <span m="262750">of?</span></p><p><span
  m="265030">So</span> <span m="265920">let's move</span> <span
  m="270480">onto</span> <span m="270590">an</span> <span
  m="270670">actual</span> <span m="270910">problem.</span> <span
  m="271690">So</span> <span m="271930">the</span> <span m="272030">first</span>
  <span m="272250">problem</span> <span m="272530">we're</span> <span
  m="272620">going to reduce</span> <span m="273240">is</span> <span
  m="274060">the</span> <span m="274310">Hamiltonian</span> <span
  m="274680">path.</span> <span m="275710">So</span> <span m="276340">a</span>
  <span m="276400">well-known</span> <span m="277470">NP</span> <span
  m="279220">hard</span> <span m="279460">problem</span> <span
  m="279910">is</span> <span m="280600">the</span> <span
  m="280630">Hamiltonian</span> <span m="281150">cycle.</span> <span
  m="281990">So</span> <span m="282030">here</span> <span m="282250">our</span>
  <span m="282430">A</span> <span m="282710">is--</span> <span
  m="292850">so</span> <span m="293130">it's a</span> <span
  m="293310">Hamiltonian</span> <span m="293530">cycle.</span> <span
  m="293760">So what's a</span> <span m="293910">Hamiltonian</span> <span
  m="294180">cycle?</span> <span m="294181">So</span> <span
  m="294280">what's</span> <span m="294430">a</span> <span
  m="294470">Hamiltonian</span> <span m="294900">cycle?</span> <span
  m="295330">So a Hamiltonian</span> <span m="295760">cycle--</span> <span
  m="296080">so</span> <span m="296180">let's</span> <span m="296250">say</span>
  <span m="296400">you</span> <span m="296470">have</span> <span
  m="296610">a</span> <span m="296660">graph.</span> <span m="298110">So we
  have</span> <span m="298250">this</span> <span m="298390">graph.</span> <span
  m="299660">Let me</span> <span m="300120">draw this</span> <span
  m="300340">out.</span> <span m="306020">That's it.</span></p><p><span
  m="310525">So a</span> <span m="311000">Hamiltonian</span> <span
  m="311220">cycle</span> <span m="311630">is</span> <span m="312450">a</span>
  <span m="312540">cycle</span> <span m="312860">in</span> <span
  m="312950">the</span> <span m="313040">graph</span> <span
  m="313710">which</span> <span m="313790">starts</span> <span
  m="314120">at</span> <span m="314190">some</span> <span
  m="314360">vertex,</span> <span m="315250">visits</span> <span
  m="315540">all</span> <span m="315690">the</span> <span
  m="315810">other</span> <span m="316000">vertices,</span> <span
  m="316840">and</span> <span m="316990">comes</span> <span
  m="317200">back</span> <span m="317400">to</span> <span m="317480">the</span>
  <span m="317940">starting</span> <span m="318240">vertex.</span> <span
  m="319090">So</span> <span m="319100">in</span> <span m="319160">this</span>
  <span m="319340">case,</span> <span m="319600">we</span> <span
  m="319710">could</span> <span m="319850">do</span> <span
  m="319960">something</span> <span m="320320">like</span> <span
  m="322288">go</span> <span m="322700">here,</span> <span m="323820">and
  then</span> <span m="324180">take this</span> <span m="324430">vertex,</span>
  <span m="327950">take</span> <span m="328080">this</span> <span
  m="328350">vertex,</span> <span m="328980">take</span> <span
  m="329340">this</span> <span m="329480">vertex,</span> <span m="329970">and
  come</span> <span m="330460">back here.</span> <span m="331440">So</span>
  <span m="331620">that is a valid</span> <span m="331930">Hamiltonian</span>
  <span m="332420">cycle.</span> <span m="332730">So</span> <span
  m="332830">this</span> <span m="332990">graph</span> <span m="333210">is
  a</span> <span m="333300">Hamiltonian</span> <span
  m="333555">cycle.</span></p><p><span m="334750">So</span> <span
  m="335810">the</span> <span m="335950">decision</span> <span
  m="336220">problem</span> <span m="336520">is</span> <span
  m="336700">here</span> <span m="336800">that</span> <span
  m="337140">given</span> <span m="337390">the</span> <span
  m="337480">graph,</span> <span m="338010">does</span> <span
  m="338140">it</span> <span m="338200">have</span> <span m="338320">a</span>
  <span m="338360">Hamiltonian</span> <span m="338750">cycle?</span> <span
  m="339920">And</span> <span m="340020">that</span> <span
  m="340170">problem</span> <span m="340460">is</span> <span
  m="340550">NP-hard,</span> <span m="341170">so</span> <span m="341520">you
  can</span> <span m="341770">[INAUDIBLE]</span> <span
  m="342030">polynomial</span> <span m="342110">[INAUDIBLE].</span> <span
  m="343220">So</span> <span m="343300">now</span> <span m="344070">the</span>
  <span m="344170">new</span> <span m="344280">polynomial</span> <span
  m="344800">shows</span> <span m="345090">NP-hard,</span> <span
  m="346320">which</span> <span m="346520">is</span> <span m="346957">B</span>
  <span m="348270">is</span> <span m="348610">Hamiltonian</span> <span
  m="349110">path.</span></p><p><span m="356960">So</span> <span
  m="357730">the</span> <span m="357860">Hamiltonian</span> <span
  m="358180">path</span> <span m="358470">is</span> <span m="358580">a</span>
  <span m="358600">very</span> <span m="358740">similar</span> <span
  m="359010">problem.</span> <span m="359340">Instead</span> <span
  m="359470">of</span> <span m="359600">a cycle,</span> <span
  m="360060">you</span> <span m="361330">remove</span> <span
  m="361530">the</span> <span m="361600">requirement</span> <span
  m="361970">that</span> <span m="362020">you</span> <span m="362130">have
  to</span> <span m="362210">come</span> <span m="362360">back</span> <span
  m="362580">to</span> <span m="362650">the</span> <span
  m="362740">starting</span> <span m="363040">point.</span> <span m="363630">You
  can</span> <span m="363730">just</span> <span m="363870">start</span> <span
  m="364100">anywhere</span> <span m="364880">and</span> <span
  m="366580">[INAUDIBLE]</span> <span m="366770">all the</span> <span
  m="366920">vertices</span> <span m="367290">and</span> <span
  m="367410">stop.</span> <span m="368080">So</span> <span m="368260">for</span>
  <span m="368360">example,</span> <span m="369190">if</span> <span
  m="369330">you</span> <span m="369560">remove</span> <span
  m="369870">this</span> <span m="370040">edge,</span> <span
  m="370840">this</span> <span m="371020">graph</span> <span
  m="371600">no</span> <span m="371770">longer</span> <span
  m="371990">has</span> <span m="372150">Hamiltonian</span> <span
  m="372610">cycle,</span> <span m="373390">but</span> <span
  m="373530">it</span> <span m="373580">has</span> <span m="373740">a</span>
  <span m="373760">Hamiltonian</span> <span m="374260">path,</span> <span
  m="374680">which</span> <span m="374820">is</span> <span
  m="374930">just</span> <span m="375920">this</span> <span
  m="376080">line.</span> <span m="376737">Simple.</span></p><p><span
  m="378050">So</span> <span m="378950">this is</span> <span m="379130">a</span>
  <span m="379200">simple</span> <span m="379440">reduction</span> <span
  m="379840">because</span> <span m="380180">the</span> <span
  m="380290">problems</span> <span m="380680">are</span> <span
  m="381840">very</span> <span m="382140">similar.</span> <span
  m="383060">So</span> <span m="383970">the</span> <span m="384050">first</span>
  <span m="384270">step</span> <span m="384420">is,</span> <span
  m="384620">of</span> <span m="384720">course,</span> <span
  m="385200">showing</span> <span m="385460">that</span> <span
  m="385950">Hamiltonian</span> <span m="386370">path</span> <span m="386640">is
  an</span> <span m="386870">NP.</span> <span m="391740">So</span> <span
  m="392070">that</span> <span m="392230">should</span> <span
  m="392330">be</span> <span m="392410">pretty</span> <span
  m="392590">clear</span> <span m="393190">because--</span> <span
  m="394010">so</span> <span m="394140">what</span> <span m="394260">is</span>
  <span m="394280">our</span> <span m="394410">certificate</span> <span
  m="394860">here?</span></p><p><span m="395550">So if</span> <span
  m="395720">someone</span> <span m="396030">says,</span> <span
  m="396200">OK,</span> <span m="396410">I</span> <span m="396530">have
  solved</span> <span m="396720">the</span> <span m="396810">Hamiltonian</span>
  <span m="397220">path</span> <span m="397790">and</span> <span
  m="398410">this</span> <span m="398570">is</span> <span m="398650">my</span>
  <span m="398780">Hamiltonian</span> <span m="398970">path.</span> <span
  m="400660">And</span> <span m="400850">he</span> <span m="400960">gives</span>
  <span m="401160">you a</span> <span m="401210">certificate</span> <span
  m="401630">which</span> <span m="401780">is</span> <span m="401820">the</span>
  <span m="401910">actual</span> <span m="402370">path.</span> <span
  m="402490">So you</span> <span m="402590">can</span> <span
  m="402740">always</span> <span m="403810">look</span> <span
  m="404020">at</span> <span m="404100">the</span> <span
  m="404200">certificate,</span> <span m="404770">check</span> <span
  m="405010">the</span> <span m="405100">path,</span> <span m="405440">and
  see</span> <span m="405780">if it's a</span> <span m="406110">valid</span>
  <span m="406470">path.</span> <span m="407070">And</span> <span
  m="407270">then</span> <span m="407400">you</span> <span m="407510">can</span>
  <span m="407680">verify</span> <span m="408080">the</span> <span
  m="408190">answer in</span> <span m="408460">polynomial</span> <span
  m="408910">time.</span> <span m="409636">So</span> <span
  m="410000">that's</span> <span m="410160">the</span> <span
  m="410250">linear</span> <span m="410510">time</span> <span
  m="411100">verification.</span></p><p><span m="413250">So</span> <span
  m="413430">this</span> <span m="413570">is</span> <span
  m="413780">true.</span> <span m="415130">So</span> <span m="415250">now</span>
  <span m="415610">what we're</span> <span m="415780">going to</span> <span
  m="415930">show</span> <span m="416200">is</span> <span m="420230">B is</span>
  <span m="420500">hard.</span> <span m="423670">So</span> <span m="423790">the
  way</span> <span m="424000">we do</span> <span m="424140">that</span> <span
  m="425000">is</span> <span m="425260">we</span> <span m="425400">do</span>
  <span m="425580">a</span> <span m="425670">reduction.</span> <span
  m="426540">So</span> <span m="426550">the</span> <span
  m="426600">reduction</span> <span m="426940">is</span> <span
  m="427070">given</span> <span m="427400">an</span> <span
  m="427600">input</span> <span m="428470">to</span> <span m="428690">the</span>
  <span m="429030">original</span> <span m="429420">problem,</span> <span
  m="429720">A.</span> <span m="430450">So</span> <span m="430580">let's</span>
  <span m="430770">say</span> <span m="430890">an</span> <span
  m="430940">input</span> <span m="431190">to</span> <span m="431610">A</span>
  <span m="432030">is</span> <span m="432190">in</span> <span
  m="432310">the</span> <span m="432390">form</span> <span m="432610">of</span>
  <span m="432680">a</span> <span m="432750">graph.</span> <span
  m="438240">And</span> <span m="438400">now</span> <span m="438630">you
  have</span> <span m="438850">transformed</span> <span m="439310">this</span>
  <span m="439460">graph</span> <span m="441200">somehow</span> <span
  m="442055">to</span> <span m="442370">G</span> <span
  m="442720">dash.</span></p><p><span m="448690">And</span> <span
  m="448880">then</span> <span m="449180">you</span> <span m="449320">have
  to</span> <span m="449470">argue</span> <span m="449880">that--</span> <span
  m="451520">so</span> <span m="451680">this</span> <span m="451800">is</span>
  <span m="451900">the</span> <span m="452220">transformation</span> <span
  m="452740">R--</span> <span m="455110">and</span> <span m="455360">you</span>
  <span m="455450">have</span> <span m="455710">to</span> <span m="455810">argue
  that</span> <span m="457600">the</span> <span m="458010">solution,</span>
  <span m="458680">the</span> <span m="458930">answer</span> <span
  m="459170">that</span> <span m="459340">this</span> <span
  m="459470">will</span> <span m="459560">spit</span> <span
  m="459750">out,</span> <span m="459970">is</span> <span m="460080">the</span>
  <span m="460150">same</span> <span m="460330">amount</span> <span
  m="460650">that</span> <span m="461010">this</span> <span
  m="461200">would</span> <span m="461350">spit out.</span> <span
  m="462380">So</span> <span m="462390">let's</span> <span
  m="462610">look</span> <span m="462720">at</span> <span m="462780">the</span>
  <span m="462840">transformation</span> <span m="463320">first.</span> <span
  m="463950">Anyone</span> <span m="464110">have</span> <span
  m="464290">any</span> <span m="464400">ideas?</span></p><p><span
  m="465460">So</span> <span m="465760">you</span> <span m="465870">have</span>
  <span m="465990">a</span> <span m="466050">graph</span> <span
  m="466960">and</span> <span m="468190">you're</span> <span
  m="468320">using</span> <span m="468690">that</span> <span
  m="468810">to</span> <span m="468910">solve</span> <span m="469020">the</span>
  <span m="469090">Hamiltonian</span> <span m="469490">cycle</span> <span
  m="469750">problem.</span> <span m="470890">So</span> <span
  m="471010">how</span> <span m="471170">do</span> <span m="471230">you</span>
  <span m="471300">transform</span> <span m="471700">it</span> <span
  m="471780">in a</span> <span m="471930">way</span> <span
  m="472710">that</span> <span m="472970">lets</span> <span
  m="473340">you</span> <span m="473540">cast</span> <span
  m="473810">into</span> <span m="474010">Hamiltonian</span> <span
  m="474440">path</span> <span m="474820">formulation?</span> <span
  m="478159">Yes.</span></p><p><span m="479113">AUDIENCE: Remove</span> <span
  m="479590">an edge?</span></p><p><span m="482929">AMARTYA SHANKHA BISWAS:
  Not</span> <span m="483420">exactly.</span> <span m="484680">So</span> <span
  m="484970">which</span> <span m="485250">edge</span> <span m="485500">would
  you</span> <span m="485610">remove?</span> <span m="486430">You</span> <span
  m="486810">can't find</span> <span m="487190">the</span> <span
  m="487260">Hamiltonian</span> <span m="487460">cycle.</span> <span
  m="488000">OK,</span> <span m="488410">important</span> <span
  m="488750">point.</span> <span m="489480">So</span> <span
  m="490360">there's</span> <span m="490550">no</span> <span
  m="490730">point</span> <span m="490940">doing</span> <span
  m="491100">this</span> <span m="491240">reduction</span> <span
  m="491990">unless</span> <span m="492240">this</span> <span
  m="492410">reduction</span> <span m="492800">is</span> <span
  m="492890">itself</span> <span m="493220">polynomial</span> <span
  m="494310">because</span> <span m="494490">otherwise,</span> <span
  m="494910">this</span> <span m="495230">whole</span> <span
  m="495390">strategy</span> <span m="495900">of</span> <span
  m="496760">transforming</span> <span m="497470">and</span> <span
  m="497620">then</span> <span m="497720">using</span> <span m="497990">B</span>
  <span m="498170">to</span> <span m="498260">find</span> <span
  m="498560">A</span> <span m="498640">doesn't</span> <span
  m="498880">work.</span> <span m="499170">Because</span> <span
  m="499900">if</span> <span m="500020">the</span> <span
  m="500100">reduction</span> <span m="500470">is</span> <span
  m="500550">exponential</span> <span m="501030">time,</span> <span
  m="501680">that</span> <span m="501800">doesn't</span> <span
  m="501980">help</span> <span m="502150">you.</span> <span m="502820">So
  it--</span></p><p><span m="503460">AUDIENCE: Try</span> <span
  m="503730">removing</span> <span m="504000">every edge.</span></p><p><span
  m="507310">AMARTYA SHANKHA BISWAS: So</span> <span m="507730">if</span> <span
  m="507840">you</span> <span m="508150">remove</span> <span
  m="508420">some</span> <span m="508630">edges,</span> <span
  m="509070">you'll</span> <span m="509250">see</span> <span
  m="509420">that</span> <span m="509650">there is</span> <span
  m="509870">still</span> <span m="510080">a</span> <span
  m="510220">Hamiltonian</span> <span m="510540">cycle.</span> <span
  m="511660">But</span> <span m="511860">you</span> <span
  m="512360">remove</span> <span m="512700">some</span> <span
  m="512880">edges--</span> <span m="516049">you</span> <span
  m="516140">can't</span> <span m="516360">tell.</span> <span
  m="517210">You</span> <span m="517299">don't</span> <span
  m="517450">know</span> <span m="517530">which</span> <span
  m="517730">edge</span> <span m="517780">to</span> <span
  m="517940">remove.</span></p><p><span m="519809">So</span> <span
  m="519940">a</span> <span m="519970">better</span> <span m="520150">way</span>
  <span m="520270">to</span> <span m="520350">do it is</span> <span
  m="520580">this.</span> <span m="521559">So</span> <span
  m="521570">let's</span> <span m="521740">say</span> <span
  m="521960">this</span> <span m="522120">is</span> <span m="522169">the</span>
  <span m="522240">rest</span> <span m="522429">of</span> <span
  m="522510">your</span> <span m="522610">graph.</span> <span
  m="523280">And</span> <span m="523470">you</span> <span m="523570">just
  look</span> <span m="523669">at</span> <span m="523750">one</span> <span
  m="523919">vertex.</span> <span m="524890">So look</span> <span
  m="525060">at</span> <span m="525230">one</span> <span
  m="525400">vertex,</span> <span m="525760">V.</span> <span
  m="527100">And</span> <span m="527400">let's</span> <span
  m="527560">say</span> <span m="527790">this is a</span> <span
  m="527850">directed</span> <span m="528210">graph.</span> <span m="528480">If
  it's</span> <span m="528600">an</span> <span m="528900">undirected</span>
  <span m="529000">graph,</span> <span m="529290">you can just</span> <span
  m="529430">like</span> <span m="529550">add</span> <span m="529940">one</span>
  <span m="530160">edge</span> <span m="530300">there</span> <span
  m="530570">and one edge</span> <span m="531040">back for</span> <span
  m="531230">everything.</span></p><p><span m="532380">So</span> <span
  m="533370">now</span> <span m="533570">you</span> <span m="533710">add</span>
  <span m="534340">a</span> <span m="534400">directed</span> <span
  m="534780">edge</span> <span m="534960">along</span> <span
  m="535180">this.</span> <span m="535940">I'm sorry.</span> <span
  m="536140">You</span> <span m="536300">look</span> <span m="536440">at</span>
  <span m="536510">all the</span> <span m="536740">directed</span> <span
  m="537060">edges.</span> <span m="537670">So let's</span> <span
  m="537940">say</span> <span m="538210">you have</span> <span
  m="538290">some</span> <span m="538480">edges</span> <span
  m="538660">coming</span> <span m="538870">in</span> <span
  m="540100">and</span> <span m="540440">you</span> <span m="540520">have some
  edges</span> <span m="540930">going</span> <span m="541200">out.</span> <span
  m="544470">So</span> <span m="545200">this</span> <span m="545360">is</span>
  <span m="545760">just</span> <span m="545940">a</span> <span
  m="545970">vertex</span> <span m="546360">and</span> <span m="546440">you
  just</span> <span m="546640">look</span> <span m="546810">at</span> <span
  m="546920">the</span> <span m="547000">rest</span> <span m="547190">of</span>
  <span m="547260">the</span> <span m="547340">graph</span> <span
  m="547670">and</span> <span m="547780">look</span> <span m="547900">at</span>
  <span m="547950">all</span> <span m="548080">the</span> <span
  m="548190">edges</span> <span m="548390">coming</span> <span
  m="548610">in</span> <span m="548730">and all</span> <span
  m="548850">the</span> <span m="548980">edges</span> <span
  m="549100">going</span> <span m="549290">out.</span></p><p><span
  m="549860">So</span> <span m="549980">this</span> <span m="550110">is</span>
  <span m="550200">in</span> <span m="550370">A.</span> <span
  m="550580">This</span> <span m="550720">is</span> <span m="550770">the</span>
  <span m="550840">original</span> <span m="551160">problem.</span> <span
  m="552460">And</span> <span m="552750">you</span> <span
  m="552850">transform</span> <span m="553370">this</span> <span
  m="555240">into--</span> <span m="557830">you</span> <span
  m="557890">split</span> <span m="558240">the</span> <span
  m="558310">vertex</span> <span m="558700">into</span> <span
  m="558850">two,</span> <span m="560650">so</span> <span m="560830">V</span>
  <span m="560980">dash</span> <span m="561250">and V</span> <span
  m="561668">double-dash,</span> <span m="562086">let's say.</span> <span
  m="563340">And</span> <span m="564180">in</span> <span m="564320">one</span>
  <span m="564480">of</span> <span m="564600">them,</span> <span
  m="564730">you</span> <span m="564820">keep</span> <span m="565000">all</span>
  <span m="565140">the</span> <span m="565210">incoming</span> <span
  m="565570">edges</span> <span m="568940">and</span> <span
  m="569070">the</span> <span m="569160">other</span> <span
  m="569380">one</span> <span m="569680">contains</span> <span
  m="570040">all</span> <span m="570140">the</span> <span
  m="570260">outgoing</span> <span m="570750">edges.</span></p><p><span
  m="573500">Does</span> <span m="573650">that</span> <span
  m="573890">transformation</span> <span m="574340">make</span> <span
  m="574520">sense</span> <span m="574770">intuitively?</span> <span
  m="577660">So</span> <span m="578730">what</span> <span m="578910">do</span>
  <span m="578960">you</span> <span m="579050">have</span> <span
  m="579260">here?</span> <span m="579640">So</span> <span
  m="579770">here</span> <span m="580140">you</span> <span
  m="580300">had--</span> <span m="581900">let's</span> <span
  m="582060">say</span> <span m="582180">this</span> <span
  m="582400">graph</span> <span m="582970">had</span> <span m="583110">a</span>
  <span m="583180">Hamiltonian</span> <span m="583660">cycle.</span> <span
  m="585190">So</span> <span m="585370">this</span> <span
  m="585550">graph</span> <span m="585800">had</span> <span
  m="586010">some</span> <span m="586220">cycle</span> <span
  m="586580">which</span> <span m="587530">went</span> <span
  m="587810">up</span> <span m="587970">here,</span> <span m="588150">did</span>
  <span m="588350">something,</span> <span m="588760">something,</span> <span
  m="589150">and</span> <span m="589250">came back.</span></p><p><span
  m="590640">So</span> <span m="591060">it</span> <span m="591160">would</span>
  <span m="591270">go</span> <span m="591410">like</span> <span
  m="591600">this.</span> <span m="591830">It</span> <span
  m="591900">would</span> <span m="592230">do</span> <span m="592360">the</span>
  <span m="592440">cycle</span> <span m="592750">and</span> <span
  m="592840">come</span> <span m="592980">back.</span> <span
  m="593230">So</span> <span m="593460">there</span> <span m="593640">was</span>
  <span m="593700">some</span> <span m="593880">cycle.</span> <span
  m="594470">And</span> <span m="594580">since</span> <span
  m="594750">the</span> <span m="594840">cycle,</span> <span
  m="595180">it</span> <span m="595260">contains</span> <span
  m="595650">V,</span> <span m="596670">so</span> <span m="596770">now</span>
  <span m="596930">what</span> <span m="597050">you're</span> <span
  m="597160">doing</span> <span m="597550">is</span> <span
  m="597630">you're</span> <span m="597750">splitting</span> <span
  m="598110">apart</span> <span m="598240">V</span> <span m="598830">and</span>
  <span m="598990">disconnecting</span> <span m="599510">them.</span> <span
  m="600090">So</span> <span m="600200">you'll</span> <span
  m="600530">still</span> <span m="600730">have--</span> <span
  m="601760">if</span> <span m="601860">you</span> <span m="601970">look</span>
  <span m="602120">at</span> <span m="602220">the</span> <span
  m="602350">original</span> <span m="602720">path,</span> <span
  m="603410">it's</span> <span m="603550">still</span> <span
  m="603760">there,</span> <span m="604850">but</span> <span
  m="605000">it's</span> <span m="605420">been</span> <span m="605650">split up
  into</span> <span m="605810">a path</span> <span m="606135">now.</span> <span
  m="606460">It's</span> <span m="606640">no</span> <span m="606740">longer
  a</span> <span m="607020">cycle.</span></p><p><span m="609600">Make
  sense?</span> <span m="610720">So now</span> <span m="611160">let's</span>
  <span m="611650">argue this</span> <span m="611990">more</span> <span
  m="612150">rigorously.</span> <span m="613350">So</span> <span
  m="614250">what</span> <span m="614390">we</span> <span m="614460">want
  to</span> <span m="614790">say</span> <span m="614950">here</span> <span
  m="615260">is</span> <span m="615420">that</span> <span
  m="616860">let's</span> <span m="617080">say</span> <span
  m="617540">there</span> <span m="617730">was</span> <span m="617930">a</span>
  <span m="617990">cycle</span> <span m="618320">here.</span> <span
  m="620955">If</span> <span m="621440">there</span> <span m="621570">was</span>
  <span m="621740">a</span> <span m="621790">cycle</span> <span
  m="622080">here,</span> <span m="623780">then</span> <span m="625150">is
  it</span> <span m="625270">clear that</span> <span m="625530">there is</span>
  <span m="625830">a</span> <span m="625880">path</span> <span
  m="626170">here?</span> <span m="627060">Because</span> <span
  m="627650">just</span> <span m="628460">take</span> <span
  m="628810">the</span> <span m="628890">same</span> <span
  m="629120">edges</span> <span m="629550">that</span> <span
  m="629670">you</span> <span m="629730">had</span> <span
  m="629940">before.</span></p><p><span m="631400">If you</span> <span
  m="631540">take</span> <span m="631690">the</span> <span
  m="631770">same</span> <span m="632010">edges,</span> <span
  m="632310">they</span> <span m="632420">will</span> <span
  m="632530">now</span> <span m="632720">form a</span> <span
  m="633120">path</span> <span m="633500">instead of a</span> <span
  m="633690">cycle.</span> <span m="634460">So</span> <span
  m="634550">cycle</span> <span m="634890">implies</span> <span
  m="635190">path.</span> <span m="637440">Does</span> <span
  m="637890">that</span> <span m="638030">makes</span> <span
  m="638180">sense?</span> <span m="641960">So</span> <span
  m="643210">the</span> <span m="643330">other</span> <span
  m="643570">way</span> <span m="643720">is</span> <span m="643910">a</span>
  <span m="644010">little</span> <span m="644090">more</span> <span
  m="644260">tricky.</span></p><p><span m="644570">So</span> <span
  m="644710">let's</span> <span m="644880">say</span> <span
  m="645570">you</span> <span m="645630">have</span> <span m="645780">a</span>
  <span m="645830">path.</span> <span m="651240">So</span> <span
  m="651350">let's</span> <span m="651500">say</span> <span
  m="651600">you</span> <span m="651690">had</span> <span m="651840">a</span>
  <span m="651890">path.</span> <span m="653050">So</span> <span
  m="653540">that</span> <span m="653950">means</span> <span
  m="654210">that--</span> <span m="654990">let's</span> <span m="655880">redraw
  this</span> <span m="656230">so</span> <span m="656350">it's</span> <span
  m="657000">more</span> <span m="657180">clear.</span> <span
  m="659180">So</span> <span m="659300">you</span> <span m="659360">have</span>
  <span m="659510">this</span> <span m="659650">new</span> <span
  m="659790">graph</span> <span m="660700">where</span> <span m="660870">you
  have</span> <span m="661000">two</span> <span m="661140">vertices,</span>
  <span m="662370">V</span> <span m="662520">dash</span> <span m="662890">and
  V</span> <span m="663000">double-dash.</span> <span m="666120">This</span>
  <span m="666280">has</span> <span m="666450">a</span> <span
  m="666490">bunch</span> <span m="666700">of</span> <span
  m="666780">incoming</span> <span m="667140">edges</span> <span
  m="668366">and</span> <span m="668750">this</span> <span m="668940">is
  a</span> <span m="668990">bunch</span> <span m="669200">of</span> <span
  m="669300">outgoing</span> <span m="669680">edges.</span></p><p><span
  m="673540">So</span> <span m="673560">now</span> <span m="675030">let's</span>
  <span m="675210">say</span> <span m="675310">you</span> <span
  m="675430">have</span> <span m="675660">a</span> <span
  m="675710">Hamiltonian</span> <span m="676080">path</span> <span
  m="676380">in</span> <span m="676470">this</span> <span
  m="676620">graph.</span> <span m="678530">So</span> <span
  m="678660">what</span> <span m="678770">does</span> <span
  m="678860">that</span> <span m="679030">mean?</span> <span
  m="679360">So</span> <span m="679520">where</span> <span m="679910">can</span>
  <span m="680110">the</span> <span m="680300">Hamiltonian</span> <span
  m="680620">path</span> <span m="680920">start?</span> <span
  m="682160">Can</span> <span m="682270">it</span> <span m="682330">start</span>
  <span m="682560">anywhere?</span> <span m="683890">Where</span> <span
  m="684030">can</span> <span m="684120">it</span> <span
  m="684160">start?</span></p><p><span m="685450">AUDIENCE: V</span> <span
  m="685935">double-dash.</span></p><p><span m="686420">AMARTYA SHANKHA BISWAS:
  Right,</span> <span m="686710">because</span> <span m="686980">V</span> <span
  m="687100">double</span> <span m="687310">point</span> <span
  m="687810">doesn't</span> <span m="687910">have any</span> <span
  m="688060">incoming</span> <span m="688210">edges,</span> <span
  m="688390">so</span> <span m="688470">it</span> <span m="688580">can't</span>
  <span m="688780">be</span> <span m="688850">in</span> <span
  m="688900">the</span> <span m="688970">middle</span> <span
  m="689120">of</span> <span m="689220">the</span> <span m="689290">path.</span>
  <span m="689910">So</span> <span m="690310">it</span> <span
  m="690430">has</span> <span m="690610">a</span> <span m="690660">start</span>
  <span m="690930">here.</span> <span m="691590">So</span> <span
  m="691700">it</span> <span m="691780">starts.</span> <span
  m="692660">It</span> <span m="692760">does</span> <span
  m="692930">something</span> <span m="693250">in</span> <span
  m="693340">there.</span></p><p><span m="694100">And</span> <span
  m="694230">where</span> <span m="694420">can</span> <span m="694460">it</span>
  <span m="694610">end?</span> <span m="694930">It</span> <span
  m="695000">can</span> <span m="695100">only</span> <span
  m="695340">end,</span> <span m="695550">similarly,</span> <span
  m="696080">in</span> <span m="696240">V</span> <span m="696585">dash.</span>
  <span m="696930">Because</span> <span m="697160">V</span> <span
  m="697270">dash</span> <span m="697520">doesn't</span> <span
  m="697650">have</span> <span m="697740">any</span> <span
  m="697820">outgoing</span> <span m="698200">edges,</span> <span
  m="698240">so</span> <span m="698410">it can't</span> <span m="698550">be in
  the</span> <span m="698670">middle of the</span> <span m="698880">path.</span>
  <span m="699780">So it</span> <span m="699870">has</span> <span
  m="700050">to</span> <span m="700290">end</span> <span m="700380">in</span>
  <span m="700650">V dash.</span></p><p><span m="701520">So</span> <span
  m="701630">now,</span> <span m="702620">if</span> <span m="702730">you</span>
  <span m="702820">have</span> <span m="702980">a</span> <span
  m="703050">path</span> <span m="703260">like</span> <span
  m="703460">that,</span> <span m="704490">and</span> <span
  m="704690">you</span> <span m="704810">go</span> <span m="704970">back</span>
  <span m="705190">to</span> <span m="705820">this</span> <span
  m="706000">graph--</span> <span m="708210">so</span> <span m="708420">V</span>
  <span m="708560">dash</span> <span m="708760">and</span> <span
  m="708910">V</span> <span m="708980">double-dash</span> <span
  m="709350">are</span> <span m="709450">now on the</span> <span
  m="709510">same</span> <span m="709830">vertex.</span> <span
  m="710310">And</span> <span m="710680">just</span> <span
  m="710830">that</span> <span m="711030">path</span> <span
  m="711240">just</span> <span m="711380">becomes a</span> <span
  m="711650">cycle</span> <span m="711905">now.</span> <span
  m="712560">So</span> <span m="712760">path</span> <span
  m="712870">implies</span> <span m="713010">cycle.</span></p><p><span
  m="716380">So</span> <span m="716550">now</span> <span m="717260">what
  we</span> <span m="717370">have</span> <span m="717610">is</span> <span
  m="717790">previously</span> <span m="718230">what we</span> <span
  m="718390">had,</span> <span m="718560">right?</span> <span
  m="719000">So</span> <span m="719120">now</span> <span m="719350">we</span>
  <span m="719450">know</span> <span m="719660">that</span> <span
  m="721740">A</span> <span m="722060">of</span> <span m="722340">G</span> <span
  m="722580">here</span> <span m="723880">is</span> <span
  m="724020">equal</span> <span m="724360">to</span> <span m="725070">B</span>
  <span m="725430">of</span> <span m="726454">G</span> <span
  m="726861">dash.</span> <span m="727270">So</span> <span m="727760">G</span>
  <span m="727950">dash</span> <span m="728380">was</span> <span
  m="728640">transformation.</span></p><p><span m="729400">Also</span> <span
  m="729640">notice</span> <span m="729970">that</span> <span
  m="730110">the</span> <span m="730180">transformation</span> <span
  m="731180">was</span> <span m="731340">just</span> <span
  m="731510">splitting</span> <span m="731720">apart</span> <span
  m="731950">a</span> <span m="732010">vertex.</span> <span m="732400">So</span>
  <span m="733420">depending</span> <span m="733830">on</span> <span
  m="733920">your</span> <span m="734030">representation</span> <span
  m="734540">of</span> <span m="734770">your</span> <span
  m="735080">graph,</span> <span m="735565">it'll take</span> <span
  m="736030">something,</span> <span m="736390">like</span> <span
  m="736620">constant</span> <span m="736940">time</span> <span
  m="737100">or</span> <span m="737320">linear</span> <span
  m="737460">time</span> <span m="737680">or</span> <span
  m="737730">something</span> <span m="738520">polynomial,</span> <span
  m="738795">essentially.</span> <span m="739600">So</span> <span
  m="739970">you</span> <span m="740340">get</span> <span m="740440">a</span>
  <span m="740480">polynomial-time</span> <span m="741090">reduction.</span>
  <span m="743610">After</span> <span m="743880">reduction,</span> <span
  m="744220">you</span> <span m="744320">show</span> <span
  m="744530">that</span> <span m="745520">the</span> <span
  m="745690">answer</span> <span m="746000">to</span> <span
  m="746110">the</span> <span m="746420">reduced</span> <span
  m="746690">problem</span> <span m="747040">is</span> <span
  m="747110">the</span> <span m="747190">same</span> <span m="747450">as</span>
  <span m="747580">the</span> <span m="747680">answer</span> <span
  m="747870">to</span> <span m="747910">the</span> <span
  m="747980">original</span> <span m="748240">problem.</span> <span
  m="749230">And</span> <span m="749300">that</span> <span
  m="749560">means</span> <span m="749880">that</span> <span
  m="750850">this</span> <span m="751000">is</span> <span m="751080">also</span>
  <span m="751330">an</span> <span m="751620">NP-hard</span> <span
  m="751720">problem</span> <span m="752360">by</span> <span
  m="752740">the</span> <span m="753260">argument</span> <span m="753610">given
  here.</span></p><p><span m="755850">Questions?</span> <span
  m="757090">Does</span> <span m="757210">that</span> <span
  m="757380">make</span> <span m="757540">sense?</span> <span
  m="758404">Yes.</span></p><p><span m="758888">AUDIENCE: So</span> <span
  m="759372">are you creating</span> <span m="759856">two vertices for
  every</span> <span m="760340">vertex</span> <span m="760824">in the
  graph?</span></p><p><span m="761310">AMARTYA SHANKHA BISWAS: No,</span> <span
  m="761600">just</span> <span m="761730">this</span> <span
  m="761860">one.</span> <span m="762315">Just</span> <span
  m="762590">pick</span> <span m="762900">any</span> <span
  m="763060">vertex--</span> <span m="763420">doesn't</span> <span
  m="763590">matter--</span> <span m="764000">because</span> <span
  m="764210">you have a</span> <span m="764380">cycle.</span> <span
  m="765360">So if</span> <span m="765460">you</span> <span
  m="765540">take</span> <span m="765700">any</span> <span
  m="765760">vertex</span> <span m="766275">and</span> <span
  m="766560">split</span> <span m="766610">it</span> <span
  m="766750">apart,</span> <span m="767040">you</span> <span
  m="767120">get</span> <span m="767250">a</span> <span
  m="767310">path.</span></p><p><span m="768896">AUDIENCE: Oh,</span> <span
  m="769358">perfect.</span></p><p><span m="771206">AMARTYA SHANKHA BISWAS:
  Anything</span> <span m="771668">else?</span> <span m="773060">OK,</span>
  <span m="774320">let's</span> <span m="774830">move</span> <span
  m="775050">on</span> <span m="775300">to</span> <span m="775360">the</span>
  <span m="775460">next</span> <span m="775670">one.</span> <span
  m="782120">Grab a</span> <span m="782590">new board.</span> <span
  m="786360">So</span> <span m="787355">the</span> <span m="787740">next</span>
  <span m="788010">problem</span> <span m="788360">is--</span> <span
  m="809270">so</span> <span m="809550">given</span> <span m="809810">the</span>
  <span m="809900">graph,</span> <span m="810700">is</span> <span
  m="810880">there</span> <span m="811030">a</span> <span
  m="811160">k-clique?</span> <span m="813120">Do</span> <span
  m="813280">people</span> <span m="813490">know</span> <span
  m="813890">what</span> <span m="814000">a</span> <span m="814080">clique
  is?</span></p><p><span m="817120">So</span> <span m="817330">a clique</span>
  <span m="817470">is</span> <span m="817600">this.</span> <span m="818060">So
  a</span> <span m="818230">clique</span> <span m="818910">is</span> <span
  m="819280">a</span> <span m="819360">set</span> <span m="819540">of</span>
  <span m="819620">vertices.</span> <span m="820530">So</span> <span
  m="820670">let's</span> <span m="820860">say</span> <span m="821980">C</span>
  <span m="822430">subset</span> <span m="822870">of</span> <span
  m="823010">V</span> <span m="823380">for</span> <span m="823450">the</span>
  <span m="823520">set</span> <span m="823670">of</span> <span
  m="823800">vertices,</span> <span m="824770">such</span> <span
  m="824940">that</span> <span m="825130">C</span> <span m="825390">is</span>
  <span m="825480">a</span> <span m="825530">complete</span> <span
  m="825920">graph.</span> <span m="827410">Let's</span> <span
  m="827690">just</span> <span m="827820">draw</span> <span m="827980">a
  diagonal.</span> <span m="828090">That's</span> <span
  m="828475">probably</span> <span m="828860">easier.</span></p><p><span
  m="845200">OK.</span> <span m="845820">So</span> <span m="845970">in</span>
  <span m="846040">this</span> <span m="846180">example,</span> <span
  m="846640">so you</span> <span m="846870">have</span> <span
  m="847020">this</span> <span m="847160">graph.</span> <span m="848896">This
  one.</span> <span m="849790">So</span> <span m="851140">look</span> <span
  m="851290">at</span> <span m="851380">this</span> <span m="851460">set</span>
  <span m="851650">of</span> <span m="851730">vertices.</span> <span
  m="854740">Every</span> <span m="855080">pair</span> <span
  m="855290">of</span> <span m="855370">them</span> <span m="855530">is</span>
  <span m="855710">connected to</span> <span m="856050">each</span> <span
  m="856190">other.</span></p><p><span m="857210">What that</span> <span
  m="857420">means</span> <span m="857620">is</span> <span
  m="857700">that</span> <span m="858210">if</span> <span m="858320">you</span>
  <span m="858440">just</span> <span m="858700">look</span> <span
  m="859310">at</span> <span m="859370">the</span> <span m="859440">graph</span>
  <span m="860130">with</span> <span m="860320">these</span> <span
  m="860760">vertices,</span> <span m="861100">it's</span> <span
  m="861240">a</span> <span m="861280">complete</span> <span
  m="861600">graph.</span> <span m="862430">That's</span> <span
  m="862660">what's</span> <span m="862820">called</span> <span
  m="862990">a</span> <span m="863050">clique.</span> <span
  m="864850">And</span> <span m="865190">in</span> <span m="865290">this</span>
  <span m="865460">case,</span> <span m="865750">this is</span> <span
  m="865900">a</span> <span m="865960">4-clique.</span> <span
  m="866490">So</span> <span m="866630">you</span> <span m="866780">have</span>
  <span m="867190">four</span> <span m="867470">vertices,</span> <span
  m="867745">this is a</span> <span m="868020">4-clique.</span></p><p><span
  m="873140">So</span> <span m="873560">the</span> <span
  m="873840">position</span> <span m="874170">problem</span> <span
  m="874560">is,</span> <span m="875150">given</span> <span
  m="875390">the</span> <span m="875470">graph,</span> <span
  m="876210">does</span> <span m="876320">there</span> <span
  m="876460">exist</span> <span m="876810">a</span> <span
  m="876890">k-clique?</span> <span m="878280">So</span> <span
  m="878450">this</span> <span m="878570">is,</span> <span
  m="878620">again,</span> <span m="878910">known</span> <span
  m="879160">to</span> <span m="879240">be</span> <span m="879380">an</span>
  <span m="879450">NP-hard</span> <span m="879650">problem.</span> <span
  m="880330">So</span> <span m="880420">now</span> <span m="880590">we</span>
  <span m="880700">will</span> <span m="880810">use</span> <span
  m="881070">this</span> <span m="881630">to</span> <span m="882340">show</span>
  <span m="882620">that</span> <span m="883510">this</span> <span
  m="883770">problem</span> <span m="884070">is</span> <span
  m="884150">NP-hard.</span></p><p><span m="885350">So</span> <span
  m="886000">this</span> <span m="886160">problem</span> <span
  m="886530">is</span> <span m="890280">independent</span> <span
  m="890565">set.</span> <span m="895860">So</span> <span
  m="897990">again,</span> <span m="898330">so</span> <span
  m="898480">given</span> <span m="898710">the</span> <span
  m="898810">graph,</span> <span m="899160">what</span> <span
  m="899360">is</span> <span m="899430">an</span> <span
  m="899500">independent</span> <span m="899960">set?</span> <span
  m="900940">Anyone</span> <span m="901060">want to</span> <span
  m="901635">explain?</span> <span m="904320">So</span> <span
  m="904810">what</span> <span m="904940">an</span> <span
  m="905070">independent</span> <span m="905440">set</span> <span
  m="905580">is</span> <span m="905700">this.</span> <span m="905900">So</span>
  <span m="906170">let's</span> <span m="906290">say you</span> <span
  m="906430">have</span> <span m="906580">a</span> <span m="906640">graph</span>
  <span m="906930">which</span> <span m="907100">looks</span> <span
  m="907310">like--</span> <span m="915700">so</span> <span
  m="915810">kind</span> <span m="915970">of</span> <span
  m="916040">complementary</span> <span m="916310">to</span> <span
  m="916580">the</span> <span m="916730">definition</span> <span
  m="917100">of</span> <span m="917160">a</span> <span
  m="917240">clique.</span></p><p><span m="918000">An</span> <span
  m="918130">independent</span> <span m="918590">set</span> <span m="918935">is
  a</span> <span m="919280">set</span> <span m="919390">of</span> <span
  m="919510">vertices,</span> <span m="920500">such</span> <span
  m="920770">that</span> <span m="921500">no</span> <span m="921870">pair</span>
  <span m="922110">of</span> <span m="922330">them has</span> <span
  m="922500">an</span> <span m="922660">edge</span> <span
  m="922790">between</span> <span m="923070">them.</span> <span
  m="923710">So</span> <span m="923730">in</span> <span m="923800">this</span>
  <span m="923960">case,</span> <span m="926552">if</span> <span m="927000">you
  took</span> <span m="927100">this</span> <span m="927300">vertex,</span> <span
  m="927670">you took</span> <span m="927780">this</span> <span
  m="928060">vertex,</span> <span m="928910">this</span> <span
  m="929070">vertex,</span> <span m="929540">and</span> <span
  m="929650">this</span> <span m="929720">vertex--</span> <span m="930610">so
  you can</span> <span m="930885">see,</span> <span m="931160">none</span> <span
  m="931430">of</span> <span m="931530">these</span> <span
  m="931700">vertices</span> <span m="932010">have</span> <span
  m="932130">an</span> <span m="932210">edge</span> <span
  m="932390">between</span> <span m="932690">them,</span> <span
  m="933840">so</span> <span m="933940">that</span> <span m="934080">is</span>
  <span m="934160">an</span> <span m="934240">independent</span> <span
  m="934620">set.</span></p><p><span m="935385">So</span> <span
  m="935770">in</span> <span m="935850">this</span> <span
  m="936030">case,</span> <span m="936340">you're</span> <span
  m="936490">taking</span> <span m="936780">a</span> <span m="936850">set</span>
  <span m="937010">of</span> <span m="937110">vertices</span> <span
  m="939370">which</span> <span m="939490">is</span> <span m="939530">a</span>
  <span m="939580">complete</span> <span m="939890">graph,</span> <span
  m="940170">so all of them</span> <span m="940470">have</span> <span
  m="940740">edges</span> <span m="941020">between</span> <span
  m="941280">them.</span> <span m="941900">And</span> <span m="941980">in
  this</span> <span m="942340">case,</span> <span m="942540">you're</span> <span
  m="942600">taking</span> <span m="942970">vertices</span> <span
  m="943230">which</span> <span m="943350">are</span> <span
  m="943410">completely</span> <span m="943720">disconnected.</span> <span
  m="945560">So</span> <span m="945660">now</span> <span m="946120">we're going
  to</span> <span m="946270">find</span> <span m="946740">a</span> <span
  m="946790">reduction</span> <span m="947250">from</span> <span
  m="947930">this</span> <span m="948070">problem to</span> <span
  m="948290">this</span> <span m="948500">problem.</span></p><p><span
  m="950510">So</span> <span m="950520">first</span> <span m="950690">of</span>
  <span m="950770">all,</span> <span m="951730">independent</span> <span
  m="952140">set is</span> <span m="952640">an</span> <span
  m="952830">NP.</span> <span m="953400">Is</span> <span m="953520">that</span>
  <span m="953700">clear?</span> <span m="954650">How</span> <span
  m="954800">would</span> <span m="954890">you</span> <span
  m="955010">show</span> <span m="955170">that?</span> <span
  m="957120">So</span> <span m="957240">how</span> <span m="957400">would</span>
  <span m="957520">you</span> <span m="957700">create</span> <span
  m="957940">a</span> <span m="957990">certificate</span> <span
  m="959030">which</span> <span m="959250">would</span> <span
  m="959780">tell</span> <span m="959930">you</span> <span
  m="960110">that--</span> <span m="960790">so</span> <span
  m="960910">how</span> <span m="961040">would</span> <span
  m="961140">someone</span> <span m="961370">create</span> <span
  m="961540">a</span> <span m="961590">certificate</span> <span
  m="962000">which</span> <span m="962170">would</span> <span
  m="962570">convince</span> <span m="962930">you,</span> <span
  m="963540">in</span> <span m="963660">polynomial-time,</span> <span
  m="964440">that</span> <span m="964510">this</span> <span m="965840">is</span>
  <span m="966010">correct?</span> <span m="968210">So the</span> <span
  m="968440">certificate</span> <span m="968840">would</span> <span
  m="968950">be</span> <span m="969070">just</span> <span m="969540">give</span>
  <span m="969700">you</span> <span m="969800">the</span> <span
  m="969900">independent</span> <span m="970330">set.</span></p><p><span
  m="971070">And</span> <span m="971200">you</span> <span m="971250">can</span>
  <span m="971420">check</span> <span m="971590">if</span> <span
  m="971670">something</span> <span m="971900">is</span> <span
  m="972100">independent</span> <span m="972380">set.</span> <span
  m="974800">So</span> <span m="975100">given</span> <span m="977320">I--</span>
  <span m="977700">let's</span> <span m="978120">call</span> <span
  m="978330">the</span> <span m="978490">independent</span> <span
  m="978630">set,</span> <span m="978800">I.</span> <span m="979390">So</span>
  <span m="979460">given</span> <span m="979700">the</span> <span
  m="979750">set</span> <span m="979910">of</span> <span
  m="980040">vertices,</span> <span m="981170">you</span> <span
  m="981290">can</span> <span m="981420">verify</span> <span
  m="981970">that</span> <span m="982090">it is</span> <span
  m="982250">an</span> <span m="982320">independent</span> <span
  m="982720">set</span> <span m="982880">in</span> <span
  m="983240">polynomial-time.</span> <span m="983730">So</span> <span
  m="983870">just</span> <span m="984240">look</span> <span m="984390">at</span>
  <span m="984450">all</span> <span m="984650">pairs</span> <span
  m="985340">and</span> <span m="985500">check</span> <span m="985670">if</span>
  <span m="985760">there's</span> <span m="985930">an</span> <span
  m="986030">edge--</span> <span m="986300">just</span> <span
  m="986600">an</span> <span m="986780">n squared</span> <span
  m="987140">and</span> <span m="987300">Q</span> <span
  m="987430">whatever</span> <span m="987840">is</span> <span
  m="988300">polynomial.</span> <span m="989070">That's</span> <span
  m="989160">important.</span></p><p><span m="991080">So</span> <span
  m="991550">now let's</span> <span m="991600">look at our</span> <span
  m="991710">transformation.</span> <span m="995850">So</span> <span
  m="995990">again,</span> <span m="996380">as</span> <span
  m="996540">before,</span> <span m="996860">you</span> <span
  m="996930">have</span> <span m="997170">A,</span> <span
  m="997720">which</span> <span m="998120">is</span> <span
  m="998230">given</span> <span m="998480">by</span> <span m="998790">a</span>
  <span m="998880">graph,</span> <span m="999860">and</span> <span
  m="999990">you</span> <span m="1000070">want</span> <span
  m="1000180">to</span> <span m="1000230">transform</span> <span
  m="1000650">into</span> <span m="1000760">something.</span> <span
  m="1002060">So</span> <span m="1002620">the</span> <span
  m="1002850">important</span> <span m="1003230">note</span> <span
  m="1003380">here</span> <span m="1003560">is</span> <span
  m="1003660">that</span> <span m="1005400">in</span> <span
  m="1006690">the</span> <span m="1006910">clique,</span> <span
  m="1007630">you</span> <span m="1007750">have--</span> <span
  m="1021080">so</span> <span m="1021800">for</span> <span
  m="1021890">your</span> <span m="1022080">clique</span> <span
  m="1022320">C,</span> <span m="1023210">all</span> <span m="1023570">the pairs
  of</span> <span m="1023700">vertices</span> <span m="1023900">are</span> <span
  m="1024000">connected.</span> <span m="1025160">In</span> <span
  m="1025359">I,</span> <span m="1025910">no pair</span> <span
  m="1026230">of</span> <span m="1026490">vertices are</span> <span
  m="1026740">connected.</span></p><p><span m="1027550">So</span> <span
  m="1027930">what</span> <span m="1028140">should</span> <span
  m="1028270">be</span> <span m="1028410">a</span> <span
  m="1028460">logical</span> <span m="1029170">transformation</span> <span
  m="1029810">that</span> <span m="1030020">would</span> <span
  m="1030740">map</span> <span m="1031109">a</span> <span
  m="1031220">clique</span> <span m="1031490">to</span> <span
  m="1031589">an</span> <span m="1031660">independent</span> <span
  m="1032030">set?</span> <span m="1036210">Anyone?</span> <span
  m="1037700">What do</span> <span m="1037829">you</span> <span
  m="1037880">think</span> <span m="1038010">you</span> <span
  m="1038060">should</span> <span m="1038200">do</span> <span m="1038280">to
  the</span> <span m="1038480">graph</span> <span m="1039294">so</span> <span
  m="1039730">that the</span> <span m="1039980">clique</span> <span
  m="1040250">becomes--</span> <span m="1040540">yeah.</span></p><p><span
  m="1040730">AUDIENCE: Invert</span> <span m="1041228">the</span> <span
  m="1041726">existence</span> <span m="1042224">of edges</span> <span
  m="1042722">so they're</span> <span
  m="1043220">[INAUDIBLE].</span></p><p><span m="1044720">AMARTYA SHANKHA
  BISWAS: Precisely.</span></p><p><span m="1044995">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="1046731">AMARTYA SHANKHA BISWAS:
  Yup.</span> <span m="1047770">Exactly.</span> <span m="1048490">Great.</span>
  <span m="1048970">So</span> <span m="1050250">all</span> <span
  m="1050560">you</span> <span m="1050630">have</span> <span
  m="1050710">to</span> <span m="1050790">do</span> <span m="1051330">is</span>
  <span m="1051810">if</span> <span m="1051900">you</span> <span
  m="1051980">want</span> <span m="1052170">to turn</span> <span m="1052580">a
  clique</span> <span m="1053520">into</span> <span
  m="1054110">independent</span> <span m="1054380">set,</span> <span
  m="1054830">you</span> <span m="1055150">just--</span> <span
  m="1058070">what</span> <span m="1058230">is</span> <span
  m="1058490">it--</span> <span m="1058570">complement</span> <span
  m="1059070">the</span> <span m="1059180">adjacency</span> <span
  m="1059590">matrix.</span> <span m="1060340">So</span> <span
  m="1060470">every</span> <span m="1060760">edge</span> <span
  m="1060960">does</span> <span m="1061100">not</span> <span
  m="1061280">exist</span> <span m="1061670">now</span> <span
  m="1061690">exists</span> <span m="1061980">and</span> <span
  m="1062060">every</span> <span m="1062290">edge</span> <span
  m="1062420">that</span> <span m="1062500">did</span> <span
  m="1062720">exist</span> <span m="1063390">is</span> <span
  m="1063550">gone.</span></p><p><span m="1064450">So</span> <span
  m="1066195">you</span> <span m="1066610">create</span> <span
  m="1066910">a</span> <span m="1066950">graph,</span> <span
  m="1067450">G</span> <span m="1067720">dash,</span> <span
  m="1069080">with</span> <span m="1069340">the</span> <span
  m="1069420">same</span> <span m="1069670">[INAUDIBLE]</span> <span
  m="1070080">vertices,</span> <span m="1071130">except</span> <span
  m="1071500">the</span> <span m="1071650">edges</span> <span
  m="1071960">are</span> <span m="1072030">now</span> <span
  m="1072200">complemented.</span> <span m="1072750">So</span> <span
  m="1073150">the</span> <span m="1073300">E</span> <span m="1073440">bar</span>
  <span m="1073680">just</span> <span m="1073890">means</span> <span
  m="1074390">the</span> <span m="1075110">edges</span> <span
  m="1075380">that</span> <span m="1075490">were</span> <span
  m="1075550">not.</span> <span m="1075780">So</span> <span
  m="1075980">let's</span> <span m="1076360">just draw</span> <span
  m="1076510">an</span> <span m="1076560">example.</span> <span
  m="1077440">So</span> <span m="1077690">let's</span> <span
  m="1077780">say</span> <span m="1078070">you</span> <span
  m="1078210">had--</span> <span m="1093950">and</span> <span
  m="1095920">what</span> <span m="1096080">does</span> <span
  m="1096150">this</span> <span m="1096320">become?</span> <span
  m="1097300">So</span> <span m="1097590">let's draw the</span> <span
  m="1097980">vertices</span> <span m="1098370">first.</span></p><p><span
  m="1102800">Let's</span> <span m="1102930">go</span> <span m="1103020">one
  by</span> <span m="1103130">one.</span> <span m="1103780">So</span> <span
  m="1103930">let's</span> <span m="1104070">take</span> <span
  m="1104230">this</span> <span m="1104380">vertex.</span> <span
  m="1108570">Let's</span> <span m="1108700">take</span> <span
  m="1108840">this</span> <span m="1108990">vertex.</span> <span
  m="1109770">And</span> <span m="1110450">what</span> <span
  m="1110620">edges</span> <span m="1110690">does</span> <span
  m="1110880">it</span> <span m="1110950">have?</span> <span
  m="1111250">So</span> <span m="1111420">it</span> <span
  m="1111500">goes</span> <span m="1111730">here.</span> <span
  m="1112080">It</span> <span m="1112170">goes</span> <span
  m="1112410">here.</span></p><p><span m="1112620">It doesn't</span> <span
  m="1112860">go</span> <span m="1112970">here,</span> <span m="1113570">so we
  draw</span> <span m="1113900">an edge</span> <span m="1114090">here.</span>
  <span m="1115040">It</span> <span m="1115310">doesn't</span> <span
  m="1115540">go</span> <span m="1115650">there,</span> <span m="1116010">so we
  draw</span> <span m="1116414">another edge</span> <span
  m="1116818">there.</span> <span m="1118030">And</span> <span
  m="1118410">it</span> <span m="1118470">doesn't</span> <span
  m="1118690">go</span> <span m="1118790">there,</span> <span
  m="1119460">so</span> <span m="1119880">we</span> <span m="1119970">draw
  another</span> <span m="1120280">edge</span> <span
  m="1120470">there.</span></p><p><span m="1121582">Now,</span> <span
  m="1121990">this</span> <span m="1122160">vertex.</span> <span
  m="1122940">It's</span> <span m="1123050">connected</span> <span
  m="1123330">to</span> <span m="1123690">all</span> <span m="1124010">of</span>
  <span m="1124120">these</span> <span m="1124300">except</span> <span
  m="1124550">this</span> <span m="1124700">one.</span> <span
  m="1125460">So</span> <span m="1126300">that</span> <span
  m="1126490">means</span> <span m="1126730">that</span> <span
  m="1126920">there's an</span> <span m="1127310">edge there.</span> <span
  m="1128900">Let's</span> <span m="1129020">take</span> <span
  m="1129150">this</span> <span m="1129290">vertex.</span> <span
  m="1130100">It's</span> <span m="1130260">connected</span> <span
  m="1130610">to</span> <span m="1130970">everything.</span> <span
  m="1131455">Oh,</span> <span m="1131940">it's connected</span> <span
  m="1132070">to</span> <span m="1132170">everything.</span></p><p><span
  m="1133160">Let's</span> <span m="1133320">take</span> <span
  m="1133740">this</span> <span m="1133900">one.</span> <span
  m="1134290">It's</span> <span m="1134440">connected</span> <span
  m="1134520">to</span> <span m="1134590">these two</span> <span
  m="1134860">and</span> <span m="1135070">nothing</span> <span
  m="1135340">else,</span> <span m="1135870">so</span> <span m="1136180">we need
  to</span> <span m="1136410">connect it</span> <span m="1136830">to</span>
  <span m="1138440">this</span> <span m="1138620">guy.</span> <span
  m="1139770">And</span> <span m="1141510">I</span> <span
  m="1141600">think</span> <span m="1141810">that's</span> <span
  m="1142020">it.</span> <span m="1142120">Yeah.</span></p><p><span
  m="1143670">Similarly</span> <span m="1144190">proceeding,</span> <span
  m="1144800">this</span> <span m="1144920">is</span> <span
  m="1145030">connected</span> <span m="1145380">to</span> <span
  m="1145660">everything</span> <span m="1146100">except</span> <span
  m="1146410">that,</span> <span m="1147160">so</span> <span
  m="1147380">I</span> <span m="1147470">guess</span> <span
  m="1147700">this</span> <span m="1147860">goes</span> <span
  m="1148090">there.</span> <span m="1149390">And</span> <span
  m="1150330">I</span> <span m="1150750">think</span> <span
  m="1151150">that's</span> <span m="1151400">it,</span> <span
  m="1151720">right?</span> <span m="1152340">Or</span> <span
  m="1152440">is</span> <span m="1152560">there</span> <span
  m="1152680">more?</span> <span m="1153920">Three.</span> <span
  m="1154780">No,</span> <span m="1154950">OK.</span> <span
  m="1155350">So</span> <span m="1155500">that</span> <span
  m="1155720">is</span> <span m="1155880">a</span> <span
  m="1155940">complementary</span> <span m="1156380">graph</span> <span
  m="1156640">I</span> <span m="1156720">think.</span> <span
  m="1157340">So</span> <span m="1157990">you</span> <span
  m="1158090">can</span> <span m="1158200">probably</span> <span
  m="1158410">verify</span> <span m="1158740">that.</span></p><p><span
  m="1159450">So</span> <span m="1159560">now</span> <span
  m="1159750">let's</span> <span m="1160500">look</span> <span
  m="1160670">at</span> <span m="1160750">the</span> <span
  m="1160860">clique</span> <span m="1161100">in</span> <span
  m="1161200">this</span> <span m="1161400">graph.</span> <span
  m="1162660">So</span> <span m="1162710">this</span> <span
  m="1162820">is</span> <span m="1162900">the</span> <span
  m="1163010">clique.</span> <span m="1163870">This</span> <span
  m="1164020">is</span> <span m="1164110">the</span> <span
  m="1164190">largest</span> <span m="1164590">clique,</span> <span
  m="1164660">rather,</span> <span m="1165670">but this is</span> <span
  m="1166020">a clique.</span> <span m="1166680">You</span> <span
  m="1166760">could</span> <span m="1167170">have</span> <span
  m="1167300">other</span> <span m="1167500">cliques,</span> <span
  m="1167730">like,</span> <span m="1168100">for</span> <span
  m="1168190">example,</span> <span m="1168490">this</span> <span
  m="1168750">these</span> <span m="1168950">three</span> <span
  m="1169120">things</span> <span m="1169320">are</span> <span
  m="1169370">also</span> <span m="1169670">a</span> <span
  m="1169950">clique.</span></p><p><span m="1170780">So</span> <span
  m="1170970">now</span> <span m="1171120">look</span> <span
  m="1171300">at</span> <span m="1171360">what</span> <span m="1171530">this
  is</span> <span m="1171740">mapping</span> <span m="1171940">to.</span> <span
  m="1172220">This is</span> <span m="1172490">mapping</span> <span
  m="1172800">to</span> <span m="1173340">this</span> <span
  m="1173520">vertex,</span> <span m="1174040">this</span> <span
  m="1174240">vertex,</span> <span m="1174720">this</span> <span
  m="1174920">vertex,</span> <span m="1175400">and this</span> <span
  m="1175580">vertex.</span> <span m="1177200">And</span> <span m="1177890">you
  can</span> <span m="1178060">see</span> <span m="1178320">that's</span> <span
  m="1178550">an</span> <span m="1178670">independent</span> <span
  m="1178960">set.</span> <span m="1180480">So does</span> <span
  m="1180800">that transformation</span> <span m="1181130">make</span> <span
  m="1181300">sense?</span></p><p><span m="1183040">So</span> <span
  m="1183120">now</span> <span m="1183230">the</span> <span
  m="1183330">proof</span> <span m="1183550">should</span> <span
  m="1183730">be</span> <span m="1183940">intuitively</span> <span
  m="1184450">clear.</span> <span m="1185150">So</span> <span
  m="1185230">let's</span> <span m="1185410">just</span> <span
  m="1185770">go</span> <span m="1185930">through</span> <span
  m="1186110">it</span> <span m="1186300">moderately</span> <span
  m="1186590">rigorously.</span> <span m="1187500">So</span> <span
  m="1187650">let's</span> <span m="1187810">say</span> <span
  m="1187980">you</span> <span m="1188070">have</span> <span
  m="1188400">a</span> <span m="1188530">clique</span> <span
  m="1188740">here.</span> <span m="1193020">So your</span> <span
  m="1193270">clique</span> <span m="1193450">here,</span> <span
  m="1194930">for</span> <span m="1195150">every</span> <span m="1195380">pair
  of</span> <span m="1195680">vertices</span> <span m="1196740">in</span> <span
  m="1196870">the</span> <span m="1196990">clique,</span> <span
  m="1198470">there's</span> <span m="1198810">an</span> <span
  m="1198860">edge</span> <span m="1199020">between</span> <span
  m="1199310">them.</span></p><p><span m="1200620">And</span> <span
  m="1201110">so if</span> <span m="1201530">that</span> <span
  m="1201730">maps</span> <span m="1202050">to--</span> <span
  m="1203150">so</span> <span m="1203310">let's</span> <span
  m="1203450">say</span> <span m="1204340">clique</span> <span
  m="1204820">C</span> <span m="1205660">maps</span> <span
  m="1205990">to--</span> <span m="1208740">let's say</span> <span
  m="1208830">this</span> <span m="1209000">maps to</span> <span
  m="1209290">I.</span> <span m="1210560">So</span> <span m="1212440">for</span>
  <span m="1212620">all</span> <span m="1213990">U, V</span> <span
  m="1216730">element</span> <span m="1216770">of</span> <span
  m="1217070">C,</span> <span m="1219200">you</span> <span
  m="1219320">have</span> <span m="1220400">U, V,</span> <span
  m="1221590">element</span> <span m="1222080">of E.</span> <span
  m="1223530">So</span> <span m="1223860">if this</span> <span
  m="1223980">is</span> <span m="1224130">a</span> <span
  m="1224260">clique,</span> <span m="1224850">for</span> <span
  m="1225030">every</span> <span m="1225530">pair</span> <span m="1225990">of
  vertices,</span> <span m="1226320">that</span> <span m="1226700">edge</span>
  <span m="1227100">is</span> <span m="1227250">in</span> <span
  m="1227440">the</span> <span m="1227530">original</span> <span
  m="1227890">graph,</span> <span m="1229060">which</span> <span
  m="1229240">means</span> <span m="1229540">that</span> <span m="1231200">U,
  V</span> <span m="1232510">is</span> <span m="1233310">not</span> <span
  m="1233630">an</span> <span m="1233730">element</span> <span
  m="1234110">of</span> <span m="1235120">E</span> <span m="1237800">for</span>
  <span m="1238020">all</span> <span m="1239900">U, V</span> <span
  m="1241400">element</span> <span m="1241760">of</span> <span
  m="1242070">I.</span></p><p><span m="1242780">So</span> <span
  m="1243360">for</span> <span m="1243470">every</span> <span m="1244530">U,
  V</span> <span m="1244925">element of</span> <span m="1245320">I,</span> <span
  m="1245580">we</span> <span m="1245710">have</span> <span
  m="1246340">this,</span> <span m="1248980">which</span> <span
  m="1249170">means</span> <span m="1249430">that--</span> <span
  m="1252020">does that</span> <span m="1252190">make sense?</span> <span
  m="1253520">So</span> <span m="1253630">that</span> <span
  m="1253770">means</span> <span m="1253940">that</span> <span
  m="1255120">that's the</span> <span m="1255470">independent set</span> <span
  m="1255920">criterion.</span> <span m="1257810">So</span> <span
  m="1257910">you</span> <span m="1258090">reduced</span> <span
  m="1258560">clique</span> <span m="1258850">to</span> <span
  m="1258950">independent</span> <span m="1259170">set.</span> <span
  m="1260020">And</span> <span m="1260090">that</span> <span m="1260250">means
  that</span> <span m="1260420">independent</span> <span m="1260670">set</span>
  <span m="1260870">is</span> <span m="1261120">now</span> <span
  m="1261370">NP-hard.</span></p><p><span m="1262552">OK.</span> <span
  m="1263830">How are</span> <span m="1264060">we doing</span> <span
  m="1264300">on time?</span> <span m="1264640">OK.</span> <span
  m="1265710">So</span> <span m="1266110">now</span> <span
  m="1266240">let's</span> <span m="1266620">do</span> <span
  m="1266770">a</span> <span m="1266820">more</span> <span
  m="1267460">complicated</span> <span m="1267900">example.</span> <span
  m="1268660">Any</span> <span m="1268790">questions</span> <span
  m="1269160">on</span> <span m="1269240">these</span> <span
  m="1269420">two?</span> <span m="1272890">Make</span> <span
  m="1273080">sense?</span> <span m="1274210">OK.</span> <span
  m="1275300">So</span> <span m="1276010">let's</span> <span
  m="1277110">try</span> <span m="1277310">this.</span></p><p><span
  m="1280098">So let's</span> <span m="1280590">start by</span> <span
  m="1281082">erasing</span> <span m="1281574">something.</span> <span
  m="1308680">So</span> <span m="1308870">this is the</span> <span
  m="1308960">next</span> <span m="1309160">problem.</span> <span
  m="1310370">So</span> <span m="1311240">as</span> <span
  m="1311670">before,</span> <span m="1312650">our</span> <span
  m="1312930">A</span> <span m="1313170">is</span> <span
  m="1314500">k-clique.</span> <span m="1321280">So</span> <span
  m="1322330">it</span> <span m="1322450">says</span> <span
  m="1322630">there's</span> <span m="1322760">a</span> <span
  m="1322830">clique--</span> <span m="1324600">rather,</span> <span
  m="1324900">let's</span> <span m="1325120">add this in</span> <span
  m="1325410">this</span> <span m="1325480">way.</span> <span
  m="1326210">Clique</span> <span m="1327170">size</span> <span
  m="1328580">greater</span> <span m="1328770">than</span> <span
  m="1328910">or</span> <span m="1329010">equal</span> <span m="1329150">to
  k.</span></p><p><span m="1330930">So</span> <span m="1331060">that's
  the</span> <span m="1331340">decision</span> <span m="1331680">problem.</span>
  <span m="1332030">Is</span> <span m="1332170">there a</span> <span
  m="1332380">clique</span> <span m="1332570">of size</span> <span
  m="1332880">greater than or</span> <span m="1333110">equal</span> <span
  m="1333290">to</span> <span m="1333360">k?</span> <span m="1334580">And</span>
  <span m="1336430">B</span> <span m="1336680">is,</span> <span
  m="1338180">it's</span> <span m="1338330">called</span> <span
  m="1338750">Max-2-SAT.</span> <span m="1340460">So</span> <span
  m="1341530">what</span> <span m="1341660">that</span> <span
  m="1341850">means</span> <span m="1342130">is</span> <span
  m="1342260">that--</span> <span m="1343350">so</span> <span
  m="1344020">it</span> <span m="1344130">is</span> <span
  m="1344280">somewhat</span> <span m="1344570">like</span> <span
  m="1344790">normal</span> <span m="1345290">2-SAT,</span> <span
  m="1346200">except</span> <span m="1346970">basically</span> <span
  m="1347340">you</span> <span m="1347450">have</span> <span
  m="1347620">some</span> <span m="1347790">clauses</span> <span
  m="1356290">and</span> <span m="1356790">you have</span> <span
  m="1356960">some</span> <span m="1357010">literals.</span></p><p><span
  m="1365200">So</span> <span m="1365500">each</span> <span
  m="1365670">of</span> <span m="1365740">these</span> <span
  m="1365900">literals</span> <span m="1366250">contain</span> <span
  m="1366590">values</span> <span m="1366960">1</span> <span
  m="1367150">or</span> <span m="1367240">0.</span> <span m="1368400">And</span>
  <span m="1368570">each</span> <span m="1368730">of</span> <span
  m="1368810">these</span> <span m="1368990">clauses</span> <span
  m="1370690">is</span> <span m="1371000">something</span> <span
  m="1371450">like</span> <span m="1372640">xi</span> <span
  m="1373630">or</span> <span m="1374550">xj.</span> <span m="1375560">And
  actually,</span> <span m="1376020">there</span> <span m="1376180">can</span>
  <span m="1376400">be</span> <span m="1376510">naughts</span> <span
  m="1376680">in front of</span> <span m="1376760">this,</span> <span
  m="1377285">so</span> <span m="1378240">let's</span> <span
  m="1378390">say</span> <span m="1378530">xi</span> <span m="1378760">0</span>
  <span m="1379100">xj.</span> <span m="1380430">Or it</span> <span
  m="1380520">can</span> <span m="1380690">be</span> <span
  m="1380730">other</span> <span m="1380900">things.</span></p><p><span
  m="1381350">So</span> <span m="1381950">it's</span> <span
  m="1382220">xi</span> <span m="1382340">0</span> <span m="1382710">xj,</span>
  <span m="1383120">or</span> <span m="1383830">0</span> <span
  m="1385050">xi</span> <span m="1385430">0</span> <span m="1385680">xj,</span>
  <span m="1386600">or</span> <span m="1387310">xi</span> <span
  m="1387650">xj,</span> <span m="1387990">and</span> <span
  m="1388120">so</span> <span m="1388260">on</span> <span m="1388430">and</span>
  <span m="1388530">so</span> <span m="1388560">forth,</span> <span
  m="1389050">so</span> <span m="1389430">just  the</span> <span
  m="1389690">normal</span> <span m="1389960">2-SAT.</span> <span m="1390790">So
  now the</span> <span m="1391180">decision</span> <span
  m="1391510">problem</span> <span m="1391890">is</span> <span
  m="1392070">to--</span> <span m="1394840">does there</span> <span
  m="1395080">exist</span> <span m="1395410">an</span> <span
  m="1395480">assignment,</span> <span m="1402690">such</span> <span
  m="1402980">that</span> <span m="1405470">greater</span> <span
  m="1405770">than</span> <span m="1406060">equal</span> <span
  m="1406260">to</span> <span m="1406670">k</span> <span
  m="1410090">clauses--</span> <span m="1419890">so</span> <span
  m="1419990">that</span> <span m="1420080">the</span> <span
  m="1420300">decision</span> <span m="1420620">problem.</span> <span
  m="1421000">So is</span> <span m="1421120">there an</span> <span
  m="1421350">assignment</span> <span m="1421750">to</span> <span
  m="1421830">literals</span> <span m="1422870">such</span> <span
  m="1423140">that</span> <span m="1424500">at</span> <span
  m="1424610">least</span> <span m="1424910">k</span> <span m="1425150">of
  these</span> <span m="1425350">clauses</span> <span m="1425540">are</span>
  <span m="1425610">satisfied?</span></p><p><span m="1427680">And</span> <span
  m="1427940">so</span> <span m="1428120">now</span> <span
  m="1428330">we're</span> <span m="1428460">going</span> <span
  m="1428600">to</span> <span m="1428660">show</span> <span
  m="1428890">that</span> <span m="1429090">it</span> <span
  m="1429190">is</span> <span m="1429580">with</span> <span
  m="1430010">k-clique.</span> <span m="1430350">So</span> <span
  m="1430430">again,</span> <span m="1431880">is</span> <span
  m="1432040">it</span> <span m="1432110">an</span> <span m="1432380">NP?</span>
  <span m="1433070">So</span> <span m="1433320">what</span> <span
  m="1433480">is</span> <span m="1433500">the</span> <span
  m="1433600">certificate?</span> <span m="1436230">How</span> <span
  m="1436390">would</span> <span m="1436500">someone</span> <span
  m="1436700">convince</span> <span m="1437090">you</span> <span
  m="1437970">their</span> <span m="1438370">solution</span> <span
  m="1438980">to</span> <span m="1439030">this</span> <span
  m="1439170">problem?</span></p><p><span m="1443630">AUDIENCE: Give you</span>
  <span m="1444115">the literals.</span></p><p><span m="1445580">AMARTYA SHANKHA
  BISWAS: Yeah,</span> <span m="1445810">so</span> <span m="1445870">give</span>
  <span m="1446070">you</span> <span m="1446200">an</span> <span
  m="1446290">assignment</span> <span m="1446790">of</span> <span
  m="1446970">values</span> <span m="1447250">to</span> <span
  m="1447340">literals.</span> <span m="1447930">And</span> <span
  m="1448040">then you</span> <span m="1448190">can</span> <span
  m="1448320">go</span> <span m="1448470">through</span> <span
  m="1448580">all</span> <span m="1448740">the</span> <span m="1448830">clauses
  and</span> <span m="1449170">check</span> <span m="1449510">them.</span> <span
  m="1450240">So</span> <span m="1450350">if they</span> <span
  m="1450470">give</span> <span m="1450610">you</span> <span
  m="1450750">like</span> <span m="1450840">x1</span> <span
  m="1451090">equal</span> <span m="1451260">to</span> <span
  m="1451330">1,</span> <span m="1451510">x2</span> <span
  m="1451680">equal</span> <span m="1451960">to</span> <span
  m="1452080">2,</span> <span m="1452170">x</span> <span m="1452310">equal
  to</span> <span m="1452560">0,</span> <span m="1453030">x3</span> <span
  m="1453160">equal to</span> <span m="1453410">1,</span> <span
  m="1453990">and</span> <span m="1454150">so</span> <span m="1454240">on</span>
  <span m="1454420">and</span> <span m="1454520">so</span> <span
  m="1454540">forth,</span> <span m="1455170">you</span> <span
  m="1455270">can</span> <span m="1455280">then</span> <span m="1455410">go
  through</span> <span m="1455560">and</span> <span m="1455740">check</span>
  <span m="1455970">all</span> <span m="1456150">the</span> <span
  m="1456240">clauses</span> <span m="1456580">and</span> <span
  m="1456700">see</span> <span m="1456870">if</span> <span
  m="1457010">greater</span> <span m="1457120">than</span> <span
  m="1457280">k</span> <span m="1457680">are</span> <span
  m="1457760">satisfied.</span> <span m="1458460">So</span> <span
  m="1458570">this</span> <span m="1458690">is</span> <span
  m="1458790">an</span> <span m="1458900">NP.</span></p><p><span
  m="1460280">So</span> <span m="1460470">now</span> <span
  m="1460670">let's</span> <span m="1460870">try the</span> <span
  m="1461110">reduction.</span> <span m="1462550">So</span> <span
  m="1462680">this is</span> <span m="1462810">how the</span> <span
  m="1462940">reduction</span> <span m="1463220">goes.</span> <span
  m="1465600">Let's see.</span> <span m="1466180">So naturally,</span> <span
  m="1466630">we have</span> <span m="1466770">k-clique,</span> <span
  m="1467320">or</span> <span m="1467680">greater</span> <span m="1467810">than
  equal</span> <span m="1468000">to</span> <span m="1468300">k-clique,</span>
  <span m="1468490">rather.</span> <span m="1473530">So</span> <span
  m="1473630">that</span> <span m="1473760">means</span> <span m="1473940">you
  have a</span> <span m="1474100">graph</span> <span m="1475740">with</span>
  <span m="1476710">a</span> <span m="1476850">set</span> <span
  m="1476990">of</span> <span m="1477050">vertices</span> <span m="1477530">and
  a set</span> <span m="1477640">of</span> <span
  m="1477940">edges.</span></p><p><span m="1483700">So</span> <span
  m="1483900">let's</span> <span m="1483980">say</span> <span
  m="1484160">you</span> <span m="1484210">have</span> <span
  m="1484280">a</span> <span m="1485060">clique,</span> <span
  m="1485530">V</span> <span m="1485660">dash,</span> <span
  m="1486850">subset</span> <span m="1487140">of</span> <span
  m="1487240">V,</span> <span m="1488240">and</span> <span
  m="1489280">mod</span> <span m="1489540">of</span> <span m="1489800">V</span>
  <span m="1490230">dash</span> <span m="1490540">is</span> <span
  m="1490850">greater</span> <span m="1491570">than equal</span> <span
  m="1492010">to k.</span> <span m="1492900">So now</span> <span m="1493350">you
  have to somehow</span> <span m="1493660">construct</span> <span
  m="1494070">literals,</span> <span m="1495100">construct</span> <span
  m="1495450">clauses,</span> <span m="1495960">which</span> <span
  m="1496050">will</span> <span m="1496500">reflect</span> <span
  m="1496820">this</span> <span m="1496970">behavior.</span> <span
  m="1498070">So</span> <span m="1498260">first</span> <span
  m="1498450">of</span> <span m="1498520">all,</span> <span
  m="1499050">this</span> <span m="1499210">may not</span> <span m="1499390">be
  clear</span> <span m="1499660">right</span> <span m="1499840">now,</span>
  <span m="1499990">but</span> <span m="1500120">let's</span> <span
  m="1500310">say</span> <span m="1500480">we</span> <span
  m="1500770">take</span> <span m="1500930">some</span> <span
  m="1501060">literals</span> <span m="1501390">like</span> <span
  m="1501550">this.</span></p><p><span m="1501730">So</span> <span
  m="1501830">let's</span> <span m="1501980">say</span> <span
  m="1502110">we</span> <span m="1502200">take</span> <span
  m="1502380">xi</span> <span m="1503530">for</span> <span
  m="1505040">all</span> <span m="1505220">i</span> <span
  m="1505770">element</span> <span m="1506070">of</span> <span
  m="1506220">V.</span> <span m="1507412">So for</span> <span
  m="1507820">every</span> <span m="1508160">vertex</span> <span
  m="1508930">in</span> <span m="1509040">the</span> <span
  m="1509130">graph,</span> <span m="1509770">we</span> <span
  m="1509870">take</span> <span m="1510070">a</span> <span
  m="1510150">literal.</span> <span m="1511120">So</span> <span
  m="1512740">if</span> <span m="1512880">the</span> <span m="1512950">number
  of</span> <span m="1513370">vertices is</span> <span m="1513520">n,</span>
  <span m="1513760">we</span> <span m="1513870">have</span> <span
  m="1514010">n</span> <span m="1514190">literals</span> <span
  m="1514520">because</span> <span m="1514760">it's</span> <span
  m="1514970">corresponding to</span> <span m="1515240">each</span> <span
  m="1515450">vertex.</span> <span m="1516900">Also,</span> <span
  m="1517200">we</span> <span m="1517330">take</span> <span m="1518140">a</span>
  <span m="1519110">dummy</span> <span m="1519410">literal.</span> <span
  m="1519710">Let's</span> <span m="1520000">call</span> <span
  m="1520190">it</span> <span m="1521230">Z.</span></p><p><span
  m="1524200">So</span> <span m="1524640">now</span> <span
  m="1524770">how</span> <span m="1524910">do</span> <span m="1524980">we
  get</span> <span m="1525060">our</span> <span m="1525270">clauses?</span>
  <span m="1526750">So</span> <span m="1526890">the</span> <span
  m="1527060">general</span> <span m="1527280">idea</span> <span
  m="1527550">is</span> <span m="1527840">that</span> <span
  m="1528580">if</span> <span m="1529550">a</span> <span
  m="1529620">vertex</span> <span m="1530030">is</span> <span
  m="1530170">in</span> <span m="1530600">the</span> <span
  m="1530770">clique,</span> <span m="1531680">you will</span> <span
  m="1531850">assign it</span> <span m="1532190">1.</span> <span
  m="1532950">If</span> <span m="1533130">it's not</span> <span
  m="1533370">in</span> <span m="1533460">the</span> <span m="1533560">clique,
  we will</span> <span m="1533880">assign</span> <span m="1534050">it</span>
  <span m="1534390">0.</span> <span m="1540990">Everything</span> <span
  m="1541340">outside</span> <span m="1541690">of</span> <span
  m="1541810">the</span> <span m="1541900">clique</span> <span
  m="1542110">is</span> <span m="1542210">0.</span></p><p><span
  m="1542850">So</span> <span m="1543520">this</span> <span
  m="1543780">clause,</span> <span m="1546430">not</span> <span
  m="1546720">xi</span> <span m="1548920">or</span> <span m="1549930">not</span>
  <span m="1550600">xj--</span> <span m="1553130">so</span> <span
  m="1553210">what</span> <span m="1554060">is</span> <span
  m="1554120">the</span> <span m="1554180">value</span> <span
  m="1554440">of</span> <span m="1554480">this</span> <span
  m="1554610">clause</span> <span m="1554850">normally?</span> <span
  m="1555630">So</span> <span m="1555760">let's</span> <span
  m="1555910">say</span> <span m="1556090">xi and</span> <span
  m="1556400">xj</span> <span m="1556780">are</span> <span
  m="1556890">both</span> <span m="1559790">outside</span> <span
  m="1560230">the</span> <span m="1560300">clique.</span> <span m="1561520">So i
  and</span> <span m="1561960">j are</span> <span m="1562230">both</span> <span
  m="1562700">outside the clique.</span> <span m="1563110">That</span> <span
  m="1563270">means</span> <span m="1563450">that</span> <span m="1563950">both
  of them</span> <span m="1564110">are</span> <span m="1564320">0</span> <span
  m="1564970">and</span> <span m="1565120">so</span> <span
  m="1565200">this</span> <span m="1565310">is</span> <span
  m="1565440">true.</span></p><p><span m="1566730">What</span> <span
  m="1566830">if</span> <span m="1567050">one</span> <span m="1567330">of</span>
  <span m="1567410">them is</span> <span m="1567580">inside</span> <span
  m="1567860">the</span> <span m="1567950">clique</span> <span
  m="1568260">and</span> <span m="1568380">the</span> <span
  m="1568430">other</span> <span m="1568560">one is</span> <span
  m="1568770">outside?</span> <span m="1569420">It</span> <span
  m="1569560">still is</span> <span m="1569780">true</span> <span
  m="1569990">because</span> <span m="1570220">one</span> <span
  m="1570410">of</span> <span m="1570480">these</span> <span
  m="1570660">naughts</span> <span m="1570915">is</span> <span
  m="1571170">1</span> <span m="1571510">and</span> <span m="1571810">that 
  is</span> <span m="1571960">still</span> <span m="1572100">true.</span> <span
  m="1573370">Let's</span> <span m="1573520">say</span> <span
  m="1573630">both</span> <span m="1573970">i and</span> <span
  m="1574130">j</span> <span m="1574460">are</span> <span
  m="1574540">inside</span> <span m="1574970">the clique.</span> <span
  m="1576940">So</span> <span m="1577720">in</span> <span
  m="1577860">that</span> <span m="1578100">case,</span> <span
  m="1579100">you</span> <span m="1579250">have</span> <span
  m="1581050">0</span> <span m="1581270">of</span> <span m="1581320">xi</span>
  <span m="1581720">is</span> <span m="1582230">0</span> <span m="1582470">and 0
  of</span> <span m="1582870">xj is</span> <span m="1583155">also
  0.</span></p><p><span m="1584110">That's</span> <span m="1584360">the</span>
  <span m="1584420">only</span> <span m="1584600">case</span> <span
  m="1584780">that this is</span> <span m="1585100">false.</span> <span
  m="1586260">So</span> <span m="1586300">the way we</span> <span
  m="1586520">take</span> <span m="1586700">care</span> <span
  m="1586870">of--</span> <span m="1587280">so</span> <span
  m="1587460">we're</span> <span m="1587860">trying</span> <span
  m="1588000">to</span> <span m="1588100">maximize</span> <span
  m="1588760">the</span> <span m="1588860">number</span> <span
  m="1589110">of</span> <span m="1589230">true</span> <span
  m="1589450">clauses</span> <span m="1589660">in</span> <span
  m="1589790">some</span> <span m="1589960">sense.</span> <span
  m="1590360">It's</span> <span m="1590460">like</span> <span m="1590610">you
  had</span> <span m="1590740">maybe</span> <span m="1591150">an</span> <span
  m="1591420">explanation</span> <span m="1591940">of</span> <span
  m="1592030">why</span> <span m="1592240">you're</span> <span
  m="1592660">using</span> <span m="1592900">this</span> <span
  m="1593070">clause.</span> <span m="1593730">So what</span> <span
  m="1593850">we</span> <span m="1593980">do</span> <span
  m="1594110">instead</span> <span m="1594370">of</span> <span
  m="1594430">taking</span> <span m="1594700">all</span> <span
  m="1595050">the</span> <span m="1595120">xi,</span> <span
  m="1595530">xj</span> <span m="1595650">pairs,</span> <span
  m="1596710">is</span> <span m="1596860">we</span> <span
  m="1596950">just</span> <span m="1597160">take</span> <span
  m="1597320">xi,</span> <span m="1597575">xj,</span> <span
  m="1598270">such</span> <span m="1598580">that</span> <span m="1602260">i,
  j</span> <span m="1606210">is</span> <span m="1606560">not</span> <span
  m="1606850">an</span> <span m="1606930">element</span> <span
  m="1607340">of</span> <span m="1607758">E.</span></p><p><span
  m="1609850">So</span> <span m="1610030">what does that</span> <span
  m="1610180">mean?</span> <span m="1610490">So</span> <span
  m="1611710">now</span> <span m="1612100">if</span> <span
  m="1612220">you</span> <span m="1612320">had</span> <span
  m="1612530">the</span> <span m="1612920">graph</span> <span
  m="1613430">which</span> <span m="1613610">looked</span> <span
  m="1613750">like</span> <span m="1613920">this,</span> <span
  m="1618090">now</span> <span m="1619170">it looks like</span> <span
  m="1619620">1,</span> <span m="1619890">2,</span> <span m="1620360">3,</span>
  <span m="1620990">4.</span> <span m="1622745">So</span> <span
  m="1623040">you</span> <span m="1623170">would</span> <span
  m="1623370">take</span> <span m="1624490">0</span> <span m="1624850">x1</span>
  <span m="1625200">and</span> <span m="1625280">0</span> <span
  m="1625470">x4.</span> <span m="1626980">You</span> <span
  m="1627050">would</span> <span m="1627180">take</span> <span
  m="1627420">0</span> <span m="1627630">x1</span> <span m="1627920">and</span>
  <span m="1627990">0</span> <span m="1628160">x3.</span> <span
  m="1628980">But</span> <span m="1629080">you</span> <span m="1629210">would
  not</span> <span m="1629450">take</span> <span m="1629600">0</span> <span
  m="1629800">x2</span> <span m="1630040">and</span> <span m="1630180">0</span>
  <span m="1630530">x3.</span></p><p><span m="1631380">So</span> <span
  m="1631480">what</span> <span m="1631550">does</span> <span
  m="1631650">that</span> <span m="1631890">do?</span> <span
  m="1632590">That</span> <span m="1632750">means</span> <span
  m="1633000">that</span> <span m="1633730">if</span> <span
  m="1633880">you</span> <span m="1634020">follow</span> <span
  m="1634270">the</span> <span m="1634380">assignment</span> <span
  m="1634740">according</span> <span m="1635040">to</span> <span
  m="1635090">the</span> <span m="1635190">clique</span> <span
  m="1635410">rules--</span> <span m="1637880">so</span> <span
  m="1638205">if</span> <span m="1638530">i and</span> <span m="1638930">j
  are</span> <span m="1639330">both</span> <span m="1639520">in</span> <span
  m="1639590">the</span> <span m="1639690">clique,</span> <span
  m="1641130">this</span> <span m="1641650">clause</span> <span
  m="1641840">will</span> <span m="1641920">not</span> <span
  m="1642080">be</span> <span m="1642150">included.</span> <span
  m="1643320">Does that</span> <span m="1643520">make</span> <span
  m="1643640">sense--</span> <span m="1644230">what</span> <span
  m="1644430">set</span> <span m="1644580">of</span> <span
  m="1644680">clauses</span> <span m="1644960">you are</span> <span
  m="1645040">taking?</span></p><p><span m="1648266">OK,</span> <span
  m="1648720">so</span> <span m="1649200">let's</span> <span
  m="1649410">continue</span> <span m="1649740">and</span> <span
  m="1649850">it</span> <span m="1650020">will</span> <span
  m="1650360">hopefully</span> <span m="1650850">be</span> <span
  m="1650950">a</span> <span m="1650990">little</span> <span
  m="1651130">more</span> <span m="1651290">clear.</span> <span
  m="1652390">So</span> <span m="1653390">the</span> <span
  m="1653530">other</span> <span m="1653750">sort</span> <span
  m="1653910">of</span> <span m="1654000">clause</span> <span m="1654335">we're
  going</span> <span m="1654670">to take</span> <span m="1655350">is</span>
  <span m="1655520">xi</span> <span m="1655960">or</span> <span
  m="1656140">z.</span> <span m="1657860">And</span> <span
  m="1658320">the</span> <span m="1658670">other</span> <span
  m="1658870">one</span> <span m="1659070">is</span> <span m="1659650">xi</span>
  <span m="1660580">or</span> <span m="1661180">0</span> <span
  m="1661550">z.</span> <span m="1663260">So the</span> <span
  m="1663690">reason</span> <span m="1664120">we're taking these is</span> <span
  m="1664350">that</span> <span m="1664870">if</span> <span
  m="1664940">you</span> <span m="1665030">wanted</span> <span
  m="1665270">to</span> <span m="1665850">Max-2-SAT</span> <span
  m="1666830">on</span> <span m="1666970">this</span> <span
  m="1667120">alone,</span> <span m="1668020">you can</span> <span
  m="1668090">just</span> <span m="1668240">set</span> <span
  m="1668490">everything</span> <span m="1668880">to</span> <span
  m="1668940">0,</span> <span m="1669800">and</span> <span
  m="1669940">that</span> <span m="1670070">would</span> <span
  m="1670160">give</span> <span m="1670320">you a</span> <span
  m="1670450">maximum.</span></p><p><span m="1671350">So</span> <span
  m="1671920">sort</span> <span m="1672120">of</span> <span
  m="1672200">not</span> <span m="1672970">do</span> <span
  m="1673090">that--</span> <span m="1673300">so</span> <span
  m="1673390">to</span> <span m="1673520">sort</span> <span
  m="1673750">of</span> <span m="1673860">minimize</span> <span
  m="1674360">the</span> <span m="1674440">number</span> <span
  m="1674640">of</span> <span m="1674730">things</span> <span
  m="1674870">to</span> <span m="1674920">be</span> <span m="1675000">set</span>
  <span m="1675170">to</span> <span m="1675230">0,</span> <span
  m="1676240">you</span> <span m="1676380">were</span> <span m="1676450">doing
  this.</span> <span m="1676700">So</span> <span m="1677070">is</span> <span
  m="1677330">this</span> <span m="1677600">just</span> <span
  m="1677870">some</span> <span m="1678290">hand-wavy</span> <span
  m="1678550">argument</span> <span m="1678920">why</span> <span
  m="1679160">you're</span> <span m="1679310">doing</span> <span
  m="1679540">this.</span> <span m="1680260">So</span> <span
  m="1680700">let's</span> <span m="1681210">actually</span> <span
  m="1681640">try</span> <span m="1681760">to</span> <span m="1681870">do</span>
  <span m="1681970">some</span> <span m="1682100">analysis</span> <span
  m="1682470">on</span> <span m="1682580">this.</span></p><p><span
  m="1683280">So</span> <span m="1683390">let's</span> <span
  m="1683600">say</span> <span m="1684310">you</span> <span
  m="1684420">do</span> <span m="1684490">this</span> <span
  m="1684630">transformation.</span> <span m="1685050">So</span> <span
  m="1685140">do</span> <span m="1685390">the</span> <span
  m="1685540">clauses</span> <span m="1685890">make</span> <span
  m="1686050">sense?</span> <span m="1687320">Does</span> <span
  m="1687380">the</span> <span m="1687480">first</span> <span
  m="1687840">clause</span> <span m="1688020">sense?</span> <span
  m="1690080">So</span> <span m="1690210">you have</span> <span
  m="1690330">0</span> <span m="1690550">xi,</span> <span m="1690900">0</span>
  <span m="1691080">xj</span> <span m="1691810">for</span> <span
  m="1691960">every</span> <span m="1692320">i, j</span> <span
  m="1692680">which</span> <span m="1692810">is</span> <span
  m="1692910">not</span> <span m="1693080">in</span> <span
  m="1693220">the</span> <span m="1693630">graph.</span></p><p><span
  m="1696640">So</span> <span m="1696650">how does</span> <span
  m="1696770">this</span> <span m="1696920">work?</span> <span
  m="1697970">So</span> <span m="1698100">let's</span> <span
  m="1698290">say</span> <span m="1698500">you</span> <span
  m="1698660">have</span> <span m="1705910">V</span> <span
  m="1706040">dash</span> <span m="1707320">such</span> <span
  m="1707780">that</span> <span m="1709160">size</span> <span
  m="1709460">of</span> <span m="1709580">V</span> <span m="1709690">dash</span>
  <span m="1710060">is</span> <span m="1710170">greater than or</span> <span
  m="1710490">equal</span> <span m="1710690">to</span> <span
  m="1710780">k.</span> <span m="1711800">Actually,</span> <span
  m="1712070">let's</span> <span m="1712720">just</span> <span
  m="1712830">make</span> <span m="1713090">size</span> <span
  m="1713450">is</span> <span m="1714030">V dash</span> <span
  m="1714230">equal</span> <span m="1714440">to</span> <span
  m="1714510">k.</span> <span m="1715120">So</span> <span m="1715590">if</span>
  <span m="1715740">you</span> <span m="1715870">have</span> <span
  m="1716190">a</span> <span m="1716320">clique</span> <span m="1716550">of
  size</span> <span m="1716860">greater than</span> <span m="1716990">or
  equal</span> <span m="1717070">to</span> <span m="1717350">k,</span> <span
  m="1717720">of</span> <span m="1717840">course,</span> <span
  m="1718040">you</span> <span m="1718120">have</span> <span
  m="1718240">a</span> <span m="1718310">clique</span> <span m="1718470">of
  size</span> <span m="1718790">equal to k.</span> <span m="1719080">You</span>
  <span m="1719190">can</span> <span m="1719290">just</span> <span
  m="1719410">throw</span> <span m="1719640">away</span> <span m="1719760">some
  of the</span> <span m="1720040">vertices.</span></p><p><span
  m="1721270">So</span> <span m="1721530">you</span> <span
  m="1721860">take</span> <span m="1722000">your</span> <span
  m="1722110">V</span> <span m="1722240">dash such</span> <span
  m="1722650">that</span> <span m="1722870">this</span> <span
  m="1722990">size</span> <span m="1723290">is</span> <span
  m="1723370">equal</span> <span m="1723560">to k.</span> <span
  m="1724320">And</span> <span m="1724780">you</span> <span
  m="1724890">set</span> <span m="1725730">xi</span> <span m="1726660">is</span>
  <span m="1726780">equal</span> <span m="1727060">to</span> <span
  m="1727150">1.</span> <span m="1728140">So</span> <span m="1728330">you</span>
  <span m="1728430">set</span> <span m="1728620">xi</span> <span
  m="1728780">equal</span> <span m="1729150">to</span> <span
  m="1731332">1</span> <span m="1733940">if</span> <span m="1734390">i</span>
  <span m="1734720">is</span> <span m="1735180">element</span> <span
  m="1735770">of</span> <span m="1735840">V</span> <span m="1735980">dash</span>
  <span m="1737150">0,</span> <span m="1739424">if</span> <span
  m="1739900">i</span> <span m="1740160">is</span> <span m="1740790">not</span>
  <span m="1741020">an</span> <span m="1741090">element</span> <span
  m="1741480">of</span> <span m="1741600">V</span> <span
  m="1742053">dash.</span> <span m="1742960">Make sense?</span> <span
  m="1743110">So</span> <span m="1743210">you would</span> <span
  m="1743400">set</span> <span m="1743630">everything</span> <span
  m="1743930">in</span> <span m="1744030">your</span> <span
  m="1744180">clique</span> <span m="1744420">to</span> <span
  m="1744510">be</span> <span m="1744630">1,</span> <span
  m="1744890">everything</span> <span m="1745190">outside</span> <span
  m="1745530">to be</span> <span m="1745935">0.</span> <span
  m="1746340">And</span> <span m="1746560">let</span> <span m="1746895">z</span>
  <span m="1747230">equal to</span> <span m="1747610">1.</span></p><p><span
  m="1748740">So you're</span> <span m="1748920">starting</span> <span
  m="1749210">with</span> <span m="1749300">the</span> <span
  m="1749470">assumption</span> <span m="1749810">that--</span> <span
  m="1750330">so</span> <span m="1750440">you're showing</span> <span
  m="1750940">one</span> <span m="1751080">direction.</span> <span
  m="1751610">You're showing</span> <span m="1752010">that</span> <span
  m="1752420">given</span> <span m="1752720">that</span> <span
  m="1752910">there's</span> <span m="1753120">a</span> <span
  m="1753190">clique</span> <span m="1753400">of</span> <span
  m="1753480">size</span> <span m="1753810">greater than</span> <span
  m="1754000">equal to</span> <span m="1754300">k.</span> <span
  m="1755270">And</span> <span m="1755510">now</span> <span
  m="1755660">you're</span> <span m="1755760">are</span> <span
  m="1755810">going</span> <span m="1755950">to</span> <span
  m="1756000">construct</span> <span m="1756910">a</span> <span
  m="1757010">Max-2-SAT</span> <span m="1757690">instance</span> <span
  m="1758600">which</span> <span m="1758720">has</span> <span
  m="1759480">the</span> <span m="1759730">satisfied</span> <span
  m="1760160">number</span> <span m="1760410">of</span> <span
  m="1760480">clauses</span> <span m="1760830">greater than</span> <span
  m="1761226">equal to k.</span> <span m="1762020">And</span> <span
  m="1762150">then</span> <span m="1762270">we'd show the</span> <span
  m="1762610">other</span> <span m="1762720">direction.</span></p><p><span
  m="1765130">So</span> <span m="1765270">now</span> <span
  m="1765370">let's</span> <span m="1765560">look</span> <span
  m="1765690">at</span> <span m="1765760">how</span> <span
  m="1765890">many</span> <span m="1766350">clauses</span> <span
  m="1766400">we</span> <span m="1766440">have</span> <span m="1766590">to
  be</span> <span m="1767080">satisfied.</span> <span m="1772510">So</span>
  <span m="1772630">the</span> <span m="1772700">first</span> <span
  m="1772995">type of</span> <span m="1773290">clause</span> <span
  m="1773510">was</span> <span m="1775000">0</span> <span m="1775260">of</span>
  <span m="1775360">xi</span> <span m="1780390">or</span> <span
  m="1781290">0</span> <span m="1781540">of</span> <span m="1781630">xj.</span>
  <span m="1784690">So</span> <span m="1785340">how</span> <span
  m="1785480">many</span> <span m="1785680">of</span> <span
  m="1785740">these</span> <span m="1785920">clauses are</span> <span
  m="1786240">being</span> <span m="1786380">satisfied?</span></p><p><span
  m="1787810">So</span> <span m="1788040">first</span> <span
  m="1788320">case,</span> <span m="1789030">i and</span> <span
  m="1789200">G</span> <span m="1789520">are</span> <span
  m="1789600">both</span> <span m="1789820">outside</span> <span
  m="1790160">V</span> <span m="1790260">dash.</span> <span
  m="1791330">Is</span> <span m="1791450">the</span> <span
  m="1791530">clause</span> <span m="1791920">satisfied</span> <span
  m="1792050">in</span> <span m="1792110">that</span> <span
  m="1792290">case?</span> <span m="1793380">Yes,</span> <span
  m="1793620">because</span> <span m="1794270">by</span> <span
  m="1794470">definition,</span> <span m="1794940">if</span> <span
  m="1795040">they're</span> <span m="1795170">outside</span> <span
  m="1795460">V</span> <span m="1795560">dash,</span> <span
  m="1795760">they're</span> <span m="1795870">both</span> <span
  m="1796080">0,</span> <span m="1796660">so</span> <span
  m="1796770">their</span> <span m="1796850">naughts</span> <span
  m="1797100">are</span> <span m="1797170">both</span> <span
  m="1797360">1,</span> <span m="1797670">so they're</span> <span
  m="1797890">1.</span> <span m="1798810">So</span> <span m="1798910">if
  the</span> <span m="1799370">i and j</span> <span m="1799830">are
  outside</span> <span m="1799970">V dash,</span> <span m="1800110">you're
  good.</span></p><p><span m="1801090">So</span> <span m="1801250">what</span>
  <span m="1801360">about</span> <span m="1801550">the</span> <span
  m="1801620">case</span> <span m="1801860">when</span> <span
  m="1802280">one</span> <span m="1802490">of</span> <span m="1802580">them
  is</span> <span m="1802770">inside</span> <span m="1803100">V</span> <span
  m="1803190">dash?</span> <span m="1804531">Is</span> <span m="1804980">the
  clause</span> <span m="1805160">satisfied.</span> <span
  m="1809405">Yeah,</span> <span m="1809720">because</span> <span
  m="1810640">one</span> <span m="1812000">of</span> <span
  m="1812080">them</span> <span m="1812190">is</span> <span
  m="1812280">0,</span> <span m="1812960">which</span> <span
  m="1813140">makes</span> <span m="1813360">the</span> <span
  m="1813450">0</span> <span m="1813760">1,</span> <span m="1813980">and</span>
  <span m="1814190">the</span> <span m="1814250">whole</span> <span
  m="1814400">thing</span> <span m="1814570">is.</span> <span
  m="1814670">It's</span> <span m="1814850">an</span> <span m="1814940">[? arc,
  ?]</span> <span m="1815310">so</span> <span m="1815510">it's</span> <span
  m="1815820">satisfied.</span></p><p><span m="1816440">Let's</span> <span
  m="1816550">say</span> <span m="1816840">both of them</span> <span
  m="1816920">are inside</span> <span m="1817080">V</span> <span
  m="1817450">dash.</span> <span m="1819100">Let's</span> <span m="1819180">say
  both</span> <span m="1819460">i</span> <span m="1819630">and j</span> <span
  m="1820040">are inside</span> <span m="1820325">V dash.</span> <span
  m="1821040">Then</span> <span m="1821210">this</span> <span
  m="1821330">clause</span> <span m="1821590">just</span> <span
  m="1821680">doesn't</span> <span m="1821880">exist</span> <span
  m="1822350">because</span> <span m="1823510">of</span> <span
  m="1823650">the</span> <span m="1823720">condition</span> <span
  m="1824130">that</span> <span m="1824400">i, j</span> <span
  m="1824790">had</span> <span m="1824870">0</span> <span
  m="1825100">elements</span> <span m="1825590">of V.</span> <span
  m="1826100">Because</span> <span m="1826190">if it's</span> <span
  m="1826310">inside</span> <span m="1826430">the</span> <span
  m="1826670">clique,</span> <span m="1827330">then</span> <span
  m="1827630">that</span> <span m="1827980">edge</span> <span
  m="1828200">obviously</span> <span m="1828480">exists,</span> <span
  m="1829360">and</span> <span m="1829480">therefore</span> <span
  m="1829700">this</span> <span m="1829870">clause</span> <span
  m="1830110">is</span> <span m="1830220">not</span> <span m="1830910">in</span>
  <span m="1831050">the</span> <span m="1831130">set</span> <span
  m="1831280">of</span> <span m="1831350">clauses we're</span> <span
  m="1831760">using.</span></p><p><span m="1832790">So</span> <span
  m="1833190">essentially,</span> <span m="1833690">every</span> <span
  m="1834040">clause</span> <span m="1834320">of</span> <span
  m="1834410">this</span> <span m="1834580">form will be</span> <span
  m="1835000">satisfied.</span> <span m="1836420">And</span> <span
  m="1836540">how</span> <span m="1836660">many</span> <span
  m="1836820">clauses</span> <span m="1837110">of</span> <span
  m="1837190">this</span> <span m="1837280">form are</span> <span
  m="1837610">there?</span> <span m="1837850">The</span> <span
  m="1838150">number of</span> <span m="1838400">clauses</span> <span
  m="1838650">of</span> <span m="1838740">this</span> <span
  m="1838900">form</span> <span m="1839140">is</span> <span
  m="1839240">just</span> <span m="1839660">E</span> <span
  m="1839810">bar,</span> <span m="1840460">where</span> <span
  m="1840610">E</span> <span m="1840900">is the</span> <span
  m="1841090">complementary</span> <span m="1841870">edge</span> <span
  m="1842310">set</span> <span m="1842740">of</span> <span
  m="1842860">that</span> <span m="1843300">graph.</span> <span
  m="1844650">That's</span> <span m="1844830">E bar.</span> <span
  m="1846050">Does that</span> <span m="1846120">make sense?</span></p><p><span
  m="1850500">Next</span> <span m="1851340">clause</span> <span
  m="1851820">is</span> <span m="1852820">xi</span> <span m="1854050">or</span>
  <span m="1854832">z.</span> <span m="1856100">So</span> <span
  m="1856320">since</span> <span m="1856530">we</span> <span
  m="1856870">have</span> <span m="1857230">considered</span> <span
  m="1857610">z</span> <span m="1857790">to</span> <span m="1857870">be</span>
  <span m="1857990">1,</span> <span m="1859700">this</span> <span
  m="1859940">clause is</span> <span m="1860160">always</span> <span
  m="1860360">satisfied.</span> <span m="1861220">So</span> <span
  m="1861310">this</span> <span m="1861530">just</span> <span
  m="1861730">gives</span> <span m="1861950">us</span> <span m="1862490">mod
  of</span> <span m="1862850">V</span> <span m="1864330">because</span> <span
  m="1865020">this</span> <span m="1865290">is</span> <span
  m="1865440">for</span> <span m="1865560">every</span> <span
  m="1865860">i--</span> <span m="1866540">I</span> <span
  m="1867020">should</span> <span m="1867180">mention</span> <span
  m="1867450">that.</span> <span m="1868630">For</span> <span
  m="1869050">i,</span> <span m="1869570">this is</span> <span m="1870050">also
  for all</span> <span m="1870530">i.</span> <span m="1871490">So</span> <span
  m="1871620">for</span> <span m="1871760">every</span> <span
  m="1872050">i,</span> <span m="1872200">so</span> <span m="1872310">they
  all</span> <span m="1872510">have a</span> <span m="1872700">number</span>
  <span m="1872970">of</span> <span m="1873800">xi's</span> <span
  m="1874240">are</span> <span m="1874450">V,</span> <span m="1874660">so
  that's</span> <span m="1875043">it.</span></p><p><span m="1875810">So</span>
  <span m="1876030">the</span> <span m="1876120">third type</span> <span
  m="1876420">of</span> <span m="1876570">clause</span> <span
  m="1878900">is</span> <span m="1879240">xi</span> <span m="1879870">or</span>
  <span m="1881290">0</span> <span m="1881560">of</span> <span
  m="1881600">v.</span> <span m="1882640">So</span> <span m="1882760">0</span>
  <span m="1883030">of</span> <span m="1883070">z,</span> <span
  m="1883400">since</span> <span m="1883530">z</span> <span
  m="1883690">is</span> <span m="1883800">1,</span> <span m="1884040">0</span>
  <span m="1884140">of</span> <span m="1884200">x is</span> <span
  m="1884360">0.</span> <span m="1885060">So</span> <span m="1885160">the</span>
  <span m="1885220">only</span> <span m="1885440">cases</span> <span
  m="1885830">where</span> <span m="1886330">this</span> <span
  m="1886520">clause is</span> <span m="1886850">true</span> <span
  m="1887090">is</span> <span m="1887190">where?</span> <span
  m="1887820">Is</span> <span m="1888170">when xi is</span> <span
  m="1888630">1.</span> <span m="1889720">And</span> <span m="1889860">xi
  is</span> <span m="1890290">one</span> <span m="1890700">only</span> <span
  m="1890950">inside</span> <span m="1891290">V dash,</span> <span
  m="1892180">so</span> <span m="1892320">the</span> <span
  m="1892370">number</span> <span m="1892630">of clauses</span> <span
  m="1892910">satisfied</span> <span m="1893320">here</span> <span
  m="1893960">is</span> <span m="1895030">mod of</span> <span m="1895708">V
  dash.</span></p><p><span m="1897340">And</span> <span m="1897550">mod
  of</span> <span m="1897770">V</span> <span m="1897900">dash is what?</span>
  <span m="1898110">It's</span> <span m="1898480">just</span> <span
  m="1898650">k.</span> <span m="1900315">You</span> <span
  m="1900600">see</span> <span m="1900730">this?</span> <span
  m="1906780">All</span> <span m="1906970">three clauses</span> <span
  m="1907340">make</span> <span m="1907500">sense?</span> <span m="1909110">Can
  you</span> <span m="1909200">see why</span> <span m="1909630">the</span> <span
  m="1909890">first</span> <span m="1910150">one</span> <span
  m="1910390">is</span> <span m="1911290">it's</span> <span
  m="1911350">the</span> <span m="1911430">size</span> <span
  m="1911710">of</span> <span m="1911860">V</span> <span m="1911970">bar?</span>
  <span m="1912770">Because</span> <span m="1912950">all</span> <span
  m="1913100">the</span> <span m="1913180">clauses are</span> <span
  m="1913480">satisfied.</span></p><p><span m="1916180">The</span> <span
  m="1916270">second</span> <span m="1916560">one,</span> <span
  m="1918260">also</span> <span m="1918540">all</span> <span
  m="1918650">the</span> <span m="1918740">clauses</span> <span
  m="1918950">are</span> <span m="1919000">satisfied</span> <span
  m="1919570">because</span> <span m="1919900">z is</span> <span
  m="1920130">1.</span> <span m="1921400">Every</span> <span
  m="1921980">clause</span> <span m="1922250">is</span> <span
  m="1922580">just</span> <span m="1922870">the</span> <span
  m="1923130">number</span> <span m="1923370">of</span> <span
  m="1923410">vertices.</span> <span m="1924670">And</span> <span
  m="1924760">the</span> <span m="1924860">last</span> <span
  m="1925160">one,</span> <span m="1925330">it's</span> <span
  m="1925480">only</span> <span m="1925720">satisfied</span> <span
  m="1926260">for</span> <span m="1926340">the</span> <span
  m="1926420">cases</span> <span m="1926820">where</span> <span m="1927260">xi
  is</span> <span m="1927750">1.</span> <span m="1928540">And</span> <span
  m="1928680">xi is</span> <span m="1929120">1</span> <span
  m="1929300">only</span> <span m="1929530">inside</span> <span
  m="1929720">the</span> <span m="1929790">clique,</span> <span
  m="1930420">so</span> <span m="1930430">that</span> <span
  m="1930610">gives</span> <span m="1930800">you</span> <span
  m="1931250">the</span> <span m="1931560">k</span> <span
  m="1931690">things</span> <span m="1931930">in</span> <span
  m="1932030">the</span> <span m="1932140">clique.</span></p><p><span
  m="1933150">So</span> <span m="1934020">now</span> <span m="1934280">we</span>
  <span m="1934390">can</span> <span m="1934720">finish</span> <span
  m="1935010">formulating</span> <span m="1935630">our</span> <span
  m="1935790">transformation.</span> <span m="1937020">So our</span> <span
  m="1937080">transformation</span> <span m="1937600">was</span> <span
  m="1938360">you</span> <span m="1938560">set--</span> <span
  m="1943390">where</span> <span m="1943740">was the</span> <span
  m="1943940">transformation?</span> <span m="1944360">Yes.</span></p><p><span
  m="1944780">So</span> <span m="1944930">these</span> <span
  m="1945150">are</span> <span m="1945250">our</span> <span
  m="1945400">clauses</span> <span m="1946700">and</span> <span
  m="1946880">now</span> <span m="1947510">we're</span> <span m="1947700">going
  to set</span> <span m="1947890">the</span> <span m="1947980">k.</span> <span
  m="1948450">So</span> <span m="1948760">the</span> <span
  m="1949110">Max-2-SAT</span> <span m="1949680">was</span> <span
  m="1951610">with</span> <span m="1951780">the</span> <span
  m="1951940">condition of</span> <span m="1952070">k.</span> <span
  m="1952480">So</span> <span m="1953070">here</span> <span
  m="1953230">you'll</span> <span m="1953460">set</span> <span
  m="1953650">it</span> <span m="1953780">to</span> <span m="1953860">be</span>
  <span m="1956820">mod of</span> <span m="1957000">V</span> <span
  m="1957160">bar</span> <span m="1958300">plus</span> <span
  m="1958780">mod</span> <span m="1959270">of</span> <span m="1959760">V</span>
  <span m="1960175">plus</span> <span m="1960590">k.</span> <span
  m="1965500">So</span> <span m="1965730">does that</span> <span
  m="1965890">make sense?</span></p><p><span m="1966090">So</span> <span
  m="1966290">basically,</span> <span m="1968640">our</span> <span
  m="1969380">Max-2-SAT</span> <span m="1970030">problem--</span> <span
  m="1970680">so</span> <span m="1970700">the</span> <span
  m="1970780">reduction</span> <span m="1971170">to the</span> <span
  m="1971250">Max-2-SAT</span> <span m="1971710">problem--</span> <span
  m="1972390">so</span> <span m="1972500">we</span> <span
  m="1972580">specified</span> <span m="1972980">the</span> <span
  m="1973120">clauses.</span> <span m="1974060">We</span> <span
  m="1974160">specified</span> <span m="1974870">the</span> <span
  m="1975210">literals.</span> <span m="1975780">Literals</span> <span
  m="1976200">were</span> <span m="1976340">xi</span> <span
  m="1976760">for</span> <span m="1976850">all</span> <span
  m="1977040">iV</span> <span m="1977760">and</span> <span
  m="1977900">the</span> <span m="1978040">dummy</span> <span
  m="1978140">z.</span> <span m="1979060">We</span> <span
  m="1979160">satisfied</span> <span m="1979510">the</span> <span
  m="1979580">clauses</span> <span m="1979845">and</span> <span
  m="1980110">we</span> <span m="1980390">specified</span> <span
  m="1980880">the</span> <span m="1981620">threshold</span> <span m="1982100">we
  are</span> <span m="1982210">trying</span> <span m="1982430">to</span> <span
  m="1982490">achieve.</span> <span m="1984420">So</span> <span
  m="1984540">those</span> <span m="1984770">three</span> <span
  m="1984980">things</span> <span m="1985240">completely</span> <span
  m="1985570">specify</span> <span m="1986000">the</span> <span
  m="1986510">Max-2-SAT</span> <span m="1987050">problem.</span></p><p><span
  m="1993056">OK,</span> <span m="1993400">proceeding.</span> <span
  m="1996120">So</span> <span m="1996500">we</span> <span
  m="1996610">just</span> <span m="1996740">showed</span> <span
  m="1996970">one</span> <span m="1997140">direction.</span> <span
  m="1997480">We</span> <span m="1997560">showed</span> <span
  m="1997830">that</span> <span m="1998290">if</span> <span
  m="1998440">there's</span> <span m="1998630">a</span> <span
  m="1998710">clique</span> <span m="1998990">of</span> <span
  m="1999050">size</span> <span m="1999740">greater</span> <span
  m="1999890">than</span> <span m="2000010">or</span> <span
  m="2000110">equal</span> <span m="2000170">to</span> <span
  m="2000250">k,</span> <span m="2000550">we</span> <span m="2000990">reduce
  this</span> <span m="2001480">to</span> <span m="2001590">a</span> <span
  m="2002080">size of</span> <span m="2002320">exactly</span> <span
  m="2002710">k.</span> <span m="2004040">Then</span> <span
  m="2004180">we</span> <span m="2004380">did</span> <span
  m="2004610">this</span> <span m="2004740">assignment</span> <span
  m="2005340">and</span> <span m="2005570">we</span> <span
  m="2005690">showed</span> <span m="2005910">that</span> <span
  m="2006440">the</span> <span m="2006660">total</span> <span
  m="2006870">number</span> <span m="2007120">of</span> <span
  m="2007240">clauses</span> <span m="2007580">being</span> <span
  m="2007750">satisfied</span> <span m="2008600">is</span> <span m="2008810">mod
  of</span> <span m="2009100">V</span> <span m="2009230">bar</span> <span
  m="2009490">plus</span> <span m="2009640">mod</span> <span
  m="2009860">of</span> <span m="2009950">V</span> <span m="2010140">plus</span>
  <span m="2010360">k.</span></p><p><span m="2011460">And</span> <span
  m="2012180">that</span> <span m="2012330">is</span> <span
  m="2012450">the</span> <span m="2012640">first</span> <span
  m="2013020">direction.</span> <span m="2013820">So now</span> <span
  m="2014240">we're showing</span> <span m="2014470">that--</span> <span
  m="2015020">so</span> <span m="2015300">if</span> <span m="2015420">you</span>
  <span m="2015500">have</span> <span m="2015590">a</span> <span
  m="2015640">solution</span> <span m="2016000">to</span> <span
  m="2016630">clique,</span> <span m="2017070">we</span> <span m="2017170">have
  a</span> <span m="2017280">solution</span> <span m="2017730">to</span> <span
  m="2017960">k-SAT,</span> <span m="2018220">Max-k-SAT.</span> <span
  m="2019060">So</span> <span m="2019170">now</span> <span m="2019270">we</span>
  <span m="2019330">do</span> <span m="2019390">the</span> <span
  m="2019490">other</span> <span m="2019680">direction.</span> <span
  m="2020430">So</span> <span m="2020570">let's</span> <span
  m="2020710">say</span> <span m="2021290">we</span> <span
  m="2021390">have</span> <span m="2021610">a</span> <span
  m="2021930">solution</span> <span m="2022694">to</span> <span
  m="2023460">Max-k-SAT.</span> <span m="2025336">Let me</span> <span
  m="2025790">get this</span> <span m="2025940">out of the
  way.</span></p><p><span m="2031940">Let's</span> <span m="2032430">do</span>
  <span m="2032550">this.</span> <span m="2041050">So</span> <span
  m="2041270">let's</span> <span m="2041470">say--</span> <span
  m="2066044">so</span> <span m="2066580">this</span> <span
  m="2066780">part</span> <span m="2066949">is</span> <span m="2066989">a
  little</span> <span m="2067080">more</span> <span m="2067310">tricky.</span>
  <span m="2067900">So</span> <span m="2068020">we</span> <span
  m="2068120">start</span> <span m="2068370">with</span> <span
  m="2068710">Max-k-SAT</span> <span m="2069360">has a</span> <span
  m="2069520">number of</span> <span m="2069770">satisfied</span> <span
  m="2070210">clauses</span> <span m="2070639">which</span> <span
  m="2070710">is</span> <span m="2070780">greater</span> <span
  m="2070929">than</span> <span m="2071050">or</span> <span
  m="2071150">equal</span> <span m="2071270">to</span> <span
  m="2072010">mod</span> <span m="2072270">of</span> <span m="2072380">V
  bar</span> <span m="2072570">plus</span> <span m="2072770">V plus
  k.</span></p><p><span m="2073380">So</span> <span m="2073600">we</span> <span
  m="2073920">know</span> <span m="2074130">that</span> <span
  m="2075070">max-SAT</span> <span m="2075320">that</span> <span
  m="2075489">accepts.</span> <span m="2076719">So</span> <span
  m="2076949">know</span> <span m="2077120">that</span> <span
  m="2077409">so</span> <span m="2078850">we</span> <span
  m="2078980">define.</span> <span m="2080291">We define</span> <span
  m="2080730">a</span> <span m="2080790">V</span> <span m="2080940">dash.</span>
  <span m="2084750">This</span> <span m="2084909">V</span> <span
  m="2085040">dash is</span> <span m="2085239">in</span> <span
  m="2085409">the</span> <span m="2085489">graph</span> <span
  m="2085920">for</span> <span m="2086670">clique</span> <span
  m="2087620">as</span> <span m="2088750">the</span> <span
  m="2088830">set</span> <span m="2089000">of</span> <span
  m="2089199">vertices</span> <span m="2089500">i,</span> <span
  m="2091020">such</span> <span m="2091350">that</span> <span
  m="2093320">x</span> <span m="2093540">of</span> <span m="2093610">i</span>
  <span m="2094440">is</span> <span m="2094530">equal</span> <span
  m="2094790">to</span> <span m="2094909">1.</span></p><p><span
  m="2096675">So</span> <span m="2097000">if</span> <span m="2097170">our</span>
  <span m="2097250">Max-k-SAT</span> <span m="2097880">has</span> <span
  m="2098140">that many</span> <span m="2098330">things,</span> <span
  m="2099130">then</span> <span m="2099410">there's</span> <span
  m="2099720">some</span> <span m="2100090">assignment</span> <span
  m="2100580">to</span> <span m="2100680">xi</span> <span
  m="2101270">which</span> <span m="2101410">satisfies</span> <span
  m="2101900">that.</span> <span m="2102160">And we</span> <span
  m="2102240">take</span> <span m="2102430">that</span> <span
  m="2102550">assignment.</span> <span m="2103450">And</span> <span
  m="2103570">for</span> <span m="2103690">every</span> <span
  m="2103970">value</span> <span m="2104220">that</span> <span
  m="2104340">is</span> <span m="2104440">1,</span> <span m="2105120">we</span>
  <span m="2105330">put</span> <span m="2105530">that in a--</span> <span
  m="2106500">it's</span> <span m="2106810">not</span> <span
  m="2106970">a</span> <span m="2107030">clique</span> <span
  m="2107240">yet,</span> <span m="2107830">but</span> <span
  m="2107860">it's,</span> <span m="2108390">well,</span> <span
  m="2108600">it's</span> <span m="2109330">a</span> <span
  m="2109700">clique</span> <span m="2109920">under</span> <span
  m="2110150">construction.</span> <span m="2111280">So</span> <span
  m="2111620">we</span> <span m="2111890">make this</span> <span
  m="2112050">clique</span> <span m="2112210">under</span> <span
  m="2112320">construction</span> <span m="2112650">and we</span> <span
  m="2112980">assign</span> <span m="2113260">it</span> <span
  m="2113320">values</span> <span m="2114280">of</span> <span
  m="2114400">all</span> <span m="2114620">the</span> <span
  m="2114680">vertices</span> <span m="2115160">which</span> <span
  m="2115190">are</span> <span m="2115250">currently</span> <span
  m="2115470">labeled</span> <span m="2115610">by</span> <span
  m="2115980">1.</span></p><p><span m="2117010">But we</span> <span
  m="2117130">don't</span> <span m="2117280">know</span> <span m="2117370">that
  it's</span> <span m="2117540">a</span> <span m="2117610">clique,</span> <span
  m="2117810">right?</span> <span m="2118140">It</span> <span
  m="2118290">could</span> <span m="2118430">not</span> <span
  m="2118600">be</span> <span m="2118700">a</span> <span
  m="2118740">clique.</span> <span m="2118960">It</span> <span
  m="2119020">could</span> <span m="2119170">be</span> <span
  m="2119260">something</span> <span m="2119520">like,</span> <span
  m="2119680">let's</span> <span m="2119850">say,</span> <span
  m="2120440">so</span> <span m="2120600">this</span> <span
  m="2120790">is</span> <span m="2120910">the</span> <span
  m="2120990">current</span> <span m="2121230">V</span> <span
  m="2121330">dash.</span> <span m="2122610">So</span> <span
  m="2123320">V</span> <span m="2123500">dash</span> <span
  m="2123680">could</span> <span m="2123750">be</span> <span
  m="2123850">something</span> <span m="2124130">like</span> <span
  m="2125420">you</span> <span m="2125520">have</span> <span
  m="2125690">all</span> <span m="2125840">these</span> <span
  m="2126030">vertices</span> <span m="2127790">and</span> <span
  m="2127990">let's</span> <span m="2128180">say</span> <span
  m="2128320">some</span> <span m="2128560">of</span> <span
  m="2128610">them</span> <span m="2128720">are</span> <span
  m="2129020">connected.</span> <span m="2129940">But</span> <span
  m="2130080">then</span> <span m="2130220">you</span> <span
  m="2130300">have</span> <span m="2130440">this</span> <span
  m="2130760">dangling.</span> <span m="2131700">So</span> <span
  m="2131820">this</span> <span m="2131960">is</span> <span
  m="2132030">not</span> <span m="2132190">connected.</span> <span
  m="2132270">This is</span> <span m="2132520">not</span> <span
  m="2132910">connected.</span></p><p><span m="2133210">So</span> <span
  m="2133350">it's not</span> <span m="2133570">a clique.</span> <span
  m="2134930">So</span> <span m="2135470">let's</span> <span
  m="2135650">say</span> <span m="2136590">this</span> <span
  m="2136740">is</span> <span m="2137020">vertex</span> <span
  m="2137210">i</span> <span m="2138040">and</span> <span m="2138160">this
  is</span> <span m="2138290">vertex</span> <span m="2138640">j,</span> <span
  m="2139420">and</span> <span m="2139520">this</span> <span
  m="2139610">whole</span> <span m="2139740">thing</span> <span
  m="2139840">is</span> <span m="2139940">V</span> <span
  m="2140070">dash.</span> <span m="2141700">And</span> <span
  m="2141840">let's</span> <span m="2142010">say</span> <span
  m="2142140">somehow</span> <span m="2142570">you</span> <span
  m="2142660">have</span> <span m="2142840">this</span> <span
  m="2143110">anomaly.</span> <span m="2143850">You</span> <span
  m="2143950">have</span> <span m="2144205">that</span> <span
  m="2144460">this</span> <span m="2144920">guy</span> <span
  m="2145530">is</span> <span m="2145810">not</span> <span
  m="2146120">connected</span> <span m="2146410">to all</span> <span
  m="2146790">the vertices.</span> <span m="2147590">So</span> <span
  m="2147690">let's</span> <span m="2147750">take</span> <span
  m="2147890">one</span> <span m="2148060">such</span> <span
  m="2148290">pair.</span></p><p><span m="2149740">And</span> <span
  m="2150600">let's</span> <span m="2150790">just</span> <span
  m="2150900">say</span> <span m="2151100">we</span> <span
  m="2151180">remove</span> <span m="2152350">xi.</span> <span
  m="2154666">So</span> <span m="2155040">we</span> <span
  m="2155180">just</span> <span m="2155310">take</span> <span
  m="2155430">the</span> <span m="2155490">xi</span> <span
  m="2155690">and</span> <span m="2155880">remove it</span> <span
  m="2156150">from</span> <span m="2156310">V dash.</span> <span
  m="2156920">What</span> <span m="2157130">that</span> <span
  m="2157270">equates</span> <span m="2157600">to</span> <span
  m="2157720">in</span> <span m="2157800">the</span> <span
  m="2157860">Max-k-SAT</span> <span m="2158830">is</span> <span
  m="2159400">setting</span> <span m="2159820">xi</span> <span
  m="2160010">to</span> <span m="2160250">0.</span> <span m="2161590">So</span>
  <span m="2161820">we</span> <span m="2161970">take</span> <span
  m="2162310">the</span> <span m="2162590">original</span> <span
  m="2163020">satisfying</span> <span m="2163460">assignment</span> <span
  m="2164810">and</span> <span m="2165060">change</span> <span
  m="2165780">the</span> <span m="2166310">value</span> <span
  m="2166600">of</span> <span m="2166680">xi.</span> <span m="2167660">So</span>
  <span m="2169690">let's</span> <span m="2169840">see</span> <span
  m="2169930">what</span> <span m="2170060">that</span> <span
  m="2170240">does.</span></p><p><span m="2172500">So</span> <span
  m="2173070">we</span> <span m="2173280">take</span> <span
  m="2174390">and</span> <span m="2174660">set</span> <span
  m="2176090">xi</span> <span m="2178330">equal to</span> <span
  m="2178620">0.</span> <span m="2179600">And</span> <span m="2180090">xi</span>
  <span m="2180460">was</span> <span m="2180550">originally</span> <span
  m="2180920">1.</span> <span m="2184420">Let's</span> <span
  m="2184530">actually</span> <span m="2184740">write it</span> <span
  m="2184810">down.</span> <span m="2185185">So</span> <span
  m="2185560">xi,</span> <span m="2189500">or</span> <span
  m="2189932">rather,</span> <span m="2190796">i, j</span> <span
  m="2193610">is</span> <span m="2193940">not</span> <span m="2194200">an</span>
  <span m="2194300">element</span> <span m="2194565">of</span> <span
  m="2194830">E,</span> <span m="2197570">but--</span> <span
  m="2206850">so</span> <span m="2207710">these</span> <span m="2208080">i,
  j</span> <span m="2208430">were</span> <span m="2208610">in the</span> <span
  m="2208970">supposed</span> <span m="2209420">to</span> <span
  m="2209480">be</span> <span m="2209610">clique,</span> <span
  m="2210340">but</span> <span m="2210580">the</span> <span m="2210950">i,
  j</span> <span m="2211520">is not</span> <span m="2211720">in the</span> <span
  m="2212200">edge set,</span> <span m="2212370">so it's</span> <span
  m="2212490">not</span> <span m="2212600">actually</span> <span m="2212950">a
  clique.</span></p><p><span m="2213620">So</span> <span m="2213870">the</span>
  <span m="2213990">way</span> <span m="2214130">we</span> <span
  m="2214240">resolve</span> <span m="2214590">that</span> <span
  m="2214750">is</span> <span m="2214910">just</span> <span
  m="2215430">we</span> <span m="2215530">do</span> <span
  m="2215670">this.</span> <span m="2215760">We</span> <span
  m="2215880">say,</span> <span m="2216030">OK.</span> <span
  m="2216240">Let's</span> <span m="2216710">just</span> <span
  m="2216830">forget</span> <span m="2217030">about</span> <span
  m="2217200">this</span> <span m="2217270">vertex.</span> <span
  m="2217610">Let's</span> <span m="2217760">say</span> <span m="2217880">it's
  just</span> <span m="2218050">not in the</span> <span
  m="2218300">clique.</span> <span m="2218960">So</span> <span
  m="2219110">we</span> <span m="2219200">set our</span> <span
  m="2219360">xi</span> <span m="2219630">to</span> <span
  m="2219800">0.</span></p><p><span m="2220080">And</span> <span
  m="2220550">what</span> <span m="2220740">does</span> <span m="2220850">that
  do?</span> <span m="2221250">Let's</span> <span m="2221410">look</span> <span
  m="2221560">at</span> <span m="2221630">how</span> <span
  m="2221770">that</span> <span m="2221900">affects</span> <span
  m="2222350">the</span> <span m="2222550">number</span> <span
  m="2222850">of</span> <span m="2222920">sat</span> <span
  m="2223140">clauses.</span> <span m="2224610">So</span> <span
  m="2226310">the</span> <span m="2226420">first</span> <span
  m="2226670">one</span> <span m="2226840">is</span> <span m="2228070">x</span>
  <span m="2228290">[? over ?]</span> <span m="2228470">z.</span> <span
  m="2230390">So</span> <span m="2230510">now</span> <span
  m="2231440">here</span> <span m="2231750">we</span> <span
  m="2232010">had</span> <span m="2232230">not</span> <span
  m="2232430">set</span> <span m="2232690">z</span> <span m="2232850">to</span>
  <span m="2232920">be</span> <span m="2233030">1.</span> <span
  m="2234410">This</span> <span m="2234530">is</span> <span
  m="2234620">something</span> <span m="2234980">in</span> <span
  m="2235110">thing.</span></p><p><span m="2236260">If</span> <span
  m="2236680">z</span> <span m="2236940">is</span> <span
  m="2237120">equal</span> <span m="2237340">to</span> <span
  m="2237380">0,</span> <span m="2237940">we</span> <span m="2238080">can</span>
  <span m="2238160">just</span> <span m="2238280">replace</span> <span
  m="2238590">z</span> <span m="2238700">by</span> <span m="2238955">0 of
  z.</span> <span m="2239210">So</span> <span m="2239650">the</span> <span
  m="2240030">clauses</span> <span m="2240400">are</span> <span
  m="2240490">symmetrical</span> <span m="2241450">with</span> <span
  m="2241630">respect</span> <span m="2242010">to</span> <span
  m="2242070">z.</span> <span m="2242600">So</span> <span
  m="2242780">it's</span> <span m="2243080">xi</span> <span m="2243480">[? over
  ?]</span> <span m="2243870">z or</span> <span m="2244130">xi 0 z.</span> <span
  m="2244670">So</span> <span m="2244800">it</span> <span
  m="2244840">doesn't</span> <span m="2245020">matter</span> <span
  m="2245230">which</span> <span m="2245390">one is</span> <span
  m="2245590">set</span> <span m="2245760">to</span> <span m="2245810">be</span>
  <span m="2245900">1</span> <span m="2246090">or 0.</span> <span
  m="2246180">If</span> <span m="2246270">one of them</span> <span
  m="2246590">is</span> <span m="2246710">1,</span> <span m="2246880">one of
  them</span> <span m="2247140">is</span> <span
  m="2247220">0.</span></p><p><span m="2247750">So</span> <span
  m="2247820">let's</span> <span m="2247970">just</span> <span
  m="2248080">say</span> <span m="2248190">that</span> <span m="2248450">z
  is</span> <span m="2248530">1</span> <span m="2248800">without  loss of</span>
  <span m="2248960">generality.</span> <span m="2251170">So</span> <span
  m="2251260">what</span> <span m="2251340">that</span> <span
  m="2251490">does</span> <span m="2251690">is--</span> <span
  m="2252650">so</span> <span m="2252790">initially,</span> <span
  m="2253230">this</span> <span m="2253420">clause</span> <span
  m="2253630">was</span> <span m="2253750">1</span> <span
  m="2254020">because</span> <span m="2254270">z is 1.</span> <span
  m="2255210">And</span> <span m="2255910">now</span> <span
  m="2256070">it</span> <span m="2256160">goes</span> <span
  m="2256360">to</span> <span m="2256450">1</span> <span m="2256710">and</span>
  <span m="2257090">nothing</span> <span m="2257370">changes.</span> <span
  m="2258130">OK,</span> <span m="2258760">sounds</span> <span
  m="2258960">good.</span></p><p><span m="2259600">What about</span> <span
  m="2259930">the</span> <span m="2260020">next</span> <span
  m="2260210">one?</span> <span m="2260790">So</span> <span
  m="2260880">now</span> <span m="2261060">we</span> <span
  m="2261150">have</span> <span m="2261270">xi</span> <span
  m="2262620">or</span> <span m="2265550">0</span> <span m="2265670">of</span>
  <span m="2265890">z.</span> <span m="2267640">So</span> <span
  m="2267840">0</span> <span m="2267960">of</span> <span m="2268130">z is</span>
  <span m="2268330">0</span> <span m="2269640">and</span> <span
  m="2269870">xi</span> <span m="2270190">just</span> <span
  m="2270380">went</span> <span m="2270560">from</span> <span
  m="2270700">being</span> <span m="2270960">1</span> <span
  m="2271220">to</span> <span m="2271310">being</span> <span
  m="2271520">0.</span></p><p><span m="2272370">So</span> <span
  m="2272780">what</span> <span m="2272870">happens</span> <span
  m="2273240">here</span> <span m="2273470">is</span> <span
  m="2273580">that</span> <span m="2274610">initially,</span> <span
  m="2274910">the</span> <span m="2275050">clause</span> <span
  m="2275370">value</span> <span m="2275630">was</span> <span
  m="2275770">1</span> <span m="2277050">and</span> <span m="2277230">now</span>
  <span m="2277380">it</span> <span m="2277490">goes</span> <span
  m="2277670">to</span> <span m="2277750">0.</span> <span m="2279490">So</span>
  <span m="2279600">that's</span> <span m="2279770">not</span> <span
  m="2279930">good</span> <span m="2280140">because</span> <span
  m="2281300">now</span> <span m="2281750">we</span> <span
  m="2281880">are</span> <span m="2282070">no longer</span> <span
  m="2282410">satisfying</span> <span m="2282870">Max-k-sat</span> <span
  m="2283220">clause</span> <span m="2283570">possibly</span> <span
  m="2284360">because</span> <span m="2284890">we had</span> <span
  m="2285040">some</span> <span m="2285200">number</span> <span
  m="2285400">of</span> <span m="2285460">satisfying</span> <span
  m="2285880">clauses,</span> <span m="2286820">which</span> <span
  m="2286910">was</span> <span m="2287000">above our</span> <span
  m="2287350">threshold.</span> <span m="2288770">But</span> <span
  m="2288970">now</span> <span m="2289150">we</span> <span
  m="2289270">lose</span> <span m="2289500">a</span> <span
  m="2289550">clause</span> <span m="2290220">and</span> <span
  m="2290330">we</span> <span m="2290410">could</span> <span
  m="2290530">be</span> <span m="2290630">going</span> <span
  m="2290830">below</span> <span m="2291030">the</span> <span
  m="2291130">threshold.</span></p><p><span m="2292190">But</span> <span
  m="2292450">then</span> <span m="2292590">we</span> <span
  m="2292700">look</span> <span m="2292830">at</span> <span
  m="2292900">the</span> <span m="2292970">third</span> <span
  m="2293190">clause.</span> <span m="2294390">And what</span> <span
  m="2294520">that</span> <span m="2294700">does</span> <span
  m="2294930">is--</span> <span m="2302260">so</span> <span
  m="2302350">let's</span> <span m="2302500">say</span> <span
  m="2302690">we</span> <span m="2302920">look</span> <span
  m="2303420">at</span> <span m="2303480">this</span> <span
  m="2303610">specific</span> <span m="2304080">clause,</span> <span
  m="2304790">the</span> <span m="2304880">one</span> <span
  m="2305100">which</span> <span m="2305250">said</span> <span
  m="2305480">that</span> <span m="2305590">xi and</span> <span
  m="2305945">xj.</span> <span m="2307450">Note</span> <span m="2307750">that
  this</span> <span m="2307840">clause</span> <span m="2308260">exists</span>
  <span m="2309080">because</span> <span m="2310540">xi, xj</span> <span
  m="2311310">is</span> <span m="2311460">not</span> <span m="2311730">an</span>
  <span m="2311830">edge you need.</span> <span m="2312950">And</span> <span
  m="2313070">therefore,</span> <span m="2313300">by</span> <span
  m="2313430">that condition,</span> <span m="2314010">this</span> <span
  m="2314180">clause</span> <span m="2314560">exists</span> <span
  m="2315250">in</span> <span m="2315390">the</span> <span
  m="2315530">set</span> <span m="2315670">of</span> <span
  m="2315760">clauses.</span></p><p><span m="2317020">So</span> <span
  m="2317140">what</span> <span m="2317270">was</span> <span
  m="2317340">the</span> <span m="2317370">value</span> <span
  m="2317630">of</span> <span m="2317690">this</span> <span
  m="2317840">clause</span> <span m="2318060">initially</span> <span
  m="2319330">before?</span> <span m="2320450">In</span> <span
  m="2320940">the</span> <span m="2321010">initial</span> <span
  m="2321310">assignment,</span> <span m="2321920">what was</span> <span
  m="2322120">the</span> <span m="2322220">value</span> <span
  m="2322470">of</span> <span m="2322540">this</span> <span
  m="2322710">clause?</span> <span m="2325650">Note</span> <span
  m="2326100">that</span> <span m="2326340">i</span> <span m="2326530">and
  j</span> <span m="2326900">are both</span> <span m="2327190">in</span> <span
  m="2327300">V</span> <span m="2327600">dash.</span> <span m="2328460">What
  was</span> <span m="2328900">the</span> <span m="2328980">value</span> <span
  m="2329210">of</span> <span m="2329490">this</span> <span
  m="2329660">clause</span> <span m="2329910">in</span> <span
  m="2330220">the</span> <span m="2330340">original</span> <span
  m="2331910">assignment?</span> <span m="2333890">Before</span> <span
  m="2334230">we</span> <span m="2334350">set</span> <span m="2334530">xi</span>
  <span m="2334720">to</span> <span m="2334910">0?</span> <span
  m="2336620">What</span> <span m="2336890">was the</span> <span
  m="2336940">value</span> <span m="2337160">of</span> <span
  m="2337230">xi</span> <span m="2337420">in</span> <span m="2337640">the</span>
  <span m="2337750">original</span> <span
  m="2338040">assignment?</span></p><p><span m="2341696">AUDIENCE:
  1.</span></p><p><span m="2343090">AMARTYA SHANKHA BISWAS: Yes,</span> <span
  m="2343340">why</span> <span m="2343490">is it</span> <span
  m="2343610">1?</span></p><p><span m="2344780">AUDIENCE: Because</span> <span
  m="2345260">xi was in</span> <span m="2345740">V dash.</span></p><p><span
  m="2346700">AMARTYA SHANKHA BISWAS: Yeah,</span> <span m="2347180">so</span>
  <span m="2347360">xi</span> <span m="2347420">was in</span> <span
  m="2347690">V</span> <span m="2347770">dash,</span> <span
  m="2348750">so</span> <span m="2349040">it's</span> <span
  m="2349400">1.</span> <span m="2349970">xj</span> <span m="2350630">was</span>
  <span m="2350740">also</span> <span m="2350990">in</span> <span m="2351120">V
  dash</span> <span m="2351290">because</span> <span m="2351540">that's</span>
  <span m="2351960">the</span> <span m="2352430">anomaly</span> <span
  m="2352560">we</span> <span m="2352680">saw</span> <span
  m="2352850">it,</span> <span m="2352920">right?</span> <span
  m="2353290">There</span> <span m="2353590">was</span> <span
  m="2353990">not</span> <span m="2354320">an</span> <span m="2354570">edge in
  the</span> <span m="2354690">clique.</span> <span m="2355350">So</span> <span
  m="2355480">this</span> <span m="2355640">was</span> <span
  m="2355760">originally</span> <span m="2356170">so</span> <span
  m="2356260">this</span> <span m="2356420">was</span> <span
  m="2356510">1</span> <span m="2356730">and</span> <span
  m="2356800">this</span> <span m="2356910">was</span> <span
  m="2357030">1.</span></p><p><span m="2357650">So</span> <span
  m="2357760">this</span> <span m="2357920">was</span> <span
  m="2358060">9</span> <span m="2358340">and</span> <span
  m="2358420">this</span> <span m="2358520">was</span> <span
  m="2358620">0.</span> <span m="2358990">And our</span> <span
  m="2359130">R0,</span> <span m="2359350">R0</span> <span
  m="2359800">is--</span> <span m="2360440">this</span> <span
  m="2360600">used</span> <span m="2360790">to</span> <span
  m="2360850">be</span> <span m="2360930">0.</span> <span m="2362390">So</span>
  <span m="2362500">what</span> <span m="2362630">happens</span> <span
  m="2362950">now</span> <span m="2363130">though?</span> <span m="2363850">Does
  it</span> <span m="2363990">change?</span> <span m="2366130">It changes</span>
  <span m="2366230">to</span> <span m="2366540">1</span> <span
  m="2366980">because</span> <span m="2367550">xi</span> <span
  m="2367910">goes</span> <span m="2368050">to</span> <span
  m="2368110">0.</span> <span m="2368540">Now this</span> <span
  m="2368800">thing</span> <span m="2368940">becomes</span> <span
  m="2369180">1</span> <span m="2370120">and</span> <span m="2370350">so
  it</span> <span m="2370420">changed</span> <span m="2370640">to</span> <span
  m="2370730">1.</span></p><p><span m="2371840">So</span> <span
  m="2372260">there will</span> <span m="2372600">be</span> <span
  m="2372800">other</span> <span m="2373000">clauses</span> <span
  m="2373390">with xi,</span> <span m="2373620">but</span> <span
  m="2373820">realize</span> <span m="2374180">that</span> <span
  m="2374330">0</span> <span m="2374600">of</span> <span m="2374640">xi--</span>
  <span m="2376000">so</span> <span m="2376170">if</span> <span m="2376420">xi
  is</span> <span m="2376730">changed to</span> <span m="2376810">0,</span>
  <span m="2377470">0</span> <span m="2377730">of xi</span> <span m="2377990">is
  changing</span> <span m="2378250">to</span> <span m="2378320">1.</span> <span
  m="2379040">So</span> <span m="2379150">whatever</span> <span
  m="2379450">happens</span> <span m="2379810">here,</span> <span
  m="2380530">it</span> <span m="2380630">will</span> <span
  m="2380730">only</span> <span m="2380990">increase</span> <span
  m="2381290">the</span> <span m="2381370">number</span> <span
  m="2381610">of</span> <span m="2381700">clauses</span> <span
  m="2381970">that</span> <span m="2382090">are</span> <span
  m="2382140">being</span> <span m="2382280">satisfied.</span> <span
  m="2383740">So</span> <span m="2383760">you</span> <span
  m="2383910">lose</span> <span m="2384190">only</span> <span
  m="2384450">1,</span> <span m="2385240">but</span> <span
  m="2385900">you</span> <span m="2386010">gain</span> <span
  m="2386250">at</span> <span m="2386350">least</span> <span
  m="2386630">1.</span> <span m="2387330">So</span> <span
  m="2388540">eventually,</span> <span m="2391040">it</span> <span
  m="2391190">does</span> <span m="2391320">not</span> <span
  m="2391550">change.</span></p><p><span m="2412480">It does</span> <span
  m="2412600">not</span> <span m="2412790">change the</span> <span
  m="2412860">number</span> <span m="2413130">of</span> <span
  m="2413180">satisfied</span> <span m="2413650">clauses,</span> <span
  m="2415060">so</span> <span m="2415370">that's</span> <span
  m="2415540">important.</span> <span m="2416330">So</span> <span
  m="2416480">what</span> <span m="2416610">we</span> <span
  m="2416720">did</span> <span m="2416900">is</span> <span m="2417030">we</span>
  <span m="2417180">started</span> <span m="2417590">with</span> <span
  m="2417760">some</span> <span m="2417970">satisfying</span> <span
  m="2418380">assignment</span> <span m="2419090">that</span> <span
  m="2419260">we</span> <span m="2419400">assumed</span> <span
  m="2419680">existed.</span> <span m="2420580">And</span> <span
  m="2420750">then</span> <span m="2420900">we</span> <span
  m="2421010">just</span> <span m="2421240">changed</span> <span
  m="2421520">the</span> <span m="2421580">variable</span> <span
  m="2422130">and</span> <span m="2422220">we</span> <span
  m="2422290">said</span> <span m="2422530">that</span> <span
  m="2423060">it's</span> <span m="2423270">still</span> <span
  m="2423560">at</span> <span m="2423680">least</span> <span
  m="2423910">as</span> <span m="2424070">many</span> <span
  m="2424510">clauses</span> <span m="2424800">being</span> <span
  m="2424940">satisfied.</span> <span m="2426440">So</span> <span
  m="2426540">we</span> <span m="2426640">did</span> <span
  m="2426680">that.</span> <span m="2427200">And</span> <span
  m="2427360">now</span> <span m="2427590">we</span> <span
  m="2427720">have</span> <span m="2427920">one</span> <span
  m="2428140">less</span> <span m="2428370">vertex</span> <span
  m="2428790">that</span> <span m="2429420">is</span> <span
  m="2429500">violating--</span> <span m="2438510">so</span> <span
  m="2438880">now</span> <span m="2439060">we</span> <span
  m="2439160">have</span> <span m="2439220">one</span> <span
  m="2439430">less</span> <span m="2439640">vertex</span> <span
  m="2440030">that</span> <span m="2440160">is</span> <span
  m="2440240">violating</span> <span m="2440700">the</span> <span
  m="2440800">clique</span> <span m="2440990">property.</span></p><p><span
  m="2442040">So</span> <span m="2442180">now</span> <span m="2442360">we</span>
  <span m="2442490">can</span> <span m="2443330">take</span> <span
  m="2443460">this</span> <span m="2443600">step--</span> <span
  m="2444060">this</span> <span m="2444140">setting</span> <span m="2444540">xi
  to</span> <span m="2444910">0.</span> <span m="2445580">We can</span> <span
  m="2445720">just</span> <span m="2445820">repeat</span> <span
  m="2446180">this.</span> <span m="2449690">So</span> <span
  m="2449810">how</span> <span m="2449920">long</span> <span
  m="2450100">do</span> <span m="2450330">we</span> <span m="2450450">repeat
  this?</span> <span m="2451790">So</span> <span m="2452090">we</span> <span
  m="2452220">repeat this</span> <span m="2452480">till</span> <span
  m="2453610">there</span> <span m="2453710">are</span> <span
  m="2453750">no</span> <span m="2453870">longer</span> <span
  m="2454120">any</span> <span m="2454380">violations.</span></p><p><span
  m="2455220">So</span> <span m="2455340">every</span> <span
  m="2455530">time</span> <span m="2455710">we</span> <span
  m="2455780">find</span> <span m="2455960">a violation--</span> <span
  m="2456420">so</span> <span m="2456640">once</span> <span
  m="2456820">we</span> <span m="2457120">delete</span> <span
  m="2457360">xi--</span> <span m="2457685">so</span> <span m="2458010">let's
  this</span> <span m="2458090">is</span> <span m="2458200">gone.</span> <span
  m="2459240">So</span> <span m="2459360">now</span> <span m="2459660">we</span>
  <span m="2459770">look</span> <span m="2459900">for</span> <span
  m="2459990">the</span> <span m="2460080">next</span> <span
  m="2460250">violation.</span> <span m="2460720">The</span> <span
  m="2460800">next</span> <span m="2460960">violation</span> <span
  m="2461410">is</span> <span m="2462350">this</span> <span
  m="2462540">edge.</span> <span m="2463010">So</span> <span
  m="2463150">there's</span> <span m="2463310">no</span> <span
  m="2463490">edge</span> <span m="2463650">there.</span> <span m="2463950">So
  we can</span> <span m="2464010">either take</span> <span
  m="2464450">this</span> <span m="2464650">vertex--</span> <span m="2465050">so
  let's</span> <span m="2465170">call this</span> <span m="2465350">k.</span>
  <span m="2466010">So we can</span> <span m="2466190">either</span> <span
  m="2466390">remove</span> <span m="2466660">xk</span> <span
  m="2466810">or</span> <span m="2467050">remove</span> <span
  m="2467320">xj.</span> <span m="2468095">So</span> <span m="2468520">we</span>
  <span m="2468700">remove</span> <span m="2468740">one</span> <span
  m="2468950">of</span> <span m="2469040">them.</span></p><p><span
  m="2469830">And</span> <span m="2470800">once</span> <span
  m="2470980">you</span> <span m="2471080">remove</span> <span
  m="2471300">that,</span> <span m="2471500">you will</span> <span
  m="2471790">end</span> <span m="2471940">up</span> <span
  m="2472240">with</span> <span m="2472450">the</span> <span
  m="2472590">3-clique.</span> <span m="2474020">So</span> <span
  m="2474470">what</span> <span m="2474590">happens</span> <span
  m="2474840">is</span> <span m="2474940">once</span> <span
  m="2475130">we</span> <span m="2475230">repeat</span> <span
  m="2475530">this,</span> <span m="2476890">until</span> <span
  m="2480900">V</span> <span m="2481180">dash</span> <span m="2482160">is</span>
  <span m="2485100">a</span> <span m="2485914">clique.</span> <span
  m="2489290">Does</span> <span m="2489640">that</span> <span
  m="2490030">make</span> <span m="2490190">sense</span> <span m="2490280">why
  you can</span> <span m="2490470">do</span> <span m="2490640">that?</span>
  <span m="2491510">So you</span> <span m="2492000">just</span> <span
  m="2492440">keep</span> <span m="2492800">deleting</span> <span
  m="2493150">vertices</span> <span m="2493660">until</span> <span
  m="2493770">this</span> <span m="2493870">is</span> <span m="2493960">a</span>
  <span m="2494020">clique.</span></p><p><span m="2494800">And</span> <span
  m="2495940">those</span> <span m="2496670">clauses</span> <span
  m="2497000">plus</span> <span m="2497190">clause</span> <span
  m="2497380">condition</span> <span m="2497670">is</span> <span
  m="2497810">still</span> <span m="2497990">satisfied.</span> <span
  m="2498510">You</span> <span m="2498640">will still</span> <span
  m="2498840">have</span> <span m="2499020">greater than</span> <span
  m="2499150">or equal to</span> <span m="2499530">that</span> <span
  m="2499670">many</span> <span m="2499820">clauses.</span> <span
  m="2501670">So</span> <span m="2501800">now</span> <span
  m="2502170">let's</span> <span m="2502430">look</span> <span
  m="2503010">at</span> <span m="2503230">what</span> <span
  m="2503390">we</span> <span m="2503880">have.</span> <span m="2504370">We
  have</span> <span m="2504540">V</span> <span m="2504680">dash,</span> <span
  m="2505950">which is a</span> <span m="2506390">clique</span> <span
  m="2510650">and</span> <span m="2512330">xi</span> <span m="2513720">is</span>
  <span m="2513850">equal</span> <span m="2514220">to--</span> <span
  m="2516210">so</span> <span m="2516660">once</span> <span m="2516950">you
  have</span> <span m="2517130">done</span> <span m="2517330">this</span> <span
  m="2517630">process</span> <span m="2518130">as</span> <span
  m="2518640">many</span> <span m="2518790">times</span> <span
  m="2519030">as</span> <span m="2519130">you</span> <span
  m="2519150">need,</span> <span m="2519970">when</span> <span
  m="2520170">is</span> <span m="2520260">xi</span> <span m="2520550">equal
  to</span> <span m="2520740">1?</span></p><p><span m="2522940">So</span> <span
  m="2523050">remember</span> <span m="2523270">that--</span> <span
  m="2523530">so</span> <span m="2523680">V</span> <span m="2523790">dash</span>
  <span m="2524100">is also</span> <span m="2524290">being</span> <span
  m="2524410">updated.</span> <span m="2524780">Every</span> <span
  m="2525050">time</span> <span m="2525260">you</span> <span
  m="2525360">set</span> <span m="2525580">xi to</span> <span
  m="2525940">0,</span> <span m="2526440">xi</span> <span m="2526780">is</span>
  <span m="2527270">being removed</span> <span m="2527380">form V dash.</span>
  <span m="2528060">So</span> <span m="2528170">that</span> <span
  m="2528390">property is</span> <span m="2528760">always</span> <span
  m="2528980">satisfied--</span> <span m="2529440">that</span> <span
  m="2529820">define</span> <span m="2530190">V</span> <span
  m="2530310">dash</span> <span m="2530520">equal</span> <span m="2530750">to
  xi</span> <span m="2531360">for</span> <span m="2531550">xi</span> <span
  m="2531780">equal to</span> <span m="2531980">1.</span> <span
  m="2532560">That</span> <span m="2532730">property's</span> <span
  m="2533390">always</span> <span m="2533820">invariant.</span></p><p><span
  m="2534930">That</span> <span m="2535080">means</span> <span
  m="2535300">that</span> <span m="2535700">even</span> <span
  m="2536290">after</span> <span m="2536540">reviewing</span> <span
  m="2536860">these</span> <span m="2537300">repetitions,</span> <span
  m="2538180">you</span> <span m="2538270">still</span> <span
  m="2538520">have</span> <span m="2538680">xi</span> <span
  m="2538850">equal</span> <span m="2539090">to</span> <span
  m="2539150">1,</span> <span m="2540060">if</span> <span m="2540210">and</span>
  <span m="2540300">only</span> <span m="2540600">if</span> <span
  m="2543920">i</span> <span m="2544180">is</span> <span m="2544460">E</span>
  <span m="2544740">V</span> <span m="2544870">dash</span> <span
  m="2547920">and</span> <span m="2548140">0</span> <span
  m="2548310">otherwise.</span> <span m="2550960">So</span> <span
  m="2551070">does</span> <span m="2551210">make sense</span> <span
  m="2551360">why</span> <span m="2551540">that</span> <span
  m="2551740">property</span> <span m="2551970">is solved?</span> <span
  m="2553760">So</span> <span m="2554890">you</span> <span
  m="2554990">have</span> <span m="2555130">a</span> <span
  m="2555220">clique</span> <span m="2556220">and</span> <span
  m="2556360">you</span> <span m="2556410">have</span> <span m="2556550">this
  assignment.</span> <span m="2557350">So</span> <span m="2557450">that</span>
  <span m="2557590">should</span> <span m="2557680">take</span> <span
  m="2557890">you</span> <span m="2558070">back to</span> <span
  m="2558290">this.</span></p><p><span m="2558980">So</span> <span
  m="2559080">remember</span> <span m="2559580">where</span> <span
  m="2559930">we</span> <span m="2560260">took</span> <span m="2560600">a</span>
  <span m="2560700">clique</span> <span m="2561800">of size</span> <span
  m="2561980">k</span> <span m="2562940">and</span> <span m="2563680">we</span>
  <span m="2563790">found</span> <span m="2564050">that</span> <span
  m="2564430">if</span> <span m="2564530">you</span> <span m="2564630">go</span>
  <span m="2564790">through</span> <span m="2564950">all</span> <span
  m="2565170">the</span> <span m="2565710">algebra,</span> <span
  m="2566050">you</span> <span m="2566200">will</span> <span
  m="2566320">find</span> <span m="2566620">something</span> <span
  m="2566960">which</span> <span m="2567140">is</span> <span
  m="2567260">like</span> <span m="2569390">you</span> <span
  m="2569670">will</span> <span m="2569950">go</span> <span
  m="2570090">through</span> <span m="2570310">and</span> <span m="2570430">you
  will</span> <span m="2570630">get</span> <span m="2571320">mod</span> <span
  m="2571510">of</span> <span m="2571600">E</span> <span m="2572000">bar</span>
  <span m="2572270">plus</span> <span m="2572450">mod of</span> <span
  m="2572720">V plus</span> <span m="2573040">mod</span> <span m="2573160">of
  k,</span> <span m="2574330">right?</span> <span m="2575540">So</span> <span
  m="2575680">here</span> <span m="2576872">you have</span> <span
  m="2577240">a</span> <span m="2577400">clique.</span> <span
  m="2577540">So</span> <span m="2577900">forget</span> <span
  m="2578160">about</span> <span m="2578330">what</span> <span
  m="2578440">you</span> <span m="2578530">did</span> <span
  m="2578660">before.</span></p><p><span m="2578960">So</span> <span
  m="2579150">just</span> <span m="2579470">consider</span> <span
  m="2579990">this is</span> <span m="2580420">an</span> <span
  m="2580590">assignment</span> <span m="2581250">according</span> <span
  m="2581450">to</span> <span m="2581510">those</span> <span
  m="2581780">rules.</span> <span m="2582790">And</span> <span
  m="2582880">those</span> <span m="2583110">rules</span> <span
  m="2583420">give</span> <span m="2583850">you</span> <span
  m="2584390">that</span> <span m="2584560">you</span> <span
  m="2584650">should</span> <span m="2584870">get</span> <span
  m="2585700">number</span> <span m="2587160">of</span> <span
  m="2588830">satisfied</span> <span m="2592680">clauses</span> <span
  m="2594830">is</span> <span m="2595000">equal</span> <span
  m="2595390">to</span> <span m="2596630">mod</span> <span m="2596950">of
  E</span> <span m="2597080">bar</span> <span m="2598530">plus</span> <span
  m="2599280">mod of</span> <span m="2599615">V</span> <span
  m="2600720">plus</span> <span m="2601440">mod of</span> <span m="2601790">V
  dash.</span> <span m="2602760">Realize</span> <span m="2603030">that</span>
  <span m="2603240">V dash here</span> <span m="2603330">is</span> <span
  m="2603670">not</span> <span m="2603880">k.</span> <span
  m="2604145">Does</span> <span m="2604410">that</span> <span
  m="2604600">make</span> <span m="2604710">sense?</span></p><p><span
  m="2604860">Because</span> <span m="2605150">V dash</span> <span
  m="2605290">is</span> <span m="2605530">just--</span> <span
  m="2606070">so</span> <span m="2606170">you</span> <span
  m="2606270">started</span> <span m="2606550">with</span> <span
  m="2606670">some set.</span> <span m="2607070">You</span> <span
  m="2607150">started</span> <span m="2607380">deleting</span> <span
  m="2607650">some</span> <span m="2607790">elements.</span> <span
  m="2608130">You</span> <span m="2608230">throw</span> <span
  m="2608350">[INAUDIBLE]</span> <span m="2608790">randomly,</span> <span
  m="2609490">but</span> <span m="2609580">you</span> <span
  m="2609650">ended</span> <span m="2609840">up</span> <span
  m="2609930">with</span> <span m="2610050">some</span> <span
  m="2610240">V</span> <span m="2610340">dash.</span> <span
  m="2611100">And</span> <span m="2611750">by</span> <span
  m="2611930">this</span> <span m="2612110">argument,</span> <span
  m="2613290">you</span> <span m="2613400">had</span> <span m="2613840">E</span>
  <span m="2613920">bar</span> <span m="2614320">plus</span> <span
  m="2614440">mod of</span> <span m="2614710">V</span> <span m="2615030">plus
  mod of</span> <span m="2615190">V dash--</span> <span m="2616110">E</span>
  <span m="2616250">bar</span> <span m="2616350">from</span> <span
  m="2616500">this</span> <span m="2616630">clause,</span> <span
  m="2617150">V</span> <span m="2617820">from</span> <span
  m="2617960">this</span> <span m="2618040">clause,</span> <span m="2618360">V
  dash</span> <span m="2618520">from this</span> <span
  m="2618600">clause.</span></p><p><span m="2619560">So</span> <span
  m="2619670">you</span> <span m="2619900">didn't end</span> <span
  m="2620030">up</span> <span m="2620130">with</span> <span
  m="2620240">this.</span> <span m="2620970">And</span> <span
  m="2621100">you</span> <span m="2621180">know</span> <span
  m="2621560">that</span> <span m="2621750">because</span> <span
  m="2622880">of</span> <span m="2623060">what</span> <span
  m="2623180">we</span> <span m="2623280">showed</span> <span
  m="2623540">here</span> <span m="2623800">does</span> <span
  m="2623930">not</span> <span m="2624090">change</span> <span
  m="2624270">number</span> <span m="2624540">of</span> <span
  m="2624590">satisfied</span> <span m="2624980">clauses,</span> <span
  m="2625700">it's</span> <span m="2625850">still</span> <span
  m="2626110">greater</span> <span m="2626270">than</span> <span
  m="2626410">or</span> <span m="2626510">equal</span> <span
  m="2626650">to</span> <span m="2627900">mod of</span> <span
  m="2628360">E</span> <span m="2628740">bar</span> <span
  m="2630470">plus</span> <span m="2631640">mod of</span> <span
  m="2632920">V</span> <span m="2633710">plus</span> <span m="2634480">k.</span>
  <span m="2635720">And we</span> <span m="2635850">cancel</span> <span
  m="2636180">this.</span> <span m="2636440">You</span> <span
  m="2636610">cancel</span> <span m="2636950">this.</span></p><p><span
  m="2638760">And</span> <span m="2638910">you</span> <span
  m="2639360">get</span> <span m="2641810">mod</span> <span
  m="2642020">of</span> <span m="2642130">V</span> <span m="2642230">dash</span>
  <span m="2642703">is</span> <span m="2643650">greater</span> <span
  m="2643840">than</span> <span m="2643960">or</span> <span
  m="2644060">equal</span> <span m="2644150">to</span> <span
  m="2644230">k,</span> <span m="2645320">which</span> <span
  m="2645410">means</span> <span m="2645670">that</span> <span
  m="2648740">you</span> <span m="2648840">have</span> <span
  m="2649480">a</span> <span m="2649600">clique</span> <span
  m="2649820">of</span> <span m="2649890">size</span> <span m="2650170">greater
  than</span> <span m="2650630">equal</span> <span m="2650730">to k.</span>
  <span m="2653120">Questions?</span> <span m="2658830">Does that</span> <span
  m="2659010">make</span> <span m="2659110">sense?</span> <span
  m="2660260">Really?</span> <span m="2660490">All of it?</span> <span
  m="2663222">OK.</span> <span m="2663680">That's good.</span> <span
  m="2664880">Any case.</span></p><p><span m="2666850">So</span> <span
  m="2667200">let's</span> <span m="2667470">go</span> <span
  m="2667610">back</span> <span m="2667840">and</span> <span
  m="2667970">see</span> <span m="2668480">what</span> <span m="2668670">we
  are</span> <span m="2668850">doing</span> <span m="2669090">here.</span> <span
  m="2669650">So</span> <span m="2670460">the</span> <span
  m="2670590">way</span> <span m="2670730">you are</span> <span
  m="2670860">doing</span> <span m="2672320">NP-hard</span> <span
  m="2672600">reductions</span> <span m="2672970">is</span> <span
  m="2673690">you</span> <span m="2673790">take</span> <span
  m="2673960">a</span> <span m="2674020">problem</span> <span
  m="2674310">that</span> <span m="2674400">you</span> <span
  m="2674470">already</span> <span m="2674690">know</span> <span
  m="2674880">is</span> <span m="2674980">hard,</span> <span
  m="2676880">you</span> <span m="2676980">take</span> <span
  m="2678120">any</span> <span m="2678520">arbitrary</span> <span
  m="2679070">instance</span> <span m="2679410">of</span> <span
  m="2679740">that</span> <span m="2679950">problem,</span> <span
  m="2681200">and you</span> <span m="2681400">transform</span> <span
  m="2681810">the</span> <span m="2681910">input</span> <span
  m="2683790">into</span> <span m="2684240">an</span> <span
  m="2684340">input</span> <span m="2684590">to</span> <span
  m="2684650">the</span> <span m="2684750">problem</span> <span
  m="2685100">that</span> <span m="2685580">you're</span> <span
  m="2685700">trying</span> <span m="2685900">to</span> <span
  m="2685960">show</span> <span m="2686140">is</span> <span
  m="2686230">hard.</span> <span m="2687240">So</span> <span
  m="2687350">you</span> <span m="2687400">take</span> <span
  m="2687660">problem</span> <span m="2688000">A,</span> <span
  m="2688210">which</span> <span m="2688340">you</span> <span
  m="2688420">know</span> <span m="2688600">is</span> <span
  m="2688680">hard.</span></p><p><span m="2689470">You</span> <span
  m="2689580">transform</span> <span m="2689830">the</span> <span
  m="2689900">input</span> <span m="2690670">into</span> <span
  m="2691500">an</span> <span m="2691610">input</span> <span
  m="2691830">for</span> <span m="2691930">problem</span> <span
  m="2692230">B.</span> <span m="2693260">And</span> <span
  m="2693490">then</span> <span m="2693640">you</span> <span
  m="2693740">show</span> <span m="2693980">that</span> <span
  m="2695170">if</span> <span m="2695300">you</span> <span
  m="2695420">can</span> <span m="2695530">solve</span> <span
  m="2695830">[INAUDIBLE]</span> <span m="2695900">problem</span> <span
  m="2696150">B,</span> <span m="2697140">you will</span> <span
  m="2697320">be</span> <span m="2697450">able</span> <span
  m="2697590">to</span> <span m="2697630">solve</span> <span
  m="2697820">problem</span> <span m="2698220">A.</span> <span
  m="2699420">But</span> <span m="2699630">since</span> <span
  m="2699820">you</span> <span m="2700280">know you</span> <span
  m="2700700">can't solve</span> <span m="2700940">problem A</span> <span
  m="2701250">in</span> <span m="2701370">polynomial-time,</span> <span
  m="2702520">you</span> <span m="2702620">know</span> <span m="2702750">that
  you can't</span> <span m="2702970">solve</span> <span
  m="2703280">problem</span> <span m="2703530">B</span> <span
  m="2703972">in</span> <span m="2704414">polynomial-time.</span></p><p><span
  m="2706630">And</span> <span m="2707460">the</span> <span
  m="2707540">other</span> <span m="2707900">important</span> <span
  m="2708220">thing</span> <span m="2708410">to</span> <span
  m="2708450">notice</span> <span m="2708770">here</span> <span
  m="2709030">is</span> <span m="2709180">that</span> <span
  m="2709470">the</span> <span m="2709550">reduction</span> <span
  m="2709950">needs</span> <span m="2710160">to</span> <span
  m="2710310">polynomial-time.</span> <span m="2711330">So</span> <span
  m="2711430">look</span> <span m="2711550">at</span> <span
  m="2711610">this</span> <span m="2711750">reduction,</span> <span
  m="2712060">for</span> <span m="2712180">instance.</span> <span
  m="2712940">What</span> <span m="2713080">are</span> <span
  m="2713140">you</span> <span m="2713230">doing</span> <span
  m="2713560">here?</span> <span m="2713890">You're</span> <span
  m="2714080">taking</span> <span m="2715890">every</span> <span
  m="2716600">vertex.</span> <span m="2717060">You're</span> <span
  m="2717130">making</span> <span m="2717330">a</span> <span
  m="2717390">clause.</span> <span m="2718240">And</span> <span
  m="2718370">how</span> <span m="2718500">many clauses</span> <span
  m="2718640">do</span> <span m="2718960">you</span> <span
  m="2719100">have?</span></p><p><span m="2719670">Well,</span> <span
  m="2719900">you</span> <span m="2719990">have</span> <span
  m="2720380">about</span> <span m="2720670">n</span> <span
  m="2720910">squared</span> <span m="2721090">clauses</span> <span
  m="2721420">here.</span> <span m="2722640">You</span> <span
  m="2722890">have</span> <span m="2723060">Rn</span> <span
  m="2723370">clauses</span> <span m="2723790">and</span> <span
  m="2723910">you</span> <span m="2724110">have</span> <span m="2724220">Rn
  clauses</span> <span m="2724600">here.</span> <span m="2725030">So</span>
  <span m="2725130">time</span> <span m="2725310">to</span> <span
  m="2725370">construct</span> <span m="2725710">that</span> <span
  m="2725870">is</span> <span m="2726030">like</span> <span m="2726370">roughly
  Rn</span> <span m="2726750">squared.</span> <span m="2727840">So</span> <span
  m="2728090">you're</span> <span m="2728270">constructing</span> <span
  m="2728660">the</span> <span m="2728750">clause in</span> <span
  m="2729010">polynomial-time.</span></p><p><span m="2730310">So</span> <span
  m="2730880">you have</span> <span m="2731170">a polynomial-time</span> <span
  m="2732200">reduction.</span> <span m="2733660">And</span> <span
  m="2734130">if</span> <span m="2734240">you</span> <span
  m="2734910">reduce</span> <span m="2735165">a known</span> <span
  m="2735420">NP-hard</span> <span m="2735730">problem</span> <span
  m="2736080">in</span> <span m="2736160">polynomial-time</span> <span
  m="2736890">to</span> <span m="2737340">an</span> <span
  m="2737420">unknown</span> <span m="2737680">problem,</span> <span
  m="2738210">you</span> <span m="2738290">can show that it is</span> <span
  m="2738670">NP-hard.</span> <span m="2740414">OK.</span> <span
  m="2740850">I</span> <span m="2740930">don't</span> <span
  m="2741290">think</span> <span m="2741400">we</span> <span
  m="2741450">have</span> <span m="2741550">time</span> <span
  m="2741780">to</span> <span m="2742260">do</span> <span
  m="2742440">another</span> <span m="2742680">problem,</span> <span
  m="2743030">so</span> <span m="2743330">we're done.</span></p>
uid: ee6f3c270c10d7b9558d51a2dca6fde3
type: courses
layout: video
---
