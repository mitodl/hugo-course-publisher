---
about_this_resource_text: "<h2 class=\"subhead\">Description</h2> <p>In this lecture, Professor Strang reviews how to find the derivatives of inverse and singular values. Later in the lecture, he discusses LASSO optimization, the nuclear norm, matrix completion, and compressed sensing.</p> <h2 class=\"subhead\">Summary</h2> <p>Derivative of \\(A^2\\) is \\(A(dA/dt)+(dA/dt)A\\): NOT \\(2A(dA/dt)\\).<br /> The inverse of \\(A\\) has derivative \\(-A^{-1}(dA/dt)A^{-1}\\).<br /> Derivative of singular values \\(= u(dA/dt)v^{\\mathtt{T}} \\) \t<br /> Interlacing of eigenvalues / Weyl inequalities</p> <p>Related section in textbook: III.1-2</p> <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>"
embedded_media:
  - id: Video-YouTube-Stream
    media_location: AdTvkFsqcDc
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    title: Video-YouTube-Stream
    type: Video
    uid: ba907acb08af0c781c97bd419ac76166
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/AdTvkFsqcDc/default.jpg'
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7425d5b5c06056e8fa0e4a1b855eb30c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: AdTvkFsqcDc
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: bd4a36c9b34444fb15aa85ec5e68659c
  - id: AdTvkFsqcDc.srt
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-16-derivatives-of-inverse-and-singular-values/AdTvkFsqcDc.srt
    title: 3play caption file
    type: null
    uid: e619e9415d12bc8b6e9b35cca8e18968
  - id: AdTvkFsqcDc.pdf
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-16-derivatives-of-inverse-and-singular-values/AdTvkFsqcDc.pdf
    title: 3play pdf file
    type: null
    uid: 87d2bf2cf421d8afdf9c09a55291322e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e82e59f3842c6f6ea9711a6b1832fd71
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0d640e7973f95e199acd64adaffa7bb1
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture16_300k.mp4'
    parent_uid: d1fbe34c24214c5093b79e4e3d36008f
    title: Video-Internet Archive-MP4
    type: Video
    uid: a3491a2a4fe253d5fac2b90320d33a39
