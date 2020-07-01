---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine covers the
  augmentation of data structures, updating common structures to store
  additional information.</p> <p><strong>Instructors:</strong> Erik Demaine</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: xVka6z1hu-I
    parent_uid: 0e16f4f6df9982c161d397610790be88
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 23f0865ccf6b1233e6e737b75f22f77f
  - id: xVka6z1hu-I.srt
    parent_uid: 0e16f4f6df9982c161d397610790be88
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-9-augmentation-range-trees/xVka6z1hu-I.srt
    title: 3play caption file
    type: null
    uid: e854126ffc3ba502ec430e538e550781
  - id: xVka6z1hu-I.pdf
    parent_uid: 0e16f4f6df9982c161d397610790be88
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-9-augmentation-range-trees/xVka6z1hu-I.pdf
    title: 3play pdf file
    type: null
    uid: 043caded851c2927fa3cf3bf3957e4e3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 0e16f4f6df9982c161d397610790be88
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 85ce2482be2cebe233860e3e03179cf5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 0e16f4f6df9982c161d397610790be88
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e6dc7deab9f26bb2f8301a0db64ea6bb
  - id: Video-YouTube-Stream
    media_location: xVka6z1hu-I
    parent_uid: 0e16f4f6df9982c161d397610790be88
    title: Video-YouTube-Stream
    type: Video
    uid: 69de173a8ca9888a31fad53d1abae787
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/xVka6z1hu-I/default.jpg'
    parent_uid: 0e16f4f6df9982c161d397610790be88
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5888e0610c2b5ffaf45ba80bd75b161c
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 0e16f4f6df9982c161d397610790be88
    title: Video-iTunes U-MP4
    type: Video
    uid: 1c007ce65c6dc62abc8ef742f26a316d
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec09_300k.mp4'
    parent_uid: 0e16f4f6df9982c161d397610790be88
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2fb5af59aef7fd00cb148261036ac382
inline_embed_id: '66680522lecture9:augmentation:rangetrees53440732'
order_index: 187
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-9-augmentation-range-trees
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-9-augmentation-range-trees
title: 'Lecture 9: Augmentation: Range Trees'
transcript: >-
  <p><span m="80">The</span> <span m="190">following</span> <span
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
  m="17260">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21190">PROFESSOR: All</span> <span m="21320">right,</span> <span
  m="21540">let's</span> <span m="21640">get</span> <span
  m="21800">started.</span> <span m="23410">Today</span> <span
  m="23880">we</span> <span m="24050">have</span> <span m="24380">another</span>
  <span m="24750">data</span> <span m="25070">structures</span> <span
  m="25520">topic</span> <span m="26010">which</span> <span m="26280">is,</span>
  <span m="27130">Data</span> <span m="27420">Structure</span> <span
  m="27960">Augmentation.</span> <span m="30360">The</span> <span
  m="30780">idea</span> <span m="31150">here</span> <span m="31420">is</span>
  <span m="31500">we're</span> <span m="31590">going</span> <span
  m="31700">to</span> <span m="31800">take</span> <span m="32170">some</span>
  <span m="32490">existing</span> <span m="32980">data</span> <span
  m="33230">structure</span> <span m="34130">and</span> <span
  m="34590">augment</span> <span m="34890">it</span> <span m="35190">to</span>
  <span m="35320">do</span> <span m="35710">extra</span> <span
  m="36120">cool</span> <span m="36380">things.</span></p><p><span
  m="46390">Take</span> <span m="46560">some</span> <span m="46770">other</span>
  <span m="47000">data</span> <span m="47260">structure</span> <span
  m="47590">there</span> <span m="47750">we've</span> <span
  m="47940">covered.</span> <span m="49560">Typically,</span> <span
  m="50150">that'll</span> <span m="50490">be</span> <span m="50980">a</span>
  <span m="51130">balanced</span> <span m="51850">search</span> <span
  m="52240">tree,</span> <span m="53640">like</span> <span m="53940">an</span>
  <span m="54030">AVL</span> <span m="54430">tree</span> <span
  m="54860">or</span> <span m="54990">a</span> <span m="55050">2-3</span> <span
  m="55420">tree.</span> <span m="59480">And</span> <span m="59760">then</span>
  <span m="60010">we'll</span> <span m="60140">modify</span> <span
  m="60730">it</span> <span m="62150">to</span> <span m="62270">store</span>
  <span m="62610">extra</span> <span m="62940">information</span> <span
  m="64030">which</span> <span m="64300">will</span> <span
  m="64500">enable</span> <span m="65110">additional</span> <span
  m="65550">kinds</span> <span m="65810">of</span> <span
  m="65900">searches,</span> <span m="66870">typically,</span> <span
  m="69270">and</span> <span m="69690">sometimes</span> <span
  m="70160">to</span> <span m="70280">do</span> <span m="70510">updates</span>
  <span m="70950">better.</span></p><p><span m="81120">And</span> <span
  m="81450">in</span> <span m="81640">006,</span> <span m="82230">you've</span>
  <span m="82380">seen</span> <span m="82630">an</span> <span
  m="82730">example</span> <span m="83190">of</span> <span m="83300">this</span>
  <span m="83510">where</span> <span m="83670">you</span> <span
  m="83780">took</span> <span m="84040">AVL</span> <span m="84470">trees</span>
  <span m="84900">and</span> <span m="85070">augmented</span> <span
  m="86340">AVL</span> <span m="86700">trees</span> <span m="86920">so</span>
  <span m="87080">that</span> <span m="87240">every</span> <span
  m="87600">node</span> <span m="88050">knew</span> <span m="88200">the</span>
  <span m="88330">number</span> <span m="88770">of</span> <span
  m="89020">nodes</span> <span m="89420">in</span> <span m="89590">that</span>
  <span m="89810">rooted</span> <span m="90350">subtree.</span> <span
  m="91290">Today</span> <span m="91580">we're</span> <span
  m="91690">going</span> <span m="91790">to</span> <span m="91860">see</span>
  <span m="92570">that</span> <span m="92860">example</span> <span
  m="93240">but</span> <span m="93380">also</span> <span m="93630">a</span>
  <span m="93680">bunch</span> <span m="94040">of</span> <span
  m="94180">other</span> <span m="94450">examples,</span> <span
  m="95410">different</span> <span m="95690">types</span> <span
  m="95940">of</span> <span m="96050">augmentation</span> <span
  m="96650">you</span> <span m="96790">could</span> <span m="96940">do.</span>
  <span m="97960">And</span> <span m="98080">we'll</span> <span
  m="98180">start</span> <span m="98420">out</span> <span m="98510">with</span>
  <span m="98650">a</span> <span m="98700">very</span> <span
  m="98930">simple</span> <span m="99350">one,</span> <span
  m="99670">which</span> <span m="99760">I</span> <span m="99900">call</span>
  <span m="100720">easy</span> <span m="101110">tree</span> <span
  m="101390">augmentation,</span> <span m="108160">which</span> <span
  m="108470">will</span> <span m="108700">include</span> <span
  m="109400">subtree</span> <span m="109870">size</span> <span
  m="110290">as</span> <span m="110460">a</span> <span m="110520">special</span>
  <span m="110930">case.</span></p><p><span m="117760">So</span> <span
  m="118120">with</span> <span m="118210">easy</span> <span
  m="118480">tree</span> <span m="118700">augmentation,</span> <span
  m="121860">the</span> <span m="121980">idea</span> <span m="122220">is</span>
  <span m="122390">you</span> <span m="122530">have</span> <span
  m="122740">a</span> <span m="122840">tree,</span> <span m="124290">like</span>
  <span m="124540">an</span> <span m="124640">AVL</span> <span
  m="124990">tree,</span> <span m="125440">or</span> <span m="125550">2-3</span>
  <span m="125940">tree,</span> <span m="126240">or</span> <span
  m="126320">something</span> <span m="126580">like</span> <span
  m="126770">that.</span> <span m="127480">And</span> <span
  m="127690">you'd</span> <span m="127860">like</span> <span
  m="128110">to</span> <span m="128259">store,</span> <span
  m="128750">for</span> <span m="128970">every</span> <span
  m="129289">node</span> <span m="129620">x,</span> <span m="130570">some</span>
  <span m="130840">function</span> <span m="131870">of</span> <span
  m="132060">the</span> <span m="132170">subtree,</span> <span
  m="132710">rooted</span> <span m="133040">at</span> <span m="133170">x.</span>
  <span m="133480">Such</span> <span m="133760">as</span> <span
  m="134080">the</span> <span m="134160">number</span> <span
  m="134410">of</span> <span m="134480">nodes</span> <span m="134750">in</span>
  <span m="134830">there,</span> <span m="135220">or</span> <span
  m="135930">the</span> <span m="136030">sum</span> <span m="136290">of</span>
  <span m="136390">the</span> <span m="136490">weights</span> <span
  m="136800">of</span> <span m="136900">the</span> <span
  m="137000">nodes,</span> <span m="137400">or</span> <span
  m="137510">the</span> <span m="137620">sum</span> <span m="137870">of</span>
  <span m="137920">the</span> <span m="138030">squares</span> <span
  m="138420">of</span> <span m="138480">the</span> <span
  m="138570">weights,</span> <span m="139090">or</span> <span
  m="140270">the</span> <span m="140460">min,</span> <span m="141230">or</span>
  <span m="141390">the</span> <span m="141490">max,</span> <span
  m="141970">or</span> <span m="143240">the</span> <span
  m="143620">median</span> <span m="144200">maybe,</span> <span
  m="144650">I'm</span> <span m="144730">not</span> <span
  m="144890">sure.</span> <span m="146610">Some</span> <span
  m="147280">function</span> <span m="148640">f</span> <span
  m="149490">of</span> <span m="149550">x</span> <span m="150030">which</span>
  <span m="150290">is</span> <span m="150420">a</span> <span
  m="150490">function</span> <span m="150890">of</span> <span
  m="151000">that.</span> <span m="152140">Maybe</span> <span
  m="152250">not</span> <span m="152420">f</span> <span m="152630">of</span>
  <span m="152750">x,</span> <span m="153120">but</span> <span
  m="154270">we</span> <span m="154350">want</span> <span m="154540">to</span>
  <span m="155210">store</span> <span m="155710">some</span> <span
  m="156170">function</span> <span m="156580">of</span> <span
  m="156780">that</span> <span m="157000">subtree.</span></p><p><span
  m="162120">Say</span> <span m="162450">the</span> <span m="162520">goal</span>
  <span m="164390">is</span> <span m="164770">to</span> <span
  m="165170">store</span> <span m="167710">f</span> <span m="167960">of</span>
  <span m="168235">the</span> <span m="168510">subtree</span> <span
  m="169110">rooted at</span> <span m="169540">x</span> <span
  m="178866">at</span> <span m="179290">each</span> <span m="181650">node</span>
  <span m="182120">x</span> <span m="184020">in</span> <span m="184210">a</span>
  <span m="184260">field</span> <span m="184880">which I'll</span> <span
  m="185090">call</span> <span m="185380">x.f.</span> <span
  m="187584">So,</span> <span m="188050">normally</span> <span
  m="188480">nodes</span> <span m="188840">have</span> <span m="189380">a</span>
  <span m="189440">left</span> <span m="189660">child,</span> <span
  m="190020">right</span> <span m="190230">child,</span> <span
  m="190660">parent.</span> <span m="191530">But</span> <span
  m="191660">we're</span> <span m="191770">going</span> <span
  m="191860">to</span> <span m="191940">store an</span> <span
  m="192210">extra</span> <span m="192550">field</span> <span
  m="193770">x.f</span> <span m="193970">for</span> <span m="195820">some</span>
  <span m="196150">function</span> <span m="196520">that</span> <span
  m="196640">you</span> <span m="196770">define.</span> <span
  m="198270">This</span> <span m="198440">is</span> <span m="198560">not</span>
  <span m="198790">always</span> <span m="199040">possible,</span> <span
  m="200710">but</span> <span m="202280">here's</span> <span m="202590">a</span>
  <span m="202640">case</span> <span m="202910">where</span> <span
  m="203050">it</span> <span m="203100">is</span> <span
  m="203250">possible.</span> <span m="205350">That's</span> <span
  m="205650">going</span> <span m="205760">to</span> <span m="205820">be</span>
  <span m="205990">the</span> <span m="206180">easy</span> <span
  m="206390">case.</span> <span m="208730">Suppose</span> <span
  m="209220">x.f</span> <span m="209500">can</span> <span m="211300">be</span>
  <span m="211450">computed</span> <span m="213630">locally</span> <span
  m="214710">using</span> <span m="215940">lower</span> <span
  m="216370">information,</span> <span m="217370">lower</span> <span
  m="217600">nodes.</span></p><p><span m="227410">And</span> <span
  m="227540">we'll</span> <span m="227650">say,</span> <span
  m="228130">let's</span> <span m="228350">suppose</span> <span
  m="228670">it</span> <span m="228750">can</span> <span m="228880">be</span>
  <span m="229010">computed in</span> <span m="229480">constant</span> <span
  m="229900">time</span> <span m="230730">from</span> <span
  m="231390">information</span> <span m="231930">in</span> <span
  m="232110">the</span> <span m="232210">node</span> <span m="232530">x</span>
  <span m="234420">from</span> <span m="234950">x's</span> <span
  m="235280">children</span> <span m="237310">and</span> <span
  m="239900">from</span> <span m="241580">the f</span> <span
  m="241780">value</span> <span m="242500">that's</span> <span
  m="242830">stored</span> <span m="243330">in</span> <span
  m="243550">the</span> <span m="243720">children.</span> <span
  m="244500">I'll</span> <span m="244620">call</span> <span
  m="244760">that</span> <span m="244950">children.f.</span> <span
  m="245750">But</span> <span m="245890">really,</span> <span
  m="246130">I</span> <span m="246190">mean</span> <span m="246480">left</span>
  <span m="246740">child.f,</span> <span m="247430">right</span> <span
  m="247660">child.f,</span> <span m="248560">or</span> <span
  m="248760">if</span> <span m="248810">you</span> <span m="248880">have</span>
  <span m="248980">a</span> <span m="249050">2-3</span> <span
  m="249610">tree</span> <span m="250000">you</span> <span
  m="250100">have</span> <span m="250290">three</span> <span
  m="250510">children,</span> <span m="251000">potentially.</span> <span
  m="252100">And</span> <span m="252370">the</span> <span m="252745">.f</span>
  <span m="253120">of each</span> <span m="253320">of</span> <span
  m="253410">them.</span></p><p><span m="254510">OK.</span> <span
  m="254750">So</span> <span m="254920">suppose</span> <span
  m="255540">you</span> <span m="255670">can</span> <span
  m="255820">compute</span> <span m="256410">x.f</span> <span
  m="258240">locally</span> <span m="258730">just</span> <span
  m="259050">using</span> <span m="259410">one</span> <span
  m="259700">level</span> <span m="260070">down</span> <span
  m="261380">in</span> <span m="261519">constant</span> <span
  m="261959">time.</span> <span m="263020">Then,</span> <span
  m="263390">as</span> <span m="263550">you</span> <span m="263720">might</span>
  <span m="263900">expect,</span> <span m="264280">you</span> <span
  m="264410">can</span> <span m="264590">update</span> <span
  m="265950">whenever</span> <span m="266420">a</span> <span
  m="266460">node</span> <span m="268060">ends</span> <span m="268250">up</span>
  <span m="268380">changing.</span> <span m="270510">So</span> <span
  m="270810">more</span> <span m="270990">formally.</span> <span
  m="273560">If</span> <span m="274020">some</span> <span m="274180">set</span>
  <span m="274530">of</span> <span m="274660">nodes</span> <span
  m="275010">change--</span> <span m="287700">call this</span> <span
  m="288010">at</span> <span m="288250">s.</span></p><p><span
  m="318970">So</span> <span m="319680">I'm</span> <span
  m="320130">stating</span> <span m="320440">a</span> <span
  m="320470">very</span> <span m="320650">general</span> <span
  m="321080">theorem</span> <span m="321390">here.</span> <span
  m="322540">If</span> <span m="322740">there is</span> <span
  m="323000">some</span> <span m="323350">set</span> <span m="325415">of</span>
  <span m="325870">nodes,</span> <span m="326710">which</span> <span
  m="327140">we</span> <span m="327770">changed</span> <span
  m="328370">something</span> <span m="328920">about</span> <span
  m="329250">them.</span> <span m="330310">We</span> <span
  m="330460">change</span> <span m="330960">either</span> <span
  m="331360">their</span> <span m="331710">f field,</span> <span
  m="332900">we</span> <span m="333070">change</span> <span
  m="333360">some</span> <span m="333520">of</span> <span m="333570">the</span>
  <span m="333670">data</span> <span m="333950">that's</span> <span
  m="334180">in</span> <span m="334380">the</span> <span m="334780">node,</span>
  <span m="335220">or</span> <span m="335420">we</span> <span m="336310">do
  a</span> <span m="336480">rotation,</span> <span m="337540">loosen</span>
  <span m="337810">those</span> <span m="338080">around.</span> <span
  m="339420">Then</span> <span m="339690">we</span> <span
  m="339850">count</span> <span m="340450">the</span> <span
  m="340620">total</span> <span m="341040">number</span> <span
  m="341350">of</span> <span m="341430">ancestors</span> <span
  m="342895">of</span> <span m="343300">these</span> <span
  m="343640">nodes.</span> <span m="344840">So</span> <span
  m="344980">this</span> <span m="345880">subtree.</span> <span
  m="347100">Those</span> <span m="347390">are</span> <span
  m="347420">the</span> <span m="347540">nodes</span> <span
  m="347810">that</span> <span m="347890">need</span> <span m="348060">to</span>
  <span m="348110">be</span> <span m="348270">updated</span> <span
  m="349080">because</span> <span m="350030">we're</span> <span
  m="350150">assuming</span> <span m="350440">we can</span> <span
  m="350700">compute</span> <span m="350960">x.f</span> <span
  m="352136">just</span> <span m="352610">given</span> <span
  m="352870">the</span> <span m="352970">children</span> <span
  m="353410">data.</span> <span m="354080">So</span> <span m="354260">if</span>
  <span m="355260">this</span> <span m="355480">data</span> <span
  m="355730">is</span> <span m="355840">changing,</span> <span
  m="356690">we</span> <span m="356710">have</span> <span m="356880">to</span>
  <span m="356970">update</span> <span m="357330">it's</span> <span
  m="357450">parents</span> <span m="358050">value</span> <span
  m="358460">of</span> <span m="358580">f</span> <span m="358850">because</span>
  <span m="359170">it</span> <span m="359690">depends</span> <span
  m="360130">on</span> <span m="360280">this</span> <span
  m="360470">child</span> <span m="360770">value.</span> <span
  m="361350">We</span> <span m="361490">have</span> <span m="361580">to</span>
  <span m="361670">update</span> <span m="362070">all</span> <span
  m="362340">those</span> <span m="362550">parents,</span> <span
  m="363540">all</span> <span m="363750">the</span> <span m="363830">way</span>
  <span m="364000">up</span> <span m="364210">to</span> <span
  m="365420">the</span> <span m="365550">root.</span> <span m="366820">So</span>
  <span m="367050">however</span> <span m="367380">many</span> <span
  m="367570">nodes there</span> <span m="367840">are there,</span> <span
  m="369030">that's</span> <span m="369260">the</span> <span
  m="369340">total</span> <span m="369630">cost.</span></p><p><span
  m="370880">Now,</span> <span m="371430">luckily,</span> <span m="373610">in
  an</span> <span m="373880">AVL</span> <span m="374260">tree,</span> <span
  m="374650">or</span> <span m="374730">2-3</span> <span m="375150">tree,</span>
  <span m="375430">most</span> <span m="376400">balanced</span> <span
  m="376705">search</span> <span m="377010">structures,</span> <span
  m="377550">the</span> <span m="377720">updates</span> <span
  m="378150">you</span> <span m="378260">do</span> <span m="378510">are</span>
  <span m="378660">very</span> <span m="379310">localized.</span> <span
  m="380610">When</span> <span m="380990">we</span> <span m="381090">do</span>
  <span m="381220">splits</span> <span m="381640">in a</span> <span
  m="381810">2-3</span> <span m="382200">tree</span> <span m="382970">we</span>
  <span m="383210">only</span> <span m="383520">do it</span> <span
  m="383790">up</span> <span m="384060">a</span> <span m="384140">single</span>
  <span m="385220">path</span> <span m="385940">to</span> <span
  m="386090">the</span> <span m="386200">root.</span> <span m="387590">So</span>
  <span m="387760">the</span> <span m="387880">number</span> <span
  m="388130">of</span> <span m="388200">ancestors</span> <span m="388850">here
  is</span> <span m="388980">just</span> <span m="389160">going</span> <span
  m="389280">to</span> <span m="389350">be</span> <span m="389710">log n.</span>
  <span m="391130">Same</span> <span m="391370">thing</span> <span
  m="391530">with</span> <span m="391670">an</span> <span m="391770">AVL</span>
  <span m="392040">tree.</span> <span m="392360">If</span> <span
  m="392460">you</span> <span m="392610">look</span> <span m="392830">at</span>
  <span m="393030">the</span> <span m="393120">rotations</span> <span
  m="393630">you</span> <span m="393760">do,</span> <span m="394340">they
  are</span> <span m="394620">up</span> <span m="394960">a</span> <span
  m="395090">single</span> <span m="396870">leaf</span> <span
  m="397180">to</span> <span m="397360">root</span> <span
  m="397590">path.</span> <span m="399640">And</span> <span m="399690">so</span>
  <span m="399930">the</span> <span m="400130">number</span> <span
  m="400360">of</span> <span m="400440">ancestors</span> <span
  m="401330">that</span> <span m="402080">need</span> <span m="402300">to</span>
  <span m="402380">be</span> <span m="402550">updated</span> <span
  m="403000">is</span> <span m="403200">always</span> <span
  m="403530">order</span> <span m="403800">log n.</span> <span
  m="404960">Things</span> <span m="405230">change,</span> <span
  m="406230">and</span> <span m="406680">there's</span> <span
  m="406870">an</span> <span m="406950">order</span> <span m="407150">log
  n</span> <span m="407530">ancestors</span> <span m="408090">of</span> <span
  m="408220">them.</span></p><p><span m="409820">So</span> <span
  m="410760">this</span> <span m="410940">is</span> <span m="411000">a</span>
  <span m="411030">little</span> <span m="411240">more</span> <span
  m="411420">general</span> <span m="411790">than</span> <span
  m="411940">we</span> <span m="412080">need,</span> <span m="412830">but</span>
  <span m="413260">it's</span> <span m="413430">just</span> <span
  m="413600">to</span> <span m="413680">point</span> <span m="413960">out</span>
  <span m="414140">if</span> <span m="414270">we</span> <span
  m="414380">did</span> <span m="415130">log n</span> <span
  m="415500">rotation</span> <span m="416050">spread</span> <span
  m="416470">out</span> <span m="416770">somewhere</span> <span
  m="417240">in</span> <span m="417310">the</span> <span m="417420">tree,</span>
  <span m="418260">that</span> <span m="418420">would</span> <span
  m="418540">actually</span> <span m="418830">be</span> <span
  m="418990">bad</span> <span m="419550">because</span> <span
  m="419950">the</span> <span m="420040">total</span> <span
  m="420320">number</span> <span m="420530">of</span> <span
  m="420630">ancestors</span> <span m="421160">could</span> <span
  m="421300">be</span> <span m="421660">log</span> <span
  m="421900">squared.</span> <span m="423490">But</span> <span
  m="423700">because</span> <span m="424430">in</span> <span
  m="425340">the</span> <span m="425440">structures</span> <span
  m="425880">we've</span> <span m="426060">seen,</span> <span
  m="427860">we</span> <span m="428000">just</span> <span m="428220">work</span>
  <span m="428440">on</span> <span m="428580">a</span> <span
  m="428630">single</span> <span m="429020">path</span> <span
  m="429390">to</span> <span m="429500">the</span> <span m="429620">root,</span>
  <span m="430930">we</span> <span m="431090">get</span> <span m="431630">log
  n.</span> <span m="453330">So</span> <span m="454920">in</span> <span
  m="455090">a</span> <span m="455150">little</span> <span
  m="455370">more</span> <span m="455540">detail</span> <span
  m="455920">here,</span> <span m="458240">whenever</span> <span
  m="458670">we</span> <span m="458790">do</span> <span m="459070">a</span>
  <span m="459250">rotation</span> <span m="460100">in</span> <span
  m="460250">an</span> <span m="460320">AVL</span> <span m="460620">tree.</span>
  <span m="469610">Let's</span> <span m="470100">say</span> <span
  m="470470">A,</span> <span m="471030">B,</span> <span m="471680">C,</span>
  <span m="472950">x,</span> <span m="473030">y.</span></p><p><span
  m="476160">Remember</span> <span m="476390">rotations?</span> <span
  m="477050">Been</span> <span m="477190">a</span> <span m="477290">while</span>
  <span m="477460">since</span> <span m="477670">we've</span> <span
  m="477760">done</span> <span m="477940">rotations.</span> <span
  m="480680">So</span> <span m="480890">we</span> <span
  m="482160">haven't</span> <span m="482490">changed</span> <span
  m="482920">any</span> <span m="483120">of</span> <span m="483170">the</span>
  <span m="483290">nodes</span> <span m="483580">in</span> <span
  m="483700">A,</span> <span m="484100">B, C,</span> <span m="484750">but</span>
  <span m="484920">we</span> <span m="485060">have</span> <span
  m="485360">changed</span> <span m="486080">the</span> <span
  m="486190">nodes</span> <span m="486500">x</span> <span m="486730">and</span>
  <span m="486820">y.</span> <span m="488160">So</span> <span
  m="488730">we're</span> <span m="488910">going</span> <span
  m="489060">to</span> <span m="489750">have</span> <span m="489920">to</span>
  <span m="490050">trigger</span> <span m="490920">an</span> <span
  m="491060">update</span> <span m="491570">of</span> <span m="491680">y.</span>
  <span m="493010">First,</span> <span m="493240">we'd</span> <span
  m="493360">want</span> <span m="493550">to</span> <span
  m="493610">update</span> <span m="494400">y.f</span> <span
  m="495840">and</span> <span m="496270">then</span> <span
  m="496540">we're</span> <span m="496680">going</span> <span
  m="496780">to</span> <span m="496870">trigger</span> <span
  m="497780">the</span> <span m="497920">update</span> <span
  m="498420">to</span> <span m="498660">x.f.</span> <span m="501420">And</span>
  <span m="501590">as</span> <span m="501700">long</span> <span
  m="501990">as</span> <span m="502230">this</span> <span m="502410">one</span>
  <span m="502610">can</span> <span m="502750">be</span> <span
  m="502870">computed</span> <span m="503530">from</span> <span
  m="503980">its</span> <span m="504170">children,</span> <span
  m="504940">then</span> <span m="506070">we</span> <span
  m="506180">compute</span> <span m="506460">y.f,</span> <span
  m="507060">then</span> <span m="507260">we</span> <span m="507390">can</span>
  <span m="507510">compute</span> <span m="507810">x</span> <span
  m="508090">from</span> <span m="508420">its</span> <span
  m="508630">children.</span></p><p><span m="510110">All right.</span> <span
  m="510310">So a</span> <span m="510430">constant</span> <span
  m="510810">number</span> <span m="511110">of</span> <span
  m="511210">extra</span> <span m="511510">things</span> <span
  m="511760">we</span> <span m="511850">need</span> <span m="512020">to</span>
  <span m="512110">do</span> <span m="512320">whenever</span> <span
  m="512610">we</span> <span m="512720">do</span> <span
  m="512900">rotation.</span> <span m="513850">And</span> <span
  m="513980">because</span> <span m="514289">the</span> <span
  m="514390">rotations</span> <span m="514960">lie on</span> <span
  m="515220">a</span> <span m="515270">single</span> <span
  m="515549">path,</span> <span m="517039">total</span> <span
  m="517669">cost</span> <span m="518610">that--</span> <span
  m="519100">once</span> <span m="519350">we</span> <span m="519450">stop</span>
  <span m="519789">doing</span> <span m="519990">the</span> <span
  m="520070">rotations,</span> <span m="521580">in</span> <span
  m="521850">AVL</span> <span m="522370">insert</span> <span
  m="522840">say,</span> <span m="523659">then</span> <span m="523789">we</span>
  <span m="523919">still</span> <span m="524250">have</span> <span
  m="524410">to</span> <span m="524510">keep</span> <span
  m="524750">updating</span> <span m="525270">up</span> <span
  m="525430">to</span> <span m="525530">the</span> <span m="525670">root.</span>
  <span m="526100">But</span> <span m="526310">there's</span> <span
  m="526460">only</span> <span m="526680">log n</span> <span
  m="527300">at</span> <span m="527450">most</span> <span m="527670">log
  n</span> <span m="528090">nodes</span> <span m="528380">to</span> <span
  m="528500">do</span> <span m="528650">that.</span></p><p><span
  m="530810">OK.</span> <span m="530940">Same</span> <span
  m="531230">thing</span> <span m="531520">with</span> <span
  m="532830">2-3</span> <span m="533210">trees.</span> <span
  m="533590">We</span> <span m="533690">have</span> <span m="533940">a</span>
  <span m="534010">node</span> <span m="534280">split.</span> <span
  m="535860">So</span> <span m="536050">we</span> <span m="536150">have,</span>
  <span m="537060">I</span> <span m="537140">guess,</span> <span
  m="537340">three</span> <span m="537590">keys,</span> <span
  m="538030">four</span> <span m="538250">children.</span> <span
  m="538730">That's</span> <span m="538950">too</span> <span
  m="539120">many.</span> <span m="540190">So</span> <span m="540660">we</span>
  <span m="540960">split</span> <span m="541480">to</span> <span
  m="544720">two</span> <span m="544910">nodes</span> <span
  m="545530">and</span> <span m="545740">an</span> <span m="545820">extra</span>
  <span m="546110">node</span> <span m="546310">up</span> <span
  m="546460">here.</span> <span m="549810">Then</span> <span
  m="550000">we</span> <span m="550100">just</span> <span
  m="550300">trigger</span> <span m="550770">an</span> <span
  m="550910">update</span> <span m="551330">of</span> <span
  m="551440">this</span> <span m="551690">f</span> <span
  m="551890">value,</span> <span m="552380">an</span> <span
  m="552470">update</span> <span m="552790">of</span> <span
  m="552870">this</span> <span m="553200">f value,</span> <span
  m="553680">and</span> <span m="553900">an</span> <span
  m="554010">update</span> <span m="554760">of</span> <span
  m="554890">that</span> <span m="555080">f</span> <span
  m="555200">value.</span> <span m="555650">And because</span> <span
  m="556050">that</span> <span m="556230">just</span> <span
  m="556410">follows</span> <span m="557970">a</span> <span
  m="558040">single</span> <span m="558320">path</span> <span
  m="559000">everything's</span> <span m="559480">log n.</span></p><p><span
  m="561510">So</span> <span m="561670">this</span> <span m="561870">is</span>
  <span m="562000">a</span> <span m="562230">general</span> <span
  m="562580">theorem</span> <span m="562850">about</span> <span
  m="563110">augmentation.</span> <span m="563820">Any</span> <span
  m="564170">function</span> <span m="564730">that's</span> <span
  m="564890">well</span> <span m="565110">behaved</span> <span
  m="565590">in</span> <span m="565680">this</span> <span
  m="565800">sense,</span> <span m="566850">we</span> <span
  m="567060">can</span> <span m="567710">maintain</span> <span
  m="568890">in</span> <span m="569110">AVL</span> <span m="569490">trees</span>
  <span m="569850">and 2-3</span> <span m="570220">trees.</span> <span
  m="572260">And</span> <span m="572780">I'll</span> <span
  m="573230">remind</span> <span m="573620">you</span> <span
  m="576360">and</span> <span m="576570">state,</span> <span m="576770">a</span>
  <span m="576850">little</span> <span m="577050">more</span> <span
  m="577240">generally,</span> <span m="577690">what</span> <span
  m="577960">you</span> <span m="578090">did</span> <span m="578310">in</span>
  <span m="578630">006,</span> <span m="580030">which</span> <span
  m="580290">are</span> <span m="580380">called</span> <span
  m="580650">order</span> <span m="580910">statistic</span> <span
  m="581430">trees</span> <span m="581790">in</span> <span m="581880">the</span>
  <span m="581990">textbook.</span></p><p><span m="590540">So</span> <span
  m="590610">here</span> <span m="592630">we're</span> <span
  m="592880">going</span> <span m="593150">to--</span> <span
  m="594140">let</span> <span m="594260">me</span> <span m="594360">first</span>
  <span m="594610">tell</span> <span m="594720">you</span> <span
  m="594850">what</span> <span m="594980">we're</span> <span
  m="595210">trying</span> <span m="595620">to</span> <span
  m="595740">achieve.</span> <span m="596220">This is</span> <span
  m="596610">the</span> <span m="596780">abstract</span> <span
  m="597180">data</span> <span m="597400">type,</span> <span
  m="598150">or</span> <span m="598490">the</span> <span
  m="598580">interface</span> <span m="599170">of</span> <span
  m="599260">the</span> <span m="599360">data</span> <span
  m="599590">structure.</span> <span m="603360">We</span> <span
  m="603600">want</span> <span m="603800">to</span> <span m="603890">do</span>
  <span m="604110">insert,</span> <span m="607920">delete,</span> <span
  m="611680">and</span> <span m="612406">say,</span> <span
  m="612770">successor</span> <span m="613300">searches.</span> <span
  m="616590">It's</span> <span m="617040">the</span> <span
  m="617190">usual</span> <span m="617490">thing</span> <span
  m="617660">we</span> <span m="617740">want</span> <span m="617970">out</span>
  <span m="618160">of</span> <span m="618250">a</span> <span
  m="618330">binary</span> <span m="618630">search</span> <span
  m="618910">tree.</span> <span m="619230">Predecessor</span> <span
  m="619840">too,</span> <span m="620220">sure.</span> <span
  m="622210">We</span> <span m="622430">want</span> <span m="622640">to</span>
  <span m="622720">do</span> <span m="623140">rank</span> <span
  m="626510">of</span> <span m="626690">a</span> <span m="626730">given</span>
  <span m="627090">key</span> <span m="627430">which</span> <span
  m="627720">is,</span> <span m="628700">tell</span> <span m="628980">me</span>
  <span m="629800">what</span> <span m="630110">is</span> <span
  m="630530">the</span> <span m="630950">index</span> <span m="633430">of</span>
  <span m="633600">that</span> <span m="633840">key</span> <span
  m="636080">in</span> <span m="636310">the</span> <span
  m="637030">overall</span> <span m="637470">sorted</span> <span
  m="637890">order</span> <span m="638210">of</span> <span m="638410">the</span>
  <span m="638560">items,</span> <span m="639000">of</span> <span
  m="639160">the</span> <span m="639250">keys?</span></p><p><span
  m="640770">We've</span> <span m="640920">talked</span> <span
  m="641160">about</span> <span m="641370">rank</span> <span m="641715">a</span>
  <span m="642060">few</span> <span m="642200">times</span> <span
  m="642510">already</span> <span m="642810">in</span> <span
  m="642910">this</span> <span m="643080">class.</span> <span
  m="646170">Depends</span> <span m="646480">whether</span> <span
  m="646650">you</span> <span m="646830">start</span> <span m="647230">at</span>
  <span m="647340">0</span> <span m="647640">or</span> <span
  m="647750">1,</span> <span m="648220">but</span> <span m="649240">let's</span>
  <span m="649500">say</span> <span m="649650">we</span> <span
  m="649800">start</span> <span m="650160">at</span> <span
  m="651450">one.</span> <span m="652890">So</span> <span m="653220">if</span>
  <span m="653320">you</span> <span m="653820">say</span> <span
  m="654150">rank</span> <span m="654540">of</span> <span m="654880">the</span>
  <span m="654970">key</span> <span m="655150">that</span> <span
  m="655220">happens</span> <span m="655530">to</span> <span
  m="655620">be</span> <span m="655700">the</span> <span
  m="655770">minimum,</span> <span m="656100">you</span> <span
  m="656230">want</span> <span m="656340">to</span> <span m="656380">get</span>
  <span m="656550">one.</span> <span m="656850">If</span> <span
  m="656960">you</span> <span m="657080">say</span> <span m="657280">rank</span>
  <span m="657610">of</span> <span m="657880">the</span> <span
  m="657970">key</span> <span m="658150">that</span> <span
  m="658240">happens</span> <span m="658570">to</span> <span
  m="658660">be</span> <span m="658760">the</span> <span
  m="658840">median,</span> <span m="659200">you</span> <span
  m="659310">want</span> <span m="659450">to</span> <span m="659500">get</span>
  <span m="659630">n</span> <span m="659770">over</span> <span
  m="659960">2</span> <span m="661290">plus</span> <span m="661660">1,</span>
  <span m="662680">and</span> <span m="662800">so</span> <span
  m="662940">on.</span></p><p><span m="665430">So</span> <span
  m="665630">it's</span> <span m="665790">a</span> <span
  m="665830">natural</span> <span m="666160">thing</span> <span
  m="666320">you</span> <span m="666430">might</span> <span
  m="666660">want</span> <span m="666930">to</span> <span m="667020">find</span>
  <span m="667280">out.</span> <span m="668960">And</span> <span
  m="670570">the</span> <span m="670660">converse</span> <span
  m="671400">operation</span> <span m="672210">is</span> <span
  m="672400">select,</span> <span m="674100">let's</span> <span m="674520">say
  of i,</span> <span m="675670">which</span> <span m="675940">is,</span> <span
  m="677100">give</span> <span m="677330">me</span> <span m="677700">the</span>
  <span m="677880">key</span> <span m="678290">of</span> <span
  m="678650">rank</span> <span m="678940">i.</span></p><p><span
  m="686710">We've</span> <span m="686880">talked</span> <span
  m="687190">about</span> <span m="688610">select</span> <span
  m="690130">as</span> <span m="690410">an</span> <span
  m="690560">offline</span> <span m="691110">operation.</span> <span
  m="691620">Given</span> <span m="691930">an</span> <span
  m="692290">array,</span> <span m="693610">find me</span> <span
  m="694220">the</span> <span m="694320">median.</span> <span
  m="694720">Or</span> <span m="694800">find</span> <span m="695070">me</span>
  <span m="695260">the</span> <span m="695460">n</span> <span
  m="695620">over</span> <span m="696020">seventh</span> <span
  m="697550">rank</span> <span m="698010">item.</span> <span
  m="698960">And</span> <span m="699120">we</span> <span m="699220">can</span>
  <span m="699340">do</span> <span m="699430">that</span> <span
  m="699620">in</span> <span m="699730">linear</span> <span
  m="700110">time</span> <span m="701270">given</span> <span
  m="701580">no</span> <span m="701760">data</span> <span
  m="702020">structure.</span> <span m="702810">Here,</span> <span
  m="703090">we</span> <span m="703210">want</span> <span m="703400">a</span>
  <span m="703470">data</span> <span m="703700">structure</span> <span
  m="704540">so</span> <span m="704720">that</span> <span m="704830">we</span>
  <span m="704960">can</span> <span m="705100">find</span> <span
  m="705600">the</span> <span m="705680">median,</span> <span
  m="706240">or</span> <span m="706510">the</span> <span
  m="707620">seventh</span> <span m="708270">item,</span> <span
  m="708900">or</span> <span m="709130">the</span> <span m="709310">n</span>
  <span m="709450">over</span> <span m="709660">seventh</span> <span
  m="710110">key,</span> <span m="711450">whatever</span> <span
  m="712670">in</span> <span m="712770">log n</span> <span
  m="713590">time.</span> <span m="714630">We</span> <span
  m="714770">want</span> <span m="714940">to</span> <span m="715000">do</span>
  <span m="715160">all</span> <span m="715390">of</span> <span
  m="715480">these</span> <span m="716290">in</span> <span m="717900">log
  n</span> <span m="718235">per</span> <span
  m="718570">operation.</span></p><p><span m="725570">OK.</span> <span
  m="725740">So</span> <span m="726030">in</span> <span
  m="726130">particular,</span> <span m="726830">rank</span> <span
  m="727300">of</span> <span m="727410">selective</span> <span
  m="728070">i</span> <span m="728590">should</span> <span
  m="728800">equal</span> <span m="729090">i.</span> <span
  m="730120">We're</span> <span m="730280">trying</span> <span
  m="730490">to</span> <span m="730550">find</span> <span m="730780">the</span>
  <span m="730880">item</span> <span m="731490">of</span> <span
  m="731640">that</span> <span m="731820">rank.</span> <span
  m="734970">So</span> <span m="735340">far,</span> <span m="735530">so</span>
  <span m="735700">good.</span> <span m="737520">And</span> <span
  m="740550">just</span> <span m="740780">to</span> <span m="740870">plug</span>
  <span m="741330">these</span> <span m="741580">two</span> <span
  m="741720">parts</span> <span m="742030">together.</span> <span
  m="742410">We</span> <span m="742520">have</span> <span m="742740">this</span>
  <span m="743430">data</span> <span m="743610">structure</span> <span
  m="743960">augmentation</span> <span m="744590">tool,</span> <span
  m="745290">we</span> <span m="745410">have</span> <span m="745520">this</span>
  <span m="745680">goal</span> <span m="745920">we</span> <span
  m="746040">want</span> <span m="746270">to</span> <span
  m="746370">achieve,</span> <span m="747170">we're</span> <span
  m="747290">going</span> <span m="747470">to</span> <span
  m="747570">achieve</span> <span m="747990">this</span> <span
  m="748230">goal</span> <span m="749050">by</span> <span
  m="749200">applying</span> <span m="749710">this</span> <span
  m="749970">technique</span> <span m="750990">where</span> <span
  m="751270">f</span> <span m="751710">is</span> <span m="752000">just</span>
  <span m="752340">the</span> <span m="752430">subtree</span> <span
  m="752860">size.</span> <span m="753125">It's the</span> <span
  m="753390">number</span> <span m="753850">of</span> <span
  m="753930">nodes</span> <span m="754850">in</span> <span
  m="755110">that</span> <span m="755460">subtree</span> <span
  m="756350">because</span> <span m="756500">that</span> <span
  m="756690">will</span> <span m="756820">let</span> <span m="756980">us</span>
  <span m="757130">compute</span> <span m="757510">rank.</span></p><p><span
  m="759880">So</span> <span m="761350">we're</span> <span
  m="761490">going</span> <span m="761630">to</span> <span m="761680">use</span>
  <span m="765030">easy</span> <span m="765360">tree</span> <span
  m="765610">augmentation</span> <span m="776460">with</span> <span
  m="777290">f</span> <span m="779082">of</span> <span m="780880">subtree</span>
  <span m="783890">equal</span> <span m="784270">to</span> <span
  m="784560">the</span> <span m="784680">number</span> <span
  m="785040">of</span> <span m="785160">nodes</span> <span m="785530">in</span>
  <span m="785640">the</span> <span m="785730">subtree.</span> <span
  m="791230">So</span> <span m="791560">in</span> <span m="791700">order</span>
  <span m="791900">for</span> <span m="792020">this</span> <span
  m="792220">to</span> <span m="792310">apply,</span> <span m="793180">we</span>
  <span m="793310">need</span> <span m="793490">to</span> <span
  m="793580">check</span> <span m="793970">that</span> <span
  m="794190">given</span> <span m="794460">a</span> <span m="794530">node</span>
  <span m="794820">x</span> <span m="796030">we</span> <span
  m="796200">can</span> <span m="796340">compute</span> <span
  m="796670">x.f</span> <span m="796910">just</span> <span
  m="797680">using</span> <span m="798090">its</span> <span
  m="798250">children.</span> <span m="799160">This</span> <span
  m="799360">is</span> <span m="799490">easy.</span> <span m="803330">We</span>
  <span m="803400">just</span> <span m="804030">add</span> <span
  m="804180">everything</span> <span m="804540">up.</span> <span
  m="804780">So</span> <span m="805040">x.f</span> <span m="805290">would</span>
  <span m="806450">be</span> <span m="806740">equal</span> <span
  m="807140">to</span> <span m="808180">1.</span> <span m="809092">That's</span>
  <span m="809550">for</span> <span m="809710">x.</span> <span
  m="810770">Plus</span> <span m="811770">the</span> <span m="811890">sum</span>
  <span m="813280">of</span> <span m="813960">c.f</span> <span
  m="816310">for</span> <span m="816480">every</span> <span
  m="816750">child</span> <span m="817260">c.</span></p><p><span
  m="821980">I'll</span> <span m="822110">write</span> <span
  m="822330">this</span> <span m="822570">as</span> <span m="822760">a</span>
  <span m="823110">python</span> <span m="823680">interpolation</span> <span
  m="826250">so</span> <span m="826480">it</span> <span m="826580">looks</span>
  <span m="826700">a</span> <span m="826750">little</span> <span
  m="826900">more</span> <span m="827070">like</span> <span m="827260">an</span>
  <span m="827330">algorithm.</span> <span m="828690">I'm</span> <span
  m="828870">trying</span> <span m="829120">to</span> <span m="829190">be</span>
  <span m="829510">generic</span> <span m="830050">here.</span> <span
  m="830330">If</span> <span m="830440">it's</span> <span m="830570">a</span>
  <span m="830620">binary</span> <span m="831100">search</span> <span
  m="831420">tree</span> <span m="831620">you</span> <span
  m="831720">just</span> <span m="832000">do</span> <span
  m="832830">x.left.f,</span> <span m="835070">plus</span> <span
  m="835560">x.right.f.</span> <span m="836840">But</span> <span m="836990">this
  will</span> <span m="837290">work</span> <span m="837560">also</span> <span
  m="837860">for</span> <span m="838010">2-3</span> <span
  m="838370">trees.</span> <span m="839240">Pick</span> <span
  m="839420">your</span> <span m="839550">favorite</span> <span
  m="840790">data</span> <span m="841110">structure.</span> <span
  m="842320">As</span> <span m="842460">long</span> <span m="842640">as</span>
  <span m="842720">there's</span> <span m="842840">a</span> <span
  m="842920">constant</span> <span m="843410">number</span> <span
  m="843640">of</span> <span m="843700">children</span> <span
  m="844830">then</span> <span m="845660">this</span> <span
  m="845960">will</span> <span m="846040">take</span> <span
  m="846220">constant</span> <span m="846590">time.</span> <span
  m="847420">So</span> <span m="847620">we</span> <span
  m="847720">satisfied</span> <span m="848190">this</span> <span
  m="848370">condition.</span> <span m="849440">So</span> <span
  m="849600">we</span> <span m="849700">can</span> <span m="849820">do</span>
  <span m="850100">easy</span> <span m="850320">tree</span> <span
  m="850500">augmentation.</span> <span m="851710">And</span> <span
  m="851870">now</span> <span m="852040">we</span> <span m="852130">know</span>
  <span m="852310">we</span> <span m="852420">have</span> <span
  m="852650">subtree</span> <span m="853030">sizes.</span> <span
  m="853600">So</span> <span m="853690">given</span> <span m="853970">any</span>
  <span m="854150">node.</span> <span m="854520">We</span> <span
  m="854530">know</span> <span m="854700">the</span> <span
  m="854780">number</span> <span m="855030">of</span> <span
  m="856450">descendants</span> <span m="857080">below</span> <span
  m="857960">that</span> <span m="858250">node.</span> <span
  m="859930">So</span> <span m="860110">that's</span> <span
  m="860340">cool.</span></p><p><span m="860790">It</span> <span
  m="860980">lets</span> <span m="861240">us</span> <span
  m="861420">compute</span> <span m="863000">rank in</span> <span
  m="863380">select.</span> <span m="864240">I'll</span> <span
  m="864410">just</span> <span m="865620">give</span> <span
  m="865770">you</span> <span m="865860">those</span> <span
  m="866040">algorithms,</span> <span m="866570">quickly.</span> <span
  m="869130">We</span> <span m="869240">can</span> <span m="869380">check</span>
  <span m="869660">that</span> <span m="869800">they're</span> <span
  m="870700">log n</span> <span m="871150">time.</span></p><p><span
  m="879360">Yeah.</span> <span m="879630">So</span> <span m="881110">the</span>
  <span m="881550">idea</span> <span m="881740">is</span> <span
  m="881840">pretty</span> <span m="882030">simple.</span> <span
  m="884670">You</span> <span m="884710">have</span> <span
  m="884950">some</span> <span m="885190">key--</span> <span
  m="885410">let's</span> <span m="885660">think</span> <span
  m="885850">about</span> <span m="886200">binary</span> <span
  m="886600">trees</span> <span m="887630">now,</span> <span
  m="887990">because</span> <span m="888300">it's</span> <span
  m="888460">a</span> <span m="888510">little</span> <span m="888710">bit</span>
  <span m="888840">easier.</span> <span m="890360">We</span> <span
  m="890450">have</span> <span m="890650">some</span> <span
  m="892180">item</span> <span m="892800">x.</span> <span m="895250">It</span>
  <span m="895370">has</span> <span m="895660">a</span> <span
  m="895730">left</span> <span m="896330">subtree,</span> <span
  m="897560">right</span> <span m="897840">subtree.</span> <span
  m="898810">And</span> <span m="898940">now</span> <span
  m="899070">let's</span> <span m="900680">look</span> <span
  m="900890">up</span> <span m="901110">from</span> <span m="901370">x.</span>
  <span m="902160">Just</span> <span m="902350">keep</span> <span
  m="902540">calling</span> <span m="903470">x.parent.</span> <span
  m="905670">So</span> <span m="905800">sometimes</span> <span
  m="906320">the</span> <span m="906410">parent</span> <span
  m="906770">is</span> <span m="906900">to</span> <span m="907010">the</span>
  <span m="907130">right</span> <span m="907380">of</span> <span
  m="907480">us</span> <span m="908950">and</span> <span
  m="909040">sometimes</span> <span m="909420">the</span> <span
  m="909510">parent</span> <span m="909840">is</span> <span m="909980">to
  the</span> <span m="910090">left</span> <span m="910410">of</span> <span
  m="910500">us.</span> <span m="911890">I'm</span> <span
  m="912250">going</span> <span m="912340">to</span> <span
  m="912430">draw</span> <span m="912680">this</span> <span m="913100">in</span>
  <span m="913300">a,</span> <span m="913610">kind</span> <span
  m="913820">of,</span> <span m="913910">funny</span> <span
  m="914220">way.</span></p><p><span m="918530">But</span> <span
  m="918710">this</span> <span m="918900">funny</span> <span
  m="919180">way</span> <span m="919410">has</span> <span m="919710">a</span>
  <span m="919760">very</span> <span m="920040">special</span> <span
  m="920430">property,</span> <span m="922810">which</span> <span
  m="922960">is</span> <span m="923150">that the</span> <span
  m="923730">x-coordinate</span> <span m="924510">in</span> <span
  m="924640">this</span> <span m="924830">diagram</span> <span
  m="925890">is</span> <span m="926100">the</span> <span m="926220">key</span>
  <span m="926440">value.</span> <span m="927220">Or</span> <span
  m="927380">is</span> <span m="927490">the</span> <span
  m="927640">sorted</span> <span m="927990">order</span> <span
  m="928320">of</span> <span m="928390">the</span> <span m="928490">keys,</span>
  <span m="928960">right?</span> <span m="929450">Everything</span> <span
  m="929840">in</span> <span m="929900">the</span> <span m="929980">left</span>
  <span m="930220">subtree</span> <span m="930570">of</span> <span
  m="930650">x</span> <span m="931550">has</span> <span m="932010">a</span>
  <span m="932060">value</span> <span m="932460">less</span> <span
  m="932760">than</span> <span m="932910">x.</span> <span m="934040">If
  we</span> <span m="934160">say</span> <span m="934460">all</span> <span
  m="934600">the</span> <span m="934680">keys</span> <span m="935010">are</span>
  <span m="935140">different.</span> <span m="935940">Everything</span> <span
  m="936300">to</span> <span m="936410">the</span> <span m="936520">right</span>
  <span m="936740">of</span> <span m="936840">x</span> <span
  m="937160">has</span> <span m="937380">a</span> <span m="937420">value</span>
  <span m="937670">greater</span> <span m="937940">than</span> <span
  m="938110">x.</span> <span m="938760">If</span> <span m="939810">x</span>
  <span m="940050">was</span> <span m="940220">the</span> <span
  m="940320">left</span> <span m="940630">child</span> <span
  m="941010">of</span> <span m="941110">its</span> <span
  m="941270">parent,</span> <span m="942130">that</span> <span
  m="942310">means</span> <span m="942540">this</span> <span
  m="942780">thing</span> <span m="942980">is</span> <span
  m="943090">also</span> <span m="943490">greater</span> <span
  m="943830">than</span> <span m="943990">x.</span> <span m="945860">And</span>
  <span m="946030">if</span> <span m="946170">we</span> <span
  m="946300">follow</span> <span m="946720">a</span> <span
  m="946820">parent</span> <span m="947290">and</span> <span
  m="948270">this</span> <span m="948430">was</span> <span m="948740">the</span>
  <span m="948940">right</span> <span m="949270">child</span> <span
  m="949680">of</span> <span m="949750">that</span> <span
  m="949960">parent,</span> <span m="950820">that</span> <span
  m="950990">means</span> <span m="951200">this</span> <span
  m="951410">thing</span> <span m="951700">is</span> <span
  m="951910">less</span> <span m="952190">than</span> <span m="952330">x.</span>
  <span m="952910">So</span> <span m="953010">that's</span> <span
  m="953200">why</span> <span m="953290">I</span> <span m="953340">drew</span>
  <span m="953600">it</span> <span m="953730">all</span> <span
  m="953950">the</span> <span m="954020">way</span> <span m="954160">over</span>
  <span m="954340">to</span> <span m="954440">the</span> <span
  m="954530">left.</span> <span m="955330">This</span> <span
  m="955520">thing</span> <span m="955730">is</span> <span
  m="955840">also</span> <span m="956140">less</span> <span
  m="956370">than</span> <span m="956490">x</span> <span
  m="956750">because</span> <span m="956980">it</span> <span
  m="957070">was</span> <span m="957280">a,</span> <span m="958010">I'll</span>
  <span m="958070">call it</span> <span m="958340">a</span> <span
  m="958400">left</span> <span m="958790">parent.</span> <span
  m="959720">Here</span> <span m="960000">we</span> <span m="960100">have</span>
  <span m="960260">a</span> <span m="960340">right</span> <span
  m="960590">parent,</span> <span m="961010">so</span> <span
  m="961090">that</span> <span m="961270">means</span> <span
  m="961470">this</span> <span m="961640">is</span> <span
  m="961740">something</span> <span m="962080">greater</span> <span
  m="962360">than</span> <span m="962530">x.</span> <span m="964060">And</span>
  <span m="964340">over</span> <span m="964530">here</span> <span
  m="964770">we</span> <span m="964870">have a</span> <span
  m="965110">left</span> <span m="965340">parent,</span> <span
  m="965640">so</span> <span m="965780">this</span> <span m="965980">is</span>
  <span m="966050">something</span> <span m="966380">less</span> <span
  m="966560">than</span> <span m="966670">x.</span> <span
  m="966860">Let's</span> <span m="967010">say</span> <span
  m="967120">that's</span> <span m="967390">the</span> <span
  m="967520">root.</span></p><p><span m="968200">In</span> <span
  m="968330">general,</span> <span m="968720">there's</span> <span
  m="968830">going</span> <span m="968960">to</span> <span m="969020">be</span>
  <span m="969140">some</span> <span m="969540">left</span> <span
  m="969860">edges</span> <span m="970240">and</span> <span
  m="970390">some</span> <span m="970640">right</span> <span
  m="970860">edges</span> <span m="971330">as</span> <span m="971550">we</span>
  <span m="971730">go</span> <span m="972480">up.</span> <span
  m="973530">These</span> <span m="973730">arrows</span> <span
  m="974030">will</span> <span m="974120">go</span> <span
  m="974410">either</span> <span m="974720">left</span> <span
  m="975700">or</span> <span m="975860">right</span> <span m="976120">in</span>
  <span m="976260">a</span> <span m="976310">binary</span> <span
  m="976690">tree.</span> <span m="978170">So</span> <span m="978560">the</span>
  <span m="978740">rank</span> <span m="979060">of</span> <span
  m="979160">x</span> <span m="979760">is</span> <span m="980020">just</span>
  <span m="980920">1</span> <span m="981360">plus</span> <span
  m="981860">the</span> <span m="982060">number</span> <span
  m="982510">of</span> <span m="982590">nodes</span> <span
  m="983060">that</span> <span m="983210">are</span> <span
  m="983330">less</span> <span m="983620">than</span> <span m="983750">x.</span>
  <span m="984200">Number</span> <span m="984450">of</span> <span
  m="984560">keys</span> <span m="984920">that</span> <span
  m="985030">are</span> <span m="985120">less</span> <span
  m="985340">than</span> <span m="985450">x.</span> <span m="986410">So</span>
  <span m="986650">there's</span> <span m="986830">these</span> <span
  m="987030">guys,</span> <span m="988640">there's</span> <span
  m="988850">these</span> <span m="989060">guys,</span> <span
  m="990370">and</span> <span m="990910">there's</span> <span
  m="991170">whatever's</span> <span m="991790">hanging</span> <span
  m="992300">off--</span> <span m="993190">OK.</span> <span
  m="993390">Here</span> <span m="993650">I've</span> <span
  m="994210">almost</span> <span m="994670">violated</span> <span
  m="995120">my</span> <span m="995290">x-coordinate</span> <span
  m="995800">rule.</span> <span m="996520">If I</span> <span
  m="996620">make</span> <span m="996800">these</span> <span
  m="996960">really</span> <span m="997240">narrow,</span> <span
  m="997730">that's</span> <span m="997950">right.</span> <span
  m="1000940">All</span> <span m="1001330">of</span> <span
  m="1001460">these</span> <span m="1001890">things,</span> <span
  m="1003610">all</span> <span m="1003760">of</span> <span
  m="1003830">these</span> <span m="1004020">nodes</span> <span
  m="1004300">in</span> <span m="1004380">the</span> <span
  m="1004460">left</span> <span m="1004730">subtrees</span> <span
  m="1005280">of</span> <span m="1005390">these</span> <span m="1005560">less
  than</span> <span m="1005970">x</span> <span m="1006190">nodes</span> <span
  m="1006470">will</span> <span m="1006600">also</span> <span
  m="1006960">be</span> <span m="1007610">less</span> <span
  m="1007870">than</span> <span m="1007980">x.</span> <span
  m="1008810">If</span> <span m="1008900">you</span> <span
  m="1008990">think</span> <span m="1009180">about</span> <span
  m="1009430">these</span> <span m="1009600">other</span> <span
  m="1009820">subtrees,</span> <span m="1010310">they're</span> <span
  m="1010460">going</span> <span m="1010580">to</span> <span
  m="1010680">be</span> <span m="1010910">bigger</span> <span
  m="1011130">than</span> <span m="1011290">x.</span> <span
  m="1011610">So</span> <span m="1011750">we</span> <span
  m="1011860">don't</span> <span m="1011990">really</span> <span
  m="1012200">care</span> <span m="1012410">about</span> <span
  m="1012630">them.</span></p><p><span m="1014760">So</span> <span
  m="1014980">we</span> <span m="1015070">just</span> <span
  m="1015220">want</span> <span m="1015350">to</span> <span
  m="1015440">count</span> <span m="1015800">up</span> <span
  m="1017470">all</span> <span m="1019640">these</span> <span
  m="1019900">nodes</span> <span m="1021800">and</span> <span
  m="1022230">all</span> <span m="1022420">of</span> <span
  m="1022490">these</span> <span m="1022710">nodes.</span> <span
  m="1026660">So</span> <span m="1026869">the</span> <span
  m="1026990">algorithm</span> <span m="1027500">to</span> <span
  m="1027630">do</span> <span m="1027760">that</span> <span
  m="1028040">is</span> <span m="1028319">pretty</span> <span
  m="1028540">simple.</span> <span m="1036030">We're</span> <span
  m="1036369">just</span> <span m="1036650">going</span> <span
  m="1036950">to</span> <span m="1038700">start</span> <span
  m="1039099">out</span> <span m="1039500">with--</span></p><p><span
  m="1053550">I'm</span> <span m="1053740">going</span> <span
  m="1053840">to</span> <span m="1053900">switch</span> <span
  m="1054280">from</span> <span m="1054630">this</span> <span
  m="1054970">f</span> <span m="1055260">notation</span> <span
  m="1056390">to</span> <span m="1056940">size.</span> <span
  m="1057530">That's</span> <span m="1057760">a</span> <span
  m="1057800">little</span> <span m="1058040">more</span> <span
  m="1058330">natural.</span> <span m="1058720">In</span> <span
  m="1058810">general,</span> <span m="1059070">you</span> <span
  m="1059170">might</span> <span m="1059350">have</span> <span
  m="1060050">many</span> <span m="1060700">functions.</span> <span
  m="1062210">Size</span> <span m="1062540">is</span> <span
  m="1062870">the</span> <span m="1062970">usual</span> <span
  m="1064870">notation</span> <span m="1065420">for</span> <span
  m="1066020">subtree</span> <span m="1066370">size.</span> <span
  m="1068600">So</span> <span m="1068780">we</span> <span
  m="1068870">start</span> <span m="1069180">out</span> <span
  m="1069420">by</span> <span m="1069700">counting</span> <span
  m="1070140">up</span> <span m="1070250">how</span> <span
  m="1070410">many</span> <span m="1070660">items</span> <span
  m="1070950">are</span> <span m="1071020">here.</span> <span
  m="1072100">And</span> <span m="1072480">if</span> <span m="1072610">we</span>
  <span m="1072710">want</span> <span m="1072890">to</span> <span
  m="1072960">start</span> <span m="1073270">at</span> <span
  m="1073830">a</span> <span m="1073980">rank</span> <span m="1074250">of</span>
  <span m="1074360">1,</span> <span m="1074690">if</span> <span
  m="1074810">the</span> <span m="1074910">min</span> <span
  m="1075170">has</span> <span m="1075430">rank</span> <span
  m="1075670">1,</span> <span m="1075920">then</span> <span m="1076050">I</span>
  <span m="1076110">should</span> <span m="1076280">also</span> <span
  m="1076460">do</span> <span m="1076610">plus</span> <span m="1076970">1</span>
  <span m="1077290">for</span> <span m="1077560">x</span> <span
  m="1077800">itself.</span> <span m="1078820">If</span> <span
  m="1078870">you</span> <span m="1078960">wanted</span> <span
  m="1079130">to</span> <span m="1079190">start</span> <span
  m="1079420">at</span> <span m="1079500">zero</span> <span
  m="1079860">you</span> <span m="1079980">just</span> <span
  m="1080230">omit</span> <span m="1080460">that</span> <span
  m="1080630">plus</span> <span m="1080870">1.</span> <span
  m="1082490">And</span> <span m="1082630">then,</span> <span m="1082960">all
  I</span> <span m="1083200">do</span> <span m="1083560">is</span> <span
  m="1083870">walk</span> <span m="1084360">up</span> <span
  m="1085300">from</span> <span m="1086090">x</span> <span m="1086860">to</span>
  <span m="1087330">the</span> <span m="1087470">root</span> <span
  m="1087650">of</span> <span m="1087720">the</span> <span
  m="1087830">tree.</span> <span m="1089940">And</span> <span
  m="1092110">whenever</span> <span m="1095090">we</span> <span
  m="1095240">go</span> <span m="1095710">left</span> <span
  m="1099720">from,</span> <span m="1100130">say</span> <span
  m="1100450">x</span> <span m="1100870">to</span> <span m="1101270">x</span>
  <span m="1101610">prime.</span> <span m="1102340">So</span> <span
  m="1102440">that</span> <span m="1102600">means</span> <span
  m="1102900">we</span> <span m="1103030">have</span> <span
  m="1103750">an</span> <span m="1103920">x</span> <span
  m="1104180">prime.</span> <span m="1105160">It's</span> <span
  m="1105820">right</span> <span m="1106110">child</span> <span
  m="1106630">is</span> <span m="1106830">x.</span> <span m="1107150">And</span>
  <span m="1107280">so</span> <span m="1107570">when</span> <span
  m="1107730">we</span> <span m="1107880">went</span> <span
  m="1108140">from</span> <span m="1108310">x</span> <span m="1108560">to</span>
  <span m="1108640">its</span> <span m="1108780">parent</span> <span
  m="1109200">we</span> <span m="1109340">went</span> <span
  m="1109620">to</span> <span m="1109740">the</span> <span
  m="1109870">left.</span></p><p><span m="1111280">Then</span> <span
  m="1111600">we</span> <span m="1111730">say</span> <span
  m="1113130">rank</span> <span m="1114470">plus</span> <span
  m="1115120">equals</span> <span m="1117240">x prime.left.size</span> <span
  m="1124910">plus</span> <span m="1125360">1</span> <span
  m="1126030">for</span> <span m="1126280">x</span> <span
  m="1126510">prime</span> <span m="1126760">itself.</span> <span
  m="1128620">And</span> <span m="1128790">maybe</span> <span m="1129970">x
  prime.left.size</span> <span m="1131490">is</span> <span
  m="1131900">zero.</span> <span m="1132220">Maybe</span> <span
  m="1132480">there's</span> <span m="1132690">no</span> <span
  m="1132830">nodes</span> <span m="1133100">over</span> <span
  m="1133260">there.</span> <span m="1133490">But</span> <span
  m="1134170">at</span> <span m="1134290">the</span> <span
  m="1134360">very</span> <span m="1134580">least</span> <span
  m="1134810">we</span> <span m="1134900">have</span> <span
  m="1135090">to</span> <span m="1135280">count</span> <span
  m="1136200">those</span> <span m="1136510">nodes</span> <span
  m="1137490">that</span> <span m="1137650">are</span> <span
  m="1137740">to</span> <span m="1137830">the</span> <span
  m="1137900">left</span> <span m="1138150">of</span> <span
  m="1138240">us.</span> <span m="1139290">And</span> <span
  m="1139650">if</span> <span m="1139770">there's</span> <span
  m="1139990">anything</span> <span m="1140380">down</span> <span
  m="1140590">here</span> <span m="1140960">we</span> <span
  m="1141120">add</span> <span m="1141270">up</span> <span
  m="1141390">all</span> <span m="1141540">those</span> <span
  m="1141760">things.</span> <span m="1142550">So</span> <span
  m="1142730">that</span> <span m="1142890">lets</span> <span
  m="1143090">us</span> <span m="1143220">compute</span> <span
  m="1143550">rank.</span></p><p><span m="1144310">How</span> <span
  m="1144460">long</span> <span m="1144640">does</span> <span
  m="1144770">it</span> <span m="1144910">take?</span> <span
  m="1145840">Well,</span> <span m="1147210">we're</span> <span
  m="1147320">just</span> <span m="1147490">walking</span> <span
  m="1147950">up</span> <span m="1148550">one</span> <span
  m="1148880">path</span> <span m="1149240">from</span> <span
  m="1149450">a</span> <span m="1149490">leaf</span> <span m="1149770">to</span>
  <span m="1150050">a root--</span> <span m="1150410">or not</span> <span
  m="1150570">necessarily</span> <span m="1150860">a leaf,</span> <span
  m="1151150">but</span> <span m="1151320">from</span> <span
  m="1151460">some</span> <span m="1151710">node</span> <span
  m="1151970">x</span> <span m="1152590">to</span> <span m="1152730">the</span>
  <span m="1152850">root.</span> <span m="1153540">And</span> <span
  m="1154050">as</span> <span m="1154200">long</span> <span
  m="1154400">we're</span> <span m="1154500">using</span> <span
  m="1154890">a</span> <span m="1154940">balance</span> <span
  m="1155430">structure</span> <span m="1156050">like</span> <span
  m="1156890">AVL</span> <span m="1157250">trees.</span> <span
  m="1158340">I</span> <span m="1158660">guess</span> <span m="1159060">I</span>
  <span m="1159130">want</span> <span m="1159350">binary</span> <span
  m="1159780">here,</span> <span m="1159960">so</span> <span
  m="1160100">let's</span> <span m="1160290">say</span> <span
  m="1160540">AVL</span> <span m="1160810">trees.</span> <span
  m="1162390">Then</span> <span m="1163190">this</span> <span
  m="1163350">will</span> <span m="1163460">take</span> <span m="1163700">log
  n</span> <span m="1164100">time.</span> <span m="1165190">So</span> <span
  m="1165340">I'm</span> <span m="1165410">spending</span> <span
  m="1165810">constant</span> <span m="1166340">work</span> <span
  m="1166760">per</span> <span m="1166990">step,</span> <span m="1168270">and
  there's</span> <span m="1168640">log n</span> <span m="1169020">steps.</span>
  <span m="1170620">Clear?</span></p><p><span m="1172140">So</span> <span
  m="1172470">that's</span> <span m="1172700">good</span> <span
  m="1172850">old</span> <span m="1173020">rank.</span> <span
  m="1174790">Easy</span> <span m="1175050">to</span> <span
  m="1175160">do</span> <span m="1175330">once</span> <span m="1175480">you
  have</span> <span m="1175630">subtree</span> <span m="1175930">size.</span>
  <span m="1176300">Let's</span> <span m="1176520">do</span> <span
  m="1176700">select</span> <span m="1177150">for</span> <span
  m="1177270">fun.</span></p><p><span m="1194980">This</span> <span
  m="1195140">may</span> <span m="1195280">seem</span> <span
  m="1195480">like</span> <span m="1195690">review,</span> <span
  m="1196040">but</span> <span m="1196360">I drew</span> <span
  m="1196610">out</span> <span m="1196930">this</span> <span
  m="1197090">picture</span> <span m="1197360">explicitly</span> <span
  m="1197820">because</span> <span m="1198030">we're</span> <span
  m="1198140">going</span> <span m="1198280">to</span> <span
  m="1198320">do</span> <span m="1198450">it</span> <span m="1198610">a</span>
  <span m="1198700">lot</span> <span m="1199090">today.</span> <span
  m="1200110">We'll have</span> <span m="1200250">pictures</span> <span
  m="1200610">like</span> <span m="1200790">this</span> <span
  m="1201280">a</span> <span m="1201340">bunch</span> <span
  m="1201610">of</span> <span m="1201690">times.</span> <span
  m="1202530">Really</span> <span m="1202730">helps</span> <span
  m="1203010">to</span> <span m="1203120">think</span> <span
  m="1203320">about</span> <span m="1203580">where</span> <span
  m="1203810">the</span> <span m="1203930">nodes</span> <span
  m="1204190">are,</span> <span m="1204380">which</span> <span
  m="1204550">ones</span> <span m="1204790">are</span> <span
  m="1205010">less</span> <span m="1205280">than</span> <span
  m="1205430">x,</span> <span m="1205750">which</span> <span
  m="1205820">ones</span> <span m="1206010">are</span> <span
  m="1206080">greater</span> <span m="1206290">than</span> <span
  m="1206460">x.</span> <span m="1208970">Let's</span> <span
  m="1209250">do</span> <span m="1209470">select</span> <span
  m="1209920">first.</span> <span m="1213500">This</span> <span
  m="1213710">you</span> <span m="1213850">may</span> <span
  m="1213970">not</span> <span m="1214150">have</span> <span
  m="1214260">seen</span> <span m="1214520">in</span> <span
  m="1214680">006.</span></p><p><span m="1219590">So</span> <span
  m="1219750">we're</span> <span m="1219860">going</span> <span
  m="1219970">to</span> <span m="1220050">do</span> <span m="1220160">the</span>
  <span m="1220230">reverse.</span> <span m="1220750">We're</span> <span
  m="1220770">going</span> <span m="1220870">to</span> <span
  m="1220940">start</span> <span m="1221270">at</span> <span
  m="1221370">the</span> <span m="1221480">root</span> <span
  m="1222060">and</span> <span m="1222200">we're</span> <span
  m="1222340">going</span> <span m="1222460">to</span> <span
  m="1222520">walk</span> <span m="1222860">down.</span> <span
  m="1225020">Sounds</span> <span m="1225280">easy</span> <span
  m="1225500">enough.</span> <span m="1226570">But</span> <span
  m="1226840">now</span> <span m="1227870">walking</span> <span
  m="1228300">down</span> <span m="1228540">is</span> <span
  m="1228680">kind</span> <span m="1228860">of</span> <span
  m="1228930">like</span> <span m="1229090">doing</span> <span
  m="1229310">a</span> <span m="1229370">search</span> <span
  m="1229790">but</span> <span m="1229940">we</span> <span
  m="1230050">don't</span> <span m="1230280">have</span> <span
  m="1230490">a</span> <span m="1230560">key</span> <span
  m="1230800">we're</span> <span m="1230950">searching</span> <span
  m="1231310">for,</span> <span m="1231530">we</span> <span
  m="1231650">have</span> <span m="1231950">a</span> <span
  m="1232050">rank</span> <span m="1232450">we're</span> <span
  m="1232560">searching</span> <span m="1232930">for.</span> <span
  m="1234380">So</span> <span m="1235650">what</span> <span
  m="1235960">is</span> <span m="1236270">that</span> <span
  m="1237100">rank?</span> <span m="1240410">Rank</span> <span m="1240510">is
  i.</span> <span m="1241550">OK.</span> <span m="1242300">So</span> <span
  m="1243080">on</span> <span m="1243230">the</span> <span
  m="1243330">other</span> <span m="1243490">hand,</span> <span
  m="1243830">we</span> <span m="1243840">have</span> <span
  m="1244140">the</span> <span m="1244240">node</span> <span
  m="1244520">x.</span> <span m="1244910">We'd</span> <span
  m="1245030">like</span> <span m="1245220">to</span> <span
  m="1245360">know</span> <span m="1246000">the</span> <span
  m="1246120">rank</span> <span m="1246380">of</span> <span m="1246520">x</span>
  <span m="1246830">and</span> <span m="1246930">compare</span> <span
  m="1247280">that</span> <span m="1247500">to</span> <span
  m="1247590">i.</span> <span m="1247810">That</span> <span
  m="1248020">will</span> <span m="1248140">tell</span> <span
  m="1248370">us</span> <span m="1248520">whether</span> <span
  m="1248700">we</span> <span m="1248800">should</span> <span
  m="1248990">go</span> <span m="1249130">left,</span> <span
  m="1249470">or</span> <span m="1249560">go</span> <span
  m="1249730">right,</span> <span m="1249990">or</span> <span
  m="1250160">whether</span> <span m="1250380">we</span> <span
  m="1250490">happen</span> <span m="1250790">to</span> <span
  m="1250860">find</span> <span m="1251120">the</span> <span
  m="1251230">item.</span></p><p><span m="1252260">Now</span> <span
  m="1252430">one</span> <span m="1252640">possibility</span> <span
  m="1253320">is</span> <span m="1253440">we</span> <span
  m="1253570">call</span> <span m="1253960">rank</span> <span
  m="1254250">of</span> <span m="1254360">x</span> <span m="1255335">to</span>
  <span m="1255660">find</span> <span m="1255900">the</span> <span
  m="1256000">rank</span> <span m="1256220">of</span> <span
  m="1256340">x.</span> <span m="1256620">But</span> <span
  m="1256840">that's</span> <span m="1257940">dangerous</span> <span
  m="1259470">because</span> <span m="1259700">I'm</span> <span
  m="1259810">going</span> <span m="1260030">to</span> <span
  m="1260120">have</span> <span m="1260750">a</span> <span
  m="1260830">four</span> <span m="1261080">loop</span> <span
  m="1261310">here</span> <span m="1262190">and</span> <span
  m="1263740">it's</span> <span m="1263930">going</span> <span
  m="1264050">to</span> <span m="1264190">take</span> <span m="1264410">log
  n</span> <span m="1264880">iterations.</span> <span m="1265500">If</span>
  <span m="1265660">at</span> <span m="1265810">every</span> <span
  m="1266120">iteration</span> <span m="1266600">of</span> <span
  m="1266720">computing</span> <span m="1267210">rank</span> <span
  m="1267460">of</span> <span m="1267570">x,</span> <span m="1268340">and</span>
  <span m="1268580">rank</span> <span m="1268940">costs</span> <span
  m="1269240">log n,</span> <span m="1270250">then</span> <span
  m="1270610">overall</span> <span m="1271000">cost</span> <span
  m="1271310">might</span> <span m="1271490">be</span> <span
  m="1271630">log</span> <span m="1271880">squared</span> <span
  m="1272270">n.</span> <span m="1273750">So</span> <span m="1273910">I</span>
  <span m="1274010">can't</span> <span m="1274420">afford</span> <span
  m="1275100">to--</span> <span m="1276190">I</span> <span
  m="1276290">want</span> <span m="1276510">to</span> <span
  m="1276570">know</span> <span m="1276690">what</span> <span
  m="1276810">the</span> <span m="1276900">rank</span> <span
  m="1277140">of</span> <span m="1277260">x</span> <span m="1277510">is</span>
  <span m="1279090">but</span> <span m="1279400">I</span> <span
  m="1279460">can't</span> <span m="1279930">afford</span> <span
  m="1280530">to</span> <span m="1280690">say</span> <span
  m="1281040">rank,</span> <span m="1281570">open paren,</span> <span
  m="1282130">x.</span> <span m="1282470">Because</span> <span
  m="1282670">that</span> <span m="1282980">recursive</span> <span
  m="1283420">call</span> <span m="1283730">will be</span> <span
  m="1283870">too</span> <span m="1284000">expensive.</span> <span
  m="1285110">So</span> <span m="1285290">what</span> <span
  m="1285480">is</span> <span m="1285680">the</span> <span
  m="1285790">rank</span> <span m="1286080">of</span> <span m="1286190">x</span>
  <span m="1286430">in</span> <span m="1286520">this</span> <span
  m="1286690">case?</span> <span m="1287040">This</span> <span
  m="1287200">is</span> <span m="1287300">a</span> <span
  m="1287350">little</span> <span m="1287530">special.</span> <span
  m="1290290">What's that?</span></p><p><span m="1291230">AUDIENCE: Number
  of</span> <span m="1291680">left children plus</span> <span
  m="1292130">1.</span></p><p><span m="1293030">PROFESSOR: Number</span> <span
  m="1293440">of</span> <span m="1293560">left,</span> <span
  m="1293960">or</span> <span m="1294010">the</span> <span
  m="1294130">size</span> <span m="1294530">of</span> <span
  m="1294610">the</span> <span m="1294690">left</span> <span
  m="1295000">subtree</span> <span m="1295430">plus</span> <span
  m="1295670">1.</span> <span m="1295990">Yep.</span> <span
  m="1301200">Plus</span> <span m="1301650">1</span> <span m="1302010">if</span>
  <span m="1302160">we're</span> <span m="1302710">counting,</span> <span
  m="1303320">starting</span> <span m="1303650">at</span> <span
  m="1303740">one.</span> <span m="1304930">Very</span> <span
  m="1305040">good.</span> <span m="1308529">I'm</span> <span
  m="1308980">slowly</span> <span m="1309340">getting</span> <span
  m="1309560">better.</span> <span m="1311600">Didn't</span> <span
  m="1311770">hit</span> <span m="1311910">anyone</span> <span
  m="1312210">this</span> <span m="1312360">time.</span> <span
  m="1313080">OK.</span></p><p><span m="1313490">So</span> <span
  m="1313690">at</span> <span m="1313780">least</span> <span
  m="1313970">for</span> <span m="1314050">the</span> <span
  m="1314180">root,</span> <span m="1314780">this</span> <span
  m="1314890">is</span> <span m="1315150">the</span> <span
  m="1315250">rank,</span> <span m="1315680">and</span> <span
  m="1315920">that</span> <span m="1315980">only</span> <span
  m="1316170">takes</span> <span m="1316400">us</span> <span
  m="1316520">constant</span> <span m="1316940">time</span> <span
  m="1317280">in</span> <span m="1317360">the</span> <span
  m="1317430">special</span> <span m="1317810">case.</span> <span m="1318160">So
  we'll</span> <span m="1318300">have</span> <span m="1318430">to</span> <span
  m="1318530">check</span> <span m="1318820">that</span> <span
  m="1318940">it's</span> <span m="1319100">still</span> <span
  m="1319320">holds</span> <span m="1319640">after</span> <span
  m="1319900">I</span> <span m="1319940">do the</span> <span
  m="1320120">loop.</span> <span m="1320580">But</span> <span
  m="1320700">it</span> <span m="1320820">will.</span> <span
  m="1322270">So,</span> <span m="1322590">cool.</span> <span
  m="1322920">Now</span> <span m="1323230">there</span> <span
  m="1323360">are</span> <span m="1323410">three</span> <span
  m="1323610">cases.</span> <span m="1325040">If</span> <span
  m="1325420">i</span> <span m="1325890">equals</span> <span
  m="1326360">rank.</span> <span m="1326770">If</span> <span
  m="1326890">the</span> <span m="1326990">rank</span> <span
  m="1327200">we're</span> <span m="1327290">searching</span> <span
  m="1327640">for</span> <span m="1327920">is</span> <span
  m="1328020">the</span> <span m="1328120">rank</span> <span
  m="1328360">that</span> <span m="1328460">we</span> <span
  m="1328580">happen</span> <span m="1328840">to</span> <span
  m="1328890">have,</span> <span m="1329230">then</span> <span
  m="1329390">we're</span> <span m="1329530">done,</span> <span
  m="1329840">right?</span> <span m="1330080">We</span> <span
  m="1330190">just</span> <span m="1330540">return</span> <span
  m="1330810">x.</span> <span m="1333000">That's the</span> <span
  m="1333190">easy</span> <span m="1333460">case.</span></p><p><span
  m="1334900">More</span> <span m="1335140">likely</span> <span
  m="1335730">is</span> <span m="1335990">that</span> <span m="1336310">I</span>
  <span m="1336490">will</span> <span m="1336640">be</span> <span
  m="1336890">either</span> <span m="1337200">less</span> <span
  m="1337460">than</span> <span m="1338060">or</span> <span
  m="1338240">greater</span> <span m="1338510">than</span> <span
  m="1338680">the</span> <span m="1338770">rank</span> <span
  m="1340082">of</span> <span m="1340490">x.</span> <span m="1348710">OK.</span>
  <span m="1349600">So if</span> <span m="1349980">i</span> <span
  m="1350920">is</span> <span m="1351360">less</span> <span
  m="1351770">than</span> <span m="1351890">the</span> <span
  m="1352000">rank,</span> <span m="1352410">this</span> <span
  m="1352670">is</span> <span m="1353090">fairly</span> <span
  m="1353480">easy.</span> <span m="1353970">We</span> <span
  m="1354050">just</span> <span m="1354300">say</span> <span
  m="1355300">x</span> <span m="1355680">equals</span> <span
  m="1356230">x.left.</span></p><p><span m="1360840">Did</span> <span
  m="1360930">I</span> <span m="1361040">get</span> <span
  m="1361180">that</span> <span m="1361340">right?</span> <span
  m="1361630">Yep.</span> <span m="1363460">In</span> <span
  m="1363580">this</span> <span m="1363760">case,</span> <span
  m="1364040">the</span> <span m="1364190">rank.</span> <span
  m="1364710">So</span> <span m="1364860">here</span> <span
  m="1365040">we</span> <span m="1365130">have</span> <span
  m="1365320">x.</span> <span m="1366090">It's at</span> <span
  m="1366470">rank,</span> <span m="1367030">rank.</span> <span
  m="1368120">And</span> <span m="1368370">then</span> <span
  m="1368510">we</span> <span m="1368620">have</span> <span
  m="1368930">the</span> <span m="1369020">left</span> <span
  m="1369310">subtree</span> <span m="1370610">and</span> <span
  m="1370900">the</span> <span m="1370960">right</span> <span
  m="1371330">subtree.</span> <span m="1372790">And</span> <span
  m="1372930">so</span> <span m="1373060">if</span> <span m="1373140">the</span>
  <span m="1373240">rank were</span> <span m="1373460">searching</span> <span
  m="1373850">for</span> <span m="1374060">is</span> <span
  m="1374130">less</span> <span m="1374370">than</span> <span
  m="1374490">rank,</span> <span m="1374750">that</span> <span
  m="1374900">means</span> <span m="1375090">we</span> <span
  m="1375210">know</span> <span m="1375820">it's</span> <span
  m="1376000">in</span> <span m="1376110">here.</span> <span
  m="1376750">So</span> <span m="1376930">we</span> <span
  m="1377020">should</span> <span m="1377220">go</span> <span
  m="1377390">left.</span> <span m="1377900">And</span> <span
  m="1378000">if</span> <span m="1378090">we</span> <span
  m="1378170">just</span> <span m="1378320">said</span> <span
  m="1378540">x</span> <span m="1378720">equals</span> <span
  m="1378990">x.left</span> <span m="1380550">you</span> <span
  m="1380720">might</span> <span m="1380900">ask,</span> <span
  m="1381230">well</span> <span m="1381280">what</span> <span
  m="1381530">rank</span> <span m="1381850">are</span> <span
  m="1381920">we</span> <span m="1382030">searching</span> <span
  m="1382410">for</span> <span m="1382650">in</span> <span
  m="1382710">here?</span> <span m="1383420">Well,</span> <span
  m="1384360">exactly</span> <span m="1384800">the</span> <span
  m="1384900">same</span> <span m="1385180">rank.</span> <span
  m="1386560">Fine.</span> <span m="1387370">That's</span> <span
  m="1387490">easy</span> <span m="1387780">case.</span></p><p><span
  m="1389160">In</span> <span m="1389300">the</span> <span
  m="1389430">other</span> <span m="1389630">situation,</span> <span
  m="1390330">if we're</span> <span m="1390560">searching</span> <span
  m="1391060">in</span> <span m="1391210">here,</span> <span
  m="1391520">we're</span> <span m="1391630">searching</span> <span
  m="1391940">for</span> <span m="1392160">rank</span> <span
  m="1392520">greater</span> <span m="1392970">than</span> <span
  m="1393560">rank.</span> <span m="1395090">Then</span> <span
  m="1395720">I</span> <span m="1395800">want</span> <span m="1396020">to</span>
  <span m="1396070">go</span> <span m="1396300">right</span> <span
  m="1398290">but</span> <span m="1398500">the</span> <span
  m="1398610">new</span> <span m="1398830">rank</span> <span
  m="1399110">that</span> <span m="1399250">I'm</span> <span
  m="1399350">searching</span> <span m="1399770">for</span> <span
  m="1400950">is</span> <span m="1401540">local</span> <span
  m="1402020">to</span> <span m="1402140">this</span> <span
  m="1402450">subtree.</span> <span m="1403750">I'm</span> <span
  m="1403920">searching</span> <span m="1404330">for</span> <span
  m="1406380">i</span> <span m="1406880">minus</span> <span
  m="1407840">this</span> <span m="1408040">stuff.</span> <span
  m="1409190">This</span> <span m="1409310">stuff</span> <span
  m="1409600">is</span> <span m="1410400">rank.</span> <span
  m="1411380">So</span> <span m="1412240">I'm</span> <span
  m="1412380">going</span> <span m="1412510">to</span> <span
  m="1412580">let</span> <span m="1412930">i</span> <span m="1414080">be</span>
  <span m="1414320">i</span> <span m="1414700">minus</span> <span
  m="1415790">rank.</span></p><p><span m="1417290">Make sure</span> <span
  m="1417670">I</span> <span m="1417710">don't</span> <span
  m="1417880">have</span> <span m="1418110">any</span> <span
  m="1418310">off</span> <span m="1418520">by</span> <span m="1418640">1</span>
  <span m="1418860">errors.</span> <span m="1419200">That</span> <span
  m="1420280">seems</span> <span m="1420620">to be</span> <span
  m="1420770">right.</span> <span m="1422700">OK.</span> <span
  m="1423040">And</span> <span m="1423170">then</span> <span
  m="1423320">I</span> <span m="1423400">do</span> <span m="1423600">a</span>
  <span m="1423670">loop.</span> <span m="1424110">So</span> <span
  m="1424230">I'll write</span> <span m="1424720">repeat.</span></p><p><span
  m="1430570">So</span> <span m="1430790">then</span> <span
  m="1431010">I'm</span> <span m="1431120">going</span> <span
  m="1431360">to</span> <span m="1431440">go</span> <span m="1431600">up</span>
  <span m="1431750">here</span> <span m="1432580">and</span> <span
  m="1432920">say,</span> <span m="1433420">OK.</span> <span
  m="1433860">Now</span> <span m="1434230">relative</span> <span
  m="1434930">to</span> <span m="1435170">this</span> <span
  m="1435480">thing.</span> <span m="1436150">What</span> <span
  m="1436260">is</span> <span m="1436430">the</span> <span
  m="1436570">rank</span> <span m="1436900">of</span> <span
  m="1437160">the</span> <span m="1437340">root</span> <span
  m="1437620">of</span> <span m="1437890">this</span> <span
  m="1438270">subtree?</span> <span m="1439480">Well, it's</span> <span
  m="1439840">again</span> <span m="1440210">going</span> <span
  m="1440380">to</span> <span m="1440450">be</span> <span
  m="1440850">that</span> <span m="1441180">node</span> <span
  m="1441780">.left.size</span> <span m="1442880">plus</span> <span
  m="1443150">1.</span> <span m="1444020">And</span> <span
  m="1444610">now</span> <span m="1444830">I</span> <span
  m="1444910">have</span> <span m="1445170">the</span> <span
  m="1445260">new</span> <span m="1445440">rank I'm</span> <span
  m="1445780">searching</span> <span m="1446100">for,</span> <span
  m="1446370">i.</span> <span m="1447410">And</span> <span m="1447740">I</span>
  <span m="1447810">just</span> <span m="1447980">keep</span> <span
  m="1448150">going.</span> <span m="1448610">You</span> <span
  m="1448740">could</span> <span m="1448860">write</span> <span
  m="1449050">this</span> <span m="1449210">recursively</span> <span
  m="1449800">if</span> <span m="1449920">you</span> <span
  m="1450070">like,</span> <span m="1450400">but</span> <span
  m="1451780">here's</span> <span m="1452040">an</span> <span
  m="1452160">iterative</span> <span m="1452550">version.</span></p><p><span
  m="1454620">So</span> <span m="1454930">it's</span> <span
  m="1455100">actually</span> <span m="1455360">very</span> <span
  m="1455760">familiar</span> <span m="1456350">to</span> <span
  m="1456600">the</span> <span m="1456800">select</span> <span
  m="1457650">algorithm</span> <span m="1458230">that</span> <span
  m="1458380">we</span> <span m="1458510">had,</span> <span
  m="1460130">like</span> <span m="1460310">when</span> <span
  m="1460450">we</span> <span m="1460550">did</span> <span
  m="1460930">deterministic</span> <span m="1461870">linear</span> <span
  m="1462120">time</span> <span m="1462370">median</span> <span
  m="1462650">finding</span> <span m="1463060">or</span> <span
  m="1463320">randomized</span> <span m="1464030">median</span> <span
  m="1464320">finding.</span> <span m="1465550">They</span> <span
  m="1465670">had</span> <span m="1465820">a</span> <span
  m="1465860">very</span> <span m="1466060">similar</span> <span
  m="1466590">kind</span> <span m="1466940">of</span> <span
  m="1467790">recursion.</span> <span m="1469140">But</span> <span
  m="1469370">in</span> <span m="1469470">that</span> <span
  m="1469640">case,</span> <span m="1469990">they</span> <span
  m="1470090">were</span> <span m="1470120">spending</span> <span
  m="1470440">linear</span> <span m="1470830">time</span> <span
  m="1471150">to</span> <span m="1471260">do</span> <span m="1471380">the</span>
  <span m="1471480">partition</span> <span m="1472970">and</span> <span
  m="1473170">that</span> <span m="1473300">was</span> <span
  m="1473450">expensive.</span> <span m="1473970">Here,</span> <span
  m="1474260">we're</span> <span m="1474390">just</span> <span
  m="1474540">spending</span> <span m="1474830">constant</span> <span
  m="1475330">time</span> <span m="1475640">at</span> <span
  m="1475700">each</span> <span m="1475910">node</span> <span
  m="1476540">and</span> <span m="1476710">so</span> <span
  m="1476840">the</span> <span m="1476930">overall</span> <span
  m="1477300">cost</span> <span m="1477660">is</span> <span m="1477760">log
  n.</span> <span m="1479520">So</span> <span m="1479700">that's</span> <span
  m="1479970">nice.</span> <span m="1480280">Any</span> <span
  m="1480450">questions</span> <span m="1480890">about</span> <span
  m="1481090">that?</span></p><p><span m="1484480">OK.</span> <span
  m="1485570">I</span> <span m="1485780">have</span> <span m="1485970">a</span>
  <span m="1486020">note</span> <span m="1486260">here.</span> <span
  m="1487330">Subtree</span> <span m="1487750">size</span> <span
  m="1488250">is</span> <span m="1488550">obvious</span> <span
  m="1489060">once</span> <span m="1489550">you</span> <span
  m="1490000">know</span> <span m="1490330">that's</span> <span
  m="1490690">what</span> <span m="1490820">you</span> <span
  m="1490910">should</span> <span m="1491130">do.</span> <span
  m="1491840">Another</span> <span m="1492210">natural</span> <span
  m="1492550">thing</span> <span m="1492740">to</span> <span
  m="1492820">try</span> <span m="1493110">to</span> <span m="1493230">do</span>
  <span m="1493560">would</span> <span m="1493740">be</span> <span
  m="1493960">to</span> <span m="1494270">augment,</span> <span
  m="1494930">for</span> <span m="1495070">each</span> <span
  m="1495320">node,</span> <span m="1495910">what</span> <span
  m="1496110">is</span> <span m="1496270">the</span> <span
  m="1496420">rank</span> <span m="1496720">of</span> <span
  m="1496830">that</span> <span m="1497060">node?</span> <span
  m="1497370">Because</span> <span m="1497560">then</span> <span
  m="1498150">rank</span> <span m="1498430">is</span> <span
  m="1498550">really</span> <span m="1498820">easy</span> <span
  m="1499040">to</span> <span m="1499120">find.</span> <span
  m="1499820">And</span> <span m="1499970">then</span> <span
  m="1500100">select</span> <span m="1500630">would</span> <span
  m="1500750">basically</span> <span m="1501160">be</span> <span
  m="1501360">a</span> <span m="1501420">regular</span> <span
  m="1501830">search.</span> <span m="1502200">I</span> <span
  m="1502270">just</span> <span m="1502450">look</span> <span
  m="1502680">at</span> <span m="1502760">the</span> <span
  m="1502860">rank</span> <span m="1503110">of</span> <span
  m="1503220">the</span> <span m="1503320">root,</span> <span
  m="1503980">I</span> <span m="1504070">see</span> <span
  m="1504260">whether</span> <span m="1504580">the</span> <span m="1504650">rank
  I'm</span> <span m="1504820">looking</span> <span m="1505080">for</span> <span
  m="1505410">is</span> <span m="1505510">too</span> <span
  m="1505640">big,</span> <span m="1505860">or</span> <span
  m="1505940">too</span> <span m="1506080">small,</span> <span m="1506440">and
  I</span> <span m="1506560">go</span> <span m="1506740">left</span> <span
  m="1506970">or</span> <span m="1507070">right,</span> <span
  m="1507260">accordingly.</span></p><p><span m="1508380">What</span> <span
  m="1508530">would</span> <span m="1508670">be</span> <span
  m="1508820">bad</span> <span m="1509200">about</span> <span
  m="1510120">augmenting</span> <span m="1510650">with</span> <span
  m="1510810">rank</span> <span m="1511390">of</span> <span m="1511530">a</span>
  <span m="1511590">node?</span> <span m="1514430">Updates.</span> <span
  m="1515580">Why?</span> <span m="1519300">What's</span> <span
  m="1519460">a</span> <span m="1519520">bad</span> <span
  m="1519790">example</span> <span m="1520260">for</span> <span
  m="1520410">an</span> <span m="1520480">update?</span></p><p><span
  m="1522395">AUDIENCE: If</span> <span m="1522850">you</span> <span
  m="1523760">add</span> <span m="1524215">new in home</span> <span
  m="1524670">element.</span></p><p><span m="1525580">PROFESSOR: Right.</span>
  <span m="1525840">Say</span> <span m="1526010">we</span> <span
  m="1526210">insert</span> <span m="1526560">a</span> <span
  m="1526620">new</span> <span m="1526830">minimum</span> <span
  m="1527170">element.</span></p><p><span m="1531810">Good</span> <span
  m="1532010">catch,</span> <span m="1532360">cameraman.</span> <span
  m="1533810">That</span> <span m="1534010">was</span> <span
  m="1534240">for</span> <span m="1534350">the</span> <span
  m="1534460">camera,</span> <span m="1534860">obviously.</span> <span
  m="1536510">So,</span> <span m="1537430">right.</span> <span
  m="1537610">If</span> <span m="1537750">we</span> <span
  m="1537940">insert,</span> <span m="1539620">this</span> <span
  m="1539780">is</span> <span m="1539950">off to</span> <span
  m="1540210">the</span> <span m="1540310">side,</span> <span
  m="1540610">but</span> <span m="1540760">say</span> <span
  m="1540880">we</span> <span m="1541070">insert,</span> <span
  m="1541560">I'll</span> <span m="1541720">call</span> <span
  m="1541960">it</span> <span m="1542080">minus</span> <span
  m="1542460">infinity.</span> <span m="1543600">A</span> <span
  m="1543680">new</span> <span m="1543900">key</span> <span
  m="1544290">that</span> <span m="1544410">is</span> <span
  m="1544540">smaller</span> <span m="1544890">than</span> <span
  m="1545030">all</span> <span m="1545190">other</span> <span
  m="1545440">keys,</span> <span m="1546170">then</span> <span
  m="1546340">the</span> <span m="1546430">rank</span> <span
  m="1546690">of</span> <span m="1546880">every</span> <span
  m="1547250">node</span> <span m="1547560">changes.</span> <span
  m="1549140">So</span> <span m="1551170">that's</span> <span
  m="1551380">bad.</span> <span m="1553280">It</span> <span
  m="1553410">means</span> <span m="1553680">that</span> <span
  m="1554150">easy</span> <span m="1554420">tree</span> <span
  m="1554660">augmentation,</span> <span m="1555190">in</span> <span
  m="1555270">particular,</span> <span m="1555750">isn't</span> <span
  m="1555930">going</span> <span m="1556140">to</span> <span
  m="1556180">apply.</span> <span m="1556570">And</span> <span
  m="1556680">furthermore,</span> <span m="1557440">it</span> <span
  m="1557560">would</span> <span m="1557790">take</span> <span
  m="1558040">linear</span> <span m="1558520">time</span> <span
  m="1559360">to</span> <span m="1559500">do</span> <span
  m="1559640">this.</span> <span m="1559890">And</span> <span
  m="1559970">you</span> <span m="1560070">could</span> <span
  m="1560220">keep</span> <span m="1560520">inserting,</span> <span
  m="1560990">if</span> <span m="1561080">you</span> <span
  m="1561190">insert</span> <span m="1561530">keys</span> <span
  m="1561770">in</span> <span m="1561900">decreasing</span> <span
  m="1562390">order</span> <span m="1562620">from</span> <span
  m="1562830">there,</span> <span m="1563600">every</span> <span
  m="1563880">time</span> <span m="1564110">you</span> <span
  m="1564230">do</span> <span m="1564370">an</span> <span
  m="1564460">insert,</span> <span m="1564850">all</span> <span
  m="1565100">the</span> <span m="1565190">ranks</span> <span
  m="1565570">increase</span> <span m="1565950">by</span> <span
  m="1566050">one.</span> <span m="1566730">Maintaining</span> <span
  m="1567110">that's</span> <span m="1567340">going</span> <span
  m="1567460">to</span> <span m="1567520">cost</span> <span
  m="1567810">linear</span> <span m="1568120">time</span> <span
  m="1568420">per</span> <span m="1568550">update.</span></p><p><span
  m="1569360">So</span> <span m="1569470">you</span> <span
  m="1569520">have</span> <span m="1569630">to</span> <span
  m="1569770">be</span> <span m="1569940">really</span> <span
  m="1570250">careful</span> <span m="1571360">that</span> <span
  m="1572240">the</span> <span m="1572830">function</span> <span
  m="1573200">you</span> <span m="1574230">want</span> <span
  m="1574610">to</span> <span m="1574700">store</span> <span
  m="1575130">actually</span> <span m="1575540">can</span> <span
  m="1575840">be</span> <span m="1575970">maintained.</span> <span
  m="1576630">Be</span> <span m="1576750">very</span> <span
  m="1576990">careful</span> <span m="1577280">about</span> <span
  m="1577540">that,</span> <span m="1578220">say,</span> <span
  m="1578540">on</span> <span m="1578700">the</span> <span
  m="1578790">quiz</span> <span m="1579170">coming</span> <span
  m="1579520">up,</span> <span m="1580330">that</span> <span
  m="1580530">when</span> <span m="1580670">you're</span> <span
  m="1580820">augmenting</span> <span m="1581260">something</span> <span
  m="1581720">you</span> <span m="1582340">can</span> <span
  m="1582490">actually</span> <span m="1582760">maintain</span> <span
  m="1583130">it.</span> <span m="1583280">For</span> <span
  m="1583430">example,</span> <span m="1584610">it's</span> <span
  m="1584690">very</span> <span m="1585040">hard</span> <span
  m="1585320">to</span> <span m="1585390">maintain</span> <span
  m="1585810">the</span> <span m="1585910">depths</span> <span
  m="1586420">of</span> <span m="1586550">nodes</span> <span
  m="1587010">because</span> <span m="1587300">when</span> <span
  m="1587400">you</span> <span m="1587490">do a</span> <span
  m="1587690">rotation</span> <span m="1589060">a</span> <span
  m="1589100">whole</span> <span m="1589510">lot</span> <span
  m="1589730">of</span> <span m="1589830">depths</span> <span
  m="1590190">change.</span></p><p><span m="1591410">Depth</span> <span
  m="1591700">is</span> <span m="1591920">counting</span> <span
  m="1592270">from</span> <span m="1592450">the</span> <span
  m="1592560">root.</span> <span m="1592770">How</span> <span
  m="1592930">deep</span> <span m="1593180">am</span> <span
  m="1593250">I?</span> <span m="1594430">When</span> <span m="1594620">I</span>
  <span m="1594660">do a</span> <span m="1594840">rotation</span> <span
  m="1595340">then</span> <span m="1595490">this</span> <span
  m="1595670">entire</span> <span m="1596200">subtree</span> <span
  m="1596660">went</span> <span m="1596930">down</span> <span
  m="1597160">by</span> <span m="1597270">one.</span> <span
  m="1597560">This</span> <span m="1597730">entire</span> <span
  m="1598130">subtree</span> <span m="1598510">went</span> <span
  m="1598710">up</span> <span m="1598900">by</span> <span
  m="1599020">one.</span> <span m="1600830">In</span> <span
  m="1600940">this</span> <span m="1601090">picture.</span> <span
  m="1602100">But</span> <span m="1602240">it's</span> <span
  m="1602360">very</span> <span m="1602560">easy</span> <span
  m="1602850">to</span> <span m="1602930">maintain</span> <span
  m="1603330">heights,</span> <span m="1603850">for</span> <span
  m="1603990">example.</span> <span m="1604820">Height</span> <span
  m="1605190">counting</span> <span m="1605470">from</span> <span
  m="1605600">the</span> <span m="1605680">bottom</span> <span
  m="1606060">is</span> <span m="1606180">OK,</span> <span
  m="1606590">because</span> <span m="1606950">I</span> <span
  m="1607010">don't</span> <span m="1607220">affect</span> <span
  m="1607570">the</span> <span m="1607640">height</span> <span
  m="1608310">of</span> <span m="1608500">a,</span> <span m="1608670">b,</span>
  <span m="1608880">and</span> <span m="1609000">c.</span> <span
  m="1609740">I</span> <span m="1609810">affect it</span> <span
  m="1610280">for</span> <span m="1610420">x</span> <span m="1610650">and</span>
  <span m="1610780">y</span> <span m="1611020">but</span> <span
  m="1611140">that's</span> <span m="1611330">just</span> <span
  m="1611510">two</span> <span m="1611640">nodes.</span> <span
  m="1612090">That</span> <span m="1612260">I</span> <span
  m="1612320">can</span> <span m="1612490">afford.</span> <span
  m="1613890">So</span> <span m="1613970">that's</span> <span
  m="1614180">what</span> <span m="1614300">you</span> <span
  m="1614410">want</span> <span m="1614550">to</span> <span
  m="1614600">be</span> <span m="1614720">careful</span> <span
  m="1615050">of</span> <span m="1616360">in the</span> <span
  m="1616750">easy</span> <span m="1617020">tree</span> <span
  m="1617220">augmentation.</span></p><p><span m="1620470">So</span> <span
  m="1620930">most</span> <span m="1621220">the</span> <span
  m="1621350">time</span> <span m="1621640">easy</span> <span
  m="1621880">tree</span> <span m="1622070">augmentation</span> <span
  m="1623170">does</span> <span m="1623400">the</span> <span
  m="1623490">job.</span> <span m="1623960">But</span> <span
  m="1625000">in</span> <span m="1625300">the</span> <span
  m="1625450">remaining</span> <span m="1625950">two</span> <span
  m="1626150">examples,</span> <span m="1627340">I</span> <span
  m="1627460">want</span> <span m="1627640">to</span> <span
  m="1627690">show</span> <span m="1627860">you</span> <span
  m="1628630">cooler</span> <span m="1629120">examples</span> <span
  m="1629700">of</span> <span m="1629820">augmentation.</span> <span
  m="1631130">These</span> <span m="1631330">are</span> <span
  m="1631410">things</span> <span m="1631690">you</span> <span
  m="1631840">probably</span> <span m="1632120">wouldn't</span> <span
  m="1632330">be</span> <span m="1632410">expected</span> <span
  m="1632860">to</span> <span m="1632940">come</span> <span
  m="1633140">up</span> <span m="1633270">with</span> <span
  m="1633430">on</span> <span m="1633560">your</span> <span
  m="1633740">own,</span> <span m="1635640">but</span> <span
  m="1635810">they're</span> <span m="1635930">cool.</span> <span
  m="1637780">And they</span> <span m="1638180">let</span> <span
  m="1638340">us</span> <span m="1638500">do</span> <span
  m="1638690">more</span> <span m="1639090">sophisticated</span> <span
  m="1639630">operations.</span></p><p>&nbsp;</p><p><span m="1647970">So</span>
  <span m="1648230">the</span> <span m="1648300">first</span> <span
  m="1648620">one</span> <span m="1649130">is</span> <span
  m="1650220">called</span> <span m="1650480">level</span> <span
  m="1650800">linking.</span> <span m="1656490">And</span> <span
  m="1656620">here</span> <span m="1656810">we're</span> <span
  m="1656920">going</span> <span m="1657040">to</span> <span
  m="1657130">do</span> <span m="1657310">it</span> <span m="1657440">in</span>
  <span m="1657700">the</span> <span m="1657820">context</span> <span
  m="1658390">of</span> <span m="1658600">2-3</span> <span
  m="1658990">trees,</span> <span m="1661290">partly</span> <span
  m="1661660">for</span> <span m="1661850">variety.</span> <span
  m="1665690">So</span> <span m="1666290">the</span> <span
  m="1666460">idea</span> <span m="1666910">of</span> <span
  m="1667160">level</span> <span m="1667440">linking</span> <span
  m="1667800">is</span> <span m="1667890">very</span> <span
  m="1668090">simple.</span> <span m="1669410">Let</span> <span
  m="1669580">me</span> <span m="1669690">draw</span> <span m="1670110">a</span>
  <span m="1670280">2-3 tree.</span></p><p><span m="1683340">Not a</span> <span
  m="1683560">very</span> <span m="1683750">impressive</span> <span
  m="1684230">2-3 tree.</span> <span m="1685040">I guess</span> <span
  m="1685270">I</span> <span m="1685430">don't</span> <span
  m="1685600">feel</span> <span m="1685750">like</span> <span
  m="1685900">drawing</span> <span m="1686100">too</span> <span
  m="1686240">much.</span> <span m="1688030">Level</span> <span
  m="1688340">linking</span> <span m="1688830">is</span> <span
  m="1689240">the</span> <span m="1689380">idea</span> <span
  m="1689780">of,</span> <span m="1690050">in</span> <span
  m="1690140">addition</span> <span m="1690580">to</span> <span
  m="1690710">these</span> <span m="1691020">child</span> <span
  m="1692050">and</span> <span m="1692190">parent</span> <span
  m="1692550">pointers,</span> <span m="1693470">we're</span> <span
  m="1693540">going</span> <span m="1693640">to</span> <span
  m="1693710">add</span> <span m="1694520">links</span> <span
  m="1695060">on</span> <span m="1695300">all</span> <span
  m="1695480">the</span> <span m="1695550">levels.</span> <span
  m="1699570">Horizontal</span> <span m="1700290">links,</span> <span
  m="1700540">you</span> <span m="1700640">might call them.</span></p><p><span
  m="1734180">OK.</span> <span m="1734820">So</span> <span
  m="1735310">that's</span> <span m="1735590">nice.</span> <span
  m="1737370">Two</span> <span m="1737590">questions--</span> <span
  m="1738350">can</span> <span m="1738550">we</span> <span m="1738660">do</span>
  <span m="1738790">this?</span> <span m="1739350">And</span> <span
  m="1739710">what's</span> <span m="1739900">it</span> <span
  m="1739940">good</span> <span m="1740120">for?</span> <span
  m="1740710">So</span> <span m="1740990">let's</span> <span
  m="1741180">start</span> <span m="1741400">with</span> <span
  m="1741630">can</span> <span m="1741810">we</span> <span m="1741930">do</span>
  <span m="1742070">this.</span> <span m="1743050">Remember</span> <span
  m="1743430">in</span> <span m="1743640">2-3</span> <span
  m="1744030">trees</span> <span m="1744370">all</span> <span
  m="1744580">we</span> <span m="1744670">have</span> <span
  m="1744830">to</span> <span m="1744950">think</span> <span
  m="1745120">about</span> <span m="1745420">are</span> <span
  m="1745540">splits</span> <span m="1745950">and merges.</span> <span
  m="1747280">So</span> <span m="1748020">in</span> <span m="1748370">a</span>
  <span m="1748430">split,</span> <span m="1750050">we</span> <span
  m="1750290">have,</span> <span m="1751200">for</span> <span
  m="1751440">a</span> <span m="1751540">brief</span> <span
  m="1751800">period,</span> <span m="1752570">let's</span> <span
  m="1752790">say</span> <span m="1753550">three</span> <span
  m="1753810">keys,</span> <span m="1754220">four</span> <span
  m="1754490">children.</span> <span m="1754950">That's</span> <span
  m="1755170">too</span> <span m="1755320">many.</span> <span
  m="1757610">So</span> <span m="1757860">we</span> <span
  m="1757980">change</span> <span m="1758330">that</span> <span
  m="1758640">to--</span></p><p><span m="1766524">I'm going to change</span>
  <span m="1767021">this</span> <span m="1767518">in a</span> <span
  m="1768015">moment.</span> <span m="1768512">For now,</span> <span
  m="1769009">this is</span> <span m="1769506">the split</span> <span
  m="1770003">you know and love,</span> <span m="1770500">maybe.</span> <span
  m="1771494">At least</span> <span m="1771991">know.</span> <span
  m="1772500">And</span> <span m="1773590">if</span> <span m="1773820">we</span>
  <span m="1773940">think</span> <span m="1774110">about</span> <span
  m="1774320">where</span> <span m="1774440">the</span> <span
  m="1774570">leveling</span> <span m="1774960">pointers</span> <span
  m="1775350">are,</span> <span m="1775610">we</span> <span
  m="1775790">have</span> <span m="1776090">one</span> <span
  m="1776820">before.</span> <span m="1778910">And</span> <span
  m="1779100">then</span> <span m="1779230">we</span> <span
  m="1779330">just</span> <span m="1779540">need</span> <span
  m="1779670">to</span> <span m="1779750">distribute</span> <span
  m="1780420">those</span> <span m="1780660">pointers</span> <span
  m="1782330">to</span> <span m="1782530">the</span> <span
  m="1782680">two</span> <span m="1783000">resulting</span> <span
  m="1783510">nodes.</span> <span m="1784540">And</span> <span
  m="1784720">then</span> <span m="1784830">we</span> <span
  m="1784930">have</span> <span m="1785080">to</span> <span
  m="1785190">create</span> <span m="1786130">a</span> <span
  m="1786210">new</span> <span m="1786430">pointer</span> <span
  m="1786800">between</span> <span m="1787640">the</span> <span
  m="1787740">nodes</span> <span m="1787980">that</span> <span
  m="1788040">we</span> <span m="1788140">just</span> <span
  m="1788320">created.</span> <span m="1789100">This</span> <span
  m="1789260">is,</span> <span m="1789380">of</span> <span
  m="1789490">course,</span> <span m="1789720">easy</span> <span
  m="1790000">to</span> <span m="1790110">do.</span></p><p><span
  m="1790430">We're</span> <span m="1790470">here.</span> <span
  m="1790890">We're</span> <span m="1791010">taking</span> <span
  m="1791310">this</span> <span m="1791490">node.</span> <span
  m="1791710">We're</span> <span m="1791800">splitting</span> <span
  m="1792270">it</span> <span m="1792350">in</span> <span
  m="1792480">half.</span> <span m="1793870">So</span> <span
  m="1794010">we</span> <span m="1794120">have</span> <span
  m="1794360">the</span> <span m="1794440">nodes</span> <span
  m="1794700">right</span> <span m="1794870">in</span> <span
  m="1794980">our</span> <span m="1795080">hands</span> <span
  m="1795430">so</span> <span m="1795610">just</span> <span
  m="1795860">add</span> <span m="1796100">pointers</span> <span
  m="1796420">between</span> <span m="1796770">them.</span> <span
  m="1797710">And</span> <span m="1798080">key</span> <span
  m="1798300">thing</span> <span m="1798520">is,</span> <span
  m="1798790">there's</span> <span m="1798960">some</span> <span
  m="1799270">node</span> <span m="1799460">over</span> <span
  m="1799660">here</span> <span m="1799840">on</span> <span
  m="1799920">the</span> <span m="1800010">left.</span> <span
  m="1800840">It</span> <span m="1801030">used</span> <span
  m="1801280">to</span> <span m="1801360">point</span> <span
  m="1801620">to</span> <span m="1801700">this</span> <span
  m="1801840">node,</span> <span m="1802130">now</span> <span
  m="1802360">we</span> <span m="1802460">have</span> <span
  m="1802570">to</span> <span m="1802670">change</span> <span
  m="1802990">it</span> <span m="1803090">to</span> <span
  m="1803170">point</span> <span m="1803460">to</span> <span
  m="1803550">the</span> <span m="1803790">left</span> <span
  m="1804290">version.</span> <span m="1804760">The</span> <span
  m="1804850">left</span> <span m="1805070">half</span> <span
  m="1805270">of</span> <span m="1805340">the</span> <span
  m="1805420">node.</span> <span m="1806030">And</span> <span
  m="1806260">there's</span> <span m="1806400">some</span> <span
  m="1806580">node</span> <span m="1806780">over</span> <span
  m="1806960">on</span> <span m="1807050">the</span> <span
  m="1807130">right.</span> <span m="1807360">We</span> <span
  m="1807470">have</span> <span m="1807590">to</span> <span
  m="1807680">change</span> <span m="1808070">it's</span> <span
  m="1808430">left</span> <span m="1808790">pointer</span> <span
  m="1809520">to</span> <span m="1809840">point</span> <span
  m="1810140">to</span> <span m="1811770">this</span> <span
  m="1812060">right</span> <span m="1812380">half</span> <span
  m="1812680">of</span> <span m="1812770">the</span> <span
  m="1812870">node.</span> <span m="1813970">But</span> <span
  m="1814080">that's</span> <span m="1814270">it.</span> <span
  m="1814480">Constant</span> <span m="1814860">time.</span></p><p><span
  m="1816670">So</span> <span m="1816920">this</span> <span
  m="1817120">doesn't</span> <span m="1817460">fall</span> <span
  m="1817760">under</span> <span m="1817950">the</span> <span
  m="1818080">category</span> <span m="1818770">of</span> <span
  m="1819510">easy</span> <span m="1819760">tree</span> <span
  m="1820010">augmentation</span> <span m="1820660">because</span> <span
  m="1821640">this</span> <span m="1821820">is</span> <span
  m="1821950">not</span> <span m="1822260">isolated</span> <span
  m="1822920">to</span> <span m="1823110">the</span> <span
  m="1823250">subtree.</span> <span m="1823870">We're</span> <span
  m="1824030">also</span> <span m="1824380">dealing</span> <span
  m="1824690">with</span> <span m="1824810">it's</span> <span
  m="1825130">left</span> <span m="1825500">and</span> <span
  m="1825620">right</span> <span m="1826390">subtrees.</span> <span
  m="1827380">But</span> <span m="1827910">still</span> <span
  m="1828220">easy</span> <span m="1828510">to</span> <span
  m="1828630">do</span> <span m="1829490">in</span> <span
  m="1829790">constant</span> <span m="1830180">time.</span></p><p><span
  m="1836800">Merging</span> <span m="1837180">nodes</span> <span
  m="1837440">is</span> <span m="1837610">going</span> <span
  m="1837730">to</span> <span m="1837770">be</span> <span
  m="1837870">similar.</span> <span m="1848130">If</span> <span
  m="1848240">we</span> <span m="1848340">steal</span> <span
  m="1848900">a</span> <span m="1848950">node</span> <span
  m="1849330">from</span> <span m="1849620">our</span> <span
  m="1850710">parents</span> <span m="1851920">or</span> <span
  m="1852120">former</span> <span m="1852430">sibling,</span> <span
  m="1852870">nothing</span> <span m="1853230">happens</span> <span
  m="1853840">in</span> <span m="1853930">terms</span> <span
  m="1854200">of</span> <span m="1854290">level</span> <span
  m="1854550">links.</span> <span m="1855380">But</span> <span
  m="1855620">if</span> <span m="1855800">we have, say,</span> <span
  m="1856310">an</span> <span m="1856650">empty</span> <span
  m="1856990">node</span> <span m="1858160">and</span> <span
  m="1859270">a</span> <span m="1859360">node</span> <span
  m="1859550">that</span> <span m="1859680">cannot</span> <span
  m="1860040">afford</span> <span m="1860430">any</span> <span
  m="1860620">stealing.</span> <span m="1861290">So</span> <span
  m="1861610">we</span> <span m="1861720">have</span> <span
  m="1861920">single</span> <span m="1862200">child</span> <span
  m="1862630">here,</span> <span m="1862700">two</span> <span
  m="1862880">children,</span> <span m="1863880">and</span> <span
  m="1863960">we</span> <span m="1864070">merge</span> <span
  m="1864440">it</span> <span m="1864630">into--</span></p><p><span
  m="1869840">We're</span> <span m="1870030">taking</span> <span
  m="1870520">something</span> <span m="1870860">from</span> <span
  m="1871040">our</span> <span m="1871160">parent.</span> <span
  m="1872140">Bringing</span> <span m="1872470">it</span> <span
  m="1872580">down.</span> <span m="1873310">Then we have</span> <span
  m="1873650">three</span> <span m="1873930">children</span> <span
  m="1874340">afterwards.</span> <span m="1875550">Again,</span> <span
  m="1876040">we</span> <span m="1876280">used</span> <span
  m="1876470">to</span> <span m="1876540">have</span> <span
  m="1876830">these</span> <span m="1878320">level</span> <span
  m="1878640">pointers.</span> <span m="1880070">Now</span> <span
  m="1880310">we</span> <span m="1880410">just</span> <span
  m="1880590">have</span> <span m="1880760">these</span> <span
  m="1880980">level</span> <span m="1881240">pointers.</span> <span
  m="1882100">It's</span> <span m="1882240">easy</span> <span
  m="1882980">to</span> <span m="1883080">maintain.</span> <span
  m="1883460">It's</span> <span m="1883560">just</span> <span
  m="1883810">a</span> <span m="1883850">constant</span> <span
  m="1884260">size</span> <span m="1884500">neighborhood.</span></p><p><span
  m="1884880">Because</span> <span m="1885290">we</span> <span
  m="1885420">have</span> <span m="1885760">the</span> <span
  m="1885870">level</span> <span m="1886120">links,</span> <span
  m="1886740">we</span> <span m="1886910">can</span> <span
  m="1887080">get</span> <span m="1887270">to</span> <span
  m="1887380">our</span> <span m="1887510">left</span> <span
  m="1887770">and</span> <span m="1887840">right</span> <span
  m="1888080">neighbors</span> <span m="1888940">and</span> <span
  m="1889290">change</span> <span m="1889630">where</span> <span
  m="1889760">the</span> <span m="1889880">links</span> <span
  m="1890120">point</span> <span m="1890440">to.</span> <span
  m="1891200">So</span> <span m="1892490">easy</span> <span
  m="1892770">to</span> <span m="1892920">maintain</span> <span
  m="1893650">in</span> <span m="1893930">constant</span> <span
  m="1894350">time.</span> <span m="1903390">I'll</span> <span
  m="1903450">call</span> <span m="1903660">it</span> <span
  m="1903810">constant</span> <span m="1904320">overhead.</span> <span
  m="1905690">Every</span> <span m="1905920">time</span> <span
  m="1906160">we</span> <span m="1906260">do</span> <span m="1906360">a</span>
  <span m="1906480">split</span> <span m="1906710">or</span> <span
  m="1906830">merge</span> <span m="1907300">we</span> <span
  m="1907440">spend</span> <span m="1909170">additional</span> <span
  m="1909640">constant</span> <span m="1910040">time</span> <span
  m="1910250">to</span> <span m="1910340">do</span> <span m="1910510">it.</span>
  <span m="1910630">We're</span> <span m="1910860">already</span> <span
  m="1910950">spending</span> <span m="1911240">constant</span> <span
  m="1911590">time.</span> <span m="1911880">So</span> <span
  m="1912510">just</span> <span m="1912700">changes</span> <span
  m="1913090">everything</span> <span m="1913420">by</span> <span
  m="1913550">constant</span> <span m="1913900">factor.</span> <span
  m="1916410">So</span> <span m="1916620">far,</span> <span
  m="1916820">so</span> <span m="1916990">good.</span></p><p><span
  m="1918440">Now,</span> <span m="1920320">I'm</span> <span
  m="1920480">going</span> <span m="1920590">to</span> <span
  m="1920630">have</span> <span m="1920820">to</span> <span
  m="1920950">tweak</span> <span m="1921220">this</span> <span
  m="1921390">data</span> <span m="1921600">structure</span> <span
  m="1921940">a</span> <span m="1921990">little</span> <span
  m="1922210">bit.</span> <span m="1922570">But</span> <span
  m="1922640">let</span> <span m="1922770">me</span> <span
  m="1922900">first</span> <span m="1923160">tell</span> <span
  m="1923300">you</span> <span m="1923440">why.</span> <span
  m="1923810">What</span> <span m="1924030">am</span> <span m="1924140">I</span>
  <span m="1924220">trying</span> <span m="1924500">to</span> <span
  m="1924600">achieve</span> <span m="1925000">with</span> <span
  m="1925150">this</span> <span m="1925340">data</span> <span
  m="1925540">structure?</span> <span m="1936680">What</span> <span
  m="1936890">I'm</span> <span m="1936990">trying</span> <span
  m="1937240">to</span> <span m="1937300">achieve</span> <span
  m="1937840">is</span> <span m="1938090">something</span> <span
  m="1938440">called</span> <span m="1939870">the</span> <span
  m="1940000">finger</span> <span m="1940510">search</span> <span
  m="1940900">property.</span></p><p><span m="1954390">So</span> <span
  m="1954570">let's</span> <span m="1954750">just</span> <span
  m="1954880">think</span> <span m="1955040">about</span> <span
  m="1955240">the</span> <span m="1955330">case</span> <span
  m="1955580">where</span> <span m="1955700">I'm</span> <span
  m="1955780">doing</span> <span m="1956970">a</span> <span
  m="1957060">successful</span> <span m="1957820">search.</span> <span
  m="1958220">I'm</span> <span m="1958330">searching</span> <span
  m="1958750">for</span> <span m="1958970">key</span> <span m="1959260">x</span>
  <span m="1960020">and</span> <span m="1960210">I</span> <span
  m="1960290">find</span> <span m="1960690">it</span> <span
  m="1960810">in</span> <span m="1960970">the</span> <span
  m="1961060">data</span> <span m="1961300">structure.</span> <span
  m="1961840">I</span> <span m="1961940">find</span> <span m="1962240">it</span>
  <span m="1962360">in</span> <span m="1962600">the</span> <span
  m="1962690">tree.</span> <span m="1965890">Suppose</span> <span
  m="1966290">I</span> <span m="1966360">found</span> <span
  m="1966730">one--</span> <span m="1967910">I</span> <span
  m="1968050">search</span> <span m="1968310">for</span> <span
  m="1968480">x,</span> <span m="1968820">I</span> <span
  m="1968900">found</span> <span m="1969250">it.</span> <span
  m="1969890">And</span> <span m="1970030">then</span> <span
  m="1970170">I</span> <span m="1970300">search</span> <span
  m="1970550">for</span> <span m="1970680">another</span> <span
  m="1970980">key</span> <span m="1971240">y.</span> <span
  m="1972276">Actually</span> <span m="1972620">I</span> <span
  m="1972730">think</span> <span m="1972890">I'll</span> <span
  m="1972970">do</span> <span m="1973060">the</span> <span
  m="1973160">reverse.</span> <span m="1973630">First</span> <span
  m="1973940">I</span> <span m="1973980">found</span> <span
  m="1974230">y,</span> <span m="1974970">now I'm</span> <span
  m="1975190">searching</span> <span m="1975540">for</span> <span
  m="1975720">x.</span> <span m="1976460">If</span> <span m="1976660">x</span>
  <span m="1976960">and</span> <span m="1977090">y</span> <span
  m="1977430">are</span> <span m="1977580">nearby</span> <span
  m="1978210">in</span> <span m="1978380">the</span> <span
  m="1978470">tree,</span> <span m="1979380">I</span> <span
  m="1979500">want</span> <span m="1979800">this</span> <span
  m="1980000">to</span> <span m="1980170">run</span> <span
  m="1980710">especially</span> <span m="1981290">fast.</span> <span
  m="1982440">For</span> <span m="1982510">example,</span> <span
  m="1982980">if</span> <span m="1983080">x</span> <span m="1983210">is</span>
  <span m="1983330">the</span> <span m="1983410">successor</span> <span
  m="1984100">of</span> <span m="1984170">y</span> <span m="1985090">I</span>
  <span m="1985190">want</span> <span m="1985440">this</span> <span
  m="1985590">to</span> <span m="1985700">take</span> <span
  m="1985930">constant</span> <span m="1986420">time.</span> <span
  m="1987790">That</span> <span m="1987920">would</span> <span
  m="1987990">be</span> <span m="1988100">nice.</span></p><p><span
  m="1990350">In</span> <span m="1990500">the</span> <span
  m="1990590">worst</span> <span m="1990880">case</span> <span
  m="1991240">x</span> <span m="1991470">and</span> <span m="1991540">y</span>
  <span m="1991720">are</span> <span m="1991820">very</span> <span
  m="1992030">far</span> <span m="1992230">away</span> <span
  m="1992420">from</span> <span m="1992630">me in</span> <span
  m="1993130">the</span> <span m="1993220">tree</span> <span
  m="1993470">then</span> <span m="1993630">I</span> <span
  m="1993690">want</span> <span m="1993890">it to</span> <span
  m="1994100">take</span> <span m="1994360">log</span> <span
  m="1994660">n</span> <span m="1994850">time.</span> <span
  m="1996150">So</span> <span m="1996280">how</span> <span
  m="1996520">could</span> <span m="1996710">I</span> <span
  m="1996780">interpolate</span> <span m="1997420">between</span> <span
  m="1998890">constant</span> <span m="1999320">time</span> <span
  m="1999570">for</span> <span m="1999680">finding</span> <span
  m="2000640">the</span> <span m="2000790">successor</span> <span
  m="2001890">and</span> <span m="2001990">log</span> <span m="2002100">n</span>
  <span m="2002590">time</span> <span m="2002900">for</span> <span
  m="2003050">finding</span> <span m="2004190">the</span> <span
  m="2006890">worst</span> <span m="2007190">case</span> <span
  m="2007580">search.</span> <span m="2008080">So</span> <span
  m="2008280">I'm</span> <span m="2008420">going</span> <span
  m="2008530">to</span> <span m="2008590">call</span> <span
  m="2008780">this</span> <span m="2009400">search</span> <span
  m="2011172">of</span> <span m="2012340">x</span> <span m="2013180">from</span>
  <span m="2014440">y.</span> <span m="2015040">Meaning,</span> <span
  m="2016170">this</span> <span m="2016600">is</span> <span m="2016750">a</span>
  <span m="2016800">little</span> <span m="2017080">imprecise,</span> <span
  m="2017670">but</span> <span m="2017800">what</span> <span
  m="2017940">I</span> <span m="2018000">mean</span> <span m="2018220">is</span>
  <span m="2018490">when</span> <span m="2018680">I</span> <span
  m="2019000">call</span> <span m="2019300">search,</span> <span
  m="2020530">I</span> <span m="2020700">tell</span> <span m="2021190">it</span>
  <span m="2021720">where</span> <span m="2022090">I've</span> <span
  m="2022280">already</span> <span m="2022700">found</span> <span
  m="2022990">y.</span> <span m="2023330">And</span> <span
  m="2023480">here</span> <span m="2023780">it</span> <span
  m="2023840">is.</span> <span m="2024160">Here's</span> <span
  m="2024430">the</span> <span m="2024530">node</span> <span
  m="2025000">storing</span> <span m="2025490">y.</span> <span
  m="2026690">And</span> <span m="2026850">now</span> <span
  m="2027470">I'm</span> <span m="2027650">given</span> <span
  m="2027890">a</span> <span m="2027990">key</span> <span m="2028320">x.</span>
  <span m="2029160">And</span> <span m="2029340">I</span> <span
  m="2029370">want</span> <span m="2029540">to</span> <span
  m="2029610">find</span> <span m="2029860">that</span> <span
  m="2030080">key</span> <span m="2030460">x</span> <span
  m="2030850">given</span> <span m="2031780">the</span> <span
  m="2031880">node</span> <span m="2032380">that</span> <span
  m="2032610">stores</span> <span m="2032910">key</span> <span
  m="2033140">y.</span> <span m="2034600">So</span> <span m="2034810">how</span>
  <span m="2035020">long</span> <span m="2035360">should</span> <span
  m="2035550">this</span> <span m="2035730">take?</span> <span
  m="2038080">Will</span> <span m="2038250">be</span> <span m="2038350">a</span>
  <span m="2038390">good</span> <span m="2038580">way</span> <span
  m="2038700">to</span> <span m="2038770">interpolate</span> <span
  m="2039210">between</span> <span m="2039730">constant</span> <span
  m="2040100">time</span> <span m="2040350">at</span> <span
  m="2040430">one</span> <span m="2040590">extreme.</span> <span
  m="2041420">The</span> <span m="2041550">good</span> <span
  m="2041750">case,</span> <span m="2042090">when</span> <span
  m="2042270">x</span> <span m="2042470">and</span> <span m="2042560">y</span>
  <span m="2042800">are</span> <span m="2043200">basically</span> <span
  m="2043570">neighbors</span> <span m="2044300">in</span> <span
  m="2046250">sorted</span> <span m="2046620">order,</span> <span
  m="2047510">versus</span> <span m="2048620">log</span> <span
  m="2049030">n</span> <span m="2049250">time,</span> <span
  m="2049510">in</span> <span m="2049570">the</span> <span
  m="2049639">worst</span> <span m="2049840">case.</span></p><p><span
  m="2052535">AUDIENCE: Distance along</span> <span m="2052990">the
  graph.</span></p><p><span m="2054360">PROFESSOR: Distance</span> <span
  m="2054770">along</span> <span m="2055050">the</span> <span
  m="2055130">graph.</span> <span m="2055620">That</span> <span
  m="2055790">would</span> <span m="2055889">be</span> <span
  m="2056030">one</span> <span m="2056290">reasonable</span> <span
  m="2056699">definition.</span> <span m="2058600">So</span> <span
  m="2059389">I</span> <span m="2059969">have</span> <span m="2060130">a</span>
  <span m="2060190">tree</span> <span m="2060830">which</span> <span
  m="2061020">you</span> <span m="2061100">could</span> <span
  m="2061210">think</span> <span m="2061360">of</span> <span
  m="2061449">as</span> <span m="2061550">a</span> <span
  m="2061620">graph.</span> <span m="2062050">Measure</span> <span
  m="2062510">the</span> <span m="2063370">shortest</span> <span
  m="2063719">path</span> <span m="2064030">length</span> <span
  m="2064449">from</span> <span m="2064760">x</span> <span m="2064940">to</span>
  <span m="2065020">y.</span> <span m="2065920">Or</span> <span
  m="2066260">we</span> <span m="2066460">have</span> <span m="2066710">a</span>
  <span m="2066880">more</span> <span m="2067130">sophisticated</span> <span
  m="2067800">graph</span> <span m="2068080">over</span> <span
  m="2068280">here.</span> <span m="2069340">Maybe</span> <span
  m="2069870">that</span> <span m="2070850">length.</span> <span
  m="2071199">The</span> <span m="2071310">trouble</span> <span
  m="2071639">with</span> <span m="2071780">the</span> <span
  m="2071870">distance</span> <span m="2072219">in</span> <span
  m="2072290">the</span> <span m="2072380">graph,</span> <span
  m="2072639">that's</span> <span m="2072800">a</span> <span
  m="2072860">reasonable</span> <span m="2073250">suggestion,</span> <span
  m="2074110">but</span> <span m="2074230">it's</span> <span
  m="2074360">very</span> <span m="2074780">data</span> <span
  m="2075040">structure</span> <span m="2075400">specific.</span> <span
  m="2076090">If</span> <span m="2076260">I</span> <span m="2076350">use</span>
  <span m="2076830">an AVL</span> <span m="2077199">tree</span> <span
  m="2077380">without</span> <span m="2077710">level</span> <span
  m="2077980">links,</span> <span m="2078840">then</span> <span
  m="2079590">the</span> <span m="2079710">distance</span> <span
  m="2080510">could</span> <span m="2080730">be</span> <span
  m="2081570">one</span> <span m="2081870">thing,</span> <span
  m="2082230">whereas</span> <span m="2082550">if</span> <span
  m="2082719">I</span> <span m="2082820">use</span> <span m="2083675">a</span>
  <span m="2083980">2-3</span> <span m="2084389">tree,</span> <span
  m="2085370">even</span> <span m="2085560">without</span> <span
  m="2085850">level</span> <span m="2086070">lengths,</span> <span
  m="2086290">it's</span> <span m="2086380">going</span> <span
  m="2086500">to</span> <span m="2086560">be</span> <span m="2086679">a</span>
  <span m="2086730">different</span> <span m="2087030">distance.</span> <span
  m="2087469">If</span> <span m="2087630">I</span> <span m="2087699">use</span>
  <span m="2087989">a</span> <span m="2088080">2-3 tree</span> <span
  m="2089040">with</span> <span m="2089260">level</span> <span
  m="2089389">lengths</span> <span m="2089750">it's</span> <span
  m="2089850">going</span> <span m="2089969">to</span> <span
  m="2090020">be</span> <span m="2090130">yet</span> <span
  m="2090300">another</span> <span m="2090580">distance.</span> <span
  m="2090980">So</span> <span m="2091090">that's</span> <span
  m="2091300">a</span> <span m="2091360">little</span> <span
  m="2091639">unsatisfying.</span> <span m="2093350">I</span> <span
  m="2093440">want</span> <span m="2093679">this</span> <span
  m="2093840">to</span> <span m="2093929">be</span> <span m="2094070">an</span>
  <span m="2094199">answer</span> <span m="2094610">to</span> <span
  m="2094750">a</span> <span m="2094810">question.</span> <span
  m="2096409">I</span> <span m="2096560">don't</span> <span
  m="2096690">want</span> <span m="2096790">to</span> <span
  m="2097150">phrase</span> <span m="2097370">the</span> <span
  m="2097460">question</span> <span m="2097810">in</span> <span
  m="2097900">terms</span> <span m="2098160">of</span> <span
  m="2098240">that</span> <span m="2098430">data</span> <span
  m="2098610">structure.</span></p><p><span m="2099492">AUDIENCE: Difference
  between</span> <span m="2099964">ranks</span> <span m="2100436">of x and
  y?</span></p><p><span m="2101380">PROFESSOR: Difference</span> <span
  m="2101740">between</span> <span m="2102060">ranks</span> <span
  m="2102500">between</span> <span m="2103040">x</span> <span
  m="2103300">and</span> <span m="2103390">y.</span> <span
  m="2103720">That's</span> <span m="2104410">close.</span></p><p><span
  m="2109830">So</span> <span m="2109990">I'm</span> <span
  m="2110080">going</span> <span m="2110200">to</span> <span
  m="2110270">look</span> <span m="2110540">at</span> <span
  m="2110760">the</span> <span m="2110860">rank</span> <span
  m="2111110">of</span> <span m="2111300">x</span> <span m="2111620">and</span>
  <span m="2111690">rank</span> <span m="2111920">of</span> <span
  m="2112010">y.</span> <span m="2112580">Let's</span> <span
  m="2112830">say,</span> <span m="2113220">take</span> <span
  m="2113440">the</span> <span m="2113590">absolute</span> <span
  m="2114560">difference.</span> <span m="2115010">That's</span> <span
  m="2115280">kind</span> <span m="2115460">of</span> <span
  m="2115540">how</span> <span m="2115740">far</span> <span
  m="2116050">away</span> <span m="2116240">they</span> <span
  m="2116410">are</span> <span m="2116600">in</span> <span
  m="2116810">sorted</span> <span m="2117200">order.</span> <span m="2118390">Do
  you want</span> <span m="2118570">to add</span> <span
  m="2118790">anything?</span></p><p><span m="2120506">AUDIENCE:
  Log?</span></p><p><span m="2121350">PROFESSOR: Log.</span> <span
  m="2121705">Yeah.</span> <span m="2124660">Because</span> <span
  m="2125510">in</span> <span m="2125660">the</span> <span
  m="2125740">worst</span> <span m="2125950">case</span> <span
  m="2126210">the</span> <span m="2126330">difference</span> <span
  m="2126640">in</span> <span m="2126720">ranks</span> <span
  m="2126990">could</span> <span m="2127150">be</span> <span
  m="2127300">linear.</span> <span m="2128400">So</span> <span
  m="2129090">I</span> <span m="2129250">want</span> <span m="2129460">to</span>
  <span m="2129520">add</span> <span m="2129690">a</span> <span
  m="2129750">log</span> <span m="2130130">out</span> <span
  m="2130260">here</span> <span m="2130560">to</span> <span
  m="2130690">get</span> <span m="2130890">log</span> <span m="2131190">n</span>
  <span m="2131500">in</span> <span m="2131630">that</span> <span
  m="2131790">worst</span> <span m="2132010">case.</span></p><p><span
  m="2135120">Add a big o</span> <span m="2136470">for</span> <span
  m="2136620">safety.</span> <span m="2137660">That's</span> <span
  m="2137910">how</span> <span m="2137990">much</span> <span
  m="2138250">time</span> <span m="2138930">we</span> <span
  m="2139040">want</span> <span m="2139270">to</span> <span
  m="2139370">achieve.</span> <span m="2139810">So</span> <span
  m="2139860">this</span> <span m="2140080">would</span> <span
  m="2140170">be</span> <span m="2140350">the</span> <span
  m="2140430">finger</span> <span m="2140720">search</span> <span
  m="2140990">property</span> <span m="2141360">that</span> <span
  m="2141490">you can</span> <span m="2142090">solve</span> <span
  m="2142540">this</span> <span m="2142720">problem</span> <span
  m="2143700">in</span> <span m="2143850">this</span> <span
  m="2144030">much</span> <span m="2144270">time.</span> <span
  m="2144850">Again,</span> <span m="2145680">difference</span> <span
  m="2145980">in</span> <span m="2146070">ranks</span> <span
  m="2146360">is</span> <span m="2146490">at</span> <span
  m="2146570">most</span> <span m="2146920">n.</span> <span
  m="2147820">So</span> <span m="2147940">this</span> <span
  m="2148110">is</span> <span m="2148240">at</span> <span
  m="2148330">most</span> <span m="2148640">log</span> <span
  m="2148960">n.</span> <span m="2149670">But</span> <span m="2149890">if</span>
  <span m="2150160">y</span> <span m="2150510">is</span> <span
  m="2150700">the</span> <span m="2150790">successor</span> <span
  m="2151340">of</span> <span m="2151410">x</span> <span m="2152110">this</span>
  <span m="2152300">will</span> <span m="2152430">only</span> <span
  m="2152630">be</span> <span m="2153110">constant</span> <span
  m="2154090">and</span> <span m="2154290">this will</span> <span
  m="2154550">be</span> <span m="2155000">constant.</span></p><p><span
  m="2156360">So</span> <span m="2157190">this</span> <span
  m="2157390">is</span> <span m="2157510">great</span> <span
  m="2157810">if</span> <span m="2157930">you're</span> <span
  m="2158030">doing</span> <span m="2158240">lots</span> <span
  m="2158480">of</span> <span m="2158550">searches</span> <span
  m="2159050">and</span> <span m="2160240">you</span> <span
  m="2160370">tend</span> <span m="2160670">to</span> <span
  m="2160760">search</span> <span m="2161130">for</span> <span
  m="2161260">things</span> <span m="2161490">that</span> <span
  m="2161600">are</span> <span m="2161660">nearby,</span> <span
  m="2162080">but</span> <span m="2162270">sometimes</span> <span
  m="2162690">you</span> <span m="2162770">search</span> <span
  m="2162990">for</span> <span m="2163090">things</span> <span
  m="2163350">are</span> <span m="2163460">far</span> <span
  m="2163690">away.</span> <span m="2163950">This</span> <span
  m="2164160">gives</span> <span m="2164320">you</span> <span
  m="2165000">a</span> <span m="2165070">nice</span> <span
  m="2166070">bound.</span></p><p><span m="2172100">On</span> <span
  m="2172240">the</span> <span m="2172330">one</span> <span
  m="2172550">hand,</span> <span m="2173020">we have,</span> <span
  m="2174410">this</span> <span m="2174600">is</span> <span
  m="2174740">our</span> <span m="2174870">goal.</span> <span
  m="2175270">Log</span> <span m="2175560">difference</span> <span
  m="2175900">of</span> <span m="2176020">ranks.</span> <span
  m="2176470">On</span> <span m="2176580">the</span> <span
  m="2176690">other</span> <span m="2176850">hand,</span> <span
  m="2177340">we</span> <span m="2177360">have</span> <span
  m="2177560">the</span> <span m="2177650">suggestion</span> <span
  m="2178200">that</span> <span m="2178670">what</span> <span
  m="2178830">we</span> <span m="2178920">can</span> <span
  m="2179090">achieve</span> <span m="2179610">is</span> <span
  m="2179720">something</span> <span m="2180070">like</span> <span
  m="2180750">the</span> <span m="2180890">distance</span> <span
  m="2181320">in</span> <span m="2181440">the</span> <span
  m="2181530">graph.</span></p><p><span m="2185080">But</span> <span
  m="2185230">we</span> <span m="2185350">have</span> <span m="2185500">a</span>
  <span m="2185560">problem</span> <span m="2186070">with</span> <span
  m="2186200">this.</span> <span m="2186730">I</span> <span
  m="2186800">used</span> <span m="2187010">to</span> <span
  m="2187080">think</span> <span m="2187350">that</span> <span
  m="2187540">data</span> <span m="2187750">structure</span> <span
  m="2188050">solved</span> <span m="2188260">this</span> <span
  m="2188400">problem,</span> <span m="2188650">but</span> <span
  m="2188800">it</span> <span m="2188910">doesn't.</span> <span
  m="2194620">Let</span> <span m="2194940">me</span> <span
  m="2195040">just</span> <span m="2195540">draw--</span> <span
  m="2196210">actually</span> <span m="2196460">I have</span> <span
  m="2196660">a</span> <span m="2196720">tree</span> <span
  m="2196950">right</span> <span m="2197150">there.</span> <span m="2198030">I'm
  going</span> <span m="2198180">to use that</span> <span
  m="2198510">one.</span> <span m="2204900">Suppose</span> <span
  m="2206700">x</span> <span m="2207200">is</span> <span m="2208430">here</span>
  <span m="2209750">and</span> <span m="2209980">y</span> <span
  m="2210300">is</span> <span m="2210510">here.</span> <span
  m="2211880">OK.</span> <span m="2212030">This</span> <span
  m="2212160">is</span> <span m="2212280">a</span> <span m="2212320">bit</span>
  <span m="2212490">of</span> <span m="2212610">a</span> <span
  m="2212670">small</span> <span m="2212980">tree</span> <span
  m="2214200">but</span> <span m="2214780">if</span> <span
  m="2215020">you</span> <span m="2215120">think</span> <span
  m="2215330">about</span> <span m="2215630">it</span> <span
  m="2215790">long</span> <span m="2216040">enough,</span> <span
  m="2217920">this</span> <span m="2218260">node</span> <span
  m="2218570">is</span> <span m="2218950">the</span> <span
  m="2219160">predecessor</span> <span m="2219950">of</span> <span
  m="2220060">this</span> <span m="2220280">node.</span> <span
  m="2220670">So</span> <span m="2220880">their</span> <span
  m="2221020">difference</span> <span m="2221390">in</span> <span
  m="2221510">ranks</span> <span m="2221780">should</span> <span
  m="2222040">be</span> <span m="2222660">1.</span></p><p><span
  m="2226290">But</span> <span m="2226810">the</span> <span
  m="2227060">distance</span> <span m="2227470">in</span> <span
  m="2227560">the</span> <span m="2227650">graph</span> <span
  m="2227930">here</span> <span m="2228200">is</span> <span
  m="2228540">two.</span> <span m="2229330">Not</span> <span
  m="2229530">very</span> <span m="2229680">impressive.</span> <span
  m="2230130">But</span> <span m="2230290">in</span> <span
  m="2230380">general,</span> <span m="2231200">you</span> <span
  m="2231300">have</span> <span m="2231430">a</span> <span
  m="2231490">tree</span> <span m="2231900">of</span> <span
  m="2232050">height</span> <span m="2232380">log</span> <span
  m="2232755">n.</span> <span m="2233810">If</span> <span m="2234030">you</span>
  <span m="2234160">look</span> <span m="2234340">at</span> <span
  m="2234450">the</span> <span m="2234580">root,</span> <span
  m="2235640">and</span> <span m="2235910">the</span> <span
  m="2235990">predecessor</span> <span m="2236720">of</span> <span
  m="2236800">the</span> <span m="2236920">root,</span> <span
  m="2238620">they</span> <span m="2238750">will</span> <span
  m="2238860">have</span> <span m="2239020">a</span> <span
  m="2239110">rank</span> <span m="2239380">difference</span> <span
  m="2239690">of</span> <span m="2239820">one</span> <span m="2240120">by</span>
  <span m="2240240">definition</span> <span m="2240740">of</span> <span
  m="2240810">predecessor.</span> <span m="2242110">But</span> <span
  m="2242640">the</span> <span m="2243000">graph</span> <span
  m="2243320">distance</span> <span m="2243700">will</span> <span
  m="2243840">be</span> <span m="2243980">log</span> <span m="2244440">n.</span>
  <span m="2245690">So</span> <span m="2245870">that's</span> <span
  m="2246140">bad</span> <span m="2246390">news,</span> <span
  m="2246640">because</span> <span m="2246820">if</span> <span
  m="2246920">we're</span> <span m="2247090">only</span> <span
  m="2247280">following</span> <span m="2247660">pointers</span> <span
  m="2248060">there's</span> <span m="2248230">no</span> <span
  m="2248410">way</span> <span m="2248550">to</span> <span
  m="2248620">get</span> <span m="2248840">from</span> <span
  m="2248990">here</span> <span m="2249260">to</span> <span
  m="2249360">there</span> <span m="2250050">in</span> <span
  m="2250210">constant</span> <span m="2250590">time.</span> <span
  m="2251980">So</span> <span m="2252230">we're</span> <span
  m="2252390">not</span> <span m="2252580">quite</span> <span
  m="2253360">there.</span></p><p><span m="2255340">We're</span> <span
  m="2255530">going</span> <span m="2255650">to</span> <span
  m="2255690">use</span> <span m="2256510">another</span> <span
  m="2257120">tweak</span> <span m="2257870">that</span> <span
  m="2258140">data</span> <span m="2258350">structure,</span> <span
  m="2260040">which</span> <span m="2260320">is</span> <span
  m="2263360">store</span> <span m="2263870">the</span> <span
  m="2264010">data</span> <span m="2264320">in</span> <span
  m="2264540">the</span> <span m="2264640">leaves.</span> <span
  m="2272820">Tried</span> <span m="2273030">to</span> <span
  m="2273130">find</span> <span m="2273340">a</span> <span
  m="2273420">data</span> <span m="2273570">structure that</span> <span
  m="2273930">didn't</span> <span m="2274150">require</span> <span
  m="2274530">this</span> <span m="2274820">and</span> <span
  m="2275020">still</span> <span m="2275260">got</span> <span
  m="2275480">finger</span> <span m="2275730">search.</span> <span
  m="2276000">But</span> <span m="2276160">as</span> <span
  m="2276270">far</span> <span m="2276450">as</span> <span m="2276540">I</span>
  <span m="2276600">know,</span> <span m="2276890">there</span> <span
  m="2276990">is</span> <span m="2277140">none.</span> <span
  m="2278000">No</span> <span m="2278110">such</span> <span
  m="2278370">data</span> <span m="2278560">structure.</span> <span
  m="2281610">If</span> <span m="2282620">you</span> <span
  m="2282750">look</span> <span m="2282910">at,</span> <span
  m="2283010">say,</span> <span m="2283250">Wikipedia</span> <span
  m="2283810">about</span> <span m="2284080">B-trees,</span> <span
  m="2284680">you'll</span> <span m="2284710">see</span> <span
  m="2284880">there's</span> <span m="2285060">a</span> <span
  m="2285130">ton</span> <span m="2285380">of</span> <span
  m="2285450">variations</span> <span m="2285970">of</span> <span
  m="2286050">B-trees.</span> <span m="2286510">B+-trees,</span> <span
  m="2287430">B*-trees.</span> <span m="2288230">This</span> <span
  m="2288410">is</span> <span m="2289020">one</span> <span m="2289250">of</span>
  <span m="2289360">those.</span> <span m="2289710">I</span> <span
  m="2289780">think</span> <span m="2290010">B+-trees.</span></p><p><span
  m="2292990">As</span> <span m="2293220">you</span> <span
  m="2293370">saw,</span> <span m="2293640">B-trees</span> <span
  m="2294130">or</span> <span m="2294210">2-3</span> <span
  m="2294570">trees,</span> <span m="2295220">every</span> <span
  m="2295520">node</span> <span m="2295840">stored</span> <span
  m="2296770">one</span> <span m="2297050">or</span> <span
  m="2297140">two</span> <span m="2297340">keys.</span> <span
  m="2299050">And</span> <span m="2299420">each</span> <span
  m="2299710">key</span> <span m="2299950">only</span> <span
  m="2300170">existed</span> <span m="2300610">in</span> <span
  m="2300720">one</span> <span m="2300980">spot.</span> <span
  m="2303080">We're</span> <span m="2303240">still</span> <span
  m="2303510">only</span> <span m="2303710">going</span> <span
  m="2303820">to</span> <span m="2303890">put</span> <span
  m="2304050">each</span> <span m="2304270">key</span> <span
  m="2304460">in</span> <span m="2304610">one</span> <span
  m="2304870">spot,</span> <span m="2305410">kind</span> <span
  m="2305690">of.</span> <span m="2306640">But</span> <span
  m="2307090">it's</span> <span m="2307540">only</span> <span
  m="2307870">going</span> <span m="2308010">to</span> <span
  m="2308080">be</span> <span m="2308200">the</span> <span
  m="2308320">leaf</span> <span m="2308540">spots.</span> <span
  m="2310180">OK.</span> <span m="2310530">Good</span> <span
  m="2310670">news</span> <span m="2310920">is</span> <span
  m="2311120">most</span> <span m="2311440">nodes</span> <span
  m="2311690">are</span> <span m="2311790">leaves,</span> <span
  m="2312230">right?</span> <span m="2312440">Constant</span> <span
  m="2312780">fraction</span> <span m="2313140">of</span> <span
  m="2313240">the</span> <span m="2313320">nodes</span> <span
  m="2313590">are</span> <span m="2313660">going</span> <span
  m="2313790">to</span> <span m="2313840">be</span> <span
  m="2313980">leaves.</span> <span m="2314660">So</span> <span
  m="2314930">it</span> <span m="2315060">doesn't</span> <span
  m="2315530">change</span> <span m="2315940">too</span> <span
  m="2316170">much</span> <span m="2316520">from</span> <span
  m="2316770">a</span> <span m="2317965">space</span> <span
  m="2318220">efficiency</span> <span m="2318720">standpoint.</span> <span
  m="2319480">If</span> <span m="2319650">we</span> <span
  m="2319760">just</span> <span m="2320050">put data</span> <span
  m="2320500">down</span> <span m="2320730">here</span> <span
  m="2321290">and</span> <span m="2321500">don't</span> <span
  m="2321690">put--</span> <span m="2321970">I'm</span> <span
  m="2322090">not</span> <span m="2322240">going</span> <span
  m="2322350">to</span> <span m="2322430">put</span> <span
  m="2322640">any</span> <span m="2322890">keys</span> <span
  m="2323170">up</span> <span m="2323330">here</span> <span
  m="2323620">for</span> <span m="2323740">now.</span></p><p><span
  m="2327690">So</span> <span m="2328930">this</span> <span m="2329130">a</span>
  <span m="2329170">little</span> <span m="2329490">weird.</span> <span
  m="2331080">Let</span> <span m="2331210">me</span> <span
  m="2331320">draw</span> <span m="2331810">an</span> <span
  m="2331900">example</span> <span m="2332430">of</span> <span
  m="2332650">such</span> <span m="2332890">a</span> <span
  m="2332960">tree.</span> <span m="2334036">So maybe</span> <span
  m="2334380">we</span> <span m="2334860">have</span> <span
  m="2335110">2,</span> <span m="2335840">and</span> <span m="2336180">5,</span>
  <span m="2337530">and</span> <span m="2338140">7,</span> <span
  m="2339658">and</span> <span m="2343570">8,</span> <span m="2345120">9,</span>
  <span m="2345420">let's</span> <span m="2345720">say.</span> <span
  m="2349410">Let's</span> <span m="2349510">put</span> <span
  m="2349710">1</span> <span m="2350220">here.</span> <span
  m="2351040">So</span> <span m="2351090">I'm</span> <span
  m="2351200">going</span> <span m="2351310">to</span> <span
  m="2351350">have</span> <span m="2351630">a</span> <span
  m="2351690">node</span> <span m="2352010">here</span> <span
  m="2352280">with</span> <span m="2352610">three</span> <span
  m="2352930">children,</span> <span m="2354190">a</span> <span
  m="2354310">node</span> <span m="2354590">here</span> <span
  m="2355010">with</span> <span m="2355250">two</span> <span
  m="2355460">children,</span> <span m="2356240">and</span> <span
  m="2356310">here's</span> <span m="2356600">a</span> <span
  m="2356670">node</span> <span m="2357000">with</span> <span
  m="2357200">two</span> <span m="2357390">children.</span> <span
  m="2357860">So</span> <span m="2358080">I</span> <span
  m="2358170">think</span> <span m="2358370">this</span> <span
  m="2359010">mimics</span> <span m="2359460">this</span> <span
  m="2359730">tree,</span> <span m="2360570">roughly.</span> <span
  m="2362120">I</span> <span m="2362280">got</span> <span m="2362440">it</span>
  <span m="2362520">exactly</span> <span m="2362900">right.</span></p><p><span
  m="2363620">So</span> <span m="2363900">here</span> <span
  m="2364120">I've</span> <span m="2364220">taken</span> <span
  m="2364560">this</span> <span m="2364920">tree</span> <span
  m="2365240">structure.</span> <span m="2366120">I've</span> <span
  m="2366550">redrawn</span> <span m="2367200">it.</span> <span
  m="2367330">There's</span> <span m="2367530">now</span> <span m="2368230">no
  keys</span> <span m="2368510">in</span> <span m="2368960">these</span> <span
  m="2369150">nodes.</span> <span m="2370300">But</span> <span
  m="2370460">everything</span> <span m="2370880">else</span> <span
  m="2371070">is</span> <span m="2371160">going</span> <span
  m="2371300">to</span> <span m="2371370">be</span> <span m="2371500">the</span>
  <span m="2371590">same.</span> <span m="2372030">Every</span> <span
  m="2372340">node</span> <span m="2372580">is</span> <span
  m="2372700">going</span> <span m="2372840">to</span> <span
  m="2372910">have</span> <span m="2373640">0</span> <span
  m="2374010">children</span> <span m="2374400">if</span> <span
  m="2374510">it's</span> <span m="2374660">a</span> <span
  m="2374720">leaf,</span> <span m="2375490">or</span> <span
  m="2375750">two,</span> <span m="2376000">or</span> <span
  m="2376080">three</span> <span m="2376300">children</span> <span
  m="2376680">otherwise.</span> <span m="2378000">Never</span> <span
  m="2378280">have</span> <span m="2378470">one</span> <span
  m="2378710">child</span> <span m="2379030">because</span> <span
  m="2379260">then</span> <span m="2379420">you</span> <span
  m="2379540">wouldn't</span> <span m="2379770">get</span> <span
  m="2379930">logarithmic</span> <span m="2380470">depth.</span> <span
  m="2381230">All</span> <span m="2381470">the</span> <span
  m="2381570">leaves</span> <span m="2381870">are</span> <span
  m="2381940">going</span> <span m="2382080">to</span> <span
  m="2382130">be</span> <span m="2382280">at</span> <span m="2382370">the</span>
  <span m="2382460">same</span> <span m="2382700">depth.</span></p><p><span
  m="2386380">And that's</span> <span m="2386470">it.</span> <span
  m="2388300">OK.</span> <span m="2388480">That</span> <span
  m="2388690">is</span> <span m="2389100">a</span> <span m="2389400">2-3</span>
  <span m="2389780">tree</span> <span m="2390190">with</span> <span
  m="2390490">the</span> <span m="2390580">data</span> <span
  m="2390850">stored</span> <span m="2391100">in</span> <span
  m="2391190">the</span> <span m="2391270">leaves.</span> <span m="2392410">It's
  a</span> <span m="2392690">useful</span> <span m="2392990">trick</span> <span
  m="2393280">to</span> <span m="2393390">know.</span> <span
  m="2394470">Now</span> <span m="2394700">we're</span> <span
  m="2394850">going</span> <span m="2394950">to</span> <span
  m="2395030">do</span> <span m="2395210">a</span> <span
  m="2395260">level</span> <span m="2395600">linked</span> <span m="2395840">2-3
  tree.</span> <span m="2396600">So</span> <span m="2396810">in</span> <span
  m="2396940">addition</span> <span m="2397350">to</span> <span
  m="2397450">that</span> <span m="2397650">picture,</span> <span
  m="2398560">we're</span> <span m="2398620">going</span> <span
  m="2398840">to</span> <span m="2398890">have</span> <span
  m="2400010">links</span> <span m="2400270">like</span> <span
  m="2400420">this.</span></p><p><span m="2406770">OK. And</span> <span
  m="2407140">I</span> <span m="2407200">should</span> <span
  m="2407400">check</span> <span m="2407960">that</span> <span
  m="2408150">I</span> <span m="2408210">can</span> <span
  m="2408380">still</span> <span m="2408630">do</span> <span
  m="2408770">insert</span> <span m="2409090">and</span> <span
  m="2409210">delete</span> <span m="2409540">into</span> <span
  m="2409760">these</span> <span m="2409930">structures.</span> <span
  m="2410570">It's</span> <span m="2410730">actually</span> <span
  m="2411070">not</span> <span m="2411370">too</span> <span
  m="2411630">hard.</span> <span m="2412960">But</span> <span
  m="2413090">let's</span> <span m="2413260">think</span> <span
  m="2413430">about</span> <span m="2413720">it.</span></p><p><span
  m="2430760">I</span> <span m="2430830">think,</span> <span
  m="2431190">actually,</span> <span m="2431510">it might</span> <span
  m="2431680">be</span> <span m="2431880">easier.</span> <span
  m="2432730">Let's</span> <span m="2433220">see.</span> <span
  m="2436640">So</span> <span m="2437260">if</span> <span m="2437400">I</span>
  <span m="2437450">want</span> <span m="2437610">to</span> <span
  m="2437660">do</span> <span m="2437770">an</span> <span
  m="2437850">insert--</span> <span m="2443320">OK.</span> <span
  m="2443640">I</span> <span m="2443710">have</span> <span m="2443850">to</span>
  <span m="2444010">first</span> <span m="2444270">search</span> <span
  m="2444550">for</span> <span m="2444690">where</span> <span
  m="2444840">I'm</span> <span m="2444940">inserting.</span> <span
  m="2445520">I</span> <span m="2445880">haven't</span> <span
  m="2446020">told</span> <span m="2446260">you</span> <span
  m="2446330">how</span> <span m="2446480">to</span> <span m="2446550">do</span>
  <span m="2446720">search</span> <span m="2447090">yet.</span> <span
  m="2448600">OK.</span> <span m="2449150">So</span> <span
  m="2449470">let's</span> <span m="2449990">first</span> <span
  m="2450240">think</span> <span m="2450410">about</span> <span
  m="2450760">search.</span></p><p><span m="2455780">What</span> <span
  m="2455980">we're</span> <span m="2456130">going</span> <span
  m="2456360">to</span> <span m="2456500">do</span> <span m="2457410">is</span>
  <span m="2459540">data</span> <span m="2459840">structure</span> <span
  m="2460250">augmentation.</span> <span m="2461380">We</span> <span
  m="2461530">have</span> <span m="2462320">simple</span> <span
  m="2462720">tree</span> <span m="2463010">augmentation.</span> <span
  m="2464880">So</span> <span m="2465290">I'm</span> <span
  m="2465450">going</span> <span m="2465560">to</span> <span
  m="2465660">do</span> <span m="2465860">it</span> <span m="2466640">and</span>
  <span m="2466990">each</span> <span m="2467610">node,</span> <span
  m="2468080">what</span> <span m="2468410">the</span> <span
  m="2468560">functions</span> <span m="2469010">I'm</span> <span
  m="2469090">going</span> <span m="2469230">to</span> <span
  m="2469300">store</span> <span m="2469730">are</span> <span
  m="2470450">the</span> <span m="2470600">minimum</span> <span
  m="2471100">key</span> <span m="2471340">in</span> <span
  m="2471440">the</span> <span m="2471520">subtree,</span> <span
  m="2472060">and</span> <span m="2472270">the</span> <span
  m="2472330">maximum</span> <span m="2472870">key</span> <span
  m="2473040">in</span> <span m="2473130">the</span> <span
  m="2473210">subtree.</span> <span m="2483700">There</span> <span
  m="2484040">are</span> <span m="2484060">many</span> <span
  m="2484280">ways</span> <span m="2484500">to</span> <span
  m="2484600">do</span> <span m="2484710">this,</span> <span
  m="2485100">but</span> <span m="2485820">I</span> <span
  m="2486010">think</span> <span m="2486240">this</span> <span
  m="2486420">is</span> <span m="2486560">kind</span> <span
  m="2486730">of</span> <span m="2486820">the</span> <span
  m="2486910">simplest.</span> <span m="2493450">So</span> <span
  m="2493860">what</span> <span m="2494040">that</span> <span
  m="2494210">means</span> <span m="2494610">is</span> <span
  m="2495520">at</span> <span m="2495680">this</span> <span
  m="2495940">node,</span> <span m="2496420">I'm</span> <span
  m="2496610">going</span> <span m="2496730">to</span> <span
  m="2496810">store</span> <span m="2497850">1</span> <span
  m="2498300">as</span> <span m="2498460">the</span> <span
  m="2498560">min</span> <span m="2499540">and</span> <span m="2499860">7</span>
  <span m="2500270">as</span> <span m="2500390">the</span> <span
  m="2500490">max.</span></p><p><span m="2503240">And</span> <span
  m="2503620">at</span> <span m="2504000">this</span> <span
  m="2504170">node</span> <span m="2504390">it's</span> <span
  m="2504530">going</span> <span m="2504660">to</span> <span
  m="2504720">be</span> <span m="2504890">1</span> <span m="2505330">at</span>
  <span m="2505470">the</span> <span m="2505610">min</span> <span
  m="2506400">and</span> <span m="2506670">9</span> <span m="2506960">at</span>
  <span m="2507070">the</span> <span m="2507150">max.</span> <span
  m="2507650">And</span> <span m="2507780">here</span> <span
  m="2508010">we</span> <span m="2508130">have</span> <span m="2508910">8</span>
  <span m="2509220">as</span> <span m="2509360">the</span> <span
  m="2509460">min</span> <span m="2509830">and</span> <span m="2510140">9</span>
  <span m="2510430">as</span> <span m="2510560">the</span> <span
  m="2510650">max.</span> <span m="2512010">Again</span> <span m="2512400">min
  and max</span> <span m="2512990">of</span> <span m="2513070">subtrees</span>
  <span m="2513520">are</span> <span m="2513610">easy</span> <span
  m="2513900">to</span> <span m="2513990">store.</span> <span m="2514320">If
  I</span> <span m="2514630">ever</span> <span m="2514970">change</span> <span
  m="2515380">a</span> <span m="2515410">node</span> <span m="2516190">I</span>
  <span m="2516300">can</span> <span m="2516450">update</span> <span
  m="2516880">it</span> <span m="2517980">based</span> <span
  m="2518400">on</span> <span m="2518500">its</span> <span
  m="2518600">children,</span> <span m="2519120">just</span> <span
  m="2519320">by</span> <span m="2519430">looking</span> <span
  m="2519790">at</span> <span m="2520000">the</span> <span
  m="2520400">min</span> <span m="2520730">of</span> <span
  m="2520970">the</span> <span m="2521150">leftmost</span> <span
  m="2521720">child</span> <span m="2522440">and</span> <span
  m="2522620">the</span> <span m="2522690">max</span> <span
  m="2523070">of</span> <span m="2523170">the</span> <span
  m="2523270">rightmost</span> <span m="2523690">child.</span> <span
  m="2524690">If</span> <span m="2524810">I</span> <span
  m="2525540">didn't</span> <span m="2525720">know</span> <span
  m="2525950">1</span> <span m="2526140">and</span> <span m="2526240">9,</span>
  <span m="2526620">I</span> <span m="2526670">could</span> <span
  m="2526820">just</span> <span m="2526980">look</span> <span
  m="2527130">at</span> <span m="2527230">this</span> <span
  m="2527420">min</span> <span m="2528200">and</span> <span
  m="2528390">that</span> <span m="2528580">max</span> <span
  m="2528845">and</span> <span m="2529110">that's</span> <span
  m="2529300">going</span> <span m="2529410">to</span> <span
  m="2529470">be</span> <span m="2529690">the</span> <span
  m="2529810">min</span> <span m="2529950">and the</span> <span
  m="2530020">max</span> <span m="2530370">of</span> <span
  m="2530460">the</span> <span m="2530570">overall</span> <span
  m="2530930">tree.</span> <span m="2531870">So</span> <span
  m="2532070">in</span> <span m="2532200">constant</span> <span
  m="2532620">time</span> <span m="2533320">I</span> <span
  m="2533420">can</span> <span m="2533560">update</span> <span
  m="2533920">the</span> <span m="2534000">min and the</span> <span
  m="2534380">max</span> <span m="2534680">of</span> <span m="2534780">a</span>
  <span m="2534830">node</span> <span m="2535550">given</span> <span
  m="2535890">the</span> <span m="2535980">min and</span> <span
  m="2536220">the</span> <span m="2536280">max</span> <span
  m="2536570">of</span> <span m="2536680">its</span> <span
  m="2536830">children.</span> <span m="2538680">Special</span> <span
  m="2539090">case</span> <span m="2539460">is at</span> <span
  m="2539620">the</span> <span m="2539710">leaves.</span> <span
  m="2540030">Then</span> <span m="2540160">you</span> <span
  m="2540250">have</span> <span m="2540420">to</span> <span
  m="2540500">actually</span> <span m="2540790">look</span> <span
  m="2540990">at</span> <span m="2541070">keys</span> <span
  m="2541390">and</span> <span m="2541500">compare</span> <span
  m="2541790">them.</span> <span m="2542330">But</span> <span
  m="2542800">leaves</span> <span m="2543080">only</span> <span
  m="2543330">have,</span> <span m="2543690">at</span> <span
  m="2543790">most,</span> <span m="2544060">two</span> <span
  m="2544220">keys.</span> <span m="2544510">So</span> <span
  m="2545140">pretty</span> <span m="2545370">easy</span> <span
  m="2545630">to</span> <span m="2545710">compare</span> <span
  m="2546120">them</span> <span m="2546830">in</span> <span
  m="2547280">constant</span> <span m="2547690">time.</span> <span
  m="2549210">OK.</span></p><p><span m="2549620">So</span> <span
  m="2549790">that's</span> <span m="2550000">how</span> <span
  m="2550070">I</span> <span m="2550110">do</span> <span m="2550220">the</span>
  <span m="2550360">augmentation.</span> <span m="2551310">Now</span> <span
  m="2551530">how</span> <span m="2551700">do</span> <span m="2551810">I</span>
  <span m="2551900">do</span> <span m="2552060">a</span> <span
  m="2552120">search?</span> <span m="2553030">Well,</span> <span
  m="2553440">if</span> <span m="2553630">I'm</span> <span m="2553790">at</span>
  <span m="2553980">a</span> <span m="2554050">node</span> <span
  m="2554380">and</span> <span m="2554480">I'm</span> <span
  m="2554560">searching</span> <span m="2554980">for</span> <span
  m="2555200">a</span> <span m="2555270">key.</span> <span
  m="2557570">Well,</span> <span m="2557760">let's</span> <span
  m="2557900">say</span> <span m="2558020">I'm</span> <span
  m="2558130">at</span> <span m="2558280">this</span> <span
  m="2558500">node.</span> <span m="2558780">I'm</span> <span
  m="2558860">searching</span> <span m="2559230">for</span> <span
  m="2559440">a</span> <span m="2559490">key</span> <span
  m="2559860">like</span> <span m="2561070">8.</span> <span
  m="2562290">What</span> <span m="2562480">I'm</span> <span
  m="2562560">going</span> <span m="2562670">to</span> <span
  m="2562770">do</span> <span m="2562930">is</span> <span
  m="2563040">look</span> <span m="2563280">at</span> <span
  m="2563650">all</span> <span m="2563910">of</span> <span
  m="2564010">the</span> <span m="2564120">children.</span> <span
  m="2564570">In</span> <span m="2564640">this</span> <span
  m="2564800">case,</span> <span m="2565120">there's</span> <span
  m="2565220">two.</span> <span m="2565580">In</span> <span
  m="2565690">the</span> <span m="2565760">worst</span> <span
  m="2565960">case</span> <span m="2566170">there's</span> <span
  m="2566450">three.</span> <span m="2567280">I</span> <span
  m="2567380">look</span> <span m="2567610">at</span> <span
  m="2567670">the</span> <span m="2567770">min and max</span> <span
  m="2569000">and</span> <span m="2569160">I</span> <span m="2569240">see</span>
  <span m="2569480">where</span> <span m="2569710">does</span> <span
  m="2569910">8</span> <span m="2570130">fall?</span> <span m="2570810">Well it
  falls</span> <span m="2571150">in</span> <span m="2571260">this</span> <span
  m="2571500">interval.</span> <span m="2572750">If</span> <span
  m="2572870">I</span> <span m="2572920">was</span> <span
  m="2573010">searching</span> <span m="2573340">for</span> <span m="2573520">7
  1/2</span> <span m="2574850">I</span> <span m="2575000">know</span> <span
  m="2575260">it's</span> <span m="2575410">not</span> <span
  m="2575630">there.</span> <span m="2576400">It's</span> <span
  m="2576560">going</span> <span m="2576680">to</span> <span
  m="2576750">be</span> <span m="2576900">in</span> <span
  m="2577040">between</span> <span m="2577820">here.</span> <span
  m="2578120">If</span> <span m="2578230">I'm</span> <span
  m="2578320">doing</span> <span m="2578710">a</span> <span
  m="2579110">successor</span> <span m="2580800">then</span> <span
  m="2582580">I'll</span> <span m="2582770">go</span> <span
  m="2582930">to</span> <span m="2583010">the</span> <span
  m="2583120">right.</span> <span m="2583420">If</span> <span
  m="2583530">I'm</span> <span m="2583730">doing</span> <span
  m="2583870">predecessor</span> <span m="2584150">I'll</span> <span
  m="2584430">go</span> <span m="2584560">to</span> <span m="2584630">the</span>
  <span m="2584710">left.</span> <span m="2585510">And</span> <span
  m="2585620">then</span> <span m="2585730">take</span> <span
  m="2586130">either</span> <span m="2586370">the</span> <span
  m="2586470">maximum</span> <span m="2586930">item</span> <span
  m="2587190">or</span> <span m="2587260">the</span> <span
  m="2587340">minimum</span> <span m="2587670">item.</span></p><p><span
  m="2588860">If I'm</span> <span m="2589000">searching</span> <span
  m="2589430">for</span> <span m="2589770">8</span> <span m="2590200">I</span>
  <span m="2590330">see, oh.</span> <span m="2590760">8</span> <span
  m="2590980">falls</span> <span m="2591270">in the</span> <span
  m="2591380">interval</span> <span m="2591650">between</span> <span
  m="2591940">8</span> <span m="2592090">and</span> <span m="2592190">9,</span>
  <span m="2592400">so</span> <span m="2592500">I</span> <span
  m="2592580">should</span> <span m="2592760">clearly</span> <span
  m="2593070">take</span> <span m="2593280">the</span> <span
  m="2593380">right</span> <span m="2593600">child</span> <span
  m="2593970">among</span> <span m="2594280">those</span> <span
  m="2594460">two</span> <span m="2594600">children.</span> <span
  m="2595040">In</span> <span m="2595130">general,</span> <span
  m="2595550">there's</span> <span m="2595590">three</span> <span
  m="2595760">children.</span> <span m="2596190">Three</span> <span
  m="2596430">intervals.</span> <span m="2597260">Constant</span> <span
  m="2597660">time.</span> <span m="2597930">I</span> <span
  m="2597990">can</span> <span m="2598160">find</span> <span
  m="2598400">where</span> <span m="2598650">my</span> <span
  m="2598820">key</span> <span m="2599090">falls</span> <span
  m="2599420">in</span> <span m="2599470">the</span> <span
  m="2599580">interval.</span> <span m="2601080">OK.</span></p><p><span
  m="2601330">So</span> <span m="2601490">search</span> <span
  m="2602550">is</span> <span m="2602680">going</span> <span
  m="2602800">to</span> <span m="2602880">take log n</span> <span
  m="2603520">time</span> <span m="2603810">again,</span> <span
  m="2604630">provided</span> <span m="2605200">I</span> <span
  m="2605290">have</span> <span m="2605640">these</span> <span
  m="2605860">mins</span> <span m="2606130">and</span> <span
  m="2606280">maxs.</span> <span m="2609075">If</span> <span
  m="2609540">you</span> <span m="2610140">stare</span> <span
  m="2610390">at</span> <span m="2610460">it</span> <span
  m="2610550">long</span> <span m="2610770">enough,</span> <span
  m="2610970">this</span> <span m="2611130">is</span> <span
  m="2611240">pretty</span> <span m="2611560">much</span> <span
  m="2611800">the</span> <span m="2611900">same</span> <span
  m="2612190">thing</span> <span m="2612500">as</span> <span
  m="2612630">regular</span> <span m="2613100">search</span> <span
  m="2613410">in a</span> <span m="2613560">2-3 tree.</span> <span
  m="2614960">But</span> <span m="2615570">I've</span> <span
  m="2616010">put</span> <span m="2616210">the</span> <span
  m="2616290">data</span> <span m="2616710">just</span> <span
  m="2616910">one</span> <span m="2617130">level</span> <span
  m="2617370">down.</span> <span m="2620030">OK.</span> <span
  m="2623180">Good.</span></p><p><span m="2624650">That</span> <span
  m="2624820">was</span> <span m="2624980">regular</span> <span
  m="2625360">search.</span> <span m="2626430">I</span> <span
  m="2626550">still</span> <span m="2626770">need</span> <span
  m="2626920">to</span> <span m="2627010">do</span> <span
  m="2627230">finger</span> <span m="2627440">search,</span> <span
  m="2627760">but</span> <span m="2627900">we'll</span> <span
  m="2628040">get</span> <span m="2628230">there.</span> <span
  m="2629320">And</span> <span m="2629420">now,</span> <span
  m="2629530">if</span> <span m="2629650">I</span> <span m="2629720">want</span>
  <span m="2629860">to</span> <span m="2629930">do</span> <span
  m="2630030">an</span> <span m="2630120">insert</span> <span
  m="2630570">into</span> <span m="2630780">this</span> <span
  m="2630970">data</span> <span m="2631190">structure,</span> <span
  m="2633570">what</span> <span m="2633710">happens.</span> <span
  m="2634330">Well</span> <span m="2634470">I</span> <span
  m="2634570">search</span> <span m="2634870">for</span> <span
  m="2634960">the</span> <span m="2635080">key</span> <span
  m="2635340">let's</span> <span m="2635510">say I'm</span> <span
  m="2635740">inserting</span> <span m="2636160">6.</span> <span
  m="2637700">So</span> <span m="2638060">maybe</span> <span
  m="2638440">I</span> <span m="2638600">go</span> <span
  m="2638790">here.</span> <span m="2639180">I</span> <span
  m="2639260">say</span> <span m="2639450">because</span> <span
  m="2640530">6.</span> <span m="2640760">Is</span> <span m="2640880">in</span>
  <span m="2641010">this</span> <span m="2641190">interval.</span> <span
  m="2642380">6 is</span> <span m="2642810">in</span> <span
  m="2642930">neither</span> <span m="2643220">of</span> <span
  m="2643270">these</span> <span m="2643430">intervals.</span> <span
  m="2644550">But</span> <span m="2644720">it's</span> <span
  m="2644870">closest</span> <span m="2645440">to</span> <span
  m="2645580">the</span> <span m="2645720">interval</span> <span
  m="2645980">2,</span> <span m="2646160">5,</span> <span m="2646540">or</span>
  <span m="2646640">the</span> <span m="2646730">interval</span> <span
  m="2646980">7.</span> <span m="2647350">Let's</span> <span
  m="2647530">say</span> <span m="2647680">I</span> <span m="2647720">go</span>
  <span m="2647940">down</span> <span m="2648410">to</span> <span
  m="2648850">2,</span> <span m="2649010">5.</span> <span m="2649910">And</span>
  <span m="2650360">well,</span> <span m="2650780">to</span> <span
  m="2651010">insert</span> <span m="2651280">6</span> <span
  m="2651650">I'll</span> <span m="2651730">just</span> <span
  m="2651920">add</span> <span m="2652140">a 6 on</span> <span
  m="2652630">there.</span> <span m="2653300">Of</span> <span
  m="2653340">course,</span> <span m="2653560">now</span> <span
  m="2653730">that</span> <span m="2653920">node is</span> <span
  m="2654220">too</span> <span m="2654370">big.</span></p><p><span
  m="2655410">So</span> <span m="2655590">there's</span> <span
  m="2655730">still</span> <span m="2656000">going</span> <span
  m="2656150">to</span> <span m="2656220">be</span> <span m="2656420">a</span>
  <span m="2656470">split</span> <span m="2656870">case</span> <span
  m="2657230">at</span> <span m="2657540">the</span> <span
  m="2657620">leaves</span> <span m="2658610">where</span> <span
  m="2658840">I</span> <span m="2658880">have</span> <span
  m="2659710">let's</span> <span m="2659980">say,</span> <span
  m="2660670">a,b,c,</span> <span m="2662360">too</span> <span
  m="2662520">many</span> <span m="2662760">keys.</span> <span
  m="2664460">I'm</span> <span m="2664610">going</span> <span
  m="2664690">to</span> <span m="2664760">split</span> <span
  m="2665090">that</span> <span m="2665380">into</span> <span
  m="2667030">a,b</span> <span m="2668660">and c.</span> <span
  m="2669140">This</span> <span m="2669410">is</span> <span
  m="2669590">different</span> <span m="2670010">from</span> <span
  m="2670150">before.</span> <span m="2670850">It</span> <span
  m="2670980">used</span> <span m="2671200">to</span> <span
  m="2671270">be</span> <span m="2671450">I</span> <span
  m="2671650">would</span> <span m="2671690">promote</span> <span
  m="2672130">b</span> <span m="2672360">to</span> <span m="2672520">the</span>
  <span m="2672810">parent</span> <span m="2673800">because</span> <span
  m="2674000">the</span> <span m="2674100">parent</span> <span
  m="2674460">needed</span> <span m="2674720">the</span> <span
  m="2674840">key</span> <span m="2675100">there.</span> <span
  m="2676030">Now</span> <span m="2676410">parents</span> <span
  m="2676780">don't</span> <span m="2676940">have</span> <span
  m="2677110">keys.</span> <span m="2677810">So</span> <span
  m="2678560">I'm</span> <span m="2678720">just</span> <span
  m="2678890">going</span> <span m="2678980">to</span> <span
  m="2679050">split</span> <span m="2679330">this</span> <span
  m="2679500">thing,</span> <span m="2679880">roughly,</span> <span
  m="2680280">in</span> <span m="2680360">half.</span> <span
  m="2682000">It</span> <span m="2682110">works.</span> <span
  m="2684510">It's</span> <span m="2684650">still</span> <span
  m="2684910">the</span> <span m="2685030">case</span> <span
  m="2685640">that</span> <span m="2685980">whoever</span> <span
  m="2686350">was</span> <span m="2686510">the</span> <span
  m="2686610">parent</span> <span m="2687070">up</span> <span
  m="2687220">here</span> <span m="2687960">now</span> <span
  m="2688190">has</span> <span m="2688450">an</span> <span
  m="2688550">additional</span> <span m="2689120">child.</span> <span
  m="2690460">One</span> <span m="2690670">more</span> <span
  m="2690850">child.</span> <span m="2691210">So</span> <span
  m="2691320">maybe</span> <span m="2691760">that</span> <span
  m="2692050">node</span> <span m="2692350">now</span> <span
  m="2692580">has</span> <span m="2693270">four</span> <span
  m="2693570">children</span> <span m="2694020">but</span> <span
  m="2694130">it's</span> <span m="2694260">supposed</span> <span
  m="2694620">to</span> <span m="2694690">be</span> <span m="2694890">two</span>
  <span m="2695090">or</span> <span m="2695180">three.</span> <span
  m="2696390">So</span> <span m="2696550">if</span> <span m="2696780">I</span>
  <span m="2696860">have</span> <span m="2697110">a</span> <span
  m="2697160">node</span> <span m="2697950">with</span> <span
  m="2698240">four</span> <span m="2698470">children,</span> <span
  m="2700120">what</span> <span m="2700320">I'm</span> <span
  m="2700400">going</span> <span m="2700540">to</span> <span
  m="2700620">do,</span> <span m="2701630">I'm suppose</span> <span
  m="2701740">to use</span> <span m="2702010">these</span> <span
  m="2702320">fancy</span> <span m="2702730">arrows.</span> <span
  m="2705140">What</span> <span m="2705300">do</span> <span m="2705360">I</span>
  <span m="2705460">do</span> <span m="2705600">in</span> <span
  m="2705670">this</span> <span m="2705860">case?</span> <span
  m="2706820">It's</span> <span m="2706940">just going</span> <span
  m="2707040">to</span> <span m="2707080">split</span> <span
  m="2707330">that</span> <span m="2707490">into</span> <span
  m="2707720">two</span> <span m="2707920">nodes</span> <span
  m="2708810">with</span> <span m="2709000">two</span> <span
  m="2709170">children.</span> <span m="2710860">And</span> <span
  m="2710980">again</span> <span m="2711860">this</span> <span
  m="2712070">used</span> <span m="2712290">to</span> <span
  m="2712360">have</span> <span m="2712530">a</span> <span
  m="2712590">parent.</span> <span m="2713410">Now</span> <span
  m="2713610">that</span> <span m="2713820">parent</span> <span
  m="2714300">has</span> <span m="2715200">an</span> <span
  m="2715310">additional</span> <span m="2715720">child,</span> <span
  m="2716120">and that</span> <span m="2716380">may</span> <span
  m="2716510">cause</span> <span m="2716750">another</span> <span
  m="2717040">split.</span></p><p><span m="2717830">It's</span> <span
  m="2717990">just</span> <span m="2718260">like</span> <span
  m="2718440">before.</span> <span m="2719030">Was</span> <span
  m="2719280">just</span> <span m="2719720">potentially</span> <span
  m="2720140">split</span> <span m="2720490">all</span> <span
  m="2720680">the</span> <span m="2720770">way</span> <span
  m="2720900">up</span> <span m="2721040">to</span> <span m="2721140">the</span>
  <span m="2721260">root.</span> <span m="2723160">If</span> <span
  m="2723260">we</span> <span m="2723340">split</span> <span
  m="2723580">the</span> <span m="2723680">root</span> <span
  m="2723920">then</span> <span m="2724030">we</span> <span
  m="2724130">get</span> <span m="2724270">an</span> <span
  m="2724360">additional</span> <span m="2725250">level.</span> <span
  m="2726610">But</span> <span m="2727760">we</span> <span
  m="2727870">could</span> <span m="2727990">do</span> <span
  m="2728100">all</span> <span m="2728250">this</span> <span
  m="2728620">and</span> <span m="2728770">we</span> <span
  m="2728870">can</span> <span m="2729020">still</span> <span
  m="2729450">maintain</span> <span m="2730560">our</span> <span
  m="2731680">level</span> <span m="2732040">links,</span> <span
  m="2732400">if</span> <span m="2732540">we</span> <span
  m="2732630">want.</span></p><p><span m="2737430">But</span> <span
  m="2737600">everything</span> <span m="2737890">will</span> <span
  m="2737980">take</span> <span m="2738220">log n.</span> <span
  m="2738770">I</span> <span m="2738900">won't</span> <span
  m="2739160">draw</span> <span m="2739350">the</span> <span
  m="2739510">delete</span> <span m="2739810">case,</span> <span
  m="2741040">as</span> <span m="2741330">delete</span> <span
  m="2741940">is</span> <span m="2742000">slightly</span> <span
  m="2743290">more</span> <span m="2743510">annoying.</span> <span
  m="2743750">But</span> <span m="2743870">I</span> <span
  m="2743930">think,</span> <span m="2744140">in</span> <span
  m="2744230">this</span> <span m="2744400">case,</span> <span
  m="2744620">you</span> <span m="2744740">never</span> <span
  m="2745160">have</span> <span m="2745340">to</span> <span
  m="2745460">worry</span> <span m="2745730">about</span> <span
  m="2746050">where</span> <span m="2746190">is</span> <span
  m="2746340">the</span> <span m="2746440">key</span> <span
  m="2746690">coming</span> <span m="2747010">from,</span> <span
  m="2747290">your</span> <span m="2747430">child</span> <span
  m="2747900">or</span> <span m="2748090">your</span> <span
  m="2749080">parent?</span> <span m="2749740">You're</span> <span
  m="2749870">just</span> <span m="2751040">merging</span> <span
  m="2751340">nodes</span> <span m="2751770">so</span> <span
  m="2751890">it's</span> <span m="2752000">a</span> <span
  m="2752050">little</span> <span m="2752210">bit</span> <span
  m="2752370">simpler.</span> <span m="2753390">But</span> <span
  m="2753560">you</span> <span m="2753630">have</span> <span
  m="2753720">to</span> <span m="2753820">deal</span> <span
  m="2754000">with</span> <span m="2754110">the</span> <span
  m="2754180">leaf</span> <span m="2754410">case</span> <span
  m="2754680">separately</span> <span m="2755090">from</span> <span
  m="2755360">the</span> <span m="2755890">nonleaf</span> <span
  m="2756330">case.</span> <span m="2757190">OK.</span></p><p><span
  m="2757380">So</span> <span m="2757500">all</span> <span
  m="2757690">this</span> <span m="2757840">was</span> <span
  m="2758020">to</span> <span m="2758140">convince</span> <span
  m="2758490">you</span> <span m="2758600">that</span> <span
  m="2758750">we</span> <span m="2758860">can</span> <span
  m="2758980">store</span> <span m="2759200">data</span> <span
  m="2759440">in</span> <span m="2759500">the</span> <span
  m="2759580">leaves.</span> <span m="2759850">2-3 trees</span> <span
  m="2760420">still</span> <span m="2760640">work</span> <span
  m="2760820">fine.</span> <span m="2762310">Now</span> <span
  m="2762800">I</span> <span m="2762900">claim</span> <span
  m="2763460">that</span> <span m="2763770">the graph</span> <span
  m="2764470">distance</span> <span m="2764960">in</span> <span
  m="2765090">level</span> <span m="2765400">link</span> <span
  m="2765620">trees</span> <span m="2766650">is</span> <span
  m="2766840">within</span> <span m="2767100">a</span> <span
  m="2767170">constant</span> <span m="2767610">factor</span> <span
  m="2768140">of</span> <span m="2768460">the</span> <span
  m="2768540">finger</span> <span m="2768900">search</span> <span
  m="2769210">bound.</span> <span m="2770610">So</span> <span
  m="2770760">I</span> <span m="2770840">claim</span> <span m="2771190">I</span>
  <span m="2771270">can</span> <span m="2771440">get</span> <span
  m="2771650">the</span> <span m="2771740">finger</span> <span
  m="2772040">search</span> <span m="2772270">property</span> <span
  m="2773230">in</span> <span m="2773510">2-3 trees,</span> <span
  m="2774630">with</span> <span m="2774780">data</span> <span
  m="2774980">in</span> <span m="2775080">the</span> <span
  m="2775160">leaves,</span> <span m="2775910">with</span> <span
  m="2776070">level</span> <span m="2776370">links.</span> <span
  m="2777360">So</span> <span m="2777560">lots</span> <span
  m="2777830">of</span> <span m="2778690">changes</span> <span
  m="2779120">here.</span> <span m="2779490">But</span> <span
  m="2779710">in</span> <span m="2779830">the</span> <span
  m="2779950">end,</span> <span m="2780910">we're</span> <span
  m="2780920">going</span> <span m="2781090">to</span> <span
  m="2781160">get</span> <span m="2781340">a</span> <span
  m="2781400">finger</span> <span m="2781710">search</span> <span
  m="2781980">bound.</span> <span m="2784210">Let's</span> <span
  m="2784810">go</span> <span m="2785155">over</span> <span
  m="2785500">here.</span></p><p><span m="2806020">So</span> <span
  m="2806100">here's</span> <span m="2806350">a</span> <span
  m="2806420">finger</span> <span m="2806680">search</span> <span
  m="2806950">operation.</span> <span m="2810360">First</span> <span
  m="2810570">thing</span> <span m="2810730">I</span> <span
  m="2810770">want</span> <span m="2810960">to</span> <span
  m="2811020">do</span> <span m="2811210">is</span> <span
  m="2811360">identify</span> <span m="2812740">a</span> <span
  m="2813110">node</span> <span m="2813580">that</span> <span
  m="2813730">I'm</span> <span m="2814270">working</span> <span
  m="2814640">with.</span> <span m="2815670">I</span> <span
  m="2815770">want</span> <span m="2815930">to</span> <span
  m="2815980">start</span> <span m="2816360">from</span> <span
  m="2816740">y's</span> <span m="2817120">node.</span> <span
  m="2817690">So</span> <span m="2817820">we're</span> <span
  m="2817940">supposing</span> <span m="2818400">that</span> <span
  m="2818510">we're</span> <span m="2818660">told</span> <span
  m="2819380">the</span> <span m="2819570">node,</span> <span m="2819990">a
  leaf,</span> <span m="2821610">that</span> <span m="2821840">contains</span>
  <span m="2822240">y.</span> <span m="2822590">So</span> <span
  m="2822890">I'm</span> <span m="2823080">going</span> <span
  m="2823190">to</span> <span m="2823270">let</span> <span m="2824970">v</span>
  <span m="2826090">be</span> <span m="2826320">that</span> <span
  m="2826570">leaf.</span></p><p><span m="2834980">OK.</span> <span
  m="2835170">Because</span> <span m="2835790">we're</span> <span
  m="2835990">supposing</span> <span m="2836670">we've</span> <span
  m="2836820">already</span> <span m="2837100">found</span> <span
  m="2837350">y,</span> <span m="2838380">and</span> <span
  m="2838710">now</span> <span m="2838930">all</span> <span
  m="2839090">the</span> <span m="2839170">data</span> <span
  m="2839370">is</span> <span m="2839460">in</span> <span m="2839530">the</span>
  <span m="2839610">leaves.</span> <span m="2839940">So</span> <span
  m="2840380">give</span> <span m="2840520">me</span> <span
  m="2840610">the</span> <span m="2840720">leaf</span> <span
  m="2840930">that</span> <span m="2841040">contains</span> <span
  m="2841420">y.</span> <span m="2843180">So</span> <span
  m="2843340">that</span> <span m="2843500">should</span> <span
  m="2843610">take</span> <span m="2844000">constant</span> <span
  m="2844110">time.</span> <span m="2844350">That's</span> <span
  m="2844580">just</span> <span m="2844780">part</span> <span
  m="2844930">of</span> <span m="2844980">the</span> <span
  m="2845120">input.</span></p><p><span m="2846790">Now</span> <span
  m="2847120">I'm</span> <span m="2847290">going</span> <span
  m="2847420">to</span> <span m="2847530">do</span> <span m="2847750">a</span>
  <span m="2847850">combination</span> <span m="2848500">of</span> <span
  m="2848600">going</span> <span m="2848910">up</span> <span
  m="2849550">and</span> <span m="2849850">horizontal.</span> <span
  m="2851850">So</span> <span m="2851900">starting</span> <span
  m="2852340">at</span> <span m="2852410">a</span> <span
  m="2852500">leaf.</span> <span m="2853990">And</span> <span
  m="2854840">the</span> <span m="2855000">first</span> <span
  m="2855350">thing</span> <span m="2855540">I'm</span> <span
  m="2855610">going</span> <span m="2855740">to</span> <span
  m="2855840">do</span> <span m="2856230">is</span> <span
  m="2856460">check,</span> <span m="2857430">does</span> <span
  m="2857660">this</span> <span m="2859300">leaf</span> <span
  m="2859890">contain</span> <span m="2861060">what</span> <span
  m="2861250">I</span> <span m="2861340">want?</span> <span
  m="2861910">Does</span> <span m="2862060">it</span> <span
  m="2862160">contain</span> <span m="2862630">the</span> <span m="2862740">key
  I'm</span> <span m="2863030">searching</span> <span m="2863330">for,</span>
  <span m="2863510">which</span> <span m="2863690">is</span> <span
  m="2863840">x?</span> <span m="2864850">So</span> <span
  m="2865010">that's</span> <span m="2865240">going</span> <span
  m="2865370">to</span> <span m="2865440">be</span> <span m="2865580">the</span>
  <span m="2865700">case.</span> <span m="2866595">At</span> <span
  m="2866990">every</span> <span m="2867310">node</span> <span
  m="2867700">I</span> <span m="2867770">store</span> <span
  m="2868210">the</span> <span m="2868380">min and</span> <span
  m="2868550">the</span> <span m="2868620">max.</span> <span
  m="2869310">So</span> <span m="2869590">if</span> <span m="2869920">x</span>
  <span m="2870290">happens</span> <span m="2870570">to</span> <span
  m="2870690">fall</span> <span m="2871010">between</span> <span
  m="2871970">the</span> <span m="2872120">min</span> <span
  m="2872200">and</span> <span m="2872310">the</span> <span
  m="2872370">max,</span> <span m="2873770">then</span> <span
  m="2874160">I'm</span> <span m="2874490">happy.</span></p><p><span
  m="2876010">Then</span> <span m="2876400">I'm</span> <span
  m="2876530">going</span> <span m="2876670">to</span> <span
  m="2876780">do</span> <span m="2877620">a</span> <span
  m="2877700">regular</span> <span m="2878100">search</span> <span
  m="2883830">in</span> <span m="2884120">v's</span> <span
  m="2884180">subtree.</span> <span m="2886320">This</span> <span
  m="2886700">seems</span> <span m="2886930">weird</span> <span m="2887330">in
  the case</span> <span m="2887780">of a leaf.</span> <span
  m="2888220">In</span> <span m="2888290">the</span> <span
  m="2888380">case</span> <span m="2888650">of a leaf,</span> <span
  m="2889020">this</span> <span m="2889190">is</span> <span m="2889290">just
  to</span> <span m="2889640">check</span> <span m="2889910">the</span> <span
  m="2890010">two</span> <span m="2890180">keys</span> <span
  m="2890510">that</span> <span m="2890620">are</span> <span
  m="2890700">there.</span> <span m="2891580">Which</span> <span
  m="2891810">one</span> <span m="2891980">is</span> <span m="2892110">x.</span>
  <span m="2893290">OK.</span> <span m="2893460">But</span> <span
  m="2893640">in</span> <span m="2893750">general</span> <span
  m="2894890">I</span> <span m="2895060">gave</span> <span
  m="2895310">you</span> <span m="2895440">this</span> <span
  m="2895660">search</span> <span m="2895960">algorithm</span> <span
  m="2896460">which</span> <span m="2896650">was,</span> <span
  m="2898350">if</span> <span m="2899150">I</span> <span
  m="2899290">decide</span> <span m="2899880">which</span> <span
  m="2900150">child</span> <span m="2900460">to</span> <span
  m="2900540">take,</span> <span m="2900830">according</span> <span
  m="2901190">to</span> <span m="2901300">the</span> <span
  m="2901400">ranges,</span> <span m="2901780">that's</span> <span
  m="2901990">a</span> <span m="2902070">downward</span> <span
  m="2902630">search.</span> <span m="2903760">So</span> <span
  m="2903960">that's</span> <span m="2904170">what</span> <span
  m="2904270">I'm</span> <span m="2904360">calling</span> <span
  m="2904650">regular</span> <span m="2905730">search</span> <span
  m="2906070">here.</span> <span m="2906250">Maybe</span> <span
  m="2906530">downward</span> <span m="2906805">would</span> <span
  m="2907080">be a little</span> <span m="2907440">better.</span></p><p><span
  m="2913710">This</span> <span m="2913860">is</span> <span
  m="2913970">the</span> <span m="2914090">usual</span> <span
  m="2914700">log</span> <span m="2915170">n</span> <span
  m="2915520">time</span> <span m="2915840">thing.</span> <span
  m="2917650">But</span> <span m="2918130">we're</span> <span
  m="2918260">going</span> <span m="2918370">to</span> <span
  m="2918440">claim</span> <span m="2918670">a</span> <span
  m="2919040">bound</span> <span m="2919470">better</span> <span
  m="2919750">than</span> <span m="2919930">log</span> <span
  m="2920210">n.</span> <span m="2920980">If</span> <span
  m="2921150">this</span> <span m="2921340">is</span> <span
  m="2921480">not</span> <span m="2921760">the</span> <span
  m="2921860">case,</span> <span m="2922670">then</span> <span
  m="2922820">I</span> <span m="2922880">know</span> <span m="2923150">x</span>
  <span m="2923420">either</span> <span m="2923670">falls</span> <span
  m="2923980">before</span> <span m="2924520">v.min</span> <span
  m="2925210">or</span> <span m="2925410">after</span> <span
  m="2925800">v.max.</span></p><p><span m="2929260">So</span> <span
  m="2929500">if</span> <span m="2929640">x</span> <span m="2930020">is</span>
  <span m="2930270">less</span> <span m="2930700">than</span> <span
  m="2932110">v.min</span> <span m="2934400">then</span> <span
  m="2935710">I'm</span> <span m="2935790">going</span> <span
  m="2935940">to</span> <span m="2936640">go</span> <span
  m="2936830">left.</span> <span m="2938100">v</span> <span
  m="2938380">equals</span> <span m="2938880">v.</span> <span
  m="2941320">I'll</span> <span m="2941440">call</span> <span
  m="2941660">it</span> <span m="2941790">level</span> <span
  m="2942150">left</span> <span m="2942470">to</span> <span
  m="2942600">be</span> <span m="2942840">clear.</span> <span
  m="2944710">You</span> <span m="2944840">might</span> <span
  m="2945060">say</span> <span m="2945220">left</span> <span
  m="2945550">is</span> <span m="2945680">the</span> <span
  m="2945780">left</span> <span m="2946060">child.</span> <span
  m="2946560">There's</span> <span m="2946820">no</span> <span
  m="2946940">left</span> <span m="2947140">child</span> <span
  m="2947400">here,</span> <span m="2947570">of</span> <span
  m="2947660">course.</span> <span m="2947980">But</span> <span
  m="2948650">level</span> <span m="2948920">left</span> <span
  m="2949190">is</span> <span m="2949310">clear.</span> <span
  m="2949490">We</span> <span m="2949620">take</span> <span
  m="2949840">the</span> <span m="2949930">horizontal</span> <span
  m="2950450">left</span> <span m="2950660">pointer.</span> <span
  m="2953100">And</span> <span m="2953540">otherwise</span> <span
  m="2954650">x</span> <span m="2954990">is</span> <span
  m="2955210">greater</span> <span m="2955580">than</span> <span
  m="2955890">v.max.</span> <span m="2958000">And</span> <span
  m="2958170">in</span> <span m="2958250">that</span> <span
  m="2958450">case</span> <span m="2959700">I</span> <span
  m="2959740">will</span> <span m="2959900">go</span> <span
  m="2960060">right.</span> <span m="2961420">That</span> <span
  m="2961600">seems</span> <span m="2961910">logical.</span></p><p><span
  m="2965580">And</span> <span m="2965810">in</span> <span
  m="2965920">both</span> <span m="2966200">cases</span> <span
  m="2967630">we're</span> <span m="2967880">going</span> <span
  m="2968170">to</span> <span m="2969650">go</span> <span m="2969880">up.</span>
  <span m="2972650">x</span> <span m="2972910">equals</span> <span
  m="2973230">x.parent</span> <span m="2975390">Whoops.</span> <span
  m="2976250">v</span> <span m="2976575">equals</span> <span
  m="2976900">v.parent.</span> <span m="2979050">X</span> <span
  m="2979310">is</span> <span m="2979420">not</span> <span
  m="2979600">changing</span> <span m="2979910">here.</span> <span
  m="2980060">X</span> <span m="2980290">is</span> <span m="2980390">a</span>
  <span m="2980470">key</span> <span m="2980710">we're</span> <span
  m="2980820">searching</span> <span m="2981140">for.</span> <span
  m="2981560">v</span> <span m="2981910">is</span> <span m="2982400">the</span>
  <span m="2982490">node.</span> <span m="2983470">V</span> <span
  m="2983710">for</span> <span m="2983840">vertex.</span> <span
  m="2986020">So</span> <span m="2986180">we're</span> <span
  m="2986350">always</span> <span m="2986700">going</span> <span
  m="2986840">to</span> <span m="2986890">go</span> <span m="2987190">up,</span>
  <span m="2988620">and</span> <span m="2988820">then</span> <span
  m="2988990">we're</span> <span m="2989120">going</span> <span
  m="2989230">to</span> <span m="2989290">go</span> <span
  m="2989480">either</span> <span m="2989860">left</span> <span
  m="2990160">or</span> <span m="2990260">right,</span> <span
  m="2991450">and</span> <span m="2991520">we're</span> <span
  m="2991620">going</span> <span m="2991710">to</span> <span
  m="2991780">keep</span> <span m="2992050">doing</span> <span
  m="2992310">that</span> <span m="2992530">until</span> <span
  m="2992990">we</span> <span m="2993120">find</span> <span m="2993490">a</span>
  <span m="2993530">subtree</span> <span m="2993750">that</span> <span
  m="2994030">contains</span> <span m="2994490">x</span> <span
  m="2994940">in</span> <span m="2995030">terms</span> <span
  m="2995280">of</span> <span m="2995390">key</span> <span
  m="2995600">range.</span> <span m="2996690">Then</span> <span
  m="2996870">we're</span> <span m="2996960">going</span> <span
  m="2997060">to</span> <span m="2997120">stop</span> <span
  m="2997530">this</span> <span m="2997820">part</span> <span
  m="2998630">and</span> <span m="2998970">we're</span> <span
  m="2999070">just</span> <span m="2999240">going</span> <span
  m="2999360">to</span> <span m="2999450">do</span> <span
  m="2999720">downward</span> <span m="3000150">search.</span> <span
  m="3000780">I</span> <span m="3000880">should</span> <span
  m="3000980">say</span> <span m="3001350">return</span> <span m="3002220">here
  or</span> <span m="3002550">something.</span> <span m="3004120">I'm</span>
  <span m="3004240">going</span> <span m="3004340">to</span> <span
  m="3004420">do</span> <span m="3004580">a</span> <span
  m="3004650">downward</span> <span m="3005080">search,</span> <span
  m="3005470">which</span> <span m="3005560">was</span> <span
  m="3005700">this</span> <span m="3005840">regular</span> <span
  m="3006290">algorithm.</span> <span m="3007860">And</span> <span
  m="3008050">then</span> <span m="3008310">whatever</span> <span
  m="3008640">it</span> <span m="3008730">finds,</span> <span
  m="3009200">that's</span> <span m="3009410">what</span> <span
  m="3009530">I</span> <span m="3009590">return.</span></p><p><span
  m="3012140">I</span> <span m="3012230">claim</span> <span
  m="3013530">the</span> <span m="3013630">algorithm</span> <span
  m="3014020">should</span> <span m="3014230">be</span> <span
  m="3014420">clear.</span> <span m="3014770">What's</span> <span
  m="3015030">less</span> <span m="3015270">clear</span> <span
  m="3015580">is</span> <span m="3015690">that</span> <span
  m="3015830">it</span> <span m="3015950">achieves</span> <span
  m="3016300">the</span> <span m="3016380">bound</span> <span
  m="3016670">that</span> <span m="3016750">we</span> <span
  m="3016890">want.</span> <span m="3017840">But</span> <span
  m="3017960">I</span> <span m="3018020">claim</span> <span m="3018350">that
  this</span> <span m="3018540">will</span> <span m="3018680">achieve</span>
  <span m="3019120">the</span> <span m="3019230">finger</span> <span
  m="3019590">search</span> <span m="3020390">property.</span> <span
  m="3023140">Let</span> <span m="3023320">me</span> <span
  m="3023700">draw</span> <span m="3023940">a</span> <span
  m="3024010">picture</span> <span m="3024520">of</span> <span
  m="3024800">what</span> <span m="3024950">this</span> <span
  m="3025130">thing</span> <span m="3025290">looks</span> <span
  m="3025410">like</span> <span m="3031510">kind</span> <span
  m="3031650">of</span> <span m="3031740">generically.</span> <span
  m="3033175">On</span> <span m="3033620">small</span> <span
  m="3033940">examples</span> <span m="3034440">it's</span> <span
  m="3034580">hard</span> <span m="3034770">to</span> <span
  m="3034850">see</span> <span m="3035030">what's</span> <span
  m="3035240">going</span> <span m="3035520">on.</span> <span
  m="3035880">So</span> <span m="3035970">I'm</span> <span
  m="3036120">going</span> <span m="3036230">to</span> <span
  m="3036380">draw</span> <span m="3037350">a</span> <span
  m="3037410">piece</span> <span m="3037890">of</span> <span
  m="3038170">a</span> <span m="3038220">large</span> <span
  m="3038600">example.</span></p><p><span m="3044160">Let's</span> <span
  m="3044440">say</span> <span m="3044680">we</span> <span
  m="3044860">start</span> <span m="3045790">here.</span> <span
  m="3047190">This</span> <span m="3047420">is</span> <span
  m="3047580">where</span> <span m="3047980">y</span> <span
  m="3048360">was.</span> <span m="3049395">I'm</span> <span
  m="3049850">searching</span> <span m="3050150">for</span> <span
  m="3050290">x.</span> <span m="3050570">Let's</span> <span
  m="3050760">suppose</span> <span m="3051110">x is</span> <span
  m="3051420">to</span> <span m="3051520">the</span> <span
  m="3051650">right.</span> <span m="3052910">'Cause</span> <span
  m="3053030">otherwise</span> <span m="3053340">I</span> <span m="3053430">go
  to</span> <span m="3053660">the</span> <span m="3053760">other</span> <span
  m="3053900">board.</span> <span m="3055600">So</span> <span m="3056390">x
  is</span> <span m="3056770">to</span> <span m="3056890">the</span> <span
  m="3057000">right.</span> <span m="3057290">I'll</span> <span
  m="3057440">discover</span> <span m="3058140">that</span> <span
  m="3058510">the</span> <span m="3058620">range</span> <span
  m="3059230">with</span> <span m="3059530">just</span> <span
  m="3059820">this</span> <span m="3060040">node,</span> <span
  m="3060310">this</span> <span m="3060480">node</span> <span
  m="3060740">maybe</span> <span m="3060980">contains</span> <span
  m="3061320">one</span> <span m="3061500">other</span> <span
  m="3061680">key.</span> <span m="3062440">I'll find</span> <span
  m="3062650">that</span> <span m="3062800">range</span> <span
  m="3063110">is</span> <span m="3063410">too</span> <span
  m="3064710">small.</span> <span m="3065410">So</span> <span m="3065710">I'm
  going</span> <span m="3065820">to</span> <span m="3065890">go</span> <span
  m="3066360">follow</span> <span m="3066650">the</span> <span
  m="3066800">level</span> <span m="3067540">right</span> <span
  m="3067840">pointer,</span> <span m="3068660">and</span> <span
  m="3068800">I</span> <span m="3068860">get</span> <span m="3069040">to</span>
  <span m="3069120">some</span> <span m="3069330">other</span> <span
  m="3069550">node.</span></p><p><span m="3070930">Then</span> <span
  m="3071120">I'm</span> <span m="3071210">going</span> <span
  m="3071330">to</span> <span m="3071390">go</span> <span m="3071530">to</span>
  <span m="3071600">the</span> <span m="3071710">parent.</span> <span
  m="3072600">Maybe</span> <span m="3073510">the</span> <span
  m="3073610">parent</span> <span m="3074120">was</span> <span
  m="3074410">the</span> <span m="3074490">parent</span> <span
  m="3074730">of</span> <span m="3074800">those</span> <span
  m="3075000">two</span> <span m="3075540">children</span> <span
  m="3075910">so</span> <span m="3076030">I'm going to</span> <span
  m="3076300">draw</span> <span m="3076450">it</span> <span
  m="3076510">like</span> <span m="3076690">that.</span> <span
  m="3077930">Maybe</span> <span m="3078250">I</span> <span
  m="3078280">find</span> <span m="3078590">this</span> <span
  m="3078730">range</span> <span m="3078970">is</span> <span
  m="3079060">still</span> <span m="3079380">too</span> <span
  m="3080500">low.</span> <span m="3081340">I</span> <span
  m="3081460">need</span> <span m="3081640">to</span> <span
  m="3081730">go</span> <span m="3081940">right</span> <span
  m="3082280">to</span> <span m="3082380">get</span> <span m="3082670">to
  x,</span> <span m="3083670">so I'm</span> <span m="3083790">going to</span>
  <span m="3083920">follow</span> <span m="3084320">a</span> <span
  m="3084410">level</span> <span m="3084810">pointer</span> <span
  m="3085150">to</span> <span m="3085260">the</span> <span
  m="3085370">right.</span> <span m="3086630">I</span> <span
  m="3086760">find</span> <span m="3087310">a</span> <span
  m="3087390">new</span> <span m="3087570">subtree.</span> <span
  m="3089340">I'll</span> <span m="3089520">go</span> <span
  m="3089650">to</span> <span m="3089790">its</span> <span
  m="3089950">parent.</span> <span m="3091490">Maybe</span> <span
  m="3091960">I</span> <span m="3092020">find</span> <span
  m="3092380">that</span> <span m="3092480">this</span> <span
  m="3092690">subtree,</span> <span m="3093170">still</span> <span
  m="3093570">the</span> <span m="3093650">max</span> <span
  m="3093980">is</span> <span m="3094120">too</span> <span
  m="3094300">small.</span> <span m="3095160">So</span> <span
  m="3095310">I</span> <span m="3095370">have</span> <span m="3095500">to</span>
  <span m="3095600">go</span> <span m="3095760">to</span> <span
  m="3095830">the</span> <span m="3095930">right</span> <span
  m="3096150">again.</span> <span m="3097360">And</span> <span
  m="3097420">then</span> <span m="3097560">I</span> <span
  m="3097630">take</span> <span m="3097800">the</span> <span
  m="3097900">parent.</span> <span m="3098740">So</span> <span
  m="3098910">this</span> <span m="3099130">was</span> <span
  m="3099360">an</span> <span m="3099440">example</span> <span
  m="3100220">of</span> <span m="3100700">a</span> <span
  m="3100810">rightward</span> <span m="3101140">parent.</span> <span
  m="3101500">Here's</span> <span m="3101740">an</span> <span
  m="3101780">example</span> <span m="3102250">of</span> <span
  m="3102320">a</span> <span m="3102370">leftward</span> <span
  m="3102750">parent.</span> <span m="3103120">This</span> <span
  m="3103320">is</span> <span m="3103440">maybe</span> <span
  m="3103650">the</span> <span m="3103750">parent</span> <span
  m="3104060">of</span> <span m="3104130">both</span> <span
  m="3104380">of</span> <span m="3104460">these</span> <span
  m="3104660">two</span> <span m="3104830">children.</span></p><p><span
  m="3106860">Then</span> <span m="3107290">maybe</span> <span
  m="3107620">this</span> <span m="3107820">subtree</span> <span
  m="3108250">is</span> <span m="3108350">still</span> <span
  m="3108830">too</span> <span m="3109380">small,</span> <span
  m="3109860">the</span> <span m="3109940">max</span> <span
  m="3110230">is</span> <span m="3110320">still</span> <span
  m="3110900">smaller</span> <span m="3111360">than</span> <span
  m="3111510">x.</span> <span m="3112300">So</span> <span
  m="3112490">then</span> <span m="3112720">I</span> <span m="3112810">go</span>
  <span m="3113040">right</span> <span m="3113280">one</span> <span
  m="3113410">more</span> <span m="3113610">time.</span> <span
  m="3116170">Then</span> <span m="3116320">I</span> <span
  m="3116530">follow</span> <span m="3116820">the</span> <span
  m="3116930">parent.</span> <span m="3117470">Always</span> <span
  m="3117660">alternating</span> <span m="3118220">between</span> <span
  m="3118590">right</span> <span m="3118910">and</span> <span
  m="3119020">parent</span> <span m="3119950">until</span> <span
  m="3121350">I</span> <span m="3121480">find</span> <span m="3121800">a</span>
  <span m="3121850">node</span> <span m="3123130">whose</span> <span
  m="3123590">subtree</span> <span m="3124840">contains</span> <span
  m="3125670">x.</span> <span m="3126170">It</span> <span
  m="3126260">might</span> <span m="3126430">have</span> <span
  m="3126520">actually,</span> <span m="3127370">x</span> <span m="3127590">may
  be</span> <span m="3127830">down</span> <span m="3128070">here,</span> <span
  m="3128370">because</span> <span m="3128580">I</span> <span
  m="3128660">immediately</span> <span m="3129230">went</span> <span
  m="3129700">to</span> <span m="3129790">the</span> <span
  m="3129890">parent</span> <span m="3130240">without</span> <span
  m="3130540">checking</span> <span m="3131000">whether</span> <span
  m="3131260">I</span> <span m="3131310">found</span> <span
  m="3132070">where</span> <span m="3132270">x is.</span></p><p><span
  m="3133370">But</span> <span m="3133540">if</span> <span m="3133660">I</span>
  <span m="3133740">know</span> <span m="3133900">that</span> <span
  m="3134030">x</span> <span m="3134290">is</span> <span
  m="3134360">somewhere</span> <span m="3134700">in</span> <span
  m="3134770">here</span> <span m="3135430">then</span> <span
  m="3135650">I</span> <span m="3135760">will</span> <span m="3135910">do</span>
  <span m="3136030">a</span> <span m="3136120">downward</span> <span
  m="3136630">search.</span> <span m="3138180">It</span> <span
  m="3138270">might</span> <span m="3138530">go</span> <span
  m="3138720">left</span> <span m="3139110">and</span> <span
  m="3139230">then</span> <span m="3139370">down</span> <span
  m="3139620">here,</span> <span m="3139980">or</span> <span m="3140130">it
  might go</span> <span m="3140660">right,</span> <span m="3141050">or</span>
  <span m="3141180">there's</span> <span m="3141380">actually</span> <span
  m="3142080">potentially</span> <span m="3142490">three</span> <span
  m="3142710">children.</span> <span m="3143590">One</span> <span
  m="3143840">of</span> <span m="3143930">these</span> <span
  m="3144120">searches</span> <span m="3145660">will</span> <span
  m="3145920">find</span> <span m="3146620">the</span> <span
  m="3146730">key</span> <span m="3147030">x</span> <span
  m="3147300">that</span> <span m="3147430">I'm</span> <span
  m="3147530">looking</span> <span m="3147830">for</span> <span
  m="3149410">because</span> <span m="3150890">I'm</span> <span
  m="3151210">in</span> <span m="3151390">the</span> <span
  m="3151500">case</span> <span m="3151940">where</span> <span
  m="3153020">x</span> <span m="3153310">is</span> <span
  m="3153440">between</span> <span m="3153860">v.min</span> <span
  m="3154320">and</span> <span m="3154420">v.max,</span> <span
  m="3154580">so</span> <span m="3155000">I</span> <span m="3155070">know</span>
  <span m="3155200">it's</span> <span m="3155320">in</span> <span
  m="3155430">there,</span> <span m="3155550">somewhere.</span> <span
  m="3157090">It</span> <span m="3157170">could</span> <span
  m="3157290">be</span> <span m="3157430">x</span> <span
  m="3157600">doesn't</span> <span m="3157800">exist,</span> <span
  m="3158290">but</span> <span m="3158320">it's</span> <span
  m="3159480">predecessor</span> <span m="3160060">or</span> <span
  m="3160160">successor</span> <span m="3160670">is</span> <span
  m="3160760">in</span> <span m="3160880">there</span> <span
  m="3161020">somewhere.</span></p><p><span m="3162710">And</span> <span
  m="3162860">so</span> <span m="3163230">one</span> <span m="3163620">of</span>
  <span m="3163750">these</span> <span m="3164020">three</span> <span
  m="3164750">subtrees</span> <span m="3165320">will</span> <span
  m="3165480">contain</span> <span m="3166000">the</span> <span
  m="3166150">x</span> <span m="3166370">range.</span> <span
  m="3167310">And</span> <span m="3167520">then</span> <span
  m="3167640">I</span> <span m="3167690">go</span> <span
  m="3167920">follow</span> <span m="3168350">that</span> <span
  m="3168600">path.</span> <span m="3169720">And</span> <span
  m="3169960">keep</span> <span m="3170140">going</span> <span
  m="3170400">down</span> <span m="3171730">until</span> <span
  m="3172030">I</span> <span m="3172110">find</span> <span m="3172360">x</span>
  <span m="3172590">or it's</span> <span m="3172920">predecessor</span> <span
  m="3173440">or</span> <span m="3173520">successor.</span> <span
  m="3174200">Once</span> <span m="3174620">I</span> <span
  m="3174710">find</span> <span m="3174900">it's</span> <span
  m="3174990">predecessor</span> <span m="3175760">I</span> <span
  m="3175850">can</span> <span m="3176040">use</span> <span m="3176230">a</span>
  <span m="3176310">level</span> <span m="3176830">right</span> <span
  m="3177070">pointer</span> <span m="3177440">to find</span> <span
  m="3177660">its</span> <span m="3177730">successor,</span> <span
  m="3178390">and</span> <span m="3178490">so</span> <span
  m="3178610">on.</span></p><p><span m="3181270">So</span> <span
  m="3181510">that's</span> <span m="3181790">kind</span> <span
  m="3182020">of</span> <span m="3182110">the</span> <span
  m="3182280">general</span> <span m="3182620">picture</span> <span
  m="3182950">what's</span> <span m="3183170">going</span> <span
  m="3183410">on.</span> <span m="3183620">We</span> <span
  m="3183730">keep</span> <span m="3183980">going</span> <span
  m="3185010">rightward</span> <span m="3185580">and</span> <span
  m="3185700">we</span> <span m="3185800">keep</span> <span
  m="3185980">going</span> <span m="3186250">up.</span> <span
  m="3190580">Suppose</span> <span m="3191440">we</span> <span
  m="3191640">do</span> <span m="3192080">k</span> <span m="3193060">up</span>
  <span m="3193280">steps.</span> <span m="3195780">Let's</span> <span
  m="3195940">look</span> <span m="3196130">at</span> <span
  m="3196240">this</span> <span m="3197870">last</span> <span
  m="3198230">step</span> <span m="3198580">here.</span> <span
  m="3199950">Step</span> <span m="3200150">k.</span></p><p><span
  m="3205720">How</span> <span m="3205930">high</span> <span
  m="3206210">am</span> <span m="3206390">I</span> <span m="3206510">in</span>
  <span m="3206610">the</span> <span m="3206710">tree?</span> <span
  m="3207080">I</span> <span m="3207150">started</span> <span
  m="3207590">at</span> <span m="3207710">the</span> <span
  m="3207810">leaf</span> <span m="3208060">level.</span> <span
  m="3208400">Remember</span> <span m="3208630">in</span> <span
  m="3208710">a</span> <span m="3208780">2-3 tree</span> <span
  m="3209350">all</span> <span m="3209600">the</span> <span
  m="3209680">leaves</span> <span m="3209980">have</span> <span
  m="3210160">the</span> <span m="3210240">same</span> <span
  m="3210500">level.</span> <span m="3211720">And</span> <span
  m="3211900">I</span> <span m="3211980">went</span> <span m="3212290">up</span>
  <span m="3213110">every</span> <span m="3213400">step.</span></p><p><span
  m="3214730">Sorry.</span> <span m="3216270">I</span> <span
  m="3216350">don't</span> <span m="3216470">know</span> <span
  m="3216590">what</span> <span m="3216770">this</span> <span
  m="3217050">is,</span> <span m="3217200">like</span> <span
  m="3217450">the</span> <span m="3217670">2-step</span> <span
  m="3218240">dance</span> <span m="3219540">where,</span> <span
  m="3220980">let's</span> <span m="3221280">say</span> <span
  m="3221460">every</span> <span m="3221810">iteration</span> <span
  m="3222390">of</span> <span m="3222490">this</span> <span
  m="3222700">loop</span> <span m="3224020">I</span> <span m="3224140">do</span>
  <span m="3224420">one</span> <span m="3224670">left</span> <span
  m="3224970">or</span> <span m="3225050">right</span> <span
  m="3225280">step,</span> <span m="3225680">and</span> <span
  m="3225910">then</span> <span m="3226060">a parent</span> <span
  m="3226640">step.</span> <span m="3227040">So</span> <span
  m="3228840">I</span> <span m="3228930">should</span> <span
  m="3229170">call</span> <span m="3229400">this</span> <span
  m="3230210">iteration</span> <span m="3230730">k.</span> <span
  m="3232270">I</span> <span m="3232340">guess</span> <span
  m="3232530">there's</span> <span m="3232710">two</span> <span
  m="3232870">k</span> <span m="3233050">steps,</span> <span
  m="3233670">then.</span></p><p><span m="3237804">Just to be</span> <span
  m="3238290">clear.</span> <span m="3239850">So</span> <span
  m="3240030">in</span> <span m="3240120">iteration</span> <span
  m="3240580">k,</span> <span m="3240780">that</span> <span
  m="3240950">means</span> <span m="3241150">I've</span> <span
  m="3241280">gone</span> <span m="3241570">up</span> <span m="3241880">k</span>
  <span m="3242080">times</span> <span m="3242520">and</span> <span
  m="3242660">I've</span> <span m="3242790">gone</span> <span
  m="3243160">either</span> <span m="3243470">right</span> <span
  m="3243750">or</span> <span m="3243930">left</span> <span m="3244610">k</span>
  <span m="3244790">times.</span> <span m="3245100">You</span> <span
  m="3245210">can</span> <span m="3245350">show</span> <span
  m="3245570">if</span> <span m="3245710">you</span> <span
  m="3245810">start</span> <span m="3246060">going</span> <span
  m="3246260">right</span> <span m="3246440">you</span> <span
  m="3246670">keep</span> <span m="3246870">going</span> <span
  m="3247130">right.</span> <span m="3247710">If</span> <span
  m="3247850">you</span> <span m="3248570">initially</span> <span
  m="3248920">go</span> <span m="3249090">left</span> <span
  m="3249390">you'll</span> <span m="3249580">keep</span> <span
  m="3249760">going</span> <span m="3249980">left.</span> <span
  m="3250750">Doesn't</span> <span m="3251270">matter</span> <span
  m="3251500">too</span> <span m="3251650">much.</span></p><p><span
  m="3253860">At</span> <span m="3254020">iteration</span> <span
  m="3254440">k</span> <span m="3255240">I</span> <span m="3255440">am</span>
  <span m="3255620">at</span> <span m="3256130">height</span> <span
  m="3256630">k,</span> <span m="3261070">or</span> <span m="3261290">k</span>
  <span m="3261460">minus</span> <span m="3261780">1,</span> <span
  m="3262240">or</span> <span m="3262300">however</span> <span
  m="3262510">you</span> <span m="3262590">want</span> <span m="3262720">to
  count.</span> <span m="3264000">But</span> <span m="3264160">let's</span>
  <span m="3264380">call</span> <span m="3264570">it</span> <span
  m="3264660">k.</span> <span m="3265680">So</span> <span
  m="3266070">when</span> <span m="3266340">I</span> <span m="3266470">do</span>
  <span m="3266740">this</span> <span m="3267040">right</span> <span
  m="3267470">pointer</span> <span m="3267930">here</span> <span
  m="3271250">I</span> <span m="3271390">know</span> <span
  m="3271780">that,</span> <span m="3273310">for</span> <span
  m="3273410">example,</span> <span m="3274090">I</span> <span
  m="3274310">am</span> <span m="3275480">skipping</span> <span
  m="3276080">over</span> <span m="3280730">all</span> <span
  m="3280940">of</span> <span m="3281050">these</span> <span
  m="3281350">keys.</span> <span m="3282660">All</span> <span
  m="3282920">the</span> <span m="3283000">keys</span> <span
  m="3283190">down--</span> <span m="3283310">the</span> <span
  m="3283790">keys</span> <span m="3283980">are</span> <span
  m="3284070">in</span> <span m="3284150">the</span> <span
  m="3284230">leaves,</span> <span m="3284730">so all</span> <span
  m="3285000">these</span> <span m="3285200">things</span> <span
  m="3285450">down</span> <span m="3285670">here,</span> <span
  m="3286480">I'm</span> <span m="3286690">jumping</span> <span
  m="3287090">over</span> <span m="3287330">them.</span> <span
  m="3288110">How</span> <span m="3288310">many</span> <span
  m="3288570">keys</span> <span m="3288940">are</span> <span
  m="3289010">down</span> <span m="3289290">there?</span> <span m="3291130">Can
  you</span> <span m="3291250">tell</span> <span m="3291460">me,</span> <span
  m="3292220">roughly,</span> <span m="3292650">how</span> <span
  m="3292840">many</span> <span m="3293090">keys</span> <span
  m="3293900">I'm</span> <span m="3294060">skipping</span> <span
  m="3294460">over</span> <span m="3294720">when</span> <span
  m="3294910">I'm</span> <span m="3295210">moving</span> <span
  m="3295630">right</span> <span m="3295970">at</span> <span
  m="3296110">height</span> <span m="3296470">k?</span> <span
  m="3299970">It's</span> <span m="3300500">not</span> <span
  m="3300730">a</span> <span m="3300780">unique</span> <span
  m="3301120">answer.</span> <span m="3301740">But</span> <span m="3301900">you
  can</span> <span m="3302110">give</span> <span m="3302230">me</span> <span
  m="3302360">some</span> <span m="3302540">bounds.</span></p><p><span
  m="3316800">Say</span> <span m="3316970">again.</span> <span
  m="3318940">Number</span> <span m="3319320">of</span> <span
  m="3319390">children</span> <span m="3319920">to</span> <span
  m="3320030">the</span> <span m="3320160">k</span> <span
  m="3320420">power.</span> <span m="3320840">Yeah.</span> <span
  m="3322010">Except</span> <span m="3322430">we</span> <span
  m="3322520">don't</span> <span m="3322680">know</span> <span
  m="3322780">the</span> <span m="3322880">number</span> <span
  m="3323100">of</span> <span m="3323150">children.</span> <span
  m="3324060">But</span> <span m="3324370">it's</span> <span
  m="3324560">between</span> <span m="3324840">2</span> <span
  m="3324980">and</span> <span m="3325100">3</span> <span
  m="3327180">Closer</span> <span m="3327590">one</span> <span
  m="3327750">should</span> <span m="3327910">be</span> <span
  m="3327990">easy</span> <span m="3328390">but</span> <span
  m="3328995">I</span> <span m="3329420">fail.</span> <span
  m="3331510">So</span> <span m="3331700">it's</span> <span
  m="3331820">between</span> <span m="3332240">two</span> <span
  m="3332500">and</span> <span m="3332610">three</span> <span
  m="3332790">children.</span> <span m="3333350">So</span> <span
  m="3333430">there's</span> <span m="3334040">the</span> <span
  m="3334270">number--</span> <span m="3335140">if</span> <span
  m="3335260">you</span> <span m="3335410">look</span> <span
  m="3335660">at</span> <span m="3335930">a</span> <span
  m="3337120">height</span> <span m="3337790">k</span> <span
  m="3339056">tree,</span> <span m="3341140">how</span> <span
  m="3341340">many</span> <span m="3341550">leaves</span> <span m="3341860">does
  it</span> <span m="3342090">have?</span> <span m="3342880">It's</span> <span
  m="3343090">going</span> <span m="3343240">to</span> <span
  m="3343320">be</span> <span m="3343560">between</span> <span
  m="3344160">2</span> <span m="3344350">to</span> <span m="3344440">the</span>
  <span m="3344550">k</span> <span m="3345550">and</span> <span
  m="3346110">3</span> <span m="3346280">to</span> <span m="3346350">the</span>
  <span m="3346460">k.</span> <span m="3347890">Because</span> <span
  m="3348040">I</span> <span m="3348110">have</span> <span
  m="3348320">between</span> <span m="3348640">2</span> <span
  m="3348810">and</span> <span m="3348900">3</span> <span
  m="3349070">children</span> <span m="3349810">at</span> <span
  m="3349960">every</span> <span m="3350240">node.</span> <span
  m="3351250">And</span> <span m="3351450">so</span> <span
  m="3352080">it's</span> <span m="3352240">exponential</span> <span
  m="3352580">in</span> <span m="3352920">k.</span> <span
  m="3353310">That's</span> <span m="3353530">all</span> <span m="3353810">I'll
  need.</span></p><p><span m="3356990">OK.</span> <span m="3357280">When</span>
  <span m="3357470">I'm</span> <span m="3357600">at</span> <span
  m="3357690">height</span> <span m="3357990">k</span> <span
  m="3358360">here,</span> <span m="3358840">I'm</span> <span
  m="3358940">skipping</span> <span m="3359390">over</span> <span
  m="3360440">a</span> <span m="3360530">height</span> <span
  m="3360820">k</span> <span m="3360960">minus</span> <span m="3361320">1</span>
  <span m="3361650">tree</span> <span m="3362030">or</span> <span
  m="3362120">something.</span> <span m="3363440">But</span> <span
  m="3363770">it's</span> <span m="3363980">going</span> <span
  m="3364130">to</span> <span m="3364200">be--</span></p><p><span
  m="3366530">So</span> <span m="3366850">in</span> <span
  m="3367070">iteration</span> <span m="3367590">k</span> <span
  m="3368840">I'm</span> <span m="3369010">skipping,</span> <span
  m="3370800">at</span> <span m="3370940">least,</span> <span
  m="3372020">some</span> <span m="3372290">constant</span> <span
  m="3372770">times</span> <span m="3373060">2 to</span> <span
  m="3373270">the</span> <span m="3373400">k.</span> <span
  m="3373670">Maybe</span> <span m="3374420">to</span> <span
  m="3374580">the</span> <span m="3374690">k</span> <span
  m="3374810">minus</span> <span m="3375100">1,</span> <span
  m="3375340">or</span> <span m="3375410">to</span> <span m="3375580">the</span>
  <span m="3375690">k</span> <span m="3375810">minus</span> <span
  m="3376140">2.</span> <span m="3377270">I'm</span> <span
  m="3377450">being</span> <span m="3377710">very</span> <span
  m="3377910">sloppy.</span> <span m="3378300">Doesn't</span> <span
  m="3378540">matter.</span> <span m="3379130">As</span> <span
  m="3379350">long</span> <span m="3379580">as</span> <span
  m="3379670">it's</span> <span m="3379830">exponential</span> <span
  m="3380420">in</span> <span m="3380490">k,</span> <span m="3381130">I'm</span>
  <span m="3381290">happy.</span> <span m="3381870">Because</span> <span
  m="3383020">I'm</span> <span m="3383240">supposing</span> <span
  m="3385040">that</span> <span m="3385630">x</span> <span
  m="3385900">and</span> <span m="3386030">y</span> <span m="3386310">are</span>
  <span m="3386420">somewhat</span> <span m="3386800">close.</span> <span
  m="3387190">Let's</span> <span m="3387380">call</span> <span
  m="3387610">this</span> <span m="3387770">rank</span> <span
  m="3388080">difference</span> <span m="3388660">d.</span> <span
  m="3390510">Then</span> <span m="3390900">I</span> <span
  m="3391000">claim</span> <span m="3391870">the</span> <span
  m="3392020">number</span> <span m="3392450">of</span> <span
  m="3392680">iterations</span> <span m="3393290">I'll</span> <span
  m="3393390">need</span> <span m="3393560">to</span> <span
  m="3393660">do</span> <span m="3393840">in</span> <span
  m="3393920">this</span> <span m="3394120">loop</span> <span
  m="3394420">is,</span> <span m="3394570">at</span> <span
  m="3394680">most,</span> <span m="3395140">order</span> <span
  m="3395440">log</span> <span m="3395870">d.</span> <span
  m="3397340">Because</span> <span m="3397960">if,</span> <span
  m="3399050">when</span> <span m="3399240">I</span> <span
  m="3399320">get</span> <span m="3399610">to</span> <span
  m="3399720">the</span> <span m="3399840">k-th</span> <span
  m="3400130">iteration,</span> <span m="3401100">I'm</span> <span
  m="3401270">jumping</span> <span m="3401750">over</span> <span m="3402010">2
  to</span> <span m="3402260">the</span> <span m="3402400">k</span> <span
  m="3402950">elements.</span> <span m="3403870">How</span> <span
  m="3404900">large</span> <span m="3405290">does</span> <span
  m="3405410">k</span> <span m="3405630">have</span> <span m="3405830">to</span>
  <span m="3405950">be</span> <span m="3406250">before</span> <span
  m="3406660">2 to</span> <span m="3406880">the</span> <span
  m="3406990">k</span> <span m="3407210">is</span> <span
  m="3407370">larger</span> <span m="3407840">than</span> <span
  m="3408930">d?</span> <span m="3410230">Well,</span> <span
  m="3411000">log</span> <span m="3411340">d.</span> <span
  m="3412960">Log</span> <span m="3413190">base</span> <span
  m="3413470">2</span></p><p><span m="3429120">The</span> <span
  m="3429190">number</span> <span m="3429460">of</span> <span
  m="3429540">iterations</span> <span m="3435080">is</span> <span
  m="3435540">order</span> <span m="3435950">log</span> <span
  m="3436350">d,</span> <span m="3438470">where</span> <span
  m="3438620">d</span> <span m="3438840">is</span> <span m="3438970">the</span>
  <span m="3439080">rank</span> <span m="3439340">difference.</span> <span
  m="3439850">d</span> <span m="3440190">is</span> <span m="3440490">the</span>
  <span m="3440630">absolute</span> <span m="3441410">value</span> <span
  m="3441910">between</span> <span m="3443080">rank</span> <span
  m="3443340">of</span> <span m="3443440">x</span> <span m="3444600">and</span>
  <span m="3444780">rank</span> <span m="3445000">of</span> <span
  m="3445100">y.</span> <span m="3448940">And</span> <span m="3449240">I'm
  being</span> <span m="3449420">a</span> <span m="3449500">little</span> <span
  m="3450860">sloppy</span> <span m="3451600">here.</span> <span
  m="3451940">You</span> <span m="3452030">probably</span> <span
  m="3452330">want</span> <span m="3452520">to</span> <span m="3452560">use
  an</span> <span m="3452840">induction.</span> <span m="3453840">You</span>
  <span m="3453930">need</span> <span m="3454070">to</span> <span
  m="3454150">show</span> <span m="3454510">that</span> <span
  m="3454970">they're</span> <span m="3455140">really,</span> <span
  m="3455900">these</span> <span m="3456130">items</span> <span
  m="3456480">here</span> <span m="3456620">that you're</span> <span
  m="3456880">skipping</span> <span m="3457250">over</span> <span
  m="3457520">that are</span> <span m="3457740">strictly</span> <span
  m="3458140">between</span> <span m="3458540">x</span> <span
  m="3458730">and</span> <span m="3458840">y.</span> <span
  m="3459500">But</span> <span m="3459600">we</span> <span
  m="3459710">know</span> <span m="3459920">that</span> <span
  m="3460070">there's</span> <span m="3460280">only</span> <span m="3460560">d
  items</span> <span m="3461210">between</span> <span m="3461540">x</span> <span
  m="3461740">or</span> <span m="3461790">y.</span> <span m="3461970">Actually
  d</span> <span m="3462260">minus</span> <span m="3462770">1,</span> <span
  m="3463010">I</span> <span m="3463080">guess.</span> <span
  m="3464020">So</span> <span m="3466040">as soon</span> <span
  m="3466200">as</span> <span m="3466420">we've</span> <span
  m="3466530">skipped</span> <span m="3466980">over</span> <span
  m="3467930">all</span> <span m="3468170">the</span> <span
  m="3468300">items</span> <span m="3468570">between</span> <span
  m="3468890">x</span> <span m="3469070">and</span> <span m="3469140">y,</span>
  <span m="3469360">then</span> <span m="3469650">we'll</span> <span
  m="3469830">find</span> <span m="3470190">a</span> <span
  m="3470280">range</span> <span m="3471220">that</span> <span
  m="3471350">contains</span> <span m="3471850">x,</span> <span
  m="3472700">and</span> <span m="3472880">then</span> <span
  m="3473010">we'll</span> <span m="3473170">go</span> <span
  m="3473330">do</span> <span m="3473520">the</span> <span
  m="3473640">downward</span> <span m="3474020">search.</span></p><p><span
  m="3474360">Now</span> <span m="3474470">how</span> <span
  m="3474690">long</span> <span m="3474920">does</span> <span
  m="3475020">the</span> <span m="3475110">downward</span> <span
  m="3475490">search</span> <span m="3475740">cost?</span> <span
  m="3476740">Whatever</span> <span m="3476960">the</span> <span
  m="3477050">height</span> <span m="3477270">of</span> <span
  m="3477340">the</span> <span m="3477420">tree</span> <span
  m="3477710">is.</span> <span m="3479330">What's</span> <span m="3479500">the
  height</span> <span m="3479780">of</span> <span m="3479840">the</span> <span
  m="3479900">tree?</span> <span m="3480130">That's</span> <span
  m="3480360">the</span> <span m="3480400">number</span> <span
  m="3480610">of</span> <span m="3480680">iterations.</span> <span
  m="3481420">So</span> <span m="3481770">the</span> <span
  m="3481860">total</span> <span m="3482180">cost.</span> <span
  m="3483230">The</span> <span m="3483350">downward</span> <span
  m="3483740">search</span> <span m="3484000">will</span> <span
  m="3484140">cost</span> <span m="3484470">the</span> <span
  m="3484550">same</span> <span m="3485110">as</span> <span
  m="3485380">the</span> <span m="3485470">rest</span> <span
  m="3485750">of</span> <span m="3485850">the</span> <span
  m="3485920">search.</span> <span m="3487480">And</span> <span
  m="3487700">so</span> <span m="3488100">the</span> <span
  m="3488180">total</span> <span m="3488570">cost</span> <span
  m="3488960">is</span> <span m="3489070">going</span> <span
  m="3489220">to</span> <span m="3489280">be</span> <span
  m="3489470">order</span> <span m="3489830">log</span> <span
  m="3490160">d.</span> <span m="3492302">Clear?</span></p><p><span
  m="3494200">Any</span> <span m="3494420">questions</span> <span
  m="3494860">about</span> <span m="3497990">finger</span> <span
  m="3498480">searching</span> <span m="3499240">with</span> <span
  m="3499560">level</span> <span m="3499920">linked</span> <span
  m="3501200">data</span> <span m="3501520">at</span> <span
  m="3501620">the</span> <span m="3501730">leaves,</span> <span m="3503400">2-3
  trees?</span></p><p><span m="3505460">AUDIENCE: Sir, I'm not sure</span> <span
  m="3505815">why</span> <span m="3506170">[INAUDIBLE]</span> <span
  m="3507658">d,</span> <span m="3508154">why is that?</span></p><p><span
  m="3509150">PROFESSOR: I'm</span> <span m="3509310">defining</span> <span
  m="3509910">d</span> <span m="3510160">to</span> <span m="3510300">be</span>
  <span m="3510490">the</span> <span m="3510610">rank</span> <span
  m="3510900">of</span> <span m="3510990">x</span> <span
  m="3511190">minus</span> <span m="3511650">rank of</span> <span
  m="3512010">y.</span> <span m="3512500">My</span> <span
  m="3512620">goal</span> <span m="3512870">is</span> <span
  m="3512970">to</span> <span m="3513070">achieve</span> <span
  m="3513410">a</span> <span m="3513480">log</span> <span m="3513810">d</span>
  <span m="3514010">bound.</span> <span m="3514570">And</span> <span
  m="3514770">I'm</span> <span m="3514890">claiming</span> <span
  m="3515310">that</span> <span m="3515590">because</span> <span
  m="3518060">once</span> <span m="3518360">I've</span> <span
  m="3518430">skipped</span> <span m="3518930">over</span> <span
  m="3519430">d</span> <span m="3519750">items,</span> <span
  m="3520520">then</span> <span m="3520800">I'm</span> <span
  m="3520890">done.</span> <span m="3521390">Then</span> <span
  m="3521540">I've</span> <span m="3521600">found</span> <span
  m="3522010">x.</span> <span m="3523240">And</span> <span m="3524510">at</span>
  <span m="3524720">step</span> <span m="3525320">k</span> <span
  m="3525910">I'm</span> <span m="3526110">skipping</span> <span
  m="3526500">over</span> <span m="3526700">2 to</span> <span
  m="3526930">the</span> <span m="3527050">k</span> <span
  m="3527290">items.</span> <span m="3528250">So</span> <span
  m="3528410">how</span> <span m="3528590">big</span> <span
  m="3528800">is</span> <span m="3528930">k</span> <span
  m="3529150">going</span> <span m="3529300">to</span> <span
  m="3529370">be?</span> <span m="3530010">Log</span> <span
  m="3530310">d.</span> <span m="3531480">That's all.</span> <span
  m="3533520">I</span> <span m="3533840">used d</span> <span m="3534160">for
  a</span> <span m="3534630">notation</span> <span m="3535140">here.</span>
  <span m="3538330">Cool.</span></p><p><span m="3541420">Finger</span> <span
  m="3541790">searching.</span> <span m="3542600">It's</span> <span
  m="3542780">nice.</span> <span m="3543100">Especially</span> <span
  m="3543460">if</span> <span m="3543510">you're</span> <span
  m="3543580">doing</span> <span m="3543800">many</span> <span
  m="3544040">consecutive</span> <span m="3544570">searches</span> <span
  m="3545060">that</span> <span m="3545140">are</span> <span
  m="3545250">all</span> <span m="3545480">relatively</span> <span
  m="3545970">close</span> <span m="3546220">to</span> <span
  m="3546310">each</span> <span m="3546470">other.</span> <span
  m="3549110">But</span> <span m="3549210">that</span> <span
  m="3549360">was</span> <span m="3549490">easy.</span> <span
  m="3549960">Let's</span> <span m="3550090">do a</span> <span
  m="3550240">more</span> <span m="3550710">difficult</span> <span
  m="3551080">augmentation.</span></p><p><span m="3553800">So</span> <span
  m="3554090">the</span> <span m="3554190">last</span> <span
  m="3554580">topic</span> <span m="3556490">for</span> <span
  m="3556730">today</span> <span m="3557450">is</span> <span
  m="3557750">range</span> <span m="3558190">trees.</span> <span
  m="3558690">This</span> <span m="3558850">is</span> <span
  m="3558990">probably</span> <span m="3559300">the</span> <span
  m="3559420">coolest</span> <span m="3559810">example</span> <span
  m="3560440">of</span> <span m="3560650">augmentation,</span> <span
  m="3560970">at</span> <span m="3561290">least,</span> <span
  m="3561490">that</span> <span m="3561650">you'll</span> <span
  m="3561790">see</span> <span m="3562010">in</span> <span
  m="3562100">this</span> <span m="3562260">class.</span> <span m="3562750">If
  you</span> <span m="3562810">want</span> <span m="3562910">to</span> <span
  m="3562960">see</span> <span m="3563120">more</span> <span
  m="3564030">you</span> <span m="3564120">should take</span> <span
  m="3564350">advanced</span> <span m="3564670">data</span> <span
  m="3564840">structure</span> <span m="3565190">6851.</span></p><p><span
  m="3572570">And</span> <span m="3573030">range</span> <span
  m="3573320">trees</span> <span m="3573660">solve</span> <span
  m="3574010">a</span> <span m="3574080">problem</span> <span
  m="3574570">called</span> <span m="3574970">orthogonal</span> <span
  m="3575540">range</span> <span m="3575800">searching.</span> <span
  m="3578710">Not</span> <span m="3578980">orthogonal</span> <span
  m="3579470">search</span> <span m="3579710">ranging.</span> <span
  m="3581910">Orthogonal</span> <span m="3583470">range</span> <span
  m="3585660">search.</span></p><p><span m="3591840">So</span> <span
  m="3593490">what's</span> <span m="3593670">the</span> <span
  m="3593740">problem?</span> <span m="3594810">I'm</span> <span
  m="3594960">going</span> <span m="3595060">to</span> <span
  m="3595100">give</span> <span m="3595330">you</span> <span
  m="3595480">a</span> <span m="3595520">bunch</span> <span
  m="3595780">of</span> <span m="3595870">points.</span> <span
  m="3597810">Draw</span> <span m="3597960">them as</span> <span
  m="3598440">fat</span> <span m="3598700">dots</span> <span
  m="3598920">so</span> <span m="3599050">you</span> <span
  m="3599150">can</span> <span m="3599270">actually</span> <span
  m="3599560">see</span> <span m="3599720">them.</span> <span
  m="3601150">In</span> <span m="3601360">some</span> <span
  m="3601820">dimension.</span> <span m="3603190">So</span> <span
  m="3604110">this</span> <span m="3604340">is,</span> <span
  m="3604510">for</span> <span m="3604640">example,</span> <span
  m="3605270">a</span> <span m="3605570">2D</span> <span
  m="3605940">point</span> <span m="3606200">set.</span> <span
  m="3608490">OK.</span> <span m="3608800">Over</span> <span
  m="3609050">here</span> <span m="3609440">I</span> <span
  m="3609550">will</span> <span m="3609700">draw</span> <span
  m="3610080">a</span> <span m="3610150">3D</span> <span
  m="3610470">point</span> <span m="3610760">set.</span> <span
  m="3612190">You</span> <span m="3612270">can</span> <span
  m="3612380">tell</span> <span m="3612540">the</span> <span
  m="3612590">difference,</span> <span m="3612950">I'm</span> <span
  m="3613040">sure.</span></p><p><span m="3618890">There.</span> <span
  m="3619360">Now</span> <span m="3619500">it's</span> <span
  m="3619610">a</span> <span m="3619680">3D</span> <span
  m="3619990">point</span> <span m="3620270">set.</span> <span
  m="3622310">And</span> <span m="3623870">this</span> <span
  m="3624130">is</span> <span m="3624260">a</span> <span
  m="3624310">static</span> <span m="3624870">point</span> <span
  m="3625220">set.</span> <span m="3625400">You</span> <span
  m="3625540">could</span> <span m="3625730">make</span> <span
  m="3625910">this</span> <span m="3626050">dynamic</span> <span
  m="3626540">but</span> <span m="3626660">let's</span> <span
  m="3626820">just</span> <span m="3626970">think</span> <span
  m="3627130">about</span> <span m="3627350">the</span> <span
  m="3627430">static</span> <span m="3627790">case.</span> <span
  m="3630470">Don't</span> <span m="3630610">want</span> <span
  m="3630760">the</span> <span m="3630840">2D</span> <span
  m="3631140">points</span> <span m="3631380">and the</span> <span
  m="3631520">3D</span> <span m="3631770">points</span> <span
  m="3632010">to</span> <span m="3632100">mix.</span> <span
  m="3634490">Now,</span> <span m="3635420">you</span> <span
  m="3635600">get</span> <span m="3635730">to</span> <span
  m="3635810">preprocess</span> <span m="3636510">this</span> <span
  m="3636860">into</span> <span m="3637290">a</span> <span
  m="3637350">data</span> <span m="3637600">structure.</span> <span
  m="3637890">So</span> <span m="3638180">this is</span> <span
  m="3638310">a</span> <span m="3638360">static</span> <span
  m="3638790">data</span> <span m="3639010">structure</span> <span
  m="3639360">problem.</span> <span m="3640140">And</span> <span
  m="3640300">now</span> <span m="3640500">I'm</span> <span
  m="3640580">going</span> <span m="3640680">to</span> <span
  m="3640750">come</span> <span m="3640980">along</span> <span
  m="3641220">with</span> <span m="3641350">a</span> <span
  m="3641410">whole</span> <span m="3641670">bunch</span> <span
  m="3641900">of</span> <span m="3642000">queries.</span> <span
  m="3642680">A</span> <span m="3642780">query</span> <span
  m="3643590">will</span> <span m="3643740">be</span> <span m="3644190">a</span>
  <span m="3644290">box.</span> <span m="3646010">OK.</span> <span
  m="3646270">In</span> <span m="3646470">two</span> <span
  m="3646620">dimensions,</span> <span m="3647100">a</span> <span
  m="3647160">box</span> <span m="3647630">is</span> <span m="3647900">a</span>
  <span m="3647950">rectangle.</span></p><p><span m="3651370">Something</span>
  <span m="3651610">like</span> <span m="3651780">this.</span> <span
  m="3652290">Axis</span> <span m="3652690">aligned.</span> <span
  m="3653580">So</span> <span m="3653680">I</span> <span m="3653740">give</span>
  <span m="3653930">you</span> <span m="3654110">an</span> <span
  m="3654250">x</span> <span m="3654430">min,</span> <span m="3654890">x</span>
  <span m="3655100">max,</span> <span m="3655450">a</span> <span m="3655530">y
  min,</span> <span m="3655810">and</span> <span m="3656090">a y max.</span>
  <span m="3657040">I</span> <span m="3657170">want</span> <span
  m="3657370">to</span> <span m="3657410">know</span> <span
  m="3657570">what</span> <span m="3657740">are</span> <span
  m="3657800">the</span> <span m="3657930">points</span> <span
  m="3658280">inside.</span> <span m="3659490">Maybe</span> <span
  m="3659770">I</span> <span m="3659790">want</span> <span
  m="3659990">you</span> <span m="3660070">to</span> <span
  m="3660160">list</span> <span m="3660410">them.</span> <span m="3660920">If
  there's</span> <span m="3661060">a</span> <span m="3661110">lot</span> <span
  m="3661350">of</span> <span m="3661400">them</span> <span
  m="3661530">it's</span> <span m="3661640">going</span> <span
  m="3661750">to</span> <span m="3661790">take</span> <span m="3661950">a</span>
  <span m="3662000">long</span> <span m="3662190">time</span> <span
  m="3662350">to</span> <span m="3662420">list</span> <span
  m="3662640">them.</span> <span m="3662760">Maybe</span> <span
  m="3663020">I</span> <span m="3663060">just</span> <span
  m="3663240">want</span> <span m="3663370">to know</span> <span
  m="3663430">10</span> <span m="3663920">of</span> <span
  m="3664020">them</span> <span m="3664380">as</span> <span
  m="3664880">examples.</span></p><p><span m="3665900">Maybe</span> <span
  m="3666170">this</span> <span m="3666360">is</span> <span m="3666550">a</span>
  <span m="3666670">Google</span> <span m="3666980">search</span> <span
  m="3667290">or</span> <span m="3667350">something.</span> <span
  m="3667730">I</span> <span m="3667790">just</span> <span
  m="3667980">get</span> <span m="3668120">the</span> <span
  m="3668200">first</span> <span m="3668480">10</span> <span
  m="3668660">results</span> <span m="3669020">in</span> <span
  m="3669070">the</span> <span m="3669140">first</span> <span
  m="3669380">page,</span> <span m="3669650">I</span> <span
  m="3669680">hit</span> <span m="3669880">next</span> <span
  m="3670220">then</span> <span m="3670360">want</span> <span
  m="3670550">the</span> <span m="3670630">next</span> <span
  m="3670900">10,</span> <span m="3671640">that</span> <span
  m="3671720">kind</span> <span m="3671900">of</span> <span
  m="3671980">thing.</span> <span m="3673600">Or</span> <span
  m="3673780">maybe</span> <span m="3674030">I</span> <span
  m="3674080">want</span> <span m="3674240">to</span> <span
  m="3674280">know</span> <span m="3674400">how</span> <span
  m="3674660">many</span> <span m="3674910">search</span> <span
  m="3675180">results</span> <span m="3675530">there</span> <span
  m="3675690">are.</span> <span m="3676730">Number</span> <span
  m="3677030">of</span> <span m="3677110">points</span> <span
  m="3677420">in</span> <span m="3677520">the</span> <span
  m="3677600">rectangle.</span> <span m="3678180">Bunch</span> <span
  m="3678380">of</span> <span m="3678440">different</span> <span
  m="3678710">problems.</span></p><p><span m="3679720">In</span> <span
  m="3679880">3D,</span> <span m="3680930">it's</span> <span
  m="3681730">a</span> <span m="3682090">3D</span> <span m="3682400">box.</span>
  <span m="3683370">Which is</span> <span m="3684580">a</span> <span
  m="3684620">little</span> <span m="3684720">harder</span> <span
  m="3684980">to</span> <span m="3685070">draw.</span> <span
  m="3686850">You</span> <span m="3687170">can't</span> <span
  m="3687360">really</span> <span m="3687530">tell</span> <span
  m="3687770">which</span> <span m="3687960">points</span> <span
  m="3688230">are</span> <span m="3688300">inside</span> <span
  m="3688570">the</span> <span m="3688640">box.</span> <span
  m="3688900">Let's</span> <span m="3689020">say</span> <span
  m="3689130">these</span> <span m="3689360">three</span> <span
  m="3689530">points</span> <span m="3689860">are</span> <span
  m="3689960">all</span> <span m="3690130">inside</span> <span
  m="3690480">the</span> <span m="3690550">box.</span> <span
  m="3690900">I</span> <span m="3690950">give</span> <span
  m="3691130">you</span> <span m="3691230">an</span> <span
  m="3691300">interval</span> <span m="3691740">in</span> <span
  m="3691810">x,</span> <span m="3692050">an</span> <span
  m="3692150">interval</span> <span m="3692440">in y,</span> <span
  m="3692800">and an</span> <span m="3692890">interval</span> <span
  m="3693310">in</span> <span m="3693350">z,</span> <span m="3694110">and</span>
  <span m="3694230">I</span> <span m="3694260">want</span> <span
  m="3694490">to</span> <span m="3694550">know</span> <span
  m="3694880">what</span> <span m="3695100">are</span> <span
  m="3695150">the</span> <span m="3695270">points</span> <span
  m="3695570">inside.</span> <span m="3696060">How</span> <span
  m="3696260">many</span> <span m="3696570">are</span> <span
  m="3696770">there?</span> <span m="3697460">List</span> <span
  m="3697750">them</span> <span m="3697910">all.</span> <span
  m="3698220">List</span> <span m="3698460">10</span> <span
  m="3698630">of</span> <span m="3698760">them,</span> <span
  m="3699040">whatever.</span> <span m="3700980">OK.</span></p><p><span
  m="3704000">I</span> <span m="3704080">want</span> <span m="3704240">to</span>
  <span m="3704300">do</span> <span m="3704410">this</span> <span
  m="3704600">in</span> <span m="3704710">poly</span> <span
  m="3705070">log</span> <span m="3705480">time,</span> <span
  m="3706620">let's</span> <span m="3706800">say.</span> <span
  m="3707050">I'm</span> <span m="3707190">going</span> <span
  m="3708030">to</span> <span m="3708070">achieve</span> <span
  m="3708470">today</span> <span m="3708780">log</span> <span
  m="3709050">squared</span> <span m="3709470">for</span> <span
  m="3709610">the</span> <span m="3709760">2D</span> <span
  m="3710040">problem</span> <span m="3710830">and</span> <span
  m="3711000">log</span> <span m="3711300">cubed</span> <span
  m="3711810">for</span> <span m="3711910">the</span> <span
  m="3712070">3D</span> <span m="3712380">problem,</span> <span
  m="3712920">plus</span> <span m="3713250">whatever</span> <span
  m="3713530">the</span> <span m="3713630">size</span> <span
  m="3713860">output</span> <span m="3714345">is.</span> <span
  m="3721630">So</span> <span m="3721860">let</span> <span m="3722010">me</span>
  <span m="3722290">just</span> <span m="3722510">write</span> <span
  m="3722660">that</span> <span m="3722830">down.</span> <span
  m="3734970">So</span> <span m="3735220">the</span> <span
  m="3735320">goal</span> <span m="3736970">is</span> <span
  m="3737570">to</span> <span m="3738140">preprocess</span> <span
  m="3742550">n</span> <span m="3742920">points</span> <span
  m="3745950">in</span> <span m="3746420">d</span> <span
  m="3746820">dimensions.</span></p><p><span m="3750400">So</span> <span
  m="3750520">you</span> <span m="3750620">get</span> <span
  m="3750800">to</span> <span m="3750860">spend</span> <span
  m="3751640">a</span> <span m="3751730">bunch</span> <span
  m="3751980">of</span> <span m="3752060">time</span> <span
  m="3752320">preprocessing</span> <span m="3753580">to</span> <span
  m="3753810">support</span> <span m="3754330">a</span> <span
  m="3754410">query</span> <span m="3757080">which</span> <span
  m="3757340">is,</span> <span m="3759860">given</span> <span
  m="3760480">a</span> <span m="3760590">box,</span> <span m="3762480">axis
  aligned</span> <span m="3763150">box,</span> <span m="3764840">find</span>
  <span m="3766980">let's</span> <span m="3767230">say</span> <span
  m="3767770">the</span> <span m="3768960">number</span> <span
  m="3769290">of</span> <span m="3769390">points</span> <span
  m="3771210">in</span> <span m="3771600">the</span> <span
  m="3771680">box.</span> <span m="3776310">Find</span> <span
  m="3776840">k</span> <span m="3777370">points</span> <span
  m="3778000">in</span> <span m="3778160">the</span> <span
  m="3778220">box.</span> <span m="3784010">I</span> <span
  m="3784040">think</span> <span m="3784190">that's</span> <span
  m="3784430">good.</span> <span m="3784760">That</span> <span
  m="3784930">includes</span> <span m="3785270">a</span> <span
  m="3785290">special</span> <span m="3785620">case</span> <span
  m="3785890">of</span> <span m="3786020">find</span> <span
  m="3786280">all</span> <span m="3786560">the</span> <span
  m="3786650">points</span> <span m="3786960">in</span> <span
  m="3787040">the</span> <span m="3787110">box.</span> <span
  m="3789300">So</span> <span m="3789770">this,</span> <span
  m="3790030">of</span> <span m="3790130">course,</span> <span
  m="3790420">we</span> <span m="3790590">have</span> <span
  m="3790780">to</span> <span m="3790850">pay</span> <span m="3791030">a</span>
  <span m="3791110">penalty</span> <span m="3792390">of</span> <span
  m="3793590">order</span> <span m="3793850">k</span> <span
  m="3794480">for</span> <span m="3794650">the</span> <span
  m="3794800">output.</span> <span m="3797850">No</span> <span
  m="3798010">getting</span> <span m="3798270">around</span> <span
  m="3798570">that.</span> <span m="3800470">But</span> <span
  m="3800540">I</span> <span m="3800580">want</span> <span
  m="3800890">the</span> <span m="3801430">rest</span> <span
  m="3801700">of</span> <span m="3801770">the</span> <span
  m="3801870">time</span> <span m="3802670">to</span> <span
  m="3802830">be</span> <span m="3803770">log</span> <span m="3804140">to</span>
  <span m="3804270">the</span> <span m="3804410">d.</span></p><p><span
  m="3808282">So we're going</span> <span m="3808770">to achieve log</span>
  <span m="3809110">to</span> <span m="3809220">the</span> <span
  m="3809330">d</span> <span m="3809710">n</span> <span m="3810830">plus</span>
  <span m="3812030">size</span> <span m="3812430">of the</span> <span
  m="3812600">output.</span> <span m="3816050">And</span> <span
  m="3816340">you</span> <span m="3816510">get</span> <span
  m="3816670">to</span> <span m="3816750">control</span> <span
  m="3817140">how</span> <span m="3817260">big</span> <span
  m="3817460">you</span> <span m="3817590">want</span> <span
  m="3817790">the</span> <span m="3817900">output to</span> <span
  m="3818225">be.</span> <span m="3818550">So</span> <span
  m="3818780">it's</span> <span m="3818910">a</span> <span
  m="3818960">pretty</span> <span m="3819210">reasonable</span> <span
  m="3820200">data</span> <span m="3820380">structure.</span> <span
  m="3821360">In a</span> <span m="3821530">certain</span> <span
  m="3821760">sense</span> <span m="3822030">we</span> <span
  m="3822180">will</span> <span m="3822500">understand</span> <span
  m="3823130">what</span> <span m="3823260">the</span> <span
  m="3823380">output</span> <span m="3823690">is</span> <span
  m="3824380">in</span> <span m="3824530">log to</span> <span
  m="3824800">the</span> <span m="3824920">d time.</span> <span
  m="3825780">If</span> <span m="3825910">you</span> <span
  m="3825990">actually</span> <span m="3826310">want</span> <span
  m="3826390">to</span> <span m="3826470">list</span> <span
  m="3826660">points,</span> <span m="3827050">well,</span> <span
  m="3827160">then</span> <span m="3827330">you</span> <span
  m="3827400">have</span> <span m="3827610">to</span> <span
  m="3827740">spend</span> <span m="3828070">the</span> <span
  m="3828170">time</span> <span m="3828420">to</span> <span
  m="3828520">do</span> <span m="3828700">it.</span></p><p><span
  m="3831180">All</span> <span m="3831250">right.</span> <span
  m="3831480">So</span> <span m="3831670">2D</span> <span m="3832070">and</span>
  <span m="3832150">3D</span> <span m="3832470">are</span> <span
  m="3832580">great,</span> <span m="3833310">but</span> <span
  m="3833540">let's</span> <span m="3833760">start</span> <span
  m="3834060">with</span> <span m="3834240">1D.</span> <span
  m="3835110">First</span> <span m="3835380">we</span> <span
  m="3835460">should</span> <span m="3835630">understand</span> <span
  m="3836060">1D</span> <span m="3836570">completely,</span> <span
  m="3837510">then</span> <span m="3837800">we</span> <span
  m="3837960">can</span> <span m="3838320">generalize.</span> <span
  m="3846590">1D</span> <span m="3846990">we</span> <span
  m="3847170">already</span> <span m="3847460">know</span> <span
  m="3847600">how</span> <span m="3847720">to</span> <span
  m="3847820">do.</span> <span m="3852700">1D</span> <span m="3853220">I</span>
  <span m="3853310">have</span> <span m="3853720">a</span> <span
  m="3853800">line.</span> <span m="3855430">I</span> <span
  m="3855510">have</span> <span m="3855680">some</span> <span
  m="3855830">points</span> <span m="3856220">on</span> <span
  m="3856310">the</span> <span m="3856390">line.</span></p><p><span
  m="3862370">And</span> <span m="3863020">I'm</span> <span
  m="3863190">given,</span> <span m="3864360">as</span> <span
  m="3864590">a</span> <span m="3864640">query,</span> <span
  m="3865530">some</span> <span m="3865850">interval.</span> <span
  m="3869360">And</span> <span m="3869530">I</span> <span
  m="3869570">want</span> <span m="3869830">to</span> <span
  m="3869870">know</span> <span m="3870090">how</span> <span
  m="3870270">many</span> <span m="3870490">points</span> <span
  m="3870910">are</span> <span m="3871070">in</span> <span
  m="3871130">the</span> <span m="3871220">interval,</span> <span
  m="3872220">give</span> <span m="3872390">me</span> <span
  m="3872500">the</span> <span m="3872610">points</span> <span
  m="3872890">in</span> <span m="3872960">the</span> <span
  m="3873060">interval,</span> <span m="3874060">and</span> <span
  m="3874160">so</span> <span m="3874290">on.</span> <span m="3876890">So</span>
  <span m="3877210">how</span> <span m="3877390">do</span> <span
  m="3877440">I</span> <span m="3877530">do</span> <span
  m="3877640">this?</span> <span m="3878920">Any ways?</span></p><p><span
  m="3888600">If</span> <span m="3888910">d</span> <span m="3889140">is</span>
  <span m="3889290">1.</span> <span m="3889720">So</span> <span
  m="3889850">I</span> <span m="3889960">want</span> <span m="3890140">to</span>
  <span m="3890200">achieve</span> <span m="3890540">log</span> <span
  m="3890900">d,</span> <span m="3891910">sorry,</span> <span
  m="3892160">log</span> <span m="3892470">n,</span> <span
  m="3892980">plus</span> <span m="3893310">size</span> <span m="3893799">of
  output.</span> <span m="3898690">I hear</span> <span
  m="3898850">whispers.</span> <span m="3904988">Yeah?</span></p><p><span
  m="3905876">AUDIENCE: Segment trees?</span></p><p><span m="3907210">PROFESSOR:
  Segment</span> <span m="3907690">tree?</span> <span m="3907950">That's</span>
  <span m="3908230">fancy.</span> <span m="3909100">We</span> <span
  m="3909260">won't</span> <span m="3909410">cover</span> <span
  m="3909660">segment</span> <span m="3909970">trees.</span> <span
  m="3910310">Probably</span> <span m="3911210">segment trees</span> <span
  m="3911700">do</span> <span m="3911830">it.</span> <span
  m="3914000">Yeah.</span> <span m="3914250">We</span> <span
  m="3914520">know</span> <span m="3914700">lots</span> <span
  m="3914960">of</span> <span m="3915020">ways</span> <span
  m="3915230">to</span> <span m="3915300">do</span> <span
  m="3915420">this.</span> <span m="3917590">Yeah?</span></p><p><span
  m="3918045">AUDIENCE: Sorted</span> <span
  m="3918500">array?</span></p><p><span m="3918960">PROFESSOR: Sorted</span>
  <span m="3919420">array is</span> <span m="3919840">probably</span> <span
  m="3920100">the</span> <span m="3920200">simplest.</span> <span m="3921020">If
  I</span> <span m="3921120">store</span> <span m="3921370">the</span> <span
  m="3921520">items</span> <span m="3921800">in a</span> <span
  m="3921920">sorted</span> <span m="3922240">array</span> <span
  m="3923060">and</span> <span m="3923240">I</span> <span
  m="3923300">have</span> <span m="3923650">two</span> <span
  m="3923870">values,</span> <span m="3924380">I'll</span> <span
  m="3924810">call them</span> <span m="3925990">x1</span> <span
  m="3926710">and</span> <span m="3926810">x2,</span> <span
  m="3927520">because</span> <span m="3927820">it's the</span> <span
  m="3928510">x</span> <span m="3928730">min</span> <span m="3928970">and</span>
  <span m="3929150">x</span> <span m="3929350">max.</span> <span
  m="3930820">Binary</span> <span m="3931300">search</span> <span
  m="3931590">for</span> <span m="3931710">x1.</span> <span
  m="3932500">Binary</span> <span m="3932840">search</span> <span
  m="3933080">for</span> <span m="3933200">x2.</span> <span
  m="3934110">Find</span> <span m="3934360">the</span> <span
  m="3934580">successor</span> <span m="3935160">of</span> <span
  m="3935220">x1</span> <span m="3935600">and</span> <span
  m="3935650">the</span> <span m="3935730">predecessor</span> <span
  m="3936260">of</span> <span m="3936340">x2.</span> <span
  m="3936710">I'll</span> <span m="3936810">find</span> <span
  m="3937120">these</span> <span m="3937340">two</span> <span
  m="3937500">guys.</span> <span m="3938500">And then</span> <span
  m="3938670">I</span> <span m="3938720">know</span> <span m="3939050">all
  the</span> <span m="3939140">ones</span> <span m="3939360">in</span> <span
  m="3939430">between.</span> <span m="3939830">That's</span> <span
  m="3940080">the</span> <span m="3940160">match.</span> <span
  m="3941520">So</span> <span m="3941680">that'll</span> <span
  m="3941920">take</span> <span m="3942200">log</span> <span
  m="3942510">n</span> <span m="3942660">time</span> <span m="3942990">to</span>
  <span m="3943080">find</span> <span m="3943350">those</span> <span
  m="3943540">points</span> <span m="3944830">and</span> <span
  m="3945030">then</span> <span m="3945170">we're</span> <span
  m="3945300">good.</span></p><p><span m="3947720">So</span> <span
  m="3947950">we</span> <span m="3948060">could</span> <span
  m="3948160">do</span> <span m="3948250">a</span> <span
  m="3948310">sorted</span> <span m="3948640">array.</span> <span m="3950680">Of
  course,</span> <span m="3950850">sorted</span> <span m="3951190">array
  is</span> <span m="3951540">a</span> <span m="3951590">little</span> <span
  m="3951860">hard</span> <span m="3952090">to</span> <span
  m="3952240">generalize.</span> <span m="3953950">I</span> <span
  m="3954040">don't</span> <span m="3954170">want</span> <span
  m="3954280">to</span> <span m="3954340">do a</span> <span
  m="3954500">2D</span> <span m="3954940">array,</span> <span
  m="3955190">that</span> <span m="3955430">sounds</span> <span
  m="3955670">bad.</span> <span m="3957170">You</span> <span
  m="3957360">could,</span> <span m="3957580">of</span> <span
  m="3957720">course,</span> <span m="3958010">do a</span> <span
  m="3958170">binary</span> <span m="3958440">search</span> <span
  m="3958710">tree.</span> <span m="3959580">Like</span> <span m="3959740">an
  AVL</span> <span m="3960130">tree.</span> <span m="3961580">Same</span> <span
  m="3961860">thing.</span> <span m="3962140">Because</span> <span
  m="3962330">we</span> <span m="3962440">have</span> <span m="3962600">log
  n</span> <span m="3962930">search,</span> <span m="3963470">find</span> <span
  m="3963760">successor,</span> <span m="3964370">and</span> <span
  m="3964470">predecessor,</span> <span m="3964850">I</span> <span
  m="3964910">guess</span> <span m="3965100">you</span> <span
  m="3965210">could</span> <span m="3965330">use</span> <span m="3965500">Van
  Emde</span> <span m="3965740">Boas,</span> <span m="3966310">but</span> <span
  m="3966520">that's</span> <span m="3966790">hard</span> <span
  m="3967020">to</span> <span m="3967090">generalize</span> <span
  m="3967610">to</span> <span m="3967690">2D.</span></p><p><span
  m="3970940">You</span> <span m="3971180">could</span> <span
  m="3971360">use</span> <span m="3972150">level</span> <span
  m="3972820">links.</span> <span m="3973640">Here's</span> <span
  m="3973770">a</span> <span m="3973870">fancy</span> <span
  m="3974240">version.</span> <span m="3974940">We</span> <span
  m="3975140">could</span> <span m="3975270">use</span> <span
  m="3975470">level</span> <span m="3975860">linked</span> <span m="3977040">2-3
  trees</span> <span m="3977730">with</span> <span m="3977870">data</span> <span
  m="3978090">in</span> <span m="3978240">the</span> <span
  m="3978330">leaves.</span> <span m="3979310">Then</span> <span
  m="3980010">once</span> <span m="3980340">I</span> <span
  m="3980420">find</span> <span m="3981670">x</span> <span
  m="3981920">min,</span> <span m="3982990">I</span> <span
  m="3983120">find</span> <span m="3983350">this</span> <span
  m="3983510">point,</span> <span m="3984150">I</span> <span
  m="3984270">can</span> <span m="3984450">go</span> <span m="3984620">to</span>
  <span m="3984750">the</span> <span m="3984880">successor</span> <span
  m="3985570">in</span> <span m="3985720">constant</span> <span
  m="3986190">time</span> <span m="3986580">because</span> <span
  m="3986930">that's</span> <span m="3987140">a</span> <span
  m="3987180">finger</span> <span m="3987490">search</span> <span
  m="3987750">with</span> <span m="3987970">a</span> <span
  m="3988310">rank</span> <span m="3988550">difference</span> <span
  m="3988900">of</span> <span m="3988990">1.</span> <span m="3989680">And</span>
  <span m="3989780">I</span> <span m="3989830">could</span> <span
  m="3989980">just</span> <span m="3990160">keep</span> <span
  m="3990390">calling</span> <span m="3990860">successor</span> <span
  m="3992180">and</span> <span m="3992850">in</span> <span
  m="3993460">constant</span> <span m="3993900">time</span> <span
  m="3994190">per</span> <span m="3994420">item</span> <span
  m="3994840">I</span> <span m="3994960">will</span> <span
  m="3995100">find</span> <span m="3995380">the</span> <span
  m="3995450">next</span> <span m="3995740">item.</span> <span
  m="3996750">So</span> <span m="3996810">we</span> <span
  m="3996900">could</span> <span m="3997010">do</span> <span
  m="3997090">that</span> <span m="3997260">easily</span> <span
  m="3997530">with</span> <span m="3997650">the</span> <span
  m="3997720">sorted</span> <span m="3997990">array.</span></p><p><span
  m="3998280">BST</span> <span m="3999170">is</span> <span
  m="3999360">not</span> <span m="3999570">so</span> <span
  m="3999750">great</span> <span m="4000230">because</span> <span
  m="4000430">successor</span> <span m="4000870">might</span> <span
  m="4001000">cost</span> <span m="4001740">log</span> <span
  m="4002085">n</span> <span m="4002740">each</span> <span
  m="4002950">time.</span> <span m="4004160">But</span> <span
  m="4004230">if</span> <span m="4004370">I</span> <span m="4004430">have</span>
  <span m="4004640">the</span> <span m="4004720">level</span> <span
  m="4005020">links</span> <span m="4005320">then</span> <span
  m="4005570">basically</span> <span m="4005870">I'm</span> <span
  m="4005950">just</span> <span m="4006100">walking</span> <span
  m="4006460">down</span> <span m="4006660">the</span> <span
  m="4006730">link</span> <span m="4006940">list</span> <span
  m="4007150">at</span> <span m="4007240">the</span> <span
  m="4007320">bottom</span> <span m="4007720">of</span> <span
  m="4007850">the</span> <span m="4007980">tree.</span> <span
  m="4009470">OK.</span> <span m="4009690">So</span> <span
  m="4009970">actually</span> <span m="4010260">level</span> <span
  m="4010560">linked</span> <span m="4012160">is</span> <span
  m="4012330">even</span> <span m="4012630">better.</span> <span
  m="4015660">BST</span> <span m="4016400">would</span> <span
  m="4016520">achieve</span> <span m="4017120">something</span> <span
  m="4017490">like</span> <span m="4018640">log</span> <span
  m="4019080">n</span> <span m="4019910">plus</span> <span m="4020460">k</span>
  <span m="4020800">log</span> <span m="4021140">n,</span> <span
  m="4021520">where</span> <span m="4021660">k</span> <span
  m="4022690">is</span> <span m="4022990">the</span> <span
  m="4023080">size</span> <span m="4023500">of</span> <span
  m="4023630">the</span> <span m="4023800">output.</span> <span
  m="4025630">If</span> <span m="4025750">I</span> <span m="4025820">want</span>
  <span m="4026060">k</span> <span m="4026260">points</span> <span
  m="4027050">in</span> <span m="4027140">the</span> <span
  m="4027230">box</span> <span m="4027590">I</span> <span
  m="4027640">have</span> <span m="4027770">to</span> <span
  m="4027860">pay</span> <span m="4028030">log</span> <span
  m="4028130">n.</span> <span m="4028400">For</span> <span
  m="4028550">each</span> <span m="4029230">level</span> <span
  m="4029590">linked</span> <span m="4029940">I'll only</span> <span
  m="4030390">pay</span> <span m="4031640">log</span> <span m="4031995">n</span>
  <span m="4032350">plus</span> <span m="4032590">k.</span> <span
  m="4034130">Here I</span> <span m="4034330">actually</span> <span
  m="4034610">only</span> <span m="4034750">need</span> <span
  m="4034900">the</span> <span m="4034970">levels</span> <span
  m="4035280">at</span> <span m="4035640">the</span> <span
  m="4035950">leaves.</span> <span m="4037310">Level</span> <span
  m="4037540">links.</span></p><p><span m="4038880">OK.</span> <span
  m="4039290">All</span> <span m="4040440">good.</span> <span
  m="4040680">But</span> <span m="4040850">I</span> <span
  m="4040990">actually</span> <span m="4041260">want to</span> <span
  m="4041565">tell you a</span> <span m="4041870">different</span> <span
  m="4042180">way</span> <span m="4042310">to</span> <span m="4042410">do</span>
  <span m="4042570">it</span> <span m="4043200">that</span> <span
  m="4043410">will</span> <span m="4043560">generalize</span> <span
  m="4044120">better.</span> <span m="4050640">The</span> <span
  m="4050790">pictures</span> <span m="4051220">are</span> <span
  m="4051290">going</span> <span m="4051440">to</span> <span
  m="4051510">look</span> <span m="4051720">just</span> <span
  m="4052010">like</span> <span m="4052160">the</span> <span
  m="4052250">pictures</span> <span m="4052760">we've</span> <span
  m="4053820">talked</span> <span m="4054100">about.</span></p><p><span
  m="4075040">So</span> <span m="4075440">these</span> <span
  m="4075640">would</span> <span m="4075760">actually</span> <span
  m="4076030">work</span> <span m="4076250">dynamically.</span> <span
  m="4077980">My</span> <span m="4078190">goal</span> <span
  m="4078430">here</span> <span m="4078730">is</span> <span
  m="4078800">just</span> <span m="4078970">to</span> <span
  m="4079220">achieve</span> <span m="4079580">a</span> <span
  m="4079640">static</span> <span m="4080060">data</span> <span
  m="4080270">structure.</span> <span m="4080720">I'm</span> <span
  m="4080850">going</span> <span m="4080960">to</span> <span
  m="4081450">idealize</span> <span m="4082720">this</span> <span
  m="4083010">solution</span> <span m="4083390">a</span> <span
  m="4083450">little</span> <span m="4083650">bit.</span> <span
  m="4085320">And</span> <span m="4085590">just</span> <span
  m="4085790">say,</span> <span m="4087120">suppose</span> <span
  m="4087540">I</span> <span m="4087600">have</span> <span m="4087840">a</span>
  <span m="4090110">perfectly</span> <span m="4090590">balanced</span> <span
  m="4091030">binary</span> <span m="4091320">search</span> <span
  m="4091670">tree.</span> <span m="4093050">That's</span> <span
  m="4093280">going</span> <span m="4093380">to</span> <span
  m="4093440">be</span> <span m="4093560">my</span> <span
  m="4093690">data</span> <span m="4093920">structure.</span> <span
  m="4095140">OK.</span> <span m="4095470">So</span> <span m="4095670">the
  data</span> <span m="4096060">structure is</span> <span m="4096240">not</span>
  <span m="4096399">hard,</span> <span m="4097200">but</span> <span
  m="4097359">what's</span> <span m="4097590">interesting</span> <span
  m="4098140">is</span> <span m="4098510">how</span> <span m="4098680">I</span>
  <span m="4098779">do</span> <span m="4099479">a</span> <span
  m="4099580">range</span> <span m="4099870">search.</span></p><p><span
  m="4101859">So</span> <span m="4102140">if</span> <span m="4102350">I</span>
  <span m="4102439">do</span> <span m="4104310">range</span> <span
  m="4104569">query</span> <span m="4107390">of</span> <span
  m="4107844">the</span> <span m="4108300">interval,</span> <span
  m="4109349">I'll</span> <span m="4109670">call</span> <span
  m="4109899">it</span> <span m="4110000">ab.</span> <span
  m="4112569">Then</span> <span m="4112970">what</span> <span
  m="4113189">I'm</span> <span m="4113609">going</span> <span
  m="4113979">to</span> <span m="4114050">do</span> <span m="4114270">is</span>
  <span m="4114410">do</span> <span m="4114540">a</span> <span
  m="4114580">binary</span> <span m="4114920">search</span> <span
  m="4115189">for</span> <span m="4115370">a,</span> <span m="4117380">do</span>
  <span m="4117520">a</span> <span m="4117550">binary</span> <span
  m="4117899">search</span> <span m="4118189">for</span> <span
  m="4118300">b,</span> <span m="4123300">trim</span> <span
  m="4123630">the</span> <span m="4123740">common</span> <span
  m="4124140">prefix</span> <span m="4125970">of</span> <span
  m="4126170">those</span> <span m="4126390">search</span> <span
  m="4126790">paths.</span> <span m="4128420">That's</span> <span
  m="4128649">basically</span> <span m="4129130">finding</span> <span
  m="4129529">the</span> <span m="4129819">lowest</span> <span
  m="4130130">common</span> <span m="4130439">ancestor</span> <span
  m="4132504">of</span> <span m="4134294">a</span> <span m="4134560">and</span>
  <span m="4134859">b.</span></p><p><span m="4140029">And</span> <span
  m="4140250">then</span> <span m="4140410">I'm</span> <span
  m="4140479">going</span> <span m="4140580">to</span> <span
  m="4140660">do</span> <span m="4140770">some</span> <span
  m="4140939">stuff.</span> <span m="4141270">Let</span> <span
  m="4141399">me</span> <span m="4141550">draw</span> <span
  m="4141750">the</span> <span m="4141859">picture.</span> <span
  m="4142670">So</span> <span m="4143029">here</span> <span
  m="4143529">is,</span> <span m="4144710">suppose</span> <span
  m="4145069">here's</span> <span m="4145310">the</span> <span
  m="4145399">node</span> <span m="4145680">that</span> <span
  m="4145790">contains</span> <span m="4146319">a.</span> <span
  m="4147649">Here's</span> <span m="4148130">the</span> <span
  m="4148229">node</span> <span m="4148520">that</span> <span
  m="4148609">contains</span> <span m="4149050">b.</span> <span
  m="4149380">They</span> <span m="4149439">may</span> <span
  m="4149569">not</span> <span m="4149779">be</span> <span m="4149970">at</span>
  <span m="4150109">the</span> <span m="4150200">same</span> <span
  m="4150479">depth,</span> <span m="4150880">who</span> <span
  m="4150990">knows.</span> <span m="4152670">Then</span> <span
  m="4152890">I'm</span> <span m="4152970">going</span> <span
  m="4153080">to</span> <span m="4153140">look</span> <span
  m="4153359">at</span> <span m="4153609">the</span> <span
  m="4153800">parents</span> <span m="4154569">of</span> <span
  m="4154779">a.</span> <span m="4155290">I</span> <span m="4155420">just</span>
  <span m="4155750">came</span> <span m="4156080">down</span> <span
  m="4156500">from</span> <span m="4156660">some</span> <span
  m="4156920">path</span> <span m="4157300">here,</span> <span
  m="4158120">and</span> <span m="4158390">some</span> <span
  m="4158560">path</span> <span m="4158930">down</span> <span
  m="4159140">to</span> <span m="4159210">b.</span> <span m="4159630">I</span>
  <span m="4160050">want</span> <span m="4160200">to</span> <span
  m="4160260">find</span> <span m="4160520">this</span> <span
  m="4160680">branching</span> <span m="4161109">point</span> <span
  m="4161439">where</span> <span m="4161590">the</span> <span
  m="4161680">paths</span> <span m="4162090">to a</span> <span m="4162380">and
  the</span> <span m="4162460">paths</span> <span m="4162800">to</span> <span
  m="4162870">b</span> <span m="4163430">diverge.</span></p><p><span
  m="4166490">So</span> <span m="4166990">let's</span> <span
  m="4167350">just</span> <span m="4167500">look</span> <span
  m="4167649">at</span> <span m="4167729">the</span> <span
  m="4167840">parent</span> <span m="4168160">of</span> <span
  m="4168270">a.</span> <span m="4168500">It</span> <span
  m="4168640">could</span> <span m="4168810">be</span> <span
  m="4169080">a</span> <span m="4169200">right</span> <span
  m="4169560">parent,</span> <span m="4174180">in which</span> <span
  m="4174420">case</span> <span m="4174649">there's</span> <span m="4174939">a
  subtree</span> <span m="4175300">here.</span> <span m="4175649">Could</span>
  <span m="4175830">be</span> <span m="4175970">a</span> <span
  m="4176080">left</span> <span m="4176399">parent</span> <span m="4177430">in
  which case,</span> <span m="4177930">subtree</span> <span
  m="4178420">here.</span> <span m="4183020">I'm</span> <span
  m="4183170">going</span> <span m="4183290">to</span> <span
  m="4184130">follow</span> <span m="4184590">my</span> <span
  m="4185399">convention</span> <span m="4185830">again.</span> <span
  m="4186050">That</span> <span m="4186140">x-coordinate</span> <span
  m="4186720">corresponds</span> <span m="4187200">roughly</span> <span
  m="4187550">to</span> <span m="4187740">key.</span> <span
  m="4193206">Left</span> <span m="4193660">parent</span> <span
  m="4194100">here.</span> <span m="4195120">Maybe</span> <span
  m="4195480">right</span> <span m="4195770">parent</span> <span
  m="4196160">here.</span> <span m="4208040">Something</span> <span
  m="4208410">like</span> <span m="4208590">that.</span></p><p><span
  m="4223530">OK.</span> <span m="4223720">Remember</span> <span
  m="4224000">it's</span> <span m="4224140">a</span> <span
  m="4224230">perfect</span> <span m="4224580">tree.</span> <span
  m="4225060">So,</span> <span m="4228240">actually,</span> <span
  m="4228630">all</span> <span m="4228770">the</span> <span
  m="4228850">leaves</span> <span m="4229100">will</span> <span
  m="4229180">be</span> <span m="4229290">at</span> <span m="4229390">the</span>
  <span m="4229470">same</span> <span m="4229700">level.</span> <span
  m="4235050">And,</span> <span m="4235290">roughly</span> <span
  m="4235660">here,</span> <span m="4235870">x-coordinate</span> <span
  m="4236480">corresponds</span> <span m="4237010">to</span> <span
  m="4237100">key.</span> <span m="4239500">So</span> <span
  m="4240190">here</span> <span m="4240410">is</span> <span
  m="4240550">a.</span> <span m="4241786">And</span> <span m="4242200">I</span>
  <span m="4242240">want</span> <span m="4242440">to</span> <span
  m="4242580">return</span> <span m="4243000">all</span> <span
  m="4243260">the</span> <span m="4243340">keys</span> <span
  m="4243670">that</span> <span m="4243790">are</span> <span
  m="4243880">between</span> <span m="4244140">a</span> <span
  m="4244400">and</span> <span m="4244700">b.</span> <span m="4244910">So</span>
  <span m="4245060">that's</span> <span m="4245340">everything</span> <span
  m="4245900">in</span> <span m="4246180">this</span> <span
  m="4247164">sweep</span> <span m="4247638">line.</span></p><p><span
  m="4250960">The</span> <span m="4251340">parents</span> <span
  m="4251790">of</span> <span m="4252010">the</span> <span
  m="4252130">LCA</span> <span m="4252680">don't</span> <span
  m="4252910">matter,</span> <span m="4253200">because</span> <span
  m="4253380">this</span> <span m="4253530">parents</span> <span
  m="4253880">either</span> <span m="4254150">going</span> <span
  m="4254270">to</span> <span m="4254340">be</span> <span m="4254500">way</span>
  <span m="4254770">over</span> <span m="4254970">to</span> <span
  m="4255080">the</span> <span m="4255180">right</span> <span
  m="4255770">or</span> <span m="4255890">way over</span> <span
  m="4256240">to</span> <span m="4256340">the</span> <span
  m="4256400">left.</span> <span m="4256690">In</span> <span
  m="4256760">both</span> <span m="4256950">cases,</span> <span
  m="4257400">it's</span> <span m="4257460">outside</span> <span
  m="4257990">the</span> <span m="4258080">interval</span> <span
  m="4258460">a</span> <span m="4258560">to</span> <span m="4258640">b.</span>
  <span m="4259630">So</span> <span m="4259780">what</span> <span
  m="4259890">I've</span> <span m="4260010">tried</span> <span
  m="4260210">to</span> <span m="4260260">highlight</span> <span
  m="4260640">here,</span> <span m="4260940">and</span> <span
  m="4261070">I</span> <span m="4261160">will</span> <span
  m="4261360">color</span> <span m="4261810">it in</span> <span
  m="4262150">blue,</span> <span m="4263250">is</span> <span
  m="4265810">the</span> <span m="4265960">relevant</span> <span
  m="4266460">nodes</span> <span m="4266700">for</span> <span
  m="4266910">the</span> <span m="4267020">search</span> <span
  m="4267320">between</span> <span m="4267575">a</span> <span
  m="4267830">and</span> <span m="4268110">b.</span> <span m="4268350">So</span>
  <span m="4269010">a</span> <span m="4269540">is</span> <span
  m="4269740">between</span> <span m="4270090">a and</span> <span
  m="4270280">b.</span> <span m="4271570">This</span> <span
  m="4271890">subtree</span> <span m="4272480">is</span> <span
  m="4272650">greater</span> <span m="4272870">than</span> <span m="4273020">a
  and</span> <span m="4273350">less</span> <span m="4273630">than</span> <span
  m="4273760">b.</span> <span m="4274800">This</span> <span
  m="4275070">node,</span> <span m="4275990">and</span> <span
  m="4276230">these</span> <span m="4276470">nodes.</span> <span
  m="4277360">This</span> <span m="4277630">node,</span> <span
  m="4277850">and</span> <span m="4278090">these</span> <span
  m="4278320">nodes.</span> <span m="4280520">This</span> <span
  m="4280780">node</span> <span m="4281270">and</span> <span m="4281760">these
  nodes.</span> <span m="4283580">The</span> <span m="4283690">common</span>
  <span m="4283980">ancestor.</span> <span m="4285490">And</span> <span
  m="4285700">then</span> <span m="4285840">the</span> <span
  m="4285920">corresponding</span> <span m="4286480">thing</span> <span
  m="4286720">over</span> <span m="4287040">here.</span> <span
  m="4291350">All</span> <span m="4291650">the</span> <span
  m="4291750">nodes</span> <span m="4292030">in</span> <span
  m="4292170">all</span> <span m="4292340">these</span> <span
  m="4292590">blue</span> <span m="4292820">subtrees,</span> <span
  m="4293450">plus</span> <span m="4293890">these</span> <span
  m="4294810">individual</span> <span m="4295300">nodes,</span> <span
  m="4295730">fall</span> <span m="4296100">in</span> <span
  m="4296150">the</span> <span m="4296250">interval</span> <span
  m="4296630">between</span> <span m="4297120">a and</span> <span
  m="4297390">b,</span> <span m="4298370">and</span> <span
  m="4298520">that's</span> <span m="4298770">it.</span></p><p><span
  m="4300720">OK.</span> <span m="4300940">This</span> <span
  m="4301050">should</span> <span m="4301260">look</span> <span
  m="4301490">super</span> <span m="4301930">familiar.</span> <span
  m="4302400">It's</span> <span m="4302560">just</span> <span
  m="4302800">like</span> <span m="4302960">when</span> <span
  m="4303080">we're</span> <span m="4303250">computing</span> <span
  m="4303710">rank.</span> <span m="4304690">We're</span> <span
  m="4304850">trying</span> <span m="4305090">to</span> <span
  m="4305140">figure</span> <span m="4305380">out</span> <span
  m="4305520">how</span> <span m="4305640">many</span> <span
  m="4305830">guys</span> <span m="4306080">are</span> <span m="4306140">to our
  left</span> <span m="4306730">or to</span> <span m="4306860">our</span> <span
  m="4307020">right.</span> <span m="4307740">We're</span> <span
  m="4308040">basically</span> <span m="4308480">doing</span> <span
  m="4308800">a</span> <span m="4308960">rightward</span> <span
  m="4309600">rank</span> <span m="4309960">from</span> <span
  m="4310180">a</span> <span m="4310660">and a</span> <span
  m="4310740">leftward</span> <span m="4311130">rank</span> <span
  m="4311410">from</span> <span m="4311570">b.</span> <span m="4312680">And
  that</span> <span m="4313030">finds</span> <span m="4313330">all</span> <span
  m="4313540">the</span> <span m="4313630">nodes.</span> <span
  m="4314160">And</span> <span m="4314350">stopping</span> <span
  m="4315060">when</span> <span m="4315200">those</span> <span
  m="4315470">two</span> <span m="4315640">searches</span> <span
  m="4316440">converge.</span> <span m="4317670">And</span> <span
  m="4317750">then</span> <span m="4317860">we're</span> <span
  m="4317950">finding</span> <span m="4318290">all</span> <span
  m="4318450">the</span> <span m="4318510">nodes</span> <span
  m="4318760">between</span> <span m="4319130">a and</span> <span
  m="4319350">b.</span> <span m="4320040">I'm</span> <span
  m="4320060">not</span> <span m="4320220">going</span> <span
  m="4320320">to</span> <span m="4320380">write</span> <span
  m="4320530">down</span> <span m="4320680">the</span> <span
  m="4320740">pseudocode</span> <span m="4320995">because it's the</span> <span
  m="4321250">same</span> <span m="4321520">kind</span> <span
  m="4321660">of</span> <span m="4321750">thing.</span> <span
  m="4321920">You</span> <span m="4322040">look</span> <span
  m="4322240">at</span> <span m="4322340">right</span> <span
  m="4322650">parents</span> <span m="4323400">and</span> <span
  m="4323640">left</span> <span m="4323880">parents.</span></p><p><span
  m="4325050">You</span> <span m="4325480">just</span> <span
  m="4325650">walk</span> <span m="4325930">up</span> <span
  m="4326050">from</span> <span m="4326280">a.</span> <span
  m="4326880">Whenever</span> <span m="4327230">you</span> <span
  m="4327380">get</span> <span m="4327630">a</span> <span
  m="4327790">right</span> <span m="4328210">parent</span> <span
  m="4329070">then</span> <span m="4329550">you</span> <span
  m="4329700">want</span> <span m="4329960">that</span> <span
  m="4330220">node,</span> <span m="4330550">and</span> <span
  m="4330700">the</span> <span m="4330770">subtree</span> <span
  m="4331200">to</span> <span m="4331330">its</span> <span
  m="4331470">right.</span> <span m="4332830">And</span> <span
  m="4333060">so</span> <span m="4333170">that</span> <span
  m="4333370">will</span> <span m="4333500">highlight</span> <span
  m="4333940">these</span> <span m="4334140">nodes.</span> <span
  m="4335070">Same</span> <span m="4335490">thing</span> <span
  m="4335650">for</span> <span m="4335830">b,</span> <span
  m="4336160">but</span> <span m="4336310">you</span> <span
  m="4336450">look</span> <span m="4336630">at</span> <span
  m="4336720">left</span> <span m="4337000">parents.</span> <span
  m="4337920">And</span> <span m="4338070">then</span> <span
  m="4338180">you</span> <span m="4338290">stop</span> <span
  m="4338860">when</span> <span m="4339280">those</span> <span
  m="4339620">two</span> <span m="4339760">searches</span> <span
  m="4340190">converge.</span> <span m="4340610">So</span> <span
  m="4340710">you're</span> <span m="4340770">going</span> <span
  m="4340900">to</span> <span m="4341010">do</span> <span
  m="4341160">them</span> <span m="4341330">in</span> <span
  m="4341390">lock</span> <span m="4341670">step.</span> <span
  m="4341890">You</span> <span m="4341960">do</span> <span
  m="4342080">one</span> <span m="4342280">step</span> <span m="4342510">for
  a</span> <span m="4342640">and</span> <span m="4342940">b.</span> <span
  m="4343530">One step</span> <span m="4343770">for a and</span> <span
  m="4344250">b.</span> <span m="4344810">And</span> <span
  m="4345070">when</span> <span m="4345190">they</span> <span
  m="4345270">happen</span> <span m="4345580">to</span> <span
  m="4345640">hit</span> <span m="4345820">the</span> <span
  m="4345900">same</span> <span m="4346130">node,</span> <span
  m="4346370">then</span> <span m="4346500">you're</span> <span
  m="4346620">done.</span> <span m="4346980">You</span> <span
  m="4347350">add</span> <span m="4347560">that</span> <span m="4347900">node
  to</span> <span m="4348020">your</span> <span m="4348140">list.</span> <span
  m="4349990">And</span> <span m="4351470">what</span> <span
  m="4351700">you</span> <span m="4351860">end</span> <span
  m="4352070">up</span> <span m="4352270">with</span> <span
  m="4353810">is</span> <span m="4354790">a</span> <span
  m="4354890">bunch</span> <span m="4355630">of</span> <span
  m="4356440">nodes</span> <span m="4358660">and</span> <span
  m="4358950">rooted</span> <span m="4359290">subtrees.</span></p><p><span
  m="4363820">The</span> <span m="4363920">things</span> <span
  m="4364210">I</span> <span m="4364290">circled</span> <span
  m="4364770">in</span> <span m="4364890">blue</span> <span
  m="4366360">is</span> <span m="4366490">going</span> <span
  m="4366620">to</span> <span m="4366680">be</span> <span m="4366850">my</span>
  <span m="4367100">return</span> <span m="4367630">value.</span> <span
  m="4368500">So</span> <span m="4369420">I'm</span> <span
  m="4369530">going</span> <span m="4369630">to</span> <span
  m="4369690">return</span> <span m="4370210">all</span> <span
  m="4370430">of</span> <span m="4370540">these</span> <span
  m="4370770">nodes,</span> <span m="4371020">explicitly.</span> <span
  m="4372110">And</span> <span m="4372270">I'm</span> <span
  m="4372380">also</span> <span m="4372630">going</span> <span
  m="4372760">to</span> <span m="4372810">return</span> <span
  m="4373440">these</span> <span m="4373610">subtrees.</span> <span
  m="4374280">I'm</span> <span m="4374380">not</span> <span
  m="4374540">going</span> <span m="4374640">to</span> <span
  m="4374720">have</span> <span m="4374910">to</span> <span
  m="4375040">write</span> <span m="4375260">them</span> <span
  m="4375390">down.</span> <span m="4375720">I'm</span> <span
  m="4375780">just</span> <span m="4375960">going</span> <span
  m="4376060">to</span> <span m="4376290">return</span> <span
  m="4376660">the</span> <span m="4376800">root</span> <span
  m="4377550">of</span> <span m="4377820">the</span> <span
  m="4377910">subtree,</span> <span m="4378300">and</span> <span
  m="4378390">say,</span> <span m="4378520">hey</span> <span
  m="4378670">look.</span> <span m="4378880">Here's</span> <span
  m="4379170">an</span> <span m="4379250">entire</span> <span
  m="4379860">subtree</span> <span m="4380780">that</span> <span
  m="4380880">contains</span> <span m="4381930">points</span> <span
  m="4382230">that</span> <span m="4382350">are</span> <span
  m="4382460">in</span> <span m="4382530">the</span> <span
  m="4382660">answer.</span> <span m="4384520">Don't</span> <span
  m="4384690">have to list them</span> <span m="4385190">explicitly,</span>
  <span m="4386380">I</span> <span m="4386470">can</span> <span
  m="4386600">just</span> <span m="4386750">give</span> <span
  m="4386900">you</span> <span m="4386970">the</span> <span
  m="4387070">tree.</span></p><p><span m="4388560">Then</span> <span
  m="4388730">if</span> <span m="4388860">I</span> <span m="4388910">want</span>
  <span m="4389130">to</span> <span m="4389180">know</span> <span
  m="4389370">how</span> <span m="4389780">many</span> <span
  m="4391120">results</span> <span m="4391600">are</span> <span
  m="4391710">in</span> <span m="4391780">the</span> <span
  m="4391900">answer,</span> <span m="4392750">well,</span> <span
  m="4393070">just</span> <span m="4393290">augment</span> <span
  m="4393700">to</span> <span m="4393780">store</span> <span
  m="4393990">subtree</span> <span m="4394380">size</span> <span
  m="4395240">at</span> <span m="4395720">the</span> <span
  m="4395810">beginning.</span> <span m="4396730">And</span> <span
  m="4396810">then</span> <span m="4397000">I</span> <span
  m="4397060">can</span> <span m="4397240">count</span> <span
  m="4397560">how</span> <span m="4397740">many</span> <span
  m="4397940">nodes</span> <span m="4398200">are</span> <span
  m="4398260">down</span> <span m="4398480">here,</span> <span
  m="4398750">how</span> <span m="4398910">many</span> <span
  m="4399100">nodes</span> <span m="4399340">are</span> <span
  m="4399390">down</span> <span m="4399610">here,</span> <span
  m="4400280">add</span> <span m="4400670">that</span> <span
  m="4400870">up</span> <span m="4401080">for</span> <span
  m="4401230">all</span> <span m="4401400">the</span> <span
  m="4401490">triangles,</span> <span m="4402670">and</span> <span
  m="4402750">then</span> <span m="4402870">also</span> <span
  m="4403160">add</span> <span m="4403420">one</span> <span
  m="4403730">for</span> <span m="4403900">each</span> <span
  m="4404140">of</span> <span m="4404260">the</span> <span
  m="4404360">blue</span> <span m="4404570">nodes,</span> <span
  m="4405700">and</span> <span m="4405790">then</span> <span
  m="4405890">I've</span> <span m="4406040">counted</span> <span
  m="4406510">the</span> <span m="4408040">size</span> <span
  m="4408320">of</span> <span m="4408380">the</span> <span
  m="4408500">answer</span> <span m="4409730">in</span> <span
  m="4409890">how</span> <span m="4410030">much</span> <span
  m="4410280">time?</span> <span m="4410500">How</span> <span
  m="4410730">many</span> <span m="4411030">subtrees</span> <span
  m="4411580">and</span> <span m="4411650">how</span> <span
  m="4411860">many</span> <span m="4412100">nodes</span> <span
  m="4412440">am</span> <span m="4412500">I</span> <span
  m="4412630">returning</span> <span m="4413080">here?</span> <span
  m="4415210">Log.</span></p><p><span m="4420490">Log</span> <span
  m="4420775">n</span> <span m="4421060">nodes</span> <span
  m="4421570">and</span> <span m="4421980">log</span> <span m="4422400">n</span>
  <span m="4422710">rooted</span> <span m="4422980">subtrees</span> <span
  m="4423460">because</span> <span m="4423810">at</span> <span
  m="4423880">each</span> <span m="4424080">step,</span> <span
  m="4424380">I'm</span> <span m="4424480">going</span> <span
  m="4424750">up</span> <span m="4424960">by</span> <span m="4425090">one</span>
  <span m="4425340">for</span> <span m="4425490">a,</span> <span
  m="4425835">and</span> <span m="4426180">up</span> <span m="4426350">by</span>
  <span m="4426460">one</span> <span m="4426650">for</span> <span
  m="4426790">b.</span> <span m="4426990">So</span> <span
  m="4427100">it's</span> <span m="4427190">like</span> <span m="4427340">2
  log</span> <span m="4427570">n.</span> <span m="4428260">Log</span> <span
  m="4428560">n.</span></p><p><span m="4431880">So</span> <span
  m="4432020">I</span> <span m="4432230">would</span> <span
  m="4432390">call</span> <span m="4432580">this</span> <span
  m="4432750">an</span> <span m="4432940">implicit</span> <span
  m="4433540">representation</span> <span m="4434880">of</span> <span
  m="4435040">the</span> <span m="4435150">answer.</span> <span
  m="4435780">From</span> <span m="4436040">that</span> <span
  m="4436170">implicit</span> <span m="4436590">representation</span> <span
  m="4437810">you</span> <span m="4437970">can</span> <span
  m="4438130">do</span> <span m="4439290">subtree</span> <span
  m="4439630">size.</span> <span m="4439920">Augmentation</span> <span
  m="4440460">to</span> <span m="4440570">count</span> <span
  m="4440910">the</span> <span m="4441010">size</span> <span
  m="4441320">the</span> <span m="4441450">answer.</span> <span
  m="4442240">You</span> <span m="4442420">can</span> <span
  m="4442770">just</span> <span m="4443050">start</span> <span
  m="4443280">walking</span> <span m="4443640">through</span> <span
  m="4443980">one</span> <span m="4444180">by</span> <span
  m="4444310">one,</span> <span m="4445340">do</span> <span
  m="4445410">an</span> <span m="4445590">inter traversal</span> <span
  m="4446140">of</span> <span m="4446610">the</span> <span
  m="4446710">trees,</span> <span m="4447080">and</span> <span
  m="4447150">you'll</span> <span m="4447290">get</span> <span
  m="4447560">the</span> <span m="4447640">first</span> <span
  m="4447950">k</span> <span m="4448120">points</span> <span
  m="4448480">in</span> <span m="4448550">the</span> <span
  m="4448640">answer</span> <span m="4449480">in</span> <span
  m="4449630">order</span> <span m="4449790">k</span> <span
  m="4449960">time.</span> <span m="4450220">Question?</span></p><p><span
  m="4451572">AUDIENCE: Just a</span> <span m="4452068">clarification.</span>
  <span m="4452564">You said when</span> <span m="4453060">we were walking
  up,</span> <span m="4453556">you want to</span> <span m="4454052">get all
  the</span> <span m="4454548">ancestors</span> <span m="4455044">in</span>
  <span m="4455540">their</span> <span m="4456532">right</span> <span
  m="4457028">subtrees.</span> <span m="4457524">But</span> <span
  m="4458020">you don't</span> <span m="4458516">do that</span> <span
  m="4459012">for the left parent,</span> <span
  m="4459508">right?</span></p><p><span m="4460020">PROFESSOR: That's</span>
  <span m="4460260">right.</span> <span m="4460550">As</span> <span
  m="4460800">I'm</span> <span m="4460930">walking</span> <span
  m="4461300">up</span> <span m="4461410">the</span> <span
  m="4461500">tree,</span> <span m="4462090">if</span> <span
  m="4462230">it's</span> <span m="4462380">a</span> <span
  m="4462500">right</span> <span m="4462830">parent</span> <span
  m="4463360">then</span> <span m="4463500">I</span> <span
  m="4463580">take</span> <span m="4463900">the</span> <span
  m="4464050">right</span> <span m="4464400">subtree</span> <span
  m="4464900">and include</span> <span m="4465200">that in the</span> <span
  m="4465360">answer.</span> <span m="4465760">If</span> <span
  m="4465860">it's</span> <span m="4465990">a</span> <span
  m="4466050">left</span> <span m="4466330">parent</span> <span
  m="4467470">just</span> <span m="4467670">forget</span> <span
  m="4467900">about</span> <span m="4468160">it.</span> <span
  m="4469210">Don't</span> <span m="4469480">do</span> <span
  m="4469630">anything.</span> <span m="4470230">Just</span> <span
  m="4470320">keep</span> <span m="4470540">following</span> <span
  m="4470910">parents.</span> <span m="4471640">Whenever</span> <span
  m="4471970">I</span> <span m="4472020">do right</span> <span
  m="4472480">parent</span> <span m="4473190">then</span> <span
  m="4473380">I</span> <span m="4473710">also</span> <span
  m="4474020">add</span> <span m="4474430">that</span> <span
  m="4474660">node</span> <span m="4474980">and</span> <span
  m="4475160">the</span> <span m="4475230">right subtree.</span> <span
  m="4475750">If</span> <span m="4475850">it's</span> <span m="4475980">a</span>
  <span m="4476040">left</span> <span m="4476250">parent</span> <span
  m="4476480">I</span> <span m="4476570">don't</span> <span
  m="4476820">include</span> <span m="4477090">the</span> <span
  m="4477170">node,</span> <span m="4477480">I</span> <span
  m="4477530">don't</span> <span m="4477770">include the</span> <span
  m="4478060">left</span> <span m="4478350">subtree.</span> <span
  m="4479110">I</span> <span m="4479190">also</span> <span
  m="4479380">don't</span> <span m="4479570">include</span> <span
  m="4479800">the</span> <span m="4479880">right</span> <span
  m="4480260">subtree.</span> <span m="4480420">That</span> <span
  m="4480550">would</span> <span m="4480640">have</span> <span
  m="4480810">too</span> <span m="4480940">much</span> <span
  m="4481150">stuff.</span></p><p><span m="4484340">It's</span> <span
  m="4484430">easy</span> <span m="4484650">when</span> <span
  m="4484780">you</span> <span m="4484830">see</span> <span
  m="4484990">the</span> <span m="4485100">picture,</span> <span
  m="4485530">you</span> <span m="4485650">would</span> <span
  m="4485850">write</span> <span m="4486040">down</span> <span
  m="4486200">the</span> <span m="4486300">algorithm.</span> <span
  m="4486950">It's</span> <span m="4487220">clear.</span> <span
  m="4487450">It's</span> <span m="4487640">left</span> <span
  m="4487910">versus</span> <span m="4488220">right</span> <span
  m="4489530">parents.</span></p><p><span m="4490550">AUDIENCE: Would you</span>
  <span m="4491040">include</span> <span m="4491530">the left</span> <span
  m="4492020">subtree</span> <span m="4492510">of b?</span></p><p><span
  m="4493490">PROFESSOR: I</span> <span m="4493610">would</span> <span
  m="4493770">also--</span> <span m="4494200">thank</span> <span
  m="4494450">you.</span> <span m="4494820">I should</span> <span
  m="4495120">color</span> <span m="4495610">the</span> <span
  m="4495700">left</span> <span m="4496550">subtree</span> <span
  m="4497100">of</span> <span m="4497250">b.</span> <span m="4498630">I
  didn't</span> <span m="4498790">apply</span> <span m="4499070">symmetry</span>
  <span m="4499600">perfectly.</span> <span m="4500480">So</span> <span
  m="4500720">we</span> <span m="4500820">have</span> <span
  m="4501020">the</span> <span m="4501130">right</span> <span
  m="4501410">subtree</span> <span m="4501660">of a</span> <span
  m="4502030">and</span> <span m="4502280">the</span> <span
  m="4502350">left</span> <span m="4502670">subtree</span> <span m="4502890">of
  b.</span> <span m="4503250">Thanks.</span> <span m="4504950">I</span> <span
  m="4505060">would</span> <span m="4505200">also</span> <span
  m="4505400">include</span> <span m="4505660">b</span> <span
  m="4507106">if</span> <span m="4507590">it's</span> <span m="4507750">a</span>
  <span m="4507820">closed</span> <span m="4508140">interval.</span></p><p><span
  m="4510110">Slightly</span> <span m="4510540">more</span> <span
  m="4510710">general.</span> <span m="4511130">If</span> <span m="4511260">a
  and</span> <span m="4511520">b</span> <span m="4511680">are</span> <span
  m="4511740">not</span> <span m="4512020">in</span> <span
  m="4512130">the</span> <span m="4512220">tree</span> <span
  m="4512640">then</span> <span m="4512810">this</span> <span
  m="4512990">is</span> <span m="4513120">really</span> <span
  m="4513400">the</span> <span m="4513700">successor</span> <span m="4514180">of
  a</span> <span m="4514840">and</span> <span m="4514920">this</span> <span
  m="4515080">is</span> <span m="4515180">the</span> <span
  m="4515270">predecessor</span> <span m="4515645">of</span> <span
  m="4516020">b.</span> <span m="4517110">So</span> <span
  m="4517310">then</span> <span m="4517610">a</span> <span
  m="4517880">and</span> <span m="4518090">b</span> <span
  m="4518210">don't</span> <span m="4518400">have</span> <span
  m="4518610">to</span> <span m="4518710">be</span> <span m="4518880">in</span>
  <span m="4519020">there.</span> <span m="4519790">This</span> <span
  m="4519990">is</span> <span m="4520070">still</span> <span
  m="4520340">a</span> <span m="4520410">well</span> <span
  m="4520640">defined</span> <span m="4522010">range</span> <span
  m="4522250">search.</span> <span m="4523190">OK.</span> <span
  m="4523440">Now</span> <span m="4523680">we</span> <span
  m="4523860">really</span> <span m="4524380">understand</span> <span
  m="4524870">1D.</span> <span m="4525540">I</span> <span
  m="4525630">claim</span> <span m="4527340">we've</span> <span
  m="4527590">almost</span> <span m="4527990">solved</span> <span
  m="4528300">all</span> <span m="4528460">dimensions.</span> <span
  m="4530190">All we</span> <span m="4530540">need</span> <span
  m="4530880">is</span> <span m="4531050">a</span> <span
  m="4531130">little</span> <span m="4531420">bit</span> <span
  m="4531620">of</span> <span m="4531710">augmentation.</span> <span
  m="4533340">So</span> <span m="4533710">let's</span> <span
  m="4533940">do</span> <span m="4534050">it.</span></p><p><span
  m="4551560">Let's</span> <span m="4551790">start</span> <span
  m="4552040">with</span> <span m="4552490">2D.</span> <span
  m="4553220">But</span> <span m="4553390">then</span> <span
  m="4553550">3D,</span> <span m="4553970">and</span> <span
  m="4554190">4D,</span> <span m="4554860">and</span> <span
  m="4554960">so</span> <span m="4555130">on</span> <span
  m="4555320">will</span> <span m="4555480">be</span> <span
  m="4556300">easy.</span> <span m="4559090">Why do</span> <span
  m="4559280">I</span> <span m="4559340">care</span> <span
  m="4559550">about</span> <span m="4559840">4D</span> <span
  m="4560240">range</span> <span m="4560560">trees?</span> <span
  m="4560990">Because</span> <span m="4561660">maybe I</span> <span
  m="4561870">have</span> <span m="4562010">a</span> <span
  m="4562080">database.</span> <span m="4563110">Each</span> <span
  m="4563290">of</span> <span m="4563350">these</span> <span
  m="4563550">points</span> <span m="4564160">is</span> <span
  m="4564300">actually</span> <span m="4564610">just</span> <span
  m="4565180">a</span> <span m="4565310">row</span> <span m="4565720">in</span>
  <span m="4565940">the</span> <span m="4566700">database</span> <span
  m="4567230">which</span> <span m="4567500">has</span> <span
  m="4567720">four</span> <span m="4568060">columns,</span> <span
  m="4568590">four</span> <span m="4568880">values.</span> <span
  m="4569880">And</span> <span m="4570170">what</span> <span
  m="4570380">I'm</span> <span m="4570460">trying</span> <span
  m="4570660">to</span> <span m="4570740">do</span> <span
  m="4570950">here</span> <span m="4571160">is</span> <span
  m="4571400">find</span> <span m="4571790">all</span> <span
  m="4572040">the</span> <span m="4572160">people</span> <span
  m="4572590">in</span> <span m="4572690">my</span> <span
  m="4572800">database</span> <span m="4573320">that</span> <span
  m="4573360">have</span> <span m="4573540">a</span> <span
  m="4573600">salary</span> <span m="4574070">between</span> <span
  m="4574390">this</span> <span m="4574580">and</span> <span
  m="4574690">this,</span> <span m="4575000">and</span> <span
  m="4575080">have</span> <span m="4575270">an</span> <span
  m="4575470">age</span> <span m="4575850">between</span> <span
  m="4576180">this</span> <span m="4576360">and</span> <span
  m="4576470">that,</span> <span m="4577180">and</span> <span
  m="4577260">have</span> <span m="4577490">a</span> <span
  m="4577600">profession</span> <span m="4578320">between</span> <span
  m="4578660">this</span> <span m="4578840">and</span> <span
  m="4578930">this.</span> <span m="4579370">I don't</span> <span
  m="4579790">know what</span> <span m="4579890">that</span> <span
  m="4580050">means.</span> <span m="4582130">Number</span> <span
  m="4582420">of</span> <span m="4582500">degrees</span> <span
  m="4583010">between</span> <span m="4583340">this</span> <span
  m="4583510">and</span> <span m="4583620">this,</span> <span
  m="4583900">whatever.</span></p><p><span m="4584600">You</span> <span
  m="4584670">have</span> <span m="4584870">some</span> <span
  m="4585050">numerical</span> <span m="4585740">data</span> <span
  m="4586130">representing</span> <span m="4586860">a</span> <span
  m="4586930">person</span> <span m="4587350">or</span> <span
  m="4587460">thing</span> <span m="4588190">in</span> <span
  m="4588360">your</span> <span m="4588470">database,</span> <span
  m="4589090">then</span> <span m="4589160">this</span> <span
  m="4589380">is</span> <span m="4590070">a</span> <span
  m="4590190">typical</span> <span m="4590640">kind</span> <span
  m="4590860">of</span> <span m="4590940">search</span> <span
  m="4591280">you</span> <span m="4591390">want</span> <span
  m="4591570">to</span> <span m="4591640">do.</span> <span
  m="4592620">And</span> <span m="4592870">you</span> <span
  m="4592990">want</span> <span m="4593130">to</span> <span
  m="4593180">know</span> <span m="4593380">how</span> <span
  m="4593570">many</span> <span m="4593810">answers</span> <span
  m="4594220">you've</span> <span m="4594440">got</span> <span
  m="4594850">and</span> <span m="4594950">then</span> <span
  m="4595090">list</span> <span m="4595370">the</span> <span
  m="4595450">first</span> <span m="4595850">hundreds</span> <span
  m="4596110">of</span> <span m="4596230">them,</span> <span
  m="4596550">or</span> <span m="4596620">whatever.</span> <span
  m="4597290">So</span> <span m="4597450">this</span> <span
  m="4597630">is</span> <span m="4598610">a</span> <span
  m="4598700">practical</span> <span m="4599180">thing</span> <span
  m="4599430">in</span> <span m="4599580">databases.</span> <span
  m="4600150">This is</span> <span m="4600250">what</span> <span
  m="4600410">you</span> <span m="4600490">might</span> <span
  m="4600640">call</span> <span m="4600850">an</span> <span
  m="4601000">index</span> <span m="4601520">in</span> <span
  m="4601700">the</span> <span m="4601810">database.</span></p><p><span
  m="4603840">So</span> <span m="4603850">let's</span> <span
  m="4604040">start.</span> <span m="4604360">Suppose</span> <span
  m="4604710">your</span> <span m="4604830">data</span> <span
  m="4605080">is</span> <span m="4605240">just</span> <span
  m="4605420">two</span> <span m="4605540">dimensional.</span> <span
  m="4605810">You</span> <span m="4606080">have</span> <span
  m="4606230">two</span> <span m="4606450">fields</span> <span
  m="4606820">for</span> <span m="4606940">every</span> <span
  m="4607230">item.</span> <span m="4608910">What</span> <span
  m="4609110">I'm</span> <span m="4609180">going</span> <span
  m="4609290">to</span> <span m="4609380">do</span> <span m="4610240">is</span>
  <span m="4610700">store</span> <span m="4611160">a 1D</span> <span
  m="4611730">range</span> <span m="4612010">tree</span> <span
  m="4617900">on</span> <span m="4618210">all</span> <span
  m="4618580">points</span> <span m="4622800">by</span> <span
  m="4623270">x.</span> <span m="4625430">So</span> <span
  m="4626500">this</span> <span m="4626840">data</span> <span
  m="4627050">structure</span> <span m="4627410">makes</span> <span
  m="4627620">sense</span> <span m="4628050">if</span> <span
  m="4628210">you</span> <span m="4628370">fix</span> <span m="4628750">a</span>
  <span m="4628820">dimension.</span> <span m="4629240">Say</span> <span
  m="4629460">x</span> <span m="4629750">is</span> <span m="4629890">all</span>
  <span m="4630080">I</span> <span m="4630150">care</span> <span
  m="4630400">about.</span> <span m="4630990">Forget</span> <span
  m="4631300">about</span> <span m="4631530">y.</span> <span
  m="4633290">So</span> <span m="4633560">my</span> <span m="4633680">point
  set.</span> <span m="4634140">Yeah.</span> <span m="4635020">So</span> <span
  m="4636800">what</span> <span m="4636980">that</span> <span
  m="4637300">corresponds</span> <span m="4638190">to</span> <span
  m="4639170">is</span> <span m="4639970">projecting</span> <span
  m="4641550">each</span> <span m="4641770">of</span> <span
  m="4641840">these</span> <span m="4642030">points</span> <span
  m="4643380">onto</span> <span m="4643910">the</span> <span
  m="4644060">x-axis.</span> <span m="4651320">And</span> <span
  m="4651470">now</span> <span m="4651910">also</span> <span
  m="4652340">projecting</span> <span m="4652830">my</span> <span
  m="4652960">query.</span></p><p><span m="4656050">So</span> <span
  m="4656130">my</span> <span m="4656250">new</span> <span
  m="4656470">query</span> <span m="4657010">is</span> <span
  m="4657360">from</span> <span m="4657510">here</span> <span
  m="4657750">to</span> <span m="4657800">here</span> <span
  m="4658230">in</span> <span m="4658450">x.</span> <span m="4661420">And</span>
  <span m="4661720">so</span> <span m="4662060">this</span> <span
  m="4662430">data</span> <span m="4662670">structure</span> <span
  m="4663590">will</span> <span m="4663730">let</span> <span
  m="4663900">me</span> <span m="4664050">find</span> <span
  m="4664520">all</span> <span m="4664820">these</span> <span
  m="4665030">points</span> <span m="4665410">that</span> <span
  m="4665520">match</span> <span m="4665830">in</span> <span
  m="4665940">x.</span> <span m="4666370">That's</span> <span
  m="4666900">not</span> <span m="4667130">good</span> <span
  m="4667420">because</span> <span m="4667780">there's</span> <span
  m="4667920">actually</span> <span m="4668180">only</span> <span
  m="4668420">two</span> <span m="4668650">points</span> <span
  m="4668980">that</span> <span m="4669100">I</span> <span
  m="4669150">want,</span> <span m="4669940">but</span> <span
  m="4670060">I</span> <span m="4670140">find</span> <span
  m="4670480">four</span> <span m="4670820">points</span> <span
  m="4671280">in</span> <span m="4671410">this</span> <span
  m="4671560">picture.</span> <span m="4673210">But</span> <span
  m="4673630">it's</span> <span m="4673840">half</span> <span
  m="4674150">of</span> <span m="4674300">the</span> <span
  m="4674490">answer.</span> <span m="4675120">It's</span> <span
  m="4675210">all</span> <span m="4675400">the</span> <span m="4675550">x</span>
  <span m="4675800">matches</span> <span m="4676580">forgetting</span> <span
  m="4676990">about</span> <span m="4677260">y.</span></p><p><span
  m="4680540">Now</span> <span m="4680760">here's</span> <span
  m="4681030">the</span> <span m="4681120">fun</span> <span
  m="4681330">part.</span> <span m="4683140">So</span> <span
  m="4683380">when</span> <span m="4683560">I</span> <span m="4683630">do</span>
  <span m="4683780">a</span> <span m="4683840">search</span> <span
  m="4684190">here</span> <span m="4684800">I</span> <span
  m="4684960">get</span> <span m="4685990">log</span> <span m="4686490">n</span>
  <span m="4686710">nodes.</span> <span m="4688280">Nodes</span> <span
  m="4688550">are</span> <span m="4688640">good</span> <span
  m="4688870">because</span> <span m="4689150">they</span> <span
  m="4689300">have</span> <span m="4689650">a</span> <span
  m="4689710">single</span> <span m="4690080">key</span> <span
  m="4690280">in</span> <span m="4690420">them.</span> <span
  m="4691210">So</span> <span m="4691380">I'll</span> <span
  m="4691470">just</span> <span m="4691700">check</span> <span
  m="4692010">for</span> <span m="4692170">each</span> <span
  m="4692380">of</span> <span m="4692480">those</span> <span
  m="4692840">log</span> <span m="4693120">n</span> <span
  m="4693240">nodes.</span> <span m="4693980">Do</span> <span
  m="4694130">they</span> <span m="4694310">also</span> <span m="4694640">match
  in</span> <span m="4695100">y?</span> <span m="4695780">If</span> <span
  m="4695930">they</span> <span m="4696050">do,</span> <span
  m="4696620">add</span> <span m="4696840">it</span> <span m="4696920">to</span>
  <span m="4697020">the</span> <span m="4697130">answer.</span> <span
  m="4697570">If</span> <span m="4697730">they</span> <span
  m="4697840">don't</span> <span m="4698430">forget</span> <span
  m="4698670">about</span> <span m="4698940">it.</span> <span
  m="4700000">OK.</span></p><p><span m="4701610">But</span> <span
  m="4701970">the</span> <span m="4702120">tricky</span> <span
  m="4702400">part</span> <span m="4702590">is</span> <span m="4702700">I</span>
  <span m="4702810">also</span> <span m="4703190">get</span> <span
  m="4703440">log</span> <span m="4703870">n</span> <span
  m="4704110">subtrees</span> <span m="4704840">representing</span> <span
  m="4705370">parts</span> <span m="4705650">of</span> <span
  m="4705690">the</span> <span m="4705780">answer.</span> <span
  m="4706760">So</span> <span m="4706960">potentially</span> <span
  m="4708222">it could</span> <span m="4708600">be</span> <span
  m="4708790">that</span> <span m="4709040">your</span> <span
  m="4709360">search,</span> <span m="4709970">this</span> <span
  m="4710530">rectangle,</span> <span m="4711190">only</span> <span
  m="4711430">has</span> <span m="4711700">like</span> <span
  m="4711860">five</span> <span m="4712160">points.</span> <span
  m="4713100">But</span> <span m="4713320">if</span> <span
  m="4713460">you</span> <span m="4713560">look</span> <span
  m="4713740">at</span> <span m="4713800">this</span> <span
  m="4713960">whole</span> <span m="4714230">vertical</span> <span
  m="4714640">slab</span> <span m="4716030">there's</span> <span
  m="4716280">a</span> <span m="4716580">billion</span> <span
  m="4716980">points.</span> <span m="4718200">Now,</span> <span
  m="4718380">luckily,</span> <span m="4718830">those</span> <span
  m="4719020">billion</span> <span m="4719380">points</span> <span
  m="4719740">are</span> <span m="4719830">represented</span> <span
  m="4720480">succinctly.</span> <span m="4721050">There's</span> <span
  m="4721290">just</span> <span m="4721490">log</span> <span
  m="4721870">n</span> <span m="4721990">subtrees</span> <span
  m="4722430">saying,</span> <span m="4722730">well</span> <span
  m="4722890">there's</span> <span m="4723100">half</span> <span
  m="4723350">a</span> <span m="4723400">billion</span> <span
  m="4723710">here,</span> <span m="4724080">and</span> <span
  m="4724140">a</span> <span m="4724200">quarter</span> <span
  m="4724470">billion</span> <span m="4724770">here,</span> <span
  m="4725260">and</span> <span m="4725370">an</span> <span
  m="4725510">eighth</span> <span m="4725700">of</span> <span
  m="4725750">a</span> <span m="4725800">billion</span> <span
  m="4726070">here.</span></p><p><span m="4730970">Now</span> <span
  m="4731180">for</span> <span m="4731420">each</span> <span
  m="4731690">of</span> <span m="4732120">that</span> <span
  m="4732520">big</span> <span m="4732800">chunk</span> <span
  m="4734230">of</span> <span m="4735260">output,</span> <span
  m="4736100">I</span> <span m="4736180">want</span> <span m="4736380">to</span>
  <span m="4736420">very</span> <span m="4736750">quickly</span> <span
  m="4737150">find</span> <span m="4737510">the</span> <span
  m="4737590">ones</span> <span m="4737880">that</span> <span
  m="4738020">match</span> <span m="4738330">in</span> <span
  m="4738450">y.</span> <span m="4739050">How</span> <span
  m="4739320">would</span> <span m="4739470">I</span> <span
  m="4739560">find</span> <span m="4739920">the</span> <span
  m="4740000">ones</span> <span m="4740310">matching</span> <span
  m="4740700">in</span> <span m="4740810">y?</span> <span m="4743910">A</span>
  <span m="4744070">range</span> <span m="4744510">tree.</span> <span
  m="4745342">Yeah.</span> <span m="4746990">OK.</span> <span
  m="4747280">So</span> <span m="4747760">here's</span> <span
  m="4748020">what</span> <span m="4748090">we're</span> <span
  m="4748200">going</span> <span m="4748290">to</span> <span
  m="4748360">do.</span> <span m="4749000">For</span> <span
  m="4749250">each</span> <span m="4750450">node,</span> <span
  m="4753130">call</span> <span m="4753290">it</span> <span
  m="4753430">x.</span> <span m="4754690">x</span> <span m="4755530">is</span>
  <span m="4755750">overloaded.</span> <span m="4756240">It's a</span> <span
  m="4756340">coordinate.</span> <span m="4757050">So</span> <span
  m="4757090">many</span> <span m="4757280">things.</span> <span
  m="4757960">Let's</span> <span m="4758080">call</span> <span
  m="4758270">it</span> <span m="4758540">v.</span> <span m="4759810">In</span>
  <span m="4760130">the,</span> <span m="4762240">this</span> <span
  m="4762410">thing</span> <span m="4762590">I'm</span> <span
  m="4762660">going</span> <span m="4762760">to</span> <span
  m="4762830">call</span> <span m="4763070">the</span> <span
  m="4763230">x-tree.</span> <span m="4764580">So</span> <span
  m="4764760">for</span> <span m="4764930">every</span> <span
  m="4765210">node</span> <span m="4765460">in</span> <span
  m="4765530">the</span> <span m="4765650">x-tree</span> <span
  m="4766950">I'm</span> <span m="4767110">going</span> <span
  m="4767320">to</span> <span m="4767440">store</span> <span
  m="4768250">another</span> <span m="4768820">1D</span> <span
  m="4769200">range</span> <span m="4769530">tree.</span> <span
  m="4770810">But</span> <span m="4770970">this</span> <span
  m="4771170">time</span> <span m="4771400">using</span> <span
  m="4771710">the</span> <span m="4771810">y-coordinate</span> <span
  m="4780550">on</span> <span m="4782010">all</span> <span
  m="4782460">points</span> <span m="4785460">in</span> <span
  m="4786130">these</span> <span m="4787560">rooted</span> <span
  m="4790050">subtree.</span></p><p><span m="4792970">At</span> <span
  m="4793130">this</span> <span m="4793300">point</span> <span
  m="4793630">I</span> <span m="4793690">really</span> <span
  m="4793970">want</span> <span m="4794180">to</span> <span
  m="4794220">draw</span> <span m="4794430">a</span> <span
  m="4794500">diagram.</span> <span m="4798290">So,</span> <span
  m="4799840">rough</span> <span m="4800080">picture.</span> <span
  m="4813740">Forgive</span> <span m="4814060">me</span> <span
  m="4814270">for</span> <span m="4814570">not</span> <span
  m="4814750">drawing</span> <span m="4814980">this</span> <span
  m="4815120">perfectly.</span></p><p><span m="4817000">This</span> <span
  m="4817190">is</span> <span m="4817540">roughly</span> <span
  m="4818000">what</span> <span m="4818210">the</span> <span
  m="4818380">answer</span> <span m="4818710">looks</span> <span
  m="4818970">like</span> <span m="4820940">for</span> <span
  m="4821110">the</span> <span m="4821240">1D</span> <span
  m="4821690">range</span> <span m="4821950">search.</span> <span
  m="4822430">This</span> <span m="4822640">is</span> <span
  m="4822750">the</span> <span m="4822910">x-tree.</span> <span
  m="4824630">And</span> <span m="4824780">here</span> <span
  m="4825210">I've</span> <span m="4825390">searched</span> <span
  m="4825770">between</span> <span m="4826780">this</span> <span
  m="4827070">value</span> <span m="4827990">and</span> <span
  m="4828190">this</span> <span m="4828400">value</span> <span
  m="4828900">in</span> <span m="4829000">the</span> <span
  m="4829080">x-coordinate.</span> <span m="4829950">Basically</span> <span
  m="4830370">I</span> <span m="4830420">have</span> <span
  m="4830590">log</span> <span m="4830950">n nodes.</span> <span m="4831240">I'm
  going to</span> <span m="4831480">check</span> <span m="4831750">those</span>
  <span m="4831980">separately.</span> <span m="4833020">Then</span> <span
  m="4833150">I</span> <span m="4833240">also</span> <span
  m="4833570">have</span> <span m="4833780">these</span> <span
  m="4833950">log</span> <span m="4834300">n</span> <span
  m="4834420">subtrees.</span> <span m="4835970">For</span> <span
  m="4836340">each</span> <span m="4836660">of</span> <span
  m="4836770">those</span> <span m="4837010">log n</span> <span
  m="4837450">sub</span> <span m="4837690">trees</span> <span
  m="4840280">I'm</span> <span m="4840430">going</span> <span
  m="4840520">to</span> <span m="4840560">have</span> <span m="4840700">a</span>
  <span m="4840770">pointer--</span> <span m="4842310">this</span> <span
  m="4842510">is</span> <span m="4842570">the</span> <span
  m="4842700">augmentation--</span> <span m="4844440">to</span> <span
  m="4845660">another</span> <span m="4846040">tree</span> <span
  m="4846850">of</span> <span m="4846980">exactly</span> <span
  m="4847520">the</span> <span m="4847630">same</span> <span
  m="4847850">size.</span> <span m="4849080">On</span> <span
  m="4849250">exactly</span> <span m="4849760">the</span> <span
  m="4849890">same</span> <span m="4850170">data</span> <span
  m="4850580">that's</span> <span m="4850760">in</span> <span
  m="4850860">here.</span> <span m="4851860">It's</span> <span
  m="4852000">also</span> <span m="4852300">over</span> <span
  m="4852500">here.</span> <span m="4853410">But</span> <span
  m="4853870">it's</span> <span m="4854040">going</span> <span
  m="4854150">to</span> <span m="4854200">be</span> <span
  m="4854290">sorted</span> <span m="4854630">by</span> <span
  m="4854770">y.</span> <span m="4855900">And</span> <span m="4856100">it's
  a</span> <span m="4856230">1D</span> <span m="4856620">range</span> <span
  m="4856900">tree</span> <span m="4857560">by</span> <span
  m="4857730">y.</span> <span m="4859100">Tons</span> <span
  m="4859450">of</span> <span m="4859540">data</span> <span
  m="4859800">duplication</span> <span m="4860390">here.</span> <span
  m="4860670">I took</span> <span m="4860870">all</span> <span
  m="4861070">these</span> <span m="4861240">points</span> <span
  m="4862190">and</span> <span m="4862460">I</span> <span
  m="4862620">copied</span> <span m="4862880">them</span> <span
  m="4863040">over</span> <span m="4863210">here,</span> <span
  m="4863490">but</span> <span m="4863550">then</span> <span
  m="4863740">built</span> <span m="4863990">a</span> <span
  m="4864060">1D</span> <span m="4864450">range tree</span> <span
  m="4864860">in</span> <span m="4864940">y.</span> <span
  m="4865420">This</span> <span m="4865580">is</span> <span
  m="4865650">all</span> <span m="4865840">preprocessing.</span> <span
  m="4866590">So</span> <span m="4867280">I</span> <span
  m="4867310">don't</span> <span m="4867410">have to</span> <span
  m="4867510">pay</span> <span m="4867700">for</span> <span
  m="4867810">this.</span> <span m="4868630">It's</span> <span
  m="4868780">polynomial</span> <span m="4869240">time.</span> <span
  m="4869470">Don't</span> <span m="4869670">worry</span> <span
  m="4869970">too</span> <span m="4870090">much.</span></p><p><span
  m="4871430">And</span> <span m="4871600">then</span> <span
  m="4871820">I'm</span> <span m="4871880">going</span> <span
  m="4871970">to</span> <span m="4872020">search</span> <span
  m="4872300">in</span> <span m="4872380">here.</span> <span m="4873730">What
  does</span> <span m="4873880">the search</span> <span m="4874260">in
  there</span> <span m="4874440">look?</span> <span m="4875260">I'm going
  to</span> <span m="4875430">get,</span> <span m="4875850">you know,</span>
  <span m="4876270">some</span> <span m="4876530">more</span> <span
  m="4876850">trees</span> <span m="4878280">and</span> <span
  m="4878530">a</span> <span m="4878580">couple</span> <span
  m="4878820">more</span> <span m="4879000">nodes.</span> <span
  m="4880850">OK.</span> <span m="4881040">But</span> <span
  m="4881290">now</span> <span m="4881520">those</span> <span
  m="4882140">items,</span> <span m="4882690">those</span> <span
  m="4883170">points,</span> <span m="4884060">match</span> <span
  m="4884380">in</span> <span m="4884540">x</span> <span m="4884870">and</span>
  <span m="4885230">y</span> <span m="4885710">because</span> <span
  m="4886040">this</span> <span m="4886210">whole</span> <span
  m="4886450">subtree</span> <span m="4886940">matched</span> <span
  m="4887290">in</span> <span m="4887410">x</span> <span m="4888410">and</span>
  <span m="4888580">I</span> <span m="4888640">just</span> <span
  m="4888830">did</span> <span m="4888960">a</span> <span m="4889020">y</span>
  <span m="4889260">search,</span> <span m="4889620">so</span> <span
  m="4889720">I</span> <span m="4889780">found</span> <span
  m="4890050">things</span> <span m="4890240">that</span> <span
  m="4890340">matched</span> <span m="4890670">in y.</span></p><p><span
  m="4891530">So</span> <span m="4891710">I</span> <span m="4891840">get</span>
  <span m="4892150">here</span> <span m="4892590">another</span> <span
  m="4893050">log</span> <span m="4893375">n</span> <span
  m="4893700">trees</span> <span m="4894940">that</span> <span
  m="4895130">are</span> <span m="4895300">actually</span> <span
  m="4895780">in</span> <span m="4895890">my</span> <span
  m="4896020">answer.</span> <span m="4897120">And</span> <span
  m="4897270">for</span> <span m="4897480">each</span> <span
  m="4897780">of</span> <span m="4897870">these</span> <span
  m="4898120">nodes</span> <span m="4898920">I</span> <span
  m="4899020">have</span> <span m="4899240">a</span> <span
  m="4899330">corresponding</span> <span m="4900760">other</span> <span
  m="4901130">data</span> <span m="4901400">structure</span> <span
  m="4902600">where</span> <span m="4902840">I</span> <span
  m="4903400">do</span> <span m="4903630">a</span> <span
  m="4903690">little</span> <span m="4903880">search</span> <span
  m="4905130">and</span> <span m="4905320">I</span> <span m="4905390">get</span>
  <span m="4905640">part</span> <span m="4905850">of</span> <span
  m="4905890">the</span> <span m="4905990">answer.</span></p><p><span
  m="4911720">Every one.</span> <span m="4913500">Sounds</span> <span
  m="4914160">huge.</span> <span m="4914970">This data</span> <span
  m="4915210">structure</span> <span m="4915540">sounds</span> <span
  m="4915760">huge,</span> <span m="4916040">but</span> <span
  m="4916170">it's</span> <span m="4916290">actually</span> <span
  m="4916780">small.</span> <span m="4918260">But</span> <span
  m="4918520">one</span> <span m="4918730">thing</span> <span
  m="4918900">that's</span> <span m="4919060">clear</span> <span
  m="4919420">is</span> <span m="4920130">it</span> <span
  m="4920280">takes</span> <span m="4920530">log</span> <span
  m="4920800">squared</span> <span m="4921150">n</span> <span
  m="4921320">time,</span> <span m="4922560">because</span> <span
  m="4923060">I</span> <span m="4923120">have</span> <span m="4923370">log
  n</span> <span m="4923820">triangles</span> <span m="4924300">over</span>
  <span m="4924500">here.</span> <span m="4925050">For</span> <span
  m="4925220">each</span> <span m="4925440">of</span> <span
  m="4925510">them</span> <span m="4925680">I</span> <span
  m="4925740">spend</span> <span m="4926170">log</span> <span
  m="4926555">n</span> <span m="4926940">to</span> <span m="4927250">find</span>
  <span m="4927550">triangles</span> <span m="4927990">over</span> <span
  m="4928160">here.</span> <span m="4928520">The</span> <span
  m="4928630">total</span> <span m="4929010">output</span> <span
  m="4929840">is</span> <span m="4930050">log</span> <span
  m="4930500">squared</span> <span m="4931020">n</span> <span
  m="4931450">nodes,</span> <span m="4932480">for</span> <span
  m="4932580">each</span> <span m="4932760">of</span> <span
  m="4932810">them</span> <span m="4932960">I</span> <span
  m="4933010">have</span> <span m="4933160">to</span> <span
  m="4933260">check</span> <span m="4933510">manually.</span> <span
  m="4934590">Plus,</span> <span m="4936620">so</span> <span
  m="4937150">over</span> <span m="4937380">here,</span> <span
  m="4937870">there's</span> <span m="4938050">log</span> <span
  m="4938435">n,</span> <span m="4938820">different</span> <span
  m="4939120">searches</span> <span m="4939460">I'm</span> <span
  m="4939590">doing.</span> <span m="4939810">Each</span> <span
  m="4940010">one</span> <span m="4940160">has</span> <span
  m="4940330">size</span> <span m="4940600">log</span> <span
  m="4940880">n.</span> <span m="4941160">So</span> <span m="4941290">I</span>
  <span m="4941340">get</span> <span m="4941520">log</span> <span
  m="4941850">squared</span> <span m="4942980">little</span> <span
  m="4943210">triangles</span> <span m="4943800">that</span> <span
  m="4943870">contain</span> <span m="4944880">the</span> <span
  m="4944970">results</span> <span m="4945320">that</span> <span
  m="4945430">match</span> <span m="4945700">in</span> <span
  m="4945820">x</span> <span m="4946110">and</span> <span
  m="4946410">y.</span></p><p><span m="4947230">How</span> <span
  m="4947470">much</span> <span m="4947770">space</span> <span
  m="4948360">in</span> <span m="4948480">this</span> <span
  m="4948670">data</span> <span m="4948870">structure?</span> <span
  m="4950870">That's</span> <span m="4951130">the</span> <span
  m="4951200">remaining</span> <span m="4951590">challenge.</span> <span
  m="4956140">Actually,</span> <span m="4958440">it's</span> <span
  m="4958880">not</span> <span m="4959050">that</span> <span
  m="4959260">hard,</span> <span m="4959620">because</span> <span
  m="4962730">if</span> <span m="4962910">you</span> <span
  m="4963090">look</span> <span m="4963350">at</span> <span m="4963790">a</span>
  <span m="4963910">key.</span> <span m="4965600">So</span> <span
  m="4965800">look</span> <span m="4966010">at</span> <span
  m="4966120">some</span> <span m="4966410">key</span> <span
  m="4967110">in</span> <span m="4967350">this</span> <span
  m="4967580">x-tree.</span> <span m="4968660">Let's</span> <span
  m="4969240">look</span> <span m="4969340">at a</span> <span
  m="4969520">leaf</span> <span m="4969730">because</span> <span
  m="4969950">that's</span> <span m="4970170">maybe</span> <span
  m="4970350">the</span> <span m="4970440">most</span> <span
  m="4970660">interesting.</span></p><p><span m="4977440">Here's</span> <span
  m="4977620">the</span> <span m="4977760">x-tree.</span> <span
  m="4978500">x-tree</span> <span m="4978900">has</span> <span
  m="4979100">linear</span> <span m="4979420">size.</span> <span
  m="4979810">Just</span> <span m="4980000">one</span> <span
  m="4980220">tree.</span> <span m="4981060">If</span> <span
  m="4981230">I</span> <span m="4981290">look</span> <span m="4981530">at</span>
  <span m="4981660">some</span> <span m="4981870">key</span> <span
  m="4982080">value,</span> <span m="4983170">well,</span> <span
  m="4985250">it</span> <span m="4985420">lives</span> <span
  m="4985690">in</span> <span m="4985790">this</span> <span
  m="4985990">subtree.</span> <span m="4986570">And</span> <span
  m="4986700">so</span> <span m="4986810">there's</span> <span
  m="4986980">going</span> <span m="4987100">to</span> <span
  m="4987160">be</span> <span m="4987250">a</span> <span
  m="4987310">corresponding</span> <span m="4988030">blue</span> <span
  m="4988230">structure</span> <span m="4989060">of</span> <span
  m="4989160">that</span> <span m="4989390">size</span> <span
  m="4989830">that</span> <span m="4989930">contains</span> <span
  m="4990290">that</span> <span m="4990470">key.</span> <span
  m="4991150">And</span> <span m="4991230">then</span> <span
  m="4991370">there's</span> <span m="4991530">the</span> <span
  m="4991620">parent.</span> <span m="4992620">So</span> <span
  m="4992890">there's</span> <span m="4993050">a</span> <span
  m="4993110">structure</span> <span m="4993470">here.</span> <span
  m="4994340">That</span> <span m="4994560">has</span> <span
  m="4994780">a</span> <span m="4994830">corresponding</span> <span
  m="4995750">blue</span> <span m="4995920">triangle.</span> <span
  m="4996790">And</span> <span m="4996980">then</span> <span
  m="4997130">its</span> <span m="4997330">parent,</span> <span
  m="4998690">that's</span> <span m="4999010">another</span> <span
  m="4999330">triangle.</span> <span m="5000050">That</span> <span
  m="5000170">contains--</span> <span m="5001370">I'm</span> <span
  m="5001460">looking</span> <span m="5001750">at</span> <span
  m="5001850">a</span> <span m="5001930">key</span> <span m="5003560">k</span>
  <span m="5003900">here.</span> <span m="5004990">All</span> <span
  m="5005290">of</span> <span m="5005390">these</span> <span
  m="5005590">triangles</span> <span m="5006730">contain</span> <span
  m="5007380">the</span> <span m="5007490">key</span> <span
  m="5007710">k.</span> <span m="5008580">And</span> <span m="5008740">so</span>
  <span m="5009330">key</span> <span m="5009530">k</span> <span
  m="5009940">will</span> <span m="5010210">be</span> <span
  m="5010480">duplicated</span> <span m="5011680">all</span> <span
  m="5011960">this</span> <span m="5012120">many</span> <span
  m="5012340">times,</span> <span m="5012800">but</span> <span
  m="5013280">how</span> <span m="5014650">many</span> <span
  m="5015010">sub</span> <span m="5015280">trees</span> <span
  m="5015650">is</span> <span m="5015830">k</span> <span m="5016196">in?</span>
  <span m="5017260">Log</span> <span m="5017610">n.</span> <span
  m="5019430">Each</span> <span m="5019720">key,</span> <span
  m="5020800">fundamental</span> <span m="5021360">fact</span> <span
  m="5021750">about</span> <span m="5024140">balanced</span> <span
  m="5024580">binary</span> <span m="5024880">search</span> <span
  m="5025160">trees,</span> <span m="5027330">each</span> <span
  m="5027580">key</span> <span m="5028280">lives</span> <span
  m="5029220">in</span> <span m="5030270">log</span> <span m="5030740">n</span>
  <span m="5031010">subtrees.</span> <span m="5031770">Namely</span> <span
  m="5032050">all of its</span> <span m="5032400">ancestors.</span></p><p><span
  m="5040000">Awesome.</span> <span m="5041180">Because</span> <span
  m="5041540">that</span> <span m="5041670">means</span> <span
  m="5041870">the</span> <span m="5041970">total</span> <span
  m="5042420">space</span> <span m="5042910">is</span> <span
  m="5043180">n</span> <span m="5043380">log</span> <span m="5043710">n.</span>
  <span m="5045430">There's</span> <span m="5045580">n</span> <span
  m="5045820">keys.</span> <span m="5046860">Each</span> <span
  m="5047060">of</span> <span m="5047110">them</span> <span
  m="5047260">is</span> <span m="5047370">duplicated</span> <span
  m="5048040">at</span> <span m="5048140">most</span> <span
  m="5048410">log</span> <span m="5048700">n</span> <span
  m="5048860">times.</span> <span m="5052060">In</span> <span
  m="5052170">general,</span> <span m="5053210">log</span> <span
  m="5053680">to</span> <span m="5053770">the d</span> <span
  m="5053890">minus</span> <span m="5054380">1.</span> <span
  m="5055610">So</span> <span m="5055740">If</span> <span m="5055800">you</span>
  <span m="5055890">do</span> <span m="5056010">it</span> <span
  m="5056060">in</span> <span m="5056170">3D,</span> <span
  m="5057250">each</span> <span m="5057510">of</span> <span
  m="5057740">the</span> <span m="5057950">blue</span> <span
  m="5058420">trees,</span> <span m="5059420">every</span> <span
  m="5059770">node</span> <span m="5060040">in</span> <span
  m="5060160">it</span> <span m="5060300">has</span> <span m="5060490">a</span>
  <span m="5060570">corresponding</span> <span m="5061130">pointer</span> <span
  m="5061430">to</span> <span m="5061650">a</span> <span m="5062060">red</span>
  <span m="5063060">tree</span> <span m="5063920">that's</span> <span
  m="5064160">sorted</span> <span m="5064590">by</span> <span
  m="5064790">z.</span> <span m="5065990">And you</span> <span
  m="5066180">just</span> <span m="5066350">keep</span> <span
  m="5066590">doing</span> <span m="5066900">this,</span> <span
  m="5067250">sort</span> <span m="5067510">of,</span> <span
  m="5067660">nested</span> <span m="5068080">searching,</span> <span
  m="5069050">like</span> <span m="5069210">super</span> <span
  m="5069830">augmentation.</span> <span m="5070610">But</span> <span
  m="5070750">you're</span> <span m="5070870">only</span> <span
  m="5071100">losing</span> <span m="5071400">a</span> <span
  m="5071470">log</span> <span m="5071770">factor</span> <span
  m="5072070">each</span> <span m="5072370">dimension</span> <span
  m="5072670">you</span> <span m="5072970">add.</span></p>
uid: 0e16f4f6df9982c161d397610790be88
type: courses
layout: video
---
