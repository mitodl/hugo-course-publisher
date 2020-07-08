---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>In this lecture, Professor Strang
  details the four ways to solve least-squares problems. Solving least-squares
  problems comes in to play in the many applications that rely on data
  fitting.</p> <h2 class="subhead">Summary</h2> <ol>     <li>Solve
  \(A^{\mathtt{T}} Ax = A^{\mathtt{T}}b\) to minimize \(\Vert Ax - b
  \Vert^2\)</li>     <li>Gram-Schmidt \(A = QR\) leads to \(x = R^{-1}
  Q^{\mathtt{T}}b\).</li>     <li>The pseudoinverse directly multiplies \(b\) to
  give \(x\).</li>     <li>The best \(x\) is the limit of \((A^{\mathtt{T}}A +
  \delta I)^{-1} A^{\mathtt{T}}b\) as \(\delta \rightarrow 0\).</li> </ol>
  <p>Related section in textbook: II.2</p> <p><strong>Instructor:</strong> Prof.
  Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ZUU57Q3CFOU
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    title: Video-YouTube-Stream
    type: Video
    uid: 722bd9956ca380c373da30e84430076b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ZUU57Q3CFOU/default.jpg'
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: e541dcca0e6c2ed79ee423659480cc37
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ZUU57Q3CFOU
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6ae38d4dcdb929850eae7c9414ee0627
  - id: ZUU57Q3CFOU.srt
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-9-four-ways-to-solve-least-squares-problems/ZUU57Q3CFOU.srt
    title: 3play caption file
    type: null
    uid: 5c83561b1a739bdfa61f37942d3f5cc0
  - id: ZUU57Q3CFOU.pdf
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-9-four-ways-to-solve-least-squares-problems/ZUU57Q3CFOU.pdf
    title: 3play pdf file
    type: null
    uid: a54e21fb9376e6aec61e02d0127f41ab
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 97264e4fbe0d69f36d85769a2ee837e6
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 51c8c664d0be22fe0a06d4eadc7d94c4
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture09_300k.mp4'
    parent_uid: a575de1117f0e13b755d03aacd93f61b
    title: Video-Internet Archive-MP4
    type: Video
    uid: d891faaef203f94b4ff0f3ee48e68565
