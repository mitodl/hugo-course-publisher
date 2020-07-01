---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>This lecture focuses on the
  construction of the learning function \(F\), which is optimized by stochastic
  gradient descent and applied to the training data to minimize the loss.
  Professor Strang also begins his review of distance matrices.</p> <h2
  class="subhead">Summary</h2><p>Each training sample is given by a vector
  \(v\).<br /> Next layer of the net is \(F_1(v)\) = ReLU\((A_1 v + b_1)\).<br
  /> \( w_1 = A_1 v + b_1\) with optimized weights in \(A_1\) and \(b_1\)<br />
  ReLU(\(w\)) = nonlinear activation function \(= \max (0,w) \)<br /> Minimize
  loss function by optimizing weights \(x\)'s = \(A\)'s and \(b\)'s<br />
  Distance matrix given between points: Find the points!</p> <p>Related sections
  in textbook: VII.1 and IV.10</p> <p><strong>Instructor:</strong> Prof. Gilbert
  Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: L3-WFKCW-tY
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    title: Video-YouTube-Stream
    type: Video
    uid: 08540250655e14b0004301ae5a9ad29f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/L3-WFKCW-tY/default.jpg'
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4dd3fb0756bd66fa324c51ae3e211663
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: L3-WFKCW-tY
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: eedf6fc62fd1c4d2cec9a455615949cd
  - id: L3-WFKCW-tY.srt
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-33-neural-nets-and-the-learning-function/L3-WFKCW-tY.srt
    title: 3play caption file
    type: null
    uid: 92c8b3a65ab3c148b6265948323ce344
  - id: L3-WFKCW-tY.pdf
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-33-neural-nets-and-the-learning-function/L3-WFKCW-tY.pdf
    title: 3play pdf file
    type: null
    uid: 743b3a44f35c1c0795d1dad9e29db638
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7d17c5b7fb49abe221b9bcd0e41f12f8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5dcfd34d34d678633bacb564e77dc97e
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture33_300k.mp4'
    parent_uid: 33f50eb0834bb3703bab34db3bc9745f
    title: Video-Internet Archive-MP4
    type: Video
    uid: 6da5d27f5e1843539e947ed2a35bb4cf
