---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>This lecture focuses on randomized
  linear algebra, specifically on randomized matrix multiplication. This process
  is useful when working with very large matrices. Professor Strang introduces
  and describes the basic steps of randomized computations.</p> <h2
  class="subhead">Summary</h2> <p>Sample a few columns of \(A\) and rows of
  \(B\)<br /> Use probabilities proportional to lengths \(\Vert A_i \Vert \,
  \Vert B_i \Vert\)<br /> See the key ideas of probability: Mean and Variance<br
  /> Mean&nbsp;\(= AB\) (correct) and&nbsp;variance to be minimized</p>
  <p>Related section in textbook: II.4</p> <p><strong>Instructor:</strong> Prof.
  Gilbert Strang</p>
embedded_media:
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture13_300k.mp4'
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5ba2fec570de9f5c7cfce1136e1b7c9f
  - id: Video-YouTube-Stream
    media_location: z0ykhV15wLw
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    title: Video-YouTube-Stream
    type: Video
    uid: 7eb93782a81e03d562a7f93b8daef8ee
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/z0ykhV15wLw/default.jpg'
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9580183cb835589374efb1122f3ba40a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: z0ykhV15wLw
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 06ae7e642dd7e192723de485248ded62
  - id: z0ykhV15wLw.srt
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-13-randomized-matrix-multiplication/z0ykhV15wLw.srt
    title: 3play caption file
    type: null
    uid: f8906e3e06012cced5f75153a6d31bd9
  - id: z0ykhV15wLw.pdf
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-13-randomized-matrix-multiplication/z0ykhV15wLw.pdf
    title: 3play pdf file
    type: null
    uid: befc992075599da81462604db72bdab3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b366b6ca1edcb463cbade29e3f66958b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2bb8ddfac31fb6dec6c925e041b98efd
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: a8ad0acf5210502b9aac07f66ff4e301
inline_embed_id: 75368087lecture13randomizedmatrixmanipulation16325157
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-13-randomized-matrix-multiplication
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-13-randomized-matrix-multiplication
title: 'Lecture 13: Randomized Matrix Multiplication'
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">OpenCourseWare</span> <span
  m="7520">continue</span> <span m="8029">to</span> <span m="8180">offer</span>
  <span m="8720">high-quality</span> <span m="9200">educational</span> <span
  m="9860">resources</span> <span m="10430">for</span> <span
  m="10550">free.</span> <span m="11610">To</span> <span m="11630">make</span>
  <span m="11840">a</span> <span m="11900">donation</span> <span
  m="12680">or</span> <span m="12800">to</span> <span m="12950">view</span>
  <span m="13160">additional</span> <span m="13550">materials</span> <span
  m="14180">from</span> <span m="14360">hundreds</span> <span
  m="14690">of</span> <span m="14810">MIT</span> <span m="15170">courses,</span>
  <span m="16470">visit</span> <span m="16670">MIT</span> <span
  m="17180">OpenCourseWare</span> <span m="18140">at</span> <span
  m="18290">ocw.mit.edu.</span></p><p><span m="22830">GILBERT STRANG:</span>
  <span m="22915">So</span> <span m="23000">I've</span> <span
  m="23120">mentioned</span> <span m="25220">randomized</span> <span
  m="26210">linear</span> <span m="26570">algebra</span> <span
  m="27020">a</span> <span m="27080">few</span> <span m="27350">times,</span>
  <span m="27890">and</span> <span m="28040">I</span> <span
  m="28220">thought,</span> <span m="28610">OK,</span> <span
  m="28970">I'm</span> <span m="29150">going</span> <span m="29270">to</span>
  <span m="29390">jump</span> <span m="29840">in</span> <span
  m="30350">and</span> <span m="32280">describe</span> <span
  m="33720">randomized</span> <span m="34860">matrix</span> <span
  m="35430">multiplication.</span> <span m="36390">It's</span> <span
  m="36600">a</span> <span m="37080">pretty</span> <span m="37440">cool</span>
  <span m="37890">idea,</span> <span m="38145">it</span> <span
  m="38400">seems</span> <span m="38790">to</span> <span m="38910">me.</span>
  <span m="40710">So</span> <span m="41010">this</span> <span
  m="41250">is</span> <span m="41410">a</span> <span m="42300">topic</span>
  <span m="42780">within</span> <span m="43350">randomized</span> <span
  m="44160">linear</span> <span m="44550">algebra.</span></p><p><span
  m="45640">And</span> <span m="45720">when</span> <span m="46020">would</span>
  <span m="46230">we</span> <span m="46380">be</span> <span
  m="46590">doing</span> <span m="46950">any</span> <span m="47190">of</span>
  <span m="47310">this?</span> <span m="48180">It</span> <span
  m="48300">would</span> <span m="48510">be</span> <span m="48690">for</span>
  <span m="48870">matrices</span> <span m="49680">that</span> <span
  m="49830">are</span> <span m="49920">just</span> <span
  m="51060">really,</span> <span m="51700">really</span> <span
  m="52020">large.</span> <span m="53320">So</span> <span m="53430">we</span>
  <span m="53610">plan</span> <span m="53970">to</span> <span
  m="54120">sample</span> <span m="54870">the</span> <span
  m="55680">columns</span> <span m="57060">of</span> <span m="57705">A</span>
  <span m="58080">and</span> <span m="59460">sample</span> <span
  m="60090">the</span> <span m="60330">corresponding</span> <span
  m="61350">rows</span> <span m="61830">of</span> <span m="61890">B,</span>
  <span m="62490">so</span> <span m="62820">actually</span> <span
  m="63210">that</span> <span m="63750">when</span> <span m="63960">we</span>
  <span m="64080">decide</span> <span m="64560">on</span> <span
  m="64739">a</span> <span m="64800">column,</span> <span m="65220">we've</span>
  <span m="65459">also</span> <span m="65850">decided</span> <span
  m="66540">on</span> <span m="66720">a</span> <span
  m="66780">row.</span></p><p><span m="67530">So</span> <span
  m="67980">we're</span> <span m="68160">taking</span> <span
  m="69270">those</span> <span m="69690">pieces,</span> <span
  m="71040">which</span> <span m="71460">do</span> <span
  m="71850">correctly</span> <span m="72540">add</span> <span
  m="72780">up</span> <span m="72960">to</span> <span m="73140">AB,</span> <span
  m="74280">but</span> <span m="74520">we're</span> <span m="74730">not</span>
  <span m="75210">going</span> <span m="75400">to</span> <span
  m="75510">take</span> <span m="75810">them</span> <span m="76020">all.</span>
  <span m="77040">We're</span> <span m="77190">going</span> <span
  m="77350">to</span> <span m="77460">take</span> <span
  m="78720">different</span> <span m="79140">ones,</span> <span
  m="80490">randomly</span> <span m="81210">sampled</span> <span
  m="82530">with</span> <span m="82770">probabilities--</span> <span
  m="83940">we</span> <span m="84150">have</span> <span m="84390">to</span>
  <span m="84540">decide</span> <span m="85170">probabilities--</span> <span
  m="86700">and</span> <span m="90750">then</span> <span m="91260">we'll</span>
  <span m="91680">add</span> <span m="91980">up</span> <span
  m="92850">our</span> <span m="93060">samples,</span> <span
  m="93840">and</span> <span m="94050">we</span> <span m="94230">hope</span>
  <span m="94590">that</span> <span m="95640">the</span> <span
  m="95790">result</span> <span m="96360">is</span> <span m="96600">close</span>
  <span m="97050">to</span> <span m="97320">AB.</span> <span
  m="98520">That's</span> <span m="98790">the</span> <span
  m="98940">idea.</span></p><p><span m="100570">OK,</span> <span
  m="103080">so</span> <span m="104370">this</span> <span
  m="105180">lecture</span> <span m="105600">then,</span> <span
  m="105950">so</span> <span m="106290">I</span> <span m="106380">wrote</span>
  <span m="106700">these</span> <span m="107280">pages</span> <span
  m="108510">about</span> <span m="109830">six</span> <span
  m="110160">months</span> <span m="110520">ago.</span> <span
  m="111900">So</span> <span m="112140">I've</span> <span m="112290">been</span>
  <span m="112560">desperately</span> <span m="113700">trying</span> <span
  m="114000">to</span> <span m="114090">remember</span> <span
  m="114600">what</span> <span m="114810">I</span> <span
  m="114900">wrote,</span> <span m="116130">because</span> <span
  m="116400">it's</span> <span m="116610">not</span> <span m="116910">a</span>
  <span m="117000">subject</span> <span m="117510">I</span> <span
  m="117630">have</span> <span m="117780">ever</span> <span
  m="118140">spoken</span> <span m="118650">about</span> <span
  m="118920">before,</span> <span m="119400">but</span> <span
  m="119550">it's</span> <span m="119820">so</span> <span
  m="120690">neat.</span> <span m="121590">So</span> <span
  m="121800">here</span> <span m="122040">are</span> <span
  m="122130">some</span> <span m="122430">of</span> <span m="122490">the</span>
  <span m="122640">things</span> <span m="123030">that</span> <span
  m="123180">come</span> <span m="123480">into</span> <span
  m="123810">it.</span></p><p><span m="124770">We</span> <span
  m="124920">have</span> <span m="125160">to</span> <span
  m="125310">decide</span> <span m="125880">on</span> <span
  m="126090">probabilities.</span> <span m="128100">Then</span> <span
  m="128310">we</span> <span m="128490">want</span> <span m="128810">to</span>
  <span m="129030">compute</span> <span m="129660">the</span> <span
  m="129840">mean.</span> <span m="131540">So</span> <span
  m="131850">it's</span> <span m="132440">our</span> <span
  m="132570">first</span> <span m="132930">day</span> <span
  m="133260">with</span> <span m="133470">some</span> <span m="133740">of</span>
  <span m="133800">these</span> <span m="134190">key</span> <span
  m="134490">ideas</span> <span m="135150">from</span> <span
  m="135870">statistics</span> <span m="136740">and</span> <span
  m="136860">probability.</span> <span m="138300">So</span> <span
  m="138450">we're</span> <span m="138600">going</span> <span
  m="138780">to</span> <span m="138930">take</span> <span
  m="139230">probabilities</span> <span m="140100">that</span> <span
  m="140280">add</span> <span m="140490">to</span> <span m="140610">1.</span>
  <span m="141730">We're</span> <span m="141950">going</span> <span
  m="142130">to</span> <span m="142230">figure</span> <span
  m="142620">out</span> <span m="142800">what's</span> <span
  m="143190">the</span> <span m="143310">mean</span> <span
  m="143820">value</span> <span m="144390">of</span> <span m="144600">our</span>
  <span m="145980">random</span> <span m="146670">AB.</span> <span
  m="148230">We</span> <span m="148440">hope,</span> <span m="149760">and</span>
  <span m="149970">we</span> <span m="150180">will</span> <span
  m="150450">see</span> <span m="151140">that</span> <span m="151480">the</span>
  <span m="151590">mean</span> <span m="151950">value</span> <span
  m="152880">of</span> <span m="153090">the</span> <span
  m="153210">random</span> <span m="153720">AB</span> <span m="154170">is</span>
  <span m="154550">correct</span> <span m="155130">AB.</span></p><p><span
  m="157720">But</span> <span m="158170">there</span> <span
  m="158530">will</span> <span m="158770">be</span> <span m="158980">a</span>
  <span m="159040">variance.</span> <span m="161380">Every</span> <span
  m="161710">sample</span> <span m="162190">won't</span> <span
  m="162430">be</span> <span m="162640">correct.</span> <span
  m="163090">In</span> <span m="163210">fact,</span> <span m="163510">no</span>
  <span m="163990">samples</span> <span m="164590">will</span> <span
  m="164770">be</span> <span m="164950">correct.</span> <span
  m="165760">Only</span> <span m="166030">when</span> <span m="166240">we</span>
  <span m="166450">add</span> <span m="166630">them</span> <span
  m="166810">up</span> <span m="167410">on</span> <span m="167620">the</span>
  <span m="167800">average,</span> <span m="169010">they're</span> <span
  m="169260">correct,</span> <span m="169840">and</span> <span
  m="170200">we</span> <span m="170350">get</span> <span m="170560">to</span>
  <span m="170680">correct</span> <span m="171160">AB.</span> <span
  m="173500">So</span> <span m="173740">the</span> <span m="173830">mean</span>
  <span m="174190">will</span> <span m="174400">come</span> <span
  m="174670">out</span> <span m="174880">right.</span> <span
  m="175620">It</span> <span m="175750">will</span> <span m="175840">come</span>
  <span m="176110">out</span> <span m="176320">as</span> <span
  m="176530">AB.</span> <span m="177460">You'll</span> <span
  m="177670">see</span> <span m="177910">it</span> <span
  m="178030">happen.</span></p><p><span m="182210">Correct.</span> <span
  m="186380">But</span> <span m="187280">there's</span> <span
  m="187610">a</span> <span m="187670">big</span> <span
  m="187910">variance,</span> <span m="189370">not</span> <span
  m="189710">zero.</span> <span m="193430">We'll</span> <span
  m="193670">be</span> <span m="193850">all</span> <span m="194060">over</span>
  <span m="194300">the</span> <span m="194390">place</span> <span
  m="195800">with</span> <span m="196040">our</span> <span
  m="196190">samples.</span> <span m="197060">They'll</span> <span
  m="197270">just</span> <span m="197540">average</span> <span
  m="198050">out</span> <span m="198290">right,</span> <span
  m="198680">but</span> <span m="198890">they'll</span> <span
  m="199100">be</span> <span m="199280">all</span> <span m="199520">over.</span>
  <span m="200390">No</span> <span m="200660">particular</span> <span
  m="201290">sample</span> <span m="201650">will</span> <span
  m="201830">be</span> <span m="201980">right</span> <span m="202280">at</span>
  <span m="202430">all.</span> <span m="204020">So</span> <span
  m="205400">then</span> <span m="205640">we</span> <span m="205820">want</span>
  <span m="206030">to</span> <span m="206120">pick</span> <span
  m="206420">the</span> <span m="206540">best</span> <span
  m="206900">probabilities.</span> <span m="211050">So</span> <span
  m="211240">our</span> <span m="211390">job</span> <span m="211750">will</span>
  <span m="211930">be,</span> <span m="213040">once</span> <span
  m="213310">we</span> <span m="213520">see</span> <span m="213880">how</span>
  <span m="214090">the</span> <span m="214210">system</span> <span
  m="214720">works,</span> <span m="215990">we're</span> <span
  m="216120">going</span> <span m="216250">to</span> <span
  m="216550">assign</span> <span m="217060">probabilities.</span> <span
  m="218930">And</span> <span m="219340">we're</span> <span
  m="219580">going</span> <span m="219740">to</span> <span
  m="219880">choose</span> <span m="220570">the</span> <span
  m="220720">probabilities</span> <span m="221680">that</span> <span
  m="221890">minimize</span> <span m="222580">the</span> <span
  m="222710">variance.</span></p><p><span m="224360">So</span> <span
  m="224720">this</span> <span m="224990">is</span> <span m="225140">a</span>
  <span m="225230">typical</span> <span m="226490">situation</span> <span
  m="227240">where</span> <span m="227870">the</span> <span
  m="228020">mean</span> <span m="228470">is</span> <span
  m="228680">pretty</span> <span m="229820">straightforward</span> <span
  m="230780">and</span> <span m="231230">does</span> <span
  m="231530">what</span> <span m="231770">you</span> <span
  m="231890">want,</span> <span m="233360">but</span> <span
  m="233840">having</span> <span m="234200">the</span> <span
  m="234320">correct</span> <span m="234710">mean</span> <span
  m="235160">does</span> <span m="235370">not</span> <span
  m="235730">mean</span> <span m="236070">you've</span> <span
  m="236270">got</span> <span m="236480">good</span> <span
  m="236780">answers</span> <span m="237320">at</span> <span
  m="237440">all.</span> <span m="238295">And</span> <span m="238790">the</span>
  <span m="238970">average</span> <span m="239540">of,</span> <span
  m="239960">you</span> <span m="240060">know,</span> <span
  m="240170">like</span> <span m="241400">minus</span> <span
  m="241790">100</span> <span m="242140">and</span> <span m="242490">100</span>
  <span m="243380">might</span> <span m="243680">be</span> <span
  m="243800">the</span> <span m="243890">correct</span> <span
  m="244310">answer</span> <span m="244670">is</span> <span
  m="244730">zero,</span> <span m="245630">but</span> <span
  m="245870">you're</span> <span m="246050">way</span> <span
  m="246350">off.</span> <span m="247750">And</span> <span
  m="248030">this</span> <span m="248330">measures</span> <span
  m="249500">how</span> <span m="249680">far</span> <span m="249980">you</span>
  <span m="250190">are.</span></p><p><span m="251900">So</span> <span
  m="252110">I</span> <span m="252170">don't</span> <span m="252320">know</span>
  <span m="252440">if</span> <span m="252560">you</span> <span
  m="252680">know</span> <span m="252950">these</span> <span
  m="253220">words.</span> <span m="253560">It's</span> <span
  m="253790">unfortunate,</span> <span m="255500">but</span> <span
  m="255710">I</span> <span m="255830">guess</span> <span
  m="256130">18.065</span> <span m="257240">can't</span> <span
  m="257600">change</span> <span m="257990">it</span> <span
  m="258110">now,</span> <span m="259070">that</span> <span
  m="259519">the</span> <span m="259610">variance</span> <span
  m="260230">is</span> <span m="260390">written</span> <span
  m="260750">sigma</span> <span m="261140">squared.</span> <span
  m="262310">And</span> <span m="262490">we</span> <span
  m="262730">already</span> <span m="263120">have</span> <span
  m="263450">a</span> <span m="263640">good</span> <span m="263960">use</span>
  <span m="264320">for</span> <span m="265190">the</span> <span
  m="265310">Greek</span> <span m="265610">letter</span> <span
  m="265910">sigma,</span> <span m="266430">but</span> <span
  m="267290">today</span> <span m="267740">it</span> <span m="267860">has</span>
  <span m="268220">a</span> <span m="268280">different</span> <span
  m="269000">use</span> <span m="269870">for</span> <span
  m="270020">variance.</span> <span m="272020">And</span> <span
  m="273000">this--</span> <span m="273730">Lagrange</span> <span
  m="274170">multipliers</span> <span m="274860">will</span> <span
  m="275010">come</span> <span m="275280">in</span> <span m="275460">near</span>
  <span m="275670">the</span> <span m="275850">end.</span></p><p><span
  m="276460">So</span> <span m="276540">basically,</span> <span
  m="277560">let</span> <span m="277680">me</span> <span m="277860">do</span>
  <span m="278110">a</span> <span m="279300">practice</span> <span
  m="279930">example</span> <span m="280620">to</span> <span
  m="281310">recall</span> <span m="282240">what</span> <span
  m="282510">mean</span> <span m="283050">and</span> <span
  m="283200">variance</span> <span m="283770">and</span> <span
  m="283890">what</span> <span m="284100">those</span> <span
  m="284400">are</span> <span m="284520">about.</span> <span
  m="285360">So</span> <span m="285570">let</span> <span m="285720">me</span>
  <span m="285990">take</span> <span m="286290">a</span> <span
  m="286380">matrix</span> <span m="287040">that's</span> <span
  m="288390">1</span> <span m="288690">by</span> <span m="288930">2.</span>
  <span m="289680">So</span> <span m="290490">my</span> <span
  m="290640">matrix</span> <span m="291270">is</span> <span
  m="291390">just</span> <span m="291630">going</span> <span
  m="291820">to</span> <span m="291930">be</span> <span m="293190">a</span>
  <span m="293400">b.</span> <span m="297080">OK,</span> <span
  m="298700">I'm</span> <span m="298850">going</span> <span m="299000">to</span>
  <span m="299090">sample</span> <span m="299660">that</span> <span
  m="302810">twice,</span> <span m="305240">and</span> <span
  m="305450">my</span> <span m="305660">rule</span> <span m="305960">for</span>
  <span m="306140">the</span> <span m="306290">two</span> <span
  m="306560">samples</span> <span m="307130">will</span> <span
  m="307310">be</span> <span m="307460">the</span> <span m="307580">same.</span>
  <span m="308160">They</span> <span m="308240">will</span> <span
  m="308420">be</span> <span m="309290">a</span> <span
  m="309680">identically</span> <span m="310670">distributed,</span> <span
  m="313530">totally</span> <span m="313970">identical.</span> <span
  m="314570">And</span> <span m="314660">what's</span> <span
  m="314900">my</span> <span m="315080">rule</span> <span
  m="315300">going</span> <span m="315470">to</span> <span m="315590">be?</span>
  <span m="315890">So</span> <span m="316070">this</span> <span
  m="316250">is</span> <span m="316370">like</span> <span
  m="316580">practice.</span></p><p><span m="318020">My</span> <span
  m="318170">rule</span> <span m="318440">is</span> <span
  m="318590">going</span> <span m="318740">to</span> <span m="318800">be</span>
  <span m="319010">I</span> <span m="319160">take</span> <span
  m="319430">that</span> <span m="319700">column</span> <span
  m="320120">or</span> <span m="320210">that</span> <span
  m="320450">column</span> <span m="320810">with</span> <span
  m="320990">probabilities</span> <span m="321860">I</span> <span
  m="321960">have.</span> <span m="326320">And</span> <span m="326470">I</span>
  <span m="326590">do</span> <span m="326770">it</span> <span
  m="326950">twice.</span> <span m="330200">And</span> <span m="330380">I</span>
  <span m="330470">take</span> <span m="330710">the</span> <span
  m="330860">average.</span> <span m="331630">So</span> <span
  m="331850">I'm</span> <span m="332000">going</span> <span m="332120">to</span>
  <span m="332210">take</span> <span m="332780">probabilities</span> <span
  m="333580">are</span> <span m="333670">going</span> <span m="333800">to</span>
  <span m="333950">be</span> <span m="335630">1/2,</span> <span
  m="336180">1/2</span> <span m="338080">for</span> <span m="338300">the</span>
  <span m="338420">two</span> <span m="338630">columns.</span> <span
  m="339800">And</span> <span m="339950">I'm</span> <span
  m="340100">going</span> <span m="340220">to</span> <span m="340370">do</span>
  <span m="340940">s</span> <span m="341240">equals</span> <span
  m="341610">to</span> <span m="341880">2</span> <span
  m="342800">samples.</span></p><p><span m="347840">And</span> <span
  m="348050">I'm</span> <span m="348230">going</span> <span m="348400">to</span>
  <span m="348470">add--</span> <span m="350150">I'll</span> <span
  m="350630">weight</span> <span m="351050">them</span> <span
  m="351530">with--</span> <span m="352530">and</span> <span
  m="352820">I'll</span> <span m="352970">take</span> <span
  m="353210">the</span> <span m="353390">average</span> <span
  m="360450">of</span> <span m="360600">the</span> <span m="360720">two</span>
  <span m="360990">samples.</span> <span m="362590">OK.</span> <span
  m="365560">And</span> <span m="366700">that</span> <span
  m="366940">will</span> <span m="367120">be</span> <span m="367390">my</span>
  <span m="368860">randomized</span> <span m="370330">matrix.</span> <span
  m="371690">OK,</span> <span m="372420">so</span> <span m="372660">could</span>
  <span m="372900">we</span> <span m="373050">compute</span> <span
  m="373560">the</span> <span m="373710">mean</span> <span m="374300">for</span>
  <span m="374430">the--</span> <span m="374730">so</span> <span
  m="374940">I've</span> <span m="375120">described</span> <span
  m="375900">a</span> <span m="376470">randomized</span> <span
  m="377220">sampling</span> <span m="378270">process.</span> <span
  m="378900">I've</span> <span m="379080">given</span> <span
  m="379380">you</span> <span m="379500">the</span> <span
  m="379620">probabilities,</span> <span m="380400">1/2</span> <span
  m="380700">and</span> <span m="380790">1/2,</span> <span m="381870">the</span>
  <span m="381990">number</span> <span m="382350">of</span> <span
  m="382470">times</span> <span m="382920">I'm</span> <span
  m="383070">going</span> <span m="383180">to</span> <span m="383340">do</span>
  <span m="383580">it,</span> <span m="384210">and</span> <span
  m="384330">then</span> <span m="384540">I</span> <span
  m="384690">divide</span> <span m="385260">by</span> <span
  m="385500">that</span> <span m="385710">number</span> <span
  m="386070">of</span> <span m="386160">times.</span></p><p><span
  m="386610">So</span> <span m="386790">this</span> <span m="386970">is</span>
  <span m="387120">really--</span> <span m="388230">I</span> <span
  m="388680">have</span> <span m="388810">a</span> <span m="388890">1</span>
  <span m="389190">over</span> <span m="389460">s</span> <span
  m="389880">here,</span> <span m="390150">because</span> <span
  m="390600">I've</span> <span m="391080">got</span> <span m="391320">s</span>
  <span m="391590">of</span> <span m="391710">these.</span> <span
  m="392850">And</span> <span m="393390">now--</span> <span m="395200">so</span>
  <span m="396200">what</span> <span m="396540">are</span> <span
  m="396610">the</span> <span m="396730">possibilities</span> <span
  m="397570">here?</span> <span m="398060">I</span> <span m="398260">want</span>
  <span m="398440">to</span> <span m="398500">find</span> <span
  m="398800">the</span> <span m="398900">mean.</span> <span
  m="399310">First</span> <span m="399670">of</span> <span
  m="399790">all,</span> <span m="399970">let's</span> <span
  m="400600">practice</span> <span m="401290">with the</span> <span
  m="401650">mean.</span> <span m="403530">OK,</span> <span m="405300">so</span>
  <span m="405900">here</span> <span m="406140">are</span> <span
  m="406230">two--</span> <span m="406740">I</span> <span
  m="406890">could</span> <span m="407070">think</span> <span
  m="407310">of</span> <span m="407400">two</span> <span
  m="407610">different</span> <span m="407940">ways</span> <span
  m="408270">to</span> <span m="408900">compute</span> <span
  m="409350">the</span> <span m="409440">mean.</span> <span
  m="409770">Let</span> <span m="409860">me</span> <span m="410550">start</span>
  <span m="410880">with</span> <span m="411030">this</span> <span
  m="411240">one.</span> <span m="412080">What</span> <span m="412260">is</span>
  <span m="412420">the</span> <span m="412530">mean,</span> <span
  m="413070">the</span> <span m="413250">average</span> <span
  m="413760">value--</span> <span m="414380">mean</span> <span
  m="414750">means</span> <span m="415170">average</span> <span
  m="415650">value--</span> <span m="416550">of</span> <span
  m="416730">the</span> <span m="416880">first</span> <span
  m="417330">sample?</span></p><p><span m="419000">So</span> <span
  m="419480">the</span> <span m="419690">average</span> <span
  m="420080">value</span> <span m="420500">of</span> <span m="420590">the</span>
  <span m="420710">first</span> <span m="421040">sample,</span> <span
  m="422150">I</span> <span m="422330">would--</span> <span
  m="422870">what</span> <span m="423590">is</span> <span m="423770">the</span>
  <span m="423860">mean,</span> <span m="424880">the</span> <span
  m="425090">general</span> <span m="425510">formula</span> <span
  m="425990">is</span> <span m="427040">you</span> <span m="427400">add</span>
  <span m="427670">up</span> <span m="428720">all</span> <span
  m="429050">the</span> <span m="431060">sample</span> <span
  m="433100">times</span> <span m="434170">it's--</span> <span
  m="435960">the</span> <span m="436100">possible</span> <span
  m="436640">samples</span> <span m="437210">times</span> <span
  m="437550">their</span> <span m="437720">probabilities.</span> <span
  m="441670">And</span> <span m="441750">in</span> <span m="441870">this</span>
  <span m="442080">case,</span> <span m="443280">the</span> <span
  m="443400">probabilities</span> <span m="444270">are</span> <span
  m="444420">1/2</span> <span m="446070">that</span> <span m="446340">the</span>
  <span m="446400">sample</span> <span m="446880">is</span> <span
  m="447090">a,</span> <span m="447360">0</span> <span m="448920">and</span>
  <span m="449190">1/2</span> <span m="450690">that</span> <span
  m="450870">the</span> <span m="451020">sample</span> <span
  m="451560">is</span> <span m="451710">0,</span> <span m="452140">b.</span>
  <span m="455920">So</span> <span m="456130">those</span> <span
  m="456340">are</span> <span m="456400">my</span> <span m="456580">two</span>
  <span m="456820">samples.</span></p><p><span m="458680">And</span> <span
  m="460210">computing</span> <span m="460810">the</span> <span
  m="460930">mean</span> <span m="462370">of</span> <span m="462550">the</span>
  <span m="462970">total,</span> <span m="464230">I</span> <span
  m="464440">get--</span> <span m="465850">but</span> <span
  m="466000">then</span> <span m="466480">mean</span> <span
  m="466990">for</span> <span m="467200">each</span> <span
  m="467410">sample,</span> <span m="468580">but</span> <span
  m="468730">then</span> <span m="468940">I</span> <span m="469150">have</span>
  <span m="469360">to</span> <span m="469480">multiply,</span> <span
  m="470710">so</span> <span m="471210">let's</span> <span m="471780">put</span>
  <span m="472210">what</span> <span m="472390">I</span> <span
  m="472450">got</span> <span m="472720">here</span> <span m="473290">1/2</span>
  <span m="473590">of</span> <span m="473740">a,</span> <span
  m="473920">b.</span> <span m="479090">That</span> <span m="479300">was</span>
  <span m="479520">the</span> <span m="479600">meaning</span> <span
  m="480170">of</span> <span m="480320">each</span> <span
  m="480500">sample,</span> <span m="482140">because</span> <span
  m="482410">my</span> <span m="482560">probabilities</span> <span
  m="483310">were</span> <span m="483490">equal,</span> <span
  m="483890">1/2</span> <span m="484210">and</span> <span
  m="484300">1/2.</span></p><p><span m="485650">And</span> <span
  m="486460">now,</span> <span m="487240">I've</span> <span
  m="487360">got</span> <span m="487750">s</span> <span m="487990">equal</span>
  <span m="488290">2</span> <span m="488680">samples.</span> <span
  m="493870">So</span> <span m="494260">I</span> <span
  m="494470">multiply</span> <span m="495250">by</span> <span
  m="495490">2,</span> <span m="500110">and</span> <span m="500250">I</span>
  <span m="500370">get</span> <span m="501510">a,</span> <span
  m="501690">b</span> <span m="503790">as</span> <span m="504060">the</span>
  <span m="504180">mean.</span> <span m="507510">Mean</span> <span
  m="507990">is</span> <span m="508410">correct.</span> <span
  m="516844">Good.</span> <span m="518340">We</span> <span m="518460">did</span>
  <span m="518640">the</span> <span m="518760">easy</span> <span
  m="519120">one,</span> <span m="519400">the</span> <span
  m="519419">mean.</span> <span m="520530">Now,</span> <span
  m="521220">practice</span> <span m="521850">with</span> <span
  m="522140">a</span> <span m="522210">variance,</span> <span
  m="523690">or</span> <span m="523870">else</span> <span m="524110">quit</span>
  <span m="524410">here.</span> <span m="524710">Maybe</span> <span
  m="525010">I</span> <span m="525100">should</span> <span
  m="525310">quit</span> <span m="525580">while</span> <span
  m="525760">I'm</span> <span m="525910">ahead.</span> <span
  m="526450">I've</span> <span m="526570">got</span> <span m="526750">the</span>
  <span m="526870">mean</span> <span m="527650">exactly</span> <span
  m="528220">right,</span> <span m="529180">but</span> <span
  m="529390">of</span> <span m="529510">course,</span> <span
  m="531760">the</span> <span m="532240">samples</span> <span
  m="533080">might</span> <span m="533320">not</span> <span m="533560">be</span>
  <span m="533710">right.</span></p><p><span m="536530">So</span> <span
  m="536770">now</span> <span m="537040">for</span> <span m="537220">the</span>
  <span m="537340">variance.</span> <span m="538690">So</span> <span
  m="539800">what</span> <span m="540040">is</span> <span
  m="540250">variance?</span> <span m="540820">Do</span> <span
  m="540910">you</span> <span m="541000">remember</span> <span
  m="541540">that?</span> <span m="541780">There</span> <span
  m="541960">are</span> <span m="542050">actually</span> <span
  m="542530">two</span> <span m="542830">ways</span> <span m="543250">to</span>
  <span m="543400">compute</span> <span m="543880">variance.</span> <span
  m="544960">Let</span> <span m="545110">me</span> <span m="545230">just</span>
  <span m="545500">remember</span> <span m="546010">those</span> <span
  m="546400">over</span> <span m="546730">here</span> <span
  m="547720">and</span> <span m="548080">push</span> <span
  m="548460">that</span> <span m="548780">board up.</span> <span
  m="551940">So</span> <span m="552120">the</span> <span
  m="552240">variance</span> <span m="552760">sigma</span> <span
  m="553240">squared.</span> <span m="558600">Forgive</span> <span
  m="558990">me,</span> <span m="559140">if</span> <span
  m="559260">you're</span> <span m="559410">a</span> <span
  m="559500">statistician,</span> <span m="560280">this</span> <span
  m="560460">is</span> <span m="560580">like</span> <span m="563730">you</span>
  <span m="563970">were</span> <span m="564060">born</span> <span
  m="564350">knowing</span> <span m="564760">this.</span> <span
  m="565170">But</span> <span m="565800">the</span> <span m="565920">rest</span>
  <span m="566220">of</span> <span m="566310">us,</span> <span
  m="566580">we're</span> <span m="566880">not.</span></p><p><span
  m="567670">So</span> <span m="568250">the</span> <span
  m="568320">variance</span> <span m="569100">is</span> <span
  m="571670">the</span> <span m="572750">sum--</span> <span
  m="573850">one</span> <span m="574210">way</span> <span m="574360">to</span>
  <span m="574480">do</span> <span m="574720">it</span> <span
  m="574810">is</span> <span m="575830">add</span> <span m="576100">up</span>
  <span m="576610">the</span> <span m="576730">different</span> <span
  m="577120">probabilities</span> <span m="578080">of</span> <span
  m="578950">different</span> <span m="579400">things</span> <span
  m="579790">that</span> <span m="579880">could</span> <span
  m="580090">happen</span> <span m="581110">of</span> <span
  m="581950">output</span> <span m="585190">minus</span> <span
  m="585730">the</span> <span m="585880">mean</span> <span
  m="588160">squared.</span> <span m="589890">So</span> <span
  m="590130">it's</span> <span m="590280">the</span> <span
  m="590460">average--</span> <span m="592630">it's the</span> <span
  m="592950">average</span> <span m="594660">distance</span> <span
  m="598150">squared</span> <span m="599770">from</span> <span
  m="601610">the</span> <span m="601730">mean.</span></p><p><span
  m="604860">So</span> <span m="604910">it</span> <span m="605030">takes</span>
  <span m="605570">whatever</span> <span m="606110">output</span> <span
  m="607040">that</span> <span m="607250">came</span> <span
  m="607580">with</span> <span m="608000">output</span> <span
  m="608450">number</span> <span m="608780">i,</span> <span
  m="610940">minus</span> <span m="611360">the</span> <span
  m="611450">mean,</span> <span m="611910">which</span> <span
  m="612090">is</span> <span m="612200">the</span> <span
  m="612350">average</span> <span m="612890">output.</span> <span
  m="613430">I</span> <span m="613550">square</span> <span
  m="614030">those,</span> <span m="614600">and</span> <span m="614780">I</span>
  <span m="614900">get</span> <span m="615710">a</span> <span
  m="615770">number.</span> <span m="616510">And</span> <span
  m="616640">that</span> <span m="616970">sort</span> <span m="617210">of</span>
  <span m="617300">tells</span> <span m="617660">me</span> <span
  m="617900">how--</span> <span m="619350">it</span> <span
  m="619460">tells</span> <span m="619760">me</span> <span
  m="620120">like</span> <span m="620570">in</span> <span m="621630">the</span>
  <span m="621980">famous</span> <span m="624260">Gaussian,</span> <span
  m="630310">if</span> <span m="630460">I</span> <span m="630580">had</span>
  <span m="630730">a</span> <span m="630820">Gaussian</span> <span
  m="631420">distribution</span> <span m="632230">here,</span> <span
  m="632410">I</span> <span m="632530">have</span> <span m="632680">a</span>
  <span m="632740">distribution</span> <span m="633370">of</span> <span
  m="633700">1/2</span> <span m="634210">and</span> <span m="634300">1/2.</span>
  <span m="634840">So</span> <span m="636040">like</span> <span
  m="636370">that</span> <span m="636700">maybe</span> <span
  m="637240">even</span> <span m="637570">has</span> <span m="637810">a</span>
  <span m="637870">name,</span> <span m="638170">like binomial</span> <span
  m="639370">or</span> <span m="639520">something</span> <span
  m="640670">or</span> <span m="640900">Bernoulli</span> <span
  m="641770">or</span> <span m="641950">whatever.</span></p><p><span
  m="642860">But</span> <span m="643090">here</span> <span m="643360">on</span>
  <span m="643510">this</span> <span m="643750">Gaussian</span> <span
  m="644350">that</span> <span m="644500">we</span> <span m="644650">all</span>
  <span m="644830">remember,</span> <span m="645890">can</span> <span
  m="646150">I</span> <span m="646270">mark</span> <span m="647320">what</span>
  <span m="647970">in</span> <span m="648100">that</span> <span
  m="648370">figure</span> <span m="649390">where</span> <span
  m="649750">the</span> <span m="649870">mean</span> <span m="650260">is?</span>
  <span m="653180">Right</span> <span m="653360">in</span> <span
  m="653450">the</span> <span m="653540">center.</span> <span
  m="654930">OK.</span> <span m="656210">Mean.</span> <span
  m="658600">And</span> <span m="658810">what</span> <span m="659740">is</span>
  <span m="660070">the</span> <span m="660220">variance?</span> <span
  m="660910">Just</span> <span m="661330">to</span> <span
  m="661810">recall</span> <span m="663040">what</span> <span
  m="663370">everybody</span> <span m="663940">in</span> <span
  m="664090">the</span> <span m="664180">first</span> <span
  m="664630">time</span> <span m="664960">may</span> <span
  m="665110">even</span> <span m="665380">hear</span> <span
  m="665650">that</span> <span m="665830">word</span> <span
  m="666130">variance,</span> <span m="668290">what</span> <span
  m="668710">is</span> <span m="668890">the</span> <span
  m="668980">variance</span> <span m="669490">kind</span> <span
  m="669730">of</span> <span m="669850">measuring?</span> <span
  m="671950">You're</span> <span m="672610">summing</span> <span
  m="673120">squares,</span> <span m="674350">so</span> <span
  m="674560">whether</span> <span m="674860">you're</span> <span
  m="675040">on</span> <span m="675220">the</span> <span m="675310">right</span>
  <span m="675730">of</span> <span m="675850">the</span> <span
  m="675940">mean</span> <span m="676300">or</span> <span m="676420">the</span>
  <span m="676540">left</span> <span m="676930">of</span> <span
  m="677020">the</span> <span m="677140">mean,</span> <span m="677740">no</span>
  <span m="677980">difference,</span> <span m="678400">because</span> <span
  m="678610">you're</span> <span m="678730">squaring</span> <span
  m="679330">it.</span> <span m="680080">And</span> <span m="680290">it's</span>
  <span m="680530">the</span> <span m="680680">distance.</span></p><p><span
  m="682620">The</span> <span m="682780">variance</span> <span
  m="683450">would</span> <span m="683620">be</span> <span
  m="684400">sort</span> <span m="684640">of</span> <span m="684760">like</span>
  <span m="686200">a</span> <span m="686260">typical</span> <span
  m="686830">width.</span> <span m="688090">Maybe</span> <span
  m="688390">I</span> <span m="688570">overdid</span> <span
  m="689050">it.</span> <span m="689860">But</span> <span m="690310">that</span>
  <span m="690490">would</span> <span m="690610">be</span> <span
  m="690790">a</span> <span m="690850">sort</span> <span m="691120">of</span>
  <span m="691270">typical</span> <span m="692830">sigma.</span> <span
  m="695860">I'm</span> <span m="696040">really</span> <span
  m="696370">just--</span> <span m="697930">since</span> <span
  m="698230">the</span> <span m="698350">words</span> <span
  m="699100">statistics,</span> <span m="699880">mean,</span> <span
  m="700270">and</span> <span m="700390">variance</span> <span
  m="700840">haven't</span> <span m="701080">been</span> <span
  m="701290">mentioned</span> <span m="701800">in</span> <span
  m="701950">18.065</span> <span m="702970">until</span> <span
  m="703270">today,</span> <span m="704080">I'm</span> <span
  m="704230">just</span> <span m="704530">kind</span> <span m="704740">of</span>
  <span m="704890">recalling.</span></p><p><span m="706000">OK,</span> <span
  m="706600">so</span> <span m="706870">now</span> <span m="707170">I'm</span>
  <span m="707590">prepared</span> <span m="708100">to</span> <span
  m="708670">compute</span> <span m="709270">this</span> <span
  m="711340">example.</span> <span m="712840">OK,</span> <span
  m="713470">maybe</span> <span m="713740">I'll--</span> <span m="714860">maybe
  I'll</span> <span m="715150">compute</span> <span m="715450">it</span> <span
  m="715750">over</span> <span m="715990">here.</span> <span
  m="717640">OK,</span> <span m="719230">so</span> <span m="720430">shall</span>
  <span m="720640">I</span> <span m="720730">compute</span> <span
  m="721240">the</span> <span m="721360">variance</span> <span
  m="721960">for</span> <span m="722230">each</span> <span
  m="722530">sample,</span> <span m="723710">and</span> <span
  m="723730">then</span> <span m="723910">I'll</span> <span
  m="724030">multiply</span> <span m="724630">by</span> <span
  m="724840">2,</span> <span m="725170">because</span> <span m="725510">I</span>
  <span m="725600">have</span> <span m="725710">two</span> <span
  m="725980">samples.</span> <span m="727090">So</span> <span
  m="727360">what</span> <span m="727930">are</span> <span
  m="728050">they--</span> <span m="729610">so</span> <span
  m="729910">this</span> <span m="730150">is</span> <span m="730300">the</span>
  <span m="730450">sigma</span> <span m="731320">squared</span> <span
  m="732020">sample.</span></p><p><span m="736070">Obviously,</span> <span
  m="736490">I</span> <span m="736610">could</span> <span
  m="736850">write</span> <span m="737060">down</span> <span
  m="737330">all</span> <span m="737660">the</span> <span
  m="738110">possibilities.</span> <span m="739250">Yeah,</span> <span
  m="739590">let</span> <span m="739630">me</span> <span m="739970">just</span>
  <span m="740210">do</span> <span m="740450">the</span> <span
  m="740840">sigma.</span> <span m="741530">So</span> <span
  m="741710">the</span> <span m="741860">sample</span> <span
  m="742430">could</span> <span m="742730">either</span> <span
  m="743150">have</span> <span m="743330">picked</span> <span
  m="743750">out</span> <span m="745070">a,</span> <span m="745310">0</span>
  <span m="745910">or</span> <span m="746060">0,</span> <span
  m="746450">b.</span> <span m="748820">And</span> <span m="749000">the</span>
  <span m="749090">probabilities</span> <span m="749900">were</span> <span
  m="750080">a</span> <span m="750140">1/2.</span> <span m="750900">So</span>
  <span m="751560">I</span> <span m="751730">have</span> <span
  m="752030">1/2</span> <span m="754820">times</span> <span
  m="755350">the</span> <span m="755420">probability</span> <span
  m="756290">times</span> <span m="756800">the</span> <span
  m="757910">output.</span> <span m="759080">Let's</span> <span
  m="759260">say</span> <span m="759530">the</span> <span
  m="759710">output</span> <span m="760370">is</span> <span m="761810">a,</span>
  <span m="762050">0</span> <span m="766060">minus</span> <span
  m="766930">the</span> <span m="767110">mean,</span> <span
  m="767810">which</span> <span m="767980">was</span> <span m="769340">a</span>
  <span m="769870">over</span> <span m="770080">2,</span> <span
  m="770560">b</span> <span m="770800">over</span> <span m="771050">2.</span>
  <span m="774330">And</span> <span m="774390">I</span> <span
  m="774480">want</span> <span m="774690">to</span> <span
  m="774750">square</span> <span m="775200">that.</span></p><p><span
  m="776800">So</span> <span m="776880">that</span> <span m="777060">was</span>
  <span m="777270">one</span> <span m="777870">possibility</span> <span
  m="778590">when</span> <span m="778740">I</span> <span
  m="778830">picked</span> <span m="779160">a,</span> <span m="779310">0,</span>
  <span m="780420">and</span> <span m="780540">the</span> <span
  m="780660">other</span> <span m="780930">one,</span> <span
  m="781920">which</span> <span m="782190">I'm</span> <span
  m="782370">also</span> <span m="782730">doing</span> <span
  m="783000">with</span> <span m="783150">probability</span> <span
  m="783840">1/2,</span> <span m="784620">is</span> <span m="784860">in</span>
  <span m="785010">case</span> <span m="785400">I</span> <span
  m="785520">picked</span> <span m="785850">0,</span> <span m="786240">b,</span>
  <span m="787610">what</span> <span m="787920">was--</span> <span
  m="795730">you</span> <span m="795850">see,</span> <span m="797090">I'm</span>
  <span m="797220">not</span> <span m="797400">getting</span> <span
  m="797730">0</span> <span m="798180">for</span> <span m="798360">the</span>
  <span m="798480">variance,</span> <span m="799980">because</span> <span
  m="800940">I'm</span> <span m="801120">making</span> <span
  m="801540">an</span> <span m="801630">error</span> <span
  m="801930">every</span> <span m="802170">time.</span> <span
  m="802470">I'm</span> <span m="802590">never</span> <span
  m="802950">getting</span> <span m="803670">the</span> <span
  m="803790">correct</span> <span m="804240">a, 0</span> <span
  m="805560">or</span> <span m="805710">the</span> <span
  m="805830">correct</span> <span m="806160">0,</span> <span
  m="806550">b,</span> <span m="807000">because</span> <span
  m="807420">I'm</span> <span m="807630">always</span> <span
  m="808230">doing</span> <span m="808530">this</span> <span
  m="808770">one</span> <span m="809040">in</span> <span m="809130">the</span>
  <span m="809220">middle.</span></p><p><span m="811110">Now,</span> <span
  m="811470">if</span> <span m="811620">I</span> <span m="811740">compute</span>
  <span m="812220">all</span> <span m="812400">that,</span> <span
  m="814200">I</span> <span m="815040">get a</span> <span
  m="815520">quantity,</span> <span m="816600">and</span> <span
  m="817140">maybe</span> <span m="817440">I'll</span> <span
  m="817890">just,</span> <span m="818465">to</span> <span m="818740">be</span>
  <span m="819030">on</span> <span m="819210">the</span> <span
  m="819330">safe</span> <span m="819660">side,</span> <span
  m="820950">ask</span> <span m="821250">your</span> <span
  m="821430">forgiveness.</span> <span m="822280">If</span> <span
  m="822360">I</span> <span m="822510">write</span> <span m="822840">the</span>
  <span m="822990">answer.</span> <span m="824400">And</span> <span
  m="824610">we</span> <span m="824790">could</span> <span
  m="825000">even</span> <span m="825240">try</span> <span m="825480">to</span>
  <span m="825600">get</span> <span m="825810">the</span> <span
  m="825990">answer,</span> <span m="826980">but--</span> <span
  m="833760">so</span> <span m="834000">this</span> <span m="834210">is</span>
  <span m="834840">from</span> <span m="835140">two</span> <span
  m="835440">samples.</span> <span m="837550">So</span> <span
  m="837630">this</span> <span m="837810">is</span> <span
  m="837940">double</span> <span m="838380">that</span> <span
  m="838620">one.</span> <span m="846530">I</span> <span m="846810">guess</span>
  <span m="847040">I'm</span> <span m="847190">bold</span> <span
  m="847490">enough</span> <span m="847760">to</span> <span
  m="847910">try</span> <span m="848230">it.</span></p><p><span
  m="850090">So</span> <span m="850450">a,</span> <span m="850690">0,</span>
  <span m="851470">so</span> <span m="851710">that</span> <span
  m="851920">would</span> <span m="852130">be</span> <span
  m="852720">minus</span> <span m="853190">a</span> <span m="853420">over</span>
  <span m="853690">2</span> <span m="854650">and</span> <span
  m="854890">a</span> <span m="854950">b</span> <span m="855130">over</span>
  <span m="855340">2.</span> <span m="856030">I</span> <span
  m="856180">think</span> <span m="856420">we</span> <span m="856750">got</span>
  <span m="857050">here</span> <span m="858160">1/2</span> <span
  m="858880">of--</span> <span m="860800">I</span> <span
  m="860920">think--</span> <span m="864990">looks</span> <span
  m="865230">to</span> <span m="865320">me</span> <span m="865560">like</span>
  <span m="867000">a</span> <span m="867240">over</span> <span
  m="867450">2</span> <span m="867780">squared</span> <span
  m="872000">plus</span> <span m="872870">b</span> <span
  m="873110">over--</span> <span m="873380">I'm</span> <span
  m="873740">missing</span> <span m="874250">my</span> <span
  m="876440">plus</span> <span m="876800">or</span> <span
  m="876920">minus,</span> <span m="878300">but</span> <span
  m="878870">when</span> <span m="879050">I'm</span> <span
  m="879230">squaring</span> <span m="879800">them,</span> <span
  m="879980">that's</span> <span m="880250">the</span> <span
  m="880340">whole</span> <span m="880520">point</span> <span
  m="880790">of</span> <span m="880850">variance.</span> <span
  m="881320">Doesn't</span> <span m="881660">matter.</span> <span
  m="882590">And</span> <span m="882890">the</span> <span m="882980">b</span>
  <span m="883190">over</span> <span m="883430">2.</span></p><p><span
  m="885340">And</span> <span m="885700">here,</span> <span m="885970">I</span>
  <span m="886150">think</span> <span m="886510">I'm</span> <span
  m="890410">wrong</span> <span m="890740">by</span> <span m="890980">a</span>
  <span m="891220">over</span> <span m="891400">2,</span> <span
  m="891790">and</span> <span m="891910">I'm</span> <span
  m="892090">wrong</span> <span m="893470">by</span> <span m="893890">b</span>
  <span m="894280">over</span> <span m="894520">2</span> <span
  m="895030">or</span> <span m="895480">minus</span> <span m="896170">a</span>
  <span m="896320">over</span> <span m="896550">2.</span> <span
  m="897160">But</span> <span m="897520">when</span> <span m="897700">I</span>
  <span m="897790">square</span> <span m="898240">them</span> <span
  m="898420">again,</span> <span m="898900">doesn't</span> <span
  m="899260">matter.</span> <span m="900080">So</span> <span m="900130">I</span>
  <span m="900190">think</span> <span m="900430">I</span> <span
  m="900550">get</span> <span m="900730">another</span> <span
  m="901210">1/2</span> <span m="902380">of</span> <span m="903580">a</span>
  <span m="903790">over</span> <span m="904030">2</span> <span
  m="904360">squared</span> <span m="905770">plus</span> <span
  m="906130">b</span> <span m="906340">over</span> <span m="906550">2</span>
  <span m="906760">squared.</span> <span m="913700">Forgive</span> <span
  m="914060">me</span> <span m="914240">for</span> <span m="914420">this</span>
  <span m="916000">simple</span> <span m="916420">computation,</span> <span
  m="917360">but</span> <span m="917380">just</span> <span m="917710">to</span>
  <span m="918250">practice.</span></p><p><span m="919670">So</span> <span
  m="920050">what</span> <span m="920320">have</span> <span m="920470">I</span>
  <span m="920560">got?</span> <span m="920900">I've</span> <span
  m="920950">got</span> <span m="921100">a</span> <span m="921160">1/2</span>
  <span m="921460">of</span> <span m="921550">that</span> <span
  m="921730">and</span> <span m="921820">1/2</span> <span m="922090">of</span>
  <span m="922150">that.</span> <span m="922550">So</span> <span
  m="923320">that</span> <span m="923560">adds</span> <span m="923860">up</span>
  <span m="924010">to</span> <span m="924160">this</span> <span
  m="924490">thing</span> <span m="924880">a</span> <span
  m="925120">squared</span> <span m="925690">over</span> <span
  m="925930">4</span> <span m="926260">plus</span> <span m="926530">b</span>
  <span m="926740">squared</span> <span m="927130">over</span> <span
  m="927340">4,</span> <span m="928390">but</span> <span m="928570">then</span>
  <span m="929680">I'm</span> <span m="929860">doing</span> <span
  m="931180">two</span> <span m="931510">samples.</span> <span m="933790">I have
  to</span> <span m="934060">multiply</span> <span m="934540">by</span> <span
  m="934720">the</span> <span m="934810">number</span> <span
  m="935110">of</span> <span m="935200">samples.</span> <span
  m="936230">So</span> <span m="936280">I</span> <span m="936370">think</span>
  <span m="936840">so</span> <span m="937300">times</span> <span
  m="937810">2</span> <span m="938290">for</span> <span m="938560">two</span>
  <span m="938860">samples.</span> <span m="939880">I</span> <span
  m="940030">think</span> <span m="940330">I'm</span> <span
  m="940510">getting--</span> <span m="941950">it</span> <span
  m="942040">was</span> <span m="942370">1/4,</span> <span m="943090">but</span>
  <span m="943270">now</span> <span m="943530">it will</span> <span
  m="943630">be</span> <span m="943780">1/2</span> <span m="944890">of</span>
  <span m="945580">a</span> <span m="945790">squared</span> <span
  m="947190">b</span> <span m="947550">squared.</span> <span
  m="949220">Yeah,</span> <span m="949480">I</span> <span
  m="949600">didn't--</span> <span m="950580">yeah,</span> <span
  m="951240">yeah.</span> <span m="953870">I</span> <span
  m="953930">think</span> <span m="954170">that's</span> <span
  m="954440">right,</span> <span m="954690">but</span> <span
  m="955880">forgive</span> <span m="956240">me</span> <span m="956450">while
  I</span> <span m="956700">just</span> <span m="957920">ask</span> <span
  m="958250">myself.</span> <span m="959060">Yeah.</span></p><p><span
  m="963990">This</span> <span m="964370">will be--</span> <span
  m="964660">actually,</span> <span m="965090">you</span> <span
  m="965180">already</span> <span m="965540">have</span> <span
  m="965750">these</span> <span m="965960">notes.</span> <span
  m="967010">This</span> <span m="967250">is</span> <span
  m="967370">section</span> <span m="967850">2.4.</span> <span
  m="968870">So</span> <span m="969830">I</span> <span m="969920">think</span>
  <span m="970190">it's</span> <span m="970450">there</span> <span
  m="970820">on</span> <span m="970970">Stellar.</span> <span
  m="972550">So</span> <span m="973750">what's</span> <span
  m="974230">the</span> <span m="974350">point</span> <span m="974650">of</span>
  <span m="974710">this?</span> <span m="976210">First</span> <span
  m="976510">point</span> <span m="976780">was</span> <span m="977020">to</span>
  <span m="977170">like</span> <span m="977440">remember</span> <span
  m="978970">some</span> <span m="979240">of</span> <span m="979330">the</span>
  <span m="979990">steps</span> <span m="980520">that</span> <span
  m="980680">go</span> <span m="980950">into</span> <span m="981340">the</span>
  <span m="981490">variance.</span> <span m="983660">Oh,</span> <span
  m="983920">there's</span> <span m="984190">another</span> <span
  m="984520">formula</span> <span m="984970">for</span> <span
  m="985120">variance</span> <span m="985640">and</span> <span
  m="985780">I</span> <span m="985840">want</span> <span m="986080">to</span>
  <span m="986140">tell</span> <span m="986380">you.</span> <span
  m="987310">And</span> <span m="987460">the</span> <span
  m="987580">second</span> <span m="988000">point</span> <span
  m="989050">is</span> <span m="990250">to</span> <span m="990370">bring</span>
  <span m="990670">in</span> <span m="990850">a</span> <span
  m="990910">new</span> <span m="991150">idea.</span></p><p><span
  m="994290">Suppose</span> <span m="994880">we</span> <span
  m="995120">want</span> <span m="995390">to</span> <span m="995480">make</span>
  <span m="995840">this--</span> <span m="996720">suppose</span> <span
  m="997130">this</span> <span m="997340">variance</span> <span
  m="997910">is</span> <span m="998060">bigger</span> <span
  m="998360">than</span> <span m="998540">we</span> <span
  m="998720">want.</span> <span m="999890">Suppose,</span> <span
  m="1000430">for</span> <span m="1000580">example,</span> <span
  m="1001090">that</span> <span m="1001300">b</span> <span m="1002020">is</span>
  <span m="1002500">a</span> <span m="1002530">lot</span> <span
  m="1002770">bigger</span> <span m="1003100">than</span> <span
  m="1003340">a.</span> <span m="1004540">Suppose</span> <span
  m="1004960">b</span> <span m="1005170">is</span> <span m="1005350">a</span>
  <span m="1005380">lot</span> <span m="1005650">bigger</span> <span
  m="1005950">than</span> <span m="1006160">a.</span> <span
  m="1006970">Then</span> <span m="1007270">what</span> <span
  m="1007660">should</span> <span m="1007930">we</span> <span
  m="1008110">have</span> <span m="1008230">done</span> <span
  m="1008500">differently</span> <span m="1009130">in</span> <span
  m="1009340">this</span> <span m="1010930">randomized</span> <span
  m="1011670">linear</span> <span m="1012040">algebra?</span> <span
  m="1013030">If</span> <span m="1013210">I'm</span> <span
  m="1013390">trying</span> <span m="1013750">to</span> <span
  m="1013870">get</span> <span m="1015190">this</span> <span
  m="1015910">thing</span> <span m="1017860">close,</span> <span
  m="1018430">get</span> <span m="1018670">close</span> <span
  m="1019030">to</span> <span m="1019150">that</span> <span
  m="1019430">thing,</span> <span m="1021940">and</span> <span
  m="1022150">if</span> <span m="1022300">b</span> <span m="1022570">is</span>
  <span m="1022720">a</span> <span m="1022780">lot</span> <span
  m="1023050">bigger</span> <span m="1023350">than</span> <span
  m="1023560">a,</span> <span m="1023920">then</span> <span
  m="1024250">what</span> <span m="1024579">should</span> <span
  m="1024849">I</span> <span m="1025089">do</span> <span
  m="1025420">differently?</span></p><p><span m="1029280">I</span> <span
  m="1029660">don't</span> <span m="1029839">know</span> <span
  m="1029990">what</span> <span m="1030200">b</span> <span m="1030500">is</span>
  <span m="1030740">exactly,</span> <span m="1032089">but</span> <span
  m="1032540">I</span> <span m="1033020">have</span> <span
  m="1033260">the</span> <span m="1033380">information</span> <span
  m="1034099">that</span> <span m="1034250">it's</span> <span
  m="1034430">bigger</span> <span m="1034760">than</span> <span
  m="1035000">a.</span> <span m="1036710">Then</span> <span m="1037040">I</span>
  <span m="1037220">should</span> <span m="1037490">increase</span> <span
  m="1038119">the</span> <span m="1038210">probability--</span> <span
  m="1038810">I</span> <span m="1038960">shouldn't</span> <span
  m="1039290">do</span> <span m="1039530">half</span> <span
  m="1039800">and</span> <span m="1039920">half.</span> <span
  m="1042310">So</span> <span m="1042780">here</span> <span
  m="1043079">was</span> <span m="1043930">randomized</span> <span
  m="1044829">sampling</span> <span m="1046780">taking</span> <span
  m="1047200">the</span> <span m="1047319">average.</span> <span
  m="1048440">My</span> <span m="1048790">probabilities</span> <span
  m="1049750">were</span> <span m="1050950">a</span> <span
  m="1051040">1/2</span> <span m="1051430">and</span> <span m="1051550">a</span>
  <span m="1051580">1/2.</span></p><p><span m="1056560">I</span> <span
  m="1056860">believe</span> <span m="1057280">that</span> <span
  m="1057460">I</span> <span m="1057580">could</span> <span
  m="1057820">keep</span> <span m="1058390">the</span> <span
  m="1060050">mean</span> <span m="1060710">correct.</span> <span
  m="1061770">Of</span> <span m="1062090">course,</span> <span
  m="1062540">that's</span> <span m="1062870">fundamental</span> <span
  m="1063470">to</span> <span m="1063590">get</span> <span
  m="1063790">the</span> <span m="1063890">mean</span> <span
  m="1064250">right.</span> <span m="1066050">And</span> <span
  m="1066530">get</span> <span m="1067220">a</span> <span
  m="1067280">better</span> <span m="1067670">answer,</span> <span
  m="1068270">you</span> <span m="1068330">get</span> <span m="1068570">a</span>
  <span m="1068630">smaller</span> <span m="1069200">variance</span> <span
  m="1069860">than</span> <span m="1070250">that</span> <span
  m="1070580">b</span> <span m="1070910">squared</span> <span
  m="1071390">over</span> <span m="1071600">there</span> <span
  m="1072800">by</span> <span m="1073910">picking</span> <span
  m="1074870">that</span> <span m="1075350">thing</span> <span
  m="1075680">with</span> <span m="1075830">higher</span> <span
  m="1076130">probability.</span> <span m="1077210">So</span> <span
  m="1077450">that's</span> <span m="1077780">where</span> <span
  m="1078860">the</span> <span m="1080180">randomized--</span> <span
  m="1082270">it</span> <span m="1082430">turns</span> <span
  m="1082820">out</span> <span m="1083000">to</span> <span m="1083150">be</span>
  <span m="1083480">called</span> <span m="1083990">norm</span> <span
  m="1084770">squared</span> <span m="1085640">probability.</span></p><p><span
  m="1087390">The</span> <span m="1092170">decision</span> <span
  m="1092890">on</span> <span m="1093100">what</span> <span
  m="1093340">the</span> <span m="1093460">probability</span> <span
  m="1094270">should</span> <span m="1094600">be</span> <span
  m="1095560">goes--</span> <span m="1096310">it</span> <span
  m="1096760">turns</span> <span m="1097090">out</span> <span
  m="1097270">to</span> <span m="1097360">be</span> <span m="1097510">the</span>
  <span m="1097660">optimal</span> <span m="1098230">one,</span> <span
  m="1099010">goes</span> <span m="1099430">with</span> <span
  m="1099730">the</span> <span m="1099850">square</span> <span
  m="1100390">of</span> <span m="1100510">the</span> <span
  m="1100650">size.</span> <span m="1102470">So</span> <span
  m="1102580">if</span> <span m="1102730">b</span> <span m="1103030">is</span>
  <span m="1103240">twice</span> <span m="1103630">as</span> <span
  m="1103810">big</span> <span m="1104050">as</span> <span m="1104200">a,</span>
  <span m="1104590">and</span> <span m="1105310">I</span> <span
  m="1105400">want</span> <span m="1105580">to</span> <span
  m="1105670">get</span> <span m="1105850">the</span> <span
  m="1105940">variance</span> <span m="1106510">down,</span> <span
  m="1107650">then</span> <span m="1108070">the</span> <span
  m="1108160">probability--</span> <span m="1109540">I</span> <span
  m="1109840">should</span> <span m="1110140">use</span> <span
  m="1110530">probabilities</span> <span m="1111340">that are</span> <span
  m="1112030">four</span> <span m="1112360">times--</span> <span
  m="1115750">four</span> <span m="1116080">times</span> <span
  m="1116530">as</span> <span m="1116680">often</span> <span
  m="1117100">I</span> <span m="1117280">will</span> <span
  m="1117460">choose</span> <span m="1117880">b</span> <span
  m="1118150">than</span> <span m="1118330">a.</span> <span
  m="1118800">That's</span> <span m="1119080">going</span> <span
  m="1119200">to</span> <span m="1119320">be</span> <span m="1119470">the</span>
  <span m="1119620">conclusion</span> <span m="1120760">at</span> <span
  m="1120970">2 o'clock,</span> <span m="1122594">hopefully.</span></p><p><span
  m="1124810">OK,</span> <span m="1126280">so</span> <span
  m="1126460">that's</span> <span m="1126700">one</span> <span
  m="1127060">point.</span> <span m="1128090">And</span> <span
  m="1128410">just</span> <span m="1128770">another</span> <span
  m="1129130">little</span> <span m="1129400">point</span> <span
  m="1130660">while</span> <span m="1130960">we</span> <span
  m="1131260">are</span> <span m="1132250">reviewing</span> <span
  m="1133660">variance,</span> <span m="1135230">this</span> <span
  m="1135370">is</span> <span m="1135580">the</span> <span
  m="1135730">standard</span> <span m="1136360">formula</span> <span
  m="1137080">for</span> <span m="1137290">the</span> <span
  m="1137410">variance,</span> <span m="1140780">sum</span> <span
  m="1141140">of</span> <span m="1141290">all</span> <span
  m="1141950">the</span> <span m="1142340">possible</span> <span
  m="1143210">outcomes</span> <span m="1144710">with</span> <span
  m="1144980">their</span> <span m="1145130">probabilities,</span> <span
  m="1147020">the</span> <span m="1147200">distance</span> <span
  m="1147740">from</span> <span m="1147950">the</span> <span
  m="1148040">mean</span> <span m="1148490">squared.</span> <span
  m="1150070">Do</span> <span m="1150160">you</span> <span
  m="1150340">know</span> <span m="1150820">a</span> <span
  m="1150910">second</span> <span m="1151420">formula,</span> <span
  m="1151900">which</span> <span m="1152140">is</span> <span
  m="1153010">very</span> <span m="1153280">close</span> <span
  m="1153670">to</span> <span m="1153790">this</span> <span
  m="1154090">and</span> <span m="1154240">very</span> <span
  m="1154510">similar,</span> <span m="1155500">and</span> <span
  m="1156280">it</span> <span m="1156430">comes</span> <span
  m="1156820">from</span> <span m="1157510">substituting</span> <span
  m="1158470">the</span> <span m="1158590">meaning</span> <span
  m="1159190">of</span> <span m="1159340">the</span> <span
  m="1159940">mean,</span> <span m="1160500">substituting</span> <span
  m="1161130">what</span> <span m="1161290">the</span> <span
  m="1161440">mean</span> <span m="1161860">is?</span></p><p><span
  m="1162790">So</span> <span m="1164320">yeah,</span> <span
  m="1165790">I</span> <span m="1166300">just</span> <span
  m="1166480">want</span> <span m="1166660">to</span> <span
  m="1166720">mention</span> <span m="1167140">a</span> <span
  m="1167230">second</span> <span m="1167650">formula.</span> <span
  m="1170800">And</span> <span m="1171690">I</span> <span
  m="1171780">don't</span> <span m="1171930">know</span> <span
  m="1172080">which</span> <span m="1172320">one</span> <span
  m="1172560">we'll</span> <span m="1172800">actually</span> <span
  m="1173085">use.</span> <span m="1174270">But</span> <span
  m="1174450">the</span> <span m="1174570">second</span> <span
  m="1174960">formula</span> <span m="1175380">for</span> <span
  m="1175530">the</span> <span m="1175650">same</span> <span
  m="1176370">quantity,</span> <span m="1177390">sigma</span> <span
  m="1177780">squared,</span> <span m="1181110">is</span> <span
  m="1181280">the</span> <span m="1181400">sum</span> <span
  m="1184910">of</span> <span m="1185960">probabilities</span> <span
  m="1187550">times</span> <span m="1188030">output</span> <span
  m="1188580">squared.</span> <span m="1195510">So</span> <span
  m="1195720">I</span> <span m="1195780">haven't</span> <span
  m="1196110">subtracted</span> <span m="1196760">off</span> <span
  m="1196930">the</span> <span m="1197080">mean</span> <span
  m="1197550">in</span> <span m="1197670">this</span> <span
  m="1197820">second</span> <span m="1198240">formula.</span> <span
  m="1198660">I</span> <span m="1198720">have</span> <span m="1198840">to</span>
  <span m="1198960">do</span> <span m="1199170">it</span> <span
  m="1199260">now.</span> <span m="1200350">And</span> <span
  m="1200910">I'll</span> <span m="1201030">do</span> <span
  m="1201570">the</span> <span m="1201690">mean--</span> <span
  m="1202290">I'll</span> <span m="1202440">do</span> <span
  m="1202710">the</span> <span m="1202800">mean</span> <span
  m="1203220">all</span> <span m="1203430">at</span> <span
  m="1203490">once,</span> <span m="1204720">mean</span> <span
  m="1205090">squared.</span></p><p><span m="1211860">Of</span> <span
  m="1211980">course,</span> <span m="1212340">the</span> <span
  m="1212460">mean</span> <span m="1212880">involves--</span> <span
  m="1216150">remember</span> <span m="1216630">that</span> <span
  m="1216770">the</span> <span m="1216900">mean</span> <span
  m="1217350">is</span> <span m="1217590">the</span> <span
  m="1217710">sum</span> <span m="1218610">of</span> <span
  m="1218760">the</span> <span m="1218910">probability</span> <span
  m="1219890">times</span> <span m="1220260">the</span> <span
  m="1220360">outcome.</span> <span m="1225710">And</span> <span
  m="1226370">it's</span> <span m="1226580">just</span> <span
  m="1227780">playing</span> <span m="1228260">with</span> <span
  m="1228470">a</span> <span m="1228530">little</span> <span
  m="1228860">algebra</span> <span m="1229910">to</span> <span
  m="1230060">show</span> <span m="1230570">that</span> <span
  m="1230810">you</span> <span m="1230930">can</span> <span
  m="1231150">either--</span> <span m="1231590">you have</span> <span
  m="1231890">a</span> <span m="1231950">choice</span> <span
  m="1232280">of</span> <span m="1232400">whatever</span> <span
  m="1232760">is</span> <span m="1232850">more</span> <span
  m="1233090">convenient,</span> <span m="1234080">subtract</span> <span
  m="1234630">the</span> <span m="1234740">mean</span> <span
  m="1235130">of</span> <span m="1235940">from</span> <span
  m="1236180">each</span> <span m="1236450">output</span> <span
  m="1237650">or</span> <span m="1238820">do</span> <span m="1239060">all</span>
  <span m="1239270">the</span> <span m="1239450">outputs,</span> <span
  m="1241160">but</span> <span m="1241340">then</span> <span
  m="1241910">you</span> <span m="1242120">haven't</span> <span
  m="1242780">accounted</span> <span m="1243320">for</span> <span
  m="1243530">the</span> <span m="1243620">fact</span> <span
  m="1244070">that</span> <span m="1244910">you</span> <span
  m="1245100">really</span> <span m="1245570">want</span> <span
  m="1245910">the</span> <span m="1246120">distances</span> <span
  m="1246980">from</span> <span m="1247310">the</span> <span
  m="1247400">mean,</span> <span m="1248390">and</span> <span
  m="1248570">then</span> <span m="1248810">you</span> <span
  m="1248930">subtract</span> <span m="1249530">off</span> <span
  m="1249740">the</span> <span m="1249830">mean</span> <span
  m="1250140">squared.</span></p><p><span m="1250670">Two</span> <span
  m="1250880">ways</span> <span m="1251210">to</span> <span
  m="1251360">do</span> <span m="1251570">it,</span> <span
  m="1252470">two</span> <span m="1252680">ways,</span> <span
  m="1253650">equal</span> <span m="1254030">ways</span> <span
  m="1254360">to</span> <span m="1254510">do</span> <span m="1254690">it.</span>
  <span m="1256150">Yeah,</span> <span m="1256410">we</span> <span
  m="1256650">will</span> <span m="1257820">review</span> <span
  m="1258780">the</span> <span m="1259200">basic</span> <span
  m="1259710">ideas</span> <span m="1260280">of</span> <span
  m="1261090">mean</span> <span m="1261360">and</span> <span
  m="1261510">variance</span> <span m="1264810">in</span> <span
  m="1266520">the</span> <span m="1267270">section</span> <span
  m="1267720">on</span> <span m="1267900">probability.</span> <span
  m="1269750">Here,</span> <span m="1270870">yes,</span> <span
  m="1271280">question?</span> <span m="1272360">Yeah.</span></p><p><span
  m="1272500">AUDIENCE:</span> <span m="1272955">Is the mean a part</span> <span
  m="1273410">of</span> <span m="1273865">[INAUDIBLE]?</span></p><p><span
  m="1275690">GILBERT STRANG:</span> <span m="1275765">The</span> <span
  m="1275840">mean?</span> <span m="1276880">Oh,</span> <span
  m="1277160">in</span> <span m="1277700">here?</span> <span
  m="1278540">That's</span> <span m="1278660">separate.</span> <span
  m="1279260">Yeah,</span> <span m="1279690">that's</span> <span
  m="1279860">the</span> <span m="1279920">whole</span> <span
  m="1280100">point.</span> <span m="1280880">Yeah,</span> <span
  m="1281180">so</span> <span m="1281390">this</span> <span
  m="1281660">was</span> <span m="1281930">like,</span> <span
  m="1283000">do</span> <span m="1283310">this,</span> <span
  m="1283790">and</span> <span m="1283910">then</span> <span
  m="1284120">subtract</span> <span m="1284720">off</span> <span
  m="1284960">the</span> <span m="1285050">mean</span> <span
  m="1285410">squared.</span> <span m="1286490">Or</span> <span
  m="1288560">keep</span> <span m="1288800">the</span> <span
  m="1288920">mean</span> <span m="1289340">in</span> <span
  m="1289580">every</span> <span m="1289880">term,</span> <span
  m="1290990">and</span> <span m="1291140">do</span> <span m="1291290">it</span>
  <span m="1291380">that</span> <span m="1291590">way.</span> <span
  m="1292620">Yeah,</span> <span m="1292910">you</span> <span
  m="1293660">could</span> <span m="1293930">verify</span> <span
  m="1294620">that</span> <span m="1294830">the</span> <span
  m="1294980">two</span> <span m="1295680">are</span> <span
  m="1296330">the</span> <span m="1296450">same.</span></p><p><span
  m="1298910">OK,</span> <span m="1299630">so</span> <span
  m="1299810">when</span> <span m="1300050">we</span> <span
  m="1300230">go</span> <span m="1300500">now</span> <span m="1301430">to</span>
  <span m="1301670">the</span> <span m="1302810">bigger</span> <span
  m="1303740">question,</span> <span m="1304760">I've</span> <span
  m="1304880">forgotten</span> <span m="1305360">which</span> <span
  m="1305600">way</span> <span m="1305780">I</span> <span m="1305900">do</span>
  <span m="1306110">it,</span> <span m="1306210">but</span> <span
  m="1306410">I'm</span> <span m="1306560">free</span> <span
  m="1306830">to</span> <span m="1306950">choose.</span> <span
  m="1308110">OK,</span> <span m="1308510">is</span> <span
  m="1308930">that</span> <span m="1309170">like</span> <span
  m="1309620">small</span> <span m="1310040">sample</span> <span
  m="1311600">reasonable,</span> <span m="1312680">and</span> <span
  m="1312890">you</span> <span m="1313040">get</span> <span
  m="1313250">the</span> <span m="1313370">idea</span> <span
  m="1314030">that</span> <span m="1317010">if</span> <span
  m="1317430">the--</span> <span m="1318630">if</span> <span
  m="1318780">we</span> <span m="1318960">know</span> <span
  m="1319500">that</span> <span m="1319920">if</span> <span
  m="1320940">we</span> <span m="1321630">look</span> <span
  m="1322050">at</span> <span m="1322260">our</span> <span
  m="1322680">matrix,</span> <span m="1323280">first</span> <span
  m="1323610">of</span> <span m="1323730">all,</span> <span
  m="1324390">and</span> <span m="1324570">find</span> <span
  m="1324930">out</span> <span m="1326580">which</span> <span
  m="1326850">columns</span> <span m="1327300">are</span> <span
  m="1327510">large,</span> <span m="1328410">large</span> <span
  m="1328770">norm,</span> <span m="1329400">and</span> <span
  m="1329580">which</span> <span m="1329820">columns</span> <span
  m="1330270">are</span> <span m="1330390">smaller,</span> <span
  m="1331410">then</span> <span m="1331680">that</span> <span
  m="1331980">might</span> <span m="1332550">be</span> <span
  m="1332880">useful</span> <span m="1333480">information</span> <span
  m="1334620">to</span> <span m="1334890">weight</span> <span
  m="1335400">our</span> <span m="1335550">probabilities</span> <span
  m="1336450">to</span> <span m="1336600">pick</span> <span
  m="1336880">the</span> <span m="1337000">larger</span> <span
  m="1337440">one</span> <span m="1337980">more</span> <span
  m="1338250">often.</span> <span m="1339240">OK.</span> <span
  m="1341030">OK.</span></p><p><span m="1342350">In</span> <span
  m="1342500">fact,</span> <span m="1342870">let</span> <span
  m="1342920">me</span> <span m="1343070">just</span> <span
  m="1343280">tell</span> <span m="1343520">you</span> <span
  m="1343700">what</span> <span m="1344090">are</span> <span
  m="1344210">the</span> <span m="1344360">two</span> <span
  m="1345080">possibilities</span> <span m="1346010">there.</span> <span
  m="1347660">One</span> <span m="1347930">is</span> <span
  m="1348140">what</span> <span m="1348350">I</span> <span
  m="1348440">just</span> <span m="1348680">said,</span> <span
  m="1349820">weight</span> <span m="1350510">your</span> <span
  m="1350720">probabilities</span> <span m="1352490">by</span> <span
  m="1352790">the</span> <span m="1352940">square</span> <span
  m="1353810">of</span> <span m="1353990">the</span> <span
  m="1354110">norm,</span> <span m="1354680">this</span> <span
  m="1354980">norm</span> <span m="1355430">squared</span> <span
  m="1355880">weighting</span> <span m="1356330">that</span> <span
  m="1356450">we'll</span> <span m="1356720">see</span> <span
  m="1359150">and</span> <span m="1359870">take</span> <span
  m="1360140">the</span> <span m="1360230">columns</span> <span
  m="1362030">as</span> <span m="1362210">they</span> <span
  m="1362360">come,</span> <span m="1362730">but</span> <span
  m="1362900">with</span> <span m="1363080">higher</span> <span
  m="1363410">probability</span> <span m="1364160">on</span> <span
  m="1364280">the</span> <span m="1364370">big</span> <span
  m="1364610">columns,</span> <span m="1365540">or</span> <span
  m="1367320">you</span> <span m="1367440">could</span> <span
  m="1367620">say</span> <span m="1367920">another</span> <span
  m="1368310">way</span> <span m="1368610">would</span> <span
  m="1368820">be</span> <span m="1370640">mix</span> <span
  m="1371120">the</span> <span m="1371320">columns,</span> <span
  m="1373140">so</span> <span m="1373410">that</span> <span
  m="1373670">they</span> <span m="1373920">more</span> <span
  m="1374190">or</span> <span m="1374220">less</span> <span
  m="1374520">have</span> <span m="1375120">similar</span> <span
  m="1375570">sizes,</span> <span m="1377060">and</span> <span
  m="1377160">then,</span> <span m="1379350">keep</span> <span
  m="1379560">track</span> <span m="1379920">of</span> <span
  m="1380970">what</span> <span m="1381510">you've</span> <span
  m="1381690">done,</span> <span m="1383220">and</span> <span
  m="1383370">then</span> <span m="1383820">just</span> <span
  m="1384240">the</span> <span m="1384450">probabilities</span> <span
  m="1385260">can</span> <span m="1385470">all</span> <span
  m="1385680">be</span> <span m="1386520">equal.</span></p><p><span
  m="1387330">So</span> <span m="1387510">that</span> <span
  m="1387690">would</span> <span m="1387840">be</span> <span
  m="1387990">the</span> <span m="1388110">other</span> <span
  m="1388350">way.</span> <span m="1388980">Take</span> <span
  m="1389250">your</span> <span m="1389370">matrix,</span> <span
  m="1390150">mix</span> <span m="1390510">it</span> <span
  m="1390630">up,</span> <span m="1391570">take</span> <span
  m="1391710">combinations</span> <span m="1392550">of</span> <span
  m="1392640">the</span> <span m="1392730">columns</span> <span
  m="1393270">with</span> <span m="1393450">random</span> <span
  m="1393960">numbers.</span> <span m="1395930">It's</span> <span
  m="1396090">a</span> <span m="1396150">random</span> <span
  m="1396600">world</span> <span m="1396990">here.</span> <span
  m="1400500">Do</span> <span m="1400710">a</span> <span
  m="1400800">mixing,</span> <span m="1402610">and</span> <span
  m="1402790">then</span> <span m="1403900">operate</span> <span
  m="1404380">on</span> <span m="1404630">the</span> <span
  m="1404740">mixed</span> <span m="1405220">matrix.</span> <span
  m="1408210">OK,</span> <span m="1408990">I'm</span> <span
  m="1409260">going</span> <span m="1409400">to</span> <span
  m="1409530">do</span> <span m="1409740">it</span> <span m="1409960">the</span>
  <span m="1410010">first</span> <span m="1410310">way.</span> <span
  m="1411420">I'm</span> <span m="1411570">going</span> <span
  m="1411720">to</span> <span m="1411990">pick</span> <span
  m="1412320">these</span> <span m="1413400">probabilities</span> <span
  m="1415010">to--</span> <span m="1415560">they'll</span> <span
  m="1416670">turn</span> <span m="1416940">out</span> <span
  m="1417090">to</span> <span m="1417210">be</span> <span
  m="1417420">proportional</span> <span m="1418140">to</span> <span
  m="1418290">norm</span> <span m="1418650">squared.</span></p><p><span
  m="1419220">OK,</span> <span m="1419910">ready</span> <span
  m="1420180">for</span> <span m="1420360">that?</span> <span
  m="1421080">Here</span> <span m="1421260">it</span> <span
  m="1421320">comes.</span> <span m="1425990">So</span> <span
  m="1431100">let</span> <span m="1431180">me</span> <span
  m="1431310">bring</span> <span m="1431580">that</span> <span
  m="1431820">down.</span> <span m="1434690">Yeah.</span> <span
  m="1435990">OK.</span> <span m="1437150">Actually,</span> <span
  m="1437470">I</span> <span m="1437560">could</span> <span
  m="1437770">leave</span> <span m="1438040">it</span> <span
  m="1438160">up</span> <span m="1438310">for</span> <span
  m="1438850">now,</span> <span m="1439150">because</span> <span
  m="1439380">it</span> <span m="1441230">told</span> <span
  m="1441560">us</span> <span m="1441770">what</span> <span
  m="1442520">we're</span> <span m="1442670">up</span> <span
  m="1442850">to.</span> <span m="1444120">OK.</span> <span
  m="1447550">So</span> <span m="1448380">what</span> <span
  m="1448600">have</span> <span m="1448750">I</span> <span
  m="1448870">got?</span> <span m="1449230">Let</span> <span
  m="1449440">me</span> <span m="1449590">just</span> <span
  m="1449800">see</span> <span m="1450130">if</span> <span m="1450280">I</span>
  <span m="1450370">can--</span> <span m="1453290">so</span> <span
  m="1453630">we're</span> <span m="1453760">multiplying</span> <span
  m="1454330">a</span> <span m="1454520">times</span> <span
  m="1454870">b,</span> <span m="1455770">and</span> <span
  m="1455920">we're</span> <span m="1456070">going</span> <span
  m="1456190">to</span> <span m="1456310">use</span> <span
  m="1456670">these</span> <span m="1457030">probabilities.</span> <span
  m="1457880">Pj</span> <span m="1459550">is</span> <span
  m="1459760">going</span> <span m="1459890">to</span> <span
  m="1460060">be</span> <span m="1460930">the</span> <span
  m="1461170">length</span> <span m="1461890">of</span> <span
  m="1463300">that</span> <span m="1463540">column</span> <span
  m="1465430">times</span> <span m="1465910">the</span> <span
  m="1466030">length</span> <span m="1466540">of</span> <span
  m="1466660">that</span> <span m="1467890">row,</span> <span
  m="1470720">norm</span> <span m="1471290">squared.</span></p><p><span
  m="1472100">Well,</span> <span m="1472880">norm</span> <span
  m="1473240">squared,</span> <span m="1473880">if</span> <span
  m="1474140">I</span> <span m="1474260">was</span> <span
  m="1474470">multiplying</span> <span m="1475220">a</span> <span
  m="1475490">by</span> <span m="1475760">a</span> <span
  m="1475910">transpose,</span> <span m="1476750">then</span> <span
  m="1476990">I</span> <span m="1477110">really</span> <span
  m="1477500">would</span> <span m="1477710">be</span> <span
  m="1477890">squaring.</span> <span m="1478400">That</span> <span
  m="1478610">would</span> <span m="1478760">be</span> <span
  m="1478880">the</span> <span m="1479000">same</span> <span
  m="1479300">as</span> <span m="1479450">that.</span> <span
  m="1481340">So</span> <span m="1481490">I'm</span> <span
  m="1481610">going</span> <span m="1481730">to</span> <span
  m="1481850">use</span> <span m="1482180">the</span> <span
  m="1482270">word</span> <span m="1482570">norm</span> <span
  m="1483020">squared</span> <span m="1484070">or</span> <span
  m="1484310">length</span> <span m="1484760">squared.</span> <span
  m="1486680">Also,</span> <span m="1487190">here,</span> <span
  m="1487580">where</span> <span m="1489650">the</span> <span
  m="1489820">two--</span> <span m="1491050">I'm</span> <span
  m="1491200">not</span> <span m="1491440">assuming</span> <span
  m="1491980">that</span> <span m="1492190">b</span> <span m="1492490">is</span>
  <span m="1492700">a</span> <span m="1492850">transpose.</span> <span
  m="1494620">OK,</span> <span m="1495580">so</span> <span
  m="1495760">that</span> <span m="1496000">will</span> <span
  m="1496180">be</span> <span m="1496540">the</span> <span
  m="1496690">probabilities</span> <span m="1497510">will</span> <span
  m="1497600">be</span> <span m="1497770">proportional</span> <span
  m="1498490">to</span> <span m="1498640">that.</span></p><p><span
  m="1499310">But</span> <span m="1499420">now,</span> <span
  m="1500560">those</span> <span m="1500920">that</span> <span
  m="1501100">don't</span> <span m="1501400">add</span> <span
  m="1501550">up</span> <span m="1501670">to</span> <span m="1501820">1,</span>
  <span m="1503350">so</span> <span m="1503520">how</span> <span
  m="1503730">do</span> <span m="1503940">I</span> <span m="1504060">make</span>
  <span m="1504620">the</span> <span m="1504780">probabilities</span> <span
  m="1505920">add</span> <span m="1506130">up</span> <span m="1506250">to</span>
  <span m="1506370">1?</span> <span m="1506640">This</span> <span
  m="1506850">is</span> <span m="1507030">the</span> <span
  m="1507150">probability</span> <span m="1508440">of</span> <span
  m="1511080">choosing</span> <span m="1516310">column</span> <span
  m="1516810">j</span> <span m="1518280">of</span> <span m="1518640">a</span>
  <span m="1520080">times</span> <span m="1521100">times</span> <span
  m="1522060">row</span> <span m="1522450">j</span> <span m="1523750">of</span>
  <span m="1524770">b.</span> <span m="1526230">That's</span> <span
  m="1526470">what</span> <span m="1527570">Pj</span> <span
  m="1528180">refers</span> <span m="1528630">to.</span> <span
  m="1532720">OK,</span> <span m="1533210">so</span> <span
  m="1533450">what</span> <span m="1533750">is</span> <span
  m="1533990">my</span> <span m="1534830">plan?</span></p><p><span
  m="1537070">Oh,</span> <span m="1537550">I</span> <span
  m="1537640">have</span> <span m="1537790">to</span> <span
  m="1537880">make</span> <span m="1538090">the</span> <span
  m="1538210">probabilities</span> <span m="1538990">add</span> <span
  m="1539170">to</span> <span m="1539320">1,</span> <span m="1539620">or</span>
  <span m="1539770">I'm</span> <span m="1540550">really</span> <span
  m="1540910">breaking</span> <span m="1542500">the</span> <span
  m="1544450">fundamental</span> <span m="1545020">law</span> <span
  m="1545440">here.</span> <span m="1546610">So</span> <span
  m="1547180">if</span> <span m="1547390">I</span> <span m="1547510">have</span>
  <span m="1547630">a</span> <span m="1547690">bunch</span> <span
  m="1547930">of</span> <span m="1547990">probabilities,</span> <span
  m="1549490">and</span> <span m="1549640">I</span> <span
  m="1549700">kind</span> <span m="1549910">of</span> <span
  m="1550000">know</span> <span m="1550180">what</span> <span
  m="1550390">I</span> <span m="1550480">want,</span> <span
  m="1550780">but</span> <span m="1550900">they</span> <span
  m="1551050">don't</span> <span m="1551320">add</span> <span
  m="1551500">up</span> <span m="1551620">to</span> <span m="1551770">1,</span>
  <span m="1552180">what</span> <span m="1552370">do</span> <span
  m="1552490">I</span> <span m="1552610">do?</span> <span
  m="1555010">Divide</span> <span m="1555430">by</span> <span
  m="1555580">their</span> <span m="1555790">sum.</span> <span
  m="1556930">Let</span> <span m="1557050">me</span> <span
  m="1557170">call</span> <span m="1557500">c</span> <span
  m="1558110">their</span> <span m="1558230">sum.</span></p><p><span
  m="1558790">So</span> <span m="1559000">the</span> <span
  m="1559510">probability</span> <span m="1560110">is</span> <span
  m="1560260">going</span> <span m="1560440">to</span> <span
  m="1560530">be</span> <span m="1561040">that</span> <span
  m="1561360">over</span> <span m="1561580">c,</span> <span
  m="1562570">and</span> <span m="1562720">c</span> <span m="1563230">is</span>
  <span m="1563840">going</span> <span m="1563940">to</span> <span
  m="1564070">be</span> <span m="1564160">the</span> <span
  m="1564280">sum</span> <span m="1565630">of</span> <span
  m="1566560">however</span> <span m="1567040">many</span> <span
  m="1568300">rows</span> <span m="1568750">and</span> <span
  m="1568900">columns.</span> <span m="1569470">I</span> <span
  m="1569590">guess</span> <span m="1569890">maybe</span> <span
  m="1570250">I</span> <span m="1570370">had</span> <span m="1571110">r</span>
  <span m="1571630">in</span> <span m="1571780">my</span> <span
  m="1572590">picture</span> <span m="1573430">of</span> <span
  m="1574330">aj</span> <span m="1576550">bj</span> <span
  m="1576860">transpose.</span> <span m="1578790">OK,</span> <span
  m="1581330">so</span> <span m="1581840">all</span> <span m="1582080">I</span>
  <span m="1582170">did</span> <span m="1582380">was</span> <span
  m="1582620">scale</span> <span m="1583220">the</span> <span
  m="1583310">probability</span> <span m="1584030">so</span> <span
  m="1584270">that</span> <span m="1584480">they</span> <span
  m="1585020">now</span> <span m="1585320">add</span> <span
  m="1585500">to</span> <span m="1585670">1.</span> <span
  m="1586640">Good.</span></p><p><span m="1588100">OK,</span> <span
  m="1588790">so</span> <span m="1589120">now</span> <span
  m="1589480">I'm</span> <span m="1589690">ready</span> <span
  m="1590020">to</span> <span m="1590140">go</span> <span m="1590320">to</span>
  <span m="1590440">work.</span> <span m="1591820">I'm</span> <span
  m="1592000">ready</span> <span m="1592420">to</span> <span
  m="1592600">choose--</span> <span m="1594460">oh,</span> <span
  m="1594880">yes,</span> <span m="1595330">so</span> <span
  m="1595950">here's</span> <span m="1596140">my</span> <span
  m="1596320">rule.</span> <span m="1597620">I</span> <span
  m="1597820">will</span> <span m="1598390">choose</span> <span
  m="1601150">column</span> <span m="1601510">row</span> <span
  m="1601840">j</span> <span m="1602410">with</span> <span
  m="1602650">this</span> <span m="1602890">probability,</span> <span
  m="1605860">but</span> <span m="1606100">then</span> <span
  m="1606700">I'm</span> <span m="1606880">going</span> <span
  m="1607020">to</span> <span m="1607150">multiply</span> <span
  m="1607850">it,</span> <span m="1607930">and</span> <span
  m="1608080">I'm</span> <span m="1608560">free</span> <span
  m="1608830">to</span> <span m="1608950">do</span> <span
  m="1609190">that</span> <span m="1609430">if</span> <span m="1609550">I</span>
  <span m="1609640">want</span> <span m="1609910">to.</span> <span
  m="1610990">So</span> <span m="1611170">my</span> <span
  m="1611380">approximation,</span> <span m="1612310">my</span> <span
  m="1612520">approximate</span> <span m="1615520">AB</span> <span
  m="1617650">will</span> <span m="1617890">be--</span> <span
  m="1618340">I'll</span> <span m="1619420">take</span> <span
  m="1619960">this,</span> <span m="1620980">whichever</span> <span
  m="1621460">comes</span> <span m="1621850">out,</span> <span
  m="1624540">I'll</span> <span m="1624660">take</span> <span
  m="1624960">the</span> <span m="1625170">aj</span> <span m="1626840">bj</span>
  <span m="1627360">transpose</span> <span m="1628100">that</span> <span
  m="1628170">comes</span> <span m="1628590">out.</span></p><p><span
  m="1629970">It</span> <span m="1630120">comes</span> <span
  m="1630450">out</span> <span m="1630660">with</span> <span
  m="1630900">probability</span> <span m="1631770">Pj.</span> <span
  m="1633180">But</span> <span m="1634110">I'm</span> <span
  m="1634260">going</span> <span m="1634350">to</span> <span
  m="1634470">divide</span> <span m="1634980">this</span> <span
  m="1635340">by--</span> <span m="1636000">and</span> <span
  m="1636180">I</span> <span m="1636270">think</span> <span
  m="1636600">I'm,</span> <span m="1636870">this</span> <span
  m="1637110">is</span> <span m="1637200">the</span> <span
  m="1637320">right</span> <span m="1637590">one--</span> <span
  m="1638384">s,</span> <span m="1639180">the</span> <span
  m="1639300">number</span> <span m="1639660">of</span> <span
  m="1639750">samples,</span> <span m="1640730">times</span> <span
  m="1641120">Pj.</span> <span m="1642390">So</span> <span m="1645300">I</span>
  <span m="1645450">thought,</span> <span m="1645690">at</span> <span
  m="1645780">first,</span> <span m="1646170">that's</span> <span
  m="1646470">weird.</span> <span m="1647670">Went</span> <span
  m="1647880">to</span> <span m="1648000">all</span> <span
  m="1648120">the</span> <span m="1648240">trouble</span> <span
  m="1648600">to</span> <span m="1648720">pick these</span> <span
  m="1649290">Pj's,</span> <span m="1652970">claiming</span> <span
  m="1653480">that</span> <span m="1653660">these</span> <span
  m="1653960">are</span> <span m="1654050">the</span> <span
  m="1654200">good</span> <span m="1654440">ones.</span> <span
  m="1654950">So</span> <span m="1655520">my</span> <span
  m="1655730">claim</span> <span m="1656450">to</span> <span
  m="1656660">eventually</span> <span m="1657290">prove</span> <span
  m="1658010">at</span> <span m="1658130">the end--</span> <span
  m="1659060">first,</span> <span m="1659420">I'll</span> <span
  m="1659570">have</span> <span m="1659750">to</span> <span
  m="1659870">understand</span> <span m="1660470">how</span> <span
  m="1660620">the</span> <span m="1660740">sampling</span> <span
  m="1661310">is</span> <span m="1661640">done.</span> <span
  m="1662420">That's</span> <span m="1662720">like</span> <span
  m="1663020">the</span> <span m="1663110">most</span> <span
  m="1663410">important.</span></p><p><span m="1664340">But</span> <span
  m="1664520">then</span> <span m="1664760">when</span> <span
  m="1665000">I</span> <span m="1665120">go</span> <span m="1665390">to</span>
  <span m="1665510">compute</span> <span m="1665960">the</span> <span
  m="1666080">mean,</span> <span m="1667100">I'll</span> <span
  m="1667220">get</span> <span m="1667420">the</span> <span
  m="1667520">correct</span> <span m="1667910">mean,</span> <span
  m="1669570">and</span> <span m="1669720">when</span> <span
  m="1669930">I</span> <span m="1670290">go</span> <span m="1670510">to</span>
  <span m="1671040">compute</span> <span m="1671460">the</span> <span
  m="1671550">variance,</span> <span m="1672090">I'll</span> <span
  m="1672240">get</span> <span m="1672420">some</span> <span
  m="1672720">expression</span> <span m="1673680">for</span> <span
  m="1673830">the</span> <span m="1673950">variance,</span> <span
  m="1675210">and</span> <span m="1675360">then</span> <span
  m="1676140">the</span> <span m="1678290">plan</span> <span
  m="1678740">will</span> <span m="1678920">be</span> <span
  m="1679880">choose</span> <span m="1680450">these</span> <span
  m="1680930">Pj's</span> <span m="1681830">to</span> <span
  m="1681980">minimize</span> <span m="1682640">that</span> <span
  m="1683420">total</span> <span m="1683780">variance.</span> <span
  m="1686030">So</span> <span m="1686270">this</span> <span
  m="1686510">is</span> <span m="1686720">what--</span> <span
  m="1687860">that's</span> <span m="1688130">a</span> <span
  m="1688220">typical</span> <span m="1688700">sample.</span></p><p><span
  m="1689870">With</span> <span m="1690060">probability</span> <span
  m="1690800">Pj,</span> <span m="1692300">pick</span> <span
  m="1694070">that</span> <span m="1695750">that</span> <span
  m="1695960">matrix,</span> <span m="1696530">that</span> <span
  m="1696770">rank</span> <span m="1697130">1</span> <span
  m="1697370">matrix.</span> <span m="1699600">So</span> <span
  m="1699870">then</span> <span m="1700050">my</span> <span
  m="1700260">approximate</span> <span m="1700860">AB</span> <span
  m="1701430">is</span> <span m="1702540">the</span> <span
  m="1702660">sum</span> <span m="1703020">of</span> <span
  m="1703170">all</span> <span m="1703350">these</span> <span
  m="1704220">over</span> <span m="1704670">s</span> <span
  m="1705750">samples.</span> <span m="1710800">Are</span> <span
  m="1710920">you</span> <span m="1711010">with</span> <span
  m="1711250">me?</span> <span m="1712150">Let</span> <span
  m="1712270">me</span> <span m="1712510">just</span> <span
  m="1712780">repeat.</span> <span m="1714660">I'm</span> <span
  m="1714750">trying</span> <span m="1715080">to</span> <span
  m="1715140">multiply</span> <span m="1715710">AB.</span> <span
  m="1717970">Each</span> <span m="1718270">sample</span> <span
  m="1718840">is</span> <span m="1719020">just</span> <span m="1719290">a</span>
  <span m="1719350">single</span> <span m="1719920">column</span> <span
  m="1720340">times</span> <span m="1720700">row.</span></p><p><span
  m="1721150">So</span> <span m="1721960">it's</span> <span
  m="1722200">way</span> <span m="1722500">wrong,</span> <span
  m="1723100">way</span> <span m="1723460">wrong.</span> <span
  m="1723850">It's</span> <span m="1724030">just</span> <span
  m="1724330">a</span> <span m="1724600">tiny</span> <span
  m="1725050">piece</span> <span m="1725380">of</span> <span
  m="1725530">AB.</span> <span m="1726960">But</span> <span m="1727170">I</span>
  <span m="1727320">take</span> <span m="1727620">that</span> <span
  m="1728550">sample</span> <span m="1729090">with</span> <span
  m="1729360">probability</span> <span m="1730110">Pj,</span> <span
  m="1730890">and</span> <span m="1731040">I</span> <span
  m="1731190">divide</span> <span m="1731610">it</span> <span
  m="1731730">by</span> <span m="1732000">S</span> <span m="1732330">Pj,</span>
  <span m="1733350">so</span> <span m="1733570">that the</span> <span
  m="1733770">Pj's</span> <span m="1734400">cancel</span> <span
  m="1734880">here.</span> <span m="1740740">Oh,</span> <span
  m="1741520">yes.</span> <span m="1742320">OK,</span> <span
  m="1743620">right.</span> <span m="1744640">So</span> <span
  m="1745180">I</span> <span m="1745750">would</span> <span
  m="1745930">like</span> <span m="1746170">to</span> <span
  m="1746290">see</span> <span m="1746680">that</span> <span
  m="1746920">the</span> <span m="1747010">mean</span> <span
  m="1747460">is</span> <span m="1747640">correct.</span> <span
  m="1750420">I</span> <span m="1750510">would</span> <span
  m="1750630">like</span> <span m="1750810">to</span> <span
  m="1750930">see</span> <span m="1751200">that</span> <span
  m="1751380">the</span> <span m="1751470">mean</span> <span
  m="1751830">is</span> <span m="1752010">correct.</span></p><p><span
  m="1754480">I'm</span> <span m="1754510">going</span> <span
  m="1754600">to</span> <span m="1754730">compute</span> <span
  m="1755180">the</span> <span m="1755300">mean</span> <span
  m="1755750">of</span> <span m="1755900">my</span> <span
  m="1756350">process.</span> <span m="1757640">So</span> <span
  m="1758930">like</span> <span m="1759200">it's</span> <span
  m="1759350">falling</span> <span m="1759770">into</span> <span
  m="1759950">my</span> <span m="1760160">lap</span> <span
  m="1760490">here.</span> <span m="1760640">I</span> <span
  m="1760730">made</span> <span m="1760970">it</span> <span
  m="1761120">that</span> <span m="1761330">way.</span> <span
  m="1762260">These</span> <span m="1762530">Pj's</span> <span
  m="1763130">cancel.</span> <span m="1764540">I</span> <span
  m="1764660">divided</span> <span m="1765200">by</span> <span
  m="1765470">s.</span> <span m="1766460">So</span> <span m="1766700">the</span>
  <span m="1766820">mean</span> <span m="1767480">of</span> <span
  m="1767630">a</span> <span m="1767720">typical</span> <span
  m="1768350">sample</span> <span m="1769070">will</span> <span
  m="1769370">be--</span> <span m="1770690">so</span> <span
  m="1770900">the</span> <span m="1771020">mean</span> <span
  m="1774650">of</span> <span m="1775860">one</span> <span
  m="1776360">sample</span> <span m="1779870">is</span> <span
  m="1780890">the</span> <span m="1781220">probability</span> <span
  m="1781910">of</span> <span m="1782000">getting</span> <span
  m="1782360">it</span> <span m="1782450">times</span> <span
  m="1782780">what</span> <span m="1783020">I</span> <span
  m="1783140">take.</span> <span m="1783800">So</span> <span
  m="1784040">it's</span> <span m="1784220">just</span> <span
  m="1784560">the</span> <span m="1784700">sum</span> <span
  m="1785120">of</span> <span m="1785330">aj</span> <span m="1786440">bj</span>
  <span m="1788420">transpose</span> <span m="1789140">over</span> <span
  m="1789470">s.</span></p><p><span m="1791080">You're</span> <span
  m="1791410">going</span> <span m="1791500">to</span> <span
  m="1791630">say,</span> <span m="1792020">OK,</span> <span
  m="1792350">you're</span> <span m="1792470">wasting</span> <span
  m="1792890">our</span> <span m="1792980">time.</span> <span
  m="1793580">But</span> <span m="1794180">we</span> <span
  m="1794490">got--</span> <span m="1795440">I</span> <span
  m="1795530">would</span> <span m="1795650">just</span> <span
  m="1795860">want</span> <span m="1796040">to</span> <span
  m="1796130">show</span> <span m="1796610">that</span> <span
  m="1796820">I'm</span> <span m="1797000">getting</span> <span
  m="1797360">the</span> <span m="1797510">correct</span> <span
  m="1797990">mean</span> <span m="1798590">out</span> <span
  m="1798770">of</span> <span m="1798830">this</span> <span
  m="1800140">plan.</span> <span m="1802010">So</span> <span
  m="1802280">do</span> <span m="1802370">you</span> <span
  m="1802460">see</span> <span m="1802850">that</span> <span
  m="1803110">if</span> <span m="1803360">that's</span> <span
  m="1803720">a</span> <span m="1803780">mean</span> <span m="1804110">of</span>
  <span m="1804230">one</span> <span m="1804440">sample,</span> <span
  m="1805370">so</span> <span m="1805550">what's</span> <span
  m="1805910">the</span> <span m="1806030">mean</span> <span
  m="1806540">of</span> <span m="1806690">the</span> <span
  m="1806810">sum</span> <span m="1807350">of</span> <span
  m="1807500">all</span> <span m="1808280">the</span> <span
  m="1808400">samples?</span> <span m="1811310">Well,</span> <span
  m="1812180">multiply</span> <span m="1812610">by</span> <span
  m="1812830">s,</span> <span m="1813170">because</span> <span
  m="1813440">it</span> <span m="1813500">was</span> <span
  m="1813710">the</span> <span m="1813800">same</span> <span
  m="1814220">mean.</span></p><p><span m="1814910">Every</span> <span
  m="1815180">sample</span> <span m="1815630">had</span> <span
  m="1815780">the</span> <span m="1815900">same</span> <span
  m="1816230">mean,</span> <span m="1816560">just</span> <span
  m="1817490">as</span> <span m="1817640">it</span> <span m="1817730">did</span>
  <span m="1818030">in</span> <span m="1818180">our</span> <span
  m="1819290">Little</span> <span m="1819630">League</span> <span
  m="1820340">practice</span> <span m="1820880">example.</span> <span
  m="1821960">So</span> <span m="1822200">that's</span> <span
  m="1822470">the</span> <span m="1822560">mean</span> <span
  m="1822830">of</span> <span m="1822920">one</span> <span
  m="1823190">sample.</span> <span m="1824090">So</span> <span
  m="1824300">the</span> <span m="1824420">mean</span> <span
  m="1824810">of</span> <span m="1825650">all</span> <span
  m="1826010">samples</span> <span m="1826670">added</span> <span
  m="1828890">together,</span> <span m="1832070">multiplies</span> <span
  m="1832670">this</span> <span m="1832940">by</span> <span
  m="1833210">s.</span> <span m="1833970">The</span> <span
  m="1834150">s's</span> <span m="1834530">cancel,</span> <span
  m="1835540">and</span> <span m="1835700">I</span> <span m="1835820">get</span>
  <span m="1836450">AB.</span> <span m="1843590">Remembering</span> <span
  m="1844250">my--</span> <span m="1846190">however</span> <span
  m="1846640">way</span> <span m="1846850">I</span> <span
  m="1847000">defined</span> <span m="1847510">AB</span> <span
  m="1847840">there,</span> <span m="1848020">yeah.</span> <span
  m="1849310">Yeah.</span></p><p><span m="1853880">All</span> <span
  m="1854270">I'm</span> <span m="1854450">saying</span> <span
  m="1854960">here</span> <span m="1855260">is</span> <span
  m="1855800">that</span> <span m="1856550">I</span> <span
  m="1856640">did</span> <span m="1856850">something</span> <span
  m="1857300">reasonable</span> <span m="1858990">in</span> <span
  m="1860280">the</span> <span m="1860430">sampling</span> <span
  m="1861000">process,</span> <span m="1862420">so</span> <span
  m="1862670">that</span> <span m="1862850">the</span> <span
  m="1863010">mean</span> <span m="1863430">came</span> <span
  m="1863730">out</span> <span m="1863910">right.</span> <span
  m="1865440">And</span> <span m="1865590">now</span> <span
  m="1866070">is</span> <span m="1866370">the</span> <span
  m="1866550">hard</span> <span m="1866820">part,</span> <span
  m="1868210">the</span> <span m="1868230">variance.</span> <span
  m="1871600">What's</span> <span m="1871960">the</span> <span
  m="1872080">variance?</span> <span m="1873130">OK,</span> <span
  m="1873940">so</span> <span m="1874300">what</span> <span
  m="1874510">do</span> <span m="1874630">I</span> <span m="1874720">have</span>
  <span m="1874960">to</span> <span m="1875080">compute--</span> <span
  m="1875650">and</span> <span m="1875770">I</span> <span
  m="1875860">may--</span> <span m="1885030">it</span> <span
  m="1885350">will</span> <span m="1887030">depend</span> <span
  m="1890080">on</span> <span m="1890500">the</span> <span
  m="1890620">p's,</span> <span m="1891910">p1</span> <span
  m="1892630">to</span> <span m="1892780">pr,</span> <span m="1898140">I</span>
  <span m="1898290">guess.</span> <span m="1898560">We</span> <span
  m="1899580">had</span> <span m="1899730">r</span> <span
  m="1900480">different</span> <span m="1900960">rows,</span> <span
  m="1901950">different</span> <span m="1902340">column</span> <span
  m="1902730">row</span> <span m="1902970">pairs</span> <span
  m="1903360">to</span> <span m="1903480">choose,</span> <span
  m="1904740">and</span> <span m="1904890">we</span> <span
  m="1905340">chose</span> <span m="1905880">probabilities,</span> <span
  m="1907800">these</span> <span m="1908130">guys,</span> <span
  m="1909390">that</span> <span m="1909510">depended</span> <span
  m="1910050">on</span> <span m="1910200">this</span> <span
  m="1910330">size.</span></p><p><span m="1912030">And</span> <span
  m="1912330">now</span> <span m="1913680">I'm</span> <span
  m="1913800">going</span> <span m="1913910">to</span> <span
  m="1914040">compute</span> <span m="1914490">the</span> <span
  m="1914610">variance,</span> <span m="1916750">and</span> <span
  m="1916990">it</span> <span m="1917080">won't</span> <span
  m="1917290">be</span> <span m="1917470">0,</span> <span
  m="1919970">because</span> <span m="1920810">every</span> <span
  m="1921110">sample</span> <span m="1922700">is</span> <span
  m="1923240">wrong.</span> <span m="1923900">I'm</span> <span
  m="1924050">never</span> <span m="1924380">getting</span> <span
  m="1925100">from</span> <span m="1925400">a</span> <span
  m="1925490">sample.</span> <span m="1927080">A</span> <span
  m="1927180">sample</span> <span m="1927560">is</span> <span
  m="1927710">just</span> <span m="1927980">giving</span> <span
  m="1928310">me</span> <span m="1929210">a</span> <span
  m="1929330">column</span> <span m="1929710">times</span> <span
  m="1930050">a</span> <span m="1930110">row,</span> <span m="1930440">a</span>
  <span m="1930530">rank</span> <span m="1930860">1</span> <span
  m="1931130">guy,</span> <span m="1932420">and</span> <span
  m="1932570">they</span> <span m="1932780">averaged</span> <span
  m="1933440">out</span> <span m="1933710">to</span> <span
  m="1933890">give</span> <span m="1934190">the</span> <span
  m="1934340">correct</span> <span m="1935330">product.</span> <span
  m="1937410">But</span> <span m="1937800">each</span> <span
  m="1938100">one</span> <span m="1938370">is</span> <span
  m="1938550">certainly</span> <span m="1939300">wrong,</span> <span
  m="1940430">because</span> <span m="1940710">it's</span> <span
  m="1940890">just</span> <span m="1941160">a</span> <span
  m="1941250">rank</span> <span m="1941610">1.</span></p><p><span
  m="1942660">So</span> <span m="1943020">when</span> <span m="1943290">I</span>
  <span m="1943500">compute</span> <span m="1943950">variance,</span> <span
  m="1944490">I'm</span> <span m="1944670">going</span> <span
  m="1944810">to</span> <span m="1944970">definitely</span> <span
  m="1945510">not</span> <span m="1945840">get</span> <span
  m="1946050">0,</span> <span m="1946940">right?</span> <span
  m="1948380">In</span> <span m="1948500">other</span> <span
  m="1948680">words,</span> <span m="1949050">of</span> <span
  m="1949150">course,</span> <span m="1950180">when</span> <span
  m="1950390">would</span> <span m="1950570">the</span> <span
  m="1950660">variance</span> <span m="1951230">be</span> <span
  m="1951440">0?</span> <span m="1954530">Yeah,</span> <span
  m="1954980">if</span> <span m="1955340">AB</span> <span m="1955490">were
  rank</span> <span m="1955830">1,</span> <span m="1956000">I</span> <span
  m="1956060">guess</span> <span m="1956330">I'd</span> <span
  m="1956480">get</span> <span m="1956660">it</span> <span
  m="1956750">right</span> <span m="1956990">every</span> <span
  m="1957230">time.</span> <span m="1957580">Thanks.</span> <span
  m="1958250">That was a</span> <span m="1958280">better</span> <span
  m="1958580">answer</span> <span m="1958910">than</span> <span
  m="1959120">I</span> <span m="1959240">had</span> <span m="1959420">in</span>
  <span m="1959540">mind.</span> <span m="1960560">Yeah,</span> <span
  m="1961290">yeah.</span> <span m="1962120">The</span> <span
  m="1962210">variance</span> <span m="1962660">would</span> <span
  m="1962840">only</span> <span m="1963050">be</span> <span m="1963200">0</span>
  <span m="1963650">if</span> <span m="1963830">every</span> <span
  m="1964340">sample</span> <span m="1964880">was</span> <span
  m="1965120">right.</span> <span m="1966780">And</span> <span
  m="1966960">that</span> <span m="1967140">would</span> <span
  m="1967740">be</span> <span m="1967950">true</span> <span
  m="1968400">if</span> <span m="1968550">the</span> <span
  m="1968640">rank</span> <span m="1968970">was</span> <span
  m="1969560">1,</span> <span m="1969930">and</span> <span
  m="1970050">there</span> <span m="1970170">was</span> <span
  m="1970350">only</span> <span m="1970590">one</span> <span
  m="1970860">thing</span> <span m="1971130">to</span> <span
  m="1971250">choose.</span> <span m="1971760">But</span> <span
  m="1972870">that's</span> <span m="1973140">not</span> <span
  m="1973950">the</span> <span m="1974070">problem</span> <span
  m="1974460">we</span> <span m="1974640">want.</span></p><p><span
  m="1975780">OK,</span> <span m="1976260">so</span> <span
  m="1976530">the</span> <span m="1976620">variance</span> <span
  m="1977080">is</span> <span m="1977330">there.</span> <span
  m="1981660">My</span> <span m="1982550">instinct</span> <span
  m="1983270">is</span> <span m="1983690">to</span> <span
  m="1983900">tell</span> <span m="1984320">you</span> <span
  m="1984470">what</span> <span m="1984680">this</span> <span
  m="1984920">calculation</span> <span m="1985760">produces,</span> <span
  m="1987650">since</span> <span m="1988010">you</span> <span
  m="1988190">and</span> <span m="1988310">I</span> <span m="1988490">can</span>
  <span m="1988760">read.</span> <span m="1994060">Would</span> <span
  m="1994240">you</span> <span m="1994330">allow</span> <span
  m="1994540">me</span> <span m="1994660">to</span> <span m="1994780">do</span>
  <span m="1994990">that?</span> <span m="1997690">So</span> <span
  m="1999150">here,</span> <span m="1999510">the</span> <span
  m="1999660">variance</span> <span m="2000260">for</span> <span
  m="2000500">a</span> <span m="2000560">sample</span> <span
  m="2005740">turned</span> <span m="2006060">out</span> <span
  m="2006210">to</span> <span m="2006330">equal,</span> <span
  m="2006870">so</span> <span m="2007080">we</span> <span
  m="2007290">will</span> <span m="2007800">figure</span> <span
  m="2008160">it</span> <span m="2008280">out,</span> <span
  m="2009670">turns</span> <span m="2010020">out</span> <span
  m="2010230">to</span> <span m="2010410">equal</span> <span
  m="2010800">the</span> <span m="2010950">sum</span> <span
  m="2011880">over--</span> <span m="2013290">as</span> <span
  m="2013530">it</span> <span m="2013620">was</span> <span m="2014010">up</span>
  <span m="2014190">there</span> <span m="2015000">of</span> <span
  m="2015480">the</span> <span m="2016590">aj</span> <span m="2019550">bj</span>
  <span m="2020010">transpose,</span> <span m="2021900">probably</span> <span
  m="2022350">squared.</span> <span m="2022980">Let</span> <span
  m="2023130">me</span> <span m="2023250">just</span> <span
  m="2026070">check.</span> <span m="2026450">Yes,</span> <span
  m="2026820">squared.</span></p><p><span m="2028470">Yeah,</span> <span
  m="2028740">why</span> <span m="2028920">don't</span> <span
  m="2029160">I</span> <span m="2029490">help</span> <span
  m="2029790">myself</span> <span m="2030260">here?</span> <span
  m="2031990">So</span> <span m="2032100">these</span> <span
  m="2032460">are</span> <span m="2032610">squared</span> <span
  m="2034530">because</span> <span m="2035460">variances</span> <span
  m="2036120">are</span> <span m="2036240">squared.</span> <span
  m="2037140">And</span> <span m="2037290">then</span> <span
  m="2037740">when</span> <span m="2037980">I</span> <span
  m="2039360">look</span> <span m="2039840">to</span> <span
  m="2039990">see</span> <span m="2040290">what--</span> <span
  m="2041310">I</span> <span m="2041370">think</span> <span
  m="2041640">there</span> <span m="2041820">is</span> <span
  m="2041910">an</span> <span m="2042030">s</span> <span
  m="2042420">there,</span> <span m="2044050">and</span> <span
  m="2044500">there's</span> <span m="2044710">a</span> <span
  m="2044770">Pj,</span> <span m="2045940">so</span> <span
  m="2046120">why</span> <span m="2046390">is</span> <span
  m="2046510">there</span> <span m="2046660">a</span> <span
  m="2046720">Pj</span> <span m="2047290">there,</span> <span
  m="2048370">when</span> <span m="2048580">it</span> <span
  m="2048699">canceled</span> <span m="2049270">here?</span> <span
  m="2050380">So</span> <span m="2050560">here,</span> <span
  m="2050800">the</span> <span m="2050920">Pj,</span> <span
  m="2051610">when</span> <span m="2051760">I</span> <span
  m="2051820">multiply</span> <span m="2052360">by</span> <span
  m="2052540">that,</span> <span m="2052870">canceled.</span> <span
  m="2055000">Why</span> <span m="2055179">doesn't</span> <span
  m="2055480">it</span> <span m="2055570">cancel</span> <span
  m="2056080">over</span> <span m="2056320">there?</span> <span
  m="2059030">Because</span> <span m="2059270">it's</span> <span
  m="2059400">squared</span> <span m="2060050">over</span> <span
  m="2060260">there.</span></p><p><span m="2061460">Over</span> <span
  m="2061730">there,</span> <span m="2062210">this</span> <span
  m="2062480">thing</span> <span m="2062780">is</span> <span
  m="2062870">squared.</span> <span m="2063500">So</span> <span
  m="2063710">it</span> <span m="2063830">was</span> <span m="2064040">Pj</span>
  <span m="2064489">twice.</span> <span m="2065389">Here,</span> <span
  m="2065540">I have</span> <span m="2065810">Pj,</span> <span
  m="2066900">its</span> <span m="2067159">probability</span> <span
  m="2067850">once.</span> <span m="2068170">So</span> <span
  m="2068480">I've</span> <span m="2068690">still</span> <span m="2069230">got
  the</span> <span m="2069620">Pj</span> <span m="2070219">in</span> <span
  m="2070340">the</span> <span m="2071150">denominator,</span> <span
  m="2071690">one</span> <span m="2072320">factor</span> <span
  m="2072679">of</span> <span m="2072770">Pj</span> <span m="2073250">in</span>
  <span m="2073370">the</span> <span m="2073460">denominator.</span> <span
  m="2075350">And</span> <span m="2075500">then--</span> <span
  m="2076400">so</span> <span m="2076639">that</span> <span
  m="2077030">is--</span> <span m="2077600">I</span> <span
  m="2077719">guess</span> <span m="2078080">what</span> <span
  m="2078260">I'm</span> <span m="2078440">doing</span> <span
  m="2078770">is</span> <span m="2078920">I'm</span> <span
  m="2079130">computing</span> <span m="2081230">the</span> <span
  m="2081380">variance</span> <span m="2081980">this</span> <span
  m="2082280">way.</span></p><p><span m="2084610">So</span> <span
  m="2085110">what</span> <span m="2085320">I've</span> <span
  m="2085949">computed</span> <span m="2086460">now</span> <span
  m="2086730">is</span> <span m="2086909">this</span> <span
  m="2087090">first</span> <span m="2087480">bit,</span> <span
  m="2088830">and</span> <span m="2088980">then</span> <span
  m="2089159">I</span> <span m="2089250">said</span> <span
  m="2089550">should</span> <span m="2090420">subtract</span> <span
  m="2091080">the</span> <span m="2091230">mean</span> <span
  m="2091670">squared.</span> <span m="2094350">And</span> <span
  m="2094830">this</span> <span m="2095010">is</span> <span
  m="2095159">for</span> <span m="2095310">one</span> <span
  m="2095580">sample.</span> <span m="2097410">So</span> <span
  m="2097620">the</span> <span m="2097770">mean</span> <span
  m="2098170">squared</span> <span m="2100960">is--</span> <span
  m="2104260">I</span> <span m="2104350">think</span> <span
  m="2104770">it</span> <span m="2104890">turns</span> <span
  m="2105250">out</span> <span m="2105370">to</span> <span m="2105460">be</span>
  <span m="2105640">1</span> <span m="2105850">over</span> <span
  m="2106100">s</span> <span m="2107860">times</span> <span
  m="2108400">AB</span> <span m="2109840">squared</span> <span
  m="2110440">in</span> <span m="2110590">this</span> <span
  m="2111170">Frobenius</span> <span m="2112010">norm.</span> <span
  m="2112830">It's</span> <span m="2113770">a</span> <span
  m="2114040">squared</span> <span m="2114550">plus</span> <span
  m="2114850">b</span> <span m="2115090">squared</span> <span
  m="2116080">stuff</span> <span m="2116470">that</span> <span
  m="2116650">I</span> <span m="2116860">saw</span> <span
  m="2117250">before.</span></p><p><span m="2121080">OK,</span> <span
  m="2124100">so</span> <span m="2124340">this--</span> <span
  m="2125460">I've</span> <span m="2126060">jumped</span> <span
  m="2127520">a</span> <span m="2127580">serious</span> <span
  m="2128030">step</span> <span m="2128960">to</span> <span
  m="2129590">get</span> <span m="2129920">from</span> <span
  m="2131030">the</span> <span m="2131670">sum--</span> <span
  m="2133142">the</span> <span m="2133580">formula</span> <span
  m="2134060">for</span> <span m="2134240">the</span> <span
  m="2134360">variance.</span> <span m="2135110">I've</span> <span
  m="2135320">plugged</span> <span m="2135770">in</span> <span
  m="2137060">this</span> <span m="2137870">problem</span> <span
  m="2138500">and</span> <span m="2138740">got</span> <span
  m="2139010">that.</span> <span m="2140730">OK,</span> <span
  m="2142120">and</span> <span m="2142240">now</span> <span
  m="2142510">I'm</span> <span m="2142690">going</span> <span
  m="2142870">to</span> <span m="2142990">sample.</span> <span
  m="2146670">Let's</span> <span m="2146890">see</span> <span
  m="2147160">where--</span> <span m="2149960">yeah.</span> <span
  m="2151760">I</span> <span m="2151880">would</span> <span
  m="2152030">like</span> <span m="2152210">to</span> <span
  m="2152360">simplify</span> <span m="2153020">this.</span> <span
  m="2156570">I</span> <span m="2156660">would</span> <span
  m="2156780">like</span> <span m="2156960">to</span> <span
  m="2157110">simplify</span> <span m="2157800">that.</span></p><p><span
  m="2161710">So</span> <span m="2162240">I</span> <span m="2162660">have</span>
  <span m="2162780">to</span> <span m="2162930">plug in</span> <span
  m="2163350">the</span> <span m="2163440">Pj's.</span> <span
  m="2165140">OK,</span> <span m="2165530">so</span> <span
  m="2165740">after</span> <span m="2166040">plug in</span> <span
  m="2166610">for</span> <span m="2166790">that</span> <span
  m="2167000">Pj,</span> <span m="2168380">and</span> <span
  m="2168680">we</span> <span m="2168890">decided</span> <span
  m="2169460">what</span> <span m="2169700">Pj</span> <span
  m="2170330">was</span> <span m="2170570">going</span> <span
  m="2170650">to</span> <span m="2170810">be</span> <span
  m="2173600">here.</span> <span m="2178270">OK,</span> <span
  m="2179660">so</span> <span m="2179800">when</span> <span m="2179980">I</span>
  <span m="2180100">plug</span> <span m="2180400">that</span> <span
  m="2180640">in</span> <span m="2181090">in the</span> <span
  m="2181360">denominator,</span> <span m="2183380">it</span> <span
  m="2183460">will</span> <span m="2183700">cancel</span> <span
  m="2186010">one</span> <span m="2186310">of</span> <span
  m="2186430">these.</span> <span m="2187670">And</span> <span
  m="2187720">I'll</span> <span m="2187840">just</span> <span
  m="2188140">have</span> <span m="2188320">a</span> <span
  m="2188380">sum</span> <span m="2188830">of</span> <span m="2190550">of</span>
  <span m="2190750">aj</span> <span m="2191230">Pj</span> <span
  m="2192430">bj</span> <span m="2192940">norms.</span> <span
  m="2193870">And</span> <span m="2193990">what</span> <span
  m="2195250">that</span> <span m="2195760">is</span> <span
  m="2196970">C.</span></p><p><span m="2198730">So</span> <span
  m="2199450">let</span> <span m="2199570">me</span> <span
  m="2199690">say</span> <span m="2199930">this</span> <span
  m="2200170">again</span> <span m="2200820">just.</span> <span
  m="2202920">It's</span> <span m="2203740">something</span> <span
  m="2204070">you</span> <span m="2204250">can</span> <span
  m="2204520">just</span> <span m="2204820">check</span> <span
  m="2205180">when</span> <span m="2205420">you</span> <span
  m="2205540">have</span> <span m="2205780">a</span> <span
  m="2205840">minute.</span> <span m="2206620">When</span> <span
  m="2206770">I</span> <span m="2206890">plug in</span> <span
  m="2207310">that</span> <span m="2207490">value</span> <span
  m="2207910">for</span> <span m="2208270">Pj</span> <span
  m="2210380">here,</span> <span m="2211800">it</span> <span
  m="2211980">cancels</span> <span m="2212880">the</span> <span
  m="2213000">squares</span> <span m="2213600">and</span> <span
  m="2213720">just</span> <span m="2213960">leaves</span> <span
  m="2214320">the</span> <span m="2214440">first</span> <span
  m="2214800">power.</span> <span m="2215800">So</span> <span
  m="2215880">then</span> <span m="2216090">I'm</span> <span
  m="2216270">adding</span> <span m="2216600">up</span> <span
  m="2216690">the</span> <span m="2216840">first</span> <span
  m="2217200">power,</span> <span m="2218130">and</span> <span
  m="2218310">I</span> <span m="2218430">get</span> <span m="2218700">C.</span>
  <span m="2223530">But</span> <span m="2223785">the</span> <span
  m="2224040">Pj</span> <span m="2225510">had</span> <span m="2225720">a</span>
  <span m="2225780">factor</span> <span m="2226290">C</span> <span
  m="2226610">in</span> <span m="2226830">the</span> <span
  m="2226950">denominator,</span> <span m="2228800">and</span> <span
  m="2228990">it's</span> <span m="2229170">in</span> <span
  m="2229320">the</span> <span m="2229440">denominator</span> <span
  m="2230100">over</span> <span m="2230250">there,</span> <span
  m="2230460">so</span> <span m="2230670">that</span> <span m="2230880">C</span>
  <span m="2231210">is</span> <span m="2231390">up</span> <span
  m="2231540">there.</span></p><p><span m="2232110">So</span> <span
  m="2232290">it's</span> <span m="2232410">C</span> <span
  m="2232650">squared</span> <span m="2233100">coming</span> <span
  m="2233410">here,</span> <span m="2235730">a</span> <span
  m="2235860">constant</span> <span m="2236370">squared,</span> <span
  m="2239190">minus</span> <span m="2239640">the</span> <span
  m="2239820">other</span> <span m="2240060">term.</span> <span
  m="2240640">There's</span> <span m="2241110">a</span> <span
  m="2241170">1</span> <span m="2241410">over</span> <span m="2241650">s.</span>
  <span m="2242580">That</span> <span m="2242700">will</span> <span
  m="2242790">eventually</span> <span m="2243270">go</span> <span
  m="2243390">away.</span> <span m="2244200">And</span> <span
  m="2244410">this</span> <span m="2244970">other</span> <span
  m="2245370">term</span> <span m="2245760">is</span> <span m="2246930">1</span>
  <span m="2247380">over</span> <span m="2247590">s</span> <span
  m="2247860">norm</span> <span m="2248070">AB</span> <span
  m="2250860">the</span> <span m="2251210">Fromenius</span> <span
  m="2251620">norm</span> <span m="2251910">squared.</span> <span
  m="2254940">Or</span> <span m="2255060">maybe</span> <span
  m="2255630">1</span> <span m="2255900">over</span> <span
  m="2256160">s's</span> <span m="2257190">are--</span> <span
  m="2262370">so</span> <span m="2262580">you're</span> <span
  m="2262760">seeing--</span> <span m="2264070">and</span> <span
  m="2264260">I</span> <span m="2264350">apologize,</span> <span
  m="2269660">a</span> <span m="2269750">little</span> <span
  m="2270040">bit</span> <span m="2270170">messy</span> <span
  m="2270800">bit</span> <span m="2270980">of</span> <span
  m="2271100">algebra.</span> <span m="2272720">A</span> <span
  m="2272780">little</span> <span m="2273020">bit</span> <span
  m="2273170">messy</span> <span m="2273530">bit</span> <span
  m="2273740">of</span> <span m="2273860">algebra.</span> <span
  m="2274370">But</span> <span m="2274520">that's</span> <span
  m="2275930">what</span> <span m="2276080">we</span> <span
  m="2276260">ended</span> <span m="2276560">up</span> <span
  m="2276710">with.</span></p><p><span m="2277910">And</span> <span
  m="2278210">when</span> <span m="2278390">we</span> <span
  m="2278540">take</span> <span m="2278840">s</span> <span
  m="2279080">samples</span> <span m="2279770">and</span> <span
  m="2279920">combine</span> <span m="2280430">them,</span> <span
  m="2280880">that</span> <span m="2281090">will</span> <span
  m="2281270">cancel</span> <span m="2281750">the</span> <span
  m="2282208">s,</span> <span m="2284498">and</span> <span m="2284960">I</span>
  <span m="2285260">think</span> <span m="2285530">it'll</span> <span
  m="2285680">knock</span> <span m="2285980">that</span> <span
  m="2286220">out</span> <span m="2286490">when</span> <span
  m="2286670">we</span> <span m="2287180">combine</span> <span m="2287660">the
  s</span> <span m="2287810">samples.</span> <span m="2289430">OK.</span> <span
  m="2299340">OK.</span> <span m="2301660">Now</span> <span
  m="2303400">what?</span> <span m="2308480">Now,</span> <span
  m="2310620">we</span> <span m="2310740">get</span> <span m="2310920">to</span>
  <span m="2311040">choose</span> <span m="2311460">those</span> <span
  m="2311700">probabilities.</span> <span m="2314170">And</span> <span
  m="2314320">how</span> <span m="2314560">are</span> <span
  m="2314650">we</span> <span m="2314800">going</span> <span
  m="2314910">to</span> <span m="2315040">choose</span> <span
  m="2315400">them?</span></p><p><span m="2318720">What</span> <span
  m="2318960">will</span> <span m="2319110">be</span> <span
  m="2319290">the</span> <span m="2319410">best</span> <span
  m="2319710">choice?</span> <span m="2320130">Here</span> <span
  m="2320300">is</span> <span m="2320430">the</span> <span
  m="2320700">expression</span> <span m="2321330">for</span> <span
  m="2321510">the</span> <span m="2321600">variance.</span> <span
  m="2322350">Yeah,</span> <span m="2322620">this</span> <span
  m="2322830">is</span> <span m="2322980">good.</span> <span
  m="2323500">This</span> <span m="2323610">is</span> <span
  m="2323730">good.</span> <span m="2325380">Stay</span> <span
  m="2325650">with</span> <span m="2325860">me</span> <span
  m="2326640">for</span> <span m="2326850">now,</span> <span
  m="2327100">and</span> <span m="2327290">you</span> <span
  m="2328390">will</span> <span m="2328920">be</span> <span
  m="2329130">saying</span> <span m="2329490">to</span> <span
  m="2329560">yourself,</span> <span m="2331530">there's</span> <span
  m="2331730">some</span> <span m="2332040">steps</span> <span
  m="2332490">there</span> <span m="2332730">that</span> <span
  m="2332910">I</span> <span m="2333540">didn't</span> <span
  m="2334110">see</span> <span m="2334620">fully,</span> <span
  m="2335160">and</span> <span m="2335310">I</span> <span
  m="2335400">want</span> <span m="2335580">to</span> <span
  m="2335670">check.</span> <span m="2336970">And</span> <span
  m="2337170">I</span> <span m="2337320">agree.</span> <span
  m="2338490">But</span> <span m="2339000">let</span> <span
  m="2339270">me</span> <span m="2341020">say</span> <span
  m="2341410">that</span> <span m="2341530">we</span> <span
  m="2341680">get</span> <span m="2341890">to</span> <span
  m="2342010">that</span> <span m="2342250">point,</span> <span
  m="2343870">and</span> <span m="2344140">this</span> <span
  m="2344530">is</span> <span m="2345100">a</span> <span
  m="2345160">fixed</span> <span m="2345610">number.</span></p><p><span
  m="2347240">So</span> <span m="2347380">it's</span> <span m="2347530">C</span>
  <span m="2348070">that</span> <span m="2348280">we</span> <span
  m="2348430">would</span> <span m="2348640">like</span> <span
  m="2348850">to</span> <span m="2348970">make</span> <span
  m="2349180">small,</span> <span m="2351340">and</span> <span
  m="2351520">that's</span> <span m="2351880">our</span> <span
  m="2352060">final</span> <span m="2352570">job.</span> <span
  m="2354340">This</span> <span m="2354640">was</span> <span
  m="2354940">true</span> <span m="2355360">for</span> <span
  m="2355630">any</span> <span m="2355930">choice</span> <span
  m="2356410">of</span> <span m="2356530">the</span> <span
  m="2356650">probabilities</span> <span m="2357510">P.</span> <span
  m="2359110">Well,</span> <span m="2359500">oh,</span> <span
  m="2360550">yeah,</span> <span m="2360960">sorry.</span> <span
  m="2361790">Yeah,</span> <span m="2363220">yeah.</span> <span
  m="2364610">So</span> <span m="2364880">I</span> <span m="2365060">want</span>
  <span m="2365450">to--</span> <span m="2367490">this</span> <span
  m="2367850">still</span> <span m="2368240">had</span> <span
  m="2368540">in</span> <span m="2368720">it</span> <span m="2369040">a</span>
  <span m="2369430">probability.</span> <span m="2374730">Yeah.</span> <span
  m="2374910">What</span> <span m="2375300">do</span> <span m="2375450">I</span>
  <span m="2375540">want</span> <span m="2375740">to</span> <span
  m="2375810">do?</span> <span m="2376420">I</span> <span
  m="2376470">want</span> <span m="2376650">to</span> <span
  m="2376740">show</span> <span m="2377010">that</span> <span
  m="2377580">that</span> <span m="2377880">was</span> <span
  m="2378120">the</span> <span m="2378210">best</span> <span
  m="2378540">choice,</span> <span m="2380460">that</span> <span
  m="2380620">this</span> <span m="2380890">was</span> <span
  m="2381100">the</span> <span m="2381190">best</span> <span
  m="2381460">choice.</span></p><p><span m="2382640">Yeah,</span> <span
  m="2383170">yeah.</span> <span m="2384220">I</span> <span
  m="2384340">want</span> <span m="2384550">to</span> <span
  m="2384610">show</span> <span m="2384940">that</span> <span
  m="2385120">that's</span> <span m="2385420">the</span> <span
  m="2385540">best</span> <span m="2385840">choice,</span> <span
  m="2387760">that</span> <span m="2388010">the</span> <span
  m="2388140">choice</span> <span m="2388850">of</span> <span
  m="2392150">weights</span> <span m="2392840">of</span> <span
  m="2392960">probabilities,</span> <span m="2394370">based</span> <span
  m="2394850">on</span> <span m="2395710">length</span> <span
  m="2396530">of</span> <span m="2396680">a</span> <span
  m="2396920">times</span> <span m="2397250">the</span> <span
  m="2397340">length</span> <span m="2397670">of</span> <span
  m="2397760">b--</span> <span m="2398150">of</span> <span
  m="2398270">course,</span> <span m="2398750">it</span> <span
  m="2399080">sounds</span> <span m="2399440">reasonable,</span> <span
  m="2399950">doesn't</span> <span m="2400280">it?</span> <span
  m="2400880">We</span> <span m="2401060">want</span> <span
  m="2401360">to--</span> <span m="2402330">for</span> <span
  m="2403460">big</span> <span m="2403850">columns</span> <span
  m="2404360">and</span> <span m="2404510">big</span> <span
  m="2404750">rows,</span> <span m="2405290">we</span> <span
  m="2405530">want</span> <span m="2405770">to</span> <span
  m="2405890">have</span> <span m="2406130">a</span> <span
  m="2406190">higher</span> <span m="2406460">probability</span> <span
  m="2407210">to</span> <span m="2407300">choose</span> <span
  m="2407720">those.</span> <span m="2408590">But</span> <span
  m="2409070">is</span> <span m="2409370">the</span> <span
  m="2409480">probability</span> <span m="2410270">proportional</span> <span
  m="2411020">to</span> <span m="2411170">the</span> <span
  m="2411290">length</span> <span m="2413150">of</span> <span
  m="2413300">both,</span> <span m="2413930">or</span> <span
  m="2414110">should</span> <span m="2414320">it</span> <span
  m="2414380">be</span> <span m="2414560">proportional</span> <span
  m="2415280">to</span> <span m="2415400">the</span> <span
  m="2415580">10th</span> <span m="2416030">power</span> <span
  m="2416550">or</span> <span m="2416720">the</span> <span
  m="2416870">square</span> <span m="2417380">root</span> <span
  m="2417800">or</span> <span m="2417890">what?</span></p><p><span
  m="2418760">That's</span> <span m="2419180">what</span> <span
  m="2420080">our</span> <span m="2420260">final</span> <span
  m="2420710">step</span> <span m="2422720">of</span> <span
  m="2424460">optimizing</span> <span m="2425300">the</span> <span
  m="2425420">P.</span> <span m="2425810">So</span> <span
  m="2426080">this</span> <span m="2426290">is</span> <span
  m="2426410">the</span> <span m="2426530">final</span> <span
  m="2426890">step.</span> <span m="2430290">Optimize</span> <span
  m="2435480">the</span> <span m="2435780">probabilities,</span> <span
  m="2438830">P1</span> <span m="2439470">to</span> <span m="2439680">P2,</span>
  <span m="2440900">I</span> <span m="2441000">guess,</span> <span
  m="2441480">no,</span> <span m="2441840">P1</span> <span m="2442410">to</span>
  <span m="2442920">Pr,</span> <span m="2444450">for</span> <span
  m="2444630">the</span> <span m="2444810">r</span> <span
  m="2445080">rows,</span> <span m="2445650">r</span> <span
  m="2445830">columns</span> <span m="2446370">of</span> <span m="2446520">a
  and</span> <span m="2446900">r</span> <span m="2447060">rows</span> <span
  m="2447450">of</span> <span m="2447570">b,</span> <span
  m="2448920">subject</span> <span m="2449400">to--</span> <span
  m="2450630">they</span> <span m="2450750">have</span> <span
  m="2450900">to</span> <span m="2451020">add</span> <span m="2451260">up</span>
  <span m="2451350">to</span> <span m="2451510">1.</span> <span
  m="2453030">And</span> <span m="2453390">what</span> <span
  m="2453630">do</span> <span m="2453740">I</span> <span m="2453840">mean</span>
  <span m="2454080">by</span> <span m="2454290">optimize?</span> <span
  m="2455070">I</span> <span m="2455190">mean</span> <span
  m="2455520">minimize.</span> <span m="2459050">This</span> <span
  m="2459590">optimize</span> <span m="2460200">means</span> <span
  m="2460560">minimizing</span> <span m="2461880">this</span> <span
  m="2462840">expression,</span> <span m="2464350">C.</span> <span
  m="2466930">So</span> <span m="2468160">aj</span> <span m="2470140">bj</span>
  <span m="2470620">transpose.</span></p><p><span m="2478710">Where</span> <span
  m="2479270">is--</span> <span m="2480930">over</span> <span
  m="2481250">Pj.</span> <span m="2483420">Oh</span> <span
  m="2484010">yeah,</span> <span m="2484290">wait</span> <span
  m="2484460">a</span> <span m="2484500">minute.</span> <span
  m="2486540">Help.</span> <span m="2488848">Help.</span> <span
  m="2490780">So</span> <span m="2491320">let</span> <span m="2491470">me</span>
  <span m="2491590">just</span> <span m="2491800">see.</span> <span
  m="2495494">Yeah,</span> <span m="2495970">my</span> <span
  m="2496210">variance</span> <span m="2496590">has</span> <span
  m="2496970">got</span> <span m="2497170">a</span> <span m="2497260">Pj</span>
  <span m="2497640">in it.</span> <span m="2499720">Yeah,</span> <span
  m="2500000">my</span> <span m="2500180">variance--</span> <span
  m="2500630">sorry--</span> <span m="2501170">my</span> <span
  m="2501350">variance--</span> <span m="2502250">oh,</span> <span
  m="2503090">OK.</span> <span m="2503990">This</span> <span
  m="2504290">is</span> <span m="2504470">my</span> <span
  m="2504680">variance.</span> <span m="2508300">This</span> <span
  m="2508500">is</span> <span m="2508680">the</span> <span
  m="2508800">result</span> <span m="2509920">if</span> <span
  m="2509970">I</span> <span m="2510060">make</span> <span
  m="2510300">the</span> <span m="2510420">right</span> <span
  m="2510690">choice</span> <span m="2513640">for</span> <span
  m="2513850">the--</span> <span m="2514300">if</span> <span
  m="2514480">I</span> <span m="2514600">make</span> <span
  m="2515530">this</span> <span m="2515890">choice</span> <span
  m="2516280">for</span> <span m="2516400">the</span> <span
  m="2516520">probabilities.</span> <span m="2517390">But</span> <span
  m="2517600">I'm</span> <span m="2518930">backing</span> <span
  m="2519320">up</span> <span m="2519500">a</span> <span
  m="2519560">minute.</span></p><p><span m="2520820">This</span> <span
  m="2521060">is</span> <span m="2521360">if--</span> <span
  m="2522440">this</span> <span m="2522680">is</span> <span
  m="2522870">the</span> <span m="2523160">with</span> <span
  m="2525500">optimal</span> <span m="2529000">Pj's,</span> <span
  m="2530810">then</span> <span m="2531050">we</span> <span
  m="2531200">got</span> <span m="2531380">that</span> <span
  m="2531620">answer.</span> <span m="2532490">Great.</span> <span
  m="2533150">That</span> <span m="2533330">was</span> <span
  m="2533570">our</span> <span m="2533720">answer.</span> <span
  m="2534560">But</span> <span m="2534800">I'm</span> <span
  m="2534980">backing</span> <span m="2535430">up</span> <span
  m="2535610">to</span> <span m="2535790">this</span> <span
  m="2537520">and</span> <span m="2537700">saying,</span> <span
  m="2538790">what</span> <span m="2539380">are</span> <span
  m="2539530">the</span> <span m="2539680">optimal</span> <span
  m="2540190">Pj's</span> <span m="2542590">to</span> <span
  m="2542740">make</span> <span m="2543010">this</span> <span
  m="2543340">variance</span> <span m="2543850">small?</span> <span
  m="2544420">So</span> <span m="2545950">really,</span> <span
  m="2546340">I'm</span> <span m="2546520">just</span> <span
  m="2548080">doing</span> <span m="2548380">this.</span> <span
  m="2549900">Let</span> <span m="2550060">me</span> <span
  m="2550300">write</span> <span m="2551170">the</span> <span
  m="2551740">problem</span> <span m="2552280">simpler.</span></p><p><span
  m="2553180">Minimize</span> <span m="2557080">with</span> <span
  m="2557710">the</span> <span m="2557830">sum</span> <span
  m="2558130">of</span> <span m="2558190">the</span> <span
  m="2558340">P's</span> <span m="2558700">equal</span> <span
  m="2559420">1,</span> <span m="2564370">some</span> <span
  m="2564730">quantity</span> <span m="2565750">Q</span> <span
  m="2566890">squared</span> <span m="2567460">over</span> <span
  m="2568255">Qj</span> <span m="2569200">over</span> <span
  m="2569620">Pj.</span> <span m="2571240">Yeah,</span> <span
  m="2571660">that's</span> <span m="2571870">it.</span> <span
  m="2576860">How</span> <span m="2577400">do</span> <span
  m="2577700">you--</span> <span m="2578070">so</span> <span
  m="2578240">these</span> <span m="2578540">Qj's</span> <span
  m="2579440">that</span> <span m="2579560">I</span> <span
  m="2579710">just</span> <span m="2580190">introduced</span> <span
  m="2580730">that</span> <span m="2580910">letter</span> <span
  m="2581240">for</span> <span m="2581940">are</span> <span
  m="2582140">the</span> <span m="2582320">aj</span> <span
  m="2582860">bj's.</span> <span m="2586000">They're</span> <span
  m="2586700">given.</span> <span m="2587000">Maybe</span> <span
  m="2587330">I'll</span> <span m="2587420">just</span> <span
  m="2587880">put</span> <span m="2588710">back</span> <span
  m="2589040">aj</span> <span m="2589480">Pj.</span></p><p><span
  m="2590390">So</span> <span m="2591670">to</span> <span
  m="2591860">repeat,</span> <span m="2593150">this</span> <span
  m="2593480">is</span> <span m="2593660">the</span> <span
  m="2593780">calculation</span> <span m="2594680">of</span> <span
  m="2594860">the</span> <span m="2594980">variance</span> <span
  m="2596330">for</span> <span m="2596570">any</span> <span
  m="2596810">choice</span> <span m="2597230">of</span> <span
  m="2597480">Pj's.</span> <span m="2598940">This</span> <span
  m="2599270">is</span> <span m="2599450">what</span> <span m="2599690">I</span>
  <span m="2599810">get</span> <span m="2600110">if</span> <span
  m="2600260">I</span> <span m="2600320">make</span> <span
  m="2600560">the</span> <span m="2600650">best</span> <span
  m="2600950">choice,</span> <span m="2602480">but</span> <span
  m="2602690">over</span> <span m="2602900">here,</span> <span
  m="2603080">I'm</span> <span m="2603230">going</span> <span
  m="2603320">to</span> <span m="2603440">show</span> <span
  m="2604070">that</span> <span m="2604280">it</span> <span
  m="2604400">is</span> <span m="2604580">the</span> <span
  m="2604700">best</span> <span m="2604970">choice,</span> <span
  m="2606070">that it's</span> <span m="2606650">the</span> <span
  m="2606740">choice</span> <span m="2607070">that</span> <span
  m="2607190">makes</span> <span m="2607550">this</span> <span
  m="2608600">result</span> <span m="2609080">as</span> <span
  m="2609230">small</span> <span m="2609620">as</span> <span
  m="2609770">possible.</span> <span m="2610850">So</span> <span
  m="2611060">that's</span> <span m="2611740">the</span> <span
  m="2612530">Lagrange</span> <span m="2612980">multiplier</span> <span
  m="2613760">aspect.</span></p><p><span m="2614930">So</span> <span
  m="2616120">the</span> <span m="2616250">statistics</span> <span
  m="2617090">has</span> <span m="2617240">been</span> <span
  m="2617480">done.</span> <span m="2619370">I'm</span> <span
  m="2619520">getting</span> <span m="2619910">this</span> <span
  m="2620180">answer.</span> <span m="2621630">And</span> <span
  m="2623270">instead</span> <span m="2623660">of</span> <span
  m="2624140">putting</span> <span m="2624470">in</span> <span m="2624590">some
  weird</span> <span m="2625280">Q,</span> <span m="2626330">let</span> <span
  m="2626420">me</span> <span m="2626570">put</span> <span m="2626900">in</span>
  <span m="2627950">what</span> <span m="2628130">these</span> <span
  m="2628460">are.</span> <span m="2629546">They're</span> <span
  m="2629940">whatever.</span> <span m="2630370">They're</span> <span
  m="2630470">a</span> <span m="2630500">bunch</span> <span
  m="2630770">of</span> <span m="2630830">numbers.</span> <span
  m="2634490">But</span> <span m="2634670">I'm</span> <span
  m="2634850">dividing</span> <span m="2635390">by</span> <span
  m="2635570">the</span> <span m="2635690">Pj,</span> <span
  m="2637280">and</span> <span m="2637520">how</span> <span
  m="2637940">do</span> <span m="2638060">you</span> <span
  m="2639590">find</span> <span m="2639920">the</span> <span
  m="2640010">best</span> <span m="2640310">Pj?</span> <span
  m="2642630">Do</span> <span m="2642860">you</span> <span
  m="2642990">know</span> <span m="2643230">about</span> <span
  m="2643530">that</span> <span m="2646040">optimization</span> <span
  m="2647860">question?</span></p><p><span m="2649580">They</span> <span
  m="2650090">have</span> <span m="2650270">to</span> <span
  m="2650390">add</span> <span m="2650600">to</span> <span m="2650750">1.</span>
  <span m="2652200">And</span> <span m="2652670">the</span> <span
  m="2653170">Lagrange</span> <span m="2653720">had</span> <span
  m="2653930">the</span> <span m="2654020">great</span> <span
  m="2654350">idea.</span> <span m="2655310">So</span> <span
  m="2655520">this</span> <span m="2655760">is</span> <span
  m="2655880">maybe</span> <span m="2656240">the</span> <span
  m="2656390">first</span> <span m="2656720">time</span> <span
  m="2657050">we've</span> <span m="2657950">used</span> <span
  m="2658460">his</span> <span m="2658700">idea.</span> <span
  m="2659650">So</span> <span m="2659780">do</span> <span m="2659840">you</span>
  <span m="2659930">remember</span> <span m="2660260">what</span> <span
  m="2660440">his</span> <span m="2660650">idea</span> <span
  m="2661040">is?</span> <span m="2663390">He</span> <span
  m="2663540">takes</span> <span m="2663930">this</span> <span
  m="2664170">constraint,</span> <span m="2665010">and</span> <span
  m="2665160">he</span> <span m="2665280">builds</span> <span
  m="2665730">it</span> <span m="2665850">into</span> <span
  m="2666270">the</span> <span m="2666450">function.</span> <span
  m="2668970">He</span> <span m="2669060">multiplies</span> <span
  m="2669840">it</span> <span m="2669990">by</span> <span
  m="2670350">some</span> <span m="2671580">unknown</span> <span
  m="2672330">mysterious</span> <span m="2673110">number,</span> <span
  m="2673860">often</span> <span m="2674190">called</span> <span
  m="2674460">lambda,</span> <span m="2674970">but</span> <span
  m="2675180">nothing</span> <span m="2675570">to</span> <span
  m="2675660">do</span> <span m="2675840">with</span> <span
  m="2676020">eigenvalues,</span> <span m="2677280">of</span> <span
  m="2677460">the</span> <span m="2678350">constraints</span> <span
  m="2678980">that</span> <span m="2679070">the</span> <span
  m="2679200">Pi's</span> <span m="2680400">should</span> <span
  m="2680670">add</span> <span m="2680870">to</span> <span m="2681030">1.</span>
  <span m="2682050">So</span> <span m="2682200">he</span> <span
  m="2682290">had</span> <span m="2682460">0.</span> <span m="2684660">He</span>
  <span m="2684780">had</span> <span m="2684970">0,</span> <span
  m="2685470">but</span> <span m="2686160">with</span> <span
  m="2686460">a</span> <span m="2687120">variable</span> <span
  m="2687630">lambda.</span></p><p><span m="2689680">This</span> <span
  m="2689760">is</span> <span m="2689940">Lagrange's</span> <span
  m="2690600">idea.</span> <span m="2691830">So</span> <span
  m="2692270">it's</span> <span m="2693150">pretty</span> <span
  m="2693420">neat</span> <span m="2693750">that</span> <span
  m="2693990">this</span> <span m="2694680">problem--</span> <span
  m="2695160">I've</span> <span m="2695310">left</span> <span
  m="2695730">randomized</span> <span m="2696360">sampling.</span> <span
  m="2696960">I've</span> <span m="2697140">arrived</span> <span
  m="2697680">at</span> <span m="2697800">this</span> <span
  m="2698610">final</span> <span m="2699090">sub</span> <span
  m="2699450">problem,</span> <span m="2700380">optimizing</span> <span
  m="2701220">the</span> <span m="2701340">probabilities</span> <span
  m="2702600">under</span> <span m="2702840">the</span> <span
  m="2702990">condition</span> <span m="2703530">that</span> <span
  m="2703680">they</span> <span m="2703860">add</span> <span
  m="2704100">to</span> <span m="2704280">1,</span> <span m="2705030">and</span>
  <span m="2705180">Lagrange's</span> <span m="2705840">idea</span> <span
  m="2706320">was</span> <span m="2707250">build</span> <span
  m="2707670">that</span> <span m="2707940">equation</span> <span
  m="2708720">into</span> <span m="2709020">the</span> <span
  m="2709140">function.</span> <span m="2711640">Then</span> <span
  m="2711750">you</span> <span m="2711900">can</span> <span
  m="2712080">take</span> <span m="2712350">derivatives,</span> <span
  m="2714480">but</span> <span m="2714690">you</span> <span
  m="2714840">also</span> <span m="2715200">take</span> <span
  m="2715470">derivatives</span> <span m="2716400">with</span> <span
  m="2716640">respect</span> <span m="2716970">to</span> <span
  m="2717090">lambda,</span> <span m="2717570">because</span> <span
  m="2717780">that's</span> <span m="2718080">now</span> <span
  m="2718320">an</span> <span m="2718470">unknown.</span></p><p><span
  m="2720570">And</span> <span m="2721020">you</span> <span
  m="2721140">solve--</span> <span m="2721970">you</span> <span
  m="2722070">set</span> <span m="2722330">the</span> <span
  m="2722460">derivatives</span> <span m="2723030">to</span> <span
  m="2723150">0,</span> <span m="2723510">and</span> <span
  m="2723600">you</span> <span m="2723690">get</span> <span
  m="2723840">the</span> <span m="2723990">answer.</span> <span
  m="2724470">It's</span> <span m="2724680">like</span> <span
  m="2724950">a</span> <span m="2725700">miracle.</span> <span
  m="2728720">But</span> <span m="2728990">if</span> <span
  m="2729170">you've</span> <span m="2729440">seen</span> <span
  m="2730220">Lagrange,</span> <span m="2731210">it's</span> <span
  m="2731390">a</span> <span m="2731480">confusing</span> <span
  m="2732260">miracle.</span> <span m="2732970">That's</span> <span
  m="2733160">what</span> <span m="2733460">it</span> <span
  m="2733580">is.</span> <span m="2734030">Yeah.</span> <span
  m="2734710">OK.</span> <span m="2735680">So</span> <span m="2735860">if</span>
  <span m="2736010">I</span> <span m="2736130">take</span> <span
  m="2736430">the</span> <span m="2736550">derivatives</span> <span
  m="2737240">with respect</span> <span m="2737720">to</span> <span
  m="2737840">the</span> <span m="2737960">P's,</span> <span
  m="2739340">set</span> <span m="2739580">them</span> <span
  m="2739790">to</span> <span m="2739920">0,</span> <span m="2742060">I</span>
  <span m="2742090">think</span> <span m="2742360">I'm</span> <span
  m="2742510">going</span> <span m="2742670">to</span> <span
  m="2742750">get</span> <span m="2743680">the</span> <span
  m="2744880">recommended</span> <span m="2745600">P's.</span></p><p><span
  m="2748540">So</span> <span m="2748810">I've</span> <span
  m="2750220">computed</span> <span m="2750800">the</span> <span
  m="2750910">final</span> <span m="2751330">answer</span> <span
  m="2751660">with</span> <span m="2751860">a</span> <span
  m="2751900">recommended</span> <span m="2752530">P's,</span> <span
  m="2752980">but</span> <span m="2753100">now</span> <span
  m="2753340">I'm</span> <span m="2753490">going</span> <span
  m="2753610">to</span> <span m="2753700">show</span> <span
  m="2753940">that</span> <span m="2754120">they</span> <span
  m="2754240">really</span> <span m="2754600">are</span> <span
  m="2754780">recommended.</span> <span m="2755860">So</span> <span
  m="2756340">can</span> <span m="2756550">you</span> <span
  m="2756670">take</span> <span m="2756970">the</span> <span
  m="2757120">derivative</span> <span m="2757690">of</span> <span
  m="2757810">that</span> <span m="2758050">with</span> <span
  m="2758230">respect</span> <span m="2758590">to</span> <span
  m="2758710">P?</span> <span m="2759910">Can</span> <span
  m="2760090">I--</span> <span m="2761010">I'll</span> <span
  m="2761350">just</span> <span m="2761710">raise</span> <span
  m="2762190">this</span> <span m="2762430">a</span> <span
  m="2762460">little,</span> <span m="2763450">raise</span> <span
  m="2763780">it</span> <span m="2763870">a</span> <span
  m="2763930">little</span> <span m="2764110">more.</span> <span
  m="2765280">OK,</span> <span m="2765760">take</span> <span
  m="2766060">the</span> <span m="2766180">derivative</span> <span
  m="2766690">with</span> <span m="2766810">respect</span> <span
  m="2767170">to</span> <span m="2767290">P,</span> <span
  m="2768280">each</span> <span m="2768580">P,</span> <span
  m="2769630">because</span> <span m="2769810">I've</span> <span
  m="2769960">got</span> <span m="2770170">n</span> <span
  m="2770470">unknowns</span> <span m="2771160">there,</span> <span
  m="2771460">or</span> <span m="2771880">however</span> <span
  m="2772240">many,</span> <span m="2772600">maybe</span> <span
  m="2772960">r</span> <span m="2773380">unknowns.</span></p><p><span
  m="2774670">And</span> <span m="2774940">I've</span> <span
  m="2775060">got</span> <span m="2775240">lambda,</span> <span
  m="2775760">so</span> <span m="2775960">I've</span> <span
  m="2776080">got</span> <span m="2776260">r</span> <span
  m="2776440">plus</span> <span m="2776740">1</span> <span
  m="2777020">things.</span> <span m="2777890">So</span> <span
  m="2777940">what's</span> <span m="2778210">the</span> <span
  m="2778300">derivative</span> <span m="2778585">with</span> <span
  m="2778870">respect</span> <span m="2779210">to P.</span> <span
  m="2780120">OK,</span> <span m="2781000">calculus.</span> <span
  m="2782260">Take</span> <span m="2782620">the</span> <span
  m="2782750">derivative</span> <span m="2783040">of</span> <span
  m="2783190">that.</span> <span m="2783760">It's</span> <span
  m="2784000">aj</span> <span m="2786330">bj</span> <span
  m="2786700">transpose</span> <span m="2788770">over--</span> <span
  m="2790240">with</span> <span m="2790450">a</span> <span
  m="2790510">minus</span> <span m="2791050">Pj</span> <span
  m="2791500">squared,</span> <span m="2791950">right?</span> <span
  m="2794690">And</span> <span m="2794870">the</span> <span
  m="2794990">derivative</span> <span m="2795620">of</span> <span
  m="2795710">that</span> <span m="2795980">with</span> <span
  m="2796150">respect</span> <span m="2796440">to</span> <span
  m="2796580">Pj</span> <span m="2797330">is?</span> <span
  m="2800740">Minus</span> <span m="2801090">lambda.</span></p><p><span
  m="2802940">So</span> <span m="2803150">that</span> <span
  m="2803910">derivative</span> <span m="2804480">with</span> <span
  m="2804590">respect</span> <span m="2804850">to</span> <span
  m="2804950">Pj</span> <span m="2805490">is</span> <span m="2805550">0,</span>
  <span m="2806450">and</span> <span m="2806630">the</span> <span
  m="2806750">derivative--</span> <span m="2807410">so</span> <span
  m="2807650">this</span> <span m="2807860">was</span> <span
  m="2808160">a</span> <span m="2808700">derivative</span> <span
  m="2809360">with</span> <span m="2809560">respect</span> <span
  m="2809820">to</span> <span m="2810080">Pj</span> <span m="2812360">has</span>
  <span m="2812600">to</span> <span m="2812690">be</span> <span
  m="2812840">0.</span> <span m="2814440">And</span> <span
  m="2814950">then</span> <span m="2815340">the</span> <span
  m="2815430">derivative</span> <span m="2815730">with</span> <span
  m="2816030">respect</span> <span m="2816480">to</span> <span
  m="2816570">lambda--</span> <span m="2817735">the derivative with</span> <span
  m="2818150">respect</span> <span m="2818770">to</span> <span
  m="2819060">lambda</span> <span m="2819480">is</span> <span
  m="2819660">that,</span> <span m="2823020">on</span> <span m="2823290">call
  them</span> <span m="2823710">j's--</span> <span m="2824850">j's</span> <span
  m="2825960">minus</span> <span m="2826980">equals</span> <span
  m="2827360">1.</span></p><p><span m="2830880">Lagrange</span> <span
  m="2831620">confused</span> <span m="2832190">the</span> <span
  m="2832310">whole</span> <span m="2832550">world,</span> <span
  m="2833780">but</span> <span m="2834140">he</span> <span
  m="2834260">gave</span> <span m="2834500">us</span> <span m="2834650">a</span>
  <span m="2834710">break</span> <span m="2835910">that</span> <span
  m="2836300">in</span> <span m="2837380">the</span> <span
  m="2837500">derivative</span> <span m="2837770">with</span> <span
  m="2838040">respect</span> <span m="2838360">to</span> <span
  m="2838510">lambda,</span> <span m="2838970">it</span> <span
  m="2839090">just</span> <span m="2839330">brings</span> <span
  m="2839660">back</span> <span m="2839930">that</span> <span
  m="2840050">constraint,</span> <span m="2841190">because</span> <span
  m="2841460">he</span> <span m="2841550">just</span> <span
  m="2841760">built</span> <span m="2842090">it</span> <span
  m="2842210">in</span> <span m="2842390">with</span> <span
  m="2842540">the</span> <span m="2842610">factor of</span> <span
  m="2843020">lambda,</span> <span m="2843440">then</span> <span
  m="2843620">he</span> <span m="2843710">took</span> <span
  m="2843950">the</span> <span m="2844100">derivative,</span> <span
  m="2845000">and</span> <span m="2845150">it</span> <span
  m="2845390">brought</span> <span m="2845660">back</span> <span
  m="2845970">that</span> <span m="2846070">constraint.</span> <span
  m="2847160">But</span> <span m="2847370">this</span> <span
  m="2847640">part</span> <span m="2848090">is</span> <span
  m="2848330">the</span> <span m="2848450">beautiful</span> <span
  m="2848870">part.</span></p><p><span m="2852970">Now,</span> <span
  m="2854050">what</span> <span m="2854210">do</span> <span m="2854350">I</span>
  <span m="2854440">learn</span> <span m="2854710">from</span> <span
  m="2854920">that?</span> <span m="2859170">And</span> <span
  m="2860550">sometimes</span> <span m="2861150">this</span> <span
  m="2861330">would</span> <span m="2861480">be</span> <span
  m="2861630">a</span> <span m="2861720">plus.</span> <span
  m="2862350">Why</span> <span m="2862530">don't</span> <span
  m="2862740">I</span> <span m="2862860">make</span> <span m="2863160">it</span>
  <span m="2863250">a</span> <span m="2863340">plus</span> <span
  m="2863880">just</span> <span m="2864180">to</span> <span
  m="2864960">make</span> <span m="2865170">my</span> <span
  m="2865350">life</span> <span m="2865830">easier?</span> <span
  m="2867640">Lagrange</span> <span m="2868110">is</span> <span
  m="2868320">dead</span> <span m="2868560">now,</span> <span
  m="2868830">and</span> <span m="2868970">he</span> <span
  m="2869190">don't</span> <span m="2869520">care</span> <span
  m="2869790">anyway,</span> <span m="2870330">whether</span> <span
  m="2870630">it's</span> <span m="2871140">plus</span> <span m="2871500">or
  a</span> <span m="2871680">minus.</span> <span m="2872580">OK.</span> <span
  m="2876810">So</span> <span m="2877050">this</span> <span
  m="2877350">is</span> <span m="2877530">telling</span> <span
  m="2877890">me</span> <span m="2878070">this.</span> <span
  m="2878850">So</span> <span m="2879090">this</span> <span
  m="2879240">is</span> <span m="2879330">tell</span> <span
  m="2879570">me</span> <span m="2879750">what</span> <span
  m="2880300">its</span> <span m="2880440">multiplier</span> <span
  m="2881190">is.</span></p><p><span m="2882030">He's</span> <span
  m="2882210">telling</span> <span m="2882510">me</span> <span
  m="2882690">that--</span> <span m="2883110">this</span> <span
  m="2883620">equation</span> <span m="2884160">is</span> <span
  m="2884280">telling</span> <span m="2884610">me</span> <span
  m="2885240">that</span> <span m="2885390">the</span> <span
  m="2885510">multiplier</span> <span m="2886320">is</span> <span
  m="2887810">aj</span> <span m="2891180">bj</span> <span
  m="2891750">transpose</span> <span m="2893220">over</span> <span
  m="2894210">Pj</span> <span m="2894720">squared.</span> <span
  m="2897770">Or</span> <span m="2898340">put</span> <span m="2898580">it</span>
  <span m="2898650">another</span> <span m="2899000">way,</span> <span
  m="2900450">he's</span> <span m="2900680">telling</span> <span
  m="2900980">me</span> <span m="2901130">that</span> <span
  m="2901310">Pj</span> <span m="2901790">squared</span> <span
  m="2902360">is--</span> <span m="2906070">I</span> <span
  m="2906130">guess,</span> <span m="2906370">I'm</span> <span
  m="2906520">hoping</span> <span m="2906910">that</span> <span
  m="2907150">after</span> <span m="2907820">the</span> <span
  m="2908470">pretty</span> <span m="2908980">confusing</span> <span
  m="2910480">steps</span> <span m="2910870">that</span> <span
  m="2910960">we</span> <span m="2911110">took,</span> <span
  m="2911770">this</span> <span m="2912010">is</span> <span m="2912220">a</span>
  <span m="2912280">separate</span> <span m="2914020">little</span> <span
  m="2914260">bit</span> <span m="2914440">of</span> <span
  m="2914530">math,</span> <span m="2915400">using</span> <span
  m="2915850">the</span> <span m="2916000">Lagrange</span> <span
  m="2916480">multiplier</span> <span m="2917290">idea,</span> <span
  m="2917710">and</span> <span m="2917800">I</span> <span
  m="2917920">hope</span> <span m="2918190">that</span> <span
  m="2919930">your</span> <span m="2920260">thought</span> <span
  m="2920680">will</span> <span m="2920850">be,</span> <span
  m="2921490">boy,</span> <span m="2921730">that</span> <span
  m="2921880">was</span> <span m="2922090">pretty</span> <span
  m="2922360">simple.</span> <span m="2923450">So</span> <span
  m="2923530">I'm</span> <span m="2923620">going</span> <span
  m="2923740">to</span> <span m="2923860">put</span> <span
  m="2924040">the</span> <span m="2924160">Pj</span> <span
  m="2924640">squareds</span> <span m="2925090">here</span> <span
  m="2925300">and</span> <span m="2925390">the</span> <span
  m="2925480">lambda</span> <span m="2925900">there.</span></p><p><span
  m="2929470">What</span> <span m="2929680">does</span> <span
  m="2929890">this</span> <span m="2930070">tell</span> <span
  m="2930310">me?</span> <span m="2934650">I've</span> <span
  m="2935040">taken</span> <span m="2935400">the</span> <span
  m="2935520">derivative</span> <span m="2935780">with</span> <span
  m="2936040">respect</span> <span m="2936370">to</span> <span
  m="2936550">the</span> <span m="2936630">Pj's,</span> <span
  m="2937350">and</span> <span m="2937470">I</span> <span m="2937560">got</span>
  <span m="2937800">this</span> <span m="2938040">equation</span> <span
  m="2938580">for</span> <span m="2938760">each</span> <span
  m="2939100">j</span> <span m="2941200">because</span> <span
  m="2941490">I</span> <span m="2941610">took</span> <span
  m="2941880">the</span> <span m="2942000">derivative,</span> <span
  m="2942750">the</span> <span m="2942870">partial</span> <span
  m="2943290">derivative</span> <span m="2943650">with</span> <span
  m="2944010">respect</span> <span m="2944310">to</span> <span
  m="2944430">each</span> <span m="2944730">of</span> <span
  m="2944790">the</span> <span m="2944910">Pj's.</span> <span
  m="2946290">And</span> <span m="2946770">it</span> <span
  m="2946860">tells</span> <span m="2947220">me</span> <span
  m="2948750">that</span> <span m="2948900">Pj</span> <span
  m="2949410">squared--</span> <span m="2953260">wait</span> <span
  m="2953800">a</span> <span m="2953860">minute.</span> <span
  m="2954040">What's</span> <span m="2954400">the</span> <span
  m="2954460">square</span> <span m="2954880">in</span> <span
  m="2954970">there</span> <span m="2955300">for?</span> <span
  m="2955630">Help.</span> <span m="2957070">I've</span> <span
  m="2957190">only</span> <span m="2957400">got</span> <span
  m="2957550">two</span> <span m="2957820">minutes.</span></p><p><span
  m="2958420">And</span> <span m="2961790">oh,</span> <span
  m="2962150">they</span> <span m="2962270">have</span> <span
  m="2962450">to</span> <span m="2962570">add</span> <span m="2962750">to</span>
  <span m="2962860">1.</span> <span m="2964580">Oh</span> <span
  m="2964700">yeah,</span> <span m="2965000">lambda</span> <span
  m="2965420">is</span> <span m="2965540">going</span> <span
  m="2965660">to</span> <span m="2965780">save</span> <span
  m="2966140">us.</span> <span m="2967280">Right,</span> <span
  m="2968240">lambda</span> <span m="2968900">is</span> <span
  m="2969080">going</span> <span m="2969190">to</span> <span
  m="2969350">save</span> <span m="2969800">us,</span> <span
  m="2970310">because</span> <span m="2970850">the</span> <span
  m="2971000">total</span> <span m="2971390">probabilities--</span> <span
  m="2972450">so</span> <span m="2973510">Pj</span> <span
  m="2974360">will</span> <span m="2974540">be</span> <span
  m="2974810">the</span> <span m="2974960">square</span> <span
  m="2975800">root</span> <span m="2976520">of</span> <span
  m="2976670">this</span> <span m="2977030">stuff.</span> <span
  m="2980820">And</span> <span m="2980970">then</span> <span
  m="2981210">I--</span> <span m="2981765">the</span> <span
  m="2982050">number</span> <span m="2982380">lambda,</span> <span
  m="2982830">I</span> <span m="2982950">haven't</span> <span
  m="2983250">decided.</span> <span m="2984230">Lagrange's</span> <span
  m="2985000">multiplier,</span> <span m="2985630">I</span> <span
  m="2985710">haven't</span> <span m="2985950">decided.</span></p><p><span
  m="2986970">So</span> <span m="2987240">what</span> <span
  m="2987510">is</span> <span m="2987690">it?</span> <span
  m="2988300">It's</span> <span m="2988480">the</span> <span
  m="2988590">correct</span> <span m="2989010">number</span> <span
  m="2989310">to</span> <span m="2989430">make</span> <span
  m="2989700">this</span> <span m="2989970">equal</span> <span
  m="2990240">to</span> <span m="2990360">1.</span> <span m="2991660">So</span>
  <span m="2992910">that</span> <span m="2993540">is</span> <span
  m="2993840">the</span> <span m="2993970">C.</span> <span m="2996270">Oh</span>
  <span m="2996510">god.</span> <span m="2999740">Why have</span> <span
  m="2999890">I</span> <span m="2999980">got</span> <span
  m="3000250">square</span> <span m="3000640">root</span> <span
  m="3000880">there?</span> <span m="3002450">Shoot.</span></p><p><span
  m="3003780">AUDIENCE:</span> <span m="3003900">I think</span> <span
  m="3004020">you're</span> <span m="3004107">supposed</span> <span
  m="3004194">to</span> <span m="3004281">start</span> <span m="3004368">off
  with</span> <span m="3004456">squares.</span></p><p><span m="3005330">GILBERT
  STRANG:</span> <span m="3005390">I</span> <span m="3005450">should</span>
  <span m="3005660">have</span> <span m="3005750">started</span> <span
  m="3006140">with</span> <span m="3006290">squares?</span></p><p><span
  m="3006890">AUDIENCE:</span> <span m="3007137">[INAUDIBLE]</span></p><p><span
  m="3008870">GILBERT STRANG:</span> <span m="3008990">So</span> <span
  m="3009110">these</span> <span m="3009320">should</span> <span
  m="3009530">be</span> <span m="3009680">squares?</span> <span
  m="3011200">Ah,</span> <span m="3011660">thank</span> <span
  m="3012140">you.</span> <span m="3013610">You</span> <span
  m="3013730">could</span> <span m="3013880">have</span> <span
  m="3014030">told</span> <span m="3014240">me</span> <span
  m="3014420">earlier.</span> <span m="3017620">When</span> <span
  m="3017780">you</span> <span m="3017930">see</span> <span m="3018140">a</span>
  <span m="3018200">professor</span> <span m="3018710">in</span> <span
  m="3018830">trouble,</span> <span m="3019210">don't</span> <span
  m="3019790">just</span> <span m="3019940">let</span> <span
  m="3020150">him</span> <span m="3021290">hang</span> <span
  m="3021760">there.</span> <span m="3022490">OK,</span> <span
  m="3023600">all</span> <span m="3023650">right.</span> <span
  m="3024260">OK,</span> <span m="3024660">and</span> <span
  m="3024800">this</span> <span m="3025040">is</span> <span
  m="3025250">aj</span> <span m="3026250">bj</span> <span
  m="3027210">transpose.</span> <span m="3029400">So</span> <span
  m="3029750">apart</span> <span m="3030110">from</span> <span
  m="3030320">the</span> <span m="3030620">kerfuffle</span> <span
  m="3031250">here,</span> <span m="3031910">and</span> <span
  m="3032330">the</span> <span m="3032510">notes</span> <span
  m="3033170">get</span> <span m="3033380">it</span> <span
  m="3033530">right,</span> <span m="3034520">because</span> <span
  m="3034730">I</span> <span m="3034850">had</span> <span
  m="3035780">time</span> <span m="3036170">to</span> <span
  m="3036290">think</span> <span m="3036710">there,</span> <span
  m="3038650">it</span> <span m="3039620">turns</span> <span
  m="3040010">out</span> <span m="3040310">that</span> <span
  m="3042530">this</span> <span m="3042770">optimum</span> <span
  m="3043610">gave</span> <span m="3044060">the</span> <span
  m="3044240">formula</span> <span m="3044840">for</span> <span
  m="3045050">the</span> <span m="3045170">Pj's</span> <span
  m="3045960">that</span> <span m="3046160">I</span> <span
  m="3047360">used</span> <span m="3048020">earlier.</span></p><p><span
  m="3049320">So</span> <span m="3049610">when</span> <span m="3050000">I</span>
  <span m="3050120">introduced</span> <span m="3050660">this</span> <span
  m="3050930">formula,</span> <span m="3051350">I</span> <span
  m="3051530">said,</span> <span m="3052730">let's</span> <span
  m="3053030">choose</span> <span m="3053510">those</span> <span
  m="3053900">probabilities,</span> <span m="3055130">but</span> <span
  m="3055310">then</span> <span m="3055550">I</span> <span
  m="3055640">came</span> <span m="3055910">back</span> <span
  m="3056180">at</span> <span m="3056270">the</span> <span
  m="3056360">very</span> <span m="3056720">end</span> <span
  m="3057560">and</span> <span m="3057710">showed</span> <span
  m="3058190">that</span> <span m="3058460">they</span> <span
  m="3058760">are</span> <span m="3058970">the</span> <span
  m="3059120">probabilities</span> <span m="3060380">that</span> <span
  m="3060620">minimize</span> <span m="3061310">the</span> <span
  m="3061400">variance.</span> <span m="3062720">So</span> <span
  m="3062930">that's</span> <span m="3063440">like</span> <span
  m="3063740">today's</span> <span m="3064220">lecture.</span> <span
  m="3065690">Can</span> <span m="3065900">you</span> <span
  m="3066110">just</span> <span m="3066440">think</span> <span
  m="3066860">a</span> <span m="3066920">minute,</span> <span
  m="3067370">but</span> <span m="3067580">please</span> <span
  m="3068060">do</span> <span m="3069590">go</span> <span
  m="3069770">back</span> <span m="3070070">through</span> <span
  m="3070310">the</span> <span m="3070430">notes,</span> <span
  m="3072500">because</span> <span m="3072780">there</span> <span
  m="3072870">is</span> <span m="3073340">some</span> <span
  m="3074000">messy</span> <span m="3074420">steps</span> <span
  m="3074960">in</span> <span m="3075110">the</span> <span
  m="3075200">variance</span> <span m="3075800">there</span> <span
  m="3077360">that</span> <span m="3077540">I</span> <span
  m="3077690">had</span> <span m="3077870">to</span> <span m="3078740">go</span>
  <span m="3078920">by</span> <span m="3079130">quickly.</span></p><p><span
  m="3080120">But</span> <span m="3080330">you</span> <span
  m="3080480">understand</span> <span m="3080990">the</span> <span
  m="3081110">principle,</span> <span m="3082450">that</span> <span
  m="3082550">we</span> <span m="3082730">set</span> <span m="3083030">up</span>
  <span m="3083240">a</span> <span m="3083960">randomized</span> <span
  m="3084860">system.</span> <span m="3086300">We</span> <span
  m="3089060">choose</span> <span m="3089450">probabilities,</span> <span
  m="3090740">aiming</span> <span m="3091190">to</span> <span
  m="3091370">get</span> <span m="3093650">the</span> <span
  m="3093800">smallest</span> <span m="3094310">variance.</span> <span
  m="3095570">And</span> <span m="3095690">it</span> <span
  m="3095780">turns</span> <span m="3096140">out</span> <span
  m="3096380">that</span> <span m="3096560">the</span> <span
  m="3096680">good</span> <span m="3096890">probabilities</span> <span
  m="3097820">are</span> <span m="3097940">bigger</span> <span
  m="3098750">when</span> <span m="3099020">the</span> <span
  m="3100280">column</span> <span m="3100700">is</span> <span
  m="3101150">a</span> <span m="3101270">larger</span> <span
  m="3101660">column,</span> <span m="3102080">so</span> <span
  m="3102320">that</span> <span m="3102800">to</span> <span
  m="3102980">use</span> <span m="3103310">this,</span> <span
  m="3103770">you</span> <span m="3103790">have</span> <span
  m="3103970">to</span> <span m="3104060">go</span> <span
  m="3104300">through</span> <span m="3104600">the</span> <span
  m="3104720">matrix</span> <span m="3105890">and</span> <span
  m="3106430">find</span> <span m="3106790">the</span> <span
  m="3106880">length</span> <span m="3107270">of</span> <span
  m="3107390">the</span> <span m="3107510">columns,</span> <span
  m="3108710">because</span> <span m="3108920">that's</span> <span
  m="3109220">what's</span> <span m="3109490">telling</span> <span
  m="3109850">you</span> <span m="3110090">the</span> <span
  m="3110570">probabilities.</span></p><p><span m="3112290">So</span> <span
  m="3112370">that's</span> <span m="3113120">like</span> <span
  m="3113510">a</span> <span m="3113900">first</span> <span
  m="3114260">pass</span> <span m="3114650">through.</span> <span
  m="3115070">Before</span> <span m="3115400">you</span> <span
  m="3115520">do</span> <span m="3115730">the</span> <span
  m="3115850">randomized</span> <span m="3116450">sampling,</span> <span
  m="3117380">you</span> <span m="3117500">must</span> <span
  m="3117800">decide</span> <span m="3118280">on</span> <span
  m="3118400">the</span> <span m="3118490">probabilities,</span> <span
  m="3119720">and</span> <span m="3119870">they</span> <span
  m="3120080">depend</span> <span m="3120590">on</span> <span
  m="3120980">the</span> <span m="3121700">sizes</span> <span
  m="3122360">of</span> <span m="3122550">the</span> <span
  m="3122720">different</span> <span m="3123230">columns.</span> <span
  m="3124280">Thank</span> <span m="3124550">you</span> <span
  m="3124670">for</span> <span m="3125810">getting</span> <span
  m="3126050">me</span> <span m="3126170">through</span> <span
  m="3126440">that.</span> <span m="3128630">I'll</span> <span
  m="3128750">come</span> <span m="3128960">back</span> <span
  m="3129260">to</span> <span m="3129610">a</span> <span
  m="3129790">little</span> <span m="3129900">more</span> <span
  m="3130130">about</span> <span m="3130400">randomized</span> <span
  m="3131180">things</span> <span m="3131630">next</span> <span
  m="3131930">time,</span> <span m="3132770">and</span> <span
  m="3132920">then</span> <span m="3134240">later,</span> <span
  m="3135020">not</span> <span m="3135290">much</span> <span
  m="3135590">later,</span> <span m="3136020">but</span> <span
  m="3136100">a</span> <span m="3136280">little</span> <span
  m="3136550">bit</span> <span m="3136700">later,</span> <span
  m="3137060">we'll</span> <span m="3137360">be</span> <span
  m="3137630">seeing</span> <span m="3138500">probability</span> <span
  m="3139370">much</span> <span m="3139670">more</span> <span
  m="3139940">seriously</span> <span m="3140910">OK,</span> <span
  m="3141320">thank</span> <span m="3141620">you.</span></p>
uid: 2bb8ddfac31fb6dec6c925e041b98efd
type: courses
layout: video
---