inline_embed_id: 90095561lecture9fourwaystosolveleastsquaresproblems89720209
order_index: 106
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-9-four-ways-to-solve-least-squares-problems
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-9-four-ways-to-solve-least-squares-problems
title: 'Lecture 9: Four Ways to Solve Least Squares Problems'
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
  m="18140">at</span> <span
  m="18290">ocw.mit.edu.</span></p><p>&nbsp;</p><p><span
  m="24420">PROFESSOR:</span> <span m="24510">Well,</span> <span
  m="24850">OK.</span> <span m="26490">So</span> <span m="26670">first</span>
  <span m="28200">important</span> <span m="28650">things</span> <span
  m="29010">about</span> <span m="29310">the</span> <span
  m="29460">course,</span> <span m="30330">plans</span> <span
  m="30750">for</span> <span m="30930">the</span> <span m="31050">course.</span>
  <span m="31890">And</span> <span m="32040">then</span> <span
  m="35160">today</span> <span m="35700">I'm</span> <span m="35880">going</span>
  <span m="36090">to</span> <span m="36180">move</span> <span
  m="36600">to</span> <span m="37110">the</span> <span m="38160">next</span>
  <span m="38490">section</span> <span m="38970">of</span> <span
  m="39150">the</span> <span m="39300">notes,</span> <span
  m="41430">section</span> <span m="42270">2,</span> <span m="42750">or</span>
  <span m="42840">part</span> <span m="43200">2,</span> <span m="43560">I</span>
  <span m="43680">should</span> <span m="43950">say.</span> <span
  m="44670">And</span> <span m="45150">actually</span> <span
  m="45630">I'll</span> <span m="46350">skip</span> <span m="47010">for</span>
  <span m="47190">the</span> <span m="47280">moments</span> <span
  m="48060">section</span> <span m="48630">2-1</span> <span m="49260">and</span>
  <span m="49410">go</span> <span m="49680">to</span> <span
  m="50220">section</span> <span m="50670">2-2,</span> <span
  m="52650">and</span> <span m="55230">all</span> <span m="56310">of</span>
  <span m="56430">chapter</span> <span m="56880">2</span> <span
  m="57180">will</span> <span m="57420">come</span> <span m="57720">to</span>
  <span m="57870">you</span> <span m="59280">probably</span> <span
  m="59850">today</span> <span m="61080">or</span> <span m="61890">latest</span>
  <span m="62430">tomorrow.</span> <span m="63840">So</span> <span
  m="64080">that's</span> <span m="64410">where</span> <span
  m="64620">we're</span> <span m="65430">going</span> <span
  m="65760">next.</span></p><p><span m="66480">I'm</span> <span
  m="66660">following</span> <span m="67140">the</span> <span
  m="67230">notes</span> <span m="67590">pretty</span> <span
  m="67950">carefully,</span> <span m="69060">except</span> <span
  m="69540">I'm</span> <span m="69720">going</span> <span m="69950">to</span>
  <span m="70080">skip</span> <span m="70710">the</span> <span
  m="71190">section</span> <span m="71670">on</span> <span
  m="71910">tensors</span> <span m="74670">until</span> <span m="75030">I</span>
  <span m="75180">learn</span> <span m="75480">more</span> <span
  m="77550">basically.</span> <span m="78660">Yeah.</span> <span
  m="79140">Yeah.</span> <span m="79650">I</span> <span m="79770">could</span>
  <span m="80010">say</span> <span m="80250">a</span> <span
  m="80310">little</span> <span m="80580">about</span> <span
  m="80900">tensors,</span> <span m="81510">but</span> <span
  m="82080">this</span> <span m="82830">flows</span> <span
  m="85860">naturally</span> <span m="86580">using</span> <span
  m="87360">the</span> <span m="88320">SVD.</span> <span m="89190">So</span>
  <span m="89430">it's</span> <span m="89610">just</span> <span
  m="92030">a</span> <span m="92100">terribly</span> <span
  m="92610">important</span> <span m="93060">problem,</span> <span
  m="94620">least</span> <span m="94870">squares.</span> <span
  m="95400">And</span> <span m="95760">of</span> <span m="95850">course,</span>
  <span m="96210">I</span> <span m="96390">know</span> <span
  m="96660">that</span> <span m="96810">you've</span> <span
  m="97050">seen</span> <span m="98130">one</span> <span m="98520">or</span>
  <span m="98640">two</span> <span m="98910">ways</span> <span
  m="99270">to</span> <span m="99420">do</span> <span m="99630">least</span>
  <span m="99900">squares.</span> <span m="100440">And</span> <span
  m="101550">really</span> <span m="102090">the</span> <span
  m="102240">whole</span> <span m="102450">subject</span> <span
  m="102930">comes</span> <span m="103260">together.</span></p><p><span
  m="104310">Here</span> <span m="104550">I</span> <span m="104670">want</span>
  <span m="104880">to</span> <span m="104970">say</span> <span
  m="105210">something,</span> <span m="106260">before</span> <span
  m="106650">I</span> <span m="108090">send</span> <span m="108480">out</span>
  <span m="108750">a</span> <span m="109410">plan</span> <span
  m="110010">for</span> <span m="110610">looking</span> <span
  m="111030">ahead</span> <span m="111360">for</span> <span
  m="111540">the</span> <span m="111660">course</span> <span
  m="112020">as</span> <span m="112170">a</span> <span m="112230">whole.</span>
  <span m="115750">So</span> <span m="115960">there's</span> <span
  m="116170">no</span> <span m="116350">final</span> <span
  m="116740">exam.</span> <span m="117220">And</span> <span m="117340">I</span>
  <span m="117490">don't</span> <span m="117850">really</span> <span
  m="118300">see</span> <span m="118720">how</span> <span m="118960">to</span>
  <span m="119650">examine</span> <span m="120340">you,</span> <span
  m="120730">how</span> <span m="120910">to</span> <span m="121030">give</span>
  <span m="121270">tests.</span> <span m="121810">I</span> <span
  m="122230">could,</span> <span m="122470">of</span> <span
  m="122530">course,</span> <span m="123280">create</span> <span
  m="124240">our</span> <span m="125050">tests</span> <span
  m="126220">about</span> <span m="126520">the</span> <span
  m="126640">linear</span> <span m="127030">algebra</span> <span
  m="127450">part.</span> <span m="128229">But</span> <span m="129910">I</span>
  <span m="130419">don't</span> <span m="130630">think</span> <span
  m="130870">it's--</span> <span m="131730">it's</span> <span
  m="132160">not</span> <span m="132490">sort</span> <span m="132730">of</span>
  <span m="132850">the</span> <span m="132970">style</span> <span
  m="133450">of</span> <span m="133600">this</span> <span
  m="133870">course</span> <span m="134440">to</span> <span
  m="136050">expect</span> <span m="136440">you</span> <span
  m="136630">quickly</span> <span m="137080">to</span> <span
  m="137200">create</span> <span m="137650">a</span> <span
  m="137740">proof</span> <span m="138150">for</span> <span
  m="138370">something</span> <span m="139510">in</span> <span
  m="139870">class.</span></p><p><span m="141010">So</span> <span
  m="141220">I</span> <span m="141310">think,</span> <span m="142120">and</span>
  <span m="142420">especially</span> <span m="143080">looking</span> <span
  m="143530">at</span> <span m="143680">what</span> <span
  m="143980">we're</span> <span m="144220">headed</span> <span
  m="144610">for,</span> <span m="146340">and</span> <span
  m="146530">moving</span> <span m="147340">quite</span> <span
  m="147760">steadily</span> <span m="148360">in</span> <span
  m="148480">that</span> <span m="148690">direction,</span> <span
  m="149740">is</span> <span m="153730">all</span> <span m="154060">the</span>
  <span m="154180">problems</span> <span m="154750">that</span> <span
  m="155350">this</span> <span m="155620">linear</span> <span
  m="156010">algebra</span> <span m="156430">is</span> <span
  m="156880">is</span> <span m="157210">aimed</span> <span m="157600">at,</span>
  <span m="158560">right</span> <span m="158860">up</span> <span
  m="159040">to</span> <span m="159280">and</span> <span
  m="159430">including</span> <span m="160900">conjugate</span> <span
  m="161560">gradient</span> <span m="162070">descent</span> <span
  m="163220">and</span> <span m="163420">deep</span> <span
  m="163780">learning,</span> <span m="166990">the</span> <span
  m="167140">overwhelmingly</span> <span m="170770">important</span> <span
  m="171710">and</span> <span m="173470">lively,</span> <span
  m="174100">active</span> <span m="175570">research</span> <span
  m="176140">area.</span> <span m="178270">I</span> <span
  m="178420">couldn't</span> <span m="178870">do</span> <span
  m="179050">better</span> <span m="179920">than</span> <span
  m="180280">to</span> <span m="180460">keep</span> <span m="181000">the</span>
  <span m="181090">course</span> <span m="181450">going</span> <span
  m="182140">in</span> <span m="182290">that</span> <span
  m="182500">direction.</span></p><p><span m="183500">So</span> <span
  m="183610">I</span> <span m="183790">think</span> <span m="184120">what</span>
  <span m="184330">I</span> <span m="184540">would</span> <span
  m="184840">ask</span> <span m="185290">you</span> <span m="186340">to</span>
  <span m="186520">do</span> <span m="187060">is</span> <span
  m="189190">late</span> <span m="190150">in</span> <span m="191050">sort</span>
  <span m="191290">of</span> <span m="192760">April,</span> <span
  m="193150">May,</span> <span m="194740">the</span> <span
  m="195400">regular</span> <span m="195880">homeworks</span> <span
  m="197200">I'll</span> <span m="197380">discontinue</span> <span
  m="198280">at</span> <span m="198430">a</span> <span m="198490">certain</span>
  <span m="198820">point.</span> <span m="199900">And</span> <span
  m="200080">then</span> <span m="200440">instead,</span> <span
  m="201850">I'll</span> <span m="202030">be</span> <span
  m="203110">asking</span> <span m="203680">and</span> <span
  m="203890">encouraging</span> <span m="205930">a</span> <span
  m="206020">project--</span> <span m="207220">I</span> <span
  m="207280">don't</span> <span m="207460">know</span> <span
  m="207640">if</span> <span m="208360">that's</span> <span
  m="208600">the</span> <span m="208690">right</span> <span
  m="208930">word</span> <span m="209200">to</span> <span m="209290">be</span>
  <span m="209440">using--</span> <span m="210700">in</span> <span
  m="210910">which</span> <span m="211180">you</span> <span
  m="211390">use</span> <span m="213280">what</span> <span
  m="213670">we've</span> <span m="213850">done.</span> <span
  m="216150">And</span> <span m="216340">I'll</span> <span
  m="216760">send</span> <span m="217120">out</span> <span m="217330">a</span>
  <span m="217840">message</span> <span m="218320">on</span> <span
  m="218470">Stellar</span> <span m="219070">listing</span> <span
  m="219880">five</span> <span m="220240">or</span> <span m="220360">six</span>
  <span m="221680">areas</span> <span m="222280">and</span> <span
  m="222460">only--</span> <span m="222820">I</span> <span
  m="222940">mean,</span> <span m="223120">one</span> <span m="223390">of</span>
  <span m="223480">them</span> <span m="223690">is</span> <span
  m="224950">the</span> <span m="225070">machine</span> <span
  m="225460">learning,</span> <span m="225920">deep</span> <span
  m="226090">learning</span> <span m="226450">part.</span> <span
  m="226850">But</span> <span m="227080">they're</span> <span
  m="227320">all</span> <span m="227500">the</span> <span
  m="227650">other</span> <span m="227890">parts,</span> <span
  m="230020">things</span> <span m="230410">we</span> <span
  m="231490">are</span> <span m="231700">learning</span> <span
  m="232150">how</span> <span m="232600">to do.</span> <span m="233050">How
  to</span> <span m="233140">find</span> <span m="233860">sparse</span> <span
  m="234260">solutions,</span> <span m="235060">for</span> <span
  m="235270">example,</span> <span m="237010">or</span> <span
  m="237520">something</span> <span m="237880">about</span> <span
  m="238150">the</span> <span m="238290">pseudo</span> <span
  m="238750">inverse.</span> <span m="239400">All</span> <span
  m="239620">kinds</span> <span m="239950">of</span> <span
  m="240010">things.</span></p><p><span m="240700">So</span> <span
  m="241690">that's</span> <span m="241990">my</span> <span
  m="242170">goal,</span> <span m="243400">is</span> <span m="243670">to</span>
  <span m="245920">give</span> <span m="246130">you</span> <span
  m="246310">something</span> <span m="246760">to</span> <span
  m="246880">do</span> <span m="247330">which</span> <span
  m="248140">uses</span> <span m="248770">the</span> <span
  m="249700">material</span> <span m="250000">that</span> <span
  m="250300">you've</span> <span m="250600">learned.</span> <span
  m="251800">And</span> <span m="252430">look,</span> <span
  m="252750">I'm</span> <span m="253120">not</span> <span
  m="253360">expecting</span> <span m="253930">a</span> <span
  m="254020">thesis.</span> <span m="255010">But</span> <span
  m="255460">it's</span> <span m="257050">a</span> <span m="258160">good</span>
  <span m="258370">chance.</span> <span m="259040">So</span> <span
  m="259269">it</span> <span m="259360">will</span> <span m="259540">be</span>
  <span m="259690">more</span> <span m="260050">than</span> <span
  m="260290">just,</span> <span m="262460">drag</span> <span
  m="262880">in</span> <span m="263120">some</span> <span m="263540">code</span>
  <span m="264050">for</span> <span m="264260">deep</span> <span
  m="264560">learning</span> <span m="265010">and</span> <span
  m="266480">some</span> <span m="266720">data</span> <span
  m="267020">matrix</span> <span m="267590">and</span> <span
  m="267770">do</span> <span m="268040">it.</span> <span m="269120">But</span>
  <span m="269360">we'll</span> <span m="269600">talk</span> <span
  m="269870">more</span> <span m="270980">as</span> <span m="271200">the</span>
  <span m="271280">time</span> <span m="271610">comes.</span></p><p><span
  m="272910">So</span> <span m="273200">I</span> <span m="273380">just</span>
  <span m="273560">thought</span> <span m="273800">I'd</span> <span
  m="273950">say,</span> <span m="274370">before</span> <span
  m="274760">sending</span> <span m="275180">out</span> <span
  m="275420">the</span> <span m="275540">announcement,</span> <span
  m="276140">I</span> <span m="276230">would</span> <span m="276440">say</span>
  <span m="276740">it's</span> <span m="276920">coming</span> <span
  m="277850">about</span> <span m="279410">what</span> <span
  m="281450">as</span> <span m="282940">a</span> <span m="284420">larger</span>
  <span m="285020">scale</span> <span m="285500">than</span> <span
  m="286280">single</span> <span m="286880">one</span> <span
  m="287180">week</span> <span m="287480">homeworks</span> <span
  m="288470">would</span> <span m="288710">be</span> <span
  m="290150">here</span> <span m="290450">before.</span> <span
  m="291090">Any</span> <span m="291330">thoughts</span> <span
  m="291710">about</span> <span m="292040">that?</span> <span
  m="292400">I</span> <span m="292520">haven't</span> <span
  m="293090">given</span> <span m="294440">you</span> <span
  m="294620">details.</span> <span m="296310">So</span> <span
  m="296450">let</span> <span m="296570">me</span> <span m="296720">do</span>
  <span m="296900">that</span> <span m="297110">with</span> <span
  m="297350">a</span> <span m="297410">message,</span> <span
  m="297890">and</span> <span m="298040">then</span> <span m="299090">ask</span>
  <span m="299450">again.</span> <span m="301520">But</span> <span
  m="302150">I'm</span> <span m="302330">open</span> <span
  m="302630">to--</span> <span m="302930">I</span> <span m="303230">hope</span>
  <span m="303740">you've</span> <span m="304100">understood--</span> <span
  m="304640">I</span> <span m="304700">think</span> <span m="304940">you</span>
  <span m="305060">have--</span> <span m="305400">that</span> <span
  m="306770">if</span> <span m="306950">you</span> <span m="307070">make</span>
  <span m="307310">suggestions,</span> <span m="308270">either</span> <span
  m="308600">directly</span> <span m="309140">to</span> <span
  m="309260">my</span> <span m="309470">email</span> <span m="310070">or</span>
  <span m="310880">on</span> <span m="311540">Piazza</span> <span
  m="312440">or</span> <span m="312620">whatever,</span> <span
  m="313850">they</span> <span m="314030">get</span> <span
  m="314210">paid</span> <span m="314510">attention</span> <span
  m="315050">to.</span></p><p><span m="315890">OK.</span> <span
  m="317450">Shall</span> <span m="317660">I</span> <span m="317740">just</span>
  <span m="317960">go</span> <span m="318140">forward</span> <span
  m="318590">with</span> <span m="319490">least</span> <span
  m="319670">squares?</span> <span m="321220">So</span> <span
  m="321370">what's</span> <span m="321670">the</span> <span
  m="321730">least</span> <span m="322000">squares</span> <span
  m="322360">problem,</span> <span m="322900">and</span> <span
  m="323500">what</span> <span m="323770">are</span> <span
  m="323890">these</span> <span m="324190">four</span> <span
  m="324580">ways,</span> <span m="326370">each</span> <span
  m="327640">bringing--</span> <span m="328470">so</span> <span
  m="328690">let</span> <span m="328780">me</span> <span m="329170">speak</span>
  <span m="329500">about</span> <span m="329740">the</span> <span
  m="329830">pseudo</span> <span m="330220">inverse</span> <span
  m="330640">first.</span> <span m="331150">OK,</span> <span
  m="331580">the</span> <span m="331690">pseudo</span> <span
  m="332140">inverse</span> <span m="332560">of</span> <span m="332710">a</span>
  <span m="332770">matrix.</span> <span m="333820">All</span> <span
  m="333910">right.</span> <span m="334270">Good.</span></p><p><span
  m="339620">So</span> <span m="339770">we</span> <span m="339860">have</span>
  <span m="339980">a</span> <span m="340040">matrix</span> <span
  m="340610">A,</span> <span m="342350">m</span> <span m="342530">by</span>
  <span m="342800">n.</span> <span m="344510">And</span> <span
  m="344870">the</span> <span m="345030">pseudo</span> <span
  m="345500">inverse</span> <span m="345980">I'm</span> <span
  m="346160">going</span> <span m="346340">to</span> <span
  m="346400">call</span> <span m="346850">A</span> <span m="347090">plus.</span>
  <span m="348680">And</span> <span m="348890">it</span> <span
  m="349370">naturally</span> <span m="350180">is</span> <span
  m="350420">going</span> <span m="350620">to</span> <span m="350720">be</span>
  <span m="351050">n</span> <span m="351410">by</span> <span
  m="351770">m.</span> <span m="352630">I'm</span> <span m="352760">going</span>
  <span m="352860">to</span> <span m="352940">multiply</span> <span
  m="353570">those</span> <span m="353900">together.</span> <span
  m="355370">And</span> <span m="355640">I'm</span> <span
  m="355790">going</span> <span m="355910">to</span> <span m="356000">get</span>
  <span m="356330">as</span> <span m="356540">near</span> <span
  m="356840">to</span> <span m="356990">the</span> <span
  m="357170">identity</span> <span m="357830">as</span> <span
  m="358010">I</span> <span m="358100">can.</span> <span
  m="359570">That's</span> <span m="359840">the</span> <span
  m="360020">idea,</span> <span m="360350">of</span> <span
  m="360470">course,</span> <span m="360800">of</span> <span
  m="360920">the</span> <span m="361040">pseudo</span> <span
  m="361520">inverse,</span> <span m="361970">The</span> <span
  m="362090">word</span> <span m="362360">pseudo</span> <span
  m="362870">is</span> <span m="363050">in</span> <span m="363170">there,</span>
  <span m="363470">so</span> <span m="365120">no</span> <span
  m="365300">one's</span> <span m="365630">deceived.</span> <span
  m="366330">It's</span> <span m="366500">not</span> <span m="366830">an</span>
  <span m="367010">actual</span> <span m="367550">inverse.</span></p><p><span
  m="368330">Oh,</span> <span m="368690">if</span> <span m="369080">the</span>
  <span m="369200">matrix</span> <span m="369800">is</span> <span
  m="369920">square</span> <span m="371060">and</span> <span
  m="371210">has</span> <span m="371540">an</span> <span
  m="371690">inverse,</span> <span m="372740">of</span> <span
  m="372860">course.</span> <span m="374210">Then</span> <span
  m="375320">if</span> <span m="376130">A</span> <span m="376310">inverse</span>
  <span m="376790">exists,</span> <span m="380060">which</span> <span
  m="380300">requires--</span> <span m="382130">everybody</span> <span
  m="382640">remembers</span> <span m="383270">it</span> <span
  m="383360">requires</span> <span m="383960">the</span> <span
  m="384080">matrix</span> <span m="384620">to</span> <span m="384710">be</span>
  <span m="384890">square,</span> <span m="385730">because</span> <span
  m="385970">I</span> <span m="386120">mean</span> <span
  m="386750">inverse</span> <span m="387290">on</span> <span
  m="387470">both</span> <span m="387740">sides.</span> <span
  m="389360">And</span> <span m="390890">it</span> <span
  m="390980">requires</span> <span m="392150">rank</span> <span
  m="392600">n,</span> <span m="393470">full</span> <span
  m="393830">rank.</span> <span m="394910">Then</span> <span
  m="395210">the</span> <span m="395360">inverse</span> <span
  m="395810">will</span> <span m="396050">exist.</span> <span
  m="396710">You</span> <span m="396830">can</span> <span
  m="397400">check</span> <span m="397760">it.</span> <span
  m="398000">MATLAB</span> <span m="398570">would</span> <span
  m="398750">check</span> <span m="399080">it</span> <span m="399230">by</span>
  <span m="399830">computing</span> <span m="400460">the</span> <span
  m="400610">pivots</span> <span m="401120">in</span> <span
  m="401240">elimination</span> <span m="402050">and</span> <span
  m="402200">finding</span> <span m="403070">n</span> <span
  m="403850">pivots.</span></p><p><span m="404540">So</span> <span
  m="405800">if</span> <span m="406010">A</span> <span m="406190">inverse</span>
  <span m="406610">exists,</span> <span m="407150">which</span> <span
  m="407390">means</span> <span m="409130">A</span> <span
  m="409370">times</span> <span m="409750">A</span> <span
  m="410000">inverse,</span> <span m="411080">and</span> <span
  m="411480">A</span> <span m="411680">inverse</span> <span
  m="412100">times</span> <span m="412470">A,</span> <span
  m="413780">both</span> <span m="414080">give</span> <span m="414380">I,</span>
  <span m="415280">then</span> <span m="417770">A</span> <span
  m="417950">plus</span> <span m="419660">is</span> <span m="420140">A</span>
  <span m="420290">inverse,</span> <span m="421070">of</span> <span
  m="421190">course.</span> <span m="424290">The</span> <span
  m="424460">pseudo</span> <span m="424900">inverse</span> <span
  m="425560">is</span> <span m="425770">the</span> <span
  m="425920">inverse</span> <span m="426370">when</span> <span
  m="426580">there</span> <span m="426730">is</span> <span
  m="426910">one.</span> <span m="427810">But</span> <span m="428110">I'm</span>
  <span m="428350">thinking</span> <span m="428740">about</span> <span
  m="429070">cases</span> <span m="429700">where</span> <span
  m="430600">either</span> <span m="430840">the</span> <span
  m="430990">matrix</span> <span m="431560">is</span> <span
  m="431710">rectangular,</span> <span m="433920">or</span> <span
  m="436080">it</span> <span m="436170">has</span> <span m="436740">zero</span>
  <span m="437190">eigenvalues.</span> <span m="439550">It</span> <span
  m="439920">could</span> <span m="440100">be</span> <span
  m="440280">square,</span> <span m="440820">but</span> <span
  m="441360">it</span> <span m="441480">has</span> <span m="441810">a
  null</span> <span m="442070">space,</span> <span m="443280">other</span> <span
  m="443520">than</span> <span m="443730">just</span> <span
  m="444090">the</span> <span m="444180">0</span> <span
  m="444540">vector.</span> <span m="445840">In</span> <span
  m="445860">other</span> <span m="446040">words,</span> <span
  m="446500">the</span> <span m="446520">columns</span> <span
  m="447120">are</span> <span m="447240">dependent.</span></p><p><span
  m="448800">What</span> <span m="449010">can</span> <span m="449220">we</span>
  <span m="449370">do</span> <span m="449670">then</span> <span
  m="451230">about</span> <span m="451620">inverting</span> <span
  m="452220">it?</span> <span m="452370">We</span> <span m="452550">can't</span>
  <span m="453090">literally</span> <span m="453750">invert it.</span> <span
  m="454350">If</span> <span m="455190">A</span> <span m="455400">has</span>
  <span m="455670">a</span> <span m="455760">null</span> <span
  m="456000">space,</span> <span m="457920">then</span> <span
  m="458160">when</span> <span m="458370">I</span> <span
  m="458520">multiply</span> <span m="459390">by</span> <span
  m="459660">a</span> <span m="459720">vector</span> <span m="460140">x</span>
  <span m="460530">in</span> <span m="460680">that</span> <span
  m="460860">null</span> <span m="461100">space,</span> <span
  m="461980">Ax</span> <span m="462420">will</span> <span m="462660">be</span>
  <span m="463850">0.</span> <span m="464910">And</span> <span
  m="465030">when</span> <span m="465180">I</span> <span
  m="465270">multiply</span> <span m="465720">by</span> <span
  m="466020">A</span> <span m="466230">inverse,</span> <span
  m="467550">still</span> <span m="467880">0.</span> <span
  m="468720">That</span> <span m="469080">can't</span> <span
  m="469440">change</span> <span m="469880">the</span> <span
  m="469960">0.</span> <span m="470850">So</span> <span m="471090">if</span>
  <span m="471240">there</span> <span m="471360">is</span> <span
  m="471510">an</span> <span m="471660">x</span> <span m="472020">in</span>
  <span m="472170">the</span> <span m="472260">null</span> <span
  m="472530">space,</span> <span m="473460">then</span> <span
  m="473760">this</span> <span m="474000">can't</span> <span
  m="474300">happen.</span> <span m="476560">So</span> <span
  m="476770">we</span> <span m="476890">just</span> <span m="477130">do</span>
  <span m="477350">the</span> <span m="477460">best</span> <span
  m="477700">we</span> <span m="477850">can.</span> <span m="479000">And</span>
  <span m="479050">that's</span> <span m="479290">what</span> <span
  m="479440">this</span> <span m="479610">pseudo</span> <span
  m="480040">inverse</span> <span m="480550">is.</span></p><p><span
  m="481390">And</span> <span m="482380">so</span> <span m="482740">let</span>
  <span m="482860">me</span> <span m="482980">draw</span> <span
  m="483220">a</span> <span m="483250">picture</span> <span m="483790">of</span>
  <span m="484010">the</span> <span m="484810">picture</span> <span
  m="485200">you</span> <span m="485380">know</span> <span m="485800">of</span>
  <span m="485980">the</span> <span m="486100">row</span> <span
  m="486400">space</span> <span m="489370">and</span> <span
  m="489830">the</span> <span m="489970">null</span> <span
  m="490270">space.</span> <span m="491530">OK,</span> <span
  m="491920">and</span> <span m="492040">it's</span> <span
  m="492250">there,</span> <span m="492640">you</span> <span
  m="492760">see.</span> <span m="493120">There</span> <span
  m="493330">is</span> <span m="493560">a null</span> <span
  m="493780">space.</span> <span m="494950">And</span> <span
  m="495100">over</span> <span m="495370">here</span> <span m="495640">I</span>
  <span m="495790">have</span> <span m="496060">the</span> <span
  m="496180">column</span> <span m="496600">space</span> <span
  m="497950">and</span> <span m="498510">the</span> <span m="498620">null</span>
  <span m="498820">space</span> <span m="499210">of</span> <span
  m="499330">A</span> <span m="499480">transpose.</span> <span
  m="500880">OK.</span> <span m="501850">So</span> <span m="502060">this</span>
  <span m="502360">is</span> <span m="502600">the</span> <span
  m="503110">row</span> <span m="503530">space,</span> <span
  m="504130">of</span> <span m="504250">course.</span> <span
  m="504620">That's</span> <span m="504770">the</span> <span
  m="504930">column</span> <span m="505300">space</span> <span
  m="505720">of</span> <span m="505880">A</span> <span
  m="507400">transpose,</span> <span m="508180">and</span> <span
  m="508330">there</span> <span m="508540">is</span> <span m="508660">the</span>
  <span m="508780">column</span> <span m="509170">space</span> <span
  m="509530">of</span> <span m="509650">A.</span> <span
  m="510240">OK.</span></p><p><span m="512030">So</span> <span
  m="512179">which</span> <span m="512419">part</span> <span
  m="512659">of</span> <span m="512720">that</span> <span
  m="512929">picture</span> <span m="513440">is</span> <span
  m="513620">invertible,</span> <span m="514340">and</span> <span
  m="514520">which</span> <span m="514789">part</span> <span
  m="515059">of</span> <span m="515120">the</span> <span
  m="515240">picture</span> <span m="515659">is</span> <span
  m="515780">hopeless?</span> <span m="517250">The</span> <span
  m="517400">top</span> <span m="517669">part</span> <span m="518150">is</span>
  <span m="518330">invertible.</span> <span m="519710">This</span> <span
  m="520010">is</span> <span m="520220">the</span> <span
  m="522049">r-dimensional</span> <span m="522980">row</span> <span
  m="523309">space,</span> <span m="524240">r-dimensional</span> <span
  m="525080">column</span> <span m="525470">space.</span> <span
  m="526040">A</span> <span m="526430">takes</span> <span m="527240">a</span>
  <span m="527300">vector</span> <span m="527810">in</span> <span
  m="527990">here,</span> <span m="528680">zaps</span> <span
  m="529190">it</span> <span m="529340">into</span> <span
  m="529640">every--</span> <span m="530450">you</span> <span
  m="530630">always</span> <span m="531020">end</span> <span
  m="531200">up</span> <span m="531350">in</span> <span m="531470">the</span>
  <span m="531560">column</span> <span m="531950">space.</span> <span
  m="534710">Here</span> <span m="534950">I</span> <span m="535070">take</span>
  <span m="535350">a</span> <span m="535410">vector</span> <span
  m="535850">in</span> <span m="535940">the</span> <span m="536030">row</span>
  <span m="536300">space--</span> <span m="537410">say,</span> <span
  m="537860">x--</span> <span m="538940">and</span> <span m="539360">it</span>
  <span m="539510">gets</span> <span m="539780">mapped</span> <span
  m="540140">to</span> <span m="540320">Ax.</span></p><p><span
  m="542210">And</span> <span m="543500">between</span> <span
  m="543920">those</span> <span m="544250">two</span> <span
  m="544520">spaces,</span> <span m="546170">A</span> <span m="546380">is</span>
  <span m="546560">entirely</span> <span m="547200">invertible.</span> <span
  m="550080">You</span> <span m="550550">get</span> <span
  m="550850">separate</span> <span m="551300">vectors</span> <span
  m="551780">here,</span> <span m="552050">go</span> <span m="552260">to</span>
  <span m="552380">separate</span> <span m="552770">vectors</span> <span
  m="553250">in</span> <span m="553370">the</span> <span
  m="553760">column</span> <span m="554180">space,</span> <span
  m="555230">and</span> <span m="556340">the</span> <span
  m="556730">inverse</span> <span m="557180">just</span> <span
  m="557420">brings</span> <span m="557750">it</span> <span
  m="557870">back.</span> <span m="559720">So</span> <span m="559890">we</span>
  <span m="560040">know</span> <span m="560370">what</span> <span
  m="561750">the</span> <span m="561880">pseudo</span> <span
  m="562350">inverse</span> <span m="562800">should</span> <span
  m="563070">do.</span> <span m="563770">It</span> <span m="564000">will</span>
  <span m="564150">take</span> <span m="564660">A</span> <span
  m="565200">will</span> <span m="565770">go</span> <span m="566010">that</span>
  <span m="566220">way,</span> <span m="567450">and</span> <span
  m="567810">A</span> <span m="567990">plus,</span> <span m="570060">the</span>
  <span m="570310">pseudo</span> <span m="570720">inverse</span> <span
  m="571170">will</span> <span m="571380">be</span> <span
  m="571740">just--</span> <span m="576270">on</span> <span
  m="576450">the</span> <span m="576540">top</span> <span m="576900">half</span>
  <span m="577170">of</span> <span m="577260">the</span> <span
  m="577380">picture,</span> <span m="577890">it'll</span> <span
  m="578130">give</span> <span m="578370">us</span> <span m="579090">A</span>
  <span m="579300">plus.</span> <span m="579810">We'll</span> <span
  m="579990">take</span> <span m="580380">Ax</span> <span m="580650">back</span>
  <span m="581040">to</span> <span m="581490">x</span> <span
  m="584680">in</span> <span m="584880">the</span> <span m="585480">top</span>
  <span m="585780">half.</span></p><p><span m="586800">Now,</span> <span
  m="587040">what</span> <span m="587250">about</span> <span
  m="587490">here?</span> <span m="588570">That's</span> <span
  m="588840">where</span> <span m="589200">we</span> <span
  m="589440">have</span> <span m="589710">trouble,</span> <span
  m="590050">when</span> <span m="590130">we</span> <span
  m="590310">don't</span> <span m="590550">have--</span> <span
  m="591210">that's</span> <span m="591450">what</span> <span
  m="591660">spoils</span> <span m="592260">our</span> <span
  m="592410">inverse.</span> <span m="593340">If</span> <span
  m="593490">there</span> <span m="593610">is</span> <span m="593820">a
  null</span> <span m="594060">space</span> <span m="594510">vector,</span>
  <span m="596310">then</span> <span m="597150">it</span> <span
  m="598410">goes</span> <span m="598710">where?</span> <span
  m="599970">When</span> <span m="600160">you</span> <span
  m="600250">multiply</span> <span m="600700">by</span> <span
  m="600940">A,</span> <span m="601800">this</span> <span m="602020">guy</span>
  <span m="602260">in</span> <span m="602380">the</span> <span
  m="602440">null</span> <span m="602680">space</span> <span
  m="603130">goes</span> <span m="603460">to</span> <span m="603550">0.</span>
  <span m="607050">Usually</span> <span m="607530">along</span> <span
  m="607870">a</span> <span m="607950">straighter</span> <span
  m="608430">line</span> <span m="608730">than</span> <span
  m="608910">I've</span> <span m="609090">drawn.</span> <span
  m="609840">But</span> <span m="610320">it goes there.</span> <span
  m="610590">It</span> <span m="610860">gets</span> <span m="611160">to</span>
  <span m="611310">0.</span></p><p><span m="612300">So</span> <span
  m="613080">you</span> <span m="613530">can't</span> <span
  m="613860">raise</span> <span m="614220">it</span> <span
  m="614310">from</span> <span m="614520">the</span> <span
  m="614610">dead,</span> <span m="614970">so</span> <span m="615210">to</span>
  <span m="615330">speak.</span> <span m="615780">You</span> <span
  m="615900">can't</span> <span m="616410">recover</span> <span
  m="616920">it</span> <span m="617340">when</span> <span
  m="617880">there's</span> <span m="618090">no</span> <span m="618240">A</span>
  <span m="618510">inverse.</span> <span m="618950">So</span> <span
  m="619050">we</span> <span m="619200">have</span> <span m="619410">to</span>
  <span m="619530">think,</span> <span m="620400">what</span> <span
  m="620700">shall</span> <span m="621000">A</span> <span
  m="621240">inverse</span> <span m="621780">do</span> <span
  m="622080">to</span> <span m="622260">this</span> <span
  m="623580">space</span> <span m="624120">here,</span> <span
  m="625160">where</span> <span m="625380">nobody's</span> <span
  m="626040">hitting</span> <span m="626340">it?</span> <span
  m="626910">So</span> <span m="627430">this</span> <span
  m="628470">would</span> <span m="628650">be</span> <span m="629010">the</span>
  <span m="632570">null</span> <span m="632990">space</span> <span
  m="633500">of</span> <span m="633650">A</span> <span
  m="633830">transpose.</span> <span m="634830">Because</span> <span
  m="635130">A--</span> <span m="636830">sorry--</span> <span
  m="637280">yeah,</span> <span m="637520">what</span> <span
  m="637760">should</span> <span m="638000">the</span> <span
  m="638150">pseudo</span> <span m="638750">inverse</span> <span
  m="639230">do?</span> <span m="640040">I</span> <span m="640190">said</span>
  <span m="640460">what</span> <span m="640670">should</span> <span
  m="640820">the</span> <span m="640970">inverse</span> <span
  m="641450">do?</span> <span m="641690">The</span> <span
  m="641840">inverse</span> <span m="642230">is</span> <span
  m="642380">helpless.</span></p><p><span m="643430">But</span> <span
  m="643580">we</span> <span m="643790">have</span> <span m="644060">to</span>
  <span m="644960">define</span> <span m="645530">A</span> <span
  m="645680">plus.</span> <span m="646610">I've</span> <span
  m="646790">said</span> <span m="647150">what</span> <span m="647360">it</span>
  <span m="647510">should</span> <span m="647690">do</span> <span
  m="648110">on</span> <span m="648380">that</span> <span m="648650">guy,</span>
  <span m="649160">on</span> <span m="649310">the</span> <span
  m="649400">column</span> <span m="649790">space.</span> <span
  m="650630">It</span> <span m="650720">should</span> <span
  m="650900">take</span> <span m="651230">everything</span> <span
  m="651680">in</span> <span m="651740">the</span> <span
  m="651860">column</span> <span m="652190">space</span> <span
  m="652520">back</span> <span m="652790">where</span> <span
  m="652940">it</span> <span m="653060">came</span> <span
  m="653300">from.</span> <span m="654790">But</span> <span
  m="655000">what</span> <span m="655330">should</span> <span
  m="655630">it</span> <span m="655720">do</span> <span m="656300">on</span>
  <span m="656680">this</span> <span m="657190">orthogonal</span> <span
  m="658300">space,</span> <span m="658930">where--</span> <span
  m="660020">yeah,</span> <span m="660310">just</span> <span
  m="660550">tell</span> <span m="660790">me,</span> <span
  m="660980">what</span> <span m="661960">do</span> <span m="662020">you</span>
  <span m="662080">think?</span> <span m="663460">If</span> <span
  m="663970">I</span> <span m="664150">have</span> <span m="664330">some</span>
  <span m="664660">vector</span> <span m="665170">here--</span> <span
  m="666750">let's</span> <span m="666940">call</span> <span
  m="667140">it</span> <span m="667330">V</span> <span m="667705">r</span> <span
  m="668680">plus</span> <span m="669100">1.</span> <span m="669580">That</span>
  <span m="669760">would</span> <span m="669940">be</span> <span
  m="670120">like--</span> <span m="671410">so</span> <span
  m="671650">here</span> <span m="672400">I</span> <span m="672550">have</span>
  <span m="675900">a</span> <span m="676760">nice</span> <span
  m="680830">basis</span> <span m="681490">for</span> <span
  m="681700">the</span> <span m="681820">column</span> <span
  m="682210">space.</span> <span m="684430">I</span> <span
  m="684550">would</span> <span m="684730">use</span> <span
  m="685030">V's</span> <span m="686380">for</span> <span m="686620">the</span>
  <span m="687520">ones</span> <span m="688300">that</span> <span
  m="688450">come</span> <span m="688690">up</span> <span m="688870">in</span>
  <span m="689020">the</span> <span m="689440">SVD.</span> <span
  m="690400">They're</span> <span m="690700">orthogonal,</span> <span
  m="691570">and</span> <span m="691690">they</span> <span
  m="691840">come</span> <span m="692080">from</span> <span
  m="692320">orthogonal</span> <span m="693040">U's.</span></p><p><span
  m="694090">So</span> <span m="694300">the</span> <span m="694480">top</span>
  <span m="694810">half</span> <span m="695020">is</span> <span
  m="695170">great.</span> <span m="696040">What</span> <span
  m="696310">shall</span> <span m="696580">I</span> <span m="696730">do</span>
  <span m="697570">with</span> <span m="698680">this</span> <span
  m="699190">stuff?</span> <span m="700120">I'm</span> <span
  m="700240">going</span> <span m="700330">to</span> <span
  m="700450">send</span> <span m="700780">that</span> <span
  m="701050">back</span> <span m="701530">by</span> <span m="701890">A</span>
  <span m="702325">plus.</span> <span m="703780">And</span> <span
  m="704620">what</span> <span m="704800">am</span> <span m="704890">I</span>
  <span m="704980">going</span> <span m="705080">to</span> <span
  m="705190">do</span> <span m="705340">with</span> <span m="705520">it?</span>
  <span m="706720">Send</span> <span m="707020">it</span> <span
  m="707110">to--</span> <span m="708370">nowhere</span> <span
  m="708790">else</span> <span m="709150">could</span> <span
  m="709390">it</span> <span m="709480">go.</span> <span m="709750">0</span>
  <span m="710140">is</span> <span m="710230">the</span> <span
  m="710350">right</span> <span m="710620">answer.</span> <span
  m="711430">All</span> <span m="711640">this</span> <span
  m="711820">stuff</span> <span m="712210">goes</span> <span
  m="712510">back</span> <span m="712900">to</span> <span
  m="713080">0.</span></p><p><span m="716260">I'm</span> <span
  m="716410">looking</span> <span m="716710">for</span> <span
  m="716890">a</span> <span m="717820">linear</span> <span
  m="718360">operator,</span> <span m="718900">a</span> <span
  m="718960">matrix.</span> <span m="720090">And</span> <span
  m="720220">I</span> <span m="720400">have</span> <span m="720640">to</span>
  <span m="720760">think,</span> <span m="721480">once</span> <span
  m="721750">I've</span> <span m="721900">decided</span> <span
  m="722440">what</span> <span m="722620">to</span> <span m="722740">do</span>
  <span m="722980">with</span> <span m="723190">all</span> <span
  m="723370">those</span> <span m="724270">and</span> <span
  m="724360">what</span> <span m="724540">to</span> <span m="724660">do</span>
  <span m="724810">with</span> <span m="724990">all</span> <span
  m="725170">these,</span> <span m="725740">then</span> <span
  m="725980">I</span> <span m="726100">know</span> <span m="726280">what</span>
  <span m="726490">to</span> <span m="726640">do</span> <span
  m="726850">with</span> <span m="727030">any</span> <span
  m="727300">combination.</span> <span m="728110">So</span> <span
  m="728290">I've</span> <span m="728500">got</span> <span m="728740">it.</span>
  <span m="729640">I've</span> <span m="729760">got</span> <span
  m="730030">it.</span> <span m="730540">So</span> <span m="730780">the</span>
  <span m="730930">idea</span> <span m="731320">will</span> <span
  m="731500">be,</span> <span m="732250">this</span> <span m="732580">is</span>
  <span m="732790">true</span> <span m="734640">for</span> <span
  m="735090">x</span> <span m="736350">in</span> <span m="736830">the</span>
  <span m="736920">row</span> <span m="737160">space.</span> <span
  m="739050">For</span> <span m="739230">x</span> <span m="739530">in</span>
  <span m="739650">the</span> <span m="739740">row</span> <span
  m="739980">space,</span> <span m="744160">if</span> <span m="744400">x</span>
  <span m="744640">is</span> <span m="744790">in</span> <span
  m="744910">the</span> <span m="745000">row</span> <span
  m="745240">space,</span> <span m="745735">Ax</span> <span m="746230">is</span>
  <span m="746350">in</span> <span m="746470">the</span> <span
  m="746590">column</span> <span m="746980">space,</span> <span
  m="747430">and</span> <span m="747580">A</span> <span
  m="747820">inverse</span> <span m="748270">just</span> <span
  m="748450">brings</span> <span m="748810">it</span> <span
  m="748930">back</span> <span m="749710">as</span> <span m="749890">it</span>
  <span m="749980">should.</span></p><p><span m="750980">And</span> <span
  m="751690">in</span> <span m="752350">the</span> <span m="752440">case</span>
  <span m="752770">of</span> <span m="752930">an</span> <span
  m="753220">invertible</span> <span m="753910">matrix</span> <span
  m="754510">A,</span> <span m="755080">what</span> <span
  m="755260">happens</span> <span m="755650">to</span> <span
  m="755740">my</span> <span m="755980">picture?</span> <span
  m="757000">What</span> <span m="757390">is</span> <span m="757510">this</span>
  <span m="757660">picture</span> <span m="758080">looking</span> <span
  m="758440">like</span> <span m="759100">if</span> <span m="759310">A</span>
  <span m="759610">is</span> <span m="759790">actually</span> <span
  m="760390">a</span> <span m="760840">6</span> <span m="761230">by</span> <span
  m="761470">6</span> <span m="762070">invertible</span> <span
  m="762580">matrix?</span> <span m="764020">In</span> <span
  m="764170">that</span> <span m="764350">case,</span> <span
  m="764830">what's</span> <span m="766330">in</span> <span m="766510">my</span>
  <span m="766690">picture</span> <span m="767200">and</span> <span
  m="767320">what</span> <span m="767530">is</span> <span m="767680">not</span>
  <span m="768070">in</span> <span m="768280">my</span> <span
  m="768460">picture?</span> <span m="770800">All</span> <span
  m="771010">this</span> <span m="771340">null</span> <span
  m="771640">space</span> <span m="771940">stuff</span> <span
  m="772210">isn't</span> <span m="772440">there.</span> <span
  m="774070">And</span> <span m="774320">null</span> <span
  m="774500">space</span> <span m="774830">is</span> <span
  m="775040">just</span> <span m="775360">a</span> <span m="775400">0</span>
  <span m="775790">vector.</span> <span m="777800">But</span> <span
  m="778010">all</span> <span m="778190">that</span> <span m="778400">I</span>
  <span m="778490">don't</span> <span m="778730">have</span> <span
  m="778880">to</span> <span m="778970">worry</span> <span
  m="779240">about.</span> <span m="779670">But</span> <span
  m="779870">in</span> <span m="779960">general,</span> <span
  m="780560">I</span> <span m="780650">do</span> <span m="780860">have</span>
  <span m="781070">to</span> <span m="781190">say.</span></p><p><span
  m="781980">So</span> <span m="782570">the</span> <span m="782720">point</span>
  <span m="783110">is</span> <span m="783380">that</span> <span
  m="784040">A</span> <span m="784280">plus</span> <span m="787160">on</span>
  <span m="787610">the--</span> <span m="788890">what</span> <span
  m="789250">am</span> <span m="789480">I</span> <span m="789710">calling</span>
  <span m="790190">this?</span> <span m="792330">It's</span> <span
  m="792610">the</span> <span m="792710">null</span> <span
  m="793120">space</span> <span m="793660">of</span> <span m="793810">A</span>
  <span m="793990">transpose,</span> <span m="794980">or</span> <span
  m="797150">whatever</span> <span m="797600">on</span> <span
  m="798260">V</span> <span m="798740">r</span> <span m="799070">plus</span>
  <span m="799430">1</span> <span m="799705">to</span> <span
  m="799980">Vn,</span> <span m="805190">all</span> <span
  m="805400">those</span> <span m="805790">vectors,</span> <span
  m="807650">the</span> <span m="808370">guys</span> <span
  m="808850">that</span> <span m="809000">are</span> <span m="809120">not</span>
  <span m="810110">orthogonal</span> <span m="810770">to</span> <span
  m="810890">the</span> <span m="811010">column</span> <span
  m="811400">space.</span> <span m="812150">Then</span> <span
  m="814140">we</span> <span m="814400">have</span> <span m="814550">to</span>
  <span m="814670">say,</span> <span m="814910">what</span> <span
  m="815120">does</span> <span m="815360">A</span> <span m="815510">plus</span>
  <span m="815840">do</span> <span m="815990">to</span> <span
  m="816110">them?</span> <span m="816540">And</span> <span
  m="816560">the</span> <span m="816710">answer</span> <span
  m="817040">is,</span> <span m="817250">it</span> <span m="817340">takes</span>
  <span m="817700">them</span> <span m="817850">all</span> <span
  m="818000">to</span> <span m="818090">0.</span></p><p><span
  m="821020">So</span> <span m="821620">there</span> <span m="822010">is</span>
  <span m="822130">a</span> <span m="822220">picture</span> <span
  m="823450">using</span> <span m="823990">what</span> <span m="825460">I</span>
  <span m="825580">call</span> <span m="825790">the</span> <span
  m="825910">big</span> <span m="826150">picture</span> <span
  m="826570">of</span> <span m="826660">linear</span> <span
  m="827020">algebra,</span> <span m="827470">the</span> <span
  m="827590">four</span> <span m="827860">spaces.</span> <span
  m="828850">You</span> <span m="829480">see</span> <span m="829750">what</span>
  <span m="830020">A</span> <span m="830140">plus</span> <span
  m="830620">should</span> <span m="830860">do.</span> <span
  m="831520">Now,</span> <span m="833420">I</span> <span m="833480">need
  a</span> <span m="833820">little</span> <span m="833990">formula</span> <span
  m="834500">for</span> <span m="834740">it.</span> <span m="835610">I've</span>
  <span m="835700">got</span> <span m="837320">the</span> <span
  m="837440">plan</span> <span m="837950">for</span> <span
  m="838130">what</span> <span m="838340">it</span> <span
  m="838430">should</span> <span m="838640">be,</span> <span
  m="838970">and</span> <span m="839120">it's</span> <span
  m="839540">sort</span> <span m="839750">of</span> <span m="839810">the</span>
  <span m="839930">natural</span> <span m="840440">thing.</span> <span
  m="841310">So</span> <span m="841610">A</span> <span m="841820">plus</span>
  <span m="842330">A</span> <span m="842840">is,</span> <span
  m="843260">you</span> <span m="843410">could</span> <span
  m="843620">say</span> <span m="844160">it's</span> <span m="844370">a</span>
  <span m="844460">projection</span> <span m="845780">matrix.</span> <span
  m="846470">It's</span> <span m="846680">not</span> <span m="846920">the</span>
  <span m="847070">identity</span> <span m="847610">matrix</span> <span
  m="848180">because</span> <span m="850700">if</span> <span m="851180">x</span>
  <span m="851420">is</span> <span m="851570">in</span> <span
  m="851690">the</span> <span m="851810">null</span> <span
  m="852050">space,</span> <span m="852590">A</span> <span
  m="852740">plus</span> <span m="853070">A</span> <span m="854790">will</span>
  <span m="854900">take</span> <span m="855200">it</span> <span
  m="855260">to</span> <span m="855400">0.</span> <span m="857750">So</span>
  <span m="857990">it's</span> <span m="858140">a</span> <span
  m="858280">projection.</span></p><p><span m="858830">A</span> <span
  m="859010">plus</span> <span m="859400">A</span> <span m="859670">is</span>
  <span m="859910">the</span> <span m="860090">identity</span> <span
  m="860780">on</span> <span m="860900">the</span> <span m="860990">top</span>
  <span m="861350">half,</span> <span m="862130">and</span> <span
  m="862505">0</span> <span m="862880">on</span> <span m="863030">the</span>
  <span m="863090">bottom</span> <span m="863450">half.</span> <span
  m="863840">That's</span> <span m="864470">really</span> <span
  m="865280">what</span> <span m="865670">the</span> <span
  m="865790">matrix</span> <span m="866330">is.</span> <span
  m="866780">And</span> <span m="869330">now,</span> <span m="871490">I</span>
  <span m="871580">want</span> <span m="871790">a</span> <span
  m="872060">simple</span> <span m="872510">formula</span> <span
  m="872990">for</span> <span m="873260">it.</span> <span m="874240">And</span>
  <span m="874400">I</span> <span m="874490">guess</span> <span
  m="875120">my</span> <span m="875360">message</span> <span
  m="875870">here</span> <span m="876170">is,</span> <span
  m="877340">that</span> <span m="877490">if</span> <span
  m="877580">we're</span> <span m="877700">looking</span> <span
  m="877970">for</span> <span m="878120">a</span> <span m="878180">nice</span>
  <span m="878510">expression,</span> <span m="880040">start</span> <span
  m="880430">with</span> <span m="880610">the</span> <span
  m="880760">SVD.</span> <span m="881750">Because</span> <span
  m="882120">the</span> <span m="882270">SVD</span> <span
  m="882920">works</span> <span m="883280">for</span> <span
  m="883460">any</span> <span m="883670">matrix.</span> <span
  m="886070">And</span> <span m="886250">it</span> <span
  m="886340">writes</span> <span m="886730">it</span> <span m="886940">as</span>
  <span m="887300">an</span> <span m="887420">orthogonal</span> <span
  m="888080">matrix</span> <span m="889160">times</span> <span
  m="889550">a</span> <span m="889640">diagonal</span> <span
  m="890270">matrix</span> <span m="890900">times</span> <span
  m="891260">an</span> <span m="891380">orthogonal</span> <span
  m="891980">matrix.</span></p><p><span m="893920">And</span> <span
  m="894100">now</span> <span m="894370">I</span> <span m="894520">want</span>
  <span m="894880">to</span> <span m="895150">invert</span> <span
  m="895540">it.</span> <span m="896560">Well,</span> <span
  m="896890">suppose</span> <span m="897550">A</span> <span
  m="898690">had</span> <span m="898990">an</span> <span
  m="899140">inverse.</span> <span m="900460">What</span> <span
  m="900640">would</span> <span m="900820">that</span> <span
  m="901060">be?</span> <span m="904600">This</span> <span m="904810">is</span>
  <span m="905020">if</span> <span m="905330">invertible,</span> <span
  m="909760">what</span> <span m="909970">would</span> <span
  m="910180">be</span> <span m="910510">the</span> <span m="911050">SVD</span>
  <span m="911740">of</span> <span m="911890">A</span> <span
  m="912070">inverse?</span> <span m="913870">What</span> <span
  m="914050">would</span> <span m="914200">be</span> <span m="914470">the</span>
  <span m="914650">singular</span> <span m="915160">value</span> <span
  m="915550">decomposition,</span> <span m="916780">if</span> <span
  m="917320">this</span> <span m="917530">is</span> <span
  m="917740">good?</span> <span m="918080">So</span> <span
  m="918130">when</span> <span m="918400">is</span> <span m="918550">this</span>
  <span m="918760">going</span> <span m="918870">to</span> <span
  m="919030">be</span> <span m="919150">good?</span> <span
  m="920410">What</span> <span m="920680">would</span> <span m="921940">I</span>
  <span m="922030">have</span> <span m="922180">to</span> <span
  m="922270">know</span> <span m="922480">about</span> <span
  m="922720">that</span> <span m="922900">matrix</span> <span
  m="923440">sigma,</span> <span m="924380">that</span> <span
  m="924550">diagonal</span> <span m="925240">matrix</span> <span
  m="925780">in</span> <span m="925900">the</span> <span
  m="925990">middle,</span> <span m="926680">if</span> <span
  m="926890">this</span> <span m="927220">is</span> <span
  m="928240">truly</span> <span m="928690">an</span> <span
  m="929020">invertible</span> <span m="929470">matrix?</span></p><p><span
  m="932100">Well,</span> <span m="932360">no.</span> <span
  m="932600">What's</span> <span m="932900">its</span> <span
  m="933110">name?</span> <span m="933590">Those</span> <span
  m="933860">are</span> <span m="933950">not</span> <span
  m="934190">eigenvalues.</span> <span m="935270">Well,</span> <span
  m="935550">they're</span> <span m="936080">eigenvalues</span> <span
  m="936830">of</span> <span m="936980">A</span> <span
  m="937160">transpose</span> <span m="937550">A.</span> <span
  m="938900">But</span> <span m="939170">they're</span> <span
  m="939380">singular</span> <span m="939920">values.</span> <span
  m="940280">Singular</span> <span m="940680">value,</span> <span
  m="941010">that's</span> <span m="941150">fine.</span> <span
  m="941850">So</span> <span m="941930">that's</span> <span
  m="942200">the</span> <span m="942320">singular</span> <span
  m="942860">value</span> <span m="943280">matrix.</span> <span
  m="944300">And</span> <span m="944480">what</span> <span
  m="944750">would</span> <span m="944900">be</span> <span m="945110">the</span>
  <span m="945260">situation</span> <span m="946040">if</span> <span
  m="948310">A</span> <span m="948520">had</span> <span m="948760">an</span>
  <span m="948940">inverse?</span> <span m="951250">There</span> <span
  m="951340">would</span> <span m="951490">be</span> <span m="951640">no</span>
  <span m="951910">0's.</span> <span m="953050">All</span> <span
  m="953230">the</span> <span m="953360">singular</span> <span
  m="953830">values</span> <span m="954220">would</span> <span
  m="954310">be</span> <span m="954490">sitting</span> <span
  m="954880">there,</span> <span m="955120">sigma</span> <span
  m="955540">1</span> <span m="955780">to</span> <span m="955900">sigma</span>
  <span m="956320">n.</span></p><p><span m="957220">What</span> <span
  m="957400">would</span> <span m="957490">be</span> <span m="957640">the</span>
  <span m="957790">shape</span> <span m="958180">of</span> <span
  m="958270">this</span> <span m="958570">sigma</span> <span
  m="959020">matrix?</span> <span m="959650">If</span> <span m="961090">I</span>
  <span m="961150">have</span> <span m="961420">an</span> <span
  m="961540">inverse,</span> <span m="962190">then</span> <span m="962630">it's
  got</span> <span m="962890">to</span> <span m="963070">be</span> <span
  m="963580">square</span> <span m="964340">n</span> <span m="964540">by</span>
  <span m="964810">n.</span> <span m="965470">So</span> <span
  m="965860">what's</span> <span m="966250">the</span> <span
  m="966370">shape</span> <span m="966790">of</span> <span m="967330">the</span>
  <span m="967480">sigma</span> <span m="967920">guy?</span> <span
  m="969280">Also</span> <span m="969700">square,</span> <span
  m="970390">n</span> <span m="970630">by</span> <span m="970900">n.</span>
  <span m="972220">So</span> <span m="972430">the</span> <span
  m="972550">invertible</span> <span m="973150">case</span> <span
  m="974290">would</span> <span m="974500">be--</span> <span
  m="976010">and</span> <span m="976190">I'm</span> <span
  m="976340">going</span> <span m="976490">to</span> <span
  m="976610">erase</span> <span m="976865">this</span> <span
  m="977120">in</span> <span m="977270">a</span> <span
  m="977330">minute--</span> <span m="978110">the</span> <span
  m="978230">invertbile</span> <span m="978770">case</span> <span
  m="979250">would</span> <span m="979460">be</span> <span
  m="980450">when</span> <span m="981410">sigma</span> <span
  m="981770">is</span> <span m="981890">just</span> <span
  m="982130">that.</span> <span m="983426">That</span> <span
  m="983860">would</span> <span m="983960">be</span> <span m="984120">the</span>
  <span m="984270">invertible</span> <span m="984810">case.</span></p><p><span
  m="985800">So</span> <span m="987210">let's</span> <span
  m="987420">see.</span> <span m="988830">Can</span> <span m="989070">you</span>
  <span m="989220">finish</span> <span m="989850">this</span> <span
  m="990120">formula?</span> <span m="990660">What</span> <span
  m="990810">would</span> <span m="990960">be</span> <span m="991110">the</span>
  <span m="992100">SVD</span> <span m="993480">of</span> <span
  m="993990">A</span> <span m="994260">inverse?</span> <span
  m="995220">So</span> <span m="995430">I'm</span> <span m="995550">given</span>
  <span m="996150">the</span> <span m="996300">SVD</span> <span
  m="996760">of</span> <span m="996900">A.</span> <span m="997200">I'm</span>
  <span m="997350">given</span> <span m="997680">the</span> <span
  m="997800">U</span> <span m="998370">and</span> <span m="998460">the</span>
  <span m="998610">sigma</span> <span m="999150">is</span> <span
  m="999420">cool</span> <span m="1000490">and</span> <span
  m="1000710">the</span> <span m="1000890">V</span> <span
  m="1001100">transpose.</span> <span m="1003080">What's</span> <span
  m="1003320">the</span> <span m="1003470">inverse</span> <span
  m="1003860">of</span> <span m="1003950">that?</span> <span
  m="1004640">Yeah,</span> <span m="1004830">I'm</span> <span
  m="1005000">just</span> <span m="1005210">really</span> <span
  m="1005540">asking</span> <span m="1005920">what's</span> <span
  m="1006190">the</span> <span m="1006350">inverse</span> <span
  m="1006740">of</span> <span m="1006860">that</span> <span
  m="1007520">product</span> <span m="1008000">of</span> <span
  m="1008120">three</span> <span m="1008630">matrices.</span></p><p><span
  m="1011130">What</span> <span m="1011310">comes</span> <span
  m="1011580">first</span> <span m="1011970">here?</span> <span
  m="1012930">V.</span> <span m="1014040">The</span> <span
  m="1014160">inverse</span> <span m="1014550">of</span> <span
  m="1014640">V</span> <span m="1014850">transpose</span> <span
  m="1015510">is</span> <span m="1015690">V.</span> <span
  m="1016230">That's</span> <span m="1016530">because</span> <span
  m="1017070">V</span> <span m="1017430">is</span> <span m="1017670">a</span>
  <span m="1018750">orthogonal</span> <span m="1019410">matrix.</span> <span
  m="1020380">The</span> <span m="1020430">inverse</span> <span
  m="1020880">of</span> <span m="1021000">sigma,</span> <span
  m="1021630">just</span> <span m="1021990">1</span> <span
  m="1022380">over</span> <span m="1022680">it,</span> <span
  m="1022830">is</span> <span m="1022980">just</span> <span
  m="1023290">the</span> <span m="1023760">sigma</span> <span
  m="1024210">inverse.</span> <span m="1024720">It's</span> <span
  m="1024900">obvious</span> <span m="1025319">what</span> <span
  m="1025500">that</span> <span m="1025710">means.</span> <span
  m="1026609">And</span> <span m="1026790">the</span> <span
  m="1026970">inverse</span> <span m="1027420">of</span> <span
  m="1027569">U</span> <span m="1027990">would</span> <span
  m="1028170">go</span> <span m="1028410">here.</span> <span
  m="1029020">And</span> <span m="1029040">that</span> <span
  m="1029280">is</span> <span m="1030579">U</span> <span
  m="1030660">transpose.</span> <span m="1031230">Great.</span> <span
  m="1032609">OK.</span></p><p><span m="1033089">So</span> <span
  m="1033270">this</span> <span m="1033510">is</span> <span
  m="1033690">if</span> <span m="1034079">invertible.</span> <span
  m="1036140">If</span> <span m="1036310">invertible,</span> <span
  m="1036839">we</span> <span m="1036990">know</span> <span
  m="1037290">what</span> <span m="1037560">the</span> <span
  m="1037920">SVD</span> <span m="1039300">of</span> <span m="1040530">A</span>
  <span m="1040680">inverse</span> <span m="1041190">is.</span> <span
  m="1041609">It</span> <span m="1041670">just</span> <span
  m="1041970">takes</span> <span m="1042480">the</span> <span
  m="1043440">V's</span> <span m="1043859">back</span> <span
  m="1044130">to</span> <span m="1044250">the</span> <span
  m="1044400">U's,</span> <span m="1047690">or</span> <span
  m="1047839">the</span> <span m="1047990">U's</span> <span
  m="1048319">back</span> <span m="1048560">to</span> <span
  m="1048650">the</span> <span m="1048780">V's,</span> <span
  m="1049110">whichever.</span> <span m="1049830">OK.</span> <span
  m="1050540">OK.</span> <span m="1051170">Now</span> <span
  m="1051680">we've</span> <span m="1051950">got</span> <span
  m="1052120">to</span> <span m="1052670">do</span> <span m="1052910">it,</span>
  <span m="1054520">if</span> <span m="1054730">we're</span> <span
  m="1054940">going</span> <span m="1055090">to</span> <span
  m="1055900">allow--</span> <span m="1057970">if</span> <span
  m="1058130">we're</span> <span m="1058220">going</span> <span
  m="1058340">to</span> <span m="1058490">get</span> <span
  m="1058700">beyond</span> <span m="1059180">this</span> <span
  m="1060440">limit,</span> <span m="1060820">this</span> <span
  m="1060930">situation,</span> <span m="1062330">allow</span> <span
  m="1062690">the</span> <span m="1062780">matrix</span> <span
  m="1063260">sigma</span> <span m="1063860">to</span> <span
  m="1064040">be</span> <span m="1064220">rectangular.</span> <span
  m="1066860">Then</span> <span m="1067190">let</span> <span
  m="1067400">me</span> <span m="1067550">just</span> <span
  m="1067760">show</span> <span m="1067970">you</span> <span
  m="1069020">the</span> <span m="1069380">idea</span> <span
  m="1069740">here.</span></p><p><span m="1071750">So</span> <span
  m="1071990">now</span> <span m="1072230">I'm</span> <span
  m="1072380">going</span> <span m="1072550">to</span> <span
  m="1073400">say,</span> <span m="1075320">now</span> <span
  m="1075650">sigma,</span> <span m="1076790">in</span> <span
  m="1076910">general,</span> <span m="1077510">it's</span> <span
  m="1077780">rectangular.</span> <span m="1079190">It's</span> <span
  m="1079400">got</span> <span m="1080030">r</span> <span m="1080660">non</span>
  <span m="1081100">0's</span> <span m="1081410">on</span> <span
  m="1081530">the</span> <span m="1081650">diagonal,</span> <span
  m="1082310">but</span> <span m="1082490">then</span> <span
  m="1082670">it</span> <span m="1082790">quits.</span> <span
  m="1084460">So</span> <span m="1084600">it's</span> <span
  m="1085230">got</span> <span m="1085380">a</span> <span
  m="1085440">bunch</span> <span m="1085740">of</span> <span
  m="1085800">0's</span> <span m="1086460">that</span> <span
  m="1087450">make</span> <span m="1087810">it</span> <span
  m="1088170">not</span> <span m="1088570">invertible.</span> <span
  m="1089610">But</span> <span m="1090030">let's</span> <span
  m="1090270">do</span> <span m="1090420">our</span> <span
  m="1090540">best</span> <span m="1091080">and</span> <span
  m="1092040">pseudo</span> <span m="1092700">invert it.</span> <span
  m="1094020">OK.</span> <span m="1095130">So</span> <span
  m="1095370">now</span> <span m="1095790">help</span> <span
  m="1096030">me</span> <span m="1096900">get</span> <span
  m="1097110">started</span> <span m="1097740">on</span> <span
  m="1097920">a</span> <span m="1098010">formula</span> <span
  m="1098580">for</span> <span m="1099720">using--</span> <span
  m="1100650">I</span> <span m="1101130">want</span> <span m="1101310">to</span>
  <span m="1101370">write</span> <span m="1101640">this</span> <span
  m="1101910">A</span> <span m="1102120">plus,</span> <span
  m="1102640">which</span> <span m="1103050">I</span> <span
  m="1103170">described</span> <span m="1103770">up</span> <span
  m="1103920">there,</span> <span m="1104970">in</span> <span
  m="1105120">terms</span> <span m="1105600">of</span> <span
  m="1105930">the</span> <span m="1106390">subspaces.</span> <span
  m="1107880">Now</span> <span m="1108120">I'm</span> <span
  m="1108270">going</span> <span m="1108440">to</span> <span
  m="1108540">describe</span> <span m="1109170">A</span> <span
  m="1109320">plus</span> <span m="1109770">in</span> <span
  m="1109890">terms</span> <span m="1110310">of</span> <span
  m="1110460">U,</span> <span m="1111270">sigma,</span> <span
  m="1111750">and</span> <span m="1112020">V,</span> <span
  m="1113700">the</span> <span m="1113870">SVD</span> <span
  m="1114390">guys.</span></p><p><span m="1115350">OK.</span> <span
  m="1116010">So</span> <span m="1116190">what</span> <span
  m="1117330">shall</span> <span m="1117510">I</span> <span
  m="1117630">start</span> <span m="1117990">with</span> <span
  m="1118200">here?</span> <span m="1119520">Well,</span> <span
  m="1119850">let</span> <span m="1120000">me</span> <span
  m="1120150">give</span> <span m="1120360">a</span> <span
  m="1120420">hint.</span> <span m="1121410">That</span> <span
  m="1121590">was</span> <span m="1121770">a</span> <span
  m="1121830">great</span> <span m="1122130">start.</span> <span
  m="1123360">My</span> <span m="1123570">V</span> <span m="1123960">is</span>
  <span m="1124110">still</span> <span m="1126300">an</span> <span
  m="1126450">orthogonal</span> <span m="1127020">matrix.</span> <span
  m="1127620">V</span> <span m="1127800">transpose</span> <span
  m="1128460">is</span> <span m="1128550">still an</span> <span
  m="1128870">orthogonal</span> <span m="1129450">matrix.</span> <span
  m="1130170">I'll</span> <span m="1130410">invert</span> <span
  m="1130800">it.</span> <span m="1132780">At</span> <span
  m="1132900">the</span> <span m="1133050">end,</span> <span
  m="1133770">the</span> <span m="1133950">U</span> <span m="1134770">was</span>
  <span m="1135000">no</span> <span m="1135210">problem.</span> <span
  m="1137280">All</span> <span m="1137550">the</span> <span
  m="1137640">problems</span> <span m="1138180">are</span> <span
  m="1138330">in</span> <span m="1138570">sigma.</span> <span
  m="1140170">And</span> <span m="1140410">sigma,</span> <span
  m="1141250">remember,</span> <span m="1143680">sigma--</span> <span
  m="1144640">so</span> <span m="1144880">it's</span> <span
  m="1145510">rectangular.</span> <span m="1146320">Maybe</span> <span
  m="1146620">I'll</span> <span m="1146740">make</span> <span
  m="1147070">it</span> <span m="1147880">wide,</span> <span
  m="1148780">two</span> <span m="1149050">wide.</span> <span
  m="1150070">And</span> <span m="1150190">maybe</span> <span
  m="1150490">I'll</span> <span m="1150700">only</span> <span
  m="1151000">give</span> <span m="1151270">it</span> <span
  m="1151870">two</span> <span m="1152530">non-zeros,</span> <span
  m="1153610">and</span> <span m="1153760">then</span> <span
  m="1153970">all</span> <span m="1154210">the</span> <span
  m="1154300">rest.</span> <span m="1156260">So</span> <span
  m="1156400">the</span> <span m="1156490">rank</span> <span
  m="1156880">of</span> <span m="1156970">my</span> <span
  m="1157150">matrix</span> <span m="1157750">A</span> <span
  m="1158050">is</span> <span m="1158260">2,</span> <span m="1159280">but</span>
  <span m="1160240">the</span> <span m="1161650">m</span> <span
  m="1161890">and</span> <span m="1162040">n</span> <span m="1162400">are</span>
  <span m="1162520">bigger</span> <span m="1162880">than</span> <span
  m="1163090">2.</span> <span m="1163990">It's</span> <span
  m="1164500">just</span> <span m="1164770">got</span> <span
  m="1164980">two</span> <span m="1165550">independent</span> <span
  m="1166060">columns,</span> <span m="1166660">and</span> <span
  m="1167260">then</span> <span m="1167890">it's</span> <span
  m="1168910">just</span> <span m="1169240">sort</span> <span
  m="1169520">of</span> <span m="1169630">totally</span> <span
  m="1170080">singular.</span></p><p><span m="1170980">OK.</span> <span
  m="1171550">So</span> <span m="1173380">my</span> <span
  m="1173530">question</span> <span m="1173890">is,</span> <span
  m="1174010">what</span> <span m="1174160">am</span> <span m="1174310">I</span>
  <span m="1174400">going</span> <span m="1174590">to</span> <span
  m="1174640">put</span> <span m="1174880">there?</span> <span
  m="1175630">And</span> <span m="1175750">I've</span> <span
  m="1176200">described</span> <span m="1176830">it</span> <span
  m="1176920">one</span> <span m="1177160">way,</span> <span
  m="1177400">but</span> <span m="1177580">now</span> <span
  m="1177760">I'm</span> <span m="1177850">going</span> <span
  m="1178000">to</span> <span m="1178090">describe</span> <span
  m="1178570">it</span> <span m="1178680">another</span> <span
  m="1179020">way.</span> <span m="1179500">Well,</span> <span
  m="1179650">let</span> <span m="1179770">me</span> <span
  m="1179890">just</span> <span m="1180100">say,</span> <span
  m="1181890">what</span> <span m="1182220">I'll</span> <span
  m="1182400">put</span> <span m="1182640">there</span> <span
  m="1182940">is</span> <span m="1183210">the</span> <span
  m="1183390">pseudo</span> <span m="1183870">inverse</span> <span
  m="1184320">of</span> <span m="1184470">sigma.</span> <span
  m="1186390">I</span> <span m="1186480">can't</span> <span
  m="1186810">put</span> <span m="1187230">sigma</span> <span
  m="1187800">inverse</span> <span m="1188410">using</span> <span
  m="1189030">that</span> <span m="1189900">symbol,</span> <span
  m="1190680">because</span> <span m="1191220">there</span> <span
  m="1191400">is</span> <span m="1191550">no</span> <span
  m="1191730">such</span> <span m="1192060">thing.</span> <span
  m="1193080">With</span> <span m="1193320">this,</span> <span
  m="1193800">I</span> <span m="1193890">can't</span> <span
  m="1194310">invert</span> <span m="1194710">it.</span> <span
  m="1195220">So</span> <span m="1196980">that's</span> <span
  m="1197250">the</span> <span m="1197310">best</span> <span
  m="1197610">I</span> <span m="1197730">can</span> <span
  m="1197910">do.</span></p><p><span m="1199390">So</span> <span
  m="1200290">I'm</span> <span m="1200440">almost</span> <span
  m="1200800">done,</span> <span m="1201250">but</span> <span
  m="1201540">to</span> <span m="1201670">finish,</span> <span
  m="1202420">I</span> <span m="1202540">have</span> <span m="1202720">to</span>
  <span m="1202840">tell</span> <span m="1203080">you,</span> <span
  m="1203330">what</span> <span m="1205740">is</span> <span
  m="1205890">this</span> <span m="1206130">thing?</span> <span
  m="1206880">So</span> <span m="1207090">sigma</span> <span
  m="1207540">plus.</span> <span m="1209250">I'm</span> <span
  m="1209340">now</span> <span m="1209640">going</span> <span
  m="1209790">to</span> <span m="1209910">tell</span> <span
  m="1210180">you</span> <span m="1210390">sigma</span> <span
  m="1210810">plus.</span> <span m="1211860">And</span> <span
  m="1212040">then</span> <span m="1213120">that's</span> <span
  m="1213470">what</span> <span m="1213780">should</span> <span
  m="1214020">sit</span> <span m="1214290">there</span> <span
  m="1214530">in</span> <span m="1214620">the</span> <span
  m="1214680">middle.</span> <span m="1215490">So</span> <span
  m="1215760">if</span> <span m="1215970">sigma</span> <span
  m="1216450">is</span> <span m="1216690">this</span> <span
  m="1217020">diagonal</span> <span m="1217650">matrix</span> <span
  m="1218400">which</span> <span m="1219090">quits</span> <span
  m="1219510">after</span> <span m="1219930">two</span> <span
  m="1220200">sigmas,</span> <span m="1221250">what</span> <span
  m="1221490">should</span> <span m="1221760">sigma</span> <span
  m="1222120">plus</span> <span m="1222450">be?</span> <span
  m="1222690">Well,</span> <span m="1222870">first</span> <span
  m="1223200">of</span> <span m="1223320">all,</span> <span
  m="1223890">it</span> <span m="1224040">should</span> <span
  m="1224310">be</span> <span m="1225990">rectangular</span> <span
  m="1226740">the</span> <span m="1226920">other</span> <span
  m="1227130">way.</span> <span m="1228180">If</span> <span
  m="1228330">this</span> <span m="1228570">was</span> <span
  m="1228780">m</span> <span m="1229680">by</span> <span m="1229980">n</span>
  <span m="1230550">column,</span> <span m="1231120">n</span> <span
  m="1231360">columns</span> <span m="1231900">and</span> <span
  m="1232020">m</span> <span m="1232290">rows,</span> <span
  m="1233130">now</span> <span m="1233430">I</span> <span
  m="1233550">want</span> <span m="1233790">to</span> <span
  m="1233880">have</span> <span m="1234540">n</span> <span
  m="1235530">rows</span> <span m="1236100">and</span> <span
  m="1236520">m</span> <span m="1237150">columns.</span></p><p><span
  m="1239070">And</span> <span m="1240710">yeah,</span> <span
  m="1241550">here's</span> <span m="1241790">the</span> <span
  m="1241910">question.</span> <span m="1242750">What's</span> <span
  m="1243020">the</span> <span m="1243140">best</span> <span
  m="1243500">inverse</span> <span m="1244010">you</span> <span
  m="1244130">could</span> <span m="1244340">come</span> <span
  m="1244580">up</span> <span m="1244760">with</span> <span
  m="1245420">for</span> <span m="1245570">that</span> <span
  m="1245840">sigma?</span> <span m="1247270">I</span> <span
  m="1247330">mean,</span> <span m="1247570">if</span> <span
  m="1247660">somebody</span> <span m="1248620">independent</span> <span
  m="1249190">of</span> <span m="1249340">18.065,</span> <span
  m="1251230">if</span> <span m="1251350">somebody</span> <span
  m="1251770">asks</span> <span m="1252070">you,</span> <span
  m="1252730">do</span> <span m="1253030">your</span> <span
  m="1253210">best</span> <span m="1253600">to</span> <span
  m="1253780">invert</span> <span m="1254200">that</span> <span
  m="1254440">matrix,</span> <span m="1255850">I</span> <span
  m="1255940">think</span> <span m="1256180">we'd</span> <span
  m="1256360">all</span> <span m="1256930">agree</span> <span
  m="1257410">it</span> <span m="1257560">is,</span> <span
  m="1258020">yeah.</span> <span m="1260320">One</span> <span
  m="1260710">over</span> <span m="1261010">the</span> <span
  m="1261160">sigma</span> <span m="1261640">1</span> <span
  m="1262090">would</span> <span m="1262270">come</span> <span
  m="1262570">there.</span> <span m="1264580">And</span> <span
  m="1265030">1</span> <span m="1265270">over</span> <span
  m="1265510">sigma</span> <span m="1265870">2,</span> <span
  m="1266290">the</span> <span m="1266440">non</span> <span
  m="1266770">zeros.</span></p><p><span m="1268180">And</span> <span
  m="1268360">then?</span> <span m="1270800">Zeros.</span> <span
  m="1272290">Just</span> <span m="1272520">the</span> <span
  m="1272630">way</span> <span m="1272840">up</span> <span
  m="1272990">there,</span> <span m="1273920">when</span> <span
  m="1274100">we</span> <span m="1274220">didn't</span> <span
  m="1274430">know</span> <span m="1274550">what</span> <span
  m="1274730">to</span> <span m="1274850">do,</span> <span
  m="1275630">when</span> <span m="1275780">there</span> <span
  m="1275870">was</span> <span m="1276020">nothing</span> <span
  m="1276410">good</span> <span m="1276620">to</span> <span
  m="1276740">do.</span> <span m="1277860">Zero</span> <span
  m="1278990">was</span> <span m="1279200">the</span> <span
  m="1279320">right</span> <span m="1279590">answer.</span> <span
  m="1280400">So</span> <span m="1280610">this</span> <span
  m="1280880">is</span> <span m="1281030">all</span> <span
  m="1281390">zeros.</span> <span m="1283310">Of</span> <span
  m="1283430">course,</span> <span m="1283760">it's</span> <span
  m="1283970">rectangular</span> <span m="1284690">the</span> <span
  m="1284870">other</span> <span m="1285110">way.</span> <span
  m="1285470">But</span> <span m="1285680">do</span> <span
  m="1285770">you</span> <span m="1285890">see</span> <span
  m="1286190">that</span> <span m="1287360">if</span> <span m="1287540">I</span>
  <span m="1287630">multiply</span> <span m="1288200">sigma</span> <span
  m="1289160">plus</span> <span m="1289610">times</span> <span
  m="1289910">sigma,</span> <span m="1290450">if</span> <span
  m="1290600">I</span> <span m="1290690">multiply</span> <span
  m="1291260">the</span> <span m="1291920">pseudo</span> <span
  m="1292520">inverse</span> <span m="1293060">times</span> <span
  m="1293450">the</span> <span m="1293690">matrix,</span> <span
  m="1294830">what</span> <span m="1295010">do</span> <span m="1295160">I</span>
  <span m="1295250">get</span> <span m="1295820">if</span> <span
  m="1295970">I</span> <span m="1296060">multiply</span> <span
  m="1296510">that</span> <span m="1296750">by</span> <span
  m="1296960">that?</span> <span m="1299170">What</span> <span
  m="1299790">does</span> <span m="1299970">that</span> <span
  m="1300120">multiplication</span> <span m="1300930">produce?</span> <span
  m="1301440">Can</span> <span m="1301620">you</span> <span
  m="1301740">describe</span> <span m="1302380">the--</span> <span
  m="1302950">well,</span> <span m="1303120">or</span> <span
  m="1304590">when</span> <span m="1304770">you</span> <span
  m="1304890">tell</span> <span m="1305100">me</span> <span
  m="1305250">what</span> <span m="1305400">it</span> <span
  m="1305520">looks</span> <span m="1305760">like,</span> <span
  m="1306100">I'll</span> <span m="1306120">write</span> <span
  m="1306360">it</span> <span m="1306450">down.</span></p><p><span
  m="1307170">So</span> <span m="1307320">what</span> <span
  m="1307560">is</span> <span m="1307710">sigma</span> <span
  m="1308130">plus</span> <span m="1308520">times</span> <span
  m="1308810">sigma?</span> <span m="1310740">If</span> <span
  m="1310950">sigma</span> <span m="1311390">is</span> <span
  m="1311610">a</span> <span m="1311700">diagonal,</span> <span
  m="1312630">sigma</span> <span m="1312980">plus</span> <span
  m="1313270">is</span> <span m="1313530">a</span> <span
  m="1313620">diagonal,</span> <span m="1314250">and</span> <span
  m="1314370">they</span> <span m="1314490">both</span> <span
  m="1314790">quit</span> <span m="1315990">after</span> <span
  m="1316500">two</span> <span m="1317550">guys.</span> <span
  m="1319510">What</span> <span m="1319660">do</span> <span m="1319780">I</span>
  <span m="1319870">have?</span> <span m="1321990">One?</span> <span
  m="1323300">Because</span> <span m="1323830">sigma</span> <span
  m="1324090">1</span> <span m="1324450">times</span> <span m="1324780">1</span>
  <span m="1324990">over</span> <span m="1325200">sigma</span> <span
  m="1325560">1</span> <span m="1325860">is</span> <span m="1326040">a</span>
  <span m="1326100">1.</span> <span m="1327480">And</span> <span
  m="1327750">the</span> <span m="1327900">other</span> <span
  m="1328380">next</span> <span m="1328860">guy</span> <span
  m="1329190">is</span> <span m="1330180">a</span> <span m="1330270">1.</span>
  <span m="1331260">And</span> <span m="1331470">the</span> <span
  m="1331560">rest</span> <span m="1332010">are</span> <span
  m="1333030">all</span> <span m="1333300">zeros.</span> <span
  m="1334320">That's</span> <span m="1334530">right.</span> <span
  m="1336360">That's</span> <span m="1336600">the</span> <span
  m="1336720">best</span> <span m="1337020">I</span> <span
  m="1337110">could</span> <span m="1337260">do.</span> <span
  m="1338250">The</span> <span m="1338340">rank</span> <span
  m="1338640">was</span> <span m="1338850">only</span> <span
  m="1339120">two,</span> <span m="1340110">so</span> <span m="1340290">I</span>
  <span m="1340380">couldn't</span> <span m="1341040">get</span> <span
  m="1341340">anywhere.</span> <span m="1342250">So</span> <span
  m="1342360">that</span> <span m="1342630">tells</span> <span
  m="1343050">you</span> <span m="1343200">what</span> <span
  m="1343470">sigma</span> <span m="1343830">plus</span> <span
  m="1344250">is.</span></p><p><span m="1346020">OK.</span> <span
  m="1347320">So</span> <span m="1347500">I</span> <span
  m="1348460">described</span> <span m="1349180">the</span> <span
  m="1349300">pseudo</span> <span m="1349720">inverse</span> <span
  m="1350210">then</span> <span m="1350410">with</span> <span
  m="1350580">a</span> <span m="1350650">picture</span> <span
  m="1351280">of</span> <span m="1351490">spaces,</span> <span
  m="1352600">and</span> <span m="1352750">then</span> <span
  m="1353020">with</span> <span m="1353230">a</span> <span
  m="1353320">formula</span> <span m="1353890">of</span> <span
  m="1354250">matrices.</span> <span m="1355750">And</span> <span
  m="1355990">now</span> <span m="1356530">I</span> <span
  m="1356740">want</span> <span m="1356990">to</span> <span
  m="1357730">use</span> <span m="1358150">it</span> <span m="1358330">in</span>
  <span m="1358630">least</span> <span m="1358930">squares.</span> <span
  m="1359960">So</span> <span m="1360160">now</span> <span
  m="1360370">I'm</span> <span m="1360520">going</span> <span
  m="1360690">to</span> <span m="1361240">say</span> <span
  m="1361540">what</span> <span m="1361780">is</span> <span
  m="1361960">the</span> <span m="1362080">least</span> <span
  m="1362350">squares</span> <span m="1362800">problem.</span> <span
  m="1363820">And</span> <span m="1365110">the</span> <span
  m="1365260">first</span> <span m="1365680">way</span> <span
  m="1365860">to</span> <span m="1365980">solve</span> <span
  m="1366430">it</span> <span m="1366550">will</span> <span
  m="1366790">be</span> <span m="1368770">to</span> <span
  m="1369610">involve--</span> <span m="1370450">A</span> <span
  m="1370600">plus</span> <span m="1370990">will</span> <span
  m="1371170">give</span> <span m="1371380">the</span> <span
  m="1371520">solution.</span></p><p><span m="1372620">OK.</span> <span
  m="1373050">So</span> <span m="1373240">what</span> <span
  m="1373540">is</span> <span m="1373810">the</span> <span
  m="1375100">least</span> <span m="1375370">squares</span> <span
  m="1375790">problem?</span> <span m="1376420">Let</span> <span
  m="1376600">me</span> <span m="1377470">put</span> <span m="1377710">it</span>
  <span m="1377830">here.</span> <span m="1385050">OK,</span> <span
  m="1385530">the</span> <span m="1385650">least</span> <span
  m="1385890">squares</span> <span m="1386190">problem</span> <span
  m="1386580">is</span> <span m="1387120">simply,</span> <span
  m="1388050">you</span> <span m="1388170">have</span> <span
  m="1388380">an</span> <span m="1388500">equation,</span> <span
  m="1389190">Ax</span> <span m="1389670">equals</span> <span
  m="1390000">b.</span> <span m="1394190">But</span> <span m="1394610">A</span>
  <span m="1394790">is</span> <span m="1394940">not</span> <span
  m="1395180">invertible.</span> <span m="1396730">So</span> <span
  m="1397390">you</span> <span m="1397510">can't</span> <span
  m="1397810">solve</span> <span m="1398170">it.</span> <span
  m="1399190">Of</span> <span m="1399340">course,</span> <span
  m="1400120">for</span> <span m="1400330">which--</span> <span
  m="1401290">yeah,</span> <span m="1401780">you</span> <span
  m="1401830">could</span> <span m="1403000">solve</span> <span
  m="1403300">it</span> <span m="1403390">for</span> <span
  m="1403570">certain</span> <span m="1403930">b's.</span> <span
  m="1404740">If</span> <span m="1404920">b</span> <span m="1405190">is</span>
  <span m="1405370">in</span> <span m="1405460">the</span> <span
  m="1405580">column</span> <span m="1405970">space</span> <span
  m="1406360">of</span> <span m="1406510">A,</span> <span
  m="1407380">then</span> <span m="1407980">just</span> <span
  m="1408520">by</span> <span m="1408760">the</span> <span
  m="1408880">meaning</span> <span m="1409360">of</span> <span
  m="1409480">column</span> <span m="1409870">space,</span> <span
  m="1410620">this</span> <span m="1410800">has</span> <span
  m="1411070">a</span> <span m="1411160">solution.</span> <span
  m="1412270">The</span> <span m="1412390">vectors</span> <span
  m="1412900">in</span> <span m="1413020">the</span> <span
  m="1413110">column</span> <span m="1413500">space</span> <span
  m="1413920">are</span> <span m="1414040">the</span> <span
  m="1414160">guys</span> <span m="1414550">that</span> <span
  m="1414820">you</span> <span m="1414970">can</span> <span
  m="1415180">get.</span></p><p><span m="1416440">But</span> <span
  m="1416680">the</span> <span m="1416830">vectors</span> <span
  m="1417400">in</span> <span m="1417550">the</span> <span
  m="1417700">orthogonal</span> <span m="1418360">space</span> <span
  m="1418930">you</span> <span m="1419140">cannot</span> <span
  m="1419590">get.</span> <span m="1420040">All</span> <span
  m="1420220">the</span> <span m="1420340">rest</span> <span
  m="1420610">of</span> <span m="1420670">the</span> <span
  m="1420760">vectors</span> <span m="1421180">you</span> <span
  m="1421300">cannot</span> <span m="1421630">get.</span> <span
  m="1422230">So</span> <span m="1422890">suppose</span> <span
  m="1423400">this</span> <span m="1423580">is</span> <span
  m="1424360">like</span> <span m="1424600">so,</span> <span
  m="1425140">but</span> <span m="1426030">always</span> <span
  m="1427260">A</span> <span m="1427600">is</span> <span m="1427930">m</span>
  <span m="1428320">by</span> <span m="1428770">n</span> <span
  m="1429220">rank</span> <span m="1429690">r.</span> <span
  m="1434340">And</span> <span m="1436530">then</span> <span
  m="1436710">we</span> <span m="1436890">get</span> <span m="1437100">A</span>
  <span m="1437310">inverse</span> <span m="1438630">when</span> <span
  m="1440970">m</span> <span m="1441540">equals</span> <span
  m="1442200">n</span> <span m="1442710">equals</span> <span
  m="1443250">r.</span> <span m="1443820">That's</span> <span
  m="1444120">the</span> <span m="1444240">invertible</span> <span
  m="1444830">case.</span> <span m="1446190">OK.</span></p><p><span
  m="1447730">What</span> <span m="1447880">do</span> <span
  m="1447940">we</span> <span m="1448120">do</span> <span
  m="1448510">with</span> <span m="1448780">a</span> <span
  m="1450430">system</span> <span m="1450910">of</span> <span
  m="1451060">equations</span> <span m="1452960">when</span> <span
  m="1453070">we</span> <span m="1453190">can't</span> <span
  m="1453490">solve</span> <span m="1453810">it?</span> <span
  m="1455600">This</span> <span m="1455870">is</span> <span
  m="1455960">probably</span> <span m="1456320">the</span> <span
  m="1456410">main</span> <span m="1456770">application</span> <span
  m="1457520">in</span> <span m="1457700">18.06.</span> <span
  m="1459050">So</span> <span m="1459710">you've</span> <span
  m="1460370">seen</span> <span m="1461420">this</span> <span
  m="1462860">problem</span> <span m="1463340">before.</span> <span
  m="1465560">What</span> <span m="1465710">do</span> <span
  m="1465770">we</span> <span m="1465920">do</span> <span m="1466310">if</span>
  <span m="1466720">Ax</span> <span m="1467090">equal</span> <span
  m="1467330">b</span> <span m="1467540">has</span> <span m="1467750">no</span>
  <span m="1467990">solution?</span> <span m="1469180">So</span> <span
  m="1469580">typically,</span> <span m="1470180">b</span> <span
  m="1470540">would</span> <span m="1470780">be</span> <span
  m="1471080">a</span> <span m="1471170">vector</span> <span
  m="1471680">of</span> <span m="1471890">measurements,</span> <span
  m="1473210">like</span> <span m="1473450">we're</span> <span
  m="1473570">tracking</span> <span m="1474110">a</span> <span
  m="1474170">satellite,</span> <span m="1475580">and</span> <span
  m="1477050">we</span> <span m="1478190">get</span> <span
  m="1478490">some</span> <span m="1478730">measurements.</span> <span
  m="1479480">But</span> <span m="1481820">often</span> <span
  m="1482180">we</span> <span m="1482330">get</span> <span
  m="1482540">too</span> <span m="1482780">many</span> <span
  m="1483140">measurements.</span> <span m="1484310">And</span> <span
  m="1484430">of</span> <span m="1484490">course,</span> <span
  m="1484790">there's</span> <span m="1485000">a</span> <span
  m="1485060">little</span> <span m="1485360">noise</span> <span
  m="1485870">in</span> <span m="1486020">them.</span> <span
  m="1486800">And</span> <span m="1486920">a</span> <span
  m="1486980">little</span> <span m="1487310">noise</span> <span
  m="1487880">means</span> <span m="1488300">that</span> <span
  m="1488420">we</span> <span m="1488570">can't</span> <span
  m="1488840">solve</span> <span m="1489140">the</span> <span
  m="1489260">equations.</span></p><p><span m="1490790">That</span> <span
  m="1491210">may</span> <span m="1491470">be</span> <span
  m="1493130">the</span> <span m="1493580">case</span> <span
  m="1493910">everybody</span> <span m="1494420">knows</span> <span
  m="1494900">is,</span> <span m="1495590">where</span> <span
  m="1497060">this</span> <span m="1498140">equation</span> <span
  m="1498770">is</span> <span m="1499430">like</span> <span
  m="1500120">expressing</span> <span m="1501410">a</span> <span
  m="1501470">straight</span> <span m="1501860">line</span> <span
  m="1502340">going</span> <span m="1502700">through</span> <span
  m="1503060">the</span> <span m="1503180">data</span> <span
  m="1503520">points.</span> <span m="1503860">So</span> <span
  m="1504560">the</span> <span m="1505010">famous</span> <span
  m="1505580">example</span> <span m="1506180">of</span> <span
  m="1506270">least</span> <span m="1506480">squares</span> <span
  m="1507170">is</span> <span m="1507890">fit</span> <span m="1509470">a</span>
  <span m="1510020">straight</span> <span m="1510500">line</span> <span
  m="1516790">to</span> <span m="1516970">the</span> <span
  m="1517090">b's,</span> <span m="1517930">to</span> <span
  m="1518320">b1,</span> <span m="1519610">b2.</span> <span
  m="1521140">We've</span> <span m="1521320">got m</span> <span
  m="1521770">measurements.</span> <span m="1526100">We've got</span> <span
  m="1526280">m</span> <span m="1526520">measurements.</span> <span
  m="1528450">The</span> <span m="1529590">physics</span> <span
  m="1530280">or</span> <span m="1530430">the</span> <span
  m="1530790">mechanics</span> <span m="1531450">of</span> <span
  m="1531570">the</span> <span m="1531690">problem</span> <span
  m="1532170">is</span> <span m="1532950">pretty well</span> <span
  m="1533250">linear.</span> <span m="1534000">But</span> <span
  m="1534240">of</span> <span m="1534330">course,</span> <span
  m="1534630">there's</span> <span m="1534900">noise.</span></p><p><span
  m="1536650">And</span> <span m="1537000">a</span> <span
  m="1537070">straight</span> <span m="1537430">line</span> <span
  m="1537850">only</span> <span m="1538240">has</span> <span
  m="1538840">two</span> <span m="1539170">degrees</span> <span
  m="1539680">of</span> <span m="1539740">freedom.</span> <span
  m="1541480">So</span> <span m="1541690">we're</span> <span
  m="1541810">going</span> <span m="1541970">to</span> <span
  m="1542080">have</span> <span m="1542320">only</span> <span
  m="1542650">two</span> <span m="1542950">columns</span> <span
  m="1543580">in</span> <span m="1543700">our</span> <span
  m="1543820">matrix.</span> <span m="1544870">A</span> <span
  m="1545170">will</span> <span m="1545380">be</span> <span
  m="1545710">only</span> <span m="1547180">two</span> <span
  m="1547480">columns,</span> <span m="1549850">with</span> <span
  m="1550060">many</span> <span m="1550570">rows.</span> <span
  m="1553190">Highly</span> <span m="1553640">rectangular.</span> <span
  m="1554900">So</span> <span m="1555410">fit</span> <span m="1555710">a</span>
  <span m="1555770">straight</span> <span m="1556130">line.</span> <span
  m="1556490">Let</span> <span m="1556610">me</span> <span
  m="1556760">call</span> <span m="1557030">that</span> <span
  m="1557240">line</span> <span m="1558310">Cx</span> <span
  m="1559040">plus</span> <span m="1559370">D.</span> <span
  m="1560420">Say</span> <span m="1560690">this</span> <span
  m="1560900">is</span> <span m="1561080">the</span> <span m="1561170">x</span>
  <span m="1561440">direction.</span> <span m="1562400">This</span> <span
  m="1562640">is</span> <span m="1563700">the</span> <span
  m="1564120">b's</span> <span m="1564860">direction.</span> <span
  m="1565880">And</span> <span m="1566000">we've</span> <span
  m="1566150">got</span> <span m="1566360">a</span> <span
  m="1566390">whole</span> <span m="1566810">bunch</span> <span
  m="1567170">of</span> <span m="1567290">data</span> <span
  m="1567590">points.</span> <span m="1568910">And</span> <span
  m="1569120">they're</span> <span m="1569300">not</span> <span
  m="1569600">on</span> <span m="1569760">a</span> <span
  m="1569840">line.</span></p><p><span m="1570720">Or</span> <span
  m="1570800">they</span> <span m="1570980">are</span> <span
  m="1571250">on</span> <span m="1571380">the</span> <span
  m="1571460">line.</span> <span m="1575360">Suppose</span> <span
  m="1575990">those</span> <span m="1576350">did</span> <span
  m="1576610">lie</span> <span m="1577010">on</span> <span m="1577160">a</span>
  <span m="1577220">line.</span> <span m="1578780">What</span> <span
  m="1578990">would</span> <span m="1579170">that</span> <span
  m="1579440">tell</span> <span m="1579740">me</span> <span
  m="1579950">about</span> <span m="1580280">Ax</span> <span
  m="1580760">equal</span> <span m="1581060">b?</span> <span
  m="1582610">I</span> <span m="1583260">haven't</span> <span
  m="1584040">said</span> <span m="1584340">everything</span> <span
  m="1584850">I</span> <span m="1584970">need</span> <span
  m="1585240">to,</span> <span m="1585540">but</span> <span
  m="1585780">maybe</span> <span m="1586290">the</span> <span
  m="1586500">insight</span> <span m="1587100">is</span> <span
  m="1587310">what</span> <span m="1587520">I'm</span> <span
  m="1587670">after</span> <span m="1588060">here.</span> <span
  m="1588960">If</span> <span m="1589950">my</span> <span
  m="1590160">points</span> <span m="1590670">are</span> <span
  m="1590820">right</span> <span m="1591210">on the</span> <span
  m="1591310">line--</span> <span m="1592940">so</span> <span
  m="1593150">there</span> <span m="1593360">is</span> <span
  m="1594840">a</span> <span m="1594930">straight</span> <span
  m="1595230">line</span> <span m="1595500">through</span> <span
  m="1595770">them--</span> <span m="1597590">the</span> <span
  m="1597790">unknowns</span> <span m="1598420">here--</span> <span
  m="1598760">so</span> <span m="1599080">let</span> <span
  m="1599200">me--</span> <span m="1599830">so</span> <span
  m="1600110">Ax--</span> <span m="1601500">the</span> <span
  m="1601630">unknowns</span> <span m="1602230">here</span> <span
  m="1602560">are</span> <span m="1602770">C</span> <span m="1603040">and</span>
  <span m="1603220">D.</span> <span m="1604930">And</span> <span
  m="1605200">the</span> <span m="1605560">right</span> <span
  m="1605830">hand</span> <span m="1606070">side</span> <span
  m="1606430">is</span> <span m="1606640">all</span> <span m="1606970">my</span>
  <span m="1607840">measurements.</span> <span
  m="1611820">OK.</span></p><p><span m="1614380">Suppose--</span> <span
  m="1615970">without</span> <span m="1616240">my</span> <span
  m="1616450">drawing</span> <span m="1616780">a</span> <span
  m="1616840">picture--</span> <span m="1617920">suppose</span> <span
  m="1618820">these</span> <span m="1619120">points</span> <span
  m="1619930">are</span> <span m="1620110">on</span> <span
  m="1620270">the</span> <span m="1620350">line.</span> <span
  m="1621300">Here's</span> <span m="1621610">the</span> <span
  m="1622300">different</span> <span m="1622780">x's,</span> <span
  m="1623350">the</span> <span m="1623470">measurement</span> <span
  m="1623950">times.</span> <span m="1625000">Here</span> <span
  m="1625130">is</span> <span m="1625300">the</span> <span
  m="1625390">different</span> <span m="1625780">measurements.</span> <span
  m="1629250">But</span> <span m="1629460">if</span> <span
  m="1629610">they're</span> <span m="1629820">on</span> <span
  m="1630020">a</span> <span m="1630090">line,</span> <span
  m="1630480">what</span> <span m="1630690">does</span> <span
  m="1630870">that</span> <span m="1631050">tell</span> <span
  m="1631290">me</span> <span m="1631470">about</span> <span
  m="1631800">my</span> <span m="1633090">linear</span> <span
  m="1633630">system,</span> <span m="1634490">Ax</span> <span
  m="1634890">equal</span> <span m="1635160">b?</span> <span
  m="1636060">It</span> <span m="1636240">has</span> <span m="1636600">a</span>
  <span m="1637740">solution.</span> <span m="1639800">Being</span> <span
  m="1640220">on</span> <span m="1640360">a</span> <span m="1640430">line</span>
  <span m="1640880">means</span> <span m="1641240">everything's</span> <span
  m="1641780">perfect.</span> <span m="1642740">There</span> <span
  m="1642920">is</span> <span m="1643070">a</span> <span
  m="1643160">solution.</span></p><p><span m="1644360">But</span> <span
  m="1644600">will</span> <span m="1644900">there</span> <span
  m="1645080">usually</span> <span m="1645650">be</span> <span
  m="1645800">a</span> <span m="1645890">solution?</span> <span
  m="1647210">Certainly</span> <span m="1647690">not.</span> <span
  m="1648080">If</span> <span m="1648260">I</span> <span m="1648380">have</span>
  <span m="1648620">only</span> <span m="1649310">two</span> <span
  m="1649700">parameters,</span> <span m="1650630">two</span> <span
  m="1650990">unknowns,</span> <span m="1652040">two</span> <span
  m="1652280">columns</span> <span m="1652850">here,</span> <span
  m="1655980">the</span> <span m="1656100">rank</span> <span
  m="1656430">is</span> <span m="1656580">going</span> <span
  m="1656660">to</span> <span m="1656820">be</span> <span
  m="1657000">two.</span> <span m="1658350">And</span> <span
  m="1658500">here</span> <span m="1658770">I'm</span> <span
  m="1658920">trying</span> <span m="1659220">to</span> <span
  m="1659310">hit</span> <span m="1660570">any</span> <span
  m="1661830">noisy</span> <span m="1662820">set</span> <span
  m="1663120">of</span> <span m="1663240">measurements.</span> <span
  m="1664440">So</span> <span m="1664680">of</span> <span
  m="1664800">course,</span> <span m="1665250">in</span> <span
  m="1665400">general</span> <span m="1666000">the</span> <span
  m="1666120">picture</span> <span m="1666520">will</span> <span
  m="1666640">look</span> <span m="1666840">like</span> <span
  m="1667080">that.</span> <span m="1667800">And</span> <span
  m="1667950">I'm</span> <span m="1668130">going</span> <span
  m="1668280">to</span> <span m="1668340">look</span> <span
  m="1668580">for</span> <span m="1668760">the</span> <span
  m="1668880">best</span> <span m="1669270">C</span> <span
  m="1669560">and</span> <span m="1669740">D.</span> <span m="1670500">So</span>
  <span m="1670710">I'll</span> <span m="1670860">call</span> <span
  m="1671190">it</span> <span m="1678570">Cx</span> <span
  m="1678840">plus</span> <span m="1680310">D.</span> <span
  m="1680860">Yeah,</span> <span m="1681490">right.</span> <span
  m="1681840">Sorry.</span> <span m="1683250">That's</span> <span
  m="1683970">my</span> <span m="1684270">line.</span> <span
  m="1685760">So</span> <span m="1686310">those</span> <span
  m="1686580">are</span> <span m="1686640">my</span> <span
  m="1686880">equations.</span></p><p><span m="1690220">Sorry,</span> <span
  m="1691110">I</span> <span m="1691290">often</span> <span
  m="1691680">write</span> <span m="1692040">it</span> <span
  m="1692760">C</span> <span m="1693120">plus</span> <span
  m="1693420">dx.</span> <span m="1694200">Do</span> <span
  m="1694290">you</span> <span m="1694380">mind</span> <span
  m="1694740">if</span> <span m="1694860">I</span> <span m="1695040">put</span>
  <span m="1695370">the</span> <span m="1695910">constant</span> <span
  m="1696480">term</span> <span m="1696810">first</span> <span
  m="1697380">in</span> <span m="1699030">the</span> <span
  m="1700020">highly</span> <span m="1700410">difficult</span> <span
  m="1701010">equation</span> <span m="1701550">here</span> <span
  m="1701770">for</span> <span m="1701970">a</span> <span
  m="1702030">straight</span> <span m="1702390">line?</span> <span
  m="1706790">So</span> <span m="1707660">let</span> <span m="1707780">me</span>
  <span m="1707960">tell</span> <span m="1708230">you</span> <span
  m="1708380">what</span> <span m="1708590">I'm--</span> <span
  m="1709340">so</span> <span m="1709520">these</span> <span
  m="1709850">are</span> <span m="1709970">the</span> <span
  m="1710840">points</span> <span m="1711470">where</span> <span
  m="1711740">you</span> <span m="1711920">have</span> <span
  m="1712160">a</span> <span m="1712250">measurement--</span> <span
  m="1712565">x1,</span> <span m="1712880">x2,</span> <span
  m="1713990">up</span> <span m="1714170">to</span> <span m="1714290">xn.</span>
  <span m="1715820">And</span> <span m="1715970">these</span> <span
  m="1716240">are</span> <span m="1716360">the</span> <span
  m="1716510">actual</span> <span m="1716960">measurements,</span> <span
  m="1717610">b1</span> <span m="1718340">up</span> <span m="1718490">to</span>
  <span m="1718640">bm,</span> <span m="1719410">let's</span> <span
  m="1719620">say</span> <span m="1719960">.</span></p><p><span
  m="1720770">And</span> <span m="1720950">then</span> <span
  m="1721130">my</span> <span m="1721400">equations</span> <span
  m="1722180">are--</span> <span m="1723740">I</span> <span
  m="1723860">just</span> <span m="1724130">want</span> <span
  m="1724340">to</span> <span m="1724400">set</span> <span m="1724700">up</span>
  <span m="1724930">a</span> <span m="1725000">matrix</span> <span
  m="1725660">here.</span> <span m="1726530">I</span> <span
  m="1726590">just</span> <span m="1726770">want</span> <span
  m="1726920">to</span> <span m="1727010">set</span> <span m="1727250">up</span>
  <span m="1727370">the</span> <span m="1727490">matrix.</span> <span
  m="1729420">So</span> <span m="1730190">I</span> <span m="1730310">want</span>
  <span m="1730910">C</span> <span m="1731480">to</span> <span
  m="1731660">get</span> <span m="1731810">multiplied</span> <span
  m="1732380">by</span> <span m="1732620">ones</span> <span
  m="1733250">every</span> <span m="1733520">time.</span> <span
  m="1735160">And</span> <span m="1735650">I</span> <span
  m="1735800">want</span> <span m="1736080">D</span> <span m="1736450">to</span>
  <span m="1736670">get</span> <span m="1736850">multiplied</span> <span
  m="1737420">by</span> <span m="1737630">these</span> <span
  m="1738305">x's--</span> <span m="1738620">x1,</span> <span
  m="1739260">x2,</span> <span m="1740130">x3,</span> <span
  m="1742010">to</span> <span m="1742265">xm,</span> <span
  m="1742520">the</span> <span m="1742670">measurement</span> <span
  m="1744620">places.</span> <span m="1745790">And</span> <span
  m="1746270">those</span> <span m="1746450">are</span> <span
  m="1746700">the</span> <span m="1746800">measurements.</span> <span
  m="1747740">Anyway.</span></p><p><span m="1750300">And</span> <span
  m="1750930">my</span> <span m="1751110">problem</span> <span
  m="1751590">is,</span> <span m="1752160">this</span> <span
  m="1752400">has</span> <span m="1752610">no</span> <span
  m="1752850">solution.</span> <span m="1755850">So</span> <span
  m="1756150">what</span> <span m="1756390">do</span> <span m="1756510">I</span>
  <span m="1756630">do</span> <span m="1756810">when</span> <span
  m="1757020">there's</span> <span m="1757230">no</span> <span
  m="1757470">solution?</span> <span m="1760710">Well,</span> <span
  m="1761250">I'll</span> <span m="1762180">do</span> <span
  m="1762390">what</span> <span m="1762600">Gauss</span> <span
  m="1762990">did.</span> <span m="1764810">He</span> <span
  m="1764930">was</span> <span m="1765170">a</span> <span
  m="1765230">good</span> <span m="1765470">mathematician,</span> <span
  m="1765845">so</span> <span m="1766220">I'll</span> <span
  m="1766520">follow</span> <span m="1767000">his</span> <span
  m="1767480">advice.</span> <span m="1768570">And</span> <span
  m="1769100">I</span> <span m="1769310">won't</span> <span
  m="1769580">do</span> <span m="1769790">it</span> <span m="1769910">all</span>
  <span m="1770510">semester,</span> <span m="1771110">as</span> <span
  m="1771290">you</span> <span m="1771440">know.</span> <span
  m="1774020">But</span> <span m="1774230">Gauss's</span> <span
  m="1774830">advice</span> <span m="1775430">was,</span> <span
  m="1777410">minimize--</span> <span m="1780330">I'll</span> <span
  m="1780530">blame</span> <span m="1780860">it</span> <span
  m="1780950">on</span> <span m="1781190">Gauss--</span> <span
  m="1783200">the</span> <span m="1783350">distance</span> <span
  m="1783920">between</span> <span m="1784520">Ax</span> <span
  m="1786110">and</span> <span m="1787010">b</span> <span
  m="1788540">squared,</span> <span m="1789050">the</span> <span
  m="1789230">L2</span> <span m="1789790">norm</span> <span
  m="1790250">squared,</span> <span m="1793550">which</span> <span
  m="1793850">is</span> <span m="1794030">just</span> <span
  m="1796350">Ax</span> <span m="1796910">minus</span> <span
  m="1797300">b</span> <span m="1798500">transpose</span> <span
  m="1799460">Ax</span> <span m="1799670">minus</span> <span
  m="1800030">b.</span> <span m="1802030">It's</span> <span m="1802370">a</span>
  <span m="1802430">quadratic.</span> <span m="1804190">And</span> <span
  m="1806200">minimizing</span> <span m="1806950">it</span> <span
  m="1807100">gives</span> <span m="1807370">me</span> <span
  m="1807550">a</span> <span m="1807640">system</span> <span
  m="1808120">of</span> <span m="1808240">linear</span> <span
  m="1808660">equations.</span></p><p><span m="1810050">So</span> <span
  m="1810190">in</span> <span m="1810340">the</span> <span
  m="1810490">end,</span> <span m="1810670">they</span> <span
  m="1810820">will</span> <span m="1811030">have</span> <span
  m="1811240">a</span> <span m="1811300">solution.</span> <span
  m="1812330">So</span> <span m="1812470">that's</span> <span
  m="1812770">the</span> <span m="1812860">whole</span> <span
  m="1813040">point</span> <span m="1813310">of</span> <span
  m="1813430">least</span> <span m="1813590">squares.</span> <span
  m="1814660">We</span> <span m="1814810">have</span> <span
  m="1814990">an</span> <span m="1815140">unsolvable</span> <span
  m="1816100">problem,</span> <span m="1817420">not</span> <span
  m="1817840">no</span> <span m="1818110">solution.</span> <span
  m="1820080">We</span> <span m="1820230">follow</span> <span
  m="1820620">Gauss's</span> <span m="1821160">advice</span> <span
  m="1822380">to</span> <span m="1822600">get</span> <span
  m="1822900">the</span> <span m="1823050">best</span> <span
  m="1824040">we</span> <span m="1824220">can.</span> <span
  m="1825330">And</span> <span m="1826110">that</span> <span
  m="1826980">does</span> <span m="1827490">produce</span> <span
  m="1827940">an</span> <span m="1828060">answer.</span></p><p><span
  m="1828840">So</span> <span m="1829080">this</span> <span
  m="1830850">is--</span> <span m="1831510">if</span> <span m="1831660">I</span>
  <span m="1831750">multiply</span> <span m="1832200">this</span> <span
  m="1832770">out,</span> <span m="1833100">it's</span> <span
  m="1833580">x</span> <span m="1833850">transpose,</span> <span
  m="1834690">A</span> <span m="1834960">transpose,</span> <span
  m="1835830">Ax.</span> <span m="1836610">That</span> <span
  m="1836820">comes</span> <span m="1837210">from</span> <span
  m="1837450">the</span> <span m="1838380">squared</span> <span
  m="1838800">term.</span> <span m="1839830">And</span> <span
  m="1839850">then</span> <span m="1840090">I</span> <span
  m="1840180">have</span> <span m="1840450">probably</span> <span
  m="1840990">these--</span> <span m="1842100">actually,</span> <span
  m="1846100">probably</span> <span m="1846600">I'll</span> <span
  m="1846810">get</span> <span m="1846990">two</span> <span
  m="1847260">of</span> <span m="1847320">those,</span> <span
  m="1847830">and</span> <span m="1847950">then</span> <span
  m="1848150">a</span> <span m="1848220">constant</span> <span
  m="1848790">term</span> <span m="1849210">that</span> <span
  m="1851070">has</span> <span m="1851340">derivative</span> <span
  m="1851850">0</span> <span m="1852240">so</span> <span m="1852450">it</span>
  <span m="1852510">doesn't</span> <span m="1853110">enter.</span> <span
  m="1854100">So</span> <span m="1854340">this</span> <span
  m="1854580">is</span> <span m="1854730">what</span> <span
  m="1854940">I'm</span> <span m="1855080">minimizing.</span> <span
  m="1856590">This</span> <span m="1856800">is</span> <span
  m="1857010">the</span> <span m="1857940">loss</span> <span
  m="1858690">function.</span></p><p><span m="1859800">And</span> <span
  m="1860430">it</span> <span m="1860610">leads</span> <span
  m="1861030">to--</span> <span m="1861540">let's</span> <span
  m="1861780">just</span> <span m="1862020">jump</span> <span
  m="1862410">to</span> <span m="1862590">the</span> <span
  m="1866040">key</span> <span m="1866400">here.</span> <span
  m="1867390">What</span> <span m="1867720">equation</span> <span
  m="1868350">do</span> <span m="1868500">I</span> <span m="1868680">get</span>
  <span m="1869110">when</span> <span m="1869370">I</span> <span
  m="1870150">look</span> <span m="1870480">for--</span> <span
  m="1871920">what</span> <span m="1872130">equation</span> <span
  m="1872730">is</span> <span m="1872850">solved</span> <span
  m="1873570">by</span> <span m="1873930">the</span> <span
  m="1875100">best</span> <span m="1875460">x,</span> <span
  m="1877070">the</span> <span m="1877190">best</span> <span
  m="1877560">x?</span> <span m="1879160">The</span> <span
  m="1879350">best</span> <span m="1879690">x</span> <span
  m="1879980">solves</span> <span m="1881450">the</span> <span
  m="1881600">famous--</span> <span m="1883610">this</span> <span
  m="1883880">is</span> <span m="1884270">regression</span> <span
  m="1885140">in</span> <span m="1885290">statistics,</span> <span
  m="1887420">linear</span> <span m="1887960">regression.</span> <span
  m="1891760">It's</span> <span m="1892550">one</span> <span
  m="1892700">of</span> <span m="1892760">the</span> <span
  m="1892880">main</span> <span m="1894410">computations</span> <span
  m="1895400">in</span> <span m="1895550">statistics,</span> <span
  m="1896240">not</span> <span m="1896510">of</span> <span
  m="1896630">course</span> <span m="1896960">just</span> <span
  m="1897260">for</span> <span m="1897500">straight</span> <span
  m="1897950">line</span> <span m="1898280">fits,</span> <span
  m="1898700">but</span> <span m="1898910">for</span> <span
  m="1899570">any</span> <span m="1899990">system</span> <span
  m="1901200">Ax</span> <span m="1901830">equal</span> <span
  m="1901940">b.</span></p><p><span m="1902930">That</span> <span
  m="1903290">will</span> <span m="1903530">lead</span> <span
  m="1903890">to--</span> <span m="1905300">this</span> <span
  m="1905540">minimum</span> <span m="1906080">will</span> <span
  m="1906260">lead</span> <span m="1906530">to</span> <span m="1906830">a</span>
  <span m="1906890">system</span> <span m="1907460">of</span> <span
  m="1907940">equations</span> <span m="1908660">that</span> <span
  m="1908780">I'm</span> <span m="1908990">going</span> <span
  m="1909180">to</span> <span m="1909270">put</span> <span m="1909530">a</span>
  <span m="1909590">box</span> <span m="1909980">around,</span> <span
  m="1910760">because</span> <span m="1911210">it's</span> <span
  m="1912320">so</span> <span m="1912590">fundamental.</span> <span
  m="1913340">And</span> <span m="1915020">are</span> <span
  m="1915320">you</span> <span m="1915440">willing</span> <span
  m="1915770">to</span> <span m="1915890">tell</span> <span
  m="1916130">me</span> <span m="1916280">what</span> <span
  m="1916460">that</span> <span m="1916700">equation</span> <span
  m="1917270">is?</span> <span m="1918990">Yes,</span> <span
  m="1919290">thanks.</span></p><p><span m="1920036">AUDIENCE:</span> <span
  m="1920214">A transpose</span> <span m="1920392">A.</span></p><p><span
  m="1920750">PROFESSOR:</span> <span m="1920870">A</span> <span
  m="1920990">transpose</span> <span m="1921740">A</span> <span
  m="1922880">is</span> <span m="1923070">going</span> <span
  m="1923170">to</span> <span m="1923300">come</span> <span
  m="1923630">from</span> <span m="1923900">there--</span> <span
  m="1924240">you</span> <span m="1924410">see</span> <span
  m="1924680">it--</span> <span m="1926270">times</span> <span
  m="1926840">the</span> <span m="1926930">best</span> <span
  m="1927380">x</span> <span m="1929120">equals</span> <span
  m="1931850">A</span> <span m="1932060">transpose</span> <span
  m="1932720">b.</span> <span m="1937980">That</span> <span
  m="1938280">gives</span> <span m="1938590">the</span> <span
  m="1938670">minimum.</span> <span m="1940610">Let</span> <span
  m="1940770">me</span> <span m="1941760">forego</span> <span
  m="1942720">checking</span> <span m="1943320">that.</span> <span
  m="1943610">You</span> <span m="1944010">see</span> <span m="1944340">that
  the</span> <span m="1944670">quadratic</span> <span m="1945330">term</span>
  <span m="1945660">has</span> <span m="1945930">the</span> <span
  m="1946500">matrix</span> <span m="1947130">in</span> <span
  m="1947310">it.</span> <span m="1947520">So</span> <span
  m="1947830">it's</span> <span m="1948210">derivative.</span> <span
  m="1949920">Maybe</span> <span m="1950220">the</span> <span
  m="1950370">derivative</span> <span m="1950970">of</span> <span
  m="1951060">this</span> <span m="1951420">is</span> <span m="1951600">2</span>
  <span m="1952500">A</span> <span m="1952650">transpose</span> <span
  m="1953250">Ax,</span> <span m="1954980">and</span> <span
  m="1955220">then</span> <span m="1955520">the</span> <span
  m="1955670">2</span> <span m="1956300">cancels</span> <span
  m="1956900">that</span> <span m="1957140">2.</span> <span
  m="1958100">And</span> <span m="1958430">this</span> <span
  m="1958760">could</span> <span m="1958970">also</span> <span
  m="1959300">be</span> <span m="1959510">written</span> <span
  m="1959930">as</span> <span m="1960650">x</span> <span
  m="1960920">transpose</span> <span m="1961700">A</span> <span
  m="1961880">transpose</span> <span m="1962720">b.</span> <span
  m="1963650">So</span> <span m="1963920">it's</span> <span m="1964790">x</span>
  <span m="1965060">transpose</span> <span m="1965840">against</span> <span
  m="1966230">A</span> <span m="1966410">transpose</span> <span
  m="1967040">b.</span> <span m="1967970">That's</span> <span
  m="1968240">linear.</span> <span m="1968960">So</span> <span
  m="1969260">when</span> <span m="1969440">I</span> <span
  m="1969560">take</span> <span m="1969830">the</span> <span
  m="1969950">derivative,</span> <span m="1970640">it's</span> <span
  m="1971420">that</span> <span m="1971660">constant.</span></p><p><span
  m="1973990">That's</span> <span m="1974290">pretty</span> <span
  m="1974620">fast.</span> <span m="1975490">18.06</span> <span
  m="1976300">would</span> <span m="1977780">patiently</span> <span
  m="1981730">derive</span> <span m="1982360">that.</span> <span
  m="1984090">But</span> <span m="1985080">here,</span> <span
  m="1985860">let</span> <span m="1986040">me</span> <span
  m="1986190">give</span> <span m="1986430">you</span> <span
  m="1986640">the</span> <span m="1988010">picture</span> <span
  m="1988460">that</span> <span m="1988640">goes</span> <span
  m="1988910">with</span> <span m="1989150">it,</span> <span
  m="1991280">the</span> <span m="1991420">geometry.</span> <span
  m="1992500">So</span> <span m="1992830">we</span> <span
  m="1993010">have</span> <span m="1993430">the</span> <span
  m="1995320">problem.</span> <span m="1997950">No</span> <span
  m="1998160">solution.</span> <span m="1999920">We</span> <span
  m="2000100">have</span> <span m="2000830">Gauss's</span> <span
  m="2003300">best</span> <span m="2003610">answer.</span> <span
  m="2004920">Minimize</span> <span m="2006150">the</span> <span
  m="2006540">2</span> <span m="2006840">norm</span> <span m="2007650">of</span>
  <span m="2007800">the</span> <span m="2007950">error.</span> <span
  m="2009210">We</span> <span m="2009420">have</span> <span
  m="2009930">the</span> <span m="2011100">conclusion,</span> <span
  m="2011880">the</span> <span m="2012000">matrix</span> <span
  m="2012570">that</span> <span m="2012690">we</span> <span
  m="2012870">get</span> <span m="2013170">in.</span> <span
  m="2013410">And</span> <span m="2013530">now</span> <span m="2013770">I</span>
  <span m="2013860">want</span> <span m="2014070">to</span> <span
  m="2014280">draw</span> <span m="2014520">a</span> <span
  m="2014550">picture</span> <span m="2015000">that</span> <span
  m="2015150">goes</span> <span m="2015420">with</span> <span
  m="2015630">it.</span> <span m="2016170">OK.</span></p><p><span
  m="2017010">So</span> <span m="2017760">here</span> <span
  m="2017970">is</span> <span m="2018120">a</span> <span
  m="2018180">picture.</span> <span m="2024490">I</span> <span
  m="2024580">want</span> <span m="2024760">to</span> <span
  m="2024850">have</span> <span m="2025500">a</span> <span
  m="2025900">column</span> <span m="2026450">space</span> <span
  m="2026980">of</span> <span m="2027130">A</span> <span
  m="2027560">there</span> <span m="2027880">in</span> <span
  m="2028060">that</span> <span m="2028240">picture.</span> <span
  m="2028630">Of</span> <span m="2028690">course,</span> <span
  m="2029320">the</span> <span m="2029770">0</span> <span
  m="2030190">vector's</span> <span m="2030730">in</span> <span
  m="2030880">the</span> <span m="2030970">column</span> <span
  m="2031360">space</span> <span m="2031750">of</span> <span
  m="2031850">A.</span> <span m="2034060">So</span> <span
  m="2034540">this</span> <span m="2034840">is</span> <span
  m="2035590">all</span> <span m="2035920">possible</span> <span
  m="2040090">vectors</span> <span m="2040880">Ax.</span> <span
  m="2045560">Right?</span> <span m="2046100">You're</span> <span
  m="2046220">never</span> <span m="2046520">forgetting</span> <span
  m="2047060">that the</span> <span m="2047360">column</span> <span
  m="2047660">space</span> <span m="2048010">is</span> <span
  m="2048380">all</span> <span m="2048620">the</span> <span
  m="2048800">Ax's.</span></p><p><span m="2051630">Now,</span> <span
  m="2053139">I've</span> <span m="2053260">got</span> <span
  m="2053400">to</span> <span m="2053469">put</span> <span m="2053800">b</span>
  <span m="2054250">in</span> <span m="2054370">the</span> <span
  m="2054489">picture.</span> <span m="2055820">So</span> <span
  m="2056000">where</span> <span m="2056380">does</span> <span
  m="2056610">this</span> <span m="2056840">vector</span> <span
  m="2057290">b--</span> <span m="2057679">so</span> <span
  m="2057889">I'm</span> <span m="2058429">trying</span> <span
  m="2058790">to</span> <span m="2058909">solve</span> <span
  m="2060310">Ax</span> <span m="2060770">equal</span> <span
  m="2061040">b,</span> <span m="2061429">but</span> <span
  m="2061760">failing.</span> <span m="2063350">So</span> <span
  m="2064280">if</span> <span m="2064460">I</span> <span m="2064550">draw</span>
  <span m="2064920">b</span> <span m="2065360">in</span> <span
  m="2065480">this</span> <span m="2065719">picture,</span> <span
  m="2067429">how</span> <span m="2067610">do</span> <span m="2067790">I</span>
  <span m="2067909">draw</span> <span m="2068210">b?</span> <span
  m="2068570">Where</span> <span m="2068780">do</span> <span
  m="2068900">I</span> <span m="2069020">put</span> <span m="2069260">it?</span>
  <span m="2069830">Shall</span> <span m="2070040">I</span> <span
  m="2070159">put</span> <span m="2070429">it</span> <span m="2070580">in</span>
  <span m="2070760">the</span> <span m="2070880">column</span> <span
  m="2071270">space?</span> <span m="2072889">No.</span> <span
  m="2074120">The</span> <span m="2074210">whole</span> <span
  m="2074449">point</span> <span m="2074870">is,</span> <span
  m="2075230">it's</span> <span m="2075469">not</span> <span
  m="2075770">in</span> <span m="2075920">the</span> <span
  m="2076010">column</span> <span m="2076400">space.</span> <span
  m="2077389">It's</span> <span m="2077570">not</span> <span
  m="2078230">an</span> <span m="2078409">Ax.</span> <span
  m="2079580">It's</span> <span m="2080330">out</span> <span
  m="2080510">there</span> <span m="2080780">somewhere,</span> <span
  m="2081290">b.</span> <span m="2083000">OK.</span> <span
  m="2085350">And</span> <span m="2085530">then</span> <span
  m="2086280">what's</span> <span m="2086790">the</span> <span
  m="2086969">geometry</span> <span m="2087780">that</span> <span
  m="2087960">goes</span> <span m="2088380">with</span> <span
  m="2089460">least</span> <span m="2089690">squares</span> <span
  m="2090420">and</span> <span m="2090540">the</span> <span
  m="2090659">normal</span> <span m="2091110">equations</span> <span
  m="2091860">and</span> <span m="2092040">Gauss's</span> <span
  m="2093090">suggestion</span> <span m="2093929">to</span> <span
  m="2094530">minimize</span> <span m="2095880">the</span> <span
  m="2096030">error?</span> <span m="2097710">Where</span> <span
  m="2097980">will</span> <span m="2098740">Ax</span> <span
  m="2099270">be,</span> <span m="2100470">the</span> <span
  m="2100560">best</span> <span m="2100890">Ax</span> <span
  m="2101400">that</span> <span m="2101580">I</span> <span
  m="2101700">can</span> <span m="2101940">do?</span></p><p><span
  m="2104460">So</span> <span m="2108000">what</span> <span
  m="2108150">Gauss</span> <span m="2108560">has</span> <span
  m="2108690">produced</span> <span m="2109290">is</span> <span
  m="2109560">an</span> <span m="2110310">A</span> <span
  m="2110910">here.</span> <span m="2112350">You</span> <span
  m="2112440">can't</span> <span m="2112800">find</span> <span
  m="2113160">an</span> <span m="2113280">x.</span> <span
  m="2114390">He'll</span> <span m="2114540">do</span> <span
  m="2114720">as</span> <span m="2114870">best</span> <span
  m="2115230">he</span> <span m="2115350">can.</span> <span
  m="2117040">And</span> <span m="2117580">we're</span> <span
  m="2117700">calling</span> <span m="2118210">that</span> <span
  m="2118630">guy</span> <span m="2119020">x</span> <span
  m="2119350">hat.</span> <span m="2120550">And</span> <span
  m="2120850">this</span> <span m="2121290">is</span> <span
  m="2121450">the</span> <span m="2121600">algebra</span> <span
  m="2122950">to</span> <span m="2123100">find</span> <span m="2123580">x</span>
  <span m="2123850">hat.</span> <span m="2124690">And</span> <span
  m="2124810">now,</span> <span m="2126570">where is</span> <span
  m="2126930">the</span> <span m="2127020">picture</span> <span
  m="2127470">here?</span> <span m="2128770">Where</span> <span
  m="2129060">is</span> <span m="2129420">this</span> <span
  m="2129720">vector</span> <span m="2130140">Ax</span> <span
  m="2130650">hat,</span> <span m="2131740">which</span> <span
  m="2131910">is</span> <span m="2132060">the</span> <span
  m="2132180">best</span> <span m="2132890">Ax</span> <span
  m="2133380">we</span> <span m="2133530">can</span> <span
  m="2133740">get?</span></p><p><span m="2135750">So</span> <span
  m="2135960">it</span> <span m="2136050">has</span> <span m="2136320">to</span>
  <span m="2136440">be</span> <span m="2136800">in</span> <span
  m="2137220">the</span> <span m="2138390">column</span> <span
  m="2138810">space,</span> <span m="2139320">because</span> <span
  m="2139530">it's</span> <span m="2139710">A</span> <span
  m="2139900">times</span> <span m="2140220">something.</span> <span
  m="2141420">And</span> <span m="2141600">where</span> <span
  m="2141990">is</span> <span m="2142200">it</span> <span m="2142320">in</span>
  <span m="2142440">the</span> <span m="2142530">column</span> <span
  m="2142890">space?</span> <span m="2144210">It's</span> <span
  m="2145620">the</span> <span m="2145770">projection.</span> <span
  m="2148330">That's</span> <span m="2148840">Ax</span> <span
  m="2149200">hat.</span> <span m="2150640">And</span> <span
  m="2150790">here</span> <span m="2150990">is</span> <span
  m="2151120">the</span> <span m="2151270">error,</span> <span
  m="2152660">which</span> <span m="2152770">you</span> <span
  m="2152860">couldn't</span> <span m="2153160">do</span> <span
  m="2153310">anything</span> <span m="2153700">about,</span> <span
  m="2154540">b</span> <span m="2154930">minus</span> <span
  m="2155530">Ax</span> <span m="2155785">hat.</span> <span
  m="2159220">Yeah.</span> <span m="2159470">So</span> <span
  m="2159680">it's</span> <span m="2159860">the</span> <span
  m="2159980">projection,</span> <span m="2161110">right.</span></p><p><span
  m="2162170">So</span> <span m="2163100">all</span> <span
  m="2163400">this</span> <span m="2163820">is</span> <span
  m="2165080">justifying</span> <span m="2166220">the--</span> <span
  m="2167210">so</span> <span m="2168080">we're</span> <span
  m="2169100">in</span> <span m="2169850">the</span> <span
  m="2170000">second</span> <span m="2170810">approach</span> <span
  m="2171320">to</span> <span m="2171470">least</span> <span
  m="2171680">squares,</span> <span m="2173030">solve</span> <span
  m="2173480">the</span> <span m="2173630">normal</span> <span
  m="2174050">equations.</span> <span m="2175940">Solve</span> <span
  m="2176300">the</span> <span m="2176390">normal</span> <span
  m="2176870">equations.</span> <span m="2178730">That</span> <span
  m="2179240">would</span> <span m="2179360">be</span> <span
  m="2179540">the</span> <span m="2179660">second</span> <span
  m="2180110">approach</span> <span m="2180560">to</span> <span
  m="2180710">least</span> <span m="2180960">squares.</span> <span
  m="2182590">And</span> <span m="2185960">most</span> <span
  m="2186830">examples,</span> <span m="2187520">if</span> <span
  m="2187640">they're</span> <span m="2187790">not</span> <span
  m="2188420">very</span> <span m="2188790">big</span> <span
  m="2189140">or</span> <span m="2189260">very</span> <span
  m="2189590">difficult,</span> <span m="2190800">you</span> <span
  m="2190880">just</span> <span m="2191690">create</span> <span
  m="2192140">the</span> <span m="2192200">matrix</span> <span
  m="2192740">A</span> <span m="2192920">transpose</span> <span
  m="2193235">A,</span> <span m="2193550">and</span> <span
  m="2193970">you</span> <span m="2194660">call</span> <span
  m="2196700">MATLAB</span> <span m="2197300">and</span> <span
  m="2197450">solve</span> <span m="2197840">that</span> <span
  m="2198050">linear</span> <span m="2198410">system.</span> <span
  m="2199130">You</span> <span m="2199280">create</span> <span
  m="2199680">the</span> <span m="2199790">matrix,</span> <span
  m="2200420">you</span> <span m="2200540">create</span> <span
  m="2200900">the</span> <span m="2201020">right</span> <span
  m="2201290">hand</span> <span m="2201470">side,</span> <span
  m="2201800">and</span> <span m="2201890">you</span> <span
  m="2201950">solve</span> <span m="2202310">it.</span></p><p><span
  m="2205670">So</span> <span m="2205750">that's</span> <span
  m="2206080">the</span> <span m="2206590">ordinary</span> <span
  m="2207760">run</span> <span m="2208060">of</span> <span
  m="2208150">the</span> <span m="2208270">mill</span> <span
  m="2209420">least</span> <span m="2209720">squares</span> <span
  m="2210160">problem.</span> <span m="2211330">Just</span> <span
  m="2211630">do</span> <span m="2211870">it.</span> <span m="2214150">So</span>
  <span m="2214360">that's</span> <span m="2214690">method</span> <span
  m="2214990">two,</span> <span m="2216070">just</span> <span
  m="2216310">do</span> <span m="2216550">it.</span> <span
  m="2219650">What's</span> <span m="2219920">method</span> <span
  m="2220310">three?</span> <span m="2222590">For</span> <span
  m="2222770">the</span> <span m="2222890">same--</span> <span
  m="2223310">we're</span> <span m="2223490">talking</span> <span
  m="2223790">about</span> <span m="2223940">the</span> <span
  m="2224060">same</span> <span m="2224390">problem</span> <span
  m="2224870">here,</span> <span m="2225140">but</span> <span
  m="2225320">now</span> <span m="2225620">I'm</span> <span
  m="2225770">thinking</span> <span m="2226880">it</span> <span m="2227120">may
  be</span> <span m="2227510">a</span> <span m="2227570">little</span> <span
  m="2227810">more</span> <span m="2228020">difficult.</span> <span
  m="2230950">This</span> <span m="2231190">matrix</span> <span
  m="2231790">A</span> <span m="2231970">transpose</span> <span
  m="2232720">A</span> <span m="2234070">might</span> <span
  m="2234460">be</span> <span m="2235810">nearly</span> <span
  m="2236320">singular.</span></p><p><span m="2237820">Gauss</span> <span
  m="2238090">is</span> <span m="2238360">assuming</span> <span
  m="2238960">that--</span> <span m="2241200">yeah,</span> <span
  m="2241500">when</span> <span m="2241840">did</span> <span
  m="2241990">this</span> <span m="2242230">work?</span> <span
  m="2243410">When</span> <span m="2243520">did</span> <span
  m="2243670">this</span> <span m="2243910">work?</span> <span
  m="2244890">And</span> <span m="2245140">it</span> <span
  m="2245260">will</span> <span m="2245920">continue</span> <span
  m="2246460">to</span> <span m="2246610">work</span> <span
  m="2247030">in</span> <span m="2247180">the</span> <span
  m="2247900">next</span> <span m="2248880">three--</span> <span
  m="2250150">this</span> <span m="2250390">works,</span> <span
  m="2251530">this</span> <span m="2251770">is</span> <span
  m="2251950">good,</span> <span m="2252610">if</span> <span
  m="2253330">assuming</span> <span m="2257330">A</span> <span
  m="2258110">has</span> <span m="2260260">independent</span> <span
  m="2261010">columns.</span> <span m="2272570">Yeah,</span> <span
  m="2273040">better</span> <span m="2273490">just</span> <span
  m="2273760">make</span> <span m="2273970">clear.</span> <span
  m="2274810">I'm</span> <span m="2275080">claiming</span> <span
  m="2276310">that</span> <span m="2277270">when</span> <span
  m="2277540">A</span> <span m="2277720">has--</span> <span
  m="2278320">so</span> <span m="2278500">what's</span> <span
  m="2278810">the</span> <span m="2279580">reasoning?</span></p><p><span
  m="2280570">If</span> <span m="2280780">A</span> <span m="2281020">has</span>
  <span m="2281350">independent</span> <span m="2281890">columns--</span> <span
  m="2283430">but</span> <span m="2283610">maybe</span> <span
  m="2283970">not</span> <span m="2284240">enough</span> <span
  m="2284570">columns,</span> <span m="2285440">like</span> <span
  m="2285740">here--</span> <span m="2286550">it's</span> <span
  m="2286670">only</span> <span m="2286850">got</span> <span
  m="2287030">two</span> <span m="2287300">columns.</span> <span
  m="2287840">It's</span> <span m="2288020">obviously</span> <span
  m="2288470">not</span> <span m="2288680">going</span> <span
  m="2288780">to</span> <span m="2288920">be</span> <span
  m="2289040">able</span> <span m="2289280">to</span> <span
  m="2289370">match</span> <span m="2289970">any</span> <span
  m="2290270">right</span> <span m="2290570">hand</span> <span
  m="2290750">side.</span> <span m="2291410">But</span> <span
  m="2291620">it's</span> <span m="2291800">got</span> <span
  m="2292010">independent</span> <span m="2292580">columns.</span> <span
  m="2293570">When</span> <span m="2293840">A</span> <span
  m="2294230">has</span> <span m="2294590">independent</span> <span
  m="2295160">columns,</span> <span m="2295700">then</span> <span
  m="2296000">what</span> <span m="2296270">can</span> <span
  m="2296510">I</span> <span m="2296630">say</span> <span
  m="2296870">about</span> <span m="2297140">this</span> <span
  m="2297410">matrix?</span> <span m="2301800">It's</span> <span
  m="2302040">invertible.</span> <span m="2303870">Gauss's</span> <span
  m="2304450">plan</span> <span m="2304900">works.</span> <span
  m="2305500">If</span> <span m="2305740">A</span> <span m="2305890">has</span>
  <span m="2306160">independent</span> <span m="2306700">columns,</span> <span
  m="2308080">then</span> <span m="2309490">this</span> <span
  m="2309790">would</span> <span m="2309970">be</span> <span
  m="2310120">a</span> <span m="2310480">linear</span> <span
  m="2310870">algebra</span> <span m="2311860">step.</span> <span
  m="2312880">Then</span> <span m="2313120">this</span> <span
  m="2313360">will</span> <span m="2313510">be</span> <span
  m="2313690">invertible.</span> <span m="2315040">You</span> <span
  m="2315190">see</span> <span m="2315430">the</span> <span
  m="2315580">importance</span> <span m="2316090">of</span> <span
  m="2316180">that</span> <span m="2316450">step.</span></p><p><span
  m="2317230">If</span> <span m="2317420">A</span> <span m="2317590">has</span>
  <span m="2317830">independent</span> <span m="2318370">columns,</span> <span
  m="2318790">that</span> <span m="2318910">means</span> <span
  m="2319210">it</span> <span m="2319330">has</span> <span m="2319510">no</span>
  <span m="2319830">null</span> <span m="2320040">space.</span> <span
  m="2321550">Only</span> <span m="2321880">x</span> <span
  m="2322200">equals</span> <span m="2322410">0 is</span> <span
  m="2322750">in</span> <span m="2322870">the</span> <span
  m="2322960">null</span> <span m="2323200">space.</span> <span
  m="2324760">Two</span> <span m="2325150">independent</span> <span
  m="2325690">columns,</span> <span m="2326110">but</span> <span
  m="2326350">only</span> <span m="2326650">two.</span> <span
  m="2328000">So</span> <span m="2328450">not</span> <span
  m="2328720">enough</span> <span m="2329380">to</span> <span
  m="2329560">solve</span> <span m="2330190">systems,</span> <span
  m="2330790">but</span> <span m="2331000">independent.</span> <span
  m="2332140">Then</span> <span m="2332500">you're</span> <span
  m="2332710">OK.</span> <span m="2333560">This</span> <span
  m="2333790">matrix</span> <span m="2334330">is</span> <span
  m="2334480">invertible.</span> <span m="2335590">You</span> <span
  m="2335740">can</span> <span m="2335920">do</span> <span
  m="2336100">what</span> <span m="2336280">Gauss</span> <span
  m="2336610">tells</span> <span m="2336940">you.</span></p><p><span
  m="2340200">But</span> <span m="2341580">we're</span> <span
  m="2342120">prepared</span> <span m="2342870">now--</span> <span
  m="2343530">we</span> <span m="2343890">have</span> <span
  m="2344070">to</span> <span m="2344190">think,</span> <span
  m="2345630">OK.</span> <span m="2347790">So</span> <span
  m="2349880">what</span> <span m="2350460">do</span> <span m="2350610">I</span>
  <span m="2350730">really</span> <span m="2351060">want</span> <span
  m="2351260">to</span> <span m="2351360">do?</span> <span m="2351930">I</span>
  <span m="2352050">want</span> <span m="2352290">to</span> <span
  m="2352350">connect</span> <span m="2353460">this</span> <span
  m="2354240">Gauss's</span> <span m="2354860">solution</span> <span
  m="2356510">to</span> <span m="2357550">the</span> <span
  m="2357680">pseudo</span> <span m="2358130">inverse.</span> <span
  m="2359410">Because</span> <span m="2359720">I'm</span> <span
  m="2359900">claiming</span> <span m="2360380">they</span> <span
  m="2360590">both</span> <span m="2361070">give</span> <span
  m="2361310">the</span> <span m="2361430">same</span> <span
  m="2361880">result.</span> <span m="2362860">The</span> <span
  m="2363020">pseudo</span> <span m="2363500">inverse</span> <span
  m="2368450">will</span> <span m="2368690">apply.</span> <span
  m="2371910">But</span> <span m="2372120">we</span> <span
  m="2372330">have</span> <span m="2373380">something--</span> <span
  m="2375790">A</span> <span m="2376170">is</span> <span m="2376320">not</span>
  <span m="2376560">invertible.</span> <span m="2377280">Just</span> <span
  m="2377880">keep</span> <span m="2378510">remembering</span> <span
  m="2379050">this</span> <span m="2379260">matrix.</span> <span
  m="2380310">It's</span> <span m="2380520">not</span> <span
  m="2380970">invertible.</span> <span m="2381990">But</span> <span
  m="2383600">it</span> <span m="2385540">has</span> <span
  m="2385810">got</span> <span m="2386080">independent</span> <span
  m="2386740">columns.</span></p><p><span m="2387850">What</span> <span
  m="2388450">am</span> <span m="2388570">I</span> <span
  m="2388720">saying</span> <span m="2389110">there?</span> <span
  m="2390160">Just</span> <span m="2390370">going</span> <span
  m="2390610">back</span> <span m="2390880">to</span> <span
  m="2391000">the</span> <span m="2391150">picture.</span> <span
  m="2396030">If</span> <span m="2397350">A</span> <span m="2398660">is</span>
  <span m="2398820">a</span> <span m="2398880">matrix</span> <span
  m="2399390">with</span> <span m="2399570">independent</span> <span
  m="2400200">columns,</span> <span m="2401040">what</span> <span
  m="2401250">space</span> <span m="2401700">disappears</span> <span
  m="2402570">in</span> <span m="2402690">this</span> <span
  m="2402900">picture?</span> <span m="2406460">The</span> <span
  m="2406630">null</span> <span m="2406850">space</span> <span
  m="2407570">goes</span> <span m="2407870">away.</span> <span
  m="2408690">So</span> <span m="2408770">the</span> <span
  m="2408860">picture</span> <span m="2409280">is</span> <span
  m="2409400">simpler.</span> <span m="2410450">But</span> <span
  m="2410660">it's</span> <span m="2410810">still</span> <span
  m="2413300">the</span> <span m="2413430">null</span> <span
  m="2413640">space</span> <span m="2414030">of</span> <span
  m="2415320">A</span> <span m="2415470">transpose.</span> <span
  m="2416160">This</span> <span m="2416400">is</span> <span
  m="2416490">still</span> <span m="2416790">pretty</span> <span
  m="2417120">big,</span> <span m="2417430">because</span> <span
  m="2418440">I</span> <span m="2418560">only</span> <span
  m="2418800">had</span> <span m="2418950">two</span> <span
  m="2419220">columns</span> <span m="2419910">and</span> <span
  m="2420090">a</span> <span m="2420150">whole</span> <span
  m="2420330">lot</span> <span m="2420570">of</span> <span
  m="2420630">rows.</span> <span m="2421530">And</span> <span
  m="2422100">that's</span> <span m="2423090">going</span> <span
  m="2423210">to</span> <span m="2423300">be</span> <span
  m="2423420">reflected</span> <span m="2424020">here.</span></p><p><span
  m="2424530">So</span> <span m="2425590">what</span> <span
  m="2426930">am</span> <span m="2427080">I</span> <span
  m="2427200">trying</span> <span m="2427470">to</span> <span
  m="2427590">say?</span> <span m="2428520">I'm</span> <span
  m="2428730">trying</span> <span m="2429000">to</span> <span
  m="2429090">say</span> <span m="2429390">that</span> <span
  m="2429600">this</span> <span m="2429930">answer</span> <span
  m="2430470">is</span> <span m="2430650">the</span> <span
  m="2430770">same</span> <span m="2431250">as</span> <span
  m="2431880">the</span> <span m="2432000">pseudo</span> <span
  m="2432480">inverse</span> <span m="2432990">answer.</span> <span
  m="2433740">We</span> <span m="2433920">could</span> <span
  m="2434100">possibly</span> <span m="2434610">even</span> <span
  m="2435000">check</span> <span m="2435300">that</span> <span
  m="2435540">point.</span> <span m="2436590">Let</span> <span
  m="2436770">me</span> <span m="2436980">write</span> <span
  m="2437310">it</span> <span m="2437400">down</span> <span
  m="2437730">first.</span> <span m="2440900">I</span> <span
  m="2441100">claim</span> <span m="2445950">that</span> <span
  m="2446940">the</span> <span m="2447090">answer</span> <span
  m="2447750">A</span> <span m="2448860">plus</span> <span m="2449850">b</span>
  <span m="2451950">is</span> <span m="2452160">the</span> <span
  m="2452280">same</span> <span m="2452760">as</span> <span
  m="2452970">the</span> <span m="2453120">answer</span> <span
  m="2453810">coming</span> <span m="2454200">from</span> <span
  m="2454410">here,</span> <span m="2455490">A</span> <span
  m="2455670">transpose</span> <span m="2456510">A,</span> <span
  m="2458870">inverse</span> <span m="2459250">A</span> <span
  m="2459840">transpose</span> <span m="2460590">b,</span> <span
  m="2462120">when</span> <span m="2465030">I</span> <span
  m="2465150">guess</span> <span m="2466180">the</span> <span
  m="2467130">null</span> <span m="2467430">space</span> <span
  m="2469520">is</span> <span m="2469820">0,</span> <span m="2470710">the</span>
  <span m="2470880">rank</span> <span m="2471570">is</span> <span
  m="2472350">all</span> <span m="2472800">of</span> <span m="2473220">n,</span>
  <span m="2474030">whatever</span> <span m="2474450">you</span> <span
  m="2474630">like</span> <span m="2474870">to</span> <span
  m="2474990">say.</span></p><p><span m="2475740">I</span> <span
  m="2475890">believe</span> <span m="2476400">that</span> <span
  m="2478110">method</span> <span m="2479340">one,</span> <span
  m="2479940">this</span> <span m="2480990">two</span> <span
  m="2481220">within</span> <span m="2481530">one</span> <span
  m="2482610">quick</span> <span m="2482940">formula--</span> <span
  m="2483970">so you</span> <span m="2484200">remember</span> <span
  m="2484560">that</span> <span m="2484710">this</span> <span
  m="2485010">was</span> <span m="2486660">V</span> <span
  m="2488590">sigma</span> <span m="2489550">plus</span> <span
  m="2491080">U</span> <span m="2491950">transpose,</span> <span
  m="2492670">right?</span> <span m="2492970">That's</span> <span
  m="2493270">what</span> <span m="2494050">A</span> <span
  m="2494230">transpose</span> <span m="2494920">was.</span> <span
  m="2495550">That</span> <span m="2495730">this</span> <span
  m="2495970">should</span> <span m="2496240">agree</span> <span
  m="2496660">with</span> <span m="2496810">this.</span> <span
  m="2503750">I</span> <span m="2504110">believe</span> <span
  m="2504500">those</span> <span m="2504800">are</span> <span
  m="2504920">the</span> <span m="2505070">same</span> <span
  m="2506840">when</span> <span m="2508710">the</span> <span
  m="2508830">null</span> <span m="2509070">space</span> <span
  m="2509520">isn't</span> <span m="2509820">in</span> <span
  m="2509970">the</span> <span m="2510030">picture.</span></p><p><span
  m="2511380">So</span> <span m="2511620">the</span> <span
  m="2511740">fact</span> <span m="2512070">that</span> <span
  m="2512190">the</span> <span m="2512310">null</span> <span
  m="2512550">space</span> <span m="2513030">is</span> <span
  m="2513180">just</span> <span m="2513530">a</span> <span m="2513630">0</span>
  <span m="2513990">vector</span> <span m="2514920">means</span> <span
  m="2515400">that</span> <span m="2516180">this</span> <span
  m="2516480">inverse</span> <span m="2516990">does</span> <span
  m="2517320">exist.</span> <span m="2518700">So</span> <span
  m="2519210">this</span> <span m="2519600">inverse</span> <span
  m="2520050">exists.</span> <span m="2521400">But</span> <span
  m="2521670">A</span> <span m="2522015">A</span> <span
  m="2522360">transpose</span> <span m="2524070">is</span> <span
  m="2524400">not</span> <span m="2524760">invertible.</span> <span
  m="2527970">Right?</span> <span m="2529410">No</span> <span
  m="2530100">inverse.</span> <span m="2532200">Because</span> <span
  m="2532500">A</span> <span m="2532800">A</span> <span
  m="2533100">transpose</span> <span m="2533970">would</span> <span
  m="2534210">be</span> <span m="2535410">coming--</span> <span
  m="2538170">all</span> <span m="2538500">this</span> <span
  m="2538740">is</span> <span m="2538890">the</span> <span
  m="2538980">null</span> <span m="2539250">space</span> <span
  m="2539610">of</span> <span m="2539730">A</span> <span
  m="2539850">transpose.</span> <span m="2540750">So</span> <span
  m="2540930">A</span> <span m="2541080">transpose</span> <span
  m="2541740">is</span> <span m="2541860">not</span> <span
  m="2542130">invertible.</span></p><p><span m="2546390">But</span> <span
  m="2547530">A</span> <span m="2547860">transpose</span> <span
  m="2548550">A</span> <span m="2548990">is</span> <span
  m="2549380">invertible.</span> <span m="2550950">How</span> <span
  m="2551130">would</span> <span m="2551310">you</span> <span
  m="2551430">check</span> <span m="2551760">that?</span> <span
  m="2554090">You</span> <span m="2554510">see</span> <span
  m="2554690">what</span> <span m="2554860">I'm--</span> <span
  m="2556610">it's</span> <span m="2556730">taken</span> <span
  m="2558290">pretty</span> <span m="2558590">much</span> <span
  m="2558860">the</span> <span m="2558980">whole</span> <span
  m="2559340">hour</span> <span m="2560330">to</span> <span
  m="2560480">get</span> <span m="2560810">a</span> <span
  m="2562010">picture</span> <span m="2562550">of</span> <span
  m="2562880">the</span> <span m="2564380">geometry</span> <span
  m="2565280">of</span> <span m="2565460">the</span> <span
  m="2565820">pseudo</span> <span m="2566450">inverse.</span> <span
  m="2566930">So</span> <span m="2567110">this</span> <span
  m="2567320">is</span> <span m="2567470">the</span> <span
  m="2567620">pseudo</span> <span m="2568160">inverse.</span> <span
  m="2570790">And</span> <span m="2570970">this</span> <span
  m="2571300">is--</span> <span m="2573390">that</span> <span
  m="2574000">matrix</span> <span m="2574540">there,</span> <span
  m="2576850">it's</span> <span m="2577090">really</span> <span
  m="2577420">doing</span> <span m="2577690">its</span> <span
  m="2577870">best</span> <span m="2578230">to</span> <span
  m="2578380">be</span> <span m="2578710">the</span> <span
  m="2578920">inverse.</span> <span m="2580090">In</span> <span
  m="2580210">fact,</span> <span m="2580690">everybody</span> <span
  m="2581230">here</span> <span m="2581500">is</span> <span
  m="2581700">just</span> <span m="2582160">doing</span> <span
  m="2582400">their</span> <span m="2582550">best</span> <span
  m="2583450">to</span> <span m="2583570">be</span> <span m="2583780">the</span>
  <span m="2583960">inverse.</span></p><p><span m="2584950">Now,</span> <span
  m="2585220">how</span> <span m="2585940">well</span> <span
  m="2586480">is</span> <span m="2586660">this--</span> <span
  m="2587020">how</span> <span m="2587290">close</span> <span
  m="2587680">is</span> <span m="2587860">that</span> <span
  m="2588040">to</span> <span m="2588340">being</span> <span
  m="2588760">the</span> <span m="2589000">inverse?</span> <span
  m="2589420">Can</span> <span m="2589630">I</span> <span
  m="2590140">just</span> <span m="2590380">ask</span> <span
  m="2590680">you</span> <span m="2590770">about</span> <span
  m="2591040">that,</span> <span m="2591470">and</span> <span
  m="2591490">then</span> <span m="2591700">I'll</span> <span
  m="2591820">make</span> <span m="2592090">this</span> <span
  m="2592360">connection,</span> <span m="2592990">and</span> <span
  m="2593590">then</span> <span m="2593950">we're</span> <span
  m="2594190">out</span> <span m="2594430">of</span> <span
  m="2594490">time.</span> <span m="2595870">How</span> <span
  m="2596260">close</span> <span m="2596650">is</span> <span
  m="2596800">that</span> <span m="2597040">to</span> <span
  m="2597190">being</span> <span m="2597550">the</span> <span
  m="2597730">inverse</span> <span m="2598180">of</span> <span
  m="2598330">A?</span> <span m="2601600">Suppose</span> <span
  m="2601880">I</span> <span m="2601970">multiply</span> <span
  m="2602570">that</span> <span m="2602810">by</span> <span
  m="2603080">A.</span> <span m="2603730">What</span> <span
  m="2603910">do</span> <span m="2604040">I</span> <span
  m="2604160">get?</span></p><p><span m="2605660">So</span> <span
  m="2605960">just</span> <span m="2606570">notice.</span> <span
  m="2610030">If</span> <span m="2610210">I</span> <span
  m="2610330">multiply</span> <span m="2610810">that</span> <span
  m="2611080">by</span> <span m="2611350">A,</span> <span
  m="2614370">what</span> <span m="2615480">do</span> <span m="2615670">I</span>
  <span m="2615760">get?</span> <span m="2618110">I</span> <span
  m="2618210">get,</span> <span m="2618340">yeah?</span> <span
  m="2620170">I</span> <span m="2620290">get</span> <span m="2620470">I.</span>
  <span m="2623020">Terrific.</span> <span m="2625480">But</span> <span
  m="2625660">don't</span> <span m="2625930">be</span> <span
  m="2626080">deceived</span> <span m="2626445">to</span> <span
  m="2626810">thinking</span> <span m="2627340">that</span> <span
  m="2628090">this</span> <span m="2628330">is</span> <span
  m="2628480">the</span> <span m="2628630">inverse</span> <span
  m="2629080">of</span> <span m="2629230">A.</span> <span m="2629830">It</span>
  <span m="2629950">worked</span> <span m="2630280">on</span> <span
  m="2630430">the</span> <span m="2630520">left</span> <span
  m="2630850">side,</span> <span m="2631370">but</span> <span
  m="2631630">it's</span> <span m="2631870">not</span> <span
  m="2632170">going</span> <span m="2632410">to</span> <span
  m="2632470">be</span> <span m="2632740">good</span> <span
  m="2633070">on</span> <span m="2633250">the</span> <span
  m="2633340">right</span> <span m="2633640">hand</span> <span
  m="2633880">side.</span> <span m="2634670">So</span> <span
  m="2634690">if</span> <span m="2634810">I</span> <span
  m="2635660">multiply</span> <span m="2636160">A</span> <span
  m="2637060">by</span> <span m="2637330">this</span> <span
  m="2637660">guy</span> <span m="2644140">in</span> <span
  m="2644350">that</span> <span m="2644590">direction,</span> <span
  m="2646640">I'll</span> <span m="2646880">get</span> <span
  m="2647450">as</span> <span m="2647600">close</span> <span
  m="2648050">to</span> <span m="2648200">the</span> <span
  m="2648350">identity</span> <span m="2648950">as</span> <span
  m="2649100">I</span> <span m="2649250">can</span> <span
  m="2649460">come,</span> <span m="2649730">but</span> <span
  m="2649910">I</span> <span m="2650030">won't</span> <span
  m="2650300">get</span> <span m="2650540">the</span> <span
  m="2650720">identity</span> <span m="2651350">that</span> <span
  m="2651560">way.</span></p><p><span m="2652250">So</span> <span
  m="2652430">this</span> <span m="2652640">is</span> <span
  m="2652780">just</span> <span m="2653000">a</span> <span
  m="2653060">little</span> <span m="2653360">box</span> <span
  m="2654020">to</span> <span m="2654170">say--</span> <span
  m="2657090">so</span> <span m="2657510">what's</span> <span
  m="2657830">the</span> <span m="2657920">point</span> <span
  m="2658290">I'm</span> <span m="2658580">making?</span> <span
  m="2659420">I'm</span> <span m="2659630">claiming</span> <span
  m="2660080">that</span> <span m="2660260">this</span> <span
  m="2660590">is</span> <span m="2660800">the</span> <span
  m="2660920">pseudo</span> <span m="2661430">inverse.</span> <span
  m="2663170">Whatever.</span> <span m="2665420">Whatever</span> <span
  m="2665990">these</span> <span m="2666210">spaces.</span> <span
  m="2666880">The</span> <span m="2666980">rank</span> <span
  m="2667290">could</span> <span m="2667490">be</span> <span
  m="2667670">tiny,</span> <span m="2668240">just</span> <span
  m="2669310">one.</span> <span m="2670580">This</span> <span
  m="2671360">works</span> <span m="2671960">when</span> <span
  m="2672230">the</span> <span m="2672350">rank</span> <span
  m="2672950">is</span> <span m="2674540">n.</span> <span m="2676190">I</span>
  <span m="2676430">needed</span> <span m="2676880">independent</span> <span
  m="2677450">columns.</span></p><p><span m="2678440">So</span> <span
  m="2678590">when</span> <span m="2678800">the</span> <span
  m="2678890">rank</span> <span m="2679310">is</span> <span
  m="2679580">n--</span> <span m="2680240">so</span> <span
  m="2680450">this</span> <span m="2680660">is</span> <span
  m="2682830">rank</span> <span m="2683280">equal</span> <span
  m="2683580">n.</span> <span m="2684470">That</span> <span
  m="2685470">Gauss</span> <span m="2685890">worked.</span> <span
  m="2686930">Then</span> <span m="2687330">I</span> <span
  m="2687450">can</span> <span m="2687660">get</span> <span
  m="2687870">a--</span> <span m="2688290">then</span> <span
  m="2688500">it's</span> <span m="2688680">a</span> <span
  m="2688740">one-sided</span> <span m="2689520">inverse,</span> <span
  m="2690030">but</span> <span m="2690270">it's</span> <span
  m="2691110">not</span> <span m="2691500">a</span> <span
  m="2691560">two-sided</span> <span m="2692320">inverse.</span> <span
  m="2692730">I</span> <span m="2692820">can't</span> <span
  m="2693090">do</span> <span m="2693300">it.</span> <span
  m="2694010">Look,</span> <span m="2694350">my</span> <span
  m="2694560">matrix</span> <span m="2695100">there.</span> <span
  m="2695940">I</span> <span m="2696030">could</span> <span
  m="2696210">find</span> <span m="2696570">a</span> <span
  m="2696630">one-sided</span> <span m="2697380">inverse</span> <span
  m="2698760">to</span> <span m="2698940">get</span> <span
  m="2699210">the</span> <span m="2699330">2</span> <span m="2699570">by</span>
  <span m="2699780">2</span> <span m="2700050">identity.</span> <span
  m="2701160">But</span> <span m="2701370">I</span> <span
  m="2701550">could</span> <span m="2701790">never</span> <span
  m="2702690">multiply</span> <span m="2703260">that</span> <span
  m="2703560">by</span> <span m="2703800">some</span> <span
  m="2704070">matrix</span> <span m="2704640">and</span> <span
  m="2704760">get</span> <span m="2705000">the</span> <span m="2705180">n</span>
  <span m="2705360">by</span> <span m="2705600">n</span> <span
  m="2705810">identity</span> <span m="2706560">out</span> <span m="2706650">of
  those</span> <span m="2707490">two</span> <span m="2707760">pathetic</span>
  <span m="2708270">columns.</span> <span m="2709520">OK.</span></p><p><span
  m="2712020">Maybe</span> <span m="2712290">you</span> <span
  m="2712380">feel</span> <span m="2712650">like</span> <span
  m="2712890">just</span> <span m="2713400">checking</span> <span
  m="2713790">this.</span> <span m="2714990">Just</span> <span
  m="2715530">takes</span> <span m="2715890">patience.</span> <span
  m="2716520">What</span> <span m="2716940">do</span> <span m="2717090">I</span>
  <span m="2717180">mean</span> <span m="2717420">by</span> <span
  m="2717630">checking</span> <span m="2718110">it?</span> <span
  m="2720870">I</span> <span m="2720970">mean</span> <span
  m="2723870">stick</span> <span m="2724230">in</span> <span
  m="2724500">the</span> <span m="2725680">pseudo</span> <span
  m="2727600">SVD.</span> <span m="2728940">Just</span> <span
  m="2729210">put</span> <span m="2729450">it</span> <span m="2729510">in</span>
  <span m="2729600">the</span> <span m="2729750">SVD</span> <span
  m="2730290">and</span> <span m="2730440">cancel</span> <span
  m="2730890">like</span> <span m="2731100">crazy.</span> <span
  m="2732780">And</span> <span m="2732880">I</span> <span
  m="2732970">think</span> <span m="2733210">that'll</span> <span
  m="2733540">pop</span> <span m="2733840">out.</span> <span
  m="2735120">Do</span> <span m="2735250">you</span> <span
  m="2735580">believe</span> <span m="2736000">me?</span> <span
  m="2738006">Because</span> <span m="2738410">it's</span> <span
  m="2738650">going</span> <span m="2738770">to</span> <span
  m="2738900">be</span> <span m="2738990">a</span> <span
  m="2739020">little</span> <span m="2739230">painful.</span> <span
  m="2740380">3</span> <span m="2741210">U</span> <span m="2742380">sigma</span>
  <span m="2742890">V</span> <span m="2743100">transpose,</span> <span
  m="2743790">all</span> <span m="2744030">transposed,</span> <span
  m="2744990">and</span> <span m="2745080">then</span> <span
  m="2745320">something</span> <span m="2745710">there</span> <span
  m="2745890">and</span> <span m="2745980">something</span> <span
  m="2746180">there.</span> <span m="2746790">I've</span> <span
  m="2746880">got</span> <span m="2747060">nine</span> <span
  m="2747600">matrices</span> <span m="2748950">multiplying</span> <span
  m="2749640">away.</span> <span m="2750690">But</span> <span
  m="2751440">it's</span> <span m="2751620">going</span> <span
  m="2751760">to--</span> <span m="2752400">all</span> <span
  m="2752520">sorts</span> <span m="2752850">of</span> <span
  m="2752910">things</span> <span m="2753270">will</span> <span
  m="2753870">produce</span> <span m="2754260">the</span> <span
  m="2754380">identity.</span> <span m="2755010">And</span> <span
  m="2755160">in</span> <span m="2755280">the</span> <span
  m="2755430">end,</span> <span m="2755640">that's</span> <span
  m="2755940">what</span> <span m="2756120">I'll</span> <span
  m="2756210">have.</span></p><p><span m="2759510">So</span> <span
  m="2760170">this</span> <span m="2762180">is</span> <span m="2763350">a</span>
  <span m="2763410">one-sided</span> <span m="2765060">true</span> <span
  m="2765600">inverse,</span> <span m="2766740">where</span> <span
  m="2767060">the</span> <span m="2767280">SVD--</span> <span
  m="2768420">this</span> <span m="2768780">fit</span> <span
  m="2769080">formula</span> <span m="2769530">is</span> <span
  m="2769710">prepared</span> <span m="2770250">to</span> <span
  m="2770430">have</span> <span m="2771120">neither</span> <span
  m="2771540">side</span> <span m="2772110">invertible.</span> <span
  m="2773960">It's</span> <span m="2774120">still--</span> <span
  m="2774600">we</span> <span m="2774810">know</span> <span
  m="2775020">what</span> <span m="2775260">sigma</span> <span
  m="2775650">plus</span> <span m="2776030">means.</span> <span
  m="2776580">Anyway.</span> <span m="2778740">So</span> <span
  m="2779490">under</span> <span m="2779850">the</span> <span
  m="2780000">assumption</span> <span m="2780690">of</span> <span
  m="2781320">independent</span> <span m="2781920">columns,</span> <span
  m="2782910">Gauss</span> <span m="2783300">works</span> <span
  m="2784170">and</span> <span m="2784350">gives</span> <span
  m="2784680">the</span> <span m="2784770">same</span> <span
  m="2785160">answer</span> <span m="2785640">as</span> <span
  m="2786330">the</span> <span m="2786480">pseudo</span> <span
  m="2786930">inverse.</span></p><p><span m="2789950">OK.</span> <span
  m="2791360">Three</span> <span m="2791660">minutes.</span> <span
  m="2794550">That's</span> <span m="2794770">hardly</span> <span
  m="2795160">time,</span> <span m="2796600">but</span> <span
  m="2798290">this</span> <span m="2798490">being</span> <span
  m="2798880">MIT,</span> <span m="2800380">I</span> <span
  m="2800770">feel</span> <span m="2801010">I</span> <span
  m="2801130">should</span> <span m="2801370">use</span> <span
  m="2801790">it.</span> <span m="2803110">Oh</span> <span m="2803320">my</span>
  <span m="2803530">god.</span></p><p><span m="2804340">Number</span> <span
  m="2804730">three.</span> <span m="2807910">So</span> <span
  m="2808040">what's</span> <span m="2808340">number</span> <span
  m="2808650">three</span> <span m="2809040">about?</span> <span
  m="2809850">Number</span> <span m="2810150">three</span> <span
  m="2815750">has</span> <span m="2815960">the</span> <span
  m="2816080">same</span> <span m="2816710">requirement</span> <span
  m="2817430">as</span> <span m="2817610">number</span> <span
  m="2817970">two,</span> <span m="2818960">the</span> <span
  m="2819050">same</span> <span m="2819440">requirement</span> <span
  m="2820130">of</span> <span m="2820250">no</span> <span
  m="2820490">null</span> <span m="2820730">space.</span> <span
  m="2822640">But</span> <span m="2822880">it</span> <span
  m="2823060">says,</span> <span m="2824440">if</span> <span
  m="2824650">I</span> <span m="2824770">could</span> <span
  m="2824980">get</span> <span m="2825230">orthogonal</span> <span
  m="2825850">columns</span> <span m="2826330">first,</span> <span
  m="2827590">then</span> <span m="2828850">this</span> <span
  m="2829120">problem</span> <span m="2829540">would</span> <span
  m="2830080">be</span> <span m="2830530">easy.</span> <span
  m="2831490">So</span> <span m="2831730">everybody</span> <span
  m="2832270">knows</span> <span m="2832720">that</span> <span
  m="2833080">Gram-Schmidt</span> <span m="2833890">is</span> <span
  m="2834070">a</span> <span m="2834130">way--</span> <span
  m="2835750">boring</span> <span m="2836440">way--</span> <span
  m="2837670">to</span> <span m="2837850">get</span> <span
  m="2840140">from</span> <span m="2841610">these</span> <span
  m="2841940">two</span> <span m="2842210">columns</span> <span
  m="2842780">to</span> <span m="2842900">get</span> <span
  m="2843140">two</span> <span m="2843590">orthogonal</span> <span
  m="2844280">columns.</span></p><p><span m="2846300">Actually,</span> <span
  m="2846870">the</span> <span m="2846990">whole</span> <span
  m="2847230">idea</span> <span m="2847530">of</span> <span
  m="2847620">Gram-Schmidt</span> <span m="2848250">is</span> <span
  m="2848400">already</span> <span m="2848760">there</span> <span
  m="2849030">for</span> <span m="2849240">2</span> <span m="2849420">by</span>
  <span m="2849630">2.</span> <span m="2849900">So</span> <span
  m="2850800">I</span> <span m="2850920">have</span> <span
  m="2851100">two</span> <span m="2851310">minutes,</span> <span
  m="2851760">and</span> <span m="2851880">we</span> <span
  m="2852000">can</span> <span m="2852180">do</span> <span
  m="2852390">it.</span> <span m="2852840">Let's</span> <span
  m="2853560">do</span> <span m="2855150">Gram-Schmidt</span> <span
  m="2856020">on</span> <span m="2856200">these</span> <span
  m="2856470">two</span> <span m="2856710">columns--</span> <span
  m="2862500">I</span> <span m="2862620">don't</span> <span
  m="2862770">want</span> <span m="2862890">to</span> <span
  m="2862950">use</span> <span m="2863190">U</span> <span m="2863400">and</span>
  <span m="2863520">V--</span> <span m="2864060">column</span> <span
  m="2865320">y</span> <span m="2865710">and</span> <span m="2865860">z.</span>
  <span m="2866970">OK.</span></p><p><span m="2868020">Suppose</span> <span
  m="2868410">I</span> <span m="2868530">want</span> <span m="2868740">to</span>
  <span m="2868830">orthogonalize</span> <span m="2869870">those</span> <span
  m="2870150">guys.</span> <span m="2870570">What's</span> <span
  m="2870900">the</span> <span m="2871020">Gram-Schmidt</span> <span
  m="2871710">idea?</span> <span m="2873190">I</span> <span
  m="2873340">take</span> <span m="2873670">y.</span> <span
  m="2874210">It's</span> <span m="2874390">perfectly</span> <span
  m="2874900">good.</span> <span m="2876160">No</span> <span
  m="2876340">problem</span> <span m="2876790">with</span> <span
  m="2876970">y.</span> <span m="2878710">There</span> <span
  m="2878890">is</span> <span m="2879020">the</span> <span m="2879130">y</span>
  <span m="2879520">vector,</span> <span m="2881110">the</span> <span
  m="2881590">all</span> <span m="2881830">1's.</span> <span
  m="2883160">Then</span> <span m="2883330">this</span> <span
  m="2883630">guy</span> <span m="2884470">is</span> <span
  m="2884710">not</span> <span m="2885250">orthogonal</span> <span
  m="2886000">probably</span> <span m="2886720">to</span> <span
  m="2886900">that.</span> <span m="2887680">It'll</span> <span
  m="2888190">go</span> <span m="2888430">off</span> <span m="2888700">in</span>
  <span m="2889570">this</span> <span m="2889780">direction,</span> <span
  m="2891030">with</span> <span m="2891280">an</span> <span
  m="2891490">angle</span> <span m="2891970">that's</span> <span
  m="2892210">not</span> <span m="2892540">90</span> <span
  m="2892900">degrees.</span></p><p><span m="2894160">So</span> <span
  m="2894340">what</span> <span m="2894580">do</span> <span m="2894730">I</span>
  <span m="2894850">do?</span> <span m="2896170">I</span> <span
  m="2896290">want</span> <span m="2896500">to</span> <span
  m="2896590">get</span> <span m="2897730">orthogonal</span> <span
  m="2898360">vectors.</span> <span m="2899680">I'm</span> <span
  m="2899860">OK</span> <span m="2900280">with</span> <span
  m="2900490">this</span> <span m="2900670">first</span> <span
  m="2901030">guy,</span> <span m="2902320">but</span> <span
  m="2902650">the</span> <span m="2902800">second</span> <span
  m="2903220">guy</span> <span m="2903520">isn't</span> <span
  m="2903880">orthogonal</span> <span m="2904510">to</span> <span
  m="2904630">the</span> <span m="2904750">first.</span> <span
  m="2905110">So</span> <span m="2905320">what</span> <span
  m="2905560">do</span> <span m="2905710">I</span> <span m="2905830">do?</span>
  <span m="2907430">How</span> <span m="2907670">do</span> <span
  m="2907850">I--</span> <span m="2908150">in</span> <span
  m="2908360">this</span> <span m="2908600">picture,</span> <span
  m="2909110">how</span> <span m="2909320">do</span> <span m="2909470">I</span>
  <span m="2909590">come</span> <span m="2909890">up</span> <span
  m="2910070">with</span> <span m="2910250">a</span> <span
  m="2910310">vector</span> <span m="2911360">orthogonal</span> <span
  m="2912050">to</span> <span m="2912230">y?</span></p><p><span
  m="2915280">Project.</span> <span m="2916900">I</span> <span
  m="2917290">take</span> <span m="2917590">this</span> <span
  m="2917860">z,</span> <span m="2918310">and</span> <span m="2918430">I</span>
  <span m="2918550">take</span> <span m="2918820">its</span> <span
  m="2919000">projection.</span> <span m="2920630">So</span> <span
  m="2920830">z</span> <span m="2921340">has</span> <span m="2921610">a</span>
  <span m="2922240">little</span> <span m="2922480">piece--</span> <span
  m="2923830">that</span> <span m="2924130">z</span> <span
  m="2924520">vector</span> <span m="2924970">has</span> <span
  m="2925180">a</span> <span m="2925870">big</span> <span
  m="2926170">piece</span> <span m="2926740">already</span> <span
  m="2927250">in</span> <span m="2927370">the</span> <span
  m="2927460">direction</span> <span m="2927910">of</span> <span
  m="2928020">y,</span> <span m="2929020">which</span> <span
  m="2929200">I</span> <span m="2929290">don't</span> <span
  m="2929530">want,</span> <span m="2930200">and</span> <span
  m="2930370">a</span> <span m="2930430">piece</span> <span
  m="2931030">orthogonal</span> <span m="2931690">to</span> <span
  m="2931900">it.</span> <span m="2932080">That's</span> <span
  m="2932440">my</span> <span m="2932680">other</span> <span
  m="2932920">piece.</span> <span m="2933970">That's</span> <span
  m="2934240">my</span> <span m="2934450">other</span> <span
  m="2934660">piece.</span> <span m="2935020">So</span> <span
  m="2935410">here's</span> <span m="2935800">y.</span> <span
  m="2936830">And</span> <span m="2936880">here's</span> <span
  m="2937430">the--</span> <span m="2940660">that</span> <span
  m="2940990">is</span> <span m="2941260">z</span> <span
  m="2941860">minus</span> <span m="2943750">projection,</span> <span
  m="2944500">let</span> <span m="2944590">me</span> <span
  m="2944740">just</span> <span m="2944950">say.</span> <span
  m="2945340">Whatever.</span> <span m="2946560">Yeah.</span></p><p><span
  m="2947200">I</span> <span m="2947290">don't</span> <span
  m="2947470">know</span> <span m="2947650">if</span> <span m="2947800">I</span>
  <span m="2947920">even</span> <span m="2948160">drew</span> <span
  m="2948370">that</span> <span m="2948550">picture</span> <span
  m="2948910">right.</span> <span m="2949300">Probably</span> <span
  m="2949660">I</span> <span m="2949780">didn't.</span> <span
  m="2950290">Anyway.</span> <span m="2951040">Whatever.</span> <span
  m="2951890">The</span> <span m="2953980">Gram-Schmidt</span> <span
  m="2954640">idea</span> <span m="2955100">is</span> <span
  m="2955270">just</span> <span m="2956140">orthogonalize</span> <span
  m="2957100">in</span> <span m="2957220">the</span> <span
  m="2957340">natural</span> <span m="2957850">way.</span> <span
  m="2958730">I'll</span> <span m="2958930">come</span> <span
  m="2959140">back</span> <span m="2959350">to</span> <span
  m="2959500">that</span> <span m="2959740">at</span> <span
  m="2959860">the</span> <span m="2959950">beginning</span> <span
  m="2960380">of</span> <span m="2960510">next</span> <span
  m="2960820">time</span> <span m="2961660">and</span> <span
  m="2962290">say</span> <span m="2962590">a</span> <span
  m="2962650">word</span> <span m="2963010">about</span> <span
  m="2964570">the</span> <span m="2964690">fourth</span> <span
  m="2965080">way.</span> <span m="2967950">So</span> <span
  m="2968160">this</span> <span m="2968400">least</span> <span
  m="2968610">squares</span> <span m="2969140">is</span> <span
  m="2970770">not</span> <span m="2971070">deep</span> <span
  m="2971400">learning.</span> <span m="2972330">It's</span> <span
  m="2972840">what</span> <span m="2973050">people</span> <span
  m="2973380">did</span> <span m="2974910">a</span> <span
  m="2975000">century</span> <span m="2975510">ago</span> <span
  m="2976350">and</span> <span m="2976530">continue</span> <span
  m="2977100">to</span> <span m="2977250">do</span> <span m="2977490">for</span>
  <span m="2977700">good</span> <span m="2977910">reason.</span> <span
  m="2978730">OK.</span> <span m="2979770">And</span> <span
  m="2980190">I'll</span> <span m="2980370">send</span> <span
  m="2980760">out</span> <span m="2981060">that</span> <span
  m="2981330">announcement</span> <span m="2982110">about</span> <span
  m="2982440">the</span> <span m="2982560">class,</span> <span
  m="2983100">and</span> <span m="2983220">you</span> <span
  m="2983370">know</span> <span m="2983580">the</span> <span
  m="2983670">homework,</span> <span m="2984270">and</span> <span
  m="2984450">you</span> <span m="2984540">know</span> <span
  m="2984840">the</span> <span m="2985020">new</span> <span
  m="2985740">due</span> <span m="2985980">date</span> <span
  m="2986310">is</span> <span m="2987000">Friday.</span> <span
  m="2988110">Good.</span> <span m="2988500">Thank</span> <span
  m="2988860">you.</span></p>
uid: a575de1117f0e13b755d03aacd93f61b
type: courses
layout: video
---
