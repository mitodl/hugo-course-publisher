---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>In this lecture, Professor Strang
  revisits the ways to solve least squares problems.  In particular, he focuses
  on the Gram-Schmidt process that finds orthogonal vectors.</p> <h2
  class="subhead">Summary</h2> <p>Picture the shortest \(x\) in \(\ell^1\) and
  \(\ell^2\) and \(\ell^\infty\) norms<br /> The  \(\ell^1\) norm gives a sparse
  solution \(x\).<br /> Details of Gram-Schmidt orthogonalization and \(A =
  QR\)<br /> Orthogonal vectors in \(Q\) from independent vectors in \(A\)</p>
  <p>Related section in textbook: I.11</p> <p><strong>Instructor:</strong> Prof.
  Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: MuEW9pG9oxE
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    title: Video-YouTube-Stream
    type: Video
    uid: 39073ce4f624422116d9321f263d49b5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/MuEW9pG9oxE/default.jpg'
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2ca3817a791cc5eca1c88c9eaf0c782a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: MuEW9pG9oxE
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6eefaae57401f7c2e293a024581e1caa
  - id: MuEW9pG9oxE.srt
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-11-minimizing-2016x2016-subject-to-ax-b/MuEW9pG9oxE.srt
    title: 3play caption file
    type: null
    uid: cce9309d9b9cb43fa3db0b8df4bb0177
  - id: MuEW9pG9oxE.pdf
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-11-minimizing-2016x2016-subject-to-ax-b/MuEW9pG9oxE.pdf
    title: 3play pdf file
    type: null
    uid: f8ece4b5c1f0a1c6d1ff79a17e0162e2
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 3fae858f032508d9a7cd9cb0eb425780
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c26c670d2cde94674cc3a591534bc7aa
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture11_300k.mp4'
    parent_uid: 57520c261eb1b9cabc4460a953a67428
    title: Video-Internet Archive-MP4
    type: Video
    uid: 085f1b8a63d185bda736defcb5a6bb96
