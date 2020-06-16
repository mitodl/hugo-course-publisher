---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>Professor Strang continues his
  discussion of saddle points, which are critical for deep learning
  applications.  Later in the lecture, he reviews the Maxmin Principle, a
  decision rule used in probability and statistics to optimize outcomes.</p> <h2
  class="subhead">Summary</h2> <p>\(x'Sx/x'x\) has a saddle at eigenvalues
  between lowest / highest.<br /> (Max over all \(k\)-dim spaces) of (Min of
  \(x'Sx/x'x\)) = evalue<br /> Sample mean and expected mean<br /> Sample
  variance and \(k\)<sup>th</sup> eigenvalue variance</p> <p>Related sections in
  textbook: III.2 and V.1</p> <p><strong>Instructor:</strong> Prof. Gilbert
  Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 2K7CvGnebO0
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    title: Video-YouTube-Stream
    type: Video
    uid: 7e5144627e6317e8562d8fd4f80b9cda
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/2K7CvGnebO0/default.jpg'
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d10328c47b32a854897aab5887ebf91e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 2K7CvGnebO0
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 62898cafda0045a81d0b1d05a3586238
  - id: 2K7CvGnebO0.srt
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-19-saddle-points-continued-maxmin-principle/2K7CvGnebO0.srt
    title: 3play caption file
    type: null
    uid: 0ea56b4162cc1bfa37a1c6f5af6666fd
  - id: 2K7CvGnebO0.pdf
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-19-saddle-points-continued-maxmin-principle/2K7CvGnebO0.pdf
    title: 3play pdf file
    type: null
    uid: 756ed177370f2e49ffabf9c9e65a16ba
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 6e8458f02924bdfda45d904f796b675c
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 6eb40e7bbae4a245d6ff680906ecb450
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture19_300k.mp4'
    parent_uid: 1a9b96a6848456dd2b380557ed66a416
    title: Video-Internet Archive-MP4
    type: Video
    uid: 36b8c499e336f85378855e2264a1e1d9
