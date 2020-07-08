---
about_this_resource_text: >-
  <h2 class="subhead"><strong>Description</strong></h2> <p>This lecture focuses
  on several topics that are specific parts of optimization.  These include
  linear programming (LP), the max-flow min-cut theorem, two-person zero-sum
  games, and duality.</p> <h2 class="subhead"><strong>Summary</strong></h2>
  <p><strong>Linear program:</strong> Minimize cost subject to \(Ax = b\) and
  \(x\geq 0\)&nbsp;<br /> Inequalities make the problem piecewise linear.<br />
  Simplex method reduces cost from corner point to corner point.<br /> Dual
  linear program is a maximization: Max = Min!<br /> <strong>Game:</strong>
  \(X\) chooses rows of payoff matrix, \(Y\) chooses columns.</p> <p>Related
  sections in textbook: VI.2&ndash;VI.3</p> <p><strong>Instructor:</strong>
  Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: feb9j65Iz4w
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    title: Video-YouTube-Stream
    type: Video
    uid: d4a18bc641ad22e88307e3d959713079
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/feb9j65Iz4w/default.jpg'
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 81f55f1a913056dd96d6fe0e39241323
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: feb9j65Iz4w
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3d3f2aec61ac9bf507947110ba08ba68
  - id: feb9j65Iz4w.srt
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-24-linear-programming-and-two-person-games/feb9j65Iz4w.srt
    title: 3play caption file
    type: null
    uid: 02a708b20f224bcbaacc3771500e0365
  - id: feb9j65Iz4w.pdf
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-24-linear-programming-and-two-person-games/feb9j65Iz4w.pdf
    title: 3play pdf file
    type: null
    uid: cf7eca3de91e09982c70d097de07d25a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0ff7709ab5576316e0ac68477151c402
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 40c64dc6451fbeeabb3c89571b888813
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture24_300k.mp4'
    parent_uid: aad61155b6deef238baf2022c1b8b5af
    title: Video-Internet Archive-MP4
    type: Video
    uid: 93ca0e762c2a3905f4fd7339c987c392
