---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Lynch introduces
  synchronous distributed algorithms.</p> <p><strong>Instructors:</strong> Nancy
  Ann Lynch</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: mUBmcbbJNf4
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f6554e87e8d5941162a5245ef0b42921
  - id: mUBmcbbJNf4.srt
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-19-synchronous-distributed-algorithms-symmetry-breaking.-shortest-paths-spanning-trees/mUBmcbbJNf4.srt
    title: 3play caption file
    type: null
    uid: 6a4484fb08a1bbcfb4fa9f5965641df1
  - id: mUBmcbbJNf4.pdf
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-19-synchronous-distributed-algorithms-symmetry-breaking.-shortest-paths-spanning-trees/mUBmcbbJNf4.pdf
    title: 3play pdf file
    type: null
    uid: 836cf86687c635e3566e26ab3c852f70
  - id: Caption-3Play YouTube id-SRT
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8627345021e753277a772a0c32ff4627
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d41e0559489e6e8c637f154e6b9358ba
  - id: Video-YouTube-MP4
    media_location: mUBmcbbJNf4
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    title: Video-YouTube-MP4
    type: Video
    uid: ec6673588d88f79a3b8c4161ef4177a5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/mUBmcbbJNf4/default.jpg'
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d0cb791511f39b01129e29ada1c7e00b
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    title: Video-iTunes U-MP4
    type: Video
    uid: b740959afce7dcd1d5916832c4139865
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec19_300k.mp4'
    parent_uid: cc27152a39adf9a64c6abc3166252a39
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0312b13118e18738650a5cbb9cdcf5ac
inline_embed_id: >-
  92260383lecture19:synchronousdistributedalgorithms:symmetry-breaking.shortest-pathsspanningtrees72982422
order_index: 287
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: >-
  lecture-19-synchronous-distributed-algorithms-symmetry-breaking.-shortest-paths-spanning-trees
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-19-synchronous-distributed-algorithms-symmetry-breaking.-shortest-paths-spanning-trees
title: >-
  Lecture 19: Synchronous Distributed Algorithms: Symmetry-Breaking.
  Shortest-Paths Spanning Trees
transcript: >-
  <p><span m="60">The</span> <span m="190">following</span> <span
  m="630">content</span> <span m="1220">is</span> <span m="1340">provided</span>
  <span m="1780">under</span> <span m="2060">a</span> <span
  m="2100">Creative</span> <span m="2500">Commons</span> <span
  m="2910">license.</span> <span m="4019">Your</span> <span
  m="4210">support</span> <span m="4710">will</span> <span m="4870">help</span>
  <span m="5110">MIT</span> <span m="5570">OpenCourseWare</span> <span
  m="6360">continue</span> <span m="6870">to</span> <span m="6950">offer</span>
  <span m="7360">high</span> <span m="7600">quality,</span> <span
  m="8119">educational</span> <span m="8750">resources</span> <span
  m="9370">for</span> <span m="9520">free.</span> <span m="10730">To</span>
  <span m="10830">make</span> <span m="10940">a</span> <span
  m="10980">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13330">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="26600">NANCY LYNCH: OK</span> <span m="26850">so</span> <span
  m="27480">today,</span> <span m="27790">you're</span> <span
  m="27920">going</span> <span m="28230">to</span> <span m="28610">see</span>
  <span m="28810">something</span> <span m="29230">new.</span> <span
  m="29560">In</span> <span m="29660">fact</span> <span m="29860">all</span>
  <span m="30010">this</span> <span m="30200">week,</span> <span
  m="30560">you're</span> <span m="30590">going</span> <span m="30800">to</span>
  <span m="30900">see</span> <span m="31070">something</span> <span
  m="31530">that's</span> <span m="32280">quite</span> <span
  m="32549">different</span> <span m="33070">from</span> <span
  m="33220">what</span> <span m="33380">you've</span> <span
  m="33510">been</span> <span m="33670">studying</span> <span
  m="34210">in</span> <span m="35520">this</span> <span m="35710">course.</span>
  <span m="36960">These</span> <span m="37130">are</span> <span
  m="37200">algorithms.</span> <span m="37950">But</span> <span
  m="38180">they're</span> <span m="38400">for</span> <span m="38560">a</span>
  <span m="38610">completely</span> <span m="39020">different</span> <span
  m="39360">sort</span> <span m="39560">of</span> <span
  m="39670">model.</span></p><p><span m="42380">Distributed</span> <span
  m="42890">algorithms,</span> <span m="43760">OK,</span> <span
  m="44040">so</span> <span m="44210">what</span> <span m="44370">are</span>
  <span m="44500">they?</span> <span m="46110">So</span> <span
  m="46310">now</span> <span m="46560">instead</span> <span m="46930">of</span>
  <span m="47010">having</span> <span m="47560">algorithms</span> <span
  m="48190">that</span> <span m="48360">run</span> <span m="48650">on</span>
  <span m="49310">a</span> <span m="49410">typical</span> <span
  m="49840">computer,</span> <span m="50360">you're</span> <span
  m="50480">going</span> <span m="50730">to</span> <span m="50800">have</span>
  <span m="51020">algorithms</span> <span m="51680">that</span> <span
  m="51860">run</span> <span m="52300">on</span> <span m="52980">a</span> <span
  m="53060">network</span> <span m="53760">of</span> <span
  m="53930">processors.</span> <span m="55400">Or</span> <span
  m="55640">it</span> <span m="55810">could</span> <span m="56020">be</span>
  <span m="56410">on</span> <span m="56540">one</span> <span
  m="56730">machine</span> <span m="57220">that</span> <span
  m="57350">has</span> <span m="57570">multiple</span> <span
  m="58060">processors,</span> <span m="59610">multi</span> <span
  m="59920">processors</span> <span m="60610">that</span> <span
  m="61060">memory.</span> <span m="65970">Much</span> <span m="66300">of</span>
  <span m="66480">computing</span> <span m="67060">is</span> <span
  m="67600">distributed</span> <span m="68440">algorithms</span> <span
  m="69190">now.</span> <span m="69370">They</span> <span m="69510">solve</span>
  <span m="69910">problems</span> <span m="70500">like</span> <span
  m="70700">communication</span> <span m="71550">on</span> <span
  m="71640">the</span> <span m="71770">internet,</span> <span
  m="74760">data</span> <span m="75000">management</span> <span
  m="75800">over</span> <span m="76240">a</span> <span m="76310">network,</span>
  <span m="78560">allocating</span> <span m="79110">resources</span> <span
  m="79770">in</span> <span m="79860">a</span> <span m="79920">network</span>
  <span m="80360">setting,</span> <span m="81260">synchronizing,</span> <span
  m="82690">reaching</span> <span m="83000">agreement</span> <span
  m="83540">among</span> <span m="83880">different</span> <span
  m="85920">agents</span> <span m="87520">at</span> <span
  m="87790">remote</span> <span m="88150">locations.</span> <span
  m="88990">So</span> <span m="89060">these</span> <span m="89280">are</span>
  <span m="89380">all</span> <span m="89570">distributed</span> <span
  m="90280">problems,</span> <span m="90880">not</span> <span
  m="91160">things</span> <span m="91470">that</span> <span m="91630">you</span>
  <span m="91750">just</span> <span m="91990">solve</span> <span
  m="92370">on</span> <span m="92500">one</span> <span
  m="92710">computer.</span></p><p><span m="94610">The</span> <span
  m="94730">kinds</span> <span m="94990">of</span> <span
  m="95080">algorithms</span> <span m="95640">you</span> <span
  m="95740">design</span> <span m="96150">for</span> <span
  m="97440">these</span> <span m="97650">settings</span> <span
  m="98120">have</span> <span m="98380">to</span> <span m="98500">work</span>
  <span m="98940">under</span> <span m="99880">extremely</span> <span
  m="100430">difficult</span> <span m="104640">platforms</span> <span
  m="105420">because</span> <span m="105730">what</span> <span
  m="105900">you</span> <span m="106040">have</span> <span m="106370">is</span>
  <span m="106940">concurrent</span> <span m="107480">activity</span> <span
  m="108110">that's</span> <span m="108360">going</span> <span
  m="108650">on</span> <span m="108850">at</span> <span m="108960">many</span>
  <span m="109200">locations,</span> <span m="110290">many</span> <span
  m="110510">processors</span> <span m="111210">doing</span> <span
  m="111450">things</span> <span m="111840">at</span> <span
  m="111940">the</span> <span m="112040">same</span> <span
  m="112190">time.</span> <span m="113220">And</span> <span
  m="113350">you</span> <span m="113420">don't</span> <span
  m="113580">know</span> <span m="113670">exactly</span> <span
  m="114260">when</span> <span m="114850">everybody's</span> <span
  m="115510">going</span> <span m="115800">to</span> <span
  m="115900">perform</span> <span m="117070">their</span> <span
  m="117260">activities.</span> <span m="117970">You</span> <span
  m="118100">can</span> <span m="118250">have</span> <span
  m="119070">different</span> <span m="119520">sorts</span> <span
  m="119800">of</span> <span m="120480">timing</span> <span
  m="120970">uncertainty.</span> <span m="122090">The</span> <span
  m="122220">order</span> <span m="122510">of</span> <span
  m="122590">events</span> <span m="122990">isn't</span> <span
  m="123270">clear.</span> <span m="125010">There</span> <span
  m="125120">could</span> <span m="125240">be</span> <span
  m="125370">inputs</span> <span m="126250">that</span> <span
  m="126440">arrive</span> <span m="126930">at</span> <span
  m="127030">different</span> <span m="127340">locations.</span> <span
  m="128830">And</span> <span m="128910">then</span> <span m="129030">you</span>
  <span m="129160">also</span> <span m="129479">have</span> <span
  m="129680">to</span> <span m="129800">deal</span> <span m="130139">with</span>
  <span m="130380">failure</span> <span m="130840">and</span> <span
  m="131000">recovery</span> <span m="132150">of</span> <span
  m="132290">some</span> <span m="132530">of</span> <span m="132640">the</span>
  <span m="132730">processors</span> <span m="133490">or</span> <span
  m="133570">some</span> <span m="133800">of</span> <span m="133900">the</span>
  <span m="134010">channels</span> <span m="134570">involved</span> <span
  m="135190">in</span> <span m="135720">the</span> <span
  m="135800">computation.</span> <span m="136690">You</span> <span
  m="136770">don't</span> <span m="136970">think</span> <span
  m="137150">of</span> <span m="137250">any</span> <span m="137470">of</span>
  <span m="137590">this</span> <span m="137850">when</span> <span
  m="137980">you're</span> <span m="138130">just</span> <span
  m="138360">trying</span> <span m="138630">to</span> <span
  m="138750">run</span> <span m="138940">an</span> <span
  m="139030">algorithm</span> <span m="139650">on</span> <span
  m="139800">one</span> <span m="140010">computer.</span></p><p><span
  m="142920">So</span> <span m="143270">distributed</span> <span
  m="143820">algorithms</span> <span m="144470">can</span> <span
  m="144640">be</span> <span m="144910">pretty</span> <span
  m="145170">complicated.</span> <span m="145990">It's</span> <span
  m="146420">not</span> <span m="146630">easy</span> <span m="146920">to</span>
  <span m="147040">design</span> <span m="147540">them.</span> <span
  m="148210">And</span> <span m="149210">after</span> <span
  m="149590">you</span> <span m="149720">design</span> <span
  m="150150">them,</span> <span m="150420">you</span> <span
  m="150520">still</span> <span m="150670">have</span> <span
  m="150780">to</span> <span m="150880">make</span> <span m="151080">sure</span>
  <span m="151310">they're</span> <span m="151510">correct.</span> <span
  m="152070">So</span> <span m="152180">there</span> <span m="152275">are</span>
  <span m="152370">issues</span> <span m="152760">involved</span> <span
  m="153180">in</span> <span m="153280">proving</span> <span
  m="153680">them</span> <span m="153840">correct</span> <span
  m="154290">and</span> <span m="154390">analyzing</span> <span
  m="155010">them.</span> <span m="155730">A</span> <span
  m="156070">little</span> <span m="156240">bit</span> <span
  m="156350">of</span> <span m="156420">history,</span> <span
  m="157410">the</span> <span m="157670">field</span> <span
  m="157980">pretty</span> <span m="158260">much</span> <span
  m="158480">started</span> <span m="158930">around</span> <span
  m="159190">the</span> <span m="159260">late</span> <span
  m="159580">'60s.</span> <span m="162000">Edsger</span> <span
  m="162350">Dijkstra</span> <span m="163430">was</span> <span
  m="163920">one</span> <span m="164110">of</span> <span m="164190">the</span>
  <span m="164420">earliest</span> <span m="165330">leaders</span> <span
  m="165740">in</span> <span m="165810">the</span> <span
  m="165900">field.</span> <span m="166330">He</span> <span
  m="166500">won</span> <span m="166910">of</span> <span m="166990">the</span>
  <span m="167080">first</span> <span m="167450">Turing</span> <span
  m="167720">Awards.</span> <span m="169850">Leslie</span> <span
  m="170210">Lamport</span> <span m="171100">won</span> <span
  m="171450">the</span> <span m="171550">Turing</span> <span
  m="171840">Award</span> <span m="172190">last</span> <span
  m="172560">year.</span> <span m="172780">Although</span> <span
  m="173010">he</span> <span m="173150">actually</span> <span
  m="173520">started</span> <span m="174020">as</span> <span m="174110">a</span>
  <span m="174160">very</span> <span m="174400">young</span> <span
  m="174610">guy,</span> <span m="175590">way</span> <span
  m="175910">back</span> <span m="176270">in</span> <span m="176370">the</span>
  <span m="176500">early</span> <span m="176790">days</span> <span
  m="177120">of</span> <span m="177260">the</span> <span
  m="177330">field.</span></p><p><span m="179470">If</span> <span
  m="179610">you</span> <span m="179720">want</span> <span m="179870">to</span>
  <span m="179910">look</span> <span m="180120">at</span> <span
  m="180240">some</span> <span m="180400">sources,</span> <span
  m="181070">I</span> <span m="181200">have</span> <span m="181360">a</span>
  <span m="181410">book.</span> <span m="181770">There's</span> <span
  m="181940">another</span> <span m="182250">textbook</span> <span
  m="182540">by</span> <span m="182830">Attiya</span> <span
  m="183030">and</span> <span m="183450">Welch.</span> <span
  m="184390">There's</span> <span m="184570">a</span> <span
  m="184620">new</span> <span m="184770">series</span> <span
  m="185210">of</span> <span m="185320">monographs</span> <span
  m="185990">that</span> <span m="186240">basically</span> <span
  m="186710">try</span> <span m="186920">to</span> <span
  m="187030">summarize</span> <span m="187670">many</span> <span
  m="187980">of</span> <span m="188100">the</span> <span
  m="188640">important</span> <span m="189130">research</span> <span
  m="189660">topics</span> <span m="190190">in</span> <span
  m="190290">distributed</span> <span m="190840">computing</span> <span
  m="191280">theory.</span> <span m="192250">And</span> <span
  m="192860">the</span> <span m="193020">last</span> <span m="193720">two</span>
  <span m="193960">lines</span> <span m="194330">have</span> <span
  m="194460">a</span> <span m="194520">couple</span> <span m="194850">of</span>
  <span m="195000">the</span> <span m="195070">main</span> <span
  m="195350">conferences</span> <span m="196170">in</span> <span
  m="196290">the</span> <span m="196380">field.</span></p><p><span
  m="198620">OK</span> <span m="198880">so</span> <span m="199280">I</span>
  <span m="199350">can't</span> <span m="199610">do</span> <span
  m="199720">that</span> <span m="199980">much</span> <span m="200280">in</span>
  <span m="200370">one</span> <span m="200580">week.</span> <span
  m="201750">What</span> <span m="202000">I'll</span> <span m="202150">do</span>
  <span m="202350">is</span> <span m="202530">just</span> <span
  m="202790">introduce</span> <span m="203450">the</span> <span
  m="203630">area,</span> <span m="204610">by</span> <span
  m="204870">showing</span> <span m="205250">you</span> <span
  m="205450">two</span> <span m="205720">common</span> <span
  m="206140">models</span> <span m="206890">for</span> <span
  m="207010">distributed</span> <span m="207980">networks.</span> <span
  m="209140">And</span> <span m="209710">just</span> <span
  m="209920">introduce</span> <span m="210580">a</span> <span
  m="210670">very</span> <span m="211080">few</span> <span
  m="211430">fundamental</span> <span m="212060">algorithms,</span> <span
  m="212750">and</span> <span m="212840">you'll</span> <span
  m="212980">see</span> <span m="213180">along</span> <span
  m="213470">the</span> <span m="213550">way</span> <span m="213760">some</span>
  <span m="213970">techniques</span> <span m="214510">for</span> <span
  m="214610">modeling</span> <span m="215060">and</span> <span
  m="215140">analyzing</span> <span m="215720">them.</span> <span
  m="217030">OK</span> <span m="217190">the</span> <span m="217310">two</span>
  <span m="217480">models</span> <span m="217910">here</span> <span
  m="218180">are</span> <span m="218340">synchronous</span> <span
  m="219110">distributed</span> <span m="219740">networks,</span> <span
  m="220990">and</span> <span m="221380">asynchronous</span> <span
  m="222160">distributed</span> <span m="222780">networks.</span> <span
  m="224820">The</span> <span m="224950">problems</span> <span
  m="225420">I'll</span> <span m="225550">look</span> <span m="225750">at</span>
  <span m="225910">in</span> <span m="226010">the</span> <span
  m="226090">synchronous</span> <span m="226620">setting</span> <span
  m="227050">are</span> <span m="227430">a</span> <span m="227490">simple</span>
  <span m="227830">problem</span> <span m="228050">of</span> <span
  m="228270">leader</span> <span m="228680">election,</span> <span
  m="229900">which</span> <span m="230040">is</span> <span m="230180">a</span>
  <span m="230360">symmetry</span> <span m="230860">breaking</span> <span
  m="231340">problem,</span> <span m="231990">basically.</span> <span
  m="233400">Maximal</span> <span m="234190">independence</span> <span
  m="234960">set</span> <span m="235220">problem,</span> <span
  m="237140">and</span> <span m="237320">then</span> <span m="237940">a</span>
  <span m="238010">couple</span> <span m="238250">of</span> <span
  m="238330">problems</span> <span m="238780">that</span> <span
  m="238920">should</span> <span m="239130">look</span> <span
  m="239330">familiar</span> <span m="239800">to</span> <span
  m="239910">you</span> <span m="240060">from</span> <span m="240380">the</span>
  <span m="240590">settings</span> <span m="241080">of</span> <span
  m="241260">this</span> <span m="241460">class,</span> <span
  m="242670">establishing</span> <span m="243950">structures</span> <span
  m="244530">like</span> <span m="244710">breadth-first</span> <span
  m="245230">spanning</span> <span m="245600">trees</span> <span
  m="245900">and</span> <span m="246020">shortest</span> <span
  m="246460">paths</span> <span m="246890">trees.</span> <span
  m="248360">In</span> <span m="248460">the</span> <span
  m="248580">asynchronous</span> <span m="249220">case</span> <span
  m="249510">I'll</span> <span m="249940">revisit</span> <span
  m="250230">these</span> <span m="250360">last</span> <span
  m="250680">two</span> <span m="250800">problems,</span> <span
  m="251370">setting</span> <span m="251680">up</span> <span
  m="251810">breadth-first</span> <span m="252560">and</span> <span
  m="252670">shortest</span> <span m="253030">path</span> <span
  m="253290">trees.</span></p><p><span m="255100">OK</span> <span
  m="255410">so</span> <span m="255850">I</span> <span
  m="255950">mentioned</span> <span m="256360">something</span> <span
  m="256720">about</span> <span m="257060">modeling</span> <span
  m="257620">in</span> <span m="257720">proofs</span> <span
  m="257950">and</span> <span m="258180">analysis.</span> <span
  m="259430">Turns</span> <span m="259730">out,</span> <span
  m="259920">getting</span> <span m="260820">the</span> <span
  m="260910">formal</span> <span m="261310">models</span> <span
  m="261769">right</span> <span m="263030">and</span> <span
  m="263350">getting</span> <span m="263840">real</span> <span
  m="264090">proofs</span> <span m="265240">tends</span> <span
  m="265530">to</span> <span m="265610">be</span> <span m="265730">pretty</span>
  <span m="266010">important</span> <span m="266550">for</span> <span
  m="266680">distributed</span> <span m="267240">algorithms</span> <span
  m="267830">because</span> <span m="268640">with</span> <span
  m="268770">all</span> <span m="268890">the</span> <span
  m="269030">stuff</span> <span m="269330">going</span> <span
  m="269630">on,</span> <span m="269830">they're</span> <span
  m="269970">complicated.</span> <span m="271180">And</span> <span
  m="271590">it's</span> <span m="271780">easy</span> <span m="272040">to</span>
  <span m="272120">make</span> <span m="272370">mistakes.</span> <span
  m="274030">The</span> <span m="274130">kinds</span> <span m="274380">of</span>
  <span m="274470">models</span> <span m="274900">that</span> <span
  m="275040">we</span> <span m="275200">use</span> <span m="275500">are</span>
  <span m="275770">interacting</span> <span m="276780">state</span> <span
  m="277100">machines,</span> <span m="278110">inputs</span> <span
  m="278660">and</span> <span m="278770">outputs.</span> <span
  m="279320">They</span> <span m="279420">send</span> <span
  m="279640">each</span> <span m="279790">other</span> <span
  m="279960">messages.</span> <span m="281640">But</span> <span
  m="282450">the</span> <span m="282560">kinds</span> <span m="282810">of</span>
  <span m="282920">proofs</span> <span m="283240">you</span> <span
  m="283370">do</span> <span m="283550">typically</span> <span
  m="284050">use</span> <span m="284320">invariants,</span> <span
  m="285080">a</span> <span m="285150">technique</span> <span
  m="285670">that</span> <span m="285780">you're</span> <span
  m="285960">very</span> <span m="286210">familiar</span> <span
  m="286640">with</span> <span m="286860">from</span> <span
  m="287040">this</span> <span m="287210">class.</span> <span
  m="287680">You</span> <span m="287800">can</span> <span
  m="287980">still</span> <span m="288230">use</span> <span
  m="288520">them</span> <span m="289130">in</span> <span m="289280">a</span>
  <span m="289360">distributed</span> <span m="289960">setting.</span> <span
  m="290670">And</span> <span m="291020">you</span> <span
  m="291190">still</span> <span m="291410">prove</span> <span
  m="291690">them</span> <span m="291840">the</span> <span
  m="291920">same</span> <span m="292220">way,</span> <span m="292430">by</span>
  <span m="292600">induction.</span></p><p><span m="293910">Something</span>
  <span m="294300">else</span> <span m="294480">that</span> <span
  m="294580">comes</span> <span m="294850">up</span> <span m="295000">a</span>
  <span m="295060">lot</span> <span m="295460">in</span> <span
  m="295540">the</span> <span m="295640">distributed</span> <span
  m="296250">setting</span> <span m="296640">is</span> <span
  m="297990">modeling</span> <span m="298450">and</span> <span
  m="298650">proofs</span> <span m="298850">using</span> <span
  m="299150">levels</span> <span m="299480">of</span> <span
  m="299580">abstraction.</span> <span m="300690">You</span> <span
  m="300800">might</span> <span m="300960">want</span> <span
  m="301080">to</span> <span m="301130">give</span> <span m="301290">an</span>
  <span m="301370">abstract</span> <span m="301870">description</span> <span
  m="302810">of</span> <span m="302950">an</span> <span
  m="303030">algorithm</span> <span m="303710">and</span> <span
  m="303850">prove</span> <span m="304130">that</span> <span
  m="304200">that</span> <span m="304410">works.</span> <span
  m="304860">And</span> <span m="304970">then</span> <span m="305080">you</span>
  <span m="305150">have</span> <span m="305280">a</span> <span
  m="305320">very</span> <span m="305550">detailed,</span> <span
  m="306320">complicated,</span> <span m="307720">lower</span> <span
  m="308010">level</span> <span m="308340">description</span> <span
  m="309670">that</span> <span m="309880">you</span> <span m="309990">can</span>
  <span m="310150">prove</span> <span m="310440">implements</span> <span
  m="311060">the</span> <span m="311130">higher</span> <span
  m="311480">level</span> <span m="311780">description.</span> <span
  m="313286">That's</span> <span m="313710">another</span> <span
  m="313840">popular</span> <span m="314290">technique.</span> <span
  m="315460">You</span> <span m="315590">use</span> <span
  m="315840">different</span> <span m="316170">kinds</span> <span
  m="316430">of</span> <span m="316520">complexity</span> <span
  m="317110">measures.</span> <span m="317670">For</span> <span
  m="317790">time</span> <span m="318110">complexity,</span> <span
  m="319400">you</span> <span m="319650">would</span> <span
  m="319920">measure</span> <span m="320920">rounds</span> <span
  m="321510">if</span> <span m="321640">it's</span> <span m="321790">the</span>
  <span m="321880">synchronous</span> <span m="322400">model,</span> <span
  m="322860">or</span> <span m="323090">some</span> <span
  m="324800">approximation</span> <span m="325610">to</span> <span
  m="325770">real</span> <span m="326040">time,</span> <span
  m="326570">if</span> <span m="326760">it's</span> <span m="326930">the</span>
  <span m="327090">asynchronous</span> <span m="327740">model.</span> <span
  m="328660">You</span> <span m="328790">also</span> <span
  m="329050">count</span> <span m="329350">communication,</span> <span
  m="330740">either</span> <span m="331000">the</span> <span
  m="331130">number</span> <span m="331410">of</span> <span
  m="331470">messages</span> <span m="331980">you</span> <span
  m="332100">send,</span> <span m="332460">or</span> <span m="332580">the</span>
  <span m="332720">total</span> <span m="333010">number</span> <span
  m="333310">of</span> <span m="333410">bits</span> <span m="333660">that</span>
  <span m="333800">you</span> <span m="333920">send</span> <span
  m="334320">in</span> <span m="334570">an</span> <span
  m="334960">algorithm.</span></p><p><span m="338000">So</span> <span
  m="338570">throughout</span> <span m="339080">these</span> <span
  m="339750">two</span> <span m="339960">lectures,</span> <span
  m="340550">we'll</span> <span m="340680">be</span> <span
  m="340780">looking</span> <span m="341170">at</span> <span
  m="341830">distributed</span> <span m="342660">networks.</span> <span
  m="344300">So</span> <span m="344450">you</span> <span m="344570">start</span>
  <span m="344870">with</span> <span m="344990">a</span> <span
  m="345040">graph.</span> <span m="345740">Let's</span> <span
  m="345870">just</span> <span m="346180">look</span> <span m="346360">at</span>
  <span m="346470">undirected</span> <span m="347100">graphs</span> <span
  m="347570">this</span> <span m="347780">week.</span> <span
  m="349830">We</span> <span m="349970">use</span> <span m="350180">n</span>
  <span m="350560">in</span> <span m="350740">this</span> <span
  m="350950">field</span> <span m="351380">for</span> <span
  m="351620">what</span> <span m="351790">you're</span> <span
  m="352050">calling</span> <span m="352430">v,</span> <span
  m="353790">the</span> <span m="354000">total</span> <span
  m="354280">number</span> <span m="354720">of</span> <span
  m="355220">nodes</span> <span m="355780">in</span> <span m="355940">the</span>
  <span m="356010">network</span> <span m="356490">or</span> <span
  m="358840">vertices</span> <span m="359350">in</span> <span
  m="359450">the</span> <span m="359540">graph.</span> <span
  m="361780">We</span> <span m="361910">use</span> <span m="362110">the</span>
  <span m="362200">notation</span> <span m="362890">gamma</span> <span
  m="363390">of</span> <span m="363550">u</span> <span m="363710">to</span>
  <span m="363865">mean</span> <span m="364020">the</span> <span
  m="364090">neighbors</span> <span m="364730">of</span> <span
  m="364840">u</span> <span m="365200">in</span> <span m="365310">the</span>
  <span m="365400">graph.</span> <span m="366910">So</span> <span
  m="367110">every</span> <span m="367630">vertex</span> <span
  m="368130">of</span> <span m="368220">the</span> <span m="368310">graph</span>
  <span m="368710">has</span> <span m="368990">a</span> <span
  m="369270">set</span> <span m="369390">of</span> <span
  m="370210">immediate</span> <span m="370640">neighboring</span> <span
  m="371060">vertices.</span> <span m="371810">That's</span> <span
  m="371910">gamma</span> <span m="372240">of</span> <span m="372445">u.</span>
  <span m="373730">And</span> <span m="373880">the</span> <span
  m="373970">degree</span> <span m="375720">of</span> <span m="375800">u</span>
  <span m="376190">is</span> <span m="376560">the</span> <span
  m="376870">size</span> <span m="377280">of</span> <span m="377370">the</span>
  <span m="377460">neighborhood,</span> <span m="378820">the</span> <span
  m="378940">number</span> <span m="379310">of</span> <span
  m="379450">neighbors</span> <span m="379950">of</span> <span
  m="380030">the</span> <span m="380090">vertex.</span></p><p><span
  m="382090">OK</span> <span m="382630">so</span> <span m="382780">we</span>
  <span m="383160">start</span> <span m="383400">with</span> <span
  m="383480">the</span> <span m="383550">graph.</span> <span
  m="384050">But</span> <span m="384180">now</span> <span
  m="384340">we're</span> <span m="384470">going</span> <span
  m="384780">to</span> <span m="385170">plunk</span> <span
  m="385430">down</span> <span m="385740">a</span> <span
  m="385800">process,</span> <span m="387170">some</span> <span
  m="387400">kind</span> <span m="387730">of</span> <span
  m="387970">active</span> <span m="388760">entity</span> <span
  m="389350">at</span> <span m="389580">each</span> <span
  m="390060">vertex</span> <span m="390610">of</span> <span
  m="390730">the</span> <span m="390810">graph.</span> <span
  m="391900">So</span> <span m="391920">this</span> <span m="392110">is</span>
  <span m="392220">some</span> <span m="392420">kind</span> <span
  m="392660">of</span> <span m="392750">automaton.</span> <span
  m="393520">If</span> <span m="393620">you've</span> <span
  m="393780">taken</span> <span m="394350">automata</span> <span
  m="394810">theory,</span> <span m="395160">it's</span> <span
  m="395310">not</span> <span m="395680">really</span> <span
  m="396130">finite</span> <span m="396560">state</span> <span
  m="396830">machines,</span> <span m="397400">it's</span> <span
  m="397670">more</span> <span m="398420">like</span> <span
  m="398810">infinite</span> <span m="399240">state</span> <span
  m="399530">automata</span> <span m="399960">that</span> <span
  m="400360">can</span> <span m="400570">interact</span> <span
  m="401110">with</span> <span m="401240">each</span> <span
  m="401420">other.</span> <span m="403760">So</span> <span m="404170">we</span>
  <span m="404310">usually</span> <span m="404660">talk</span> <span
  m="404920">about</span> <span m="405200">vertices</span> <span
  m="405900">in</span> <span m="406010">a</span> <span m="406070">graph,</span>
  <span m="406590">processes</span> <span m="407820">at</span> <span
  m="408020">the</span> <span m="408080">vertices</span> <span
  m="408640">of</span> <span m="408740">a</span> <span m="408790">graph.</span>
  <span m="409160">But</span> <span m="409300">sometimes</span> <span
  m="409700">we</span> <span m="409790">get</span> <span
  m="409980">sloppy</span> <span m="410420">and</span> <span
  m="410510">just</span> <span m="410720">say</span> <span
  m="410890">nodes.</span> <span m="411930">And</span> <span
  m="412660">we</span> <span m="412980">could</span> <span
  m="413110">mean</span> <span m="413270">either</span> <span
  m="413460">the</span> <span m="413570">vertex</span> <span
  m="414130">or</span> <span m="414260">the</span> <span
  m="414400">active</span> <span m="414760">thing</span> <span
  m="414980">running</span> <span m="415260">at</span> <span
  m="415360">the</span> <span m="415420">vertex.</span> <span
  m="416740">Can't</span> <span m="416970">keep</span> <span
  m="417110">them</span> <span m="417380">straight</span> <span
  m="417720">all</span> <span m="417840">the</span> <span
  m="417940">time.</span> <span m="419840">OK</span> <span m="420170">and</span>
  <span m="420390">then</span> <span m="420760">with</span> <span
  m="420920">the</span> <span m="421090">edges</span> <span m="421500">of</span>
  <span m="421590">the</span> <span m="421690">graph,</span> <span
  m="422120">we</span> <span m="422270">would</span> <span m="423120">put</span>
  <span m="423850">communication</span> <span m="424580">channels,</span> <span
  m="425120">one</span> <span m="425330">in</span> <span m="425420">each</span>
  <span m="425660">direction,</span> <span m="427120">so</span> <span
  m="427360">that</span> <span m="427590">the</span> <span
  m="428080">processes</span> <span m="428690">can</span> <span
  m="428870">communicate</span> <span m="429520">over</span> <span
  m="429700">the</span> <span m="429880">edges.</span> <span
  m="431700">This</span> <span m="431900">week</span> <span
  m="432100">I'm</span> <span m="432230">not</span> <span
  m="432440">going</span> <span m="432710">to</span> <span
  m="432840">talk</span> <span m="433140">about</span> <span
  m="433690">what</span> <span m="433840">happens</span> <span
  m="434230">when</span> <span m="434400">you</span> <span
  m="434530">introduce</span> <span m="435070">failures</span> <span
  m="436120">because</span> <span m="436470">we</span> <span
  m="436580">just</span> <span m="436750">don't</span> <span
  m="436950">have</span> <span m="437090">time.</span> <span m="437610">A</span>
  <span m="437990">lot</span> <span m="438260">of</span> <span
  m="438350">distributed</span> <span m="438890">computing</span> <span
  m="439330">theory</span> <span m="439630">deals</span> <span
  m="439930">with</span> <span m="440630">what</span> <span
  m="440800">happens</span> <span m="441290">when</span> <span
  m="441460">some</span> <span m="441680">of</span> <span m="441800">the</span>
  <span m="441910">components</span> <span m="442580">in</span> <span
  m="442720">your</span> <span m="442940">system</span> <span
  m="443360">fail.</span> <span m="444340">How</span> <span m="444460">do</span>
  <span m="444520">you</span> <span m="444620">cope</span> <span
  m="444840">with</span> <span m="444980">that?</span></p><p><span
  m="447330">So</span> <span m="447510">we'll</span> <span
  m="447610">start</span> <span m="447870">right</span> <span
  m="448070">in</span> <span m="448230">with</span> <span
  m="448390">synchronous</span> <span m="449180">distributed</span> <span
  m="449940">algorithms.</span> <span m="453030">A</span> <span
  m="453210">source</span> <span m="453355">for</span> <span
  m="453500">that,</span> <span m="453780">if</span> <span
  m="453860">you're</span> <span m="454050">interested</span> <span
  m="454580">is</span> <span m="454870">the</span> <span m="455140">first</span>
  <span m="456070">technical</span> <span m="456560">chapter</span> <span
  m="456930">in</span> <span m="457030">my</span> <span m="457040">book.</span>
  <span m="458180">OK</span> <span m="458400">so</span> <span
  m="458530">you</span> <span m="458610">have</span> <span
  m="458740">processes</span> <span m="459400">at</span> <span
  m="459510">the</span> <span m="459600">nodes</span> <span m="460210">of</span>
  <span m="460490">a</span> <span m="460600">graph,</span> <span
  m="461060">like</span> <span m="461230">I</span> <span m="461280">just</span>
  <span m="461520">said.</span> <span m="462270">They</span> <span
  m="462380">communicate</span> <span m="462980">using</span> <span
  m="463280">messages.</span> <span m="465830">So</span> <span
  m="466070">think</span> <span m="466260">of</span> <span
  m="466360">each</span> <span m="466610">process</span> <span
  m="467330">as</span> <span m="467530">not</span> <span
  m="467830">knowing</span> <span m="468310">who</span> <span
  m="468700">his</span> <span m="468880">neighbors</span> <span
  m="469270">are,</span> <span m="469460">not</span> <span
  m="469610">knowing</span> <span m="469840">anything</span> <span
  m="470190">about</span> <span m="470470">the</span> <span
  m="470540">graph.</span> <span m="471930">So</span> <span
  m="472030">what</span> <span m="472170">do</span> <span m="472560">they</span>
  <span m="472680">have?</span> <span m="473080">They</span> <span
  m="473185">have</span> <span m="473290">ports.</span> <span
  m="473990">You</span> <span m="474110">could</span> <span
  m="474390">say</span> <span m="474610">they</span> <span
  m="474790">have</span> <span m="474990">output</span> <span
  m="475460">ports,</span> <span m="476610">on</span> <span
  m="476770">which</span> <span m="476950">they</span> <span
  m="477060">could</span> <span m="477210">send</span> <span m="477410">a</span>
  <span m="477460">message,</span> <span m="478050">and</span> <span
  m="478180">then</span> <span m="478360">some</span> <span
  m="478710">input</span> <span m="479060">ports</span> <span
  m="479980">on</span> <span m="480150">which</span> <span
  m="480960">messages</span> <span m="481360">can</span> <span
  m="481510">come</span> <span m="481740">in.</span> <span m="482900">So</span>
  <span m="483350">in</span> <span m="483490">general,</span> <span
  m="483930">the</span> <span m="484030">process</span> <span
  m="484550">doesn't</span> <span m="484930">know</span> <span
  m="486060">who</span> <span m="486230">the</span> <span
  m="486530">ports</span> <span m="486880">are</span> <span
  m="486970">connected</span> <span m="487480">to.</span> <span
  m="488660">It</span> <span m="488810">just</span> <span m="489010">has</span>
  <span m="489150">local</span> <span m="489470">names</span> <span
  m="489850">for</span> <span m="489930">the</span> <span
  m="490040">ports,</span> <span m="490470">like</span> <span
  m="490650">one,</span> <span m="490880">two,</span> <span
  m="491060">three,</span> <span m="491490">up</span> <span m="491630">to</span>
  <span m="491740">the</span> <span m="492350">degree.</span></p><p><span
  m="493800">If</span> <span m="493830">you</span> <span m="493900">have</span>
  <span m="494010">any</span> <span m="494150">questions</span> <span
  m="495180">just</span> <span m="495360">stop</span> <span m="495720">me</span>
  <span m="496000">and</span> <span m="496760">ask,</span> <span
  m="497110">if</span> <span m="497190">something's</span> <span
  m="497610">not</span> <span m="497820">clear.</span> <span
  m="499190">Otherwise</span> <span m="499560">I'll</span> <span
  m="499640">go</span> <span m="499800">pretty</span> <span
  m="500100">fast.</span> <span m="501010">And</span> <span m="501210">I</span>
  <span m="501260">know</span> <span m="501410">that</span> <span
  m="501590">none</span> <span m="501810">of</span> <span m="501890">this</span>
  <span m="502050">is</span> <span m="502180">familiar.</span> <span
  m="505620">So</span> <span m="505820">in</span> <span
  m="505940">general,</span> <span m="506380">the</span> <span
  m="506460">processes</span> <span m="507070">don't</span> <span
  m="507280">have</span> <span m="507470">to</span> <span m="507560">be</span>
  <span m="507710">distinguishable</span> <span m="508640">at</span> <span
  m="508710">all.</span> <span m="511070">So</span> <span m="511140">they</span>
  <span m="511240">don't</span> <span m="511400">have</span> <span
  m="511580">to</span> <span m="511680">have</span> <span
  m="512330">special</span> <span m="513309">unique</span> <span
  m="513710">identifiers</span> <span m="515230">so</span> <span
  m="515380">you</span> <span m="515500">could</span> <span
  m="515640">tell</span> <span m="515799">the</span> <span
  m="515870">processes</span> <span m="516380">apart.</span> <span
  m="516710">They</span> <span m="516799">could</span> <span
  m="517049">be</span> <span m="517210">completely</span> <span
  m="518169">identical.</span> <span m="519059">Well</span> <span
  m="519470">if</span> <span m="519549">they</span> <span m="519640">have</span>
  <span m="519750">different</span> <span m="520010">numbers</span> <span
  m="520289">of</span> <span m="520390">ports,</span> <span
  m="520870">they're</span> <span m="521000">not</span> <span
  m="521380">exactly</span> <span m="521900">identical.</span> <span
  m="523370">They</span> <span m="523559">certainly</span> <span
  m="523890">know</span> <span m="524179">how</span> <span
  m="524320">many</span> <span m="524550">ports</span> <span
  m="524870">they</span> <span m="525010">have,</span> <span
  m="525460">and</span> <span m="525820">release</span> <span
  m="526120">the</span> <span m="526210">local</span> <span
  m="526550">names</span> <span m="526910">for</span> <span
  m="527000">the</span> <span m="527100">ports.</span></p><p><span
  m="531320">Good</span> <span m="531540">so</span> <span
  m="531680">these</span> <span m="531950">are</span> <span
  m="532180">processes</span> <span m="532830">sitting</span> <span
  m="533120">at</span> <span m="533200">the</span> <span m="533280">nodes</span>
  <span m="533570">of</span> <span m="533615">the</span> <span
  m="533660">graph.</span> <span m="533900">What</span> <span
  m="534050">do</span> <span m="534100">they</span> <span m="534240">do?</span>
  <span m="535350">So</span> <span m="535540">they</span> <span
  m="535730">execute.</span> <span m="536490">And</span> <span
  m="536560">we</span> <span m="536690">talk</span> <span
  m="536960">about</span> <span m="537280">an</span> <span
  m="537500">execution</span> <span m="538910">of</span> <span
  m="539570">this</span> <span m="539790">network.</span> <span
  m="540900">It</span> <span m="541090">goes</span> <span m="541370">in</span>
  <span m="541540">synchronous</span> <span m="542090">rounds,</span> <span
  m="542590">and</span> <span m="542680">every</span> <span
  m="542930">round,</span> <span m="544310">every</span> <span
  m="544600">process</span> <span m="545080">looks</span> <span
  m="545300">at</span> <span m="545370">its</span> <span
  m="545530">state,</span> <span m="546620">and</span> <span
  m="547040">decides</span> <span m="547550">what</span> <span
  m="547800">messages</span> <span m="548360">it's</span> <span
  m="548550">going</span> <span m="548820">to</span> <span
  m="548930">send</span> <span m="549750">on</span> <span m="549950">all</span>
  <span m="550150">of</span> <span m="550280">the</span> <span
  m="550370">ports.</span> <span m="552460">So</span> <span m="552550">it</span>
  <span m="552640">could</span> <span m="552970">send</span> <span
  m="553830">different</span> <span m="554110">messages</span> <span
  m="554730">on</span> <span m="554890">different</span> <span
  m="555170">ports.</span> <span m="558110">So</span> <span
  m="558260">then</span> <span m="558410">what</span> <span
  m="558540">happens</span> <span m="559090">is</span> <span
  m="559380">all</span> <span m="559560">the</span> <span
  m="559630">messages</span> <span m="560200">that</span> <span
  m="560330">the</span> <span m="560400">processes</span> <span
  m="561030">decide</span> <span m="561430">to</span> <span
  m="561520">send</span> <span m="562340">get</span> <span m="562530">put</span>
  <span m="562700">onto</span> <span m="562920">the</span> <span
  m="563040">channels</span> <span m="563540">and</span> <span
  m="563710">they</span> <span m="563930">get</span> <span
  m="564150">delivered</span> <span m="564590">to</span> <span
  m="564680">the</span> <span m="564780">process</span> <span
  m="565220">at</span> <span m="565320">the</span> <span m="565470">other</span>
  <span m="565640">end.</span> <span m="566810">So</span> <span
  m="566990">the</span> <span m="567080">process</span> <span
  m="567450">of</span> <span m="567570">the</span> <span m="567740">other</span>
  <span m="568000">end</span> <span m="569270">is</span> <span
  m="569540">in</span> <span m="569670">some</span> <span
  m="569900">state.</span> <span m="570520">All</span> <span
  m="570640">these</span> <span m="570790">messages</span> <span
  m="571330">come</span> <span m="571540">in.</span> <span m="572090">It</span>
  <span m="572240">updates</span> <span m="572650">its</span> <span
  m="572730">state,</span> <span m="573200">based</span> <span
  m="573510">on</span> <span m="573670">the</span> <span
  m="573790">arriving</span> <span m="574130">messages.</span> <span
  m="574840">So</span> <span m="574870">it</span> <span
  m="574900">changes</span> <span m="575330">state</span> <span
  m="576100">in</span> <span m="576250">response</span> <span
  m="576780">to</span> <span m="576920">whatever</span> <span
  m="577290">comes</span> <span m="577550">in.</span></p><p><span
  m="582880">And</span> <span m="583530">this</span> <span m="583880">is</span>
  <span m="584060">completely</span> <span m="584490">different</span> <span
  m="584910">from</span> <span m="585180">this</span> <span
  m="585290">semester</span> <span m="585950">so</span> <span
  m="586180">far.</span> <span m="586780">We're</span> <span
  m="587010">going</span> <span m="587120">to</span> <span
  m="587180">completely</span> <span m="587700">ignore</span> <span
  m="588130">the</span> <span m="588300">costs</span> <span m="588880">of</span>
  <span m="589440">the</span> <span m="589550">local</span> <span
  m="589890">computation.</span> <span m="591560">So</span> <span
  m="591760">each</span> <span m="591960">node</span> <span
  m="592240">can</span> <span m="592440">compute</span> <span
  m="592890">some</span> <span m="593110">complicated</span> <span
  m="594060">algorithm</span> <span m="594730">of</span> <span
  m="594830">the</span> <span m="594910">sort</span> <span
  m="595220">you've</span> <span m="595360">been</span> <span
  m="595490">studying</span> <span m="595910">in</span> <span
  m="596000">this</span> <span m="596160">class,</span> <span
  m="596600">and</span> <span m="596700">we</span> <span
  m="596810">usually</span> <span m="597250">don't</span> <span
  m="598150">consider</span> <span m="598610">that</span> <span
  m="598900">cost.</span> <span m="599310">We're</span> <span
  m="599380">more</span> <span m="599580">worried</span> <span
  m="599900">about</span> <span m="600270">the</span> <span
  m="600380">communication</span> <span m="601220">costs.</span> <span
  m="603610">And</span> <span m="604790">so</span> <span m="604990">we'll</span>
  <span m="605120">be</span> <span m="605240">focusing</span> <span
  m="605800">on</span> <span m="605950">the</span> <span
  m="606040">number</span> <span m="606420">of</span> <span
  m="606500">rounds</span> <span m="606950">that</span> <span
  m="607080">it</span> <span m="607230">takes,</span> <span m="607690">in</span>
  <span m="607830">the</span> <span m="607920">synchronous</span> <span
  m="608460">case,</span> <span m="608760">and</span> <span
  m="608950">the</span> <span m="609020">number</span> <span
  m="609500">of</span> <span m="609760">communication</span> <span
  m="611170">messages</span> <span m="611970">or</span> <span
  m="612167">bits.</span></p><p><span m="614710">OK</span> <span
  m="614920">so</span> <span m="615100">far?</span> <span m="618690">So</span>
  <span m="618840">let's</span> <span m="618990">start</span> <span
  m="619240">on</span> <span m="619340">the</span> <span m="619420">first</span>
  <span m="619730">problem.</span> <span m="620150">Here's</span> <span
  m="620420">a</span> <span m="620480">graph.</span> <span m="622250">The</span>
  <span m="622360">nodes</span> <span m="622620">start</span> <span
  m="622990">out</span> <span m="623400">possibly</span> <span
  m="623880">identical,</span> <span m="624460">but</span> <span
  m="624610">you</span> <span m="624720">want</span> <span m="625120">to</span>
  <span m="625240">somehow</span> <span m="625640">distinguish</span> <span
  m="626290">one</span> <span m="626510">of</span> <span m="626640">them</span>
  <span m="627300">to</span> <span m="627440">be</span> <span
  m="627600">a</span> <span m="627660">leader.</span> <span m="630200">So</span>
  <span m="630340">you</span> <span m="630420">have</span> <span
  m="630550">this</span> <span m="630710">arbitrary,</span> <span
  m="631540">connected,</span> <span m="632550">undirected</span> <span
  m="633220">graph.</span> <span m="634150">And</span> <span
  m="634390">exactly</span> <span m="634900">one</span> <span
  m="635150">process</span> <span m="635710">is</span> <span
  m="635810">supposed</span> <span m="636280">to</span> <span
  m="636520">elect</span> <span m="636870">itself</span> <span
  m="637210">the</span> <span m="637310">leader.</span> <span
  m="637650">That</span> <span m="637820">means</span> <span
  m="638130">it</span> <span m="639030">outputs</span> <span m="639480">a</span>
  <span m="639540">special</span> <span m="640010">leader</span> <span
  m="640350">signal.</span> <span m="643360">so</span> <span
  m="643510">exactly</span> <span m="643940">one</span> <span
  m="644210">should</span> <span m="644410">do</span> <span
  m="644520">that.</span> <span m="645590">So</span> <span m="645800">why</span>
  <span m="645940">do</span> <span m="646010">you</span> <span
  m="646110">want</span> <span m="646300">a</span> <span
  m="646350">leader?</span> <span m="646720">Well</span> <span
  m="648220">in</span> <span m="648360">practice,</span> <span
  m="649430">leaders</span> <span m="649860">can</span> <span
  m="650980">coordinate</span> <span m="651660">things.</span> <span
  m="652080">They</span> <span m="652200">can</span> <span
  m="652380">take</span> <span m="652670">charge</span> <span
  m="653140">of</span> <span m="653270">communication,</span> <span
  m="654160">and</span> <span m="654700">inform</span> <span
  m="655140">other</span> <span m="655340">nodes</span> <span
  m="655660">when</span> <span m="655900">they're</span> <span
  m="656110">allowed</span> <span m="656450">to</span> <span
  m="656540">send</span> <span m="656790">messages.</span> <span
  m="657380">They</span> <span m="657510">can</span> <span
  m="657690">coordinate</span> <span m="658330">the</span> <span
  m="658410">processing</span> <span m="659010">of</span> <span
  m="659120">data.</span> <span m="659440">Basically</span> <span
  m="660380">it</span> <span m="660490">allows</span> <span
  m="660760">you</span> <span m="660870">to</span> <span
  m="660960">centralize</span> <span m="661610">some</span> <span
  m="661810">of</span> <span m="661890">the</span> <span
  m="661980">computation.</span> <span m="663190">It</span> <span
  m="663360">can</span> <span m="663500">schedule</span> <span
  m="664300">the</span> <span m="664480">other</span> <span
  m="664660">processes.</span> <span m="665400">It</span> <span
  m="665470">can</span> <span m="665920">allocate</span> <span
  m="666340">the</span> <span m="666430">resources.</span> <span
  m="667680">It</span> <span m="667750">could</span> <span
  m="667880">help</span> <span m="668090">to</span> <span
  m="668210">reach</span> <span m="668440">agreement</span> <span
  m="669010">among</span> <span m="669270">the</span> <span
  m="669350">processes,</span> <span m="670020">if</span> <span
  m="670120">they</span> <span m="670240">start</span> <span
  m="670570">out</span> <span m="670690">with</span> <span
  m="670820">different</span> <span m="671130">opinions</span> <span
  m="671770">about</span> <span m="672080">what</span> <span
  m="672280">is</span> <span m="672340">supposed</span> <span
  m="672690">to</span> <span m="672760">happen.</span></p><p><span
  m="676230">All</span> <span m="676300">right</span> <span m="676440">so</span>
  <span m="676540">let's</span> <span m="676700">start</span> <span
  m="676940">out</span> <span m="677020">with</span> <span m="677140">a</span>
  <span m="677170">very</span> <span m="677350">simple</span> <span
  m="677670">case.</span> <span m="677990">You</span> <span
  m="678100">have</span> <span m="678290">a</span> <span
  m="678370">clique.</span> <span m="678740">Here's</span> <span
  m="679170">a</span> <span m="679410">four</span> <span
  m="679720">clique,</span> <span m="680770">where</span> <span
  m="680950">all</span> <span m="681100">the</span> <span
  m="681190">vertices</span> <span m="681830">are</span> <span
  m="681930">directly</span> <span m="682500">connected</span> <span
  m="683130">to</span> <span m="683250">all</span> <span m="683450">the</span>
  <span m="683600">other</span> <span m="683840">vertices,</span> <span
  m="684490">with</span> <span m="684730">two</span> <span
  m="684910">directional</span> <span m="685520">channels.</span> <span
  m="688000">And</span> <span m="688160">the</span> <span
  m="688230">processes</span> <span m="688820">are</span> <span
  m="688920">identical.</span> <span m="692020">So</span> <span
  m="692350">I</span> <span m="692430">should</span> <span
  m="692580">have</span> <span m="692690">asked</span> <span
  m="693000">you,</span> <span m="693130">instead</span> <span
  m="693420">of</span> <span m="693500">just</span> <span
  m="693800">giving</span> <span m="693980">the</span> <span
  m="694180">answer</span> <span m="694620">here,</span> <span
  m="694860">but</span> <span m="696450">are</span> <span m="696620">they</span>
  <span m="696790">able</span> <span m="697150">to</span> <span
  m="697310">elect</span> <span m="697630">a</span> <span
  m="697690">leader?</span> <span m="699550">So</span> <span
  m="699710">this</span> <span m="699930">theorem</span> <span
  m="700270">says</span> <span m="700680">that</span> <span m="700860">in</span>
  <span m="700980">general,</span> <span m="701470">that's</span> <span
  m="701830">impossible.</span> <span m="702770">Or</span> <span
  m="702895">it's</span> <span m="703020">not</span> <span
  m="703230">possible,</span> <span m="704300">in</span> <span
  m="704390">the</span> <span m="704460">most</span> <span
  m="704670">general</span> <span m="705040">case.</span> <span
  m="706880">If</span> <span m="707020">you</span> <span m="707120">have,</span>
  <span m="707860">no</span> <span m="707940">matter</span> <span
  m="708180">what</span> <span m="708330">n</span> <span m="708510">is,</span>
  <span m="708730">let's</span> <span m="708970">just</span> <span
  m="709140">say</span> <span m="709280">we</span> <span m="709400">have</span>
  <span m="709560">an</span> <span m="709660">n</span> <span
  m="709860">vertex</span> <span m="710380">clique</span> <span
  m="710770">for</span> <span m="710900">some</span> <span m="711190">n.</span>
  <span m="713100">It's</span> <span m="713340">not</span> <span
  m="713610">possible</span> <span m="714250">to</span> <span
  m="715290">have</span> <span m="715610">any</span> <span
  m="715910">algorithm</span> <span m="716620">that</span> <span
  m="716880">you</span> <span m="717040">can</span> <span m="717290">have</span>
  <span m="717510">all</span> <span m="717615">the</span> <span
  m="717720">processes</span> <span m="718350">run,</span> <span
  m="720260">if</span> <span m="720400">it's</span> <span
  m="720620">deterministic</span> <span m="721760">and</span> <span
  m="721890">the</span> <span m="721960">processes</span> <span
  m="722390">start</span> <span m="722720">out</span> <span
  m="722900">all</span> <span m="723200">indistinguishable.</span> <span
  m="724550">There's</span> <span m="724730">no</span> <span
  m="724950">way</span> <span m="725950">that</span> <span
  m="726330">they</span> <span m="726460">can</span> <span
  m="726940">elect</span> <span m="727940">a</span> <span
  m="728020">single</span> <span m="728360">node</span> <span
  m="728610">as</span> <span m="728720">a</span> <span m="728790">leader.</span>
  <span m="729430">So</span> <span m="729590">do</span> <span
  m="729680">you</span> <span m="729730">have</span> <span m="729880">an</span>
  <span m="729970">intuition</span> <span m="730660">for</span> <span
  m="730810">why</span> <span m="731010">that</span> <span
  m="731190">might</span> <span m="731390">be</span> <span m="731480">the</span>
  <span m="731600">case?</span> <span m="734982">Yeah.</span></p><p><span
  m="736458">AUDIENCE: They're</span> <span m="736704">all</span> <span
  m="736950">connected,</span> <span m="737442">and</span> <span
  m="737934">the</span> <span m="739410">cross-problem</span> <span
  m="739902">communication</span> <span m="740394">in</span> <span
  m="740886">one</span> <span m="741132">round</span> <span m="741378">is</span>
  <span m="741870">equal,</span> <span m="742362">then</span> <span
  m="742854">to</span> <span m="743100">be</span> <span m="743346">equal</span>
  <span m="743592">likely</span> <span m="743715">to</span> <span
  m="743838">select</span> <span m="744330">each</span> <span
  m="744453">one</span> <span m="744576">of</span> <span m="744699">them.</span>
  <span m="744822">It</span> <span m="745314">would</span> <span
  m="745560">be--</span></p><p><span m="746300">NANCY LYNCH: It's</span> <span
  m="746470">deterministic</span> <span m="747280">there's</span> <span
  m="747400">no</span> <span m="747540">likelihood</span> <span
  m="748240">here.</span> <span m="750290">And</span> <span
  m="750560">nobody</span> <span m="751410">is</span> <span
  m="751580">doing</span> <span m="751910">any</span> <span
  m="752080">selecting.</span> <span m="754410">You're</span> <span
  m="754560">talking</span> <span m="755000">as</span> <span
  m="755120">if</span> <span m="755280">there's</span> <span
  m="755490">somebody</span> <span m="755920">who's</span> <span
  m="756180">choosing</span> <span m="756640">a</span> <span
  m="756700">process</span> <span m="757180">to</span> <span
  m="757290">do</span> <span m="757430">something.</span> <span
  m="758260">There</span> <span m="758390">isn't</span> <span
  m="758780">anyone</span> <span m="759300">in</span> <span
  m="759450">charge.</span> <span m="760870">So</span> <span
  m="760980">this</span> <span m="761140">is</span> <span m="761180">a</span>
  <span m="761400">really</span> <span m="761800">different</span> <span
  m="762100">way</span> <span m="762260">of</span> <span
  m="762350">thinking.</span></p><p><span m="763700">AUDIENCE: So</span> <span
  m="764100">every</span> <span m="764350">node</span> <span m="764740">is
  essentially</span> <span m="764880">the</span> <span m="765240">exact</span>
  <span m="765800">same.</span> <span m="766180">So</span> <span
  m="766490">if</span> <span m="766610">it</span> <span m="766730">says,</span>
  <span m="767530">OK,</span> <span m="767660">let's</span> <span
  m="767970">assume</span> <span m="768190">I'm</span> <span
  m="768490">going</span> <span m="768591">to</span> <span m="768693">be</span>
  <span m="768795">leader,</span> <span m="769370">everyone</span> <span
  m="769800">is</span> <span m="769940">going</span> <span m="770110">to</span>
  <span m="770290">assume</span> <span m="770855">they're</span> <span
  m="771180">going</span> <span m="771221">to</span> <span m="771263">be</span>
  <span m="771305">leader.</span></p><p><span m="773400">NANCY LYNCH:
  That's</span> <span m="774070">exactly</span> <span m="774490">the</span>
  <span m="774610">right</span> <span m="774830">intuition.</span> <span
  m="775420">They</span> <span m="775510">can't</span> <span
  m="775790">distinguish</span> <span m="776270">themselves</span> <span
  m="776810">because</span> <span m="777110">they're</span> <span
  m="777250">always</span> <span m="777460">going</span> <span
  m="777700">to</span> <span m="777810">do</span> <span m="777960">the</span>
  <span m="778090">same</span> <span m="778400">thing.</span> <span
  m="779960">Let's</span> <span m="780230">look</span> <span
  m="780480">at</span> <span m="780550">a</span> <span m="780630">very</span>
  <span m="780870">simple</span> <span m="781130">case.</span> <span
  m="781340">Suppose</span> <span m="781730">we</span> <span
  m="781840">have</span> <span m="782280">just</span> <span
  m="782500">two</span> <span m="782640">nodes,</span> <span
  m="783880">two</span> <span m="784010">node</span> <span
  m="784220">clique,</span> <span m="784950">two</span> <span
  m="785080">nodes</span> <span m="785420">connected</span> <span
  m="785830">by</span> <span m="786310">channels.</span> <span
  m="787970">These</span> <span m="788180">are</span> <span
  m="788280">identical.</span> <span m="789470">They're</span> <span
  m="789620">deterministic.</span> <span m="790600">What</span> <span
  m="790820">can</span> <span m="790990">they</span> <span m="791140">do?</span>
  <span m="791900">Well</span> <span m="792150">you</span> <span
  m="792290">could</span> <span m="792420">try</span> <span m="792640">to</span>
  <span m="792770">design</span> <span m="793190">algorithms</span> <span
  m="793830">for</span> <span m="793960">one</span> <span m="794150">of</span>
  <span m="794270">them</span> <span m="794530">to</span> <span
  m="794670">elect</span> <span m="794980">itself</span> <span
  m="795320">as</span> <span m="795450">the</span> <span
  m="795570">leader.</span> <span m="796680">But</span> <span
  m="796840">you</span> <span m="796960">can</span> <span
  m="797110">show,</span> <span m="797610">by</span> <span
  m="798100">using</span> <span m="798420">induction,</span> <span
  m="798960">that</span> <span m="799050">the</span> <span
  m="799120">processes</span> <span m="799730">are</span> <span
  m="799820">actually</span> <span m="800250">going</span> <span
  m="800530">to</span> <span m="800630">remain</span> <span m="801120">in</span>
  <span m="801280">the</span> <span m="801380">same</span> <span
  m="801670">state</span> <span m="802030">as</span> <span
  m="802140">each</span> <span m="802360">other</span> <span
  m="802890">forever,</span> <span m="805230">however</span> <span
  m="805540">many</span> <span m="805790">rounds</span> <span
  m="806140">you</span> <span m="806270">execute.</span></p><p><span
  m="808260">So</span> <span m="808450">let's</span> <span
  m="808650">slow</span> <span m="808840">down.</span> <span
  m="810130">We</span> <span m="810300">can</span> <span m="810410">work</span>
  <span m="810590">by</span> <span m="810680">contradiction.</span> <span
  m="812090">Suppose</span> <span m="812400">you</span> <span
  m="812510">have</span> <span m="812780">an</span> <span
  m="812900">algorithm</span> <span m="813500">that</span> <span
  m="813690">solves</span> <span m="814000">this</span> <span
  m="814200">problem.</span> <span m="816460">Both</span> <span
  m="816730">of</span> <span m="816800">the</span> <span
  m="816890">processes,</span> <span m="817540">they're</span> <span
  m="817680">identical.</span> <span m="818270">They</span> <span
  m="819570">start</span> <span m="819880">in</span> <span m="819960">the</span>
  <span m="820040">same</span> <span m="820300">start</span> <span
  m="820660">state.</span> <span m="820950">Let's</span> <span
  m="821100">say</span> <span m="821180">there's</span> <span
  m="821380">a</span> <span m="821420">unique</span> <span
  m="821710">start</span> <span m="822010">state.</span> <span
  m="826350">So</span> <span m="826490">we</span> <span m="826580">could</span>
  <span m="826760">prove</span> <span m="827040">by</span> <span
  m="827210">induction</span> <span m="827810">on</span> <span
  m="827920">the</span> <span m="828020">number</span> <span
  m="828500">of</span> <span m="828660">rounds</span> <span
  m="829750">that</span> <span m="830140">after</span> <span
  m="830950">any</span> <span m="831150">number</span> <span
  m="831500">of</span> <span m="831590">rounds,</span> <span
  m="832020">say</span> <span m="832190">r</span> <span
  m="832460">rounds,</span> <span m="833250">the</span> <span
  m="833360">processes</span> <span m="833900">are</span> <span
  m="833990">still</span> <span m="834450">in</span> <span
  m="834600">identical</span> <span m="835180">states.</span> <span
  m="837770">So</span> <span m="838160">the</span> <span
  m="838270">inductive</span> <span m="838700">step</span> <span
  m="839070">is,</span> <span m="839300">all</span> <span
  m="839370">right,</span> <span m="839590">they're</span> <span
  m="839770">in</span> <span m="839860">identical</span> <span
  m="840340">states</span> <span m="840750">after</span> <span
  m="841020">some</span> <span m="841240">number</span> <span
  m="841570">of</span> <span m="841620">rounds.</span> <span
  m="841960">Let's</span> <span m="842100">look</span> <span
  m="842240">at</span> <span m="842320">the</span> <span m="842400">next</span>
  <span m="842670">round.</span> <span m="843720">They're</span> <span
  m="843910">in</span> <span m="843990">the</span> <span m="844070">same</span>
  <span m="844310">state.</span> <span m="844760">So</span> <span
  m="844890">they</span> <span m="845040">generate</span> <span
  m="845580">the</span> <span m="845660">same</span> <span
  m="845970">messages.</span> <span m="848330">So</span> <span
  m="848380">they</span> <span m="848710">each</span> <span
  m="848860">other</span> <span m="848990">the</span> <span
  m="849190">same</span> <span m="849430">messages.</span> <span
  m="849900">They</span> <span m="850010">receive</span> <span
  m="850460">the</span> <span m="850550">same</span> <span
  m="850820">message.</span> <span m="852680">And</span> <span
  m="852770">then</span> <span m="852890">they</span> <span
  m="852980">make</span> <span m="853240">the</span> <span
  m="853320">same</span> <span m="853580">state</span> <span
  m="853900">change.</span> <span m="855140">So</span> <span
  m="855290">they</span> <span m="855870">stay</span> <span m="856170">in</span>
  <span m="856290">the</span> <span m="856390">same</span> <span
  m="856640">state.</span></p><p><span m="859800">And</span> <span
  m="860160">you</span> <span m="860330">can</span> <span
  m="860810">tweak</span> <span m="861110">this,</span> <span
  m="861400">and</span> <span m="861710">say</span> <span m="861910">how</span>
  <span m="862050">this</span> <span m="862260">works</span> <span
  m="862670">for--</span> <span m="862990">yeah,</span> <span
  m="863200">question?</span></p><p><span m="864025">AUDIENCE: So</span> <span
  m="864267">in</span> <span m="864510">what</span> <span m="864752">ways</span>
  <span m="864995">is</span> <span m="865237">the</span> <span
  m="865358">proof</span> <span m="865480">a</span> <span
  m="865722">contradiction?</span></p><p><span m="868370">NANCY LYNCH:
  I'm</span> <span m="868570">not</span> <span m="868780">finished.</span> <span
  m="869260">You're</span> <span m="869380">exactly</span> <span
  m="869740">right.</span> <span m="870620">We</span> <span
  m="870710">have</span> <span m="870790">to</span> <span
  m="870900">finish</span> <span m="871300">by</span> <span
  m="871410">using</span> <span m="871910">the</span> <span
  m="872330">requirements</span> <span m="872950">of</span> <span
  m="873040">the</span> <span m="873130">problem.</span> <span
  m="873850">Since</span> <span m="874190">the</span> <span
  m="874350">algorithm</span> <span m="875190">has</span> <span
  m="875510">to</span> <span m="875620">solve</span> <span m="875980">the</span>
  <span m="876050">leader</span> <span m="876360">election</span> <span
  m="876840">problem,</span> <span m="878410">the</span> <span
  m="878510">requirements</span> <span m="879310">say</span> <span
  m="879550">that</span> <span m="879730">eventually,</span> <span
  m="880570">one</span> <span m="880820">of</span> <span m="880940">them</span>
  <span m="881170">has</span> <span m="881510">to</span> <span
  m="882590">output</span> <span m="883000">leader.</span> <span
  m="885460">And</span> <span m="885630">what</span> <span
  m="885790">happens</span> <span m="886180">when</span> <span
  m="886330">he</span> <span m="886430">does?</span> <span
  m="891080">Anyone?</span> <span m="891440">Yeah.</span></p><p><span
  m="891730">AUDIENCE: You</span> <span m="891940">have</span> <span
  m="892140">node</span> <span m="892460">also</span> <span
  m="892905">outputting</span> <span m="893350">the</span> <span
  m="893498">leader</span> <span m="893646">signal.</span></p><p><span
  m="894240">NANCY LYNCH: Yeah</span> <span m="894860">the</span> <span
  m="895020">other</span> <span m="895160">one</span> <span
  m="895280">would</span> <span m="895410">also</span> <span
  m="895840">do</span> <span m="896010">the</span> <span m="896120">same</span>
  <span m="896420">thing.</span> <span m="896790">We're</span> <span
  m="896910">saying</span> <span m="897200">round</span> <span
  m="897460">by</span> <span m="897580">round,</span> <span
  m="897940">they</span> <span m="898490">stay</span> <span m="898710">in</span>
  <span m="898830">the</span> <span m="898910">same</span> <span
  m="899140">state.</span> <span m="899820">So</span> <span m="900390">as</span>
  <span m="900550">someone</span> <span m="900810">said</span> <span
  m="900960">before,</span> <span m="902480">when</span> <span
  m="902970">one</span> <span m="903230">guy</span> <span
  m="903510">outputs</span> <span m="903940">leader,</span> <span
  m="904360">at</span> <span m="904510">the</span> <span m="904580">same</span>
  <span m="904890">round</span> <span m="905500">the</span> <span
  m="905630">other</span> <span m="905810">guy</span> <span
  m="906010">will</span> <span m="906120">output</span> <span
  m="906480">leader</span> <span m="906710">as</span> <span
  m="906940">well.</span> <span m="908210">So</span> <span
  m="908320">that's</span> <span m="908570">a</span> <span
  m="908620">contradiction</span> <span m="909350">to</span> <span
  m="909460">the</span> <span m="909580">problem</span> <span
  m="909970">requirements.</span> <span m="910730">Notice</span> <span
  m="910870">we</span> <span m="910980">didn't</span> <span
  m="911170">assume</span> <span m="911490">anything</span> <span
  m="911910">at</span> <span m="912010">all</span> <span m="912170">about</span>
  <span m="912810">exactly</span> <span m="913230">how</span> <span
  m="913470">the</span> <span m="913620">algorithm</span> <span
  m="914100">works.</span> <span m="915040">We're</span> <span
  m="915150">just</span> <span m="915350">saying,</span> <span
  m="915640">however</span> <span m="916140">it</span> <span
  m="916230">works,</span> <span m="916640">it</span> <span
  m="916780">can't</span> <span m="917060">solve</span> <span
  m="917430">this,</span> <span m="917990">under</span> <span
  m="918220">the</span> <span m="918350">assumptions</span> <span
  m="919400">that</span> <span m="919580">the</span> <span
  m="919670">nodes</span> <span m="920110">are</span> <span
  m="920410">indistinguishable</span> <span m="921230">and</span> <span
  m="921430">deterministic.</span></p><p><span m="924780">So</span> <span
  m="924980">as</span> <span m="925120">you</span> <span m="925220">can</span>
  <span m="925370">see,</span> <span m="925650">this</span> <span
  m="925880">will</span> <span m="926060">extend</span> <span
  m="926510">if</span> <span m="926600">you</span> <span m="926710">have</span>
  <span m="926930">larger</span> <span m="927370">cliques</span> <span
  m="927900">of</span> <span m="928050">size</span> <span m="928510">n.</span>
  <span m="930680">So</span> <span m="930820">now</span> <span
  m="931060">the</span> <span m="931160">process</span> <span
  m="931720">has</span> <span m="932070">not</span> <span m="932300">just</span>
  <span m="932560">one</span> <span m="932830">output</span> <span
  m="933220">port,</span> <span m="933710">it</span> <span m="933810">has</span>
  <span m="934120">n</span> <span m="934270">minus</span> <span
  m="934620">1</span> <span m="934870">output</span> <span
  m="935260">ports</span> <span m="935720">to</span> <span
  m="935915">connect</span> <span m="936110">to</span> <span
  m="936200">all</span> <span m="936290">the</span> <span
  m="936440">other</span> <span m="936620">nodes.</span> <span
  m="938080">Let's</span> <span m="938250">say</span> <span
  m="938360">they're</span> <span m="938480">numbered</span> <span
  m="938890">1</span> <span m="939090">through</span> <span m="939280">n</span>
  <span m="939400">minus</span> <span m="939710">1.</span> <span
  m="941370">And</span> <span m="942470">one</span> <span m="942680">of</span>
  <span m="942730">the</span> <span m="942810">possibilities,</span> <span
  m="943810">and</span> <span m="944050">one</span> <span m="944300">I'll</span>
  <span m="944470">use</span> <span m="944640">in</span> <span
  m="944740">this</span> <span m="944920">proof</span> <span
  m="945240">is</span> <span m="945420">that</span> <span m="945650">the</span>
  <span m="945810">ports</span> <span m="946340">happen</span> <span
  m="946640">to</span> <span m="946720">be</span> <span
  m="946840">numbered</span> <span m="947200">consistently.</span> <span
  m="947980">So</span> <span m="948200">that</span> <span m="949050">if</span>
  <span m="949270">you</span> <span m="949450">have</span> <span
  m="950000">output</span> <span m="950500">port</span> <span
  m="950870">number</span> <span m="951140">k</span> <span m="951560">at</span>
  <span m="951700">one</span> <span m="951920">node,</span> <span
  m="952470">it's</span> <span m="952700">connected</span> <span
  m="953170">to</span> <span m="953410">input</span> <span
  m="953860">port</span> <span m="954170">number</span> <span
  m="954450">k</span> <span m="955210">at</span> <span m="955390">the</span>
  <span m="955540">other</span> <span m="955800">end.</span> <span
  m="957320">So</span> <span m="957440">that's</span> <span
  m="957620">one</span> <span m="957920">way</span> <span
  m="958140">things</span> <span m="958470">can</span> <span
  m="958620">match</span> <span m="958920">up.</span></p><p><span
  m="960320">All</span> <span m="960390">right</span> <span m="960600">if</span>
  <span m="960740">that's</span> <span m="961050">the</span> <span
  m="961140">case,</span> <span m="961520">we</span> <span
  m="961650">could</span> <span m="961790">do</span> <span m="961900">the</span>
  <span m="962020">same</span> <span m="962300">proof</span> <span
  m="962640">we</span> <span m="962750">just</span> <span m="963040">did.</span>
  <span m="963230">Show</span> <span m="963410">by</span> <span
  m="963570">induction</span> <span m="964150">that</span> <span
  m="964440">all</span> <span m="964750">the</span> <span
  m="964830">processes</span> <span m="965540">in</span> <span
  m="965650">the</span> <span m="965750">clique</span> <span
  m="966560">remain</span> <span m="966910">in</span> <span
  m="967000">the</span> <span m="967100">same</span> <span
  m="967360">state</span> <span m="967750">forever.</span> <span
  m="969580">So</span> <span m="970330">same</span> <span
  m="970570">proof.</span> <span m="970920">Suppose</span> <span
  m="971320">you</span> <span m="971400">have</span> <span m="971500">an</span>
  <span m="971580">algorithm</span> <span m="971970">that's</span> <span
  m="972230">solves</span> <span m="972510">it.</span> <span
  m="972610">They</span> <span m="972740">all</span> <span
  m="972880">began</span> <span m="973170">in</span> <span m="973270">the</span>
  <span m="973350">same</span> <span m="973610">state.</span> <span
  m="974620">You</span> <span m="974680">show</span> <span m="974860">by</span>
  <span m="975000">induction</span> <span m="975490">that</span> <span
  m="975610">they</span> <span m="975760">all</span> <span
  m="975920">remain</span> <span m="976330">the</span> <span
  m="976420">same</span> <span m="976650">state.</span> <span
  m="979690">Well</span> <span m="979940">so</span> <span m="980100">now</span>
  <span m="980320">we</span> <span m="980480">slow</span> <span
  m="980710">down</span> <span m="980960">a</span> <span
  m="981000">little</span> <span m="981200">bit.</span> <span
  m="981640">Each</span> <span m="982510">process</span> <span
  m="983030">sends</span> <span m="983300">a</span> <span
  m="983540">possibly</span> <span m="983950">different</span> <span
  m="984310">message</span> <span m="984740">on</span> <span
  m="984880">each</span> <span m="985130">port.</span> <span
  m="985920">But</span> <span m="986130">everybody</span> <span
  m="986620">sends</span> <span m="986920">the</span> <span
  m="987010">same</span> <span m="987270">message</span> <span
  m="987660">on</span> <span m="987780">port</span> <span m="988100">k</span>
  <span m="988540">because</span> <span m="988700">they're</span> <span
  m="988890">all</span> <span m="989020">indistinguishable.</span> <span
  m="990980">And</span> <span m="991100">then</span> <span
  m="991380">because</span> <span m="991750">the</span> <span
  m="991850">way</span> <span m="992050">the</span> <span
  m="992220">ports</span> <span m="992580">match</span> <span
  m="992890">up,</span> <span m="993080">everybody</span> <span
  m="993500">receives</span> <span m="994060">the</span> <span
  m="994170">same</span> <span m="994460">message</span> <span
  m="994960">on</span> <span m="995080">port</span> <span m="995410">k.</span>
  <span m="996440">And</span> <span m="996660">then</span> <span
  m="996800">they</span> <span m="996890">make</span> <span
  m="997130">the</span> <span m="997220">same</span> <span
  m="997470">state</span> <span m="997790">changes.</span></p><p><span
  m="1001030">AUDIENCE: Does</span> <span m="1001495">this</span> <span
  m="1001960">proof</span> <span m="1002425">imply</span> <span
  m="1003230">that</span> <span m="1003343">there's</span> <span
  m="1003456">a</span> <span m="1003570">kernel</span> <span
  m="1003910">for</span> <span m="1004260">simplifying</span> <span
  m="1004610">the</span> <span m="1004839">graph</span> <span
  m="1005526">when</span> <span m="1005755">you</span> <span
  m="1005984">find</span> <span m="1006136">a</span> <span
  m="1006289">clique?</span></p><p><span m="1010240">NANCY LYNCH: No</span>
  <span m="1010720">because</span> <span m="1011470">if</span> <span
  m="1011630">you</span> <span m="1011740">have</span> <span
  m="1011960">a</span> <span m="1012040">graph</span> <span
  m="1013040">that</span> <span m="1013250">consists</span> <span
  m="1013730">of</span> <span m="1013820">a</span> <span
  m="1013900">clique</span> <span m="1014350">and</span> <span
  m="1014450">then</span> <span m="1014720">let's</span> <span
  m="1014920">say,</span> <span m="1015060">some</span> <span
  m="1015260">other</span> <span m="1015490">stuff,</span> <span
  m="1016360">maybe</span> <span m="1016750">the</span> <span
  m="1016830">leader</span> <span m="1017330">could</span> <span
  m="1017480">be</span> <span m="1017780">somebody</span> <span
  m="1018880">outside</span> <span m="1019260">the</span> <span
  m="1019350">clique.</span> <span m="1019770">So</span> <span
  m="1020540">you</span> <span m="1020650">can't</span> <span
  m="1020880">just</span> <span m="1021060">say</span> <span
  m="1021250">because</span> <span m="1021650">there's</span> <span
  m="1021920">a</span> <span m="1021980">clique</span> <span
  m="1022980">that</span> <span m="1023260">you</span> <span
  m="1023370">can't</span> <span m="1023610">elect</span> <span
  m="1023880">a</span> <span m="1023940">leader</span> <span
  m="1024240">because</span> <span m="1024410">you</span> <span
  m="1024500">could</span> <span m="1024619">break</span> <span
  m="1024880">the</span> <span m="1024960">symmetry</span> <span
  m="1025500">of</span> <span m="1025619">the</span> <span
  m="1025700">graph</span> <span m="1026170">with</span> <span
  m="1026420">other</span> <span m="1026680">stuff</span> <span
  m="1027010">in</span> <span m="1027109">the</span> <span
  m="1027190">graph.</span> <span m="1028091">Yeah?</span></p><p><span
  m="1029055">AUDIENCE: What</span> <span m="1029537">assumptions</span> <span
  m="1029657">do</span> <span m="1029778">we</span> <span
  m="1029898">make</span> <span m="1030019">to</span> <span
  m="1030501">know</span> <span m="1030983">that</span> <span
  m="1031465">for</span> <span m="1031625">each</span> <span
  m="1031786">k,</span> <span m="1031947">they</span> <span
  m="1032188">receive</span> <span m="1032429">the</span> <span
  m="1032589">same</span> <span m="1032750">message?</span></p><p><span
  m="1034359">NANCY LYNCH: Because</span> <span m="1034690">everybody</span>
  <span m="1035260">is</span> <span m="1035410">going</span> <span
  m="1035660">to</span> <span m="1035780">send</span> <span
  m="1036089">the</span> <span m="1036170">same</span> <span
  m="1036430">message</span> <span m="1036869">on</span> <span
  m="1036960">the</span> <span m="1037050">same</span> <span
  m="1037290">numbered</span> <span m="1037650">port,</span> <span
  m="1038109">because</span> <span m="1038240">they're</span> <span
  m="1038369">identical.</span> <span m="1042079">And</span> <span
  m="1042300">one</span> <span m="1042480">way</span> <span
  m="1042630">the</span> <span m="1042750">ports</span> <span
  m="1043060">can</span> <span m="1043240">be</span> <span
  m="1043470">hooked</span> <span m="1043750">up,</span> <span
  m="1044210">and</span> <span m="1044390">we</span> <span
  m="1044490">have</span> <span m="1044619">to</span> <span
  m="1044750">tolerate</span> <span m="1045140">all</span> <span
  m="1045315">ways</span> <span m="1045490">they</span> <span
  m="1045579">could</span> <span m="1045740">be</span> <span
  m="1045849">hooked</span> <span m="1046130">up--</span> <span
  m="1046349">say</span> <span m="1046470">an</span> <span
  m="1046609">adversary</span> <span m="1047160">hooks</span> <span
  m="1047359">them</span> <span m="1047520">up--</span> <span
  m="1048480">is</span> <span m="1048800">that</span> <span
  m="1049180">port</span> <span m="1049500">k,</span> <span
  m="1051300">somebody's</span> <span m="1051740">output</span> <span
  m="1052100">port,</span> <span m="1052430">is</span> <span
  m="1053140">the</span> <span m="1053270">other</span> <span
  m="1053480">end's</span> <span m="1054160">input</span> <span
  m="1054530">port</span> <span m="1055450">numbered</span> <span
  m="1055770">k.</span> <span m="1056890">So</span> <span
  m="1057020">then</span> <span m="1057170">they</span> <span
  m="1057280">all</span> <span m="1057450">receive</span> <span
  m="1057950">the</span> <span m="1058030">same</span> <span
  m="1058290">message</span> <span m="1058710">on</span> <span
  m="1058980">their</span> <span m="1059140">port</span> <span
  m="1059410">number</span> <span m="1059660">k.</span> <span
  m="1061393">Yeah?</span></p><p><span m="1061874">AUDIENCE: Is</span> <span
  m="1061994">it</span> <span m="1062114">actually</span> <span
  m="1062234">possible</span> <span m="1062355">to</span> <span
  m="1062836">always</span> <span m="1062996">hook</span> <span
  m="1063156">up</span> <span m="1063317">the</span> <span
  m="1063437">boards</span> <span m="1063557">that</span> <span
  m="1063677">way.</span> <span m="1063798">I</span> <span
  m="1064038">mean,</span> <span m="1065720">it's</span> <span
  m="1065923">like</span> <span m="1066126">wrapped</span> <span
  m="1066532">with</span> <span m="1066735">three</span> <span
  m="1067750">vertices.</span></p><p><span m="1068480">NANCY LYNCH: Well</span>
  <span m="1068620">I'm</span> <span m="1068700">just</span> <span
  m="1068850">doing</span> <span m="1069030">it</span> <span
  m="1069120">for</span> <span m="1069240">cliques.</span> <span
  m="1071310">Yeah</span> <span m="1071670">it</span> <span
  m="1071810">is.</span> <span m="1073390">Yeah</span> <span
  m="1073620">you</span> <span m="1073710">could</span> <span
  m="1073850">do</span> <span m="1074000">it.</span> <span m="1074610">I</span>
  <span m="1074670">mean</span> <span m="1074870">you</span> <span
  m="1074960">could</span> <span m="1075080">have</span> <span
  m="1075460">port</span> <span m="1075840">one</span> <span
  m="1076270">always</span> <span m="1076550">going</span> <span
  m="1076830">clockwise,</span> <span m="1077470">and</span> <span
  m="1077670">port</span> <span m="1077870">two</span> <span
  m="1078040">going</span> <span m="1078280">counterclockwise,</span> <span
  m="1080780">I</span> <span m="1080840">mean,</span> <span
  m="1081100">there's</span> <span m="1081260">always</span> <span
  m="1081470">a</span> <span m="1081520">way</span> <span m="1081640">to</span>
  <span m="1081750">do</span> <span m="1081890">that</span> <span
  m="1082110">in</span> <span m="1082200">a</span> <span
  m="1082250">clique.</span> <span m="1083560">I</span> <span
  m="1083650">checked</span> <span m="1083920">that.</span> <span
  m="1086330">So</span> <span m="1086740">what</span> <span
  m="1086910">you've</span> <span m="1087030">just</span> <span
  m="1087210">seen</span> <span m="1087470">is</span> <span
  m="1087680">one</span> <span m="1087890">of</span> <span
  m="1087950">the</span> <span m="1088020">very</span> <span
  m="1088250">basic</span> <span m="1088670">problems</span> <span
  m="1089240">for</span> <span m="1089370">distributed</span> <span
  m="1089940">algorithms,</span> <span m="1090650">which</span> <span
  m="1090710">is</span> <span m="1090820">breaking</span> <span
  m="1091250">symmetry</span> <span m="1091780">among</span> <span
  m="1092040">identical</span> <span m="1092510">processes.</span> <span
  m="1093680">And</span> <span m="1093840">you</span> <span
  m="1093960">see</span> <span m="1094200">that</span> <span
  m="1095720">deterministic,</span> <span m="1096590">indistinguishable</span>
  <span m="1097360">processes</span> <span m="1097850">just</span> <span
  m="1098070">can't</span> <span m="1098370">do</span> <span
  m="1098560">it.</span> <span m="1099140">So</span> <span m="1099320">we</span>
  <span m="1099420">have</span> <span m="1099650">to</span> <span
  m="1099930">have</span> <span m="1100140">something</span> <span
  m="1100480">more.</span> <span m="1101610">So</span> <span
  m="1101780">what</span> <span m="1101890">do</span> <span
  m="1101940">you</span> <span m="1102040">think</span> <span
  m="1102230">we</span> <span m="1102350">could</span> <span
  m="1102520">add</span> <span m="1103100">to</span> <span
  m="1103230">make</span> <span m="1103470">this</span> <span
  m="1103860">problem</span> <span m="1104190">solvable?</span></p><p><span
  m="1107260">AUDIENCE: [INAUDIBLE]</span> <span
  m="1107732">processes.</span></p><p><span m="1108680">NANCY LYNCH: I</span>
  <span m="1108930">can't</span> <span m="1109130">hear.</span></p><p><span
  m="1110270">AUDIENCE: Probability.</span> <span
  m="1111090">Probability,</span> <span m="1111770">OK,</span> <span
  m="1112330">anything</span> <span m="1112670">else?</span> <span
  m="1116210">So</span> <span m="1116400">we</span> <span
  m="1116520">could</span> <span m="1116750">have</span> <span
  m="1117160">the</span> <span m="1117240">processes</span> <span
  m="1117890">actually</span> <span m="1118460">distinguishable.</span> <span
  m="1119320">The</span> <span m="1119420">common</span> <span
  m="1119810">way</span> <span m="1120020">in</span> <span
  m="1120160">this</span> <span m="1120380">area</span> <span
  m="1121230">is</span> <span m="1121380">to</span> <span m="1121470">say</span>
  <span m="1121630">that</span> <span m="1121770">each</span> <span
  m="1122010">process</span> <span m="1122470">has</span> <span
  m="1122710">an</span> <span m="1122800">identifier.</span> <span
  m="1123720">Like,</span> <span m="1124050">you</span> <span
  m="1124350">buy</span> <span m="1124660">a</span> <span
  m="1124810">chip</span> <span m="1124960">and</span> <span
  m="1125080">it's</span> <span m="1125250">got</span> <span
  m="1125500">some</span> <span m="1125690">identifier</span> <span
  m="1126340">burned</span> <span m="1126670">in.</span> <span
  m="1127690">OK</span> <span m="1127950">so</span> <span m="1128090">you</span>
  <span m="1128180">have</span> <span m="1128390">some</span> <span
  m="1128620">kind</span> <span m="1128830">of</span> <span
  m="1128910">unique</span> <span m="1129260">identifiers.</span> <span
  m="1130160">Or</span> <span m="1130600">you</span> <span
  m="1130740">can</span> <span m="1130900">use</span> <span
  m="1131140">randomness.</span> <span m="1133520">OK</span> <span
  m="1133780">for</span> <span m="1133920">unique</span> <span
  m="1134290">identifiers,</span> <span m="1136810">you</span> <span
  m="1136950">assume</span> <span m="1137230">everybody</span> <span
  m="1137770">has</span> <span m="1138220">some</span> <span
  m="1138580">number</span> <span m="1139080">or</span> <span
  m="1139170">some</span> <span m="1139500">identifier</span> <span
  m="1140430">that</span> <span m="1140630">it</span> <span
  m="1141080">knows</span> <span m="1141350">what</span> <span
  m="1141490">it</span> <span m="1141600">is.</span> <span
  m="1141890">It's</span> <span m="1142070">built</span> <span
  m="1142310">into</span> <span m="1142600">its</span> <span
  m="1142730">state,</span> <span m="1143310">let's</span> <span
  m="1143560">say,</span> <span m="1143850">a</span> <span
  m="1143920">special</span> <span m="1144310">state</span> <span
  m="1144630">variable.</span> <span m="1147050">They're</span> <span
  m="1147210">totally</span> <span m="1147640">ordered,</span> <span
  m="1148110">generally.</span> <span m="1148740">They</span> <span
  m="1148870">could</span> <span m="1149020">be</span> <span
  m="1149150">integers,</span> <span m="1151670">or</span> <span
  m="1152400">from</span> <span m="1152580">some</span> <span
  m="1152830">totally</span> <span m="1153230">ordered</span> <span
  m="1153580">set.</span> <span m="1155170">When</span> <span
  m="1155320">you</span> <span m="1155390">say</span> <span
  m="1155590">unique</span> <span m="1155950">identifiers,</span> <span
  m="1156630">is</span> <span m="1156760">it</span> <span
  m="1156880">means</span> <span m="1157240">that</span> <span
  m="1158950">different</span> <span m="1159820">identifiers</span> <span
  m="1160560">could</span> <span m="1160810">appear</span> <span
  m="1161220">any</span> <span m="1161480">place</span> <span
  m="1161860">in</span> <span m="1161980">the</span> <span
  m="1162070">graph.</span> <span m="1163360">But</span> <span
  m="1164470">each</span> <span m="1164700">identifier</span> <span
  m="1165390">can</span> <span m="1165580">appear</span> <span
  m="1166170">at</span> <span m="1166340">most</span> <span
  m="1166610">once.</span> <span m="1167430">You</span> <span
  m="1167540">can</span> <span m="1167690">have</span> <span
  m="1167705">a</span> <span m="1167720">huge</span> <span
  m="1168060">identifier</span> <span m="1168640">space</span> <span
  m="1169020">in</span> <span m="1169130">a</span> <span
  m="1169180">small</span> <span m="1169510">graph.</span> <span
  m="1169870">But</span> <span m="1169970">you're</span> <span
  m="1170070">Just</span> <span m="1170220">selecting</span> <span
  m="1170920">some</span> <span m="1171750">identifiers</span> <span
  m="1172700">to</span> <span m="1172970">put</span> <span m="1173520">in</span>
  <span m="1173630">the</span> <span m="1173710">processes</span> <span
  m="1174320">in</span> <span m="1174400">the</span> <span
  m="1174480">graph.</span></p><p><span m="1176790">So</span> <span
  m="1176910">that's</span> <span m="1177080">one</span> <span
  m="1177280">set</span> <span m="1177510">up.</span> <span
  m="1177720">And</span> <span m="1177910">the</span> <span
  m="1178020">other</span> <span m="1178210">one,</span> <span
  m="1178520">of</span> <span m="1178530">course,</span> <span
  m="1179000">is</span> <span m="1179040">using</span> <span
  m="1179440">randomness.</span> <span m="1181880">So</span> <span
  m="1182100">let's</span> <span m="1182570">look</span> <span
  m="1182880">at</span> <span m="1182950">the</span> <span
  m="1183020">unique</span> <span m="1183340">identifiers</span> <span
  m="1184080">first.</span> <span m="1184930">Now</span> <span
  m="1185120">the</span> <span m="1185210">problem</span> <span
  m="1185570">becomes</span> <span m="1185950">easy.</span> <span
  m="1186270">Let's</span> <span m="1186520">look</span> <span
  m="1186680">at</span> <span m="1186740">the</span> <span
  m="1186830">clique</span> <span m="1187170">again.</span> <span
  m="1188330">Suppose</span> <span m="1188790">there's</span> <span
  m="1189050">an</span> <span m="1189170">algorithm--</span> <span
  m="1190790">well,</span> <span m="1191120">let's</span> <span
  m="1191970">construct</span> <span m="1192520">an</span> <span
  m="1192640">algorithm</span> <span m="1193280">that</span> <span
  m="1193460">consists</span> <span m="1193920">of</span> <span
  m="1194040">deterministic</span> <span m="1194940">processes</span> <span
  m="1195720">with</span> <span m="1196040">unique</span> <span
  m="1196380">identifiers.</span> <span m="1198760">And</span> <span
  m="1199180">we're</span> <span m="1199290">going</span> <span
  m="1199520">to</span> <span m="1199610">guarantee</span> <span
  m="1200200">to</span> <span m="1200320">elect</span> <span
  m="1200640">a</span> <span m="1200690">leader</span> <span
  m="1201500">in</span> <span m="1201680">the</span> <span
  m="1201760">graph.</span> <span m="1202250">And</span> <span
  m="1202510">moreover,</span> <span m="1203120">it's</span> <span
  m="1203330">just</span> <span m="1203540">going</span> <span
  m="1203670">to</span> <span m="1203750">take</span> <span
  m="1203990">one</span> <span m="1204170">round</span> <span
  m="1204480">of</span> <span m="1204590">communication.</span> <span
  m="1206180">And</span> <span m="1206400">it's</span> <span
  m="1206570">only</span> <span m="1206830">going</span> <span
  m="1207150">to</span> <span m="1207280">use</span> <span m="1208760">n</span>
  <span m="1208940">squared</span> <span m="1209290">messages.</span> <span
  m="1210210">How</span> <span m="1210440">could</span> <span
  m="1210570">that</span> <span m="1210730">work?</span></p><p><span
  m="1217160">Everybody</span> <span m="1217700">in</span> <span
  m="1217800">this</span> <span m="1217990">click</span> <span
  m="1218350">has</span> <span m="1218580">a</span> <span
  m="1218620">unique</span> <span m="1218930">identifier.</span> <span
  m="1220340">What</span> <span m="1220520">would</span> <span
  m="1220650">they</span> <span m="1220760">do?</span> <span
  m="1222540">Send</span> <span m="1222790">it</span> <span
  m="1222870">out,</span> <span m="1223090">right?</span> <span
  m="1223400">So</span> <span m="1223560">you</span> <span
  m="1223680">can</span> <span m="1223800">just</span> <span
  m="1223960">send</span> <span m="1224200">it</span> <span
  m="1224290">on</span> <span m="1224440">all</span> <span
  m="1224580">your</span> <span m="1225510">ports.</span> <span
  m="1225860">Everybody</span> <span m="1226290">would</span> <span
  m="1226480">send</span> <span m="1226760">its</span> <span
  m="1226910">unique</span> <span m="1227240">identifier</span> <span
  m="1227880">on</span> <span m="1228040">all</span> <span
  m="1228250">its</span> <span m="1228390">output</span> <span
  m="1228750">ports.</span> <span m="1229740">And</span> <span
  m="1229880">then</span> <span m="1230030">they</span> <span
  m="1230130">collect</span> <span m="1230485">the</span> <span
  m="1230840">unique</span> <span m="1231200">identifiers</span> <span
  m="1231880">from</span> <span m="1232030">everyone</span> <span
  m="1232410">else.</span> <span m="1233540">So</span> <span
  m="1233680">everybody</span> <span m="1234070">sees</span> <span
  m="1234420">the</span> <span m="1234530">same</span> <span
  m="1234870">set</span> <span m="1235460">of</span> <span
  m="1235680">identifiers.</span> <span m="1237360">And</span> <span
  m="1237610">so</span> <span m="1237790">the</span> <span
  m="1237900">process</span> <span m="1238460">with</span> <span
  m="1238640">the</span> <span m="1238710">maximum</span> <span
  m="1239560">unique</span> <span m="1239910">identifier</span> <span
  m="1240870">knows</span> <span m="1241220">that</span> <span
  m="1241340">it's</span> <span m="1241530">the</span> <span
  m="1241670">only</span> <span m="1241890">one</span> <span
  m="1242480">with</span> <span m="1242700">that</span> <span
  m="1242890">identifier.</span> <span m="1243640">And</span> <span
  m="1243740">it's</span> <span m="1243840">the</span> <span
  m="1244015">biggest</span> <span m="1244190">one.</span> <span
  m="1244450">So</span> <span m="1244650">it</span> <span m="1244810">can</span>
  <span m="1245040">elect</span> <span m="1245340">itself</span> <span
  m="1245690">the</span> <span m="1245740">leader.</span> <span
  m="1249250">So</span> <span m="1249500">all</span> <span
  m="1249565">you</span> <span m="1249850">is</span> <span
  m="1250440">unique</span> <span m="1250650">identifiers</span> <span
  m="1251150">and</span> <span m="1251270">the</span> <span
  m="1251370">ability</span> <span m="1251790">to</span> <span
  m="1251900">exchange</span> <span m="1252450">them</span> <span
  m="1252630">reliably.</span> <span m="1254070">And</span> <span
  m="1254300">you</span> <span m="1254410">can</span> <span
  m="1254570">elect</span> <span m="1254860">somebody</span> <span
  m="1255530">easily.</span></p><p><span m="1258810">Randomness,</span> <span
  m="1261320">well,</span> <span m="1261900">various</span> <span
  m="1262340">ways</span> <span m="1262600">to</span> <span
  m="1262710">do</span> <span m="1262900">it.</span> <span
  m="1263050">But</span> <span m="1263780">one</span> <span
  m="1264020">idea</span> <span m="1264480">is</span> <span
  m="1264780">the</span> <span m="1264870">processes</span> <span
  m="1265480">could</span> <span m="1265640">just</span> <span
  m="1265890">choose</span> <span m="1266430">identifiers</span> <span
  m="1267270">randomly.</span> <span m="1268700">You</span> <span
  m="1268800">take</span> <span m="1269040">a</span> <span
  m="1269290">sufficiently</span> <span m="1269970">large</span> <span
  m="1270380">set</span> <span m="1271100">of</span> <span
  m="1271370">possible</span> <span m="1271880">identifiers,</span> <span
  m="1273420">and</span> <span m="1273600">so</span> <span m="1273960">if</span>
  <span m="1274100">they</span> <span m="1274210">just</span> <span
  m="1274480">choose</span> <span m="1274760">uniformly</span> <span
  m="1275440">at</span> <span m="1275540">random,</span> <span
  m="1276540">they're</span> <span m="1276720">likely</span> <span
  m="1277270">to</span> <span m="1277400">choose</span> <span
  m="1277760">all</span> <span m="1277970">different</span> <span
  m="1278300">identifiers.</span> <span m="1279640">Once</span> <span
  m="1279880">you</span> <span m="1279960">have</span> <span
  m="1280590">these</span> <span m="1281140">randomly</span> <span
  m="1281550">chosen</span> <span m="1281930">identifiers</span> <span
  m="1282590">you</span> <span m="1282700">could</span> <span
  m="1282860">use</span> <span m="1283120">them</span> <span
  m="1283290">like</span> <span m="1284480">the</span> <span
  m="1284660">really</span> <span m="1284940">unique</span> <span
  m="1285260">identifiers.</span> <span m="1286770">The</span> <span
  m="1286910">only</span> <span m="1287130">thing</span> <span
  m="1287360">is</span> <span m="1287720">you</span> <span
  m="1287920">might,</span> <span m="1288530">there's</span> <span
  m="1288880">a</span> <span m="1288940">small</span> <span
  m="1289270">chance</span> <span m="1289700">that</span> <span
  m="1289830">you'll</span> <span m="1290020">have</span> <span
  m="1290220">a</span> <span m="1290290">duplicate.</span> <span
  m="1291170">In</span> <span m="1291310">which</span> <span
  m="1291550">case,</span> <span m="1291900">you</span> <span
  m="1292040">want</span> <span m="1292190">to</span> <span
  m="1292230">be</span> <span m="1292370">able</span> <span
  m="1292560">to</span> <span m="1292650">detect</span> <span
  m="1293220">that</span> <span m="1293620">and</span> <span
  m="1294130">repeat</span> <span m="1294520">this.</span></p><p><span
  m="1296100">So</span> <span m="1296700">first</span> <span
  m="1296960">of</span> <span m="1297020">all,</span> <span
  m="1297260">how</span> <span m="1297330">big</span> <span
  m="1297540">the</span> <span m="1297630">a</span> <span m="1297875">set</span>
  <span m="1298120">do</span> <span m="1298200">you</span> <span
  m="1298310">need?</span> <span m="1300290">Well</span> <span
  m="1300420">here's</span> <span m="1300640">an</span> <span
  m="1300720">example.</span> <span m="1303950">Suppose</span> <span
  m="1304420">that</span> <span m="1304710">you</span> <span
  m="1304850">have</span> <span m="1305120">the</span> <span
  m="1305230">n</span> <span m="1305380">processes</span> <span
  m="1305990">choosing</span> <span m="1306410">at</span> <span
  m="1306500">random,</span> <span m="1307170">independently</span> <span
  m="1308030">from</span> <span m="1308240">a</span> <span
  m="1308300">space</span> <span m="1310040">of</span> <span
  m="1310170">size</span> <span m="1310520">r.</span> <span
  m="1311390">Identifiers</span> <span m="1312230">are</span> <span
  m="1313120">the</span> <span m="1313210">numbers</span> <span
  m="1315070">one</span> <span m="1315130">through</span> <span
  m="1315330">r.</span> <span m="1317030">OK</span> <span m="1317780">and</span>
  <span m="1318360">r</span> <span m="1318750">is</span> <span
  m="1319730">going</span> <span m="1319970">to</span> <span
  m="1320160">depend</span> <span m="1320550">on</span> <span
  m="1320700">n.</span> <span m="1321290">It's</span> <span
  m="1321306">going</span> <span m="1321323">to</span> <span
  m="1321340">be</span> <span m="1321450">like</span> <span m="1321650">n</span>
  <span m="1321800">squared,</span> <span m="1322710">but</span> <span
  m="1322840">it's</span> <span m="1322990">also</span> <span
  m="1323230">going</span> <span m="1323500">to</span> <span
  m="1323590">depend</span> <span m="1324050">on</span> <span
  m="1324210">epsilon,</span> <span m="1324890">which</span> <span
  m="1324980">is</span> <span m="1325060">the</span> <span
  m="1325200">error</span> <span m="1325470">probability</span> <span
  m="1326230">that</span> <span m="1326420">you're</span> <span
  m="1326640">interested</span> <span m="1327180">in.</span> <span
  m="1328270">Turns</span> <span m="1328520">out</span> <span
  m="1328640">that</span> <span m="1328760">n</span> <span
  m="1328920">squared</span> <span m="1329320">over</span> <span
  m="1329570">2</span> <span m="1329760">epsilon</span> <span
  m="1330560">is</span> <span m="1330740">good</span> <span
  m="1330920">enough.</span> <span m="1331710">OK</span> <span
  m="1331950">so</span> <span m="1332080">you</span> <span
  m="1332160">have</span> <span m="1332360">your</span> <span
  m="1332510">IDs</span> <span m="1332900">space</span> <span
  m="1333160">at</span> <span m="1333230">least</span> <span
  m="1333530">that</span> <span m="1333780">large.</span> <span
  m="1335300">And</span> <span m="1335460">then</span> <span
  m="1335720">you</span> <span m="1335850">can</span> <span
  m="1336020">guarantee</span> <span m="1336620">that</span> <span
  m="1336820">with</span> <span m="1337010">probability</span> <span
  m="1338230">at</span> <span m="1338320">least</span> <span
  m="1338580">1</span> <span m="1338820">minus</span> <span
  m="1339230">epsilon,</span> <span m="1340040">all</span> <span
  m="1340420">the</span> <span m="1340600">numbers</span> <span
  m="1341040">that</span> <span m="1341160">everybody</span> <span
  m="1341590">chooses</span> <span m="1342130">are</span> <span
  m="1342210">different.</span></p><p><span m="1344460">It's</span> <span
  m="1344580">a</span> <span m="1344650">very</span> <span
  m="1344790">easy</span> <span m="1345010">proof.</span> <span
  m="1345300">The</span> <span m="1345390">probability--</span> <span
  m="1346050">just</span> <span m="1346310">look</span> <span
  m="1346500">at</span> <span m="1346630">two</span> <span
  m="1346760">particular</span> <span m="1347320">processes--</span> <span
  m="1347980">what's</span> <span m="1348170">the</span> <span
  m="1348250">probability</span> <span m="1348990">that</span> <span
  m="1349150">they</span> <span m="1349290">choose</span> <span
  m="1349640">the</span> <span m="1349740">same</span> <span
  m="1350030">number?</span> <span m="1351050">It's</span> <span
  m="1351150">just</span> <span m="1351310">1</span> <span
  m="1351520">over</span> <span m="1351770">r,</span> <span
  m="1352250">right.</span> <span m="1352960">Because</span> <span
  m="1353050">they're</span> <span m="1353140">both</span> <span
  m="1353370">choosing</span> <span m="1353730">at</span> <span
  m="1353800">random.</span> <span m="1354260">The</span> <span
  m="1354340">first</span> <span m="1354630">one</span> <span
  m="1354800">chooses</span> <span m="1355180">something.</span> <span
  m="1355690">The</span> <span m="1356280">probability</span> <span
  m="1356880">that</span> <span m="1356980">the</span> <span
  m="1357080">second</span> <span m="1357320">one</span> <span
  m="1357470">chooses</span> <span m="1357780">the</span> <span
  m="1357880">same</span> <span m="1358170">thing</span> <span
  m="1358490">is</span> <span m="1358660">just</span> <span m="1359210">1</span>
  <span m="1359460">over</span> <span m="1359740">r.</span> <span
  m="1361080">But</span> <span m="1361230">now</span> <span
  m="1361360">you</span> <span m="1361510">can</span> <span
  m="1361660">take</span> <span m="1361860">a</span> <span
  m="1361940">union</span> <span m="1362300">bound,</span> <span
  m="1362600">just</span> <span m="1362830">add</span> <span
  m="1363070">up</span> <span m="1363210">the</span> <span
  m="1363290">probabilities</span> <span m="1364560">of</span> <span
  m="1364830">any</span> <span m="1365280">pair</span> <span
  m="1367790">having</span> <span m="1368060">a</span> <span
  m="1368120">duplicate.</span> <span m="1369020">And</span> <span
  m="1369290">so</span> <span m="1369500">you</span> <span
  m="1369830">have</span> <span m="1370090">n</span> <span
  m="1370250">square</span> <span m="1370710">around</span> <span
  m="1370950">n</span> <span m="1371080">squared</span> <span
  m="1371470">over</span> <span m="1371700">2</span> <span
  m="1371930">pairs.</span> <span m="1372520">And</span> <span
  m="1372840">so</span> <span m="1374660">multiplying</span> <span
  m="1375250">1</span> <span m="1375430">over</span> <span m="1375670">r</span>
  <span m="1375900">by</span> <span m="1376040">n</span> <span
  m="1376230">squared</span> <span m="1376580">over</span> <span
  m="1376820">2</span> <span m="1377500">still</span> <span
  m="1377770">keeps</span> <span m="1378060">your</span> <span
  m="1378170">probability</span> <span m="1378860">less</span> <span
  m="1379130">than</span> <span m="1379250">or</span> <span
  m="1379370">equal</span> <span m="1379630">to</span> <span
  m="1379720">epsilon,</span> <span m="1380590">your</span> <span
  m="1380740">error</span> <span m="1380950">probability.</span> <span
  m="1382820">So</span> <span m="1382960">you</span> <span
  m="1383110">can</span> <span m="1383410">choose</span> <span
  m="1384680">identifiers</span> <span m="1387630">using</span> <span
  m="1388180">randomness.</span> <span m="1388740">With</span> <span
  m="1388900">large</span> <span m="1389190">enough</span> <span
  m="1389370">space,</span> <span m="1389920">with</span> <span
  m="1390130">very</span> <span m="1390330">high</span> <span
  m="1390470">probability,</span> <span m="1391640">you</span> <span
  m="1391800">can</span> <span m="1391970">get</span> <span
  m="1392190">them</span> <span m="1393200">to</span> <span
  m="1393430">be</span> <span m="1393590">all</span> <span
  m="1393720">different.</span></p><p><span m="1395910">And</span> <span
  m="1396080">now</span> <span m="1396430">here's</span> <span
  m="1396690">how</span> <span m="1396840">the</span> <span
  m="1396990">algorithm</span> <span m="1397520">works.</span> <span
  m="1400460">So</span> <span m="1400580">you</span> <span
  m="1400640">get</span> <span m="1400820">an</span> <span
  m="1400920">algorithm</span> <span m="1401480">that</span> <span
  m="1401660">would</span> <span m="1403190">finish</span> <span
  m="1403570">in</span> <span m="1403690">only</span> <span
  m="1403970">one</span> <span m="1404210">round,</span> <span
  m="1404630">with</span> <span m="1404760">probability</span> <span
  m="1405320">1</span> <span m="1405520">minus</span> <span
  m="1405870">epsilon.</span> <span m="1406980">But</span> <span
  m="1407260">it</span> <span m="1407460">will</span> <span
  m="1407580">be</span> <span m="1407700">correct.</span> <span
  m="1408300">And</span> <span m="1408450">it</span> <span
  m="1408660">will</span> <span m="1408900">have</span> <span
  m="1409060">repeated</span> <span m="1409490">rounds,</span> <span
  m="1410640">in</span> <span m="1410890">case</span> <span
  m="1411160">the</span> <span m="1411240">first</span> <span
  m="1411550">round</span> <span m="1411790">doesn't</span> <span
  m="1412100">work.</span> <span m="1412840">But</span> <span
  m="1412950">the</span> <span m="1413060">expected</span> <span
  m="1413620">time</span> <span m="1414060">is</span> <span
  m="1414540">just</span> <span m="1415120">1</span> <span
  m="1415380">over</span> <span m="1415690">1</span> <span
  m="1415900">minus</span> <span m="1416260">epsilon,</span> <span
  m="1416930">not</span> <span m="1417160">very</span> <span
  m="1417370">big.</span> <span m="1419130">What's</span> <span
  m="1419350">the</span> <span m="1419460">algorithm?</span> <span
  m="1420380">Well</span> <span m="1420660">processes</span> <span
  m="1421220">just</span> <span m="1421460">choose</span> <span
  m="1421740">the</span> <span m="1421820">random</span> <span
  m="1422180">IDs</span> <span m="1422710">from</span> <span
  m="1422930">the</span> <span m="1423100">big</span> <span
  m="1423360">space,</span> <span m="1423880">like</span> <span
  m="1424180">we</span> <span m="1424260">just</span> <span
  m="1424470">said.</span> <span m="1425200">They</span> <span
  m="1425540">exchange</span> <span m="1426100">their</span> <span
  m="1426310">Ids.</span> <span m="1427770">And</span> <span
  m="1427940">now,</span> <span m="1428360">everybody</span> <span
  m="1428810">can</span> <span m="1428990">see</span> <span
  m="1429230">everyone's</span> <span m="1429700">ID,</span> <span
  m="1430030">but</span> <span m="1430140">they</span> <span
  m="1430270">also</span> <span m="1430550">can</span> <span
  m="1430730">tell</span> <span m="1431230">if</span> <span
  m="1431770">there's</span> <span m="1431950">a</span> <span
  m="1432010">duplicate.</span> <span m="1432750">if</span> <span
  m="1433000">the</span> <span m="1433110">maximum</span> <span
  m="1433610">is</span> <span m="1433720">not</span> <span
  m="1433920">unique.</span></p><p><span m="1435030">So</span> <span
  m="1435080">if</span> <span m="1435150">the</span> <span
  m="1435220">maximum</span> <span m="1435680">is</span> <span
  m="1435770">unique,</span> <span m="1436210">find</span> <span
  m="1436730">the</span> <span m="1436810">maximum</span> <span
  m="1437380">wins.</span> <span m="1437680">And</span> <span
  m="1437770">everyone</span> <span m="1438110">knows</span> <span
  m="1438340">that.</span> <span m="1439500">Otherwise</span> <span
  m="1440360">you</span> <span m="1440450">have</span> <span
  m="1440620">a</span> <span m="1440680">problem.</span> <span
  m="1441190">And</span> <span m="1441360">you</span> <span
  m="1441450">have</span> <span m="1441640">to</span> <span
  m="1441760">repeat.</span> <span m="1442190">And</span> <span
  m="1442310">you</span> <span m="1442400">just</span> <span
  m="1442590">keep</span> <span m="1442840">doing</span> <span
  m="1443100">that</span> <span m="1443340">until</span> <span
  m="1443640">you</span> <span m="1443800">succeed.</span> <span
  m="1446200">So</span> <span m="1446860">this</span> <span
  m="1447290">can</span> <span m="1447420">just</span> <span
  m="1447640">continue,</span> <span m="1448160">but</span> <span
  m="1448420">it's</span> <span m="1448650">likely</span> <span
  m="1449030">to</span> <span m="1449110">finish</span> <span
  m="1449420">very</span> <span m="1449670">fast,</span> <span
  m="1450120">if</span> <span m="1450220">you</span> <span
  m="1450350">have</span> <span m="1450970">a</span> <span
  m="1451030">high</span> <span m="1451220">likelihood</span> <span
  m="1451860">of</span> <span m="1451950">having</span> <span
  m="1452980">no</span> <span m="1453150">duplicates.</span> <span
  m="1457310">Questions</span> <span m="1457990">about</span> <span
  m="1458280">the</span> <span m="1458370">leader</span> <span
  m="1458630">election?</span> <span m="1460440">So</span> <span
  m="1460770">the</span> <span m="1460910">story</span> <span
  m="1461380">was,</span> <span m="1462200">it's</span> <span
  m="1462380">impossible</span> <span m="1463120">without</span> <span
  m="1463520">something</span> <span m="1463910">to</span> <span
  m="1464000">help</span> <span m="1464210">you</span> <span
  m="1464320">distinguish</span> <span m="1466540">some</span> <span
  m="1466740">processes.</span> <span m="1467640">You</span> <span
  m="1467760">can</span> <span m="1467890">do</span> <span m="1468080">it</span>
  <span m="1468190">with</span> <span m="1468510">unique</span> <span
  m="1468820">identifiers.</span> <span m="1469490">You</span> <span
  m="1469540">can</span> <span m="1469660">do</span> <span
  m="1469870">with</span> <span m="1470040">randomness.</span></p><p><span
  m="1476680">Second</span> <span m="1477010">problem</span> <span
  m="1477580">is</span> <span m="1477960">called</span> <span
  m="1478360">maximal</span> <span m="1479110">independent</span> <span
  m="1479920">set.</span> <span m="1482240">So</span> <span
  m="1482460">you</span> <span m="1482600">have</span> <span
  m="1482860">a</span> <span m="1483090">picture</span> <span
  m="1483480">of</span> <span m="1483560">a</span> <span
  m="1483600">maximal</span> <span m="1484080">independent</span> <span
  m="1484620">set</span> <span m="1484820">in</span> <span m="1484930">a</span>
  <span m="1484970">graph</span> <span m="1485330">here.</span> <span
  m="1487020">Let's</span> <span m="1487148">try</span> <span
  m="1487276">this.</span> <span m="1489790">Yeah</span> <span
  m="1490050">cursor.</span> <span m="1491120">So</span> <span
  m="1491530">the</span> <span m="1491630">maximal</span> <span
  m="1492080">independent</span> <span m="1492550">set</span> <span
  m="1492730">in</span> <span m="1492800">the</span> <span
  m="1492860">graph</span> <span m="1493220">is</span> <span
  m="1493390">here.</span> <span m="1493670">But</span> <span
  m="1493820">this</span> <span m="1493990">is</span> <span
  m="1494100">something</span> <span m="1494520">I'll</span> <span
  m="1496090">come</span> <span m="1496280">back</span> <span
  m="1496540">to</span> <span m="1496760">a</span> <span
  m="1496860">minute.</span> <span m="1497300">This</span> <span
  m="1497470">is</span> <span m="1497590">actually</span> <span
  m="1498070">a</span> <span m="1498210">use</span> <span m="1498350">of</span>
  <span m="1498430">the</span> <span m="1498530">maximal</span> <span
  m="1499100">independent</span> <span m="1499770">set</span> <span
  m="1500010">to</span> <span m="1500100">model</span> <span
  m="1501120">what</span> <span m="1501350">happens</span> <span
  m="1501770">in</span> <span m="1501930">a</span> <span
  m="1502000">certain</span> <span m="1502410">kind</span> <span
  m="1502600">of</span> <span m="1502670">biological</span> <span
  m="1503370">system.</span></p><p><span m="1506140">What's</span> <span
  m="1506360">a</span> <span m="1506390">maximal</span> <span
  m="1506840">independence</span> <span m="1507400">set?</span> <span
  m="1507660">So</span> <span m="1507780">you</span> <span
  m="1507920">start</span> <span m="1508270">with</span> <span
  m="1508860">a</span> <span m="1508990">general,</span> <span
  m="1510110">undirected</span> <span m="1511180">graph</span> <span
  m="1511770">network.</span> <span m="1513750">And</span> <span
  m="1513880">the</span> <span m="1513950">problem</span> <span
  m="1514440">is</span> <span m="1514620">to</span> <span
  m="1514790">choose</span> <span m="1516130">a</span> <span
  m="1516260">subset</span> <span m="1516760">of</span> <span
  m="1516890">the</span> <span m="1516960">nodes</span> <span
  m="1517940">so</span> <span m="1518150">that</span> <span
  m="1518280">they</span> <span m="1518410">form</span> <span
  m="1519235">what</span> <span m="1519490">we</span> <span
  m="1519570">call</span> <span m="1519810">a</span> <span
  m="1519860">maximal</span> <span m="1520400">independent</span> <span
  m="1520700">.</span> <span m="1521000">Set</span> <span
  m="1521290">let's</span> <span m="1521500">break</span> <span
  m="1521730">that</span> <span m="1521940">down.</span> <span
  m="1522180">What</span> <span m="1522310">does</span> <span
  m="1522440">this</span> <span m="1522600">mean?</span> <span
  m="1523430">Independent</span> <span m="1524220">means</span> <span
  m="1524560">you</span> <span m="1524680">don't</span> <span
  m="1524920">have</span> <span m="1525130">any</span> <span
  m="1525360">two</span> <span m="1525580">neighbors</span> <span
  m="1526680">that</span> <span m="1526810">are</span> <span
  m="1526900">both</span> <span m="1527410">in</span> <span
  m="1527610">the</span> <span m="1527710">set.</span> <span
  m="1530310">So</span> <span m="1530450">you</span> <span
  m="1530550">don't</span> <span m="1530740">want</span> <span
  m="1530880">to</span> <span m="1530930">get</span> <span
  m="1531160">two</span> <span m="1531310">neighbors</span> <span
  m="1531900">in</span> <span m="1532030">the</span> <span
  m="1532130">set.</span> <span m="1532960">Maximal</span> <span
  m="1534600">means</span> <span m="1535430">that</span> <span
  m="1536220">whatever</span> <span m="1536650">set</span> <span
  m="1536940">you</span> <span m="1537080">choose,</span> <span
  m="1537510">you</span> <span m="1537670">can't</span> <span
  m="1538050">add</span> <span m="1538350">any</span> <span
  m="1538600">more</span> <span m="1538960">nodes</span> <span
  m="1539420">without</span> <span m="1539760">violating</span> <span
  m="1540430">independence.</span> <span m="1542480">So</span> <span
  m="1542600">now</span> <span m="1542750">this</span> <span
  m="1543100">should</span> <span m="1543330">look</span> <span
  m="1543550">something</span> <span m="1544010">like</span> <span
  m="1544390">a</span> <span m="1544460">couple</span> <span
  m="1544760">of</span> <span m="1544830">homework</span> <span
  m="1545290">problems</span> <span m="1545860">that</span> <span
  m="1546010">you</span> <span m="1546120">had</span> <span
  m="1546455">from</span> <span m="1546622">the</span> <span
  m="1546790">beginning</span> <span m="1547360">and</span> <span
  m="1547620">recently.</span></p><p><span m="1548800">But</span> <span
  m="1549120">I'm</span> <span m="1549280">not</span> <span
  m="1549520">saying</span> <span m="1549830">that</span> <span
  m="1549950">it's</span> <span m="1550160">maximum</span> <span
  m="1551340">independent</span> <span m="1551990">set.</span> <span
  m="1552180">I'm</span> <span m="1552250">not</span> <span
  m="1552440">saying</span> <span m="1552620">you</span> <span
  m="1552710">have</span> <span m="1552890">to</span> <span
  m="1552990">have</span> <span m="1553210">the</span> <span
  m="1553290">global,</span> <span m="1553980">largest</span> <span
  m="1554420">number</span> <span m="1554860">of</span> <span
  m="1554950">nodes.</span> <span m="1555970">I'm</span> <span
  m="1556090">just</span> <span m="1556260">saying</span> <span
  m="1556550">it</span> <span m="1556620">has</span> <span m="1556820">to</span>
  <span m="1556910">be</span> <span m="1557530">a</span> <span
  m="1557690">local</span> <span m="1558500">optimum,</span> <span
  m="1558960">in</span> <span m="1559040">the</span> <span
  m="1559130">sense</span> <span m="1559460">that</span> <span
  m="1559600">you</span> <span m="1559730">can't</span> <span
  m="1560030">add</span> <span m="1560400">any</span> <span
  m="1560620">more</span> <span m="1560830">nodes</span> <span
  m="1561200">to</span> <span m="1561270">your</span> <span
  m="1561490">set</span> <span m="1561850">without</span> <span
  m="1562150">violating</span> <span m="1562740">the</span> <span
  m="1562880">independence</span> <span m="1563580">property.</span> <span
  m="1565180">Make</span> <span m="1565390">sense?</span> <span
  m="1566820">There's</span> <span m="1567000">two</span> <span
  m="1567200">examples,</span> <span m="1567930">the</span> <span
  m="1568040">same</span> <span m="1568370">graph,</span> <span
  m="1569560">two</span> <span m="1569790">different</span> <span
  m="1570300">maximal</span> <span m="1570900">independent</span> <span
  m="1571550">sets.</span> <span m="1572910">The</span> <span
  m="1573160">green</span> <span m="1573500">nodes,</span> <span
  m="1574580">here</span> <span m="1574870">we</span> <span
  m="1574980">have</span> <span m="1575520">four</span> <span
  m="1576530">green</span> <span m="1576840">nodes</span> <span
  m="1578350">that</span> <span m="1578910">are</span> <span
  m="1579320">independent,</span> <span m="1580500">not</span> <span
  m="1580990">neighbors</span> <span m="1581390">of</span> <span
  m="1581490">each</span> <span m="1581680">other.</span> <span
  m="1582290">And</span> <span m="1582430">they're</span> <span
  m="1582520">maximal,</span> <span m="1583130">in</span> <span
  m="1583240">that</span> <span m="1583340">I</span> <span
  m="1583400">couldn't</span> <span m="1583760">add</span> <span
  m="1584110">any</span> <span m="1584400">of</span> <span
  m="1584480">the</span> <span m="1584590">red</span> <span
  m="1584840">nodes</span> <span m="1585730">into</span> <span
  m="1586010">a</span> <span m="1586150">set</span> <span
  m="1586540">without</span> <span m="1586910">violating</span> <span
  m="1588800">the</span> <span m="1588910">independence</span> <span
  m="1589550">property.</span> <span m="1591150">But</span> <span
  m="1591200">then</span> <span m="1591360">over</span> <span
  m="1591600">here,</span> <span m="1591880">we</span> <span
  m="1591980">have</span> <span m="1592140">a</span> <span
  m="1592240">second</span> <span m="1592680">maximal</span> <span
  m="1593220">independent</span> <span m="1593880">set</span> <span
  m="1594080">for</span> <span m="1594190">the</span> <span
  m="1594320">same</span> <span m="1594620">graph.</span> <span
  m="1595850">Now</span> <span m="1596000">we</span> <span
  m="1596100">just</span> <span m="1596340">have</span> <span
  m="1597260">two</span> <span m="1597520">nodes.</span> <span
  m="1599160">And</span> <span m="1600000">you</span> <span
  m="1600120">can't</span> <span m="1600430">add</span> <span
  m="1600750">any</span> <span m="1600990">of</span> <span
  m="1601100">the</span> <span m="1601200">red</span> <span
  m="1601410">nodes</span> <span m="1601760">without</span> <span
  m="1602110">violating</span> <span m="1602740">the</span> <span
  m="1602850">independence</span> <span m="1603510">property.</span> <span
  m="1604960">In</span> <span m="1605060">other</span> <span
  m="1605070">words,</span> <span m="1605530">every</span> <span
  m="1606440">node</span> <span m="1606870">is</span> <span
  m="1607050">either</span> <span m="1607420">in</span> <span
  m="1607650">the</span> <span m="1607780">MIS,</span> <span
  m="1608550">or</span> <span m="1608730">has</span> <span m="1608890">a</span>
  <span m="1608950">neighbor</span> <span m="1609310">in</span> <span
  m="1609380">the</span> <span m="1609510">MIS.</span> <span
  m="1611810">There's</span> <span m="1612000">nothing</span> <span
  m="1612370">else</span> <span m="1612590">you</span> <span
  m="1612700">can</span> <span m="1612870">do</span> <span m="1613090">to</span>
  <span m="1613220">add</span> <span m="1613530">notes</span> <span
  m="1613920">to</span> <span m="1614020">the</span> <span
  m="1614160">MIS</span></p><p><span m="1616620">So</span> <span
  m="1616890">the</span> <span m="1617530">notion</span> <span
  m="1617990">of</span> <span m="1618310">maximal</span> <span
  m="1618820">independence,</span> <span m="1619450">that</span> <span
  m="1619660">make</span> <span m="1619870">sense?</span> <span
  m="1624120">All</span> <span m="1624190">right,</span> <span
  m="1624480">so</span> <span m="1625170">to</span> <span
  m="1625450">make</span> <span m="1625640">this</span> <span
  m="1625810">a</span> <span m="1625890">distributed</span> <span
  m="1626580">problem,</span> <span m="1628430">let's</span> <span
  m="1628710">start</span> <span m="1628970">out</span> <span
  m="1629160">assuming</span> <span m="1629640">we</span> <span
  m="1629760">have</span> <span m="1630040">no</span> <span
  m="1630320">unique</span> <span m="1630690">identifier.</span> <span
  m="1631490">Actually,</span> <span m="1631950">for</span> <span
  m="1632070">this</span> <span m="1632260">whole</span> <span
  m="1632530">problem,</span> <span m="1633010">we're</span> <span
  m="1633090">not</span> <span m="1633280">going</span> <span
  m="1633380">to</span> <span m="1633430">have</span> <span
  m="1633600">unique</span> <span m="1633870">identifiers.</span> <span
  m="1634660">They're</span> <span m="1634780">all</span> <span
  m="1634900">going</span> <span m="1635000">to</span> <span
  m="1635050">be</span> <span m="1635180">identical.</span> <span
  m="1637580">The</span> <span m="1637680">processes</span> <span
  m="1638130">do</span> <span m="1638260">need</span> <span
  m="1638710">one</span> <span m="1638950">piece</span> <span
  m="1639180">of</span> <span m="1639270">information,</span> <span
  m="1639990">which</span> <span m="1640200">is</span> <span
  m="1640330">some</span> <span m="1640560">approximation</span> <span
  m="1641630">to</span> <span m="1641940">n,</span> <span m="1642390">the</span>
  <span m="1642490">size</span> <span m="1642950">of</span> <span
  m="1643210">the</span> <span m="1643630">network,</span> <span
  m="1644010">the</span> <span m="1644110">total</span> <span
  m="1644380">number</span> <span m="1644710">of</span> <span
  m="1644760">vertices.</span> <span m="1647160">So</span> <span
  m="1647350">we</span> <span m="1647450">would</span> <span
  m="1647670">like</span> <span m="1647950">to</span> <span
  m="1648070">have</span> <span m="1648430">these</span> <span
  m="1648970">nodes</span> <span m="1649480">somehow</span> <span
  m="1649990">cooperate</span> <span m="1650860">to</span> <span
  m="1651380">compute</span> <span m="1652010">an</span> <span
  m="1652170">MIS</span> <span m="1652870">of</span> <span
  m="1653020">the</span> <span m="1653150">entire</span> <span
  m="1653600">network</span> <span m="1654070">graph.</span> <span
  m="1655860">What</span> <span m="1656020">that</span> <span
  m="1656190">means</span> <span m="1656530">is</span> <span
  m="1656650">every</span> <span m="1656930">process</span> <span
  m="1657630">should</span> <span m="1657840">find</span> <span
  m="1658310">out</span> <span m="1658850">whether</span> <span
  m="1659270">it</span> <span m="1659570">is</span> <span m="1659750">in</span>
  <span m="1659890">the</span> <span m="1660020">MIS</span> <span
  m="1660580">or</span> <span m="1660670">not.</span> <span
  m="1661380">If</span> <span m="1661430">it</span> <span m="1661550">is,</span>
  <span m="1661810">it</span> <span m="1661910">should</span> <span
  m="1662080">output</span> <span m="1662820">n.</span> <span
  m="1663780">And</span> <span m="1663950">if</span> <span
  m="1664040">it's</span> <span m="1664190">not,</span> <span
  m="1664640">it'll</span> <span m="1664770">just</span> <span
  m="1664990">output</span> <span m="1665640">out.</span></p><p><span
  m="1669110">So</span> <span m="1669270">you</span> <span
  m="1669410">don't</span> <span m="1669610">have</span> <span
  m="1669820">to</span> <span m="1669990">actually</span> <span
  m="1670550">compute</span> <span m="1671220">this,</span> <span
  m="1671570">like</span> <span m="1671740">you're</span> <span
  m="1671880">used</span> <span m="1672180">to</span> <span
  m="1672280">solving</span> <span m="1672660">problems</span> <span
  m="1673150">like</span> <span m="1673360">this,</span> <span
  m="1673600">where</span> <span m="1673770">somebody</span> <span
  m="1674230">has</span> <span m="1674460">to</span> <span
  m="1675250">gather</span> <span m="1675790">all</span> <span
  m="1675950">the</span> <span m="1676050">information</span> <span
  m="1676730">in</span> <span m="1676850">one</span> <span
  m="1677040">place.</span> <span m="1677990">Nobody</span> <span
  m="1678330">gathers</span> <span m="1678750">anything.</span> <span
  m="1679280">Everybody</span> <span m="1679760">just</span> <span
  m="1680060">has</span> <span m="1680280">to</span> <span
  m="1680380">know</span> <span m="1680700">whether</span> <span
  m="1681050">or</span> <span m="1681110">not</span> <span
  m="1681360">they're</span> <span m="1681500">in</span> <span
  m="1681600">the</span> <span m="1681730">MIS.</span> <span
  m="1685880">So</span> <span m="1686080">as</span> <span m="1686180">you</span>
  <span m="1686270">can</span> <span m="1686380">imagine,</span> <span
  m="1686840">this</span> <span m="1687020">is</span> <span
  m="1687490">going</span> <span m="1687760">to</span> <span
  m="1687850">be</span> <span m="1688040">unsolvable</span> <span
  m="1688900">in</span> <span m="1689040">certain</span> <span
  m="1689440">graphs</span> <span m="1690000">by</span> <span
  m="1690120">deterministic</span> <span m="1690960">algorithms,</span> <span
  m="1691970">by</span> <span m="1692110">the</span> <span
  m="1692230">same</span> <span m="1692510">kind</span> <span
  m="1692800">of</span> <span m="1694420">symmetry</span> <span
  m="1694870">breaking</span> <span m="1695310">problems</span> <span
  m="1695840">that</span> <span m="1695980">you</span> <span
  m="1696110">saw</span> <span m="1696500">for</span> <span
  m="1696900">leader</span> <span m="1697150">election.</span> <span
  m="1699810">So</span> <span m="1699870">we're</span> <span
  m="1699960">going</span> <span m="1700180">to</span> <span
  m="1700340">move</span> <span m="1700600">right</span> <span
  m="1700830">to</span> <span m="1700950">randomized</span> <span
  m="1701570">algorithms</span> <span m="1702320">for</span> <span
  m="1702420">this</span> <span m="1702670">problem.</span></p><p><span
  m="1705400">Some</span> <span m="1705710">applications</span> <span
  m="1706730">of</span> <span m="1707040">distributed</span> <span
  m="1707620">MIS,</span> <span m="1708180">well</span> <span
  m="1708380">they</span> <span m="1708490">come</span> <span
  m="1708720">up</span> <span m="1708860">in</span> <span
  m="1708980">communication</span> <span m="1709660">networks,</span> <span
  m="1710230">where</span> <span m="1710340">you</span> <span
  m="1710480">want</span> <span m="1710710">to</span> <span
  m="1711520">choose--</span> <span m="1712110">let's</span> <span
  m="1712240">say</span> <span m="1712430">you</span> <span
  m="1712510">have</span> <span m="1712530">a</span> <span
  m="1712550">very</span> <span m="1712860">dense</span> <span
  m="1713230">network</span> <span m="1713750">of</span> <span
  m="1713880">processes.</span> <span m="1715040">You</span> <span
  m="1715160">want</span> <span m="1715290">to</span> <span
  m="1715370">choose</span> <span m="1715750">just</span> <span
  m="1716110">a</span> <span m="1716170">few</span> <span
  m="1716720">nodes,</span> <span m="1717590">which</span> <span
  m="1717680">would</span> <span m="1717830">be</span> <span
  m="1717930">like</span> <span m="1718100">an</span> <span
  m="1718220">overlay</span> <span m="1718720">network.</span> <span
  m="1719770">You</span> <span m="1719880">would</span> <span
  m="1720010">choose</span> <span m="1720280">some</span> <span
  m="1720550">nodes</span> <span m="1720930">who</span> <span
  m="1721010">could</span> <span m="1721180">take</span> <span
  m="1721460">charge</span> <span m="1721850">of</span> <span
  m="1721940">communication</span> <span m="1722800">that</span> <span
  m="1723000">you</span> <span m="1723110">can</span> <span
  m="1723280">communicate</span> <span m="1723900">on</span> <span
  m="1724030">this</span> <span m="1724210">overlay</span> <span
  m="1724710">network,</span> <span m="1725710">and</span> <span
  m="1725850">then</span> <span m="1726000">in</span> <span
  m="1726080">the</span> <span m="1726210">end,</span> <span
  m="1726490">each</span> <span m="1726690">node</span> <span
  m="1726910">can</span> <span m="1727060">take</span> <span
  m="1727280">care</span> <span m="1727590">of</span> <span
  m="1727730">communicating</span> <span m="1728390">with</span> <span
  m="1728560">its</span> <span m="1729010">many</span> <span
  m="1729280">neighbors.</span> <span m="1730960">So</span> <span
  m="1730990">that's</span> <span m="1731190">a</span> <span
  m="1731230">common</span> <span m="1731630">sort</span> <span
  m="1731840">of</span> <span m="1731920">application.</span></p><p><span
  m="1734250">But</span> <span m="1734400">it</span> <span
  m="1734470">also</span> <span m="1734890">comes</span> <span
  m="1735170">up</span> <span m="1735350">in</span> <span
  m="1735580">other</span> <span m="1735810">places.</span> <span
  m="1736670">A</span> <span m="1736760">great</span> <span
  m="1737070">example</span> <span m="1737630">is</span> <span
  m="1737760">in</span> <span m="1737890">developmental</span> <span
  m="1738520">biology,</span> <span m="1739110">where</span> <span
  m="1739300">a</span> <span m="1739330">couple</span> <span
  m="1739570">of</span> <span m="1739650">years</span> <span
  m="1739920">ago,</span> <span m="1740690">there</span> <span
  m="1740820">was</span> <span m="1740950">a</span> <span
  m="1741010">paper</span> <span m="1741380">in</span> <span
  m="1741490">Science</span> <span m="1742820">by</span> <span
  m="1743700">Afek,</span> <span m="1744170">Alon--</span> <span
  m="1744590">there's</span> <span m="1744710">like</span> <span
  m="1744910">eight</span> <span m="1745090">authors</span> <span
  m="1745550">on</span> <span m="1745690">that.</span> <span
  m="1745980">But</span> <span m="1746280">Ziv</span> <span
  m="1747110">Bar-Joseph</span> <span m="1747880">was</span> <span
  m="1748160">the</span> <span m="1748570">lead</span> <span
  m="1749030">author</span> <span m="1749640">of</span> <span
  m="1749860">this</span> <span m="1750040">paper.</span> <span
  m="1751380">So</span> <span m="1751530">the</span> <span
  m="1751660">idea</span> <span m="1751900">is</span> <span
  m="1751970">you</span> <span m="1752050">have</span> <span
  m="1752210">a</span> <span m="1752250">bunch</span> <span
  m="1752560">of</span> <span m="1753770">cells</span> <span
  m="1754440">in</span> <span m="1754600">a</span> <span
  m="1754970">fruit</span> <span m="1755310">fly.</span> <span
  m="1755730">And</span> <span m="1756400">during</span> <span
  m="1756900">development,</span> <span m="1757950">some</span> <span
  m="1758200">of</span> <span m="1758300">those</span> <span
  m="1758490">cells</span> <span m="1758830">are</span> <span
  m="1758930">supposed</span> <span m="1759350">to</span> <span
  m="1759450">distinguish</span> <span m="1760140">themselves</span> <span
  m="1761300">as</span> <span m="1761520">being</span> <span
  m="1761750">what's</span> <span m="1761950">called</span> <span
  m="1762220">sensory</span> <span m="1762700">organ</span> <span
  m="1763100">precursor</span> <span m="1763830">cells.</span> <span
  m="1764730">The</span> <span m="1764870">properties</span> <span
  m="1765310">that</span> <span m="1765420">you</span> <span
  m="1765550">want</span> <span m="1765870">it</span> <span
  m="1766430">that</span> <span m="1766680">actually,</span> <span
  m="1768750">you</span> <span m="1768880">would</span> <span
  m="1769000">like</span> <span m="1769230">a</span> <span
  m="1769280">maximal</span> <span m="1769780">independent</span> <span
  m="1770430">set</span> <span m="1770820">of</span> <span
  m="1771020">the</span> <span m="1771100">cells</span> <span
  m="1771510">to</span> <span m="1771610">become</span> <span
  m="1771940">distinguished</span> <span m="1772550">in</span> <span
  m="1772650">this</span> <span m="1772830">way.</span> <span
  m="1774370">So</span> <span m="1774500">they</span> <span
  m="1774610">wrote</span> <span m="1774800">a</span> <span
  m="1774850">paper</span> <span m="1775170">about</span> <span
  m="1775420">it,</span> <span m="1775540">got</span> <span
  m="1775700">published</span> <span m="1776090">in</span> <span
  m="1776200">Science.</span> <span m="1776800">They</span> <span
  m="1777000">basically</span> <span m="1777460">designed</span> <span
  m="1777910">a</span> <span m="1777960">new</span> <span
  m="1778170">distributed</span> <span m="1778790">algorithm</span> <span
  m="1779790">that</span> <span m="1780130">closely</span> <span
  m="1780570">mirrored</span> <span m="1781110">what</span> <span
  m="1781770">happened</span> <span m="1782270">in</span> <span
  m="1782640">the</span> <span m="1782790">fruit</span> <span
  m="1783010">fly</span> <span m="1783770">during</span> <span
  m="1784010">development.</span></p><p><span m="1788420">So</span> <span
  m="1788620">what</span> <span m="1788820">I'm</span> <span
  m="1788940">going</span> <span m="1789030">to</span> <span
  m="1789090">show</span> <span m="1789270">you</span> <span
  m="1789510">is</span> <span m="1789660">a</span> <span m="1790130">very</span>
  <span m="1790550">well-known</span> <span m="1791330">algorithm,</span> <span
  m="1792240">a</span> <span m="1792470">classical</span> <span
  m="1793650">algorithm</span> <span m="1794730">for</span> <span
  m="1795170">MIS.</span> <span m="1795780">This</span> <span
  m="1795950">is</span> <span m="1796050">by</span> <span
  m="1796180">Michael</span> <span m="1796560">Luby.</span> <span
  m="1798690">Very</span> <span m="1798930">simple</span> <span
  m="1799270">algorithm,</span> <span m="1799730">it</span> <span
  m="1799810">executes</span> <span m="1800560">in</span> <span
  m="1801380">phases.</span> <span m="1802070">Each</span> <span
  m="1802320">phase</span> <span m="1802630">has</span> <span
  m="1802850">two</span> <span m="1803050">realms.</span> <span
  m="1805430">So</span> <span m="1805590">you</span> <span
  m="1805690">start</span> <span m="1806020">out</span> <span
  m="1806190">with</span> <span m="1806330">all</span> <span
  m="1806480">the</span> <span m="1806570">nodes</span> <span
  m="1806880">being</span> <span m="1807120">active.</span> <span
  m="1807690">They're</span> <span m="1807880">all</span> <span
  m="1808240">involved.</span> <span m="1808810">They</span> <span
  m="1808870">don't</span> <span m="1809040">know</span> <span
  m="1809240">what</span> <span m="1809460">they're</span> <span
  m="1809610">going</span> <span m="1809890">to</span> <span
  m="1810250">end</span> <span m="1810470">up</span> <span
  m="1810640">with.</span> <span m="1812060">And</span> <span
  m="1812320">at</span> <span m="1812580">each</span> <span
  m="1812870">phase,</span> <span m="1813510">some</span> <span
  m="1813830">of</span> <span m="1813930">the</span> <span
  m="1814080">active</span> <span m="1814490">nodes</span> <span
  m="1815410">are</span> <span m="1815570">going</span> <span
  m="1815880">to</span> <span m="1816120">decide</span> <span
  m="1816600">they're</span> <span m="1816780">in</span> <span
  m="1817170">the</span> <span m="1817300">MIS.</span> <span
  m="1818580">Some</span> <span m="1818780">others</span> <span
  m="1819110">will</span> <span m="1819300">decide</span> <span
  m="1819720">they're</span> <span m="1820300">out</span> <span
  m="1820850">of</span> <span m="1820950">the</span> <span
  m="1821080">MIS.</span> <span m="1821970">And</span> <span
  m="1822170">some</span> <span m="1822350">others</span> <span
  m="1822630">won't</span> <span m="1822880">know</span> <span
  m="1823050">yet.</span> <span m="1824400">So</span> <span
  m="1824950">then</span> <span m="1825320">you</span> <span
  m="1825450">just</span> <span m="1825710">continue</span> <span
  m="1826250">to</span> <span m="1826370">the</span> <span
  m="1826480">next</span> <span m="1826820">phase,</span> <span
  m="1827230">with</span> <span m="1827400">all</span> <span
  m="1827550">the</span> <span m="1827640">remaining</span> <span
  m="1828150">nodes</span> <span m="1828830">and</span> <span
  m="1828970">the</span> <span m="1829080">edges</span> <span
  m="1829340">between</span> <span m="1829710">them.</span> <span
  m="1830880">So</span> <span m="1830920">you're</span> <span
  m="1830970">basically</span> <span m="1831500">going</span> <span
  m="1831760">to</span> <span m="1831880">settle</span> <span
  m="1832670">what</span> <span m="1832800">happens</span> <span
  m="1833230">with</span> <span m="1833440">some</span> <span
  m="1833650">subset</span> <span m="1834090">of</span> <span
  m="1834200">the</span> <span m="1834290">nodes,</span> <span
  m="1835150">and</span> <span m="1835310">then</span> <span
  m="1835450">reduce</span> <span m="1835840">the</span> <span
  m="1835940">graph</span> <span m="1836430">and</span> <span
  m="1836660">continue.</span></p><p><span m="1839900">So</span> <span
  m="1840050">that's</span> <span m="1840290">the</span> <span
  m="1840410">algorithm.</span> <span m="1840870">So</span> <span
  m="1841040">what</span> <span m="1841150">do</span> <span
  m="1841200">you</span> <span m="1841320">do</span> <span m="1841610">in</span>
  <span m="1841720">each</span> <span m="1842510">phase?</span> <span
  m="1843000">Here's</span> <span m="1843270">what</span> <span
  m="1843560">an</span> <span m="1843820">active</span> <span
  m="1844250">node</span> <span m="1844530">does</span> <span
  m="1845030">at</span> <span m="1845160">a</span> <span
  m="1845220">phase.</span> <span m="1846115">Two</span> <span
  m="1846450">rounds.</span> <span m="1847810">The</span> <span
  m="1847900">first</span> <span m="1848230">round,</span> <span
  m="1848550">it</span> <span m="1848690">picks</span> <span
  m="1849860">a</span> <span m="1849980">random</span> <span
  m="1850400">value</span> <span m="1850930">in</span> <span
  m="1851010">a</span> <span m="1851070">large</span> <span
  m="1851980">space,</span> <span m="1852335">the</span> <span
  m="1852690">same</span> <span m="1852990">kind</span> <span
  m="1853180">of</span> <span m="1853270">idea</span> <span
  m="1853470">as</span> <span m="1853670">before.</span> <span
  m="1854640">This</span> <span m="1854820">time</span> <span
  m="1855060">it's</span> <span m="1855210">1</span> <span m="1855620">up</span>
  <span m="1855820">2</span> <span m="1856140">n</span> <span
  m="1856320">to</span> <span m="1856390">the</span> <span
  m="1856480">fifth.</span> <span m="1857680">It</span> <span
  m="1858100">sends</span> <span m="1858480">that</span> <span
  m="1858690">random</span> <span m="1859070">value</span> <span
  m="1859470">to</span> <span m="1859620">all</span> <span
  m="1859810">its</span> <span m="1859970">neighbors,</span> <span
  m="1861790">receives</span> <span m="1862230">the</span> <span
  m="1862310">values</span> <span m="1862930">from</span> <span
  m="1863130">all</span> <span m="1863430">its</span> <span
  m="1864210">still</span> <span m="1864480">active</span> <span
  m="1864850">neighbors,</span> <span m="1866360">and</span> <span
  m="1866540">then</span> <span m="1866660">it</span> <span
  m="1866740">just</span> <span m="1866930">looks</span> <span
  m="1867230">to</span> <span m="1867340">see</span> <span m="1867640">if</span>
  <span m="1867900">its</span> <span m="1868180">value</span> <span
  m="1869300">is</span> <span m="1870060">greater</span> <span
  m="1870750">than</span> <span m="1871070">all</span> <span
  m="1871310">the</span> <span m="1871380">values</span> <span
  m="1871830">it</span> <span m="1871930">received.</span> <span
  m="1873190">So</span> <span m="1873270">then</span> <span
  m="1873400">it's</span> <span m="1873530">a</span> <span
  m="1873590">local</span> <span m="1873870">maximum.</span> <span
  m="1874450">It</span> <span m="1874520">has</span> <span
  m="1874840">chosen</span> <span m="1875290">a</span> <span
  m="1875330">value</span> <span m="1875770">that's</span> <span
  m="1876030">strictly</span> <span m="1876400">greater</span> <span
  m="1876830">than</span> <span m="1877450">the</span> <span
  m="1877540">values</span> <span m="1877970">chosen</span> <span
  m="1878320">by</span> <span m="1878480">all</span> <span
  m="1878640">its</span> <span m="1878800">neighbors.</span> <span
  m="1879640">So</span> <span m="1879720">then</span> <span
  m="1879800">it</span> <span m="1879970">decides</span> <span
  m="1880440">to</span> <span m="1880540">join</span> <span
  m="1880770">the</span> <span m="1880880">MIS</span> <span
  m="1881880">and</span> <span m="1881960">it</span> <span
  m="1882040">outputs</span> <span m="1882740">in.</span></p><p><span
  m="1884040">But</span> <span m="1884190">now</span> <span
  m="1884330">you</span> <span m="1884480">want</span> <span
  m="1884610">to</span> <span m="1884650">make</span> <span
  m="1884820">sure</span> <span m="1885020">none</span> <span
  m="1885220">of</span> <span m="1885300">its</span> <span
  m="1885450">neighbors--</span> <span m="1886585">you</span> <span
  m="1886757">know</span> <span m="1886930">that</span> <span
  m="1887020">none</span> <span m="1887110">of</span> <span
  m="1887210">its</span> <span m="1887380">neighbors</span> <span
  m="1887830">are</span> <span m="1887880">going</span> <span
  m="1888150">to</span> <span m="1888250">join</span> <span
  m="1888520">the</span> <span m="1888630">MIS</span> <span
  m="1889130">at</span> <span m="1889430">round</span> <span
  m="1889720">one.</span> <span m="1891200">Because</span> <span
  m="1891400">you</span> <span m="1891500">know</span> <span
  m="1891640">this</span> <span m="1891860">guy's</span> <span
  m="1893270">chosen</span> <span m="1893670">value</span> <span
  m="1894040">is</span> <span m="1894170">larger,</span> <span
  m="1894710">strictly</span> <span m="1895050">larger,</span> <span
  m="1895420">than</span> <span m="1895570">all</span> <span
  m="1895750">its</span> <span m="1895930">neighbors.</span> <span
  m="1896930">But</span> <span m="1897050">now</span> <span
  m="1897140">you</span> <span m="1897280">want</span> <span
  m="1897390">to</span> <span m="1897470">tell</span> <span
  m="1897760">them</span> <span m="1898110">that</span> <span
  m="1898430">they</span> <span m="1898540">should</span> <span
  m="1898810">not</span> <span m="1899130">join.</span> <span
  m="1899450">They</span> <span m="1899530">should</span> <span
  m="1899660">be</span> <span m="1899780">out.</span> <span
  m="1900650">So</span> <span m="1900820">if</span> <span m="1900920">you</span>
  <span m="1901030">join</span> <span m="1901330">the</span> <span
  m="1901460">MIS</span> <span m="1908630">you're</span> <span
  m="1908790">going</span> <span m="1909080">to</span> <span
  m="1909410">announce</span> <span m="1909860">that</span> <span
  m="1911050">by</span> <span m="1911270">sending</span> <span
  m="1911640">messages</span> <span m="1912200">to</span> <span
  m="1912370">all</span> <span m="1912570">your</span> <span
  m="1913170">neighbors.</span> <span m="1914740">And</span> <span
  m="1915260">then</span> <span m="1920010">anybody</span> <span
  m="1920410">who</span> <span m="1920550">receives</span> <span
  m="1921000">an</span> <span m="1921130">announcement</span> <span
  m="1922270">can</span> <span m="1922510">decide</span> <span
  m="1922940">it's</span> <span m="1923090">not</span> <span
  m="1923340">going</span> <span m="1923450">to</span> <span
  m="1923500">be</span> <span m="1923680">in</span> <span m="1923780">the</span>
  <span m="1923900">MIS</span> <span m="1924470">and</span> <span
  m="1924565">it</span> <span m="1924660">outputs</span> <span
  m="1925090">out.</span> <span m="1925470">Because</span> <span
  m="1925800">it</span> <span m="1925930">knows</span> <span
  m="1926060">it</span> <span m="1926140">has</span> <span m="1926290">a</span>
  <span m="1926350">neighbor</span> <span m="1927160">that's</span> <span
  m="1927360">in</span> <span m="1927510">the</span> <span
  m="1927640">MIS.</span></p><p><span m="1930260">So</span> <span
  m="1930630">if</span> <span m="1930830">you</span> <span
  m="1930970">decided</span> <span m="1931620">in</span> <span
  m="1931960">or</span> <span m="1932160">out</span> <span m="1932500">at</span>
  <span m="1932610">this</span> <span m="1932850">phase,</span> <span
  m="1933330">you're</span> <span m="1933520">done.</span> <span
  m="1935050">You</span> <span m="1935080">become</span> <span
  m="1935510">inactive.</span> <span m="1936420">And</span> <span
  m="1936590">only</span> <span m="1936830">the</span> <span
  m="1936940">remaining</span> <span m="1937460">active</span> <span
  m="1937870">guys</span> <span m="1938190">continue</span> <span
  m="1938670">to</span> <span m="1938730">the</span> <span
  m="1938870">next</span> <span m="1939160">phase.</span> <span
  m="1940570">Make</span> <span m="1940750">sense?</span> <span
  m="1944240">any</span> <span m="1944430">questions</span> <span
  m="1944890">about</span> <span m="1945180">how</span> <span
  m="1945350">the</span> <span m="1945480">algorithm</span> <span
  m="1945950">works?</span> <span m="1952480">And</span> <span
  m="1952710">animation.</span> <span m="1954020">All</span> <span
  m="1954110">right</span> <span m="1954360">so</span> <span
  m="1954660">all</span> <span m="1954830">the</span> <span
  m="1954920">nodes</span> <span m="1955200">start</span> <span
  m="1955500">out</span> <span m="1955690">identical.</span> <span
  m="1957770">They</span> <span m="1957880">all</span> <span
  m="1958040">pick</span> <span m="1958780">IDs.</span> <span
  m="1959450">So</span> <span m="1959640">here's</span> <span
  m="1959860">some</span> <span m="1960000">numbers</span> <span
  m="1960360">that</span> <span m="1960500">they</span> <span
  m="1960600">pick.</span> <span m="1960930">So</span> <span
  m="1961090">which</span> <span m="1961290">nodes</span> <span
  m="1961570">are</span> <span m="1961630">going</span> <span
  m="1961960">to</span> <span m="1962740">now</span> <span
  m="1963040">join</span> <span m="1963350">the</span> <span
  m="1963470">MIS?</span> <span m="1965410">16,</span> <span
  m="1966450">and</span> <span m="1967570">the</span> <span
  m="1967790">one</span> <span m="1967830">that</span> <span
  m="1967870">chose</span> <span m="1968180">13.</span> <span
  m="1970480">Good,</span> <span m="1970720">so</span> <span
  m="1970810">they're</span> <span m="1970990">in</span> <span
  m="1971060">the</span> <span m="1971170">MIS.</span> <span
  m="1972230">And</span> <span m="1972460">then</span> <span
  m="1972610">at</span> <span m="1972730">the</span> <span
  m="1972810">same</span> <span m="1973110">phase,</span> <span
  m="1973710">all</span> <span m="1973900">of</span> <span
  m="1974030">their</span> <span m="1974180">neighbors,</span> <span
  m="1975070">those</span> <span m="1975530">for</span> <span
  m="1975800">red</span> <span m="1975980">nodes,</span> <span
  m="1977430">are</span> <span m="1977590">going</span> <span
  m="1977860">to</span> <span m="1978950">decide</span> <span
  m="1979370">to</span> <span m="1979450">be</span> <span m="1979610">out</span>
  <span m="1979930">of</span> <span m="1980070">the</span> <span
  m="1980200">MIS</span> <span m="1982750">And</span> <span
  m="1982930">now</span> <span m="1983050">you're</span> <span
  m="1983210">left</span> <span m="1983480">with</span> <span
  m="1983600">the</span> <span m="1983660">remaining</span> <span
  m="1984100">four</span> <span m="1984350">nodes.</span> <span
  m="1984840">We</span> <span m="1984900">don't</span> <span
  m="1985210">keep</span> <span m="1985550">going</span> <span
  m="1985880">with</span> <span m="1986060">the</span> <span
  m="1986160">same</span> <span m="1986470">IDs.</span> <span
  m="1987290">we</span> <span m="1987430">start</span> <span
  m="1987790">over.</span> <span m="1988140">We</span> <span
  m="1988200">want</span> <span m="1988390">the</span> <span
  m="1988490">rounds</span> <span m="1988870">to</span> <span
  m="1988970">be</span> <span m="1989130">independent.</span></p><p><span
  m="1990840">So</span> <span m="1990990">if</span> <span
  m="1991120">they</span> <span m="1991220">choose</span> <span
  m="1991500">again,</span> <span m="1993030">they</span> <span
  m="1993140">get</span> <span m="1993340">new</span> <span
  m="1993490">IDs.</span> <span m="1994610">And</span> <span
  m="1994800">now</span> <span m="1995730">the</span> <span
  m="1995900">guy</span> <span m="1996080">with</span> <span
  m="1996190">the</span> <span m="1996290">12</span> <span
  m="1997060">and</span> <span m="1997240">the</span> <span
  m="1997310">guy</span> <span m="1997510">with</span> <span
  m="1997670">the</span> <span m="1997810">18</span> <span
  m="1999200">going</span> <span m="1999510">to</span> <span
  m="1999780">join</span> <span m="2000110">the</span> <span
  m="2000440">MIS</span> <span m="2000655">at</span> <span
  m="2000870">this</span> <span m="2001080">phase.</span> <span
  m="2002180">And</span> <span m="2003180">their</span> <span
  m="2003370">neighbors</span> <span m="2004640">will</span> <span
  m="2005290">decide</span> <span m="2005740">not</span> <span
  m="2005990">to</span> <span m="2006080">be</span> <span m="2006240">in</span>
  <span m="2006330">the</span> <span m="2006450">MIS.</span> <span
  m="2007280">That</span> <span m="2007450">leaves</span> <span
  m="2007690">us</span> <span m="2007840">with</span> <span
  m="2008020">just</span> <span m="2008280">one</span> <span
  m="2008510">mode,</span> <span m="2008880">the</span> <span
  m="2008960">guy</span> <span m="2009210">who</span> <span
  m="2009380">had</span> <span m="2009560">four.</span> <span
  m="2010800">Next</span> <span m="2011060">phase,</span> <span
  m="2011320">he</span> <span m="2011430">chooses</span> <span
  m="2011870">another</span> <span m="2012260">ID.</span> <span
  m="2013240">But</span> <span m="2013420">he</span> <span
  m="2013540">has</span> <span m="2013780">no</span> <span
  m="2013930">neighbors</span> <span m="2014720">so</span> <span
  m="2015740">by</span> <span m="2016070">default,</span> <span
  m="2016680">he's</span> <span m="2016890">bigger</span> <span
  m="2017260">than</span> <span m="2017440">all</span> <span
  m="2017620">the</span> <span m="2017770">neighbors.</span> <span
  m="2018110">So</span> <span m="2018210">he</span> <span
  m="2018350">just</span> <span m="2018550">joins</span> <span
  m="2018870">the</span> <span m="2018980">MIS.</span> <span
  m="2022780">So</span> <span m="2022910">that's</span> <span
  m="2023110">how</span> <span m="2023260">this</span> <span
  m="2023450">works.</span> <span m="2023760">Very</span> <span
  m="2023950">simple</span> <span m="2024310">algorithm,</span> <span
  m="2024840">and</span> <span m="2024930">it</span> <span
  m="2025190">actually</span> <span m="2025600">works</span> <span
  m="2026300">to</span> <span m="2026880">find</span> <span
  m="2027210">an</span> <span m="2027290">MIS</span> <span
  m="2027750">very</span> <span m="2027960">quickly.</span></p><p><span
  m="2033380">Why</span> <span m="2033680">does</span> <span
  m="2033850">this</span> <span m="2034040">give</span> <span
  m="2034180">you</span> <span m="2034320">independence?</span> <span
  m="2037150">How</span> <span m="2037280">do</span> <span m="2037360">we</span>
  <span m="2037470">know</span> <span m="2037740">that</span> <span
  m="2038030">if</span> <span m="2039180">this</span> <span
  m="2039350">ever</span> <span m="2039570">terminates,</span> <span
  m="2040310">if</span> <span m="2040480">everybody</span> <span
  m="2040980">decides,</span> <span m="2041550">how</span> <span
  m="2041680">do</span> <span m="2041760">we</span> <span
  m="2041880">know</span> <span m="2042100">that</span> <span
  m="2042250">we</span> <span m="2042380">don't</span> <span
  m="2042720">ever</span> <span m="2042960">have</span> <span
  m="2043160">two</span> <span m="2043330">neighbors</span> <span
  m="2044730">that</span> <span m="2044950">decided</span> <span
  m="2045470">to</span> <span m="2045560">be</span> <span m="2045750">in</span>
  <span m="2045850">the</span> <span m="2045980">MIS?</span> <span
  m="2048440">Yeah.</span></p><p><span m="2049600">AUDIENCE: Because</span>
  <span m="2050095">once</span> <span m="2050218">a</span> <span
  m="2050342">node</span> <span m="2050466">joins</span> <span
  m="2050590">the</span> <span m="2051085">MIS,</span> <span
  m="2051580">it</span> <span m="2052075">broadcasts</span> <span
  m="2052570">to</span> <span m="2052817">its</span> <span
  m="2053065">neighbors</span> <span m="2053560">that--</span></p><p><span
  m="2054550">NANCY LYNCH: Right.</span> <span m="2056630">The</span> <span
  m="2056760">only</span> <span m="2056920">way</span> <span
  m="2057070">you</span> <span m="2057170">join</span> <span
  m="2057489">the</span> <span m="2057620">MIS</span> <span
  m="2058290">is</span> <span m="2058489">if</span> <span m="2058630">you</span>
  <span m="2058750">have</span> <span m="2059010">the</span> <span
  m="2059090">unique</span> <span m="2059409">maximum</span> <span
  m="2059940">value</span> <span m="2060389">in</span> <span
  m="2060480">your</span> <span m="2060600">neighborhood.</span> <span
  m="2061750">And</span> <span m="2062030">when</span> <span
  m="2062170">you</span> <span m="2062300">do,</span> <span
  m="2062520">all</span> <span m="2062630">your</span> <span
  m="2062770">neighbors</span> <span m="2063110">become</span> <span
  m="2063440">inactive.</span> <span m="2065469">So</span> <span
  m="2066139">you're</span> <span m="2066290">certainly</span> <span
  m="2066610">going</span> <span m="2066850">to</span> <span
  m="2066900">have</span> <span m="2067080">independence.</span></p><p><span
  m="2069020">Maximality,</span> <span m="2071100">if</span> <span
  m="2071219">it</span> <span m="2071340">terminates,</span> <span
  m="2071980">the</span> <span m="2072060">final</span> <span
  m="2072449">set</span> <span m="2073199">is</span> <span
  m="2073460">not</span> <span m="2073739">going</span> <span
  m="2074010">to</span> <span m="2074139">allow</span> <span
  m="2074400">you</span> <span m="2074580">to</span> <span
  m="2074699">add</span> <span m="2075050">any</span> <span
  m="2075270">more</span> <span m="2075540">nodes.</span> <span
  m="2077340">Why?</span> <span m="2077659">Because</span> <span
  m="2078050">a</span> <span m="2078120">node</span> <span m="2078550">is</span>
  <span m="2078790">only</span> <span m="2079030">going</span> <span
  m="2079130">to</span> <span m="2079179">become</span> <span
  m="2079610">inactive</span> <span m="2080290">if</span> <span
  m="2080429">it</span> <span m="2080560">joins</span> <span
  m="2081840">the</span> <span m="2082139">MIS,</span> <span
  m="2082989">or</span> <span m="2083139">a</span> <span
  m="2083290">neighbor</span> <span m="2083670">joins</span> <span
  m="2084040">the</span> <span m="2084159">MIS.</span> <span
  m="2085460">And</span> <span m="2085600">we</span> <span
  m="2085679">just</span> <span m="2085850">continue</span> <span
  m="2086290">this</span> <span m="2086469">algorithm</span> <span
  m="2087159">until</span> <span m="2087540">all</span> <span
  m="2087710">the</span> <span m="2087790">nodes</span> <span
  m="2088080">become</span> <span m="2088429">inactive.</span> <span
  m="2091080">So</span> <span m="2091639">either</span> <span
  m="2092150">the</span> <span m="2092280">node</span> <span
  m="2092659">is</span> <span m="2092754">in</span> <span m="2092850">the</span>
  <span m="2092969">MIS</span> <span m="2093429">or</span> <span
  m="2093484">a</span> <span m="2093540">neighbor</span> <span
  m="2093969">is</span> <span m="2094019">in</span> <span m="2094070">the</span>
  <span m="2094179">MIS.</span> <span m="2095010">So</span> <span
  m="2095150">you</span> <span m="2095179">can't</span> <span
  m="2095469">possibly</span> <span m="2095989">add</span> <span
  m="2096219">any</span> <span m="2096371">more.</span> <span
  m="2098170">Yes?</span> <span m="2100350">So</span> <span
  m="2100510">this</span> <span m="2100680">has</span> <span
  m="2100920">the</span> <span m="2101000">basic</span> <span
  m="2101430">correctness</span> <span m="2101970">properties,</span> <span
  m="2103120">but</span> <span m="2103380">what</span> <span
  m="2103530">you're</span> <span m="2103630">probably</span> <span
  m="2103930">wondering,</span> <span m="2104590">is</span> <span
  m="2105420">why</span> <span m="2105720">is</span> <span
  m="2105950">this</span> <span m="2107030">efficient</span> <span
  m="2107610">enough?</span> <span m="2107940">Why</span> <span
  m="2109400">is</span> <span m="2109580">it</span> <span
  m="2109670">efficient?</span> <span m="2110120">Well</span> <span
  m="2111280">we</span> <span m="2111380">could</span> <span
  m="2111530">say</span> <span m="2111760">that</span> <span
  m="2112040">with</span> <span m="2112220">high</span> <span
  m="2112370">probability,</span> <span m="2113060">of</span> <span
  m="2113140">probability</span> <span m="2113560">1,</span> <span
  m="2113850">it</span> <span m="2113930">will</span> <span
  m="2114070">eventually</span> <span m="2114690">terminate.</span> <span
  m="2117590">More</span> <span m="2118620">quantitative,</span> <span
  m="2119900">we</span> <span m="2120090">can</span> <span
  m="2120910">state</span> <span m="2121230">this</span> <span
  m="2121430">theorem</span> <span m="2121770">that</span> <span
  m="2121960">says,</span> <span m="2125020">with</span> <span
  m="2125620">probability</span> <span m="2126310">at</span> <span
  m="2126420">least</span> <span m="2126820">1</span> <span
  m="2127060">minus</span> <span m="2127420">1</span> <span
  m="2127690">over</span> <span m="2128020">n,</span> <span
  m="2128770">all</span> <span m="2129000">the</span> <span
  m="2129110">nodes</span> <span m="2129550">decide</span> <span
  m="2130120">within</span> <span m="2130490">four</span> <span
  m="2130850">log</span> <span m="2130880">n</span> <span
  m="2131510">phases.</span> <span m="2133490">Since</span> <span
  m="2133720">n</span> <span m="2133890">is</span> <span m="2133990">the</span>
  <span m="2134080">number</span> <span m="2134580">of</span> <span
  m="2134770">nodes,</span> <span m="2135330">this</span> <span
  m="2135540">doesn't</span> <span m="2135840">tell</span> <span
  m="2136040">us</span> <span m="2136280">that</span> <span
  m="2136440">you</span> <span m="2136560">get</span> <span
  m="2137240">probability</span> <span m="2137730">1</span> <span
  m="2137970">of</span> <span m="2138060">eventually</span> <span
  m="2138670">terminating.</span> <span m="2139290">But</span> <span
  m="2139430">we</span> <span m="2139540">can</span> <span
  m="2140370">repeat</span> <span m="2140730">this</span> <span
  m="2141030">and</span> <span m="2141560">get</span> <span
  m="2141720">the</span> <span m="2141800">same</span> <span
  m="2142070">sort</span> <span m="2142310">of</span> <span
  m="2143250">bound</span> <span m="2143510">repeatedly</span> <span
  m="2144140">for</span> <span m="2144460">successive</span> <span
  m="2146230">phases.</span></p><p><span m="2147520">But</span> <span
  m="2147670">let's</span> <span m="2147830">just</span> <span
  m="2148020">focus</span> <span m="2148420">on</span> <span
  m="2148600">getting</span> <span m="2148880">probability</span> <span
  m="2149610">at</span> <span m="2149710">least</span> <span
  m="2150070">1</span> <span m="2150270">minus</span> <span m="2150630">1</span>
  <span m="2150860">over</span> <span m="2151110">n</span> <span
  m="2152510">that</span> <span m="2152660">all</span> <span
  m="2152830">nodes</span> <span m="2153170">decide</span> <span
  m="2153760">within</span> <span m="2154270">about</span> <span
  m="2156290">four</span> <span m="2156480">log</span> <span
  m="2156700">n</span> <span m="2156920">phases.</span> <span
  m="2160270">So</span> <span m="2160700">let's</span> <span
  m="2160840">see</span> <span m="2160970">what</span> <span
  m="2161070">this</span> <span m="2161170">is</span> <span
  m="2161260">saying.</span> <span m="2161680">You</span> <span
  m="2161810">have</span> <span m="2162070">this</span> <span
  m="2162410">big</span> <span m="2162660">complicated</span> <span
  m="2163410">graph.</span> <span m="2164580">And</span> <span
  m="2165010">in</span> <span m="2165160">one</span> <span
  m="2165380">round,</span> <span m="2166610">for</span> <span
  m="2166690">this</span> <span m="2166860">to</span> <span
  m="2166960">be</span> <span m="2167460">like</span> <span
  m="2167680">log</span> <span m="2167915">n</span> <span
  m="2168150">behavior,</span> <span m="2168730">what</span> <span
  m="2168920">has</span> <span m="2169160">to</span> <span
  m="2169240">happen</span> <span m="2169620">at</span> <span
  m="2169690">each</span> <span m="2170630">phase?</span> <span
  m="2173740">You</span> <span m="2173780">have</span> <span
  m="2173820">to</span> <span m="2173860">reduce</span> <span
  m="2174270">it</span> <span m="2174380">by</span> <span
  m="2174500">some</span> <span m="2174730">constant</span> <span
  m="2175220">fraction.</span> <span m="2176120">The</span> <span
  m="2176220">number</span> <span m="2176560">of</span> <span
  m="2176650">nodes,</span> <span m="2177040">say,</span> <span
  m="2177400">should</span> <span m="2177640">go</span> <span
  m="2177780">down.</span> <span m="2178650">So</span> <span
  m="2178760">it's</span> <span m="2178930">sort</span> <span
  m="2179160">of</span> <span m="2179250">how</span> <span
  m="2179400">the</span> <span m="2180130">proof</span> <span
  m="2180390">will</span> <span m="2180500">go.</span> <span
  m="2183220">So</span> <span m="2183400">we</span> <span
  m="2183500">start</span> <span m="2183830">out</span> <span
  m="2184030">with</span> <span m="2184150">a</span> <span
  m="2184230">Lemma</span> <span m="2184610">saying,</span> <span
  m="2185310">you're</span> <span m="2185450">choosing</span> <span
  m="2185860">these</span> <span m="2186060">IDs</span> <span
  m="2186490">at</span> <span m="2186600">random.</span> <span
  m="2187660">You</span> <span m="2187840">want</span> <span
  m="2188040">a</span> <span m="2188090">high</span> <span
  m="2188270">probability</span> <span m="2188880">that</span> <span
  m="2189020">they're</span> <span m="2189200">all</span> <span
  m="2189570">different.</span> <span m="2190730">So</span> <span
  m="2190780">we</span> <span m="2190850">have</span> <span m="2190950">a</span>
  <span m="2191000">lemma</span> <span m="2191300">like</span> <span
  m="2191510">the</span> <span m="2191600">one</span> <span
  m="2191780">we</span> <span m="2191890">had</span> <span
  m="2192080">before.</span> <span m="2192500">It</span> <span
  m="2192620">says,</span> <span m="2192830">the</span> <span
  m="2192930">probability</span> <span m="2193770">at</span> <span
  m="2193890">least,</span> <span m="2194910">we</span> <span
  m="2195050">use</span> <span m="2195240">1</span> <span
  m="2195440">minus</span> <span m="2195730">1</span> <span
  m="2195920">over</span> <span m="2196120">n</span> <span
  m="2196230">squared,</span> <span m="2197670">in</span> <span
  m="2197820">each</span> <span m="2198110">phase.</span> <span
  m="2198530">All</span> <span m="2198840">these</span> <span
  m="2199070">phases</span> <span m="2199940">up</span> <span
  m="2200130">to</span> <span m="2200270">four</span> <span
  m="2200510">log</span> <span m="2200710">n,</span> <span
  m="2201310">everybody's</span> <span m="2202030">choosing</span> <span
  m="2202780">a</span> <span m="2202890">different</span> <span
  m="2203270">random</span> <span m="2203630">value.</span> <span
  m="2204650">All</span> <span m="2204790">the</span> <span
  m="2204870">nodes</span> <span m="2205180">choose</span> <span
  m="2205460">different</span> <span m="2205790">values</span> <span
  m="2206240">at</span> <span m="2206320">each</span> <span
  m="2206550">phase.</span></p><p><span m="2208880">So</span> <span
  m="2209050">this</span> <span m="2209260">lets</span> <span
  m="2209500">us</span> <span m="2209640">ignore</span> <span
  m="2210740">the</span> <span m="2210980">possibility</span> <span
  m="2211810">that</span> <span m="2212200">you</span> <span
  m="2212310">have</span> <span m="2212490">repeats.</span> <span
  m="2214000">So</span> <span m="2214260">we'll</span> <span
  m="2214390">come</span> <span m="2214530">back</span> <span
  m="2214750">to</span> <span m="2214840">that</span> <span
  m="2215040">at</span> <span m="2215150">the</span> <span
  m="2215280">end.</span> <span m="2218240">All</span> <span
  m="2218300">right,</span> <span m="2218560">so</span> <span
  m="2218650">we're</span> <span m="2218720">going</span> <span
  m="2218810">to</span> <span m="2218850">pretend</span> <span
  m="2219420">that</span> <span m="2219530">in</span> <span
  m="2219680">each</span> <span m="2220000">phase,</span> <span
  m="2220480">all</span> <span m="2220740">the</span> <span
  m="2220840">random</span> <span m="2221200">numbers</span> <span
  m="2221730">are</span> <span m="2221850">different.</span> <span
  m="2224960">So</span> <span m="2225740">the</span> <span
  m="2225860">key</span> <span m="2226140">idea</span> <span
  m="2226560">of</span> <span m="2226670">this</span> <span
  m="2227520">is</span> <span m="2227730">to</span> <span
  m="2227850">show</span> <span m="2228200">that</span> <span
  m="2228390">the</span> <span m="2228480">graph</span> <span
  m="2228830">has</span> <span m="2229070">to</span> <span
  m="2229170">shrink</span> <span m="2229660">enough</span> <span
  m="2230600">at</span> <span m="2230780">each</span> <span
  m="2231120">phase.</span> <span m="2233420">So</span> <span
  m="2233590">the</span> <span m="2233690">way</span> <span
  m="2233810">we're</span> <span m="2233890">going</span> <span
  m="2233990">to</span> <span m="2234050">say</span> <span
  m="2234270">that</span> <span m="2234460">is</span> <span
  m="2234560">not</span> <span m="2234800">in</span> <span
  m="2234930">terms</span> <span m="2235300">of</span> <span
  m="2235470">the</span> <span m="2235550">nodes,</span> <span
  m="2236920">but</span> <span m="2236970">in</span> <span
  m="2237110">terms</span> <span m="2237500">of</span> <span
  m="2237620">the</span> <span m="2237700">number</span> <span
  m="2238060">of</span> <span m="2238200">edges.</span> <span
  m="2238740">We're</span> <span m="2238840">going</span> <span
  m="2238950">to</span> <span m="2239030">say</span> <span m="2239870">at</span>
  <span m="2240040">each</span> <span m="2240310">phase,</span> <span
  m="2241930">the</span> <span m="2242060">expected</span> <span
  m="2242670">number</span> <span m="2243010">of</span> <span
  m="2243150">edges</span> <span m="2243950">that</span> <span
  m="2244280">are</span> <span m="2244410">live--</span> <span
  m="2245180">why</span> <span m="2245360">is</span> <span
  m="2245505">that</span> <span m="2245650">shaking?</span> <span
  m="2251680">OK.</span></p><p><span m="2252240">The</span> <span
  m="2252350">expected</span> <span m="2252830">number</span> <span
  m="2253110">of</span> <span m="2253260">edges</span> <span
  m="2253630">that</span> <span m="2253760">are</span> <span
  m="2253840">live</span> <span m="2254600">at</span> <span
  m="2254760">the</span> <span m="2254890">end</span> <span
  m="2255080">of</span> <span m="2255180">the</span> <span
  m="2255260">phase</span> <span m="2255750">is</span> <span
  m="2255920">at</span> <span m="2256040">most</span> <span
  m="2256430">half</span> <span m="2257400">the</span> <span
  m="2257510">number</span> <span m="2258300">that</span> <span
  m="2258460">were</span> <span m="2258590">live</span> <span
  m="2258940">at</span> <span m="2259030">the</span> <span
  m="2259100">beginning</span> <span m="2259500">of</span> <span
  m="2259620">the</span> <span m="2259700">phase.</span> <span
  m="2261570">So</span> <span m="2262330">an</span> <span
  m="2262500">edge</span> <span m="2262640">is</span> <span
  m="2262780">live,</span> <span m="2263075">if</span> <span
  m="2263370">its</span> <span m="2263670">endpoints</span> <span
  m="2264180">are</span> <span m="2264270">still</span> <span
  m="2264470">live.</span> <span m="2265410">So</span> <span
  m="2265680">instead</span> <span m="2266040">of</span> <span
  m="2266150">talking</span> <span m="2266680">about</span> <span
  m="2267370">reducing</span> <span m="2268050">the</span> <span
  m="2268120">number</span> <span m="2268360">of</span> <span
  m="2268420">nodes</span> <span m="2268930">by</span> <span
  m="2269035">a</span> <span m="2269140">constant</span> <span
  m="2269620">fraction,</span> <span m="2270020">I'm</span> <span
  m="2270090">going</span> <span m="2270170">to</span> <span
  m="2270270">reduce</span> <span m="2270660">the</span> <span
  m="2270750">number</span> <span m="2271130">of</span> <span
  m="2271210">remaining</span> <span m="2271620">edges</span> <span
  m="2272550">by</span> <span m="2272700">constant</span> <span
  m="2273200">fraction</span> <span m="2273660">of</span> <span
  m="2273750">each</span> <span m="2274020">phase.</span> <span
  m="2276710">So</span> <span m="2276860">this</span> <span
  m="2277050">is</span> <span m="2277170">what</span> <span
  m="2277350">I'm</span> <span m="2277440">going</span> <span
  m="2277770">to</span> <span m="2278030">prove.</span> <span
  m="2278860">So</span> <span m="2279000">now</span> <span
  m="2279150">I've</span> <span m="2279320">got</span> <span
  m="2279960">only</span> <span m="2280290">three</span> <span
  m="2281090">slides,</span> <span m="2281730">but</span> <span
  m="2281770">the</span> <span m="2281870">only</span> <span
  m="2282080">three</span> <span m="2282260">slides</span> <span
  m="2282750">today</span> <span m="2283130">that</span> <span
  m="2283270">have</span> <span m="2283500">calculations</span> <span
  m="2284290">on</span> <span m="2284480">them.</span> <span
  m="2284690">So</span> <span m="2285670">probably</span> <span
  m="2286150">have</span> <span m="2286390">to</span> <span
  m="2286480">pay</span> <span m="2286660">attention,</span> <span
  m="2287300">if</span> <span m="2287420">you</span> <span
  m="2287520">want</span> <span m="2287660">to</span> <span
  m="2287710">follow</span> <span m="2288000">the</span> <span
  m="2288090">calculations</span> <span m="2288880">online.</span> <span
  m="2289320">So</span> <span m="2289510">let's</span> <span
  m="2289730">see</span> <span m="2289850">why.</span></p><p><span
  m="2291390">But</span> <span m="2291530">the</span> <span
  m="2291610">goal</span> <span m="2291870">is</span> <span
  m="2292000">clear?</span> <span m="2292560">We</span> <span
  m="2292690">have</span> <span m="2292880">to</span> <span
  m="2293020">reduce</span> <span m="2293470">the</span> <span
  m="2293570">number</span> <span m="2293890">of</span> <span
  m="2293970">edges</span> <span m="2294570">that</span> <span
  m="2294740">remain</span> <span m="2295250">by</span> <span
  m="2295770">a</span> <span m="2295860">factor</span> <span
  m="2296310">of</span> <span m="2296420">two.</span> <span
  m="2299270">So</span> <span m="2299540">this</span> <span
  m="2299720">is</span> <span m="2299920">actually</span> <span
  m="2300390">a</span> <span m="2300450">new</span> <span
  m="2300680">proof</span> <span m="2301330">of</span> <span
  m="2301570">this</span> <span m="2302810">algorithm's</span> <span
  m="2303470">performance.</span> <span m="2304180">The</span> <span
  m="2304500">proof</span> <span m="2304860">in</span> <span
  m="2304980">the</span> <span m="2305110">original</span> <span
  m="2305530">papers</span> <span m="2306160">is</span> <span
  m="2306320">pretty</span> <span m="2306610">complicated.</span> <span
  m="2308150">This</span> <span m="2308380">is</span> <span m="2308520">a</span>
  <span m="2308770">very</span> <span m="2309110">intuitive,</span> <span
  m="2310040">neat</span> <span m="2310320">proof.</span> <span
  m="2312770">So</span> <span m="2313220">the</span> <span
  m="2313310">first</span> <span m="2313780">line</span> <span
  m="2314120">of</span> <span m="2314190">the</span> <span
  m="2314270">proof</span> <span m="2314600">says</span> <span
  m="2315020">if</span> <span m="2315200">you</span> <span
  m="2315330">have</span> <span m="2315610">a</span> <span
  m="2315670">node</span> <span m="2316840">that</span> <span
  m="2316980">has</span> <span m="2317240">a</span> <span
  m="2317300">neighbor</span> <span m="2318700">that</span> <span
  m="2318820">chooses</span> <span m="2319270">a</span> <span
  m="2319320">value</span> <span m="2319990">that's</span> <span
  m="2321230">bigger</span> <span m="2321470">than</span> <span
  m="2321690">all</span> <span m="2321860">of</span> <span
  m="2321980">its</span> <span m="2322140">own</span> <span
  m="2322340">neighbors--</span> <span m="2323200">so</span> <span
  m="2323510">u</span> <span m="2323760">has</span> <span m="2323910">a</span>
  <span m="2323970">neighbor</span> <span m="2324240">w.</span> <span
  m="2325006">W</span> <span m="2325390">chooses</span> <span
  m="2325710">a</span> <span m="2325750">value</span> <span
  m="2326130">that's</span> <span m="2326340">bigger</span> <span
  m="2326620">than</span> <span m="2326780">all</span> <span
  m="2327040">w's</span> <span m="2327540">neighbors.</span> <span
  m="2328760">But</span> <span m="2328900">let's</span> <span
  m="2329110">say</span> <span m="2329220">more.</span> <span
  m="2329640">Let's</span> <span m="2329830">say</span> <span
  m="2329990">it's</span> <span m="2330150">also</span> <span
  m="2330860">bigger</span> <span m="2331200">than</span> <span
  m="2331380">all</span> <span m="2331570">of</span> <span
  m="2331680">u's</span> <span m="2332330">other</span> <span
  m="2332650">neighbors,</span> <span m="2333220">besides</span> <span
  m="2333910">w.</span> <span m="2335670">So</span> <span m="2335820">w</span>
  <span m="2336380">is</span> <span m="2337280">really</span> <span
  m="2337550">big,</span> <span m="2337900">bigger</span> <span
  m="2338150">than</span> <span m="2338310">all</span> <span
  m="2338560">w's</span> <span m="2338960">neighbors,</span> <span
  m="2339270">bigger</span> <span m="2339530">than</span> <span
  m="2339680">all</span> <span m="2339840">of</span> <span
  m="2339950">u's</span> <span m="2340270">other</span> <span
  m="2340530">neighbors.</span> <span m="2342960">If</span> <span
  m="2343300">that</span> <span m="2343510">happens,</span> <span
  m="2345140">then</span> <span m="2346620">what</span> <span
  m="2346820">happens</span> <span m="2347180">to</span> <span
  m="2347250">u?</span> <span m="2348240">Well</span> <span
  m="2348320">we</span> <span m="2348400">know</span> <span
  m="2348520">that</span> <span m="2348650">w</span> <span m="2348805">is</span>
  <span m="2349270">going</span> <span m="2349570">to</span> <span
  m="2349710">decide</span> <span m="2350170">to</span> <span
  m="2350310">join</span> <span m="2350650">the</span> <span
  m="2350760">MIS.</span> <span m="2352160">And</span> <span
  m="2352300">u</span> <span m="2354030">is</span> <span
  m="2354190">going</span> <span m="2354510">to</span> <span
  m="2354660">definitely</span> <span m="2355860">die,</span> <span
  m="2356260">is</span> <span m="2356450">not</span> <span
  m="2356740">going</span> <span m="2356870">to</span> <span
  m="2356930">join</span> <span m="2357170">the</span> <span
  m="2357290">MIS.</span> <span m="2358230">Right?</span></p><p><span
  m="2360620">OK?</span> <span m="2361060">I</span> <span
  m="2361110">don't</span> <span m="2361205">want</span> <span
  m="2361300">to</span> <span m="2361540">lose</span> <span
  m="2361840">people</span> <span m="2362090">in</span> <span
  m="2362140">the</span> <span m="2362220">first</span> <span
  m="2362490">line.</span> <span m="2363920">Question?</span> <span
  m="2366310">Here's</span> <span m="2366490">a</span> <span
  m="2366550">picture.</span> <span m="2367890">Here's</span> <span
  m="2368010">u.</span> <span m="2371870">And</span> <span m="2372130">it</span>
  <span m="2372170">has</span> <span m="2372420">a</span> <span
  m="2372480">neighbor</span> <span m="2372820">w.</span> <span
  m="2374800">And</span> <span m="2375230">let's</span> <span
  m="2375450">say</span> <span m="2375640">that</span> <span
  m="2375840">w's</span> <span m="2377790">chosen</span> <span
  m="2378330">value</span> <span m="2379350">is</span> <span
  m="2379670">greater</span> <span m="2380380">than</span> <span
  m="2380580">all</span> <span m="2380780">of</span> <span
  m="2380910">w's</span> <span m="2381360">neighbors,</span> <span
  m="2381810">but</span> <span m="2381950">also</span> <span
  m="2382290">greater</span> <span m="2382640">than</span> <span
  m="2382840">all</span> <span m="2383090">of</span> <span
  m="2383240">u's</span> <span m="2384240">other</span> <span
  m="2384470">neighbors.</span> <span m="2387510">Yes?</span> <span
  m="2389650">If</span> <span m="2389870">w</span> <span m="2390150">has</span>
  <span m="2390440">that,</span> <span m="2390640">w</span> <span
  m="2390910">is</span> <span m="2391020">going</span> <span
  m="2391270">to</span> <span m="2391390">join</span> <span
  m="2391730">the</span> <span m="2391890">MIS,</span> <span
  m="2393160">and</span> <span m="2393380">u</span> <span m="2393650">is</span>
  <span m="2393800">going</span> <span m="2394120">to</span> <span
  m="2394400">definitely</span> <span m="2394980">not</span> <span
  m="2395500">join</span> <span m="2395780">the</span> <span
  m="2395920">MIS.</span> <span m="2396480">It's</span> <span
  m="2396640">going</span> <span m="2396890">to</span> <span
  m="2397010">decide</span> <span m="2397510">out</span> <span
  m="2398000">in</span> <span m="2398150">this</span> <span
  m="2398350">phase.</span> <span m="2400470">OK</span> <span
  m="2400650">so</span> <span m="2400830">far?</span></p><p><span
  m="2402076">AUDIENCE: Why</span> <span m="2402504">does</span> <span
  m="2402611">you</span> <span m="2402718">need</span> <span
  m="2403790">w</span> <span m="2404390">to</span> <span m="2404630">have</span>
  <span m="2404870">value</span> <span m="2405350">greater</span> <span
  m="2405830">than</span> <span m="2406310">u's</span> <span
  m="2406790">neighbors?</span> <span m="2407750">Because</span> <span
  m="2408230">if</span> <span m="2408470">w</span> <span m="2408710">is</span>
  <span m="2408870">greater</span> <span m="2409030">than</span> <span
  m="2409190">all</span> <span m="2409670">of</span> <span
  m="2409830">its</span> <span m="2409990">neighbors</span> <span
  m="2410150">then</span> <span m="2410390">it's--</span></p><p><span
  m="2410630">NANCY LYNCH: --be</span> <span m="2410733">in</span> <span
  m="2410836">the</span> <span m="2410940">MIS</span> <span
  m="2411420">and</span> <span m="2411560">u</span> <span
  m="2411720">will</span> <span m="2412060">not</span> <span
  m="2412400">be</span> <span m="2412510">in</span> <span m="2412590">the</span>
  <span m="2412690">MIS.</span> <span m="2413630">And</span> <span
  m="2414030">that</span> <span m="2414240">seems</span> <span
  m="2414430">like</span> <span m="2414560">it</span> <span
  m="2414650">ought</span> <span m="2414750">to</span> <span
  m="2414800">be</span> <span m="2414920">enough.</span> <span
  m="2415900">But</span> <span m="2416110">look</span> <span
  m="2416230">at</span> <span m="2416300">the</span> <span
  m="2416380">next</span> <span m="2416630">line.</span> <span
  m="2419240">Well</span> <span m="2419740">the</span> <span
  m="2419830">line</span> <span m="2420020">after</span> <span
  m="2420240">this</span> <span m="2420450">one.</span> <span
  m="2421510">What's</span> <span m="2421740">the</span> <span
  m="2421840">probability</span> <span m="2422720">that</span> <span
  m="2422940">w</span> <span m="2423360">chooses</span> <span
  m="2423850">a</span> <span m="2423910">value</span> <span
  m="2424360">like</span> <span m="2424620">that?</span> <span
  m="2428080">So</span> <span m="2428310">if</span> <span
  m="2428425">it's</span> <span m="2428540">going</span> <span
  m="2428780">to</span> <span m="2428880">be</span> <span
  m="2429020">bigger</span> <span m="2429650">than</span> <span
  m="2429800">all</span> <span m="2430270">u's</span> <span
  m="2430640">neighbors,</span> <span m="2431190">and</span> <span
  m="2431350">all</span> <span m="2431570">of</span> <span
  m="2431680">w's</span> <span m="2432180">neighbors,</span> <span
  m="2432670">and</span> <span m="2432850">keeping</span> <span
  m="2433100">in</span> <span m="2433180">mind</span> <span
  m="2433450">that</span> <span m="2433600">they</span> <span
  m="2433770">are</span> <span m="2433970">each</span> <span
  m="2434120">other's</span> <span m="2434380">neighbors,</span> <span
  m="2435320">turns</span> <span m="2435640">out</span> <span
  m="2435870">that</span> <span m="2436030">there</span> <span
  m="2436290">is</span> <span m="2436940">degree</span> <span
  m="2437460">u,</span> <span m="2437920">at</span> <span
  m="2438030">most</span> <span m="2438270">degree</span> <span
  m="2438640">u</span> <span m="2438800">plus</span> <span
  m="2439130">degree</span> <span m="2439500">w</span> <span
  m="2440680">nodes</span> <span m="2441010">involved</span> <span
  m="2441500">here.</span> <span m="2443410">W</span> <span
  m="2443710">has</span> <span m="2443900">to</span> <span
  m="2443990">have</span> <span m="2444100">the</span> <span
  m="2444180">biggest</span> <span m="2444570">of</span> <span
  m="2444680">all</span> <span m="2444820">of</span> <span
  m="2444920">those,</span> <span m="2445790">so</span> <span
  m="2446020">it's</span> <span m="2446200">going</span> <span
  m="2446460">to</span> <span m="2446540">have</span> <span
  m="2446790">the</span> <span m="2448160">probability</span> <span
  m="2448810">1</span> <span m="2449140">over</span> <span
  m="2449560">the</span> <span m="2449680">number</span> <span
  m="2449980">of</span> <span m="2450050">nodes</span> <span
  m="2450440">of</span> <span m="2450520">being</span> <span
  m="2450700">the</span> <span m="2450760">biggest</span> <span
  m="2451090">one.</span> <span m="2453060">So</span> <span
  m="2453220">it's</span> <span m="2453310">just</span> <span
  m="2453480">1</span> <span m="2453770">over</span> <span
  m="2454500">the</span> <span m="2454590">degree</span> <span
  m="2454980">of</span> <span m="2455220">u</span> <span m="2455540">plus</span>
  <span m="2455860">the</span> <span m="2455940">degree</span> <span
  m="2456490">of</span> <span m="2456590">w,</span> <span m="2458440">the</span>
  <span m="2458530">probability</span> <span m="2459180">that</span> <span
  m="2459450">w</span> <span m="2459800">will</span> <span
  m="2460010">choose</span> <span m="2460500">a</span> <span
  m="2460560">big</span> <span m="2460740">enough</span> <span
  m="2460960">value.</span></p><p><span m="2466580">But</span> <span
  m="2466970">you</span> <span m="2467150">ask,</span> <span
  m="2468350">this</span> <span m="2468550">is</span> <span
  m="2468670">pessimistic.</span> <span m="2469400">Why</span> <span
  m="2469560">don't</span> <span m="2469750">I</span> <span
  m="2469840">just</span> <span m="2470180">say</span> <span
  m="2470410">that</span> <span m="2470570">w</span> <span m="2470825">is</span>
  <span m="2471080">bigger</span> <span m="2471340">than</span> <span
  m="2471520">its</span> <span m="2471680">own</span> <span
  m="2471930">values?</span> <span m="2473950">Because</span> <span
  m="2474180">I</span> <span m="2474230">want</span> <span m="2474420">to</span>
  <span m="2474480">do</span> <span m="2474590">this</span> <span
  m="2474820">next</span> <span m="2475060">step.</span> <span
  m="2475490">I</span> <span m="2475550">want</span> <span m="2475720">to</span>
  <span m="2475790">say</span> <span m="2476010">the</span> <span
  m="2476160">probability</span> <span m="2476950">that</span> <span
  m="2477200">node</span> <span m="2477510">u</span> <span
  m="2477780">gets</span> <span m="2478160">killed</span> <span
  m="2479180">by</span> <span m="2480090">one</span> <span m="2480330">of</span>
  <span m="2480420">its</span> <span m="2480580">neighbors,</span> <span
  m="2481110">any</span> <span m="2481330">one</span> <span
  m="2481510">of</span> <span m="2481600">its</span> <span
  m="2481760">neighbors</span> <span m="2483080">in</span> <span
  m="2483230">this</span> <span m="2483470">phase.</span> <span
  m="2484730">I</span> <span m="2484850">can</span> <span
  m="2485020">calculate</span> <span m="2485620">that</span> <span
  m="2485900">as</span> <span m="2486110">the</span> <span
  m="2486210">sum.</span> <span m="2489540">The</span> <span
  m="2489660">probability</span> <span m="2490340">that</span> <span
  m="2490520">node</span> <span m="2490740">u</span> <span m="2491030">is</span>
  <span m="2491210">killed</span> <span m="2491570">by</span> <span
  m="2491720">a</span> <span m="2491790">neighbor</span> <span
  m="2492220">is</span> <span m="2492350">at</span> <span
  m="2492450">least</span> <span m="2492800">the</span> <span
  m="2492950">sum</span> <span m="2494190">over</span> <span
  m="2494510">all</span> <span m="2494750">of</span> <span
  m="2494870">its</span> <span m="2495070">neighbors.</span> <span
  m="2495520">You</span> <span m="2495970">look</span> <span
  m="2496160">at</span> <span m="2496240">all</span> <span
  m="2498830">the</span> <span m="2498980">vertices</span> <span
  m="2499235">in</span> <span m="2499362">the</span> <span
  m="2499490">neighbor</span> <span m="2499930">set,</span> <span
  m="2500240">and</span> <span m="2500360">you</span> <span
  m="2500470">add</span> <span m="2500740">up</span> <span
  m="2500930">this</span> <span m="2501270">fraction.</span></p><p><span
  m="2503990">So</span> <span m="2504600">why</span> <span
  m="2504890">did</span> <span m="2505060">I</span> <span
  m="2505120">need</span> <span m="2505470">to</span> <span
  m="2506590">make</span> <span m="2506790">that</span> <span
  m="2506950">additional</span> <span m="2507480">assumption</span> <span
  m="2508040">before?</span> <span m="2509090">That</span> <span
  m="2509740">w</span> <span m="2510080">is</span> <span
  m="2510220">greater</span> <span m="2510530">than</span> <span
  m="2510720">all</span> <span m="2510970">of</span> <span
  m="2511170">u's</span> <span m="2511470">neighbors,</span> <span
  m="2511850">as</span> <span m="2511970">well</span> <span
  m="2512420">as</span> <span m="2512610">all</span> <span m="2512790">of</span>
  <span m="2512910">its</span> <span m="2513060">own</span> <span
  m="2513240">neighbors.</span> <span m="2514390">Yeah?</span></p><p><span
  m="2515078">AUDIENCE: So</span> <span m="2515536">you</span> <span
  m="2515688">can</span> <span m="2515841">add</span> <span m="2515994">a</span>
  <span m="2516146">problem</span> <span m="2516299">to--</span></p><p><span
  m="2516910">NANCY LYNCH: Yeah</span> <span m="2517340">because</span> <span
  m="2517480">otherwise</span> <span m="2518100">these</span> <span
  m="2518300">would</span> <span m="2519200">be</span> <span
  m="2519350">overlapping</span> <span m="2519940">events.</span> <span
  m="2520840">But</span> <span m="2521020">this</span> <span
  m="2521190">way</span> <span m="2521340">I</span> <span
  m="2521380">know</span> <span m="2521530">they're</span> <span
  m="2521650">definitely</span> <span m="2522160">disjoint</span> <span
  m="2522690">events.</span> <span m="2523260">We</span> <span
  m="2523360">can't</span> <span m="2523510">have--</span> <span
  m="2524090">if</span> <span m="2524180">we</span> <span
  m="2524270">have</span> <span m="2524380">w</span> <span
  m="2524740">and</span> <span m="2524830">w</span> <span
  m="2525120">prime,</span> <span m="2527150">you</span> <span
  m="2527220">can't</span> <span m="2527390">have</span> <span
  m="2527490">both</span> <span m="2527750">of</span> <span
  m="2527870">those</span> <span m="2528100">holding</span> <span
  m="2528490">because</span> <span m="2529560">the</span> <span
  m="2529700">requirement</span> <span m="2530790">for</span> <span
  m="2530970">w</span> <span m="2531410">is</span> <span
  m="2531530">saying</span> <span m="2531830">that</span> <span
  m="2532010">its</span> <span m="2532190">ID</span> <span m="2532470">is</span>
  <span m="2532590">bigger</span> <span m="2532890">than</span> <span
  m="2533640">w</span> <span m="2534110">prime's</span> <span
  m="2534390">ID.</span> <span m="2536540">Because</span> <span
  m="2536960">you</span> <span m="2537100">have</span> <span
  m="2537370">these</span> <span m="2537900">disjoint</span> <span
  m="2538380">events,</span> <span m="2538790">you</span> <span
  m="2538890">can</span> <span m="2539040">just</span> <span
  m="2539290">add</span> <span m="2539650">the</span> <span
  m="2539730">probabilities.</span> <span m="2541140">And</span> <span
  m="2541310">you</span> <span m="2541400">know</span> <span
  m="2541570">that</span> <span m="2541675">the</span> <span
  m="2541780">probability</span> <span m="2542520">that</span> <span
  m="2542740">u</span> <span m="2543360">gets</span> <span
  m="2543670">killed</span> <span m="2544140">by</span> <span
  m="2544300">some</span> <span m="2544650">neighbor</span> <span
  m="2545460">is</span> <span m="2545680">at</span> <span
  m="2545800">least</span> <span m="2546380">this</span> <span
  m="2546950">summation.</span> <span m="2548130">OK</span> <span
  m="2548400">so</span> <span m="2548580">far?</span></p><p><span
  m="2549700">So</span> <span m="2549820">now</span> <span
  m="2549970">I'm</span> <span m="2550050">going</span> <span
  m="2550160">to</span> <span m="2550450">calculate.</span> <span
  m="2553260">But</span> <span m="2553380">I</span> <span
  m="2553420">wanted</span> <span m="2553680">to</span> <span
  m="2553750">focus</span> <span m="2554140">on</span> <span
  m="2554260">the</span> <span m="2554390">edges.</span> <span
  m="2554870">So</span> <span m="2554960">let's</span> <span
  m="2555230">see,</span> <span m="2556100">this</span> <span
  m="2556550">tells</span> <span m="2556850">us</span> <span
  m="2557070">a</span> <span m="2557150">way</span> <span
  m="2557400">that</span> <span m="2557600">a</span> <span
  m="2557670">node</span> <span m="2557950">can</span> <span
  m="2558100">get</span> <span m="2558290">killed.</span> <span
  m="2558560">But</span> <span m="2558680">let's</span> <span
  m="2558920">look</span> <span m="2559110">at</span> <span
  m="2559290">what</span> <span m="2559410">happens</span> <span
  m="2560210">for</span> <span m="2560330">an</span> <span
  m="2560450">edge</span> <span m="2560740">getting</span> <span
  m="2561030">killed.</span> <span m="2562990">This</span> <span
  m="2563090">is</span> <span m="2563120">the</span> <span
  m="2563200">probability</span> <span m="2565160">that</span> <span
  m="2565650">a</span> <span m="2565740">node</span> <span m="2566110">is</span>
  <span m="2566320">killed.</span> <span m="2568230">So</span> <span
  m="2568360">the</span> <span m="2568470">probability</span> <span
  m="2569280">that</span> <span m="2569480">an</span> <span
  m="2569660">edge</span> <span m="2570050">dies</span> <span
  m="2571380">at</span> <span m="2571560">this</span> <span
  m="2571790">phase</span> <span m="2573070">is</span> <span
  m="2573750">at</span> <span m="2573900">least</span> <span
  m="2574670">the</span> <span m="2574770">maximum</span> <span
  m="2575320">of</span> <span m="2575400">the</span> <span
  m="2575480">probability</span> <span m="2576180">that</span> <span
  m="2577170">either</span> <span m="2577490">of</span> <span
  m="2577560">its</span> <span m="2577910">two</span> <span
  m="2581350">endpoints</span> <span m="2581920">die.</span> <span
  m="2582820">And</span> <span m="2583140">let's</span> <span
  m="2583310">just</span> <span m="2583470">write</span> <span
  m="2583640">it</span> <span m="2583780">as</span> <span m="2583840">the</span>
  <span m="2583900">average.</span> <span m="2584390">The</span> <span
  m="2584490">probability</span> <span m="2585230">that</span> <span
  m="2585480">an</span> <span m="2585640">edge</span> <span
  m="2585950">dies</span> <span m="2586790">is</span> <span
  m="2586970">at</span> <span m="2587070">least</span> <span
  m="2587410">the</span> <span m="2587550">average</span> <span
  m="2587885">of</span> <span m="2588220">the</span> <span
  m="2588350">probability</span> <span m="2589050">that</span> <span
  m="2589210">it's</span> <span m="2589430">two</span> <span
  m="2589600">endpoints</span> <span m="2590310">are</span> <span
  m="2590710">killed,</span> <span m="2591150">in</span> <span
  m="2591320">this</span> <span m="2591500">way.</span> <span
  m="2595200">So</span> <span m="2595380">for</span> <span m="2595560">an</span>
  <span m="2595640">edge,</span> <span m="2596620">an</span> <span
  m="2596750">edge</span> <span m="2596940">is</span> <span
  m="2597040">definitely</span> <span m="2597390">going</span> <span
  m="2597600">to</span> <span m="2597680">die,</span> <span
  m="2598010">if</span> <span m="2598170">one</span> <span m="2598330">of</span>
  <span m="2598410">its</span> <span m="2598540">endpoints</span> <span
  m="2599090">dies.</span> <span m="2600380">And</span> <span
  m="2600580">then</span> <span m="2600780">the</span> <span
  m="2600940">edge</span> <span m="2601150">dies</span> <span
  m="2601530">if</span> <span m="2601620">it</span> <span
  m="2601730">dies</span> <span m="2602000">in</span> <span
  m="2602120">this</span> <span m="2602270">particular</span> <span
  m="2602830">way.</span></p><p><span m="2606110">So</span> <span
  m="2606250">the</span> <span m="2606340">probability</span> <span
  m="2606970">an</span> <span m="2607070">edge</span> <span
  m="2607330">dies</span> <span m="2607670">is</span> <span
  m="2607790">at</span> <span m="2607900">least</span> <span
  m="2608280">the</span> <span m="2608370">probability</span> <span
  m="2609050">that</span> <span m="2609200">one</span> <span
  m="2609380">of</span> <span m="2609480">the--</span> <span
  m="2610390">half</span> <span m="2610800">the</span> <span
  m="2610910">sum</span> <span m="2611300">of</span> <span
  m="2611430">the</span> <span m="2611520">probabilities</span> <span
  m="2612390">that</span> <span m="2612640">the</span> <span
  m="2612760">two</span> <span m="2612960">end</span> <span
  m="2613130">points</span> <span m="2614460">die.</span> <span
  m="2616130">It's</span> <span m="2616215">the</span> <span
  m="2616300">average</span> <span m="2616700">probability.</span> <span
  m="2618490">Makes</span> <span m="2619170">sense?</span> <span
  m="2619950">You</span> <span m="2620030">might</span> <span
  m="2620150">have</span> <span m="2620230">to</span> <span
  m="2620340">read</span> <span m="2620510">this</span> <span
  m="2620710">later.</span> <span m="2622740">So</span> <span
  m="2622890">now</span> <span m="2623040">we</span> <span
  m="2623140">can</span> <span m="2623290">go</span> <span
  m="2623460">from</span> <span m="2623670">that</span> <span
  m="2623940">to</span> <span m="2624180">the</span> <span
  m="2624380">expected</span> <span m="2625020">number</span> <span
  m="2625360">of</span> <span m="2625430">edges</span> <span
  m="2625770">that</span> <span m="2625900">die.</span> <span
  m="2627910">What</span> <span m="2628060">is</span> <span
  m="2628160">that?</span> <span m="2628350">You</span> <span
  m="2628450">just</span> <span m="2628680">add</span> <span
  m="2628970">up,</span> <span m="2629200">over</span> <span
  m="2629520">all,</span> <span m="2629690">the</span> <span
  m="2629830">edges,</span> <span m="2630260">the</span> <span
  m="2630350">probability</span> <span m="2631110">that</span> <span
  m="2631290">the</span> <span m="2631440">edge</span> <span
  m="2631690">dies.</span> <span m="2633250">The</span> <span
  m="2633310">expected</span> <span m="2633840">number</span> <span
  m="2634180">of</span> <span m="2634260">edges</span> <span
  m="2634640">that</span> <span m="2634790">die</span> <span
  m="2635710">is</span> <span m="2635920">at</span> <span
  m="2636020">least</span> <span m="2637030">the</span> <span
  m="2637240">sum</span> <span m="2637800">over</span> <span
  m="2638150">all</span> <span m="2638320">of</span> <span
  m="2638440">the</span> <span m="2638590">edges</span> <span
  m="2639960">of</span> <span m="2640100">the</span> <span
  m="2640180">probability</span> <span m="2640910">that</span> <span
  m="2641710">the</span> <span m="2641930">two</span> <span
  m="2642160">endpoints</span> <span m="2642750">die.</span> <span
  m="2649040">So</span> <span m="2649170">you</span> <span
  m="2649300">have</span> <span m="2649560">the</span> <span
  m="2650040">sum,</span> <span m="2650940">over</span> <span
  m="2651250">all</span> <span m="2651470">of</span> <span
  m="2651590">the</span> <span m="2651730">edges.</span> <span
  m="2652170">You</span> <span m="2652290">add</span> <span
  m="2652540">up</span> <span m="2652700">for</span> <span
  m="2652870">all</span> <span m="2653010">the</span> <span
  m="2653150">edges.</span> <span m="2653570">The</span> <span
  m="2653660">probability</span> <span m="2654270">that</span> <span
  m="2654410">one</span> <span m="2654630">endpoint</span> <span
  m="2655560">is</span> <span m="2655750">killed,</span> <span
  m="2656300">and</span> <span m="2656880">the</span> <span
  m="2656990">probability</span> <span m="2657520">the</span> <span
  m="2657670">other</span> <span m="2657910">endpoint</span> <span
  m="2658180">is</span> <span m="2658450">killed.</span></p><p><span
  m="2660360">So</span> <span m="2660440">what</span> <span
  m="2660570">we</span> <span m="2660680">have</span> <span
  m="2660910">is</span> <span m="2661020">this</span> <span
  m="2661190">great</span> <span m="2661420">big</span> <span
  m="2661600">summation</span> <span m="2662240">involving</span> <span
  m="2662870">now</span> <span m="2663420">the</span> <span
  m="2663510">kill</span> <span m="2663760">probabilities</span> <span
  m="2664800">for</span> <span m="2665390">vertices.</span> <span
  m="2666810">So</span> <span m="2666960">we</span> <span
  m="2667023">have</span> <span m="2667086">the</span> <span
  m="2667150">kill</span> <span m="2667350">probability</span> <span
  m="2668030">for</span> <span m="2668260">each</span> <span
  m="2668500">vertex.</span> <span m="2669050">How</span> <span
  m="2669210">many</span> <span m="2669430">times</span> <span
  m="2670070">does</span> <span m="2670260">that</span> <span
  m="2670450">occur?</span> <span m="2672360">If</span> <span
  m="2672430">you</span> <span m="2672520">have</span> <span
  m="2673060">a</span> <span m="2673140">vertex,</span> <span
  m="2673730">u,</span> <span m="2675730">it</span> <span
  m="2675940">appears</span> <span m="2676340">once</span> <span
  m="2676740">for</span> <span m="2676870">every</span> <span
  m="2677300">edge</span> <span m="2678100">that</span> <span
  m="2678340">u</span> <span m="2678670">is</span> <span m="2678910">an</span>
  <span m="2679010">endpoint</span> <span m="2679450">of.</span> <span
  m="2683200">So</span> <span m="2683670">you</span> <span
  m="2684070">have</span> <span m="2684220">the</span> <span
  m="2684320">kill</span> <span m="2684550">probability</span> <span
  m="2685240">for</span> <span m="2685420">each</span> <span
  m="2686090">node</span> <span m="2686480">occurring</span> <span
  m="2687000">exactly</span> <span m="2687610">it's</span> <span
  m="2687850">degree</span> <span m="2688470">number</span> <span
  m="2688810">of</span> <span m="2688940">times.</span> <span
  m="2690500">So</span> <span m="2690650">that</span> <span
  m="2690860">lets</span> <span m="2691400">me</span> <span
  m="2691550">rewrite</span> <span m="2692190">this</span> <span
  m="2692430">in</span> <span m="2692550">terms</span> <span
  m="2692870">of</span> <span m="2692980">vertices.</span> <span
  m="2693580">This</span> <span m="2693810">sum</span> <span
  m="2694570">is</span> <span m="2694780">just</span> <span
  m="2695100">1/2</span> <span m="2696390">the</span> <span
  m="2696510">sum</span> <span m="2696940">over</span> <span
  m="2697260">all</span> <span m="2697480">the</span> <span
  m="2697590">nodes</span> <span m="2698420">of</span> <span
  m="2698570">the</span> <span m="2698650">probability</span> <span
  m="2699490">that</span> <span m="2699660">the</span> <span
  m="2699740">node</span> <span m="2700020">gets</span> <span
  m="2700340">killed</span> <span m="2701110">times</span> <span
  m="2701740">its</span> <span m="2702150">degree.</span></p><p><span
  m="2705200">So</span> <span m="2705330">I'm</span> <span
  m="2705460">calculating</span> <span m="2706260">by</span> <span
  m="2707210">replacing</span> <span m="2708740">the</span> <span
  m="2708850">description</span> <span m="2709370">in</span> <span
  m="2709470">terms</span> <span m="2709820">of</span> <span
  m="2709910">edges,</span> <span m="2710380">by</span> <span
  m="2710540">description</span> <span m="2711100">in</span> <span
  m="2711210">terms</span> <span m="2711510">of</span> <span
  m="2711580">vertices.</span> <span m="2713150">More</span> <span
  m="2713405">or</span> <span m="2713532">less</span> <span
  m="2713660">OK</span> <span m="2713970">so</span> <span
  m="2714180">far?</span> <span m="2716780">So</span> <span
  m="2716910">now</span> <span m="2717040">what</span> <span
  m="2717480">do</span> <span m="2717570">I</span> <span m="2717650">do?</span>
  <span m="2718000">Well,</span> <span m="2718200">I</span> <span
  m="2718300">know</span> <span m="2718480">the</span> <span
  m="2718630">probability</span> <span m="2719400">that</span> <span
  m="2719600">u</span> <span m="2719830">is</span> <span
  m="2720030">killed.</span> <span m="2721040">I</span> <span
  m="2721190">have</span> <span m="2721390">a</span> <span
  m="2721440">bound</span> <span m="2721790">for</span> <span
  m="2721920">that</span> <span m="2722830">up</span> <span
  m="2722970">on</span> <span m="2723060">the</span> <span
  m="2723140">first</span> <span m="2723460">line.</span> <span
  m="2723900">So</span> <span m="2723930">I'm</span> <span
  m="2724030">just</span> <span m="2724230">going</span> <span
  m="2724350">to</span> <span m="2724410">plug</span> <span
  m="2724660">that</span> <span m="2724850">in.</span> <span
  m="2726960">So</span> <span m="2727010">I</span> <span m="2727070">get</span>
  <span m="2727280">1/2</span> <span m="2727810">the</span> <span
  m="2727900">sum</span> <span m="2728400">over</span> <span
  m="2728740">all</span> <span m="2728930">the</span> <span
  m="2729020">nodes,</span> <span m="2729460">the</span> <span
  m="2729560">degree</span> <span m="2729930">of</span> <span
  m="2730040">the</span> <span m="2730110">node</span> <span
  m="2730850">times</span> <span m="2734230">this</span> <span
  m="2734610">summation</span> <span m="2735760">that</span> <span
  m="2735940">gives</span> <span m="2736190">me</span> <span
  m="2736320">the</span> <span m="2736420">kill</span> <span
  m="2736640">probability</span> <span m="2737310">for</span> <span
  m="2737450">that</span> <span m="2737710">node.</span> <span
  m="2739140">And</span> <span m="2739250">now</span> <span m="2739370">I</span>
  <span m="2739450">play</span> <span m="2739680">around</span> <span
  m="2740000">with</span> <span m="2740150">the</span> <span
  m="2740220">sum.</span> <span m="2740550">I</span> <span
  m="2740610">can</span> <span m="2740790">move</span> <span
  m="2740990">the</span> <span m="2741100">degree</span> <span
  m="2742100">inside</span> <span m="2743240">the</span> <span
  m="2743330">second</span> <span m="2743730">summation,</span> <span
  m="2745170">and</span> <span m="2745400">I</span> <span m="2745460">get</span>
  <span m="2745710">this.</span></p><p><span m="2748360">So</span> <span
  m="2748490">now</span> <span m="2748650">let's</span> <span
  m="2748870">stare</span> <span m="2749130">at</span> <span
  m="2749230">this</span> <span m="2749410">again.</span> <span
  m="2749750">I</span> <span m="2749890">have</span> <span
  m="2750840">the</span> <span m="2750940">sum</span> <span
  m="2751280">over</span> <span m="2751580">all</span> <span
  m="2751800">nodes</span> <span m="2753760">of</span> <span
  m="2753990">the</span> <span m="2754070">sum</span> <span
  m="2754370">over</span> <span m="2754600">all</span> <span
  m="2754760">of</span> <span m="2754850">its</span> <span
  m="2754990">neighbors</span> <span m="2756180">of</span> <span
  m="2756330">some</span> <span m="2756540">expression.</span> <span
  m="2758400">But</span> <span m="2758520">if</span> <span
  m="2758640">I'm</span> <span m="2758750">considering</span> <span
  m="2759840">a</span> <span m="2759930">node,</span> <span
  m="2760710">every</span> <span m="2760920">note</span> <span
  m="2761300">and</span> <span m="2761530">every</span> <span
  m="2761740">one</span> <span m="2761880">of</span> <span
  m="2761960">its</span> <span m="2762100">neighbors,</span> <span
  m="2762580">that's</span> <span m="2762780">like</span> <span
  m="2762900">considering</span> <span m="2763410">all</span> <span
  m="2763550">the</span> <span m="2763660">directed</span> <span
  m="2764220">edges.</span> <span m="2765610">I</span> <span
  m="2765640">look</span> <span m="2765820">at</span> <span
  m="2765890">every</span> <span m="2766180">u,</span> <span
  m="2766640">and</span> <span m="2766790">I</span> <span
  m="2766940">look</span> <span m="2767130">at</span> <span
  m="2767200">every</span> <span m="2768310">edge</span> <span
  m="2768640">that</span> <span m="2768760">connects</span> <span
  m="2769170">u</span> <span m="2769350">to</span> <span
  m="2769430">something</span> <span m="2769880">else.</span> <span
  m="2771600">So</span> <span m="2771630">I</span> <span m="2771680">can</span>
  <span m="2771840">write</span> <span m="2772090">it</span> <span
  m="2772200">as</span> <span m="2772380">the</span> <span
  m="2772490">sum</span> <span m="2772920">over</span> <span
  m="2773220">all</span> <span m="2773370">the</span> <span
  m="2773460">directed</span> <span m="2773960">edges</span> <span
  m="2774890">of</span> <span m="2775120">this</span> <span
  m="2775340">expression.</span> <span m="2778080">So</span> <span
  m="2778110">I</span> <span m="2778150">get</span> <span
  m="2778280">half</span> <span m="2779130">of</span> <span
  m="2779320">the</span> <span m="2779400">sum</span> <span
  m="2779670">over</span> <span m="2779970">all</span> <span
  m="2780080">the</span> <span m="2780160">directed</span> <span
  m="2780620">edges</span> <span m="2780950">of</span> <span
  m="2781060">this</span> <span m="2781250">expression.</span></p><p><span
  m="2783590">But</span> <span m="2783730">we</span> <span
  m="2783830">were</span> <span m="2783920">talking</span> <span
  m="2784180">about</span> <span m="2784360">undirected</span> <span
  m="2784970">edges.</span> <span m="2788380">And</span> <span
  m="2788760">the</span> <span m="2788920">undirected</span> <span
  m="2789420">edges</span> <span m="2789730">are</span> <span
  m="2789755">being</span> <span m="2789780">twice</span> <span
  m="2790910">here,</span> <span m="2792070">once</span> <span
  m="2792360">for</span> <span m="2792470">each</span> <span
  m="2792700">direction.</span> <span m="2795950">I</span> <span
  m="2796060">can</span> <span m="2796460">change</span> <span
  m="2796880">this</span> <span m="2797120">sum</span> <span
  m="2797450">to</span> <span m="2797620">a</span> <span m="2797690">sum</span>
  <span m="2798070">over</span> <span m="2798590">undirected</span> <span
  m="2799230">edges.</span> <span m="2799690">But</span> <span
  m="2799940">now</span> <span m="2800110">I</span> <span
  m="2800190">have</span> <span m="2800410">the</span> <span
  m="2800510">two</span> <span m="2800730">endpoints</span> <span
  m="2801240">to</span> <span m="2801350">deal</span> <span
  m="2801570">with.</span> <span m="2802270">So</span> <span
  m="2802460">I</span> <span m="2802550">get</span> <span m="2804240">the</span>
  <span m="2804320">degree</span> <span m="2804690">of</span> <span
  m="2804820">u</span> <span m="2805970">and</span> <span m="2806200">the</span>
  <span m="2806290">degree</span> <span m="2806650">of</span> <span
  m="2806740">v</span> <span m="2807400">in</span> <span m="2807640">the</span>
  <span m="2808000">numerator</span> <span m="2808640">because</span> <span
  m="2808810">I'm</span> <span m="2808900">looking</span> <span
  m="2809220">at</span> <span m="2809340">it</span> <span
  m="2809450">from</span> <span m="2809570">the</span> <span
  m="2809660">point</span> <span m="2809910">of</span> <span
  m="2810020">view</span> <span m="2810390">both</span> <span
  m="2810660">of</span> <span m="2810780">the</span> <span
  m="2810920">endpoints</span> <span m="2811480">of</span> <span
  m="2811610">each</span> <span m="2811950">edge.</span> <span
  m="2813810">Well</span> <span m="2814130">something</span> <span
  m="2814480">drops</span> <span m="2814850">out,</span> <span
  m="2815400">so</span> <span m="2815520">I</span> <span m="2815630">have</span>
  <span m="2815780">1/2</span> <span m="2816460">the</span> <span
  m="2816540">sum</span> <span m="2816830">over</span> <span
  m="2817150">all</span> <span m="2817460">the</span> <span
  m="2818300">undirected</span> <span m="2818840">edges</span> <span
  m="2819270">of</span> <span m="2819740">1.</span> <span m="2820860">So</span>
  <span m="2820960">that's</span> <span m="2821120">1/2</span> <span
  m="2821940">of</span> <span m="2822090">the</span> <span
  m="2822170">number</span> <span m="2822550">of</span> <span
  m="2822820">undirected</span> <span m="2823390">edges.</span></p><p><span
  m="2826550">So</span> <span m="2826670">I</span> <span
  m="2826720">don't</span> <span m="2826870">expect</span> <span
  m="2827250">you</span> <span m="2827350">to</span> <span
  m="2827420">get</span> <span m="2827650">every</span> <span
  m="2827930">step</span> <span m="2828280">of</span> <span
  m="2828450">this,</span> <span m="2828800">but</span> <span
  m="2829320">it's</span> <span m="2829490">on</span> <span
  m="2829660">three</span> <span m="2829900">slides,</span> <span
  m="2830430">so</span> <span m="2830520">you</span> <span
  m="2830680">can</span> <span m="2830850">stare</span> <span
  m="2831190">at</span> <span m="2831300">this</span> <span
  m="2831570">when</span> <span m="2831720">you</span> <span
  m="2831830">go</span> <span m="2831980">home</span> <span
  m="2832380">and</span> <span m="2833070">make</span> <span
  m="2833270">sure</span> <span m="2833460">the</span> <span
  m="2833600">steps</span> <span m="2833960">work.</span> <span
  m="2834250">But</span> <span m="2834420">remember</span> <span
  m="2834780">the</span> <span m="2835310">point</span> <span
  m="2835610">of</span> <span m="2835710">this</span> <span
  m="2835940">is</span> <span m="2836070">to</span> <span
  m="2836160">show</span> <span m="2836410">that</span> <span
  m="2836550">you</span> <span m="2836660">reduce</span> <span
  m="2837160">the</span> <span m="2837250">number</span> <span
  m="2837600">of</span> <span m="2837670">edges</span> <span
  m="2838090">by</span> <span m="2838270">a</span> <span
  m="2838370">factor</span> <span m="2838950">of</span> <span
  m="2839140">two,</span> <span m="2839990">and</span> <span
  m="2840220">it's</span> <span m="2840410">done</span> <span
  m="2840610">and</span> <span m="2840730">sort</span> <span
  m="2840910">of</span> <span m="2840990">a</span> <span
  m="2841060">clever</span> <span m="2841410">way</span> <span
  m="2841640">by</span> <span m="2841810">counting</span> <span
  m="2842480">the</span> <span m="2842750">kill</span> <span
  m="2842990">probabilities</span> <span m="2843700">of</span> <span
  m="2843790">vertices.</span> <span m="2850700">So</span> <span
  m="2850910">we</span> <span m="2851020">get</span> <span
  m="2851210">this,</span> <span m="2852160">reducing</span> <span
  m="2852680">the</span> <span m="2852760">number</span> <span
  m="2853100">of</span> <span m="2853180">edges.</span> <span
  m="2854020">And</span> <span m="2854110">now</span> <span
  m="2854510">we</span> <span m="2854660">can</span> <span
  m="2854800">just</span> <span m="2855000">plug</span> <span
  m="2855210">that</span> <span m="2855420">back</span> <span
  m="2855670">in</span> <span m="2855910">to</span> <span m="2856020">get</span>
  <span m="2856270">our</span> <span m="2857180">complexity</span> <span
  m="2857740">bound</span> <span m="2858080">for</span> <span
  m="2858180">the</span> <span m="2858310">entire</span> <span
  m="2858710">algorithm.</span> <span m="2861330">Remember</span> <span
  m="2861640">the</span> <span m="2861780">original</span> <span
  m="2862180">theorem</span> <span m="2862450">you're</span> <span
  m="2862610">we</span> <span m="2862750">were</span> <span
  m="2862890">to</span> <span m="2862990">prove</span> <span
  m="2863280">is</span> <span m="2863390">a</span> <span
  m="2863450">probability</span> <span m="2864070">bound</span> <span
  m="2864500">for</span> <span m="2864640">deciding</span> <span
  m="2865200">within</span> <span m="2866220">log</span> <span
  m="2866455">n</span> <span m="2866690">phases.</span> <span
  m="2867740">Well</span> <span m="2867890">you</span> <span
  m="2868030">should</span> <span m="2868570">have</span> <span
  m="2868700">a</span> <span m="2868750">pretty</span> <span
  m="2868980">good</span> <span m="2869130">idea</span> <span
  m="2869420">of</span> <span m="2869500">why</span> <span
  m="2869670">that</span> <span m="2869840">works</span> <span
  m="2870220">because</span> <span m="2870440">if</span> <span
  m="2870550">at</span> <span m="2870650">each</span> <span
  m="2870940">phase,</span> <span m="2871370">you're</span> <span
  m="2871490">going</span> <span m="2871600">to</span> <span
  m="2871670">reduce</span> <span m="2872010">the</span> <span
  m="2872080">number</span> <span m="2872330">of</span> <span
  m="2872400">edges</span> <span m="2872860">by</span> <span
  m="2873510">around</span> <span m="2873810">a</span> <span
  m="2873850">factor</span> <span m="2874270">of</span> <span
  m="2874370">two,</span> <span m="2875080">then</span> <span
  m="2875620">it's</span> <span m="2875800">going</span> <span
  m="2876000">to</span> <span m="2876120">take</span> <span
  m="2876750">something</span> <span m="2877150">like</span> <span
  m="2877350">log</span> <span m="2877515">n</span> <span
  m="2877930">phases</span> <span m="2878510">to</span> <span
  m="2879430">finish.</span></p><p><span m="2880530">And</span> <span
  m="2881200">I</span> <span m="2881260">just</span> <span
  m="2881470">put</span> <span m="2881590">a</span> <span
  m="2881640">proof</span> <span m="2881840">sketch.</span> <span
  m="2884940">The</span> <span m="2885070">number</span> <span
  m="2885330">of</span> <span m="2885400">edges</span> <span
  m="2885730">that</span> <span m="2885870">are</span> <span
  m="2885980">still</span> <span m="2886250">alive</span> <span
  m="2886690">after</span> <span m="2886980">four</span> <span
  m="2887290">log</span> <span m="2887500">n</span> <span
  m="2887710">phases,</span> <span m="2888200">well</span> <span
  m="2888370">you</span> <span m="2888500">divide</span> <span
  m="2888890">by</span> <span m="2889050">2</span> <span m="2889370">four</span>
  <span m="2889630">log</span> <span m="2889860">n</span> <span
  m="2890090">times,</span> <span m="2891010">so</span> <span
  m="2891160">you</span> <span m="2891320">get</span> <span
  m="2891510">down</span> <span m="2891750">to</span> <span
  m="2891830">practically</span> <span m="2892310">nothing.</span> <span
  m="2893310">The</span> <span m="2893400">probability</span> <span
  m="2894000">any</span> <span m="2894410">edges</span> <span
  m="2894780">are</span> <span m="2894890">alive</span> <span
  m="2895540">at</span> <span m="2895730">the</span> <span
  m="2895880">end</span> <span m="2896270">is</span> <span
  m="2897540">very</span> <span m="2897810">small.</span> <span
  m="2899690">So</span> <span m="2899870">you</span> <span
  m="2900020">get</span> <span m="2900240">a</span> <span
  m="2900990">small</span> <span m="2901400">probability</span> <span
  m="2902020">the</span> <span m="2902160">algorithm</span> <span
  m="2902670">doesn't</span> <span m="2903390">terminate</span> <span
  m="2903910">within</span> <span m="2904580">four</span> <span
  m="2904870">log</span> <span m="2905095">n</span> <span
  m="2905320">phases.</span> <span m="2906700">There's</span> <span
  m="2906820">an</span> <span m="2906910">extra</span> <span
  m="2907180">little</span> <span m="2907420">term</span> <span
  m="2907740">I</span> <span m="2907830">threw</span> <span
  m="2908140">in</span> <span m="2908280">here.</span> <span
  m="2909600">You</span> <span m="2909730">might</span> <span
  m="2909900">have</span> <span m="2910000">forgotten.</span> <span
  m="2910610">There</span> <span m="2910730">was</span> <span
  m="2910860">a</span> <span m="2910970">term</span> <span
  m="2911230">that</span> <span m="2911330">I</span> <span
  m="2911410">needed</span> <span m="2911830">for</span> <span
  m="2911940">the</span> <span m="2912060">small</span> <span
  m="2912380">probability,</span> <span m="2913030">that</span> <span
  m="2913420">somebody</span> <span m="2913760">chose</span> <span
  m="2914050">duplicate</span> <span m="2914450">IDs.</span> <span
  m="2916090">So</span> <span m="2916195">I'm</span> <span
  m="2916300">bringing</span> <span m="2916620">them</span> <span
  m="2916760">back</span> <span m="2917040">in</span> <span
  m="2917220">at</span> <span m="2917320">the</span> <span
  m="2917480">end,</span> <span m="2917760">in</span> <span m="2917910">a</span>
  <span m="2918760">little</span> <span m="2919030">union</span> <span
  m="2919400">bound.</span> <span m="2920430">And</span> <span
  m="2920570">we</span> <span m="2920680">get</span> <span
  m="2920840">our</span> <span m="2921025">1</span> <span
  m="2921210">over</span> <span m="2921480">n</span> <span
  m="2921610">probability</span> <span m="2922290">this</span> <span
  m="2922510">way.</span> <span m="2923970">But</span> <span
  m="2924070">the</span> <span m="2924170">key</span> <span
  m="2924290">idea</span> <span m="2924620">is</span> <span
  m="2924730">you</span> <span m="2924840">reduce</span> <span
  m="2925180">the</span> <span m="2925250">number</span> <span
  m="2925510">of</span> <span m="2925580">edges</span> <span
  m="2925940">by</span> <span m="2926080">half</span> <span
  m="2926540">at</span> <span m="2926660">each</span> <span
  m="2927160">stage.</span></p><p><span m="2929150">Enough</span> <span
  m="2929420">for</span> <span m="2929500">you</span> <span
  m="2929610">to</span> <span m="2929690">look</span> <span
  m="2929890">at</span> <span m="2930060">later,</span> <span
  m="2930370">I</span> <span m="2930440">guess</span> <span
  m="2930840">to</span> <span m="2932130">figure</span> <span
  m="2932370">this</span> <span m="2932580">out</span> <span
  m="2932790">or</span> <span m="2932950">you</span> <span
  m="2933020">have</span> <span m="2933120">any</span> <span
  m="2933250">questions</span> <span m="2933770">about</span> <span
  m="2934170">this?</span> <span m="2935670">So</span> <span
  m="2935780">that's</span> <span m="2935980">the</span> <span
  m="2936090">last</span> <span m="2937390">equations</span> <span
  m="2937990">and</span> <span m="2938120">calculation.</span> <span
  m="2940190">I'm</span> <span m="2940500">going</span> <span
  m="2940600">to</span> <span m="2940650">go</span> <span
  m="2940830">onto</span> <span m="2942070">a</span> <span
  m="2942170">new</span> <span m="2942720">idea,</span> <span
  m="2943210">more</span> <span m="2943410">conceptual</span> <span
  m="2944050">stuff.</span> <span m="2946470">Familiar</span> <span
  m="2946950">problem,</span> <span m="2947490">breadth-first</span> <span
  m="2948610">spanning</span> <span m="2949160">trees,</span> <span
  m="2949800">setting</span> <span m="2950180">up</span> <span
  m="2950790">breadth-first</span> <span m="2951370">paths</span> <span
  m="2952370">to</span> <span m="2952460">every</span> <span
  m="2952700">node,</span> <span m="2954070">but</span> <span
  m="2954420">we're</span> <span m="2954550">going</span> <span
  m="2954680">to</span> <span m="2954740">study</span> <span
  m="2955110">it</span> <span m="2955220">in</span> <span m="2955980">our</span>
  <span m="2956380">new</span> <span m="2956530">setting.</span> <span
  m="2959130">We</span> <span m="2959220">have</span> <span m="2959310">a</span>
  <span m="2959370">connected</span> <span m="2959830">graph.</span> <span
  m="2961080">This</span> <span m="2961330">time,</span> <span
  m="2961690">let's</span> <span m="2962110">suppose</span> <span
  m="2962600">that</span> <span m="2962770">it</span> <span
  m="2962870">has</span> <span m="2963220">a</span> <span
  m="2963290">distinguished</span> <span m="2963890">vertex,</span> <span
  m="2964390">like</span> <span m="2964500">it</span> <span
  m="2964590">already</span> <span m="2964870">has</span> <span
  m="2965040">a</span> <span m="2965090">leader.</span> <span
  m="2966310">So</span> <span m="2966385">it</span> <span m="2966460">has</span>
  <span m="2966640">a</span> <span m="2966710">distinguished</span> <span
  m="2967330">vertex</span> <span m="2967850">in</span> <span
  m="2967960">the</span> <span m="2968040">graph</span> <span
  m="2968450">that's</span> <span m="2968620">going</span> <span
  m="2968880">to</span> <span m="2968990">become</span> <span
  m="2969890">the</span> <span m="2970080">root</span> <span
  m="2970840">of</span> <span m="2971050">the</span> <span
  m="2971130">BFS</span> <span m="2971700">tree.</span> <span
  m="2974920">And</span> <span m="2975920">the</span> <span
  m="2976010">processes</span> <span m="2976550">don't</span> <span
  m="2976770">need</span> <span m="2976990">any</span> <span
  m="2977160">knowledge</span> <span m="2977620">about</span> <span
  m="2977920">the</span> <span m="2977990">graph</span> <span
  m="2978530">for</span> <span m="2978680">this</span> <span
  m="2978910">one.</span></p><p><span m="2984930">For</span> <span
  m="2985050">the</span> <span m="2985150">rest</span> <span
  m="2985420">of</span> <span m="2985510">the</span> <span
  m="2985620">time</span> <span m="2986240">today</span> <span
  m="2986630">and</span> <span m="2987650">Thursday,</span> <span
  m="2988490">we'll</span> <span m="2988780">assume</span> <span
  m="2989100">the</span> <span m="2989190">processes</span> <span
  m="2989730">have</span> <span m="2989970">unique</span> <span
  m="2990310">identifiers,</span> <span m="2991250">and</span> <span
  m="2991600">I</span> <span m="2991630">don't</span> <span
  m="2991920">think</span> <span m="2992130">we're</span> <span
  m="2992240">using</span> <span m="2992540">any</span> <span
  m="2992700">probabilities.</span> <span m="2993460">So</span> <span
  m="2993580">this</span> <span m="2993730">is</span> <span
  m="2993840">just</span> <span m="2994060">going</span> <span
  m="2994180">to</span> <span m="2994900">be</span> <span
  m="2995230">using</span> <span m="2995570">the</span> <span
  m="2995660">unique</span> <span m="2995940">identifiers</span> <span
  m="2996970">to</span> <span m="2997460">solve</span> <span
  m="2997720">our</span> <span m="2997810">problems.</span> <span
  m="2999570">So</span> <span m="2999590">everybody</span> <span
  m="3000000">knows</span> <span m="3000420">its</span> <span
  m="3000600">own</span> <span m="3000760">unique</span> <span
  m="3001070">identifier.</span> <span m="3002700">The</span> <span
  m="3002830">root</span> <span m="3003090">has</span> <span
  m="3003420">a</span> <span m="3003540">distinguished,</span> <span
  m="3005080">generally</span> <span m="3005440">known,</span> <span
  m="3005710">unique</span> <span m="3005990">identifier</span> <span
  m="3007000">say</span> <span m="3007260">i0.</span> <span
  m="3008720">And</span> <span m="3008900">the</span> <span
  m="3008980">process</span> <span m="3009440">that</span> <span
  m="3009550">has</span> <span m="3009770">i0</span> <span
  m="3010220">knows</span> <span m="3010580">hey,</span> <span
  m="3010880">I'm</span> <span m="3011070">at</span> <span
  m="3011170">the</span> <span m="3011270">root</span> <span
  m="3011670">of</span> <span m="3011770">the</span> <span
  m="3011850">graph.</span> <span m="3013060">So</span> <span
  m="3013210">the</span> <span m="3013310">set</span> <span
  m="3013540">up</span> <span m="3013700">make</span> <span
  m="3013910">sense?</span></p><p><span m="3017650">We</span> <span
  m="3017780">might</span> <span m="3017970">as</span> <span
  m="3018090">well</span> <span m="3018280">assume</span> <span
  m="3018630">that</span> <span m="3018760">everybody</span> <span
  m="3019230">knows</span> <span m="3019700">the</span> <span
  m="3019950">unique</span> <span m="3020230">identifiers</span> <span
  m="3020990">of</span> <span m="3021100">their</span> <span
  m="3021240">neighbors</span> <span m="3021710">because</span> <span
  m="3022040">they</span> <span m="3022150">could</span> <span
  m="3022320">easily</span> <span m="3022730">exchange</span> <span
  m="3023330">information</span> <span m="3023990">now,</span> <span
  m="3024220">and</span> <span m="3024450">match</span> <span
  m="3024760">up</span> <span m="3025080">who's</span> <span
  m="3026000">connected</span> <span m="3026420">on</span> <span
  m="3026530">which</span> <span m="3026780">port</span> <span
  m="3027200">by</span> <span m="3027370">a</span> <span
  m="3027720">unique</span> <span m="3028090">identifier.</span> <span
  m="3031830">We'll</span> <span m="3032000">just</span> <span
  m="3032240">do</span> <span m="3032490">deterministic.</span> <span
  m="3033660">There'll</span> <span m="3033730">be</span> <span
  m="3033830">a</span> <span m="3033880">little</span> <span
  m="3034070">bit</span> <span m="3034180">of</span> <span
  m="3034270">non-determinism</span> <span m="3035260">here.</span> <span
  m="3035540">I'll</span> <span m="3035630">say</span> <span
  m="3035780">more</span> <span m="3036030">about</span> <span
  m="3036290">that.</span> <span m="3036770">But</span> <span
  m="3036960">I'm</span> <span m="3037090">not</span> <span
  m="3037250">going</span> <span m="3037340">to</span> <span
  m="3037400">worry</span> <span m="3037710">about</span> <span
  m="3038360">probabilities</span> <span m="3039690">for</span> <span
  m="3039840">this.</span> <span m="3042470">Well</span> <span
  m="3042640">that</span> <span m="3042820">told</span> <span
  m="3043100">you</span> <span m="3043210">about</span> <span
  m="3043890">the</span> <span m="3044380">general</span> <span
  m="3044710">setup.</span> <span m="3045100">What</span> <span
  m="3046170">are</span> <span m="3046240">the</span> <span
  m="3046330">processes</span> <span m="3046870">supposed</span> <span
  m="3047180">to</span> <span m="3047280">do?</span> <span
  m="3047880">Well</span> <span m="3048020">they're</span> <span
  m="3048180">supposed</span> <span m="3048550">to</span> <span
  m="3048650">compute</span> <span m="3049140">a</span> <span
  m="3049180">breadth-first</span> <span m="3050000">spanning</span> <span
  m="3050410">tree,</span> <span m="3050720">rooted</span> <span
  m="3051210">at</span> <span m="3051350">vertex</span> <span
  m="3051840">v0.</span> <span m="3053210">The</span> <span
  m="3053320">branches</span> <span m="3054030">are</span> <span
  m="3054630">going</span> <span m="3054900">to</span> <span
  m="3055030">be</span> <span m="3055560">directed</span> <span
  m="3056140">paths</span> <span m="3056780">in</span> <span
  m="3056950">this</span> <span m="3057180">undirected</span> <span
  m="3057650">graph,</span> <span m="3058240">coming</span> <span
  m="3058540">from</span> <span m="3058710">v0.</span> <span
  m="3060040">Spanning</span> <span m="3060560">means</span> <span
  m="3061080">they</span> <span m="3061200">should</span> <span
  m="3061410">reach</span> <span m="3061680">all</span> <span
  m="3061860">the</span> <span m="3062340">vertices.</span> <span
  m="3063520">And</span> <span m="3063700">breadth-first</span> <span
  m="3064310">means</span> <span m="3064610">that</span> <span
  m="3064770">if</span> <span m="3064880">a</span> <span
  m="3064950">vertex</span> <span m="3065450">is</span> <span
  m="3065580">at</span> <span m="3065780">a</span> <span
  m="3065880">distance</span> <span m="3066370">d</span> <span
  m="3066700">from</span> <span m="3066920">v0,</span> <span
  m="3067800">it</span> <span m="3067930">will</span> <span
  m="3068070">appear</span> <span m="3069380">at</span> <span
  m="3069590">depth</span> <span m="3069940">d</span> <span
  m="3070520">in</span> <span m="3070720">this</span> <span
  m="3071180">spanning</span> <span m="3071620">tree.</span></p><p><span
  m="3072600">So</span> <span m="3072730">everybody</span> <span
  m="3073080">should</span> <span m="3073250">get</span> <span
  m="3073370">a</span> <span m="3073940">shortest</span> <span
  m="3074310">path</span> <span m="3074880">from</span> <span
  m="3075220">the</span> <span m="3075660">root.</span> <span
  m="3077910">Now</span> <span m="3078150">how</span> <span
  m="3078330">are</span> <span m="3078430">we</span> <span
  m="3078440">going</span> <span m="3078680">to</span> <span
  m="3078790">compute</span> <span m="3079250">this</span> <span
  m="3079480">in</span> <span m="3079600">a</span> <span
  m="3079650">distributed</span> <span m="3080270">setting?</span> <span
  m="3080610">Well</span> <span m="3080710">now</span> <span
  m="3081430">the</span> <span m="3081580">output</span> <span
  m="3082160">of</span> <span m="3082290">a</span> <span
  m="3082380">process</span> <span m="3082970">is</span> <span
  m="3083140">just</span> <span m="3083400">going</span> <span
  m="3083650">to</span> <span m="3083780">be</span> <span m="3084410">its</span>
  <span m="3084730">parent</span> <span m="3085420">in</span> <span
  m="3085570">the</span> <span m="3085670">tree.</span> <span
  m="3086850">So</span> <span m="3087060">we're</span> <span
  m="3087160">not</span> <span m="3087350">actually</span> <span
  m="3087680">going</span> <span m="3087910">to</span> <span
  m="3088010">compute</span> <span m="3088510">this</span> <span
  m="3088870">tree</span> <span m="3089050">anywhere</span> <span
  m="3089590">as</span> <span m="3089690">a</span> <span
  m="3089740">whole.</span> <span m="3090680">Everybody's</span> <span
  m="3091250">just</span> <span m="3091460">going</span> <span
  m="3091670">to</span> <span m="3091790">know</span> <span
  m="3091990">its</span> <span m="3092130">parent</span> <span
  m="3092390">in</span> <span m="3092650">the</span> <span
  m="3093098">tree.</span> <span m="3097810">Questions?</span> <span
  m="3098420">Problem</span> <span m="3098760">make</span> <span
  m="3098940">sense?</span></p><p>&nbsp;</p><p><span m="3103920">So</span> <span
  m="3104250">this</span> <span m="3104470">is</span> <span
  m="3104600">just</span> <span m="3104870">an</span> <span
  m="3104990">example</span> <span m="3105580">of</span> <span
  m="3105810">a</span> <span m="3106620">spanning</span> <span
  m="3107030">tree,</span> <span m="3107830">breadth-first</span> <span
  m="3108280">spanning</span> <span m="3108620">tree.</span> <span
  m="3108860">This</span> <span m="3109100">gives</span> <span
  m="3109320">you</span> <span m="3109910">shortest</span> <span
  m="3110360">paths</span> <span m="3110760">to</span> <span
  m="3111000">all</span> <span m="3111160">of</span> <span
  m="3111280">the</span> <span m="3111360">nodes,</span> <span
  m="3111615">,</span> <span m="3113000">shortest</span> <span
  m="3113820">in</span> <span m="3114000">terms</span> <span
  m="3114280">of</span> <span m="3114350">the</span> <span
  m="3114420">number</span> <span m="3114720">of</span> <span
  m="3114760">hops.</span> <span m="3118600">So</span> <span
  m="3118810">we</span> <span m="3118900">can</span> <span
  m="3118990">have</span> <span m="3119080">a</span> <span
  m="3119110">very,</span> <span m="3119460">very</span> <span
  m="3119530">simple</span> <span m="3119890">algorithm.</span> <span
  m="3121740">We're</span> <span m="3121840">going</span> <span
  m="3122050">to</span> <span m="3122180">let</span> <span
  m="3122370">the</span> <span m="3122460">processes</span> <span
  m="3123810">mark</span> <span m="3124320">themselves</span> <span
  m="3125670">as</span> <span m="3126030">they</span> <span
  m="3126270">get</span> <span m="3126450">included</span> <span
  m="3126920">in</span> <span m="3127040">the</span> <span
  m="3127140">tree.</span> <span m="3128520">Starts</span> <span
  m="3128950">out</span> <span m="3129250">only</span> <span
  m="3129920">the</span> <span m="3130010">first</span> <span
  m="3130310">process,</span> <span m="3130760">i0,</span> <span
  m="3131310">is</span> <span m="3131410">marked.</span> <span
  m="3132970">So</span> <span m="3133450">do</span> <span m="3133515">you</span>
  <span m="3133580">want</span> <span m="3133680">to</span> <span
  m="3133720">give</span> <span m="3133870">an</span> <span
  m="3133960">idea,</span> <span m="3134320">maybe,</span> <span
  m="3134650">of</span> <span m="3134720">how</span> <span
  m="3134840">this</span> <span m="3135010">might</span> <span
  m="3135180">work?</span> <span m="3137470">Sketch</span> <span
  m="3137780">out--</span> <span m="3139310">yeah?</span></p><p><span
  m="3139675">AUDIENCE: The</span> <span m="3139857">root</span> <span
  m="3140040">will</span> <span m="3140202">send</span> <span
  m="3140365">out</span> <span m="3140528">to</span> <span
  m="3140690">its</span> <span m="3140853">neighbors.</span> <span
  m="3141504">And</span> <span m="3141666">they</span> <span
  m="3141829">will</span> <span m="3141992">then</span> <span
  m="3142154">mark</span> <span m="3142317">themselves</span> <span
  m="3142968">as</span> <span m="3143456">the</span> <span
  m="3143700">parent</span> <span m="3143944">of</span> <span
  m="3144432">whoever</span> <span m="3144920">they</span> <span
  m="3145082">heard</span> <span m="3145245">from.</span> <span
  m="3145408">Then</span> <span m="3145896">they</span> <span
  m="3146140">will--</span></p><p><span m="3147370">NANCY LYNCH: This</span>
  <span m="3147500">is</span> <span m="3147630">all</span> <span
  m="3147800">synchronous.</span> <span m="3148910">So</span> <span
  m="3149060">that's</span> <span m="3149300">great.</span> <span
  m="3149710">They'll</span> <span m="3149840">be</span> <span
  m="3149960">doing</span> <span m="3150280">this</span> <span
  m="3150540">in</span> <span m="3150700">synchronous</span> <span
  m="3151260">rounds.</span> <span m="3151720">So</span> <span
  m="3152030">everybody</span> <span m="3152530">will,</span> <span
  m="3152920">at</span> <span m="3153150">the</span> <span
  m="3153210">certain</span> <span m="3153560">distance,</span> <span
  m="3154030">is</span> <span m="3154160">going</span> <span
  m="3154430">to</span> <span m="3154530">get</span> <span
  m="3155410">the</span> <span m="3155500">message</span> <span
  m="3156170">at</span> <span m="3156330">the</span> <span
  m="3156430">right</span> <span m="3156670">number</span> <span
  m="3157150">of</span> <span m="3157320">rounds</span> <span
  m="3157790">to</span> <span m="3158560">mark</span> <span
  m="3158880">their</span> <span m="3158990">distance.</span> <span
  m="3160320">OK</span> <span m="3161220">so</span> <span m="3162040">in</span>
  <span m="3162190">round</span> <span m="3162470">one,</span> <span
  m="3163500">process</span> <span m="3164070">i0</span> <span
  m="3164800">will</span> <span m="3165000">send</span> <span
  m="3165350">a</span> <span m="3165460">special</span> <span
  m="3166200">message,</span> <span m="3166720">say</span> <span
  m="3166870">search,</span> <span m="3168550">to</span> <span
  m="3168780">all</span> <span m="3168890">of</span> <span
  m="3168990">its</span> <span m="3169140">neighbors.</span> <span
  m="3170660">And</span> <span m="3170830">anybody</span> <span
  m="3171240">who</span> <span m="3171340">receives</span> <span
  m="3171760">a</span> <span m="3171830">message</span> <span
  m="3172260">in</span> <span m="3172360">round</span> <span
  m="3172660">one</span> <span m="3172950">will</span> <span
  m="3173160">mark</span> <span m="3173480">itself,</span> <span
  m="3175050">decide</span> <span m="3175490">i0</span> <span
  m="3175990">is</span> <span m="3176090">its</span> <span
  m="3176270">parent,</span> <span m="3177320">could</span> <span
  m="3177460">output</span> <span m="3178640">that</span> <span
  m="3178790">i0</span> <span m="3179240">is</span> <span m="3179330">my</span>
  <span m="3179450">parent,</span> <span m="3179910">parent</span> <span
  m="3180360">i0.</span> <span m="3181850">And</span> <span
  m="3182020">then</span> <span m="3182160">it</span> <span
  m="3182250">can</span> <span m="3182460">get</span> <span
  m="3182630">ready</span> <span m="3182960">for</span> <span
  m="3183050">the</span> <span m="3183160">next</span> <span
  m="3183420">round,</span> <span m="3183970">when</span> <span
  m="3184230">it's</span> <span m="3184570">supposed</span> <span
  m="3184900">to</span> <span m="3184980">send</span> <span
  m="3185780">to</span> <span m="3186060">continue</span> <span
  m="3186490">this.</span></p><p><span m="3189210">So</span> <span
  m="3189420">at</span> <span m="3189510">later</span> <span
  m="3189870">rounds,</span> <span m="3191000">if</span> <span
  m="3191150">you</span> <span m="3191290">decided</span> <span
  m="3191780">you're</span> <span m="3191910">going</span> <span
  m="3192200">to</span> <span m="3192290">send,</span> <span
  m="3193000">if</span> <span m="3193130">you</span> <span
  m="3193230">know</span> <span m="3193370">you're</span> <span
  m="3193540">supposed</span> <span m="3193900">to</span> <span
  m="3193980">send</span> <span m="3194360">from</span> <span
  m="3194560">the</span> <span m="3194640">previous</span> <span
  m="3195080">round,</span> <span m="3196070">then</span> <span
  m="3196210">you</span> <span m="3196380">send</span> <span
  m="3196720">a</span> <span m="3196770">search</span> <span
  m="3197130">message</span> <span m="3197950">to</span> <span
  m="3198320">all</span> <span m="3198440">of</span> <span
  m="3198550">your</span> <span m="3198670">neighbors.</span> <span
  m="3200000">Now</span> <span m="3201230">the</span> <span
  m="3201330">process</span> <span m="3201750">is</span> <span
  m="3201860">sitting</span> <span m="3202160">there</span> <span
  m="3202390">and</span> <span m="3202450">it</span> <span
  m="3202530">receives</span> <span m="3203772">a</span> <span
  m="3204110">search</span> <span m="3204460">message.</span> <span
  m="3205040">If</span> <span m="3205130">he's</span> <span
  m="3205310">already</span> <span m="3205590">marked,</span> <span
  m="3207340">then</span> <span m="3207470">he</span> <span
  m="3207540">should</span> <span m="3207710">just</span> <span
  m="3207920">ignore</span> <span m="3208220">the</span> <span
  m="3208330">message.</span> <span m="3210340">Once</span> <span
  m="3210610">you're</span> <span m="3210810">included</span> <span
  m="3211400">in</span> <span m="3211530">the</span> <span
  m="3211650">tree,</span> <span m="3212430">you</span> <span
  m="3212580">don't</span> <span m="3212770">care</span> <span
  m="3213130">if</span> <span m="3213220">you</span> <span
  m="3213340">get</span> <span m="3214330">other</span> <span
  m="3214560">messages,</span> <span m="3215160">search</span> <span
  m="3215490">messages</span> <span m="3216030">on</span> <span
  m="3216190">other</span> <span m="3216370">paths.</span> <span
  m="3217840">So</span> <span m="3217970">you</span> <span
  m="3218150">only</span> <span m="3218370">do</span> <span
  m="3218570">anything</span> <span m="3219130">if</span> <span
  m="3220000">you're</span> <span m="3220150">not</span> <span
  m="3220430">yet</span> <span m="3220660">marked</span> <span
  m="3221170">and</span> <span m="3221410">you</span> <span
  m="3221500">receive</span> <span m="3221830">a</span> <span
  m="3221870">message.</span> <span m="3223120">And</span> <span
  m="3223310">in</span> <span m="3223380">that</span> <span
  m="3223610">case,</span> <span m="3224070">then</span> <span
  m="3224130">you</span> <span m="3224220">mark</span> <span
  m="3224520">yourself.</span> <span m="3228020">Then</span> <span
  m="3228150">you</span> <span m="3228260">mark</span> <span
  m="3228520">yourself,</span> <span m="3229550">and</span> <span
  m="3229710">then</span> <span m="3229840">you</span> <span
  m="3229970">choose</span> <span m="3230360">one</span> <span
  m="3230800">of</span> <span m="3230980">your</span> <span
  m="3231110">neighbors</span> <span m="3231850">as</span> <span
  m="3232310">to</span> <span m="3232440">be</span> <span
  m="3232570">your</span> <span m="3232730">parent.</span></p><p><span
  m="3233980">Now</span> <span m="3234370">because</span> <span
  m="3234800">this</span> <span m="3235010">is</span> <span
  m="3235220">synchronous,</span> <span m="3235820">you</span> <span
  m="3235920">have</span> <span m="3236110">several</span> <span
  m="3236490">nodes</span> <span m="3236870">that</span> <span
  m="3236960">could</span> <span m="3237100">be</span> <span
  m="3237220">sending</span> <span m="3237640">at</span> <span
  m="3237730">the</span> <span m="3237820">same</span> <span
  m="3238110">time.</span> <span m="3238970">So</span> <span
  m="3239050">one</span> <span m="3239310">node</span> <span
  m="3239690">could</span> <span m="3239830">be</span> <span
  m="3239980">receiving</span> <span m="3241300">search</span> <span
  m="3241650">messages</span> <span m="3242280">from</span> <span
  m="3242460">several</span> <span m="3242860">different</span> <span
  m="3243180">neighbors</span> <span m="3243620">at</span> <span
  m="3243700">once.</span> <span m="3245040">Well,</span> <span
  m="3245340">it</span> <span m="3245440">wants</span> <span
  m="3245590">to</span> <span m="3245700">choose</span> <span
  m="3246060">one</span> <span m="3246310">of</span> <span
  m="3246420">them</span> <span m="3246630">as</span> <span
  m="3246740">its</span> <span m="3246910">parent,</span> <span
  m="3247660">doesn't</span> <span m="3247910">matter</span> <span
  m="3248170">which</span> <span m="3248380">one</span> <span
  m="3248560">it</span> <span m="3248680">chooses.</span> <span
  m="3250380">So</span> <span m="3250570">it</span> <span m="3250650">can</span>
  <span m="3250780">just</span> <span m="3250990">choose</span> <span
  m="3251480">nondeterminstically</span> <span m="3252780">just</span> <span
  m="3253000">arbitrarily.</span> <span m="3255160">And</span> <span
  m="3256450">then</span> <span m="3256820">it</span> <span
  m="3257080">decides</span> <span m="3257600">that</span> <span
  m="3257740">it</span> <span m="3257840">will</span> <span
  m="3257990">send</span> <span m="3258370">the</span> <span
  m="3258460">next</span> <span m="3258800">round.</span> <span
  m="3259932">Is</span> <span m="3260300">the</span> <span
  m="3260410">algorithm</span> <span m="3260910">clear?</span></p><p><span
  m="3266770">So</span> <span m="3267010">there's,</span> <span
  m="3267420">I</span> <span m="3267560">mentioned,</span> <span
  m="3268030">a</span> <span m="3268110">little</span> <span
  m="3268320">bit</span> <span m="3268450">of</span> <span
  m="3268530">nondeterministic</span> <span m="3269380">here,</span> <span
  m="3269600">only</span> <span m="3269940">in</span> <span
  m="3270080">that</span> <span m="3270200">a</span> <span
  m="3270250">process</span> <span m="3270720">can</span> <span
  m="3270870">choose</span> <span m="3271160">arbitrarily</span> <span
  m="3271970">among</span> <span m="3272280">several</span> <span
  m="3273240">possible</span> <span m="3273760">parents.</span> <span
  m="3276770">And</span> <span m="3277010">then</span> <span
  m="3277200">we</span> <span m="3277310">could</span> <span
  m="3277470">put</span> <span m="3277650">in</span> <span m="3277790">a</span>
  <span m="3277870">default,</span> <span m="3278490">saying</span> <span
  m="3278780">that</span> <span m="3278890">it</span> <span
  m="3278980">chooses</span> <span m="3279440">the</span> <span
  m="3279540">one</span> <span m="3279720">with</span> <span
  m="3279850">the</span> <span m="3279930">smallest</span> <span
  m="3280440">ID,</span> <span m="3280830">if</span> <span m="3280950">we</span>
  <span m="3281050">really</span> <span m="3281270">want</span> <span
  m="3281410">to</span> <span m="3281450">make</span> <span
  m="3281670">it</span> <span m="3281710">deterministic.</span> <span
  m="3283170">But</span> <span m="3283320">it's</span> <span
  m="3283490">also</span> <span m="3283870">OK</span> <span
  m="3284500">to</span> <span m="3284650">leave</span> <span
  m="3284900">distributed</span> <span m="3285440">algorithms</span> <span
  m="3286030">nondeterministic.</span> <span m="3289690">And</span> <span
  m="3289890">here</span> <span m="3290130">I</span> <span
  m="3290170">should</span> <span m="3290520">make</span> <span
  m="3290720">a</span> <span m="3290780">remark</span> <span
  m="3291360">that</span> <span m="3291530">shows</span> <span
  m="3292260">how</span> <span m="3292470">differently</span> <span
  m="3293250">nondeterminism</span> <span m="3294230">is</span> <span
  m="3294350">regarded</span> <span m="3295470">in</span> <span
  m="3295810">the</span> <span m="3295940">distributed</span> <span
  m="3296550">setting,</span> <span m="3296910">from</span> <span
  m="3297070">the</span> <span m="3297160">way</span> <span
  m="3297340">it</span> <span m="3297430">is</span> <span m="3298110">for</span>
  <span m="3298520">sequential</span> <span m="3299140">algorithms.</span> <span
  m="3300520">For</span> <span m="3300630">distributed</span> <span
  m="3301210">algorithms,</span> <span m="3301920">there</span> <span
  m="3302020">can</span> <span m="3302190">be</span> <span
  m="3302310">many</span> <span m="3302710">options.</span> <span
  m="3303410">And</span> <span m="3303840">maybe</span> <span
  m="3304050">they're</span> <span m="3304210">all</span> <span
  m="3304300">OK.</span> <span m="3304840">But</span> <span
  m="3305110">the</span> <span m="3305290">algorithm</span> <span
  m="3305690">is</span> <span m="3305770">supposed</span> <span
  m="3306140">to</span> <span m="3306230">work</span> <span
  m="3306510">correctly,</span> <span m="3307560">no</span> <span
  m="3307660">matter</span> <span m="3308010">how</span> <span
  m="3309100">you</span> <span m="3309290">resolve</span> <span
  m="3310090">the</span> <span m="3310170">nondeterministic</span> <span
  m="3311100">choices.</span></p><p><span m="3312960">So</span> <span
  m="3313470">think</span> <span m="3313690">about</span> <span
  m="3314030">like</span> <span m="3314240">np,</span> <span
  m="3314920">and</span> <span m="3315180">the</span> <span
  m="3315340">other</span> <span m="3315540">ways</span> <span
  m="3315850">that</span> <span m="3315920">you've</span> <span
  m="3316060">seen</span> <span m="3316280">nondeterminism</span> <span
  m="3317180">so</span> <span m="3317420">far.</span> <span
  m="3318160">There</span> <span m="3318330">you</span> <span
  m="3318460">say</span> <span m="3318680">you're</span> <span
  m="3318840">lucky</span> <span m="3319240">if</span> <span
  m="3319350">there</span> <span m="3319500">is</span> <span
  m="3319830">a</span> <span m="3319890">path</span> <span m="3320730">to</span>
  <span m="3320910">a</span> <span m="3320970">choice.</span> <span
  m="3321390">Here</span> <span m="3322230">when</span> <span
  m="3322450">you</span> <span m="3322570">make</span> <span
  m="3322770">a</span> <span m="3322820">nondeterministic</span> <span
  m="3323780">choice,</span> <span m="3324200">or</span> <span
  m="3324270">when</span> <span m="3324370">the</span> <span
  m="3324460">algorithm</span> <span m="3324840">behaves</span> <span
  m="3325190">nondeterministically,</span> <span m="3326590">all</span> <span
  m="3326880">the</span> <span m="3326970">choices</span> <span
  m="3327450">are</span> <span m="3327560">supposed</span> <span
  m="3327950">to</span> <span m="3328030">work.</span> <span
  m="3328330">It's</span> <span m="3328470">like</span> <span
  m="3328730">all</span> <span m="3328990">the</span> <span
  m="3329060">paths</span> <span m="3329420">have</span> <span
  m="3329540">to</span> <span m="3329640">come</span> <span
  m="3329830">up</span> <span m="3329950">with</span> <span
  m="3330050">correct</span> <span m="3330430">answers.</span> <span
  m="3330890">Do</span> <span m="3330920">you</span> <span
  m="3330950">have</span> <span m="3330980">a</span> <span
  m="3331010">question?</span></p><p><span m="3332448">AUDIENCE: Yes,</span>
  <span m="3332932">whenever</span> <span m="3333093">there's</span> <span
  m="3333254">a</span> <span m="3333416">sub-</span> <span
  m="3333900">[INAUDIBLE],</span> <span m="3334384">whenever</span> <span
  m="3334868">there's</span> <span m="3335029">a</span> <span
  m="3335190">race</span> <span m="3335352">condition,</span> <span
  m="3336804">we</span> <span m="3337288">locally</span> <span
  m="3337449">assume</span> <span m="3337610">that</span> <span
  m="3338256">there</span> <span m="3338377">wasn't</span> <span
  m="3338498">a</span> <span m="3338619">difference</span> <span
  m="3338740">in</span> <span m="3339224">local</span> <span
  m="3339708">computation</span> <span m="3340192">time.</span> <span
  m="3341160">But</span> <span m="3341281">if</span> <span
  m="3341402">there</span> <span m="3341523">is,</span> <span
  m="3342140">even</span> <span m="3342500">in</span> <span
  m="3342680">the</span> <span m="3342860">slightest,</span> <span
  m="3342990">then</span> <span m="3343458">they</span> <span
  m="3343692">would</span> <span m="3343926">get</span> <span
  m="3344082">a</span> <span m="3344238">parent</span> <span
  m="3344394">[INAUDIBLE]</span> <span m="3344862">before</span> <span
  m="3345018">another</span> <span m="3345174">one,</span> <span
  m="3345330">it</span> <span m="3345798">would</span> <span
  m="3345891">still</span> <span m="3345985">be</span> <span
  m="3346078">a</span> <span m="3346172">valid--</span></p><p><span
  m="3347210">NANCY LYNCH: So</span> <span m="3347490">the</span> <span
  m="3347640">synchronous</span> <span m="3348160">model</span> <span
  m="3348670">is</span> <span m="3348870">more</span> <span
  m="3349110">abstract</span> <span m="3349720">than</span> <span
  m="3349830">that.</span> <span m="3350030">You</span> <span
  m="3350110">don't</span> <span m="3350350">model</span> <span
  m="3350800">the</span> <span m="3350890">local</span> <span
  m="3351200">computation</span> <span m="3351950">time.</span> <span
  m="3352540">You're</span> <span m="3352700">moving</span> <span
  m="3352990">more</span> <span m="3353230">toward</span> <span
  m="3353480">an</span> <span m="3353610">asynchronous</span> <span
  m="3354260">model,</span> <span m="3354660">where</span> <span
  m="3355270">the</span> <span m="3355410">steps</span> <span
  m="3355920">can</span> <span m="3356360">take</span> <span
  m="3356940">differing</span> <span m="3357210">amounts</span> <span
  m="3357450">of</span> <span m="3357550">time.</span> <span
  m="3358280">Here</span> <span m="3358550">we</span> <span
  m="3358650">just</span> <span m="3358840">assume</span> <span
  m="3359200">you</span> <span m="3359270">have</span> <span
  m="3359610">an</span> <span m="3359750">abstract</span> <span
  m="3360340">model,</span> <span m="3360710">where</span> <span
  m="3361250">everybody</span> <span m="3361720">does</span> <span
  m="3361910">stuff</span> <span m="3362140">at</span> <span
  m="3362230">once,</span> <span m="3362700">in</span> <span
  m="3362790">each</span> <span m="3363000">round.</span> <span
  m="3364280">But</span> <span m="3364470">you</span> <span
  m="3364550">still</span> <span m="3364820">have</span> <span
  m="3364920">nondeterminism</span> <span m="3365900">because</span> <span
  m="3367790">they</span> <span m="3368010">can</span> <span
  m="3368180">all</span> <span m="3368380">arrive</span> <span
  m="3368680">at</span> <span m="3368760">the</span> <span
  m="3368860">same</span> <span m="3369140">round</span> <span
  m="3369540">somewhere.</span> <span m="3371560">But</span> <span
  m="3371570">it's</span> <span m="3371720">OK.</span> <span
  m="3372240">You</span> <span m="3372370">can</span> <span
  m="3372500">pick</span> <span m="3372720">any</span> <span
  m="3372900">one</span> <span m="3373160">and</span> <span
  m="3373260">it</span> <span m="3373400">still</span> <span
  m="3373600">works.</span></p><p><span m="3377560">So</span> <span
  m="3378030">it</span> <span m="3378190">should</span> <span
  m="3378390">be</span> <span m="3378910">not</span> <span
  m="3379130">hard</span> <span m="3379360">to</span> <span
  m="3379440">see</span> <span m="3379670">that</span> <span
  m="3379810">this</span> <span m="3380020">does</span> <span
  m="3380250">give</span> <span m="3380450">you</span> <span
  m="3380600">a</span> <span m="3380660">BFS</span> <span
  m="3381210">tree</span> <span m="3382150">because</span> <span
  m="3382540">you're</span> <span m="3382660">creating</span> <span
  m="3383120">all</span> <span m="3383270">the</span> <span
  m="3383340">branches</span> <span m="3383830">synchronously.</span> <span
  m="3385040">And</span> <span m="3385200">you're</span> <span
  m="3385340">growing</span> <span m="3385670">one</span> <span
  m="3385900">hop</span> <span m="3386250">at</span> <span
  m="3386390">each</span> <span m="3386630">round.</span> <span
  m="3388790">It</span> <span m="3388940">reaches</span> <span
  m="3389330">all</span> <span m="3389590">the</span> <span
  m="3389680">nodes</span> <span m="3390030">eventually</span> <span
  m="3390690">because</span> <span m="3391010">the</span> <span
  m="3391100">graph</span> <span m="3391400">is</span> <span
  m="3391560">connected.</span> <span m="3392080">And</span> <span
  m="3392200">everybody</span> <span m="3393770">sends</span> <span
  m="3394050">messages</span> <span m="3394670">once</span> <span
  m="3394920">a</span> <span m="3394990">node</span> <span
  m="3395250">get</span> <span m="3395470">marked.</span> <span
  m="3396400">It</span> <span m="3396900">sends</span> <span
  m="3397210">messages</span> <span m="3397720">to</span> <span
  m="3397870">its</span> <span m="3398020">neighbors.</span> <span
  m="3398520">So</span> <span m="3398550">eventually,</span> <span
  m="3399280">the</span> <span m="3399640">markings</span> <span
  m="3400100">are</span> <span m="3400160">going</span> <span
  m="3400400">to</span> <span m="3400540">reach</span> <span
  m="3400810">all</span> <span m="3401140">the</span> <span
  m="3402320">neighbors,</span> <span m="3402860">all</span> <span
  m="3403020">the</span> <span m="3403600">nodes</span> <span
  m="3403890">in</span> <span m="3403960">the</span> <span
  m="3404030">graph.</span> <span m="3406640">So</span> <span
  m="3406930">here's</span> <span m="3408760">how</span> <span
  m="3408940">you</span> <span m="3409140">get</span> <span
  m="3409440">the</span> <span m="3409640">example</span> <span
  m="3410130">I</span> <span m="3410200">showed</span> <span
  m="3410510">before,</span> <span m="3410970">simple</span> <span
  m="3411430">breadth-first</span> <span m="3411970">search.</span> <span
  m="3413460">That's</span> <span m="3413690">a</span> <span
  m="3413740">search</span> <span m="3414200">message</span> <span
  m="3415600">sent</span> <span m="3415870">by</span> <span
  m="3416020">this</span> <span m="3416260">guy.</span> <span
  m="3417270">I</span> <span m="3417340">put</span> <span m="3417445">it</span>
  <span m="3417550">to</span> <span m="3417710">the</span> <span
  m="3417840">right</span> <span m="3418340">of</span> <span
  m="3418560">the</span> <span m="3418850">edge</span> <span
  m="3419360">to</span> <span m="3419450">indicate--</span> <span
  m="3421566">it's</span> <span m="3421960">kind</span> <span
  m="3422100">of</span> <span m="3422150">hard</span> <span
  m="3422360">to</span> <span m="3422430">distinguish.</span> <span
  m="3422990">But</span> <span m="3423440">I</span> <span m="3423550">put</span>
  <span m="3423700">them</span> <span m="3423810">on</span> <span
  m="3423890">the</span> <span m="3423990">right</span> <span
  m="3424340">of</span> <span m="3424450">the</span> <span
  m="3424620">edge</span> <span m="3424880">from</span> <span
  m="3424990">the</span> <span m="3425080">point</span> <span
  m="3425300">of</span> <span m="3425370">view</span> <span
  m="3425550">of</span> <span m="3425640">the</span> <span
  m="3425740">sender.</span></p><p><span m="3426750">So</span> <span
  m="3426870">he</span> <span m="3426960">sends</span> <span
  m="3427210">a</span> <span m="3427280">search</span> <span
  m="3427630">message.</span> <span m="3429770">it</span> <span
  m="3429930">gets</span> <span m="3430210">there.</span> <span
  m="3430650">This</span> <span m="3430820">arrow</span> <span
  m="3431160">just</span> <span m="3431430">indicates</span> <span
  m="3432110">that</span> <span m="3432690">it</span> <span
  m="3432870">reached</span> <span m="3433140">the</span> <span
  m="3433280">other</span> <span m="3433510">end.</span> <span
  m="3433720">And</span> <span m="3433820">this</span> <span
  m="3434010">guy</span> <span m="3434320">has</span> <span
  m="3434730">chosen</span> <span m="3435190">the</span> <span
  m="3435290">sender,</span> <span m="3436160">which</span> <span
  m="3436240">is</span> <span m="3436330">the</span> <span
  m="3436450">other</span> <span m="3436630">direction</span> <span
  m="3437070">on</span> <span m="3437160">the</span> <span
  m="3437290">arrow,</span> <span m="3437680">as</span> <span
  m="3437840">its</span> <span m="3438000">parent.</span> <span
  m="3439790">Now</span> <span m="3440010">the</span> <span
  m="3440100">recipient</span> <span m="3440830">is</span> <span
  m="3441030">going</span> <span m="3441450">to</span> <span
  m="3443200">send</span> <span m="3444320">some</span> <span
  m="3444510">search</span> <span m="3444830">messages.</span> <span
  m="3445540">So</span> <span m="3445640">he</span> <span
  m="3445740">sends</span> <span m="3446070">four</span> <span
  m="3446310">of</span> <span m="3446350">them.</span> <span
  m="3448370">They</span> <span m="3448500">all</span> <span
  m="3448620">get</span> <span m="3448830">to</span> <span
  m="3448920">the</span> <span m="3449090">other</span> <span
  m="3449350">end.</span> <span m="3449820">And</span> <span
  m="3450060">OK,</span> <span m="3450480">so</span> <span
  m="3450690">all</span> <span m="3450850">these</span> <span
  m="3451080">guys</span> <span m="3451510">now</span> <span
  m="3452050">get</span> <span m="3452250">marked.</span> <span
  m="3452770">They're</span> <span m="3452960">included</span> <span
  m="3453400">in</span> <span m="3453510">the</span> <span
  m="3453600">BFS</span> <span m="3454140">tree.</span> <span
  m="3456230">And</span> <span m="3456400">now</span> <span
  m="3456690">the</span> <span m="3456760">next</span> <span
  m="3457020">round,</span> <span m="3457470">they</span> <span
  m="3457630">all</span> <span m="3457800">send</span> <span
  m="3458190">some</span> <span m="3458310">messages.</span> <span
  m="3460000">I'm</span> <span m="3460150">not</span> <span
  m="3460620">putting</span> <span m="3460940">in</span> <span
  m="3461070">the</span> <span m="3461890">messages</span> <span
  m="3462890">where</span> <span m="3463290">somebody</span> <span
  m="3463640">would</span> <span m="3463800">send</span> <span
  m="3464040">back</span> <span m="3464270">to</span> <span m="3464520">a</span>
  <span m="3464550">guy</span> <span m="3464760">who</span> <span
  m="3464870">sent</span> <span m="3465150">to</span> <span
  m="3465240">him.</span> <span m="3465970">But</span> <span
  m="3466080">I</span> <span m="3466120">put</span> <span m="3466310">in</span>
  <span m="3466420">all</span> <span m="3466550">the</span> <span
  m="3466710">others.</span> <span m="3467810">Some</span> <span
  m="3467940">of</span> <span m="3468040">them</span> <span
  m="3468180">are</span> <span m="3468260">going</span> <span
  m="3468520">to</span> <span m="3468630">be</span> <span
  m="3468790">ignored.</span> <span m="3471350">But</span> <span
  m="3471790">you</span> <span m="3471930">do</span> <span
  m="3472070">get</span> <span m="3472300">to</span> <span m="3472420">a</span>
  <span m="3472460">few</span> <span m="3472690">new</span> <span
  m="3472840">nodes</span> <span m="3473190">this</span> <span
  m="3473430">way.</span> <span m="3473820">That's</span> <span
  m="3474020">round</span> <span m="3474290">three.</span> <span
  m="3475460">Round</span> <span m="3475790">four,</span> <span
  m="3476290">everybody</span> <span m="3476720">sends.</span> <span
  m="3477900">And</span> <span m="3478870">now</span> <span
  m="3479020">you</span> <span m="3479170">have</span> <span
  m="3479390">all</span> <span m="3479530">the</span> <span
  m="3479610">nodes</span> <span m="3479990">included.</span></p><p><span
  m="3483250">So</span> <span m="3483390">this</span> <span
  m="3483620">gives</span> <span m="3483820">you</span> <span
  m="3483970">the</span> <span m="3484770">spanning</span> <span
  m="3485200">tree</span> <span m="3485540">that</span> <span
  m="3485720">I</span> <span m="3485780">showed</span> <span
  m="3486100">at</span> <span m="3486190">the</span> <span
  m="3486250">beginning</span> <span m="3486670">of</span> <span
  m="3486780">this</span> <span m="3487710">topic.</span> <span
  m="3492450">This</span> <span m="3492580">is</span> <span
  m="3492700">not</span> <span m="3493020">a</span> <span
  m="3493050">very</span> <span m="3493320">complicated</span> <span
  m="3494000">algorithm.</span> <span m="3494650">But</span> <span
  m="3494800">I</span> <span m="3494860">think</span> <span
  m="3495080">you</span> <span m="3495220">can</span> <span
  m="3495420">see</span> <span m="3495740">that</span> <span
  m="3496910">things</span> <span m="3497160">can</span> <span
  m="3497290">get</span> <span m="3497450">worse.</span> <span
  m="3497830">And</span> <span m="3498140">you</span> <span
  m="3498270">want</span> <span m="3498510">to</span> <span
  m="3499270">argue</span> <span m="3499650">about</span> <span
  m="3500060">why</span> <span m="3500580">the</span> <span
  m="3500710">algorithms</span> <span m="3501250">work</span> <span
  m="3501490">correctly.</span> <span m="3502820">So</span> <span
  m="3502910">as</span> <span m="3502935">I</span> <span m="3502960">said</span>
  <span m="3503170">before,</span> <span m="3504390">a</span> <span
  m="3504470">popular</span> <span m="3504970">method</span> <span
  m="3505970">of</span> <span m="3507020">reasoning</span> <span
  m="3507410">about</span> <span m="3507630">the</span> <span
  m="3507760">algorithms</span> <span m="3508300">is</span> <span
  m="3508410">to</span> <span m="3508530">state</span> <span
  m="3508850">invariance.</span> <span m="3510300">So</span> <span
  m="3510490">here,</span> <span m="3510890">suppose</span> <span
  m="3511240">I</span> <span m="3511290">want</span> <span m="3511470">to</span>
  <span m="3511540">describe</span> <span m="3512010">the</span> <span
  m="3512090">state</span> <span m="3512520">of</span> <span
  m="3512660">the</span> <span m="3512810">entire</span> <span
  m="3513240">network,</span> <span m="3514200">after</span> <span
  m="3514610">some</span> <span m="3514890">number,</span> <span
  m="3515270">r,</span> <span m="3515525">of</span> <span
  m="3515780">rounds.</span> <span m="3518110">what</span> <span
  m="3518260">could</span> <span m="3518390">you</span> <span
  m="3518460">say</span> <span m="3518680">about</span> <span
  m="3518950">that?</span> <span m="3519170">What's</span> <span
  m="3519390">the</span> <span m="3519480">case</span> <span
  m="3519820">after</span> <span m="3520170">r</span> <span
  m="3520440">rounds</span> <span m="3520810">of</span> <span
  m="3520920">this</span> <span m="3521100">algorithm?</span> <span
  m="3529010">Yeah.</span></p><p><span m="3530483">AUDIENCE: All</span> <span
  m="3530974">nodes</span> <span m="3531465">at</span> <span
  m="3531710">distance</span> <span m="3531956">r</span> <span
  m="3532447">from</span> <span m="3532692">the</span> <span
  m="3532938">root</span> <span m="3533429">have</span> <span
  m="3533920">been</span> <span m="3534411">marked.</span></p><p><span
  m="3535260">NANCY LYNCH: All</span> <span m="3535450">the</span> <span
  m="3535550">nodes</span> <span m="3535900">at</span> <span
  m="3536070">distance</span> <span m="3536500">r</span> <span
  m="3536950">from</span> <span m="3537220">the</span> <span
  m="3537760">root</span> <span m="3538280">have</span> <span
  m="3538490">been</span> <span m="3538630">marked.</span> <span
  m="3539530">In</span> <span m="3539630">fact,</span> <span
  m="3540650">only</span> <span m="3540880">those</span> <span
  m="3541370">by</span> <span m="3541690">round</span> <span
  m="3542060">r,</span> <span m="3542390">only</span> <span
  m="3542630">the</span> <span m="3542750">ones</span> <span
  m="3543000">with</span> <span m="3543130">distances</span> <span
  m="3543750">up</span> <span m="3543940">through</span> <span
  m="3544230">r</span> <span m="3544480">have</span> <span
  m="3544610">been</span> <span m="3544760">marked.</span> <span
  m="3546330">So</span> <span m="3546880">to</span> <span
  m="3547020">state</span> <span m="3547320">the</span> <span
  m="3547520">invariance,</span> <span m="3547670">if</span> <span
  m="3548160">you</span> <span m="3548230">want</span> <span
  m="3548320">to</span> <span m="3548470">state</span> <span
  m="3548760">invariance,</span> <span m="3549350">I</span> <span
  m="3549400">have</span> <span m="3549550">to</span> <span
  m="3549910">say</span> <span m="3550200">what's</span> <span
  m="3550450">in</span> <span m="3550540">the</span> <span
  m="3550630">state</span> <span m="3550960">of</span> <span
  m="3551020">the</span> <span m="3551100">processes.</span> <span
  m="3552540">So</span> <span m="3552950">all</span> <span
  m="3553030">right,</span> <span m="3553320">what</span> <span
  m="3553430">can</span> <span m="3553520">we</span> <span
  m="3553640">say?</span> <span m="3554770">So</span> <span
  m="3555130">the</span> <span m="3555230">process</span> <span
  m="3555760">has</span> <span m="3556040">a</span> <span
  m="3556720">Boolean</span> <span m="3557660">that</span> <span
  m="3557820">says</span> <span m="3558040">whether</span> <span
  m="3558310">or</span> <span m="3558370">not</span> <span
  m="3558570">it's</span> <span m="3558730">marked.</span> <span
  m="3559740">It</span> <span m="3559860">has</span> <span m="3560160">a</span>
  <span m="3560600">place</span> <span m="3560920">to</span> <span
  m="3561160">record</span> <span m="3561490">a</span> <span
  m="3561550">parent.</span> <span m="3563570">And</span> <span
  m="3563830">it</span> <span m="3563970">has</span> <span
  m="3565950">someplace</span> <span m="3566500">where</span> <span
  m="3566650">it</span> <span m="3566790">puts</span> <span
  m="3568480">information</span> <span m="3569150">about</span> <span
  m="3569390">whether</span> <span m="3569700">it's</span> <span
  m="3569960">supposed</span> <span m="3570320">to</span> <span
  m="3570410">send</span> <span m="3570750">a</span> <span
  m="3570790">message</span> <span m="3571240">at</span> <span
  m="3571330">the</span> <span m="3571430">next</span> <span
  m="3571750">round.</span> <span m="3573100">And</span> <span
  m="3573770">we</span> <span m="3574430">also</span> <span
  m="3574720">should</span> <span m="3575010">know</span> <span
  m="3575210">its</span> <span m="3575520">UID,</span> <span
  m="3575920">so</span> <span m="3576060">I'll</span> <span
  m="3576180">put</span> <span m="3576340">that</span> <span
  m="3576550">in</span> <span m="3576760">another</span> <span
  m="3576940">state</span> <span m="3577270">variable.</span></p><p><span
  m="3578800">So</span> <span m="3579130">here</span> <span
  m="3579920">is</span> <span m="3580310">something</span> <span
  m="3580740">I</span> <span m="3580800">can</span> <span m="3580990">say</span>
  <span m="3581390">in</span> <span m="3582180">invariance.</span> <span
  m="3583570">At</span> <span m="3583690">the</span> <span
  m="3583830">end</span> <span m="3583990">of</span> <span m="3584110">r</span>
  <span m="3584400">rounds,</span> <span m="3585370">as</span> <span
  m="3586800">you</span> <span m="3586970">said,</span> <span
  m="3587810">at</span> <span m="3587950">the</span> <span
  m="3588080">end</span> <span m="3588240">of</span> <span m="3588360">r</span>
  <span m="3588570">rounds</span> <span m="3588920">exactly</span> <span
  m="3589460">the</span> <span m="3589570">processes</span> <span
  m="3590560">at</span> <span m="3590800">distance</span> <span
  m="3591330">at</span> <span m="3591520">most</span> <span m="3591960">r</span>
  <span m="3592390">from</span> <span m="3593180">the</span> <span
  m="3593300">source</span> <span m="3593700">node,</span> <span
  m="3593960">the</span> <span m="3594050">root</span> <span
  m="3594280">node,</span> <span m="3594890">are</span> <span
  m="3595020">marked.</span> <span m="3597740">I</span> <span
  m="3597806">can</span> <span m="3597873">say</span> <span m="3597940">a</span>
  <span m="3598050">little</span> <span m="3598250">more.</span> <span
  m="3598510">I</span> <span m="3598540">can</span> <span m="3598750">say</span>
  <span m="3599300">a</span> <span m="3599420">process</span> <span
  m="3599850">has</span> <span m="3600090">its</span> <span
  m="3600270">parents</span> <span m="3600910">defined</span> <span
  m="3602020">if</span> <span m="3602250">and</span> <span
  m="3602380">only</span> <span m="3602750">if</span> <span
  m="3602930">it's</span> <span m="3603100">marked.</span> <span
  m="3604770">So</span> <span m="3604860">it</span> <span
  m="3604900">doesn't</span> <span m="3605080">just</span> <span
  m="3605230">get</span> <span m="3605370">market.</span> <span
  m="3605640">It</span> <span m="3605910">also</span> <span
  m="3606160">computes</span> <span m="3606580">a</span> <span
  m="3606712">parent,</span> <span m="3607110">and</span> <span
  m="3607550">the</span> <span m="3607610">parent</span> <span
  m="3608050">gets</span> <span m="3608660">computed</span> <span
  m="3609200">at</span> <span m="3609390">the</span> <span
  m="3609470">point</span> <span m="3609750">where</span> <span
  m="3609910">it</span> <span m="3609980">gets</span> <span
  m="3610220">marked.</span> <span m="3613030">Then</span> <span
  m="3613190">I</span> <span m="3613240">should</span> <span
  m="3613500">say</span> <span m="3613690">that</span> <span
  m="3613870">the</span> <span m="3613960">parent</span> <span
  m="3614430">is</span> <span m="3614760">correct.</span> <span
  m="3615950">So</span> <span m="3616190">for</span> <span
  m="3616370">any</span> <span m="3616620">process</span> <span
  m="3617200">that's</span> <span m="3617410">at</span> <span
  m="3617550">distance</span> <span m="3618130">d</span> <span
  m="3620210">from</span> <span m="3620480">the</span> <span
  m="3620570">source,</span> <span m="3621400">if</span> <span
  m="3621600">the</span> <span m="3621700">parent</span> <span
  m="3622110">is</span> <span m="3622240">defined,</span> <span
  m="3622850">then</span> <span m="3623030">it's</span> <span
  m="3623340">in</span> <span m="3623480">fact</span> <span
  m="3623920">the</span> <span m="3624170">UID</span> <span
  m="3624400">of</span> <span m="3624515">a</span> <span
  m="3624630">process</span> <span m="3625150">at</span> <span
  m="3625220">distance</span> <span m="3625660">d</span> <span
  m="3625790">minus</span> <span m="3626140">1</span> <span
  m="3626410">from</span> <span m="3626600">the</span> <span
  m="3626690">source.</span> <span m="3628670">So</span> <span
  m="3628770">that</span> <span m="3628950">says</span> <span
  m="3629130">it's</span> <span m="3629310">actually</span> <span
  m="3629840">getting</span> <span m="3630220">a</span> <span
  m="3630960">correct</span> <span m="3632390">breadth-first</span> <span
  m="3633250">tree.</span> <span m="3633590">It's</span> <span
  m="3633750">getting</span> <span m="3633970">the</span> <span
  m="3634060">parent</span> <span m="3634570">on</span> <span
  m="3635570">a</span> <span m="3635680">shortest</span> <span
  m="3636080">path.</span> <span m="3636890">Yeah?</span></p><p><span
  m="3637566">AUDIENCE: Do</span> <span m="3637804">these</span> <span
  m="3638042">invariants</span> <span m="3638518">[INAUDIBLE]</span> <span
  m="3638994">for</span> <span m="3639470">i0?</span></p><p><span
  m="3642810">NANCY LYNCH: Distance</span> <span m="3643400">0</span> <span
  m="3643990">is</span> <span m="3644190">marked.</span> <span
  m="3647090">i0</span> <span m="3647540">doesn't</span> <span
  m="3648080">ever--</span> <span m="3649440">I</span> <span
  m="3649560">see</span> <span m="3649730">what</span> <span
  m="3649820">you're</span> <span m="3649960">saying.</span> <span
  m="3652200">i0</span> <span m="3652760">doesn't</span> <span
  m="3653430">have</span> <span m="3653660">a</span> <span
  m="3653720">parent.</span> <span m="3654330">So</span> <span
  m="3654570">I</span> <span m="3654640">guess</span> <span
  m="3654860">that</span> <span m="3655400">we</span> <span
  m="3655510">should</span> <span m="3655740">say</span> <span
  m="3656020">for</span> <span m="3656770">i</span> <span m="3656910">not</span>
  <span m="3657120">equal</span> <span m="3657420">to</span> <span
  m="3657560">i0</span> <span m="3658150">in</span> <span
  m="3658260">this</span> <span m="3658440">case.</span> <span
  m="3661200">So</span> <span m="3661380">this</span> <span
  m="3661550">would</span> <span m="3661670">be</span> <span
  m="3661780">a</span> <span m="3661850">process</span> <span
  m="3662480">other</span> <span m="3662760">than</span> <span
  m="3662990">i0.</span> <span m="3663310">It</span> <span
  m="3663630">would</span> <span m="3663760">have</span> <span
  m="3663940">its</span> <span m="3664080">parent</span> <span
  m="3664470">defined,</span> <span m="3664930">if</span> <span
  m="3665050">and</span> <span m="3665150">only</span> <span
  m="3665410">if</span> <span m="3665550">it's</span> <span
  m="3665700">marked.</span> <span m="3666010">Well</span> <span
  m="3666530">as</span> <span m="3666880">I</span> <span
  m="3666990">think</span> <span m="3667190">you</span> <span
  m="3667280">just</span> <span m="3667450">noticed,</span> <span
  m="3669180">the</span> <span m="3669380">root</span> <span
  m="3669610">node</span> <span m="3670210">is</span> <span
  m="3670370">marked</span> <span m="3670880">but</span> <span
  m="3671020">it</span> <span m="3671070">doesn't</span> <span
  m="3671270">have</span> <span m="3671360">a</span> <span
  m="3671410">parent.</span> <span m="3672000">So</span> <span
  m="3672330">it's</span> <span m="3672440">an</span> <span
  m="3672510">exception.</span> <span m="3675240">But</span> <span
  m="3675440">this</span> <span m="3675780">should</span> <span
  m="3675980">be,</span> <span m="3676370">this</span> <span
  m="3676520">doesn't</span> <span m="3676820">involve</span> <span
  m="3678670">i0.</span> <span m="3679500">So</span> <span
  m="3679700">the</span> <span m="3679770">second</span> <span
  m="3680100">one,</span> <span m="3680240">I</span> <span
  m="3680290">can</span> <span m="3680840">fix</span> <span
  m="3681250">that</span> <span m="3681400">a</span> <span
  m="3681445">bit.</span> <span m="3682920">Other</span> <span
  m="3683120">comments,</span> <span m="3683560">questions?</span></p><p><span
  m="3687890">So</span> <span m="3688280">if</span> <span
  m="3688620">somebody</span> <span m="3689010">wanted</span> <span
  m="3689410">to</span> <span m="3689560">do</span> <span m="3689890">a</span>
  <span m="3689960">formal</span> <span m="3690380">correctness</span> <span
  m="3691000">proof</span> <span m="3691430">of</span> <span
  m="3691720">an</span> <span m="3691870">algorithm</span> <span
  m="3692380">like</span> <span m="3692630">this</span> <span
  m="3692860">one,</span> <span m="3693040">you</span> <span
  m="3693160">would</span> <span m="3693280">use</span> <span
  m="3693510">these</span> <span m="3693710">invariants.</span> <span
  m="3694800">You</span> <span m="3694950">prove</span> <span
  m="3695200">it</span> <span m="3695290">by</span> <span
  m="3695430">induction.</span> <span m="3695720">In</span> <span
  m="3696010">fact</span> <span m="3696560">there's</span> <span
  m="3696710">quite</span> <span m="3696890">a</span> <span
  m="3696950">few</span> <span m="3697110">people</span> <span
  m="3697510">who</span> <span m="3697640">use</span> <span
  m="3698930">interactive</span> <span m="3699570">theorem</span> <span
  m="3699880">provers</span> <span m="3701080">to</span> <span
  m="3702550">do</span> <span m="3702790">proofs</span> <span
  m="3703030">like</span> <span m="3703250">this</span> <span
  m="3703520">because</span> <span m="3703880">the</span> <span
  m="3704060">algorithms</span> <span m="3704650">can</span> <span
  m="3704790">get</span> <span m="3704950">pretty</span> <span
  m="3705150">complicated,</span> <span m="3706480">with</span> <span
  m="3706600">a</span> <span m="3706640">lot</span> <span m="3706890">of</span>
  <span m="3706980">variables.</span> <span m="3708520">So</span> <span
  m="3709250">you</span> <span m="3709370">have</span> <span
  m="3709510">to</span> <span m="3709610">do</span> <span
  m="3709740">some</span> <span m="3709900">bookkeeping.</span> <span
  m="3710470">You</span> <span m="3710600">keep</span> <span
  m="3710810">track</span> <span m="3711200">of</span> <span
  m="3711480">all</span> <span m="3711660">these</span> <span
  m="3711840">invariants,</span> <span m="3712460">and</span> <span
  m="3712540">then</span> <span m="3712650">you</span> <span
  m="3712750">want</span> <span m="3712890">to</span> <span
  m="3712940">prove</span> <span m="3714390">that</span> <span
  m="3714690">they're</span> <span m="3714860">all</span> <span
  m="3715150">true</span> <span m="3715420">by</span> <span
  m="3715570">induction.</span> <span m="3715880">They</span> <span
  m="3716190">all</span> <span m="3716320">hold</span> <span
  m="3716730">through</span> <span m="3716920">an</span> <span
  m="3717010">inductive</span> <span m="3717410">step.</span> <span
  m="3718440">So</span> <span m="3718580">you</span> <span
  m="3718710">can</span> <span m="3718850">use</span> <span
  m="3719370">an</span> <span m="3719610">interactive</span> <span
  m="3720030">theorem</span> <span m="3720350">prover</span> <span
  m="3720780">to</span> <span m="3720850">help</span> <span
  m="3721110">you</span> <span m="3721620">do</span> <span
  m="3721710">the</span> <span m="3721820">bookkeeping.</span> <span
  m="3723540">But</span> <span m="3723680">even</span> <span
  m="3723880">a</span> <span m="3724135">manual</span> <span
  m="3724390">proof</span> <span m="3725030">in</span> <span
  m="3725200">a</span> <span m="3725430">research</span> <span
  m="3726020">paper</span> <span m="3726390">would</span> <span
  m="3726570">use</span> <span m="3727100">invariance</span> <span
  m="3728130">in</span> <span m="3728270">this</span> <span
  m="3728360">style.</span></p><p><span m="3732000">OK</span> <span
  m="3732470">complexity.</span> <span m="3734940">So</span> <span
  m="3735110">the</span> <span m="3735200">number</span> <span
  m="3735560">of</span> <span m="3735640">rounds</span> <span
  m="3736060">until</span> <span m="3736480">everybody</span> <span
  m="3737020">outputs</span> <span m="3737620">their</span> <span
  m="3738440">parent</span> <span m="3739660">would</span> <span
  m="3739850">be</span> <span m="3740710">the</span> <span
  m="3740820">maximum</span> <span m="3741300">distance</span> <span
  m="3741860">of</span> <span m="3741980">any</span> <span
  m="3742160">node</span> <span m="3742500">from</span> <span
  m="3742870">v0.</span> <span m="3743440">So</span> <span m="3743570">we</span>
  <span m="3743650">can</span> <span m="3743780">say</span> <span
  m="3743970">that's</span> <span m="3744230">at</span> <span
  m="3744300">most</span> <span m="3744680">the</span> <span
  m="3744790">diameter</span> <span m="3745330">of</span> <span
  m="3745410">the</span> <span m="3745470">graph.</span> <span
  m="3745780">It</span> <span m="3745870">could</span> <span
  m="3746010">be</span> <span m="3746140">less.</span> <span
  m="3746620">It's</span> <span m="3746930">just</span> <span
  m="3746940">is</span> <span m="3747030">the</span> <span
  m="3747100">maximum</span> <span m="3747580">distance</span> <span
  m="3748030">from</span> <span m="3748210">this</span> <span
  m="3748360">particular</span> <span m="3748930">node.</span></p><p><span
  m="3751440">Message</span> <span m="3751870">complexity?</span> <span
  m="3753020">Well</span> <span m="3753070">how</span> <span
  m="3753190">many</span> <span m="3753410">messages</span> <span
  m="3754020">are</span> <span m="3754150">sent</span> <span
  m="3755190">in</span> <span m="3755350">this</span> <span
  m="3755540">algorithm?</span> <span m="3758140">So</span> <span
  m="3758410">everybody</span> <span m="3758930">is</span> <span
  m="3759070">going</span> <span m="3759350">to</span> <span
  m="3759430">send</span> <span m="3759800">messages</span> <span
  m="3760290">only</span> <span m="3760620">once</span> <span
  m="3761270">on</span> <span m="3761470">all</span> <span m="3761660">of</span>
  <span m="3761760">its</span> <span m="3762380">edges.</span> <span
  m="3763880">So</span> <span m="3763920">that</span> <span
  m="3764040">means</span> <span m="3764270">all</span> <span
  m="3764420">the</span> <span m="3764570">edges</span> <span
  m="3766410">get</span> <span m="3766600">a</span> <span
  m="3766640">message</span> <span m="3767030">sent</span> <span
  m="3767320">in</span> <span m="3767400">each</span> <span
  m="3767620">direction</span> <span m="3768320">just</span> <span
  m="3768530">once.</span> <span m="3768770">So</span> <span
  m="3768940">it's</span> <span m="3769090">order</span> <span
  m="3769420">of</span> <span m="3769500">the</span> <span
  m="3769580">number</span> <span m="3769880">of</span> <span
  m="3769950">edges.</span> <span m="3775360">All</span> <span
  m="3775450">right,</span> <span m="3775660">so</span> <span
  m="3776200">we</span> <span m="3776280">can</span> <span
  m="3776400">play</span> <span m="3776580">around</span> <span
  m="3776850">with</span> <span m="3776980">this.</span> <span
  m="3778720">So</span> <span m="3778770">this</span> <span
  m="3778940">algorithm</span> <span m="3779430">just</span> <span
  m="3779660">tells</span> <span m="3779980">everybody</span> <span
  m="3780520">who</span> <span m="3780575">his</span> <span
  m="3780630">parent</span> <span m="3781260">is.</span> <span
  m="3781560">But</span> <span m="3781760">maybe</span> <span
  m="3782550">when</span> <span m="3782680">you're</span> <span
  m="3782790">finished,</span> <span m="3783160">you'd</span> <span
  m="3783280">like</span> <span m="3783440">to</span> <span
  m="3783540">who</span> <span m="3783700">your</span> <span
  m="3783900">children</span> <span m="3784400">are</span> <span
  m="3784890">as</span> <span m="3785090">well.</span> <span
  m="3788400">For</span> <span m="3788500">many</span> <span
  m="3788800">uses</span> <span m="3789270">of</span> <span
  m="3789400">these</span> <span m="3789660">trees,</span> <span
  m="3790200">you'd</span> <span m="3790380">like</span> <span
  m="3790670">to</span> <span m="3791740">have</span> <span m="3791950">a</span>
  <span m="3792000">parent</span> <span m="3792490">be</span> <span
  m="3792630">able</span> <span m="3792830">to</span> <span
  m="3792940">talk</span> <span m="3793230">to</span> <span
  m="3793400">its</span> <span m="3793580">children</span> <span
  m="3794040">in</span> <span m="3794090">the</span> <span
  m="3794140">tree.</span></p><p><span m="3795250">So</span> <span
  m="3795410">how</span> <span m="3795590">to</span> <span m="3795740">do</span>
  <span m="3795870">that?</span> <span m="3796140">Well</span> <span
  m="3797020">you</span> <span m="3797190">can</span> <span
  m="3797330">add</span> <span m="3797570">a</span> <span
  m="3797640">child</span> <span m="3798080">pointer</span> <span
  m="3799170">because</span> <span m="3799570">anybody</span> <span
  m="3800080">who</span> <span m="3800180">gets</span> <span
  m="3800440">a</span> <span m="3800500">search</span> <span
  m="3800850">message</span> <span m="3801330">and</span> <span
  m="3801460">selects</span> <span m="3801840">its</span> <span
  m="3802000">parents</span> <span m="3802520">could</span> <span
  m="3802710">send</span> <span m="3802910">back</span> <span
  m="3803130">a</span> <span m="3803180">message</span> <span
  m="3803650">to</span> <span m="3803770">that</span> <span
  m="3803890">parents</span> <span m="3804240">saying,</span> <span
  m="3804610">hey,</span> <span m="3804830">I'm</span> <span
  m="3804930">your</span> <span m="3804970">child.</span> <span
  m="3806330">And</span> <span m="3806460">if</span> <span
  m="3806530">you</span> <span m="3806620">get</span> <span m="3806740">a</span>
  <span m="3806800">search</span> <span m="3807120">message,</span> <span
  m="3807720">and</span> <span m="3807870">you</span> <span
  m="3807960">decide</span> <span m="3808690">that</span> <span
  m="3808880">that's</span> <span m="3809110">not</span> <span
  m="3809330">your</span> <span m="3809450">parent,</span> <span
  m="3810310">you</span> <span m="3810420">can</span> <span
  m="3810540">help</span> <span m="3810990">that</span> <span
  m="3811240">guy</span> <span m="3811490">out</span> <span
  m="3811760">by</span> <span m="3811880">sending</span> <span
  m="3812290">a</span> <span m="3812330">message</span> <span
  m="3812740">saying</span> <span m="3813040">you're</span> <span
  m="3813150">not</span> <span m="3813310">my</span> <span
  m="3813420">parent.</span> <span m="3814680">In</span> <span
  m="3814780">the</span> <span m="3814850">synchronous</span> <span
  m="3815310">case,</span> <span m="3815600">he</span> <span
  m="3815700">would</span> <span m="3815830">just</span> <span
  m="3815990">know</span> <span m="3816210">that,</span> <span
  m="3816470">if</span> <span m="3816570">he</span> <span
  m="3816650">didn't</span> <span m="3816880">get</span> <span
  m="3816990">a</span> <span m="3817050">parent</span> <span
  m="3817370">message.</span> <span m="3817850">But</span> <span
  m="3818080">things</span> <span m="3818420">are</span> <span
  m="3818510">going</span> <span m="3818630">to</span> <span
  m="3818670">get</span> <span m="3818820">more</span> <span
  m="3818970">complicated.</span> <span m="3820970">So</span> <span
  m="3821160">we'll</span> <span m="3821300">send</span> <span
  m="3821570">parents</span> <span m="3822040">or</span> <span
  m="3822160">non</span> <span m="3822450">parent</span> <span
  m="3822810">responses</span> <span m="3823580">to</span> <span
  m="3823680">the</span> <span m="3823790">search</span> <span
  m="3824130">messages.</span></p><p><span m="3829770">Suppose</span> <span
  m="3830130">we</span> <span m="3830200">want</span> <span
  m="3830380">to</span> <span m="3830440">compute</span> <span
  m="3830870">the</span> <span m="3830960">distances</span> <span
  m="3831630">from</span> <span m="3831770">v0,</span> <span
  m="3832300">not</span> <span m="3832510">just</span> <span
  m="3832720">to</span> <span m="3832820">the</span> <span
  m="3832930">parents</span> <span m="3833360">are.</span> <span
  m="3833630">Well</span> <span m="3833740">that's</span> <span
  m="3833950">easy.</span> <span m="3835310">Everybody</span> <span
  m="3835770">can</span> <span m="3835950">just</span> <span
  m="3836320">record</span> <span m="3836750">its</span> <span
  m="3836940">distances,</span> <span m="3837265">as</span> <span
  m="3837590">well</span> <span m="3837890">as</span> <span
  m="3838190">its</span> <span m="3838610">parent</span> <span
  m="3839080">and</span> <span m="3840060">the</span> <span
  m="3840170">mark.</span> <span m="3841670">And</span> <span
  m="3842020">then</span> <span m="3842270">you</span> <span
  m="3842370">just</span> <span m="3842600">include</span> <span
  m="3843150">your</span> <span m="3843350">own</span> <span
  m="3843580">distance</span> <span m="3844140">value</span> <span
  m="3844670">in</span> <span m="3844830">your</span> <span
  m="3844980">search</span> <span m="3845330">message.</span> <span
  m="3846170">And</span> <span m="3846300">when</span> <span
  m="3846430">somebody</span> <span m="3846850">receives</span> <span
  m="3847390">a</span> <span m="3847460">search</span> <span
  m="3847810">message,</span> <span m="3849340">it</span> <span
  m="3849520">sets</span> <span m="3849820">its</span> <span
  m="3850020">own</span> <span m="3850850">distance</span> <span
  m="3851690">to</span> <span m="3851910">the</span> <span
  m="3852050">received</span> <span m="3852550">distance</span> <span
  m="3853060">plus</span> <span m="3853380">1.</span> <span
  m="3853820">So</span> <span m="3854080">we</span> <span m="3854200">can</span>
  <span m="3854350">just</span> <span m="3854590">keep</span> <span
  m="3854810">track</span> <span m="3855210">and</span> <span
  m="3855370">add</span> <span m="3855610">one</span> <span
  m="3855830">to</span> <span m="3855930">the</span> <span
  m="3856040">distance.</span> <span m="3857750">It's</span> <span
  m="3858100">easy</span> <span m="3858540">to</span> <span
  m="3859120">augment</span> <span m="3859560">this</span> <span
  m="3859750">algorithm</span> <span m="3860380">to</span> <span
  m="3860490">get</span> <span m="3860690">this</span> <span
  m="3860870">extra</span> <span m="3861220">information.</span></p><p><span
  m="3864630">All</span> <span m="3864720">right,</span> <span
  m="3864980">now</span> <span m="3865180">how</span> <span
  m="3865510">do</span> <span m="3865560">the</span> <span
  m="3865610">processes</span> <span m="3866130">know</span> <span
  m="3866380">when</span> <span m="3866510">this</span> <span
  m="3866670">is</span> <span m="3866790">all</span> <span
  m="3866940">finished?</span> <span m="3870140">So</span> <span
  m="3870310">everybody</span> <span m="3870690">was</span> <span
  m="3870820">able</span> <span m="3871050">to</span> <span
  m="3871120">output</span> <span m="3871650">parent.</span> <span
  m="3872120">I</span> <span m="3872213">know</span> <span
  m="3872306">who</span> <span m="3872400">my</span> <span
  m="3872615">parent</span> <span m="3872830">is.</span> <span
  m="3873010">But</span> <span m="3873100">how</span> <span
  m="3873280">does</span> <span m="3873440">anybody</span> <span
  m="3873880">know</span> <span m="3874200">when</span> <span
  m="3874380">the</span> <span m="3874520">entire</span> <span
  m="3876560">tree</span> <span m="3876870">has</span> <span
  m="3877030">been</span> <span m="3877440">produced?</span> <span
  m="3879770">Not</span> <span m="3880000">so</span> <span
  m="3880150">obvious.</span> <span m="3882820">So</span> <span
  m="3883070">in</span> <span m="3883360">some</span> <span
  m="3883590">settings,</span> <span m="3884030">you</span> <span
  m="3884150">might</span> <span m="3884850">know</span> <span
  m="3885290">an</span> <span m="3885420">upper</span> <span
  m="3885660">bound</span> <span m="3886270">on</span> <span
  m="3887270">the</span> <span m="3887580">depth</span> <span
  m="3887830">of</span> <span m="3887930">the</span> <span
  m="3888030">tree.</span> <span m="3888350">And</span> <span
  m="3888440">then</span> <span m="3888550">you</span> <span
  m="3888670">could</span> <span m="3888820">just</span> <span
  m="3889030">wait</span> <span m="3889550">for</span> <span
  m="3889660">that</span> <span m="3889850">number</span> <span
  m="3890180">of</span> <span m="3890280">rounds.</span> <span
  m="3891520">But</span> <span m="3891630">what</span> <span
  m="3891750">if</span> <span m="3891830">you</span> <span
  m="3891920">don't</span> <span m="3892190">know</span> <span
  m="3892370">that?</span> <span m="3892810">You</span> <span
  m="3892890">don't</span> <span m="3893120">know</span> <span
  m="3893280">anything</span> <span m="3893620">about</span> <span
  m="3893870">the</span> <span m="3893950">graph.</span> <span
  m="3894400">Nobody</span> <span m="3894710">knows.</span> <span
  m="3897360">So</span> <span m="3898140">let's</span> <span
  m="3898340">come</span> <span m="3898500">up</span> <span
  m="3898610">with</span> <span m="3898750">an</span> <span
  m="3898830">algorithm</span> <span m="3899460">for</span> <span
  m="3899800">process</span> <span m="3900460">i0,</span> <span
  m="3901340">the</span> <span m="3901440">root,</span> <span
  m="3902240">to</span> <span m="3903440">know</span> <span
  m="3903720">definitively</span> <span m="3904660">that</span> <span
  m="3904870">the</span> <span m="3904990">tree</span> <span
  m="3905450">has</span> <span m="3905650">been</span> <span
  m="3905850">completely</span> <span m="3906350">constructed.</span> <span
  m="3907770">Ideas?</span> <span m="3914100">You're</span> <span
  m="3914200">creating</span> <span m="3914670">this</span> <span
  m="3914870">by</span> <span m="3915000">search</span> <span
  m="3915370">messages.</span> <span m="3915890">How</span> <span
  m="3916130">is</span> <span m="3916270">i0</span> <span
  m="3916760">going</span> <span m="3917010">to</span> <span
  m="3917130">know</span> <span m="3917340">when</span> <span
  m="3917365">its</span> <span m="3917390">done?</span> <span
  m="3925873">Yeah.</span></p><p><span m="3926372">AUDIENCE: Every</span> <span
  m="3926621">time</span> <span m="3926871">you</span> <span
  m="3927037">mark</span> <span m="3927203">a</span> <span
  m="3927370">node,</span> <span m="3927869">the</span> <span
  m="3928368">node</span> <span m="3928534">can</span> <span
  m="3928700">send</span> <span m="3928867">a</span> <span
  m="3928966">message</span> <span m="3929066">back</span> <span
  m="3929166">to</span> <span m="3929266">its</span> <span
  m="3929366">parent,</span> <span m="3929865">saying</span> <span
  m="3930114">hi,</span> <span m="3930364">I've</span> <span
  m="3930530">been</span> <span m="3930696">marked.</span> <span
  m="3930863">Then</span> <span m="3931362">you</span> <span
  m="3931528">can</span> <span m="3931694">probably</span> <span
  m="3931861">get</span> <span m="3931960">all</span> <span
  m="3932060">the</span> <span m="3932160">way</span> <span
  m="3932260">back</span> <span m="3932360">to</span> <span
  m="3932526">the</span> <span m="3932692">root.</span> <span
  m="3932859">And</span> <span m="3933358">then</span> <span
  m="3933607">the</span> <span m="3933857">root</span> <span
  m="3933981">can</span> <span m="3934106">count</span> <span
  m="3934231">the</span> <span m="3934356">number</span> <span
  m="3934855">of--</span> <span m="3936352">actually,</span> <span
  m="3936601">no</span> <span m="3936851">if</span> <span m="3936975">the</span>
  <span m="3937100">root</span> <span m="3937225">doesn't--</span></p><p><span
  m="3937860">NANCY LYNCH: Root</span> <span m="3937920">doesn't</span> <span
  m="3938290">know</span> <span m="3938630">the</span> <span
  m="3938740">number</span> <span m="3939000">of</span> <span
  m="3939160">nodes.</span> <span m="3939400">So</span> <span
  m="3939920">that's</span> <span m="3940170">a</span> <span
  m="3940450">good</span> <span m="3940590">idea.</span></p><p><span
  m="3941563">AUDIENCE: If</span> <span m="3941809">you</span> <span
  m="3942056">don't</span> <span m="3942220">have</span> <span
  m="3942384">a</span> <span m="3942549">child,</span> <span
  m="3943042">you</span> <span m="3943206">can</span> <span
  m="3943370">tell</span> <span m="3943535">your</span> <span
  m="3943781">parent</span> <span m="3944028">that</span> <span
  m="3944521">you</span> <span m="3944767">don't</span> <span
  m="3945014">have</span> <span m="3945178">a</span> <span
  m="3945342">child.</span></p><p><span m="3948970">NANCY LYNCH: That's</span>
  <span m="3949330">a</span> <span m="3949360">good</span> <span
  m="3949510">start.</span> <span m="3949920">Was</span> <span
  m="3950220">there</span> <span m="3950290">another?</span> <span
  m="3951230">Yeah.</span></p><p><span m="3952171">AUDIENCE: More</span> <span
  m="3952416">generally,</span> <span m="3952662">you</span> <span
  m="3952907">just</span> <span m="3953153">send</span> <span
  m="3953316">a</span> <span m="3953480">signal</span> <span
  m="3953644">when</span> <span m="3954135">you</span> <span
  m="3954298">know</span> <span m="3954462">your</span> <span
  m="3954626">sub-tree</span> <span m="3954789">is</span> <span
  m="3954953">done.</span></p><p><span m="3956590">NANCY LYNCH: When</span>
  <span m="3956720">you</span> <span m="3956770">know</span> <span
  m="3956870">you're</span> <span m="3957020">sub-tree</span> <span
  m="3957550">is</span> <span m="3957730">done,</span> <span
  m="3958010">so</span> <span m="3958150">that</span> <span
  m="3958350">means</span> <span m="3958620">you're</span> <span
  m="3958730">going</span> <span m="3959010">to</span> <span
  m="3959110">be</span> <span m="3959670">communicating</span> <span
  m="3960230">something</span> <span m="3960770">up</span> <span
  m="3961050">the</span> <span m="3961140">tree.</span> <span
  m="3962170">Right,</span> <span m="3962620">so</span> <span
  m="3962780">that's</span> <span m="3963340">the</span> <span
  m="3963490">idea</span> <span m="3963790">that</span> <span
  m="3963890">you're</span> <span m="3964040">working</span> <span
  m="3964440">toward.</span> <span m="3965640">So</span> <span
  m="3965920">a</span> <span m="3966020">termination</span> <span
  m="3966650">algorithm</span> <span m="3967140">to</span> <span
  m="3967330">inform</span> <span m="3967980">i0</span> <span
  m="3968980">when</span> <span m="3969160">the</span> <span
  m="3969250">tree</span> <span m="3969510">is</span> <span
  m="3969670">completely</span> <span m="3970180">constructed.</span> <span
  m="3971550">So</span> <span m="3971730">let's</span> <span
  m="3972350">say</span> <span m="3972530">that</span> <span
  m="3972690">the</span> <span m="3972770">search</span> <span
  m="3973110">messages</span> <span m="3973680">get</span> <span
  m="3973880">their</span> <span m="3974370">responses.</span> <span
  m="3975080">So</span> <span m="3975270">everybody</span> <span
  m="3975660">knows</span> <span m="3976120">which</span> <span
  m="3976470">nodes</span> <span m="3976970">are</span> <span
  m="3977270">their,</span> <span m="3977700">which</span> <span
  m="3978010">neighbors</span> <span m="3978480">are</span> <span
  m="3978685">its</span> <span m="3978890">children,</span> <span
  m="3979430">and</span> <span m="3979570">which</span> <span
  m="3979780">are</span> <span m="3979890">not.</span> <span
  m="3982290">So</span> <span m="3982460">suppose</span> <span
  m="3982970">a</span> <span m="3983070">node</span> <span
  m="3983400">has</span> <span m="3983650">gotten</span> <span
  m="3983950">responses</span> <span m="3984810">to</span> <span
  m="3984980">all</span> <span m="3985160">of</span> <span
  m="3985300">its</span> <span m="3985810">search</span> <span
  m="3986150">messages,</span> <span m="3986780">knows</span> <span
  m="3987250">who</span> <span m="3987360">all</span> <span
  m="3987530">its</span> <span m="3987720">children</span> <span
  m="3988120">are.</span></p><p><span m="3990830">Now</span> <span
  m="3991350">the</span> <span m="3991635">leaves</span> <span
  m="3991920">in</span> <span m="3992070">this</span> <span
  m="3992290">tree</span> <span m="3992800">are</span> <span
  m="3992980">going</span> <span m="3993260">to</span> <span
  m="3993360">know</span> <span m="3993690">that</span> <span
  m="3993880">they're</span> <span m="3994060">leaves.</span> <span
  m="3994730">How</span> <span m="3994890">do</span> <span
  m="3994980">they</span> <span m="3995130">know</span> <span
  m="3995370">that?</span> <span m="3997880">Propagating</span> <span
  m="3998590">all</span> <span m="3998820">these</span> <span
  m="3999060">search</span> <span m="3999460">messages,</span> <span
  m="4000270">and</span> <span m="4000480">I'm</span> <span m="4000690">a</span>
  <span m="4000770">leaf.</span> <span m="4001860">How</span> <span
  m="4001980">do</span> <span m="4002100">I</span> <span m="4002170">know</span>
  <span m="4002380">I'm</span> <span m="4002455">a</span> <span
  m="4002530">leaf?</span></p><p><span m="4003668">AUDIENCE: You</span> <span
  m="4003774">can't</span> <span m="4003880">have</span> <span
  m="4003986">children.</span></p><p><span m="4004940">NANCY LYNCH: Yeah,</span>
  <span m="4005930">you</span> <span m="4006040">send</span> <span
  m="4006330">all</span> <span m="4006430">these</span> <span
  m="4006590">search</span> <span m="4006860">messages,</span> <span
  m="4007410">and</span> <span m="4007490">everybody</span> <span
  m="4007810">says,</span> <span m="4008280">sorry</span> <span
  m="4010300">you're</span> <span m="4010420">not</span> <span
  m="4010570">my</span> <span m="4010660">parent.</span> <span
  m="4011810">So</span> <span m="4012160">you</span> <span
  m="4012570">know</span> <span m="4012670">you</span> <span
  m="4012720">have</span> <span m="4012770">no</span> <span
  m="4012980">children</span> <span m="4013380">because</span> <span
  m="4013770">of</span> <span m="4013930">the</span> <span
  m="4014200">kind</span> <span m="4014390">of</span> <span
  m="4014440">responses</span> <span m="4014980">you</span> <span
  m="4015120">get.</span> <span m="4017140">So</span> <span
  m="4017280">now</span> <span m="4017420">we're</span> <span
  m="4017530">going</span> <span m="4017770">to</span> <span
  m="4017840">use</span> <span m="4018250">what</span> <span
  m="4018440">we</span> <span m="4018540">call</span> <span m="4018940">a</span>
  <span m="4019070">convergecast</span> <span m="4020430">strategy.</span> <span
  m="4021300">Broadcast</span> <span m="4022010">is</span> <span
  m="4022110">sending</span> <span m="4022470">things</span> <span
  m="4022760">out.</span> <span m="4023160">Convergecast</span> <span
  m="4024150">is</span> <span m="4024640">fanning</span> <span
  m="4025020">in</span> <span m="4025270">information</span> <span
  m="4026060">back</span> <span m="4026320">to</span> <span
  m="4026420">the</span> <span m="4026550">top</span> <span
  m="4026830">of</span> <span m="4026980">the</span> <span
  m="4027100">tree.</span> <span m="4029560">So</span> <span
  m="4029710">the</span> <span m="4029810">convergecast</span> <span
  m="4031070">would</span> <span m="4031200">say,</span> <span
  m="4031590">all</span> <span m="4031690">right,</span> <span
  m="4031800">so</span> <span m="4031880">the</span> <span
  m="4031970">leaves</span> <span m="4032950">would</span> <span
  m="4033230">send</span> <span m="4034030">a</span> <span
  m="4034070">message</span> <span m="4034500">to</span> <span
  m="4034590">their</span> <span m="4034790">parents</span> <span
  m="4035200">saying</span> <span m="4035410">they're</span> <span
  m="4035530">done.</span></p><p><span m="4038060">Now</span> <span
  m="4039100">if</span> <span m="4039290">I'm</span> <span
  m="4039470">some</span> <span m="4040150">node</span> <span
  m="4040440">in</span> <span m="4040520">the</span> <span
  m="4040580">middle</span> <span m="4040870">of</span> <span
  m="4041020">the</span> <span m="4041100">tree,</span> <span
  m="4043600">how</span> <span m="4043770">do</span> <span m="4043900">I</span>
  <span m="4043970">know</span> <span m="4044220">I'm</span> <span
  m="4044460">done?</span> <span m="4044780">Well</span> <span
  m="4045010">it's</span> <span m="4045210">what</span> <span
  m="4046100">you</span> <span m="4046270">said.</span> <span
  m="4048420">You</span> <span m="4048570">know</span> <span
  m="4049130">that</span> <span m="4050670">you</span> <span
  m="4050980">can</span> <span m="4051130">figure</span> <span
  m="4051450">out</span> <span m="4051590">when</span> <span
  m="4051750">your</span> <span m="4051880">entire</span> <span
  m="4052270">sub-tree</span> <span m="4052810">is</span> <span
  m="4052990">done.</span> <span m="4053990">Well</span> <span
  m="4054290">first</span> <span m="4054600">of</span> <span
  m="4054710">all,</span> <span m="4054890">you</span> <span
  m="4055080">have</span> <span m="4055290">to</span> <span
  m="4055410">know</span> <span m="4055760">your</span> <span
  m="4055970">children</span> <span m="4056460">are.</span> <span
  m="4057750">It's</span> <span m="4057910">kind</span> <span
  m="4058120">of</span> <span m="4058200">a</span> <span m="4058280">two</span>
  <span m="4058360">stage</span> <span m="4058760">process.</span> <span
  m="4059760">You</span> <span m="4059900">have</span> <span
  m="4060040">to</span> <span m="4060150">know</span> <span
  m="4061670">who</span> <span m="4061850">your</span> <span
  m="4062020">children</span> <span m="4062440">are,</span> <span
  m="4062610">by</span> <span m="4062750">having</span> <span
  m="4063040">received</span> <span m="4063440">responses</span> <span
  m="4064100">to</span> <span m="4064260">all</span> <span
  m="4064400">your</span> <span m="4064570">search</span> <span
  m="4064950">messages.</span> <span m="4066530">And</span> <span
  m="4067170">you</span> <span m="4067310">wait</span> <span
  m="4067580">to</span> <span m="4067690">receive</span> <span
  m="4067915">done</span> <span m="4068140">messages</span> <span
  m="4068990">from</span> <span m="4069180">all</span> <span
  m="4069410">of</span> <span m="4069520">your</span> <span
  m="4069670">actual</span> <span m="4070140">children.</span> <span
  m="4071540">So</span> <span m="4071700">if</span> <span m="4071770">I'm</span>
  <span m="4071910">sitting</span> <span m="4072190">in</span> <span
  m="4072230">the</span> <span m="4072310">middle</span> <span
  m="4072540">of</span> <span m="4072630">the</span> <span
  m="4072720">tree,</span> <span m="4073080">and</span> <span
  m="4073220">I've</span> <span m="4073350">got</span> <span
  m="4074340">done</span> <span m="4074560">messages</span> <span
  m="4075090">from</span> <span m="4075260">all</span> <span
  m="4075370">my</span> <span m="4075500">children,</span> <span
  m="4076020">I</span> <span m="4076130">know</span> <span m="4076330">my</span>
  <span m="4076470">whole</span> <span m="4076680">sub-tree</span> <span
  m="4077170">is</span> <span m="4077320">done.</span> <span
  m="4077850">Then</span> <span m="4078170">I</span> <span
  m="4078230">can</span> <span m="4078430">send</span> <span
  m="4078630">the</span> <span m="4078710">done</span> <span
  m="4078880">message</span> <span m="4079345">to</span> <span
  m="4079810">my</span> <span m="4080042">parent.</span> <span
  m="4082140">Got</span> <span m="4082290">that?</span> <span
  m="4084180">That's</span> <span m="4084620">how</span> <span
  m="4084800">convergecast</span> <span m="4085570">works.</span> <span
  m="4085870">And</span> <span m="4086310">when</span> <span
  m="4086480">it</span> <span m="4086560">reaches</span> <span
  m="4086900">the</span> <span m="4087020">top,</span> <span
  m="4087760">if</span> <span m="4087950">i0</span> <span
  m="4089690">knows</span> <span m="4089890">who</span> <span
  m="4090050">its</span> <span m="4090240">children</span> <span
  m="4090640">are,</span> <span m="4091130">and</span> <span
  m="4091320">it</span> <span m="4091410">receives</span> <span
  m="4091840">done</span> <span m="4092040">messages</span> <span
  m="4092580">from</span> <span m="4092770">all</span> <span
  m="4092950">its</span> <span m="4093180">children,</span> <span
  m="4093680">it</span> <span m="4093830">knows</span> <span
  m="4094040">the</span> <span m="4094110">whole</span> <span
  m="4094320">tree</span> <span m="4094580">is</span> <span
  m="4094730">done.</span> <span m="4095540">So</span> <span
  m="4095700">it</span> <span m="4095830">can</span> <span
  m="4096470">output</span> <span m="4096880">that</span> <span
  m="4096990">the</span> <span m="4097069">tree</span> <span
  m="4097500">construction</span> <span m="4098120">is</span> <span
  m="4098290">complete.</span> <span m="4100100">And</span> <span
  m="4100260">it</span> <span m="4100290">could</span> <span
  m="4100470">tell</span> <span m="4100830">the</span> <span
  m="4100990">others</span> <span m="4101550">by</span> <span
  m="4102050">sending</span> <span m="4102420">a</span> <span
  m="4102460">message</span> <span m="4102870">down</span> <span
  m="4103100">the</span> <span m="4103200">tree,</span> <span
  m="4103979">so</span> <span m="4104109">they</span> <span
  m="4104270">all</span> <span m="4104410">know</span> <span
  m="4104859">as</span> <span m="4104984">well.</span> <span
  m="4105859">Questions?</span></p><p><span m="4107194">AUDIENCE:
  Wouldn't</span> <span m="4108625">i0</span> <span m="4109102">be</span> <span
  m="4109579">the</span> <span m="4110056">last</span> <span
  m="4110294">one</span> <span m="4110533">to</span> <span
  m="4110771">know?</span></p><p><span m="4112920">NANCY LYNCH: He'd</span>
  <span m="4113000">be</span> <span m="4113100">the</span> <span
  m="4113189">last</span> <span m="4113479">one.</span> <span
  m="4114090">No,</span> <span m="4114590">he'd</span> <span
  m="4114720">be</span> <span m="4115350">the</span> <span
  m="4115450">first</span> <span m="4115800">one</span> <span
  m="4116000">to</span> <span m="4116109">know</span> <span
  m="4116340">that</span> <span m="4116470">the</span> <span
  m="4116540">whole</span> <span m="4116910">tree</span> <span
  m="4117210">is</span> <span m="4117390">complete.</span> <span
  m="4118670">Everybody</span> <span m="4119100">else</span> <span
  m="4119310">knows</span> <span m="4119620">when</span> <span
  m="4119740">their</span> <span m="4119899">sub-tree</span> <span
  m="4120180">is</span> <span m="4120600">complete.</span> <span
  m="4121450">So</span> <span m="4121700">i0</span> <span
  m="4122240">still</span> <span m="4122540">has</span> <span
  m="4122790">to</span> <span m="4123229">now</span> <span
  m="4123470">send</span> <span m="4123729">another</span> <span
  m="4124040">message</span> <span m="4124460">down</span> <span
  m="4124810">the</span> <span m="4124920">tree</span> <span
  m="4125410">to</span> <span m="4125740">tell</span> <span
  m="4125939">everyone</span> <span m="4126229">else</span> <span
  m="4126420">the</span> <span m="4126529">entire</span> <span
  m="4126920">tree</span> <span m="4127170">is</span> <span
  m="4127330">complete.</span> <span m="4128529">Is</span> <span
  m="4128609">there</span> <span m="4128710">another</span> <span
  m="4128920">question?</span> <span m="4132300">All</span> <span
  m="4132380">right</span> <span m="4132590">so</span> <span
  m="4132700">this</span> <span m="4133220">isn't</span> <span
  m="4133460">showing</span> <span m="4133750">that.</span> <span
  m="4133830">This</span> <span m="4134010">is</span> <span
  m="4134140">just</span> <span m="4134330">showing</span> <span
  m="4134939">done</span> <span m="4135130">messages,</span> <span
  m="4135620">which</span> <span m="4135800">are</span> <span
  m="4135990">actually</span> <span m="4136279">going</span> <span
  m="4136500">in</span> <span m="4136565">the</span> <span
  m="4136630">opposite</span> <span m="4137069">direction</span> <span
  m="4137630">from</span> <span m="4137790">these</span> <span
  m="4137990">edges,</span> <span m="4138560">going</span> <span
  m="4138819">up</span> <span m="4138950">the</span> <span
  m="4139029">tree.</span> <span m="4139390">But</span> <span
  m="4140029">you</span> <span m="4140189">can</span> <span
  m="4140770">just</span> <span m="4140970">see</span> <span
  m="4141149">how</span> <span m="4141270">they</span> <span
  m="4141380">propagate</span> <span m="4141890">up</span> <span
  m="4142060">until</span> <span m="4143450">the</span> <span
  m="4143560">roots</span> <span m="4143790">says</span> <span
  m="4144010">done.</span> <span m="4144670">No</span> <span
  m="4144790">big</span> <span m="4144939">deal.</span></p><p><span
  m="4148149">Complexity</span> <span m="4148870">for</span> <span
  m="4149140">termination.</span> <span m="4150819">Well</span> <span
  m="4150930">it</span> <span m="4151029">just</span> <span
  m="4151260">takes</span> <span m="4151950">at</span> <span
  m="4152029">most</span> <span m="4152319">diameter</span> <span
  m="4152870">rounds</span> <span m="4153279">and</span> <span
  m="4153569">n</span> <span m="4153849">messages</span> <span
  m="4154130">for</span> <span m="4154270">this</span> <span
  m="4154500">done</span> <span m="4154689">information</span> <span
  m="4155380">to</span> <span m="4155979">come</span> <span
  m="4156200">up</span> <span m="4156319">to</span> <span m="4156420">the</span>
  <span m="4156540">top,</span> <span m="4156880">once</span> <span
  m="4157130">the</span> <span m="4157210">tree</span> <span
  m="4157490">actually</span> <span m="4157960">is</span> <span
  m="4158109">finished.</span> <span m="4159229">Because</span> <span
  m="4159390">now</span> <span m="4159510">you're</span> <span
  m="4159640">just</span> <span m="4159790">sending</span> <span
  m="4160050">messages</span> <span m="4161130">on</span> <span
  m="4161410">the</span> <span m="4162250">paths</span> <span
  m="4162700">in</span> <span m="4162838">this</span> <span
  m="4162976">tree,</span> <span m="4163939">which</span> <span
  m="4164180">are</span> <span m="4164660">only,</span> <span
  m="4165130">at</span> <span m="4165319">most,</span> <span
  m="4165550">diameter</span> <span m="4166689">in</span> <span
  m="4166840">length.</span> <span m="4169029">And</span> <span
  m="4169300">this</span> <span m="4169460">is</span> <span
  m="4169600">just</span> <span m="4169859">the</span> <span
  m="4170550">process</span> <span m="4170960">i0</span> <span
  m="4171359">can</span> <span m="4171520">tell</span> <span
  m="4171770">everybody</span> <span m="4172210">else.</span> <span
  m="4172920">It</span> <span m="4173200">doesn't</span> <span
  m="4173479">take</span> <span m="4173670">very</span> <span
  m="4173890">long</span> <span m="4174130">either.</span></p><p><span
  m="4177260">Applications,</span> <span m="4178130">well</span> <span
  m="4179020">suppose</span> <span m="4179500">you</span> <span
  m="4179630">construct</span> <span m="4180160">a</span> <span
  m="4180220">tree</span> <span m="4180490">like</span> <span
  m="4180740">this.</span> <span m="4181149">And</span> <span
  m="4181330">process</span> <span m="4181750">i0</span> <span
  m="4182189">now</span> <span m="4182380">wants</span> <span
  m="4182630">to</span> <span m="4182689">use</span> <span m="4182960">it</span>
  <span m="4183720">to</span> <span m="4183859">communicate.</span> <span
  m="4184460">It</span> <span m="4184500">wants</span> <span
  m="4184729">to</span> <span m="4184819">send</span> <span m="4185140">a</span>
  <span m="4185180">whole</span> <span m="4185380">batch</span> <span
  m="4185710">of</span> <span m="4185800">messages</span> <span
  m="4186450">to</span> <span m="4186649">all</span> <span
  m="4186899">the</span> <span m="4187069">other</span> <span
  m="4187260">nodes.</span> <span m="4187819">It</span> <span
  m="4187939">can</span> <span m="4188029">just</span> <span
  m="4188229">send</span> <span m="4188450">them</span> <span
  m="4188560">now</span> <span m="4188750">on</span> <span
  m="4188899">the</span> <span m="4189000">tree.</span> <span
  m="4189990">It's</span> <span m="4190090">an</span> <span
  m="4190140">easy</span> <span m="4190410">way</span> <span
  m="4190720">to</span> <span m="4191420">make</span> <span
  m="4191609">sure</span> <span m="4191819">messages</span> <span
  m="4192390">reach</span> <span m="4192790">everybody</span> <span
  m="4193270">else</span> <span m="4193529">in</span> <span
  m="4193630">the</span> <span m="4193700">network.</span> <span
  m="4194240">Just</span> <span m="4194480">send</span> <span
  m="4194730">them</span> <span m="4194890">on</span> <span
  m="4195130">the</span> <span m="4195280">edges</span> <span
  m="4195790">of</span> <span m="4196040">the</span> <span
  m="4196510">breadth-first</span> <span m="4196940">spanning</span> <span
  m="4197310">tree.</span> <span m="4199580">So</span> <span
  m="4200100">now</span> <span m="4200320">the</span> <span
  m="4200400">messages,</span> <span m="4201820">each</span> <span
  m="4202460">individual</span> <span m="4203050">message</span> <span
  m="4203610">takes</span> <span m="4204010">at</span> <span
  m="4204210">most</span> <span m="4205530">n</span> <span
  m="4206200">message</span> <span m="4206580">instances</span> <span
  m="4207370">along</span> <span m="4207780">the</span> <span
  m="4208070">edges</span> <span m="4208420">of</span> <span
  m="4208520">the</span> <span m="4208610">tree,</span> <span
  m="4208930">because</span> <span m="4209140">you</span> <span
  m="4209310">only</span> <span m="4209490">have</span> <span
  m="4209650">to</span> <span m="4209760">traverse</span> <span
  m="4210470">the</span> <span m="4210610">tree</span> <span
  m="4210850">edges.</span> <span m="4211570">No</span> <span
  m="4211740">more</span> <span m="4212340">dependence</span> <span
  m="4212930">on</span> <span m="4213100">the</span> <span
  m="4213200">total</span> <span m="4213490">number</span> <span
  m="4213800">of</span> <span m="4213870">edges</span> <span
  m="4214190">in</span> <span m="4214280">the</span> <span
  m="4214360">network.</span> <span m="4215920">And</span> <span
  m="4216100">in</span> <span m="4216200">fact,</span> <span
  m="4216870">you</span> <span m="4217010">can</span> <span
  m="4217170">save</span> <span m="4217470">time</span> <span
  m="4217870">by</span> <span m="4218060">pipelining</span> <span
  m="4219000">a</span> <span m="4219090">series</span> <span
  m="4219500">of</span> <span m="4219600">messages.</span> <span
  m="4220280">So</span> <span m="4220460">you</span> <span
  m="4220590">can</span> <span m="4220760">send</span> <span
  m="4221050">them</span> <span m="4221490">one</span> <span
  m="4221790">round</span> <span m="4222110">after</span> <span
  m="4222410">the</span> <span m="4222910">other.</span></p><p><span
  m="4228180">The</span> <span m="4228270">other</span> <span
  m="4228360">way,</span> <span m="4228600">suppose</span> <span
  m="4228990">you</span> <span m="4229350">want</span> <span
  m="4229530">to</span> <span m="4229700">compute</span> <span
  m="4230190">something</span> <span m="4230590">globally.</span> <span
  m="4231740">Suppose</span> <span m="4232100">everybody</span> <span
  m="4232580">starts</span> <span m="4233060">with</span> <span
  m="4233270">some</span> <span m="4233520">initial</span> <span
  m="4233910">value.</span> <span m="4234870">And</span> <span
  m="4235290">process</span> <span m="4235720">i0</span> <span
  m="4236290">is</span> <span m="4236480">going</span> <span
  m="4236790">to</span> <span m="4237730">try</span> <span m="4237970">to</span>
  <span m="4238130">determine</span> <span m="4238590">the</span> <span
  m="4238670">value</span> <span m="4239140">of</span> <span
  m="4239240">some</span> <span m="4239490">function</span> <span
  m="4240660">of</span> <span m="4240870">everybody's</span> <span
  m="4241840">initial</span> <span m="4242220">value,</span> <span
  m="4242650">like</span> <span m="4242920">the</span> <span
  m="4242990">minimum</span> <span m="4243520">or</span> <span
  m="4243700">maximum</span> <span m="4244360">or</span> <span
  m="4244480">the</span> <span m="4244610">sum</span> <span
  m="4244910">or</span> <span m="4245210">anything.</span> <span
  m="4246530">Well</span> <span m="4246680">you</span> <span
  m="4246850">can</span> <span m="4247040">do</span> <span
  m="4247230">this</span> <span m="4247540">while</span> <span
  m="4247800">convergecasting</span> <span m="4248990">on</span> <span
  m="4249210">an</span> <span m="4249350">already</span> <span
  m="4249880">built</span> <span m="4251240">BFS</span> <span
  m="4251900">tree.</span> <span m="4252910">So</span> <span
  m="4253170">everybody</span> <span m="4253750">can</span> <span
  m="4254080">just</span> <span m="4254310">send</span> <span
  m="4254830">their</span> <span m="4255010">information</span> <span
  m="4255740">up</span> <span m="4255950">the</span> <span
  m="4256050">tree,</span> <span m="4256470">and</span> <span
  m="4256890">i0</span> <span m="4257440">can</span> <span
  m="4257620">collect</span> <span m="4257990">it</span> <span
  m="4258090">all.</span> <span m="4258290">In</span> <span
  m="4258460">general,</span> <span m="4259180">you</span> <span
  m="4259300">can</span> <span m="4259420">accumulate,</span> <span
  m="4260810">you</span> <span m="4260933">can</span> <span
  m="4261056">do</span> <span m="4261180">data</span> <span
  m="4261500">aggregation</span> <span m="4262370">as</span> <span
  m="4262560">you</span> <span m="4262650">go</span> <span m="4262890">up</span>
  <span m="4263100">the</span> <span m="4263190">paths</span> <span
  m="4263560">of</span> <span m="4263680">the</span> <span
  m="4263770">tree.</span> <span m="4264610">So</span> <span
  m="4264800">the</span> <span m="4266990">message</span> <span
  m="4267370">size</span> <span m="4267660">doesn't</span> <span
  m="4267950">blow</span> <span m="4268170">up.</span></p><p><span
  m="4269910">So</span> <span m="4270040">if</span> <span m="4270100">you</span>
  <span m="4270180">want,</span> <span m="4270420">for</span> <span
  m="4270610">example,</span> <span m="4270950">the</span> <span
  m="4271040">sum</span> <span m="4271920">of</span> <span
  m="4272140">everybody's</span> <span m="4272710">values,</span> <span
  m="4273520">everybody</span> <span m="4274020">just</span> <span
  m="4274230">sends</span> <span m="4274425">their</span> <span
  m="4274620">values</span> <span m="4275080">up</span> <span
  m="4275250">in</span> <span m="4275330">a</span> <span
  m="4275410">convergecast.</span> <span m="4276260">And</span> <span
  m="4276360">each</span> <span m="4276600">node</span> <span
  m="4276820">computes</span> <span m="4277240">the</span> <span
  m="4277330">sum</span> <span m="4278160">of</span> <span
  m="4278290">all</span> <span m="4278390">the</span> <span
  m="4278450">values</span> <span m="4278890">in</span> <span
  m="4279000">its</span> <span m="4279160">sub-tree.</span> <span
  m="4281550">So</span> <span m="4281690">this</span> <span
  m="4281820">is</span> <span m="4281920">pretty</span> <span
  m="4282160">efficient.</span> <span m="4284100">Make</span> <span
  m="4284250">sense?</span> <span m="4286850">I'm</span> <span
  m="4287000">going</span> <span m="4287120">to</span> <span
  m="4287170">skip</span> <span m="4287440">this.</span> <span
  m="4287680">But</span> <span m="4287810">you</span> <span
  m="4287920">could</span> <span m="4288060">do</span> <span
  m="4288200">leader</span> <span m="4288460">election</span> <span
  m="4289010">in</span> <span m="4289090">a</span> <span
  m="4289170">general</span> <span m="4289560">graph,</span> <span
  m="4290110">If</span> <span m="4290180">you</span> <span
  m="4290310">don't</span> <span m="4290620">have</span> <span
  m="4291460">a</span> <span m="4291600">leader,</span> <span
  m="4292010">already,</span> <span m="4292470">i0</span> <span
  m="4292980">by</span> <span m="4293090">having</span> <span
  m="4293360">everybody</span> <span m="4293860">run</span> <span
  m="4294660">a</span> <span m="4294830">breadth-first</span> <span
  m="4295290">search</span> <span m="4295550">in</span> <span
  m="4295640">parallel.</span> <span m="4296160">But</span> <span
  m="4296390">we'll</span> <span m="4296520">skip</span> <span
  m="4296770">that.</span> <span m="4297470">Because</span> <span
  m="4297710">I</span> <span m="4297760">just</span> <span
  m="4297960">wanted</span> <span m="4298210">to</span> <span
  m="4298290">have</span> <span m="4298580">a</span> <span
  m="4298710">couple</span> <span m="4298960">of</span> <span
  m="4299040">minutes</span> <span m="4299400">to</span> <span
  m="4299500">start</span> <span m="4300100">the</span> <span
  m="4300180">last</span> <span m="4300490">topic,</span> <span
  m="4300890">and</span> <span m="4300970">we'll</span> <span
  m="4301080">pick</span> <span m="4301300">it</span> <span
  m="4301410">up</span> <span m="4301570">next</span> <span
  m="4301880">time.</span></p><p><span m="4303900">So</span> <span
  m="4304020">it's</span> <span m="4304120">the</span> <span
  m="4304250">obvious</span> <span m="4304690">extension.</span> <span
  m="4307060">Instead</span> <span m="4307440">of</span> <span
  m="4307530">just</span> <span m="4307790">breadth-first</span> <span
  m="4308390">search</span> <span m="4308750">trees,</span> <span
  m="4309350">let's</span> <span m="4309660">put</span> <span
  m="4309850">weights</span> <span m="4310210">on</span> <span
  m="4310320">the</span> <span m="4310460">edges</span> <span
  m="4311290">and</span> <span m="4311520">try</span> <span
  m="4311810">to</span> <span m="4312100">compute</span> <span
  m="4312680">shortest</span> <span m="4313190">paths</span> <span
  m="4313620">trees</span> <span m="4315460">in</span> <span
  m="4315560">terms</span> <span m="4315860">of</span> <span
  m="4315960">the</span> <span m="4316070">total</span> <span
  m="4316830">weight</span> <span m="4317170">of</span> <span
  m="4317657">the</span> <span m="4318144">path.</span> <span
  m="4321560">So</span> <span m="4321710">we're</span> <span
  m="4321770">going</span> <span m="4322040">to</span> <span
  m="4322240">add</span> <span m="4322750">weights.</span> <span
  m="4324350">It's</span> <span m="4324420">an</span> <span
  m="4324490">undirected</span> <span m="4325050">graph.</span> <span
  m="4325440">So</span> <span m="4325950">it's</span> <span
  m="4326120">just</span> <span m="4326320">a</span> <span
  m="4326380">weight</span> <span m="4326680">for</span> <span
  m="4326850">each</span> <span m="4327100">undirected</span> <span
  m="4327710">edge.</span> <span m="4331290">I'll</span> <span
  m="4331730">still</span> <span m="4332010">have</span> <span
  m="4332490">a</span> <span m="4332740">starting</span> <span
  m="4333240">node,</span> <span m="4335990">vertex</span> <span
  m="4336550">v0</span> <span m="4337180">with</span> <span
  m="4337400">process</span> <span m="4337890">i0.</span> <span
  m="4339160">Still</span> <span m="4339500">have</span> <span
  m="4339750">unique</span> <span m="4340110">identifiers.</span> <span
  m="4342110">And</span> <span m="4342230">I'll</span> <span
  m="4342350">assume</span> <span m="4342650">the</span> <span
  m="4342740">processes</span> <span m="4343450">know</span> <span
  m="4343770">who</span> <span m="4343840">their</span> <span
  m="4343910">neighbors</span> <span m="4344360">are.</span> <span
  m="4344670">And</span> <span m="4344810">they</span> <span
  m="4344900">know</span> <span m="4345100">the</span> <span
  m="4345220">weights</span> <span m="4345710">of</span> <span
  m="4346020">the</span> <span m="4346700">incident</span> <span
  m="4347270">edges,</span> <span m="4347930">their</span> <span
  m="4348150">adjacent</span> <span m="4348700">edges.</span> <span
  m="4349940">But</span> <span m="4350070">otherwise</span> <span
  m="4350480">they</span> <span m="4350570">don't</span> <span
  m="4350730">need</span> <span m="4350900">to</span> <span
  m="4351000">know</span> <span m="4351200">anything</span> <span
  m="4351590">else</span> <span m="4351830">about</span> <span
  m="4352130">the</span> <span m="4352200">graph.</span></p><p><span
  m="4354590">So</span> <span m="4354780">again,</span> <span
  m="4355050">this</span> <span m="4355190">is</span> <span m="4355320">a</span>
  <span m="4355380">familiar</span> <span m="4355910">problem.</span> <span
  m="4356890">But</span> <span m="4357020">we're</span> <span
  m="4357150">looking</span> <span m="4357530">at</span> <span
  m="4357710">it</span> <span m="4357820">in</span> <span m="4357900">a</span>
  <span m="4357940">very</span> <span m="4358270">different</span> <span
  m="4358640">way,</span> <span m="4358990">by</span> <span
  m="4359130">distributing</span> <span m="4359880">it.</span> <span
  m="4363360">so</span> <span m="4363790">the</span> <span
  m="4363870">processes</span> <span m="4364430">are</span> <span
  m="4364520">supposed</span> <span m="4364980">to</span> <span
  m="4365140">compute</span> <span m="4365610">a</span> <span
  m="4365690">shortest</span> <span m="4366210">paths</span> <span
  m="4366670">tree,</span> <span m="4367640">in</span> <span
  m="4367810">the</span> <span m="4367900">sense</span> <span
  m="4368510">that</span> <span m="4369110">everybody</span> <span
  m="4369670">should</span> <span m="4369960">output</span> <span
  m="4370490">its</span> <span m="4370690">parent</span> <span
  m="4371160">in</span> <span m="4371260">the</span> <span
  m="4371370">tree.</span> <span m="4372050">And</span> <span
  m="4372530">let's</span> <span m="4372720">say</span> <span
  m="4372880">they</span> <span m="4373050">output</span> <span
  m="4373400">the</span> <span m="4373490">distance</span> <span
  m="4374170">as</span> <span m="4374330">well,</span> <span
  m="4375440">the</span> <span m="4375710">weighted</span> <span
  m="4375900">distance</span> <span m="4376680">from</span> <span
  m="4377990">the</span> <span m="4378110">root</span> <span
  m="4378340">node.</span> <span m="4383540">So</span> <span
  m="4384130">this</span> <span m="4384350">is</span> <span
  m="4384740">called</span> <span m="4385070">Bellman-Ford's</span> <span
  m="4386070">algorithm.</span> <span m="4386920">Again</span> <span
  m="4387390">it's</span> <span m="4388640">got</span> <span
  m="4388685">the</span> <span m="4388730">same</span> <span
  m="4389020">name</span> <span m="4389280">in</span> <span
  m="4389350">the</span> <span m="4389450">distributed</span> <span
  m="4390060">setting.</span> <span m="4391970">The</span> <span
  m="4392050">Bellman-Ford</span> <span m="4392630">shortest</span> <span
  m="4393100">paths</span> <span m="4393470">algorithm.</span></p><p><span
  m="4397230">So</span> <span m="4397510">everybody</span> <span
  m="4398010">is</span> <span m="4398150">keeping</span> <span
  m="4398530">track</span> <span m="4398960">of</span> <span
  m="4399150">their</span> <span m="4399620">current</span> <span
  m="4400360">best</span> <span m="4400710">distance</span> <span
  m="4401250">that</span> <span m="4401410">they</span> <span
  m="4401520">know,</span> <span m="4402680">and</span> <span
  m="4402950">their</span> <span m="4403070">parent.</span> <span
  m="4403630">And</span> <span m="4403830">they</span> <span
  m="4403920">know</span> <span m="4404120">their</span> <span
  m="4404310">unique</span> <span m="4404640">identifier.</span> <span
  m="4407270">And</span> <span m="4407400">here's</span> <span
  m="4407630">how</span> <span m="4407760">the</span> <span
  m="4407890">algorithm</span> <span m="4408420">works.</span> <span
  m="4409040">This</span> <span m="4409270">will</span> <span
  m="4409420">look</span> <span m="4409610">familiar</span> <span
  m="4410160">from</span> <span m="4411000">when</span> <span
  m="4411170">you</span> <span m="4411270">had</span> <span
  m="4411690">Bellman-Ford</span> <span m="4412610">earlier.</span> <span
  m="4414130">At</span> <span m="4414280">every</span> <span
  m="4414560">round,</span> <span m="4416530">everybody</span> <span
  m="4417160">is</span> <span m="4417320">going</span> <span
  m="4417650">to</span> <span m="4418170">send</span> <span
  m="4418490">its</span> <span m="4418750">distance</span> <span
  m="4419380">to</span> <span m="4419550">its</span> <span
  m="4419720">neighbors.</span> <span m="4420940">Instead</span> <span
  m="4421200">of</span> <span m="4421260">just</span> <span
  m="4421430">sending</span> <span m="4421690">a</span> <span
  m="4421750">search</span> <span m="4422060">message,</span> <span
  m="4422460">now</span> <span m="4422690">it</span> <span
  m="4422810">will</span> <span m="4422940">send</span> <span
  m="4423170">its</span> <span m="4423300">actual</span> <span
  m="4423710">distance</span> <span m="4424200">information.</span> <span
  m="4426450">And</span> <span m="4426580">you</span> <span
  m="4426670">receive</span> <span m="4427060">the</span> <span
  m="4427140">messages</span> <span m="4427720">from</span> <span
  m="4427900">your</span> <span m="4428040">neighbors.</span> <span
  m="4430720">And</span> <span m="4430870">now</span> <span
  m="4431030">you</span> <span m="4431190">do</span> <span m="4431550">a</span>
  <span m="4431680">relaxation</span> <span m="4432560">step,</span> <span
  m="4433350">as</span> <span m="4433500">you've</span> <span
  m="4433650">seen</span> <span m="4433900">before.</span> <span
  m="4435290">You</span> <span m="4435410">look</span> <span
  m="4435580">at</span> <span m="4435660">the</span> <span
  m="4435770">current</span> <span m="4436110">distance</span> <span
  m="4436540">you</span> <span m="4436670">have.</span> <span
  m="4436990">And</span> <span m="4437080">you</span> <span
  m="4437200">see</span> <span m="4437580">if</span> <span
  m="4438340">you've</span> <span m="4438530">gotten</span> <span
  m="4438830">a</span> <span m="4438880">new</span> <span
  m="4439090">distance</span> <span m="4439610">from</span> <span
  m="4439770">a</span> <span m="4439820">neighbor,</span> <span
  m="4440730">such</span> <span m="4440960">that</span> <span
  m="4441000">if</span> <span m="4441160">you</span> <span
  m="4441390">add</span> <span m="4442770">the</span> <span
  m="4442870">new</span> <span m="4443020">distance</span> <span
  m="4443540">you</span> <span m="4443650">receive</span> <span
  m="4444210">to</span> <span m="4444320">the</span> <span
  m="4444480">weight</span> <span m="4444820">of</span> <span
  m="4444940">the</span> <span m="4445070">edge</span> <span
  m="4445470">between</span> <span m="4445930">yourself</span> <span
  m="4446600">and</span> <span m="4446720">that</span> <span
  m="4446920">neighbor,</span> <span m="4447540">you</span> <span
  m="4447660">get</span> <span m="4447820">something</span> <span
  m="4448120">better</span> <span m="4448690">than</span> <span
  m="4448770">what</span> <span m="4448940">you</span> <span
  m="4449020">had</span> <span m="4449300">before.</span> <span
  m="4450350">If</span> <span m="4450410">you</span> <span
  m="4450510">get</span> <span m="4450750">that,</span> <span
  m="4451210">then</span> <span m="4451390">you're</span> <span
  m="4451520">going</span> <span m="4451790">to</span> <span
  m="4451920">improve</span> <span m="4452420">your</span> <span
  m="4452540">distance.</span> <span m="4454220">And</span> <span
  m="4454280">if</span> <span m="4454390">you</span> <span
  m="4454520">improve</span> <span m="4454910">your</span> <span
  m="4455030">distance,</span> <span m="4456170">then</span> <span
  m="4456340">you're</span> <span m="4456500">going</span> <span
  m="4456870">to</span> <span m="4457870">reset</span> <span
  m="4458310">your</span> <span m="4458430">parent</span> <span
  m="4459070">to</span> <span m="4459200">the</span> <span
  m="4459500">sender</span> <span m="4460200">of</span> <span
  m="4460410">this</span> <span m="4460760">new,</span> <span
  m="4461530">better</span> <span m="4462030">distance</span> <span
  m="4462770">information.</span></p><p><span m="4464720">So</span> <span
  m="4464920">does</span> <span m="4465390">this</span> <span
  m="4465500">algorithm</span> <span m="4465850">make</span> <span
  m="4466120">sense?</span> <span m="4466610">It's</span> <span
  m="4466790">like</span> <span m="4467230">what</span> <span
  m="4467450">you</span> <span m="4467680">saw</span> <span
  m="4468020">before.</span> <span m="4468580">But</span> <span
  m="4468690">there's</span> <span m="4468860">no</span> <span
  m="4469100">running</span> <span m="4470470">through</span> <span
  m="4470940">all</span> <span m="4471200">the</span> <span
  m="4471550">nodes.</span> <span m="4472470">Each</span> <span
  m="4472760">node</span> <span m="4473080">is</span> <span
  m="4473200">doing</span> <span m="4473460">its</span> <span
  m="4473620">own</span> <span m="4473830">thing.</span> <span
  m="4474310">It's</span> <span m="4474550">waiting</span> <span
  m="4474790">to</span> <span m="4474920">get</span> <span
  m="4475160">better</span> <span m="4475410">distance</span> <span
  m="4475840">information</span> <span m="4477040">and</span> <span
  m="4477660">re-computing.</span> <span m="4479100">And</span> <span
  m="4479300">then</span> <span m="4479450">it's</span> <span
  m="4479650">going</span> <span m="4479990">to</span> <span
  m="4480560">be</span> <span m="4480680">sending</span> <span
  m="4481110">out</span> <span m="4481310">its</span> <span
  m="4481470">better</span> <span m="4481750">information</span> <span
  m="4482070">at</span> <span m="4482390">the</span> <span
  m="4482853">next</span> <span m="4483084">round.</span> <span
  m="4486100">Question?</span> <span m="4486710">So</span> <span
  m="4486790">this</span> <span m="4486960">is</span> <span
  m="4487170">kind</span> <span m="4487380">of</span> <span m="4487480">a</span>
  <span m="4488210">jump</span> <span m="4488740">in</span> <span
  m="4488820">the</span> <span m="4488880">way</span> <span
  m="4489050">of</span> <span m="4489160">thinking.</span> <span
  m="4494060">All</span> <span m="4494130">right,</span> <span
  m="4494380">so</span> <span m="4494520">now</span> <span
  m="4494710">I'm</span> <span m="4494840">just</span> <span
  m="4495070">going</span> <span m="4495400">to</span> <span
  m="4496120">end</span> <span m="4496470">basically</span> <span
  m="4496990">with</span> <span m="4497120">an</span> <span
  m="4497250">animation</span> <span m="4497860">that'll</span> <span
  m="4498060">show</span> <span m="4498250">you</span> <span
  m="4498400">the</span> <span m="4498780">kinds</span> <span
  m="4499050">of</span> <span m="4499160">things</span> <span
  m="4499560">that</span> <span m="4499755">happen</span> <span
  m="4499950">here.</span></p><p><span m="4501930">All</span> <span
  m="4502010">right</span> <span m="4502180">so</span> <span
  m="4502270">you</span> <span m="4502420">start</span> <span
  m="4502820">out</span> <span m="4503980">with</span> <span
  m="4505460">the</span> <span m="4505660">initial</span> <span
  m="4506060">node.</span> <span m="4507100">And</span> <span
  m="4507260">what's</span> <span m="4507490">recorded</span> <span
  m="4507990">in</span> <span m="4508090">the</span> <span
  m="4508180">circle</span> <span m="4508670">is</span> <span
  m="4508850">the</span> <span m="4509300">best</span> <span
  m="4509580">distances.</span> <span m="4510590">The</span> <span
  m="4510680">rest</span> <span m="4510940">of</span> <span
  m="4511040">these,</span> <span m="4511370">the</span> <span
  m="4511470">best</span> <span m="4511730">distance</span> <span
  m="4512170">they</span> <span m="4512320">know</span> <span
  m="4512650">is</span> <span m="4512840">infinity.</span> <span
  m="4514660">So</span> <span m="4514700">I</span> <span
  m="4514780">didn't</span> <span m="4514940">write</span> <span
  m="4515200">that.</span> <span m="4515480">So</span> <span
  m="4515570">this</span> <span m="4515740">guy</span> <span
  m="4515910">knows</span> <span m="4516260">0</span> <span
  m="4518300">After</span> <span m="4518700">one</span> <span
  m="4518940">round,</span> <span m="4519940">he</span> <span
  m="4520100">sent</span> <span m="4521000">two</span> <span
  m="4521190">messages.</span> <span m="4523470">The</span> <span
  m="4523550">best</span> <span m="4523830">distance</span> <span
  m="4524800">each</span> <span m="4524900">of</span> <span
  m="4525040">these</span> <span m="4525280">guys</span> <span
  m="4525590">knows</span> <span m="4525920">is</span> <span
  m="4526070">just</span> <span m="4526280">the</span> <span
  m="4526380">weight</span> <span m="4526700">of</span> <span
  m="4526790">the</span> <span m="4526960">edge</span> <span
  m="4527310">between</span> <span m="4528320">v0</span> <span
  m="4528960">and</span> <span m="4529160">itself.</span> <span
  m="4530360">So</span> <span m="4530470">this</span> <span
  m="4530680">guy's</span> <span m="4530940">now</span> <span
  m="4531110">estimating</span> <span m="4531690">it's</span> <span
  m="4531840">distance</span> <span m="4532300">at</span> <span
  m="4532420">16</span> <span m="4533410">and</span> <span
  m="4533610">this</span> <span m="4533800">guy</span> <span
  m="4534080">at</span> <span m="4534280">1.</span> <span m="4536080">16</span>
  <span m="4536290">is</span> <span m="4536360">not</span> <span
  m="4536430">very</span> <span m="4536500">good</span> <span
  m="4536770">because</span> <span m="4537070">it's</span> <span
  m="4537200">actually</span> <span m="4537590">very</span> <span
  m="4537840">roundabout</span> <span m="4538500">routes</span> <span
  m="4538930">that</span> <span m="4539020">can</span> <span
  m="4539220">get</span> <span m="4539460">there.</span> <span
  m="4540070">But</span> <span m="4540180">it's</span> <span
  m="4540300">going</span> <span m="4540380">to</span> <span
  m="4540450">take</span> <span m="4540760">us</span> <span
  m="4540940">some</span> <span m="4541120">time</span> <span
  m="4541660">to</span> <span m="4542100">make</span> <span
  m="4542300">that</span> <span m="4542480">adjustment.</span></p><p><span
  m="4545310">After</span> <span m="4545710">two</span> <span
  m="4545950">rounds,</span> <span m="4548800">everybody</span> <span
  m="4549250">is</span> <span m="4549360">sending</span> <span
  m="4549720">their</span> <span m="4549840">distance</span> <span
  m="4550240">information.</span> <span m="4550880">But</span> <span
  m="4551030">now</span> <span m="4551220">we</span> <span
  m="4551330">get</span> <span m="4553750">a</span> <span
  m="4553820">correction</span> <span m="4554420">here.</span> <span
  m="4554700">This</span> <span m="4554940">used</span> <span
  m="4555200">to</span> <span m="4555280">say</span> <span
  m="4555800">16.</span> <span m="4557110">But</span> <span
  m="4557280">now</span> <span m="4557770">we</span> <span
  m="4557930">have</span> <span m="4558130">a</span> <span
  m="4558240">two</span> <span m="4558460">hop</span> <span
  m="4558820">path</span> <span m="4559520">that</span> <span
  m="4559710">gives</span> <span m="4559920">you</span> <span
  m="4560140">a</span> <span m="4560220">better</span> <span
  m="4561410">distance.</span> <span m="4562170">So</span> <span
  m="4562320">you</span> <span m="4562480">get</span> <span
  m="4562650">the</span> <span m="4562750">1</span> <span
  m="4562980">plus</span> <span m="4563230">the</span> <span
  m="4563310">14.</span> <span m="4564000">So</span> <span
  m="4564020">he's</span> <span m="4564240">going</span> <span
  m="4564530">to</span> <span m="4565370">here,</span> <span
  m="4566410">about</span> <span m="4566870">the</span> <span
  m="4567750">distance</span> <span m="4568190">of</span> <span
  m="4568300">15</span> <span m="4568850">as</span> <span m="4568970">a</span>
  <span m="4569030">result</span> <span m="4569490">of</span> <span
  m="4569580">what</span> <span m="4569810">1</span> <span
  m="4570110">sends.</span> <span m="4571390">And</span> <span
  m="4571680">some</span> <span m="4571850">new</span> <span
  m="4572000">guys</span> <span m="4573100">get</span> <span
  m="4573160">their</span> <span m="4573220">distance</span> <span
  m="4573650">is</span> <span m="4573800">calculated</span> <span
  m="4576740">And</span> <span m="4576950">then</span> <span
  m="4577130">after</span> <span m="4577460">three</span> <span
  m="4577780">rounds,</span> <span m="4580250">it</span> <span
  m="4580370">gets</span> <span m="4580550">a</span> <span
  m="4580600">little</span> <span m="4580780">bit</span> <span
  m="4580940">complicated.</span> <span m="4581680">So</span> <span
  m="4581790">maybe</span> <span m="4582150">I'm</span> <span
  m="4582280">just</span> <span m="4582480">going</span> <span
  m="4582780">to</span> <span m="4583390">flip</span> <span
  m="4583620">through</span> <span m="4583860">it</span> <span
  m="4584260">quickly</span> <span m="4584660">and</span> <span
  m="4584750">let</span> <span m="4584910">you</span> <span
  m="4585010">study</span> <span m="4585480">later.</span> <span
  m="4586500">But</span> <span m="4586670">you</span> <span
  m="4586770">see</span> <span m="4587000">that</span> <span
  m="4587160">you</span> <span m="4587620">keep</span> <span
  m="4587870">getting</span> <span m="4588170">improvements,</span> <span
  m="4589340">as</span> <span m="4589970">you</span> <span
  m="4590160">perform</span> <span m="4590620">relaxation</span> <span
  m="4591400">steps.</span> <span m="4592390">As</span> <span
  m="4592550">information</span> <span m="4593320">gets</span> <span
  m="4593650">to</span> <span m="4593770">somebody</span> <span
  m="4594250">by</span> <span m="4595110">better</span> <span
  m="4595670">paths</span> <span m="4596160">that</span> <span
  m="4596270">happen</span> <span m="4596540">to</span> <span
  m="4596610">have</span> <span m="4596770">more</span> <span
  m="4597010">hops,</span> <span m="4598430">they're</span> <span
  m="4598680">going</span> <span m="4598920">to</span> <span
  m="4599010">be</span> <span m="4599160">reducing</span> <span
  m="4599740">their</span> <span m="4599920">estimates.</span> <span
  m="4600560">I'm</span> <span m="4600690">going</span> <span
  m="4600920">to</span> <span m="4601020">flip,</span> <span
  m="4602140">and</span> <span m="4602270">you</span> <span
  m="4602380">see</span> <span m="4602650">that</span> <span
  m="4603680">this</span> <span m="4603910">guy's</span> <span
  m="4604220">estimate</span> <span m="4604640">is</span> <span
  m="4604770">going</span> <span m="4605050">down.</span> <span
  m="4607050">And</span> <span m="4607260">in</span> <span
  m="4607350">the</span> <span m="4607510">end,</span> <span
  m="4608150">after</span> <span m="4608490">eight</span> <span
  m="4608720">rounds</span> <span m="4609140">of</span> <span
  m="4609300">this,</span> <span m="4609920">you</span> <span
  m="4610090">end</span> <span m="4610300">up</span> <span
  m="4610450">with</span> <span m="4610790">a</span> <span
  m="4610880">very</span> <span m="4611160">roundabout</span> <span
  m="4611800">path</span> <span m="4612180">that</span> <span
  m="4612270">actually</span> <span m="4612710">gives</span> <span
  m="4612960">this</span> <span m="4613200">guy</span> <span
  m="4613940">a</span> <span m="4614000">much</span> <span
  m="4614260">better</span> <span m="4614550">estimate.</span></p><p><span
  m="4616430">So</span> <span m="4616590">you</span> <span
  m="4616700">can</span> <span m="4616850">see</span> <span
  m="4617040">how</span> <span m="4618210">that</span> <span
  m="4618370">works.</span> <span m="4621190">So</span> <span
  m="4621520">the</span> <span m="4621630">claim</span> <span
  m="4621960">is</span> <span m="4622080">that</span> <span
  m="4622210">eventually,</span> <span m="4622830">every</span> <span
  m="4623100">process</span> <span m="4623660">will</span> <span
  m="4623830">have</span> <span m="4624370">its</span> <span
  m="4624560">distance</span> <span m="4625080">being</span> <span
  m="4625380">a</span> <span m="4625470">correct</span> <span
  m="4626030">minimum</span> <span m="4627240">weight</span> <span
  m="4628270">of</span> <span m="4628330">the</span> <span
  m="4628450">path,</span> <span m="4629250">and</span> <span
  m="4629570">its</span> <span m="4629760">parent</span> <span
  m="4630060">will</span> <span m="4630150">be</span> <span
  m="4630300">correct.</span> <span m="4632710">I</span> <span
  m="4632850">think</span> <span m="4633110">maybe</span> <span
  m="4633370">this</span> <span m="4633550">is</span> <span m="4633620">a</span>
  <span m="4633690">good</span> <span m="4633890">place</span> <span
  m="4634210">to</span> <span m="4634320">stop.</span> <span
  m="4634710">We'll</span> <span m="4634840">pick</span> <span
  m="4635070">up</span> <span m="4635290">with</span> <span
  m="4635510">this</span> <span m="4635720">algorithm</span> <span
  m="4636360">and</span> <span m="4636460">its</span> <span
  m="4636610">analysis.</span> <span m="4637810">Most</span> <span
  m="4638220">of</span> <span m="4638330">next</span> <span
  m="4638660">time</span> <span m="4638930">is</span> <span
  m="4639050">going</span> <span m="4639320">to</span> <span
  m="4639380">be</span> <span m="4639520">spent</span> <span
  m="4639910">on</span> <span m="4640270">asynchronous</span> <span
  m="4641070">algorithms,</span> <span m="4642370">which</span> <span
  m="4642440">is</span> <span m="4642550">a</span> <span
  m="4642600">whole</span> <span m="4642930">other</span> <span
  m="4643210">level</span> <span m="4643560">of</span> <span
  m="4643670">complication.</span> <span m="4645560">So</span> <span
  m="4645760">I'll</span> <span m="4645850">see</span> <span
  m="4646010">you</span> <span m="4646130">on</span> <span
  m="4646270">Thursday.</span></p>
uid: cc27152a39adf9a64c6abc3166252a39
type: courses
layout: video
---
