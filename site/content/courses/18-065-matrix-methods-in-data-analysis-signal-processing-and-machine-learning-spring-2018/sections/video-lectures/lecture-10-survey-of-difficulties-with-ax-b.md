---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>The subject of this lecture is the
  matrix equation \(Ax = b\).  Solving for \(x\) presents a number of challenges
  that must be addressed when doing computations with large matrices.</p> <h2
  class="subhead">Summary</h2> <p>Large condition number \(\Vert A \Vert \ \Vert
  A^{-1} \Vert\)<br /> \(A\) is ill-conditioned and small errors are
  amplified.<br /> Undetermined case \(m &lt; n\) : typical of deep learning<br
  /> Penalty method regularizes a singular problem.</p> <p>Related chapter in
  textbook: Introduction to Chapter II</p> <p><strong>Instructor:</strong> Prof.
  Gilbert Strang</p>
embedded_media:
  - id: Fig_II-3.jpg
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-10-survey-of-difficulties-with-ax-b/Fig_II-3.jpg
    title: Fig_II-3.jpg
    type: null
    uid: 25fc4da3a8de7b3b4def2954481cf268
  - id: Video-YouTube-Stream
    media_location: Z_5uLqcwDgM
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    title: Video-YouTube-Stream
    type: Video
    uid: 00f4b9d45170ad17ec2ed2b96f25f153
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Z_5uLqcwDgM/default.jpg'
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 8b9cfd6c93629a09bb77189500449bbd
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Z_5uLqcwDgM
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: cbd471e8b212ff4cfe936c483a796411
  - id: Z_5uLqcwDgM.srt
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-10-survey-of-difficulties-with-ax-b/Z_5uLqcwDgM.srt
    title: 3play caption file
    type: null
    uid: cf751d2e3992c978e8c76e0433450e62
  - id: Z_5uLqcwDgM.pdf
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-10-survey-of-difficulties-with-ax-b/Z_5uLqcwDgM.pdf
    title: 3play pdf file
    type: null
    uid: 212daa75e3085a82fee93745e3942ff3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a5827735d340b6680ddb5e6fdd5796f0
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b34699dafef92366b6f12ab9a4601479
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture10_300k.mp4'
    parent_uid: 16628e4482cdc2a75b194304b853bbe5
    title: Video-Internet Archive-MP4
    type: Video
    uid: 43d98068fac6f5129949aadb427f19a7