inline_embed_id: 61766072lecture24linearprogrammingandtwopersongames90658573
order_index: 242
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-24-linear-programming-and-two-person-games
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-24-linear-programming-and-two-person-games
title: 'Lecture 24: Linear Programming and Two-Person Games'
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
  m="18290">ocw.mit.edu.</span></p><p><span m="26090">GILBERT STRANG:</span>
  <span m="26255">OK.</span> <span m="27410">Let</span> <span
  m="27590">me</span> <span m="27710">just</span> <span m="27920">say</span>
  <span m="29030">our</span> <span m="29150">next</span> <span
  m="29480">topic,</span> <span m="30020">moving</span> <span
  m="30530">really</span> <span m="31070">toward</span> <span
  m="32659">machine</span> <span m="33110">learning,</span> <span
  m="34250">would</span> <span m="34490">be</span> <span m="35210">the</span>
  <span m="35540">last</span> <span m="35960">section</span> <span
  m="37090">of</span> <span m="37250">chapter</span> <span m="37670">6</span>
  <span m="38060">about</span> <span m="38990">stochastic</span> <span
  m="39860">gradient</span> <span m="40430">descent.</span> <span
  m="43280">I</span> <span m="43790">think</span> <span
  m="44150">Professor</span> <span m="44900">Sra</span> <span
  m="45500">from</span> <span m="47150">computer</span> <span
  m="47630">science,</span> <span m="49810">if</span> <span m="50030">he</span>
  <span m="50120">is</span> <span m="50300">able,</span> <span
  m="50660">he</span> <span m="50930">will</span> <span m="51530">take</span>
  <span m="51870">the</span> <span m="51980">class</span> <span
  m="52640">Friday</span> <span m="53810">and</span> <span m="53960">tell</span>
  <span m="54230">us</span> <span m="54410">about</span> <span
  m="55690">SGDs,</span> <span m="56950">Stochastic</span> <span
  m="57650">Gradient</span> <span m="58160">Descent,</span> <span
  m="58880">critical</span> <span m="59840">algorithm.</span> <span
  m="61130">I</span> <span m="61190">mean</span> <span m="61580">that,</span>
  <span m="62350">at</span> <span m="62720">a</span> <span
  m="62780">quick</span> <span m="63210">look,</span> <span
  m="63980">stochastic</span> <span m="64700">gradient</span> <span
  m="65209">descent</span> <span m="67550">does</span> <span
  m="67880">smaller</span> <span m="68450">batches</span> <span
  m="69020">at</span> <span m="69170">a</span> <span m="69290">time,</span>
  <span m="69870">so</span> <span m="69950">it's</span> <span
  m="70190">computationally</span> <span m="71180">faster</span> <span
  m="71720">than</span> <span m="72590">pure</span> <span
  m="73190">gradient</span> <span m="73700">descent.</span> <span
  m="74810">But</span> <span m="75050">also,</span> <span
  m="75560">stochastic</span> <span m="76250">gradient</span> <span
  m="76730">descent</span> <span m="77150">is</span> <span m="77330">able</span>
  <span m="77600">to</span> <span m="77720">solve</span> <span
  m="79190">probabilistic</span> <span m="80180">problems</span> <span
  m="80840">where</span> <span m="80990">you're</span> <span
  m="81170">trying</span> <span m="81560">to</span> <span
  m="81680">minimize</span> <span m="82580">an</span> <span
  m="82710">expected</span> <span m="83390">value</span> <span
  m="83870">instead</span> <span m="84300">of</span> <span m="84360">a</span>
  <span m="84530">function.</span></p><p><span m="85310">Anyway,</span> <span
  m="86090">it's</span> <span m="86360">an</span> <span
  m="86930">important</span> <span m="89890">thing.</span> <span
  m="90220">Actually,</span> <span m="90600">there</span> <span
  m="90770">is</span> <span m="90930">a</span> <span m="91040">lecture</span>
  <span m="91520">at</span> <span m="91670">2:00</span> <span
  m="95450">in</span> <span m="95630">neuroscience</span> <span
  m="96950">about</span> <span m="98660">the</span> <span
  m="100400">gradient</span> <span m="100820">descent</span> <span
  m="101300">algorithms.</span> <span m="102020">And</span> <span
  m="102140">then</span> <span m="102350">Professor</span> <span
  m="102830">Boyd</span> <span m="103250">is</span> <span
  m="103340">speaking</span> <span m="103820">here</span> <span
  m="104210">at</span> <span m="104330">4:30</span> <span m="105110">this</span>
  <span m="105350">afternoon.</span> <span m="106040">It's</span> <span
  m="106610">overwhelming.</span></p><p><span m="109330">So</span> <span
  m="109580">I'm</span> <span m="109820">going</span> <span m="110060">to</span>
  <span m="112010">talk</span> <span m="112430">today</span> <span
  m="112910">about</span> <span m="113780">several</span> <span
  m="114230">topics</span> <span m="115010">that</span> <span
  m="115280">are</span> <span m="117350">specific</span> <span
  m="119210">parts</span> <span m="119630">of</span> <span
  m="119780">optimization.</span> <span m="121250">Linear</span> <span
  m="121640">programming</span> <span m="122330">is</span> <span
  m="122510">a</span> <span m="122540">very</span> <span
  m="122870">famous</span> <span m="123560">part</span> <span
  m="123890">of</span> <span m="124010">optimization.</span> <span
  m="124910">I</span> <span m="125030">don't</span> <span m="125240">know</span>
  <span m="125390">if</span> <span m="125540">you've</span> <span
  m="125720">met</span> <span m="126020">it.</span> <span m="127170">I</span>
  <span m="128030">think</span> <span m="128389">it's</span> <span
  m="128690">worth</span> <span m="129169">knowing</span> <span
  m="130400">what</span> <span m="130699">the</span> <span
  m="131540">inputs</span> <span m="132140">are</span> <span
  m="133400">and</span> <span m="134030">what's</span> <span
  m="134520">the</span> <span m="134750">key</span> <span m="135440">fact</span>
  <span m="135980">about</span> <span m="136280">linear</span> <span
  m="136640">programming.</span> <span m="137270">And,</span> <span
  m="137420">of</span> <span m="137540">course,</span> <span
  m="137900">also,</span> <span m="138860">what</span> <span
  m="139100">are</span> <span m="139160">the</span> <span
  m="139310">algorithms.</span></p><p><span m="140870">That's</span> <span
  m="141170">usually</span> <span m="142280">what</span> <span
  m="142430">we</span> <span m="142550">want</span> <span m="142760">to</span>
  <span m="142850">know.</span> <span m="143150">What's</span> <span
  m="143480">the</span> <span m="143570">problem?</span> <span
  m="145460">What</span> <span m="145730">are</span> <span m="145790">the</span>
  <span m="145910">results,</span> <span m="146600">the</span> <span
  m="146690">mathematical</span> <span m="147440">results?</span> <span
  m="147980">And</span> <span m="148160">what</span> <span m="148370">are</span>
  <span m="148460">the</span> <span m="148610">computational</span> <span
  m="149690">tools?</span> <span m="150910">Yes,</span> <span
  m="151160">so</span> <span m="151370">that's</span> <span
  m="152030">very</span> <span m="152360">established.</span> <span
  m="153220">Max-flow</span> <span m="154130">min-cut</span> <span
  m="154880">is</span> <span m="155090">one</span> <span
  m="155390">specific</span> <span m="156110">linear</span> <span
  m="156500">programming</span> <span m="157200">that</span> <span
  m="157730">I</span> <span m="157820">think</span> <span
  m="158090">maybe</span> <span m="158990">would</span> <span
  m="159200">serve</span> <span m="159590">as</span> <span m="159770">the</span>
  <span m="159860">best</span> <span m="160190">example.</span></p><p><span
  m="161780">And</span> <span m="161990">then</span> <span
  m="162260">two-person</span> <span m="162980">games,</span> <span
  m="164900">have</span> <span m="165050">you</span> <span m="165200">met</span>
  <span m="165470">those?</span> <span m="166310">So</span> <span
  m="166550">would</span> <span m="166760">you</span> <span
  m="166880">know</span> <span m="167350">what</span> <span
  m="168020">the</span> <span m="168110">rules</span> <span
  m="168560">are</span> <span m="168830">in a</span> <span
  m="169010">two-person</span> <span m="169790">zero-sum</span> <span
  m="171020">game?</span> <span m="173330">In</span> <span
  m="173510">game</span> <span m="173870">theory,</span> <span
  m="174260">those</span> <span m="174590">are</span> <span
  m="174650">the</span> <span m="174920">ones</span> <span
  m="175430">that</span> <span m="175610">are</span> <span
  m="176840">clear--</span> <span m="177930">everything's</span> <span
  m="181970">well-established</span> <span m="183830">there.</span> <span
  m="184230">And,</span> <span m="184250">in</span> <span
  m="184370">fact,</span> <span m="185240">they're</span> <span
  m="185510">equivalent</span> <span m="185810">to</span> <span
  m="186110">a</span> <span m="186410">linear</span> <span
  m="186770">program.</span> <span m="187850">So</span> <span
  m="188030">that's</span> <span m="188300">why</span> <span
  m="188510">those</span> <span m="188780">two</span> <span
  m="189080">are</span> <span m="189170">coming</span> <span
  m="189560">in</span> <span m="189710">today.</span></p><p><span
  m="190640">And</span> <span m="190760">then</span> <span m="191960">the</span>
  <span m="192110">key</span> <span m="193040">fact</span> <span
  m="193550">about</span> <span m="194090">two-person</span> <span
  m="194810">games</span> <span m="195350">and</span> <span
  m="195530">about</span> <span m="195860">linear</span> <span
  m="196220">programming</span> <span m="196880">is</span> <span
  m="197150">duality.</span> <span m="197870">So</span> <span
  m="198470">if</span> <span m="198620">there's</span> <span
  m="198830">any</span> <span m="199070">word</span> <span m="199400">on</span>
  <span m="199550">that</span> <span m="199730">board,</span> <span
  m="200060">it's</span> <span m="200250">the</span> <span m="200330">one</span>
  <span m="200570">in</span> <span m="200750">capital</span> <span
  m="201200">letters</span> <span m="202310">that</span> <span
  m="202610">has</span> <span m="203450">math</span> <span
  m="204200">content.</span> <span m="205640">I'm</span> <span
  m="205820">just</span> <span m="206060">going</span> <span
  m="206200">to</span> <span m="206270">start</span> <span
  m="206630">with</span> <span m="206840">linear</span> <span
  m="207140">programming</span> <span m="208190">and</span> <span
  m="208310">then</span> <span m="213230">move</span> <span
  m="213560">on.</span></p><p><span m="215190">So</span> <span
  m="215390">what's</span> <span m="215660">a</span> <span
  m="217340">linear</span> <span m="217700">program?</span> <span
  m="217965">It's</span> <span m="218510">we're</span> <span
  m="218750">optimizing</span> <span m="219620">a</span> <span
  m="219680">linear</span> <span m="220220">cost</span> <span
  m="220670">function.</span> <span m="221610">So</span> <span
  m="221660">we're</span> <span m="222200">minimizing</span> <span
  m="223490">the</span> <span m="223760">cost</span> <span m="224450">c</span>
  <span m="224750">transpose</span> <span m="225590">x.</span> <span
  m="226580">So</span> <span m="226760">that</span> <span
  m="226970">vector</span> <span m="227420">x</span> <span m="227810">is</span>
  <span m="228050">the</span> <span m="228980">unknown</span> <span
  m="229430">that</span> <span m="229550">we're</span> <span
  m="229700">looking</span> <span m="230090">for,</span> <span
  m="230810">and</span> <span m="230960">this</span> <span
  m="231200">vector</span> <span m="231630">c</span> <span m="232010">is</span>
  <span m="232160">the</span> <span m="232310">cost</span> <span
  m="232760">vector.</span> <span m="233210">So</span> <span
  m="233480">that</span> <span m="233720">is</span> <span m="234200">c1</span>
  <span m="234980">x1</span> <span m="235780">plus,</span> <span
  m="236960">plus</span> <span m="237340">cn</span> <span
  m="237940">xn.</span></p><p><span m="239540">So</span> <span
  m="240050">you</span> <span m="240200">can</span> <span m="240380">see</span>
  <span m="240560">why</span> <span m="240740">it's</span> <span
  m="240860">called</span> <span m="241100">linear</span> <span
  m="241460">programming.</span> <span m="242450">The</span> <span
  m="242570">cost</span> <span m="243020">is</span> <span
  m="243170">linear.</span> <span m="244130">The</span> <span
  m="244250">constraints</span> <span m="245120">are</span> <span
  m="245240">also</span> <span m="245660">linear.</span> <span
  m="246560">So</span> <span m="246770">the</span> <span
  m="246890">constraints</span> <span m="248600">on</span> <span
  m="248870">x</span> <span m="254780">are</span> <span m="255710">a</span>
  <span m="255980">set</span> <span m="256310">of</span> <span
  m="256430">linear</span> <span m="256850">equations.</span> <span
  m="259820">Of</span> <span m="259940">course,</span> <span
  m="260360">I'm</span> <span m="260510">not</span> <span
  m="260720">thinking</span> <span m="261070">of</span> <span
  m="261290">A</span> <span m="261560">as</span> <span m="261800">being</span>
  <span m="262220">a</span> <span m="262430">square</span> <span
  m="263090">invertible</span> <span m="263480">matrix.</span> <span
  m="264070">No</span> <span m="264230">way.</span> <span m="265100">If</span>
  <span m="265280">it</span> <span m="265430">were,</span> <span
  m="265820">that</span> <span m="266060">would</span> <span
  m="266300">tell</span> <span m="266600">us</span> <span m="266750">what</span>
  <span m="266960">x</span> <span m="267230">had</span> <span
  m="267380">to</span> <span m="267470">be</span> <span m="267680">and</span>
  <span m="268190">our</span> <span m="268310">problem</span> <span
  m="268670">would</span> <span m="268850">be</span> <span
  m="269030">over.</span></p><p><span m="273350">We</span> <span
  m="273620">have</span> <span m="273980">n</span> <span
  m="274400">unknowns.</span> <span m="276630">This</span> <span
  m="276770">is</span> <span m="276920">m</span> <span m="277100">by</span>
  <span m="277340">n,</span> <span m="277580">of</span> <span
  m="277730">course.</span> <span m="279470">x</span> <span m="279860">is</span>
  <span m="280250">n</span> <span m="280490">by</span> <span
  m="280730">1.</span> <span m="281060">That's</span> <span
  m="281420">our</span> <span m="282470">unknown</span> <span
  m="282950">vector.</span> <span m="284000">And</span> <span
  m="284480">I'm</span> <span m="284750">thinking</span> <span
  m="285230">that</span> <span m="285440">m</span> <span m="285710">would</span>
  <span m="285950">be</span> <span m="286610">smaller</span> <span
  m="287090">than</span> <span m="287300">n.</span></p><p><span
  m="289520">But</span> <span m="289790">we</span> <span m="289910">do</span>
  <span m="290120">have</span> <span m="290330">constraints,</span> <span
  m="291050">and</span> <span m="291500">now</span> <span
  m="291860">comes</span> <span m="292250">the</span> <span
  m="292400">thing</span> <span m="292790">that</span> <span
  m="293000">makes</span> <span m="293870">linear</span> <span
  m="294230">programming</span> <span m="295580">not</span> <span
  m="296270">actually</span> <span m="296780">linear.</span> <span
  m="298280">And</span> <span m="298400">that's</span> <span
  m="298700">the</span> <span m="298820">constraint</span> <span
  m="300770">x</span> <span m="301670">greater or</span> <span m="302100">equal
  to</span> <span m="302390">0.</span> <span m="303410">And</span> <span
  m="304040">I've</span> <span m="304220">written</span> <span
  m="304550">that</span> <span m="304850">as</span> <span m="305060">a</span>
  <span m="305210">vector</span> <span m="305960">but</span> <span
  m="306200">that</span> <span m="306410">means</span> <span
  m="310200">x1</span> <span m="311390">greater</span> <span
  m="311740">or</span> <span m="311870">equal to</span> <span
  m="312110">0,</span> <span m="312640">on</span> <span m="312910">to</span>
  <span m="314120">xn</span> <span m="314840">greater or</span> <span
  m="315263">equal to</span> <span m="315686">0.</span> <span
  m="316110">So</span> <span m="316530">it's</span> <span m="316700">a</span>
  <span m="316790">vector</span> <span m="317270">inequality.</span></p><p><span
  m="319010">So</span> <span m="319250">we</span> <span m="319490">have</span>
  <span m="320630">minimizing</span> <span m="321660">a</span> <span
  m="321740">very</span> <span m="322100">simple</span> <span
  m="322520">function</span> <span m="324080">with</span> <span
  m="324770">pretty</span> <span m="325100">straightforward</span> <span
  m="325880">constraints</span> <span m="327110">but</span> <span
  m="327380">inequality</span> <span m="328170">constraints.</span> <span
  m="329570">So</span> <span m="330360">the</span> <span m="330920">set</span>
  <span m="331250">of--</span> <span m="332690">these</span> <span
  m="333170">two</span> <span m="333530">together</span> <span
  m="334130">are</span> <span m="334340">the</span> <span
  m="334490">constraints.</span> <span m="336210">And</span> <span
  m="336720">in</span> <span m="337100">linear</span> <span
  m="337490">algebra--</span> <span m="338060">in</span> <span
  m="338690">linear</span> <span m="338990">programming</span> <span
  m="339610">language</span> <span m="339990">this</span> <span
  m="340370">is</span> <span m="340520">called</span> <span m="340900">a</span>
  <span m="341720">feasible</span> <span m="343550">set</span> <span
  m="345710">of</span> <span m="346160">x's.</span> <span m="348680">It's</span>
  <span m="348970">the</span> <span m="349210">constraint</span> <span
  m="349890">set,</span> <span m="350680">capital</span> <span
  m="351070">K</span> <span m="351880">in</span> <span m="352060">the</span>
  <span m="352150">notes.</span></p><p><span m="354250">So</span> <span
  m="357310">let</span> <span m="357430">me</span> <span m="357550">draw</span>
  <span m="357760">a</span> <span m="357820">picture</span> <span
  m="358330">to</span> <span m="359530">show--</span> <span m="361660">or</span>
  <span m="362980">maybe</span> <span m="363250">I'll</span> <span
  m="363340">just</span> <span m="363610">ask.</span> <span
  m="363910">How</span> <span m="364030">many</span> <span m="364390">of</span>
  <span m="364570">you</span> <span m="364750">are</span> <span
  m="364930">already</span> <span m="365470">familiar</span> <span
  m="366040">with</span> <span m="366220">linear</span> <span
  m="366580">programming?</span> <span m="368060">Oh,</span> <span
  m="368290">quite</span> <span m="368650">a</span> <span m="368740">lot.</span>
  <span m="369700">So</span> <span m="369910">I</span> <span
  m="370060">won't</span> <span m="370690">belabor</span> <span
  m="371170">the</span> <span m="371320">point.</span> <span
  m="371900">But</span> <span m="371980">let</span> <span m="372160">me</span>
  <span m="372700">just</span> <span m="375340">draw</span> <span
  m="375640">a</span> <span m="375700">picture.</span></p><p><span
  m="376600">So</span> <span m="376840">my</span> <span
  m="377020">picture</span> <span m="377470">will</span> <span
  m="377680">be</span> <span m="379030">just</span> <span
  m="379360">here.</span> <span m="382340">So</span> <span
  m="382450">that's</span> <span m="383950">n</span> <span
  m="384130">equals</span> <span m="384460">3.</span> <span m="385730">So</span>
  <span m="385810">this</span> <span m="386020">is</span> <span
  m="386110">the</span> <span m="386260">x1,</span> <span m="387010">x2,</span>
  <span m="387520">x3</span> <span m="389260">space.</span> <span
  m="390880">And</span> <span m="391570">x</span> <span m="391880">greater
  or</span> <span m="392290">equal to</span> <span m="392620">0</span> <span
  m="392980">means</span> <span m="393380">what?</span> <span
  m="394450">It</span> <span m="394600">means</span> <span
  m="395080">that</span> <span m="395320">I'm</span> <span m="395590">in</span>
  <span m="395800">this</span> <span m="397390">1/8</span> <span
  m="398050">of</span> <span m="398200">this</span> <span
  m="398350">space,</span> <span m="398950">right?</span> <span
  m="400830">It's</span> <span m="401160">the</span> <span
  m="401370">non-negative--</span> <span m="403000">well,</span> <span
  m="403170">I</span> <span m="403260">would</span> <span m="403440">say</span>
  <span m="403650">quadrant</span> <span m="404310">but</span> <span
  m="404490">I</span> <span m="404610">really</span> <span
  m="404880">should</span> <span m="405120">say</span> <span
  m="405510">octant</span> <span m="406080">because</span> <span
  m="406530">it's</span> <span m="408190">1/8</span> <span m="409390">of</span>
  <span m="409710">the</span> <span m="409830">full</span> <span
  m="410190">3D</span> <span m="410760">space.</span></p><p><span
  m="411630">So</span> <span m="411780">I'm</span> <span m="411960">in</span>
  <span m="412140">here.</span> <span m="413250">And</span> <span
  m="413400">then</span> <span m="414000">maybe</span> <span m="414360">I</span>
  <span m="414510">have</span> <span m="414930">m</span> <span
  m="415170">as</span> <span m="415380">maybe</span> <span
  m="415710">just</span> <span m="415980">one</span> <span
  m="416490">constraint.</span> <span m="419250">So</span> <span
  m="419460">let</span> <span m="419670">me</span> <span m="420990">take</span>
  <span m="421300">the</span> <span m="421440">cost</span> <span
  m="421890">to</span> <span m="422010">be,</span> <span m="422820">say,</span>
  <span m="423450">x1</span> <span m="424140">plus</span> <span
  m="425040">2</span> <span m="425310">x2</span> <span m="426450">plus</span>
  <span m="426840">5</span> <span m="427215">x3,</span> <span
  m="428880">say.</span> <span m="430360">And</span> <span m="430970">the</span>
  <span m="431130">constraint,</span> <span m="431940">I'm</span> <span
  m="432120">just</span> <span m="432360">going</span> <span
  m="432490">to</span> <span m="432570">have</span> <span m="432750">one</span>
  <span m="433020">equation--</span> <span m="434100">x1</span> <span
  m="434790">plus</span> <span m="435240">x2.</span> <span m="436110">Let</span>
  <span m="436230">me</span> <span m="436380">make</span> <span
  m="436680">it</span> <span m="437400">easy,</span> <span
  m="439200">make</span> <span m="439440">that</span> <span
  m="439710">constraint</span> <span m="440400">an</span> <span
  m="440520">easy</span> <span m="440850">one</span> <span
  m="441550">to--</span> <span m="442380">so</span> <span m="444324">this</span>
  <span m="444750">is</span> <span m="444930">what</span> <span
  m="445180">we</span> <span m="445300">want</span> <span m="445500">to</span>
  <span m="445610">minimize.</span> <span m="447960">And</span> <span
  m="448410">that's</span> <span m="448800">what</span> <span
  m="450330">we</span> <span m="450600">have</span> <span m="450900">to</span>
  <span m="451470">satisfy,</span> <span m="452700">as</span> <span
  m="452880">well</span> <span m="453210">as</span> <span m="453630">x</span>
  <span m="453880">greater or</span> <span m="454200">equal to</span> <span
  m="454500">0.</span></p><p><span m="455070">So</span> <span
  m="455310">that's</span> <span m="455670">a</span> <span
  m="455790">plane.</span> <span m="458150">One</span> <span
  m="458390">equation</span> <span m="459020">gives</span> <span
  m="459290">us</span> <span m="459470">a</span> <span m="459530">plane</span>
  <span m="460130">in</span> <span m="460280">R3.</span> <span
  m="461410">The</span> <span m="461720">plane</span> <span
  m="462260">would</span> <span m="462470">go</span> <span
  m="462770">through--</span> <span m="467222">would</span> <span
  m="467690">hit</span> <span m="468230">the</span> <span m="473150">axes</span>
  <span m="474380">at</span> <span m="475140">3, 0, 0.</span> <span
  m="477110">And</span> <span m="477710">so</span> <span m="478100">the</span>
  <span m="478940">min--</span> <span m="479990">the</span> <span
  m="480380">point</span> <span m="480710">has</span> <span m="480950">to</span>
  <span m="481100">lie</span> <span m="481400">on</span> <span
  m="481520">that</span> <span m="481760">plane.</span> <span
  m="482840">And</span> <span m="483250">it</span> <span m="483350">has</span>
  <span m="483590">to</span> <span m="483710">lie</span> <span
  m="484070">in</span> <span m="484190">the</span> <span
  m="484400">octant,</span> <span m="485000">so</span> <span
  m="485240">that</span> <span m="485450">plane</span> <span
  m="485960">is</span> <span m="486170">chopped</span> <span
  m="486590">off</span> <span m="487250">to</span> <span m="487400">be</span>
  <span m="487580">a</span> <span m="487640">triangle.</span> <span
  m="488960">This</span> <span m="489200">is</span> <span m="489350">a</span>
  <span m="489440">good</span> <span m="490010">visualization</span> <span
  m="491090">of</span> <span m="491840">linear</span> <span
  m="492200">programming.</span></p><p><span m="493820">And</span> <span
  m="493970">what's</span> <span m="494270">the</span> <span
  m="494390">conclusion?</span> <span m="495470">Well,</span> <span
  m="496040">our</span> <span m="496280">cost</span> <span m="496760">is</span>
  <span m="496940">linear.</span> <span m="499880">So</span> <span
  m="501040">the</span> <span m="501660">result</span> <span
  m="502220">is</span> <span m="502940">that</span> <span m="503120">one</span>
  <span m="503390">of</span> <span m="503510">these</span> <span
  m="503750">three</span> <span m="504200">corners</span> <span
  m="504800">is</span> <span m="504980">the</span> <span
  m="505070">winner.</span> <span m="507860">It</span> <span
  m="508040">could</span> <span m="508340">happen.</span> <span
  m="509040">It</span> <span m="509120">could</span> <span
  m="509420">happen</span> <span m="509840">that</span> <span
  m="510020">maybe</span> <span m="510440">I</span> <span m="510620">have</span>
  <span m="510770">equal</span> <span m="511190">values</span> <span
  m="511850">on</span> <span m="512030">those</span> <span m="512330">two</span>
  <span m="512570">corners,</span> <span m="513409">and</span> <span
  m="513559">therefore</span> <span m="514520">all</span> <span
  m="514730">the</span> <span m="514820">way</span> <span
  m="515030">along</span> <span m="515480">would</span> <span
  m="515690">be</span> <span m="515900">also</span> <span
  m="516320">winners.</span></p><p><span m="517309">But</span> <span
  m="517730">when</span> <span m="517970">I</span> <span m="518039">have</span>
  <span m="518150">a</span> <span m="518210">linear</span> <span
  m="518600">function,</span> <span m="519559">it's</span> <span
  m="519770">a</span> <span m="519830">maximum</span> <span m="520520">at</span>
  <span m="520730">the</span> <span m="520880">ends.</span> <span
  m="521960">And</span> <span m="522110">these</span> <span
  m="522559">are</span> <span m="522770">the</span> <span
  m="522950">ends,</span> <span m="523520">those</span> <span
  m="523850">three</span> <span m="524300">corners.</span> <span
  m="526370">So</span> <span m="527150">3, 0, 0,</span> <span m="529670">0, 3,
  0,</span> <span m="531650">or</span> <span m="532280">0, 0, 3</span> <span
  m="534260">are</span> <span m="534470">the</span> <span
  m="534650">three</span> <span m="535010">corners,</span> <span
  m="536330">and</span> <span m="536450">one</span> <span m="536690">of</span>
  <span m="536750">those</span> <span m="537080">is</span> <span
  m="537230">the</span> <span m="537320">winner</span> <span
  m="537830">and</span> <span m="538340">the</span> <span
  m="538460">problem</span> <span m="538910">is</span> <span
  m="539000">solved.</span></p><p><span m="539640">And,</span> <span
  m="540350">in</span> <span m="540470">fact,</span> <span m="540800">for</span>
  <span m="540950">this</span> <span m="541250">case,</span> <span
  m="541710">since</span> <span m="542000">I'm</span> <span
  m="542120">minimizing,</span> <span m="543290">I</span> <span
  m="543380">guess</span> <span m="543650">it</span> <span
  m="543710">would</span> <span m="543890">be</span> <span
  m="544040">that</span> <span m="544340">corner</span> <span
  m="544790">that</span> <span m="544940">wins.</span> <span
  m="546230">So</span> <span m="546500">let</span> <span m="546650">me</span>
  <span m="546920">give</span> <span m="547130">it</span> <span
  m="547220">a</span> <span m="547280">star,</span> <span m="547880">not</span>
  <span m="548120">an</span> <span m="548310">x.</span> <span
  m="549080">Yes.</span> <span m="550480">3, 0, 0</span> <span
  m="551600">because</span> <span m="551810">that--</span> <span
  m="552980">oh.</span> <span m="553600">No,</span> <span
  m="553900">that's</span> <span m="554260">3.</span> <span m="556100">So</span>
  <span m="556340">the</span> <span m="556490">value</span> <span
  m="557630">turned</span> <span m="557930">out</span> <span
  m="558080">to</span> <span m="558200">be</span> <span m="558380">3</span>
  <span m="559170">at</span> <span m="561490">the</span> <span
  m="561980">point</span> <span m="562100">3, 0, 0.</span> <span
  m="564980">And</span> <span m="565070">that's</span> <span m="565400">x</span>
  <span m="565750">star.</span> <span m="570290">Good.</span> <span
  m="570875">Good,</span> <span m="571190">good, good.</span></p><p><span
  m="573770">What</span> <span m="574580">more</span> <span m="574880">do</span>
  <span m="575030">I</span> <span m="575180">want</span> <span
  m="575360">to</span> <span m="575450">do,</span> <span m="575660">I</span>
  <span m="575840">said?</span> <span m="576290">Yes.</span></p><p><span
  m="577530">AUDIENCE:</span> <span m="577625">Shouldn't</span> <span
  m="577720">it</span> <span m="577870">be</span> <span m="578030">at
  point</span> <span m="578110">0, 0, 3?</span></p><p><span m="581780">GILBERT
  STRANG:</span> <span m="581945">Should</span> <span m="582110">it</span> <span
  m="582320">be--</span> <span m="583650">oh,</span> <span m="584010">no.</span>
  <span m="584870">0, 0, 3</span> <span m="586300">would</span> <span
  m="586470">have</span> <span m="586700">x3</span> <span m="587300">is</span>
  <span m="587470">3.</span> <span m="587730">That's</span> <span
  m="587960">fine.</span> <span m="588350">It</span> <span
  m="588440">gives</span> <span m="588710">us</span> <span m="588890">a
  chance,</span> <span m="589320">I think.</span> <span m="589630">That
  would</span> <span m="589940">give</span> <span m="590250">me</span> <span
  m="590460">a</span> <span m="590720">cost of</span> <span
  m="590990">15.</span> <span m="592030">This</span> <span
  m="592340">would</span> <span m="592460">give</span> <span
  m="592610">me</span> <span m="592740">a</span> <span m="592820">cost</span>
  <span m="593180">of</span> <span m="593270">6,</span> <span
  m="593690">and</span> <span m="593780">that</span> <span
  m="593930">would</span> <span m="594080">give</span> <span
  m="594200">me</span> <span m="594340">a</span> <span m="594410">cost of</span>
  <span m="594800">3.</span> <span m="595370">Yes.</span></p><p><span
  m="598690">It's</span> <span m="600020">obvious</span> <span
  m="600490">that</span> <span m="600580">if</span> <span m="600860">we</span>
  <span m="600980">could</span> <span m="601190">enumerate</span> <span
  m="601820">all</span> <span m="601940">the</span> <span
  m="602060">corners,</span> <span m="602750">we</span> <span
  m="602930">would</span> <span m="603230">have</span> <span m="603530">a</span>
  <span m="604490">super</span> <span m="604910">fast</span> <span
  m="607070">way</span> <span m="607460">to</span> <span m="607580">get</span>
  <span m="607820">the</span> <span m="607970">answer.</span> <span
  m="609290">But</span> <span m="609530">the</span> <span
  m="609710">trouble</span> <span m="610130">is,</span> <span
  m="610650">of</span> <span m="610670">course,</span> <span
  m="611190">that</span> <span m="611330">for</span> <span
  m="612080">large</span> <span m="612560">values</span> <span
  m="613820">of</span> <span m="614030">m</span> <span m="614260">and n,</span>
  <span m="614630">there</span> <span m="614900">are</span> <span
  m="615140">exponentially</span> <span m="616010">many</span> <span
  m="616310">corners,</span> <span m="617810">and</span> <span
  m="619040">we</span> <span m="619220">don't</span> <span
  m="619400">want</span> <span m="619550">to</span> <span m="619610">see</span>
  <span m="619880">them</span> <span m="620060">all.</span> <span
  m="621830">So</span> <span m="623630">that's</span> <span
  m="623930">what</span> <span m="624440">makes</span> <span
  m="624950">linear</span> <span m="625310">programming</span> <span
  m="627170">take</span> <span m="627470">time</span> <span
  m="629180">and</span> <span m="629600">need</span> <span
  m="630050">ideas.</span></p><p><span m="631200">So,</span> <span
  m="631400">for</span> <span m="631670">algorithms,</span> <span
  m="633060">there</span> <span m="633080">are</span> <span
  m="633140">two</span> <span m="633410">types</span> <span m="633800">of</span>
  <span m="633950">algorithms,</span> <span m="635270">two</span> <span
  m="635510">types</span> <span m="636650">of</span> <span
  m="637460">codes</span> <span m="638010">that</span> <span
  m="638200">solve</span> <span m="638570">these.</span> <span
  m="639370">The</span> <span m="639620">older,</span> <span
  m="641120">well-established</span> <span m="642170">ones</span> <span
  m="643080">are</span> <span m="644142">the--</span> <span m="645320">so</span>
  <span m="645920">one</span> <span m="646250">way</span> <span
  m="646760">is</span> <span m="647110">the</span> <span
  m="647240">simplex</span> <span m="647990">method,</span> <span
  m="654010">which</span> <span m="654310">finds</span> <span
  m="654790">a</span> <span m="654880">corner.</span> <span m="656860">We</span>
  <span m="657010">know</span> <span m="657340">the</span> <span
  m="658660">optimum</span> <span m="659820">one of</span> <span
  m="660100">the</span> <span m="660310">corners.</span> <span
  m="660730">So</span> <span m="661630">it will</span> <span
  m="661870">find</span> <span m="662290">one</span> <span
  m="662620">corner,</span> <span m="663790">and</span> <span m="663940">it
  will</span> <span m="664060">go</span> <span m="664360">to</span> <span
  m="666280">the</span> <span m="666340">next</span> <span
  m="666760">corner.</span></p><p><span m="669970">So</span> <span
  m="670270">if</span> <span m="670420">it</span> <span m="670580">starts</span>
  <span m="673600">at</span> <span m="673900">one</span> <span
  m="674320">of</span> <span m="674380">these</span> <span
  m="674680">corners,</span> <span m="675280">it</span> <span
  m="675370">will</span> <span m="675580">travel</span> <span
  m="676060">along</span> <span m="678370">an</span> <span
  m="678550">edge</span> <span m="679420">that</span> <span
  m="679660">lowers</span> <span m="680200">the</span> <span
  m="680320">cost.</span> <span m="681610">And</span> <span m="681760">it</span>
  <span m="681880">has</span> <span m="682090">to</span> <span
  m="682240">stop</span> <span m="682660">at</span> <span m="682750">the</span>
  <span m="682930">end</span> <span m="683140">because</span> <span
  m="683470">it's</span> <span m="683620">linear.</span> <span
  m="685050">The</span> <span m="685630">cost</span> <span
  m="685960">will</span> <span m="686110">keep</span> <span
  m="686350">going</span> <span m="686650">down</span> <span
  m="686920">and</span> <span m="687010">going</span> <span
  m="687280">down</span> <span m="687610">until</span> <span
  m="687970">it</span> <span m="690580">bumps</span> <span
  m="690970">into</span> <span m="691300">the</span> <span m="691570">end</span>
  <span m="691750">point,</span> <span m="692200">and</span> <span
  m="692290">then</span> <span m="692470">it</span> <span
  m="692530">can't</span> <span m="692830">go</span> <span
  m="693010">further.</span> <span m="693910">And</span> <span
  m="694210">then</span> <span m="694570">we</span> <span
  m="694780">would,</span> <span m="695140">from</span> <span
  m="695410">that</span> <span m="695620">next</span> <span
  m="695980">corner,</span> <span m="696760">we</span> <span
  m="696940">would</span> <span m="697120">go</span> <span m="697330">to</span>
  <span m="697470">the</span> <span m="697580">next</span> <span
  m="697930">corner.</span></p><p><span m="702940">Each</span> <span
  m="703270">time,</span> <span m="704380">it's</span> <span
  m="704560">like</span> <span m="704830">steepest</span> <span
  m="705370">descent</span> <span m="705940">on</span> <span
  m="706720">the</span> <span m="706900">edges.</span> <span
  m="709090">From</span> <span m="709420">the</span> <span
  m="709540">first</span> <span m="709870">corner,</span> <span
  m="710230">we</span> <span m="710380">go</span> <span m="710620">the</span>
  <span m="710770">steepest</span> <span m="711370">way</span> <span
  m="712550">till</span> <span m="712870">we</span> <span
  m="713200">can't</span> <span m="713530">go</span> <span
  m="713710">further,</span> <span m="714160">we've</span> <span
  m="714370">hit</span> <span m="714550">another</span> <span
  m="714940">corner.</span> <span m="716320">And</span> <span
  m="716440">we</span> <span m="716620">recompute</span> <span
  m="717370">the</span> <span m="717430">linear</span> <span
  m="717790">algebra,</span> <span m="719020">find</span> <span
  m="719410">which</span> <span m="719980">direction</span> <span
  m="720520">is</span> <span m="720670">steepest</span> <span
  m="721310">from</span> <span m="721420">there.</span></p><p><span
  m="723880">So</span> <span m="724060">that's</span> <span
  m="724330">the</span> <span m="724450">idea</span> <span m="724810">of</span>
  <span m="724900">the</span> <span m="725020">simplex</span> <span
  m="725620">method,</span> <span m="726490">which</span> <span
  m="726760">was</span> <span m="727000">invented</span> <span
  m="727690">by</span> <span m="728860">Dantzig.</span> <span
  m="735900">And</span> <span m="736740">the</span> <span
  m="736920">algebra</span> <span m="737430">is</span> <span
  m="738330">not</span> <span m="738600">going</span> <span m="738780">to</span>
  <span m="738840">be</span> <span m="739110">in</span> <span
  m="739260">today's</span> <span m="739740">lecture</span> <span
  m="740310">but</span> <span m="740520">it's</span> <span
  m="741330">straightforward.</span> <span m="743020">Well,</span> <span
  m="743550">people</span> <span m="743940">have</span> <span
  m="744120">to</span> <span m="744240">optimize</span> <span
  m="744780">it</span> <span m="744870">because</span> <span
  m="745080">that's</span> <span m="745340">a</span> <span
  m="745470">highly</span> <span m="746610">frequently</span> <span
  m="747210">used</span> <span m="747600">method.</span> <span
  m="748200">Yes.</span></p><p><span m="749580">But</span> <span
  m="749880">then,</span> <span m="751560">about</span> <span
  m="752250">20</span> <span m="752580">years</span> <span
  m="752940">later</span> <span m="753360">maybe,</span> <span
  m="754460">or</span> <span m="754590">30,</span> <span m="755100">I</span>
  <span m="755250">remember</span> <span m="755730">going</span> <span
  m="756040">to</span> <span m="756210">a</span> <span m="756270">lecture</span>
  <span m="756690">in</span> <span m="756810">downtown</span> <span
  m="757380">Boston</span> <span m="758340">by</span> <span
  m="759400">Karmarkar.</span> <span m="760980">So</span> <span
  m="761220">I</span> <span m="761340">have</span> <span m="761550">to</span>
  <span m="761700">put</span> <span m="762390">his</span> <span
  m="762630">name</span> <span m="763020">down--</span> <span
  m="764360">Karmarkar.</span> <span m="770670">And</span> <span
  m="771180">he</span> <span m="772950">was</span> <span m="773310">in</span>
  <span m="773490"><i>The</i></span> <span m="773970"><i>New</i></span> <span
  m="774120"><i>York</i></span> <span m="774300"><i>Times,</i></span> <span
  m="774810">all</span> <span m="774990">the</span> <span
  m="775110">newspapers,</span> <span m="775950">so</span> <span
  m="776250">it</span> <span m="776370">was</span> <span m="776640">a</span>
  <span m="776700">big</span> <span m="777000">deal.</span></p><p><span
  m="778890">He</span> <span m="779280">had</span> <span m="781080">an</span>
  <span m="781230">alternative</span> <span m="782370">algorithm.</span> <span
  m="784190">And</span> <span m="786500">the</span> <span
  m="786770">exact</span> <span m="787250">algorithm</span> <span
  m="788270">he</span> <span m="788690">proposed</span> <span
  m="789860">hasn't</span> <span m="791090">survived</span> <span
  m="791810">until</span> <span m="792140">today</span> <span
  m="793160">but</span> <span m="793520">the</span> <span m="793700">idea</span>
  <span m="794210">has.</span> <span m="795200">And</span> <span
  m="795350">the</span> <span m="795470">idea</span> <span m="795980">was</span>
  <span m="796490">to</span> <span m="796640">go</span> <span
  m="797150">to</span> <span m="797330">travel</span> <span
  m="797900">inside</span> <span m="799670">the</span> <span
  m="800210">feasible</span> <span m="800900">set</span> <span
  m="801290">and</span> <span m="801410">not</span> <span
  m="801920">around</span> <span m="802280">the</span> <span
  m="802430">edges.</span> <span m="803420">So</span> <span
  m="803600">his</span> <span m="803810">idea--</span> <span
  m="804540">because</span> <span m="805250">in</span> <span
  m="805820">here,</span> <span m="807250">would</span> <span
  m="807470">maybe</span> <span m="807800">travel</span> <span
  m="808280">down</span> <span m="808760">near</span> <span
  m="809120">that</span> <span m="809420">edge,</span> <span
  m="809870">start</span> <span m="810320">again,</span> <span
  m="810800">travel</span> <span m="811310">again.</span> <span
  m="811670">So</span> <span m="811850">it's</span> <span
  m="812360">steepest</span> <span m="812870">descent</span> <span
  m="815421">in</span> <span m="815810">the</span> <span
  m="817280">constraint</span> <span m="817890">set,</span> <span
  m="818220">the</span> <span m="818340">feasible</span> <span
  m="818900">set.</span> <span m="819920">And</span> <span m="820640">you</span>
  <span m="820820">can</span> <span m="821000">use</span> <span
  m="821270">calculus</span> <span m="824966">and</span> <span
  m="825440">this</span> <span m="825770">idea.</span></p><p><span
  m="826310">So</span> <span m="826550">this</span> <span m="827000">is</span>
  <span m="828530">interior</span> <span m="830000">point</span> <span
  m="830390">method.</span> <span m="831440">So</span> <span
  m="831740">I'll</span> <span m="832070">just</span> <span
  m="832400">use</span> <span m="832700">the</span> <span m="832790">word</span>
  <span m="833060">interior.</span> <span m="834440">That's</span> <span
  m="834860">telling</span> <span m="835310">us</span> <span
  m="835580">that</span> <span m="835750">we're</span> <span
  m="839180">inside</span> <span m="840110">the</span> <span
  m="840230">feasible</span> <span m="840740">set.</span> <span
  m="841550">We</span> <span m="841700">don't</span> <span
  m="842450">hit,</span> <span m="842960">come</span> <span
  m="843350">all</span> <span m="843500">the</span> <span m="843620">way</span>
  <span m="843800">to</span> <span m="843920">the</span> <span
  m="844040">boundary</span> <span m="844490">intentionally,</span> <span
  m="845800">because</span> <span m="846110">we</span> <span
  m="846290">want</span> <span m="846530">room</span> <span m="846920">to</span>
  <span m="847070">move,</span> <span m="848120">and</span> <span
  m="848375">to</span> <span m="848630">find</span> <span
  m="849020">derivatives,</span> <span m="849800">and</span> <span
  m="849950">to</span> <span m="850100">use</span> <span
  m="850490">Newton's</span> <span m="851000">method</span> <span
  m="851450">to</span> <span m="852020">minimize.</span></p><p><span
  m="853780">You</span> <span m="853910">choose</span> <span m="854300">a</span>
  <span m="854420">search</span> <span m="854810">direction,</span> <span
  m="855380">just</span> <span m="855710">as</span> <span m="856250">all</span>
  <span m="856520">of</span> <span m="856670">optimization</span> <span
  m="857930">does.</span> <span m="858950">And</span> <span m="859190">in</span>
  <span m="859340">that</span> <span m="859580">search</span> <span
  m="859940">direction,</span> <span m="860540">you</span> <span
  m="860780">track</span> <span m="861260">it</span> <span m="861560">and</span>
  <span m="862980">you</span> <span m="863240">stop</span> <span
  m="863690">before</span> <span m="864110">you</span> <span
  m="864800">bump</span> <span m="865130">into</span> <span
  m="865490">the</span> <span m="866360">edge</span> <span m="866660">of</span>
  <span m="866780">the</span> <span m="866900">feasible</span> <span
  m="867460">set.</span> <span m="867800">And</span> <span
  m="867890">then</span> <span m="868160">you</span> <span
  m="868490">compute</span> <span m="868910">derivatives</span> <span
  m="869600">again.</span> <span m="870010">So</span> <span
  m="870200">you</span> <span m="870350">can</span> <span m="870530">use</span>
  <span m="870770">calculus.</span></p><p><span m="872270">And</span> <span
  m="873290">it's</span> <span m="873530">a</span> <span
  m="873590">method</span> <span m="874040">that--</span> <span
  m="875120">it's</span> <span m="875330">an</span> <span m="875480">idea</span>
  <span m="875930">that--</span> <span m="877130">the</span> <span
  m="877280">interior</span> <span m="877910">idea</span> <span
  m="878360">came</span> <span m="878720">before</span> <span
  m="879600">Karmarkar.</span> <span m="880760">But</span> <span
  m="881000">he</span> <span m="882110">got</span> <span m="882890">super</span>
  <span m="883340">publicity,</span> <span m="884210">so</span> <span
  m="884570">it</span> <span m="884720">really</span> <span
  m="885110">got</span> <span m="885380">attention,</span> <span
  m="886460">got</span> <span m="886670">new</span> <span
  m="887000">thinking.</span> <span m="888020">And</span> <span
  m="888500">new</span> <span m="888800">ideas</span> <span
  m="889310">came</span> <span m="890720">partly</span> <span
  m="891140">from</span> <span m="891500">people</span> <span
  m="891860">at</span> <span m="891970">MIT.</span></p><p><span
  m="896140">And</span> <span m="896420">these</span> <span
  m="896720">two</span> <span m="896930">are</span> <span m="897020">now</span>
  <span m="897710">still</span> <span m="898490">locked</span> <span
  m="898940">in</span> <span m="899120">competition.</span> <span
  m="901180">One</span> <span m="901670">hasn't</span> <span
  m="903860">beaten</span> <span m="904160">the</span> <span
  m="904310">other</span> <span m="905740">in</span> <span m="905960">all</span>
  <span m="906170">problems.</span> <span m="906710">So</span> <span
  m="909530">linear</span> <span m="909890">programming</span> <span
  m="910550">is</span> <span m="911120">here.</span> <span m="911390">But</span>
  <span m="911600">then,</span> <span m="912350">for</span> <span
  m="912530">nonlinear</span> <span m="913130">programming,</span> <span
  m="913760">quadratic</span> <span m="914480">programming,</span> <span
  m="915200">where</span> <span m="915350">the</span> <span
  m="915500">cost</span> <span m="915950">is</span> <span
  m="916130">quadratic,</span> <span m="917330">nonlinear</span> <span
  m="917960">programming,</span> <span m="919430">semi-definite</span> <span
  m="920600">programming--</span> <span m="921320">that's</span> <span
  m="921620">where</span> <span m="922190">you</span> <span
  m="922280">have</span> <span m="922400">a</span> <span
  m="922460">matrix</span> <span m="923180">unknown</span> <span
  m="924090">and</span> <span m="924260">matrix</span> <span
  m="924890">constraints--</span> <span m="927200">those</span> <span
  m="927560">are</span> <span m="927650">all--</span> <span
  m="929360">the</span> <span m="929840">more</span> <span
  m="930050">complicated</span> <span m="930800">you</span> <span
  m="930920">get,</span> <span m="931250">the</span> <span
  m="931370">more</span> <span m="931640">it</span> <span
  m="931730">tends</span> <span m="932120">to</span> <span m="932270">be</span>
  <span m="934010">interior</span> <span m="934640">point</span> <span
  m="934970">methods.</span></p><p><span m="935960">That's</span> <span
  m="936230">a</span> <span m="936320">summary</span> <span m="936890">of</span>
  <span m="937670">linear</span> <span m="938000">programming.</span> <span
  m="941890">Now</span> <span m="942100">I'd</span> <span m="942250">like</span>
  <span m="942400">to</span> <span m="942490">give</span> <span
  m="942700">an</span> <span m="942820">example.</span> <span
  m="944500">And</span> <span m="944620">then</span> <span m="944830">I</span>
  <span m="944920">haven't</span> <span m="945220">told</span> <span
  m="945580">you</span> <span m="945700">the</span> <span
  m="945820">main--</span> <span m="946390">well,</span> <span
  m="946690">let</span> <span m="946840">me</span> <span m="946960">tell</span>
  <span m="947170">you</span> <span m="947290">the</span> <span
  m="947380">main</span> <span m="947620">fact</span> <span
  m="947950">about</span> <span m="948160">duality.</span> <span
  m="951430">This</span> <span m="951730">is</span> <span
  m="951880">really--</span> <span m="952730">and</span> <span
  m="952930">I'll</span> <span m="953050">write</span> <span
  m="953320">that</span> <span m="953530">maybe</span> <span
  m="953830">here</span> <span m="954580">next</span> <span m="954880">to</span>
  <span m="955000">it.</span></p><p><span m="958550">So</span> <span
  m="959190">duality</span> <span m="959665">is</span> <span
  m="959990">there's</span> <span m="960290">a</span> <span
  m="960350">dual</span> <span m="960800">program,</span> <span m="961260">a
  dual</span> <span m="962780">LP.</span> <span m="965230">And</span> <span
  m="965390">that</span> <span m="965570">dual</span> <span m="966020">is</span>
  <span m="966230">going</span> <span m="966350">to</span> <span
  m="966530">do</span> <span m="966770">a</span> <span m="968030">maximum</span>
  <span m="968900">instead</span> <span m="969260">of</span> <span
  m="969350">a</span> <span m="969410">minimum</span> <span
  m="972770">And</span> <span m="973070">the</span> <span m="974210">cost</span>
  <span m="975010">is</span> <span m="975830">going</span> <span
  m="976040">to</span> <span m="976160">involve</span> <span
  m="977000">the</span> <span m="977420">b</span> <span m="978410">from</span>
  <span m="978710">the</span> <span m="979130">primal</span> <span
  m="979580">problem.</span> <span m="980030">So</span> <span
  m="980240">this</span> <span m="980450">is</span> <span m="980600">now</span>
  <span m="980870">called</span> <span m="981200">the</span> <span
  m="981800">primal</span> <span m="982340">problem,</span> <span
  m="982790">and</span> <span m="982910">this</span> <span m="983120">is</span>
  <span m="983300">its</span> <span m="983490">dual.</span></p><p><span
  m="984980">So</span> <span m="985220">they're</span> <span
  m="985400">twin</span> <span m="985880">problems.</span> <span
  m="987320">They</span> <span m="987440">use</span> <span m="987740">the</span>
  <span m="987890">same</span> <span m="988280">data</span> <span
  m="988670">but</span> <span m="989450">quite</span> <span
  m="989660">differently.</span> <span m="990230">It's</span> <span
  m="990380">like</span> <span m="990620">transposing</span> <span
  m="991550">things.</span> <span m="993030">So</span> <span
  m="993320">let's</span> <span m="993860">call it</span> <span
  m="994130">the</span> <span m="994250">unknown</span> <span
  m="994730">y.</span> <span m="996890">So</span> <span m="997220">for</span>
  <span m="999370">y1</span> <span m="1000730">to</span> <span
  m="1001330">ym,</span> <span m="1003430">I</span> <span
  m="1003550">guess,</span> <span m="1004840">because</span> <span
  m="1005180">b,</span> <span m="1005980">the</span> <span
  m="1006100">right-hand</span> <span m="1006640">side</span> <span
  m="1007030">over</span> <span m="1007270">here,</span> <span
  m="1008110">is</span> <span m="1008980">m</span> <span m="1009280">by</span>
  <span m="1009520">1.</span> <span m="1013240">So</span> <span
  m="1013480">that's</span> <span m="1013860">maximize</span> <span
  m="1014680">that</span> <span m="1016270">subject</span> <span
  m="1016750">to--</span> <span m="1017050">what</span> <span
  m="1017320">are</span> <span m="1017410">the</span> <span
  m="1017530">constraints?</span></p><p><span m="1019190">Well,</span> <span
  m="1019420">the</span> <span m="1019540">cost</span> <span
  m="1019960">function</span> <span m="1020410">over</span> <span
  m="1020650">here,</span> <span m="1021010">c,</span> <span
  m="1021550">the</span> <span m="1021670">cost</span> <span
  m="1022030">vector,</span> <span m="1023080">goes</span> <span
  m="1023440">into</span> <span m="1023710">the</span> <span
  m="1023830">constraints.</span> <span m="1026260">And</span> <span
  m="1026319">I</span> <span m="1026440">think</span> <span
  m="1026880">the</span> <span m="1027310">greater</span> <span
  m="1027595">or</span> <span m="1027880">equal</span> <span
  m="1028240">sign</span> <span m="1029200">probably</span> <span
  m="1029740">becomes</span> <span m="1030220">a</span> <span
  m="1030310">less</span> <span m="1030710">or</span> <span
  m="1030730">equal</span> <span m="1031030">to</span> <span
  m="1031180">sign.</span> <span m="1032190">The</span> <span
  m="1032349">A</span> <span m="1032709">gets</span> <span
  m="1033069">transposed.</span> <span m="1035650">I</span> <span
  m="1035800">think</span> <span m="1036099">that's</span> <span
  m="1036339">probably</span> <span m="1037869">the</span> <span
  m="1038140">constraint</span> <span m="1038980">in</span> <span
  m="1039220">the</span> <span m="1039369">dual.</span> <span
  m="1040660">And</span> <span m="1041050">it</span> <span
  m="1041380">happens</span> <span m="1041890">it</span> <span
  m="1041980">doesn't</span> <span m="1042339">need</span> <span
  m="1042640">y.</span> <span m="1043020">We</span> <span
  m="1043180">don't</span> <span m="1043450">have</span> <span
  m="1043630">y</span> <span m="1044030">greater or</span> <span
  m="1044430">equal to</span> <span m="1044740">0</span> <span
  m="1045130">over</span> <span m="1045369">here.</span></p><p><span
  m="1046690">So</span> <span m="1046900">that's</span> <span
  m="1047170">a</span> <span m="1047260">dual</span> <span
  m="1047589">problem.</span> <span m="1048820">It</span> <span
  m="1049030">has</span> <span m="1049600">a</span> <span
  m="1049980">linear</span> <span m="1050620">cost.</span> <span
  m="1051910">It</span> <span m="1052090">has</span> <span
  m="1052810">linear</span> <span m="1053530">inequality</span> <span
  m="1054370">constraints.</span> <span m="1055720">It</span> <span
  m="1055930">can</span> <span m="1056110">be</span> <span
  m="1056260">solved</span> <span m="1056680">by</span> <span
  m="1056890">the</span> <span m="1057010">simplex</span> <span
  m="1057610">method.</span> <span m="1058480">You</span> <span
  m="1058630">could</span> <span m="1058780">choose</span> <span
  m="1059380">whether</span> <span m="1059650">you</span> <span
  m="1059740">solve</span> <span m="1060070">that</span> <span
  m="1060310">one</span> <span m="1060520">or</span> <span
  m="1060640">this</span> <span m="1060880">one,</span> <span
  m="1061570">because</span> <span m="1061960">if</span> <span
  m="1062110">you</span> <span m="1062230">solve</span> <span
  m="1062590">one,</span> <span m="1063370">you</span> <span
  m="1063520">solve</span> <span m="1063880">the</span> <span
  m="1064030">other.</span> <span m="1065761">The</span> <span
  m="1066220">two</span> <span m="1066520">are</span> <span
  m="1066670">closely</span> <span m="1067240">connected</span> <span
  m="1067900">and</span> <span m="1068080">that's</span> <span
  m="1068530">the</span> <span m="1069100">key</span> <span
  m="1069400">idea</span> <span m="1069820">of</span> <span
  m="1069910">duality.</span></p><p><span m="1071140">So</span> <span
  m="1071380">maybe</span> <span m="1071680">I'll</span> <span
  m="1072010">put</span> <span m="1072230">the</span> <span
  m="1072580">idea</span> <span m="1073770">of,</span> <span
  m="1075170">first</span> <span m="1075460">of</span> <span
  m="1075610">all,</span> <span m="1075820">a</span> <span
  m="1075940">weak</span> <span m="1076390">duality.</span> <span
  m="1083030">Which</span> <span m="1083300">says</span> <span
  m="1083810">that</span> <span m="1085460">this</span> <span
  m="1086180">quantity</span> <span m="1086750">that</span> <span
  m="1086870">we're</span> <span m="1086990">trying</span> <span
  m="1087290">to</span> <span m="1087380">maximize--</span> <span
  m="1088160">we're</span> <span m="1088280">getting</span> <span
  m="1088640">it</span> <span m="1088760">as</span> <span
  m="1088910">large</span> <span m="1089360">as</span> <span
  m="1089930">possible--</span> <span m="1091180">is</span> <span
  m="1091460">always</span> <span m="1093410">less</span> <span
  m="1093780">or</span> <span m="1093930">equal</span> <span
  m="1094260">to</span> <span m="1095270">any</span> <span m="1096740">c</span>
  <span m="1097010">transpose</span> <span m="1097730">x.</span> <span
  m="1098630">This</span> <span m="1098870">is</span> <span
  m="1099910">for</span> <span m="1100610">any</span> <span
  m="1104780">feasible,</span> <span m="1105590">allowed--</span> <span
  m="1108020">any</span> <span m="1108890">x</span> <span m="1109250">and</span>
  <span m="1109400">y</span> <span m="1110690">that</span> <span
  m="1111080">satisfy</span> <span m="1111680">the</span> <span
  m="1111800">constraints.</span> <span m="1112430">Remember,</span> <span
  m="1112910">feasible</span> <span m="1113480">means</span> <span
  m="1113840">satisfies</span> <span m="1114560">the</span> <span
  m="1114650">constraints.</span></p><p><span m="1115640">So,</span> <span
  m="1116570">in</span> <span m="1116690">other</span> <span
  m="1116870">words,</span> <span m="1117270">this</span> <span
  m="1117380">problem,</span> <span m="1117890">this</span> <span
  m="1118220">maximization</span> <span m="1119300">problem,</span> <span
  m="1119660">you're</span> <span m="1119780">trying</span> <span
  m="1120020">to</span> <span m="1120140">push</span> <span
  m="1120500">this</span> <span m="1121040">up.</span> <span
  m="1122190">The</span> <span m="1122330">minimization</span> <span
  m="1123200">problem,</span> <span m="1123560">you're</span> <span
  m="1123680">trying</span> <span m="1123920">to</span> <span
  m="1124550">pull</span> <span m="1124790">this</span> <span
  m="1125060">down.</span> <span m="1126020">And</span> <span
  m="1126200">it's</span> <span m="1126410">easier</span> <span
  m="1126800">to</span> <span m="1126920">show</span> <span
  m="1127520">that</span> <span m="1128570">the</span> <span
  m="1128960">one,</span> <span m="1129590">the</span> <span
  m="1129740">b</span> <span m="1129950">transpose--</span> <span
  m="1130640">it's</span> <span m="1130910">easier</span> <span
  m="1131150">to</span> <span m="1131240">show</span> <span
  m="1131510">that</span> <span m="1131750">inequality.</span> <span
  m="1132860">Let's</span> <span m="1133130">do</span> <span
  m="1133340">that.</span></p><p><span m="1134360">So</span> <span
  m="1134540">b</span> <span m="1134780">transpose</span> <span
  m="1135440">y</span> <span m="1135710">proof.</span> <span
  m="1138730">It</span> <span m="1139160">should</span> <span
  m="1139480">be</span> <span m="1139670">a</span> <span
  m="1139760">one-line</span> <span m="1140360">proof.</span> <span
  m="1141560">So</span> <span m="1142610">b</span> <span
  m="1143030">transpose</span> <span m="1143960">y--</span> <span
  m="1146990">what</span> <span m="1147170">do</span> <span m="1147350">I</span>
  <span m="1147500">do?</span> <span m="1147830">So</span> <span
  m="1148040">b</span> <span m="1148250">transpose</span> <span
  m="1148880">y</span> <span m="1150620">well,</span> <span m="1150890">I</span>
  <span m="1151010">look</span> <span m="1151250">over</span> <span
  m="1151520">here.</span> <span m="1151950">That's</span> <span
  m="1152180">where</span> <span m="1152690">b</span> <span
  m="1153050">shows</span> <span m="1153530">up.</span></p><p><span
  m="1154280">That's</span> <span m="1154700">x</span> <span
  m="1155000">transpose</span> <span m="1156020">A</span> <span
  m="1156230">transpose</span> <span m="1156950">y,</span> <span
  m="1161510">because</span> <span m="1162440">b</span> <span
  m="1162680">is</span> <span m="1162860">Ax.</span> <span
  m="1164900">I'm</span> <span m="1165890">feasible,</span> <span
  m="1166410">so</span> <span m="1166670">my</span> <span m="1166940">b</span>
  <span m="1167300">is</span> <span m="1168290">Ax.</span> <span
  m="1169730">And</span> <span m="1170240">for</span> <span
  m="1170480">any</span> <span m="1170780">x--</span> <span
  m="1171140">this</span> <span m="1171340">is</span> <span
  m="1171500">for</span> <span m="1171800">this</span> <span
  m="1172010">is</span> <span m="1172160">for</span> <span
  m="1172370">any</span> <span m="1172700">x</span> <span
  m="1174020">that</span> <span m="1174380">b</span> <span m="1174750">is</span>
  <span m="1174920">going</span> <span m="1175080">to</span> <span
  m="1175190">be</span> <span m="1175370">Ax.</span> <span m="1175930">So</span>
  <span m="1176060">am I</span> <span m="1176270">good</span> <span
  m="1176570">so</span> <span m="1176810">far?</span></p><p><span
  m="1178340">And</span> <span m="1178430">now</span> <span
  m="1178670">what</span> <span m="1178880">do</span> <span m="1179000">I</span>
  <span m="1179120">do?</span> <span m="1180730">Now</span> <span
  m="1181030">I</span> <span m="1181160">look</span> <span
  m="1181410">here.</span> <span m="1183440">I</span> <span
  m="1183590">see</span> <span m="1183890">A</span> <span
  m="1184040">transpose</span> <span m="1184640">y</span> <span
  m="1184970">sitting</span> <span m="1185390">right</span> <span
  m="1185630">in</span> <span m="1185720">front</span> <span
  m="1185990">of</span> <span m="1186050">me.</span> <span m="1186920">So</span>
  <span m="1187160">I</span> <span m="1187310">say,</span> <span
  m="1187760">well,</span> <span m="1188150">OK,</span> <span
  m="1189680">less</span> <span m="1189980">or</span> <span
  m="1190040">equal</span> <span m="1190460">to.</span> <span
  m="1190760">And</span> <span m="1190880">I</span> <span
  m="1190970">guess</span> <span m="1191260">I'm</span> <span
  m="1191390">done.</span></p><p><span m="1192560">A</span> <span
  m="1192740">transpose</span> <span m="1193310">y</span> <span
  m="1193590">is</span> <span m="1193670">less or</span> <span
  m="1193910">equal</span> <span m="1194210">to</span> <span
  m="1194280">c.</span> <span m="1194870">So</span> <span m="1195170">I</span>
  <span m="1195320">have</span> <span m="1195950">x</span> <span
  m="1196160">transpose</span> <span m="1196700">c,</span> <span
  m="1197060">c</span> <span m="1197330">transpose</span> <span
  m="1197990">x.</span> <span m="1199880">So</span> <span
  m="1200600">this</span> <span m="1200870">equals</span> <span
  m="1201250">this,</span> <span m="1201880">less</span> <span
  m="1202110">or</span> <span m="1202280">equal</span> <span
  m="1202550">that.</span> <span m="1204800">I've</span> <span
  m="1205010">got</span> <span m="1205250">it.</span> <span
  m="1205780">Weak</span> <span m="1206210">duality</span> <span
  m="1206930">is</span> <span m="1207350">just</span> <span
  m="1208850">put</span> <span m="1209060">together</span> <span
  m="1209710">the</span> <span m="1211010">requirements</span> <span
  m="1211820">on</span> <span m="1212030">x</span> <span m="1212300">and</span>
  <span m="1212420">y</span> <span m="1212690">and</span> <span
  m="1212810">you</span> <span m="1212900">have</span> <span
  m="1213170">it.</span></p><p><span m="1213650">But</span> <span
  m="1218060">was</span> <span m="1218320">this</span> <span
  m="1218560">important?</span> <span m="1222260">If</span> <span
  m="1222560">the</span> <span m="1222620">mathematics</span> <span
  m="1223310">is</span> <span m="1223460">right,</span> <span
  m="1223820">everything</span> <span m="1224300">has</span> <span
  m="1224540">to</span> <span m="1224660">have</span> <span
  m="1224870">its</span> <span m="1225380">place,</span> <span
  m="1226160">play</span> <span m="1226400">its</span> <span
  m="1226580">role.</span> <span m="1227840">And</span> <span
  m="1228050">so</span> <span m="1228230">what's</span> <span
  m="1228620">the</span> <span m="1228740">role</span> <span
  m="1229160">of</span> <span m="1229280">x</span> <span m="1229580">greater
  or</span> <span m="1230000">equal to</span> <span m="1230320">0</span> <span
  m="1230750">there?</span> <span m="1232460">Why</span> <span
  m="1232820">do</span> <span m="1232940">we</span> <span
  m="1233180">need</span> <span m="1233600">x--</span> <span
  m="1234260">If</span> <span m="1234710">we</span> <span
  m="1234860">just</span> <span m="1235100">even</span> <span
  m="1235370">think</span> <span m="1235670">of</span> <span
  m="1237370">n</span> <span m="1237580">equal</span> <span
  m="1237850">1,</span> <span m="1238210">just</span> <span m="1238480">a</span>
  <span m="1238540">number,</span> <span m="1240160">where</span> <span
  m="1240550">do</span> <span m="1240670">we</span> <span m="1240850">use</span>
  <span m="1241390">the</span> <span m="1241510">fact</span> <span
  m="1241810">that</span> <span m="1241990">x</span> <span m="1242290">is</span>
  <span m="1242440">greater or</span> <span m="1242830">equal to</span> <span
  m="1243160">0?</span> <span m="1243970">Do</span> <span m="1244150">we</span>
  <span m="1244300">use</span> <span m="1244630">it?</span></p><p><span
  m="1245020">This</span> <span m="1245290">looks</span> <span
  m="1246100">so</span> <span m="1246370">smooth,</span> <span
  m="1248890">because</span> <span m="1249370">A</span> <span
  m="1249550">transpose</span> <span m="1250280">y--</span> <span
  m="1252975">I'll</span> <span m="1253420">write</span> <span
  m="1253720">that</span> <span m="1253990">as</span> <span m="1255250">x</span>
  <span m="1255520">transpose</span> <span m="1256360">c</span> <span
  m="1257350">for</span> <span m="1257530">the</span> <span
  m="1257620">moment,</span> <span m="1258880">just</span> <span
  m="1259120">so</span> <span m="1259480">your</span> <span
  m="1259750">eye</span> <span m="1261300">says</span> <span m="1261700">that's
  the</span> <span m="1261880">same</span> <span m="1262380">x</span> <span
  m="1262590">transpose,</span> <span m="1263720">and</span> <span
  m="1263820">the A</span> <span m="1264120">transpose</span> <span
  m="1264750">y</span> <span m="1265200">is less</span> <span m="1265440">or
  equal</span> <span m="1265650">to</span> <span m="1265740">c.</span> <span
  m="1266010">Where</span> <span m="1266550">is</span> <span
  m="1266670">x</span> <span m="1266940">greater or</span> <span
  m="1267300">equal to</span> <span m="1267570">0</span> <span
  m="1267930">coming</span> <span m="1268320">in?</span></p><p><span
  m="1268926">AUDIENCE:</span> <span m="1269081">[INAUDIBLE].</span></p><p><span
  m="1270790">GILBERT STRANG:</span> <span m="1270930">Yes.</span></p><p><span
  m="1271565">AUDIENCE:</span> <span m="1271730">Like</span> <span
  m="1271895">above.</span> <span m="1272060">It's from the</span> <span
  m="1272555">that.</span></p><p><span m="1273050">GILBERT STRANG:</span> <span
  m="1273230">Yes,</span> <span m="1273410">that's</span> <span
  m="1273710">true.</span> <span m="1274280">But</span> <span
  m="1274940">I</span> <span m="1275090">want</span> <span m="1275300">to</span>
  <span m="1275390">see--</span> <span m="1277070">so</span> <span
  m="1277310">here's</span> <span m="1277580">my</span> <span
  m="1277850">point.</span> <span m="1279860">The</span> <span
  m="1279950">fact</span> <span m="1280250">that</span> <span
  m="1280430">A</span> <span m="1280580">transpose</span> <span
  m="1281110">y</span> <span m="1281510">is less</span> <span m="1281720">or
  equal</span> <span m="1281960">to</span> <span m="1282110">c,</span> <span
  m="1282580">that's</span> <span m="1282730">fine.</span> <span
  m="1283880">Highly</span> <span m="1284240">important.</span> <span
  m="1285420">But</span> <span m="1285950">if</span> <span m="1286220">x</span>
  <span m="1286550">was</span> <span m="1286820">negative,</span> <span
  m="1289200">it</span> <span m="1289280">would</span> <span
  m="1289460">be</span> <span m="1289640">the</span> <span
  m="1289790">other</span> <span m="1290030">way.</span> <span
  m="1290300">You</span> <span m="1290870">would</span> <span
  m="1291050">go</span> <span m="1291200">the</span> <span
  m="1291320">other</span> <span m="1291500">way</span> <span
  m="1291710">and</span> <span m="1291800">you</span> <span
  m="1291890">wouldn't</span> <span m="1292250">have</span> <span
  m="1292460">what</span> <span m="1292640">you</span> <span
  m="1292760">want.</span></p><p><span m="1293780">So</span> <span
  m="1293960">we</span> <span m="1294110">really</span> <span
  m="1294470">do</span> <span m="1294710">use</span> <span
  m="1295160">the</span> <span m="1295280">fact</span> <span
  m="1295550">that</span> <span m="1295730">x</span> <span m="1296000">is</span>
  <span m="1296600">greater or</span> <span m="1296960">equal to</span> <span
  m="1297230">0</span> <span m="1298220">to</span> <span m="1298700">say</span>
  <span m="1299090">that</span> <span m="1299660">I</span> <span
  m="1299720">have</span> <span m="1299930">this</span> <span m="1300230">less
  or</span> <span m="1300550">equal</span> <span m="1300830">this.</span> <span
  m="1301250">And</span> <span m="1301340">then</span> <span
  m="1301490">I</span> <span m="1301610">multiply</span> <span
  m="1302210">by</span> <span m="1302420">something</span> <span
  m="1302960">positive</span> <span m="1304310">and</span> <span
  m="1304460">then</span> <span m="1304700">I</span> <span
  m="1304850">still</span> <span m="1305150">have</span> <span m="1305420">less
  or</span> <span m="1305720">equal.</span> <span m="1306290">OK,</span> <span
  m="1307370">good.</span> <span m="1307620">So</span> <span
  m="1309740">the</span> <span m="1309860">math</span> <span
  m="1310190">is</span> <span m="1310370">right.</span> <span
  m="1310800">Everything</span> <span m="1311840">does</span> <span
  m="1312110">its</span> <span m="1312320">part.</span></p><p><span
  m="1313160">And</span> <span m="1313310">then,</span> <span
  m="1314150">of</span> <span m="1314540">course,</span> <span
  m="1315030">the</span> <span m="1315680">beautiful</span> <span
  m="1316190">result,</span> <span m="1316700">the</span> <span
  m="1316850">important</span> <span m="1317330">result</span> <span
  m="1317900">is</span> <span m="1318710">that</span> <span
  m="1319480">there</span> <span m="1319680">is</span> <span
  m="1319750">strong</span> <span m="1320300">duality,</span> <span
  m="1321650">just</span> <span m="1321920">called</span> <span
  m="1322220">duality,</span> <span m="1323330">which</span> <span
  m="1323660">is</span> <span m="1324020">that</span> <span
  m="1324530">at</span> <span m="1324950">the</span> <span
  m="1326000">maximum--</span> <span m="1326810">now</span> <span
  m="1327050">this</span> <span m="1327290">is</span> <span
  m="1327410">not</span> <span m="1327650">for</span> <span
  m="1327920">any</span> <span m="1328280">x</span> <span m="1328580">and</span>
  <span m="1328700">y</span> <span m="1329120">but</span> <span
  m="1329270">this</span> <span m="1329540">is</span> <span
  m="1329750">for--</span> <span m="1330380">this</span> <span
  m="1330560">is</span> <span m="1330740">going</span> <span
  m="1330860">to</span> <span m="1330980">be</span> <span m="1331190">for</span>
  <span m="1332000">x</span> <span m="1332705">y</span> <span
  m="1332990">star,</span> <span m="1333590">the</span> <span
  m="1333740">winner,</span> <span m="1334700">and</span> <span
  m="1334850">x</span> <span m="1335090">star,</span> <span
  m="1335510">the</span> <span m="1335630">winner--</span> <span
  m="1336560">equality</span> <span m="1337200">holds.</span> <span
  m="1338570">So</span> <span m="1338750">that's</span> <span
  m="1339290">duality.</span> <span m="1342010">The</span> <span
  m="1342170">maximum</span> <span m="1342890">in</span> <span
  m="1343040">the</span> <span m="1343170">dual</span> <span
  m="1343490">problem</span> <span m="1344240">is</span> <span
  m="1344540">the</span> <span m="1344630">same</span> <span
  m="1345050">as</span> <span m="1345200">the</span> <span
  m="1345320">minimum</span> <span m="1345970">in</span> <span
  m="1346250">the</span> <span m="1346700">primal</span> <span
  m="1347120">problem.</span> <span m="1347550">The</span> <span
  m="1347690">two</span> <span m="1348380">have</span> <span
  m="1348530">met.</span> <span m="1349640">There</span> <span
  m="1349880">is</span> <span m="1350030">no</span> <span
  m="1350510">duality</span> <span m="1351230">gap.</span></p><p><span
  m="1352550">In</span> <span m="1352760">some</span> <span
  m="1353510">cooked</span> <span m="1353900">up</span> <span
  m="1355060">nonlinear</span> <span m="1355760">problems,</span> <span
  m="1356360">there</span> <span m="1356480">could</span> <span
  m="1356720">be</span> <span m="1356840">a</span> <span m="1356930">gap</span>
  <span m="1357380">between</span> <span m="1359400">the</span> <span
  m="1359840">maximum</span> <span m="1360620">and</span> <span
  m="1360850">the</span> <span m="1361090">minimum,</span> <span
  m="1361620">but</span> <span m="1362570">you</span> <span
  m="1362930">hope</span> <span m="1363200">not.</span> <span
  m="1363920">And</span> <span m="1364100">here</span> <span
  m="1365440">the</span> <span m="1365600">big</span> <span
  m="1366050">theorem</span> <span m="1366470">is</span> <span
  m="1366830">not.</span> <span m="1368010">They're</span> <span
  m="1368450">equal.</span> <span m="1369390">You</span> <span
  m="1369680">push</span> <span m="1369980">this</span> <span
  m="1370220">up,</span> <span m="1370430">push</span> <span
  m="1370700">that</span> <span m="1370910">down.</span></p><p><span
  m="1373580">Another</span> <span m="1373940">way</span> <span
  m="1374120">to</span> <span m="1374240">say</span> <span
  m="1374600">that</span> <span m="1375050">duality</span> <span
  m="1376550">is</span> <span m="1377000">that</span> <span
  m="1378050">this</span> <span m="1378380">is</span> <span
  m="1379100">pushing</span> <span m="1379550">that</span> <span
  m="1379790">up</span> <span m="1380040">at</span> <span
  m="1380240">some</span> <span m="1380510">max--</span> <span
  m="1381050">I</span> <span m="1381170">could</span> <span
  m="1381410">write</span> <span m="1381710">that</span> <span
  m="1381960">as</span> <span m="1382120">a</span> <span
  m="1382190">maximum</span> <span m="1383000">of</span> <span
  m="1383180">a</span> <span m="1383240">minimum</span> <span
  m="1384560">equaling</span> <span m="1385820">a</span> <span
  m="1385880">minimum</span> <span m="1386660">of</span> <span
  m="1386870">a</span> <span m="1386930">maximum,</span> <span
  m="1388010">if</span> <span m="1388190">I</span> <span
  m="1388400">wanted.</span> <span m="1392366">So</span> <span
  m="1393720">the</span> <span m="1394050">duality</span> <span
  m="1394860">in</span> <span m="1394980">linear</span> <span
  m="1395310">programming</span> <span m="1396270">was</span> <span
  m="1396510">the</span> <span m="1396630">same</span> <span
  m="1397050">as</span> <span m="1397200">von</span> <span
  m="1397410">Neumann's</span> <span m="1397920">minimax</span> <span
  m="1398790">theorem.</span> <span m="1400710">And</span> <span
  m="1400950">his</span> <span m="1401280">theorem</span> <span
  m="1401730">applied</span> <span m="1402240">to</span> <span
  m="1403590">two-person</span> <span m="1404250">games.</span></p><p><span
  m="1405300">So</span> <span m="1406420">the</span> <span
  m="1406530">key</span> <span m="1406800">math</span> <span
  m="1407730">result</span> <span m="1411210">is</span> <span
  m="1411630">duality</span> <span m="1412320">for</span> <span
  m="1412530">linear</span> <span m="1412860">programming,</span> <span
  m="1414090">and</span> <span m="1414330">it's</span> <span
  m="1414660">going</span> <span m="1414830">to</span> <span
  m="1414960">be--</span> <span m="1415380">you'll</span> <span
  m="1415560">see</span> <span m="1416340">the</span> <span
  m="1416490">same</span> <span m="1417030">thing</span> <span
  m="1417450">happening</span> <span m="1418110">for</span> <span
  m="1418950">two-person</span> <span m="1419640">games.</span> <span
  m="1421200">And</span> <span m="1421470">it's</span> <span
  m="1421950">a</span> <span m="1422010">minimax</span> <span
  m="1422760">theorem,</span> <span m="1423150">or</span> <span
  m="1423460">a</span> <span m="1423540">saddle</span> <span
  m="1424080">point.</span> <span m="1424590">Or</span> <span
  m="1425250">it's</span> <span m="1425550">just</span> <span
  m="1427140">things</span> <span m="1427440">come</span> <span
  m="1427680">out</span> <span m="1427890">right.</span> <span
  m="1430740">Yes.</span></p><p><span m="1431410">So</span> <span
  m="1431650">just</span> <span m="1431890">to</span> <span
  m="1431980">mention</span> <span m="1432460">that</span> <span
  m="1437030">mathematical</span> <span m="1437750">programming,</span> <span
  m="1438440">of</span> <span m="1438590">course,</span> <span
  m="1439010">includes</span> <span m="1441170">much</span> <span
  m="1441950">more</span> <span m="1442160">difficult</span> <span
  m="1442730">problems.</span> <span m="1443440">This</span> <span
  m="1443570">is</span> <span m="1444140">linear</span> <span
  m="1444500">programming.</span> <span m="1445850">That</span> <span
  m="1446090">problem,</span> <span m="1446570">as</span> <span
  m="1446780">you</span> <span m="1446930">see,</span> <span
  m="1447725">has</span> <span m="1448130">a</span> <span
  m="1448190">beautiful,</span> <span m="1448950">simple</span> <span
  m="1450140">theory.</span> <span m="1450790">And</span> <span
  m="1452120">the</span> <span m="1454100">paying</span> <span
  m="1454580">attention</span> <span m="1455210">is</span> <span
  m="1455540">paying</span> <span m="1455870">attention</span> <span
  m="1456410">to</span> <span m="1456560">the</span> <span
  m="1456710">algorithm,</span> <span m="1457370">because</span> <span
  m="1457670">you've</span> <span m="1457820">got</span> <span
  m="1458090">two</span> <span m="1458390">important</span> <span
  m="1458870">choices</span> <span m="1459410">and</span> <span
  m="1459530">they</span> <span m="1459650">both</span> <span
  m="1459950">get</span> <span m="1460760">highly</span> <span
  m="1461150">developed.</span></p><p><span m="1464840">Now,</span> <span
  m="1465120">OK.</span> <span m="1465490">So</span> <span
  m="1465760">for</span> <span m="1465940">game,</span> <span
  m="1466360">now</span> <span m="1466600">I'm</span> <span
  m="1466690">going</span> <span m="1466840">to</span> <span
  m="1466960">turn</span> <span m="1467380">to--</span> <span
  m="1468740">well,</span> <span m="1469000">I'll</span> <span
  m="1469330">do</span> <span m="1469530">an</span> <span
  m="1470320">example</span> <span m="1471460">of</span> <span
  m="1471850">max</span> <span m="1472240">flow</span> <span
  m="1472570">equal</span> <span m="1472870">min</span> <span
  m="1473170">cut,</span> <span m="1473930">just</span> <span
  m="1474280">see</span> <span m="1474610">what--</span> <span
  m="1475900">and</span> <span m="1476080">then</span> <span
  m="1476410">go</span> <span m="1476740">to</span> <span
  m="1477630">two-person</span> <span m="1478240">game.</span> <span
  m="1478960">So</span> <span m="1480130">here's</span> <span
  m="1480400">an</span> <span m="1480520">example</span> <span
  m="1481530">of</span> <span m="1481980">a--</span> <span m="1492920">so</span>
  <span m="1493160">I</span> <span m="1493250">start</span> <span
  m="1493610">with</span> <span m="1493790">a</span> <span
  m="1493820">graph.</span> <span m="1496200">Let</span> <span
  m="1496250">me</span> <span m="1496400">just</span> <span
  m="1497740">imagine.</span></p><p><span m="1504330">So</span> <span
  m="1504930">this</span> <span m="1505170">is</span> <span
  m="1505350">the</span> <span m="1506100">source.</span> <span
  m="1509220">This</span> <span m="1509460">is</span> <span
  m="1509610">the</span> <span m="1509730">sink.</span> <span
  m="1511680">And</span> <span m="1512340">I'm</span> <span
  m="1512610">sending</span> <span m="1513120">flow</span> <span
  m="1513690">through</span> <span m="1514110">the</span> <span
  m="1514470">network.</span> <span m="1515770">So</span> <span
  m="1515850">it's</span> <span m="1516000">a</span> <span
  m="1516060">network</span> <span m="1516840">that</span> <span
  m="1517080">I'm</span> <span m="1517260">sending</span> <span
  m="1517680">flow</span> <span m="1517980">through.</span> <span
  m="1519810">So</span> <span m="1519990">my</span> <span m="1520230">job</span>
  <span m="1520680">is</span> <span m="1520860">to</span> <span
  m="1520980">maximize--</span> <span m="1524790">I'll set</span> <span
  m="1525600">x</span> <span m="1525960">at</span> <span m="1526110">the</span>
  <span m="1526260">source</span> <span m="1526740">to</span> <span
  m="1526860">be</span> <span m="1527100">0.</span> <span m="1532620">And</span>
  <span m="1532800">then</span> <span m="1533130">the</span> <span
  m="1533250">flow,</span> <span m="1533970">the</span> <span
  m="1534120">total</span> <span m="1534480">flow</span> <span
  m="1534840">will</span> <span m="1535050">come</span> <span
  m="1535320">into</span> <span m="1535560">the</span> <span
  m="1535680">sink.</span> <span m="1536130">So</span> <span
  m="1536370">I</span> <span m="1536460">want</span> <span m="1536670">to</span>
  <span m="1537120">maximize</span> <span m="1539670">x</span> <span
  m="1540000">at</span> <span m="1540240">the</span> <span
  m="1540380">sink.</span></p><p><span m="1542520">So</span> <span
  m="1542730">it's</span> <span m="1542880">a</span> <span
  m="1542940">linear</span> <span m="1543300">programming</span> <span
  m="1543960">and</span> <span m="1544110">there are</span> <span
  m="1544290">constraints.</span> <span m="1545080">So</span> <span
  m="1545160">what</span> <span m="1545340">are</span> <span
  m="1545430">the</span> <span m="1545550">constraints?</span> <span
  m="1547370">Every</span> <span m="1547940">edge</span> <span
  m="1548360">has</span> <span m="1548610">a</span> <span
  m="1548700">capacity.</span> <span m="1550130">So</span> <span
  m="1550310">let's</span> <span m="1550580">see.</span> <span
  m="1551240">Suppose</span> <span m="1551840">that</span> <span
  m="1552140">edge</span> <span m="1552470">has</span> <span
  m="1552800">capacity</span> <span m="1556540">5.</span> <span
  m="1557460">Let</span> <span m="1557660">me</span> <span
  m="1558200">put</span> <span m="1558530">capacities</span> <span
  m="1559400">on</span> <span m="1559610">all</span> <span
  m="1559820">these</span> <span m="1560120">edges.</span> <span
  m="1561710">2,</span> <span m="1563330">1,</span> <span m="1564350">3,</span>
  <span m="1566480">4.</span> <span m="1567860">I'm</span> <span
  m="1568010">just</span> <span m="1568250">stabbing</span> <span
  m="1569000">around</span> <span m="1569450">here.</span> <span
  m="1572980">1,000.</span> <span m="1575710">And</span> <span
  m="1578680">let</span> <span m="1578800">me</span> <span
  m="1578950">say</span> <span m="1579250">2</span> <span m="1580000">and</span>
  <span m="1581140">4.</span></p><p><span m="1582310">I</span> <span
  m="1582610">have</span> <span m="1582730">no</span> <span
  m="1582970">idea</span> <span m="1583390">what's</span> <span
  m="1583660">happening</span> <span m="1584080">here.</span> <span
  m="1585570">But</span> <span m="1586710">if</span> <span m="1586860">we</span>
  <span m="1587010">see</span> <span m="1587220">the</span> <span
  m="1587340">problem,</span> <span m="1587670">we'll</span> <span
  m="1587880">probably</span> <span m="1588210">be</span> <span
  m="1588390">able</span> <span m="1588660">to</span> <span
  m="1588750">solve</span> <span m="1589140">it.</span> <span
  m="1591170">So</span> <span m="1591390">these</span> <span
  m="1591930">constraints</span> <span m="1592770">are</span> <span
  m="1593730">that</span> <span m="1594000">the</span> <span
  m="1595320">flow</span> <span m="1595890">variable,</span> <span
  m="1596710">which</span> <span m="1597850">would</span> <span
  m="1598020">be</span> <span m="1598200">the</span> <span m="1598320">y</span>
  <span m="1598800">that</span> <span m="1599060">I'm</span> <span
  m="1599310">trying</span> <span m="1599580">to</span> <span
  m="1599700">maximize,</span> <span m="1601140">cannot--</span> <span
  m="1602520">the</span> <span m="1602640">amount</span> <span
  m="1603000">of</span> <span m="1603090">flow,</span> <span
  m="1603570">just</span> <span m="1603870">in</span> <span
  m="1604050">ordinary</span> <span m="1604500">words,</span> <span
  m="1605340">the</span> <span m="1605460">amount</span> <span
  m="1605760">of</span> <span m="1605850">flow</span> <span
  m="1606270">on</span> <span m="1606420">the</span> <span
  m="1606570">edges</span> <span m="1607620">can't</span> <span
  m="1609620">go</span> <span m="1609870">higher</span> <span
  m="1610170">than</span> <span m="1610350">the</span> <span
  m="1610470">capacity.</span></p><p><span m="1611520">I</span> <span
  m="1611640">could</span> <span m="1611850">send</span> <span
  m="1612180">11</span> <span m="1612660">along</span> <span
  m="1613050">this</span> <span m="1613350">edge,</span> <span
  m="1613830">but</span> <span m="1613980">then</span> <span
  m="1614190">I've</span> <span m="1614310">got</span> <span
  m="1614490">nowhere</span> <span m="1614880">to</span> <span
  m="1615000">send</span> <span m="1615330">it</span> <span
  m="1615540">after</span> <span m="1615840">that.</span> <span
  m="1617870">I</span> <span m="1617960">could</span> <span
  m="1618140">send,</span> <span m="1618560">well,</span> <span
  m="1619180">900</span> <span m="1620000">on</span> <span
  m="1620150">that</span> <span m="1620430">edge.</span> <span
  m="1620670">but,</span> <span m="1620870">obviously,</span> <span
  m="1622090">it</span> <span m="1622250">would</span> <span
  m="1622400">get</span> <span m="1622610">stuck</span> <span
  m="1623030">there.</span> <span m="1624980">So</span> <span
  m="1625220">the</span> <span m="1625340">question</span> <span
  m="1625790">is,</span> <span m="1625940">what's</span> <span
  m="1626330">the</span> <span m="1628290">maximum</span> <span
  m="1629100">I</span> <span m="1629250">can</span> <span
  m="1629490">send</span> <span m="1629970">through</span> <span
  m="1630360">that</span> <span m="1630600">network?</span> <span
  m="1631620">It's</span> <span m="1631800">a</span> <span
  m="1632370">classical</span> <span m="1633030">problem.</span></p><p><span
  m="1635670">And,</span> <span m="1636560">in</span> <span
  m="1636710">fact,</span> <span m="1637610">it's</span> <span
  m="1637910">an</span> <span m="1638120">integer</span> <span
  m="1638720">programming</span> <span m="1639410">problem.</span> <span
  m="1640400">These</span> <span m="1640820">are</span> <span
  m="1640970">all</span> <span m="1641270">integer</span> <span
  m="1641750">capacities.</span> <span m="1642950">I</span> <span
  m="1643070">could</span> <span m="1643310">insist</span> <span
  m="1643940">on</span> <span m="1644180">integer</span> <span
  m="1645170">flow.</span> <span m="1647560">But</span> <span
  m="1647800">it's</span> <span m="1648040">a</span> <span
  m="1648100">very</span> <span m="1649180">remarkable</span> <span
  m="1650590">integer</span> <span m="1651280">problem</span> <span
  m="1652880">because</span> <span m="1654530">I</span> <span
  m="1654650">could</span> <span m="1654890">allow</span> <span
  m="1655640">fractions</span> <span m="1656330">and</span> <span
  m="1656480">the</span> <span m="1656660">answer</span> <span
  m="1657080">would</span> <span m="1657320">not</span> <span
  m="1657560">be</span> <span m="1657740">a--</span> <span
  m="1657950">would</span> <span m="1658160">not</span> <span
  m="1658430">involve</span> <span m="1658880">fractions.</span></p><p><span
  m="1660020">In</span> <span m="1660110">other</span> <span
  m="1660290">words,</span> <span m="1661350">if</span> <span
  m="1661430">I</span> <span m="1661550">keep</span> <span m="1661850">it</span>
  <span m="1661940">as</span> <span m="1662120">an</span> <span
  m="1662270">integer</span> <span m="1662780">problem,</span> <span
  m="1664730">then</span> <span m="1665870">the</span> <span
  m="1668070">mathematics</span> <span m="1668850">is</span> <span
  m="1669000">definitely</span> <span m="1669420">harder</span> <span
  m="1669870">for</span> <span m="1670110">an</span> <span
  m="1670230">integer</span> <span m="1670710">problem.</span> <span
  m="1671660">What's</span> <span m="1672210">different?</span> <span
  m="1673380">So</span> <span m="1673650">the</span> <span
  m="1673840">x's</span> <span m="1674760">could</span> <span
  m="1675000">be</span> <span m="1675210">integers</span> <span
  m="1678400">or</span> <span m="1678540">they</span> <span
  m="1678780">could</span> <span m="1679140">be</span> <span
  m="1682200">real</span> <span m="1682440">numbers.</span> <span
  m="1687480">Over</span> <span m="1687850">here,</span> <span
  m="1688180">they</span> <span m="1688330">were</span> <span
  m="1688480">real</span> <span m="1688750">numbers.</span> <span
  m="1691000">I</span> <span m="1691120">happened</span> <span
  m="1691480">to</span> <span m="1691570">get</span> <span m="1691780">an</span>
  <span m="1691960">integer</span> <span m="1692440">for</span> <span
  m="1692650">this,</span> <span m="1693040">but</span> <span
  m="1694700">if</span> <span m="1694900">I</span> <span m="1695050">had</span>
  <span m="1695350">10</span> <span m="1695830">crossing</span> <span
  m="1696430">planes</span> <span m="1697090">in</span> <span
  m="1697360">15</span> <span m="1697930">dimensions,</span> <span
  m="1700540">the</span> <span m="1700720">integers</span> <span
  m="1701200">would</span> <span m="1701380">be</span> <span
  m="1701890">totally</span> <span m="1702340">lost.</span></p><p><span
  m="1704330">But</span> <span m="1704540">the</span> <span
  m="1704660">point</span> <span m="1704960">is,</span> <span
  m="1705170">here,</span> <span m="1705470">that</span> <span
  m="1707240">if</span> <span m="1707420">I</span> <span
  m="1707570">allow</span> <span m="1707900">real</span> <span
  m="1708230">numbers,</span> <span m="1712460">it</span> <span
  m="1712490">doesn't</span> <span m="1712880">get</span> <span
  m="1713060">me</span> <span m="1713210">any</span> <span
  m="1714320">more</span> <span m="1714620">flow,</span> <span
  m="1715250">that</span> <span m="1715730">the</span> <span
  m="1715910">winning</span> <span m="1716360">flow</span> <span
  m="1716810">is</span> <span m="1717470">an</span> <span
  m="1717590">integer</span> <span m="1718040">anyway.</span> <span
  m="1718490">So</span> <span m="1718700">it's</span> <span
  m="1718850">an</span> <span m="1719000">integer</span> <span
  m="1719450">problem</span> <span m="1720890">which</span> <span
  m="1721250">can</span> <span m="1721580">be</span> <span
  m="1722000">safely</span> <span m="1722570">relaxed,</span> <span
  m="1723350">and</span> <span m="1723470">you</span> <span
  m="1723590">can</span> <span m="1723800">safely</span> <span
  m="1724340">use</span> <span m="1725240">simplex</span> <span
  m="1725840">method,</span> <span m="1726380">or</span> <span
  m="1726560">Karmarkar's</span> <span m="1727340">method,</span> <span
  m="1728240">or</span> <span m="1728540">any</span> <span
  m="1728870">interior</span> <span m="1729440">point</span> <span
  m="1729740">method</span> <span m="1730520">with</span> <span
  m="1732290">non-integers,</span> <span m="1733250">because</span> <span
  m="1733940">in</span> <span m="1734120">the</span> <span
  m="1734240">interior</span> <span m="1734840">here</span> <span
  m="1735140">you're</span> <span m="1735290">not</span> <span
  m="1736580">starting</span> <span m="1737090">or</span> <span
  m="1737210">ending</span> <span m="1737600">at</span> <span
  m="1737720">integers.</span> <span m="1739070">You</span> <span
  m="1739250">can</span> <span m="1739430">do</span> <span m="1739610">it</span>
  <span m="1739730">because</span> <span m="1743560">the</span> <span
  m="1743780">integer</span> <span m="1744260">answer</span> <span
  m="1744650">will</span> <span m="1744860">be,</span> <span
  m="1745250">in</span> <span m="1745400">the</span> <span
  m="1745550">end,</span> <span m="1745760">better.</span></p><p><span
  m="1747340">And</span> <span m="1747530">what</span> <span
  m="1747740">is</span> <span m="1747950">that</span> <span
  m="1748190">answer?</span> <span m="1749480">I</span> <span
  m="1750080">think</span> <span m="1750290">I've</span> <span
  m="1750470">made</span> <span m="1750740">those</span> <span
  m="1751280">capacities</span> <span m="1753080">too</span> <span
  m="1754430">easy</span> <span m="1754970">to--</span> <span
  m="1756470">oh,</span> <span m="1756720">I</span> <span
  m="1756800">didn't</span> <span m="1757160">do</span> <span
  m="1757400">this</span> <span m="1757700">one.</span> <span
  m="1764000">So</span> <span m="1764260">what</span> <span
  m="1764660">shall</span> <span m="1764860">I--</span> <span
  m="1765150">shall</span> <span m="1765370">I</span> <span
  m="1765460">make</span> <span m="1765720">it</span> <span
  m="1765850">large,</span> <span m="1766990">like</span> <span
  m="1767200">9?</span> <span m="1767710">I</span> <span
  m="1767830">don't</span> <span m="1767980">know.</span></p><p><span
  m="1769280">What's</span> <span m="1769450">the</span> <span
  m="1769540">best</span> <span m="1769840">we</span> <span
  m="1769990">can</span> <span m="1770200">do</span> <span
  m="1770470">through</span> <span m="1770950">that</span> <span
  m="1777980">network?</span> <span m="1780460">Can</span> <span
  m="1780600">you--</span> <span m="1781130">I</span> <span
  m="1781280">can't</span> <span m="1781580">see</span> <span
  m="1781820">it</span> <span m="1781940">from</span> <span
  m="1782180">here</span> <span m="1782420">yet?</span> <span
  m="1785515">What</span> <span m="1785960">should</span> <span
  m="1786200">I</span> <span m="1786410">do?</span> <span
  m="1787580">Obviously,</span> <span m="1788240">in</span> <span
  m="1788570">this</span> <span m="1789200">simple</span> <span
  m="1789620">problem</span> <span m="1789885">I</span> <span
  m="1790150">can</span> <span m="1790400">get</span> <span
  m="1790640">anything</span> <span m="1791090">I</span> <span
  m="1791210">want</span> <span m="1791960">pretty</span> <span
  m="1792230">much</span> <span m="1793070">that</span> <span
  m="1793340">far.</span> <span m="1794360">But</span> <span
  m="1794540">then</span> <span m="1794990">what</span> <span
  m="1795200">can</span> <span m="1795470">I</span> <span
  m="1795650">do?</span></p><p><span m="1798990">Let</span> <span
  m="1799140">me</span> <span m="1799290">even</span> <span
  m="1799590">make</span> <span m="1799830">that</span> <span
  m="1800040">19.</span> <span m="1805180">So</span> <span
  m="1806380">I'm</span> <span m="1806560">not</span> <span
  m="1807190">imposing</span> <span m="1807790">much</span> <span
  m="1808120">of</span> <span m="1808270">a</span> <span
  m="1808690">limit</span> <span m="1809200">on</span> <span
  m="1809380">that</span> <span m="1809650">edge</span> <span
  m="1809980">either.</span> <span m="1810710">But</span> <span
  m="1810790">these</span> <span m="1811150">edges</span> <span
  m="1811570">are</span> <span m="1811720">quite</span> <span
  m="1812050">tight</span> <span m="1812410">limits,</span> <span
  m="1812920">and</span> <span m="1813070">these</span> <span
  m="1813370">are</span> <span m="1813490">sort</span> <span
  m="1813760">of</span> <span m="1813940">intermediate</span> <span
  m="1814630">limits.</span></p><p><span m="1815810">What</span> <span
  m="1816220">do</span> <span m="1816280">you</span> <span
  m="1816400">think</span> <span m="1816760">is</span> <span
  m="1817030">the</span> <span m="1818550">most</span> <span
  m="1818910">I</span> <span m="1819030">can</span> <span
  m="1819240">send</span> <span m="1819540">through?</span> <span
  m="1822140">And</span> <span m="1822380">how</span> <span
  m="1822590">would</span> <span m="1822800">you</span> <span
  m="1823490">show</span> <span m="1823850">me</span> <span
  m="1824030">that</span> <span m="1824240">I</span> <span
  m="1824360">couldn't</span> <span m="1824690">send</span> <span
  m="1825020">more?</span> <span m="1825800">That's</span> <span
  m="1826100">the</span> <span m="1826400">key</span> <span
  m="1826670">question.</span> <span m="1828020">I</span> <span
  m="1828380">want</span> <span m="1828620">to</span> <span
  m="1828680">get</span> <span m="1828950">a</span> <span
  m="1829050">bound</span> <span m="1829640">on</span> <span
  m="1830040">the--</span> <span m="1831530">an</span> <span
  m="1831860">upper</span> <span m="1832100">bound</span> <span
  m="1832580">on</span> <span m="1832790">this</span> <span
  m="1833100">maximum.</span> <span m="1834250">This</span> <span
  m="1834470">maximum</span> <span m="1835730">getting</span> <span
  m="1836030">into</span> <span m="1836270">the</span> <span
  m="1836420">sink</span> <span m="1836860">is</span> <span
  m="1837050">less</span> <span m="1837540">or</span> <span
  m="1837590">equal</span> <span m="1837950">to--</span> <span
  m="1838250">and</span> <span m="1839182">what</span> <span
  m="1839540">number</span> <span m="1839900">would</span> <span
  m="1840140">you</span> <span m="1840290">propose?</span></p><p><span
  m="1841900">Could</span> <span m="1842110">I</span> <span
  m="1842200">get</span> <span m="1842390">1,000</span> <span
  m="1843070">through?</span> <span m="1844270">I</span> <span
  m="1844390">could</span> <span m="1844600">start,</span> <span
  m="1845150">but</span> <span m="1845410">of</span> <span
  m="1845500">course</span> <span m="1847275">it</span> <span
  m="1847600">would</span> <span m="1847900">pile</span> <span
  m="1848290">up</span> <span m="1848470">there.</span> <span
  m="1849460">I</span> <span m="1849520">couldn't</span> <span
  m="1849880">get</span> <span m="1850330">further.</span> <span
  m="1854010">What</span> <span m="1854220">do</span> <span
  m="1854280">you</span> <span m="1854340">think</span> <span m="1854640">is
  the</span> <span m="1854940">best</span> <span m="1855390">I</span> <span
  m="1855510">can</span> <span m="1855750">do?</span></p><p><span
  m="1857574">AUDIENCE:</span> <span m="1857818">10?</span></p><p><span
  m="1858550">GILBERT STRANG:</span> <span m="1858780">10?</span> <span
  m="1859860">I</span> <span m="1859950">can't</span> <span
  m="1860220">do</span> <span m="1860430">more</span> <span
  m="1860670">than</span> <span m="1860910">10?</span> <span
  m="1861380">How</span> <span m="1861840">could</span> <span
  m="1862020">I</span> <span m="1862140">do</span> <span
  m="1862380">10?</span></p><p><span m="1864340">AUDIENCE:</span> <span
  m="1864495">So</span> <span m="1864650">you</span> <span m="1864900">go</span>
  <span m="1865650">12--</span></p><p><span m="1867140">GILBERT STRANG:</span>
  <span m="1867285">12</span> <span m="1867720">this</span> <span
  m="1867960">way?</span></p><p><span m="1868710">AUDIENCE:</span> <span
  m="1868770">Yes.</span> <span m="1868830">19.</span></p><p><span
  m="1870320">GILBERT STRANG:</span> <span m="1870465">Oh,</span> <span
  m="1870610">OK.</span></p><p><span m="1871200">AUDIENCE:</span> <span
  m="1871410">And</span> <span m="1871620">then</span> <span m="1871830">split
  the</span> <span m="1872230">8</span> <span m="1872520">and</span> <span
  m="1872680">2.</span> <span m="1873070">Can</span> <span
  m="1873460">you</span> <span m="1873760">split?</span></p><p><span
  m="1875050">GILBERT STRANG:</span> <span m="1875230">I</span> <span
  m="1875410">see.</span> <span m="1875650">10</span> <span
  m="1876040">that</span> <span m="1876280">way,</span> <span
  m="1876790">10</span> <span m="1877110">this--</span> <span
  m="1877310">yes,</span> <span m="1877610">absolutely</span> <span
  m="1877955">you</span> <span m="1878300">can</span> <span
  m="1878520">split.</span> <span m="1879280">And</span> <span
  m="1879430">then</span> <span m="1880510">this</span> <span
  m="1881080">could</span> <span m="1881350">go</span> <span
  m="1881530">here,</span> <span m="1881830">and</span> <span
  m="1881920">that</span> <span m="1882520">would</span> <span
  m="1882820">be</span> <span m="1882970">able</span> <span
  m="1883180">to</span> <span m="1883240">go</span> <span
  m="1883390">there.</span> <span m="1883650">So</span> <span
  m="1883810">I</span> <span m="1883930">can</span> <span m="1884230">get</span>
  <span m="1884450">10</span> <span m="1884780">through.</span> <span
  m="1885910">Correct.</span></p><p><span m="1887220">AUDIENCE:</span> <span
  m="1887465">[INAUDIBLE].</span></p><p><span m="1889180">GILBERT STRANG:</span>
  <span m="1889300">Can</span> <span m="1889420">I</span> <span
  m="1889540">do</span> <span m="1889780">anything</span> <span
  m="1890290">better?</span> <span m="1891190">Oh,</span> <span
  m="1891400">I</span> <span m="1891490">could</span> <span
  m="1891730">be</span> <span m="1891970">sending</span> <span
  m="1892450">some</span> <span m="1892810">up</span> <span
  m="1892990">this</span> <span m="1893260">way</span> <span
  m="1893500">at</span> <span m="1893620">the</span> <span
  m="1893770">same</span> <span m="1894070">time.</span> <span
  m="1895900">So</span> <span m="1896080">I</span> <span
  m="1896140">could</span> <span m="1896320">get</span> <span
  m="1896530">3</span> <span m="1896920">along</span> <span
  m="1897280">the</span> <span m="1897430">top.</span> <span
  m="1898950">So</span> <span m="1899590">this</span> <span
  m="1899770">is</span> <span m="1899890">like</span> <span
  m="1900130">an</span> <span m="1900280">auction.</span></p><p><span
  m="1901440">We</span> <span m="1901600">can</span> <span
  m="1901810">get</span> <span m="1902020">up</span> <span m="1902170">to</span>
  <span m="1902320">13.</span> <span m="1903720">Can</span> <span
  m="1904150">we</span> <span m="1904330">get--</span> <span
  m="1904670">so</span> <span m="1905050">that</span> <span
  m="1905290">was</span> <span m="1905530">3</span> <span
  m="1906070">going</span> <span m="1906550">this</span> <span
  m="1906880">way</span> <span m="1907870">and</span> <span
  m="1908260">10</span> <span m="1908800">going</span> <span
  m="1909970">this</span> <span m="1910690">way.</span> <span
  m="1913300">Is</span> <span m="1913570">13</span> <span
  m="1914420">an--</span> <span m="1915620">can</span> <span
  m="1915850">I</span> <span m="1916150">not</span> <span
  m="1916480">exceed</span> <span m="1916990">13?</span></p><p><span
  m="1918300">AUDIENCE:</span> <span m="1918545">14?</span></p><p><span
  m="1918790">AUDIENCE:</span> <span m="1918965">14.</span></p><p><span
  m="1920670">GILBERT STRANG:</span> <span m="1920840">Do</span> <span
  m="1921010">I</span> <span m="1921240">hear</span> <span
  m="1921550">14?</span> <span m="1924010">Oh,</span> <span
  m="1924310">I've</span> <span m="1924460">got</span> <span
  m="1924670">a</span> <span m="1924730">lot</span> <span m="1924970">of</span>
  <span m="1925060">room</span> <span m="1925420">for</span> <span
  m="1925630">one</span> <span m="1925960">more.</span> <span
  m="1926470">So,</span> <span m="1926700">OK.</span> <span
  m="1927670">So</span> <span m="1927880">14</span> <span m="1928700">in</span>
  <span m="1928900">any</span> <span m="1929100">case.</span> <span
  m="1930520">All</span> <span m="1930670">right.</span> <span
  m="1930940">Do</span> <span m="1931120">I</span> <span m="1931240">hear</span>
  <span m="1931510">15?</span></p><p><span m="1932260">AUDIENCE:</span> <span
  m="1932360">Can</span> <span m="1932460">you do</span> <span
  m="1932850">two</span> <span m="1933190">more</span> <span m="1933610">on the
  bottom,</span> <span m="1934060">like</span> <span m="1934380">12</span> <span
  m="1934740">instead of 10?</span></p><p><span m="1935710">GILBERT
  STRANG:</span> <span m="1935800">If</span> <span m="1935890">I</span> <span
  m="1936010">did</span> <span m="1936250">12,</span> <span
  m="1936820">then</span> <span m="1937270">what</span> <span
  m="1937510">would</span> <span m="1937690">I</span> <span
  m="1937870">do?</span></p><p><span m="1938350">AUDIENCE:</span> <span
  m="1938553">Split</span> <span m="1938756">the other</span> <span
  m="1939162">two</span> <span m="1939568">up.</span></p><p><span
  m="1940380">GILBERT STRANG:</span> <span m="1940420">I'd</span> <span
  m="1940460">send</span> <span m="1941050">two</span> <span
  m="1941410">up</span> <span m="1941590">here.</span> <span
  m="1943690">What</span> <span m="1943840">am</span> <span m="1943960">I</span>
  <span m="1944020">going</span> <span m="1944140">to</span> <span
  m="1944260">do</span> <span m="1944410">with</span> <span
  m="1944560">them</span> <span m="1944680">from here?</span></p><p><span
  m="1944920">AUDIENCE:</span> <span m="1945115">[INAUDIBLE].</span></p><p><span
  m="1946690">GILBERT STRANG:</span> <span m="1946795">Send</span> <span
  m="1946900">them?</span></p><p><span m="1947110">AUDIENCE:</span> <span
  m="1947350">Up</span> <span m="1947590">again.</span></p><p><span
  m="1948070">GILBERT STRANG:</span> <span m="1948175">Up</span> <span
  m="1948280">again,</span> <span m="1949450">and</span> <span
  m="1949860">along.</span> <span m="1950630">But</span> <span
  m="1950800">then</span> <span m="1951850">the</span> <span
  m="1951940">3</span> <span m="1952600">that</span> <span m="1954010">I</span>
  <span m="1954370">had</span> <span m="1954730">right</span> <span
  m="1955060">now</span> <span m="1956230">would</span> <span
  m="1956560">be</span> <span m="1956830">cut</span> <span
  m="1957070">back</span> <span m="1957340">to</span> <span
  m="1957520">1.</span></p><p><span m="1961430">It's</span> <span
  m="1962200">a</span> <span m="1962240">lot</span> <span m="1962480">of</span>
  <span m="1962540">fun,</span> <span m="1962960">this</span> <span
  m="1963270">max</span> <span m="1963670">flow</span> <span
  m="1964850">problem.</span> <span m="1966780">And</span> <span
  m="1966970">I'm</span> <span m="1967400">looking</span> <span
  m="1967700">for</span> <span m="1967880">a</span> <span
  m="1967940">bound</span> <span m="1968780">to</span> <span
  m="1968990">know</span> <span m="1969260">when</span> <span
  m="1969530">to</span> <span m="1969650">quit,</span> <span
  m="1970180">to</span> <span m="1970310">know</span> <span
  m="1970520">when</span> <span m="1970790">I've</span> <span
  m="1971300">optimized.</span> <span m="1971990">That's</span> <span
  m="1972320">the</span> <span m="1972410">whole</span> <span
  m="1972710">idea</span> <span m="1973070">of</span> <span
  m="1973160">duality,</span> <span m="1973850">is</span> <span
  m="1974000">to</span> <span m="1974120">find</span> <span
  m="1974480">some</span> <span m="1975290">upper</span> <span
  m="1975680">thing</span> <span m="1976190">that</span> <span
  m="1976370">I'm</span> <span m="1976520">trying</span> <span
  m="1976850">to</span> <span m="1978170">push</span> <span
  m="1978470">down</span> <span m="1980940">but</span> <span
  m="1981230">I</span> <span m="1981320">can't</span> <span
  m="1981710">go</span> <span m="1981950">beyond</span> <span
  m="1982340">it.</span></p><p><span m="1983350">So</span> <span
  m="1984560">I</span> <span m="1984680">don't</span> <span
  m="1984860">think</span> <span m="1985100">I</span> <span
  m="1985220">could</span> <span m="1985370">get</span> <span
  m="1985670">more</span> <span m="1986030">than--</span> <span
  m="1986540">you</span> <span m="1986830">see,</span> <span
  m="1987140">everything</span> <span m="1987620">has</span> <span
  m="1987860">to</span> <span m="1988000">cross</span> <span
  m="1988380">this</span> <span m="1988640">middle.</span> <span
  m="1989040">So</span> <span m="1989270">3</span> <span m="1989690">and</span>
  <span m="1990300">4.</span> <span m="1990610">And</span> <span
  m="1990790">I</span> <span m="1991130">don't</span> <span
  m="1991310">think</span> <span m="1991520">I</span> <span
  m="1991640">could</span> <span m="1991790">beat</span> <span
  m="1992030">23.</span> <span m="1993540">If</span> <span
  m="1993890">somebody</span> <span m="1994340">said</span> <span
  m="1995600">more</span> <span m="1995840">than</span> <span
  m="1995990">23,</span> <span m="1996590">I</span> <span
  m="1996740">would</span> <span m="1996890">be</span> <span
  m="1997100">very</span> <span m="1997430">doubtful,</span> <span
  m="1998360">because</span> <span m="1998900">I</span> <span
  m="1999050">couldn't</span> <span m="1999380">get</span> <span
  m="1999560">it</span> <span m="1999710">across</span> <span
  m="2000160">the</span> <span m="2000280">middle.</span></p><p><span
  m="2001352">But</span> <span m="2001740">then,</span> <span
  m="2002470">can</span> <span m="2002740">I</span> <span m="2002890">get</span>
  <span m="2003160">23?</span> <span m="2004390">I</span> <span
  m="2004540">doubt</span> <span m="2004870">it.</span> <span
  m="2005920">Maybe</span> <span m="2006250">14</span> <span m="2006850">is
  the</span> <span m="2006990">best</span> <span m="2007300">possible.</span>
  <span m="2008840">So</span> <span m="2009020">how</span> <span
  m="2009230">would</span> <span m="2009410">we</span> <span
  m="2009560">show</span> <span m="2009890">that</span> <span
  m="2010080">14</span> <span m="2010445">is the</span> <span
  m="2010810">best</span> <span m="2011070">possible?</span></p><p><span
  m="2015330">I</span> <span m="2015510">think</span> <span
  m="2015870">if</span> <span m="2016140">I</span> <span
  m="2016290">could</span> <span m="2016500">find--</span> <span
  m="2017760">so</span> <span m="2018120">this</span> <span
  m="2018360">is</span> <span m="2018540">called</span> <span
  m="2019110">a</span> <span m="2019540">cut,</span> <span m="2020245">a</span>
  <span m="2020630">cut</span> <span m="2021890">in</span> <span
  m="2022070">this</span> <span m="2022380">network.</span> <span
  m="2023610">Oh,</span> <span m="2023850">yes,</span> <span
  m="2024090">I</span> <span m="2024210">see</span> <span m="2024420">a</span>
  <span m="2024510">cut.</span> <span m="2025185">A</span> <span
  m="2025590">cut</span> <span m="2026400">like</span> <span
  m="2026730">there.</span> <span m="2030310">You</span> <span
  m="2030460">see</span> <span m="2030760">that?</span></p><p><span
  m="2031750">Every</span> <span m="2034900">bit</span> <span
  m="2035110">of</span> <span m="2035200">flow</span> <span
  m="2035680">has</span> <span m="2035800">got</span> <span
  m="2036010">to</span> <span m="2036130">cross</span> <span
  m="2036550">that</span> <span m="2036820">cut.</span> <span
  m="2038180">And</span> <span m="2038390">the</span> <span
  m="2038510">total</span> <span m="2038930">capacity</span> <span
  m="2040730">crossing</span> <span m="2041420">is</span> <span
  m="2041630">the</span> <span m="2041780">3</span> <span m="2042260">and</span>
  <span m="2042380">the</span> <span m="2042470">1</span> <span
  m="2043010">and</span> <span m="2043130">the</span> <span m="2043280">2</span>
  <span m="2043640">and</span> <span m="2043730">the</span> <span
  m="2043930">8,</span> <span m="2044240">which</span> <span
  m="2044480">is</span> <span m="2044660">14.</span> <span m="2046510">So</span>
  <span m="2046580">I</span> <span m="2046670">can't</span> <span
  m="2046970">get</span> <span m="2047180">more</span> <span
  m="2047390">than</span> <span m="2047540">14</span> <span
  m="2048170">through.</span> <span m="2048590">And</span> <span
  m="2048739">somehow</span> <span m="2049909">that</span> <span
  m="2050150">cut</span> <span m="2050510">is</span> <span
  m="2051830">loaded</span> <span m="2052280">to</span> <span
  m="2052429">capacity.</span> <span m="2053620">Probably</span> <span
  m="2054679">those</span> <span m="2055159">edges</span> <span
  m="2056510">all</span> <span m="2056870">have</span> <span
  m="2057139">to</span> <span m="2057260">be</span> <span
  m="2058310">fully</span> <span m="2059330">up to</span> <span
  m="2059659">capacity</span> <span m="2062270">that</span> <span
  m="2062510">cross</span> <span m="2062929">the</span> <span
  m="2063050">cut.</span></p><p><span m="2063530">So</span> <span
  m="2064239">the</span> <span m="2064400">cut</span> <span
  m="2064760">is</span> <span m="2065719">a</span> <span
  m="2065810">separation</span> <span m="2066650">of</span> <span
  m="2066860">edges</span> <span m="2067290">that</span> <span
  m="2067389">go</span> <span m="2067610">with</span> <span
  m="2067850">the</span> <span m="2067909">source</span> <span
  m="2068830">and--</span> <span m="2069800">sorry--</span> <span
  m="2070130">nodes</span> <span m="2070610">that</span> <span
  m="2070730">go</span> <span m="2070940">with</span> <span
  m="2071110">the</span> <span m="2071210">source,</span> <span
  m="2071719">nodes</span> <span m="2072110">that</span> <span
  m="2072230">go</span> <span m="2072440">with</span> <span
  m="2072620">the</span> <span m="2072770">sink.</span> <span
  m="2073820">Yes.</span> <span m="2077030">And</span> <span
  m="2077330">then</span> <span m="2077540">it's</span> <span
  m="2077719">the</span> <span m="2077870">edges</span> <span
  m="2078260">across</span> <span m="2078770">the</span> <span
  m="2078889">cut.</span></p><p><span m="2082820">Is</span> <span
  m="2083239">that</span> <span m="2083480">OK</span> <span
  m="2083840">for</span> <span m="2084020">an</span> <span
  m="2084110">example?</span> <span m="2085739">So</span> <span
  m="2085920">that's</span> <span m="2086219">the</span> <span
  m="2086370">duality.</span> <span m="2087679">The</span> <span
  m="2087750">maximum</span> <span m="2088440">flow</span> <span
  m="2089400">turned</span> <span m="2089699">out</span> <span
  m="2089850">to</span> <span m="2089969">be</span> <span m="2090170">14,</span>
  <span m="2091679">and</span> <span m="2091860">the</span> <span
  m="2091949">minimum</span> <span m="2092429">cut</span> <span
  m="2092790">turned</span> <span m="2093090">out</span> <span
  m="2093239">to</span> <span m="2093330">be</span> <span m="2093480">14.</span>
  <span m="2094139">And</span> <span m="2094260">when</span> <span
  m="2094440">those</span> <span m="2094739">match,</span> <span
  m="2095100">14</span> <span m="2095610">equal</span> <span
  m="2095850">14,</span> <span m="2096330">I</span> <span
  m="2096420">know</span> <span m="2096600">I'm</span> <span
  m="2096719">through.</span> <span m="2098110">I</span> <span
  m="2098220">know</span> <span m="2098430">I'm</span> <span
  m="2098550">through</span> <span m="2098880">because</span> <span
  m="2099090">I'm</span> <span m="2099240">able</span> <span
  m="2099480">to</span> <span m="2099570">get</span> <span m="2099720">14</span>
  <span m="2100290">through</span> <span m="2100560">and</span> <span
  m="2100680">I</span> <span m="2100770">could</span> <span
  m="2100920">never</span> <span m="2101190">get</span> <span
  m="2101370">more.</span> <span m="2102580">Yes.</span> <span
  m="2103060">3</span> <span m="2103440">and</span> <span m="2103620">4</span>
  <span m="2103980">and</span> <span m="2104100">6</span> <span
  m="2104460">and</span> <span m="2104570">8.</span> <span
  m="2104880">Yes.</span></p><p><span m="2106770">And,</span> <span
  m="2106920">of</span> <span m="2106980">course,</span> <span
  m="2107530">in</span> <span m="2107750">a</span> <span m="2107790">big</span>
  <span m="2108090">network,</span> <span m="2111180">the</span> <span
  m="2111300">maximum</span> <span m="2111810">cut</span> <span
  m="2112080">is</span> <span m="2112200">not</span> <span
  m="2112410">going</span> <span m="2112590">to</span> <span
  m="2112680">be</span> <span m="2114120">visible.</span> <span
  m="2115110">Well,</span> <span m="2115350">you</span> <span
  m="2115480">couldn't--</span> <span m="2116490">it</span> <span
  m="2116580">would</span> <span m="2116820">have</span> <span
  m="2117420">thousands</span> <span m="2117960">of</span> <span
  m="2118110">edges.</span> <span m="2118590">You</span> <span
  m="2118710">couldn't</span> <span m="2119010">see</span> <span
  m="2119280">what</span> <span m="2119520">you</span> <span
  m="2119610">were</span> <span m="2119730">doing,</span> <span
  m="2121080">But</span> <span m="2121380">you</span> <span
  m="2121530">could</span> <span m="2121770">solve</span> <span
  m="2122160">this</span> <span m="2122400">problem</span> <span
  m="2124560">fast,</span> <span m="2125280">actually</span> <span
  m="2125760">fast.</span></p><p><span m="2126660">And</span> <span
  m="2127050">it's</span> <span m="2127260">an</span> <span
  m="2127380">important--</span> <span m="2128440">in</span> <span
  m="2128730">practice,</span> <span m="2129300">it's</span> <span
  m="2129480">an</span> <span m="2129600">important</span> <span
  m="2130230">example.</span> <span m="2131210">A</span> <span
  m="2131470">lot</span> <span m="2131790">of</span> <span
  m="2131910">other</span> <span m="2132300">things</span> <span
  m="2132720">fit</span> <span m="2133050">into</span> <span
  m="2133380">the</span> <span m="2133500">max</span> <span
  m="2133920">flow</span> <span m="2134300">min</span> <span
  m="2134520">cut</span> <span m="2135640">example.</span> <span
  m="2136740">And</span> <span m="2137130">therefore</span> <span
  m="2137700">solving</span> <span m="2138210">it</span> <span
  m="2138360">in</span> <span m="2139020">faster</span> <span
  m="2139630">than--</span> <span m="2140100">oh,</span> <span
  m="2140310">I</span> <span m="2140400">didn't</span> <span
  m="2140640">even</span> <span m="2140850">say</span> <span
  m="2141120">about</span> <span m="2141720">speed.</span></p><p><span
  m="2144150">So</span> <span m="2144370">the</span> <span
  m="2144510">simplex</span> <span m="2145080">method,</span> <span
  m="2146040">almost</span> <span m="2146640">always</span> <span
  m="2147120">it's</span> <span m="2147390">average</span> <span
  m="2147930">case.</span> <span m="2149760">Dan</span> <span
  m="2150090">Spielman,</span> <span m="2150690">who</span> <span
  m="2150810">was</span> <span m="2151020">on</span> <span
  m="2151140">the</span> <span m="2151260">faculty</span> <span
  m="2151790">here,</span> <span m="2153990">who's</span> <span
  m="2154530">just</span> <span m="2154980">terrific</span> <span
  m="2155550">in</span> <span m="2155670">this</span> <span
  m="2156840">area,</span> <span m="2158520">was</span> <span
  m="2159060">maybe</span> <span m="2159480">among</span> <span
  m="2159750">the</span> <span m="2159870">first</span> <span
  m="2160320">to</span> <span m="2160440">study</span> <span
  m="2160920">the</span> <span m="2161100">average</span> <span
  m="2161760">case.</span></p><p><span m="2163260">So</span> <span
  m="2163860">for</span> <span m="2164070">an</span> <span
  m="2164190">average</span> <span m="2165720">choice</span> <span
  m="2166170">of</span> <span m="2166320">A</span> <span m="2166740">and
  b</span> <span m="2166980">and</span> <span m="2167100">c,</span> <span
  m="2168960">instead</span> <span m="2169350">of</span> <span
  m="2169710">making</span> <span m="2170190">the</span> <span
  m="2170310">worst</span> <span m="2170670">choice--</span> <span
  m="2171180">for</span> <span m="2171300">the</span> <span
  m="2171390">worst</span> <span m="2171750">choice,</span> <span
  m="2172200">you</span> <span m="2172350">can</span> <span
  m="2172590">create</span> <span m="2173160">a</span> <span
  m="2174080">feasible</span> <span m="2174660">set</span> <span
  m="2175050">that</span> <span m="2175250">it</span> <span
  m="2175380">has</span> <span m="2175590">to</span> <span m="2175680">go</span>
  <span m="2175880">corner,</span> <span m="2176310">corner,</span> <span
  m="2176700">corner,</span> <span m="2177030">corner</span> <span
  m="2179790">to</span> <span m="2179940">get</span> <span m="2180120">to</span>
  <span m="2180240">the</span> <span m="2180450">end,</span> <span
  m="2180950">so</span> <span m="2181080">the</span> <span
  m="2181200">simplex</span> <span m="2181770">method</span> <span
  m="2182160">would</span> <span m="2182310">take</span> <span
  m="2183030">exponentially</span> <span m="2183930">long.</span> <span
  m="2184890">But</span> <span m="2185400">that's</span> <span
  m="2185970">extremely</span> <span m="2186660">rare.</span> <span
  m="2187020">It</span> <span m="2187070">doesn't</span> <span
  m="2187470">happen</span> <span m="2187830">in</span> <span
  m="2188400">practice,</span> <span m="2189390">I</span> <span
  m="2189480">think.</span> <span m="2190020">And</span> <span
  m="2191550">the</span> <span m="2191760">average</span> <span
  m="2192330">one</span> <span m="2192660">is a</span> <span
  m="2192840">polynomial,</span> <span m="2193590">so</span> <span
  m="2193800">it's</span> <span m="2193950">a</span> <span
  m="2194040">fast</span> <span m="2194430">method</span> <span
  m="2197760">on</span> <span m="2197970">average.</span></p><p><span
  m="2200580">And</span> <span m="2200850">we</span> <span
  m="2201030">can</span> <span m="2201210">show--</span> <span
  m="2201450">actually,</span> <span m="2201840">that</span> <span
  m="2202020">was</span> <span m="2202200">a</span> <span
  m="2202260">famous</span> <span m="2203220">result</span> <span
  m="2203760">that</span> <span m="2203880">came</span> <span
  m="2204180">from</span> <span m="2204420">Russia,</span> <span
  m="2205500">that</span> <span m="2207000">linear</span> <span
  m="2207420">programming</span> <span m="2208290">is</span> <span
  m="2209440">in</span> <span m="2209790">the</span> <span
  m="2209910">big</span> <span m="2210840">P</span> <span
  m="2211260">versus</span> <span m="2211770">LP</span> <span
  m="2212700">world,</span> <span m="2213990">linear</span> <span
  m="2214350">programming</span> <span m="2215220">goes</span> <span
  m="2215550">with</span> <span m="2215790">P.</span> <span
  m="2216390">Linear</span> <span m="2216750">programming</span> <span
  m="2217440">is</span> <span m="2217620">a</span> <span
  m="2217680">problem</span> <span m="2218520">that</span> <span
  m="2218730">can</span> <span m="2219150">be</span> <span
  m="2219330">solved</span> <span m="2219840">in</span> <span
  m="2219960">polynomial</span> <span m="2220740">time.</span> <span
  m="2221480">The</span> <span m="2221690">simplex</span> <span
  m="2222240">method</span> <span m="2222660">won't</span> <span
  m="2222900">always</span> <span m="2223290">do</span> <span
  m="2223530">it</span> <span m="2224040">but</span> <span m="2224430">it</span>
  <span m="2224580">can</span> <span m="2224790">be</span> <span
  m="2224940">done.</span> <span m="2225940">Yes.</span> <span
  m="2226200">There</span> <span m="2226410">came</span> <span
  m="2226860">into</span> <span m="2227250">the</span> <span
  m="2228240">world,</span> <span m="2228760">the</span> <span
  m="2229080">ellipsoid</span> <span m="2229770">methods,</span> <span
  m="2230430">and</span> <span m="2230730">it</span> <span
  m="2230850">was</span> <span m="2231120">an</span> <span
  m="2231450">exciting</span> <span m="2232080">time</span> <span
  m="2233010">to</span> <span m="2233190">decide</span> <span
  m="2233820">that</span> <span m="2234720">linear</span> <span
  m="2235050">programming</span> <span m="2235650">was</span> <span
  m="2235980">actually</span> <span m="2236870">P</span> <span
  m="2237280">and</span> <span m="2237380">not</span> <span
  m="2237930">LP.</span></p><p><span m="2242900">So</span> <span
  m="2243650">this</span> <span m="2243860">is</span> <span m="2244010">a</span>
  <span m="2244070">case</span> <span m="2244460">of</span> <span
  m="2244580">duality</span> <span m="2245870">where</span> <span
  m="2246110">you</span> <span m="2246260">can</span> <span
  m="2246500">understand</span> <span m="2247130">duality</span> <span
  m="2248390">by</span> <span m="2249440">the</span> <span
  m="2249570">statement</span> <span m="2250340">that</span> <span
  m="2250590">the</span> <span m="2251090">flow</span> <span
  m="2251600">cannot</span> <span m="2252020">exceed</span> <span
  m="2252620">the</span> <span m="2252770">capacity</span> <span
  m="2253580">of</span> <span m="2253700">the</span> <span
  m="2253820">cut.</span> <span m="2254720">So</span> <span
  m="2255140">that's</span> <span m="2255440">what</span> <span
  m="2255590">duality</span> <span m="2256280">is,</span> <span
  m="2256870">that</span> <span m="2257340">any</span> <span
  m="2257690">flow</span> <span m="2262160">has</span> <span
  m="2262460">to</span> <span m="2262540">be</span> <span
  m="2262730">less</span> <span m="2263230">or</span> <span
  m="2263620">equal</span> <span m="2263890">the</span> <span
  m="2264110">capacity</span> <span m="2267740">of</span> <span
  m="2268640">any</span> <span m="2269020">cut,</span> <span
  m="2271955">the</span> <span m="2272390">capacity</span> <span
  m="2273170">being</span> <span m="2273920">the</span> <span
  m="2274130">sum</span> <span m="2274730">of</span> <span
  m="2275000">the</span> <span m="2276290">ones.</span></p><p><span
  m="2276650">So,</span> <span m="2277010">of</span> <span
  m="2277160">course,</span> <span m="2277430">there</span> <span
  m="2277580">are</span> <span m="2277640">other</span> <span
  m="2277910">cuts.</span> <span m="2278720">That</span> <span
  m="2278990">cut</span> <span m="2280310">has</span> <span
  m="2280580">to</span> <span m="2280670">be</span> <span
  m="2280850">crossed,</span> <span m="2281390">but</span> <span
  m="2281540">that's</span> <span m="2281810">gone</span> <span
  m="2282010">3,</span> <span m="2282570">7,</span> <span m="2283090">14,</span>
  <span m="2283740">22</span> <span m="2284520">capacity.</span> <span
  m="2285710">So</span> <span m="2286340">the</span> <span m="2286520">14</span>
  <span m="2287090">capacity</span> <span m="2288860">was</span> <span
  m="2289190">the</span> <span m="2289520">minimum,</span> <span
  m="2291030">and</span> <span m="2291410">that</span> <span
  m="2291560">gave</span> <span m="2291830">the</span> <span
  m="2291950">maximum.</span> <span m="2292670">Nice.</span> <span
  m="2293120">Isn't</span> <span m="2293320">it</span> <span
  m="2293510">nice?</span> <span m="2294400">Yes.</span></p><p><span
  m="2297100">So</span> <span m="2297370">there</span> <span
  m="2297540">is</span> <span m="2297670">another</span> <span
  m="2298570">world</span> <span m="2299110">here</span> <span
  m="2299590">of</span> <span m="2300990">two-person</span> <span
  m="2301690">games</span> <span m="2302860">that</span> <span
  m="2303040">also</span> <span m="2303460">has</span> <span
  m="2303730">duality</span> <span m="2305020">and</span> <span
  m="2305260">could</span> <span m="2305470">be</span> <span
  m="2305650">expressed.</span> <span m="2306190">So</span> <span
  m="2306370">let</span> <span m="2306520">me</span> <span
  m="2306640">just</span> <span m="2307960">talk</span> <span
  m="2308650">finally</span> <span m="2309160">today</span> <span
  m="2309610">about</span> <span m="2310510">two-person</span> <span
  m="2311230">games.</span> <span m="2311680">So</span> <span
  m="2312460">the</span> <span m="2312670">two</span> <span
  m="2312910">persons</span> <span m="2313420">are</span> <span
  m="2313570">x</span> <span m="2313840">and</span> <span m="2313960">y</span>
  <span m="2314320">of</span> <span m="2314440">course.</span> <span
  m="2315430">What</span> <span m="2315700">other</span> <span
  m="2315910">names</span> <span m="2316330">could</span> <span
  m="2316480">they</span> <span m="2316690">have?</span></p><p><span
  m="2317770">And</span> <span m="2320900">there</span> <span
  m="2321130">is</span> <span m="2321310">a</span> <span
  m="2322510">matrix</span> <span m="2323170">involved.</span> <span
  m="2324670">This</span> <span m="2324940">is</span> <span
  m="2325270">the</span> <span m="2326590">payoff</span> <span
  m="2327070">matrix.</span> <span m="2331690">So</span> <span
  m="2331870">let</span> <span m="2332050">me</span> <span
  m="2332170">take</span> <span m="2332470">a</span> <span
  m="2332530">very</span> <span m="2332830">simple</span> <span
  m="2333250">game</span> <span m="2333610">first.</span></p><p><span
  m="2336690">So</span> <span m="2337710">x</span> <span m="2338040">is</span>
  <span m="2338220">going</span> <span m="2338490">to</span> <span
  m="2338550">choose</span> <span m="2339120">one</span> <span
  m="2339330">of</span> <span m="2339420">these</span> <span
  m="2339910">rows,</span> <span m="2341890">and</span> <span
  m="2342070">y</span> <span m="2342520">is</span> <span
  m="2342670">going</span> <span m="2342850">to</span> <span
  m="2342940">choose</span> <span m="2343450">one</span> <span
  m="2343660">of</span> <span m="2343720">these</span> <span
  m="2344050">columns.</span> <span m="2345040">And</span> <span
  m="2345160">let's</span> <span m="2345460">say</span> <span
  m="2345640">payoff</span> <span m="2346390">from</span> <span
  m="2346780">x</span> <span m="2347170">to</span> <span m="2347500">y.</span>
  <span m="2351760">I</span> <span m="2352120">like</span> <span
  m="2352360">it</span> <span m="2352450">that</span> <span
  m="2352660">way</span> <span m="2352930">because,</span> <span
  m="2353380">then,</span> <span m="2354220">x,</span> <span
  m="2354640">who's</span> <span m="2354940">paying,</span> <span
  m="2356980">is</span> <span m="2357160">going</span> <span
  m="2357340">to</span> <span m="2357460">be</span> <span
  m="2357670">minimizing,</span> <span m="2358840">as</span> <span
  m="2359140">x</span> <span m="2359530">was</span> <span m="2359890">up</span>
  <span m="2360070">here.</span> <span m="2361090">And</span> <span
  m="2361330">y,</span> <span m="2361880">who's</span> <span
  m="2362650">collecting,</span> <span m="2363830">is</span> <span
  m="2364030">going</span> <span m="2364170">to</span> <span
  m="2364270">be</span> <span m="2364420">maximizing,</span> <span
  m="2365470">as</span> <span m="2366230">in</span> <span m="2366430">the</span>
  <span m="2366550">dual.</span></p><p><span m="2368070">So</span> <span
  m="2368320">the</span> <span m="2368440">payoff--</span> <span
  m="2369800">well,</span> <span m="2370120">let's</span> <span
  m="2370300">see.</span> <span m="2370660">I</span> <span
  m="2370810">think</span> <span m="2371140">maybe</span> <span
  m="2372220">1,</span> <span m="2372580">4,</span> <span m="2372940">2,
  8</span> <span m="2373390">would</span> <span m="2373840">be</span> <span
  m="2374800">probably</span> <span m="2375160">a</span> <span
  m="2375250">fairly</span> <span m="2375730">easy</span> <span
  m="2376690">game</span> <span m="2377050">to</span> <span
  m="2377170">play.</span> <span m="2379900">So</span> <span
  m="2380080">it's</span> <span m="2380230">a</span> <span
  m="2380290">two-person</span> <span m="2380980">game,</span> <span
  m="2381760">a</span> <span m="2381850">zero-sum</span> <span
  m="2382810">game.</span> <span m="2383290">Zero</span> <span
  m="2383710">sum</span> <span m="2384130">means--</span> <span
  m="2387040">that</span> <span m="2387190">means</span> <span
  m="2391280">all</span> <span m="2392500">pay--</span> <span
  m="2394630">what</span> <span m="2395200">x</span> <span
  m="2395440">pays</span> <span m="2395920">goes</span> <span
  m="2396250">to</span> <span m="2396400">y.</span> <span m="2398026">y</span>
  <span m="2398410">gets</span> <span m="2401110">all</span> <span
  m="2401590">that</span> <span m="2402790">x</span> <span
  m="2403210">pays.</span> <span m="2403840">There's</span> <span
  m="2404020">no</span> <span m="2405280">third</span> <span
  m="2405640">party</span> <span m="2406030">here.</span> <span
  m="2408250">No</span> <span m="2408430">lawyers</span> <span
  m="2409030">involved.</span></p><p><span m="2413310">And</span> <span
  m="2413560">y</span> <span m="2413990">is</span> <span
  m="2414160">going</span> <span m="2414340">to</span> <span
  m="2414430">choose</span> <span m="2414820">a</span> <span
  m="2414920">column,</span> <span m="2416280">and</span> <span
  m="2416530">x</span> <span m="2416830">is</span> <span
  m="2416980">going</span> <span m="2417150">to</span> <span
  m="2417250">choose</span> <span m="2417640">a</span> <span
  m="2417700">row.</span> <span m="2418870">And</span> <span
  m="2419110">x</span> <span m="2419350">wants</span> <span
  m="2419620">to</span> <span m="2419740">make</span> <span
  m="2420010">it</span> <span m="2420130">small,</span> <span
  m="2420940">and</span> <span m="2421090">y</span> <span
  m="2421420">wants</span> <span m="2421840">to</span> <span
  m="2421990">make</span> <span m="2422230">it</span> <span
  m="2422350">big.</span> <span m="2423790">So</span> <span
  m="2423970">what</span> <span m="2424180">happens</span> <span
  m="2424630">in</span> <span m="2424750">this</span> <span
  m="2424960">game?</span></p><p><span m="2426100">What</span> <span
  m="2426280">does</span> <span m="2426550">y</span> <span
  m="2426910">choose</span> <span m="2427360">to</span> <span
  m="2427510">make</span> <span m="2427750">it</span> <span
  m="2427870">big?</span> <span m="2428230">The</span> <span
  m="2428350">second</span> <span m="2428800">column.</span> <span
  m="2429760">What</span> <span m="2429940">does</span> <span
  m="2430180">x</span> <span m="2430480">choose</span> <span
  m="2430930">to</span> <span m="2431020">make</span> <span
  m="2431260">it</span> <span m="2431380">small?</span> <span
  m="2431930">The</span> <span m="2432040">first</span> <span
  m="2432490">row.</span> <span m="2433420">So</span> <span
  m="2433720">it's</span> <span m="2433900">going</span> <span
  m="2433990">to</span> <span m="2434170">be</span> <span
  m="2434970">focused</span> <span m="2435510">in</span> <span
  m="2435700">on</span> <span m="2435850">that</span> <span
  m="2436090">2,</span> <span m="2437510">because</span> <span
  m="2438220">if</span> <span m="2438390">y</span> <span
  m="2438790">keeps</span> <span m="2439180">choosing</span> <span
  m="2439660">that</span> <span m="2439870">column,</span> <span
  m="2440980">2</span> <span m="2441370">is</span> <span m="2441580">the</span>
  <span m="2441700">best--</span> <span m="2442920">the</span> <span
  m="2443080">least</span> <span m="2443560">that--</span> <span
  m="2443980">x</span> <span m="2444310">is</span> <span
  m="2444430">going</span> <span m="2444510">to</span> <span
  m="2444700">have</span> <span m="2444880">to</span> <span
  m="2445000">pay</span> <span m="2445300">2,</span> <span
  m="2446170">and</span> <span m="2446410">he</span> <span
  m="2446650">achieves</span> <span m="2447160">that</span> <span
  m="2447640">by</span> <span m="2449200">choosing</span> <span
  m="2449710">the</span> <span m="2449830">first</span> <span
  m="2450190">row.</span></p><p><span m="2450550">So</span> <span
  m="2450820">it's</span> <span m="2451000">a</span> <span
  m="2451060">simple</span> <span m="2451480">game.</span> <span
  m="2452820">That's</span> <span m="2453060">a</span> <span
  m="2453120">saddle</span> <span m="2453540">point.</span> <span
  m="2454890">It's</span> <span m="2455670">a</span> <span
  m="2455820">minimum</span> <span m="2456360">for</span> <span
  m="2456600">y</span> <span m="2457830">in</span> <span m="2458250">its</span>
  <span m="2458460">column,</span> <span m="2459000">and</span> <span
  m="2459150">it's</span> <span m="2459390">a</span> <span
  m="2459450">maximum</span> <span m="2460170">for</span> <span
  m="2460440">x</span> <span m="2461250">in</span> <span m="2461370">its</span>
  <span m="2461580">row.</span> <span m="2463090">But,</span> <span
  m="2463300">of</span> <span m="2463360">course,</span> <span
  m="2463700">a</span> <span m="2463780">matrix,</span> <span
  m="2464500">another</span> <span m="2464860">matrix</span> <span
  m="2465400">might</span> <span m="2465640">not</span> <span
  m="2465850">have</span> <span m="2466120">such</span> <span
  m="2466510">a</span> <span m="2467050">saddle</span> <span
  m="2467440">point.</span></p><p><span m="2468380">So</span> <span
  m="2468520">let</span> <span m="2468670">me--</span> <span
  m="2469060">do</span> <span m="2469210">you</span> <span
  m="2469300">see--</span> <span m="2469630">OK</span> <span
  m="2469990">with</span> <span m="2470170">this</span> <span
  m="2471610">game?</span> <span m="2472960">That</span> <span
  m="2473080">would</span> <span m="2473230">be</span> <span
  m="2473440">a</span> <span m="2473560">sort</span> <span m="2473860">of</span>
  <span m="2473920">straightforward</span> <span m="2474670">game</span> <span
  m="2475090">where</span> <span m="2475780">simple</span> <span
  m="2476230">strategy--</span> <span m="2477460">column</span> <span
  m="2477790">2</span> <span m="2478060">every</span> <span
  m="2478360">time,</span> <span m="2479290">row</span> <span
  m="2479590">1</span> <span m="2479920">every</span> <span
  m="2480190">time</span> <span m="2480670">is</span> <span
  m="2480910">the</span> <span m="2481180">optimal.</span> <span
  m="2482320">But</span> <span m="2482500">now</span> <span
  m="2482710">let</span> <span m="2482890">me</span> <span
  m="2483010">just</span> <span m="2483460">exchange</span> <span
  m="2484180">that.</span></p><p><span m="2489980">So,</span> <span
  m="2490470">again,</span> <span m="2492060">x1</span> <span
  m="2492570">and</span> <span m="2492720">x2.</span> <span
  m="2493440">y1</span> <span m="2493850">and</span> <span m="2494220">y2</span>
  <span m="2494850">are</span> <span m="2494940">the</span> <span
  m="2495090">two</span> <span m="2495360">columns.</span> <span
  m="2496230">What</span> <span m="2496380">happens</span> <span
  m="2496830">now?</span> <span m="2500740">Well,</span> <span
  m="2500910">y</span> <span m="2501300">kind</span> <span m="2501570">of</span>
  <span m="2501690">likes</span> <span m="2502080">the</span> <span
  m="2502230">big</span> <span m="2502470">number</span> <span
  m="2502900">8</span> <span m="2503170">there.</span> <span
  m="2506940">So</span> <span m="2507350">it</span> <span
  m="2507560">goes</span> <span m="2507890">for</span> <span
  m="2508040">the</span> <span m="2508160">second.</span> <span
  m="2508550">The</span> <span m="2508790">second</span> <span
  m="2509180">column</span> <span m="2509630">still</span> <span
  m="2509900">has</span> <span m="2510140">the</span> <span
  m="2510230">bigger</span> <span m="2510590">numbers.</span> <span
  m="2511580">So</span> <span m="2511730">y</span> <span m="2512480">aims</span>
  <span m="2512870">for</span> <span m="2513470">column</span> <span
  m="2513890">2.</span></p><p><span m="2515180">But</span> <span
  m="2515330">then</span> <span m="2515600">what</span> <span
  m="2515840">does</span> <span m="2516200">x</span> <span
  m="2516620">do?</span> <span m="2518440">What</span> <span
  m="2518620">row</span> <span m="2518950">does</span> <span
  m="2519220">x</span> <span m="2519520">choose</span> <span
  m="2520120">if</span> <span m="2520420">y</span> <span m="2520870">is</span>
  <span m="2521560">in</span> <span m="2521740">the</span> <span
  m="2521860">column</span> <span m="2522460">2?</span></p><p><span
  m="2523143">AUDIENCE:</span> <span m="2523359">Second.</span></p><p><span
  m="2524010">GILBERT STRANG:</span> <span m="2524090">The</span> <span
  m="2524170">second.</span> <span m="2525520">OK.</span> <span
  m="2526160">So</span> <span m="2528070">have</span> <span m="2528250">I</span>
  <span m="2528340">found</span> <span m="2528670">a</span> <span
  m="2528730">saddle</span> <span m="2529150">point?</span> <span
  m="2529600">Where</span> <span m="2530260">y</span> <span
  m="2530800">chooses</span> <span m="2531430">this</span> <span
  m="2531790">column,</span> <span m="2532630">x</span> <span
  m="2532900">chooses</span> <span m="2533380">this</span> <span
  m="2533680">row,</span> <span m="2534640">is</span> <span
  m="2534760">that</span> <span m="2534970">a</span> <span
  m="2535060">saddle</span> <span m="2535450">point?</span> <span
  m="2536860">No.</span> <span m="2537310">Because</span> <span
  m="2538120">what</span> <span m="2538360">will</span> <span
  m="2538570">y</span> <span m="2538960">do</span> <span
  m="2539220">now?</span></p><p><span m="2540100">He</span> <span
  m="2540220">sees</span> <span m="2540640">x</span> <span
  m="2541000">choosing</span> <span m="2542230">the</span> <span
  m="2542440">second</span> <span m="2542830">row</span> <span
  m="2543130">all</span> <span m="2543310">the</span> <span
  m="2543430">time,</span> <span m="2544480">and</span> <span
  m="2544630">y</span> <span m="2544990">sees</span> <span m="2545350">a</span>
  <span m="2545440">4,</span> <span m="2545940">a</span> <span
  m="2546070">very</span> <span m="2546400">tempting</span> <span
  m="2546940">4,</span> <span m="2547450">in</span> <span
  m="2547600">that</span> <span m="2548380">row.</span> <span
  m="2549280">So</span> <span m="2549460">y</span> <span m="2549850">is</span>
  <span m="2550000">going</span> <span m="2550180">to</span> <span
  m="2550300">choose</span> <span m="2550960">y1,</span> <span
  m="2551680">the</span> <span m="2551830">first</span> <span
  m="2552220">column,</span> <span m="2553090">pretty</span> <span
  m="2553390">often.</span> <span m="2555040">Not</span> <span
  m="2555280">all</span> <span m="2555460">the</span> <span
  m="2555580">time,</span> <span m="2556000">because</span> <span
  m="2556450">what</span> <span m="2556630">happens</span> <span
  m="2557370">if</span> <span m="2557680">he</span> <span
  m="2557800">just--</span> <span m="2558580">if</span> <span
  m="2559060">y</span> <span m="2560140">chooses</span> <span
  m="2560650">this</span> <span m="2560890">column</span> <span
  m="2561280">all</span> <span m="2561430">the</span> <span
  m="2561550">time,</span> <span m="2562300">then</span> <span
  m="2562510">x</span> <span m="2562780">will</span> <span
  m="2562960">choose</span> <span m="2563320">this</span> <span
  m="2563560">row</span> <span m="2563920">and</span> <span
  m="2564730">the</span> <span m="2564830">payoff</span> <span
  m="2565270">would</span> <span m="2565450">only</span> <span
  m="2565690">be</span> <span m="2565940">1,</span> <span m="2566330">so</span>
  <span m="2566620">that</span> <span m="2567760">things</span> <span
  m="2568090">went</span> <span m="2568300">downhill</span> <span
  m="2568810">for</span> <span m="2569050">y</span> <span
  m="2569430">there.</span></p><p><span m="2570880">So</span> <span
  m="2571660">this</span> <span m="2571900">is</span> <span
  m="2572050">not</span> <span m="2572470">a</span> <span
  m="2572740">saddle</span> <span m="2573190">point.</span> <span
  m="2573950">And</span> <span m="2574090">what</span> <span
  m="2574300">do</span> <span m="2574360">we</span> <span m="2574540">do?</span>
  <span m="2580340">Mixed</span> <span m="2580820">strategy,</span> <span
  m="2582096">which</span> <span m="2582552">is</span> <span
  m="2583010">y</span> <span m="2583490">will</span> <span
  m="2583730">choose</span> <span m="2585020">the</span> <span
  m="2585140">two</span> <span m="2585410">columns</span> <span
  m="2587390">with</span> <span m="2587630">some</span> <span
  m="2588020">probabilities</span> <span m="2588860">that</span> <span
  m="2589040">add</span> <span m="2589280">to</span> <span
  m="2589460">1.</span></p><p><span m="2590770">So</span> <span
  m="2591020">there will</span> <span m="2591170">be</span> <span
  m="2591350">a</span> <span m="2592790">third</span> <span
  m="2593210">possibility,</span> <span m="2595270">that</span> <span
  m="2597290">p</span> <span m="2597590">x1</span> <span m="2598610">and</span>
  <span m="2598880">1--</span> <span m="2599360">I'm</span> <span
  m="2599700">sorry--</span> <span m="2600080">p</span> <span
  m="2600380">y1.</span> <span m="2602840">p</span> <span
  m="2603200">times</span> <span m="2603620">this</span> <span
  m="2603860">column</span> <span m="2604670">and</span> <span
  m="2604820">1</span> <span m="2605120">minus</span> <span m="2605570">p</span>
  <span m="2605900">times</span> <span m="2606440">the</span> <span
  m="2606530">second</span> <span m="2607010">column.</span> <span
  m="2608120">So</span> <span m="2608330">that will</span> <span
  m="2608630">be</span> <span m="2609230">p</span> <span m="2609860">plus</span>
  <span m="2611030">1</span> <span m="2611330">minus</span> <span
  m="2611780">p</span> <span m="2612140">times</span> <span
  m="2612590">8,</span> <span m="2614630">and</span> <span m="2615110">4p</span>
  <span m="2616970">plus</span> <span m="2618110">1</span> <span
  m="2618410">minus</span> <span m="2618830">p</span> <span
  m="2619190">times</span> <span m="2619700">2.</span></p><p><span
  m="2621250">That's</span> <span m="2621720">this</span> <span
  m="2622010">mixed</span> <span m="2622640">column.</span> <span
  m="2624170">By</span> <span m="2626990">mixing</span> <span
  m="2627570">his</span> <span m="2627810">strategy,</span> <span
  m="2630470">we</span> <span m="2630650">have</span> <span m="2630800">a</span>
  <span m="2630860">strategy</span> <span m="2631550">like</span> <span
  m="2631820">a</span> <span m="2631880">third</span> <span
  m="2632210">person,</span> <span m="2632690">y3.</span> <span
  m="2635630">And,</span> <span m="2636110">of</span> <span
  m="2636260">course,</span> <span m="2637880">the</span> <span
  m="2639530">x</span> <span m="2639800">is</span> <span
  m="2639950">going</span> <span m="2640040">to</span> <span
  m="2640250">notice</span> <span m="2641030">after</span> <span
  m="2641360">a</span> <span m="2641420">while</span> <span
  m="2643280">what</span> <span m="2643520">the</span> <span
  m="2643640">strategy</span> <span m="2644300">is.</span> <span
  m="2646350">This</span> <span m="2646560">is an</span> <span
  m="2646770">open</span> <span m="2648690">competition.</span> <span
  m="2649650">You're</span> <span m="2650100">not</span> <span
  m="2650380">hiding--</span> <span m="2650890">you're</span> <span
  m="2651030">not</span> <span m="2651300">able</span> <span
  m="2651540">to</span> <span m="2651630">hide</span> <span
  m="2651990">anything.</span></p><p><span m="2653040">You</span> <span
  m="2653160">might</span> <span m="2653450">think,</span> <span
  m="2653800">well,</span> <span m="2654220">maybe</span> <span
  m="2654480">y</span> <span m="2654900">will</span> <span
  m="2655410">jump</span> <span m="2655740">around,</span> <span
  m="2656220">but</span> <span m="2656340">that's</span> <span
  m="2656650">foolishness.</span> <span m="2659620">y</span> <span
  m="2660660">is</span> <span m="2660840">going</span> <span
  m="2661050">to</span> <span m="2661110">end</span> <span m="2661410">up</span>
  <span m="2661830">finding</span> <span m="2662400">the</span> <span
  m="2662550">best</span> <span m="2664470">choice</span> <span
  m="2664890">of</span> <span m="2665010">p</span> <span
  m="2665340">between</span> <span m="2665880">0</span> <span
  m="2666270">and</span> <span m="2666440">1.</span> <span
  m="2669510">And</span> <span m="2669630">it</span> <span
  m="2669720">will</span> <span m="2669990">actually</span> <span
  m="2670380">be</span> <span m="2670680">between</span> <span
  m="2671280">0</span> <span m="2671640">and</span> <span m="2671760">1</span>
  <span m="2672060">because</span> <span m="2673130">the</span> <span
  m="2673590">extreme</span> <span m="2674220">strategies</span> <span
  m="2675090">of</span> <span m="2675960">column</span> <span
  m="2676290">1</span> <span m="2676560">and</span> <span
  m="2676680">column</span> <span m="2677010">2</span> <span
  m="2678010">were</span> <span m="2678390">not</span> <span
  m="2678630">winners.</span></p><p><span m="2679760">But</span> <span
  m="2679940">now</span> <span m="2680190">x</span> <span m="2680460">is</span>
  <span m="2680610">going</span> <span m="2680710">to</span> <span
  m="2680850">do</span> <span m="2681030">the</span> <span
  m="2681150">same</span> <span m="2681480">thing.</span> <span
  m="2682290">p</span> <span m="2682560">x1--</span> <span
  m="2683610">he's</span> <span m="2683900">going</span> <span
  m="2684090">to--</span> <span m="2684660">he</span> <span
  m="2684810">or</span> <span m="2684930">she</span> <span m="2685260">is</span>
  <span m="2685410">going</span> <span m="2685580">to</span> <span
  m="2687570">combine</span> <span m="2688080">those</span> <span
  m="2688350">rows.</span> <span m="2691160">So</span> <span
  m="2691380">this</span> <span m="2691680">would</span> <span
  m="2691950">be</span> <span m="2693980">p1</span> <span m="2695940">for</span>
  <span m="2696150">the</span> <span m="2696240">first</span> <span
  m="2696630">row,</span> <span m="2697440">and</span> <span
  m="2697650">1--</span> <span m="2698420">sorry--</span> <span
  m="2698820">p--</span> <span m="2700320">oh,</span> <span m="2700710">I</span>
  <span m="2700800">better</span> <span m="2701100">choose</span> <span
  m="2701460">another</span> <span m="2701850">number.</span> <span
  m="2703900">What's</span> <span m="2704190">another</span> <span
  m="2704580">letter</span> <span m="2704910">than</span> <span
  m="2705150">p?</span></p><p><span m="2705510">AUDIENCE:</span> <span
  m="2705747">q.</span></p><p><span m="2706460">GILBERT STRANG:</span> <span
  m="2706697">q?</span> <span m="2708620">OK,</span> <span m="2709420">q.</span>
  <span m="2714820">So</span> <span m="2715480">this</span> <span
  m="2715840">row</span> <span m="2716320">is</span> <span m="2716470">a</span>
  <span m="2716560">combination</span> <span m="2717190">of</span> <span
  m="2717280">those</span> <span m="2717610">rows,</span> <span
  m="2718160">so</span> <span m="2718300">it's</span> <span m="2719020">q</span>
  <span m="2720490">plus</span> <span m="2721000">1</span> <span
  m="2721360">minus</span> <span m="2721750">q</span> <span
  m="2722110">times</span> <span m="2722530">4</span> <span
  m="2725630">in</span> <span m="2725840">the</span> <span
  m="2726230">first</span> <span m="2726560">position,</span> <span
  m="2727700">and</span> <span m="2730430">p</span> <span
  m="2730760">times</span> <span m="2731210">8</span> <span
  m="2731960">and</span> <span m="2732230">1</span> <span
  m="2732500">minus</span> <span m="2732980">p--</span> <span
  m="2733310">q</span> <span m="2733670">times</span> <span
  m="2734020">8.</span> <span m="2735760">q</span> <span
  m="2736280">times</span> <span m="2736610">8</span> <span
  m="2736850">and</span> <span m="2736970">1</span> <span
  m="2737270">minus</span> <span m="2737720">q</span> <span
  m="2738140">times</span> <span m="2738920">2.</span> <span
  m="2739940">I'm</span> <span m="2740180">sorry</span> <span
  m="2740480">that</span> <span m="2740660">I've</span> <span
  m="2740780">written</span> <span m="2741380">this</span> <span
  m="2741620">too</span> <span m="2741890">small.</span></p><p><span
  m="2744242">But</span> <span m="2744713">what's going</span> <span
  m="2745184">to happen?</span> <span m="2750370">What's</span> <span
  m="2750610">going</span> <span m="2750760">to</span> <span
  m="2750880">determine</span> <span m="2751480">p</span> <span
  m="2751750">and</span> <span m="2751930">q</span> <span m="2752320">and</span>
  <span m="2753310">solve</span> <span m="2753800">the</span> <span
  m="2753910">game?</span> <span m="2757840">Well,</span> <span
  m="2758080">if</span> <span m="2758200">these</span> <span
  m="2758470">are</span> <span m="2758650">equal,</span> <span
  m="2761000">then</span> <span m="2761290">what</span> <span
  m="2761500">happens?</span> <span m="2764100">Then</span> <span
  m="2764940">x</span> <span m="2765310">is</span> <span m="2766980">OK</span>
  <span m="2767280">with</span> <span m="2767490">either</span> <span
  m="2767730">one.</span> <span m="2770790">x</span> <span
  m="2771060">has</span> <span m="2771210">nothing</span> <span
  m="2771570">to</span> <span m="2771690">choose</span> <span
  m="2772140">if</span> <span m="2772260">those</span> <span
  m="2772530">are</span> <span m="2772680">equal</span> <span
  m="2774330">and</span> <span m="2774810">y</span> <span m="2775200">is</span>
  <span m="2775350">staying</span> <span m="2775920">with</span> <span
  m="2776160">his</span> <span m="2776430">mixed</span> <span
  m="2776780">strategy,</span> <span m="2777840">which</span> <span
  m="2778080">gives</span> <span m="2778350">him</span> <span
  m="2778740">this</span> <span m="2780210">third</span> <span
  m="2780990">combination</span> <span m="2781800">column.</span> <span
  m="2782640">Then</span> <span m="2783030">x</span> <span m="2783510">is</span>
  <span m="2784230">good.</span></p><p><span m="2784620">Now,</span> <span
  m="2784860">you</span> <span m="2784980">might</span> <span
  m="2785220">say,</span> <span m="2785650">well,</span> <span
  m="2785880">then</span> <span m="2786120">x</span> <span
  m="2786390">could</span> <span m="2786540">do</span> <span
  m="2786720">what</span> <span m="2786930">it</span> <span
  m="2786990">wanted.</span> <span m="2788730">But</span> <span
  m="2789750">x</span> <span m="2790050">couldn't</span> <span
  m="2790380">do</span> <span m="2790560">what</span> <span
  m="2790770">it</span> <span m="2790920">wanted.</span> <span
  m="2791850">If</span> <span m="2792030">x</span> <span
  m="2792420">doesn't</span> <span m="2792810">stick</span> <span
  m="2793230">with</span> <span m="2793860">the</span> <span
  m="2794190">optimal</span> <span m="2794760">strategy</span> <span
  m="2795450">q</span> <span m="2796020">for</span> <span m="2796320">x,</span>
  <span m="2797850">then</span> <span m="2798180">y</span> <span
  m="2798570">will</span> <span m="2799140">take</span> <span
  m="2799410">advantage.</span> <span m="2800040">So,</span> <span
  m="2801090">really,</span> <span m="2801600">the</span> <span
  m="2801750">game</span> <span m="2802140">settles</span> <span
  m="2802620">down</span> <span m="2803070">to</span> <span
  m="2804150">once--</span> <span m="2805460">so</span> <span
  m="2805680">these</span> <span m="2806130">should</span> <span
  m="2806430">be</span> <span m="2806640">equal.</span></p><p><span
  m="2807630">So</span> <span m="2808470">when</span> <span
  m="2809250">those</span> <span m="2809520">are</span> <span
  m="2809670">equal,</span> <span m="2810990">what</span> <span
  m="2811530">do</span> <span m="2811650">I get?</span> <span
  m="2811770">I</span> <span m="2812050">have</span> <span
  m="2812250">p--</span> <span m="2813810">it</span> <span
  m="2813930">looks</span> <span m="2814170">like</span> <span
  m="2814410">I</span> <span m="2814530">have</span> <span m="2814680">8</span>
  <span m="2814920">minus</span> <span m="2816150">7p</span> <span
  m="2817110">there</span> <span m="2817560">for</span> <span
  m="2817710">the</span> <span m="2817860">first</span> <span
  m="2818250">one.</span> <span m="2819000">And</span> <span
  m="2819120">here,</span> <span m="2819360">I</span> <span
  m="2819480">have</span> <span m="2819570">4p</span> <span
  m="2820230">minus</span> <span m="2820710">2p.</span> <span
  m="2821670">That's</span> <span m="2821940">2p</span> <span
  m="2823230">plus</span> <span m="2823570">1.</span> <span
  m="2824640">Did</span> <span m="2824820">I</span> <span m="2824910">get</span>
  <span m="2825120">that</span> <span m="2825280">possibly</span> <span
  m="2825810">right?</span></p><p><span m="2827074">AUDIENCE:</span> <span
  m="2827315">Plus</span> <span m="2827556">2.</span></p><p><span
  m="2831412">GILBERT STRANG:</span> <span m="2831656">2,</span> <span
  m="2832350">4p</span> <span m="2833150">minus</span> <span
  m="2833510">2p</span> <span m="2833790">is</span> <span m="2834105">the</span>
  <span m="2834420">2p.</span> <span m="2835550">Oh,</span> <span
  m="2835800">it's</span> <span m="2836160">2.</span> <span
  m="2836690">Yes.</span> <span m="2837640">OK.</span> <span
  m="2839190">So</span> <span m="2839370">those</span> <span
  m="2839610">are</span> <span m="2839760">equal.</span> <span
  m="2840770">And</span> <span m="2840870">that</span> <span
  m="2841080">tells</span> <span m="2841410">me</span> <span
  m="2841620">that</span> <span m="2841770">9p</span> <span
  m="2842790">is</span> <span m="2842910">6,</span> <span m="2844710">and</span>
  <span m="2844860">p</span> <span m="2845130">is</span> <span
  m="2845340">2/3.</span></p><p><span m="2849300">So</span> <span
  m="2850330">it</span> <span m="2850530">turned</span> <span
  m="2850890">out</span> <span m="2851250">that</span> <span
  m="2852030">the</span> <span m="2852150">best</span> <span
  m="2852420">strategy</span> <span m="2853020">for</span> <span
  m="2853200">y</span> <span m="2853800">is</span> <span m="2854700">2/3</span>
  <span m="2855930">on</span> <span m="2856470">the</span> <span
  m="2856590">first</span> <span m="2856920">column</span> <span
  m="2857280">which</span> <span m="2857490">didn't</span> <span
  m="2857670">look</span> <span m="2857880">so</span> <span
  m="2858030">promising,</span> <span m="2859770">and</span> <span
  m="2860010">1/3</span> <span m="2860850">on</span> <span
  m="2861030">the</span> <span m="2861150">second</span> <span
  m="2861550">column.</span> <span m="2862950">And</span> <span
  m="2864580">by</span> <span m="2864840">creating</span> <span
  m="2865320">that</span> <span m="2865590">strategy,</span> <span
  m="2866250">what</span> <span m="2867000">do</span> <span
  m="2867120">these</span> <span m="2867420">numbers</span> <span
  m="2867900">come</span> <span m="2868140">out</span> <span
  m="2868320">to</span> <span m="2868470">be?</span> <span
  m="2868710">And</span> <span m="2868830">they're</span> <span
  m="2868980">supposed</span> <span m="2869280">to</span> <span
  m="2869370">come</span> <span m="2869640">out</span> <span
  m="2869820">equal.</span></p><p><span m="2870730">So</span> <span
  m="2870840">4p</span> <span m="2872070">plus--</span> <span
  m="2873080">so</span> <span m="2873300">4</span> <span
  m="2873660">times</span> <span m="2874170">2/3</span> <span
  m="2874830">is</span> <span m="2875010">8/3,</span> <span
  m="2877040">plus</span> <span m="2877320">1</span> <span
  m="2877590">minus</span> <span m="2878010">p</span> <span
  m="2878310">is</span> <span m="2878490">1/3</span> <span
  m="2879430">times--</span> <span m="2880320">plus</span> <span
  m="2880590">2/3</span> <span m="2881670">is</span> <span
  m="2881790">10/3.</span> <span m="2883140">So</span> <span
  m="2883260">I</span> <span m="2883380">think</span> <span
  m="2883650">that</span> <span m="2883760">this</span> <span
  m="2884070">is</span> <span m="2884220">10/3.</span> <span
  m="2886260">And</span> <span m="2886650">if</span> <span
  m="2886800">that</span> <span m="2887070">one</span> <span
  m="2887280">isn't</span> <span m="2887550">10/3,</span> <span
  m="2888210">I'm</span> <span m="2888390">very</span> <span
  m="2888720">surprised.</span></p><p><span m="2890250">So</span> <span
  m="2890490">that's</span> <span m="2890730">2/3--</span> <span
  m="2893732">help.</span> <span m="2894220">Is</span> <span
  m="2894708">it?</span> <span m="2896172">4p,</span> <span
  m="2899600">2p,</span> <span m="2901172">4/3.</span> <span
  m="2903140">Yes,</span> <span m="2904616">it's</span> <span
  m="2905110">telling</span> <span m="2905320">me</span> <span
  m="2905500">they're</span> <span m="2905650">the</span> <span
  m="2905800">same.</span> <span m="2907860">Did</span> <span
  m="2908170">I</span> <span m="2908290">set</span> <span
  m="2908530">them</span> <span m="2908710">equal?</span> <span
  m="2909070">Yes.</span> <span m="2909220">I</span> <span
  m="2909490">set</span> <span m="2909750">them</span> <span
  m="2909910">equal</span> <span m="2910180">to</span> <span
  m="2910270">find</span> <span m="2910570">p.</span> <span
  m="2910920">So</span> <span m="2911030">they</span> <span
  m="2911160">have</span> <span m="2911350">to</span> <span
  m="2911440">be</span> <span m="2911620">the</span> <span
  m="2911710">same.</span> <span m="2913330">Except</span> <span
  m="2913690">for</span> <span m="2913900">instructor</span> <span
  m="2914560">mistakes,</span> <span m="2915430">which</span> <span
  m="2916330">never</span> <span m="2916640">happen,</span> <span
  m="2916990">I</span> <span m="2917350">suppose.</span> <span
  m="2918070">OK.</span></p><p><span m="2918910">So</span> <span
  m="2919750">those</span> <span m="2920200">should</span> <span
  m="2920410">be</span> <span m="2920590">equal.</span> <span
  m="2921580">Then</span> <span m="2922090">x</span> <span
  m="2922390">has</span> <span m="2922600">no</span> <span
  m="2925330">way</span> <span m="2925600">to</span> <span m="2925750">do</span>
  <span m="2925960">better,</span> <span m="2927160">choose</span> <span
  m="2927670">these</span> <span m="2927940">columns.</span> <span
  m="2928330">But</span> <span m="2928450">he</span> <span
  m="2928510">can't</span> <span m="2928810">choose</span> <span
  m="2929170">those</span> <span m="2929440">columns</span> <span
  m="2929800">freely--</span> <span m="2930220">those</span> <span
  m="2930520">rows</span> <span m="2930910">freely</span> <span
  m="2931420">because</span> <span m="2932620">y</span> <span
  m="2933010">could</span> <span m="2933760">take</span> <span
  m="2934030">advantage,</span> <span m="2935070">unless--</span> <span
  m="2935590">so</span> <span m="2936610">this</span> <span
  m="2936850">would</span> <span m="2937030">give</span> <span
  m="2937750">the</span> <span m="2937900">best</span> <span
  m="2938200">strategy</span> <span m="2938890">for</span> <span
  m="2939220">q--</span> <span m="2940990">sorry--</span> <span
  m="2941290">the</span> <span m="2941410">best</span> <span
  m="2941740">q</span> <span m="2942250">for</span> <span m="2943200">x.</span>
  <span m="2944360">Yes.</span></p><p><span m="2947560">Do</span> <span
  m="2947650">you</span> <span m="2947770">see</span> <span
  m="2947980">that</span> <span m="2948130">picture</span> <span
  m="2948510">now?</span> <span m="2948700">There</span> <span
  m="2948820">could</span> <span m="2949030">be</span> <span
  m="2949780">other--</span> <span m="2950860">it</span> <span
  m="2950980">could</span> <span m="2951160">be</span> <span
  m="2951550">a</span> <span m="2951640">much</span> <span
  m="2951910">bigger</span> <span m="2952210">matrix,</span> <span
  m="2952750">of</span> <span m="2952840">course.</span> <span
  m="2953470">There</span> <span m="2953590">could</span> <span
  m="2953770">be</span> <span m="2953920">other</span> <span
  m="2954220">columns.</span> <span m="2955150">Suppose</span> <span
  m="2955570">there</span> <span m="2955690">was</span> <span
  m="2955930">a</span> <span m="2955990">0,</span> <span m="2956470">0</span>
  <span m="2958570">column.</span> <span m="2959830">What</span> <span
  m="2960010">difference--</span> <span m="2960490">what</span> <span
  m="2960640">would</span> <span m="2960910">be</span> <span
  m="2961060">the</span> <span m="2961180">effect</span> <span
  m="2961630">on</span> <span m="2961930">the</span> <span
  m="2962200">optimal</span> <span m="2962740">strategy</span> <span
  m="2963790">of</span> <span m="2963940">having</span> <span
  m="2964300">that</span> <span m="2964540">additional</span> <span
  m="2965110">column,</span> <span m="2965620">that</span> <span
  m="2965850">additional</span> <span m="2966430">option</span> <span
  m="2967330">for</span> <span m="2967630">y3?</span> <span
  m="2969820">Well,</span> <span m="2970000">he</span> <span
  m="2970150">wouldn't</span> <span m="2970390">take</span> <span
  m="2970720">it.</span></p><p><span m="2972130">So</span> <span
  m="2972790">let's</span> <span m="2973000">make</span> <span
  m="2973270">it</span> <span m="2973360">more</span> <span
  m="2973570">tempting.</span> <span m="2974850">10,</span> <span
  m="2975624">10, 10.</span> <span m="2978730">Oh,</span> <span
  m="2979060">he</span> <span m="2979180">would</span> <span
  m="2979360">take</span> <span m="2979660">that,</span> <span
  m="2979940">right?</span> <span m="2981580">Yes.</span> <span
  m="2981860">That</span> <span m="2982040">was</span> <span
  m="2982310">not--</span> <span m="2983900">so</span> <span
  m="2984230">I'm</span> <span m="2984410">not</span> <span
  m="2984590">sure</span> <span m="2984770">what</span> <span
  m="2984920">I</span> <span m="2984950">am</span> <span
  m="2985040">trying</span> <span m="2985280">to</span> <span
  m="2985370">say</span> <span m="2985580">here.</span> <span
  m="2989360">Yes.</span></p><p><span m="2991150">There</span> <span
  m="2991580">certainly</span> <span m="2992060">could</span> <span
  m="2992360">be--</span> <span m="2992570">there</span> <span
  m="2993080">could</span> <span m="2993290">be</span> <span
  m="2993470">rows</span> <span m="2994040">that--</span> <span
  m="2994900">or</span> <span m="2995030">columns,</span> <span
  m="2995750">or</span> <span m="2995960">rows</span> <span
  m="2996410">for</span> <span m="2996620">x,</span> <span
  m="2997190">that</span> <span m="2997340">don't</span> <span
  m="2997730">enter</span> <span m="2998150">the</span> <span
  m="2999050">mixed,</span> <span m="2999770">the</span> <span
  m="2999890">optimal</span> <span m="3000400">mixed</span> <span
  m="3000670">strategy.</span> <span m="3002040">A</span> <span
  m="3002140">mixed</span> <span m="3002350">strategy</span> <span
  m="3002980">is</span> <span m="3003040">some</span> <span
  m="3003310">combination</span> <span m="3004060">of</span> <span
  m="3004180">strategies,</span> <span m="3005320">some</span> <span
  m="3005560">combination</span> <span m="3006220">of</span> <span
  m="3006340">pure</span> <span m="3006820">strategies,</span> <span
  m="3008350">like</span> <span m="3008710">choose</span> <span
  m="3009100">this</span> <span m="3009460">column,</span> <span
  m="3009990">choose</span> <span m="3010310">this</span> <span
  m="3010670">row.</span> <span m="3011500">But</span> <span
  m="3012310">some</span> <span m="3013240">columns</span> <span
  m="3013720">may</span> <span m="3013930">not--</span> <span
  m="3014320">or</span> <span m="3014470">rows--</span> <span
  m="3014920">may</span> <span m="3015130">not</span> <span
  m="3015820">show</span> <span m="3016120">up</span> <span
  m="3016330">in</span> <span m="3016450">the</span> <span
  m="3016570">best</span> <span m="3016960">mixture.</span> <span
  m="3017800">So</span> <span m="3018670">I</span> <span
  m="3018760">won't</span> <span m="3019690">complete</span> <span
  m="3020200">that</span> <span m="3020938">partial</span> <span
  m="3021406">thought</span> <span m="3021874">there.</span></p><p><span
  m="3026700">So</span> <span m="3028020">do</span> <span m="3028110">you</span>
  <span m="3028230">see</span> <span m="3028440">that</span> <span
  m="3028560">we</span> <span m="3028710">have</span> <span m="3028920">a</span>
  <span m="3028980">duality</span> <span m="3029640">theorem?</span> <span
  m="3031260">First</span> <span m="3031590">of</span> <span
  m="3031650">all,</span> <span m="3031770">you</span> <span
  m="3031890">could</span> <span m="3032070">write</span> <span
  m="3032310">that</span> <span m="3032520">as</span> <span m="3032670">a</span>
  <span m="3032730">linear</span> <span m="3033090">program.</span> <span
  m="3035470">The</span> <span m="3035610">unknown</span> <span
  m="3036570">is</span> <span m="3036750">p</span> <span m="3037290">for</span>
  <span m="3037530">x--</span> <span m="3039030">for</span> <span
  m="3039240">y.</span> <span m="3040190">The</span> <span
  m="3040490">unknown</span> <span m="3040860">is</span> <span
  m="3041040">q</span> <span m="3041520">for</span> <span m="3041790">x.</span>
  <span m="3042630">So,</span> <span m="3042870">actually,</span> <span
  m="3043755">you</span> <span m="3044100">just</span> <span
  m="3044400">have</span> <span m="3044550">one</span> <span
  m="3044820">unknown</span> <span m="3045360">in</span> <span
  m="3045480">this</span> <span m="3046590">simple</span> <span
  m="3046950">problem,</span> <span m="3050370">for</span> <span
  m="3050580">this</span> <span m="3050760">small</span> <span
  m="3051150">problem.</span></p><p><span m="3052200">But</span> <span
  m="3053250">you</span> <span m="3053430">have</span> <span
  m="3053580">a</span> <span m="3053640">minimization,</span> <span
  m="3054600">a</span> <span m="3054660">maximization.</span> <span
  m="3055690">They</span> <span m="3055860">meet</span> <span
  m="3056220">at</span> <span m="3056400">the</span> <span
  m="3057030">optimum.</span> <span m="3058260">And</span> <span
  m="3060560">the</span> <span m="3061200">duality</span> <span
  m="3061920">theorem</span> <span m="3062610">becomes</span> <span
  m="3063360">the</span> <span m="3065040">theorem</span> <span
  m="3065460">for</span> <span m="3066870">two-person</span> <span
  m="3067530">games.</span> <span m="3068040">Linear</span> <span
  m="3068370">programming</span> <span m="3068970">matches</span> <span
  m="3069420">two-person</span> <span m="3070050">games.</span></p><p><span
  m="3072330">The</span> <span m="3072510">point</span> <span
  m="3072960">about</span> <span m="3073290">two</span> <span
  m="3073560">persons</span> <span m="3074550">is</span> <span
  m="3074760">very</span> <span m="3075180">important.</span> <span
  m="3076430">Three-person</span> <span m="3077280">games</span> <span
  m="3077790">are</span> <span m="3077940">incredibly</span> <span
  m="3078780">complicated.</span> <span m="3080400">No</span> <span
  m="3082320">theory</span> <span m="3082750">at</span> <span
  m="3083160">this</span> <span m="3083640">simple</span> <span
  m="3084060">level</span> <span m="3084420">would</span> <span
  m="3085590">solve</span> <span m="3086040">three-person</span> <span
  m="3086880">games.</span> <span m="3087600">So</span> <span
  m="3087750">that's</span> <span m="3088020">where</span> <span
  m="3088200">John</span> <span m="3088530">Nash's</span> <span
  m="3089850">Nobel</span> <span m="3090270">Prize</span> <span
  m="3092760">comes</span> <span m="3093090">into</span> <span
  m="3093390">the</span> <span m="3093510">picture.</span> <span
  m="3095830">So</span> <span m="3096030">his</span> <span
  m="3096420">Nobel</span> <span m="3096780">Prize</span> <span
  m="3097140">was</span> <span m="3097350">in</span> <span
  m="3097500">economics</span> <span m="3098340">because</span> <span
  m="3098790">of</span> <span m="3098910">the</span> <span
  m="3099360">wide</span> <span m="3099770">applications,</span> <span
  m="3100710">but</span> <span m="3100920">he</span> <span
  m="3101130">was</span> <span m="3101370">able</span> <span
  m="3101700">to</span> <span m="3102480">analyze</span> <span
  m="3103230">the</span> <span m="3103500">problem</span> <span
  m="3104130">of--</span> <span m="3105060">and</span> <span
  m="3105300">for</span> <span m="3105480">functions</span> <span
  m="3106170">more</span> <span m="3106410">than</span> <span
  m="3106620">for</span> <span m="3106830">matrices--</span> <span
  m="3107895">of</span> <span m="3108510">a</span> <span
  m="3110420">three-person</span> <span m="3111290">or</span> <span
  m="3111470">n-person</span> <span m="3112250">game.</span></p><p><span
  m="3113760">So</span> <span m="3113960">you</span> <span
  m="3114110">know</span> <span m="3114620">the</span> <span
  m="3114740">story</span> <span m="3115010">of</span> <span
  m="3115100">John</span> <span m="3115340">Nash?</span> <span
  m="3117070">The</span> <span m="3117230">book</span> <span
  m="3117740"><i>A</i></span> <span m="3117800"><i>Beautiful</i></span> <span
  m="3118310"><i>Mind</i></span> <span m="3118880">and</span> <span
  m="3118970">the</span> <span m="3119060">movie</span> <span
  m="3119480"><i>A</i></span> <span m="3119540"><i>Beautiful</i></span> <span
  m="3119990"><i>Mind.</i></span> <span m="3121070">So</span> <span
  m="3121340">it's</span> <span m="3121490">one</span> <span
  m="3121670">of</span> <span m="3121730">those</span> <span
  m="3121970">movies</span> <span m="3122390">that</span> <span
  m="3122570">involves</span> <span m="3123030">MIT</span> <span
  m="3123560">because</span> <span m="3123980">he</span> <span
  m="3124130">was</span> <span m="3124340">here.</span> <span
  m="3125750">But</span> <span m="3126090">you</span> <span
  m="3126230">can't</span> <span m="3126590">recognize</span> <span
  m="3127370">anything</span> <span m="3127760">about</span> <span
  m="3128210">MIT</span> <span m="3128600">in</span> <span
  m="3129120">the</span> <span m="3129350">movie.</span> <span
  m="3129760">It's</span> <span m="3130050">like</span> <span
  m="3130340"><i>Good</i></span> <span m="3130560"><i>Will</i></span> <span
  m="3130790"><i>Hunting.</i></span> <span m="3132762">You're</span> <span
  m="3133130">maybe</span> <span m="3133520">in</span> <span
  m="3133640">some</span> <span m="3133940">basement</span> <span
  m="3134660">of</span> <span m="3135800">some</span> <span
  m="3136340">remote</span> <span m="3136730">building.</span> <span
  m="3137360">But</span> <span m="3138110">anyway.</span></p><p><span
  m="3140360">It</span> <span m="3140540">was</span> <span m="3140840">of</span>
  <span m="3140900">course</span> <span m="3141220">a</span> <span
  m="3141320">tragic--</span> <span m="3142550">tragic,</span> <span
  m="3143180">and</span> <span m="3143330">then</span> <span
  m="3143670">cheer,</span> <span m="3144380">then</span> <span
  m="3145310">wonderful,</span> <span m="3145850">and</span> <span
  m="3145970">then</span> <span m="3146210">tragic</span> <span
  m="3146750">again</span> <span m="3147140">for</span> <span
  m="3147860">John</span> <span m="3148130">Nash.</span> <span
  m="3149060">He</span> <span m="3149300">had--</span> <span
  m="3150980">so</span> <span m="3151160">when</span> <span m="3151370">I</span>
  <span m="3151520">met</span> <span m="3151850">him,</span> <span
  m="3153070">he</span> <span m="3153410">was</span> <span
  m="3153650">going</span> <span m="3153810">to</span> <span
  m="3153920">teach</span> <span m="3154760">linear</span> <span
  m="3155090">algebra,</span> <span m="3155540">one</span> <span
  m="3155840">section,</span> <span m="3156470">but</span> <span
  m="3158050">that</span> <span m="3158300">never</span> <span
  m="3158630">developed.</span> <span m="3159530">That</span> <span
  m="3159740">was</span> <span m="3160010">when</span> <span
  m="3160280">he</span> <span m="3160470">was--</span> <span
  m="3161310">his</span> <span m="3161930">mental</span> <span
  m="3162440">state</span> <span m="3162770">was</span> <span
  m="3163500">going</span> <span m="3164480">downhill.</span> <span
  m="3165710">And</span> <span m="3167330">he</span> <span
  m="3168110">moved</span> <span m="3168740">to</span> <span
  m="3168920">Princeton</span> <span m="3170510">and</span> <span
  m="3171200">just</span> <span m="3172700">stayed.</span> <span
  m="3173010">And</span> <span m="3173150">then</span> <span
  m="3173340">the</span> <span m="3173600">wonderful</span> <span
  m="3174170">thing</span> <span m="3174440">was</span> <span
  m="3174740">that</span> <span m="3174860">he</span> <span
  m="3175010">improved,</span> <span m="3175640">and</span> <span
  m="3175760">then</span> <span m="3175970">the</span> <span
  m="3176090">very</span> <span m="3176480">sad</span> <span
  m="3176840">thing</span> <span m="3177110">was</span> <span
  m="3177830">his</span> <span m="3178520">death</span> <span
  m="3178820">in</span> <span m="3178970">a</span> <span m="3179030">car</span>
  <span m="3179360">accident</span> <span m="3180830">on</span> <span
  m="3180980">the</span> <span m="3181070">way</span> <span
  m="3181250">home</span> <span m="3183190">from</span> <span
  m="3183470">the</span> <span m="3183560">Nobel</span> <span
  m="3183980">Prize.</span> <span m="3184640">So</span> <span
  m="3184970">quite</span> <span m="3185390">a</span> <span
  m="3186260">story,</span> <span m="3187160">an</span> <span
  m="3187460">amazing</span> <span m="3188060">story.</span> <span
  m="3189090">Yes.</span></p><p><span m="3190430">So</span> <span
  m="3190670">that's</span> <span m="3192890">specific</span> <span
  m="3193610">optimization</span> <span m="3194510">problems,</span> <span
  m="3196280">linear</span> <span m="3196550">programming</span> <span
  m="3197180">and</span> <span m="3197330">two-person</span> <span
  m="3197900">games.</span> <span m="3199250">And</span> <span
  m="3200360">I</span> <span m="3200510">hope</span> <span
  m="3200750">that</span> <span m="3200900">Friday</span> <span
  m="3202860">it</span> <span m="3202970">will</span> <span
  m="3203150">be</span> <span m="3204490">Professor</span> <span
  m="3205080">Sra.</span> <span m="3206820">Anyway,</span> <span
  m="3207240">the</span> <span m="3207360">lecture</span> <span
  m="3207780">will</span> <span m="3207990">certainly</span> <span
  m="3208410">be</span> <span m="3208620">about</span> <span
  m="3209160">stochastic</span> <span m="3210000">gradient</span> <span
  m="3210540">descent.</span> <span m="3211200">Good.</span> <span
  m="3211800">Thanks.</span></p>
uid: aad61155b6deef238baf2022c1b8b5af
type: courses
layout: video
---
