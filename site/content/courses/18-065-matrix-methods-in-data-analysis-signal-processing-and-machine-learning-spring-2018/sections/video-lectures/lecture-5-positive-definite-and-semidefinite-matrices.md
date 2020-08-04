---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>In this lecture, Professor Strang
  continues reviewing key matrices, such as positive definite and semidefinite
  matrices.  This lecture concludes his review of the highlights of linear
  algebra.</p> <h2 class="subhead">Summary</h2> <p>All eigenvalues of <em>S</em>
  are positive.<br /> Energy <em>x</em><sup>T</sup><em>Sx</em> is positive for
  <em>x</em> \(\neq 0\).<br /> All pivots are positive <em>S</em> =
  <em>A</em><sup>T</sup><em>A</em> with independent columns in <em>A.</em><br />
  All leading determinants are positive 5 EQUIVALENT TESTS.<br /> Second
  derivative matrix is positive definite at a minimum point.<br /> Semidefinite
  allows zero evalues/energy/pivots/determinants.</p> <p>Related section in
  textbook: I.7</p> <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: xsP-S7yKaRA
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    title: Video-YouTube-Stream
    type: Video
    uid: 79eac07257306ff0dff4da0601c0c351
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/xsP-S7yKaRA/default.jpg'
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1604988fff58483c7507be8ed8830d69
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: xsP-S7yKaRA
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c2ef9be00c47a5e9a5e2e45e3c4cd749
  - id: xsP-S7yKaRA.srt
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-5-positive-definite-and-semidefinite-matrices/xsP-S7yKaRA.srt
    title: 3play caption file
    type: null
    uid: a700b283d7185e95f43c226e91764e22
  - id: xsP-S7yKaRA.pdf
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-5-positive-definite-and-semidefinite-matrices/xsP-S7yKaRA.pdf
    title: 3play pdf file
    type: null
    uid: fdfd63a2ed5a54bd6b927fee250ea7bd
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a112b8ebae9bba72133bd5adee2d7648
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0c16e4d164af796d0d47049dd3521a0b
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture05_300k.mp4'
    parent_uid: c7517d37c7aa58f639adf87b01e4e892
    title: Video-Internet Archive-MP4
    type: Video
    uid: aa5ab981a9e97aebb941b52fc3a10578
