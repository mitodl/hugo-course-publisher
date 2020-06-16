---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>In this lecture, Professor Strang
  introduces the concept of low rank matrices. He demonstrates how using the
  Sherman-Morrison-Woodbury formula is useful to efficiently compute how small
  changes in a matrix affect its inverse.</p> <h2 class="subhead">Summary</h2>
  <p>If \(A\) is changed by a rank-one matrix, so is its inverse.<br />
  Woodbury-Morrison formula for those changes<br /> New data in least squares
  will produce these changes.<br /> Avoid recomputing over again with all
  data<br /> Note: Formula in class is correct in the textbook.</p> <p>Related
  section in textbook: III.1</p> <p><strong>Instructor:</strong> Prof. Gilbert
  Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: XhSk_Lw2X_U
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    title: Video-YouTube-Stream
    type: Video
    uid: 05a71b2834ce871de7c8d30a04055968
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/XhSk_Lw2X_U/default.jpg'
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: cd691678bd756ba6121392617f5d72cb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: XhSk_Lw2X_U
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 58c8abe8a325c5efb09004f5b2edf1af
  - id: XhSk_Lw2X_U.srt
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-14-low-rank-changes-in-a-and-its-inverse/XhSk_Lw2X_U.srt
    title: 3play caption file
    type: null
    uid: 8088311816aead415acadc4af58c59f2
  - id: XhSk_Lw2X_U.pdf
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-14-low-rank-changes-in-a-and-its-inverse/XhSk_Lw2X_U.pdf
    title: 3play pdf file
    type: null
    uid: 988b4c05680f40a5a4b3be7004a32500
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 76f92384da7e7c323521b6f687d603cb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b918bf5e4204f2b3ec29d75dc4ee929b
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture14_300k.mp4'
    parent_uid: ca9ef9c6a11c9143705b6606448b4ddb
    title: Video-Internet Archive-MP4
    type: Video
    uid: f8ee1aede75cad2878280b82f359e328