inline_embed_id: 22921777lecture10surveyofdifficultieswithaxb89191694
order_index: 115
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-10-survey-of-difficulties-with-ax-b
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-10-survey-of-difficulties-with-ax-b
title: 'Lecture 10: Survey of Difficulties with Ax = b'
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">open</span> <span
  m="7040">courseware</span> <span m="7520">continue</span> <span
  m="8029">to</span> <span m="8180">offer</span> <span m="8510">high</span>
  <span m="8720">quality</span> <span m="9200">educational</span> <span
  m="9860">resources</span> <span m="10430">for</span> <span
  m="10550">free.</span> <span m="11610">To</span> <span m="11630">make</span>
  <span m="11840">a</span> <span m="11900">donation</span> <span
  m="12680">or</span> <span m="12800">to</span> <span m="12950">view</span>
  <span m="13160">additional</span> <span m="13550">materials</span> <span
  m="14180">from</span> <span m="14360">hundreds</span> <span
  m="14690">of</span> <span m="14810">MIT</span> <span m="15170">courses,</span>
  <span m="16470">visit</span> <span m="16670">MIT</span> <span
  m="17180">OpenCourseWare</span> <span m="18140">at</span> <span
  m="18290">ocw.mit.edu.</span></p><p>&nbsp;</p><p><span
  m="25045">PROFESSOR:</span> <span m="25340">Let's</span> <span
  m="25640">go.</span> <span m="27150">So</span> <span m="27900">if</span> <span
  m="28080">you</span> <span m="28170">want</span> <span m="28350">to</span>
  <span m="28440">know</span> <span m="28680">the</span> <span
  m="28980">subject</span> <span m="29550">of</span> <span
  m="29640">today's</span> <span m="30990">class,</span> <span
  m="32040">it's</span> <span m="32610">A x</span> <span m="33030">=</span>
  <span m="33360">b.</span> <span m="34650">I</span> <span m="34770">got</span>
  <span m="35010">started</span> <span m="36360">writing</span> <span
  m="36780">down</span> <span m="37110">different</span> <span
  m="37500">possibilities</span> <span m="38460">for</span> <span m="38720">A
  x</span> <span m="39060">=</span> <span m="39330">b,</span> <span
  m="40200">and</span> <span m="40380">I</span> <span m="40470">got</span> <span
  m="40710">carried</span> <span m="41160">away.</span> <span
  m="43320">It</span> <span m="43710">just</span> <span m="44100">appears</span>
  <span m="44760">all</span> <span m="45000">over</span> <span
  m="45210">the</span> <span m="45330">place</span> <span m="50740">for</span>
  <span m="51150">different</span> <span m="51600">sizes,</span> <span
  m="52420">different</span> <span m="52740">ranks,</span> <span
  m="53310">different</span> <span m="53670">situations,</span> <span
  m="54660">nearly</span> <span m="55110">singular,</span> <span
  m="55770">not</span> <span m="56340">nearly</span> <span
  m="56760">singular.</span> <span m="57660">And</span> <span
  m="58680">the</span> <span m="59070">question</span> <span
  m="59610">is,</span> <span m="60330">what</span> <span m="60510">do</span>
  <span m="60570">you</span> <span m="60660">do</span> <span m="60990">in</span>
  <span m="61140">each</span> <span m="61380">case?</span></p><p><span
  m="62590">So</span> <span m="62730">can</span> <span m="62970">I</span> <span
  m="63660">outline</span> <span m="64379">my</span> <span
  m="64620">little</span> <span m="66660">two</span> <span
  m="66870">pages</span> <span m="67500">of</span> <span m="68310">notes</span>
  <span m="68730">here,</span> <span m="69540">and</span> <span
  m="69720">then</span> <span m="70140">pick</span> <span m="70530">on</span>
  <span m="70950">one</span> <span m="71220">or</span> <span
  m="71340">two</span> <span m="71640">of</span> <span m="71760">these</span>
  <span m="72060">topics</span> <span m="72600">to</span> <span
  m="72750">develop</span> <span m="73230">today,</span> <span
  m="74220">and</span> <span m="75180">a</span> <span m="75270">little</span>
  <span m="75510">more</span> <span m="76050">on</span> <span
  m="77010">Friday</span> <span m="77820">about</span> <span
  m="78420">Gram-Schmidt?</span> <span m="79950">So</span> <span
  m="80130">I</span> <span m="80220">won't</span> <span m="80490">do</span>
  <span m="80850">much,</span> <span m="82120">if</span> <span
  m="82200">any,</span> <span m="82470">of</span> <span
  m="82560">Gram-Schmidt</span> <span m="83220">today,</span> <span
  m="83730">but</span> <span m="83970">I</span> <span m="84120">will</span>
  <span m="84420">do</span> <span m="85410">the</span> <span
  m="85590">others.</span> <span m="88260">So</span> <span m="88470">the</span>
  <span m="88560">problem</span> <span m="88950">is</span> <span m="89190">A x =
  b.</span> <span m="90705">That</span> <span m="91200">problem</span> <span
  m="91560">has</span> <span m="91710">come</span> <span m="91920">from</span>
  <span m="92160">somewhere.</span> <span m="92670">We</span> <span
  m="92850">have</span> <span m="93060">to</span> <span m="93180">produce</span>
  <span m="93600">some</span> <span m="93930">kind</span> <span
  m="94230">of</span> <span m="94350">an</span> <span m="94470">answer,</span>
  <span m="95340">x.</span></p><p><span m="96510">So</span> <span
  m="97950">I'm</span> <span m="98490">going</span> <span m="98880">from</span>
  <span m="100110">good</span> <span m="100380">to</span> <span
  m="100560">bad</span> <span m="102120">or</span> <span m="102300">easy</span>
  <span m="102780">to</span> <span m="102870">difficult</span> <span
  m="103590">in</span> <span m="103740">this</span> <span
  m="104070">list.</span> <span m="106530">Well,</span> <span
  m="106800">except</span> <span m="107100">for</span> <span
  m="107250">number</span> <span m="107550">0,</span> <span
  m="109080">which</span> <span m="109440">is</span> <span m="110160">an</span>
  <span m="110340">answer</span> <span m="110850">in</span> <span
  m="111000">all</span> <span m="111180">cases,</span> <span
  m="113680">using</span> <span m="114130">the</span> <span
  m="114310">pseudo</span> <span m="114790">inverse</span> <span
  m="115300">that</span> <span m="115510">I</span> <span
  m="116050">introduced</span> <span m="116650">last</span> <span
  m="116980">time.</span> <span m="118120">So</span> <span
  m="118360">that</span> <span m="120250">deals</span> <span
  m="120760">with</span> <span m="121360">0</span> <span
  m="122050">eigenvalues</span> <span m="122950">and</span> <span
  m="123070">zero</span> <span m="123400">singular</span> <span
  m="123910">values</span> <span m="124420">by</span> <span
  m="124660">saying</span> <span m="125050">their</span> <span
  m="125290">inverse</span> <span m="125800">is</span> <span
  m="125980">also</span> <span m="126430">0,</span> <span
  m="127030">which</span> <span m="127270">is</span> <span
  m="127450">kind</span> <span m="127660">of</span> <span
  m="127750">wild.</span> <span m="129310">So</span> <span
  m="130250">we'll</span> <span m="130449">come</span> <span
  m="130660">back</span> <span m="130960">to</span> <span m="131860">the</span>
  <span m="131980">meaning</span> <span m="132430">of</span> <span
  m="132550">the</span> <span m="132680">pseudo</span> <span
  m="133150">inverse.</span></p><p><span m="133750">But</span> <span
  m="133990">now,</span> <span m="134620">I</span> <span m="134740">want</span>
  <span m="134950">to</span> <span m="135010">get</span> <span
  m="135520">real,</span> <span m="135940">here,</span> <span
  m="136630">about</span> <span m="137020">different</span> <span
  m="137470">situations.</span> <span m="138250">So</span> <span
  m="138910">number</span> <span m="139210">1</span> <span m="139510">is</span>
  <span m="139720">the</span> <span m="140500">good,</span> <span
  m="140920">normal</span> <span m="141430">case,</span> <span
  m="141910">when</span> <span m="142090">a</span> <span
  m="142150">person</span> <span m="142660">has</span> <span m="143050">a</span>
  <span m="143830">square</span> <span m="144220">matrix</span> <span
  m="145000">of</span> <span m="145420">reasonable</span> <span
  m="146260">size,</span> <span m="147430">reasonable</span> <span
  m="148180">condition,</span> <span m="149190">a</span> <span
  m="149470">condition</span> <span m="150020">number--</span> <span
  m="150460">oh,</span> <span m="150820">the</span> <span
  m="150970">condition</span> <span m="151450">number,</span> <span
  m="151750">I</span> <span m="151870">should</span> <span
  m="152140">call</span> <span m="152440">it</span> <span
  m="153400">sigma</span> <span m="153970">1</span> <span m="155590">over</span>
  <span m="155890">sigma</span> <span m="156310">n.</span> <span
  m="157290">It's</span> <span m="157530">the</span> <span
  m="157600">ratio</span> <span m="158140">of</span> <span m="158290">the</span>
  <span m="158410">largest</span> <span m="159100">to</span> <span
  m="159250">the</span> <span m="159400">smallest</span> <span
  m="159970">singular</span> <span m="160480">value.</span> <span
  m="161560">And</span> <span m="161710">let's</span> <span
  m="161920">say</span> <span m="162250">that's</span> <span
  m="163060">within</span> <span m="163480">reason,</span> <span
  m="164380">not</span> <span m="164620">more</span> <span
  m="164950">than</span> <span m="165190">1,000</span> <span
  m="165940">or</span> <span m="166030">something.</span></p><p><span
  m="166900">Then</span> <span m="169510">normal,</span> <span
  m="170660">ordinary</span> <span m="171190">elimination</span> <span
  m="171970">is</span> <span m="172150">going</span> <span m="172300">to</span>
  <span m="172420">work,</span> <span m="173530">and</span> <span
  m="174460">Matlab--</span> <span m="175030">the</span> <span
  m="175180">command</span> <span m="175690">that</span> <span
  m="175870">would</span> <span m="176050">produce</span> <span
  m="176470">the</span> <span m="176590">answer</span> <span
  m="176950">is</span> <span m="177070">just</span> <span
  m="177280">backslash.</span> <span m="180040">So</span> <span
  m="180250">this</span> <span m="180490">is</span> <span m="180640">the</span>
  <span m="181450">normal</span> <span m="181960">case.</span> <span
  m="184180">Now,</span> <span m="185510">the</span> <span
  m="185860">cases</span> <span m="186310">that</span> <span
  m="186430">follow</span> <span m="186940">have</span> <span
  m="187630">problems</span> <span m="188230">of</span> <span
  m="188350">some</span> <span m="188590">kind,</span> <span
  m="190340">and</span> <span m="190420">I</span> <span m="190780">guess</span>
  <span m="191020">I'm</span> <span m="191170">hoping</span> <span
  m="191560">that</span> <span m="191740">this</span> <span m="192310">is</span>
  <span m="192880">a</span> <span m="193090">sort</span> <span
  m="193330">of</span> <span m="193450">useful</span> <span
  m="195400">dictionary</span> <span m="196120">of</span> <span
  m="196240">what</span> <span m="196450">to</span> <span m="196600">do</span>
  <span m="197780">for</span> <span m="199030">you</span> <span
  m="199450">and</span> <span m="200290">me</span> <span
  m="200500">both.</span></p><p><span m="201790">So</span> <span
  m="202000">we</span> <span m="202150">have</span> <span m="202390">this</span>
  <span m="202690">case</span> <span m="203140">here,</span> <span
  m="203410">where</span> <span m="203650">we</span> <span
  m="203860">have</span> <span m="204250">too</span> <span
  m="204460">many</span> <span m="204760">equations.</span> <span
  m="206800">So</span> <span m="206960">that's</span> <span m="207130">a</span>
  <span m="207190">pretty</span> <span m="207490">normal</span> <span
  m="207910">case,</span> <span m="209380">and</span> <span
  m="211050">we'll</span> <span m="211330">think</span> <span
  m="212110">mostly</span> <span m="212710">of</span> <span
  m="213100">solving</span> <span m="213610">by</span> <span
  m="213910">least</span> <span m="214210">squares,</span> <span
  m="215450">which</span> <span m="215620">leads</span> <span
  m="215980">us</span> <span m="216400">to</span> <span m="216580">the</span>
  <span m="216700">normal</span> <span m="217180">equation.</span> <span
  m="217940">So</span> <span m="218020">this</span> <span m="218260">is</span>
  <span m="218380">standard,</span> <span m="219460">happens</span> <span
  m="219880">all</span> <span m="220060">the</span> <span m="220180">time</span>
  <span m="220570">in</span> <span m="220690">statistics.</span> <span
  m="222040">And</span> <span m="222790">I'm</span> <span
  m="223030">thinking</span> <span m="224290">in</span> <span
  m="224720">the</span> <span m="225490">reasonable</span> <span
  m="226020">case,</span> <span m="227200">that</span> <span
  m="227410">would</span> <span m="227560">be</span> <span m="227740">ex</span>
  <span m="228010">hat.</span> <span m="231070">The</span> <span
  m="231520">solution</span> <span m="232120">A--</span> <span
  m="232710">this</span> <span m="233350">matrix</span> <span
  m="233890">would</span> <span m="234100">be</span> <span
  m="234280">invertible</span> <span m="235240">and</span> <span
  m="236170">reasonable</span> <span m="236770">size.</span></p><p><span
  m="237700">So</span> <span m="240250">backslash</span> <span
  m="240880">would</span> <span m="241060">still</span> <span
  m="241360">solve</span> <span m="241690">that</span> <span
  m="241870">problem.</span> <span m="242650">Backslash</span> <span
  m="243850">doesn't</span> <span m="244270">require</span> <span
  m="244810">a</span> <span m="244870">square</span> <span
  m="245260">matrix</span> <span m="245860">to</span> <span
  m="246010">give</span> <span m="246220">you</span> <span m="246370">an</span>
  <span m="246490">answer.</span> <span m="247570">So</span> <span
  m="248440">that's</span> <span m="249270">the</span> <span
  m="249580">good</span> <span m="249850">case,</span> <span
  m="250270">where</span> <span m="251730">the</span> <span
  m="251890">matrix</span> <span m="252400">is</span> <span
  m="252520">not</span> <span m="252730">too</span> <span m="252940">big,</span>
  <span m="253300">so</span> <span m="253510">it's</span> <span
  m="253660">not</span> <span m="253930">unreasonable</span> <span
  m="254710">to</span> <span m="255900">form</span> <span m="256300">a</span>
  <span m="256420">transpose.</span> <span m="258930">Now,</span> <span
  m="259490">here's</span> <span m="259750">the</span> <span
  m="259899">other</span> <span m="260230">extreme.</span> <span
  m="263290">What's</span> <span m="263560">exciting</span> <span
  m="264130">for</span> <span m="264370">us</span> <span m="264730">is</span>
  <span m="265810">this</span> <span m="266050">is</span> <span
  m="266200">the</span> <span m="266350">underdetermined</span> <span
  m="267370">case.</span> <span m="268240">I</span> <span
  m="268330">don't</span> <span m="268600">have</span> <span
  m="268780">enough</span> <span m="269110">equations,</span> <span
  m="270310">so</span> <span m="270460">I</span> <span m="270490">have</span>
  <span m="270640">to</span> <span m="271030">put</span> <span
  m="271270">something</span> <span m="271630">more</span> <span
  m="271960">in</span> <span m="272650">to</span> <span m="272800">get</span>
  <span m="273040">a</span> <span m="273190">specific</span> <span
  m="273910">answer.</span></p><p><span m="274870">And</span> <span
  m="275110">what</span> <span m="275350">makes</span> <span
  m="275710">it</span> <span m="275860">exciting</span> <span
  m="276400">for</span> <span m="276640">us</span> <span m="276940">is</span>
  <span m="277240">that</span> <span m="277480">that's</span> <span
  m="278620">typical</span> <span m="279400">of</span> <span
  m="279790">deep</span> <span m="280150">learning.</span> <span
  m="281290">There</span> <span m="281470">are</span> <span m="281620">so</span>
  <span m="281890">many</span> <span m="282220">weights</span> <span
  m="282800">in</span> <span m="282960">a</span> <span m="283030">deep</span>
  <span m="283390">neural</span> <span m="283720">network</span> <span
  m="284740">that</span> <span m="285420">the</span> <span
  m="285580">weights</span> <span m="286000">would</span> <span
  m="286210">be</span> <span m="286360">the</span> <span
  m="286540">unknowns.</span> <span m="289060">Of</span> <span
  m="289120">course,</span> <span m="289520">it</span> <span
  m="289620">wouldn't</span> <span m="289750">be</span> <span
  m="290350">necessarily</span> <span m="291040">linear.</span> <span
  m="291355">It</span> <span m="291670">wouldn't</span> <span
  m="292000">be</span> <span m="292180">linear,</span> <span
  m="292690">but</span> <span m="293320">still</span> <span
  m="293740">the</span> <span m="293950">idea's</span> <span
  m="294325">the</span> <span m="294700">same</span> <span
  m="295740">that</span> <span m="296990">we</span> <span m="300280">have</span>
  <span m="300370">many</span> <span m="300670">solutions,</span> <span
  m="301580">and</span> <span m="301600">we</span> <span m="301750">have</span>
  <span m="301930">to</span> <span m="302050">pick</span> <span
  m="302350">one.</span> <span m="304360">Or</span> <span m="304480">we</span>
  <span m="304600">have</span> <span m="304690">to</span> <span
  m="304810">pick</span> <span m="305080">an</span> <span
  m="305200">algorithm,</span> <span m="305800">and</span> <span
  m="305920">then</span> <span m="306210">it will</span> <span
  m="306310">find</span> <span m="306730">one.</span></p><p><span
  m="309850">So</span> <span m="310030">we</span> <span m="310180">could</span>
  <span m="310390">pick</span> <span m="310960">the</span> <span
  m="311350">minimum</span> <span m="311830">norm</span> <span
  m="312220">solution,</span> <span m="312850">the</span> <span
  m="312970">shortest</span> <span m="313450">solution.</span> <span
  m="314050">That</span> <span m="314320">would</span> <span
  m="314500">be</span> <span m="314650">an</span> <span m="314770">L2</span>
  <span m="315370">answer.</span> <span m="316690">Or</span> <span
  m="316960">we</span> <span m="317110">could</span> <span m="317320">go</span>
  <span m="317530">to</span> <span m="317650">L1.</span> <span
  m="319440">And</span> <span m="319760">the</span> <span m="319860">big</span>
  <span m="320340">question</span> <span m="320970">that,</span> <span
  m="321480">I</span> <span m="321990">think,</span> <span
  m="322680">might</span> <span m="323040">be</span> <span
  m="323640">settled</span> <span m="324210">in</span> <span
  m="324370">2018</span> <span m="325980">is,</span> <span
  m="327150">does</span> <span m="327660">deep</span> <span
  m="327960">learning</span> <span m="328650">and</span> <span
  m="329010">the</span> <span m="329730">iteration</span> <span
  m="330660">from</span> <span m="331500">stochastic</span> <span
  m="332340">gradient</span> <span m="332910">descent</span> <span
  m="333600">that</span> <span m="333810">we'll</span> <span
  m="334080">see</span> <span m="335670">pretty</span> <span
  m="336000">soon--</span> <span m="336750">does</span> <span
  m="337050">it</span> <span m="337260">go</span> <span m="337650">to</span>
  <span m="337830">the</span> <span m="338760">minimum</span> <span
  m="339760">L1?</span> <span m="340230">Does</span> <span m="340500">it</span>
  <span m="340650">pick</span> <span m="340950">out</span> <span
  m="341160">an</span> <span m="341310">L1</span> <span
  m="341760">solution?</span></p><p><span m="342330">That's</span> <span
  m="342810">really</span> <span m="343530">an</span> <span
  m="343650">exciting</span> <span m="344790">math</span> <span
  m="345180">question.</span> <span m="346340">For</span> <span
  m="347220">a</span> <span m="347310">long</span> <span m="347640">time,</span>
  <span m="349560">it</span> <span m="349680">was</span> <span
  m="350160">standard</span> <span m="350730">to</span> <span
  m="350790">say</span> <span m="351620">that</span> <span
  m="352350">these</span> <span m="353340">deep</span> <span
  m="353670">learning</span> <span m="354540">AI</span> <span
  m="355830">codes</span> <span m="356370">are</span> <span
  m="356940">fantastic,</span> <span m="357760">but</span> <span
  m="357840">what</span> <span m="358050">are</span> <span
  m="358110">they</span> <span m="358290">doing?</span> <span
  m="359880">We</span> <span m="360060">don't</span> <span
  m="360270">know</span> <span m="361200">all</span> <span m="361440">the</span>
  <span m="361620">interior,</span> <span m="362250">but</span> <span
  m="363210">we--</span> <span m="363570">when</span> <span m="363750">I</span>
  <span m="363900">say</span> <span m="364140">we,</span> <span
  m="365160">I</span> <span m="365280">don't</span> <span m="365520">mean</span>
  <span m="365970">I.</span> <span m="367410">Other</span> <span
  m="367650">people</span> <span m="368340">are</span> <span
  m="369510">getting</span> <span m="369870">there,</span> <span
  m="370110">and</span> <span m="370260">I'm</span> <span
  m="370500">going</span> <span m="370660">to</span> <span
  m="370950">tell</span> <span m="371250">you</span> <span m="371430">as</span>
  <span m="371550">much</span> <span m="371850">as</span> <span
  m="372000">I</span> <span m="372120">can</span> <span m="372510">about</span>
  <span m="372840">it</span> <span m="373710">when</span> <span
  m="373920">we</span> <span m="374040">get</span> <span
  m="374280">there.</span></p><p><span m="376080">So</span> <span
  m="377040">those</span> <span m="377340">are</span> <span
  m="377430">pretty</span> <span m="377730">standard</span> <span
  m="378330">cases.</span> <span m="381820">m</span> <span m="382000">=</span>
  <span m="382390">n,</span> <span m="383230">m</span> <span m="383590">greater
  than</span> <span m="383875">n,</span> <span m="384430">m less</span> <span
  m="384730">than</span> <span m="384970">n,</span> <span m="385240">but</span>
  <span m="385450">not</span> <span m="385690">crazy.</span> <span
  m="387730">Now,</span> <span m="389230">the</span> <span
  m="389380">second</span> <span m="389740">board</span> <span
  m="390010">will</span> <span m="390220">have</span> <span
  m="391240">more</span> <span m="391600">difficult</span> <span
  m="392140">problems.</span> <span m="397300">Usually,</span> <span
  m="397720">because</span> <span m="398230">they're</span> <span
  m="398410">nearly</span> <span m="398830">singular</span> <span
  m="399400">in</span> <span m="399550">some</span> <span m="399820">way,</span>
  <span m="400100">the</span> <span m="400240">columns</span> <span
  m="400810">are</span> <span m="400930">nearly</span> <span
  m="401440">dependent.</span> <span m="403720">So</span> <span
  m="404080">that</span> <span m="404260">would</span> <span
  m="404380">be</span> <span m="404530">the</span> <span
  m="404650">columns</span> <span m="405160">in</span> <span
  m="405310">bad</span> <span m="405640">condition.</span> <span
  m="407140">You</span> <span m="407440">just</span> <span
  m="407650">picked</span> <span m="407980">a</span> <span
  m="408070">terrible</span> <span m="409180">basis,</span> <span
  m="409750">or</span> <span m="409900">nature</span> <span
  m="410380">did,</span> <span m="410770">or</span> <span
  m="410860">somehow</span> <span m="411750">you</span> <span
  m="411920">got</span> <span m="412150">a</span> <span m="412240">matrix</span>
  <span m="412840">A</span> <span m="413290">whose</span> <span
  m="413590">columns</span> <span m="414160">are</span> <span
  m="414760">virtually</span> <span m="416650">dependent--</span> <span
  m="417640">almost</span> <span m="418120">linearly</span> <span
  m="418750">dependent.</span></p><p><span m="419800">The</span> <span
  m="419950">inverse</span> <span m="420460">matrix</span> <span
  m="421090">is</span> <span m="421360">really</span> <span
  m="421750">big,</span> <span m="423460">but</span> <span m="423760">it</span>
  <span m="423910">exists.</span> <span m="426340">Then</span> <span
  m="426730">that's</span> <span m="427060">when</span> <span
  m="427550">you</span> <span m="427870">go</span> <span m="428110">in,</span>
  <span m="428320">and</span> <span m="428440">you</span> <span
  m="428530">fix</span> <span m="428890">the</span> <span
  m="428980">columns.</span> <span m="430270">You</span> <span
  m="430450">orthogonalize</span> <span m="431680">columns.</span> <span
  m="432250">Instead</span> <span m="432670">of</span> <span
  m="432790">accepting</span> <span m="433510">the</span> <span
  m="434020">columns</span> <span m="434650">A1,</span> <span
  m="435280">A2,</span> <span m="435940">up</span> <span m="436090">to</span>
  <span m="436240">An</span> <span m="436840">of</span> <span
  m="437030">the</span> <span m="437530">given</span> <span
  m="437890">matrix,</span> <span m="439030">you</span> <span
  m="439210">go</span> <span m="439540">in,</span> <span m="439870">and</span>
  <span m="440020">you</span> <span m="440170">find</span> <span
  m="440770">orthonormal</span> <span m="443020">vectors</span> <span
  m="443620">in</span> <span m="443740">that</span> <span
  m="443950">column</span> <span m="444310">space</span> <span
  m="445170">and</span> <span m="445320">orthonormal</span> <span
  m="446050">basis</span> <span m="448390">Q1</span> <span m="449060">to</span>
  <span m="449240">Qn.</span> <span m="450610">And</span> <span
  m="450820">the</span> <span m="450940">two</span> <span m="451200">are</span>
  <span m="451330">connected</span> <span m="451900">by</span> <span
  m="452170">Gram-Schmidt.</span></p><p><span m="452980">And</span> <span
  m="453130">the</span> <span m="453520">famous</span> <span
  m="454960">matrix</span> <span m="455530">statement</span> <span
  m="456100">of</span> <span m="456250">Gram-Schmidt</span> <span
  m="457030">is</span> <span m="457780">here</span> <span m="457990">are</span>
  <span m="458050">the</span> <span m="458170">columns</span> <span
  m="458680">of</span> <span m="458830">A.</span> <span m="459840">Here</span>
  <span m="460090">are</span> <span m="460160">the</span> <span
  m="460300">columns</span> <span m="460840">of</span> <span
  m="460960">Q,</span> <span m="461920">and</span> <span
  m="462130">there's</span> <span m="462400">a</span> <span
  m="462580">triangular</span> <span m="463300">matrix</span> <span
  m="463930">that</span> <span m="465630">connects</span> <span
  m="466150">the</span> <span m="466260">two.</span> <span m="467890">So</span>
  <span m="468070">that</span> <span m="468460">is</span> <span
  m="468760">the</span> <span m="470040">central</span> <span
  m="470820">topic</span> <span m="471150">of</span> <span
  m="471480">Gram-Schmidt</span> <span m="472710">in</span> <span
  m="473760">that</span> <span m="474030">idea</span> <span m="474390">of</span>
  <span m="474540">orthogonalizing.</span> <span m="475770">It</span> <span
  m="475860">just</span> <span m="476130">appears</span> <span
  m="476550">everywhere.</span> <span m="476805">It</span> <span
  m="477060">appears</span> <span m="477420">all</span> <span
  m="477690">over</span> <span m="478310">course</span> <span
  m="478620">6</span> <span m="479550">in</span> <span m="479820">many,</span>
  <span m="480880">many</span> <span m="481140">situations</span> <span
  m="481920">with</span> <span m="482100">different</span> <span
  m="482520">names.</span> <span m="482970">So</span> <span
  m="483780">that,</span> <span m="484680">I'm</span> <span
  m="485020">sort</span> <span m="485280">of</span> <span
  m="485370">saving</span> <span m="485970">a</span> <span
  m="486030">little</span> <span m="486300">bit</span> <span
  m="486960">until</span> <span m="487470">next</span> <span
  m="487770">time,</span> <span m="488550">and</span> <span
  m="488700">let</span> <span m="488820">me</span> <span m="488940">tell</span>
  <span m="489180">you</span> <span m="489300">why.</span></p><p><span
  m="490990">Because</span> <span m="493530">just</span> <span
  m="493800">the</span> <span m="493950">organization</span> <span
  m="494940">of</span> <span m="495060">Gram-Schmidt</span> <span
  m="495870">is</span> <span m="496080">interesting.</span> <span
  m="497430">So</span> <span m="498150">Gram-Schmidt,</span> <span
  m="499050">you</span> <span m="499200">could</span> <span m="499380">do</span>
  <span m="499740">the</span> <span m="499860">normal</span> <span
  m="500280">way.</span> <span m="501810">So</span> <span
  m="501990">that's</span> <span m="502320">what</span> <span
  m="503010">I</span> <span m="503130">teach</span> <span m="503520">in</span>
  <span m="503670">18.06.</span> <span m="505410">Just</span> <span
  m="506670">take</span> <span m="507030">every</span> <span
  m="507300">column</span> <span m="507720">as</span> <span m="507900">it</span>
  <span m="508020">comes.</span> <span m="509220">Subtract</span> <span
  m="509880">off</span> <span m="510270">projections</span> <span
  m="511050">onto</span> <span m="511320">their</span> <span
  m="511560">previous</span> <span m="512039">stuff.</span> <span
  m="513419">Get</span> <span m="513659">it</span> <span
  m="514260">orthogonal</span> <span m="514950">to</span> <span
  m="515100">the</span> <span m="515190">previous</span> <span
  m="515789">guys.</span> <span m="516960">Normalize</span> <span
  m="517710">it</span> <span m="517799">to</span> <span m="517919">be</span>
  <span m="518100">a</span> <span m="518190">unit</span> <span
  m="518549">vector.</span> <span m="519630">Then</span> <span
  m="519840">you've</span> <span m="519990">got</span> <span
  m="520169">that</span> <span m="520409">column.</span> <span
  m="520830">Go</span> <span m="521070">on.</span></p><p><span
  m="521460">So</span> <span m="521890">I</span> <span m="521970">say</span>
  <span m="522210">that</span> <span m="522419">again,</span> <span
  m="522840">and</span> <span m="522929">then</span> <span
  m="523590">I'll</span> <span m="523710">say</span> <span m="523950">it</span>
  <span m="524039">again</span> <span m="526190">two</span> <span
  m="526440">days</span> <span m="526740">from</span> <span
  m="526920">now.</span> <span m="529090">So</span> <span
  m="529170">Gram-Schmidt,</span> <span m="530100">the</span> <span
  m="530250">idea</span> <span m="530670">is</span> <span m="531480">you</span>
  <span m="531600">take</span> <span m="531870">the</span> <span
  m="531990">columns--</span> <span m="535440">you</span> <span
  m="536400">say</span> <span m="536670">the</span> <span
  m="539460">second</span> <span m="541590">orthogonal</span> <span
  m="542370">vector,</span> <span m="542790">Q2,</span> <span
  m="543690">will</span> <span m="543900">be</span> <span m="544080">some</span>
  <span m="544380">combination</span> <span m="545160">of</span> <span
  m="545280">columns</span> <span m="545730">1</span> <span
  m="546000">and</span> <span m="546150">2,</span> <span
  m="547140">orthogonal</span> <span m="547860">to</span> <span
  m="548280">the</span> <span m="548370">first.</span> <span
  m="551720">Lots</span> <span m="552090">to</span> <span m="552210">do.</span>
  <span m="552840">And</span> <span m="553320">there's</span> <span
  m="553560">another</span> <span m="554070">order,</span> <span
  m="555240">which</span> <span m="555480">is</span> <span
  m="555660">really</span> <span m="556140">the</span> <span
  m="556650">better</span> <span m="557040">order</span> <span
  m="557760">to</span> <span m="557940">do</span> <span
  m="558180">Gram-Schmidt,</span> <span m="559290">and</span> <span
  m="559500">it</span> <span m="559650">allows</span> <span
  m="560160">you</span> <span m="560310">to</span> <span m="560490">do</span>
  <span m="560910">column</span> <span m="561450">pivoting.</span></p><p><span
  m="563140">So</span> <span m="563380">this</span> <span m="563650">is</span>
  <span m="564220">my</span> <span m="564430">topic</span> <span
  m="564940">for</span> <span m="565300">next</span> <span
  m="565630">time,</span> <span m="567330">to</span> <span m="567510">see</span>
  <span m="568090">Gram-Schmidt</span> <span m="569050">more</span> <span
  m="569350">carefully.</span> <span m="572920">Column</span> <span
  m="573250">pivoting</span> <span m="573790">means</span> <span
  m="577960">the</span> <span m="578230">columns</span> <span
  m="578710">might</span> <span m="578920">not</span> <span
  m="579130">come</span> <span m="579430">in</span> <span m="579550">a</span>
  <span m="579610">good</span> <span m="579850">order,</span> <span
  m="581210">so</span> <span m="581320">you</span> <span m="581530">allow</span>
  <span m="582820">yourself</span> <span m="583480">to</span> <span
  m="584170">reorder</span> <span m="584770">them.</span> <span
  m="586750">We</span> <span m="586960">know</span> <span m="587260">that</span>
  <span m="587410">you</span> <span m="587560">have</span> <span
  m="587800">to</span> <span m="587920">do</span> <span m="588130">that</span>
  <span m="588430">for</span> <span m="589630">elimination.</span> <span
  m="590930">In</span> <span m="591400">elimination,</span> <span
  m="592120">it</span> <span m="592210">would</span> <span m="592390">be</span>
  <span m="592570">rows.</span> <span m="593710">So</span> <span
  m="593920">elimination,</span> <span m="594670">we</span> <span
  m="594850">would</span> <span m="595030">have</span> <span
  m="597250">the</span> <span m="597730">matrix</span> <span
  m="598000">A,</span> <span m="598270">and</span> <span m="602620">we</span>
  <span m="603850">take</span> <span m="604090">the</span> <span
  m="604210">first</span> <span m="604570">row</span> <span m="605020">as</span>
  <span m="605200">the</span> <span m="605320">first</span> <span
  m="605650">pivot</span> <span m="606070">row,</span> <span
  m="606430">and</span> <span m="606520">then</span> <span m="606670">the</span>
  <span m="606790">second</span> <span m="607180">row,</span> <span
  m="607490">and</span> <span m="607590">then</span> <span m="607660">the</span>
  <span m="607750">third</span> <span m="608080">row.</span></p><p><span
  m="608900">But</span> <span m="611890">if</span> <span m="612160">the</span>
  <span m="614020">pivot</span> <span m="614410">is</span> <span
  m="615880">too</span> <span m="616120">small,</span> <span
  m="619810">then</span> <span m="622200">reorder</span> <span
  m="622860">the</span> <span m="622980">rows.</span> <span m="627060">So</span>
  <span m="627480">it's</span> <span m="627660">row</span> <span
  m="628020">ordering</span> <span m="628680">that</span> <span
  m="629040">comes</span> <span m="629490">up</span> <span m="629790">in</span>
  <span m="630010">elimination.</span> <span m="637350">And</span> <span
  m="639090">Matlab</span> <span m="639660">just</span> <span
  m="639930">systematically</span> <span m="640980">says,</span> <span
  m="641960">OK,</span> <span m="642450">that's</span> <span
  m="642840">the</span> <span m="643470">pivot</span> <span
  m="643860">that's</span> <span m="644130">coming</span> <span
  m="644490">up.</span> <span m="645000">The</span> <span
  m="645210">third</span> <span m="645540">pivot</span> <span
  m="645900">comes</span> <span m="646290">up</span> <span m="646770">out</span>
  <span m="646950">of</span> <span m="647010">the</span> <span
  m="647130">third</span> <span m="647490">row.</span> <span
  m="648330">But</span> <span m="648600">Matlab</span> <span
  m="649050">says</span> <span m="649500">look</span> <span
  m="649830">down</span> <span m="650160">that</span> <span
  m="650370">whole</span> <span m="650730">third</span> <span
  m="651090">column</span> <span m="651450">for</span> <span m="651600">a</span>
  <span m="651660">better</span> <span m="651960">pivot,</span> <span
  m="652410">a</span> <span m="652470">bigger</span> <span
  m="652800">pivot.</span> <span m="653850">Switch</span> <span
  m="654720">to</span> <span m="655260">a</span> <span m="655350">row</span>
  <span m="655590">exchange.</span> <span m="656490">So</span> <span
  m="656670">there</span> <span m="656790">are</span> <span
  m="656820">lots</span> <span m="657240">of</span> <span
  m="657360">permutations</span> <span m="658320">then.</span></p><p><span
  m="658590">You</span> <span m="658740">end</span> <span m="658950">up</span>
  <span m="659100">with</span> <span m="660780">something</span> <span
  m="661260">there</span> <span m="661530">that</span> <span
  m="661780">permutes</span> <span m="662580">the</span> <span
  m="662730">rows,</span> <span m="663960">and</span> <span
  m="664080">then</span> <span m="664350">that</span> <span
  m="664740">gets</span> <span m="665010">factored</span> <span
  m="665520">into</span> <span m="665820">LU.</span> <span m="667170">So</span>
  <span m="667380">I'm</span> <span m="667620">saying</span> <span
  m="668310">something</span> <span m="669600">about</span> <span
  m="669930">elimination</span> <span m="670680">that's</span> <span
  m="672240">just</span> <span m="673170">sort</span> <span m="673380">of
  a</span> <span m="673470">side</span> <span m="673860">comment</span> <span
  m="674430">that</span> <span m="675370">you</span> <span
  m="675900">would</span> <span m="676080">never</span> <span
  m="676440">do</span> <span m="676710">elimination</span> <span
  m="678240">without</span> <span m="678780">considering</span> <span
  m="679470">the</span> <span m="679590">possibility</span> <span
  m="680280">of</span> <span m="680400">row</span> <span
  m="680610">exchanges.</span> <span m="682020">And</span> <span
  m="682170">then</span> <span m="682500">this</span> <span m="684250">is</span>
  <span m="687260">Gram-Schmidt</span> <span
  m="688010">orthogonalization.</span> <span m="689120">So</span> <span
  m="689270">this</span> <span m="689510">is</span> <span m="689660">the</span>
  <span m="689870">LU</span> <span m="690650">world.</span> <span
  m="691420">Here</span> <span m="691670">is</span> <span m="691850">the</span>
  <span m="692000">QR</span> <span m="692750">world,</span> <span
  m="693860">and</span> <span m="694190">here,</span> <span m="694460">it</span>
  <span m="694580">happens</span> <span m="694940">to</span> <span
  m="695030">be</span> <span m="695210">columns</span> <span
  m="695810">that</span> <span m="695990">you're</span> <span
  m="696330">permuting.</span></p><p><span m="697800">So</span> <span
  m="698010">that's</span> <span m="698310">coming.</span> <span
  m="699150">This</span> <span m="699450">is</span> <span
  m="699960">section</span> <span m="700530">2.2,</span> <span
  m="702920">now.</span> <span m="706710">But</span> <span
  m="706920">there's</span> <span m="707220">more.</span> <span
  m="707760">2.2</span> <span m="708390">has</span> <span
  m="708570">quite</span> <span m="708810">a</span> <span m="708870">bit</span>
  <span m="709060">in</span> <span m="709140">it,</span> <span
  m="709260">including</span> <span m="710580">number</span> <span
  m="710940">0,</span> <span m="711390">the</span> <span
  m="711540">pseudo</span> <span m="711990">inverse,</span> <span
  m="712880">and</span> <span m="713040">including</span> <span
  m="713610">some</span> <span m="713850">of</span> <span
  m="713910">these</span> <span m="714150">things.</span> <span
  m="714480">Actually,</span> <span m="714840">this</span> <span
  m="715620">will</span> <span m="715830">be</span> <span m="716010">also</span>
  <span m="716490">in</span> <span m="716890">2.2.</span> <span
  m="718710">And</span> <span m="718830">maybe</span> <span
  m="719160">this</span> <span m="719430">is</span> <span m="719620">what</span>
  <span m="719850">I'm</span> <span m="721530">saying</span> <span
  m="721860">more</span> <span m="722130">about</span> <span
  m="722490">today.</span> <span m="723160">So</span> <span
  m="724230">I'll</span> <span m="724440">put</span> <span m="724680">a</span>
  <span m="724740">little</span> <span m="724950">star</span> <span
  m="725520">for</span> <span m="726330">today,</span> <span
  m="727380">here.</span> <span m="728460">What</span> <span
  m="728640">do</span> <span m="728700">you</span> <span
  m="728790">do?</span></p><p><span m="729600">So</span> <span
  m="729810">this</span> <span m="730050">is</span> <span m="730170">a</span>
  <span m="730260">case</span> <span m="730800">where</span> <span
  m="731910">the</span> <span m="732030">matrix</span> <span
  m="732570">is</span> <span m="732750">nearly</span> <span
  m="733140">singular.</span> <span m="735960">You're</span> <span
  m="736540">in</span> <span m="736690">danger.</span> <span
  m="737290">It's</span> <span m="737470">inverse</span> <span
  m="738000">is</span> <span m="738160">going</span> <span m="738310">to</span>
  <span m="738430">be</span> <span m="738610">big--</span> <span
  m="739570">unreasonably</span> <span m="740350">big.</span> <span
  m="741190">And</span> <span m="741340">I</span> <span m="741460">wrote</span>
  <span m="741850">inverse</span> <span m="742420">problems</span> <span
  m="743020">there,</span> <span m="743320">because</span> <span
  m="745330">inverse</span> <span m="745870">problem</span> <span
  m="746230">is</span> <span m="746740">a</span> <span m="747640">type</span>
  <span m="748060">of</span> <span m="750910">problem</span> <span
  m="751360">with</span> <span m="751900">an</span> <span
  m="752170">application</span> <span m="752920">that</span> <span
  m="753100">you</span> <span m="753220">often</span> <span
  m="753550">need</span> <span m="753730">to</span> <span
  m="753820">solve</span> <span m="754360">or</span> <span
  m="754450">that</span> <span m="756010">engineering</span> <span
  m="756760">and</span> <span m="758470">science</span> <span
  m="759340">have</span> <span m="759580">to</span> <span
  m="759700">solve.</span> <span m="760970">So</span> <span
  m="761030">I'll</span> <span m="761160">just</span> <span
  m="761350">say</span> <span m="761590">a</span> <span m="761650">little</span>
  <span m="761830">more</span> <span m="762070">about</span> <span
  m="762370">that,</span> <span m="763300">but</span> <span
  m="764050">that's</span> <span m="764320">a</span> <span
  m="764410">typical</span> <span m="765190">application</span> <span
  m="766030">in</span> <span m="766180">which</span> <span
  m="768190">you're</span> <span m="768370">near</span> <span
  m="768610">singular.</span> <span m="770240">Your</span> <span
  m="770570">matrix</span> <span m="771110">isn't</span> <span
  m="771380">good</span> <span m="771620">enough</span> <span
  m="772010">to</span> <span m="772550">invert.</span></p><p><span
  m="773720">Well,</span> <span m="773960">of</span> <span
  m="774050">course,</span> <span m="774350">you</span> <span
  m="774470">could</span> <span m="774830">always</span> <span
  m="775070">say,</span> <span m="775340">well,</span> <span
  m="775580">I'll</span> <span m="775690">just</span> <span
  m="775970">use</span> <span m="776240">the</span> <span
  m="776300">pseudo</span> <span m="776720">inverse,</span> <span
  m="777140">but</span> <span m="778250">numerically,</span> <span
  m="779000">that's</span> <span m="779600">like</span> <span
  m="779870">cheating.</span> <span m="780440">You've</span> <span
  m="780650">got</span> <span m="780870">to</span> <span m="781970">get</span>
  <span m="782180">in</span> <span m="782330">there</span> <span
  m="782600">and</span> <span m="782690">do</span> <span
  m="782900">something</span> <span m="783350">about</span> <span
  m="783680">it.</span> <span m="784380">So</span> <span
  m="784550">inverse</span> <span m="785000">problems</span> <span
  m="785540">would</span> <span m="785750">be</span> <span
  m="786530">examples.</span> <span m="790180">Actually,</span> <span
  m="790520">as</span> <span m="790660">I</span> <span m="790750">write</span>
  <span m="791020">that,</span> <span m="791290">I</span> <span
  m="791410">think</span> <span m="792220">that</span> <span
  m="792490">would</span> <span m="792640">be</span> <span m="792790">a</span>
  <span m="792880">topic</span> <span m="793990">that</span> <span
  m="794290">I</span> <span m="794440">should</span> <span m="794680">add</span>
  <span m="795100">to</span> <span m="795250">the</span> <span
  m="795340">list</span> <span m="795700">of</span> <span
  m="795790">potential</span> <span m="796360">topics</span> <span
  m="796870">for</span> <span m="797110">a</span> <span m="797890">three</span>
  <span m="798160">week</span> <span m="798400">project.</span> <span
  m="799120">Look</span> <span m="799420">up</span> <span m="800310">a</span>
  <span m="800410">book</span> <span m="800740">on</span> <span
  m="800980">inverse</span> <span m="801550">problems.</span></p><p><span
  m="802360">So</span> <span m="802510">what</span> <span m="803050">do</span>
  <span m="803200">I</span> <span m="803290">mean</span> <span
  m="803560">by</span> <span m="803710">an</span> <span
  m="803800">inverse</span> <span m="804250">problem?</span> <span
  m="804640">I'll</span> <span m="804700">just</span> <span
  m="805000">finish</span> <span m="805390">this</span> <span
  m="805690">thought.</span> <span m="806880">What's</span> <span
  m="807310">an</span> <span m="807430">inverse</span> <span
  m="807880">problem?</span> <span m="809020">Typically,</span> <span
  m="815360">you</span> <span m="815820">know</span> <span
  m="816060">about</span> <span m="816360">a</span> <span
  m="816480">system,</span> <span m="817020">say</span> <span
  m="817290">a</span> <span m="817890">network,</span> <span
  m="821330">RLC</span> <span m="821730">network,</span> <span
  m="823260">and</span> <span m="823950">you</span> <span m="824520">give</span>
  <span m="824760">it</span> <span m="824850">a</span> <span
  m="824910">voltage</span> <span m="825540">or</span> <span
  m="825720">current.</span> <span m="826810">You</span> <span
  m="826950">give</span> <span m="827160">it</span> <span m="827250">an</span>
  <span m="827400">input,</span> <span m="828330">and</span> <span
  m="828480">you</span> <span m="828780">find</span> <span m="829140">the</span>
  <span m="829920">output.</span> <span m="830310">You</span> <span
  m="830490">find</span> <span m="830820">out</span> <span
  m="830940">what</span> <span m="831180">current</span> <span
  m="831540">flows,</span> <span m="832610">what</span> <span
  m="832830">the</span> <span m="833100">voltages</span> <span
  m="833760">are.</span> <span m="834960">But</span> <span
  m="835560">inverse</span> <span m="836040">problems</span> <span
  m="836670">are--</span> <span m="837600">suppose</span> <span
  m="838200">you</span> <span m="838350">know</span> <span m="840960">the</span>
  <span m="842920">response</span> <span m="844980">to</span> <span
  m="845130">different</span> <span m="845550">voltages.</span></p><p><span
  m="847730">What</span> <span m="849110">was</span> <span m="849350">the</span>
  <span m="849470">network?</span> <span m="851210">You</span> <span
  m="851330">see</span> <span m="851660">the</span> <span
  m="852290">problem?</span> <span m="852560">Let</span> <span
  m="852710">me</span> <span m="852830">say</span> <span m="853040">it</span>
  <span m="853130">again.</span> <span m="854150">Discover</span> <span
  m="854690">what</span> <span m="854870">the</span> <span
  m="854960">network</span> <span m="855530">is</span> <span
  m="855800">from</span> <span m="856040">its</span> <span
  m="856220">outputs.</span> <span m="857860">So</span> <span
  m="858040">that</span> <span m="858310">turns</span> <span
  m="858670">out</span> <span m="858880">to</span> <span
  m="859060">typically</span> <span m="859780">be</span> <span
  m="860050">a</span> <span m="860110">problem</span> <span
  m="860680">that</span> <span m="861400">gives</span> <span
  m="861760">nearly</span> <span m="862180">singular</span> <span
  m="862720">matrices.</span> <span m="863640">That's</span> <span
  m="864200">a</span> <span m="865340">difficult</span> <span
  m="866180">problem.</span> <span m="868190">A</span> <span
  m="868340">lot</span> <span m="868640">of</span> <span
  m="868760">nearby</span> <span m="869240">networks</span> <span
  m="869870">would</span> <span m="870050">give</span> <span
  m="870260">virtually</span> <span m="870830">the</span> <span
  m="870950">same</span> <span m="871340">output.</span></p><p><span
  m="872440">So</span> <span m="874430">you</span> <span m="874550">have</span>
  <span m="874730">a</span> <span m="875150">matrix</span> <span
  m="875750">that's</span> <span m="875960">nearly</span> <span
  m="876410">singular.</span> <span m="877700">It's</span> <span
  m="877970">got</span> <span m="880550">singular</span> <span
  m="881030">values</span> <span m="881600">very</span> <span
  m="881960">close</span> <span m="882350">to</span> <span m="882470">0.</span>
  <span m="883340">What</span> <span m="883490">do</span> <span
  m="883550">you</span> <span m="883670">do</span> <span m="883970">then?</span>
  <span m="886400">Well,</span> <span m="888010">the</span> <span
  m="888190">world</span> <span m="888640">of</span> <span
  m="888760">inverse</span> <span m="889240">problems</span> <span
  m="889810">thinks</span> <span m="890260">of</span> <span
  m="891400">adding</span> <span m="892060">a</span> <span
  m="892150">penalty</span> <span m="892690">term,</span> <span
  m="893470">some</span> <span m="893830">kind</span> <span m="894100">of</span>
  <span m="894220">a</span> <span m="894310">penalty</span> <span
  m="894790">term.</span> <span m="895660">When</span> <span m="895870">I</span>
  <span m="895990">minimize</span> <span m="896650">this</span> <span
  m="896920">thing</span> <span m="898120">just</span> <span
  m="898360">by</span> <span m="898600">itself,</span> <span
  m="899110">in</span> <span m="899230">the</span> <span m="899350">usual</span>
  <span m="899800">way,</span> <span m="900330">A</span> <span
  m="900520">transpose,</span> <span m="901300">it</span> <span
  m="902170">has</span> <span m="902440">a</span> <span m="902530">giant</span>
  <span m="903040">inverse.</span> <span m="904472">The</span> <span
  m="904860">matrix</span> <span m="905670">A</span> <span m="906420">is</span>
  <span m="906810">badly</span> <span m="907350">conditioned.</span> <span
  m="908800">It</span> <span m="909090">takes</span> <span
  m="910050">vectors</span> <span m="911490">almost</span> <span
  m="912000">to</span> <span m="912150">0.</span></p><p><span
  m="913140">So</span> <span m="913410">that</span> <span m="913890">A</span>
  <span m="914070">transpose</span> <span m="915310">has</span> <span
  m="916710">got</span> <span m="916890">a</span> <span m="916980">giant</span>
  <span m="917490">inverse,</span> <span m="918090">and</span> <span
  m="918300">you're</span> <span m="919590">at</span> <span
  m="919710">risk</span> <span m="920100">of</span> <span
  m="920220">losing</span> <span m="920700">everything</span> <span
  m="921180">to</span> <span m="921360">round</span> <span
  m="921750">off.</span> <span m="922380">So</span> <span m="923700">this</span>
  <span m="923940">is</span> <span m="924120">the</span> <span
  m="924630">solution.</span> <span m="926490">You</span> <span
  m="926610">could</span> <span m="926790">call</span> <span
  m="927060">it</span> <span m="927150">a</span> <span m="927690">cheap</span>
  <span m="928080">solution,</span> <span m="928680">but</span> <span
  m="929550">everybody</span> <span m="930000">uses</span> <span
  m="930380">it.</span> <span m="930510">So</span> <span m="930690">I</span>
  <span m="930780">won't</span> <span m="931860">put</span> <span
  m="932070">that</span> <span m="932250">word</span> <span m="932610">on</span>
  <span m="933240">videotape.</span> <span m="936070">But</span> <span
  m="937790">that</span> <span m="938460">sort</span> <span m="938700">of</span>
  <span m="938850">resolves</span> <span m="939360">the</span> <span
  m="939510">problem,</span> <span m="939990">but</span> <span
  m="940200">then</span> <span m="940440">the</span> <span
  m="940560">question--</span> <span m="941820">it</span> <span
  m="941970">shifts</span> <span m="942420">the</span> <span
  m="942510">problem,</span> <span m="942960">anyway,</span> <span
  m="943740">to</span> <span m="943950">what</span> <span
  m="944820">number--</span> <span m="946260">what</span> <span
  m="946470">should</span> <span m="946680">be</span> <span
  m="946860">the</span> <span m="946980">penalty?</span> <span
  m="947940">How</span> <span m="948180">much</span> <span
  m="948870">should</span> <span m="949140">you</span> <span
  m="949260">penalize</span> <span m="949950">it?</span></p><p><span
  m="950110">You</span> <span m="950250">see,</span> <span m="952830">by</span>
  <span m="953070">adding</span> <span m="953460">that,</span> <span
  m="955710">you're</span> <span m="955980">going</span> <span
  m="956110">to</span> <span m="956250">make</span> <span m="956520">it</span>
  <span m="956760">invertible.</span> <span m="958500">And</span> <span
  m="958680">if</span> <span m="958800">you</span> <span m="958920">make</span>
  <span m="959220">this</span> <span m="960300">bigger,</span> <span
  m="960630">and</span> <span m="960750">bigger,</span> <span
  m="961050">and</span> <span m="961170">bigger,</span> <span
  m="962040">it's</span> <span m="962460">more</span> <span
  m="962730">and</span> <span m="962820">more</span> <span
  m="964170">well-conditioned.</span> <span m="967130">It</span> <span
  m="967910">resolves</span> <span m="968660">the</span> <span
  m="968780">trouble,</span> <span m="969110">here.</span> <span
  m="969350">And</span> <span m="970550">like</span> <span
  m="971000">today,</span> <span m="971450">I'm</span> <span
  m="971630">going</span> <span m="971800">to</span> <span m="971900">do</span>
  <span m="972110">more</span> <span m="972380">with</span> <span
  m="972600">that.</span> <span m="973780">So</span> <span m="974020">with
  that,</span> <span m="974880">I'll</span> <span m="975250">stop</span> <span
  m="975760">there</span> <span m="976210">and</span> <span
  m="976990">pick</span> <span m="977200">it</span> <span m="977320">up</span>
  <span m="977530">after</span> <span m="977890">saying</span> <span
  m="978220">something</span> <span m="978640">about</span> <span
  m="979210">6</span> <span m="979570">and</span> <span m="979720">7.</span>
  <span m="983350">I</span> <span m="983500">hope</span> <span
  m="983710">this</span> <span m="983920">is</span> <span
  m="984070">helpful.</span></p><p><span m="984770">It</span> <span
  m="984870">was</span> <span m="984970">helpful</span> <span
  m="985300">to</span> <span m="985390">me,</span> <span
  m="985690">certainly,</span> <span m="986170">to</span> <span
  m="986870">see</span> <span m="987160">all</span> <span
  m="987310">these</span> <span m="988450">possibilities</span> <span
  m="989470">and</span> <span m="989680">to</span> <span m="990370">write</span>
  <span m="990640">down</span> <span m="991430">what</span> <span
  m="992990">the</span> <span m="993100">symptom</span> <span
  m="993640">is.</span> <span m="993880">It's</span> <span
  m="994060">like</span> <span m="994330">a</span> <span
  m="996460">linear</span> <span m="997060">equation</span> <span
  m="997630">doctor.</span> <span m="998560">Like</span> <span
  m="998830">you</span> <span m="998980">look</span> <span m="999190">for</span>
  <span m="999310">the</span> <span m="999460">symptoms,</span> <span
  m="1000060">and</span> <span m="1000180">then</span> <span
  m="1000420">you</span> <span m="1000570">propose</span> <span
  m="1004740">something</span> <span m="1005160">at</span> <span
  m="1005370">CVS</span> <span m="1006090">that</span> <span
  m="1006240">works</span> <span m="1006690">or</span> <span
  m="1006900">doesn't</span> <span m="1007380">work.</span> <span
  m="1008160">But</span> <span m="1010220">you</span> <span
  m="1010610">do</span> <span m="1010790">something</span> <span
  m="1011210">about</span> <span m="1011510">it.</span> <span
  m="1012590">So</span> <span m="1013610">when</span> <span
  m="1013820">the</span> <span m="1014090">problem</span> <span
  m="1014630">is</span> <span m="1014810">too</span> <span
  m="1015050">big--</span> <span m="1019390">up</span> <span
  m="1019540">to</span> <span m="1019690">now,</span> <span
  m="1019960">the</span> <span m="1020080">problems</span> <span
  m="1020500">have</span> <span m="1020620">not</span> <span
  m="1020890">been</span> <span m="1021520">giant</span> <span
  m="1022090">out</span> <span m="1022330">of</span> <span
  m="1022420">core.</span></p><p><span m="1024430">But</span> <span
  m="1024579">now,</span> <span m="1024880">when</span> <span
  m="1025119">it's</span> <span m="1025300">too</span> <span
  m="1025569">big--</span> <span m="1026050">maybe</span> <span
  m="1026349">it's</span> <span m="1026470">still</span> <span
  m="1026740">in</span> <span m="1026920">core</span> <span
  m="1027200">but</span> <span m="1027400">really</span> <span
  m="1027730">big--</span> <span m="1028619">then</span> <span
  m="1031180">this</span> <span m="1031450">is</span> <span
  m="1031599">in</span> <span m="1031839">2.1.</span> <span
  m="1033250">So</span> <span m="1033460">that's</span> <span
  m="1034569">to</span> <span m="1034690">come</span> <span
  m="1034900">back</span> <span m="1035170">to.</span> <span
  m="1038020">The</span> <span m="1038170">word</span> <span
  m="1038470">I</span> <span m="1038589">could</span> <span
  m="1038800">have</span> <span m="1039280">written</span> <span
  m="1039579">in</span> <span m="1039760">here,</span> <span
  m="1039980">if</span> <span m="1040119">I</span> <span m="1040240">was</span>
  <span m="1040420">just</span> <span m="1040630">going</span> <span
  m="1040740">to</span> <span m="1040869">write</span> <span
  m="1041140">one</span> <span m="1041440">word,</span> <span
  m="1041800">would</span> <span m="1042010">be</span> <span
  m="1042760">iteration.</span> <span m="1045640">Iterative</span> <span
  m="1047380">methods,</span> <span m="1048640">meaning</span> <span
  m="1049270">you</span> <span m="1049570">take</span> <span
  m="1049930">a</span> <span m="1050020">step</span> <span
  m="1050410">like--</span> <span m="1051835">the</span> <span
  m="1052210">conjugate</span> <span m="1052810">radiant</span> <span
  m="1053260">method</span> <span m="1053650">is</span> <span
  m="1055040">the</span> <span m="1055300">hero</span> <span
  m="1055990">of</span> <span m="1056170">iterative</span> <span
  m="1056740">methods.</span></p><p><span m="1057580">And</span> <span
  m="1057730">then</span> <span m="1058540">that</span> <span
  m="1058750">name</span> <span m="1059050">I</span> <span
  m="1059200">erased</span> <span m="1059650">is</span> <span
  m="1059800">Krylov,</span> <span m="1060760">and</span> <span
  m="1061360">there</span> <span m="1061510">are</span> <span
  m="1061600">other</span> <span m="1061840">names</span> <span
  m="1062380">associated</span> <span m="1063160">with</span> <span
  m="1064180">iterative</span> <span m="1064660">methods.</span> <span
  m="1065080">So</span> <span m="1065260">that's</span> <span
  m="1066460">the</span> <span m="1066610">section</span> <span
  m="1067090">that</span> <span m="1067300">we</span> <span
  m="1068470">passed</span> <span m="1068950">over</span> <span
  m="1069340">just</span> <span m="1071060">to</span> <span
  m="1071520">get</span> <span m="1071880">rolling,</span> <span
  m="1072420">but</span> <span m="1072660">we'll</span> <span
  m="1072840">come</span> <span m="1073020">back</span> <span
  m="1073290">to.</span> <span m="1076030">So</span> <span
  m="1076110">then</span> <span m="1076650">that</span> <span
  m="1077400">one,</span> <span m="1078080">you</span> <span
  m="1078270">never</span> <span m="1078510">get</span> <span
  m="1078720">the</span> <span m="1078870">exact</span> <span
  m="1079350">answer,</span> <span m="1079860">but</span> <span
  m="1080190">you</span> <span m="1080820">get</span> <span
  m="1081000">closer</span> <span m="1081510">and</span> <span
  m="1081630">closer.</span> <span m="1083190">If</span> <span
  m="1083430">the</span> <span m="1083580">iterative</span> <span
  m="1083890">method</span> <span m="1084410">is</span> <span
  m="1084530">successful,</span> <span m="1085230">like</span> <span
  m="1085470">conjugate</span> <span m="1085980">gradients,</span> <span
  m="1086580">you</span> <span m="1086700">get</span> <span
  m="1087420">pretty</span> <span m="1087690">close,</span> <span
  m="1088140">pretty</span> <span m="1088440">fast.</span></p><p><span
  m="1089250">And</span> <span m="1089400">then</span> <span
  m="1090270">you</span> <span m="1090420">say,</span> <span
  m="1090660">OK,</span> <span m="1091050">I'll</span> <span
  m="1091230">take</span> <span m="1091470">it.</span> <span
  m="1092820">And</span> <span m="1093090">then</span> <span
  m="1093540">finally,</span> <span m="1096240">way</span> <span
  m="1096510">too</span> <span m="1096720">big,</span> <span
  m="1098050">like</span> <span m="1098440">nowhere.</span> <span
  m="1099160">You're</span> <span m="1099550">not</span> <span
  m="1099880">in</span> <span m="1100060">core.</span> <span
  m="1100960">Just</span> <span m="1101780">your</span> <span
  m="1102040">matrix--</span> <span m="1102700">you</span> <span
  m="1102790">just</span> <span m="1103030">have</span> <span
  m="1103180">a</span> <span m="1103240">giant,</span> <span
  m="1103910">giant</span> <span m="1104260">problem,</span> <span
  m="1104890">which,</span> <span m="1105190">of</span> <span
  m="1105340">course,</span> <span m="1105670">is</span> <span
  m="1106210">happening</span> <span m="1106660">these</span> <span
  m="1106930">days.</span> <span m="1108540">And</span> <span
  m="1108750">then</span> <span m="1109620">one</span> <span
  m="1109980">way</span> <span m="1110220">to</span> <span m="1110370">do</span>
  <span m="1110610">it</span> <span m="1110820">is</span> <span
  m="1111360">your</span> <span m="1111840">matrix.</span> <span
  m="1113490">You</span> <span m="1113610">can't</span> <span
  m="1113940">even</span> <span m="1114570">look</span> <span
  m="1114930">at</span> <span m="1115110">the</span> <span
  m="1115260">matrix</span> <span m="1115830">A,</span> <span
  m="1116250">much</span> <span m="1116580">less</span> <span
  m="1116940">A</span> <span m="1117150">transpose.</span> <span
  m="1117840">A</span> <span m="1118230">transpose</span> <span
  m="1118890">would</span> <span m="1119040">be</span> <span
  m="1119430">unthinkable.</span> <span m="1120870">You</span> <span
  m="1121290">couldn't</span> <span m="1121860">do</span> <span
  m="1122070">it</span> <span m="1122280">in</span> <span m="1125250">a</span>
  <span m="1125310">year.</span></p><p><span m="1126990">So</span> <span
  m="1128490">randomized</span> <span m="1129610">linear</span> <span
  m="1129930">algebra</span> <span m="1130350">has</span> <span
  m="1130530">popped</span> <span m="1130920">up,</span> <span
  m="1132430">and</span> <span m="1132760">the</span> <span
  m="1132940">idea</span> <span m="1133300">there,</span> <span
  m="1133750">which</span> <span m="1133960">we'll</span> <span
  m="1134200">see,</span> <span m="1135580">is</span> <span
  m="1136150">to</span> <span m="1137500">use</span> <span
  m="1138070">probability</span> <span m="1140050">to</span> <span
  m="1140230">sample</span> <span m="1140920">the</span> <span
  m="1141070">matrix</span> <span m="1145460">and</span> <span
  m="1146090">work</span> <span m="1146510">with</span> <span
  m="1146780">your</span> <span m="1146930">samples.</span> <span
  m="1148750">So</span> <span m="1150140">if</span> <span m="1150350">the</span>
  <span m="1150470">matrix</span> <span m="1152650">is</span> <span
  m="1153830">way</span> <span m="1154040">too</span> <span
  m="1154220">big,</span> <span m="1154460">but</span> <span
  m="1154610">not</span> <span m="1154820">too</span> <span
  m="1155000">crazy,</span> <span m="1155580">so</span> <span
  m="1155840">to</span> <span m="1155900">speak,</span> <span
  m="1157020">then</span> <span m="1157880">you</span> <span
  m="1158030">could</span> <span m="1158240">sample</span> <span
  m="1158930">the</span> <span m="1159080">columns</span> <span
  m="1161200">and</span> <span m="1161410">the</span> <span
  m="1161500">rows,</span> <span m="1163090">and</span> <span
  m="1163810">get</span> <span m="1166090">an</span> <span
  m="1166270">answer</span> <span m="1166660">from</span> <span
  m="1166930">the</span> <span m="1167050">sample.</span> <span
  m="1169280">See,</span> <span m="1169550">if</span> <span m="1169700">I</span>
  <span m="1169820">sample</span> <span m="1170330">the</span> <span
  m="1170900">columns</span> <span m="1171410">of</span> <span
  m="1171530">a</span> <span m="1171590">matrix,</span> <span
  m="1172160">I'm</span> <span m="1172340">getting--</span> <span
  m="1173420">so</span> <span m="1173930">what</span> <span
  m="1174110">does</span> <span m="1174230">sampling</span> <span
  m="1174770">mean?</span> <span m="1175010">Let me</span> <span
  m="1175460">just</span> <span m="1176630">complete</span> <span
  m="1177050">this,</span> <span m="1177700">say,</span> <span
  m="1178570">add</span> <span m="1179030">a</span> <span
  m="1179120">little</span> <span m="1179420">to</span> <span
  m="1179570">this</span> <span m="1179860">thought.</span></p><p><span
  m="1180710">Sample</span> <span m="1181160">a</span> <span
  m="1181220">matrix.</span> <span m="1182010">So</span> <span
  m="1182060">I</span> <span m="1182090">have</span> <span m="1182210">a</span>
  <span m="1182270">giant</span> <span m="1182780">matrix</span> <span
  m="1183065">A.</span> <span m="1184895">It</span> <span
  m="1185290">might</span> <span m="1185590">be</span> <span
  m="1185770">sparse,</span> <span m="1186310">of</span> <span
  m="1186430">course.</span> <span m="1186760">I</span> <span
  m="1186850">didn't</span> <span m="1187150">distinguish</span> <span
  m="1187930">over</span> <span m="1188170">their</span> <span
  m="1188500">sparse</span> <span m="1189310">things.</span> <span
  m="1189670">That</span> <span m="1189790">would</span> <span
  m="1189940">be</span> <span m="1190060">another</span> <span
  m="1191020">thing.</span> <span m="1191620">So</span> <span
  m="1191830">if</span> <span m="1192010">I</span> <span m="1192160">just</span>
  <span m="1192400">take</span> <span m="1197400">random</span> <span
  m="1197880">X's,</span> <span m="1198960">more</span> <span
  m="1199170">than</span> <span m="1199380">one,</span> <span
  m="1201930">but</span> <span m="1202140">not</span> <span
  m="1203510">the</span> <span m="1203600">full</span> <span
  m="1204490">n</span> <span m="1204770">dimensions,</span> <span
  m="1207230">those</span> <span m="1207620">will</span> <span
  m="1207800">give</span> <span m="1208040">me</span> <span
  m="1208490">random</span> <span m="1209090">guys</span> <span
  m="1209540">in</span> <span m="1209660">the</span> <span
  m="1209750">column</span> <span m="1210140">space.</span> <span
  m="1212510">And</span> <span m="1212960">if</span> <span
  m="1213320">the</span> <span m="1213680">matrix</span> <span
  m="1214310">is</span> <span m="1214880">reasonable,</span> <span
  m="1218300">it</span> <span m="1218660">won't</span> <span
  m="1218930">take</span> <span m="1219200">too</span> <span
  m="1219410">many</span> <span m="1219740">to</span> <span
  m="1219860">have</span> <span m="1220040">a</span> <span
  m="1220100">pretty</span> <span m="1220400">reasonable</span> <span
  m="1220910">idea</span> <span m="1221210">of</span> <span
  m="1221300">what</span> <span m="1221450">that</span> <span
  m="1221630">column</span> <span m="1221990">space</span> <span
  m="1222350">is</span> <span m="1222470">like,</span> <span
  m="1224260">and</span> <span m="1224600">with</span> <span m="1224870">it's
  the</span> <span m="1225050">right</span> <span m="1225320">hand</span> <span
  m="1225530">side.</span></p><p><span m="1226520">So</span> <span
  m="1226700">this</span> <span m="1226940">world</span> <span
  m="1227360">of</span> <span m="1227570">randomized</span> <span
  m="1228500">linear</span> <span m="1228920">algebra</span> <span
  m="1229730">has</span> <span m="1231560">grown</span> <span
  m="1231920">because</span> <span m="1232280">it</span> <span
  m="1232400">had</span> <span m="1232610">to.</span> <span
  m="1233870">And</span> <span m="1234200">of</span> <span
  m="1234320">course,</span> <span m="1235970">any</span> <span
  m="1236270">statement</span> <span m="1237080">can</span> <span
  m="1237290">never</span> <span m="1237620">say</span> <span
  m="1238040">for</span> <span m="1238310">sure</span> <span
  m="1238880">you're</span> <span m="1239030">going</span> <span
  m="1239220">to</span> <span m="1239330">get</span> <span
  m="1239510">the</span> <span m="1239600">right</span> <span
  m="1239900">answer,</span> <span m="1240340">but</span> <span
  m="1243100">using</span> <span m="1243530">the</span> <span
  m="1243920">inequalities</span> <span m="1244850">of</span> <span
  m="1245000">probability,</span> <span m="1247070">you</span> <span
  m="1247250">can</span> <span m="1248000">often</span> <span
  m="1248390">say</span> <span m="1248780">that</span> <span
  m="1249320">the</span> <span m="1249500">chance</span> <span
  m="1249980">of</span> <span m="1250130">being</span> <span
  m="1250430">way</span> <span m="1250760">off</span> <span
  m="1251220">is</span> <span m="1252070">less</span> <span
  m="1252370">than</span> <span m="1252580">1</span> <span m="1252880">in</span>
  <span m="1253020">2</span> <span m="1253280">to</span> <span
  m="1253400">the</span> <span m="1254130">20th</span> <span
  m="1254870">or</span> <span m="1254990">something.</span> <span
  m="1255650">So</span> <span m="1256400">the</span> <span
  m="1256580">answer</span> <span m="1256910">is,</span> <span
  m="1257160">in</span> <span m="1257480">reality,</span> <span
  m="1258110">you</span> <span m="1258980">get</span> <span m="1259880">a</span>
  <span m="1259940">good</span> <span m="1260180">answer.</span></p><p><span
  m="1261580">That</span> <span m="1261920">is</span> <span
  m="1263390">the</span> <span m="1263510">end</span> <span
  m="1263720">of</span> <span m="1263780">this</span> <span
  m="1264230">chapter,</span> <span m="1264830">2.4.</span> <span
  m="1266390">So</span> <span m="1266840">this</span> <span
  m="1267050">is</span> <span m="1267170">all</span> <span
  m="1267370">chapter</span> <span m="1267860">2,</span> <span
  m="1268370">really.</span> <span m="1271700">The</span> <span
  m="1273770">iterative</span> <span m="1274340">method's</span> <span
  m="1274850">in</span> <span m="1275000">2.1.</span> <span
  m="1276890">Most</span> <span m="1277250">of</span> <span
  m="1277310">this</span> <span m="1277700">is</span> <span
  m="1277880">in</span> <span m="1278150">2.2.</span> <span
  m="1280980">Big</span> <span m="1282640">is</span> <span
  m="1283000">2.3,</span> <span m="1284050">and</span> <span
  m="1284170">then</span> <span m="1284860">really</span> <span
  m="1285340">big</span> <span m="1285730">is</span> <span
  m="1286420">randomized</span> <span m="1287200">in</span> <span
  m="1287320">2.4.</span> <span m="1289540">So</span> <span
  m="1289900">now,</span> <span m="1290260">where</span> <span
  m="1290530">are</span> <span m="1290650">we?</span> <span m="1292650">You
  were</span> <span m="1292900">going</span> <span m="1292970">to</span> <span
  m="1293050">let</span> <span m="1293200">me</span> <span
  m="1293350">know</span> <span m="1293740">or</span> <span
  m="1293920">not</span> <span m="1294610">if</span> <span
  m="1294790">this</span> <span m="1295090">is</span> <span
  m="1296320">useful</span> <span m="1296870">to</span> <span
  m="1297180">see.</span> <span m="1297710">But</span> <span
  m="1297970">you</span> <span m="1298330">sort of</span> <span
  m="1299560">see</span> <span m="1299800">what</span> <span
  m="1300400">are</span> <span m="1300520">real</span> <span
  m="1300790">life</span> <span m="1301870">problems.</span> <span
  m="1303070">And</span> <span m="1303400">of</span> <span
  m="1303520">course,</span> <span m="1303880">we're</span> <span
  m="1305140">highly,</span> <span m="1305590">especially</span> <span
  m="1306190">interested</span> <span m="1306940">in</span> <span
  m="1307210">getting</span> <span m="1307660">to</span> <span
  m="1308440">the</span> <span m="1308590">deep</span> <span
  m="1308890">learning</span> <span m="1309340">examples,</span> <span
  m="1310750">which</span> <span m="1310990">are</span> <span
  m="1311110">underdetermined.</span></p><p><span m="1313720">Then</span> <span
  m="1314020">when</span> <span m="1314230">you're</span> <span
  m="1314410">underdetermined,</span> <span m="1315220">you've</span> <span
  m="1315370">got</span> <span m="1316300">many</span> <span
  m="1316660">solutions,</span> <span m="1318010">and</span> <span
  m="1318250">the</span> <span m="1318340">question</span> <span
  m="1318850">is,</span> <span m="1319130">which</span> <span
  m="1319300">one</span> <span m="1319540">is</span> <span m="1319690">a</span>
  <span m="1319750">good</span> <span m="1319990">one?</span> <span
  m="1320740">And</span> <span m="1320810">in</span> <span
  m="1320950">deep</span> <span m="1321220">learning,</span> <span
  m="1321640">I</span> <span m="1321820">just</span> <span
  m="1322690">can't</span> <span m="1322900">resist</span> <span
  m="1324220">saying</span> <span m="1324640">another</span> <span
  m="1324970">word.</span> <span m="1329350">So</span> <span
  m="1329530">there</span> <span m="1329640">are</span> <span
  m="1329670">many</span> <span m="1329950">solutions.</span> <span
  m="1332840">What</span> <span m="1333080">to</span> <span
  m="1333200">do?</span> <span m="1334160">Well,</span> <span
  m="1334550">you</span> <span m="1335570">pick</span> <span
  m="1336080">some</span> <span m="1336365">algorithm,</span> <span
  m="1337820">like</span> <span m="1338210">steepest</span> <span
  m="1338660">descent,</span> <span m="1340070">which</span> <span
  m="1340350">is</span> <span m="1340480">going</span> <span
  m="1340570">to</span> <span m="1340760">find</span> <span m="1341180">a</span>
  <span m="1341240">solution.</span> <span m="1342970">So</span> <span
  m="1343210">you</span> <span m="1343780">hope</span> <span
  m="1344050">it's</span> <span m="1344230">a</span> <span
  m="1344290">good</span> <span m="1344500">one.</span> <span
  m="1345790">And</span> <span m="1346510">what</span> <span
  m="1346750">does</span> <span m="1346900">a</span> <span
  m="1346990">good</span> <span m="1347200">one</span> <span
  m="1347440">mean</span> <span m="1347800">verses</span> <span
  m="1348280">a</span> <span m="1348370">not</span> <span
  m="1348670">good</span> <span m="1348910">one?</span> <span
  m="1349540">They're</span> <span m="1349720">all</span> <span
  m="1349900">solutions.</span></p><p><span m="1351570">A</span> <span
  m="1351670">good</span> <span m="1351970">one</span> <span
  m="1352300">means</span> <span m="1352900">that</span> <span
  m="1353110">when</span> <span m="1353350">you</span> <span
  m="1353500">apply</span> <span m="1354040">it</span> <span
  m="1354160">to</span> <span m="1354370">the</span> <span
  m="1354520">test</span> <span m="1354940">data</span> <span
  m="1355330">that</span> <span m="1355480">you</span> <span
  m="1355630">haven't</span> <span m="1355960">yet</span> <span
  m="1356200">seen,</span> <span m="1357640">it</span> <span
  m="1357790">gives</span> <span m="1358120">good</span> <span
  m="1358360">results</span> <span m="1359080">on</span> <span
  m="1359260">the</span> <span m="1359350">test</span> <span
  m="1359740">data.</span> <span m="1361270">The</span> <span
  m="1361660">solution</span> <span m="1362230">has</span> <span
  m="1362410">learned</span> <span m="1362950">something</span> <span
  m="1363460">from</span> <span m="1363670">the</span> <span
  m="1363790">training</span> <span m="1364270">data,</span> <span
  m="1365020">and</span> <span m="1365200">it</span> <span
  m="1365290">works</span> <span m="1365680">on</span> <span
  m="1365800">the</span> <span m="1365920">test</span> <span
  m="1366220">data.</span> <span m="1367220">So</span> <span
  m="1367390">that's</span> <span m="1368230">the</span> <span
  m="1369430">big</span> <span m="1369910">question</span> <span
  m="1370540">in</span> <span m="1370690">deep</span> <span
  m="1370990">learning.</span> <span m="1371860">How</span> <span
  m="1372310">does</span> <span m="1372520">it</span> <span
  m="1372670">happen</span> <span m="1373210">that</span> <span
  m="1373510">you,</span> <span m="1373690">by</span> <span
  m="1374050">doing</span> <span m="1374410">gradient</span> <span
  m="1374950">descent</span> <span m="1375640">or</span> <span
  m="1375790">whatever</span> <span m="1376300">algorithm--</span> <span
  m="1378220">how</span> <span m="1378520">does</span> <span
  m="1378730">that</span> <span m="1378940">algorithm</span> <span
  m="1379990">bias</span> <span m="1381220">the</span> <span
  m="1381370">solution?</span></p><p><span m="1382610">It's</span> <span
  m="1382630">called</span> <span m="1382930">implicit</span> <span
  m="1383710">bias.</span> <span m="1384670">How</span> <span
  m="1384940">does</span> <span m="1385150">that</span> <span
  m="1385360">algorithm</span> <span m="1385930">bias</span> <span
  m="1386390">a</span> <span m="1386610">solution</span> <span
  m="1387190">toward</span> <span m="1388990">a</span> <span
  m="1389080">solution</span> <span m="1390500">that</span> <span
  m="1390760">generalizes,</span> <span m="1391810">that</span> <span
  m="1391990">works</span> <span m="1392440">on</span> <span
  m="1392620">test</span> <span m="1392950">data?</span> <span
  m="1394270">And</span> <span m="1394480">you</span> <span
  m="1394600">can</span> <span m="1394780">think</span> <span
  m="1395020">of</span> <span m="1395140">algorithms</span> <span
  m="1395890">which</span> <span m="1396130">would</span> <span
  m="1396790">approach</span> <span m="1397340">a</span> <span
  m="1397840">solution</span> <span m="1398410">that</span> <span
  m="1398530">did</span> <span m="1398710">not</span> <span
  m="1399010">work</span> <span m="1399340">on</span> <span
  m="1399490">test</span> <span m="1399760">data.</span> <span
  m="1401160">So</span> <span m="1401930">that's</span> <span
  m="1402230">what</span> <span m="1402410">you</span> <span
  m="1402500">want</span> <span m="1402680">to</span> <span
  m="1402740">stay</span> <span m="1402980">away</span> <span
  m="1403250">from.</span> <span m="1403640">You</span> <span
  m="1403670">want</span> <span m="1403910">the</span> <span
  m="1404000">ones</span> <span m="1404300">that</span> <span
  m="1404390">work.</span> <span m="1404750">So</span> <span
  m="1405220">there's</span> <span m="1406370">very</span> <span
  m="1407270">deep</span> <span m="1408140">math</span> <span
  m="1408800">questions</span> <span m="1409610">there,</span> <span
  m="1411050">which</span> <span m="1411380">are</span> <span
  m="1411680">kind</span> <span m="1411890">of</span> <span
  m="1412040">new.</span> <span m="1413340">They</span> <span
  m="1413420">didn't</span> <span m="1413660">arise</span> <span
  m="1414170">until</span> <span m="1414650">they</span> <span
  m="1414800">did.</span></p><p><span m="1416430">And</span> <span
  m="1418350">we'll</span> <span m="1419520">try</span> <span
  m="1419760">to</span> <span m="1419880">save</span> <span
  m="1420270">some</span> <span m="1420570">of</span> <span
  m="1420870">what's</span> <span m="1422550">being</span> <span
  m="1422940">understood.</span> <span m="1425190">Can</span> <span
  m="1425430">I</span> <span m="1426630">focus</span> <span
  m="1427920">now</span> <span m="1428430">on,</span> <span
  m="1429290">for</span> <span m="1430200">probably</span> <span
  m="1430560">the</span> <span m="1430680">rest</span> <span
  m="1430980">of</span> <span m="1431070">today,</span> <span
  m="1431730">this</span> <span m="1432030">case,</span> <span
  m="1433090">when</span> <span m="1433380">the</span> <span
  m="1433500">matrix</span> <span m="1434040">is</span> <span
  m="1434190">nearly</span> <span m="1434580">singular?</span> <span
  m="1437030">So</span> <span m="1438020">you</span> <span
  m="1438170">could</span> <span m="1438620">apply</span> <span
  m="1439130">elimination,</span> <span m="1439940">but</span> <span
  m="1440150">it</span> <span m="1440600">would</span> <span
  m="1440780">give</span> <span m="1441020">a</span> <span
  m="1441080">poor</span> <span m="1441410">result.</span> <span
  m="1443660">So</span> <span m="1445370">one</span> <span
  m="1445760">solution</span> <span m="1446420">is</span> <span
  m="1449930">the</span> <span m="1450080">SVD.</span> <span
  m="1451330">I</span> <span m="1451420">haven't even</span> <span
  m="1451890">mentioned</span> <span m="1452420">the</span> <span
  m="1452770">SVD,</span> <span m="1453320">here,</span> <span m="1453500">as
  an</span> <span m="1453650">algorithm,</span> <span m="1454440">but</span>
  <span m="1454580">of</span> <span m="1454640">course,</span> <span
  m="1455000">it</span> <span m="1455120">is.</span></p><p><span
  m="1456250">The</span> <span m="1456410">SVD</span> <span
  m="1457940">gives</span> <span m="1458300">you</span> <span
  m="1459800">an</span> <span m="1459920">answer.</span> <span
  m="1460340">Boy,</span> <span m="1460820">where</span> <span
  m="1461030">should</span> <span m="1461210">that</span> <span
  m="1461450">have</span> <span m="1461570">gone?</span> <span
  m="1462020">Well,</span> <span m="1462785">the</span> <span
  m="1463190">space</span> <span m="1463610">over</span> <span
  m="1463850">here,</span> <span m="1465220">the</span> <span
  m="1465350">SVD.</span> <span m="1467660">So</span> <span
  m="1467870">that</span> <span m="1468170">produces--</span> <span
  m="1471920">you</span> <span m="1472130">have</span> <span
  m="1472430">A</span> <span m="1472710">=</span> <span m="1472910">U</span>
  <span m="1473150">sigma</span> <span m="1473390">V</span> <span
  m="1473750">transposed,</span> <span m="1475160">and</span> <span
  m="1475280">then</span> <span m="1475520">A</span> <span
  m="1475760">inverse</span> <span m="1476540">is</span> <span
  m="1476960">V</span> <span m="1477830">sigma</span> <span
  m="1478340">inverse</span> <span m="1479230">U</span> <span
  m="1479480">transposed.</span> <span m="1486670">So</span> <span
  m="1486850">we're</span> <span m="1487120">in</span> <span
  m="1487210">the</span> <span m="1487330">case,</span> <span
  m="1487840">here.</span> <span m="1488170">We're</span> <span
  m="1488470">talking</span> <span m="1488860">about</span> <span
  m="1489100">number</span> <span m="1489400">5.</span> <span
  m="1490510">Nearly</span> <span m="1491020">singular,</span> <span
  m="1491490">where</span> <span m="1491980">sigma</span> <span
  m="1493060">has</span> <span m="1493330">some</span> <span
  m="1493570">very</span> <span m="1493960">small,</span> <span
  m="1494620">singular</span> <span m="1495190">values.</span></p><p><span
  m="1496390">Then</span> <span m="1496660">sigma</span> <span
  m="1497410">inverse</span> <span m="1497920">has</span> <span
  m="1498150">some</span> <span m="1498280">very</span> <span
  m="1498610">big</span> <span m="1499000">singular</span> <span
  m="1499570">values.</span> <span m="1500570">So</span> <span
  m="1502060">you're</span> <span m="1502240">really</span> <span
  m="1502720">in</span> <span m="1504460">wild</span> <span
  m="1506560">territory</span> <span m="1507220">here</span> <span
  m="1508030">with</span> <span m="1508780">very</span> <span
  m="1509110">big</span> <span m="1509500">inverses.</span> <span
  m="1511120">So</span> <span m="1511460">that</span> <span
  m="1511660">would</span> <span m="1511810">be</span> <span
  m="1511960">one</span> <span m="1512230">way</span> <span
  m="1512440">to</span> <span m="1512590">do</span> <span m="1512830">it.</span>
  <span m="1513080">But</span> <span m="1513760">this</span> <span
  m="1514960">is</span> <span m="1515110">a</span> <span m="1515170">way</span>
  <span m="1515470">to</span> <span m="1516100">regularize</span> <span
  m="1517150">the</span> <span m="1517270">problem.</span> <span
  m="1519340">So</span> <span m="1519450">let's</span> <span
  m="1519690">just</span> <span m="1520350">pay</span> <span
  m="1520530">attention</span> <span m="1521010">to</span> <span
  m="1521100">that.</span> <span m="1528730">So</span> <span
  m="1528970">suppose</span> <span m="1529510">I</span> <span
  m="1529720">minimize</span> <span m="1532780">the</span> <span
  m="1532900">sum</span> <span m="1533290">of</span> <span m="1533460">A
  x</span> <span m="1533950">minus</span> <span m="1534400">b</span> <span
  m="1535120">squared</span> <span m="1535960">and</span> <span
  m="1536320">delta</span> <span m="1536800">squared</span> <span
  m="1539020">times</span> <span m="1539440">the</span> <span
  m="1539500">size</span> <span m="1539860">of</span> <span m="1539980">x</span>
  <span m="1540260">squared.</span> <span m="1540790">And</span> <span
  m="1540910">I'm</span> <span m="1541120">going</span> <span
  m="1541240">to</span> <span m="1541540">use</span> <span
  m="1541840">the</span> <span m="1541960">L2</span> <span
  m="1542350">norm.</span></p><p><span m="1543370">It's</span> <span
  m="1543460">going</span> <span m="1543550">to</span> <span
  m="1543700">be</span> <span m="1543820">a</span> <span
  m="1543910">least</span> <span m="1544210">squares</span> <span
  m="1546670">with</span> <span m="1546850">penalty,</span> <span
  m="1548410">so</span> <span m="1548650">of</span> <span
  m="1548770">course,</span> <span m="1549130">it's</span> <span
  m="1549340">the</span> <span m="1549480">L2</span> <span
  m="1549800">norm</span> <span m="1550090">here,</span> <span
  m="1550330">too.</span> <span m="1555240">Suppose</span> <span
  m="1555690">I</span> <span m="1555840">solve</span> <span
  m="1556230">that</span> <span m="1556530">for</span> <span
  m="1556770">a</span> <span m="1556890">delta.</span> <span
  m="1558150">For</span> <span m="1558390">some,</span> <span
  m="1560100">I</span> <span m="1560160">have</span> <span m="1560280">to</span>
  <span m="1560400">choose</span> <span m="1560940">a</span> <span
  m="1562920">positive</span> <span m="1563430">delta.</span> <span
  m="1566550">And</span> <span m="1566670">when</span> <span
  m="1566880">I</span> <span m="1566970">choose</span> <span
  m="1567270">a</span> <span m="1567330">positive</span> <span
  m="1567780">delta,</span> <span m="1568350">then</span> <span
  m="1568590">I</span> <span m="1568710">have</span> <span m="1568950">a</span>
  <span m="1569070">solvable</span> <span m="1569670">problem.</span> <span
  m="1572070">Even</span> <span m="1572400">if</span> <span
  m="1572520">this</span> <span m="1572760">goes</span> <span
  m="1573120">to</span> <span m="1573240">0,</span> <span m="1575250">or</span>
  <span m="1575490">A</span> <span m="1575820">does</span> <span
  m="1576300">crazy</span> <span m="1576750">things,</span> <span
  m="1577830">this</span> <span m="1578520">is</span> <span
  m="1580650">going</span> <span m="1580800">to</span> <span
  m="1581070">keep</span> <span m="1581370">me</span> <span
  m="1581550">away</span> <span m="1581910">from</span> <span
  m="1582330">singular.</span></p><p><span m="1583710">In</span> <span
  m="1583830">fact,</span> <span m="1584310">what</span> <span
  m="1584730">equation</span> <span m="1585870">does</span> <span
  m="1586140">that</span> <span m="1586380">lead</span> <span
  m="1586680">to?</span> <span m="1587760">So</span> <span
  m="1587940">that's</span> <span m="1588210">a</span> <span
  m="1588300">least</span> <span m="1588600">squares</span> <span
  m="1589050">problem</span> <span m="1589530">with</span> <span
  m="1589720">an</span> <span m="1589950">extra</span> <span
  m="1590970">penalty</span> <span m="1591480">term.</span> <span
  m="1592960">So</span> <span m="1593260">it</span> <span
  m="1593380">would</span> <span m="1593620">come,</span> <span
  m="1594040">I</span> <span m="1594160">suppose.</span> <span
  m="1594980">Let's</span> <span m="1595030">see,</span> <span
  m="1595240">if</span> <span m="1595360">I</span> <span
  m="1595990">write</span> <span m="1596320">the</span> <span
  m="1596640">equations</span> <span m="1598750">A</span> <span
  m="1600010">delta</span> <span m="1600430">I,</span> <span
  m="1602260">x</span> <span m="1603760">equals</span> <span
  m="1604840">b</span> <span m="1605800">0,</span> <span
  m="1608460">maybe</span> <span m="1608820">that</span> <span
  m="1609480">is</span> <span m="1609720">the</span> <span
  m="1609840">least</span> <span m="1610110">squares</span> <span
  m="1612060">equation--</span> <span m="1613170">the</span> <span
  m="1613290">usual,</span> <span m="1613830">normal</span> <span
  m="1614280">equation--</span> <span m="1615270">for</span> <span
  m="1615480">this</span> <span m="1617400">augmented</span> <span
  m="1618480">system.</span> <span m="1619200">Because</span> <span
  m="1620130">what's</span> <span m="1620580">the</span> <span
  m="1620730">error</span> <span m="1621000">here?</span> <span
  m="1621600">This</span> <span m="1621840">is</span> <span
  m="1621990">the</span> <span m="1622110">new</span> <span
  m="1622410">big</span> <span m="1622740">A--</span> <span m="1623460">A</span>
  <span m="1623820">star,</span> <span m="1624500">let's</span> <span
  m="1624740">say.</span></p><p><span m="1628330">X</span> <span
  m="1628600">equals--</span> <span m="1629350">this</span> <span
  m="1629560">is</span> <span m="1629710">the</span> <span
  m="1629830">new</span> <span m="1630190">b.</span> <span m="1633720">So</span>
  <span m="1633900">if</span> <span m="1634020">I</span> <span
  m="1634140">apply</span> <span m="1634470">least</span> <span
  m="1634740">squares</span> <span m="1635160">to</span> <span
  m="1635310">that,</span> <span m="1638170">what</span> <span
  m="1638380">do</span> <span m="1638560">I</span> <span m="1638710">do?</span>
  <span m="1639850">I</span> <span m="1639970">minimize</span> <span
  m="1640750">the</span> <span m="1640840">sum</span> <span
  m="1641170">of</span> <span m="1641290">squares.</span> <span
  m="1645580">So</span> <span m="1645790">least</span> <span
  m="1646060">squares</span> <span m="1646480">would</span> <span
  m="1646670">minimize</span> <span m="1647770">A</span> <span
  m="1648130">x</span> <span m="1648460">minus</span> <span m="1648790">b</span>
  <span m="1649000">squared.</span> <span m="1649400">That</span> <span
  m="1649600">would</span> <span m="1649720">be</span> <span
  m="1649960">from</span> <span m="1650800">the</span> <span
  m="1650920">first</span> <span m="1651310">components.</span> <span
  m="1652720">And</span> <span m="1653560">delta</span> <span
  m="1653950">squared</span> <span m="1657190">x</span> <span
  m="1657370">squared</span> <span m="1658090">from</span> <span
  m="1658540">the</span> <span m="1659200">last</span> <span
  m="1659500">component,</span> <span m="1660550">which</span> <span
  m="1660790">is</span> <span m="1660940">exactly</span> <span
  m="1661480">what</span> <span m="1661720">we</span> <span
  m="1661960">said</span> <span m="1662500">we</span> <span
  m="1662680">were</span> <span m="1662860">doing.</span> <span
  m="1663610">So</span> <span m="1663820">in</span> <span m="1663910">a</span>
  <span m="1663970">way,</span> <span m="1666100">this</span> <span
  m="1666370">is</span> <span m="1666550">the</span> <span
  m="1666700">equation</span> <span m="1667480">that</span> <span
  m="1668590">the</span> <span m="1668710">penalty</span> <span
  m="1669250">method</span> <span m="1669670">is</span> <span
  m="1669790">solving.</span></p><p><span m="1672100">And</span> <span
  m="1673570">one</span> <span m="1673840">question,</span> <span
  m="1674380">naturally,</span> <span m="1674980">is,</span> <span
  m="1675940">what</span> <span m="1676600">should</span> <span
  m="1676720">delta</span> <span m="1677110">be?</span> <span
  m="1677530">Well,</span> <span m="1678660">that</span> <span
  m="1679480">question's</span> <span m="1680350">beyond</span> <span
  m="1680830">us,</span> <span m="1681040">today.</span> <span
  m="1682450">It's</span> <span m="1683380">a</span> <span
  m="1683530">balance</span> <span m="1684280">of</span> <span
  m="1685450">what</span> <span m="1685810">you</span> <span
  m="1685900">can</span> <span m="1686090">believe,</span> <span
  m="1686800">and</span> <span m="1686950">how</span> <span
  m="1687160">much</span> <span m="1687490">noise</span> <span
  m="1687790">is</span> <span m="1688090">in</span> <span m="1688210">the</span>
  <span m="1688330">system,</span> <span m="1688870">and</span> <span
  m="1689230">everything.</span> <span m="1691900">That</span> <span
  m="1692290">choice</span> <span m="1692680">of</span> <span
  m="1692800">delta--</span> <span m="1693970">what</span> <span
  m="1694260">we</span> <span m="1694480">could</span> <span
  m="1694720">ask</span> <span m="1695170">is</span> <span m="1695760">a</span>
  <span m="1695830">math</span> <span m="1696220">question.</span> <span
  m="1698830">What</span> <span m="1699040">happens</span> <span
  m="1699580">as</span> <span m="1699760">delta</span> <span
  m="1700330">goes</span> <span m="1700690">to</span> <span
  m="1700810">0?</span> <span m="1702580">So</span> <span
  m="1702820">suppose</span> <span m="1703330">I</span> <span
  m="1703480">solve</span> <span m="1703840">this</span> <span
  m="1704080">problem.</span> <span m="1705050">Let's</span> <span
  m="1705130">see,</span> <span m="1705250">I</span> <span
  m="1705370">could</span> <span m="1705550">write</span> <span
  m="1705790">it</span> <span m="1705940">differently.</span></p><p><span
  m="1708010">What</span> <span m="1708190">would</span> <span
  m="1708340">be</span> <span m="1708610">the</span> <span
  m="1709000">equation,</span> <span m="1709630">here?</span> <span
  m="1711430">This</span> <span m="1711670">part</span> <span
  m="1712060">would</span> <span m="1712270">give</span> <span
  m="1712510">us</span> <span m="1712720">the A</span> <span
  m="1713050">transpose,</span> <span m="1713740">and</span> <span
  m="1715150">then</span> <span m="1715330">this</span> <span
  m="1715600">part</span> <span m="1715960">would</span> <span
  m="1716200">give</span> <span m="1716500">us</span> <span
  m="1718270">just</span> <span m="1718540">the</span> <span
  m="1718690">identity,</span> <span m="1719890">x</span> <span
  m="1721030">equals</span> <span m="1722590">A</span> <span
  m="1722710">transpose</span> <span m="1723480">b,</span> <span
  m="1724480">I</span> <span m="1724540">think.</span> <span
  m="1725620">Wouldn't</span> <span m="1725890">that</span> <span
  m="1726070">be?</span> <span m="1726850">So</span> <span
  m="1727810">really,</span> <span m="1728200">I've</span> <span
  m="1728440">written</span> <span m="1728740">here--</span> <span
  m="1729580">what</span> <span m="1729730">that</span> <span
  m="1730000">is</span> <span m="1730330">is</span> <span m="1730660">A</span>
  <span m="1730900">star</span> <span m="1731530">transpose</span> <span
  m="1732190">A</span> <span m="1732340">star.</span> <span
  m="1733570">This</span> <span m="1733810">is</span> <span
  m="1733990">least</span> <span m="1734320">squares</span> <span
  m="1734920">on</span> <span m="1735070">this</span> <span
  m="1736830">gives</span> <span m="1737650">that</span> <span
  m="1737800">equation.</span> <span m="1740440">So</span> <span
  m="1740770">all</span> <span m="1741130">of</span> <span
  m="1741220">those</span> <span m="1741580">are</span> <span
  m="1741730">equivalent.</span> <span m="1743200">All</span> <span
  m="1743440">of</span> <span m="1743500">those</span> <span
  m="1743860">would</span> <span m="1744040">be</span> <span
  m="1744220">equivalent</span> <span m="1744880">statements</span> <span
  m="1745510">of</span> <span m="1745750">what the</span> <span
  m="1746220">penalized</span> <span m="1747130">problem</span> <span
  m="1748120">is</span> <span m="1748480">that</span> <span
  m="1748690">you're</span> <span m="1748810">solving.</span></p><p><span
  m="1749890">And</span> <span m="1750040">then</span> <span
  m="1750250">the</span> <span m="1750370">question</span> <span
  m="1750970">is,</span> <span m="1751630">as</span> <span
  m="1751810">delta</span> <span m="1752200">goes</span> <span
  m="1752560">to</span> <span m="1752710">0,</span> <span
  m="1753910">what</span> <span m="1754120">happens?</span> <span
  m="1757210">Of</span> <span m="1757330">course,</span> <span
  m="1757680">something.</span> <span m="1758830">When</span> <span
  m="1759040">delta</span> <span m="1759340">goes</span> <span
  m="1759610">to</span> <span m="1759700">0,</span> <span
  m="1760060">you're</span> <span m="1761470">falling</span> <span
  m="1761890">off</span> <span m="1762110">the</span> <span
  m="1762190">cliff.</span> <span m="1762610">Something</span> <span
  m="1764590">quite</span> <span m="1764860">different</span> <span
  m="1765220">is</span> <span m="1765310">suddenly</span> <span
  m="1765700">going</span> <span m="1765880">to</span> <span
  m="1765970">happen,</span> <span m="1766270">there.</span> <span
  m="1766960">Maybe</span> <span m="1768730">we</span> <span
  m="1768880">could</span> <span m="1769120">even</span> <span
  m="1769600">understand</span> <span m="1770320">this</span> <span
  m="1771400">question</span> <span m="1772540">with</span> <span
  m="1772840">a</span> <span m="1773050">1</span> <span m="1773470">by</span>
  <span m="1773740">1</span> <span m="1774820">matrix.</span> <span
  m="1776200">I</span> <span m="1776230">think</span> <span
  m="1776530">this</span> <span m="1776740">section</span> <span
  m="1778000">starts</span> <span m="1778540">with</span> <span
  m="1778780">a</span> <span m="1778870">1</span> <span m="1779200">by</span>
  <span m="1779440">1.</span> <span m="1779830">Suppose</span> <span
  m="1780370">A</span> <span m="1780610">is</span> <span m="1780790">just</span>
  <span m="1781120">a</span> <span m="1781400">number.</span></p><p><span
  m="1784580">Maybe</span> <span m="1784880">I'll</span> <span
  m="1785090">just</span> <span m="1785360">put</span> <span
  m="1785600">that</span> <span m="1785840">on</span> <span
  m="1785960">this</span> <span m="1786170">board,</span> <span
  m="1786470">here.</span> <span m="1787370">Suppose</span> <span
  m="1787670">A</span> <span m="1787880">is</span> <span m="1788060">just</span>
  <span m="1788390">a</span> <span m="1788450">number.</span> <span
  m="1791630">So</span> <span m="1792800">what</span> <span
  m="1792950">am</span> <span m="1793070">I</span> <span
  m="1793130">going</span> <span m="1793250">to</span> <span
  m="1793370">call</span> <span m="1793640">that</span> <span
  m="1793820">number?</span> <span m="1794300">Just</span> <span
  m="1794480">1</span> <span m="1794750">by</span> <span m="1794960">1.</span>
  <span m="1795620">Let</span> <span m="1795730">me</span> <span
  m="1795890">call</span> <span m="1796130">it</span> <span
  m="1796250">sigma,</span> <span m="1797320">because</span> <span
  m="1797570">it's</span> <span m="1797720">certainly</span> <span
  m="1798140">the</span> <span m="1798830">leading</span> <span
  m="1799340">singular</span> <span m="1799820">value.</span> <span
  m="1806520">So</span> <span m="1806710">what's</span> <span
  m="1806980">my</span> <span m="1807190">equation</span> <span
  m="1807790">that</span> <span m="1807940">I'm</span> <span
  m="1808090">solving?</span> <span m="1810130">A</span> <span
  m="1810310">transpose</span> <span m="1811000">A</span> <span
  m="1811150">would</span> <span m="1811330">be</span> <span
  m="1811510">sigma</span> <span m="1811900">squared</span> <span
  m="1813520">plus</span> <span m="1813850">delta</span> <span
  m="1814210">squared,</span> <span m="1815260">1</span> <span
  m="1815500">by</span> <span m="1815680">1,</span> <span m="1816640">x--</span>
  <span m="1818350">should</span> <span m="1818590">I</span> <span
  m="1818710">give</span> <span m="1818920">some</span> <span
  m="1819700">subscript</span> <span m="1820450">here?</span> <span
  m="1820690">I</span> <span m="1820780">should,</span> <span
  m="1821170">really,</span> <span m="1821620">to</span> <span
  m="1821890">do</span> <span m="1822130">it</span> <span
  m="1822220">right.</span></p><p><span m="1823960">This</span> <span
  m="1824230">is</span> <span m="1824440">the</span> <span
  m="1824590">solution</span> <span m="1825400">for</span> <span
  m="1825670">a</span> <span m="1825730">given</span> <span
  m="1826300">delta.</span> <span m="1832150">So</span> <span
  m="1832230">that</span> <span m="1832410">solution</span> <span
  m="1832920">will</span> <span m="1833160">exist.</span> <span
  m="1833700">Fine.</span> <span m="1834390">This</span> <span
  m="1834600">matrix</span> <span m="1835170">is</span> <span
  m="1835260">certainly</span> <span m="1835620">invertible.</span> <span
  m="1836670">That's</span> <span m="1836970">positive</span> <span
  m="1837660">semidefinite,</span> <span m="1838680">at</span> <span
  m="1838800">least.</span> <span m="1840460">That's</span> <span
  m="1840730">positive</span> <span m="1841210">semidefinite,</span> <span
  m="1841690">and</span> <span m="1841840">then</span> <span
  m="1842110">what</span> <span m="1842320">about</span> <span
  m="1842620">delta</span> <span m="1842980">squared</span> <span
  m="1843400">I?</span> <span m="1845530">It</span> <span m="1845720">is</span>
  <span m="1845960">positive</span> <span m="1847930">definite,</span> <span
  m="1848650">of</span> <span m="1848710">course.</span> <span m="1849160">It's
  just</span> <span m="1849440">the</span> <span m="1849570">identity</span>
  <span m="1851180">with</span> <span m="1851390">a</span> <span
  m="1851470">factor.</span> <span m="1852680">So</span> <span
  m="1852820">this</span> <span m="1853120">is</span> <span m="1853300">a</span>
  <span m="1853390">positive</span> <span m="1853870">definite</span> <span
  m="1854290">matrix.</span> <span m="1855370">I</span> <span
  m="1855520">certainly</span> <span m="1855910">have</span> <span
  m="1856090">a</span> <span m="1856150">solution.</span></p><p><span
  m="1857470">And</span> <span m="1857920">let</span> <span
  m="1858070">me</span> <span m="1858550">keep</span> <span
  m="1858790">going</span> <span m="1859120">on</span> <span
  m="1859210">this</span> <span m="1859420">1</span> <span m="1859720">by</span>
  <span m="1859900">1</span> <span m="1860260">case.</span> <span
  m="1861500">This</span> <span m="1861700">would</span> <span
  m="1861970">be</span> <span m="1862330">A</span> <span
  m="1862600">transpose.</span> <span m="1863180">A</span> <span m="1863440">is
  just</span> <span m="1863740">a</span> <span m="1863800">sigma.</span> <span
  m="1864700">I</span> <span m="1864820">think</span> <span
  m="1865060">it's</span> <span m="1865180">just</span> <span
  m="1865420">sigma</span> <span m="1866590">b.</span> <span
  m="1871710">So</span> <span m="1873030">A is</span> <span m="1873450">1</span>
  <span m="1873690">by</span> <span m="1873870">1,</span> <span
  m="1875580">and</span> <span m="1876690">there</span> <span
  m="1876870">are</span> <span m="1876900">two</span> <span
  m="1877170">cases,</span> <span m="1877650">here--</span> <span
  m="1877890">Sigma</span> <span m="1879060">bigger</span> <span
  m="1879360">than</span> <span m="1879570">0,</span> <span
  m="1881700">or</span> <span m="1881970">sigma</span> <span
  m="1882390">equals</span> <span m="1882840">0.</span> <span
  m="1885230">And</span> <span m="1885560">in</span> <span
  m="1885710">either</span> <span m="1885980">case,</span> <span
  m="1886730">I</span> <span m="1886880">just</span> <span
  m="1887060">want</span> <span m="1887260">to</span> <span
  m="1887330">know</span> <span m="1887480">what's</span> <span
  m="1887780">the</span> <span m="1887900">limit.</span> <span
  m="1888290">So</span> <span m="1889010">the</span> <span
  m="1889160">answer</span> <span m="1889520">x--</span> <span
  m="1892310">let</span> <span m="1892400">me</span> <span
  m="1892550">just</span> <span m="1892820">take</span> <span
  m="1893060">the</span> <span m="1893180">right</span> <span
  m="1893450">hand</span> <span m="1893660">side.</span> <span
  m="1894490">Well,</span> <span m="1894910">that's</span> <span
  m="1895170">fine.</span></p><p><span m="1899140">Am</span> <span
  m="1899570">I</span> <span m="1900780">computing</span> <span
  m="1901440">OK?</span> <span m="1902810">Using</span> <span
  m="1903350">the</span> <span m="1903470">penalize</span> <span
  m="1904250">thing</span> <span m="1905360">on</span> <span
  m="1905510">a</span> <span m="1905570">1</span> <span m="1905870">by</span>
  <span m="1906050">1</span> <span m="1906350">problem,</span> <span
  m="1907030">which</span> <span m="1907250">you</span> <span
  m="1907370">could</span> <span m="1907580">say</span> <span
  m="1907820">is</span> <span m="1908845">a</span> <span
  m="1909210">little</span> <span m="1909350">bit</span> <span
  m="1909560">small--</span> <span m="1910910">so</span> <span
  m="1913490">solving</span> <span m="1914000">this</span> <span
  m="1914240">equation</span> <span m="1917070">or</span> <span
  m="1917310">equivalently</span> <span m="1918210">minimizing</span> <span
  m="1919050">this,</span> <span m="1920620">so</span> <span
  m="1921090">here,</span> <span m="1921300">I'm</span> <span
  m="1921480">finding</span> <span m="1921990">the</span> <span
  m="1922110">minimum</span> <span m="1922680">of--</span> <span
  m="1927590">A</span> <span m="1927950">was</span> <span
  m="1928250">sigma</span> <span m="1929030">x</span> <span
  m="1930170">minus</span> <span m="1930620">b</span> <span
  m="1931460">squared</span> <span m="1932120">plus</span> <span
  m="1932480">delta</span> <span m="1932900">squared</span> <span
  m="1933500">x</span> <span m="1933710">squared.</span> <span m="1938890">You
  see it's</span> <span m="1939240">just</span> <span m="1939450">1</span> <span
  m="1939660">by</span> <span m="1939780">1?</span> <span
  m="1940620">Just</span> <span m="1940830">a</span> <span
  m="1940890">number.</span></p><p><span m="1941400">And</span> <span
  m="1941610">I'm</span> <span m="1941970">hoping</span> <span
  m="1942330">that</span> <span m="1943350">calculus</span> <span
  m="1943950">will</span> <span m="1944160">agree</span> <span
  m="1944490">with</span> <span m="1944700">linear</span> <span
  m="1945090">algebra</span> <span m="1945480">here,</span> <span
  m="1946230">that</span> <span m="1946380">if</span> <span m="1946530">I</span>
  <span m="1946650">find</span> <span m="1947010">the</span> <span
  m="1947100">minimum</span> <span m="1947580">of</span> <span
  m="1947730">this--</span> <span m="1949060">so</span> <span
  m="1949320">let</span> <span m="1949440">me</span> <span
  m="1949560">write</span> <span m="1949830">it</span> <span
  m="1949980">out.</span> <span m="1951030">Sigma</span> <span
  m="1951390">squared</span> <span m="1951810">x</span> <span
  m="1951990">squared</span> <span m="1953160">and</span> <span
  m="1953370">delta</span> <span m="1953730">squared</span> <span
  m="1954180">x</span> <span m="1954360">squared,</span> <span
  m="1956170">and</span> <span m="1956280">then</span> <span
  m="1956520">minus</span> <span m="1957000">2</span> <span
  m="1957540">sigma</span> <span m="1958800">xb,</span> <span
  m="1960540">and</span> <span m="1960720">then</span> <span
  m="1960930">plus</span> <span m="1961260">b</span> <span
  m="1961500">squared.</span> <span m="1962820">And</span> <span
  m="1962930">now,</span> <span m="1963210">I'm</span> <span
  m="1963360">going</span> <span m="1963470">to</span> <span
  m="1963630">find</span> <span m="1963960">the</span> <span
  m="1964050">minimum,</span> <span m="1965620">which</span> <span
  m="1965730">means</span> <span m="1966060">I'd</span> <span
  m="1966240">set</span> <span m="1966460">the</span> <span
  m="1966570">derivative</span> <span m="1967140">to</span> <span
  m="1967320">0.</span> <span m="1968490">So</span> <span m="1968670">I</span>
  <span m="1968760">get</span> <span m="1968940">2</span> <span
  m="1969390">sigma</span> <span m="1969750">squared</span> <span
  m="1970260">and</span> <span m="1970380">2</span> <span
  m="1970650">delta</span> <span m="1971040">squared.</span></p><p><span
  m="1971430">I</span> <span m="1971520">get</span> <span m="1971700">a</span>
  <span m="1971760">two</span> <span m="1972090">here,</span> <span
  m="1973710">and</span> <span m="1975000">this</span> <span
  m="1975300">gives</span> <span m="1975540">me</span> <span
  m="1975780">the</span> <span m="1975960">x</span> <span
  m="1976200">derivative</span> <span m="1976790">as 2</span> <span
  m="1976920">sigma</span> <span m="1977580">b.</span> <span
  m="1977850">So</span> <span m="1978030">I</span> <span m="1978090">get</span>
  <span m="1978300">a</span> <span m="1978360">2</span> <span
  m="1978700">there,</span> <span m="1979650">and</span> <span
  m="1979830">I'm</span> <span m="1980010">OK.</span> <span m="1980490">I</span>
  <span m="1980610">just</span> <span m="1980880">cancel</span> <span
  m="1981300">both</span> <span m="1981640">2s,</span> <span
  m="1983130">and</span> <span m="1984180">that's</span> <span
  m="1984430">the</span> <span m="1984570">equation.</span> <span
  m="1986610">So</span> <span m="1986780">I</span> <span m="1986900">can</span>
  <span m="1987080">solve</span> <span m="1987380">that</span> <span
  m="1987590">equation.</span> <span m="1989840">X</span> <span
  m="1990230">is</span> <span m="1991610">sigma</span> <span
  m="1992900">over</span> <span m="1993920">sigma</span> <span
  m="1994370">squared</span> <span m="1995060">plus</span> <span
  m="1995630">delta</span> <span m="1996140">squared</span> <span
  m="1996950">b.</span> <span m="1999110">So</span> <span
  m="1999250">it's</span> <span m="1999380">really</span> <span
  m="1999800">that</span> <span m="2000730">quantity.</span> <span
  m="2002260">I</span> <span m="2002410">want</span> <span m="2002650">to</span>
  <span m="2002740">let</span> <span m="2003700">delta</span> <span
  m="2004390">go</span> <span m="2004630">to</span> <span m="2004780">0.</span>
  <span m="2008850">So</span> <span m="2009040">again,</span> <span
  m="2009550">what</span> <span m="2009910">am</span> <span m="2010030">I</span>
  <span m="2010180">doing</span> <span m="2010510">here?</span> <span
  m="2011960">I'm</span> <span m="2012100">taking</span> <span
  m="2012460">a</span> <span m="2012520">1</span> <span m="2012790">by</span>
  <span m="2012970">1</span> <span m="2013240">example</span> <span
  m="2013870">just</span> <span m="2014140">to</span> <span
  m="2014290">see</span> <span m="2014710">what</span> <span
  m="2015070">happens</span> <span m="2015640">in</span> <span
  m="2015790">the</span> <span m="2015880">limit</span> <span
  m="2017020">as</span> <span m="2019030">delta</span> <span
  m="2021340">goes</span> <span m="2021760">to</span> <span
  m="2021880">0.</span></p><p><span m="2022840">What</span> <span
  m="2023050">happens?</span> <span m="2025600">So</span> <span
  m="2025810">I</span> <span m="2025930">just</span> <span
  m="2026140">have</span> <span m="2026290">to</span> <span
  m="2026410">look</span> <span m="2026680">at</span> <span
  m="2026770">that.</span> <span m="2028300">What</span> <span
  m="2028540">is</span> <span m="2028780">the</span> <span
  m="2028900">limit</span> <span m="2029380">of</span> <span
  m="2029530">that</span> <span m="2030500">thing</span> <span
  m="2030750">in</span> <span m="2030880">a</span> <span
  m="2030940">circle,</span> <span m="2033560">as</span> <span
  m="2033740">delta</span> <span m="2034130">goes</span> <span
  m="2034400">to</span> <span m="2034520">0?</span> <span m="2035150">So</span>
  <span m="2035390">I'm</span> <span m="2035570">finding</span> <span
  m="2036020">out</span> <span m="2036260">for</span> <span m="2036470">a</span>
  <span m="2036740">1 by</span> <span m="2036950">1</span> <span
  m="2037250">problem</span> <span m="2037840">what</span> <span
  m="2038090">a</span> <span m="2038630">penalized</span> <span
  m="2040420">least</span> <span m="2040670">squares</span> <span
  m="2041180">problem,</span> <span m="2041790">ridge</span> <span
  m="2042140">regression,</span> <span m="2044390">all</span> <span
  m="2044630">over</span> <span m="2044840">the</span> <span
  m="2044930">place--</span> <span m="2045860">what</span> <span
  m="2046100">happens?</span> <span m="2047630">So</span> <span
  m="2047840">what</span> <span m="2048170">happens</span> <span
  m="2048590">to</span> <span m="2048679">that</span> <span
  m="2048920">number</span> <span m="2050030">as</span> <span
  m="2051560">delta</span> <span m="2051920">goes</span> <span
  m="2052219">to</span> <span m="2052310">0?</span></p><p><span
  m="2055400">1</span> <span m="2055699">over</span> <span
  m="2055880">sigma.</span> <span m="2057659">So</span> <span
  m="2057800">now,</span> <span m="2058190">let</span> <span
  m="2058639">delta</span> <span m="2059060">go</span> <span
  m="2059280">to</span> <span m="2059389">0.</span> <span m="2061670">So</span>
  <span m="2061909">that</span> <span m="2062150">approaches</span> <span
  m="2062800">1</span> <span m="2063260">over</span> <span
  m="2063710">sigma,</span> <span m="2065250">because</span> <span
  m="2065420">delta</span> <span m="2065840">disappears.</span> <span
  m="2067159">Sigma</span> <span m="2067489">over</span> <span
  m="2067699">sigma</span> <span m="2068090">squared,</span> <span
  m="2068420">1</span> <span m="2068630">over</span> <span
  m="2068810">sigma.</span> <span m="2069570">So</span> <span
  m="2069650">it</span> <span m="2069710">approaches</span> <span
  m="2070219">the</span> <span m="2070370">inverse,</span> <span
  m="2072699">but</span> <span m="2074290">what's</span> <span
  m="2074590">the</span> <span m="2074710">other</span> <span
  m="2074980">possibility,</span> <span m="2075699">here?</span> <span
  m="2077100">The</span> <span m="2077250">other</span> <span
  m="2077489">possibility</span> <span m="2078270">is</span> <span
  m="2078429">that</span> <span m="2078570">sigma</span> <span
  m="2078969">is</span> <span m="2079050">0.</span> <span m="2081380">I</span>
  <span m="2081510">didn't</span> <span m="2081840">say</span> <span
  m="2082139">whether</span> <span m="2082409">this</span> <span
  m="2082710">matrix,</span> <span m="2083340">this</span> <span
  m="2083489">1</span> <span m="2083760">by</span> <span m="2083940">1</span>
  <span m="2084150">matrix,</span> <span m="2084719">was</span> <span
  m="2084989">invertible</span> <span m="2085590">or</span> <span
  m="2085710">not.</span> <span m="2086909">If</span> <span
  m="2087060">sigma</span> <span m="2087540">is</span> <span
  m="2087750">not</span> <span m="2088050">0,</span> <span
  m="2089400">then</span> <span m="2090810">I</span> <span m="2090929">go</span>
  <span m="2091080">to</span> <span m="2091199">1</span> <span
  m="2091409">over</span> <span m="2091650">sigma.</span></p><p><span
  m="2093500">If</span> <span m="2093639">sigma</span> <span
  m="2094000">is</span> <span m="2094150">really</span> <span
  m="2094540">small,</span> <span m="2095139">it</span> <span
  m="2095230">will</span> <span m="2095320">take</span> <span
  m="2095620">a</span> <span m="2095730">while.</span> <span
  m="2097330">Delta</span> <span m="2097750">will</span> <span
  m="2097930">have</span> <span m="2098140">to</span> <span
  m="2098260">get</span> <span m="2098530">small,</span> <span
  m="2099190">small,</span> <span m="2099610">small,</span> <span
  m="2100120">even</span> <span m="2100480">compared</span> <span
  m="2100930">to</span> <span m="2101020">sigma,</span> <span
  m="2101530">until</span> <span m="2102130">finally,</span> <span
  m="2102910">that</span> <span m="2103120">term</span> <span
  m="2103630">goes</span> <span m="2103900">away,</span> <span
  m="2104230">and</span> <span m="2104410">I</span> <span
  m="2104560">just</span> <span m="2104770">have</span> <span
  m="2104950">1</span> <span m="2105130">over</span> <span
  m="2105310">sigma.</span> <span m="2106000">But</span> <span
  m="2106240">what</span> <span m="2106630">if</span> <span
  m="2106900">sigma</span> <span m="2107380">is</span> <span
  m="2107680">0?</span> <span m="2109390">Sorry</span> <span
  m="2109720">to</span> <span m="2109810">get</span> <span
  m="2110020">excited</span> <span m="2113670">about</span> <span
  m="2114000">0.</span> <span m="2114410">Who</span> <span
  m="2114600">would</span> <span m="2114720">get</span> <span
  m="2114900">excited</span> <span m="2115410">about</span> <span
  m="2115650">0?</span> <span m="2116970">So</span> <span
  m="2117210">this</span> <span m="2117450">is</span> <span
  m="2117630">the</span> <span m="2117750">case</span> <span
  m="2118230">when</span> <span m="2119220">this</span> <span
  m="2119490">is</span> <span m="2119760">1</span> <span m="2120060">over</span>
  <span m="2120270">sigma,</span> <span m="2120840">if</span> <span
  m="2121290">sigma</span> <span m="2121710">is</span> <span
  m="2121860">positive.</span> <span m="2123000">And</span> <span
  m="2123150">what</span> <span m="2123430">does</span> <span
  m="2123660">it</span> <span m="2123750">approach</span> <span
  m="2124200">if</span> <span m="2124440">sigma</span> <span
  m="2124890">is</span> <span m="2125040">0?</span> <span
  m="2128080">0!</span></p><p><span m="2129770">Because</span> <span
  m="2130090">this</span> <span m="2130330">is</span> <span
  m="2130450">0,</span> <span m="2131650">the</span> <span
  m="2131740">whole</span> <span m="2131980">problem</span> <span
  m="2132400">was</span> <span m="2132730">like</span> <span
  m="2133420">disappeared,</span> <span m="2134110">here.</span> <span
  m="2134810">The</span> <span m="2135010">sigma</span> <span
  m="2135490">was</span> <span m="2135670">0.</span> <span
  m="2137400">Here</span> <span m="2137640">is</span> <span m="2137760">a</span>
  <span m="2139100">sigma.</span> <span m="2139570">So</span> <span
  m="2140060">anyway,</span> <span m="2144650">if</span> <span
  m="2145040">sigma</span> <span m="2145400">is</span> <span
  m="2145470">0,</span> <span m="2146840">then</span> <span
  m="2146990">I'm</span> <span m="2147140">getting</span> <span
  m="2147440">0</span> <span m="2147800">all</span> <span m="2147980">the</span>
  <span m="2148100">time.</span> <span m="2148430">But</span> <span
  m="2148580">I</span> <span m="2148640">have</span> <span m="2148850">a</span>
  <span m="2148910">decent</span> <span m="2149270">problem,</span> <span
  m="2149660">because</span> <span m="2149900">the</span> <span
  m="2150020">delta</span> <span m="2150400">squared</span> <span
  m="2150830">is</span> <span m="2151010">there.</span> <span
  m="2151940">I</span> <span m="2152040">have</span> <span m="2152140">a</span>
  <span m="2152240">decent</span> <span m="2152480">problem</span> <span
  m="2152810">until</span> <span m="2153080">the</span> <span
  m="2153200">last</span> <span m="2153560">minute.</span> <span
  m="2153920">My</span> <span m="2154100">problem</span> <span
  m="2154430">falls</span> <span m="2154730">apart.</span> <span
  m="2155090">Delta</span> <span m="2155450">goes</span> <span
  m="2155690">to</span> <span m="2155810">0,</span> <span m="2156170">and</span>
  <span m="2156290">I</span> <span m="2156380">have</span> <span
  m="2156590">a</span> <span m="2156845">0</span> <span
  m="2157100">equals</span> <span m="2157940">0</span> <span
  m="2158270">problem.</span> <span m="2158660">I'm</span> <span
  m="2158990">lost.</span></p><p><span m="2159440">But</span> <span
  m="2159950">the</span> <span m="2160040">point</span> <span
  m="2160400">is</span> <span m="2160640">the</span> <span
  m="2160760">penalty</span> <span m="2162140">kept</span> <span
  m="2162440">me</span> <span m="2162620">positive.</span> <span
  m="2163370">It</span> <span m="2163700">kept</span> <span
  m="2164000">me</span> <span m="2164270">with</span> <span
  m="2164540">his</span> <span m="2164780">delta</span> <span
  m="2165110">squared</span> <span m="2165530">term</span> <span
  m="2167300">until</span> <span m="2167750">the</span> <span
  m="2167900">last</span> <span m="2168530">critical</span> <span
  m="2169010">moment.</span> <span m="2170890">It</span> <span
  m="2171050">kept</span> <span m="2171260">me</span> <span
  m="2171440">positive</span> <span m="2172040">even</span> <span
  m="2172370">if</span> <span m="2172490">that</span> <span
  m="2172670">was</span> <span m="2172850">0.</span> <span m="2174260">If</span>
  <span m="2174410">that</span> <span m="2174650">is</span> <span
  m="2174770">0,</span> <span m="2175940">and</span> <span
  m="2176090">this</span> <span m="2176390">is</span> <span
  m="2176480">0,</span> <span m="2177500">I</span> <span
  m="2177650">still</span> <span m="2177920">have</span> <span
  m="2178100">something</span> <span m="2178550">here.</span> <span
  m="2179600">I</span> <span m="2179660">still</span> <span
  m="2179930">have</span> <span m="2180110">a</span> <span
  m="2180530">problem</span> <span m="2181010">to</span> <span
  m="2181160">solve.</span> <span m="2182030">And</span> <span
  m="2182270">what's</span> <span m="2182660">the</span> <span
  m="2182810">limit</span> <span m="2183170">then?</span> <span
  m="2184430">So</span> <span m="2184910">1</span> <span m="2185210">over</span>
  <span m="2185450">sigma</span> <span m="2186440">if</span> <span
  m="2187190">sigma</span> <span m="2187640">is</span> <span
  m="2187790">positive.</span> <span m="2189050">And</span> <span
  m="2189230">what's</span> <span m="2189650">the</span> <span
  m="2189800">answer</span> <span m="2190280">if</span> <span
  m="2191030">sigma</span> <span m="2191450">is</span> <span
  m="2191660">not</span> <span m="2191960">positive?</span> <span
  m="2192720">It's</span> <span m="2192860">0.</span></p><p><span
  m="2194690">Just</span> <span m="2194960">tell</span> <span
  m="2195170">me.</span> <span m="2196700">I'm</span> <span
  m="2196850">getting</span> <span m="2197150">0.</span> <span
  m="2198260">I</span> <span m="2198380">get</span> <span m="2198590">0</span>
  <span m="2198890">all</span> <span m="2199100">the</span> <span
  m="2199220">way,</span> <span m="2199460">and</span> <span
  m="2199610">I</span> <span m="2199700">get</span> <span m="2199880">0</span>
  <span m="2200240">in</span> <span m="2200330">the</span> <span
  m="2200420">limit.</span> <span m="2207080">And</span> <span
  m="2209130">now,</span> <span m="2209730">let</span> <span
  m="2209850">me</span> <span m="2209970">just</span> <span
  m="2210240">ask,</span> <span m="2211560">what</span> <span
  m="2211830">have</span> <span m="2211920">I</span> <span
  m="2212040">got</span> <span m="2212310">here?</span> <span
  m="2213450">What</span> <span m="2214140">is</span> <span
  m="2214290">this</span> <span m="2215790">sudden</span> <span
  m="2216750">bifurcation?</span> <span m="2219870">Do</span> <span
  m="2220020">I</span> <span m="2220140">recognize</span> <span
  m="2220800">this?</span> <span m="2222000">The</span> <span
  m="2222600">inverse</span> <span m="2224310">in</span> <span
  m="2224520">the</span> <span m="2224610">limit</span> <span
  m="2225030">as</span> <span m="2225180">delta</span> <span
  m="2225540">goes</span> <span m="2225780">to</span> <span m="2225900">0</span>
  <span m="2226710">is</span> <span m="2226920">either</span> <span
  m="2227280">1</span> <span m="2227550">over</span> <span
  m="2227790">sigma,</span> <span m="2229140">if</span> <span
  m="2229800">that</span> <span m="2229950">makes</span> <span
  m="2230190">sense,</span> <span m="2231120">or</span> <span
  m="2231300">it's</span> <span m="2231420">0,</span> <span
  m="2231960">which</span> <span m="2232230">is</span> <span
  m="2232410">not</span> <span m="2232830">like</span> <span
  m="2233310">1</span> <span m="2233520">over</span> <span
  m="2233730">sigma.</span> <span m="2234090">1</span> <span
  m="2234240">over</span> <span m="2234420">sigma--</span> <span
  m="2234930">as</span> <span m="2235330">sigma</span> <span
  m="2235760">goes</span> <span m="2236010">to</span> <span
  m="2236070">0,</span> <span m="2236970">this</span> <span
  m="2237180">thing</span> <span m="2237390">is</span> <span
  m="2237510">getting</span> <span m="2237720">bigger</span> <span
  m="2238050">and</span> <span m="2238170">bigger.</span></p><p><span
  m="2239130">But</span> <span m="2239370">at</span> <span
  m="2239640">sigma</span> <span m="2240060">equals</span> <span
  m="2240390">0,</span> <span m="2241560">it's</span> <span
  m="2241740">0.</span> <span m="2242850">You</span> <span
  m="2242970">see,</span> <span m="2243150">that's</span> <span
  m="2243450">a</span> <span m="2243510">really</span> <span
  m="2245550">strange</span> <span m="2246510">kind</span> <span
  m="2246720">of</span> <span m="2246840">a</span> <span
  m="2246870">limit.</span> <span m="2250560">Now,</span> <span
  m="2250860">it</span> <span m="2250980">would</span> <span
  m="2251190">be</span> <span m="2251400">over</span> <span
  m="2251640">there.</span> <span m="2252810">What</span> <span
  m="2253020">have</span> <span m="2253200">I</span> <span
  m="2253350">found</span> <span m="2253920">here,</span> <span
  m="2255900">in</span> <span m="2256080">this</span> <span
  m="2256410">limit?</span> <span m="2258910">Say</span> <span
  m="2259120">it</span> <span m="2259240">again,</span> <span
  m="2259510">because</span> <span m="2259730">that</span> <span
  m="2259840">was</span> <span m="2260200">exactly</span> <span
  m="2260680">right.</span> <span m="2260950">The</span> <span
  m="2261080">pseudo</span> <span m="2261520">inverse.</span> <span
  m="2263230">So</span> <span m="2263440">this</span> <span
  m="2265720">system--</span> <span m="2267160">choose</span> <span
  m="2267520">delta</span> <span m="2267910">greater</span> <span
  m="2268300">than</span> <span m="2268510">0,</span> <span
  m="2269290">then</span> <span m="2269950">delta</span> <span
  m="2270430">going</span> <span m="2270820">to</span> <span
  m="2270970">0.</span> <span m="2271810">The</span> <span
  m="2271960">solution</span> <span m="2273340">goes</span> <span
  m="2273850">to</span> <span m="2274740">the</span> <span
  m="2274880">pseudo</span> <span m="2275410">inverse.</span> <span
  m="2280360">That's</span> <span m="2280750">the</span> <span
  m="2280900">key</span> <span m="2281200">fact.</span></p><p><span
  m="2285240">When</span> <span m="2285480">delta</span> <span
  m="2285810">is</span> <span m="2285960">really,</span> <span
  m="2286420">really</span> <span m="2286650">small,</span> <span
  m="2287980">then</span> <span m="2289380">this</span> <span
  m="2289710">behaves</span> <span m="2290190">in</span> <span
  m="2290340">a</span> <span m="2290400">pretty</span> <span
  m="2290670">crazy</span> <span m="2291150">way.</span> <span
  m="2292440">If</span> <span m="2293370">delta</span> <span
  m="2293760">is</span> <span m="2293880">really,</span> <span
  m="2294310">really</span> <span m="2294480">small,</span> <span
  m="2296220">then</span> <span m="2296520">sigma</span> <span
  m="2296910">is</span> <span m="2297510">bigger,</span> <span
  m="2298770">or</span> <span m="2298920">it's</span> <span
  m="2299070">0.</span> <span m="2300300">If</span> <span
  m="2300450">it's</span> <span m="2300630">bigger,</span> <span
  m="2301110">you</span> <span m="2301260">go</span> <span
  m="2301440">this</span> <span m="2301680">way.</span> <span
  m="2302140">If</span> <span m="2302190">it's</span> <span
  m="2302310">0,</span> <span m="2302820">you</span> <span m="2302970">go</span>
  <span m="2303180">that</span> <span m="2303360">way.</span> <span
  m="2307850">So</span> <span m="2309080">that's</span> <span
  m="2309530">the</span> <span m="2309680">message,</span> <span
  m="2310320">and</span> <span m="2310910">this</span> <span
  m="2311900">is</span> <span m="2312200">penalized.</span> <span
  m="2319240">These</span> <span m="2319480">squares,</span> <span
  m="2322570">as</span> <span m="2323050">the</span> <span
  m="2323260">penalty</span> <span m="2323920">gets</span> <span
  m="2324160">smaller</span> <span m="2324610">and</span> <span
  m="2324730">smaller,</span> <span m="2325550">approaches</span> <span
  m="2326140">the</span> <span m="2326260">correct</span> <span
  m="2326680">answer,</span> <span m="2327690">the</span> <span
  m="2328150">always</span> <span m="2328570">correct</span> <span
  m="2329020">answer,</span> <span m="2330070">with</span> <span
  m="2330310">that</span> <span m="2330700">sudden</span> <span
  m="2331090">split</span> <span m="2331810">between</span> <span
  m="2332380">0</span> <span m="2332890">and</span> <span m="2333430">not</span>
  <span m="2333670">0</span> <span m="2334600">that</span> <span
  m="2334810">we</span> <span m="2335020">associate</span> <span
  m="2335650">with</span> <span m="2336520">the</span> <span
  m="2338230">pseudo</span> <span m="2338650">inverse.</span></p><p><span
  m="2341020">Of</span> <span m="2341140">course,</span> <span
  m="2341620">in</span> <span m="2343080">a</span> <span
  m="2343170">practical</span> <span m="2343710">case,</span> <span
  m="2344190">you're</span> <span m="2344340">trying</span> <span
  m="2344610">to</span> <span m="2344700">find</span> <span
  m="2345120">the</span> <span m="2346500">resistances</span> <span
  m="2347400">and</span> <span m="2347740">inductions</span> <span
  m="2348600">in</span> <span m="2348780">a</span> <span
  m="2348870">circuit</span> <span m="2349860">by</span> <span
  m="2350550">trying</span> <span m="2351000">the</span> <span
  m="2351120">circuit,</span> <span m="2352560">and</span> <span
  m="2354540">looking</span> <span m="2354930">at</span> <span
  m="2355020">the</span> <span m="2355200">output</span> <span
  m="2355680">b,</span> <span m="2356460">and</span> <span
  m="2356610">figuring</span> <span m="2357060">out</span> <span
  m="2357690">what</span> <span m="2358410">input.</span> <span
  m="2361810">So</span> <span m="2362050">the</span> <span
  m="2362170">unknown</span> <span m="2362680">x</span> <span
  m="2363100">is</span> <span m="2364390">the</span> <span
  m="2364510">unknown</span> <span m="2365860">system</span> <span
  m="2366370">parameters.</span> <span m="2369100">Not</span> <span
  m="2369370">the</span> <span m="2369490">voltage</span> <span
  m="2369910">and</span> <span m="2370060">current,</span> <span
  m="2370390">but</span> <span m="2370600">the</span> <span
  m="2371740">resistance,</span> <span m="2372430">and</span> <span
  m="2373150">inductance,</span> <span m="2373780">and</span> <span
  m="2373940">capacitance.</span></p><p><span m="2382251">I've</span> <span
  m="2382750">only</span> <span m="2382960">proved</span> <span
  m="2383260">that</span> <span m="2383470">in</span> <span
  m="2383620">the</span> <span m="2383710">1</span> <span m="2383950">by</span>
  <span m="2384130">1</span> <span m="2384430">case.</span> <span
  m="2386200">You</span> <span m="2386350">may</span> <span
  m="2386560">say</span> <span m="2386830">that's</span> <span
  m="2387190">not</span> <span m="2387460">much</span> <span
  m="2387730">of</span> <span m="2387850">a</span> <span
  m="2387910">proof.</span> <span m="2389790">In</span> <span
  m="2390020">the</span> <span m="2390100">1</span> <span m="2390340">by</span>
  <span m="2390490">1</span> <span m="2390760">case,</span> <span
  m="2391150">we</span> <span m="2391420">can</span> <span
  m="2392830">see</span> <span m="2393100">it</span> <span
  m="2393340">happen</span> <span m="2393820">in</span> <span
  m="2393940">front</span> <span m="2394210">of</span> <span
  m="2394330">our</span> <span m="2394960">eyes.</span> <span
  m="2396840">So</span> <span m="2397140">really,</span> <span
  m="2399798">a</span> <span m="2400260">step</span> <span m="2400620">I</span>
  <span m="2400740">haven't</span> <span m="2401010">taken</span> <span
  m="2401430">here</span> <span m="2401820">is</span> <span
  m="2402030">to</span> <span m="2402630">complete</span> <span
  m="2403290">that</span> <span m="2403520">to</span> <span
  m="2404480">any</span> <span m="2405210">matrix</span> <span
  m="2405990">A.</span> <span m="2407320">So</span> <span
  m="2407590">that</span> <span m="2408280">the</span> <span
  m="2408400">statement</span> <span m="2408950">then.</span> <span
  m="2410080">That's</span> <span m="2410350">the</span> <span
  m="2410470">statement.</span> <span m="2420500">So</span> <span
  m="2420710">that's</span> <span m="2421040">the</span> <span
  m="2421130">statement.</span> <span m="2421610">For</span> <span
  m="2421880">any</span> <span m="2423320">matrix</span> <span
  m="2423860">A,</span> <span m="2426650">this</span> <span
  m="2427120">matrix,</span> <span m="2427750">A</span> <span
  m="2427900">transpose</span> <span m="2428590">A</span> <span
  m="2428950">plus</span> <span m="2429430">delta</span> <span
  m="2429820">squared</span> <span m="2432130">inverse</span> <span
  m="2433240">times</span> <span m="2433630">A</span> <span
  m="2433780">transpose--</span> <span m="2435010">that's</span> <span
  m="2435310">the</span> <span m="2435670">solution</span> <span
  m="2436300">matrix</span> <span m="2436870">to</span> <span
  m="2437080">our</span> <span m="2437200">problem.</span></p><p><span
  m="2440700">That's</span> <span m="2440880">what</span> <span
  m="2441060">I</span> <span m="2441120">wrote</span> <span
  m="2441360">down</span> <span m="2441630">up</span> <span
  m="2441750">there.</span> <span m="2442440">I</span> <span
  m="2442860">take</span> <span m="2443160">the</span> <span
  m="2443280">inverse</span> <span m="2443790">and</span> <span
  m="2443990">pop</span> <span m="2444220">it</span> <span
  m="2444360">over</span> <span m="2444600">there.</span> <span
  m="2445560">That</span> <span m="2446350">approaches</span> <span
  m="2450750">A</span> <span m="2450900">plus,</span> <span
  m="2452770">the</span> <span m="2453030">pseudo</span> <span
  m="2453540">inverse.</span> <span m="2459480">And</span> <span
  m="2459630">that's</span> <span m="2459900">what</span> <span
  m="2460050">we</span> <span m="2460200">just</span> <span
  m="2460440">checked</span> <span m="2460800">for</span> <span
  m="2461040">1</span> <span m="2461310">by</span> <span m="2461490">1.</span>
  <span m="2462380">For</span> <span m="2463300">1</span> <span
  m="2463590">by</span> <span m="2463830">1,</span> <span
  m="2464220">this</span> <span m="2464490">was</span> <span
  m="2465600">sigma</span> <span m="2466260">over</span> <span
  m="2466770">sigma</span> <span m="2467220">squared</span> <span
  m="2467610">plus</span> <span m="2467820">delta</span> <span
  m="2468180">squared.</span> <span m="2469200">And</span> <span
  m="2469320">it</span> <span m="2469440">went</span> <span
  m="2472140">either</span> <span m="2472590">to</span> <span
  m="2475270">1</span> <span m="2475510">over</span> <span
  m="2475720">sigma</span> <span m="2476980">or</span> <span
  m="2477190">to</span> <span m="2477430">0.</span> <span m="2478100">It</span>
  <span m="2478390">split</span> <span m="2478930">in</span> <span
  m="2479050">the</span> <span m="2479440">limit.</span> <span
  m="2480370">It</span> <span m="2480490">shows</span> <span
  m="2480820">that</span> <span m="2480970">limits</span> <span
  m="2482080">can</span> <span m="2482260">be</span> <span
  m="2482380">delicate.</span></p><p><span m="2483460">The</span> <span
  m="2484030">limit--</span> <span m="2484300">as</span> <span
  m="2484450">delta</span> <span m="2484820">goes</span> <span
  m="2485080">to</span> <span m="2485650">0,</span> <span
  m="2486070">this</span> <span m="2486310">thing</span> <span
  m="2486550">is</span> <span m="2486610">suddenly</span> <span
  m="2487000">discontinuous.</span> <span m="2488920">It's</span> <span
  m="2489850">this</span> <span m="2490090">number</span> <span
  m="2490420">that</span> <span m="2490600">is</span> <span
  m="2490670">growing,</span> <span m="2491200">and</span> <span
  m="2491290">then</span> <span m="2491500">suddenly,</span> <span
  m="2491920">at</span> <span m="2492220">0,</span> <span m="2492640">it</span>
  <span m="2493870">falls</span> <span m="2494200">back</span> <span
  m="2494470">to</span> <span m="2494590">0.</span> <span
  m="2495100">Anyway,</span> <span m="2496030">that</span> <span
  m="2496450">would</span> <span m="2496630">be</span> <span
  m="2496810">the</span> <span m="2496960">statement.</span> <span
  m="2498460">Actually,</span> <span m="2499030">statisticians</span> <span
  m="2500020">discovered</span> <span m="2500620">the</span> <span
  m="2500740">pseudo</span> <span m="2501160">inverse</span> <span
  m="2502810">independently</span> <span m="2503650">of</span> <span
  m="2506908">the</span> <span m="2507340">linear</span> <span
  m="2507700">algebra</span> <span m="2508090">history</span> <span
  m="2508570">of</span> <span m="2508720">it,</span> <span
  m="2509620">because</span> <span m="2510640">statisticians</span> <span
  m="2511630">did</span> <span m="2512050">exactly</span> <span
  m="2513250">that.</span> <span m="2514330">To</span> <span
  m="2514480">regularize</span> <span m="2515410">the</span> <span
  m="2515530">problem,</span> <span m="2516640">they</span> <span
  m="2516850">introduced</span> <span m="2517480">a</span> <span
  m="2517540">penalty</span> <span m="2518620">and</span> <span
  m="2518860">worked</span> <span m="2519190">with</span> <span
  m="2519340">this</span> <span m="2519580">matrix.</span></p><p><span
  m="2521390">So</span> <span m="2522520">statisticians</span> <span
  m="2523360">were</span> <span m="2523510">the</span> <span
  m="2523990">first</span> <span m="2524320">to</span> <span
  m="2527710">think</span> <span m="2527980">of</span> <span
  m="2528070">that</span> <span m="2528340">as</span> <span m="2528540">a</span>
  <span m="2528610">natural</span> <span m="2529630">thing</span> <span
  m="2529870">to</span> <span m="2529990">do</span> <span m="2530450">in</span>
  <span m="2531370">a</span> <span m="2531580">practical</span> <span
  m="2532360">case--</span> <span m="2533700">add</span> <span
  m="2533910">a</span> <span m="2533970">penalty.</span> <span
  m="2539020">So</span> <span m="2539260">this</span> <span
  m="2539500">is</span> <span m="2540130">adding</span> <span
  m="2540460">a</span> <span m="2540550">penalty,</span> <span
  m="2542410">but</span> <span m="2542620">remember</span> <span
  m="2543130">that</span> <span m="2543310">we</span> <span
  m="2543610">stayed</span> <span m="2544120">with</span> <span
  m="2544330">L2</span> <span m="2544780">norms,</span> <span
  m="2545950">staying</span> <span m="2546550">with</span> <span
  m="2549190">L2,</span> <span m="2550180">least</span> <span
  m="2550440">squares.</span> <span m="2558000">We</span> <span
  m="2558300">could</span> <span m="2558600">ask,</span> <span
  m="2559200">what</span> <span m="2559560">happens?</span> <span
  m="2561090">Suppose</span> <span m="2561690">the</span> <span
  m="2561810">penalty</span> <span m="2563460">is</span> <span
  m="2564180">the</span> <span m="2564330">L1</span> <span
  m="2564810">norm.</span></p><p><span m="2568200">I'm</span> <span
  m="2568350">not</span> <span m="2568590">up</span> <span m="2568770">to</span>
  <span m="2568890">do</span> <span m="2569100">this</span> <span
  m="2569340">today.</span> <span m="2570840">Suppose</span> <span
  m="2571290">I</span> <span m="2571410">minimize</span> <span
  m="2572340">that.</span> <span m="2572850">Maybe</span> <span
  m="2573900">I'll</span> <span m="2574020">do</span> <span
  m="2574330">L2,</span> <span m="2575400">but</span> <span
  m="2576810">I'll</span> <span m="2576960">do</span> <span
  m="2578490">the</span> <span m="2578580">penalty</span> <span
  m="2579120">guy</span> <span m="2580380">in</span> <span
  m="2580560">the</span> <span m="2580710">L1</span> <span
  m="2581190">norm.</span> <span m="2587850">I'm</span> <span
  m="2588810">certainly</span> <span m="2589200">not</span> <span
  m="2589500">an</span> <span m="2589650">expert</span> <span
  m="2590130">on</span> <span m="2590310">that.</span> <span
  m="2591000">Or</span> <span m="2591450">you</span> <span
  m="2591630">could</span> <span m="2591810">even</span> <span
  m="2592080">think</span> <span m="2592470">just</span> <span
  m="2593400">that</span> <span m="2593820">power.</span> <span
  m="2595290">So</span> <span m="2595620">that</span> <span
  m="2596010">would</span> <span m="2596280">have</span> <span
  m="2596580">a</span> <span m="2596640">name.</span> <span m="2598680">A</span>
  <span m="2598740">statistician</span> <span m="2599520">invented</span> <span
  m="2600080">this.</span> <span m="2601590">It's</span> <span
  m="2601860">called</span> <span m="2602160">the</span> <span
  m="2602250">Lasso</span> <span m="2603810">in</span> <span
  m="2603960">the</span> <span m="2604140">L1</span> <span
  m="2604560">norm,</span> <span m="2604980">and</span> <span
  m="2605130">it's</span> <span m="2606510">a</span> <span
  m="2606570">big</span> <span m="2606780">deal.</span></p><p><span
  m="2607100">Statisticians</span> <span m="2607830">like</span> <span
  m="2608130">the</span> <span m="2608310">L1</span> <span
  m="2608700">norm,</span> <span m="2610600">because</span> <span
  m="2616510">it</span> <span m="2616600">gives</span> <span
  m="2616810">sparse</span> <span m="2617250">solutions.</span> <span
  m="2618010">It</span> <span m="2618130">gives</span> <span
  m="2619420">more</span> <span m="2619690">genuine</span> <span
  m="2620260">solutions</span> <span m="2620860">without</span> <span
  m="2621250">a</span> <span m="2621310">whole</span> <span
  m="2621460">lot</span> <span m="2621700">of</span> <span
  m="2621760">little</span> <span m="2623230">components</span> <span
  m="2623980">in</span> <span m="2624100">the</span> <span
  m="2624220">answer.</span> <span m="2626320">So</span> <span
  m="2626530">this</span> <span m="2626800">was</span> <span
  m="2627040">an</span> <span m="2627160">important</span> <span
  m="2628240">step.</span> <span m="2632780">Let</span> <span
  m="2632870">me</span> <span m="2632990">just</span> <span
  m="2633200">say</span> <span m="2633440">again</span> <span
  m="2635360">where</span> <span m="2635570">we</span> <span
  m="2635750">are</span> <span m="2635960">in</span> <span
  m="2636050">that</span> <span m="2636200">big</span> <span
  m="2636440">list.</span> <span m="2640910">The</span> <span
  m="2641110">two</span> <span m="2641350">important</span> <span
  m="2641800">ones</span> <span m="2642070">that</span> <span
  m="2642190">I</span> <span m="2642310">haven't</span> <span
  m="2642910">done</span> <span m="2643180">yet</span> <span
  m="2644970">are</span> <span m="2645210">these</span> <span
  m="2645960">iterative</span> <span m="2646500">methods</span> <span
  m="2647670">in</span> <span m="2647910">2.1.</span></p><p><span
  m="2648900">So</span> <span m="2649110">that's</span> <span
  m="2649440">like</span> <span m="2650340">conventional</span> <span
  m="2651180">linear</span> <span m="2651600">algebra,</span> <span
  m="2652590">just</span> <span m="2652920">how</span> <span
  m="2653130">to</span> <span m="2653250">deal</span> <span
  m="2653520">with</span> <span m="2653760">a</span> <span
  m="2653880">big</span> <span m="2654180">matrix,</span> <span
  m="2655530">maybe</span> <span m="2655860">with</span> <span
  m="2656070">some</span> <span m="2656310">special</span> <span
  m="2656760">structure.</span> <span m="2657390">That's</span> <span
  m="2657680">what</span> <span m="2659130">numerical</span> <span
  m="2659670">linear</span> <span m="2659970">algebra</span> <span
  m="2660270">is</span> <span m="2660390">all</span> <span
  m="2660570">about.</span> <span m="2661740">And</span> <span
  m="2661860">then</span> <span m="2663150">Gram-Schmidt</span> <span
  m="2665270">with</span> <span m="2665630">or</span> <span
  m="2665780">without</span> <span m="2666260">pivoting,</span> <span
  m="2667790">which</span> <span m="2668090">is</span> <span
  m="2668300">a</span> <span m="2668570">workhorse</span> <span
  m="2669440">of</span> <span m="2670880">numerical</span> <span
  m="2671420">computing,</span> <span m="2672410">and</span> <span
  m="2672620">I</span> <span m="2672770">think</span> <span m="2673040">I</span>
  <span m="2673130">better</span> <span m="2673400">save</span> <span
  m="2673730">that</span> <span m="2674030">for</span> <span
  m="2675200">next</span> <span m="2675500">time.</span> <span
  m="2677350">So</span> <span m="2677600">this</span> <span
  m="2677840">is</span> <span m="2677990">the</span> <span
  m="2678110">one</span> <span m="2678500">I</span> <span
  m="2679010">picked</span> <span m="2679430">for</span> <span
  m="2679970">this</span> <span m="2680420">time.</span></p><p><span
  m="2682870">And</span> <span m="2685060">we</span> <span
  m="2685210">saw</span> <span m="2685540">what</span> <span
  m="2685750">happened</span> <span m="2686200">in</span> <span
  m="2686320">L2.</span> <span m="2687010">Well,</span> <span
  m="2687310">we</span> <span m="2687490">saw</span> <span m="2687700">it</span>
  <span m="2687820">for</span> <span m="2688000">1</span> <span
  m="2688240">by</span> <span m="2688450">1.</span> <span
  m="2689290">Would</span> <span m="2689530">you</span> <span
  m="2689680">want</span> <span m="2689920">to</span> <span
  m="2691530">extend</span> <span m="2692430">to</span> <span
  m="2693030">prove</span> <span m="2693450">this</span> <span
  m="2693720">for</span> <span m="2693900">any</span> <span
  m="2694250">A,</span> <span m="2696740">going</span> <span
  m="2697070">beyond</span> <span m="2697520">1</span> <span
  m="2697790">by</span> <span m="2698000">1?</span> <span m="2700210">How</span>
  <span m="2700350">would</span> <span m="2700590">you</span> <span
  m="2700710">prove</span> <span m="2701040">such</span> <span
  m="2701370">a</span> <span m="2701430">thing</span> <span
  m="2702630">for</span> <span m="2702840">any</span> <span
  m="2703170">A?</span> <span m="2705735">I</span> <span
  m="2706180">guess</span> <span m="2706560">I'm</span> <span
  m="2708080">not</span> <span m="2708200">going</span> <span
  m="2708350">to</span> <span m="2708470">do</span> <span m="2708680">it.</span>
  <span m="2710710">It's</span> <span m="2711140">too</span> <span
  m="2711350">painful,</span> <span m="2712960">but</span> <span
  m="2714670">how</span> <span m="2714880">would</span> <span
  m="2715090">you</span> <span m="2715210">do</span> <span
  m="2715390">it?</span> <span m="2717930">You</span> <span
  m="2718080">would</span> <span m="2718350">use</span> <span
  m="2718740">the</span> <span m="2718930">SVD.</span> <span
  m="2720330">If</span> <span m="2720510">you</span> <span
  m="2720600">want</span> <span m="2720840">to</span> <span
  m="2720930">prove</span> <span m="2721290">something</span> <span
  m="2721710">about</span> <span m="2722010">matrices,</span> <span
  m="2723360">about</span> <span m="2723780">any</span> <span
  m="2724170">matrix,</span> <span m="2726420">the</span> <span
  m="2726610">SVD</span> <span m="2727300">is</span> <span
  m="2727450">the</span> <span m="2727570">best</span> <span
  m="2727930">thing</span> <span m="2728230">you</span> <span
  m="2728350">could</span> <span m="2728590">have--</span> <span
  m="2728890">the</span> <span m="2728980">best</span> <span
  m="2729250">tool</span> <span m="2729580">you</span> <span
  m="2729700">could</span> <span m="2729910">have.</span></p><p><span
  m="2730210">I</span> <span m="2730330">can</span> <span
  m="2730810">write</span> <span m="2731140">this</span> <span
  m="2731530">in</span> <span m="2731710">terms</span> <span
  m="2732130">of</span> <span m="2732250">the</span> <span
  m="2732850">SVD.</span> <span m="2734810">I</span> <span
  m="2735460">just</span> <span m="2735640">plug-in</span> <span
  m="2737590">A</span> <span m="2737950">equals</span> <span
  m="2739450">whatever</span> <span m="2739840">the</span> <span
  m="2739990">SVD</span> <span m="2740530">tells</span> <span
  m="2740830">me</span> <span m="2741010">to</span> <span m="2741100">put</span>
  <span m="2741370">in</span> <span m="2741490">there.</span> <span
  m="2741850">U</span> <span m="2742480">sigma</span> <span m="2743520">V</span>
  <span m="2743740">transposed.</span> <span m="2746600">Plug</span> <span
  m="2746900">it</span> <span m="2746990">in</span> <span
  m="2747170">there,</span> <span m="2748340">simplify</span> <span
  m="2749120">it</span> <span m="2749420">using</span> <span
  m="2750350">the</span> <span m="2750470">fact</span> <span
  m="2750800">that</span> <span m="2750950">these</span> <span
  m="2751220">are</span> <span m="2751410">orthogonal.</span> <span
  m="2754370">If</span> <span m="2754520">I</span> <span m="2754640">have</span>
  <span m="2754850">any</span> <span m="2755060">good</span> <span
  m="2755270">luck,</span> <span m="2755630">it'll</span> <span
  m="2756980">get</span> <span m="2757190">an</span> <span
  m="2757370">identity</span> <span m="2758000">somewhere</span> <span
  m="2758540">from</span> <span m="2758780">there</span> <span
  m="2759230">and</span> <span m="2759410">an</span> <span
  m="2759560">identity</span> <span m="2760130">somewhere</span> <span
  m="2760610">from</span> <span m="2760820">there.</span> <span
  m="2764400">And</span> <span m="2764730">it</span> <span m="2764880">will
  all</span> <span m="2765160">simplify.</span> <span m="2765900">It</span>
  <span m="2766030">will</span> <span m="2766100">all</span> <span
  m="2766310">diagonalize.</span></p><p><span m="2769480">That's</span> <span
  m="2769750">what</span> <span m="2769900">the</span> <span
  m="2770240">SVD</span> <span m="2770650">really</span> <span
  m="2771010">does</span> <span m="2771430">is</span> <span
  m="2772150">turns</span> <span m="2772480">my</span> <span
  m="2772720">messy</span> <span m="2773140">problem</span> <span
  m="2773710">into</span> <span m="2774190">a</span> <span
  m="2774700">problem</span> <span m="2775150">about</span> <span
  m="2775450">their</span> <span m="2775570">diagonal</span> <span
  m="2776260">matrix,</span> <span m="2776770">sigma</span> <span
  m="2777310">in</span> <span m="2777400">the</span> <span
  m="2777520">middle.</span> <span m="2778180">So</span> <span
  m="2778440">I</span> <span m="2778570">might</span> <span
  m="2778810">as</span> <span m="2778930">well</span> <span
  m="2779170">put</span> <span m="2779500">sigma</span> <span
  m="2779890">in</span> <span m="2779980">the</span> <span
  m="2780070">middle.</span> <span m="2780330">Yeah,</span> <span
  m="2780910">why</span> <span m="2781120">not?</span> <span
  m="2781420">Before</span> <span m="2781840">we</span> <span
  m="2782590">give</span> <span m="2782830">up</span> <span
  m="2783010">on</span> <span m="2783150">it--</span> <span m="2786970">a</span>
  <span m="2787060">special</span> <span m="2787510">case</span> <span
  m="2787870">of</span> <span m="2787990">that,</span> <span
  m="2789250">but</span> <span m="2790750">really,</span> <span
  m="2791230">the</span> <span m="2791410">genuine</span> <span
  m="2791950">case</span> <span m="2792340">would</span> <span
  m="2792580">be</span> <span m="2792790">when</span> <span m="2793030">A
  is</span> <span m="2793330">sigma.</span> <span m="2794350">Sigma</span> <span
  m="2794770">transpose</span> <span m="2795430">sigma</span> <span
  m="2796510">plus</span> <span m="2797800">delta</span> <span
  m="2798190">squared</span> <span m="2798670">I</span> <span
  m="2800470">inverse</span> <span m="2801160">times</span> <span
  m="2801580">sigma</span> <span m="2802000">transpose</span> <span
  m="2803230">approaches</span> <span m="2803980">the</span> <span
  m="2804160">pseudo</span> <span m="2804700">inverse,</span> <span
  m="2807770">sigma</span> <span m="2808490">plus.</span></p><p><span
  m="2809820">And</span> <span m="2809930">the</span> <span
  m="2810020">point</span> <span m="2810320">is</span> <span
  m="2810590">the</span> <span m="2810740">matrix</span> <span
  m="2811220">sigma</span> <span m="2811610">here</span> <span
  m="2811940">is</span> <span m="2812150">diagonal.</span> <span
  m="2815840">Oh,</span> <span m="2816260">I'm</span> <span
  m="2816410">practically</span> <span m="2817010">there,</span> <span
  m="2817370">actually.</span> <span m="2819920">Why</span> <span
  m="2820130">am</span> <span m="2820280">I</span> <span
  m="2820400">close</span> <span m="2820820">to</span> <span
  m="2820940">being</span> <span m="2824020">able</span> <span
  m="2824290">to</span> <span m="2825130">read</span> <span
  m="2825370">this</span> <span m="2825640">off?</span> <span
  m="2826390">Well,</span> <span m="2826570">everything</span> <span
  m="2826960">is</span> <span m="2827080">diagonal</span> <span
  m="2827740">here.</span> <span m="2828580">Diagonal,</span> <span
  m="2829240">diagonal,</span> <span m="2829960">diagonal.</span> <span
  m="2833340">And</span> <span m="2833700">what's</span> <span
  m="2834090">happening</span> <span m="2834630">on</span> <span
  m="2834810">those</span> <span m="2835050">diagonal</span> <span
  m="2835770">entries?</span> <span m="2840690">So</span> <span
  m="2840920">you</span> <span m="2841050">had</span> <span
  m="2841200">to</span> <span m="2841320">take</span> <span
  m="2841590">my</span> <span m="2841800">word</span> <span
  m="2842220">that</span> <span m="2842460">when</span> <span
  m="2842670">I</span> <span m="2842790">plugged</span> <span
  m="2843330">in</span> <span m="2843930">the</span> <span
  m="2844090">SVD,</span> <span m="2845330">the</span> <span
  m="2845550">U</span> <span m="2846030">and</span> <span m="2846120">the</span>
  <span m="2846240">V</span> <span m="2847230">got</span> <span
  m="2848220">separated</span> <span m="2848850">out</span> <span
  m="2849090">to</span> <span m="2849270">the</span> <span
  m="2849390">far</span> <span m="2849690">left</span> <span
  m="2850050">and</span> <span m="2850140">the</span> <span
  m="2850230">far</span> <span m="2850500">right.</span> <span
  m="2851220">And</span> <span m="2851400">it</span> <span
  m="2851490">was</span> <span m="2851700">that</span> <span
  m="2852180">that</span> <span m="2853050">stayed</span> <span
  m="2853740">in</span> <span m="2853860">the</span> <span
  m="2853920">middle.</span></p><p><span m="2855940">So</span> <span
  m="2856150">it's</span> <span m="2856300">really</span> <span
  m="2856630">this</span> <span m="2856990">is</span> <span
  m="2857170">the</span> <span m="2857260">heart</span> <span
  m="2857560">of</span> <span m="2857680">it.</span> <span
  m="2858920">And</span> <span m="2864160">say,</span> <span m="2864460">well,
  that's</span> <span m="2864520">diagonal</span> <span
  m="2865180">matrix.</span> <span m="2866570">So</span> <span
  m="2866680">I'm</span> <span m="2866830">just</span> <span
  m="2867040">looking</span> <span m="2867460">at</span> <span
  m="2867610">what</span> <span m="2867880">happens</span> <span
  m="2868390">on</span> <span m="2868600">each</span> <span
  m="2869020">diagonal</span> <span m="2869710">entry,</span> <span
  m="2872010">and</span> <span m="2872250">which</span> <span
  m="2872610">problem</span> <span m="2873090">is</span> <span
  m="2873270">that?</span> <span m="2875650">The</span> <span
  m="2875920">question</span> <span m="2876430">of</span> <span
  m="2876580">what's</span> <span m="2876850">happening</span> <span
  m="2877300">on</span> <span m="2877450">a</span> <span
  m="2877540">typical</span> <span m="2878230">diagonal</span> <span
  m="2879040">entry</span> <span m="2879520">of</span> <span
  m="2880250">this</span> <span m="2880600">thing</span> <span
  m="2880930">is</span> <span m="2881980">what</span> <span
  m="2882250">question?</span> <span m="2885020">The</span> <span
  m="2885240">1</span> <span m="2885480">by</span> <span m="2885690">1</span>
  <span m="2885930">case!</span> <span m="2887880">The</span> <span
  m="2888360">1</span> <span m="2888600">by</span> <span m="2888780">1,</span>
  <span m="2889380">because</span> <span m="2889680">each</span> <span
  m="2890430">entry</span> <span m="2890820">in</span> <span
  m="2890940">the</span> <span m="2891060">diagonal</span> <span
  m="2891660">is</span> <span m="2891930">not</span> <span
  m="2892680">even</span> <span m="2892920">noticing</span> <span
  m="2893490">the</span> <span m="2893640">others.</span></p><p><span
  m="2895980">So</span> <span m="2896160">that's</span> <span
  m="2896490">the</span> <span m="2896610">logic,</span> <span
  m="2897380">and</span> <span m="2897870">it</span> <span
  m="2897960">would</span> <span m="2898140">be</span> <span
  m="2898320">in</span> <span m="2898500">the</span> <span
  m="2898830">notes.</span> <span m="2899940">Prove</span> <span
  m="2900270">it</span> <span m="2900360">first</span> <span
  m="2900780">for</span> <span m="2901620">1</span> <span m="2901860">by</span>
  <span m="2902040">1,</span> <span m="2903180">then</span> <span
  m="2903420">secondly</span> <span m="2903990">for</span> <span
  m="2904560">diagonal.</span> <span m="2907450">This,</span> <span
  m="2908410">and</span> <span m="2908920">finally</span> <span
  m="2911020">with</span> <span m="2911290">A's,</span> <span
  m="2911740">and</span> <span m="2911860">they're</span> <span
  m="2912160">using</span> <span m="2912640">the</span> <span
  m="2912820">SVD</span> <span m="2913480">with</span> <span
  m="2913750">and</span> <span m="2914110">U</span> <span m="2914450">and V
  transposed</span> <span m="2915670">to</span> <span m="2916570">get</span>
  <span m="2916810">out</span> <span m="2916990">of</span> <span
  m="2917050">the</span> <span m="2917170">way</span> <span
  m="2917560">and</span> <span m="2917830">bring</span> <span
  m="2918070">us</span> <span m="2918220">back</span> <span
  m="2918490">to</span> <span m="2918640">here.</span> <span
  m="2919720">So</span> <span m="2919930">that's</span> <span
  m="2920350">the</span> <span m="2921790">theory,</span> <span
  m="2923770">but</span> <span m="2924640">really,</span> <span
  m="2925180">I</span> <span m="2925750">guess</span> <span
  m="2926020">I'm</span> <span m="2926260">thinking</span> <span
  m="2926710">that</span> <span m="2926950">far</span> <span
  m="2927460">the</span> <span m="2927610">most</span> <span
  m="2928000">important</span> <span m="2930220">message</span> <span
  m="2930910">in</span> <span m="2931090">today's</span> <span
  m="2931570">lecture</span> <span m="2932080">is</span> <span
  m="2932320">in</span> <span m="2932530">this</span> <span
  m="2935710">list</span> <span m="2936070">of</span> <span
  m="2937090">different</span> <span m="2937450">types</span> <span
  m="2937840">of</span> <span m="2937900">problems</span> <span
  m="2938440">that</span> <span m="2938620">appear</span> <span
  m="2940000">and</span> <span m="2940840">different</span> <span
  m="2941350">ways</span> <span m="2941830">to</span> <span
  m="2942010">work</span> <span m="2942340">with</span> <span
  m="2942520">them.</span></p><p><span m="2943630">And</span> <span
  m="2944020">we</span> <span m="2944320">haven't</span> <span
  m="2944650">done</span> <span m="2945070">Gram-Schmidt,</span> <span
  m="2948250">and</span> <span m="2948400">we</span> <span
  m="2948580">haven't</span> <span m="2948940">done</span> <span
  m="2949660">iteration.</span> <span m="2950920">So</span> <span
  m="2951390">this</span> <span m="2953470">chapter</span> <span
  m="2953980">is</span> <span m="2954160">a</span> <span
  m="2954250">survey</span> <span m="2954910">of--</span> <span
  m="2956470">well,</span> <span m="2956650">more</span> <span
  m="2956890">than</span> <span m="2957070">a</span> <span
  m="2957130">survey</span> <span m="2957580">of</span> <span
  m="2958090">what</span> <span m="2958900">numerical</span> <span
  m="2959440">linear</span> <span m="2959800">algebra</span> <span
  m="2960160">is</span> <span m="2960310">about.</span> <span
  m="2960760">And</span> <span m="2960940">I</span> <span
  m="2961030">haven't</span> <span m="2961300">done</span> <span
  m="2961510">random,</span> <span m="2961960">yet.</span> <span
  m="2962370">Sorry,</span> <span m="2962830">that's</span> <span
  m="2963100">coming,</span> <span m="2963370">too.</span> <span
  m="2966240">So</span> <span m="2966540">three</span> <span
  m="2967590">pieces</span> <span m="2968190">are</span> <span
  m="2968310">still</span> <span m="2968640">to</span> <span
  m="2968760">come,</span> <span m="2969120">but</span> <span
  m="2969660">let's</span> <span m="2969960">take</span> <span
  m="2970230">the</span> <span m="2970650">last</span> <span
  m="2971070">two</span> <span m="2971280">minutes</span> <span
  m="2971670">off</span> <span m="2972360">and</span> <span
  m="2973560">call</span> <span m="2973800">it</span> <span m="2973950">a</span>
  <span m="2974010">day.</span></p>
uid: 16628e4482cdc2a75b194304b853bbe5
type: courses
layout: video
---