inline_embed_id: 42797807lecture5positivedefiniteandsemidefinitematrices76140079
order_index: 70
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-5-positive-definite-and-semidefinite-matrices
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-5-positive-definite-and-semidefinite-matrices
title: 'Lecture 5: Positive Definite and Semidefinite Matrices'
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
  m="18290">ocw.mit.edu.</span></p><p><span m="24235">GILBERT STRANG:</span>
  <span m="24720">OK,</span> <span m="25140">let</span> <span
  m="25230">me</span> <span m="25380">make</span> <span m="25620">a</span> <span
  m="25680">start.</span> <span m="28470">On</span> <span m="28590">the</span>
  <span m="28680">left,</span> <span m="29090">you</span> <span
  m="29220">see</span> <span m="30090">the</span> <span m="30960">topic</span>
  <span m="31440">for</span> <span m="31650">today.</span> <span
  m="33390">We're</span> <span m="33600">doing</span> <span
  m="33840">pretty</span> <span m="34140">well.</span> <span
  m="34470">This</span> <span m="34800">completes</span> <span
  m="35880">my</span> <span m="36990">review</span> <span m="37650">of</span>
  <span m="37770">the</span> <span m="37890">highlights</span> <span
  m="38460">of</span> <span m="38790">linear</span> <span
  m="39090">algebra,</span> <span m="40200">so</span> <span
  m="40470">that's</span> <span m="40790">five</span> <span
  m="41220">lectures.</span></p><p><span m="44550">I'll</span> <span
  m="45510">follow</span> <span m="45900">up</span> <span m="46140">on</span>
  <span m="46290">those</span> <span m="46560">five</span> <span
  m="47010">points,</span> <span m="47550">because</span> <span
  m="48150">the</span> <span m="48840">neat</span> <span m="49140">part</span>
  <span m="49500">is</span> <span m="50100">it</span> <span
  m="50220">really</span> <span m="50550">ties</span> <span
  m="51030">together</span> <span m="51510">the</span> <span
  m="51630">whole</span> <span m="51870">subject.</span> <span
  m="52860">Eigenvalues,</span> <span m="54690">energy,</span> <span
  m="56670">A</span> <span m="56910">transpose</span> <span m="57720">A,</span>
  <span m="58170">determinants,</span> <span m="59220">pivots--</span> <span
  m="62010">they</span> <span m="62160">all</span> <span m="62340">come</span>
  <span m="62610">together.</span> <span m="63760">Each</span> <span
  m="63960">one</span> <span m="64410">gives</span> <span m="64769">a</span>
  <span m="64860">test</span> <span m="65400">for</span> <span
  m="65700">positive</span> <span m="66045">and</span> <span
  m="66390">definite</span> <span m="66840">matrices.</span> <span
  m="68280">That's</span> <span m="68520">where</span> <span
  m="68700">I'm</span> <span m="68850">going.</span></p><p><span
  m="70470">Claire</span> <span m="72570">is</span> <span
  m="72750">hoping</span> <span m="73080">to</span> <span m="73170">come</span>
  <span m="73440">in</span> <span m="73920">for</span> <span m="75390">a</span>
  <span m="75450">little</span> <span m="75690">bit</span> <span
  m="75900">of</span> <span m="75990">the</span> <span m="76140">class</span>
  <span m="76770">to</span> <span m="77460">ask</span> <span m="78060">if</span>
  <span m="78930">anybody</span> <span m="79440">has</span> <span
  m="79620">started</span> <span m="80220">on</span> <span m="81630">the</span>
  <span m="81720">homework.</span> <span m="83080">And</span> <span
  m="83880">got</span> <span m="84300">Julia</span> <span
  m="85260">rolling,</span> <span m="86100">and</span> <span
  m="87060">got</span> <span m="87360">a</span> <span m="87450">yes</span> <span
  m="88020">from</span> <span m="88380">the</span> <span m="89130">auto</span>
  <span m="89550">grader.</span> <span m="91110">Is</span> <span
  m="91320">anybody</span> <span m="91920">like--</span> <span
  m="94820">no.</span> <span m="97190">You're</span> <span
  m="97430">taking</span> <span m="97820">a</span> <span
  m="97910">chance,</span> <span m="98540">right?</span> <span
  m="100760">Julia,</span> <span m="101270">in</span> <span
  m="101420">principle,</span> <span m="101990">works,</span> <span
  m="102600">but</span> <span m="103250">in</span> <span
  m="103790">practice,</span> <span m="104870">it's</span> <span
  m="105110">always</span> <span m="105440">an</span> <span
  m="105830">adventure</span> <span m="106460">the</span> <span
  m="106610">first</span> <span m="106970">time.</span></p><p><span
  m="107960">So</span> <span m="108170">we</span> <span m="108410">chose</span>
  <span m="109070">this</span> <span m="110540">lab</span> <span
  m="110990">on</span> <span m="111260">convolution,</span> <span
  m="112160">because</span> <span m="112580">it</span> <span
  m="112670">was</span> <span m="112850">the</span> <span
  m="112940">first</span> <span m="113300">lab</span> <span
  m="114860">last</span> <span m="115220">year,</span> <span
  m="115580">and</span> <span m="115940">it</span> <span
  m="117170">doesn't</span> <span m="117560">ask</span> <span
  m="117860">for</span> <span m="118240">much</span> <span
  m="118760">math</span> <span m="119180">at</span> <span m="119330">all.</span>
  <span m="120020">Really,</span> <span m="120440">you're just</span> <span
  m="120680">creating</span> <span m="121190">a</span> <span
  m="121250">matrix</span> <span m="122300">and</span> <span
  m="122630">getting</span> <span m="123020">the</span> <span
  m="123170">auto</span> <span m="123500">grader</span> <span
  m="123920">to</span> <span m="124040">say,</span> <span m="124370">yes,</span>
  <span m="124770">that's</span> <span m="125090">the</span> <span
  m="125210">right</span> <span m="125540">matrix.</span></p><p><span
  m="130288">And</span> <span m="130789">we'll</span> <span
  m="131030">see</span> <span m="131300">that</span> <span
  m="131510">matrix.</span> <span m="132190">We'll</span> <span
  m="132410">see</span> <span m="132650">this</span> <span
  m="132980">idea</span> <span m="133370">of</span> <span
  m="133460">convolution</span> <span m="135620">at</span> <span
  m="135830">the</span> <span m="135920">right</span> <span
  m="136160">time,</span> <span m="136880">which</span> <span
  m="137120">is</span> <span m="137240">not</span> <span m="137480">that</span>
  <span m="137690">far</span> <span m="138020">off.</span> <span
  m="138440">It's</span> <span m="139580">signal</span> <span
  m="140000">processing,</span> <span m="140780">and</span> <span
  m="140930">it's</span> <span m="141830">early</span> <span
  m="142320">in</span> <span m="143900">part</span> <span
  m="144170">three</span> <span m="144530">of</span> <span m="144650">the</span>
  <span m="144770">book.</span></p><p><span m="147880">If</span> <span
  m="148040">Claire</span> <span m="148370">comes</span> <span
  m="148760">in,</span> <span m="149000">she'll</span> <span
  m="149360">answer</span> <span m="149750">questions.</span> <span
  m="150990">Otherwise,</span> <span m="151490">I</span> <span
  m="151580">guess</span> <span m="151850">it</span> <span
  m="151940">would</span> <span m="152060">be</span> <span
  m="152300">emailing</span> <span m="152960">questions</span> <span
  m="153960">to--</span> <span m="156440">I</span> <span
  m="156590">realize</span> <span m="157040">that</span> <span
  m="157160">the</span> <span m="157280">deadline</span> <span
  m="157820">is</span> <span m="157970">not</span> <span m="158540">on</span>
  <span m="158720">top</span> <span m="158990">of</span> <span
  m="159140">you,</span> <span m="160070">and</span> <span
  m="160650">you've</span> <span m="160790">got</span> <span m="161030">a</span>
  <span m="161540">whole</span> <span m="161930">weekend</span> <span
  m="162540">to</span> <span m="162710">make</span> <span
  m="162980">Julia</span> <span m="164090">fly.</span></p><p><span
  m="168170">I'll</span> <span m="168350">start</span> <span
  m="168770">on</span> <span m="168890">the</span> <span m="168980">math</span>
  <span m="169710">then.</span> <span m="171260">We</span> <span
  m="171470">had</span> <span m="171710">symmetric--</span> <span
  m="172670">eigenvalues</span> <span m="173510">of</span> <span
  m="173570">matrices,</span> <span m="174410">and</span> <span
  m="174520">especially</span> <span m="175070">symmetric</span> <span
  m="175700">matrices,</span> <span m="176810">and</span> <span
  m="176900">those</span> <span m="177200">have</span> <span
  m="177410">real</span> <span m="177890">eigenvalues,</span> <span
  m="178730">and</span> <span m="178880">I'll</span> <span
  m="179480">quickly</span> <span m="179960">show</span> <span
  m="180300">why.</span> <span m="181730">And</span> <span
  m="181970">orthogonal</span> <span m="182670">eigenvectors,</span> <span
  m="183800">and</span> <span m="183920">I'll</span> <span
  m="184070">quickly</span> <span m="184580">show</span> <span
  m="184850">why.</span></p><p><span m="185780">But</span> <span
  m="186470">I</span> <span m="186560">want</span> <span m="186770">to</span>
  <span m="186830">move</span> <span m="187340">to</span> <span
  m="187610">the</span> <span m="188720">new</span> <span
  m="188990">idea--</span> <span m="190850">positive</span> <span
  m="191540">definite</span> <span m="192140">matrices.</span> <span
  m="193580">These</span> <span m="193910">are</span> <span
  m="193970">the</span> <span m="194120">best</span> <span m="194600">of</span>
  <span m="194750">the</span> <span m="194870">symmetric</span> <span
  m="195470">matrices.</span> <span m="197120">They</span> <span
  m="197290">are</span> <span m="197390">symmetric</span> <span
  m="198020">matrices</span> <span m="198860">that</span> <span
  m="199040">have</span> <span m="199850">positive</span> <span
  m="200540">eigenvalues.</span> <span m="201320">That's</span> <span
  m="201590">the</span> <span m="201680">easy</span> <span m="202070">way</span>
  <span m="202310">to</span> <span m="202430">remember</span> <span
  m="203450">positive</span> <span m="203990">definite</span> <span
  m="204470">matrices.</span> <span m="205250">They</span> <span
  m="205400">have</span> <span m="205850">positive</span> <span
  m="206480">eigenvalues,</span> <span m="207710">but</span> <span
  m="207890">it's</span> <span m="208010">certainly</span> <span
  m="208370">not</span> <span m="208610">the</span> <span m="208730">easy</span>
  <span m="209060">way</span> <span m="209210">to</span> <span
  m="209360">test.</span></p><p><span m="210200">If</span> <span
  m="210380">I</span> <span m="210500">give</span> <span m="210710">you</span>
  <span m="210830">a</span> <span m="210890">matrix</span> <span
  m="211430">like</span> <span m="211700">that,</span> <span
  m="212960">that's</span> <span m="213260">only</span> <span
  m="213530">two</span> <span m="213740">by</span> <span m="213920">two.</span>
  <span m="214160">We</span> <span m="214310">could</span> <span
  m="214580">actually</span> <span m="214970">find</span> <span
  m="215300">the</span> <span m="215450">eigenvalues,</span> <span
  m="216680">but</span> <span m="217400">we</span> <span m="217580">would</span>
  <span m="217760">like</span> <span m="218150">to</span> <span
  m="218330">have</span> <span m="218840">other</span> <span
  m="219110">tests,</span> <span m="219830">easier</span> <span
  m="220310">tests,</span> <span m="221330">which</span> <span
  m="221600">would</span> <span m="221840">be</span> <span
  m="223400">equivalent</span> <span m="223970">to</span> <span
  m="224180">positive</span> <span m="224720">eigenvalues.</span> <span
  m="227420">Every</span> <span m="227780">one</span> <span m="227990">of</span>
  <span m="228050">those</span> <span m="228320">five</span> <span
  m="228650">tests--</span> <span m="228980">any</span> <span
  m="229340">one</span> <span m="229610">of</span> <span m="229730">those</span>
  <span m="230000">five</span> <span m="230330">tests</span> <span
  m="230830">is</span> <span m="231560">all</span> <span m="231770">you</span>
  <span m="231920">need.</span></p><p><span m="233810">Let</span> <span
  m="233990">me</span> <span m="234980">start</span> <span
  m="235310">with</span> <span m="235460">that</span> <span
  m="235640">example</span> <span m="236900">and</span> <span
  m="237050">ask</span> <span m="237350">you</span> <span m="237470">to</span>
  <span m="237560">look,</span> <span m="237950">and</span> <span
  m="238040">then</span> <span m="238220">I'm</span> <span
  m="238370">going</span> <span m="238520">to</span> <span
  m="238850">discuss</span> <span m="239600">those</span> <span
  m="239930">five</span> <span m="240860">separate</span> <span
  m="241370">points.</span> <span m="244610">My</span> <span
  m="244790">question</span> <span m="245300">is,</span> <span
  m="245960">is</span> <span m="246200">that</span> <span
  m="246410">matrix</span> <span m="247010">s?</span> <span
  m="248680">It's</span> <span m="248900">obviously</span> <span
  m="249410">symmetric.</span> <span m="250610">Is</span> <span
  m="250820">it</span> <span m="250940">positive,</span> <span
  m="251420">definite,</span> <span m="251900">or</span> <span
  m="252050">not?</span></p><p><span m="254690">You</span> <span
  m="254870">could</span> <span m="255110">compute its</span> <span
  m="255740">eigenvalues</span> <span m="256399">since</span> <span
  m="256730">it's</span> <span m="256880">two</span> <span m="257120">by</span>
  <span m="257300">two.</span> <span m="257779">It's</span> <span
  m="257959">energy--</span> <span m="258620">I'll</span> <span
  m="258800">come</span> <span m="259010">back</span> <span m="259250">to</span>
  <span m="259370">that,</span> <span m="259610">because</span> <span
  m="259850">that's</span> <span m="260130">the</span> <span
  m="260209">most</span> <span m="260540">important</span> <span
  m="261019">one.</span> <span m="261529">Number</span> <span
  m="261829">two</span> <span m="262190">is</span> <span
  m="262370">really</span> <span m="263090">fundamental.</span></p><p><span
  m="264320">Number</span> <span m="264620">three</span> <span
  m="265070">would</span> <span m="265400">ask</span> <span
  m="265670">you</span> <span m="265760">to</span> <span
  m="265850">factor</span> <span m="266390">that.</span> <span
  m="266870">Well,</span> <span m="267560">you</span> <span
  m="267680">don't</span> <span m="267860">want</span> <span
  m="268040">to</span> <span m="268700">take</span> <span m="268970">time</span>
  <span m="269300">with</span> <span m="269420">that.</span> <span
  m="270020">Well,</span> <span m="270260">what</span> <span
  m="270410">do</span> <span m="270470">you</span> <span
  m="270590">think?</span> <span m="271610">Is</span> <span m="271850">it</span>
  <span m="271970">positive,</span> <span m="272450">definite,</span> <span
  m="272960">or</span> <span m="273080">not?</span> <span m="273410">I</span>
  <span m="273530">see</span> <span m="273800">an</span> <span
  m="275810">expert</span> <span m="276260">in</span> <span
  m="276350">the</span> <span m="276440">front</span> <span
  m="276680">row</span> <span m="276920">saying</span> <span
  m="277220">no.</span> <span m="279110">Why</span> <span m="279440">is</span>
  <span m="279630">it</span> <span m="279770">no?</span></p><p><span
  m="280610">The</span> <span m="280790">answer</span> <span
  m="281120">is</span> <span m="281330">no.</span> <span
  m="281690">That's</span> <span m="282020">not</span> <span m="282290">a</span>
  <span m="282350">positive</span> <span m="282830">definite</span> <span
  m="283250">matrix.</span> <span m="283790">Where</span> <span
  m="284150">does</span> <span m="284390">it</span> <span m="284810">let</span>
  <span m="285050">us</span> <span m="285200">down?</span> <span
  m="286170">It's</span> <span m="286250">got</span> <span m="286460">all</span>
  <span m="286640">positive</span> <span m="287120">numbers,</span> <span
  m="287540">but</span> <span m="287690">that's</span> <span
  m="287960">not</span> <span m="288170">what</span> <span
  m="288320">we're</span> <span m="288500">asking.</span> <span
  m="289580">We're</span> <span m="289700">asking</span> <span
  m="290120">positive</span> <span m="290690">eigenvalues,</span> <span
  m="291560">positive</span> <span m="292070">determinants,</span> <span
  m="292910">positive</span> <span m="293390">pivots.</span> <span
  m="296630">How</span> <span m="296810">does</span> <span m="297000">it</span>
  <span m="297110">let</span> <span m="297320">us</span> <span
  m="297470">down?</span> <span m="299270">Which</span> <span
  m="299540">is</span> <span m="299660">the</span> <span m="299780">easy</span>
  <span m="300170">test</span> <span m="300590">to</span> <span
  m="300710">see</span> <span m="301670">that</span> <span m="301850">it</span>
  <span m="301970">fails?</span></p><p><span m="302510">AUDIENCE:</span> <span
  m="302730">Maybe</span> <span m="303560">determinant?</span></p><p><span
  m="304370">GILBERT STRANG:</span> <span m="304580">Determinant.</span> <span
  m="304970">The</span> <span m="305360">determinant</span> <span
  m="305930">is</span> <span m="306320">15</span> <span m="306830">minus</span>
  <span m="307170">16,</span> <span m="308980">so</span> <span
  m="309240">negative.</span> <span m="312120">So</span> <span
  m="312330">how</span> <span m="312550">is</span> <span m="312690">the</span>
  <span m="312810">determinant</span> <span m="313440">connected</span> <span
  m="313950">to</span> <span m="314130">the</span> <span
  m="314310">eigenvalues?</span> <span m="317520">Everybody?</span> <span
  m="318360">Yep.</span></p><p><span m="318820">AUDIENCE:</span> <span
  m="319050">[INAUDIBLE]</span></p><p><span m="319280">GILBERT STRANG:</span>
  <span m="319395">It's</span> <span m="319510">the</span> <span
  m="319590">product.</span> <span m="320700">So</span> <span
  m="320970">the</span> <span m="321120">two</span> <span
  m="321360">eigenvalues</span> <span m="322110">of</span> <span
  m="322200">s,</span> <span m="322650">they're</span> <span
  m="322860">real,</span> <span m="323310">of</span> <span
  m="323370">course,</span> <span m="324880">and</span> <span
  m="325010">they</span> <span m="325130">multiply</span> <span
  m="325760">to</span> <span m="325880">give</span> <span m="326120">the</span>
  <span m="326270">determinant,</span> <span m="327000">which</span> <span
  m="327140">is</span> <span m="327290">minus</span> <span m="327740">1.</span>
  <span m="328600">So</span> <span m="329030">one</span> <span
  m="329240">of</span> <span m="329300">them</span> <span m="329480">is</span>
  <span m="329600">negative,</span> <span m="330110">and</span> <span
  m="330200">one</span> <span m="330410">of</span> <span m="330470">them</span>
  <span m="330620">is</span> <span m="330770">positive.</span> <span
  m="331670">This</span> <span m="332180">matrix</span> <span
  m="332780">is</span> <span m="332990">an</span> <span
  m="333290">indefinite</span> <span m="334130">matrix--</span> <span
  m="335300">indefinite.</span></p><p><span m="336650">So</span> <span
  m="337580">how</span> <span m="337790">could</span> <span m="338030">I</span>
  <span m="338240">make</span> <span m="338690">it</span> <span
  m="339800">positive</span> <span m="340430">definite?</span> <span
  m="341000">OK.</span> <span m="342080">We</span> <span m="342290">can</span>
  <span m="342410">just</span> <span m="342620">play</span> <span
  m="342920">with</span> <span m="343160">an</span> <span
  m="343340">example,</span> <span m="344000">and</span> <span
  m="344120">then</span> <span m="344330">we</span> <span m="345740">see</span>
  <span m="346100">these</span> <span m="346400">things</span> <span
  m="346790">happening.</span> <span m="348840">Let's</span> <span
  m="349040">see.</span></p><p><span m="350540">OK,</span> <span
  m="350930">what</span> <span m="351470">shall</span> <span m="351650">I</span>
  <span m="351740">put</span> <span m="352030">in</span> <span
  m="352250">place</span> <span m="352640">of</span> <span m="352730">the</span>
  <span m="352850">5,</span> <span m="354320">for</span> <span
  m="354500">example?</span> <span m="355850">I</span> <span
  m="355970">could</span> <span m="356180">lower</span> <span
  m="356600">the</span> <span m="356750">4,</span> <span m="357260">or</span>
  <span m="357440">I</span> <span m="357560">can</span> <span
  m="357770">up</span> <span m="358050">the</span> <span m="358160">5,</span>
  <span m="359270">or</span> <span m="359480">up</span> <span
  m="359690">the</span> <span m="359840">3.</span> <span m="360500">I</span>
  <span m="360590">can</span> <span m="360740">make</span> <span
  m="360990">the</span> <span m="361340">diagonal</span> <span
  m="362000">entries.</span> <span m="362450">If</span> <span
  m="362600">I</span> <span m="362720">add</span> <span m="363440">stuff</span>
  <span m="363740">to</span> <span m="363860">the</span> <span
  m="364160">main</span> <span m="364520">diagonal,</span> <span
  m="365180">I'm</span> <span m="365360">making</span> <span
  m="365750">it</span> <span m="365870">more</span> <span
  m="366110">positive.</span> <span m="368870">So</span> <span
  m="369170">that's</span> <span m="369530">the</span> <span
  m="370580">straightforward</span> <span m="371390">way.</span></p><p><span
  m="372230">So</span> <span m="372800">what</span> <span
  m="373360">number</span> <span m="373850">in</span> <span
  m="373970">there</span> <span m="374210">would</span> <span
  m="374420">be</span> <span m="374600">safe?</span></p><p><span
  m="375420">AUDIENCE:</span> <span m="375597">6.</span></p><p><span
  m="376130">GILBERT STRANG:</span> <span m="376265">6.</span> <span
  m="377400">OK.</span> <span m="377900">6</span> <span m="378290">would</span>
  <span m="378470">be</span> <span m="378650">safe.</span> <span
  m="379880">If</span> <span m="380030">I</span> <span m="380150">go</span>
  <span m="380360">up</span> <span m="380510">from</span> <span
  m="380720">5</span> <span m="381080">to</span> <span m="381200">6,</span>
  <span m="381740">I've</span> <span m="381920">gotta</span> <span
  m="382270">de--</span> <span m="383300">so</span> <span m="383480">when</span>
  <span m="383690">I</span> <span m="383870">say</span> <span
  m="384140">here</span> <span m="385040">&quot;leading</span> <span
  m="385700">determinants,&quot;</span> <span m="386540">what</span> <span
  m="386810">does</span> <span m="387050">that</span> <span
  m="387260">mean?</span> <span m="389240">That</span> <span
  m="389480">word</span> <span m="389770">leading</span> <span
  m="390350">means</span> <span m="390740">something.</span> <span
  m="391520">It</span> <span m="391670">means</span> <span
  m="392150">that</span> <span m="392330">I</span> <span m="392480">take</span>
  <span m="392840">that</span> <span m="393350">1</span> <span
  m="393680">by</span> <span m="393890">1</span> <span
  m="394160">determinant--</span> <span m="394910">it</span> <span
  m="395000">would</span> <span m="395150">have</span> <span
  m="395330">to</span> <span m="395450">pass</span> <span
  m="395810">that.</span> <span m="396920">Just</span> <span
  m="397190">the</span> <span m="397310">determinant</span> <span
  m="397910">itself</span> <span m="398420">would</span> <span
  m="398600">not</span> <span m="398840">do</span> <span
  m="399080">it.</span></p><p><span m="399360">Let</span> <span
  m="399410">me</span> <span m="399530">give</span> <span m="399740">you</span>
  <span m="399860">an</span> <span m="399980">example.</span> <span
  m="401480">No</span> <span m="402890">for--</span> <span m="404520">let</span>
  <span m="404720">me</span> <span m="404880">take</span> <span
  m="405440">minus</span> <span m="406190">3</span> <span m="406580">and</span>
  <span m="406730">minus</span> <span m="407210">6.</span> <span
  m="408470">That</span> <span m="408680">would</span> <span
  m="408890">have</span> <span m="409130">the</span> <span
  m="409280">same</span> <span m="409700">determinant.</span> <span
  m="415010">The</span> <span m="415130">determinant</span> <span
  m="415730">would</span> <span m="415910">still</span> <span
  m="416150">be</span> <span m="416360">18</span> <span m="416930">minus</span>
  <span m="417230">16--</span> <span m="417890">2.</span> <span
  m="418730">But</span> <span m="419630">it</span> <span m="420110">fails</span>
  <span m="420740">the</span> <span m="421250">test</span> <span
  m="421730">on</span> <span m="422360">the</span> <span m="422450">1</span>
  <span m="422720">by</span> <span m="422900">1.</span></p><p><span
  m="424550">And</span> <span m="424680">this</span> <span
  m="424920">passes.</span> <span m="425550">This</span> <span
  m="425760">passes</span> <span m="426240">the</span> <span m="426360">1</span>
  <span m="426600">by</span> <span m="426810">1</span> <span
  m="427080">test</span> <span m="427860">and</span> <span m="428160">2</span>
  <span m="428370">by</span> <span m="428580">2</span> <span
  m="428820">tests.</span> <span m="429280">So</span> <span
  m="429330">that's</span> <span m="429600">what</span> <span
  m="429840">this</span> <span m="430650">means</span> <span
  m="431130">here.</span></p><p><span m="431890">Leading</span> <span
  m="432360">determinants</span> <span m="433200">are</span> <span
  m="433800">from</span> <span m="434040">the</span> <span
  m="434190">upper</span> <span m="434460">left.</span> <span
  m="435480">You</span> <span m="435630">have</span> <span m="435810">to</span>
  <span m="435960">check</span> <span m="436290">n</span> <span
  m="436620">things</span> <span m="437130">because</span> <span
  m="437340">you've</span> <span m="437460">got</span> <span m="437640">n</span>
  <span m="437910">eigenvalues.</span> <span m="439260">And</span> <span
  m="439830">those</span> <span m="440280">are</span> <span
  m="440370">the</span> <span m="440550">n</span> <span
  m="440970">tests.</span></p><p><span m="442620">And</span> <span
  m="442740">have</span> <span m="442950">you</span> <span
  m="443070">noticed</span> <span m="443580">the</span> <span
  m="443760">connection</span> <span m="444360">to</span> <span
  m="444540">pivots?</span> <span m="445710">So</span> <span
  m="445890">let's</span> <span m="446160">just</span> <span
  m="447570">remember</span> <span m="448020">that</span> <span
  m="448770">small</span> <span m="449250">item.</span> <span
  m="450900">What</span> <span m="451110">would</span> <span
  m="451290">be</span> <span m="451470">the</span> <span
  m="451590">pivots</span> <span m="453900">because</span> <span
  m="454170">we</span> <span m="454320">didn't</span> <span
  m="455070">take</span> <span m="455340">a</span> <span m="455400">long</span>
  <span m="455670">time</span> <span m="456030">on</span> <span
  m="456150">elimination?</span></p><p><span m="457660">So</span> <span
  m="457890">what</span> <span m="458160">would</span> <span
  m="458340">be</span> <span m="458550">the</span> <span
  m="458700">pivots</span> <span m="460400">for</span> <span
  m="461520">that</span> <span m="461730">matrix,</span> <span
  m="462320">3-4-4-6?</span> <span m="463380">Well,</span> <span
  m="463550">what's</span> <span m="463830">the</span> <span
  m="463920">first</span> <span m="464250">pivot?</span> <span
  m="465870">3,</span> <span m="466410">sitting</span> <span
  m="466830">there--</span> <span m="467180">the</span> <span
  m="467330">1-1</span> <span m="467910">entry</span> <span
  m="468270">would</span> <span m="468360">be</span> <span m="468510">the</span>
  <span m="469080">first</span> <span m="469440">pivot.</span> <span
  m="470250">So</span> <span m="470400">the</span> <span
  m="470520">pivots</span> <span m="471030">would</span> <span
  m="471210">be</span> <span m="471930">3,</span> <span m="473760">and</span>
  <span m="475260">what's</span> <span m="475560">the</span> <span
  m="475650">second</span> <span m="476100">pivot?</span> <span
  m="476520">Well,</span> <span m="477480">maybe</span> <span
  m="477820">to</span> <span m="477940">see</span> <span m="478200">it</span>
  <span m="478320">clearly</span> <span m="478860">you</span> <span
  m="479070">want</span> <span m="479280">me</span> <span m="479430">to</span>
  <span m="479580">take</span> <span m="479970">that</span> <span
  m="480660">elimination</span> <span m="481500">step.</span> <span
  m="481950">Why</span> <span m="482130">don't</span> <span m="482340">I</span>
  <span m="482520">do</span> <span m="482730">it</span> <span
  m="483570">just</span> <span m="483750">so</span> <span
  m="483990">you'll</span> <span m="484140">see</span> <span
  m="484380">it</span> <span m="484500">here?</span></p><p><span
  m="485280">So</span> <span m="485520">elimination</span> <span
  m="486900">would</span> <span m="487590">subtract</span> <span
  m="488270">some</span> <span m="488510">multiple</span> <span
  m="489180">of</span> <span m="489300">row</span> <span m="489510">1</span>
  <span m="489870">from</span> <span m="490110">row</span> <span
  m="490350">2.</span> <span m="491290">I</span> <span m="491400">would</span>
  <span m="491580">leave</span> <span m="491910">1</span> <span
  m="492120">one</span> <span m="492450">alone.</span> <span m="493740">I</span>
  <span m="493830">would</span> <span m="494040">subtract</span> <span
  m="494690">some</span> <span m="494770">multiple</span> <span m="495330">to
  get a</span> <span m="495720">0</span> <span m="496200">there.</span> <span
  m="496530">And</span> <span m="497220">what's</span> <span
  m="497580">the</span> <span m="497700">multiple?</span> <span
  m="498270">What's</span> <span m="498540">the</span> <span
  m="499050">multiplier?</span></p><p><span m="500550">AUDIENCE:</span> <span
  m="500655">In</span> <span m="500760">that</span> <span
  m="500970">much--</span></p><p><span m="501570">GILBERT STRANG:</span> <span
  m="501720">4/3.</span> <span m="502940">4/3</span> <span
  m="503790">times</span> <span m="504300">row</span> <span m="505110">1,</span>
  <span m="506190">away</span> <span m="506490">from</span> <span
  m="506730">row</span> <span m="506970">2,</span> <span m="508070">would</span>
  <span m="508290">produce</span> <span m="508830">that</span> <span
  m="509110">0.</span> <span m="509940">But</span> <span m="510180">4/3</span>
  <span m="510990">times</span> <span m="511320">the</span> <span
  m="511440">4,</span> <span m="511920">that</span> <span
  m="512130">would</span> <span m="512309">be</span> <span
  m="513360">16/3.</span> <span m="515190">And</span> <span
  m="515309">we're</span> <span m="516150">subtracting</span> <span
  m="516900">it</span> <span m="516990">from</span> <span
  m="517230">18/3.</span> <span m="518250">I</span> <span
  m="518400">think</span> <span m="518640">we've</span> <span
  m="518850">got</span> <span m="519059">2/3</span> <span
  m="519750">left.</span></p><p><span m="523960">So</span> <span
  m="524169">the</span> <span m="524260">pivots,</span> <span
  m="525790">which</span> <span m="526060">is</span> <span
  m="526360">this,</span> <span m="527506">in</span> <span
  m="527930">elimination,</span> <span m="528880">are</span> <span
  m="529120">the</span> <span m="529270">3</span> <span m="529840">and</span>
  <span m="530000">the</span> <span m="530110">2/3.</span> <span
  m="530710">And</span> <span m="530830">of</span> <span
  m="530920">course,</span> <span m="531190">they're</span> <span
  m="531370">positive.</span> <span m="532210">And</span> <span
  m="532390">actually,</span> <span m="533260">you</span> <span
  m="533440">see</span> <span m="533740">the</span> <span
  m="533890">immediate</span> <span m="534400">connection.</span></p><p><span
  m="535300">This</span> <span m="535540">pivot</span> <span
  m="536860">is</span> <span m="537130">the</span> <span m="537820">2</span>
  <span m="538090">by</span> <span m="538330">2</span> <span
  m="538690">determinant</span> <span m="540430">divided</span> <span
  m="541000">by</span> <span m="541270">the</span> <span m="541390">1</span>
  <span m="541750">by</span> <span m="541990">1</span> <span
  m="542320">determinant.</span> <span m="544690">The</span> <span
  m="544780">2</span> <span m="544990">by</span> <span m="545220">2</span> <span
  m="545740">determinant,</span> <span m="546280">we</span> <span
  m="546430">figured</span> <span m="546790">out--</span> <span
  m="547000">18</span> <span m="548320">minus</span> <span m="548620">16</span>
  <span m="549220">was</span> <span m="549460">2.</span> <span
  m="550460">The</span> <span m="550660">1</span> <span m="550960">by</span>
  <span m="551200">1</span> <span m="551500">determinant</span> <span
  m="552190">is</span> <span m="552400">3.</span> <span m="553510">And</span>
  <span m="553780">sure</span> <span m="554050">enough,</span> <span
  m="555100">that</span> <span m="555310">second</span> <span
  m="555730">pivot</span> <span m="556150">is</span> <span
  m="556420">2/3.</span></p><p><span m="558970">This</span> <span
  m="559180">is</span> <span m="559300">not--</span> <span m="563470">so</span>
  <span m="566350">by</span> <span m="566860">example,</span> <span
  m="567580">I'm</span> <span m="568420">illustrating</span> <span
  m="569260">what</span> <span m="569590">these</span> <span
  m="572200">different</span> <span m="572650">tests--</span> <span
  m="573970">and</span> <span m="574000">again,</span> <span
  m="574480">each</span> <span m="574780">test</span> <span m="575290">is</span>
  <span m="575470">all</span> <span m="575650">you</span> <span
  m="575830">need.</span> <span m="577030">If</span> <span m="577210">it</span>
  <span m="577270">passes</span> <span m="577750">one</span> <span
  m="578020">test,</span> <span m="578440">it</span> <span
  m="578530">passes</span> <span m="579040">them</span> <span
  m="579190">all.</span> <span m="579790">And</span> <span m="580270">we</span>
  <span m="580450">haven't</span> <span m="580720">found</span> <span
  m="581020">the</span> <span m="581170">eigenvalues.</span></p><p><span
  m="582370">Let</span> <span m="582490">me</span> <span m="582610">do</span>
  <span m="582790">the</span> <span m="582940">energy.</span> <span
  m="584200">Can</span> <span m="584410">I</span> <span m="584500">do</span>
  <span m="584740">energy</span> <span m="585190">here?</span> <span
  m="586260">OK.</span> <span m="586610">So</span> <span
  m="586810">what's</span> <span m="587110">this--</span> <span
  m="588190">I</span> <span m="590240">am</span> <span m="590440">saying</span>
  <span m="590800">that</span> <span m="590950">this</span> <span
  m="591280">is</span> <span m="591490">really</span> <span
  m="593200">the</span> <span m="593350">great</span> <span
  m="593710">test.</span></p><p><span m="594620">That,</span> <span
  m="595240">for</span> <span m="595420">me,</span> <span m="595730">is</span>
  <span m="595930">the</span> <span m="596110">definition</span> <span
  m="597370">of</span> <span m="597550">a</span> <span
  m="597640">positive</span> <span m="598300">definite</span> <span
  m="598780">matrix.</span> <span m="599860">And</span> <span
  m="600790">the</span> <span m="600910">word</span> <span
  m="601180">&quot;energy&quot;</span> <span m="601660">comes</span> <span
  m="602080">in</span> <span m="602350">because</span> <span
  m="602830">it's</span> <span m="603610">quadratic,</span> <span
  m="604360">[INAUDIBLE]</span> <span m="604720">kinetic</span> <span
  m="605290">energy</span> <span m="605860">or</span> <span
  m="606430">potential</span> <span m="607120">energy.</span> <span
  m="608090">So</span> <span m="608170">that's</span> <span
  m="608440">the</span> <span m="608590">energy</span> <span
  m="609670">in</span> <span m="609910">the</span> <span
  m="610030">vector</span> <span m="610480">x</span> <span m="611620">for</span>
  <span m="611830">this</span> <span m="612100">matrix.</span></p><p><span
  m="613060">So</span> <span m="613240">let</span> <span m="613390">me</span>
  <span m="613540">compute</span> <span m="613990">it,</span> <span
  m="614260">x</span> <span m="614530">transpose</span> <span
  m="615130">Sx.</span> <span m="615640">So</span> <span m="615820">let</span>
  <span m="615940">me</span> <span m="616390">put</span> <span
  m="616660">in</span> <span m="616890">S</span> <span m="617290">here,</span>
  <span m="618460">the</span> <span m="618580">original</span> <span
  m="619150">S.</span> <span m="623170">And</span> <span m="623740">let</span>
  <span m="623920">me</span> <span m="624400">put</span> <span
  m="624610">in</span> <span m="624750">of</span> <span m="625000">any</span>
  <span m="625300">vector</span> <span m="625750">x,</span> <span
  m="626050">so,</span> <span m="626410">say</span> <span m="626710">xy</span>
  <span m="627400">or</span> <span m="627820">x1.</span> <span
  m="628580">Maybe--</span> <span m="629650">do you</span> <span
  m="629770">like</span> <span m="630040">x--</span> <span m="630625">xy</span>
  <span m="631030">is</span> <span m="631270">easier.</span></p><p><span
  m="632620">So</span> <span m="633070">that's</span> <span
  m="633340">our</span> <span m="633430">vector</span> <span m="633820">x</span>
  <span m="634780">transposed.</span> <span m="636130">This</span> <span
  m="636310">is</span> <span m="636460">our</span> <span
  m="636610">matrix</span> <span m="637180">S.</span> <span
  m="638110">And</span> <span m="638350">here's</span> <span
  m="638770">our</span> <span m="638890">vector</span> <span
  m="639360">x.</span></p><p><span m="641500">So</span> <span
  m="641680">it's</span> <span m="641800">a</span> <span
  m="641890">function</span> <span m="643330">of</span> <span
  m="643480">x</span> <span m="643690">and</span> <span m="643840">y.</span>
  <span m="645100">It's</span> <span m="645310">a</span> <span
  m="645820">pure</span> <span m="646330">quadratic</span> <span
  m="646990">function.</span> <span m="648400">Do</span> <span
  m="648490">you</span> <span m="648580">know</span> <span
  m="648790">what</span> <span m="649060">I</span> <span m="649180">get</span>
  <span m="649570">when</span> <span m="649750">I</span> <span
  m="649840">multiply</span> <span m="650440">that</span> <span
  m="650710">out?</span> <span m="651730">I</span> <span m="651820">get</span>
  <span m="652030">a</span> <span m="652090">very</span> <span
  m="652540">simple,</span> <span m="652990">important</span> <span
  m="653500">type</span> <span m="653800">of</span> <span
  m="653890">function.</span> <span m="655590">Shall</span> <span
  m="655810">we</span> <span m="655960">multiply</span> <span
  m="656500">it</span> <span m="656620">out?</span></p><p><span
  m="658930">Let's</span> <span m="659110">see.</span> <span
  m="659380">Shall</span> <span m="659620">I</span> <span
  m="659680">multiply</span> <span m="660100">that</span> <span
  m="660340">by</span> <span m="660520">that</span> <span
  m="660790">first,</span> <span m="661360">so</span> <span m="661570">I</span>
  <span m="661660">get</span> <span m="662290">3x</span> <span
  m="663010">plus</span> <span m="663280">4y?</span> <span m="665380">And</span>
  <span m="665650">4x</span> <span m="666280">plus</span> <span
  m="666520">6y</span> <span m="668920">is</span> <span m="669130">what</span>
  <span m="669370">I'm</span> <span m="669790">getting</span> <span
  m="670210">from</span> <span m="670480">these</span> <span
  m="671530">two.</span> <span m="671890">And</span> <span m="671980">now</span>
  <span m="672250">I'm</span> <span m="673330">hitting</span> <span
  m="673690">that</span> <span m="673930">with</span> <span
  m="674170">the</span> <span m="674320">xy.</span></p><p><span
  m="676100">And</span> <span m="676210">now</span> <span m="676390">I'm</span>
  <span m="676540">going</span> <span m="676650">to</span> <span
  m="676780">see</span> <span m="677080">the</span> <span
  m="677230">energy.</span> <span m="678950">And</span> <span
  m="679100">you'll</span> <span m="679340">see</span> <span
  m="679790">the</span> <span m="679940">pattern.</span> <span
  m="680870">That's</span> <span m="681140">always</span> <span
  m="681650">what</span> <span m="681830">math</span> <span m="682160">is</span>
  <span m="682340">about.</span> <span m="682670">What's</span> <span
  m="682970">the</span> <span m="683090">pattern?</span></p><p><span
  m="683990">So</span> <span m="684230">I've</span> <span m="684440">x</span>
  <span m="684770">times</span> <span m="685070">3x,</span> <span
  m="685760">3x</span> <span m="686270">squared.</span> <span m="687920">And I
  have</span> <span m="688350">y</span> <span m="688820">times</span> <span
  m="689180">6y.</span> <span m="689960">That's</span> <span
  m="690200">6y</span> <span m="690890">squared.</span> <span
  m="692510">And</span> <span m="692750">I</span> <span m="692840">have</span>
  <span m="693170">x</span> <span m="693530">times</span> <span
  m="693830">4y.</span> <span m="694700">That's</span> <span
  m="694970">for</span> <span m="695330">4xy.</span> <span m="696860">And</span>
  <span m="697010">I have</span> <span m="697310">y</span> <span
  m="697610">times</span> <span m="698000">4x.</span> <span
  m="698690">That's</span> <span m="698960">4</span> <span
  m="699260">more</span> <span m="699590">xy.</span></p><p><span
  m="704060">So</span> <span m="704300">I've</span> <span m="704510">got</span>
  <span m="704870">all</span> <span m="705110">those</span> <span
  m="705410">terms.</span> <span m="705920">Every</span> <span
  m="707150">term,</span> <span m="708320">every</span> <span
  m="708590">number</span> <span m="708980">in</span> <span
  m="709100">the</span> <span m="709190">matrix</span> <span
  m="710720">gives</span> <span m="711020">me</span> <span m="711380">a</span>
  <span m="711560">piece</span> <span m="712130">of</span> <span
  m="712370">the</span> <span m="712490">energy.</span> <span
  m="714620">And</span> <span m="714860">you</span> <span m="715040">see</span>
  <span m="715310">that</span> <span m="715510">the</span> <span
  m="715640">diagonal</span> <span m="716300">numbers,</span> <span
  m="717080">3</span> <span m="717410">and</span> <span m="717560">6,</span>
  <span m="718430">those</span> <span m="718730">give</span> <span
  m="718940">me</span> <span m="719120">the</span> <span
  m="719270">diagonal</span> <span m="719960">pieces,</span> <span
  m="721250">3x</span> <span m="721700">squared</span> <span
  m="722110">and</span> <span m="722240">6y</span> <span
  m="722810">squared.</span></p><p><span m="723830">And</span> <span
  m="723980">then</span> <span m="724250">the</span> <span
  m="724370">cross--</span> <span m="725760">or</span> <span m="726020">I</span>
  <span m="726140">maybe</span> <span m="726440">call</span> <span
  m="726710">them</span> <span m="726920">the</span> <span
  m="727040">cross</span> <span m="727490">terms.</span> <span
  m="728540">Those</span> <span m="728900">give</span> <span
  m="729080">me</span> <span m="729260">4xy</span> <span m="730250">and</span>
  <span m="730430">4xy,</span> <span m="731270">so,</span> <span
  m="731450">really,</span> <span m="731810">8xy.</span> <span
  m="733160">So</span> <span m="733880">you</span> <span m="734060">could</span>
  <span m="734510">call</span> <span m="734810">this</span> <span
  m="735020">thing</span> <span m="735800">8xy.</span></p><p><span
  m="740190">So</span> <span m="740370">that's</span> <span m="740670">my</span>
  <span m="740880">function.</span> <span m="742470">That's</span> <span
  m="742710">my</span> <span m="742950">quadratic.</span> <span
  m="743730">That's</span> <span m="744000">my</span> <span
  m="744240">energy.</span> <span m="745680">And</span> <span
  m="745860">I</span> <span m="746010">believe</span> <span
  m="746800">that</span> <span m="747180">is</span> <span
  m="748950">greater</span> <span m="749280">than</span> <span
  m="749490">0.</span></p><p><span m="751120">Let</span> <span
  m="751240">me</span> <span m="751390">graph</span> <span m="751870">the</span>
  <span m="751990">thing.</span> <span m="753130">Let</span> <span
  m="753280">me</span> <span m="753430">graph</span> <span
  m="753970">that</span> <span m="754210">energy.</span> <span
  m="758560">OK.</span> <span m="759160">So</span> <span
  m="759430">here's</span> <span m="759700">a</span> <span
  m="759760">graph</span> <span m="760200">of</span> <span m="760330">my</span>
  <span m="760760">function,</span> <span m="761560">f</span> <span
  m="761770">of</span> <span m="761890">x</span> <span m="762130">and</span>
  <span m="762250">y.</span></p><p><span m="765340">Here</span> <span
  m="765550">is</span> <span m="765730">x,</span> <span m="766180">and</span>
  <span m="766300">here's</span> <span m="766600">y.</span> <span
  m="768460">And</span> <span m="768640">of</span> <span
  m="768730">course,</span> <span m="769300">that's</span> <span
  m="769630">on</span> <span m="769810">the</span> <span
  m="769900">graph,</span> <span m="770340">0-0.</span> <span
  m="772400">At</span> <span m="772900">x</span> <span m="773170">equals</span>
  <span m="773440">0,</span> <span m="773770">y</span> <span
  m="774070">equals</span> <span m="774340">0,</span> <span
  m="774790">the</span> <span m="774970">function</span> <span
  m="775480">is</span> <span m="776260">clearly</span> <span
  m="776680">0.</span></p><p><span m="777000">Everybody's</span> <span
  m="777460">got</span> <span m="777670">his</span> <span
  m="777820">eye--</span> <span m="778130">let</span> <span m="778250">me</span>
  <span m="778390">write</span> <span m="778720">that</span> <span
  m="778960">function</span> <span m="779380">again</span> <span
  m="779710">here--</span> <span m="780420">3x</span> <span
  m="781090">squared,</span> <span m="782470">6y</span> <span
  m="783220">squared,</span> <span m="784630">8xy.</span> <span
  m="789460">Actually,</span> <span m="789820">you</span> <span
  m="789910">can</span> <span m="790120">see--</span> <span
  m="791650">this</span> <span m="791890">is</span> <span m="792010">how</span>
  <span m="792220">I</span> <span m="792400">think</span> <span
  m="792730">about</span> <span m="793030">that</span> <span
  m="794710">function.</span></p><p><span m="795700">So</span> <span
  m="795940">3x</span> <span m="796450">squared</span> <span
  m="796840">is</span> <span m="796990">obviously</span> <span
  m="797460">carrying</span> <span m="797890">me</span> <span
  m="798070">upwards.</span> <span m="800020">It</span> <span
  m="800190">will</span> <span m="800320">never</span> <span
  m="800590">go</span> <span m="800920">negative.</span> <span
  m="801950">6y</span> <span m="802600">squared</span> <span
  m="803020">will</span> <span m="803140">never</span> <span
  m="803470">go</span> <span m="803680">negative.</span> <span
  m="804760">8xy</span> <span m="805870">can</span> <span m="806290">go</span>
  <span m="806500">negative,</span> <span m="807220">right?</span> <span
  m="808030">If</span> <span m="808210">x</span> <span m="808510">and</span>
  <span m="808660">y</span> <span m="808990">have</span> <span
  m="809230">opposite</span> <span m="809710">signs,</span> <span
  m="810310">that'll</span> <span m="810640">go</span> <span
  m="810850">negative.</span></p><p><span m="811930">But</span> <span
  m="813430">the</span> <span m="813520">question</span> <span
  m="813970">is,</span> <span m="816520">do</span> <span m="816700">these</span>
  <span m="817030">positive</span> <span m="817780">pieces</span> <span
  m="818260">overwhelm</span> <span m="818950">it</span> <span
  m="819580">and</span> <span m="819760">make</span> <span m="820090">the</span>
  <span m="821170">graph</span> <span m="821710">go</span> <span
  m="821950">up</span> <span m="824500">like</span> <span m="824710">a</span>
  <span m="824770">bowl?</span> <span m="829890">And</span> <span
  m="830070">the</span> <span m="830190">answer</span> <span
  m="830580">is</span> <span m="830760">yes,</span> <span m="831810">for</span>
  <span m="832020">a</span> <span m="832080">positive</span> <span
  m="832560">definite</span> <span m="832950">matrix.</span> <span
  m="833610">So</span> <span m="833700">this</span> <span m="834030">is</span>
  <span m="834210">a</span> <span m="834300">graph</span> <span
  m="834750">of</span> <span m="834900">a</span> <span
  m="834960">positive</span> <span m="835530">definite</span> <span
  m="835950">matrix,</span> <span m="837120">of</span> <span
  m="838320">positive</span> <span m="838830">energy,</span> <span
  m="839940">the</span> <span m="840090">energy</span> <span
  m="840570">of</span> <span m="840720">a</span> <span
  m="840780">positive</span> <span m="841320">definite</span> <span
  m="841710">matrix.</span></p><p><span m="842160">So</span> <span
  m="842340">this</span> <span m="842550">is</span> <span m="842730">the</span>
  <span m="843360">energy</span> <span m="844080">x</span> <span
  m="844590">transpose</span> <span m="845550">Sx</span> <span
  m="846540">that</span> <span m="846720">I'm</span> <span
  m="846930">graphing.</span> <span m="848410">And</span> <span
  m="849150">there</span> <span m="849390">it</span> <span m="849480">is.</span>
  <span m="851460">This</span> <span m="851700">is</span> <span
  m="851880">important.</span> <span m="853680">This</span> <span
  m="853920">is</span> <span m="854070">important.</span> <span
  m="854590">This</span> <span m="854880">is</span> <span m="855600">the</span>
  <span m="855690">kind</span> <span m="855960">of</span> <span
  m="856050">function</span> <span m="856470">we</span> <span
  m="856650">like,</span> <span m="857010">x</span> <span
  m="857250">transpose</span> <span m="857910">Sx,</span> <span
  m="858930">where</span> <span m="859200">S</span> <span m="859590">is</span>
  <span m="859800">positive</span> <span m="860430">definite,</span> <span
  m="862170">so</span> <span m="862380">the</span> <span
  m="862500">function</span> <span m="862980">goes</span> <span
  m="863280">up</span> <span m="863460">like</span> <span
  m="863730">that.</span></p><p><span m="865960">This</span> <span
  m="866140">is</span> <span m="866260">what</span> <span m="866390">deep</span>
  <span m="866650">learning</span> <span m="867040">is</span> <span
  m="867160">about.</span> <span m="868650">This</span> <span
  m="868860">could</span> <span m="869070">be</span> <span m="869220">a</span>
  <span m="869280">loss</span> <span m="869730">function</span> <span
  m="870880">that</span> <span m="871860">you</span> <span
  m="871980">minimize.</span> <span m="872730">It</span> <span
  m="872850">could</span> <span m="873030">depend</span> <span
  m="873390">on</span> <span m="873570">100,000</span> <span
  m="874470">variables</span> <span m="875190">or</span> <span
  m="875370">more.</span></p><p><span m="876870">And</span> <span
  m="878790">it</span> <span m="878940">could</span> <span
  m="879180">come</span> <span m="879480">from</span> <span
  m="880300">the</span> <span m="881970">error</span> <span m="882650">in</span>
  <span m="883320">the</span> <span m="883470">difference</span> <span
  m="883890">between</span> <span m="885960">training</span> <span
  m="886620">data</span> <span m="887520">and</span> <span m="890310">the</span>
  <span m="891590">number</span> <span m="892020">you</span> <span
  m="892200">get</span> <span m="892670">it.</span> <span m="893070">The</span>
  <span m="893190">loss</span> <span m="893700">would</span> <span
  m="893940">be</span> <span m="894870">some</span> <span
  m="895320">expression</span> <span m="895920">like</span> <span
  m="896190">that.</span> <span m="897080">Well,</span> <span
  m="897340">I'll</span> <span m="897570">make</span> <span
  m="897840">sense</span> <span m="898170">of</span> <span
  m="898260">those</span> <span m="898530">words</span> <span
  m="899600">as</span> <span m="899730">soon</span> <span m="900030">as</span>
  <span m="900180">I</span> <span m="900300">can.</span></p><p><span
  m="902250">What</span> <span m="902430">I</span> <span m="902520">want</span>
  <span m="902700">to</span> <span m="902790">say</span> <span
  m="903120">is</span> <span m="907520">deep</span> <span
  m="907820">learning,</span> <span m="910150">neural</span> <span
  m="910510">nets,</span> <span m="911050">machine</span> <span
  m="911500">learning,</span> <span m="912430">the</span> <span
  m="912550">big</span> <span m="912970">computation--</span> <span
  m="914530">is</span> <span m="914770">to</span> <span
  m="914920">minimize</span> <span m="916060">an</span> <span
  m="916210">energy--</span> <span m="917260">is</span> <span
  m="917380">to</span> <span m="917500">minimize</span> <span
  m="917800">an</span> <span m="918100">energy.</span> <span
  m="918850">Now</span> <span m="919120">of</span> <span
  m="919210">course,</span> <span m="919840">I</span> <span
  m="919960">made</span> <span m="920230">the</span> <span
  m="920320">minimum</span> <span m="920800">easy</span> <span
  m="921130">to</span> <span m="921220">find</span> <span
  m="922680">because</span> <span m="922960">I</span> <span
  m="923110">have</span> <span m="923350">pure</span> <span
  m="923740">squares.</span> <span m="925420">Well,</span> <span
  m="925870">that</span> <span m="926080">doesn't</span> <span
  m="926440">happen</span> <span m="926770">in</span> <span
  m="926920">practice,</span> <span m="927490">of</span> <span
  m="927610">course.</span></p><p><span m="928630">In</span> <span
  m="928720">practice,</span> <span m="929320">we</span> <span
  m="929500">have</span> <span m="931150">linear</span> <span
  m="931630">terms,</span> <span m="932710">x</span> <span
  m="932980">transpose</span> <span m="934420">b,</span> <span
  m="935110">or</span> <span m="936430">nonlinear.</span> <span
  m="938080">Yeah,</span> <span m="938550">the</span> <span
  m="938680">loss</span> <span m="939040">function</span> <span
  m="939550">doesn't</span> <span m="939850">have</span> <span
  m="940030">to</span> <span m="940150">be</span> <span m="940330">a</span>
  <span m="941410">[INAUDIBLE]</span> <span m="941890">cross</span> <span
  m="942430">entropy,</span> <span m="943030">all</span> <span
  m="943180">kinds</span> <span m="943480">of</span> <span
  m="943600">things.</span> <span m="944330">There</span> <span
  m="944710">is</span> <span m="944970">a</span> <span m="945610">whole</span>
  <span m="945910">dictionary</span> <span m="946570">of</span> <span
  m="946660">possible</span> <span m="947170">loss</span> <span
  m="947560">functions.</span></p><p><span m="948490">But</span> <span
  m="949120">but</span> <span m="949330">this</span> <span m="949690">is</span>
  <span m="949870">the</span> <span m="950020">model.</span> <span
  m="951710">This</span> <span m="951880">is</span> <span m="952030">the</span>
  <span m="952120">model.</span> <span m="953030">And</span> <span
  m="953260">I'll</span> <span m="953590">make</span> <span m="954010">it</span>
  <span m="954190">the</span> <span m="954310">perfect</span> <span
  m="954790">model</span> <span m="955210">by</span> <span
  m="955930">just</span> <span m="956530">focusing</span> <span
  m="957220">on</span> <span m="958750">that</span> <span
  m="958990">part.</span></p><p><span m="961020">Well,</span> <span
  m="964490">by</span> <span m="964730">the</span> <span m="964820">way,</span>
  <span m="965000">what</span> <span m="966410">would</span> <span
  m="967550">happen</span> <span m="968000">if</span> <span
  m="968240">that</span> <span m="968570">was</span> <span m="968840">in</span>
  <span m="968990">there?</span> <span m="969200">I</span> <span
  m="969320">shouldn't</span> <span m="969560">have</span> <span m="969740">X'd
  it</span> <span m="970220">out</span> <span m="971780">so</span> <span
  m="971960">quickly</span> <span m="972410">since</span> <span
  m="972680">I</span> <span m="972770">just</span> <span m="973010">put</span>
  <span m="973220">it</span> <span m="973340">up</span> <span
  m="973460">there.</span> <span m="974030">Let</span> <span
  m="974150">me</span> <span m="974270">put</span> <span m="974480">it</span>
  <span m="974570">back</span> <span m="974840">up.</span> <span
  m="976580">I</span> <span m="976640">thought</span> <span
  m="976910">better</span> <span m="977190">of it.</span></p><p><span
  m="978940">OK.</span> <span m="980260">This</span> <span m="980440">is</span>
  <span m="980590">a</span> <span m="980710">kind of</span> <span
  m="980965">least squares</span> <span m="981740">problem</span> <span
  m="984170">with</span> <span m="984380">some</span> <span
  m="984650">data,</span> <span m="985010">b.</span> <span
  m="987350">Minimize</span> <span m="987920">that.</span> <span
  m="988970">So</span> <span m="989180">what</span> <span
  m="989450">would</span> <span m="989630">be</span> <span m="989840">the</span>
  <span m="989960">graph</span> <span m="990410">of</span> <span
  m="990500">this</span> <span m="990830">guy?</span> <span
  m="991250">Can</span> <span m="991490">I</span> <span m="991580">just</span>
  <span m="991880">draw</span> <span m="992180">the</span> <span
  m="992300">same</span> <span m="993170">sort</span> <span m="993410">of</span>
  <span m="993470">picture</span> <span m="995390">for</span> <span
  m="995600">that</span> <span m="995870">function?</span></p><p><span
  m="997460">Will</span> <span m="997790">it</span> <span m="998120">be</span>
  <span m="999050">a</span> <span m="999110">bowl?</span> <span
  m="1000720">Yes.</span> <span m="1002820">If</span> <span m="1003000">I</span>
  <span m="1003150">have</span> <span m="1003390">this</span> <span
  m="1003660">term,</span> <span m="1004140">all</span> <span
  m="1004320">that</span> <span m="1004530">does</span> <span
  m="1004980">is</span> <span m="1006890">move</span> <span
  m="1007190">it</span> <span m="1007310">off</span> <span
  m="1008120">center</span> <span m="1008540">here,</span> <span
  m="1009730">at</span> <span m="1009920">x</span> <span
  m="1010160">equals</span> <span m="1010520">0.</span></p><p><span
  m="1011600">Well,</span> <span m="1011810">I</span> <span
  m="1011900">still</span> <span m="1012200">get</span> <span
  m="1012380">0.</span> <span m="1012760">Sorry.</span> <span
  m="1013140">I</span> <span m="1013250">still</span> <span
  m="1013490">go</span> <span m="1013670">through</span> <span
  m="1013940">that</span> <span m="1014150">point.</span> <span
  m="1014520">If</span> <span m="1014930">this</span> <span
  m="1015110">is</span> <span m="1015290">the</span> <span m="1015440">0</span>
  <span m="1015830">vector,</span> <span m="1016190">I'm</span> <span
  m="1016340">still</span> <span m="1016580">getting</span> <span
  m="1016880">0.</span> <span m="1017540">But</span> <span
  m="1017720">this,</span> <span m="1018050">we'll</span> <span
  m="1018230">bring</span> <span m="1018500">it</span> <span
  m="1018590">below.</span></p><p><span m="1019100">That</span> <span
  m="1019340">would</span> <span m="1020270">produce</span> <span
  m="1020720">a</span> <span m="1020780">bowl</span> <span
  m="1021140">like</span> <span m="1021440">that.</span> <span
  m="1022130">Actually,</span> <span m="1022760">it</span> <span
  m="1022820">would</span> <span m="1022940">just</span> <span
  m="1023150">be</span> <span m="1023330">the</span> <span
  m="1023480">same</span> <span m="1023840">bowl.</span> <span
  m="1025460">The</span> <span m="1025579">bowl</span> <span
  m="1026810">would</span> <span m="1026990">just</span> <span
  m="1027260">be</span> <span m="1027470">shifted.</span> <span
  m="1028040">I</span> <span m="1028160">could</span> <span
  m="1028400">write</span> <span m="1028730">that</span> <span
  m="1029960">to</span> <span m="1030170">show</span> <span
  m="1030589">how</span> <span m="1030800">that</span> <span
  m="1031010">happens.</span></p><p><span m="1032599">So</span> <span
  m="1032780">this</span> <span m="1033260">is</span> <span
  m="1033410">now</span> <span m="1033680">below</span> <span
  m="1034130">0.</span> <span m="1037040">That's</span> <span
  m="1037430">the</span> <span m="1039109">solution</span> <span
  m="1039650">we're</span> <span m="1039859">after</span> <span
  m="1041220">that</span> <span m="1041450">tells</span> <span
  m="1041839">us</span> <span m="1042290">the</span> <span
  m="1042440">weights</span> <span m="1043880">in</span> <span
  m="1044119">the</span> <span m="1044240">neural</span> <span
  m="1044599">network.</span> <span m="1045680">I'm</span> <span
  m="1045829">just</span> <span m="1046220">using</span> <span
  m="1046609">these</span> <span m="1046849">words,</span> <span
  m="1047359">but</span> <span m="1047750">we'll</span> <span
  m="1048020">soon</span> <span m="1048380">have</span> <span
  m="1048590">a</span> <span m="1048950">meaning</span> <span
  m="1049430">to</span> <span m="1049580">them.</span></p><p><span
  m="1051350">I</span> <span m="1051440">want</span> <span m="1051620">to</span>
  <span m="1051710">find</span> <span m="1051970">that</span> <span
  m="1052160">minimum,</span> <span m="1052730">in</span> <span
  m="1052850">other</span> <span m="1053060">words.</span> <span
  m="1054040">And</span> <span m="1054200">I</span> <span
  m="1054290">want</span> <span m="1054470">to</span> <span
  m="1054560">find</span> <span m="1054890">it</span> <span
  m="1054980">for</span> <span m="1055160">much</span> <span
  m="1055460">more</span> <span m="1055670">complicated</span> <span
  m="1056390">functions</span> <span m="1056930">than</span> <span
  m="1057080">that.</span> <span m="1057740">Of</span> <span
  m="1057860">course,</span> <span m="1058160">if</span> <span
  m="1058340">I</span> <span m="1058490">minimize</span> <span
  m="1059040">the</span> <span m="1059150">quadratic,</span> <span
  m="1060410">that</span> <span m="1060590">means</span> <span
  m="1060890">setting</span> <span m="1061370">derivatives</span> <span
  m="1062030">to</span> <span m="1062150">0.</span></p><p><span
  m="1062660">I</span> <span m="1062750">just</span> <span
  m="1062990">have</span> <span m="1063210">linear</span> <span
  m="1063590">equations.</span> <span m="1064790">Probably,</span> <span
  m="1066110">I</span> <span m="1066230">could</span> <span
  m="1066410">write</span> <span m="1066620">everything</span> <span
  m="1067070">down</span> <span m="1067400">for</span> <span
  m="1068480">that</span> <span m="1068820">thing.</span> <span
  m="1069160">So</span> <span m="1069410">let's</span> <span
  m="1070100">put</span> <span m="1070390">in</span> <span
  m="1070520">some</span> <span m="1070730">nonlinear</span> <span
  m="1071510">stuff,</span> <span m="1071930">which</span> <span
  m="1072700">way</span> <span m="1072980">to</span> <span
  m="1073130">wiggles</span> <span m="1073670">the</span> <span
  m="1073790">bowl,</span> <span m="1074480">makes</span> <span
  m="1074810">it</span> <span m="1074900">not</span> <span m="1075140">so</span>
  <span m="1075380">easy.</span></p><p><span m="1079880">Can</span> <span
  m="1080040">I</span> <span m="1080140">look</span> <span m="1080400">a</span>
  <span m="1080460">month</span> <span m="1080760">ahead?</span> <span
  m="1082020">How</span> <span m="1082200">do</span> <span
  m="1082290">you</span> <span m="1082380">find--</span> <span
  m="1083190">so</span> <span m="1083400">this</span> <span
  m="1083640">is</span> <span m="1083760">a</span> <span m="1083820">big</span>
  <span m="1084090">part</span> <span m="1084360">of</span> <span
  m="1084420">mathematics--</span> <span m="1085890">applied</span> <span
  m="1086310">math,</span> <span m="1087940">optimization,</span> <span
  m="1089080">minimization</span> <span m="1090190">of</span> <span
  m="1090340">a</span> <span m="1090880">complicated</span> <span
  m="1091630">function</span> <span m="1092440">of</span> <span
  m="1092620">100,000</span> <span m="1093430">variables.</span> <span
  m="1095470">That's</span> <span m="1095770">the</span> <span
  m="1095890">biggest</span> <span m="1096340">computation.</span> <span
  m="1097180">That's</span> <span m="1097450">the</span> <span
  m="1097570">reason</span> <span m="1098440">machine</span> <span
  m="1098860">learning</span> <span m="1099280">on</span> <span
  m="1099430">big</span> <span m="1099670">problems</span> <span
  m="1100180">takes</span> <span m="1100510">a</span> <span
  m="1100570">week</span> <span m="1101430">on</span> <span m="1101720">a</span>
  <span m="1101860">GPU</span> <span m="1103390">or</span> <span
  m="1103540">multiple</span> <span m="1104140">GPUs,</span> <span
  m="1104980">because</span> <span m="1105400">you</span> <span
  m="1105520">have</span> <span m="1105670">so</span> <span
  m="1106000">many</span> <span m="1106360">unknowns.</span> <span
  m="1108340">More</span> <span m="1108610">than</span> <span
  m="1109030">100,000</span> <span m="1109840">would</span> <span
  m="1110000">be</span> <span m="1110560">quite</span> <span
  m="1110830">normal.</span></p><p><span m="1112240">In</span> <span
  m="1112420">general,</span> <span m="1113110">let's</span> <span
  m="1113380">just</span> <span m="1114070">have</span> <span
  m="1114310">the</span> <span m="1114670">pleasure</span> <span
  m="1115120">of</span> <span m="1115240">looking</span> <span
  m="1115630">ahead</span> <span m="1115960">for</span> <span
  m="1116200">one</span> <span m="1116470">minute,</span> <span
  m="1116960">and</span> <span m="1116980">then</span> <span
  m="1117160">I'll</span> <span m="1117310">come</span> <span
  m="1117550">back</span> <span m="1117820">to</span> <span
  m="1119290">real</span> <span m="1119590">life</span> <span
  m="1120130">here,</span> <span m="1120460">linear</span> <span
  m="1120820">algebra.</span> <span m="1122560">I</span> <span
  m="1122710">can't</span> <span m="1123040">resist</span> <span
  m="1126190">thinking</span> <span m="1127150">aloud,</span> <span
  m="1128410">how</span> <span m="1129010">do</span> <span
  m="1129100">you</span> <span m="1129220">find</span> <span
  m="1129910">the</span> <span m="1130030">minimum?</span> <span
  m="1131050">By</span> <span m="1131290">the</span> <span
  m="1131410">way,</span> <span m="1132700">these</span> <span
  m="1133030">functions,</span> <span m="1134410">both</span> <span
  m="1134710">of</span> <span m="1134770">them,</span> <span
  m="1136490">are</span> <span m="1136820">convex.</span> <span
  m="1138110">So</span> <span m="1138380">that</span> <span
  m="1138590">is</span> <span m="1138740">convex.</span></p><p><span
  m="1144940">So</span> <span m="1145050">I</span> <span m="1145140">want</span>
  <span m="1145350">to</span> <span m="1145440">connect</span> <span
  m="1146100">convex</span> <span m="1147000">functions,</span> <span
  m="1147750">f--</span> <span m="1149290">and</span> <span
  m="1149430">what</span> <span m="1149640">does</span> <span
  m="1149760">convex</span> <span m="1150390">mean?</span> <span
  m="1151350">It</span> <span m="1151530">means,</span> <span
  m="1152250">well,</span> <span m="1152610">that</span> <span
  m="1152730">the</span> <span m="1152850">graph</span> <span
  m="1153300">is</span> <span m="1156480">like</span> <span
  m="1156720">that.</span></p><p><span m="1157460">[LAUGHTER]</span></p><p><span
  m="1159660">Not</span> <span m="1160020">perfect,</span> <span
  m="1161640">it</span> <span m="1161820">could--</span> <span
  m="1162660">but</span> <span m="1163600">if</span> <span
  m="1164480">it's</span> <span m="1164670">a</span> <span
  m="1164760">quadratic,</span> <span m="1166350">then</span> <span
  m="1166620">convex</span> <span m="1167280">means</span> <span
  m="1170040">positive</span> <span m="1170640">definite,</span> <span
  m="1171690">or</span> <span m="1171930">maybe</span> <span
  m="1172410">in</span> <span m="1172650">the</span> <span
  m="1173460">extreme,</span> <span m="1174090">positive</span> <span
  m="1174750">semidefinite.</span> <span m="1175810">I'll</span> <span
  m="1176100">have</span> <span m="1176250">to</span> <span
  m="1176370">mention</span> <span m="1176820">that.</span> <span
  m="1179070">But</span> <span m="1180510">convex</span> <span
  m="1181140">means</span> <span m="1181500">it</span> <span
  m="1181620">goes</span> <span m="1181980">up.</span></p><p><span
  m="1182250">But</span> <span m="1182460">it</span> <span
  m="1182580">could</span> <span m="1182820">have</span> <span
  m="1183150">wiggles.</span> <span m="1183630">It</span> <span
  m="1183720">doesn't</span> <span m="1184080">have</span> <span
  m="1184320">to</span> <span m="1184410">be</span> <span
  m="1184950">just</span> <span m="1186000">perfect</span> <span
  m="1186420">squares</span> <span m="1187020">in</span> <span
  m="1187170">linear</span> <span m="1187620">terms,</span> <span
  m="1188130">but</span> <span m="1188820">general</span> <span
  m="1189300">things.</span> <span m="1189720">And</span> <span
  m="1190930">for</span> <span m="1191430">deep</span> <span
  m="1191760">learning,</span> <span m="1192230">it</span> <span
  m="1192240">will</span> <span m="1192570">include</span> <span
  m="1193980">non--</span> <span m="1195060">it</span> <span
  m="1195310">will</span> <span m="1195390">go</span> <span
  m="1195690">far</span> <span m="1195960">beyond</span> <span
  m="1196350">quadratics.</span> <span m="1198750">Well,</span> <span
  m="1199110">it</span> <span m="1199200">may</span> <span
  m="1199410">not</span> <span m="1199650">be</span> <span
  m="1199890">convex.</span> <span m="1200580">I</span> <span
  m="1200670">guess</span> <span m="1201010">that's</span> <span
  m="1201300">also</span> <span m="1201660">true.</span></p><p><span
  m="1202530">Yeah.</span> <span m="1204120">So</span> <span
  m="1204810">deep</span> <span m="1205320">learning</span> <span
  m="1205740">has</span> <span m="1206010">got</span> <span
  m="1207120">serious</span> <span m="1207660">problems</span> <span
  m="1208230">because</span> <span m="1208500">those</span> <span
  m="1208830">functions,</span> <span m="1210060">they</span> <span
  m="1210240">may</span> <span m="1210570">look</span> <span
  m="1210870">like</span> <span m="1211140">this</span> <span
  m="1211440">but</span> <span m="1211620">then</span> <span
  m="1211950">over</span> <span m="1212220">here</span> <span
  m="1212670">they</span> <span m="1212880">could</span> <span
  m="1213120">go</span> <span m="1213770">nonxconvex.</span> <span
  m="1216150">They</span> <span m="1216270">could</span> <span
  m="1217110">dip</span> <span m="1217410">down</span> <span
  m="1217770">a</span> <span m="1217860">little</span> <span
  m="1218130">more.</span> <span m="1218520">And</span> <span
  m="1218640">you're</span> <span m="1218820">looking</span> <span
  m="1219240">for</span> <span m="1219480">this</span> <span
  m="1219900">point</span> <span m="1220500">or</span> <span
  m="1220680">for</span> <span m="1220890">this</span> <span
  m="1221190">point.</span> <span m="1224820">Still,</span> <span
  m="1225120">I'm</span> <span m="1225300">determined</span> <span
  m="1225840">to</span> <span m="1225960">tell</span> <span
  m="1226200">you</span> <span m="1226320">how</span> <span
  m="1226530">to</span> <span m="1226620">find</span> <span
  m="1227040">it</span> <span m="1229160">or</span> <span m="1229520">a</span>
  <span m="1229880">start</span> <span m="1230520">on</span> <span
  m="1230700">how</span> <span m="1230940">you</span> <span
  m="1231060">find</span> <span m="1231450">it.</span></p><p><span
  m="1231780">So</span> <span m="1231990">you're</span> <span
  m="1232200">at</span> <span m="1232350">some</span> <span
  m="1232590">point.</span> <span m="1235950">Start</span> <span
  m="1236310">there,</span> <span m="1240640">somewhere</span> <span
  m="1241090">on</span> <span m="1241240">the</span> <span
  m="1241390">surface.</span> <span m="1241810">Some</span> <span
  m="1242350">x,</span> <span m="1243070">some</span> <span
  m="1244030">vector</span> <span m="1244480">x</span> <span
  m="1244810">is</span> <span m="1244990">your</span> <span
  m="1245140">start,</span> <span m="1245590">x0--</span> <span
  m="1249890">starting</span> <span m="1250310">point.</span></p><p><span
  m="1251030">And</span> <span m="1251360">we're</span> <span
  m="1251510">going</span> <span m="1251610">to</span> <span
  m="1251750">just</span> <span m="1252050">take</span> <span
  m="1252350">a</span> <span m="1252380">step,</span> <span
  m="1253730">hopefully</span> <span m="1254360">down</span> <span
  m="1257120">the</span> <span m="1257210">bowl.</span> <span
  m="1258020">Well</span> <span m="1258230">of</span> <span
  m="1258320">course,</span> <span m="1258620">it</span> <span
  m="1258710">would</span> <span m="1258890">be</span> <span
  m="1259040">fantastic</span> <span m="1260330">to</span> <span
  m="1260480">get</span> <span m="1260690">there</span> <span
  m="1260900">in</span> <span m="1260990">one</span> <span
  m="1261230">step,</span> <span m="1261600">but</span> <span
  m="1261800">that's</span> <span m="1262610">not</span> <span
  m="1262820">going</span> <span m="1262980">to</span> <span
  m="1263090">happen.</span> <span m="1264950">That</span> <span
  m="1265250">would</span> <span m="1265430">be</span> <span
  m="1266450">solving</span> <span m="1267050">a</span> <span
  m="1267110">big</span> <span m="1267390">linear</span> <span
  m="1267770">system,</span> <span m="1268220">very</span> <span
  m="1268580">expensive,</span> <span m="1269570">and</span> <span
  m="1269690">a</span> <span m="1269780">big</span> <span
  m="1270020">nonlinear</span> <span m="1270680">system.</span></p><p><span
  m="1271190">So</span> <span m="1271760">really,</span> <span
  m="1272120">that's</span> <span m="1272360">what</span> <span
  m="1272510">we're</span> <span m="1272630">trying</span> <span
  m="1272870">to</span> <span m="1272960">solve--</span> <span
  m="1273320">a</span> <span m="1273410">big</span> <span
  m="1273680">nonlinear</span> <span m="1274340">system.</span> <span
  m="1275300">And</span> <span m="1275450">I</span> <span
  m="1275570">should</span> <span m="1275960">be</span> <span
  m="1276740">on</span> <span m="1276860">this</span> <span
  m="1277100">picture</span> <span m="1277550">because</span> <span
  m="1278690">here</span> <span m="1278930">we</span> <span
  m="1279050">can</span> <span m="1279230">see</span> <span
  m="1279680">where</span> <span m="1279890">the</span> <span
  m="1280010">minimum</span> <span m="1280520">is.</span> <span
  m="1280790">But</span> <span m="1281480">they</span> <span
  m="1281600">just</span> <span m="1281870">shift.</span></p><p><span
  m="1282980">So</span> <span m="1283190">what</span> <span
  m="1283460">would</span> <span m="1283730">you</span> <span
  m="1283970">do</span> <span m="1284390">if</span> <span m="1284570">you</span>
  <span m="1284750">had</span> <span m="1284990">a</span> <span
  m="1285080">starting</span> <span m="1285620">point</span> <span
  m="1287420">and</span> <span m="1287780">you</span> <span
  m="1287930">wanted</span> <span m="1288290">to</span> <span
  m="1288440">go</span> <span m="1289070">look</span> <span
  m="1289310">for</span> <span m="1289490">the</span> <span
  m="1289610">minimum?</span> <span m="1292240">What's</span> <span
  m="1292630">the</span> <span m="1292780">natural</span> <span
  m="1293320">idea?</span> <span m="1294730">Compute</span> <span
  m="1295180">derivatives.</span> <span m="1297010">You've</span> <span
  m="1297160">got</span> <span m="1297370">calculus</span> <span
  m="1298060">on</span> <span m="1298210">your</span> <span
  m="1298360">side.</span> <span m="1298810">Compute</span> <span
  m="1299260">the</span> <span m="1299380">first</span> <span
  m="1299680">derivatives.</span></p><p><span m="1302300">So</span> <span
  m="1302440">the</span> <span m="1302680">first</span> <span
  m="1303070">derivatives</span> <span m="1304660">with</span> <span
  m="1304840">respect</span> <span m="1305170">to</span> <span
  m="1305260">x--</span> <span m="1306550">so</span> <span m="1306850">I</span>
  <span m="1307000">would</span> <span m="1307210">compute</span> <span
  m="1308590">the</span> <span m="1308770">derivative</span> <span
  m="1309700">with</span> <span m="1309850">respect</span> <span
  m="1310210">to</span> <span m="1310300">x,</span> <span m="1311170">and</span>
  <span m="1311350">the</span> <span m="1311470">derivative</span> <span
  m="1312010">of</span> <span m="1312190">f</span> <span m="1312400">with</span>
  <span m="1312580">respect</span> <span m="1312910">to</span> <span
  m="1313030">y,</span> <span m="1313990">and</span> <span
  m="1314590">100,000</span> <span m="1315400">more.</span> <span
  m="1316990">And</span> <span m="1317200">that</span> <span
  m="1317650">takes</span> <span m="1318010">a</span> <span
  m="1318070">little</span> <span m="1318340">while.</span></p><p><span
  m="1319750">And</span> <span m="1320140">now</span> <span
  m="1320410">I've</span> <span m="1320590">got</span> <span
  m="1320860">the</span> <span m="1321010">derivatives.</span> <span
  m="1321760">What</span> <span m="1321940">do</span> <span m="1322090">I</span>
  <span m="1322240">do?</span></p><p><span m="1323000">AUDIENCE:</span> <span
  m="1323235">[INAUDIBLE]</span></p><p><span m="1323830">GILBERT STRANG:</span>
  <span m="1323965">I</span> <span m="1324340">go--</span> <span
  m="1324580">that</span> <span m="1325000">tells</span> <span
  m="1325390">me</span> <span m="1325600">the</span> <span
  m="1325750">steepest</span> <span m="1326470">direction.</span> <span
  m="1327170">That</span> <span m="1327310">tells</span> <span
  m="1327700">me,</span> <span m="1328210">at</span> <span
  m="1328390">that</span> <span m="1328690">point,</span> <span
  m="1329200">which</span> <span m="1329500">way</span> <span
  m="1329770">is</span> <span m="1330640">the</span> <span
  m="1330910">fastest</span> <span m="1331660">way</span> <span
  m="1331900">down.</span> <span m="1332930">So</span> <span
  m="1333040">I</span> <span m="1333190">would</span> <span
  m="1333430">follow--</span> <span m="1334090">I</span> <span
  m="1334240">would</span> <span m="1334390">do a</span> <span
  m="1334570">gradient</span> <span m="1335290">descent.</span> <span
  m="1335890">I</span> <span m="1335980">would</span> <span
  m="1336160">follow</span> <span m="1336700">that</span> <span
  m="1337000">gradient.</span></p><p><span m="1337720">This</span> <span
  m="1337960">is</span> <span m="1338110">called</span> <span
  m="1338410">the</span> <span m="1338560">gradient,</span> <span
  m="1340330">all</span> <span m="1340690">the</span> <span
  m="1340840">first</span> <span m="1341260">derivatives.</span> <span
  m="1341920">It's</span> <span m="1342070">called</span> <span
  m="1342400">the</span> <span m="1342520">gradient</span> <span
  m="1343780">of</span> <span m="1343990">f--</span> <span
  m="1344550">the</span> <span m="1344740">gradient.</span> <span
  m="1349950">Gradient</span> <span m="1350370">vector--</span> <span
  m="1350980">it's</span> <span m="1351050">a</span> <span
  m="1351120">vector,</span> <span m="1351540">of</span> <span
  m="1351660">course,</span> <span m="1352030">because</span> <span
  m="1352530">f</span> <span m="1352800">is</span> <span m="1352950">a</span>
  <span m="1353040">function</span> <span m="1353520">of</span> <span
  m="1354000">lots</span> <span m="1354330">of</span> <span
  m="1354390">variables.</span></p><p><span m="1355440">I</span> <span
  m="1355590">would</span> <span m="1355770">start</span> <span
  m="1356160">down</span> <span m="1357720">in</span> <span
  m="1357870">that</span> <span m="1358080">direction.</span> <span
  m="1359970">And</span> <span m="1360150">how</span> <span
  m="1360360">far</span> <span m="1360600">to</span> <span
  m="1360720">go,</span> <span m="1362860">that's</span> <span
  m="1363610">the</span> <span m="1363760">million</span> <span
  m="1364150">dollar</span> <span m="1364450">question</span> <span
  m="1365230">in</span> <span m="1365810">deep</span> <span
  m="1366130">learning.</span> <span m="1368480">Is</span> <span
  m="1368670">it</span> <span m="1368820">going</span> <span
  m="1368940">to</span> <span m="1369100">hit</span> <span m="1370550">0?</span>
  <span m="1372210">Nope.</span> <span m="1372870">It's</span> <span
  m="1373170">not.</span> <span m="1374400">It's</span> <span
  m="1374670">not.</span></p><p><span m="1378060">So</span> <span
  m="1379470">basically,</span> <span m="1380070">you</span> <span
  m="1380580">go</span> <span m="1380790">down</span> <span
  m="1381150">until</span> <span m="1381810">it--</span> <span
  m="1384720">so</span> <span m="1384900">you're</span> <span
  m="1385080">traveling</span> <span m="1385620">here</span> <span
  m="1385950">in</span> <span m="1386060">the</span> <span m="1386190">x,</span>
  <span m="1387840">along</span> <span m="1388170">the</span> <span
  m="1388260">gradient.</span> <span m="1389430">And</span> <span
  m="1391410">you're</span> <span m="1391560">not</span> <span
  m="1391740">going</span> <span m="1391890">to</span> <span
  m="1392010">hit</span> <span m="1392220">0.</span> <span
  m="1393330">You're</span> <span m="1393510">all</span> <span
  m="1393750">going</span> <span m="1394290">here</span> <span
  m="1394590">in</span> <span m="1394710">some</span> <span
  m="1394980">direction.</span> <span m="1397200">So</span> <span
  m="1397410">you</span> <span m="1397560">keep</span> <span
  m="1397860">going</span> <span m="1399390">down</span> <span
  m="1399810">this</span> <span m="1400110">thing</span> <span
  m="1400500">until</span> <span m="1400950">it--</span> <span
  m="1401940">oh,</span> <span m="1402780">I'm</span> <span
  m="1402960">not</span> <span m="1403170">Rembrandt</span> <span
  m="1403830">here.</span></p><p><span m="1406290">Your</span> <span
  m="1406560">path</span> <span m="1407050">down--</span> <span
  m="1408180">think</span> <span m="1408480">of</span> <span
  m="1408600">yourself</span> <span m="1408990">on</span> <span
  m="1409140">a</span> <span m="1409200">mountain.</span> <span
  m="1411830">You're</span> <span m="1412010">trying</span> <span
  m="1412250">to</span> <span m="1412340">go</span> <span
  m="1412550">down</span> <span m="1412810">hill.</span> <span
  m="1414460">So</span> <span m="1414670">you</span> <span
  m="1414790">take--</span> <span m="1415100">as</span> <span
  m="1415270">fast</span> <span m="1415630">as</span> <span
  m="1415750">you</span> <span m="1415870">can.</span> <span
  m="1416960">So</span> <span m="1417040">you</span> <span
  m="1417160">take</span> <span m="1417430">the</span> <span
  m="1417580">steepest</span> <span m="1418120">route</span> <span
  m="1418390">down</span> <span m="1418720">until--</span> <span
  m="1420190">but</span> <span m="1420490">you</span> <span
  m="1421360">have</span> <span m="1421480">blinkers.</span> <span
  m="1422830">Once</span> <span m="1423160">you</span> <span
  m="1423280">decide</span> <span m="1423790">on</span> <span
  m="1423940">a</span> <span m="1424000">direction,</span> <span
  m="1424600">you</span> <span m="1424720">go</span> <span m="1424960">in</span>
  <span m="1425050">that</span> <span m="1425230">direction.</span></p><p><span
  m="1427330">Of</span> <span m="1427420">course--</span> <span
  m="1429470">so</span> <span m="1429670">what</span> <span
  m="1429880">will</span> <span m="1430030">happen?</span> <span
  m="1430900">You'll</span> <span m="1431080">go</span> <span
  m="1431260">down</span> <span m="1431620">for</span> <span
  m="1431770">a</span> <span m="1431860">while</span> <span
  m="1432220">and</span> <span m="1432340">then</span> <span
  m="1432610">it</span> <span m="1432700">will</span> <span
  m="1434980">turn</span> <span m="1435220">up</span> <span
  m="1435400">again</span> <span m="1436330">when</span> <span
  m="1436510">you</span> <span m="1436570">get</span> <span
  m="1436740">to,</span> <span m="1437080">maybe,</span> <span
  m="1437560">close</span> <span m="1437980">to</span> <span
  m="1438130">the</span> <span m="1438250">bottom</span> <span
  m="1438670">or</span> <span m="1438790">maybe</span> <span
  m="1439120">not.</span> <span m="1439940">You're</span> <span
  m="1440380">not</span> <span m="1440560">going</span> <span
  m="1440680">to</span> <span m="1440770">hit</span> <span
  m="1441370">here.</span> <span m="1442270">And</span> <span
  m="1442420">it's</span> <span m="1442660">going</span> <span
  m="1442820">to</span> <span m="1442900">miss</span> <span
  m="1443380">that</span> <span m="1443830">and</span> <span
  m="1444100">come</span> <span m="1444370">up.</span> <span
  m="1444760">Maybe</span> <span m="1445060">I</span> <span
  m="1445150">should</span> <span m="1445370">draw</span> <span
  m="1445680">it</span> <span m="1445780">over</span> <span
  m="1446020">here,</span> <span m="1446310">whatever.</span></p><p><span
  m="1448250">So</span> <span m="1452350">it's</span> <span
  m="1452510">called</span> <span m="1452810">a</span> <span
  m="1452870">line</span> <span m="1453350">search,</span> <span
  m="1454610">to</span> <span m="1454790">decide</span> <span
  m="1455390">how</span> <span m="1455630">far</span> <span
  m="1455870">to</span> <span m="1455960">go</span> <span
  m="1456200">there.</span> <span m="1456540">And</span> <span
  m="1456560">then</span> <span m="1456740">say,</span> <span
  m="1457010">OK</span> <span m="1457400">stop.</span> <span
  m="1460440">And</span> <span m="1460590">you</span> <span
  m="1460710">can</span> <span m="1460920">invest</span> <span
  m="1462510">a</span> <span m="1462540">lot</span> <span m="1462780">of</span>
  <span m="1462870">time</span> <span m="1463290">or</span> <span
  m="1463410">a</span> <span m="1463470">little</span> <span
  m="1463770">time</span> <span m="1464190">to</span> <span
  m="1464370">decide</span> <span m="1465930">on</span> <span
  m="1466110">that</span> <span m="1466320">first</span> <span
  m="1466680">stopping</span> <span m="1467190">point.</span></p><p><span
  m="1467880">And</span> <span m="1468060">now</span> <span
  m="1468630">just</span> <span m="1468900">tell</span> <span
  m="1469170">me,</span> <span m="1469410">what</span> <span
  m="1469620">do</span> <span m="1469680">you</span> <span m="1469800">do</span>
  <span m="1470070">next?</span> <span m="1471220">So</span> <span
  m="1471270">now</span> <span m="1471480">you're</span> <span
  m="1471660">here.</span> <span m="1474070">What</span> <span
  m="1474610">now?</span> <span m="1476580">Recalculate</span> <span
  m="1477750">the</span> <span m="1477870">gradient.</span> <span
  m="1479520">Find</span> <span m="1479880">the</span> <span
  m="1480000">steepest</span> <span m="1480630">way</span> <span
  m="1480990">down</span> <span m="1481560">from</span> <span
  m="1481800">that</span> <span m="1482040">point,</span> <span
  m="1483840">follow</span> <span m="1484230">it</span> <span
  m="1484500">until</span> <span m="1484890">it</span> <span
  m="1485070">turns</span> <span m="1485520">up</span> <span
  m="1485970">or</span> <span m="1486270">approximately,</span> <span
  m="1487830">then</span> <span m="1488070">you're</span> <span
  m="1488220">at</span> <span m="1488340">a</span> <span m="1488400">new</span>
  <span m="1488640">point.</span></p><p><span m="1489160">So</span> <span
  m="1489240">this</span> <span m="1489540">is</span> <span
  m="1489780">gradient</span> <span m="1490470">descent.</span> <span
  m="1491330">That's</span> <span m="1491640">gradient</span> <span
  m="1492180">descent,</span> <span m="1492720">the</span> <span
  m="1492870">big</span> <span m="1493740">algorithm</span> <span
  m="1494550">of</span> <span m="1495630">deep</span> <span
  m="1496170">learning</span> <span m="1496650">of</span> <span
  m="1496800">neural</span> <span m="1497170">nets,</span> <span
  m="1497930">of</span> <span m="1498210">machine</span> <span
  m="1498660">learning--</span> <span m="1500110">of</span> <span
  m="1500370">optimization,</span> <span m="1501300">you</span> <span
  m="1501420">could</span> <span m="1501600">say.</span></p><p><span
  m="1502440">Notice</span> <span m="1502890">that</span> <span
  m="1503040">we</span> <span m="1503280">didn't</span> <span
  m="1503640">compute</span> <span m="1504360">second</span> <span
  m="1504870">derivatives.</span> <span m="1506150">If</span> <span
  m="1507000">we</span> <span m="1507240">computed</span> <span
  m="1507780">second</span> <span m="1508140">derivatives,</span> <span
  m="1508680">we</span> <span m="1508890">could</span> <span
  m="1509550">have</span> <span m="1509790">a</span> <span
  m="1510240">fancier</span> <span m="1510840">formula</span> <span
  m="1512190">that</span> <span m="1512340">could</span> <span
  m="1512640">account</span> <span m="1513180">for</span> <span
  m="1513660">the</span> <span m="1515880">curve</span> <span
  m="1516450">here.</span> <span m="1517410">But</span> <span
  m="1517740">to</span> <span m="1517920">compute</span> <span
  m="1518340">second</span> <span m="1518670">derivatives</span> <span
  m="1519390">when</span> <span m="1519630">you've</span> <span
  m="1519750">got</span> <span m="1520020">hundreds</span> <span
  m="1520120">and</span> <span m="1520590">thousands</span> <span
  m="1521100">of</span> <span m="1521160">variables</span> <span
  m="1522380">is</span> <span m="1522960">not</span> <span m="1523320">a</span>
  <span m="1523380">lot</span> <span m="1523620">of</span> <span
  m="1523680">fun.</span> <span m="1524620">So</span> <span
  m="1525270">most</span> <span m="1527340">effectively,</span> <span
  m="1529140">machine</span> <span m="1529560">learning</span> <span
  m="1530010">is</span> <span m="1530940">limited</span> <span
  m="1531330">to</span> <span m="1531510">first</span> <span
  m="1531840">derivatives,</span> <span m="1533490">the</span> <span
  m="1533610">gradient.</span></p><p><span m="1537150">OK.</span> <span
  m="1537940">So</span> <span m="1538150">that's</span> <span
  m="1538630">the</span> <span m="1538960">general</span> <span
  m="1539500">idea.</span> <span m="1540580">But</span> <span
  m="1540850">there</span> <span m="1541150">are</span> <span
  m="1541360">lots</span> <span m="1541960">and</span> <span
  m="1542110">lots</span> <span m="1542590">of</span> <span
  m="1545190">decisions</span> <span m="1546240">and--</span> <span
  m="1548850">why</span> <span m="1549300">doesn't</span> <span
  m="1549600">that--</span> <span m="1550860">how</span> <span
  m="1551250">well</span> <span m="1551520">does</span> <span
  m="1551730">that</span> <span m="1551910">work,</span> <span
  m="1552930">maybe,</span> <span m="1553260">is</span> <span
  m="1553410">a</span> <span m="1554550">good</span> <span
  m="1554760">question</span> <span m="1555210">to</span> <span
  m="1555360">ask.</span> <span m="1556200">Does</span> <span
  m="1556440">this</span> <span m="1556620">work</span> <span
  m="1556890">pretty</span> <span m="1557220">well</span> <span
  m="1561020">or</span> <span m="1561200">do</span> <span m="1561320">we</span>
  <span m="1561470">have</span> <span m="1561650">to</span> <span
  m="1562580">add</span> <span m="1562790">more</span> <span
  m="1563060">ideas?</span></p><p><span m="1564860">Well,</span> <span
  m="1566420">it</span> <span m="1566570">doesn't</span> <span
  m="1566990">always</span> <span m="1567350">work</span> <span
  m="1567620">well.</span> <span m="1569020">Let</span> <span
  m="1569140">me</span> <span m="1569290">tell</span> <span
  m="1569560">you</span> <span m="1570010">what</span> <span
  m="1570400">the</span> <span m="1570580">trouble</span> <span
  m="1571030">is.</span> <span m="1573370">I'm</span> <span
  m="1573760">way</span> <span m="1574180">off--</span> <span
  m="1575320">this</span> <span m="1576250">is</span> <span
  m="1577480">March</span> <span m="1577890">or</span> <span
  m="1578480">something.</span> <span m="1580380">But</span> <span
  m="1580870">anyway,</span> <span m="1581230">I'll</span> <span
  m="1581410">finish</span> <span m="1581860">this</span> <span
  m="1581980">sentence.</span></p><p><span m="1583840">So</span> <span
  m="1584950">what's</span> <span m="1585550">the</span> <span
  m="1585610">problem</span> <span m="1586060">with</span> <span
  m="1586270">this</span> <span m="1587470">gradient</span> <span
  m="1587980">descent</span> <span m="1588520">idea?</span> <span
  m="1590590">It</span> <span m="1590890">turns</span> <span
  m="1591310">out,</span> <span m="1591550">if</span> <span
  m="1591670">you're</span> <span m="1591820">going</span> <span
  m="1592180">down</span> <span m="1592510">a</span> <span
  m="1592570">narrow</span> <span m="1593050">valley--</span> <span
  m="1593680">I</span> <span m="1593800">don't</span> <span
  m="1593920">know,</span> <span m="1594040">if</span> <span
  m="1594160">you</span> <span m="1594280">can</span> <span
  m="1594850">sort</span> <span m="1595090">of</span> <span
  m="1595210">imagine</span> <span m="1595810">a</span> <span
  m="1595900">narrow</span> <span m="1596440">valley</span> <span
  m="1597400">toward</span> <span m="1597650">the</span> <span
  m="1597760">bottom.</span> <span m="1598900">So</span> <span
  m="1601330">here's</span> <span m="1601600">the</span> <span
  m="1601690">bottom.</span> <span m="1602980">Here's</span> <span
  m="1603250">your</span> <span m="1603400">starting</span> <span
  m="1603880">point.</span></p><p><span m="1604880">And</span> <span
  m="1604960">this</span> <span m="1605260">is--</span> <span
  m="1607060">you</span> <span m="1607330">have</span> <span
  m="1607510">to</span> <span m="1607610">have</span> <span
  m="1608350">think</span> <span m="1608620">of</span> <span
  m="1608740">this</span> <span m="1609040">as</span> <span m="1609250">a</span>
  <span m="1609640">bowl.</span> <span m="1610510">So</span> <span
  m="1611170">the</span> <span m="1611290">bowl</span> <span
  m="1611710">is--</span> <span m="1614050">or</span> <span
  m="1614260">the</span> <span m="1614410">two</span> <span
  m="1614650">eigenvalues,</span> <span m="1615430">you</span> <span
  m="1615610">could</span> <span m="1615790">say--</span> <span
  m="1616540">are</span> <span m="1616750">1</span> <span m="1617320">and</span>
  <span m="1617500">a</span> <span m="1617560">very</span> <span
  m="1617890">small</span> <span m="1618250">number.</span> <span
  m="1618700">The</span> <span m="1618820">bowl</span> <span
  m="1619420">is</span> <span m="1620470">long</span> <span
  m="1620800">and</span> <span m="1620950">thin.</span> <span
  m="1621610">Are</span> <span m="1621700">you</span> <span
  m="1621790">with</span> <span m="1622030">me?</span> <span
  m="1622750">Imagine</span> <span m="1623290">a</span> <span
  m="1623350">long,</span> <span m="1623870">thin</span> <span
  m="1624130">bowl.</span></p><p><span m="1625240">Then</span> <span
  m="1625540">what</span> <span m="1625750">happens</span> <span
  m="1626230">for</span> <span m="1626380">that</span> <span
  m="1626650">case?</span> <span m="1628230">You</span> <span m="1629050">take
  the</span> <span m="1629350">steepest</span> <span m="1629860">descent.</span>
  <span m="1631120">But</span> <span m="1631360">you</span> <span
  m="1631480">cross</span> <span m="1631990">the</span> <span
  m="1632140">valley,</span> <span m="1632650">and</span> <span
  m="1632860">very</span> <span m="1633220">soon,</span> <span
  m="1633640">you're</span> <span m="1634210">climbing</span> <span
  m="1634690">again.</span> <span m="1635800">So</span> <span
  m="1636010">you</span> <span m="1636220">take</span> <span
  m="1636460">very,</span> <span m="1637280">very</span> <span
  m="1637510">small</span> <span m="1638050">steps,</span> <span
  m="1638890">just</span> <span m="1639250">staggering</span> <span
  m="1640180">back</span> <span m="1640690">and</span> <span
  m="1640840">forth</span> <span m="1641410">across</span> <span
  m="1641950">this</span> <span m="1644200">and</span> <span
  m="1644380">getting</span> <span m="1645550">slowly,</span> <span
  m="1646480">but</span> <span m="1646720">too</span> <span
  m="1647050">slowly,</span> <span m="1647950">toward</span> <span
  m="1648220">the</span> <span m="1648310">bottom.</span></p><p><span
  m="1649920">So</span> <span m="1650100">that's</span> <span
  m="1650460">why</span> <span m="1651150">things</span> <span
  m="1651540">have</span> <span m="1651680">got</span> <span
  m="1651870">to</span> <span m="1652020">be</span> <span
  m="1653850">improved.</span> <span m="1655740">If</span> <span
  m="1656160">you</span> <span m="1656280">have</span> <span
  m="1658830">a</span> <span m="1658890">very</span> <span
  m="1659190">small</span> <span m="1659700">eigenvalue</span> <span
  m="1660480">and</span> <span m="1660570">a</span> <span
  m="1660630">very</span> <span m="1660900">large</span> <span
  m="1661320">eigenvalue,</span> <span m="1662370">those</span> <span
  m="1663420">tell</span> <span m="1663720">you</span> <span
  m="1664040">the</span> <span m="1665790">shape</span> <span
  m="1666180">of</span> <span m="1666300">the</span> <span
  m="1666390">bowl,</span> <span m="1666900">of</span> <span
  m="1667020">course.</span> <span m="1668160">And</span> <span
  m="1670380">many</span> <span m="1670890">cases</span> <span
  m="1671950">will</span> <span m="1672570">be</span> <span
  m="1672750">like</span> <span m="1673020">that--</span> <span
  m="1673290">have</span> <span m="1673440">a</span> <span
  m="1673530">small</span> <span m="1674070">and</span> <span
  m="1674220">a</span> <span m="1674280">large</span> <span
  m="1674760">eigenvalue.</span> <span m="1675510">And</span> <span
  m="1675660">then</span> <span m="1675840">you're</span> <span
  m="1675990">spending</span> <span m="1676440">all</span> <span
  m="1676590">your</span> <span m="1676770">time.</span> <span
  m="1677640">You're</span> <span m="1678210">quickly</span> <span
  m="1678690">going</span> <span m="1678990">up</span> <span
  m="1679200">the</span> <span m="1679410">other</span> <span
  m="1679650">side,</span> <span m="1680130">down,</span> <span
  m="1680910">up,</span> <span m="1681270">down,</span> <span
  m="1681690">up,</span> <span m="1681870">down.</span> <span
  m="1682590">And</span> <span m="1684120">you</span> <span
  m="1684270">need</span> <span m="1684540">a</span> <span
  m="1684600">new</span> <span m="1684840">idea.</span></p><p><span
  m="1686450">OK,</span> <span m="1687230">so</span> <span
  m="1687470">that's</span> <span m="1687860">really--</span> <span
  m="1690420">so</span> <span m="1690460">this</span> <span
  m="1690640">is</span> <span m="1690790">one</span> <span
  m="1691240">major</span> <span m="1691870">reason</span> <span
  m="1692320">why</span> <span m="1692530">positive</span> <span
  m="1693040">definite</span> <span m="1693520">is</span> <span
  m="1693640">so</span> <span m="1693880">important</span> <span
  m="1694420">because</span> <span m="1694840">positive</span> <span
  m="1695320">definite</span> <span m="1696160">gives</span> <span
  m="1696460">pictures</span> <span m="1696970">like</span> <span
  m="1697210">that.</span> <span m="1698600">But</span> <span
  m="1698740">then,</span> <span m="1699130">we</span> <span
  m="1699370">have</span> <span m="1699610">this</span> <span
  m="1699880">question</span> <span m="1700420">of,</span> <span
  m="1700690">are</span> <span m="1700870">the</span> <span
  m="1701050">eigenvalues</span> <span m="1701860">sort</span> <span
  m="1702100">of</span> <span m="1702220">the</span> <span
  m="1702340">same</span> <span m="1702760">size?</span> <span
  m="1703630">Of</span> <span m="1703750">course,</span> <span
  m="1704020">if</span> <span m="1704140">the</span> <span
  m="1704290">eigenvalues</span> <span m="1705040">are</span> <span
  m="1705160">all</span> <span m="1705400">equal,</span> <span
  m="1705790">what's</span> <span m="1706120">my</span> <span
  m="1706330">bowl</span> <span m="1706780">like?</span></p><p><span
  m="1708040">Suppose</span> <span m="1709960">I</span> <span
  m="1710110">have</span> <span m="1710230">the</span> <span
  m="1710380">identity.</span> <span m="1712170">So</span> <span
  m="1712420">then</span> <span m="1712780">x</span> <span
  m="1712990">squared</span> <span m="1713290">plus</span> <span
  m="1713560">y</span> <span m="1713830">squared</span> <span
  m="1714250">is</span> <span m="1714400">my</span> <span
  m="1714820">function.</span> <span m="1716210">Then</span> <span
  m="1716320">it's</span> <span m="1716560">a</span> <span
  m="1716650">perfectly</span> <span m="1717430">circular</span> <span
  m="1718120">bowl.</span> <span m="1718930">What</span> <span
  m="1719110">will</span> <span m="1719290">happen?</span></p><p><span
  m="1720160">Can</span> <span m="1720430">you</span> <span
  m="1720520">imagine</span> <span m="1721000">a</span> <span
  m="1721060">perfectly</span> <span m="1721690">circular--</span> <span
  m="1722320">like</span> <span m="1723000">any</span> <span
  m="1723280">bowl</span> <span m="1723640">in</span> <span
  m="1723760">the</span> <span m="1723880">kitchen</span> <span
  m="1724300">is</span> <span m="1724420">probably,</span> <span
  m="1725830">most</span> <span m="1726100">likely</span> <span
  m="1726550">circular.</span> <span m="1728710">And</span> <span
  m="1729310">suppose</span> <span m="1729820">I</span> <span
  m="1729940">do</span> <span m="1730180">gradient</span> <span
  m="1730660">descent</span> <span m="1731140">there.</span> <span
  m="1731590">I</span> <span m="1731710">start</span> <span
  m="1732160">at</span> <span m="1732610">some</span> <span
  m="1732850">point</span> <span m="1733210">on</span> <span
  m="1733360">this</span> <span m="1734260">perfectly</span> <span
  m="1734920">circular</span> <span m="1735520">bowl.</span> <span
  m="1736600">I</span> <span m="1736690">start</span> <span
  m="1737050">down.</span></p><p><span m="1737980">And</span> <span
  m="1738250">where</span> <span m="1738490">do</span> <span
  m="1738640">I</span> <span m="1738760">stop</span> <span m="1739150">in</span>
  <span m="1739270">that</span> <span m="1739520">case?</span> <span
  m="1742960">Do</span> <span m="1743260">I</span> <span m="1743950">hit</span>
  <span m="1744190">bottom?</span> <span m="1745630">I</span> <span
  m="1745720">do,</span> <span m="1746650">by</span> <span
  m="1746830">symmetry.</span></p><p><span m="1751520">So</span> <span
  m="1751630">if</span> <span m="1751750">I</span> <span m="1751870">take</span>
  <span m="1752140">x</span> <span m="1752320">squared</span> <span
  m="1752620">plus</span> <span m="1752860">y</span> <span
  m="1753160">squared</span> <span m="1754870">as</span> <span
  m="1755140">my</span> <span m="1755650">function</span> <span
  m="1756900">and</span> <span m="1757030">I</span> <span
  m="1757210">start</span> <span m="1757600">somewhere,</span> <span
  m="1760270">I</span> <span m="1760390">figure</span> <span
  m="1760750">out</span> <span m="1760930">the</span> <span
  m="1761050">gradient.</span> <span m="1762250">Yeah.</span> <span
  m="1762970">The</span> <span m="1763120">answer</span> <span
  m="1763450">is</span> <span m="1763750">I'll</span> <span
  m="1763900">go</span> <span m="1764050">right</span> <span
  m="1764350">through</span> <span m="1764650">the</span> <span
  m="1764770">center.</span></p><p><span m="1765460">So</span> <span
  m="1766270">really</span> <span m="1769990">positive</span> <span
  m="1770530">eigenvalues,</span> <span m="1771370">positive</span> <span
  m="1771820">definite</span> <span m="1772240">matrices</span> <span
  m="1772960">give</span> <span m="1773170">us</span> <span m="1773320">a</span>
  <span m="1773400">bowl.</span> <span m="1774370">But</span> <span
  m="1775510">if</span> <span m="1775660">the</span> <span
  m="1775810">eigenvalues</span> <span m="1776710">are</span> <span
  m="1777910">far</span> <span m="1778270">apart,</span> <span
  m="1779470">that's</span> <span m="1779770">when</span> <span
  m="1779980">we</span> <span m="1780130">have</span> <span
  m="1780310">problems.</span> <span m="1782050">OK.</span> <span
  m="1784810">I'm</span> <span m="1785030">going</span> <span
  m="1785270">back</span> <span m="1785570">to</span> <span
  m="1786590">my</span> <span m="1786740">job,</span> <span
  m="1788540">which</span> <span m="1788840">is</span> <span
  m="1789320">this--</span> <span m="1791840">because</span> <span
  m="1793340">this</span> <span m="1793700">is</span> <span
  m="1793940">so</span> <span m="1795200">nice.</span> <span
  m="1796730">Right.</span></p><p><span m="1797540">Could</span> <span
  m="1797810">you--</span> <span m="1799070">well,</span> <span
  m="1799520">the</span> <span m="1800060">homework</span> <span
  m="1801330">that's</span> <span m="1801970">maybe</span> <span
  m="1803150">going</span> <span m="1803480">out</span> <span
  m="1804200">this</span> <span m="1804410">minute</span> <span
  m="1806870">for</span> <span m="1807410">middle</span> <span
  m="1807770">of</span> <span m="1807830">next</span> <span
  m="1808160">week</span> <span m="1809350">gives</span> <span
  m="1809600">you</span> <span m="1809750">some</span> <span
  m="1810020">exercises</span> <span m="1810950">with</span> <span
  m="1811160">this.</span> <span m="1811540">Let</span> <span
  m="1812150">me</span> <span m="1815210">do</span> <span m="1815540">a</span>
  <span m="1815600">couple</span> <span m="1815900">of</span> <span
  m="1815990">things,</span> <span m="1816620">a</span> <span
  m="1816680">couple</span> <span m="1816920">of</span> <span
  m="1817070">exercises</span> <span m="1818300">here.</span> <span
  m="1820730">For</span> <span m="1820940">example,</span> <span
  m="1822740">suppose</span> <span m="1823130">I</span> <span
  m="1823220">have</span> <span m="1823370">a</span> <span
  m="1823460">positive</span> <span m="1823910">definite</span> <span
  m="1824360">matrix,</span> <span m="1824900">S,</span> <span
  m="1825890">and</span> <span m="1826010">a</span> <span
  m="1826100">positive</span> <span m="1826490">definite</span> <span
  m="1826910">matrix,</span> <span m="1827450">T.</span> <span
  m="1829010">If</span> <span m="1829160">I</span> <span m="1829310">add</span>
  <span m="1829580">those</span> <span m="1829910">matrices,</span> <span
  m="1831650">is</span> <span m="1831840">the</span> <span
  m="1831900">result</span> <span m="1832310">positive</span> <span
  m="1832820">definite?</span> <span m="1833600">So</span> <span
  m="1833750">there</span> <span m="1833870">is</span> <span
  m="1834050">a</span> <span m="1834920">perfect</span> <span
  m="1835340">math</span> <span m="1835730">question,</span> <span
  m="1837140">and</span> <span m="1837770">we</span> <span
  m="1837920">hope</span> <span m="1838190">to</span> <span
  m="1838310">answer</span> <span m="1838750">it.</span></p><p><span
  m="1841960">So</span> <span m="1843010">S</span> <span m="1843480">and</span>
  <span m="1843640">T--</span> <span m="1844660">positive</span> <span
  m="1845260">definite.</span> <span m="1848470">What</span> <span
  m="1848680">about</span> <span m="1849070">S</span> <span
  m="1849370">plus</span> <span m="1849790">T?</span> <span
  m="1853720">Is</span> <span m="1853900">that</span> <span
  m="1854140">matrix</span> <span m="1854680">positive</span> <span
  m="1855190">definite?</span> <span m="1856470">OK.</span> <span
  m="1858130">How</span> <span m="1858310">do</span> <span m="1858520">I</span>
  <span m="1858670">answer</span> <span m="1859060">such</span> <span
  m="1859390">a</span> <span m="1859450">question?</span></p><p><span
  m="1860320">I</span> <span m="1860410">look</span> <span m="1860650">at</span>
  <span m="1860740">my</span> <span m="1860950">five</span> <span
  m="1861400">tests</span> <span m="1861970">and</span> <span
  m="1862120">I</span> <span m="1862240">think,</span> <span
  m="1862720">can</span> <span m="1862960">I</span> <span m="1863020">use</span>
  <span m="1863350">it?</span> <span m="1863920">Which</span> <span
  m="1864220">one</span> <span m="1864520">will</span> <span
  m="1864910">be</span> <span m="1865360">good?</span> <span
  m="1866210">And</span> <span m="1866900">one</span> <span
  m="1867130">that</span> <span m="1867250">won't</span> <span
  m="1868420">tell</span> <span m="1868630">me</span> <span
  m="1868780">much</span> <span m="1869950">is</span> <span
  m="1870160">the</span> <span m="1870280">eigenvalues</span> <span
  m="1871150">because</span> <span m="1871540">the</span> <span
  m="1871690">eigenvalues</span> <span m="1872590">of</span> <span
  m="1872710">S</span> <span m="1872920">plus</span> <span m="1873280">T</span>
  <span m="1874960">are</span> <span m="1875050">not</span> <span
  m="1875500">immediately</span> <span m="1876160">clear</span> <span
  m="1876640">from</span> <span m="1876940">the</span> <span
  m="1877060">eigenvalues</span> <span m="1878290">of</span> <span
  m="1878440">S</span> <span m="1879460">and</span> <span m="1879640">T</span>
  <span m="1879970">separately.</span> <span m="1881260">I</span> <span
  m="1881380">don't</span> <span m="1881560">want</span> <span
  m="1881710">to</span> <span m="1881800">use</span> <span
  m="1882070">that</span> <span m="1882280">test.</span> <span
  m="1883120">This</span> <span m="1883390">is</span> <span
  m="1883510">my</span> <span m="1883750">favorite</span> <span
  m="1884260">test,</span> <span m="1884840">so</span> <span
  m="1884950">I'm</span> <span m="1885130">going</span> <span
  m="1885250">to</span> <span m="1885340">use</span> <span
  m="1885610">that.</span></p><p><span m="1886540">What</span> <span
  m="1886750">about</span> <span m="1886990">the</span> <span
  m="1887170">energy</span> <span m="1887740">in--</span> <span
  m="1888790">so</span> <span m="1889150">look</span> <span
  m="1889420">at</span> <span m="1889510">the</span> <span
  m="1889660">energy.</span> <span m="1893590">So</span> <span
  m="1893760">I</span> <span m="1893850">look</span> <span m="1894090">at</span>
  <span m="1894210">x</span> <span m="1894480">transpose,</span> <span
  m="1896030">S</span> <span m="1896350">plus</span> <span m="1896700">T</span>
  <span m="1897360">x.</span> <span m="1899860">And</span> <span
  m="1900140">what's</span> <span m="1900500">my</span> <span
  m="1900680">question</span> <span m="1901250">in</span> <span
  m="1901370">my</span> <span m="1901520">mind</span> <span
  m="1901910">here?</span> <span m="1903200">Is</span> <span
  m="1903530">that</span> <span m="1903860">a</span> <span
  m="1903950">positive</span> <span m="1904730">number</span> <span
  m="1905150">or</span> <span m="1905270">not,</span> <span
  m="1906390">for</span> <span m="1906690">every</span> <span
  m="1907040">x?</span> <span m="1908300">And</span> <span
  m="1908570">how</span> <span m="1908810">am</span> <span m="1908960">I</span>
  <span m="1909050">going</span> <span m="1909180">to</span> <span
  m="1909260">answer</span> <span m="1909650">that</span> <span
  m="1909860">question?</span></p><p><span m="1913200">Just</span> <span
  m="1913650">separate</span> <span m="1914250">those</span> <span
  m="1914670">into</span> <span m="1914970">two</span> <span
  m="1915180">pieces,</span> <span m="1916110">right?</span> <span
  m="1916320">It's</span> <span m="1916590">there</span> <span
  m="1916920">in</span> <span m="1917010">front</span> <span
  m="1917250">of</span> <span m="1917310">me.</span> <span
  m="1918270">It's</span> <span m="1918510">this</span> <span
  m="1918810">one</span> <span m="1920030">plus</span> <span
  m="1920400">this</span> <span m="1920640">one.</span> <span
  m="1924630">And</span> <span m="1924900">both</span> <span
  m="1925170">of</span> <span m="1925230">those</span> <span
  m="1925530">are</span> <span m="1925620">positive,</span> <span
  m="1926160">so</span> <span m="1926370">the</span> <span
  m="1926490">answer</span> <span m="1926820">is</span> <span
  m="1927000">yes,</span> <span m="1928230">it</span> <span
  m="1928380">is</span> <span m="1928590">positive</span> <span
  m="1929070">definite.</span> <span m="1929610">Yes.</span></p><p><span
  m="1935110">You</span> <span m="1935230">see</span> <span
  m="1935470">how</span> <span m="1935650">the</span> <span
  m="1935800">energy</span> <span m="1937000">was</span> <span
  m="1937270">right.</span> <span m="1937870">I</span> <span
  m="1937990">don't</span> <span m="1938170">want</span> <span
  m="1938320">to</span> <span m="1938440">compute</span> <span
  m="1938930">the</span> <span m="1939610">pivots</span> <span
  m="1940270">or</span> <span m="1940450">any</span> <span
  m="1940690">determinants.</span> <span m="1941530">That</span> <span
  m="1941620">would</span> <span m="1941770">be</span> <span
  m="1942310">a</span> <span m="1942400">nightmare</span> <span
  m="1943120">trying</span> <span m="1943390">to</span> <span
  m="1943480">find</span> <span m="1943780">the</span> <span
  m="1944260">determinants</span> <span m="1945730">for</span> <span
  m="1945970">S</span> <span m="1946180">plus</span> <span m="1946510">T.</span>
  <span m="1947560">But</span> <span m="1947800">this</span> <span
  m="1948100">one</span> <span m="1948610">just</span> <span
  m="1950500">does</span> <span m="1950950">it</span> <span
  m="1951250">immediately.</span></p><p><span m="1952690">What</span> <span
  m="1952930">else</span> <span m="1953320">would</span> <span
  m="1953560">be</span> <span m="1953740">a</span> <span m="1953830">good</span>
  <span m="1954100">example</span> <span m="1955510">to</span> <span
  m="1955660">start</span> <span m="1956050">with?</span> <span
  m="1956380">What</span> <span m="1956500">about</span> <span
  m="1956720">S</span> <span m="1957010">inverse?</span> <span
  m="1958240">Is</span> <span m="1958390">that</span> <span
  m="1958570">positive</span> <span m="1959080">definite?</span> <span
  m="1960260">So</span> <span m="1960580">let</span> <span m="1960730">me</span>
  <span m="1960940">ask</span> <span m="1961270">S</span> <span
  m="1961670">positive</span> <span m="1962170">definite,</span> <span
  m="1964660">and</span> <span m="1965080">I</span> <span
  m="1965230">want</span> <span m="1965410">to</span> <span
  m="1965470">ask</span> <span m="1965830">about</span> <span
  m="1966160">its</span> <span m="1966370">inverse.</span></p><p><span
  m="1967310">So</span> <span m="1967460">its</span> <span m="1967950">inverse
  is a</span> <span m="1968310">symmetric</span> <span
  m="1968860">matrix.</span> <span m="1971770">And</span> <span
  m="1974460">is</span> <span m="1974640">it</span> <span
  m="1974700">positive</span> <span m="1975180">definite?</span> <span
  m="1976990">And</span> <span m="1977080">the</span> <span
  m="1977340">answer--</span> <span m="1979180">yes.</span> <span
  m="1980170">Yes.</span> <span m="1981790">I've</span> <span
  m="1981890">got</span> <span m="1982090">five</span> <span
  m="1982450">tests,</span> <span m="1984090">20%</span> <span
  m="1984810">chance</span> <span m="1985230">at</span> <span
  m="1985380">picking</span> <span m="1985740">the</span> <span
  m="1985830">right</span> <span m="1986040">one.</span> <span
  m="1987630">Determinants</span> <span m="1988110">is</span> <span
  m="1988590">not</span> <span m="1989010">good.</span> <span
  m="1991220">The</span> <span m="1991340">first</span> <span
  m="1991790">one</span> <span m="1991970">is</span> <span
  m="1992120">great.</span></p><p><span m="1993520">The</span> <span
  m="1993610">first</span> <span m="1993970">one</span> <span
  m="1994120">is</span> <span m="1994300">the</span> <span
  m="1994390">good</span> <span m="1994600">one</span> <span
  m="1995290">for</span> <span m="1995440">this</span> <span
  m="1995860">question</span> <span m="1996970">because</span> <span
  m="1997570">the</span> <span m="1997720">eigenvalues.</span> <span
  m="1998650">So</span> <span m="1998830">the</span> <span
  m="1998950">answer</span> <span m="1999310">is</span> <span
  m="1999460">yes.</span> <span m="2001200">Yes,</span> <span
  m="2002040">this</span> <span m="2003630">has--</span> <span
  m="2005900">eigenvalues.</span> <span m="2006890">So</span> <span
  m="2007070">what</span> <span m="2007250">are</span> <span
  m="2007340">the</span> <span m="2007490">eigenvalues</span> <span
  m="2008420">of</span> <span m="2008640">S</span> <span
  m="2008930">inverse?</span> <span m="2010520">1</span> <span
  m="2010790">over</span> <span m="2011030">lambda?</span> <span
  m="2012810">So--</span> <span m="2014240">yes,</span> <span
  m="2014840">positive</span> <span m="2015320">definite,</span> <span
  m="2016610">positive</span> <span m="2017180">definite.</span> <span
  m="2025400">Yep.</span></p><p><span m="2027680">What</span> <span
  m="2027860">about--</span> <span m="2029390">let</span> <span
  m="2029540">me</span> <span m="2029840">ask</span> <span
  m="2030140">you</span> <span m="2030310">just</span> <span
  m="2030530">one</span> <span m="2030800">more</span> <span
  m="2031070">question</span> <span m="2031550">of</span> <span
  m="2031640">the</span> <span m="2031790">same</span> <span
  m="2032240">sort.</span> <span m="2034000">Suppose</span> <span
  m="2034430">I</span> <span m="2034490">have</span> <span m="2034610">a</span>
  <span m="2034670">matrix,</span> <span m="2035260">S,</span> <span
  m="2038000">and</span> <span m="2038720">suppose</span> <span
  m="2039320">I</span> <span m="2039500">multiply</span> <span
  m="2040100">it</span> <span m="2040250">by</span> <span
  m="2041960">another</span> <span m="2042380">matrix.</span> <span
  m="2043460">Oh,</span> <span m="2043580">well.</span> <span
  m="2043940">OK.</span> <span m="2045510">Suppose--</span> <span
  m="2050700">do</span> <span m="2051080">I</span> <span m="2051170">want</span>
  <span m="2051380">to</span> <span m="2051440">ask</span> <span
  m="2051770">you</span> <span m="2051860">this?</span> <span
  m="2052860">Suppose</span> <span m="2054350">I</span> <span
  m="2054500">asked</span> <span m="2054770">you</span> <span
  m="2054889">about</span> <span m="2055280">S</span> <span
  m="2055639">times</span> <span m="2057050">another</span> <span
  m="2057469">matrix,</span> <span m="2059060">M.</span> <span
  m="2065530">Would</span> <span m="2065770">that</span> <span
  m="2066010">be</span> <span m="2066159">positive</span> <span
  m="2066699">definite</span> <span m="2067810">or</span> <span
  m="2068139">not?</span></p><p><span m="2069010">Now</span> <span
  m="2069790">I'm</span> <span m="2069940">going</span> <span
  m="2070050">to</span> <span m="2070210">tell</span> <span
  m="2070420">you</span> <span m="2071260">the</span> <span
  m="2071650">answer</span> <span m="2071980">is</span> <span
  m="2072159">that</span> <span m="2072350">the</span> <span
  m="2072520">question</span> <span m="2073000">wasn't</span> <span
  m="2073330">any</span> <span m="2073570">good</span> <span
  m="2074590">because</span> <span m="2075010">that</span> <span
  m="2075190">matrix</span> <span m="2075760">is</span> <span
  m="2075880">probably</span> <span m="2076239">not</span> <span
  m="2076510">symmetric,</span> <span m="2078060">and</span> <span
  m="2078190">I'm</span> <span m="2078370">only</span> <span
  m="2078639">dealing</span> <span m="2079000">with</span> <span
  m="2079210">symmetric</span> <span m="2079810">matrices.</span> <span
  m="2080860">Matrices</span> <span m="2081429">have</span> <span
  m="2081610">to</span> <span m="2081730">be</span> <span
  m="2081880">symmetric</span> <span m="2082630">before</span> <span
  m="2084969">I</span> <span m="2085090">know</span> <span
  m="2085360">they</span> <span m="2085510">have</span> <span
  m="2085750">real</span> <span m="2086170">eigenvalues</span> <span
  m="2087580">and</span> <span m="2088150">I</span> <span m="2088239">can</span>
  <span m="2088449">ask</span> <span m="2088840">these</span> <span
  m="2089110">questions.</span> <span m="2090400">So</span> <span
  m="2090639">that's</span> <span m="2091000">not</span> <span
  m="2091300">good.</span></p><p><span m="2092050">But</span> <span
  m="2092260">I</span> <span m="2092614">could--</span> <span
  m="2094540">oh,</span> <span m="2095170">let's</span> <span
  m="2095409">see.</span> <span m="2098830">Let</span> <span
  m="2098920">me</span> <span m="2099940">put</span> <span m="2100210">it</span>
  <span m="2100280">in</span> <span m="2100480">an</span> <span
  m="2100630">orthogonal</span> <span m="2101380">guy.</span> <span
  m="2102010">Well,</span> <span m="2102430">still</span> <span
  m="2102760">that's</span> <span m="2102970">not</span> <span
  m="2103250">symmetric.</span> <span m="2103810">But</span> <span
  m="2103960">if</span> <span m="2104100">I</span> <span m="2104230">put</span>
  <span m="2104690">the--</span> <span m="2106470">it's</span> <span
  m="2106720">transpose</span> <span m="2107410">over</span> <span
  m="2107620">there.</span> <span m="2107950">Then</span> <span
  m="2108160">I</span> <span m="2108280">made</span> <span m="2108610">it</span>
  <span m="2108760">symmetric.</span> <span m="2110530">Oh,</span> <span
  m="2110970">dear,</span> <span m="2111360">I</span> <span
  m="2111460">may</span> <span m="2111640">be</span> <span
  m="2111790">getting</span> <span m="2112030">myself</span> <span
  m="2112510">in</span> <span m="2112630">trouble</span> <span
  m="2112990">here.</span></p><p><span m="2114370">So</span> <span
  m="2114760">I'm</span> <span m="2114940">starting</span> <span
  m="2115390">with</span> <span m="2115570">a</span> <span
  m="2115630">positive</span> <span m="2116080">definite</span> <span
  m="2116560">S.</span> <span m="2117490">I'm</span> <span m="2117640">hitting
  it</span> <span m="2118000">with</span> <span m="2118240">an</span> <span
  m="2118360">orthogonal</span> <span m="2119050">matrix</span> <span
  m="2119620">and</span> <span m="2119760">its</span> <span
  m="2119950">transpose.</span> <span m="2121120">And</span> <span
  m="2121930">my</span> <span m="2122350">instinct</span> <span
  m="2123550">carried</span> <span m="2123970">me</span> <span
  m="2124120">here</span> <span m="2124450">because</span> <span
  m="2124720">I</span> <span m="2124840">know</span> <span
  m="2125080">that</span> <span m="2125230">that's</span> <span
  m="2125560">still</span> <span m="2126010">symmetric.</span> <span
  m="2126760">Right?</span> <span m="2127060">Everybody</span> <span
  m="2127450">sees</span> <span m="2127780">that?</span></p><p><span
  m="2128470">If</span> <span m="2128620">I</span> <span
  m="2128740">transpose</span> <span m="2129490">this,</span> <span
  m="2130240">Q</span> <span m="2130540">transpose</span> <span
  m="2131200">will</span> <span m="2131320">come</span> <span
  m="2131590">here,</span> <span m="2132430">S,</span> <span
  m="2133225">Q</span> <span m="2133540">will</span> <span m="2133720">go</span>
  <span m="2133930">there.</span> <span m="2134300">It'll</span> <span
  m="2134410">be</span> <span m="2136040">symmetric.</span> <span
  m="2137390">Now</span> <span m="2137650">is</span> <span
  m="2137890">that</span> <span m="2138160">positive</span> <span
  m="2138700">definite?</span> <span m="2141880">Ah,</span> <span
  m="2142450">yes.</span> <span m="2142960">We</span> <span
  m="2143140">can</span> <span m="2143500">answer</span> <span
  m="2143860">that.</span></p><p><span m="2146335">Can</span> <span
  m="2146780">we?</span> <span m="2147920">Is</span> <span
  m="2148130">that</span> <span m="2148340">positive</span> <span
  m="2148820">definite?</span> <span m="2149760">So</span> <span
  m="2149960">remember</span> <span m="2150410">that</span> <span
  m="2150620">this</span> <span m="2150860">is</span> <span
  m="2151010">an</span> <span m="2151100">orthogonal</span> <span
  m="2151790">matrix,</span> <span m="2152430">so</span> <span
  m="2153020">also,</span> <span m="2153470">if</span> <span
  m="2153650">you</span> <span m="2153770">wanted</span> <span
  m="2154160">me</span> <span m="2154340">to</span> <span
  m="2154460">write</span> <span m="2154730">it</span> <span
  m="2154850">that</span> <span m="2155120">way,</span> <span
  m="2155420">I</span> <span m="2155570">could.</span> <span
  m="2159150">And</span> <span m="2159870">what</span> <span
  m="2160230">about</span> <span m="2160710">positive-definiteness</span> <span
  m="2162060">of</span> <span m="2162210">that</span> <span
  m="2162680">thing?</span> <span m="2168420">Answer,</span> <span
  m="2168810">I</span> <span m="2168900">think,</span> <span
  m="2169150">is</span> <span m="2169320">yes.</span> <span
  m="2170100">Do</span> <span m="2170190">you</span> <span
  m="2170460">agree?</span> <span m="2172090">It</span> <span
  m="2172270">is</span> <span m="2172480">positive</span> <span
  m="2172990">definite?</span></p><p><span m="2174070">Give</span> <span
  m="2174250">me</span> <span m="2174370">a</span> <span
  m="2174460">reason,</span> <span m="2174910">though.</span> <span
  m="2176050">Why</span> <span m="2176620">is</span> <span
  m="2176890">this</span> <span m="2177160">positive</span> <span
  m="2177670">definite?</span> <span m="2181190">So</span> <span
  m="2181490">that</span> <span m="2181700">word</span> <span
  m="2182090">similar,</span> <span m="2185330">this</span> <span
  m="2185570">is</span> <span m="2185750">a</span> <span
  m="2185840">similar</span> <span m="2186470">matrix</span> <span
  m="2187130">to</span> <span m="2187370">S?</span> <span m="2187710">Do</span>
  <span m="2187760">you</span> <span m="2187820">remember</span> <span
  m="2188120">what</span> <span m="2188330">similar</span> <span
  m="2188810">means</span> <span m="2189170">from</span> <span
  m="2189440">last</span> <span m="2189740">time?</span> <span
  m="2190700">It</span> <span m="2190820">means</span> <span
  m="2191240">that</span> <span m="2191390">sum</span> <span
  m="2191720">M</span> <span m="2192290">and</span> <span m="2192470">its</span>
  <span m="2192710">inverse</span> <span m="2193250">are</span> <span
  m="2193400">here,</span> <span m="2194570">which</span> <span
  m="2194810">they</span> <span m="2194990">are.</span></p><p><span
  m="2195860">And</span> <span m="2196880">so</span> <span
  m="2197090">what's</span> <span m="2197660">the</span> <span
  m="2199340">consequence</span> <span m="2200090">of</span> <span
  m="2200180">being</span> <span m="2200480">similar?</span> <span
  m="2201080">What</span> <span m="2201250">do</span> <span m="2201380">I</span>
  <span m="2201470">know</span> <span m="2201740">about</span> <span
  m="2202070">a</span> <span m="2202580">matrix</span> <span
  m="2203120">that's</span> <span m="2203300">similar</span> <span
  m="2203840">to</span> <span m="2204080">S?</span> <span m="2204470">It</span>
  <span m="2204620">has--</span></p><p><span m="2205010">AUDIENCE:</span> <span
  m="2205160">Same</span> <span m="2205310">[INAUDIBLE]</span></p><p><span
  m="2206060">GILBERT STRANG:</span> <span m="2206270">Same</span> <span
  m="2206480">eigenvalues.</span> <span m="2207380">And</span> <span
  m="2207800">therefore,</span> <span m="2208940">we're</span> <span
  m="2209090">good.</span> <span m="2209990">Right?</span> <span
  m="2210800">Or</span> <span m="2211730">I</span> <span
  m="2211850">could</span> <span m="2212090">go</span> <span
  m="2212330">this</span> <span m="2212630">way.</span> <span
  m="2214580">I</span> <span m="2215030">like</span> <span
  m="2215300">energy,</span> <span m="2215750">so</span> <span
  m="2215990">let</span> <span m="2216140">me</span> <span
  m="2216290">try</span> <span m="2216560">that</span> <span
  m="2216770">one.</span> <span m="2217400">x</span> <span
  m="2217670">transpose,</span> <span m="2219860">Q</span> <span
  m="2220610">transpose,</span> <span m="2221990">SQx--</span> <span
  m="2224060">that</span> <span m="2224240">would</span> <span
  m="2224420">be</span> <span m="2224570">the</span> <span
  m="2224720">energy.</span> <span m="2226310">And</span> <span
  m="2226520">what</span> <span m="2226700">am</span> <span m="2226850">I</span>
  <span m="2226970">trying</span> <span m="2227240">to</span> <span
  m="2227360">show?</span> <span m="2228020">I'm</span> <span
  m="2228170">trying</span> <span m="2228440">to</span> <span
  m="2228530">show</span> <span m="2228770">it's</span> <span
  m="2228950">positive.</span> <span m="2230270">So,</span> <span
  m="2230570">of</span> <span m="2230720">course,</span> <span
  m="2232970">as</span> <span m="2233090">soon</span> <span
  m="2233390">as</span> <span m="2233510">I</span> <span m="2233690">see</span>
  <span m="2235070">that,</span> <span m="2236180">it's</span> <span
  m="2237020">just</span> <span m="2237620">waiting</span> <span
  m="2238250">for</span> <span m="2238430">me</span> <span
  m="2238640">to--</span> <span m="2240500">let</span> <span
  m="2240850">Qx</span> <span m="2241640">be</span> <span
  m="2241880">something</span> <span m="2242390">called</span> <span
  m="2243020">y,</span> <span m="2243630">maybe.</span> <span
  m="2244760">And</span> <span m="2244880">then</span> <span
  m="2245180">what</span> <span m="2245420">will</span> <span
  m="2245600">this</span> <span m="2245840">be?</span></p><p><span
  m="2246170">AUDIENCE:</span> <span m="2246390">y</span> <span
  m="2246610">[INAUDIBLE]</span></p><p><span m="2247050">GILBERT STRANG:</span>
  <span m="2247265">y</span> <span m="2247480">transpose.</span> <span
  m="2249800">So</span> <span m="2250280">this</span> <span
  m="2250580">energy</span> <span m="2251240">would</span> <span
  m="2251480">be</span> <span m="2251690">the</span> <span
  m="2251870">same</span> <span m="2252350">as</span> <span m="2252620">y</span>
  <span m="2253160">transpose,</span> <span m="2254900">Sy.</span> <span
  m="2256850">And</span> <span m="2257060">what</span> <span
  m="2257240">do</span> <span m="2257390">I</span> <span m="2257510">know</span>
  <span m="2257720">about</span> <span m="2258020">that?</span> <span
  m="2259400">It's</span> <span m="2259670">positive</span> <span
  m="2261100">because</span> <span m="2261320">that's</span> <span
  m="2261580">an</span> <span m="2261730">energy</span> <span
  m="2262840">in</span> <span m="2263020">the</span> <span m="2263140">y,</span>
  <span m="2263530">for</span> <span m="2263680">the</span> <span
  m="2263800">y</span> <span m="2264070">vector.</span> <span
  m="2265390">So</span> <span m="2265870">one</span> <span
  m="2266260">way</span> <span m="2266440">or</span> <span
  m="2266500">another,</span> <span m="2267030">we</span> <span
  m="2268450">get</span> <span m="2268660">the</span> <span
  m="2268840">answer</span> <span m="2269230">yes</span> <span
  m="2269740">to</span> <span m="2269920">that</span> <span
  m="2270310">question.</span> <span m="2271774">OK.</span> <span
  m="2273682">OK.</span></p><p><span m="2277980">Let</span> <span
  m="2278130">me</span> <span m="2283470">introduce</span> <span
  m="2284040">the</span> <span m="2284190">idea</span> <span
  m="2284550">of</span> <span m="2284640">semidefinite.</span> <span
  m="2286350">Semidefinite</span> <span m="2287280">is</span> <span
  m="2287760">the</span> <span m="2287880">borderline.</span> <span
  m="2289450">So</span> <span m="2290010">what</span> <span
  m="2290190">did</span> <span m="2290370">we</span> <span
  m="2290550">have?</span></p><p><span m="2290820">We</span> <span
  m="2290940">had</span> <span m="2291090">3,</span> <span m="2291690">4,</span>
  <span m="2292320">4.</span> <span m="2293400">And</span> <span
  m="2293580">then</span> <span m="2293970">when</span> <span
  m="2294210">it</span> <span m="2294300">was</span> <span m="2294540">5,</span>
  <span m="2295170">you</span> <span m="2295320">told</span> <span
  m="2295650">me</span> <span m="2297320">indefinite,</span> <span
  m="2298120">a</span> <span m="2298240">negative</span> <span
  m="2298790">eigenvalue.</span> <span m="2299960">When</span> <span
  m="2300170">it</span> <span m="2300230">was</span> <span m="2300440">6,</span>
  <span m="2301070">you</span> <span m="2301220">told</span> <span
  m="2301550">me</span> <span m="2302350">2</span> <span
  m="2302660">positive</span> <span m="2303200">eigenvalues--</span> <span
  m="2304460">definite.</span></p><p><span m="2305510">What's</span> <span
  m="2305810">the</span> <span m="2305900">borderline?</span> <span
  m="2308510">What's</span> <span m="2308850">the</span> <span
  m="2308930">borderline</span> <span m="2309640">there?</span> <span
  m="2312680">It's</span> <span m="2312950">not</span> <span
  m="2313130">going</span> <span m="2313220">to</span> <span
  m="2313370">be</span> <span m="2313520">an</span> <span
  m="2313700">integer.</span> <span m="2315440">What</span> <span
  m="2315770">do</span> <span m="2315890">I</span> <span
  m="2315980">mean?</span> <span m="2316410">What</span> <span
  m="2316520">am</span> <span m="2316640">I</span> <span
  m="2316700">looking</span> <span m="2317030">for,</span> <span
  m="2317370">the</span> <span m="2317550">borderline?</span></p><p><span
  m="2323110">So</span> <span m="2323350">tell</span> <span
  m="2323530">me</span> <span m="2323650">again?</span></p><p><span
  m="2324220">AUDIENCE:</span> <span m="2324347">16</span> <span
  m="2324730">over--</span></p><p><span m="2325120">GILBERT STRANG:</span> <span
  m="2325255">16/3,</span> <span m="2326320">that</span> <span
  m="2326530">sounds</span> <span m="2326890">right.</span> <span
  m="2328960">Why</span> <span m="2329320">is</span> <span
  m="2329470">that</span> <span m="2329680">the</span> <span
  m="2329760">borderline?</span></p><p><span m="2330760">AUDIENCE:</span> <span
  m="2331000">[INAUDIBLE]</span></p><p><span m="2332200">GILBERT STRANG:</span>
  <span m="2332395">Because</span> <span m="2332590">now</span> <span
  m="2333160">the</span> <span m="2333310">determinant</span> <span
  m="2334090">is--</span></p><p><span m="2334540">AUDIENCE:</span> <span
  m="2334725">0.</span></p><p><span m="2335280">GILBERT STRANG:</span> <span
  m="2335495">0.</span> <span m="2335710">It's</span> <span
  m="2335860">singular.</span> <span m="2336760">It</span> <span
  m="2336910">has</span> <span m="2337150">a</span> <span m="2337210">0</span>
  <span m="2337690">eigenvalue.</span> <span m="2339550">There's</span> <span
  m="2339760">a</span> <span m="2339820">0</span> <span
  m="2340270">eigenvalue.</span> <span m="2340870">So</span> <span
  m="2341050">that's</span> <span m="2341380">what</span> <span
  m="2341570">semidefinite</span> <span m="2342460">means.</span> <span
  m="2343270">Lambdas</span> <span m="2343870">are</span> <span
  m="2344800">equal</span> <span m="2345110">to</span> <span
  m="2345270">0.</span></p><p><span m="2345730">Wait</span> <span
  m="2345940">a</span> <span m="2346000">minute.</span> <span
  m="2346780">That</span> <span m="2347050">has</span> <span
  m="2347290">a</span> <span m="2347350">0</span> <span
  m="2347800">eigenvalue</span> <span m="2348740">because</span> <span
  m="2349010">it's</span> <span m="2349190">determinant</span> <span
  m="2349870">is</span> <span m="2349930">0.</span> <span m="2350620">How</span>
  <span m="2350890">do</span> <span m="2351100">I</span> <span
  m="2351190">know</span> <span m="2351490">that</span> <span
  m="2351670">the</span> <span m="2351850">other</span> <span
  m="2352230">eigenvalue</span> <span m="2353350">is</span> <span
  m="2353590">positive?</span> <span m="2355120">Could</span> <span
  m="2356080">it</span> <span m="2356170">be</span> <span
  m="2356440">that</span> <span m="2356650">the</span> <span
  m="2356800">other</span> <span m="2357020">ei--</span> <span
  m="2357380">so</span> <span m="2357460">this</span> <span
  m="2357730">is</span> <span m="2357910">the</span> <span
  m="2359520">semidefinite</span> <span m="2361680">case</span> <span
  m="2362130">we</span> <span m="2362340">hope.</span> <span
  m="2363380">But</span> <span m="2363720">we'd</span> <span
  m="2364070">better</span> <span m="2364710">finish</span> <span
  m="2365220">that</span> <span m="2366660">reasoning.</span></p><p><span
  m="2367710">How</span> <span m="2368040">do</span> <span m="2368190">I</span>
  <span m="2368310">know</span> <span m="2368640">that</span> <span
  m="2368850">the</span> <span m="2369060">other</span> <span
  m="2369450">eigenvalue</span> <span m="2370280">is</span> <span
  m="2370500">positive?</span></p><p><span m="2371040">AUDIENCE:</span> <span
  m="2371256">Trace.</span></p><p><span m="2372340">GILBERT STRANG:</span> <span
  m="2372527">The trace,</span> <span m="2373380">because</span> <span
  m="2374670">adding</span> <span m="2375330">3</span> <span
  m="2375900">plus</span> <span m="2376200">16/3,</span> <span
  m="2377430">whatever</span> <span m="2377820">the</span> <span
  m="2377910">heck</span> <span m="2378090">that</span> <span
  m="2378300">might</span> <span m="2378570">give,</span> <span
  m="2378900">it</span> <span m="2378990">certainly</span> <span
  m="2379350">gives</span> <span m="2379590">a</span> <span
  m="2379680">positive</span> <span m="2380190">number.</span> <span
  m="2381480">And</span> <span m="2381660">that</span> <span
  m="2381870">will</span> <span m="2382110">be</span> <span
  m="2382350">lambda</span> <span m="2382800">1</span> <span
  m="2383160">plus</span> <span m="2383490">lambda</span> <span
  m="2383880">2.</span> <span m="2384650">That's</span> <span
  m="2384960">the</span> <span m="2385060">trace.</span></p><p><span
  m="2385980">But</span> <span m="2386190">lambda</span> <span
  m="2386580">2</span> <span m="2386910">is</span> <span m="2387090">0.</span>
  <span m="2388200">We</span> <span m="2388350">know</span> <span
  m="2388710">from</span> <span m="2388980">this</span> <span
  m="2389280">it's</span> <span m="2389640">singular.</span> <span
  m="2390210">So</span> <span m="2390420">we</span> <span
  m="2390540">know</span> <span m="2390840">lambda</span> <span m="2391170">2
  is</span> <span m="2391440">0.</span> <span m="2391830">So</span> <span
  m="2392010">lambda</span> <span m="2392460">1</span> <span
  m="2393240">must</span> <span m="2393600">be</span> <span m="2393930">3</span>
  <span m="2394380">plus</span> <span m="2394830">5--</span> <span
  m="2395870">5</span> <span m="2396310">and</span> <span
  m="2396410">1/3.</span> <span m="2397910">The</span> <span
  m="2398070">lambdas</span> <span m="2398610">must</span> <span
  m="2398940">be</span> <span m="2400080">8</span> <span m="2400380">and</span>
  <span m="2400680">1/3,</span> <span m="2401670">3</span> <span
  m="2402000">plus</span> <span m="2402330">5</span> <span
  m="2402680">and</span> <span m="2403030">1/3,</span> <span
  m="2403710">and</span> <span m="2403960">0.</span> <span m="2406070">So</span>
  <span m="2406310">that's</span> <span m="2406690">a</span> <span
  m="2407010">positive</span> <span m="2408890">semidefinite.</span></p><p><span
  m="2411350">If</span> <span m="2411560">you</span> <span
  m="2411680">think</span> <span m="2411980">of</span> <span
  m="2412100">the</span> <span m="2412220">positive</span> <span
  m="2412820">definite</span> <span m="2413300">matrices</span> <span
  m="2414050">as</span> <span m="2414140">some</span> <span
  m="2415130">clump</span> <span m="2415790">in</span> <span
  m="2416780">matrix</span> <span m="2417530">space,</span> <span
  m="2419090">then</span> <span m="2419450">the</span> <span
  m="2419570">positive</span> <span m="2420140">semidefinite</span> <span
  m="2420710">definite</span> <span m="2421160">ones</span> <span
  m="2421490">are</span> <span m="2421610">sort</span> <span
  m="2421880">of</span> <span m="2421940">the</span> <span
  m="2422180">edge</span> <span m="2422540">of</span> <span
  m="2422660">that</span> <span m="2422930">clump.</span> <span
  m="2423320">There</span> <span m="2423530">the</span> <span
  m="2423680">boundary</span> <span m="2424250">of</span> <span
  m="2424370">the</span> <span m="2424490">clump,</span> <span
  m="2424880">the</span> <span m="2425000">ones</span> <span
  m="2425390">that</span> <span m="2425570">are</span> <span
  m="2426440">not</span> <span m="2426860">quite</span> <span
  m="2427450">inside</span> <span m="2428960">but</span> <span
  m="2429200">not</span> <span m="2430220">outside</span> <span
  m="2430850">either.</span> <span m="2431210">They're</span> <span
  m="2432140">lying</span> <span m="2432500">right</span> <span
  m="2432800">on</span> <span m="2432980">the</span> <span
  m="2433130">edge</span> <span m="2434270">of</span> <span
  m="2434570">positive</span> <span m="2435110">definite</span> <span
  m="2435530">matrices.</span></p><p><span m="2437600">Let</span> <span
  m="2437780">me</span> <span m="2438110">just</span> <span
  m="2438380">take</span> <span m="2438680">a--</span> <span
  m="2441420">so</span> <span m="2443730">what</span> <span
  m="2443880">about</span> <span m="2444120">a</span> <span
  m="2444180">matrix</span> <span m="2444780">of</span> <span
  m="2444900">all</span> <span m="2445140">1s?</span> <span
  m="2449200">What's</span> <span m="2449560">the</span> <span
  m="2451420">story</span> <span m="2451870">on</span> <span
  m="2452020">that</span> <span m="2452230">one--</span> <span
  m="2452530">positive</span> <span m="2453010">definite,</span> <span
  m="2453910">all</span> <span m="2454060">the</span> <span
  m="2454150">numbers</span> <span m="2454600">are</span> <span
  m="2454690">positive,</span> <span m="2456160">or</span> <span
  m="2456670">positive</span> <span m="2457240">semidefinite,</span> <span
  m="2458470">or</span> <span m="2458830">indefinite?</span> <span
  m="2459840">What</span> <span m="2460240">do</span> <span
  m="2460300">you</span> <span m="2460360">think</span> <span
  m="2460690">here?</span> <span m="2462070">1-1,</span> <span
  m="2462580">all</span> <span m="2462800">1.</span></p><p><span
  m="2465270">AUDIENCE:</span> <span m="2465470">Semi--</span></p><p><span
  m="2466150">GILBERT STRANG:</span> <span m="2466330">Semidefinite</span> <span
  m="2467260">sounds</span> <span m="2467620">like</span> <span
  m="2467770">a</span> <span m="2467860">good</span> <span
  m="2468130">guess.</span> <span m="2469790">Do</span> <span
  m="2469840">you</span> <span m="2469990">know</span> <span
  m="2470170">what</span> <span m="2470380">the</span> <span
  m="2470530">eigenvalues</span> <span m="2471340">of</span> <span
  m="2471430">this</span> <span m="2471670">matrix</span> <span
  m="2472240">would</span> <span m="2472420">be?</span></p><p><span
  m="2473620">AUDIENCE:</span> <span m="2473805">0</span> <span
  m="2473990">[INAUDIBLE]</span></p><p><span m="2476110">GILBERT STRANG:</span>
  <span m="2476237">3,</span> <span m="2476620">0,</span> <span
  m="2477050">and</span> <span m="2477230">0--</span> <span
  m="2477670">why</span> <span m="2478000">did</span> <span
  m="2478240">you</span> <span m="2478360">say</span> <span
  m="2478720">that?</span></p><p><span m="2480280">AUDIENCE:</span> <span
  m="2480450">Because</span> <span m="2480620">2</span> <span
  m="2481090">[INAUDIBLE]</span></p><p><span m="2482110">GILBERT STRANG:</span>
  <span m="2482245">Because</span> <span m="2482380">we</span> <span
  m="2482560">only</span> <span m="2482800">have--</span> <span
  m="2483100">the</span> <span m="2483250">rank</span> <span
  m="2483690">is?</span></p><p><span m="2484360">AUDIENCE:</span> <span
  m="2484505">1.</span></p><p><span m="2485070">GILBERT STRANG:</span> <span
  m="2485295">Yeah,</span> <span m="2485520">we</span> <span
  m="2485740">introduced</span> <span m="2486280">that</span> <span
  m="2486460">key</span> <span m="2486700">where</span> <span
  m="2486910">the</span> <span m="2487030">rank</span> <span
  m="2487390">is</span> <span m="2487620">1.</span> <span m="2489190">So</span>
  <span m="2489370">there's</span> <span m="2489580">only</span> <span
  m="2489820">one</span> <span m="2490240">nonzero</span> <span
  m="2490960">eigenvalue.</span> <span m="2492750">And</span> <span
  m="2493320">then</span> <span m="2493620">the</span> <span
  m="2493770">trace</span> <span m="2494220">tells</span> <span
  m="2494550">me</span> <span m="2495210">that</span> <span
  m="2495600">number</span> <span m="2495990">is</span> <span
  m="2496200">3.</span> <span m="2497320">So</span> <span
  m="2497730">this</span> <span m="2498060">is</span> <span m="2498330">a</span>
  <span m="2499860">positive</span> <span m="2500450">semidefinite</span> <span
  m="2501210">matrix.</span></p><p><span m="2503700">So</span> <span
  m="2504350">all</span> <span m="2504570">these</span> <span
  m="2506910">tests</span> <span m="2508410">change</span> <span
  m="2508830">a</span> <span m="2508920">little</span> <span
  m="2510110">for</span> <span m="2510330">semidefinite.</span> <span
  m="2511650">The</span> <span m="2511800">eigenvalue</span> <span
  m="2512280">is</span> <span m="2512760">greater</span> <span
  m="2513060">or</span> <span m="2513360">equal</span> <span
  m="2513810">to</span> <span m="2513990">0.</span> <span m="2515310">The</span>
  <span m="2515460">energy</span> <span m="2515860">is</span> <span
  m="2516030">greater</span> <span m="2516470">or</span> <span
  m="2516540">equal</span> <span m="2516990">to</span> <span
  m="2517050">0.</span> <span m="2518520">The</span> <span m="2518900">A</span>
  <span m="2519750">transpose A--</span> <span m="2519930">but</span> <span
  m="2520080">now</span> <span m="2520350">I</span> <span
  m="2520470">don't</span> <span m="2520740">require--</span> <span
  m="2521320">oh,</span> <span m="2521730">I</span> <span
  m="2521880">didn't</span> <span m="2522090">discuss</span> <span
  m="2522630">this.</span> <span m="2523710">But</span> <span
  m="2524040">semidefinite</span> <span m="2525120">would</span> <span
  m="2525330">allow</span> <span m="2525750">dependent</span> <span
  m="2526500">columns.</span></p><p><span m="2527010">By</span> <span
  m="2527250">the</span> <span m="2527370">way,</span> <span
  m="2528860">you've</span> <span m="2529070">got</span> <span
  m="2529250">to</span> <span m="2529380">do</span> <span
  m="2529620">this</span> <span m="2529860">for</span> <span
  m="2530010">me.</span> <span m="2530430">Write</span> <span
  m="2530680">that</span> <span m="2530910">matrix</span> <span
  m="2531420">as</span> <span m="2531630">A</span> <span
  m="2531780">transpose</span> <span m="2532440">times</span> <span
  m="2532840">A</span> <span m="2533730">just</span> <span m="2534000">to</span>
  <span m="2534120">see</span> <span m="2534480">that</span> <span
  m="2534780">it's</span> <span m="2537790">semidefinite</span> <span
  m="2538900">because--</span> <span m="2542720">so</span> <span
  m="2543020">write</span> <span m="2543360">that</span> <span
  m="2543620">as</span> <span m="2543860">A</span> <span
  m="2544070">transpose</span> <span m="2544880">A.</span> <span
  m="2547540">Yeah.</span> <span m="2549090">If</span> <span
  m="2549230">it's</span> <span m="2549380">a</span> <span
  m="2549440">rank</span> <span m="2549680">1</span> <span
  m="2549920">matrix,</span> <span m="2550880">you</span> <span
  m="2551090">know</span> <span m="2551540">what</span> <span
  m="2551810">it</span> <span m="2551960">must</span> <span
  m="2552200">look</span> <span m="2552470">like.</span></p><p><span
  m="2557280">A</span> <span m="2557400">transpose</span> <span
  m="2557760">A,</span> <span m="2558150">how</span> <span
  m="2558300">many</span> <span m="2558570">terms</span> <span
  m="2559020">am</span> <span m="2559170">I</span> <span
  m="2559260">going</span> <span m="2559440">to</span> <span
  m="2559530">have</span> <span m="2560340">in</span> <span
  m="2560520">this?</span> <span m="2561460">And</span> <span
  m="2561720">now</span> <span m="2561960">I'm</span> <span
  m="2562320">thinking</span> <span m="2562650">back</span> <span
  m="2562920">to</span> <span m="2563040">the</span> <span
  m="2563160">very</span> <span m="2563490">beginning</span> <span
  m="2564060">of</span> <span m="2564180">this</span> <span
  m="2564420">course</span> <span m="2565590">if</span> <span
  m="2565800">I</span> <span m="2567100">pulled</span> <span
  m="2567460">off</span> <span m="2567760">the</span> <span
  m="2567880">pieces.</span> <span m="2569350">In</span> <span
  m="2569680">general,</span> <span m="2570670">this</span> <span
  m="2570970">is</span> <span m="2571720">lambda</span> <span
  m="2572140">1</span> <span m="2573420">times</span> <span
  m="2573790">the</span> <span m="2573940">first</span> <span
  m="2574340">eigenvector,</span> <span m="2575740">times</span> <span
  m="2576070">the</span> <span m="2576190">first</span> <span
  m="2576550">eigenvector</span> <span
  m="2577240">transposed.</span></p><p><span m="2578140">AUDIENCE:</span> <span
  m="2578273">Would</span> <span m="2578406">it</span> <span m="2578540">just
  be</span> <span m="2579010">a</span> <span m="2579070">vector</span> <span
  m="2579520">of</span> <span m="2580020">three</span> <span
  m="2580240">1s?</span></p><p><span m="2580690">GILBERT STRANG:</span> <span
  m="2580780">Yeah,</span> <span m="2580870">it would just</span> <span
  m="2581080">be</span> <span m="2581260">a</span> <span
  m="2581320">vector</span> <span m="2581740">of</span> <span
  m="2581830">three</span> <span m="2582160">1s.</span> <span
  m="2583410">Yeah.</span> <span m="2583850">So</span> <span
  m="2586330">this</span> <span m="2586570">would</span> <span
  m="2586780">be</span> <span m="2587020">the</span> <span
  m="2587290">usual</span> <span m="2588010">picture.</span> <span
  m="2590380">This</span> <span m="2590680">is</span> <span
  m="2590830">the</span> <span m="2590980">same</span> <span
  m="2591400">as</span> <span m="2591580">the</span> <span m="2591790">Q</span>
  <span m="2593080">lambda,</span> <span m="2593920">Q</span> <span
  m="2594310">transpose.</span> <span m="2595810">This</span> <span
  m="2596530">is</span> <span m="2596670">the</span> <span
  m="2596770">big</span> <span m="2597580">fact</span> <span
  m="2598160">for</span> <span m="2598270">any</span> <span
  m="2598480">symmetric</span> <span m="2599110">matrix.</span></p><p><span
  m="2600220">And</span> <span m="2600340">this</span> <span
  m="2600610">is</span> <span m="2600790">symmetric,</span> <span
  m="2602230">but</span> <span m="2603860">its</span> <span
  m="2604070">rank</span> <span m="2604460">is</span> <span
  m="2604610">only</span> <span m="2606310">1,</span> <span
  m="2607390">so</span> <span m="2607780">that</span> <span
  m="2610420">lambda</span> <span m="2610870">2</span> <span
  m="2611205">is</span> <span m="2611540">0</span> <span m="2611950">for</span>
  <span m="2612100">that</span> <span m="2612280">matrix.</span> <span
  m="2613570">Lambda</span> <span m="2613930">3</span> <span
  m="2614350">is</span> <span m="2614500">0</span> <span m="2614890">for</span>
  <span m="2615040">that</span> <span m="2615220">matrix.</span> <span
  m="2615820">And</span> <span m="2616630">the</span> <span
  m="2616810">one</span> <span m="2617230">eigenvector</span> <span
  m="2618160">is</span> <span m="2618490">the</span> <span
  m="2618610">vector</span> <span m="2619000">1-1-1.</span></p><p><span
  m="2620200">And</span> <span m="2620360">the</span> <span
  m="2620510">eigen--</span> <span m="2620880">so</span> <span
  m="2621070">this</span> <span m="2621310">would</span> <span
  m="2621490">be</span> <span m="2621790">3</span> <span
  m="2623110">times</span> <span m="2623710">1-1-1.</span> <span
  m="2625090">Oh,</span> <span m="2625510">I</span> <span
  m="2625630">have</span> <span m="2625780">to</span> <span
  m="2625900">do--</span> <span m="2628250">yeah.</span> <span
  m="2629270">So</span> <span m="2630470">I</span> <span m="2630560">was</span>
  <span m="2630730">going</span> <span m="2630840">to</span> <span
  m="2631060">do</span> <span m="2631350">3</span> <span
  m="2631950">times</span> <span m="2632510">1-1-1,</span> <span
  m="2633440">times</span> <span m="2633800">1-1-1.</span> <span
  m="2637450">But</span> <span m="2637630">that</span> <span
  m="2637840">gives</span> <span m="2638050">me</span> <span
  m="2638260">3-3-3.</span> <span m="2640950">That's</span> <span
  m="2641160">not</span> <span m="2641460">right.</span></p><p><span
  m="2642405">AUDIENCE:</span> <span m="2642622">Normalize
  them.</span></p><p><span m="2643850">GILBERT STRANG:</span> <span
  m="2643905">I</span> <span m="2643960">have</span> <span m="2644110">to</span>
  <span m="2644230">normalize</span> <span m="2644950">them.</span> <span
  m="2645040">That's</span> <span m="2645420">right.</span> <span
  m="2646210">Yeah.</span> <span m="2646570">So</span> <span
  m="2646780">that's</span> <span m="2647080">a</span> <span
  m="2647140">vector</span> <span m="2647590">whose</span> <span
  m="2648060">length</span> <span m="2648450">is the</span> <span
  m="2648640">square</span> <span m="2648970">root</span> <span
  m="2649090">of</span> <span m="2649150">3.</span> <span m="2649510">So</span>
  <span m="2649660">I</span> <span m="2649780">have</span> <span
  m="2649900">to</span> <span m="2650020">divide</span> <span
  m="2650470">by</span> <span m="2650710">that,</span> <span
  m="2651940">and</span> <span m="2652110">divide</span> <span
  m="2652540">by</span> <span m="2652780">it.</span> <span
  m="2653800">And</span> <span m="2653950">then</span> <span
  m="2654160">the</span> <span m="2654310">3</span> <span
  m="2654730">cancels</span> <span m="2655360">the</span> <span
  m="2655480">square</span> <span m="2655740">root</span> <span
  m="2655870">of</span> <span m="2656040">3s,</span> <span
  m="2656500">and</span> <span m="2656980">I'm</span> <span
  m="2657190">just</span> <span m="2657460">left</span> <span
  m="2657730">with</span> <span m="2658120">1-1-1,</span> <span
  m="2658570">1-1-1.</span> <span m="2660350">Yeah.</span></p><p><span
  m="2660610">AUDIENCE:</span> <span m="2660650">[INAUDIBLE]</span></p><p><span
  m="2663040">GILBERT STRANG:</span> <span m="2663145">So</span> <span
  m="2663250">there</span> <span m="2663580">is</span> <span
  m="2663730">a</span> <span m="2664970">matrix--</span> <span
  m="2665810">one</span> <span m="2666110">of</span> <span
  m="2666260">our</span> <span m="2666440">building-block</span> <span
  m="2667400">type</span> <span m="2667730">matrices</span> <span
  m="2668570">because</span> <span m="2668810">it</span> <span
  m="2668990">only</span> <span m="2669260">has</span> <span
  m="2669620">one</span> <span m="2671390">nonzero</span> <span
  m="2672110">eigenvalue.</span> <span m="2672910">Its</span> <span
  m="2673100">rank</span> <span m="2673430">is</span> <span
  m="2673600">1,</span> <span m="2674630">so</span> <span m="2674840">it</span>
  <span m="2675020">could</span> <span m="2675290">not</span> <span
  m="2675530">be</span> <span m="2675710">positive</span> <span
  m="2676220">definite.</span> <span m="2676780">It's</span> <span
  m="2678170">singular.</span> <span m="2679310">But</span> <span
  m="2679580">it</span> <span m="2679850">is</span> <span
  m="2680240">positive</span> <span m="2680930">semidefinite</span> <span
  m="2681950">because</span> <span m="2683000">that</span> <span
  m="2683300">eigenvalue</span> <span m="2684110">is</span> <span
  m="2684320">positive.</span></p><p><span m="2686380">OK.</span> <span
  m="2688360">So</span> <span m="2688510">you've</span> <span
  m="2688660">got</span> <span m="2688840">the</span> <span
  m="2688960">idea</span> <span m="2689650">of</span> <span
  m="2692020">positive</span> <span m="2692650">definite</span> <span
  m="2693160">matrices.</span> <span m="2694090">Again,</span> <span
  m="2696040">any</span> <span m="2696370">one</span> <span
  m="2696610">of</span> <span m="2696700">those</span> <span
  m="2696970">five</span> <span m="2697330">tests</span> <span
  m="2697780">is</span> <span m="2697990">enough</span> <span
  m="2698380">to</span> <span m="2698590">show</span> <span
  m="2699370">that</span> <span m="2699550">it's</span> <span
  m="2699730">positive</span> <span m="2700300">definite.</span> <span
  m="2701260">And</span> <span m="2702850">so</span> <span
  m="2703060">what's</span> <span m="2703360">my</span> <span
  m="2703840">goal</span> <span m="2704200">next</span> <span
  m="2704560">week?</span> <span m="2705580">It's</span> <span
  m="2705790">the</span> <span m="2705910">singular</span> <span
  m="2706420">value</span> <span m="2706840">decomposition</span> <span
  m="2708400">and</span> <span m="2708730">all</span> <span
  m="2708970">that</span> <span m="2709150">that</span> <span
  m="2709420">leads</span> <span m="2709750">us</span> <span
  m="2709960">to.</span> <span m="2711520">We're</span> <span
  m="2711880">there</span> <span m="2712180">now,</span> <span
  m="2712900">ready</span> <span m="2713230">for</span> <span
  m="2715330">the</span> <span m="2715510">SVD.</span></p><p><span
  m="2717880">OK.</span> <span m="2718480">Have</span> <span
  m="2718690">a</span> <span m="2718750">good</span> <span
  m="2719020">weekend,</span> <span m="2719560">and</span> <span m="2719830">see
  you--</span> <span m="2720700">oh,</span> <span m="2720880">I</span> <span
  m="2721000">see</span> <span m="2721240">you</span> <span
  m="2721390">on</span> <span m="2721540">Tuesday,</span> <span
  m="2722170">I</span> <span m="2722320">guess.</span> <span
  m="2722680">Right--</span> <span m="2723340">not</span> <span
  m="2723580">Monday</span> <span m="2723910">but</span> <span
  m="2724090">Tuesday</span> <span m="2725560">next</span> <span
  m="2725890">week.</span></p>
uid: c7517d37c7aa58f639adf87b01e4e892
type: course
layout: video
---