inline_embed_id: 40586369lecture11minimizingxsubjecttoaxb20769343
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-11-minimizing-2016x2016-subject-to-ax-b
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-11-minimizing-2016x2016-subject-to-ax-b
title: 'Lecture 11: Minimizing ‖x‖ Subject to Ax = b '
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
  m="23260">GILBERT STRANG:</span> <span m="23470">Well,</span> <span
  m="23680">so</span> <span m="24610">three</span> <span m="24970">things</span>
  <span m="25330">to</span> <span m="25450">mention.</span> <span
  m="26230">One</span> <span m="26770">was</span> <span m="27410">you</span>
  <span m="27490">remember</span> <span m="27880">last</span> <span
  m="28210">time</span> <span m="29200">I</span> <span m="29350">made</span>
  <span m="29650">a</span> <span m="29770">list</span> <span m="30430">of</span>
  <span m="31570">six</span> <span m="32049">or</span> <span
  m="32200">seven</span> <span m="33520">different</span> <span
  m="33940">situations</span> <span m="34750">where</span> <span
  m="34870">Ax</span> <span m="35380">equal</span> <span m="35650">b</span>
  <span m="37090">and</span> <span m="37600">problems</span> <span
  m="38080">that</span> <span m="38480">could</span> <span
  m="38590">arise?</span> <span m="39850">The</span> <span m="39970">last</span>
  <span m="40390">one</span> <span m="40600">was</span> <span
  m="40960">when</span> <span m="41320">A</span> <span m="41620">was</span>
  <span m="41890">just</span> <span m="42250">way</span> <span
  m="42760">too</span> <span m="43000">big</span> <span m="43300">to</span>
  <span m="44050">fit</span> <span m="44320">into</span> <span
  m="44560">core.</span> <span m="44980">But</span> <span m="45400">in</span>
  <span m="45550">the</span> <span m="45610">middle</span> <span
  m="45940">were</span> <span m="46840">other</span> <span
  m="47490">methods.</span> <span m="48220">So</span> <span
  m="48880">other</span> <span m="49780">issues,</span> <span
  m="50700">like</span> <span m="51010">the</span> <span
  m="51400">columns</span> <span m="52030">being</span> <span
  m="53050">nearly</span> <span m="53850">dependent</span> <span
  m="55270">when</span> <span m="55810">Gram-Schmidt</span> <span
  m="56560">will</span> <span m="56770">come</span> <span
  m="57010">up.</span></p><p><span m="58900">First,</span> <span
  m="59860">I</span> <span m="59950">want</span> <span m="60160">to</span> <span
  m="60250">say</span> <span m="60610">that</span> <span m="60850">I</span>
  <span m="60970">know</span> <span m="61240">there</span> <span
  m="61390">are</span> <span m="61540">typos</span> <span m="62260">in</span>
  <span m="62380">the</span> <span m="62500">two</span> <span
  m="62740">pages.</span> <span m="63310">I</span> <span
  m="63820">thought</span> <span m="64060">you</span> <span
  m="64180">might</span> <span m="64450">just</span> <span m="64690">like</span>
  <span m="64930">to</span> <span m="65050">see</span> <span
  m="65349">the</span> <span m="66460">very</span> <span m="66970">first</span>
  <span m="67450">draft</span> <span m="68170">of</span> <span
  m="68470">two</span> <span m="68710">pages</span> <span m="69340">of</span>
  <span m="69490">the</span> <span m="69610">book.</span> <span
  m="72910">People</span> <span m="73210">sometimes</span> <span
  m="73750">ask</span> <span m="74020">me,</span> <span m="74200">how</span>
  <span m="74350">long</span> <span m="74710">does</span> <span
  m="74950">the</span> <span m="75040">book</span> <span m="75340">take</span>
  <span m="75790">to</span> <span m="75970">write?</span> <span
  m="77020">So</span> <span m="77350">I</span> <span m="77530">started</span>
  <span m="78310">when</span> <span m="78760">18.065</span> <span
  m="80140">started</span> <span m="81400">a</span> <span m="81460">year</span>
  <span m="81760">ago.</span> <span m="82930">So</span> <span
  m="83290">I'm</span> <span m="83950">into</span> <span m="84280">the</span>
  <span m="84430">second</span> <span m="84880">year,</span> <span
  m="85270">and</span> <span m="85480">it</span> <span m="85660">usually</span>
  <span m="86050">takes</span> <span m="86410">two</span> <span
  m="86680">years.</span></p><p><span m="87790">And</span> <span
  m="87970">the</span> <span m="88090">system</span> <span m="88630">is</span>
  <span m="91100">I</span> <span m="91250">write</span> <span
  m="91520">by</span> <span m="91700">hand</span> <span m="92180">so.</span>
  <span m="92450">I</span> <span m="92570">wrote</span> <span
  m="92840">those</span> <span m="93320">opening</span> <span
  m="93770">pages</span> <span m="94310">that</span> <span m="94460">you</span>
  <span m="95060">saw,</span> <span m="95900">two</span> <span
  m="96110">pages,</span> <span m="96980">by</span> <span m="97190">hand.</span>
  <span m="98030">Then</span> <span m="98240">I</span> <span
  m="98390">scan</span> <span m="98900">them</span> <span m="99140">to</span>
  <span m="99320">Mumbai,</span> <span m="100970">where</span> <span
  m="101210">my</span> <span m="101420">best</span> <span
  m="101750">friend</span> <span m="102110">in</span> <span
  m="102200">the</span> <span m="102290">world</span> <span
  m="103670">types</span> <span m="104090">them</span> <span
  m="104600">with</span> <span m="104840">typos.</span> <span
  m="106160">No</span> <span m="106370">problem,</span> <span
  m="106790">because</span> <span m="107180">I'm</span> <span
  m="107360">going</span> <span m="107530">to</span> <span
  m="107630">make</span> <span m="107900">so</span> <span m="108110">many</span>
  <span m="108380">changes</span> <span m="109370">that</span> <span
  m="109730">a</span> <span m="109790">few</span> <span m="110030">typos</span>
  <span m="110630">are</span> <span m="110780">nothing.</span></p><p><span
  m="112430">Anyway,</span> <span m="112970">so</span> <span
  m="113270">he</span> <span m="113390">scans</span> <span
  m="113840">them</span> <span m="113960">back</span> <span m="114230">to</span>
  <span m="114350">me</span> <span m="116070">typed.</span> <span
  m="117360">And</span> <span m="117480">then</span> <span m="117690">I</span>
  <span m="118170">start</span> <span m="118500">making</span> <span
  m="118890">changes.</span> <span m="120270">If</span> <span
  m="120480">I'm</span> <span m="120630">lucky</span> <span
  m="121110">I'd</span> <span m="121230">have</span> <span m="121410">the</span>
  <span m="121530">chance</span> <span m="121890">to</span> <span
  m="122010">talk</span> <span m="122340">about</span> <span
  m="122640">it</span> <span m="122820">in</span> <span m="122970">here.</span>
  <span m="123440">Then</span> <span m="123660">I</span> <span
  m="123780">realize</span> <span m="124320">better</span> <span
  m="124650">things</span> <span m="125040">to</span> <span
  m="125160">do.</span> <span m="126060">Then</span> <span m="126240">I</span>
  <span m="126330">scan</span> <span m="126720">back</span> <span
  m="126960">to</span> <span m="127110">him</span> <span m="127560">and</span>
  <span m="127680">back</span> <span m="127890">to</span> <span
  m="128009">me</span> <span m="128460">and</span> <span m="128580">back</span>
  <span m="128820">to</span> <span m="128940">him</span> <span
  m="129270">and</span> <span m="129360">back</span> <span m="129600">to</span>
  <span m="129720">me.</span> <span m="130330">So</span> <span
  m="131100">that's</span> <span m="131370">where</span> <span
  m="131760">the</span> <span m="131940">two</span> <span
  m="132240">years</span> <span m="133650">disappear.</span> <span
  m="135540">Anyway,</span> <span m="135900">I'm</span> <span
  m="136020">quite</span> <span m="136260">happy</span> <span
  m="136590">with</span> <span m="136740">those</span> <span
  m="137490">two</span> <span m="137700">pages,</span> <span
  m="138300">until</span> <span m="138660">I</span> <span
  m="138810">start</span> <span m="139650">improving</span> <span
  m="139965">them.</span></p><p><span m="141300">And</span> <span
  m="141450">one</span> <span m="141720">other</span> <span
  m="142680">topic</span> <span m="143220">from</span> <span
  m="143580">the</span> <span m="143700">past</span> <span
  m="144780">that</span> <span m="146220">came</span> <span
  m="146520">out</span> <span m="146730">in</span> <span
  m="146880">class.</span> <span m="147165">It</span> <span
  m="147450">wasn't</span> <span m="147930">in</span> <span
  m="148140">the</span> <span m="148620">notes</span> <span
  m="149070">yet.</span> <span m="150420">Do</span> <span m="150540">you</span>
  <span m="150630">remember</span> <span m="151080">the</span> <span
  m="151200">day</span> <span m="151710">that</span> <span m="152040">we</span>
  <span m="153450">minimized</span> <span m="154500">different</span> <span
  m="154920">norms?</span> <span m="157260">L1</span> <span m="157950">or</span>
  <span m="158100">L2</span> <span m="158760">or</span> <span
  m="159030">max,</span> <span m="160170">L</span> <span
  m="160380">infinity</span> <span m="160950">norm</span> <span
  m="164460">with</span> <span m="164800">the</span> <span
  m="164910">condition</span> <span m="165450">of</span> <span
  m="165570">solving</span> <span m="166680">with</span> <span
  m="166950">a</span> <span m="166980">constraint</span> <span
  m="168210">that</span> <span m="168390">this</span> <span
  m="168720">equation</span> <span m="170040">was</span> <span
  m="170220">satisfied.</span> <span m="171000">I'm</span> <span
  m="171150">in</span> <span m="171300">2D</span> <span m="172020">to</span>
  <span m="172170">be</span> <span m="172350">able</span> <span
  m="172560">to</span> <span m="172680">draw</span> <span m="172950">a</span>
  <span m="172980">picture.</span> <span m="174240">And</span> <span
  m="174600">the</span> <span m="174750">constraint</span> <span
  m="175440">is</span> <span m="175590">one</span> <span m="175950">line.</span>
  <span m="176520">And</span> <span m="176640">that's</span> <span
  m="177000">about</span> <span m="177330">what</span> <span
  m="177570">the</span> <span m="177690">line</span> <span
  m="178080">looks</span> <span m="178380">like.</span></p><p><span
  m="179580">So</span> <span m="179820">I'm</span> <span m="180000">going</span>
  <span m="180190">to</span> <span m="180300">draw</span> <span
  m="180720">here</span> <span m="182190">again--</span> <span
  m="184470">what</span> <span m="184710">I'm</span> <span
  m="184860">doing</span> <span m="185250">is</span> <span
  m="186390">putting</span> <span m="186750">some</span> <span
  m="186990">numbers</span> <span m="187650">in</span> <span
  m="188700">to</span> <span m="190260">that</span> <span
  m="190710">insight</span> <span m="191640">I</span> <span
  m="192420">drew</span> <span m="194190">about</span> <span m="194550">a</span>
  <span m="194610">week</span> <span m="194880">ago.</span> <span
  m="196390">Do</span> <span m="196480">you</span> <span
  m="196540">remember</span> <span m="196900">that?</span> <span
  m="197110">Because</span> <span m="197320">I</span> <span
  m="197410">thought</span> <span m="197620">that</span> <span
  m="198370">really</span> <span m="198820">illustrates</span> <span
  m="201100">how</span> <span m="201490">L1</span> <span m="202000">and</span>
  <span m="202150">L2</span> <span m="202790">and</span> <span
  m="202840">L</span> <span m="203020">infinity</span> <span
  m="203650">are</span> <span m="203770">different.</span></p><p><span
  m="204280">Let</span> <span m="204940">me</span> <span m="205060">draw</span>
  <span m="205300">the</span> <span m="205510">L2</span> <span
  m="205870">one</span> <span m="206230">here.</span> <span m="207610">So</span>
  <span m="207850">where's</span> <span m="208360">the</span> <span
  m="208480">point</span> <span m="209350">on</span> <span
  m="209590">this</span> <span m="209860">line--</span> <span
  m="210590">so</span> <span m="211180">x</span> <span m="211510">has</span>
  <span m="211780">to</span> <span m="211930">lie</span> <span
  m="212260">on</span> <span m="212440">this</span> <span
  m="212710">line.</span> <span m="214060">And</span> <span
  m="214330">where</span> <span m="214540">is</span> <span m="214750">the</span>
  <span m="214900">point</span> <span m="215340">that</span> <span
  m="215620">has</span> <span m="215950">the</span> <span
  m="216130">smallest</span> <span m="217780">sum</span> <span
  m="218020">of</span> <span m="218170">squares</span> <span
  m="218710">norm,</span> <span m="219160">standard</span> <span
  m="219850">L2</span> <span m="220330">norm?</span> <span m="221860">So</span>
  <span m="222340">geometrically</span> <span m="223240">where</span> <span
  m="223410">is</span> <span m="223630">that</span> <span
  m="223840">point?</span> <span m="224290">Well,</span> <span
  m="224980">what</span> <span m="225190">does</span> <span
  m="225490">the</span> <span m="226570">set</span> <span m="226990">of</span>
  <span m="227110">points</span> <span m="227650">with</span> <span
  m="227860">norm</span> <span m="228550">1</span> <span m="229510">look</span>
  <span m="229720">like</span> <span m="230590">for</span> <span
  m="230830">L2?</span> <span m="232460">It's</span> <span m="232670">a</span>
  <span m="232730">circle,</span> <span m="233210">right.</span></p><p><span
  m="234260">So</span> <span m="234440">we</span> <span m="234620">just</span>
  <span m="234890">blow</span> <span m="235430">that</span> <span
  m="235700">circle</span> <span m="236180">up</span> <span m="236450">or</span>
  <span m="236570">shrink</span> <span m="236960">it</span> <span
  m="237050">down</span> <span m="237860">until</span> <span
  m="238250">it</span> <span m="238370">touches</span> <span
  m="239420">this</span> <span m="239960">thing.</span> <span
  m="240290">And</span> <span m="241670">where</span> <span m="241880">it</span>
  <span m="241970">touches,</span> <span m="242580">it'll</span> <span
  m="242870">touch</span> <span m="243260">where</span> <span
  m="243500">the</span> <span m="243590">radius</span> <span
  m="244220">is</span> <span m="244730">perpendicular.</span> <span
  m="247260">So</span> <span m="247470">there's</span> <span
  m="248520">our</span> <span m="248640">best</span> <span
  m="248910">point</span> <span m="249300">in</span> <span m="249440">L2,</span>
  <span m="251752">because</span> <span m="255120">if</span> <span
  m="255320">we</span> <span m="256050">picked</span> <span
  m="256350">another</span> <span m="256709">point,</span> <span
  m="258870">the</span> <span m="259019">norm</span> <span
  m="260339">would</span> <span m="260430">have</span> <span
  m="260640">to</span> <span m="260730">be</span> <span m="260910">bigger</span>
  <span m="261269">to</span> <span m="261390">go</span> <span
  m="261630">through</span> <span m="261899">that</span> <span
  m="262110">point.</span> <span m="262860">So</span> <span
  m="263040">that's</span> <span m="263310">clearly</span> <span
  m="263790">the</span> <span m="263880">first</span> <span
  m="264210">one.</span> <span m="264960">And</span> <span
  m="265170">actually,</span> <span m="265590">we</span> <span
  m="265770">can</span> <span m="266340">probably</span> <span
  m="266730">see</span> <span m="267060">what</span> <span m="267330">it</span>
  <span m="267480">is,</span> <span m="267810">because</span> <span
  m="268980">if</span> <span m="269160">we</span> <span m="269310">know</span>
  <span m="269520">those</span> <span m="269790">are</span> <span
  m="269910">perpendicular,</span> <span m="271950">I</span> <span
  m="272070">know</span> <span m="272340">the</span> <span
  m="272490">slope</span> <span m="272910">of</span> <span
  m="273030">this</span> <span m="273300">line.</span> <span
  m="273790">so</span> <span m="273870">I</span> <span m="273990">think</span>
  <span m="274260">that</span> <span m="274950">the</span> <span
  m="275100">slope</span> <span m="275520">of</span> <span
  m="275640">this</span> <span m="275940">line</span> <span m="276420">is</span>
  <span m="277710">something</span> <span m="278100">like</span> <span
  m="278400">3/4,</span> <span m="279750">probably</span> <span
  m="280260">coming</span> <span m="280590">from</span> <span
  m="280800">there,</span> <span m="283640">or</span> <span
  m="283760">maybe</span> <span m="284060">4/3.</span> <span
  m="287720">We'll</span> <span m="288290">figure</span> <span
  m="288620">it</span> <span m="288740">out.</span> <span m="288920">I</span>
  <span m="288980">think</span> <span m="289190">it's</span> <span
  m="289340">4/3.</span> <span m="292130">I'll</span> <span
  m="292400">find</span> <span m="292700">that</span> <span
  m="292910">point.</span></p><p><span m="293840">Then</span> <span
  m="294050">the</span> <span m="294140">most</span> <span
  m="294530">interesting</span> <span m="295100">one</span> <span
  m="295400">was</span> <span m="295970">the</span> <span m="296180">L1</span>
  <span m="296630">norm,</span> <span m="297640">because</span> <span
  m="297890">what</span> <span m="298130">was</span> <span m="298400">the</span>
  <span m="298520">shape</span> <span m="298940">of</span> <span
  m="299060">the</span> <span m="299180">unit</span> <span
  m="299480">ball</span> <span m="299840">for</span> <span
  m="300130">L1?</span></p><p><span m="302644">AUDIENCE:</span> <span
  m="302874">A</span> <span m="303105">diamond.</span></p><p><span
  m="303570">GILBERT STRANG:</span> <span m="303630">A</span> <span
  m="303690">diamond,</span> <span m="304440">right.</span> <span
  m="304880">A</span> <span m="304980">diamond.</span> <span
  m="305580">So</span> <span m="305820">the</span> <span
  m="305940">diamond</span> <span m="306540">that</span> <span
  m="307080">first</span> <span m="307470">touches</span> <span
  m="308400">the</span> <span m="308520">line</span> <span m="309540">is</span>
  <span m="309930">here.</span> <span m="312970">That's</span> <span
  m="313420">the</span> <span m="313570">winning</span> <span
  m="313990">point.</span> <span m="315370">And</span> <span
  m="315580">if</span> <span m="315730">the</span> <span m="315850">line</span>
  <span m="316240">is</span> <span m="316420">3x1</span> <span
  m="317230">plus</span> <span m="317500">4x2</span> <span
  m="318160">equal</span> <span m="318400">1,</span> <span
  m="319120">then</span> <span m="319330">I</span> <span m="319480">know</span>
  <span m="319810">that</span> <span m="319990">that</span> <span
  m="320230">point</span> <span m="320620">is--</span> <span
  m="322000">x1</span> <span m="323440">will</span> <span m="323530">be</span>
  <span m="323770">0</span> <span m="324370">and</span> <span
  m="324520">x2</span> <span m="325330">will</span> <span m="325480">be</span>
  <span m="325690">1/4.</span> <span m="327550">So</span> <span
  m="327730">that's</span> <span m="328000">the</span> <span
  m="328120">winning</span> <span m="328510">point</span> <span
  m="328930">in</span> <span m="329080">L1.</span></p><p><span
  m="332450">And</span> <span m="332610">I</span> <span m="332760">think</span>
  <span m="335160">I</span> <span m="335250">calculated</span> <span
  m="336000">this</span> <span m="336300">right</span> <span
  m="336740">that</span> <span m="336920">the</span> <span
  m="337050">winning</span> <span m="337440">point</span> <span
  m="337830">in</span> <span m="337980">L2</span> <span m="339420">I</span>
  <span m="339510">think</span> <span m="339840">will</span> <span
  m="340080">be--</span> <span m="341430">let's</span> <span
  m="341670">see,</span> <span m="341940">this</span> <span
  m="342390">goes</span> <span m="342810">up</span> <span m="343250">to--</span>
  <span m="345240">I'm</span> <span m="345540">moving</span> <span
  m="345960">down</span> <span m="346230">the</span> <span
  m="346320">line.</span> <span m="347190">I</span> <span
  m="347310">think</span> <span m="347580">this</span> <span
  m="347880">would</span> <span m="348090">have</span> <span
  m="348450">3/25,</span> <span m="350670">4/25.</span> <span
  m="353400">I</span> <span m="353460">won't</span> <span m="353680">stop</span>
  <span m="354030">to</span> <span m="354810">derive</span> <span
  m="355260">that.</span> <span m="355470">But</span> <span m="355650">at</span>
  <span m="355740">least--</span> <span m="357630">yeah,</span> <span
  m="357870">the</span> <span m="358020">slope</span> <span m="358410">is</span>
  <span m="358530">looking</span> <span m="358890">like</span> <span
  m="359130">4/3.</span> <span m="359730">It</span> <span m="360480">goes</span>
  <span m="361320">up</span> <span m="361530">4</span> <span
  m="362550">when</span> <span m="362700">it</span> <span
  m="362790">crosses</span> <span m="363330">3.</span> <span
  m="364560">And</span> <span m="364770">the</span> <span m="365160">4</span>
  <span m="365205">and</span> <span m="365250">the</span> <span
  m="365340">3</span> <span m="365760">came</span> <span m="366090">from</span>
  <span m="366300">there.</span> <span m="367110">And,</span> <span
  m="367260">of</span> <span m="367350">course,</span> <span
  m="367710">you</span> <span m="368100">notice</span> <span
  m="369450">that</span> <span m="369930">I've</span> <span
  m="370050">scaled</span> <span m="370560">it</span> <span m="370680">to</span>
  <span m="370830">fit</span> <span m="371100">the</span> <span
  m="371220">line.</span> <span m="372030">3</span> <span
  m="372420">times</span> <span m="374160">3/25</span> <span
  m="375100">is</span> <span m="375335">9/25</span> <span m="376830">plus</span>
  <span m="377070">16/25,</span> <span m="378300">25/25</span> <span
  m="379620">is</span> <span m="379830">1.</span></p><p><span
  m="380730">And</span> <span m="380910">finally,</span> <span
  m="381550">what</span> <span m="381660">about</span> <span m="382050">L</span>
  <span m="382350">infinity?</span> <span m="383280">What</span> <span
  m="383490">was</span> <span m="383670">the</span> <span
  m="383790">picture</span> <span m="384270">there?</span> <span
  m="384560">What's</span> <span m="384810">the</span> <span
  m="384990">unit</span> <span m="385320">ball</span> <span
  m="386250">look</span> <span m="386490">like</span> <span m="386850">in</span>
  <span m="387010">2D</span> <span m="387630">for</span> <span
  m="388620">the</span> <span m="388980">max</span> <span
  m="389460">norm?</span> <span m="391070">It's</span> <span
  m="391310">a--</span></p><p><span m="391550">AUDIENCE:</span> <span
  m="391775">Square.</span></p><p><span m="392450">GILBERT STRANG:</span> <span
  m="392690">Square,</span> <span m="393190">right.</span> <span
  m="394190">So</span> <span m="394400">the</span> <span
  m="394550">square</span> <span m="396050">will</span> <span
  m="396230">hit</span> <span m="396440">there.</span> <span
  m="397250">These</span> <span m="397580">two</span> <span m="398300">on</span>
  <span m="398480">the</span> <span m="398630">square</span> <span
  m="399230">are--</span> <span m="400610">this</span> <span
  m="400850">is</span> <span m="401000">a</span> <span m="401090">45</span>
  <span m="401780">degree</span> <span m="402170">line</span> <span
  m="402500">now</span> <span m="404450">on</span> <span m="404630">that</span>
  <span m="404840">square.</span> <span m="405350">It</span> <span
  m="405410">hits</span> <span m="405740">it</span> <span m="405860">at</span>
  <span m="406010">that</span> <span m="406250">sharp</span> <span
  m="406610">point.</span> <span m="407600">And</span> <span
  m="407960">so</span> <span m="408260">the</span> <span m="408440">x1</span>
  <span m="408860">and</span> <span m="409040">x2</span> <span
  m="409520">are</span> <span m="409640">equal.</span> <span
  m="410510">And</span> <span m="410630">I</span> <span m="410780">think</span>
  <span m="411080">they're</span> <span m="411250">probably--</span> <span
  m="413510">let's</span> <span m="414000">see,</span> <span
  m="414350">if</span> <span m="414470">they're</span> <span
  m="414650">equal,</span> <span m="415790">if</span> <span m="415970">we</span>
  <span m="416090">made</span> <span m="416330">them</span> <span
  m="416540">1/7,</span> <span m="419390">then</span> <span
  m="419660">I'd</span> <span m="419840">have</span> <span m="420050">3/7</span>
  <span m="420880">plus</span> <span m="421130">4/7</span> <span
  m="421730">equals</span> <span m="422120">7/7.</span> <span
  m="422900">Yeah,</span> <span m="423630">I</span> <span
  m="423650">think</span> <span m="423980">we</span> <span
  m="424130">make</span> <span m="424400">some</span> <span
  m="424970">1/7,</span> <span m="425960">1/7.</span> <span m="429220">So</span>
  <span m="429430">that</span> <span m="429670">would</span> <span
  m="429820">be</span> <span m="430000">the</span> <span m="430180">x</span>
  <span m="430420">infinity</span> <span m="431060">point.</span> <span
  m="433300">3/7</span> <span m="433750">plus</span> <span m="434090">4/7</span>
  <span m="434450">give</span> <span m="434910">1.</span></p><p><span
  m="435700">So</span> <span m="437800">why</span> <span m="438040">do</span>
  <span m="438190">I</span> <span m="438250">mention</span> <span
  m="438670">this?</span> <span m="438970">First,</span> <span
  m="439330">because</span> <span m="439870">when</span> <span
  m="440050">I</span> <span m="440140">did</span> <span m="440350">it</span>
  <span m="440410">before</span> <span m="440800">I</span> <span
  m="440860">just</span> <span m="441070">drew</span> <span
  m="441280">pictures</span> <span m="441820">without</span> <span
  m="442870">really</span> <span m="444370">solving</span> <span
  m="444910">the</span> <span m="445030">problem.</span> <span
  m="445960">And</span> <span m="446080">secondly,</span> <span
  m="446590">because</span> <span m="447370">in</span> <span
  m="447610">thinking</span> <span m="448270">ahead</span> <span
  m="448600">about</span> <span m="448900">projects,</span> <span
  m="450181">this</span> <span m="450610">is</span> <span m="450700">the</span>
  <span m="450790">kind</span> <span m="451000">of</span> <span
  m="451060">project</span> <span m="452120">that</span> <span
  m="452500">I</span> <span m="452590">would</span> <span
  m="453880">think</span> <span m="454210">is</span> <span
  m="454360">quite</span> <span m="454630">interesting.</span> <span
  m="455470">Obviously,</span> <span m="456190">as</span> <span
  m="456860">this</span> <span m="457080">is</span> <span m="457300">p</span>
  <span m="457750">equal</span> <span m="458200">1.</span> <span
  m="458650">This</span> <span m="458890">is</span> <span m="459070">p</span>
  <span m="459770">equal</span> <span m="459970">2.</span> <span
  m="460780">This</span> <span m="461020">is</span> <span m="461170">p</span>
  <span m="461500">equal</span> <span m="461830">infinity.</span> <span
  m="462400">And</span> <span m="462520">I</span> <span m="463390">guess</span>
  <span m="463780">it's</span> <span m="463990">pretty</span> <span
  m="464350">clear</span> <span m="464650">from</span> <span
  m="464830">the</span> <span m="464950">pictures</span> <span
  m="466030">that</span> <span m="466330">as</span> <span m="466570">p</span>
  <span m="466930">increases,</span> <span m="468460">this</span> <span
  m="468670">point</span> <span m="469030">starts</span> <span
  m="469480">up</span> <span m="469690">here.</span> <span m="470750">And</span>
  <span m="470800">moves</span> <span m="471220">down</span> <span
  m="471550">the</span> <span m="471670">line</span> <span m="472630">and</span>
  <span m="472810">ends</span> <span m="473110">up</span> <span
  m="473320">here.</span> <span m="474670">And</span> <span
  m="474910">I've</span> <span m="475180">no</span> <span m="475390">idea</span>
  <span m="475750">like</span> <span m="476260">what</span> <span
  m="477550">the</span> <span m="477910">solution</span> <span
  m="478570">is</span> <span m="478780">for</span> <span m="478930">a</span>
  <span m="478950">different</span> <span m="479350">p</span> <span
  m="479770">and</span> <span m="479920">how</span> <span m="480130">it</span>
  <span m="480220">moves.</span></p><p><span m="481180">And</span> <span
  m="483310">to</span> <span m="483460">make</span> <span m="485470">it</span>
  <span m="485560">more</span> <span m="485950">of</span> <span
  m="486120">a</span> <span m="486190">project,</span> <span
  m="487420">what</span> <span m="487750">happens</span> <span
  m="488200">in</span> <span m="488350">3D?</span> <span m="489940">What</span>
  <span m="490120">happens</span> <span m="490540">in</span> <span
  m="490690">3D?</span> <span m="491260">In</span> <span m="491380">3D,</span>
  <span m="491950">if</span> <span m="492130">I</span> <span
  m="492280">have</span> <span m="492430">one</span> <span
  m="492700">equation</span> <span m="493750">in</span> <span
  m="493900">3D,</span> <span m="495130">then</span> <span m="495370">I</span>
  <span m="495460">have</span> <span m="495670">a</span> <span
  m="495760">plane.</span> <span m="497020">And</span> <span
  m="498190">this</span> <span m="498460">would</span> <span
  m="498640">become</span> <span m="499060">a</span> <span
  m="499120">diamond,</span> <span m="500400">a</span> <span
  m="500470">3D</span> <span m="501010">diamond.</span> <span
  m="501610">This</span> <span m="501850">would</span> <span
  m="502030">be</span> <span m="502180">a</span> <span m="502240">3D</span>
  <span m="502930">sphere.</span> <span m="503560">This</span> <span
  m="503830">would</span> <span m="503980">be</span> <span m="504130">a</span>
  <span m="504190">3D</span> <span m="504820">cube.</span> <span
  m="506050">They</span> <span m="506290">would</span> <span
  m="506590">expand</span> <span m="507760">to</span> <span
  m="507910">hit</span> <span m="508120">that</span> <span
  m="508360">plane.</span> <span m="510110">And</span> <span m="510830">I</span>
  <span m="510950">don't</span> <span m="511100">know</span> <span
  m="511220">how</span> <span m="511340">many</span> <span
  m="511640">zeros</span> <span m="512299">you</span> <span
  m="512450">get</span> <span m="513620">in</span> <span m="513740">that</span>
  <span m="513980">case.</span> <span m="515190">So</span> <span
  m="515299">that</span> <span m="515480">would</span> <span
  m="515600">be</span> <span m="515720">the</span> <span m="515840">case</span>
  <span m="516169">of</span> <span m="516320">one</span> <span
  m="517590">equation.</span> <span m="518299">So</span> <span
  m="518470">there</span> <span m="518580">would</span> <span
  m="518690">be</span> <span m="518809">a</span> <span m="518900">plane</span>
  <span m="519860">that</span> <span m="520039">these</span> <span
  m="521549">diamond,</span> <span m="523679">sphere,</span> <span
  m="524410">and</span> <span m="524790">cube</span> <span
  m="525630">expand</span> <span m="526290">until</span> <span
  m="526620">they</span> <span m="526770">hit</span> <span
  m="526980">it.</span></p><p><span m="527790">Or</span> <span
  m="528240">you</span> <span m="528420">could</span> <span
  m="528600">have</span> <span m="528870">two</span> <span
  m="529110">constraints,</span> <span m="530080">two</span> <span
  m="530280">equations.</span> <span m="531580">So</span> <span
  m="531750">if</span> <span m="531900">we</span> <span m="532020">had</span>
  <span m="532110">two</span> <span m="532350">equations</span> <span
  m="533070">and</span> <span m="533220">three</span> <span
  m="533490">unknowns,</span> <span m="534480">that</span> <span
  m="534660">would</span> <span m="534810">be</span> <span m="534930">a</span>
  <span m="535020">line</span> <span m="535380">again.</span> <span
  m="536840">But</span> <span m="537800">how</span> <span m="537980">many</span>
  <span m="538340">zeros</span> <span m="538880">would</span> <span
  m="539060">we</span> <span m="539180">get</span> <span m="539450">in</span>
  <span m="539600">these</span> <span m="539870">different</span> <span
  m="540290">cases?</span> <span m="541250">How</span> <span
  m="541490">sparse</span> <span m="542600">is</span> <span m="543020">L1</span>
  <span m="543540">going</span> <span m="543690">to</span> <span
  m="543800">be?</span></p><p><span m="546100">That's</span> <span
  m="546350">like</span> <span m="546620">a</span> <span
  m="546680">recapture</span> <span m="547550">of</span> <span
  m="547700">what</span> <span m="547940">we</span> <span m="548120">did.</span>
  <span m="551280">It's</span> <span m="551900">nice</span> <span
  m="552260">occasionally</span> <span m="552950">to</span> <span
  m="553070">have</span> <span m="553370">pictures</span> <span
  m="554420">showing</span> <span m="557810">where</span> <span
  m="558080">the</span> <span m="558230">solution</span> <span
  m="558800">is.</span> <span m="560390">Now,</span> <span m="560690">I'm</span>
  <span m="560870">coming</span> <span m="561260">to</span> <span
  m="563290">the</span> <span m="563470">topic</span> <span m="564010">of</span>
  <span m="564130">the</span> <span m="564280">day,</span> <span
  m="565950">which</span> <span m="566190">is</span> <span
  m="566400">Gram-Schmidt.</span> <span m="568280">And</span> <span
  m="568930">so</span> <span m="569120">Gram-Schmidt,</span> <span
  m="570370">number</span> <span m="570680">one,</span> <span
  m="571790">is</span> <span m="572300">the</span> <span
  m="572420">standard</span> <span m="573050">way</span> <span
  m="573710">that</span> <span m="573950">would</span> <span
  m="574130">be</span> <span m="575030">taught</span> <span m="575420">in</span>
  <span m="575570">18.06.</span></p><p><span m="581580">So</span> <span
  m="581730">what's</span> <span m="582000">Gram-Schmidt</span> <span
  m="582600">about?</span> <span m="584530">I'll</span> <span
  m="584800">just</span> <span m="585040">put</span> <span
  m="585310">down</span> <span m="585640">here</span> <span
  m="587020">general</span> <span m="587470">facts</span> <span
  m="587980">of</span> <span m="588130">Gram-Schmidt.</span> <span
  m="589240">We</span> <span m="589360">start</span> <span
  m="589780">with</span> <span m="590260">a</span> <span
  m="590350">matrix</span> <span m="590950">A.</span> <span
  m="592300">It's</span> <span m="592510">got</span> <span m="593200">n</span>
  <span m="593500">columns.</span> <span m="598770">But</span> <span
  m="598950">they're</span> <span m="599100">not</span> <span
  m="599340">orthogonal.</span> <span m="600900">And,</span> <span
  m="601050">in</span> <span m="601170">fact,</span> <span
  m="601650">they</span> <span m="601830">may</span> <span m="602220">be</span>
  <span m="602520">badly</span> <span m="602990">conditioned.</span> <span
  m="604560">Columns</span> <span m="605230">might</span> <span
  m="605500">be</span> <span m="605740">nearly</span> <span
  m="607000">dependent</span> <span m="607630">on</span> <span
  m="607780">the</span> <span m="607900">others.</span> <span
  m="608320">I'm</span> <span m="608470">going</span> <span m="608620">to</span>
  <span m="608710">assume</span> <span m="609070">the</span> <span
  m="609190">columns</span> <span m="609700">are</span> <span
  m="609820">independent,</span> <span m="611020">but</span> <span
  m="611200">they</span> <span m="611380">might</span> <span
  m="611680">be</span> <span m="611980">barely</span> <span
  m="612820">independent.</span> <span m="617320">So</span> <span
  m="617840">those</span> <span m="618100">lines</span> <span
  m="618490">then</span> <span m="618670">would</span> <span
  m="618820">be</span> <span m="619060">sort</span> <span m="619270">of</span>
  <span m="619330">like</span> <span m="619900">pointing</span> <span
  m="620410">very</span> <span m="620770">nearly</span> <span
  m="621220">parallel.</span></p><p><span m="622450">But</span> <span
  m="622630">Gram-Schmidt</span> <span m="623320">opens</span> <span
  m="623770">up</span> <span m="623950">the</span> <span
  m="624100">picture</span> <span m="625390">to</span> <span
  m="625570">get</span> <span m="627250">a</span> <span m="627310">matrix</span>
  <span m="627880">Q,</span> <span m="628390">an</span> <span
  m="628540">orthogonal</span> <span m="629200">matrix</span> <span
  m="629800">with</span> <span m="629980">columns</span> <span
  m="630460">Q1</span> <span m="631630">to</span> <span m="631780">Qn,</span>
  <span m="633850">which</span> <span m="634090">our</span> <span
  m="634240">ortho-normal.</span> <span m="636050">So</span> <span
  m="637210">it</span> <span m="637360">gets</span> <span m="637660">a</span>
  <span m="637900">perfect</span> <span m="638380">basis</span> <span
  m="639040">of</span> <span m="639190">Qs.</span> <span m="640550">And</span>
  <span m="642550">so</span> <span m="642700">that's</span> <span
  m="642970">what</span> <span m="643120">Gram-Schmidt</span> <span
  m="643780">does.</span> <span m="644650">And</span> <span
  m="644920">these</span> <span m="645280">are</span> <span
  m="645430">different</span> <span m="645790">ways</span> <span
  m="646120">to</span> <span m="646270">do</span> <span m="646510">it,</span>
  <span m="647020">different</span> <span m="647350">ways</span> <span
  m="647740">to</span> <span m="647950">organize</span> <span
  m="648760">the</span> <span m="650380">computation.</span> <span
  m="651910">I</span> <span m="652060">really</span> <span
  m="652450">only</span> <span m="652750">put</span> <span m="653110">the</span>
  <span m="653260">standard</span> <span m="653830">way</span> <span
  m="654160">in.</span></p><p><span m="655150">What</span> <span
  m="655450">is</span> <span m="655600">this</span> <span
  m="655810">mysterious</span> <span m="656680">R?</span> <span
  m="661470">So</span> <span m="663830">the</span> <span m="664050">Qs</span>
  <span m="664590">are</span> <span m="664710">combinations</span> <span
  m="665550">of</span> <span m="665640">the</span> <span m="665820">As.</span>
  <span m="667530">So</span> <span m="667710">there's</span> <span
  m="667890">some</span> <span m="668160">matrix</span> <span
  m="668760">to</span> <span m="668910">tell</span> <span m="669150">me</span>
  <span m="669570">what</span> <span m="669840">those</span> <span
  m="670080">combinations</span> <span m="670860">are.</span> <span
  m="671850">Or</span> <span m="672120">if</span> <span m="672300">I</span>
  <span m="672510">go</span> <span m="672760">back</span> <span
  m="673140">go</span> <span m="673410">backwards</span> <span
  m="674670">and</span> <span m="674820">say,</span> <span
  m="675270">well,</span> <span m="676350">the</span> <span m="676530">As</span>
  <span m="676980">are</span> <span m="677100">combinations</span> <span
  m="677910">of</span> <span m="678000">the</span> <span m="678120">Qs,</span>
  <span m="678600">that's</span> <span m="678840">what</span> <span
  m="679020">I'm</span> <span m="679200">about</span> <span m="679500">to</span>
  <span m="679650">do.</span> <span m="680670">If</span> <span
  m="680850">I</span> <span m="681000">say</span> <span m="681420">each</span>
  <span m="681870">A</span> <span m="682200">is</span> <span m="682350">a</span>
  <span m="682410">combination</span> <span m="683160">of</span> <span
  m="683310">Qs,</span> <span m="684330">that</span> <span
  m="684570">means</span> <span m="685110">that</span> <span
  m="685890">my</span> <span m="686130">A</span> <span m="686430">matrix</span>
  <span m="687780">is</span> <span m="687900">my</span> <span
  m="688110">Q</span> <span m="688410">matrix</span> <span
  m="689040">times</span> <span m="689330">some</span> <span m="689640">R</span>
  <span m="690030">matrix,</span> <span m="691110">which</span> <span
  m="691410">tells</span> <span m="691860">me</span> <span m="692220">the</span>
  <span m="692370">combinations.</span> <span m="695130">When</span> <span
  m="695280">I</span> <span m="695370">multiply</span> <span
  m="695820">by</span> <span m="696060">R</span> <span m="696450">on</span>
  <span m="696570">the</span> <span m="696660">right,</span> <span
  m="697680">I'm</span> <span m="697860">taking</span> <span
  m="698280">combinations</span> <span m="699210">of</span> <span
  m="699330">the</span> <span m="699420">columns</span> <span
  m="699960">of</span> <span m="700080">Q</span> <span m="700830">and</span>
  <span m="700980">getting</span> <span m="701400">the</span> <span
  m="701520">columns</span> <span m="702000">of</span> <span
  m="702180">A.</span></p><p><span m="703170">So</span> <span
  m="703350">just</span> <span m="703590">like</span> <span
  m="703830">LU,</span> <span m="705720">you</span> <span m="705870">go</span>
  <span m="706140">forward</span> <span m="706620">with</span> <span
  m="706800">the</span> <span m="706920">algorithm</span> <span
  m="708300">to</span> <span m="708450">reach</span> <span m="708840">U.</span>
  <span m="710190">Here,</span> <span m="710490">we</span> <span
  m="710670">go</span> <span m="710880">forward</span> <span
  m="711360">where</span> <span m="711520">the</span> <span
  m="711660">algorithm</span> <span m="712320">to</span> <span
  m="712470">reach</span> <span m="712860">Q.</span> <span m="713730">But</span>
  <span m="713910">then</span> <span m="714180">when</span> <span
  m="714390">we</span> <span m="714540">want</span> <span m="714720">to</span>
  <span m="716280">put</span> <span m="716970">it</span> <span
  m="717090">in</span> <span m="717240">one</span> <span
  m="717570">simple</span> <span m="718650">equation,</span> <span
  m="720000">it</span> <span m="720150">turns</span> <span m="720510">out</span>
  <span m="720660">to</span> <span m="720780">be</span> <span
  m="721200">better</span> <span m="721620">to</span> <span m="721800">go</span>
  <span m="722130">backwards</span> <span m="723300">and</span> <span
  m="723480">say</span> <span m="723900">how</span> <span m="724380">is</span>
  <span m="724560">the</span> <span m="724680">original</span> <span
  m="725010">A</span> <span m="725340">related</span> <span m="726570">to</span>
  <span m="726690">the</span> <span m="726840">final</span> <span
  m="727260">Q,</span> <span m="728340">there</span> <span m="728490">has</span>
  <span m="728730">to</span> <span m="728850">be</span> <span
  m="729030">some</span> <span m="729540">R.</span></p><p><span
  m="732020">OK,</span> <span m="732320">I</span> <span m="732470">always</span>
  <span m="732770">feel</span> <span m="733080">when</span> <span
  m="733250">I</span> <span m="733340">talk</span> <span m="733610">about</span>
  <span m="733880">Gram-Schmidt--</span> <span m="735050">I</span> <span
  m="735140">usually</span> <span m="735560">end</span> <span
  m="735830">with</span> <span m="736050">that</span> <span m="736550">A</span>
  <span m="736820">equal</span> <span m="737060">QR.</span> <span
  m="738050">And,</span> <span m="738170">of</span> <span
  m="738230">course,</span> <span m="738500">the</span> <span
  m="738620">Matlab</span> <span m="739190">command</span> <span
  m="739500">is</span> <span m="739810">exactly</span> <span
  m="740810">QR.</span> <span m="741350">So</span> <span m="741620">in</span>
  <span m="741800">Matlab,</span> <span m="744530">the</span> <span
  m="744680">command</span> <span m="745170">would</span> <span
  m="745330">be</span> <span m="745490">QR</span> <span m="746030">of</span>
  <span m="746180">A,</span> <span m="747980">instead</span> <span
  m="748400">of</span> <span m="748460">LU</span> <span m="748970">of</span>
  <span m="749120">A.</span> <span m="750830">So</span> <span
  m="751040">it</span> <span m="751100">would</span> <span
  m="751310">give</span> <span m="751490">you</span> <span m="751640">Q</span>
  <span m="751970">and</span> <span m="752120">R.</span> <span
  m="753230">That's</span> <span m="753500">what</span> <span
  m="753710">Matlab</span> <span m="754190">will</span> <span
  m="754370">output.</span></p><p><span m="755750">Now,</span> <span
  m="757400">as</span> <span m="757580">I</span> <span m="757640">say,</span>
  <span m="758360">Q</span> <span m="758780">is</span> <span
  m="758930">the</span> <span m="759050">saying</span> <span
  m="759380">we're</span> <span m="760040">constructing.</span> <span
  m="761510">R</span> <span m="761990">is</span> <span m="762240">the</span>
  <span m="763400">combinations</span> <span m="764330">that</span> <span
  m="764450">we</span> <span m="764630">need</span> <span m="766040">to</span>
  <span m="767120">get</span> <span m="767570">what</span> <span
  m="767780">we</span> <span m="767930">want.</span> <span m="768960">And</span>
  <span m="770510">so</span> <span m="770720">it</span> <span
  m="771410">comes</span> <span m="771710">at</span> <span m="771830">the</span>
  <span m="772010">end,</span> <span m="772470">what</span> <span
  m="772550">the</span> <span m="772640">heck</span> <span m="772880">was</span>
  <span m="773120">R.</span> <span m="773720">But</span> <span
  m="773960">actually,</span> <span m="774380">R</span> <span
  m="774650">is</span> <span m="774830">really</span> <span m="775280">a</span>
  <span m="775340">simple</span> <span m="776270">idea.</span> <span
  m="777050">So</span> <span m="777530">I</span> <span m="777590">want</span>
  <span m="777800">to</span> <span m="777860">show</span> <span
  m="778100">that</span> <span m="778280">at</span> <span m="778400">the</span>
  <span m="778520">beginning</span> <span m="779060">instead</span> <span
  m="779420">of</span> <span m="779510">the</span> <span
  m="779690">end.</span></p><p><span m="780570">OK,</span> <span
  m="781520">so</span> <span m="781730">I'm</span> <span m="781880">going</span>
  <span m="782000">to</span> <span m="782090">move</span> <span
  m="782360">Q</span> <span m="782690">over</span> <span m="782990">here,</span>
  <span m="784710">as</span> <span m="784980">Q</span> <span
  m="785360">inverse.</span> <span m="787460">But</span> <span
  m="787640">what</span> <span m="787880">is</span> <span m="788090">Q</span>
  <span m="788390">inverse?</span></p><p><span m="790289">AUDIENCE:</span> <span
  m="790505">Q</span> <span m="790722">transpose.</span></p><p><span
  m="791590">GILBERT STRANG:</span> <span m="791740">Q</span> <span
  m="791890">transpose,</span> <span m="792670">right,</span> <span
  m="793030">because</span> <span m="793300">I've</span> <span
  m="793450">created</span> <span m="793990">an</span> <span
  m="794110">orthogonal</span> <span m="794710">matrix.</span> <span
  m="795590">So</span> <span m="795700">this</span> <span
  m="795940">mysterious</span> <span m="796660">R</span> <span
  m="797920">is</span> <span m="798130">Q</span> <span
  m="798490">transpose</span> <span m="799330">A.</span> <span
  m="801382">And</span> <span m="801820">let</span> <span m="801910">me</span>
  <span m="802000">just</span> <span m="806510">sort</span> <span
  m="806740">of</span> <span m="806810">make</span> <span m="807080">it</span>
  <span m="807260">grow</span> <span m="807740">out</span> <span
  m="807980">into</span> <span m="808220">matrices.</span> <span
  m="809450">That</span> <span m="809690">has</span> <span m="809990">the</span>
  <span m="810140">Qs</span> <span m="810920">along</span> <span
  m="811310">the</span> <span m="811400">rows,</span> <span m="811940">Q</span>
  <span m="812180">transpose,</span> <span m="812870">of</span> <span
  m="812960">course.</span> <span m="814590">Qn</span> <span
  m="815300">transpose,</span> <span m="816230">Q1</span> <span
  m="816810">transpose.</span> <span m="819260">I'm</span> <span
  m="819890">transposing</span> <span m="820700">the</span> <span
  m="820790">matrix</span> <span m="821300">above</span> <span
  m="821600">it.</span> <span m="821780">So</span> <span m="821990">these</span>
  <span m="822260">columns</span> <span m="822770">become</span> <span
  m="823160">rows.</span> <span m="824060">Times</span> <span
  m="824510">the</span> <span m="824660">As,</span> <span m="825290">A1</span>
  <span m="826100">to</span> <span m="826250">An.</span></p><p><span
  m="831900">So</span> <span m="832080">what</span> <span m="832380">is</span>
  <span m="832680">a</span> <span m="832770">typical</span> <span
  m="834120">entry</span> <span m="834960">in</span> <span m="835510">R?</span>
  <span m="836790">That's</span> <span m="837060">really</span> <span
  m="837540">why</span> <span m="837840">I</span> <span m="837990">want</span>
  <span m="838190">to</span> <span m="838260">say</span> <span
  m="838620">nothing</span> <span m="839010">mysterious</span> <span
  m="839640">about</span> <span m="839940">this.</span> <span
  m="840750">You</span> <span m="840870">can</span> <span m="841050">see</span>
  <span m="841320">what</span> <span m="841530">you</span> <span
  m="841650">end</span> <span m="841860">up</span> <span m="842040">with.</span>
  <span m="842930">It</span> <span m="843080">will</span> <span
  m="843200">be</span> <span m="843360">right</span> <span m="843630">in</span>
  <span m="843720">front</span> <span m="843960">of</span> <span
  m="844110">us</span> <span m="844260">here.</span> <span
  m="847290">What</span> <span m="847530">is</span> <span m="847710">the</span>
  <span m="847860">entry</span> <span m="848490">in</span> <span
  m="849930">row</span> <span m="850460">i,</span> <span
  m="851130">column</span> <span m="851760">j</span> <span m="852240">of</span>
  <span m="852420">R?</span></p><p><span m="854270">OK,</span> <span
  m="854700">this</span> <span m="855360">says</span> <span
  m="857740">that</span> <span m="857950">all</span> <span
  m="858310">those</span> <span m="859420">entries</span> <span
  m="859990">in</span> <span m="860200">R</span> <span m="861370">are</span>
  <span m="863140">Qi</span> <span m="863840">transpose</span> <span
  m="864800">times</span> <span m="865230">Aj.</span> <span
  m="867140">That's</span> <span m="867830">the</span> <span
  m="867950">old</span> <span m="868160">way</span> <span m="868340">to</span>
  <span m="868460">multiply</span> <span m="868970">matrices.</span> <span
  m="869740">And</span> <span m="870440">it's</span> <span m="870710">the</span>
  <span m="870800">best</span> <span m="871070">way</span> <span
  m="872000">for</span> <span m="872150">this,</span> <span m="872865">a</span>
  <span m="873160">row</span> <span m="873590">times</span> <span
  m="873845">a</span> <span m="874100">column.</span> <span m="876140">In</span>
  <span m="876190">other</span> <span m="876310">words,</span> <span
  m="876890">the</span> <span m="877100">Rs</span> <span m="878740">are</span>
  <span m="878860">just</span> <span m="879100">the</span> <span
  m="879250">inner</span> <span m="879430">products,</span> <span
  m="880960">the</span> <span m="881110">dot</span> <span
  m="881380">products</span> <span m="882580">of</span> <span
  m="882700">the</span> <span m="882820">Qs</span> <span m="883360">with</span>
  <span m="883540">the</span> <span m="883690">As,</span> <span
  m="884155">of</span> <span m="884620">the</span> <span m="884710">Qs</span>
  <span m="885160">with</span> <span m="885310">the</span> <span
  m="885640">As.</span> <span m="886530">That's</span> <span
  m="887420">sort</span> <span m="887660">of</span> <span m="887740">like</span>
  <span m="888040">nothing</span> <span m="888400">mysterious</span> <span
  m="889030">about</span> <span m="889360">R.</span> <span
  m="890380">Because</span> <span m="890890">Q</span> <span m="891220">is</span>
  <span m="891370">an</span> <span m="891520">orthogonal</span> <span
  m="892120">matrix,</span> <span m="893200">we</span> <span
  m="894310">were</span> <span m="894520">able</span> <span m="894820">to</span>
  <span m="896190">put</span> <span m="896430">it</span> <span
  m="896580">over</span> <span m="896880">here,</span> <span
  m="898020">get</span> <span m="898260">a</span> <span m="898350">nice</span>
  <span m="899400">expression</span> <span m="900090">for</span> <span
  m="900330">R,</span> <span m="900750">and</span> <span m="900900">see</span>
  <span m="901170">what</span> <span m="901350">it</span> <span
  m="901410">really</span> <span m="901830">is.</span> <span
  m="902640">So</span> <span m="903810">you</span> <span m="904110">can</span>
  <span m="904260">do</span> <span m="904440">R</span> <span
  m="904650">at</span> <span m="904740">the</span> <span m="904920">end</span>
  <span m="907230">or</span> <span m="907980">on</span> <span
  m="908190">the</span> <span m="908280">root.</span> <span
  m="909270">But</span> <span m="909990">that's</span> <span
  m="910290">just</span> <span m="910590">the</span> <span
  m="910660">inner</span> <span m="910830">product</span> <span
  m="911280">of</span> <span m="911370">the</span> <span m="911490">Qs</span>
  <span m="911880">with</span> <span m="912060">the</span> <span
  m="912220">A's.</span></p><p><span m="913740">Now,</span> <span
  m="914580">what's</span> <span m="914910">Gram-Schmidt?</span> <span
  m="916980">I'm</span> <span m="917130">sort</span> <span m="917370">of</span>
  <span m="917430">thinking</span> <span m="917880">you've</span> <span
  m="918930">seen</span> <span m="919260">the</span> <span
  m="919380">basic</span> <span m="919830">ideas</span> <span
  m="920310">of</span> <span m="920430">Gram-Schmidt,</span> <span
  m="921690">but</span> <span m="921870">let's</span> <span
  m="922290">review.</span> <span m="923340">So</span> <span m="923790">I</span>
  <span m="923850">start</span> <span m="924240">with</span> <span
  m="930370">a.</span> <span m="932230">So</span> <span m="932410">what</span>
  <span m="932590">does</span> <span m="932800">Gram-Schmidt</span> <span
  m="933400">begin</span> <span m="933790">with?</span> <span
  m="935950">a1.</span> <span m="937000">It</span> <span m="937120">takes</span>
  <span m="937490">that</span> <span m="937630">first</span> <span
  m="938050">column.</span> <span m="938410">So</span> <span
  m="939160">these</span> <span m="939490">a's</span> <span
  m="940540">are</span> <span m="942130">not</span> <span
  m="942580">orthogonal</span> <span m="945010">generally.</span> <span
  m="947170">But</span> <span m="947380">the</span> <span
  m="947500">first</span> <span m="947830">direction</span> <span
  m="948400">is</span> <span m="948580">OK.</span> <span m="950070">I</span>
  <span m="950200">have</span> <span m="950310">no</span> <span
  m="950520">complaints</span> <span m="951120">about</span> <span
  m="951360">the</span> <span m="951480">first</span> <span
  m="951750">direction,</span> <span m="952290">except</span> <span
  m="952710">that</span> <span m="952950">a1</span> <span
  m="953520">might</span> <span m="953850">not</span> <span m="954240">be</span>
  <span m="956440">a</span> <span m="956560">unit</span> <span
  m="956980">vector.</span> <span m="958150">So</span> <span
  m="958420">q1</span> <span m="960340">will</span> <span m="960500">just</span>
  <span m="960790">be</span> <span m="961000">a1</span> <span
  m="961630">over</span> <span m="961960">its</span> <span
  m="962170">norm</span> <span m="964120">to</span> <span m="964300">have</span>
  <span m="964510">a</span> <span m="964600">unit</span> <span
  m="964900">vector.</span></p><p><span m="965980">The</span> <span
  m="966100">whole</span> <span m="966490">idea</span> <span
  m="966850">of</span> <span m="966940">Gram-Schmidt</span> <span
  m="967720">is</span> <span m="967930">in</span> <span m="968140">q2.</span>
  <span m="970100">So</span> <span m="970150">what</span> <span
  m="970330">is</span> <span m="970510">q2?</span> <span m="972490">The</span>
  <span m="972550">whole</span> <span m="972850">idea</span> <span
  m="973240">is</span> <span m="973390">coming</span> <span
  m="973730">here.</span> <span m="975040">It's</span> <span
  m="975210">the</span> <span m="975310">only</span> <span
  m="975580">thing</span> <span m="975820">you</span> <span
  m="975910">need</span> <span m="976120">to</span> <span
  m="976270">know.</span> <span m="976930">And</span> <span
  m="977180">the</span> <span m="977260">picture</span> <span
  m="977740">shows</span> <span m="978130">it.</span></p><p><span
  m="978760">So</span> <span m="979000">q2,</span> <span m="979720">I</span>
  <span m="979840">start</span> <span m="980170">with</span> <span
  m="980380">a2.</span> <span m="984640">But</span> <span m="984910">it's</span>
  <span m="985120">not</span> <span m="985480">orthogonal</span> <span
  m="986170">to</span> <span m="986380">a1.</span> <span m="988240">So</span>
  <span m="988420">what</span> <span m="988570">do</span> <span
  m="988690">I</span> <span m="988780">do?</span> <span m="991800">I</span>
  <span m="992260">figure</span> <span m="992710">out</span> <span
  m="993040">the</span> <span m="993220">component</span> <span
  m="993880">of</span> <span m="995320">a2</span> <span m="996370">in</span>
  <span m="996550">the</span> <span m="996730">a1</span> <span
  m="997150">direction</span> <span m="997690">and</span> <span
  m="997870">I</span> <span m="997990">remove</span> <span m="998440">it.</span>
  <span m="999190">So</span> <span m="999340">I</span> <span
  m="999430">take</span> <span m="999700">that</span> <span
  m="999970">vector</span> <span m="1000330">away</span> <span
  m="1000630">and</span> <span m="1000780">I'm</span> <span
  m="1000930">left</span> <span m="1001260">with</span> <span
  m="1001470">this</span> <span m="1001740">vector.</span> <span
  m="1002620">So</span> <span m="1002730">there</span> <span
  m="1002970">is</span> <span m="1003090">a</span> <span
  m="1003150">vector.</span> <span m="1003480">I'll</span> <span
  m="1003660">call</span> <span m="1003900">that</span> <span
  m="1004170">A2.</span> <span m="1007270">So</span> <span m="1007480">A2</span>
  <span m="1008170">is</span> <span m="1009250">the</span> <span
  m="1009370">original</span> <span m="1010570">little</span> <span
  m="1010880">a2</span> <span m="1012220">with</span> <span
  m="1013920">the</span> <span m="1014340">a1</span> <span
  m="1015120">direction</span> <span m="1016740">removed.</span></p><p><span
  m="1019910">So</span> <span m="1020190">what</span> <span
  m="1020500">what's</span> <span m="1020890">the</span> <span
  m="1021000">formula</span> <span m="1021450">for</span> <span
  m="1021630">what</span> <span m="1021810">I</span> <span
  m="1021930">just</span> <span m="1022200">did?</span> <span
  m="1023610">This</span> <span m="1023810">is</span> <span
  m="1023970">the</span> <span m="1024089">whole,</span> <span
  m="1024680">the</span> <span m="1024839">key</span> <span
  m="1025200">step</span> <span m="1025710">that</span> <span
  m="1027060">Gram-Schmidt</span> <span m="1027720">repeats</span> <span
  m="1028230">over</span> <span m="1028680">and</span> <span
  m="1028859">over</span> <span m="1029250">and</span> <span
  m="1029369">over</span> <span m="1029700">again.</span> <span
  m="1029910">It's</span> <span m="1030690">truly</span> <span
  m="1031109">boring.</span></p><p><span m="1032670">So</span> <span
  m="1033480">it</span> <span m="1033660">subtracts--</span> <span
  m="1036390">well,</span> <span m="1036599">remember</span> <span
  m="1037079">that</span> <span m="1037710">this</span> <span
  m="1038010">is</span> <span m="1038160">in</span> <span m="1038220">the</span>
  <span m="1038280">same</span> <span m="1038640">direction</span> <span
  m="1039180">as</span> <span m="1039369">Q1.</span> <span
  m="1040530">And</span> <span m="1040650">it's</span> <span
  m="1040829">better</span> <span m="1041099">to</span> <span
  m="1041220">work</span> <span m="1041550">with</span> <span
  m="1041800">Q1,</span> <span m="1044200">because</span> <span
  m="1044530">we've</span> <span m="1045190">found</span> <span
  m="1045520">that</span> <span m="1045730">guy.</span> <span
  m="1046960">We've</span> <span m="1047109">got</span> <span
  m="1047349">it.</span> <span m="1048130">And</span> <span
  m="1048280">we</span> <span m="1048400">know</span> <span
  m="1049240">it's</span> <span m="1049420">a</span> <span
  m="1049510">unit</span> <span m="1049840">vector.</span></p><p><span
  m="1050710">So</span> <span m="1051370">here's</span> <span
  m="1051640">my</span> <span m="1053140">linear</span> <span
  m="1053470">algebra</span> <span m="1053860">question.</span> <span
  m="1055180">What's</span> <span m="1055600">the</span> <span
  m="1055720">component</span> <span m="1057490">of</span> <span
  m="1057910">a2</span> <span m="1058270">that</span> <span m="1058450">I</span>
  <span m="1058570">want</span> <span m="1058750">to</span> <span
  m="1058810">subtract</span> <span m="1059470">off?</span> <span
  m="1060630">It's</span> <span m="1060960">the</span> <span
  m="1061090">component</span> <span m="1061780">in</span> <span
  m="1061930">the</span> <span m="1062020">direction</span> <span
  m="1062650">of</span> <span m="1062770">q1.</span> <span
  m="1063880">It's</span> <span m="1064090">this</span> <span
  m="1066250">in</span> <span m="1066430">the</span> <span
  m="1066550">direction</span> <span m="1067090">of</span> <span
  m="1067210">q1.</span> <span m="1068230">And</span> <span
  m="1068380">let</span> <span m="1068500">me</span> <span
  m="1068620">just</span> <span m="1068860">remember,</span> <span
  m="1070470">so</span> <span m="1071010">obviously,</span> <span
  m="1071520">that</span> <span m="1071760">angle</span> <span
  m="1072240">is</span> <span m="1072450">coming</span> <span
  m="1072810">into</span> <span m="1073170">it.</span> <span
  m="1074560">So</span> <span m="1074700">that</span> <span
  m="1074830">will</span> <span m="1074950">be</span> <span
  m="1075270">a2</span> <span m="1077100">transpose</span> <span
  m="1077900">q1</span> <span m="1080520">times</span> <span
  m="1080940">q1.</span> <span m="1082010">That's</span> <span
  m="1082290">it.</span> <span m="1084460">That's</span> <span
  m="1084790">the</span> <span m="1084910">component</span> <span
  m="1085510">that</span> <span m="1085660">we</span> <span
  m="1085850">remove.</span></p><p><span m="1092060">And</span> <span
  m="1093000">maybe</span> <span m="1093360">I'd</span> <span
  m="1093480">prefer</span> <span m="1093990">to</span> <span
  m="1094110">write</span> <span m="1094410">it</span> <span
  m="1095100">as</span> <span m="1096210">q1</span> <span
  m="1096870">transpose</span> <span m="1097590">a2.</span> <span
  m="1098220">I</span> <span m="1098280">don't</span> <span
  m="1098460">know.</span> <span m="1099560">It</span> <span
  m="1099990">doesn't</span> <span m="1100320">matter</span> <span
  m="1100650">of</span> <span m="1100770">course.</span> <span
  m="1101060">The</span> <span m="1101210">two</span> <span
  m="1101500">dot</span> <span m="1101700">products</span> <span
  m="1102150">are</span> <span m="1102240">the</span> <span
  m="1102380">same.</span> <span m="1103320">Maybe</span> <span
  m="1103650">I</span> <span m="1103830">will</span> <span
  m="1104580">just--</span> <span m="1107420">yeah--</span> <span
  m="1109150">well,</span> <span m="1109720">maybe</span> <span
  m="1109900">not.</span> <span m="1110680">Fine.</span></p><p><span
  m="1115790">Now</span> <span m="1115920">what</span> <span
  m="1116900">is</span> <span m="1117050">that</span> <span
  m="1117260">vector</span> <span m="1117650">supposed</span> <span
  m="1117980">to</span> <span m="1118130">achieve?</span> <span
  m="1119700">It's</span> <span m="1119930">supposed</span> <span
  m="1120560">to</span> <span m="1120650">be</span> <span
  m="1121190">this</span> <span m="1121520">vector.</span> <span
  m="1124170">This</span> <span m="1124440">vector</span> <span
  m="1124770">I'm</span> <span m="1124950">really</span> <span
  m="1125220">going</span> <span m="1125330">to</span> <span
  m="1125460">call</span> <span m="1125850">A2,</span> <span
  m="1127530">because</span> <span m="1127950">it's</span> <span
  m="1130230">in</span> <span m="1130410">the</span> <span
  m="1130530">right</span> <span m="1130770">direction</span> <span
  m="1131370">for</span> <span m="1131580">Q2,</span> <span
  m="1132390">but</span> <span m="1132660">it</span> <span m="1132810">is</span>
  <span m="1132960">not</span> <span m="1133290">yet?</span></p><p><span
  m="1135060">AUDIENCE:</span> <span m="1135275">Normal.</span></p><p><span
  m="1136350">GILBERT STRANG:</span> <span m="1136595">Normal.</span> <span
  m="1137710">So</span> <span m="1137910">what</span> <span
  m="1138180">is</span> <span m="1138390">Q2</span> <span
  m="1138900">then?</span> <span m="1140550">So</span> <span
  m="1140700">I'm</span> <span m="1140880">saying</span> <span
  m="1141180">this</span> <span m="1141390">guy</span> <span
  m="1141660">got</span> <span m="1141870">the</span> <span
  m="1142020">direction</span> <span m="1142560">right.</span> <span
  m="1143860">They're</span> <span m="1144030">saying</span> <span
  m="1144750">subtract</span> <span m="1145080">it</span> <span
  m="1145410">off</span> <span m="1145620">this</span> <span
  m="1145860">vector.</span> <span m="1146280">Got</span> <span
  m="1146490">that</span> <span m="1146700">direction</span> <span
  m="1147240">right.</span> <span m="1147600">Got</span> <span
  m="1147840">it</span> <span m="1147990">as</span> <span
  m="1148200">A2.</span></p><p><span m="1149190">What</span> <span
  m="1149400">is</span> <span m="1149580">Q2</span> <span m="1150210">now</span>
  <span m="1151670">that</span> <span m="1151880">I</span> <span
  m="1151970">want</span> <span m="1152170">to</span> <span
  m="1152240">finish?</span> <span m="1152850">I've</span> <span
  m="1152870">got</span> <span m="1153110">the</span> <span
  m="1153230">direction.</span> <span m="1153860">All</span> <span
  m="1154100">I</span> <span m="1154190">want</span> <span m="1154440">to</span>
  <span m="1154520">do</span> <span m="1154820">is</span> <span
  m="1156320">get</span> <span m="1156710">it</span> <span m="1156770">to</span>
  <span m="1156830">be</span> <span m="1157070">a</span> <span
  m="1157160">unit</span> <span m="1157580">vector.</span> <span
  m="1158060">So</span> <span m="1158300">I</span> <span m="1158450">just</span>
  <span m="1158690">take</span> <span m="1158990">A2</span> <span
  m="1160880">over</span> <span m="1161270">its</span> <span
  m="1161480">norm.</span></p><p><span m="1166870">That</span> <span
  m="1167500">double</span> <span m="1167860">step</span> <span
  m="1169240">is</span> <span m="1169480">the</span> <span
  m="1169600">whole</span> <span m="1169960">thing</span> <span
  m="1170310">in</span> <span m="1170530">Gram-Schmidt,</span> <span
  m="1171640">the</span> <span m="1171760">whole</span> <span
  m="1172030">thing.</span> <span m="1173760">Subtract</span> <span
  m="1174480">off</span> <span m="1175020">the</span> <span
  m="1175140">components</span> <span m="1176040">in</span> <span
  m="1176220">the</span> <span m="1176340">directions</span> <span
  m="1177090">already</span> <span m="1177540">set.</span> <span
  m="1180220">Then</span> <span m="1180430">you</span> <span
  m="1180550">get</span> <span m="1180790">something</span> <span
  m="1181270">in</span> <span m="1181380">a</span> <span
  m="1181480">totally</span> <span m="1181990">new</span> <span
  m="1182260">direction,</span> <span m="1182920">called</span> <span
  m="1183340">A,</span> <span m="1184800">capital</span> <span
  m="1185055">A.</span> <span m="1185310">And</span> <span
  m="1186690">then</span> <span m="1186900">you</span> <span
  m="1187020">divide</span> <span m="1187470">by</span> <span
  m="1187680">its</span> <span m="1187860">length</span> <span
  m="1188290">to</span> <span m="1188460">make</span> <span
  m="1188730">it</span> <span m="1188850">a</span> <span m="1188940">unit</span>
  <span m="1189300">vector.</span> <span m="1189720">And</span> <span
  m="1189840">that</span> <span m="1190020">gives</span> <span
  m="1190320">you</span> <span m="1190410">the</span> <span
  m="1190560">new</span> <span m="1190860">Q.</span></p><p><span
  m="1193570">Just</span> <span m="1193970">to</span> <span
  m="1194090">show</span> <span m="1194430">that</span> <span
  m="1194580">we've</span> <span m="1194760">got</span> <span
  m="1195020">a</span> <span m="1195090">point,</span> <span
  m="1196380">what</span> <span m="1196620">about</span> <span
  m="1197760">the</span> <span m="1197880">next</span> <span
  m="1198180">step,</span> <span m="1199880">aiming</span> <span
  m="1200300">for</span> <span m="1200540">Q3.</span> <span
  m="1201860">So</span> <span m="1202070">tell</span> <span
  m="1202280">me</span> <span m="1202430">what</span> <span
  m="1202670">A3</span> <span m="1203450">should</span> <span
  m="1203750">be?</span> <span m="1204890">A3,</span> <span
  m="1205580">I'm</span> <span m="1205760">going</span> <span
  m="1205850">to</span> <span m="1205970">start</span> <span
  m="1206450">with</span> <span m="1206690">this.</span> <span
  m="1207580">And</span> <span m="1207710">I'm</span> <span
  m="1207820">going</span> <span m="1207920">to</span> <span
  m="1208070">subtract</span> <span m="1208700">off</span> <span
  m="1208910">some</span> <span m="1209150">stuff.</span> <span
  m="1211920">What</span> <span m="1212100">am</span> <span m="1212220">I</span>
  <span m="1212310">going</span> <span m="1212400">to</span> <span
  m="1212520">subtract</span> <span m="1213120">off?</span></p><p><span
  m="1214460">AUDIENCE:</span> <span m="1214705">The</span> <span
  m="1214950">transpose.</span></p><p><span m="1215930">GILBERT STRANG:</span>
  <span m="1216035">The</span> <span m="1216140">component,</span> <span
  m="1216650">a3</span> <span m="1217380">transpose,</span> <span
  m="1218250">right.</span> <span m="1220220">Times</span> <span
  m="1220890">q1</span> <span m="1222650">q1.</span> <span
  m="1224180">And</span> <span m="1224520">I</span> <span
  m="1225210">didn't</span> <span m="1225540">yet</span> <span
  m="1225740">check</span> <span m="1226100">so</span> <span
  m="1226240">that</span> <span m="1227930">this</span> <span
  m="1228480">came</span> <span m="1228780">out</span> <span
  m="1229020">orthogonal</span> <span m="1229710">to</span> <span
  m="1229890">q1,</span> <span m="1230190">but</span> <span
  m="1230490">I'll</span> <span m="1230850">come</span> <span
  m="1231090">back</span> <span m="1231330">to</span> <span
  m="1231450">that.</span> <span m="1232260">Now,</span> <span
  m="1232650">have</span> <span m="1232830">I</span> <span
  m="1234000">done</span> <span m="1234270">everything</span> <span
  m="1234690">I</span> <span m="1234780">should</span> <span
  m="1234990">do</span> <span m="1235350">here</span> <span
  m="1236860">with</span> <span m="1237070">a3?</span></p><p><span
  m="1237910">No,</span> <span m="1238270">I've</span> <span
  m="1238390">got</span> <span m="1238540">one</span> <span
  m="1238780">more</span> <span m="1239050">step</span> <span
  m="1239440">to</span> <span m="1239590">take.</span> <span
  m="1240350">And</span> <span m="1240430">I</span> <span
  m="1240550">should</span> <span m="1240790">take</span> <span
  m="1241090">the</span> <span m="1241210">two</span> <span
  m="1241480">steps</span> <span m="1241870">separately.</span> <span
  m="1243360">It's</span> <span m="1243580">called</span> <span
  m="1243880">modified</span> <span m="1244570">Gram-Schmidt.</span> <span
  m="1245360">And</span> <span m="1246130">what</span> <span
  m="1246580">I</span> <span m="1246670">want</span> <span m="1246880">to</span>
  <span m="1246970">do</span> <span m="1247330">is</span> <span
  m="1247480">subtract</span> <span m="1248140">off</span> <span
  m="1248830">the</span> <span m="1248950">q2</span> <span
  m="1249480">component.</span> <span m="1251500">So</span> <span
  m="1251680">what</span> <span m="1252580">multiple</span> <span
  m="1253120">of</span> <span m="1253290">q2</span> <span m="1253930">do</span>
  <span m="1254110">I</span> <span m="1254260">need?</span> <span
  m="1255340">Because</span> <span m="1255550">q2</span> <span
  m="1256030">has</span> <span m="1256180">been</span> <span
  m="1256420">set</span> <span m="1256870">by</span> <span
  m="1257050">the</span> <span m="1257170">time</span> <span
  m="1257470">I</span> <span m="1257530">get</span> <span m="1257740">to</span>
  <span m="1257920">a3,</span> <span m="1259240">so</span> <span
  m="1259510">what</span> <span m="1260650">goes</span> <span
  m="1260950">here?</span></p><p><span m="1263120">AUDIENCE:</span> <span
  m="1263350">a3</span> <span m="1264040">transpose</span></p><p><span
  m="1264960">GILBERT STRANG:</span> <span m="1265110">a3</span> <span
  m="1265710">transpose--</span></p><p><span m="1267230">AUDIENCE:</span> <span
  m="1267405">q2</span></p><p><span m="1267930">GILBERT STRANG:</span> <span
  m="1268065">q2.</span> <span m="1268470">Thanks.</span> <span
  m="1269290">Thanks.</span> <span m="1272980">If</span> <span
  m="1273160">you</span> <span m="1273310">look</span> <span
  m="1273580">at</span> <span m="1273670">a</span> <span
  m="1273760">code,</span> <span m="1275200">say</span> <span
  m="1275410">a</span> <span m="1275470">Matlab</span> <span
  m="1275950">code</span> <span m="1276370">to</span> <span
  m="1277430">do</span> <span m="1277690">Gram-Schmidt--</span> <span
  m="1278700">oh,</span> <span m="1279130">what's</span> <span
  m="1279400">the</span> <span m="1279520">final</span> <span
  m="1279910">q3</span> <span m="1280600">then?</span></p><p><span
  m="1283060">AUDIENCE:</span> <span m="1283284">Normalize</span> <span
  m="1283508">it.</span></p><p><span m="1284410">GILBERT STRANG:</span> <span
  m="1284590">Normalize</span> <span m="1285130">it.</span> <span
  m="1285460">So</span> <span m="1285670">you</span> <span
  m="1285800">take</span> <span m="1286120">A3,</span> <span
  m="1288140">which</span> <span m="1288280">is</span> <span
  m="1288430">in</span> <span m="1288550">the</span> <span
  m="1288640">right</span> <span m="1288910">direction,</span> <span
  m="1289570">and</span> <span m="1289780">you</span> <span
  m="1289900">divide</span> <span m="1290380">by</span> <span
  m="1290590">its</span> <span m="1290770">length</span> <span
  m="1291565">to</span> <span m="1291880">get</span> <span m="1292075">a</span>
  <span m="1292270">unit</span> <span m="1292600">vector.</span></p><p><span
  m="1296760">Let</span> <span m="1296850">me</span> <span
  m="1296970">just</span> <span m="1297180">come</span> <span
  m="1297390">back</span> <span m="1297810">and</span> <span
  m="1299120">check</span> <span m="1299600">that</span> <span
  m="1299760">I</span> <span m="1299910">did</span> <span m="1300150">it</span>
  <span m="1300330">right,</span> <span m="1301170">that</span> <span
  m="1301350">I</span> <span m="1301440">got</span> <span m="1301680">the</span>
  <span m="1301770">right</span> <span m="1302040">direction.</span> <span
  m="1302790">So</span> <span m="1302970">what</span> <span
  m="1303180">do</span> <span m="1303300">I</span> <span m="1303360">mean</span>
  <span m="1303690">by</span> <span m="1303870">the</span> <span
  m="1303960">right</span> <span m="1304260">direction?</span> <span
  m="1304870">What</span> <span m="1305100">should</span> <span
  m="1306900">I</span> <span m="1306990">check</span> <span
  m="1307350">about</span> <span m="1307620">that</span> <span
  m="1307860">guy?</span> <span m="1309360">I</span> <span
  m="1309510">should</span> <span m="1309720">check</span> <span
  m="1310110">that</span> <span m="1310380">it's</span> <span
  m="1310620">inner</span> <span m="1310860">product</span> <span
  m="1311460">with</span> <span m="1313210">q1</span> <span
  m="1314200">is?</span> <span m="1319030">If</span> <span
  m="1319210">this</span> <span m="1319450">is</span> <span
  m="1319630">the</span> <span m="1319720">right</span> <span
  m="1319990">direction</span> <span m="1320530">to</span> <span
  m="1320650">go,</span> <span m="1322420">that</span> <span
  m="1322600">way,</span> <span m="1324100">then</span> <span
  m="1324430">I</span> <span m="1324550">should</span> <span
  m="1324820">check--</span> <span m="1325930">I</span> <span
  m="1326020">have</span> <span m="1326290">to</span> <span
  m="1326440">check--</span> <span m="1327550">hopefully,</span> <span
  m="1328060">I've</span> <span m="1328180">got</span> <span
  m="1328390">the</span> <span m="1328510">formula</span> <span
  m="1328960">right--</span> <span m="1330250">that</span> <span
  m="1330490">it's</span> <span m="1330790">dot</span> <span
  m="1331090">product,</span> <span m="1331890">inner</span> <span
  m="1332170">product</span> <span m="1332650">with</span> <span
  m="1333040">q1</span> <span m="1334480">is--</span></p><p><span
  m="1334840">AUDIENCE:</span> <span m="1335020">0.</span></p><p><span
  m="1335740">GILBERT STRANG:</span> <span m="1335875">0.</span> <span
  m="1336280">Thank</span> <span m="1336580">you.</span> <span
  m="1338110">So</span> <span m="1338350">is</span> <span m="1338500">it</span>
  <span m="1338620">obvious</span> <span m="1339040">that</span> <span
  m="1339190">it</span> <span m="1339340">is?</span> <span
  m="1340090">Take</span> <span m="1340360">the</span> <span
  m="1340510">inner</span> <span m="1340720">product</span> <span
  m="1341200">of</span> <span m="1341260">the</span> <span
  m="1341410">dot</span> <span m="1341650">product</span> <span
  m="1342070">of</span> <span m="1342190">that</span> <span
  m="1342400">with</span> <span m="1342790">q1,</span> <span
  m="1344560">what</span> <span m="1344680">do</span> <span
  m="1344740">you</span> <span m="1344860">get?</span> <span
  m="1348020">You</span> <span m="1348170">get</span> <span
  m="1349130">the</span> <span m="1349250">same</span> <span
  m="1349640">number</span> <span m="1349970">q1</span> <span
  m="1350860">a2</span> <span m="1351260">transpose</span> <span
  m="1351860">q1.</span> <span m="1352370">You</span> <span
  m="1352460">get</span> <span m="1352640">that</span> <span
  m="1352850">number.</span> <span m="1353780">And</span> <span
  m="1353900">over</span> <span m="1354110">here,</span> <span
  m="1354350">you're</span> <span m="1354480">getting</span> <span
  m="1354890">q1</span> <span m="1355460">transpose</span> <span
  m="1358850">with</span> <span m="1359090">q1.</span> <span
  m="1359690">So</span> <span m="1359870">do</span> <span m="1360730">you</span>
  <span m="1360920">see</span> <span m="1361130">what</span> <span
  m="1361280">I'm</span> <span m="1361400">doing?</span> <span
  m="1362365">Probably</span> <span m="1362720">it</span> <span
  m="1362900">looks</span> <span m="1363140">like</span> <span
  m="1363350">it</span> <span m="1363410">would</span> <span
  m="1363580">have</span> <span m="1363680">been</span> <span
  m="1363800">better.</span></p><p><span m="1365750">I'm</span> <span
  m="1365900">checking</span> <span m="1368180">that</span> <span
  m="1368630">q1</span> <span m="1369980">transpose</span> <span
  m="1370820">a2</span> <span m="1371390">is</span> <span m="1371560">0.</span>
  <span m="1374660">Yeah,</span> <span m="1375590">it</span> <span
  m="1375640">is.</span> <span m="1377650">q1</span> <span
  m="1378130">transpose</span> <span m="1378790">a2</span> <span
  m="1379240">here,</span> <span m="1380350">q1</span> <span
  m="1380770">transpose</span> <span m="1381370">a2,</span> <span
  m="1381880">or</span> <span m="1382000">a2</span> <span
  m="1382360">transpose</span> <span m="1382930">q1,</span> <span
  m="1383350">I</span> <span m="1383470">don't</span> <span
  m="1383620">mind.</span> <span m="1384690">And</span> <span
  m="1384970">I</span> <span m="1385090">have</span> <span
  m="1385420">another</span> <span m="1385960">q1</span> <span
  m="1386620">transpose</span> <span m="1387370">q1</span> <span
  m="1388480">here.</span> <span m="1388840">And</span> <span
  m="1388990">what</span> <span m="1389200">is</span> <span
  m="1389380">that?</span> <span m="1390550">What</span> <span
  m="1390730">is</span> <span m="1390940">q1</span> <span
  m="1391390">transpose</span> <span m="1392050">q1?</span> <span
  m="1392680">It</span> <span m="1392890">is?</span></p><p><span
  m="1393615">AUDIENCE:</span> <span m="1393782">1.</span></p><p><span
  m="1393950">GILBERT STRANG:</span> <span m="1394120">1.</span> <span
  m="1395200">So</span> <span m="1395620">check.</span> <span
  m="1402130">OK,</span> <span m="1402460">that's</span> <span
  m="1402760">Gram-Schmidt,</span> <span m="1404560">standard</span> <span
  m="1405200">Gram-Schmidt,</span> <span m="1405460">which</span> <span
  m="1406090">you</span> <span m="1407200">have</span> <span
  m="1408448">met</span> <span m="1409406">before.</span> <span
  m="1412760">Now,</span> <span m="1412940">I'm</span> <span
  m="1413090">ready</span> <span m="1413330">for</span> <span
  m="1415890">a</span> <span m="1416040">better</span> <span
  m="1416490">Gram-Schmidt.</span> <span m="1417350">You</span> <span
  m="1417510">could</span> <span m="1417660">say</span> <span
  m="1417870">a</span> <span m="1417990">better</span> <span
  m="1418320">Gram-Schmidt,</span> <span m="1420030">because</span> <span
  m="1421620">here--</span> <span m="1422250">so</span> <span
  m="1422430">what's</span> <span m="1422800">it</span> <span
  m="1422840">going</span> <span m="1422940">to</span> <span
  m="1423060">be</span> <span m="1423180">the</span> <span
  m="1423300">difference?</span> <span m="1425480">Here,</span> <span
  m="1425960">I</span> <span m="1426200">took</span> <span
  m="1426740">the</span> <span m="1427010">a's</span> <span
  m="1428690">in</span> <span m="1428840">their</span> <span
  m="1429050">original</span> <span m="1429590">order.</span></p><p><span
  m="1432830">Now,</span> <span m="1433430">suppose</span> <span
  m="1433910">I</span> <span m="1434060">did</span> <span
  m="1434270">that</span> <span m="1434480">with</span> <span
  m="1434720">elimination.</span> <span m="1437390">Elimination,</span> <span
  m="1438080">usually</span> <span m="1438540">we</span> <span
  m="1438730">write</span> <span m="1438975">as</span> <span
  m="1439220">acting</span> <span m="1439660">on</span> <span
  m="1439790">the</span> <span m="1439880">row.</span> <span
  m="1440330">So</span> <span m="1441150">thinking</span> <span
  m="1441440">about</span> <span m="1441710">elimination,</span> <span
  m="1442400">I'm</span> <span m="1442550">thinking</span> <span
  m="1442840">I'm</span> <span m="1442970">the</span> <span
  m="1443060">rows.</span> <span m="1444820">What</span> <span
  m="1445090">would</span> <span m="1445300">be</span> <span
  m="1445510">the</span> <span m="1445660">danger</span> <span
  m="1446410">in</span> <span m="1447580">taking</span> <span
  m="1448090">the</span> <span m="1448210">rows</span> <span
  m="1448960">in</span> <span m="1449230">order,</span> <span
  m="1450010">doing</span> <span m="1450340">no</span> <span
  m="1450640">row</span> <span m="1450940">exchanges,</span> <span
  m="1452560">just</span> <span m="1453990">figure</span> <span
  m="1454410">out</span> <span m="1454710">the</span> <span
  m="1454860">pivot</span> <span m="1455310">each</span> <span
  m="1455940">time,</span> <span m="1457140">and</span> <span
  m="1457380">kill</span> <span m="1457740">the</span> <span
  m="1457860">rest</span> <span m="1458190">of</span> <span
  m="1458250">the</span> <span m="1458370">column</span> <span
  m="1458850">and</span> <span m="1458970">then</span> <span
  m="1459210">move</span> <span m="1459480">on?</span> <span
  m="1460420">So</span> <span m="1461040">taking</span> <span
  m="1461460">the</span> <span m="1461550">rows</span> <span
  m="1462030">in</span> <span m="1462150">the</span> <span
  m="1462300">order</span> <span m="1462570">they</span> <span
  m="1462750">came,</span> <span m="1463350">whatever</span> <span
  m="1463860">it</span> <span m="1463980">might</span> <span
  m="1464280">be,</span> <span m="1465240">what's</span> <span
  m="1465510">the</span> <span m="1465600">risk?</span> <span
  m="1466140">And</span> <span m="1466500">why</span> <span
  m="1466890">would</span> <span m="1467070">Matlab</span> <span
  m="1467640">not</span> <span m="1467970">do</span> <span
  m="1468210">that?</span></p><p><span m="1470770">Because</span> <span
  m="1471640">something</span> <span m="1472270">can</span> <span
  m="1472510">be</span> <span m="1472720">very</span> <span
  m="1473110">small</span> <span m="1473680">and</span> <span
  m="1473920">totally</span> <span m="1474550">blow</span> <span
  m="1474970">up</span> <span m="1475180">your</span> <span
  m="1475560">calculations.</span> <span m="1477100">And</span> <span
  m="1477220">that's</span> <span m="1477610">that</span> <span
  m="1478360">pivot</span> <span m="1478780">number.</span> <span
  m="1479770">Sort</span> <span m="1479950">of</span> <span
  m="1480010">the</span> <span m="1480130">question</span> <span
  m="1480700">is,</span> <span m="1482930">if</span> <span m="1483190">a2</span>
  <span m="1484540">is</span> <span m="1484720">very</span> <span
  m="1485020">near</span> <span m="1485410">a1--</span> <span
  m="1488490">so</span> <span m="1488970">let</span> <span m="1489120">me</span>
  <span m="1489240">draw</span> <span m="1489540">a</span> <span
  m="1489570">new</span> <span m="1489810">picture.</span> <span
  m="1490510">So</span> <span m="1490620">here's</span> <span
  m="1490890">the</span> <span m="1491010">risk.</span> <span
  m="1492150">So</span> <span m="1492390">a1</span> <span m="1492900">was</span>
  <span m="1493120">whatever</span> <span m="1493620">it</span> <span
  m="1493680">was.</span> <span m="1495110">If</span> <span
  m="1495290">a2</span> <span m="1496010">is</span> <span
  m="1497240">really</span> <span m="1498020">close</span> <span
  m="1498470">to</span> <span m="1498560">the</span> <span
  m="1498710">same</span> <span m="1499040">direction,</span> <span
  m="1500510">then</span> <span m="1501330">I'm</span> <span
  m="1501530">subtracting</span> <span m="1502220">off</span> <span
  m="1502520">almost</span> <span m="1503030">all</span> <span
  m="1503240">of</span> <span m="1503360">it,</span> <span
  m="1503500">and</span> <span m="1503590">I've</span> <span
  m="1503720">got</span> <span m="1503900">some</span> <span
  m="1504140">tiny</span> <span m="1504650">little</span> <span
  m="1504920">bit</span> <span m="1505280">for</span> <span
  m="1506360">the</span> <span m="1506570">new</span> <span
  m="1506840">direction.</span></p><p><span m="1508780">That's</span> <span
  m="1509080">like</span> <span m="1509440">the</span> <span
  m="1509620">pivot</span> <span m="1510160">in</span> <span
  m="1510580">elimination.</span> <span m="1512020">It's</span> <span
  m="1512320">the</span> <span m="1513190">number</span> <span
  m="1513700">that</span> <span m="1513910">sort</span> <span
  m="1514180">of</span> <span m="1514300">measures</span> <span
  m="1515710">what's</span> <span m="1516670">new,</span> <span
  m="1517430">what</span> <span m="1517930">the</span> <span
  m="1518080">new</span> <span m="1518530">row</span> <span
  m="1519070">in</span> <span m="1519220">elimination</span> <span
  m="1520030">or</span> <span m="1520150">the</span> <span
  m="1520270">new</span> <span m="1520570">column</span> <span
  m="1521480">in</span> <span m="1521680">Gram-Schmidt</span> <span
  m="1524920">gives</span> <span m="1525280">you.</span> <span
  m="1526960">And</span> <span m="1527140">if</span> <span
  m="1527290">that's</span> <span m="1527590">too</span> <span
  m="1527860">small--</span> <span m="1528850">I</span> <span
  m="1528910">mean,</span> <span m="1529090">like</span> <span
  m="1529330">in</span> <span m="1529480">elimination,</span> <span
  m="1530550">as</span> <span m="1530740">I</span> <span m="1530860">say,</span>
  <span m="1531070">we</span> <span m="1531220">would</span> <span
  m="1531460">never</span> <span m="1533560">use</span> <span
  m="1533950">an</span> <span m="1534070">elimination</span> <span
  m="1534820">code</span> <span m="1535210">on</span> <span m="1535360">a</span>
  <span m="1535450">general</span> <span m="1535870">matrix</span> <span
  m="1536500">that</span> <span m="1536620">didn't</span> <span
  m="1537160">check</span> <span m="1537550">the</span> <span
  m="1537700">size</span> <span m="1538120">of</span> <span
  m="1538240">the</span> <span m="1538360">pivot</span> <span
  m="1539170">and</span> <span m="1539320">exchange</span> <span
  m="1540010">rows</span> <span m="1540580">when</span> <span
  m="1540790">necessary.</span></p><p><span m="1542380">Well,</span> <span
  m="1542680">similarly,</span> <span m="1543430">with</span> <span
  m="1543640">Gram-Schmidt,</span> <span m="1545570">it</span> <span
  m="1545810">can</span> <span m="1546050">take</span> <span
  m="1546440">the</span> <span m="1546740">columns</span> <span
  m="1547400">in</span> <span m="1547580">order.</span> <span
  m="1548780">That's</span> <span m="1549110">the</span> <span
  m="1549260">standard</span> <span m="1549920">Gram-Schmidt</span> <span
  m="1550610">taking</span> <span m="1551000">the</span> <span
  m="1551120">columns</span> <span m="1551630">in</span> <span
  m="1551810">order.</span> <span m="1552770">But</span> <span
  m="1553280">only</span> <span m="1553730">if</span> <span
  m="1553970">it</span> <span m="1554960">checks</span> <span
  m="1555530">each</span> <span m="1555800">time</span> <span
  m="1556780">that</span> <span m="1557090">the</span> <span
  m="1557180">little</span> <span m="1557570">bit--</span> <span
  m="1562340">well,</span> <span m="1562760">that</span> <span
  m="1563000">the</span> <span m="1564460">new</span> <span
  m="1564710">part,</span> <span m="1565340">what</span> <span
  m="1565520">would</span> <span m="1565670">be</span> <span
  m="1565850">the</span> <span m="1565970">new</span> <span
  m="1566180">part,</span> <span m="1566600">is</span> <span
  m="1569950">big</span> <span m="1570130">enough</span> <span
  m="1572180">to</span> <span m="1572330">be</span> <span
  m="1572510">able</span> <span m="1572840">to--</span> <span
  m="1573110">we</span> <span m="1573290">have</span> <span
  m="1573440">to</span> <span m="1573560">divide</span> <span
  m="1574040">by</span> <span m="1574250">the</span> <span
  m="1574370">thing.</span> <span m="1575910">And</span> <span
  m="1576060">if</span> <span m="1576210">that</span> <span
  m="1576420">A2</span> <span m="1576870">is</span> <span
  m="1577050">tiny</span> <span m="1577450">is</span> <span m="1577600">a</span>
  <span m="1577740">tiny</span> <span m="1578190">vector.</span> <span
  m="1579180">This</span> <span m="1579540">is</span> <span
  m="1579570">dividing</span> <span m="1580200">by</span> <span
  m="1580410">A2</span> <span m="1581520">and</span> <span
  m="1582750">onwards</span> <span m="1583380">is</span> <span
  m="1585000">building</span> <span m="1585510">in</span> <span
  m="1585900">round-off</span> <span m="1586470">error</span> <span
  m="1586800">that</span> <span m="1587010">we</span> <span
  m="1587600">can't</span> <span m="1588120">remove</span> <span
  m="1588570">again.</span> <span m="1589330">We're</span> <span
  m="1589500">stuck</span> <span m="1589860">with</span> <span
  m="1590010">it.</span></p><p><span m="1591150">So</span> <span
  m="1591390">that's</span> <span m="1591840">the</span> <span
  m="1594470">column</span> <span m="1595160">exchange,</span> <span
  m="1595940">column</span> <span m="1596420">pivoting</span> <span
  m="1597800">idea</span> <span m="1598670">in</span> <span
  m="1600070">sort</span> <span m="1600320">of</span> <span m="1600440">a</span>
  <span m="1600500">more</span> <span m="1600830">professional</span> <span
  m="1602720">Gram-Schmidt.</span> <span m="1605870">And</span> <span
  m="1609080">to</span> <span m="1609260">do</span> <span
  m="1609530">it--</span> <span m="1610340">so</span> <span m="1610580">I</span>
  <span m="1610670">have</span> <span m="1610880">to</span> <span
  m="1611000">be</span> <span m="1611120">able</span> <span
  m="1611360">to</span> <span m="1613370">compare</span> <span
  m="1613970">this</span> <span m="1615220">little</span> <span
  m="1615650">bit,</span> <span m="1616100">if</span> <span
  m="1616310">it</span> <span m="1616430">is</span> <span
  m="1616670">little,</span> <span m="1617990">with</span> <span
  m="1618350">what?</span> <span m="1618650">What</span> <span
  m="1618950">am</span> <span m="1619100">I</span> <span
  m="1619220">going</span> <span m="1619390">to</span> <span
  m="1619550">compare</span> <span m="1620120">with?</span> <span
  m="1622210">In</span> <span m="1622380">elimination,</span> <span
  m="1623130">I</span> <span m="1623280">looked</span> <span
  m="1623550">down</span> <span m="1623850">the</span> <span
  m="1623940">rest</span> <span m="1624210">of</span> <span
  m="1624270">the</span> <span m="1624360">column</span> <span
  m="1624720">for</span> <span m="1624870">a</span> <span
  m="1624930">bigger</span> <span m="1625290">number.</span></p><p><span
  m="1628980">I</span> <span m="1629220">guess</span> <span
  m="1629580">what</span> <span m="1629790">I</span> <span
  m="1629910">have</span> <span m="1630090">to</span> <span
  m="1630210">do</span> <span m="1630510">is</span> <span m="1631290">I</span>
  <span m="1631380">have</span> <span m="1631530">to</span> <span
  m="1631650">find</span> <span m="1633330">this</span> <span
  m="1633780">component,</span> <span m="1635400">not</span> <span
  m="1635730">just</span> <span m="1636210">from</span> <span
  m="1636790">a2,</span> <span m="1638910">but</span> <span
  m="1639180">from</span> <span m="1639390">all</span> <span
  m="1639570">the</span> <span m="1639720">remaining</span> <span
  m="1640260">a's.</span> <span m="1640860">And</span> <span
  m="1641010">I'll</span> <span m="1641100">pick</span> <span
  m="1641340">the</span> <span m="1641430">biggest.</span> <span
  m="1643330">So</span> <span m="1643510">there,</span> <span
  m="1643900">in</span> <span m="1644620">that</span> <span
  m="1644860">sentence,</span> <span m="1645430">I</span> <span
  m="1646270">said</span> <span m="1646630">the</span> <span
  m="1646780">main</span> <span m="1647230">idea</span> <span
  m="1648310">of</span> <span m="1648580">column</span> <span
  m="1649030">exchangers</span> <span m="1649780">is</span> <span
  m="1650980">once</span> <span m="1651370">you</span> <span
  m="1651460">get</span> <span m="1651670">q1</span> <span
  m="1652240">set,</span> <span m="1654270">which</span> <span
  m="1654660">certainly</span> <span m="1655470">q1</span> <span
  m="1655980">was</span> <span m="1656220">the</span> <span
  m="1656310">easiest</span> <span m="1656850">one</span> <span
  m="1657090">in</span> <span m="1657180">the</span> <span
  m="1657270">world,</span> <span m="1658920">but</span> <span
  m="1659100">maybe</span> <span m="1659400">even</span> <span
  m="1659700">for</span> <span m="1659880">q1</span> <span m="1661920">I</span>
  <span m="1662010">guess</span> <span m="1662460">it</span> <span
  m="1662610">could</span> <span m="1662910">even</span> <span
  m="1663150">happen.</span> <span m="1664980">That</span> <span
  m="1665160">would</span> <span m="1665280">be</span> <span
  m="1665890">like</span> <span m="1666090">starting</span> <span
  m="1666570">with</span> <span m="1666750">a</span> <span
  m="1666840">zero</span> <span m="1667410">up</span> <span
  m="1667590">in</span> <span m="1667680">the</span> <span
  m="1668190">upper</span> <span m="1668430">left</span> <span
  m="1668730">corner</span> <span m="1669180">for</span> <span
  m="1669360">elimination,</span> <span m="1670180">like</span> <span
  m="1670800">what</span> <span m="1671040">a</span> <span
  m="1671100">way</span> <span m="1671370">to</span> <span
  m="1671670">start</span> <span m="1672060">the</span> <span
  m="1672180">day.</span></p><p><span m="1674290">Here,</span> <span
  m="1676620">if</span> <span m="1676980">my</span> <span
  m="1677190">matrix</span> <span m="1677790">A</span> <span
  m="1678150">had</span> <span m="1678330">a</span> <span
  m="1678420">tiny</span> <span m="1679050">little</span> <span
  m="1679500">a1,</span> <span m="1681180">then</span> <span
  m="1681420">I</span> <span m="1681540">should</span> <span
  m="1681750">look</span> <span m="1681990">for</span> <span
  m="1682170">a</span> <span m="1682230">bigger</span> <span
  m="1682530">one</span> <span m="1684000">to</span> <span
  m="1684150">get</span> <span m="1684420">the</span> <span
  m="1684540">very</span> <span m="1684840">first</span> <span
  m="1685320">q</span> <span m="1686480">chosen.</span> <span
  m="1687780">Let's</span> <span m="1688020">suppose--</span> <span
  m="1689460">give</span> <span m="1689670">ourselves</span> <span
  m="1690190">a</span> <span m="1690930">reasonable</span> <span
  m="1691470">chance</span> <span m="1691950">here--</span> <span
  m="1692640">let's</span> <span m="1692850">suppose</span> <span
  m="1693360">a1</span> <span m="1694020">was</span> <span m="1694230">a</span>
  <span m="1694290">decent</span> <span m="1694770">size,</span> <span
  m="1697710">so</span> <span m="1699090">as</span> <span
  m="1699300">I've</span> <span m="1699450">drawn.</span> <span
  m="1704450">The</span> <span m="1704900">next</span> <span
  m="1705170">step</span> <span m="1705440">might</span> <span
  m="1705650">not</span> <span m="1705920">be,</span> <span
  m="1706190">if</span> <span m="1706370">I</span> <span m="1706490">use</span>
  <span m="1706850">a2,</span> <span m="1707810">as</span> <span
  m="1707990">I</span> <span m="1708080">say,</span> <span m="1708380">it</span>
  <span m="1708530">could</span> <span m="1708770">be</span> <span
  m="1709160">same</span> <span m="1709520">direction</span> <span
  m="1710090">as</span> <span m="1710240">a1</span> <span
  m="1710720">virtually,</span> <span m="1711810">and</span> <span
  m="1712400">then</span> <span m="1712880">I'm</span> <span
  m="1713030">just</span> <span m="1713270">working</span> <span
  m="1713630">with</span> <span m="1713720">that</span> <span
  m="1713900">little</span> <span m="1714170">piece.</span> <span
  m="1715280">So</span> <span m="1716210">what</span> <span
  m="1716420">do</span> <span m="1716540">I</span> <span m="1716600">have</span>
  <span m="1716810">to</span> <span m="1716930">do</span> <span
  m="1717170">differently?</span> <span m="1719460">I</span> <span
  m="1719540">have</span> <span m="1719810">to</span> <span
  m="1719930">be</span> <span m="1720110">able</span> <span
  m="1720380">to</span> <span m="1720500">compare</span> <span
  m="1721850">this</span> <span m="1722180">little</span> <span
  m="1722450">piece</span> <span m="1723740">with</span> <span
  m="1724040">all</span> <span m="1724220">the</span> <span
  m="1724370">other</span> <span m="1724910">potential</span> <span
  m="1726830">possibilities.</span></p><p><span m="1729020">So</span> <span
  m="1730160">let</span> <span m="1730280">me</span> <span
  m="1730370">just</span> <span m="1730610">write</span> <span
  m="1730910">down</span> <span m="1731180">what</span> <span
  m="1731630">you</span> <span m="1731720">have</span> <span
  m="1731930">to</span> <span m="1732050">do</span> <span m="1733750">in</span>
  <span m="1733880">a</span> <span m="1733940">different</span> <span
  m="1734330">order.</span> <span m="1735180">So</span> <span
  m="1735290">this</span> <span m="1735530">is</span> <span
  m="1735710">now</span> <span m="1736940">with</span> <span
  m="1737210">column</span> <span m="1737600">pivoting,</span> <span
  m="1738440">column</span> <span m="1738840">exchange,</span> <span
  m="1739730">column</span> <span m="1740510">pivoting</span> <span
  m="1741170">allowed,</span> <span m="1744440">or</span> <span
  m="1744590">it's</span> <span m="1744680">possible.</span> <span
  m="1746880">So</span> <span m="1747290">to</span> <span
  m="1747380">make</span> <span m="1747620">it</span> <span
  m="1747710">possible,</span> <span m="1752390">I</span> <span
  m="1752470">have</span> <span m="1752710">to</span> <span
  m="1752830">find</span> <span m="1753250">not</span> <span
  m="1753580">only</span> <span m="1755140">A2,</span> <span
  m="1757500">the</span> <span m="1757845">piece</span> <span
  m="1758610">of</span> <span m="1760380">little</span> <span
  m="1760860">a2,</span> <span m="1761490">I</span> <span
  m="1761850">have</span> <span m="1761970">to</span> <span
  m="1762090">find</span> <span m="1763320">a2,</span> <span
  m="1764610">the</span> <span m="1765020">piece.</span> <span
  m="1765480">I'm</span> <span m="1765630">just</span> <span
  m="1765810">going</span> <span m="1765960">to</span> <span
  m="1766020">copy</span> <span m="1766410">that.</span> <span
  m="1767160">I</span> <span m="1767220">have</span> <span m="1767340">to</span>
  <span m="1767490">take</span> <span m="1767760">my</span> <span
  m="1767970">second</span> <span m="1768390">column,</span> <span
  m="1769350">subtract</span> <span m="1770040">off</span> <span
  m="1771000">the</span> <span m="1771970">q1</span> <span
  m="1772600">part.</span> <span m="1774840">And</span> <span
  m="1775470">that</span> <span m="1775740">could</span> <span
  m="1775950">be</span> <span m="1776100">small.</span></p><p><span
  m="1777330">So</span> <span m="1777510">I</span> <span m="1777600">have</span>
  <span m="1777780">to</span> <span m="1777900">compare</span> <span
  m="1778440">it</span> <span m="1778560">with--</span> <span
  m="1779790">oh,</span> <span m="1780120">I</span> <span
  m="1780180">haven't</span> <span m="1781950">written</span> <span
  m="1782250">this</span> <span m="1782430">page</span> <span
  m="1782820">up.</span> <span m="1783000">So</span> <span m="1783150">I</span>
  <span m="1783180">haven't</span> <span m="1783420">got</span> <span
  m="1783600">a</span> <span m="1783660">notation</span> <span
  m="1784500">in</span> <span m="1784620">mind</span> <span
  m="1784980">yet.</span> <span m="1787080">I</span> <span
  m="1787170">won't</span> <span m="1787350">give</span> <span
  m="1787590">it</span> <span m="1787710">a</span> <span
  m="1787770">name.</span> <span m="1788520">I</span> <span
  m="1788610">have</span> <span m="1788760">to</span> <span
  m="1788910">also</span> <span m="1789510">compute</span> <span
  m="1793700">at</span> <span m="1793880">this</span> <span
  m="1794120">step</span> <span m="1794660">before</span> <span
  m="1795050">deciding</span> <span m="1796730">q2--</span> <span
  m="1798050">now</span> <span m="1798290">I'm</span> <span
  m="1798440">describing</span> <span m="1799910">how</span> <span
  m="1801980">to</span> <span m="1802340">decide</span> <span
  m="1804400">q2,</span> <span m="1806320">the</span> <span
  m="1806420">second</span> <span m="1806870">vector.</span> <span
  m="1809930">And</span> <span m="1810200">I'm</span> <span
  m="1810350">saying</span> <span m="1810950">that</span> <span
  m="1811230">the</span> <span m="1812030">way</span> <span
  m="1812300">to</span> <span m="1812420">decide</span> <span
  m="1812900">q2</span> <span m="1813530">is</span> <span m="1813680">not</span>
  <span m="1813950">only</span> <span m="1814250">to</span> <span
  m="1815840">take</span> <span m="1816260">a</span> <span
  m="1816350">piece</span> <span m="1816740">of</span> <span
  m="1817040">a2</span> <span m="1817700">but</span> <span
  m="1817880">also</span> <span m="1818360">the</span> <span
  m="1818480">piece</span> <span m="1818840">of</span> <span
  m="1818960">a3.</span> <span m="1820370">Look</span> <span
  m="1820580">at</span> <span m="1820700">this</span> <span
  m="1821570">piece.</span> <span m="1824990">And</span> <span
  m="1825120">look</span> <span m="1825330">at</span> <span
  m="1825450">all</span> <span m="1825630">the</span> <span
  m="1825780">other</span> <span m="1825990">pieces.</span></p><p><span
  m="1837910">And</span> <span m="1838100">now,</span> <span
  m="1838310">what</span> <span m="1838520">will</span> <span
  m="1838670">be</span> <span m="1838820">my</span> <span
  m="1839090">policy?</span> <span m="1843290">Standard</span> <span
  m="1844700">Gram-Schmidt</span> <span m="1845930">accepted</span> <span
  m="1846470">this</span> <span m="1846740">one,</span> <span
  m="1846980">and</span> <span m="1847100">didn't</span> <span
  m="1847340">look</span> <span m="1847610">at</span> <span
  m="1847700">these.</span> <span m="1849060">But,</span> <span
  m="1849240">now,</span> <span m="1849840">I'm</span> <span
  m="1850050">going</span> <span m="1850200">to</span> <span
  m="1850320">look</span> <span m="1850590">at</span> <span
  m="1850680">them</span> <span m="1850920">all.</span> <span
  m="1851850">And</span> <span m="1852000">I'm</span> <span
  m="1852120">going</span> <span m="1852270">to</span> <span
  m="1852360">take</span> <span m="1852630">the</span> <span
  m="1852750">largest.</span> <span m="1854500">I'm</span> <span
  m="1854550">going</span> <span m="1854640">to</span> <span
  m="1854970">take</span> <span m="1855240">the</span> <span
  m="1855360">largest.</span> <span m="1856590">And</span> <span
  m="1856740">that</span> <span m="1857070">will</span> <span
  m="1858240">be</span> <span m="1858525">the</span> <span m="1859050">A2</span>
  <span m="1859620">that</span> <span m="1859770">I</span> <span
  m="1859860">want.</span></p><p><span m="1860130">So</span> <span
  m="1860310">it</span> <span m="1860400">might</span> <span
  m="1860580">not</span> <span m="1860790">be</span> <span
  m="1860940">this</span> <span m="1861180">one.</span> <span
  m="1863360">If</span> <span m="1863570">this</span> <span
  m="1863810">guy</span> <span m="1864110">is</span> <span
  m="1864300">largest,</span> <span m="1865430">then</span> <span
  m="1865730">I'm</span> <span m="1865970">taking</span> <span
  m="1866420">column</span> <span m="1866840">3</span> <span
  m="1867230">first.</span> <span m="1868310">And</span> <span
  m="1868430">that</span> <span m="1868640">will</span> <span
  m="1868790">be</span> <span m="1869000">my</span> <span m="1869270">A2.</span>
  <span m="1871220">And</span> <span m="1871400">then</span> <span
  m="1871850">I'll</span> <span m="1872000">say</span> <span
  m="1872210">fine.</span> <span m="1872720">And</span> <span
  m="1872810">then</span> <span m="1873050">q2</span> <span
  m="1874190">will</span> <span m="1874400">be</span> <span
  m="1875360">that</span> <span m="1875720">A2</span> <span
  m="1876290">over</span> <span m="1876620">its</span> <span
  m="1876810">norm.</span> <span m="1879860">You</span> <span
  m="1880190">see</span> <span m="1880370">the</span> <span
  m="1880460">difference?</span> <span m="1881680">It's</span> <span
  m="1882230">not</span> <span m="1882470">exciting.</span></p><p><span
  m="1883940">And</span> <span m="1884090">you</span> <span
  m="1884150">might</span> <span m="1884420">think,</span> <span
  m="1884690">wait</span> <span m="1884960">a</span> <span
  m="1885020">minute,</span> <span m="1885290">this</span> <span
  m="1885500">is</span> <span m="1885620">a</span> <span m="1885710">heck</span>
  <span m="1885950">of</span> <span m="1886040">a</span> <span
  m="1886070">lot</span> <span m="1886250">more</span> <span
  m="1886490">work.</span> <span m="1887810">But</span> <span
  m="1889300">it</span> <span m="1889450">isn't.</span> <span
  m="1890850">It</span> <span m="1890970">isn't</span> <span
  m="1891240">actually</span> <span m="1891660">more</span> <span
  m="1891930">work,</span> <span m="1892350">because</span> <span
  m="1892860">these</span> <span m="1893430">are</span> <span
  m="1893700">all</span> <span m="1894000">the</span> <span
  m="1894150">things--</span> <span m="1894870">these</span> <span
  m="1895260">ones</span> <span m="1895680">that</span> <span
  m="1895770">look</span> <span m="1895980">like</span> <span
  m="1896280">we're</span> <span m="1896970">paying</span> <span
  m="1897270">a</span> <span m="1897330">price,</span> <span
  m="1897930">we're</span> <span m="1898110">computing</span> <span
  m="1898680">all</span> <span m="1898830">these</span> <span
  m="1899520">alternatives--</span> <span m="1901260">but</span> <span
  m="1901680">we</span> <span m="1901860">had</span> <span m="1902010">to</span>
  <span m="1902130">do</span> <span m="1902310">that</span> <span
  m="1902520">eventually</span> <span m="1903060">anyway.</span> <span
  m="1904530">Do</span> <span m="1904590">you</span> <span
  m="1904680">see</span> <span m="1905010">that?</span></p><p><span
  m="1905670">Let</span> <span m="1905790">me</span> <span
  m="1905920">just</span> <span m="1906000">say</span> <span
  m="1906240">it</span> <span m="1906360">again.</span> <span
  m="1909610">The</span> <span m="1909810">standard</span> <span
  m="1910410">way</span> <span m="1912710">took</span> <span
  m="1913610">all</span> <span m="1914090">the</span> <span
  m="1915420">components,</span> <span m="1916560">like</span> <span
  m="1917010">for</span> <span m="1917220">here.</span> <span
  m="1919310">The</span> <span m="1919380">standard</span> <span
  m="1919950">way</span> <span m="1921090">waited</span> <span
  m="1921600">until</span> <span m="1921960">you</span> <span
  m="1922110">got</span> <span m="1922350">to</span> <span
  m="1922530">column</span> <span m="1922920">3</span> <span
  m="1923760">and</span> <span m="1923910">then</span> <span
  m="1924090">subtracted</span> <span m="1924810">off</span> <span
  m="1925080">both</span> <span m="1926010">pieces,</span> <span
  m="1927180">waited</span> <span m="1927630">until</span> <span
  m="1927960">you</span> <span m="1928080">got</span> <span
  m="1928320">to</span> <span m="1928440">column</span> <span
  m="1928770">4,</span> <span m="1929400">subtracted</span> <span
  m="1930000">off</span> <span m="1930270">three</span> <span
  m="1930600">pieces.</span> <span m="1931590">This</span> <span
  m="1931920">way,</span> <span m="1933030">you're</span> <span
  m="1933150">subtracting</span> <span m="1933840">off</span> <span
  m="1934060">the</span> <span m="1934170">first</span> <span
  m="1934500">piece</span> <span m="1934880">as</span> <span
  m="1934980">soon</span> <span m="1935280">as</span> <span
  m="1935400">you</span> <span m="1935490">know</span> <span
  m="1935670">what</span> <span m="1935850">it</span> <span
  m="1936000">should</span> <span m="1936210">be.</span> <span
  m="1937140">As</span> <span m="1937230">soon</span> <span
  m="1937530">as</span> <span m="1937650">you</span> <span
  m="1937770">know</span> <span m="1938940">q1,</span> <span
  m="1940920">you</span> <span m="1941070">remove</span> <span
  m="1941550">it</span> <span m="1941700">from</span> <span
  m="1941970">all</span> <span m="1942180">the</span> <span
  m="1942600">remaining</span> <span m="1943170">vectors.</span></p><p><span
  m="1944220">And</span> <span m="1944370">you</span> <span
  m="1944490">look</span> <span m="1944670">to</span> <span
  m="1944790">see</span> <span m="1945270">what's</span> <span
  m="1945540">the</span> <span m="1945630">biggest.</span> <span
  m="1946050">You</span> <span m="1946710">pick</span> <span
  m="1947110">the</span> <span m="1947250">biggest</span> <span
  m="1947670">one.</span> <span m="1947950">I</span> <span
  m="1948120">said</span> <span m="1948390">maybe</span> <span
  m="1948720">it's</span> <span m="1948900">this</span> <span
  m="1949100">guy.</span> <span m="1950220">So</span> <span
  m="1950460">you</span> <span m="1950610">move</span> <span
  m="1950970">that</span> <span m="1951240">one.</span> <span
  m="1951590">Or</span> <span m="1951780">some</span> <span
  m="1952050">permutation</span> <span m="1952890">matrix</span> <span
  m="1953460">is</span> <span m="1953610">going</span> <span
  m="1953730">to</span> <span m="1953880">move</span> <span
  m="1954300">it</span> <span m="1954420">to</span> <span m="1954600">the</span>
  <span m="1955320">second</span> <span m="1955740">column.</span> <span
  m="1956220">See,</span> <span m="1956430">it</span> <span
  m="1956760">started</span> <span m="1957330">in</span> <span
  m="1957450">the</span> <span m="1957540">third</span> <span
  m="1957930">column,</span> <span m="1958650">but</span> <span
  m="1958830">I'm</span> <span m="1958980">going</span> <span
  m="1959100">to</span> <span m="1959190">move</span> <span
  m="1959490">it</span> <span m="1959580">to</span> <span m="1959700">the</span>
  <span m="1959820">second,</span> <span m="1960240">because</span> <span
  m="1960600">it's</span> <span m="1960810">the</span> <span
  m="1960930">biggest.</span> <span m="1962220">Then</span> <span
  m="1964110">I</span> <span m="1964230">do</span> <span m="1964470">the</span>
  <span m="1964710">right</span> <span m="1965130">thing.</span> <span
  m="1965520">I</span> <span m="1965610">find</span> <span
  m="1965970">q2.</span> <span m="1967560">And</span> <span
  m="1967680">now</span> <span m="1968010">I</span> <span m="1968130">go</span>
  <span m="1968430">on</span> <span m="1976560">toward</span> <span
  m="1977310">q3.</span></p><p><span m="1979230">And</span> <span
  m="1979380">how</span> <span m="1979560">will</span> <span
  m="1979740">I</span> <span m="1979830">find</span> <span
  m="1980190">q3?</span> <span m="1984170">I'd</span> <span
  m="1984320">want</span> <span m="1984530">to</span> <span
  m="1984590">pick</span> <span m="1984890">the</span> <span
  m="1985010">biggest</span> <span m="1985400">column</span> <span
  m="1985790">to</span> <span m="1985910">work</span> <span
  m="1986210">with.</span> <span m="1987200">So</span> <span
  m="1987440">I</span> <span m="1987530">subtract</span> <span
  m="1988160">off</span> <span m="1988370">the</span> <span
  m="1988490">q2</span> <span m="1989120">components.</span> <span
  m="1991230">This</span> <span m="1991370">is</span> <span
  m="1991490">like</span> <span m="1991730">easy</span> <span
  m="1992120">to</span> <span m="1992240">say,</span> <span
  m="1992660">but</span> <span m="1992840">I</span> <span m="1993200">had</span>
  <span m="1993410">never</span> <span m="1993770">like</span> <span
  m="1994010">figured</span> <span m="1994400">it</span> <span
  m="1994550">out</span> <span m="1994730">before.</span> <span
  m="1995940">So</span> <span m="1995990">let</span> <span m="1996110">me</span>
  <span m="1996230">just</span> <span m="1996680">say</span> <span
  m="1997010">it</span> <span m="1997100">again.</span> <span
  m="1997440">And</span> <span m="1997560">then</span> <span
  m="1997700">I'll</span> <span m="1998540">leave</span> <span
  m="1998900">that</span> <span m="1999140">with</span> <span
  m="1999380">you.</span></p><p><span m="2001260">How</span> <span
  m="2001470">do</span> <span m="2001620">I</span> <span m="2001740">get</span>
  <span m="2001980">q3?</span> <span m="2005370">I've</span> <span
  m="2005850">fixed</span> <span m="2006240">two</span> <span
  m="2006510">columns.</span> <span m="2008220">They</span> <span
  m="2008400">happened</span> <span m="2008790">to</span> <span
  m="2008910">be,</span> <span m="2011640">maybe</span> <span
  m="2012340">not</span> <span m="2012990">necessarily</span> <span
  m="2013590">the</span> <span m="2013690">first</span> <span
  m="2014010">two,</span> <span m="2014250">but</span> <span
  m="2014400">two</span> <span m="2014610">columns,</span> <span
  m="2015400">two</span> <span m="2015540">q's</span> <span
  m="2016050">are</span> <span m="2016170">set,</span> <span
  m="2016530">and</span> <span m="2016650">I'm</span> <span
  m="2016800">looking</span> <span m="2017070">for</span> <span
  m="2017190">the</span> <span m="2017310">next</span> <span
  m="2017610">one.</span></p><p><span m="2019170">I</span> <span
  m="2019320">go</span> <span m="2019590">on</span> <span m="2019920">and</span>
  <span m="2020100">I</span> <span m="2020190">look</span> <span
  m="2020430">at</span> <span m="2020550">all</span> <span
  m="2020800">the</span> <span m="2020910">remaining</span> <span
  m="2021510">columns,</span> <span m="2022500">all</span> <span
  m="2022740">of</span> <span m="2022890">which</span> <span
  m="2023190">have</span> <span m="2023310">had</span> <span
  m="2023610">subtracted</span> <span m="2024420">off</span> <span
  m="2025230">their</span> <span m="2026340">q1</span> <span
  m="2026820">and</span> <span m="2026970">q2</span> <span
  m="2027480">parts.</span> <span m="2029230">So</span> <span
  m="2029470">I've</span> <span m="2029740">orthogonalized</span> <span
  m="2030820">with</span> <span m="2030970">respect</span> <span
  m="2031330">to</span> <span m="2031420">q1</span> <span m="2031870">and</span>
  <span m="2031990">q2.</span> <span m="2032950">I</span> <span
  m="2033070">look</span> <span m="2033370">at</span> <span
  m="2033790">all</span> <span m="2034090">the</span> <span
  m="2034210">remaining</span> <span m="2034750">things</span> <span
  m="2035080">that</span> <span m="2035200">I</span> <span
  m="2035290">have</span> <span m="2035470">to</span> <span
  m="2035560">work</span> <span m="2035890">with</span> <span
  m="2036760">and</span> <span m="2037540">pick</span> <span
  m="2037780">the</span> <span m="2037900">biggest.</span> <span
  m="2040140">Just</span> <span m="2040470">like</span> <span
  m="2040680">picking</span> <span m="2041070">the</span> <span
  m="2041190">biggest</span> <span m="2041700">number</span> <span
  m="2042090">to</span> <span m="2042210">go</span> <span
  m="2042450">into</span> <span m="2042690">the</span> <span
  m="2042810">pivot.</span> <span m="2043450">OK,</span> <span
  m="2045690">I</span> <span m="2045780">don't</span> <span
  m="2045990">think</span> <span m="2046170">I</span> <span
  m="2046290">can</span> <span m="2047340">say</span> <span
  m="2047670">it</span> <span m="2047820">anymore</span> <span
  m="2048330">without</span> <span m="2048719">just</span> <span
  m="2049020">repeating</span> <span m="2049560">myself.</span> <span
  m="2052469">And</span> <span m="2052739">I</span> <span
  m="2053370">bring</span> <span m="2053639">it</span> <span
  m="2053790">here</span> <span m="2054170">to</span> <span
  m="2054420">class,</span> <span m="2054929">because</span> <span
  m="2055920">I</span> <span m="2056100">had</span> <span m="2056340">not</span>
  <span m="2056650">sort</span> <span m="2056960">of</span> <span
  m="2057330">appreciated</span> <span m="2058050">the</span> <span
  m="2058170">point</span> <span m="2058620">that</span> <span
  m="2060090">no</span> <span m="2060540">extra</span> <span
  m="2060900">work</span> <span m="2061230">was</span> <span
  m="2061440">involved.</span> <span m="2062489">You</span> <span
  m="2062670">just</span> <span m="2062969">did</span> <span
  m="2063210">these</span> <span m="2064620">subtractions</span> <span
  m="2066360">for</span> <span m="2066570">all</span> <span
  m="2066929">the</span> <span m="2068610">remaining</span> <span
  m="2069179">columns</span> <span m="2069810">of</span> <span
  m="2070020">A</span> <span m="2072179">before</span> <span
  m="2072540">you</span> <span m="2073110">started</span> <span
  m="2073560">on</span> <span m="2073710">the</span> <span
  m="2073860">next</span> <span m="2074520">job.</span></p><p><span
  m="2075060">Is</span> <span m="2075179">that</span> <span
  m="2075360">OK?</span> <span m="2076860">Eventually</span> <span
  m="2077489">the</span> <span m="2077639">notes</span> <span
  m="2078060">will</span> <span m="2078420">describe</span> <span
  m="2079020">that.</span> <span m="2080480">Maybe</span> <span
  m="2080750">they</span> <span m="2080929">even</span> <span
  m="2081260">do.</span> <span m="2081770">Yeah,</span> <span
  m="2081980">I</span> <span m="2082040">think</span> <span
  m="2082280">they</span> <span m="2082460">even</span> <span
  m="2082790">do.</span> <span m="2083190">I</span> <span
  m="2083540">wrote</span> <span m="2083840">it</span> <span
  m="2083929">but</span> <span m="2084110">I</span> <span
  m="2084230">didn't</span> <span m="2084500">understand</span> <span
  m="2085130">it.</span> <span m="2085920">Now,</span> <span
  m="2086900">little</span> <span m="2087199">improvement.</span> <span
  m="2089130">So</span> <span m="2090080">yes?</span></p><p><span
  m="2090961">AUDIENCE:</span> <span m="2091191">So</span> <span
  m="2091422">are</span> <span m="2091652">we</span> <span
  m="2091883">permuting</span> <span m="2092344">every</span> <span
  m="2092497">time</span> <span m="2092650">to</span> <span
  m="2092805">get</span> <span m="2092958">the</span> <span
  m="2093111">biggest</span> <span m="2093266">pivot?</span></p><p><span
  m="2093730">GILBERT STRANG:</span> <span m="2093865">Yeah.</span> <span
  m="2094409">Yeah.</span> <span m="2094989">Only</span> <span
  m="2095260">we</span> <span m="2095440">don't</span> <span
  m="2095650">call</span> <span m="2095860">them</span> <span
  m="2096010">pivots.</span> <span m="2096489">Or</span> <span
  m="2096969">maybe</span> <span m="2097210">we</span> <span
  m="2097300">should.</span> <span m="2097600">I</span> <span
  m="2097690">don't</span> <span m="2097840">know</span> <span
  m="2097990">what</span> <span m="2098170">word</span> <span
  m="2098530">is</span> <span m="2098710">used</span> <span
  m="2099430">to</span> <span m="2099580">get</span> <span
  m="2099790">the</span> <span m="2099910">biggest</span> <span
  m="2100600">column</span> <span m="2101170">remaining</span> <span
  m="2102190">or</span> <span m="2102280">something.</span> <span
  m="2102950">Yeah,</span> <span m="2103570">yeah,</span> <span
  m="2104710">each</span> <span m="2105010">time.</span> <span
  m="2108430">You</span> <span m="2108580">know,</span> <span
  m="2108730">if</span> <span m="2108870">the</span> <span
  m="2108960">columns</span> <span m="2109420">were</span> <span
  m="2109570">in</span> <span m="2109690">a</span> <span
  m="2109750">stupid</span> <span m="2110230">order,</span> <span
  m="2111070">this</span> <span m="2111400">puts</span> <span
  m="2111760">them</span> <span m="2111880">in</span> <span
  m="2112000">the</span> <span m="2112120">right</span> <span
  m="2112390">order.</span></p><p><span m="2113320">OK,</span> <span
  m="2113680">finally,</span> <span m="2115950">come</span> <span
  m="2116190">these</span> <span m="2116490">weird</span> <span
  m="2116790">names,</span> <span m="2117330">Krylov,</span> <span
  m="2118990">Russian.</span> <span m="2119345">Arnoldi,</span> <span
  m="2120180">actually,</span> <span m="2120510">I</span> <span
  m="2120600">don't</span> <span m="2120780">know</span> <span
  m="2121820">what</span> <span m="2122010">he</span> <span
  m="2122120">is.</span> <span m="2122380">And</span> <span m="2122400">I</span>
  <span m="2122490">shouldn't</span> <span m="2122760">admit</span> <span
  m="2123090">that</span> <span m="2123330">on</span> <span
  m="2123510">tape.</span> <span m="2127560">So</span> <span
  m="2127770">what's</span> <span m="2128670">the</span> <span
  m="2128820">idea</span> <span m="2129210">there?</span> <span
  m="2131920">So</span> <span m="2132130">again,</span> <span
  m="2132490">we're</span> <span m="2132670">solving</span> <span
  m="2133180">Ax</span> <span m="2133660">equal</span> <span
  m="2133960">b.</span> <span m="2134850">So</span> <span
  m="2135100">this</span> <span m="2135340">is</span> <span
  m="2135490">going</span> <span m="2135590">to</span> <span
  m="2135700">be</span> <span m="2135800">Krylov.</span> <span
  m="2137680">What</span> <span m="2138370">was</span> <span
  m="2138610">his</span> <span m="2138820">idea?</span> <span
  m="2140400">Well,</span> <span m="2140590">I</span> <span
  m="2140680">want</span> <span m="2140860">to</span> <span
  m="2140950">solve</span> <span m="2141310">Ax</span> <span
  m="2141730">equal</span> <span m="2142030">b.</span></p><p><span
  m="2144920">A</span> <span m="2145310">is</span> <span m="2145340">a</span>
  <span m="2145370">big</span> <span m="2145640">matrix,</span> <span
  m="2147110">pretty</span> <span m="2147440">big.</span> <span
  m="2149980">Of</span> <span m="2150130">course,</span> <span
  m="2150460">I</span> <span m="2150580">don't</span> <span
  m="2150790">plan</span> <span m="2151060">to</span> <span
  m="2151240">invert</span> <span m="2151630">it.</span> <span
  m="2151810">That</span> <span m="2151990">would</span> <span
  m="2152170">be</span> <span m="2152730">insane.</span> <span
  m="2155660">What</span> <span m="2155930">I</span> <span
  m="2156050">can</span> <span m="2156290">do</span> <span
  m="2156560">with</span> <span m="2156800">a</span> <span
  m="2156830">the</span> <span m="2157070">matrix</span> <span
  m="2157370">A,</span> <span m="2157670">especially</span> <span
  m="2158510">if</span> <span m="2158660">it's</span> <span
  m="2158840">sparse--</span> <span m="2160640">so</span> <span
  m="2161510">a</span> <span m="2162410">large</span> <span
  m="2162990">sparse</span> <span m="2163730">A</span> <span
  m="2164240">would</span> <span m="2164450">be</span> <span
  m="2164600">a</span> <span m="2164690">good</span> <span
  m="2166460">candidate</span> <span m="2167120">for</span> <span
  m="2167300">Krylov.</span></p><p><span m="2172770">So</span> <span
  m="2172970">what</span> <span m="2173300">is</span> <span
  m="2173540">it</span> <span m="2173680">that</span> <span
  m="2173900">you</span> <span m="2174050">could</span> <span
  m="2174260">do</span> <span m="2174890">cheap</span> <span
  m="2175370">and</span> <span m="2175520">fast</span> <span
  m="2176740">with</span> <span m="2176990">a</span> <span
  m="2177140">large,</span> <span m="2177920">I</span> <span
  m="2178010">mean</span> <span m="2178550">really</span> <span
  m="2178880">large,</span> <span m="2179930">but</span> <span
  m="2180230">really</span> <span m="2180620">sparse</span> <span
  m="2181160">matrix</span> <span m="2181850">A?</span></p><p><span
  m="2183144">AUDIENCE:</span> <span m="2183370">Matrix</span> <span
  m="2183596">times</span> <span m="2183822">a</span> <span
  m="2184048">vector.</span></p><p><span m="2184500">GILBERT STRANG:</span>
  <span m="2184560">You</span> <span m="2184620">can</span> <span
  m="2184860">do</span> <span m="2185070">a</span> <span
  m="2185160">matrix</span> <span m="2185730">times</span> <span
  m="2186000">a</span> <span m="2186060">vector.</span> <span
  m="2187600">And</span> <span m="2187780">here's</span> <span
  m="2188050">our</span> <span m="2188170">matrix.</span> <span
  m="2188710">And</span> <span m="2188830">there</span> <span
  m="2188990">is</span> <span m="2189130">our</span> <span
  m="2189250">vector.</span> <span m="2191740">So</span> <span
  m="2191980">we</span> <span m="2192100">could</span> <span
  m="2192250">start</span> <span m="2192550">with</span> <span
  m="2192820">a</span> <span m="2192910">vector</span> <span
  m="2193300">b.</span> <span m="2195640">We</span> <span m="2195790">can</span>
  <span m="2195910">multiply</span> <span m="2196450">A</span> <span
  m="2196720">times</span> <span m="2197230">b.</span> <span
  m="2198850">We</span> <span m="2199000">can</span> <span
  m="2199180">multiply</span> <span m="2199720">A</span> <span
  m="2200150">times</span> <span m="2200590">A</span> <span
  m="2200930">times</span> <span m="2201370">b.</span> <span
  m="2202960">And,</span> <span m="2203050">of</span> <span
  m="2203140">course,</span> <span m="2203470">I</span> <span
  m="2203560">write</span> <span m="2203800">it</span> <span
  m="2203920">that</span> <span m="2204130">way.</span> <span
  m="2204430">I</span> <span m="2204580">never--</span> <span
  m="2206320">I</span> <span m="2206380">mean,</span> <span
  m="2206680">like</span> <span m="2207370">if</span> <span
  m="2207490">you</span> <span m="2207610">multiply</span> <span
  m="2208210">A</span> <span m="2208750">times</span> <span m="2209110">A</span>
  <span m="2209350">first,</span> <span m="2209860">then</span> <span
  m="2210320">like</span> <span m="2211600">you</span> <span
  m="2212200">turn</span> <span m="2212500">in</span> <span
  m="2212680">your</span> <span m="2214030">Matlab</span> <span
  m="2217100">account,</span> <span m="2219590">because</span> <span
  m="2220140">you</span> <span m="2220260">just</span> <span
  m="2220530">have</span> <span m="2220750">to</span> <span
  m="2220920">do</span> <span m="2221130">it</span> <span
  m="2221220">that</span> <span m="2221460">way.</span></p><p><span
  m="2222510">And</span> <span m="2222630">then</span> <span
  m="2222810">you</span> <span m="2222930">keep</span> <span
  m="2223170">going,</span> <span m="2223860">which</span> <span
  m="2224190">of</span> <span m="2224280">course</span> <span
  m="2224570">is</span> <span m="2224970">A</span> <span
  m="2225120">squared</span> <span m="2225570">b,</span> <span
  m="2225840">but</span> <span m="2226020">you</span> <span
  m="2226110">didn't</span> <span m="2226380">form</span> <span
  m="2226710">A</span> <span m="2226860">squared.</span> <span
  m="2227730">And</span> <span m="2227880">then</span> <span
  m="2228120">on</span> <span m="2228450">up</span> <span
  m="2228720">to--</span> <span m="2229380">in</span> <span
  m="2229530">the</span> <span m="2229680">end,</span> <span
  m="2229920">you</span> <span m="2230040">get</span> <span
  m="2230250">to</span> <span m="2230400">some</span> <span m="2230760">A</span>
  <span m="2231030">to</span> <span m="2231960">say</span> <span
  m="2232320">k,</span> <span m="2233400">k</span> <span
  m="2234180">minus</span> <span m="2234600">1</span> <span
  m="2235080">b.</span> <span m="2236010">But,</span> <span
  m="2236220">of</span> <span m="2236340">course,</span> <span
  m="2236850">that's</span> <span m="2237300">computed</span> <span
  m="2238740">as</span> <span m="2239370">A</span> <span
  m="2239670">times</span> <span m="2240210">the</span> <span
  m="2240570">previous</span> <span m="2241140">one,</span> <span
  m="2241410">which</span> <span m="2241620">was</span> <span
  m="2241770">A</span> <span m="2241980">times</span> <span
  m="2242310">the</span> <span m="2242370">previous</span> <span
  m="2242850">one.</span></p><p><span m="2243360">So</span> <span
  m="2243600">there</span> <span m="2243960">is</span> <span
  m="2244200">a</span> <span m="2245850">bunch</span> <span
  m="2246150">of</span> <span m="2246210">vectors,</span> <span
  m="2248030">which</span> <span m="2249050">are</span> <span
  m="2249110">likely</span> <span m="2249470">to</span> <span
  m="2249560">be</span> <span m="2249680">independent.</span> <span
  m="2253050">So</span> <span m="2253260">they</span> <span
  m="2253440">span</span> <span m="2253890">a</span> <span
  m="2253950">space.</span> <span m="2255330">And</span> <span
  m="2255450">it's</span> <span m="2255660">called</span> <span
  m="2256020">the</span> <span m="2256590">Krylov</span> <span
  m="2256980">space.</span> <span m="2258520">So</span> <span
  m="2258920">these</span> <span m="2259170">span.</span></p><p><span
  m="2259730">They're</span> <span m="2259920">combinations.</span> <span
  m="2262230">Combinations</span> <span m="2263250">give--</span> <span
  m="2267950">oh,</span> <span m="2268170">I</span> <span
  m="2268260">don't</span> <span m="2268440">like</span> <span
  m="2268650">that</span> <span m="2268830">letter</span> <span
  m="2269100">k,</span> <span m="2269400">because</span> <span
  m="2269650">that's</span> <span m="2269910">also</span> <span
  m="2270210">Krylov,</span> <span m="2270930">so</span> <span
  m="2271230">what</span> <span m="2271385">shall</span> <span
  m="2271540">I</span> <span m="2271740">say?</span> <span m="2272220">j.</span>
  <span m="2274300">So</span> <span m="2274450">I</span> <span
  m="2274540">have</span> <span m="2274690">j</span> <span
  m="2275050">vectors.</span> <span m="2276300">The</span> <span
  m="2276400">original</span> <span m="2276820">b,</span> <span
  m="2277090">Ab,</span> <span m="2278260">A</span> <span
  m="2278440">squared</span> <span m="2278860">b,</span> <span
  m="2279580">up</span> <span m="2279760">to</span> <span
  m="2279910">that.</span> <span m="2280780">So</span> <span
  m="2281050">combinations</span> <span m="2283150">give</span> <span
  m="2283690">the</span> <span m="2284770">Krylov</span> <span
  m="2289540">space,</span> <span m="2291390">say,</span> <span
  m="2292710">we'll</span> <span m="2292890">name</span> <span
  m="2293160">it</span> <span m="2293280">after</span> <span
  m="2293580">Krylov</span> <span m="2294240">and</span> <span
  m="2294960">we</span> <span m="2295170">need</span> <span m="2295440">a</span>
  <span m="2296520">subscript</span> <span m="2297060">j</span> <span
  m="2297450">to</span> <span m="2297600">show</span> <span
  m="2299330">how</span> <span m="2299480">big</span> <span
  m="2299720">it</span> <span m="2299870">is,</span> <span
  m="2300180">its</span> <span m="2300380">dimension.</span> <span
  m="2302750">So</span> <span m="2304580">that</span> <span
  m="2304880">will</span> <span m="2305030">be</span> <span
  m="2305210">the</span> <span m="2305360">idea.</span></p><p><span
  m="2307640">Well,</span> <span m="2308040">let</span> <span
  m="2308180">me</span> <span m="2308330">complete</span> <span
  m="2308780">the</span> <span m="2308960">idea.</span> <span
  m="2310610">The</span> <span m="2310760">idea</span> <span
  m="2311180">will</span> <span m="2311360">be--</span> <span
  m="2312760">there</span> <span m="2313000">are</span> <span
  m="2313200">combinations.</span> <span m="2313980">So</span> <span
  m="2314140">that's</span> <span m="2316040">a</span> <span
  m="2316160">space,</span> <span m="2317080">a</span> <span
  m="2317150">subspace,</span> <span m="2318320">pretty</span> <span
  m="2318560">big</span> <span m="2318890">if</span> <span m="2319940">j</span>
  <span m="2320240">is</span> <span m="2320390">big.</span> <span
  m="2321890">And</span> <span m="2321990">I'm</span> <span
  m="2322140">going</span> <span m="2322260">to</span> <span
  m="2322380">look</span> <span m="2322710">for</span> <span
  m="2322920">the</span> <span m="2323100">best</span> <span
  m="2323490">solution</span> <span m="2326080">in</span> <span
  m="2326230">that</span> <span m="2326500">space.</span> <span
  m="2328046">So</span> <span m="2328520">I'm</span> <span
  m="2329760">not</span> <span m="2329940">going</span> <span
  m="2330050">to</span> <span m="2330180">solve</span> <span
  m="2330540">of</span> <span m="2330670">Ax</span> <span
  m="2331040">equals</span> <span m="2331200">b</span> <span
  m="2331380">exactly.</span> <span m="2333780">I'm</span> <span
  m="2333960">going</span> <span m="2334060">to</span> <span
  m="2334200">find</span> <span m="2334680">the</span> <span
  m="2334800">best</span> <span m="2335100">solution,</span> <span
  m="2336540">the</span> <span m="2336630">closest</span> <span
  m="2337140">solution,</span> <span m="2337800">the</span> <span
  m="2337890">least</span> <span m="2338160">squares</span> <span
  m="2338520">solution</span> <span m="2339510">in</span> <span
  m="2339780">this</span> <span m="2340710">Krylov</span> <span
  m="2341220">space.</span> <span m="2341790">I'm</span> <span
  m="2342220">going</span> <span m="2342300">to</span> <span
  m="2342380">let</span> <span m="2342640">j</span> <span m="2342905">be</span>
  <span m="2343680">pretty</span> <span m="2343920">big.</span> <span
  m="2344190">So</span> <span m="2344400">this</span> <span
  m="2344550">space</span> <span m="2344940">has</span> <span
  m="2345090">got</span> <span m="2345330">plenty</span> <span
  m="2345660">of</span> <span m="2345720">vectors</span> <span
  m="2346200">in</span> <span m="2346320">it.</span></p><p><span
  m="2348550">I</span> <span m="2348600">have</span> <span m="2348990">a</span>
  <span m="2349050">basis</span> <span m="2349620">for</span> <span
  m="2349800">this</span> <span m="2349950">space.</span> <span
  m="2354230">And</span> <span m="2355280">some</span> <span
  m="2355610">combination</span> <span m="2356390">of</span> <span
  m="2356450">these</span> <span m="2356750">basis</span> <span
  m="2357260">vectors</span> <span m="2357740">will</span> <span
  m="2358010">be</span> <span m="2358370">my</span> <span m="2359210">xj.</span>
  <span m="2359910">So,</span> <span m="2360590">again,</span> <span
  m="2361400">xj</span> <span m="2363270">will</span> <span
  m="2363560">be</span> <span m="2364730">the</span> <span
  m="2364850">best</span> <span m="2367100">vector,</span> <span
  m="2369920">or</span> <span m="2370070">the</span> <span
  m="2370190">closest</span> <span m="2370850">vector</span> <span
  m="2374300">in</span> <span m="2374630">this</span> <span
  m="2375350">Krylov</span> <span m="2376040">space,</span> <span
  m="2376700">j,</span> <span m="2378510">It</span> <span
  m="2378840">will</span> <span m="2378990">be</span> <span
  m="2379140">the</span> <span m="2379230">best</span> <span
  m="2379500">vector</span> <span m="2379830">in</span> <span
  m="2379950">that</span> <span m="2380130">space,</span> <span
  m="2381330">the</span> <span m="2381450">closest</span> <span
  m="2382020">one.</span></p><p><span m="2383070">So</span> <span
  m="2383340">I</span> <span m="2383700">know</span> <span
  m="2383880">what</span> <span m="2384030">the</span> <span
  m="2384180">space</span> <span m="2384630">is.</span> <span
  m="2385710">I've</span> <span m="2385890">reduced</span> <span
  m="2386370">the</span> <span m="2386520">dimension</span> <span
  m="2387120">down</span> <span m="2387480">to</span> <span
  m="2387630">j.</span> <span m="2388830">And</span> <span m="2390000">I</span>
  <span m="2390120">can</span> <span m="2390300">find</span> <span
  m="2390630">this</span> <span m="2390870">best</span> <span
  m="2391200">vector.</span></p><p><span m="2394570">There's</span> <span
  m="2394840">just</span> <span m="2395110">one</span> <span
  m="2395470">catch.</span> <span m="2395960">And</span> <span
  m="2396100">it's</span> <span m="2396310">the</span> <span
  m="2396430">same</span> <span m="2396820">catch</span> <span
  m="2397300">that</span> <span m="2397690">Gram-Schmidt</span> <span
  m="2400960">were</span> <span m="2401260">aiming</span> <span
  m="2401650">to</span> <span m="2402670">help</span> <span
  m="2403210">to</span> <span m="2405610">remove.</span> <span
  m="2407900">That</span> <span m="2408140">is</span> <span
  m="2408470">this</span> <span m="2408740">basis</span> <span
  m="2409550">that</span> <span m="2409730">I'm--</span> <span
  m="2410570">right</span> <span m="2410900">now,</span> <span
  m="2411200">I'm</span> <span m="2411320">working</span> <span
  m="2411650">with</span> <span m="2411890">all</span> <span
  m="2412100">combinations</span> <span m="2413000">of</span> <span
  m="2413090">these</span> <span m="2413450">guys.</span> <span
  m="2415130">And</span> <span m="2415340">those</span> <span
  m="2415820">could</span> <span m="2416240">be</span> <span
  m="2417960">very,</span> <span m="2418660">very</span> <span
  m="2419130">dependent.</span> <span m="2420510">That</span> <span
  m="2420750">might</span> <span m="2421050">be</span> <span
  m="2421230">a</span> <span m="2421320">terrible</span> <span
  m="2421860">basis.</span> <span m="2422500">Anytime</span> <span
  m="2422940">you</span> <span m="2423030">want</span> <span
  m="2423210">to</span> <span m="2423330">do</span> <span m="2424110">big</span>
  <span m="2424320">computations,</span> <span m="2426090">what</span> <span
  m="2426360">kind</span> <span m="2426630">of</span> <span m="2426750">a</span>
  <span m="2426810">basis</span> <span m="2427350">do</span> <span
  m="2427470">you</span> <span m="2427620">want?</span> <span
  m="2430942">Yes?</span> <span m="2431920">So</span> <span
  m="2432130">what</span> <span m="2432490">sort</span> <span
  m="2432790">of</span> <span m="2432910">a</span> <span
  m="2432970">basis</span> <span m="2433630">is</span> <span
  m="2433810">good</span> <span m="2434140">to</span> <span
  m="2435700">project</span> <span m="2436480">onto</span> <span
  m="2437300">to</span> <span m="2437500">find</span> <span
  m="2437860">the</span> <span m="2437980">best</span> <span
  m="2438310">solution</span> <span m="2439420">within</span> <span
  m="2439840">that</span> <span m="2440110">subspace?</span> <span
  m="2441720">So</span> <span m="2441810">we're</span> <span
  m="2442090">sort</span> <span m="2442300">of</span> <span
  m="2442360">finding</span> <span m="2442780">a</span> <span
  m="2442810">projection.</span> <span m="2445920">And</span> <span
  m="2446110">you've</span> <span m="2446410">got</span> <span
  m="2447670">vectors</span> <span m="2448180">that</span> <span
  m="2448390">span</span> <span m="2448990">the</span> <span
  m="2449500">space.</span> <span m="2450040">So</span> <span
  m="2450280">you</span> <span m="2450460">know</span> <span
  m="2451480">what</span> <span m="2451990">you're</span> <span
  m="2453290">projecting</span> <span m="2453920">onto.</span></p><p><span
  m="2455300">But</span> <span m="2455630">those</span> <span
  m="2456020">vectors,</span> <span m="2459410">they</span> <span
  m="2459560">might</span> <span m="2459770">be</span> <span
  m="2459950">nearly</span> <span m="2460400">dependent.</span> <span
  m="2461210">They</span> <span m="2461360">might</span> <span
  m="2461630">all</span> <span m="2461840">be</span> <span
  m="2462020">pointing</span> <span m="2462680">almost</span> <span
  m="2463070">the</span> <span m="2463160">same</span> <span
  m="2463490">direction.</span> <span m="2465170">In</span> <span
  m="2465320">which</span> <span m="2465560">case,</span> <span
  m="2465950">your</span> <span m="2466100">calculations</span> <span
  m="2466940">are</span> <span m="2467300">terrible.</span> <span
  m="2468710">So</span> <span m="2468860">what</span> <span
  m="2469040">do</span> <span m="2469100">you</span> <span
  m="2469190">do?</span> <span m="2470950">Orth--</span> <span
  m="2474210">Orthogonalize.</span> <span m="2475910">And</span> <span
  m="2476090">that's</span> <span m="2476390">where</span> <span
  m="2476690">Arnoldi</span> <span m="2477530">comes</span> <span
  m="2477950">in.</span> <span m="2478250">And</span> <span
  m="2478400">there's</span> <span m="2478700">also</span> <span
  m="2479150">a</span> <span m="2479510">Hungarian</span> <span
  m="2480260">guy</span> <span m="2480590">named</span> <span
  m="2480920">Lanczos.</span></p><p><span m="2486210">So</span> <span
  m="2486290">that's</span> <span m="2486650">what</span> <span
  m="2486860">they</span> <span m="2487910">contribute</span> <span
  m="2488600">is</span> <span m="2489800">how</span> <span m="2490160">to</span>
  <span m="2490460">orthogonalize</span> <span m="2491600">that</span> <span
  m="2491870">basis.</span> <span m="2493750">And</span> <span
  m="2493910">then,</span> <span m="2494450">once</span> <span
  m="2494750">you've</span> <span m="2494930">done</span> <span
  m="2495170">that,</span> <span m="2495840">you</span> <span
  m="2497180">have</span> <span m="2497450">an</span> <span
  m="2497570">orthogonal</span> <span m="2498230">basis.</span> <span
  m="2498900">And,</span> <span m="2499070">of</span> <span
  m="2499160">course,</span> <span m="2499490">an</span> <span
  m="2499610">orthogonal</span> <span m="2500210">basis</span> <span
  m="2500750">is</span> <span m="2502220">perfect</span> <span
  m="2503240">to</span> <span m="2503900">do</span> <span m="2504140">a</span>
  <span m="2504200">projection.</span> <span m="2507570">Everybody</span> <span
  m="2508140">has</span> <span m="2508350">to</span> <span
  m="2508470">know</span> <span m="2508740">that.</span> <span
  m="2509550">Why</span> <span m="2509880">is</span> <span m="2510060">a</span>
  <span m="2510120">orthogonal</span> <span m="2510820">basis</span> <span
  m="2511260">so</span> <span m="2511500">great?</span> <span
  m="2511890">Ortho-normal</span> <span m="2512730">even.</span> <span
  m="2513510">Let's</span> <span m="2513720">just</span> <span
  m="2513960">remember.</span></p><p><span m="2515040">Suppose</span> <span
  m="2515460">I</span> <span m="2515610">have</span> <span m="2515760">a</span>
  <span m="2515820">vector</span> <span m="2516400">x.</span> <span
  m="2520146">It's</span> <span m="2520590">unknown</span> <span
  m="2521040">here.</span> <span m="2521280">But</span> <span
  m="2521460">suppose</span> <span m="2522600">I</span> <span
  m="2522720">have</span> <span m="2522990">it.</span> <span
  m="2523590">And</span> <span m="2523740">I</span> <span
  m="2523890">want</span> <span m="2524100">to</span> <span
  m="2524190">write</span> <span m="2524550">it</span> <span
  m="2524700">as</span> <span m="2524970">a</span> <span
  m="2525060">combination</span> <span m="2526470">of</span> <span
  m="2527010">these</span> <span m="2527430">ortho-normal</span> <span
  m="2528330">guys.</span> <span m="2534110">say,</span> <span
  m="2534450">n.</span> <span m="2538310">What</span> <span
  m="2538610">is</span> <span m="2538910">it</span> <span
  m="2539660">about</span> <span m="2540370">all</span> <span
  m="2540600">ortho-normal</span> <span m="2541220">q's</span> <span
  m="2541790">that</span> <span m="2541940">makes</span> <span
  m="2542270">this</span> <span m="2542570">easy</span> <span
  m="2542900">to</span> <span m="2543050">do,</span> <span
  m="2544400">which</span> <span m="2544700">it</span> <span
  m="2544820">would</span> <span m="2545030">not</span> <span
  m="2545420">be</span> <span m="2545810">with</span> <span
  m="2546050">an</span> <span m="2546620">arbitrary</span> <span
  m="2547340">basis?</span> <span m="2548390">So</span> <span
  m="2548570">this</span> <span m="2549380">is</span> <span
  m="2549560">really</span> <span m="2551260">Q</span> <span
  m="2551570">times</span> <span m="2552020">c,</span> <span
  m="2552440">right?</span> <span m="2553010">Q</span> <span
  m="2553370">times</span> <span m="2553790">this</span> <span
  m="2554000">vector</span> <span m="2554420">of</span> <span
  m="2554630">C's.</span> <span m="2556590">The</span> <span
  m="2557670">q's</span> <span m="2558270">are</span> <span
  m="2558360">in</span> <span m="2558480">the</span> <span
  m="2558570">columns</span> <span m="2559020">of</span> <span
  m="2559140">Q.</span> <span m="2559880">The</span> <span
  m="2560010">c's</span> <span m="2560460">were</span> <span
  m="2560700">multiplying</span> <span m="2561270">a</span> <span
  m="2561330">matrix</span> <span m="2561840">by</span> <span
  m="2562110">a</span> <span m="2562170">vector.</span> <span
  m="2564040">It's</span> <span m="2564240">a</span> <span
  m="2564300">combination</span> <span m="2564990">of</span> <span
  m="2565050">the</span> <span m="2565140">columns.</span> <span
  m="2565750">That's</span> <span m="2565860">what</span> <span
  m="2566010">we</span> <span m="2566160">get.</span></p><p><span
  m="2567540">And</span> <span m="2569910">when</span> <span
  m="2570870">the</span> <span m="2570960">q's</span> <span
  m="2571470">are</span> <span m="2571620">orthogonal,</span> <span
  m="2573000">what's</span> <span m="2573330">the</span> <span
  m="2573480">answer?</span> <span m="2574200">We</span> <span
  m="2574380">can</span> <span m="2574590">get</span> <span
  m="2574830">the</span> <span m="2575010">answer</span> <span
  m="2575880">straight</span> <span m="2576270">away.</span> <span
  m="2577990">So</span> <span m="2579070">here,</span> <span
  m="2579340">we're</span> <span m="2580570">trying</span> <span
  m="2580840">to</span> <span m="2581170">find</span> <span
  m="2581560">the</span> <span m="2581680">coefficients</span> <span
  m="2583300">with</span> <span m="2583480">respect</span> <span
  m="2583870">to</span> <span m="2584020">the</span> <span
  m="2584110">basis</span> <span m="2584620">vectors</span> <span
  m="2585260">Q</span> <span m="2586320">of</span> <span m="2586560">a</span>
  <span m="2587890">given</span> <span m="2588310">vector</span> <span
  m="2588730">x.</span></p><p><span m="2590470">And</span> <span
  m="2590950">what's</span> <span m="2591460">the</span> <span
  m="2591700">answer</span> <span m="2592120">to</span> <span
  m="2592270">that</span> <span m="2592510">question?</span> <span
  m="2593770">The</span> <span m="2593860">point</span> <span
  m="2594160">is,</span> <span m="2595150">usually,</span> <span
  m="2595930">to</span> <span m="2596080">find</span> <span
  m="2596440">the</span> <span m="2596560">coefficients,</span> <span
  m="2598130">c</span> <span m="2598690">would</span> <span
  m="2598900">have</span> <span m="2599200">to</span> <span
  m="2599320">be</span> <span m="2599620">Q</span> <span
  m="2599980">inverse</span> <span m="2600430">x.</span> <span
  m="2601300">We'd</span> <span m="2601480">have</span> <span
  m="2601600">to</span> <span m="2601750">solve</span> <span
  m="2602080">that</span> <span m="2602500">system</span> <span
  m="2602950">of</span> <span m="2603070">equations.</span> <span
  m="2604510">We</span> <span m="2604660">do</span> <span
  m="2604870">have</span> <span m="2605080">to</span> <span
  m="2605200">solve</span> <span m="2605500">that</span> <span
  m="2605680">system</span> <span m="2606070">of</span> <span
  m="2606190">equations.</span></p><p><span m="2607240">But</span> <span
  m="2608110">where's</span> <span m="2608710">the</span> <span
  m="2608830">payoff</span> <span m="2609400">from</span> <span
  m="2610680">ortho-normal</span> <span m="2611500">basis?</span></p><p><span
  m="2612854">AUDIENCE:</span> <span m="2613042">Q</span> <span
  m="2613231">inverse--</span></p><p><span m="2613610">GILBERT STRANG:</span>
  <span m="2613820">Q</span> <span m="2614030">inverse</span> <span
  m="2614550">is</span> <span m="2615830">Q</span> <span
  m="2616130">transpose.</span> <span m="2616910">That's</span> <span
  m="2617270">the</span> <span m="2617420">payoff.</span> <span
  m="2618590">So</span> <span m="2618800">it's</span> <span
  m="2619160">just</span> <span m="2619370">telling</span> <span
  m="2619760">me</span> <span m="2623840">that</span> <span
  m="2624000">to</span> <span m="2624150">find</span> <span
  m="2624540">c1--</span> <span m="2625410">how</span> <span
  m="2625620">do</span> <span m="2625770">I</span> <span m="2625860">find</span>
  <span m="2626190">c1?</span> <span m="2627280">This</span> <span
  m="2627900">says</span> <span m="2628590">take</span> <span
  m="2628920">the</span> <span m="2629070">first</span> <span
  m="2629550">q1,</span> <span m="2630090">transpose</span> <span
  m="2630720">with</span> <span m="2630960">x.</span> <span
  m="2632010">I'll</span> <span m="2632160">say</span> <span
  m="2632400">the</span> <span m="2632520">same</span> <span
  m="2632790">thing</span> <span m="2633030">here.</span> <span
  m="2633720">Take</span> <span m="2634020">the</span> <span
  m="2634140">first</span> <span m="2636390">vector</span> <span
  m="2637080">with</span> <span m="2637320">x.</span> <span
  m="2638090">That</span> <span m="2638360">will</span> <span
  m="2638490">be</span> <span m="2638670">about</span> <span
  m="2639120">cq,</span> <span m="2639480">q1,</span> <span
  m="2640620">transpose</span> <span m="2641340">q1.</span> <span
  m="2641780">I'm</span> <span m="2642180">just</span> <span
  m="2642390">taking</span> <span m="2642840">the</span> <span
  m="2642960">dot</span> <span m="2643230">product</span> <span
  m="2643710">of</span> <span m="2643830">everything</span> <span
  m="2644310">there</span> <span m="2644580">with</span> <span
  m="2644790">q1.</span> <span m="2645990">And</span> <span
  m="2646140">then</span> <span m="2646320">a</span> <span
  m="2646410">c2,</span> <span m="2647280">q1</span> <span
  m="2648030">transpose,</span> <span m="2648840">q2</span> <span
  m="2649560">and</span> <span m="2649680">so</span> <span
  m="2649950">on.</span></p><p><span m="2651510">But</span> <span
  m="2651720">what's</span> <span m="2652020">good?</span></p><p><span
  m="2652836">AUDIENCE:</span> <span m="2653079">You</span> <span
  m="2653322">have</span> <span m="2653565">zeros.</span></p><p><span
  m="2655140">GILBERT STRANG:</span> <span m="2655245">Tell</span> <span
  m="2655350">me</span> <span m="2655500">again.</span></p><p><span
  m="2655710">AUDIENCE:</span> <span m="2655901">The</span> <span
  m="2656092">other</span> <span m="2656219">ones</span> <span
  m="2656346">are</span> <span m="2656474">zeros.</span></p><p><span
  m="2657240">GILBERT STRANG:</span> <span m="2657360">These</span> <span
  m="2657480">are</span> <span m="2657600">all</span> <span
  m="2657900">zero.</span> <span m="2662650">And</span> <span
  m="2662960">the</span> <span m="2663040">q1</span> <span
  m="2663340">transpose</span> <span m="2664510">q1</span> <span
  m="2665050">is?</span></p><p><span m="2665530">AUDIENCE:</span> <span
  m="2665717">1.</span></p><p><span m="2666280">GILBERT STRANG:</span> <span
  m="2666432">1.</span> <span m="2666890">So</span> <span
  m="2667060">it's</span> <span m="2667240">perfect.</span> <span
  m="2668170">c1</span> <span m="2668920">is</span> <span m="2669130">q1</span>
  <span m="2669580">transpose</span> <span m="2670180">x.</span> <span
  m="2670450">And</span> <span m="2670570">that's</span> <span
  m="2670810">exactly</span> <span m="2671650">what</span> <span
  m="2672640">that</span> <span m="2673090">tells</span> <span
  m="2673480">us.</span> <span m="2675160">The</span> <span
  m="2675250">first</span> <span m="2675580">component</span> <span
  m="2676240">is</span> <span m="2676480">the</span> <span
  m="2676600">first</span> <span m="2677140">row</span> <span
  m="2677470">of</span> <span m="2677590">q</span> <span
  m="2677830">transpose,</span> <span m="2679610">which</span> <span
  m="2679850">is</span> <span m="2680030">q1</span> <span
  m="2680810">transpose</span> <span m="2683930">with</span> <span
  m="2684170">x.</span> <span m="2686760">So</span> <span
  m="2686970">that's</span> <span m="2687270">the</span> <span
  m="2687420">idea.</span> <span m="2688420">So</span> <span
  m="2690340">that's</span> <span m="2690700">the</span> <span
  m="2690820">idea</span> <span m="2691210">here.</span> <span
  m="2692260">That's</span> <span m="2692470">the</span> <span
  m="2692590">reason</span> <span m="2693160">for</span> <span
  m="2694240">Arnoldi</span> <span m="2694710">and</span> <span
  m="2694900">Lanczos</span> <span m="2696790">being</span> <span
  m="2697090">famous</span> <span m="2698470">is</span> <span
  m="2698770">that</span> <span m="2698890">they</span> <span
  m="2699130">figured</span> <span m="2699580">out</span> <span
  m="2699760">a</span> <span m="2699850">good</span> <span
  m="2700150">way</span> <span m="2701140">to</span> <span
  m="2701890">orthogonalize</span> <span m="2703450">that</span> <span
  m="2703750">basis.</span></p><p><span m="2710680">Do</span> <span
  m="2710800">we</span> <span m="2710950">want</span> <span
  m="2711160">to</span> <span m="2711250">see</span> <span
  m="2711700">what</span> <span m="2712900">they</span> <span
  m="2713110">did?</span> <span m="2713500">Or</span> <span
  m="2715030">those</span> <span m="2715300">would</span> <span
  m="2715390">be</span> <span m="2715570">in</span> <span m="2715690">the</span>
  <span m="2715780">notes.</span> <span m="2716910">Well,</span> <span
  m="2717160">how</span> <span m="2717370">do</span> <span
  m="2717460">you</span> <span m="2717580">do</span> <span
  m="2717760">it?</span></p><p><span m="2720070">So</span> <span
  m="2720310">this</span> <span m="2720580">is</span> <span
  m="2720760">the</span> <span m="2720850">basis.</span> <span
  m="2721420">This</span> <span m="2721630">is</span> <span
  m="2721810">our</span> <span m="2722470">not</span> <span
  m="2722770">good</span> <span m="2723070">basis.</span> <span
  m="2724630">And</span> <span m="2724750">then</span> <span
  m="2725170">our</span> <span m="2725440">good</span> <span
  m="2725740">basis</span> <span m="2727420">is</span> <span
  m="2727600">going</span> <span m="2727740">to</span> <span
  m="2727870">be</span> <span m="2728260">q's.</span> <span
  m="2731880">So</span> <span m="2732150">I'll</span> <span
  m="2732300">take</span> <span m="2732610">b</span> <span m="2732810">to</span>
  <span m="2732900">be--</span> <span m="2733170">q1</span> <span
  m="2733860">will</span> <span m="2734070">be</span> <span
  m="2734340">what?</span> <span m="2734740">What</span> <span
  m="2735140">would</span> <span m="2735330">be</span> <span
  m="2735480">the</span> <span m="2735630">right</span> <span
  m="2735900">choice</span> <span m="2736260">for</span> <span
  m="2736440">q1?</span> <span m="2739230">Well,</span> <span
  m="2739800">I'll</span> <span m="2739890">take</span> <span
  m="2740160">that</span> <span m="2740310">first</span> <span
  m="2740610">vector</span> <span m="2741570">and</span> <span
  m="2741660">normalize</span> <span m="2742320">it.</span> <span
  m="2746240">We're</span> <span m="2746390">just</span> <span
  m="2746600">doing</span> <span m="2746840">Gram-Schmidt.</span></p><p><span
  m="2748010">What</span> <span m="2748190">would</span> <span
  m="2748370">q2</span> <span m="2748940">be?</span> <span
  m="2750950">How</span> <span m="2751100">would</span> <span
  m="2751280">I</span> <span m="2751370">find</span> <span m="2751670">q2</span>
  <span m="2754060">following</span> <span m="2754570">the</span> <span
  m="2754660">Gram-Schmidt</span> <span m="2755320">idea?</span> <span
  m="2756730">I</span> <span m="2756880">take</span> <span
  m="2757240">Ab.</span> <span m="2758950">I</span> <span
  m="2760610">subtract</span> <span m="2761360">off</span> <span
  m="2761690">its</span> <span m="2761870">component</span> <span
  m="2762620">in</span> <span m="2762770">this</span> <span
  m="2763250">q1</span> <span m="2763820">direction</span> <span
  m="2765140">and</span> <span m="2765350">I</span> <span
  m="2765440">normalize.</span> <span m="2767120">And</span> <span
  m="2767990">all</span> <span m="2768320">the</span> <span
  m="2768560">Arnoldi</span> <span m="2769220">Lanczos</span> <span
  m="2769970">algorithm</span> <span m="2770510">is</span> <span
  m="2770840">is</span> <span m="2771950">that</span> <span
  m="2772580">same</span> <span m="2773060">Gram-Schmidt</span> <span
  m="2773810">idea</span> <span m="2775400">applied</span> <span
  m="2776000">to</span> <span m="2776480">these</span> <span
  m="2777440">Krylov</span> <span m="2778100">vectors.</span></p><p><span
  m="2779480">So</span> <span m="2780520">Arnoldi-Lanczos--</span> <span
  m="2782280">Arnoldi</span> <span m="2782420">is</span> <span
  m="2782960">for</span> <span m="2783140">any</span> <span
  m="2783380">matrix</span> <span m="2784010">and</span> <span
  m="2784130">Lanczos</span> <span m="2784430">is</span> <span
  m="2784850">for</span> <span m="2785060">a</span> <span
  m="2785120">symmetric</span> <span m="2785780">matrix</span> <span
  m="2786290">where</span> <span m="2786440">you</span> <span
  m="2786620">get</span> <span m="2786860">some</span> <span
  m="2787430">special</span> <span m="2787850">benefit.</span> <span
  m="2790920">So</span> <span m="2791080">what</span> <span
  m="2791290">they</span> <span m="2791500">did,</span> <span
  m="2792580">you</span> <span m="2792760">could</span> <span
  m="2792940">say</span> <span m="2793240">now,</span> <span
  m="2794260">they</span> <span m="2794410">just</span> <span
  m="2794620">wrote</span> <span m="2794890">down</span> <span
  m="2796570">Gram-Schmidt,</span> <span m="2800350">in</span> <span
  m="2800470">fact,</span> <span m="2800740">probably</span> <span
  m="2801550">the</span> <span m="2801670">standard</span> <span
  m="2802270">Gram-Schmidt,</span> <span m="2802960">because</span> <span
  m="2803860">this</span> <span m="2804070">is</span> <span m="2804220">a</span>
  <span m="2804310">case</span> <span m="2804670">where</span> <span
  m="2804910">we</span> <span m="2805180">really</span> <span
  m="2805570">don't</span> <span m="2805870">want</span> <span
  m="2806140">to</span> <span m="2806260">exchange</span> <span
  m="2806890">columns.</span> <span m="2807910">I</span> <span
  m="2808000">don't</span> <span m="2808270">want</span> <span
  m="2808570">suddenly</span> <span m="2809110">to</span> <span
  m="2809260">be</span> <span m="2810520">pushed</span> <span
  m="2810880">into</span> <span m="2811120">this</span> <span
  m="2811390">one.</span> <span m="2813460">I'd</span> <span
  m="2813640">rather</span> <span m="2814000">take</span> <span
  m="2814300">them</span> <span m="2814450">in</span> <span
  m="2814600">order,</span> <span m="2814960">because</span> <span
  m="2815260">it</span> <span m="2815410">just</span> <span
  m="2815740">turns</span> <span m="2816130">out</span> <span
  m="2816310">right.</span> <span m="2816760">And</span> <span
  m="2817540">this</span> <span m="2817870">is</span> <span
  m="2818110">in</span> <span m="2818230">the</span> <span
  m="2818350">notes.</span> <span m="2818650">So</span> <span
  m="2818860">let</span> <span m="2819010">me</span> <span
  m="2819130">tell</span> <span m="2819370">you</span> <span
  m="2819490">where</span> <span m="2820240">this</span> <span
  m="2820510">is.</span> <span m="2821150">It</span> <span
  m="2821370">will</span> <span m="2821760">be</span> <span
  m="2822090">Section</span> <span m="2822610">II.1.</span> <span
  m="2825560">So</span> <span m="2825770">Part</span> <span m="2826100">2</span>
  <span m="2826340">of</span> <span m="2826460">the</span> <span
  m="2826550">book,</span> <span m="2826880">which</span> <span
  m="2827090">is</span> <span m="2827240">where</span> <span
  m="2827420">we</span> <span m="2827600">are,</span> <span
  m="2828500">and</span> <span m="2828650">the</span> <span
  m="2828740">first</span> <span m="2829070">section.</span></p><p><span
  m="2830690">So</span> <span m="2830930">what</span> <span
  m="2831170">all</span> <span m="2831260">together</span> <span
  m="2831830">is</span> <span m="2832010">in</span> <span
  m="2832130">this</span> <span m="2832400">first</span> <span
  m="2832850">section</span> <span m="2834530">when</span> <span
  m="2835010">you</span> <span m="2835160">look</span> <span
  m="2835430">at</span> <span m="2835580">it?</span> <span
  m="2837470">That</span> <span m="2837740">section</span> <span
  m="2838220">is</span> <span m="2838370">standard</span> <span
  m="2839090">numerical</span> <span m="2839660">linear</span> <span
  m="2840020">algebra,</span> <span m="2841160">what</span> <span
  m="2841400">any</span> <span m="2841730">course</span> <span
  m="2842360">in</span> <span m="2843220">MIT</span> <span
  m="2843710">offers,</span> <span m="2845330">18.3--</span> <span
  m="2848270">I'm</span> <span m="2848390">not</span> <span
  m="2848660">sure</span> <span m="2848930">of</span> <span
  m="2849020">the</span> <span m="2849140">number,</span> <span
  m="2850140">330</span> <span m="2851080">maybe,</span> <span
  m="2855110">which</span> <span m="2855380">is,</span> <span
  m="2856030">of</span> <span m="2856370">all</span> <span
  m="2856580">things</span> <span m="2856910">like</span> <span
  m="2857120">this.</span> <span m="2858610">Krylov</span> <span
  m="2859180">would</span> <span m="2859330">be</span> <span
  m="2859480">there,</span> <span m="2859780">Arnoldi,</span> <span
  m="2860440">Lanczos.</span> <span m="2861600">Of</span> <span
  m="2861760">course,</span> <span m="2862120">Gram</span> <span
  m="2862450">and</span> <span m="2862540">Schmidt</span> <span
  m="2862870">would</span> <span m="2863050">be</span> <span
  m="2863230">there.</span> <span m="2864480">That's</span> <span
  m="2864690">five</span> <span m="2865050">people</span> <span
  m="2865470">who've</span> <span m="2865710">thought</span> <span
  m="2865980">of</span> <span m="2866070">the</span> <span
  m="2866190">same</span> <span m="2866520">thing.</span></p><p><span
  m="2868960">And</span> <span m="2869920">so</span> <span
  m="2870130">that</span> <span m="2870340">Section</span> <span
  m="2870760">II.1</span> <span m="2871300">summarizes</span> <span
  m="2873190">what's</span> <span m="2873550">in</span> <span
  m="2873730">really</span> <span m="2874120">good,</span> <span
  m="2874850">well,</span> <span m="2875110">a</span> <span
  m="2875170">lot</span> <span m="2875440">of</span> <span
  m="2875740">textbooks.</span> <span m="2876370">And</span> <span
  m="2876460">let</span> <span m="2876610">me</span> <span
  m="2876760">mention</span> <span m="2879290">a</span> <span
  m="2879400">favorite,</span> <span m="2880350">a</span> <span
  m="2881110">book</span> <span m="2881410">by</span> <span
  m="2881830">Trefethen</span> <span m="2882420">and</span> <span
  m="2884260">Bau.</span> <span m="2888800">Or</span> <span
  m="2889310">the</span> <span m="2889460">&quot;Bible.&quot;</span> <span
  m="2890150">So</span> <span m="2890420">this</span> <span
  m="2890630">is</span> <span m="2890750">maybe</span> <span
  m="2891050">a</span> <span m="2891110">moment</span> <span
  m="2891500">to</span> <span m="2891680">tell</span> <span
  m="2891950">you</span> <span m="2892130">about</span> <span
  m="2892400">two</span> <span m="2893540">books</span> <span
  m="2894020">on</span> <span m="2895160">classical</span> <span
  m="2896000">numerical</span> <span m="2896630">linear</span> <span
  m="2896990">algebra,</span> <span m="2897470">what</span> <span
  m="2897680">do</span> <span m="2897740">you</span> <span m="2897860">do</span>
  <span m="2898070">for</span> <span m="2898220">matrices</span> <span
  m="2898940">of</span> <span m="2899090">order</span> <span
  m="2899390">1,000,</span> <span m="2901050">not</span> <span
  m="2901290">for</span> <span m="2901410">matrices</span> <span
  m="2902040">of</span> <span m="2902160">order</span> <span
  m="2902500">millions.</span> <span m="2906030">That</span> <span
  m="2906660">you</span> <span m="2906740">have</span> <span
  m="2906860">to</span> <span m="2906980">rethink.</span> <span
  m="2908210">So</span> <span m="2908420">Trefethen-Bau</span> <span
  m="2909540">isn't</span> <span m="2909890">called</span> <span
  m="2910160">numerical</span> <span m="2910670">linear</span> <span
  m="2911030">algebra.</span></p><p><span m="2911810">And</span> <span
  m="2912060">do</span> <span m="2912115">you</span> <span
  m="2912170">know</span> <span m="2912440">the</span> <span
  m="2912620">authors</span> <span m="2913100">of</span> <span
  m="2913310">the</span> <span m="2913460">Bible</span> <span
  m="2915860">of</span> <span m="2917510">numerical</span> <span
  m="2918050">linear</span> <span m="2918410">algebra?</span> <span
  m="2922820">So</span> <span m="2923030">that's</span> <span
  m="2923330">a</span> <span m="2923420">textbook.</span> <span
  m="2925190">And</span> <span m="2925580">what</span> <span
  m="2925760">I'm</span> <span m="2926900">going</span> <span
  m="2927010">to</span> <span m="2927080">write</span> <span
  m="2927290">down</span> <span m="2927770">now</span> <span
  m="2928130">finally</span> <span m="2928730">is</span> <span
  m="2930500">750</span> <span m="2931700">pages</span> <span
  m="2932270">it's</span> <span m="2932450">grown</span> <span
  m="2932840">to</span> <span m="2933170">in</span> <span m="2933860">its</span>
  <span m="2934040">fourth</span> <span m="2934400">edition.</span> <span
  m="2934880">It's</span> <span m="2935060">the</span> <span
  m="2935180">Bible</span> <span m="2935720">for</span> <span
  m="2935960">all</span> <span m="2936710">numerical</span> <span
  m="2937280">linear</span> <span m="2937610">algebra</span> <span
  m="2938030">people.</span> <span m="2938870">And</span> <span
  m="2939110">it's</span> <span m="2939380">written</span> <span
  m="2939770">by</span> <span m="2940250">Golub</span> <span
  m="2942660">and</span> <span m="2943080">VanLoan.</span> <span
  m="2948760">So</span> <span m="2948970">Gene</span> <span
  m="2949660">Golub</span> <span m="2950110">was</span> <span
  m="2950380">a</span> <span m="2950770">remarkable</span> <span
  m="2951460">guy.</span> <span m="2953190">He</span> <span
  m="2953340">probably</span> <span m="2953700">didn't</span> <span
  m="2953940">write</span> <span m="2954240">more</span> <span
  m="2954450">than</span> <span m="2954630">about</span> <span
  m="2955030">11</span> <span m="2955470">pages</span> <span
  m="2955980">of</span> <span m="2956100">this.</span> <span
  m="2958050">Charlie</span> <span m="2958530">wrote</span> <span
  m="2959070">most</span> <span m="2959430">of</span> <span
  m="2959550">it.</span></p><p><span m="2960300">But</span> <span
  m="2962920">Golub</span> <span m="2963310">was</span> <span
  m="2964260">an</span> <span m="2964360">amazing</span> <span
  m="2964990">person</span> <span m="2965470">who</span> <span
  m="2965770">traveled</span> <span m="2966280">the</span> <span
  m="2966400">world</span> <span m="2967030">and</span> <span
  m="2968110">connected</span> <span m="2968710">people</span> <span
  m="2969400">and</span> <span m="2970060">left</span> <span
  m="2970360">behind</span> <span m="2970930">papers</span> <span
  m="2971380">to</span> <span m="2971500">be</span> <span
  m="2971680">written</span> <span m="2972900">and</span> <span
  m="2974260">books</span> <span m="2974590">to</span> <span
  m="2974710">be</span> <span m="2974890">written.</span> <span
  m="2975520">And</span> <span m="2977410">so</span> <span
  m="2977890">this</span> <span m="2978230">Golub-VanLoan</span> <span
  m="2979080">is</span> <span m="2979240">now</span> <span m="2979510">in</span>
  <span m="2979600">the</span> <span m="2979690">fourth</span> <span
  m="2980050">volume.</span> <span m="2980530">And</span> <span
  m="2980650">it</span> <span m="2980800">has</span> <span m="2982370">so</span>
  <span m="2982670">much</span> <span m="2983210">good</span> <span
  m="2983480">stuff</span> <span m="2983930">and</span> <span
  m="2984080">references</span> <span m="2984830">that</span> <span
  m="2985550">it's</span> <span m="2987230">like</span> <span
  m="2987590">the</span> <span m="2988160">good</span> <span
  m="2988460">reference.</span> <span m="2989690">And</span> <span
  m="2989870">this</span> <span m="2990140">is</span> <span
  m="2990470">the</span> <span m="2990590">good</span> <span
  m="2991010">textbook</span> <span m="2991730">if</span> <span
  m="2991850">you</span> <span m="2992000">were</span> <span
  m="2992490">going</span> <span m="2992700">to</span> <span
  m="2992840">teach</span> <span m="2993230">a</span> <span
  m="2993320">course</span> <span m="2993800">on</span> <span
  m="2995070">numerical</span> <span m="2995540">linear</span> <span
  m="2995870">algebra.</span></p><p><span m="2996695">So</span> <span
  m="2997100">I</span> <span m="2997160">think</span> <span
  m="2997340">that</span> <span m="2997700">I've</span> <span
  m="2997850">come</span> <span m="2998090">to</span> <span
  m="2998510">the</span> <span m="2998630">point</span> <span
  m="3000010">to</span> <span m="3000540">finish.</span> <span
  m="3002350">So</span> <span m="3002530">I</span> <span
  m="3002650">really</span> <span m="3002950">have</span> <span
  m="3003070">finished</span> <span m="3004270">along</span> <span
  m="3004630">with</span> <span m="3004810">the</span> <span
  m="3004930">extra</span> <span m="3006190">attraction</span> <span
  m="3006880">of</span> <span m="3008170">this</span> <span
  m="3008680">different</span> <span m="3009160">problem,</span> <span
  m="3010420">I</span> <span m="3010490">finished</span> <span
  m="3010900">with</span> <span m="3011110">Ax</span> <span
  m="3011500">equal</span> <span m="3011800">b.</span> <span
  m="3012860">And,</span> <span m="3014230">well,</span> <span
  m="3014690">at</span> <span m="3014710">least,</span> <span
  m="3015880">I</span> <span m="3016030">now</span> <span
  m="3016270">move</span> <span m="3016630">onto</span> <span
  m="3017770">what</span> <span m="3018040">to</span> <span
  m="3018190">do</span> <span m="3018460">with</span> <span
  m="3018850">really,</span> <span m="3019370">really</span> <span
  m="3019690">large</span> <span m="3020050">matrices.</span></p>
uid: 57520c261eb1b9cabc4460a953a67428
type: courses
layout: video
---