inline_embed_id: 25678389lecture14lowrankchangesinaanditsinverse46568815
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-14-low-rank-changes-in-a-and-its-inverse
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-14-low-rank-changes-in-a-and-its-inverse
title: 'Lecture 14: Low Rank Changes in A and Its Inverse'
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
  m="18290">ocw.mit.edu.</span></p><p><span m="22720">GILBERT STRANG:</span>
  <span m="22960">So</span> <span m="24160">just</span> <span
  m="24430">to</span> <span m="24760">orient</span> <span m="25270">where</span>
  <span m="25510">we</span> <span m="25720">are,</span> <span
  m="27910">today</span> <span m="28480">starts</span> <span m="29080">a</span>
  <span m="29170">new</span> <span m="29410">chapter</span> <span
  m="32439">about</span> <span m="32860">low-rank</span> <span
  m="33640">matrices.</span> <span m="34840">So</span> <span
  m="35380">that's</span> <span m="35750">an</span> <span
  m="36240">important</span> <span m="36910">bunch</span> <span
  m="37300">of</span> <span m="37400">matrices.</span> <span
  m="38830">They</span> <span m="38980">can</span> <span m="39220">be</span>
  <span m="40300">truly</span> <span m="40840">low-rank,</span> <span
  m="41680">like</span> <span m="42980">uv</span> <span
  m="43750">transpose.</span> <span m="44620">That's</span> <span
  m="44890">a</span> <span m="44960">rank</span> <span m="45340">1.</span> <span
  m="46720">And</span> <span m="47020">we</span> <span m="47230">have</span>
  <span m="47440">some</span> <span m="47680">questions</span> <span
  m="49690">about</span> <span m="50350">those.</span> <span
  m="51560">And</span> <span m="51610">then</span> <span m="51820">later</span>
  <span m="52240">in</span> <span m="52360">the</span> <span
  m="52480">chapter,</span> <span m="53020">we'll</span> <span
  m="53230">meet</span> <span m="53560">matrices</span> <span
  m="54460">that</span> <span m="54640">are</span> <span
  m="54760">approximately</span> <span m="55670">low-rank,</span> <span
  m="57160">where</span> <span m="59096">the</span> <span
  m="59580">singular</span> <span m="60120">values</span> <span
  m="60660">drop</span> <span m="61080">off</span> <span m="61560">like</span>
  <span m="61800">crazy.</span> <span m="62850">And</span> <span
  m="64080">those</span> <span m="64440">are</span> <span m="65280">quite</span>
  <span m="65670">remarkable</span> <span m="66360">matrices.</span></p><p><span
  m="68340">So</span> <span m="68970">this</span> <span m="69300">is</span>
  <span m="69420">my</span> <span m="70080">topic</span> <span
  m="70590">at</span> <span m="70710">the</span> <span
  m="70800">beginning--</span> <span m="71910">and</span> <span
  m="74400">if</span> <span m="74850">it</span> <span m="74970">doesn't</span>
  <span m="75300">take</span> <span m="75570">the</span> <span
  m="75720">whole</span> <span m="76080">hour,</span> <span m="76970">I</span>
  <span m="77130">want</span> <span m="77370">to</span> <span
  m="77430">go</span> <span m="77580">back</span> <span m="77880">to</span>
  <span m="78030">a</span> <span m="78120">topic</span> <span
  m="79300">in</span> <span m="82800">chapter</span> <span m="83610">2--</span>
  <span m="84210">that</span> <span m="84450">should</span> <span
  m="84660">be</span> <span m="84840">2.4--</span> <span m="87750">where</span>
  <span m="88110">we</span> <span m="88470">were</span> <span
  m="88800">last</span> <span m="89130">time.</span> <span
  m="90780">Good.</span> <span m="95340">So</span> <span m="97140">that's</span>
  <span m="97410">for</span> <span m="97770">later</span> <span
  m="98090">in</span> <span m="98190">the</span> <span m="98340">hour.</span>
  <span m="98640">This</span> <span m="98910">is</span> <span
  m="99060">for</span> <span m="99240">now.</span></p><p><span
  m="102080">Let's</span> <span m="102360">focus</span> <span
  m="102840">on</span> <span m="102990">this.</span> <span m="104580">So</span>
  <span m="104760">what's</span> <span m="105090">the</span> <span
  m="105210">question</span> <span m="105750">there?</span> <span
  m="106080">I</span> <span m="106170">start</span> <span m="106470">with</span>
  <span m="106620">the</span> <span m="106740">identity</span> <span
  m="107310">matrix.</span> <span m="108870">I</span> <span
  m="109080">perturb</span> <span m="109980">it</span> <span
  m="110700">by</span> <span m="110940">a</span> <span m="111000">matrix</span>
  <span m="111570">of</span> <span m="111720">rank</span> <span
  m="112080">1.</span> <span m="114750">And</span> <span m="114990">I</span>
  <span m="115140">ask</span> <span m="115620">what</span> <span
  m="115890">the</span> <span m="116070">inverse</span> <span
  m="116580">is.</span> <span m="117720">So</span> <span m="118490">I'm</span>
  <span m="118730">making</span> <span m="119610">a</span> <span
  m="120000">small</span> <span m="120570">change</span> <span
  m="121050">in</span> <span m="121140">the</span> <span
  m="121260">matrix.</span></p><p><span m="121830">When</span> <span
  m="122040">I</span> <span m="122160">say</span> <span m="122490">small</span>
  <span m="122970">change,</span> <span m="123540">I</span> <span
  m="123630">don't</span> <span m="123840">mean</span> <span
  m="124080">that</span> <span m="124250">the</span> <span
  m="124410">numbers</span> <span m="124980">are</span> <span
  m="125160">small.</span> <span m="126760">In</span> <span
  m="126910">fact,</span> <span m="129580">uv</span> <span
  m="130090">transpose</span> <span m="130810">could</span> <span
  m="131020">be</span> <span m="131230">the</span> <span m="131410">all</span>
  <span m="131620">1's</span> <span m="132160">matrix,</span> <span
  m="133150">or</span> <span m="133300">the</span> <span m="133450">all</span>
  <span m="133780">millions</span> <span m="134470">matrix,</span> <span
  m="135100">even.</span> <span m="135940">But</span> <span
  m="136750">its</span> <span m="136930">rank</span> <span m="137380">is</span>
  <span m="137540">small.</span> <span m="139330">That's</span> <span
  m="139730">the</span> <span m="140470">idea</span> <span m="140860">of</span>
  <span m="140950">small</span> <span m="141560">that's</span> <span
  m="141820">important</span> <span m="142360">here.</span></p><p><span
  m="143110">And</span> <span m="143500">I</span> <span m="143650">would</span>
  <span m="143860">like</span> <span m="144070">to</span> <span
  m="144220">know</span> <span m="144850">what</span> <span
  m="145030">the</span> <span m="145210">inverse</span> <span
  m="145780">is.</span> <span m="148810">So</span> <span
  m="149650">that's</span> <span m="150050">the</span> <span
  m="150130">question</span> <span m="150670">here</span> <span
  m="150930">in</span> <span m="151060">4.1.</span> <span m="152410">And</span>
  <span m="152590">there's</span> <span m="152860">a</span> <span
  m="152950">famous</span> <span m="153430">formula</span> <span
  m="154480">that</span> <span m="154630">has</span> <span m="154960">at</span>
  <span m="155050">least</span> <span m="155380">three</span> <span
  m="155740">names,</span> <span m="156220">and</span> <span
  m="156340">probably</span> <span m="156910">more,</span> <span
  m="157930">and</span> <span m="158380">it's</span> <span
  m="158620">also</span> <span m="159010">called</span> <span
  m="159400">the</span> <span m="159520">matrix</span> <span
  m="160300">inversion</span> <span m="161140">formula</span> <span
  m="166070">in</span> <span m="167060">signal</span> <span
  m="167540">processing.</span> <span m="174250">And</span> <span
  m="174470">let</span> <span m="174620">me</span> <span m="174740">write</span>
  <span m="174980">down</span> <span m="175280">the</span> <span
  m="175460">example.</span></p><p><span m="176630">So</span> <span
  m="177220">I</span> <span m="177350">start</span> <span m="177650">with</span>
  <span m="177830">the</span> <span m="177920">identity</span> <span
  m="178460">matrix.</span> <span m="180200">I</span> <span m="181250">do</span>
  <span m="181400">a</span> <span m="181490">rank</span> <span
  m="181910">1</span> <span m="182360">perturbation.</span> <span
  m="184760">And</span> <span m="184910">I</span> <span m="185030">want</span>
  <span m="185270">to</span> <span m="185360">know,</span> <span
  m="185630">what's</span> <span m="185950">the</span> <span
  m="186110">inverse?</span> <span m="187610">And</span> <span
  m="187820">I'll</span> <span m="187940">write</span> <span
  m="188180">down</span> <span m="188450">the</span> <span
  m="188840">answer</span> <span m="189970">and</span> <span
  m="191170">check</span> <span m="191510">that</span> <span
  m="191700">it's</span> <span m="191900">correct.</span></p><p><span
  m="192800">So</span> <span m="193100">I'm</span> <span
  m="193340">perturbing</span> <span m="194270">the</span> <span
  m="194450">identity</span> <span m="195050">matrix</span> <span
  m="195680">in</span> <span m="195830">this</span> <span
  m="196070">case,</span> <span m="197770">whose</span> <span
  m="198100">inverse</span> <span m="198610">is</span> <span
  m="198760">also</span> <span m="199150">the</span> <span
  m="199330">identity</span> <span m="199870">matrix.</span> <span
  m="200480">So</span> <span m="200500">I'm</span> <span m="200650">going</span>
  <span m="200760">to</span> <span m="200890">write</span> <span
  m="201250">the</span> <span m="201460">answer</span> <span
  m="204550">as</span> <span m="204790">a</span> <span
  m="204880">perturbation</span> <span m="205840">of</span> <span
  m="206020">I.</span> <span m="206980">And</span> <span m="207130">the</span>
  <span m="207220">question</span> <span m="207700">is,</span> <span
  m="207880">what</span> <span m="208120">is</span> <span m="208330">that</span>
  <span m="208840">perturbation?</span> <span m="210220">And</span> <span
  m="210820">it's</span> <span m="211030">a</span> <span
  m="211090">famous</span> <span m="211570">formula.</span> <span
  m="213040">There</span> <span m="213190">is</span> <span m="213310">a</span>
  <span m="213400">uv</span> <span m="214210">transpose</span> <span
  m="215260">that comes</span> <span m="215650">in,</span> <span
  m="216870">copied</span> <span m="217390">from</span> <span
  m="217630">there,</span> <span m="218620">divided</span> <span
  m="219220">by</span> <span m="219460">1</span> <span m="221080">minus</span>
  <span m="222490">v</span> <span m="222760">transpose</span> <span
  m="223590">u.</span></p><p><span m="226390">Now,</span> <span
  m="226600">let's</span> <span m="226840">first</span> <span
  m="227170">of</span> <span m="227230">all</span> <span m="227380">just</span>
  <span m="227590">see</span> <span m="227860">that</span> <span
  m="229060">this</span> <span m="229270">is</span> <span m="229420">a</span>
  <span m="229510">reasonable</span> <span m="230680">formula.</span> <span
  m="232930">So</span> <span m="233140">u</span> <span m="233460">a</span> <span
  m="233560">column--</span> <span m="234000">u</span> <span
  m="234190">and</span> <span m="234310">v</span> <span m="234490">are</span>
  <span m="234610">column</span> <span m="234970">vectors,</span> <span
  m="235480">as</span> <span m="235720">always.</span> <span
  m="238020">So</span> <span m="238230">uv</span> <span
  m="238740">transpose</span> <span m="239430">is</span> <span
  m="239610">a</span> <span m="239670">matrix,</span> <span
  m="240570">column</span> <span m="241020">times</span> <span
  m="241380">row.</span> <span m="242910">And</span> <span
  m="243950">it's</span> <span m="244290">being</span> <span
  m="244590">subtracted</span> <span m="245220">from</span> <span
  m="245390">the</span> <span m="245550">identity.</span></p><p><span
  m="247900">And</span> <span m="248260">over</span> <span
  m="248560">here</span> <span m="248800">on</span> <span m="248950">this</span>
  <span m="249160">side,</span> <span m="250450">I</span> <span
  m="250600">have</span> <span m="250870">uv</span> <span
  m="251320">transpose--</span> <span m="252130">again,</span> <span
  m="252450">a</span> <span m="252520">rank</span> <span m="252940">1</span>
  <span m="253270">matrix--</span> <span m="254740">divided</span> <span
  m="255190">by</span> <span m="255400">a</span> <span m="255460">number.</span>
  <span m="256220">So</span> <span m="256360">that's</span> <span
  m="256700">the</span> <span m="256779">point.</span> <span
  m="257110">This</span> <span m="257350">is</span> <span m="257529">a</span>
  <span m="257589">number--</span> <span m="263040">a</span> <span
  m="263630">1</span> <span m="263940">by</span> <span m="264150">1</span> <span
  m="264450">matrix,</span> <span m="265100">you</span> <span
  m="265230">could</span> <span m="265400">say.</span></p><p><span
  m="268470">So</span> <span m="268620">the</span> <span m="268740">point</span>
  <span m="269010">of</span> <span m="269100">this</span> <span
  m="269610">formula</span> <span m="270150">is</span> <span
  m="271980">to</span> <span m="272130">find</span> <span m="272490">the</span>
  <span m="272670">inverse</span> <span m="273240">of</span> <span
  m="273390">an</span> <span m="273510">n</span> <span m="273690">by</span>
  <span m="273960">n</span> <span m="274110">matrix</span> <span
  m="275430">in</span> <span m="275580">terms</span> <span m="276030">of</span>
  <span m="276180">the</span> <span m="276360">inverse</span> <span
  m="276870">of</span> <span m="276990">a</span> <span m="277080">1</span> <span
  m="277320">by</span> <span m="277500">1</span> <span m="277770">matrix,</span>
  <span m="279540">which</span> <span m="279810">is</span> <span
  m="280530">a</span> <span m="280560">lot</span> <span
  m="281070">simpler</span> <span m="281700">and</span> <span
  m="281910">easier</span> <span m="282330">to</span> <span
  m="282480">do.</span> <span m="282780">I</span> <span m="282840">mean,</span>
  <span m="282990">that</span> <span m="283230">right-hand</span> <span
  m="283740">side</span> <span m="284040">is</span> <span
  m="284640">clearly</span> <span m="285600">easy.</span> <span
  m="286650">And</span> <span m="286950">let's</span> <span
  m="287790">see</span> <span m="288090">what</span> <span
  m="288540">other</span> <span m="288840">things</span> <span
  m="289300">it</span> <span m="289320">tells</span> <span
  m="289710">us.</span></p><p><span m="291160">So</span> <span
  m="291370">this</span> <span m="291640">was</span> <span m="291850">a</span>
  <span m="291940">rank</span> <span m="292330">1</span> <span
  m="293110">perturbation</span> <span m="294850">in</span> <span
  m="295000">the</span> <span m="295120">identity.</span> <span
  m="296380">Then</span> <span m="296620">when</span> <span m="296860">I</span>
  <span m="297070">invert,</span> <span m="298300">I</span> <span
  m="298420">get--</span> <span m="299200">look</span> <span
  m="299440">at</span> <span m="299560">this.</span> <span
  m="299860">This</span> <span m="300130">is</span> <span m="300280">also</span>
  <span m="300670">a</span> <span m="300760">rank</span> <span
  m="301110">1.</span> <span m="301600">That's</span> <span m="301870">a</span>
  <span m="301930">number.</span> <span m="304150">In</span> <span
  m="304300">fact,</span> <span m="304670">it's</span> <span
  m="304840">the</span> <span m="304960">very</span> <span
  m="305260">same</span> <span m="305620">rank</span> <span m="305920">1</span>
  <span m="306160">that</span> <span m="306310">we</span> <span
  m="306460">had</span> <span m="306670">there</span> <span m="307420">in</span>
  <span m="308650">this</span> <span m="308950">nice</span> <span
  m="309310">case.</span></p><p><span m="310990">So</span> <span
  m="313100">conclusion--</span> <span m="316360">if</span> <span
  m="316510">I</span> <span m="316900">change</span> <span m="317470">a</span>
  <span m="317560">matrix</span> <span m="318220">by</span> <span
  m="318520">rank</span> <span m="318880">1,</span> <span m="320320">I</span>
  <span m="320440">change</span> <span m="320830">its</span> <span
  m="321070">inverse</span> <span m="321550">by</span> <span
  m="321760">rank</span> <span m="322120">1.</span> <span m="323290">That</span>
  <span m="325060">doesn't</span> <span m="325450">seem</span> <span
  m="325720">completely</span> <span m="326380">obvious</span> <span
  m="326860">until</span> <span m="327220">you</span> <span m="328320">go</span>
  <span m="329120">to</span> <span m="329800">figure</span> <span
  m="330130">it</span> <span m="330250">out.</span> <span m="331210">When</span>
  <span m="331360">you</span> <span m="331480">figure</span> <span
  m="331810">it</span> <span m="331930">out,</span> <span m="332200">you</span>
  <span m="332350">get</span> <span m="332560">a</span> <span
  m="332620">formula</span> <span m="333130">that</span> <span
  m="333280">tells</span> <span m="333670">you.</span></p><p><span
  m="334240">Well,</span> <span m="334720">so</span> <span m="334960">far</span>
  <span m="335320">what</span> <span m="335560">I'm</span> <span
  m="336400">perturbing</span> <span m="337120">is</span> <span
  m="337270">the</span> <span m="337390">identity</span> <span
  m="337960">matrix.</span> <span m="338830">When</span> <span
  m="339010">I</span> <span m="339100">get</span> <span m="339280">here,</span>
  <span m="339670">I'm</span> <span m="339880">going</span> <span
  m="340030">to</span> <span m="340120">perturb</span> <span
  m="340660">any</span> <span m="340900">matrix.</span> <span
  m="341985">And</span> <span m="342320">I'm</span> <span
  m="342580">going</span> <span m="342680">to</span> <span
  m="342760">reach</span> <span m="343090">the</span> <span
  m="343150">same</span> <span m="343510">conclusion.</span> <span
  m="344620">If</span> <span m="345040">this</span> <span m="345310">is</span>
  <span m="345490">rank</span> <span m="345820">1,</span> <span
  m="348510">then</span> <span m="350520">the</span> <span
  m="350860">change</span> <span m="351310">in</span> <span
  m="351430">the</span> <span m="351610">inverse</span> <span
  m="352150">is</span> <span m="352360">also</span> <span m="352720">rank</span>
  <span m="353080">1.</span> <span m="353800">But</span> <span
  m="354010">let's</span> <span m="354220">see</span> <span m="354460">it</span>
  <span m="354580">first</span> <span m="355000">for</span> <span
  m="355300">a</span> <span m="355555">equal</span> <span m="355810">to</span>
  <span m="355990">the</span> <span m="356170">identity.</span></p><p><span
  m="357380">So</span> <span m="358480">I</span> <span m="358810">guess</span>
  <span m="359080">I</span> <span m="359170">have</span> <span
  m="359350">two</span> <span m="359560">or</span> <span m="359650">three</span>
  <span m="359950">questions.</span> <span m="361480">One</span> <span
  m="361810">would</span> <span m="362020">be,</span> <span
  m="362800">how</span> <span m="363010">do</span> <span m="363070">you</span>
  <span m="363190">check</span> <span m="363550">that</span> <span
  m="363730">this</span> <span m="363970">is</span> <span
  m="364120">correct?</span> <span m="368120">Again,</span> <span
  m="370300">remember</span> <span m="370740">what</span> <span
  m="370920">it's</span> <span m="371190">doing.</span> <span
  m="372520">It's</span> <span m="372920">pretty</span> <span
  m="373230">neat.</span> <span m="374775">It's</span> <span
  m="375210">computing</span> <span m="376950">an</span> <span
  m="377130">n</span> <span m="377400">by</span> <span m="377640">n</span> <span
  m="377880">inverse</span> <span m="378630">in</span> <span
  m="378840">terms</span> <span m="379260">of</span> <span m="379380">a</span>
  <span m="379470">1</span> <span m="379740">by</span> <span m="379950">1</span>
  <span m="380220">inverse.</span> <span m="381630">It's</span> <span
  m="381810">a</span> <span m="381940">number.</span></p><p><span
  m="384970">And</span> <span m="385090">that's</span> <span
  m="385690">certainly</span> <span m="386140">a</span> <span
  m="386200">favorable</span> <span m="386800">exchange.</span> <span
  m="387490">So</span> <span m="387730">it's</span> <span m="387880">a</span>
  <span m="387940">formula</span> <span m="388540">that</span> <span
  m="388810">you</span> <span m="388930">want</span> <span m="390110">and</span>
  <span m="390490">a</span> <span m="390550">formula</span> <span
  m="391060">that's</span> <span m="391330">quite</span> <span
  m="391600">useful.</span> <span m="395410">Let</span> <span
  m="395590">me</span> <span m="395740">just</span> <span
  m="395980">check</span> <span m="396280">the</span> <span
  m="396400">formula</span> <span m="397510">before</span> <span
  m="397870">I</span> <span m="398350">talk</span> <span m="398680">about</span>
  <span m="399535">how</span> <span m="399850">it's</span> <span
  m="400030">useful.</span></p><p><span m="400930">So</span> <span
  m="401140">how</span> <span m="401290">shall</span> <span m="401530">I</span>
  <span m="401650">check</span> <span m="401980">it?</span> <span
  m="402230">I</span> <span m="402250">guess,</span> <span m="403180">if</span>
  <span m="403390">this</span> <span m="403630">is</span> <span
  m="403780">claimed</span> <span m="404170">to</span> <span
  m="404320">be</span> <span m="404530">the</span> <span
  m="404680">inverse,</span> <span m="405190">then</span> <span
  m="405430">let's</span> <span m="405700">just</span> <span
  m="406500">che--</span> <span m="407170">so</span> <span
  m="407410">this</span> <span m="407620">will</span> <span m="407710">be</span>
  <span m="407890">the</span> <span m="408040">check.</span> <span
  m="409660">I'll</span> <span m="409870">multiply</span> <span
  m="414370">by</span> <span m="414630">that,</span> <span m="416280">I</span>
  <span m="416760">plus</span> <span m="417930">uv</span> <span
  m="418860">transpose</span> <span m="419820">over</span> <span
  m="420600">1</span> <span m="420930">minus</span> <span m="421380">v</span>
  <span m="421620">transpose</span> <span m="422400">u,</span> <span
  m="423350">the</span> <span m="423600">claimed</span> <span
  m="424260">inverse.</span> <span m="425400">And</span> <span
  m="425520">what</span> <span m="425700">am</span> <span m="425820">I</span>
  <span m="425940">hoping</span> <span m="426360">to</span> <span
  m="426510">get</span> <span m="426810">from</span> <span
  m="427050">this</span> <span m="427950">multiplication?</span></p><p><span
  m="429680">AUDIENCE:</span> <span m="429895">I.</span></p><p><span
  m="430110">GILBERT STRANG:</span> <span m="430325">I.</span> <span
  m="432770">I'm</span> <span m="432950">hoping</span> <span
  m="433250">that,</span> <span m="433430">that</span> <span
  m="433640">result</span> <span m="434180">is</span> <span
  m="434360">the</span> <span m="434510">identity</span> <span
  m="435080">matrix.</span> <span m="435990">So</span> <span
  m="436330">I'm</span> <span m="436460">just</span> <span
  m="436670">going</span> <span m="436800">to</span> <span m="436970">do</span>
  <span m="437210">it</span> <span m="437330">out,</span> <span
  m="438170">and</span> <span m="438680">we'll</span> <span
  m="438950">see</span> <span m="439250">the</span> <span
  m="439430">identity</span> <span m="440030">appear.</span></p><p><span
  m="441020">So</span> <span m="441260">that</span> <span
  m="441500">times</span> <span m="441980">I--</span> <span m="442460">so</span>
  <span m="442730">let</span> <span m="442850">me</span> <span
  m="442970">just</span> <span m="443210">write</span> <span
  m="443480">that</span> <span m="443720">part</span> <span
  m="444020">first,</span> <span m="444910">I</span> <span
  m="445300">minus</span> <span m="445790">uv</span> <span
  m="446480">transpose.</span> <span m="448700">And</span> <span
  m="448790">now</span> <span m="449150">I</span> <span m="449340">minus</span>
  <span m="449660">uv</span> <span m="449990">transpose</span> <span
  m="450620">times</span> <span m="451040">this--</span> <span
  m="452030">so</span> <span m="452240">that's</span> <span m="453290">I</span>
  <span m="453920">minus</span> <span m="454620">uv</span> <span
  m="455720">transpose</span> <span m="457430">times</span> <span
  m="458720">uv</span> <span m="459710">transpose</span> <span
  m="460760">over</span> <span m="462020">1</span> <span m="462560">minus</span>
  <span m="463070">v</span> <span m="463550">transpose</span> <span
  m="464600">u.</span> <span m="466040">It's</span> <span m="468120">just</span>
  <span m="468620">multiplying</span> <span m="469370">it</span> <span
  m="469490">out</span> <span m="470810">and</span> <span
  m="471020">seeing</span> <span m="471440">that</span> <span
  m="471590">we</span> <span m="471860">get</span> <span m="472280">the</span>
  <span m="472430">identity.</span></p><p><span m="474530">I</span> <span
  m="474650">see</span> <span m="474920">the</span> <span
  m="475070">identity</span> <span m="475670">there.</span> <span
  m="476630">So</span> <span m="476960">I</span> <span m="477230">guess,</span>
  <span m="477530">I</span> <span m="477650">hope</span> <span
  m="477980">that</span> <span m="478250">all</span> <span
  m="479645">this</span> <span m="480050">part</span> <span
  m="481340">reduces</span> <span m="482190">to--</span> <span
  m="483230">what</span> <span m="483380">does</span> <span m="483620">it</span>
  <span m="483740">reduce</span> <span m="484190">to?</span> <span
  m="487610">Let</span> <span m="487700">me</span> <span m="487850">do</span>
  <span m="488060">that</span> <span m="488720">numerator</span> <span
  m="489380">there.</span> <span m="489980">So</span> <span
  m="490180">that's</span> <span m="490260">uv</span> <span
  m="490970">transpose</span> <span m="494300">minus</span> <span
  m="495170">u--</span> <span m="497490">ooh--</span> <span
  m="498630">minus</span> <span m="499440">u</span> <span
  m="500100">times</span> <span m="501090">v</span> <span
  m="501510">transpose</span> <span m="502350">u--</span> <span
  m="502740">do</span> <span m="502860">you</span> <span m="502950">see</span>
  <span m="503280">what's</span> <span m="503610">happening</span> <span
  m="504090">here--</span> <span m="505410">v</span> <span
  m="505590">transpose.</span></p><p><span m="510390">The</span> <span
  m="510510">key</span> <span m="510840">is</span> <span m="511110">that</span>
  <span m="511260">when</span> <span m="511440">I</span> <span
  m="511560">multiplied</span> <span m="512669">that</span> <span
  m="513179">times</span> <span m="513600">that,</span> <span
  m="516070">I've</span> <span m="516190">got</span> <span
  m="516400">four</span> <span m="516850">things</span> <span
  m="517270">in</span> <span m="517419">a</span> <span m="517480">row.</span>
  <span m="517900">And</span> <span m="518049">I</span> <span
  m="518169">do</span> <span m="518440">the</span> <span
  m="518559">middle</span> <span m="519280">pair</span> <span
  m="519669">first.</span> <span m="520570">Because</span> <span
  m="520780">that's</span> <span m="521049">a</span> <span
  m="521110">number,</span> <span m="521559">v</span> <span
  m="521770">transpose</span> <span m="522490">u.</span> <span
  m="523270">So</span> <span m="523450">I</span> <span m="523539">had</span>
  <span m="523870">uv</span> <span m="524320">transpose</span> <span
  m="525820">from</span> <span m="526240">that</span> <span
  m="527170">and</span> <span m="527500">uv</span> <span
  m="527980">transpose</span> <span m="528970">times</span> <span
  m="529300">that</span> <span m="529480">number</span> <span
  m="529990">minus--</span> <span m="530590">do</span> <span
  m="530720">you</span> <span m="530830">see--</span> <span
  m="532040">what</span> <span m="532360">have</span> <span m="532480">I</span>
  <span m="532570">got</span> <span m="532810">here?</span> <span
  m="536540">I've</span> <span m="536720">got--</span></p><p><span
  m="537170">AUDIENCE:</span> <span m="537396">[INAUDIBLE]</span></p><p><span
  m="538950">GILBERT STRANG:</span> <span m="539035">Yeah.</span> <span
  m="539120">I've</span> <span m="539430">got</span> <span m="539640">uv</span>
  <span m="540030">transpose.</span> <span m="541230">Now</span> <span
  m="541470">I</span> <span m="541590">factor</span> <span m="542130">out</span>
  <span m="542340">a</span> <span m="542430">1</span> <span
  m="543180">minus</span> <span m="543870">v</span> <span
  m="544110">transpose</span> <span m="544650">u,</span> <span
  m="544830">which</span> <span m="545070">is</span> <span
  m="545190">just</span> <span m="545580">what</span> <span m="545760">I</span>
  <span m="545850">want.</span> <span m="548390">I</span> <span
  m="548520">factor</span> <span m="548940">the</span> <span m="549090">1</span>
  <span m="549360">minus v</span> <span m="549700">transpose</span> <span
  m="550470">u</span> <span m="550620">out</span> <span m="550770">of</span>
  <span m="550890">here.</span> <span m="551540">It's</span> <span
  m="551840">there.</span> <span m="552930">Cancel</span> <span
  m="553380">those.</span> <span m="554280">And</span> <span
  m="554400">then</span> <span m="555330">I'm</span> <span
  m="555480">left</span> <span m="555780">with</span> <span m="556010">a</span>
  <span m="556080">uv</span> <span m="556530">transpose,</span> <span
  m="557580">which</span> <span m="557790">cancels</span> <span
  m="558330">that</span> <span m="558840">and</span> <span
  m="558960">leaves</span> <span m="559380">the</span> <span
  m="559560">identity.</span></p><p><span m="562200">It's</span> <span
  m="562740">kind</span> <span m="562980">of</span> <span
  m="563070">magic.</span> <span m="564900">Of</span> <span
  m="565020">course,</span> <span m="568480">somebody</span> <span
  m="568780">had</span> <span m="568900">to</span> <span
  m="569020">figure</span> <span m="569350">out</span> <span
  m="569470">that</span> <span m="569680">formula</span> <span
  m="570130">in</span> <span m="570250">the</span> <span m="570340">first</span>
  <span m="570640">place.</span> <span m="573160">I</span> <span
  m="573310">could</span> <span m="574390">do</span> <span m="576160">the</span>
  <span m="576400">next</span> <span m="576760">one,</span> <span
  m="576950">if</span> <span m="577120">you</span> <span m="577240">like,</span>
  <span m="580000">since</span> <span m="580330">I'm</span> <span
  m="580540">on</span> <span m="580660">a</span> <span m="580750">roll.</span>
  <span m="583510">Suppose</span> <span m="584080">I</span> <span
  m="584230">take</span> <span m="584570">this</span> <span
  m="584680">second</span> <span m="585040">one,</span> <span
  m="585220">now</span> <span m="586000">what's</span> <span
  m="586450">the</span> <span m="586570">difference</span> <span
  m="587080">in--</span> <span m="587800">it's</span> <span m="588340">uv</span>
  <span m="588890">transpose,</span> <span m="589600">but</span> <span
  m="589780">those</span> <span m="590080">are</span> <span
  m="590230">larger</span> <span m="590740">letters,</span> <span
  m="591720">the</span> <span m="591880">u</span> <span m="592120">and</span>
  <span m="592210">the</span> <span m="592300">v.</span> <span
  m="592555">So</span> <span m="593200">what</span> <span m="593400">am I</span>
  <span m="593590">meaning</span> <span m="594010">by</span> <span
  m="594220">those?</span></p><p><span m="595980">Those</span> <span
  m="596420">are</span> <span m="596570">matrices.</span> <span
  m="597650">This</span> <span m="597890">is</span> <span m="598040">a</span>
  <span m="598100">bigger</span> <span m="598430">rank.</span> <span
  m="600200">u</span> <span m="601080">has</span> <span m="601310">k</span>
  <span m="601670">columns.</span> <span m="603230">v</span> <span
  m="603530">transpose</span> <span m="604250">has</span> <span
  m="604460">k</span> <span m="604850">rows.</span> <span m="606380">That</span>
  <span m="607070">product</span> <span m="607640">uv</span> <span
  m="608150">transpose</span> <span m="608930">is</span> <span
  m="609740">k</span> <span m="610040">by</span> <span m="610310">k.</span>
  <span m="611960">So</span> <span m="612770">let</span> <span
  m="612890">me</span> <span m="613280">see</span> <span m="613580">what</span>
  <span m="613880">I</span> <span m="614030">think</span> <span
  m="614300">the</span> <span m="614420">formula</span> <span
  m="614900">would</span> <span m="615080">be.</span></p><p><span
  m="615830">So</span> <span m="616100">now,</span> <span m="617120">I</span>
  <span m="617430">minus</span> <span m="617960">uv</span> <span
  m="618680">transpose</span> <span m="620150">inverse--</span> <span
  m="621260">so</span> <span m="621500">this</span> <span m="621860">is</span>
  <span m="623260">n</span> <span m="623500">by</span> <span m="623750">k</span>
  <span m="625870">times</span> <span m="626410">k</span> <span
  m="626680">by</span> <span m="626920">n.</span> <span m="628810">So</span>
  <span m="629110">it's</span> <span m="629860">n</span> <span
  m="630040">by</span> <span m="630280">n</span> <span m="630400">matrix.</span>
  <span m="631000">And</span> <span m="631120">this</span> <span
  m="631360">is</span> <span m="631510">the</span> <span m="631690">ide--</span>
  <span m="632320">identity</span> <span m="632920">of this.</span> <span
  m="633730">But</span> <span m="633970">its</span> <span m="634180">rank</span>
  <span m="634720">is--</span> <span m="636670">what</span> <span
  m="636880">is</span> <span m="637030">the</span> <span m="637180">rank</span>
  <span m="637600">of</span> <span m="637720">that</span> <span
  m="638040">now?</span></p><p><span m="638763">AUDIENCE:</span> <span
  m="638989">k.</span></p><p><span m="639670">GILBERT STRANG:</span> <span
  m="639797">k.</span> <span m="640180">Right.</span> <span m="641170">So</span>
  <span m="641440">I</span> <span m="641560">have</span> <span
  m="641860">here,</span> <span m="645820">the</span> <span
  m="645910">whole</span> <span m="646090">thing</span> <span
  m="646390">is</span> <span m="646570">the</span> <span
  m="646750">inverse</span> <span m="647200">of</span> <span
  m="647350">an</span> <span m="647470">n</span> <span m="647680">by</span>
  <span m="647950">n</span> <span m="648130">matrix.</span> <span
  m="649520">So</span> <span m="649570">I</span> <span m="649630">have</span>
  <span m="649840">an</span> <span m="649960">n</span> <span m="650140">by
  n</span> <span m="650390">matrix.</span> <span m="651130">Let</span> <span
  m="651220">me</span> <span m="651490">put</span> <span m="651760">that</span>
  <span m="652000">up</span> <span m="652150">here,</span> <span
  m="652660">n</span> <span m="652870">by</span> <span m="653110">n</span> <span
  m="653290">matrix</span> <span m="655660">to</span> <span
  m="655880">invert.</span></p><p><span m="662300">There</span> <span
  m="662540">it</span> <span m="662630">is.</span> <span m="663890">I'm</span>
  <span m="664150">going to</span> <span m="664480">write</span> <span
  m="664730">down</span> <span m="664940">the</span> <span
  m="665030">formula.</span> <span m="665660">And</span> <span
  m="665760">you're</span> <span m="665900">going</span> <span
  m="666030">to</span> <span m="666110">be</span> <span m="666230">able</span>
  <span m="666410">to</span> <span m="666470">write</span> <span
  m="666710">it</span> <span m="666800">down,</span> <span
  m="667070">because</span> <span m="667310">it's</span> <span
  m="667520">just</span> <span m="669050">copied</span> <span
  m="669500">from</span> <span m="669710">that</span> <span
  m="669920">one.</span> <span m="670880">And</span> <span
  m="671240">you'll</span> <span m="671480">see</span> <span
  m="673170">that</span> <span m="673410">it</span> <span
  m="673560">involves</span> <span m="674520">a</span> <span m="674610">k</span>
  <span m="674910">by</span> <span m="675120">k</span> <span
  m="675510">inverse.</span></p><p><span m="676470">So</span> <span
  m="676590">I</span> <span m="676680">have</span> <span m="676890">an</span>
  <span m="677010">n</span> <span m="677190">by</span> <span m="677430">n</span>
  <span m="677760">matrix</span> <span m="678330">to</span> <span
  m="678480">invert,</span> <span m="678910">but</span> <span
  m="679140">I</span> <span m="679230">don't</span> <span m="679470">have</span>
  <span m="679650">to</span> <span m="679770">do</span> <span
  m="680010">that.</span> <span m="681000">I</span> <span m="681090">can</span>
  <span m="681300">switch</span> <span m="681690">it</span> <span
  m="681780">to</span> <span m="681960">a</span> <span m="682050">k</span> <span
  m="682320">by</span> <span m="682500">k</span> <span m="682770">matrix.</span>
  <span m="683870">That's</span> <span m="685230">pretty</span> <span
  m="685590">nice.</span> <span m="687300">So</span> <span
  m="687540">let's</span> <span m="687840">do</span> <span
  m="688020">it.</span></p><p><span m="689370">So</span> <span
  m="689690">I'm</span> <span m="689800">basically</span> <span m="690650">gonna
  copy</span> <span m="691040">that</span> <span m="691410">I</span> <span
  m="694280">plus</span> <span m="694850">u--</span> <span
  m="697090">now,</span> <span m="697370">I've</span> <span
  m="697520">matrices.</span> <span m="700070">So</span> <span
  m="700340">that's</span> <span m="700640">an</span> <span
  m="700760">inverse,</span> <span m="702010">but</span> <span
  m="702140">I</span> <span m="702230">can't</span> <span
  m="702500">leave</span> <span m="702770">it</span> <span m="702890">as</span>
  <span m="703100">a</span> <span m="703190">denominator.</span> <span
  m="703980">Because</span> <span m="704180">through</span> <span
  m="704420">here,</span> <span m="704630">we're</span> <span
  m="705110">talking</span> <span m="705440">about</span> <span
  m="705680">a</span> <span m="705740">k</span> <span m="706010">by</span> <span
  m="706220">k</span> <span m="706490">matrix.</span></p><p><span
  m="711130">So</span> <span m="711650">I</span> <span m="711770">have</span>
  <span m="711920">to</span> <span m="712040">put</span> <span
  m="712280">it</span> <span m="713330">like</span> <span m="713870">any</span>
  <span m="714410">matrix</span> <span m="715010">inverse,</span> <span
  m="715970">Ik</span> <span m="718060">minus</span> <span m="718720">v</span>
  <span m="720070">transpose</span> <span m="720900">u</span> <span
  m="723190">inverse.</span> <span m="726040">So</span> <span
  m="726190">I'm</span> <span m="726400">just</span> <span
  m="726640">copying</span> <span m="727060">this</span> <span
  m="727210">formula,</span> <span m="728170">wisely</span> <span
  m="728950">taking</span> <span m="729490">the</span> <span m="729610">u</span>
  <span m="729940">first,</span> <span m="730480">then</span> <span
  m="730750">this</span> <span m="731020">part,</span> <span
  m="732220">then</span> <span m="732460">finally,</span> <span m="733000">the
  v</span> <span m="733120">transpose.</span> <span m="738080">I</span> <span
  m="738190">put</span> <span m="738850">this</span> <span m="739090">one</span>
  <span m="739270">up.</span> <span m="740230">This</span> <span
  m="740440">one</span> <span m="740650">now</span> <span m="740890">has</span>
  <span m="741100">made</span> <span m="741370">that</span> <span
  m="741610">one</span> <span m="741790">obsolete.</span> <span
  m="743620">This</span> <span m="743830">was</span> <span m="744010">the</span>
  <span m="744130">case</span> <span m="744520">k</span> <span m="744960">equal
  to</span> <span m="745090">1</span> <span m="745390">over</span> <span
  m="745630">here.</span></p><p><span m="748430">But</span> <span
  m="748660">I</span> <span m="748750">think</span> <span m="748990">it</span>
  <span m="749080">helps</span> <span m="750250">to</span> <span
  m="750400">see</span> <span m="750730">it.</span> <span m="750990">It</span>
  <span m="751090">certainly</span> <span m="751450">helps</span> <span
  m="751750">me</span> <span m="751990">to</span> <span m="752080">see</span>
  <span m="752500">the</span> <span m="752650">formula</span> <span
  m="753160">first</span> <span m="753640">for</span> <span m="754480">a</span>
  <span m="754570">rank</span> <span m="754930">1</span> <span
  m="755260">perturbation,</span> <span m="755980">which</span> <span
  m="756250">is</span> <span m="759820">a</span> <span m="759970">very</span>
  <span m="760270">likely</span> <span m="760750">possibility,</span> <span
  m="761860">and</span> <span m="761950">then</span> <span m="762190">see</span>
  <span m="762460">that</span> <span m="762610">we</span> <span
  m="762730">have</span> <span m="762910">a</span> <span
  m="763000">totally</span> <span m="763420">analogous</span> <span
  m="764050">formula.</span> <span m="765610">It's</span> <span
  m="766090">sort</span> <span m="766360">of</span> <span m="766450">fun</span>
  <span m="767440">to</span> <span m="767590">check</span> <span
  m="767950">it.</span> <span m="768940">So</span> <span m="769090">I</span>
  <span m="769180">plan</span> <span m="769510">to</span> <span
  m="769600">do</span> <span m="769810">the</span> <span m="769930">same</span>
  <span m="770290">check.</span> <span m="771710">But</span> <span
  m="771970">I'll</span> <span m="772120">just</span> <span
  m="772390">notice</span> <span m="772870">here</span> <span
  m="773170">that</span> <span m="773380">I</span> <span m="773470">have</span>
  <span m="773800">a</span> <span m="774640">k</span> <span m="774910">by</span>
  <span m="775150">k</span> <span m="775420">inverse.</span></p><p><span
  m="782490">So</span> <span m="782670">I'm</span> <span
  m="782790">exchanging</span> <span m="783540">something</span> <span
  m="784050">that's</span> <span m="784280">a</span> <span
  m="784380">perturbation</span> <span m="785780">of</span> <span
  m="786150">n</span> <span m="786390">by</span> <span m="786630">n</span> <span
  m="786870">identity,</span> <span m="788380">an</span> <span
  m="788400">n</span> <span m="788580">by</span> <span m="788790">n</span> <span
  m="788970">matrix,</span> <span m="791520">to</span> <span
  m="791640">have</span> <span m="791880">to</span> <span
  m="792060">invert</span> <span m="792510">something</span> <span
  m="793350">that's</span> <span m="793680">a</span> <span m="794310">k</span>
  <span m="794610">by</span> <span m="794850">k</span> <span
  m="795540">matrix,</span> <span m="796260">perturbing</span> <span
  m="797040">the</span> <span m="797940">k</span> <span m="798270">by</span>
  <span m="798510">k</span> <span m="798870">identity,</span> <span
  m="800310">much</span> <span m="800610">smaller.</span> <span
  m="801840">In</span> <span m="801960">that</span> <span
  m="802170">case,</span> <span m="802560">k</span> <span m="802830">was</span>
  <span m="803100">1.</span> <span m="805200">So</span> <span
  m="806220">are</span> <span m="806310">you</span> <span m="806460">good</span>
  <span m="806670">for</span> <span m="807750">checking</span> <span
  m="808170">it</span> <span m="808290">now?</span> <span m="808620">So</span>
  <span m="808860">I</span> <span m="808950">want</span> <span
  m="809160">to</span> <span m="810060">multiply</span> <span
  m="810570">that</span> <span m="811320">by</span> <span m="811560">this</span>
  <span m="812010">and</span> <span m="812160">hopefully</span> <span
  m="812730">get</span> <span m="814200">In,</span> <span m="814680">the</span>
  <span m="814830">identity.</span> <span m="815830">This</span> <span
  m="815940">is</span> <span m="816090">the</span> <span m="816300">n</span>
  <span m="816480">by</span> <span m="816690">n</span> <span
  m="817420">identity.</span></p><p><span m="823390">I</span> <span
  m="823810">haven't</span> <span m="824050">given</span> <span
  m="824380">credit</span> <span m="824740">to</span> <span
  m="824890">the</span> <span m="826000">two</span> <span m="826420">or</span>
  <span m="826510">three</span> <span m="826930">or</span> <span
  m="827050">four,</span> <span m="827480">or</span> <span
  m="827530">possibly</span> <span m="828100">11</span> <span
  m="828580">people,</span> <span m="829390">who</span> <span
  m="829540">found</span> <span m="829840">this</span> <span
  m="830080">formula.</span> <span m="833300">And</span> <span
  m="833720">I'm</span> <span m="834500">not</span> <span
  m="834770">see--</span> <span m="835010">oh,</span> <span
  m="835250">yeah,</span> <span m="835460">here</span> <span
  m="835730">are</span> <span m="835790">their</span> <span
  m="836030">names.</span> <span m="837200">Is</span> <span m="837320">it</span>
  <span m="837440">OK</span> <span m="837800">to</span> <span
  m="839080">make</span> <span m="839290">them</span> <span
  m="839440">famous</span> <span m="839980">by</span> <span
  m="840220">putting</span> <span m="840640">their</span> <span
  m="840790">names</span> <span m="841210">up</span> <span
  m="841420">here?</span></p><p><span m="841720">Yes.</span> <span
  m="843430">Sherman--</span> <span m="848130">and</span> <span
  m="848400">I</span> <span m="848700">couldn't</span> <span
  m="849150">tell</span> <span m="849510">you</span> <span m="849690">who</span>
  <span m="849900">did</span> <span m="850110">what.</span> <span
  m="852960">Morrison,</span> <span m="853980">Woodbury,</span> <span
  m="859390">and</span> <span m="859630">then</span> <span m="860380">no</span>
  <span m="860530">doubt</span> <span m="860840">others--</span> <span
  m="862840">maybe</span> <span m="863230">one</span> <span m="863680">of</span>
  <span m="863770">them</span> <span m="864850">did</span> <span
  m="865090">this</span> <span m="865390">rank</span> <span m="865690">1</span>
  <span m="865990">case,</span> <span m="866470">and</span> <span
  m="866560">then</span> <span m="866770">another</span> <span
  m="867160">generalized</span> <span m="867940">it.</span> <span
  m="868450">And</span> <span m="868570">then</span> <span m="868780">you</span>
  <span m="868930">could</span> <span m="869110">see</span> <span
  m="871098">from</span> <span m="871520">the</span> <span
  m="872620">outline</span> <span m="873130">there</span> <span
  m="873820">that</span> <span m="874030">eventually</span> <span
  m="874690">we'll--</span> <span m="874930">we</span> <span
  m="875260">can</span> <span m="875410">perturb</span> <span
  m="875880">a</span> <span m="875940">matrix</span> <span m="876460">A.</span>
  <span m="876940">Of</span> <span m="877060">course,</span> <span
  m="877460">that's</span> <span m="877690">not</span> <span
  m="877870">going</span> <span m="877990">to</span> <span m="878110">be</span>
  <span m="878230">much</span> <span m="878500">harder</span> <span
  m="878830">than</span> <span m="879370">the</span> <span
  m="879490">identity.</span></p><p><span m="881770">Let's</span> <span
  m="882220">do</span> <span m="882460">just</span> <span m="882730">one</span>
  <span m="883000">more</span> <span m="883270">check,</span> <span
  m="884170">and</span> <span m="884290">then</span> <span
  m="884560">show</span> <span m="884890">how</span> <span m="885100">it</span>
  <span m="885220">could</span> <span m="885400">be</span> <span
  m="885580">used.</span> <span m="889630">I</span> <span
  m="890060">multiply</span> <span m="890480">that</span> <span
  m="890720">by</span> <span m="890930">that.</span> <span m="891260">Can</span>
  <span m="891470">we</span> <span m="891590">do</span> <span
  m="891770">that--</span> <span m="894080">this</span> <span
  m="894470">thing</span> <span m="895240">times</span> <span
  m="895640">this,</span> <span m="896000">and</span> <span
  m="896150">hope</span> <span m="896390">to</span> <span m="896510">get</span>
  <span m="896720">the</span> <span m="896840">identity?</span> <span
  m="897680">So</span> <span m="897860">first,</span> <span
  m="898280">I'll</span> <span m="898370">write</span> <span
  m="898610">down</span> <span m="898880">this</span> <span
  m="899180">thing.</span> <span m="901130">So</span> <span m="901430">I</span>
  <span m="901550">won't</span> <span m="901760">put</span> <span
  m="901970">equal,</span> <span m="902330">because</span> <span
  m="904810">I'm</span> <span m="905290">multiplying</span> <span
  m="905980">that</span> <span m="906220">by</span> <span
  m="906430">that.</span></p><p><span m="907630">So</span> <span
  m="907840">I</span> <span m="907960">get</span> <span m="908420">In</span>
  <span m="910300">minus</span> <span m="910750">uv</span> <span
  m="910960">transpose.</span> <span m="914620">On</span> <span
  m="914770">the</span> <span m="914830">left</span> <span
  m="915100">side,</span> <span m="915400">of</span> <span
  m="915490">course,</span> <span m="915760">I'm</span> <span
  m="915940">getting</span> <span m="916270">the</span> <span
  m="916390">identity,</span> <span m="918840">and</span> <span
  m="919490">hoping</span> <span m="919880">I'm</span> <span
  m="920060">getting</span> <span m="920360">the</span> <span
  m="920450">identity</span> <span m="921020">on</span> <span
  m="921140">the</span> <span m="921230">right.</span> <span
  m="921860">So</span> <span m="921980">I'm</span> <span
  m="922070">multiplying</span> <span m="922640">by</span> <span
  m="922850">this.</span> <span m="923780">I</span> <span m="923870">did</span>
  <span m="924080">it</span> <span m="924200">there.</span></p><p><span
  m="925010">Now</span> <span m="925220">I</span> <span m="925370">have</span>
  <span m="925640">to</span> <span m="925760">put</span> <span
  m="926830">I</span> <span m="927440">minus</span> <span m="927920">uv</span>
  <span m="929000">transposed.</span> <span m="930440">It</span> <span
  m="930530">takes</span> <span m="930920">faith</span> <span
  m="931340">here.</span> <span m="931580">u</span> <span m="933360">I</span>
  <span m="933920">minus</span> <span m="934530">v</span> <span
  m="935180">transpose</span> <span m="936620">u</span> <span
  m="937520">inverse</span> <span m="938360">v</span> <span
  m="939110">transpose--</span> <span m="946140">gulp.</span> <span
  m="949210">Shall</span> <span m="949480">I</span> <span m="949630">just</span>
  <span m="949900">leave</span> <span m="950140">it</span> <span
  m="950230">there?</span> <span m="952380">Or</span> <span
  m="953840">you're--</span> <span m="955320">had</span> <span
  m="955540">lunch,</span> <span m="955840">you're</span> <span
  m="956260">strong.</span> <span m="956860">Let's</span> <span
  m="957280">see</span> <span m="957550">what</span> <span m="957700">we</span>
  <span m="957880">can</span> <span m="958090">do.</span></p><p><span
  m="958930">This</span> <span m="959160">part--</span> <span
  m="959810">fine.</span> <span m="961540">This</span> <span
  m="961840">part--</span> <span m="963410">oh,</span> <span
  m="963790">boy.</span> <span m="965470">What</span> <span m="965710">do</span>
  <span m="965830">I</span> <span m="965980">do</span> <span
  m="966400">here?</span></p><p><span m="968010">That</span> <span
  m="968240">trick</span> <span m="968720">is</span> <span
  m="968900">going</span> <span m="969030">to</span> <span m="969200">be</span>
  <span m="970580">that</span> <span m="970760">this</span> <span
  m="972170">dopey-looking</span> <span m="973040">thing</span> <span
  m="973380">there</span> <span m="977120">can</span> <span m="977410">be</span>
  <span m="977710">written</span> <span m="978100">differently.</span> <span
  m="980460">Well,</span> <span m="980850">just</span> <span
  m="981090">tell</span> <span m="981300">me</span> <span m="981450">what</span>
  <span m="981630">it</span> <span m="981750">equals.</span> <span
  m="982590">It</span> <span m="982710">equals</span> <span m="983190">u</span>
  <span m="984090">minus</span> <span m="984630">uv</span> <span
  m="986100">transpose</span> <span m="987360">u.</span> <span
  m="989520">Everybody</span> <span m="990000">sees</span> <span
  m="990300">that.</span> <span m="992740">But</span> <span
  m="992950">now</span> <span m="994150">what</span> <span m="994300">am</span>
  <span m="994420">I</span> <span m="994540">going</span> <span
  m="994760">to</span> <span m="994840">do?</span></p><p><span
  m="996050">I'm</span> <span m="996130">going</span> <span m="996270">to</span>
  <span m="996430">put</span> <span m="996910">the</span> <span
  m="997040">parentheses</span> <span m="1001570">differently.</span> <span
  m="1003640">I'm</span> <span m="1003790">bringing</span> <span
  m="1004480">u,</span> <span m="1004930">the</span> <span m="1005110">u</span>
  <span m="1005350">that</span> <span m="1005500">was</span> <span
  m="1005680">on</span> <span m="1005830">the</span> <span
  m="1005920">right</span> <span m="1006250">up</span> <span
  m="1006370">there--</span> <span m="1006670">I'm</span> <span
  m="1006790">going</span> <span m="1006880">to</span> <span
  m="1006970">put</span> <span m="1007180">it</span> <span m="1007330">on</span>
  <span m="1007450">the</span> <span m="1007540">left.</span> <span
  m="1009020">You</span> <span m="1009140">see</span> <span
  m="1009410">that?</span></p><p><span m="1010610">So</span> <span
  m="1011060">this</span> <span m="1011600">is</span> <span
  m="1011900">obviously</span> <span m="1012520">u</span> <span
  m="1012930">minus</span> <span m="1013340">uv</span> <span
  m="1013640">transpose</span> <span m="1014570">u.</span> <span
  m="1015330">And</span> <span m="1015440">now</span> <span
  m="1015620">I'm</span> <span m="1015800">going</span> <span
  m="1015950">to</span> <span m="1017240">write it</span> <span
  m="1017520">another</span> <span m="1017990">time.</span> <span
  m="1018410">It's</span> <span m="1018590">u</span> <span
  m="1018930">times</span> <span m="1019440">I</span> <span
  m="1020080">minus</span> <span m="1020690">v</span> <span
  m="1020930">transpose</span> <span m="1021560">u.</span> <span
  m="1023490">I'm</span> <span m="1023904">going to</span> <span
  m="1024319">factor</span> <span m="1024740">the</span> <span
  m="1024859">u</span> <span m="1025069">out</span> <span m="1025450">on</span>
  <span m="1025609">the</span> <span m="1025700">left</span> <span
  m="1025970">side</span> <span m="1026300">instead</span> <span
  m="1026690">of</span> <span m="1027470">where</span> <span
  m="1027680">it</span> <span m="1027800">originally</span> <span
  m="1028369">came</span> <span m="1028760">on</span> <span
  m="1028880">the</span> <span m="1028970">right</span> <span
  m="1029240">side</span> <span m="1029569">of</span> <span
  m="1029660">this.</span></p><p><span m="1031780">You</span> <span
  m="1031880">see</span> <span m="1032119">the</span> <span
  m="1032240">great</span> <span m="1032660">news</span> <span
  m="1033109">there?</span> <span m="1034640">This</span> <span
  m="1034910">was</span> <span m="1035089">actually</span> <span
  m="1035589">well-organized</span> <span m="1037010">by</span> <span
  m="1037190">your</span> <span m="1037369">professor--</span> <span
  m="1039619">by</span> <span m="1039980">accident.</span> <span
  m="1041540">So</span> <span m="1041720">what</span> <span
  m="1041900">do</span> <span m="1041990">I</span> <span m="1042109">do</span>
  <span m="1042290">now?</span> <span m="1044390">This</span> <span
  m="1044720">thing--</span> <span m="1045290">look.</span> <span
  m="1045920">I've</span> <span m="1046069">got</span> <span
  m="1046339">exactly</span> <span m="1046940">here</span> <span
  m="1047270">what</span> <span m="1047450">I've</span> <span
  m="1047599">got</span> <span m="1047810">inverted</span> <span
  m="1048410">there.</span></p><p><span m="1050900">So</span> <span
  m="1051140">altogether,</span> <span m="1051890">I</span> <span
  m="1052070">have</span> <span m="1052280">I</span> <span
  m="1052790">minus</span> <span m="1053270">uv</span> <span
  m="1053720">transpose</span> <span m="1054440">plus</span> <span
  m="1055280">this</span> <span m="1055700">u,</span> <span
  m="1056600">this</span> <span m="1056870">cancelled,</span> <span
  m="1057740">times</span> <span m="1058130">v</span> <span
  m="1058340">transpose.</span> <span m="1059070">So</span> <span
  m="1059180">I</span> <span m="1059300">get</span> <span m="1059530">I.</span>
  <span m="1062680">So</span> <span m="1062890">it</span> <span
  m="1062950">was</span> <span m="1063220">just</span> <span
  m="1063580">this</span> <span m="1063940">little</span> <span
  m="1064240">sleight</span> <span m="1064660">of</span> <span
  m="1064810">hand,</span> <span m="1065650">where</span> <span
  m="1065890">u</span> <span m="1066280">came</span> <span m="1066670">in</span>
  <span m="1066820">on</span> <span m="1066970">the</span> <span
  m="1067060">right</span> <span m="1067510">and</span> <span
  m="1067660">came</span> <span m="1067960">out</span> <span
  m="1068170">on</span> <span m="1068320">the</span> <span
  m="1068380">left</span> <span m="1068800">side.</span> <span
  m="1072880">And</span> <span m="1073310">there'd</span> <span
  m="1073410">be</span> <span m="1073570">a</span> <span
  m="1073660">similar</span> <span m="1074110">formula</span> <span
  m="1074620">with</span> <span m="1074920">A</span> <span m="1075280">in</span>
  <span m="1075400">there.</span></p><p><span m="1078020">So</span> <span
  m="1079730">now,</span> <span m="1080060">it's</span> <span
  m="1080210">a</span> <span m="1080300">fair</span> <span
  m="1080510">question,</span> <span m="1080990">how</span> <span
  m="1081170">did</span> <span m="1081380">anybody</span> <span
  m="1081830">come</span> <span m="1082070">up</span> <span
  m="1082220">with</span> <span m="1082400">these</span> <span
  m="1082550">formulas?</span> <span m="1083770">We're</span> <span
  m="1084260">proving</span> <span m="1084830">them</span> <span
  m="1085070">correct</span> <span m="1085520">just</span> <span
  m="1085790">by</span> <span m="1086000">checking</span> <span
  m="1087280">that</span> <span m="1087680">they</span> <span
  m="1088190">give</span> <span m="1088490">the</span> <span
  m="1088640">identity</span> <span m="1089210">matrix.</span> <span
  m="1091820">We</span> <span m="1092000">should</span> <span
  m="1092360">really</span> <span m="1092690">think</span> <span
  m="1094445">how</span> <span m="1094910">to</span> <span
  m="1095120">find</span> <span m="1095780">the</span> <span
  m="1095930">formula</span> <span m="1096500">in</span> <span
  m="1096620">the</span> <span m="1096710">first</span> <span
  m="1097040">place.</span> <span m="1098750">I</span> <span
  m="1098870">could</span> <span m="1099050">go</span> <span
  m="1099200">back</span> <span m="1099470">to</span> <span
  m="1099590">this</span> <span m="1099890">one.</span> <span
  m="1102070">How</span> <span m="1102400">could</span> <span
  m="1102700">you</span> <span m="1102850">find</span> <span
  m="1103240">that</span> <span m="1103480">formula</span> <span
  m="1103990">in</span> <span m="1104080">the</span> <span
  m="1104170">first</span> <span m="1104470">place?</span></p><p><span
  m="1104840">Well,</span> <span m="1104860">here</span> <span
  m="1104950">is</span> <span m="1105160">one</span> <span
  m="1105370">way</span> <span m="1105580">to</span> <span m="1105700">do</span>
  <span m="1105940">it.</span> <span m="1111890">This</span> <span
  m="1112130">is</span> <span m="1112430">then</span> <span
  m="1112670">about</span> <span m="1112970">&quot;to</span> <span
  m="1113360">discover</span> <span m="1116180">the</span> <span
  m="1116330">formula.&quot;</span> <span m="1123530">And</span> <span
  m="1123650">then,</span> <span m="1124280">over</span> <span
  m="1124520">here,</span> <span m="1124760">let</span> <span
  m="1124910">me</span> <span m="1125030">put</span> <span
  m="1125300">over</span> <span m="1125510">here</span> <span
  m="1125780">&quot;to</span> <span m="1125960">use</span> <span
  m="1126440">the</span> <span m="1126560">formula,&quot;</span> <span
  m="1136130">while</span> <span m="1136370">I</span> <span
  m="1136850">think</span> <span m="1137090">of</span> <span
  m="1137210">it.</span></p><p><span m="1137860">And</span> <span
  m="1137990">actually,</span> <span m="1138380">I</span> <span
  m="1138530">have</span> <span m="1140000">two</span> <span
  m="1140240">uses</span> <span m="1140810">in</span> <span
  m="1140960">mind.</span> <span m="1142020">Use</span> <span
  m="1142280">one</span> <span m="1144080">would</span> <span
  m="1144260">be</span> <span m="1144470">to</span> <span
  m="1144590">solve--</span> <span m="1152110">I'm</span> <span
  m="1152850">just</span> <span m="1153070">doing</span> <span
  m="1153370">I.</span> <span m="1154180">Suppose</span> <span
  m="1154630">I</span> <span m="1154750">want</span> <span
  m="1154930">to--</span> <span m="1155410">so</span> <span
  m="1155650">this</span> <span m="1155830">is</span> <span
  m="1155950">my</span> <span m="1156190">new</span> <span
  m="1156610">matrix</span> <span m="1157690">uv</span> <span
  m="1158320">transpose</span> <span m="1160240">x</span> <span
  m="1160750">equals</span> <span m="1161220">some</span> <span
  m="1161470">right-hand</span> <span m="1161980">side</span> <span
  m="1162370">b.</span> <span m="1165120">Solve</span> <span
  m="1165820">a</span> <span m="1166080">linear</span> <span
  m="1166500">system</span> <span m="1167790">that</span> <span
  m="1167970">has</span> <span m="1168330">that</span> <span
  m="1168600">coefficient</span> <span m="1169260">matrix.</span></p><p><span
  m="1171150">The</span> <span m="1171405">use</span> <span
  m="1171660">two</span> <span m="1177710">would</span> <span
  m="1177950">be,</span> <span m="1178430">in</span> <span
  m="1178790">least</span> <span m="1179090">squares,</span> <span
  m="1181670">a</span> <span m="1182065">new</span> <span
  m="1184130">measurement</span> <span m="1184790">or</span> <span
  m="1185090">observation</span> <span m="1186080">or</span> <span
  m="1186530">data</span> <span m="1186890">point</span> <span
  m="1187940">in</span> <span m="1188120">these</span> <span
  m="1188350">squares.</span> <span m="1196460">So</span> <span
  m="1197750">what</span> <span m="1197900">do</span> <span m="1198020">I</span>
  <span m="1198110">mean</span> <span m="1198320">by</span> <span
  m="1198500">this?</span> <span m="1199250">The</span> <span
  m="1199400">old</span> <span m="1199700">problem</span> <span
  m="1202040">was</span> <span m="1202880">Ax</span> <span
  m="1204440">equal</span> <span m="1204950">b.</span></p><p><span
  m="1209690">And</span> <span m="1209850">I'm</span> <span
  m="1210030">thinking,</span> <span m="1211160">when</span> <span
  m="1211380">I'm</span> <span m="1211650">talking</span> <span
  m="1212040">about</span> <span m="1212310">least</span> <span
  m="1212580">squares</span> <span m="1213150">here,</span> <span
  m="1214230">I'm</span> <span m="1214470">imagining</span> <span
  m="1215190">that</span> <span m="1215460">A</span> <span m="1215730">is</span>
  <span m="1216030">rectangular.</span> <span m="1217830">Too</span> <span
  m="1218070">many</span> <span m="1218430">equations--</span> <span
  m="1219620">A</span> <span m="1219940">is</span> <span m="1220260">a</span>
  <span m="1220350">tall,</span> <span m="1220840">thin</span> <span
  m="1221070">matrix,</span> <span m="1221610">just</span> <span
  m="1221930">the</span> <span m="1222000">kind</span> <span
  m="1222330">we've</span> <span m="1222510">been</span> <span
  m="1222690">talking</span> <span m="1223080">about.</span> <span
  m="1223890">So</span> <span m="1225270">that</span> <span
  m="1225690">equation</span> <span m="1226320">becomes--</span> <span
  m="1227190">of</span> <span m="1227310">course,</span> <span
  m="1227730">we</span> <span m="1227910">know</span> <span
  m="1228330">we</span> <span m="1228510">go</span> <span m="1228710">to</span>
  <span m="1228810">the</span> <span m="1228930">normal</span> <span
  m="1229440">equations--</span> <span m="1232720">A</span> <span
  m="1232990">transpose</span> <span m="1234040">Ax,</span> <span
  m="1236490">the</span> <span m="1236680">good</span> <span
  m="1236980">x,</span> <span m="1237790">is</span> <span m="1238030">A</span>
  <span m="1238180">transpose</span> <span m="1238870">b.</span></p><p><span
  m="1242840">Now</span> <span m="1243260">we</span> <span
  m="1243440">get</span> <span m="1243620">a</span> <span m="1243680">new</span>
  <span m="1243890">measurement.</span> <span m="1248280">So</span> <span
  m="1248460">a</span> <span m="1248520">new</span> <span
  m="1248700">measurement,</span> <span m="1249600">how</span> <span
  m="1249810">does</span> <span m="1250020">a</span> <span
  m="1250080">new</span> <span m="1250260">measurement</span> <span
  m="1250710">change</span> <span m="1251340">the</span> <span
  m="1251490">problem?</span> <span m="1252150">So</span> <span
  m="1252330">this</span> <span m="1252540">is</span> <span
  m="1252660">the</span> <span m="1252810">old</span> <span
  m="1253080">problem</span> <span m="1254220">before</span> <span
  m="1254610">the</span> <span m="1254730">measurement</span> <span
  m="1255210">comes</span> <span m="1255630">in.</span> <span
  m="1256470">Now</span> <span m="1256710">a</span> <span m="1256770">new</span>
  <span m="1256980">measurement</span> <span m="1257460">arrives.</span> <span
  m="1258060">So</span> <span m="1258210">that's</span> <span
  m="1258450">another</span> <span m="1258870">b,</span> <span
  m="1259852">a</span> <span m="1260324">b</span> <span m="1260796">M</span>
  <span m="1261270">plus</span> <span m="1261630">1.</span></p><p><span
  m="1262610">And</span> <span m="1262830">we</span> <span
  m="1263010">get</span> <span m="1263190">another</span> <span
  m="1263610">equation.</span> <span m="1265800">We</span> <span
  m="1265920">get</span> <span m="1266100">another</span> <span
  m="1266490">equation.</span> <span m="1267360">That's</span> <span
  m="1267720">the</span> <span m="1267870">new</span> <span
  m="1268110">measurement,</span> <span m="1269490">new</span> <span
  m="1269700">point</span> <span m="1270150">to</span> <span
  m="1270720">get</span> <span m="1270930">this</span> <span
  m="1271080">straight</span> <span m="1271410">line</span> <span
  m="1271740">it's</span> <span m="1271920">trying</span> <span
  m="1272250">to</span> <span m="1272340">stay</span> <span
  m="1272640">close</span> <span m="1273060">to.</span> <span
  m="1274360">So</span> <span m="1274650">we'll</span> <span
  m="1275490">call</span> <span m="1275880">this</span> <span
  m="1276390">equation--</span> <span m="1277620">I</span> <span
  m="1277710">don't</span> <span m="1277830">know</span> <span
  m="1277980">what</span> <span m="1278190">we</span> <span
  m="1278310">should</span> <span m="1278520">call</span> <span
  m="1278880">it.</span> <span m="1279000">Maybe</span> <span
  m="1280830">it'll</span> <span m="1281010">be</span> <span
  m="1281220">one</span> <span m="1281460">more</span> <span
  m="1281700">row.</span></p><p><span m="1283440">So</span> <span
  m="1283980">now,</span> <span m="1285610">old</span> <span
  m="1286480">now</span> <span m="1286840">is</span> <span
  m="1286990">becoming</span> <span m="1287470">new.</span> <span
  m="1289510">I'm</span> <span m="1289900">sort</span> <span
  m="1290140">of</span> <span m="1290230">more</span> <span
  m="1290440">excited</span> <span m="1290980">about</span> <span
  m="1291160">this</span> <span m="1291925">than</span> <span
  m="1292420">proving</span> <span m="1292870">the</span> <span
  m="1292990">formula.</span> <span m="1293440">So</span> <span
  m="1293870">I'll</span> <span m="1294010">just</span> <span
  m="1294340">keep</span> <span m="1294550">going.</span></p><p><span
  m="1295840">So</span> <span m="1297640">there</span> <span
  m="1297980">is</span> <span m="1298320">our</span> <span m="1298540">M</span>
  <span m="1298840">measurements,</span> <span m="1300280">M</span> <span
  m="1300550">being</span> <span m="1300910">large,</span> <span
  m="1302470">A</span> <span m="1302800">being</span> <span m="1303190">a</span>
  <span m="1303280">tall,</span> <span m="1303740">thin</span> <span
  m="1304000">matrix.</span> <span m="1304930">And</span> <span
  m="1305020">now</span> <span m="1305230">we're</span> <span
  m="1305350">going</span> <span m="1305560">to</span> <span
  m="1305680">give</span> <span m="1305920">it</span> <span
  m="1306010">one</span> <span m="1306250">more</span> <span
  m="1306490">row.</span> <span m="1306760">We're</span> <span
  m="1306910">going</span> <span m="1307060">to</span> <span
  m="1307120">make</span> <span m="1307300">it</span> <span
  m="1307390">even</span> <span m="1307630">taller,</span> <span
  m="1308560">say</span> <span m="1308980">maybe,</span> <span
  m="1309520">v</span> <span m="1310150">transpose</span> <span
  m="1312400">times</span> <span m="1312790">this</span> <span
  m="1312910">same</span> <span m="1313390">x</span> <span m="1314440">is</span>
  <span m="1314800">some</span> <span m="1316270">b</span> <span
  m="1317320">new,</span> <span m="1318490">or</span> <span
  m="1318580">something</span> <span m="1318940">like</span> <span
  m="1319180">that.</span> <span m="1320980">So</span> <span
  m="1321160">there's</span> <span m="1321340">one</span> <span
  m="1321580">more</span> <span m="1321790">row,</span> <span
  m="1323080">one</span> <span m="1323260">more</span> <span
  m="1323440">measurement.</span> <span m="1324970">So</span> <span
  m="1326710">what</span> <span m="1327010">happens</span> <span
  m="1327340">to</span> <span m="1327460">the</span> <span
  m="1327580">normal</span> <span m="1327940">equation?</span></p><p><span
  m="1329192">This</span> <span m="1329920">makes</span> <span
  m="1330250">it</span> <span m="1330370">even</span> <span
  m="1330610">more</span> <span m="1330850">likely.</span> <span
  m="1331640">There's</span> <span m="1331870">another</span> <span
  m="1332230">point,</span> <span m="1333300">hoping</span> <span
  m="1333660">that</span> <span m="1333770">a</span> <span
  m="1333820">straight</span> <span m="1334180">line</span> <span
  m="1334480">will</span> <span m="1334630">go</span> <span
  m="1334840">through.</span> <span m="1335230">But</span> <span
  m="1335410">if</span> <span m="1335530">we</span> <span
  m="1335650">give</span> <span m="1335860">it</span> <span
  m="1335980">one</span> <span m="1336430">more</span> <span
  m="1336670">point,</span> <span m="1336960">there</span> <span
  m="1337170">is</span> <span m="1337300">even</span> <span
  m="1337570">less</span> <span m="1337960">chance</span> <span
  m="1338950">of</span> <span m="1339690">a</span> <span
  m="1339760">straight</span> <span m="1340150">line</span> <span
  m="1340480">going</span> <span m="1340780">exactly</span> <span
  m="1341500">through.</span> <span m="1342310">But</span> <span
  m="1342580">still,</span> <span m="1343360">so</span> <span m="1343570">what
  do I--</span> <span m="1344680">this</span> <span m="1344860">is</span> <span
  m="1344980">my</span> <span m="1345220">new</span> <span
  m="1345430">matrix.</span> <span m="1346420">So</span> <span
  m="1346570">what's</span> <span m="1346840">my</span> <span
  m="1347050">new</span> <span m="1347350">normal</span> <span
  m="1347830">equation?</span></p><p><span m="1349080">The</span> <span
  m="1349140">new</span> <span m="1349570">normal</span> <span
  m="1353750">equation,</span> <span m="1355900">the</span> <span
  m="1356630">A,</span> <span m="1357442">or</span> <span
  m="1357850">transpose--</span> <span m="1361110">the A</span> <span
  m="1361530">has</span> <span m="1361750">got</span> <span m="1361990">a</span>
  <span m="1362560">new</span> <span m="1362830">row.</span> <span m="1364420">A
  has</span> <span m="1364780">got</span> <span m="1364960">a</span> <span
  m="1365050">new</span> <span m="1365290">row.</span> <span
  m="1366280">So</span> <span m="1366490">a</span> <span
  m="1366640">transpose</span> <span m="1367390">will</span> <span
  m="1367540">have</span> <span m="1367750">a</span> <span
  m="1367810">new</span> <span m="1368050">column.</span> <span
  m="1368590">I'm</span> <span m="1368740">just</span> <span
  m="1368980">copying</span> <span m="1369400">the</span> <span
  m="1369520">normal</span> <span m="1369940">equation,</span> <span
  m="1371020">but</span> <span m="1371260">I'm</span> <span
  m="1371440">giving</span> <span m="1371830">it</span> <span
  m="1371960">its</span> <span m="1373180">new</span> <span
  m="1373630">thing.</span> <span m="1374030">It's</span> <span
  m="1374110">got</span> <span m="1374260">a</span> <span m="1374320">new</span>
  <span m="1374560">column.</span></p><p><span m="1376000">That</span> <span
  m="1376300">is</span> <span m="1376480">my</span> <span m="1376765">A</span>
  <span m="1377930">with</span> <span m="1378370">a</span> <span
  m="1378460">new</span> <span m="1378790">row.</span> <span
  m="1381520">This</span> <span m="1381790">is</span> <span
  m="1381880">my</span> <span m="1382550">x</span> <span m="1384730">hat,</span>
  <span m="1385810">my</span> <span m="1386080">least</span> <span
  m="1386320">squares</span> <span m="1386770">answer,</span> <span
  m="1387190">new.</span> <span m="1389320">And</span> <span
  m="1390490">A</span> <span m="1390640">transpose</span> <span
  m="1391630">is</span> <span m="1391810">this.</span> <span
  m="1393400">A</span> <span m="1393700">transpose</span> <span
  m="1395590">with</span> <span m="1395870">a</span> <span
  m="1395950">new,</span> <span m="1397090">now,</span> <span
  m="1397360">column</span> <span m="1398290">times</span> <span
  m="1398980">b,</span> <span m="1400420">so</span> <span m="1400690">b</span>
  <span m="1401290">and</span> <span m="1401590">b</span> <span
  m="1401950">new.</span></p><p><span m="1406660">Pretty</span> <span
  m="1407140">OK</span> <span m="1407500">with</span> <span
  m="1407620">this.</span> <span m="1408930">Do</span> <span
  m="1409030">you</span> <span m="1409090">see</span> <span
  m="1409540">that</span> <span m="1409720">this</span> <span
  m="1409990">is</span> <span m="1410170">the</span> <span
  m="1410290">new</span> <span m="1410560">normal</span> <span
  m="1410980">equation?</span> <span m="1411580">I'm</span> <span
  m="1411760">using</span> <span m="1412180">the</span> <span
  m="1412300">new</span> <span m="1412540">matrix</span> <span
  m="1413680">and</span> <span m="1413890">the</span> <span
  m="1413980">new</span> <span m="1414220">right-hand</span> <span
  m="1414730">side.</span> <span m="1418030">And</span> <span
  m="1419100">just</span> <span m="1419320">one</span> <span
  m="1419590">more</span> <span m="1419830">data</span> <span
  m="1420160">point</span> <span m="1420520">has</span> <span
  m="1420700">come</span> <span m="1422146">into</span> <span
  m="1422530">the</span> <span m="1424550">system</span> <span
  m="1425030">from</span> <span m="1425240">the</span> <span
  m="1425360">sensor.</span> <span m="1427650">And</span> <span
  m="1427900">what's</span> <span m="1428560">the</span> <span
  m="1428650">key</span> <span m="1428890">point</span> <span
  m="1429280">here?</span></p><p><span m="1429640">The</span> <span
  m="1430090">key</span> <span m="1430330">point</span> <span
  m="1430660">is</span> <span m="1430960">I</span> <span
  m="1431140">don't</span> <span m="1431350">want</span> <span
  m="1431590">to</span> <span m="1431680">recompute.</span> <span
  m="1434880">I</span> <span m="1435000">don't</span> <span
  m="1435150">want</span> <span m="1435300">to</span> <span
  m="1435360">multiply</span> <span m="1435840">that</span> <span
  m="1436020">matrix</span> <span m="1436560">again.</span> <span
  m="1439170">I</span> <span m="1439260">don't</span> <span
  m="1439410">want</span> <span m="1439560">to</span> <span
  m="1439680">start</span> <span m="1440070">over.</span> <span
  m="1442080">I</span> <span m="1442260">don't</span> <span
  m="1442410">want</span> <span m="1442560">to</span> <span
  m="1442650">compute</span> <span m="1443790">this</span> <span
  m="1444300">A</span> <span m="1444570">transpose</span> <span
  m="1445290">times</span> <span m="1445590">that</span> <span
  m="1445920">A.</span> <span m="1448380">I</span> <span m="1448470">want</span>
  <span m="1448650">to</span> <span m="1448710">use</span> <span
  m="1448980">what</span> <span m="1449160">I've</span> <span
  m="1449310">already</span> <span m="1449640">done.</span></p><p><span
  m="1453330">If</span> <span m="1453540">I</span> <span
  m="1453630">multiply</span> <span m="1454110">those</span> <span
  m="1454410">two</span> <span m="1455010">together,</span> <span
  m="1455400">what</span> <span m="1455580">do</span> <span m="1455730">I</span>
  <span m="1455850">actually</span> <span m="1456300">get?</span> <span
  m="1459280">So</span> <span m="1460000">this</span> <span
  m="1460450">is,</span> <span m="1460720">I'm</span> <span
  m="1461110">adding</span> <span m="1461500">a</span> <span
  m="1461560">new</span> <span m="1462670">column</span> <span
  m="1463120">here</span> <span m="1463570">and</span> <span
  m="1463770">a</span> <span m="1463840">new</span> <span m="1464110">row</span>
  <span m="1464500">here.</span> <span m="1466900">Tell</span> <span
  m="1467080">me</span> <span m="1467230">what</span> <span
  m="1467440">you</span> <span m="1467560">think</span> <span
  m="1467800">the</span> <span m="1467980">answer</span> <span
  m="1468370">is,</span> <span m="1468550">and</span> <span
  m="1468670">then</span> <span m="1468850">let's</span> <span
  m="1469090">just</span> <span m="1469300">see</span> <span
  m="1469570">why.</span> <span m="1470290">I'm</span> <span
  m="1470680">asking</span> <span m="1471040">you</span> <span
  m="1471190">what</span> <span m="1471460">that</span> <span
  m="1471670">matrix</span> <span m="1472300">is.</span> <span m="1475947">What
  do you</span> <span m="1476418">think?</span></p><p><span
  m="1479250">Start</span> <span m="1479580">me</span> <span
  m="1479760">out,</span> <span m="1480090">anyway.</span> <span
  m="1482940">I'm</span> <span m="1483420">just</span> <span
  m="1483630">asking</span> <span m="1484020">for</span> <span
  m="1484230">ordinary</span> <span m="1484710">matrix</span> <span
  m="1485220">multiplication.</span> <span m="1486450">Well,</span> <span
  m="1487140">I</span> <span m="1487230">guess</span> <span
  m="1487530">I'm</span> <span m="1487710">asking</span> <span
  m="1488040">you</span> <span m="1488280">to</span> <span m="1488460">do</span>
  <span m="1488700">it</span> <span m="1489880">columns</span> <span
  m="1490640">times</span> <span m="1491270">rows</span> <span
  m="1491900">since</span> <span m="1492510">that's</span> <span
  m="1492840">what</span> <span m="1493300">18</span> <span
  m="1493670">and</span> <span m="1494080">6.5</span> <span
  m="1495150">specializes</span> <span m="1496110">in.</span></p><p><span
  m="1497220">So</span> <span m="1498090">I</span> <span
  m="1498210">think</span> <span m="1498450">I</span> <span
  m="1498540">have</span> <span m="1498810">that</span> <span
  m="1499800">times</span> <span m="1500190">that,</span> <span
  m="1501450">A</span> <span m="1501630">transpose</span> <span
  m="1502380">A,</span> <span m="1504120">plus</span> <span
  m="1504480">one</span> <span m="1504870">new</span> <span
  m="1505170">column</span> <span m="1505710">times</span> <span
  m="1506040">one</span> <span m="1506310">new</span> <span
  m="1506610">row.</span> <span m="1507540">vv</span> <span
  m="1508500">transpose</span> <span m="1510960">is</span> <span
  m="1511170">multiplying</span> <span m="1511860">this</span> <span
  m="1512120">x</span> <span m="1512370">hat</span> <span
  m="1512850">new.</span> <span m="1515520">And</span> <span
  m="1515730">over</span> <span m="1516000">on</span> <span
  m="1516120">the</span> <span m="1516180">right</span> <span
  m="1516480">side,</span> <span m="1516780">I</span> <span
  m="1516900">get</span> <span m="1517200">whatever</span> <span
  m="1517740">I</span> <span m="1517830">had,</span> <span
  m="1518190">the</span> <span m="1518410">A</span> <span
  m="1518900">transpose</span> <span m="1519390">b</span> <span
  m="1519840">old</span> <span m="1521040">and</span> <span
  m="1521340">the</span> <span m="1521910">v</span> <span m="1522810">b</span>
  <span m="1523260">new.</span></p><p><span m="1525280">But</span> <span
  m="1525450">let</span> <span m="1525600">me</span> <span
  m="1525960">come</span> <span m="1526200">back</span> <span
  m="1526440">to</span> <span m="1526560">that,</span> <span
  m="1526890">because</span> <span m="1527160">that</span> <span
  m="1527460">really</span> <span m="1527910">shows</span> <span
  m="1528420">you</span> <span m="1529320">why</span> <span
  m="1529810">you</span> <span m="1529950">must</span> <span
  m="1530490">understand</span> <span m="1531180">matrix</span> <span
  m="1531660">multiplication,</span> <span m="1533250">both</span> <span
  m="1533730">the</span> <span m="1533850">usual</span> <span
  m="1534480">row</span> <span m="1534870">times</span> <span
  m="1535260">column--</span> <span m="1536930">but</span> <span
  m="1537120">that</span> <span m="1537360">would</span> <span
  m="1538260">not</span> <span m="1538590">be</span> <span m="1539160">so</span>
  <span m="1539430">attractive</span> <span m="1540060">here--</span> <span
  m="1541200">and</span> <span m="1541500">also</span> <span
  m="1542370">the</span> <span m="1542550">new</span> <span
  m="1542910">way</span> <span m="1543900">as</span> <span
  m="1544800">columns</span> <span m="1546000">times</span> <span
  m="1546380">rows.</span> <span m="1547080">Because</span> <span
  m="1547470">when</span> <span m="1547650">I</span> <span
  m="1547770">see</span> <span m="1548040">it</span> <span m="1548160">as</span>
  <span m="1548340">columns</span> <span m="1548850">times</span> <span
  m="1549240">rows,</span> <span m="1550200">I</span> <span
  m="1550350">see</span> <span m="1550650">that</span> <span
  m="1550830">I</span> <span m="1550890">have</span> <span
  m="1551010">the</span> <span m="1551130">same</span> <span
  m="1551580">columns</span> <span m="1552480">and</span> <span
  m="1552690">same</span> <span m="1553050">rows</span> <span
  m="1553410">there.</span> <span m="1554160">So</span> <span
  m="1554340">that's</span> <span m="1554430">just</span> <span
  m="1555200">what</span> <span m="1555330">I</span> <span
  m="1555480">already</span> <span m="1555780">knew.</span></p><p><span
  m="1556740">And</span> <span m="1556830">then</span> <span m="1556950">I
  have</span> <span m="1557070">one</span> <span m="1557370">new</span> <span
  m="1557640">column</span> <span m="1558120">times</span> <span
  m="1558420">one</span> <span m="1558690">new</span> <span
  m="1558960">row.</span> <span m="1559470">Of</span> <span
  m="1559680">course,</span> <span m="1560040">that's</span> <span
  m="1560280">column</span> <span m="1560760">n</span> <span
  m="1560940">plus</span> <span m="1561300">1,</span> <span
  m="1561555">and</span> <span m="1561810">that's</span> <span
  m="1562010">a</span> <span m="1562060">row</span> <span m="1562440">n</span>
  <span m="1562650">plus</span> <span m="1563010">1.</span> <span
  m="1563850">And</span> <span m="1564000">they</span> <span
  m="1564690">give</span> <span m="1565350">that</span> <span
  m="1565770">rank</span> <span m="1566190">1.</span> <span
  m="1566580">It's</span> <span m="1566790">a</span> <span
  m="1566820">rank</span> <span m="1567120">1</span> <span
  m="1567360">change</span> <span m="1567780">in</span> <span
  m="1567930">A</span> <span m="1568050">transpose</span> <span
  m="1568710">A.</span> <span m="1570020">It's</span> <span m="1570200">a</span>
  <span m="1570260">rank</span> <span m="1570620">1</span> <span
  m="1570890">change</span> <span m="1571310">in</span> <span
  m="1571480">A</span> <span m="1571610">transpose</span> <span
  m="1572270">A.</span></p><p><span m="1573280">So</span> <span
  m="1573460">this</span> <span m="1573670">is</span> <span
  m="1573850">like</span> <span m="1574060">part</span> <span
  m="1575665">of</span> <span m="1576760">least</span> <span
  m="1577090">squares.</span> <span m="1578140">I</span> <span
  m="1578230">mean,</span> <span m="1578380">you</span> <span
  m="1578500">can</span> <span m="1578740">see</span> <span
  m="1579730">the</span> <span m="1581310">relevance</span> <span
  m="1582305">in</span> <span m="1582610">a</span> <span m="1582670">real</span>
  <span m="1582970">problem.</span> <span m="1584050">You</span> <span
  m="1584380">maybe</span> <span m="1584710">have</span> <span
  m="1586120">a</span> <span m="1586360">missile</span> <span
  m="1586810">flying</span> <span m="1587290">along.</span> <span
  m="1587940">You've</span> <span m="1588160">sent</span> <span
  m="1588490">up</span> <span m="1588640">a</span> <span
  m="1588700">satellite,</span> <span m="1589660">GPS</span> <span
  m="1590140">satellite.</span> <span m="1591210">You're</span> <span
  m="1591370">tracking</span> <span m="1591970">it.</span> <span
  m="1592690">More</span> <span m="1592990">data</span> <span
  m="1593350">comes</span> <span m="1593800">in.</span> <span
  m="1594790">The</span> <span m="1594970">data</span> <span
  m="1595480">is</span> <span m="1595780">just</span> <span
  m="1596200">one</span> <span m="1596500">more</span> <span
  m="1597280">position.</span></p><p><span m="1599170">The</span> <span
  m="1599320">tracker</span> <span m="1599830">isn't</span> <span
  m="1600160">perfect.</span> <span m="1601490">So</span> <span
  m="1601630">we're</span> <span m="1601810">going</span> <span
  m="1601930">to</span> <span m="1602050">fit--</span> <span
  m="1602590">well,</span> <span m="1603010">here</span> <span
  m="1603250">I'm</span> <span m="1603400">fitting</span> <span
  m="1603760">a</span> <span m="1603820">straight</span> <span
  m="1604180">line,</span> <span m="1605410">maybe.</span> <span
  m="1607770">But</span> <span m="1609670">we're</span> <span
  m="1609790">fitting</span> <span m="1610120">to</span> <span
  m="1610390">the</span> <span m="1610540">data.</span> <span
  m="1611410">And</span> <span m="1612520">the</span> <span
  m="1612850">only</span> <span m="1613210">change</span> <span
  m="1614710">in</span> <span m="1614860">the</span> <span
  m="1614950">left-hand,</span> <span m="1615640">the</span> <span
  m="1615760">big</span> <span m="1616090">problem,</span> <span
  m="1617160">the</span> <span m="1617290">big</span> <span
  m="1617770">part</span> <span m="1618040">of</span> <span
  m="1618100">the</span> <span m="1618220">computation</span> <span
  m="1619060">is</span> <span m="1619270">the</span> <span m="1619690">A</span>
  <span m="1619840">transpose</span> <span m="1620500">A</span> <span
  m="1620680">part.</span> <span m="1621390">And</span> <span
  m="1621550">it's</span> <span m="1621790">just</span> <span
  m="1622150">changed</span> <span m="1622660">by</span> <span
  m="1622930">rank</span> <span m="1623320">1,</span> <span
  m="1625540">or</span> <span m="1625720">by</span> <span
  m="1625960">rank</span> <span m="1626330">k,</span> <span
  m="1626740">if</span> <span m="1626890">we</span> <span m="1627070">had</span>
  <span m="1627280">k</span> <span m="1627580">new</span> <span
  m="1628720">data</span> <span m="1629230">points.</span> <span
  m="1630190">If</span> <span m="1630340">we</span> <span m="1630460">had</span>
  <span m="1630610">k</span> <span m="1630940">new</span> <span
  m="1631150">data</span> <span m="1631450">points,</span> <span
  m="1632450">then</span> <span m="1632770">this</span> <span
  m="1633010">would</span> <span m="1633190">be</span> <span
  m="1633340">a</span> <span m="1633430">rank</span> <span m="1633840">k</span>
  <span m="1634120">matrix.</span></p><p><span m="1636040">So</span> <span
  m="1636280">you</span> <span m="1636430">see,</span> <span
  m="1636700">then</span> <span m="1638200">I</span> <span m="1638350">go</span>
  <span m="1638560">back</span> <span m="1638890">here--</span> <span
  m="1639840">well,</span> <span m="1640590">OK.</span> <span
  m="1640990">Now</span> <span m="1641230">I'm</span> <span
  m="1641380">perturbing</span> <span m="1642280">A</span> <span
  m="1642490">transpose</span> <span m="1642820">A.</span> <span
  m="1643150">And</span> <span m="1643600">I</span> <span
  m="1643720">haven't</span> <span m="1644110">given</span> <span
  m="1644500">a</span> <span m="1645010">formula</span> <span
  m="1645490">for</span> <span m="1645670">that</span> <span
  m="1645880">one</span> <span m="1646090">yet.</span> <span
  m="1648370">I've</span> <span m="1648550">only</span> <span
  m="1648820">perturbed</span> <span m="1649450">up</span> <span
  m="1649600">to,</span> <span m="1649720">now,</span> <span
  m="1650050">the</span> <span m="1650200">identity.</span> <span
  m="1650950">But</span> <span m="1651190">you</span> <span
  m="1651350">can</span> <span m="1651580">believe,</span> <span
  m="1652090">since</span> <span m="1652450">all</span> <span
  m="1652600">these</span> <span m="1652870">formulas</span> <span
  m="1653410">are</span> <span m="1653500">working,</span> <span
  m="1654370">that</span> <span m="1655300">Sherman</span> <span
  m="1655900">or</span> <span m="1656050">Morrison</span> <span
  m="1656740">or</span> <span m="1656860">Woodbury</span> <span
  m="1657520">came</span> <span m="1657850">up</span> <span
  m="1658060">with</span> <span m="1658380">the</span> <span
  m="1659020">correct</span> <span m="1661120">perturbation</span> <span
  m="1662140">for</span> <span m="1662410">A</span> <span
  m="1662620">transpose</span> <span m="1662935">A.</span></p><p><span
  m="1664130">So</span> <span m="1664540">I'm</span> <span
  m="1665100">sort</span> <span m="1665380">of</span> <span
  m="1665440">happy</span> <span m="1667690">that,</span> <span
  m="1667900">that</span> <span m="1668650">application,</span> <span
  m="1670510">so</span> <span m="1670750">natural,</span> <span
  m="1671560">came</span> <span m="1671920">out</span> <span
  m="1672190">so</span> <span m="1675280">simply.</span> <span
  m="1678440">While</span> <span m="1678680">I'm</span> <span
  m="1678860">on</span> <span m="1679070">that</span> <span
  m="1679580">sort</span> <span m="1679850">of</span> <span
  m="1679940">subject,</span> <span m="1682090">have</span> <span
  m="1682240">you</span> <span m="1682300">ever</span> <span
  m="1682480">heard</span> <span m="1682720">of</span> <span
  m="1682810">the</span> <span m="1682930">Kalman</span> <span
  m="1683560">filter?</span> <span m="1685700">So</span> <span
  m="1685940">that</span> <span m="1686060">Kalman</span> <span
  m="1686720">filter,</span> <span m="1688710">what's</span> <span
  m="1689010">that</span> <span m="1689220">about?</span></p><p><span
  m="1691010">It's</span> <span m="1691120">about</span> <span
  m="1692530">exactly</span> <span m="1693100">this.</span> <span
  m="1693430">It's</span> <span m="1693580">about</span> <span
  m="1693880">dynamic</span> <span m="1694375">least</span> <span
  m="1694870">squares.</span> <span m="1695590">It's</span> <span
  m="1695740">about</span> <span m="1696040">least</span> <span
  m="1696340">squares</span> <span m="1696760">problems</span> <span
  m="1697270">in</span> <span m="1697390">which</span> <span
  m="1697660">new</span> <span m="1697870">data</span> <span
  m="1698260">is</span> <span m="1698380">coming</span> <span
  m="1698770">in.</span> <span m="1700130">That's</span> <span m="1700590">what
  the</span> <span m="1700890">Kalman</span> <span m="1701340">filter--</span>
  <span m="1701730">or</span> <span m="1702210">in other</span> <span
  m="1702570">words,</span> <span m="1702900">let</span> <span
  m="1703080">me</span> <span m="1703260">just</span> <span
  m="1704130">write</span> <span m="1704400">a</span> <span
  m="1704460">couple</span> <span m="1704730">of</span> <span
  m="1704790">words</span> <span m="1705180">up</span> <span
  m="1705330">here.</span></p><p><span m="1706170">This</span> <span
  m="1706500">is</span> <span m="1706680">really</span> <span
  m="1707220">recursive</span> <span m="1708200">least</span> <span
  m="1708460">squares.</span> <span m="1711210">Recursive</span> <span
  m="1712110">least</span> <span m="1713280">squares--</span> <span
  m="1715230">what</span> <span m="1715380">I</span> <span
  m="1715500">mean</span> <span m="1715740">by</span> <span
  m="1715980">recursive</span> <span m="1716700">is</span> <span
  m="1717120">new</span> <span m="1717390">data</span> <span
  m="1717720">comes</span> <span m="1718140">in.</span> <span
  m="1719600">It</span> <span m="1719700">changes</span> <span
  m="1720420">the</span> <span m="1721620">answer,</span> <span
  m="1722520">but</span> <span m="1722790">it</span> <span
  m="1723030">doesn't</span> <span m="1723420">change</span> <span
  m="1723870">our</span> <span m="1723960">method.</span></p><p><span
  m="1725650">And</span> <span m="1725800">then</span> <span
  m="1726085">the</span> <span m="1726370">Kalman</span> <span
  m="1726940">filter</span> <span m="1734380">is</span> <span
  m="1734680">a</span> <span m="1734740">very,</span> <span
  m="1735260">very</span> <span m="1735520">big</span> <span
  m="1735730">deal</span> <span m="1736120">in</span> <span
  m="1736300">guidance.</span> <span m="1737585">If</span> <span
  m="1737980">you're</span> <span m="1738400">sending</span> <span
  m="1738940">up</span> <span m="1739120">a</span> <span
  m="1739210">missile,</span> <span m="1740740">a</span> <span
  m="1740800">satellite,</span> <span m="1743130">you</span> <span
  m="1743340">track</span> <span m="1743760">it.</span> <span
  m="1745230">You</span> <span m="1745560">do</span> <span
  m="1746460">just</span> <span m="1746790">what</span> <span
  m="1746970">I've</span> <span m="1747180">been</span> <span
  m="1747360">discussing</span> <span m="1748020">here.</span></p><p><span
  m="1749880">But</span> <span m="1750090">the</span> <span
  m="1750210">Kalman</span> <span m="1750660">filter</span> <span
  m="1751230">is--</span> <span m="1752860">it's</span> <span
  m="1753360">got</span> <span m="1753600">more</span> <span
  m="1754410">possibilities</span> <span m="1755310">built</span> <span
  m="1755670">in</span> <span m="1755880">than</span> <span
  m="1756120">this</span> <span m="1756420">one.</span> <span
  m="1756630">This</span> <span m="1756900">is</span> <span
  m="1757110">the</span> <span m="1757320">simplest</span> <span
  m="1759420">update</span> <span m="1760020">possible.</span> <span
  m="1760980">And</span> <span m="1761160">it</span> <span
  m="1761280">would</span> <span m="1763340">go</span> <span
  m="1763590">in</span> <span m="1763710">this</span> <span
  m="1763950">category.</span> <span m="1765800">Kalman</span> <span
  m="1766800">went</span> <span m="1767040">beyond</span> <span
  m="1769020">a</span> <span m="1769140">standard</span> <span
  m="1769770">update.</span> <span m="1771810">How</span> <span
  m="1772110">did</span> <span m="1772320">he</span> <span m="1772620">go</span>
  <span m="1772920">beyond?</span></p><p><span m="1773620">Let's</span> <span
  m="1773890">see.</span> <span m="1776030">If</span> <span
  m="1776460">I've</span> <span m="1776650">used</span> <span
  m="1777030">the</span> <span m="1777120">words</span> <span
  m="1777510">Kalman</span> <span m="1777990">filter,</span> <span
  m="1778500">I</span> <span m="1778620">should</span> <span
  m="1779400">tell</span> <span m="1779640">you</span> <span
  m="1780225">what</span> <span m="1780600">it</span> <span m="1780720">is
  that</span> <span m="1781110">Kalman</span> <span m="1781980">does</span>
  <span m="1782730">and</span> <span m="1783060">what</span> <span
  m="1783390">is</span> <span m="1783570">that</span> <span
  m="1784260">least</span> <span m="1784470">squares</span> <span
  m="1784950">problem.</span> <span m="1785460">It's</span> <span
  m="1785640">just</span> <span m="1786960">part</span> <span
  m="1787200">of</span> <span m="1787350">general</span> <span
  m="1787770">knowledge,</span> <span m="1788340">it</span> <span
  m="1788460">seems</span> <span m="1788790">to</span> <span
  m="1788880">me.</span> <span m="1792340">So</span> <span
  m="1792520">what</span> <span m="1792730">is</span> <span
  m="1792880">it,</span> <span m="1793600">more</span> <span
  m="1793930">gen--</span> <span m="1794560">what</span> <span
  m="1794770">are</span> <span m="1794860">the</span> <span
  m="1795100">additional</span> <span m="1795760">pieces?</span></p><p><span
  m="1796610">You've</span> <span m="1797080">seen</span> <span
  m="1797350">the</span> <span m="1797470">main</span> <span
  m="1797770">idea</span> <span m="1798250">here</span> <span
  m="1799920">of</span> <span m="1800100">getting</span> <span
  m="1800550">a</span> <span m="1801030">simple</span> <span
  m="1802230">recursive</span> <span m="1803010">step</span> <span
  m="1803490">that</span> <span m="1803640">doesn't</span> <span
  m="1804000">require</span> <span m="1804480">recomputing</span> <span
  m="1805950">all</span> <span m="1806130">that</span> <span
  m="1806400">you</span> <span m="1806520">did</span> <span
  m="1806730">before.</span> <span m="1808110">And</span> <span
  m="1808890">of</span> <span m="1808950">course,</span> <span
  m="1810240">to</span> <span m="1810660">this</span> <span
  m="1812130">inverse,</span> <span m="1813540">I'm</span> <span
  m="1813780">going</span> <span m="1813890">to</span> <span
  m="1814030">apply</span> <span m="1814620">the</span> <span
  m="1814890">Sherman-Morrison-Woodbury</span> <span m="1816190">formula.</span>
  <span m="1817140">So</span> <span m="1817350">I'll</span> <span
  m="1817530">use</span> <span m="1817860">the</span> <span
  m="1818010">inverse</span> <span m="1818460">that</span> <span
  m="1818610">I</span> <span m="1818730">had</span> <span
  m="1818940">before.</span> <span m="1820730">And</span> <span
  m="1821090">this</span> <span m="1821450">will</span> <span
  m="1821660">be</span> <span m="1822140">a</span> <span m="1822260">rank</span>
  <span m="1822680">1--</span> <span m="1823340">this</span> <span
  m="1823520">is</span> <span m="1823670">a</span> <span m="1823730">rank</span>
  <span m="1824030">1</span> <span m="1824270">perturbation</span> <span
  m="1825520">of</span> <span m="1825740">that.</span></p><p><span
  m="1827270">I'm</span> <span m="1827390">looking</span> <span
  m="1827720">here</span> <span m="1827990">at</span> <span m="1828110">A</span>
  <span m="1828260">transpose</span> <span m="1828920">A.</span> <span
  m="1829670">Over</span> <span m="1829970">there,</span> <span
  m="1830270">I</span> <span m="1830390">was</span> <span
  m="1830600">looking</span> <span m="1830960">at,</span> <span
  m="1831520">I</span> <span m="1831740">just</span> <span
  m="1832010">called</span> <span m="1832310">it</span> <span
  m="1832460">A.</span> <span m="1833330">Or</span> <span m="1833690">I</span>
  <span m="1833810">even</span> <span m="1834080">called</span> <span
  m="1834410">it</span> <span m="1834500">the</span> <span
  m="1834680">identity</span> <span m="1835250">matrix.</span> <span
  m="1835850">But</span> <span m="1836090">it's</span> <span
  m="1836300">whatever</span> <span m="1836780">matrix</span> <span
  m="1837350">you</span> <span m="1837470">have</span> <span
  m="1837740">here</span> <span m="1838490">with</span> <span
  m="1838700">a</span> <span m="1838760">rank</span> <span m="1839120">1</span>
  <span m="1839450">perturbation.</span> <span m="1840620">And</span> <span
  m="1840830">the</span> <span m="1840950">whole</span> <span
  m="1841190">thing</span> <span m="1841490">has</span> <span
  m="1841760">to</span> <span m="1841850">be</span> <span
  m="1842600">inverted.</span></p><p><span m="1844220">And</span> <span
  m="1844460">so</span> <span m="1844670">I</span> <span m="1844790">was</span>
  <span m="1844940">going</span> <span m="1845130">to</span> <span
  m="1845180">say</span> <span m="1845510">what</span> <span
  m="1846380">is</span> <span m="1847330">additional,</span> <span
  m="1848480">just</span> <span m="1848690">so</span> <span
  m="1848870">you</span> <span m="1849050">know</span> <span
  m="1849290">about</span> <span m="1849620">Kalman</span> <span
  m="1850070">filters.</span> <span m="1851970">So</span> <span
  m="1852180">two</span> <span m="1852420">things</span> <span
  m="1852840">are</span> <span m="1852960">additional.</span> <span
  m="1853880">The</span> <span m="1853950">point</span> <span
  m="1854280">is</span> <span m="1855090">Kalman</span> <span
  m="1855810">filters</span> <span m="1856500">are</span> <span
  m="1856680">for</span> <span m="1857440">dynamic</span> <span
  m="1858300">least</span> <span m="1858710">squares.</span> <span
  m="1859320">I</span> <span m="1859440">would</span> <span
  m="1859650">say</span> <span m="1859890">dynamic</span> <span
  m="1860850">squares.</span> <span m="1862080">And</span> <span
  m="1862260">so</span> <span m="1862470">there</span> <span
  m="1862620">are</span> <span m="1862650">two</span> <span
  m="1862920">ingredients</span> <span m="1863640">that</span> <span
  m="1863880">you</span> <span m="1864030">haven't</span> <span
  m="1864300">seen</span> <span m="1864660">here.</span></p><p><span
  m="1867430">One</span> <span m="1867760">ingredient</span> <span
  m="1868570">is</span> <span m="1872090">the</span> <span
  m="1872270">idea</span> <span m="1872930">of</span> <span
  m="1873110">using</span> <span m="1873770">the</span> <span
  m="1873950">covariance</span> <span m="1875060">matrix,</span> <span
  m="1875870">which</span> <span m="1876140">tells</span> <span
  m="1876500">you</span> <span m="1876980">how</span> <span
  m="1877280">errors</span> <span m="1877940">are</span> <span
  m="1878060">correlated.</span> <span m="1880010">So</span> <span
  m="1880220">that</span> <span m="1880460">would</span> <span
  m="1880640">be</span> <span m="1881120">weighted</span> <span
  m="1881840">least</span> <span m="1882110">squares,</span> <span
  m="1883010">or</span> <span m="1884000">correlated</span> <span
  m="1884870">least</span> <span m="1885140">squares.</span> <span
  m="1889040">So</span> <span m="1893290">these</span> <span
  m="1893530">squares--</span> <span m="1894580">let</span> <span
  m="1894700">me</span> <span m="1894790">just</span> <span
  m="1895000">remind</span> <span m="1895900">you,</span> <span m="1896210">if
  I</span> <span m="1896610">can</span> <span m="1896710">write</span> <span
  m="1896920">it</span> <span m="1897040">here.</span></p><p><span
  m="1897930">So least</span> <span m="1898300">squares--</span> <span
  m="1902010">standard.</span> <span m="1908120">Standard</span> <span
  m="1908690">meaning</span> <span m="1910160">that</span> <span
  m="1910670">data</span> <span m="1911330">is</span> <span
  m="1912260">not</span> <span m="1912560">correlated.</span> <span
  m="1913970">It</span> <span m="1914060">all</span> <span
  m="1914300">has</span> <span m="1914570">the</span> <span
  m="1914720">same</span> <span m="1916520">variance.</span> <span
  m="1917900">These</span> <span m="1918140">are</span> <span
  m="1918260">the</span> <span m="1918410">statistics</span> <span
  m="1919190">words</span> <span m="1919700">that</span> <span
  m="1919880">I'm</span> <span m="1920750">using</span> <span
  m="1922970">last</span> <span m="1923300">time</span> <span
  m="1923600">and</span> <span m="1923690">this,</span> <span m="1925440">but
  that</span> <span m="1925920">I'll</span> <span m="1926670">talk</span> <span
  m="1926940">about</span> <span m="1927180">properly.</span></p><p><span
  m="1928770">So</span> <span m="1929130">the</span> <span
  m="1929340">standard</span> <span m="1929910">one</span> <span
  m="1930300">is</span> <span m="1930930">the</span> <span
  m="1931740">covari--</span> <span m="1932370">the</span> <span
  m="1932580">standard</span> <span m="1933210">means</span> <span
  m="1934260">covariance</span> <span m="1938940">equal</span> <span
  m="1939300">the</span> <span m="1939450">identity</span> <span
  m="1940050">matrix.</span> <span m="1943890">You're</span> <span
  m="1944280">doing</span> <span m="1945120">Gaussian</span> <span
  m="1945780">normal</span> <span m="1947040">probability</span> <span
  m="1948090">but</span> <span m="1948570">with</span> <span
  m="1949620">just</span> <span m="1950970">standard</span> <span
  m="1951850">Gaussians,</span> <span m="1953350">standard</span> <span
  m="1953920">Gaussians.</span> <span m="1955300">So</span> <span
  m="1955540">that's</span> <span m="1955840">one</span> <span
  m="1956110">aspect,</span> <span m="1956740">which</span> <span
  m="1958710">in</span> <span m="1959580">the</span> <span
  m="1959730">work</span> <span m="1960210">of</span> <span
  m="1961380">the</span> <span m="1961530">Draper</span> <span
  m="1961980">lab,</span> <span m="1962370">let's</span> <span
  m="1962580">say,</span> <span m="1965040">they</span> <span
  m="1965370">have</span> <span m="1965730">to</span> <span
  m="1965940">think,</span> <span m="1966900">OK,</span> <span
  m="1967320">they're</span> <span m="1967500">getting</span> <span
  m="1967860">sensors,</span> <span m="1968610">different</span> <span
  m="1969000">kinds</span> <span m="1969390">of</span> <span
  m="1969510">sensors,</span> <span m="1970500">with</span> <span
  m="1970710">different</span> <span m="1971440">accuracies,</span> <span
  m="1972330">different</span> <span m="1972690">reliability.</span> <span
  m="1973680">So</span> <span m="1974610">they</span> <span
  m="1974970">have</span> <span m="1975210">to</span> <span
  m="1975330">take</span> <span m="1975630">account</span> <span
  m="1976020">of</span> <span m="1976110">the</span> <span
  m="1976230">covariance</span> <span m="1976950">matrix.</span></p><p><span
  m="1977980">Then</span> <span m="1978090">the</span> <span
  m="1978210">other</span> <span m="1978480">point</span> <span
  m="1978930">is--</span> <span m="1980920">and</span> <span
  m="1981150">also--</span> <span m="1982180">so</span> <span
  m="1982660">that</span> <span m="1982810">was</span> <span
  m="1982990">point</span> <span m="1983365">one.</span> <span
  m="1984130">Point</span> <span m="1984520">two</span> <span
  m="1984910">is</span> <span m="1985810">the</span> <span
  m="1985990">dynamic</span> <span m="1986800">part.</span> <span
  m="1991050">There</span> <span m="1991330">is</span> <span
  m="1991450">a</span> <span m="1991570">state</span> <span
  m="1992140">equation.</span> <span m="1995920">So</span> <span
  m="1996220">I'm</span> <span m="1996460">really</span> <span
  m="1996820">into</span> <span m="1997390">the</span> <span
  m="1997600">edge</span> <span m="1997870">of</span> <span
  m="1998020">control</span> <span m="1998680">theory.</span></p><p><span
  m="1999290">So</span> <span m="1999460">let</span> <span m="1999580">me</span>
  <span m="1999730">just</span> <span m="2000000">use</span> <span
  m="2000300">some</span> <span m="2000570">words</span> <span
  m="2001020">here</span> <span m="2001770">that</span> <span
  m="2002130">you've</span> <span m="2002460">seen,</span> <span
  m="2002970">if</span> <span m="2003240">you've--</span> <span
  m="2003960">so</span> <span m="2004620">control</span> <span
  m="2005130">theory</span> <span m="2005490">has</span> <span
  m="2005940">state</span> <span m="2006450">equation.</span> <span
  m="2008550">What's</span> <span m="2008900">a</span> <span
  m="2008970">state</span> <span m="2009330">equation?</span> <span
  m="2009960">What</span> <span m="2010170">is</span> <span
  m="2010320">the</span> <span m="2010470">state?</span> <span
  m="2011610">This</span> <span m="2011790">is</span> <span
  m="2011960">the</span> <span m="2012060">position,</span> <span
  m="2013800">in</span> <span m="2014280">my</span> <span
  m="2014880">example,</span> <span m="2015900">is</span> <span
  m="2016110">the</span> <span m="2016590">position</span> <span
  m="2017220">of</span> <span m="2017340">the</span> <span
  m="2017460">satellite.</span></p><p><span m="2023880">So</span> <span
  m="2024150">are</span> <span m="2024360">we</span> <span
  m="2025050">looking</span> <span m="2025560">for</span> <span
  m="2029470">a</span> <span m="2029560">fixed</span> <span
  m="2029910">satellite?</span> <span m="2030580">Certainly</span> <span
  m="2031030">not.</span> <span m="2031450">The</span> <span
  m="2031570">satellite</span> <span m="2032080">is</span> <span
  m="2032230">moving.</span> <span m="2033340">So</span> <span
  m="2033550">this</span> <span m="2033720">state</span> <span
  m="2034150">equation</span> <span m="2034780">tells</span> <span
  m="2035200">me</span> <span m="2035950">how</span> <span
  m="2036130">much</span> <span m="2037070">the</span> <span
  m="2037330">satellite--</span> <span m="2039700">it's</span> <span
  m="2040630">Newton's</span> <span m="2041080">law--</span> <span
  m="2042130">tells</span> <span m="2042460">me</span> <span
  m="2042640">where</span> <span m="2042880">the</span> <span
  m="2043000">satellite</span> <span m="2043600">should</span> <span
  m="2043810">be.</span> <span m="2044080">Where</span> <span
  m="2044320">am</span> <span m="2044440">I</span> <span
  m="2044560">looking?</span></p><p><span m="2046090">And</span> <span
  m="2046540">then</span> <span m="2047200">the</span> <span
  m="2048100">least</span> <span m="2048370">squares</span> <span
  m="2049330">tells</span> <span m="2049750">me,</span> <span
  m="2049940">it</span> <span m="2050050">says,</span> <span
  m="2050469">look</span> <span m="2050770">around</span> <span
  m="2051159">that</span> <span m="2054010">sort</span> <span
  m="2054280">of</span> <span m="2054340">median</span> <span
  m="2054909">position</span> <span m="2055929">for</span> <span
  m="2056199">the</span> <span m="2057100">actual</span> <span
  m="2057580">position</span> <span m="2058749">that</span> <span
  m="2059110">the</span> <span m="2059469">data</span> <span
  m="2059889">is</span> <span m="2060340">giving.</span> <span
  m="2061239">So</span> <span m="2063550">just</span> <span
  m="2063790">to</span> <span m="2063909">say--</span> <span
  m="2064750">let</span> <span m="2064870">me--</span> <span
  m="2065170">let</span> <span m="2065320">me</span> <span
  m="2065469">summarize</span> <span m="2066130">this.</span> <span
  m="2068230">The</span> <span m="2068320">Kalman</span> <span
  m="2068739">filter</span> <span m="2069310">is</span> <span
  m="2069639">a</span> <span m="2071670">significantly</span> <span
  m="2072750">improved</span> <span m="2073440">version</span> <span
  m="2074040">of</span> <span m="2074250">recursive</span> <span
  m="2074685">least</span> <span m="2075120">squares.</span> <span
  m="2075929">That's</span> <span m="2076260">recursive</span> <span
  m="2076665">least</span> <span m="2077070">squares.</span></p><p><span
  m="2078270">New</span> <span m="2079409">measurement</span> <span
  m="2079889">comes</span> <span m="2080250">in,</span> <span
  m="2082060">changes</span> <span m="2083120">things</span> <span
  m="2083679">but</span> <span m="2084909">leaves</span> <span
  m="2085960">a</span> <span m="2086020">big</span> <span
  m="2086260">part</span> <span m="2086650">unchanged.</span> <span
  m="2088270">And</span> <span m="2092130">you</span> <span
  m="2092290">find</span> <span m="2092590">that</span> <span
  m="2092800">new</span> <span m="2093100">x</span> <span
  m="2093440">hat.</span> <span m="2094510">With</span> <span
  m="2094690">a</span> <span m="2094750">Kalman</span> <span
  m="2095230">filter,</span> <span m="2099870">there's</span> <span
  m="2100490">an</span> <span m="2100600">covariance</span> <span
  m="2101290">matrix</span> <span m="2101920">in</span> <span
  m="2102070">the</span> <span m="2102160">middle</span> <span
  m="2102520">here.</span> <span m="2103360">That's</span> <span
  m="2103570">where</span> <span m="2103750">covariance</span> <span
  m="2104410">matrices</span> <span m="2105130">go.</span> <span
  m="2105980">That's</span> <span m="2106690">matrix</span> <span
  m="2107560">covariance,</span> <span m="2108750">or</span> <span
  m="2109150">inverse</span> <span m="2109630">covariance,</span> <span
  m="2110380">times</span> <span m="2110710">that.</span></p><p><span
  m="2111520">And</span> <span m="2112190">oh,</span> <span
  m="2112730">why</span> <span m="2113130">don't</span> <span
  m="2113230">we</span> <span m="2114601">see</span> <span
  m="2115000">the</span> <span m="2115240">covariances</span> <span
  m="2116530">at</span> <span m="2116650">the</span> <span
  m="2116740">right</span> <span m="2117010">time?</span> <span
  m="2119060">So</span> <span m="2119240">maybe</span> <span
  m="2120960">those</span> <span m="2121250">minutes</span> <span
  m="2121670">that</span> <span m="2121820">I've</span> <span
  m="2122000">occupied</span> <span m="2122650">were</span> <span
  m="2122840">just</span> <span m="2125120">really</span> <span
  m="2125750">to</span> <span m="2127100">get</span> <span
  m="2127430">you</span> <span m="2128300">to</span> <span
  m="2128930">hear</span> <span m="2129350">that</span> <span
  m="2130850">name</span> <span m="2131360">for</span> <span
  m="2131570">the</span> <span m="2131720">simplest</span> <span
  m="2132500">update.</span> <span m="2133580">And</span> <span
  m="2133820">Kalman's</span> <span m="2134450">name</span> <span
  m="2134930">for</span> <span m="2135230">a</span> <span
  m="2135320">more</span> <span m="2135800">general</span> <span
  m="2136400">update.</span> <span m="2138510">Done.</span></p><p><span
  m="2140680">Oh,</span> <span m="2141520">this</span> <span
  m="2141760">is</span> <span m="2141910">also</span> <span
  m="2142330">to</span> <span m="2142450">be</span> <span
  m="2142660">done.</span> <span m="2143530">Where is--</span> <span
  m="2145510">yeah.</span> <span m="2145810">No--</span> <span
  m="2146210">up</span> <span m="2146370">at the</span> <span
  m="2146570">top.</span> <span m="2149750">I</span> <span
  m="2149870">seem</span> <span m="2150140">to</span> <span
  m="2150200">be</span> <span m="2150380">into</span> <span
  m="2150620">the</span> <span m="2150830">applications</span> <span
  m="2151700">here.</span> <span m="2153800">I</span> <span
  m="2153890">promised</span> <span m="2155180">how</span> <span
  m="2155380">to</span> <span m="2155540">discover</span> <span
  m="2156080">the</span> <span m="2156200">formula.</span> <span
  m="2158270">Maybe</span> <span m="2158600">I'll</span> <span
  m="2158690">never</span> <span m="2159020">know.</span> <span
  m="2163070">Because</span> <span m="2163380">I'm</span> <span
  m="2164040">really</span> <span m="2164550">more</span> <span
  m="2164760">interested</span> <span m="2165180">in,</span> <span
  m="2165530">what's</span> <span m="2166010">it</span> <span
  m="2166170">good</span> <span m="2166350">for?</span></p><p><span
  m="2171200">Use</span> <span m="2171530">number</span> <span m="2171800">one,
  now,</span> <span m="2172270">I'm</span> <span m="2172430">backing</span>
  <span m="2172880">up</span> <span m="2173060">to</span> <span
  m="2173220">the</span> <span m="2173810">easy,</span> <span
  m="2174560">easy</span> <span m="2174920">question.</span> <span
  m="2176400">Suppose</span> <span m="2177465">I</span> <span
  m="2177750">had--</span> <span m="2179410">and</span> <span
  m="2179870">let</span> <span m="2179970">me</span> <span
  m="2180120">even</span> <span m="2181590">change</span> <span
  m="2181950">the</span> <span m="2182040">matrix</span> <span
  m="2182520">to</span> <span m="2182670">A</span> <span
  m="2183000">here.</span> <span m="2183645">It</span> <span
  m="2184020">makes</span> <span m="2184260">it</span> <span
  m="2184350">more</span> <span m="2184860">realistic.</span> <span
  m="2187680">I'm</span> <span m="2187820">going</span> <span
  m="2187920">to</span> <span m="2188250">copy</span> <span
  m="2188640">that</span> <span m="2189600">here,</span> <span
  m="2189960">fully</span> <span m="2190350">on</span> <span
  m="2190560">discovering</span> <span m="2191160">the</span> <span
  m="2191250">formula.</span> <span m="2194040">For</span> <span
  m="2194130">the</span> <span m="2194250">moment,</span> <span
  m="2194710">let's</span> <span m="2194970">just</span> <span
  m="2195240">use</span> <span m="2195600">it.</span></p><p><span
  m="2197880">So</span> <span m="2198480">I</span> <span
  m="2199650">suppose</span> <span m="2203310">that</span> <span
  m="2203940">Au</span> <span m="2205890">is</span> <span m="2206270">b</span>
  <span m="2208340">is</span> <span m="2208780">solved</span> <span
  m="2213840">for</span> <span m="2213980">u.</span> <span
  m="2216360">Now,</span> <span m="2217780">now</span> <span
  m="2218080">solve</span> <span m="2222990">A</span> <span
  m="2223690">plus--</span> <span m="2226710">or</span> <span
  m="2227120">minus</span> <span m="2230490">a rank--</span> <span
  m="2230840">let</span> <span m="2230980">me</span> <span m="2231090">do</span>
  <span m="2231260">the</span> <span m="2231380">rank</span> <span
  m="2231740">1,</span> <span m="2232310">A</span> <span
  m="2232520">minus</span> <span m="2232940">uv</span> <span
  m="2233360">transpose</span> <span m="2234130">b.</span> <span
  m="2238230">What's--</span> <span m="2238920">x.</span> <span
  m="2240990">This</span> <span m="2241230">is</span> <span
  m="2241350">the</span> <span m="2241440">problem</span> <span
  m="2241920">that</span> <span m="2242100">I</span> <span
  m="2242250">really</span> <span m="2243210">would</span> <span
  m="2243390">like</span> <span m="2243660">to</span> <span
  m="2243780">solve.</span> <span m="2246590">Let</span> <span
  m="2246740">me</span> <span m="2246890">just</span> <span
  m="2247100">be</span> <span m="2247280">sure</span> <span
  m="2247490">I'm</span> <span m="2247640">doing</span> <span
  m="2247910">this</span> <span m="2248120">right.</span></p><p><span
  m="2266900">It's</span> <span m="2267470">similar</span> <span
  m="2267920">to</span> <span m="2268100">what</span> <span
  m="2268280">we</span> <span m="2268460">had</span> <span m="2268700">in</span>
  <span m="2268820">the</span> <span m="2269300">Kalman</span> <span
  m="2270140">situation.</span> <span m="2271190">Suppose</span> <span
  m="2271700">I've</span> <span m="2271880">solved</span> <span
  m="2272360">one</span> <span m="2272600">problem.</span> <span
  m="2274490">But</span> <span m="2274670">now</span> <span m="2274940">I</span>
  <span m="2276260">perturb</span> <span m="2276770">the</span> <span
  m="2276890">matrix</span> <span m="2277460">by</span> <span
  m="2277730">rank</span> <span m="2278090">1.</span> <span
  m="2279500">So</span> <span m="2279680">I</span> <span m="2279740">have</span>
  <span m="2279860">a</span> <span m="2279920">new</span> <span
  m="2280160">problem</span> <span m="2280610">with</span> <span
  m="2280790">a</span> <span m="2280850">new</span> <span
  m="2281060">answer.</span> <span m="2282760">And</span> <span
  m="2282950">I</span> <span m="2283010">want</span> <span m="2283190">to</span>
  <span m="2283280">get</span> <span m="2283470">that</span> <span
  m="2283670">answer</span> <span m="2284330">quickly.</span> <span
  m="2284810">Yeah?</span></p><p><span m="2285050">AUDIENCE:</span> <span
  m="2285275">Are the u's</span> <span m="2285500">related</span> <span
  m="2285950">in those</span> <span m="2286400">two lines?</span></p><p><span
  m="2287300">GILBERT STRANG:</span> <span m="2287495">Oh,</span> <span
  m="2287690">no.</span> <span m="2288650">Thank</span> <span
  m="2289010">you.</span> <span m="2290000">Thank</span> <span
  m="2290510">you</span> <span m="2290840">very</span> <span
  m="2291200">much.</span> <span m="2291560">Let's</span> <span
  m="2291830">call</span> <span m="2292160">this</span> <span
  m="2292400">guy</span> <span m="2293330">z,</span> <span m="2295040">or</span>
  <span m="2296870">w,</span> <span m="2297305">maybe</span> <span
  m="2297740">w.</span> <span m="2302040">So</span> <span
  m="2302550">thank</span> <span m="2302820">you.</span> <span
  m="2303180">That's</span> <span m="2303480">great.</span></p><p><span
  m="2304620">So</span> <span m="2305720">that's</span> <span
  m="2306150">what</span> <span m="2306300">I've</span> <span
  m="2306510">solved</span> <span m="2306990">for</span> <span
  m="2307230">w.</span> <span m="2310280">In</span> <span
  m="2310400">other</span> <span m="2310610">words,</span> <span
  m="2310980">I</span> <span m="2311030">have</span> <span
  m="2311120">found</span> <span m="2311570">A</span> <span
  m="2311790">inverse</span> <span m="2312230">b.</span> <span
  m="2313520">And</span> <span m="2313700">I</span> <span
  m="2313820">want</span> <span m="2314000">to</span> <span
  m="2314090">find</span> <span m="2316280">the</span> <span
  m="2316400">answer</span> <span m="2316790">to</span> <span
  m="2316940">that</span> <span m="2317330">new</span> <span
  m="2317720">question.</span> <span m="2318380">So</span> <span
  m="2318620">I've</span> <span m="2318770">perturbed</span> <span
  m="2319280">the</span> <span m="2319400">matrix.</span> <span
  m="2321310">It's</span> <span m="2321700">the</span> <span
  m="2321890">coefficient</span> <span m="2322550">matrix</span> <span
  m="2323120">in</span> <span m="2323270">a</span> <span
  m="2323330">linear</span> <span m="2323780">system.</span> <span
  m="2324290">And</span> <span m="2324380">I</span> <span
  m="2324500">just</span> <span m="2324710">want</span> <span
  m="2324920">to</span> <span m="2324980">solve</span> <span
  m="2325310">that</span> <span m="2325520">linear</span> <span
  m="2325880">system.</span></p><p><span m="2328030">Now,</span> <span
  m="2328420">so</span> <span m="2329020">if</span> <span m="2329200">I</span>
  <span m="2329320">didn't</span> <span m="2329560">know</span> <span
  m="2329740">anything</span> <span m="2330070">about</span> <span
  m="2330340">the</span> <span m="2330580">formulas,</span> <span
  m="2332080">I</span> <span m="2332200">would</span> <span
  m="2332410">have</span> <span m="2332710">a</span> <span
  m="2332800">new</span> <span m="2333220">matrix</span> <span
  m="2333910">here.</span> <span m="2335540">It</span> <span
  m="2335650">would</span> <span m="2335800">take</span> <span
  m="2336100">n</span> <span m="2336370">cube</span> <span
  m="2336790">steps</span> <span m="2338110">to</span> <span
  m="2340950">do</span> <span m="2341240">elimination</span> <span
  m="2343640">and</span> <span m="2344810">get</span> <span
  m="2345190">the</span> <span m="2345260">new</span> <span
  m="2345500">answer.</span> <span m="2347920">But</span> <span
  m="2348130">the</span> <span m="2348250">point</span> <span
  m="2348580">is</span> <span m="2348910">to</span> <span m="2349060">use</span>
  <span m="2349450">the</span> <span m="2349600">old</span> <span
  m="2349900">answer.</span> <span m="2352820">The point</span> <span
  m="2353150">is</span> <span m="2353360">to</span> <span m="2353480">use</span>
  <span m="2353780">the</span> <span m="2353930">old</span> <span
  m="2354230">answer.</span> <span m="2355090">And</span> <span
  m="2355220">now</span> <span m="2355430">let</span> <span
  m="2355580">me</span> <span m="2355730">just</span> <span
  m="2356510">say</span> <span m="2356930">what</span> <span
  m="2357170">this</span> <span m="2357440">is.</span> <span
  m="2357680">And</span> <span m="2357820">it's</span> <span
  m="2358550">problem</span> <span m="2360260">three</span> <span
  m="2361280">in</span> <span m="2361460">this</span> <span
  m="2361700">section.</span></p><p><span m="2370040">So</span> <span
  m="2372560">in</span> <span m="2372680">other</span> <span
  m="2372830">words,</span> <span m="2373170">we</span> <span
  m="2373220">know</span> <span m="2373490">about</span> <span
  m="2373820">A.</span> <span m="2377420">We've</span> <span
  m="2377630">solved</span> <span m="2377990">that</span> <span
  m="2378230">one.</span> <span m="2380730">So</span> <span
  m="2380940">what</span> <span m="2381240">I'm</span> <span
  m="2381390">going</span> <span m="2381510">to</span> <span
  m="2381600">do,</span> <span m="2381810">instead</span> <span
  m="2382230">of</span> <span m="2382800">solving</span> <span
  m="2383280">a</span> <span m="2383340">whole</span> <span
  m="2383580">new</span> <span m="2383820">problem,</span> <span
  m="2384690">I'm</span> <span m="2384840">going</span> <span
  m="2385080">to--</span> <span m="2387780">so</span> <span
  m="2388260">quickly</span> <span m="2388800">is</span> <span
  m="2388950">the</span> <span m="2389070">idea.</span></p><p><span
  m="2392950">And</span> <span m="2393120">here's</span> <span
  m="2393410">the</span> <span m="2393560">idea.</span> <span
  m="2395720">I've</span> <span m="2395900">solved</span> <span
  m="2396220">that</span> <span m="2396410">one.</span> <span
  m="2396650">And</span> <span m="2396800">I'm</span> <span
  m="2396920">going</span> <span m="2397070">to</span> <span
  m="2397160">solve</span> <span m="2397610">a</span> <span
  m="2397670">second</span> <span m="2398120">problem,</span> <span
  m="2399560">also</span> <span m="2400010">solve,</span> <span
  m="2401750">A</span> <span m="2403190">with</span> <span
  m="2403400">the</span> <span m="2403460">same</span> <span
  m="2403820">matrix</span> <span m="2404360">A--</span> <span
  m="2406190">oops--</span> <span m="2406850">A</span> <span
  m="2407120">times</span> <span m="2408290">what shall</span> <span
  m="2408570">I</span> <span m="2408710">call</span> <span
  m="2408950">the</span> <span m="2409100">unknown?</span> <span
  m="2410210">There's</span> <span m="2410530">z</span> <span
  m="2412120">equal</span> <span m="2412610">u.</span></p><p><span
  m="2417060">So</span> <span m="2417890">this</span> <span
  m="2418100">is</span> <span m="2418250">my</span> <span
  m="2418430">problem.</span> <span m="2418880">I</span> <span
  m="2418970">know</span> <span m="2419300">the</span> <span
  m="2419450">u</span> <span m="2419720">and</span> <span m="2419810">v</span>
  <span m="2419900">transpose.</span> <span m="2421190">But</span> <span
  m="2421400">I</span> <span m="2421520">don't</span> <span
  m="2422540">really</span> <span m="2422990">want</span> <span
  m="2423320">to</span> <span m="2423380">find</span> <span
  m="2423740">the</span> <span m="2423920">inverse</span> <span
  m="2424400">of</span> <span m="2424490">this</span> <span
  m="2424760">matrix</span> <span m="2425360">from</span> <span
  m="2425570">scratch.</span> <span m="2427130">So</span> <span
  m="2427310">the</span> <span m="2427460">idea</span> <span
  m="2427820">is</span> <span m="2428180">that</span> <span
  m="2428330">if</span> <span m="2428480">I</span> <span
  m="2429350">suitably</span> <span m="2429920">combine</span> <span
  m="2430490">the</span> <span m="2431000">solutions</span> <span
  m="2431870">to</span> <span m="2432050">the</span> <span
  m="2432200">original</span> <span m="2432710">problem,</span> <span
  m="2433790">the</span> <span m="2433880">original</span> <span
  m="2434360">solution</span> <span m="2434890">w,</span> <span
  m="2435860">and</span> <span m="2436220">the</span> <span
  m="2436370">solution</span> <span m="2437120">to</span> <span
  m="2438230">this</span> <span m="2438470">problem</span> <span
  m="2438890">with</span> <span m="2439160">the</span> <span
  m="2440300">new</span> <span m="2440840">guy</span> <span m="2441260">u</span>
  <span m="2441770">there,</span> <span m="2442520">that</span> <span
  m="2442700">somehow,</span> <span m="2443240">by</span> <span
  m="2443570">combining</span> <span m="2444320">the</span> <span
  m="2444500">w</span> <span m="2445580">and</span> <span m="2445730">the</span>
  <span m="2445880">z,</span> <span m="2446420">I'm</span> <span
  m="2446620">going</span> <span m="2446780">to</span> <span
  m="2446900">get</span> <span m="2447080">this</span> <span
  m="2447410">answer</span> <span m="2447860">x.</span> <span
  m="2449200">That's</span> <span m="2449540">where</span> <span
  m="2449690">I'm</span> <span m="2449870">headed.</span> <span
  m="2451130">That's</span> <span m="2451340">where</span> <span
  m="2451430">I'm</span> <span m="2451580">headed,</span> <span
  m="2451840">that</span> <span m="2452900">by</span> <span
  m="2454100">figuring</span> <span m="2454490">out</span> <span
  m="2454610">w</span> <span m="2455540">and</span> <span m="2455720">z--</span>
  <span m="2456140">so</span> <span m="2456410">do</span> <span
  m="2456500">you</span> <span m="2456590">see</span> <span
  m="2456800">what</span> <span m="2456950">I've</span> <span
  m="2457070">done?</span></p><p><span m="2459030">With</span> <span
  m="2459470">the</span> <span m="2459560">matrix</span> <span
  m="2460130">A,</span> <span m="2460340">I've</span> <span
  m="2460520">solved</span> <span m="2460820">two</span> <span
  m="2461060">problems.</span> <span m="2464820">Does</span> <span
  m="2465060">that</span> <span m="2465260">take</span> <span
  m="2465470">twice</span> <span m="2465830">as</span> <span
  m="2466010">long?</span> <span m="2467210">If</span> <span
  m="2467840">I</span> <span m="2467990">have</span> <span
  m="2468320">the</span> <span m="2468440">same</span> <span
  m="2468830">matrix</span> <span m="2469460">A</span> <span
  m="2471690">but</span> <span m="2471900">different</span> <span
  m="2472320">right-hand</span> <span m="2472740">sides,</span> <span
  m="2473460">b and</span> <span m="2473930">u,</span> <span
  m="2474960">if</span> <span m="2475140">I</span> <span
  m="2475290">factor</span> <span m="2475980">A</span> <span
  m="2476250">into</span> <span m="2476550">Lu,</span> <span
  m="2477150">all</span> <span m="2477390">the</span> <span
  m="2477510">hard</span> <span m="2477840">work</span> <span
  m="2478170">is</span> <span m="2478380">done</span> <span
  m="2478860">there</span> <span m="2479850">on</span> <span
  m="2479970">the</span> <span m="2480030">left</span> <span
  m="2480360">side.</span> <span m="2481570">All</span> <span
  m="2482130">the</span> <span m="2482250">work</span> <span
  m="2482640">is</span> <span m="2482820">done</span> <span
  m="2483190">in</span> <span m="2483210">finding</span> <span
  m="2483610">Lu.</span> <span m="2484200">And</span> <span
  m="2484290">then</span> <span m="2485310">I</span> <span
  m="2485430">just</span> <span m="2485670">back</span> <span
  m="2485940">substitute</span> <span m="2486570">to</span> <span
  m="2486720">find</span> <span m="2487530">the</span> <span
  m="2487650">second</span> <span m="2488070">solution.</span></p><p><span
  m="2489440">This</span> <span m="2489750">is</span> <span
  m="2489870">so</span> <span m="2490080">fundamental</span> <span
  m="2490740">that</span> <span m="2490920">I'm</span> <span
  m="2491850">emphasizing</span> <span m="2492285">it,</span> <span
  m="2493315">that</span> <span m="2493710">if</span> <span
  m="2493950">you</span> <span m="2494070">have</span> <span
  m="2494250">multiple</span> <span m="2494820">right-hand</span> <span
  m="2495300">sides,</span> <span m="2496800">you</span> <span
  m="2496950">don't</span> <span m="2497310">every</span> <span
  m="2497610">time</span> <span m="2497970">go</span> <span
  m="2498150">back</span> <span m="2498900">and</span> <span
  m="2499230">work</span> <span m="2499620">on</span> <span
  m="2499770">the</span> <span m="2499860">left</span> <span
  m="2500190">side.</span> <span m="2500580">The</span> <span
  m="2500730">left</span> <span m="2501030">side</span> <span
  m="2501480">with</span> <span m="2501630">the</span> <span
  m="2501750">same</span> <span m="2502080">matrix</span> <span
  m="2502650">A,</span> <span m="2503670">just</span> <span
  m="2503990">would</span> <span m="2504270">do</span> <span
  m="2504540">the</span> <span m="2504660">same</span> <span
  m="2505050">stuff.</span> <span m="2505560">The</span> <span
  m="2505680">same</span> <span m="2506100">rows</span> <span
  m="2507210">and</span> <span m="2507450">pivots</span> <span
  m="2508140">and</span> <span m="2508290">all</span> <span
  m="2508470">that</span> <span m="2508710">stuff</span> <span
  m="2509070">will</span> <span m="2509670">happen</span> <span
  m="2510060">because</span> <span m="2510420">it's</span> <span
  m="2510630">the</span> <span m="2510720">same</span> <span
  m="2511090">A.</span> <span m="2511890">You</span> <span
  m="2512010">just</span> <span m="2513000">attach--</span> <span
  m="2513620">you</span> <span m="2513810">really</span> <span
  m="2514170">just</span> <span m="2514530">stick</span> <span
  m="2515070">a</span> <span m="2515130">second</span> <span
  m="2515610">column--</span> <span m="2517270">really,</span> <span
  m="2518190">the</span> <span m="2518500">fast</span> <span
  m="2518930">way</span> <span m="2519120">to</span> <span m="2519240">do</span>
  <span m="2519510">it</span> <span m="2519660">is</span> <span
  m="2520560">A</span> <span m="2522330">wz.</span></p><p><span
  m="2523980">The</span> <span m="2524100">two</span> <span
  m="2524370">solutions</span> <span m="2525510">come</span> <span
  m="2525840">from</span> <span m="2527010">the</span> <span
  m="2527160">b</span> <span m="2527932">and the</span> <span
  m="2528320">u.</span> <span m="2530280">I've</span> <span
  m="2530700">just</span> <span m="2530910">put</span> <span
  m="2531120">the</span> <span m="2531240">two</span> <span
  m="2531420">problems</span> <span m="2531870">together</span> <span
  m="2532920">to</span> <span m="2533100">emphasize</span> <span
  m="2534000">that</span> <span m="2534840">the</span> <span
  m="2534960">matrix</span> <span m="2535500">A</span> <span
  m="2535740">is</span> <span m="2536010">the</span> <span
  m="2536130">same.</span> <span m="2538290">This</span> <span
  m="2538560">is</span> <span m="2538680">where</span> <span
  m="2538890">most</span> <span m="2539190">of</span> <span
  m="2539250">the</span> <span m="2539340">work</span> <span
  m="2539640">goes.</span> <span m="2540450">But</span> <span
  m="2540690">it</span> <span m="2540840">only</span> <span
  m="2541080">goes</span> <span m="2541380">there</span> <span
  m="2541620">once.</span> <span m="2542630">That's</span> <span
  m="2542910">the</span> <span m="2543000">point.</span></p><p><span
  m="2544260">Then</span> <span m="2544470">finally,</span> <span
  m="2545070">I'm</span> <span m="2545280">supposed</span> <span
  m="2545790">to--</span> <span m="2548060">the</span> <span
  m="2548270">notes</span> <span m="2548630">are</span> <span
  m="2548750">supposed</span> <span m="2549050">to</span> <span
  m="2549170">tell</span> <span m="2549440">me</span> <span
  m="2550160">how</span> <span m="2550790">to</span> <span
  m="2551000">combine</span> <span m="2552770">the</span> <span
  m="2552980">two</span> <span m="2553250">answers</span> <span
  m="2553790">w</span> <span m="2554240">and</span> <span m="2554360">z</span>
  <span m="2554840">to</span> <span m="2554990">get</span> <span
  m="2555260">the</span> <span m="2555770">answer</span> <span
  m="2556190">x.</span> <span m="2557040">So</span> <span m="2557240">let</span>
  <span m="2557360">me</span> <span m="2557480">write</span> <span
  m="2557750">that</span> <span m="2557930">down.</span> <span
  m="2559160">And</span> <span m="2562900">that</span> <span
  m="2563080">will</span> <span m="2563260">be</span> <span
  m="2563530">use</span> <span m="2563980">number</span> <span
  m="2564340">one</span> <span m="2567464">of</span> <span
  m="2567930">the</span> <span m="2568440">Sherman-Morrison-Woodbury</span>
  <span m="2569880">formula.</span> <span m="2571140">So</span> <span
  m="2571350">I'm</span> <span m="2571830">planning</span> <span
  m="2572210">to</span> <span m="2572700">just</span> <span
  m="2572910">write</span> <span m="2573150">it</span> <span
  m="2573270">down.</span></p><p><span m="2573570">According</span> <span
  m="2574020">to</span> <span m="2574140">this,</span> <span
  m="2574360">step</span> <span m="2574860">two</span> <span
  m="2575790">is</span> <span m="2576870">the</span> <span
  m="2577020">answer</span> <span m="2577380">we</span> <span
  m="2577560">want,</span> <span m="2580620">here</span> <span
  m="2580890">written</span> <span m="2581240">x--</span> <span
  m="2582120">so</span> <span m="2582300">I</span> <span
  m="2582750">haven't</span> <span m="2582990">used</span> <span
  m="2583230">the</span> <span m="2583320">same</span> <span
  m="2583620">letters</span> <span m="2584040">as</span> <span
  m="2584250">in</span> <span m="2584430">the</span> <span
  m="2584520">notes--</span> <span m="2585600">is</span> <span
  m="2586530">the</span> <span m="2586650">original</span> <span
  m="2587190">w--</span> <span m="2588660">good--</span> <span
  m="2589410">and</span> <span m="2589560">then</span> <span
  m="2590820">a</span> <span m="2591030">change.</span> <span
  m="2592590">Because</span> <span m="2593790">I've</span> <span
  m="2593910">changed</span> <span m="2594990">the</span> <span
  m="2595140">problem.</span> <span m="2596490">So</span> <span
  m="2596670">I'm</span> <span m="2596850">going</span> <span
  m="2596930">to</span> <span m="2597090">change</span> <span
  m="2597720">the</span> <span m="2597930">answer.</span></p><p><span
  m="2598770">But</span> <span m="2598980">the</span> <span
  m="2599070">thing</span> <span m="2599340">is,</span> <span
  m="2599670">to</span> <span m="2599850">get</span> <span
  m="2600090">this</span> <span m="2600360">answer,</span> <span
  m="2603240">I</span> <span m="2603390">have</span> <span m="2603630">to</span>
  <span m="2604410">divide</span> <span m="2604980">by</span> <span
  m="2605280">that</span> <span m="2606270">determinant</span> <span
  m="2607110">wherever</span> <span m="2607800">it</span> <span
  m="2607920">was,</span> <span m="2609060">the--</span> <span
  m="2610050">oh,</span> <span m="2612210">yeah,</span> <span
  m="2612600">the--</span> <span m="2614826">I'm</span> <span
  m="2615240">sorry.</span> <span m="2615840">I'm</span> <span
  m="2616290">using</span> <span m="2617200">an</span> <span
  m="2617460">A</span> <span m="2617790">here,</span> <span
  m="2618090">and</span> <span m="2618210">I</span> <span
  m="2618270">haven't</span> <span m="2618630">given</span> <span
  m="2619230">you</span> <span m="2619410">the</span> <span
  m="2619530">formula</span> <span m="2620040">for</span> <span
  m="2620250">A.</span> <span m="2621030">So</span> <span
  m="2624850">that'll</span> <span m="2625160">have</span> <span
  m="2625370">to</span> <span m="2626000">wait.</span> <span
  m="2629250">So</span> <span m="2629490">I'll</span> <span
  m="2629610">put</span> <span m="2629850">determinant</span> <span
  m="2630600">here.</span> <span m="2632240">And</span> <span
  m="2633530">Sherman,</span> <span m="2633890">Morrison,</span> <span
  m="2634360">Woodbury</span> <span m="2634780">figured</span> <span
  m="2635110">that</span> <span m="2635360">out.</span></p><p><span
  m="2636150">And</span> <span m="2636310">then--</span> <span
  m="2637190">oh,</span> <span m="2637610">I'm</span> <span
  m="2637790">sorry.</span> <span m="2643380">We</span> <span
  m="2643560">know</span> <span m="2643740">what</span> <span
  m="2643940">that</span> <span m="2644363">is.</span> <span
  m="2645210">We</span> <span m="2645390">want</span> <span m="2645650">1</span>
  <span m="2646170">minus</span> <span m="2648320">v</span> <span
  m="2648890">transpose</span> <span m="2649760">z.</span> <span
  m="2650360">So</span> <span m="2650600">it's</span> <span
  m="2650810">the</span> <span m="2650960">v</span> <span
  m="2651335">from</span> <span m="2651710">here,</span> <span
  m="2652510">1</span> <span m="2652790">minus</span> <span m="2653210">v</span>
  <span m="2653540">transpose.</span> <span m="2655130">And</span> <span
  m="2655340">it's</span> <span m="2655550">the</span> <span
  m="2655670">z</span> <span m="2656120">there.</span> <span
  m="2657290">Oh,</span> <span m="2657440">yeah.</span> <span
  m="2658610">This</span> <span m="2658760">is</span> <span
  m="2659150">good.</span></p><p><span m="2660740">So</span> <span
  m="2660890">I'm</span> <span m="2661040">going</span> <span
  m="2661160">to</span> <span m="2661280">get</span> <span m="2661460">a</span>
  <span m="2661580">formula</span> <span m="2662540">that</span> <span
  m="2663170">changes</span> <span m="2664490">the</span> <span
  m="2664670">solution</span> <span m="2665270">w</span> <span
  m="2665720">by</span> <span m="2666020">a</span> <span m="2666110">term</span>
  <span m="2667130">that</span> <span m="2667520">we</span> <span
  m="2668090">recognize</span> <span m="2668720">is</span> <span
  m="2668870">coming</span> <span m="2669200">from</span> <span
  m="2669410">Sherman,</span> <span m="2670310">Morrison,</span> <span
  m="2670880">Woodbury.</span> <span m="2671510">And</span> <span
  m="2671690">that</span> <span m="2671900">term</span> <span
  m="2672260">in</span> <span m="2672410">the</span> <span
  m="2673130">numerator</span> <span m="2673910">is</span> <span
  m="2675320">a</span> <span m="2675410">multiple</span> <span
  m="2676010">of</span> <span m="2676170">zx.</span> <span m="2684090">So</span>
  <span m="2684450">I'm</span> <span m="2684660">using</span> <span
  m="2685040">w--</span> <span m="2687790">yes--</span> <span
  m="2688540">w</span> <span m="2690360">times--</span> <span
  m="2694950">sorry--</span> <span m="2698190">times</span> <span
  m="2699460">x,</span> <span m="2700960">which</span> <span
  m="2701160">was--</span> <span m="2701830">I'm</span> <span
  m="2702060">sorry.</span> <span m="2702820">w</span> <span
  m="2703230">is</span> <span m="2703670">xv.</span> <span m="2705870">So</span>
  <span m="2706050">the</span> <span m="2706200">v</span> <span
  m="2706635">here,</span> <span m="2707070">I'm</span> <span
  m="2707490">just</span> <span m="2707760">using--</span> <span
  m="2708620">the</span> <span m="2708750">v</span> <span m="2709005">is</span>
  <span m="2709260">the</span> <span m="2709440">same</span> <span
  m="2709890">v.</span> <span m="2710370">So</span> <span m="2711690">v</span>
  <span m="2712230">transpose</span> <span m="2713310">z,</span> <span
  m="2715930">I</span> <span m="2716020">think</span> <span
  m="2716290">that's</span> <span m="2716440">got</span> <span
  m="2716620">it.</span> <span m="2718030">I</span> <span
  m="2718130">think</span> <span m="2718200">that's</span> <span m="2718470">got
  it.</span></p><p><span m="2719390">So</span> <span m="2719880">again,</span>
  <span m="2720330">the</span> <span m="2720420">point</span> <span
  m="2720780">was</span> <span m="2721860">to--</span> <span
  m="2723990">x</span> <span m="2724320">doesn't</span> <span
  m="2724650">appear</span> <span m="2724980">here,</span> <span
  m="2725210">because</span> <span m="2725600">that's</span> <span
  m="2725850">what</span> <span m="2726060">I'm</span> <span
  m="2726240">after--</span> <span m="2727380">is</span> <span
  m="2727590">to</span> <span m="2727710">use</span> <span
  m="2728100">the</span> <span m="2728220">w</span> <span m="2728760">and</span>
  <span m="2728880">the</span> <span m="2729000">z,</span> <span
  m="2729570">the</span> <span m="2729720">w</span> <span m="2730050">and</span>
  <span m="2730380">the</span> <span m="2730500">z.</span> <span
  m="2731820">And</span> <span m="2732000">I</span> <span
  m="2732090">have</span> <span m="2732300">to</span> <span
  m="2732420">use,</span> <span m="2732840">of</span> <span
  m="2732960">course,</span> <span m="2733380">the</span> <span
  m="2733500">v.</span> <span m="2734916">And</span> <span m="2735390">I</span>
  <span m="2735450">have</span> <span m="2735660">to</span> <span
  m="2735780">use</span> <span m="2736140">the</span> <span
  m="2736260">u.</span> <span m="2736740">And</span> <span
  m="2736860">that</span> <span m="2737100">got</span> <span
  m="2737580">used</span> <span m="2738000">here.</span> <span
  m="2740020">So</span> <span m="2740100">everything</span> <span
  m="2740580">that</span> <span m="2741030">had</span> <span
  m="2741270">to</span> <span m="2741360">be</span> <span
  m="2741510">used</span> <span m="2741930">got</span> <span
  m="2742230">used.</span> <span m="2743070">And</span> <span
  m="2743640">that</span> <span m="2743880">was</span> <span
  m="2744120">the</span> <span m="2744420">answer.</span></p><p><span
  m="2747420">So</span> <span m="2747600">that's</span> <span
  m="2747870">the</span> <span m="2747990">basic</span> <span
  m="2748530">use,</span> <span m="2749130">is,</span> <span
  m="2750660">if</span> <span m="2750840">I</span> <span
  m="2750990">perturb</span> <span m="2751860">the</span> <span
  m="2753270">problem,</span> <span m="2754700">the</span> <span
  m="2754980">left-hand</span> <span m="2755490">side,</span> <span
  m="2757140">what's</span> <span m="2757500">the</span> <span
  m="2757620">change</span> <span m="2758040">in</span> <span
  m="2758200">the</span> <span m="2758270">solution?</span> <span
  m="2759750">Over</span> <span m="2760050">here</span> <span
  m="2760350">with</span> <span m="2760680">least</span> <span
  m="2760940">squares,</span> <span m="2762560">it</span> <span
  m="2762630">was</span> <span m="2762810">the</span> <span
  m="2762870">same.</span> <span m="2763290">I</span> <span
  m="2763410">perturbed</span> <span m="2763980">the</span> <span
  m="2764070">left-hand</span> <span m="2764610">side.</span> <span
  m="2765460">But</span> <span m="2765580">because</span> <span
  m="2765960">it</span> <span m="2766050">was</span> <span
  m="2766260">least</span> <span m="2766480">squares,</span> <span
  m="2767070">there</span> <span m="2767160">was</span> <span
  m="2767370">an</span> <span m="2767520">A</span> <span
  m="2767730">transpose</span> <span m="2768420">A</span> <span
  m="2769255">to</span> <span m="2769590">deal</span> <span
  m="2769830">with.</span></p><p><span m="2770200">So</span> <span
  m="2770310">this</span> <span m="2770550">was</span> <span
  m="2770910">one</span> <span m="2771240">level</span> <span
  m="2772110">more</span> <span m="2772560">difficult,</span> <span
  m="2773130">because</span> <span m="2773400">it</span> <span
  m="2773520">involved</span> <span m="2774040">A</span> <span
  m="2774120">transpose</span> <span m="2774810">A's.</span> <span
  m="2775500">And</span> <span m="2775650">here,</span> <span m="2775920">it
  was</span> <span m="2776130">just</span> <span
  m="2776910">straightforward</span> <span m="2777650">A.</span> <span
  m="2779610">So,</span> <span m="2780660">yes?</span> <span
  m="2781360">Thanks.</span></p><p><span m="2781720">AUDIENCE:</span> <span
  m="2781842">Would</span> <span m="2781964">it</span> <span
  m="2782086">be</span> <span m="2782208">also</span> <span m="2782696">a good
  idea--</span> <span m="2783184">so you have</span> <span m="2783672">A</span>
  <span m="2784160">minus</span> <span m="2784648">uv</span> <span
  m="2785136">transpose</span> <span m="2785624">x plus</span> <span
  m="2786112">b--</span> <span m="2786600">to write</span> <span
  m="2787088">A</span> <span m="2787576">minus</span> <span
  m="2788064">Az</span> <span m="2789040">b</span> <span m="2789528">transpose
  x</span> <span m="2790016">equals</span> <span m="2790504">b?</span> <span
  m="2790992">I'm backtracking</span> <span m="2791480">on the</span> <span
  m="2791968">left.</span></p><p><span m="2792470">GILBERT STRANG:</span> <span
  m="2792530">I</span> <span m="2792590">could</span> <span
  m="2792770">probably</span> <span m="2793130">do</span> <span
  m="2793310">this</span> <span m="2793580">other</span> <span
  m="2793790">ways.</span> <span m="2794250">Yeah.</span> <span
  m="2794650">Yeah.</span> <span m="2795080">Yeah.</span> <span
  m="2795500">I</span> <span m="2796880">hope</span> <span
  m="2797060">you</span> <span m="2797210">follow</span> <span
  m="2797600">up</span> <span m="2797780">on</span> <span
  m="2797930">that</span> <span m="2798545">and</span> <span
  m="2799430">write</span> <span m="2799670">it</span> <span
  m="2799760">down.</span> <span m="2802610">So</span> <span
  m="2802850">maybe</span> <span m="2803480">what</span> <span
  m="2803780">I've</span> <span m="2804680">done</span> <span
  m="2805070">is</span> <span m="2805280">what</span> <span
  m="2805880">my</span> <span m="2806210">goal</span> <span
  m="2806540">was</span> <span m="2806870">for</span> <span
  m="2807050">today,</span> <span m="2808130">first,</span> <span
  m="2808640">to</span> <span m="2810260">show</span> <span
  m="2810560">you</span> <span m="2810710">the</span> <span
  m="2810860">formula</span> <span m="2811400">for</span> <span
  m="2811550">the</span> <span m="2811730">inverse;</span> <span
  m="2813400">second,</span> <span m="2813790">to</span> <span
  m="2813910">recognize</span> <span m="2814780">that</span> <span
  m="2814930">it</span> <span m="2815110">has</span> <span
  m="2815410">interesting</span> <span m="2817390">importance</span> <span
  m="2818470">that a</span> <span m="2818860">rank</span> <span
  m="2819400">k</span> <span m="2819820">change</span> <span
  m="2820360">in</span> <span m="2820510">the</span> <span
  m="2820600">matrix</span> <span m="2821260">brings</span> <span
  m="2821740">a</span> <span m="2821830">rank</span> <span m="2822320">k</span>
  <span m="2822640">change</span> <span m="2823150">in</span> <span
  m="2823270">the</span> <span m="2823420">inverse,</span> <span
  m="2824830">and</span> <span m="2825100">that</span> <span
  m="2825250">we</span> <span m="2825610">can--</span> <span
  m="2825910">the</span> <span m="2826000">formula</span> <span
  m="2826450">says</span> <span m="2827260">to</span> <span
  m="2827410">invert</span> <span m="2827770">an</span> <span
  m="2827920">n</span> <span m="2828130">by</span> <span m="2828370">n</span>
  <span m="2828550">matrix,</span> <span m="2829210">you</span> <span
  m="2829330">can</span> <span m="2829540">switch</span> <span
  m="2829960">an</span> <span m="2830080">inverted</span> <span
  m="2830560">k</span> <span m="2830860">by</span> <span m="2831070">k</span>
  <span m="2831370">matrix.</span> <span m="2832480">And</span> <span
  m="2832600">then</span> <span m="2832780">I</span> <span
  m="2832900">spoke</span> <span m="2833260">about</span> <span
  m="2833560">a</span> <span m="2833590">couple</span> <span
  m="2833950">of</span> <span m="2834070">the</span> <span
  m="2834220">applications.</span></p><p><span m="2835610">So</span> <span
  m="2835690">the</span> <span m="2835840">only</span> <span
  m="2836110">thing</span> <span m="2836350">I</span> <span
  m="2836470">have</span> <span m="2836620">not</span> <span
  m="2836890">done</span> <span m="2837220">is</span> <span
  m="2837430">to</span> <span m="2837520">give</span> <span
  m="2837760">you</span> <span m="2837880">the</span> <span
  m="2839020">full</span> <span m="2839470">Sherman-Morrison-Woodbury</span>
  <span m="2841150">formula,</span> <span m="2842090">the</span> <span
  m="2842350">one</span> <span m="2842620">with</span> <span
  m="2842790">an</span> <span m="2842980">A,</span> <span m="2843340">the</span>
  <span m="2843460">one</span> <span m="2843670">that's</span> <span
  m="2844030">up</span> <span m="2844210">on</span> <span m="2844330">the</span>
  <span m="2844420">right.</span> <span m="2844900">Can</span> <span
  m="2845110">I</span> <span m="2845230">do</span> <span m="2845470">that</span>
  <span m="2845730">finally?</span> <span m="2847600">You</span> <span
  m="2847750">can</span> <span m="2847930">probably</span> <span
  m="2848890">guess</span> <span m="2849220">what</span> <span
  m="2849490">it's</span> <span m="2849640">going</span> <span
  m="2849770">to</span> <span m="2849910">be.</span> <span m="2852850">Where
  is--</span> <span m="2854210">there's</span> <span m="2854340">got</span>
  <span m="2854480">to</span> <span m="2854650">be</span> <span
  m="2854830">one</span> <span m="2855280">more</span> <span
  m="2855580">blackboard.</span></p><p><span m="2857710">So</span> <span
  m="2860280">here</span> <span m="2860620">Sherman-Morrison-Woodbury.</span>
  <span m="2863500">And</span> <span m="2863650">what's</span> <span
  m="2864040">the</span> <span m="2864190">complete</span> <span
  m="2864760">thing?</span> <span m="2865180">It's</span> <span
  m="2865420">A</span> <span m="2865870">minus</span> <span
  m="2866410">uv</span> <span m="2867040">transpose</span> <span
  m="2867870">inverse.</span> <span m="2869050">So</span> <span
  m="2869200">this</span> <span m="2869440">is</span> <span m="2869620">n</span>
  <span m="2869860">by</span> <span m="2870100">n.</span> <span
  m="2872390">And</span> <span m="2872540">it's</span> <span
  m="2872710">an</span> <span m="2872830">A</span> <span m="2873170">now</span>
  <span m="2873500">instead</span> <span m="2873890">of</span> <span
  m="2874010">an</span> <span m="2874130">identity</span> <span
  m="2874700">matrix.</span> <span m="2875210">That's</span> <span
  m="2875460">the</span> <span m="2875570">difference.</span></p><p><span
  m="2877350">And</span> <span m="2877430">this</span> <span
  m="2877700">is</span> <span m="2877970">n</span> <span m="2878210">by</span>
  <span m="2878450">k,</span> <span m="2879485">k</span> <span
  m="2879860">by</span> <span m="2880130">n.</span> <span m="2881270">So</span>
  <span m="2881450">it's</span> <span m="2881570">rank</span> <span
  m="2881900">k</span> <span m="2882350">perturbation.</span> <span
  m="2884150">And</span> <span m="2885620">start</span> <span
  m="2885980">me</span> <span m="2886160">out</span> <span m="2888332">on</span>
  <span m="2888770">the</span> <span m="2888860">formula.</span> <span
  m="2890880">What's</span> <span m="2891050">the</span> <span
  m="2891140">first</span> <span m="2891530">thing</span> <span
  m="2891770">I</span> <span m="2891860">have</span> <span m="2892010">to</span>
  <span m="2892160">write?</span></p><p><span m="2893260">AUDIENCE:</span> <span
  m="2893470">A</span> <span m="2893680">inverse.</span></p><p><span
  m="2894520">GILBERT STRANG:</span> <span m="2894677">A</span> <span
  m="2894835">inverse.</span> <span m="2896450">So</span> <span
  m="2896720">I</span> <span m="2896840">start</span> <span
  m="2897170">with</span> <span m="2897380">A</span> <span
  m="2897630">inverse.</span> <span m="2898680">And</span> <span
  m="2898810">then</span> <span m="2898940">I</span> <span
  m="2899060">subtract</span> <span m="2899660">something.</span> <span
  m="2900770">And</span> <span m="2900920">it's</span> <span
  m="2901140">going</span> <span m="2901280">to</span> <span
  m="2901670">be</span> <span m="2901850">a</span> <span m="2901970">copy</span>
  <span m="2902510">of</span> <span m="2902660">this,</span> <span
  m="2905540">except--</span> <span m="2906380">well,</span> <span
  m="2907790">maybe</span> <span m="2908120">it's</span> <span
  m="2908330">just</span> <span m="2908480">a</span> <span
  m="2908540">perfect</span> <span m="2908960">copy.</span> <span
  m="2909860">Maybe</span> <span m="2910160">I</span> <span
  m="2910250">just</span> <span m="2910520">need the</span> <span
  m="2910900">u.</span> <span m="2913280">I'm</span> <span
  m="2913640">going</span> <span m="2913910">from</span> <span
  m="2914090">that</span> <span m="2914240">left</span> <span
  m="2914510">board.</span> <span m="2915170">Now,</span> <span
  m="2917360">Ik,</span> <span m="2918140">what</span> <span
  m="2918290">do</span> <span m="2918410">I</span> <span m="2918500">put</span>
  <span m="2918750">it</span> <span m="2918790">in</span> <span
  m="2918920">there?</span></p><p><span m="2922040">I</span> <span
  m="2922190">am</span> <span m="2922370">going</span> <span
  m="2922490">to</span> <span m="2922550">have</span> <span
  m="2922700">to</span> <span m="2922820">look.</span> <span
  m="2924980">So</span> <span m="2925200">we're</span> <span
  m="2925640">writing</span> <span m="2926060">down</span> <span
  m="2926390">now</span> <span m="2926670">the</span> <span
  m="2927770">formula,</span> <span m="2929320">the</span> <span
  m="2929590">full</span> <span m="2929860">scale--</span> <span
  m="2931300">OK.</span> <span m="2932090">Oh,</span> <span
  m="2932530">all</span> <span m="2932660">right.</span> <span
  m="2938300">Here</span> <span m="2938480">it</span> <span
  m="2938570">is.</span></p><p><span m="2939840">There</span> <span
  m="2940120">is</span> <span m="2940300">an</span> <span m="2940560">A</span>
  <span m="2940966">inverse</span> <span m="2942430">u.</span> <span
  m="2943800">Now</span> <span m="2944100">comes</span> <span
  m="2945000">that</span> <span m="2945390">whole</span> <span
  m="2945840">thing</span> <span m="2946200">inverted</span> <span
  m="2946800">that</span> <span m="2947040">you'll</span> <span
  m="2947240">expect,</span> <span m="2948240">I</span> <span
  m="2948710">minus</span> <span m="2949230">v</span> <span
  m="2949590">transpose</span> <span m="2951030">A</span> <span
  m="2951420">inverse</span> <span m="2952170">u,</span> <span
  m="2952770">all</span> <span m="2953250">inverse.</span> <span
  m="2954780">And</span> <span m="2954930">then</span> <span
  m="2955170">there's</span> <span m="2955410">another</span> <span
  m="2956460">two</span> <span m="2956700">pieces,</span> <span
  m="2957630">v</span> <span m="2957990">transpose</span> <span
  m="2959070">A</span> <span m="2959330">inverse.</span></p><p><span
  m="2962140">So</span> <span m="2962290">I</span> <span
  m="2962350">didn't</span> <span m="2962560">look</span> <span
  m="2962800">ahead</span> <span m="2963100">to</span> <span
  m="2963190">get</span> <span m="2963400">it</span> <span m="2963500">at</span>
  <span m="2963550">all</span> <span m="2963760">on</span> <span
  m="2963910">one</span> <span m="2964150">line.</span> <span
  m="2964600">But</span> <span m="2964820">do</span> <span
  m="2964900">you</span> <span m="2965050">see</span> <span
  m="2965500">what--</span> <span m="2966310">this</span> <span
  m="2966580">is</span> <span m="2966790">the--</span> <span
  m="2967750">oh,</span> <span m="2968080">that's</span> <span
  m="2968350">probably--</span> <span m="2968800">is</span> <span
  m="2968990">that--</span> <span m="2970100">yeah.</span> <span
  m="2970520">That's</span> <span m="2970690">the</span> <span
  m="2970790">identity.</span> <span m="2972460">Because</span> <span
  m="2972730">we've</span> <span m="2972910">got</span> <span
  m="2973090">enough</span> <span m="2973450">A</span> <span
  m="2973780">inverses.</span></p><p><span m="2975220">I</span> <span
  m="2975340">believe</span> <span m="2975730">that's</span> <span
  m="2976150">the</span> <span m="2976300">final,</span> <span
  m="2977980">ultimate</span> <span m="2978760">formula</span> <span
  m="2979330">of</span> <span m="2979450">life</span> <span
  m="2979900">here,</span> <span m="2981730">that</span> <span
  m="2982030">we've</span> <span m="2983710">changed</span> <span
  m="2984160">it</span> <span m="2984250">by</span> <span
  m="2984490">rank</span> <span m="2985170">k.</span> <span
  m="2985850">Here's</span> <span m="2986140">the</span> <span
  m="2986260">original</span> <span m="2986800">inverse.</span> <span
  m="2987910">And</span> <span m="2988090">presumably,</span> <span
  m="2988870">this</span> <span m="2989200">is</span> <span m="2989410">a</span>
  <span m="2989470">rank</span> <span m="2989920">k</span> <span
  m="2990970">change.</span> <span m="2994140">That</span> <span
  m="2994360">will</span> <span m="2994460">be</span> <span m="2994610">a</span>
  <span m="2994670">rank</span> <span m="2994980">k</span> <span
  m="2995330">change.</span> <span m="2997250">And</span> <span
  m="2998390">it</span> <span m="2998540">only</span> <span
  m="2998810">requires</span> <span m="2999380">us</span> <span
  m="2999560">to</span> <span m="2999710">compute</span> <span
  m="3000190">that</span> <span m="3000520">inverse,</span> <span
  m="3001420">where</span> <span m="3003100">that's</span> <span
  m="3003430">a</span> <span m="3003640">k</span> <span m="3003910">by k</span>
  <span m="3004390">matrix.</span></p><p><span m="3006280">Thank</span> <span
  m="3006550">you</span> <span m="3006640">for</span> <span
  m="3008230">allowing</span> <span m="3008710">this,</span> <span
  m="3010120">our</span> <span m="3010840">50</span> <span
  m="3011260">minutes</span> <span m="3011740">of</span> <span
  m="3012250">formulas.</span> <span m="3013990">So</span> <span
  m="3014200">that's</span> <span m="3014470">really</span> <span
  m="3015630">what</span> <span m="3016060">that</span> <span
  m="3016270">comes</span> <span m="3016630">to.</span> <span
  m="3017650">So</span> <span m="3017920">that's</span> <span
  m="3018250">section</span> <span m="3018880">4.1</span> <span
  m="3019900">of</span> <span m="3020020">the</span> <span
  m="3020140">notes</span> <span m="3021670">with</span> <span
  m="3021910">some</span> <span m="3022150">applications.</span> <span
  m="3023710">And</span> <span m="3024160">we</span> <span
  m="3024520">will</span> <span m="3024700">move</span> <span
  m="3025090">on</span> <span m="3025480">to</span> <span
  m="3026530">other</span> <span m="3026980">circumstances</span> <span
  m="3028030">of</span> <span m="3028210">low</span> <span
  m="3028480">rank.</span> <span m="3029440">Good.</span> <span
  m="3029950">Thank</span> <span m="3030270">you.</span></p>
uid: ca9ef9c6a11c9143705b6606448b4ddb
type: courses
layout: video
---
