---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>This lecture continues the focus on
  probability, which is critical for working with large sets of data. Topics
  include sample mean, expected mean, sample variance, covariance matrices,
  Chebyshev's inequality, and Markov's inequality.</p> <h2
  class="subhead">Summary</h2> <p>\(E[x] = m =\) average outcome weighted by
  probabilities<br /> \(E\) uses expected outcomes not actual sample
  outcomes.<br /> \(E[(x - m)^2] = E[x^2] - m^2\) is the variance of \(x\).</p>
  <p>Markov's inequality Prob[\(x \geq a\)] \(\leq\) mean\(/a\) (when all
  \(x\)'s \(\geq\) 0)<br /> Chebyshev's inequality Prob[|\(x\) - mean| \(\geq\)
  \(a\)] \(\leq\) variance\(/a^2\)</p> <p>Related sections in textbook: V.1,
  V.3</p> <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: nrDkb2MAwSA
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    title: Video-YouTube-Stream
    type: Video
    uid: 30f9e1c2dc58cb5a2a6824177605d80f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/nrDkb2MAwSA/default.jpg'
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 376ae66965fa4cb6c290e2d345d52b79
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: nrDkb2MAwSA
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: fc29369b6b3b2888591b40986d26d11c
  - id: nrDkb2MAwSA.srt
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-20-definitions-and-inequalities/nrDkb2MAwSA.srt
    title: 3play caption file
    type: null
    uid: 40b445dd701f5d6e15af713f7a729c1d
  - id: nrDkb2MAwSA.pdf
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-20-definitions-and-inequalities/nrDkb2MAwSA.pdf
    title: 3play pdf file
    type: null
    uid: e241472e4bb39dd6c40e2730ebc3f1fd
  - id: Caption-3Play YouTube id-SRT
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2d6bc3d311f575cad1e34addf1374578
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 43de346474f0a4dfe1f63102500038f2
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture20_300k.mp4'
    parent_uid: dc7f7372dc175f5ac98e2c85b0d4280b
    title: Video-Internet Archive-MP4
    type: Video
    uid: ffbba90ee1de5d0459077a73624355a4