inline_embed_id: 76370732lecture19saddlepointscontinuedmaxminprinciple49769046
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-19-saddle-points-continued-maxmin-principle
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-19-saddle-points-continued-maxmin-principle
title: 'Lecture 19: Saddle Points Continued, Maxmin Principle'
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
  m="23130">GILBERT STRANG:</span> <span m="23280">So</span> <span
  m="23430">I've</span> <span m="23610">got</span> <span m="24540">a</span>
  <span m="25470">list</span> <span m="25860">of</span> <span
  m="25980">things</span> <span m="26790">I'm</span> <span
  m="27060">hoping</span> <span m="27420">to</span> <span m="27510">do</span>
  <span m="27720">today.</span> <span m="28740">I'll</span> <span
  m="28860">begin</span> <span m="29280">with</span> <span m="29520">a</span>
  <span m="29610">few</span> <span m="29910">final</span> <span
  m="30330">words</span> <span m="30720">about</span> <span
  m="31050">saddle</span> <span m="31470">points.</span> <span
  m="32445">The</span> <span m="32820">reason</span> <span m="33180">I'm</span>
  <span m="33360">interested</span> <span m="33990">in</span> <span
  m="34200">saddle</span> <span m="34610">points</span> <span
  m="35100">is</span> <span m="36090">when</span> <span m="36330">we</span>
  <span m="36450">get</span> <span m="36660">to</span> <span
  m="36840">this</span> <span m="37950">deep</span> <span
  m="38280">learning</span> <span m="40680">direction,</span> <span
  m="42780">you</span> <span m="42930">know</span> <span m="43290">that</span>
  <span m="43590">the</span> <span m="44490">big</span> <span
  m="44760">step</span> <span m="45180">there</span> <span m="45630">is</span>
  <span m="45900">finding</span> <span m="46440">a</span> <span
  m="46500">minimum</span> <span m="48370">of</span> <span m="48850">the</span>
  <span m="50020">total</span> <span m="50470">cost</span> <span
  m="50920">function</span> <span m="52180">and</span> <span
  m="52480">gradient</span> <span m="53020">descent,</span> <span
  m="53740">which</span> <span m="53980">we'll</span> <span
  m="54220">certainly</span> <span m="54730">discuss</span> <span
  m="55350">as</span> <span m="55570">the</span> <span m="55750">usual</span>
  <span m="56110">method</span> <span m="56980">or</span> <span
  m="57160">stochastic</span> <span m="57970">gradient</span> <span
  m="59230">descent.</span> <span m="60520">And</span> <span
  m="62170">all</span> <span m="62470">kinds</span> <span m="62890">of</span>
  <span m="63010">issues</span> <span m="63430">arise,</span> <span
  m="64120">what</span> <span m="64360">happens</span> <span m="64840">if</span>
  <span m="65019">you</span> <span m="65170">have</span> <span
  m="65410">a</span> <span m="65500">saddle</span> <span m="65950">point</span>
  <span m="68770">or</span> <span m="69955">a</span> <span
  m="70350">degenerate</span> <span m="71350">minimum?</span> <span
  m="71860">All</span> <span m="72580">these</span> <span
  m="72880">possibilities</span> <span m="73990">and</span> <span
  m="74770">the</span> <span m="75670">understanding</span> <span
  m="76540">of</span> <span m="76690">deep</span> <span
  m="77020">learning</span> <span m="77560">is</span> <span
  m="78250">focusing</span> <span m="78940">more</span> <span
  m="79270">and</span> <span m="79360">more</span> <span m="79720">on</span>
  <span m="80470">what</span> <span m="80890">does</span> <span
  m="81340">that</span> <span m="81710">the</span> <span
  m="81760">gradient</span> <span m="82300">descent</span> <span
  m="82810">algorithm</span> <span m="83380">produce.</span></p><p><span
  m="84700">So</span> <span m="85090">I</span> <span m="85240">just</span> <span
  m="85510">thought</span> <span m="87850">minima</span> <span
  m="88540">and</span> <span m="88720">maxima</span> <span m="89290">we</span>
  <span m="89500">know</span> <span m="89740">about.</span> <span
  m="91180">Saddle</span> <span m="91510">points</span> <span
  m="91960">are</span> <span m="93130">kind</span> <span m="93310">of</span>
  <span m="93430">a</span> <span m="93490">little</span> <span
  m="93760">hazier.</span> <span m="98110">So</span> <span m="98920">this</span>
  <span m="99160">is</span> <span m="99310">a</span> <span
  m="100000">perfect</span> <span m="100510">example.</span> <span
  m="101300">And</span> <span m="101350">I'll</span> <span
  m="101470">just</span> <span m="101770">say</span> <span m="102130">a</span>
  <span m="102220">few</span> <span m="102430">more</span> <span
  m="102610">words</span> <span m="102970">about</span> <span
  m="103300">it.</span></p><p><span m="103450">Then,</span> <span
  m="104290">I</span> <span m="104440">want</span> <span m="104710">to</span>
  <span m="105610">talk</span> <span m="105970">about</span> <span
  m="106390">the</span> <span m="107350">Lab</span> <span m="107770">3</span>
  <span m="108310">that</span> <span m="108520">I</span> <span
  m="108820">boldly</span> <span m="110230">posted</span> <span
  m="110890">on</span> <span m="112240">the</span> <span
  m="113140">Stellar</span> <span m="114900">and</span> <span
  m="115710">also</span> <span m="116130">about</span> <span
  m="116430">projects,</span> <span m="117720">just</span> <span
  m="117990">to</span> <span m="118170">get</span> <span m="118650">us</span>
  <span m="119060">thinking</span> <span m="119520">about</span> <span
  m="119850">those.</span> <span m="120970">And</span> <span
  m="121020">then</span> <span m="123240">my</span> <span m="123420">real</span>
  <span m="123750">math</span> <span m="124200">topic</span> <span
  m="124800">for</span> <span m="125760">today</span> <span
  m="126480">and</span> <span m="128759">this</span> <span
  m="129000">week</span> <span m="129900">is</span> <span
  m="131520">basic</span> <span m="132060">ideas</span> <span
  m="132690">of</span> <span m="132810">statistics,</span> <span
  m="134650">particularly</span> <span m="135420">the</span> <span
  m="135600">covariance</span> <span m="136530">matrix.</span> <span
  m="137190">I'm</span> <span m="137400">sure</span> <span
  m="137670">you've</span> <span m="137910">met</span> <span
  m="138240">mean</span> <span m="138630">and</span> <span
  m="138810">variance.</span> <span m="139470">Those</span> <span
  m="139710">are</span> <span m="139770">the</span> <span m="139920">most</span>
  <span m="140340">used</span> <span m="141030">words.</span> <span
  m="141480">And</span> <span m="141630">we'll</span> <span
  m="141870">use</span> <span m="142140">them</span> <span
  m="142290">again.</span> <span m="143130">But</span> <span
  m="143340">then</span> <span m="143550">I</span> <span m="143640">want</span>
  <span m="143850">to</span> <span m="143940">go</span> <span
  m="144150">on</span> <span m="144310">to</span> <span
  m="144570">covariance.</span> <span m="146190">So</span> <span
  m="146430">that's</span> <span m="146730">what's</span> <span
  m="146940">coming</span> <span m="147300">today--</span> <span
  m="148050">a</span> <span m="148140">few</span> <span m="148350">words</span>
  <span m="148770">on</span> <span m="148960">saddle</span> <span
  m="149310">points,</span> <span m="150690">a</span> <span
  m="150720">lot</span> <span m="150990">of</span> <span m="151050">words</span>
  <span m="151560">about</span> <span m="153570">the</span> <span
  m="153690">lab</span> <span m="154470">and</span> <span
  m="155700">anything</span> <span m="156210">you</span> <span
  m="157350">want</span> <span m="157560">to</span> <span m="157680">ask</span>
  <span m="157980">about</span> <span m="158220">projects,</span> <span
  m="159360">and</span> <span m="159540">then</span> <span
  m="160650">some</span> <span m="161400">basic</span> <span
  m="162060">statistics.</span></p><p><span m="163080">OK,</span> <span
  m="163500">saddle</span> <span m="163860">point</span> <span
  m="164820">so</span> <span m="165300">the</span> <span
  m="165690">example</span> <span m="166290">I'm</span> <span
  m="166440">taking</span> <span m="167520">is</span> <span
  m="167820">this</span> <span m="168810">Rayleigh</span> <span
  m="169410">quotient.</span> <span m="172310">And</span> <span
  m="172760">I'm</span> <span m="173120">taking</span> <span m="173630">a</span>
  <span m="173810">simple</span> <span m="174260">matrix</span> <span
  m="174860">S.</span> <span m="175310">I</span> <span m="175760">might</span>
  <span m="175940">as</span> <span m="176090">well</span> <span
  m="176300">take</span> <span m="176570">a</span> <span
  m="176660">diagonal</span> <span m="177350">matrix.</span> <span
  m="179180">It's</span> <span m="179540">symmetric,</span> <span
  m="180260">of</span> <span m="180380">course.</span> <span
  m="180770">And</span> <span m="181220">any</span> <span
  m="181490">symmetric</span> <span m="182150">matrix</span> <span
  m="182720">I</span> <span m="182870">could</span> <span m="183500">just</span>
  <span m="183770">change</span> <span m="184280">variables</span> <span
  m="185030">by</span> <span m="185300">a</span> <span m="185420">cube</span>
  <span m="186020">matrix,</span> <span m="186710">an</span> <span
  m="186830">orthogonal</span> <span m="187400">matrix</span> <span
  m="188180">to</span> <span m="188330">get</span> <span m="188540">to</span>
  <span m="188690">something</span> <span m="189170">like</span> <span
  m="189440">that.</span></p><p><span m="190520">And</span> <span
  m="190670">then</span> <span m="190910">the</span> <span m="191090">x,</span>
  <span m="191960">we're</span> <span m="192170">in</span> <span
  m="192320">3D.</span> <span m="193850">So</span> <span m="194000">we</span>
  <span m="194270">got</span> <span m="194570">a</span> <span
  m="195410">sort</span> <span m="195630">of</span> <span
  m="195740">manageable</span> <span m="196520">size</span> <span
  m="197090">here.</span> <span m="197900">And</span> <span
  m="198140">the</span> <span m="198500">x</span> <span m="200150">vector</span>
  <span m="200730">is</span> <span m="200960">uvw.</span> <span
  m="202930">So</span> <span m="203230">this</span> <span m="203680">is</span>
  <span m="205320">the</span> <span m="205490">quotient.</span> <span
  m="207110">x</span> <span m="207350">transpose</span> <span
  m="207980">x,</span> <span m="208520">you</span> <span m="208760">see</span>
  <span m="209120">is</span> <span m="209530">just</span> <span
  m="209870">exactly</span> <span m="210440">5</span> <span m="210725">u</span>
  <span m="211240">squareds,</span> <span m="212470">3</span> <span
  m="212840">v</span> <span m="213410">squareds,</span> <span
  m="213980">and</span> <span m="214130">1</span> <span m="214430">w</span>
  <span m="214850">squared.</span> <span m="215780">And</span> <span
  m="215990">I</span> <span m="216170">divide</span> <span m="216650">by</span>
  <span m="216890">the</span> <span m="217010">length</span> <span
  m="217940">to</span> <span m="218690">normalize</span> <span
  m="219390">things.</span></p><p><span m="219800">So</span> <span
  m="219980">what</span> <span m="220220">are</span> <span m="220280">the</span>
  <span m="220430">main</span> <span m="220760">facts</span> <span
  m="221270">that</span> <span m="221390">we</span> <span m="222050">know</span>
  <span m="222860">that</span> <span m="223130">I'm</span> <span
  m="223280">not</span> <span m="223490">going</span> <span m="223640">to</span>
  <span m="224210">prove,</span> <span m="224660">but</span> <span
  m="224910">what</span> <span m="225410">are</span> <span m="225470">the</span>
  <span m="225560">main</span> <span m="225920">facts?</span> <span
  m="226880">What's</span> <span m="227150">the</span> <span
  m="227300">maximum</span> <span m="228080">value</span> <span
  m="229340">of</span> <span m="229610">R?</span> <span m="230630">What's</span>
  <span m="230960">the</span> <span m="231080">minimum</span> <span
  m="232430">value</span> <span m="233000">of</span> <span m="233180">R,</span>
  <span m="233620">of</span> <span m="234080">that</span> <span
  m="234320">function?</span> <span m="236030">And</span> <span
  m="237260">is</span> <span m="237470">there</span> <span m="237650">a</span>
  <span m="237710">saddle</span> <span m="238130">point?</span> <span
  m="239570">So</span> <span m="239900">saddle</span> <span m="244620">of</span>
  <span m="244900">R.</span></p><p><span m="245950">OK,</span> <span
  m="246760">what's</span> <span m="247000">the</span> <span
  m="247120">maximum</span> <span m="247720">value?</span> <span
  m="248290">How</span> <span m="248440">large</span> <span
  m="248800">could</span> <span m="249010">you</span> <span
  m="249100">make</span> <span m="249340">that</span> <span
  m="249550">ratio,</span> <span m="250150">capital</span> <span
  m="250690">R?</span> <span m="251380">I</span> <span m="251740">just</span>
  <span m="251950">think,</span> <span m="253130">you</span> <span
  m="253490">know,</span> <span m="253630">this</span> <span
  m="253900">isn't</span> <span m="254260">a</span> <span
  m="254350">standard</span> <span m="255310">topic</span> <span
  m="255850">in</span> <span m="256360">18.06.</span> <span
  m="258579">But</span> <span m="259000">with</span> <span m="259240">an</span>
  <span m="259390">example</span> <span m="259930">like</span> <span
  m="260200">this,</span> <span m="260470">you'll</span> <span
  m="260680">see</span> <span m="260980">the</span> <span
  m="261130">whole</span> <span m="261880">point.</span></p><p><span
  m="262880">OK,</span> <span m="263500">so</span> <span m="263710">how</span>
  <span m="263890">large</span> <span m="264250">could</span> <span
  m="264460">I</span> <span m="264550">make</span> <span m="264880">R?</span>
  <span m="267070">Yeah,</span> <span m="267260">go</span> <span
  m="267810">ahead</span> <span m="267960">and</span> <span
  m="268050">say</span> <span m="268320">it.</span></p><p><span
  m="268880">AUDIENCE:</span> <span m="269100">Sigma.</span></p><p><span
  m="269760">GILBERT STRANG:</span> <span m="269955">Sigma</span> <span
  m="270150">1.</span> <span m="270480">And</span> <span m="270840">what</span>
  <span m="271050">is</span> <span m="271260">it</span> <span
  m="271380">here?</span> <span m="271780">Let's</span> <span
  m="271980">just</span> <span m="272220">do</span> <span m="272550">with</span>
  <span m="272910">these</span> <span m="273150">numbers.</span> <span
  m="274660">How</span> <span m="275160">big</span> <span m="275490">can</span>
  <span m="275760">I</span> <span m="275880">make</span> <span
  m="276180">that</span> <span m="276390">ratio</span> <span
  m="277040">R?</span> <span m="277380">And</span> <span m="278100">what</span>
  <span m="278430">choice</span> <span m="278940">of</span> <span
  m="279120">uvw</span> <span m="279960">makes</span> <span m="280350">it</span>
  <span m="280470">big?</span> <span m="281730">So</span> <span
  m="281940">how</span> <span m="282150">big</span> <span m="282420">I</span>
  <span m="282540">can</span> <span m="282750">get</span> <span
  m="282990">it</span> <span m="283140">is?</span></p><p><span
  m="283970">AUDIENCE:</span> <span m="284150">5.</span></p><p><span
  m="284690">GILBERT STRANG:</span> <span m="284915">5.</span> <span
  m="285850">That</span> <span m="286550">ratio</span> <span
  m="287120">can't</span> <span m="287480">be</span> <span
  m="287690">more</span> <span m="287930">than</span> <span m="288170">5.</span>
  <span m="289160">You</span> <span m="289310">see</span> <span
  m="289580">it</span> <span m="289670">would</span> <span m="289880">be</span>
  <span m="290090">5.</span></p><p><span m="291140">Well,</span> <span
  m="291380">how</span> <span m="291560">do</span> <span m="291740">I</span>
  <span m="291830">get</span> <span m="292010">to</span> <span
  m="292160">5?</span> <span m="292550">Maximum</span> <span
  m="293210">of</span> <span m="293390">R</span> <span m="293750">is</span>
  <span m="293990">5.</span> <span m="295190">And</span> <span
  m="295580">what</span> <span m="296120">is</span> <span m="296360">the</span>
  <span m="296510">uvw</span> <span m="297620">that--</span> <span
  m="298970">so</span> <span m="299240">I'll</span> <span m="299360">say</span>
  <span m="299660">at--</span> <span m="301010">what</span> <span
  m="301220">choice</span> <span m="301670">of</span> <span
  m="301850">uvw</span> <span m="303050">would</span> <span
  m="303290">give</span> <span m="303500">us</span> <span m="303710">5</span>
  <span m="304160">here?</span> <span m="305180">You</span> <span
  m="305960">see</span> <span m="306230">it</span> <span
  m="306350">immediately,</span> <span m="306980">1,</span> <span
  m="307460">0,</span> <span m="307760">0.</span></p><p><span
  m="310220">And</span> <span m="310340">what</span> <span
  m="310490">about</span> <span m="310700">the</span> <span
  m="310790">minimum</span> <span m="311270">of</span> <span
  m="311420">R?</span> <span m="312410">The</span> <span
  m="312620">minimum</span> <span m="313140">of</span> <span
  m="313190">this</span> <span m="313550">ratio,</span> <span
  m="314220">how</span> <span m="314330">do</span> <span m="314480">I</span>
  <span m="314570">make</span> <span m="314780">that</span> <span
  m="314990">ratio</span> <span m="315440">small?</span> <span
  m="316550">Well,</span> <span m="316790">I</span> <span m="316910">put</span>
  <span m="317360">I</span> <span m="317510">load</span> <span
  m="317900">stuff</span> <span m="318380">on</span> <span m="318560">the</span>
  <span m="318710">w</span> <span m="319280">instead</span> <span
  m="319760">of</span> <span m="319850">loading</span> <span
  m="320270">it</span> <span m="320390">up</span> <span m="320600">on</span>
  <span m="320750">to</span> <span m="320960">u.</span> <span
  m="322170">It's</span> <span m="322370">just</span> <span
  m="323210">clear.</span> <span m="324260">So</span> <span
  m="324470">what</span> <span m="324740">is</span> <span m="324890">the</span>
  <span m="324980">minimum</span> <span m="325400">value</span> <span
  m="325910">of</span> <span m="326090">R?</span></p><p><span
  m="326420">AUDIENCE:</span> <span m="326663">1.</span></p><p><span
  m="327880">GILBERT STRANG:</span> <span m="328055">1,</span> <span
  m="328710">because</span> <span m="329130">I'll</span> <span
  m="329250">load</span> <span m="329640">everything</span> <span
  m="330210">into</span> <span m="330480">w.</span> <span m="332220">So</span>
  <span m="332430">the</span> <span m="332520">minimum</span> <span
  m="332970">value</span> <span m="333390">will</span> <span
  m="333540">be</span> <span m="333780">1.</span> <span m="334260">And</span>
  <span m="334380">that</span> <span m="334590">will</span> <span
  m="334710">be</span> <span m="334950">at</span> <span m="335280">the</span>
  <span m="335430">vector</span> <span m="336300">0,</span> <span
  m="336840">0,</span> <span m="337130">1.</span> <span m="337530">I've</span>
  <span m="337740">loaded</span> <span m="338160">everything</span> <span
  m="338640">there.</span></p><p><span m="339810">And</span> <span
  m="339930">then</span> <span m="340600">the</span> <span
  m="340950">point</span> <span m="341340">of</span> <span
  m="341430">this</span> <span m="341820">short</span> <span
  m="342840">discussion</span> <span m="343500">is,</span> <span
  m="344730">is</span> <span m="344880">there</span> <span
  m="345030">another</span> <span m="345420">place</span> <span
  m="346860">where</span> <span m="347220">the</span> <span
  m="347430">derivatives,</span> <span m="348450">first</span> <span
  m="348810">derivatives,</span> <span m="349740">of</span> <span
  m="349920">R</span> <span m="350610">are</span> <span m="350820">all</span>
  <span m="351030">zero?</span> <span m="351690">That's</span> <span
  m="352950">where,</span> <span m="353890">of</span> <span
  m="353940">course,</span> <span m="354370">the</span> <span
  m="354390">first</span> <span m="354690">derivatives</span> <span
  m="355360">are</span> <span m="356480">0</span> <span m="356910">at</span>
  <span m="357060">the</span> <span m="357180">max,</span> <span
  m="358890">at</span> <span m="359080">the</span> <span m="359385">min.</span>
  <span m="360510">But</span> <span m="360930">we</span> <span
  m="361200">also</span> <span m="362280">have</span> <span
  m="362400">three</span> <span m="362670">variables</span> <span
  m="363270">here.</span> <span m="364260">And</span> <span
  m="364800">we're</span> <span m="365010">going</span> <span
  m="365100">to</span> <span m="365250">find</span> <span m="365680">a</span>
  <span m="365760">third</span> <span m="366180">point.</span></p><p><span
  m="367380">And</span> <span m="367650">what</span> <span m="367920">is</span>
  <span m="368100">that</span> <span m="368310">point?</span> <span
  m="368790">You</span> <span m="368940">probably</span> <span
  m="369510">guess.</span> <span m="371100">And</span> <span
  m="371410">what</span> <span m="371740">will</span> <span m="371920">be</span>
  <span m="372130">the</span> <span m="372310">saddle</span> <span
  m="372850">value?</span> <span m="373780">So</span> <span
  m="374500">you</span> <span m="374650">have</span> <span m="374800">to</span>
  <span m="374950">see</span> <span m="375430">some</span> <span
  m="375730">kind</span> <span m="376030">of</span> <span m="376160">a</span>
  <span m="376210">surface</span> <span m="377850">that--</span> <span
  m="378490">I</span> <span m="378610">guess,</span> <span
  m="379060">what</span> <span m="379300">are</span> <span m="379390">we</span>
  <span m="379630">in?</span> <span m="379810">4D.</span> <span
  m="381250">So</span> <span m="381490">we</span> <span m="381670">have</span>
  <span m="385120">base</span> <span m="385990">coordinates,</span> <span
  m="386650">uvw.</span> <span m="388060">And</span> <span m="388970">R</span>
  <span m="389330">goes</span> <span m="390010">vertically.</span> <span
  m="391360">And</span> <span m="391810">we</span> <span m="391990">plot</span>
  <span m="392350">that</span> <span m="392590">surface.</span> <span
  m="393880">And</span> <span m="395170">we</span> <span m="395440">don't</span>
  <span m="395770">really</span> <span m="396190">understand</span> <span
  m="396910">it</span> <span m="397570">unless</span> <span m="397950">we</span>
  <span m="398410">think</span> <span m="398710">a</span> <span
  m="398770">lot</span> <span m="399040">about</span> <span
  m="399340">it,</span> <span m="399430">which</span> <span m="399670">we</span>
  <span m="399850">haven't.</span> <span m="400570">But</span> <span
  m="400840">we</span> <span m="401020">can</span> <span
  m="401620">pretty</span> <span m="401920">well</span> <span
  m="402130">guess</span> <span m="402640">what's</span> <span
  m="403000">what.</span></p><p><span m="403810">And</span> <span
  m="403990">so</span> <span m="404230">what</span> <span m="404440">do</span>
  <span m="404500">you</span> <span m="404590">think</span> <span
  m="404860">is</span> <span m="405040">the</span> <span
  m="405190">saddle</span> <span m="405670">value?</span> <span
  m="406720">And</span> <span m="406990">where</span> <span m="407530">is</span>
  <span m="407770">it</span> <span m="408700">going</span> <span
  m="408910">to</span> <span m="409030">be</span> <span
  m="409660">reached?</span> <span m="410800">Everybody</span> <span
  m="411160">is</span> <span m="411300">going</span> <span m="411430">to</span>
  <span m="411580">tell</span> <span m="411760">me</span> <span
  m="411940">correctly.</span> <span m="412960">Saddle</span> <span
  m="413320">value</span> <span m="413710">would</span> <span
  m="413890">be?</span> <span m="414970">Three</span> <span m="416080">at</span>
  <span m="416320">this</span> <span m="416740">middle</span> <span
  m="417070">point.</span></p><p><span m="423460">And</span> <span
  m="424280">what</span> <span m="424540">are</span> <span
  m="424690">these</span> <span m="425020">three</span> <span
  m="425440">with</span> <span m="425680">respect</span> <span
  m="426130">to</span> <span m="426310">the</span> <span
  m="426430">matrix?</span> <span m="427920">They're</span> <span
  m="428160">its</span> <span m="428350">eigenvectors.</span> <span
  m="430120">What</span> <span m="430360">are</span> <span
  m="430450">these</span> <span m="430690">three</span> <span
  m="431020">numbers</span> <span m="432020">with</span> <span
  m="432240">respect</span> <span m="432510">to</span> <span
  m="432610">the</span> <span m="432730">matrix?</span> <span
  m="433710">There</span> <span m="433930">its</span> <span
  m="434110">eigenvalues.</span> <span m="436090">That's</span> <span
  m="436450">why</span> <span m="437470">that</span> <span
  m="437800">Rayleigh</span> <span m="438250">quotient</span> <span
  m="438820">is</span> <span m="438940">such</span> <span m="439270">an</span>
  <span m="439690">important</span> <span
  m="440200">function.</span></p><p><span m="440830">It's</span> <span
  m="440980">kind</span> <span m="441250">of</span> <span m="441340">a</span>
  <span m="441400">messy</span> <span m="441910">function.</span> <span
  m="443020">If</span> <span m="443170">you</span> <span m="443260">take</span>
  <span m="443570">its</span> <span m="443770">derivative,</span> <span
  m="444760">you've</span> <span m="444940">got</span> <span
  m="445120">to</span> <span m="445210">use</span> <span m="445480">the</span>
  <span m="445570">quotient</span> <span m="446080">rule</span> <span
  m="446590">or</span> <span m="447610">use</span> <span
  m="449240">Lagrange</span> <span m="449890">multiplier.</span> <span
  m="451710">That's</span> <span m="452140">the</span> <span
  m="452650">way</span> <span m="452950">to</span> <span m="453070">make</span>
  <span m="453340">it</span> <span m="453790">more</span> <span
  m="453970">manageable.</span> <span m="454600">But</span> <span
  m="454750">it's</span> <span m="454990">kind</span> <span m="455230">of</span>
  <span m="455320">messy.</span></p><p><span m="455770">But</span> <span
  m="455980">the</span> <span m="456100">results</span> <span
  m="456670">could</span> <span m="456880">not</span> <span m="457120">be</span>
  <span m="457270">better.</span> <span m="458320">The</span> <span
  m="460040">values</span> <span m="460780">there</span> <span
  m="461050">are</span> <span m="461200">the</span> <span
  m="461380">eigenvalues.</span> <span m="463300">And</span> <span
  m="463450">the</span> <span m="463540">places</span> <span
  m="464080">where</span> <span m="464290">you</span> <span
  m="464410">reach</span> <span m="464770">them</span> <span
  m="464980">are</span> <span m="465130">the</span> <span
  m="465310">eigenvectors.</span> <span m="467110">And</span> <span
  m="467980">so</span> <span m="468220">the</span> <span m="468310">max</span>
  <span m="468820">is</span> <span m="469060">the</span> <span
  m="469150">most</span> <span m="469480">important.</span> <span
  m="470530">So</span> <span m="471850">that's</span> <span
  m="472600">sigma</span> <span m="473020">1.</span> <span
  m="474160">Here's</span> <span m="474630">sigma</span> <span
  m="475060">3--</span> <span m="476620">or</span> <span
  m="477310">lambda</span> <span m="477900">and</span> <span
  m="478180">sigma,</span> <span m="478630">because</span> <span
  m="479080">the</span> <span m="479170">matrix</span> <span
  m="479770">is</span> <span m="479920">symmetric</span> <span
  m="480550">positive</span> <span m="481060">definite.</span> <span
  m="481780">And</span> <span m="481930">here</span> <span m="482200">in</span>
  <span m="482290">the</span> <span m="482380">middle</span> <span
  m="482740">is</span> <span m="482920">sigma</span> <span
  m="483340">2.</span></p><p><span m="484910">And</span> <span
  m="484990">if</span> <span m="485140">we</span> <span m="485260">want</span>
  <span m="485470">to</span> <span m="485650">compute</span> <span
  m="488510">eigenvectors,</span> <span m="490750">which</span> <span
  m="491010">I'm</span> <span m="491650">not</span> <span
  m="491860">planning</span> <span m="492340">to</span> <span
  m="492460">do</span> <span m="492610">today,</span> <span
  m="493060">just</span> <span m="493300">to</span> <span m="493420">make</span>
  <span m="493690">this</span> <span m="493930">remark--</span> <span
  m="495040">computing</span> <span m="495740">eigenvectors,</span> <span
  m="497290">getting</span> <span m="497770">the</span> <span
  m="498550">largest</span> <span m="499090">one</span> <span
  m="499450">or</span> <span m="499600">the</span> <span
  m="499750">smallest</span> <span m="500350">one</span> <span
  m="501760">is</span> <span m="502060">a</span> <span m="502120">lot</span>
  <span m="502480">quicker</span> <span m="503350">in</span> <span
  m="503470">general</span> <span m="504220">than</span> <span
  m="504400">getting</span> <span m="504820">these</span> <span
  m="505420">ones</span> <span m="505810">in</span> <span m="505900">the</span>
  <span m="505990">middle.</span> <span m="507940">You</span> <span
  m="508210">have</span> <span m="508480">to</span> <span m="511750">use</span>
  <span m="513610">good</span> <span m="513880">codes</span> <span
  m="514600">and</span> <span m="515620">pay</span> <span
  m="515890">attention</span> <span m="516460">to</span> <span
  m="517000">computing</span> <span m="517570">those</span> <span
  m="517780">saddle</span> <span m="518230">point</span> <span
  m="518530">values.</span></p><p><span m="519490">So</span> <span
  m="519730">is</span> <span m="519970">there</span> <span
  m="520120">anything</span> <span m="520600">nice</span> <span
  m="521049">I</span> <span m="521140">can</span> <span m="521380">do</span>
  <span m="521590">with</span> <span m="521799">saddle</span> <span
  m="522220">points?</span> <span m="524620">How</span> <span
  m="524770">does</span> <span m="524920">one</span> <span
  m="525130">think</span> <span m="525430">about</span> <span
  m="525760">saddle</span> <span m="526120">points?</span> <span
  m="526840">So</span> <span m="527020">again,</span> <span
  m="527680">saddle</span> <span m="528040">point</span> <span
  m="528640">is</span> <span m="528850">defined</span> <span
  m="529390">by</span> <span m="531040">first</span> <span
  m="532600">derivatives</span> <span m="535440">equals</span> <span
  m="535860">0.</span> <span m="536820">That's--</span> <span
  m="538470">and</span> <span m="538770">the</span> <span
  m="538920">second</span> <span m="539370">derivatives--</span> <span
  m="543890">OK,</span> <span m="544820">so</span> <span
  m="545030">that's</span> <span m="545810">a</span> <span
  m="545900">matrix.</span> <span m="546480">Here's</span> <span
  m="546650">a</span> <span m="546710">vector,</span> <span
  m="547870">the</span> <span m="548000">gradient</span> <span
  m="548510">vector.</span> <span m="549420">The</span> <span
  m="549680">derivative</span> <span m="549930">with</span> <span
  m="550180">respect</span> <span m="550490">to</span> <span
  m="550610">u,</span> <span m="551060">the</span> <span
  m="551180">derivative</span> <span m="551450">with</span> <span
  m="551550">respect</span> <span m="551920">to</span> <span
  m="551990">v,</span> <span m="552590">NDR</span> <span m="553290">DW,</span>
  <span m="554300">just</span> <span m="554630">a</span> <span
  m="554690">vector.</span> <span m="555620">And</span> <span
  m="556640">all</span> <span m="557210">those</span> <span
  m="557480">components</span> <span m="558080">are</span> <span
  m="558200">zero.</span> <span m="559160">The</span> <span
  m="559310">gradient</span> <span m="559910">vector</span> <span
  m="560390">is</span> <span m="560480">zero.</span></p><p><span
  m="561380">But</span> <span m="561620">what</span> <span
  m="561860">about</span> <span m="562190">second</span> <span
  m="562610">derivatives?</span> <span m="564170">Well,</span> <span
  m="564490">that's</span> <span m="564830">getting</span> <span
  m="565120">more.</span> <span m="565640">There</span> <span
  m="565790">are</span> <span m="566330">nine</span> <span m="566690">of</span>
  <span m="566780">those</span> <span m="567170">now,</span> <span
  m="567860">because</span> <span m="568310">I've</span> <span
  m="568460">got</span> <span m="569360">Ruu,</span> <span
  m="571400">second</span> <span m="571790">derivative</span> <span
  m="573080">with</span> <span m="573260">respect</span> <span
  m="573590">to</span> <span m="573740">u.</span> <span m="576440">But</span>
  <span m="576650">I've</span> <span m="576770">got</span> <span
  m="576980">mixed</span> <span m="577310">derivative.</span> <span
  m="577850">Second</span> <span m="578270">derivative</span> <span
  m="578870">of</span> <span m="579020">R</span> <span m="579410">with</span>
  <span m="579620">respect</span> <span m="580040">to</span> <span
  m="581130">Du</span> <span m="581360">Dv.</span> <span m="582780">So</span>
  <span m="583090">I</span> <span m="583380">have</span> <span
  m="583420">a</span> <span m="583460">3</span> <span m="583760">by</span> <span
  m="583970">3</span> <span m="584240">matrix.</span></p><p><span
  m="585770">Fortunately,</span> <span m="586520">that</span> <span
  m="586700">matrix</span> <span m="587330">is</span> <span
  m="587490">symmetric,</span> <span m="589410">because</span> <span
  m="590850">we're</span> <span m="591360">blessed</span> <span
  m="591870">by</span> <span m="592050">that</span> <span
  m="592200">wonderful</span> <span m="592680">fact</span> <span
  m="593100">that</span> <span m="593310">the</span> <span
  m="593880">derivative</span> <span m="594540">with</span> <span
  m="594720">respect</span> <span m="594930">to</span> <span m="595140">u</span>
  <span m="596550">and</span> <span m="596700">then</span> <span
  m="596970">v</span> <span m="597420">is</span> <span m="597600">the</span>
  <span m="597720">same</span> <span m="598140">as</span> <span
  m="598410">v</span> <span m="598980">and</span> <span m="599130">then</span>
  <span m="599370">u.</span> <span m="599770">So</span> <span
  m="600000">we</span> <span m="600150">get</span> <span m="600330">a</span>
  <span m="600390">symmetric</span> <span m="600990">matrix.</span> <span
  m="607950">Well,</span> <span m="608460">I</span> <span
  m="608550">won't</span> <span m="609660">write</span> <span
  m="609960">it</span> <span m="610050">down,</span> <span m="610440">but</span>
  <span m="618300">it's</span> <span m="618360">got</span> <span
  m="619020">the</span> <span m="619170">maximum,</span> <span
  m="619740">minimum,</span> <span m="620370">and</span> <span
  m="621330">saddle</span> <span m="621840">information</span> <span
  m="622530">built</span> <span m="622890">in.</span></p><p><span
  m="624180">Here's</span> <span m="624480">this</span> <span
  m="624750">one</span> <span m="625200">additional</span> <span
  m="626730">thought</span> <span m="627210">that</span> <span
  m="627420">I</span> <span m="627570">want</span> <span m="627780">to</span>
  <span m="628110">communicate</span> <span m="628920">about</span> <span
  m="630430">saddle</span> <span m="630870">points,</span> <span
  m="632860">because</span> <span m="633580">it's</span> <span
  m="633880">really</span> <span m="634240">nice</span> <span
  m="634600">to</span> <span m="634750">somehow</span> <span
  m="635200">get</span> <span m="635410">back</span> <span m="635680">to</span>
  <span m="635810">maxima</span> <span m="636430">and</span> <span
  m="636550">minima.</span> <span m="638540">So</span> <span
  m="641560">this</span> <span m="641890">idea</span> <span
  m="642280">for</span> <span m="642460">a</span> <span m="642520">saddle</span>
  <span m="642850">point</span> <span m="643180">is</span> <span
  m="643390">to</span> <span m="643540">be</span> <span m="643720">able</span>
  <span m="643990">to</span> <span m="644110">write</span> <span
  m="644440">it</span> <span m="644620">as</span> <span m="644920">the</span>
  <span m="645550">maximum</span> <span m="646420">of</span> <span
  m="646660">a</span> <span m="646720">minimum.</span> <span
  m="651570">So</span> <span m="651810">let</span> <span m="651930">me</span>
  <span m="652050">do</span> <span m="652230">that,</span> <span
  m="652500">and</span> <span m="652590">then</span> <span m="652830">I'm</span>
  <span m="653370">all</span> <span m="653520">done.</span></p><p><span
  m="655410">So</span> <span m="655650">I'm</span> <span m="655860">going</span>
  <span m="656000">to</span> <span m="656100">say</span> <span
  m="656340">that</span> <span m="656490">lambda</span> <span
  m="656970">2,</span> <span m="658200">that</span> <span
  m="658440">value,</span> <span m="659370">is</span> <span
  m="659560">the</span> <span m="659670">maximum</span> <span
  m="660510">of</span> <span m="661650">over</span> <span
  m="662040">something</span> <span m="663120">of</span> <span
  m="663310">the</span> <span m="663450">minimum</span> <span
  m="664110">over</span> <span m="664410">something</span> <span
  m="665340">of</span> <span m="666250">x</span> <span m="666570">trans</span>
  <span m="667080">of</span> <span m="668640">our</span> <span
  m="668860">function.</span> <span m="673470">Now,</span> <span
  m="673830">of</span> <span m="674310">course,</span> <span m="674700">I</span>
  <span m="674790">have</span> <span m="674910">to</span> <span
  m="675060">tell</span> <span m="675270">you</span> <span
  m="675420">what</span> <span m="676140">you're</span> <span
  m="676320">maximizing</span> <span m="677250">over</span> <span
  m="677610">and</span> <span m="677730">what</span> <span
  m="677940">you're</span> <span m="678120">minimizing</span> <span
  m="678870">over.</span> <span m="679200">But</span> <span
  m="679380">that's</span> <span m="679680">the</span> <span
  m="679830">idea</span> <span m="680390">is</span> <span m="680490">that</span>
  <span m="681180">one</span> <span m="681660">way</span> <span
  m="681990">to</span> <span m="682150">get</span> <span m="682650">into</span>
  <span m="682950">the</span> <span m="683130">middle</span> <span
  m="684870">place</span> <span m="685230">there</span> <span
  m="685470">where</span> <span m="685680">the</span> <span
  m="685800">saddles</span> <span m="686400">are</span> <span
  m="686880">sitting</span> <span m="687840">is</span> <span
  m="688170">to</span> <span m="688800">have</span> <span m="689070">a</span>
  <span m="689130">maximum</span> <span m="689880">of</span> <span
  m="690030">a</span> <span m="690120">minimum.</span></p><p><span
  m="691140">And</span> <span m="691440">that</span> <span
  m="691770">leads--</span> <span m="692850">that's</span> <span
  m="693180">what</span> <span m="693390">I'm</span> <span
  m="693930">about</span> <span m="694230">to</span> <span
  m="694380">complete</span> <span m="694890">here--</span> <span
  m="695700">would</span> <span m="695970">lead</span> <span
  m="696420">you,</span> <span m="696750">for</span> <span
  m="696960">example,</span> <span m="697560">very</span> <span
  m="697890">quickly</span> <span m="698490">to</span> <span
  m="698730">the</span> <span m="699590">interlacing</span> <span
  m="700530">theorem</span> <span m="701160">that</span> <span
  m="701340">I</span> <span m="701520">spoke</span> <span
  m="701910">about</span> <span m="702360">for</span> <span
  m="704130">eigenvalues</span> <span m="705660">and</span> <span
  m="705960">for</span> <span m="706170">singular</span> <span
  m="706710">values</span> <span m="707410">of</span> <span
  m="709500">when</span> <span m="709980">you</span> <span
  m="710100">perturb</span> <span m="710760">S</span> <span m="711690">or</span>
  <span m="711810">when</span> <span m="712020">you</span> <span
  m="712170">throw</span> <span m="712560">away</span> <span m="712860">a</span>
  <span m="712920">row</span> <span m="713180">and</span> <span
  m="713340">column</span> <span m="713790">of</span> <span m="713940">S.</span>
  <span m="715320">The</span> <span m="715620">eigenvalues</span> <span
  m="716490">go</span> <span m="716760">in</span> <span
  m="716930">between.</span> <span m="718170">That</span> <span
  m="719130">is</span> <span m="719400">the</span> <span m="719520">kind</span>
  <span m="719820">of</span> <span m="720630">conclusion</span> <span
  m="721380">that</span> <span m="721590">this</span> <span
  m="722340">max</span> <span m="722820">min</span> <span
  m="723240">stuff</span> <span m="723690">is</span> <span m="723900">set</span>
  <span m="724280">up</span> <span m="724440">to</span> <span
  m="724590">produce.</span></p><p><span m="725460">So</span> <span
  m="726180">here,</span> <span m="726480">let</span> <span m="726600">me</span>
  <span m="726720">just</span> <span m="727170">tell</span> <span
  m="727440">you</span> <span m="727560">what</span> <span m="727800">it</span>
  <span m="727860">would</span> <span m="728010">be.</span> <span
  m="728610">I'm</span> <span m="729240">aiming</span> <span
  m="729570">to</span> <span m="729690">get</span> <span
  m="729900">lambda</span> <span m="730320">2.</span> <span m="733250">So</span>
  <span m="734060">I'm</span> <span m="734240">going</span> <span
  m="734380">to</span> <span m="734480">take</span> <span m="734900">a</span>
  <span m="734990">maximum</span> <span m="736010">over</span> <span
  m="739010">two</span> <span m="739220">dimensional</span> <span
  m="739950">spaces--</span> <span m="747200">subspaces</span> <span
  m="748130">of</span> <span m="748250">R3.</span> <span m="748790">We're</span>
  <span m="748990">in</span> <span m="749120">3D.</span> <span
  m="751690">So</span> <span m="752500">you</span> <span m="752800">can</span>
  <span m="752980">see</span> <span m="753250">that's</span> <span
  m="753460">sort</span> <span m="753670">of</span> <span m="753730">like</span>
  <span m="754030">2-dimensional</span> <span m="754900">spaces.</span> <span
  m="757360">Let</span> <span m="757450">me</span> <span m="757600">give</span>
  <span m="758220">that</span> <span m="760940">subspace</span> <span
  m="761990">a</span> <span m="762070">name</span> <span m="762400">like</span>
  <span m="762620">V.</span> <span m="764530">That'll</span> <span
  m="764770">do.</span> <span m="764980">Cap</span> <span m="765310">V,</span>
  <span m="765550">everybody</span> <span m="766000">can</span> <span
  m="766180">see</span> <span m="766420">that</span> <span
  m="766630">that's</span> <span m="766720">a</span> <span m="766970">cap</span>
  <span m="767410">V.</span> <span m="768800">And</span> <span
  m="768920">then</span> <span m="769160">this</span> <span
  m="769460">will</span> <span m="769640">be</span> <span m="769880">the</span>
  <span m="770060">minimum</span> <span m="771270">over</span> <span
  m="771535">V.</span></p><p><span m="773680">So</span> <span
  m="774030">it's</span> <span m="775080">is</span> <span m="775930">kind</span>
  <span m="776200">of</span> <span m="776290">tricky.</span> <span
  m="778760">So</span> <span m="778840">I</span> <span m="778960">take</span>
  <span m="779290">any</span> <span m="780850">subspace</span> <span
  m="781540">that's</span> <span m="781780">two</span> <span
  m="782020">dimensional.</span> <span m="783700">And</span> <span
  m="784270">I'll</span> <span m="784390">take</span> <span
  m="784660">one</span> <span m="784960">in</span> <span m="785080">a</span>
  <span m="785140">moment.</span> <span m="786660">And</span> <span
  m="787020">I'll</span> <span m="787200">figure</span> <span
  m="787530">out</span> <span m="787650">the</span> <span
  m="787770">minimum.</span></p><p><span m="788430">Well,</span> <span
  m="788790">suppose</span> <span m="789300">I</span> <span
  m="789450">take</span> <span m="789730">this</span> <span
  m="789870">subspace</span> <span m="791670">V,</span> <span
  m="794820">which</span> <span m="795240">is</span> <span
  m="796470">spanned</span> <span m="797100">by</span> <span
  m="797370">the</span> <span m="797520">first</span> <span
  m="797940">two--</span> <span m="798420">it's</span> <span
  m="798570">supposed</span> <span m="798900">to</span> <span
  m="798990">be</span> <span m="799140">a</span> <span m="799230">2D</span>
  <span m="799800">subspace--</span> <span m="800760">spanned</span> <span
  m="801240">by</span> <span m="801450">the</span> <span
  m="801600">first.</span> <span m="803280">Suppose</span> <span
  m="803910">I</span> <span m="804060">try</span> <span
  m="804600">example.</span> <span m="808980">The</span> <span
  m="809210">span</span> <span m="811190">of</span> <span m="813480">1,</span>
  <span m="813780">0,</span> <span m="814140">0,</span> <span
  m="815730">and</span> <span m="816120">0,</span> <span m="816520">1,</span>
  <span m="816750">0.</span> <span m="819370">In</span> <span
  m="819420">other</span> <span m="819600">words,</span> <span
  m="820450">all</span> <span m="821190">vectors</span> <span
  m="825190">u,</span> <span m="825970">v,</span> <span m="827090">0.</span>
  <span m="827800">That's</span> <span m="828100">a</span> <span
  m="828190">2D</span> <span m="828640">space.</span></p><p><span
  m="830860">What</span> <span m="831130">is</span> <span m="831280">the</span>
  <span m="831400">minimum</span> <span m="834250">of</span> <span
  m="836290">that</span> <span m="836530">Rayleigh</span> <span
  m="836920">quotient</span> <span m="837460">over</span> <span
  m="837790">that</span> <span m="838600">two-dimensional</span> <span
  m="839530">space?</span> <span m="840310">So</span> <span
  m="840490">now</span> <span m="840670">I'm</span> <span
  m="840790">taking</span> <span m="841090">a</span> <span
  m="841150">minimum.</span> <span m="841730">I</span> <span
  m="841830">don't</span> <span m="841960">have</span> <span
  m="842080">to</span> <span m="842200">think</span> <span
  m="842410">about</span> <span m="842650">saddle</span> <span
  m="843040">points.</span> <span m="846640">So</span> <span
  m="846940">I'm</span> <span m="847120">looking</span> <span
  m="847510">at</span> <span m="847660">the</span> <span
  m="847750">thing,</span> <span m="848040">but</span> <span m="848650">w</span>
  <span m="849160">is</span> <span m="849250">zero</span> <span
  m="849700">now.</span> <span m="849910">Everybody</span> <span
  m="850330">sees</span> <span m="850740">that</span> <span
  m="851620">I've</span> <span m="852130">squeezed</span> <span
  m="852670">it</span> <span m="852760">down</span> <span m="853070">to</span>
  <span m="853220">2D.</span> <span m="854260">So</span> <span
  m="854470">w</span> <span m="854980">is</span> <span m="855040">zero.</span>
  <span m="855760">So</span> <span m="855970">what</span> <span
  m="856180">is</span> <span m="856300">the</span> <span
  m="856420">minimum</span> <span m="856870">now?</span></p><p><span
  m="858540">So</span> <span m="858780">this</span> <span
  m="859830">thing</span> <span m="860190">would</span> <span
  m="860400">become--</span> <span m="862090">for</span> <span
  m="862290">this</span> <span m="863370">space--</span> <span
  m="863940">would</span> <span m="864150">become</span> <span
  m="864600">the</span> <span m="864760">5u</span> <span
  m="865990">squared</span> <span m="866640">and</span> <span
  m="866770">the</span> <span m="866910">3v</span> <span
  m="867720">squared</span> <span m="868740">over</span> <span
  m="869070">the</span> <span m="869190">u</span> <span
  m="869430">squared</span> <span m="869880">plus</span> <span
  m="870180">the</span> <span m="870240">v</span> <span
  m="870300">squared,</span> <span m="871440">but</span> <span
  m="871920">the</span> <span m="872100">W</span> <span m="873180">is</span>
  <span m="873300">0.</span> <span m="873750">So</span> <span
  m="873900">what's</span> <span m="874110">the</span> <span
  m="874230">minimum</span> <span m="874650">of</span> <span
  m="874740">that?</span></p><p><span m="875560">AUDIENCE:</span> <span
  m="875805">3.</span></p><p><span m="876050">GILBERT STRANG:</span> <span
  m="876180">3.</span> <span m="876920">3.</span> <span m="878190">OK,</span>
  <span m="879060">the</span> <span m="879150">minimum</span> <span
  m="879630">is</span> <span m="879810">3</span> <span m="880470">for</span>
  <span m="880650">this</span> <span m="880980">particular</span> <span
  m="881700">space.</span> <span m="882770">Let</span> <span
  m="882820">me</span> <span m="882960">call</span> <span m="883360">it</span>
  <span m="883715">V</span> <span m="884310">special.</span> <span
  m="887040">For</span> <span m="887220">that</span> <span
  m="887430">particular</span> <span m="888090">space,</span> <span
  m="888930">the</span> <span m="889020">minimum</span> <span
  m="889560">is</span> <span m="889770">3,</span> <span
  m="891270">correct?</span> <span m="892080">Everybody</span> <span
  m="892440">sees</span> <span m="892800">that.</span> <span
  m="893570">Because</span> <span m="893790">I</span> <span
  m="893880">just</span> <span m="894120">have</span> <span m="894330">u</span>
  <span m="894540">and</span> <span m="894690">v</span> <span
  m="894960">to</span> <span m="895050">play</span> <span
  m="895320">with,</span> <span m="895590">the</span> <span m="895680">5</span>
  <span m="896070">and</span> <span m="896160">the</span> <span
  m="896290">3.</span> <span m="897170">So</span> <span m="897750">if</span>
  <span m="897900">I</span> <span m="898020">put</span> <span
  m="898230">everything</span> <span m="898740">into</span> <span
  m="899010">v,</span> <span m="899250">I</span> <span m="899490">get</span>
  <span m="899700">to</span> <span m="899820">3.</span></p><p><span
  m="900690">And</span> <span m="900810">now,</span> <span m="901800">I</span>
  <span m="901860">take</span> <span m="902130">the</span> <span
  m="902250">maximum.</span> <span m="906870">So</span> <span
  m="907050">the</span> <span m="907140">maximum</span> <span
  m="907800">is</span> <span m="907980">at</span> <span m="908100">least</span>
  <span m="909030">3,</span> <span m="910110">because</span> <span
  m="910530">this</span> <span m="910860">particular</span> <span
  m="911820">choice</span> <span m="912300">of</span> <span m="912390">V</span>
  <span m="913740">gave</span> <span m="913950">me</span> <span
  m="914100">the</span> <span m="914250">answer</span> <span
  m="914640">3.</span> <span m="915750">And</span> <span m="915870">now,</span>
  <span m="916050">I'm</span> <span m="916230">taking</span> <span
  m="916620">the</span> <span m="916710">maximum</span> <span
  m="917370">over</span> <span m="917650">all</span> <span
  m="918360">possible</span> <span m="918990">2D</span> <span
  m="919540">spaces.</span> <span m="920920">And</span> <span
  m="923060">I</span> <span m="923220">got</span> <span m="923460">3</span>
  <span m="923850">for</span> <span m="924090">one</span> <span
  m="924330">of</span> <span m="924390">the</span> <span
  m="924510">possible</span> <span m="925530">spaces</span> <span
  m="925830">of</span> <span m="926130">V.</span> <span m="926460">And</span>
  <span m="926610">I</span> <span m="926670">might</span> <span
  m="927390">get</span> <span m="928050">higher</span> <span
  m="928410">than</span> <span m="928620">3</span> <span m="929010">for</span>
  <span m="929220">some</span> <span m="929490">other</span> <span
  m="929670">one.</span> <span m="929880">But</span> <span
  m="930120">actually</span> <span m="930630">I</span> <span
  m="930780">don't.</span> <span m="932160">The</span> <span
  m="932340">truth</span> <span m="932790">is</span> <span
  m="933060">that</span> <span m="933780">this</span> <span
  m="934590">turns</span> <span m="935010">out</span> <span m="935220">to</span>
  <span m="935340">be</span> <span m="935660">3</span> <span
  m="936750">which</span> <span m="937020">is,</span> <span m="937290">of</span>
  <span m="937350">course,</span> <span m="937800">exactly</span> <span
  m="938340">what</span> <span m="938550">we</span> <span
  m="938700">wanted.</span></p><p><span m="939520">So</span> <span
  m="939600">I'm</span> <span m="939780">saying</span> <span
  m="940260">that</span> <span m="941130">this</span> <span
  m="941550">particular</span> <span m="942450">two-dimensional</span> <span
  m="943350">space,</span> <span m="945350">the</span> <span
  m="945510">minimum</span> <span m="946080">of</span> <span
  m="946680">over</span> <span m="946950">that,</span> <span
  m="947400">minimum,</span> <span m="949260">the</span> <span
  m="949410">minimum</span> <span m="950400">there</span> <span
  m="950820">is</span> <span m="951000">3.</span> <span m="952200">And</span>
  <span m="952320">now,</span> <span m="952560">I</span> <span
  m="952650">maximize</span> <span m="953480">over</span> <span
  m="953780">all</span> <span m="954150">others.</span> <span
  m="955080">And</span> <span m="955560">so</span> <span m="955800">the</span>
  <span m="955980">idea</span> <span m="956430">is</span> <span
  m="956760">that</span> <span m="957870">for</span> <span m="958140">any</span>
  <span m="958380">other</span> <span m="958710">one,</span> <span
  m="960820">the</span> <span m="961200">minimum</span> <span
  m="961770">value</span> <span m="962280">will</span> <span
  m="962490">be</span> <span m="962820">below</span> <span m="963360">3.</span>
  <span m="964320">And,</span> <span m="964470">therefore,</span> <span
  m="964920">when</span> <span m="965130">I</span> <span m="965220">go</span>
  <span m="965460">for</span> <span m="965610">the</span> <span
  m="965700">max</span> <span m="966720">of</span> <span m="966900">the</span>
  <span m="966990">mins,</span> <span m="968160">I</span> <span
  m="968280">get</span> <span m="968860">3.</span> <span m="969695">So</span>
  <span m="970040">I</span> <span m="970140">just</span> <span
  m="970410">repeat</span> <span m="970800">that</span> <span
  m="971100">and</span> <span m="971220">then</span> <span m="971850">be</span>
  <span m="972000">quiet</span> <span m="972330">about</span> <span
  m="972570">this</span> <span m="972780">whole</span> <span
  m="972960">subject.</span></p><p><span m="974910">So</span> <span
  m="975750">it's</span> <span m="975990">a</span> <span
  m="976050">maximum</span> <span m="976830">over</span> <span
  m="977160">subspaces</span> <span m="978420">of</span> <span
  m="978570">a</span> <span m="978660">minimum</span> <span m="979410">of</span>
  <span m="979830">the</span> <span m="979950">Rayleigh</span> <span
  m="980340">quotient.</span> <span m="981540">If</span> <span
  m="981810">that</span> <span m="982050">subspace</span> <span
  m="982680">is</span> <span m="982860">exactly</span> <span
  m="983430">the</span> <span m="983550">perfect</span> <span
  m="984000">choice,</span> <span m="985230">this</span> <span
  m="985470">one,</span> <span m="986130">I</span> <span m="986250">get</span>
  <span m="986850">the</span> <span m="986970">value</span> <span
  m="987390">3.</span> <span m="988410">And</span> <span m="988560">I'm</span>
  <span m="988710">claiming</span> <span m="989160">that's</span> <span
  m="989490">the</span> <span m="989640">biggest</span> <span
  m="990060">value</span> <span m="990480">I</span> <span m="990630">can</span>
  <span m="990870">get,</span> <span m="991640">because</span> <span
  m="991860">if</span> <span m="992010">I</span> <span m="992160">pick</span>
  <span m="992460">any</span> <span m="992700">other</span> <span
  m="992970">subspace--</span> <span m="993840">what</span> <span
  m="994060">if</span> <span m="994200">I</span> <span m="994320">picked</span>
  <span m="994770">a</span> <span m="994860">subspace</span> <span
  m="996470">that--</span> <span m="997200">suppose</span> <span
  m="999180">another</span> <span m="999690">v</span> <span
  m="1002780">would</span> <span m="1002960">be</span> <span
  m="1003440">all</span> <span m="1003830">vectors</span> <span
  m="1005040">0,</span> <span m="1005480">v,</span> <span m="1005840">w.</span>
  <span m="1009940">What</span> <span m="1010170">would</span> <span
  m="1012510">I</span> <span m="1012630">get</span> <span m="1013500">for</span>
  <span m="1013700">the</span> <span m="1013800">minimum</span> <span
  m="1014340">of</span> <span m="1014520">this</span> <span
  m="1014820">thing?</span> <span m="1016130">But</span> <span
  m="1016230">now</span> <span m="1016560">w</span> <span m="1016970">is</span>
  <span m="1017160">in</span> <span m="1017280">the</span> <span
  m="1017370">picture</span> <span m="1018740">and</span> <span
  m="1018900">u</span> <span m="1019200">is</span> <span m="1019350">not</span>
  <span m="1019650">in</span> <span m="1019740">the</span> <span
  m="1019860">picture.</span> <span m="1020740">What</span> <span
  m="1021120">I</span> <span m="1021240">get</span> <span m="1021420">for</span>
  <span m="1021570">the</span> <span m="1021660">minimum</span> <span
  m="1022110">there?</span></p><p><span m="1022755">AUDIENCE:</span> <span
  m="1022957">1.</span></p><p><span m="1023160">GILBERT STRANG:</span> <span
  m="1023340">1.</span> <span m="1023820">I'd</span> <span
  m="1023970">get</span> <span m="1024180">1.</span> <span
  m="1025089">The</span> <span m="1025260">minimum</span> <span
  m="1025770">would</span> <span m="1025980">be</span> <span
  m="1026280">when</span> <span m="1026490">I</span> <span
  m="1026609">put</span> <span m="1026849">everything</span> <span
  m="1027329">into</span> <span m="1027460">w</span> <span
  m="1028010">and</span> <span m="1028140">I</span> <span m="1028230">got</span>
  <span m="1028500">one.</span> <span m="1029220">And</span> <span
  m="1029339">then</span> <span m="1029520">when</span> <span
  m="1029700">I</span> <span m="1029790">take</span> <span
  m="1030030">the</span> <span m="1030130">max,</span> <span
  m="1031109">it's</span> <span m="1031290">not</span> <span
  m="1031560">a</span> <span m="1031619">winner.</span> <span
  m="1032130">It's</span> <span m="1032310">thrown</span> <span
  m="1032700">out.</span> <span m="1033750">The</span> <span
  m="1033869">winner</span> <span m="1034260">will</span> <span
  m="1034589">be</span> <span m="1035099">the</span> <span
  m="1036700">that</span> <span m="1036960">space</span> <span
  m="1037800">and</span> <span m="1038010">the</span> <span
  m="1038099">3.</span> <span m="1039040">So</span> <span m="1039329">I</span>
  <span m="1039599">guess</span> <span m="1039900">I'm</span> <span
  m="1040050">hoping</span> <span m="1041430">that</span> <span
  m="1041579">you</span> <span m="1041730">sort</span> <span
  m="1042000">of</span> <span m="1042089">see</span> <span m="1042390">in</span>
  <span m="1042510">this</span> <span m="1042690">small</span> <span
  m="1043050">example</span> <span m="1044190">that</span> <span
  m="1044760">you</span> <span m="1045180">can</span> <span
  m="1045720">express</span> <span m="1046319">this</span> <span
  m="1047460">middle</span> <span m="1048000">saddle</span> <span
  m="1048540">value</span> <span m="1049890">as--</span> <span
  m="1051990">it's</span> <span m="1052200">reasonable</span> <span
  m="1052630">to</span> <span m="1052680">think</span> <span
  m="1052980">of</span> <span m="1053100">it</span> <span m="1053250">as</span>
  <span m="1053460">a</span> <span m="1053550">maximum</span> <span
  m="1054150">in</span> <span m="1054300">some</span> <span
  m="1054570">directions</span> <span m="1055200">and</span> <span
  m="1055350">a</span> <span m="1055410">minimum</span> <span
  m="1055890">in</span> <span m="1056010">another.</span></p><p><span
  m="1056880">Think</span> <span m="1057150">of</span> <span
  m="1057300">the--</span> <span m="1058170">well,</span> <span
  m="1058500">try</span> <span m="1058830">to</span> <span
  m="1058950">think</span> <span m="1059310">of</span> <span
  m="1059430">some</span> <span m="1060180">surface,</span> <span
  m="1062120">which</span> <span m="1062380">is</span> <span
  m="1062680">going</span> <span m="1063430">up</span> <span
  m="1064240">in</span> <span m="1064420">some</span> <span
  m="1064720">direction.</span> <span m="1065370">So</span> <span
  m="1065590">it's</span> <span m="1065770">a</span> <span
  m="1065830">minimum</span> <span m="1066370">in</span> <span
  m="1066460">those</span> <span m="1066760">directions.</span> <span
  m="1067960">And</span> <span m="1068110">it's</span> <span
  m="1068280">going</span> <span m="1068590">down</span> <span
  m="1069340">in</span> <span m="1069520">other</span> <span
  m="1069760">directions.</span> <span m="1070360">So</span> <span
  m="1070510">it's</span> <span m="1070630">a</span> <span
  m="1070690">max</span> <span m="1071320">in</span> <span
  m="1071440">those</span> <span m="1071710">directions.</span> <span
  m="1072940">And</span> <span m="1073900">saddle</span> <span
  m="1074250">points</span> <span m="1074700">is</span> <span
  m="1075250">perched</span> <span m="1075730">in</span> <span
  m="1075910">there</span> <span m="1077500">right</span> <span
  m="1077800">at</span> <span m="1077920">that</span> <span
  m="1079360">place,</span> <span m="1079960">at</span> <span
  m="1080110">the</span> <span m="1080230">saddle</span> <span
  m="1080710">point.</span> <span m="1082150">You</span> <span
  m="1082290">know,</span> <span m="1082490">if</span> <span
  m="1082700">you're</span> <span m="1082930">like</span> <span
  m="1083200">hiking</span> <span m="1083710">from</span> <span
  m="1083950">here</span> <span m="1084220">to</span> <span
  m="1084760">California</span> <span m="1085480">or</span> <span
  m="1085570">something,</span> <span m="1087090">you're</span> <span
  m="1087210">going</span> <span m="1087350">to</span> <span
  m="1087490">pass</span> <span m="1087850">a</span> <span
  m="1087910">saddle</span> <span m="1088300">point.</span></p><p><span
  m="1089290">Actually,</span> <span m="1089830">you</span> <span
  m="1089980">see</span> <span m="1090280">it</span> <span m="1090430">on</span>
  <span m="1090550">the</span> <span m="1090670">Mass--</span> <span
  m="1091290">the</span> <span m="1091360">Mass</span> <span
  m="1091690">Pike</span> <span m="1092340">has</span> <span
  m="1092560">an</span> <span m="1092680">amazing</span> <span
  m="1093700">little</span> <span m="1094990">sign.</span> <span
  m="1096970">I</span> <span m="1097030">don't</span> <span
  m="1097180">know</span> <span m="1097360">if</span> <span
  m="1097510">you've</span> <span m="1098320">noticed</span> <span
  m="1098800">it.</span> <span m="1099160">If</span> <span
  m="1099340">you</span> <span m="1099490">drive</span> <span
  m="1099850">west</span> <span m="1100240">on</span> <span
  m="1100390">the</span> <span m="1100480">Mass</span> <span
  m="1100810">Pike,</span> <span m="1102160">pretty</span> <span
  m="1102460">far</span> <span m="1103030">west</span> <span
  m="1103600">of</span> <span m="1103990">Boston,</span> <span
  m="1105040">there's</span> <span m="1105170">a</span> <span
  m="1105300">little</span> <span m="1105430">sign</span> <span
  m="1105950">telling</span> <span m="1106750">you</span> <span
  m="1106810">the</span> <span m="1106990">altitude</span> <span
  m="1107710">or</span> <span m="1107950">elevation,</span> <span
  m="1108610">whatever.</span> <span m="1109490">And</span> <span
  m="1110380">it</span> <span m="1110500">says</span> <span
  m="1110860">there</span> <span m="1111180">this</span> <span
  m="1111460">is</span> <span m="1111610">the</span> <span
  m="1111700">highest</span> <span m="1112180">point</span> <span
  m="1113290">until</span> <span m="1113680">you</span> <span
  m="1113830">reach</span> <span m="1114250">the</span> <span
  m="1114400">Rockies</span> <span m="1115000">basically.</span> <span
  m="1116380">I'd</span> <span m="1116530">say</span> <span
  m="1116800">like,</span> <span m="1117210">OK,</span> <span
  m="1118870">Midwest</span> <span m="1119410">is</span> <span
  m="1119560">pretty</span> <span m="1119860">flat,</span> <span
  m="1120460">right?</span> <span m="1124980">Because</span> <span
  m="1125210">that's</span> <span m="1125440">a</span> <span
  m="1125530">long</span> <span m="1125860">way</span> <span
  m="1126070">away.</span> <span m="1126280">You</span> <span
  m="1126700">don't</span> <span m="1126850">think</span> <span
  m="1127030">of</span> <span m="1127150">Massachusetts</span> <span
  m="1127890">as</span> <span m="1128050">like</span> <span
  m="1128650">really</span> <span m="1129220">in</span> <span
  m="1129410">the</span> <span m="1129790">big</span> <span
  m="1130090">league</span> <span m="1130450">with</span> <span
  m="1130690">high</span> <span m="1131550">spots.</span> <span
  m="1132130">But</span> <span m="1132400">there</span> <span
  m="1132730">it</span> <span m="1132850">is.</span> <span
  m="1133570">It's</span> <span m="1133780">the</span> <span
  m="1133870">highest</span> <span m="1134260">one</span> <span
  m="1134500">until</span> <span m="1134830">you</span> <span
  m="1134950">get--</span> <span m="1135650">and</span> <span
  m="1135880">I</span> <span m="1135940">think</span> <span
  m="1136180">it</span> <span m="1136270">tells</span> <span
  m="1136630">you</span> <span m="1136780">where</span> <span
  m="1137500">the</span> <span m="1137620">next</span> <span
  m="1137920">one</span> <span m="1138100">will</span> <span
  m="1138280">be</span> <span m="1138490">in</span> <span
  m="1138640">Colorado.</span></p><p><span m="1139570">Anyway,</span> <span
  m="1141080">those</span> <span m="1141590">highest</span> <span
  m="1142130">points</span> <span m="1144270">tend</span> <span
  m="1145110">to</span> <span m="1145200">be</span> <span
  m="1145440">saddles.</span> <span m="1146130">The</span> <span
  m="1146220">very,</span> <span m="1146740">very</span> <span
  m="1147060">highest</span> <span m="1147450">point--</span> <span
  m="1148570">where's</span> <span m="1149370">that</span> <span
  m="1149610">in</span> <span m="1149760">Alaska</span> <span
  m="1150300">or</span> <span m="1150420">somewhere--</span> <span
  m="1151770">that's</span> <span m="1152160">a</span> <span
  m="1152250">max,</span> <span m="1152940">of</span> <span
  m="1153030">course,</span> <span m="1153880">by</span> <span
  m="1153930">definition.</span> <span m="1155020">But</span> <span
  m="1155160">there</span> <span m="1155340">are</span> <span
  m="1155370">a</span> <span m="1155400">lot</span> <span m="1155640">of</span>
  <span m="1155850">saddle</span> <span m="1156330">points</span> <span
  m="1157380">in</span> <span m="1159390">other</span> <span
  m="1160350">places.</span> <span m="1161370">And</span> <span
  m="1161940">those</span> <span m="1162290">would</span> <span
  m="1162420">be</span> <span m="1162870">maxima</span> <span
  m="1163710">of</span> <span m="1163920">minima</span> <span
  m="1164490">or</span> <span m="1164610">minima</span> <span
  m="1164875">of</span> <span m="1165140">maxima.</span></p><p><span
  m="1165810">Good.</span> <span m="1166200">I'm</span> <span
  m="1167310">stopping</span> <span m="1167820">there.</span> <span
  m="1169250">We</span> <span m="1169400">might</span> <span
  m="1170000">see</span> <span m="1170270">this</span> <span
  m="1170540">again</span> <span m="1171590">when</span> <span
  m="1171830">we</span> <span m="1171980">start</span> <span
  m="1173210">gradient</span> <span m="1173720">descent.</span> <span
  m="1174860">But</span> <span m="1175585">at</span> <span
  m="1175890">least,</span> <span m="1176960">because</span> <span
  m="1177260">saddle</span> <span m="1177590">points</span> <span
  m="1178250">don't</span> <span m="1178670">come</span> <span
  m="1178940">up</span> <span m="1179060">much</span> <span
  m="1179390">in</span> <span m="1180080">teaching</span> <span
  m="1180470">calculus,</span> <span m="1181190">I</span> <span
  m="1181310">thought</span> <span m="1181940">that</span> <span
  m="1182180">was</span> <span m="1182390">good.</span></p><p><span
  m="1182940">OK,</span> <span m="1186160">second</span> <span
  m="1186550">point</span> <span m="1186970">is</span> <span
  m="1188200">models,</span> <span m="1189610">Lab</span> <span
  m="1189880">3,</span> <span m="1192170">and</span> <span
  m="1192650">projects,</span> <span m="1193340">anything</span> <span
  m="1193850">you'd</span> <span m="1194000">like</span> <span
  m="1194270">to</span> <span m="1194390">ask</span> <span
  m="1194750">about</span> <span m="1195120">projects.</span> <span
  m="1196910">So,</span> <span m="1197360">please,</span> <span
  m="1197900">this</span> <span m="1198140">is</span> <span
  m="1198320">your</span> <span m="1198530">chance</span> <span
  m="1199010">to</span> <span m="1199550">ask.</span> <span
  m="1200360">You</span> <span m="1200510">could</span> <span
  m="1200720">also</span> <span m="1201110">ask</span> <span
  m="1201410">by</span> <span m="1201790">email.</span> <span
  m="1204020">If</span> <span m="1204260">you</span> <span
  m="1204380">have</span> <span m="1204770">suggested</span> <span
  m="1205740">or</span> <span m="1205910">idea</span> <span
  m="1206540">for</span> <span m="1206680">our</span> <span
  m="1206750">project,</span> <span m="1208110">let</span> <span
  m="1208160">me</span> <span m="1208700">encourage</span> <span
  m="1209250">you</span> <span m="1209400">or</span> <span m="1210980">a</span>
  <span m="1211160">team</span> <span m="1211760">to</span> <span
  m="1211940">work</span> <span m="1212270">on</span> <span
  m="1212420">it</span> <span m="1213110">or</span> <span
  m="1213320">just</span> <span m="1213620">yourself.</span></p><p><span
  m="1215880">And</span> <span m="1215930">if</span> <span
  m="1216080">you</span> <span m="1216410">want</span> <span
  m="1216890">to</span> <span m="1216950">think,</span> <span
  m="1217390">OK,</span> <span m="1217700">shall</span> <span
  m="1218010">I</span> <span m="1218120">get</span> <span
  m="1218300">some</span> <span m="1218510">feedback</span> <span
  m="1219710">of</span> <span m="1219920">does</span> <span
  m="1220170">this</span> <span m="1220290">sound</span> <span
  m="1220640">sensible?</span> <span m="1221900">Any</span> <span
  m="1222200">suggestions?</span> <span m="1223910">Send</span> <span
  m="1224150">me</span> <span m="1224270">an</span> <span
  m="1224390">email.</span> <span m="1226000">I'd</span> <span
  m="1226270">be</span> <span m="1226550">happy</span> <span
  m="1226940">to--</span> <span m="1227890">of</span> <span
  m="1227970">course,</span> <span m="1228220">I'm</span> <span
  m="1230730">a</span> <span m="1230790">total</span> <span
  m="1231180">beginner</span> <span m="1231900">here,</span> <span
  m="1232110">too.</span> <span m="1232560">When</span> <span
  m="1232740">I</span> <span m="1233340">created</span> <span
  m="1233790">this</span> <span m="1234180">Lab</span> <span
  m="1234570">3,</span> <span m="1237120">I</span> <span m="1237280">was</span>
  <span m="1237790">like</span> <span m="1238060">desperate,</span> <span
  m="1240300">not</span> <span m="1240660">for</span> <span
  m="1240930">model</span> <span m="1241470">1.</span> <span
  m="1242730">For</span> <span m="1242880">model</span> <span
  m="1243270">1,</span> <span m="1244830">have</span> <span
  m="1245010">you</span> <span m="1245160">looked</span> <span
  m="1245430">at--</span> <span m="1247690">it's</span> <span
  m="1248310">reached</span> <span m="1248670">Stellar.</span> <span
  m="1249876">And</span> <span m="1250250">it's</span> <span
  m="1250440">only</span> <span m="1250710">one</span> <span
  m="1251220">printed</span> <span m="1251610">page.</span> <span
  m="1252420">Have</span> <span m="1252510">people</span> <span
  m="1253020">had</span> <span m="1253170">a</span> <span
  m="1253230">look</span> <span m="1253500">at</span> <span
  m="1254460">this?</span></p><p><span m="1255430">So</span> <span
  m="1255570">I'll</span> <span m="1255750">just</span> <span
  m="1256140">repeat</span> <span m="1256710">quickly.</span> <span
  m="1257910">Model</span> <span m="1258360">1</span> <span
  m="1259380">is</span> <span m="1261180">an</span> <span
  m="1261660">example</span> <span m="1262440">where</span> <span
  m="1263940">of</span> <span m="1264180">overfitting.</span> <span
  m="1265590">And</span> <span m="1266040">what's</span> <span
  m="1266370">going</span> <span m="1266670">on</span> <span
  m="1266880">with</span> <span m="1267060">model</span> <span
  m="1267360">1?</span> <span m="1268440">So</span> <span
  m="1268590">model</span> <span m="1268890">1</span> <span
  m="1269190">says</span> <span m="1269580">take--</span> <span
  m="1274490">5</span> <span m="1275030">would</span> <span
  m="1275180">be</span> <span m="1275330">enough,</span> <span
  m="1275940">but</span> <span m="1276410">I</span> <span
  m="1276530">probably</span> <span m="1276890">said</span> <span
  m="1277190">10</span> <span m="1277640">or</span> <span
  m="1277820">something.</span> <span m="1278420">So</span> <span
  m="1278630">I'll</span> <span m="1278690">make</span> <span
  m="1278990">it</span> <span m="1279080">six</span> <span
  m="1280100">points.</span> <span m="1281450">And</span> <span
  m="1281960">put</span> <span m="1286090">a</span> <span
  m="1286160">curve</span> <span m="1286490">through</span> <span
  m="1286760">them.</span> <span m="1289330">So</span> <span
  m="1289810">if</span> <span m="1289960">you</span> <span
  m="1290050">put</span> <span m="1290350">a</span> <span
  m="1290410">curve--</span> <span m="1291780">and</span> <span
  m="1292090">the</span> <span m="1292270">curve</span> <span
  m="1292600">is</span> <span m="1292720">going</span> <span
  m="1292810">to</span> <span m="1292990">be</span> <span m="1293140">a</span>
  <span m="1293200">polynomial.</span></p><p><span m="1294940">So</span> <span
  m="1295150">we're</span> <span m="1295300">going</span> <span
  m="1295450">to</span> <span m="1295630">set</span> <span m="1295900">a</span>
  <span m="1296080">fit</span> <span m="1296440">by</span> <span
  m="1299800">polynomial.</span> <span m="1301750">Everybody</span> <span
  m="1302320">knows</span> <span m="1302590">polynomial</span> <span
  m="1303370">is</span> <span m="1303910">C0</span> <span
  m="1304630">plus</span> <span m="1304920">C1x</span> <span
  m="1306580">plus</span> <span m="1307000">whatever</span> <span
  m="1308680">CK</span> <span m="1309055">x</span> <span m="1310366">to</span>
  <span m="1312710">the</span> <span m="1312820">K,</span> <span
  m="1313240">let's</span> <span m="1313450">say.</span> <span
  m="1316480">For</span> <span m="1316900">K</span> <span
  m="1317380">equals</span> <span m="1319030">0--</span> <span
  m="1320470">well,</span> <span m="1320740">I</span> <span
  m="1320830">don't</span> <span m="1321040">know</span> <span
  m="1321190">if</span> <span m="1321310">I</span> <span m="1321430">even</span>
  <span m="1321700">ask</span> <span m="1322000">0.</span> <span
  m="1322780">That</span> <span m="1322960">would</span> <span
  m="1323110">be</span> <span m="1323290">the</span> <span
  m="1323440">best</span> <span m="1323680">straight</span> <span
  m="1324100">line.</span> <span m="1324640">That</span> <span
  m="1324790">would</span> <span m="1325240">run</span> <span
  m="1325510">along</span> <span m="1325870">the</span> <span
  m="1326020">average.</span></p><p><span m="1327190">K</span> <span
  m="1327610">equal</span> <span m="1327730">to</span> <span
  m="1327850">1,</span> <span m="1328540">that</span> <span
  m="1328750">would</span> <span m="1328900">be</span> <span
  m="1329140">a</span> <span m="1329230">straight</span> <span
  m="1329680">line</span> <span m="1330040">fit.</span> <span
  m="1331300">And</span> <span m="1331480">you</span> <span
  m="1331570">would</span> <span m="1331780">compute</span> <span
  m="1332290">that</span> <span m="1332650">by</span> <span
  m="1333430">least</span> <span m="1333610">squares,</span> <span
  m="1334900">because</span> <span m="1335140">of</span> <span
  m="1335230">course</span> <span m="1336840">no</span> <span
  m="1337090">straight</span> <span m="1337450">line</span> <span
  m="1337750">is</span> <span m="1337870">going</span> <span
  m="1337980">to</span> <span m="1338110">go</span> <span
  m="1338350">through</span> <span m="1339010">all</span> <span
  m="1339250">the</span> <span m="1339340">points.</span> <span
  m="1339820">You're</span> <span m="1339940">going</span> <span
  m="1340040">to</span> <span m="1340180">have</span> <span
  m="1340330">some</span> <span m="1340630">error</span> <span
  m="1341530">by</span> <span m="1341710">least</span> <span
  m="1342010">squares.</span></p><p><span m="1343120">2</span> <span
  m="1343600">would</span> <span m="1343810">be</span> <span
  m="1344230">fitting</span> <span m="1344740">by</span> <span
  m="1345070">a</span> <span m="1346360">parabola.</span> <span
  m="1347990">Again,</span> <span m="1348440">you'll</span> <span
  m="1348620">have</span> <span m="1348800">some</span> <span
  m="1349100">error,</span> <span m="1349430">but</span> <span
  m="1349640">smaller</span> <span m="1350210">since</span> <span
  m="1350960">parabolas</span> <span m="1351710">include</span> <span
  m="1352490">straight</span> <span m="1352880">lines.</span> <span
  m="1353520">So</span> <span m="1353870">you</span> <span
  m="1354020">can</span> <span m="1354230">only</span> <span
  m="1355040">reduce</span> <span m="1355550">the</span> <span
  m="1356270">total</span> <span m="1356690">sum</span> <span
  m="1356960">of</span> <span m="1357110">squares</span> <span
  m="1357890">error</span> <span m="1358820">by</span> <span
  m="1359120">going</span> <span m="1359450">to</span> <span
  m="1359580">a</span> <span m="1359630">degree</span> <span
  m="1360020">two.</span></p><p><span m="1360800">Degree</span> <span
  m="1361220">3</span> <span m="1362450">and</span> <span m="1362660">up</span>
  <span m="1362810">to--</span> <span m="1363760">how</span> <span
  m="1364400">many</span> <span m="1364610">points</span> <span
  m="1364980">shall</span> <span m="1365090">we</span> <span
  m="1365240">take?</span> <span m="1365480">1,</span> <span
  m="1365780">2--</span> <span m="1366650">let</span> <span
  m="1366770">me</span> <span m="1366950">just</span> <span
  m="1367220">use</span> <span m="1367520">the</span> <span
  m="1367640">same</span> <span m="1367970">letter</span> <span
  m="1368300">I've</span> <span m="1368510">used</span> <span
  m="1368810">here.</span> <span m="1374240">Well,</span> <span
  m="1374480">m</span> <span m="1375440">is</span> <span m="1375620">the</span>
  <span m="1375770">number</span> <span m="1376160">of</span> <span
  m="1376250">points,</span> <span m="1376790">but</span> <span
  m="1377000">m</span> <span m="1377270">varies</span> <span
  m="1378260">between</span> <span m="1379550">1</span> <span
  m="1380180">point</span> <span m="1380660">I</span> <span
  m="1380780">guess</span> <span m="1381260">and</span> <span
  m="1382340">probably</span> <span m="1383780">n</span> <span
  m="1384650">point.</span> <span m="1387230">Maybe</span> <span
  m="1387540">K</span> <span m="1387900">here.</span> <span
  m="1389450">Up</span> <span m="1389630">to</span> <span m="1392210">n--</span>
  <span m="1393740">up</span> <span m="1395390">to</span> <span
  m="1395810">6,</span> <span m="1396360">let's</span> <span
  m="1396440">say.</span> <span m="1399400">And</span> <span
  m="1399500">I</span> <span m="1399620">want</span> <span m="1399770">to</span>
  <span m="1400790">make</span> <span m="1401030">a</span> <span
  m="1401120">comment</span> <span m="1401570">about</span> <span
  m="1402030">6.</span></p><p><span m="1404680">No,</span> <span
  m="1405010">5</span> <span m="1405460">would</span> <span
  m="1405610">do</span> <span m="1405790">it.</span> <span
  m="1407140">Degree</span> <span m="1407530">5</span> <span
  m="1408100">will</span> <span m="1408310">fit</span> <span
  m="1409060">the</span> <span m="1409240">6</span> <span
  m="1409600">points</span> <span m="1409915">that</span> <span
  m="1410230">we've</span> <span m="1410440">got</span> <span
  m="1410650">6</span> <span m="1410980">points</span> <span
  m="1411400">here.</span> <span m="1413260">But</span> <span
  m="1413470">if</span> <span m="1413620">I</span> <span m="1413770">stop</span>
  <span m="1414160">at</span> <span m="1414220">degree</span> <span
  m="1414610">5,</span> <span m="1415180">I</span> <span m="1415270">was</span>
  <span m="1415750">better</span> <span m="1416110">there,</span> <span
  m="1416860">because</span> <span m="1417100">degree</span> <span
  m="1417460">5</span> <span m="1417940">polynomial</span> <span
  m="1418630">also</span> <span m="1419020">has</span> <span
  m="1419170">a</span> <span m="1419230">constant</span> <span
  m="1419800">term.</span> <span m="1420640">So</span> <span
  m="1420820">it</span> <span m="1420940">really</span> <span
  m="1421210">has</span> <span m="1421390">six</span> <span
  m="1421840">coefficients.</span> <span m="1423070">So</span> <span
  m="1424120">there</span> <span m="1424250">is</span> <span
  m="1424360">a</span> <span m="1424420">1</span> <span
  m="1424810">degree</span> <span m="1425290">5</span> <span
  m="1425830">polynomial</span> <span m="1427390">with</span> <span
  m="1427630">six</span> <span m="1428200">numbers,</span> <span
  m="1428760">six</span> <span m="1429160">coefficients,</span> <span
  m="1430210">that</span> <span m="1430360">goes</span> <span
  m="1430690">through</span> <span m="1430960">those</span> <span
  m="1431230">six</span> <span m="1431590">points.</span> <span
  m="1433040">And</span> <span m="1433550">so</span> <span
  m="1433730">it's</span> <span m="1433910">a</span> <span
  m="1433940">perfect</span> <span m="1434480">fit.</span> <span
  m="1435760">That</span> <span m="1435880">would</span> <span
  m="1436030">be</span> <span m="1436210">an</span> <span
  m="1436270">exact</span> <span m="1436840">fit</span> <span
  m="1437290">of</span> <span m="1437440">the</span> <span
  m="1437560">data.</span></p><p><span m="1438650">So</span> <span
  m="1438730">here's</span> <span m="1439030">the</span> <span
  m="1439150">data.</span> <span m="1440500">Create</span> <span
  m="1440950">a</span> <span m="1441040">polynomial</span> <span
  m="1442330">of</span> <span m="1442480">degree</span> <span
  m="1442930">5</span> <span m="1443680">that</span> <span
  m="1443830">goes</span> <span m="1444130">through</span> <span
  m="1444460">those</span> <span m="1444760">points</span> <span
  m="1445150">exactly.</span> <span m="1446140">And</span> <span
  m="1446320">look</span> <span m="1446590">at</span> <span
  m="1446710">the</span> <span m="1446810">result.</span> <span
  m="1447810">And</span> <span m="1447980">what</span> <span
  m="1448970">would</span> <span m="1449200">you</span> <span
  m="1449350">see</span> <span m="1449680">if</span> <span
  m="1449830">you</span> <span m="1449980">look</span> <span
  m="1450220">at</span> <span m="1450310">the</span> <span
  m="1450430">result?</span> <span m="1452210">Would</span> <span
  m="1452420">it</span> <span m="1452510">be</span> <span
  m="1453050">smooth?</span> <span m="1453710">Of</span> <span
  m="1453830">course,</span> <span m="1454760">it's</span> <span
  m="1454940">a</span> <span m="1455000">polynomial.</span></p><p><span
  m="1456380">Would</span> <span m="1456590">it</span> <span
  m="1456770">be</span> <span m="1457130">nice?</span> <span
  m="1458940">No,</span> <span m="1459480">it</span> <span
  m="1459580">will</span> <span m="1459700">be</span> <span
  m="1459940">horrible.</span> <span m="1461290">To</span> <span
  m="1461470">get</span> <span m="1461740">through</span> <span
  m="1462040">those</span> <span m="1462400">points--</span> <span
  m="1464460">did</span> <span m="1464670">I</span> <span m="1464820">get</span>
  <span m="1465060">six</span> <span m="1465410">points?</span> <span
  m="1466090">Yeah.</span> <span m="1466830">To</span> <span
  m="1466950">get</span> <span m="1467160">through</span> <span
  m="1467730">those</span> <span m="1468060">points,</span> <span
  m="1469410">I'm</span> <span m="1469710">guessing</span> <span
  m="1470250">that</span> <span m="1470400">that</span> <span
  m="1470910">fifth</span> <span m="1471270">degree</span> <span
  m="1471660">polynomial,</span> <span m="1472380">the</span> <span
  m="1472470">perfect</span> <span m="1473010">fit,</span> <span
  m="1473760">is</span> <span m="1474090">an</span> <span
  m="1474240">example</span> <span m="1474930">that</span> <span
  m="1475140">occurs</span> <span m="1475560">to</span> <span
  m="1475680">practically</span> <span m="1476400">everybody</span> <span
  m="1477540">of</span> <span m="1478170">overfitting,</span> <span
  m="1479530">because</span> <span m="1480900">making</span> <span
  m="1481320">that</span> <span m="1481500">decision,</span> <span
  m="1482190">perfect</span> <span m="1482790">fit,</span> <span
  m="1483180">learn</span> <span m="1483550">the</span> <span
  m="1484650">data,</span> <span m="1485100">training</span> <span
  m="1485610">data</span> <span m="1485990">exactly</span> <span
  m="1487590">will</span> <span m="1487890">send</span> <span
  m="1488240">a</span> <span m="1488310">polynomial--</span> <span
  m="1489960">I</span> <span m="1490050">don't</span> <span
  m="1490200">know</span> <span m="1490350">what</span> <span
  m="1490560">it</span> <span m="1490650">looks</span> <span
  m="1490950">like.</span> <span m="1492510">I</span> <span
  m="1492600">don't</span> <span m="1492810">want</span> <span
  m="1493050">to--</span> <span m="1493330">well,</span> <span
  m="1493530">I</span> <span m="1493620">do</span> <span m="1493800">want</span>
  <span m="1494070">to</span> <span m="1494160">know,</span> <span
  m="1494430">but</span> <span m="1494610">not</span> <span
  m="1495240">right</span> <span m="1495480">now.</span> <span
  m="1495720">Anyway,</span> <span m="1496450">craziness.</span></p><p><span
  m="1499870">And,</span> <span m="1500290">of</span> <span
  m="1500410">course,</span> <span m="1500800">I'm</span> <span
  m="1501220">going</span> <span m="1501400">to</span> <span
  m="1501550">ask--</span> <span m="1503500">it</span> <span
  m="1503590">doesn't</span> <span m="1503860">look</span> <span
  m="1504040">like</span> <span m="1504250">that</span> <span
  m="1504550">probably--</span> <span m="1506290">I'm</span> <span
  m="1506470">going</span> <span m="1506610">to</span> <span
  m="1506680">ask</span> <span m="1507310">you</span> <span
  m="1507680">to</span> <span m="1508000">plot</span> <span
  m="1508420">the</span> <span m="1508540">results.</span> <span
  m="1509380">Well,</span> <span m="1509695">what's</span> <span
  m="1510010">the</span> <span m="1510160">least</span> <span
  m="1510460">squares</span> <span m="1510970">error</span> <span
  m="1511870">when</span> <span m="1512080">you</span> <span
  m="1512290">fit</span> <span m="1512470">by</span> <span m="1512710">a</span>
  <span m="1512740">straight</span> <span m="1513070">line?</span> <span
  m="1514060">When</span> <span m="1514210">you</span> <span
  m="1514390">fit</span> <span m="1515380">by</span> <span
  m="1515590">horizontal</span> <span m="1516310">line,</span> <span
  m="1516930">a</span> <span m="1517000">constant,</span> <span
  m="1517990">fit</span> <span m="1518200">by</span> <span m="1518380">a</span>
  <span m="1518410">straight</span> <span m="1518830">line,</span> <span
  m="1519400">move</span> <span m="1519610">up</span> <span
  m="1519760">to</span> <span m="1519850">parabolas,</span> <span
  m="1520590">move</span> <span m="1520840">up</span> <span
  m="1520990">to</span> <span m="1521090">a</span> <span
  m="1521130">cubics?</span></p><p><span m="1522010">But</span> <span
  m="1522220">when</span> <span m="1522430">you</span> <span
  m="1522640">hit</span> <span m="1523750">this,</span> <span
  m="1525160">you're</span> <span m="1525310">not</span> <span
  m="1525460">making</span> <span m="1525820">any</span> <span
  m="1526120">error</span> <span m="1526450">at</span> <span
  m="1526600">all.</span> <span m="1527200">You're</span> <span
  m="1527590">not</span> <span m="1527830">really</span> <span
  m="1528880">needing</span> <span m="1529270">to</span> <span
  m="1529390">use</span> <span m="1529650">least</span> <span
  m="1529910">squares.</span> <span m="1530470">You</span> <span
  m="1530590">can</span> <span m="1531040">solve</span> <span
  m="1531580">Ax</span> <span m="1532090">equals</span> <span
  m="1532370">B.</span> <span m="1533200">Ac</span> <span
  m="1534580">equal</span> <span m="1534700">b.</span> <span
  m="1536600">So</span> <span m="1537460">this</span> <span
  m="1537670">is</span> <span m="1537820">the</span> <span m="1537970">b</span>
  <span m="1538960">thing.</span> <span m="1540040">And</span> <span
  m="1540160">c</span> <span m="1540550">is</span> <span m="1540790">the</span>
  <span m="1541480">vector</span> <span m="1542020">of</span> <span
  m="1544450">coefficients.</span> <span m="1546070">And</span> <span
  m="1546530">the</span> <span m="1546670">matrix</span> <span
  m="1547270">A</span> <span m="1547720">is</span> <span m="1549310">bad</span>
  <span m="1549640">news</span> <span m="1550330">when</span> <span
  m="1551010">it's</span> <span m="1551310">a</span> <span m="1552490">6</span>
  <span m="1553080">by</span> <span m="1553270">6,</span> <span
  m="1553850">when</span> <span m="1553980">you</span> <span
  m="1554050">get</span> <span m="1554260">up</span> <span m="1554380">to</span>
  <span m="1554590">a</span> <span m="1554680">complete</span> <span
  m="1555250">fit.</span></p><p><span m="1555970">And</span> <span
  m="1556330">I</span> <span m="1556420">guess</span> <span
  m="1556870">what</span> <span m="1557140">I</span> <span
  m="1557230">wanted</span> <span m="1557620">just</span> <span
  m="1558070">to</span> <span m="1558250">see</span> <span
  m="1558640">is--</span> <span m="1560080">a</span> <span
  m="1560110">lot</span> <span m="1560350">of</span> <span
  m="1560410">things</span> <span m="1560870">I</span> <span
  m="1560890">don't</span> <span m="1561160">know,</span> <span
  m="1561880">like</span> <span m="1562990">suppose</span> <span
  m="1563470">I</span> <span m="1563590">change</span> <span
  m="1564040">six</span> <span m="1564430">to</span> <span m="1564610">20</span>
  <span m="1565120">or</span> <span m="1565240">something.</span> <span
  m="1566740">Then</span> <span m="1566980">I'm</span> <span
  m="1567250">pretty</span> <span m="1567610">sure</span> <span
  m="1568030">that</span> <span m="1568680">out</span> <span
  m="1569290">there</span> <span m="1569560">at</span> <span
  m="1569710">18,</span> <span m="1570320">19,</span> <span
  m="1570890">20,</span> <span m="1571660">this</span> <span
  m="1572230">thing</span> <span m="1572590">is</span> <span
  m="1572770">really</span> <span m="1573220">off</span> <span
  m="1573490">the</span> <span m="1573610">map.</span> <span
  m="1574000">And</span> <span m="1574120">you</span> <span
  m="1574270">could</span> <span m="1578110">compute</span> <span
  m="1578590">its</span> <span m="1578830">max</span> <span
  m="1580270">and</span> <span m="1580750">you'd</span> <span
  m="1580990">see</span> <span m="1581230">a</span> <span
  m="1581320">very</span> <span m="1581770">big</span> <span
  m="1582040">number.</span> <span m="1584020">But,</span> <span
  m="1584230">of</span> <span m="1584320">course,</span> <span
  m="1584590">for</span> <span m="1584740">a</span> <span
  m="1584800">straight</span> <span m="1585130">line,</span> <span
  m="1585670">that</span> <span m="1585880">would</span> <span
  m="1586000">be</span> <span m="1586180">pretty</span> <span
  m="1587050">safe.</span> <span m="1588690">The</span> <span
  m="1588840">slope</span> <span m="1589350">would</span> <span
  m="1589740">be</span> <span m="1590280">pretty</span> <span
  m="1590580">moderate.</span></p><p><span m="1592820">And</span> <span
  m="1592970">I</span> <span m="1593120">don't</span> <span
  m="1593300">know</span> <span m="1593630">where</span> <span
  m="1594350">you--</span> <span m="1596100">so</span> <span
  m="1596330">that's</span> <span m="1596570">probably</span> <span
  m="1596960">underfitting</span> <span m="1598520">to</span> <span
  m="1598670">try</span> <span m="1598970">to</span> <span
  m="1599270">fit</span> <span m="1599540">this</span> <span
  m="1599840">by</span> <span m="1600080">a</span> <span
  m="1600140">straight</span> <span m="1600500">line.</span> <span
  m="1601310">It's</span> <span m="1601880">not</span> <span
  m="1602150">as</span> <span m="1602300">close</span> <span
  m="1602720">as</span> <span m="1602900">you</span> <span
  m="1603050">would</span> <span m="1603260">want.</span> <span
  m="1604250">But</span> <span m="1605030">fitting</span> <span
  m="1605390">by</span> <span m="1605630">a</span> <span m="1605720">full</span>
  <span m="1606740">perfect</span> <span m="1607220">filling,</span> <span
  m="1607950">a</span> <span m="1608390">high</span> <span
  m="1608720">degree</span> <span m="1609080">polynomial,</span> <span
  m="1609830">is</span> <span m="1609950">certainly</span> <span
  m="1610460">overfitting.</span> <span m="1611530">Where</span> <span
  m="1612110">is</span> <span m="1612260">the</span> <span
  m="1612380">boundary?</span> <span m="1612990">I'm</span> <span
  m="1613340">sure</span> <span m="1613580">people</span> <span
  m="1613970">know</span> <span m="1614240">about</span> <span
  m="1614540">this,</span> <span m="1614850">but</span> <span
  m="1615080">I</span> <span m="1615920">think</span> <span
  m="1616190">it</span> <span m="1617060">is</span> <span
  m="1617210">something</span> <span m="1617630">we</span> <span
  m="1617810">could</span> <span m="1617990">learn</span> <span
  m="1618350">from.</span> <span m="1620720">So</span> <span
  m="1621170">that's</span> <span m="1621470">what</span> <span
  m="1621680">that</span> <span m="1622490">model</span> <span
  m="1622850">1</span> <span m="1623180">is</span> <span
  m="1623360">about.</span></p><p><span m="1624560">And</span> <span
  m="1624860">just</span> <span m="1625190">to</span> <span
  m="1625340">make</span> <span m="1625580">one</span> <span
  m="1625850">final</span> <span m="1626210">comment,</span> <span
  m="1626960">that</span> <span m="1627170">matrix</span> <span
  m="1627740">A</span> <span m="1628070">has</span> <span m="1628370">a</span>
  <span m="1628460">name</span> <span m="1629540">in</span> <span
  m="1629750">the</span> <span m="1629900">case</span> <span
  m="1630440">where</span> <span m="1632870">it's</span> <span
  m="1633080">a</span> <span m="1633140">square</span> <span
  m="1633560">matrix,</span> <span m="1634190">where</span> <span
  m="1634340">you're</span> <span m="1634520">fitting</span> <span
  m="1635330">exactly--</span> <span m="1636980">interpolating</span> <span
  m="1638210">would</span> <span m="1638540">be</span> <span
  m="1638720">the</span> <span m="1638840">word.</span> <span
  m="1639200">So</span> <span m="1640880">that</span> <span
  m="1641630">exact</span> <span m="1642170">fit,</span> <span
  m="1646793">that</span> <span m="1647260">corresponds</span> <span
  m="1648010">to</span> <span m="1648190">square</span> <span
  m="1649090">matrix</span> <span m="1649690">A.</span> <span
  m="1653529">And</span> <span m="1654030">the</span> <span
  m="1654360">word</span> <span m="1654840">for</span> <span
  m="1655140">it</span> <span m="1655260">is</span> <span
  m="1655620">interpolation.</span> <span m="1661960">And</span> <span
  m="1662800">I</span> <span m="1662920">guess</span> <span
  m="1663280">it's</span> <span m="1663730">Lagrange</span> <span
  m="1664660">again.</span> <span m="1667050">Seeing</span> <span
  m="1667420">that</span> <span m="1668140">guy</span> <span
  m="1668860">too</span> <span m="1669130">often</span> <span
  m="1669520">here.</span> <span m="1670280">So</span> <span
  m="1670360">it</span> <span m="1670420">would</span> <span
  m="1670510">be</span> <span m="1670750">Lagrange</span> <span
  m="1671390">interpretation.</span></p><p><span m="1672220">But</span> <span
  m="1672400">the</span> <span m="1673870">matrix</span> <span
  m="1674530">has</span> <span m="1674830">a</span> <span
  m="1674920">different</span> <span m="1675400">name.</span> <span
  m="1675940">And</span> <span m="1676030">whose</span> <span
  m="1676330">name</span> <span m="1676690">is</span> <span
  m="1676840">associated</span> <span m="1677590">with</span> <span
  m="1677800">that</span> <span m="1678010">matrix?</span></p><p><span
  m="1679256">AUDIENCE:</span> <span m="1679365">Vandermonde.</span></p><p><span
  m="1679692">GILBERT STRANG:</span> <span m="1679911">Vandermonde.</span> <span
  m="1681300">Vandermonde.</span> <span m="1682670">So</span> <span
  m="1682850">this</span> <span m="1683120">is</span> <span
  m="1683300">the</span> <span m="1683420">square</span> <span
  m="1683840">matrix,</span> <span m="1684470">which</span> <span
  m="1684740">was--</span> <span m="1686720">so</span> <span
  m="1686930">let</span> <span m="1687050">me</span> <span
  m="1687200">write</span> <span m="1687440">it.</span> <span
  m="1688090">It's</span> <span m="1688280">called</span> <span
  m="1688580">a</span> <span m="1688640">Vandermonde</span> <span
  m="1689630">matrix.</span> <span m="1698600">And</span> <span
  m="1698840">it's</span> <span m="1699170">a</span> <span
  m="1699230">matrix</span> <span m="1699850">that</span> <span
  m="1700040">has</span> <span m="1700310">a</span> <span
  m="1701450">crazy</span> <span m="1702080">large</span> <span
  m="1702530">inverse,</span> <span m="1703130">because</span> <span
  m="1703990">just</span> <span m="1704290">as</span> <span
  m="1704540">I'm</span> <span m="1704690">saying,</span> <span
  m="1705620">the</span> <span m="1706610">C</span> <span
  m="1707000">that</span> <span m="1707180">comes</span> <span
  m="1707510">out</span> <span m="1707780">from</span> <span
  m="1707990">the</span> <span m="1708110">perfect</span> <span
  m="1708650">fit,</span> <span m="1709010">from</span> <span
  m="1709280">the</span> <span m="1709400">interpolation,</span> <span
  m="1710660">from</span> <span m="1710870">the</span> <span
  m="1710990">square</span> <span m="1711380">matrix,</span> <span
  m="1712430">the</span> <span m="1712550">C</span> <span m="1712850">is</span>
  <span m="1713090">going</span> <span m="1713180">to</span> <span
  m="1713360">be</span> <span m="1713540">giant.</span> <span
  m="1715280">And</span> <span m="1715910">so</span> <span
  m="1721040">you</span> <span m="1721250">will</span> <span
  m="1721490">construct</span> <span m="1722150">a</span> <span
  m="1722210">matrix,</span> <span m="1722810">of</span> <span
  m="1722930">course,</span> <span m="1723670">to</span> <span
  m="1723830">do</span> <span m="1724100">this,</span> <span
  m="1724910">and</span> <span m="1725210">it</span> <span
  m="1725330">will</span> <span m="1725600">be</span> <span
  m="1725900">identical</span> <span m="1726650">to</span> <span
  m="1726860">the--</span> <span m="1728900">so</span> <span
  m="1729010">we've</span> <span m="1729250">heard</span> <span
  m="1729490">this</span> <span m="1729790">word</span> <span
  m="1730060">Vandermonde</span> <span m="1730780">matrix</span> <span
  m="1731350">in</span> <span m="1731500">this</span> <span
  m="1731770">class</span> <span m="1732370">within</span> <span
  m="1732760">the</span> <span m="1732850">last</span> <span
  m="1733210">week.</span> <span m="1734380">Anybody</span> <span
  m="1734890">remember</span> <span m="1735400">where</span> <span
  m="1736630">the</span> <span m="1736780">word</span> <span
  m="1737140">Vandermonde</span> <span m="1737920">came</span> <span
  m="1738280">up</span> <span m="1738640">in</span> <span
  m="1739210">class?</span></p><p><span m="1740590">It</span> <span
  m="1740710">was</span> <span m="1740950">in</span> <span
  m="1741130">professor</span> <span m="1741670">Townsend's</span> <span
  m="1742390">lecture.</span> <span m="1743840">So</span> <span
  m="1743950">you</span> <span m="1744100">could</span> <span
  m="1744340">go</span> <span m="1744520">back</span> <span
  m="1744790">to</span> <span m="1744910">that</span> <span
  m="1745120">video</span> <span m="1745570">if</span> <span
  m="1745720">you</span> <span m="1745840">wanted</span> <span
  m="1747070">as</span> <span m="1747340">an</span> <span
  m="1747490">example</span> <span m="1748420">of</span> <span
  m="1748750">a</span> <span m="1749290">matrix</span> <span
  m="1750130">which</span> <span m="1750940">had</span> <span
  m="1751120">a</span> <span m="1751570">horrible</span> <span
  m="1752140">inverse,</span> <span m="1753360">a</span> <span
  m="1754180">giant</span> <span m="1754690">matrix.</span> <span
  m="1755350">The</span> <span m="1755500">Hilbert</span> <span
  m="1755920">matrix</span> <span m="1756460">was</span> <span
  m="1756700">another</span> <span m="1757150">example.</span> <span
  m="1757720">I</span> <span m="1757840">think</span> <span
  m="1758110">he</span> <span m="1758200">did</span> <span
  m="1758440">two</span> <span m="1758740">examples,</span> <span
  m="1759700">Vandermonde</span> <span m="1760390">and</span> <span
  m="1760540">Hilbert.</span></p><p><span m="1761480">So</span> <span
  m="1761760">this</span> <span m="1762270">Vandermonde</span> <span
  m="1762940">matrix--</span> <span m="1763570">I</span> <span
  m="1763690">could</span> <span m="1763870">write</span> <span
  m="1764110">it</span> <span m="1764200">down,</span> <span
  m="1764530">but</span> <span m="1765020">I'll</span> <span
  m="1765980">leave</span> <span m="1766280">that</span> <span
  m="1766440">to</span> <span m="1766600">you--</span> <span
  m="1768170">has</span> <span m="1768570">a</span> <span m="1769240">big</span>
  <span m="1769780">inverse.</span> <span m="1770410">And</span> <span
  m="1770650">its</span> <span m="1772090">eigenvalues--</span> <span
  m="1773370">well,</span> <span m="1773650">no</span> <span
  m="1773890">singular</span> <span m="1774430">values,</span> <span
  m="1774910">because</span> <span m="1775180">it's</span> <span
  m="1775420">not</span> <span m="1775840">symmetric--</span> <span
  m="1777330">it's</span> <span m="1777550">singular</span> <span
  m="1778120">values</span> <span m="1778840">are</span> <span
  m="1779890">way</span> <span m="1780490">scattered.</span> <span
  m="1781450">It</span> <span m="1781540">has</span> <span
  m="1781780">tiny</span> <span m="1782260">little</span> <span
  m="1782560">singular</span> <span m="1783100">values</span> <span
  m="1784060">plus</span> <span m="1784930">an</span> <span
  m="1785380">ordinary</span> <span m="1785990">sized</span> <span
  m="1786280">singular</span> <span m="1786790">values.</span></p><p><span
  m="1787460">So</span> <span m="1787570">that's</span> <span
  m="1787930">the</span> <span m="1788530">example</span> <span
  m="1789610">that</span> <span m="1789760">I</span> <span
  m="1789910">just</span> <span m="1790180">think</span> <span
  m="1790480">you</span> <span m="1790630">could</span> <span
  m="1790840">go</span> <span m="1791110">with.</span> <span
  m="1792220">And</span> <span m="1792370">as</span> <span
  m="1792490">far</span> <span m="1792700">as</span> <span m="1792790">I</span>
  <span m="1792910">can</span> <span m="1793120">see,</span> <span
  m="1794500">sending</span> <span m="1794950">it</span> <span
  m="1795120">to</span> <span m="1795400">auto</span> <span
  m="1795830">grader</span> <span m="1797380">as</span> <span
  m="1797620">a</span> <span m="1797710">Julia</span> <span
  m="1798180">file,</span> <span m="1799270">it</span> <span
  m="1799460">would</span> <span m="1799560">be</span> <span
  m="1799750">even</span> <span m="1799990">worse</span> <span
  m="1800380">than</span> <span m="1800560">usual,</span> <span
  m="1802870">sending</span> <span m="1803290">it</span> <span
  m="1803390">to</span> <span m="1803530">auto</span> <span
  m="1803800">grader.</span> <span m="1805750">I</span> <span
  m="1806110">think</span> <span m="1806300">it</span> <span
  m="1806390">wouldn't</span> <span m="1806650">know</span> <span
  m="1806800">what</span> <span m="1807010">to</span> <span
  m="1807130">do</span> <span m="1807400">as</span> <span m="1807550">far</span>
  <span m="1807730">as</span> <span m="1807880">I</span> <span
  m="1808000">can</span> <span m="1808180">see.</span> <span
  m="1808870">So</span> <span m="1809110">I'm</span> <span
  m="1809320">thinking</span> <span m="1809740">of</span> <span
  m="1810610">submissions</span> <span m="1811570">coming</span> <span
  m="1811960">to</span> <span m="1812140">Gradescope.</span> <span
  m="1813520">And</span> <span m="1814840">I'm</span> <span
  m="1814960">thinking</span> <span m="1815320">of</span> <span
  m="1816010">some</span> <span m="1816250">plots</span> <span
  m="1816850">to</span> <span m="1817030">show</span> <span
  m="1818200">what</span> <span m="1818410">happens</span> <span
  m="1819040">as</span> <span m="1820030">K</span> <span
  m="1820390">increases</span> <span m="1822220">and</span> <span
  m="1824050">some</span> <span m="1824860">tables</span> <span
  m="1825400">of</span> <span m="1825520">data</span> <span
  m="1825880">maybe</span> <span m="1826330">and</span> <span
  m="1826480">then</span> <span m="1826690">maybe</span> <span
  m="1826990">a</span> <span m="1827050">paragraph</span> <span
  m="1827800">of</span> <span m="1829930">conclusion,</span> <span
  m="1830770">like</span> <span m="1832180">what</span> <span
  m="1832630">degree</span> <span m="1833800">is</span> <span
  m="1833950">safe</span> <span m="1834700">and</span> <span
  m="1834880">when</span> <span m="1835210">does</span> <span
  m="1835390">it</span> <span m="1835540">become</span> <span
  m="1835990">risky</span> <span m="1836530">and</span> <span
  m="1836680">when</span> <span m="1836950">does</span> <span
  m="1837190">it</span> <span m="1837280">become</span> <span
  m="1838090">disaster.</span> <span m="1839160">So</span> <span
  m="1839470">stuff</span> <span m="1839890">like</span> <span
  m="1840120">that.</span> <span m="1842230">Really,</span> <span
  m="1842800">these</span> <span m="1843160">are</span> <span
  m="1844690">sort</span> <span m="1844960">of</span> <span
  m="1845080">open-ended</span> <span m="1846610">labs</span> <span
  m="1847350">and</span> <span m="1847990">you</span> <span
  m="1848140">use</span> <span m="1848500">any</span> <span
  m="1849100">language.</span></p><p><span m="1849970">Questions</span> <span
  m="1850540">about</span> <span m="1850900">that</span> <span
  m="1852400">example?</span> <span m="1854560">Which</span> <span
  m="1854730">is</span> <span m="1855270">really</span> <span
  m="1855900">that's</span> <span m="1856350">what</span> <span
  m="1856770">I'm</span> <span m="1857640">expecting</span> <span
  m="1858610">to</span> <span m="1859410">be</span> <span
  m="1859620">ready</span> <span m="1860070">and</span> <span
  m="1862440">quite</span> <span m="1864060">a</span> <span
  m="1864420">good</span> <span m="1864780">example</span> <span
  m="1866610">for</span> <span m="1867840">Wednesday</span> <span
  m="1868380">after</span> <span m="1868680">the</span> <span
  m="1868770">break.</span> <span m="1872500">Question?</span> <span
  m="1873970">Anyway,</span> <span m="1874430">you</span> <span
  m="1874540">can</span> <span m="1874850">email</span> <span
  m="1875470">me.</span> <span m="1877030">You</span> <span
  m="1877570">probably</span> <span m="1877930">see</span> <span
  m="1878200">that</span> <span m="1878650">see</span> <span
  m="1878950">what</span> <span m="1880450">the</span> <span
  m="1880630">model</span> <span m="1881050">looks</span> <span
  m="1881320">like.</span></p><p><span m="1881830">Then</span> <span
  m="1882570">the</span> <span m="1882640">second</span> <span
  m="1883060">one</span> <span m="1883330">I've</span> <span
  m="1885820">taken</span> <span m="1886190">that</span> <span
  m="1886270">first</span> <span m="1886630">jump</span> <span
  m="1887110">into,</span> <span m="1889120">networks.</span> <span
  m="1890470">Made</span> <span m="1890740">a</span> <span
  m="1890830">very</span> <span m="1891250">simple</span> <span
  m="1891700">network</span> <span m="1892330">without</span> <span
  m="1893980">any</span> <span m="1894280">hidden</span> <span
  m="1894670">layers</span> <span m="1895210">at</span> <span
  m="1895330">all</span> <span m="1895690">actually.</span> <span
  m="1896770">And</span> <span m="1897010">just</span> <span
  m="1898690">wrote</span> <span m="1898960">down</span> <span
  m="1899290">what</span> <span m="1899890">I</span> <span
  m="1900010">think</span> <span m="1900340">might</span> <span
  m="1900670">work.</span> <span m="1901240">But</span> <span
  m="1902020">you</span> <span m="1902170">may</span> <span
  m="1902380">find</span> <span m="1903930">that</span> <span
  m="1904140">you</span> <span m="1904260">want</span> <span
  m="1904470">to</span> <span m="1904530">modify</span> <span
  m="1905250">model</span> <span m="1905640">2.</span> <span
  m="1906240">Go</span> <span m="1906480">for</span> <span
  m="1906780">it.</span> <span m="1908310">I</span> <span
  m="1908460">don't</span> <span m="1908730">have</span> <span
  m="1909120">any</span> <span m="1910560">patent</span> <span
  m="1911730">or</span> <span m="1913200">personal</span> <span
  m="1914370">stake</span> <span m="1914970">in</span> <span
  m="1915750">the</span> <span m="1915930">way</span> <span
  m="1916170">model</span> <span m="1916500">2</span> <span
  m="1916740">is</span> <span m="1916890">written.</span></p><p><span
  m="1917410">But</span> <span m="1917520">the</span> <span
  m="1917700">idea</span> <span m="1918210">is</span> <span
  m="1919290">fit</span> <span m="1919560">data--</span> <span
  m="1921850">well,</span> <span m="1922930">start</span> <span
  m="1923290">with</span> <span m="1923470">data,</span> <span
  m="1926240">but</span> <span m="1926380">don't</span> <span
  m="1926590">make</span> <span m="1926830">it</span> <span
  m="1926920">too</span> <span m="1927130">perfect,</span> <span
  m="1928030">because</span> <span m="1930270">we</span> <span
  m="1930660">want</span> <span m="1930930">some</span> <span
  m="1931140">learning</span> <span m="1931600">to</span> <span
  m="1931770">happen</span> <span m="1932160">here.</span> <span
  m="1934830">So</span> <span m="1935040">it's</span> <span
  m="1935300">the</span> <span m="1935430">classification</span> <span
  m="1936540">problem.</span> <span m="1937080">So</span> <span
  m="1937320">it</span> <span m="1937470">won't</span> <span
  m="1937770">be</span> <span m="1940230">least</span> <span
  m="1940590">squares</span> <span m="1941590">with</span> <span
  m="1942660">variables</span> <span m="1943290">like</span> <span
  m="1943590">u</span> <span m="1943800">and</span> <span m="1943950">v</span>
  <span m="1944400">and</span> <span m="1944850">w.</span> <span
  m="1945150">It's</span> <span m="1945360">just</span> <span
  m="1946560">plus</span> <span m="1946860">1</span> <span m="1947100">or</span>
  <span m="1947220">minus</span> <span m="1947640">1,</span> <span
  m="1948300">or</span> <span m="1948600">1,</span> <span m="1948960">0,</span>
  <span m="1949560">or</span> <span m="1949800">cat</span> <span
  m="1950160">and</span> <span m="1950280">dog,</span> <span
  m="1950700">whatever</span> <span m="1951570">that</span> <span
  m="1951720">classification</span> <span m="1952680">is.</span> <span
  m="1952860">So</span> <span m="1953070">that's</span> <span
  m="1953400">the</span> <span m="1953520">basic</span> <span
  m="1955710">problem</span> <span m="1956190">to</span> <span
  m="1956370">start</span> <span m="1956760">with</span> <span
  m="1956990">in</span> <span m="1957120">deep</span> <span
  m="1957420">learning.</span> <span m="1958800">For</span> <span
  m="1959010">quite</span> <span m="1959280">a</span> <span
  m="1959310">long</span> <span m="1959580">time,</span> <span
  m="1959970">that's</span> <span m="1960320">the</span> <span
  m="1960990">natural</span> <span m="1961470">problem.</span></p><p><span
  m="1962220">So</span> <span m="1962400">it's</span> <span m="1962520">a</span>
  <span m="1962580">classification</span> <span m="1963600">problem.</span>
  <span m="1965860">And</span> <span m="1966150">the</span> <span
  m="1967140">description</span> <span m="1967740">here</span> <span
  m="1968970">suggests</span> <span m="1969750">one</span> <span
  m="1970050">way</span> <span m="1970320">to</span> <span
  m="1970440">set</span> <span m="1970770">up</span> <span
  m="1970920">that</span> <span m="1971070">training</span> <span
  m="1971640">data</span> <span m="1972780">and</span> <span
  m="1976770">execute</span> <span m="1979410">a</span> <span
  m="1981030">neural</span> <span m="1981450">net</span> <span
  m="1981900">like</span> <span m="1982560">experiment,</span> <span
  m="1985500">but</span> <span m="1985740">without</span> <span
  m="1986910">getting</span> <span m="1987240">very</span> <span
  m="1987540">far</span> <span m="1987840">away</span> <span
  m="1988140">from</span> <span m="1988920">ordinary</span> <span
  m="1989520">linear</span> <span m="1989910">algebra.</span> <span
  m="1991140">So</span> <span m="1995100">as</span> <span m="1995340">I</span>
  <span m="1995400">say,</span> <span m="1995640">if</span> <span
  m="1995760">you</span> <span m="1995850">want</span> <span
  m="1996040">to</span> <span m="1996180">change</span> <span
  m="1996690">this,</span> <span m="1997500">develop</span> <span
  m="1998010">it</span> <span m="1998130">further,</span> <span
  m="2001760">get</span> <span m="2002000">some</span> <span
  m="2002210">ideas</span> <span m="2002660">about</span> <span
  m="2002990">it,</span> <span m="2003380">that's</span> <span
  m="2004940">what</span> <span m="2005240">the</span> <span
  m="2005420">whole</span> <span m="2005630">point</span> <span
  m="2005990">is</span> <span m="2006250">here.</span></p><p><span
  m="2009500">Actually,</span> <span m="2009830">the</span> <span
  m="2009980">faculty</span> <span m="2010430">meeting</span> <span
  m="2013170">this</span> <span m="2013440">week,</span> <span
  m="2014010">maybe</span> <span m="2014310">today--</span> <span
  m="2015130">what's</span> <span m="2015420">today?</span></p><p><span
  m="2016153">AUDIENCE:</span> <span m="2016324">Wednesday.</span></p><p><span
  m="2016840">GILBERT STRANG:</span> <span m="2016997">Wednesday?</span> <span
  m="2018580">Yeah,</span> <span m="2018880">so</span> <span
  m="2019070">it's</span> <span m="2019220">this</span> <span
  m="2019430">afternoon.</span> <span m="2020780">And</span> <span
  m="2020870">the</span> <span m="2020960">faculty</span> <span
  m="2021410">doesn't</span> <span m="2021860">come</span> <span
  m="2022400">to</span> <span m="2022580">much.</span> <span
  m="2023150">Of</span> <span m="2024090">course,</span> <span
  m="2024380">it's</span> <span m="2024560">late</span> <span
  m="2024860">in</span> <span m="2024980">the</span> <span
  m="2025100">afternoon.</span> <span m="2026090">But</span> <span
  m="2027920">faculty</span> <span m="2028310">meeting</span> <span
  m="2028610">this</span> <span m="2028790">afternoon</span> <span
  m="2029360">is</span> <span m="2029510">about</span> <span
  m="2030480">MIT's</span> <span m="2031460">plans</span> <span
  m="2032150">for</span> <span m="2033920">requirements</span> <span
  m="2034880">or</span> <span m="2035000">courses</span> <span
  m="2035770">in</span> <span m="2036410">computational</span> <span
  m="2037280">thinking.</span> <span m="2038630">And</span> <span
  m="2040040">in</span> <span m="2040190">a</span> <span m="2040250">way,</span>
  <span m="2040490">this</span> <span m="2040790">course</span> <span
  m="2041210">within</span> <span m="2041570">the</span> <span
  m="2041660">math</span> <span m="2041960">department</span> <span
  m="2042470">is</span> <span m="2043310">among</span> <span
  m="2043670">the</span> <span m="2044240">ones</span> <span
  m="2044690">that</span> <span m="2044780">are</span> <span
  m="2045200">in</span> <span m="2045350">that</span> <span
  m="2045590">direction.</span> <span m="2047270">Of</span> <span
  m="2047360">course,</span> <span m="2048440">in</span> <span
  m="2048590">other</span> <span m="2048800">departments,</span> <span
  m="2050179">those</span> <span m="2050480">are</span> <span
  m="2050750">further</span> <span m="2051230">along.</span></p><p><span
  m="2051940">Anyway,</span> <span m="2057230">when</span> <span
  m="2057889">Raj</span> <span m="2058199">Rao</span> <span
  m="2058610">taught</span> <span m="2058940">the</span> <span
  m="2059030">course</span> <span m="2059480">last</span> <span
  m="2060380">spring,</span> <span m="2060889">he</span> <span
  m="2061130">had</span> <span m="2061969">the</span> <span
  m="2062330">Julia</span> <span m="2064010">system</span> <span
  m="2065540">better</span> <span m="2066050">developed.</span> <span
  m="2066739">And</span> <span m="2068440">it</span> <span
  m="2068510">was</span> <span m="2068719">a</span> <span
  m="2068780">chance</span> <span m="2069110">to</span> <span
  m="2069230">bring</span> <span m="2069560">computers</span> <span
  m="2070219">and</span> <span m="2070730">bring</span> <span
  m="2070969">laptops</span> <span m="2071630">and</span> <span
  m="2072350">do</span> <span m="2074480">things</span> <span
  m="2074840">in</span> <span m="2075020">class.</span> <span
  m="2075889">And</span> <span m="2076370">you'll</span> <span
  m="2076550">have</span> <span m="2076699">that</span> <span
  m="2076880">chance</span> <span m="2077239">again</span> <span
  m="2077570">when</span> <span m="2077780">he</span> <span
  m="2077929">visits</span> <span m="2079020">in</span> <span
  m="2079190">a</span> <span m="2079250">month.</span> <span
  m="2081480">OK,</span> <span m="2083210">enough.</span></p><p><span
  m="2084110">And</span> <span m="2085219">I'm</span> <span
  m="2085460">open</span> <span m="2085760">to</span> <span
  m="2085880">questions</span> <span m="2086449">about</span> <span
  m="2087350">the</span> <span m="2087469">project.</span> <span
  m="2088820">Should</span> <span m="2089100">I</span> <span
  m="2089420">maybe</span> <span m="2089780">ask</span> <span
  m="2090290">you</span> <span m="2090409">to</span> <span
  m="2090560">email</span> <span m="2091040">me</span> <span
  m="2091909">a</span> <span m="2092000">rough</span> <span
  m="2092300">idea</span> <span m="2092719">of</span> <span m="2093170">a</span>
  <span m="2093230">project?</span> <span m="2094639">And</span> <span
  m="2095600">tell</span> <span m="2095840">me</span> <span
  m="2096370">if</span> <span m="2096550">you</span> <span
  m="2096639">are</span> <span m="2096800">in</span> <span m="2096949">a</span>
  <span m="2096980">group</span> <span m="2097460">or</span> <span
  m="2097670">if</span> <span m="2097790">you</span> <span
  m="2097970">would</span> <span m="2098180">like</span> <span
  m="2098420">to</span> <span m="2098570">find</span> <span m="2099050">a</span>
  <span m="2099110">group,</span> <span m="2100940">maybe</span> <span
  m="2101780">two</span> <span m="2101990">or</span> <span
  m="2102080">three</span> <span m="2102380">people.</span> <span
  m="2102920">I'm</span> <span m="2103040">not</span> <span
  m="2103220">thinking</span> <span m="2103520">of</span> <span
  m="2103640">groups</span> <span m="2104030">of</span> <span
  m="2104120">50.</span> <span m="2105362">Two</span> <span
  m="2106190">or</span> <span m="2106250">three</span> <span
  m="2106580">would</span> <span m="2106760">be</span> <span
  m="2107990">sensible.</span></p><p><span m="2110820">Questions</span> <span
  m="2111330">about</span> <span m="2111530">projects?</span> <span
  m="2113430">I</span> <span m="2113540">mean,</span> <span m="2113750">I</span>
  <span m="2113900">just</span> <span m="2114200">introduced</span> <span
  m="2115100">this</span> <span m="2115910">idea</span> <span
  m="2116300">of</span> <span m="2116420">our</span> <span
  m="2116510">project,</span> <span m="2117890">and</span> <span
  m="2118130">I</span> <span m="2118220">apologize</span> <span
  m="2118910">for</span> <span m="2122180">not</span> <span
  m="2122390">bringing</span> <span m="2122690">it</span> <span
  m="2122900">up</span> <span m="2123050">the</span> <span
  m="2123170">first</span> <span m="2123530">week.</span> <span
  m="2124400">But</span> <span m="2124520">I</span> <span
  m="2124640">just</span> <span m="2125180">couldn't</span> <span
  m="2125540">see--</span> <span m="2126140">I</span> <span
  m="2126260">don't</span> <span m="2126500">want</span> <span
  m="2126710">to</span> <span m="2126800">do</span> <span
  m="2127100">exams</span> <span m="2127790">on</span> <span
  m="2127940">linear</span> <span m="2128300">algebra.</span> <span
  m="2128840">We</span> <span m="2129530">passed</span> <span
  m="2129860">that</span> <span m="2130070">point.</span> <span
  m="2130520">So</span> <span m="2130880">this</span> <span
  m="2131090">seemed</span> <span m="2131900">the</span> <span
  m="2131990">right</span> <span m="2133280">way</span> <span
  m="2133670">to</span> <span m="2133790">go.</span> <span
  m="2134210">But</span> <span m="2136640">I'm</span> <span
  m="2136790">not</span> <span m="2137000">looking</span> <span
  m="2137360">for</span> <span m="2137570">a</span> <span m="2137940">PhD</span>
  <span m="2138510">thesis</span> <span m="2138930">here.</span> <span
  m="2140830">Questions?</span> <span m="2141520">Thoughts?</span> <span
  m="2144170">I</span> <span m="2144560">guess</span> <span m="2144830">I</span>
  <span m="2145010">hope</span> <span m="2145310">you</span> <span
  m="2145490">know</span> <span m="2145760">you</span> <span
  m="2145940">can</span> <span m="2146330">ask.</span> <span
  m="2146690">Yeah,</span> <span m="2146930">oh</span> <span
  m="2147110">good.</span></p><p><span m="2147854">AUDIENCE:</span> <span
  m="2148096">So</span> <span m="2148338">could</span> <span
  m="2148822">you</span> <span m="2149306">maybe</span> <span
  m="2149790">describe</span> <span m="2150274">the</span> <span
  m="2150758">scope</span> <span m="2151242">of</span> <span
  m="2151726">the</span> <span m="2152210">project?</span></p><p><span
  m="2154640">GILBERT STRANG:</span> <span m="2154835">Right.</span> <span
  m="2155420">How</span> <span m="2155660">will</span> <span
  m="2155900">I--</span> <span m="2159040">yeah,</span> <span
  m="2159460">so</span> <span m="2159820">the</span> <span
  m="2159940">scope</span> <span m="2161680">is</span> <span
  m="2161920">connected</span> <span m="2162460">to</span> <span
  m="2162670">the</span> <span m="2163540">time</span> <span
  m="2164740">that</span> <span m="2164980">you</span> <span
  m="2165130">would</span> <span m="2165340">devote</span> <span
  m="2165790">to</span> <span m="2166030">it.</span> <span
  m="2166950">And</span> <span m="2169030">what</span> <span
  m="2169210">should</span> <span m="2169390">I</span> <span
  m="2169540">say</span> <span m="2169900">about</span> <span
  m="2170230">scope?</span> <span m="2170730">Maybe</span> <span
  m="2171130">the</span> <span m="2171280">equivalent</span> <span
  m="2171880">of</span> <span m="2172060">three</span> <span
  m="2172450">homeworks</span> <span m="2173050">or</span> <span
  m="2173170">something.</span> <span m="2174210">Because</span> <span
  m="2174560">I'll</span> <span m="2176350">tamp</span> <span
  m="2176770">down</span> <span m="2177160">homeworks</span> <span
  m="2177680">as</span> <span m="2178150">project</span> <span
  m="2179560">date</span> <span m="2179960">gets</span> <span
  m="2180330">closer.</span> <span m="2181700">Does</span> <span
  m="2181760">that</span> <span m="2181820">give</span> <span
  m="2182050">an</span> <span m="2182200">idea?</span> <span
  m="2185560">So</span> <span m="2185740">it's</span> <span
  m="2185910">not</span> <span m="2188080">infinite,</span> <span
  m="2188590">but</span> <span m="2188740">it's</span> <span
  m="2188890">not</span> <span m="2189520">something</span> <span
  m="2190090">tiny</span> <span m="2190540">and</span> <span
  m="2190660">trivial.</span> <span m="2193030">Yeah,</span> <span
  m="2193390">good.</span></p><p><span m="2194140">AUDIENCE:</span> <span
  m="2194380">Do</span> <span m="2194620">you</span> <span
  m="2194860">have</span> <span m="2195100">an</span> <span
  m="2195580">example</span> <span m="2196000">projects</span> <span
  m="2196440">of</span> <span m="2196880">what</span> <span
  m="2197320">were</span> <span m="2197760">done</span> <span
  m="2197980">in</span> <span m="2198200">past</span> <span
  m="2198420">years?</span></p><p><span m="2198640">GILBERT STRANG:</span> <span
  m="2198767">Well,</span> <span m="2199150">that's</span> <span
  m="2199460">the</span> <span m="2199540">thing.</span> <span
  m="2199940">There</span> <span m="2200170">aren't</span> <span
  m="2200350">really</span> <span m="2200680">past</span> <span
  m="2201130">years.</span> <span m="2202600">We</span> <span
  m="2202870">are</span> <span m="2203090">the</span> <span
  m="2204700">ones.</span> <span m="2206840">So</span> <span
  m="2210860">I</span> <span m="2211010">will</span> <span
  m="2211250">have</span> <span m="2211460">next</span> <span
  m="2211820">year</span> <span m="2213830">if</span> <span
  m="2215310">contribute</span> <span m="2215870">some</span> <span
  m="2216080">good</span> <span m="2216290">ideas.</span> <span
  m="2219230">Maybe</span> <span m="2219620">I</span> <span
  m="2219770">should</span> <span m="2221180">I</span> <span
  m="2221330">ask</span> <span m="2222760">Professor</span> <span
  m="2223200">Rao</span> <span m="2223690">to</span> <span
  m="2224180">maybe</span> <span m="2225140">send</span> <span
  m="2225410">us</span> <span m="2225620">the</span> <span
  m="2225740">projects</span> <span m="2226250">he</span> <span
  m="2226520">uses</span> <span m="2227120">in</span> <span
  m="2227390">Michigan?</span> <span m="2228350">That</span> <span
  m="2228470">would</span> <span m="2228650">be</span> <span
  m="2229160">some</span> <span m="2229820">ideas.</span> <span
  m="2230330">But</span> <span m="2230540">remember</span> <span
  m="2230990">that</span> <span m="2231170">he</span> <span
  m="2232850">hasn't,</span> <span m="2233960">up</span> <span
  m="2234110">to</span> <span m="2234230">now</span> <span
  m="2234680">anyway,</span> <span m="2235160">moved</span> <span
  m="2235610">the</span> <span m="2235760">course</span> <span
  m="2236690">toward</span> <span m="2237230">deep</span> <span
  m="2237650">learning.</span> <span m="2238220">He</span> <span
  m="2238770">did</span> <span m="2239120">other</span> <span
  m="2239360">topics,</span> <span m="2241130">all</span> <span
  m="2241370">of</span> <span m="2241490">which</span> <span
  m="2241760">would</span> <span m="2241940">be</span> <span
  m="2242120">fine.</span> <span m="2242910">But</span> <span
  m="2244010">quite</span> <span m="2244280">a</span> <span
  m="2244310">few</span> <span m="2244490">people</span> <span
  m="2244910">have</span> <span m="2245090">had</span> <span
  m="2245360">some</span> <span m="2245930">6.036</span> <span
  m="2246980">or</span> <span m="2247055">know</span> <span
  m="2247130">something</span> <span m="2247850">about</span> <span
  m="2249620">conventional</span> <span m="2250400">neural</span> <span
  m="2250730">nets.</span> <span m="2251290">And</span> <span
  m="2253340">I'm</span> <span m="2253550">certainly</span> <span
  m="2253940">excited</span> <span m="2254390">to</span> <span
  m="2254540">get</span> <span m="2254720">to</span> <span
  m="2254870">that</span> <span m="2255110">topic.</span></p><p><span
  m="2256240">So</span> <span m="2256340">the</span> <span
  m="2256430">project</span> <span m="2256790">could</span> <span
  m="2257240">get</span> <span m="2257480">there</span> <span
  m="2257840">or</span> <span m="2257990">it</span> <span
  m="2258050">could</span> <span m="2258290">not.</span> <span
  m="2258880">Both</span> <span m="2259880">totally</span> <span
  m="2260300">fine.</span> <span m="2260900">OK,</span> <span
  m="2261350">that's</span> <span m="2261650">a</span> <span
  m="2261710">good</span> <span m="2261950">idea.</span> <span
  m="2262500">I'll</span> <span m="2262550">ask</span> <span
  m="2264230">Raj</span> <span m="2264740">for</span> <span
  m="2265580">just</span> <span m="2267440">the</span> <span
  m="2267620">projects--</span> <span m="2268400">and</span> <span
  m="2268610">you'll</span> <span m="2268820">recognize</span> <span
  m="2269540">a</span> <span m="2269600">couple,</span> <span
  m="2270020">because</span> <span m="2270260">you've</span> <span
  m="2270440">done</span> <span m="2270680">a</span> <span
  m="2270740">couple.</span> <span m="2271490">But</span> <span
  m="2271700">there are</span> <span m="2272380">a</span> <span
  m="2272500">bunch</span> <span m="2272810">more.</span> <span
  m="2275480">Then</span> <span m="2275720">there</span> <span
  m="2275810">was</span> <span m="2276020">another</span> <span
  m="2276560">question</span> <span m="2277760">or</span> <span
  m="2277880">thought?</span></p><p><span m="2278780">And</span> <span
  m="2278990">I'm</span> <span m="2279170">remembering</span> <span
  m="2279800">that</span> <span m="2282500">I</span> <span
  m="2282560">think</span> <span m="2282800">maybe</span> <span
  m="2283130">everybody</span> <span m="2283670">got</span> <span
  m="2284000">an</span> <span m="2284210">email</span> <span
  m="2284760">or</span> <span m="2285950">a</span> <span
  m="2286110">Stellar</span> <span m="2286700">announcement</span> <span
  m="2287360">that</span> <span m="2289550">some</span> <span
  m="2289790">members</span> <span m="2290180">of</span> <span
  m="2290300">the</span> <span m="2290420">class</span> <span
  m="2290870">took</span> <span m="2291180">an</span> <span
  m="2291300">initiative,</span> <span m="2291980">which</span> <span
  m="2292280">was</span> <span m="2292520">wonderful,</span> <span
  m="2293690">to</span> <span m="2294920">open</span> <span
  m="2295280">the</span> <span m="2295370">possibility</span> <span
  m="2296240">of</span> <span m="2296840">people</span> <span
  m="2297230">just</span> <span m="2297470">showing</span> <span
  m="2297860">up</span> <span m="2298020">one</span> <span
  m="2298340">evening</span> <span m="2298760">a</span> <span
  m="2298820">week</span> <span m="2299900">in</span> <span
  m="2300050">the</span> <span m="2300140">Media</span> <span
  m="2300530">Lab</span> <span m="2300950">was</span> <span
  m="2301220">it?</span> <span m="2301400">Or</span> <span
  m="2301860">was</span> <span m="2302160">there</span> <span
  m="2302330">a</span> <span m="2302540">location?</span> <span
  m="2304240">And</span> <span m="2304490">has</span> <span
  m="2304760">it</span> <span m="2304880">happened</span> <span
  m="2305540">or</span> <span m="2306590">is</span> <span m="2306800">it</span>
  <span m="2307880">a</span> <span m="2307940">future</span> <span
  m="2308450">event?</span></p><p><span m="2309327">AUDIENCE:</span> <span
  m="2309570">It</span> <span m="2309814">happened.</span></p><p><span
  m="2310790">GILBERT STRANG:</span> <span m="2310865">It</span> <span
  m="2310940">happened.</span> <span m="2313400">But</span> <span
  m="2315110">I</span> <span m="2315380">hadn't</span> <span
  m="2315620">mentioned</span> <span m="2316130">it</span> <span
  m="2316250">in</span> <span m="2316400">class,</span> <span
  m="2316800">so</span> <span m="2316970">probably</span> <span
  m="2317450">you</span> <span m="2317570">didn't</span> <span
  m="2317840">have--</span> <span m="2318690">and</span> <span
  m="2318800">we're</span> <span m="2319610">not</span> <span
  m="2319880">really</span> <span m="2320240">into</span> <span
  m="2320630">projects</span> <span m="2321230">yet,</span> <span
  m="2321500">so</span> <span m="2321860">it</span> <span m="2322010">was</span>
  <span m="2322220">probably</span> <span m="2322550">a</span> <span
  m="2322640">quiet</span> <span m="2323120">evening?</span></p><p><span
  m="2323890">AUDIENCE:</span> <span m="2324095">Yep.</span></p><p><span
  m="2324710">GILBERT STRANG:</span> <span m="2324820">Yeah.</span> <span
  m="2325280">Yeah,</span> <span m="2325670">and</span> <span
  m="2325820">that's--</span></p><p><span m="2326240">AUDIENCE:</span> <span
  m="2326450">Productive</span> <span m="2326660">but</span> <span
  m="2326870">quiet.</span></p><p><span m="2327080">GILBERT STRANG:</span> <span
  m="2327222">Productive</span> <span m="2327365">but</span> <span
  m="2327920">quiet.</span> <span m="2328370">OK.</span> <span
  m="2329090">So</span> <span m="2329270">will</span> <span
  m="2329510">it</span> <span m="2329630">happen</span> <span
  m="2329930">again?</span></p><p><span m="2331350">AUDIENCE:</span> <span
  m="2331470">Sure,</span> <span m="2331590">I</span> <span
  m="2331650">think</span> <span m="2331830">maybe</span> <span
  m="2332470">now</span> <span m="2332710">we'll</span> <span
  m="2333186">be</span> <span m="2333662">looking</span> <span
  m="2334138">after</span> <span m="2334376">spring</span> <span
  m="2334614">break.</span></p><p><span m="2335090">GILBERT STRANG:</span> <span
  m="2335270">After</span> <span m="2335450">spring</span> <span
  m="2335750">break.</span> <span m="2336140">OK,</span> <span
  m="2336920">so</span> <span m="2337370">post</span> <span
  m="2337790">again</span> <span m="2338990">on</span> <span
  m="2339590">Stellar</span> <span m="2340080">the</span> <span
  m="2340340">plan</span> <span m="2340790">for</span> <span
  m="2340970">the</span> <span m="2341060">next</span> <span
  m="2341960">meeting</span> <span m="2342590">that</span> <span
  m="2343700">people</span> <span m="2344030">could</span> <span
  m="2344450">come</span> <span m="2344720">to.</span> <span
  m="2346460">So</span> <span m="2346580">this</span> <span
  m="2346760">is</span> <span m="2346850">David</span> <span
  m="2347240">Anderton,</span> <span m="2349640">so</span> <span
  m="2349970">you'll</span> <span m="2350120">recognize</span> <span
  m="2350660">his</span> <span m="2350870">name.</span> <span
  m="2352060">And</span> <span m="2352670">did</span> <span
  m="2353000">you</span> <span m="2353120">have</span> <span
  m="2353330">the</span> <span m="2353420">meeting</span> <span
  m="2353780">in</span> <span m="2353870">the</span> <span
  m="2353960">Media</span> <span m="2354350">Lab?</span></p><p><span
  m="2354980">AUDIENCE:</span> <span m="2355115">Yeah,</span> <span
  m="2355250">we</span> <span m="2355746">had</span> <span m="2356242">it</span>
  <span m="2356738">on</span> <span m="2357234">the</span> <span
  m="2357730">Thursday</span> <span m="2357905">and</span> <span
  m="2358080">Friday.</span></p><p><span m="2358430">GILBERT STRANG:</span>
  <span m="2358605">OK.</span> <span m="2359330">So</span> <span
  m="2360050">with</span> <span m="2360310">the</span> <span
  m="2360380">break</span> <span m="2360680">coming</span> <span
  m="2362000">and</span> <span m="2362150">spring</span> <span
  m="2362930">hopefully</span> <span m="2363530">coming</span> <span
  m="2365120">after</span> <span m="2365990">today's</span> <span
  m="2368240">potential</span> <span m="2368810">storm,</span> <span
  m="2371000">when</span> <span m="2371360">we</span> <span
  m="2371480">come</span> <span m="2371690">back,</span> <span
  m="2372740">good.</span> <span m="2373600">OK.</span> <span
  m="2374510">Is</span> <span m="2374620">that</span> <span
  m="2374780">good?</span> <span m="2376640">I</span> <span
  m="2376730">hope</span> <span m="2376940">some</span> <span
  m="2377150">of</span> <span m="2377210">that</span> <span
  m="2377450">is</span> <span m="2377600">helpful.</span> <span
  m="2378080">You'll</span> <span m="2378640">get</span> <span
  m="2378920">an</span> <span m="2379070">idea.</span> <span
  m="2379850">You're</span> <span m="2380090">seeing</span> <span
  m="2380420">about</span> <span m="2380720">as</span> <span
  m="2380870">much</span> <span m="2381140">as</span> <span m="2381290">I</span>
  <span m="2381470">know,</span> <span m="2382370">which</span> <span
  m="2382610">is</span> <span m="2383180">model</span> <span
  m="2383540">1</span> <span m="2383930">is</span> <span
  m="2384110">definitely</span> <span m="2384650">doable</span> <span
  m="2386620">and</span> <span m="2387310">very</span> <span
  m="2387700">significant.</span> <span m="2388660">And</span> <span
  m="2389020">Vandermonde</span> <span m="2389620">matrices</span> <span
  m="2390400">and</span> <span m="2390520">so</span> <span m="2390700">on</span>
  <span m="2390910">are</span> <span m="2391720">truly</span> <span
  m="2392170">important.</span> <span m="2393460">And</span> <span
  m="2393640">their</span> <span m="2393880">instability</span> <span
  m="2394720">is</span> <span m="2395170">a</span> <span m="2395230">big</span>
  <span m="2395470">issue.</span> <span m="2398530">But</span> <span
  m="2398740">then</span> <span m="2400150">moving</span> <span
  m="2400660">toward</span> <span m="2401170">weights</span> <span
  m="2401870">and</span> <span m="2404740">training</span> <span
  m="2405250">data</span> <span m="2405640">and</span> <span
  m="2405760">test</span> <span m="2406060">data</span> <span
  m="2406370">is</span> <span m="2406510">where</span> <span
  m="2406720">we</span> <span m="2406840">want</span> <span
  m="2407050">to</span> <span m="2407110">go.</span> <span
  m="2408270">Good.</span> <span m="2408850">OK.</span></p><p><span
  m="2410160">So</span> <span m="2410460">do</span> <span m="2410610">I</span>
  <span m="2410700">have</span> <span m="2410940">some</span> <span
  m="2411150">time?</span> <span m="2411520">I</span> <span
  m="2411630">do</span> <span m="2412020">just</span> <span
  m="2412350">to</span> <span m="2413580">speak</span> <span
  m="2413910">about</span> <span m="2414210">mean</span> <span
  m="2415810">and</span> <span m="2415960">variance,</span> <span
  m="2417070">the</span> <span m="2417190">two</span> <span
  m="2418660">golden</span> <span m="2419140">words</span> <span
  m="2419710">of</span> <span m="2419860">statistics--</span> <span
  m="2421480">and</span> <span m="2421720">covariance,</span> <span
  m="2422710">the</span> <span m="2423130">matrix,</span> <span
  m="2423840">the</span> <span m="2424240">intersection</span> <span
  m="2425050">of</span> <span m="2426370">linear</span> <span
  m="2426760">algebra</span> <span m="2427300">with</span> <span
  m="2427480">statistics,</span> <span m="2428920">and</span> <span
  m="2429100">then</span> <span m="2429370">some</span> <span
  m="2430210">famous</span> <span m="2430750">inequality.</span> <span
  m="2431530">So</span> <span m="2431980">I'll</span> <span
  m="2432220">continue</span> <span m="2432820">with</span> <span
  m="2432970">this</span> <span m="2433210">on</span> <span
  m="2433420">Friday</span> <span m="2435100">and</span> <span
  m="2435610">post</span> <span m="2436090">some</span> <span
  m="2436450">other</span> <span m="2436620">material.</span> <span
  m="2437630">So</span> <span m="2437910">that</span> <span
  m="2438040">it's</span> <span m="2438250">coming</span> <span
  m="2438580">from</span> <span m="2438800">a</span> <span
  m="2438910">later</span> <span m="2439300">section</span> <span
  m="2439810">of</span> <span m="2439960">notes.</span></p><p><span
  m="2440620">OK,</span> <span m="2441010">can</span> <span m="2441250">I</span>
  <span m="2441370">just</span> <span m="2445966">so</span> <span
  m="2446450">I</span> <span m="2446800">either</span> <span
  m="2447090">have</span> <span m="2447990">probabilities</span> <span
  m="2448920">P1</span> <span m="2450600">up</span> <span m="2450830">to</span>
  <span m="2450950">Pn</span> <span m="2451740">adding</span> <span
  m="2452160">to</span> <span m="2452340">1,</span> <span m="2453420">or</span>
  <span m="2453630">I</span> <span m="2453750">have</span> <span
  m="2454020">our</span> <span m="2454110">continuous</span> <span
  m="2455790">distribution</span> <span m="2456780">of</span> <span
  m="2456900">probabilities,</span> <span m="2458730">maybe</span> <span
  m="2459120">from</span> <span m="2459810">all</span> <span
  m="2460170">x's</span> <span m="2460740">from</span> <span
  m="2460890">minus</span> <span m="2461340">infinity</span> <span
  m="2461850">to</span> <span m="2462030">infinity,</span> <span
  m="2462600">again,</span> <span m="2462990">giving</span> <span
  m="2463350">1.</span> <span m="2464970">Let</span> <span m="2465120">me</span>
  <span m="2465270">work</span> <span m="2465600">with</span> <span
  m="2465870">the</span> <span m="2465930">discrete</span> <span
  m="2466500">example.</span> <span m="2467010">That's</span> <span
  m="2467280">where</span> <span m="2468330">people</span> <span
  m="2468660">naturally</span> <span m="2469200">start.</span></p><p><span
  m="2470010">So</span> <span m="2472410">what</span> <span
  m="2472590">is</span> <span m="2472770">the</span> <span
  m="2472860">mean?</span> <span m="2474520">So</span> <span
  m="2476440">I've</span> <span m="2476670">n</span> <span
  m="2476880">possible</span> <span m="2478680">outcomes</span> <span
  m="2482540">with</span> <span m="2482780">those</span> <span
  m="2483030">probabilities.</span> <span m="2485410">And</span> <span
  m="2486040">I</span> <span m="2488110">can</span> <span m="2488320">ask</span>
  <span m="2488710">you</span> <span m="2488860">about</span> <span
  m="2489190">the</span> <span m="2489340">sample</span> <span
  m="2490030">mean</span> <span m="2495840">or</span> <span m="2496080">I</span>
  <span m="2496230">can</span> <span m="2496470">ask</span> <span
  m="2496800">you</span> <span m="2496920">about</span> <span
  m="2497280">the</span> <span m="2497430">expected</span> <span
  m="2500490">mean.</span></p><p><span m="2505230">So</span> <span
  m="2505530">the</span> <span m="2505630">sample</span> <span
  m="2506040">means,</span> <span m="2506610">we've</span> <span
  m="2506820">done</span> <span m="2507060">an</span> <span
  m="2507210">experiment.</span> <span m="2507780">We've</span> <span
  m="2507960">got</span> <span m="2508200">some</span> <span
  m="2508410">output.</span> <span m="2510000">The</span> <span
  m="2510120">expected</span> <span m="2510660">mean</span> <span
  m="2511410">means</span> <span m="2511830">we</span> <span
  m="2511980">know</span> <span m="2512220">probabilities,</span> <span
  m="2513030">but</span> <span m="2513180">we</span> <span
  m="2513330">haven't</span> <span m="2513660">used</span> <span
  m="2513990">them</span> <span m="2514170">yet.</span> <span
  m="2517410">So</span> <span m="2517650">this</span> <span
  m="2517980">uses</span> <span m="2518550">actual</span> <span
  m="2519660">output.</span> <span m="2521160">And</span> <span
  m="2521940">the</span> <span m="2522090">sample</span> <span
  m="2522450">mean</span> <span m="2522880">is</span> <span
  m="2522980">simply--</span> <span m="2524490">shall</span> <span
  m="2524760">I</span> <span m="2524850">just</span> <span
  m="2525060">say,</span> <span m="2529610">m</span> <span
  m="2530850">for</span> <span m="2531020">mean--</span> <span
  m="2531510">well,</span> <span m="2533120">these</span> <span
  m="2533420">two</span> <span m="2534260">are</span> <span
  m="2534770">importantly</span> <span m="2535430">different.</span> <span
  m="2535970">One</span> <span m="2537540">is</span> <span
  m="2537800">something</span> <span m="2538340">where</span> <span
  m="2538630">you've</span> <span m="2539030">done</span> <span
  m="2539390">the</span> <span m="2539540">experiment.</span> <span
  m="2540140">And</span> <span m="2540230">this</span> <span
  m="2540440">is</span> <span m="2541550">before</span> <span
  m="2542150">you</span> <span m="2542330">do</span> <span
  m="2542570">the</span> <span m="2542690">experiment.</span> <span
  m="2543290">And</span> <span m="2543440">the</span> <span
  m="2544040">letters</span> <span m="2544460">get--</span> <span
  m="2544850">maybe</span> <span m="2545230">mu,</span> <span
  m="2546110">I'll</span> <span m="2546320">change</span> <span
  m="2546515">it</span> <span m="2546710">to</span> <span m="2546860">mu.</span>
  <span m="2549760">I</span> <span m="2549820">don't</span> <span
  m="2550000">want</span> <span m="2550120">to</span> <span
  m="2550210">use</span> <span m="2550345">S</span> <span
  m="2550480">because</span> <span m="2551380">S</span> <span
  m="2551650">gets</span> <span m="2551980">used</span> <span
  m="2552340">with</span> <span m="2552580">variance.</span></p><p><span
  m="2554470">So</span> <span m="2554710">it's</span> <span
  m="2554890">just</span> <span m="2555130">the</span> <span
  m="2555280">average,</span> <span m="2557030">average</span> <span
  m="2557590">output</span> <span m="2558880">from</span> <span
  m="2559090">the</span> <span m="2559210">sample.</span> <span
  m="2564750">Like</span> <span m="2564990">I've</span> <span
  m="2565110">flipped</span> <span m="2565470">a</span> <span
  m="2565500">coin</span> <span m="2565830">a</span> <span
  m="2565890">million</span> <span m="2566310">times.</span> <span
  m="2568080">And</span> <span m="2568350">the</span> <span
  m="2568500">output</span> <span m="2568950">was</span> <span
  m="2569160">0</span> <span m="2569970">or</span> <span m="2570150">1.</span>
  <span m="2571590">So</span> <span m="2571820">I</span> <span
  m="2571940">got</span> <span m="2572240">a</span> <span
  m="2572300">million</span> <span m="2572960">1s</span> <span
  m="2573380">and</span> <span m="2573530">0s.</span> <span
  m="2575210">And</span> <span m="2575660">I</span> <span
  m="2575810">take</span> <span m="2576080">the</span> <span
  m="2576230">average,</span> <span m="2576890">and</span> <span
  m="2577070">I'm</span> <span m="2577220">expecting</span> <span
  m="2577880">a</span> <span m="2577940">number</span> <span
  m="2578360">like</span> <span m="2578690">half</span> <span
  m="2578960">a</span> <span m="2579020">million.</span> <span
  m="2580132">Of</span> <span m="2580510">course,</span> <span
  m="2580820">I'm</span> <span m="2581030">thinking</span> <span
  m="2581360">of</span> <span m="2581480">a</span> <span m="2581540">fair</span>
  <span m="2581840">coin.</span> <span m="2583620">And</span> <span
  m="2584220">the</span> <span m="2584340">law</span> <span
  m="2584640">of</span> <span m="2584790">large</span> <span
  m="2585150">numbers</span> <span m="2585690">would</span> <span
  m="2585930">say</span> <span m="2586760">that</span> <span
  m="2588060">this</span> <span m="2588810">sample</span> <span
  m="2589290">mean</span> <span m="2589800">does</span> <span
  m="2590130">approach</span> <span m="2590670">1/2</span> <span
  m="2592110">with</span> <span m="2592680">probability</span> <span
  m="2593430">1</span> <span m="2595410">as</span> <span m="2595860">the</span>
  <span m="2596010">number</span> <span m="2596400">of</span> <span
  m="2596490">samples</span> <span m="2597000">gets</span> <span
  m="2597270">larger.</span> <span m="2598050">So</span> <span
  m="2598780">sample</span> <span m="2599190">mean</span> <span
  m="2599520">is</span> <span m="2600150">straightforward.</span></p><p><span
  m="2601240">The</span> <span m="2601340">expected</span> <span
  m="2601860">mean</span> <span m="2602250">means--</span> <span
  m="2603060">these</span> <span m="2603420">are</span> <span
  m="2603720">actual</span> <span m="2606390">sample</span> <span
  m="2606900">outputs.</span> <span m="2612530">They</span> <span
  m="2612760">happened,</span> <span m="2614010">whereas</span> <span
  m="2614730">the</span> <span m="2614910">expected</span> <span
  m="2615480">mean</span> <span m="2616310">is</span> <span
  m="2616530">just</span> <span m="2617130">the--</span> <span
  m="2618060">and</span> <span m="2618210">I'll</span> <span
  m="2618390">use</span> <span m="2618690">m</span> <span m="2618960">for</span>
  <span m="2619200">that--</span> <span m="2620100">it's</span> <span
  m="2621720">the</span> <span m="2621960">probability</span> <span
  m="2622770">of</span> <span m="2622890">the</span> <span
  m="2623010">first</span> <span m="2623490">output</span> <span
  m="2624660">times</span> <span m="2625170">that</span> <span
  m="2625410">output</span> <span m="2626430">plus</span> <span
  m="2626910">the</span> <span m="2627000">probability</span> <span
  m="2627580">of</span> <span m="2627640">the</span> <span
  m="2627780">second</span> <span m="2628200">output</span> <span
  m="2628590">times</span> <span m="2628920">that</span> <span
  m="2629160">output</span> <span m="2629760">plus,</span> <span
  m="2630300">plus</span> <span m="2631110">Pn</span> <span
  m="2632070">xn.</span> <span m="2636690">So</span> <span
  m="2637580">that</span> <span m="2638240">will</span> <span
  m="2638540">approach</span> <span m="2639140">that</span> <span
  m="2641360">with</span> <span m="2641600">probability</span> <span
  m="2642320">1</span> <span m="2643190">as</span> <span m="2643820">this</span>
  <span m="2644860">number</span> <span m="2645140">capital</span> <span
  m="2645495">N--</span> <span m="2645850">notice</span> <span
  m="2646190">the</span> <span m="2646310">difference.</span></p><p><span
  m="2646760">Capital</span> <span m="2647270">N</span> <span
  m="2647480">here</span> <span m="2648230">is</span> <span
  m="2648380">the</span> <span m="2648500">number</span> <span
  m="2648920">of</span> <span m="2649190">samples,</span> <span
  m="2650480">the</span> <span m="2650600">number</span> <span
  m="2650870">of</span> <span m="2650990">trials.</span> <span
  m="2652320">And</span> <span m="2652490">it</span> <span
  m="2652610">gets</span> <span m="2653300">big.</span> <span
  m="2654650">We</span> <span m="2654830">keep</span> <span
  m="2655280">doing</span> <span m="2655640">things</span> <span
  m="2655880">more</span> <span m="2656090">and</span> <span
  m="2656180">more.</span> <span m="2657710">This</span> <span
  m="2657980">little</span> <span m="2658370">n</span> <span
  m="2658610">is</span> <span m="2658770">the</span> <span
  m="2658850">number</span> <span m="2659300">of</span> <span
  m="2659810">possible</span> <span m="2660350">different</span> <span
  m="2660800">outputs</span> <span m="2661730">with</span> <span
  m="2661970">their</span> <span m="2662150">probabilities.</span> <span
  m="2663170">And</span> <span m="2664040">there</span> <span
  m="2664370">you</span> <span m="2664550">see</span> <span
  m="2664820">it.</span></p><p><span m="2664930">And,</span> <span
  m="2665120">of</span> <span m="2665210">course,</span> <span
  m="2665540">in</span> <span m="2665660">the</span> <span
  m="2665780">continuous</span> <span m="2666530">case,</span> <span
  m="2667370">we</span> <span m="2667610">would</span> <span
  m="2667790">take</span> <span m="2668120">the</span> <span
  m="2668330">interval</span> <span m="2668710">of</span> <span
  m="2668810">x</span> <span m="2669260">p</span> <span m="2669530">of</span>
  <span m="2669670">x</span> <span m="2669920">dx.</span> <span
  m="2674480">So</span> <span m="2675020">let</span> <span m="2675140">me</span>
  <span m="2675500">just,</span> <span m="2676190">by</span> <span
  m="2676430">analogy,</span> <span m="2677600">that</span> <span
  m="2678470">you</span> <span m="2678680">should</span> <span
  m="2678950">know</span> <span m="2679310">what</span> <span
  m="2679580">the</span> <span m="2679700">continuous</span> <span
  m="2680390">version</span> <span m="2680870">is</span> <span
  m="2681140">and</span> <span m="2681260">what</span> <span
  m="2681470">the</span> <span m="2682100">discrete</span> <span
  m="2682670">version</span> <span m="2683150">is.</span> <span
  m="2683420">OK,</span> <span m="2684280">that's</span> <span
  m="2684530">the</span> <span m="2684620">mean.</span></p><p><span
  m="2687770">Now,</span> <span m="2688190">for</span> <span
  m="2688380">variance.</span> <span m="2689870">Sample</span> <span
  m="2690350">variance--</span> <span m="2695860">and,</span> <span
  m="2697180">shall</span> <span m="2697420">I</span> <span
  m="2697510">say,</span> <span m="2697810">expected</span> <span
  m="2698470">variance?</span> <span m="2700120">I</span> <span
  m="2700240">don't</span> <span m="2700390">know.</span> <span
  m="2700960">Just</span> <span m="2701230">variance</span> <span
  m="2701890">is</span> <span m="2702070">what</span> <span
  m="2702340">people</span> <span m="2702760">would</span> <span
  m="2702910">usually</span> <span m="2703330">say.</span> <span
  m="2705610">I</span> <span m="2705670">don't</span> <span
  m="2705820">know</span> <span m="2705970">if</span> <span
  m="2706090">I've</span> <span m="2706210">remembered</span> <span
  m="2706660">the</span> <span m="2706780">right</span> <span
  m="2707050">word</span> <span m="2707340">there,</span> <span
  m="2707650">sample</span> <span m="2708130">variance.</span> <span
  m="2710690">Is</span> <span m="2710890">that--</span> <span
  m="2714220">I</span> <span m="2714970">included</span> <span
  m="2715480">this</span> <span m="2715720">topic</span> <span
  m="2716170">in</span> <span m="2718330">linear</span> <span
  m="2718780">algebra</span> <span m="2719170">book.</span> <span
  m="2719770">Anyway,</span> <span m="2720540">yeah.</span> <span
  m="2721300">OK.</span></p><p><span m="2721990">So</span> <span
  m="2722380">what's</span> <span m="2722740">the</span> <span
  m="2722830">sample</span> <span m="2723280">variance?</span> <span
  m="2728010">So</span> <span m="2729840">I</span> <span
  m="2730350">guess</span> <span m="2730650">I'm--</span> <span
  m="2732948">hm--</span> <span m="2734920">yeah,</span> <span
  m="2735280">so</span> <span m="2735490">what</span> <span
  m="2735690">is</span> <span m="2735880">the</span> <span
  m="2735970">sample</span> <span m="2736390">variance?</span> <span
  m="2737800">What's</span> <span m="2738010">the</span> <span
  m="2738070">variance</span> <span m="2738550">about</span> <span
  m="2739030">anyway?</span> <span m="2739390">What's</span> <span
  m="2739630">the</span> <span m="2739720">key</span> <span
  m="2739990">point</span> <span m="2740380">of</span> <span
  m="2741040">variance?</span></p><p><span m="2742990">It's</span> <span
  m="2743350">the</span> <span m="2743500">distance</span> <span
  m="2744220">from</span> <span m="2744520">the</span> <span
  m="2744640">mean.</span> <span m="2746210">So</span> <span
  m="2746590">this</span> <span m="2746860">will</span> <span
  m="2746950">be</span> <span m="2747130">a</span> <span
  m="2747220">distance</span> <span m="2747760">from</span> <span
  m="2747970">the</span> <span m="2748090">sample</span> <span
  m="2748630">mean,</span> <span m="2749050">and</span> <span
  m="2749170">this</span> <span m="2749410">will</span> <span
  m="2749500">be</span> <span m="2749650">a</span> <span
  m="2749710">distance</span> <span m="2750220">from</span> <span
  m="2750430">the</span> <span m="2750550">expected</span> <span
  m="2751200">mean.</span> <span m="2754600">So</span> <span
  m="2754850">not</span> <span m="2755180">distance</span> <span
  m="2755660">from</span> <span m="2755900">zero,</span> <span
  m="2756290">but</span> <span m="2756470">distance</span> <span
  m="2756950">from</span> <span m="2758410">mu</span> <span
  m="2758710">and</span> <span m="2758840">m,</span> <span
  m="2759260">from</span> <span m="2759590">the</span> <span
  m="2759890">center</span> <span m="2760460">of</span> <span
  m="2760670">the</span> <span m="2761090">thing.</span></p><p><span
  m="2762270">So</span> <span m="2762470">the</span> <span
  m="2762590">sample</span> <span m="2763010">variance--</span> <span
  m="2764360">so,</span> <span m="2764540">again,</span> <span
  m="2764840">we</span> <span m="2765020">have</span> <span m="2765380">n</span>
  <span m="2765710">samples.</span> <span m="2766790">But</span> <span
  m="2767600">for</span> <span m="2767870">some</span> <span
  m="2768170">wonderful</span> <span m="2768710">reason</span> <span
  m="2769280">in</span> <span m="2769430">statistics</span> <span
  m="2770720">you</span> <span m="2770840">divide</span> <span
  m="2771290">by</span> <span m="2771530">n</span> <span
  m="2771740">minus</span> <span m="2772160">1</span> <span
  m="2772490">this</span> <span m="2772730">time.</span> <span
  m="2774820">And</span> <span m="2775750">the</span> <span
  m="2775870">reason</span> <span m="2776830">has</span> <span
  m="2777100">to</span> <span m="2777220">do</span> <span
  m="2777400">with</span> <span m="2777550">the</span> <span
  m="2777640">fact</span> <span m="2778030">that</span> <span
  m="2778180">you</span> <span m="2778360">used</span> <span
  m="2778930">one--</span> <span m="2779500">this</span> <span
  m="2779740">will</span> <span m="2779950">involve</span> <span
  m="2780520">the</span> <span m="2781070">mean.</span> <span
  m="2781510">So</span> <span m="2781690">this</span> <span
  m="2781930">would</span> <span m="2782140">be</span> <span
  m="2785650">the</span> <span m="2785770">first</span> <span
  m="2786250">output</span> <span m="2786850">minus</span> <span
  m="2787480">mu</span> <span m="2788830">squared</span> <span
  m="2790480">up</span> <span m="2790690">to</span> <span m="2790900">the</span>
  <span m="2792760">n-th</span> <span m="2793120">output</span> <span
  m="2793900">minus</span> <span m="2794390">mu</span> <span
  m="2795420">squared.</span></p><p><span m="2797750">So</span> <span
  m="2797930">it's</span> <span m="2798080">the</span> <span
  m="2798200">average</span> <span m="2798740">distance</span> <span
  m="2800420">from</span> <span m="2800820">mu--</span> <span
  m="2801500">average</span> <span m="2801920">squared</span> <span
  m="2802400">distance</span> <span m="2803030">from</span> <span
  m="2803420">mu--</span> <span m="2804140">but</span> <span
  m="2804380">with</span> <span m="2804650">this</span> <span
  m="2805070">little</span> <span m="2805580">twist</span> <span
  m="2806120">that,</span> <span m="2807120">of</span> <span
  m="2807170">course,</span> <span m="2807600">when</span> <span
  m="2807870">n</span> <span m="2807985">is</span> <span
  m="2808100">large,</span> <span m="2808490">it's</span> <span
  m="2808820">not</span> <span m="2809090">a</span> <span
  m="2809180">very</span> <span m="2809480">significant</span> <span
  m="2810140">difference</span> <span m="2811040">between</span> <span
  m="2811335">n</span> <span m="2811630">and</span> <span m="2811950">n</span>
  <span m="2812120">minus</span> <span m="2812450">1.</span> <span
  m="2812600">I</span> <span m="2812750">Think</span> <span
  m="2812990">that's</span> <span m="2813590">about</span> <span
  m="2813890">right.</span> <span m="2816190">All</span> <span
  m="2816560">this</span> <span m="2816890">is</span> <span
  m="2817100">that</span> <span m="2817280">I'm</span> <span
  m="2817460">just</span> <span m="2817700">doing</span> <span
  m="2818030">one</span> <span m="2818450">experiment</span> <span
  m="2819230">over</span> <span m="2819560">and</span> <span
  m="2819680">over.</span></p><p><span m="2820940">Covariance,</span> <span
  m="2823450">which</span> <span m="2824340">is</span> <span
  m="2824830">the</span> <span m="2825930">deeper</span> <span
  m="2826440">idea,</span> <span m="2827460">is</span> <span
  m="2827640">where</span> <span m="2827850">linear</span> <span
  m="2828210">algebra</span> <span m="2828630">comes</span> <span
  m="2829020">in.</span> <span m="2829200">I</span> <span
  m="2829260">have</span> <span m="2829440">a</span> <span
  m="2829500">matrix</span> <span m="2830190">because</span> <span
  m="2830760">why?</span> <span m="2831660">Because</span> <span
  m="2832230">I'm</span> <span m="2832440">doing</span> <span
  m="2833400">multiple</span> <span m="2834000">experiments</span> <span
  m="2834750">at</span> <span m="2834870">the</span> <span
  m="2834990">same</span> <span m="2835350">time.</span> <span
  m="2837450">I'm</span> <span m="2837570">flipping</span> <span
  m="2838020">two</span> <span m="2838260">coins.</span> <span
  m="2840160">I'm</span> <span m="2840260">flipping</span> <span
  m="2840680">15</span> <span m="2841320">coins.</span> <span
  m="2842270">I'm</span> <span m="2842390">doing</span> <span
  m="2842720">other</span> <span m="2843890">things.</span> <span
  m="2845960">So</span> <span m="2846230">that</span> <span
  m="2846440">will</span> <span m="2846590">be</span> <span
  m="2846830">covariances</span> <span m="2847880">when</span> <span
  m="2848120">I'm</span> <span m="2848270">doing</span> <span
  m="2848870">several</span> <span m="2849320">experiments</span> <span
  m="2850010">at</span> <span m="2850130">once.</span> <span
  m="2851960">That</span> <span m="2852200">will</span> <span
  m="2852410">involve</span> <span m="2852800">matrices</span> <span
  m="2853520">of</span> <span m="2853640">that</span> <span
  m="2853880">size.</span></p><p><span m="2855680">So</span> <span
  m="2855860">what's</span> <span m="2856790">the</span> <span
  m="2857240">variance?</span> <span m="2858960">I</span> <span
  m="2859460">should</span> <span m="2859690">have</span> <span
  m="2859820">given</span> <span m="2860150">you</span> <span
  m="2860330">the</span> <span m="2860690">usual</span> <span
  m="2861200">notation.</span> <span m="2862340">The</span> <span
  m="2862460">expected</span> <span m="2863210">value</span> <span
  m="2863690">of</span> <span m="2863840">x,</span> <span
  m="2865220">that's</span> <span m="2865430">what's</span> <span
  m="2865790">the</span> <span m="2865880">mean.</span> <span
  m="2867710">And</span> <span m="2867830">here,</span> <span
  m="2868150">I'm</span> <span m="2868580">looking</span> <span
  m="2869000">at</span> <span m="2869180">the</span> <span
  m="2869330">expected</span> <span m="2870020">value</span> <span
  m="2870770">of</span> <span m="2871850">what?</span> <span
  m="2873300">So</span> <span m="2874650">when</span> <span
  m="2874830">I'm</span> <span m="2874980">computing</span> <span
  m="2875550">a</span> <span m="2875610">variance,</span> <span
  m="2877370">using</span> <span m="2877790">probabilities--</span> <span
  m="2878880">so</span> <span m="2879080">I'm</span> <span
  m="2879230">using</span> <span m="2879620">expectations,</span> <span
  m="2880770">not</span> <span m="2882410">trial</span> <span
  m="2882860">runs--</span> <span m="2884510">expectations</span> <span
  m="2885440">means</span> <span m="2885830">use</span> <span
  m="2886140">the</span> <span m="2886220">probabilities.</span> <span
  m="2887880">And</span> <span m="2888810">it's</span> <span
  m="2889120">the</span> <span m="2889250">expectation</span> <span
  m="2890240">of</span> <span m="2891070">the</span> <span
  m="2891230">distance</span> <span m="2891950">from</span> <span
  m="2892430">x</span> <span m="2892910">to</span> <span m="2893480">the</span>
  <span m="2894410">mean</span> <span m="2897040">squared.</span></p><p><span
  m="2899990">And</span> <span m="2900530">that</span> <span
  m="2900890">is</span> <span m="2901730">when</span> <span
  m="2902630">I'm</span> <span m="2902780">doing</span> <span
  m="2903060">is</span> <span m="2903110">an</span> <span
  m="2903200">expectation</span> <span m="2904850">for</span> <span
  m="2905570">a</span> <span m="2906140">discrete</span> <span
  m="2906740">set,</span> <span m="2907550">I</span> <span
  m="2907670">think</span> <span m="2907970">of</span> <span
  m="2908090">the</span> <span m="2908210">probability,</span> <span
  m="2909110">the</span> <span m="2909230">first</span> <span
  m="2909560">probability,</span> <span m="2910700">that</span> <span
  m="2910850">goes</span> <span m="2911210">with</span> <span
  m="2911420">an</span> <span m="2911540">output</span> <span
  m="2912050">x1</span> <span m="2915620">and</span> <span m="2915820">a</span>
  <span m="2915940">second</span> <span m="2916390">probability</span> <span
  m="2917800">that</span> <span m="2917950">goes</span> <span
  m="2918280">with</span> <span m="2918490">an</span> <span
  m="2918640">output</span> <span m="2919150">x2.</span> <span
  m="2921010">And</span> <span m="2921160">each</span> <span
  m="2921460">time</span> <span m="2921850">I</span> <span
  m="2922570">subtract</span> <span m="2923170">from</span> <span
  m="2923350">the</span> <span m="2923470">mean</span> <span
  m="2925630">and</span> <span m="2926260">square.</span> <span
  m="2928210">So</span> <span m="2928420">that's</span> <span
  m="2928690">the</span> <span m="2928810">variance</span> <span
  m="2929350">that</span> <span m="2929500">everybody</span> <span
  m="2930010">calls</span> <span m="2930340">sigma</span> <span
  m="2930760">squared.</span></p><p><span m="2934610">Now,</span> <span
  m="2936470">two</span> <span m="2936680">minutes</span> <span
  m="2937010">left</span> <span m="2937570">is</span> <span
  m="2938570">enough</span> <span m="2938900">to</span> <span
  m="2939440">say</span> <span m="2941510">a</span> <span m="2941570">few</span>
  <span m="2941780">more</span> <span m="2942020">words</span> <span
  m="2942350">about</span> <span m="2942620">covariance.</span> <span
  m="2944650">Oh,</span> <span m="2945210">to</span> <span
  m="2945390">get</span> <span m="2945610">to</span> <span
  m="2945720">covariance,</span> <span m="2946350">I</span> <span
  m="2946440">really</span> <span m="2946770">have</span> <span
  m="2946980">to</span> <span m="2947130">speak</span> <span
  m="2947490">about</span> <span m="2948120">joint</span> <span
  m="2948570">probabilities.</span> <span m="2949440">That's</span> <span
  m="2949740">a</span> <span m="2949800">key</span> <span
  m="2950550">idea--</span> <span m="2951510">joint</span> <span
  m="2951900">probabilities.</span> <span m="2953140">So</span> <span
  m="2953280">I'm</span> <span m="2953460">doing</span> <span
  m="2953730">two</span> <span m="2954000">experiments</span> <span
  m="2954720">at</span> <span m="2954840">once.</span> <span
  m="2958450">So</span> <span m="2958690">each</span> <span
  m="2958990">one</span> <span m="2959530">has</span> <span
  m="2959800">its</span> <span m="2959980">own</span> <span
  m="2960550">probabilities.</span></p><p><span m="2962720">But</span> <span
  m="2963380">together,</span> <span m="2965120">I</span> <span
  m="2965270">have</span> <span m="2965450">to</span> <span
  m="2965600">ask--</span> <span m="2967760">so</span> <span
  m="2968510">here</span> <span m="2968870">are</span> <span
  m="2969260">two</span> <span m="2969560">easy</span> <span
  m="2969830">cases.</span> <span m="2970770">Suppose</span> <span
  m="2971030">I'm</span> <span m="2971210">flipping</span> <span
  m="2971750">two</span> <span m="2972080">coins.</span> <span
  m="2974030">So</span> <span m="2974270">that</span> <span m="2974450">I</span>
  <span m="2974600">might</span> <span m="2974840">get</span> <span
  m="2975020">heads</span> <span m="2975350">heads.</span> <span
  m="2975770">I</span> <span m="2975860">may</span> <span m="2976040">get</span>
  <span m="2976310">heads</span> <span m="2976640">tails,</span> <span
  m="2977210">tails</span> <span m="2977600">heads,</span> <span
  m="2978140">or</span> <span m="2978260">tails</span> <span
  m="2978620">tails,</span> <span m="2978980">four</span> <span
  m="2979250">possibility,</span> <span m="2980450">four</span> <span
  m="2980690">possible</span> <span m="2981230">outputs</span> <span
  m="2981800">there,</span> <span m="2982250">four</span> <span
  m="2982550">possible</span> <span m="2983030">pairs.</span> <span
  m="2984890">And</span> <span m="2985430">if</span> <span
  m="2986930">you're</span> <span m="2987140">flipping</span> <span
  m="2987530">one</span> <span m="2987740">coin</span> <span
  m="2988040">and</span> <span m="2988160">I'm</span> <span
  m="2988310">flipping</span> <span m="2988730">another</span> <span
  m="2989030">one,</span> <span m="2989510">those</span> <span
  m="2989780">are</span> <span m="2989900">independent</span> <span
  m="2990440">results.</span> <span m="2992250">Those</span> <span
  m="2992490">are</span> <span m="2992610">independent</span> <span
  m="2993150">results.</span> <span m="2994500">There</span> <span
  m="2994620">won't</span> <span m="2994950">be</span> <span
  m="2995160">a</span> <span m="2995610">covariance</span> <span
  m="3000120">where</span> <span m="3001190">by</span> <span
  m="3001400">knowing</span> <span m="3001760">what</span> <span
  m="3002090">my</span> <span m="3002390">flip</span> <span
  m="3002750">was</span> <span m="3003260">I</span> <span
  m="3003350">would</span> <span m="3003500">know</span> <span
  m="3003740">more</span> <span m="3004040">about</span> <span
  m="3004370">your</span> <span m="3004620">flip.</span></p><p><span
  m="3007440">But</span> <span m="3007650">now,</span> <span
  m="3008130">the</span> <span m="3008310">other</span> <span
  m="3008520">possibility</span> <span m="3010110">would</span> <span
  m="3010260">be</span> <span m="3010470">to</span> <span
  m="3010590">glue</span> <span m="3010980">the</span> <span
  m="3011100">coins</span> <span m="3011550">together.</span> <span
  m="3014820">Now,</span> <span m="3015540">if</span> <span m="3015690">I</span>
  <span m="3015780">do</span> <span m="3015960">a</span> <span
  m="3016020">flip,</span> <span m="3017860">they</span> <span
  m="3018010">always</span> <span m="3018310">come</span> <span
  m="3018550">up</span> <span m="3018760">heads</span> <span
  m="3019120">and</span> <span m="3019300">heads</span> <span
  m="3020620">or</span> <span m="3021010">tails</span> <span
  m="3021460">and</span> <span m="3021580">tails.</span> <span
  m="3022720">So</span> <span m="3022900">the</span> <span
  m="3023020">heads</span> <span m="3023350">tails</span> <span
  m="3023800">combination</span> <span m="3024610">is</span> <span
  m="3025120">not</span> <span m="3025360">possible.</span> <span
  m="3026230">In</span> <span m="3026380">fact,</span> <span
  m="3027340">one</span> <span m="3028270">output</span> <span
  m="3028720">is</span> <span m="3028900">totally</span> <span
  m="3029410">dependent</span> <span m="3029980">on</span> <span
  m="3030160">the</span> <span m="3030280">other</span> <span
  m="3030550">outputs.</span> <span m="3030970">So</span> <span
  m="3031120">that's</span> <span m="3031360">the</span> <span
  m="3031510">other</span> <span m="3031810">extreme.</span> <span
  m="3032770">We</span> <span m="3032920">have</span> <span
  m="3033160">independent</span> <span m="3034420">outputs</span> <span
  m="3035020">with</span> <span m="3035380">covariance</span> <span
  m="3035980">0,</span> <span m="3036970">and</span> <span m="3037120">we</span>
  <span m="3037300">have</span> <span m="3038710">totally</span> <span
  m="3039340">dependent</span> <span m="3040090">outputs</span> <span
  m="3040900">when</span> <span m="3041170">the</span> <span
  m="3041320">things</span> <span m="3041710">are</span> <span
  m="3041830">just</span> <span m="3042040">glued</span> <span
  m="3042400">together,</span> <span m="3042880">when</span> <span
  m="3043120">one</span> <span m="3043780">result</span> <span
  m="3044230">tells</span> <span m="3044620">us</span> <span
  m="3044800">what</span> <span m="3044980">the</span> <span
  m="3045100">other</span> <span m="3045310">result</span> <span
  m="3045760">is,</span> <span m="3046480">then</span> <span
  m="3046960">that's</span> <span m="3047410">a</span> <span
  m="3047710">situation</span> <span m="3048460">where</span> <span
  m="3048790">the</span> <span m="3049750">covariance</span> <span
  m="3050470">is</span> <span m="3050650">a</span> <span
  m="3050710">maximum.</span> <span m="3051340">It</span> <span
  m="3051640">couldn't</span> <span m="3051940">be</span> <span
  m="3052090">bigger</span> <span m="3052390">than</span> <span
  m="3052570">that.</span></p><p><span m="3053290">And</span> <span
  m="3053620">say</span> <span m="3053920">in</span> <span
  m="3054040">polling,</span> <span m="3054710">if</span> <span
  m="3054880">you</span> <span m="3055030">were</span> <span
  m="3055600">polling</span> <span m="3056090">a</span> <span
  m="3056290">family,</span> <span m="3058360">say</span> <span
  m="3058840">political</span> <span m="3059440">polling,</span> <span
  m="3060520">well,</span> <span m="3061630">there</span> <span
  m="3064720">would</span> <span m="3064900">be</span> <span
  m="3065080">some</span> <span m="3065500">covariance</span> <span
  m="3066970">expected</span> <span m="3067570">there.</span> <span
  m="3070110">The</span> <span m="3070920">two</span> <span
  m="3071500">or</span> <span m="3071590">three</span> <span
  m="3071950">or</span> <span m="3072070">five</span> <span
  m="3072460">people</span> <span m="3072880">that</span> <span
  m="3073110">are</span> <span m="3073580">living</span> <span
  m="3073870">in</span> <span m="3073960">the</span> <span
  m="3074080">same</span> <span m="3074380">house</span> <span
  m="3074800">wouldn't</span> <span m="3075280">be</span> <span
  m="3075580">independent,</span> <span m="3077050">entirely</span> <span
  m="3077710">independent,</span> <span m="3078310">but</span> <span
  m="3078760">nor</span> <span m="3079060">would</span> <span
  m="3081400">all</span> <span m="3081760">five</span> <span
  m="3082480">give</span> <span m="3082720">the</span> <span
  m="3082840">same</span> <span m="3083380">answer.</span> <span
  m="3084370">So</span> <span m="3085240">their</span> <span
  m="3085390">covariance</span> <span m="3086080">matrix</span> <span
  m="3087160">would</span> <span m="3089590">have</span> <span
  m="3089800">some</span> <span m="3090130">off</span> <span
  m="3090340">diagonal,</span> <span m="3091690">but</span> <span
  m="3093400">it</span> <span m="3094810">would</span> <span
  m="3094990">still</span> <span m="3095200">be</span> <span
  m="3095970">invertible.</span></p><p><span m="3096970">And</span> <span
  m="3097240">actually,</span> <span m="3097750">what</span> <span
  m="3097960">I</span> <span m="3098140">wanted</span> <span
  m="3098420">to</span> <span m="3098710">tell</span> <span
  m="3098980">you</span> <span m="3099100">about</span> <span
  m="3099340">next</span> <span m="3099670">time</span> <span
  m="3100000">at</span> <span m="3100090">the</span> <span
  m="3100210">start</span> <span m="3100630">is</span> <span
  m="3101260">that</span> <span m="3101440">covariance</span> <span
  m="3102130">matrix,</span> <span m="3102700">which</span> <span
  m="3102880">I</span> <span m="3103000">have</span> <span m="3103180">to</span>
  <span m="3103330">define</span> <span m="3103780">for</span> <span
  m="3103960">you,</span> <span m="3104920">will</span> <span
  m="3105160">be</span> <span m="3105400">symmetric</span> <span
  m="3105970">positive</span> <span m="3106450">definite,</span> <span
  m="3107760">or</span> <span m="3108600">semidefinite.</span> <span
  m="3109710">What's</span> <span m="3110480">the</span> <span
  m="3110550">semidefinite</span> <span m="3111420">case?</span> <span
  m="3112200">Of</span> <span m="3112350">course,</span> <span
  m="3112740">that's</span> <span m="3113010">the</span> <span
  m="3113130">case</span> <span m="3113550">where</span> <span
  m="3114750">the</span> <span m="3114960">coins</span> <span
  m="3115350">are</span> <span m="3115440">glued</span> <span
  m="3115800">together.</span></p><p><span m="3117610">OK,</span> <span
  m="3118080">thanks.</span> <span m="3119820">So</span> <span
  m="3120090">you</span> <span m="3120210">know</span> <span
  m="3120390">what's</span> <span m="3120630">coming</span> <span
  m="3120990">Friday.</span> <span m="3121480">I</span> <span
  m="3121650">know</span> <span m="3121920">that</span> <span
  m="3122580">holiday</span> <span m="3123060">is</span> <span
  m="3123210">also</span> <span m="3123600">coming</span> <span
  m="3123990">Friday.</span> <span m="3124470">And</span> <span
  m="3124680">just</span> <span m="3125500">you'll</span> <span
  m="3125970">make</span> <span m="3126270">a</span> <span
  m="3126330">good</span> <span m="3127590">plan,</span> <span
  m="3128070">and</span> <span m="3128220">I'll</span> <span
  m="3130090">move</span> <span m="3130390">on</span> <span
  m="3130780">after</span> <span m="3131140">the</span> <span
  m="3131230">break.</span> <span m="3131830">Good.</span></p>
uid: 1a9b96a6848456dd2b380557ed66a416
type: courses
layout: video
---