inline_embed_id: 79610982lecture16derivativesofinverseandsingularvalues3001613
order_index: 170
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-16-derivatives-of-inverse-and-singular-values
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-16-derivatives-of-inverse-and-singular-values
title: 'Lecture 16: Derivatives of Inverse and Singular Values'
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
  m="23170">GILBERT STRANG:</span> <span m="23415">OK,</span> <span
  m="23930">so</span> <span m="24980">kind</span> <span m="25160">of</span>
  <span m="25220">a</span> <span m="25260">few</span> <span
  m="25490">things</span> <span m="25820">in</span> <span m="25940">mind</span>
  <span m="26270">for</span> <span m="26450">today.</span> <span
  m="27920">One</span> <span m="28190">is</span> <span m="28400">to</span> <span
  m="28610">answer</span> <span m="28970">those</span> <span
  m="29300">two</span> <span m="29570">questions</span> <span
  m="30200">on</span> <span m="30380">the</span> <span m="30500">second</span>
  <span m="30890">line.</span> <span m="33860">We</span> <span
  m="34040">found</span> <span m="34280">those</span> <span m="34520">two</span>
  <span m="34730">formulas</span> <span m="35360">on</span> <span
  m="35510">the</span> <span m="35630">first</span> <span m="35990">line</span>
  <span m="36920">last</span> <span m="37220">time,</span> <span
  m="38080">the</span> <span m="38330">derivative</span> <span
  m="38990">of</span> <span m="39170">a</span> <span m="39390">inverse.</span>
  <span m="40850">So</span> <span m="41060">the</span> <span
  m="41210">derivative</span> <span m="41720">of</span> <span m="41870">A</span>
  <span m="42050">squared</span> <span m="42590">ought</span> <span
  m="42740">to</span> <span m="42800">be</span> <span m="42980">easy.</span>
  <span m="43460">But</span> <span m="43670">if</span> <span m="43820">we</span>
  <span m="44030">can't</span> <span m="44360">do</span> <span
  m="44570">that,</span> <span m="44970">we</span> <span m="45110">need</span>
  <span m="45320">to</span> <span m="46370">be</span> <span
  m="46610">sure</span> <span m="46850">we</span> <span
  m="47030">can.</span></p><p><span m="48020">And</span> <span
  m="48260">then</span> <span m="48950">this</span> <span m="49280">was</span>
  <span m="49560">the</span> <span m="49700">derivative</span> <span
  m="50330">of</span> <span m="50480">an</span> <span
  m="50630">eigenvalue.</span> <span m="51560">And</span> <span
  m="51680">then</span> <span m="52700">it's</span> <span
  m="52910">natural</span> <span m="53370">to</span> <span m="53540">ask</span>
  <span m="53960">about</span> <span m="54230">the</span> <span
  m="54380">derivative</span> <span m="54980">of</span> <span
  m="55130">the</span> <span m="55490">singular</span> <span
  m="56000">value.</span> <span m="56870">And</span> <span m="57020">I</span>
  <span m="57290">had</span> <span m="57500">a</span> <span
  m="57560">happy</span> <span m="57920">day</span> <span
  m="58190">yesterday</span> <span m="58820">in</span> <span
  m="58940">the</span> <span m="59030">snow,</span> <span
  m="60110">realizing</span> <span m="60830">that</span> <span
  m="61010">that</span> <span m="61280">has</span> <span m="61550">a</span>
  <span m="61640">nice</span> <span m="61970">formula</span> <span
  m="62510">too.</span> <span m="63380">Of</span> <span m="63500">course,</span>
  <span m="64040">I'm</span> <span m="64220">not</span> <span
  m="64430">the</span> <span m="64550">first.</span> <span m="66230">I'm</span>
  <span m="66530">sure</span> <span m="66860">that</span> <span
  m="70460">Wikipedia</span> <span m="71180">already</span> <span
  m="71570">knows</span> <span m="72050">this</span> <span
  m="72740">formula.</span> <span m="73260">But</span> <span m="73430">it</span>
  <span m="73790">was</span> <span m="74030">new</span> <span
  m="74240">to</span> <span m="74360">me.</span></p><p><span
  m="74970">And</span> <span m="75530">I</span> <span m="75680">should</span>
  <span m="75890">say</span> <span m="76130">Professor</span> <span
  m="76660">Edelman</span> <span m="78440">has</span> <span
  m="78790">carried</span> <span m="79310">it</span> <span m="79460">to</span>
  <span m="79670">the</span> <span m="79820">second</span> <span
  m="80240">derivative.</span> <span m="81120">Again,</span> <span
  m="81980">not</span> <span m="82280">new,</span> <span m="82730">but</span>
  <span m="85900">it's</span> <span m="86120">more</span> <span
  m="86330">difficult</span> <span m="86840">to</span> <span
  m="86990">find</span> <span m="87320">second</span> <span
  m="87710">derivatives,</span> <span m="89060">and</span> <span
  m="90410">interesting.</span> <span m="91040">But</span> <span
  m="91940">we'll</span> <span m="92120">just</span> <span m="92330">stay</span>
  <span m="92600">with</span> <span m="92810">first</span> <span
  m="93080">derivatives.</span></p><p><span m="94740">OK,</span> <span
  m="95890">so</span> <span m="96050">that's</span> <span m="96200">my</span>
  <span m="96380">first</span> <span m="97550">item</span> <span
  m="97910">of</span> <span m="98810">sort</span> <span m="99050">of</span>
  <span m="99560">business</span> <span m="99980">from</span> <span
  m="100190">last</span> <span m="100520">time.</span> <span
  m="101260">And</span> <span m="101550">then</span> <span m="101720">I'd</span>
  <span m="101870">like</span> <span m="102050">to</span> <span
  m="102230">say</span> <span m="102500">something</span> <span
  m="103040">about</span> <span m="103610">the</span> <span
  m="104450">lab</span> <span m="104840">homeworks</span> <span
  m="106100">and</span> <span m="106250">ask</span> <span m="106540">your</span>
  <span m="106700">advice</span> <span m="107330">and</span> <span
  m="107870">begin</span> <span m="108290">to</span> <span m="108410">say</span>
  <span m="108680">something</span> <span m="109160">about</span> <span
  m="109730">a</span> <span m="109790">project.</span> <span
  m="111050">And</span> <span m="111170">then</span> <span m="111770">I</span>
  <span m="112010">will</span> <span m="113150">move</span> <span
  m="113570">to</span> <span m="113750">these</span> <span
  m="114140">topics</span> <span m="115910">in</span> <span
  m="117500">Section</span> <span m="117950">4.4</span> <span
  m="118550">that</span> <span m="118730">you</span> <span
  m="118910">have</span> <span m="119180">already.</span></p><p><span
  m="121430">And</span> <span m="121610">you</span> <span
  m="121700">might</span> <span m="121940">notice</span> <span
  m="122420">I</span> <span m="122600">skipped</span> <span
  m="123530">4.3.</span> <span m="126860">And</span> <span m="127040">the</span>
  <span m="127100">reason</span> <span m="127610">is</span> <span
  m="127970">that</span> <span m="128270">on</span> <span
  m="128449">Friday,</span> <span m="130610">actually</span> <span
  m="131000">arriving</span> <span m="131540">at</span> <span
  m="131660">MIT</span> <span m="132110">tomorrow</span> <span
  m="133070">is</span> <span m="133430">Professor</span> <span
  m="134000">Townsend,</span> <span m="137270">4.3</span> <span
  m="138020">is</span> <span m="138170">all</span> <span m="138350">about</span>
  <span m="138620">his</span> <span m="138890">work.</span> <span
  m="139910">And</span> <span m="140090">he's</span> <span m="140300">the</span>
  <span m="140420">best</span> <span m="140700">lecturer</span> <span
  m="141440">I</span> <span m="141710">know.</span> <span m="144320">He</span>
  <span m="144440">was</span> <span m="144650">here</span> <span
  m="144890">as</span> <span m="145100">an</span> <span
  m="145550">instructor</span> <span m="146750">and</span> <span
  m="146960">did</span> <span m="147230">18.06</span> <span
  m="148280">and</span> <span m="149090">was</span> <span m="149390">a</span>
  <span m="149750">big</span> <span m="149990">success.</span> <span
  m="151540">Actually,</span> <span m="152210">he's</span> <span
  m="152630">also</span> <span m="153290">just</span> <span
  m="153620">won</span> <span m="154340">a</span> <span m="154910">prize</span>
  <span m="156110">for</span> <span m="156500">the</span> <span
  m="157220">SIAG/LA,</span> <span m="157820">international</span> <span
  m="158540">prize</span> <span m="159080">for</span> <span
  m="163040">young</span> <span m="163610">investigators,</span> <span
  m="164570">young</span> <span m="164930">faculty</span> <span
  m="166040">in</span> <span m="166910">applied</span> <span
  m="167330">linear</span> <span m="167690">algebra.</span> <span
  m="168800">So</span> <span m="170420">he</span> <span m="170570">goes</span>
  <span m="170840">to</span> <span m="170960">Hong</span> <span
  m="171200">Kong</span> <span m="171530">to</span> <span m="171680">get</span>
  <span m="171890">that</span> <span m="172070">prize</span> <span
  m="172520">too.</span> <span m="173300">Anyway,</span> <span
  m="174530">he</span> <span m="174770">will</span> <span m="175010">be</span>
  <span m="175730">on</span> <span m="175880">the</span> <span
  m="175970">videos</span> <span m="176690">and</span> <span
  m="177060">in</span> <span m="177260">here</span> <span m="177500">in</span>
  <span m="177800">class</span> <span m="178250">Friday,</span> <span
  m="178700">if</span> <span m="178850">all</span> <span m="179030">goes</span>
  <span m="179300">well.</span></p><p><span m="180860">OK,</span> <span
  m="181280">so</span> <span m="181940">in</span> <span m="182090">order</span>
  <span m="182480">then,</span> <span m="185120">the</span> <span
  m="185360">first</span> <span m="185750">thing</span> <span
  m="186110">is</span> <span m="186330">the</span> <span
  m="186440">derivative</span> <span m="187010">of</span> <span
  m="187160">A</span> <span m="187370">squared.</span> <span
  m="189260">And</span> <span m="189370">you</span> <span
  m="189490">might</span> <span m="189760">think</span> <span
  m="191320">it's</span> <span m="191680">2A</span> <span m="192700">dA</span>
  <span m="193195">dt,</span> <span m="194770">but</span> <span
  m="194980">it's</span> <span m="195160">not.</span> <span
  m="196750">And</span> <span m="197110">if</span> <span m="197290">you</span>
  <span m="197380">realize</span> <span m="197950">that</span> <span
  m="198130">it's</span> <span m="198340">not,</span> <span
  m="198760">then</span> <span m="198940">you</span> <span
  m="199030">realize</span> <span m="199450">what</span> <span
  m="199660">it</span> <span m="199810">is,</span> <span m="200830">you</span>
  <span m="200980">will</span> <span m="201160">get</span> <span
  m="201370">these</span> <span m="201640">things</span> <span
  m="202000">right</span> <span m="202480">in</span> <span m="202630">the</span>
  <span m="202750">future.</span></p><p><span m="203750">So</span> <span
  m="203860">the</span> <span m="204040">answer</span> <span
  m="204410">to</span> <span m="204730">the</span> <span
  m="204940">derivative</span> <span m="205510">of</span> <span
  m="205660">A</span> <span m="205840">squared</span> <span m="206410">is</span>
  <span m="206620">not</span> <span m="210730">2A</span> <span
  m="211570">dA</span> <span m="211910">dt.</span> <span m="216340">And</span>
  <span m="216640">why</span> <span m="216970">isn't</span> <span
  m="217420">it?</span> <span m="217690">And</span> <span m="217840">what</span>
  <span m="218200">is</span> <span m="218410">the</span> <span
  m="218500">right</span> <span m="218800">answer?</span></p><p><span
  m="220720">So</span> <span m="220860">I</span> <span m="221020">do</span>
  <span m="221230">that</span> <span m="221560">maybe</span> <span
  m="222460">just</span> <span m="222700">below</span> <span
  m="223190">here.</span> <span m="230590">Well,</span> <span
  m="231160">I</span> <span m="231280">could</span> <span m="231460">ask</span>
  <span m="231730">you</span> <span m="231820">to</span> <span
  m="231940">guess</span> <span m="232270">the</span> <span
  m="232360">right</span> <span m="232630">answer,</span> <span
  m="233030">but</span> <span m="233230">why</span> <span
  m="233440">don't</span> <span m="233590">we</span> <span m="233740">do</span>
  <span m="233950">it</span> <span m="234070">systematically.</span> <span
  m="235660">So</span> <span m="235870">how</span> <span m="236020">do</span>
  <span m="236110">you</span> <span m="236170">find</span> <span
  m="236500">the</span> <span m="236620">derivative?</span> <span
  m="239800">It's</span> <span m="240010">a</span> <span
  m="240070">limit.</span> <span m="241180">First</span> <span
  m="241570">you</span> <span m="241660">have</span> <span m="241870">a</span>
  <span m="241960">delta</span> <span m="242530">A,</span> <span
  m="242920">right.</span> <span m="243700">And</span> <span
  m="243820">then</span> <span m="244000">you</span> <span
  m="244120">take</span> <span m="244390">a</span> <span
  m="244450">limit.</span></p><p><span m="245210">So</span> <span
  m="245290">I</span> <span m="245380">look</span> <span m="245680">at</span>
  <span m="246490">A</span> <span m="247180">plus</span> <span
  m="247990">delta</span> <span m="248530">A</span> <span
  m="249940">squared</span> <span m="253210">minus</span> <span
  m="253720">A</span> <span m="253900">squared.</span> <span
  m="255700">So</span> <span m="255790">that's</span> <span
  m="256170">the</span> <span m="256240">change</span> <span
  m="256740">in</span> <span m="256870">A</span> <span
  m="257019">squared.</span> <span m="258279">And</span> <span
  m="258490">I</span> <span m="258640">divide</span> <span m="259100">it</span>
  <span m="259269">by</span> <span m="260290">delta</span> <span
  m="260709">t.</span> <span m="261820">And</span> <span m="261940">then</span>
  <span m="262270">delta</span> <span m="262690">t</span> <span
  m="262930">goes</span> <span m="263230">to</span> <span m="263350">0.</span>
  <span m="264370">So</span> <span m="264550">that's</span> <span
  m="264870">the</span> <span m="264940">derivative</span> <span
  m="265450">I'm</span> <span m="265630">looking</span> <span
  m="265960">for,</span> <span m="266920">the</span> <span
  m="267010">derivative</span> <span m="267550">of</span> <span
  m="267730">A</span> <span m="267880">squared.</span></p><p><span
  m="269020">And</span> <span m="269140">now,</span> <span m="269410">if</span>
  <span m="269590">I</span> <span m="269710">write</span> <span
  m="269980">that</span> <span m="270250">out,</span> <span
  m="270490">you'll</span> <span m="270760">see</span> <span
  m="272020">why</span> <span m="272470">this</span> <span m="272770">is</span>
  <span m="272920">wrong,</span> <span m="274210">but</span> <span
  m="274420">something</span> <span m="274870">very</span> <span
  m="275410">close</span> <span m="275860">to</span> <span m="276040">it,</span>
  <span m="276160">of</span> <span m="276250">course--</span> <span
  m="276730">can't</span> <span m="277000">be</span> <span m="277180">far</span>
  <span m="277450">away--</span> <span m="278080">is</span> <span
  m="278260">right.</span> <span m="278980">So</span> <span
  m="279190">what</span> <span m="279400">happens</span> <span
  m="279730">if</span> <span m="279880">I</span> <span m="280000">write</span>
  <span m="280270">this</span> <span m="280600">out?</span> <span
  m="281100">The</span> <span m="281360">A</span> <span
  m="281560">squared</span> <span m="282150">will</span> <span
  m="282280">cancel</span> <span m="282760">the</span> <span m="282835">A</span>
  <span m="282910">squared.</span> <span m="284770">What</span> <span
  m="285010">will</span> <span m="285130">I</span> <span m="285220">have?</span>
  <span m="285480">Will</span> <span m="285670">I</span> <span
  m="285730">have</span> <span m="285970">2A</span> <span
  m="286840">delta</span> <span m="287320">A?</span> <span m="289540">Why</span>
  <span m="289780">don't</span> <span m="290050">I</span> <span
  m="290200">write</span> <span m="290590">2A</span> <span
  m="291520">delta</span> <span m="292000">A</span> <span
  m="292510">next?</span></p><p><span m="295900">Because</span> <span
  m="296380">when</span> <span m="296680">you're</span> <span
  m="297070">squaring</span> <span m="298450">a</span> <span
  m="298510">sum</span> <span m="298900">of</span> <span m="299020">two</span>
  <span m="299230">matrices,</span> <span m="301090">one</span> <span
  m="301660">term</span> <span m="302110">is</span> <span m="302770">A</span>
  <span m="303250">delta</span> <span m="303760">A,</span> <span
  m="308094">and</span> <span m="309080">another</span> <span
  m="309470">term</span> <span m="309770">is</span> <span
  m="309920">delta</span> <span m="310190">A</span> <span m="310820">A.</span>
  <span m="311180">And</span> <span m="311540">those</span> <span
  m="311810">are</span> <span m="311900">different</span> <span
  m="313580">in</span> <span m="313760">general.</span> <span
  m="315230">And</span> <span m="315350">then</span> <span
  m="316280">plus</span> <span m="317480">delta</span> <span m="318080">A</span>
  <span m="318950">squared.</span> <span m="320210">And</span> <span
  m="320330">now</span> <span m="320540">I</span> <span m="320630">divide</span>
  <span m="321130">it</span> <span m="321290">all</span> <span
  m="321710">by</span> <span m="322130">delta</span> <span
  m="322580">t.</span></p><p><span m="324680">So</span> <span
  m="325100">you're</span> <span m="325670">now</span> <span
  m="325940">seeing</span> <span m="327260">my</span> <span
  m="327440">point</span> <span m="329030">that</span> <span
  m="329390">now</span> <span m="329870">I</span> <span m="329960">let</span>
  <span m="330170">delta</span> <span m="330530">t</span> <span
  m="330770">go</span> <span m="330950">to</span> <span m="331040">0.</span>
  <span m="331550">So</span> <span m="331820">I'm</span> <span
  m="331940">just</span> <span m="332150">doing</span> <span
  m="332480">matrix</span> <span m="333050">calculus.</span> <span
  m="334760">And</span> <span m="335030">it's</span> <span m="336350">not</span>
  <span m="337010">altogether</span> <span m="337820">simple,</span> <span
  m="338330">but</span> <span m="339230">if</span> <span m="339380">you</span>
  <span m="339470">follow</span> <span m="339770">the</span> <span
  m="339860">rules,</span> <span m="340490">it</span> <span
  m="340700">comes</span> <span m="341060">out</span> <span
  m="341270">right.</span></p><p><span m="342200">So</span> <span
  m="342410">now</span> <span m="342620">what</span> <span
  m="343400">answer</span> <span m="343790">do</span> <span m="344030">I</span>
  <span m="344150">get</span> <span m="345470">as</span> <span
  m="346040">delta</span> <span m="346430">t</span> <span m="346730">goes</span>
  <span m="347060">to</span> <span m="347210">0?</span> <span
  m="348770">I</span> <span m="348920">get</span> <span m="349250">A</span>
  <span m="350810">dA</span> <span m="351190">dt--</span> <span
  m="351950">that's</span> <span m="352340">the</span> <span
  m="353090">definition</span> <span m="353870">of</span> <span
  m="353990">the--</span> <span m="356240">that</span> <span
  m="356570">ratio</span> <span m="357200">goes</span> <span
  m="357560">to</span> <span m="357710">dA</span> <span m="358130">dt.</span>
  <span m="358550">That's</span> <span m="358910">the</span> <span
  m="359480">whole</span> <span m="359750">idea</span> <span
  m="360140">of</span> <span m="360230">the</span> <span
  m="360350">derivative</span> <span m="360920">of</span> <span
  m="361070">A.</span></p><p><span m="361460">And</span> <span
  m="362150">now</span> <span m="362360">what's</span> <span
  m="362690">the</span> <span m="362840">other</span> <span
  m="363110">term?</span> <span m="364730">It's</span> <span
  m="365000">dA</span> <span m="365373">dt</span> <span m="366120">A.</span>
  <span m="370910">So</span> <span m="371150">it</span> <span
  m="371240">was</span> <span m="371990">simply</span> <span
  m="372470">that</span> <span m="372770">point</span> <span
  m="373190">that</span> <span m="373400">I</span> <span
  m="373550">wanted</span> <span m="374030">you</span> <span
  m="374180">to</span> <span m="374900">pick</span> <span m="375170">up</span>
  <span m="375410">on,</span> <span m="376250">that</span> <span
  m="379170">the</span> <span m="379340">derivative</span> <span
  m="380000">might</span> <span m="380270">not</span> <span
  m="380510">commute</span> <span m="380900">with</span> <span
  m="381110">A.</span> <span m="382130">Matrices</span> <span
  m="382850">don't</span> <span m="383210">commute</span> <span
  m="383660">in</span> <span m="383810">general.</span></p><p><span
  m="384770">And</span> <span m="385940">so</span> <span
  m="386150">you'll</span> <span m="386270">notice</span> <span
  m="386810">that</span> <span m="386930">we</span> <span m="387110">had</span>
  <span m="387410">a</span> <span m="388730">similar</span> <span
  m="390500">expression</span> <span m="391160">there.</span> <span
  m="395350">We</span> <span m="395570">had</span> <span m="395720">to</span>
  <span m="395810">pay</span> <span m="396080">attention</span> <span
  m="396650">to</span> <span m="396800">the</span> <span m="396950">order</span>
  <span m="397280">of</span> <span m="397340">things</span> <span
  m="397760">there.</span> <span m="398480">And</span> <span
  m="398600">now</span> <span m="398840">we</span> <span m="399020">get</span>
  <span m="399230">it</span> <span m="399500">right.</span> <span
  m="399770">It's</span> <span m="399920">not</span> <span
  m="400190">this,</span> <span m="400640">but</span> <span m="402830">A</span>
  <span m="403580">dA</span> <span m="404060">dt</span> <span
  m="406250">plus</span> <span m="406730">dA</span> <span m="407165">dt</span>
  <span m="407600">A.</span> <span m="409880">OK.</span> <span
  m="411810">Good.</span></p><p><span m="412970">Now,</span> <span
  m="413420">can</span> <span m="413690">I</span> <span m="413810">do</span>
  <span m="414050">the</span> <span m="414230">other</span> <span
  m="414500">one?</span> <span m="414990">Which</span> <span
  m="415280">is</span> <span m="415400">a</span> <span m="415460">little</span>
  <span m="415700">more</span> <span m="415880">serious,</span> <span
  m="416420">but</span> <span m="417560">it's</span> <span m="418340">a</span>
  <span m="418400">beautiful</span> <span m="418850">formula.</span> <span
  m="421200">And</span> <span m="421530">it's</span> <span
  m="421860">parallel</span> <span m="422550">to</span> <span
  m="422730">this</span> <span m="422990">guy.</span> <span
  m="424470">You</span> <span m="424530">might</span> <span
  m="424830">even</span> <span m="425160">guess</span> <span
  m="425580">it.</span></p><p><span m="427050">So</span> <span
  m="427290">I'm</span> <span m="427470">looking</span> <span
  m="427830">for</span> <span m="428010">the</span> <span
  m="428190">derivative</span> <span m="428850">of</span> <span
  m="429000">a</span> <span m="429060">singular</span> <span
  m="429630">value.</span> <span m="430050">The</span> <span
  m="430170">matrix</span> <span m="430740">A</span> <span m="431010">is</span>
  <span m="431190">changing.</span> <span m="432780">dA</span> <span
  m="433275">dt</span> <span m="433770">tells</span> <span m="434160">me</span>
  <span m="434370">how</span> <span m="434640">it's</span> <span
  m="434850">changing</span> <span m="435450">at</span> <span
  m="435600">the</span> <span m="435750">moment,</span> <span
  m="436180">at</span> <span m="436380">the</span> <span
  m="436530">instant.</span> <span m="437830">And</span> <span
  m="438030">I</span> <span m="438180">want</span> <span m="438390">to</span>
  <span m="438450">know</span> <span m="438690">how</span> <span
  m="439020">is</span> <span m="439170">sigma</span> <span
  m="439670">changing</span> <span m="440640">at</span> <span
  m="440760">that</span> <span m="441000">same</span> <span
  m="441390">instant.</span></p><p><span m="442400">And</span> <span
  m="443110">sort</span> <span m="443610">of</span> <span m="443770">in</span>
  <span m="443880">parallel</span> <span m="444450">with</span> <span
  m="444690">this</span> <span m="445050">is</span> <span m="446100">a</span>
  <span m="446220">nice--</span> <span m="446700">the</span> <span
  m="447120">nice</span> <span m="447405">formula--</span> <span
  m="447870">u</span> <span m="448170">transpose</span> <span
  m="450270">dA</span> <span m="450710">dt</span> <span m="453302">v</span>
  <span m="453730">of</span> <span m="454110">t.</span> <span
  m="456150">Boy,</span> <span m="456390">you</span> <span
  m="456510">couldn't</span> <span m="456780">ask</span> <span
  m="457020">for</span> <span m="457140">a</span> <span m="457170">nicer</span>
  <span m="457560">formula</span> <span m="458010">than</span> <span
  m="458460">that,</span> <span m="458790">right?</span></p><p><span
  m="463310">You</span> <span m="463410">remember</span> <span
  m="463770">this</span> <span m="464010">is</span> <span m="464160">the</span>
  <span m="464280">eigenvector.</span> <span m="466440">And</span> <span
  m="466590">that's</span> <span m="466860">the</span> <span
  m="466980">eigenvector</span> <span m="467730">of</span> <span
  m="467850">A</span> <span m="468030">transpose.</span> <span
  m="470050">So</span> <span m="470160">this</span> <span m="470400">is</span>
  <span m="470580">the</span> <span m="470700">singular</span> <span
  m="471240">vector</span> <span m="471690">of</span> <span m="471870">A.</span>
  <span m="472650">And</span> <span m="473070">you</span> <span
  m="473220">could</span> <span m="473400">say</span> <span
  m="473700">this</span> <span m="473940">is</span> <span m="474120">a</span>
  <span m="474180">singular</span> <span m="474660">vector</span> <span
  m="475080">of</span> <span m="475200">A</span> <span
  m="475380">transpose,</span> <span m="476280">or</span> <span
  m="476400">it's</span> <span m="476580">the</span> <span
  m="476670">left</span> <span m="477090">singular</span> <span
  m="477600">vector</span> <span m="478020">of</span> <span m="478170">A.</span>
  <span m="478890">So</span> <span m="480480">that's</span> <span
  m="480810">our</span> <span m="483780">formula.</span> <span
  m="484470">And</span> <span m="484800">if</span> <span m="484950">we</span>
  <span m="485070">can</span> <span m="485250">just</span> <span
  m="485460">recall</span> <span m="485940">how</span> <span
  m="486120">to</span> <span m="486210">prove</span> <span m="486600">it,</span>
  <span m="487360">which</span> <span m="487530">is</span> <span
  m="487680">going</span> <span m="487820">to</span> <span m="487950">be</span>
  <span m="488100">parallel</span> <span m="488700">to</span> <span
  m="488910">the</span> <span m="489060">proof</span> <span m="489390">of</span>
  <span m="489510">that</span> <span m="489690">one,</span> <span
  m="490260">then</span> <span m="490650">I'm</span> <span m="490830">a</span>
  <span m="490890">happy</span> <span m="491190">person</span> <span
  m="491640">and</span> <span m="491760">we</span> <span m="491880">can</span>
  <span m="492060">get</span> <span m="492330">on</span> <span
  m="492480">with</span> <span m="492660">life.</span> <span
  m="494870">So</span> <span m="496260">let's</span> <span
  m="498420">remember</span> <span m="498960">this,</span> <span
  m="499320">because</span> <span m="499740">it</span> <span
  m="499820">will</span> <span m="499920">help</span> <span m="500160">us</span>
  <span m="500340">to</span> <span m="500460">remember</span> <span
  m="500880">the</span> <span m="501030">other</span> <span
  m="501210">one,</span> <span m="501360">too.</span></p><p><span
  m="502140">OK,</span> <span m="503280">so</span> <span m="504060">where</span>
  <span m="504270">do</span> <span m="504420">I</span> <span
  m="504540">start?</span> <span m="505620">I</span> <span
  m="505770">start</span> <span m="506100">with</span> <span m="506280">a</span>
  <span m="506340">formula</span> <span m="506820">for</span> <span
  m="506970">sigma.</span> <span m="508410">So</span> <span m="508560">I</span>
  <span m="508680">believe</span> <span m="509100">that</span> <span
  m="509250">sigma</span> <span m="510480">is</span> <span m="510870">u</span>
  <span m="511080">transpose</span> <span m="512970">times</span> <span
  m="513600">A</span> <span m="514919">times</span> <span m="515340">v.</span>
  <span m="518340">Everybody</span> <span m="518820">agree</span> <span
  m="519059">with</span> <span m="519210">that?</span> <span
  m="521780">Everything's</span> <span m="522320">depending</span> <span
  m="522830">on</span> <span m="523010">t</span> <span m="523400">in</span>
  <span m="524120">this</span> <span m="524450">formula.</span> <span
  m="525530">As</span> <span m="525740">time</span> <span
  m="526100">changes,</span> <span m="527060">everything</span> <span
  m="527510">changes.</span> <span m="528890">But</span> <span
  m="529100">I</span> <span m="529220">didn't</span> <span
  m="530260">write</span> <span m="530690">in</span> <span m="530840">the</span>
  <span m="531260">parentheses,</span> <span m="532340">t</span> <span
  m="533210">three</span> <span m="533450">more</span> <span
  m="533690">times.</span></p><p><span m="536390">Can</span> <span
  m="536540">we</span> <span m="536660">just</span> <span
  m="536870">remember</span> <span m="538190">about</span> <span
  m="538460">the</span> <span m="538610">SVD.</span> <span m="539500">The</span>
  <span m="541100">SVD</span> <span m="541730">says</span> <span
  m="542090">that</span> <span m="542300">A</span> <span m="542540">times</span>
  <span m="543050">v</span> <span m="543480">equals--</span></p><p><span
  m="544756">AUDIENCE:</span> <span m="544994">Sigma</span> <span
  m="545232">u.</span></p><p><span m="545710">GILBERT STRANG:</span> <span
  m="545910">Sigma</span> <span m="546330">u.</span> <span
  m="546770">Thanks.</span> <span m="548030">Av</span> <span
  m="548530">is</span> <span m="548690">sigma</span> <span m="549110">u.</span>
  <span m="549490">That's</span> <span m="549840">the</span> <span
  m="550160">SVD.</span> <span m="553290">So</span> <span m="553470">when</span>
  <span m="553650">I</span> <span m="553770">put</span> <span
  m="554080">in</span> <span m="554250">for</span> <span m="554490">Av,</span>
  <span m="554940">I</span> <span m="555060">put</span> <span
  m="555310">in</span> <span m="555510">sigma</span> <span m="555960">u.</span>
  <span m="558380">Sigma</span> <span m="558800">is</span> <span
  m="558980">just</span> <span m="559250">a</span> <span
  m="559340">number.</span> <span m="559760">So</span> <span m="559970">I</span>
  <span m="560090">bring</span> <span m="560360">it</span> <span
  m="560480">outside.</span> <span m="561700">And</span> <span
  m="561830">I'm</span> <span m="562010">left</span> <span
  m="562310">with</span> <span m="562400">u</span> <span
  m="562490">transpose</span> <span m="563450">u.</span> <span
  m="564110">And</span> <span m="564230">what's</span> <span m="564500">u</span>
  <span m="564680">transpose</span> <span m="565310">u?</span> <span
  m="566970">1.</span> <span m="568660">So</span> <span m="568840">I've</span>
  <span m="568990">used</span> <span m="569290">these</span> <span
  m="569620">two</span> <span m="569890">facts.</span></p><p><span
  m="572980">Or</span> <span m="574180">I</span> <span m="574270">could</span>
  <span m="574450">have</span> <span m="574540">gone</span> <span
  m="574750">the</span> <span m="574870">other</span> <span
  m="575080">way</span> <span m="575890">and</span> <span m="576040">said</span>
  <span m="576370">that</span> <span m="576540">this</span> <span
  m="576880">is</span> <span m="577090">the</span> <span
  m="577240">transpose</span> <span m="578260">of--</span> <span
  m="579580">this</span> <span m="579790">is</span> <span m="580030">A</span>
  <span m="580210">transpose</span> <span m="580900">u</span> <span
  m="581740">transpose.</span> <span m="583060">I</span> <span
  m="583150">could</span> <span m="583350">look</span> <span
  m="583540">at</span> <span m="583690">it</span> <span m="583780">that</span>
  <span m="584020">way</span> <span m="585100">times</span> <span
  m="585520">v.</span> <span m="589060">And</span> <span m="589540">if</span>
  <span m="589660">I</span> <span m="589780">look</span> <span
  m="589990">at</span> <span m="590110">it</span> <span m="590170">that</span>
  <span m="590410">way,</span> <span m="590620">I'm</span> <span
  m="590860">interested</span> <span m="591430">in</span> <span
  m="591580">what</span> <span m="591820">is</span> <span m="592090">A</span>
  <span m="592300">transpose</span> <span m="593110">u.</span> <span
  m="593530">And</span> <span m="593680">what</span> <span m="593920">is</span>
  <span m="594160">A</span> <span m="594310">transpose</span> <span
  m="595040">u?</span> <span m="597370">It's</span> <span
  m="597700">sigma</span> <span m="599690">v.</span> <span m="600647">And</span>
  <span m="601094">it's</span> <span m="601990">transpose,</span> <span
  m="602470">so</span> <span m="602950">sigma</span> <span m="603400">v</span>
  <span m="604900">transpose</span> <span m="605860">v.</span></p><p><span
  m="607090">And</span> <span m="607270">what</span> <span m="607570">is</span>
  <span m="607750">sigma</span> <span m="608170">v</span> <span
  m="608410">transpose</span> <span m="609160">v?</span></p><p><span
  m="609870">AUDIENCE:</span> <span m="610090">Sigma.</span></p><p><span
  m="610310">GILBERT STRANG:</span> <span m="610530">It's</span> <span
  m="610750">sigma</span> <span m="611200">again,</span> <span
  m="611470">of</span> <span m="611530">course.</span> <span
  m="612400">Got</span> <span m="612610">sigma</span> <span
  m="612940">both</span> <span m="613240">ways.</span> <span
  m="614070">OK.</span></p><p><span m="615520">Now,</span> <span
  m="615790">I'm</span> <span m="615940">ready</span> <span m="616240">to</span>
  <span m="616450">take</span> <span m="616780">the</span> <span
  m="616930">derivative.</span> <span m="618910">That's</span> <span
  m="619300">the</span> <span m="619390">formula</span> <span
  m="619870">I</span> <span m="619990">have</span> <span m="621460">for</span>
  <span m="622210">sigma,</span> <span m="623680">completely</span> <span
  m="624250">parallel</span> <span m="624730">to</span> <span
  m="624880">the</span> <span m="625000">formula</span> <span
  m="625540">that</span> <span m="625720">we</span> <span
  m="625870">started</span> <span m="626350">out</span> <span
  m="626470">with</span> <span m="627010">for</span> <span
  m="627190">lambda.</span> <span m="627970">The</span> <span
  m="628120">eigenvalue</span> <span m="629020">was</span> <span
  m="629380">y</span> <span m="629800">transpose</span> <span
  m="630670">Ax.</span> <span m="631900">And</span> <span m="632020">now</span>
  <span m="632260">we've</span> <span m="632470">got</span> <span
  m="632575">u</span> <span m="632680">transpose</span> <span
  m="633610">Av.</span></p><p><span m="634510">And,</span> <span
  m="634660">by</span> <span m="634900">the</span> <span m="635020">way,</span>
  <span m="635410">when</span> <span m="635710">would</span> <span
  m="635860">those</span> <span m="637390">two</span> <span
  m="637570">formulas</span> <span m="638170">be</span> <span
  m="638470">one</span> <span m="638790">and</span> <span m="639010">the</span>
  <span m="639400">same?</span> <span m="640410">When</span> <span
  m="641650">does</span> <span m="642040">the</span> <span m="642360">SVD</span>
  <span m="643560">just</span> <span m="643890">tell</span> <span
  m="644190">us</span> <span m="644390">nothing</span> <span
  m="644760">new</span> <span m="645060">beyond</span> <span
  m="646200">the</span> <span m="646590">eigenvalue</span> <span
  m="647460">stuff</span> <span m="647830">for</span> <span
  m="648030">what</span> <span m="648270">matrices</span> <span
  m="649770">are</span> <span m="649890">the</span> <span
  m="650040">singular</span> <span m="650520">values,</span> <span
  m="651030">the</span> <span m="651120">same</span> <span m="651450">as</span>
  <span m="651570">the</span> <span m="651690">eigenvalues,</span> <span
  m="652530">and</span> <span m="653010">singular</span> <span
  m="653430">vectors</span> <span m="653970">the</span> <span
  m="654030">same</span> <span m="654360">as</span> <span m="654490">this</span>
  <span m="655200">as</span> <span m="655350">the</span> <span
  m="655670">eigenvectors</span> <span m="656460">for--</span> <span
  m="657870">For?</span></p><p><span m="658755">AUDIENCE:</span> <span
  m="659002">Symmetric.</span></p><p><span m="660240">GILBERT STRANG:</span>
  <span m="660412">Symmetric,</span> <span m="660930">good.</span> <span
  m="662340">Symmetric,</span> <span m="663150">square,</span> <span
  m="663840">and--</span> <span m="667050">the</span> <span
  m="667830">two</span> <span m="668070">words</span> <span
  m="668490">that</span> <span m="668610">I'm</span> <span
  m="669150">always</span> <span m="669510">looking</span> <span
  m="669780">for</span> <span m="670020">in</span> <span m="670110">this</span>
  <span m="670320">course.</span> <span m="671820">If</span> <span
  m="671940">you</span> <span m="672060">want</span> <span m="672270">an</span>
  <span m="672420">A</span> <span m="672660">in</span> <span
  m="672780">this</span> <span m="672990">course,</span> <span
  m="673320">just</span> <span m="673560">write</span> <span
  m="673800">down</span> <span m="674040">positive</span> <span
  m="674520">definite</span> <span m="675630">in</span> <span
  m="675870">the</span> <span m="676020">answer</span> <span
  m="676350">to</span> <span m="676530">any</span> <span
  m="676740">question,</span> <span m="677970">because</span> <span
  m="678630">sigmas</span> <span m="679260">are</span> <span
  m="679410">by</span> <span m="679650">definition</span> <span
  m="680310">positive.</span> <span m="681510">And</span> <span
  m="681630">if</span> <span m="681750">they're</span> <span
  m="681900">going</span> <span m="682040">to</span> <span
  m="682380">agree</span> <span m="682830">totally</span> <span
  m="683340">with</span> <span m="683560">the</span> <span
  m="683610">lambdas,</span> <span m="684570">then</span> <span
  m="684720">the</span> <span m="684810">lambdas</span> <span
  m="685350">have</span> <span m="685530">to</span> <span m="685650">be</span>
  <span m="685800">positive.</span> <span m="686460">Or</span> <span
  m="687240">could</span> <span m="687450">be</span> <span m="687660">0,</span>
  <span m="688130">so</span> <span m="688470">positive</span> <span
  m="689430">semidefinite</span> <span m="689880">definite</span> <span
  m="690350">would</span> <span m="690470">be</span> <span m="690630">the</span>
  <span m="690720">right</span> <span m="690990">answer.</span> <span
  m="691320">Anyway,</span> <span m="692160">this</span> <span
  m="692370">is</span> <span m="692520">our</span> <span
  m="692670">start.</span></p><p><span m="696170">And</span> <span
  m="696330">what</span> <span m="696480">do</span> <span m="696540">we</span>
  <span m="696690">do</span> <span m="696870">with</span> <span
  m="697020">that</span> <span m="697200">formula?</span> <span
  m="698460">So</span> <span m="698970">this</span> <span m="699180">was</span>
  <span m="699390">all</span> <span m="699570">the</span> <span
  m="699690">same,</span> <span m="700080">because</span> <span
  m="700500">v</span> <span m="700710">transpose</span> <span
  m="701430">v</span> <span m="701700">was</span> <span m="701970">1.</span>
  <span m="705870">Here</span> <span m="706080">I</span> <span
  m="706170">had</span> <span m="706320">v</span> <span
  m="706530">transpose</span> <span m="707100">v.</span> <span
  m="707280">And</span> <span m="707400">that's</span> <span
  m="707640">1.</span> <span m="708000">So</span> <span m="708180">it</span>
  <span m="708270">gave</span> <span m="708510">me</span> <span
  m="708660">sigma.</span> <span m="709260">Yeah,</span> <span
  m="709690">good.</span> <span m="710240">Everybody's</span> <span
  m="710730">with</span> <span m="710970">us.</span></p><p><span
  m="712190">OK,</span> <span m="712440">what</span> <span m="712620">do</span>
  <span m="712740">I</span> <span m="712830">do?</span> <span
  m="713580">Take</span> <span m="713910">the</span> <span
  m="714000">derivative.</span> <span m="715110">Takes</span> <span
  m="715440">the</span> <span m="715500">derivative</span> <span
  m="716280">of</span> <span m="716430">that</span> <span
  m="716640">equation</span> <span m="717240">in</span> <span
  m="717360">the</span> <span m="717450">box.</span> <span
  m="718160">It's</span> <span m="718510">exactly</span> <span
  m="719070">what</span> <span m="719250">I</span> <span m="719340">did</span>
  <span m="719550">last</span> <span m="719880">time</span> <span
  m="720570">with</span> <span m="720850">the</span> <span
  m="720930">corresponding</span> <span m="721710">equation</span> <span
  m="722250">for</span> <span m="722460">lambda.</span> <span
  m="723480">Same</span> <span m="723810">thing.</span> <span
  m="724620">And</span> <span m="724800">I'm</span> <span
  m="725190">going</span> <span m="725340">to</span> <span m="725490">get</span>
  <span m="725880">again--</span> <span m="727140">it's</span> <span
  m="727320">a</span> <span m="727380">product</span> <span
  m="727830">rule,</span> <span m="728370">because</span> <span
  m="728640">I</span> <span m="728760">have</span> <span m="728940">three</span>
  <span m="729990">things</span> <span m="730380">multiplied</span> <span
  m="731130">on</span> <span m="731250">the</span> <span
  m="731310">right-hand</span> <span m="731730">side.</span> <span
  m="732760">So</span> <span m="732840">I've</span> <span m="732990">got</span>
  <span m="733290">three</span> <span m="733740">terms</span> <span
  m="734190">from</span> <span m="734430">the</span> <span
  m="734550">product</span> <span m="734940">rule.</span></p><p><span
  m="735700">So</span> <span m="736020">d</span> <span m="736230">sigma</span>
  <span m="736510">dt,</span> <span m="739710">coming</span> <span
  m="740040">from</span> <span m="740250">the</span> <span
  m="740340">box,</span> <span m="741780">is</span> <span m="743340">du</span>
  <span m="743790">transpose</span> <span m="744730">dt</span> <span
  m="746430">Av</span> <span m="748170">plus</span> <span m="749910">u</span>
  <span m="750090">transpose</span> <span m="751770">dA</span> <span
  m="752130">dt</span> <span m="754340">v</span> <span m="755430">plus</span>
  <span m="755910">the</span> <span m="756030">third</span> <span
  m="756360">guy,</span> <span m="756780">which</span> <span
  m="757050">will</span> <span m="757140">be</span> <span m="757380">u</span>
  <span m="757770">transpose</span> <span m="759210">A</span> <span
  m="760560">dv</span> <span m="760965">dt.</span> <span m="764530">Did</span>
  <span m="764770">I</span> <span m="764860">get</span> <span
  m="765040">the</span> <span m="765190">three</span> <span
  m="765460">terms</span> <span m="765880">there?</span> <span
  m="766090">Yep.</span></p><p><span m="768200">And</span> <span
  m="768360">which</span> <span m="768630">term</span> <span
  m="768900">do</span> <span m="769080">I</span> <span m="769200">want?</span>
  <span m="769980">Which</span> <span m="770220">term</span> <span
  m="770520">do</span> <span m="770670">I</span> <span m="771660">believe</span>
  <span m="772170">is</span> <span m="772320">going</span> <span
  m="772490">to</span> <span m="772620">survive</span> <span
  m="773310">and</span> <span m="773460">be</span> <span m="773700">the</span>
  <span m="773850">answer?</span> <span m="777090">Well,</span> <span
  m="777810">this</span> <span m="778020">is</span> <span m="778170">what</span>
  <span m="778380">I'm</span> <span m="778530">after.</span> <span
  m="779620">So</span> <span m="779740">it's</span> <span m="780000">the</span>
  <span m="780120">middle</span> <span m="780420">term.</span> <span
  m="781750">The</span> <span m="781900">middle</span> <span
  m="782130">term</span> <span m="782430">is</span> <span m="782580">just</span>
  <span m="782910">right.</span> <span m="786320">And</span> <span
  m="786800">the</span> <span m="786950">other</span> <span
  m="787160">two</span> <span m="787370">terms</span> <span
  m="788000">had</span> <span m="788150">better</span> <span
  m="788390">be</span> <span m="788570">zero.</span> <span m="789770">So</span>
  <span m="790220">that</span> <span m="790430">will</span> <span
  m="790610">be</span> <span m="790760">the</span> <span
  m="790910">proof.</span> <span m="792200">The</span> <span
  m="792290">other</span> <span m="792500">two</span> <span
  m="792710">terms</span> <span m="793130">will</span> <span
  m="793250">be</span> <span m="793430">zero.</span> <span m="794540">So</span>
  <span m="794750">can</span> <span m="794990">we</span> <span
  m="795200">just</span> <span m="795530">take</span> <span
  m="795830">one</span> <span m="796040">of</span> <span m="796130">those</span>
  <span m="796940">two</span> <span m="797180">terms</span> <span
  m="797840">and</span> <span m="798770">show</span> <span
  m="799190">that</span> <span m="799370">it's</span> <span
  m="799530">zero</span> <span m="800360">like</span> <span
  m="800600">this</span> <span m="800840">one?</span></p><p><span
  m="802100">OK,</span> <span m="802460">what</span> <span
  m="802610">have</span> <span m="802730">I</span> <span m="802820">got</span>
  <span m="803030">here?</span> <span m="804140">I</span> <span
  m="804230">want</span> <span m="804410">to</span> <span m="804500">know</span>
  <span m="804740">that</span> <span m="804890">that</span> <span
  m="805100">term</span> <span m="805430">is</span> <span m="805520">0.</span>
  <span m="807030">So</span> <span m="807210">what</span> <span
  m="807390">have</span> <span m="807510">I</span> <span m="807630">got.</span>
  <span m="808060">I've</span> <span m="808110">got</span> <span
  m="808390">du</span> <span m="808770">transpose</span> <span
  m="809310">dt</span> <span m="815340">times</span> <span m="815830">Av.</span>
  <span m="817370">And</span> <span m="817530">everybody</span> <span
  m="818070">says,</span> <span m="818560">OK,</span> <span m="818940">in</span>
  <span m="819060">place</span> <span m="819420">of</span> <span
  m="819570">Av,</span> <span m="820200">write</span> <span m="820530">in</span>
  <span m="821790">sigma</span> <span m="822240">u.</span> <span
  m="823200">And</span> <span m="823350">sigma's</span> <span
  m="823810">a</span> <span m="823860">number,</span> <span m="824220">so</span>
  <span m="824430">I</span> <span m="824520">don't</span> <span
  m="824700">mind</span> <span m="824970">putting</span> <span
  m="825240">it</span> <span m="825330">there.</span></p><p><span
  m="827760">So</span> <span m="828000">I've</span> <span m="828150">got</span>
  <span m="828390">sigma,</span> <span m="828930">a</span> <span
  m="829020">number</span> <span m="829350">of</span> <span
  m="829410">times</span> <span m="830160">the</span> <span
  m="830400">derivative</span> <span m="831780">of</span> <span
  m="832230">u</span> <span m="832650">times</span> <span m="833310">u</span>
  <span m="833550">itself,</span> <span m="834000">the</span> <span
  m="834120">dot</span> <span m="834390">product--</span> <span
  m="835140">the</span> <span m="835290">derivative</span> <span
  m="835920">of</span> <span m="836100">u</span> <span m="836400">with</span>
  <span m="837030">dot</span> <span m="837300">product</span> <span
  m="837750">with</span> <span m="838020">u.</span> <span m="838410">And</span>
  <span m="838590">that</span> <span m="839040">equals?</span> <span
  m="840990">0,</span> <span m="841680">I</span> <span m="841860">hope,</span>
  <span m="844140">because</span> <span m="844650">of</span> <span
  m="844800">this.</span> <span m="848100">Because</span> <span
  m="848580">of</span> <span m="848700">that.</span> <span
  m="852240">This</span> <span m="852930">comes</span> <span
  m="853320">from</span> <span m="853530">the</span> <span
  m="853650">derivative</span> <span m="854250">of</span> <span
  m="854460">that.</span></p><p><span m="857580">But</span> <span
  m="858090">you</span> <span m="858270">see,</span> <span m="859020">now</span>
  <span m="859470">we've</span> <span m="859770">got</span> <span
  m="861670">dot</span> <span m="861920">products,</span> <span
  m="862430">ordinary</span> <span m="862970">dot</span> <span
  m="863210">products,</span> <span m="864240">and</span> <span
  m="864490">a</span> <span m="864860">number</span> <span m="865730">on</span>
  <span m="865910">the</span> <span m="866000">right-hand</span> <span
  m="866480">side.</span> <span m="866800">We're</span> <span
  m="867050">in</span> <span m="867800">dimension</span> <span
  m="868340">1,</span> <span m="868760">you</span> <span m="868940">could</span>
  <span m="869120">say.</span> <span m="869750">So</span> <span
  m="869990">this</span> <span m="870680">tells</span> <span
  m="871010">me</span> <span m="871190">immediately</span> <span
  m="871850">that</span> <span m="873530">the</span> <span
  m="873680">derivative</span> <span m="874300">of</span> <span
  m="874470">u</span> <span m="877550">with</span> <span m="877820">u</span>
  <span m="878960">plus</span> <span m="879590">u</span> <span
  m="879860">transpose</span> <span m="881960">times</span> <span
  m="882470">the</span> <span m="882590">derivative</span> <span
  m="883130">of</span> <span m="883290">u</span> <span m="884870">is</span>
  <span m="885340">the</span> <span m="885440">derivative</span> <span
  m="886070">of</span> <span m="886220">1,</span> <span m="888770">which</span>
  <span m="889040">is</span> <span m="889190">0.</span></p><p><span
  m="891680">All</span> <span m="892070">I'm</span> <span
  m="892250">saying</span> <span m="892610">is</span> <span
  m="892820">that</span> <span m="893360">these</span> <span
  m="893840">are</span> <span m="893960">the</span> <span
  m="894080">same.</span> <span m="896120">You</span> <span
  m="896260">know,</span> <span m="898460">vectors,</span> <span
  m="898970">x</span> <span m="899210">transpose</span> <span
  m="899840">y</span> <span m="900230">is</span> <span m="900380">the</span>
  <span m="900440">same</span> <span m="900800">as</span> <span
  m="900920">y</span> <span m="901220">transpose</span> <span
  m="901535">x</span> <span m="902830">when</span> <span m="902960">I'm</span>
  <span m="903080">talking</span> <span m="903440">about</span> <span
  m="903680">real</span> <span m="903980">numbers.</span> <span
  m="904460">If</span> <span m="904610">I</span> <span m="904760">was</span>
  <span m="904970">doing</span> <span m="905270">complex</span> <span
  m="906440">things,</span> <span m="906800">which</span> <span
  m="907010">I</span> <span m="907100">could</span> <span m="907340">do,</span>
  <span m="908030">then</span> <span m="908210">I'd</span> <span
  m="908390">have</span> <span m="908600">to</span> <span m="908690">pay</span>
  <span m="908960">attention</span> <span m="909980">and</span> <span
  m="910130">take</span> <span m="914870">complex</span> <span
  m="915410">conjugates</span> <span m="916070">at</span> <span
  m="916160">the</span> <span m="916250">right</span> <span
  m="916520">moment.</span> <span m="916920">But</span> <span
  m="917890">let's</span> <span m="918290">not</span> <span
  m="918470">bother.</span></p><p><span m="919250">So</span> <span
  m="919790">you</span> <span m="919940">see,</span> <span
  m="920180">this</span> <span m="920360">is</span> <span m="920510">just</span>
  <span m="920750">two</span> <span m="921050">of</span> <span
  m="921110">these.</span> <span m="923600">And</span> <span
  m="925550">it</span> <span m="925670">gives</span> <span m="925880">me</span>
  <span m="926060">0.</span> <span m="926960">So</span> <span
  m="927140">that</span> <span m="927320">term's</span> <span
  m="927650">gone.</span> <span m="930690">And</span> <span
  m="930860">similarly,</span> <span m="931580">totally</span> <span
  m="932060">similarly,</span> <span m="932750">this</span> <span
  m="933020">term</span> <span m="933320">is</span> <span
  m="933470">gone.</span></p><p><span m="934470">This</span> <span
  m="934580">is</span> <span m="934790">A</span> <span
  m="935000">transpose</span> <span m="935720">u,</span> <span
  m="939560">all</span> <span m="939800">transpose.</span> <span
  m="940820">I'm</span> <span m="940970">just</span> <span
  m="941180">doing</span> <span m="941420">the</span> <span
  m="941510">same</span> <span m="941870">thing</span> <span
  m="942150">times</span> <span m="942690">dv</span> <span m="943075">dt.</span>
  <span m="945410">And</span> <span m="945680">what</span> <span
  m="945920">is</span> <span m="946190">A</span> <span
  m="946340">transpose</span> <span m="947030">u?</span> <span
  m="948300">It's</span> <span m="948730">sigma</span> <span
  m="949190">v.</span> <span m="950450">So</span> <span m="950660">this</span>
  <span m="950930">is</span> <span m="951050">sigma</span> <span
  m="952340">v</span> <span m="952580">transpose</span> <span
  m="953260">dv</span> <span m="953600">dt.</span> <span m="955580">And</span>
  <span m="956150">again</span> <span m="956750">0,</span> <span
  m="957890">because</span> <span m="958460">of</span> <span
  m="958640">this.</span></p><p><span m="962630">So</span> <span
  m="963670">in</span> <span m="963850">a</span> <span m="963910">way</span>
  <span m="964330">this</span> <span m="964600">was</span> <span
  m="964840">a</span> <span m="964930">slightly</span> <span
  m="965440">easier</span> <span m="965980">thing--</span> <span
  m="967630">the</span> <span m="967780">last</span> <span
  m="968110">time</span> <span m="969220">was</span> <span
  m="969850">completely</span> <span m="970420">parallel</span> <span
  m="971470">computation.</span> <span m="972830">But</span> <span
  m="973360">the</span> <span m="973510">first</span> <span
  m="973960">and</span> <span m="974110">third</span> <span
  m="974440">terms</span> <span m="974890">had</span> <span m="975100">to</span>
  <span m="975220">cancel</span> <span m="975790">each</span> <span
  m="976030">other</span> <span m="977230">with</span> <span
  m="977410">the</span> <span m="977560">x's</span> <span m="978010">and</span>
  <span m="978160">y's.</span> <span m="979840">Now,</span> <span
  m="980230">they</span> <span m="981010">disappear</span> <span
  m="984430">separately,</span> <span m="985720">leaving</span> <span
  m="986230">the</span> <span m="986560">right</span> <span
  m="986860">answer.</span></p><p><span m="989690">You</span> <span
  m="989860">might</span> <span m="990070">think,</span> <span
  m="990820">how</span> <span m="990970">did</span> <span m="991120">we</span>
  <span m="991240">get</span> <span m="991480">into</span> <span
  m="991960">derivatives</span> <span m="992860">of</span> <span
  m="994210">singular</span> <span m="994720">values?</span> <span
  m="995470">Well,</span> <span m="996940">I</span> <span
  m="997000">think</span> <span m="997240">if</span> <span
  m="997390">we're</span> <span m="997600">going</span> <span
  m="997750">to</span> <span m="997840">understand</span> <span
  m="998470">the</span> <span m="998590">SVD,</span> <span
  m="1000210">then</span> <span m="1000570">the</span> <span
  m="1000720">first</span> <span m="1001050">derivative</span> <span
  m="1001710">of</span> <span m="1001950">the</span> <span
  m="1002910">sigma</span> <span m="1003400">is--</span> <span
  m="1005040">well,</span> <span m="1005280">except</span> <span
  m="1005670">that</span> <span m="1005850">I've</span> <span
  m="1006000">survived</span> <span m="1006630">all</span> <span
  m="1006750">these</span> <span m="1006990">years</span> <span
  m="1007320">without</span> <span m="1007650">knowing</span> <span
  m="1007980">it.</span> <span m="1008230">So</span> <span
  m="1009060">you</span> <span m="1009210">could</span> <span
  m="1009660">say</span> <span m="1009930">it's</span> <span
  m="1010140">not--</span> <span m="1013340">you</span> <span
  m="1013450">can</span> <span m="1013780">live</span> <span
  m="1013960">without</span> <span m="1014350">it,</span> <span
  m="1014440">but</span> <span m="1014650">it's</span> <span
  m="1015910">a</span> <span m="1016000">pretty</span> <span
  m="1016480">nice</span> <span m="1016870">formula.</span></p><p><span
  m="1018330">OK,</span> <span m="1019540">that</span> <span
  m="1019780">completes</span> <span m="1020440">that</span> <span
  m="1023310">Section</span> <span m="1023980">3.1.</span> <span
  m="1025780">And</span> <span m="1026619">more</span> <span
  m="1026890">to</span> <span m="1026980">say</span> <span
  m="1027250">about</span> <span m="1027490">3.2,</span> <span
  m="1028300">which</span> <span m="1028510">was</span> <span
  m="1028720">the</span> <span m="1028869">interlacing</span> <span
  m="1029770">part</span> <span m="1030130">that</span> <span
  m="1030339">I</span> <span m="1030460">introduced.</span></p><p><span
  m="1031960">OK,</span> <span m="1032410">so</span> <span
  m="1032680">where</span> <span m="1033010">am</span> <span
  m="1033220">I?</span> <span m="1034720">I</span> <span
  m="1034810">guess</span> <span m="1035290">I'm</span> <span
  m="1036819">thinking</span> <span m="1037359">about</span> <span
  m="1037900">the</span> <span m="1039730">neat</span> <span
  m="1042349">topics</span> <span m="1044810">about</span> <span
  m="1045380">interlacing</span> <span m="1046220">of</span> <span
  m="1046339">eigenvalues.</span> <span m="1048060">So</span> <span
  m="1048140">may</span> <span m="1048349">I</span> <span
  m="1049160">pick</span> <span m="1049430">up</span> <span
  m="1049640">on</span> <span m="1049790">that</span> <span
  m="1050030">theme,</span> <span m="1051350">interlacing</span> <span
  m="1052160">of</span> <span m="1052280">eigenvalues</span> <span
  m="1053810">and</span> <span m="1055340">say</span> <span
  m="1055640">what's</span> <span m="1055940">in</span> <span
  m="1056090">the</span> <span m="1056180">notes</span> <span
  m="1056940">and</span> <span m="1058250">what's</span> <span
  m="1058550">the</span> <span m="1058700">general</span> <span
  m="1059150">idea?</span> <span m="1059860">OK.</span> <span
  m="1063290">So</span> <span m="1063440">we're</span> <span
  m="1063590">leaving</span> <span m="1064130">the</span> <span
  m="1067070">derivatives</span> <span m="1067850">and</span> <span
  m="1068030">moving</span> <span m="1068480">to</span> <span
  m="1071010">finite</span> <span m="1071540">changes</span> <span
  m="1072170">in</span> <span m="1072290">the</span> <span
  m="1072410">eigenvalues</span> <span m="1073880">and</span> <span
  m="1074070">singular</span> <span m="1074570">values,</span> <span
  m="1075620">and</span> <span m="1075830">we</span> <span
  m="1076040">are</span> <span m="1076130">recognizing</span> <span
  m="1077090">that</span> <span m="1077810">we</span> <span
  m="1078020">can't</span> <span m="1079430">get</span> <span
  m="1079670">exact</span> <span m="1080090">formulas</span> <span
  m="1081350">for</span> <span m="1081500">the</span> <span
  m="1081620">change,</span> <span m="1082730">but</span> <span
  m="1082970">we</span> <span m="1083210">can</span> <span
  m="1083480">get</span> <span m="1084110">bounds</span> <span
  m="1084650">for</span> <span m="1084920">change.</span> <span
  m="1086200">And</span> <span m="1086330">they</span> <span
  m="1086480">are</span> <span m="1086540">pretty</span> <span
  m="1086870">cool.</span></p><p><span m="1087990">So</span> <span
  m="1088040">let</span> <span m="1088190">me</span> <span
  m="1088340">remind</span> <span m="1088820">you</span> <span
  m="1088940">what</span> <span m="1089150">that</span> <span
  m="1089420">is,</span> <span m="1089720">what</span> <span
  m="1089930">they</span> <span m="1090170">are.</span> <span
  m="1092060">So</span> <span m="1092480">I</span> <span m="1092720">have</span>
  <span m="1093020">a</span> <span m="1093710">matrix--</span> <span
  m="1095260">let's</span> <span m="1095510">see,</span> <span
  m="1095720">a</span> <span m="1095780">symmetric</span> <span
  m="1096410">matrix</span> <span m="1096950">S</span> <span
  m="1098300">that</span> <span m="1098450">has</span> <span
  m="1098750">eigenvalues</span> <span m="1099590">lambda</span> <span
  m="1100040">1,</span> <span m="1100490">greater</span> <span
  m="1100880">equal</span> <span m="1101180">lambda</span> <span
  m="1101600">2,</span> <span m="1102080">greater</span> <span
  m="1102450">equal</span> <span m="1103160">so</span> <span
  m="1103370">on.</span> <span m="1105920">Then</span> <span
  m="1106100">I</span> <span m="1106250">change</span> <span
  m="1106790">S</span> <span m="1107270">by</span> <span m="1107690">some</span>
  <span m="1108020">amount.</span> <span m="1108680">I</span> <span
  m="1108740">think</span> <span m="1109010">in</span> <span
  m="1109100">the</span> <span m="1109190">notes</span> <span
  m="1109630">there</span> <span m="1109720">is</span> <span
  m="1109880">a</span> <span m="1110300">number,</span> <span
  m="1111330">theta</span> <span m="1111710">times</span> <span
  m="1112490">1</span> <span m="1112790">matrix.</span></p><p><span
  m="1115520">That</span> <span m="1115760">has</span> <span
  m="1116030">eigenvalues</span> <span m="1117210">mu</span> <span
  m="1117500">1,</span> <span m="1118550">greater</span> <span
  m="1118880">equal</span> <span m="1119060">mu</span> <span
  m="1119570">2,</span> <span m="1120080">greater</span> <span
  m="1120430">equal</span> <span m="1120860">something.</span> <span
  m="1123530">And</span> <span m="1125270">these</span> <span
  m="1125600">are</span> <span m="1125690">what</span> <span
  m="1125900">I</span> <span m="1126050">can't</span> <span
  m="1126500">give</span> <span m="1126770">you</span> <span
  m="1126950">an</span> <span m="1127070">exact</span> <span
  m="1127490">formula</span> <span m="1127940">for.</span> <span
  m="1129610">You</span> <span m="1129730">just</span> <span
  m="1130040">would</span> <span m="1130240">have</span> <span
  m="1130450">to</span> <span m="1130600">compute</span> <span
  m="1131050">them.</span> <span m="1132850">But</span> <span
  m="1133480">I</span> <span m="1133600">can</span> <span
  m="1133870">give</span> <span m="1134110">you</span> <span
  m="1135400">bounds</span> <span m="1135940">for</span> <span
  m="1136180">them.</span> <span m="1137410">And</span> <span
  m="1137530">the</span> <span m="1137620">bounds</span> <span
  m="1138580">come</span> <span m="1138820">from</span> <span
  m="1139030">the</span> <span m="1139150">lambdas.</span></p><p><span
  m="1142030">So</span> <span m="1142240">this</span> <span
  m="1142510">was</span> <span m="1142750">a</span> <span
  m="1142840">positive.</span> <span m="1144100">This</span> <span
  m="1144300">is</span> <span m="1144460">a</span> <span
  m="1144610">positive</span> <span m="1145390">change.</span> <span
  m="1149590">So</span> <span m="1149780">the</span> <span
  m="1149900">eigenvalues</span> <span m="1150650">will</span> <span
  m="1150810">go</span> <span m="1151100">up,</span> <span m="1153270">or</span>
  <span m="1153420">stay</span> <span m="1153750">still,</span> <span
  m="1154140">but</span> <span m="1154320">they</span> <span
  m="1154470">won't</span> <span m="1154680">go</span> <span
  m="1154860">down.</span></p><p><span m="1156760">So</span> <span
  m="1157260">the</span> <span m="1157410">mu's</span> <span
  m="1158130">will</span> <span m="1158400">be</span> <span
  m="1158580">bigger</span> <span m="1158910">than</span> <span
  m="1159390">the</span> <span m="1159540">lambdas.</span> <span
  m="1160830">But</span> <span m="1161040">the</span> <span
  m="1161160">neat</span> <span m="1161460">thing</span> <span
  m="1161760">is</span> <span m="1162030">that</span> <span
  m="1162990">mu</span> <span m="1163380">2</span> <span m="1164550">will</span>
  <span m="1164820">not</span> <span m="1165240">pass</span> <span
  m="1165720">up</span> <span m="1165910">lambda</span> <span
  m="1166380">1.</span> <span m="1167130">So</span> <span
  m="1168010">here</span> <span m="1168140">is</span> <span
  m="1168390">the</span> <span m="1168630">interlacing.</span> <span
  m="1169240">Mu</span> <span m="1169500">1</span> <span m="1169920">is</span>
  <span m="1170070">greater</span> <span m="1170400">equal</span> <span
  m="1170640">lambda</span> <span m="1171030">1.</span> <span
  m="1172110">That</span> <span m="1172410">says</span> <span
  m="1172770">that</span> <span m="1172920">the</span> <span
  m="1173040">highest</span> <span m="1173570">eigenvalue,</span> <span
  m="1174240">the</span> <span m="1174390">top</span> <span
  m="1174720">eigenvalue</span> <span m="1175350">went</span> <span
  m="1175620">up,</span> <span m="1176550">or</span> <span
  m="1177030">didn't</span> <span m="1177300">move.</span> <span
  m="1179690">But</span> <span m="1180290">mu</span> <span m="1180640">2</span>
  <span m="1180920">is</span> <span m="1181700">below</span> <span
  m="1182600">lambda</span> <span m="1182990">1.</span></p><p><span
  m="1184640">This</span> <span m="1184850">is</span> <span
  m="1185000">the</span> <span m="1185090">new--</span> <span
  m="1185390">everybody's</span> <span m="1185840">with</span> <span
  m="1186050">me</span> <span m="1186200">here?</span> <span
  m="1186540">This</span> <span m="1186620">is</span> <span m="1186790">a</span>
  <span m="1186860">new,</span> <span m="1187250">and</span> <span
  m="1187340">this</span> <span m="1187550">is</span> <span
  m="1187640">the</span> <span m="1187790">old.</span> <span
  m="1190210">New</span> <span m="1190450">and</span> <span
  m="1190600">old</span> <span m="1190870">being</span> <span
  m="1192370">old</span> <span m="1192760">is</span> <span m="1192970">S,</span>
  <span m="1193480">new</span> <span m="1193870">is</span> <span
  m="1194200">with</span> <span m="1194580">the</span> <span
  m="1194920">change</span> <span m="1195340">in</span> <span
  m="1195490">S.</span></p><p><span m="1196510">And</span> <span
  m="1197170">that</span> <span m="1197680">mu</span> <span m="1197980">2</span>
  <span m="1199210">is</span> <span m="1199450">greater</span> <span
  m="1199780">equal</span> <span m="1199990">lambda</span> <span
  m="1200410">2.</span> <span m="1201540">So</span> <span m="1201850">the</span>
  <span m="1202000">second</span> <span m="1202420">eigenvalues</span> <span
  m="1203140">went</span> <span m="1203410">up.</span> <span
  m="1204010">And</span> <span m="1204160">then</span> <span
  m="1204340">so</span> <span m="1204700">on.</span></p><p><span
  m="1210910">That's</span> <span m="1211150">a</span> <span
  m="1211180">great</span> <span m="1211480">fact.</span> <span
  m="1213790">And</span> <span m="1213950">I</span> <span
  m="1214070">guess</span> <span m="1214400">that</span> <span
  m="1214610">I</span> <span m="1215120">sent</span> <span
  m="1215420">out</span> <span m="1215630">a</span> <span
  m="1215690">puzzle</span> <span m="1216140">question.</span> <span
  m="1216810">Did</span> <span m="1217280">it</span> <span
  m="1217460">arrive</span> <span m="1218650">in</span> <span
  m="1218930">email?</span> <span m="1225100">Did</span> <span
  m="1225290">anybody</span> <span m="1225710">see</span> <span
  m="1226160">that</span> <span m="1226340">puzzle</span> <span
  m="1226700">question</span> <span m="1227150">and</span> <span
  m="1227270">think</span> <span m="1227510">about</span> <span
  m="1227780">it?</span></p><p><span m="1229820">It</span> <span
  m="1229940">worried</span> <span m="1230330">me</span> <span
  m="1230570">for</span> <span m="1230750">a</span> <span
  m="1230810">while.</span> <span m="1236480">Suppose</span> <span
  m="1236960">this</span> <span m="1237230">is</span> <span
  m="1238340">the</span> <span m="1238490">second</span> <span
  m="1240590">eigenvalue</span> <span m="1241060">value--</span> <span
  m="1241820">eigenvector.</span> <span m="1244310">So</span> <span
  m="1244550">I'm</span> <span m="1245390">adding</span> <span
  m="1245780">on,</span> <span m="1247100">I'm</span> <span
  m="1247250">hyping</span> <span m="1247700">up</span> <span
  m="1247880">the</span> <span m="1248030">second</span> <span
  m="1248480">eigenvector,</span> <span m="1250520">hyping</span> <span
  m="1250850">up</span> <span m="1250940">the</span> <span
  m="1251060">matrix</span> <span m="1252140">in</span> <span
  m="1252260">the</span> <span m="1252350">direction</span> <span
  m="1252830">of</span> <span m="1252920">the</span> <span
  m="1253010">second</span> <span m="1253410">eigenvector.</span> <span
  m="1257890">So</span> <span m="1258100">the</span> <span
  m="1258220">second</span> <span m="1258620">eigenvalue</span> <span
  m="1259050">was</span> <span m="1259480">lambda</span> <span
  m="1259900">2.</span> <span m="1262250">And</span> <span
  m="1262450">its</span> <span m="1262630">mu</span> <span m="1262960">2,</span>
  <span m="1263320">the</span> <span m="1263470">new</span> <span
  m="1263800">second</span> <span m="1264390">eigenvalue,</span> <span
  m="1265280">is</span> <span m="1265470">going</span> <span
  m="1265570">to</span> <span m="1265720">be</span> <span
  m="1265870">bigger</span> <span m="1266200">by</span> <span
  m="1266440">theta.</span></p><p><span m="1271190">But</span> <span
  m="1272000">then</span> <span m="1272240">I</span> <span
  m="1272390">lost</span> <span m="1272720">a</span> <span
  m="1272780">little</span> <span m="1273020">sleep</span> <span
  m="1273470">in</span> <span m="1273590">thinking,</span> <span
  m="1274340">OK,</span> <span m="1275120">if</span> <span
  m="1275290">the</span> <span m="1275390">second</span> <span
  m="1275790">eigenvalue</span> <span m="1276260">is</span> <span
  m="1276710">mu</span> <span m="1277010">2</span> <span m="1277280">plus</span>
  <span m="1277640">theta--</span> <span m="1280130">sorry,</span> <span
  m="1280460">if</span> <span m="1280670">the</span> <span
  m="1280790">second</span> <span m="1281180">eigenvalue</span> <span
  m="1281920">mu</span> <span m="1282210">2--</span> <span m="1282980">so</span>
  <span m="1283190">let</span> <span m="1283310">me</span> <span
  m="1283490">write</span> <span m="1283730">it</span> <span
  m="1283850">here.</span> <span m="1284300">If</span> <span
  m="1285566">mu</span> <span m="1285990">2,</span> <span m="1286940">the</span>
  <span m="1287060">second</span> <span m="1287480">eigenvalue,</span> <span
  m="1288260">is</span> <span m="1289340">the</span> <span
  m="1289490">old</span> <span m="1290750">lambda</span> <span
  m="1291200">2</span> <span m="1291710">plus</span> <span
  m="1292190">theta</span> <span m="1295460">then</span> <span
  m="1297650">bad</span> <span m="1297920">news,</span> <span
  m="1303470">because</span> <span m="1303800">theta</span> <span
  m="1304190">can</span> <span m="1304400">be</span> <span m="1304550">as</span>
  <span m="1304700">big</span> <span m="1304880">as</span> <span
  m="1305030">I</span> <span m="1305150">want.</span> <span
  m="1305390">It</span> <span m="1305480">can</span> <span m="1305630">be</span>
  <span m="1305750">20,</span> <span m="1306192">200,</span> <span
  m="1307076">2,000.</span></p><p><span m="1308180">And</span> <span
  m="1311180">if</span> <span m="1311360">I'm</span> <span
  m="1311540">just</span> <span m="1311840">adding</span> <span
  m="1312950">theta</span> <span m="1314010">to</span> <span
  m="1314240">lambda</span> <span m="1314660">2</span> <span
  m="1315830">to</span> <span m="1316220">get</span> <span
  m="1316480">the</span> <span m="1316580">second--</span> <span
  m="1317300">because</span> <span m="1317570">it's</span> <span
  m="1317740">a</span> <span m="1317810">second</span> <span
  m="1319130">eigenvector</span> <span m="1320660">that's</span> <span
  m="1321440">getting</span> <span m="1322040">pumped</span> <span
  m="1322430">up,</span> <span m="1323510">then</span> <span
  m="1325400">after</span> <span m="1325730">a</span> <span
  m="1325790">while,</span> <span m="1327040">mu</span> <span
  m="1327200">2</span> <span m="1327440">will</span> <span
  m="1327620">pass</span> <span m="1328010">lambda</span> <span
  m="1328400">1.</span> <span m="1330140">This</span> <span
  m="1330410">will</span> <span m="1330590">be</span> <span
  m="1330770">totally</span> <span m="1331280">true.</span> <span
  m="1331520">I</span> <span m="1331700">have</span> <span m="1331820">no</span>
  <span m="1332030">worries</span> <span m="1332390">about</span> <span
  m="1332600">this.</span></p><p><span m="1333200">The</span> <span
  m="1333320">old</span> <span m="1333530">lambda</span> <span
  m="1333950">1--</span> <span m="1334610">actually,</span> <span
  m="1335180">the</span> <span m="1335390">old--</span> <span
  m="1338150">I'll</span> <span m="1338270">even</span> <span
  m="1338570">have</span> <span m="1338810">equality</span> <span
  m="1339470">here,</span> <span m="1339740">because</span> <span
  m="1341000">for</span> <span m="1341180">this</span> <span
  m="1341480">particular</span> <span m="1342290">change,</span> <span
  m="1343580">it's</span> <span m="1343820">not</span> <span
  m="1344090">affecting</span> <span m="1345740">lambda</span> <span
  m="1346100">1.</span> <span m="1347600">So</span> <span m="1347720">I</span>
  <span m="1347810">think</span> <span m="1348060">mu</span> <span
  m="1348290">1</span> <span m="1348620">would</span> <span
  m="1348800">be</span> <span m="1349070">lambda</span> <span
  m="1349580">1</span> <span m="1350430">in</span> <span m="1351170">my</span>
  <span m="1352250">hypothetical</span> <span
  m="1352940">possibility.</span></p><p><span m="1354080">What</span> <span
  m="1354230">I'm</span> <span m="1354380">trying</span> <span
  m="1354620">to</span> <span m="1354740">get</span> <span
  m="1354950">you</span> <span m="1355040">to</span> <span m="1355190">do</span>
  <span m="1355400">is</span> <span m="1355550">to</span> <span
  m="1356120">think</span> <span m="1356390">through</span> <span
  m="1357260">what</span> <span m="1357470">this</span> <span
  m="1357740">means,</span> <span m="1358220">because</span> <span
  m="1358460">it's</span> <span m="1358910">quite</span> <span
  m="1359210">easy</span> <span m="1359510">to</span> <span
  m="1359630">write</span> <span m="1359900">that</span> <span
  m="1360140">line</span> <span m="1360500">there.</span> <span
  m="1363170">But</span> <span m="1363320">then</span> <span
  m="1363560">when</span> <span m="1363740">you</span> <span
  m="1363830">think</span> <span m="1364070">about</span> <span
  m="1364370">it,</span> <span m="1364890">you</span> <span
  m="1364940">get</span> <span m="1365120">some</span> <span
  m="1365330">questions.</span> <span m="1366950">And</span> <span
  m="1367340">it</span> <span m="1367430">looks</span> <span
  m="1368360">as</span> <span m="1368540">if</span> <span m="1368660">it</span>
  <span m="1368780">might</span> <span m="1369020">fail,</span> <span
  m="1370810">because</span> <span m="1371840">if</span> <span
  m="1371970">theta</span> <span m="1372290">is</span> <span
  m="1372430">really</span> <span m="1372730">big,</span> <span
  m="1374620">that</span> <span m="1374900">mu</span> <span m="1375170">2</span>
  <span m="1376390">would</span> <span m="1376540">pass</span> <span
  m="1376930">up</span> <span m="1377110">lambda</span> <span
  m="1377530">1.</span> <span m="1377860">And</span> <span
  m="1378010">the</span> <span m="1378880">thing</span> <span
  m="1379090">would</span> <span m="1379270">fail.</span> <span
  m="1380500">And</span> <span m="1380620">there</span> <span
  m="1380740">has</span> <span m="1380980">to</span> <span m="1381070">be</span>
  <span m="1381220">a</span> <span m="1381280">catch.</span> <span
  m="1382570">There</span> <span m="1382660">has</span> <span
  m="1382840">to</span> <span m="1382930">be</span> <span m="1383080">a</span>
  <span m="1383170">catch.</span></p><p><span m="1385960">So</span> <span
  m="1387030">does</span> <span m="1387340">anybody--</span> <span
  m="1389590">you</span> <span m="1390010">saw</span> <span
  m="1390280">that</span> <span m="1390730">in</span> <span
  m="1390940">the</span> <span m="1391030">email.</span> <span
  m="1391540">And</span> <span m="1391690">I'll</span> <span
  m="1392230">now</span> <span m="1393070">explain</span> <span
  m="1393580">what</span> <span m="1393820">how</span> <span
  m="1394270">I</span> <span m="1394420">understood</span> <span
  m="1396400">that</span> <span m="1396610">everything</span> <span
  m="1397030">can</span> <span m="1397240">work</span> <span
  m="1397630">and</span> <span m="1401340">I'm</span> <span
  m="1401560">not</span> <span m="1401770">reaching</span> <span
  m="1402160">a</span> <span m="1402250">contradiction.</span> <span
  m="1404650">And</span> <span m="1404800">here's</span> <span
  m="1405310">my</span> <span m="1405490">thinking.</span></p><p><span
  m="1407110">So</span> <span m="1407320">it's</span> <span
  m="1407920">perfectly</span> <span m="1408460">true</span> <span
  m="1408760">that</span> <span m="1408970">the</span> <span
  m="1409180">eigenvalue</span> <span m="1410560">that</span> <span
  m="1410710">goes</span> <span m="1411130">with</span> <span
  m="1411520">u2--</span> <span m="1412810">or</span> <span
  m="1412990">maybe</span> <span m="1413320">I</span> <span
  m="1413440">should</span> <span m="1413620">be</span> <span
  m="1413800">calling</span> <span m="1414280">them</span> <span
  m="1414460">x2,</span> <span m="1415120">because</span> <span
  m="1415660">usually</span> <span m="1416200">I</span> <span
  m="1416320">call</span> <span m="1416560">the</span> <span
  m="1416710">eigenvectors</span> <span m="1417770">x2--</span> <span
  m="1418750">it's</span> <span m="1418960">perfectly</span> <span
  m="1419470">true</span> <span m="1419830">that</span> <span
  m="1420040">mu</span> <span m="1420290">2,</span> <span
  m="1421210">that</span> <span m="1421630">that</span> <span
  m="1422050">one</span> <span m="1422350">goes</span> <span
  m="1422650">up.</span> <span m="1426020">But</span> <span
  m="1426440">what</span> <span m="1426740">happens</span> <span
  m="1428510">when</span> <span m="1428750">it</span> <span
  m="1430280">reaches</span> <span m="1430700">lambda</span> <span
  m="1431120">1?</span></p><p><span m="1431900">Actually,</span> <span
  m="1432920">lambda</span> <span m="1433310">1,</span> <span
  m="1433580">the</span> <span m="1433700">first</span> <span
  m="1434060">eigenvalue,</span> <span m="1434435">is</span> <span
  m="1434810">staying</span> <span m="1435140">put,</span> <span
  m="1435410">because</span> <span m="1435770">it's</span> <span
  m="1435950">not</span> <span m="1436190">getting</span> <span
  m="1436550">any</span> <span m="1436760">push</span> <span
  m="1437150">from</span> <span m="1437360">this.</span> <span
  m="1437930">But</span> <span m="1438140">the</span> <span
  m="1438290">second</span> <span m="1438680">eigenvalue</span> <span
  m="1439410">is</span> <span m="1439490">getting</span> <span
  m="1439790">a</span> <span m="1439880">push</span> <span m="1440330">of</span>
  <span m="1440480">size</span> <span m="1440870">theta.</span> <span
  m="1441700">So</span> <span m="1442640">what</span> <span
  m="1442940">happens</span> <span m="1443390">when</span> <span
  m="1444350">lambda</span> <span m="1444710">2</span> <span
  m="1444980">plus</span> <span m="1445280">theta,</span> <span
  m="1445670">which</span> <span m="1445910">is</span> <span
  m="1446060">mu</span> <span m="1446300">2--</span> <span m="1447290">mu</span>
  <span m="1447480">2</span> <span m="1447710">is</span> <span
  m="1447860">lambda</span> <span m="1448190">2</span> <span
  m="1448400">plus</span> <span m="1448700">theta--</span> <span
  m="1449480">what</span> <span m="1449690">happens</span> <span
  m="1450170">when</span> <span m="1450440">it</span> <span
  m="1451370">comes</span> <span m="1451700">up</span> <span
  m="1451880">to</span> <span m="1452000">lambda</span> <span
  m="1452390">1</span> <span m="1452720">and</span> <span m="1452870">I</span>
  <span m="1452990">start</span> <span m="1453290">worrying</span> <span
  m="1453680">that</span> <span m="1453890">it</span> <span
  m="1453980">passes</span> <span m="1454520">lambda</span> <span
  m="1454910">1?</span></p><p><span m="1458410">Do</span> <span
  m="1458485">you</span> <span m="1458560">see</span> <span
  m="1459070">what's</span> <span m="1459550">happening</span> <span
  m="1460120">there?</span> <span m="1461740">What</span> <span
  m="1462010">happens</span> <span m="1462670">when</span> <span
  m="1463540">mu</span> <span m="1463880">2</span> <span
  m="1464350">passes--</span> <span m="1465250">when</span> <span
  m="1465520">mu</span> <span m="1465820">2,</span> <span
  m="1466210">which</span> <span m="1466450">is--</span> <span
  m="1466720">I'm</span> <span m="1466870">just</span> <span
  m="1467080">going</span> <span m="1467170">to</span> <span
  m="1467290">copy</span> <span m="1467640">here--</span> <span
  m="1468220">it's</span> <span m="1468400">the</span> <span
  m="1468520">old</span> <span m="1468730">lambda</span> <span
  m="1469180">2</span> <span m="1469450">plus</span> <span
  m="1469810">the</span> <span m="1469960">theta,</span> <span
  m="1470420">the</span> <span m="1470530">number.</span> <span
  m="1471910">What</span> <span m="1472150">happens</span> <span
  m="1472570">when</span> <span m="1472720">theta</span> <span
  m="1473050">gets</span> <span m="1473230">bigger</span> <span
  m="1473500">and</span> <span m="1473590">bigger</span> <span
  m="1473890">and</span> <span m="1473980">bigger</span> <span
  m="1474250">and</span> <span m="1474340">this</span> <span
  m="1474550">hits</span> <span m="1474850">this</span> <span
  m="1475210">thing</span> <span m="1476050">and</span> <span
  m="1476170">then</span> <span m="1476350">goes</span> <span
  m="1476620">beyond?</span> <span m="1477670">Just</span> <span
  m="1478060">to</span> <span m="1478300">see</span> <span
  m="1478720">the</span> <span m="1478840">logic</span> <span
  m="1479320">here.</span></p><p><span m="1480850">What</span> <span
  m="1481150">happens</span> <span m="1481660">is</span> <span
  m="1483090">that</span> <span m="1483250">this</span> <span
  m="1483580">lambda</span> <span m="1484030">2</span> <span
  m="1484300">plus</span> <span m="1484630">theta,</span> <span
  m="1485080">which</span> <span m="1485350">was</span> <span
  m="1485540">mu</span> <span m="1485860">2,</span> <span m="1486760">mu</span>
  <span m="1487080">2</span> <span m="1487420">until</span> <span
  m="1487670">they</span> <span m="1487840">got</span> <span
  m="1488080">here.</span> <span m="1489070">But</span> <span
  m="1489280">what</span> <span m="1489580">is</span> <span
  m="1490300">lambda</span> <span m="1490690">2</span> <span
  m="1490890">plus</span> <span m="1491170">theta</span> <span
  m="1491590">after</span> <span m="1492130">it</span> <span
  m="1492340">passes</span> <span m="1492940">lambda</span> <span
  m="1493360">1?</span> <span m="1495570">It's</span> <span
  m="1495780">lambda</span> <span m="1496200">1</span> <span
  m="1496500">now.</span> <span m="1499340">It</span> <span
  m="1499490">passed</span> <span m="1499910">up,</span> <span
  m="1500090">so</span> <span m="1500300">it's</span> <span
  m="1500480">the</span> <span m="1500660">top</span> <span
  m="1501040">eigenvalue</span> <span m="1502190">of</span> <span
  m="1504110">the</span> <span m="1505550">altered</span> <span
  m="1505970">matrix.</span> <span m="1507390">And</span> <span
  m="1507530">therefore,</span> <span m="1508670">it's</span> <span
  m="1509540">just</span> <span m="1509870">fine.</span> <span
  m="1510380">It's</span> <span m="1510560">out</span> <span
  m="1510770">here.</span> <span m="1511130">No</span> <span
  m="1511310">problem.</span></p><p><span m="1513740">Maybe</span> <span
  m="1514040">I'll</span> <span m="1514400">just</span> <span
  m="1514610">say</span> <span m="1514850">it</span> <span
  m="1514970">again.</span> <span m="1515810">When</span> <span
  m="1516860">theta</span> <span m="1517790">is</span> <span
  m="1517940">big</span> <span m="1518150">enough</span> <span
  m="1518600">that</span> <span m="1518780">mu</span> <span m="1519080">2</span>
  <span m="1519520">reaches</span> <span m="1520010">lambda</span> <span
  m="1520400">1,</span> <span m="1521360">if</span> <span m="1521510">I</span>
  <span m="1521630">increase</span> <span m="1522020">theta</span> <span
  m="1522350">beyond</span> <span m="1522800">that,</span> <span
  m="1523520">then</span> <span m="1523790">this</span> <span
  m="1524090">becomes</span> <span m="1524690">not</span> <span
  m="1525140">mu</span> <span m="1525460">2</span> <span m="1525740">any</span>
  <span m="1525880">more,</span> <span m="1526220">but</span> <span
  m="1527050">mu</span> <span m="1527250">1.</span> <span m="1530060">And</span>
  <span m="1530180">then</span> <span m="1531170">totally</span> <span
  m="1532070">everybody's</span> <span m="1532610">happy.</span></p><p><span
  m="1535130">I</span> <span m="1535600">won't</span> <span
  m="1535970">say</span> <span m="1536150">more</span> <span
  m="1536420">on</span> <span m="1536540">that,</span> <span
  m="1536750">because</span> <span m="1537680">that's</span> <span
  m="1537950">just</span> <span m="1538400">like</span> <span
  m="1539570">a</span> <span m="1539630">way</span> <span
  m="1540260">that</span> <span m="1540470">I</span> <span
  m="1540650">found</span> <span m="1541070">to</span> <span
  m="1541730">make</span> <span m="1541970">me</span> <span
  m="1542180">think,</span> <span m="1542660">what</span> <span
  m="1542990">do</span> <span m="1543110">these</span> <span
  m="1543500">things</span> <span m="1543860">mean?</span> <span
  m="1544760">OK,</span> <span m="1545510">enough</span> <span
  m="1545870">said</span> <span m="1546140">on</span> <span
  m="1546290">that</span> <span m="1547070">small</span> <span
  m="1547490">point.</span></p><p><span m="1548070">But</span> <span
  m="1548270">then</span> <span m="1549080">the</span> <span
  m="1549140">main</span> <span m="1549470">point</span> <span
  m="1549860">is,</span> <span m="1550070">why</span> <span
  m="1550430">is</span> <span m="1550610">this</span> <span
  m="1550850">true?</span> <span m="1551730">This</span> <span
  m="1552010">interlacing,</span> <span m="1552740">which</span> <span
  m="1552980">is</span> <span m="1553130">really</span> <span
  m="1554800">a</span> <span m="1555170">nice,</span> <span
  m="1556340">beautiful</span> <span m="1556790">fact.</span> <span
  m="1559240">And</span> <span m="1561240">you</span> <span
  m="1561450">could</span> <span m="1561630">imagine</span> <span
  m="1562200">that</span> <span m="1562410">we</span> <span
  m="1563760">have</span> <span m="1565500">more</span> <span
  m="1566340">different</span> <span m="1566940">perturbations</span> <span
  m="1567810">than</span> <span m="1567990">just</span> <span
  m="1568650">rank</span> <span m="1568950">1s.</span></p><p><span
  m="1573300">So</span> <span m="1573540">let</span> <span m="1573750">me</span>
  <span m="1573930">tell</span> <span m="1574200">you</span> <span
  m="1574530">the</span> <span m="1576780">inequality,</span> <span
  m="1578670">so</span> <span m="1579300">named</span> <span
  m="1579750">after</span> <span m="1580290">the</span> <span
  m="1580590">discoverer,</span> <span m="1581310">Weyl's</span> <span
  m="1582840">inequality.</span> <span m="1587790">So</span> <span
  m="1588030">his</span> <span m="1588300">inequality</span> <span
  m="1589050">is</span> <span m="1589200">for</span> <span
  m="1589350">the</span> <span m="1589530">eigenvalues</span> <span
  m="1591090">of</span> <span m="1592620">S</span> <span m="1592890">plus</span>
  <span m="1593220">T.</span> <span m="1599400">So</span> <span
  m="1599610">T</span> <span m="1600060">is</span> <span m="1600360">the</span>
  <span m="1600780">change.</span> <span m="1601980">S</span> <span
  m="1602250">is</span> <span m="1602430">where</span> <span
  m="1602580">I</span> <span m="1602700">start.</span> <span
  m="1603170">It</span> <span m="1603300">has</span> <span
  m="1603570">eigenvalues</span> <span m="1604230">lambda.</span></p><p><span
  m="1605340">But</span> <span m="1605550">now,</span> <span
  m="1606150">I'm</span> <span m="1606360">looking</span> <span
  m="1606690">at</span> <span m="1606780">the</span> <span
  m="1606960">eigenvalues</span> <span m="1607620">of</span> <span
  m="1607740">S</span> <span m="1607920">plus</span> <span m="1608220">T.</span>
  <span m="1608520">So</span> <span m="1609150">I'm</span> <span
  m="1609240">making</span> <span m="1609540">a</span> <span
  m="1609630">change.</span> <span m="1610860">Over</span> <span
  m="1611160">here,</span> <span m="1611400">in</span> <span
  m="1611520">my</span> <span m="1611700">little</span> <span
  m="1611970">puzzle</span> <span m="1612420">question,</span> <span
  m="1613350">that</span> <span m="1613590">was</span> <span
  m="1613830">T.</span> <span m="1615090">It</span> <span m="1615150">was</span>
  <span m="1615360">a</span> <span m="1615420">rank</span> <span
  m="1615750">1</span> <span m="1616020">change.</span> <span
  m="1616710">Now</span> <span m="1616950">I</span> <span
  m="1617190">will</span> <span m="1617430">allow</span> <span
  m="1617910">other</span> <span m="1618120">ranks.</span></p><p><span
  m="1619860">So</span> <span m="1620100">I</span> <span m="1620220">want</span>
  <span m="1620430">to</span> <span m="1620550">estimate</span> <span
  m="1621150">lambdas</span> <span m="1621930">of</span> <span
  m="1622110">S</span> <span m="1622350">plus</span> <span m="1622650">t</span>
  <span m="1623430">in</span> <span m="1623580">terms</span> <span
  m="1624000">of</span> <span m="1624180">lambdas</span> <span
  m="1624960">of</span> <span m="1625110">S</span> <span m="1626580">and</span>
  <span m="1627510">lambdas</span> <span m="1628050">of</span> <span
  m="1628200">T.</span> <span m="1630880">And</span> <span m="1631080">I</span>
  <span m="1631170">want</span> <span m="1631440">some</span> <span
  m="1632130">inequality</span> <span m="1632950">sign</span> <span
  m="1633240">there.</span> <span m="1637000">And</span> <span
  m="1637240">it's</span> <span m="1637540">supposed</span> <span
  m="1637960">to</span> <span m="1638050">be</span> <span
  m="1638200">true</span> <span m="1638500">for</span> <span
  m="1638710">any</span> <span m="1639610">symmetric</span> <span
  m="1640240">matrices,</span> <span m="1641680">symmetric</span> <span
  m="1644400">S</span> <span m="1644760">and</span> <span
  m="1645120">T.</span></p><p><span m="1646800">And</span> <span
  m="1646900">then</span> <span m="1647110">a</span> <span
  m="1647170">totally</span> <span m="1648460">identical</span> <span
  m="1649990">Weyl</span> <span m="1650470">inequality--</span> <span
  m="1652360">actually,</span> <span m="1652720">Weyl</span> <span
  m="1653080">was</span> <span m="1653320">one</span> <span
  m="1653500">of</span> <span m="1653560">the</span> <span
  m="1653650">people</span> <span m="1653980">who</span> <span
  m="1654070">discovered</span> <span m="1654700">singular</span> <span
  m="1655210">values.</span> <span m="1656380">And</span> <span
  m="1656560">when</span> <span m="1656770">he</span> <span
  m="1656890">did</span> <span m="1657130">it,</span> <span
  m="1657280">he</span> <span m="1657430">asked</span> <span
  m="1657730">about</span> <span m="1658000">his</span> <span
  m="1658240">inequality.</span> <span m="1659350">And</span> <span
  m="1659470">he</span> <span m="1660190">found</span> <span
  m="1660490">that</span> <span m="1660640">it</span> <span
  m="1660810">still</span> <span m="1661060">worked</span> <span
  m="1661870">the</span> <span m="1661960">way</span> <span
  m="1662200">we've</span> <span m="1662370">found</span> <span
  m="1662710">this</span> <span m="1662920">morning</span> <span
  m="1663680">earlier.</span> <span m="1667210">I</span> <span
  m="1667300">haven't</span> <span m="1667540">completed</span> <span
  m="1668110">that</span> <span m="1668380">yet,</span> <span
  m="1669150">because</span> <span m="1669400">I</span> <span
  m="1669490">haven't</span> <span m="1669790">told</span> <span
  m="1670120">you</span> <span m="1670480">which</span> <span
  m="1670870">lambdas</span> <span m="1671860">I'm</span> <span
  m="1671980">talking</span> <span m="1672370">about.</span> <span
  m="1674790">So</span> <span m="1674980">let</span> <span m="1675160">me</span>
  <span m="1676440">do</span> <span m="1676650">that.</span></p><p><span
  m="1678420">So</span> <span m="1678600">now,</span> <span
  m="1678870">I'll</span> <span m="1678990">tell</span> <span
  m="1679110">you</span> <span m="1679260">Weyl's</span> <span
  m="1679680">inequality.</span> <span m="1681050">So</span> <span
  m="1681360">S</span> <span m="1681480">and</span> <span m="1681600">T</span>
  <span m="1681720">are</span> <span m="1681940">symmetric.</span> <span
  m="1683280">And</span> <span m="1683580">so</span> <span
  m="1683850">the</span> <span m="1683970">lambdas</span> <span
  m="1684510">are</span> <span m="1684630">real.</span> <span
  m="1685770">And</span> <span m="1686100">we</span> <span
  m="1686280">want</span> <span m="1686490">to</span> <span
  m="1686580">know--</span> <span m="1687670">we</span> <span
  m="1687900">want</span> <span m="1687990">to</span> <span
  m="1688080">get</span> <span m="1688350">them</span> <span
  m="1688560">in</span> <span m="1688680">order.</span></p><p><span
  m="1690060">OK,</span> <span m="1690570">so</span> <span
  m="1690930">here</span> <span m="1691210">it</span> <span
  m="1691290">goes.</span> <span m="1695170">Weyl</span> <span
  m="1696870">allowed</span> <span m="1697650">the</span> <span
  m="1697800">i-th</span> <span m="1698130">eigenvalue</span> <span
  m="1698880">of</span> <span m="1699030">S</span> <span m="1699840">and</span>
  <span m="1699990">the</span> <span m="1700110">j-th</span> <span
  m="1700520">eigenvalue</span> <span m="1701460">of</span> <span
  m="1701580">T</span> <span m="1702480">and</span> <span
  m="1702690">figured</span> <span m="1703080">out</span> <span
  m="1703320">that</span> <span m="1703620">this</span> <span
  m="1704160">was</span> <span m="1705150">bounded</span> <span
  m="1705630">by</span> <span m="1705960">that</span> <span
  m="1706700">eigenvalue</span> <span m="1707850">of</span> <span
  m="1708120">S</span> <span m="1708330">plus</span> <span m="1708690">T.</span>
  <span m="1710040">So</span> <span m="1710190">that's</span> <span
  m="1710520">Weyl's</span> <span m="1711060">great</span> <span
  m="1711390">inequality,</span> <span m="1712650">which</span> <span
  m="1713010">reduces</span> <span m="1713760">to</span> <span
  m="1714940">the</span> <span m="1719280">one</span> <span m="1719520">I</span>
  <span m="1719640">wrote</span> <span m="1719880">here,</span> <span
  m="1722730">if</span> <span m="1722880">I</span> <span m="1722970">make</span>
  <span m="1723240">the</span> <span m="1723360">right</span> <span
  m="1723630">choice--</span> <span m="1724680">yeah,</span> <span
  m="1724980">probably,</span> <span m="1725490">if</span> <span
  m="1725640">I</span> <span m="1725760">take</span> <span m="1726060">j</span>
  <span m="1726480">equal</span> <span m="1726750">to</span> <span
  m="1726870">1.</span> <span m="1727940">So</span> <span m="1728910">you</span>
  <span m="1729060">see</span> <span m="1729300">the</span> <span
  m="1729450">beauty</span> <span m="1729810">of</span> <span
  m="1729900">this.</span> <span m="1731340">It</span> <span
  m="1731760">tells</span> <span m="1732120">you</span> <span
  m="1732240">about</span> <span m="1733710">any</span> <span
  m="1734520">eigenvalues</span> <span m="1735390">of</span> <span
  m="1735660">S,</span> <span m="1736560">eigenvalues</span> <span
  m="1737040">of</span> <span m="1737160">T.</span></p><p><span
  m="1737760">So</span> <span m="1738240">I'm</span> <span
  m="1738420">using</span> <span m="1738750">lambdas</span> <span
  m="1739530">here.</span> <span m="1740670">Lambda</span> <span
  m="1741015">of</span> <span m="1741360">S</span> <span m="1741660">are</span>
  <span m="1741780">the</span> <span m="1741930">eigenvalues</span> <span
  m="1742530">of</span> <span m="1742650">S.</span> <span m="1742950">I'm</span>
  <span m="1743100">using</span> <span m="1743430">lambda</span> <span
  m="1743850">again</span> <span m="1744360">for</span> <span
  m="1744630">T</span> <span m="1745440">and</span> <span
  m="1745560">lambda</span> <span m="1746010">again</span> <span
  m="1746460">for</span> <span m="1746670">S</span> <span
  m="1746880">plus</span> <span m="1747150">T.</span> <span
  m="1747480">So</span> <span m="1749040">you</span> <span
  m="1749250">have</span> <span m="1749400">to</span> <span
  m="1749520">pay</span> <span m="1749730">attention</span> <span
  m="1750190">to</span> <span m="1750310">which</span> <span
  m="1750600">matrix</span> <span m="1751200">I'm</span> <span
  m="1751830">taking</span> <span m="1752220">the</span> <span
  m="1752340">eigenvalues</span> <span m="1752630">out</span> <span
  m="1752930">of.</span></p><p><span m="1753330">So</span> <span
  m="1753540">let</span> <span m="1753690">me</span> <span
  m="1753810">take</span> <span m="1754080">j</span> <span
  m="1754410">equal</span> <span m="1754650">to</span> <span
  m="1754800">1.</span> <span m="1757270">And</span> <span
  m="1757980">this</span> <span m="1758250">says</span> <span
  m="1758610">that</span> <span m="1758760">lambda</span> <span
  m="1759360">i,</span> <span m="1759840">because</span> <span
  m="1760410">j</span> <span m="1760650">is</span> <span m="1760800">1,</span>
  <span m="1761780">S</span> <span m="1761990">plus</span> <span
  m="1762260">T</span> <span m="1763180">is less</span> <span
  m="1763990">or</span> <span m="1764190">equal</span> <span
  m="1764340">to</span> <span m="1764490">lambda</span> <span
  m="1764910">i</span> <span m="1765150">of</span> <span m="1765330">S</span>
  <span m="1766590">plus</span> <span m="1767310">lambda</span> <span
  m="1767790">1,</span> <span m="1768210">the</span> <span
  m="1768330">top</span> <span m="1768720">eigenvalue</span> <span
  m="1769530">of</span> <span m="1769620">T.</span> <span
  m="1769920">This</span> <span m="1770160">is</span> <span
  m="1770280">lambda</span> <span m="1770730">max</span> <span
  m="1771910">of</span> <span m="1772230">T.</span></p><p><span
  m="1780170">Do</span> <span m="1780230">you</span> <span
  m="1780350">see</span> <span m="1780560">that</span> <span
  m="1780710">that's</span> <span m="1782210">totally</span> <span
  m="1782660">reasonable,</span> <span m="1783260">believable?</span> <span
  m="1784850">That</span> <span m="1785420">the</span> <span
  m="1785600">eigenvalue</span> <span m="1787820">when</span> <span
  m="1787970">I</span> <span m="1788120">add</span> <span m="1788330">on</span>
  <span m="1788540">T--</span> <span m="1788990">let's</span> <span
  m="1789260">imagine</span> <span m="1789810">in</span> <span
  m="1789860">our</span> <span m="1789960">minds</span> <span
  m="1790430">that</span> <span m="1790580">T</span> <span m="1790880">is</span>
  <span m="1791510">positive.</span> <span m="1792260">T</span> <span
  m="1792560">is</span> <span m="1793310">like</span> <span
  m="1793580">this</span> <span m="1794780">thing.</span> <span
  m="1796640">This</span> <span m="1796820">could</span> <span
  m="1797000">be</span> <span m="1797210">the</span> <span m="1797360">T,</span>
  <span m="1798530">example</span> <span m="1799070">of</span> <span
  m="1799190">a</span> <span m="1799250">T.</span> <span m="1800180">It's</span>
  <span m="1800420">what</span> <span m="1800630">I'm</span> <span
  m="1800810">adding</span> <span m="1801140">on.</span></p><p><span
  m="1802280">Then</span> <span m="1802640">the</span> <span
  m="1802790">eigenvalues</span> <span m="1805400">go</span> <span
  m="1805700">up.</span> <span m="1806570">But</span> <span
  m="1806750">they</span> <span m="1806930">don't</span> <span
  m="1807320">pass</span> <span m="1809510">that.</span> <span
  m="1809870">So</span> <span m="1810110">that</span> <span
  m="1810290">tells</span> <span m="1810590">you</span> <span
  m="1810680">how</span> <span m="1810860">much</span> <span
  m="1811160">it</span> <span m="1811280">could</span> <span
  m="1811490">go</span> <span m="1811760">up</span> <span
  m="1811910">by.</span></p><p><span m="1812510">So</span> <span
  m="1812660">I</span> <span m="1812780">guess</span> <span
  m="1813080">that</span> <span m="1815450">Weyl</span> <span
  m="1815960">is</span> <span m="1816920">giving</span> <span
  m="1817250">us</span> <span m="1817460">a</span> <span m="1817520">less</span>
  <span m="1817620">than</span> <span m="1817720">or</span> <span
  m="1817940">equal</span> <span m="1818240">here.</span> <span
  m="1819070">Less</span> <span m="1819310">or</span> <span
  m="1819440">equal</span> <span m="1819620">to</span> <span
  m="1819800">lambda</span> <span m="1820310">1--</span> <span
  m="1822050">so</span> <span m="1822470">I'm</span> <span
  m="1822650">taking</span> <span m="1823040">i</span> <span
  m="1823340">to</span> <span m="1823430">be</span> <span m="1823640">1--</span>
  <span m="1824450">plus</span> <span m="1825380">theta.</span> <span
  m="1827320">Yeah,</span> <span m="1829460">so</span> <span
  m="1829670">that</span> <span m="1829910">any</span> <span
  m="1830040">equality</span> <span m="1830630">I've</span> <span
  m="1830780">written</span> <span m="1831050">down</span> <span
  m="1831320">there--</span> <span m="1832590">there's</span> <span
  m="1832850">some</span> <span m="1833060">playing</span> <span
  m="1833390">around</span> <span m="1833720">to</span> <span
  m="1833840">do</span> <span m="1836070">to</span> <span m="1836300">get</span>
  <span m="1836480">practice.</span> <span m="1837020">And</span> <span
  m="1837650">it's</span> <span m="1837980">not</span> <span
  m="1838370">so</span> <span m="1840110">essential</span> <span
  m="1840740">for</span> <span m="1840980">us</span> <span m="1841190">to</span>
  <span m="1842060">be</span> <span m="1842660">like</span> <span
  m="1843020">world</span> <span m="1843440">grandmasters</span> <span
  m="1844310">at</span> <span m="1844430">this</span> <span
  m="1845180">thing,</span> <span m="1845540">but</span> <span
  m="1846320">you</span> <span m="1846590">should</span> <span
  m="1846860">see</span> <span m="1847130">it.</span></p><p><span
  m="1848030">And</span> <span m="1848210">you</span> <span
  m="1848330">should</span> <span m="1848570">also</span> <span
  m="1848990">see</span> <span m="1849350">j</span> <span
  m="1849650">equal</span> <span m="1849950">to</span> <span
  m="1850355">2.</span> <span m="1852010">Why</span> <span
  m="1852320">will</span> <span m="1852650">j</span> <span
  m="1853100">equal</span> <span m="1853460">to</span> <span
  m="1853730">2</span> <span m="1854420">tell</span> <span m="1854690">us</span>
  <span m="1854810">something?</span> <span m="1855230">I</span> <span
  m="1855290">hope</span> <span m="1855560">it</span> <span
  m="1855650">will.</span> <span m="1858120">Let's</span> <span
  m="1858330">see</span> <span m="1858540">what</span> <span
  m="1858720">it</span> <span m="1858810">tells</span> <span
  m="1859170">us.</span></p><p><span m="1860310">Lambda</span> <span
  m="1861480">i</span> <span m="1861780">plus</span> <span m="1862770">1</span>
  <span m="1863025">now--</span> <span m="1863280">j</span> <span
  m="1863790">is</span> <span m="1863940">2--</span> <span m="1864720">of</span>
  <span m="1864900">S</span> <span m="1865140">plus</span> <span
  m="1865500">T.</span> <span m="1866610">So</span> <span
  m="1866850">it's</span> <span m="1869370">less</span> <span
  m="1869640">than</span> <span m="1869730">or</span> <span
  m="1869820">equal</span> <span m="1869970">to</span> <span
  m="1870120">lambda</span> <span m="1870375">i</span> <span
  m="1870630">of</span> <span m="1871080">S</span> <span m="1872640">plus</span>
  <span m="1873030">lambda</span> <span m="1873900">2</span> <span
  m="1874820">of</span> <span m="1875286">T.</span> <span m="1877150">I</span>
  <span m="1877620">think</span> <span m="1877830">that's</span> <span
  m="1878100">interesting.</span> <span m="1879480">And</span> <span
  m="1879810">also,</span> <span m="1885940">I</span> <span
  m="1886270">think</span> <span m="1886510">I</span> <span
  m="1886850">also</span> <span m="1887350">could</span> <span
  m="1887590">get</span> <span m="1888280">lambda</span> <span
  m="1889150">i</span> <span m="1889600">plus</span> <span m="1890620">i</span>
  <span m="1891180">minus</span> <span m="1891960">1.</span> <span
  m="1894280">Let</span> <span m="1894400">me</span> <span
  m="1894550">write</span> <span m="1894820">it</span> <span
  m="1894910">and</span> <span m="1895030">see</span> <span
  m="1895240">if</span> <span m="1895390">it's</span> <span
  m="1895540">correct.</span> <span m="1897570">Plus</span> <span
  m="1899430">lambda</span> <span m="1899790">i</span> <span
  m="1900030">minus</span> <span m="1900510">1.</span> <span
  m="1900755">So</span> <span m="1901000">those</span> <span
  m="1901130">was</span> <span m="1901350">add</span> <span
  m="1901590">up</span> <span m="1901800">to</span> <span m="1902040">i</span>
  <span m="1902310">plus</span> <span m="1902790">2.</span> <span
  m="1903690">Yeah,</span> <span m="1903930">I</span> <span
  m="1903990">guess</span> <span m="1904230">lambda</span> <span
  m="1904620">i</span> <span m="1904830">plus</span> <span m="1905220">1</span>
  <span m="1906270">plus</span> <span m="1906720">lambda</span> <span
  m="1907380">1</span> <span m="1907760">of</span> <span
  m="1907880">T.</span></p><p><span m="1911120">That's</span> <span
  m="1911360">what</span> <span m="1911600">I</span> <span
  m="1911720">got</span> <span m="1912020">by</span> <span
  m="1912290">taking--</span> <span m="1915050">yeah,</span> <span
  m="1916430">did</span> <span m="1916660">I</span> <span m="1916760">do</span>
  <span m="1916910">that</span> <span m="1917090">right?</span> <span
  m="1920480">I'm</span> <span m="1920570">taking</span> <span
  m="1921050">j</span> <span m="1921470">equal</span> <span
  m="1921710">to</span> <span m="1921850">1.</span> <span m="1923696">No,</span>
  <span m="1924130">well,</span> <span m="1924830">I</span> <span
  m="1926220">don't</span> <span m="1926550">think</span> <span
  m="1926850">I</span> <span m="1926940">got</span> <span m="1927150">it</span>
  <span m="1927240">right.</span></p><p><span m="1930520">What</span> <span
  m="1931630">do</span> <span m="1931780">I</span> <span m="1931870">want</span>
  <span m="1932080">to</span> <span m="1932170">do</span> <span
  m="1932380">here</span> <span m="1932620">to</span> <span
  m="1933100">get</span> <span m="1933310">a</span> <span
  m="1933370">bound</span> <span m="1933760">on</span> <span
  m="1933910">lambda</span> <span m="1934300">i</span> <span
  m="1934510">plus</span> <span m="1934840">1?</span> <span m="1935080">I</span>
  <span m="1935140">want</span> <span m="1935310">to</span> <span
  m="1935410">take</span> <span m="1935650">j</span> <span
  m="1935950">equal</span> <span m="1936190">to</span> <span
  m="1936330">2.</span> <span m="1936610">I</span> <span
  m="1936760">should</span> <span m="1936880">just</span> <span
  m="1938860">be</span> <span m="1939070">sensible</span> <span
  m="1939640">and</span> <span m="1939760">plug</span> <span
  m="1940120">in</span> <span m="1940510">j</span> <span
  m="1941290">equal</span> <span m="1942130">to</span> <span
  m="1942445">2</span> <span m="1943210">and</span> <span m="1943480">i</span>
  <span m="1943720">equal</span> <span m="1943840">to</span> <span
  m="1943960">1.</span></p><p><span m="1949510">All</span> <span
  m="1950020">I</span> <span m="1950320">want</span> <span m="1950500">to</span>
  <span m="1950560">say</span> <span m="1950920">is</span> <span
  m="1951980">that</span> <span m="1952140">Weyl's</span> <span
  m="1952540">inequality</span> <span m="1953350">is</span> <span
  m="1953520">the</span> <span m="1953570">great</span> <span
  m="1954220">fact</span> <span m="1955480">out</span> <span
  m="1955690">of</span> <span m="1955810">which</span> <span
  m="1956110">all</span> <span m="1956320">this</span> <span
  m="1956580">interlacing</span> <span m="1957370">falls</span> <span
  m="1958390">and</span> <span m="1958630">more</span> <span
  m="1959740">and</span> <span m="1959950">more,</span> <span
  m="1960250">because</span> <span m="1960580">the</span> <span
  m="1960730">interlacing</span> <span m="1961480">is</span> <span
  m="1961630">telling</span> <span m="1962020">me</span> <span
  m="1962650">about</span> <span m="1963340">neighbors.</span> <span
  m="1966020">And</span> <span m="1966260">actually</span> <span
  m="1966740">if</span> <span m="1966890">I</span> <span m="1966980">use</span>
  <span m="1967310">Weyl</span> <span m="1967820">for</span> <span
  m="1968300">i</span> <span m="1968630">and</span> <span m="1968920">j,</span>
  <span m="1969380">different</span> <span m="1969770">i's</span> <span
  m="1970130">and</span> <span m="1970250">j's,</span> <span
  m="1970670">I</span> <span m="1970790">even</span> <span
  m="1971030">learn</span> <span m="1971270">about</span> <span
  m="1972170">ones</span> <span m="1972560">that</span> <span
  m="1972680">are</span> <span m="1972770">not</span> <span
  m="1973060">neighbors.</span> <span m="1976166">And</span> <span
  m="1976970">I</span> <span m="1977300">could</span> <span
  m="1977480">tell</span> <span m="1977720">you</span> <span
  m="1977930">a</span> <span m="1978020">proof</span> <span
  m="1978620">of</span> <span m="1978800">Weyl's</span> <span
  m="1979200">inequality.</span> <span m="1980600">But</span> <span
  m="1980870">I'll</span> <span m="1981050">save</span> <span
  m="1981440">that</span> <span m="1981620">for</span> <span
  m="1981800">the</span> <span m="1981930">notes.</span></p><p><span
  m="1987310">So</span> <span m="1987670">I</span> <span
  m="1987790">think</span> <span m="1988030">maybe</span> <span
  m="1988360">that's</span> <span m="1988660">what</span> <span
  m="1988840">I</span> <span m="1988930">want</span> <span m="1989100">to</span>
  <span m="1989200">do</span> <span m="1989350">about</span> <span
  m="1989620">interfacing,</span> <span m="1990460">just</span> <span
  m="1990730">to</span> <span m="1991600">say</span> <span
  m="1992380">what</span> <span m="1993250">the</span> <span
  m="1993370">notes</span> <span m="1993820">have,</span> <span
  m="1994240">but</span> <span m="1994480">not</span> <span
  m="1994810">repeat</span> <span m="1995230">it</span> <span
  m="1995380">all</span> <span m="1995560">in</span> <span
  m="1995710">class.</span> <span m="1997550">So</span> <span
  m="1997660">the</span> <span m="1997780">notes</span> <span
  m="1998140">have</span> <span m="1998740">actually</span> <span
  m="1999310">two</span> <span m="1999880">ways</span> <span
  m="2001200">to</span> <span m="2001350">prove</span> <span
  m="2001770">this</span> <span m="2002180">interlacing.</span> <span
  m="2004230">The</span> <span m="2004530">standard</span> <span
  m="2005130">way</span> <span m="2005550">that</span> <span
  m="2005790">every</span> <span m="2006450">mathematician</span> <span
  m="2007260">would</span> <span m="2007470">use</span> <span
  m="2007830">would</span> <span m="2007980">be</span> <span
  m="2008160">Weyl's</span> <span m="2008610">inequality.</span></p><p><span
  m="2010990">But</span> <span m="2011410">last</span> <span
  m="2011980">year,</span> <span m="2012870">Professor</span> <span
  m="2013390">Rao,</span> <span m="2013930">visiting,</span> <span
  m="2016600">found</span> <span m="2018010">a</span> <span
  m="2018160">nice</span> <span m="2019480">argument</span> <span
  m="2020020">that's</span> <span m="2020320">also</span> <span
  m="2020710">in</span> <span m="2020800">the</span> <span
  m="2020920">notes.</span> <span m="2022060">It</span> <span
  m="2022210">ends</span> <span m="2022480">up</span> <span
  m="2022660">with</span> <span m="2022870">a</span> <span
  m="2022930">graph.</span> <span m="2023700">And</span> <span
  m="2023890">on</span> <span m="2024040">that</span> <span
  m="2024250">graph,</span> <span m="2024890">you</span> <span
  m="2024940">can</span> <span m="2025120">see</span> <span
  m="2025420">that</span> <span m="2025600">this</span> <span
  m="2025840">is</span> <span m="2026020">true.</span> <span
  m="2027540">So</span> <span m="2029020">for</span> <span
  m="2029200">what</span> <span m="2029410">it's</span> <span
  m="2029560">worth,</span> <span m="2030700">two</span> <span
  m="2031990">approaches</span> <span m="2032650">to</span> <span
  m="2033820">this</span> <span m="2034120">interlacing</span> <span
  m="2035530">and</span> <span m="2035860">some</span> <span
  m="2036550">examples.</span> <span m="2038440">But</span> <span
  m="2038680">I</span> <span m="2038800">really</span> <span
  m="2039130">don't</span> <span m="2039310">want</span> <span
  m="2039460">to</span> <span m="2039550">spend</span> <span
  m="2041020">our</span> <span m="2041200">lives</span> <span
  m="2041710">on</span> <span m="2043510">this</span> <span
  m="2043870">eigenvalue</span> <span m="2044470">topic.</span> <span
  m="2045000">It's</span> <span m="2046240">a</span> <span
  m="2046270">beautiful</span> <span m="2046750">fact</span> <span
  m="2047110">about</span> <span m="2047570">symmetric</span> <span
  m="2048130">matrices</span> <span m="2048940">and</span> <span
  m="2049679">the</span> <span m="2049840">corresponding</span> <span
  m="2050590">fact</span> <span m="2050920">is</span> <span
  m="2051070">true</span> <span m="2051310">for</span> <span
  m="2051489">singular</span> <span m="2052000">values</span> <span
  m="2052510">of</span> <span m="2052659">any</span> <span
  m="2052870">matrix,</span> <span m="2053889">but</span> <span
  m="2054620">let's</span> <span m="2057040">think</span> <span
  m="2057370">of</span> <span m="2057489">leaving</span> <span
  m="2057880">it</span> <span m="2058000">there.</span></p><p><span
  m="2061150">So</span> <span m="2061389">now,</span> <span
  m="2062230">I'm</span> <span m="2062409">moving</span> <span
  m="2062920">on</span> <span m="2063370">to</span> <span m="2066040">the</span>
  <span m="2066159">new</span> <span m="2066400">section.</span> <span
  m="2068670">The</span> <span m="2068760">new</span> <span
  m="2068969">section</span> <span m="2069540">involves</span> <span
  m="2070260">something</span> <span m="2070710">called</span> <span
  m="2071010">compressed</span> <span m="2071580">sensing.</span> <span
  m="2072210">I</span> <span m="2072300">don't</span> <span
  m="2072449">know</span> <span m="2072570">if</span> <span
  m="2072690">you've</span> <span m="2072870">heard</span> <span
  m="2073050">those</span> <span m="2073350">words.</span></p><p><span
  m="2085949">So</span> <span m="2086159">these</span> <span
  m="2086400">are</span> <span m="2086489">all</span> <span
  m="2086670">topics</span> <span m="2087210">in</span> <span
  m="2088350">Section</span> <span m="2088949">4.4,</span> <span
  m="2089940">which</span> <span m="2090210">you</span> <span
  m="2090420">have.</span> <span m="2092699">I</span> <span
  m="2092820">think</span> <span m="2093179">we</span> <span
  m="2093900">sent</span> <span m="2094170">it</span> <span
  m="2094290">out</span> <span m="2094800">10</span> <span
  m="2095010">days</span> <span m="2095280">ago</span> <span
  m="2095520">probably.</span></p><p><span m="2098660">OK,</span> <span
  m="2099740">so</span> <span m="2100670">first</span> <span
  m="2101630">let</span> <span m="2101750">me</span> <span
  m="2101900">remember</span> <span m="2102380">what</span> <span
  m="2102590">the</span> <span m="2102710">nuclear</span> <span
  m="2103250">norm</span> <span m="2103670">is</span> <span
  m="2104000">of</span> <span m="2104150">a</span> <span
  m="2104210">matrix.</span> <span m="2106320">The</span> <span
  m="2106480">nuclear</span> <span m="2107110">norm</span> <span
  m="2107920">a</span> <span m="2108070">matrix</span> <span
  m="2113870">is</span> <span m="2114370">the</span> <span
  m="2114460">sum</span> <span m="2115690">of</span> <span
  m="2116080">the</span> <span m="2117220">singular</span> <span
  m="2117760">values,</span> <span m="2119635">the</span> <span
  m="2120070">sum</span> <span m="2120250">of</span> <span
  m="2120310">the</span> <span m="2120430">singular</span> <span
  m="2120910">values.</span> <span m="2122460">So</span> <span
  m="2122570">it's</span> <span m="2122720">like</span> <span
  m="2127400">the</span> <span m="2127550">L1</span> <span
  m="2128090">norm</span> <span m="2128450">for</span> <span
  m="2128610">a</span> <span m="2128660">vector.</span> <span
  m="2129170">That's</span> <span m="2129500">a</span> <span
  m="2129680">right</span> <span m="2130040">way</span> <span
  m="2130190">to</span> <span m="2130310">think</span> <span
  m="2130580">about</span> <span m="2130880">it.</span></p><p><span
  m="2132080">And</span> <span m="2132260">do</span> <span
  m="2132350">you</span> <span m="2132410">remember</span> <span
  m="2132950">what</span> <span m="2133220">was</span> <span
  m="2133430">special?</span> <span m="2134030">We've</span> <span
  m="2135740">talked</span> <span m="2136130">about</span> <span
  m="2136430">using</span> <span m="2137240">the</span> <span
  m="2137420">L1</span> <span m="2137840">norm.</span> <span
  m="2138230">It</span> <span m="2138320">has</span> <span
  m="2138590">this</span> <span m="2138800">special</span> <span
  m="2140750">property</span> <span m="2141290">that</span> <span
  m="2141500">the</span> <span m="2141650">ordinary</span> <span
  m="2142190">L2</span> <span m="2142610">norm</span> <span
  m="2143000">absolutely</span> <span m="2143690">does</span> <span
  m="2143900">not</span> <span m="2144200">have.</span> <span
  m="2145190">What</span> <span m="2145340">was</span> <span
  m="2145580">it</span> <span m="2145730">special</span> <span
  m="2146180">about</span> <span m="2146510">the</span> <span
  m="2146670">L1</span> <span m="2147140">norm?</span> <span
  m="2148070">If</span> <span m="2148220">I</span> <span
  m="2148370">minimize</span> <span m="2149930">the</span> <span
  m="2150110">L1</span> <span m="2150680">norm</span> <span
  m="2151700">with</span> <span m="2153650">some</span> <span
  m="2153920">constraint,</span> <span m="2154490">like</span> <span
  m="2155030">ab</span> <span m="2155570">equal</span> <span
  m="2156080">b,</span> <span m="2157220">what's</span> <span
  m="2157520">special</span> <span m="2158120">about</span> <span
  m="2158490">the</span> <span m="2158870">solution,</span> <span
  m="2159990">the</span> <span m="2160100">minimum</span> <span
  m="2160670">in</span> <span m="2160760">the</span> <span m="2160910">L1</span>
  <span m="2161320">norm?</span></p><p><span m="2162040">AUDIENCE:</span> <span
  m="2162275">Sparse.</span></p><p><span m="2162980">GILBERT STRANG:</span>
  <span m="2163137">Sparse,</span> <span m="2163295">right.</span> <span
  m="2164160">Sparse.</span> <span m="2166920">So</span> <span
  m="2167130">this</span> <span m="2167400">is</span> <span
  m="2167550">moving</span> <span m="2167970">us</span> <span
  m="2168180">up</span> <span m="2168360">to</span> <span
  m="2168510">matrices.</span> <span m="2170700">And</span> <span
  m="2170910">that's</span> <span m="2171180">where</span> <span
  m="2171390">compressed</span> <span m="2171900">sensing</span> <span
  m="2172440">comes</span> <span m="2172860">in.</span> <span
  m="2173670">Matrix</span> <span m="2174240">completion</span> <span
  m="2174990">comes</span> <span m="2175410">in.</span></p><p><span
  m="2176230">So</span> <span m="2177360">matrix</span> <span
  m="2177840">completion</span> <span m="2178500">would</span> <span
  m="2178650">just</span> <span m="2178920">be--</span> <span
  m="2180580">I</span> <span m="2180840">mentioned--</span> <span
  m="2182010">so</span> <span m="2182190">this</span> <span
  m="2182400">is</span> <span m="2182550">completion.</span> <span
  m="2186120">And</span> <span m="2186360">I'll</span> <span
  m="2186510">remember</span> <span m="2187080">the</span> <span
  m="2187200">words</span> <span m="2187650">Netflix,</span> <span
  m="2188590">which</span> <span m="2189960">made</span> <span
  m="2190200">the</span> <span m="2190290">problem</span> <span
  m="2190740">famous.</span> <span m="2191910">So</span> <span
  m="2192090">I</span> <span m="2192180">have</span> <span
  m="2192380">the</span> <span m="2192450">matrix</span> <span
  m="2193320">A,</span> <span m="2200680">3,</span> <span m="2201400">2,</span>
  <span m="2202720">question</span> <span m="2203170">mark,</span> <span
  m="2203420">question</span> <span m="2203920">mark,</span> <span
  m="2204140">question</span> <span m="2204580">mark,</span> <span
  m="2204962">1,</span> <span m="2205344">4,</span> <span m="2206110">6,</span>
  <span m="2206770">question</span> <span m="2207130">mark--</span> <span
  m="2213390">missing</span> <span m="2213780">data.</span></p><p><span
  m="2215780">And</span> <span m="2217300">so</span> <span m="2217540">I</span>
  <span m="2217600">have</span> <span m="2217720">to</span> <span
  m="2217840">put</span> <span m="2218020">it</span> <span m="2218080">in</span>
  <span m="2218200">something</span> <span m="2218680">there,</span> <span
  m="2219650">because</span> <span m="2219970">if</span> <span
  m="2220090">I</span> <span m="2220180">don't</span> <span
  m="2220390">put</span> <span m="2220610">in</span> <span
  m="2220780">anything,</span> <span m="2222190">then</span> <span
  m="2222430">the</span> <span m="2222550">numbers</span> <span
  m="2223000">I</span> <span m="2223450">do</span> <span m="2223660">know</span>
  <span m="2223930">are</span> <span m="2224020">useless,</span> <span
  m="2225600">because</span> <span m="2226370">no</span> <span
  m="2226730">row</span> <span m="2227120">or</span> <span m="2227180">no</span>
  <span m="2227450">column</span> <span m="2227930">is</span> <span
  m="2228650">complete.</span> <span m="2230100">So</span> <span
  m="2230210">it</span> <span m="2230600">just</span> <span
  m="2231140">would</span> <span m="2231410">give</span> <span
  m="2231710">up.</span> <span m="2232100">Somebody</span> <span
  m="2232550">that</span> <span m="2232700">sent</span> <span
  m="2233000">me</span> <span m="2233150">the</span> <span
  m="2233300">data,</span> <span m="2233660">3</span> <span
  m="2234170">and</span> <span m="2234320">2</span> <span m="2234710">and</span>
  <span m="2234830">didn't</span> <span m="2235730">tell</span> <span
  m="2235970">me</span> <span m="2236150">a</span> <span
  m="2237710">ranking</span> <span m="2238250">for</span> <span
  m="2238430">the</span> <span m="2238580">third</span> <span
  m="2238910">movie,</span> <span m="2240050">I'd</span> <span
  m="2240200">have</span> <span m="2240380">to</span> <span
  m="2240500">say,</span> <span m="2240830">well,</span> <span
  m="2241100">I</span> <span m="2241160">can't</span> <span
  m="2241490">use</span> <span m="2241760">it.</span> <span
  m="2242780">That's</span> <span m="2243140">not</span> <span
  m="2243410">possible.</span> <span m="2244010">So</span> <span
  m="2244220">we</span> <span m="2244400">need</span> <span
  m="2244670">to</span> <span m="2245240">think</span> <span
  m="2245570">about</span> <span m="2246290">there.</span></p><p><span
  m="2248990">And</span> <span m="2249320">the</span> <span
  m="2249470">idea</span> <span m="2250310">is</span> <span
  m="2251660">that</span> <span m="2251840">the</span> <span
  m="2251990">numbers</span> <span m="2252620">that</span> <span
  m="2252830">minimized</span> <span m="2253730">the</span> <span
  m="2254510">nuclear</span> <span m="2255050">norm</span> <span
  m="2256790">are</span> <span m="2257670">a</span> <span
  m="2257750">good</span> <span m="2257990">choice,</span> <span
  m="2259070">a</span> <span m="2259550">good</span> <span
  m="2259730">choice.</span> <span m="2260180">So</span> <span
  m="2260420">that's</span> <span m="2261500">just</span> <span
  m="2261830">a</span> <span m="2261890">connection</span> <span
  m="2263120">here</span> <span m="2263370">that</span> <span
  m="2264490">we</span> <span m="2265560">will</span> <span
  m="2265760">say</span> <span m="2266000">more</span> <span
  m="2266240">about,</span> <span m="2266540">but</span> <span
  m="2266720">not--</span> <span m="2269300">we</span> <span
  m="2269450">could</span> <span m="2269600">have</span> <span
  m="2269750">a</span> <span m="2269810">whole</span> <span
  m="2270020">course</span> <span m="2270290">in</span> <span
  m="2271220">compressed</span> <span m="2271700">sensing</span> <span
  m="2272240">and</span> <span m="2272310">nuclear</span> <span
  m="2272790">norm.</span> <span m="2273470">Professor</span> <span
  m="2273950">Parrilo</span> <span m="2275580">in</span> <span
  m="2275930">course</span> <span m="2276540">6</span> <span
  m="2278200">is</span> <span m="2278420">an</span> <span
  m="2278510">expert</span> <span m="2279050">on</span> <span
  m="2279170">this.</span></p><p><span m="2283450">But</span> <span
  m="2284430">you</span> <span m="2284730">see</span> <span
  m="2284970">the</span> <span m="2285090">point</span> <span
  m="2285530">that--</span> <span m="2286980">so</span> <span
  m="2288620">you</span> <span m="2288900">remember</span> <span
  m="2291120">v1</span> <span m="2295500">came</span> <span
  m="2295920">from</span> <span m="2297850">the</span> <span
  m="2298130">0</span> <span m="2298610">norm.</span> <span
  m="2301530">And</span> <span m="2301650">what</span> <span
  m="2301920">is</span> <span m="2302100">the</span> <span m="2302250">0</span>
  <span m="2302730">norm</span> <span m="2303100">of</span> <span
  m="2303200">the</span> <span m="2303300">vector?</span> <span
  m="2306940">Well,</span> <span m="2307140">it's</span> <span
  m="2307240">not</span> <span m="2307380">a</span> <span
  m="2307470">norm.</span> <span m="2307860">So</span> <span
  m="2308070">you</span> <span m="2308220">could</span> <span
  m="2308370">say,</span> <span m="2309270">forget</span> <span
  m="2309660">it,</span> <span m="2310440">no</span> <span
  m="2310680">answer.</span></p><p><span m="2311760">But</span> <span
  m="2312090">what</span> <span m="2312510">do</span> <span
  m="2312660">we</span> <span m="2312900">symbolically</span> <span
  m="2314100">mean</span> <span m="2314640">when</span> <span
  m="2314880">I</span> <span m="2315000">write</span> <span
  m="2315360">the</span> <span m="2315540">0</span> <span
  m="2315990">norm</span> <span m="2316380">of</span> <span m="2316530">a</span>
  <span m="2316590">vector?</span> <span m="2318310">I</span> <span
  m="2318430">mean</span> <span m="2318790">the</span> <span
  m="2318940">number</span> <span m="2319540">of....?</span> <span
  m="2321070">Non-zeros.</span> <span m="2322540">The</span> <span
  m="2322660">number</span> <span m="2323020">of</span> <span
  m="2323140">non-zeros.</span> <span m="2324520">This</span> <span
  m="2324760">was</span> <span m="2325060">the</span> <span
  m="2326260">number</span> <span m="2326620">of</span> <span
  m="2327730">non-zeros</span> <span m="2329710">in</span> <span
  m="2329830">the</span> <span m="2330490">vector,</span> <span
  m="2331810">in</span> <span m="2332020">v.</span></p><p><span
  m="2335430">But</span> <span m="2335640">it's</span> <span
  m="2335790">not</span> <span m="2336060">a</span> <span
  m="2336150">norm,</span> <span m="2338970">because</span> <span
  m="2339480">if</span> <span m="2339660">I</span> <span m="2339930">take</span>
  <span m="2340260">2</span> <span m="2340560">times</span> <span
  m="2340950">the</span> <span m="2341040">vector,</span> <span
  m="2343720">I</span> <span m="2343830">have</span> <span
  m="2343980">the</span> <span m="2344070">same</span> <span
  m="2344340">number</span> <span m="2344640">of</span> <span
  m="2344760">non-zeros,</span> <span m="2346490">same</span> <span
  m="2346790">norm.</span> <span m="2347330">I</span> <span
  m="2347450">can't</span> <span m="2347750">have</span> <span
  m="2347930">the</span> <span m="2348050">norm</span> <span
  m="2348350">of</span> <span m="2348470">2v</span> <span
  m="2349150">equal</span> <span m="2349410">the</span> <span
  m="2349536">norm</span> <span m="2349662">of</span> <span
  m="2349790">v.</span> <span m="2350150">That</span> <span
  m="2351590">would</span> <span m="2352190">blow</span> <span
  m="2352520">away</span> <span m="2353000">all</span> <span
  m="2353300">the</span> <span m="2353540">properties</span> <span
  m="2354200">of</span> <span m="2354320">norms.</span> <span
  m="2355890">So</span> <span m="2356380">v0</span> <span m="2356910">is</span>
  <span m="2357030">not</span> <span m="2357300">a</span> <span
  m="2357360">norm.</span> <span m="2357920">And</span> <span
  m="2358040">then</span> <span m="2358110">we</span> <span
  m="2358260">move</span> <span m="2358590">it</span> <span
  m="2358680">to</span> <span m="2358860">that</span> <span
  m="2359040">sort</span> <span m="2359310">of</span> <span
  m="2359430">appropriate</span> <span m="2360210">nearest</span> <span
  m="2360750">norm.</span> <span m="2361500">And</span> <span
  m="2361620">we</span> <span m="2361740">get</span> <span
  m="2361950">v1.</span> <span m="2363260">We</span> <span
  m="2363420">get</span> <span m="2363600">the</span> <span
  m="2363750">L1</span> <span m="2364200">norm,</span> <span
  m="2365200">which</span> <span m="2365400">is</span> <span
  m="2365910">the</span> <span m="2366030">sum</span> <span
  m="2366420">of--</span> <span m="2367320">everybody</span> <span
  m="2367740">remembers</span> <span m="2368310">that</span> <span
  m="2368430">this</span> <span m="2368670">is</span> <span
  m="2368850">the</span> <span m="2368970">sum</span> <span
  m="2369330">of</span> <span m="2369390">the</span> <span
  m="2369510">vi.</span></p><p><span m="2372474">And</span> <span
  m="2372970">you</span> <span m="2373060">remember</span> <span
  m="2373420">my</span> <span m="2373660">pictures</span> <span
  m="2374410">of</span> <span m="2375610">diamonds</span> <span
  m="2377110">touching</span> <span m="2377950">planes</span> <span
  m="2379300">at</span> <span m="2379570">sharp</span> <span
  m="2379930">points.</span> <span m="2381400">Well,</span> <span
  m="2382150">that's</span> <span m="2382450">what</span> <span
  m="2382800">is</span> <span m="2382870">going</span> <span
  m="2383170">on</span> <span m="2383380">here.</span> <span
  m="2384430">That</span> <span m="2384640">problem</span> <span
  m="2385180">was</span> <span m="2385690">called</span> <span
  m="2386710">basis</span> <span m="2387220">pursuit.</span> <span
  m="2388660">And</span> <span m="2389200">it</span> <span
  m="2389510">comes</span> <span m="2389830">back</span> <span
  m="2390370">again</span> <span m="2390760">in</span> <span
  m="2390970">this</span> <span m="2391180">section.</span></p><p><span
  m="2394120">So</span> <span m="2394390">I</span> <span
  m="2394510">minimize</span> <span m="2396400">this</span> <span
  m="2397140">norm</span> <span m="2398730">subject</span> <span
  m="2399150">to</span> <span m="2399300">the</span> <span
  m="2399450">conditions.</span> <span m="2401570">Now,</span> <span
  m="2401810">I'm</span> <span m="2401990">just</span> <span
  m="2402230">going</span> <span m="2402370">to</span> <span
  m="2402500">take</span> <span m="2402740">a</span> <span
  m="2402830">jump</span> <span m="2403490">to</span> <span
  m="2403610">the</span> <span m="2403730">matrix</span> <span
  m="2404270">case.</span> <span m="2407070">What's</span> <span
  m="2407430">my</span> <span m="2407700">idea</span> <span
  m="2408150">here?</span></p><p><span m="2409920">My</span> <span
  m="2410130">idea</span> <span m="2410640">is</span> <span
  m="2410910">that</span> <span m="2411190">for</span> <span
  m="2411510">a</span> <span m="2411680">matrix,</span> <span
  m="2412820">the</span> <span m="2413180">nuclear</span> <span
  m="2413960">norm</span> <span m="2414420">comes</span> <span
  m="2414870">from</span> <span m="2415155">what?</span> <span
  m="2418830">What's</span> <span m="2419190">the</span> <span
  m="2419310">norm</span> <span m="2419700">that</span> <span
  m="2419850">we</span> <span m="2420030">sort</span> <span
  m="2420300">of</span> <span m="2420420">start</span> <span
  m="2420870">with,</span> <span m="2421570">but</span> <span
  m="2421680">it's</span> <span m="2421890">not</span> <span
  m="2422160">a</span> <span m="2422250">norm?</span> <span
  m="2424220">And</span> <span m="2424490">when</span> <span
  m="2424730">I</span> <span m="2424940">sort</span> <span m="2425180">of</span>
  <span m="2425240">take</span> <span m="2425600">the--</span> <span
  m="2427280">because</span> <span m="2429840">the</span> <span
  m="2431240">requirements</span> <span m="2431870">for</span> <span
  m="2431990">a</span> <span m="2432050">norm</span> <span
  m="2432470">don't</span> <span m="2433400">fail--</span> <span
  m="2434000">they</span> <span m="2434180">fail</span> <span
  m="2434570">for</span> <span m="2434750">what</span> <span
  m="2434930">I'm</span> <span m="2435110">about</span> <span
  m="2435410">to</span> <span m="2435530">write</span> <span
  m="2435860">there.</span> <span m="2438170">I</span> <span
  m="2438290">could</span> <span m="2438620">put</span> <span
  m="2438950">A</span> <span m="2439430">0,</span> <span m="2440150">but</span>
  <span m="2440390">I</span> <span m="2440540">don't</span> <span
  m="2440930">want</span> <span m="2441920">the</span> <span
  m="2442070">number</span> <span m="2442520">of</span> <span
  m="2442670">non-zero</span> <span m="2443510">entries.</span> <span
  m="2444740">That</span> <span m="2444890">would</span> <span
  m="2445100">be</span> <span m="2445250">a</span> <span m="2445310">good</span>
  <span m="2445580">guess.</span> <span m="2447280">And</span> <span
  m="2447450">probably</span> <span m="2447900">in</span> <span
  m="2448020">some</span> <span m="2448380">sense</span> <span
  m="2448780">it</span> <span m="2449300">makes</span> <span
  m="2449520">sense.</span> <span m="2450480">But</span> <span
  m="2450690">it's</span> <span m="2450900">not</span> <span
  m="2451200">the</span> <span m="2451440">answer</span> <span
  m="2451800">I'm</span> <span m="2451980">looking</span> <span
  m="2452340">for.</span></p><p><span m="2453960">What</span> <span
  m="2454710">do</span> <span m="2454800">you</span> <span
  m="2454950">think</span> <span m="2455400">is</span> <span
  m="2455670">the</span> <span m="2456750">0</span> <span
  m="2457530">norm</span> <span m="2458220">of</span> <span m="2458400">a</span>
  <span m="2458490">matrix</span> <span m="2460420">that</span> <span
  m="2461990">is</span> <span m="2462200">not</span> <span m="2462470">a</span>
  <span m="2462560">norm,</span> <span m="2464030">but</span> <span
  m="2464540">when</span> <span m="2464790">I</span> <span
  m="2465620">pump</span> <span m="2465920">it</span> <span
  m="2466040">up</span> <span m="2466220">to</span> <span m="2466490">the</span>
  <span m="2466610">best,</span> <span m="2467150">to</span> <span
  m="2467330">the</span> <span m="2467420">nearest</span> <span
  m="2468170">good</span> <span m="2468410">norm,</span> <span
  m="2469400">I</span> <span m="2469520">get</span> <span m="2469810">the</span>
  <span m="2469970">nuclear</span> <span m="2470470">norm?</span> <span
  m="2471710">So</span> <span m="2472490">this</span> <span
  m="2472670">is</span> <span m="2472830">the</span> <span
  m="2472910">question,</span> <span m="2473390">it's</span> <span
  m="2473640">what</span> <span m="2473840">is</span> <span
  m="2474260">A0?</span> <span m="2478698">And</span> <span
  m="2479159">it's</span> <span m="2479620">what?</span></p><p><span
  m="2482160">AUDIENCE:</span> <span m="2482385">The</span> <span
  m="2482610">rank.</span></p><p><span m="2483060">GILBERT STRANG:</span> <span
  m="2483232">The</span> <span m="2483405">rank.</span> <span
  m="2484290">The</span> <span m="2484440">rank</span> <span
  m="2484890">of</span> <span m="2485130">matrix</span> <span
  m="2485730">is</span> <span m="2486720">the</span> <span
  m="2486840">equivalent.</span> <span m="2492630">So</span> <span
  m="2492840">I</span> <span m="2492930">don't</span> <span
  m="2493080">know</span> <span m="2493260">about</span> <span
  m="2493500">the</span> <span m="2493650">zero.</span> <span
  m="2494170">Nobody</span> <span m="2494490">else</span> <span
  m="2494700">calls</span> <span m="2495030">it</span> <span
  m="2495090">A0.</span> <span m="2495720">So</span> <span m="2495960">I</span>
  <span m="2496050">better</span> <span m="2496350">not.</span> <span
  m="2497460">It's</span> <span m="2497670">the</span> <span
  m="2497790">rank.</span></p><p><span m="2499180">So</span> <span
  m="2499360">again,</span> <span m="2499660">the</span> <span
  m="2499750">rank</span> <span m="2500110">is</span> <span
  m="2500200">not</span> <span m="2500440">a</span> <span
  m="2500500">norm,</span> <span m="2500890">because</span> <span
  m="2501370">if</span> <span m="2501520">I</span> <span
  m="2501640">double</span> <span m="2502000">the</span> <span
  m="2502120">matrix,</span> <span m="2502790">I</span> <span
  m="2502810">don't</span> <span m="2503050">double</span> <span
  m="2503350">the</span> <span m="2503470">rank.</span> <span
  m="2506600">So</span> <span m="2506840">I</span> <span m="2506960">have</span>
  <span m="2507080">to</span> <span m="2507200">move</span> <span
  m="2507530">to</span> <span m="2507710">a</span> <span
  m="2507770">norm.</span> <span m="2508220">And</span> <span
  m="2508340">it</span> <span m="2508430">turns</span> <span
  m="2508760">out</span> <span m="2508910">to</span> <span m="2509030">be</span>
  <span m="2509210">the</span> <span m="2509330">nuclear</span> <span
  m="2509780">norm.</span></p><p><span m="2510410">And</span> <span
  m="2510590">now,</span> <span m="2511220">I'll</span> <span
  m="2511340">just,</span> <span m="2511750">with</span> <span
  m="2511965">one</span> <span m="2512180">minute,</span> <span
  m="2512540">say</span> <span m="2513440">it's</span> <span
  m="2513750">the</span> <span m="2513860">guess</span> <span
  m="2514370">of</span> <span m="2514490">some</span> <span
  m="2514730">people</span> <span m="2515150">who</span> <span
  m="2516020">are</span> <span m="2517130">working</span> <span
  m="2517580">hard</span> <span m="2517850">to</span> <span
  m="2517970">prove</span> <span m="2518360">it,</span> <span
  m="2519140">that</span> <span m="2519620">the</span> <span
  m="2521180">deep</span> <span m="2521510">learning</span> <span
  m="2522920">algorithm</span> <span m="2523610">of</span> <span
  m="2524030">gradient</span> <span m="2524540">descent</span> <span
  m="2526130">finds</span> <span m="2527120">the</span> <span
  m="2527450">solution</span> <span m="2528680">to</span> <span
  m="2528860">the</span> <span m="2529010">minimum</span> <span
  m="2529460">problem</span> <span m="2530390">in</span> <span
  m="2530690">the</span> <span m="2531200">nuclear</span> <span
  m="2531780">norm.</span> <span m="2532850">And</span> <span
  m="2533290">we</span> <span m="2533480">don't</span> <span
  m="2533690">know</span> <span m="2533840">if</span> <span
  m="2533960">that's</span> <span m="2534200">true</span> <span
  m="2534410">or</span> <span m="2534530">not</span> <span
  m="2534950">yet.</span></p><p><span m="2536140">For</span> <span
  m="2538280">related</span> <span m="2538940">examples,</span> <span
  m="2540590">like</span> <span m="2540860">this</span> <span
  m="2541130">thing,</span> <span m="2543610">it's</span> <span
  m="2543820">proved.</span> <span m="2545540">For</span> <span
  m="2546970">the</span> <span m="2547400">exact</span> <span
  m="2547910">problem</span> <span m="2548420">of</span> <span
  m="2548570">deep</span> <span m="2548870">learning,</span> <span
  m="2549420">it's</span> <span m="2550430">a</span> <span
  m="2550460">conjecture.</span></p><p><span m="2551870">So</span> <span
  m="2552080">that's</span> <span m="2552410">what</span> <span
  m="2552950">in</span> <span m="2553790">section</span> <span
  m="2554270">4.4.</span> <span m="2555200">But</span> <span
  m="2556070">that</span> <span m="2556460">word</span> <span
  m="2556700">lasso,</span> <span m="2557270">you</span> <span
  m="2557420">want</span> <span m="2557600">to</span> <span
  m="2557690">know</span> <span m="2557870">what</span> <span
  m="2558050">that</span> <span m="2558320">is.</span> <span
  m="2558860">Compressed</span> <span m="2559310">sensing,</span> <span
  m="2559730">I'll</span> <span m="2559850">say</span> <span
  m="2560090">a</span> <span m="2560150">word</span> <span
  m="2560390">about.</span> <span m="2561140">So</span> <span
  m="2561320">that</span> <span m="2561500">will</span> <span
  m="2561650">be</span> <span m="2561800">Monday</span> <span
  m="2562700">after</span> <span m="2563180">Alex</span> <span
  m="2563600">Townsend's</span> <span m="2565160">lecture</span> <span
  m="2565610">Friday.</span> <span m="2566540">So</span> <span
  m="2566840">he's</span> <span m="2567650">coming</span> <span
  m="2567980">to</span> <span m="2568070">speak</span> <span
  m="2568970">to</span> <span m="2571100">computational</span> <span
  m="2571790">science</span> <span m="2572150">students</span> <span
  m="2572630">all</span> <span m="2572780">over</span> <span
  m="2573080">MIT</span> <span m="2573920">tomorrow</span> <span
  m="2574520">afternoon.</span> <span m="2575960">I'll</span> <span
  m="2576380">certainly</span> <span m="2576740">go</span> <span
  m="2576890">to</span> <span m="2577010">that,</span> <span
  m="2577850">but</span> <span m="2578060">then</span> <span
  m="2578600">he</span> <span m="2580100">said</span> <span
  m="2580400">he</span> <span m="2580520">would</span> <span
  m="2580790">come</span> <span m="2581150">in</span> <span
  m="2581330">and</span> <span m="2581450">take</span> <span
  m="2581720">this</span> <span m="2581960">class</span> <span
  m="2583190">Friday.</span> <span m="2583850">So</span> <span
  m="2584340">I'll</span> <span m="2584510">see</span> <span
  m="2584690">you</span> <span m="2584780">Friday.</span> <span
  m="2585410">And</span> <span m="2585590">he'll</span> <span
  m="2585800">be</span> <span m="2585950">here</span> <span
  m="2586130">too.</span></p>
uid: d1fbe34c24214c5093b79e4e3d36008f
type: courses
layout: video
---