inline_embed_id: 55826440lecture33neuralnetsandthelearningfunction71312826
order_index: 305
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-33-neural-nets-and-the-learning-function
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-33-neural-nets-and-the-learning-function
title: 'Lecture 33: Neural Nets and the Learning Function'
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
  m="11900">donation</span> <span m="12680">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17180">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="22340">GILBERT STRANG:</span> <span m="22510">OK,</span> <span
  m="23020">so</span> <span m="24610">actually,</span> <span m="24940">I</span>
  <span m="26860">know</span> <span m="27070">where</span> <span
  m="27370">people</span> <span m="27730">are</span> <span
  m="27790">working</span> <span m="28120">on</span> <span
  m="28300">projects,</span> <span m="29560">and</span> <span
  m="30250">you're</span> <span m="30400">not</span> <span
  m="30610">responsible</span> <span m="31360">for</span> <span
  m="31570">any</span> <span m="32590">new</span> <span
  m="32830">material</span> <span m="34030">in</span> <span m="34240">the</span>
  <span m="34540">lectures.</span> <span m="35810">Thank</span> <span
  m="35980">you</span> <span m="36070">for</span> <span m="36220">coming.</span>
  <span m="37240">But</span> <span m="38590">I</span> <span m="38980">do</span>
  <span m="39190">have</span> <span m="39370">something,</span> <span
  m="40750">an</span> <span m="40870">important</span> <span
  m="41350">topic,</span> <span m="42290">which</span> <span m="42460">is</span>
  <span m="42730">a</span> <span m="43600">revised</span> <span
  m="44320">version</span> <span m="44950">about</span> <span
  m="45460">the</span> <span m="45880">construction</span> <span
  m="46570">of</span> <span m="46720">neural</span> <span m="47050">nets,</span>
  <span m="47530">the</span> <span m="47620">basic</span> <span
  m="48310">structure</span> <span m="48910">that</span> <span
  m="49090">we're</span> <span m="50230">working</span> <span
  m="50710">with.</span> <span m="51130">So</span> <span m="51370">that's</span>
  <span m="53230">on</span> <span m="53590">the</span> <span
  m="54490">open</span> <span m="55030">web</span> <span m="55850">at</span>
  <span m="56260">section</span> <span m="56860">7.1,</span> <span
  m="60310">so</span> <span m="60610">Construction</span> <span
  m="61450">of</span> <span m="68290">Neural</span> <span m="68680">Nets.</span>
  <span m="73890">Really,</span> <span m="74460">it's</span> <span
  m="74730">a</span> <span m="74790">construction</span> <span
  m="75600">of</span> <span m="75810">the</span> <span m="76290">learning</span>
  <span m="76950">function,</span> <span m="82893">F.</span></p><p><span
  m="83870">So</span> <span m="85190">that's</span> <span m="85480">the</span>
  <span m="85580">function</span> <span m="86060">that</span> <span
  m="86810">you</span> <span m="87020">optimize</span> <span m="87870">by</span>
  <span m="88430">gradient</span> <span m="88940">descent</span> <span
  m="89600">or</span> <span m="89750">stochastic</span> <span
  m="90440">gradient</span> <span m="90920">descent,</span> <span
  m="92150">and</span> <span m="92870">you</span> <span m="93470">apply</span>
  <span m="94010">to</span> <span m="94940">the</span> <span
  m="95330">training</span> <span m="95900">data</span> <span
  m="97130">to</span> <span m="98750">minimize</span> <span m="99380">the</span>
  <span m="99500">loss.</span> <span m="100560">So</span> <span
  m="102120">I'm</span> <span m="102770">just</span> <span
  m="103010">thinking</span> <span m="103370">about</span> <span
  m="103640">it</span> <span m="104150">in</span> <span m="104270">a</span>
  <span m="104330">more</span> <span m="104570">organized</span> <span
  m="105170">way,</span> <span m="105470">because</span> <span
  m="105890">I</span> <span m="106040">wrote</span> <span m="106340">that</span>
  <span m="106640">section</span> <span m="107510">before</span> <span
  m="107930">I</span> <span m="108500">knew</span> <span
  m="108710">anything</span> <span m="109130">more</span> <span
  m="109400">than</span> <span m="109610">how</span> <span m="109820">to</span>
  <span m="109940">spell</span> <span m="110390">neural</span> <span
  m="110790">nets,</span> <span m="112400">but</span> <span
  m="112610">now</span> <span m="114090">I've</span> <span
  m="114830">thought</span> <span m="115130">about</span> <span
  m="115430">it</span> <span m="115550">more.</span> <span m="116170">So</span>
  <span m="117840">the</span> <span m="118880">key</span> <span
  m="119150">point</span> <span m="119540">maybe,</span> <span
  m="120800">compared</span> <span m="121280">to</span> <span
  m="121430">what</span> <span m="123900">I</span> <span m="124260">had</span>
  <span m="124500">in</span> <span m="124590">the</span> <span
  m="124680">past,</span> <span m="125820">is</span> <span
  m="126060">that</span> <span m="126240">I</span> <span m="126360">now</span>
  <span m="126660">think</span> <span m="126920">of</span> <span
  m="127050">this</span> <span m="127320">as</span> <span m="127500">a</span>
  <span m="127590">function</span> <span m="128130">of</span> <span
  m="128250">two</span> <span m="129930">sets</span> <span m="130350">of</span>
  <span m="130410">variables,</span> <span m="131760">x</span> <span
  m="132360">and</span> <span m="132960">v.</span> <span m="135510">So</span>
  <span m="135750">x</span> <span m="136290">are</span> <span
  m="136530">the</span> <span m="136650">weights,</span> <span
  m="141240">and</span> <span m="141480">v</span> <span m="142140">are</span>
  <span m="142560">the</span> <span m="144060">feature</span> <span
  m="144540">vectors,</span> <span m="145170">the</span> <span
  m="145320">sample</span> <span m="149010">feature</span> <span
  m="149490">vectors.</span></p><p><span m="156490">So</span> <span
  m="156720">those</span> <span m="157020">come</span> <span
  m="157240">from</span> <span m="157470">the</span> <span
  m="157620">training</span> <span m="158130">data,</span> <span
  m="160530">either</span> <span m="160980">one</span> <span
  m="161340">at</span> <span m="161490">a</span> <span m="161580">time,</span>
  <span m="162030">if</span> <span m="162150">we're</span> <span
  m="162300">doing</span> <span m="162780">stochastic</span> <span
  m="163710">gradient</span> <span m="164220">descent</span> <span
  m="164640">with</span> <span m="164850">mini-batch</span> <span
  m="165840">size</span> <span m="166290">1.</span> <span m="167160">Or</span>
  <span m="167970">B</span> <span m="168300">at</span> <span m="168450">a</span>
  <span m="168540">time,</span> <span m="169060">if</span> <span
  m="169200">we're</span> <span m="169350">doing</span> <span
  m="169620">mini-batch</span> <span m="170310">of</span> <span
  m="170430">size</span> <span m="170850">B,</span> <span m="171570">or</span>
  <span m="171840">the</span> <span m="171960">whole</span> <span
  m="172350">thing,</span> <span m="173190">a</span> <span
  m="173250">whole</span> <span m="173610">epoch</span> <span
  m="174190">at</span> <span m="174330">once,</span> <span m="175170">if</span>
  <span m="175380">we're</span> <span m="175590">doing</span> <span
  m="176010">full-scale</span> <span m="176790">gradient</span> <span
  m="177300">descent.</span> <span m="179490">So</span> <span
  m="179730">those</span> <span m="180090">are</span> <span
  m="180150">the</span> <span m="180330">feature</span> <span
  m="180780">vectors,</span> <span m="181890">and</span> <span
  m="182460">these</span> <span m="183540">are</span> <span
  m="184020">the</span> <span m="185010">numbers</span> <span
  m="186030">in</span> <span m="188520">the</span> <span
  m="189330">linear</span> <span m="189810">steps,</span> <span
  m="191760">the</span> <span m="191910">weights.</span> <span
  m="192670">So</span> <span m="192870">they're</span> <span
  m="193140">the</span> <span m="193710">matrices</span> <span
  m="197960">AK</span> <span m="199020">that</span> <span m="199230">you</span>
  <span m="199440">multiply</span> <span m="200190">by,</span> <span
  m="201560">multiply</span> <span m="202830">v</span> <span
  m="203250">by.</span> <span m="204360">And</span> <span m="204840">also</span>
  <span m="205350">the</span> <span m="205500">bias</span> <span
  m="206040">vectors</span> <span m="211460">bK</span> <span
  m="212890">that</span> <span m="213070">you</span> <span m="213280">add</span>
  <span m="213550">on</span> <span m="214270">to</span> <span
  m="214810">shift</span> <span m="215230">the</span> <span
  m="215470">origin.</span> <span m="216970">OK.</span></p><p><span
  m="219640">It's</span> <span m="220390">these</span> <span
  m="220780">that</span> <span m="220960">you</span> <span
  m="221140">optimize,</span> <span m="222610">those</span> <span
  m="223060">are</span> <span m="223270">to</span> <span
  m="223510">optimize.</span> <span m="229010">And</span> <span
  m="229270">what's</span> <span m="229570">the</span> <span
  m="229720">structure</span> <span m="230380">of</span> <span
  m="235390">the</span> <span m="235510">whole</span> <span m="235990">of</span>
  <span m="236140">the</span> <span m="236560">learning</span> <span
  m="237010">function,</span> <span m="237620">and</span> <span
  m="238090">how</span> <span m="238330">do</span> <span m="238420">you</span>
  <span m="238570">use</span> <span m="238930">it?</span> <span
  m="239610">What</span> <span m="240370">does</span> <span m="240540">a</span>
  <span m="240610">neural</span> <span m="240910">net</span> <span
  m="241150">look</span> <span m="241390">like?</span> <span
  m="242200">So</span> <span m="243820">you</span> <span m="244690">take</span>
  <span m="245290">F</span> <span m="246920">of</span> <span m="248440">a</span>
  <span m="248530">first</span> <span m="248920">set</span> <span
  m="249190">of</span> <span m="249320">weights,</span> <span
  m="249700">so</span> <span m="250000">F</span> <span m="250450">of</span>
  <span m="251950">the</span> <span m="252130">first</span> <span
  m="252430">set</span> <span m="252700">of</span> <span
  m="252820">weights</span> <span m="253630">would</span> <span
  m="253870">be</span> <span m="254260">A1</span> <span m="255630">and</span>
  <span m="255840">B1,</span> <span m="257500">so</span> <span
  m="257740">that's</span> <span m="258640">x</span> <span
  m="258940">part.</span> <span m="260140">And</span> <span
  m="262240">the</span> <span m="264730">actual</span> <span
  m="265180">sample</span> <span m="265630">vector,</span> <span
  m="266110">the</span> <span m="266260">sample</span> <span
  m="266680">vectors</span> <span m="267190">are</span> <span
  m="267340">v0</span> <span m="269020">in</span> <span m="269230">the</span>
  <span m="269500">iteration.</span></p><p><span m="272320">And</span> <span
  m="272470">then</span> <span m="272680">you</span> <span m="272830">do</span>
  <span m="274780">the</span> <span m="274960">nonlinear</span> <span
  m="276730">step</span> <span m="277090">to</span> <span m="277270">each</span>
  <span m="277510">component,</span> <span m="278140">and</span> <span
  m="278260">that</span> <span m="278470">produces</span> <span
  m="279670">v1.</span> <span m="281050">So</span> <span m="281230">there</span>
  <span m="281530">is</span> <span m="281710">a</span> <span
  m="281800">typical--</span> <span m="284620">I</span> <span
  m="284770">could</span> <span m="284980">write</span> <span
  m="285250">out</span> <span m="285430">what</span> <span
  m="285670">this</span> <span m="286000">is</span> <span
  m="286290">here,</span> <span m="287230">A1</span> <span m="288970">v0</span>
  <span m="290350">plus</span> <span m="291200">b1.</span> <span
  m="294940">The</span> <span m="295150">two</span> <span
  m="295390">steps</span> <span m="295900">are</span> <span
  m="296080">the</span> <span m="296230">linear</span> <span
  m="296650">step.</span> <span m="297950">The</span> <span
  m="298120">endpoint</span> <span m="298480">is</span> <span
  m="298660">v0.</span> <span m="300600">You</span> <span m="300720">take</span>
  <span m="301020">the</span> <span m="301140">linear</span> <span
  m="301560">step</span> <span m="301950">using</span> <span
  m="303210">the</span> <span m="303300">first</span> <span
  m="303720">weights,</span> <span m="304490">A1</span> <span
  m="304980">and</span> <span m="305130">b1.</span></p><p><span
  m="306240">Then,</span> <span m="306450">you</span> <span
  m="306600">takes</span> <span m="307020">a</span> <span
  m="307140">nonlinear</span> <span m="307920">step,</span> <span
  m="309180">and</span> <span m="309330">that</span> <span
  m="309570">gives</span> <span m="309870">you</span> <span
  m="310050">v1.</span> <span m="311190">So</span> <span m="311400">that</span>
  <span m="311760">really</span> <span m="312120">better</span> <span
  m="312540">than</span> <span m="313470">my</span> <span m="313860">line</span>
  <span m="314340">above,</span> <span m="314790">so</span> <span
  m="315000">I'll</span> <span m="315380">erase</span> <span
  m="315720">that</span> <span m="316350">line</span> <span
  m="316680">above.</span> <span m="317890">Yeah.</span> <span
  m="325340">So</span> <span m="325520">that</span> <span
  m="325730">produces</span> <span m="326370">v1</span> <span
  m="327530">from</span> <span m="328280">v0</span> <span m="329120">and</span>
  <span m="329690">the</span> <span m="329840">first</span> <span
  m="330860">weights.</span> <span m="332070">And</span> <span
  m="332120">then</span> <span m="333380">the</span> <span
  m="333560">next</span> <span m="333980">level</span> <span
  m="335840">inputs</span> <span m="336320">v1,</span> <span
  m="336980">so</span> <span m="337280">I'll</span> <span m="337490">just</span>
  <span m="337730">call</span> <span m="337970">this</span> <span
  m="338180">vK</span> <span m="341070">or</span> <span m="341330">vK</span>
  <span m="342290">minus</span> <span m="342830">1,</span> <span
  m="343550">and</span> <span m="343670">I'll</span> <span
  m="343820">call</span> <span m="344030">this</span> <span
  m="344310">one</span> <span m="344550">vK.</span> <span m="345970">OK,</span>
  <span m="346700">so</span> <span m="347280">K</span> <span
  m="347870">equal</span> <span m="348155">to</span> <span m="348770">1</span>
  <span m="349280">up</span> <span m="349460">to</span> <span
  m="350180">however</span> <span m="350570">many</span> <span
  m="351050">layers,</span> <span m="351320">you</span> <span
  m="351590">are</span> <span m="352025">l</span> <span
  m="352460">layers.</span></p><p><span m="356790">So</span> <span
  m="357000">the</span> <span m="357180">input</span> <span
  m="357630">was</span> <span m="357870">v0.</span> <span m="359190">So</span>
  <span m="359370">this</span> <span m="359610">v</span> <span
  m="360000">is</span> <span m="360180">really</span> <span
  m="360600">v0,</span> <span m="361650">you</span> <span
  m="361830">could</span> <span m="362010">say.</span> <span
  m="363420">And</span> <span m="364590">this</span> <span m="364920">is</span>
  <span m="365160">the</span> <span m="365550">neural</span> <span
  m="365910">net,</span> <span m="367350">and</span> <span
  m="367830">this</span> <span m="368160">is</span> <span m="368520">the</span>
  <span m="370440">input</span> <span m="371250">and</span> <span
  m="371580">output</span> <span m="372120">from</span> <span
  m="372420">each</span> <span m="372690">layer.</span> <span
  m="373980">And</span> <span m="374250">then</span> <span m="375300">vl</span>
  <span m="376020">is</span> <span m="376560">the</span> <span
  m="377280">final</span> <span m="377790">output</span> <span
  m="378300">from</span> <span m="378510">the</span> <span
  m="378600">final</span> <span m="378990">layer.</span> <span
  m="380050">So</span> <span m="380250">let's</span> <span
  m="380550">just</span> <span m="381390">do</span> <span m="381750">a</span>
  <span m="381810">picture</span> <span m="382290">here.</span></p><p><span
  m="383370">Here</span> <span m="383670">is</span> <span m="383790">v0,</span>
  <span m="386660">a</span> <span m="388050">sample</span> <span
  m="388620">vector,</span> <span m="389280">or</span> <span
  m="389520">if</span> <span m="389670">we're</span> <span
  m="389820">doing</span> <span m="390120">image</span> <span
  m="390420">processing,</span> <span m="391140">it's</span> <span
  m="391350">all</span> <span m="391560">the</span> <span
  m="391680">pixels</span> <span m="392810">in</span> <span
  m="394050">the</span> <span m="396780">data,</span> <span m="397320">in</span>
  <span m="397470">the</span> <span m="397590">training.</span> <span
  m="399570">From</span> <span m="399960">one</span> <span
  m="400380">sample,</span> <span m="400860">this</span> <span
  m="401070">is</span> <span m="401610">one</span> <span
  m="402540">training</span> <span m="403160">sample.</span> <span
  m="410340">And</span> <span m="410460">then</span> <span m="410580">you</span>
  <span m="410730">multiply</span> <span m="411390">by</span> <span
  m="411720">A1,</span> <span m="413280">and</span> <span m="413430">you</span>
  <span m="413610">add</span> <span m="413910">b1.</span> <span
  m="415470">And</span> <span m="415590">you</span> <span m="415740">take</span>
  <span m="416600">ReLU</span> <span m="417240">of</span> <span
  m="417360">that</span> <span m="417630">vector,</span> <span
  m="420090">and</span> <span m="420300">that</span> <span
  m="420750">gives</span> <span m="421320">you</span> <span
  m="423060">v1.</span> <span m="424190">That</span> <span
  m="424290">gives</span> <span m="424530">you</span> <span
  m="425100">v1,</span> <span m="426390">and</span> <span m="426540">then</span>
  <span m="426780">you</span> <span m="426990">iterate</span> <span
  m="429480">to</span> <span m="429960">finally</span> <span
  m="430590">vl,</span> <span m="432450">the</span> <span m="432600">last</span>
  <span m="433020">layer.</span></p><p><span m="434010">You</span> <span
  m="434370">don't</span> <span m="434640">do</span> <span
  m="434880">ReLU</span> <span m="435360">at</span> <span m="435450">the</span>
  <span m="435570">last</span> <span m="436290">layer,</span> <span
  m="436680">so</span> <span m="436890">it's</span> <span m="437070">just</span>
  <span m="437370">Al</span> <span m="438990">vl</span> <span
  m="440370">minus</span> <span m="440880">1</span> <span m="441460">plus</span>
  <span m="442110">bl.</span> <span m="443430">And</span> <span
  m="443700">you</span> <span m="443820">may</span> <span m="444030">not</span>
  <span m="444510">do</span> <span m="444780">a</span> <span
  m="444870">bias</span> <span m="445920">vector</span> <span
  m="446340">also</span> <span m="446760">at</span> <span m="446880">that</span>
  <span m="447120">layer,</span> <span m="447480">but</span> <span
  m="447780">you</span> <span m="447960">might,</span> <span
  m="449850">and</span> <span m="450660">this</span> <span m="451050">is</span>
  <span m="451210">the</span> <span m="451440">finally</span> <span
  m="451860">the</span> <span m="452010">output.</span> <span
  m="455910">So</span> <span m="456150">that</span> <span
  m="456300">picture</span> <span m="456690">is</span> <span
  m="456810">clearer</span> <span m="457290">for</span> <span
  m="457470">me</span> <span m="457800">than</span> <span m="458010">it</span>
  <span m="458100">was</span> <span m="458910">previously</span> <span
  m="460320">to</span> <span m="460470">distinguish</span> <span
  m="461220">between</span> <span m="461940">the</span> <span
  m="462090">weights.</span></p><p><span m="464370">So</span> <span
  m="465030">in</span> <span m="465270">the</span> <span
  m="467100">gradient</span> <span m="467550">descent</span> <span
  m="468000">algorithm,</span> <span m="469410">it's</span> <span
  m="469680">these</span> <span m="470070">x's</span> <span
  m="470560">that</span> <span m="470790">you're</span> <span
  m="470970">choosing.</span> <span m="471990">The</span> <span
  m="472400">v's</span> <span m="472950">are</span> <span
  m="474540">given</span> <span m="474870">by</span> <span m="475050">the</span>
  <span m="475190">training</span> <span m="475650">data.</span> <span
  m="475980">That's</span> <span m="476250">not</span> <span
  m="476520">part</span> <span m="476820">of</span> <span m="476910">the</span>
  <span m="477060">optimization</span> <span m="478350">part.</span> <span
  m="479850">It's</span> <span m="480090">x</span> <span m="480420">in</span>
  <span m="480600">chapter</span> <span m="481080">6,</span> <span
  m="482010">where</span> <span m="482280">you're</span> <span
  m="482850">finding</span> <span m="483270">the</span> <span
  m="483420">optimal</span> <span m="484050">weights.</span> <span
  m="485170">So</span> <span m="485490">this</span> <span m="485790">x</span>
  <span m="486210">really</span> <span m="486570">stands</span> <span
  m="487050">for</span> <span m="491970">all</span> <span m="492360">the</span>
  <span m="492480">weights</span> <span m="492980">that</span> <span
  m="493160">you</span> <span m="493320">compute</span> <span
  m="497428">up</span> <span m="497880">to</span> <span m="499140">Al,</span>
  <span m="500370">bl,</span> <span m="504990">so</span> <span
  m="505970">that's</span> <span m="506370">a</span> <span
  m="506430">collection</span> <span m="507000">of</span> <span
  m="507120">all</span> <span m="507270">the</span> <span
  m="507390">weights.</span></p><p><span m="507840">And</span> <span
  m="508020">the</span> <span m="508110">important</span> <span
  m="508620">part</span> <span m="509130">for</span> <span
  m="510060">applications</span> <span m="511140">for</span> <span
  m="511320">practice</span> <span m="511920">is</span> <span
  m="512100">to</span> <span m="512220">realize</span> <span
  m="512909">that</span> <span m="513150">there</span> <span
  m="513360">are</span> <span m="513480">often</span> <span
  m="513900">more</span> <span m="514200">weights</span> <span
  m="514980">and</span> <span m="515909">more</span> <span
  m="516150">components</span> <span m="516840">in</span> <span
  m="516960">the</span> <span m="517049">weights</span> <span
  m="517559">than</span> <span m="517830">there</span> <span
  m="518010">are</span> <span m="518549">components</span> <span
  m="519299">in</span> <span m="519929">the</span> <span
  m="520679">feature</span> <span m="521100">vectors,</span> <span
  m="521580">in</span> <span m="521700">the</span> <span
  m="521820">samples,</span> <span m="522450">in</span> <span
  m="522600">the</span> <span m="522690">v's.</span> <span m="523679">So</span>
  <span m="524010">often,</span> <span m="524430">the</span> <span
  m="525000">size</span> <span m="525540">of</span> <span m="525690">x</span>
  <span m="526050">is</span> <span m="526290">greater</span> <span
  m="526680">than</span> <span m="526860">the</span> <span
  m="527010">size</span> <span m="527460">of</span> <span m="527520">v's</span>
  <span m="528870">which</span> <span m="529140">is an</span> <span
  m="529440">interesting</span> <span m="530110">and</span> <span
  m="530540">sort</span> <span m="530820">of</span> <span
  m="531300">unexpected</span> <span m="533810">situation.</span> <span
  m="534720">So</span> <span m="535380">often,</span> <span
  m="535950">I'll</span> <span m="536130">just</span> <span
  m="536400">write</span> <span m="536710">that.</span></p><p><span
  m="538160">Often,</span> <span m="539430">the</span> <span
  m="540120">x's</span> <span m="541560">are</span> <span m="542880">the</span>
  <span m="543010">weights.</span> <span m="546800">x's</span> <span
  m="547310">are</span> <span m="547730">underdetermined,</span> <span
  m="554960">because</span> <span m="560920">the</span> <span
  m="561060">number</span> <span m="561590">of</span> <span
  m="562070">x's</span> <span m="563270">exceeds,</span> <span
  m="563930">and</span> <span m="564080">often</span> <span
  m="564950">far</span> <span m="565340">exceeds,</span> <span
  m="565970">the</span> <span m="566090">number</span> <span
  m="566600">of</span> <span m="567010">v's,</span> <span m="567300">the</span>
  <span m="567590">number</span> <span m="567980">of</span> <span
  m="569180">the</span> <span m="569570">cardinality,</span> <span
  m="570560">the</span> <span m="570740">number</span> <span
  m="571190">of</span> <span m="571850">weights.</span> <span
  m="572490">This</span> <span m="572970">is</span> <span m="573415">in</span>
  <span m="574370">the</span> <span m="574520">A's</span> <span
  m="574940">and</span> <span m="575060">b's,</span> <span m="578420">and</span>
  <span m="578830">these</span> <span m="579380">are</span> <span
  m="579560">in</span> <span m="579770">the</span> <span
  m="581630">samples</span> <span m="582290">in</span> <span
  m="582470">the</span> <span m="582740">training</span> <span
  m="583180">set,</span> <span m="591490">the</span> <span
  m="591610">number</span> <span m="592030">of</span> <span
  m="594070">features</span> <span m="594820">of</span> <span
  m="595090">all</span> <span m="595570">the</span> <span
  m="595690">samples</span> <span m="596290">in</span> <span
  m="596410">the</span> <span m="596560">training</span> <span
  m="597010">set.</span> <span m="598060">So</span> <span m="599680">I'll</span>
  <span m="599980">get</span> <span m="600280">that</span> <span
  m="601240">new</span> <span m="601600">section</span> <span
  m="602200">7.1</span> <span m="603250">up</span> <span
  m="605260">hopefully</span> <span m="605710">this</span> <span
  m="605980">week</span> <span m="606400">on</span> <span m="608420">the</span>
  <span m="608830">open--</span> <span m="609370">that's</span> <span
  m="609640">the</span> <span m="609790">open</span> <span
  m="610690">set--</span> <span m="611050">and</span> <span
  m="611230">I'll</span> <span m="611740">email</span> <span
  m="612250">to</span> <span m="612430">you</span> <span m="612670">on</span>
  <span m="612820">Stellar.</span></p><p><span m="615250">Is</span> <span
  m="615430">there</span> <span m="615550">more</span> <span m="615850">I</span>
  <span m="615970">should</span> <span m="616240">say</span> <span
  m="616600">about</span> <span m="617500">this?</span> <span
  m="617890">You</span> <span m="618190">see</span> <span
  m="618640">here,</span> <span m="618990">I</span> <span m="619400">can</span>
  <span m="619810">draw</span> <span m="620110">the</span> <span
  m="620230">picture,</span> <span m="621250">but</span> <span
  m="621490">of</span> <span m="621550">course,</span> <span m="621880">a</span>
  <span m="622000">hand-drawn</span> <span m="622630">picture</span> <span
  m="623140">is</span> <span m="623950">far</span> <span
  m="624370">inferior</span> <span m="625390">to</span> <span
  m="627220">a</span> <span m="629290">machine-drawn</span> <span
  m="630130">picture</span> <span m="630850">an</span> <span
  m="631360">online</span> <span m="631870">picture,</span> <span
  m="632290">but</span> <span m="632410">let</span> <span m="632590">me</span>
  <span m="632740">just</span> <span m="633430">do</span> <span
  m="633670">it.</span> <span m="633820">So</span> <span m="634030">there</span>
  <span m="634240">is</span> <span m="634360">v,</span> <span
  m="635350">the</span> <span m="635830">training</span> <span
  m="636410">sample</span> <span m="636850">has</span> <span
  m="638230">some</span> <span m="638590">components,</span> <span
  m="640090">and</span> <span m="640240">then</span> <span
  m="641240">they're</span> <span m="641500">multiplied.</span> <span
  m="642250">Now,</span> <span m="642490">here</span> <span m="642640">is</span>
  <span m="642760">going</span> <span m="642870">to</span> <span
  m="643030">be</span> <span m="643270">v1,</span> <span m="645460">the</span>
  <span m="645790">first</span> <span m="648250">hidden</span> <span
  m="648610">layer,</span> <span m="651180">and</span> <span
  m="651370">that</span> <span m="651970">can</span> <span
  m="652240">have</span> <span m="653380">a</span> <span
  m="653440">different</span> <span m="653860">number</span> <span
  m="654480">of</span> <span m="659620">components</span> <span
  m="661550">in</span> <span m="661810">the</span> <span m="661900">first</span>
  <span m="662290">layer,</span> <span m="662620">a</span> <span
  m="662650">different</span> <span m="662980">number</span> <span
  m="663310">of</span> <span m="663400">neurons.</span> <span
  m="664600">And</span> <span m="664810">then</span> <span
  m="665110">each</span> <span m="665440">one</span> <span
  m="665950">comes</span> <span m="666460">from</span> <span
  m="667960">the</span> <span m="668230">v's--</span> <span m="670960">so</span>
  <span m="671200">I</span> <span m="671320">will</span> <span
  m="671890">keep</span> <span m="672130">going</span> <span
  m="672580">here,</span> <span m="673450">but</span> <span
  m="674650">you</span> <span m="675160">see</span> <span m="675430">the</span>
  <span m="675910">picture.</span></p><p><span m="676780">So</span> <span
  m="677620">that</span> <span m="678220">describes</span> <span
  m="678910">a</span> <span m="679000">matrix</span> <span m="679590">A1</span>
  <span m="680740">that</span> <span m="680890">tells</span> <span
  m="681280">you</span> <span m="681400">what</span> <span m="681610">the</span>
  <span m="681730">weights</span> <span m="682180">are</span> <span
  m="682330">on</span> <span m="682480">those,</span> <span
  m="683350">and</span> <span m="683500">then</span> <span
  m="683770">there's</span> <span m="684100">a</span> <span m="685070">b1</span>
  <span m="686230">that's</span> <span m="686650">added.</span> <span
  m="688590">The</span> <span m="688690">bias</span> <span
  m="689170">vector</span> <span m="690400">is</span> <span
  m="690670">added</span> <span m="691090">to</span> <span m="691360">all</span>
  <span m="691600">those</span> <span m="692740">to</span> <span
  m="692890">get</span> <span m="693190">the</span> <span m="693340">v1.</span>
  <span m="694290">so</span> <span m="694540">v1</span> <span
  m="695110">is</span> <span m="695830">A1</span> <span m="696640">v0</span>
  <span m="697540">plus</span> <span m="698290">b1,</span> <span
  m="700150">and</span> <span m="700330">then</span> <span
  m="700600">onwards.</span> <span m="702220">So</span> <span
  m="702700">this</span> <span m="703000">is</span> <span m="703200">the</span>
  <span m="704710">spot</span> <span m="705190">where</span> <span
  m="705670">drawing</span> <span m="706060">it</span> <span
  m="706120">by</span> <span m="706330">hand</span> <span m="706750">is</span>
  <span m="707470">clearly</span> <span m="709090">inferior</span> <span
  m="709780">to</span> <span m="710740">any</span> <span m="710980">other</span>
  <span m="711730">possible</span> <span m="712360">way</span> <span
  m="712600">to</span> <span m="712720">do</span> <span
  m="712900">it.</span></p><p><span m="713560">OK.</span> <span
  m="715690">So</span> <span m="718630">now,</span> <span m="718900">I</span>
  <span m="718990">haven't</span> <span m="719320">yet</span> <span
  m="719770">put</span> <span m="720060">into</span> <span m="720280">the</span>
  <span m="720430">picture</span> <span m="721660">the</span> <span
  m="722260">loss</span> <span m="722860">function.</span> <span
  m="723430">So</span> <span m="723640">that's</span> <span
  m="724000">the</span> <span m="724150">function</span> <span
  m="724750">that</span> <span m="725080">you</span> <span
  m="725320">want</span> <span m="725650">to</span> <span
  m="725800">minimize.</span> <span m="728410">So</span> <span
  m="728520">what</span> <span m="728760">is</span> <span m="728910">the</span>
  <span m="729030">loss</span> <span m="729420">function?</span> <span
  m="733420">So</span> <span m="733540">we're</span> <span
  m="733690">choosing</span> <span m="736030">x</span> <span
  m="737320">to--</span> <span m="738740">that's</span> <span
  m="739090">all</span> <span m="739360">the</span> <span m="739540">A's</span>
  <span m="739870">and</span> <span m="739990">b's--</span> <span
  m="740830">to</span> <span m="741010">minimize</span> <span
  m="743260">the</span> <span m="743410">loss,</span> <span
  m="745300">function</span> <span m="745900">L.</span></p><p><span
  m="747250">OK.</span> <span m="748600">So</span> <span m="748780">it's</span>
  <span m="748960">this</span> <span m="749860">part</span> <span
  m="750360">that</span> <span m="750490">Professor</span> <span
  m="751090">Sra's</span> <span m="751660">lecture</span> <span
  m="752110">was</span> <span m="752350">about.</span> <span
  m="754540">So</span> <span m="754850">he</span> <span m="755830">said,</span>
  <span m="756130">L</span> <span m="756490">is</span> <span
  m="756730">often</span> <span m="757630">a</span> <span
  m="757720">finite</span> <span m="758320">sum</span> <span
  m="760240">over</span> <span m="761980">all</span> <span m="764500">of</span>
  <span m="764970">F.</span> <span m="765490">So</span> <span
  m="765700">what</span> <span m="765910">would</span> <span
  m="766060">that</span> <span m="766330">be?</span> <span m="766630">F</span>
  <span m="766990">of</span> <span m="767580">x,</span> <span
  m="768110">vi,</span> <span m="772940">so</span> <span m="773110">this</span>
  <span m="773320">is</span> <span m="773470">the</span> <span
  m="773620">output</span> <span m="776280">from</span> <span
  m="779640">with</span> <span m="779850">weights</span> <span
  m="780210">in</span> <span m="780390">x</span> <span m="780870">from</span>
  <span m="781650">sample</span> <span m="782160">number</span> <span
  m="782520">i.</span></p><p><span m="783600">And</span> <span
  m="783900">if</span> <span m="784050">we're</span> <span
  m="784200">doing</span> <span m="784770">batch</span> <span
  m="785310">processing--</span> <span m="786210">that</span> <span
  m="786420">is,</span> <span m="786600">we're</span> <span
  m="786750">doing</span> <span m="786990">the</span> <span
  m="787080">whole</span> <span m="787380">batch</span> <span
  m="787830">at</span> <span m="787950">once--</span> <span
  m="788700">then</span> <span m="788910">we</span> <span
  m="789210">compute</span> <span m="789690">that</span> <span
  m="789930">for</span> <span m="790140">all</span> <span m="790380">i.</span>
  <span m="790530">And</span> <span m="790620">that's</span> <span
  m="790950">the</span> <span m="791460">computation</span> <span
  m="792330">that's</span> <span m="792720">ridiculously</span> <span
  m="793650">expensive,</span> <span m="794970">and</span> <span
  m="795210">you</span> <span m="795540">go</span> <span
  m="795840">instead</span> <span m="796380">to</span> <span
  m="797760">stochastic</span> <span m="798390">gradient.</span> <span
  m="799020">And</span> <span m="799200">you</span> <span m="799320">just</span>
  <span m="799530">choose</span> <span m="799860">one</span> <span
  m="800130">of</span> <span m="800250">those,</span> <span m="801120">or</span>
  <span m="801330">b</span> <span m="801690">of</span> <span
  m="801810">those,</span> <span m="802260">a small</span> <span
  m="802590">number</span> <span m="802890">b,</span> <span
  m="803250">like</span> <span m="803520">32</span> <span m="803980">or</span>
  <span m="804440">128</span> <span m="805890">of</span> <span
  m="806040">these</span> <span m="806370">F's.</span> <span
  m="807430">But</span> <span m="807930">full-scale</span> <span
  m="809310">gradient</span> <span m="809790">descent</span> <span
  m="813120">chooses</span> <span m="813720">the</span> <span
  m="813870">weights</span> <span m="814290">x</span> <span m="814740">to</span>
  <span m="814890">minimize</span> <span m="816210">the</span> <span
  m="816330">loss.</span></p><p><span m="816840">Now,</span> <span
  m="817110">so</span> <span m="817410">I</span> <span m="817780">haven't</span>
  <span m="818040">got</span> <span m="818200">the</span> <span
  m="818280">loss</span> <span m="818790">here</span> <span
  m="819000">yet.</span> <span m="820500">This</span> <span
  m="820770">function,</span> <span m="823490">the</span> <span
  m="823650">loss</span> <span m="824130">would</span> <span
  m="824340">be</span> <span m="824550">minus</span> <span m="825330">the</span>
  <span m="825510">true</span> <span m="829320">result</span> <span
  m="829860">from</span> <span m="830160">sample</span> <span
  m="830670">i.</span> <span m="832110">I haven't</span> <span
  m="832420">got</span> <span m="832590">a</span> <span m="832650">good</span>
  <span m="832830">notation</span> <span m="833490">for</span> <span
  m="833670">that.</span> <span m="833940">I'm</span> <span
  m="834270">open</span> <span m="834630">to</span> <span
  m="834750">suggestions.</span></p><p><span m="836400">So</span> <span
  m="836670">how</span> <span m="836850">do</span> <span m="837000">I</span>
  <span m="837090">want</span> <span m="837300">to</span> <span
  m="837360">write</span> <span m="837640">the error?</span> <span
  m="841200">So</span> <span m="841410">that</span> <span
  m="841590">would</span> <span m="841770">be--</span> <span
  m="843330">if</span> <span m="843510">it</span> <span m="843570">was</span>
  <span m="843780">least</span> <span m="844040">squares,</span> <span
  m="844650">I</span> <span m="844770">would</span> <span
  m="845070">maybe</span> <span m="845430">be</span> <span
  m="845640">squaring</span> <span m="846300">that.</span> <span
  m="849480">So</span> <span m="849720">it</span> <span m="849780">would</span>
  <span m="849930">be</span> <span m="850080">a</span> <span
  m="850140">sum</span> <span m="850680">of</span> <span
  m="850830">squares</span> <span m="851670">of</span> <span
  m="851910">errors</span> <span m="852300">squared</span> <span
  m="853750">over</span> <span m="854090">all</span> <span m="854370">the</span>
  <span m="854490">samples.</span> <span m="855930">Or</span> <span
  m="856170">if</span> <span m="856350">I'm</span> <span m="856530">doing</span>
  <span m="856800">stochastic</span> <span m="857430">gradient</span> <span
  m="857910">descent,</span> <span m="858810">I</span> <span
  m="858960">would</span> <span m="859140">minimize.</span> <span
  m="859700">I</span> <span m="859920">guess</span> <span m="860190">I'm</span>
  <span m="860310">minimizing</span> <span m="861120">this.</span></p><p><span
  m="861870">But</span> <span m="862140">the</span> <span
  m="862260">question</span> <span m="862740">is,</span> <span
  m="862950">do</span> <span m="863160">I</span> <span m="863280">use</span>
  <span m="864030">the</span> <span m="864150">whole</span> <span
  m="865140">function</span> <span m="865740">L</span> <span
  m="867330">at</span> <span m="867570">each</span> <span
  m="868320">iteration,</span> <span m="869130">or</span> <span
  m="869370">do</span> <span m="869580">I</span> <span m="869730">just</span>
  <span m="870000">pick</span> <span m="870570">one,</span> <span
  m="870990">or</span> <span m="871710">only</span> <span m="872040">b,</span>
  <span m="872580">of</span> <span m="872800">the</span> <span
  m="874080">samples</span> <span m="874710">to</span> <span
  m="874830">look</span> <span m="875160">at</span> <span
  m="875730">iteration</span> <span m="876390">number</span> <span
  m="876850">K?</span> <span m="877830">So</span> <span m="878400">this</span>
  <span m="879780">is</span> <span m="879960">the</span> <span
  m="880170">L</span> <span m="880650">of</span> <span m="881340">x</span> <span
  m="881820">then.</span> <span m="883890">I've</span> <span
  m="884100">added</span> <span m="884460">up</span> <span
  m="884700">over</span> <span m="884965">all</span> <span m="885230">the</span>
  <span m="885350">v's.</span> <span m="887250">So</span> <span
  m="887490">just</span> <span m="887730">to</span> <span m="887880">keep</span>
  <span m="888120">the</span> <span m="888240">notation</span> <span
  m="888870">straight,</span> <span m="891510">I</span> <span
  m="891570">have</span> <span m="891780">this</span> <span
  m="891990">function</span> <span m="892440">of</span> <span
  m="892590">x</span> <span m="892860">and</span> <span m="893010">v's.</span>
  <span m="894180">I</span> <span m="894660">find</span> <span
  m="895020">it's</span> <span m="895200">output.</span></p><p><span
  m="898380">This</span> <span m="898650">is</span> <span m="898800">what</span>
  <span m="899970">the</span> <span m="901200">neural</span> <span
  m="901590">net</span> <span m="901860">produces.</span> <span
  m="903150">It's</span> <span m="903330">supposed</span> <span
  m="903810">to</span> <span m="903900">be</span> <span m="904140">close</span>
  <span m="904530">to</span> <span m="904710">the</span> <span
  m="904830">true.</span> <span m="906300">We</span> <span
  m="906450">don't</span> <span m="906660">want</span> <span
  m="906900">it</span> <span m="906990">to</span> <span m="907110">be</span>
  <span m="907410">exactly--</span> <span m="908010">we</span> <span
  m="908550">don't</span> <span m="908820">expect</span> <span
  m="909210">this</span> <span m="909450">to</span> <span m="909540">be</span>
  <span m="909660">exactly</span> <span m="910170">0,</span> <span
  m="910620">but</span> <span m="911430">it</span> <span m="911730">could</span>
  <span m="911970">be,</span> <span m="912270">because</span> <span
  m="912540">we</span> <span m="912720">have</span> <span m="913350">lots</span>
  <span m="913710">of</span> <span m="913830">weight</span> <span
  m="914560">to</span> <span m="914820">achieve</span> <span
  m="915210">that.</span> <span m="918270">So</span> <span
  m="920220">anyway,</span> <span m="920580">that</span> <span m="920790">would
  be</span> <span m="921180">the loss</span> <span m="921570">we</span> <span
  m="921690">minimize,</span> <span m="922020">and</span> <span
  m="922350">it'd</span> <span m="922530">be</span> <span
  m="922740">squared</span> <span m="923340">for</span> <span
  m="923580">square</span> <span m="924030">loss.</span></p><p><span
  m="924780">I</span> <span m="924930">guess</span> <span m="925200">I</span>
  <span m="925320">haven't</span> <span m="925650">really</span> <span
  m="925980">spoken</span> <span m="926460">about</span> <span
  m="928470">loss</span> <span m="928920">functions.</span> <span
  m="930720">Let</span> <span m="930840">me</span> <span m="930990">just</span>
  <span m="931200">put</span> <span m="931410">those</span> <span
  m="931770">here,</span> <span m="934890">and</span> <span
  m="935070">actually</span> <span m="938250">these</span> <span
  m="938520">are</span> <span m="938670">popular</span> <span
  m="939420">loss</span> <span m="939840">functions.</span> <span
  m="942070">One</span> <span m="942600">would</span> <span m="942840">be</span>
  <span m="943260">the</span> <span m="943440">one</span> <span
  m="943830">we</span> <span m="944730">know</span> <span
  m="945000">best,</span> <span m="945370">square</span> <span
  m="945930">loss,</span> <span m="948780">and</span> <span
  m="949560">number</span> <span m="949890">two,</span> <span
  m="950370">I've</span> <span m="950850">never</span> <span
  m="951120">seen</span> <span m="951420">it</span> <span m="951570">used</span>
  <span m="952020">quite</span> <span m="952410">this</span> <span
  m="953100">directly,</span> <span m="953730">would</span> <span
  m="954000">be</span> <span m="954390">the</span> <span m="955020">l1</span>
  <span m="956940">loss,</span> <span m="959340">maybe</span> <span
  m="959790">the</span> <span m="960840">sum</span> <span m="961230">of</span>
  <span m="961410">L1</span> <span m="961950">norms.</span> <span
  m="963330">This</span> <span m="963540">is</span> <span m="964200">sum</span>
  <span m="964680">of</span> <span m="967710">these</span> <span
  m="967950">errors</span> <span m="968250">squared</span> <span
  m="968910">in</span> <span m="969030">the</span> <span m="969230">L2</span>
  <span m="969570">norm.</span> <span m="970250">The</span> <span
  m="970390">L1</span> <span m="970830">loss</span> <span
  m="971250">could</span> <span m="971520">be</span> <span m="971760">the</span>
  <span m="971910">sum</span> <span m="972930">over</span> <span
  m="973320">i</span> <span m="973880">of</span> <span m="974310">the</span>
  <span m="975060">L1</span> <span m="975690">losses.</span></p><p><span
  m="982510">Well,</span> <span m="982900">this</span> <span
  m="983560">comes</span> <span m="983890">into</span> <span
  m="984700">specific</span> <span m="985480">other</span> <span
  m="985780">problems</span> <span m="986470">like</span> <span
  m="987370">Lasso</span> <span m="988150">and</span> <span
  m="988390">other</span> <span m="989080">important</span> <span
  m="989530">problems</span> <span m="990070">you're</span> <span
  m="990640">minimizing</span> <span m="991390">an</span> <span
  m="991510">L1</span> <span m="991960">norm</span> <span m="992350">but</span>
  <span m="993310">not</span> <span m="993700">in</span> <span
  m="995080">deep</span> <span m="995350">learning.</span> <span
  m="996550">Now,</span> <span m="996940">and</span> <span
  m="997150">three</span> <span m="997570">would</span> <span
  m="997810">be</span> <span m="998710">Hinge</span> <span
  m="999130">loss.</span> <span m="1003960">Probably</span> <span
  m="1004350">some</span> <span m="1004620">of</span> <span
  m="1004740">you</span> <span m="1004890">know</span> <span
  m="1005100">better</span> <span m="1005370">than</span> <span
  m="1005610">I</span> <span m="1006690">the</span> <span
  m="1007440">formula</span> <span m="1008070">and</span> <span
  m="1009000">the</span> <span m="1009180">background</span> <span
  m="1009840">behind</span> <span m="1010320">hinge</span> <span
  m="1010790">losses.</span> <span m="1012390">This</span> <span
  m="1012660">is</span> <span m="1012840">for</span> <span
  m="1014760">the</span> <span m="1014930">minus</span> <span
  m="1015300">1,</span> <span m="1015630">1</span> <span
  m="1016080">classification</span> <span m="1017220">problems.</span> <span
  m="1025349">That</span> <span m="1025560">would</span> <span
  m="1025740">be</span> <span m="1026010">appropriate</span> <span
  m="1026670">for</span> <span m="1027960">regression,</span> <span
  m="1028960">so</span> <span m="1029069">this</span> <span
  m="1029280">would</span> <span m="1029460">be</span> <span
  m="1029945">for</span> <span m="1030250">a</span> <span
  m="1030390">regression.</span></p><p><span m="1034670">And</span> <span
  m="1034940">then</span> <span m="1035150">finally,</span> <span
  m="1035720">the</span> <span m="1035839">most</span> <span
  m="1036230">important</span> <span m="1036740">for</span> <span
  m="1037069">neural</span> <span m="1037490">nets,</span> <span
  m="1038359">is</span> <span m="1038660">cross-entropy</span> <span
  m="1041240">loss.</span> <span m="1048099">This</span> <span
  m="1048339">is</span> <span m="1048490">for</span> <span
  m="1048760">neural</span> <span m="1049150">nets.</span> <span
  m="1054800">So</span> <span m="1055010">this</span> <span
  m="1055220">is</span> <span m="1055340">really</span> <span
  m="1057660">the</span> <span m="1058090">most</span> <span
  m="1058490">used</span> <span m="1059810">loss</span> <span
  m="1060140">function</span> <span m="1060780">in</span> <span
  m="1060970">the</span> <span m="1062380">setup</span> <span
  m="1062690">that</span> <span m="1062840">we</span> <span
  m="1063500">are</span> <span m="1064190">mostly</span> <span
  m="1064610">thinking</span> <span m="1065030">of,</span> <span
  m="1065750">and</span> <span m="1066350">I'll</span> <span
  m="1066590">try</span> <span m="1066800">to</span> <span
  m="1066920">say</span> <span m="1067160">more</span> <span
  m="1067460">about</span> <span m="1067790">that</span> <span
  m="1069260">before</span> <span m="1069680">the</span> <span
  m="1069860">course</span> <span m="1070280">ends.</span> <span
  m="1071510">So</span> <span m="1071780">is</span> <span
  m="1071930">that--</span> <span m="1072470">I</span> <span
  m="1072830">don't</span> <span m="1072980">know.</span> <span
  m="1074090">For</span> <span m="1074180">me,</span> <span m="1074390">I</span>
  <span m="1074540">hadn't</span> <span m="1074750">got</span> <span
  m="1074990">this</span> <span m="1075500">straight</span> <span
  m="1078770">until</span> <span m="1079640">rewriting</span> <span
  m="1080450">that</span> <span m="1080750">section,</span> <span
  m="1081800">and</span> <span m="1083250">it's</span> <span
  m="1083570">now</span> <span m="1084100">in</span> <span
  m="1084280">better</span> <span m="1084640">form,</span> <span
  m="1085400">but</span> <span m="1085940">comments</span> <span
  m="1086510">are</span> <span m="1086660">welcome.</span> <span
  m="1087980">OK.</span></p><p><span m="1091360">So</span> <span
  m="1091600">that</span> <span m="1092770">just</span> <span
  m="1093040">completes</span> <span m="1093520">what</span> <span
  m="1093700">I</span> <span m="1093820">wanted</span> <span
  m="1094120">to</span> <span m="1094240">say,</span> <span
  m="1094570">and</span> <span m="1094720">you'll</span> <span
  m="1094870">see</span> <span m="1095230">the</span> <span
  m="1095830">new</span> <span m="1096070">section.</span> <span
  m="1099750">Any</span> <span m="1099900">comment</span> <span
  m="1100370">on</span> <span m="1100490">that</span> <span
  m="1100640">before</span> <span m="1100910">I</span> <span
  m="1100970">go</span> <span m="1101150">to</span> <span m="1101300">a</span>
  <span m="1101390">different</span> <span m="1101750">topic</span> <span
  m="1102200">entirely?</span> <span m="1105610">OK.</span> <span
  m="1106600">Oh,</span> <span m="1107520">any</span> <span
  m="1107970">questions</span> <span m="1109630">before</span> <span
  m="1109990">I</span> <span m="1110050">go</span> <span m="1110200">to</span>
  <span m="1110290">this</span> <span m="1110530">topic?</span> <span
  m="1111190">Which</span> <span m="1111430">I'll</span> <span
  m="1111550">tell</span> <span m="1111790">you</span> <span
  m="1111880">what</span> <span m="1112090">it</span> <span
  m="1112240">is.</span> <span m="1116880">It's</span> <span
  m="1117150">a</span> <span m="1117300">short</span> <span
  m="1117930">section</span> <span m="1118590">in</span> <span
  m="1118800">the</span> <span m="1118920">book</span> <span
  m="1121110">about</span> <span m="1121410">distance</span> <span
  m="1122010">matrices,</span> <span m="1127230">and</span> <span
  m="1127560">the</span> <span m="1127980">question</span> <span
  m="1128580">is.</span></p><p><span m="1138540">We</span> <span
  m="1138720">have</span> <span m="1138870">a</span> <span
  m="1138930">bunch</span> <span m="1139200">of</span> <span
  m="1139800">points</span> <span m="1141830">in</span> <span
  m="1143030">space,</span> <span m="1146290">and what</span> <span
  m="1146560">we</span> <span m="1146710">know</span> <span
  m="1147160">is</span> <span m="1147400">we</span> <span
  m="1147580">know</span> <span m="1150670">the</span> <span
  m="1150820">distances</span> <span m="1153490">between</span> <span
  m="1153910">the</span> <span m="1154000">points,</span> <span
  m="1159700">and</span> <span m="1159850">it's</span> <span
  m="1160000">convenient</span> <span m="1160540">to</span> <span
  m="1160960">talk</span> <span m="1161230">about</span> <span
  m="1161470">distances</span> <span m="1162220">squared</span> <span
  m="1162850">here.</span> <span m="1168050">OK.</span> <span
  m="1170610">And</span> <span m="1170850">how</span> <span
  m="1171060">would</span> <span m="1171270">we</span> <span
  m="1171420">know</span> <span m="1171670">of</span> <span
  m="1171710">these</span> <span m="1172020">distances?</span> <span
  m="1172740">Maybe</span> <span m="1173100">by</span> <span
  m="1173760">radar</span> <span m="1174700">or</span> <span
  m="1176520">any</span> <span m="1177930">measurement.</span> <span
  m="1179820">They</span> <span m="1180060">might</span> <span
  m="1180420">be</span> <span m="1183420">sensors,</span> <span
  m="1185070">which</span> <span m="1185520">we've</span> <span
  m="1185730">placed</span> <span m="1186180">around,</span> <span
  m="1187110">and</span> <span m="1187410">we</span> <span
  m="1188520">can</span> <span m="1188760">measure</span> <span
  m="1189090">the</span> <span m="1189240">distances</span> <span
  m="1189930">between</span> <span m="1190380">them.</span> <span
  m="1191100">And</span> <span m="1191220">the</span> <span
  m="1191340">question</span> <span m="1191850">is,</span> <span
  m="1192360">what's</span> <span m="1192630">their</span> <span
  m="1192810">position?</span> <span m="1194190">So</span> <span
  m="1194400">that's</span> <span m="1198880">the</span> <span
  m="1198960">question.</span></p><p><span m="1199450">So</span> <span
  m="1199500">let</span> <span m="1199650">me</span> <span
  m="1199770">talk</span> <span m="1200100">a</span> <span
  m="1200160">little</span> <span m="1200400">bit</span> <span
  m="1200550">about</span> <span m="1200850">this</span> <span
  m="1201120">question</span> <span m="1201660">and</span> <span
  m="1201780">then</span> <span m="1202320">pause.</span> <span
  m="1203310">Find</span> <span m="1205140">positions</span> <span
  m="1210170">in,</span> <span m="1211860">well,</span> <span
  m="1212340">in</span> <span m="1212640">space,</span> <span
  m="1213480">but</span> <span m="1213720">I</span> <span
  m="1213810">don't</span> <span m="1213960">know.</span> <span
  m="1214200">We</span> <span m="1214410">don't</span> <span
  m="1214620">know</span> <span m="1214950">ahead</span> <span
  m="1215250">of</span> <span m="1215370">time</span> <span
  m="1215640">maybe</span> <span m="1216000">whether</span> <span
  m="1216300">the</span> <span m="1216450">space</span> <span
  m="1216960">is</span> <span m="1217500">ordinary</span> <span
  m="1218040">3D</span> <span m="1218670">space,</span> <span
  m="1219750">or</span> <span m="1219870">whether</span> <span
  m="1220140">these</span> <span m="1220500">are</span> <span
  m="1221250">sensors</span> <span m="1222360">in</span> <span
  m="1222480">a</span> <span m="1222540">plane,</span> <span
  m="1223500">or</span> <span m="1223620">whether</span> <span
  m="1223860">we</span> <span m="1223980">have</span> <span
  m="1224160">to</span> <span m="1224280">go</span> <span m="1224430">to</span>
  <span m="1224550">higher</span> <span m="1224880">dimensions.</span> <span
  m="1225610">I'll</span> <span m="1225750">just</span> <span
  m="1225990">put</span> <span m="1226230">d,</span> <span
  m="1227130">and</span> <span m="1228270">also,</span> <span
  m="1229320">I'll</span> <span m="1229410">just</span> <span
  m="1229620">say</span> <span m="1229890">then,</span> <span
  m="1230130">we're</span> <span m="1230340">also</span> <span
  m="1230790">finding</span> <span m="1231370">d.</span></p><p><span
  m="1237570">And</span> <span m="1237930">what</span> <span
  m="1238170">are</span> <span m="1238260">these</span> <span
  m="1238500">positions?</span> <span m="1239160">These</span> <span
  m="1239370">are</span> <span m="1239460">positions</span> <span
  m="1240150">x,</span> <span m="1241662">xi,</span> <span m="1243120">so</span>
  <span m="1243420">that</span> <span m="1243660">the</span> <span
  m="1243810">distance</span> <span m="1244410">between</span> <span
  m="1244980">xi</span> <span m="1245730">minus</span> <span
  m="1246210">xj</span> <span m="1248070">squared</span> <span
  m="1248670">is</span> <span m="1249330">the</span> <span
  m="1249450">given</span> <span m="1253470">dij.</span> <span
  m="1256470">So</span> <span m="1256650">we're</span> <span
  m="1256770">given</span> <span m="1257100">distances</span> <span
  m="1257730">between</span> <span m="1258210">them,</span> <span
  m="1259110">and</span> <span m="1259260">we</span> <span
  m="1259380">want</span> <span m="1259590">to</span> <span
  m="1259650">find</span> <span m="1259920">their</span> <span
  m="1260070">positions.</span> <span m="1262110">So</span> <span
  m="1262260">we</span> <span m="1262410">know</span> <span
  m="1262650">distances,</span> <span m="1263530">and</span> <span
  m="1263580">we</span> <span m="1263670">want</span> <span
  m="1263880">to</span> <span m="1263940">find</span> <span
  m="1264240">positions.</span> <span m="1265800">That's</span> <span
  m="1266130">the</span> <span m="1266610">question.</span></p><p><span
  m="1267510">It's</span> <span m="1267810">just</span> <span
  m="1268110">a</span> <span m="1268170">neat</span> <span
  m="1268770">math</span> <span m="1269220">question</span> <span
  m="1270420">that</span> <span m="1270870">is</span> <span
  m="1271020">solved,</span> <span m="1271650">and</span> <span
  m="1271770">you'll</span> <span m="1271980">see</span> <span
  m="1272280">a</span> <span m="1272370">complete</span> <span
  m="1273000">solution.</span> <span m="1276120">And</span> <span
  m="1276690">it</span> <span m="1276840">has</span> <span
  m="1277080">lots</span> <span m="1277380">of</span> <span
  m="1277500">applications,</span> <span m="1279400">and</span> <span
  m="1279690">it's</span> <span m="1280460">just</span> <span
  m="1281810">a</span> <span m="1281870">nice</span> <span
  m="1282230">question.</span> <span m="1282680">So</span> <span
  m="1282860">it</span> <span m="1283010">occupies</span> <span
  m="1283640">a</span> <span m="1283730">section</span> <span
  m="1284240">of</span> <span m="1284360">the</span> <span
  m="1284450">book,</span> <span m="1284750">but</span> <span
  m="1284900">that</span> <span m="1285140">section</span> <span
  m="1285980">is</span> <span m="1286160">only</span> <span
  m="1286460">two</span> <span m="1286700">pages</span> <span
  m="1287180">long.</span> <span m="1288100">It's</span> <span
  m="1288560">just</span> <span m="1288860">a</span> <span
  m="1288920">straightforward</span> <span m="1289790">solution</span> <span
  m="1290390">to</span> <span m="1290540">that</span> <span
  m="1291110">question.</span> <span m="1292670">Given</span> <span
  m="1293150">the</span> <span m="1293270">distances,</span> <span
  m="1294110">find</span> <span m="1294640">the</span> <span
  m="1295700">positions.</span> <span m="1296900">Given</span> <span
  m="1297140">the</span> <span m="1297260">distances,</span> <span
  m="1297950">find</span> <span m="1298370">the</span> <span
  m="1298670">excess.</span></p><p><span m="1303610">OK.</span> <span
  m="1305500">So</span> <span m="1305720">I'm</span> <span
  m="1306130">going</span> <span m="1306280">to</span> <span
  m="1306370">speak</span> <span m="1306640">about</span> <span
  m="1306880">that.</span> <span m="1310350">I</span> <span
  m="1310660">had</span> <span m="1310840">a</span> <span
  m="1310900">suggestion,</span> <span m="1311530">a</span> <span
  m="1311590">good</span> <span m="1311800">suggestion,</span> <span
  m="1312880">by</span> <span m="1313120">email.</span> <span
  m="1314500">Well,</span> <span m="1315030">questions</span> <span
  m="1315520">about</span> <span m="1315820">the</span> <span
  m="1317080">projects</span> <span m="1317650">coming</span> <span
  m="1318010">in?</span> <span m="1318340">Projects</span> <span
  m="1318880">are</span> <span m="1318970">beginning</span> <span
  m="1319450">to</span> <span m="1319540">come</span> <span
  m="1319810">in,</span> <span m="1320680">and</span> <span
  m="1321010">at</span> <span m="1321070">least</span> <span
  m="1321400">at</span> <span m="1321490">the</span> <span
  m="1321610">beginning--</span> <span m="1324930">well,</span> <span
  m="1325480">in</span> <span m="1325690">all</span> <span
  m="1325900">cases,</span> <span m="1326440">beginning</span> <span
  m="1326920">and</span> <span m="1327160">end,</span> <span
  m="1327460">I'll</span> <span m="1327670">read</span> <span
  m="1327940">them</span> <span m="1328150">carefully.</span></p><p><span
  m="1329260">And</span> <span m="1329950">as</span> <span
  m="1330460">long</span> <span m="1330760">as</span> <span m="1330880">I</span>
  <span m="1331000">can,</span> <span m="1331450">I'll</span> <span
  m="1331690">send</span> <span m="1331990">back</span> <span
  m="1332290">suggestions</span> <span m="1333040">for</span> <span
  m="1333250">a</span> <span m="1333340">final</span> <span
  m="1334750">rewrite,</span> <span m="1336160">and</span> <span
  m="1336580">as</span> <span m="1336730">I</span> <span
  m="1336820">said,</span> <span m="1339190">a</span> <span
  m="1339610">print</span> <span m="1339980">out</span> <span
  m="1340330">is</span> <span m="1340480">great.</span> <span
  m="1340930">You</span> <span m="1341080">could</span> <span
  m="1341260">leave</span> <span m="1341530">it</span> <span
  m="1341650">in</span> <span m="1341770">the</span> <span
  m="1341950">envelope</span> <span m="1342700">outside</span> <span
  m="1343090">my</span> <span m="1343300">office,</span> <span
  m="1344320">but</span> <span m="1344560">of</span> <span
  m="1344650">course,</span> <span m="1346690">online</span> <span
  m="1348210">is</span> <span m="1348430">what</span> <span
  m="1348610">everybody's</span> <span m="1349240">doing.</span> <span
  m="1350330">So</span> <span m="1350470">those</span> <span
  m="1350800">are</span> <span m="1350890">just</span> <span
  m="1351160">beginning</span> <span m="1351640">to</span> <span
  m="1351760">come</span> <span m="1352030">in,</span> <span
  m="1352240">and</span> <span m="1353980">if</span> <span m="1354190">we</span>
  <span m="1354340">can</span> <span m="1354520">get</span> <span
  m="1354700">them</span> <span m="1354880">in</span> <span
  m="1355030">by</span> <span m="1355240">a</span> <span m="1355300">week</span>
  <span m="1355570">from</span> <span m="1355780">today,</span> <span
  m="1356230">I'm</span> <span m="1357040">really,</span> <span
  m="1357470">really</span> <span m="1357640">happy.</span></p><p><span
  m="1358840">Yeah,</span> <span m="1359860">and</span> <span
  m="1360100">just</span> <span m="1360640">feel</span> <span
  m="1360910">free</span> <span m="1361120">to</span> <span
  m="1361210">email</span> <span m="1361630">me.</span> <span
  m="1361940">I</span> <span m="1362290">would</span> <span
  m="1362500">email</span> <span m="1362860">me</span> <span
  m="1363220">about</span> <span m="1363580">projects,</span> <span
  m="1365560">not</span> <span m="1365890">Jonathan</span> <span
  m="1367180">and</span> <span m="1367330">not</span> <span
  m="1368770">anonymous</span> <span m="1369450">Stellar.</span> <span
  m="1370660">I</span> <span m="1370810">think</span> <span
  m="1371150">you'd</span> <span m="1372190">probably do</span> <span
  m="1372520">better</span> <span m="1372880">just</span> <span
  m="1373230">to</span> <span m="1373870">ask</span> <span m="1374200">me</span>
  <span m="1374380">the</span> <span m="1374500">question.</span> <span
  m="1375280">That's</span> <span m="1375820">fine,</span> <span
  m="1376450">and</span> <span m="1376600">I'll</span> <span
  m="1377170">try</span> <span m="1377410">to</span> <span
  m="1377530">answer</span> <span m="1378790">in</span> <span
  m="1378940">a</span> <span m="1379000">useful</span> <span
  m="1379480">way.</span></p><p><span m="1380410">Yeah,</span> <span
  m="1382490">and</span> <span m="1382750">I'm</span> <span
  m="1382930">always</span> <span m="1383350">open</span> <span
  m="1383620">to</span> <span m="1383710">questions.</span> <span
  m="1384250">So</span> <span m="1384520">you</span> <span
  m="1384670">could</span> <span m="1385120">email</span> <span
  m="1385510">me</span> <span m="1386290">like</span> <span
  m="1387520">how</span> <span m="1387670">long</span> <span
  m="1388030">should</span> <span m="1388210">this</span> <span
  m="1388420">project</span> <span m="1388930">be?</span> <span
  m="1391240">My</span> <span m="1391480">tutor</span> <span
  m="1391930">in</span> <span m="1392080">Oxford</span> <span
  m="1392590">said</span> <span m="1392830">something</span> <span
  m="1393280">like--</span> <span m="1394030">when</span> <span
  m="1396070">you</span> <span m="1396190">were</span> <span
  m="1396340">writing</span> <span m="1398500">essays.</span> <span
  m="1399310">That's</span> <span m="1399610">the</span> <span
  m="1399790">Oxford</span> <span m="1400270">system</span> <span
  m="1400720">is</span> <span m="1400870">to</span> <span
  m="1400990">write</span> <span m="1401260">an</span> <span
  m="1401410">essay--</span> <span m="1402460">and</span> <span
  m="1403270">he</span> <span m="1403480">said,</span> <span
  m="1403690">just</span> <span m="1403960">start</span> <span
  m="1404350">where</span> <span m="1404530">it</span> <span
  m="1404650">starts,</span> <span m="1405070">and</span> <span
  m="1405240">end</span> <span m="1405520">when</span> <span
  m="1405700">it</span> <span m="1405850">finishes.</span> <span
  m="1406870">So</span> <span m="1407110">that's</span> <span
  m="1407470">the</span> <span m="1408970">idea,</span> <span
  m="1409390">certainly</span> <span m="1409810">not</span> <span
  m="1411730">enormously</span> <span m="1412330">long.</span></p><p><span
  m="1413230">And</span> <span m="1413440">then</span> <span
  m="1414120">a</span> <span m="1414520">question</span> <span
  m="1415000">was</span> <span m="1415180">raised--</span> <span
  m="1415660">and</span> <span m="1415810">I</span> <span m="1416290">can</span>
  <span m="1416800">ask</span> <span m="1417190">you</span> <span
  m="1417340">if</span> <span m="1417580">you</span> <span
  m="1419560">are</span> <span m="1419740">interested</span> <span
  m="1420310">in</span> <span m="1420430">that--</span> <span
  m="1421300">the</span> <span m="1421420">question</span> <span
  m="1421870">was,</span> <span m="1423100">what</span> <span
  m="1423310">courses</span> <span m="1423790">after</span> <span
  m="1424120">this</span> <span m="1424360">one</span> <span
  m="1425490">are</span> <span m="1427660">natural</span> <span
  m="1428110">to</span> <span m="1428260">take</span> <span
  m="1428790">to</span> <span m="1428950">go</span> <span
  m="1429190">forward?</span> <span m="1431200">And</span> <span
  m="1431590">I</span> <span m="1431710">don't</span> <span
  m="1431860">know</span> <span m="1432010">how</span> <span
  m="1432160">many</span> <span m="1432610">of</span> <span
  m="1432820">you</span> <span m="1433900">are</span> <span
  m="1434020">thinking</span> <span m="1434440">to</span> <span
  m="1434590">take,</span> <span m="1435130">have</span> <span
  m="1435370">time</span> <span m="1435730">to</span> <span
  m="1435850">take,</span> <span m="1438670">other</span> <span
  m="1439060">MIT</span> <span m="1439520">courses</span> <span
  m="1440320">in</span> <span m="1440560">this</span> <span
  m="1440830">area</span> <span m="1441100">of</span> <span
  m="1441760">deep</span> <span m="1442030">learning,</span> <span
  m="1442510">machine</span> <span m="1442960">learning,</span> <span
  m="1443560">optimization,</span> <span m="1444850">all</span> <span
  m="1444970">the</span> <span m="1445090">topics</span> <span
  m="1445600">we've</span> <span m="1445810">had</span> <span
  m="1446050">here.</span> <span m="1448270">Anybody</span> <span
  m="1448780">expecting</span> <span m="1449440">to</span> <span
  m="1449560">take</span> <span m="1449890">more</span> <span
  m="1450190">courses,</span> <span m="1451000">just</span> <span
  m="1451360">stick</span> <span m="1451480">up</span> <span
  m="1451630">a</span> <span m="1451750">hand.</span> <span
  m="1452320">Yeah,</span> <span m="1452950">and</span> <span
  m="1453130">you</span> <span m="1453220">already</span> <span
  m="1453670">know</span> <span m="1453970">like</span> <span
  m="1454300">what</span> <span m="1454750">MIT</span> <span
  m="1455260">offers?</span> <span m="1458700">So</span> <span
  m="1458950">that</span> <span m="1459190">was</span> <span
  m="1459400">the</span> <span m="1459490">question</span> <span
  m="1460270">that</span> <span m="1460450">came</span> <span
  m="1460750">to</span> <span m="1460840">me,</span> <span
  m="1461020">what</span> <span m="1461230">does</span> <span
  m="1461440">MIT</span> <span m="1461980">offer</span> <span
  m="1463420">in</span> <span m="1463750">this</span> <span
  m="1464110">direction?</span></p><p><span m="1465710">And</span> <span
  m="1465880">I</span> <span m="1466030">haven't</span> <span
  m="1466330">looked</span> <span m="1466630">up</span> <span
  m="1466840">to</span> <span m="1466960">see</span> <span
  m="1467290">the</span> <span m="1467440">number</span> <span
  m="1467830">of</span> <span m="1468040">Professor</span> <span
  m="1468610">Sra's</span> <span m="1469300">course,</span> <span
  m="1470450">S-R-A,</span> <span m="1471940">in</span> <span
  m="1472110">course</span> <span m="1472360">6.</span> <span
  m="1472780">It's</span> <span m="1472930">6</span> <span
  m="1473320">point</span> <span m="1473770">high</span> <span
  m="1474010">number,</span> <span m="1475980">and</span> <span
  m="1476530">after</span> <span m="1476890">his</span> <span
  m="1477070">good</span> <span m="1477280">lecture,</span> <span
  m="1477850">I</span> <span m="1478600">think</span> <span
  m="1478900">that's</span> <span m="1479410">got</span> <span
  m="1479670">to</span> <span m="1479800">be</span> <span
  m="1480070">worthwhile.</span> <span m="1482510">So</span> <span
  m="1482690">I</span> <span m="1483040">looked</span> <span
  m="1483310">in</span> <span m="1483430">course</span> <span
  m="1483760">6.</span> <span m="1484390">I</span> <span
  m="1484570">didn't</span> <span m="1484930">find</span> <span
  m="1485890">really</span> <span m="1488080">an</span> <span
  m="1488230">institute-wide</span> <span m="1489310">list.</span> <span
  m="1490450">Maybe</span> <span m="1490750">course</span> <span
  m="1491040">6</span> <span m="1491380">feels</span> <span
  m="1491740">that</span> <span m="1491890">they</span> <span
  m="1492070">are</span> <span m="1492250">the</span> <span
  m="1492430">Institute,</span> <span m="1492970">but</span> <span
  m="1493520">there</span> <span m="1493770">are</span> <span
  m="1494380">other</span> <span m="1494680">courses</span> <span
  m="1495130">around.</span> <span m="1500570">But</span> <span
  m="1500810">I</span> <span m="1500930">found</span> <span
  m="1501360">in</span> <span m="1501860">the</span> <span
  m="1502010">operations</span> <span m="1502730">research</span> <span
  m="1503300">site,</span> <span m="1504790">ORC,</span> <span
  m="1505650">the</span> <span m="1505860">Operations</span> <span
  m="1506430">Research</span> <span m="1506880">Center,</span> <span
  m="1509490">let</span> <span m="1509700">me</span> <span
  m="1509850">just</span> <span m="1510090">put</span> <span
  m="1510390">there.</span> <span m="1511390">This</span> <span
  m="1511640">is</span> <span m="1511830">just</span> <span
  m="1512220">in</span> <span m="1512430">case</span> <span
  m="1512970">you</span> <span m="1513150">would</span> <span
  m="1514020">like</span> <span m="1514450">to</span> <span
  m="1516120">think</span> <span m="1516390">about</span> <span
  m="1516750">any</span> <span m="1516990">of</span> <span
  m="1517050">these</span> <span m="1517260">things.</span></p><p><span
  m="1524280">As</span> <span m="1524430">I</span> <span
  m="1524550">write</span> <span m="1524850">that,</span> <span
  m="1525750">so</span> <span m="1525990">I</span> <span
  m="1526170">heard</span> <span m="1527070">the</span> <span
  m="1527220">lecture</span> <span m="1527700">by</span> <span
  m="1528270">Tim</span> <span m="1528600">Berners-Lee.</span> <span
  m="1529740">Did</span> <span m="1529920">others</span> <span
  m="1530280">hear</span> <span m="1530520">that</span> <span
  m="1531615">a</span> <span m="1532020">week</span> <span m="1532290">or</span>
  <span m="1532410">so</span> <span m="1532650">ago?</span> <span
  m="1533490">He</span> <span m="1533880">created</span> <span
  m="1534600">the</span> <span m="1535920">web.</span> <span
  m="1536710">So</span> <span m="1537030">that's</span> <span
  m="1537210">pretty</span> <span m="1537540">amazing--</span> <span
  m="1539820">it</span> <span m="1539940">wasn't</span> <span
  m="1540330">Al</span> <span m="1540540">Gore,</span> <span
  m="1540930">after</span> <span m="1541320">all,</span> <span
  m="1542440">and</span> <span m="1544260">do</span> <span
  m="1544380">you</span> <span m="1544470">know</span> <span
  m="1544650">his</span> <span m="1544860">name?</span></p><p><span
  m="1545580">Well,</span> <span m="1545790">he's</span> <span
  m="1546000">now</span> <span m="1546270">Sir</span> <span
  m="1547980">Tim</span> <span m="1549720">Berners-Lee.</span> <span
  m="1553960">So</span> <span m="1554410">that</span> <span
  m="1554760">double</span> <span m="1555090">name</span> <span
  m="1555420">makes</span> <span m="1555780">you</span> <span
  m="1555900">suspect</span> <span m="1556430">that</span> <span
  m="1556940">he's</span> <span m="1557190">from</span> <span
  m="1557400">England,</span> <span m="1557760">and</span> <span
  m="1557970">he</span> <span m="1558120">is.</span> <span m="1560520">So</span>
  <span m="1560700">anyway,</span> <span m="1561030">I</span> <span
  m="1561120">was</span> <span m="1561270">going</span> <span
  m="1561410">to</span> <span m="1561620">say,</span> <span m="1563460">I</span>
  <span m="1563640">hold</span> <span m="1563910">him</span> <span
  m="1564120">responsible</span> <span m="1564930">for</span> <span
  m="1565200">these</span> <span m="1566550">excessive</span> <span
  m="1567210">letters</span> <span m="1567840">in</span> <span
  m="1568860">the</span> <span m="1571740">address,</span> <span
  m="1572550">in</span> <span m="1572670">the</span> <span
  m="1572830">URL.</span> <span m="1574260">I</span> <span
  m="1574290">mean,</span> <span m="1574470">he's</span> <span
  m="1574680">made</span> <span m="1575010">us</span> <span
  m="1575220">all</span> <span m="1575610">say</span> <span
  m="1576000">W-W-W</span> <span m="1577920">for</span> <span
  m="1577980">years.</span> <span m="1579090">Find</span> <span
  m="1579390">some</span> <span m="1580110">other</span> <span
  m="1580350">way</span> <span m="1580560">to</span> <span
  m="1580680">say</span> <span m="1580980">it,</span> <span
  m="1581070">but</span> <span m="1581280">it's</span> <span
  m="1581550">not</span> <span m="1582750">easy</span> <span
  m="1583110">to</span> <span m="1583260">say,</span> <span m="1583650">I</span>
  <span m="1583800">think.</span></p><p><span m="1584220">OK,</span> <span
  m="1584760">whatever.</span> <span m="1585690">This</span> <span
  m="1585960">is</span> <span m="1586200">the</span> <span m="1588210">OR</span>
  <span m="1588720">Center</span> <span m="1590160">at</span> <span
  m="1590340">MIT,</span> <span m="1593910">and</span> <span
  m="1594270">then</span> <span m="1594690">it's</span> <span
  m="1596070">academics</span> <span m="1597090">or</span> <span
  m="1597210">something,</span> <span m="1601250">and</span> <span
  m="1601460">then</span> <span m="1601790">it's</span> <span
  m="1602300">something</span> <span m="1602750">like</span> <span
  m="1603590">course</span> <span m="1604030">offerings.</span> <span
  m="1605330">That's</span> <span m="1605570">approximately</span> <span
  m="1606350">right.</span> <span m="1612080">And</span> <span
  m="1612380">since</span> <span m="1612770">they</span> <span
  m="1612950">do</span> <span m="1613220">applied</span> <span
  m="1613670">optimization,</span> <span m="1615920">under</span> <span
  m="1616250">the</span> <span m="1616430">heading</span> <span
  m="1616940">of</span> <span m="1617420">data</span> <span
  m="1617840">analytics</span> <span m="1618650">or</span> <span
  m="1618770">statistics,</span> <span m="1619940">there's</span> <span
  m="1620750">optimization,</span> <span m="1622080">there's</span> <span
  m="1622820">OR,</span> <span m="1624050">Operations</span> <span
  m="1624650">Research,</span> <span m="1625790">other</span> <span
  m="1626360">lists</span> <span m="1626720">but</span> <span
  m="1627170">a</span> <span m="1627290">good</span> <span
  m="1627530">list</span> <span m="1627920">of</span> <span
  m="1628070">courses</span> <span m="1628640">from</span> <span
  m="1630170">many</span> <span m="1630830">departments,</span> <span
  m="1633020">especially</span> <span m="1636700">course</span> <span
  m="1637080">6.</span> <span m="1639200">Course</span> <span
  m="1639460">15</span> <span m="1640400">which</span> <span
  m="1640730">is</span> <span m="1641180">where</span> <span
  m="1641420">the</span> <span m="1641600">operation</span> <span
  m="1642170">and</span> <span m="1642260">research</span> <span
  m="1642650">center</span> <span m="1643570">is,</span> <span
  m="1644000">course</span> <span m="1644330">18,</span> <span
  m="1645260">and</span> <span m="1645440">there</span> <span
  m="1645590">are</span> <span m="1645710">others</span> <span
  m="1646190">in</span> <span m="1647120">course</span> <span
  m="1647510">2</span> <span m="1647900">and</span> <span
  m="1648110">elsewhere.</span> <span m="1649120">Yeah.</span></p><p><span
  m="1654390">Would</span> <span m="1654750">somebody</span> <span
  m="1655140">like</span> <span m="1655320">to</span> <span
  m="1655470">say</span> <span m="1655800">what</span> <span
  m="1656460">course</span> <span m="1657090">you</span> <span
  m="1657270">have</span> <span m="1657450">in</span> <span
  m="1657570">mind</span> <span m="1657930">to</span> <span
  m="1658080">take</span> <span m="1658380">next,</span> <span
  m="1658890">after</span> <span m="1659220">this</span> <span
  m="1659490">one?</span> <span m="1660250">If</span> <span
  m="1661260">you</span> <span m="1662100">looked</span> <span
  m="1663270">ahead</span> <span m="1663600">to</span> <span
  m="1663750">next</span> <span m="1664140">year,</span> <span
  m="1665200">any</span> <span m="1666090">suggestions</span> <span
  m="1666900">of</span> <span m="1667050">what</span> <span
  m="1667260">looks</span> <span m="1667560">like</span> <span
  m="1667740">a</span> <span m="1667830">good</span> <span
  m="1668040">course?</span> <span m="1671340">I</span> <span
  m="1671550">sat</span> <span m="1671880">in</span> <span
  m="1672660">once</span> <span m="1673010">on</span> <span
  m="1673290">6.036,</span> <span m="1674940">the</span> <span
  m="1675090">really</span> <span m="1675450">basic</span> <span
  m="1675870">course,</span> <span m="1676290">and</span> <span
  m="1676890">you</span> <span m="1677540">would</span> <span
  m="1678180">want</span> <span m="1678420">to</span> <span
  m="1678480">go</span> <span m="1679380">higher.</span> <span
  m="1680760">OK.</span></p><p><span m="1684180">Maybe</span> <span
  m="1684510">this</span> <span m="1684750">is</span> <span
  m="1684870">just</span> <span m="1685110">to</span> <span
  m="1685230">say,</span> <span m="1686550">I'd</span> <span
  m="1686760">be</span> <span m="1686970">interested</span> <span
  m="1687450">to</span> <span m="1687570">know</span> <span
  m="1687780">what</span> <span m="1688050">you</span> <span
  m="1688170">do</span> <span m="1688350">next,</span> <span
  m="1688980">what</span> <span m="1689130">your</span> <span
  m="1689280">experience</span> <span m="1689760">is,</span> <span
  m="1690810">or</span> <span m="1691850">I'd</span> <span m="1691990">be</span>
  <span m="1692190">happy</span> <span m="1692490">to</span> <span
  m="1692670">give</span> <span m="1693000">advice.</span> <span
  m="1694270">But</span> <span m="1695340">maybe</span> <span
  m="1695670">my</span> <span m="1696540">general</span> <span
  m="1697020">advice</span> <span m="1697530">is</span> <span
  m="1697770">that</span> <span m="1697920">that's</span> <span
  m="1698250">a</span> <span m="1698340">useful</span> <span
  m="1698820">list</span> <span m="1699270">of</span> <span
  m="1700080">courses.</span> <span m="1703440">OK?</span> <span
  m="1705820">Back</span> <span m="1706090">to</span> <span
  m="1706840">distance</span> <span m="1707440">matrices.</span> <span
  m="1709000">OK,</span> <span m="1709960">so</span> <span
  m="1710380">here's</span> <span m="1710680">the</span> <span
  m="1710770">problem.</span> <span m="1712830">Yeah.</span> <span
  m="1714040">OK,</span> <span m="1714910">I'll</span> <span
  m="1715000">probably</span> <span m="1715390">have</span> <span
  m="1715630">to</span> <span m="1715960">erase</span> <span
  m="1716350">that,</span> <span m="1716620">but</span> <span
  m="1717030">I'll</span> <span m="1717670">leave</span> <span
  m="1717910">it</span> <span m="1718000">for</span> <span m="1718150">a</span>
  <span m="1718210">minute.</span></p><p><span m="1720080">OK.</span> <span
  m="1721550">So</span> <span m="1721730">we</span> <span
  m="1721910">know</span> <span m="1722150">these</span> <span
  m="1722420">distances,</span> <span m="1724910">and</span> <span
  m="1724960">we</span> <span m="1725080">want</span> <span
  m="1725290">to</span> <span m="1725350">find</span> <span
  m="1725650">the</span> <span m="1725800">x's,</span> <span
  m="1726190">so</span> <span m="1726550">let's</span> <span
  m="1726850">call</span> <span m="1727150">this</span> <span
  m="1728180">dij</span> <span m="1729280">maybe.</span> <span
  m="1733240">So</span> <span m="1733390">we</span> <span
  m="1733510">have</span> <span m="1733660">a</span> <span m="1733750">D</span>
  <span m="1734110">matrix,</span> <span m="1735070">and</span> <span
  m="1735280">we</span> <span m="1735430">want</span> <span
  m="1735640">to</span> <span m="1735700">find</span> <span m="1736080">a</span>
  <span m="1736150">position</span> <span m="1736810">matrix,</span> <span
  m="1738010">let</span> <span m="1738130">me</span> <span
  m="1738250">just</span> <span m="1738460">see</span> <span
  m="1738760">what</span> <span m="1739000">notation.</span> <span
  m="1740060">So</span> <span m="1740200">this</span> <span
  m="1740470">is</span> <span m="1741160">section</span> <span
  m="1741910">3.9,</span> <span m="1745030">no</span> <span
  m="1745180">4.9,</span> <span m="1747850">previously</span> <span
  m="1748510">3.9,</span> <span m="1749410">but</span> <span
  m="1749710">chapters</span> <span m="1750220">3</span> <span
  m="1750460">and</span> <span m="1750580">4</span> <span m="1750810">got</span>
  <span m="1751190">switched.</span> <span m="1753130">Maybe</span> <span
  m="1753520">actually,</span> <span m="1754240">yeah,</span> <span
  m="1754660">I</span> <span m="1754750">think</span> <span
  m="1755020">it's</span> <span m="1756550">8</span> <span m="1756790">or</span>
  <span m="1756910">9</span> <span m="1757270">or</span> <span
  m="1757420">10,</span> <span m="1759250">other</span> <span
  m="1760300">topics</span> <span m="1760840">are</span> <span
  m="1762370">trying</span> <span m="1762700">to</span> <span
  m="1762820">find</span> <span m="1763120">their</span> <span
  m="1763270">way</span> <span m="1763630">in.</span> <span
  m="1764640">OK.</span> <span m="1765220">So</span> <span
  m="1765430">that's</span> <span m="1765760">the</span> <span
  m="1767260">reference</span> <span m="1767920">on</span> <span
  m="1769210">the</span> <span m="1769270">web,</span> <span
  m="1769640">and</span> <span m="1769660">I'll</span> <span
  m="1769870">get</span> <span m="1770110">these</span> <span
  m="1770710">sections</span> <span m="1771280">onto</span> <span
  m="1771390">Stellar.</span></p><p><span m="1772480">OK.</span> <span
  m="1773500">So</span> <span m="1773710">the</span> <span
  m="1773800">question</span> <span m="1774340">is,</span> <span
  m="1775360">can</span> <span m="1775750">we</span> <span
  m="1775930">recover</span> <span m="1776440">the</span> <span
  m="1776590">positions</span> <span m="1777760">from</span> <span
  m="1778000">the</span> <span m="1778120">distances?</span> <span
  m="1780480">In</span> <span m="1780630">fact,</span> <span
  m="1780900">there's</span> <span m="1781140">also</span> <span
  m="1781470">a</span> <span m="1781500">question,</span> <span
  m="1781980">are</span> <span m="1782220">there</span> <span
  m="1782430">always</span> <span m="1782880">positions</span> <span
  m="1785050">from</span> <span m="1785680">given</span> <span
  m="1786040">distances?</span> <span m="1788400">And</span> <span
  m="1789370">I</span> <span m="1789580">mentioned</span> <span
  m="1790090">several</span> <span m="1791110">applications.</span> <span
  m="1791980">I've</span> <span m="1792130">already</span> <span
  m="1792460">spoken</span> <span m="1792910">about</span> <span
  m="1793150">wireless</span> <span m="1793660">sensor</span> <span
  m="1794110">networks,</span> <span m="1796630">where</span> <span
  m="1796810">you</span> <span m="1798040">can</span> <span
  m="1798190">measure</span> <span m="1798550">travel</span> <span
  m="1798940">times</span> <span m="1799840">between</span> <span
  m="1800320">them,</span> <span m="1800860">between</span> <span
  m="1801280">the</span> <span m="1801400">sensors.</span> <span
  m="1802120">And</span> <span m="1802240">then</span> <span
  m="1803020">that</span> <span m="1803230">gives</span> <span
  m="1803530">you</span> <span m="1803710">the</span> <span
  m="1804250">distances,</span> <span m="1805210">and</span> <span
  m="1805330">then</span> <span m="1805690">you</span> <span
  m="1806410">use</span> <span m="1806800">this</span> <span
  m="1807820">neat</span> <span m="1808450">little</span> <span
  m="1808690">bit</span> <span m="1808930">of</span> <span
  m="1809020">math</span> <span m="1809560">to</span> <span
  m="1809740">find</span> <span m="1810160">the</span> <span
  m="1810280">positions.</span></p><p><span m="1811750">Well,</span> <span
  m="1811930">of</span> <span m="1812050">course,</span> <span
  m="1812380">you</span> <span m="1812470">can't</span> <span
  m="1812770">find</span> <span m="1813070">the</span> <span
  m="1813160">positions</span> <span m="1815050">uniquely.</span> <span
  m="1817270">Clearly,</span> <span m="1818650">you</span> <span
  m="1818860">could</span> <span m="1819430">any</span> <span
  m="1819790">rigid</span> <span m="1820420">motion</span> <span
  m="1820960">of</span> <span m="1821110">all</span> <span
  m="1821380">the</span> <span m="1821500">positions.</span> <span
  m="1823780">If</span> <span m="1823930">I</span> <span m="1824050">have</span>
  <span m="1824350">a</span> <span m="1824410">set</span> <span
  m="1824710">of</span> <span m="1824860">positions,</span> <span
  m="1827770">what</span> <span m="1827920">am</span> <span m="1828040">I</span>
  <span m="1828100">going</span> <span m="1828190">to</span> <span
  m="1828340">call</span> <span m="1828580">that,</span> <span
  m="1828880">x?</span> <span m="1830410">So</span> <span
  m="1831400">I'll</span> <span m="1831670">write</span> <span
  m="1832000">here,</span> <span m="1832270">and</span> <span
  m="1833060">so</span> <span m="1833910">I'm</span> <span
  m="1834100">given</span> <span m="1834510">the</span> <span
  m="1834610">D</span> <span m="1834970">matrix.</span> <span
  m="1840440">That's</span> <span m="1840840">distances,</span> <span
  m="1842190">and</span> <span m="1842340">the</span> <span
  m="1842460">job</span> <span m="1842910">is</span> <span m="1843090">to</span>
  <span m="1843210">find</span> <span m="1843750">the</span> <span
  m="1844770">X</span> <span m="1845160">matrix</span> <span
  m="1849000">which</span> <span m="1849450">gives</span> <span
  m="1849810">the</span> <span m="1849930">positions.</span></p><p><span
  m="1854150">And</span> <span m="1855140">what</span> <span
  m="1855410">I'm</span> <span m="1855890">just</span> <span
  m="1856250">going</span> <span m="1856360">to</span> <span
  m="1856490">say,</span> <span m="1856790">and</span> <span
  m="1856910">you</span> <span m="1857060">already</span> <span
  m="1857780">saw</span> <span m="1859370">it</span> <span
  m="1859520">your</span> <span m="1859640">mind--</span> <span
  m="1860120">that</span> <span m="1860960">if</span> <span m="1861170">I</span>
  <span m="1861260">have</span> <span m="1861470">a</span> <span
  m="1861530">set</span> <span m="1861770">of</span> <span
  m="1861860">positions,</span> <span m="1862580">I</span> <span
  m="1862730">could</span> <span m="1863360">do</span> <span
  m="1863540">a</span> <span m="1863600">translation.</span> <span
  m="1865880">The</span> <span m="1865970">distances</span> <span
  m="1866630">wouldn't</span> <span m="1866930">change,</span> <span
  m="1867910">or</span> <span m="1868010">I</span> <span
  m="1868130">could</span> <span m="1868340">do</span> <span
  m="1868550">a</span> <span m="1868640">rigid</span> <span
  m="1869180">motion,</span> <span m="1870590">a</span> <span
  m="1870920">rigid</span> <span m="1872420">rotation.</span> <span
  m="1873980">So</span> <span m="1874580">positions</span> <span
  m="1877220">are</span> <span m="1877310">not</span> <span
  m="1877550">unique,</span> <span m="1878080">but</span> <span
  m="1879020">I</span> <span m="1879140">can</span> <span
  m="1880370">come</span> <span m="1880640">closer</span> <span
  m="1881180">by</span> <span m="1881420">saying,</span> <span
  m="1881840">put</span> <span m="1882110">the</span> <span
  m="1883880">centroid</span> <span m="1884690">at</span> <span
  m="1884960">the</span> <span m="1885170">origin,</span> <span
  m="1885710">or</span> <span m="1885830">something</span> <span
  m="1886160">like</span> <span m="1886400">that.</span> <span
  m="1886640">That</span> <span m="1886820">will</span> <span
  m="1887000">take</span> <span m="1887360">out</span> <span
  m="1887630">the</span> <span m="1888140">translations</span> <span
  m="1889010">at</span> <span m="1889130">least.</span></p><p><span
  m="1889820">OK.</span> <span m="1890180">So</span> <span
  m="1890380">find</span> <span m="1890660">the</span> <span
  m="1890810">X</span> <span m="1891020">matrix.</span> <span
  m="1891500">That's</span> <span m="1891770">the</span> <span
  m="1891890">job.</span> <span m="1892550">OK,</span> <span
  m="1893450">and</span> <span m="1893630">I</span> <span m="1893690">was</span>
  <span m="1893870">going</span> <span m="1893980">to--</span> <span
  m="1894170">before</span> <span m="1894620">I</span> <span
  m="1895070">started</span> <span m="1895460">on</span> <span
  m="1895580">that--</span> <span m="1896390">the</span> <span
  m="1896510">shapes</span> <span m="1897020">of</span> <span
  m="1897200">molecules</span> <span m="1898040">is</span> <span
  m="1898220">another</span> <span m="1898580">application.</span> <span
  m="1899910">Nuclear</span> <span m="1900680">magnetic</span> <span
  m="1901280">resonance</span> <span m="1901940">gives</span> <span
  m="1902240">distances,</span> <span m="1904120">gives</span> <span
  m="1904390">d,</span> <span m="1905260">and</span> <span
  m="1905470">then</span> <span m="1905710">we</span> <span
  m="1905950">find</span> <span m="1906310">the</span> <span
  m="1906430">positions</span> <span m="1907410">x.</span> <span
  m="1909280">And</span> <span m="1909490">of</span> <span
  m="1909580">course,</span> <span m="1909850">there's</span> <span
  m="1910060">a</span> <span m="1910110">noise</span> <span
  m="1910540">in</span> <span m="1910660">there,</span> <span
  m="1911770">and</span> <span m="1912010">sometimes</span> <span
  m="1912610">missing</span> <span m="1913000">entries.</span></p><p><span
  m="1914350">And</span> <span m="1914740">machine</span> <span
  m="1915190">learning</span> <span m="1915610">could</span> <span
  m="1915850">be</span> <span m="1916150">just</span> <span
  m="1916780">described</span> <span m="1918100">also</span> <span
  m="1918580">as</span> <span m="1919900">you're</span> <span
  m="1920170">given</span> <span m="1920500">a</span> <span
  m="1920560">whole</span> <span m="1920710">lot</span> <span
  m="1920890">of</span> <span m="1920950">points</span> <span
  m="1921400">in</span> <span m="1921580">space,</span> <span
  m="1922090">feature</span> <span m="1922510">vectors</span> <span
  m="1923080">in</span> <span m="1923290">a</span> <span
  m="1923320">high-dimensional</span> <span m="1924370">space.</span> <span
  m="1924760">Actually,</span> <span m="1925090">this</span> <span
  m="1925300">is</span> <span m="1925450">a</span> <span m="1925540">big</span>
  <span m="1925810">deal.</span> <span m="1926740">You're</span> <span
  m="1926890">given</span> <span m="1927220">a</span> <span
  m="1927280">whole</span> <span m="1927520">lot</span> <span
  m="1927820">of</span> <span m="1928810">points</span> <span
  m="1929590">with</span> <span m="1930850">in</span> <span
  m="1931060">high-dimensional</span> <span m="1931990">space,</span> <span
  m="1933790">and</span> <span m="1933970">those</span> <span
  m="1934300">are</span> <span m="1934900">related.</span> <span
  m="1937210">They</span> <span m="1937390">sort</span> <span
  m="1937570">of</span> <span m="1937720">come</span> <span
  m="1937990">together</span> <span m="1938410">naturally,</span> <span
  m="1939310">so</span> <span m="1939460">they</span> <span
  m="1939640">tend</span> <span m="1939910">to</span> <span
  m="1940030">fit</span> <span m="1940390">on</span> <span m="1940570">a</span>
  <span m="1941770">surface</span> <span m="1944090">in</span> <span
  m="1944330">high-dimensional</span> <span m="1945170">space,</span> <span
  m="1945620">a</span> <span m="1945710">low-dimensional</span> <span
  m="1946640">surface</span> <span m="1947180">in</span> <span
  m="1947320">high-dimensional</span> <span
  m="1948080">space.</span></p><p><span m="1948920">And</span> <span
  m="1949070">really,</span> <span m="1949970">a</span> <span
  m="1950060">lot</span> <span m="1950360">of</span> <span
  m="1950450">mathematics</span> <span m="1951140">is</span> <span
  m="1951290">devoted</span> <span m="1951740">to</span> <span
  m="1951860">finding</span> <span m="1952910">that</span> <span
  m="1954050">low-dimensional,</span> <span m="1955370">that</span> <span
  m="1955670">subspace,</span> <span m="1956720">but</span> <span
  m="1956930">it</span> <span m="1957620">could</span> <span
  m="1957800">be</span> <span m="1957950">curved.</span> <span
  m="1958430">So</span> <span m="1958640">subspace</span> <span
  m="1959420">is</span> <span m="1959990">not</span> <span
  m="1960530">the</span> <span m="1961610">correct</span> <span
  m="1962090">word.</span> <span m="1962630">Really,</span> <span
  m="1962960">manifold,</span> <span m="1964310">curved</span> <span
  m="1964820">manifold</span> <span m="1965600">is</span> <span
  m="1965820">what</span> <span m="1966110">a</span> <span
  m="1967160">geometer</span> <span m="1967940">would</span> <span
  m="1968180">say.</span> <span m="1969230">That</span> <span
  m="1969770">is</span> <span m="1970160">close</span> <span
  m="1970700">to</span> <span m="1971360">all</span> <span
  m="1971570">the--</span> <span m="1971900">it's</span> <span
  m="1972050">smooth</span> <span m="1973220">and</span> <span
  m="1973400">close</span> <span m="1973730">to</span> <span
  m="1973880">all</span> <span m="1974030">the</span> <span
  m="1974150">points,</span> <span m="1975110">and</span> <span
  m="1975260">you</span> <span m="1975410">could</span> <span
  m="1976430">linearize</span> <span m="1977390">it.</span> <span
  m="1978290">You</span> <span m="1978410">could</span> <span
  m="1978620">flatten</span> <span m="1979100">it</span> <span
  m="1979250">out,</span> <span m="1980180">and</span> <span
  m="1981440">then</span> <span m="1981680">you</span> <span
  m="1981830">have</span> <span m="1982580">a</span> <span
  m="1982670">much</span> <span m="1983060">reduced</span> <span
  m="1983600">problem.</span></p><p><span m="1984050">The</span> <span
  m="1984170">dimension</span> <span m="1984740">is</span> <span
  m="1984890">reduced</span> <span m="1985430">from</span> <span
  m="1985670">the</span> <span m="1986090">original</span> <span
  m="1986630">dimension</span> <span m="1987320">of</span> <span
  m="1989240">where</span> <span m="1989450">the</span> <span
  m="1989600">points</span> <span m="1990110">lie</span> <span
  m="1991490">with</span> <span m="1991700">a</span> <span
  m="1991730">lot</span> <span m="1992030">of</span> <span
  m="1992120">data</span> <span m="1993050">to</span> <span
  m="1993500">the</span> <span m="1993950">true</span> <span
  m="1994430">dimension</span> <span m="1994970">of</span> <span
  m="1995060">the</span> <span m="1995180">problem</span> <span
  m="1996350">which,</span> <span m="1997190">of</span> <span
  m="1997250">course,</span> <span m="1997510">sets</span> <span
  m="1997720">of</span> <span m="1997810">points</span> <span
  m="1998150">were</span> <span m="1998330">all</span> <span
  m="1998510">on</span> <span m="1998660">a</span> <span
  m="1998720">straight</span> <span m="1999050">line.</span> <span
  m="1999290">The</span> <span m="1999410">true</span> <span
  m="1999650">dimension</span> <span m="2000070">of</span> <span
  m="2000130">the</span> <span m="2000220">problem</span> <span
  m="2000520">would</span> <span m="2000730">be</span> <span
  m="2000910">1.</span> <span m="2002630">So</span> <span m="2002770">we</span>
  <span m="2002950">have</span> <span m="2003160">to</span> <span
  m="2003280">discover</span> <span m="2004810">this.</span> <span
  m="2009230">We</span> <span m="2009340">also</span> <span
  m="2009700">have</span> <span m="2009850">to</span> <span
  m="2009970">find</span> <span m="2010330">that</span> <span
  m="2011260">dimension</span> <span m="2011970">d.</span> <span
  m="2013520">OK,</span> <span m="2013870">so</span> <span
  m="2014050">how</span> <span m="2014170">do</span> <span m="2014260">we</span>
  <span m="2014380">do</span> <span m="2014530">it?</span></p><p><span
  m="2018160">So</span> <span m="2018340">it's</span> <span m="2018460">a</span>
  <span m="2018550">classical</span> <span m="2019960">problem.</span> <span
  m="2020420">It</span> <span m="2020500">just</span> <span
  m="2021100">has</span> <span m="2021340">a</span> <span
  m="2021400">neat</span> <span m="2021700">answer.</span> <span
  m="2022330">OK.</span> <span m="2026870">All</span> <span
  m="2027350">right,</span> <span m="2028430">so</span> <span
  m="2028610">let's</span> <span m="2028850">recognize</span> <span
  m="2030860">the</span> <span m="2032630">connection</span> <span
  m="2033170">between</span> <span m="2033590">distances</span> <span
  m="2034280">and</span> <span m="2034430">positions.</span> <span
  m="2035750">So</span> <span m="2035930">dij</span> <span m="2038810">is</span>
  <span m="2039230">the</span> <span m="2041840">square</span> <span
  m="2042410">distance</span> <span m="2042920">between</span> <span
  m="2043430">them,</span> <span m="2044090">so</span> <span
  m="2044270">that</span> <span m="2044600">is</span> <span
  m="2045620">xi</span> <span m="2046790">dot</span> <span m="2047120">xi</span>
  <span m="2048860">minus</span> <span m="2050600">xi</span> <span
  m="2052369">to</span> <span m="2052849">xj</span> <span
  m="2054290">minus</span> <span m="2055040">xj,</span> <span
  m="2056240">xi</span> <span m="2057980">plus</span> <span
  m="2058880">xj,</span> <span m="2059179">xj.</span> <span
  m="2062940">OK.</span> <span m="2066210">Is</span> <span
  m="2066330">that</span> <span m="2066480">right?</span> <span
  m="2068667">Yes.</span></p><p><span m="2070635">OK.</span> <span
  m="2073600">So</span> <span m="2073900">those</span> <span
  m="2074320">are</span> <span m="2074770">the</span> <span
  m="2074949">dij's</span> <span m="2075850">in</span> <span
  m="2076000">a</span> <span m="2076060">matrix,</span> <span
  m="2077219">and</span> <span m="2077340">these</span> <span
  m="2077620">are</span> <span m="2077770">entries</span> <span
  m="2082100">in</span> <span m="2082400">the</span> <span
  m="2082520">matrix</span> <span m="2083139">D.</span> <span
  m="2084730">OK.</span> <span m="2088070">Well,</span> <span
  m="2088550">these</span> <span m="2088850">entries</span> <span
  m="2092139">depend</span> <span m="2094570">only</span> <span
  m="2094900">on</span> <span m="2095230">i.</span> <span
  m="2097560">They're</span> <span m="2097780">the</span> <span
  m="2097900">same</span> <span m="2098290">for</span> <span
  m="2098550">every</span> <span m="2098900">j.</span> <span
  m="2099820">So</span> <span m="2100060">this</span> <span
  m="2100360">is</span> <span m="2100540">going</span> <span
  m="2100780">to</span> <span m="2100840">be--</span> <span
  m="2101230">this</span> <span m="2101560">will</span> <span
  m="2101840">this</span> <span m="2102700">part</span> <span
  m="2103480">will</span> <span m="2103660">produce--</span> <span
  m="2104200">I'll</span> <span m="2104290">rank</span> <span
  m="2104710">one</span> <span m="2105040">matrix.</span> <span
  m="2109690">Because</span> <span m="2110110">things</span> <span
  m="2110470">depend</span> <span m="2110860">not only</span> <span
  m="2111220">on</span> <span m="2111400">the</span> <span
  m="2111500">row</span> <span m="2111900">but</span> <span
  m="2112060">not</span> <span m="2112360">on</span> <span m="2112540">j,</span>
  <span m="2113020">the</span> <span m="2113120">column</span> <span
  m="2113530">number,</span> <span m="2114310">so</span> <span
  m="2117540">columns</span> <span m="2120280">repeated.</span></p><p><span
  m="2127970">Yeah,</span> <span m="2128750">and</span> <span
  m="2128990">this</span> <span m="2131020">produces</span> <span
  m="2133210">similarly</span> <span m="2134420">something</span> <span
  m="2134790">that</span> <span m="2134980">depends</span> <span
  m="2135430">only</span> <span m="2135700">on</span> <span
  m="2135880">j,</span> <span m="2136330">only</span> <span
  m="2136630">on</span> <span m="2136750">the</span> <span
  m="2136870">column</span> <span m="2137260">number.</span> <span
  m="2139550">So</span> <span m="2139630">the</span> <span
  m="2139720">rows</span> <span m="2140140">are</span> <span
  m="2140290">all</span> <span m="2140440">the</span> <span
  m="2140530">same,</span> <span m="2142390">so</span> <span
  m="2142570">this</span> <span m="2142780">is</span> <span
  m="2142960">also</span> <span m="2143350">a</span> <span
  m="2143440">rank</span> <span m="2143770">one</span> <span
  m="2144040">matrix</span> <span m="2146450">with</span> <span
  m="2148010">all</span> <span m="2150020">repeated,</span> <span
  m="2151220">all</span> <span m="2151460">the</span> <span
  m="2151580">same</span> <span m="2153710">rows.</span> <span
  m="2155730">Because</span> <span m="2157610">if</span> <span
  m="2157760">I</span> <span m="2157880">change</span> <span
  m="2158270">i,</span> <span m="2158690">nothing</span> <span
  m="2159110">changes</span> <span m="2159650">in</span> <span
  m="2159830">a</span> <span m="2160510">product.</span> <span
  m="2161180">So</span> <span m="2161390">really,</span> <span
  m="2162350">these</span> <span m="2162740">are</span> <span
  m="2162830">the</span> <span m="2162980">terms</span> <span
  m="2163610">that</span> <span m="2166630">produce</span> <span
  m="2169130">most</span> <span m="2169490">of</span> <span
  m="2169550">the</span> <span m="2169700">matrix,</span> <span
  m="2171620">the</span> <span m="2172010">significant</span> <span
  m="2172730">part</span> <span m="2172970">of</span> <span
  m="2173030">the</span> <span m="2173150">matrix.</span></p><p><span
  m="2173900">OK.</span> <span m="2174890">So</span> <span
  m="2179150">what</span> <span m="2179360">do</span> <span
  m="2179450">we</span> <span m="2179630">do</span> <span
  m="2179810">with</span> <span m="2179960">those?</span> <span
  m="2186710">So</span> <span m="2186950">let's</span> <span
  m="2188030">see,</span> <span m="2188560">did</span> <span
  m="2188780">I</span> <span m="2188870">give</span> <span m="2189080">a</span>
  <span m="2189170">name</span> <span m="2189590">for</span> <span
  m="2189770">the</span> <span m="2189920">matrix</span> <span
  m="2190640">that</span> <span m="2190790">I'm</span> <span
  m="2190970">looking</span> <span m="2191420">for?</span> <span
  m="2191690">I</span> <span m="2191810">think</span> <span
  m="2193640">in</span> <span m="2193970">the</span> <span
  m="2194090">notes</span> <span m="2194540">I</span> <span
  m="2194690">call</span> <span m="2195050">it</span> <span
  m="2196370">X.</span> <span m="2199190">So</span> <span m="2200210">I'm</span>
  <span m="2200330">given</span> <span m="2200690">D,</span> <span
  m="2202760">find</span> <span m="2203210">X.</span></p><p><span
  m="2209930">And</span> <span m="2210140">what</span> <span
  m="2210380">I'll</span> <span m="2210590">actually</span> <span
  m="2211190">find--</span> <span m="2212720">you</span> <span
  m="2212840">can</span> <span m="2213020">see</span> <span
  m="2213260">it</span> <span m="2213350">coming</span> <span
  m="2213740">here--</span> <span m="2214620">is</span> <span
  m="2214820">actually</span> <span m="2217070">find</span> <span
  m="2220160">X</span> <span m="2220520">transpose</span> <span
  m="2221330">X.</span> <span m="2223750">Because</span> <span
  m="2224290">what</span> <span m="2224750">I'm</span> <span
  m="2225680">given</span> <span m="2226040">is</span> <span
  m="2226250">dot</span> <span m="2226490">products</span> <span
  m="2227660">of</span> <span m="2228310">X's.</span> <span
  m="2231530">So</span> <span m="2231920">I</span> <span
  m="2232400">would</span> <span m="2232820">like</span> <span
  m="2233030">to</span> <span m="2235400">discover</span> <span
  m="2236030">out</span> <span m="2236690">of</span> <span
  m="2236810">all</span> <span m="2236960">this</span> <span
  m="2237430">what</span> <span m="2238130">xi</span> <span
  m="2239180">dotted</span> <span m="2239600">with</span> <span
  m="2239780">xj</span> <span m="2240350">is.</span> <span
  m="2240870">That'll</span> <span m="2241130">be</span> <span
  m="2241400">the</span> <span m="2242300">correct</span> <span
  m="2242615">dot</span> <span m="2242930">product.</span> <span
  m="2243380">Let's</span> <span m="2243650">call</span> <span
  m="2244010">this</span> <span m="2244310">matrix</span> <span
  m="2246530">G</span> <span m="2247130">for</span> <span m="2247340">the</span>
  <span m="2247700">dot</span> <span m="2247970">product</span> <span
  m="2248390">matrix,</span> <span m="2249470">and</span> <span
  m="2249620">then</span> <span m="2253850">find</span> <span
  m="2256130">X</span> <span m="2256700">from</span> <span
  m="2257150">G.</span></p><p><span m="2260780">So</span> <span
  m="2263180">this</span> <span m="2263360">is</span> <span m="2263510">a</span>
  <span m="2263570">nice</span> <span m="2263990">argument.</span> <span
  m="2264960">So</span> <span m="2265490">what</span> <span
  m="2265700">this</span> <span m="2266060">tells</span> <span
  m="2266450">me</span> <span m="2266720">is</span> <span
  m="2267440">some</span> <span m="2267740">information</span> <span
  m="2268460">about</span> <span m="2268760">dot</span> <span
  m="2269030">products.</span> <span m="2270230">So</span> <span
  m="2270410">this</span> <span m="2270650">is</span> <span
  m="2270800">telling</span> <span m="2271130">me</span> <span
  m="2271340">something</span> <span m="2271850">about</span> <span
  m="2272270">the</span> <span m="2272420">G</span> <span
  m="2272720">matrix,</span> <span m="2273920">the</span> <span
  m="2274070">X</span> <span m="2274280">transpose</span> <span
  m="2274910">X</span> <span m="2275180">matrix.</span> <span
  m="2276110">And</span> <span m="2276230">then</span> <span
  m="2276350">once</span> <span m="2276680">I</span> <span
  m="2276770">know</span> <span m="2277040">G,</span> <span
  m="2277840">then</span> <span m="2278060">it's</span> <span
  m="2278300">a</span> <span m="2278390">separate</span> <span
  m="2278960">step</span> <span m="2279800">to</span> <span
  m="2279950">find</span> <span m="2280400">X.</span> <span
  m="2281390">And</span> <span m="2281540">of</span> <span
  m="2281630">course,</span> <span m="2282230">this</span> <span
  m="2282470">is</span> <span m="2282620">the</span> <span
  m="2282710">point</span> <span m="2283100">at</span> <span
  m="2283220">which</span> <span m="2283520">X</span> <span
  m="2284420">is</span> <span m="2284600">not</span> <span
  m="2284900">unique.</span></p><p><span m="2286640">If</span> <span
  m="2286850">I</span> <span m="2287000">put</span> <span m="2287300">it</span>
  <span m="2287330">in</span> <span m="2287450">a</span> <span
  m="2287510">rotation</span> <span m="2288320">into</span> <span
  m="2288560">X,</span> <span m="2289460">then</span> <span
  m="2289700">that</span> <span m="2289910">rotation</span> <span
  m="2290600">q,</span> <span m="2291800">I'll</span> <span
  m="2292220">see</span> <span m="2292460">a</span> <span m="2292550">q</span>
  <span m="2292820">transpose</span> <span m="2293450">q,</span> <span
  m="2293780">and</span> <span m="2293900">it'll</span> <span
  m="2294080">disappear.</span> <span m="2295850">So</span> <span
  m="2296450">I'm</span> <span m="2296900">free</span> <span
  m="2297290">to</span> <span m="2297470">rotate</span> <span
  m="2298160">the</span> <span m="2298730">X's,</span> <span
  m="2299240">because</span> <span m="2299600">that</span> <span
  m="2299720">doesn't</span> <span m="2300080">change</span> <span
  m="2300470">the</span> <span m="2300620">dot</span> <span
  m="2300860">product.</span> <span m="2302420">So</span> <span
  m="2302600">it's</span> <span m="2302780">G</span> <span
  m="2303080">that</span> <span m="2303290">I</span> <span
  m="2303380">want</span> <span m="2303560">to</span> <span
  m="2303650">know,</span> <span m="2304790">and</span> <span
  m="2304910">this</span> <span m="2305120">tells</span> <span
  m="2305420">me</span> <span m="2305570">something</span> <span
  m="2305990">about</span> <span m="2306260">G, and</span> <span
  m="2306740">this</span> <span m="2306950">tells</span> <span
  m="2307220">me</span> <span m="2307400">something</span> <span
  m="2307820">about</span> <span m="2308060">G.</span> <span
  m="2311252">And</span> <span m="2311710">so</span> <span
  m="2311970">does</span> <span m="2312160">that,</span> <span
  m="2312720">but</span> <span m="2313130">that's</span> <span
  m="2313390">what</span> <span m="2313660">I</span> <span
  m="2313780">have</span> <span m="2314020">to</span> <span
  m="2315470">see.</span></p><p><span m="2316480">So</span> <span
  m="2316660">what</span> <span m="2317290">do</span> <span
  m="2317390">those</span> <span m="2317680">tell</span> <span
  m="2317920">me?</span> <span m="2320170">Let's</span> <span
  m="2320350">see.</span> <span m="2320950">Let</span> <span
  m="2321100">me</span> <span m="2321250">write</span> <span
  m="2321490">down</span> <span m="2321820">what</span> <span
  m="2322060">I</span> <span m="2322780">have</span> <span
  m="2323140">here.</span> <span m="2330060">So</span> <span
  m="2330300">let's</span> <span m="2330510">say</span> <span
  m="2330720">a</span> <span m="2330810">diagonal</span> <span
  m="2331470">matrix</span> <span m="2337520">with</span> <span
  m="2337760">Dii</span> <span m="2339020">as</span> <span
  m="2339440">the</span> <span m="2340220">inner</span> <span
  m="2340460">product</span> <span m="2340940">xi</span> <span
  m="2341810">with</span> <span m="2342020">xi</span> <span
  m="2346660">that</span> <span m="2347530">we're</span> <span
  m="2347880">getting</span> <span m="2348200">partial</span> <span
  m="2348710">information</span> <span m="2349370">from</span> <span
  m="2349640">here.</span></p><p><span m="2350120">So</span> <span
  m="2350810">is</span> <span m="2350930">that</span> <span
  m="2351110">OK?</span> <span m="2351530">I'm</span> <span
  m="2351740">introducing</span> <span m="2352370">that</span> <span
  m="2353060">notation,</span> <span m="2354690">because</span> <span
  m="2354980">this</span> <span m="2355220">is</span> <span
  m="2355370">now</span> <span m="2355630">going</span> <span
  m="2355760">to</span> <span m="2355850">tell</span> <span
  m="2356090">me</span> <span m="2356330">that</span> <span
  m="2356510">my</span> <span m="2356750">D</span> <span
  m="2357050">matrix</span> <span m="2359030">is--</span> <span
  m="2360560">so</span> <span m="2360770">what</span> <span
  m="2361070">is</span> <span m="2361280">that?</span> <span
  m="2362390">So</span> <span m="2362600">this</span> <span
  m="2362900">is</span> <span m="2363560">the</span> <span
  m="2363920">diagonal</span> <span m="2364640">matrix.</span> <span
  m="2365660">Maybe</span> <span m="2365930">it's</span> <span
  m="2366110">just</span> <span m="2366410">a</span> <span
  m="2366470">vector,</span> <span m="2366950">I</span> <span
  m="2367030">should</span> <span m="2367240">say.</span> <span
  m="2370490">Yeah.</span> <span m="2379160">Yeah,</span> <span
  m="2380390">so</span> <span m="2380690">can</span> <span m="2380960">I</span>
  <span m="2381020">write</span> <span m="2381260">down</span> <span
  m="2381470">the</span> <span m="2381560">equation</span> <span
  m="2382070">that</span> <span m="2384340">is</span> <span
  m="2384530">fundamental</span> <span m="2385220">here,</span> <span
  m="2386060">and</span> <span m="2386210">then</span> <span
  m="2387740">we'll</span> <span m="2387920">figure</span> <span
  m="2388250">out</span> <span m="2388370">what</span> <span
  m="2388580">it</span> <span m="2388670">means.</span></p><p><span
  m="2389750">So</span> <span m="2389960">it's</span> <span
  m="2390110">an</span> <span m="2390800">equation</span> <span
  m="2391520">for</span> <span m="2392840">G,</span> <span
  m="2396560">for</span> <span m="2396770">the</span> <span
  m="2396950">dot</span> <span m="2397220">product</span> <span
  m="2397670">matrix.</span> <span m="2398600">OK,</span> <span
  m="2399110">let</span> <span m="2399260">me</span> <span
  m="2399440">make</span> <span m="2399800">space</span> <span
  m="2400280">for</span> <span m="2400460">that</span> <span
  m="2400670">equation.</span> <span m="2405410">I</span> <span
  m="2405560">believe</span> <span m="2406040">that</span> <span
  m="2406190">we</span> <span m="2406370">can</span> <span
  m="2406550">get</span> <span m="2406820">the</span> <span
  m="2406940">dot</span> <span m="2407240">product</span> <span
  m="2407660">matrix</span> <span m="2408300">which</span> <span
  m="2408500">I'm</span> <span m="2408650">calling</span> <span
  m="2409100">G</span> <span m="2409640">as--</span> <span
  m="2414380">according</span> <span m="2414830">to</span> <span
  m="2414950">this,</span> <span m="2416330">it's</span> <span
  m="2416570">minus</span> <span m="2417320">1/2</span> <span
  m="2417980">of</span> <span m="2418100">the</span> <span m="2418250">D</span>
  <span m="2418580">matrix</span> <span m="2420680">plus</span> <span
  m="2421700">1/2</span> <span m="2422810">of</span> <span
  m="2423200">the</span> <span m="2424430">1's</span> <span
  m="2426900">times</span> <span m="2427830">the</span> <span
  m="2429144">d,</span> <span m="2430390">the</span> <span
  m="2430760">diagonal</span> <span m="2431630">d.</span> <span
  m="2433070">And</span> <span m="2433370">it's</span> <span
  m="2434180">plus</span> <span m="2434780">1/2</span> <span
  m="2435950">of</span> <span m="2436310">the</span> <span m="2440450">d</span>
  <span m="2442340">times</span> <span m="2442840">the</span> <span
  m="2442960">1's.</span> <span m="2448460">That's</span> <span
  m="2448730">a</span> <span m="2448790">matrix</span> <span
  m="2449570">with</span> <span m="2451640">constant</span> <span
  m="2452120">rows.</span></p><p><span m="2455390">This</span> <span
  m="2456140">here</span> <span m="2456710">is</span> <span
  m="2458060">coming</span> <span m="2458420">from</span> <span
  m="2458600">there.</span> <span m="2459860">This</span> <span
  m="2460130">is</span> <span m="2460280">a</span> <span
  m="2460340">matrix</span> <span m="2460910">with</span> <span
  m="2461120">always</span> <span m="2461540">the</span> <span
  m="2461630">same</span> <span m="2461990">columns,</span> <span
  m="2470310">or</span> <span m="2470540">let</span> <span m="2470690">me
  see.</span> <span m="2471020">No,</span> <span m="2471200">I</span> <span
  m="2471290">haven't</span> <span m="2472340">got</span> <span
  m="2472520">those</span> <span m="2472790">right</span> <span
  m="2473180">yet.</span> <span m="2473990">I</span> <span
  m="2474110">mean,</span> <span m="2475880">I</span> <span
  m="2476300">want</span> <span m="2476540">these</span> <span
  m="2476780">to</span> <span m="2476900">be</span> <span
  m="2477050">rank</span> <span m="2477380">1</span> <span
  m="2477590">matrices,</span> <span m="2478190">so</span> <span
  m="2478910">it's</span> <span m="2479180">this</span> <span
  m="2479540">one.</span> <span m="2481100">Let</span> <span
  m="2481490">me</span> <span m="2481640">fix</span> <span
  m="2481970">that.</span></p><p><span m="2492780">1,</span> <span
  m="2493230">1,</span> <span m="2493620">1,</span> <span m="2493980">1</span>
  <span m="2495360">times</span> <span m="2495870">d</span> <span
  m="2496320">transpose,</span> <span m="2497020">so</span> <span
  m="2497050">it's</span> <span m="2497220">column</span> <span
  m="2497640">times</span> <span m="2498020">row,</span> <span
  m="2500090">and</span> <span m="2500250">this</span> <span
  m="2500550">one</span> <span m="2500820">is</span> <span
  m="2502170">also</span> <span m="2503550">column</span> <span
  m="2504000">times</span> <span m="2504420">row</span> <span
  m="2508710">with</span> <span m="2508950">the</span> <span
  m="2509070">d</span> <span m="2509390">here.</span> <span
  m="2512310">OK,</span> <span m="2512760">now</span> <span
  m="2512970">let</span> <span m="2513120">me</span> <span
  m="2514380">look</span> <span m="2514650">at</span> <span
  m="2514740">that</span> <span m="2515100">properly.</span> <span
  m="2516150">So</span> <span m="2516930">every</span> <span
  m="2517350">row</span> <span m="2517800">in</span> <span
  m="2517920">this</span> <span m="2518310">guy</span> <span
  m="2518880">is</span> <span m="2519210">a</span> <span
  m="2519900">multiple</span> <span m="2520590">of</span> <span
  m="2520800">1,</span> <span m="2521100">1,</span> <span m="2521310">1,</span>
  <span m="2521550">1.</span> <span m="2523350">So</span> <span
  m="2523500">what</span> <span m="2523710">is</span> <span
  m="2523890">that</span> <span m="2524010">telling</span> <span
  m="2524340">me?</span> <span m="2524580">That</span> <span
  m="2524760">all</span> <span m="2524970">columns</span> <span
  m="2525540">are</span> <span m="2525630">the</span> <span
  m="2525780">same,</span> <span m="2528300">this</span> <span
  m="2529290">part</span> <span m="2529920">is</span> <span
  m="2531690">reflecting</span> <span m="2532380">these</span> <span
  m="2532860">ones,</span> <span m="2533310">where</span> <span
  m="2533460">the</span> <span m="2533580">columns</span> <span
  m="2534150">are</span> <span m="2534210">repeated.</span></p><p><span
  m="2535860">This</span> <span m="2536130">one</span> <span
  m="2536670">is</span> <span m="2536910">reflecting</span> <span
  m="2537540">this,</span> <span m="2537810">where</span> <span
  m="2538050">the</span> <span m="2538200">rows</span> <span
  m="2538680">are</span> <span m="2538740">repeated.</span> <span
  m="2539280">The</span> <span m="2539400">d</span> <span m="2539760">is</span>
  <span m="2539940">just</span> <span m="2540750">the</span> <span
  m="2540900">set</span> <span m="2541200">of</span> <span m="2541320">d</span>
  <span m="2541590">numbers.</span> <span m="2542100">Let's</span> <span
  m="2542280">call</span> <span m="2542610">that</span> <span
  m="2543240">di,</span> <span m="2546810">and</span> <span
  m="2546960">this</span> <span m="2547200">is</span> <span
  m="2547380">dj,</span> <span m="2552810">and</span> <span
  m="2553260">here's</span> <span m="2553620">the</span> <span
  m="2553820">D</span> <span m="2554140">matrix.</span> <span
  m="2561090">So</span> <span m="2561330">part</span> <span
  m="2561630">of</span> <span m="2561690">the</span> <span m="2561840">D</span>
  <span m="2562080">matrix</span> <span m="2562740">is</span> <span
  m="2564810">this</span> <span m="2565140">bit</span> <span
  m="2566110">and</span> <span m="2566130">this</span> <span
  m="2566370">bit,</span> <span m="2566760">each</span> <span
  m="2567030">giving</span> <span m="2567390">a</span> <span
  m="2567450">rank</span> <span m="2567810">1.</span> <span
  m="2569670">Now,</span> <span m="2570180">it's</span> <span
  m="2570630">this</span> <span m="2570990">part</span> <span
  m="2571410">that</span> <span m="2571620">I</span> <span
  m="2571800">have</span> <span m="2572040">to</span> <span
  m="2572190">understand,</span> <span m="2572970">so</span> <span
  m="2575400">while</span> <span m="2575700">you're</span> <span
  m="2576240">checking</span> <span m="2576630">on</span> <span
  m="2576750">that,</span> <span m="2576960">let</span> <span
  m="2577140">me</span> <span m="2580830">look</span> <span
  m="2581070">again</span> <span m="2581490">at</span> <span
  m="2581610">this.</span> <span m="2587590">Yeah.</span></p><p><span
  m="2593590">Let's</span> <span m="2593840">just</span> <span
  m="2593990">see</span> <span m="2594200">where</span> <span
  m="2594440">we</span> <span m="2594650">are</span> <span m="2594950">if</span>
  <span m="2595100">this</span> <span m="2595340">is</span> <span
  m="2595520">true.</span> <span m="2597170">If</span> <span
  m="2597320">this</span> <span m="2597530">is</span> <span
  m="2597650">true,</span> <span m="2597980">I'm</span> <span
  m="2598130">given</span> <span m="2598460">the</span> <span
  m="2598580">D</span> <span m="2598850">matrix,</span> <span
  m="2600590">and</span> <span m="2600770">then</span> <span
  m="2602420">these</span> <span m="2604490">dot</span> <span
  m="2604760">products</span> <span m="2606950">I</span> <span
  m="2607580">can</span> <span m="2607850">find.</span> <span
  m="2608810">So</span> <span m="2609020">I</span> <span m="2609110">can</span>
  <span m="2609290">find</span> <span m="2609560">these,</span> <span
  m="2609830">so</span> <span m="2610070">in</span> <span
  m="2610190">other</span> <span m="2610340">words,</span> <span
  m="2610710">this</span> <span m="2610850">is</span> <span
  m="2611030">the</span> <span m="2611150">key</span> <span
  m="2611660">equation</span> <span m="2612290">that</span> <span
  m="2612440">tells</span> <span m="2612830">me</span> <span
  m="2614164">D.</span> <span m="2616820">That's</span> <span
  m="2617670">the</span> <span m="2617780">key</span> <span
  m="2618050">equation,</span> <span m="2618780">and</span> <span
  m="2618830">it's</span> <span m="2619130">going</span> <span
  m="2619340">to</span> <span m="2619430">come</span> <span
  m="2619790">just</span> <span m="2620060">from</span> <span
  m="2620330">that</span> <span m="2621500">simple</span> <span
  m="2621980">identity,</span> <span m="2623300">just</span> <span
  m="2623570">from</span> <span m="2623780">checking</span> <span
  m="2624200">each</span> <span m="2624470">term.</span> <span
  m="2624930">This</span> <span m="2625100">term</span> <span
  m="2625460">we</span> <span m="2625610">identified,</span> <span
  m="2626690">that</span> <span m="2626870">last</span> <span
  m="2627170">term</span> <span m="2627410">we</span> <span
  m="2627530">identified,</span> <span m="2628160">and</span> <span
  m="2628260">now</span> <span m="2628490">this</span> <span
  m="2628790">term</span> <span m="2629570">is</span> <span
  m="2630170">D.</span> <span m="2630560">Well,</span> <span
  m="2630860">of,</span> <span m="2630950">course</span> <span
  m="2631280">it's</span> <span m="2631490">D.</span></p><p><span
  m="2634860">So</span> <span m="2635010">I</span> <span m="2635040">have</span>
  <span m="2635160">two</span> <span m="2635430">of</span> <span
  m="2635490">those,</span> <span m="2637490">and</span> <span
  m="2638240">I'm</span> <span m="2638570">going</span> <span
  m="2638750">to</span> <span m="2640010">take</span> <span
  m="2640340">half</span> <span m="2641330">of</span> <span
  m="2641420">that</span> <span m="2642250">to</span> <span
  m="2642380">get</span> <span m="2642560">D,</span> <span m="2642980">I
  think.</span> <span m="2650150">Yeah,</span> <span m="2650760">and</span>
  <span m="2651010">we'll</span> <span m="2652640">look.</span> <span
  m="2656210">Yeah.</span> <span m="2662340">So</span> <span
  m="2662490">I</span> <span m="2662550">guess</span> <span
  m="2662760">I'm</span> <span m="2662910">not</span> <span
  m="2663240">seeing</span> <span m="2663780">right</span> <span
  m="2664080">away</span> <span m="2664620">why</span> <span
  m="2665280">this</span> <span m="2666240">1/2</span> <span
  m="2666690">is</span> <span m="2666900">in</span> <span
  m="2667110">here,</span> <span m="2669300">but</span> <span
  m="2669510">I</span> <span m="2669630">think</span> <span m="2669900">I</span>
  <span m="2670050">had</span> <span m="2670290">it</span> <span
  m="2670410">right,</span> <span m="2670850">and</span> <span
  m="2671420">there's</span> <span m="2671730">a</span> <span
  m="2671790">reason.</span> <span m="2672960">You</span> <span
  m="2673350">see</span> <span m="2673650">that</span> <span
  m="2673830">this</span> <span m="2674100">matrix</span> <span
  m="2674740">this,</span> <span m="2674970">X</span> <span
  m="2675240">transpose</span> <span m="2675840">X</span> <span
  m="2676080">matrix,</span> <span m="2677010">is</span> <span
  m="2677160">coming</span> <span m="2677520">from</span> <span
  m="2677820">these</span> <span m="2678570">rank</span> <span
  m="2678870">1</span> <span m="2679140">pieces</span> <span
  m="2679830">and</span> <span m="2680310">these</span> <span
  m="2680700">pieces</span> <span m="2681300">which</span> <span
  m="2681630">are</span> <span m="2681900">the</span> <span
  m="2685110">cross</span> <span m="2685470">product.</span></p><p><span
  m="2687430">Oh,</span> <span m="2687700">I</span> <span
  m="2687880">see.</span> <span m="2688570">I</span> <span
  m="2688810">see.</span> <span m="2691060">What</span> <span
  m="2691240">that</span> <span m="2691450">equation</span> <span
  m="2691960">is</span> <span m="2692110">really</span> <span
  m="2692530">saying</span> <span m="2693060">is</span> <span
  m="2693250">that</span> <span m="2693610">the</span> <span
  m="2693880">D</span> <span m="2694030">matrix</span> <span
  m="2695980">is</span> <span m="2696430">this--</span> <span
  m="2699340">if</span> <span m="2699520">I</span> <span m="2699640">just</span>
  <span m="2699850">read</span> <span m="2700150">that</span> <span
  m="2700360">along</span> <span m="2700810">and</span> <span
  m="2701050">translate</span> <span m="2701370">it</span> <span
  m="2701690">and</span> <span m="2701800">put</span> <span
  m="2702070">it</span> <span m="2702220">in</span> <span
  m="2702370">matrix</span> <span m="2702880">language--</span> <span
  m="2703750">is</span> <span m="2703990">this</span> <span
  m="2706030">1,</span> <span m="2706480">1,</span> <span m="2706870">1,</span>
  <span m="2707230">1,</span> <span m="2710450">d1</span> <span
  m="2711310">to</span> <span m="2711550">d4,</span> <span
  m="2713200">let's</span> <span m="2713410">say,</span> <span
  m="2714070">transpose</span> <span m="2714970">is</span> <span
  m="2715150">this</span> <span m="2715540">rank</span> <span
  m="2715870">1</span> <span m="2716140">matrix.</span> <span
  m="2717310">And</span> <span m="2718870">the</span> <span
  m="2719050">other</span> <span m="2719290">one</span> <span
  m="2719590">is</span> <span m="2719830">the</span> <span
  m="2720010">d's</span> <span m="2723160">times</span> <span
  m="2723610">the</span> <span m="2723760">1,</span> <span m="2724060">1</span>
  <span m="2724900">which</span> <span m="2725140">is</span> <span
  m="2725340">a</span> <span m="2725440">transpose</span> <span
  m="2726160">of</span> <span m="2726250">that.</span> <span
  m="2727060">And</span> <span m="2727270">then</span> <span
  m="2727720">the</span> <span m="2727900">other</span> <span
  m="2728170">one</span> <span m="2728440">was</span> <span m="2728800">a</span>
  <span m="2728860">minus</span> <span m="2729580">2</span> <span
  m="2730650">of</span> <span m="2730870">the</span> <span
  m="2731020">cross</span> <span m="2731350">product</span> <span
  m="2731770">matrices.</span> <span m="2732590">I</span> <span
  m="2732780">see.</span> <span m="2733370">Yeah.</span></p><p><span
  m="2734530">So</span> <span m="2734710">when</span> <span m="2734890">I</span>
  <span m="2735070">write</span> <span m="2735400">that</span> <span
  m="2735670">equation</span> <span m="2737200">in</span> <span
  m="2737440">matrix</span> <span m="2738010">language,</span> <span
  m="2738520">I</span> <span m="2738640">just</span> <span
  m="2738880">get</span> <span m="2739060">that.</span> <span
  m="2741810">And</span> <span m="2742060">now,</span> <span
  m="2742280">when</span> <span m="2742460">I</span> <span
  m="2742580">solve</span> <span m="2742910">for</span> <span
  m="2743120">X--</span> <span m="2744611">oh,</span> <span
  m="2745820">minus</span> <span m="2746240">2</span> <span m="2746735">X</span>
  <span m="2747230">transpose</span> <span m="2747860">X.</span> <span
  m="2752230">Yeah.</span> <span m="2753200">Sorry,</span> <span
  m="2754120">cross</span> <span m="2754450">products,</span> <span
  m="2755460">the</span> <span m="2755680">X's.</span> <span
  m="2757270">So</span> <span m="2757450">I</span> <span m="2757540">had</span>
  <span m="2758440">one</span> <span m="2758680">set</span> <span
  m="2758920">of</span> <span m="2759040">cross</span> <span
  m="2759310">products,</span> <span m="2759910">and</span> <span
  m="2760030">then</span> <span m="2760360">this</span> <span
  m="2760600">is</span> <span m="2760780">the</span> <span
  m="2760930">same</span> <span m="2761260">as</span> <span
  m="2761380">this,</span> <span m="2761580">so</span> <span
  m="2761800">I</span> <span m="2761890">have</span> <span
  m="2762430">minus</span> <span m="2762820">2</span> <span
  m="2763090">of</span> <span m="2763240">them.</span> <span
  m="2763790">So</span> <span m="2763900">now,</span> <span
  m="2764290">I'm</span> <span m="2764500">just</span> <span
  m="2765190">rewriting</span> <span m="2766090">that.</span> <span
  m="2766420">When</span> <span m="2766630">I</span> <span
  m="2766750">rewrite</span> <span m="2767200">that</span> <span
  m="2767380">equation,</span> <span m="2767890">I</span> <span
  m="2767980">have</span> <span m="2768100">that.</span></p><p><span
  m="2768430">Do</span> <span m="2768550">you</span> <span
  m="2768670">see</span> <span m="2768910">that?</span> <span
  m="2769960">I</span> <span m="2770050">put</span> <span
  m="2770290">that</span> <span m="2770680">on</span> <span
  m="2771040">this</span> <span m="2771250">side.</span> <span
  m="2772360">I</span> <span m="2772450">put the</span> <span
  m="2772850">d</span> <span m="2773260">over</span> <span
  m="2773530">here</span> <span m="2773890">as</span> <span m="2774040">a</span>
  <span m="2774100">minus</span> <span m="2774610">d.</span> <span
  m="2775105">I</span> <span m="2775600">divide</span> <span
  m="2776050">by</span> <span m="2776260">2,</span> <span m="2777130">and</span>
  <span m="2777730">then</span> <span m="2778680">that's</span> <span
  m="2779070">the</span> <span m="2779200">formula.</span> <span
  m="2780250">So</span> <span m="2780430">ultimately,</span> <span
  m="2783420">this</span> <span m="2785010">simple</span> <span
  m="2785550">identity</span> <span m="2786240">just</span> <span
  m="2787050">looked</span> <span m="2787350">at--</span> <span
  m="2787590">because</span> <span m="2788700">these</span> <span
  m="2789060">pieces</span> <span m="2789630">were</span> <span
  m="2789810">so</span> <span m="2790050">simple,</span> <span
  m="2790560">just</span> <span m="2790830">rank</span> <span
  m="2791130">one</span> <span m="2791400">pieces,</span> <span
  m="2792510">and</span> <span m="2793020">these</span> <span
  m="2793380">pieces</span> <span m="2793860">were</span> <span
  m="2793980">exactly</span> <span m="2794520">what</span> <span
  m="2794730">we</span> <span m="2794880">want,</span> <span
  m="2795210">the</span> <span m="2795360">X</span> <span
  m="2795630">transpose</span> <span m="2796350">X</span> <span
  m="2796620">pieces,</span> <span m="2797640">the</span> <span
  m="2797760">G.</span></p><p><span m="2799500">That</span> <span
  m="2799770">equation</span> <span m="2800940">told</span> <span
  m="2801270">us</span> <span m="2801450">the</span> <span m="2801600">D.</span>
  <span m="2803850">All</span> <span m="2804330">this</span> <span
  m="2804600">is</span> <span m="2804800">known.</span> <span
  m="2808350">Well,</span> <span m="2809190">so</span> <span
  m="2809370">what's</span> <span m="2811290">known</span> <span
  m="2811650">is</span> <span m="2811800">D</span> <span m="2812280">and</span>
  <span m="2812430">this</span> <span m="2812760">and</span> <span
  m="2812880">this.</span> <span m="2813260">So</span> <span
  m="2813480">now,</span> <span m="2813720">we</span> <span
  m="2813900">have</span> <span m="2814110">the</span> <span
  m="2814590">equation</span> <span m="2815160">for</span> <span
  m="2815340">X</span> <span m="2815610">transpose</span> <span
  m="2816300">X</span> <span m="2817620">is</span> <span
  m="2817860">minus</span> <span m="2818340">1/2</span> <span
  m="2819090">of</span> <span m="2819930">D</span> <span
  m="2821310">minus</span> <span m="2824310">these</span> <span
  m="2824670">rank</span> <span m="2825060">1's.</span></p><p><span
  m="2831530">Sorry</span> <span m="2831830">to</span> <span
  m="2832880">make</span> <span m="2833120">it</span> <span
  m="2833770">look</span> <span m="2833930">messy.</span> <span
  m="2836250">I</span> <span m="2836390">remember</span> <span
  m="2836940">Raj</span> <span m="2837420">Rao</span> <span
  m="2837860">talking</span> <span m="2838160">about it</span> <span
  m="2838420">last</span> <span m="2838700">spring,</span> <span
  m="2839060">also</span> <span m="2839930">the</span> <span
  m="2840140">algebra</span> <span m="2842420">got</span> <span
  m="2843500">flustered.</span> <span m="2845330">So</span> <span
  m="2845510">we</span> <span m="2845660">get</span> <span
  m="2845900">it.</span> <span m="2846710">So</span> <span m="2846860">we</span>
  <span m="2847010">know</span> <span m="2847280">X</span> <span
  m="2847520">transpose</span> <span m="2848120">X,</span> <span
  m="2849770">that</span> <span m="2850180">matrix.</span></p><p><span
  m="2851450">Now,</span> <span m="2851720">can</span> <span
  m="2852680">we</span> <span m="2852800">just</span> <span
  m="2853040">do</span> <span m="2853280">four</span> <span
  m="2853580">minutes</span> <span m="2854030">of</span> <span
  m="2854510">linear</span> <span m="2854870">algebra</span> <span
  m="2855320">at</span> <span m="2855410">the</span> <span
  m="2855620">end</span> <span m="2858350">today?</span> <span
  m="2861900">Given</span> <span m="2864600">X</span> <span
  m="2864870">transpose</span> <span m="2865560">X,</span> <span
  m="2867000">find</span> <span m="2869400">X.</span> <span
  m="2869970">This</span> <span m="2870270">is</span> <span m="2870450">n</span>
  <span m="2870690">by</span> <span m="2870930">n.</span> <span
  m="2876590">How</span> <span m="2876770">would</span> <span
  m="2876950">you</span> <span m="2877040">do</span> <span
  m="2877220">that?</span> <span m="2878880">Could</span> <span
  m="2879120">you</span> <span m="2879210">do</span> <span
  m="2879420">it?</span></p><p><span m="2880680">Would</span> <span
  m="2880860">there</span> <span m="2881010">be</span> <span
  m="2881160">just</span> <span m="2881430">one</span> <span
  m="2881730">X?</span> <span m="2883190">No.</span> <span m="2885620">So</span>
  <span m="2886540">if</span> <span m="2887930">you</span> <span
  m="2888020">had</span> <span m="2888170">one</span> <span
  m="2888470">X,</span> <span m="2889460">multiply</span> <span
  m="2889970">that</span> <span m="2890210">by</span> <span m="2890430">a</span>
  <span m="2890510">rotation,</span> <span m="2891380">by</span> <span
  m="2891620">an</span> <span m="2891710">orthogonal</span> <span
  m="2892220">matrix,</span> <span m="2892730">you'd</span> <span
  m="2892880">have</span> <span m="2893060">another</span> <span
  m="2893390">one.</span> <span m="2894530">So</span> <span
  m="2895340">this</span> <span m="2895550">is</span> <span
  m="2896000">finding</span> <span m="2896510">X</span> <span
  m="2897110">up</span> <span m="2897320">to</span> <span m="2897590">an</span>
  <span m="2897740">orthogonal</span> <span m="2898920">transformation,</span>
  <span m="2899690">but</span> <span m="2899900">how</span> <span
  m="2900050">would</span> <span m="2900260">you</span> <span
  m="2900380">actually</span> <span m="2900830">do</span> <span
  m="2901070">that?</span> <span m="2902150">What</span> <span
  m="2902480">do</span> <span m="2902570">we</span> <span
  m="2902690">know</span> <span m="2902930">about</span> <span
  m="2903200">this</span> <span m="2903470">matrix,</span> <span
  m="2905300">X</span> <span m="2905510">transpose</span> <span
  m="2906110">X?</span> <span m="2907025">It's</span> <span
  m="2907490">symmetric,</span> <span m="2908150">clearly,</span> <span
  m="2909500">and</span> <span m="2909740">what</span> <span
  m="2909950">we</span> <span m="2910100">especially</span> <span
  m="2910700">know</span> <span m="2911030">is</span> <span
  m="2911180">that</span> <span m="2911360">it</span> <span
  m="2911580">is</span> <span m="2911720">also?</span></p><p><span
  m="2912470">AUDIENCE:</span> <span m="2912640">Positive.</span></p><p><span
  m="2913490">GILBERT STRANG:</span> <span m="2913715">Positive</span> <span
  m="2914390">or</span> <span m="2915440">semidefinite,</span> <span
  m="2916970">so</span> <span m="2917180">this</span> <span
  m="2917390">is</span> <span m="2917600">semidefinite.</span> <span
  m="2922180">So</span> <span m="2922310">I'm</span> <span
  m="2922460">given</span> <span m="2922760">a</span> <span
  m="2922820">semidefinite</span> <span m="2923660">matrix,</span> <span
  m="2924260">and</span> <span m="2924380">I</span> <span
  m="2924440">want</span> <span m="2924620">to</span> <span
  m="2924680">find</span> <span m="2926020">a</span> <span
  m="2926330">square</span> <span m="2926690">root,</span> <span
  m="2927020">you</span> <span m="2927200">could</span> <span
  m="2927410">say.</span> <span m="2928640">That</span> <span
  m="2928820">matrix</span> <span m="2929390">is</span> <span
  m="2929540">the</span> <span m="2929690">X</span> <span
  m="2929930">transpose</span> <span m="2930530">X,</span> <span
  m="2930890">and</span> <span m="2931010">I</span> <span
  m="2931100">want</span> <span m="2931280">to</span> <span
  m="2931340">find</span> <span m="2931730">X.</span> <span m="2932420">I</span>
  <span m="2932840">think</span> <span m="2933110">there</span> <span
  m="2933290">are</span> <span m="2933320">two</span> <span
  m="2933680">leading</span> <span m="2934160">candidates.</span> <span
  m="2936920">There</span> <span m="2937100">are</span> <span
  m="2937130">many</span> <span m="2937460">candidates,</span> <span
  m="2938150">because</span> <span m="2939560">if</span> <span
  m="2939830">you</span> <span m="2939950">find</span> <span
  m="2940280">one,</span> <span m="2940730">then</span> <span
  m="2941930">any</span> <span m="2944060">QX</span> <span m="2945530">is</span>
  <span m="2946790">OK.</span> <span m="2949730">Because</span> <span
  m="2949940">if</span> <span m="2950060">I</span> <span m="2950180">put</span>
  <span m="2950390">a</span> <span m="2950480">Q</span> <span
  m="2950720">transpose</span> <span m="2951350">Q</span> <span
  m="2951620">in</span> <span m="2951770">there,</span> <span
  m="2952010">it's</span> <span m="2952340">the</span> <span
  m="2952490">identity.</span></p><p><span m="2953910">OK.</span> <span
  m="2954650">So</span> <span m="2954830">one</span> <span
  m="2955130">way</span> <span m="2955520">is</span> <span m="2955910">to</span>
  <span m="2956060">use</span> <span m="2956450">eigenvalues</span> <span
  m="2961340">of</span> <span m="2962000">X</span> <span
  m="2962210">transpose</span> <span m="2962870">X,</span> <span
  m="2964580">and</span> <span m="2964730">the</span> <span
  m="2964880">other</span> <span m="2965120">way</span> <span
  m="2965420">would</span> <span m="2965660">be</span> <span
  m="2965930">to</span> <span m="2966050">use</span> <span
  m="2966440">elimination</span> <span m="2969230">on</span> <span
  m="2970400">X</span> <span m="2970640">transpose</span> <span
  m="2971320">X.</span> <span m="2972810">So</span> <span
  m="2973840">I'll</span> <span m="2974920">put</span> <span
  m="2975630">use.</span> <span m="2977280">So</span> <span
  m="2977420">if</span> <span m="2977570">I</span> <span m="2977660">use</span>
  <span m="2977930">eigenvalues</span> <span m="2978680">of</span> <span
  m="2978800">X,</span> <span m="2979880">if</span> <span m="2980060">I</span>
  <span m="2980150">find</span> <span m="2980450">the</span> <span
  m="2980600">eigenvalues</span> <span m="2981350">of</span> <span
  m="2981470">X</span> <span m="2981710">transpose</span> <span
  m="2982340">X,</span> <span m="2983500">then</span> <span
  m="2983720">I'm</span> <span m="2983870">writing</span> <span
  m="2984350">this</span> <span m="2984770">a--</span> <span
  m="2985940">it's</span> <span m="2986180">a</span> <span
  m="2986240">symmetric,</span> <span m="2986870">positive</span> <span
  m="2987320">definition--</span> <span m="2987870">I'm</span> <span
  m="2988100">writing</span> <span m="2988490">it</span> <span
  m="2988640">as</span> <span m="2988820">Q</span> <span
  m="2989270">lambda</span> <span m="2989690">Q</span> <span
  m="2989990">transpose.</span> <span m="2991610">Right?</span> <span
  m="2991910">That's</span> <span m="2992210">the</span> <span
  m="2992330">fundamental</span> <span m="2993380">most</span> <span
  m="2993710">important</span> <span m="2994160">theorem</span> <span
  m="2994820">in</span> <span m="2995100">linear</span> <span
  m="2995390">algebra,</span> <span m="2995780">you</span> <span
  m="2995940">could</span> <span m="2996140">say.</span> <span
  m="2997130">That</span> <span m="2997340">a</span> <span
  m="2997560">symmetric,</span> <span m="2998390">positive,</span> <span
  m="2999150">semidefinite</span> <span m="2999980">matrix</span> <span
  m="3000940">has</span> <span m="3003460">greater</span> <span
  m="3003940">eigenvalues,</span> <span m="3004720">greater or</span> <span
  m="3005080">equal to</span> <span m="3005380">0,</span> <span
  m="3006340">and</span> <span m="3007250">eigenvectors</span> <span
  m="3008110">that</span> <span m="3008290">are</span> <span
  m="3008350">orthogonal.</span></p><p><span m="3009650">So</span> <span
  m="3009760">now,</span> <span m="3010000">if</span> <span m="3010150">I</span>
  <span m="3010240">know</span> <span m="3010540">that,</span> <span
  m="3011200">what's</span> <span m="3011530">a</span> <span
  m="3011590">good</span> <span m="3011860">X?</span> <span
  m="3012580">Then,</span> <span m="3012910">take</span> <span
  m="3015850">X</span> <span m="3016210">to</span> <span m="3016360">be</span>
  <span m="3016550">what?</span> <span m="3020300">So</span> <span
  m="3020480">I've</span> <span m="3020660">got</span> <span
  m="3021050">the</span> <span m="3021740">eigenvalues</span> <span
  m="3022520">and</span> <span m="3022760">eigenvectors</span> <span
  m="3023540">of</span> <span m="3023690">X</span> <span
  m="3023900">transpose</span> <span m="3024560">X,</span> <span
  m="3024920">and</span> <span m="3025040">I'm</span> <span
  m="3025190">looking</span> <span m="3025520">for</span> <span
  m="3025760">an</span> <span m="3025880">X</span> <span m="3026260">that</span>
  <span m="3026450">will</span> <span m="3026600">work.</span> <span
  m="3027590">And</span> <span m="3028490">one</span> <span
  m="3028850">idea</span> <span m="3029240">is</span> <span
  m="3029390">just</span> <span m="3029630">to</span> <span
  m="3029750">take</span> <span m="3030050">the</span> <span
  m="3030200">same</span> <span m="3031950">eigenvectors,</span> <span
  m="3033800">and</span> <span m="3034070">take</span> <span
  m="3034340">the</span> <span m="3034490">square</span> <span
  m="3034850">roots</span> <span m="3035930">of</span> <span
  m="3036050">the</span> <span m="3036200">eigenvalues.</span></p><p><span
  m="3040660">That's</span> <span m="3040900">symmetric</span> <span
  m="3041740">now.</span> <span m="3041930">This</span> <span
  m="3042200">is</span> <span m="3042350">equal</span> <span
  m="3042710">to</span> <span m="3043250">X</span> <span
  m="3043490">transpose,</span> <span m="3048710">and</span> <span
  m="3050870">that's</span> <span m="3051860">a</span> <span
  m="3051920">square</span> <span m="3052310">root</span> <span
  m="3052610">symbol,</span> <span m="3053090">or</span> <span
  m="3053240">a</span> <span m="3053300">lambda</span> <span
  m="3053810">to</span> <span m="3053960">the</span> <span
  m="3054080">1/2,</span> <span m="3055340">I</span> <span
  m="3056030">could</span> <span m="3056210">say.</span> <span
  m="3057150">So</span> <span m="3057260">when</span> <span m="3057440">I</span>
  <span m="3057530">multiply</span> <span m="3058130">that--</span> <span
  m="3060260">X</span> <span m="3060550">transpose</span> <span
  m="3061130">X</span> <span m="3061430">is</span> <span m="3061700">just</span>
  <span m="3062060">X</span> <span m="3062270">squared</span> <span
  m="3062810">here.</span> <span m="3063500">When</span> <span
  m="3063680">I</span> <span m="3063800">square</span> <span
  m="3064250">it,</span> <span m="3064970">the</span> <span m="3066260">Q</span>
  <span m="3066530">transpose</span> <span m="3067130">Q</span> <span
  m="3067610">multiplies</span> <span m="3068330">itself</span> <span
  m="3069140">to</span> <span m="3069290">give</span> <span
  m="3069530">the</span> <span m="3069650">identity.</span> <span
  m="3070700">The</span> <span m="3070850">square</span> <span
  m="3071180">root</span> <span m="3071330">of</span> <span
  m="3071480">lambda</span> <span m="3072590">times</span> <span
  m="3072980">the</span> <span m="3073040">square</span> <span
  m="3073340">root</span> <span m="3073430">of</span> <span
  m="3073550">lambda,</span> <span m="3074740">those</span> <span
  m="3075080">are</span> <span m="3075170">diagonal</span> <span
  m="3075770">matrices</span> <span m="3076490">that</span> <span
  m="3076670">give</span> <span m="3076880">lambda,</span> <span
  m="3077750">and</span> <span m="3078480">I</span> <span m="3078590">get</span>
  <span m="3078800">the</span> <span m="3078920">right</span> <span
  m="3079160">answer.</span></p><p><span m="3080010">So</span> <span
  m="3080060">one</span> <span m="3080300">way</span> <span
  m="3080630">is,</span> <span m="3081820">in</span> <span m="3081950">a</span>
  <span m="3082010">few</span> <span m="3082220">words,</span> <span
  m="3083210">take</span> <span m="3083510">the</span> <span
  m="3083630">square</span> <span m="3084020">roots</span> <span
  m="3084270">of</span> <span m="3084440">the</span> <span
  m="3084590">eigenvalues</span> <span m="3085550">and</span> <span
  m="3085700">keep</span> <span m="3086030">the</span> <span
  m="3086180">eigenvectors.</span> <span m="3087560">So</span> <span
  m="3087740">that's</span> <span m="3088040">the</span> <span
  m="3088200">eigenvalue</span> <span m="3089300">construction.</span> <span
  m="3090440">So</span> <span m="3090620">that's</span> <span
  m="3090920">producing</span> <span m="3091520">an</span> <span
  m="3091700">X</span> <span m="3092120">that</span> <span m="3092360">is</span>
  <span m="3092600">symmetric,</span> <span m="3094220">positive,</span> <span
  m="3094850">semidefinite.</span> <span m="3096650">That</span> <span
  m="3096890">might</span> <span m="3097130">be</span> <span
  m="3097340">what</span> <span m="3097550">you</span> <span
  m="3097670">want.</span> <span m="3098930">It's</span> <span
  m="3099110">a</span> <span m="3099170">little</span> <span
  m="3099410">work,</span> <span m="3099800">because</span> <span
  m="3100310">your</span> <span m="3100490">computing</span> <span
  m="3101090">eigenvalues</span> <span m="3102260">and</span> <span
  m="3102490">eigenvectors</span> <span m="3103250">to</span> <span
  m="3103370">do</span> <span m="3103580">it,</span> <span
  m="3104150">but</span> <span m="3104390">that's</span> <span
  m="3104690">one</span> <span m="3104960">choice.</span></p><p><span
  m="3106550">Now,</span> <span m="3106820">I</span> <span
  m="3107090">believe</span> <span m="3107540">that</span> <span
  m="3107720">elimination</span> <span m="3108500">would</span> <span
  m="3108710">give</span> <span m="3108950">us</span> <span
  m="3109130">another</span> <span m="3109490">choice.</span> <span
  m="3111200">So</span> <span m="3111440">elimination</span> <span
  m="3112190">produces</span> <span m="3112880">what</span> <span
  m="3113150">factorization</span> <span m="3114230">of</span> <span
  m="3114380">this?</span> <span m="3115100">This</span> <span
  m="3115310">is</span> <span m="3115430">still</span> <span
  m="3115910">our</span> <span m="3116240">symmetric,</span> <span
  m="3117440">positive,</span> <span m="3118070">definite</span> <span
  m="3118610">matrix.</span> <span m="3120020">If</span> <span
  m="3120170">you</span> <span m="3120290">do</span> <span
  m="3120500">elimination</span> <span m="3121340">on</span> <span
  m="3121520">that,</span> <span m="3121940">you</span> <span
  m="3122420">usually</span> <span m="3123020">expect</span> <span
  m="3124150">L,</span> <span m="3125040">a</span> <span
  m="3125485">lower</span> <span m="3125930">triangular,</span> <span
  m="3127410">times</span> <span m="3127850">D,</span> <span
  m="3129458">the</span> <span m="3129860">pivots,</span> <span
  m="3131060">times</span> <span m="3131960">U,</span> <span
  m="3132980">the</span> <span m="3133130">upper</span> <span
  m="3133460">triangle.</span> <span m="3134060">That's</span> <span
  m="3134360">the</span> <span m="3134450">usual</span> <span
  m="3134870">result</span> <span m="3135820">of</span> <span
  m="3136120">elimination,</span> <span m="3137390">LDU.</span></p><p><span
  m="3138620">I'm</span> <span m="3138740">factoring</span> <span
  m="3139340">out</span> <span m="3139520">the</span> <span
  m="3139640">pivots,</span> <span m="3140570">so</span> <span
  m="3141020">they're</span> <span m="3141260">1's</span> <span
  m="3141830">on</span> <span m="3141980">the</span> <span
  m="3142100">diagonals</span> <span m="3142940">of</span> <span
  m="3143210">L</span> <span m="3143540">and</span> <span m="3143690">U.</span>
  <span m="3144680">But</span> <span m="3144920">now,</span> <span
  m="3145460">if</span> <span m="3145730">it's a</span> <span
  m="3146180">symmetric</span> <span m="3146750">matrix,</span> <span
  m="3147290">what's</span> <span m="3147620">up?</span> <span
  m="3149980">We</span> <span m="3150220">zipped</span> <span
  m="3150550">by</span> <span m="3151540">elimination,</span> <span
  m="3152320">regarding</span> <span m="3152830">that</span> <span
  m="3153070">as</span> <span m="3153280">a</span> <span
  m="3153730">18.06</span> <span m="3157090">trivial</span> <span
  m="3158590">bit</span> <span m="3159070">of</span> <span
  m="3159370">linear</span> <span m="3159730">algebra,</span> <span
  m="3160120">but</span> <span m="3160300">of</span> <span
  m="3160390">course,</span> <span m="3160720">it's</span> <span
  m="3161140">highly</span> <span m="3161470">important.</span></p><p><span
  m="3162280">So</span> <span m="3162430">what's</span> <span
  m="3162820">the</span> <span m="3163300">situation</span> <span
  m="3164050">here</span> <span m="3165070">when</span> <span
  m="3166060">the</span> <span m="3166180">matrix</span> <span
  m="3166750">is</span> <span m="3166900">actually</span> <span
  m="3167290">symmetric?</span> <span m="3171020">So</span> <span
  m="3171260">I</span> <span m="3171380">want</span> <span
  m="3171710">something</span> <span m="3172160">to</span> <span
  m="3172310">look</span> <span m="3172580">symmetric.</span> <span
  m="3173810">How</span> <span m="3173930">do</span> <span m="3174050">I</span>
  <span m="3174140">make</span> <span m="3174410">that</span> <span
  m="3174620">look</span> <span m="3174830">symmetric?</span> <span
  m="3176130">The</span> <span m="3176540">U</span> <span
  m="3176930">gets</span> <span m="3177350">replaced</span> <span
  m="3177860">by</span> <span m="3178190">L</span> <span
  m="3178340">transpose.</span> <span m="3183614">If</span> <span
  m="3184070">I'm</span> <span m="3184220">working</span> <span
  m="3184640">on</span> <span m="3184790">a</span> <span
  m="3184880">positive</span> <span m="3185420">definite--</span> <span
  m="3185920">say</span> <span m="3186170">positive</span> <span
  m="3186680">definite</span> <span m="3187130">matrix--</span> <span
  m="3188090">then</span> <span m="3188510">I</span> <span
  m="3188600">get</span> <span m="3188810">positive</span> <span
  m="3189470">pivots,</span> <span m="3190550">and</span> <span
  m="3191720">L</span> <span m="3192560">and</span> <span
  m="3194060">lower</span> <span m="3194360">triangular</span> <span
  m="3195020">and</span> <span m="3195140">upper</span> <span
  m="3195350">triangular</span> <span m="3195990">are</span> <span
  m="3196100">transposes</span> <span m="3196940">of</span> <span
  m="3197060">each</span> <span m="3197300">other.</span></p><p><span
  m="3197820">So</span> <span m="3197930">now,</span> <span
  m="3198200">what</span> <span m="3198440">is</span> <span
  m="3199640">then</span> <span m="3200330">the</span> <span
  m="3200510">X?</span> <span m="3203840">It's</span> <span
  m="3204080">just</span> <span m="3204320">like</span> <span
  m="3204590">that.</span> <span m="3205610">I'll</span> <span
  m="3205790">use</span> <span m="3206120">L</span> <span
  m="3207380">square</span> <span m="3208220">root</span> <span
  m="3208640">of</span> <span m="3208940">the</span> <span m="3209285">D</span>
  <span m="3210710">L</span> <span m="3211040">transpose.</span> <span
  m="3211990">Is</span> <span m="3212130">that</span> <span
  m="3212300">right?</span> <span m="3214800">Oh,</span> <span
  m="3215190">wait</span> <span m="3215430">a</span> <span
  m="3215500">minute.</span> <span m="3217260">What's</span> <span
  m="3217560">up?</span></p><p><span m="3218920">No,</span> <span
  m="3219790">that's</span> <span m="3220060">not</span> <span
  m="3220300">going</span> <span m="3220400">to</span> <span
  m="3220540">work,</span> <span m="3221320">because</span> <span
  m="3221530">I</span> <span m="3221620">don't</span> <span
  m="3221860">have</span> <span m="3222100">L</span> <span
  m="3222310">transpose</span> <span m="3223000">L.</span> <span
  m="3223930">Where</span> <span m="3224140">I</span> <span
  m="3224230">had</span> <span m="3224500">Q</span> <span
  m="3224740">transpose</span> <span m="3225025">Q,</span> <span
  m="3225310">it</span> <span m="3225690">was</span> <span
  m="3225880">good.</span> <span m="3226490">No,</span> <span
  m="3227140">sorry.</span> <span m="3228250">Let's</span> <span
  m="3228640">get</span> <span m="3228880">that</span> <span
  m="3229330">totally</span> <span m="3229780">erased.</span> <span
  m="3232400">The</span> <span m="3232550">X</span> <span
  m="3233030">part</span> <span m="3233420">should</span> <span
  m="3233630">just</span> <span m="3233960">be</span> <span
  m="3234740">the</span> <span m="3234830">square</span> <span
  m="3235250">root</span> <span m="3235400">of</span> <span
  m="3235520">DL</span> <span m="3236840">transpose.</span> <span
  m="3240230">The</span> <span m="3240410">X</span> <span m="3240650">is</span>
  <span m="3240800">now</span> <span m="3241040">a</span> <span
  m="3241130">triangular</span> <span m="3241820">matrix,</span> <span
  m="3242840">the</span> <span m="3242960">square</span> <span
  m="3243320">root</span> <span m="3243590">of</span> <span
  m="3243650">the</span> <span m="3243770">pivots,</span> <span
  m="3244910">and</span> <span m="3245300">the</span> <span m="3245900">L</span>
  <span m="3246080">transpose</span> <span m="3246800">part.</span></p><p><span
  m="3247550">And</span> <span m="3247670">now,</span> <span
  m="3247850">when</span> <span m="3248060">I</span> <span m="3248150">do</span>
  <span m="3248390">X</span> <span m="3248630">transpose</span> <span
  m="3249290">X,</span> <span m="3250220">then</span> <span
  m="3250490">you</span> <span m="3250880">see</span> <span m="3251210">X</span>
  <span m="3251540">transpose</span> <span m="3252080">X</span> <span
  m="3252320">coming</span> <span m="3252570">correctly.</span> <span
  m="3253790">X</span> <span m="3254000">transpose</span> <span
  m="3254690">will</span> <span m="3254900">be</span> <span m="3258170">L</span>
  <span m="3258350">transpose.</span> <span m="3258950">Transpose</span> <span
  m="3259610">will</span> <span m="3259730">give</span> <span
  m="3259880">me</span> <span m="3260000">the</span> <span m="3260180">L.</span>
  <span m="3260660">Square</span> <span m="3260900">root of</span> <span
  m="3261290">D</span> <span m="3261440">will</span> <span m="3261850">be</span>
  <span m="3262060">square</span> <span m="3262270">root</span> <span
  m="3262400">of</span> <span m="3262580">D.</span> <span
  m="3262820">We'll</span> <span m="3262970">give</span> <span
  m="3263180">the</span> <span m="3263300">D,</span> <span
  m="3264080">and</span> <span m="3264200">then</span> <span
  m="3264380">the</span> <span m="3264530">L</span> <span
  m="3264680">transpose</span> <span m="3265340">is</span> <span
  m="3265520">right.</span></p><p><span m="3266030">So</span> <span
  m="3266270">this</span> <span m="3266540">is</span> <span
  m="3266810">called</span> <span m="3267320">the--</span> <span
  m="3270290">do</span> <span m="3270440">I</span> <span m="3270880">try</span>
  <span m="3271170">to</span> <span m="3271280">write</span> <span
  m="3271520">it</span> <span m="3271640">here?</span> <span
  m="3271880">This</span> <span m="3272090">is</span> <span
  m="3272210">my</span> <span m="3272390">last</span> <span
  m="3272870">word</span> <span m="3274400">for</span> <span
  m="3274640">today--</span> <span m="3275180">the</span> <span
  m="3275360">Cholesky.</span> <span m="3279470">This</span> <span
  m="3280130">is</span> <span m="3280310">the</span> <span
  m="3280430">Cholesky</span> <span m="3281150">Factorization,</span> <span
  m="3282140">named</span> <span m="3282500">after</span> <span
  m="3283340">a</span> <span m="3283790">French</span> <span
  m="3284150">guy,</span> <span m="3285340">a</span> <span
  m="3285380">French</span> <span m="3285710">soldier</span> <span
  m="3286280">actually.</span> <span m="3287430">So</span> <span
  m="3288140">LDL</span> <span m="3289010">transpose</span> <span
  m="3289760">is</span> <span m="3290360">Cholesky,</span> <span
  m="3291050">and</span> <span m="3291200">that's</span> <span
  m="3294470">easy</span> <span m="3294800">to</span> <span
  m="3294920">compute,</span> <span m="3295520">much</span> <span
  m="3295820">faster</span> <span m="3296270">to</span> <span
  m="3296390">compute</span> <span m="3296840">than</span> <span
  m="3297020">the</span> <span m="3297170">eigenvalue</span> <span
  m="3297980">square</span> <span m="3298340">root.</span></p><p><span
  m="3299120">But</span> <span m="3299300">this</span> <span
  m="3299460">square</span> <span m="3299780">root</span> <span
  m="3300050">is</span> <span m="3300200">triangular.</span> <span
  m="3301460">This</span> <span m="3301640">square</span> <span
  m="3302000">root</span> <span m="3302330">is</span> <span
  m="3302450">symmetric.</span> <span m="3303710">Those</span> <span
  m="3303980">are</span> <span m="3304040">the</span> <span
  m="3304190">two</span> <span m="3305600">pieces</span> <span
  m="3306140">of</span> <span m="3306260">linear</span> <span
  m="3306620">algebra</span> <span m="3307600">to</span> <span
  m="3307850">find</span> <span m="3308360">things,</span> <span
  m="3308810">to</span> <span m="3308930">reduce</span> <span
  m="3309380">things</span> <span m="3309860">to</span> <span
  m="3310820">triangular</span> <span m="3311540">form,</span> <span
  m="3312020">or</span> <span m="3312200">to</span> <span
  m="3312320">reduce</span> <span m="3312860">them</span> <span
  m="3313100">to</span> <span m="3314270">connect</span> <span
  m="3314690">them</span> <span m="3314870">with</span> <span
  m="3315050">symmetric</span> <span m="3315590">matrices.</span></p><p><span
  m="3316350">OK,</span> <span m="3316620">thank</span> <span
  m="3316940">you</span> <span m="3317090">for</span> <span
  m="3317750">attention</span> <span m="3318320">today.</span> <span
  m="3319130">So</span> <span m="3319490">today,</span> <span
  m="3320030">we</span> <span m="3320210">did</span> <span
  m="3323030">the</span> <span m="3324140">distance</span> <span
  m="3324740">matrices,</span> <span m="3326180">and</span> <span
  m="3326330">this</span> <span m="3326570">was</span> <span
  m="3326750">the</span> <span m="3326870">final</span> <span
  m="3327260">step</span> <span m="3327650">to</span> <span
  m="3327800">get</span> <span m="3328070">the</span> <span
  m="3328640">X.</span> <span m="3329720">And</span> <span
  m="3331220">also,</span> <span m="3334400">most</span> <span
  m="3334730">important</span> <span m="3335240">was</span> <span
  m="3335480">to</span> <span m="3335600">get</span> <span
  m="3335840">the</span> <span m="3335990">structure</span> <span
  m="3336620">of</span> <span m="3337610">a</span> <span
  m="3337670">neural</span> <span m="3338030">net</span> <span
  m="3338330">straight,</span> <span m="3339350">separating</span> <span
  m="3340100">the</span> <span m="3340220">v's,</span> <span
  m="3340880">the</span> <span m="3341030">sample</span> <span
  m="3341510">vectors,</span> <span m="3342500">from</span> <span
  m="3342770">the</span> <span m="3343040">x's,</span> <span
  m="3343670">the</span> <span m="3343820">weights.</span></p><p><span
  m="3344780">OK,</span> <span m="3345440">so</span> <span
  m="3345740">Friday,</span> <span m="3347450">I've</span> <span
  m="3347600">got</span> <span m="3347780">one</span> <span
  m="3348920">volunteer</span> <span m="3349580">to</span> <span
  m="3349760">talk</span> <span m="3350120">about</span> <span
  m="3350360">a</span> <span m="3350420">project,</span> <span
  m="3350960">and</span> <span m="3351110">I'm</span> <span
  m="3351800">desperately</span> <span m="3352430">looking</span> <span
  m="3352760">for</span> <span m="3352940">more.</span> <span
  m="3354560">Please</span> <span m="3355520">just</span> <span
  m="3355730">send</span> <span m="3356030">me</span> <span
  m="3356150">an</span> <span m="3356270">email.</span> <span
  m="3360226">It'd</span> <span m="3360580">would</span> <span
  m="3360680">be</span> <span m="3360770">appreciated,</span> <span
  m="3361400">or</span> <span m="3361540">I'll</span> <span
  m="3361700">send</span> <span m="3362000">you</span> <span
  m="3362150">an</span> <span m="3362300">email,</span> <span
  m="3362660">if</span> <span m="3363170">necessary.</span> <span
  m="3363920">OK,</span> <span m="3364330">thanks.</span></p>
uid: 33f50eb0834bb3703bab34db3bc9745f
type: courses
layout: video
---