inline_embed_id: 9075126lecture20definitionsandinequalities21993651
order_index: 206
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-20-definitions-and-inequalities
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-20-definitions-and-inequalities
title: 'Lecture 20: Definitions and Inequalities'
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">OpenCourseware</span> <span
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
  m="16670">MIT</span> <span m="17795">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="23170">GILBERT STRANG:</span> <span m="23302">OK,</span> <span
  m="24310">so</span> <span m="25840">basically</span> <span
  m="26290">probability</span> <span m="27080">ideas</span> <span
  m="27610">today,</span> <span m="28300">because</span> <span
  m="29020">that's</span> <span m="29380">a</span> <span m="29440">part</span>
  <span m="29830">of</span> <span m="31330">the</span> <span
  m="31510">subject,</span> <span m="32080">part</span> <span
  m="32380">of</span> <span m="34960">deep</span> <span
  m="35440">learning</span> <span m="35860">as</span> <span m="36040">we</span>
  <span m="36160">get</span> <span m="36370">there.</span> <span
  m="37300">And</span> <span m="38410">it's</span> <span
  m="38560">probably</span> <span m="38950">a</span> <span m="39040">good</span>
  <span m="39220">topic</span> <span m="39700">for</span> <span
  m="39850">the</span> <span m="40000">day</span> <span m="40240">before</span>
  <span m="40660">spring</span> <span m="41050">break,</span> <span
  m="41440">because</span> <span m="42550">lots</span> <span m="43000">of</span>
  <span m="43180">you</span> <span m="43420">will</span> <span
  m="44200">have</span> <span m="44380">seen--</span> <span m="45590">of</span>
  <span m="45640">course,</span> <span m="46150">you</span> <span
  m="46270">will</span> <span m="46510">have</span> <span m="46640">seen</span>
  <span m="47100">the</span> <span m="47360">sample</span> <span
  m="47920">mean,</span> <span m="48970">the</span> <span
  m="49150">average</span> <span m="49810">of</span> <span m="51040">the</span>
  <span m="51160">data.</span> <span m="55980">And</span> <span
  m="56520">you'll</span> <span m="56670">know</span> <span
  m="56850">about</span> <span m="57150">the</span> <span
  m="57300">expected</span> <span m="57900">mean.</span></p><p><span
  m="58400">Let</span> <span m="58590">me</span> <span m="60690">complete</span>
  <span m="61200">that.</span> <span m="64230">What's</span> <span
  m="64560">the</span> <span m="64739">expected</span> <span
  m="65370">mean?</span> <span m="67650">So</span> <span m="67860">this</span>
  <span m="68100">is</span> <span m="68280">the</span> <span
  m="68490">expectation</span> <span m="69660">of</span> <span
  m="69840">the</span> <span m="69960">value</span> <span m="70470">x</span>
  <span m="71610">where</span> <span m="72390">we</span> <span
  m="72570">get</span> <span m="73680">x1</span> <span m="74520">with</span>
  <span m="74790">probability</span> <span m="75570">P1</span> <span
  m="77370">along</span> <span m="77850">to</span> <span m="78480">xn</span>
  <span m="78840">with</span> <span m="79080">probability</span> <span
  m="79920">Pn.</span> <span m="80670">So</span> <span m="80850">we</span> <span
  m="81000">just</span> <span m="81240">want</span> <span m="81470">to</span>
  <span m="82050">say,</span> <span m="82450">what's</span> <span
  m="82680">our</span> <span m="82890">average</span> <span
  m="85350">output--</span> <span m="86250">average</span> <span
  m="86730">outcome?</span> <span m="88500">And</span> <span m="88650">we</span>
  <span m="88860">weight</span> <span m="89180">it</span> <span
  m="89370">by</span> <span m="89580">their</span> <span
  m="89700">probabilities.</span> <span m="91150">So</span> <span
  m="91320">it's</span> <span m="92150">P1</span> <span m="92910">x1</span>
  <span m="94440">plus</span> <span m="95130">so</span> <span
  m="95475">on</span> <span m="95820">plus</span> <span m="97050">Pn</span>
  <span m="97650">xn.</span> <span m="99240">So</span> <span
  m="99420">that's</span> <span m="99690">the</span> <span
  m="99780">expected</span> <span m="100380">value</span> <span
  m="100800">of</span> <span m="100950">x.</span></p><p><span
  m="105920">Are</span> <span m="106080">you</span> <span
  m="106200">comfortable</span> <span m="106710">with</span> <span
  m="106950">that</span> <span m="107220">symbol</span> <span
  m="107850">E?</span> <span m="108330">Because</span> <span
  m="108750">that's</span> <span m="109140">like</span> <span
  m="109470">everywhere.</span> <span m="110100">It</span> <span
  m="110220">gives</span> <span m="110550">a</span> <span
  m="111000">handy</span> <span m="111510">shorthand.</span></p><p><span
  m="112530">For</span> <span m="112710">example,</span> <span
  m="113190">the</span> <span m="113340">variance</span> <span
  m="114720">is</span> <span m="115050">the</span> <span
  m="115260">expected</span> <span m="115920">value</span> <span
  m="116490">of</span> <span m="116950">what?</span> <span m="121820">The</span>
  <span m="121910">variance</span> <span m="122580">is</span> <span
  m="122760">an</span> <span m="122870">expected</span> <span
  m="123590">value</span> <span m="124580">based</span> <span
  m="125000">on</span> <span m="125180">these</span> <span
  m="125480">probabilities</span> <span m="127010">of</span> <span
  m="127970">the</span> <span m="128120">square</span> <span
  m="129050">of</span> <span m="129169">the</span> <span
  m="129289">distance.</span> <span m="129830">So</span> <span
  m="130130">everybody</span> <span m="130580">remembers</span> <span
  m="131240">it</span> <span m="131660">involves</span> <span
  m="132200">square.</span> <span m="133700">And</span> <span
  m="133940">it's</span> <span m="134170">the</span> <span
  m="134270">distance</span> <span m="134990">from</span> <span
  m="135440">the</span> <span m="135590">mean.</span></p><p><span
  m="139460">Let</span> <span m="139610">me</span> <span m="139760">call</span>
  <span m="140090">this,</span> <span m="140400">say,</span> <span
  m="140860">m,</span> <span m="141560">maybe,</span> <span
  m="142070">just</span> <span m="142370">to</span> <span m="142490">have</span>
  <span m="142820">a</span> <span m="143330">smaller</span> <span
  m="143930">letter.</span> <span m="145640">So</span> <span
  m="145880">it's</span> <span m="146070">the</span> <span
  m="146180">distance</span> <span m="146750">from</span> <span
  m="147080">the</span> <span m="147200">mean</span> <span
  m="147740">minus</span> <span m="148380">m.</span> <span
  m="149680">It's</span> <span m="150180">the</span> <span
  m="150680">expected</span> <span m="151250">value,</span> <span
  m="152010">the</span> <span m="152060">average</span> <span
  m="152660">value</span> <span m="153620">of</span> <span m="154100">x</span>
  <span m="154430">minus</span> <span m="154910">m</span> <span
  m="155600">squared.</span></p><p><span m="157040">And</span> <span
  m="157220">in</span> <span m="157370">general,</span> <span
  m="157880">of</span> <span m="158030">course,</span> <span
  m="159100">the</span> <span m="159350">expected--</span> <span
  m="160700">this</span> <span m="161060">covariance</span> <span
  m="161960">matrix</span> <span m="162620">I</span> <span
  m="162770">could</span> <span m="163430">express</span> <span
  m="164090">with</span> <span m="164360">that</span> <span m="164660">E</span>
  <span m="165050">notation.</span> <span m="166070">But</span> <span
  m="166280">let</span> <span m="166430">me</span> <span m="166550">just</span>
  <span m="166880">stretch</span> <span m="167330">it</span> <span
  m="167480">as</span> <span m="167630">far</span> <span m="167960">as</span>
  <span m="169270">what</span> <span m="169620">would</span> <span
  m="169850">be</span> <span m="170120">the</span> <span
  m="170300">expected</span> <span m="170990">value</span> <span
  m="171860">of</span> <span m="172100">any</span> <span
  m="172490">function</span> <span m="173150">of</span> <span
  m="173270">x?</span></p><p><span m="176590">Well,</span> <span
  m="177430">we've</span> <span m="177640">got</span> <span m="177850">n</span>
  <span m="178120">possible</span> <span m="178660">outputs,</span> <span
  m="179910">x1</span> <span m="180370">to</span> <span m="180530">xn.</span>
  <span m="182170">We</span> <span m="182320">look</span> <span
  m="182560">at</span> <span m="182680">f</span> <span m="183060">of</span>
  <span m="183820">x1</span> <span m="184570">up</span> <span
  m="184720">to</span> <span m="185080">f</span> <span m="185290">of</span>
  <span m="185440">xn.</span> <span m="186700">We</span> <span
  m="186910">weight</span> <span m="187240">those</span> <span
  m="187600">by</span> <span m="187840">the</span> <span
  m="187990">probabilities</span> <span m="189070">that</span> <span
  m="189310">they</span> <span m="189520">happen.</span></p><p><span
  m="190510">So</span> <span m="190750">this</span> <span
  m="190990">would</span> <span m="191230">be--</span> <span
  m="192370">let</span> <span m="192430">me</span> <span m="192580">make</span>
  <span m="192820">just</span> <span m="193120">a</span> <span
  m="193180">little</span> <span m="193450">corner</span> <span
  m="193960">for</span> <span m="194140">this</span> <span m="195100">E</span>
  <span m="195460">letter--</span> <span m="196450">so</span> <span
  m="196660">this</span> <span m="196930">would</span> <span
  m="197140">be</span> <span m="199130">the</span> <span
  m="199210">probability</span> <span m="200140">that</span> <span
  m="200380">that</span> <span m="200770">is</span> <span m="201370">f</span>
  <span m="201535">of</span> <span m="201700">x1</span> <span
  m="204590">times</span> <span m="206090">the</span> <span
  m="206210">value</span> <span m="206630">of</span> <span m="207590">f</span>
  <span m="207870">of</span> <span m="208060">x1.</span> <span
  m="209160">So</span> <span m="209240">this</span> <span m="209480">is</span>
  <span m="210620">the</span> <span m="211010">contribution</span> <span
  m="211970">from</span> <span m="212270">the</span> <span m="212420">x1</span>
  <span m="213050">possibility.</span></p><p><span m="214340">And</span> <span
  m="214520">now,</span> <span m="214970">we</span> <span
  m="215330">include</span> <span m="215780">them</span> <span
  m="216020">all.</span> <span m="216860">So</span> <span m="217130">it</span>
  <span m="217205">will</span> <span m="217280">be</span> <span
  m="219110">output</span> <span m="219680">f</span> <span m="219890">of</span>
  <span m="220040">xn</span> <span m="221270">with</span> <span
  m="221480">probability</span> <span m="222320">Pn.</span> <span
  m="224720">And</span> <span m="224960">if</span> <span m="225110">that</span>
  <span m="225380">f</span> <span m="225530">of</span> <span m="225680">x</span>
  <span m="226190">is</span> <span m="227060">x</span> <span
  m="227300">minus</span> <span m="227720">m</span> <span
  m="227930">squared,</span> <span m="228920">then</span> <span
  m="229850">we</span> <span m="230030">get</span> <span m="230630">what</span>
  <span m="230840">we</span> <span m="231050">expect.</span> <span
  m="231600">And</span> <span m="231710">let</span> <span m="231860">me</span>
  <span m="232820">remember</span> <span m="233330">that.</span></p><p><span
  m="234830">So</span> <span m="235070">I</span> <span m="235430">just</span>
  <span m="235640">want</span> <span m="235820">to</span> <span
  m="235880">keep</span> <span m="236150">going</span> <span
  m="236600">with</span> <span m="237350">variance.</span> <span
  m="241660">So</span> <span m="241900">it's</span> <span m="242260">the</span>
  <span m="242530">sum.</span> <span m="243220">It's</span> <span
  m="243520">the</span> <span m="243640">first</span> <span
  m="244150">probability</span> <span m="245530">times</span> <span
  m="246150">the</span> <span m="246310">first</span> <span
  m="246760">output</span> <span m="247300">minus</span> <span
  m="247930">the</span> <span m="248050">mean</span> <span
  m="249280">squared</span> <span m="252840">the</span> <span
  m="253130">last</span> <span m="253620">probability</span> <span
  m="254940">times</span> <span m="255310">that</span> <span
  m="255480">last</span> <span m="255990">output</span> <span
  m="256500">xn</span> <span m="257730">minus</span> <span m="258209">m</span>
  <span m="258570">squared.</span></p><p><span m="259800">And</span> <span
  m="259950">everybody</span> <span m="260430">should</span> <span
  m="260640">know</span> <span m="261260">a</span> <span
  m="261360">second</span> <span m="262590">expression,</span> <span
  m="263310">a</span> <span m="263370">second</span> <span
  m="263760">way,</span> <span m="264030">to</span> <span m="264660">do</span>
  <span m="264930">that</span> <span m="265620">the</span> <span
  m="265740">sum.</span> <span m="267600">If</span> <span m="267780">I</span>
  <span m="267870">just</span> <span m="268590">write</span> <span
  m="268980">out</span> <span m="269160">those</span> <span
  m="269430">squares</span> <span m="271200">and</span> <span
  m="271590">combine</span> <span m="272100">them</span> <span
  m="272280">a</span> <span m="272340">little</span> <span
  m="272610">differently,</span> <span m="273400">I</span> <span
  m="273450">get</span> <span m="273630">a</span> <span m="273720">second</span>
  <span m="274560">expression</span> <span m="275190">which</span> <span
  m="275490">is</span> <span m="276360">really</span> <span
  m="276630">useful,</span> <span m="278320">often</span> <span
  m="279070">a</span> <span m="279130">little</span> <span
  m="279400">faster</span> <span m="279970">to</span> <span
  m="280060">compute.</span> <span m="280600">So</span> <span
  m="280890">can</span> <span m="281140">I</span> <span m="281260">just</span>
  <span m="281500">do</span> <span m="281710">that?</span></p><p><span
  m="282910">So</span> <span m="283130">that's</span> <span m="285010">x1</span>
  <span m="285280">squared</span> <span m="286270">minus</span> <span
  m="286720">2</span> <span m="287532">x1</span> <span m="288250">m1</span>
  <span m="289480">plus</span> <span m="289960">m1</span> <span
  m="290410">squared.</span> <span m="292480">And</span> <span
  m="292630">then</span> <span m="293590">same</span> <span
  m="293920">thing</span> <span m="294130">here,</span> <span
  m="294530">Pn</span> <span m="295570">times</span> <span m="296200">xn</span>
  <span m="296740">squared</span> <span m="297850">minus</span> <span
  m="298240">2xn</span> <span m="299320">m</span> <span m="300280">plus</span>
  <span m="300850">m</span> <span m="301120">squared.</span> <span
  m="303590">Good</span> <span m="303830">with</span> <span
  m="303990">that?</span></p><p><span m="305662">AUDIENCE:</span> <span
  m="305909">On</span> <span m="306156">that</span> <span
  m="306403">m--</span></p><p><span m="307638">GILBERT STRANG:</span> <span
  m="307885">Sorry?</span></p><p><span m="308626">AUDIENCE:</span> <span
  m="308873">On</span> <span m="309120">that</span> <span
  m="309614">m--</span></p><p><span m="311100">GILBERT STRANG:</span> <span
  m="311257">Plus</span> <span m="311730">n,</span> <span m="312410">oh,</span>
  <span m="312670">sorry.</span> <span m="313730">No,</span> <span
  m="314070">I</span> <span m="314140">mean--</span> <span m="314735">am</span>
  <span m="315150">I--</span></p><p><span m="315965">AUDIENCE:</span> <span
  m="316192">So</span> <span m="316420">for</span> <span m="316875">P1</span>
  <span m="317330">it's</span> <span m="317785">x1</span> <span
  m="318240">squared</span> <span m="318695">minus--</span></p><p><span
  m="320520">GILBERT STRANG:</span> <span m="320685">Oh,</span> <span
  m="320850">it's</span> <span m="321030">just</span> <span m="321370">an</span>
  <span m="321490">m.</span> <span m="322010">Correct.</span> <span
  m="322650">Thank</span> <span m="322980">you.</span> <span
  m="323850">Thank</span> <span m="324060">you.</span> <span
  m="324270">Just</span> <span m="324540">an</span> <span m="324730">m.</span>
  <span m="325320">Good.</span> <span m="326670">OK.</span></p><p><span
  m="327150">Can</span> <span m="327390">we</span> <span m="329070">take</span>
  <span m="329370">that</span> <span m="329610">sum?</span> <span
  m="331270">So</span> <span m="331930">I</span> <span m="332110">get</span>
  <span m="333940">P1</span> <span m="334390">x1</span> <span
  m="335020">squared</span> <span m="336730">if</span> <span m="336880">I</span>
  <span m="337000">take</span> <span m="337300">these,</span> <span
  m="337870">the</span> <span m="337990">first</span> <span
  m="338380">guys.</span> <span m="343280">So</span> <span
  m="343490">I've</span> <span m="343670">accounted</span> <span
  m="344150">for</span> <span m="344930">this</span> <span m="346190">and</span>
  <span m="346730">this.</span> <span m="347990">Now,</span> <span
  m="348320">I'll</span> <span m="348470">take</span> <span
  m="348770">minus</span> <span m="349280">2</span> <span m="351248">P1</span>
  <span m="352400">x1</span> <span m="353210">m.</span> <span
  m="354680">So</span> <span m="355730">P1</span> <span m="356690">x1</span>
  <span m="357590">m</span> <span m="358700">plus</span> <span
  m="361200">Pn</span> <span m="365280">xn</span> <span m="366150">m.</span>
  <span m="370330">I'm</span> <span m="370460">just</span> <span
  m="370640">writing</span> <span m="371030">it</span> <span
  m="371150">all</span> <span m="371390">out,</span> <span m="371660">and</span>
  <span m="371810">I'm</span> <span m="371990">going</span> <span
  m="372080">to</span> <span m="372200">recombine</span> <span
  m="372920">it.</span></p><p><span m="373070">So</span> <span
  m="373250">now,</span> <span m="373490">I</span> <span m="373580">have</span>
  <span m="374100">P1</span> <span m="374705">m</span> <span
  m="375410">squared</span> <span m="376310">plus</span> <span
  m="376700">P2</span> <span m="377480">m</span> <span m="377720">squared</span>
  <span m="378230">plus</span> <span m="378550">Pn</span> <span
  m="379220">m</span> <span m="379490">squared.</span> <span
  m="380100">So</span> <span m="380210">what</span> <span m="380420">do</span>
  <span m="380540">I</span> <span m="380660">have</span> <span
  m="381410">from</span> <span m="382100">the</span> <span m="383690">P1</span>
  <span m="384800">m</span> <span m="385070">squared</span> <span
  m="386640">all</span> <span m="386750">the</span> <span m="386840">way</span>
  <span m="387020">up</span> <span m="387200">to</span> <span
  m="387380">Pn</span> <span m="389000">m</span> <span
  m="389240">squared?</span> <span m="391700">Are</span> <span
  m="391790">you</span> <span m="391910">with</span> <span m="392120">me?</span>
  <span m="393110">So</span> <span m="393350">m</span> <span
  m="393590">squared</span> <span m="394310">is</span> <span
  m="396140">in</span> <span m="396230">every</span> <span
  m="396530">term.</span> <span m="397190">So</span> <span m="397430">I'm</span>
  <span m="397550">going</span> <span m="397670">to</span> <span
  m="397760">have</span> <span m="397910">an</span> <span m="398000">m</span>
  <span m="398180">squared.</span></p><p><span m="400340">And</span> <span
  m="400700">what's</span> <span m="401030">it</span> <span
  m="401120">multiplied</span> <span m="401650">by?</span> <span
  m="403010">P1</span> <span m="404060">here,</span> <span m="405140">P2</span>
  <span m="405740">here,</span> <span m="406640">Pn</span> <span
  m="407210">here.</span> <span m="407780">I</span> <span m="407990">add</span>
  <span m="408170">those</span> <span m="408470">up</span> <span
  m="408620">and</span> <span m="408770">I</span> <span
  m="408890">get?</span></p><p><span m="409655">AUDIENCE:</span> <span
  m="409857">1.</span></p><p><span m="410060">GILBERT STRANG:</span> <span
  m="410240">1.</span> <span m="410690">So</span> <span m="411020">that's</span>
  <span m="411320">it.</span> <span m="412020">OK,</span> <span
  m="412520">now,</span> <span m="412760">I'll</span> <span
  m="412880">just</span> <span m="413660">simplify</span> <span
  m="414290">this</span> <span m="415160">thing.</span> <span
  m="415670">So</span> <span m="415850">this</span> <span m="416090">is</span>
  <span m="416270">really</span> <span m="417350">the</span> <span
  m="417500">expected</span> <span m="418310">value</span> <span
  m="418820">of</span> <span m="419000">what?</span> <span
  m="420920">What</span> <span m="420995">am</span> <span m="421070">I</span>
  <span m="421190">seeing</span> <span m="421640">in</span> <span
  m="422810">this</span> <span m="423860">term?</span></p><p><span
  m="424596">AUDIENCE:</span> <span m="424769">x</span> <span
  m="424942">squared.</span></p><p><span m="425290">GILBERT STRANG:</span> <span
  m="425495">The</span> <span m="427070">expected</span> <span
  m="427670">value</span> <span m="428000">of</span> <span m="428120">x</span>
  <span m="428300">squared,</span> <span m="428780">right.</span> <span
  m="431880">Different</span> <span m="432330">from</span> <span
  m="433350">the</span> <span m="433470">expected</span> <span
  m="434010">value</span> <span m="434370">of</span> <span m="434490">x</span>
  <span m="434730">minus</span> <span m="435090">m</span> <span
  m="435270">squared,</span> <span m="435750">of</span> <span
  m="435810">course.</span> <span m="437620">This</span> <span
  m="437760">is</span> <span m="437850">just</span> <span m="438170">a</span>
  <span m="438240">first</span> <span m="438630">term</span> <span
  m="439110">from</span> <span m="439350">here.</span></p><p><span
  m="440010">But,</span> <span m="440190">now,</span> <span
  m="440430">what</span> <span m="440580">do</span> <span m="440730">I</span>
  <span m="440820">get</span> <span m="441000">for</span> <span
  m="441210">this</span> <span m="441380">second</span> <span
  m="441900">term?</span> <span m="442590">Well,</span> <span
  m="442800">the</span> <span m="442920">point</span> <span m="443310">is</span>
  <span m="443520">that</span> <span m="443700">m</span> <span
  m="444030">comes</span> <span m="444450">out.</span> <span
  m="445290">So</span> <span m="445650">this</span> <span m="445840">is</span>
  <span m="445980">minus</span> <span m="446325">an</span> <span
  m="446850">m</span> <span m="447270">and</span> <span m="447690">a</span>
  <span m="448110">2.</span></p><p><span m="449490">And</span> <span
  m="449820">what</span> <span m="450460">do</span> <span m="450630">I</span>
  <span m="450780">have</span> <span m="451530">left?</span> <span
  m="451990">So</span> <span m="452100">I've</span> <span m="452370">used</span>
  <span m="452760">up</span> <span m="452910">the</span> <span
  m="453090">m.</span> <span m="453960">I've</span> <span m="454080">used</span>
  <span m="454380">up</span> <span m="454530">the</span> <span
  m="454680">2.</span> <span m="455880">P1</span> <span m="456400">x1</span>
  <span m="456870">dot</span> <span m="457305">dot</span> <span
  m="457522">dot</span> <span m="457740">Pn</span> <span m="458190">xn,</span>
  <span m="458640">what's</span> <span m="458970">that?</span> <span
  m="461790">Everybody</span> <span m="462240">should</span> <span
  m="462750">just</span> <span m="463380">pay</span> <span
  m="463590">attention</span> <span m="464040">to</span> <span
  m="464130">this.</span> <span m="464900">Trivial,</span> <span
  m="465540">I</span> <span m="465630">mean,</span> <span
  m="465840">we're</span> <span m="466020">just</span> <span
  m="466260">doing</span> <span m="466710">high</span> <span
  m="466920">school</span> <span m="467220">algebra</span> <span
  m="467700">here.</span> <span m="469300">But</span> <span m="469810">P1</span>
  <span m="470430">x1</span> <span m="470700">up</span> <span
  m="470820">to</span> <span m="470940">Pn</span> <span m="471420">xn</span>
  <span m="471930">is</span> <span m="472230">m.</span></p><p><span
  m="473010">So</span> <span m="473220">I</span> <span m="473280">have</span>
  <span m="473430">another</span> <span m="473790">m,</span> <span
  m="474640">m</span> <span m="475620">squared</span> <span
  m="476130">there.</span> <span m="476960">And</span> <span m="477120">I</span>
  <span m="477150">have</span> <span m="477270">a</span> <span
  m="477330">plus</span> <span m="477720">m</span> <span
  m="477900">squared</span> <span m="479940">from</span> <span
  m="480150">the</span> <span m="480330">n.</span> <span m="481680">So</span>
  <span m="481890">you</span> <span m="482070">see</span> <span
  m="482640">that</span> <span m="482920">it</span> <span m="484140">is</span>
  <span m="484290">another</span> <span m="484740">expression,</span> <span
  m="485610">the</span> <span m="486000">expected</span> <span
  m="486570">value</span> <span m="486900">of</span> <span m="487050">x</span>
  <span m="487230">squared</span> <span m="488790">minus</span> <span
  m="489510">m</span> <span m="489750">squared.</span> <span
  m="491361">It's</span> <span m="491790">just</span> <span
  m="492120">algebra.</span></p><p><span m="494050">That</span> <span
  m="494400">is</span> <span m="494580">the</span> <span m="494700">same</span>
  <span m="495270">as</span> <span m="496620">this.</span> <span
  m="499560">So</span> <span m="499800">that</span> <span m="499950">if</span>
  <span m="500070">you</span> <span m="500220">happen</span> <span
  m="500580">to</span> <span m="500700">have</span> <span m="501000">a</span>
  <span m="501090">handy</span> <span m="501600">way</span> <span
  m="501870">to</span> <span m="501990">compute</span> <span
  m="502800">the</span> <span m="502890">expected</span> <span
  m="503430">value</span> <span m="503700">of</span> <span m="503820">x</span>
  <span m="504030">squared,</span> <span m="504930">you</span> <span
  m="505020">would</span> <span m="505200">just</span> <span
  m="505410">subtract</span> <span m="505980">m</span> <span
  m="506160">squared.</span> <span m="506610">And</span> <span
  m="506760">you'd</span> <span m="506940">have</span> <span
  m="508020">the</span> <span m="508560">same</span> <span m="508980">as</span>
  <span m="509130">this.</span> <span m="509710">Yeah,</span> <span
  m="510120">it's</span> <span m="510720">just</span> <span
  m="511050">algebra.</span></p><p><span m="512580">OK,</span> <span
  m="514780">let's</span> <span m="515070">go</span> <span m="515400">a</span>
  <span m="515460">little</span> <span m="515760">deeper</span> <span
  m="516390">with</span> <span m="516990">something</span> <span
  m="517820">here--</span> <span m="519880">if</span> <span m="519929">I</span>
  <span m="520020">can</span> <span m="520230">find</span> <span
  m="520650">it.</span> <span m="522140">There</span> <span
  m="522289">are</span> <span m="522320">two</span> <span
  m="522830">great</span> <span m="523460">inequalities</span> <span
  m="524510">in</span> <span m="525110">statistics.</span> <span
  m="526640">And</span> <span m="526760">the</span> <span
  m="526850">first</span> <span m="527240">one</span> <span m="527450">is</span>
  <span m="527630">due</span> <span m="527870">to</span> <span
  m="527990">Markov.</span> <span m="529580">And</span> <span
  m="530000">I</span> <span m="530120">don't</span> <span m="530300">know</span>
  <span m="530420">if</span> <span m="530540">you</span> <span
  m="530690">know</span> <span m="531200">Markov's</span> <span
  m="532500">inequality.</span> <span m="535940">It</span> <span
  m="536480">comes</span> <span m="536840">out</span> <span
  m="537050">easily,</span> <span m="538790">in</span> <span
  m="538850">fact,</span> <span m="539300">too</span> <span
  m="539600">easily.</span></p><p><span m="542180">I'm</span> <span
  m="542330">kind</span> <span m="542570">of</span> <span
  m="542690">happy</span> <span m="543930">to</span> <span
  m="544730">discuss</span> <span m="545105">him.</span> <span
  m="546140">And</span> <span m="547030">now</span> <span m="547250">I've</span>
  <span m="547490">jumped</span> <span m="547820">to</span> <span
  m="548990">Section</span> <span m="549740">5</span> <span m="550190">of</span>
  <span m="550370">the</span> <span m="550490">book.</span> <span
  m="551570">So</span> <span m="551750">I'll</span> <span m="551870">need</span>
  <span m="552140">to</span> <span m="552740">post</span> <span
  m="554990">Section</span> <span m="555440">5,</span> <span
  m="555950">which</span> <span m="556190">is</span> <span
  m="556340">probability</span> <span m="557150">and</span> <span
  m="557270">statistics.</span> <span m="558770">And</span> <span
  m="559220">you'll</span> <span m="559490">see</span> <span
  m="560120">this</span> <span m="560570">Markov</span> <span
  m="561230">inequality.</span></p><p><span m="562550">So</span> <span
  m="562730">it</span> <span m="562820">just</span> <span
  m="563120">involves</span> <span m="563630">this</span> <span
  m="563840">stuff.</span> <span m="564360">So</span> <span
  m="564560">that's</span> <span m="564890">why</span> <span
  m="567200">I'll</span> <span m="567320">go</span> <span m="567500">do</span>
  <span m="567680">it</span> <span m="567760">now.</span> <span
  m="568910">Markov's</span> <span m="569700">inequality.</span></p><p><span
  m="575550">He</span> <span m="575730">was</span> <span m="575970">a</span>
  <span m="576060">great</span> <span m="576990">Russian</span> <span
  m="577380">mathematician,</span> <span m="578870">oh,</span> <span
  m="579150">probably</span> <span m="580050">about</span> <span
  m="580290">1900.</span> <span m="581940">And</span> <span m="583020">we</span>
  <span m="583320">will</span> <span m="583530">see</span> <span
  m="583920">Markov</span> <span m="584610">chains</span> <span
  m="585360">and</span> <span m="585450">Markov</span> <span
  m="585960">processes,</span> <span m="586740">that's</span> <span
  m="587550">beautiful</span> <span m="588060">linear</span> <span
  m="588450">algebra.</span> <span m="589350">But</span> <span
  m="589500">this</span> <span m="590010">little</span> <span
  m="590370">inequality</span> <span m="591180">is</span> <span
  m="591330">not</span> <span m="591600">matrices.</span> <span
  m="592460">It's</span> <span m="592560">just</span> <span
  m="593640">playing</span> <span m="594060">with</span> <span
  m="594300">these.</span></p><p><span m="595740">And</span> <span
  m="597050">it</span> <span m="597180">applies</span> <span
  m="597810">to</span> <span m="602800">non-negative</span> <span
  m="603850">events.</span> <span m="608200">So</span> <span m="608500">shall
  I</span> <span m="608590">say</span> <span m="608830">applies</span> <span
  m="609400">when</span> <span m="612850">all</span> <span m="613330">the</span>
  <span m="614530">x,</span> <span m="615190">all</span> <span
  m="615310">the</span> <span m="615460">outputs,</span> <span
  m="616360">are</span> <span m="616510">greater</span> <span
  m="616650">than</span> <span m="616790">or</span> <span
  m="616930">equal</span> <span m="617095">to</span> <span
  m="617260">zero.</span> <span m="621670">So</span> <span m="621860">I'm</span>
  <span m="622770">going</span> <span m="622910">to</span> <span
  m="623020">use</span> <span m="623410">that</span> <span
  m="624130">fact.</span></p><p><span m="624590">So</span> <span
  m="624670">it</span> <span m="624730">doesn't</span> <span
  m="625060">apply</span> <span m="625450">to</span> <span
  m="627090">something</span> <span m="627570">like</span> <span
  m="629565">a</span> <span m="630390">Gaussian,</span> <span
  m="632020">because</span> <span m="632220">there,</span> <span
  m="632410">the</span> <span m="632480">Gaussian,</span> <span
  m="633130">the</span> <span m="633310">outputs</span> <span
  m="633970">go</span> <span m="634210">all</span> <span m="634330">the</span>
  <span m="634390">way</span> <span m="634570">from</span> <span
  m="634750">minus</span> <span m="635170">infinity</span> <span
  m="635680">to</span> <span m="635830">infinity.</span> <span
  m="637060">It</span> <span m="637180">does</span> <span
  m="637540">apply</span> <span m="638050">to</span> <span m="638980">a</span>
  <span m="639040">lot</span> <span m="639310">of</span> <span
  m="639520">important</span> <span m="640000">ones</span> <span
  m="640750">and</span> <span m="642460">simple</span> <span
  m="642850">ones.</span></p><p><span m="645180">I'll</span> <span
  m="645790">give</span> <span m="645990">you</span> <span m="646040">the</span>
  <span m="646160">proof</span> <span m="646480">for</span> <span
  m="647710">this</span> <span m="648760">finite</span> <span
  m="649480">probability.</span> <span m="651440">And</span> <span
  m="652110">there</span> <span m="652250">will</span> <span
  m="652370">be</span> <span m="652520">a</span> <span m="652580">similar</span>
  <span m="653060">proof,</span> <span m="653810">similar</span> <span
  m="654260">discussion</span> <span m="654920">everywhere</span> <span
  m="655490">here</span> <span m="656210">for</span> <span
  m="656480">continuous</span> <span m="657290">probability.</span></p><p><span
  m="658220">So</span> <span m="658370">what</span> <span m="658550">does</span>
  <span m="658730">Markov</span> <span m="659300">say?</span> <span
  m="660500">Let</span> <span m="660680">me</span> <span m="661160">be</span>
  <span m="661340">sure</span> <span m="661550">I</span> <span
  m="661670">get</span> <span m="661850">it</span> <span
  m="661940">right,</span> <span m="662460">because</span> <span
  m="662630">I'm</span> <span m="663410">not</span> <span m="663680">a</span>
  <span m="663740">pro</span> <span m="664160">at</span> <span
  m="664250">this.</span> <span m="666640">It's</span> <span
  m="666920">natural</span> <span m="667430">to</span> <span
  m="667490">want</span> <span m="667730">to</span> <span
  m="667820">estimate</span> <span m="668450">the</span> <span
  m="668600">probability</span> <span m="671270">that</span> <span
  m="675350">x</span> <span m="675890">is</span> <span m="676150">greater</span>
  <span m="676470">or</span> <span m="676670">equal</span> <span m="677000">to
  some</span> <span m="677300">number</span> <span m="677690">a.</span> <span
  m="679310">Get</span> <span m="679520">some</span> <span
  m="679790">idea</span> <span m="680180">of</span> <span
  m="680330">what's</span> <span m="680660">the</span> <span
  m="680750">probability</span> <span m="682070">of</span> <span
  m="682460">x</span> <span m="682850">being</span> <span
  m="683180">greater</span> <span m="683440">or</span> <span
  m="683570">equal</span> <span m="683930">to</span> <span
  m="684240">a.</span></p><p><span m="684770">So</span> <span
  m="684950">what</span> <span m="685100">do</span> <span m="685160">we</span>
  <span m="685310">know?</span> <span m="686270">This</span> <span
  m="686600">is</span> <span m="686720">certainly</span> <span
  m="687110">a</span> <span m="687170">number</span> <span
  m="687470">between</span> <span m="687920">0</span> <span
  m="688280">and</span> <span m="688400">1.</span> <span m="691390">That</span>
  <span m="691570">number</span> <span m="691840">is</span> <span
  m="691960">going</span> <span m="692080">to</span> <span m="692200">get</span>
  <span m="692380">smaller</span> <span m="692980">as</span> <span
  m="693190">a</span> <span m="693370">increases,</span> <span
  m="694180">because</span> <span m="694570">we're</span> <span
  m="694750">going</span> <span m="694840">to</span> <span m="695020">be</span>
  <span m="695230">asking</span> <span m="696910">for</span> <span
  m="697660">more.</span> <span m="698950">If</span> <span m="700030">I</span>
  <span m="700240">take</span> <span m="700630">a</span> <span
  m="700960">to</span> <span m="701110">b,</span> <span m="702130">say,</span>
  <span m="702610">twice</span> <span m="703180">the</span> <span
  m="703300">mean,</span> <span m="710620">can</span> <span m="710890">I</span>
  <span m="711370">estimate</span> <span m="711940">what</span> <span
  m="712150">that</span> <span m="712360">probability</span> <span
  m="713110">could</span> <span m="713350">be.</span> <span
  m="713590">And</span> <span m="713680">that's</span> <span
  m="713950">what</span> <span m="714100">Markov</span> <span
  m="714670">has</span> <span m="714850">done.</span></p><p><span
  m="716890">He</span> <span m="717190">says</span> <span m="717550">the</span>
  <span m="718000">probability</span> <span m="718720">of</span> <span
  m="718840">that</span> <span m="719260">is</span> <span m="720670">at</span>
  <span m="720820">least--</span> <span m="725140">at</span> <span
  m="725290">most--</span> <span m="727120">sorry.</span> <span
  m="728520">Let's</span> <span m="729010">see</span> <span m="729430">I</span>
  <span m="729700">used</span> <span m="729910">to</span> <span
  m="730030">have</span> <span m="730210">an</span> <span
  m="730330">eraser--</span> <span m="731230">at</span> <span
  m="731380">least--</span> <span m="734020">sorry,</span> <span
  m="734350">at</span> <span m="734560">most--</span> <span
  m="736030">yes,</span> <span m="737280">got</span> <span m="737540">it,</span>
  <span m="737690">got</span> <span m="738120">it--</span> <span
  m="739450">is</span> <span m="739720">less</span> <span m="740330">or</span>
  <span m="740410">equal</span> <span m="740860">to</span> <span
  m="742910">the</span> <span m="743020">mean--</span> <span m="745320">x</span>
  <span m="745650">bar</span> <span m="746340">is</span> <span
  m="746520">another</span> <span m="746850">way</span> <span
  m="747030">to</span> <span m="747120">write</span> <span m="747420">the</span>
  <span m="747540">mean--</span> <span m="748710">divided</span> <span
  m="749130">by</span> <span m="749370">a.</span> <span m="750540">And</span>
  <span m="751440">this</span> <span m="753120">is</span> <span
  m="753240">the</span> <span m="753360">mean</span> <span
  m="755760">over</span> <span m="756075">a</span> <span m="756660">or</span>
  <span m="757110">it's</span> <span m="757200">the</span> <span
  m="757290">expected</span> <span m="757950">value</span> <span
  m="758580">of</span> <span m="759180">x</span> <span m="760080">over</span>
  <span m="760410">a.</span> <span m="761040">We</span> <span
  m="761250">could</span> <span m="761460">see</span> <span
  m="761730">any</span> <span m="761970">of</span> <span m="762090">those</span>
  <span m="762990">notations.</span> <span m="764590">OK.</span></p><p><span
  m="770180">And</span> <span m="770400">as</span> <span m="770640">we</span>
  <span m="770870">expect,</span> <span m="771810">as</span> <span
  m="772080">a</span> <span m="772350">increases,</span> <span
  m="775070">the</span> <span m="775190">probability,</span> <span
  m="776180">this</span> <span m="776810">number,</span> <span
  m="777170">goes</span> <span m="777470">down,</span> <span
  m="777800">the</span> <span m="777890">probability</span> <span
  m="778580">goes</span> <span m="778910">down</span> <span m="779860">of</span>
  <span m="780080">exceeding</span> <span m="780800">a.</span> <span
  m="782150">So</span> <span m="782330">that's</span> <span m="782660">a</span>
  <span m="782750">pretty</span> <span m="783200">simple</span> <span
  m="784280">estimate</span> <span m="785750">to</span> <span
  m="785930">get</span> <span m="786190">this</span> <span
  m="786680">probability</span> <span m="787430">just</span> <span
  m="787760">in</span> <span m="787940">terms</span> <span m="788450">of</span>
  <span m="788600">the</span> <span m="789200">number</span> <span
  m="789560">a,</span> <span m="789920">which</span> <span m="790190">has</span>
  <span m="790430">to</span> <span m="790550">come</span> <span
  m="790820">in,</span> <span m="791030">because</span> <span
  m="791330">it's</span> <span m="791510">part</span> <span m="791780">of</span>
  <span m="791870">the</span> <span m="792020">question,</span> <span
  m="793010">and</span> <span m="793280">the</span> <span
  m="793670">mean,</span> <span m="794330">x.</span></p><p><span
  m="795150">So</span> <span m="796220">let</span> <span m="796400">me</span>
  <span m="796550">take</span> <span m="796880">an</span> <span
  m="797000">example</span> <span m="798200">as</span> <span m="799130">a</span>
  <span m="799620">equals</span> <span m="799820">3.</span> <span
  m="806700">For</span> <span m="806910">example,</span> <span
  m="807390">suppose</span> <span m="807930">a</span> <span
  m="808110">with</span> <span m="808350">3.</span> <span m="809490">I</span>
  <span m="809610">want</span> <span m="809820">to</span> <span
  m="809910">show</span> <span m="810210">that</span> <span
  m="810450">the</span> <span m="810540">probability</span> <span
  m="811320">of</span> <span m="811470">x</span> <span m="813880">being</span>
  <span m="815110">greater</span> <span m="815620">than</span> <span
  m="815950">or</span> <span m="816070">equal</span> <span m="816370">to</span>
  <span m="817180">3.</span> <span m="818030">Yeah,</span> <span
  m="818530">OK.</span> <span m="822550">We</span> <span m="822700">don't</span>
  <span m="822850">have</span> <span m="823010">many</span> <span
  m="823240">facts</span> <span m="823540">to</span> <span
  m="823660">work</span> <span m="823960">with.</span> <span
  m="824420">So</span> <span m="825040">if</span> <span m="825190">we</span>
  <span m="825340">write</span> <span m="825580">those</span> <span
  m="825880">down,</span> <span m="826210">we</span> <span
  m="826390">should</span> <span m="826810">see</span> <span
  m="827140">the</span> <span m="827290">reason.</span></p><p><span
  m="830020">So</span> <span m="830260">I</span> <span m="830380">know</span>
  <span m="830710">that</span> <span m="830940">the</span> <span
  m="831060">mean</span> <span m="831640">is</span> <span m="832570">E</span>
  <span m="832720">of</span> <span m="832870">x.</span> <span
  m="834430">So</span> <span m="834670">let's</span> <span
  m="834900">see,</span> <span m="835780">am</span> <span m="835930">I</span>
  <span m="836020">going</span> <span m="836240">to</span> <span
  m="836290">take--</span> <span m="837400">yeah,</span> <span
  m="838540">for</span> <span m="838960">example,</span> <span
  m="840760">let's</span> <span m="841060">take</span> <span
  m="841360">the</span> <span m="841510">mean</span> <span m="843190">to</span>
  <span m="843310">be</span> <span m="843550">1.</span> <span
  m="847430">So</span> <span m="847700">I'm</span> <span m="847910">going</span>
  <span m="848060">to</span> <span m="848450">imagine</span> <span
  m="848960">that</span> <span m="849110">the</span> <span
  m="849230">mean</span> <span m="849590">is</span> <span m="849740">1</span>
  <span m="851620">and</span> <span m="852080">that</span> <span
  m="853010">I'm</span> <span m="853250">asking</span> <span
  m="853910">for</span> <span m="854300">what's</span> <span
  m="854630">the</span> <span m="854780">chance</span> <span
  m="855290">that</span> <span m="855470">x</span> <span m="855800">will</span>
  <span m="855980">be</span> <span m="856820">bigger</span> <span
  m="857270">than</span> <span m="858900">3.</span> <span m="860880">And</span>
  <span m="861090">I'll</span> <span m="861240">get</span> <span
  m="861450">an</span> <span m="861600">estimate</span> <span
  m="863370">of</span> <span m="863580">1/3.</span></p><p><span
  m="864240">So</span> <span m="864480">I'm</span> <span
  m="864660">trying</span> <span m="864930">to</span> <span
  m="865050">show</span> <span m="867912">that</span> <span
  m="868780">the</span> <span m="869010">probability</span> <span
  m="872110">of</span> <span m="873560">x</span> <span m="874310">greater</span>
  <span m="874485">or</span> <span m="874660">equal</span> <span
  m="875010">3</span> <span m="876860">is</span> <span m="877160">less</span>
  <span m="877850">or</span> <span m="878000">equal</span> <span
  m="878280">to--</span> <span m="879580">the</span> <span
  m="879950">mean,</span> <span m="880400">I'm</span> <span
  m="880580">saying</span> <span m="880920">is</span> <span m="881090">1.</span>
  <span m="881730">a</span> <span m="881960">is</span> <span
  m="882170">3.</span> <span m="883100">So</span> <span m="883320">it</span>
  <span m="883390">is</span> <span m="883490">less</span> <span
  m="883910">than</span> <span m="884010">or</span> <span
  m="884110">equal</span> <span m="884120">1/3.</span></p><p><span
  m="885800">Now,</span> <span m="886550">why</span> <span m="886790">is</span>
  <span m="886910">that</span> <span m="887150">true?</span> <span
  m="888290">That's</span> <span m="888560">what</span> <span
  m="888710">I</span> <span m="888800">have</span> <span m="888980">to</span>
  <span m="889130">show.</span> <span m="891320">I</span> <span
  m="891410">think</span> <span m="891710">that</span> <span
  m="891890">if</span> <span m="892040">I</span> <span m="892190">write</span>
  <span m="892460">down</span> <span m="892700">what</span> <span
  m="892880">I</span> <span m="892970">know,</span> <span m="893960">I'll</span>
  <span m="894290">see</span> <span m="894560">it.</span></p><p><span
  m="898520">So</span> <span m="898800">let</span> <span m="898950">me</span>
  <span m="901190">just</span> <span m="901580">raise</span> <span
  m="902030">that</span> <span m="902240">a</span> <span
  m="902300">little</span> <span m="902660">so</span> <span
  m="902900">that</span> <span m="903050">I</span> <span m="903140">have</span>
  <span m="904010">room</span> <span m="904440">to</span> <span
  m="904620">write.</span></p><p><span m="905630">So</span> <span
  m="905780">what</span> <span m="905960">do</span> <span m="906110">I</span>
  <span m="906230">know?</span> <span m="908840">I</span> <span
  m="908940">know</span> <span m="909070">the</span> <span
  m="909190">definition</span> <span m="909820">of</span> <span
  m="909910">the</span> <span m="910000">mean.</span> <span m="910600">So</span>
  <span m="910870">I</span> <span m="910990">know</span> <span
  m="911410">that</span> <span m="912790">x1</span> <span
  m="914710">times</span> <span m="915940">P1</span> <span
  m="917310">plus</span> <span m="918160">x2</span> <span m="920210">P2</span>
  <span m="920970">plus</span> <span m="921240">x3</span> <span
  m="921990">P3--</span> <span m="924660">allow</span> <span
  m="924960">me</span> <span m="925110">to</span> <span m="926340">get</span>
  <span m="926580">carried</span> <span m="927000">away</span> <span
  m="927330">here--</span> <span m="928550">x5</span> <span
  m="929340">P5,</span> <span m="930450">say,</span> <span m="932310">is</span>
  <span m="933330">what?</span> <span m="936280">So</span> <span
  m="936520">what</span> <span m="936730">I've</span> <span
  m="936850">written</span> <span m="937090">down</span> <span
  m="937330">there</span> <span m="937600">is</span> <span m="937810">the</span>
  <span m="937930">mean.</span> <span m="939220">And</span> <span
  m="939370">I'm</span> <span m="939580">assuming</span> <span
  m="940060">that</span> <span m="940240">to</span> <span m="940390">be</span>
  <span m="940600">1.</span> <span m="941230">So</span> <span
  m="941440">this</span> <span m="941680">is</span> <span m="941800">the</span>
  <span m="941890">fact</span> <span m="942250">that</span> <span
  m="942460">I</span> <span m="942580">know</span> <span m="943780">is</span>
  <span m="943960">1.</span></p><p><span m="947020">And</span> <span
  m="947410">what</span> <span m="947740">is</span> <span m="947920">it</span>
  <span m="948040">that</span> <span m="948220">I</span> <span
  m="948280">want</span> <span m="948460">to</span> <span
  m="948520">prove?</span> <span m="950020">I</span> <span
  m="950140">want</span> <span m="950380">to</span> <span m="950470">know</span>
  <span m="950860">the</span> <span m="951040">probability</span> <span
  m="951910">of</span> <span m="952060">being</span> <span
  m="952870">greater</span> <span m="953095">or</span> <span
  m="953320">equal</span> <span m="953650">3.</span> <span m="955060">So</span>
  <span m="955210">what's</span> <span m="955540">the</span> <span
  m="955690">probability</span> <span m="956620">that</span> <span
  m="956890">the</span> <span m="958520">result</span> <span
  m="959000">will</span> <span m="959180">be</span> <span
  m="959360">greater</span> <span m="959555">or</span> <span
  m="959750">equal</span> <span m="960050">3?</span> <span
  m="963690">It's</span> <span m="964230">P3.</span></p><p><span
  m="965640">So</span> <span m="965820">this</span> <span m="966150">is</span>
  <span m="966450">saying</span> <span m="966960">that</span> <span
  m="967650">P3</span> <span m="969150">plus</span> <span m="969720">P4--</span>
  <span m="970870">these</span> <span m="971640">are</span> <span
  m="971700">the</span> <span m="971850">probabilities.</span> <span
  m="972670">These</span> <span m="972990">are</span> <span
  m="973590">the</span> <span m="973710">different</span> <span
  m="974130">ways</span> <span m="974640">that</span> <span m="974790">I</span>
  <span m="974940">might</span> <span m="975240">be</span> <span
  m="975540">greater</span> <span m="975705">or</span> <span
  m="975870">equal</span> <span m="976200">3.</span> <span m="977240">And</span>
  <span m="977400">I'm</span> <span m="977610">claiming</span> <span
  m="978120">that</span> <span m="978270">that's</span> <span
  m="978630">less</span> <span m="978880">than</span> <span m="978980">or</span>
  <span m="979020">equal</span> <span m="979260">1/3.</span></p><p><span
  m="985290">What</span> <span m="985470">I</span> <span m="986340">liked</span>
  <span m="986970">about</span> <span m="987270">this</span> <span
  m="988170">elementary</span> <span m="988800">approach</span> <span
  m="989400">is</span> <span m="990240">that</span> <span m="990420">I've</span>
  <span m="991290">stated</span> <span m="991980">these</span> <span
  m="993240">facts,</span> <span m="994830">these</span> <span
  m="995400">probability</span> <span m="997200">assumptions</span> <span
  m="999540">and</span> <span m="1000080">conclusions</span> <span
  m="1001490">directly</span> <span m="1002120">in</span> <span
  m="1002270">terms</span> <span m="1002720">of</span> <span
  m="1002870">numbers.</span> <span m="1003920">So</span> <span
  m="1004160">I</span> <span m="1004340">just</span> <span
  m="1004580">want</span> <span m="1004830">to</span> <span
  m="1004920">show</span> <span m="1005840">that</span> <span
  m="1005990">if</span> <span m="1006140">this</span> <span
  m="1006410">is</span> <span m="1006590">true,</span> <span
  m="1007610">then</span> <span m="1007820">that's</span> <span
  m="1008210">true.</span></p><p><span m="1011030">Let's</span> <span
  m="1011240">see,</span> <span m="1012940">I</span> <span
  m="1013090">guess</span> <span m="1013330">I'm</span> <span
  m="1013510">thinking</span> <span m="1014080">that</span> <span
  m="1014350">the--</span> <span m="1015370">I'm</span> <span
  m="1015610">sorry,</span> <span m="1015970">I</span> <span
  m="1016060">even</span> <span m="1016360">took</span> <span
  m="1016830">a</span> <span m="1017020">more</span> <span
  m="1017320">special</span> <span m="1017800">case.</span> <span
  m="1018640">I'm</span> <span m="1018760">taking</span> <span
  m="1019400">the</span> <span m="1019930">case</span> <span
  m="1020350">where</span> <span m="1020620">x1</span> <span
  m="1021460">is</span> <span m="1021700">1,</span> <span m="1024535">x2</span>
  <span m="1025369">is</span> <span m="1025579">2,</span> <span
  m="1027334">x3</span> <span m="1028079">is</span> <span m="1028260">3,</span>
  <span m="1029946">x4</span> <span m="1030630">is</span> <span
  m="1030780">4,</span> <span m="1031849">and</span> <span m="1032130">x5</span>
  <span m="1032760">is</span> <span m="1032940">5.</span> <span
  m="1034200">So</span> <span m="1034440">that</span> <span
  m="1035099">satisfies</span> <span m="1036750">my</span> <span
  m="1036990">condition</span> <span m="1037619">that</span> <span
  m="1038589">the</span> <span m="1040369">outputs--</span> <span
  m="1041040">1,</span> <span m="1041730">2,</span> <span m="1042329">3,</span>
  <span m="1043020">4,</span> <span m="1043530">or</span> <span
  m="1043740">5--</span> <span m="1044609">are</span> <span
  m="1044819">all--</span> <span m="1047760">Markov</span> <span
  m="1050100">only</span> <span m="1050370">applies</span> <span
  m="1050940">when</span> <span m="1051150">they're</span> <span
  m="1051360">all</span> <span m="1051570">greater</span> <span
  m="1051830">or</span> <span m="1051990">equal</span> <span
  m="1052290">0.</span></p><p><span m="1055680">So</span> <span
  m="1055890">I'm</span> <span m="1056130">just</span> <span
  m="1056490">imagining</span> <span m="1057130">the</span> <span
  m="1057300">special</span> <span m="1057810">case</span> <span
  m="1058560">where</span> <span m="1058800">that</span> <span
  m="1059040">possible</span> <span m="1059640">outputs</span> <span
  m="1060210">are</span> <span m="1060300">1,</span> <span m="1060500">2,</span>
  <span m="1060680">3,</span> <span m="1060940">4,</span> <span
  m="1061190">5.</span> <span m="1062590">Their</span> <span
  m="1062850">probabilities</span> <span m="1063780">are</span> <span
  m="1063960">P1,</span> <span m="1064560">P2,</span> <span
  m="1065310">P3,</span> <span m="1065880">P4,</span> <span
  m="1066390">P5.</span> <span m="1067530">The</span> <span
  m="1067650">mean</span> <span m="1068190">is</span> <span
  m="1068430">1.</span> <span m="1070080">And</span> <span
  m="1070290">what</span> <span m="1070530">I</span> <span
  m="1070650">want</span> <span m="1070850">to</span> <span
  m="1070930">show</span> <span m="1071370">is</span> <span
  m="1071640">that</span> <span m="1071800">the</span> <span
  m="1071940">probability</span> <span m="1072840">of</span> <span
  m="1073080">being</span> <span m="1074250">greater</span> <span
  m="1074610">than</span> <span m="1074850">3</span> <span m="1076440">is</span>
  <span m="1076890">less</span> <span m="1077260">than</span> <span
  m="1077360">or</span> <span m="1077370">equal</span> <span
  m="1077640">1/3.</span> <span m="1079350">And</span> <span
  m="1079800">can</span> <span m="1080160">you</span> <span
  m="1080280">put</span> <span m="1080550">together</span> <span
  m="1081030">these</span> <span m="1081390">two?</span> <span
  m="1085620">Given</span> <span m="1086010">this,</span> <span
  m="1086610">we</span> <span m="1086760">want</span> <span
  m="1086970">to</span> <span m="1087060">conclude</span> <span
  m="1087570">that.</span></p><p><span m="1089010">Let</span> <span
  m="1089130">me</span> <span m="1089250">just</span> <span
  m="1089490">step</span> <span m="1089790">back</span> <span
  m="1090060">a</span> <span m="1090120">minute.</span> <span
  m="1091650">So</span> <span m="1092730">what</span> <span
  m="1092970">do</span> <span m="1093030">we</span> <span
  m="1093180">know</span> <span m="1093450">here?</span> <span
  m="1096990">We</span> <span m="1097140">know</span> <span
  m="1097440">this,</span> <span m="1097970">the</span> <span
  m="1098100">first</span> <span m="1098430">line.</span> <span
  m="1099090">And</span> <span m="1099240">we</span> <span
  m="1099360">want</span> <span m="1099570">to</span> <span
  m="1099630">prove</span> <span m="1099960">the</span> <span
  m="1100080">second.</span></p><p><span m="1101920">We</span> <span
  m="1102070">know</span> <span m="1102220">one</span> <span
  m="1102490">more</span> <span m="1102760">thing.</span> <span
  m="1105690">All</span> <span m="1105960">the</span> <span
  m="1106110">probability--</span> <span m="1106780">well,</span> <span
  m="1107100">we</span> <span m="1107250">know</span> <span
  m="1107460">the</span> <span m="1107580">probabilities</span> <span
  m="1108390">add</span> <span m="1108600">to</span> <span m="1108750">1.</span>
  <span m="1109080">And</span> <span m="1109230">we</span> <span
  m="1109410">know</span> <span m="1109620">they're</span> <span
  m="1109830">all</span> <span m="1110430">greater</span> <span
  m="1110760">equal</span> <span m="1111060">0.</span> <span
  m="1111450">So</span> <span m="1111660">let</span> <span m="1111810">me</span>
  <span m="1112470">put</span> <span m="1112680">those</span> <span
  m="1113070">facts</span> <span m="1113910">in</span> <span
  m="1114060">here</span> <span m="1114270">too.</span></p><p><span
  m="1114960">We</span> <span m="1115110">know</span> <span
  m="1117650">that</span> <span m="1118370">P1</span> <span
  m="1119030">plus</span> <span m="1119390">P2</span> <span
  m="1120560">plus</span> <span m="1120950">P3</span> <span
  m="1121760">plus</span> <span m="1122090">P4</span> <span
  m="1122750">plus</span> <span m="1123020">P5</span> <span
  m="1124160">is</span> <span m="1124340">1.</span> <span
  m="1126320">That</span> <span m="1126500">we</span> <span
  m="1126650">know.</span> <span m="1127430">And</span> <span
  m="1127610">we</span> <span m="1127820">also</span> <span
  m="1128180">know</span> <span m="1130070">that</span> <span
  m="1131330">all</span> <span m="1131960">the</span> <span
  m="1132170">P's</span> <span m="1133550">are</span> <span
  m="1133670">greater</span> <span m="1134090">than</span> <span
  m="1134900">or</span> <span m="1135080">equal</span> <span
  m="1135360">to</span> <span m="1135400">0.</span> <span
  m="1136740">OK.</span></p><p><span m="1143420">So</span> <span
  m="1143720">here</span> <span m="1143960">we</span> <span
  m="1144110">go.</span> <span m="1146180">My</span> <span
  m="1146930">idea</span> <span m="1147440">is</span> <span
  m="1149420">this</span> <span m="1149870">is</span> <span
  m="1150020">looking</span> <span m="1150440">at</span> <span
  m="1150590">3</span> <span m="1151070">times</span> <span
  m="1151880">P3</span> <span m="1152360">plus</span> <span
  m="1152660">P4</span> <span m="1153110">plus</span> <span
  m="1153410">P5.</span> <span m="1154370">So</span> <span
  m="1154490">I'm</span> <span m="1154670">going</span> <span
  m="1154780">to</span> <span m="1154910">take</span> <span m="1155210">3</span>
  <span m="1155990">P3</span> <span m="1156710">plus</span> <span
  m="1157040">3</span> <span m="1157550">P4</span> <span m="1158540">away</span>
  <span m="1158900">from</span> <span m="1159140">this.</span> <span
  m="1162070">So</span> <span m="1162280">this</span> <span
  m="1162610">we'll</span> <span m="1162850">say</span> <span
  m="1165920">P1</span> <span m="1167600">plus</span> <span m="1168260">2</span>
  <span m="1168980">P2</span> <span m="1170610">plus</span> <span
  m="1171360">3</span> <span m="1172950">of</span> <span m="1174560">P3</span>
  <span m="1175550">plus</span> <span m="1175940">P4</span> <span
  m="1176690">plus</span> <span m="1177050">P5.</span> <span
  m="1179320">I'm</span> <span m="1179540">just</span> <span
  m="1179960">picking</span> <span m="1180380">out</span> <span
  m="1180620">three</span> <span m="1181010">of</span> <span
  m="1181100">those</span> <span m="1181400">guys.</span> <span
  m="1182420">Plus</span> <span m="1182900">I</span> <span
  m="1182990">have</span> <span m="1183230">one</span> <span
  m="1183890">more</span> <span m="1184250">P4</span> <span
  m="1184970">to</span> <span m="1185150">account</span> <span
  m="1185600">for</span> <span m="1186500">and</span> <span
  m="1186620">two</span> <span m="1186860">more</span> <span
  m="1187160">P5s</span> <span m="1189690">gives</span> <span
  m="1190070">1.</span></p><p><span m="1197615">Good?</span></p><p><span
  m="1200970">Now,</span> <span m="1203340">this</span> <span
  m="1203610">is</span> <span m="1203730">what</span> <span
  m="1203910">I'm</span> <span m="1204150">trying</span> <span
  m="1204420">to</span> <span m="1204510">prove.</span> <span
  m="1207120">So</span> <span m="1207260">that</span> <span
  m="1207530">is</span> <span m="1207710">here.</span> <span
  m="1207960">I'm</span> <span m="1208160">trying</span> <span
  m="1208430">to</span> <span m="1208520">prove</span> <span
  m="1208850">that</span> <span m="1209030">this</span> <span
  m="1209390">thing</span> <span m="1209810">is--</span> <span
  m="1212020">what</span> <span m="1212200">am</span> <span m="1212320">I</span>
  <span m="1212420">trying</span> <span m="1212660">to</span> <span
  m="1212750">prove</span> <span m="1212960">about</span> <span
  m="1213230">that</span> <span m="1213430">number?</span> <span
  m="1215060">Sorry,</span> <span m="1215420">I'm</span> <span
  m="1216380">talking</span> <span m="1216800">a</span> <span
  m="1216830">lot.</span> <span m="1217280">But</span> <span
  m="1217460">now,</span> <span m="1217670">I've</span> <span
  m="1217850">really</span> <span m="1218150">come</span> <span
  m="1218420">to</span> <span m="1218570">the</span> <span
  m="1218690">point.</span> <span m="1219580">What</span> <span
  m="1220190">is</span> <span m="1220370">Markov</span> <span
  m="1221030">telling</span> <span m="1221360">me</span> <span
  m="1221540">about</span> <span m="1221810">that</span> <span
  m="1222020">number?</span> <span m="1222470">That's--</span></p><p><span
  m="1222890">AUDIENCE:</span> <span m="1223066">Less</span> <span
  m="1223243">than</span> <span m="1223331">or</span> <span
  m="1223419">equal</span> <span m="1223507">to</span> <span
  m="1223596">1.</span></p><p><span m="1223950">GILBERT STRANG:</span> <span
  m="1224070">That</span> <span m="1224190">is</span> <span
  m="1224370">less</span> <span m="1224700">than</span> <span
  m="1224800">or</span> <span m="1224850">equal</span> <span
  m="1225120">to?</span></p><p><span m="1225480">AUDIENCE:</span> <span
  m="1225632">1.</span></p><p><span m="1226090">GILBERT STRANG:</span> <span
  m="1226240">Thanks.</span> <span m="1226690">OK,</span> <span
  m="1227200">I'm</span> <span m="1227280">trying</span> <span
  m="1227550">to</span> <span m="1227640">prove</span> <span
  m="1230000">that</span> <span m="1230370">this</span> <span
  m="1230640">is</span> <span m="1230850">less</span> <span
  m="1231150">than</span> <span m="1231250">or</span> <span
  m="1231350">equal</span> <span m="1231540">1.</span> <span
  m="1231930">That's</span> <span m="1232170">what</span> <span
  m="1232290">Markov</span> <span m="1232740">tells</span> <span
  m="1233010">me.</span> <span m="1236670">But</span> <span
  m="1236850">suppose</span> <span m="1237330">it</span> <span
  m="1237420">was</span> <span m="1237630">greater</span> <span
  m="1237990">than</span> <span m="1238170">1?</span> <span
  m="1238870">Do</span> <span m="1238970">you</span> <span
  m="1238980">see</span> <span m="1239310">the</span> <span
  m="1239460">problem?</span> <span m="1240255">Do</span> <span
  m="1240570">you</span> <span m="1240690">see</span> <span
  m="1240930">why</span> <span m="1241170">it</span> <span
  m="1241260">can't</span> <span m="1241620">be</span> <span
  m="1241800">greater</span> <span m="1242160">than</span> <span
  m="1242310">1?</span> <span m="1242580">Because</span> <span
  m="1243210">why?</span></p><p><span m="1248470">AUDIENCE:</span> <span
  m="1248713">All</span> <span m="1248957">are</span> <span
  m="1249200">the</span> <span m="1249444">other</span> <span
  m="1249931">terms--</span></p><p><span m="1250430">GILBERT STRANG:</span>
  <span m="1250505">All</span> <span m="1250580">the</span> <span
  m="1250730">other</span> <span m="1251000">terms</span> <span
  m="1251600">are</span> <span m="1251780">greater</span> <span
  m="1252140">equal</span> <span m="1252410">0.</span> <span
  m="1253310">Probabilities</span> <span m="1254120">or</span> <span
  m="1254190">greater</span> <span m="1254570">equal</span> <span
  m="1254840">0.</span> <span m="1255200">These</span> <span
  m="1255440">are</span> <span m="1255530">all</span> <span
  m="1255740">greater</span> <span m="1256100">equal</span> <span
  m="1256400">0.</span> <span m="1257690">And</span> <span
  m="1257900">the</span> <span m="1258020">total</span> <span
  m="1258470">things</span> <span m="1258770">adds</span> <span
  m="1259130">to</span> <span m="1259280">1.</span> <span m="1260240">So</span>
  <span m="1260450">that</span> <span m="1260590">this</span> <span
  m="1260900">piece</span> <span m="1261560">has</span> <span
  m="1261860">to</span> <span m="1261980">be</span> <span
  m="1262160">less</span> <span m="1262490">or</span> <span
  m="1262570">equal</span> <span m="1262650">to</span> <span
  m="1263032">1.</span> <span m="1264180">That's</span> <span
  m="1264390">right.</span> <span m="1264860">That's</span> <span
  m="1265190">it.</span></p><p><span m="1266600">So</span> <span
  m="1267170">a</span> <span m="1267230">lot</span> <span m="1267440">of</span>
  <span m="1267530">talking</span> <span m="1268070">there.</span> <span
  m="1269120">Simple</span> <span m="1269600">idea.</span> <span
  m="1270800">And</span> <span m="1271490">you'll</span> <span
  m="1271850">see</span> <span m="1273170">exactly</span> <span
  m="1273830">this</span> <span m="1274070">example</span> <span
  m="1274610">written</span> <span m="1274910">down</span> <span
  m="1276140">in</span> <span m="1276740">the</span> <span
  m="1277190">notes.</span> <span m="1279650">And</span> <span
  m="1279860">then</span> <span m="1280130">you'll</span> <span
  m="1280310">see</span> <span m="1280730">a</span> <span
  m="1280820">more</span> <span m="1281240">conventional</span> <span
  m="1282080">proof</span> <span m="1282590">of</span> <span
  m="1282960">Markov's</span> <span m="1283640">inequality</span> <span
  m="1284420">by</span> <span m="1285320">taking</span> <span
  m="1287840">simple</span> <span m="1288350">inequality</span> <span
  m="1289160">steps.</span> <span m="1290000">But</span> <span
  m="1290270">they're</span> <span m="1290480">somehow</span> <span
  m="1290900">more</span> <span m="1291170">mysterious.</span> <span
  m="1291950">For</span> <span m="1292100">me,</span> <span
  m="1292430">this</span> <span m="1292760">was</span> <span
  m="1293270">explicit.</span> <span m="1294560">OK,</span> <span
  m="1295340">so</span> <span m="1295490">that's</span> <span
  m="1295760">Markov.</span></p><p><span m="1297740">Chebyshev</span> <span
  m="1298820">is</span> <span m="1299000">the</span> <span
  m="1299150">other</span> <span m="1299840">great</span> <span
  m="1300470">Russian</span> <span m="1301550">probabilist</span> <span
  m="1302390">of</span> <span m="1302510">the</span> <span
  m="1302660">time.</span> <span m="1303140">And</span> <span
  m="1303290">he</span> <span m="1304640">gets</span> <span
  m="1305120">his</span> <span m="1307550">inequality.</span> <span
  m="1317460">So</span> <span m="1317670">there</span> <span
  m="1317850">are</span> <span m="1317940">the</span> <span
  m="1318450">two.</span> <span m="1319020">There's</span> <span
  m="1319270">Markov's</span> <span m="1320040">equality.</span> <span
  m="1321330">Let</span> <span m="1321480">me</span> <span
  m="1322680">write</span> <span m="1322920">it</span> <span
  m="1323010">down</span> <span m="1323340">again</span> <span
  m="1323700">what</span> <span m="1323940">it</span> <span
  m="1324030">was.</span> <span m="1324960">Here</span> <span
  m="1325170">was</span> <span m="1325380">Markov's</span> <span
  m="1326050">inequality</span> <span m="1329910">and</span> <span
  m="1330300">Markov's</span> <span m="1330950">assumption.</span></p><p><span
  m="1332670">Chebyshev</span> <span m="1333270">doesn't</span> <span
  m="1333630">make</span> <span m="1333870">that</span> <span
  m="1334080">assumption.</span> <span m="1334890">So</span> <span
  m="1335130">now,</span> <span m="1338270">no</span> <span
  m="1338730">assumption</span> <span m="1343150">of</span> <span
  m="1344721">that</span> <span m="1345160">the</span> <span
  m="1345350">outputs</span> <span m="1345850">are</span> <span
  m="1345940">greater</span> <span m="1346280">equal</span> <span
  m="1346500">0.</span> <span m="1348060">Doesn't</span> <span
  m="1348390">come</span> <span m="1348630">in.</span></p><p><span
  m="1350310">Now</span> <span m="1350550">what</span> <span
  m="1350790">is</span> <span m="1350940">Chebyshev</span> <span
  m="1352650">trying</span> <span m="1353040">to</span> <span
  m="1353280">estimate?</span> <span m="1354190">OK,</span> <span
  m="1354600">let's</span> <span m="1354840">move</span> <span
  m="1355080">to</span> <span m="1355230">Chebyshev.</span> <span
  m="1356420">And</span> <span m="1356640">that's</span> <span
  m="1356970">the</span> <span m="1357110">last</span> <span
  m="1357520">guy.</span></p><p><span m="1365270">So</span> <span
  m="1366200">Chebyshev</span> <span m="1366700">was</span> <span
  m="1367910">interested</span> <span m="1368510">in</span> <span
  m="1368630">the</span> <span m="1368750">probability</span> <span
  m="1372170">that</span> <span m="1373970">x</span> <span
  m="1375470">minus</span> <span m="1376190">the</span> <span
  m="1376340">mean,</span> <span m="1378060">m--</span> <span
  m="1378430">can</span> <span m="1378680">I</span> <span m="1378740">use</span>
  <span m="1379130">that</span> <span m="1379340">for</span> <span
  m="1379520">mean--</span> <span m="1383190">is</span> <span
  m="1384750">probably</span> <span m="1385200">greater</span> <span
  m="1385740">equal</span> <span m="1386100">to</span> <span
  m="1389300">a--</span> <span m="1390866">the</span> <span
  m="1391250">probability</span> <span m="1392450">of</span> <span
  m="1392660">being</span> <span m="1394550">sort</span> <span
  m="1394820">of</span> <span m="1395540">a</span> <span
  m="1395600">distance</span> <span m="1395885">a</span> <span
  m="1396170">away</span> <span m="1396800">from</span> <span
  m="1397130">mean.</span> <span m="1398660">So</span> <span
  m="1398930">again,</span> <span m="1399650">as</span> <span
  m="1399920">a</span> <span m="1400100">increases,</span> <span
  m="1401660">I'm</span> <span m="1401810">asking</span> <span
  m="1402290">more,</span> <span m="1402860">I'm</span> <span
  m="1403070">asking</span> <span m="1403410">it</span> <span
  m="1403540">to</span> <span m="1403640">be</span> <span
  m="1403820">further</span> <span m="1404330">away</span> <span
  m="1404660">from</span> <span m="1404870">the</span> <span
  m="1404960">mean,</span> <span m="1405810">and</span> <span
  m="1406060">the</span> <span m="1406280">probability</span> <span
  m="1406970">will</span> <span m="1407240">drop.</span> <span
  m="1408500">And</span> <span m="1408710">then</span> <span
  m="1408980">the</span> <span m="1409100">question</span> <span
  m="1409640">is</span> <span m="1409850">can</span> <span m="1410090">we</span>
  <span m="1410300">estimate</span> <span m="1410840">this?</span></p><p><span
  m="1412040">So</span> <span m="1412610">this</span> <span
  m="1412910">is</span> <span m="1413420">a</span> <span
  m="1413480">different</span> <span m="1413930">estimate.</span> <span
  m="1414590">But</span> <span m="1414830">it's</span> <span
  m="1416590">similar</span> <span m="1417040">question.</span> <span
  m="1418300">And</span> <span m="1418450">what</span> <span
  m="1419500">Chebyshev's</span> <span m="1420250">answer</span> <span
  m="1420730">for</span> <span m="1420940">this?</span></p><p><span
  m="1421690">So</span> <span m="1421870">this</span> <span
  m="1422110">is</span> <span m="1422260">the</span> <span
  m="1422380">probability</span> <span m="1423700">of</span> <span
  m="1423850">this.</span> <span m="1424240">I</span> <span
  m="1424330">have</span> <span m="1424480">to</span> <span
  m="1424600">put</span> <span m="1424840">off</span> <span
  m="1425410">big--</span> <span m="1427550">that's</span> <span
  m="1427810">all</span> <span m="1428800">one</span> <span
  m="1429100">mouthful--</span> <span m="1430240">the</span> <span
  m="1430360">probability</span> <span m="1433990">that</span> <span
  m="1434320">this</span> <span m="1435280">x</span> <span
  m="1435550">minus</span> <span m="1435990">m</span> <span
  m="1437110">is</span> <span m="1437530">greater</span> <span
  m="1437920">equal</span> <span m="1438220">to</span> <span
  m="1438340">a.</span> <span m="1440170">And</span> <span
  m="1440290">again,</span> <span m="1440710">we're</span> <span
  m="1440860">going</span> <span m="1441060">to</span> <span
  m="1441160">have</span> <span m="1441990">is</span> <span
  m="1442240">less</span> <span m="1442550">than</span> <span
  m="1442650">or</span> <span m="1442750">equal</span> <span
  m="1443110">to</span> <span m="1446110">sigma</span> <span
  m="1446500">squared</span> <span m="1447110">now</span> <span
  m="1447250">comes</span> <span m="1447640">in</span> <span
  m="1448360">over</span> <span m="1448690">a</span> <span
  m="1448900">squared.</span></p><p><span m="1454560">So</span> <span
  m="1454740">that's</span> <span m="1455580">Chebyshev.</span> <span
  m="1456360">And</span> <span m="1457680">I</span> <span
  m="1457770">just</span> <span m="1459090">take</span> <span
  m="1459420">time</span> <span m="1460170">today</span> <span
  m="1460920">to</span> <span m="1461130">do</span> <span
  m="1461460">these</span> <span m="1461850">two</span> <span
  m="1462210">because</span> <span m="1464910">they</span> <span
  m="1465150">involve</span> <span m="1466080">analysis.</span> <span
  m="1467720">They're</span> <span m="1469590">basic</span> <span
  m="1470250">tools.</span> <span m="1470880">They're</span> <span
  m="1471210">sort</span> <span m="1471480">of</span> <span
  m="1471540">the</span> <span m="1471660">first</span> <span
  m="1471990">thing</span> <span m="1472260">you</span> <span
  m="1472380">think</span> <span m="1472710">of</span> <span
  m="1472920">if</span> <span m="1473070">you're</span> <span
  m="1473220">trying</span> <span m="1473520">to</span> <span
  m="1473640">estimate</span> <span m="1474200">a</span> <span
  m="1474240">probability.</span></p><p><span m="1475560">Does</span> <span
  m="1475860">it</span> <span m="1475980">fit</span> <span
  m="1477360">Markov?</span> <span m="1478800">And</span> <span
  m="1479700">Markov</span> <span m="1480210">only</span> <span
  m="1480480">applies--</span> <span m="1481060">so</span> <span
  m="1481330">I'll</span> <span m="1481520">put</span> <span
  m="1481710">only</span> <span m="1482130">applies--</span> <span
  m="1485130">when</span> <span m="1485370">the</span> <span
  m="1485490">x's</span> <span m="1485880">are</span> <span
  m="1486040">all</span> <span m="1486120">greater</span> <span
  m="1486480">or</span> <span m="1486570">equal</span> <span
  m="1486850">0.</span> <span m="1487720">Here,</span> <span
  m="1488190">does</span> <span m="1488490">it</span> <span
  m="1488610">fit</span> <span m="1488910">Chebyshev?</span> <span
  m="1490470">And</span> <span m="1490620">now</span> <span
  m="1491010">we're</span> <span m="1491220">taking</span> <span
  m="1491640">absolute</span> <span m="1492090">values.</span> <span
  m="1492790">So</span> <span m="1493050">we're</span> <span
  m="1493230">not</span> <span m="1493530">concerned</span> <span
  m="1494100">about</span> <span m="1494790">the</span> <span
  m="1494850">size</span> <span m="1495270">of</span> <span
  m="1495390">x.</span> <span m="1496230">And</span> <span
  m="1496350">we're</span> <span m="1496500">taking</span> <span
  m="1496970">a</span> <span m="1497040">distance</span> <span
  m="1497580">from</span> <span m="1497820">m.</span> <span
  m="1498240">So</span> <span m="1498480">we're</span> <span
  m="1498990">obviously</span> <span m="1499620">in</span> <span
  m="1499830">the</span> <span m="1500730">world</span> <span
  m="1501240">of</span> <span m="1501300">variances.</span> <span
  m="1502200">We're</span> <span m="1502380">distances</span> <span
  m="1503130">from</span> <span m="1503420">m.</span></p><p><span
  m="1505210">And</span> <span m="1505770">the</span> <span
  m="1505860">proof</span> <span m="1506490">of</span> <span
  m="1506700">Chebyshev</span> <span m="1508710">comes</span> <span
  m="1509010">directly</span> <span m="1509520">from</span> <span
  m="1509670">Markov.</span> <span m="1510870">So</span> <span
  m="1511800">I'm</span> <span m="1511930">going</span> <span
  m="1512080">to</span> <span m="1512280">apply</span> <span
  m="1513900">Markov--</span> <span m="1516510">so</span> <span
  m="1516810">good</span> <span m="1517020">thing</span> <span
  m="1517260">that</span> <span m="1517410">Markov</span> <span
  m="1517860">came</span> <span m="1518160">first--</span> <span
  m="1522680">to--</span> <span m="1524170">now</span> <span
  m="1524540">let</span> <span m="1524660">me</span> <span
  m="1524810">just</span> <span m="1525440">say</span> <span
  m="1525770">this</span> <span m="1526860">right--</span> <span
  m="1531270">to</span> <span m="1531590">a</span> <span m="1535890">new,</span>
  <span m="1536910">let</span> <span m="1537040">me</span> <span
  m="1537450">call</span> <span m="1537710">it,</span> <span
  m="1537840">y--</span> <span m="1539070">this</span> <span
  m="1539170">will</span> <span m="1539340">be</span> <span m="1539550">a</span>
  <span m="1539730">new</span> <span m="1543870">output.</span> <span
  m="1545280">And</span> <span m="1545520">it</span> <span
  m="1545670">will</span> <span m="1545940">be</span> <span m="1549560">x</span>
  <span m="1550190">minus</span> <span m="1550760">m</span> <span
  m="1552000">squared.</span> <span m="1558190">Of</span> <span
  m="1558310">course,</span> <span m="1558640">with</span> <span
  m="1558850">the</span> <span m="1558950">same</span> <span
  m="1559300">probability.</span> <span m="1560050">So</span> <span
  m="1560260">yi</span> <span m="1561910">is</span> <span m="1562240">xi</span>
  <span m="1563530">minus</span> <span m="1564010">m,</span> <span
  m="1564980">the</span> <span m="1565180">mean,</span> <span
  m="1565990">squared.</span> <span m="1567040">And</span> <span
  m="1567340">the</span> <span m="1567490">same</span> <span
  m="1567850">probability,</span> <span m="1568630">same</span> <span
  m="1571600">probabilities</span> <span m="1573640">Pi.</span></p><p><span
  m="1578720">So</span> <span m="1578900">I</span> <span
  m="1579020">guess</span> <span m="1579350">if</span> <span
  m="1579500">I'm</span> <span m="1579650">going</span> <span
  m="1579830">to</span> <span m="1579890">apply--</span> <span
  m="1582200">I'm</span> <span m="1582500">just</span> <span
  m="1582740">going</span> <span m="1582860">to</span> <span
  m="1583040">take</span> <span m="1584600">the</span> <span
  m="1584990">y's</span> <span m="1585680">here</span> <span
  m="1586580">instead</span> <span m="1587000">of</span> <span
  m="1587090">the</span> <span m="1587240">x's</span> <span
  m="1587660">here</span> <span m="1591860">and</span> <span
  m="1592250">then</span> <span m="1592430">apply</span> <span
  m="1592950">Markov.</span></p><p><span m="1593970">So</span> <span
  m="1594050">what</span> <span m="1594290">is</span> <span m="1594740">x</span>
  <span m="1595010">bar?</span> <span m="1596130">So</span> <span
  m="1596390">if</span> <span m="1596690">I</span> <span m="1596810">want</span>
  <span m="1596990">to</span> <span m="1597050">apply</span> <span
  m="1597320">Markov,</span> <span m="1597830">I</span> <span
  m="1597950">have</span> <span m="1598100">to</span> <span
  m="1598220">figure</span> <span m="1598520">out</span> <span
  m="1598670">the</span> <span m="1598790">mean</span> <span
  m="1599330">of</span> <span m="1599480">x.</span> <span
  m="1600650">Over</span> <span m="1600890">here,</span> <span
  m="1601160">I</span> <span m="1601310">have</span> <span m="1601460">to</span>
  <span m="1601610">figure</span> <span m="1601970">out</span> <span
  m="1602120">the</span> <span m="1602240">mean</span> <span
  m="1602570">of</span> <span m="1602690">y.</span> <span
  m="1603140">What</span> <span m="1603410">is</span> <span
  m="1607460">the</span> <span m="1607580">mean</span> <span
  m="1608360">of</span> <span m="1608510">y?</span> <span m="1610040">The</span>
  <span m="1610070">mean</span> <span m="1610460">value,</span> <span
  m="1611270">the</span> <span m="1611420">sum</span> <span
  m="1611870">of</span> <span m="1613310">probabilities</span> <span
  m="1614470">times</span> <span m="1614990">y's.</span></p><p><span
  m="1623020">You're</span> <span m="1623140">supposed</span> <span
  m="1623440">to</span> <span m="1623560">recognize</span> <span
  m="1624180">it.</span> <span m="1626230">This</span> <span
  m="1626440">is</span> <span m="1626640">the</span> <span
  m="1626770">sum</span> <span m="1627190">of</span> <span
  m="1627370">probabilities.</span> <span m="1631570">And</span> <span
  m="1631870">my</span> <span m="1632110">y's</span> <span
  m="1632830">are</span> <span m="1633190">the</span> <span
  m="1634020">xi</span> <span m="1634750">minus</span> <span
  m="1635230">the</span> <span m="1635320">mean</span> <span
  m="1636490">squared.</span> <span m="1640230">So</span> <span
  m="1640440">this</span> <span m="1640650">is</span> <span
  m="1640740">the</span> <span m="1640890">mean</span> <span
  m="1641610">for</span> <span m="1641880">this</span> <span
  m="1644430">y</span> <span m="1645120">thing</span> <span
  m="1645420">that</span> <span m="1645570">I've</span> <span
  m="1645780">brought</span> <span m="1646140">in</span> <span
  m="1647550">has</span> <span m="1647820">that</span> <span
  m="1648000">formula.</span> <span m="1648600">And</span> <span
  m="1648840">we</span> <span m="1649020">recognize</span> <span
  m="1649680">what</span> <span m="1649890">that</span> <span
  m="1650160">quantity</span> <span m="1650730">is.</span></p><p><span
  m="1651450">That</span> <span m="1651720">is?</span> <span
  m="1653420">That's</span> <span m="1653690">sigma</span> <span
  m="1654080">squared,</span> <span m="1654830">sigma</span> <span
  m="1655220">squared</span> <span m="1655580">for</span> <span
  m="1655730">the</span> <span m="1655880">original</span> <span
  m="1656390">x's.</span> <span m="1657500">So</span> <span
  m="1657680">that's</span> <span m="1659330">great.</span> <span
  m="1659750">So</span> <span m="1660030">the</span> <span
  m="1660680">mean</span> <span m="1661700">is</span> <span
  m="1662750">sigma--</span> <span m="1663200">is</span> <span
  m="1663410">the</span> <span m="1663530">old</span> <span
  m="1663830">sigma</span> <span m="1664220">squared.</span> <span
  m="1666010">Those</span> <span m="1666240">are</span> <span
  m="1666380">exclamation</span> <span m="1667040">marks.</span></p><p><span
  m="1670580">Do</span> <span m="1671000">see</span> <span
  m="1671300">that</span> <span m="1671510">now</span> <span
  m="1674270">Chebyshev</span> <span m="1674630">is</span> <span
  m="1675090">looking</span> <span m="1675470">like</span> <span
  m="1675710">Markov?</span> <span m="1679580">Over</span> <span
  m="1679850">here</span> <span m="1680210">will</span> <span
  m="1680300">be</span> <span m="1680630">the</span> <span
  m="1680840">x--</span> <span m="1682370">now</span> <span m="1682700">I</span>
  <span m="1682820">want</span> <span m="1683090">the</span> <span
  m="1683240">expected</span> <span m="1683840">value</span> <span
  m="1684260">of</span> <span m="1684410">y</span> <span m="1685770">over</span>
  <span m="1687150">the--</span> <span m="1689180">let's</span> <span
  m="1689360">see,</span> <span m="1691370">yeah,</span> <span
  m="1692360">so</span> <span m="1692570">the</span> <span
  m="1692720">expected</span> <span m="1693170">y</span> <span
  m="1693500">is</span> <span m="1693620">going</span> <span
  m="1693720">to</span> <span m="1693860">be</span> <span
  m="1695030">that.</span></p><p><span m="1696070">And</span> <span
  m="1696200">now</span> <span m="1696400">what</span> <span
  m="1696510">do</span> <span m="1696640">I</span> <span m="1696710">have</span>
  <span m="1696950">to</span> <span m="1697070">divide</span> <span
  m="1697550">by?</span> <span m="1698450">I</span> <span
  m="1698570">want</span> <span m="1698810">to</span> <span
  m="1698900">know</span> <span m="1699220">probability</span> <span
  m="1700450">of</span> <span m="1702410">this</span> <span
  m="1702770">thing</span> <span m="1703280">being</span> <span
  m="1703610">bigger</span> <span m="1703970">than</span> <span
  m="1704180">a.</span> <span m="1705570">But</span> <span
  m="1705900">now</span> <span m="1706230">I'm</span> <span
  m="1706440">looking</span> <span m="1706860">at</span> <span
  m="1706980">the</span> <span m="1707120">y's.</span> <span
  m="1708750">So</span> <span m="1709470">the</span> <span
  m="1709620">probability</span> <span m="1711120">of</span> <span
  m="1712140">if</span> <span m="1712530">x</span> <span
  m="1712800">minus</span> <span m="1713130">m</span> <span
  m="1713490">is</span> <span m="1713610">greater</span> <span
  m="1713940">than</span> <span m="1714180">or</span> <span
  m="1714270">equal</span> <span m="1714510">to</span> <span
  m="1714660">a,</span> <span m="1716230">then</span> <span m="1716730">x</span>
  <span m="1716970">minus</span> <span m="1717420">xi</span> <span
  m="1717870">minus</span> <span m="1718230">m</span> <span
  m="1718800">squared</span> <span m="1719670">is</span> <span
  m="1719850">greater</span> <span m="1720210">equal</span> <span
  m="1720570">a</span> <span m="1720810">squared.</span></p><p><span
  m="1723060">So</span> <span m="1723350">my</span> <span m="1724800">a</span>
  <span m="1726810">over</span> <span m="1727050">here</span> <span
  m="1728370">for</span> <span m="1728580">x</span> <span m="1729930">is</span>
  <span m="1730140">now</span> <span m="1730740">turning,</span> <span
  m="1731580">in</span> <span m="1731760">this</span> <span
  m="1732000">problem</span> <span m="1732840">where</span> <span
  m="1733080">I'm</span> <span m="1733550">looking</span> <span
  m="1733850">at</span> <span m="1733930">probability</span> <span
  m="1734580">greater</span> <span m="1734970">equal</span> <span
  m="1735300">a</span> <span m="1735960">but</span> <span
  m="1736170">squaring</span> <span m="1736770">it,</span> <span
  m="1737470">this</span> <span m="1739860">is</span> <span
  m="1740070">the</span> <span m="1740145">a</span> <span
  m="1740220">squared.</span> <span m="1742790">So</span> <span
  m="1743010">that's</span> <span m="1743340">Markov</span> <span
  m="1744780">applied</span> <span m="1745260">to</span> <span
  m="1745440">y.</span></p><p><span m="1747150">Here</span> <span
  m="1747380">is</span> <span m="1747510">Markov</span> <span
  m="1748050">applied</span> <span m="1748500">to</span> <span
  m="1748680">x.</span> <span m="1749190">And</span> <span m="1749310">x</span>
  <span m="1749550">had</span> <span m="1749700">to</span> <span
  m="1749790">be</span> <span m="1750300">greater</span> <span
  m="1750660">equal</span> <span m="1750960">0.</span> <span
  m="1751800">So</span> <span m="1752040">over</span> <span
  m="1752270">here,</span> <span m="1752540">Chebyshev</span> <span
  m="1753210">took</span> <span m="1753540">a</span> <span m="1753630">y,</span>
  <span m="1754590">which</span> <span m="1754800">was</span> <span
  m="1755220">greater</span> <span m="1755610">equal</span> <span
  m="1755890">to</span> <span m="1756330">0</span> <span m="1756800">than</span>
  <span m="1757050">just</span> <span m="1757320">applied</span> <span
  m="1757740">Markov</span> <span m="1759420">and</span> <span
  m="1760470">recognize</span> <span m="1762390">that</span> <span
  m="1762660">mean</span> <span m="1763800">of</span> <span
  m="1764130">his</span> <span m="1764610">variable,</span> <span
  m="1766650">x</span> <span m="1766920">minus</span> <span m="1767280">m</span>
  <span m="1767520">squared</span> <span m="1768270">was</span> <span
  m="1768510">exactly</span> <span m="1769080">sigma</span> <span
  m="1769500">squared.</span> <span m="1770550">And</span> <span
  m="1772210">it</span> <span m="1772560">fell</span> <span
  m="1772860">out.</span></p><p><span m="1773800">So</span> <span
  m="1774330">again,</span> <span m="1777930">here</span> <span
  m="1778080">is</span> <span m="1778230">a</span> <span m="1778290">very</span>
  <span m="1778740">simple</span> <span m="1779190">proof</span> <span
  m="1781170">for</span> <span m="1782790">Markov.</span> <span
  m="1783900">And</span> <span m="1784050">then</span> <span
  m="1784980">everybody</span> <span m="1785730">agrees</span> <span
  m="1786330">that</span> <span m="1786480">Chebyshev</span> <span
  m="1787040">follows</span> <span m="1787620">right</span> <span
  m="1787860">away</span> <span m="1788130">from</span> <span
  m="1788340">Markov.</span> <span m="1789660">So</span> <span
  m="1789870">those</span> <span m="1790140">are</span> <span
  m="1790230">two</span> <span m="1791940">basic</span> <span
  m="1792450">inequalities.</span></p><p><span m="1794080">Now,</span> <span
  m="1794460">the</span> <span m="1794670">other</span> <span
  m="1795060">topic</span> <span m="1795630">that</span> <span
  m="1795810">I</span> <span m="1795930">wanted</span> <span
  m="1797340">to</span> <span m="1798900">deal</span> <span
  m="1799170">with</span> <span m="1799440">was</span> <span
  m="1799680">covariance,</span> <span m="1801060">covariance</span> <span
  m="1801780">matrix.</span> <span m="1802480">You</span> <span
  m="1802580">have</span> <span m="1802650">to</span> <span
  m="1802770">get</span> <span m="1803280">comfortable</span> <span
  m="1804450">with</span> <span m="1806130">what's</span> <span
  m="1806730">the</span> <span m="1806850">covariance.</span></p><p><span
  m="1816550">So</span> <span m="1816930">covariance,</span> <span
  m="1821370">covariance</span> <span m="1822000">matrix,</span> <span
  m="1825450">and</span> <span m="1825630">it</span> <span
  m="1825750">will</span> <span m="1825930">be</span> <span m="1826620">m</span>
  <span m="1826950">by</span> <span m="1827280">m</span> <span
  m="1828690">when</span> <span m="1828960">I</span> <span
  m="1829110">have</span> <span m="1831960">m</span> <span
  m="1832360">experiments</span> <span m="1837000">at</span> <span
  m="1837450">once.</span> <span m="1840632">And</span> <span
  m="1841080">let</span> <span m="1841200">me</span> <span
  m="1841350">take</span> <span m="1841660">m</span> <span
  m="1841960">equal</span> <span m="1842190">to</span> <span
  m="1842280">2.</span> <span m="1844500">You'll</span> <span
  m="1844710">see</span> <span m="1844980">everything</span> <span
  m="1845580">for</span> <span m="1847290">m</span> <span
  m="1847720">equal</span> <span m="1847940">to</span> <span
  m="1848220">2.</span> <span m="1848580">So</span> <span
  m="1849570">we're</span> <span m="1849810">expecting</span> <span
  m="1850095">to</span> <span m="1850380">get</span> <span m="1850575">a</span>
  <span m="1850770">2</span> <span m="1851040">by</span> <span
  m="1851250">2</span> <span m="1851520">matrix.</span></p><p><span
  m="1853620">And</span> <span m="1853830">what</span> <span
  m="1854070">are</span> <span m="1854130">we</span> <span
  m="1854310">starting</span> <span m="1854820">with?</span> <span
  m="1855960">We</span> <span m="1856110">start</span> <span
  m="1856440">we're</span> <span m="1856590">doing</span> <span
  m="1856860">two</span> <span m="1857160">experiments</span> <span
  m="1857910">at</span> <span m="1858030">once.</span> <span
  m="1859180">So</span> <span m="1859230">we</span> <span
  m="1859380">have</span> <span m="1859530">two</span> <span
  m="1859800">outputs,</span> <span m="1865210">an</span> <span
  m="1865360">x</span> <span m="1866950">and</span> <span m="1867130">a</span>
  <span m="1867190">y.</span> <span m="1870230">So</span> <span
  m="1870410">the</span> <span m="1870590">x's</span> <span
  m="1871020">are</span> <span m="1871160">the</span> <span
  m="1871310">outputs</span> <span m="1871750">from</span> <span
  m="1871940">the</span> <span m="1872060">x</span> <span
  m="1872360">experiment.</span> <span m="1873390">The</span> <span
  m="1873560">y's</span> <span m="1875090">are</span> <span
  m="1875240">the</span> <span m="1875420">output</span> <span
  m="1875840">from</span> <span m="1876980">a</span> <span
  m="1877100">second</span> <span m="1877580">experiment.</span> <span
  m="1878900">We're</span> <span m="1879050">flipping</span> <span
  m="1879560">two</span> <span m="1879830">coins.</span></p><p><span
  m="1881240">So</span> <span m="1882080">let's</span> <span
  m="1882470">take</span> <span m="1882770">that</span> <span
  m="1882980">example,</span> <span m="1883580">two</span> <span
  m="1883850">coins.</span> <span m="1886190">Coin</span> <span
  m="1886580">1</span> <span m="1889370">gets</span> <span m="1890120">0</span>
  <span m="1891080">or</span> <span m="1891470">1</span> <span
  m="1892730">with</span> <span m="1893630">P</span> <span
  m="1893945">equal</span> <span m="1894102">to</span> <span
  m="1894260">the</span> <span m="1894410">probability</span> <span
  m="1895070">1/2.</span> <span m="1897080">Coin</span> <span
  m="1897410">2,</span> <span m="1901210">0</span> <span m="1901630">or</span>
  <span m="1901720">1</span> <span m="1904240">with</span> <span
  m="1904510">probability</span> <span m="1905260">1/2.</span> <span
  m="1906760">So</span> <span m="1906940">they're</span> <span
  m="1907120">fair</span> <span m="1907450">coins.</span></p><p><span
  m="1910610">But</span> <span m="1910820">what</span> <span
  m="1911030">I</span> <span m="1911120">haven't</span> <span
  m="1911450">said</span> <span m="1912140">is,</span> <span
  m="1915290">is</span> <span m="1915480">there</span> <span
  m="1915630">a</span> <span m="1915690">connection</span> <span
  m="1916290">between</span> <span m="1917340">the</span> <span
  m="1917550">output--</span> <span m="1918350">this</span> <span
  m="1918720">is</span> <span m="1918870">the</span> <span m="1919020">x.</span>
  <span m="1920580">This</span> <span m="1920820">is</span> <span
  m="1920970">the</span> <span m="1921090">y--</span> <span
  m="1923760">if</span> <span m="1923940">I</span> <span m="1924030">glue</span>
  <span m="1924360">the</span> <span m="1924480">coins</span> <span
  m="1924900">together,</span> <span m="1925380">then</span> <span
  m="1925590">the</span> <span m="1925740">two</span> <span
  m="1925950">outputs</span> <span m="1926400">are</span> <span
  m="1926490">the</span> <span m="1926640">same.</span> <span
  m="1927270">I</span> <span m="1927360">think</span> <span
  m="1928440">for</span> <span m="1928620">me</span> <span
  m="1928830">this</span> <span m="1929070">is</span> <span m="1929250">a</span>
  <span m="1930090">model</span> <span m="1932010">question</span> <span
  m="1932580">that</span> <span m="1932790">brings</span> <span
  m="1933180">out</span> <span m="1933390">the</span> <span
  m="1933540">main</span> <span m="1933840">point</span> <span
  m="1934230">of</span> <span m="1934350">covariance.</span> <span
  m="1936160">If</span> <span m="1936340">I</span> <span
  m="1936520">flipped</span> <span m="1936900">two</span> <span
  m="1937150">coins</span> <span m="1937510">separately,</span> <span
  m="1940270">quite</span> <span m="1940570">independently,</span> <span
  m="1942220">then</span> <span m="1947410">I</span> <span
  m="1947500">don't</span> <span m="1947710">know</span> <span
  m="1947950">more</span> <span m="1948280">about</span> <span
  m="1948610">y</span> <span m="1949600">from</span> <span
  m="1949840">knowing</span> <span m="1950230">x.</span> <span
  m="1951070">If</span> <span m="1951220">I</span> <span m="1951340">know</span>
  <span m="1951520">the</span> <span m="1951640">answer</span> <span
  m="1951940">to</span> <span m="1952060">one</span> <span
  m="1952330">flip,</span> <span m="1953310">it</span> <span
  m="1953380">doesn't</span> <span m="1953710">tell</span> <span
  m="1953860">me</span> <span m="1954070">anything</span> <span
  m="1954340">about</span> <span m="1954520">the</span> <span
  m="1954640">second</span> <span m="1955120">if</span> <span
  m="1955240">they're</span> <span m="1955450">independent,</span> <span
  m="1958470">uncorrelated.</span></p><p><span m="1960090">But</span> <span
  m="1960300">if</span> <span m="1960480">the</span> <span
  m="1960600">two</span> <span m="1960840">coins</span> <span
  m="1961200">are</span> <span m="1961290">glued</span> <span
  m="1961620">together,</span> <span m="1962850">then</span> <span
  m="1965200">heads</span> <span m="1965590">will</span> <span
  m="1965750">come</span> <span m="1966020">up</span> <span
  m="1966770">for</span> <span m="1966950">both</span> <span
  m="1967250">coins.</span> <span m="1968510">I'll</span> <span
  m="1968940">only</span> <span m="1969170">have</span> <span
  m="1969380">two</span> <span m="1969560">possibilities.</span> <span
  m="1970420">It'll</span> <span m="1970700">be</span> <span
  m="1970880">heads</span> <span m="1971240">heads</span> <span
  m="1971960">or</span> <span m="1972080">tails</span> <span
  m="1972530">tails.</span> <span m="1973100">Let</span> <span
  m="1973250">me</span> <span m="1973580">let</span> <span m="1973730">me</span>
  <span m="1973880">write</span> <span m="1974120">down</span> <span
  m="1974970">those</span> <span m="1975290">two</span> <span
  m="1976220">different</span> <span m="1976610">scenarios.</span></p><p><span
  m="1978560">So</span> <span m="1978920">unglued--</span> <span
  m="1983070">I</span> <span m="1983190">never</span> <span
  m="1983460">expected</span> <span m="1983940">to</span> <span
  m="1984060">write</span> <span m="1984300">that</span> <span
  m="1984510">word</span> <span m="1985470">in</span> <span m="1985710">a</span>
  <span m="1985770">math</span> <span m="1986100">class--</span> <span
  m="1986920">unglued.</span> <span m="1990330">And</span> <span
  m="1990510">what</span> <span m="1990690">am</span> <span m="1990810">I</span>
  <span m="1990900">going</span> <span m="1990990">to</span> <span
  m="1991110">write</span> <span m="1991380">down?</span> <span
  m="1993150">I'm</span> <span m="1993330">going</span> <span
  m="1993510">to</span> <span m="1993630">write</span> <span
  m="1993930">down</span> <span m="1996930">a</span> <span
  m="1997020">matrix</span> <span m="1997830">with</span> <span
  m="1999000">heads,</span> <span m="2000020">tails</span> <span
  m="2001070">for</span> <span m="2002630">coin</span> <span
  m="2003030">1,</span> <span m="2004850">and</span> <span
  m="2005100">heads</span> <span m="2005940">and</span> <span
  m="2006090">tails</span> <span m="2006690">for</span> <span
  m="2006930">coin</span> <span m="2007260">2.</span></p><p><span
  m="2008380">So</span> <span m="2008550">the</span> <span
  m="2008670">possibilities</span> <span m="2009540">are</span> <span
  m="2010890">coin</span> <span m="2011190">one</span> <span
  m="2011490">get</span> <span m="2011820">heads</span> <span
  m="2012090">and</span> <span m="2012210">coin</span> <span
  m="2012540">2</span> <span m="2012750">gets</span> <span
  m="2013030">heads.</span> <span m="2013230">What's</span> <span
  m="2013560">the</span> <span m="2013650">probability</span> <span
  m="2014340">of</span> <span m="2014460">that?</span> <span
  m="2015440">This</span> <span m="2015680">is</span> <span
  m="2015860">the</span> <span m="2016020">unglued</span> <span
  m="2016650">case.</span> <span m="2017910">So</span> <span
  m="2018060">I'm</span> <span m="2018210">going</span> <span
  m="2018330">to</span> <span m="2018420">create</span> <span
  m="2018870">a</span> <span m="2018960">little</span> <span
  m="2019320">probability</span> <span m="2020160">matrix</span> <span
  m="2022200">of</span> <span m="2022440">joint</span> <span
  m="2022980">probabilities.</span> <span m="2023790">That's</span> <span
  m="2024090">really</span> <span m="2024510">the</span> <span
  m="2025200">key</span> <span m="2025590">word</span> <span
  m="2026010">that</span> <span m="2027570">I'm</span> <span
  m="2028230">discussing</span> <span m="2028890">here--</span> <span
  m="2029580">joint</span> <span m="2030150">probability.</span></p><p><span
  m="2034260">So</span> <span m="2034340">let's</span> <span
  m="2034580">complete</span> <span m="2035030">that</span> <span
  m="2035240">matrix.</span> <span m="2037580">So</span> <span
  m="2037840">I</span> <span m="2037960">have</span> <span
  m="2038380">unglued</span> <span m="2038860">coins,</span> <span
  m="2039430">independent</span> <span m="2039970">coins.</span> <span
  m="2040930">I</span> <span m="2041020">flip</span> <span
  m="2041320">them</span> <span m="2041470">both.</span> <span
  m="2042180">What</span> <span m="2042480">is</span> <span
  m="2042630">the</span> <span m="2042760">chances</span> <span
  m="2043240">of</span> <span m="2043360">getting</span> <span
  m="2043990">heads</span> <span m="2044350">on</span> <span
  m="2044500">both?</span> <span m="2046150">1/4.</span></p><p><span
  m="2048070">What</span> <span m="2048770">are</span> <span
  m="2048909">the</span> <span m="2049060">chances</span> <span
  m="2049630">of--</span> <span m="2049900">what</span> <span
  m="2050260">do</span> <span m="2050380">I</span> <span m="2050469">put</span>
  <span m="2050739">in</span> <span m="2050860">here?</span> <span
  m="2051949">This</span> <span m="2052090">means</span> <span
  m="2052510">heads</span> <span m="2052960">on</span> <span
  m="2053710">the</span> <span m="2053800">first</span> <span
  m="2054130">coin</span> <span m="2054580">and</span> <span
  m="2054730">tails</span> <span m="2055210">on</span> <span
  m="2055360">this</span> <span m="2055469">second</span> <span
  m="2055840">coin.</span> <span m="2056230">And</span> <span
  m="2056320">the</span> <span m="2056409">probability</span> <span
  m="2057100">of</span> <span m="2057219">that</span> <span
  m="2057489">is?</span> <span m="2058690">1/4.</span> <span
  m="2060670">And</span> <span m="2061659">1/4</span> <span
  m="2062170">here</span> <span m="2062679">and</span> <span
  m="2062830">1/4</span> <span m="2063400">here.</span></p><p><span
  m="2065090">So</span> <span m="2065239">I've</span> <span
  m="2065330">got</span> <span m="2065460">four</span> <span
  m="2065780">possibilities,</span> <span m="2067730">which</span> <span
  m="2067940">I</span> <span m="2068030">put</span> <span
  m="2068300">into</span> <span m="2068600">a</span> <span m="2068659">2</span>
  <span m="2068870">by</span> <span m="2069050">2</span> <span
  m="2069260">matrix,</span> <span m="2069770">instead</span> <span
  m="2070130">of</span> <span m="2070250">a</span> <span m="2070429">long</span>
  <span m="2070909">vector.</span> <span m="2072080">My</span> <span
  m="2072500">four</span> <span m="2072800">possibilities</span> <span
  m="2073580">are</span> <span m="2073730">heads</span> <span
  m="2074090">heads,</span> <span m="2074570">heads</span> <span
  m="2075409">tails,</span> <span m="2076250">tails</span> <span
  m="2076670">heads,</span> <span m="2077130">and</span> <span
  m="2077150">tails</span> <span m="2077540">tails.</span> <span
  m="2078350">And</span> <span m="2078469">they</span> <span
  m="2078620">have</span> <span m="2078800">equal</span> <span
  m="2079159">probability--</span> <span m="2079909">1/4.</span></p><p><span
  m="2080900">But</span> <span m="2081080">now,</span> <span
  m="2081350">if</span> <span m="2081500">they're</span> <span
  m="2081650">glued,</span> <span m="2085770">heads</span> <span
  m="2086159">and</span> <span m="2086310">tails</span> <span
  m="2086820">on</span> <span m="2086969">the</span> <span
  m="2087030">first</span> <span m="2087420">coin,</span> <span
  m="2094409">heads</span> <span m="2094739">and</span> <span
  m="2094860">tails</span> <span m="2095310">on</span> <span
  m="2095489">the</span> <span m="2095610">second</span> <span
  m="2096060">coin,</span> <span m="2098010">now</span> <span
  m="2098460">what</span> <span m="2099060">do</span> <span m="2099210">I</span>
  <span m="2099330">put</span> <span m="2099570">in</span> <span
  m="2099690">there?</span> <span m="2101340">So</span> <span
  m="2101550">the</span> <span m="2101670">two</span> <span
  m="2101850">coins</span> <span m="2102270">are</span> <span
  m="2102390">glued</span> <span m="2102720">together.</span> <span
  m="2103350">What</span> <span m="2103590">is</span> <span
  m="2103770">the</span> <span m="2103860">chance</span> <span
  m="2104400">that</span> <span m="2104580">they</span> <span
  m="2104730">both</span> <span m="2105150">come</span> <span
  m="2105390">up</span> <span m="2105580">heads?</span> <span
  m="2110160">1/2.</span> <span m="2112365">Because</span> <span
  m="2112860">if</span> <span m="2112980">one</span> <span
  m="2113250">comes</span> <span m="2113550">up</span> <span
  m="2113700">heads,</span> <span m="2114840">the</span> <span
  m="2114960">other</span> <span m="2115170">one</span> <span
  m="2115620">is</span> <span m="2115830">glued</span> <span
  m="2116160">to</span> <span m="2116370">it.</span> <span m="2116490">It</span>
  <span m="2116610">will</span> <span m="2116850">also.</span></p><p><span
  m="2118140">What's</span> <span m="2118410">the</span> <span
  m="2118860">probability</span> <span m="2119670">of</span> <span
  m="2120540">heads</span> <span m="2121030">tails,</span> <span
  m="2121720">heads</span> <span m="2121950">on</span> <span
  m="2122130">one,</span> <span m="2122370">tails</span> <span
  m="2122760">on</span> <span m="2122910">the</span> <span
  m="2123060">other,</span> <span m="2123330">is</span> <span
  m="2123870">of</span> <span m="2123990">course?</span></p><p><span
  m="2124410">AUDIENCE:</span> <span m="2124557">Zero.</span></p><p><span
  m="2125000">GILBERT STRANG:</span> <span m="2125155">Zero,</span> <span
  m="2125310">thanks.</span> <span m="2126510">And</span> <span
  m="2126690">here,</span> <span m="2126930">zero.</span> <span
  m="2127940">And</span> <span m="2128100">here,</span> <span
  m="2128280">1/2.</span> <span m="2129870">So</span> <span
  m="2129990">what</span> <span m="2130170">I've</span> <span
  m="2130320">created</span> <span m="2130860">are</span> <span
  m="2131010">those</span> <span m="2131340">two</span> <span
  m="2135390">setups,</span> <span m="2136890">two</span> <span
  m="2137070">different</span> <span m="2137430">scenarios</span> <span
  m="2139140">of</span> <span m="2139380">unglued</span> <span
  m="2140160">and</span> <span m="2140340">glued.</span> <span
  m="2143340">But</span> <span m="2143640">each</span> <span
  m="2145830">experimental</span> <span m="2146910">setup</span> <span
  m="2147900">has</span> <span m="2148170">its</span> <span
  m="2149370">matrix</span> <span m="2150060">of</span> <span
  m="2150210">joint</span> <span m="2150570">probabilities.</span></p><p><span
  m="2153630">That's</span> <span m="2154080">the</span> <span
  m="2154170">thing</span> <span m="2154450">that</span> <span
  m="2154730">there</span> <span m="2154920">are</span> <span
  m="2155040">four</span> <span m="2155490">numbers</span> <span
  m="2156000">here,</span> <span m="2156740">four</span> <span
  m="2157050">numbers.</span> <span m="2158400">We</span> <span
  m="2158580">have</span> <span m="2159060">all</span> <span
  m="2159450">possibilities.</span> <span m="2161250">We</span> <span
  m="2161400">have</span> <span m="2161670">any</span> <span
  m="2163200">possible</span> <span m="2163740">x</span> <span
  m="2164310">and</span> <span m="2164880">at</span> <span
  m="2165060">the</span> <span m="2165150">same</span> <span
  m="2165510">time</span> <span m="2165870">any</span> <span
  m="2166080">possible</span> <span m="2166620">y.</span></p><p><span
  m="2168420">So</span> <span m="2168660">suppose</span> <span
  m="2170460">we</span> <span m="2170640">were</span> <span
  m="2170820">running</span> <span m="2171300">three</span> <span
  m="2171720">experiments.</span> <span m="2179020">So</span> <span
  m="2179230">what</span> <span m="2179440">would</span> <span
  m="2179620">be</span> <span m="2179860">the</span> <span
  m="2180730">what</span> <span m="2180910">would</span> <span
  m="2181090">be</span> <span m="2181360">the</span> <span
  m="2181750">situation</span> <span m="2182590">if</span> <span
  m="2182740">I</span> <span m="2182830">was</span> <span
  m="2183040">running</span> <span m="2183460">three</span> <span
  m="2183970">experiments</span> <span m="2185260">with</span> <span
  m="2186880">three</span> <span m="2187180">independent,</span> <span
  m="2187810">fair</span> <span m="2188140">coins.</span> <span
  m="2190510">I'd</span> <span m="2190630">be</span> <span m="2190810">in</span>
  <span m="2190930">this</span> <span m="2191200">unglued</span> <span
  m="2191890">picture.</span> <span m="2193210">But</span> <span
  m="2193450">I</span> <span m="2193600">would</span> <span
  m="2193810">have</span> <span m="2194170">three</span> <span
  m="2196290">different</span> <span m="2196830">experiments</span> <span
  m="2197550">that</span> <span m="2197700">I'm</span> <span
  m="2197880">running.</span> <span m="2199170">Then</span> <span
  m="2202320">what</span> <span m="2202560">would</span> <span
  m="2202740">I</span> <span m="2202830">be</span> <span
  m="2202980">looking</span> <span m="2203400">at</span> <span
  m="2203730">then?</span> <span m="2204540">Just</span> <span
  m="2205440">the</span> <span m="2205590">whole</span> <span
  m="2205830">idea</span> <span m="2206180">is</span> <span
  m="2206340">to</span> <span m="2206490">see</span> <span
  m="2206910">what</span> <span m="2207300">is</span> <span
  m="2207510">this</span> <span m="2208710">like</span> <span
  m="2209520">joint</span> <span m="2210180">probability.</span></p><p><span
  m="2211590">So</span> <span m="2211800">suppose</span> <span
  m="2212430">I</span> <span m="2212580">have</span> <span
  m="2212880">three</span> <span m="2213270">coins</span> <span
  m="2216090">unglued.</span> <span m="2221170">Then</span> <span
  m="2222160">I</span> <span m="2222310">want</span> <span m="2222520">to</span>
  <span m="2222610">know</span> <span m="2222850">like</span> <span
  m="2223290">the</span> <span m="2223390">probability</span> <span
  m="2224890">of</span> <span m="2225040">getting</span> <span
  m="2225490">heads</span> <span m="2226240">on</span> <span
  m="2226360">the</span> <span m="2226450">first,</span> <span
  m="2226930">heads</span> <span m="2227290">on</span> <span
  m="2227440">the</span> <span m="2227560">second,</span> <span
  m="2228010">heads</span> <span m="2228340">on</span> <span
  m="2228490">the</span> <span m="2228580">third.</span> <span
  m="2229660">Will</span> <span m="2229870">be</span> <span
  m="2230090">what?</span> <span m="2230500">Just</span> <span
  m="2231430">give</span> <span m="2231610">me</span> <span
  m="2231760">that</span> <span m="2231970">number.</span> <span
  m="2233430">What</span> <span m="2233640">will</span> <span
  m="2233850">be</span> <span m="2233970">the</span> <span
  m="2234100">probability</span> <span m="2235050">that</span> <span
  m="2235290">all</span> <span m="2235500">three</span> <span
  m="2235860">of</span> <span m="2235980">them</span> <span
  m="2236190">independently</span> <span m="2236880">come</span> <span
  m="2237120">up</span> <span m="2237270">heads?</span></p><p><span
  m="2238125">AUDIENCE:</span> <span m="2238312">1/8.</span></p><p><span
  m="2238500">GILBERT STRANG:</span> <span m="2238605">1/8,</span> <span
  m="2239440">OK.</span> <span m="2240540">But</span> <span
  m="2240720">now</span> <span m="2241140">my</span> <span
  m="2241350">question</span> <span m="2241940">is--</span> <span
  m="2243480">so</span> <span m="2245700">what</span> <span
  m="2245890">do</span> <span m="2246100">I</span> <span
  m="2246220">have?</span> <span m="2247280">Then</span> <span
  m="2247510">I</span> <span m="2247590">have</span> <span
  m="2247870">probability</span> <span m="2248500">of</span> <span
  m="2248650">heads,</span> <span m="2249890">of,</span> <span
  m="2250210">say,</span> <span m="2250510">tails</span> <span
  m="2251080">heads</span> <span m="2251410">heads.</span> <span
  m="2253540">I've</span> <span m="2253720">got</span> <span
  m="2254020">three</span> <span m="2254560">indices</span> <span
  m="2255190">here</span> <span m="2255640">and</span> <span
  m="2255940">eventually</span> <span m="2256480">down</span> <span
  m="2256810">the</span> <span m="2257350">probability</span> <span
  m="2258040">of</span> <span m="2258160">tails</span> <span
  m="2258670">tails</span> <span m="2259030">tails.</span> <span
  m="2259750">Everybody</span> <span m="2260200">sees</span> <span
  m="2260500">that</span> <span m="2261190">the</span> <span
  m="2261880">numbers</span> <span m="2262360">are</span> <span
  m="2262450">going</span> <span m="2262640">to</span> <span
  m="2262690">be</span> <span m="2262840">1/8.</span></p><p><span
  m="2263530">But</span> <span m="2265950">where</span> <span
  m="2266200">do</span> <span m="2266290">those</span> <span
  m="2266620">fit</span> <span m="2266890">in?</span> <span
  m="2269940">They</span> <span m="2269990">don't</span> <span
  m="2270230">fit</span> <span m="2270470">in</span> <span m="2270620">a</span>
  <span m="2270680">matrix,</span> <span m="2271250">because</span> <span
  m="2271460">I've</span> <span m="2271580">got</span> <span
  m="2271800">3</span> <span m="2274460">indices</span> <span
  m="2275120">here.</span> <span m="2276440">So</span> <span
  m="2276590">I</span> <span m="2276680">guess</span> <span
  m="2276960">what</span> <span m="2277250">we're</span> <span
  m="2277430">seeing,</span> <span m="2277910">I</span> <span
  m="2278030">sort</span> <span m="2278270">of</span> <span
  m="2278330">realized</span> <span m="2278870">today,</span> <span
  m="2279710">we're</span> <span m="2279890">seeing</span> <span
  m="2280220">for</span> <span m="2280370">the</span> <span
  m="2280490">first</span> <span m="2280790">time</span> <span
  m="2281570">a</span> <span m="2281630">tensor.</span></p><p><span
  m="2282570">A</span> <span m="2282970">tensor</span> <span
  m="2283550">is</span> <span m="2283790">a</span> <span
  m="2283880">three-way</span> <span m="2289290">structure,</span> <span
  m="2289860">three-way</span> <span m="2290700">matrix</span> <span
  m="2291420">you</span> <span m="2291540">could</span> <span
  m="2291750">say.</span> <span m="2292830">So</span> <span m="2295610">I</span>
  <span m="2296060">guess</span> <span m="2296300">I</span> <span
  m="2296450">think</span> <span m="2296810">of</span> <span
  m="2298100">this</span> <span m="2298670">instead</span> <span
  m="2299150">of</span> <span m="2299300">a</span> <span
  m="2299720">square</span> <span m="2300860">like</span> <span
  m="2301130">that,</span> <span m="2303760">an</span> <span
  m="2303880">ordinary</span> <span m="2304330">matrix,</span> <span
  m="2305380">I</span> <span m="2305530">have</span> <span m="2305710">to</span>
  <span m="2305830">think</span> <span m="2306220">of</span> <span
  m="2306670">a</span> <span m="2306970">cube,</span> <span
  m="2307660">right?</span> <span m="2308110">I</span> <span
  m="2308200">have</span> <span m="2308350">a</span> <span
  m="2308410">cube</span> <span m="2308980">with</span> <span
  m="2311230">two</span> <span m="2312040">rows,</span> <span
  m="2312710">two</span> <span m="2312880">columns,</span> <span
  m="2313570">and</span> <span m="2313720">two</span> <span
  m="2316180">whatevers.</span> <span m="2319610">Layer,</span> <span
  m="2320220">somebody</span> <span m="2320850">might</span> <span
  m="2321300">say</span> <span m="2321540">layers</span> <span
  m="2322500">for</span> <span m="2322710">that.</span></p><p><span
  m="2323160">You</span> <span m="2323280">see</span> <span
  m="2323580">that</span> <span m="2324240">the</span> <span
  m="2324420">matrix</span> <span m="2325510">has</span> <span
  m="2326790">become</span> <span m="2327300">a</span> <span
  m="2335250">three-way</span> <span m="2335850">thing,</span> <span
  m="2336170">a</span> <span m="2336240">tensor.</span> <span
  m="2338000">And</span> <span m="2338690">the</span> <span
  m="2339050">entries</span> <span m="2339680">in</span> <span
  m="2339920">that</span> <span m="2340310">tensor--</span> <span
  m="2341330">so</span> <span m="2341540">it's</span> <span m="2341720">2</span>
  <span m="2341930">by</span> <span m="2342140">2</span> <span
  m="2342320">by</span> <span m="2342530">2.</span> <span m="2346580">But</span>
  <span m="2347040">instead</span> <span m="2347600">of</span> <span
  m="2347720">m</span> <span m="2347990">by</span> <span m="2348260">n</span>
  <span m="2348560">for</span> <span m="2348740">a</span> <span
  m="2348830">matrix,</span> <span m="2349480">I</span> <span
  m="2349580">have</span> <span m="2349820">to</span> <span
  m="2349940">give</span> <span m="2350180">you</span> <span
  m="2350450">the</span> <span m="2350570">number</span> <span
  m="2351020">of</span> <span m="2351230">rows,</span> <span
  m="2351890">the</span> <span m="2351970">number</span> <span
  m="2352220">of</span> <span m="2352340">columns,</span> <span
  m="2352880">and</span> <span m="2353000">the</span> <span
  m="2353090">number</span> <span m="2353450">of</span> <span
  m="2353900">layers</span> <span m="2354500">going</span> <span
  m="2355280">into</span> <span m="2355550">the</span> <span
  m="2355670">board.</span> <span m="2357200">So</span> <span
  m="2358050">rows</span> <span m="2358610">going</span> <span
  m="2358910">one</span> <span m="2359210">way--</span> <span
  m="2360310">you</span> <span m="2360470">know,</span> <span
  m="2360920">columns,</span> <span m="2361500">rows,</span> <span
  m="2361820">and</span> <span m="2361940">then</span> <span
  m="2362840">layers</span> <span m="2363620">are</span> <span
  m="2364790">going</span> <span m="2365150">in</span> <span
  m="2365510">deep.</span></p><p><span m="2366110">So</span> <span
  m="2366710">it</span> <span m="2366890">will</span> <span
  m="2367070">have</span> <span m="2367280">eight</span> <span
  m="2367520">entries.</span> <span m="2369800">And,</span> <span
  m="2369980">of</span> <span m="2370100">course,</span> <span
  m="2371030">in</span> <span m="2371180">this</span> <span
  m="2373850">simple</span> <span m="2374240">case</span> <span
  m="2375140">each</span> <span m="2375560">will</span> <span
  m="2375770">be</span> <span m="2377270">1/8</span> <span m="2378110">in</span>
  <span m="2381770">that</span> <span m="2382040">unglued,</span> <span
  m="2382970">totally</span> <span m="2383420">independent</span> <span
  m="2384020">way.</span></p><p><span m="2384990">But</span> <span
  m="2385860">then</span> <span m="2386420">you</span> <span
  m="2386750">can</span> <span m="2386960">imagine</span> <span
  m="2387710">some</span> <span m="2388010">dependence.</span> <span
  m="2390110">So</span> <span m="2390230">what</span> <span
  m="2390410">would</span> <span m="2390590">happen</span> <span
  m="2390920">if</span> <span m="2391070">I</span> <span
  m="2391220">glued</span> <span m="2391850">coins</span> <span
  m="2392420">1</span> <span m="2392690">and</span> <span m="2392900">3?</span>
  <span m="2396860">I</span> <span m="2396980">would</span> <span
  m="2397160">still</span> <span m="2397520">have</span> <span
  m="2397760">a</span> <span m="2398180">tensor,</span> <span
  m="2398830">still</span> <span m="2399140">have</span> <span
  m="2399320">a</span> <span m="2399410">2</span> <span m="2399680">by</span>
  <span m="2399860">2</span> <span m="2400130">by</span> <span
  m="2400310">2</span> <span m="2401090">tensor</span> <span
  m="2401460">of</span> <span m="2402200">all</span> <span
  m="2402610">the</span> <span m="2402890">possibilities.</span> <span
  m="2406090">But</span> <span m="2406330">some</span> <span
  m="2406600">of</span> <span m="2406660">those</span> <span
  m="2407140">are</span> <span m="2407230">going</span> <span
  m="2407370">to</span> <span m="2407500">have</span> <span
  m="2407800">probability</span> <span m="2408580">zero,</span> <span
  m="2409090">the</span> <span m="2409240">joint</span> <span
  m="2409570">probability.</span> <span m="2410620">If</span> <span
  m="2410800">I've</span> <span m="2411100">glued</span> <span
  m="2411580">coin</span> <span m="2411910">1</span> <span m="2412150">to</span>
  <span m="2412300">coin</span> <span m="2412690">3,</span> <span
  m="2413620">then</span> <span m="2414280">the</span> <span
  m="2414640">probability</span> <span m="2415390">of</span> <span
  m="2415930">jointly</span> <span m="2416500">seeing</span> <span
  m="2417610">heads</span> <span m="2418060">on</span> <span
  m="2418270">one,</span> <span m="2419440">whatever</span> <span
  m="2419950">on</span> <span m="2420160">two,</span> <span
  m="2421300">tails</span> <span m="2421840">on</span> <span
  m="2422020">3</span> <span m="2422530">will</span> <span m="2422770">be</span>
  <span m="2424310">0,</span> <span m="2424800">right?</span> <span
  m="2425280">Because</span> <span m="2426360">that</span> <span
  m="2426570">can't</span> <span m="2426900">happen</span> <span
  m="2427530">if</span> <span m="2427680">I've</span> <span
  m="2427890">glued</span> <span m="2428370">coins</span> <span
  m="2428790">1</span> <span m="2429000">and</span> <span
  m="2429120">3.</span></p><p><span m="2429830">So</span> <span
  m="2429910">I'll</span> <span m="2430050">have</span> <span
  m="2430200">eight</span> <span m="2430440">entries</span> <span
  m="2430950">in</span> <span m="2431130">here.</span> <span
  m="2434610">This</span> <span m="2434880">is</span> <span
  m="2435060">the</span> <span m="2435330">unglued</span> <span
  m="2435960">case.</span> <span m="2439260">And</span> <span
  m="2439420">then</span> <span m="2439630">I</span> <span
  m="2439750">could</span> <span m="2439960">have</span> <span
  m="2440290">a</span> <span m="2440380">case</span> <span
  m="2440770">where</span> <span m="2440950">two</span> <span
  m="2441370">coins</span> <span m="2441910">are</span> <span
  m="2442050">glued.</span> <span m="2445690">And</span> <span
  m="2445930">as</span> <span m="2446140">I</span> <span m="2446260">say,</span>
  <span m="2446560">I</span> <span m="2446710">think</span> <span
  m="2451290">I'd</span> <span m="2451700">1/4</span> <span
  m="2452590">four</span> <span m="2452920">times</span> <span
  m="2453460">probably.</span></p><p><span m="2459030">And</span> <span
  m="2459180">then</span> <span m="2459360">if</span> <span m="2459510">I</span>
  <span m="2459630">had</span> <span m="2459840">any</span> <span
  m="2460080">spare</span> <span m="2460470">glue,</span> <span
  m="2463470">I</span> <span m="2463590">glue</span> <span
  m="2463950">all</span> <span m="2464160">three</span> <span
  m="2464520">coins.</span> <span m="2467800">I</span> <span
  m="2467920">flip</span> <span m="2468370">that</span> <span
  m="2469650">stuck</span> <span m="2470040">together</span> <span
  m="2470550">thing,</span> <span m="2472740">and</span> <span
  m="2472890">I</span> <span m="2473010">never</span> <span
  m="2473370">get</span> <span m="2473790">heads</span> <span
  m="2474180">tails</span> <span m="2474570">heads.</span> <span
  m="2476040">Only</span> <span m="2476370">possibilities</span> <span
  m="2477340">I</span> <span m="2477630">get</span> <span m="2477990">our</span>
  <span m="2478200">heads</span> <span m="2478530">heads</span> <span
  m="2478770">heads</span> <span m="2479700">and</span> <span
  m="2479820">tails,</span> <span m="2480280">tails,</span> <span
  m="2480580">tails,</span> <span m="2481080">because</span> <span
  m="2481350">they're</span> <span m="2481560">glued</span> <span
  m="2481860">together.</span></p><p><span m="2482730">So</span> <span
  m="2482940">what</span> <span m="2483270">would</span> <span
  m="2483510">be</span> <span m="2485220">the</span> <span
  m="2485430">situation</span> <span m="2486360">for</span> <span
  m="2486580">three</span> <span m="2486960">coins</span> <span
  m="2487530">glued?</span> <span m="2491540">What</span> <span
  m="2491730">will</span> <span m="2491910">be</span> <span
  m="2492090">the</span> <span m="2492270">entries</span> <span
  m="2492930">in</span> <span m="2493260">the</span> <span m="2495390">in</span>
  <span m="2495570">the</span> <span m="2495660">matrix</span> <span
  m="2496170">of</span> <span m="2496290">joint</span> <span
  m="2496680">probabilities?</span> <span m="2497650">What</span> <span
  m="2497730">will</span> <span m="2497820">be</span> <span
  m="2498030">the</span> <span m="2498180">joint</span> <span
  m="2498510">probability?</span> <span m="2499230">So</span> <span
  m="2499440">the</span> <span m="2500280">probability</span> <span
  m="2500940">of</span> <span m="2501060">heads</span> <span
  m="2501420">heads</span> <span m="2501750">heads,</span> <span
  m="2502170">of</span> <span m="2502290">seeing</span> <span
  m="2502950">heads</span> <span m="2503310">from</span> <span
  m="2503550">all</span> <span m="2503730">three</span> <span
  m="2504120">will</span> <span m="2504330">be?</span></p><p><span
  m="2505250">AUDIENCE:</span> <span m="2505485">1/2.</span></p><p><span
  m="2506190">GILBERT STRANG:</span> <span m="2506428">1/2.</span> <span
  m="2507620">1/2.</span> <span m="2507920">Because</span> <span
  m="2508160">I'm</span> <span m="2508310">flipping</span> <span
  m="2508730">this</span> <span m="2508970">heavy</span> <span
  m="2510110">mix</span> <span m="2510590">of</span> <span
  m="2510710">three</span> <span m="2511190">coins</span> <span
  m="2511580">together,</span> <span m="2513020">I</span> <span
  m="2513110">get</span> <span m="2513560">1/2</span> <span
  m="2515850">twice.</span> <span m="2521070">Actually,</span> <span
  m="2522700">this</span> <span m="2522930">is</span> <span m="2523120">a</span>
  <span m="2523290">good</span> <span m="2524610">introduction</span> <span
  m="2525330">to</span> <span m="2525510">tensors</span> <span
  m="2526170">in</span> <span m="2526290">a</span> <span m="2526350">way,</span>
  <span m="2527100">because</span> <span m="2527550">the</span> <span
  m="2528030">first</span> <span m="2528330">step</span> <span
  m="2528960">in</span> <span m="2529140">understanding</span> <span
  m="2529920">tensor</span> <span m="2530430">is</span> <span
  m="2530760">to</span> <span m="2531540">think</span> <span
  m="2531930">of</span> <span m="2532920">three-way</span> <span
  m="2533520">matrices,</span> <span m="2535250">think</span> <span
  m="2535520">of</span> <span m="2535670">three-way</span> <span
  m="2536330">things.</span> <span m="2538090">We</span> <span
  m="2538670">just</span> <span m="2538880">haven't</span> <span
  m="2539150">done</span> <span m="2539360">that.</span> <span
  m="2540440">And</span> <span m="2540560">now</span> <span
  m="2540800">we</span> <span m="2541040">have</span> <span
  m="2541340">to</span> <span m="2541490">do</span> <span
  m="2541700">it.</span></p><p><span m="2542010">And,</span> <span
  m="2542090">of</span> <span m="2542210">course,</span> <span
  m="2543020">four-way</span> <span m="2544200">or</span> <span
  m="2544450">n-way</span> <span m="2545780">tensors</span> <span
  m="2546920">are</span> <span m="2548350">now</span> <span
  m="2549160">understood.</span> <span m="2550840">So</span> <span
  m="2552130">these</span> <span m="2552460">are</span> <span
  m="2552880">tensors</span> <span m="2553420">with</span> <span
  m="2554200">very</span> <span m="2554530">special,</span> <span
  m="2555070">simple</span> <span m="2555850">things.</span></p><p><span
  m="2557080">So</span> <span m="2557560">now,</span> <span m="2557890">I</span>
  <span m="2558280">have</span> <span m="2558730">to</span> <span
  m="2558880">say,</span> <span m="2560730">what</span> <span
  m="2561000">is</span> <span m="2561480">the</span> <span
  m="2561630">covariance</span> <span m="2562410">matrix?</span> <span
  m="2564120">What's</span> <span m="2564390">the</span> <span
  m="2564480">covariance</span> <span m="2565170">matrix?</span> <span
  m="2566340">So</span> <span m="2566370">now</span> <span
  m="2566730">I'm</span> <span m="2567600">ready</span> <span
  m="2567900">for</span> <span m="2568080">that,</span> <span
  m="2568350">and</span> <span m="2568440">I'll</span> <span
  m="2568560">put</span> <span m="2568800">it</span> <span
  m="2568920">here.</span> <span m="2569700">That's</span> <span
  m="2569980">the</span> <span m="2570870">final</span> <span
  m="2571290">topic</span> <span m="2571740">for</span> <span
  m="2571980">today.</span></p><p><span m="2575920">So</span> <span
  m="2576160">the</span> <span m="2576290">covariance</span> <span
  m="2577180">matrix.</span> <span m="2584330">So</span> <span
  m="2584430">I'm</span> <span m="2584580">saying</span> <span
  m="2584850">matrix,</span> <span m="2586720">because</span> <span
  m="2586990">I'm</span> <span m="2587170">just</span> <span
  m="2587410">going</span> <span m="2587550">to</span> <span
  m="2587670">have--</span> <span m="2588485">yeah,</span> <span
  m="2588900">the</span> <span m="2589120">covariance</span> <span
  m="2589720">matrix.</span> <span m="2590560">Yeah,</span> <span
  m="2591160">it's</span> <span m="2591340">going</span> <span
  m="2591580">to</span> <span m="2591670">be</span> <span m="2593740">2</span>
  <span m="2593950">by</span> <span m="2594160">2</span> <span
  m="2597410">for</span> <span m="2598010">two</span> <span
  m="2598220">coins.</span> <span m="2600200">So</span> <span
  m="2600530">it</span> <span m="2600740">is</span> <span m="2600950">a</span>
  <span m="2601010">matrix.</span> <span m="2602420">For</span> <span
  m="2602570">three</span> <span m="2602870">coins,</span> <span
  m="2605580">it</span> <span m="2605600">will</span> <span
  m="2605780">be</span> <span m="2605990">3</span> <span m="2606290">by</span>
  <span m="2606500">3.</span> <span m="2607340">But</span> <span
  m="2607580">it</span> <span m="2607700">is</span> <span m="2607910">a</span>
  <span m="2607970">matrix.</span></p><p><span m="2610580">So</span> <span
  m="2611090">how</span> <span m="2611330">is</span> <span m="2611480">it</span>
  <span m="2611570">defined?</span> <span m="2612630">And</span> <span
  m="2612680">what</span> <span m="2612860">am</span> <span m="2613010">I</span>
  <span m="2613070">going</span> <span m="2613310">to</span> <span
  m="2613370">call</span> <span m="2613600">it?</span> <span
  m="2613800">I</span> <span m="2613850">think</span> <span
  m="2614090">I'll</span> <span m="2614270">call</span> <span
  m="2614460">v,</span> <span m="2616730">because</span> <span
  m="2617930">really</span> <span m="2618350">the</span> <span
  m="2618620">key</span> <span m="2618950">ideas</span> <span
  m="2619610">variance.</span> <span m="2621160">Covariance</span> <span
  m="2622150">is</span> <span m="2623950">telling</span> <span
  m="2624400">us</span> <span m="2624610">that</span> <span
  m="2624820">we're</span> <span m="2625060">also</span> <span
  m="2625480">interested</span> <span m="2626080">in</span> <span
  m="2628400">the</span> <span m="2630620">joint</span> <span
  m="2632180">outcome,</span> <span m="2633590">an</span> <span
  m="2633770">x</span> <span m="2634100">and</span> <span m="2634310">y.</span>
  <span m="2635010">So</span> <span m="2637460">it's</span> <span
  m="2637880">a</span> <span m="2637940">variance.</span></p><p><span
  m="2639560">So</span> <span m="2639680">I'm</span> <span
  m="2639830">going</span> <span m="2640010">to</span> <span
  m="2640070">add</span> <span m="2640340">up</span> <span
  m="2641970">over</span> <span m="2642520">all</span> <span
  m="2643180">plausible</span> <span m="2644600">i</span> <span
  m="2645050">and</span> <span m="2645260">j--</span> <span
  m="2649570">sorry,</span> <span m="2649960">all</span> <span
  m="2650320">possible</span> <span m="2651580">outcomes.</span> <span
  m="2653580">Yeah,</span> <span m="2654110">that's</span> <span
  m="2654380">not</span> <span m="2654790">right.</span> <span
  m="2657700">All</span> <span m="2658210">possible</span> <span
  m="2659530">xi</span> <span m="2661210">and</span> <span
  m="2663070">yj.</span> <span m="2664070">So</span> <span
  m="2664420">I'm</span> <span m="2664540">running</span> <span
  m="2665830">these</span> <span m="2666010">two</span> <span
  m="2666250">experiments</span> <span m="2666910">at</span> <span
  m="2667030">the</span> <span m="2667150">same</span> <span
  m="2667480">time.</span> <span m="2668350">From</span> <span
  m="2668590">experiment</span> <span m="2669130">1,</span> <span
  m="2669700">the</span> <span m="2669850">output's</span> <span
  m="2670330">an</span> <span m="2670450">x.</span> <span
  m="2671200">From</span> <span m="2671350">experiment</span> <span
  m="2671920">2,</span> <span m="2672280">the</span> <span
  m="2672400">output's</span> <span m="2672870">a</span> <span
  m="2672940">y.</span></p><p><span m="2674200">Then</span> <span
  m="2675640">what</span> <span m="2676060">is</span> <span
  m="2676460">Pij?</span> <span m="2680530">What</span> <span
  m="2680740">does</span> <span m="2680920">that</span> <span
  m="2681790">symbol</span> <span m="2682210">mean?</span> <span
  m="2684610">That's</span> <span m="2685390">the</span> <span
  m="2685540">guy</span> <span m="2686050">in</span> <span
  m="2686230">our</span> <span m="2686500">2</span> <span m="2686800">by</span>
  <span m="2687010">2</span> <span m="2687250">matrix,</span> <span
  m="2689140">like</span> <span m="2689350">that</span> <span
  m="2689590">one</span> <span m="2690370">or</span> <span
  m="2690610">that</span> <span m="2690820">one,</span> <span
  m="2692140">depending</span> <span m="2692680">on</span> <span
  m="2692950">the</span> <span m="2694150">gluing</span> <span
  m="2694660">or</span> <span m="2694750">not</span> <span
  m="2695080">gluing.</span> <span m="2696480">So</span> <span
  m="2696660">Pij,</span> <span m="2698440">let</span> <span
  m="2698620">me</span> <span m="2699040">say</span> <span
  m="2699340">what</span> <span m="2699550">it</span> <span
  m="2699670">is.</span> <span m="2699880">This</span> <span
  m="2700060">is</span> <span m="2700270">the</span> <span
  m="2701230">probability</span> <span m="2703540">that</span> <span
  m="2704020">x</span> <span m="2705310">is</span> <span m="2706900">xi</span>
  <span m="2708100">and</span> <span m="2708250">that</span> <span
  m="2708370">the</span> <span m="2708670">second</span> <span
  m="2709090">output</span> <span m="2709540">that</span> <span
  m="2709870">this</span> <span m="2710170">is</span> <span
  m="2710470">yj.</span></p><p><span m="2714320">Let</span> <span
  m="2714500">me</span> <span m="2714680">give</span> <span
  m="2714890">you</span> <span m="2714950">a</span> <span
  m="2715100">second</span> <span m="2715550">example</span> <span
  m="2716060">to</span> <span m="2716180">keep</span> <span
  m="2716450">in</span> <span m="2716570">mind.</span> <span
  m="2717440">Suppose</span> <span m="2717860">I'm</span> <span
  m="2718040">looking</span> <span m="2718430">at</span> <span
  m="2718610">age</span> <span m="2719690">and</span> <span
  m="2719840">height.</span> <span m="2721150">So</span> <span
  m="2721360">suppose</span> <span m="2722020">x</span> <span
  m="2722500">is</span> <span m="2722770">the</span> <span
  m="2722950">age</span> <span m="2723580">of</span> <span
  m="2725020">the</span> <span m="2725320">sample,</span> <span
  m="2727000">the</span> <span m="2727090">person.</span> <span
  m="2728380">And</span> <span m="2728590">y</span> <span m="2729010">is</span>
  <span m="2729190">the</span> <span m="2729340">height.</span> <span
  m="2734430">I</span> <span m="2734610">want</span> <span m="2734880">to</span>
  <span m="2735460">know</span> <span m="2736000">so</span> <span
  m="2736230">what</span> <span m="2736530">fraction</span> <span
  m="2737790">have</span> <span m="2738390">a</span> <span
  m="2738810">certain</span> <span m="2739200">age</span> <span
  m="2739470">and</span> <span m="2739620">a</span> <span
  m="2739680">certain</span> <span m="2740010">height.</span> <span
  m="2741230">I'm</span> <span m="2741630">looking</span> <span
  m="2741960">at</span> <span m="2742050">every</span> <span
  m="2742350">pair,</span> <span m="2742860">age</span> <span
  m="2743760">and</span> <span m="2743910">height.</span> <span
  m="2744300">Age</span> <span m="2745260">11,</span> <span
  m="2745800">height</span> <span m="2746810">4</span> <span
  m="2746970">feet.</span> <span m="2747690">Age</span> <span
  m="2748090">12,</span> <span m="2748620">height</span> <span
  m="2748950">5</span> <span m="2749370">feet.</span> <span
  m="2749760">Age</span> <span m="2750060">11,</span> <span
  m="2750540">height</span> <span m="2752100">5</span> <span
  m="2752430">feet.</span> <span m="2752940">Each</span> <span
  m="2753510">combination.</span> <span m="2755060">So</span> <span
  m="2755160">Pij</span> <span m="2755880">is</span> <span
  m="2756030">the</span> <span m="2756150">probability</span> <span
  m="2757260">that</span> <span m="2757470">these</span> <span
  m="2757770">will</span> <span m="2757920">both</span> <span
  m="2758310">happen,</span> <span m="2759450">both.</span></p><p><span
  m="2767570">I'm</span> <span m="2767750">going</span> <span
  m="2767930">to</span> <span m="2768530">add</span> <span
  m="2768870">more</span> <span m="2769040">to</span> <span
  m="2769280">it</span> <span m="2769400">here.</span> <span
  m="2770470">But</span> <span m="2771260">that</span> <span
  m="2771470">joint</span> <span m="2771860">probability</span> <span
  m="2772610">is</span> <span m="2772820">really</span> <span
  m="2773180">important.</span> <span m="2774290">So</span> <span
  m="2774530">I'm</span> <span m="2774710">going</span> <span
  m="2774830">to</span> <span m="2774980">ask</span> <span
  m="2775400">you</span> <span m="2775520">more</span> <span
  m="2775820">about</span> <span m="2776090">that.</span></p><p><span
  m="2776900">Suppose</span> <span m="2777510">that</span> <span
  m="2777650">I</span> <span m="2777830">take</span> <span
  m="2778190">these</span> <span m="2778460">Pijs</span> <span
  m="2780380">and</span> <span m="2780590">that</span> <span
  m="2780770">I</span> <span m="2780920">add</span> <span m="2781310">up</span>
  <span m="2782220">P1j</span> <span m="2783740">plus</span> <span
  m="2784100">P2j</span> <span m="2785420">plus</span> <span
  m="2785900">P3j.</span> <span m="2787010">In</span> <span
  m="2787130">other</span> <span m="2787310">words,</span> <span
  m="2788030">I</span> <span m="2788210">sum</span> <span m="2788750">the</span>
  <span m="2788900">Pijs</span> <span m="2790850">over</span> <span
  m="2791180">i.</span> <span m="2792630">So</span> <span m="2792860">I'm</span>
  <span m="2793040">looking</span> <span m="2793490">at</span> <span
  m="2796520">a</span> <span m="2796610">row,</span> <span
  m="2798680">row</span> <span m="2799010">i,</span> <span m="2799500">of</span>
  <span m="2799670">my</span> <span m="2799880">matrix.</span></p><p><span
  m="2803450">So</span> <span m="2803740">let</span> <span m="2803830">me</span>
  <span m="2804010">ask</span> <span m="2804270">the</span> <span
  m="2804380">question.</span> <span m="2806300">Maybe</span> <span
  m="2806600">I</span> <span m="2806660">have</span> <span m="2806810">to</span>
  <span m="2806900">put</span> <span m="2807110">it</span> <span
  m="2807230">somewhere</span> <span m="2807590">else.</span> <span
  m="2816110">What's</span> <span m="2816560">the</span> <span
  m="2816680">meaning</span> <span m="2817160">of</span> <span
  m="2818180">the</span> <span m="2818330">sum</span> <span
  m="2819080">of</span> <span m="2819500">Pij</span> <span
  m="2821750">over</span> <span m="2822080">the</span> <span
  m="2822260">i's?</span> <span m="2825800">What</span> <span
  m="2826220">does</span> <span m="2826400">that</span> <span
  m="2826550">quantity</span> <span m="2827720">look</span> <span
  m="2827990">like?</span></p><p><span m="2830320">So</span> <span
  m="2830500">that's</span> <span m="2830800">a</span> <span
  m="2830860">probability.</span> <span m="2832160">Pij</span> <span
  m="2833070">is</span> <span m="2833130">the</span> <span
  m="2833190">probability</span> <span m="2834400">of</span> <span
  m="2834520">getting</span> <span m="2834880">a</span> <span
  m="2834940">certain</span> <span m="2835300">i</span> <span
  m="2835570">and</span> <span m="2835690">a</span> <span
  m="2835750">certain</span> <span m="2836110">j.</span> <span
  m="2837340">But</span> <span m="2837460">now</span> <span
  m="2837700">I'm</span> <span m="2837890">including</span> <span
  m="2838450">all</span> <span m="2838720">the</span> <span
  m="2838900">i's.</span> <span m="2840490">So</span> <span
  m="2840640">what</span> <span m="2840820">am</span> <span m="2840940">I</span>
  <span m="2841090">seeing</span> <span m="2841510">there?</span></p><p><span
  m="2842740">AUDIENCE:</span> <span m="2842860">Pj.</span></p><p><span
  m="2843200">GILBERT STRANG:</span> <span m="2843355">Pj.</span> <span
  m="2844090">Thanks.</span> <span m="2844660">Pj.</span> <span
  m="2845380">This</span> <span m="2845710">is</span> <span
  m="2847090">Pj.</span> <span m="2850840">That's</span> <span
  m="2851060">the</span> <span m="2851170">probability</span> <span
  m="2851860">of</span> <span m="2851950">seeing</span> <span
  m="2853450">j</span> <span m="2853930">in</span> <span m="2854050">the</span>
  <span m="2854150">second</span> <span m="2854560">guy,</span> <span
  m="2855240">because</span> <span m="2855520">I</span> <span
  m="2855610">had</span> <span m="2855790">to</span> <span
  m="2855880">see</span> <span m="2856120">something.</span> <span
  m="2856710">If</span> <span m="2856870">I</span> <span m="2856960">see</span>
  <span m="2857200">j</span> <span m="2857470">in</span> <span
  m="2857560">the</span> <span m="2857650">second</span> <span
  m="2858010">one,</span> <span m="2859630">I'm</span> <span
  m="2859810">allowed</span> <span m="2860080">to</span> <span
  m="2860170">see</span> <span m="2860440">anything</span> <span
  m="2860890">here</span> <span m="2861130">in</span> <span
  m="2861250">the</span> <span m="2861340">first</span> <span
  m="2861700">one.</span> <span m="2862180">But</span> <span
  m="2862420">I'm</span> <span m="2862600">adding</span> <span
  m="2862990">those</span> <span m="2863290">all</span> <span
  m="2863530">up.</span> <span m="2863770">So</span> <span
  m="2864400">that's</span> <span m="2864760">the</span> <span
  m="2864910">point.</span></p><p><span m="2865920">Those</span> <span
  m="2866290">would</span> <span m="2866440">be</span> <span
  m="2866560">called</span> <span m="2866890">the</span> <span
  m="2867610">marginals.</span> <span m="2869020">In</span> <span
  m="2869170">my</span> <span m="2869350">matrices,</span> <span
  m="2870380">I</span> <span m="2870490">would</span> <span
  m="2870760">be</span> <span m="2872410">adding</span> <span
  m="2872860">up</span> <span m="2873070">along</span> <span
  m="2873430">a</span> <span m="2873520">row</span> <span m="2875560">or</span>
  <span m="2875800">adding</span> <span m="2876220">up</span> <span
  m="2876520">down</span> <span m="2876820">my</span> <span
  m="2876910">column.</span> <span m="2878260">Those</span> <span
  m="2878560">are</span> <span m="2878710">called</span> <span
  m="2879010">the</span> <span m="2879130">marginals</span> <span
  m="2880990">of</span> <span m="2884000">the</span> <span
  m="2884160">joint</span> <span m="2884550">probabilities.</span> <span
  m="2886390">So</span> <span m="2886470">the</span> <span
  m="2886590">marginals</span> <span m="2887310">would</span> <span
  m="2887490">be</span> <span m="2887730">the</span> <span
  m="2888540">individual</span> <span m="2889170">probabilities,</span> <span
  m="2890010">Pi</span> <span m="2890550">and</span> <span
  m="2890700">Pj,</span> <span m="2891300">in</span> <span
  m="2891460">the</span> <span m="2891900">case</span> <span
  m="2892320">of</span> <span m="2893580">two</span> <span
  m="2894180">experiments</span> <span m="2895380">going</span> <span
  m="2895710">on</span> <span m="2895860">at</span> <span m="2895950">the</span>
  <span m="2896070">same</span> <span m="2896370">time.</span></p><p><span
  m="2897210">Yeah,</span> <span m="2897460">it's</span> <span
  m="2897630">just</span> <span m="2898140">like</span> <span
  m="2898860">new</span> <span m="2899100">ideas.</span> <span
  m="2900360">Everything</span> <span m="2900840">today</span> <span
  m="2901260">has</span> <span m="2901440">been</span> <span
  m="2901860">sort</span> <span m="2902130">of</span> <span
  m="2902250">straightforward.</span> <span m="2903120">But</span> <span
  m="2903330">it's</span> <span m="2904440">different.</span></p><p><span
  m="2904980">OK,</span> <span m="2905550">now,</span> <span
  m="2905790">I'm</span> <span m="2905940">going</span> <span
  m="2906070">to</span> <span m="2906210">complete</span> <span
  m="2907740">the</span> <span m="2908100">definition</span> <span
  m="2908790">of</span> <span m="2908910">this</span> <span
  m="2909120">covariance</span> <span m="2909900">matrix.</span> <span
  m="2911230">So</span> <span m="2911430">it's</span> <span
  m="2911610">going</span> <span m="2911820">to</span> <span
  m="2911910">be--</span> <span m="2914810">I</span> <span
  m="2915060">want</span> <span m="2915250">to</span> <span
  m="2915360">have</span> <span m="2915480">a</span> <span
  m="2915540">square.</span> <span m="2918380">So</span> <span
  m="2918590">it's</span> <span m="2918710">going</span> <span
  m="2918820">to</span> <span m="2918950">be--</span> <span
  m="2921020">and</span> <span m="2921740">it</span> <span
  m="2921860">should</span> <span m="2922160">be</span> <span
  m="2923750">this</span> <span m="2924200">is</span> <span
  m="2924380">between</span> <span m="2924740">x</span> <span
  m="2925700">and</span> <span m="2925850">the</span> <span
  m="2925970">mean</span> <span m="2926360">of</span> <span
  m="2926540">x.</span> <span m="2927590">Mean</span> <span m="2927890">1</span>
  <span m="2928330">I</span> <span m="2928460">could</span> <span
  m="2928680">call</span> <span m="2928855">it</span> <span
  m="2929030">or</span> <span m="2929150">mean</span> <span
  m="2929510">of</span> <span m="2929630">x.</span> <span m="2930620">And</span>
  <span m="2930770">y,</span> <span m="2933640">the</span> <span
  m="2933760">distance</span> <span m="2934210">from</span> <span
  m="2934420">the</span> <span m="2934510">mean</span> <span
  m="2934870">of</span> <span m="2934990">y</span> <span
  m="2936550">times--</span> <span m="2938080">so</span> <span
  m="2938320">it's</span> <span m="2938470">going</span> <span
  m="2938590">to</span> <span m="2938710">be</span> <span
  m="2938920">column</span> <span m="2939490">times</span> <span
  m="2939820">row--</span> <span m="2941020">same</span> <span
  m="2941590">x</span> <span m="2942160">minus</span> <span
  m="2942850">the</span> <span m="2942970">mean</span> <span
  m="2943300">of</span> <span m="2943450">x,</span> <span m="2945650">y</span>
  <span m="2945720">minus</span> <span m="2946270">the</span> <span
  m="2946390">mean</span> <span m="2946870">of</span> <span
  m="2947020">y.</span> <span m="2950910">xi.</span> <span
  m="2957270">yj.</span></p><p><span m="2963090">Can</span> <span
  m="2963640">you</span> <span m="2963940">look</span> <span
  m="2964300">at</span> <span m="2964390">this</span> <span
  m="2965410">formula?</span> <span m="2965940">So</span> <span
  m="2966100">this</span> <span m="2966340">is</span> <span
  m="2966640">with</span> <span m="2966880">two</span> <span
  m="2967840">experiments,</span> <span m="2971060">two</span> <span
  m="2971270">coins,</span> <span m="2971840">two</span> <span
  m="2972080">experiments.</span> <span m="2975470">I</span> <span
  m="2975590">get</span> <span m="2975800">a</span> <span m="2975890">2</span>
  <span m="2976100">by</span> <span m="2976250">2</span> <span
  m="2976460">matrix.</span> <span m="2977000">Everybody</span> <span
  m="2977420">sees</span> <span m="2977730">that.</span> <span
  m="2977875">A</span> <span m="2978020">column</span> <span
  m="2978410">times</span> <span m="2978680">a</span> <span
  m="2979100">row,</span> <span m="2979240">2</span> <span m="2979310">by</span>
  <span m="2979490">2</span> <span m="2979700">matrix.</span></p><p><span
  m="2981450">And</span> <span m="2983880">let's</span> <span
  m="2984180">just</span> <span m="2984390">see</span> <span
  m="2984690">what</span> <span m="2984990">would</span> <span
  m="2985200">be</span> <span m="2985380">the</span> <span m="2985500">1,</span>
  <span m="2985800">1</span> <span m="2986070">entry</span> <span
  m="2986520">in</span> <span m="2986610">that</span> <span
  m="2986820">matrix.</span> <span m="2989670">This</span> <span
  m="2989920">is</span> <span m="2990070">the</span> <span
  m="2990190">covariance</span> <span m="2991030">matrix.</span> <span
  m="2992690">So</span> <span m="2992740">what</span> <span
  m="2992980">is</span> <span m="2993130">the</span> <span m="2993250">1,</span>
  <span m="2993550">1</span> <span m="2993820">entry</span> <span
  m="2994240">in</span> <span m="2994360">that</span> <span
  m="2994540">matrix?</span> <span m="2995470">So</span> <span
  m="2995650">the</span> <span m="2995740">1,</span> <span m="2996010">1</span>
  <span m="2996220">entry</span> <span m="2996580">is</span> <span
  m="2996730">coming</span> <span m="2997060">from</span> <span
  m="2997300">that</span> <span m="2997600">times</span> <span
  m="2997990">that,</span> <span m="2998380">which</span> <span
  m="2998620">is</span> <span m="2998800">that</span> <span
  m="2999010">thing</span> <span m="2999340">squared,</span> <span
  m="3000750">times</span> <span m="3001770">all</span> <span
  m="3002020">the</span> <span m="3002160">Pijs.</span> <span
  m="3003600">Add</span> <span m="3003990">them</span> <span
  m="3004150">up.</span> <span m="3004310">What</span> <span
  m="3004530">do</span> <span m="3004590">you</span> <span
  m="3004650">think</span> <span m="3004980">I</span> <span
  m="3005070">get</span> <span m="3005310">for</span> <span
  m="3005490">that?</span> <span m="3007500">I</span> <span
  m="3007680">get</span> <span m="3007950">the</span> <span
  m="3008070">variance</span> <span m="3008910">of</span> <span
  m="3009240">the</span> <span m="3010760">x</span> <span
  m="3011090">experiment,</span> <span m="3012870">the</span> <span
  m="3013040">standard</span> <span m="3013760">variance</span> <span
  m="3014360">of</span> <span m="3014510">the</span> <span m="3014660">x</span>
  <span m="3014960">experiment,</span> <span m="3015500">so</span> <span
  m="3015710">v--</span> <span m="3018000">I</span> <span
  m="3018030">have</span> <span m="3018180">to</span> <span
  m="3018720">tell</span> <span m="3018930">you</span> <span
  m="3018990">what</span> <span m="3019230">v</span> <span m="3019560">is</span>
  <span m="3019890">now.</span></p><p><span m="3022470">V,</span> <span
  m="3022575">this</span> <span m="3022680">is</span> <span
  m="3022860">V.</span> <span m="3024135">This</span> <span
  m="3024560">is</span> <span m="3024985">a</span> <span m="3025197">2</span>
  <span m="3025410">by</span> <span m="3025620">2</span> <span
  m="3025860">matrix.</span> <span m="3026940">Up</span> <span
  m="3027120">here,</span> <span m="3027360">I</span> <span
  m="3027510">get</span> <span m="3027720">the</span> <span
  m="3027840">variance</span> <span m="3028530">of</span> <span
  m="3028620">the</span> <span m="3028770">x</span> <span
  m="3029070">experiment.</span> <span m="3030700">What</span> <span
  m="3030870">do</span> <span m="3030990">I</span> <span m="3031110">get</span>
  <span m="3031290">down</span> <span m="3031620">here?</span> <span
  m="3033450">The</span> <span m="3033570">variance</span> <span
  m="3034200">of</span> <span m="3034320">the</span> <span m="3034410">y</span>
  <span m="3034830">experiment</span> <span m="3035490">by</span> <span
  m="3035760">itself.</span> <span m="3036240">Because</span> <span
  m="3036660">it's</span> <span m="3036810">y's</span> <span
  m="3037440">times</span> <span m="3037860">y's,</span> <span
  m="3038490">it</span> <span m="3038610">gives</span> <span
  m="3038820">me</span> <span m="3039000">that</span> <span
  m="3039180">2,</span> <span m="3039550">2</span> <span
  m="3039910">entry.</span> <span m="3040680">So</span> <span
  m="3040860">this</span> <span m="3041100">is</span> <span
  m="3041220">just</span> <span m="3041460">sigma</span> <span
  m="3042060">y</span> <span m="3042420">squared,</span></p><p><span
  m="3047440">But</span> <span m="3047640">the</span> <span
  m="3047760">novelty</span> <span m="3048450">is</span> <span
  m="3049740">the</span> <span m="3050970">1,</span> <span m="3051330">2,</span>
  <span m="3051690">and</span> <span m="3051850">it</span> <span
  m="3051930">will</span> <span m="3051990">be</span> <span
  m="3052170">symmetric.</span> <span m="3053430">So</span> <span
  m="3053610">it's</span> <span m="3053790">a</span> <span
  m="3053850">symmetric</span> <span m="3054450">matrix.</span> <span
  m="3055260">This</span> <span m="3055530">is</span> <span m="3055680">V</span>
  <span m="3055890">transpose.</span> <span m="3057760">I</span> <span
  m="3057930">just</span> <span m="3058380">have</span> <span
  m="3058560">to</span> <span m="3058680">see</span> <span
  m="3058950">here.</span></p><p><span m="3059700">So</span> <span
  m="3059940">I've</span> <span m="3060120">Pij</span> <span
  m="3061920">times</span> <span m="3062220">the</span> <span
  m="3062340">distance</span> <span m="3062940">of</span> <span
  m="3063510">this</span> <span m="3064050">guy</span> <span
  m="3065070">times</span> <span m="3066630">this</span> <span
  m="3066930">guy.</span> <span m="3067890">That's</span> <span
  m="3068190">what's</span> <span m="3068430">going</span> <span
  m="3068530">to</span> <span m="3068670">show</span> <span
  m="3068970">up</span> <span m="3069180">in</span> <span m="3069330">the</span>
  <span m="3069930">1,</span> <span m="3070620">2</span> <span
  m="3071370">position.</span> <span m="3074230">It'll</span> <span
  m="3074370">be</span> <span m="3074550">in</span> <span m="3074670">row</span>
  <span m="3074970">1.</span> <span m="3075450">It'll</span> <span
  m="3075600">be</span> <span m="3075780">in</span> <span
  m="3075930">column</span> <span m="3076380">2.</span> <span
  m="3078420">It's</span> <span m="3078720">the</span> <span
  m="3079770">distances.</span></p><p><span m="3081490">So</span> <span
  m="3081690">what</span> <span m="3081960">will</span> <span
  m="3082230">it</span> <span m="3082350">be</span> <span m="3082680">in</span>
  <span m="3082920">the</span> <span m="3083040">case</span> <span
  m="3083700">of</span> <span m="3084540">unglued</span> <span
  m="3085170">coins,</span> <span m="3085710">independent</span> <span
  m="3086430">coins?</span> <span m="3088720">Zero.</span> <span
  m="3089730">I</span> <span m="3089790">mean,</span> <span
  m="3090000">it's</span> <span m="3090160">just</span> <span
  m="3090480">feeling</span> <span m="3090900">like</span> <span
  m="3091150">0.</span> <span m="3091470">I</span> <span
  m="3091560">haven't</span> <span m="3091800">done</span> <span
  m="3092010">the</span> <span m="3092100">computation.</span> <span
  m="3093250">But</span> <span m="3093330">I</span> <span
  m="3093480">know</span> <span m="3094430">that</span> <span
  m="3094740">when</span> <span m="3095130">I</span> <span
  m="3095190">have</span> <span m="3095340">independent</span> <span
  m="3095970">experiments,</span> <span m="3097260">then</span> <span
  m="3097500">this</span> <span m="3097770">covariance,</span> <span
  m="3098700">which</span> <span m="3098970">everybody</span> <span
  m="3099570">would</span> <span m="3099750">write</span> <span
  m="3100080">as</span> <span m="3100220">sigma</span> <span
  m="3100980">xy--</span> <span m="3102420">and</span> <span
  m="3102570">it's</span> <span m="3102780">the</span> <span
  m="3102870">same</span> <span m="3103260">here.</span> <span
  m="3103530">It's</span> <span m="3103650">symmetric,</span> <span
  m="3104940">sigma</span> <span m="3105220">yx</span> <span
  m="3105980">if</span> <span m="3106090">you</span> <span
  m="3106260">like.</span></p><p><span m="3107340">So</span> <span
  m="3107850">those</span> <span m="3108630">subscripts</span> <span
  m="3109320">are</span> <span m="3109440">telling</span> <span
  m="3109800">me</span> <span m="3109980">that</span> <span
  m="3110640">the</span> <span m="3112730">sum</span> <span
  m="3113330">of</span> <span m="3113660">the</span> <span
  m="3113750">P's,</span> <span m="3114890">joint</span> <span
  m="3115190">probabilities,</span> <span m="3116420">times</span> <span
  m="3116780">the</span> <span m="3116900">distance</span> <span
  m="3117410">of</span> <span m="3117530">x</span> <span m="3117860">from</span>
  <span m="3118060">its</span> <span m="3118310">means,</span> <span
  m="3119180">the</span> <span m="3119300">distance</span> <span
  m="3119720">of</span> <span m="3119930">y</span> <span m="3120290">from</span>
  <span m="3120530">its</span> <span m="3120740">main,</span> <span
  m="3121520">added</span> <span m="3121880">up</span> <span
  m="3122090">over</span> <span m="3122840">all</span> <span
  m="3123050">the</span> <span m="3123140">possibilities.</span> <span
  m="3124620">So</span> <span m="3124940">the</span> <span
  m="3125090">case</span> <span m="3125630">of</span> <span
  m="3127040">unglued</span> <span m="3127760">coins,</span> <span
  m="3128270">the</span> <span m="3128330">case</span> <span
  m="3128600">of</span> <span m="3128750">independent</span> <span
  m="3129350">ones,</span> <span m="3130280">in</span> <span
  m="3130670">that</span> <span m="3130850">case,</span> <span
  m="3131300">those</span> <span m="3131570">are</span> <span
  m="3131810">0.</span> <span m="3134390">Maybe</span> <span
  m="3134930">worth</span> <span m="3135260">just</span> <span
  m="3135770">writing</span> <span m="3136130">that</span> <span
  m="3136310">out.</span> <span m="3137030">You</span> <span
  m="3137390">would</span> <span m="3137540">get</span> <span
  m="3137720">0.</span> <span m="3139010">So</span> <span m="3139190">you</span>
  <span m="3139340">have</span> <span m="3139550">a</span> <span
  m="3139610">diagonal</span> <span m="3140270">matrix.</span></p><p><span
  m="3141920">The</span> <span m="3142040">diagonal</span> <span
  m="3142490">matrix</span> <span m="3143000">is</span> <span
  m="3143180">just</span> <span m="3144110">separate</span> <span
  m="3144560">variances,</span> <span m="3145250">because</span> <span
  m="3145430">that's</span> <span m="3145700">all</span> <span
  m="3146150">the</span> <span m="3146270">two</span> <span
  m="3146510">independent--</span> <span m="3146990">the</span> <span
  m="3147320">experiments</span> <span m="3147920">are</span> <span
  m="3148010">independent.</span> <span m="3148630">So</span> <span
  m="3149600">all</span> <span m="3149810">you</span> <span
  m="3149960">can</span> <span m="3150200">really</span> <span
  m="3150530">expect--</span> <span m="3152000">information</span> <span
  m="3152720">is</span> <span m="3152900">sigma</span> <span
  m="3153410">x</span> <span m="3153530">squared</span> <span
  m="3153920">and</span> <span m="3154010">sigma</span> <span
  m="3154240">y</span> <span m="3154580">squared.</span></p><p><span
  m="3155330">But</span> <span m="3155600">if</span> <span
  m="3156380">the</span> <span m="3156440">two</span> <span
  m="3156650">coins</span> <span m="3157040">are</span> <span
  m="3157130">glued</span> <span m="3157490">together,</span> <span
  m="3160160">then</span> <span m="3160430">what?</span> <span
  m="3162410">If</span> <span m="3162560">the</span> <span
  m="3162680">two</span> <span m="3162860">coins</span> <span
  m="3163310">are</span> <span m="3163400">glued</span> <span
  m="3163790">together--</span> <span m="3164840">well,</span> <span
  m="3165050">let</span> <span m="3165170">me</span> <span
  m="3165320">just</span> <span m="3165500">say</span> <span
  m="3165860">because</span> <span m="3166130">time</span> <span
  m="3166430">is</span> <span m="3166610">up.</span> <span
  m="3167390">This</span> <span m="3167750">matrix</span> <span
  m="3168290">will</span> <span m="3168440">be</span> <span
  m="3168620">singular.</span> <span m="3169850">If</span> <span
  m="3170000">the</span> <span m="3170120">two</span> <span
  m="3170330">coins</span> <span m="3170690">were</span> <span
  m="3170870">glued</span> <span m="3171230">together,</span> <span
  m="3173570">the</span> <span m="3173730">determinant</span> <span
  m="3174320">would</span> <span m="3174500">be</span> <span
  m="3174830">0</span> <span m="3175430">here.</span> <span
  m="3176290">The</span> <span m="3176890">sigma</span> <span
  m="3177350">xy</span> <span m="3178480">in</span> <span m="3178630">the</span>
  <span m="3178730">glued</span> <span m="3179180">case</span> <span
  m="3180260">would</span> <span m="3180530">be--</span> <span
  m="3182390">squared--</span> <span m="3183050">would</span> <span
  m="3183770">be</span> <span m="3183950">the</span> <span
  m="3184100">same</span> <span m="3184520">as</span> <span
  m="3184700">sigma</span> <span m="3185150">x</span> <span
  m="3185390">squared</span> <span m="3186110">sigma</span> <span
  m="3186470">y</span> <span m="3186850">squared.</span></p><p><span
  m="3190360">Actually,</span> <span m="3190810">we're</span> <span
  m="3190990">probably</span> <span m="3191830">getting</span> <span
  m="3192160">all</span> <span m="3192340">these</span> <span
  m="3192670">1/4s.</span> <span m="3194110">And</span> <span
  m="3195010">that</span> <span m="3195250">would</span> <span
  m="3195400">make</span> <span m="3195670">sense.</span></p><p><span
  m="3200660">I'll</span> <span m="3200950">just</span> <span
  m="3201310">end</span> <span m="3201610">with</span> <span
  m="3202000">this</span> <span m="3202240">statement.</span> <span
  m="3203590">This</span> <span m="3203920">matrix</span> <span
  m="3205570">is</span> <span m="3206920">positive</span> <span
  m="3207580">semidefinite</span> <span m="3208510">always.</span> <span
  m="3210130">Positive</span> <span m="3210700">semidefinite</span> <span
  m="3211480">always.</span> <span m="3211900">Because</span> <span
  m="3212360">it's</span> <span m="3212830">column</span> <span
  m="3213280">times</span> <span m="3213640">row,</span> <span
  m="3215430">we</span> <span m="3215510">know</span> <span
  m="3215780">that's</span> <span m="3216110">positive</span> <span
  m="3216620">semidefinite.</span> <span m="3217730">And</span> <span
  m="3217880">it's</span> <span m="3218000">multiplied</span> <span
  m="3218630">by</span> <span m="3219290">numbers</span> <span
  m="3219770">greater</span> <span m="3219965">or</span> <span
  m="3220160">equal</span> <span m="3220460">0.</span> <span
  m="3221270">So</span> <span m="3221450">it's</span> <span m="3221600">a</span>
  <span m="3221660">combination</span> <span m="3222500">of</span> <span
  m="3223040">rank</span> <span m="3223400">1</span> <span
  m="3224330">positive</span> <span m="3224840">semidefinite</span> <span
  m="3225200">definite.</span> <span m="3225710">So</span> <span
  m="3225950">it's</span> <span m="3226100">positive</span> <span
  m="3226640">semidefinite</span> <span m="3226970">definite.</span> <span
  m="3227720">Or</span> <span m="3228380">positive</span> <span
  m="3228860">definite.</span> <span m="3230420">It's</span> <span
  m="3230570">certainly</span> <span m="3230960">positive</span> <span
  m="3231500">definite</span> <span m="3232070">in</span> <span
  m="3232280">the</span> <span m="3233240">independent</span> <span
  m="3233900">case</span> <span m="3234350">when</span> <span
  m="3234740">it's</span> <span m="3234920">diagonal.</span></p><p><span
  m="3237290">And</span> <span m="3237540">the</span> <span
  m="3237830">totally</span> <span m="3238430">dependent</span> <span
  m="3239120">case,</span> <span m="3239450">when</span> <span
  m="3239600">the</span> <span m="3239720">coins</span> <span
  m="3240110">are</span> <span m="3240230">completely</span> <span
  m="3240860">stuck</span> <span m="3241340">together,</span> <span
  m="3242760">that</span> <span m="3242930">will</span> <span
  m="3243110">be</span> <span m="3243450">the</span> <span
  m="3244040">semidefinite</span> <span m="3244940">case</span> <span
  m="3245450">when</span> <span m="3246890">these</span> <span
  m="3247820">entries</span> <span m="3248270">would</span> <span
  m="3248510">all</span> <span m="3248660">be</span> <span
  m="3248840">the</span> <span m="3248960">same</span> <span
  m="3249350">actually.</span> <span m="3250990">So</span> <span
  m="3251720">that's</span> <span m="3252020">a</span> <span
  m="3252080">first</span> <span m="3253370">look</span> <span
  m="3253850">at</span> <span m="3254090">covariance</span> <span
  m="3254810">matrices.</span> <span m="3256270">It</span> <span
  m="3256430">brought</span> <span m="3256760">in tensors.</span> <span
  m="3257610">It</span> <span m="3257750">brought</span> <span
  m="3258020">in</span> <span m="3258230">joint</span> <span
  m="3258620">probabilities.</span> <span m="3259910">It</span> <span
  m="3260030">brought</span> <span m="3260360">in</span> <span
  m="3260600">column</span> <span m="3261050">times</span> <span
  m="3261440">row.</span> <span m="3262550">It</span> <span
  m="3262700">kept</span> <span m="3263090">symmetry.</span> <span
  m="3264730">And</span> <span m="3265010">we</span> <span
  m="3265520">recognized</span> <span m="3266360">positive</span> <span
  m="3267650">definite</span> <span m="3268190">or</span> <span
  m="3268340">positive</span> <span m="3268850">semidefinite</span> <span
  m="3269210">definite.</span></p><p><span m="3269870">So</span> <span
  m="3270050">in</span> <span m="3270275">between,</span> <span
  m="3270740">coins</span> <span m="3271190">that</span> <span
  m="3271280">were</span> <span m="3271460">partly</span> <span
  m="3271940">glued,</span> <span m="3272900">partly</span> <span
  m="3273380">independent,</span> <span m="3273980">but</span> <span
  m="3274220">not</span> <span m="3274640">completely</span> <span
  m="3275330">independent</span> <span m="3275960">experiments,</span> <span
  m="3277220">then</span> <span m="3278000">this</span> <span
  m="3278330">number</span> <span m="3278750">would</span> <span
  m="3278900">be</span> <span m="3279110">smaller.</span> <span
  m="3282630">This</span> <span m="3282960">wouldn't</span> <span
  m="3283260">be</span> <span m="3283440">0,</span> <span m="3283860">but</span>
  <span m="3284040">it</span> <span m="3284160">would</span> <span
  m="3284340">be</span> <span m="3284520">smaller</span> <span
  m="3285030">than</span> <span m="3285240">these</span> <span
  m="3285510">numbers.</span> <span m="3289160">I've</span> <span
  m="3290400">run</span> <span m="3290720">four</span> <span
  m="3290960">minutes</span> <span m="3291270">over.</span> <span
  m="3291510">You're</span> <span m="3291660">very</span> <span
  m="3291960">kind</span> <span m="3292380">to</span> <span
  m="3293520">stay.</span> <span m="3293970">So</span> <span
  m="3294240">have</span> <span m="3294480">a</span> <span
  m="3294540">wonderful</span> <span m="3295020">break.</span> <span
  m="3296100">And</span> <span m="3296750">I'll</span> <span
  m="3296940">see</span> <span m="3297180">you</span> <span m="3297540">a</span>
  <span m="3297600">week</span> <span m="3297930">from</span> <span
  m="3298320">Monday.</span> <span m="3298620">Good.</span> <span
  m="3298920">Thanks.</span></p>
uid: dc7f7372dc175f5ac98e2c85b0d4280b
type: courses
layout: video
---
